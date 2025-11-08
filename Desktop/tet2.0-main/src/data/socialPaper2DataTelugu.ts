type SocialPaper2TeluguRawQuestion = {
  id: number | string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

const rawSocialPaper2TeluguData: SocialPaper2TeluguRawQuestion[] =
[
  {
    "id": 1,
    "question": "Usually, Contour lines are drawn in the map at these fixed intervals of height (TSTET 02 Jan 2025)\nసాధారణంగా, పటంలో కాంటూర్ రేఖలు ఈ స్థిరమైన ఎత్తు అంతరాలలో గీయబడతాయి",
    "options": [
      "100 metres, 200 metres and 300 metres\n100 మీటర్లు, 200 మీటర్లు మరియు 300 మీటర్లు",
      "50 metres, 200 metres and 500 metres\n50 మీటర్లు, 200 మీటర్లు మరియు 500 మీటర్లు",
      "20 metres, 50 metres and 100 metres\n20 మీటర్లు, 50 మీటర్లు మరియు 100 మీటర్లు",
      "100 metres, 500 metres and 1000 metres\n100 మీటర్లు, 500 మీటర్లు మరియు 1000 మీటర్లు"
    ],
    "correctAnswer": 2,
    "explanation": "కాంటూర్ రేఖలు సమానమైన ఎత్తులో ఉన్న బిందువులను కలుపుతాయి. ఈ రేఖల మధ్య ఉండే అంతరం లేదా నిలువు దూరం స్థిరంగా ఉంటుంది. స్థలాकृतिक పటాలపై సాధారణంగా ఉపయోగించే అంతరాలు 20, 50, మరియు 100 మీటర్లు, ఇది పటం యొక్క స్కేల్ మరియు భూభాగం యొక్క ఏటవాలుపై ఆధారపడి ఉంటుంది."
  },
  {
    "id": 2,
    "question": "These districts of Telangana state share their boundary with the state of Chattisgarh (TSTET 02 Jan 2025)\nతెలంగాణ రాష్ట్రంలోని ఈ జిల్లాలు ఛత్తీస్‌గఢ్ రాష్ట్రంతో తమ సరిహద్దును పంచుకుంటాయి",
    "options": [
      "Bhadradri Kothagudem and Jayashakar Bhoopalapally\nభద్రాద్రి కొత్తగూడెం మరియు జయశంకర్ భూపాలపల్లి",
      "Bhadradri Kothagudem and Adilabad\nభద్రాద్రి కొత్తగూడెం మరియు ఆదిలాబాద్",
      "Komarum Bheem and Adilabad\nకొమరం భీం మరియు ఆదిలాబాద్",
      "Manchiryal and Komarum Bheem\nమంచిర్యాల మరియు కొమరం భీం"
    ],
    "correctAnswer": 0,
    "explanation": "తెలంగాణ ఈశాన్య సరిహద్దు ఛత్తీస్‌గఢ్‌తో పంచుకోబడింది. ఈ సరిహద్దులో ఉన్న జిల్లాలు ప్రధానంగా భద్రాద్రి కొత్తగూడెం మరియు ములుగు (ఇది జయశంకర్ భూపాలపల్లి నుండి ఏర్పడింది)."
  },
  {
    "id": 3,
    "question": "Which of the following statement refers to Continental (Extreme) Climate'? (TSTET 02 Jan 2025)\nకింది వాటిలో ఏ వాక్యం 'ఖండాంతర (తీవ్రమైన) శీతోష్ణస్థితి'ని సూచిస్తుంది?",
    "options": [
      "The places having no difference between the maximum and the minimum monthly average temperatures\nగరిష్ట మరియు కనిష్ట నెలవారీ సగటు ఉష్ణోగ్రతల మధ్య వ్యత్యాసం లేని ప్రదేశాలు",
      "The places having less difference between the maximum and the minimum monthly average temperatures\nగరిష్ట మరియు కనిష్ట నెలవారీ సగటు ఉష్ణోగ్రతల మధ్య తక్కువ వ్యత్యాసం ఉన్న ప్రదేశాలు",
      "The places having great difference between the maximum and the minimum monthly average temperatures\nగరిష్ట మరియు కనిష్ట నెలవారీ సగటు ఉష్ణోగ్రతల మధ్య ఎక్కువ వ్యత్యాసం ఉన్న ప్రదేశాలు",
      "The places having negligible difference between the maximum and the minimum monthly average temperatures\nగరిష్ట మరియు కనిష్ట నెలవారీ సగటు ఉష్ణోగ్రతల మధ్య అతి తక్కువ (పరిగణించలేని) వ్యత్యాసం ఉన్న ప్రదేశాలు"
    ],
    "correctAnswer": 2,
    "explanation": "ఖండాంతర శీతోష్ణస్థితిలో ఏడాది పొడవునా ఉష్ణోగ్రతలలో గణనీయమైన వ్యత్యాసాలు ఉంటాయి. సముద్రాల ప్రభావాన్ని తగ్గించే ప్రభావానికి దూరంగా ఉన్న ప్రదేశాలు చాలా వేడి వేసవికాలాలను మరియు చాలా చల్లని శీతాకాలాలను అనుభవిస్తాయి, ఇది గరిష్ట మరియు కనిష్ట ఉష్ణోగ్రతల మధ్య పెద్ద లేదా 'ఎక్కువ' వ్యత్యాసానికి దారితీస్తుంది."
  },
  {
    "id": 4,
    "question": "These parts of India receive annual rainfall over 400 cm. (TSTET 02 Jan 2025)\nభారతదేశంలోని ఈ ప్రాంతాలలో 400 సెం.మీ. కంటే ఎక్కువ వార్షిక వర్షపాతం నమోదవుతుంది.",
    "options": [
      "The eastern part of Western Ghats\nపశ్చిమ కనుమల తూర్పు భాగం",
      "North Eastern parts of India\nభారతదేశ ఈశాన్య ప్రాంతాలు",
      "The Chota Nagpur Plateau region\nచోటా నాగ్‌పూర్ పీఠభూమి ప్రాంతం",
      "The Deccan Plateau region\nదక్కన్ పీఠభూమి ప్రాంతం"
    ],
    "correctAnswer": 1,
    "explanation": "భారతదేశంలోని ఈశాన్య ప్రాంతాలు, ముఖ్యంగా మేఘాలయలోని ఖాసీ కొండల పవనాభిముఖ దిశలో (ఉదా., మాసిన్‌రామ్, చిరపుంజి), బంగాళాఖాతం నుండి వచ్చే రుతుపవనాల కారణంగా దేశంలోనే అత్యధిక వర్షపాతాన్ని పొందుతాయి, ఇది తరచుగా సంవత్సరానికి 400 సెం.మీ. కంటే ఎక్కువగా ఉంటుంది."
  },
  {
    "id": 5,
    "question": "In this layer of the atmosphere, the temperature increases as there is an increase in altitude (TSTET 02 Jan 2025)\nవాతావరణంలోని ఈ పొరలో, ఎత్తు పెరిగేకొద్దీ ఉష్ణోగ్రత పెరుగుతుంది",
    "options": [
      "Troposphere\nట్రోపోస్ఫియర్",
      "Stratosphere\nస్ట్రాటోస్ఫియర్",
      "Mesosphere\nమీసోస్ఫియర్",
      "Stratosphere and Mesosphere\nస్ట్రాటోస్ఫియర్ మరియు మీసోస్ఫియర్"
    ],
    "correctAnswer": 1,
    "explanation": "స్ట్రాటోస్ఫియర్‌లో, ఎత్తుతో పాటు ఉష్ణోగ్రత పెరుగుతుంది. ఈ 'ఉష్ణోగ్రత విలోమం' వాతావరణంలోని ఈ భాగంలో కేంద్రీకృతమై ఉన్న ఓజోన్ పొర సూర్యుని అతినీలలోహిత (UV) కిరణాలను గ్రహించడం వల్ల సంభవిస్తుంది."
  },
  {
    "id": 6,
    "question": "These forests are commonly found in South East USA. South China and in South East Brazil (TSTET 02 Jan 2025)\nఈ అడవులు సాధారణంగా ఆగ్నేయ USA, దక్షిణ చైనా మరియు ఆగ్నేయ బ్రెజిల్‌లో కనిపిస్తాయి",
    "options": [
      "Tropical Deciduous Forests\nఉష్ణమండల ఆకురాల్చే అడవులు",
      "Tropical Evergreen Forests\nఉష్ణమండల సతత హరిత అడవులు",
      "Temperate Deciduous Forests\nసమశీతోష్ణ ఆకురాల్చే అడవులు",
      "Temperate Evergreen Forests\nసమశీతోష్ణ సతత హరిత అడవులు"
    ],
    "correctAnswer": 3,
    "explanation": "సమశీతోష్ణ సతత హరిత అడవులు మధ్య-అక్షాంశ తీర ప్రాంతాలలో కనిపిస్తాయి. పేర్కొన్న ప్రాంతాలు (ఆగ్నేయ USA, దక్షిణ చైనా, ఆగ్నేయ బ్రెజిల్) ఈ అటవీ రకానికి సాధారణ ప్రదేశాలు, ఇవి వెచ్చని వేసవికాలం, తేలికపాటి శీతాకాలం మరియు విశాలమైన ఆకులు, శృంగాకార చెట్ల మిశ్రమంతో ఉంటాయి."
  },
  {
    "id": 7,
    "question": "This type of farming depends upon monsoon rainfall, natural fertility of the soil and suitability of other environmental conditions to the crops grown (TSTET 02 Jan 2025)\nఈ రకమైన వ్యవసాయం రుతుపవన వర్షపాతం, నేల సహజ సారం మరియు పండించే పంటలకు ఇతర పర్యావరణ పరిస్థితుల అనుకూలతపై ఆధారపడి ఉంటుంది",
    "options": [
      "Intensive Subsistence Farming\nసాంద్ర జీవనాధార వ్యవసాయం",
      "Simple Subsistence Farming\nసాధారణ జీవనాధార వ్యవసాయం",
      "Commercial Farming\nవాణిజ్య వ్యవసాయం",
      "Extensive Agricultural Farming\nవిస్తృత వ్యవసాయం"
    ],
    "correctAnswer": 1,
    "explanation": "సాధారణ (లేదా ఆదిమ) జీవనాధార వ్యవసాయం అనేది వర్షపాతం మరియు నేల సారం వంటి సహజ కారకాలపై పూర్తిగా ఆధారపడే ఒక సాంప్రదాయ వ్యవసాయ పద్ధతి. ఇది ప్రధానంగా స్వీయ-వినియోగం కోసం ఆహారాన్ని పండించడానికి ప్రాథమిక పనిముట్లను మరియు కుటుంబ శ్రమను ఉపయోగిస్తుంది."
  },
  {
    "id": 8,
    "question": "The distance between any two consecutive longitudes is approximately 111.32 km at the equator. The perimeter of the Earth at the equator is (TSTET 02 Jan 2025)\nభూమధ్యరేఖ వద్ద ఏవైనా రెండు వరుస రేఖాంశాల మధ్య దూరం సుమారు 111.32 కి.మీ. ఉంటుంది. భూమధ్యరేఖ వద్ద భూమి చుట్టుకొలత",
    "options": [
      "40,075 Km",
      "41,470 km",
      "39,294 km",
      "12,896 km"
    ],
    "correctAnswer": 0,
    "explanation": "భూమికి 360 డిగ్రీల రేఖాంశాలు ఉన్నాయి. భూమధ్యరేఖ చుట్టుకొలతను లెక్కించడానికి, ఒక డిగ్రీ దూరాన్ని 360తో గుణించాలి. కాబట్టి, 111.32 కి.మీ./డిగ్రీ * 360 డిగ్రీలు = 40,075.2 కి.మీ."
  },
  {
    "id": 9,
    "question": "Read the following sentences regarding 'Surface Waves'. A) The velocity of Surface waves changes as they travel through materials with different densities in the interior of the earth B) The denser the material, the higher the velocity of the 'surface waves' (TSTET 02 Jan 2025)\n'ఉపరితల తరంగాలు' గురించి కింది వాక్యాలను చదవండి. A) భూమి అంతర్భాగంలో వివిధ సాంద్రతలు ఉన్న పదార్థాల గుండా ప్రయాణిస్తున్నప్పుడు ఉపరితల తరంగాల వేగం మారుతుంది B) పదార్థం ఎంత సాంద్రంగా ఉంటే, 'ఉపరితల తరంగాల' వేగం అంత ఎక్కువగా ఉంటుంది",
    "options": [
      "Both A and B are incorrect\nA మరియు B రెండూ తప్పు",
      "A is correct and B is incorrect\nA సరైనది మరియు B తప్పు",
      "B is correct and A is incorrect\nB సరైనది మరియు A తప్పు",
      "Both A and B are correct\nA మరియు B రెండూ సరైనవి"
    ],
    "correctAnswer": 0,
    "explanation": "రెండు వాక్యాలు తప్పు. ఉపరితల తరంగాలు భూమి ఉపరితలంపై ప్రయాణిస్తాయి, దాని అంతర్భాగంలో కాదు, కాబట్టి వాక్యం A తప్పు. రెండు వాక్యాలలో వివరించిన లక్షణాలు భూకంప తరంగాలకు (P-తరంగాలు మరియు S-తరంగాలు) వర్తిస్తాయి, ఇవి భూమి అంతర్భాగం గుండా ప్రయాణిస్తాయి."
  },
  {
    "id": 10,
    "question": "The Geographical area of India and the percentage of the total Geographical area of India in the world is (TSTET 02 Jan 2025)\nభారతదేశ భౌగోళిక వైశాల్యం మరియు ప్రపంచంలోని మొత్తం భౌగోళిక వైశాల్యంలో భారతదేశ శాతం",
    "options": [
      "32.8 million Sq. km and 2.4% of world's Geographical area\n32.8 మిలియన్ చ.కి.మీ. మరియు ప్రపంచ భౌగోళిక వైశాల్యంలో 2.4%",
      "328 million Sq. km and 3.4% of world's Geographical area\n328 మిలియన్ చ.కి.మీ. మరియు ప్రపంచ భౌగోళిక వైశాల్యంలో 3.4%",
      "3.28 million Sq.km and 2.4% of world's Geographical area\n3.28 మిలియన్ చ.కి.మీ. మరియు ప్రపంచ భౌగోళిక వైశాల్యంలో 2.4%",
      "0.328 million Sq. km and 2.4% of world's Geographical area\n0.328 మిలియన్ చ.కి.మీ. మరియు ప్రపంచ భౌగోళిక వైశాల్యంలో 2.4%"
    ],
    "correctAnswer": 2,
    "explanation": "భారతదేశం మొత్తం భూభాగం సుమారు 3.28 మిలియన్ చదరపు కిలోమీటర్లు. ఇది ప్రపంచ మొత్తం భూభాగంలో సుమారు 2.4% ఉంటుంది, ఇది ప్రపంచంలో ఏడవ అతిపెద్ద దేశంగా నిలుస్తుంది."
  },
  {
    "id": 11,
    "question": "From among the following, identify the true statements regarding the Western Ghats. A) The height of Western Ghats progressively increases from north to south. B) Anaimudi and Dodda betta are the highest peaks of the Western Ghats. C) The Eastern Ghats are higher than the Western Ghats. D) The Rivers like Godavari, Krishna. Thungabhadra etc. are originated in the Western Ghats. (TSTET 02 Jan 2025)\nకింది వాటిలో, పశ్చిమ కనుమలకు సంబంధించి సరైన వాక్యాలను గుర్తించండి. A) పశ్చిమ కనుమల ఎత్తు ఉత్తరం నుండి దక్షిణానికి క్రమంగా పెరుగుతుంది. B) అనైముడి మరియు దొడ్డబెట్ట పశ్చిమ కనుమలలో ఎత్తైన శిఖరాలు. C) తూర్పు కనుమలు పశ్చిమ కనుమల కంటే ఎత్తుగా ఉంటాయి. D) గోదావరి, కృష్ణా, తుంగభద్ర వంటి నదులు పశ్చిమ కనుమలలో ఉద్భవించాయి.",
    "options": [
      "A & B only\nA & B మాత్రమే",
      "B & C only\nB & C మాత్రమే",
      "B & D only\nB & D మాత్రమే",
      "A, B & D only\nA, B & D మాత్రమే"
    ],
    "correctAnswer": 3,
    "explanation": "వాక్యాలు A, B, మరియు D సరైనవి. పశ్చిమ కనుమల ఎత్తు దక్షిణం వైపు పెరుగుతుంది (A). అనైముడి ఎత్తైన శిఖరం (B). ప్రధాన ద్వీపకల్ప నదులు అక్కడ ఉద్భవించాయి (D). వాక్యం C తప్పు; పశ్చిమ కనుమలు తూర్పు కనుమల కంటే గణనీయంగా ఎత్తుగా మరియు నిరంతరంగా ఉంటాయి."
  },
  {
    "id": 12,
    "question": "Among the following Groups of countries, the countries which are grouped under 'Very High Human Development' as per Human Development Index Report, 2021 (TSTET 02 Jan 2025)\nకింది దేశాల సమూహాలలో, మానవ అభివృద్ధి సూచిక నివేదిక, 2021 ప్రకారం 'అత్యధిక మానవ అభివృద్ధి' కింద వర్గీకరించబడిన దేశాలు",
    "options": [
      "Norway, Switzerland, United States of America\nనార్వే, స్విట్జర్లాండ్, యునైటెడ్ స్టేట్స్ ఆఫ్ అమెరికా",
      "China, Sri Lanka, India\nచైనా, శ్రీలంక, భారతదేశం",
      "United States of America, Sri Lanka and Bhutan\nయునైటెడ్ స్టేట్స్ ఆఫ్ అమెరికా, శ్రీలంక మరియు భూటాన్",
      "Switzerland, Sri Lanka and China\nస్విట్జర్లాండ్, శ్రీలంక మరియు చైనా"
    ],
    "correctAnswer": 0,
    "explanation": "UNDP మానవ అభివృద్ధి నివేదిక 2021/22 ప్రకారం, నార్వే, స్విట్జర్లాండ్, మరియు USA వంటి దేశాలు 'అత్యధిక మానవ అభివృద్ధి' విభాగంలో స్థిరంగా ర్యాంక్ చేయబడ్డాయి. భారతదేశం, చైనా, మరియు శ్రీలంక 'అధిక' లేదా 'మధ్యస్థ' అభివృద్ధి వర్గాలలోకి వస్తాయి."
  },
  {
    "id": 13,
    "question": "Between the latitudes 10° and 30° North and South of the equator, rainfall is heavier on the eastern coasts and decreases towards the west due to these winds (TSTET 02 Jan 2025)\nభూమధ్యరేఖకు ఉత్తరం మరియు దక్షిణంగా 10° మరియు 30° అక్షాంశాల మధ్య, ఈ పవనాల కారణంగా తూర్పు తీరాలలో వర్షపాతం ఎక్కువగా ఉండి పడమర వైపుకు తగ్గుతుంది",
    "options": [
      "Westerlies\nపశ్చిమ పవనాలు",
      "Monsoon winds\nరుతుపవనాలు",
      "Trade Winds\nవ్యాపార పవనాలు",
      "Polar Winds\nధ్రువ పవనాలు"
    ],
    "correctAnswer": 2,
    "explanation": "ఉష్ణమండల ప్రాంతాలలో, వ్యాపార పవనాలు తూర్పు నుండి పడమరకు వీస్తాయి. అవి వెచ్చని సముద్రాల మీదుగా ప్రయాణిస్తున్నప్పుడు, అవి తేమను గ్రహిస్తాయి, దీనివల్ల ఖండాల తూర్పు తీరాలలో భారీ వర్షపాతం కురుస్తుంది. అవి పడమర వైపు దేశంలోపలికి వెళ్లేకొద్దీ, అవి తేమను కోల్పోతాయి మరియు వర్షపాతం తగ్గుతుంది."
  },
  {
    "id": 14,
    "question": "Which one of the following is the main cause of land degradation of soil in Punjab, Haryana and Western Uttar Pradesh? (TSTET 02 Jan 2025)\nపంజాబ్, హర్యానా మరియు పశ్చిమ ఉత్తర ప్రదేశ్‌లో భూసారం క్షీణించడానికి ప్రధాన కారణం ఏది?",
    "options": [
      "Intensive cultivation\nసాంద్ర సాగు",
      "Over irrigation\nఅధిక నీటిపారుదల",
      "Deforestation\nఅటవీ నిర్మూలన",
      "Overgrazing of animals\nపశువుల అధిక మేత"
    ],
    "correctAnswer": 1,
    "explanation": "పంజాబ్, హర్యానా, మరియు పశ్చిమ U.P.లోని వ్యవసాయపరంగా సాంద్రమైన ప్రాంతాలలో, కాలువలు మరియు గొట్టపు బావుల నుండి అధిక నీటిపారుదల కారణంగా నీరు నిలిచిపోవడం మరియు నేల లవణీయత వంటి తీవ్రమైన సమస్యలకు దారితీసింది, ఇవి భూసారం క్షీణతకు ప్రధాన రూపాలు."
  },
  {
    "id": 15,
    "question": "In China, all social classes opposing feudalism and imperialism were united on the basis of this theory (TSTET 02 Jan 2025)\nచైనాలో, భూస్వామ్య విధానాన్ని మరియు సామ్రాజ్యవాదాన్ని వ్యతిరేకించే అన్ని సామాజిక వర్గాలు ఈ సిద్ధాంతం ఆధారంగా ఏకమయ్యాయి",
    "options": [
      "New Democracy\nనూతన ప్రజాస్వామ్యం",
      "Communism\nకమ్యూనిజం",
      "Revolution\nవిప్లవం",
      "Land for all\nఅందరికీ భూమి"
    ],
    "correctAnswer": 0,
    "explanation": "మావో జెడాంగ్ యొక్క 'నూతన ప్రజాస్వామ్యం' సిద్ధాంతం, సామ్రాజ్యవాద మరియు భూస్వామ్య వ్యతిరేక సామాజిక వర్గాలన్నింటినీ—శ్రామికవర్గం, రైతాంగం, పెట్టీ బూర్జువా, మరియు జాతీయ బూర్జువా—కలిపి ఒక కూటమిని ప్రతిపాదించింది. ఇది చైనాలో సోషలిజంలోకి మారడానికి ముందు విప్లవానికి నాయకత్వం వహించడానికి ఉద్దేశించబడింది."
  },
  {
    "id": 16,
    "question": "Adolf Hitler assigned the responsibility of economic recovery to Hjalmar Schacht in Germany. He aimed at (TSTET 02 Jan 2025)\nఅడాల్ఫ్ హిట్లర్ జర్మనీలో ఆర్థిక పునరుద్ధరణ బాధ్యతను హ్యాల్మార్ షాక్ట్‌కు అప్పగించారు. అతని లక్ష్యం",
    "options": [
      "Heavy collection of taxes from the people\nప్రజల నుండి భారీగా పన్నులు వసూలు చేయడం",
      "Full production and full employment through a state funded work creation programme\nప్రభుత్వ నిధులతో కూడిన ఉపాధి కల్పన కార్యక్రమం ద్వారా పూర్తి ఉత్పత్తి మరియు పూర్తి ఉపాధి",
      "Privatisation of industries in the country\nదేశంలో పరిశ్రమల ప్రైవేటీకరణ",
      "Bringing a new variety of seeds in the field of agriculture to increase production\nఉత్పత్తిని పెంచడానికి వ్యవసాయ రంగంలో కొత్త రకం విత్తనాలను తీసుకురావడం"
    ],
    "correctAnswer": 1,
    "explanation": "గొప్ప ఆర్థిక మాంద్యాన్ని ఎదుర్కోవడానికి, హిట్లర్ ఆర్థిక మంత్రి అయిన హ్యాల్మార్ షాక్ట్, ప్రభుత్వ నిధులతో ప్రజా పనులు (ఆటోబాన్ వంటివి) మరియు పునరాయుధీకరణపై దృష్టి సారించిన విధానాలను అమలు చేశారు. దీని లక్ష్యం ఆర్థిక వ్యవస్థను ఉత్తేజపరిచి పూర్తి ఉత్పత్తి మరియు ఉపాధిని సాధించడం."
  },
  {
    "id": 17,
    "question": "To isolate France, this German Chancellor had made a secret alliance with Austria in 1879 and Italy and Austria in 1882 (TSTET 02 Jan 2025)\nఫ్రాన్స్‌ను ఏకాకిని చేయడానికి, ఈ జర్మన్ ఛాన్సలర్ 1879లో ఆస్ట్రియాతో మరియు 1882లో ఇటలీ మరియు ఆస్ట్రియాతో రహస్య కూటమిని ఏర్పాటు చేశారు",
    "options": [
      "Olaf Scholz\nఒలాఫ్ షోల్జ్",
      "Helmet Kohl\nహెల్మట్ కోల్",
      "Kurt George Kiesinger\nకుర్ట్ జార్జ్ కీసింగర్",
      "Otto Von Bismarck\nఒట్టో వాన్ బిస్మార్క్"
    ],
    "correctAnswer": 3,
    "explanation": "ఫ్రాంకో-ప్రష్యన్ యుద్ధం తర్వాత ఫ్రాన్స్‌ను ఏకాకిగా ఉంచడంపై ఒట్టో వాన్ బిస్మార్క్ విదేశాంగ విధానం కేంద్రీకృతమైంది. దీనిని సాధించడానికి అతను ఆస్ట్రియా-హంగేరితో ద్వంద్వ కూటమి (1879) మరియు ఆస్ట్రియా-హంగేరి మరియు ఇటలీతో ట్రిపుల్ అలయన్స్ (1882)తో సహా అనేక కూటములను రూపొందించాడు."
  },
  {
    "id": 18,
    "question": "Giuseppe Mazzini formed a secret society called 'Young Italy' to (TSTET 02 Jan 2025)\nగీసెప్పే మాజినీ 'యంగ్ ఇటలీ' అనే రహస్య సంఘాన్ని ఏర్పాటు చేసింది దేనికోసం",
    "options": [
      "To separate the Italian States and hand over to Bourbon Kings\nఇటాలియన్ రాష్ట్రాలను వేరు చేసి బర్బన్ రాజులకు అప్పగించడానికి",
      "To unite Italy into an Italian Republic\nఇటలీని ఒక ఇటాలియన్ రిపబ్లిక్‌గా ఏకం చేయడానికి",
      "To defeat France and occupy the small independent German Kingdoms\nఫ్రాన్స్‌ను ఓడించి చిన్న స్వతంత్ర జర్మన్ రాజ్యాలను ఆక్రమించడానికి",
      "To drive out the Spanish rulers with the help and support of the local peasants\nస్థానిక రైతుల సహాయం మరియు మద్దతుతో స్పానిష్ పాలకులను తరిమికొట్టడానికి"
    ],
    "correctAnswer": 1,
    "explanation": "తీవ్ర జాతీయవాది అయిన గీసెప్పే మాజినీ 1831లో 'యంగ్ ఇటలీ'ని స్థాపించారు. విదేశీ పాలనకు మరియు ద్వీపకల్పంలోని విచ్ఛిన్నమైన రాచరికాలకు వ్యతిరేకంగా ప్రజా తిరుగుబాటును ప్రేరేపించడం ద్వారా ఐక్య, స్వతంత్ర మరియు గణతంత్ర ఇటలీ అనే ఆలోచనను ప్రోత్సహించడం దీని లక్ష్యం."
  },
  {
    "id": 19,
    "question": "Which of the following statement best describes the concept of 'Socialism'? (TSTET 02 Jan 2025)\nకింది వాటిలో 'సోషలిజం' భావనను ఉత్తమంగా వివరించే వాక్యం ఏది?",
    "options": [
      "It calls for public and private ownership of Natural Resources\nఇది సహజ వనరుల ప్రభుత్వ మరియు ప్రైవేట్ యాజమాన్యాన్ని కోరుతుంది",
      "It insists upon the equal distribution of Land among all the people\nఇది ప్రజలందరికీ భూమిని సమానంగా పంపిణీ చేయాలని పట్టుబడుతుంది",
      "It calls for public ownership rather than private control of property and natural resources\nఇది ఆస్తి మరియు సహజ వనరులపై ప్రైవేట్ నియంత్రణ కంటే ప్రభుత్వ యాజమాన్యాన్ని కోరుతుంది",
      "It calls for the private ownership of the means of Production\nఇది ఉత్పత్తి సాధనాల ప్రైవేట్ యాజమాన్యాన్ని కోరుతుంది"
    ],
    "correctAnswer": 2,
    "explanation": "సోషలిజం యొక్క ప్రాథమిక సూత్రం ఉత్పత్తి సాధనాల (ఫ్యాక్టరీలు, భూమి, వనరులు) సామూహిక లేదా ప్రభుత్వ యాజమాన్యం మరియు ప్రజాస్వామ్య నియంత్రణ. ఇది ప్రైవేట్ యాజమాన్యం మరియు నియంత్రణపై ఆధారపడిన పెట్టుబడిదారీ విధానానికి భిన్నంగా ఉంటుంది."
  },
  {
    "id": 20,
    "question": "One among the following was not a member of 'Group of Ministers' formed in 2013 for the formation of Telangana? (TSTET 02 Jan 2025)\nకింది వారిలో, తెలంగాణ ఏర్పాటు కోసం 2013లో ఏర్పడిన 'మంత్రుల బృందం'లో సభ్యుడు కాని వ్యక్తి ఎవరు?",
    "options": [
      "Sushilkumar Shinde\nసుశీల్ కుమార్ షిండే",
      "Rajnath Singh\nరాజ్‌నాథ్ సింగ్",
      "P. Chidambaram\nపి. చిదంబరం",
      "M. Veerappa Moily\nఎం. వీరప్ప మొయిలీ"
    ],
    "correctAnswer": 1,
    "explanation": "మంత్రుల బృందాన్ని (GoM) అధికారంలో ఉన్న UPA ప్రభుత్వం ఏర్పాటు చేసింది. ఇందులో షిండే, చిదంబరం, మొయిలీ వంటి సీనియర్ మంత్రులు ఉన్నారు. ఆ సమయంలో రాజ్‌నాథ్ సింగ్ ప్రతిపక్ష బీజేపీ సీనియర్ నాయకుడు మరియు ఈ ప్రభుత్వ నియమిత కమిటీలో భాగం కాదు."
  },
  {
    "id": 21,
    "question": "Among the following. identify the educational reform of Salar Jung (TSTET 02 Jan 2025)\nకింది వాటిలో, సాలార్ జంగ్ యొక్క విద్యా సంస్కరణను గుర్తించండి",
    "options": [
      "To promote traditional Islamic education\nసాంప్రదాయ ఇస్లామిక్ విద్యను ప్రోత్సహించడం",
      "To Introduce Western education system\nపాశ్చాత్య విద్యా వ్యవస్థను ప్రవేశపెట్టడం",
      "To provide education to common people\nసామాన్య ప్రజలకు విద్యను అందించడం",
      "To establish military training schools\nసైనిక శిక్షణా పాఠశాలలను స్థాపించడం"
    ],
    "correctAnswer": 1,
    "explanation": "హైదరాబాద్ రాష్ట్ర ప్రధానమంత్రిగా, సాలార్ జంగ్ I ఒక ముఖ్యమైన ఆధునికీకరణకర్త. అతని సంస్కరణలలో ఒక ప్రధాన భాగం పాశ్చాత్య విద్యను ప్రవేశపెట్టడం, సమర్థవంతమైన పరిపాలనా వర్గాన్ని సృష్టించడానికి ఇంగ్లీష్ మరియు ఆధునిక విషయాలను బోధించే సంస్థలను స్థాపించడం."
  },
  {
    "id": 22,
    "question": "The first president of the All-India Muslim League was (TSTET 02 Jan 2025)\nఅఖిల భారత ముస్లిం లీగ్ మొదటి అధ్యక్షుడు",
    "options": [
      "Agakhan\nఆగాఖాన్",
      "Mohammad Ali Jinnah\nమహ్మద్ అలీ జిన్నా",
      "Nawab Khan\nనవాబ్ ఖాన్",
      "Liaquat Ali Khan\nలియాఖత్ అలీ ఖాన్"
    ],
    "correctAnswer": 0,
    "explanation": "అఖిల భారత ముస్లిం లీగ్ 1906లో స్థాపించబడింది. దీని మొదటి అధ్యక్షుడు సర్ సుల్తాన్ మహమ్మద్ షా, ఆగాఖాన్ III, ఇతను ఒక ప్రముఖ నాయకుడు మరియు బ్రిటిష్ ఇండియాలో ముస్లింల ప్రారంభ రాజకీయ సమీకరణలో కీలక పాత్ర పోషించారు."
  },
  {
    "id": 23,
    "question": "In this theory. Dadabhai Naoroji expounded how the vast amount of wealth was taken away from India by the British (TSTET 02 Jan 2025)\nఈ సిద్ధాంతంలో, దాదాభాయ్ నౌరోజీ భారతదేశం నుండి బ్రిటిష్ వారు ఎంత భారీ మొత్తంలో సంపదను దోచుకున్నారో వివరించారు",
    "options": [
      "Drain Theory\nడ్రెయిన్ సిద్ధాంతం (సంపద తరలింపు సిద్ధాంతం)",
      "Demand Theory\nడిమాండ్ సిద్ధాంతం",
      "Supply Theory\nసరఫరా సిద్ధాంతం",
      "Economic Growth Theory\nఆర్థిక వృద్ధి సిద్ధాంతం"
    ],
    "correctAnswer": 0,
    "explanation": "దాదాభాయ్ నౌరోజీ తన 'పావర్టీ అండ్ అన్-బ్రిటిష్ రూల్ ఇన్ ఇండియా' అనే పుస్తకంలో 'డ్రెయిన్ సిద్ధాంతం'ను ప్రతిపాదించారు. ఇది దోపిడీతో కూడిన ఆర్థిక విధానాలు, జీతాలు మరియు పెన్షన్ల ద్వారా బ్రిటన్ భారతదేశం నుండి సంపదను క్రమపద్ధతిలో తరలించుకుపోతోందని, ఇది భారతదేశం యొక్క పేదరికానికి దారితీసిందని వాదించింది."
  },
  {
    "id": 24,
    "question": "The primary principle of establishing 'the Ramakrishna Mission' was (TSTET 02 Jan 2025)\n'రామకృష్ణ మిషన్' స్థాపన యొక్క ప్రాథమిక సూత్రం",
    "options": [
      "Promoting political independence to India\nభారతదేశానికి రాజకీయ స్వాతంత్ర్యాన్ని ప్రోత్సహించడం",
      "Service to man is Service to God\nమానవ సేవయే మాధవ సేవ",
      "to propagate Hinduism with the slogan 'Go back to Veda'\n'వేదాలకు తరలిపొండి' అనే నినాదంతో హిందూ మతాన్ని ప్రచారం చేయడం",
      "To undertake Religious conversions\nమత మార్పిడులు చేపట్టడం"
    ],
    "correctAnswer": 1,
    "explanation": "స్వామి వివేకానంద స్థాపించిన రామకృష్ణ మిషన్ యొక్క ప్రధాన భావజాలం శ్రీ రామకృష్ణుని బోధనలపై ఆధారపడి ఉంది, ఇది మానవత్వానికి సేవ చేయడం దేవుడిని పూజించే మార్గం అని నొక్కి చెబుతుంది. దీని నినాదం 'ఆత్మనో మోక్షార్థం జగత్ హితాయ చ' (ఒకరి స్వంత మోక్షం కోసం మరియు ప్రపంచ సంక్షేమం కోసం)."
  },
  {
    "id": 25,
    "question": "Queen Victoria's 'Proclamation' of 1858 aimed at (TSTET 02 Jan 2025)\nవిక్టోరియా రాణి 1858 'ప్రకటన' యొక్క లక్ష్యం",
    "options": [
      "Establishment of railways in India\nభారతదేశంలో రైల్వేల స్థాపన",
      "Establishment of schools for Indians\nభారతీయుల కోసం పాఠశాలల స్థాపన",
      "The transition of power from East India Company rule to direct British rule\nఈస్ట్ ఇండియా కంపెనీ పాలన నుండి ప్రత్యక్ష బ్రిటిష్ పాలనకు అధికార మార్పిడి",
      "Promotion of agriculture and reducing taxes\nవ్యవసాయాన్ని ప్రోత్సహించడం మరియు పన్నులను తగ్గించడం"
    ],
    "correctAnswer": 2,
    "explanation": "1857 తిరుగుబాటు తర్వాత, బ్రిటిష్ ప్రభుత్వం 1858 భారత ప్రభుత్వ చట్టాన్ని ఆమోదించింది. విక్టోరియా రాణి ప్రకటన అధికారికంగా ఈస్ట్ ఇండియా కంపెనీ పాలన ముగింపును మరియు భారతదేశ పాలనను నేరుగా బ్రిటిష్ క్రౌన్‌కు బదిలీ చేయడాన్ని ప్రకటించింది."
  },
  {
    "id": 26,
    "question": "Which of the following territory was primarily controlled by the French East India Company in India? (TSTET 02 Jan 2025)\nకింది వాటిలో ఏ ప్రాంతం ప్రధానంగా భారతదేశంలో ఫ్రెంచ్ ఈస్ట్ ఇండియా కంపెనీచే నియంత్రించబడింది?",
    "options": [
      "Goa\nగోవా",
      "Bengal\nబెంగాల్",
      "Pondicherry\nపాండిచ్చేరి",
      "Chinsura\nచిన్సురా"
    ],
    "correctAnswer": 2,
    "explanation": "పాండిచ్చేరి (ప్రస్తుతం పుదుచ్చేరి) ఫ్రెంచ్ ఇండియా యొక్క రాజధాని మరియు ప్రధాన నివాస స్థలం. వారికి ఇతర వాణిజ్య కేంద్రాలు ఉన్నప్పటికీ, పాండిచ్చేరి ఫ్రెంచ్ ఈస్ట్ ఇండియా కంపెనీకి పరిపాలనా ప్రధాన కార్యాలయంగా పనిచేసింది."
  },
  {
    "id": 27,
    "question": "The purpose of the Preamble of the Indian Constitution is (TSTET 02 Jan 2025)\nభారత రాజ్యాంగ పీఠిక యొక్క ఉద్దేశ్యం",
    "options": [
      "To outline the structure of the Government\nప్రభుత్వ నిర్మాణాన్ని వివరించడం",
      "To state the objectives of the constitution\nరాజ్యాంగం యొక్క లక్ష్యాలను పేర్కొనడం",
      "To list out the fundamental Rights of the citizen\nపౌరుడి ప్రాథమిక హక్కులను జాబితా చేయడం",
      "To declare India as a welfare state\nభారతదేశాన్ని సంక్షేమ రాజ్యంగా ప్రకటించడం"
    ],
    "correctAnswer": 1,
    "explanation": "పీఠిక ఒక పరిచయంగా పనిచేస్తుంది మరియు రాజ్యాంగం యొక్క తత్వశాస్త్రం మరియు ప్రాథమిక విలువలను వ్యక్తపరుస్తుంది. ఇది పౌరులందరికీ న్యాయం, స్వేచ్ఛ, సమానత్వం మరియు సౌభ్రాతృత్వాన్ని భద్రపరచడం అనే ప్రధాన లక్ష్యాలను నిర్దేశిస్తుంది మరియు భారతదేశాన్ని సార్వభౌమ, సామ్యవాద, లౌకిక మరియు ప్రజాస్వామ్య గణతంత్ర రాజ్యంగా ప్రకటిస్తుంది."
  },
  {
    "id": 28,
    "question": "The principles 'Liberty, Equality and Fraternity' were adapted by the Indian Constitution from the constitution of this country (TSTET 02 Jan 2025)\n'స్వేచ్ఛ, సమానత్వం మరియు సౌభ్రాతృత్వం' అనే సూత్రాలను భారత రాజ్యాంగం ఈ దేశ రాజ్యాంగం నుండి స్వీకరించింది",
    "options": [
      "France\nఫ్రాన్స్",
      "England\nఇంగ్లాండ్",
      "Ireland\nఐర్లాండ్",
      "United States of America\nయునైటెడ్ స్టేట్స్ ఆఫ్ అమెరికా"
    ],
    "correctAnswer": 0,
    "explanation": "భారత రాజ్యాంగ పీఠికలో పొందుపరచబడిన స్వేచ్ఛ, సమానత్వం మరియు సౌభ్రాతృత్వం యొక్క ఆదర్శాలు ఫ్రెంచ్ విప్లవం (1789-1799) నుండి తీసుకోబడ్డాయి, దీని నినాదం 'లిబర్టే, ఈగాలిటే, ఫ్రాటర్నిటే'."
  },
  {
    "id": 29,
    "question": "In India, the Union Council of Ministers is responsible only to the (TSTET 02 Jan 2025)\nభారతదేశంలో, కేంద్ర మంత్రిమండలి కేవలం దీనికి మాత్రమే బాధ్యత వహిస్తుంది",
    "options": [
      "Lok Sabha and Rajya Sabha\nలోక్‌సభ మరియు రాజ్యసభ",
      "Lok Sabha\nలోక్‌సభ",
      "Rajya Sabha\nరాజ్యసభ",
      "Lok Sabha, Rajya Sabha and State Legislative Assemblies of all States and Union Territories\nలోక్‌సభ, రాజ్యసభ మరియు అన్ని రాష్ట్రాలు, కేంద్రపాలిత ప్రాంతాల రాష్ట్ర శాసనసభలు"
    ],
    "correctAnswer": 1,
    "explanation": "భారత రాజ్యాంగంలోని ఆర్టికల్ 75(3) స్పష్టంగా 'మంత్రిమండలి సమిష్టిగా ప్రజా సభకు (లోక్‌సభకు) బాధ్యత వహిస్తుంది' అని పేర్కొంది. ఈ సామూహిక బాధ్యత సూత్రం భారతదేశంలో పార్లమెంటరీ ప్రజాస్వామ్యానికి పునాది."
  },
  {
    "id": 30,
    "question": "Study the given statements and choose the correct statements. A) The chief administrative organ of the United Nations Organisation is the Secretariat. B) The Secretariat is headed by the Secretary General who is appointed for a term of five years by the General Assembly on the recommendations of the Security Council. C) The main function of the Secretariat is to execute the decisions of the main organs and the specialised agencies of the United Nations Organisation. (TSTET 02 Jan 2025)\nఇచ్చిన వాక్యాలను అధ్యయనం చేసి సరైన వాక్యాలను ఎంచుకోండి. A) ఐక్యరాజ్యసమితి యొక్క ప్రధాన పరిపాలనా అంగం సెక్రటేరియట్. B) సెక్రటేరియట్‌కు సెక్రటరీ జనరల్ నాయకత్వం వహిస్తారు, అతను భద్రతా మండలి సిఫార్సులపై సాధారణ సభచే ఐదేళ్ల కాలానికి నియమించబడతాడు. C) సెక్రటేరియట్ యొక్క ప్రధాన విధి ఐక్యరాజ్యసమితి యొక్క ప్రధాన అంగాలు మరియు ప్రత్యేక ఏజెన్సీల నిర్ణయాలను అమలు చేయడం.",
    "options": [
      "A, B & C",
      "B & C only\nB & C మాత్రమే",
      "A & C only\nA & C మాత్రమే",
      "A & B only\nA & B మాత్రమే"
    ],
    "correctAnswer": 0,
    "explanation": "మూడు వాక్యాలు సరైనవే. సెక్రటేరియట్ UN యొక్క పరిపాలనా విభాగం (A), భద్రతా మండలి మరియు సాధారణ సభతో కూడిన ఒక నిర్దిష్ట ప్రక్రియ ద్వారా ఐదేళ్ల కాలానికి నియమించబడిన సెక్రటరీ-జనరల్ నేతృత్వంలో ఉంటుంది (B). దీని ప్రధాన విధి UN యొక్క ఇతర ప్రధాన అంగాల నిర్ణయాలు మరియు ఆదేశాలను అమలు చేయడం (C)."
  },
  {
    "id": 31,
    "question": "The Directive Principles of the Indian Constitution Contain A) the goals and objectives that we as a society should adopt B) certain rights that individuals should enjoy apart from the Fundamental Rights C) certain policies that the government should adopt (TSTET 02 Jan 2025)\nభారత రాజ్యాంగంలోని ఆదేశిక సూత్రాలు వీటిని కలిగి ఉంటాయి A) ఒక సమాజంగా మనం అనుసరించాల్సిన లక్ష్యాలు మరియు ఆశయాలు B) ప్రాథమిక హక్కులతో పాటు వ్యక్తులు అనుభవించాల్సిన కొన్ని హక్కులు C) ప్రభుత్వం అనుసరించాల్సిన కొన్ని విధానాలు",
    "options": [
      "A & B only\nA & B మాత్రమే",
      "A only\nA మాత్రమే",
      "A, B & C",
      "B & C only\nB & C మాత్రమే"
    ],
    "correctAnswer": 2,
    "explanation": "రాష్ట్ర విధాన ఆదేశిక సూత్రాలు (DPSP) ఒక సమగ్ర మార్గదర్శకాల సమితి. అవి దీర్ఘకాలిక సామాజిక లక్ష్యాలు (A), వ్యక్తుల కోసం న్యాయబద్ధం కాని హక్కులు (B), మరియు ఒక న్యాయమైన మరియు సంక్షేమ-ఆధారిత రాష్ట్రాన్ని సృష్టించడానికి ప్రభుత్వం అనుసరించాల్సిన నిర్దిష్ట విధానాలను (C) కలిగి ఉంటాయి."
  },
  {
    "id": 32,
    "question": "Who is responsible for deciding any disputes or doubts that arise during the election process of the President of India? (TSTET 02 Jan 2025)\nభారత రాష్ట్రపతి ఎన్నికల ప్రక్రియలో తలెత్తే ఏవైనా వివాదాలు లేదా సందేహాలను పరిష్కరించడానికి ఎవరు బాధ్యత వహిస్తారు?",
    "options": [
      "The Union Council of Ministers\nకేంద్ర మంత్రిమండలి",
      "The Election Commission of India\nభారత ఎన్నికల సంఘం",
      "The Supreme Court of India\nభారత సుప్రీం కోర్టు",
      "The Cabinet sub-committee\nకేబినెట్ ఉపసంఘం"
    ],
    "correctAnswer": 2,
    "explanation": "రాజ్యాంగంలోని ఆర్టికల్ 71(1) ప్రకారం, రాష్ట్రపతి లేదా ఉపరాష్ట్రపతి ఎన్నికలకు సంబంధించి తలెత్తే అన్ని సందేహాలు మరియు వివాదాలను భారత సుప్రీం కోర్టు విచారించి నిర్ణయిస్తుంది, మరియు దాని నిర్ణయమే అంతిమమైనది."
  },
  {
    "id": 33,
    "question": "Among the following, the states having bicameral legislatures (State Legislative Assembly and State Legislative Council) are (TSTET 02 Jan 2025)\nకింది వాటిలో, ద్విసభ శాసనసభలు (రాష్ట్ర శాసనసభ మరియు రాష్ట్ర శాసన మండలి) ఉన్న రాష్ట్రాలు",
    "options": [
      "Madhya Pradesh, Telangana, Andhra Pradesh, Tamil Nadu\nమధ్యప్రదేశ్, తెలంగాణ, ఆంధ్రప్రదేశ్, తమిళనాడు",
      "Uttar Pradesh, Telangana, Andhra Pradesh, Bihar\nఉత్తరప్రదేశ్, తెలంగాణ, ఆంధ్రప్రదేశ్, బీహార్",
      "Tamil Nadu, Telangana, Andhra Pradesh, Chattisgarh\nతమిళనాడు, తెలంగాణ, ఆంధ్రప్రదేశ్, ఛత్తీస్‌గఢ్",
      "Rajasthan, Telangana, Andhra Pradesh, Gujarat\nరాజస్థాన్, తెలంగాణ, ఆంధ్రప్రదేశ్, గుజరాత్"
    ],
    "correctAnswer": 1,
    "explanation": "2024 నాటికి, ఆరు భారతీయ రాష్ట్రాలలో ద్విసభ శాసనసభ (రెండు సభలు) ఉంది: ఆంధ్రప్రదేశ్, బీహార్, కర్ణాటక, మహారాష్ట్ర, తెలంగాణ మరియు ఉత్తరప్రదేశ్. ఎంపిక 2 లోని సమూహం ఈ రాష్ట్రాలలో నాలుగింటిని సరిగ్గా జాబితా చేస్తుంది."
  },
  {
    "id": 34,
    "question": "Judges of the Supreme Court can be removed by the President from their position only on the ground of (TSTET 02 Jan 2025)\nసుప్రీం కోర్టు న్యాయమూర్తులను రాష్ట్రపతి వారి పదవి నుండి కేవలం ఈ కారణంపై మాత్రమే తొలగించగలరు",
    "options": [
      "Proved misbehaviour or incapacity\nనిరూపితమైన దుష్ప్రవర్తన లేదా అసమర్థత",
      "Showing discrimination in the workplace\nపని ప్రదేశంలో వివక్ష చూపడం",
      "Improper interpretation of the Indian constitution\nభారత రాజ్యాంగాన్ని సరిగా వ్యాఖ్యానించకపోవడం",
      "Making unnecessary financial allegations against the government\nప్రభుత్వంపై అనవసరమైన ఆర్థిక ఆరోపణలు చేయడం"
    ],
    "correctAnswer": 0,
    "explanation": "రాజ్యాంగంలోని ఆర్టికల్ 124(4) ప్రకారం, సుప్రీం కోర్టు న్యాయమూర్తిని నిరూపితమైన దుష్ప్రవర్తన లేదా అసమర్థత కారణంపై, పార్లమెంటు ప్రసంగం తర్వాత, ప్రతి సభ యొక్క ప్రత్యేక మెజారిటీతో మద్దతు పొందిన రాష్ట్రపతి ఆదేశం ద్వారా మాత్రమే తొలగించగలరు."
  },
  {
    "id": 35,
    "question": "One among the following is NOT a Child Right as per UNO's Charter on Child Rights, 1989 (TSTET 02 Jan 2025)\nకింది వాటిలో ఒకటి, 1989 నాటి UNO బాలల హక్కుల చార్టర్ ప్రకారం బాలల హక్కు కాదు",
    "options": [
      "Right to use English as a medium of Instruction in all schools compulsorily\nఅన్ని పాఠశాలల్లో బోధనా మాధ్యమంగా ఇంగ్లీషును తప్పనిసరిగా ఉపయోగించుకునే హక్కు",
      "Right to have good health and get medical care\nమంచి ఆరోగ్యం మరియు వైద్య సంరక్షణ పొందే హక్కు",
      "Right to get help when neglected and suffering\nనిర్లక్ష్యానికి గురై, బాధపడుతున్నప్పుడు సహాయం పొందే హక్కు",
      "Right to get protection from harmful medicines\nహానికరమైన మందుల నుండి రక్షణ పొందే హక్కు"
    ],
    "correctAnswer": 0,
    "explanation": "UN బాలల హక్కుల సమావేశం ఆరోగ్యం మరియు రక్షణతో సహా విస్తృత శ్రేణి హక్కుల కోసం వాదిస్తుంది. ఇది ఏ నిర్దిష్ట బోధనా భాషను తప్పనిసరి చేయదు; బదులుగా, సాంస్కృతిక గుర్తింపును ప్రోత్సహించడానికి వీలైనంత వరకు పిల్లల సొంత భాషలో విద్యను ప్రోత్సహిస్తుంది."
  },
  {
    "id": 36,
    "question": "Identify the true statement regarding 'the demand deposit' (TSTET 02 Jan 2025)\n'డిమాండ్ డిపాజిట్'కు సంబంధించి సరైన వాక్యాన్ని గుర్తించండి",
    "options": [
      "A type of investment account with high returns\nఅధిక రాబడితో కూడిన ఒక రకమైన పెట్టుబడి ఖాతా",
      "A deposit that is only accessible through a bank's ATM\nకేవలం బ్యాంకు ఏటీఎం ద్వారా మాత్రమే అందుబాటులో ఉండే డిపాజిట్",
      "A deposit that can be withdrawn on demand\nడిమాండ్ చేసినప్పుడు ఉపసంహరించుకోగల డిపాజిట్",
      "A long-term savings account with penalties for early withdrawal\nముందస్తు ఉపసంహరణకు జరిమానాలతో కూడిన దీర్ఘకాలిక పొదుపు ఖాతా"
    ],
    "correctAnswer": 2,
    "explanation": "డిమాండ్ డిపాజిట్ అనేది ఒక రకమైన బ్యాంకు ఖాతా, ఉదాహరణకు చెకింగ్ లేదా సేవింగ్స్ ఖాతా, దీని నుండి నిధులను ఎప్పుడైనా ('డిమాండ్‌పై') బ్యాంకుకు ఎటువంటి ముందస్తు నోటీసు లేకుండా ఉపసంహరించుకోవచ్చు. అవి అత్యంత ద్రవ్యతను కలిగి ఉంటాయి."
  },
  {
    "id": 37,
    "question": "From the following statements, identify the true statement regarding the role of Reserve Bank of India in the banking system (TSTET 02 Jan 2025)\nకింది వాక్యాల నుండి, బ్యాంకింగ్ వ్యవస్థలో రిజర్వ్ బ్యాంక్ ఆఫ్ ఇండియా పాత్రకు సంబంధించి సరైన వాక్యాన్ని గుర్తించండి",
    "options": [
      "It supervises the banking system and issues guidelines\nఇది బ్యాంకింగ్ వ్యవస్థను పర్యవేక్షిస్తుంది మరియు మార్గదర్శకాలను జారీ చేస్తుంది",
      "It issues currency notes and coins directly to the public\nఇది నేరుగా ప్రజలకు కరెన్సీ నోట్లు మరియు నాణేలను జారీ చేస్తుంది",
      "It provides loans to individual customers\nఇది వ్యక్తిగత వినియోగదారులకు రుణాలు అందిస్తుంది",
      "It manages the investments of private banks\nఇది ప్రైవేట్ బ్యాంకుల పెట్టుబడులను నిర్వహిస్తుంది"
    ],
    "correctAnswer": 0,
    "explanation": "భారతీయ రిజర్వ్ బ్యాంక్ (RBI) దేశం యొక్క కేంద్ర బ్యాంకు మరియు నియంత్రణ సంస్థ. వాణిజ్య బ్యాంకులు మరియు ఆర్థిక సంస్థల పనితీరును పర్యవేక్షించడం మరియు బ్యాంకింగ్ వ్యవస్థలో స్థిరత్వం మరియు ప్రజల విశ్వాసాన్ని నిర్ధారించడానికి మార్గదర్శకాలను నిర్దేశించడం దీని ప్రాథమిక విధి."
  },
  {
    "id": 38,
    "question": "One of the following is NOT taken into consideration to measure Wholesale Price Index (WPI) (TSTET 02 Jan 2025)\nటోకు ధరల సూచీ (WPI)ని కొలవడానికి కింది వాటిలో ఒకటి పరిగణనలోకి తీసుకోబడదు",
    "options": [
      "All capital goods\nఅన్ని మూలధన వస్తువులు",
      "All consumer goods\nఅన్ని వినియోగ వస్తువులు",
      "a few selected consumer goods at the retail price\nచిల్లర ధర వద్ద కొన్ని ఎంపిక చేసిన వినియోగ వస్తువులు",
      "All capital goods and consumer goods and changes in their wholesale rates\nఅన్ని మూలధన మరియు వినియోగ వస్తువులు మరియు వాటి టోకు రేట్లలో మార్పులు"
    ],
    "correctAnswer": 2,
    "explanation": "టోకు ధరల సూచీ (WPI) వ్యాపారాల మధ్య వర్తకం చేయబడిన వస్తువుల స్థాయిలో, అంటే, టోకు దశలో ద్రవ్యోల్బణాన్ని కొలుస్తుంది. ఇది సేవల ధరలను లేదా వినియోగదారులు చెల్లించే తుది చిల్లర ధరలను చేర్చదు, ఇవి వినియోగదారుల ధరల సూచీ (CPI) ద్వారా సంగ్రహించబడతాయి."
  },
  {
    "id": 39,
    "question": "This was introduced by the Indian government in 2009 to track food inflation trends (TSTET 02 Jan 2025)\nఆహార ద్రవ్యోల్బణ ధోరణులను గమనించడానికి భారత ప్రభుత్వం 2009లో దీనిని ప్రవేశపెట్టింది",
    "options": [
      "Agricultural Price Index (API)\nవ్యవసాయ ధరల సూచీ (API)",
      "Wholesale Price Index (WPI)\nటోకు ధరల సూచీ (WPI)",
      "Food Price Index (FPI)\nఆహార ధరల సూచీ (FPI)",
      "Consumer Price Index (CPI)\nవినియోగదారుల ధరల సూచీ (CPI)"
    ],
    "correctAnswer": 2,
    "explanation": "ఆహార పదార్థాల ధరలలో తీవ్రమైన హెచ్చుతగ్గులను ప్రత్యేకంగా పర్యవేక్షించడానికి, ప్రభుత్వం ఒక ప్రత్యేక ఆహార ధరల సూచీని (FPI) ప్రవేశపెట్టింది. ఇది ఆహార ద్రవ్యోల్బణాన్ని నిశితంగా గమనించడంలో మరియు సకాలంలో విధానపరమైన జోక్యాలను రూపొందించడంలో సహాయపడుతుంది."
  },
  {
    "id": 40,
    "question": "According to the United Nations Development Programme, these people have migrated to countries such as USA, Canada, UK and other developed countries from India (TSTET 02 Jan 2025)\nఐక్యరాజ్యసమితి అభివృద్ధి కార్యక్రమం ప్రకారం, ఈ వ్యక్తులు భారతదేశం నుండి USA, కెనడా, UK మరియు ఇతర అభివృద్ధి చెందిన దేశాలకు వలస వెళ్లారు",
    "options": [
      "Unskilled workers\nనైపుణ్యం లేని కార్మికులు",
      "People with Technical skills and professional expertise\nసాంకేతిక నైపుణ్యాలు మరియు వృత్తిపరమైన నైపుణ్యం ఉన్న వ్యక్తులు",
      "Semi-skilled workers\nపాక్షిక నైపుణ్యం ఉన్న కార్మికులు",
      "People in teaching profession\nబోధనా వృత్తిలో ఉన్న వ్యక్తులు"
    ],
    "correctAnswer": 1,
    "explanation": "భారతదేశం నుండి అభివృద్ధి చెందిన పాశ్చాత్య దేశాలకు వలస వెళ్ళడం అనేది వైద్యులు, ఇంజనీర్లు, శాస్త్రవేత్తలు మరియు ఐటీ నిపుణులతో సహా అత్యంత నైపుణ్యం కలిగిన నిపుణుల కదలిక ద్వారా వర్గీకరించబడుతుంది. ఈ దృగ్విషయాన్ని తరచుగా 'బ్రెయిన్ డ్రెయిన్' (మేధోవలస) అని పిలుస్తారు."
  },
  {
    "id": 41,
    "question": "The primary objective of the PM Jan Dhan Yojana is (TSTET 02 Jan 2025)\nప్రధాన మంత్రి జన్ ధన్ యోజన యొక్క ప్రాథమిక లక్ష్యం",
    "options": [
      "To ensure every household has access to luxury goods\nప్రతి కుటుంబానికి విలాసవంతమైన వస్తువులు అందుబాటులో ఉండేలా చూడటం",
      "To promote foreign investment in India\nభారతదేశంలో విదేశీ పెట్టుబడులను ప్రోత్సహించడం",
      "To increase the number of ATMs in urban areas\nపట్టణ ప్రాంతాల్లో ఏటీఎంల సంఖ్యను పెంచడం",
      "To achieve financial inclusion for poor households\nపేద కుటుంబాలకు ఆర్థిక చేరికను సాధించడం"
    ],
    "correctAnswer": 3,
    "explanation": "ప్రధాన మంత్రి జన్ ధన్ యోజన (PMJDY) అనేది ఆర్థిక చేరికపై ఒక జాతీయ మిషన్. దీని ప్రధాన లక్ష్యం అన్ని కుటుంబాలు, ముఖ్యంగా తక్కువ-ఆదాయ వర్గాలకు చెందినవి, బ్యాంకు ఖాతాలు, రుణాలు, బీమా మరియు పెన్షన్ల వంటి ప్రాథమిక ఆర్థిక సేవలను పొందేలా చూడటం."
  },
  {
    "id": 42,
    "question": "Among the following, identify the correct statement regarding 'Solar Insolation' in the month of March (TSTET 02 Jan 2025)\nకింది వాటిలో, మార్చి నెలలో 'సౌర వికిరణం' (సోలార్ ఇన్సోలేషన్) గురించి సరైన వాక్యాన్ని గుర్తించండి",
    "options": [
      "The amount of Solar Insolation increases from the equator towards the poles\nసౌర వికిరణం మొత్తం భూమధ్యరేఖ నుండి ధ్రువాల వైపుకు పెరుగుతుంది",
      "The amount of Solar Insolation decreases from the equator towards the poles\nసౌర వికిరణం మొత్తం భూమధ్యరేఖ నుండి ధ్రువాల వైపుకు తగ్గుతుంది",
      "The amount of solar Insolation remains the same throughout the globe\nసౌర వికిరణం మొత్తం ప్రపంచవ్యాప్తంగా ఒకే విధంగా ఉంటుంది",
      "The amount of Solar Insolation is highest at the poles and the lowest at the tropic of Cancer\nసౌర వికిరణం ధ్రువాల వద్ద అత్యధికంగా మరియు కర్కాటక రేఖ వద్ద అత్యల్పంగా ఉంటుంది"
    ],
    "correctAnswer": 1,
    "explanation": "భూమి యొక్క వక్రత కారణంగా, సూర్యకిరణాలు భూమధ్యరేఖ వద్ద అత్యంత నిటారుగా ఉండి ధ్రువాల వైపుకు మరింత ఏటవాలుగా మారతాయి. ఇది యూనిట్ ప్రాంతానికి సౌరశక్తి మొత్తం (ఇన్సోలేషన్) భూమధ్యరేఖ దగ్గర అత్యధికంగా ఉండి ధ్రువాల వైపుకు క్రమంగా తగ్గడానికి కారణమవుతుంది. ఈ సాధారణ నమూనా మార్చిలో కూడా వర్తిస్తుంది."
  },
  {
    "id": 43,
    "question": "Which of the following is NOT the violation of Fundamental Right? (TSTET 02 Jan 2025)\nకింది వాటిలో ఏది ప్రాథమిక హక్కు ఉల్లంఘన కాదు?",
    "options": [
      "Employing the child below the age of 14 years in the factory\n14 సంవత్సరాల కంటే తక్కువ వయస్సు ఉన్న పిల్లలను ఫ్యాక్టరీలో పనిలో పెట్టుకోవడం",
      "Arresting the person and not informing the grounds for his arrest\nవ్యక్తిని అరెస్టు చేసి, అతని అరెస్టుకు గల కారణాలను తెలియజేయకపోవడం",
      "Restricting the person to reside and settle in any part of the territory of India\nభారతదేశ భూభాగంలో ఏ ప్రాంతంలోనైనా నివసించడానికి మరియు స్థిరపడటానికి వ్యక్తిని పరిమితం చేయడం",
      "Allowing the citizens to express their views in many ways such as through meetings, publications etc.\nసమావేశాలు, ప్రచురణలు మొదలైన వాటి ద్వారా పౌరులు తమ అభిప్రాయాలను అనేక విధాలుగా వ్యక్తీకరించడానికి అనుమతించడం."
    ],
    "correctAnswer": 3,
    "explanation": "పౌరులను తమ అభిప్రాయాలను వ్యక్తీకరించడానికి అనుమతించడం అనేది వాక్ మరియు భావప్రకటనా స్వేచ్ఛ ప్రాథమిక హక్కు (ఆర్టికల్ 19) యొక్క వినియోగం. మిగిలిన మూడు ఎంపికలు ప్రాథమిక హక్కుల ఉల్లంఘనలను సూచిస్తాయి: దోపిడీకి వ్యతిరేకంగా హక్కు (ఆర్టికల్ 24), స్వేచ్ఛ మరియు వ్యక్తిగత స్వాతంత్ర్యం హక్కు (ఆర్టికల్ 22), మరియు సంచార స్వేచ్ఛ హక్కు (ఆర్టికల్ 19)."
  },
  {
    "id": 44,
    "question": "Among the following, identify the true statement regarding the service sector (TSTET 02 Jan 2025)\nకింది వాటిలో, సేవా రంగానికి సంబంధించి సరైన వాక్యాన్ని గుర్తించండి",
    "options": [
      "It only includes jobs that produce tangible goods\nఇది కేవలం స్పర్శించగల వస్తువులను ఉత్పత్తి చేసే ఉద్యోగాలను మాత్రమే కలిగి ఉంటుంది",
      "It does not include professionals like doctors and teachers\nఇది వైద్యులు మరియు ఉపాధ్యాయుల వంటి నిపుణులను చేర్చదు",
      "It contributes to GDP through the income earned by its constituents\nఇది దానిలోని భాగాల ద్వారా సంపాదించిన ఆదాయం ద్వారా GDPకి దోహదం చేస్తుంది",
      "It is the primary sector of the economy\nఇది ఆర్థిక వ్యవస్థ యొక్క ప్రాథమిక రంగం"
    ],
    "correctAnswer": 2,
    "explanation": "సేవా రంగం (లేదా తృతీయ రంగం) స్పర్శించగల వస్తువులకు బదులుగా సేవలను అందించే పరిశ్రమలను కలిగి ఉంటుంది. బ్యాంకింగ్ మరియు ఐటీ నుండి ఆరోగ్య సంరక్షణ మరియు విద్య వరకు ఈ అన్ని సేవల ద్వారా వచ్చే ఆదాయం ఒక దేశం యొక్క స్థూల దేశీయోత్పత్తికి (GDP) ప్రధాన దోహదకారి."
  },
  {
    "id": 45,
    "question": "This trend has been observed in developed countries over the past 50 years (TSTET 02 Jan 2025)\nగత 50 సంవత్సరాలుగా అభివృద్ధి చెందిన దేశాలలో ఈ ధోరణి గమనించబడింది",
    "options": [
      "A shift from industry to agriculture\nపరిశ్రమ నుండి వ్యవసాయానికి మార్పు",
      "A shift from industry to the service sector\nపరిశ్రమ నుండి సేవా రంగానికి మార్పు",
      "No significant changes were observed\nఎటువంటి ముఖ్యమైన మార్పులు గమనించబడలేదు",
      "A shift from the service sector to agriculture\nసేవా రంగం నుండి వ్యవసాయానికి మార్పు"
    ],
    "correctAnswer": 1,
    "explanation": "గత కొన్ని దశాబ్దాలుగా, అభివృద్ధి చెందిన దేశాల ఆర్థిక వ్యవస్థలు ఒక నిర్మాణాత్మక మార్పుకు గురయ్యాయి. తయారీ/పారిశ్రామిక రంగం యొక్క సాపేక్ష ప్రాముఖ్యత క్షీణించింది, అయితే సేవా రంగం (ఆర్థిక, ఆరోగ్య సంరక్షణ, ఐటీ, మొదలైనవి) GDP మరియు ఉపాధికి అతిపెద్ద దోహదకారిగా పెరిగింది."
  },
  {
    "id": 46,
    "question": "Among the following, identify the Important feature of GST in India (TSTET 02 Jan 2025)\nకింది వాటిలో, భారతదేశంలో GST యొక్క ముఖ్యమైన లక్షణాన్ని గుర్తించండి",
    "options": [
      "One tax for the whole country\nదేశం మొత్తం మీద ఒకే పన్ను",
      "Rate of taxation is same to all the products\nఅన్ని ఉత్పత్తులకు పన్ను రేటు ఒకే విధంగా ఉంటుంది",
      "Tax rates would differ across states\nపన్ను రేట్లు రాష్ట్రాల వారీగా భిన్నంగా ఉంటాయి",
      "All the goods are included in GST\nఅన్ని వస్తువులు GSTలో చేర్చబడ్డాయి"
    ],
    "correctAnswer": 0,
    "explanation": "భారతదేశంలో వస్తువులు మరియు సేవల పన్ను (GST) యొక్క ప్రధాన భావన 'ఒకే దేశం, ఒకే పన్ను'. ఇది అనేక కేంద్ర మరియు రాష్ట్ర పన్నులను దేశవ్యాప్తంగా వర్తించే ఒకే, ఏకీకృత పన్ను నిర్మాణంతో భర్తీ చేసింది, ఒక సాధారణ జాతీయ మార్కెట్‌ను సృష్టించింది."
  },
  {
    "id": 47,
    "question": "The primary focus of this UN Declaration is on 'Gender Equality and Empowerment of Women' is (TSTET 02 Jan 2025)\n'లింగ సమానత్వం మరియు మహిళా సాధికారత'పై ఈ UN ప్రకటన యొక్క ప్రాథమిక దృష్టి",
    "options": [
      "The UN Declaration on Social Progress and Development, 1969\nసామాజిక పురోగతి మరియు అభివృద్ధిపై UN ప్రకటన, 1969",
      "Kyoto Protocol in Japan. 1997\nజపాన్‌లో క్యోటో ప్రోటోకాల్. 1997",
      "The Beijing Declaration and Programme of Action. 1995\nబీజింగ్ ప్రకటన మరియు కార్యాచరణ కార్యక్రమం. 1995",
      "The IPCC 2015 Paris Summit\nIPCC 2015 పారిస్ శిఖరాగ్ర సమావేశం"
    ],
    "correctAnswer": 2,
    "explanation": "1995లో బీజింగ్‌లో జరిగిన నాల్గవ ప్రపంచ మహిళా సదస్సులో ఆమోదించబడిన బీజింగ్ ప్రకటన మరియు కార్యాచరణ వేదిక, ప్రపంచవ్యాప్తంగా మహిళల హక్కులు మరియు లింగ సమానత్వాన్ని ముందుకు తీసుకెళ్లడానికి ఒక మైలురాయి పత్రం. ఇది 12 కీలకమైన ఆందోళన రంగాలలో వ్యూహాత్మక లక్ష్యాలను వివరిస్తుంది."
  },
  {
    "id": 48,
    "question": "During winter in India, the cyclonic depressions coming from this sea called the Western Disturbances cause low to moderate rainfall over North India (TSTET 02 Jan 2025)\nభారతదేశంలో శీతాకాలంలో, ఈ సముద్రం నుండి వచ్చే పశ్చిమ అలజడులు అని పిలువబడే తుఫాను అల్పపీడనాలు ఉత్తర భారతదేశంపై తక్కువ నుండి మధ్యస్థ వర్షపాతానికి కారణమవుతాయి",
    "options": [
      "Caspian Sea\nకాస్పియన్ సముద్రం",
      "Arabian Sea\nఅరేబియా సముద్రం",
      "Bay of Bengal\nబంగాళాఖాతం",
      "Mediterranean Sea\nమధ్యధరా సముద్రం"
    ],
    "correctAnswer": 3,
    "explanation": "పశ్చిమ అలజడులు అనేవి మధ్యధరా సముద్రంపై ఉద్భవించే అదనపు-ఉష్ణమండల తుఫానులు. అవి ఉపఉష్ణమండల పశ్చిమ జెట్ స్ట్రీమ్‌ల ద్వారా తూర్పు వైపుకు తీసుకువెళ్లబడతాయి మరియు శీతాకాలంలో వాయువ్య భారతదేశానికి కీలకమైన రుతుపవన-రహిత వర్షపాతాన్ని (వర్షం మరియు మంచు) తీసుకువస్తాయి."
  },
  {
    "id": 49,
    "question": "Choose the correct pairs among the following related to contributions of social scientists. A) Max weber Politics as a vocation B) Karl Marx - Socialist manifesto C) Amartya Sen - Economic and Social Justice (TSTET 02 Jan 2025)\nసామాజిక శాస్త్రవేత్తల రచనలకు సంబంధించి కింది వాటిలో సరైన జతలను ఎంచుకోండి. A) మాక్స్ వెబర్ - పాలిటిక్స్ యాజ్ ఎ వొకేషన్ B) కార్ల్ మార్క్స్ - సోషలిస్ట్ మేనిఫెస్టో C) అమర్త్య సేన్ - ఆర్థిక మరియు సామాజిక న్యాయం",
    "options": [
      "A, B & C",
      "A & B only\nA & B మాత్రమే",
      "A & C only\nA & C మాత్రమే",
      "B & C only\nB & C మాత్రమే"
    ],
    "correctAnswer": 2,
    "explanation": "A సరైనది ('పాలిటిక్స్ యాజ్ ఎ వొకేషన్' వెబర్ రాసిన ప్రసిద్ధ వ్యాసం). C సరైనది (అమర్త్య సేన్ సామాజిక న్యాయం మరియు సంక్షేమ అర్థశాస్త్రంపై చేసిన కృషికి ప్రసిద్ధి చెందారు). B తప్పు; కార్ల్ మార్క్స్ 'కమ్యూనిస్ట్ మేనిఫెస్టో'ను సహ-రచించారు, 'సోషలిస్ట్ మేనిఫెస్టో'ను కాదు."
  },
  {
    "id": 50,
    "question": "The computation involving the amount of production of essential food commodities, their purchase and sales etc., reveals the co-relation between these two subjects (TSTET 02 Jan 2025)\nఅవసరమైన ఆహార వస్తువుల ఉత్పత్తి పరిమాణం, వాటి కొనుగోలు మరియు అమ్మకాలు మొదలైన వాటికి సంబంధించిన గణన, ఈ రెండు విషయాల మధ్య సహ-సంబంధాన్ని వెల్లడిస్తుంది",
    "options": [
      "Civics and Physical Science\nపౌరశాస్త్రం మరియు భౌతిక శాస్త్రం",
      "Economics and mathematics\nఅర్థశాస్త్రం మరియు గణితం",
      "History and life science\nచరిత్ర మరియు జీవ శాస్త్రం",
      "Geography and Arts\nభూగోళశాస్త్రం మరియు కళలు"
    ],
    "correctAnswer": 1,
    "explanation": "అర్థశాస్త్రం ఉత్పత్తి, వినియోగం, కొనుగోలు మరియు అమ్మకాల సూత్రాలతో వ్యవహరిస్తుంది. గణితం ఈ ఆర్థిక కార్యకలాపాల గణన, డేటా విశ్లేషణ, మోడలింగ్ మరియు పరిమాణీకరణకు సాధనాలను అందిస్తుంది, ఇది బలమైన పరస్పర సంబంధాన్ని చూపుతుంది."
  }
]


export const socialPaper2TeluguQuestions = rawSocialPaper2TeluguData.map(
  (question, index) => {
    const options = question.options ?? [];

    const normalizedCorrectAnswer =
      Number.isInteger(question.correctAnswer) &&
      question.correctAnswer >= 0 &&
      question.correctAnswer < options.length
        ? question.correctAnswer
        : 0;

    return {
      id: `TEL-SOC2-${index + 1}`,
      question: question.question ?? "",
      options,
      correctAnswer: normalizedCorrectAnswer,
      explanation: question.explanation ?? "",
    };
  },
);


export const convertSocialPaper2TeluguToQuestionFormat = (
  questions: typeof socialPaper2TeluguQuestions,
) => {
  return questions.map((question, index) => ({
    id: index + 1,
    question: question.question,
    options: question.options,
    correctAnswer: question.correctAnswer,
    explanation: question.explanation,
  }));
};
