// Run this script ONCE from Node.js environment (not the browser).
// Requires Node.js and 'npm install firebase-admin'
const admin = require('firebase-admin');
const serviceAccount = require('./cella-test-bachelor-webshop-541266371c3d.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: "cella-test-bachelor-webshop"
});

const db = admin.firestore();

// Copy the product data from productStore.js directly here or import it from a separate file.
const products = [
    // Overlapping Products (Available for all categories)
    {
      id: 1,
      name: 'Epinutrics EPI-C',
      description: 'Epinutrics kosttilskudsserie er en række naturlige og økologiske produkter, der optimerer cellernes genkendelse af næringsstofferne, og bidrager dermed til en optimal optagelse af næringsstoffer i kroppen.',
      fullDescription: `Epinutrics EPI-C (60 kps.)
      
  Ingrediensliste: Acerola (Malpighia glabra L.), multebærekstrakt (Rubus chamaemorus L.), tyttebærekstrakt (Vaccinium vitis idaea L.), tørret ekstrakt af fermenteret byggræs (Hordeum vulgare L.), fermenteret brændenælde (Urtica dioica L.), Zygosaccharomyses rouxii, Lactobacillus delbrueckii, hydroxypropylmethylcellulose (vegetabilsk kapsel).`,
      price: 'DKK 250.00',
      image: '/img/produkter/epinutrics_epic.jpg',
      categories: ['mennesker', 'heste', 'hunde', 'katte'],
      subcategories: ['Vitaminer & Mineraler'],
    },
    {
      id: 2,
      name: 'Epinutrics EPI-D',
      description: 'Epinutrics kosttilskudsserie er en række naturlige og økologiske produkter, der optimerer cellernes genkendelse af næringsstofferne, og bidrager dermed til en optimal optagelse af næringsstoffer i kroppen.',
      fullDescription: `Epinutrics EPI-D (60 kps.)
      
  Ingrediensliste: Lucerne / Alfalfa (Medicago sativa L.), Kalciferol fra fisk (Sprattus sprattus), tørret ekstrakt af fermenteret byggræs (Hordeum vulgare L.), fermenteret brændenælde (Urtica dioica L.), Zygosaccharomyses rouxii, Lactobacillus delbrueckii, hydroxypropylmethylcellulose (vegetabilsk kapsel).`,
      price: 'DKK 250.00',
      image: '/img/produkter/epinutrics_epid.jpg',
      categories: ['mennesker', 'heste', 'hunde', 'katte'],
      subcategories: ['Vitaminer & Mineraler'],
    },
    {
      id: 3,
      name: 'Epinutrics EPI-K2',
      description: 'Epinutrics kosttilskudsserie er en række naturlige og økologiske produkter, der optimerer cellernes genkendelse af næringsstofferne, og bidrager dermed til en optimal optagelse af næringsstoffer i kroppen.',
      fullDescription: `Epinutrics EPI-K2 (60 kps.)
      
  Ingrediensliste: Gurkemeje (Curcuma longa L.), artiskok (Cynara scolymus), sort peber (Piper nigrum L.), tørret ekstrakt af fermenteret byggræs (Hordeum vulgare L.), fermenteret brændenælde (Urtica dioica L.), Zygosaccharomyses rouxii, Lactobacillus delbrueckii, hydroxypropylmethylcellulose (vegetabilske kapsler).`,
      price: 'DKK 250.00',
      image: '/img/produkter/epinutrics_epik2.jpg',
      categories: ['mennesker', 'heste', 'hunde', 'katte'],
      subcategories: ['Vitaminer & Mineraler'],
    },
    {
      id: 4,
      name: 'Epinutrics EPI-Q10',
      description: 'Epinutrics kosttilskudsserie er en række naturlige og økologiske produkter, der optimerer cellernes genkendelse af næringsstofferne, og bidrager dermed til en optimal optagelse af næringsstoffer i kroppen.',
      fullDescription: `Epinutrics EPI-Q10 (60 kps.)
      
  Ingrediensliste: Coenzym Q10 (Ubiquinolog Ubiquinon - indeholder soja), tørret ekstrakt af fermenteret byggræs (Hordeum vulgare L.), fermenteret brændenælde (Urtica dioica L.), Zygosaccharomyses rouxii, Lactobacillus delbrueckii, hydroxypropylmethylcellulose (vegetabilsk kapsel).`,
      price: 'DKK 250.00',
      image: '/img/produkter/epinutrics_epi_q10.jpg',
      categories: ['mennesker', 'heste', 'hunde', 'katte'],
      subcategories: ['Vitaminer & Mineraler'],
    },
    {
      id: 5,
      name: 'Epinutrics Barley',
      description: 'Epinutrics kosttilskudsserie er en række naturlige og økologiske produkter, der optimerer cellernes genkendelse af næringsstofferne, og bidrager dermed til en optimal optagelse af næringsstoffer i kroppen.',
      fullDescription: `Epinutrics Barley (60 kps.)
      
  Ingrediensliste: Byggræs (Hordeum vulgare L.), tørret ekstrakt af fermenteret byggræs (Hordeum vulgare L.), fermenteret brændenælde (Urtica dioica L.), Zygosaccharomyses rouxii, Lactobacillus delbrueckii, hydroxypropylmethylcellulose (vegetabilsk kapsel).`,
      price: 'DKK 250.00',
      image: '/img/produkter/epinutrics_barley.jpg',
      categories: ['mennesker', 'heste', 'hunde', 'katte'],
      subcategories: ['Vitaminer & Mineraler'],
    },
    {
      id: 6,
      name: 'Epinutrics Chaga',
      description: 'Epinutrics kosttilskudsserie er en række naturlige og økologiske produkter, der optimerer cellernes genkendelse af næringsstofferne, og bidrager dermed til en optimal optagelse af næringsstoffer i kroppen.',
      fullDescription: `Epinutrics Chaga (60 kps.)
      
  Ingrediensliste: Chaga ekstrakt (Inonotus obliquus (Ach. ex Pers.) Pilát), inulin fra cikorierod, tørret ekstrakt af fermenteret byggræs (Hordeum vulgare L.), fermenteret brændenælde (Urtica dioica L.), Zygosaccharomyses rouxii, Lactobacillus delbrueckii, hydroxypropylmethylcellulose (vegetabilsk kapsel). Blæretang har et naturligt højt indhold af jod og bør derfor ikke indtages af gravide og ammende.`,
      price: 'DKK 250.00',
      image: '/img/produkter/epinutrics_chaga.jpg',
      categories: ['mennesker', 'heste', 'hunde', 'katte'],
      subcategories: ['Fordøjelse'],
    },
    {
      id: 7,
      name: 'Epinutrics EPI-A',
      description: 'Epinutrics kosttilskudsserie er en række naturlige og økologiske produkter, der optimerer cellernes genkendelse af næringsstofferne.',
      fullDescription: `Epinutrics EPI-A (60 kps.)
      
  Ingrediensliste: Broccoli (Brassica oleracea L.), Rødkløver (Trifolium pratense L.), Gulerodsekstrakt (Daucus carota L.), Spirulina (Arthrospira platensis), Chlorella (Chlorella pyrenoidosa), tørret ekstrakt af fermenteret byggræs (Hordeum vulgare L.), fermenteret brændenælde (Urtica dioica L.), Zygosaccharomyses rouxii, Lactobacillus Delbrueckii, hydroxypropylmethylcellulose (vegetabilsk kapsel).`,
      price: 'DKK 250.00',
      image: '/img/produkter/epinutrics_epi_a.jpg',
      categories: ['mennesker', 'heste', 'hunde', 'katte'],
      subcategories: ['Vitaminer & Mineraler'],
    },
    {
      id: 8,
      name: 'Epinutrics EPI-B',
      description: 'Epinutrics kosttilskudsserie optimerer cellernes genkendelse af næringsstoffer, hvilket bidrager til optimal optagelse i kroppen.',
      fullDescription: `Epinutrics EPI-B (60 kps.)
      
  Ingrediensliste: Brændenælde (Urtica dioica L.), magnesiumhydroxid, C-vitamin fra kirsebær (Malpighia emarginata DC.), pantothensyre af calcium-D-pantothenat, niacin af alfalfa (Medicago sativa), vitamin B6, tørret ekstrakt af fermenteret byggræs (Hordeum vulgare L.), fermenteret brændenælde (Urtica dioica L.), Zygosaccharomyses rouxii, Lactobacillus delbrueckii, riboflavin (Vit.B2), thiamin (Vit. B1), biotin, folinsyre, vitamin B12, hydroxypropylmethylcellulose (vegetabilske kapsler).`,
      price: 'DKK 250.00',
      image: '/img/produkter/epinutrics_epi_b.jpg',
      categories: ['mennesker', 'heste', 'hunde', 'katte'],
      subcategories: ['Vitaminer & Mineraler'],
    },
    {
      id: 9,
      name: 'Epinutrics Fucoid',
      description: 'En naturlig kilde til jod, Fucoid fra Epinutrics er et økologisk kosttilskud til sundhed og velvære.',
      fullDescription: `Epinutrics Fucoid (60 kps.)
      
  Ingrediensliste: Blæretang (Fucus vesiculosus), tørret ekstrakt af fermenteret byggræs (Hordeum vulgare L.), fermenteret brændenælde (Urtica dioica L.), Zygosaccharomyses rouxii, Lactobacillus delbrueckii, hydroxypropylmethylcellulose (vegetabilsk kapsel). Blæretang har et naturligt højt indhold af jod og bør derfor ikke indtages af gravide og ammende.`,
      price: 'DKK 250.00',
      image: '/img/produkter/epinutrics_fucoid.jpg',
      categories: ['mennesker', 'heste', 'hunde', 'katte'],
      subcategories: ['Andre produkter'],
    },
    {
      id: 10,
      name: 'Epinutrics Kale',
      description: 'Denne kosttilskudsserie indeholder grønkålsekstrakt for optimal sundhed og balance.',
      fullDescription: `Epinutrics Kale (60 kps.)
      
  Ingrediensliste: Grønkålsekstrakt (Brassica oleracea var. Sabellica), tørret ekstrakt af fermenteret byggræs (Hordeum vulgare L.), fermenteret brændenælde (Urtica dioica L.), Zygosaccharomyses rouxii, Lactobacillus delbrueckii, hydroxypropylmethylcellulose (vegetabilsk kapsel).`,
      price: 'DKK 250.00',
      image: '/img/produkter/epinutrics_kale.jpg',
      categories: ['mennesker', 'heste', 'hunde', 'katte'],
      subcategories: ['Andre produkter'],
    },
    {
      id: 11,
      name: 'Epinutrics LiverClean',
      description: 'Naturlige kosttilskud, designet til at understøtte leverfunktionen og det generelle velvære.',
      fullDescription: `Epinutrics LiverClean (60 kps.)
      
  Ingrediensliste: Artiskokekstrakt (Cynara scolymus), tørret ekstrakt af Mælkebøtte/Løvetand (Taraxacum officinale Weber), Marietidsel frø (Silybum marianum), tørret ekstrakt af fermenteret byggræs (Hordeum vulgare L.), fermenteret brændenælde (Urtica dioica L.), Zygosaccharomyses rouxii, Lactobacillus delbrueckii, hydroxypropylmethylcellulose (vegetabilsk kapsel).`,
      price: 'DKK 250.00',
      image: '/img/produkter/epinutrics_liverclean.jpg',
      categories: ['mennesker', 'heste', 'hunde', 'katte'],
      subcategories: ['Fordøjelse'],
    },
    {
      id: 12,
      name: 'Epinutrics Lycopene',
      description: 'Epinutrics lycopen-ekstrakt er et naturligt kosttilskud med antioxidante egenskaber.',
      fullDescription: `Epinutrics Lycopene (60 kps.)
      
  Ingrediensliste: Tørret ekstrakt af broccoli (Brassica oleracea), tørret ekstrakt fra tomat (Lycopersicon esculentum), tørret ekstrakt af fermenteret byggræs (Hordeum vulgare L.), fermenteret brændenælde (Urtica dioica L.), Zygosaccharomyses rouxii, lactobacillus delbrueckii, hydroxypropylmethylcellulose (vegetabilsk kapsel).`,
      price: 'DKK 250.00',
      image: '/img/produkter/epinutrics_lycopene.jpg',
      categories: ['mennesker', 'heste', 'hunde', 'katte'],
      subcategories: ['Andre produkter'],
    },
    {
      id: 13,
      name: 'Epinutrics Magnesium',
      description: 'Et magnesium-beriget supplement til dagligt behov.',
      fullDescription: `Epinutrics Magnesium (60 kps.)
      
  Ingrediensliste: Magnesiumcitrat, magnesiummalat, lucerne/alfalfa-ekstrakt (Medicago sativa L.), brændenælde (Urtica dioica L.), rødkløverekstrakt (Trifolium pratense L.), tørret ekstrakt af fermenteret byggræs (Hordeum vulgare L.), fermenteret brændenælde (Urtica dioica L.), Zygosaccharomyses rouxii, Lactobacillus delbrueckii, hydroxypropylmethylcellulose (vegetabilsk kapsel).`,
      price: 'DKK 250.00',
      image: '/img/produkter/epinutrics_magnesium.jpg',
      categories: ['mennesker', 'heste', 'hunde', 'katte'],
      subcategories: ['Vitaminer & Mineraler'],
    },
    {
      id: 14,
      name: 'Epinutrics Mineral Comp',
      description: 'Mineral Comp supplement for at fremme den generelle sundhed og støtte energiniveauer.',
      fullDescription: `Epinutrics Mineral Comp (60 kps.)
      
  Ingrediensliste: Brændenældeekstrakt (Urtica dioica L.), lucerne/alfalfa-ekstrakt (Medicago sativa L.), rødkløverekstrakt (Trifolium pratense L.), buletang (Ascophyllum nodosum), papayaekstrakt (Carica papaya L.), damianaekstrakt (Turnera diffusa Willd.), tørret ekstrakt af fermenteret byggræs (Hordeum vulgare L.), fermenteret brændenælde (Urtica dioica L.), Zygosaccharomyses rouxii, Lactobacillus delbrueckii, hydroxypropylmethylcellulose (vegetabilsk kapsel).`,
      price: 'DKK 250.00',
      image: '/img/produkter/epinutrics_mineral_comp.jpg',
      categories: ['mennesker', 'heste', 'hunde', 'katte'],
      subcategories: ['Vitaminer & Mineraler'],
    },
    {
      id: 15,
      name: 'Epinutrics Omega 3',
      description: 'Omega 3 kosttilskud for at støtte hjerte- og hjernesundhed.',
      fullDescription: `Epinutrics Omega 3 (60 kps.)
      
  Ingrediensliste: Fiskeolie (vildlaks), konserveringsmiddel: rosmarinekstrakt, tørret ekstrakt af fermenteret byggræs (Hordeum vulgare L.), fermenteret brændenælde (Urtica dioica L.), Zygosaccharomyses rouxii, Lactobacillus delbrueckii, E-vitamin, D-vitamin, hydroxypropylmethylcellulose (vegetabilsk kapsel).`,
      price: 'DKK 250.00',
      image: '/img/produkter/epinutrics_omega3.jpg',
      categories: ['mennesker', 'heste', 'hunde', 'katte'],
      subcategories: ['Vitaminer & Mineraler'],
    },
    {
      id: 16,
      name: 'Epinutrics ProstaLean',
      description: 'Et supplement designet til støtte af mandlig sundhed og prostata.',
      fullDescription: `Epinutrics ProstaLean (60 kps.)
      
  Ingrediensliste: Græskarkerneekstrakt (Cucurbita maxima Duchesne), pygeumekstrakt (Pygeum africanum), tørret ekstrakt af fermenteret byggræs (Hordeum vulgare L.), fermenteret brændenælde (Urtica dioica L.), Zygosaccharomyses rouxii, Lactobacillus delbrueckii, hydroxypropylmethylcellulose (vegetabilsk kapsel).`,
      price: 'DKK 250.00',
      image: '/img/produkter/epinutrics_prostalean.jpg',
      categories: ['mennesker', 'heste', 'hunde', 'katte'],
      subcategories: ['Andre produkter'],
    },
    {
      id: 17,
      name: 'Epinutrics Selenium',
      description: 'Et selen-rigt supplement for at støtte immun- og cellestyrke.',
      fullDescription: `Epinutrics Selenium (60 kps.)
      
  Ingrediensliste: Buletang (Ascophyllum nodosum (L.) Le Jolis), betaglucan, tørret ekstrakt af fermenteret byggræs (Hordeum vulgare L.), fermenteret brændenælde (Urtica dioica L.), Zygosaccharomyses rouxii, Lactobacillus delbrueckii, hydroxypropylmethylcellulose (vegetabilsk kapsel).`,
      price: 'DKK 250.00',
      image: '/img/produkter/epinutrics_selenium.jpg',
      categories: ['mennesker', 'heste', 'hunde', 'katte'],
      subcategories: ['Vitaminer & Mineraler'],
    },
    {
      id: 18,
      name: 'Epinutrics Sulforaphane',
      description: 'Sulforaphane supplement for antioxidant support and cellular health.',
      fullDescription: `Epinutrics Sulforaphane (60 kps.)
      
  Ingrediensliste: Broccoli (Brassica oleracea L.), lycopen fra tomatekstrakt (Lycopersicon esculentum), tørret ekstrakt af fermenteret byggræs (Hordeum vulgare L.), fermenteret brændenælde (Urtica dioica L.), Zygosaccharomyses rouxii, Lactobacillus delbrueckii, hydroxypropylmethylcellulose (vegetabilsk kapsel).`,
      price: 'DKK 250.00',
      image: '/img/produkter/epinutrics_sulforaphane.jpg',
      categories: ['mennesker', 'heste', 'hunde', 'katte'],
      subcategories: ['Andre produkter'],
    },
    {
      id: 19,
      name: 'Epinutrics Turmeric',
      description: 'Et kosttilskud med gurkemejeekstrakt for led og antiinflammatoriske fordele.',
      fullDescription: `Epinutrics Turmeric (60 kps.)
      
  Ingrediensliste: Gurkemejeekstrakt (Curcuma longa L.), artiskok (Cynara scolymus), sort peberekstrakt (Piper nigrum L.), tørret ekstrakt af fermenteret byggræs (Hordeum vulgare L.), brændenælde (Urtica dioica L.), Zygosaccharomyses rouxii, Lactobacillus delbrueckii, hydroxypropylmethylcellulose (vegetabilsk kapsel).`,
      price: 'DKK 250.00',
      image: '/img/produkter/epinutrics_turmeric.jpg',
      categories: ['mennesker', 'heste', 'hunde', 'katte'],
      subcategories: ['Fordøjelse'],
    },
    {
      id: 20,
      name: 'Epinutrics Vitamin Complex',
      description: 'Vitamin- og mineral-kompleks til støtte for den daglige sundhed.',
      fullDescription: `Epinutrics Vitamin Complex (60 kps.)
      
  Ingrediensliste: Rosmarin (Rosmarinus officinalis), Silderogn (Clupea harengus), Grønn te (Camellia sinensis), Oliven (Olea europea), Alfalfa (Medicago sativa), Brendenælde (Urtica dioica), Buletang (Ascophyllum nodosum), tørret ekstrakt af fermenteret byggræs (Hordeum vulgare L.), fermenteret brændenælde (Urtica dioica L.), Zygosaccharomyses rouxii, Lactobacillus delbrueckii, hydroxypropylmethylcellulose (vegetabilsk kapsel).`,
      price: 'DKK 250.00',
      image: '/img/produkter/epinutrics_vitamin_complex.jpg',
      categories: ['mennesker', 'heste', 'hunde', 'katte'],
      subcategories: ['Vitaminer & Mineraler'],
    },
  
    // Unique Products for Humans
    {
      id: 21,
      name: 'NDS Probiolax',
      description: 'Tilførsel af mavetarmbakterier i pulverform - produceret med en unik BioAktiv teknologi.',
      fullDescription: `NDS Probiolax (100 gr.)
      
  Tilførsel af mavetarmbakterier i pulverform - produceret med en unik BioAktiv teknologi.
      
  Ingredienser: Majsstivelse (ikke gensplejset majs), Maltodextrin (ikke gensplejset majs), Mineralblanding (mangan, kalium, magnesium), FOS, Inulin, Enzymer (Amylase), 6 bakteriestammer: B.bifidum, B.lactis, B.longum, L.acidophilus, L.paracasei, L.salivarius. 15 milliarder cfu pr. dosis.
      
  Anbefalet daglig tilførsel: 1 tsk. i vand, vent 15 min. Bedst på tom mave.`,
      price: 'DKK 309.00',
      image: '/img/produkter/nds_probiolax.jpg',
      categories: ['mennesker'],
      subcategories: ['Fordøjelse'],
    },
    {
      id: 22,
      name: 'NDS Probiotic I.L.D',
      description: 'Tilførsel af mavetarmbakterier i pulverform - produceret med en unik BioAktiv teknologi.',
      fullDescription: `NDS Probiotic I.L.D (100 gr.)
      
  Ingredienser: Majsstivelse (ikke gensplejset majs), Maltodextrin (ikke gensplejset majs), Mineralblanding (mangan, kalium, magnesium), FOS, Inulin, Enzymer (Amylase), 10 bakteriestammer: B.bifidum, B.infantis, B.lactis, B.longum, L.acidophilus, L.casei, L.paracasei, L.salivarius, L.plantarum, L.lactis. 15 milliarder cfu pr. dosis.
      
  Anbefalet daglig tilførsel: 1 tsk. i vand, vent 15 min. Bedst på tom mave.`,
      price: 'DKK 309.00',
      image: '/img/produkter/nds_probiotic_ild.jpg',
      categories: ['mennesker'],
      subcategories: ['Fordøjelse'],
    },
    {
      id: 23,
      name: 'NDS Probiotic PANDA-1',
      description: 'Tilførsel af mavetarmbakterier i pulverform - produceret med en unik BioAktiv teknologi.',
      fullDescription: `NDS Probiotic PANDA-1 (100 gr.)
      
  Ingredienser: Risstivelse, Maltodextrin (ikke gensplejset majs), Mineralblanding (mangan, kalium, magnesium), Enzymer (Amylase), 5 bakteriestammer: B.lactis/B.bifidum, B.lactis, Lc.lactis, B.infantis, B.breve. 15 milliarder cfu pr. dosis.
      
  Anbefalet daglig tilførsel: 1 tsk. i vand, vent 15 min. Bedst på tom mave.`,
      price: 'DKK 309.00',
      image: '/img/produkter/nds_probiotic_panda_1.jpg',
      categories: ['mennesker'],
      subcategories: ['Fordøjelse'],
    },
    {
      id: 24,
      name: 'NDS Probiotic PANDA-2',
      description: 'Tilførsel af mavetarmbakterier i pulverform - produceret med en unik BioAktiv teknologi.',
      fullDescription: `NDS Probiotic PANDA-2 (100 gr.)
      
  Ingredienser: Risstivelse, Maltodextrin (ikke gensplejset majs), Mineralblanding (mangan, kalium, magnesium), Enzymer (Amylase), 7 bakteriestammer: B.lactic, B.longum, B.infantis, L.acidophilus, L.casei, L.salivarius, L.lactis. 15 milliarder cfu pr. dosis.
      
  Anbefalet daglig tilførsel: 1 tsk. i vand, vent 15 min. Bedst på tom mave.`,
      price: 'DKK 309.00',
      image: '/img/produkter/nds_probiotic_panda_2.jpg',
      categories: ['mennesker'],
      subcategories: ['Fordøjelse'],
    },
    {
      id: 25,
      name: 'NDS Probiotic Performance',
      description: 'Tilførsel af mavetarmbakterier i pulverform - produceret med en unik BioAktiv teknologi.',
      fullDescription: `NDS Probiotic Performance (100 gr.)
      
  Ingredienser: Majsstivelse (ikke gensplejset majs), Maltodextrin (ikke gensplejset majs), Mineralblanding (mangan, kalium, magnesium), Enzymer (Amylase), 6 bakteriestammer: B.lactis, B.bifidum, E.faecium, L.acidophilus, L.brevis, Lactococcus lactis. 15 milliarder cfu pr. dosis.
      
  Anbefalet daglig tilførsel: 1 tsk. i vand, vent 15 min. Bedst på tom mave.`,
      price: 'DKK 309.00',
      image: '/img/produkter/nds_probiotic_performance.jpg',
      categories: ['mennesker'],
      subcategories: ['Fordøjelse'],
    },
    {
      id: 26,
      name: 'NDS Probiotic S-60-NRG',
      description: 'Tilførsel af mavetarmbakterier i pulverform - produceret med en unik BioAktiv teknologi.',
      fullDescription: `NDS Probiotic S-60-NRG (100 gr.)
      
  Ingrediensliste: Risstivelse, Maltodextrin (ikke gensplejset majs), Mineralblanding (mangan, kalium, magnesium), Enzymer (Amylase), 8 bakteriestammer: B.bifidum, B.breve, B.infantis, B.lactis, L.brevis, L.casei, L.paracasei, L.lactis. 15 milliarder cfu pr. dosis.
      
  Anbefalet daglig tilførsel: 1 tsk. i vand, vent 15 min. Bedst på tom mave.`,
      price: 'DKK 309.00',
      image: '/img/produkter/nds_probiotic_s_60_nrg.jpg',
      categories: ['mennesker'],
      subcategories: ['Fordøjelse'],
    },
    {
      id: 27,
      name: 'Bemer-Terapi',
      description: 'Avanceret terapiudstyr til forbedring af blodcirkulation og cellestimulering.',
      fullDescription: `Bemer-Terapi
      
  Bemer International AG er førende indenfor mikrocirkulation. Bemer-terapi forbedrer blodcirkulationen i kroppen, øger tilførsel af ilt og næringsstoffer, og fremskynder helingsprocessen.
      
  EU-certificeret og videnskabeligt dokumenteret, anvendes Bemer-terapi til smertelindring og muskel/skadebehandling.`,
      price: 'Kontakt for pris',
      image: '/img/produkter/bemer_terapi.jpg',
      categories: ['mennesker'],
      subcategories: ['Andre produkter'],
    },
    {
      id: 28,
      name: 'Hårcelletest Til Dig',
      description: 'En analyse af dine hårceller for at give indsigt i din sundhedsstatus.',
      fullDescription: `Hårcelletest Til Dig
      
  En hårcelletest til sundhedsstatus-analyse. Anvendelig til at forstå sundhedstilstand, næringsstofbehov og genopbygning.
      
  Få værdifulde indsigter gennem præcise, biokemiske målinger.`,
      price: 'Kontakt for pris',
      image: '/img/produkter/haarcelletest_dig.jpg',
      categories: ['mennesker'],
      subcategories: ['Andre produkter'],
    },
    {
      id: 29,
      name: 'Balanceolie+',
      description: 'Balanceolie+ understøtter en sund omega-6/omega-3 balance, baseret på naturlige ingredienser.',
      fullDescription: `Balanceolie+ (fås i flere varianter)
      
  Balanceolie+ støtter en sund omega-6/omega-3 balance med kombination af fiskeolie og olivenolie. Indeholder omega-3, omega-9, og polyfenoler, samt vitamin D3.
      
  Anbefalet brug: 0,15 ml pr. kilo kropsvægt. Konsulter læge ved blodfortyndende medicin.`,
      price: 'DKK 399.00',
      image: '/img/produkter/balanceolie_plus.jpg',
      categories: ['mennesker'],
      subcategories: ['Olie'],
    },
    {
      id: 30,
      name: 'NDS Probiotic W-8 Control',
      description: 'Tilførsel af mavetarmbakterier i pulverform til vægtkontrol - produceret med en unik BioAktiv teknologi.',
      fullDescription: `NDS Probiotic W-8 Control (100 gr.)
      
  Ingrediensliste: Majsstivelse (ikke gensplejset majs), Maltodextrin (ikke gensplejset majs), Mineralblanding (mangan, kalium, magnesium), FOS, Inulin, Enzymer (Amylase), 4 bakteriestammer: B.breve M/13, B.bifidum, B.infantis, B.lactis. 20 milliarder cfu pr. dosis.
      
  Anbefalet daglig tilførsel: 1 tsk. i vand, vent 15 min. Bedst på tom mave.`,
      price: 'DKK 309.00',
      image: '/img/produkter/nds_probiotic_w8_control.jpg',
      categories: ['mennesker'],
      subcategories: ['Fordøjelse'],
    },
  
    // Unique Products for Horses
    {
      id: 31,
      name: 'Bemer Udstyr',
      description: 'High-tech udstyr til optimering af blodgennemstrømning i din hests muskulatur.',
      fullDescription: `Bemer Udstyr
      
  Bemer Horse-sættet er et hestedækken med justerbare stropper og gamacher, der fremmer blodcirkulation og lindrer muskel- og ledskader.
      
  Fordele:
  - Reducerer stress og fremmer hurtigere restitution.
  - Understøtter hestens egne helingsprocesser.
  - Anvendes til forebyggelse af skader og øget performance.
      
  Priser:
  - Leje pr. uge: DKK 1,500 (inkl. moms)
  - Køb af sæt: DKK 32,550 (inkl. moms)
  - Køb af dækken: DKK 18,585 (inkl. moms)
  - Køb af gamacher: DKK 20,265 (inkl. moms)`,
      price: 'fra DKK 1.500.00',
      image: '/img/produkter/bemer_udstyr.jpg',
      categories: ['heste'],
      subcategories: ['Andre produkter'],
    },
    {
      id: 32,
      name: 'Hårcelletest Til Din Hest',
      description: 'En hårcelletest specielt til heste, der giver indsigt i din hests sundhedsstatus.',
      fullDescription: `Hårcelletest Til Din Hest
      
  En præcis analyse, der giver indsigt i din hests sundhed og næringsbehov.
      
  Bestil og modtag en detaljeret rapport for optimal hestepleje.`,
      price: 'Kontakt for pris',
      image: '/img/produkter/haarcelletest_hest.jpg',
      categories: ['heste'],
      subcategories: ['Andre produkter'],
    },
    {
      id: 33,
      name: 'Hørfrø Snacks',
      description: 'Naturlige og økologiske hørfrø snacks til heste, der støtter fordøjelsen og bidrager til en blank pels.',
      fullDescription: `Hørfrø Snacks
      
  Koldpressede hørfrø snacks, højt fiberindhold og omega-3. Ideel til sund hud og fordøjelse.
      
  Anbefalet dosering:
  - Stor hest: 50-100g
  - Pony: 30-60g
      
  Opbevaring: Køligt og mørkt.
  Pris: 10 kg - DKK 299, 20 kg - DKK 499`,
      price: 'Kontakt for pris',
      image: '/img/produkter/hoerfroe_snacks.jpg',
      categories: ['heste'],
      subcategories: ['Andre produkter'],
    },
    {
      id: 34,
      name: 'NDS Equine Multi Collagen',
      description: 'Multi-kollagen supplement til heste, der understøtter led, hud og muskelopbygning.',
      fullDescription: `NDS Equine Multi Collagen
      
  Indeholder 3 forskellige collagenpeptider for optimal hestesundhed. 100% naturligt uden fyldstoffer.
      
  Daglig dosering: 75g
  Pris: DKK 1,899.00`,
      price: 'DKK 1,899.00',
      image: '/img/produkter/nds_equine_multi_collagen.jpg',
      categories: ['heste'],
      subcategories: ['Collagen'],
    },
    {
      id: 35,
      name: 'Only Good Horse',
      description: 'Et kosttilskud til heste, der indeholder essentielle næringsstoffer til optimal sundhed og præstation.',
      fullDescription: `Only Good Horse
      
  Fremmer en sund tarmflora og immunforsvar. Ideel under stævner, foderskifte og transport.
      
  Dosering:
  - Store heste: 2-3 poser dagligt i 5 dage, derefter 1 pose dagligt
  - Ponyer og føl: 1-2 poser dagligt i 5 dage, derefter 1 pose dagligt
      
  Pris: DKK 299.00 (15 portioner)`,
      price: 'DKK 299.00',
      image: '/img/produkter/only_good_horse.jpg',
      categories: ['heste'],
      subcategories: ['Andre produkter'],
    },
    {
      id: 36,
      name: 'Økologisk Hampefrøolie',
      description: 'Økologisk hampefrøolie til heste, kendt for sine anti-inflammatoriske egenskaber og høje omega-3 indhold.',
      fullDescription: `Økologisk Hampefrøolie
      
  En velafbalanceret olie med omega-3 og omega-6, fri for tilsætningsstoffer. Fugtgivende og rig på omega-fedtsyrer.
      
  Pris:
  - 1L: DKK 299.00
  - 3L: DKK 699.00`,
      price: 'fra DKK 299.00',
      image: '/img/produkter/oekologisk_hampefroolie.jpg',
      categories: ['heste'],
      subcategories: ['Olie'],
    },
    {
      id: 37,
      name: 'Økologisk Hørfrøolie',
      description: 'Naturlig hørfrøolie til heste, rig på omega-3 fedtsyrer, der støtter immunforsvaret og hudens sundhed.',
      fullDescription: `Økologisk Hørfrøolie
      
  Koldpresset hørfrøolie med højt indhold af omega-3. Supplerer omega-behovet i hestens foder.
      
  Pris:
  - 1L: DKK 119.00
  - 3L: DKK 299.00`,
      price: 'fra DKK 119.00',
      image: '/img/produkter/oekologisk_hoerfroolie.jpg',
      categories: ['heste'],
      subcategories: ['Olie'],
    },
    {
      id: 38,
      name: 'Økologisk Rapsolie',
      description: 'Økologisk rapsolie til heste, som tilføjer essentielle fedtsyrer til deres kost.',
      fullDescription: `Økologisk Rapsolie
      
  Koldpresset rapsolie, rig på omega-fedtsyrer. Emballagen forlænger holdbarheden og beskytter olien.
      
  Pris:
  - 1L: DKK 99.00
  - 3L: DKK 249.00`,
      price: 'fra DKK 99.00',
      image: '/img/produkter/oekologisk_rapsolie.jpg',
      categories: ['heste'],
      subcategories: ['Olie'],
    },
    {
      id: 39,
      name: 'Gastro Maintain',
      description: 'Kosttilskud til heste, udviklet for at fremme en sund fordøjelse og stabil mave-tarm balance.',
      fullDescription: `Gastro Maintain
      
  Basisk drik med mælkesyrebakterier og jordskokker for optimal fordøjelse og foderudnyttelse.
      
  Ingredienser: Vand, økologiske jordskokker, honning, mælkesyrebakterier.
      
  Anbefalet dosering: 10-25 ml pr. 100 kilo hest pr. dag.`,
      price: 'DKK 349.00',
      image: '/img/produkter/gastro_maintain.jpg',
      categories: ['heste'],
      subcategories: ['Fordøjelse'],
    },
    {
      id: 40,
      name: 'NDS Equine BoneX',
      description: 'BoneX er udviklet til at styrke knoglesundheden hos heste, med naturlige ingredienser for optimal optagelse.',
      fullDescription: `NDS Equine BoneX (1.5 kg)
      
  Et unikt collagen-peptid supplement for hestens knoglesundhed.
      
  Anbefalet dosering: 25g for hest, 12.5g for pony.`,
      price: 'DKK 1,799.00',
      image: '/img/produkter/nds_equine_bonex.jpg',
      categories: ['heste'],
      subcategories: ['Andre produkter'],
    },
    {
      id: 41,
      name: 'NDS Equine Ezy Move',
      description: 'Ezy Move understøtter mobilitet og lindrer ledproblemer hos heste gennem naturlige antiinflammatoriske stoffer.',
      fullDescription: `NDS Equine Ezy Move (1.5 kg)
      
  Et specialudviklet collagen-peptid for led og mobilitet hos heste.
      
  Anbefalet dosering: 25g for hest, 12.5g for pony.`,
      price: 'DKK 1,399.00',
      image: '/img/produkter/nds_equine_ezymove.jpg',
      categories: ['heste'],
      subcategories: ['Andre produkter'],
    },
    {
      id: 42,
      name: 'NDS Equine HoofX',
      description: 'HoofX er designet til at forbedre hovens sundhed og struktur hos heste, med fokus på vækst og styrke.',
      fullDescription: `NDS Equine HoofX (1.5 kg)
      
  Et vævsspecifikt collagen-peptid for hestens hove og sund hud.
      
  Anbefalet dosering: 25g for hest, 12.5g for pony.`,
      price: 'DKK 1,599.00',
      image: '/img/produkter/nds_equine_hoofx.jpg',
      categories: ['heste'],
      subcategories: ['Andre produkter'],
    },
    {
      id: 43,
      name: 'NDS Equine Multivitamin',
      description: 'Multivitamin tilskud til heste, der sikrer daglige vitaminer og mineraler for en sund krop og høj energi.',
      fullDescription: `NDS Equine Multivitamin
      
  Effektivt tilskud af vitaminer og mineraler for hestens daglige behov.
      
  Dosering: 10 ml for hest, 5 ml for pony.
      
  Indeholder essentielle vitaminer og mineraler.`,
      price: 'DKK 435.00',
      image: '/img/produkter/nds_equine_multivitamin.jpg',
      categories: ['heste'],
      subcategories: ['Vitaminer & Mineraler'],
    },
    {
      id: 44,
      name: 'NDS Equine MuscleX',
      description: 'MuscleX er formuleret til at styrke muskelopbygning og udholdenhed hos heste under træning.',
      fullDescription: `NDS Equine MuscleX (1.5 kg)
      
  Effektivt collagenpeptid for muskelopbygning og træning.
      
  Dosering: 25g for hest, 12.5g for pony.`,
      price: 'DKK 1,399.00',
      image: '/img/produkter/nds_equine_musclex.jpg',
      categories: ['heste'],
      subcategories: ['Andre produkter'],
    },
    {
      id: 45,
      name: 'NDS Equine TendonX',
      description: 'TendonX fremmer senestyrke og smidighed hos heste, ideelt til både træning og restitution.',
      fullDescription: `NDS Equine TendonX (1.5 kg)
      
  Specifikt collagenpeptid for sunde sener og ledbånd.
      
  Dosering: 25g for hest, 12.5g for pony.`,
      price: 'DKK 1,599.00',
      image: '/img/produkter/nds_equine_tendonx.jpg',
      categories: ['heste'],
      subcategories: ['Andre produkter'],
    },
    {
      id: 46,
      name: 'Urtefarm Gastro Stabilizer',
      description: 'Et urtebaseret supplement til heste, der hjælper med at stabilisere maven og fremmer fordøjelseskomfort.',
      fullDescription: `Urtefarm Gastro Stabilizer
      
  En fermenteret drik med mælkesyrebakterier, der stabiliserer mave-tarmfunktionen.
      
  Ingredienser: Jordskokker, honning, mælkesyrebakterier.`,
      price: 'DKK 149.00',
      image: '/img/produkter/urtefarm_gastro_stabilizer.jpg',
      categories: ['heste'],
      subcategories: ['Fordøjelse'],
    },
  
    // Unique Products for Dogs
    {
      id: 47,
      name: 'Hårcelletest Til Din Hund',
      description: 'En detaljeret hårcelletest til din hund for at få indsigt i dens sundhedstilstand og ernæringsbehov.',
      fullDescription: `Hårcelletest Til Din Hund
      
  Analyse af hårceller for indsigt i sundhedsstatus og næringsbehov.`,
      price: 'Kontakt for pris',
      image: '/img/produkter/haarcelletest_hund.jpg',
      categories: ['hunde'],
      subcategories: ['Andre produkter'],
    },
    {
      id: 48,
      name: 'NDS K9 Dog/Cat - Multivitamin',
      description: 'Multivitamin til hunde og katte, understøtter sundhed og energi.',
      fullDescription: `NDS K9 Dog/Cat - Multivitamin (100 gr.)
      
  Dosering: 1/4 tsk for små hunde/katte, 1/2 tsk for store hunde.`,
      price: 'DKK 175.00',
      image: '/img/produkter/nds_k9_multivitamin.jpg',
      categories: ['hunde'],
      subcategories: ['Vitaminer & Mineraler'],
    },
    {
      id: 49,
      name: 'NDS Probiotic Barrier 8',
      description: 'Et probiotisk tilskud i pulverform, der styrker hundens fordøjelse og immunforsvar.',
      fullDescription: `NDS Probiotic Barrier 8 (100 gr.)
      
  Ingredienser: Majsstivelse, maltodextrin, mineraler, 8 bakteriestammer: B.bifidum, B.longum, L.brevis m.fl.
      
  Dosering: 1 tsk pr. dag.`,
      price: 'DKK 309.00',
      image: '/img/produkter/nds_probiotic_barrier_8.jpg',
      categories: ['hunde'],
      subcategories: ['Fordøjelse'],
    },
    {
      id: 50,
      name: 'NDS Probiotic Classic 10',
      description: 'Probiotisk tilskud, der understøtter en sund fordøjelse hos hunde, fremstillet med unik BioAktiv teknologi.',
      fullDescription: `NDS Probiotic Classic 10 (100 gr.)
      
  Ingredienser: Majsstivelse, maltodextrin, mineraler, 10 bakteriestammer inkl. B.infantis og L.acidophilus.
      
  Dosering: 1 tsk. pr. dag.`,
      price: 'DKK 299.00',
      image: '/img/produkter/nds_probiotic_classic_10.jpg',
      categories: ['hunde'],
      subcategories: ['Fordøjelse'],
    },
  
    // Unique Products for Cats
    {
      id: 51,
      name: 'Hårcelletest Til Din Kat',
      description: 'En hårcelletest designet til katte for at give indsigt i dens sundhedsstatus og ernæringsmæssige behov.',
      fullDescription: `Hårcelletest Til Din Kat
      
  Analyse af hårceller for indsigt i sundhedsstatus og næringsbehov.`,
      price: 'Kontakt for pris',
      image: '/img/produkter/haarcelletest_kat.jpg',
      categories: ['katte'],
      subcategories: ['Andre produkter'],
    },
    {
      id: 52,
      name: 'NDS Probiotic Barrier',
      description: 'Et probiotisk supplement til katte i pulverform, der fremmer fordøjelsessundhed og immunforsvar.',
      fullDescription: `NDS Probiotic Barrier (100 gr.)
      
  Ingredienser: Majsstivelse, maltodextrin, mineraler, 8 bakteriestammer inkl. L.acidophilus og L.casei.
      
  Dosering: 1 tsk. pr. dag.`,
      price: 'DKK 309.00',
      image: '/img/produkter/nds_probiotic_barrier.jpg',
      categories: ['katte'],
      subcategories: ['Fordøjelse'],
    },
    {
      id: 53,
      name: 'NDS Probiotic Classic',
      description: 'Probiotisk kosttilskud til katte, designet til at understøtte en sund tarmflora og styrke fordøjelsen.',
      fullDescription: `NDS Probiotic Classic (100 gr.)
      
  Ingredienser: Majsstivelse, maltodextrin, mineraler, 10 bakteriestammer inkl. L.plantarum og L.salvarius.
      
  Dosering: 1 tsk. pr. dag.`,
      price: 'DKK 299.00',
      image: '/img/produkter/nds_probiotic_classic.jpg',
      categories: ['katte'],
      subcategories: ['Fordøjelse'],
    },
  ];

async function seedProducts() {
  const batch = db.batch();
  for (const product of products) {
    // Convert product.id to a string (document ID) or let Firestore generate one automatically.
    // If you want to preserve the same ID, you can store it as a field rather than using it as doc ID.
    // We'll use addDoc (auto ID) and store product.id as a field inside the document.
    const productRef = db.collection('products').doc(String(product.id));
    batch.set(productRef, { ...product });
  }
  await batch.commit();
  console.log('Seeding done.');
}

seedProducts();