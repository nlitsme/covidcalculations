// x coords
// y range
// graphs.
class Plot {
    constructor(canvas)
    {
        this.canvas = canvas
        this.graphs = []
    }
    setgraph(id, values)
    {
        this.graphs[id] = values;
    }

    calcx(x)
    {
        return this.canvas.width*(0.1 + (x-this.xmin)/(this.xmax-this.xmin)*0.8);
    }
    calcy(y)
    {
        return this.canvas.height*(0.9 - (y-this.ymin)/(this.ymax-this.ymin)*0.8);
    }
    rescale()
    {
        var mi;
        var ma;
        var nma;
        for (const g of this.graphs) {
            for (const yval of g) {
                if (mi === undefined || yval<mi)
                    mi = yval;
                if (ma === undefined || yval>ma)
                    ma = yval;
            }
            if (nma === undefined || g.length > nma)
                nma = g.length;
        }
        this.ymin = mi;
        this.ymax = ma;
        this.xmin = 0;
        this.xmax = nma;
    }

    display()
    {
        var ctx = this.canvas.getContext("2d")
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        ctx.strokeStyle = "#000000";
        ctx.fillStyle = "#000000";
        for (const g of this.graphs) {
            var xp = undefined;
            var yp = undefined;
            for (const x in g) {
                var y = g[x];

                this.drawdot(ctx, x, y);
                if (xp !== undefined)
                    this.drawline(ctx, xp, yp, x, y);

                xp = x; yp = y;
            }
            ctx.strokeStyle = "#ff0000";
            ctx.fillStyle = "#ff0000";
        }
    }

    drawdot(ctx, x, y)
    {
        ctx.beginPath();
        ctx.arc(this.calcx(x), this.calcy(y), 3, 0, 2*Math.PI);
        ctx.fill();
    }
    drawline(ctx, x0, y0, x1, y1)
    {
        ctx.beginPath();
        ctx.moveTo(this.calcx(x0), this.calcy(y0));
        ctx.lineTo(this.calcx(x1), this.calcy(y1));
        ctx.stroke();
    }

};
