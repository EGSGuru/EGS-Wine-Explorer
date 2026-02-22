const DATA=[
{id:"france",name:"France",flag:"🇫🇷",code:"fr",
description:"The world's most prestigious wine nation, home to Bordeaux, Burgundy, Champagne and many more iconic appellations.",
keyGrapes:["Cabernet Sauvignon","Pinot Noir","Chardonnay","Syrah","Sauvignon Blanc","Riesling"],
regions:[
{id:"bordeaux",name:"Bordeaux",icon:"🏰",climate:"Maritime",
description:"The world's largest fine wine region, famed for its structured blends based on Cabernet Sauvignon and Merlot.",
keyGrapes:["Cabernet Sauvignon","Merlot","Cabernet Franc","Sauvignon Blanc"],
wineries:[
{id:"chateau-margaux",name:"Château Margaux",founded:1787,rating:5,
style:"Ethereally elegant Cabernet-dominant blend",
description:"A Premier Grand Cru Classé producing wines of extraordinary perfume and silky structure from the Margaux appellation.",
wines:[
{name:"Château Margaux Premier Grand Cru Classé",type:"red",grape:"Cabernet Sauvignon, Merlot, Petit Verdot, Cabernet Franc",vintage:"2018",description:"Legendary elegance with blackcurrant, violet and graphite layered over immaculate tannins.",price:"€850–1,200",score:98},
{name:"Pavillon Rouge du Château Margaux",type:"red",grape:"Cabernet Sauvignon, Merlot",vintage:"2019",description:"The second wine — refined and generous with the unmistakable Margaux signature.",price:"€130–180",score:92},
{name:"Pavillon Blanc du Château Margaux",type:"white",grape:"Sauvignon Blanc",vintage:"2020",description:"One of the finest white Bordeaux, creamy and mineral with exceptional aging potential.",price:"€180–220",score:94}
]},
{id:"chateau-petrus",name:"Château Pétrus",founded:1800,rating:5,
style:"Opulent, near-pure Merlot of extraordinary richness",
description:"Pomerol's most celebrated estate, producing one of the world's rarest and most sought-after wines from blue clay soils.",
wines:[
{name:"Pétrus",type:"red",grape:"Merlot, Cabernet Franc",vintage:"2018",description:"Monumental concentration with plum, truffle and iron notes; decades of aging potential.",price:"€3,500–6,000",score:100},
{name:"Pétrus",type:"red",grape:"Merlot, Cabernet Franc",vintage:"2015",description:"A transcendent vintage — velvety, complex and complete in every dimension.",price:"€5,000–8,000",score:100}
]},
{id:"chateau-lafite",name:"Château Lafite Rothschild",founded:1680,rating:5,
style:"Supremely elegant cedar-and-pencil Pauillac",
description:"Perhaps the most famous wine name in the world — a First Growth producing wines of extraordinary longevity and refinement.",
wines:[
{name:"Château Lafite Rothschild",type:"red",grape:"Cabernet Sauvignon, Merlot, Cabernet Franc",vintage:"2019",description:"Pure cedar, blackcurrant and tobacco with aristocratic precision and great length.",price:"€900–1,400",score:98},
{name:"Carruades de Lafite",type:"red",grape:"Merlot, Cabernet Sauvignon, Cabernet Franc",vintage:"2020",description:"The prestigious second wine — fresh, complex and beautifully proportioned.",price:"€130–180",score:92},
{name:"Château Duhart-Milon",type:"red",grape:"Cabernet Sauvignon, Merlot",vintage:"2019",description:"The Rothschild-owned Fourth Growth, sharing terroir with Lafite, refined and classically built.",price:"€55–80",score:91}
]},
{id:"mouton-rothschild",name:"Château Mouton Rothschild",founded:1853,rating:5,
style:"Powerful, opulent Cabernet with iconic label art",
description:"Elevated to First Growth in 1973, famous for its artist-designed labels and richly hedonistic Pauillac style.",
wines:[
{name:"Château Mouton Rothschild",type:"red",grape:"Cabernet Sauvignon, Merlot, Cabernet Franc, Petit Verdot",vintage:"2018",description:"Sumptuous dark fruit, tobacco and graphite with the hallmark Mouton voluptuousness.",price:"€800–1,300",score:97},
{name:"Le Petit Mouton",type:"red",grape:"Cabernet Sauvignon, Merlot",vintage:"2019",description:"The second wine — rich, polished and showing excellent complexity for its price.",price:"€95–140",score:91}
]}
]},
{id:"burgundy",name:"Burgundy (Bourgogne)",icon:"🍇",climate:"Continental",
description:"The spiritual home of Pinot Noir and Chardonnay, where terroir reigns supreme and tiny parcels command astronomical prices.",
keyGrapes:["Pinot Noir","Chardonnay","Aligoté","Gamay"],
wineries:[
{id:"drc",name:"Domaine de la Romanée-Conti",founded:1869,rating:5,
style:"The pinnacle of Pinot Noir — ethereal, complex, immortal",
description:"The most celebrated domaine in Burgundy, owner of the Romanée-Conti monopole and producer of the world's most coveted Pinot Noirs.",
wines:[
{name:"Romanée-Conti Grand Cru",type:"red",grape:"Pinot Noir",vintage:"2018",description:"The world's greatest wine — sublime perfume, silken texture and infinite complexity.",price:"€14,000–25,000",score:100},
{name:"La Tâche Grand Cru",type:"red",grape:"Pinot Noir",vintage:"2019",description:"Intense, spicy and wild-strawberry-laden with extraordinary tension and length.",price:"€3,000–5,000",score:99},
{name:"Richebourg Grand Cru",type:"red",grape:"Pinot Noir",vintage:"2019",description:"Voluptuous and deeply concentrated with floral lift and great aging potential.",price:"€1,800–3,000",score:98},
{name:"Montrachet Grand Cru",type:"white",grape:"Chardonnay",vintage:"2019",description:"Arguably the greatest dry white wine on earth — honeyed, mineral and monumental.",price:"€3,000–5,000",score:99}
]},
{id:"rousseau",name:"Domaine Armand Rousseau",founded:1919,rating:5,
style:"Classical, structured Gevrey-Chambertin of the highest order",
description:"The benchmark for Gevrey-Chambertin, producing austere yet profound Pinot Noirs across a stellar range of Grand Crus.",
wines:[
{name:"Chambertin Grand Cru",type:"red",grape:"Pinot Noir",vintage:"2018",description:"Powerful and aristocratic with dark fruit, earth and an iron-velvet texture.",price:"€600–950",score:98},
{name:"Chambertin Clos de Bèze Grand Cru",type:"red",grape:"Pinot Noir",vintage:"2018",description:"More refined than Chambertin itself — elegant, floral and hauntingly long.",price:"€550–900",score:97},
{name:"Gevrey-Chambertin Clos Saint-Jacques 1er Cru",type:"red",grape:"Pinot Noir",vintage:"2019",description:"Premier Cru of Grand Cru quality — sappy, complex and beautifully delineated.",price:"€200–320",score:95}
]},
{id:"jadot",name:"Maison Louis Jadot",founded:1859,rating:4,
style:"Reliable, terroir-driven Burgundy across all appellations",
description:"One of Burgundy's finest négociants, owning excellent vineyards and producing consistently fine wines from village to Grand Cru level.",
wines:[
{name:"Chambertin Clos de Bèze Grand Cru",type:"red",grape:"Pinot Noir",vintage:"2018",description:"Rich and complete, showing the power and grace of this legendary Grand Cru.",price:"€250–380",score:94},
{name:"Beaune Clos des Ursules 1er Cru",type:"red",grape:"Pinot Noir",vintage:"2019",description:"A Jadot flagship — supple, fragrant and showing classic Beaune elegance.",price:"€65–90",score:91},
{name:"Puligny-Montrachet Les Folatières 1er Cru",type:"white",grape:"Chardonnay",vintage:"2020",description:"Bright, mineral and creamy Chardonnay with hazelnut and white flower complexity.",price:"€90–130",score:92},
{name:"Bâtard-Montrachet Grand Cru",type:"white",grape:"Chardonnay",vintage:"2019",description:"Rich and buttery with tremendous depth — one of Burgundy's great white Grand Crus.",price:"€200–300",score:95}
]}
]},
{id:"champagne",name:"Champagne",icon:"✨",climate:"Cool Continental",
description:"The world's most famous sparkling wine region, producing complex méthode champenoise wines from Chardonnay, Pinot Noir and Meunier.",
keyGrapes:["Chardonnay","Pinot Noir","Pinot Meunier"],
wineries:[
{id:"krug",name:"Krug",founded:1843,rating:5,
style:"Oxidative, complex, multi-vintage prestige Champagne",
description:"The most singular Champagne house, vinifying each cru separately in small oak barrels to create wines of unmatched richness and complexity.",
wines:[
{name:"Krug Grande Cuvée 170ème Édition",type:"sparkling",grape:"Chardonnay, Pinot Noir, Pinot Meunier",vintage:"NV",description:"The house flagship — toasty, creamy and intricate with extraordinary length and depth.",price:"€200–250",score:97},
{name:"Krug Millésimé 2008",type:"sparkling",grape:"Chardonnay, Pinot Noir, Pinot Meunier",vintage:"2008",description:"A legendary vintage from Krug — tense, mineral and built for decades of evolution.",price:"€350–450",score:99},
{name:"Krug Clos du Mesnil",type:"sparkling",grape:"Chardonnay",vintage:"2006",description:"From a walled vineyard in Le Mesnil-sur-Oger — electric, saline and breathtakingly pure.",price:"€800–1,200",score:100},
{name:"Krug Rosé 27ème Édition",type:"rose",grape:"Pinot Noir, Chardonnay, Pinot Meunier",vintage:"NV",description:"Complex rosé Champagne with red berry fragrance and the signature Krug richness.",price:"€280–350",score:96}
]},
{id:"roederer",name:"Louis Roederer",founded:1776,rating:5,
style:"Prestige cuvées of exceptional elegance and consistency",
description:"One of the few remaining family-owned Champagne houses, best known for the legendary Cristal cuvée created originally for Tsar Alexander II.",
wines:[
{name:"Cristal 2015",type:"sparkling",grape:"Chardonnay, Pinot Noir",vintage:"2015",description:"The ultimate Champagne statement — radiant, precise and remarkably pure with decades ahead.",price:"€280–380",score:99},
{name:"Cristal Rosé 2013",type:"rose",grape:"Pinot Noir, Chardonnay",vintage:"2013",description:"Rare and refined, with strawberry and raspberry intensity balanced by Champagne minerality.",price:"€500–700",score:98},
{name:"Blanc de Blancs 2015",type:"sparkling",grape:"Chardonnay",vintage:"2015",description:"Vibrant, chalky and expressive — a superb vintage Blanc de Blancs.",price:"€80–110",score:93},
{name:"Brut Premier",type:"sparkling",grape:"Chardonnay, Pinot Noir, Pinot Meunier",vintage:"NV",description:"The entry-level flagship — fresh, structured and consistently excellent.",price:"€45–60",score:91}
]},
{id:"bollinger",name:"Bollinger",founded:1829,rating:5,
style:"Full-bodied, biscuity, Pinot Noir-dominant Champagne",
description:"A traditional house favouring oak-fermented reserve wines and long aging, producing Champagne of remarkable depth and character.",
wines:[
{name:"R.D. 2007",type:"sparkling",grape:"Pinot Noir, Chardonnay",vintage:"2007",description:"Récemment Dégorgé — aged on lees for over a decade, delivering toasted brioche and extraordinary complexity.",price:"€250–350",score:97},
{name:"La Grande Année 2014",type:"sparkling",grape:"Pinot Noir, Chardonnay",vintage:"2014",description:"Rich, structured and deeply satisfying with classic Bollinger breadth and persistence.",price:"€130–180",score:94},
{name:"Special Cuvée",type:"sparkling",grape:"Pinot Noir, Chardonnay, Pinot Meunier",vintage:"NV",description:"The iconic NV — bold, biscuity and satisfyingly full-bodied.",price:"€55–70",score:91}
]}
]},
{id:"rhone",name:"Rhône Valley",icon:"🌞",climate:"Mediterranean / Continental",
description:"Home to majestic Syrah in the North (Hermitage, Côte-Rôtie) and Grenache-dominant blends in the South (Châteauneuf-du-Pape).",
keyGrapes:["Syrah","Grenache","Mourvèdre","Viognier","Roussanne","Marsanne"],
wineries:[
{id:"guigal",name:"E. Guigal",founded:1946,rating:5,
style:"The benchmark for Northern Rhône Syrah — the 'La La' wines are legendary",
description:"Marcel Guigal's estate in Ampuis has put Côte-Rôtie on the world map with his single-vineyard 'La La La' wines aged 42 months in new oak.",
wines:[
{name:"Côte-Rôtie La Mouline",type:"red",grape:"Syrah, Viognier",vintage:"2017",description:"Hauntingly perfumed — violet, bacon fat and raspberry with silken tannins; one of the world's great wines.",price:"€400–600",score:99},
{name:"Côte-Rôtie La Turque",type:"red",grape:"Syrah, Viognier",vintage:"2017",description:"Dark, spicy and muscular with roasted meat, black olive and leather complexity.",price:"€450–650",score:98},
{name:"Hermitage Rouge",type:"red",grape:"Syrah",vintage:"2018",description:"Structured and age-worthy Hermitage with granite mineral character and dark fruit depth.",price:"€100–140",score:94},
{name:"Condrieu La Doriane",type:"white",grape:"Viognier",vintage:"2020",description:"The finest Condrieu from Guigal — explosive apricot and peach blossom perfume with rich, unctuous texture.",price:"€80–110",score:95}
]},
{id:"chapoutier",name:"M. Chapoutier",founded:1808,rating:4,
style:"Biodynamic Northern Rhône with great terroir expression",
description:"A major Rhône négociant and domaine pioneer of biodynamic viticulture, producing benchmark Hermitage and Crozes-Hermitage.",
wines:[
{name:"Ermitage Le Pavillon",type:"red",grape:"Syrah",vintage:"2018",description:"One of the Rhône's most powerful Syrahs — dense, inky and built for multi-decade aging.",price:"€180–250",score:96},
{name:"Châteauneuf-du-Pape Barbe Rac",type:"red",grape:"Grenache",vintage:"2019",description:"Old-vine Grenache from a single parcel — concentrated, warm and gloriously spicy.",price:"€55–75",score:93},
{name:"Condrieu Invitare",type:"white",grape:"Viognier",vintage:"2020",description:"Rich apricot, white peach and almond blossom — a textbook aromatic Viognier.",price:"€55–75",score:92}
]},
{id:"chateau-rayas",name:"Château Rayas",founded:1880,rating:5,
style:"Old-vine Grenache of mystical complexity from sandy soils",
description:"The most legendary estate in Châteauneuf-du-Pape, producing wines of extraordinary elegance from very old Grenache on sandy soils.",
wines:[
{name:"Châteauneuf-du-Pape Réserve Rouge",type:"red",grape:"Grenache",vintage:"2015",description:"One of the Rhône's greatest — ethereal, complex and seemingly defying its 100% Grenache composition.",price:"€280–400",score:99},
{name:"Châteauneuf-du-Pape Réserve Blanc",type:"white",grape:"Clairette, Grenache Blanc",vintage:"2016",description:"Rare and fascinating — oxidative, rich and completely unlike any other southern Rhône white.",price:"€180–250",score:96},
{name:"Pignan",type:"red",grape:"Grenache",vintage:"2015",description:"The second wine of Rayas — sharing the same DNA at a fraction of the price.",price:"€70–100",score:93}
]}
]},
{id:"alsace",name:"Alsace",icon:"🏡",climate:"Continental (very dry)",
description:"France's most Germanic wine region, producing aromatic whites of great purity from Riesling, Gewurztraminer and Pinot Gris.",
keyGrapes:["Riesling","Gewurztraminer","Pinot Gris","Pinot Blanc","Sylvaner"],
wineries:[
{id:"trimbach",name:"Trimbach",founded:1626,rating:5,
style:"Dry, steely, mineral Alsace whites of exceptional purity",
description:"The benchmark Alsace producer for dry, precise Riesling — Clos Sainte Hune is considered one of the world's greatest white wines.",
wines:[
{name:"Riesling Clos Sainte Hune",type:"white",grape:"Riesling",vintage:"2017",description:"One of the world's great white wines — electric, mineral and almost impossibly concentrated.",price:"€130–180",score:99},
{name:"Riesling Frédéric Emile",type:"white",grape:"Riesling",vintage:"2016",description:"The classic Trimbach Riesling — austere, citrusy and built for long aging.",price:"€40–60",score:94},
{name:"Gewurztraminer Seigneurs de Ribeaupierre",type:"white",grape:"Gewurztraminer",vintage:"2018",description:"Opulent lychee, rose and ginger with the characteristic Alsatian spice richness.",price:"€40–55",score:92}
]},
{id:"zind-humbrecht",name:"Zind-Humbrecht",founded:1620,rating:5,
style:"Rich, terroir-expressive biodynamic Alsace",
description:"The leading biodynamic domaine in Alsace, producing wines of remarkable concentration and Grand Cru precision.",
wines:[
{name:"Riesling Rangen de Thann Grand Cru Clos Saint Urbain",type:"white",grape:"Riesling",vintage:"2018",description:"From a volcanic Grand Cru — smoky, mineral and extraordinarily complex.",price:"€75–110",score:97},
{name:"Pinot Gris Rangen de Thann Grand Cru",type:"white",grape:"Pinot Gris",vintage:"2018",description:"Rich and spicy with truffle and smoked meat character from this unique terroir.",price:"€70–100",score:95},
{name:"Gewurztraminer Goldert Grand Cru",type:"white",grape:"Gewurztraminer",vintage:"2018",description:"Flamboyantly aromatic — rose, lychee and candied orange peel with a dry finish.",price:"€60–85",score:93}
]},
{id:"hugel",name:"Hugel & Fils",founded:1639,rating:4,
style:"Traditional, age-worthy Alsace from a historic family domaine",
description:"One of Alsace's oldest and most respected family estates, consistently producing benchmark varietal wines across all styles.",
wines:[
{name:"Riesling Jubilee",type:"white",grape:"Riesling",vintage:"2016",description:"Classic Hugel Riesling — dry, precise and minerally driven with citrus and apricot.",price:"€35–50",score:92},
{name:"Gewurztraminer Jubilee",type:"white",grape:"Gewurztraminer",vintage:"2017",description:"Textbook Gewurz — exuberantly spicy, floral and well-balanced.",price:"€40–55",score:91},
{name:"Pinot Gris Jubilee",type:"white",grape:"Pinot Gris",vintage:"2017",description:"Smoke, honey and spice with the Hugel hallmark of restrained richness.",price:"€38–52",score:91}
]}
]}
]},

{id:"italy",name:"Italy",flag:"🇮🇹",code:"it",
description:"Italy's extraordinary diversity spans 20 wine regions with indigenous grapes like Sangiovese, Nebbiolo, and Nero d'Avola producing world-class wines.",
keyGrapes:["Sangiovese","Nebbiolo","Barbera","Nero d'Avola","Aglianico","Pinot Grigio"],
regions:[
{id:"tuscany",name:"Tuscany (Toscana)",icon:"🌿",climate:"Mediterranean",
description:"Home of Chianti, Brunello di Montalcino, and the Super Tuscans — Italy's most internationally celebrated wine region.",
keyGrapes:["Sangiovese","Cabernet Sauvignon","Merlot","Vernaccia"],
wineries:[
{id:"sassicaia",name:"Tenuta San Guido (Sassicaia)",founded:1944,rating:5,
style:"Italy's original Super Tuscan — Cabernet Sauvignon on Bolgheri gravels",
description:"Birthplace of the Super Tuscan movement, Sassicaia shocked the world in the 1970s by producing a Bordeaux-style blend from coastal Bolgheri.",
wines:[
{name:"Sassicaia",type:"red",grape:"Cabernet Sauvignon, Cabernet Franc",vintage:"2019",description:"Italy's most iconic single estate red — cedar, blackcurrant and mineral precision with extraordinary aging potential.",price:"€220–300",score:97},
{name:"Guidalberto",type:"red",grape:"Cabernet Sauvignon, Merlot",vintage:"2020",description:"The second wine of Sassicaia — elegant, structured and showing excellent varietal character.",price:"€45–65",score:91},
{name:"Le Difese",type:"red",grape:"Cabernet Sauvignon, Sangiovese",vintage:"2021",description:"Accessible and charming — a fruit-forward entry point into the Sassicaia family.",price:"€20–30",score:88}
]},
{id:"antinori",name:"Antinori",founded:1385,rating:5,
style:"One of Italy's most historic families producing Super Tuscans and fine Chianti",
description:"26 generations of winemaking culminating in legendary Super Tuscans like Tignanello and Solaia, which redefined Italian wine in the 1970s.",
wines:[
{name:"Tignanello",type:"red",grape:"Sangiovese, Cabernet Sauvignon, Cabernet Franc",vintage:"2018",description:"The wine that created the Super Tuscan category — still a benchmark of Italian wine greatness.",price:"€90–130",score:95},
{name:"Solaia",type:"red",grape:"Cabernet Sauvignon, Sangiovese, Cabernet Franc",vintage:"2018",description:"Antinori's most Bordeaux-like wine — opulent, structured and deeply complex.",price:"€220–300",score:97},
{name:"Pèppoli Chianti Classico",type:"red",grape:"Sangiovese",vintage:"2020",description:"An approachable, food-friendly Chianti Classico from the estate surrounding their Santa Cristina winery.",price:"€18–25",score:89}
]},
{id:"biondi-santi",name:"Biondi-Santi",founded:1840,rating:5,
style:"The birthplace of Brunello di Montalcino — austere, aristocratic, immortal",
description:"Credited with creating Brunello di Montalcino, this historic estate produces wines of legendary structure and longevity from Sangiovese Grosso.",
wines:[
{name:"Brunello di Montalcino Riserva",type:"red",grape:"Brunello (Sangiovese Grosso)",vintage:"2015",description:"The pinnacle of Italian red wine — austere, tannic and built for 50+ years of aging.",price:"€450–700",score:98},
{name:"Brunello di Montalcino",type:"red",grape:"Brunello (Sangiovese Grosso)",vintage:"2017",description:"Classic Biondi-Santi — brick-garnet with dried rose, tar and tobacco of great elegance.",price:"€130–200",score:94},
{name:"Rosso di Montalcino",type:"red",grape:"Sangiovese Grosso",vintage:"2019",description:"The 'baby Brunello' — still serious, structured and showing the house's distinctive style.",price:"€45–65",score:91}
]},
{id:"ornellaia",name:"Ornellaia",founded:1981,rating:5,
style:"Opulent Bolgheri blend of international ambition and Tuscan soul",
description:"Alongside Sassicaia, Ornellaia defines the Bolgheri DOC — a magnificent Cabernet Sauvignon-led blend of Bordeaux éclat and Mediterranean warmth.",
wines:[
{name:"Masseto",type:"red",grape:"Merlot",vintage:"2018",description:"Italy's answer to Pétrus — rich, velvety and sumptuous from a single Merlot vineyard.",price:"€800–1,200",score:99},
{name:"Ornellaia",type:"red",grape:"Cabernet Sauvignon, Merlot, Cabernet Franc, Petit Verdot",vintage:"2018",description:"Voluptuous yet structured — a Grand Vin of Italy with cassis, graphite and spice.",price:"€180–260",score:97},
{name:"Le Serre Nuove dell'Ornellaia",type:"red",grape:"Merlot, Cabernet Sauvignon, Cabernet Franc",vintage:"2019",description:"The second wine — expressive, polished and offering superb value from the estate.",price:"€55–80",score:91}
]}
]},
{id:"piedmont",name:"Piedmont (Piemonte)",icon:"🏔",climate:"Continental",
description:"Northwest Italy's royal wine region, home to Barolo and Barbaresco — the Nebbiolo-based 'Wines of Kings' with extraordinary aging potential.",
keyGrapes:["Nebbiolo","Barbera","Dolcetto","Moscato","Arneis"],
wineries:[
{id:"gaja",name:"Gaja",founded:1859,rating:5,
style:"Modernist Nebbiolo of international renown — powerful and precise",
description:"Angelo Gaja transformed Piedmont's image globally, introducing single-vineyard Barolos and Barbarescos that command some of Italy's highest prices.",
wines:[
{name:"Barbaresco",type:"red",grape:"Nebbiolo",vintage:"2018",description:"The estate Barbaresco — rose petals, tar and orange peel with the hallmark Gaja power.",price:"€230–320",score:96},
{name:"Barolo Sperss",type:"red",grape:"Nebbiolo",vintage:"2016",description:"From the La Morra commune — a generous, opulent Barolo of great complexity.",price:"€320–450",score:97},
{name:"Gaia & Rey",type:"white",grape:"Chardonnay",vintage:"2019",description:"A barrel-fermented Chardonnay of world-class quality, inspired by Burgundy's greatest whites.",price:"€130–180",score:94},
{name:"Conteisa",type:"red",grape:"Nebbiolo",vintage:"2016",description:"Barolo from the Cerequio vineyard — elegant, floral and showing superb Nebbiolo finesse.",price:"€90–130",score:94}
]},
{id:"conterno",name:"Giacomo Conterno",founded:1920,rating:5,
style:"Traditionalist Barolo of monumental structure — the Monfortino legend",
description:"Roberto Conterno continues his family's tradition of producing Barolo of almost superhuman concentration and longevity, above all the mythical Monfortino.",
wines:[
{name:"Barolo Monfortino Riserva",type:"red",grape:"Nebbiolo",vintage:"2013",description:"Perhaps the greatest traditional Barolo — immense, complex and destined for 50 years.",price:"€550–900",score:100},
{name:"Barolo Francia",type:"red",grape:"Nebbiolo",vintage:"2015",description:"From the Francia vineyard in Castiglione Falletto — dark, mineral and built for long cellaring.",price:"€250–380",score:96},
{name:"Barbera d'Alba Cerretta",type:"red",grape:"Barbera",vintage:"2019",description:"A thrillingly vibrant Barbera of uncommon depth from Conterno's estate in Cerretta.",price:"€70–95",score:92}
]},
{id:"vietti",name:"Vietti",founded:1919,rating:5,
style:"Single-vineyard Barolos blending tradition and modern precision",
description:"Luca Currado has elevated Vietti into one of Piedmont's most respected names, with a stellar portfolio of cru Barolos from Castiglione Falletto.",
wines:[
{name:"Barolo Ravera",type:"red",grape:"Nebbiolo",vintage:"2016",description:"From the Novello commune — floral, ethereal and showing a finely textured tannic structure.",price:"€160–220",score:96},
{name:"Barolo Castiglione",type:"red",grape:"Nebbiolo",vintage:"2017",description:"A masterful blend of top crus — the entry-level Vietti Barolo of great accessibility.",price:"€80–110",score:93},
{name:"Barbaresco Masseria",type:"red",grape:"Nebbiolo",vintage:"2017",description:"A village-level Barbaresco of classic rose, tar and cherry character.",price:"€110–150",score:93},
{name:"Barbera d'Asti Tre Vigne",type:"red",grape:"Barbera",vintage:"2020",description:"Rich, juicy and food-friendly with characteristic Barbera acidity and dark cherry fruit.",price:"€22–32",score:89}
]}
]},
{id:"veneto",name:"Veneto",icon:"🛶",climate:"Continental / Mediterranean",
description:"Italy's most prolific wine region, producing everything from the opulent Amarone to refreshing Prosecco and mineral Soave.",
keyGrapes:["Corvina","Rondinella","Garganega","Glera","Pinot Grigio"],
wineries:[
{id:"allegrini",name:"Allegrini",founded:1854,rating:5,
style:"Modern, richly expressive Valpolicella and Amarone",
description:"The leading estate in Valpolicella Classico, producing benchmark Amarone and the innovative single-vineyard La Poja from pure Corvina.",
wines:[
{name:"Amarone della Valpolicella Classico",type:"red",grape:"Corvina, Rondinella, Oseleta",vintage:"2016",description:"A monumental Amarone — dried cherry, chocolate and spice with 18% alcohol in perfect balance.",price:"€90–130",score:95},
{name:"La Poja",type:"red",grape:"Corvina",vintage:"2016",description:"100% Corvina from a single vineyard — unique, complex and showing Corvina's aristocratic potential.",price:"€130–180",score:96},
{name:"Palazzo della Torre",type:"red",grape:"Corvina, Rondinella, Sangiovese",vintage:"2018",description:"A ripasso-style wine of great charm — plummy, velvety and very food-friendly.",price:"€18–26",score:90},
{name:"Soave Classico",type:"white",grape:"Garganega, Trebbiano di Soave",vintage:"2021",description:"Crisp, almond-scented and refreshingly mineral — a benchmark for the appellation.",price:"€12–18",score:88}
]},
{id:"masi",name:"Masi Agricola",founded:1772,rating:4,
style:"Historic producer defining the Valpolicella classics",
description:"One of the oldest Valpolicella estates, Masi is the originator of the ripasso technique and a champion of indigenous Veronese varieties.",
wines:[
{name:"Amarone della Valpolicella Classico Costasera",type:"red",grape:"Corvina, Rondinella, Molinara, Oseleta",vintage:"2017",description:"Classic, elegant Amarone with dried fruit, tobacco and a characteristically bitter-almond finish.",price:"€45–65",score:93},
{name:"Campofiorin Rosso del Veronese",type:"red",grape:"Corvina, Rondinella, Molinara",vintage:"2019",description:"The original ripasso — rich, generous and velvety with excellent everyday appeal.",price:"€16–22",score:89},
{name:"Soave Classico Colbaraca",type:"white",grape:"Garganega",vintage:"2021",description:"From a single vineyard — mineral, almond and peach with a clean, refreshing finish.",price:"€14–20",score:88}
]},
{id:"pieropan",name:"Pieropan",founded:1880,rating:5,
style:"The benchmark for artisan, terroir-driven Soave Classico",
description:"Leonildo Pieropan almost single-handedly rescued Soave's reputation, proving this ancient Garganega-based wine can be exceptional.",
wines:[
{name:"Soave Classico Calvarina",type:"white",grape:"Garganega",vintage:"2020",description:"From volcanic basalt — intense, mineral and showing Garganega at its most complex.",price:"€28–40",score:93},
{name:"Soave Classico La Rocca",type:"white",grape:"Garganega, Trebbiano di Soave",vintage:"2020",description:"The flagship single-vineyard Soave — rich, layered and showing extraordinary aging potential.",price:"€28–40",score:93},
{name:"Recioto di Soave Le Colombare",type:"dessert",grape:"Garganega",vintage:"2018",description:"A superb passito-style sweet wine — honeyed, almond-scented and beautifully balanced.",price:"€35–50",score:94}
]}
]},
{id:"sicily",name:"Sicily (Sicilia)",icon:"☀️",climate:"Mediterranean (hot)",
description:"Italy's sun-drenched southern island is a hotbed of indigenous varieties like Nero d'Avola and Nerello Mascalese, increasingly producing world-class wines.",
keyGrapes:["Nero d'Avola","Nerello Mascalese","Grillo","Catarratto","Zibibbo"],
wineries:[
{id:"planeta",name:"Planeta",founded:1985,rating:4,
style:"Modern, terroir-focused wines from multiple Sicilian estates",
description:"Planeta pioneered quality Sicilian wine with estates across the island, from Etna's volcanic slopes to Pantelleria's sun-baked soils.",
wines:[
{name:"Santa Cecilia",type:"red",grape:"Nero d'Avola",vintage:"2019",description:"Sicily's most regal red — concentrated dark cherry, carob and chocolate with a long, velvety finish.",price:"€30–42",score:93},
{name:"Etna Rosso",type:"red",grape:"Nerello Mascalese",vintage:"2019",description:"Elegant and high-toned from volcanic Mount Etna — resembling Burgundy in structure.",price:"€40–55",score:92},
{name:"Cometa",type:"white",grape:"Fiano",vintage:"2020",description:"Sicily's finest white — aromatic Fiano with white flowers, citrus and textural complexity.",price:"€25–35",score:91}
]},
{id:"donnafugata",name:"Donnafugata",founded:1983,rating:4,
style:"Artisan Sicilian wines with a passion for indigenous varieties",
description:"A family estate with vineyards across Sicily including Pantelleria, crafting wines that reflect the island's diverse terroirs.",
wines:[
{name:"Ben Ryé Passito di Pantelleria",type:"dessert",grape:"Zibibbo (Muscat of Alexandria)",vintage:"2019",description:"Sicily's most iconic dessert wine — lusciously sweet with apricot, date, honey and orange zest.",price:"€40–60",score:95},
{name:"Mille e una Notte",type:"red",grape:"Nero d'Avola, Syrah, Petit Verdot",vintage:"2018",description:"Their flagship red — rich, warm and complex with a Mediterranean character.",price:"€55–75",score:93},
{name:"Tancredi",type:"red",grape:"Nero d'Avola, Cabernet Sauvignon",vintage:"2018",description:"An elegant blend showing how Nero d'Avola can partner international varieties.",price:"€25–35",score:91}
]},
{id:"tasca",name:"Tasca d'Almerita",founded:1830,rating:4,
style:"Historic Sicilian estate championing native varieties",
description:"One of Sicily's oldest and most prestigious family estates, producing wines from their Regaleali estate in the heart of the island.",
wines:[
{name:"Rosso del Conte",type:"red",grape:"Nero d'Avola, Perricone",vintage:"2016",description:"The estate's flagship red — structured, earthy and showing the depth of Sicily's indigenous varieties.",price:"€45–65",score:93},
{name:"Tenuta Regaleali Bianco",type:"white",grape:"Inzolia, Catarratto",vintage:"2021",description:"Crisp, mineral and refreshing — an honest expression of Sicilian terroir.",price:"€12–18",score:88},
{name:"Nozze d'Oro",type:"white",grape:"Inzolia, Sauvignon Blanc",vintage:"2020",description:"Aromatic and elegant — created to celebrate the estate's golden anniversary.",price:"€22–32",score:90}
]}
]}
]},

{id:"spain",name:"Spain",flag:"🇪🇸",code:"es",
description:"Spain's diverse wine landscape ranges from classic Rioja Tempranillos to the age-worthy reds of Ribera del Duero and aromatic Albariños of Rías Baixas.",
keyGrapes:["Tempranillo","Garnacha","Albariño","Cariñena","Verdejo","Palomino"],
regions:[
{id:"rioja",name:"Rioja",icon:"🍾",climate:"Continental / Atlantic",
description:"Spain's most famous wine region producing age-worthy Tempranillo-based reds in Crianza, Reserva and Gran Reserva classifications.",
keyGrapes:["Tempranillo","Garnacha","Mazuelo","Graciano","Viura"],
wineries:[
{id:"lopez-heredia",name:"R. López de Heredia",founded:1877,rating:5,
style:"Ultra-traditional oxidative Rioja aged for decades in oak",
description:"The most traditional house in Rioja, aging wines in American oak for many years — their wines are uniquely nutty, amber and timeless.",
wines:[
{name:"Viña Tondonia Gran Reserva Tinto",type:"red",grape:"Tempranillo, Garnacha, Mazuelo, Graciano",vintage:"2004",description:"Amber-hued and extraordinary — dried cherry, orange peel and walnut in a wine of mesmerising complexity.",price:"€70–100",score:97},
{name:"Viña Tondonia Reserva Tinto",type:"red",grape:"Tempranillo, Garnacha, Mazuelo, Graciano",vintage:"2010",description:"A masterpiece of classic Rioja — silky, complex and hauntingly long.",price:"€38–55",score:94},
{name:"Viña Gravonia Blanco Crianza",type:"white",grape:"Viura",vintage:"2012",description:"Completely unique — aged 4 years in oak, producing a nutty, oxidative white unlike anything else.",price:"€28–40",score:93}
]},
{id:"muga",name:"Muga",founded:1932,rating:5,
style:"Traditional Rioja with impeccable barrel craftsmanship",
description:"The only bodega in Rioja that makes its own barrels, producing some of the region's most elegant wines.",
wines:[
{name:"Prado Enea Gran Reserva",type:"red",grape:"Tempranillo, Garnacha, Mazuelo, Graciano",vintage:"2015",description:"The pinnacle of Muga — supple, complex and the ideal balance of fruit and barrel.",price:"€55–80",score:95},
{name:"Torre Muga",type:"red",grape:"Tempranillo, Merlot, Cabernet Sauvignon",vintage:"2018",description:"Modern-style Rioja at its best — opulent, structured and deeply expressive.",price:"€65–90",score:94},
{name:"Muga Reserva",type:"red",grape:"Tempranillo, Garnacha, Mazuelo, Graciano",vintage:"2018",description:"The flagship — beautifully balanced, cherry-driven and impeccably crafted.",price:"€20–28",score:91}
]},
{id:"murrieta",name:"Marqués de Murrieta",founded:1852,rating:5,
style:"One of Rioja's founding estates — classic, structured and age-worthy",
description:"Founded by the father of Rioja, this historic estate produces benchmark traditional Riojas from their Ygay estate.",
wines:[
{name:"Castillo Ygay Gran Reserva Especial",type:"red",grape:"Tempranillo, Mazuelo, Garnacha, Graciano",vintage:"2010",description:"A legend of Rioja — remarkable concentration with decades of oak aging yielding extraordinary complexity.",price:"€75–110",score:97},
{name:"Marqués de Murrieta Reserva",type:"red",grape:"Tempranillo, Garnacha, Mazuelo, Graciano",vintage:"2018",description:"Classic and dependable — polished Tempranillo with vanilla, cherry and cedar character.",price:"€20–28",score:91},
{name:"Capellanía Reserva Blanco",type:"white",grape:"Viura",vintage:"2016",description:"One of Spain's finest barrel-fermented whites — nutty, creamy and showing outstanding length.",price:"€32–48",score:93}
]}
]},
{id:"ribera-del-duero",name:"Ribera del Duero",icon:"🏯",climate:"Continental (extreme)",
description:"Spain's most prestigious red DO, where extreme temperatures produce powerful Tinto Fino with great structure and aging potential.",
keyGrapes:["Tinto Fino (Tempranillo)","Merlot","Cabernet Sauvignon","Malbec"],
wineries:[
{id:"vega-sicilia",name:"Vega Sicilia",founded:1864,rating:5,
style:"Spain's most legendary estate — profound, age-worthy luxury red",
description:"Long considered Spain's greatest wine producer, Vega Sicilia's Único is aged up to 10 years before release — one of the world's immortal wines.",
wines:[
{name:"Único",type:"red",grape:"Tinto Fino, Cabernet Sauvignon, Merlot",vintage:"2011",description:"Spain's most legendary wine — cedar, tobacco, dried fruit and extraordinary complexity from a decade of aging.",price:"€350–550",score:99},
{name:"Valbuena 5° Año",type:"red",grape:"Tinto Fino, Merlot",vintage:"2018",description:"The more accessible sibling — still profoundly complex and built for long aging.",price:"€110–160",score:95},
{name:"Alión",type:"red",grape:"Tinto Fino",vintage:"2019",description:"More modern in style — concentrated, expressive and showing the power of the Ribera terroir.",price:"€55–80",score:93}
]},
{id:"pingus",name:"Dominio de Pingus",founded:1995,rating:5,
style:"Minimalist biodynamic micro-production of extraordinary concentration",
description:"Peter Sisseck's biodynamic estate produces tiny quantities of Pingus from 90-year-old Tinto Fino vines — one of Spain's most cult-followed wines.",
wines:[
{name:"Pingus",type:"red",grape:"Tinto Fino",vintage:"2019",description:"Cult status fully deserved — explosive, rich and endlessly complex old-vine Tempranillo.",price:"€600–900",score:99},
{name:"Flor de Pingus",type:"red",grape:"Tinto Fino",vintage:"2020",description:"The accessible Pingus — still serious and showing the biodynamic terroir beautifully.",price:"€70–100",score:93},
{name:"PSI",type:"red",grape:"Tinto Fino",vintage:"2021",description:"From old-vine growers in the region — vibrant, earthy and great everyday value.",price:"€18–26",score:89}
]},
{id:"emilio-moro",name:"Emilio Moro",founded:1932,rating:4,
style:"Family-owned producer of expressive fruit-forward Tinto Fino",
description:"One of the DO's most reliable family producers, making consistently excellent wines from their own old-vine Tinto Fino parcels.",
wines:[
{name:"Malleolus de Sanchomartín",type:"red",grape:"Tinto Fino",vintage:"2017",description:"From the oldest vines — concentrated, structured and showing remarkable terroir character.",price:"€90–130",score:95},
{name:"Malleolus",type:"red",grape:"Tinto Fino",vintage:"2018",description:"The benchmark Emilio Moro — expressive cherry and cedar with supple, well-managed tannins.",price:"€38–52",score:92},
{name:"Finca Resalso",type:"red",grape:"Tinto Fino",vintage:"2020",description:"Fruit-forward and approachable — excellent everyday drinking from this great terroir.",price:"€14–20",score:88}
]}
]},
{id:"priorat",name:"Priorat",icon:"⛰",climate:"Mediterranean (arid)",
description:"Spain's most dramatic wine region — old Garnacha and Carignan on licorella slate soils producing wines of immense concentration and minerality.",
keyGrapes:["Garnacha","Cariñena (Carignan)","Cabernet Sauvignon","Syrah"],
wineries:[
{id:"alvaro-palacios",name:"Álvaro Palacios",founded:1989,rating:5,
style:"Revolutionary Priorat wines combining old-vine Garnacha with perfectionism",
description:"Álvaro Palacios almost single-handedly put Priorat on the world map with L'Ermita, one of Spain's most coveted wines.",
wines:[
{name:"L'Ermita",type:"red",grape:"Garnacha, Cabernet Sauvignon",vintage:"2019",description:"Spain's most sought-after wine — old-vine Garnacha of extraordinary mineral intensity and grace.",price:"€550–800",score:100},
{name:"Finca Dofí",type:"red",grape:"Garnacha, Cabernet Sauvignon, Syrah, Merlot",vintage:"2019",description:"From a single Priorat vineyard — complex, structured and highly age-worthy.",price:"€90–130",score:95},
{name:"Les Terrasses",type:"red",grape:"Garnacha, Cariñena, Cabernet Sauvignon, Syrah",vintage:"2020",description:"The entry into the Palacios portfolio — expressive, mineral and showing genuine Priorat character.",price:"€26–38",score:91}
]},
{id:"clos-mogador",name:"Clos Mogador",founded:1979,rating:5,
style:"Old-vine Garnacha pioneer of the Priorat rebirth",
description:"René Barbier was one of the five founding winemakers who put modern Priorat on the map, producing wines of great depth from the original Clos plots.",
wines:[
{name:"Clos Mogador",type:"red",grape:"Garnacha, Cabernet Sauvignon, Syrah, Cabernet Franc",vintage:"2018",description:"Richly mineral and concentrated, showing the full complexity of Priorat's llicorella soils.",price:"€90–130",score:96},
{name:"Manyetes",type:"red",grape:"Cariñena, Garnacha",vintage:"2019",description:"Old Carignan from the historic Manyetes parcel — wild, earthy and deeply mineral.",price:"€28–42",score:92}
]},
{id:"mas-doix",name:"Mas Doix",founded:1880,rating:4,
style:"Traditional Priorat from historic century-old Carignan parcels",
description:"An estate with century-old Carignan vines producing some of the most compelling expressions of this often-underrated variety.",
wines:[
{name:"Doix",type:"red",grape:"Cariñena, Garnacha",vintage:"2016",description:"Old-vine Carignan of remarkable depth — earthy, spicy and showing wonderful aging potential.",price:"€80–115",score:94},
{name:"Salanques",type:"red",grape:"Cariñena, Garnacha",vintage:"2018",description:"Complex, structured and mineral — a serious expression of Priorat at a fairer price.",price:"€35–50",score:91},
{name:"Les Crestes",type:"red",grape:"Garnacha, Cariñena, Syrah",vintage:"2019",description:"The approachable entry wine — vibrant, spicy and showing genuine terroir character.",price:"€14–20",score:88}
]}
]},
{id:"rias-baixas",name:"Rías Baixas",icon:"🌊",climate:"Atlantic (cool, wet)",
description:"Galicia's Atlantic wine region, famous worldwide for its aromatic, mineral Albariño whites — the perfect partner for seafood.",
keyGrapes:["Albariño","Loureiro","Treixadura","Caíño Blanco"],
wineries:[
{id:"pazo-senorans",name:"Pazo de Señorans",founded:1979,rating:5,
style:"The benchmark for age-worthy mineral Albariño",
description:"Set in a historic 16th-century pazo, this estate produces Albariño of remarkable complexity and aging potential.",
wines:[
{name:"Selección de Añada",type:"white",grape:"Albariño",vintage:"2014",description:"Proof that Albariño ages magnificently — honeyed, complex and showing wonderful evolution.",price:"€38–58",score:95},
{name:"Pazo de Señorans Albariño",type:"white",grape:"Albariño",vintage:"2021",description:"The classic — vibrant peach, apricot and citrus with the hallmark Atlantic freshness.",price:"€15–22",score:91}
]},
{id:"do-ferreiro",name:"Do Ferreiro",founded:1986,rating:5,
style:"Old-vine minerally intense Albariño from ancient 300-year-old vines",
description:"Gerardo Méndez produces Albariño from some of the oldest vines in the DO, yielding wines of astonishing complexity.",
wines:[
{name:"Cepas Vellas",type:"white",grape:"Albariño",vintage:"2020",description:"From 200–300 year-old vines — concentrated, mineral and unlike any other Albariño.",price:"€28–42",score:95},
{name:"Do Ferreiro Albariño",type:"white",grape:"Albariño",vintage:"2021",description:"Crisp, saline and fragrant — a textbook Rías Baixas Albariño of real character.",price:"€13–18",score:91}
]},
{id:"martin-codax",name:"Martín Códax",founded:1986,rating:4,
style:"Classic consistently excellent Rías Baixas Albariño",
description:"Named after a 13th-century Galician troubadour, this producer delivers reliably excellent Albariño enjoyed across the world.",
wines:[
{name:"Organistrum",type:"white",grape:"Albariño",vintage:"2019",description:"Their prestige single-vineyard wine — concentrated, complex and showing real aging potential.",price:"€26–36",score:93},
{name:"Burgáns Albariño",type:"white",grape:"Albariño",vintage:"2021",description:"The best-selling Galician Albariño — fresh, floral and perfectly balanced.",price:"€9–14",score:89}
]}
]}
]},

{id:"germany",name:"Germany",flag:"🇩🇪",code:"de",
description:"Germany's cool-climate Rieslings are among the world's greatest wines — ranging from bone-dry Grosses Gewächs to transcendent dessert wines.",
keyGrapes:["Riesling","Spätburgunder","Müller-Thurgau","Silvaner","Grauburgunder"],
regions:[
{id:"mosel",name:"Mosel",icon:"🏞",climate:"Cool Continental",
description:"Steep slate slopes along the Mosel river produce the world's most delicate and ethereal Rieslings, often at barely 8% alcohol.",
keyGrapes:["Riesling","Müller-Thurgau","Elbling"],
wineries:[
{id:"egon-muller",name:"Egon Müller – Scharzhof",founded:1797,rating:5,
style:"The pinnacle of German Riesling — the world's most expensive white wines",
description:"Egon Müller IV produces Riesling from the Scharzhofberg that regularly sets world records at auction, with TBAs selling for over €10,000.",
wines:[
{name:"Scharzhofberger Riesling TBA",type:"dessert",grape:"Riesling",vintage:"2019",description:"The rarest wine in Germany — crystalline, honeyed and impossibly concentrated with near-infinite aging potential.",price:"€5,000–15,000",score:100},
{name:"Scharzhofberger Riesling Auslese",type:"white",grape:"Riesling",vintage:"2019",description:"Off-dry and breathtakingly complex — citrus, slate and honey in perfect equilibrium.",price:"€250–400",score:97},
{name:"Scharzhofberger Riesling Spätlese",type:"white",grape:"Riesling",vintage:"2020",description:"Electric and vibrant — the ideal expression of slate-grown Mosel Riesling.",price:"€70–100",score:95}
]},
{id:"jj-prum",name:"J.J. Prüm",founded:1911,rating:5,
style:"Classic age-worthy Wehlener Sonnenuhr Rieslings with great longevity",
description:"Manfred and Katharina Prüm maintain the Mosel's most revered traditional style — wines that seem closed in youth but blossom magnificently over decades.",
wines:[
{name:"Wehlener Sonnenuhr Riesling Auslese",type:"white",grape:"Riesling",vintage:"2018",description:"From the most famous Mosel vineyard — honey, peach and slate with a 30-year future ahead.",price:"€75–110",score:96},
{name:"Wehlener Sonnenuhr Riesling Spätlese",type:"white",grape:"Riesling",vintage:"2019",description:"Perfectly poised off-dry Riesling with honeysuckle and mineral purity.",price:"€32–48",score:93},
{name:"Graacher Himmelreich Kabinett",type:"white",grape:"Riesling",vintage:"2020",description:"Light, delicate and refreshing — the ideal entry to the Prüm style at barely 8% alcohol.",price:"€18–26",score:90}
]},
{id:"dr-loosen",name:"Dr. Loosen",founded:1800,rating:4,
style:"Expressive internationally acclaimed estate Rieslings from the Mosel",
description:"Ernst Loosen has been a global ambassador for Mosel Riesling, producing wines from century-old ungrafted vines in seven top vineyard sites.",
wines:[
{name:"Erdener Prälat Riesling Auslese",type:"white",grape:"Riesling",vintage:"2019",description:"From an extremely rare red slate site — rich, exotic and showing unique terroir character.",price:"€60–90",score:95},
{name:"Ürziger Würzgarten Spätlese",type:"white",grape:"Riesling",vintage:"2020",description:"Uniquely spicy from red volcanic soil — peach, ginger and mineral electricity.",price:"€20–30",score:92},
{name:"Dr. L Riesling",type:"white",grape:"Riesling",vintage:"2021",description:"The perfect entry-level Mosel — fresh, slaty and instantly likeable.",price:"€9–13",score:89}
]}
]},
{id:"rheingau",name:"Rheingau",icon:"🏰",climate:"Warm Continental",
description:"A south-facing Rhine bend producing Rieslings of greater body and power than the Mosel, plus Germany's finest Spätburgunder.",
keyGrapes:["Riesling","Spätburgunder"],
wineries:[
{id:"schloss-johannisberg",name:"Schloss Johannisberg",founded:1130,rating:5,
style:"The world's oldest Riesling estate with imperial history",
description:"The first estate in the world dedicated entirely to Riesling, dating back to Charlemagne — producing benchmark Rheingau wines.",
wines:[
{name:"Riesling Spätlese Goldlack",type:"white",grape:"Riesling",vintage:"2019",description:"The flagship Spätlese — rich, off-dry and showing the Rheingau's characteristic body and spice.",price:"€35–50",score:93},
{name:"Riesling Erstes Gewächs",type:"white",grape:"Riesling",vintage:"2019",description:"Dry, serious and mineral — the estate's top dry Riesling with great aging potential.",price:"€50–70",score:93},
{name:"Riesling Kabinett",type:"white",grape:"Riesling",vintage:"2020",description:"Elegant and delicate — the classic Johannisberg style at its most approachable.",price:"€20–28",score:90}
]},
{id:"robert-weil",name:"Robert Weil",founded:1875,rating:5,
style:"Benchmark modern Rheingau Riesling — dry and nobly sweet",
description:"Wilhelm Weil has built this estate into one of Germany's most admired, with Kiedricher Gräfenberg producing world-class wines in every style.",
wines:[
{name:"Kiedricher Gräfenberg Riesling TBA",type:"dessert",grape:"Riesling",vintage:"2018",description:"A transcendent dessert wine — crystalline, botrytised and of almost unimaginable complexity.",price:"€350–600",score:100},
{name:"Kiedricher Gräfenberg Riesling GG",type:"white",grape:"Riesling",vintage:"2019",description:"Dry and mineral — showing the extraordinary potential of the Gräfenberg vineyard.",price:"€70–100",score:95},
{name:"Estate Riesling Trocken",type:"white",grape:"Riesling",vintage:"2020",description:"Accessible, dry and beautifully crafted — the ideal introduction to Robert Weil.",price:"€16–24",score:90}
]},
{id:"georg-breuer",name:"Georg Breuer",founded:1880,rating:4,
style:"Pioneer of dry Rheingau Riesling with great terroir focus",
description:"Theresa Breuer continues her father Bernhard's legacy of producing benchmark dry Rieslings from Rüdesheim's top vineyards.",
wines:[
{name:"Berg Schlossberg Riesling GG",type:"white",grape:"Riesling",vintage:"2019",description:"Powerful and mineral from steep south-facing slopes — smoky, citrusy and built for aging.",price:"€52–75",score:94},
{name:"Terra Montosa",type:"white",grape:"Riesling",vintage:"2020",description:"A fine estate Riesling blending multiple parcels — consistent and characterful.",price:"€20–28",score:90},
{name:"Charm Spätburgunder",type:"red",grape:"Pinot Noir",vintage:"2019",description:"One of the Rheingau's best Pinot Noirs — cherry, spice and elegant structure.",price:"€26–36",score:91}
]}
]},
{id:"pfalz",name:"Pfalz",icon:"🌻",climate:"Warm Continental",
description:"Germany's sunniest region, producing fuller-bodied Rieslings and excellent Pinot varieties from red sandstone and limestone soils.",
keyGrapes:["Riesling","Spätburgunder","Dornfelder","Gewurztraminer","Weissburgunder"],
wineries:[
{id:"bürklin-wolf",name:"Dr. Bürklin-Wolf",founded:1597,rating:5,
style:"Biodynamic Pfalz estate producing benchmark dry Rieslings",
description:"One of Germany's oldest estates, converted to biodynamics, producing Rieslings of magnificent clarity and precision.",
wines:[
{name:"Forster Kirchenstück Riesling GG",type:"white",grape:"Riesling",vintage:"2019",description:"From Germany's most famous Lage — basalt-driven minerality with extraordinary precision.",price:"€75–110",score:97},
{name:"Forster Pechstein Riesling GG",type:"white",grape:"Riesling",vintage:"2019",description:"Volcanic basalt terroir expressed in a powerful, smoky and mineral dry Riesling.",price:"€65–95",score:95},
{name:"Wachenheimer Riesling",type:"white",grape:"Riesling",vintage:"2020",description:"An excellent village Riesling — clean, expressive and showcasing the Pfalz style.",price:"€16–22",score:90}
]},
{id:"muller-catoir",name:"Müller-Catoir",founded:1744,rating:5,
style:"Elegant precise dry Rieslings from Haardt",
description:"Martin Franzen has reclaimed this historic estate's place among Germany's finest, producing wines of impeccable freshness and detail.",
wines:[
{name:"Haardter Bürgergarten Riesling GG",type:"white",grape:"Riesling",vintage:"2019",description:"Elegant, citrus-driven and mineral — a textbook great-growth Pfalz Riesling.",price:"€48–68",score:94},
{name:"Rieslaner Spätlese",type:"white",grape:"Rieslaner",vintage:"2019",description:"From a rare variety — unctuous, exotic and showing extraordinary aromatic complexity.",price:"€32–48",score:93},
{name:"Mussbacher Eselshaut Riesling GG",type:"white",grape:"Riesling",vintage:"2019",description:"Powerful and structured with great mineral backbone and aging potential.",price:"€48–68",score:94}
]}
]},
{id:"rheinhessen",name:"Rheinhessen",icon:"🌿",climate:"Continental (mild)",
description:"Germany's largest wine region, home to the legendary Keller estate and a new generation reviving its world-class Riesling reputation.",
keyGrapes:["Riesling","Müller-Thurgau","Silvaner","Spätburgunder"],
wineries:[
{id:"keller",name:"Weingut Keller",founded:1789,rating:5,
style:"The greatest dry Riesling producer in Germany — possibly the world",
description:"Klaus-Peter Keller has transformed this estate into a phenomenon, with his G-Max Riesling considered among Germany's very greatest wines.",
wines:[
{name:"Riesling G-Max",type:"white",grape:"Riesling",vintage:"2019",description:"A mythical wine — impossibly rich, complex and long from an unnamed single vineyard.",price:"€450–700",score:100},
{name:"Kirchspiel Riesling GG",type:"white",grape:"Riesling",vintage:"2019",description:"Stony, precise and electrifying — arguably the greatest wine from Westhofen.",price:"€100–150",score:98},
{name:"Morstein Riesling GG",type:"white",grape:"Riesling",vintage:"2019",description:"Rich and textural yet impossibly precise — a monument to Rheinhessen Riesling.",price:"€100–150",score:97},
{name:"Westhofener Riesling Trocken",type:"white",grape:"Riesling",vintage:"2020",description:"The most accessible Keller Riesling — still showing superb terroir expression.",price:"€26–36",score:92}
]},
{id:"wittmann",name:"Wittmann",founded:1663,rating:5,
style:"Biodynamic Rheinhessen Riesling of exceptional mineral purity",
description:"Philipp Wittmann produces Riesling from limestone-rich soils with a freshness and mineral precision that rivals the Mosel.",
wines:[
{name:"Morstein Riesling GG",type:"white",grape:"Riesling",vintage:"2019",description:"From Rheinhessen's greatest vineyard — chalky, pure and showing extraordinary complexity.",price:"€62–90",score:96},
{name:"Aulerde Riesling GG",type:"white",grape:"Riesling",vintage:"2019",description:"Fuller-bodied than Morstein — rich yet precise with great length.",price:"€62–90",score:95},
{name:"Westhofener Riesling Trocken",type:"white",grape:"Riesling",vintage:"2020",description:"The village wine — expressive, mineral and very satisfying.",price:"€18–25",score:91}
]}
]}
]},

{id:"usa",name:"USA",flag:"🇺🇸",code:"us",
description:"California's Napa Valley and Sonoma Coast, alongside Oregon's Willamette Valley, produce world-class Cabernet Sauvignon, Chardonnay and Pinot Noir.",
keyGrapes:["Cabernet Sauvignon","Chardonnay","Pinot Noir","Zinfandel","Merlot","Sauvignon Blanc"],
regions:[
{id:"napa-valley",name:"Napa Valley",icon:"🌉",climate:"Mediterranean (warm)",
description:"America's most prestigious wine region, producing opulent Cabernet Sauvignons that rank among the world's finest — some fetching thousands of dollars per bottle.",
keyGrapes:["Cabernet Sauvignon","Merlot","Chardonnay","Sauvignon Blanc","Zinfandel"],
wineries:[
{id:"opus-one",name:"Opus One",founded:1979,rating:5,
style:"The original Napa–Bordeaux joint venture — opulent structured Cabernet blend",
description:"Born from a partnership between Robert Mondavi and Baron Philippe de Rothschild, Opus One produces Napa's most famous Bordeaux-style red.",
wines:[
{name:"Opus One",type:"red",grape:"Cabernet Sauvignon, Merlot, Cabernet Franc, Petit Verdot, Malbec",vintage:"2019",description:"Consistently one of California's greatest wines — cassis, cedar and chocolate with impeccable structure.",price:"€300–450",score:97},
{name:"Overture",type:"red",grape:"Cabernet Sauvignon, Merlot, Cabernet Franc",vintage:"NV",description:"The second label — approachable, polished and showing the Opus One hallmarks.",price:"€100–140",score:91}
]},
{id:"screaming-eagle",name:"Screaming Eagle",founded:1986,rating:5,
style:"The ultimate cult Napa Cabernet — micro-production near-impossible to buy",
description:"With only 500–850 cases produced annually, Screaming Eagle is the most sought-after California wine — a mailing-list legend.",
wines:[
{name:"Screaming Eagle Cabernet Sauvignon",type:"red",grape:"Cabernet Sauvignon",vintage:"2018",description:"The holy grail of California — incomparable richness, precision and length from the Oakville floor.",price:"€3,000–5,000",score:100},
{name:"Second Flight",type:"red",grape:"Merlot, Cabernet Sauvignon, Cabernet Franc",vintage:"2018",description:"The second wine — itself extraordinary, showing the quality of Screaming Eagle's farming.",price:"€600–900",score:95}
]},
{id:"harlan-estate",name:"Harlan Estate",founded:1984,rating:5,
style:"Hillside Napa Cabernet of cult status and extraordinary concentration",
description:"Bill Harlan's hilltop estate above Oakville produces wines of legendary concentration and elegance — among America's true First Growths.",
wines:[
{name:"Harlan Estate",type:"red",grape:"Cabernet Sauvignon, Merlot, Cabernet Franc, Petit Verdot",vintage:"2017",description:"Profound and complete — layers of cassis, graphite and cedar with Napa's characteristic opulence.",price:"€900–1,500",score:99},
{name:"The Maiden",type:"red",grape:"Cabernet Sauvignon, Merlot, Cabernet Franc",vintage:"2018",description:"The second wine — itself a 95-point wine showing Harlan's uncompromising viticulture.",price:"€250–380",score:95}
]},
{id:"stags-leap",name:"Stag's Leap Wine Cellars",founded:1972,rating:5,
style:"The winery that beat France — elegant structured Napa Cabernet",
description:"Warren Winiarski's 1973 Stag's Leap Cabernet won the famous 1976 Paris Tasting, putting California firmly on the world wine map.",
wines:[
{name:"Cask 23 Estate Cabernet Sauvignon",type:"red",grape:"Cabernet Sauvignon, Merlot",vintage:"2018",description:"The flagship that won Paris — remarkable for its elegance, precision and longevity.",price:"€110–160",score:96},
{name:"S.L.V. Estate Cabernet Sauvignon",type:"red",grape:"Cabernet Sauvignon",vintage:"2018",description:"From the original 1973 vineyard — structured, complex and built for the cellar.",price:"€72–100",score:94},
{name:"Artemis Cabernet Sauvignon",type:"red",grape:"Cabernet Sauvignon",vintage:"2019",description:"The approachable Napa Cabernet — ripe, supple and consistently satisfying.",price:"€38–52",score:91}
]}
]},
{id:"sonoma",name:"Sonoma",icon:"🌲",climate:"Cool Mediterranean / Coastal",
description:"Sonoma County's cool climate is ideal for Chardonnay, Pinot Noir and Zinfandel, producing wines with more elegance and less opulence than Napa.",
keyGrapes:["Chardonnay","Pinot Noir","Zinfandel","Cabernet Sauvignon","Sauvignon Blanc"],
wineries:[
{id:"kistler",name:"Kistler Vineyards",founded:1978,rating:5,
style:"California's greatest Chardonnay — Burgundy-inspired single-vineyard wines",
description:"Steve Kistler and Mark Bixler have produced benchmark California Chardonnay for decades, with wines that challenge the finest White Burgundies.",
wines:[
{name:"McCrea Vineyard Chardonnay",type:"white",grape:"Chardonnay",vintage:"2019",description:"Perhaps Kistler's greatest site — haunting mineral complexity with hazelnut, citrus and extraordinary length.",price:"€130–180",score:97},
{name:"Dutton Ranch Chardonnay",type:"white",grape:"Chardonnay",vintage:"2019",description:"Consistently one of California's finest — rich yet elegant with superb Sonoma Coast acidity.",price:"€90–130",score:94},
{name:"Kistler Vineyard Pinot Noir",type:"red",grape:"Pinot Noir",vintage:"2019",description:"Exceptional estate Pinot Noir — fragrant, complex and showing real Burgundian depth.",price:"€110–150",score:94}
]},
{id:"williams-selyem",name:"Williams Selyem",founded:1981,rating:5,
style:"Cult mailing-list Pinot Noir from the Russian River Valley",
description:"Burt Williams and Ed Selyem created California's first Pinot Noir cult wine — the estate remains a benchmark for West Coast Pinot.",
wines:[
{name:"Allen Vineyard Pinot Noir",type:"red",grape:"Pinot Noir",vintage:"2019",description:"One of California's greatest single-vineyard Pinots — intense, complex and silkily textured.",price:"€130–180",score:96},
{name:"Rochioli Riverblock Pinot Noir",type:"red",grape:"Pinot Noir",vintage:"2019",description:"From the historic Rochioli Vineyard — fragrant, elegant and showing wonderful finesse.",price:"€68–95",score:93},
{name:"Heintz Vineyard Chardonnay",type:"white",grape:"Chardonnay",vintage:"2019",description:"Rich and complex with superb acidity — among Sonoma's finest Chardonnays.",price:"€58–82",score:93}
]},
{id:"ridge-sonoma",name:"Ridge Vineyards",founded:1959,rating:5,
style:"California's greatest Zinfandel estate — natural winemaking pioneer",
description:"Paul Draper's estate is legendary for single-vineyard Zinfandels and Monte Bello Cabernet — some of California's most age-worthy wines.",
wines:[
{name:"Geyserville",type:"red",grape:"Zinfandel, Carignane, Petite Sirah, Mataro",vintage:"2019",description:"The benchmark California field blend — spicy, complex and irresistibly vibrant.",price:"€42–62",score:93},
{name:"Lytton Springs",type:"red",grape:"Zinfandel, Petite Sirah, Carignane",vintage:"2019",description:"Intense and structured with deep dark fruit and characteristic spice.",price:"€38–52",score:92},
{name:"Three Valleys",type:"red",grape:"Zinfandel, Carignane, Petite Sirah",vintage:"2020",description:"The approachable entry wine — juicy, vibrant and very California.",price:"€20–28",score:89}
]}
]},
{id:"willamette-valley",name:"Willamette Valley (Oregon)",icon:"🌧",climate:"Cool Maritime / Continental",
description:"Oregon's premier wine region producing elegant Pinot Noirs and Chardonnays strongly influenced by Burgundian winemaking.",
keyGrapes:["Pinot Noir","Chardonnay","Pinot Gris","Pinot Blanc","Riesling"],
wineries:[
{id:"domaine-drouhin",name:"Domaine Drouhin Oregon",founded:1987,rating:5,
style:"Burgundian elegance transplanted to Oregon's Dundee Hills",
description:"Robert Drouhin brought Burgundian expertise to Oregon in 1987, producing Pinot Noir under his daughter Véronique's winemaking that rivals the finest Burgundy.",
wines:[
{name:"Laurène Pinot Noir",type:"red",grape:"Pinot Noir",vintage:"2018",description:"Oregon's most Burgundian Pinot — complex, silky and showing remarkable depth.",price:"€70–100",score:94},
{name:"Arthur Chardonnay",type:"white",grape:"Chardonnay",vintage:"2019",description:"Elegant, mineral and showing the estate's Burgundian touch.",price:"€48–65",score:92},
{name:"Dundee Hills Pinot Noir",type:"red",grape:"Pinot Noir",vintage:"2019",description:"The estate Pinot — fragrant, accessible and showing classic DDO finesse.",price:"€42–58",score:91}
]},
{id:"ponzi",name:"Ponzi Vineyards",founded:1970,rating:4,
style:"Pioneer Oregon Pinot Noir from one of the valley's founding families",
description:"Dick and Nancy Ponzi were among Oregon's wine founding fathers — their Abetina Pinot Noir is one of the state's most complex wines.",
wines:[
{name:"Abetina Pinot Noir",type:"red",grape:"Pinot Noir",vintage:"2017",description:"Their prestige single-vineyard wine — layers of cherry, earth and spice of real complexity.",price:"€110–150",score:94},
{name:"Reserve Pinot Noir",type:"red",grape:"Pinot Noir",vintage:"2018",description:"Rich, structured and showing the consistent quality that built Ponzi's reputation.",price:"€58–82",score:92},
{name:"Reserve Pinot Gris",type:"white",grape:"Pinot Gris",vintage:"2020",description:"Oregon's best Pinot Gris — textured, aromatic and very food-friendly.",price:"€28–40",score:90}
]},
{id:"beaux-freres",name:"Beaux Frères",founded:1986,rating:5,
style:"Biodynamic Pinot Noir of cult status — Oregon's finest",
description:"Co-owned by Robert Parker, Beaux Frères produces Pinot Noir of extraordinary intensity from biodynamic vines on Ribbon Ridge.",
wines:[
{name:"Beaux Frères Vineyard Pinot Noir",type:"red",grape:"Pinot Noir",vintage:"2019",description:"The flagship — profound, structured and showing the depth of this exceptional Ribbon Ridge site.",price:"€100–140",score:96},
{name:"The Belles Soeurs Pinot Noir",type:"red",grape:"Pinot Noir",vintage:"2019",description:"The second wine — still exceptional, from neighboring blocks on the same biodynamic estate.",price:"€58–78",score:93},
{name:"Upper Terrace Pinot Noir",type:"red",grape:"Pinot Noir",vintage:"2018",description:"From the highest blocks — dense, complex and of the greatest aging potential.",price:"€150–200",score:96}
]}
]}
]},

{id:"australia",name:"Australia",flag:"🇦🇺",code:"au",
description:"Australia's diverse wine regions span from the sun-soaked Barossa Valley to cool-climate Margaret River and Yarra Valley, producing world-class Shiraz, Chardonnay and Riesling.",
keyGrapes:["Shiraz","Cabernet Sauvignon","Chardonnay","Riesling","Grenache","Pinot Noir"],
regions:[
{id:"barossa-valley",name:"Barossa Valley",icon:"🌞",climate:"Mediterranean (warm, dry)",
description:"Australia's most famous wine region, producing powerful old-vine Shiraz from some of the world's oldest ungrafted vines — some over 170 years old.",
keyGrapes:["Shiraz","Cabernet Sauvignon","Grenache","Mourvèdre","Semillon"],
wineries:[
{id:"penfolds",name:"Penfolds",founded:1844,rating:5,
style:"Australia's most iconic winery — from Grange to everyday classics",
description:"Penfolds is Australia's most celebrated wine brand, with Grange recognised as Australia's only First Growth equivalent and one of the world's great wines.",
wines:[
{name:"Grange",type:"red",grape:"Shiraz, Cabernet Sauvignon",vintage:"2018",description:"Australia's greatest wine — multi-regional Shiraz of immense power, complexity and 40+ year aging potential.",price:"€700–1,000",score:98},
{name:"RWT Barossa Valley Shiraz",type:"red",grape:"Shiraz",vintage:"2018",description:"Aged in French oak unlike Grange — silky, complex and showing extraordinary Barossa Shiraz character.",price:"€200–280",score:96},
{name:"Bin 389 Cabernet Shiraz",type:"red",grape:"Cabernet Sauvignon, Shiraz",vintage:"2019",description:"The 'Baby Grange' — bold, rich and consistently one of Australia's best value premium reds.",price:"€60–85",score:93},
{name:"Yattarna Chardonnay",type:"white",grape:"Chardonnay",vintage:"2019",description:"Australia's answer to Le Montrachet — elegant, complex and showing remarkable finesse.",price:"€130–180",score:95}
]},
{id:"henschke",name:"Henschke",founded:1868,rating:5,
style:"Historic family estate producing Australia's most sacred old-vine Shiraz",
description:"Fifth-generation winemaker Stephen Henschke, with viticulturist wife Prue, tends the legendary Hill of Grace vineyard — pre-phylloxera vines dating to the 1860s.",
wines:[
{name:"Hill of Grace",type:"red",grape:"Shiraz",vintage:"2016",description:"Australia's most iconic single-vineyard wine — profound, complex and from pre-phylloxera vines over 160 years old.",price:"€600–900",score:99},
{name:"Mount Edelstone",type:"red",grape:"Shiraz",vintage:"2018",description:"The 'second wine' to Hill of Grace — still extraordinary, from old ungrafted Shiraz vines.",price:"€130–180",score:96},
{name:"Julius Eden Valley Riesling",type:"white",grape:"Riesling",vintage:"2021",description:"One of Australia's finest Rieslings — lime, slate and blossom with 20-year aging potential.",price:"€30–42",score:93}
]},
{id:"torbreck",name:"Torbreck",founded:1994,rating:4,
style:"Premium Barossa Rhône varieties from old vines with cult following",
description:"Dave Powell's estate specialises in Barossa Grenache, Shiraz and Mourvèdre from ancient vines, producing wines of immense power and complexity.",
wines:[
{name:"RunRig",type:"red",grape:"Shiraz, Viognier",vintage:"2017",description:"The flagship — co-fermented Shiraz and Viognier of extraordinary richness and perfume.",price:"€180–250",score:96},
{name:"The Laird",type:"red",grape:"Shiraz",vintage:"2015",description:"From the oldest Shiraz vines in the Barossa — one of Australia's most powerful and age-worthy wines.",price:"€450–650",score:98},
{name:"Descendant",type:"red",grape:"Shiraz, Viognier",vintage:"2018",description:"The accessible RunRig — still co-fermented and showing the house's signature style.",price:"€70–100",score:92}
]}
]},
{id:"margaret-river",name:"Margaret River",icon:"🌊",climate:"Mediterranean (maritime)",
description:"Western Australia's premier wine region, producing elegant Cabernet Sauvignon and Chardonnay strongly influenced by the nearby Indian Ocean.",
keyGrapes:["Cabernet Sauvignon","Chardonnay","Semillon","Sauvignon Blanc","Merlot"],
wineries:[
{id:"leeuwin-estate",name:"Leeuwin Estate",founded:1974,rating:5,
style:"World-class Chardonnay and Cabernet from Western Australia's best estate",
description:"Leeuwin Estate's Art Series Chardonnay is widely considered Australia's greatest Chardonnay — complex, mineral and built for long aging.",
wines:[
{name:"Art Series Chardonnay",type:"white",grape:"Chardonnay",vintage:"2019",description:"Consistently Australia's greatest Chardonnay — layers of melon, fig and hazelnut with magnificent mineral acidity.",price:"€90–130",score:97},
{name:"Art Series Cabernet Sauvignon",type:"red",grape:"Cabernet Sauvignon",vintage:"2018",description:"Structured, elegant and very age-worthy — the benchmark Margaret River Cabernet.",price:"€75–105",score:95},
{name:"Prelude Chardonnay",type:"white",grape:"Chardonnay",vintage:"2020",description:"The accessible Art Series sibling — still excellent, showing real Margaret River finesse.",price:"€35–50",score:91}
]},
{id:"cullen",name:"Cullen Wines",founded:1971,rating:5,
style:"Biodynamic Margaret River pioneering excellence — Diana Madeline is legendary",
description:"Vanya Cullen's biodynamic and carbon-negative estate produces Diana Madeline, consistently one of Australia's greatest red wines.",
wines:[
{name:"Diana Madeline",type:"red",grape:"Cabernet Sauvignon, Merlot, Cabernet Franc, Malbec, Petit Verdot",vintage:"2019",description:"A grand Bordeaux-style blend of breathtaking complexity — one of Australia's all-time great reds.",price:"€90–130",score:97},
{name:"Vanya Cabernet Sauvignon Merlot",type:"red",grape:"Cabernet Sauvignon, Merlot",vintage:"2019",description:"Named after Vanya Cullen — structured, layered and showing superb Margaret River character.",price:"€58–82",score:93},
{name:"Kevin John Chardonnay",type:"white",grape:"Chardonnay",vintage:"2020",description:"Named after founder Kevin Cullen — complex and mineral, rivalling Leeuwin for Margaret River Chardonnay supremacy.",price:"€65–90",score:95}
]},
{id:"vasse-felix",name:"Vasse Felix",founded:1967,rating:4,
style:"Margaret River's founding estate — classical Cabernet and Chardonnay",
description:"The region's very first winery, still producing benchmark wines from its original Wilyabrup estate and vineyards across the region.",
wines:[
{name:"Tom Cullity",type:"red",grape:"Cabernet Sauvignon, Malbec",vintage:"2018",description:"Named after the region's founder — a dense, structured Cabernet of great power and longevity.",price:"€110–155",score:96},
{name:"Heytesbury Chardonnay",type:"white",grape:"Chardonnay",vintage:"2020",description:"Rich, complex and showing the burgundian influence that shaped Margaret River Chardonnay.",price:"€65–90",score:94},
{name:"Premier Cabernet Sauvignon",type:"red",grape:"Cabernet Sauvignon",vintage:"2020",description:"Classic Margaret River Cabernet — cassis, cedar and mint with excellent structure.",price:"€40–55",score:91}
]}
]},
{id:"yarra-valley",name:"Yarra Valley",icon:"🌿",climate:"Cool Continental",
description:"Victoria's most prestigious cool-climate region, producing elegant Pinot Noir, Chardonnay and Shiraz with Burgundian finesse.",
keyGrapes:["Pinot Noir","Chardonnay","Shiraz","Pinot Gris","Cabernet Sauvignon"],
wineries:[
{id:"mount-mary",name:"Mount Mary",founded:1971,rating:5,
style:"The Yarra Valley's most revered estate — Burgundian and Bordeaux classics",
description:"John Middleton's legendary estate pioneered cool-climate winemaking in Victoria, with the Quintet blend and Chardonnay among Australia's most collectible.",
wines:[
{name:"Quintet",type:"red",grape:"Cabernet Sauvignon, Merlot, Malbec, Cabernet Franc, Petit Verdot",vintage:"2019",description:"Australia's finest Bordeaux-style blend — elegant, complex and showing great aging potential.",price:"€110–160",score:96},
{name:"Chardonnay",type:"white",grape:"Chardonnay",vintage:"2020",description:"Hauntingly complex — citrus, stone fruit and oak integration of genuine Burgundian quality.",price:"€75–105",score:95},
{name:"Pinot Noir",type:"red",grape:"Pinot Noir",vintage:"2020",description:"Fragrant, silky and deeply complex — among Australia's very finest Pinot Noirs.",price:"€95–130",score:95}
]},
{id:"yering-station",name:"Yering Station",founded:1838,rating:4,
style:"Historic Yarra Valley estate producing elegant cool-climate wines",
description:"Victoria's oldest winery, now producing refined and terroir-expressive wines under winemaker Willy Lunn.",
wines:[
{name:"Reserve Pinot Noir",type:"red",grape:"Pinot Noir",vintage:"2020",description:"Rich and layered with cherry, spice and silky tannins — excellent Yarra Valley Pinot.",price:"€65–90",score:93},
{name:"Reserve Chardonnay",type:"white",grape:"Chardonnay",vintage:"2020",description:"Complex and mineral — showing the cool-climate precision of the Yarra Valley.",price:"€52–72",score:92},
{name:"Village Chardonnay",type:"white",grape:"Chardonnay",vintage:"2021",description:"Approachable and fruit-driven — an excellent introduction to Yarra Valley Chardonnay.",price:"€22–30",score:89}
]},
{id:"de-bortoli",name:"De Bortoli (Yarra Valley)",founded:1928,rating:4,
style:"Family estate producing diverse and high-quality Yarra Valley wines",
description:"The Yarra Valley arm of the De Bortoli family produces consistently excellent wines led by their Estate series.",
wines:[
{name:"Yarra Valley Estate Pinot Noir",type:"red",grape:"Pinot Noir",vintage:"2020",description:"Fragrant, light-bodied and showing classic cool-climate Pinot finesse.",price:"€42–58",score:91},
{name:"Yarra Valley Estate Chardonnay",type:"white",grape:"Chardonnay",vintage:"2020",description:"Elegant and food-friendly with fine citrus and stone fruit character.",price:"€38–52",score:90},
{name:"Gulf Station Pinot Noir",type:"red",grape:"Pinot Noir",vintage:"2021",description:"Approachable and bright — an excellent everyday Yarra Valley Pinot at a fair price.",price:"€20–28",score:88}
]}
]},
{id:"clare-valley",name:"Clare Valley",icon:"🏔",climate:"Continental (warm days, cool nights)",
description:"South Australia's cool, elevated Clare Valley is considered the world's finest region for dry Riesling outside Germany, producing wines of electric crispness.",
keyGrapes:["Riesling","Shiraz","Cabernet Sauvignon","Semillon"],
wineries:[
{id:"grosset",name:"Grosset",founded:1981,rating:5,
style:"Australia's Riesling master — precision, mineral purity and longevity",
description:"Jeffrey Grosset is widely considered Australia's finest Riesling producer, with his Polish Hill Riesling regarded as Australia's greatest white wine.",
wines:[
{name:"Polish Hill Riesling",type:"white",grape:"Riesling",vintage:"2021",description:"Australia's greatest Riesling — electric, austere and mineral, capable of 20+ years aging.",price:"€40–58",score:97},
{name:"Springvale Riesling",type:"white",grape:"Riesling",vintage:"2021",description:"The more accessible sibling — still exceptional, with floral aromatics and lime crispness.",price:"€30–42",score:93},
{name:"Gaia",type:"red",grape:"Cabernet Sauvignon, Cabernet Franc, Merlot",vintage:"2019",description:"Grosset's Clare Valley Bordeaux blend — elegant, fine-grained and showing Clare's potential for reds.",price:"€50–70",score:92}
]},
{id:"jim-barry",name:"Jim Barry Wines",founded:1959,rating:4,
style:"Clare Valley Riesling specialist with legendary The Armagh Shiraz",
description:"Tom Barry continues his father Jim's legacy, producing world-class Riesling and the iconic The Armagh, one of Australia's most celebrated Shiraz.",
wines:[
{name:"The Armagh Shiraz",type:"red",grape:"Shiraz",vintage:"2016",description:"One of Australia's greatest Shiraz — immense, powerful and from the estate's oldest Clare Valley vines.",price:"€180–260",score:97},
{name:"McRae Wood Shiraz",type:"red",grape:"Shiraz",vintage:"2019",description:"A serious Clare Valley Shiraz — full-bodied, spicy and showing excellent aging potential.",price:"€55–78",score:93},
{name:"Lodge Hill Dry Riesling",type:"white",grape:"Riesling",vintage:"2021",description:"Crisp, lime-driven and showing genuine Clare Valley mineral character.",price:"€18–25",score:90}
]}
]}
]},

{id:"argentina",name:"Argentina",flag:"🇦🇷",code:"ar",
description:"Argentina is the world's leading Malbec producer, with Mendoza's high-altitude vineyards producing wines of exceptional concentration, freshness and elegance.",
keyGrapes:["Malbec","Cabernet Sauvignon","Torrontés","Bonarda","Cabernet Franc","Chardonnay"],
regions:[
{id:"mendoza-lujan",name:"Mendoza – Luján de Cuyo",icon:"🏔",climate:"Continental (high altitude)",
description:"Mendoza's historic sub-region, home to Argentina's finest Malbec estates in the foothills of the Andes at altitudes of 900–1,100m.",
keyGrapes:["Malbec","Cabernet Sauvignon","Chardonnay","Merlot"],
wineries:[
{id:"catena-zapata",name:"Catena Zapata",founded:1902,rating:5,
style:"Argentina's greatest estate — pioneering high-altitude Malbec of world class",
description:"Nicolás Catena Zapata transformed Argentine wine by identifying the superiority of high-altitude Malbec, creating wines that rival the world's finest.",
wines:[
{name:"Adrianna Vineyard Malbec",type:"red",grape:"Malbec",vintage:"2019",description:"From a 1,450m vineyard — a wine of breathtaking freshness, minerality and Malbec complexity.",price:"€100–150",score:97},
{name:"Adrianna White Bones Chardonnay",type:"white",grape:"Chardonnay",vintage:"2019",description:"Argentina's greatest white wine — electric acidity, mineral character and Burgundian complexity.",price:"€180–250",score:97},
{name:"Catena Alta Malbec",type:"red",grape:"Malbec",vintage:"2019",description:"The benchmark for Argentine Malbec — concentrated, fresh and showing the Catena signature.",price:"€28–40",score:92},
{name:"Adrianna Mundus Bacillus Terrae",type:"red",grape:"Malbec",vintage:"2018",description:"A terroir-focused single-vineyard Malbec of extraordinary complexity from biodynamic soils.",price:"€300–450",score:98}
]},
{id:"cheval-des-andes",name:"Cheval des Andes",founded:1999,rating:5,
style:"Argentina's most prestigious Bordeaux-style blend — a Franco-Argentine icon",
description:"A joint venture between Château Cheval Blanc and Terrazas de los Andes, producing Argentina's most elegant and complex red wine.",
wines:[
{name:"Cheval des Andes",type:"red",grape:"Malbec, Cabernet Sauvignon, Petit Verdot",vintage:"2018",description:"Argentina's finest wine — extraordinary elegance combining Malbec concentration with Bordeaux refinement.",price:"€90–130",score:97},
{name:"Petit Cheval des Andes",type:"red",grape:"Malbec, Cabernet Sauvignon",vintage:"2019",description:"The second wine — still exceptional, with the house's hallmark of finesse and complexity.",price:"€30–45",score:91}
]},
{id:"achaval-ferrer",name:"Achaval Ferrer",founded:1998,rating:5,
style:"Single-vineyard old-vine Malbec of international fame",
description:"Roberto Cipresso and partners created this estate to showcase Argentina's finest Malbec terroirs — single-vineyard wines that redefined the country's potential.",
wines:[
{name:"Finca Altamira Malbec",type:"red",grape:"Malbec",vintage:"2018",description:"From the Altamira sub-district of Uco Valley — floral, mineral and showing exceptional freshness.",price:"€75–105",score:95},
{name:"Finca Bella Vista Malbec",type:"red",grape:"Malbec",vintage:"2018",description:"Dark, structured and complex — from one of Luján de Cuyo's most celebrated parcels.",price:"€75–105",score:95},
{name:"Quimera",type:"red",grape:"Malbec, Cabernet Sauvignon, Merlot, Cabernet Franc",vintage:"2019",description:"Their multi-variety blend — approachable, fresh and showing excellent everyday quality.",price:"€24–34",score:90}
]}
]},
{id:"mendoza-uco",name:"Mendoza – Valle de Uco",icon:"❄️",climate:"Continental (very high altitude)",
description:"Mendoza's coolest and highest sub-region at 1,000–1,500m, producing Malbec and Cabernet Franc of remarkable freshness, aromatics and aging potential.",
keyGrapes:["Malbec","Cabernet Franc","Cabernet Sauvignon","Chardonnay","Pinot Noir"],
wineries:[
{id:"zuccardi",name:"Familia Zuccardi",founded:1963,rating:5,
style:"Valle de Uco terroir specialist — Argentina's most awarded modern estate",
description:"Sebastián Zuccardi has transformed this family estate into one of the world's most celebrated, with Zuccardi Valle de Uco voted the World's Best Vineyard.",
wines:[
{name:"Zuccardi Valle de Uco",type:"red",grape:"Malbec",vintage:"2019",description:"From four terraces in the Uco Valley — a wine of haunting complexity, mineral precision and great length.",price:"€130–180",score:98},
{name:"Finca Piedra Infinita",type:"red",grape:"Malbec",vintage:"2019",description:"A single-vineyard Malbec of extraordinary texture — chalky tannins and a seemingly infinite finish.",price:"€65–90",score:96},
{name:"Emma Zuccardi Malbec",type:"red",grape:"Malbec",vintage:"2020",description:"Named after Sebastián's daughter — an elegant, terroir-driven Malbec of real complexity.",price:"€35–50",score:92}
]},
{id:"clos-los-siete",name:"Clos de los Siete",founded:2002,rating:4,
style:"Michel Rolland's grand Uco Valley estate — Malbec-led Bordeaux blend",
description:"Michel Rolland assembled seven French investors to create this ambitious Uco Valley estate, producing wines of international acclaim.",
wines:[
{name:"Clos de los Siete",type:"red",grape:"Malbec, Merlot, Cabernet Sauvignon, Syrah",vintage:"2020",description:"Rich, polished and approachable — Michel Rolland's vision of Argentine wine at a democratic price.",price:"€16–22",score:90},
{name:"Monteviejo Lindaflor Malbec",type:"red",grape:"Malbec",vintage:"2019",description:"From the Monteviejo estate within the Clos — concentrated, fresh and showing Uco Valley finesse.",price:"€35–50",score:92}
]},
{id:"luca",name:"Luca Wines",founded:1999,rating:4,
style:"Laura Catena's personal project — old-vine Malbec and Chardonnay",
description:"Laura Catena's own label focuses on old-vine parcels, particularly the Uco Valley's distinctive terroir expressions.",
wines:[
{name:"Old Vine Malbec",type:"red",grape:"Malbec",vintage:"2019",description:"From ancient ungrafted vines in Uco Valley — concentrated, complex and showing real depth.",price:"€35–50",score:92},
{name:"G Lot Chardonnay",type:"white",grape:"Chardonnay",vintage:"2020",description:"Fresh, mineral and showing the surprising elegance of Mendoza's highest-altitude Chardonnay.",price:"€28–40",score:90}
]}
]},
{id:"salta",name:"Salta – Cafayate",icon:"🌵",climate:"Continental (extreme altitude)",
description:"The world's highest wine vineyards at 1,700–3,111m altitude, producing Argentina's unique Torrontés whites and concentrated, mineral Malbec.",
keyGrapes:["Torrontés","Malbec","Cabernet Sauvignon","Tannat","Syrah"],
wineries:[
{id:"colome",name:"Colomé",founded:1831,rating:5,
style:"Extreme altitude Malbec and Torrontés from Argentina's oldest operating winery",
description:"In Payogasta at 2,300m, Colomé is one of the world's most extraordinary wineries — the Altura Máxima comes from the world's highest commercial vineyard at 3,111m.",
wines:[
{name:"Altura Máxima Malbec",type:"red",grape:"Malbec",vintage:"2018",description:"From the world's highest commercial vineyard at 3,111m — unique, ethereal and unlike any other Malbec.",price:"€140–200",score:97},
{name:"Colomé Estate Malbec",type:"red",grape:"Malbec",vintage:"2019",description:"From Payogasta at 2,300m — concentrated, mineral and showing the character of extreme altitude.",price:"€40–58",score:93},
{name:"Torrontés",type:"white",grape:"Torrontés",vintage:"2021",description:"Argentina's unique grape at altitude — explosively aromatic with rose, peach and ginger at refreshing acidity.",price:"€18–26",score:90}
]},
{id:"el-esteco",name:"El Esteco",founded:1892,rating:4,
style:"Historic Cafayate producer of expressive Torrontés and Malbec",
description:"One of Salta's oldest and most traditional estates, producing wines that express the unique high-altitude terroir of the Calchaquí Valleys.",
wines:[
{name:"Old Vines 1945 Malbec",type:"red",grape:"Malbec",vintage:"2018",description:"From Malbec vines planted in 1945 — concentrated and complex with extraordinary old-vine character.",price:"€40–58",score:93},
{name:"Don David Reserve Malbec",type:"red",grape:"Malbec",vintage:"2019",description:"Approachable, vibrant and showing the freshness that altitude brings to Salta Malbec.",price:"€16–22",score:89},
{name:"Cuma Torrontés Orgánico",type:"white",grape:"Torrontés",vintage:"2021",description:"Organic Torrontés from high altitude — floral, aromatic and refreshingly dry.",price:"€12–18",score:88}
]}
]}
]},

{id:"chile",name:"Chile",flag:"🇨🇱",code:"cl",
description:"Chile's diverse valleys from cool Casablanca to warm Colchagua produce world-class Carmenère, Cabernet Sauvignon, and increasingly impressive Pinot Noir.",
keyGrapes:["Cabernet Sauvignon","Carmenère","Merlot","Sauvignon Blanc","Chardonnay","Pinot Noir"],
regions:[
{id:"maipo-valley",name:"Maipo Valley",icon:"🏔",climate:"Mediterranean (semi-arid)",
description:"Chile's most prestigious red wine valley, the heartland of Cabernet Sauvignon, and home to iconic estates like Almaviva and Don Melchor.",
keyGrapes:["Cabernet Sauvignon","Merlot","Carmenère","Cabernet Franc","Petit Verdot"],
wineries:[
{id:"almaviva",name:"Almaviva",founded:1997,rating:5,
style:"Chile's greatest Bordeaux-style blend — Baron Philippe de Rothschild and Concha y Toro",
description:"A joint venture between Baron Philippe de Rothschild and Concha y Toro, Almaviva produces Chile's most prestigious wine from the Puente Alto subzone.",
wines:[
{name:"Almaviva",type:"red",grape:"Cabernet Sauvignon, Carmenère, Cabernet Franc, Petit Verdot",vintage:"2019",description:"Chile's most iconic wine — elegant, structured and showing wonderful complexity from Puente Alto Cabernet.",price:"€130–180",score:96},
{name:"EPU",type:"red",grape:"Cabernet Sauvignon, Carmenère",vintage:"2020",description:"The second wine — still exceptional, showing the Almaviva terroir with impressive depth.",price:"€50–70",score:91}
]},
{id:"don-melchor",name:"Viña Concha y Toro (Don Melchor)",founded:1883,rating:5,
style:"Chile's most celebrated single-vineyard Cabernet Sauvignon",
description:"Don Melchor is Concha y Toro's flagship — a single-vineyard Cabernet Sauvignon from Puente Alto that has achieved legendary status in Chile.",
wines:[
{name:"Don Melchor Cabernet Sauvignon",type:"red",grape:"Cabernet Sauvignon, Cabernet Franc",vintage:"2019",description:"Consistently one of South America's greatest wines — structured, complex and built for decades.",price:"€90–130",score:96},
{name:"Terrunyo Carmenère",type:"red",grape:"Carmenère",vintage:"2019",description:"Chile's signature grape at its most serious — herbal, complex and showing Carmenère's true potential.",price:"€30–42",score:92},
{name:"Marqués de Casa Concha Cabernet",type:"red",grape:"Cabernet Sauvignon",vintage:"2020",description:"Excellent quality at an accessible price — rich, polished and showing genuine Maipo character.",price:"€18–25",score:90}
]},
{id:"santa-rita",name:"Santa Rita",founded:1880,rating:4,
style:"Historic Chilean estate — the 120 range and Pehuén flagship",
description:"One of Chile's oldest and most respected estates, famous for the iconic 120 range and their premium Casa Real Cabernet Sauvignon.",
wines:[
{name:"Casa Real Cabernet Sauvignon",type:"red",grape:"Cabernet Sauvignon",vintage:"2019",description:"The flagship — structured and concentrated with classic Maipo cedar, tobacco and blackcurrant.",price:"€70–100",score:93},
{name:"Triple C",type:"red",grape:"Cabernet Sauvignon, Cabernet Franc, Carmenère",vintage:"2018",description:"An intriguing Maipo blend — showing the complementarity of the three C varieties.",price:"€25–35",score:91},
{name:"Medalla Real Cabernet Sauvignon",type:"red",grape:"Cabernet Sauvignon",vintage:"2020",description:"Reliable and expressive — one of Chile's best value premium Cabernets.",price:"€14–20",score:89}
]}
]},
{id:"colchagua-valley",name:"Colchagua Valley",icon:"🌿",climate:"Mediterranean (warm)",
description:"One of Chile's warmest wine valleys, producing opulent, full-bodied reds — particularly Carmenère, Merlot and Cabernet Sauvignon of impressive concentration.",
keyGrapes:["Carmenère","Cabernet Sauvignon","Merlot","Syrah","Malbec"],
wineries:[
{id:"casa-lapostolle",name:"Casa Lapostolle",founded:1994,rating:5,
style:"Clos Apalta is Chile's most acclaimed wine — biodynamic precision",
description:"Alexandra Marnier-Lapostolle's biodynamic estate produces Clos Apalta, consistently rated Chile's greatest wine — a Carmenère-led blend of extraordinary complexity.",
wines:[
{name:"Clos Apalta",type:"red",grape:"Carmenère, Merlot, Cabernet Sauvignon, Petit Verdot",vintage:"2018",description:"Chile's most celebrated wine — layers of dark fruit, herbs and spice from old biodynamic vines.",price:"€90–130",score:97},
{name:"Cuvée Alexandre Carmenère",type:"red",grape:"Carmenère",vintage:"2019",description:"Single-variety Carmenère at its best — herbal, plummy and showing the grape's true character.",price:"€20–28",score:91}
]},
{id:"montes",name:"Montes",founded:1988,rating:4,
style:"Pioneer of Chilean fine wine — consistently excellent across the range",
description:"Aurelio Montes pioneered high-quality Chilean winemaking, creating wines that helped establish the country's international reputation.",
wines:[
{name:"Montes Alpha M",type:"red",grape:"Cabernet Sauvignon, Merlot, Cabernet Franc, Petit Verdot",vintage:"2019",description:"The flagship — Chile's answer to a Médoc, elegant and structured with great aging potential.",price:"€70–100",score:94},
{name:"Purple Angel",type:"red",grape:"Carmenère, Petit Verdot",vintage:"2019",description:"The world's greatest single-vineyard Carmenère — rich, herbal and showing the grape's extraordinary potential.",price:"€65–90",score:95},
{name:"Montes Alpha Cabernet Sauvignon",type:"red",grape:"Cabernet Sauvignon",vintage:"2020",description:"Consistently one of Chile's best value premium Cabernets — reliable, expressive and well-crafted.",price:"€16–22",score:90}
]},
{id:"viu-manent",name:"Viu Manent",founded:1935,rating:4,
style:"Colchagua specialist producing outstanding Malbec and Carmenère",
description:"One of Colchagua's most respected family estates, producing wines that showcase the valley's ideal conditions for Malbec and Carmenère.",
wines:[
{name:"El Incas Malbec",type:"red",grape:"Malbec",vintage:"2017",description:"From very old Malbec vines — concentrated, complex and rivalling Argentina's best.",price:"€50–70",score:93},
{name:"Single Vineyard Carmenère",type:"red",grape:"Carmenère",vintage:"2019",description:"Benchmark Chilean Carmenère — herbal, dark-fruited and showing excellent complexity.",price:"€25–35",score:90}
]}
]},
{id:"casablanca-valley",name:"Casablanca Valley",icon:"🌊",climate:"Cool Maritime",
description:"Chile's pioneering cool-climate valley, producing world-class Sauvignon Blanc, Chardonnay and increasingly fine Pinot Noir with the influence of the Pacific Ocean.",
keyGrapes:["Sauvignon Blanc","Chardonnay","Pinot Noir","Riesling","Gewurztraminer"],
wineries:[
{id:"errazuriz",name:"Errázuriz",founded:1870,rating:5,
style:"Chile's most historic estate — Aconcagua expertise across cool and warm valleys",
description:"Eduardo Chadwick's estate spans multiple Chilean valleys, with the legendary Viñedo Chadwick Cabernet and the innovative Kai Carmenère.",
wines:[
{name:"Viñedo Chadwick",type:"red",grape:"Cabernet Sauvignon",vintage:"2019",description:"Chile's most acclaimed single-vineyard wine — elegant, precise and from the family's historic Maipo estate.",price:"€170–240",score:97},
{name:"Kai",type:"red",grape:"Carmenère",vintage:"2019",description:"100% Carmenère from the highest-rated producer — herbal, complex and redefining the grape.",price:"€70–100",score:95},
{name:"Aconcagua Costa Pinot Noir",type:"red",grape:"Pinot Noir",vintage:"2020",description:"Cool-climate Pinot Noir showing Chile's emerging Pacific Coast potential for the variety.",price:"€26–38",score:91}
]},
{id:"casas-del-bosque",name:"Casas del Bosque",founded:1993,rating:4,
style:"Cool-climate Casablanca specialist producing elegant Chardonnay and Pinot Noir",
description:"This Casablanca estate has built a strong reputation for restraint and elegance, particularly with Chardonnay and Sauvignon Blanc.",
wines:[
{name:"Gran Reserva Chardonnay",type:"white",grape:"Chardonnay",vintage:"2020",description:"Elegant and mineral — showing Casablanca's cool-climate precision and food-friendliness.",price:"€18–25",score:91},
{name:"Gran Reserva Pinot Noir",type:"red",grape:"Pinot Noir",vintage:"2020",description:"Chile's cool-climate Pinot at its most approachable — fragrant, silky and showing real finesse.",price:"€20–28",score:90},
{name:"Sauvignon Blanc Pequeñas Producciones",type:"white",grape:"Sauvignon Blanc",vintage:"2021",description:"Vibrant, herbaceous and showing the classic Casablanca expression of the variety.",price:"€22–30",score:91}
]}
]}
]},

{id:"portugal",name:"Portugal",flag:"🇵🇹",code:"pt",
description:"Portugal's rich diversity spans the fortified Port and Madeira wines to the aromatic Vinho Verde and the increasingly celebrated red wines of the Douro and Alentejo.",
keyGrapes:["Touriga Nacional","Tinta Roriz","Touriga Franca","Alvarinho","Trincadeira","Arinto"],
regions:[
{id:"douro",name:"Douro Valley",icon:"🏞",climate:"Continental (extreme)",
description:"Portugal's most dramatic wine region, carved by the Douro river through steep schist terraces — producing world-class table wines and legendary Port.",
keyGrapes:["Touriga Nacional","Touriga Franca","Tinta Roriz","Tinta Barroca","Tinta Cão"],
wineries:[
{id:"quinta-crasto",name:"Quinta do Crasto",founded:1615,rating:5,
style:"Modern Douro estate producing Portugal's finest table wines alongside Port",
description:"The Roquette family's historic quinta produces benchmark Douro reds alongside excellent Port, with their Reserva Old Vines one of Portugal's greatest wines.",
wines:[
{name:"Crasto Superior",type:"red",grape:"Touriga Franca, Tinta Roriz, Touriga Nacional",vintage:"2019",description:"Their prestige table wine — concentrated, structured and showing the Douro's schist terroir.",price:"€40–58",score:95},
{name:"Crasto Reserva Old Vines",type:"red",grape:"Touriga Nacional, Touriga Franca, Tinta Roriz",vintage:"2018",description:"From century-old vines — a profound expression of the Douro with stunning complexity.",price:"€55–78",score:96},
{name:"Crasto White",type:"white",grape:"Viosinho, Gouveio, Rabigato",vintage:"2020",description:"An aromatic, textural Douro white showing the region's remarkable potential for white wines.",price:"€20–28",score:90},
{name:"LBV Port",type:"fortified",grape:"Touriga Nacional, Tinta Roriz, Touriga Franca",vintage:"2016",description:"Late Bottled Vintage Port — rich, complex and showing the Douro's Port-making mastery.",price:"€18–25",score:91}
]},
{id:"quinta-vale-meao",name:"Quinta do Vale Meão",founded:1877,rating:5,
style:"The birthplace of Barca Velha — Portugal's most iconic wine",
description:"Francisco Javier de Olazabal's estate was the original source of Barca Velha, Portugal's most legendary wine, now producing its own exceptional table wines.",
wines:[
{name:"Quinta do Vale Meão",type:"red",grape:"Touriga Franca, Tinta Roriz, Touriga Nacional",vintage:"2018",description:"Portugal's finest Douro red — mineral, concentrated and showing remarkable elegance for the region.",price:"€75–105",score:97},
{name:"Meandro do Vale Meão",type:"red",grape:"Touriga Franca, Tinta Roriz",vintage:"2019",description:"The second wine — still showing the quality and terroir expression of the Vale Meão estate.",price:"€20–28",score:91},
{name:"Vale Meão White",type:"white",grape:"Rabigato, Códega, Viosinho",vintage:"2020",description:"A benchmark Douro white — textured, aromatic and showing genuine complexity.",price:"€18–25",score:90}
]},
{id:"taylors-port",name:"Taylor's Port",founded:1692,rating:5,
style:"The benchmark for vintage Port — over 330 years of Port excellence",
description:"Taylor Fladgate, founded in 1692, is widely regarded as the finest Port shipper, with their Vintage Ports commanding some of the highest prices in the world.",
wines:[
{name:"Taylor's Vintage Port",type:"fortified",grape:"Touriga Nacional, Touriga Franca, Tinta Barroca, Tinta Cão",vintage:"2017",description:"A declared vintage of extraordinary power and elegance — one of the century's finest Ports.",price:"€70–100",score:97},
{name:"Taylor's 20 Year Old Tawny",type:"fortified",grape:"Touriga Nacional, Tinta Roriz, Touriga Franca",vintage:"NV",description:"Benchmark aged Tawny — complex dried fruit, walnut and caramel with a silky, lingering finish.",price:"€55–78",score:95},
{name:"Taylor's LBV",type:"fortified",grape:"Touriga Nacional, Touriga Franca, Tinta Roriz",vintage:"2016",description:"Excellent entry to Taylor's quality — rich, structured and showing the house's Port mastery.",price:"€18–25",score:91}
]}
]},
{id:"alentejo",name:"Alentejo",icon:"🌾",climate:"Mediterranean (hot, dry)",
description:"Portugal's largest wine region, producing richly textured reds from indigenous varieties and increasingly complex whites in its sun-scorched landscape.",
keyGrapes:["Aragonez","Trincadeira","Alicante Bouschet","Antão Vaz","Arinto","Syrah"],
wineries:[
{id:"esporao",name:"Herdade do Esporão",founded:1973,rating:4,
style:"The model of modern Alentejo winemaking — sustainable and diverse",
description:"One of Portugal's most visited wine estates, Esporão produces an impressive range of wines from their vast organic and biodynamic estate.",
wines:[
{name:"Esporão Private Selection Red",type:"red",grape:"Aragonez, Alicante Bouschet, Touriga Nacional",vintage:"2018",description:"Their prestige red — concentrated, structured and showing the best of Alentejo terroir.",price:"€30–42",score:93},
{name:"Esporão Reserva Red",type:"red",grape:"Aragonez, Trincadeira",vintage:"2019",description:"The benchmark Alentejo red — generous, warm and showing excellent complexity.",price:"€16–22",score:90},
{name:"Verdelho Branco",type:"white",grape:"Verdelho",vintage:"2020",description:"Crisp, aromatic and showing the potential for fresh whites in warm Alentejo.",price:"€10–15",score:88}
]},
{id:"cortes-de-cima",name:"Cortes de Cima",founded:1988,rating:4,
style:"Danish-owned Alentejo estate pioneering Syrah in Portugal",
description:"Hans and Carrie Jørgensen's Danish-owned estate has established itself as a Syrah pioneer, producing reds that rival the Northern Rhône.",
wines:[
{name:"Cortes de Cima",type:"red",grape:"Syrah, Aragonez, Cabernet Franc",vintage:"2017",description:"Their flagship — Syrah-led with peppery Northern Rhône character and Portuguese warmth.",price:"€40–58",score:93},
{name:"Chaminé",type:"red",grape:"Aragonez, Trincadeira, Syrah",vintage:"2020",description:"Approachable, fruit-forward and showing excellent everyday quality from Alentejo.",price:"€10–15",score:88},
{name:"Incógnito Syrah",type:"red",grape:"Syrah",vintage:"2018",description:"Pure Syrah from Alentejo — dark, peppery and showing the grape's affinity for Portuguese terroir.",price:"€30–42",score:92}
]}
]},
{id:"vinho-verde",name:"Vinho Verde",icon:"🌿",climate:"Atlantic (cool, wet)",
description:"Northwest Portugal's vast green wine region, producing some of the world's most vibrant, mineral and food-friendly white wines from the Albariño-related Alvarinho.",
keyGrapes:["Alvarinho","Loureiro","Arinto","Trajadura","Azal"],
wineries:[
{id:"soalheiro",name:"Soalheiro",founded:1982,rating:5,
style:"The benchmark for serious age-worthy Alvarinho from Melgaço",
description:"João António Cerdeira pioneered quality Alvarinho in the Monção e Melgaço sub-region — the finest appellation for Vinho Verde.",
wines:[
{name:"Soalheiro Primeiras Vinhas",type:"white",grape:"Alvarinho",vintage:"2019",description:"From old vines — concentrated, mineral and showing Alvarinho at its most serious and complex.",price:"€38–55",score:95},
{name:"Soalheiro Alvarinho",type:"white",grape:"Alvarinho",vintage:"2021",description:"The classic — peach, citrus and white flower with the hallmark Monção minerality.",price:"€16–22",score:91},
{name:"Soalheiro Espumante Bruto",type:"sparkling",grape:"Alvarinho",vintage:"2019",description:"A refined sparkling Alvarinho — crisp, mineral and showing the variety's sparkling potential.",price:"€20–28",score:90}
]},
{id:"anselmo-mendes",name:"Anselmo Mendes",founded:1997,rating:5,
style:"Artisan Alvarinho specialist producing some of Portugal's finest whites",
description:"Anselmo Mendes is considered one of Portugal's greatest white wine producers, with his Parcela Única and Curtimenta Alvarinho among the country's finest.",
wines:[
{name:"Parcela Única Alvarinho",type:"white",grape:"Alvarinho",vintage:"2019",description:"From a single parcel of old vines — mineral, complex and showing Alvarinho at its absolute peak.",price:"€40–58",score:96},
{name:"Curtimenta Alvarinho",type:"white",grape:"Alvarinho",vintage:"2020",description:"Skin-contact Alvarinho — unique, textural and showing extraordinary complexity.",price:"€22–32",score:93},
{name:"Muros de Melgaço Alvarinho",type:"white",grape:"Alvarinho",vintage:"2021",description:"Fresh, vibrant and mineral — an excellent introduction to the Melgaço style.",price:"€14–20",score:90}
]}
]}
]},

{id:"south-africa",name:"South Africa",flag:"🇿🇦",code:"za",
description:"South Africa's Cape Winelands produce world-class wines from Stellenbosch's granite slopes to Swartland's old-vine Chenin Blanc and Syrah.",
keyGrapes:["Pinotage","Cabernet Sauvignon","Syrah","Chenin Blanc","Sauvignon Blanc","Merlot"],
regions:[
{id:"stellenbosch",name:"Stellenbosch",icon:"🏔",climate:"Mediterranean",
description:"South Africa's most prestigious wine region, producing benchmark Cabernet Sauvignon, Bordeaux blends and Pinotage from granite and decomposed granite soils.",
keyGrapes:["Cabernet Sauvignon","Merlot","Pinotage","Syrah","Chenin Blanc"],
wineries:[
{id:"meerlust",name:"Meerlust",founded:1693,rating:5,
style:"South Africa's most prestigious estate — Rubicon leads all Cape Bordeaux blends",
description:"This 330-year-old estate, still owned by the Myburgh family, produces Rubicon — South Africa's most celebrated Bordeaux-style blend.",
wines:[
{name:"Rubicon",type:"red",grape:"Merlot, Cabernet Sauvignon, Cabernet Franc, Petit Verdot",vintage:"2018",description:"South Africa's most iconic red — elegant, complex and showing superb Stellenbosch terroir.",price:"€38–55",score:95},
{name:"Merlot",type:"red",grape:"Merlot",vintage:"2019",description:"One of South Africa's finest Merlots — plummy, structured and showing real complexity.",price:"€24–34",score:92},
{name:"Chardonnay",type:"white",grape:"Chardonnay",vintage:"2020",description:"Barrel-fermented Chardonnay of excellent quality — rich, creamy and very food-friendly.",price:"€24–34",score:91}
]},
{id:"kanonkop",name:"Kanonkop",founded:1910,rating:5,
style:"South Africa's Pinotage king and benchmark Bordeaux blend",
description:"Johann Krige's estate is South Africa's Pinotage specialist, consistently winning awards and producing Paul Sauer — one of the Cape's greatest reds.",
wines:[
{name:"Paul Sauer",type:"red",grape:"Cabernet Sauvignon, Cabernet Franc, Merlot",vintage:"2018",description:"One of South Africa's greatest wines — structured, complex and with genuine Bordeaux-level ambition.",price:"€52–75",score:96},
{name:"Pinotage",type:"red",grape:"Pinotage",vintage:"2019",description:"The benchmark South African Pinotage — rich, coffee-tinged and showing the variety's true nobility.",price:"€28–40",score:93},
{name:"Kadette Cape Blend",type:"red",grape:"Pinotage, Cabernet Sauvignon, Merlot, Cabernet Franc",vintage:"2020",description:"Approachable and expressive — an excellent everyday Cape Blend showing South African character.",price:"€12–18",score:89}
]},
{id:"vergelegen",name:"Vergelegen",founded:1700,rating:5,
style:"Historic Cape Dutch estate producing elegant premium wines",
description:"One of the Cape's oldest and most beautiful estates, producing flagship Bordeaux blends of great elegance from Helderberg mountain vineyards.",
wines:[
{name:"V",type:"red",grape:"Cabernet Sauvignon, Cabernet Franc, Petit Verdot, Merlot",vintage:"2016",description:"Vergelegen's flagship — profound, structured and one of South Africa's most age-worthy reds.",price:"€72–100",score:96},
{name:"GVB White",type:"white",grape:"Sauvignon Blanc, Semillon",vintage:"2020",description:"One of South Africa's finest whites — mineral, complex and showing Bordeaux-like elegance.",price:"€28–40",score:93},
{name:"Cabernet Sauvignon Reserve",type:"red",grape:"Cabernet Sauvignon",vintage:"2018",description:"Rich, structured and showing the quality of Vergelegen's Helderberg mountain terroir.",price:"€35–50",score:92}
]}
]},
{id:"franschhoek",name:"Franschhoek",icon:"🌹",climate:"Mediterranean (valley)",
description:"South Africa's 'French Corner' — settled by Huguenot refugees in 1688, now producing some of the Cape's most elegant Syrah, Semillon and Cape Blends.",
keyGrapes:["Syrah","Semillon","Chardonnay","Cabernet Sauvignon","Chenin Blanc"],
wineries:[
{id:"boekenhoutskloof",name:"Boekenhoutskloof",founded:1776,rating:5,
style:"Benchmark Syrah and Semillon from a Franschhoek mountain estate",
description:"Marc Kent's acclaimed estate produces some of South Africa's greatest wines — above all the ethereal Syrah and complex old-vine Semillon.",
wines:[
{name:"Syrah",type:"red",grape:"Syrah",vintage:"2019",description:"South Africa's greatest Syrah — Northern Rhône-like elegance with a distinctive Cape minerality.",price:"€72–100",score:97},
{name:"Semillon",type:"white",grape:"Semillon",vintage:"2020",description:"From old Franschhoek vines — waxy, complex and one of South Africa's most distinctive whites.",price:"€52–75",score:95},
{name:"The Chocolate Block",type:"red",grape:"Syrah, Grenache, Cabernet Sauvignon, Cinsault, Viognier",vintage:"2020",description:"South Africa's most popular premium red — generous, complex and irresistibly approachable.",price:"€22–32",score:91}
]},
{id:"la-motte",name:"La Motte",founded:1695,rating:4,
style:"Historic Rupert family estate combining fine art with fine wine",
description:"The Rupert family's historic estate produces wines that balance accessibility with genuine quality, particularly with Shiraz Viognier and Sauvignon Blanc.",
wines:[
{name:"Pierneef Shiraz Viognier",type:"red",grape:"Syrah, Viognier",vintage:"2019",description:"Co-fermented in the Northern Rhône style — perfumed, complex and very age-worthy.",price:"€28–40",score:92},
{name:"Millennium",type:"red",grape:"Cabernet Sauvignon, Shiraz, Merlot",vintage:"2018",description:"The prestige blend — structured and showing Franschhoek's finest red wine potential.",price:"€42–60",score:93},
{name:"Sauvignon Blanc",type:"white",grape:"Sauvignon Blanc",vintage:"2021",description:"Vibrant and herbaceous — one of the Cape's most reliable Sauvignon Blancs.",price:"€10–16",score:89}
]}
]},
{id:"swartland",name:"Swartland",icon:"🌾",climate:"Mediterranean (hot, dry)",
description:"South Africa's most exciting wine frontier — old-vine Chenin Blanc, Grenache and Syrah from granite and shale soils led by the revolutionary 'Swartland Revolution' producers.",
keyGrapes:["Chenin Blanc","Syrah","Grenache","Cinsault","Mourvèdre","Clairette"],
wineries:[
{id:"sadie-family",name:"Sadie Family Wines",founded:2000,rating:5,
style:"South Africa's most revered artisan producer — biodynamic old-vine magic",
description:"Eben Sadie's philosophy of old vines, minimal intervention and diverse blending has made him South Africa's most celebrated winemaker.",
wines:[
{name:"Columella",type:"red",grape:"Syrah, Mourvèdre",vintage:"2019",description:"South Africa's greatest red — Rhône-inspired but unmistakably South African in its mineral grandeur.",price:"€72–100",score:98},
{name:"Palladius",type:"white",grape:"Chenin Blanc, Grenache Blanc, Roussanne, Marsanne, Viognier",vintage:"2019",description:"South Africa's greatest white — a complex field blend of extraordinary texture and minerality.",price:"€72–100",score:97},
{name:"T'Voetangel",type:"red",grape:"Grenache, Cinsault, Tinta Barocca",vintage:"2020",description:"A lighter, more fragrant Swartland red — elegant, perfumed and showing the diversity of old vines.",price:"€28–40",score:92}
]},
{id:"mullineux",name:"Mullineux & Leeu Family Wines",founded:2007,rating:5,
style:"Swartland's terroir pioneers — single-soil Syrah of world class",
description:"Chris and Andrea Mullineux produce single-soil Syrahs and Chenin Blancs that rival Europe's finest expressions of these varieties.",
wines:[
{name:"Iron Syrah",type:"red",grape:"Syrah",vintage:"2019",description:"From iron-rich Perdeberg granite — a more structured, mineral expression of Swartland Syrah.",price:"€42–60",score:95},
{name:"Schist Syrah",type:"red",grape:"Syrah",vintage:"2019",description:"From schist soils — more aromatic and floral, showing how soil type transforms Swartland Syrah.",price:"€42–60",score:95},
{name:"Old Vines White",type:"white",grape:"Chenin Blanc, Clairette, Semillon",vintage:"2020",description:"A complex field blend from old Swartland vines — rich, textural and uniquely South African.",price:"€24–35",score:92}
]}
]}
]},

{id:"new-zealand",name:"New Zealand",flag:"🇳🇿",code:"nz",
description:"New Zealand has established itself as a world leader in Sauvignon Blanc from Marlborough and Pinot Noir from Central Otago, with a unique clean-green identity.",
keyGrapes:["Sauvignon Blanc","Pinot Noir","Chardonnay","Pinot Gris","Riesling","Syrah"],
regions:[
{id:"marlborough",name:"Marlborough",icon:"🌿",climate:"Cool Maritime",
description:"New Zealand's largest and most famous wine region, defining the world's benchmark for pungent, herbaceous Sauvignon Blanc since the 1970s.",
keyGrapes:["Sauvignon Blanc","Pinot Noir","Chardonnay","Pinot Gris","Riesling"],
wineries:[
{id:"cloudy-bay",name:"Cloudy Bay",founded:1985,rating:5,
style:"The wine that put New Zealand on the world map — iconic Marlborough SB",
description:"David Hohnen's landmark estate created one of the most recognisable wine brands in the world with their Marlborough Sauvignon Blanc.",
wines:[
{name:"Sauvignon Blanc",type:"white",grape:"Sauvignon Blanc",vintage:"2021",description:"The wine that defined a region — vibrant, herbaceous and intensely aromatic with passionfruit and citrus.",price:"€18–26",score:93},
{name:"Te Koko",type:"white",grape:"Sauvignon Blanc",vintage:"2019",description:"Oak-aged Sauvignon Blanc of surprising complexity and longevity — the serious face of Marlborough.",price:"€42–60",score:93},
{name:"Pelorus Brut NV",type:"sparkling",grape:"Chardonnay, Pinot Noir",vintage:"NV",description:"New Zealand's finest traditional-method sparkling wine — crisp, fine-bubbled and elegant.",price:"€20–28",score:90},
{name:"Pinot Noir",type:"red",grape:"Pinot Noir",vintage:"2020",description:"Concentrated and vibrant Marlborough Pinot — showing the variety's growing success in the region.",price:"€32–45",score:91}
]},
{id:"seresin",name:"Seresin Estate",founded:1992,rating:4,
style:"Biodynamic Marlborough estate producing wines of exceptional purity",
description:"Cinematographer Michael Seresin's biodynamic estate produces some of Marlborough's most complex and food-friendly wines.",
wines:[
{name:"Rachel Pinot Noir",type:"red",grape:"Pinot Noir",vintage:"2019",description:"Named after his daughter — one of Marlborough's finest Pinot Noirs, showing real complexity.",price:"€52–75",score:93},
{name:"Marama Sauvignon Blanc",type:"white",grape:"Sauvignon Blanc",vintage:"2021",description:"Pure, mineral and showing the biodynamic precision of the vineyards.",price:"€24–34",score:91},
{name:"Leah Pinot Gris",type:"white",grape:"Pinot Gris",vintage:"2020",description:"Rich, textural and aromatic — one of New Zealand's finest Pinot Gris.",price:"€20–28",score:90}
]},
{id:"fromm",name:"Fromm Winery",founded:1992,rating:5,
style:"Small artisan estate producing Marlborough's most serious Pinot Noir",
description:"Georg Fromm's small estate is considered one of Marlborough's finest, particularly for exceptional single-vineyard Pinot Noirs.",
wines:[
{name:"Clayvin Vineyard Pinot Noir",type:"red",grape:"Pinot Noir",vintage:"2018",description:"From a clay-rich site — complex, structured and showing the Burgundian aspiration of NZ Pinot.",price:"€105–150",score:95},
{name:"La Strada Pinot Noir",type:"red",grape:"Pinot Noir",vintage:"2019",description:"The estate blend — rich, cherry-fruited and showing excellent complexity for the price.",price:"€52–75",score:92},
{name:"La Strada Riesling",type:"white",grape:"Riesling",vintage:"2021",description:"A rare and excellent NZ Riesling — lime, mineral and showing great aging potential.",price:"€20–28",score:91}
]}
]},
{id:"central-otago",name:"Central Otago",icon:"❄️",climate:"Continental (extreme)",
description:"The world's southernmost wine region produces Pinot Noir of extraordinary intensity from schist soils with dramatic diurnal temperature ranges.",
keyGrapes:["Pinot Noir","Pinot Gris","Chardonnay","Riesling"],
wineries:[
{id:"felton-road",name:"Felton Road",founded:1992,rating:5,
style:"Central Otago's finest biodynamic Pinot Noir — world-class precision",
description:"Blair Walter's biodynamic estate in Bannockburn is consistently rated New Zealand's greatest winery, producing Pinot Noir of Burgundian complexity.",
wines:[
{name:"Block 5 Pinot Noir",type:"red",grape:"Pinot Noir",vintage:"2019",description:"Consistently New Zealand's greatest wine — extraordinary complexity, mineral precision and breathtaking length.",price:"€72–100",score:99},
{name:"Calvert Pinot Noir",type:"red",grape:"Pinot Noir",vintage:"2019",description:"From a different schist block — darker, richer and showing the diversity of Bannockburn terroir.",price:"€62–88",score:97},
{name:"Bannockburn Chardonnay",type:"white",grape:"Chardonnay",vintage:"2020",description:"One of New Zealand's greatest Chardonnays — mineral, precise and showing real Burgundian quality.",price:"€40–58",score:94}
]},
{id:"mt-difficulty",name:"Mt Difficulty",founded:1992,rating:4,
style:"Benchmark Central Otago Pinot Noir across an expressive range",
description:"One of Central Otago's most consistent producers, making wines from the accessible Roaring Meg to the serious Long Gully.",
wines:[
{name:"Long Gully Pinot Noir",type:"red",grape:"Pinot Noir",vintage:"2019",description:"From high-altitude Bannockburn vineyards — concentrated, complex and structured for aging.",price:"€52–75",score:94},
{name:"Roaring Meg Pinot Noir",type:"red",grape:"Pinot Noir",vintage:"2020",description:"The classic entry — vibrant, cherry-fruited and perfectly capturing Central Otago's character.",price:"€20–28",score:90},
{name:"Bannockburn Pinot Gris",type:"white",grape:"Pinot Gris",vintage:"2021",description:"Rich, spicy and aromatic — one of New Zealand's finest expressions of Pinot Gris.",price:"€20–28",score:90}
]},
{id:"rippon",name:"Rippon Vineyard",founded:1974,rating:5,
style:"Lake Wanaka's iconic biodynamic estate in one of the world's most beautiful settings",
description:"Nick Mills produces Pinot Noir of extraordinary character from one of the world's most scenic vineyard settings on the shores of Lake Wanaka.",
wines:[
{name:"Mature Vine Pinot Noir",type:"red",grape:"Pinot Noir",vintage:"2019",description:"From vines over 30 years old — complex, mineral and showing the hauntingly beautiful Rippon character.",price:"€72–100",score:96},
{name:"Emma's Block Pinot Noir",type:"red",grape:"Pinot Noir",vintage:"2018",description:"Named after Nick's mother — from the oldest vines on the estate, of extraordinary depth.",price:"€115–165",score:97},
{name:"Rippon Riesling",type:"white",grape:"Riesling",vintage:"2021",description:"Off-dry and mineral from the lakeside terroir — one of New Zealand's most distinctive Rieslings.",price:"€24–34",score:92}
]}
]},
{id:"hawkes-bay",name:"Hawke's Bay",icon:"☀️",climate:"Warm Maritime",
description:"New Zealand's second-largest wine region, producing the country's finest Syrah, Bordeaux blends and Chardonnay from the famous Gimblett Gravels.",
keyGrapes:["Syrah","Cabernet Sauvignon","Merlot","Chardonnay","Sauvignon Blanc"],
wineries:[
{id:"craggy-range",name:"Craggy Range",founded:1997,rating:5,
style:"New Zealand's most ambitious estate — benchmark Syrah and Merlot",
description:"Steve Smith MW and Terry Peabody have created one of New Zealand's greatest wineries, with benchmark wines from Hawke's Bay and Martinborough.",
wines:[
{name:"Le Sol Syrah",type:"red",grape:"Syrah",vintage:"2019",description:"New Zealand's greatest Syrah — Northern Rhône-like elegance from the Gimblett Gravels.",price:"€62–88",score:96},
{name:"Sophia",type:"red",grape:"Merlot, Cabernet Franc",vintage:"2018",description:"Their Pomerol-style blend — opulent, structured and showing the Gimblett's warmth perfectly.",price:"€72–100",score:95},
{name:"Kidnappers Chardonnay",type:"white",grape:"Chardonnay",vintage:"2020",description:"From the cooler Te Awanga coast — elegant, mineral and showing fine Chardonnay character.",price:"€24–34",score:92}
]},
{id:"te-mata",name:"Te Mata Estate",founded:1896,rating:5,
style:"New Zealand's oldest estate — Coleraine is a New Zealand wine legend",
description:"New Zealand's oldest continuously producing winery, famous for Coleraine — a Cabernet-Merlot blend that proved New Zealand could rival Bordeaux.",
wines:[
{name:"Coleraine",type:"red",grape:"Cabernet Sauvignon, Merlot, Cabernet Franc",vintage:"2019",description:"New Zealand's most celebrated red — elegant, complex and showing Hawke's Bay at its very finest.",price:"€52–75",score:96},
{name:"Awatea Cabernet Merlot",type:"red",grape:"Cabernet Sauvignon, Merlot",vintage:"2019",description:"The more accessible red blend — showing the Gimblett Gravels' characteristic cedar and cassis.",price:"€28–40",score:92},
{name:"Elspeth Chardonnay",type:"white",grape:"Chardonnay",vintage:"2020",description:"Complex, barrel-fermented Chardonnay showing genuine Hawke's Bay personality.",price:"€42–60",score:93}
]}
]}
]},

{id:"austria",name:"Austria",flag:"🇦🇹",code:"at",
description:"Austria's white wines — particularly Grüner Veltliner and Riesling from the Wachau — are among Europe's most compelling, while Burgenland produces world-class dessert wines.",
keyGrapes:["Grüner Veltliner","Riesling","Zweigelt","Blaufränkisch","Welschriesling","Pinot Blanc"],
regions:[
{id:"wachau",name:"Wachau",icon:"🏰",climate:"Continental (cool)",
description:"Austria's most prestigious wine region — a UNESCO World Heritage-listed Danube gorge producing Riesling and Grüner Veltliner of supreme elegance.",
keyGrapes:["Riesling","Grüner Veltliner"],
wineries:[
{id:"fx-pichler",name:"F.X. Pichler",founded:1970,rating:5,
style:"The Wachau's most celebrated producer — wines of legendary concentration",
description:"Franz Xaver Pichler produces dry Riesling and Grüner Veltliner of extraordinary richness and longevity — 'M' wines are the pinnacle of Austrian white wine.",
wines:[
{name:"Loibner Loibenberg Riesling Smaragd M",type:"white",grape:"Riesling",vintage:"2019",description:"One of Austria's greatest wines — dense, complex and showing Wachau Riesling at its absolute peak.",price:"€90–130",score:99},
{name:"Steinertal Grüner Veltliner Smaragd",type:"white",grape:"Grüner Veltliner",vintage:"2019",description:"Powerful and spicy — white pepper, grapefruit and minerals in a wine of immense structure.",price:"€72–100",score:96},
{name:"Kellerberg Riesling Smaragd",type:"white",grape:"Riesling",vintage:"2019",description:"From the most famous Wachau site — mineral, precise and built for decades of evolution.",price:"€90–130",score:97}
]},
{id:"domane-wachau",name:"Domäne Wachau",founded:1938,rating:4,
style:"The great cooperative estate producing reliable benchmark Wachau wines",
description:"The Wachau's famous cooperative estate controls prime vineyard sites across the valley, producing wines of consistent quality at fair prices.",
wines:[
{name:"Singerriedel Riesling Smaragd",type:"white",grape:"Riesling",vintage:"2019",description:"From the Wachau's steepest terrace — electric, mineral and showing extraordinary tension.",price:"€52–75",score:95},
{name:"Achleiten Grüner Veltliner Smaragd",type:"white",grape:"Grüner Veltliner",vintage:"2019",description:"From the famous Achleiten terraces — textured, complex and showing the Wachau's finest GV.",price:"€38–55",score:93},
{name:"Terrassen Grüner Veltliner Federspiel",type:"white",grape:"Grüner Veltliner",vintage:"2020",description:"The approachable entry — crisp, peppery and perfect with food.",price:"€13–20",score:89}
]},
{id:"emmerich-knoll",name:"Emmerich Knoll",founded:1775,rating:5,
style:"Traditional Wachau producer of immense depth and longevity",
description:"This historic family estate is one of the Wachau's most revered, producing Riesling and Grüner Veltliner of great power and age-worthiness.",
wines:[
{name:"Loibner Vinothekfüllung Riesling Smaragd",type:"white",grape:"Riesling",vintage:"2018",description:"The estate's prestige wine — harvested late, of extraordinary richness, mineral power and longevity.",price:"€105–150",score:98},
{name:"Grüner Veltliner Smaragd Loibenberg",type:"white",grape:"Grüner Veltliner",vintage:"2019",description:"Dense and complex with characteristic white pepper and citrus — a monument to GV.",price:"€52–75",score:94},
{name:"Riesling Federspiel",type:"white",grape:"Riesling",vintage:"2020",description:"The accessible entry-level Knoll Riesling — still showing fine mineral character.",price:"€20–28",score:90}
]}
]},
{id:"burgenland",name:"Burgenland",icon:"🌅",climate:"Pannonian (warm)",
description:"Austria's warmest wine region, bordering Hungary, producing opulent reds from Blaufränkisch and extraordinary botrytised dessert wines around Lake Neusiedl.",
keyGrapes:["Blaufränkisch","Zweigelt","Welschriesling","Chardonnay","Pinot Blanc"],
wineries:[
{id:"kracher",name:"Alois Kracher",founded:1971,rating:5,
style:"The world's greatest dessert wine producer — Burgenland TBA masterpieces",
description:"Gerhard Kracher continues his father Alois's legacy of producing the world's most celebrated botrytised dessert wines from the shores of Lake Neusiedl.",
wines:[
{name:"Welschriesling TBA No.7",type:"dessert",grape:"Welschriesling",vintage:"2019",description:"One of the world's great dessert wines — crystalline honey, apricot and spice of overwhelming concentration.",price:"€140–200",score:99},
{name:"Chardonnay Nouvelle Vague TBA",type:"dessert",grape:"Chardonnay, Welschriesling",vintage:"2018",description:"Oak-aged TBA of extraordinary richness — tropical fruit, vanilla and acacia honey.",price:"€175–250",score:99},
{name:"Rosenmuskateller Beerenauslese",type:"dessert",grape:"Muscat Rosé",vintage:"2019",description:"Rare and perfumed dessert wine — rose, lychee and honey of remarkable elegance.",price:"€52–75",score:95}
]},
{id:"gesellmann",name:"Weingut Gesellmann",founded:1970,rating:4,
style:"Benchmark Mittelburgenland red wine from Blaufränkisch",
description:"Albert Gesellmann produces benchmark Mittelburgenland Blaufränkisch — one of Austria's most versatile and age-worthy red grapes.",
wines:[
{name:"Opus Eximium",type:"red",grape:"Blaufränkisch, Cabernet Sauvignon, Merlot, Zweigelt",vintage:"2016",description:"A grand Burgenland red — structured, complex and showing the aging potential of Blaufränkisch.",price:"€32–48",score:93},
{name:"Bela Rex",type:"red",grape:"Blaufränkisch",vintage:"2018",description:"Single-variety Blaufränkisch at its finest — spicy, complex and built for cellaring.",price:"€28–40",score:92}
]}
]},
{id:"vienna",name:"Vienna (Wien)",icon:"🎶",climate:"Continental",
description:"The world's only capital city with a significant wine-producing appellation, where Riesling and Grüner Veltliner grow in vineyards overlooking the city skyline.",
keyGrapes:["Grüner Veltliner","Riesling","Pinot Noir","Weissburgunder"],
wineries:[
{id:"wieninger",name:"Wieninger",founded:1900,rating:4,
style:"Vienna's finest estate — urban terroir of real complexity",
description:"Fritz Wieninger has transformed his family estate into one of Austria's most acclaimed, proving that Vienna's urban vineyards can produce world-class wine.",
wines:[
{name:"Nussberg Alte Reben Grüner Veltliner",type:"white",grape:"Grüner Veltliner",vintage:"2019",description:"From ancient Vienna vines on the Nussberg hill — rich, peppery and of surprising complexity.",price:"€38–55",score:93},
{name:"Grand Select Grüner Veltliner",type:"white",grape:"Grüner Veltliner",vintage:"2020",description:"The premium Wien GV — textured, mineral and showing the character of the Nussberg terroir.",price:"€22–32",score:91},
{name:"Vienna Pinot Noir",type:"red",grape:"Pinot Noir",vintage:"2019",description:"Elegant urban Pinot Noir — cherry, spice and silky tannins with real character.",price:"€28–40",score:90}
]},
{id:"mayer-pfarrplatz",name:"Mayer am Pfarrplatz",founded:1683,rating:4,
style:"Beethoven's historic Vienna winery — classic Heuriger tradition",
description:"One of Vienna's most historic estates, where Beethoven once lived, producing wines for the traditional Heuriger tavern culture and beyond.",
wines:[
{name:"Nussberg Riesling Alte Reben",type:"white",grape:"Riesling",vintage:"2019",description:"Old-vine Vienna Riesling — mineral, floral and showing the unique terroir of the Nussberg.",price:"€26–36",score:91},
{name:"Wien Grüner Veltliner",type:"white",grape:"Grüner Veltliner",vintage:"2020",description:"Classic Vienna GV — crisp, peppery and perfect for Heuriger-style food pairing.",price:"€14–20",score:89}
]}
]}
]},

{id:"greece",name:"Greece",flag:"🇬🇷",code:"gr",
description:"Greece's ancient indigenous varieties — Assyrtiko from Santorini, Agiorgitiko from Nemea and Xinomavro from Macedonia — produce wines of unique character and growing international acclaim.",
keyGrapes:["Assyrtiko","Agiorgitiko","Xinomavro","Malagousia","Moschofilero","Mavrotragano"],
regions:[
{id:"santorini",name:"Santorini",icon:"🌋",climate:"Mediterranean (volcanic)",
description:"Greece's most dramatic wine island, producing electric mineral Assyrtiko whites from basket-trained vines on black volcanic soil battered by the meltemi wind.",
keyGrapes:["Assyrtiko","Aidani","Athiri"],
wineries:[
{id:"estate-argyros",name:"Estate Argyros",founded:1903,rating:5,
style:"Santorini's benchmark estate — mineral Assyrtiko and legendary Vinsanto",
description:"Yiannis Argyros runs the island's most highly regarded estate, producing Assyrtiko of electrifying mineral precision and aged Vinsanto of extraordinary complexity.",
wines:[
{name:"Cuvée Monsignori Assyrtiko",type:"white",grape:"Assyrtiko",vintage:"2020",description:"Santorini's greatest dry white — volcanic minerality, lemon and electric acidity of world-class standing.",price:"€42–60",score:97},
{name:"Estate Assyrtiko",type:"white",grape:"Assyrtiko",vintage:"2021",description:"Pure, mineral and vibrant — a benchmark dry Santorini Assyrtiko of excellent quality.",price:"€18–25",score:92},
{name:"Vinsanto 15 Years",type:"dessert",grape:"Assyrtiko, Aidani",vintage:"2006",description:"A profoundly complex aged dessert wine — dried apricot, fig, honey and volcanic minerals.",price:"€52–75",score:96}
]},
{id:"hatzidakis",name:"Hatzidakis Winery",founded:1996,rating:4,
style:"Artisan Santorini producer of organic Assyrtiko with volcanic precision",
description:"Haridimos Hatzidakis's organic estate produces wines of great mineral purity from low-yielding old-vine Assyrtiko on the volcanic caldera.",
wines:[
{name:"Nykteri",type:"white",grape:"Assyrtiko, Athiri, Aidani",vintage:"2019",description:"A traditional Santorini style — barrel-fermented and showing textural richness with volcanic mineral.",price:"€28–40",score:93},
{name:"Santorini Assyrtiko",type:"white",grape:"Assyrtiko",vintage:"2021",description:"Crisp, saline and unmistakably volcanic — a great everyday expression of Santorini terroir.",price:"€16–22",score:90}
]},
{id:"sigalas",name:"Domaine Sigalas",founded:1991,rating:5,
style:"Pioneering Santorini estate — Assyrtiko barrel aging mastery",
description:"Paris Sigalas is one of Santorini's most innovative producers, mastering both fresh stainless-steel Assyrtiko and complex barrel-aged expressions.",
wines:[
{name:"Barrel Assyrtiko",type:"white",grape:"Assyrtiko",vintage:"2019",description:"The world's finest barrel-aged Assyrtiko — mineral, complex and redefining what Santorini white can be.",price:"€32–48",score:95},
{name:"Santorini AA",type:"white",grape:"Assyrtiko, Aidani",vintage:"2021",description:"Vibrant, aromatic and mineral — showing both varieties' character beautifully.",price:"€16–22",score:91},
{name:"Vinsanto",type:"dessert",grape:"Assyrtiko, Aidani",vintage:"2009",description:"Complex sun-dried dessert wine — concentrated honey, dried fig and volcanic spice.",price:"€45–65",score:95}
]}
]},
{id:"nemea",name:"Nemea",icon:"🦁",climate:"Mediterranean (elevated)",
description:"The Peloponnese's most celebrated wine region, producing rich age-worthy reds from Agiorgitiko at altitude in the famous 'blood of Hercules' valley.",
keyGrapes:["Agiorgitiko","Moschofilero","Roditis"],
wineries:[
{id:"gaia-wines",name:"Gaia Wines",founded:1994,rating:5,
style:"Greece's most international estate — pioneering Nemea and Santorini",
description:"Yiannis Paraskevopoulos operates estates in both Nemea and Santorini, producing some of Greece's most internationally acclaimed wines.",
wines:[
{name:"Gaia Estate Nemea",type:"red",grape:"Agiorgitiko",vintage:"2018",description:"Their flagship Nemea red — structured, complex and showing Agiorgitiko's aristocratic potential.",price:"€38–55",score:94},
{name:"Agiorgitiko Estate 18",type:"red",grape:"Agiorgitiko",vintage:"2019",description:"18 months barrel-aged — rich, spicy and showing why Nemea rivals southern French reds.",price:"€20–28",score:91},
{name:"Notios White",type:"white",grape:"Moschofilero, Roditis",vintage:"2021",description:"Greece's most popular everyday white — aromatic, crisp and showing indigenous variety character.",price:"€9–14",score:88}
]},
{id:"skouras",name:"Skouras",founded:1986,rating:4,
style:"Modern Peloponnese producer bridging indigenous and international varieties",
description:"George Skouras produces some of Nemea's most food-friendly wines, blending international and indigenous varieties with great skill.",
wines:[
{name:"Megas Oenos",type:"red",grape:"Agiorgitiko, Cabernet Sauvignon",vintage:"2019",description:"A successful blend of indigenous and international — structured, complex and very food-friendly.",price:"€18–25",score:90},
{name:"Grande Cuvée Nemea",type:"red",grape:"Agiorgitiko",vintage:"2018",description:"Their premium single-variety Nemea — rich, velvety and showing Agiorgitiko's best character.",price:"€28–40",score:92}
]}
]},
{id:"macedonia",name:"Macedonia",icon:"🌄",climate:"Continental",
description:"Northern Greece's rugged wine region, home to Xinomavro — the 'acid-black' grape — producing reds with Nebbiolo-like structure and extraordinary aging potential.",
keyGrapes:["Xinomavro","Limnio","Mavrotragano","Malagousia"],
wineries:[
{id:"kir-yianni",name:"Kir-Yianni",founded:1997,rating:5,
style:"Naoussa and Amyndeon specialist — benchmark Greek Xinomavro",
description:"Yiannis Boutaris's estate in both Naoussa and Amyndeon produces some of Greece's finest reds and the celebrated Akakies Rosé.",
wines:[
{name:"Ramnista Xinomavro",type:"red",grape:"Xinomavro",vintage:"2018",description:"The benchmark Naoussa Xinomavro — complex, structured and showing the variety's Nebbiolo-like character.",price:"€24–34",score:93},
{name:"Diaporos Xinomavro",type:"red",grape:"Xinomavro",vintage:"2018",description:"Their prestige single-vineyard wine — profound, age-worthy and among Greece's greatest reds.",price:"€38–55",score:95},
{name:"Akakies Amyndeon Sparkling Rosé",type:"sparkling",grape:"Xinomavro",vintage:"NV",description:"Greece's most celebrated sparkling rosé — delicate, fragrant and uniquely made from Xinomavro.",price:"€14–20",score:91}
]},
{id:"gerovassiliou",name:"Domaine Gerovassiliou",founded:1981,rating:5,
style:"Pioneer of modern Greek wine — Malagousia rediscoverer",
description:"Evangelos Gerovassiliou rescued the near-extinct Malagousia variety and produced wines that transformed perceptions of Greek white wine internationally.",
wines:[
{name:"Malagousia",type:"white",grape:"Malagousia",vintage:"2021",description:"The wine that rescued a variety from extinction — exotic, aromatic and uniquely Greek.",price:"€16–22",score:91},
{name:"Avaton",type:"red",grape:"Limnio, Mavroudi, Mavrotragano",vintage:"2018",description:"From three rare indigenous varieties — complex, spicy and showing the richness of northern Greece's terroir.",price:"€38–55",score:94},
{name:"Estate Red",type:"red",grape:"Syrah, Merlot, Limnio",vintage:"2019",description:"An international-meets-indigenous blend — polished, expressive and very food-friendly.",price:"€20–28",score:90}
]},
{id:"alpha-estate",name:"Alpha Estate",founded:1997,rating:5,
style:"Technical mastery of Xinomavro in Amyndeon's cool climate",
description:"Angelos Iatridis produces Xinomavro of remarkable precision and elegance from the high-altitude Amyndeon appellation.",
wines:[
{name:"Xinomavro Reserve Hedgehog",type:"red",grape:"Xinomavro",vintage:"2016",description:"From a single vineyard — profound, complex and showing Xinomavro's extraordinary aging potential.",price:"€42–60",score:96},
{name:"Ecosystem Xinomavro",type:"red",grape:"Xinomavro",vintage:"2018",description:"From old-vine Xinomavro — structured, mineral and redefining what Greek red can be.",price:"€26–36",score:93},
{name:"Alpha Estate Sauvignon Blanc",type:"white",grape:"Sauvignon Blanc",vintage:"2021",description:"Crisp, vibrant and showing how well Sauvignon Blanc adapts to northern Greece's cool climate.",price:"€16–22",score:90}
]}
]}
]}
];
