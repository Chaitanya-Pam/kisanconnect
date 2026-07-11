// ===============================
// KisanConnect Database
// ===============================

// Current Language
let currentLanguage = "en";

// Selected Data
let selectedCrop = null;
let selectedDisease = null;
let selectedCompany = null;

// ========================================
// MULTILINGUAL TEXT
// ========================================

const TEXT = {
    en:{
        splash:"Smart Farming Assistant",
        start:"Start",
        selectLanguage:"Select Language",
        welcome:"Welcome",
        chooseCrop:"Choose your Crop",
        continue:"Continue",
        cropSelection:"Select Crop",
        diseaseSelection:"Select Disease",
        recommendation:"Recommendation",
        companies:"Companies",
        companyDetails:"Company Details",
        fertilizer:"Recommended Fertilizer",
        pesticide:"Recommended Pesticide",
        phone:"Phone",
        email:"Email",
        website:"Website",
        callCompany:"Call Company",
        viewCompanies:"View Companies"
    },
    te:{
        splash:"స్మార్ట్ వ్యవసాయ సహాయకుడు",
        start:"ప్రారంభించండి",
        selectLanguage:"భాషను ఎంచుకోండి",
        welcome:"స్వాగతం",
        chooseCrop:"మీ పంటను ఎంచుకోండి",
        continue:"కొనసాగించండి",
        cropSelection:"పంటను ఎంచుకోండి",
        diseaseSelection:"వ్యాధిని ఎంచుకోండి",
        recommendation:"సిఫార్సు",
        companies:"కంపెనీలు",
        companyDetails:"కంపెనీ వివరాలు",
        fertilizer:"సిఫార్సు చేసిన ఎరువు",
        pesticide:"సిఫార్సు చేసిన పురుగుమందు",
        phone:"ఫోన్",
        email:"ఈమెయిల్",
        website:"వెబ్‌సైట్",
        callCompany:"కంపెనీకి కాల్ చేయండి",
        viewCompanies:"కంపెనీలను చూడండి"
    },
    hi:{
        splash:"स्मार्ट खेती सहायक",
        start:"शुरू करें",
        selectLanguage:"भाषा चुनें",
        welcome:"स्वागत है",
        chooseCrop:"अपनी फसल चुनें",
        continue:"जारी रखें",
        cropSelection:"फसल चुनें",
        diseaseSelection:"रोग चुनें",
        recommendation:"सिफारिश",
        companies:"कंपनियाँ",
        companyDetails:"कंपनी विवरण",
        fertilizer:"अनुशंसित उर्वरक",
        pesticide:"अनुशंसित कीटनाशक",
        phone:"फ़ोन",
        email:"ईमेल",
        website:"वेबसाइट",
        callCompany:"कंपनी को कॉल करें",
        viewCompanies:"कंपनियाँ देखें"
    }
};

// ========================================
// CROPS
// ========================================

const CROPS = [
    {
        id:"rice",
        name:{ en:"Rice", te:"వరి", hi:"धान" },
        image:"assets/crops/rice.jpg"
    },
    // {
    //     id:"maize",
    //     name:{ en:"Maize", te:"మొక్కజొన్న", hi:"मक्का" },
    //     image:"assets/crops/rice.jpg" // Using rice as placeholder since maize isn't in folder
    // },
    {
        id:"cotton",
        name:{ en:"Cotton", te:"పత్తి", hi:"कपास" },
        image:"assets/crops/cotton.jpg"
    },
    {
        id:"tomato",
        name:{ en:"Tomato", te:"టమాట", hi:"टमाटर" },
        image:"assets/crops/tomato.png"
    },
    {
        id:"chilli",
        name:{ en:"Chilli", te:"మిరప", hi:"మిర్చి" },
        image:"assets/crops/chilli.png"
    },
    {
        id:"wheat",
        name:{ en:"Wheat", te:"గోధుమ", hi:"गेहूँ" },
        image:"assets/crops/wheat.png"
    }
];

// ========================================
// DISEASES
// ========================================

const DISEASES = {
    rice:[
        {
            id:"rice_blast",
            name:{ en:"Rice Blast", te:"వరి బ్లాస్ట్", hi:"धान ब्लास्ट" },
            image:"assets/diseases/rice-leaf-blast.jpg",
            fertilizer:"NPK 20:20:20",
            pesticide:"Tricyclazole 75% WP",
            companies:["upl","bayer","syngenta"]
        },
        {
            id:"rice_bacterial_leaf_blight",
            name:{ en:"Bacterial Leaf Blight", te:"బాక్టీరియల్ లీఫ్ బ్లైట్", hi:"बैक्टीरियल लीफ ब्लाइट" },
            image:"assets/diseases/rice-bacterial-blight.png",
            fertilizer:"DAP",
            pesticide:"Copper Oxychloride",
            companies:["bayer","iffco","upl"]
        }
    ],
    // maize:[
    //     {
    //         id:"maize_fall_armyworm",
    //         name:{ en:"Fall Armyworm", te:"ఫాల్ ఆర్మీవార్మ్", hi:"फॉल आर्मीवर्म" },
    //         image:"assets/diseases/rice-leaf-blast.jpg", 
    //         fertilizer:"NPK 19:19:19",
    //         pesticide:"Emamectin Benzoate",
    //         companies:["syngenta","bayer","upl"]
    //     }
    // ],
    cotton:[
        {
            id:"cotton_bollworm",
            name:{ en:"Bollworm", te:"బోల్‌వార్మ్", hi:"बोलवर्म" },
            image:"assets/diseases/cotton-boll-rot.png",
            fertilizer:"NPK 20:20:20",
            pesticide:"Spinosad",
            companies:["bayer","upl","coromandel"]
        },
        {
            id:"cotton_leaf_spot",
            name:{ en:"Leaf Spot", te:"లీఫ్ స్పాట్", hi:"लीफ स्पॉट" },
            image:"assets/diseases/cotton-leaf-curl.jpg",
            fertilizer:"Potash",
            pesticide:"Carbendazim",
            companies:["coromandel","syngenta","upl"]
        }
    ],
    tomato:[
        {
            id:"tomato_early_blight",
            name:{ en:"Early Blight", te:"ఎర్لى బ్లైట్", hi:"अर्ली ब्लाइट" },
            image:"assets/diseases/tomato-early-blight.png",
            fertilizer:"NPK 19:19:19",
            pesticide:"Mancozeb",
            companies:["upl","bayer","syngenta"]
        },
        {
            id:"tomato_late_blight",
            name:{ en:"Late Blight", te:"లేట్ బ్లైట్", hi:"लेट ब्लाइट" },
            image:"assets/diseases/tomato-leaf-curl.png",
            fertilizer:"Calcium Nitrate",
            pesticide:"Metalaxyl + Mancozeb",
            companies:["syngenta","coromandel","upl"]
        }
    ],
    chilli:[
        {
            id:"chilli_leaf_curl",
            name:{ en:"Leaf Curl", te:"లీఫ్ కర్ల్", hi:"लीफ कर्ल" },
            image:"assets/diseases/chilli-leaf-spot.png",
            fertilizer:"NPK 13:40:13",
            pesticide:"Imidacloprid",
            companies:["bayer","syngenta","upl"]
        },
        {
            id:"chilli_anthracnose",
            name:{ en:"Anthracnose", te:"ఆంత్రాక్నోస్", hi:"एन्थ्रेक्नोज" },
            image:"assets/diseases/chilli-anthracnose.png",
            fertilizer:"Potassium Nitrate",
            pesticide:"Azoxystrobin",
            companies:["coromandel","upl","syngenta"]
        }
    ],
    wheat:[
        {
            id:"wheat_rust",
            name:{ en:"Rust", te:"రస్ట్", hi:"रस्ट" },
            image:"assets/diseases/wheat-yellow-rust.png", // Make sure this matches your file in diseases folder
            fertilizer:"Urea",
            pesticide:"Propiconazole",
            companies:["bayer","upl","iffco"]
        }
    ]
};

// ========================================
// COMPANIES
// ========================================

const COMPANIES = {
    upl:{
        id:"upl",
        name:"UPL Limited",
        product:"Crop Protection Products",
        phone:"+91 22 7151 5000",
        email:"customercare@upl-ltd.com",
        website:"https://www.upl-ltd.com"
    },
    bayer:{
        id:"bayer",
        name:"Bayer Crop Science",
        product:"Fungicides, Insecticides & Seeds",
        phone:"+91 22 2531 1234",
        email:"cropscience.india@bayer.com",
        website:"https://www.bayer.com"
    },
    syngenta:{
        id:"syngenta",
        name:"Syngenta India",
        product:"Crop Protection & Seeds",
        phone:"+91 80 4259 7000",
        email:"contact.india@syngenta.com",
        website:"https://www.syngenta.co.in"
    },
    coromandel:{
        id:"coromandel",
        name:"Coromandel International",
        product:"Fertilizers & Crop Protection",
        phone:"+91 40 2784 7212",
        email:"customercare@coromandel.biz",
        website:"https://www.coromandel.biz"
    },
    iffco:{
        id:"iffco",
        name:"IFFCO",
        product:"Fertilizers",
        phone:"+91 11 2335 1600",
        email:"helpdesk@iffco.in",
        website:"https://www.iffco.in"
    }
};

// ========================================
// HELPER FUNCTIONS
// ========================================

function getLanguageText(key){
    return TEXT[currentLanguage][key] || key;
}

function getCropName(crop){
    return crop.name[currentLanguage] || crop.name.en;
}

function getDiseaseName(disease){
    return disease.name[currentLanguage] || disease.name.en;
}

function getDiseasesByCrop(cropId){
    return DISEASES[cropId] || [];
}

function getCompany(companyId){
    return COMPANIES[companyId];
}