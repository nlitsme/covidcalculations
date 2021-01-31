// a lowpass filter
class LowPass {
    sinc(x)
    {
        if (x==0) return 1.0;
        return Math.sin(Math.PI*x) / (Math.PI*x);
    }

    // construct with the cutoff frequency, and 'b' parameter,
    // a larger 'b', means more latency, and a better filter.
    constructor(fc, b)
    {
        var N = Math.ceil(4/b);
        if (N%2==0) { ++N; }
        var sumh = 0;
        this.h = [];
        for (let n = 0 ; n < N ; ++n) {
            var h = this.sinc(2*fc*(n-(N-1)/2));
            var w = 0.42 - 0.5*Math.cos(2*Math.PI*n/(N-1)) + 0.08*Math.cos(4*Math.PI*n/(N-1));
            this.h.push(h*w);
            sumh += h*w;
        }
        for (let n = 0 ; n < N ; ++n)
            this.h[n] /= sumh;
    }
    convolve(a, b)
    {
        var res = [];
        for (let j=Math.floor(b.length/2) ; j>0 ; --j)
        {
            var sum = 0;
            for (let jj=j, i=0 ; i<a.length && jj<b.length ; ++i, ++jj)
                sum += a[i] * b[jj];
            res.push(sum);
        }
        for (let i=0 ; i < a.length-Math.floor(b.length/2) ; ++i)
        {
            var sum = 0;
            for (let ii=i, j=0 ; j<b.length && ii<a.length ; ++j, ++ii)
                sum += a[ii] * b[j];
            res.push(sum);
        }
        return res;
    }
    calc(vec)
    {
        return this.convolve(vec, this.h);
    }
};

