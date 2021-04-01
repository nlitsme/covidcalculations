// list of mostly countries, with area and population.

const cinfo = {
"Sao Tome and Principe":{area: 1001, population:211028},
"Taiwan":{area:36197, population:23568378},
"Turks and Caicos Islands":{area:616, population:42953},
"Saint Helena":{area:121, population:4534},
"Cote d'Ivoire":{area:322463   , population:26378274  },
"Oceania":{area:8525989   , population:41570842  },
"Africa":{area:30370000   , population: 1275920972 },
"South America":{area:17840000   , population:423581078  },
"Asia":{area:44579000   , population:4560667108  },
"North America":{area:24709000   , population:579024000  },
"Europe":{area:10180000   , population:746419440  },
"Montserrat":{area:102   , population:4649  },

"Greenland":{area:2166086, population:56081},
"Hong Kong":{area:2755, population:7500700},
"Anguilla":{area:91, population:14731},
"Falkland Islands":{area:12200, population:3398},
"Macao":{area:115.3, population:682800},
"Cayman Islands":{area:264, population:65813},
"Faeroe Islands":{area:1399, population:52110},
"Afghanistan":{area:647500, population:37171921},
"Albania":{area:28748, population:2876591},
"Algeria":{area:2381740, population:34178188},
"American Samoa (United States)":{area:199, population:55465},
"Andorra":{area:468, population:77281},
"Angola":{area:1246700, population:12799293},
"Anguilla (United Kingdom)":{area:91, population:14731},
"Antigua and Barbuda":{area:442, population:96286},
"Argentina":{area:2766890, population:44361150},
"Armenia":{area:29743, population:2951745},
"Aruba (Kingdom of the Netherlands)":{area:180, population:105845},
"Ashmore and Cartier Islands (Australia)":{area:199, population:0},
"Australia":{area:7686850, population:24898152},
"Austria":{area:83858, population:8823054},
"Azerbaijan":{area:86600, population:10027874},
"Bahrain":{area:760, population:1569446},
"Bangladesh":{area:147570, population:161376708},
"Barbados":{area:430, population:286641},
"Belarus":{area:207560, population:9504700},
"Belgium":{area:30528, population:11358357},
"Belize":{area:22966, population:383071},
"Benin":{area:112620, population:8791832},
"Bermuda (United Kingdom)":{area:54, population:62756},
"Bermuda":{area:53, population:71176},
"Bhutan":{area:38394, population:754388},
"Bolivia":{area:1098580, population:11353142},
"Bonaire (Kingdom of the Netherlands)":{area:294, population:12093},
"Bosnia and Herzegovina":{area:51129, population:3531159},
"Botswana":{area:600370, population:1990876},
"Bouvet Island (Norway)":{area:49, population:0},
"Brazil":{area:8514877, population:209469323},
"British Virgin Islands (United Kingdom)":{area:151, population:29802},
"Brunei":{area:5765, population:428963},
"Bulgaria":{area:110910, population:7101859},
"Burkina Faso":{area:274200, population:15746232},
"Burundi":{area:27830, population:8988091},
"Cambodia":{area:181035, population:16249792},
"Cameroon":{area:475440, population:18879301},
"Canada":{area:9984670, population:37064562},
"Canary Islands (Spain)":{area:7492, population:2154905},
"Cape Verde":{area:4033, population:429474},
"Cayman Islands (United Kingdom)":{area:264, population:64174},
"Central African Republic":{area:622984, population:4511488},
"Ceuta (Spain)":{area:20, population:85107},
"Chad":{area:1284000, population:10329208},
"Chile":{area:756950, population:18729160},
"China":{area:9596961, population:1427647786},
"Christmas Island":{area:135, population:1843},
"Clipperton Island (France)":{area:6, population:0},
"Cocos (Keeling) Islands":{area:14, population:544},
"Colombia":{area:1141748, population:49661048},
"Comoros":{area:2170, population:752438},
"Cook Islands (New Zealand)":{area:240, population:17518},
"Coral Sea Islands (Australia)":{area:10, population:4},
"Costa Rica":{area:51100, population:4999441},
"Croatia":{area:56542, population:4284889},
"Cuba":{area:109886, population:11338134},
"Curaçao (Kingdom of the Netherlands)":{area:444, population:162752},
"Cyprus":{area:9251, population:1189265},
"Czechia":{area:78866, population:10610947},
"Democratic Republic of the Congo":{area:2345410, population:69575000},
"Denmark":{area:43094, population:5748796},
"Diamond Princess":{area:0.1, population:3711},
"Djibouti":{area:23000, population:828324},
"Dominica":{area:751, population:71625},
"Dominican Republic":{area:48671, population:10627141},
"East Timor":{area:14874, population:1267974},
"Easter Island (Chile)":{area:164, population:5761},
"Ecuador":{area:283560, population:17084358},
"Egypt":{area:1001450, population:82868000},
"El Salvador":{area:21041, population:6420746},
"England":{area:130279, population:56286961},
"Equatorial Guinea":{area:28051, population:633441},
"Eritrea":{area:121320, population:5647168},
"Estonia":{area:45226, population:1319133},
"Eswatini":{area:17363, population:1123913},
"Ethiopia":{area:1127127, population:84320987},
"European Union":{area:4233262, population:447706209},
"Falkland Islands (United Kingdom)":{area:12173, population:3234},
"Faroe Islands":{area:1399, population:52110},
"Federal Dependencies of Venezuela (Venezuela)":{area:342, population:2155},
"Federated States of Micronesia":{area:702, population:112640},
"Fiji":{area:18270, population:883483},
"Finland":{area:336593, population:5509717},
"France":{area:547030, population:67348000},
"French Guiana (France)":{area:91000, population:282938},
"French Polynesia (France)":{area:4167, population:277679},
"French Southern and Antarctic Lands (France)":{area:439781, population:100},
"Gabon":{area:267667, population:1514993},
"Georgia":{area:69700, population:3723464},
"Germany":{area:357168, population:82800000},
"Ghana":{area:239460, population:23832495},
"Gibraltar":{area:6.7, population:34003},
"Greece":{area:131957, population:10768477},
"Greenland (Kingdom of Denmark)":{area:2166086, population:56564},
"Grenada":{area:344, population:111454},
"Guadeloupe (France)":{area:1628, population:399848},
"Guam (United States)":{area:549, population:165768},
"Guatemala":{area:108889, population:17247849},
"Guernsey":{area:65, population:62792},
"Guinea":{area:245857, population:10057975},
"Guinea-Bissau":{area:36120, population:1533964},
"Guyana":{area:214999, population:779006},
"Haiti":{area:27750, population:11123178},
"Hawaii (United States)":{area:16636, population:1360301},
"Honduras":{area:112492, population:9587522},
"Hungary":{area:93030, population:9797561},
"Iceland":{area:103000, population:350710},
"India":{area:3287263, population:1352642280},
"Indonesia":{area:1904569, population:267670543},
"Iran":{area:1648195, population:81800188},
"Iraq":{area:438317, population:38433600},
"Ireland":{area:70280, population:4761865},
"Isle of Man":{area:572, population:83314},
"Israel":{area:20770, population:8381516},
"Italy":{area:301338, population:60589445},
"Ivory Coast":{area:322460, population:20617068},
"Jamaica":{area:10991, population:2934847},
"Japan":{area:377915, population:127202192},
"Jersey":{area:118.2, population:107800},
"Johnston Atoll":{area:1, population:0},
"Jordan":{area:89342, population:9965318},
"Kazakhstan":{area:2724900, population:18448600},
"Kenya":{area:582650, population:39002772},
"Kiribati":{area:811, population:115847},
"Kosovo":{area:10887, population:1810463},
"Kuwait":{area:17818, population:4137312},
"Kyrgyzstan":{area:199951, population:6304030},
"Laos":{area:236800, population:7061507},
"Latvia":{area:64589, population:1925800},
"Lebanon":{area:10400, population:6859408},
"Lesotho":{area:30355, population:2130819},
"Liberia":{area:111370, population:3441790},
"Libya":{area:1759540, population:6310434},
"Liechtenstein":{area:160, population:38111},
"Lithuania":{area:65300, population:2800667},
"Luxembourg":{area:2586, population:602005},
"MS Zaandam":{area:0.08, population:1829},
"Madagascar":{area:587040, population:20653556},
"Madeira (Portugal)":{area:797, population:245000},
"Malawi":{area:118480, population:14268711},
"Malaysia":{area:329847, population:31528033},
"Maldives":{area:298, population:515696},
"Mali":{area:1240000, population:12666987},
"Malta":{area:316, population:445426},
"Marshall Islands":{area:181, population:58413},
"Martinique (France)":{area:1128, population:375673},
"Mauritania":{area:1030700, population:3129486},
"Mauritius":{area:2040, population:1284264},
"Mayotte (France)":{area:374, population:223765},
"Melilla (Spain)":{area:12, population:85116},
"Mexico":{area:1964375, population:126190788},
"Midway Islands":{area:66, population:40},
"Moldova":{area:33846, population:4434547},
"Monaco":{area:2.02, population:38400},
"Mongolia":{area:1564116, population:3170216},
"Montenegro":{area:13812, population:642550},
"Montserrat (United Kingdom)":{area:102, population:4993},
"Morocco":{area:446550, population:35740000},
"Mozambique":{area:801590, population:21669278},
"Myanmar":{area:676578, population:53708320},
"Namibia":{area:825418, population:2108665},
"Nauru":{area:21, population:10670},
"Nepal":{area:147181, population:28095714},
"Netherlands Antilles":{area:999, population:304759},
"Netherlands":{area:41543, population:17271990},
"New Caledonia (France)":{area:19060, population:279993},
"New Zealand":{area:268680, population:4743131},
"Nicaragua":{area:130373, population:6465501},
"Niger":{area:1267000, population:15306252},
"Nigeria":{area:923768, population:166629000},
"Niue (New Zealand)":{area:260, population:1620},
"Norfolk Island (Australia)":{area:35, population:2302},
"North Korea":{area:120538, population:25549604},
"North Macedonia":{area:25713, population:2103721},
"Northern Cyprus":{area:3355, population:326000},
"Northern Ireland":{area:14130, population:1893700},
"Northern Mariana Islands (United States)":{area:477, population:56882},
"Norway":{area:385203, population:5295619},
"Nueva Esparta (Venezuela)":{area:1151, population:491610},
"Oman":{area:309500, population:4829473},
"Pakistan":{area:881913, population:211103000},
"Palau":{area:458, population:17907},
"Palestine":{area:6220, population:4862979},
"Panama":{area:75417, population:4176869},
"Papua (Indonesia)":{area:319036, population:3486432},
"Papua New Guinea":{area:462840, population:8606323},
"Paraguay":{area:406750, population:6956066},
"Peru":{area:1285220, population:31989260},
"Philippines":{area:343448, population:106651394},
"Pitcairn Islands (United Kingdom)":{area:47, population:47},
"Poland":{area:312685, population:38422346},
"Portugal":{area:92212, population:10379537},
"Puerto Rico (United States)":{area:8870, population:3039596},
"Qatar":{area:11586, population:2781682},
"Republic of the Congo":{area:342000, population:4012809},
"Romania":{area:238397, population:19638000},
"Russia":{area:17098246, population:146745098},
"Rwanda":{area:26338, population:10473282},
"Réunion (France)":{area:2512, population:743981},
"Saba (Kingdom of the Netherlands)":{area:13, population:1537},
"Saint Barthélemy (France)":{area:21, population:7448},
"Saint Helena, Ascension and Tristan da Cunha (United Kingdom)":{area:420, population:7728},
"Saint Kitts and Nevis":{area:261, population:52441},
"Saint Lucia":{area:539, population:181889},
"Saint Martin (France)":{area:54, population:29820},
"Saint Pierre and Miquelon (France)":{area:242, population:5849},
"Saint Vincent and the Grenadines":{area:389, population:110211},
"Samoa":{area:2944, population:196129},
"San Andrés and Providencia (Colombia)":{area:53, population:77701},
"San Marino":{area:61.2, population:33285},
"Saudi Arabia":{area:2149690, population:33702756},
"Scotland":{area:77933, population:5463300},
"Senegal":{area:196190, population:13711597},
"Serbia":{area:88361, population:7040272},
"Seychelles":{area:455, population:87476},
"Sierra Leone":{area:71740, population:6440053},
"Singapore":{area:697, population:5757499},
"Sint Eustatius (Kingdom of the Netherlands)":{area:21, population:2739},
"Sint Maarten (Kingdom of the Netherlands)":{area:34, population:41940},
"Slovakia":{area:49035, population:5435343},
"Slovenia":{area:20273, population:2066880},
"Solomon Islands":{area:28450, population:652857},
"Somalia":{area:637657, population:9832017},
"South Africa":{area:1219912, population:51770560},
"South Georgia and the South Sandwich Islands (United Kingdom)":{area:3093, population:20},
"South Korea":{area:100210, population:51171706},
"South Sudan":{area:619745, population:8260490},
"Spain":{area:505990, population:46698151},
"Sri Lanka":{area:65610, population:21228763},
"Sudan":{area:1861484, population:30894000},
"Suriname":{area:163270, population:575990},
"Svalbard and Jan Mayen Islands":{area:61022, population:2939},
"Sweden":{area:450295, population:10151588},
"Switzerland":{area:41285, population:8401120},
"Syria":{area:185180, population:16945057},
"São Tomé and Príncipe":{area:1001, population:212679},
"Taiwan (ROC)":{area:36193, population:23726460},
"Tajikistan":{area:143100, population:9100835},
"Tanzania":{area:945087, population:44929002},
"Thailand":{area:513120, population:69428453},
"The Bahamas":{area:13943, population:385637},
"The Gambia":{area:11300, population:1782893},
"Togo":{area:56785, population:6019877},
"Tokelau (New Zealand)":{area:10, population:1319},
"Tonga":{area:748, population:103197},
"Trinidad and Tobago":{area:5130, population:1389843},
"Tunisia":{area:163610, population:10486339},
"Turkey":{area:783356, population:83154997},
"Turkmenistan":{area:488100, population:5850901},
"Turks and Caicos Islands (United Kingdom)":{area:948, population:37665},
"Tuvalu":{area:26, population:11508},
"Uganda":{area:236040, population:32369558},
"Ukraine":{area:603628, population:42418235},
"United Arab Emirates":{area:83600, population:9630959},
"United Kingdom":{area:244820, population:66040229},
"United States Virgin Islands (United States)":{area:347, population:104680},
"United States":{area:9629091, population:327096265},
"Uruguay":{area:176220, population:3449285},
"Uzbekistan":{area:447400, population:32476244},
"Vanuatu":{area:12200, population:292680},
"Vatican City":{area:0.44, population:1000},
"Venezuela":{area:916445, population:28887118},
"Vietnam":{area:331212, population:95545962},
"Wake Island (United States)":{area:2, population:150},
"Wales":{area:20779, population:3153000},
"Wallis and Futuna (France)":{area:274, population:11661},
"West Papua (Indonesia)":{area:140375, population:760855},
"Western Sahara":{area:266000, population:405210},
"World":{area:148940000, population:7840000000},
"Yemen":{area:527968, population:28498683},
"Zambia":{area:752614, population:11862740},
"Zimbabwe":{area:390580, population:11392629},
};

