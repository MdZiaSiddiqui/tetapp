type SocialPaper2TeluguRawQuestion = {
  id: number | string;
  question: string;
  options: string[];
  correctAnswer: number | string;
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
  },
  {
    "id": 51,
    "question": "Identify the correct statement relating to Objectives and Aims among the following (TSTET 02 Jan 2025)\nకింది వాటిలో లక్ష్యాలు మరియు ఆశయాలకు సంబంధించిన సరైన ప్రకటనను గుర్తించండి",
    "options": [
      "Both are achievable in long term\nరెండూ దీర్ఘకాలంలో సాధించగలవు",
      "Both are achievable in short term\nరెండూ స్వల్పకాలంలో సాధించగలవు",
      "Objectives are achievable in long term and aims are achievable in short term\nలక్ష్యాలు దీర్ఘకాలంలో మరియు ఆశయాలు స్వల్పకాలంలో సాధించగలవు",
      "Objectives are achievable in short term and aims are achievable in long term\nలక్ష్యాలు స్వల్పకాలంలో మరియు ఆశయాలు దీర్ఘకాలంలో సాధించగలవు"
    ],
    "correctAnswer": 3,
    "explanation": "విద్యా పరిభాషలో, 'ఆశయం' అనేది ఒక విస్తృత, దీర్ఘకాలిక ఉద్దేశ్య ప్రకటన. 'లక్ష్యం' అనేది విస్తృత ఆశయాన్ని సాధించడానికి దోహదపడే ఒక నిర్దిష్ట, కొలవగల, స్వల్పకాలిక గమ్యం. కాబట్టి, లక్ష్యాలు స్వల్పకాలికమైనవి, మరియు ఆశయాలు దీర్ఘకాలికమైనవి."
  },
  {
    "id": 52,
    "question": "The active verb 'Tabulate' is an example of remembering category in cognitive process dimension comes at this level of knowledge dimension (TSTET 02 Jan 2025)\n'పట్టిక చేయుట' అనే క్రియాశీలక క్రియ, జ్ఞాన పరిమాణం యొక్క ఈ స్థాయిలో వచ్చే γνωσానాత్మక ప్రక్రియ పరిమాణంలో గుర్తుంచుకోవడం వర్గానికి ఉదాహరణ",
    "options": [
      "Procedural knowledge\nవిధానపరమైన జ్ఞానం",
      "Factual knowledge\nవాస్తవిక జ్ఞానం",
      "Conceptual knowledge\nభావనాత్మక జ్ఞానం",
      "Metacognitive knowledge\nఅధిజ్ఞానాత్మక జ్ఞానం"
    ],
    "correctAnswer": 1,
    "explanation": "సవరించిన బ్లూమ్ యొక్క వర్గీకరణ ప్రకారం, 'పట్టిక చేయుట' అనేది 'గుర్తుంచుకోవడం' అనే γνωσానాత్మక ప్రక్రియ కిందకు వస్తుంది. ఇది ఒక పట్టిక రూపంలో నిర్దిష్ట సమాచారం లేదా డేటా (వాస్తవాలు) ముక్కలను నిర్వహించడం మరియు ప్రదర్శించడం కలిగి ఉంటుంది, ఇది 'వాస్తవిక జ్ఞానం' పరిమాణంతో సరిపోతుంది."
  },
  {
    "id": 53,
    "question": "'Collect the pictures of leaders of Telangana Armed Struggle' is an activity aimed at achievement of this academic standard. (TSTET 02 Jan 2025)\n'తెలంగాణ సాయుధ పోరాట నాయకుల చిత్రాలను సేకరించండి' అనేది ఈ విద్యా ప్రమాణాన్ని సాధించడం లక్ష్యంగా చేసుకున్న ఒక కార్యాచరణ.",
    "options": [
      "Conceptual understanding\nభావనాత్మక అవగాహన",
      "Information gathering Skills\nసమాచార సేకరణ నైపుణ్యాలు",
      "Mapping Skills\nపట నైపుణ్యాలు",
      "Appreciation and sensitivity\nప్రశంస మరియు సున్నితత్వం"
    ],
    "correctAnswer": 1,
    "explanation": "ఈ కార్యాచరణకు విద్యార్థులు వివిధ మూలాల నుండి నిర్దిష్ట డేటాను (చిత్రాలను) వెతకడం, గుర్తించడం, ఎంచుకోవడం మరియు సేకరించడం అవసరం. ఇది నేరుగా సమాచార సేకరణ మరియు సంస్థాగత నైపుణ్యాల అభివృద్ధి మరియు అభ్యాసాన్ని లక్ష్యంగా చేసుకుంటుంది."
  },
  {
    "id": 54,
    "question": "National Curriculum Framework (NCF) 2005 focussed on the following elements regarding construction of social science curriculum. A) Content Load B) Global Content C) Normative duties D) Inter relationship among disciplines (TSTET 02 Jan 2025)\nజాతీయ పాఠ్యప్రణాళిక చట్రం (NCF) 2005 సాంఘిక శాస్త్ర పాఠ్యప్రణాళిక నిర్మాణంに関して కింది అంశాలపై దృష్టి సారించింది. A) విషయ భారం B) ప్రపంచ విషయాలు C) ప్రమాణిక విధులు D) విభాగాల మధ్య పరస్పర సంబంధం",
    "options": [
      "A, B, C & D",
      "A, B & C only\nA, B & C మాత్రమే",
      "A, C & D only\nA, C & D మాత్రమే",
      "B, C & D only\nB, C & D మాత్రమే"
    ],
    "correctAnswer": 0,
    "explanation": "NCF 2005 సాంఘిక శాస్త్రాల కోసం ఒక సమగ్ర విధానాన్ని సిఫార్సు చేసింది, ఇందులో: విషయ భారాన్ని తగ్గించడం (A), ప్రపంచ దృక్కోణాలను చేర్చడం (B), న్యాయం మరియు సమానత్వం వంటి ప్రమాణిక సమస్యలపై విమర్శనాత్మక ఆలోచనను పెంపొందించడం (C), మరియు అంతర విభాగ సంబంధాలను ప్రోత్సహించడం (D) వంటి వాటికి ప్రాధాన్యత ఇవ్వబడింది."
  },
  {
    "id": 55,
    "question": "A teacher appointed shall maintain regularity and punctuality in attending school' it is mentioned in this section of Right to Education Act (RTE) - 2009 (TSTET 02 Jan 2025)\n'నియమించబడిన ఉపాధ్యాయుడు పాఠశాలకు హాజరు కావడంలో క్రమబద్ధత మరియు సమయపాలన పాటించాలి' అని విద్యా హక్కు చట్టం (RTE) - 2009లోని ఈ సెక్షన్‌లో పేర్కొనబడింది",
    "options": [
      "Section - 22(1)\nసెక్షన్ - 22(1)",
      "Section - 23(1)\nసెక్షన్ - 23(1)",
      "Section - 24(1) (a)\nసెక్షన్ - 24(1) (a)",
      "Section 29(2) (a)\nసెక్షన్ 29(2) (a)"
    ],
    "correctAnswer": 2,
    "explanation": "విద్యా హక్కు చట్టం, 2009లోని సెక్షన్ 24 ఉపాధ్యాయుల విధులను వివరిస్తుంది. ప్రత్యేకంగా, ఈ సెక్షన్‌లోని క్లాజ్ (1)(ఎ) ఉపాధ్యాయులు 'పాఠశాలకు హాజరు కావడంలో క్రమబద్ధత మరియు సమయపాలన పాటించాలి' అని నిర్దేశిస్తుంది."
  },
  {
    "id": 56,
    "question": "Match the following related to theme specific maps. Part-A: A) Bethymetric maps, B) Ethnographical maps, C) Vegetation maps. Part-B: i) reveals distribution of different human races in the world, ii) reveal distribution of different crops, iii) reveal depth of a sea. (TSTET 02 Jan 2025)\nథీమ్ నిర్దిష్ట పటాలకు సంబంధించిన కింది వాటిని జతపరచండి. పార్ట్-A: A) బెథైమెట్రిక్ పటాలు, B) ఎథ్నోగ్రాఫికల్ పటాలు, C) వృక్షసంపద పటాలు. పార్ట్-B: i) ప్రపంచంలోని వివిధ మానవ జాతుల పంపిణీని వెల్లడిస్తుంది, ii) వివిధ పంటల పంపిణీని వెల్లడిస్తుంది, iii) సముద్రం యొక్క లోతును వెల్లడిస్తుంది.",
    "options": [
      "A-i; B-ii; C-iii",
      "A-ii; B-i; C-iii",
      "A-iii; B-i; C-ii",
      "A-iii; B-ii; C-i"
    ],
    "correctAnswer": 2,
    "explanation": "సరైన జతలు: A) బాతిమెట్రిక్ పటాలు సముద్రం యొక్క లోతును చూపుతాయి (iii). B) ఎథ్నోగ్రాఫికల్ పటాలు మానవ జాతులు/జాతి సమూహాల పంపిణీని చూపుతాయి (i). C) వృక్షసంపద పటాలు పంటలతో సహా మొక్కల జీవన పంపిణీని చూపుతాయి (ii)."
  },
  {
    "id": 57,
    "question": "The step that follows immediately the step 'Identifying the problem' - in problem solving method (TSTET 02 Jan 2025)\nసమస్య పరిష్కార పద్ధతిలో 'సమస్యను గుర్తించడం' అనే దశ తర్వాత వెంటనే వచ్చే దశ",
    "options": [
      "Application of tested solution\nపరీక్షించిన పరిష్కారం యొక్క అనువర్తనం",
      "Planning the process to solve the problem\nసమస్యను పరిష్కరించడానికి ప్రక్రియను ప్రణాళిక చేయడం",
      "Executing the planned process\nప్రణాళికాబద్ధమైన ప్రక్రియను అమలు చేయడం",
      "Evaluting the solution\nపరిష్కారాన్ని మూల్యాంకనం చేయడం"
    ],
    "correctAnswer": 1,
    "explanation": "సమస్య-పరిష్కార పద్ధతిలో, ఒక సమస్య స్పష్టంగా గుర్తించబడి మరియు నిర్వచించబడిన తర్వాత, తదుపరి తక్షణ చర్య సమస్యను పరిష్కరించడానికి ఒక వ్యూహం లేదా కార్యాచరణ ప్రణాళికను రూపొందించడం."
  },
  {
    "id": 58,
    "question": "In this phase of concept mapping students explain the concept they acquired after discussion and reveal new things learned in the shape of summary (TSTET 02 Jan 2025)\nకాన్సెప్ట్ మ్యాపింగ్ యొక్క ఈ దశలో విద్యార్థులు చర్చ తర్వాత తాము పొందిన భావనను వివరిస్తారు మరియు సారాంశం రూపంలో నేర్చుకున్న కొత్త విషయాలను వెల్లడిస్తారు",
    "options": [
      "Phase-IV: Closure\nదశ-IV: ముగింపు",
      "Phase-II: Propositional phase\nదశ-II: ప్రతిపాదన దశ",
      "Phase-I: Presentation of abstraction\nదశ-I: సంగ్రహణ ప్రదర్శన",
      "Phase-III: Application\nదశ-III: అనువర్తనం"
    ],
    "correctAnswer": 0,
    "explanation": "ఒక పాఠం యొక్క 'ముగింపు' దశ అభ్యాసాన్ని ఏకీకృతం చేయడానికి రూపొందించబడింది. ఈ దశలో విద్యార్థులను కీలక ఆలోచనలను సంగ్రహించడం, భావనలను వారి స్వంత మాటలలో వివరించడం, మరియు వారు నేర్చుకున్న వాటిపై ప్రతిబింబించడం జరుగుతుంది, తద్వారా సమాచారం సరిగ్గా కలిసిపోతుంది."
  },
  {
    "id": 59,
    "question": "On invitation of a social science teacher, local farmers visited the school. explained and cleared the doubts of students about soil types, soil fertility, crops grown in a village. This activity is (TSTET 02 Jan 2025)\nఒక సాంఘిక శాస్త్ర ఉపాధ్యాయుని ఆహ్వానం మేరకు, స్థానిక రైతులు పాఠశాలను సందర్శించారు. నేల రకాలు, నేల సారం, ఒక గ్రామంలో పండించే పంటల గురించి విద్యార్థుల సందేహాలను నివృత్తి చేశారు. ఈ కార్యాచరణ",
    "options": [
      "Project learning\nప్రాజెక్ట్ అభ్యాసం",
      "Cooperative learning\nసహకార అభ్యాసం",
      "Bringing community to school\nసమాజాన్ని పాఠశాలకు తీసుకురావడం",
      "Taking school to community\nపాఠశాలను సమాజానికి తీసుకువెళ్లడం"
    ],
    "correctAnswer": 2,
    "explanation": "ఇది విద్యలో సమాజ వనరులను ఉపయోగించుకోవడానికి ఒక ఉదాహరణ. స్థానిక నిపుణులను (రైతులను) తరగతి గదిలోకి వారి ఆచరణాత్మక జ్ఞానాన్ని పంచుకోవడానికి ఆహ్వానించడం ద్వారా, ఉపాధ్యాయుడు ప్రామాణికమైన అభ్యాస అనుభవాన్ని అందించడానికి 'సమాజాన్ని పాఠశాలకు తీసుకువస్తున్నాడు'."
  },
  {
    "id": 60,
    "question": "Choose the correct statements relating to Continuous and Comprehensive Evaluation (CCE). A) National Policy on Education 1986 recommended for CCE B) CCE was introduced in upper primary and secondary stages of schooling only C) CCE was introduced for qualitative improvement in the education system (TSTET 02 Jan 2025)\nనిరంతర మరియు సమగ్ర మూల్యాంకనం (CCE)కి సంబంధించిన సరైన ప్రకటనలను ఎంచుకోండి. A) జాతీయ విద్యా విధానం 1986 CCE కోసం సిఫార్సు చేసింది B) CCE కేవలం ప్రాథమికోన్నత మరియు మాధ్యమిక పాఠశాల దశలలో మాత్రమే ప్రవేశపెట్టబడింది C) విద్యా వ్యవస్థలో గుణాత్మక మెరుగుదల కోసం CCE ప్రవేశపెట్టబడింది",
    "options": [
      "A, B & C",
      "A & C only\nA & C మాత్రమే",
      "A & B only\nA & B మాత్రమే",
      "B & C only\nB & C మాత్రమే"
    ],
    "correctAnswer": 1,
    "explanation": "A సరైనది, ఎందుకంటే NPE 1986 మొదట CCEని ప్రతిపాదించింది. C సరైనది, ఎందుకంటే దాని లక్ష్యం గుణాత్మక మెరుగుదల. B తప్పు ఎందుకంటే CCE విద్యా హక్కు చట్టం కింద ప్రాథమికోన్నత మరియు మాధ్యమిక దశలకు మాత్రమే కాకుండా, ప్రాథమిక దశ మొత్తం (I-VIII తరగతులు) కోసం అమలు చేయబడింది."
  },
  {
    "id": 61,
    "question": "Among the following, the true statement regarding Contour Lines is (TSTET 02 Jan 2025)\nకింది వాటిలో, కాంటూర్ రేఖలకు సంబంధించి నిజమైన ప్రకటన",
    "options": [
      "All the places on a Contour line will have the same height from the sea level\nఒక కాంటూర్ రేఖపై ఉన్న అన్ని ప్రదేశాలు సముద్ర మట్టం నుండి ఒకే ఎత్తులో ఉంటాయి",
      "Contour lines are not usually drawn at fixed intervals of height\nకాంటూర్ రేఖలు సాధారణంగా నిర్దిష్ట ఎత్తు అంతరాలలో గీయబడవు",
      "Wherever the Contour lines are drawn far apart, they represent steep slope\nకాంటూర్ రేఖలు దూరంగా గీయబడిన చోట, అవి నిట్రమైన వాలును సూచిస్తాయి",
      "On map, the hills and mountains are represented in V shape\nపటంలో, కొండలు మరియు పర్వతాలు V ఆకారంలో సూచించబడతాయి"
    ],
    "correctAnswer": 0,
    "explanation": "కాంటూర్ రేఖలు అనేవి ఒక పటంపై గీసే ఊహా రేఖలు. ఇవి సగటు సముద్ర మట్టం వంటి ఒక నిర్దిష్ట బిందువు నుండి సమానమైన ఎత్తులో ఉన్న ప్రదేశాలను కలుపుతాయి. ఇదే వాటి ప్రాథమిక నిర్వచనం. కాంటూర్ రేఖలు దూరంగా ఉన్నప్పుడు, అవి నిట్రమైన వాలును కాకుండా, ఏటవాలుగా ఉన్న ప్రదేశాన్ని సూచిస్తాయి."
  },
  {
    "id": 62,
    "question": "The 'Angle of Incidence' refers to (TSTET 02 Jan 2025)\n'పతన కోణం' అంటే",
    "options": [
      "The angle at which the Sun's rays reflect back to the atmosphere from the earth's surface\nసూర్యకిరణాలు భూమి ఉపరితలం నుండి వాతావరణంలోకి తిరిగి పరావర్తనం చెందే కోణం",
      "The angle at which the amount of Solar energy is reflected back by the earth's atmosphere\nభూమి వాతావరణం ద్వారా సౌరశక్తి తిరిగి పరావర్తనం చెందే కోణం",
      "The angle at which the Sun's rays fall on the earth's surface\nసూర్యకిరణాలు భూమి ఉపరితలంపై పడే కోణం",
      "The angle at which the amount of Solar energy is absorbed and reflected away by clouds\nమేఘాల ద్వారా సౌరశక్తి గ్రహించబడి మరియు పరావర్తనం చెందే కోణం"
    ],
    "correctAnswer": 2,
    "explanation": "పతన కోణం అంటే సూర్యకిరణాలు భూమి ఉపరితలంపై తాకే కోణం. అధిక కోణం (90°కి దగ్గరగా) అంటే మరింత ప్రత్యక్ష మరియు కేంద్రీకృత సూర్యరశ్మి, ఇది అధిక ఉష్ణోగ్రతలకు దారితీస్తుంది, అయితే తక్కువ కోణం అంటే సూర్యరశ్మి విస్తృత ప్రాంతంలో వ్యాపించి, చల్లని ఉష్ణోగ్రతలకు దారితీస్తుంది."
  },
  {
    "id": 63,
    "question": "Generally, the \"Moderate Climate\" is observed at (TSTET 02 Jan 2025)\nసాధారణంగా, \"సమశీతోష్ణ వాతావరణం\" ఇక్కడ గమనించబడుతుంది",
    "options": [
      "Places located very near to the sea coast\nసముద్ర తీరానికి చాలా దగ్గరగా ఉన్న ప్రదేశాలు",
      "Places located very near to the equator and the interior parts of the continent\nభూమధ్యరేఖకు చాలా దగ్గరగా మరియు ఖండం యొక్క అంతర్గత భాగాలలో ఉన్న ప్రదేశాలు",
      "Places located at higher altitudes and the interior parts of the continent\nఎత్తైన ప్రదేశాలు మరియు ఖండం యొక్క అంతర్గత భాగాలలో ఉన్న ప్రదేశాలు",
      "Places located in the interior parts of the continent only\nఖండం యొక్క అంతర్గత భాగాలలో మాత్రమే ఉన్న ప్రదేశాలు"
    ],
    "correctAnswer": 0,
    "explanation": "సముద్ర తీరాల వంటి పెద్ద నీటి వనరులకు సమీపంలో ఉన్న ప్రాంతాలు సమశీతోష్ణ వాతావరణాన్ని అనుభవిస్తాయి. ఎందుకంటే నీరు భూమి కంటే నెమ్మదిగా వేడెక్కుతుంది మరియు చల్లబడుతుంది. సముద్ర ప్రభావం అని పిలువబడే ఈ మధ్యస్థ ప్రభావం, తీవ్రమైన ఉష్ణోగ్రత హెచ్చుతగ్గులను నివారిస్తుంది, ఇది లోతట్టు ప్రాంతాలతో పోలిస్తే చల్లని వేసవికాలం మరియు వెచ్చని శీతాకాలాలకు దారితీస్తుంది."
  },
  {
    "id": 64,
    "question": "This layer of the interior of the earth is the main source of Magma (TSTET 02 Jan 2025)\nభూమి యొక్క అంతర్భాగంలోని ఈ పొర మాగ్మా యొక్క ప్రధాన మూలం",
    "options": [
      "Outer core\nబాహ్య కేంద్రకం",
      "Continental crust\nఖండ భూపటలం",
      "Oceanic Crust\nసముద్ర భూపటలం",
      "Mantle\nప్రావారం"
    ],
    "correctAnswer": 3,
    "explanation": "ప్రావారం, ప్రత్యేకంగా ఆస్థినోస్పియర్ అని పిలువబడే పై భాగం, మాగ్మా యొక్క ప్రాథమిక మూలం. ఈ పొర పాక్షికంగా కరిగిన స్థితిలో ఉంటుంది మరియు విపరీతమైన వేడి మరియు పీడనం కారణంగా, శిలలు కరిగి మాగ్మాగా ఏర్పడతాయి, ఇది అగ్నిపర్వత విస్ఫోటనాల సమయంలో ఉపరితలంపైకి రాగలదు."
  },
  {
    "id": 65,
    "question": "A farmer having 'a own shed in the village' comes under this factor of production (TSTET 02 Jan 2025)\n'గ్రామంలో సొంత షెడ్డు' ఉన్న రైతు ఈ ఉత్పత్తి కారకం కిందకు వస్తాడు",
    "options": [
      "Land\nభూమి",
      "Labour\nశ్రమ",
      "Physical Capital\nభౌతిక మూలధనం",
      "Working Capital\nనిర్వహణ మూలధనం"
    ],
    "correctAnswer": 2,
    "explanation": "షెడ్ అనేది ఉత్పత్తి ప్రక్రియలో చాలా కాలం పాటు ఉపయోగించబడే భౌతిక ఆస్తి. అర్థశాస్త్రంలో, అటువంటి మన్నికైన వస్తువులను (పనిముట్లు, యంత్రాలు, భవనాలు) భౌతిక మూలధనం లేదా స్థిర మూలధనంగా వర్గీకరిస్తారు, ఇది ఉత్పత్తి యొక్క కీలక కారకం."
  },
  {
    "id": 66,
    "question": "This law states that the Coriolis Force is responsible for deflecting winds towards right in the northern hemisphere and towards left in the southern hemisphere (TSTET 02 Jan 2025)\nకొరియాలిస్ బలం వల్ల ఉత్తరార్ధగోళంలో గాలులు కుడివైపుకు, దక్షిణార్ధగోళంలో ఎడమవైపుకు విక్షేపం చెందుతాయని ఈ నియమం చెబుతుంది",
    "options": [
      "Farrel's law\nఫెర్రెల్ నియమం",
      "Pascals Law\nపాస్కల్ నియమం",
      "Kepler's Law\nకెప్లర్ నియమం",
      "Newton's third Law\nన్యూటన్ మూడవ నియమం"
    ],
    "correctAnswer": 0,
    "explanation": "ఫెర్రెల్ నియమం కదిలే వస్తువులపై, ముఖ్యంగా గాలులు మరియు సముద్ర ప్రవాహాలపై కొరియాలిస్ బలం యొక్క ప్రభావాన్ని వివరిస్తుంది. భూమి యొక్క భ్రమణం కారణంగా, ఈ కదలికలు ఉత్తరార్ధగోళంలో కుడి వైపుకు మరియు దక్షిణార్ధగోళంలో ఎడమ వైపుకు విక్షేపం చెందుతాయని ఇది పేర్కొంది."
  },
  {
    "id": 67,
    "question": "'Trade Winds' are located in between these pressure belts (TSTET 02 Jan 2025)\n'వ్యాపార పవనాలు' ఈ పీడన మేఖలల మధ్య ఉన్నాయి",
    "options": [
      "Sub-tropical High Pressure Belt and Sub-Polar Low Pressure Belt\nఉపఉష్ణమండల అధిక పీడన మేఖల మరియు ఉపధ్రువ అల్ప పీడన మేఖల",
      "Equatorial Low Pressure Belt and Sub-tropical High Pressure Belt\nభూమధ్యరేఖ అల్ప పీడన మేఖల మరియు ఉపఉష్ణమండల అధిక పీడన మేఖల",
      "Polar High Pressure Belt and Sub-Polar Low Pressure Belt\nధ్రువ అధిక పీడన మేఖల మరియు ఉపధ్రువ అల్ప పీడన మేఖల",
      "Sub-tropical High Pressure Belt and Polar High Pressure Belt\nఉపఉష్ణమండల అధిక పీడన మేఖల మరియు ధ్రువ అధిక పీడన మేఖల"
    ],
    "correctAnswer": 1,
    "explanation": "వ్యాపార పవనాలు అనేవి ఉపఉష్ణమండల అధిక-పీడన మేఖలల (సుమారు 30° N మరియు S అక్షాంశాలు) నుండి భూమధ్యరేఖ అల్ప-పీడన మేఖల (డోల్‌డ్రమ్స్) వైపు వీచే తూర్పు పవనాలు. ఇవి ప్రపంచ వాతావరణ ప్రసరణ వ్యవస్థలో ఒక కీలక భాగం."
  },
  {
    "id": 68,
    "question": "The word 'Orogenic' is derived from the Greek word \"oros\", which means (TSTET 02 Jan 2025)\n'ఓరోజెనిక్' అనే పదం గ్రీకు పదం \"ఓరోస్\" నుండి వచ్చింది, దీని అర్థం",
    "options": [
      "Plateau\nపీఠభూమి",
      "Mountain\nపర్వతం",
      "Plain\nమైదానం",
      "Floodplain\nవరద మైదానం"
    ],
    "correctAnswer": 1,
    "explanation": "'ఓరోజెనిక్' అనే పదం పర్వత నిర్మాణ ప్రక్రియకు (ఓరోజెని) సంబంధించినది. ఇది గ్రీకు పదాలైన 'ఓరోస్' అంటే పర్వతం మరియు 'జెనెసిస్' అంటే సృష్టి లేదా మూలం నుండి ఉద్భవించింది."
  },
  {
    "id": 69,
    "question": "Hygrometer is an instrument used to measure the (TSTET 02 Jan 2025)\nహైగ్రోమీటర్ అనేది దీనిని కొలవడానికి ఉపయోగించే ఒక పరికరం",
    "options": [
      "The water vapour content in the air\nగాలిలోని నీటి ఆవిరి పరిమాణం",
      "The specific gravity or density of liquids\nద్రవాల విశిష్ట గురుత్వాకర్షణ లేదా సాంద్రత",
      "The direction of the wind\nగాలి దిశ",
      "The amount of rainfall in a specific area over a certain period of time\nఒక నిర్దిష్ట ప్రాంతంలో నిర్దిష్ట కాలంలో వర్షపాతం మొత్తం"
    ],
    "correctAnswer": 0,
    "explanation": "హైగ్రోమీటర్ అనేది గాలిలోని నీటి ఆవిరి మొత్తాన్ని కొలవడానికి ప్రత్యేకంగా రూపొందించబడిన ఒక వాతావరణ పరికరం, దీనిని తేమ అని కూడా అంటారు."
  },
  {
    "id": 70,
    "question": "The West and South West margins of the continents have this type of forests (TSTET 02 Jan 2025)\nఖండాల యొక్క పశ్చిమ మరియు నైరుతి అంచులలో ఈ రకమైన అడవులు ఉన్నాయి",
    "options": [
      "The Tropical Deciduous forests\nఉష్ణమండల ఆకురాల్చే అడవులు",
      "The Coniferous Forests\nశృంగాకార అడవులు",
      "Temperate Deciduous Forests\nసమశీతోష్ణ ఆకురాల్చే అడవులు",
      "The Mediterranean Vegetation\nమధ్యధరా వృక్షసంపద"
    ],
    "correctAnswer": 3,
    "explanation": "మధ్యధరా వృక్షసంపద వెచ్చని, పొడి వేసవికాలం మరియు తేలికపాటి, తడి శీతాకాలాలు ఉన్న ప్రాంతాలకు విలక్షణమైనది. ఈ వాతావరణ రకం సాధారణంగా 30° మరియు 45° అక్షాంశాల మధ్య ఖండాల యొక్క పశ్చిమ మరియు నైరుతి అంచులలో కనిపిస్తుంది, ఉదాహరణకు మధ్యధరా బేసిన్ మరియు కాలిఫోర్నియా."
  },
  {
    "id": 71,
    "question": "This plateau of India rides over the Indian Plate (TSTET 02 Jan 2025)\nభారతదేశంలోని ఈ పీఠభూమి భారత ఫలకంపై ఉంది",
    "options": [
      "Malwa Plateau\nమాళ్వా పీఠభూమి",
      "Chota Nagpur Plateau\nఛోటానాగ్‌పూర్ పీఠభూమి",
      "Marwar Plateau\nమార్వార్ పీఠభూమి",
      "Deccan Plateau\nదక్కన్ పీఠభూమి"
    ],
    "correctAnswer": 3,
    "explanation": "దక్కన్ పీఠభూమి పశ్చిమ మరియు దక్షిణ భారతదేశంలో ఒక పెద్ద పీఠభూమి. ఇది భారత ఫలకంలో ఒక భాగం, ఇది ఒకప్పుడు గోండ్వానా అనే మహాఖండంలో భాగంగా ఉండి, మిలియన్ల సంవత్సరాలుగా ఉత్తరం వైపు కదులుతున్న ఒక ప్రధాన టెక్టోనిక్ ఫలకం."
  },
  {
    "id": 72,
    "question": "From among the following, identify the densest planet (TSTET 02 Jan 2025)\nకింది వాటిలో, అత్యంత సాంద్రమైన గ్రహాన్ని గుర్తించండి",
    "options": [
      "Jupiter\nబృహస్పతి",
      "Mars\nఅంగారకుడు",
      "Mercury\nబుధుడు",
      "Earth\nభూమి"
    ],
    "correctAnswer": 3,
    "explanation": "మన సౌర వ్యవస్థలో భూమి అత్యంత సాంద్రమైన గ్రహం, దీని సగటు సాంద్రత ఘన సెంటీమీటరుకు సుమారు 5.51 గ్రాములు. దాని పెద్ద లోహ కేంద్రకం మరియు సంపీడన శిలా ప్రావారం కారణంగా ఈ అధిక సాంద్రత ఉంటుంది."
  },
  {
    "id": 73,
    "question": "These soils are developed on crystalline igneous rocks in areas of low rainfall in the eastern and southern parts of the Deccan Plateau (TSTET 02 Jan 2025)\nదక్కన్ పీఠభూమి యొక్క తూర్పు మరియు దక్షిణ భాగాలలో తక్కువ వర్షపాతం ఉన్న ప్రాంతాలలో స్పటికాకార అగ్ని శిలలపై ఈ నేలలు అభివృద్ధి చెందాయి",
    "options": [
      "Black Soils\nనల్ల నేలలు",
      "Red Soils\nఎర్ర నేలలు",
      "Laterite Soils\nలాటరైట్ నేలలు",
      "Alluvial Soils\nఒండ్రు నేలలు"
    ],
    "correctAnswer": 1,
    "explanation": "ఎర్ర నేలలు గ్రానైట్ వంటి పురాతన స్పటికాకార మరియు రూపాంతర శిలల శైథిల్యం నుండి ఏర్పడతాయి. అధిక ఇనుప ఆక్సైడ్ల సాంద్రత కారణంగా అవి వాటి లక్షణమైన ఎరుపు రంగును సంతరించుకుంటాయి మరియు సాధారణంగా దక్కన్ పీఠభూమిలోని కొన్ని భాగాల వంటి తక్కువ వర్షపాతం ఉన్న ప్రాంతాలలో కనిపిస్తాయి."
  },
  {
    "id": 74,
    "question": "Which of the following statements best describes the Sex Ratio? (TSTET 02 Jan 2025)\nకింది ప్రకటనలలో ఏది లింగ నిష్పత్తిని ఉత్తమంగా వివరిస్తుంది?",
    "options": [
      "The ratio between the number of males and females in different age groups\nవివిధ వయస్సు వర్గాలలో పురుషులు మరియు స్త్రీల సంఖ్య మధ్య నిష్పత్తి",
      "The ratio between the number of males and females in the age group of 15 to 59 years\n15 నుండి 59 సంవత్సరాల వయస్సు వర్గంలో పురుషులు మరియు స్త్రీల సంఖ్య మధ్య నిష్పత్తి",
      "The number of females per 1000 males in the population\nజనాభాలో ప్రతి 1000 మంది పురుషులకు స్త్రీల సంఖ్య",
      "The number of males and females living in a unit area\nఒక యూనిట్ ప్రాంతంలో నివసిస్తున్న పురుషులు మరియు స్త్రీల సంఖ్య"
    ],
    "correctAnswer": 2,
    "explanation": "లింగ నిష్పత్తి అనేది జనాభాలో పురుషులు మరియు స్త్రీల మధ్య సమతుల్యతను వివరించడానికి ఉపయోగించే ఒక జనాభా సూచిక. భారతదేశంలో, ఇది ప్రత్యేకంగా ప్రతి 1000 మంది పురుషులకు స్త్రీల సంఖ్యగా నిర్వచించబడింది."
  },
  {
    "id": 75,
    "question": "The cultivation of this crop requires warm and moist frost free climate all through the year (TSTET 02 Jan 2025)\nఈ పంట సాగుకు ఏడాది పొడవునా వెచ్చని మరియు తేమతో కూడిన మంచు లేని వాతావరణం అవసరం",
    "options": [
      "Sugar Cane\nచెరకు",
      "Jute\nజనపనార",
      "Paddy\nవరి",
      "Tea\nతేయాకు"
    ],
    "correctAnswer": 0,
    "explanation": "చెరకు ఒక ఉష్ణమండల మరియు ఉపఉష్ణమండల పంట, దాని సుదీర్ఘ పెరుగుదల కాలంలో సరైన పెరుగుదలకు వేడి, తేమ మరియు మంచు రహిత వాతావరణం అవసరం. మంచు చెరకును తీవ్రంగా దెబ్బతీస్తుంది మరియు దాని సుక్రోజ్ శాతాన్ని తగ్గిస్తుంది."
  },
  {
    "id": 76,
    "question": "The main purpose of Kyoto Protocol, 1997 was (TSTET 02 Jan 2025)\nక్యోటో ప్రోటోకాల్, 1997 యొక్క ప్రధాన ఉద్దేశ్యం",
    "options": [
      "To protect the earth from global warming\nభూమిని గ్లోబల్ వార్మింగ్ నుండి రక్షించడం",
      "To ensure that all the nations in the world are not suffering from hunger\nప్రపంచంలోని అన్ని దేశాలు ఆకలితో బాధపడకుండా చూసుకోవడం",
      "To maintain peace and harmony in the world\nప్రపంచంలో శాంతి మరియు సామరస్యాన్ని కాపాడటం",
      "To bring cultural unity among all the nations of the world\nప్రపంచంలోని అన్ని దేశాల మధ్య సాంస్కృతిక ఐక్యతను తీసుకురావడం"
    ],
    "correctAnswer": 0,
    "explanation": "క్యోటో ప్రోటోకాల్ ఒక అంతర్జాతీయ ఒప్పందం, ఇది గ్లోబల్ వార్మింగ్ జరుగుతోందని మరియు మానవ నిర్మిత CO2 ఉద్గారాలు దానిని నడిపిస్తున్నాయనే శాస్త్రీయ ఏకాభిప్రాయం ఆధారంగా, గ్రీన్‌హౌస్ వాయు ఉద్గారాలను తగ్గించడానికి సభ్య దేశాలను కట్టుబడి ఉండేలా చేసింది."
  },
  {
    "id": 77,
    "question": "The countries which were NOT invited to the Treaty of Versailles, 1919 at the end of the First World War by the victorious countries (TSTET 02 Jan 2025)\nమొదటి ప్రపంచ యుద్ధం ముగింపులో 1919 నాటి వెర్సైల్స్ ఒప్పందానికి విజేత దేశాలచే ఆహ్వానించబడని దేశాలు",
    "options": [
      "Germany, Austria and Turkey\nజర్మనీ, ఆస్ట్రియా మరియు టర్కీ",
      "Germany. France and Russia\nజర్మనీ. ఫ్రాన్స్ మరియు రష్యా",
      "United States of America, France. Italy\nయునైటెడ్ స్టేట్స్ ఆఫ్ అమెరికా, ఫ్రాన్స్. ఇటలీ",
      "Italy. Germany and Turkey\nఇటలీ. జర్మనీ మరియు టర్కీ"
    ],
    "correctAnswer": 0,
    "explanation": "వెర్సైల్స్ ఒప్పందం ఓడిపోయిన కేంద్ర శక్తులపై విధించిన ఒక శిక్షాత్మక ఒప్పందం. జర్మనీ మరియు దాని మిత్రదేశాలైన ఆస్ట్రియా-హంగరీ మరియు ఒట్టోమన్ సామ్రాజ్యం (టర్కీ) చర్చలకు ఆహ్వానించబడలేదు మరియు విజేత మిత్రరాజ్యాలు నిర్దేశించిన నిబంధనలను అంగీకరించవలసి వచ్చింది."
  },
  {
    "id": 78,
    "question": "In February, 1917, due to this reason a provisional Government was established in Russia (TSTET 02 Jan 2025)\nఫిబ్రవరి, 1917లో, ఈ కారణంగా రష్యాలో ఒక తాత్కాలిక ప్రభుత్వం స్థాపించబడింది",
    "options": [
      "Escaping of Czar Nicholas II leaving his throne\nజార్ నికోలస్ II తన సింహాసనాన్ని వదిలి పారిపోవడం",
      "Murder of Czar Nicholas II in the first world war\nమొదటి ప్రపంచ యుద్ధంలో జార్ నికోలస్ II హత్య",
      "Economic crisis\nఆర్థిక సంక్షోభం",
      "Invasion of Russia by Germany\nజర్మనీచే రష్యాపై దాడి"
    ],
    "correctAnswer": 0,
    "explanation": "1917 ఫిబ్రవరి విప్లవం ఆర్థిక సంక్షోభాలు మరియు యుద్ధ మరణాల నుండి విస్తృతమైన అసంతృప్తి కారణంగా ప్రేరేపించబడింది. ఇది సామూహిక నిరసనలకు మరియు జార్ నికోలస్ II పదవీ త్యాగానికి (సింహాసనాన్ని వదులుకోవడం) దారితీసింది. తదుపరి అధికార శూన్యంలో, ఒక తాత్కాలిక ప్రభుత్వం ఏర్పడింది."
  },
  {
    "id": 79,
    "question": "The South western portions of Nigeria are dominated by these tribes (TSTET 02 Jan 2025)\nనైజీరియా యొక్క నైరుతి ప్రాంతాలలో ఈ తెగల ఆధిపత్యం ఉంది",
    "options": [
      "Igbo tribes\nఇగ్బో తెగలు",
      "Hausa Fulani tribes\nహౌసా ఫులానీ తెగలు",
      "Yoruba tribes\nయోరుబా తెగలు",
      "Massey tribes\nమాస్సే తెగలు"
    ],
    "correctAnswer": 2,
    "explanation": "నైజీరియాలో మూడు ప్రధాన జాతి సమూహాలు ఉన్నాయి. యోరుబా ప్రజలు ప్రధానంగా దేశంలోని నైరుతి భాగంలో కనిపిస్తారు. హౌసా-ఫులానీ ఉత్తరాన కేంద్రీకృతమై ఉన్నారు, మరియు ఇగ్బో ఆగ్నేయంలో ఉన్నారు."
  },
  {
    "id": 80,
    "question": "Which of the following best describes 'Pan Africanism'? (TSTET 02 Jan 2025)\nకింది వాటిలో 'పాన్ ఆఫ్రికనిజం'ను ఏది ఉత్తమంగా వివరిస్తుంది?",
    "options": [
      "It is an idea which promotes the unity of all African people irrespective of country or tribe\nఇది దేశం లేదా తెగతో సంబంధం లేకుండా ఆఫ్రికన్ ప్రజలందరి ఐక్యతను ప్రోత్సహించే ఒక ఆలోచన",
      "It is a concept which helps the people of Africa in developing agriculturally and industrially\nఇది ఆఫ్రికా ప్రజలకు వ్యవసాయపరంగా మరియు పారిశ్రామికంగా అభివృద్ధి చెందడానికి సహాయపడే ఒక భావన",
      "It developed the idea of a common Nigerian Nation and began to fight the British rule\nఇది ఒక ఉమ్మడి నైజీరియన్ దేశం అనే ఆలోచనను అభివృద్ధి చేసింది మరియు బ్రిటిష్ పాలనతో పోరాడటం ప్రారంభించింది",
      "It is nothing but the policy of Divide and Rule\nఇది విభజించి పాలించు విధానం తప్ప మరేమీ కాదు"
    ],
    "correctAnswer": 0,
    "explanation": "పాన్-ఆఫ్రికనిజం అనేది ఆఫ్రికన్ సంతతికి చెందిన ప్రజలందరి మధ్య సంఘీభావ బంధాలను ప్రోత్సహించడం మరియు బలోపేతం చేయడం లక్ష్యంగా పెట్టుకున్న ప్రపంచవ్యాప్త రాజకీయ ఉద్యమం. ఇది ఆఫ్రికన్ దేశాల రాజకీయ, సామాజిక మరియు ఆర్థిక ఐక్యతను సమర్థిస్తుంది."
  },
  {
    "id": 81,
    "question": "Komarrum Bhim started a guerilla struggle centered on this place (TSTET 02 Jan 2025)\nకొమరం భీమ్ ఈ ప్రదేశాన్ని కేంద్రంగా చేసుకుని గెరిల్లా పోరాటాన్ని ప్రారంభించాడు",
    "options": [
      "Jodeghat\nజోడెఘాట్",
      "Sankepally\nసంకేపల్లి",
      "Dammanapalli\nదమ్మనపల్లి",
      "Koyyur\nకొయ్యూరు"
    ],
    "correctAnswer": 0,
    "explanation": "గోండు సమాజానికి చెందిన గిరిజన నాయకుడు కొమరం భీమ్, హైదరాబాద్ నిజాంకు వ్యతిరేకంగా తిరుగుబాటుకు నాయకత్వం వహించాడు. గిరిజన హక్కుల కోసం అతని గెరిల్లా పోరాటం ప్రస్తుత తెలంగాణలోని ఆదిలాబాద్ జిల్లాలోని జోడెఘాట్ అడవులలో కేంద్రీకృతమై ఉంది."
  },
  {
    "id": 82,
    "question": "The Greek ambassador who was known for his detailed accounts of Indian society and culture during the Mauryan Empire (TSTET 02 Jan 2025)\nమౌర్యుల సామ్రాజ్యం సమయంలో భారతీయ సమాజం మరియు సంస్కృతిపై తన వివరణాత్మక కథనాలకు ప్రసిద్ధి చెందిన గ్రీకు రాయబారి",
    "options": [
      "Herodotus\nహెరోడోటస్",
      "Megasthenes\nమెగస్తనీస్",
      "Ptolemy\nటాలెమీ",
      "Strabo\nస్ట్రాబో"
    ],
    "correctAnswer": 1,
    "explanation": "మెగస్తనీస్ మౌర్య చక్రవర్తి చంద్రగుప్తుని ఆస్థానానికి పంపబడిన ఒక గ్రీకు రాయబారి. అతని రచన, \"ఇండికా,\" మౌర్య భారతదేశం యొక్క ఒక విలువైన చారిత్రక నివేదిక, ఇది దాని సమాజం, పరిపాలన మరియు భౌగోళిక శాస్త్రం యొక్క వివరణాత్మక పరిశీలనలను అందిస్తుంది."
  },
  {
    "id": 83,
    "question": "The Nasik inscriptions are primarily associated with this historical figure (TSTET 02 Jan 2025)\nనాసిక్ శాసనాలు ప్రధానంగా ఈ చారిత్రక వ్యక్తితో సంబంధం కలిగి ఉన్నాయి",
    "options": [
      "Ashoka\nఅశోకుడు",
      "Gautam Buddha\nగౌతమ బుద్ధుడు",
      "Gautami Balashri\nగౌతమీ బాలశ్రీ",
      "Harshavardhana\nహర్షవర్ధనుడు"
    ],
    "correctAnswer": 2,
    "explanation": "నాసిక్ గుహ శాసనాలు శాతవాహన రాజవంశంతో సంబంధం కలిగి ఉన్నాయి. ఒక కీలకమైన శాసనం గౌతమీ బాలశ్రీచే జారీ చేయబడింది, ఆమె గొప్ప శాతవాహన రాజు గౌతమీపుత్ర శాతకర్ణి తల్లి, మరియు ఇది ఆమె కుమారుని విజయాలు మరియు విజయాలను వివరిస్తుంది."
  },
  {
    "id": 84,
    "question": "\"Manuscript\" is (TSTET 02 Jan 2025)\n\"మాన్యుస్క్రిప్ట్\" అనగా",
    "options": [
      "A printed book\nఒక ముద్రిత పుస్తకం",
      "A handwritten document\nఒక చేతితో వ్రాసిన పత్రం",
      "A digital book\nఒక డిజిటల్ పుస్తకం",
      "A photographic image\nఒక ఫోటోగ్రాఫిక్ చిత్రం"
    ],
    "correctAnswer": 1,
    "explanation": "\"మాన్యుస్క్రిప్ట్\" అనే పదం లాటిన్ పదాలైన 'మాను' (చేతితో) మరియు 'స్క్రిప్టస్' (వ్రాసిన) నుండి వచ్చింది. ఇది ముద్రణ ఆవిష్కరణకు ముందు చేతితో వ్రాసిన ఏదైనా పత్రం, పుస్తకం లేదా వచనాన్ని సూచిస్తుంది."
  },
  {
    "id": 85,
    "question": "In the context of historical studies, an \"inscription\" is (TSTET 02 Jan 2025)\nచారిత్రక అధ్యయనాల సందర్భంలో, \"శాసనం\" అనగా",
    "options": [
      "A type of written document created by historians\nచరిత్రకారులచే సృష్టించబడిన ఒక రకమైన వ్రాత పత్రం",
      "A carved or written message on a Stone or a metal\nరాయి లేదా లోహంపై చెక్కబడిన లేదా వ్రాయబడిన సందేశం",
      "An oral tradition passed down through generations\nతరతరాలుగా సంక్రమించిన మౌఖిక సంప్రదాయం",
      "A fictional narrative created for entertainment\nవినోదం కోసం సృష్టించబడిన ఒక కల్పిత కథనం"
    ],
    "correctAnswer": 1,
    "explanation": "శాసనాలు అంటే రాయి, లోహ ఫలకాలు లేదా స్తంభాల వంటి కఠినమైన ఉపరితలాలపై చెక్కబడిన రచనలు. అవి గత సంఘటనలు, పాలకులు మరియు సమాజాల గురించి ప్రత్యక్ష మరియు మన్నికైన సాక్ష్యాలను అందిస్తున్నందున చరిత్రకారులకు ఇవి ఒక కీలకమైన ప్రాథమిక మూలం."
  },
  {
    "id": 86,
    "question": "This system had contributed to the rise of \"Jotedars\" in Bengal (TSTET 02 Jan 2025)\nఈ వ్యవస్థ బెంగాల్‌లో \"జోతేదార్ల\" పెరుగుదలకు దోహదపడింది",
    "options": [
      "Zamindari system\nజమీందారీ వ్యవస్థ",
      "Ryotwari system\nరైత్వారీ వ్యవస్థ",
      "Share cropping system\nభాగస్వామ్య వ్యవసాయ వ్యవస్థ",
      "Feudal system\nభూస్వామ్య వ్యవస్థ"
    ],
    "correctAnswer": 0,
    "explanation": "బెంగాల్‌లోని జమీందారీ వ్యవస్థ (శాశ్వత శిస్తు విధానం) కింద, జమీందార్లు తరచుగా తమ పన్ను వసూలు హక్కులను ఉప-అద్దెకు ఇచ్చేవారు. ఇది జోతేదార్లు అని పిలువబడే సంపన్న రైతులు లేదా మధ్యవర్తి భూస్వాముల వర్గాన్ని సృష్టించింది, వారు విస్తారమైన భూభాగాలను నియంత్రించారు మరియు గ్రామాలలో గణనీయమైన అధికారాన్ని కలిగి ఉన్నారు."
  },
  {
    "id": 87,
    "question": "The three powers involved in the Battle of Buxar, 1764 were (TSTET 02 Jan 2025)\n1764 బక్సర్ యుద్ధంలో పాల్గొన్న మూడు శక్తులు",
    "options": [
      "British East India Company. Marathas, Mysore kings\nబ్రిటిష్ ఈస్ట్ ఇండియా కంపెనీ. మరాఠాలు, మైసూర్ రాజులు",
      "British East India Company, Nawab of Bengal, Mughal Emperor\nబ్రిటిష్ ఈస్ట్ ఇండియా కంపెనీ, బెంగాల్ నవాబు, మొఘల్ చక్రవర్తి",
      "British East India Company, French East India Company, Dutch East India Company\nబ్రిటిష్ ఈస్ట్ ఇండియా కంపెనీ, ఫ్రెంచ్ ఈస్ట్ ఇండియా కంపెనీ, డచ్ ఈస్ట్ ఇండియా కంపెనీ",
      "British East India Company. Sikhs. Portuguese\nబ్రిటిష్ ఈస్ట్ ఇండియా కంపెనీ. సిక్కులు. పోర్చుగీసు"
    ],
    "correctAnswer": 1,
    "explanation": "బక్సర్ యుద్ధం బ్రిటిష్ ఈస్ట్ ఇండియా కంపెనీ దళాలకు మరియు మీర్ ఖాసిం (బెంగాల్ నవాబ్), షుజా-ఉద్-దౌలా (అవధ్ నవాబ్), మరియు షా ఆలం II (మొఘల్ చక్రవర్తి) యొక్క సంయుక్త సైన్యాలకు మధ్య జరిగింది."
  },
  {
    "id": 88,
    "question": "The Chief Constitutional Advisor to the Indian Constitution Drafting Committee was (TSTET 02 Jan 2025)\nభారత రాజ్యాంగ ముసాయిదా కమిటీకి ప్రధాన రాజ్యాంగ సలహాదారు",
    "options": [
      "Granville Austin\nగ్రాన్విల్ ఆస్టిన్",
      "Benegal Narsing Rao\nబెనెగల్ నర్సింగ్ రావు",
      "TT Krishnamachary\nటి.టి. కృష్ణమాచారి",
      "DP Khaitan\nడి.పి. ఖైతాన్"
    ],
    "correctAnswer": 1,
    "explanation": "సర్ బెనెగల్ నర్సింగ్ రావు (బి.ఎన్. రావు) రాజ్యాంగ సభకు రాజ్యాంగ సలహాదారుగా పనిచేసిన ఒక ప్రముఖ న్యాయవేత్త. డాక్టర్ బి.ఆర్. అంబేద్కర్ అధ్యక్షత వహించిన ముసాయిదా కమిటీ పనిచేసిన రాజ్యాంగం యొక్క ప్రారంభ ముసాయిదాను ఆయన సిద్ధం చేశారు."
  },
  {
    "id": 89,
    "question": "The President of India nominates 12 members to the Rajya Sabha who are eminent with knowledge of practical experience in these areas (TSTET 02 Jan 2025)\nభారత రాష్ట్రపతి రాజ్యసభకు 12 మంది సభ్యులను నామినేట్ చేస్తారు, వారు ఈ రంగాలలో ఆచరణాత్మక అనుభవం ఉన్న ప్రముఖులు",
    "options": [
      "Literature, Science, art and Social Service\nసాహిత్యం, విజ్ఞానం, కళ మరియు సామాజిక సేవ",
      "Economics, Psychology and Social Service\nఅర్థశాస్త్రం, మనస్తత్వశాస్త్రం మరియు సామాజిక సేవ",
      "Law, literature and Economics\nన్యాయశాస్త్రం, సాహిత్యం మరియు అర్థశాస్త్రం",
      "Science, Sports and Economics\nవిజ్ఞానం, క్రీడలు మరియు అర్థశాస్త్రం"
    ],
    "correctAnswer": 0,
    "explanation": "భారత రాజ్యాంగంలోని ఆర్టికల్ 80 ప్రకారం, రాష్ట్రపతి సాహిత్యం, విజ్ఞానం, కళ మరియు సామాజిక సేవ వంటి రంగాలలో ప్రత్యేక జ్ఞానం లేదా ఆచరణాత్మక అనుభవం ఉన్న వ్యక్తుల నుండి 12 మంది సభ్యులను రాజ్యసభకు (రాష్ట్రాల మండలి) నామినేట్ చేయవచ్చు."
  },
  {
    "id": 90,
    "question": "Study the given statements and choose the correct answer: A) President's prior permission is required to present the Money Bills in the Indian Parliament. B) If there is no unanimity between two houses in passing the money bill, joint sitting of both the houses of the Parliament will be summoned by the President of India (TSTET 02 Jan 2025)\nఇచ్చిన ప్రకటనలను అధ్యయనం చేసి సరైన సమాధానాన్ని ఎంచుకోండి: A) భారత పార్లమెంటులో ద్రవ్య బిల్లులను ప్రవేశపెట్టడానికి రాష్ట్రపతి ముందస్తు అనుమతి అవసరం. B) ద్రవ్య బిల్లును ఆమోదించడంలో రెండు సభల మధ్య ఏకాభిప్రాయం లేకపోతే, భారత రాష్ట్రపతి పార్లమెంటు ఉభయ సభల సంయుక్త సమావేశాన్ని ఏర్పాటు చేస్తారు",
    "options": [
      "Both 'A' and 'B' are correct\n'A' మరియు 'B' రెండూ సరైనవి",
      "'A' is correct and 'B' is incorrect\n'A' సరైనది మరియు 'B' తప్పు",
      "Both 'A' and 'B' are incorrect\n'A' మరియు 'B' రెండూ తప్పు",
      "'B' is correct and 'A' is incorrect\n'B' సరైనది మరియు 'A' తప్పు"
    ],
    "correctAnswer": 1,
    "explanation": "ప్రకటన A సరైనది; ద్రవ్య బిల్లును రాష్ట్రపతి ముందస్తు సిఫార్సుతో మాత్రమే లోక్‌సభలో ప్రవేశపెట్టగలరు. ప్రకటన B తప్పు; ద్రవ్య బిల్లు కోసం ఉమ్మడి సమావేశానికి ఎటువంటి నిబంధన లేదు. రాజ్యసభకు పరిమిత అధికారాలు ఉన్నాయి మరియు ద్రవ్య బిల్లును తిరస్కరించడం లేదా సవరించడం సాధ్యం కాదు."
  },
  {
    "id": 91,
    "question": "Among the following, the primary purpose of Directive Principles of State Policy in India is (TSTET 02 Jan 2025)\nకింది వాటిలో, భారతదేశంలో ఆదేశిక సూత్రాల ప్రాథమిక ఉద్దేశ్యం",
    "options": [
      "To provide fundamental rights to all individuals\nఅందరికీ ప్రాథమిక హక్కులను అందించడం",
      "To guide the State in policy-making\nవిధాన రూపకల్పనలో రాజ్యానికి మార్గనిర్దేశం చేయడం",
      "To define the structure of the government\nప్రభుత్వ నిర్మాణాన్ని నిర్వచించడం",
      "To establish a parliamentary system\nపార్లమెంటరీ వ్యవస్థను స్థాపించడం"
    ],
    "correctAnswer": 1,
    "explanation": "ఆదేశిక సూత్రాలు (DPSP) అనేవి కేంద్ర మరియు రాష్ట్ర ప్రభుత్వాలు చట్టాలు మరియు విధానాలను రూపొందించేటప్పుడు గుర్తుంచుకోవలసిన మార్గదర్శకాలు. ఇవి చట్టబద్ధంగా అమలు చేయబడవు కానీ ఒక సామాజిక మరియు ఆర్థిక ప్రజాస్వామ్యాన్ని సృష్టించడం వైపు రాజ్యానికి మార్గనిర్దేశం చేయడం లక్ష్యంగా పెట్టుకున్నాయి."
  },
  {
    "id": 92,
    "question": "In India, the President can extend the tenure of the Lok Sabha under special circumstances like national emergency for a period not exceeding one year at a time on the advice of the (TSTET 02 Jan 2025)\nభారతదేశంలో, జాతీయ అత్యవసర పరిస్థితి వంటి ప్రత్యేక పరిస్థితులలో రాష్ట్రపతి లోక్‌సభ పదవీకాలాన్ని ఎవరి సలహా మేరకు ఒకేసారి ఒక సంవత్సరం మించకుండా పొడిగించగలరు",
    "options": [
      "Prime Minister\nప్రధానమంత్రి",
      "Speaker of Lok Sabha\nలోక్‌సభ స్పీకర్",
      "Union Council of Ministers\nకేంద్ర మంత్రిమండలి",
      "Chief Justice of India\nభారత ప్రధాన న్యాయమూర్తి"
    ],
    "correctAnswer": 2,
    "explanation": "జాతీయ అత్యవసర పరిస్థితి సమయంలో, లోక్‌సభ పదవీకాలాన్ని పార్లమెంటు చట్టం ద్వారా ఒకేసారి ఒక సంవత్సరం పొడిగించవచ్చు. ఈ శాసన చర్యను ప్రధానమంత్రి మరియు కేంద్ర మంత్రిమండలి నేతృత్వంలోని ప్రభుత్వం చేపడుతుంది, వారు రాష్ట్రపతికి సలహా ఇస్తారు."
  },
  {
    "id": 93,
    "question": "The National Human Rights Commission can conduct 'suo motu' investigations. What does 'suo motu' mean? (TSTET 02 Jan 2025)\nజాతీయ మానవ హక్కుల కమిషన్ 'సూ మోటు' విచారణలను నిర్వహించగలదు. 'సూ మోటు' అంటే ఏమిటి?",
    "options": [
      "To investigate based on public complaints\nప్రజా ఫిర్యాదుల ఆధారంగా విచారించడం",
      "To investigate on its own initiative\nస్వయంగా విచారించడం",
      "To investigate only court referrals\nకేవలం కోర్టు సిఫార్సులను విచారించడం",
      "To investigate after government approval\nప్రభుత్వ ఆమోదం తర్వాత విచారించడం"
    ],
    "correctAnswer": 1,
    "explanation": "'సూ మోటు' అనేది ఒక లాటిన్ న్యాయ పదం, దీని అర్థం \"దాని స్వంత చొరవతో.\" ఇది జాతీయ మానవ హక్కుల కమిషన్ (NHRC) ఒక అధికారిక ఫిర్యాదు దాఖలు కోసం వేచి ఉండకుండా, స్వయంగా మానవ హక్కుల ఉల్లంఘనలపై విచారణ ప్రారంభించే అధికారాన్ని కలిగి ఉందని సూచిస్తుంది."
  },
  {
    "id": 94,
    "question": "The primary focus of the United Nations Beijing Declaration and Programme of Action, 1995 was (TSTET 02 Jan 2025)\nఐక్యరాజ్యసమితి బీజింగ్ ప్రకటన మరియు కార్యాచరణ కార్యక్రమం, 1995 యొక్క ప్రాథమిక దృష్టి",
    "options": [
      "Economic development of Asian Countries\nఆసియా దేశాల ఆర్థిక అభివృద్ధి",
      "Gender equality and empowerment of women\nలింగ సమానత్వం మరియు మహిళా సాధికారత",
      "Environmental protection\nపర్యావరణ పరిరక్షణ",
      "Political Stability\nరాజకీయ స్థిరత్వం"
    ],
    "correctAnswer": 1,
    "explanation": "1995లో నాల్గవ ప్రపంచ మహిళా సదస్సులో ఆమోదించబడిన బీజింగ్ ప్రకటన మరియు కార్యాచరణ వేదిక, మహిళలు మరియు బాలికల హక్కులు మరియు సాధికారతను ముందుకు తీసుకెళ్లడానికి, లింగ సమానత్వాన్ని సాధించడంపై దృష్టి సారించిన ఒక మైలురాయి ప్రపంచ ఎజెండా."
  },
  {
    "id": 95,
    "question": "One of the following is a child Right as per International Children's Charter proposed by UNO in 1989 (TSTET 02 Jan 2025)\n1989లో UNO ప్రతిపాదించిన అంతర్జాతీయ బాలల చార్టర్ ప్రకారం కింది వాటిలో ఒకటి బాలల హక్కు",
    "options": [
      "Right to leave the country as and when required even without the permission of the Government\nప్రభుత్వ అనుమతి లేకుండా అవసరమైనప్పుడు దేశం విడిచి వెళ్లే హక్కు",
      "Right to live with parents as far as possible\nవీలైనంత వరకు తల్లిదండ్రులతో జీవించే హక్కు",
      "Right to contest in the school election\nపాఠశాల ఎన్నికలలో పోటీ చేసే హక్కు",
      "Right to enter into contracts\nఒప్పందాలు కుదుర్చుకునే హక్కు"
    ],
    "correctAnswer": 1,
    "explanation": "బాలల హక్కులపై UN కన్వెన్షన్ (1989) పిల్లల హక్కులను స్థాపిస్తుంది. కన్వెన్షన్‌లోని ఆర్టికల్ 9, పిల్లల ఉత్తమ ప్రయోజనాలకు విరుద్ధంగా ఉన్నట్లు భావిస్తే తప్ప, పిల్లలకు వారి తల్లిదండ్రులతో జీవించే హక్కు ఉందని స్పష్టంగా పేర్కొంది."
  },
  {
    "id": 96,
    "question": "Choose the correct characteristic feature of demand deposits (TSTET 02 Jan 2025)\nడిమాండ్ డిపాజిట్ల యొక్క సరైన లక్షణాన్ని ఎంచుకోండి",
    "options": [
      "Demand deposits can only be accessed through physical bank branches\nడిమాండ్ డిపాజిట్లను భౌతిక బ్యాంకు శాఖల ద్వారా మాత్రమే పొందగలరు",
      "Demand deposits need not require a minimum balance to be maintained\nడిమాండ్ డిపాజిట్లకు కనీస నిల్వను నిర్వహించాల్సిన అవసరం లేదు",
      "Demand deposits are not insured by the government\nడిమాండ్ డిపాజిట్లు ప్రభుత్వం ద్వారా బీమా చేయబడవు",
      "Demand deposits can be used for payments by cheque or electronic means\nడిమాండ్ డిపాజిట్లను చెక్కు లేదా ఎలక్ట్రానిక్ మార్గాల ద్వారా చెల్లింపుల కోసం ఉపయోగించవచ్చు"
    ],
    "correctAnswer": 3,
    "explanation": "డిమాండ్ డిపాజిట్లు అనేవి బ్యాంకు ఖాతాలలో ఉన్న నిధులు, వీటిని ఎలాంటి ముందస్తు నోటీసు లేకుండా ఎప్పుడైనా విత్‌డ్రా చేసుకోవచ్చు. వాటి యొక్క ముఖ్య లక్షణం ద్రవ్యత్వం, ఇది చెక్కులు, డెబిట్ కార్డులు లేదా ఎలక్ట్రానిక్ బదిలీల ద్వారా చెల్లింపుల కోసం సులభంగా ఉపయోగించడానికి అనుమతిస్తుంది."
  },
  {
    "id": 97,
    "question": "The banks keep only a small proportion of their deposits as cash to (TSTET 02 Jan 2025)\nబ్యాంకులు తమ డిపాజిట్లలో కొద్ది భాగాన్ని మాత్రమే నగదుగా ఉంచుతాయి ఎందుకంటే",
    "options": [
      "avoid taxes\nపన్నులను తప్పించుకోవడానికి",
      "invest in stocks\nస్టాక్స్‌లో పెట్టుబడి పెట్టడానికి",
      "pay depositors who withdraw money\nడబ్బు విత్‌డ్రా చేసే డిపాజిటర్లకు చెల్లించడానికి",
      "cover operational costs\nనిర్వహణ ఖర్చులను భరించడానికి"
    ],
    "correctAnswer": 2,
    "explanation": "బ్యాంకులు ఫ్రాక్షనల్ రిజర్వ్ వ్యవస్థపై పనిచేస్తాయి. అవి డిపాజిటర్ల రోజువారీ విత్‌డ్రా డిమాండ్లను తీర్చడానికి మొత్తం డిపాజిట్లలో ఒక చిన్న భాగాన్ని నగదు నిల్వలుగా ఉంచుతాయి మరియు మిగిలిన మొత్తాన్ని వడ్డీ సంపాదించడానికి అప్పుగా ఇస్తాయి."
  },
  {
    "id": 98,
    "question": "What role do banks play between depositors and borrowers? (TSTET 02 Jan 2025)\nడిపాజిటర్లు మరియు రుణగ్రహీతల మధ్య బ్యాంకులు ఏ పాత్ర పోషిస్తాయి?",
    "options": [
      "Banks act as financial advisors\nబ్యాంకులు ఆర్థిక సలహాదారులుగా వ్యవహరిస్తాయి",
      "Banks manage government funds\nబ్యాంకులు ప్రభుత్వ నిధులను నిర్వహిస్తాయి",
      "Banks mediate between those who have surplus funds and those in need of funds\nఅదనపు నిధులు ఉన్నవారికి మరియు నిధులు అవసరమైన వారికి మధ్య బ్యాంకులు మధ్యవర్తిత్వం వహిస్తాయి",
      "Banks serve only depositors\nబ్యాంకులు డిపాజిటర్లకు మాత్రమే సేవ చేస్తాయి"
    ],
    "correctAnswer": 2,
    "explanation": "బ్యాంకులు ఆర్థిక మధ్యవర్తులుగా పనిచేస్తాయి. అవి పొదుపుదారుల (డిపాజిటర్ల) నుండి అదనపు నిధులను సేకరించి, ఆ నిధులను పెట్టుబడి లేదా వినియోగం కోసం అవసరమైన వ్యక్తులు మరియు వ్యాపారాలకు (రుణగ్రహీతలకు) అందిస్తాయి. ఈ మధ్యవర్తిత్వం ఆర్థిక వ్యవస్థకు చాలా కీలకం."
  },
  {
    "id": 99,
    "question": "A 'Price Index' 100 represents (TSTET 02 Jan 2025)\n'ధరల సూచిక' 100 దేనిని సూచిస్తుంది",
    "options": [
      "Prices have increased by 100%\nధరలు 100% పెరిగాయి",
      "Prices are irrelevant to the base year\nధరలు ఆధార సంవత్సరానికి సంబంధం లేనివి",
      "Prices are at the average level of the base year\nధరలు ఆధార సంవత్సరం యొక్క సగటు స్థాయిలో ఉన్నాయి",
      "Prices have decreased by 100%\nధరలు 100% తగ్గాయి"
    ],
    "correctAnswer": 2,
    "explanation": "ధరల సూచిక కాలక్రమేణా ధరల మార్పులను కొలుస్తుంది. ఆధార సంవత్సరం అనేది సూచన బిందువు, మరియు దాని సూచిక విలువ ఎల్లప్పుడూ 100గా సెట్ చేయబడుతుంది. కాబట్టి, తరువాతి సంవత్సరానికి ధరల సూచిక 100 అంటే, ధరలు సగటున ఆధార సంవత్సరం నుండి మారలేదని అర్థం."
  },
  {
    "id": 100,
    "question": "Identify the true statement regarding \"the price indices\" (TSTET 02 Jan 2025)\n\"ధరల సూచికల\"కు సంబంధించి నిజమైన ప్రకటనను గుర్తించండి",
    "options": [
      "Price indices can only compare prices in one location\nధరల సూచికలు ఒకే ప్రదేశంలో మాత్రమే ధరలను పోల్చగలవు",
      "Price indices show percentage of change in prices over time\nధరల సూచికలు కాలక్రమేణా ధరలలో మార్పు శాతాన్ని చూపుతాయి",
      "Price indices are only useful for consumer goods\nధరల సూచికలు వినియోగ వస్తువులకు మాత్రమే ఉపయోగపడతాయి",
      "Price indices do not reflect changes in the economy\nధరల సూచికలు ఆర్థిక వ్యవస్థలోని మార్పులను ప్రతిబింబించవు"
    ],
    "correctAnswer": 1,
    "explanation": "ధరల సూచిక యొక్క ప్రాథమిక విధి, ఒక ఆధార కాలంతో పోలిస్తే కాలక్రమేణా ఒక స్థిరమైన వస్తువులు మరియు సేవల బుట్ట యొక్క మొత్తం ధరల స్థాయిలో మార్పును ట్రాక్ చేయడం. ఇది ఈ మార్పును శాతంగా వ్యక్తపరుస్తుంది, ద్రవ్యోల్బణం లేదా ప్రతి ద్రవ్యోల్బణాన్ని సూచిస్తుంది."
  },
  {
    "id": 101,
    "question": "In India, the companies that run factories or businesses have to pay this type of tax on the profits of that company (TSTET 02 Jan 2025)\nభారతదేశంలో, కర్మాగారాలు లేదా వ్యాపారాలను నడిపే కంపెనీలు ఆ కంపెనీ లాభాలపై ఈ రకమైన పన్నును చెల్లించాలి",
    "options": [
      "Goods and Services Tax\nవస్తువులు మరియు సేవల పన్ను",
      "Corporate tax\nకార్పొరేట్ పన్ను",
      "Capital Gains Tax\nమూలధన లాభాల పన్ను",
      "Customs Duty\nకస్టమ్స్ డ్యూటీ"
    ],
    "correctAnswer": 1,
    "explanation": "కార్పొరేట్ పన్ను అనేది కార్పొరేట్ సంస్థలు తమ వ్యాపారాల నుండి సంపాదించే నికర ఆదాయం లేదా లాభంపై విధించే ప్రత్యక్ష పన్ను. ఇది ప్రభుత్వానికి ప్రధాన ఆదాయ వనరు."
  },
  {
    "id": 102,
    "question": "How did the early bankers in India like the Jagatseths and Shahs achieve banking system with their receipts? (TSTET 02 Jan 2025)\nభారతదేశంలోని జగత్‌సేఠ్‌లు మరియు షాల వంటి తొలి బ్యాంకర్లు తమ రసీదులతో బ్యాంకింగ్ వ్యవస్థను ఎలా సాధించారు?",
    "options": [
      "They were the first to mint coins\nవారు నాణేలను ముద్రించిన మొదటి వారు",
      "Their receipts were accepted throughout the country\nవారి రసీదులు దేశవ్యాప్తంగా ఆమోదించబడ్డాయి",
      "They regulated the value of gold\nవారు బంగారం విలువను నియంత్రించారు",
      "They established the first national bank\nవారు మొదటి జాతీయ బ్యాంకును స్థాపించారు"
    ],
    "correctAnswer": 1,
    "explanation": "జగత్‌సేఠ్‌ల వంటి స్వదేశీ బ్యాంకర్లు డిపాజిట్ల కోసం రసీదులు (హుండీలు) జారీ చేయడం ద్వారా పనిచేసేవారు. ఈ హుండీలు దేశవ్యాప్తంగా వాణిజ్యానికి మార్పిడి మాధ్యమంగా విస్తృతంగా విశ్వసించబడ్డాయి మరియు ఆమోదించబడ్డాయి, ఇవి ఆధునిక చెక్కులు లేదా బ్యాంక్ డ్రాఫ్ట్‌ల వలె పనిచేస్తాయి."
  },
  {
    "id": 103,
    "question": "The key feature of the Basic Savings Bank Deposit Account (BSBDA) is (TSTET 02 Jan 2025)\nబేసిక్ సేవింగ్స్ బ్యాంక్ డిపాజిట్ ఖాతా (BSBDA) యొక్క ముఖ్య లక్షణం",
    "options": [
      "It requires a minimum balance of at least Rs. 1,000\nదీనికి కనీసం రూ. 1,000 కనీస నిల్వ అవసరం",
      "It can have zero or very low minimum balance\nఇది సున్నా లేదా చాలా తక్కువ కనీస నిల్వను కలిగి ఉంటుంది",
      "It allows unlimited withdrawals each month\nఇది ప్రతి నెలా అపరిమిత ఉపసంహరణలను అనుమతిస్తుంది",
      "It is available only to individuals over 18 years\nఇది 18 సంవత్సరాల కంటే ఎక్కువ వయస్సు ఉన్న వ్యక్తులకు మాత్రమే అందుబాటులో ఉంటుంది"
    ],
    "correctAnswer": 1,
    "explanation": "ఆర్థిక చేరికను ప్రోత్సహించడానికి RBI ద్వారా బేసిక్ సేవింగ్స్ బ్యాంక్ డిపాజిట్ ఖాతా (BSBDA) ప్రవేశపెట్టబడింది. దీని ప్రధాన లక్షణం ఏమిటంటే, దీనికి కనీస నిల్వ అవసరం లేదు, ఇది సమాజంలోని అన్ని వర్గాలకు బ్యాంకింగ్‌ను అందుబాటులోకి తెస్తుంది, అయినప్పటికీ దీనికి కొన్ని లావాదేవీల పరిమితులు ఉన్నాయి."
  },
  {
    "id": 104,
    "question": "A Small Account under simplified KYC norms is (TSTET 02 Jan 2025)\nసరళీకృత KYC నిబంధనల ప్రకారం ఒక చిన్న ఖాతా అంటే",
    "options": [
      "An account exclusively meant for business transactions\nవ్యాపార లావాదేవీల కోసం ప్రత్యేకంగా ఉద్దేశించిన ఖాతా",
      "A Basic Savings Bank Deposit Account treated as a Small Account\nఒక బేసిక్ సేవింగ్స్ బ్యాంక్ డిపాజిట్ ఖాతాను చిన్న ఖాతాగా పరిగణిస్తారు",
      "An account that requires extensive documentation\nవిస్తృతమైన డాక్యుమెంటేషన్ అవసరమయ్యే ఖాతా",
      "An account with no withdrawal limits\nఉపసంహరణ పరిమితులు లేని ఖాతా"
    ],
    "correctAnswer": 1,
    "explanation": "'చిన్న ఖాతా' అనేది ఒక రకమైన బేసిక్ సేవింగ్స్ బ్యాంక్ డిపాజిట్ ఖాతా (BSBDA), దీనిని సాధారణ ఖాతాకు అవసరమైన అన్ని అధికారిక పత్రాలు లేని వ్యక్తుల కోసం సరళీకృత నో యువర్ కస్టమర్ (KYC) నిబంధనలతో తెరవవచ్చు, తద్వారా ఆర్థిక చేరికను ప్రోత్సహిస్తుంది."
  },
  {
    "id": 105,
    "question": "The purpose of the National Food Security Act enacted in 2013 was (TSTET 02 Jan 2025)\n2013లో రూపొందించబడిన జాతీయ ఆహార భద్రతా చట్టం యొక్క ఉద్దేశ్యం",
    "options": [
      "To promote organic farming\nసేంద్రీయ వ్యవసాయాన్ని ప్రోత్సహించడానికి",
      "To increase agricultural exports\nవ్యవసాయ ఎగుమతులను పెంచడానికి",
      "To regulate food prices\nఆహార ధరలను నియంత్రించడానికి",
      "To legalize people's Right to Food\nప్రజల ఆహార హక్కును చట్టబద్ధం చేయడానికి"
    ],
    "correctAnswer": 3,
    "explanation": "జాతీయ ఆహార భద్రతా చట్టం, 2013, భారతదేశ జనాభాలో సుమారు మూడింట రెండు వంతుల మందికి సబ్సిడీతో కూడిన ఆహార ధాన్యాలను అందించాలని లక్ష్యంగా పెట్టుకుంది. ఇది ఇప్పటికే ఉన్న ఆహార భద్రతా కార్యక్రమాలను చట్టపరమైన హక్కులుగా మారుస్తుంది, ఆహార హక్కును న్యాయబద్ధమైన హక్కుగా చేస్తుంది."
  },
  {
    "id": 106,
    "question": "One of the following factors of production comes under 'Working Capital\" (TSTET 02 Jan 2025)\nకింది ఉత్పత్తి కారకాలలో ఒకటి 'వర్కింగ్ క్యాపిటల్' కిందకు వస్తుంది",
    "options": [
      "Tools and machines\nపనిముట్లు మరియు యంత్రాలు",
      "Raw materials and money for production\nఉత్పత్తికి ముడి పదార్థాలు మరియు డబ్బు",
      "Land and natural resources\nభూమి మరియు సహజ వనరులు",
      "Long-term investments\nదీర్ఘకాలిక పెట్టుబడులు"
    ],
    "correctAnswer": 1,
    "explanation": "వర్కింగ్ క్యాపిటల్ అనేది ఉత్పత్తి ప్రక్రియలో ఉపయోగించబడే లేదా నగదుగా మార్చబడే ఆస్తులను సూచిస్తుంది. ఇందులో ముడి పదార్థాలు మరియు రోజువారీ కార్యాచరణ ఖర్చులకు అవసరమైన డబ్బు ఉంటాయి. పనిముట్లు మరియు యంత్రాలు స్థిర మూలధనంగా పరిగణించబడతాయి."
  },
  {
    "id": 107,
    "question": "Before the mid-20th century, production was primarily organized (TSTET 02 Jan 2025)\n20వ శతాబ్దం మధ్యకాలానికి ముందు, ఉత్పత్తి ప్రధానంగా నిర్వహించబడింది",
    "options": [
      "Exclusively by multinational corporations\nప్రత్యేకంగా బహుళజాతి సంస్థలచే",
      "Within individual countries\nవ్యక్తిగత దేశాలలో",
      "Globally, with a focus on international trade\nప్రపంచవ్యాప్తంగా, అంతర్జాతీయ వాణిజ్యంపై దృష్టి సారించి",
      "Through informal local markets\nఅనధికారిక స్థానిక మార్కెట్ల ద్వారా"
    ],
    "correctAnswer": 1,
    "explanation": "20వ శతాబ్దం రెండవ భాగంలో ప్రపంచీకరణ మరియు బహుళజాతి సంస్థల (MNCs) పెరుగుదలకు ముందు, ఉత్పత్తి కార్యకలాపాలు ఎక్కువగా జాతీయ సరిహద్దుల్లోనే ఉండేవి. అంతర్జాతీయ వాణిజ్యం ఉన్నప్పటికీ, సంక్లిష్టమైన ప్రపంచ సరఫరా గొలుసులు సర్వసాధారణం కాదు."
  },
  {
    "id": 108,
    "question": "GDP primarily measures (TSTET 02 Jan 2025)\nGDP ప్రధానంగా కొలుస్తుంది",
    "options": [
      "The income of all citizens in a country only\nఒక దేశంలోని పౌరులందరి ఆదాయాన్ని మాత్రమే",
      "The total number of goods produced in a country only\nఒక దేశంలో ఉత్పత్తి చేయబడిన మొత్తం వస్తువుల సంఖ్యను మాత్రమే",
      "The market value of all final goods and services produced\nఉత్పత్తి చేయబడిన అన్ని తుది వస్తువులు మరియు సేవల యొక్క మార్కెట్ విలువ",
      "The available number of service sector jobs only\nఅందుబాటులో ఉన్న సేవా రంగ ఉద్యోగాల సంఖ్యను మాత్రమే"
    ],
    "correctAnswer": 2,
    "explanation": "స్థూల దేశీయోత్పత్తి (GDP) ఒక నిర్దిష్ట కాలంలో ఒక దేశ సరిహద్దులలో ఉత్పత్తి చేయబడిన అన్ని తుది వస్తువులు మరియు సేవల యొక్క ద్రవ్య మార్కెట్ విలువను కొలుస్తుంది. ఇది ఒక దేశం యొక్క ఆర్థిక ఆరోగ్యానికి సమగ్ర స్కోర్‌కార్డ్‌గా పనిచేస్తుంది."
  },
  {
    "id": 109,
    "question": "Match the following: A) Chanukya B) Amartya Sen C) Mother Theressa with their respective works/establishments. (TSTET 02 Jan 2025)\nకింది వాటిని జతపరచండి: A) చాణక్య B) అమర్త్య సేన్ C) మదర్ థెరిస్సా వారి సంబంధిత రచనలు/సంస్థలతో.",
    "options": [
      "A-i (Nirmal Hruday); B-ii (Communist League); C-iii (Arthashastra)\nA-i (నిర్మల్ హృదయ్); B-ii (కమ్యూనిస్ట్ లీగ్); C-iii (అర్థశాస్త్రం)",
      "A-iii (Arthashastra); B-ii (Communist League); C-iv (The ideal of Justice)\nA-iii (అర్థశాస్త్రం); B-ii (కమ్యూనిస్ట్ లీగ్); C-iv (ది ఐడియా ఆఫ్ జస్టిస్)",
      "A-iii (Arthashastra); B-iv (The ideal of Justice); C-ii (Communist League)\nA-iii (అర్థశాస్త్రం); B-iv (ది ఐడియా ఆఫ్ జస్టిస్); C-ii (కమ్యూనిస్ట్ లీగ్)",
      "A-iv (The ideal of Justice); B-iii (Arthashastra); C-i (Nirmal Hruday)\nA-iv (ది ఐడియా ఆఫ్ జస్టిస్); B-iii (అర్థశాస్త్రం); C-i (నిర్మల్ హృదయ్)"
    ],
    "correctAnswer": 2,
    "explanation": "సరైన జతలు: చాణక్యుడు 'అర్థశాస్త్రం' రాశాడు. అమర్త్య సేన్ 'ది ఐడియా ఆఫ్ జస్టిస్' రాశారు. మదర్ థెరిస్సా నిర్మల్ హృదయ్ ను స్థాపించారు. పరీక్షలో అందించిన ఎంపికలో అక్షరదోషం ఉంది, మదర్ థెరిస్సాను తప్పు అంశానికి లింక్ చేస్తుంది, కానీ చాణక్య మరియు అమర్త్య సేన్ లను సరిగ్గా లింక్ చేస్తుంది."
  },
  {
    "id": 110,
    "question": "To study the topic 'Climate', it is essential to know about the temperature, pressure of atmosphere; level of humidity and rainfall. For this, knowledge of this subject is required along with social science (TSTET 02 Jan 2025)\n'వాతావరణం' అనే అంశాన్ని అధ్యయనం చేయడానికి, ఉష్ణోగ్రత, వాతావరణ పీడనం; తేమ స్థాయి మరియు వర్షపాతం గురించి తెలుసుకోవడం చాలా అవసరం. దీని కోసం, సాంఘిక శాస్త్రంతో పాటు ఈ విషయంపై కూడా జ్ఞానం అవసరం",
    "options": [
      "Life Science\nజీవ శాస్త్రం",
      "Physical Science\nభౌతిక శాస్త్రం",
      "Physical Education\nవ్యాయామ విద్య",
      "Work Education\nపని విద్య"
    ],
    "correctAnswer": 1,
    "explanation": "వాతావరణ అధ్యయనంలో ఉష్ణోగ్రత, వాతావరణ పీడనం, తేమ మరియు అవపాతం వంటి భౌతిక దృగ్విషయాలను అర్థం చేసుకోవడం ఉంటుంది. ఇవి భౌతిక శాస్త్రం, ముఖ్యంగా భౌతికశాస్త్రం మరియు భౌతిక భూగోళశాస్త్రంలో ప్రధాన భావనలు, కాబట్టి దాని జ్ఞానం అవసరం."
  },
  {
    "id": 111,
    "question": "Choose the correct statements among the following related to aims and objectives: A) Aims are general and objectives are specific. B) Aims are steps to achieve the objectives. C) The scope of aims is broad and the scope of objectives is limited (TSTET 02 Jan 2025)\nలక్ష్యాలు మరియు ఉద్దేశ్యాలకు సంబంధించిన కింది ప్రకటనలలో సరైన వాటిని ఎంచుకోండి: A) లక్ష్యాలు సాధారణమైనవి మరియు ఉద్దేశ్యాలు నిర్దిష్టమైనవి. B) ఉద్దేశ్యాలను సాధించడానికి లక్ష్యాలు దశలు. C) లక్ష్యాల పరిధి విస్తృతమైనది మరియు ఉద్దేశ్యాల పరిధి పరిమితమైనది",
    "options": [
      "A & C only\nA & C మాత్రమే",
      "A & B only\nA & B మాత్రమే",
      "B & C only\nB & C మాత్రమే",
      "A, B & C\nA, B & C"
    ],
    "correctAnswer": 0,
    "explanation": "విద్యా ప్రణాళికలో, లక్ష్యాలు విస్తృతమైన, దీర్ఘకాలిక ప్రయోజన ప్రకటనలు, అయితే ఉద్దేశ్యాలు నిర్దిష్టమైన, కొలవగల, స్వల్పకాలిక లక్ష్యాలు. అందువల్ల, లక్ష్యాలు విస్తృత పరిధితో సాధారణమైనవి (A, C సరైనవి), మరియు ఉద్దేశ్యాలు లక్ష్యాలను సాధించడానికి మార్గాలు, దానికి వ్యతిరేకం కాదు (B తప్పు)."
  },
  {
    "id": 112,
    "question": "The active verb 'Reflect' is an example for this level of knowledge dimension, which is in evaluating category of cognitive process dimension (TSTET 02 Jan 2025)\nక్రియాశీల క్రియ 'ప్రతిబింబించడం' అనేది ఈ స్థాయి జ్ఞాన పరిమాణానికి ఒక ఉదాహరణ, ఇది అభిజ్ఞా ప్రక్రియ పరిమాణం యొక్క మూల్యాంకన విభాగంలో ఉంది",
    "options": [
      "Conceptual knowledge\nభావనాత్మక జ్ఞానం",
      "Procedural knowledge\nవిధానపరమైన జ్ఞానం",
      "Factual knowledge\nవాస్తవిక జ్ఞానం",
      "Metacognitive knowledge\nపరాసంజ్ఞానాత్మక జ్ఞానం"
    ],
    "correctAnswer": 3,
    "explanation": "బ్లూమ్ యొక్క సవరించిన వర్గీకరణలో, 'ప్రతిబింబించడం' అనేది 'మూల్యాంకనం' యొక్క అభిజ్ఞా ప్రక్రియ కిందకు వస్తుంది. ఈ చర్యకు పరాసంజ్ఞానాత్మక జ్ఞానం అవసరం, ఇది ఒకరి స్వంత ఆలోచనా ప్రక్రియల గురించిన జ్ఞానం. ఒకరి స్వంత అభ్యాసం మరియు పనితీరుపై ప్రతిబింబించడం పరాసంజ్ఞానం యొక్క ముఖ్యమైన అంశం."
  },
  {
    "id": 113,
    "question": "\"All are equal before law\" explain with the illustration: This is one of the activity to achieve this academic standard (TSTET 02 Jan 2025)\n\"చట్టం ముందు అందరూ సమానులే\" ఉదాహరణతో వివరించండి: ఈ విద్యా ప్రమాణాన్ని సాధించడానికి ఇది ఒక కార్యాచరణ",
    "options": [
      "Conceptual understanding\nభావనాత్మక అవగాహన",
      "Understanding and interpreting by reading the given text\nఇచ్చిన వచనాన్ని చదవడం ద్వారా అర్థం చేసుకోవడం మరియు వ్యాఖ్యానించడం",
      "Information gathering Skills\nసమాచార సేకరణ నైపుణ్యాలు",
      "Appreciation and Sensitivity\nప్రశంస మరియు సున్నితత్వం"
    ],
    "correctAnswer": 0,
    "explanation": "ఈ విద్యాసంబంధమైన పని 'భావనాత్మక అవగాహన'ను లక్ష్యంగా చేసుకుంది. ఇది విద్యార్థి \"చట్టం ముందు అందరూ సమానులే\" అనే భావనను కేవలం కంఠస్థం చేయడమే కాకుండా, దానిని వివరిస్తూ మరియు సంబంధిత ఉదాహరణలను అందించడం ద్వారా దానిపై లోతైన అవగాహనను ప్రదర్శించాలని కోరుతుంది."
  },
  {
    "id": 114,
    "question": "This policy/curriculum frame work has suggested that instead of 'civics', the term 'political science' is to be used (TSTET 02 Jan 2025)\nఈ విధానం/పాఠ్యప్రణాళిక ఫ్రేమ్ వర్క్ 'పౌరశాస్త్రం' బదులుగా 'రాజకీయ శాస్త్రం' అనే పదాన్ని ఉపయోగించాలని సూచించింది",
    "options": [
      "National Policy on Education - 1986\nజాతీయ విద్యా విధానం - 1986",
      "New Education Policy - 2020\nనూతన విద్యా విధానం - 2020",
      "National curriculum framework 2000\nజాతీయ పాఠ్యప్రణాళిక ఫ్రేమ్‌వర్క్ 2000",
      "National Curriculum frame work - 2005\nజాతీయ పాఠ్యప్రణాళిక ఫ్రేమ్‌వర్క్ - 2005"
    ],
    "correctAnswer": 3,
    "explanation": "జాతీయ పాఠ్యప్రణాళిక ఫ్రేమ్‌వర్క్ (NCF) 2005 కేవలం ప్రభుత్వ నిర్మాణాలపై దృష్టి పెట్టకుండా, అధికారం, రాజకీయ ప్రక్రియలు మరియు ప్రజాస్వామ్య సూత్రాల యొక్క మరింత డైనమిక్ అధ్యయనాన్ని ప్రోత్సహించడానికి 'పౌరశాస్త్రం' నుండి 'రాజకీయ శాస్త్రం'కి మారాలని సిఫార్సు చేసింది."
  },
  {
    "id": 115,
    "question": "\"A teacher appointed shall complete entire curriculum with in the specified time\" - It is mentioned in this section of Right to Education (RTE) Act - 2009 (TSTET 02 Jan 2025)\n\"నియమించబడిన ఉపాధ్యాయుడు నిర్దిష్ట సమయంలో మొత్తం పాఠ్యాంశాలను పూర్తి చేయాలి\" - ఇది విద్యా హక్కు (RTE) చట్టం - 2009లోని ఈ విభాగంలో పేర్కొనబడింది",
    "options": [
      "Section24 (1) (d)",
      "Section24 (1) (C)",
      "Section - 25 (1)",
      "Section29(2) (f)"
    ],
    "correctAnswer": 1,
    "explanation": "పిల్లల ఉచిత మరియు నిర్బంధ విద్యా హక్కు (RTE) చట్టం, 2009లోని సెక్షన్ 24, ఉపాధ్యాయుల విధులను వివరిస్తుంది. ప్రత్యేకంగా, సెక్షన్ 24(1)(c) ఒక ఉపాధ్యాయుడు \"నిర్దిష్ట సమయంలో మొత్తం పాఠ్యాంశాలను పూర్తి చేయాలి\" అని ఆదేశిస్తుంది."
  },
  {
    "id": 116,
    "question": "'War equipments', and 'dictionary of geography are the examples of these sources respectively (TSTET 02 Jan 2025)\n'యుద్ధ పరికరాలు', మరియు 'భూగోళశాస్త్ర నిఘంటువు' వరుసగా ఈ మూలాలకు ఉదాహరణలు",
    "options": [
      "Primary source, Secondary source\nప్రాథమిక మూలం, ద్వితీయ మూలం",
      "Secondary source, Primary source\nద్వితీయ మూలం, ప్రాథమిక మూలం",
      "Both are Primary sources\nరెండూ ప్రాథమిక మూలాలు",
      "Both are Secondary sources\nరెండూ ద్వితీయ మూలాలు"
    ],
    "correctAnswer": 0,
    "explanation": "ఒక నిర్దిష్ట కాలానికి చెందిన యుద్ధ పరికరాలు అధ్యయనం చేయబడుతున్న కాలం నుండి భౌతిక కళాఖండం, ఇది దానిని ప్రాథమిక మూలంగా చేస్తుంది. భూగోళశాస్త్ర నిఘంటువు అనేది ఇతర మూలాల నుండి సమాచారాన్ని సంకలనం చేసి, వివరించే ఒక సూచన గ్రంథం, ఇది దానిని ద్వితీయ మూలంగా చేస్తుంది."
  },
  {
    "id": 117,
    "question": "Choose the correct statements among the following related to cooperative learning: A) Cooperative learning believes in group efforts and cooperation among learners. B) Cooperative learning encourages individual goals rather than group goals. C) Cooperative learning emphasises social learning (TSTET 02 Jan 2025)\nసహకార అభ్యాసానికి సంబంధించిన కింది ప్రకటనలలో సరైన వాటిని ఎంచుకోండి: A) సహకార అభ్యాసం సమూహ ప్రయత్నాలు మరియు అభ్యాసకుల మధ్య సహకారాన్ని విశ్వసిస్తుంది. B) సహకార అభ్యాసం సమూహ లక్ష్యాల కంటే వ్యక్తిగత లక్ష్యాలను ప్రోత్సహిస్తుంది. C) సహకార అభ్యాసం సామాజిక అభ్యాసాన్ని నొక్కి చెబుతుంది",
    "options": [
      "A. B & C\nA. B & C",
      "A & B only\nA & B మాత్రమే",
      "B & C only\nB & C మాత్రమే",
      "A & C only\nA & C మాత్రమే"
    ],
    "correctAnswer": 3,
    "explanation": "సహకార అభ్యాసం సమూహ ప్రయత్నం, సహకారం మరియు సామాజిక పరస్పర చర్యపై ఆధారపడి ఉంటుంది (ప్రకటనలు A మరియు C సరైనవి). ఇది భాగస్వామ్య సమూహ లక్ష్యాలు మరియు పరస్పర జవాబుదారీతనాన్ని నొక్కి చెబుతుంది, వ్యక్తిగత లక్ష్యాలను కాదు (ప్రకటన B తప్పు)."
  },
  {
    "id": 118,
    "question": "Choose the correct statements among the following related to concept mapping: A) A concept map visually illustrates the relationships between concepts and ideas. B) Concept maps are a way to develop logical thinking and study skills. C) Concept maps have cross links or relationships between concepts in different segments/domains. (TSTET 02 Jan 2025)\nకాన్సెప్ట్ మ్యాపింగ్‌కు సంబంధించిన కింది ప్రకటనలలో సరైన వాటిని ఎంచుకోండి: A) ఒక కాన్సెప్ట్ మ్యాప్ భావనలు మరియు ఆలోచనల మధ్య సంబంధాలను దృశ్యమానంగా వివరిస్తుంది. B) కాన్సెప్ట్ మ్యాప్‌లు తార్కిక ఆలోచన మరియు అధ్యయన నైపుణ్యాలను అభివృద్ధి చేయడానికి ఒక మార్గం. C) కాన్సెప్ట్ మ్యాప్‌లు వివిధ విభాగాలు/డొమైన్‌లలోని భావనల మధ్య క్రాస్ లింక్‌లు లేదా సంబంధాలను కలిగి ఉంటాయి.",
    "options": [
      "A & B only\nA & B మాత్రమే",
      "B & C only\nB & C మాత్రమే",
      "A & C only\nA & C మాత్రమే",
      "A, B & C\nA, B & C"
    ],
    "correctAnswer": 3,
    "explanation": "ఈ మూడు ప్రకటనలు కాన్సెప్ట్ మ్యాపింగ్‌ను సరిగ్గా వివరిస్తాయి. ఇది ఆలోచనల మధ్య సంబంధాలను చూపే ఒక దృశ్య సాధనం (A), తార్కిక ఆలోచనను అభివృద్ధి చేయడంలో సహాయపడుతుంది (B), మరియు వివిధ డొమైన్‌లలోని భావనలను కనెక్ట్ చేయడానికి క్రాస్-లింక్‌లను ఉపయోగిస్తుంది (C)."
  },
  {
    "id": 119,
    "question": "Choose the correct statements among the following related to main objectives of Continuous Comprehensive Evaluation (CCE): A) To make evaluation an integral part of teaching learning process. B) To maintain desired standard of attainment. C) To provide scope for self-evaluation (TSTET 02 Jan 2025)\nనిరంతర సమగ్ర మూల్యాంకనం (CCE) యొక్క ప్రధాన లక్ష్యాలకు సంబంధించిన కింది ప్రకటనలలో సరైన వాటిని ఎంచుకోండి: A) మూల్యాంకనాన్ని బోధన-అభ్యాస ప్రక్రియలో అంతర్భాగం చేయడం. B) సాధించాల్సిన ప్రమాణాలను కాపాడుకోవడం. C) స్వీయ-మూల్యాంకనానికి అవకాశం కల్పించడం",
    "options": [
      "A & B only\nA & B మాత్రమే",
      "B & C only\nB & C మాత్రమే",
      "A & C only\nA & C మాత్రమే",
      "A, B & C\nA, B & C"
    ],
    "correctAnswer": 3,
    "explanation": "CCE యొక్క లక్ష్యాలు మూల్యాంకనాన్ని బోధనా-అభ్యాస ప్రక్రియతో ఏకీకృతం చేయడం (A), అభిప్రాయాన్ని ఉపయోగించి సాధన ప్రమాణాలను మెరుగుపరచడం మరియు నిర్వహించడం (B), మరియు స్వీయ-మూల్యాంకనం ద్వారా విద్యార్థులకు వారి స్వంత అభ్యాసాన్ని అర్థం చేసుకునేలా అధికారం కల్పించడం (C) వంటివి."
  },
  {
    "id": 120,
    "question": "A social science teacher organised cleanliness camp in a nearby village with school students. This activity relates to (TSTET 02 Jan 2025)\nఒక సాంఘిక శాస్త్ర ఉపాధ్యాయుడు పాఠశాల విద్యార్థులతో సమీపంలోని గ్రామంలో పరిశుభ్రతా శిబిరాన్ని నిర్వహించాడు. ఈ కార్యాచరణ దీనికి సంబంధించినది",
    "options": [
      "Bringing community to school\nసమాజాన్ని పాఠశాలకు తీసుకురావడం",
      "Taking the school to community\nపాఠశాలను సమాజానికి తీసుకెళ్లడం",
      "Implementation of higher authorities order\nఉన్నతాధికారుల ఆదేశాల అమలు",
      "It is one of the duties of a teacher\nఇది ఉపాధ్యాయుని విధులలో ఒకటి"
    ],
    "correctAnswer": 1,
    "explanation": "ఈ కార్యాచరణ సమాజ-ఆధారిత అభ్యాసానికి ఒక ఉదాహరణ, ఇది పాఠశాలను సమాజానికి సమర్థవంతంగా తీసుకువెళుతుంది. ఇది అభ్యాస వాతావరణాన్ని తరగతి గదికి మించి విస్తరిస్తుంది, విద్యాసంబంధ భావనలను వాస్తవ-ప్రపంచ సామాజిక బాధ్యతతో కలుపుతుంది."
  },
  {
    "id": 121,
    "question": "In India, while preparing maps we usually follow the conventions used by the (TSTET 05 Jan 2025)\nభారతదేశంలో, పటాలను తయారుచేసేటప్పుడు మనం సాధారణంగా వీరు ఉపయోగించే సంప్రదాయాలను అనుసరిస్తాము",
    "options": [
      "Indian Meteorological Department\nభారత వాతావరణ శాఖ",
      "National Mineral Development Corporation\nనేషనల్ మినరల్ డెవలప్‌మెంట్ కార్పొరేషన్",
      "Survey of India\nసర్వే ఆఫ్ ఇండియా",
      "Indian Geomatics Research Institute\nఇండియన్ జియోమాటిక్స్ రీసెర్చ్ ఇన్స్టిట్యూట్"
    ],
    "correctAnswer": 2,
    "explanation": "సర్వే ఆఫ్ ఇండియా అనేది సైన్స్ & టెక్నాలజీ విభాగం క్రింద దేశం యొక్క జాతీయ మ్యాపింగ్ ఏజెన్సీ. భారతదేశం యొక్క అన్ని టోపోగ్రాఫికల్ నియంత్రణ, సర్వేలు మరియు మ్యాపింగ్‌కు ఇది బాధ్యత వహిస్తుంది మరియు దేశంలో ఉత్పత్తి చేయబడిన పటాలకు సంప్రదాయాలను మరియు ప్రమాణాలను నిర్దేశిస్తుంది."
  },
  {
    "id": 122,
    "question": "The Sun's rays that reach the ground DO NOT heat the earth's surface uniformly, because of (TSTET 05 Jan 2025)\nభూమిని చేరే సూర్యకిరణాలు భూమి యొక్క ఉపరితలాన్ని ఏకరీతిగా వేడి చేయవు, ఎందుకంటే",
    "options": [
      "The vertical fall of Sun's rays on the surface of the earth\nభూమి యొక్క ఉపరితలంపై సూర్యకిరణాలు నిలువుగా పడటం",
      "The reflection of solar energy by the earth's atmosphere\nభూమి యొక్క వాతావరణం ద్వారా సౌర శక్తి యొక్క ప్రతిబింబం",
      "The Curved nature of the earth's surface\nభూమి యొక్క ఉపరితలం వక్రంగా ఉండటం",
      "The fall of harmful ultra violet rays of the sun on the surface of the earth\nసూర్యుని హానికరమైన అతినీలలోహిత కిరణాలు భూమి యొక్క ఉపరితలంపై పడటం"
    ],
    "correctAnswer": 2,
    "explanation": "భూమి యొక్క గోళాకార ఆకారం కారణంగా, సూర్యరశ్మి ఉపరితలంపై వివిధ కోణాలలో పడుతుంది. భూమధ్యరేఖ వద్ద, కిరణాలు మరింత ప్రత్యక్షంగా ఉంటాయి, వేడిని కేంద్రీకరిస్తాయి. ధ్రువాల వైపు, కిరణాలు ఏటవాలు కోణంలో పడతాయి, అదే మొత్తంలో శక్తిని పెద్ద ప్రాంతంలో వ్యాప్తి చేస్తాయి, ఫలితంగా తక్కువ తీవ్రమైన వేడి ఏర్పడుతుంది."
  },
  {
    "id": 123,
    "question": "Coriolis effect is responsible for (TSTET 05 Jan 2025)\nకోరియోలిస్ ప్రభావం దీనికి కారణం",
    "options": [
      "Deflecting of winds towards right in the northern hemisphere and towards left in the southern hemisphere\nఉత్తరార్ధగోళంలో గాలులు కుడివైపుకు మరియు దక్షిణార్ధగోళంలో ఎడమవైపుకు మళ్లడం",
      "Deflecting of winds towards right in the southern hemisphere and towards left in the northern hemisphere\nదక్షిణార్ధగోళంలో గాలులు కుడివైపుకు మరియు ఉత్తరార్ధగోళంలో ఎడమవైపుకు మళ్లడం",
      "Deflecting of winds towards right in the northern hemisphere and also towards right in the southern hemisphere\nఉత్తరార్ధగోళంలో గాలులు కుడివైపుకు మరియు దక్షిణార్ధగోళంలో కూడా కుడివైపుకు మళ్లడం",
      "Deflecting of winds towards left in the northern hemisphere and also towards left in the southern hemisphere\nఉత్తరార్ధగోళంలో గాలులు ఎడమవైపుకు మరియు దక్షిణార్ధగోళంలో కూడా ఎడమవైపుకు మళ్లడం"
    ],
    "correctAnswer": 0,
    "explanation": "భూమి యొక్క భ్రమణం వల్ల కలిగే కోరియోలిస్ ప్రభావం, కదులుతున్న వస్తువులను (గాలి ప్రవాహాల వంటివి) ఉత్తరార్ధగోళంలో కుడి వైపుకు మరియు దక్షిణార్ధగోళంలో ఎడమ వైపుకు మళ్లిస్తుంది. ఇది వాతావరణ శాస్త్రం మరియు సముద్ర శాస్త్రంలో ఒక ప్రాథమిక సూత్రం."
  },
  {
    "id": 124,
    "question": "Identify the INCORRECT statement regarding 'Thar Desert' (TSTET 05 Jan 2025)\n'థార్ ఎడారి'కి సంబంధించి తప్పు ప్రకటనను గుర్తించండి",
    "options": [
      "The Thar Desert has an arid climate with very low vegetation\nథార్ ఎడారి చాలా తక్కువ వృక్షసంపదతో శుష్క వాతావరణాన్ని కలిగి ఉంది",
      "Saraswathi is the only river flowing in this Desert\nసరస్వతి ఈ ఎడారిలో ప్రవహించే ఏకైక నది",
      "It is located on the leeward side of the Aravalli Mountains\nఇది ఆరావళి పర్వతాల వాయు పరాఙ్ముఖ దిశలో ఉంది",
      "Here, the Streams appear during rainy season and disappear soon after the end of the season\nఇక్కడ, వర్షాకాలంలో ప్రవాహాలు కనిపిస్తాయి మరియు ఆ కాలం ముగిసిన వెంటనే అదృశ్యమవుతాయి"
    ],
    "correctAnswer": 1,
    "explanation": "థార్ ఎడారి గుండా ప్రవహించే ఏకైక ముఖ్యమైన నది లూనీ నది. సరస్వతి ఒకప్పుడు ఈ ప్రాంతం గుండా ప్రవహించిందని నమ్మబడే ఒక పౌరాణిక లేదా పురాతన నది, కానీ ఇప్పుడు లేదు. అందువల్ల, సరస్వతి ఏకైక నది అనే ప్రకటన తప్పు."
  },
  {
    "id": 125,
    "question": "Which of the following statement correctly describes the term 'Weather'? (TSTET 05 Jan 2025)\nకింది వాటిలో ఏ ప్రకటన 'వాతావరణం' అనే పదాన్ని సరిగ్గా వివరిస్తుంది?",
    "options": [
      "It is a description of the condition of the atmosphere for small period of time\nఇది తక్కువ కాల వ్యవధికి వాతావరణం యొక్క పరిస్థితి యొక్క వర్ణన",
      "It is a description of the atmospheric conditions prevailing in the world for a period of one year\nఇది ఒక సంవత్సరం పాటు ప్రపంచంలో నెలకొని ఉన్న వాతావరణ పరిస్థితుల వర్ణన",
      "It is a description of the average atmospheric conditions for specific areas over a long period of time\nఇది సుదీర్ఘ కాలం పాటు నిర్దిష్ట ప్రాంతాలకు సగటు వాతావరణ పరిస్థితుల వర్ణన",
      "The atmospheric conditions that prevail over a long period of one hundred years and more\nనూట యాభై ఏళ్లు మరియు అంతకంటే ఎక్కువ కాలం పాటు కొనసాగే వాతావరణ పరిస్థితులు"
    ],
    "correctAnswer": 0,
    "explanation": "వాతావరణం అనేది ఒక నిర్దిష్ట సమయంలో మరియు ప్రదేశంలో వాతావరణం యొక్క స్థితిని సూచిస్తుంది, ఇందులో ఉష్ణోగ్రత, అవపాతం మరియు గాలి వంటి కారకాలు ఉంటాయి. ఇది స్వల్పకాలిక పరిస్థితులను వివరిస్తుంది, అయితే శీతోష్ణస్థితి దీర్ఘకాలిక వాతావరణ నమూనాలను వివరిస్తుంది."
  },
  {
    "id": 126,
    "question": "Fruits such as oranges, figs, olives and grapes are most commonly cultivated in these regions (TSTET 05 Jan 2025)\nనారింజ, అత్తి, ఆలివ్ మరియు ద్రాక్ష వంటి పండ్లు ఈ ప్రాంతాలలో సర్వసాధారణంగా పండించబడతాయి",
    "options": [
      "Coniferous Forest region\nశృంగాకార అటవీ ప్రాంతం",
      "Mediterranean Vegetation Region\nమధ్యధరా వృక్షసంపద ప్రాంతం",
      "Temperate Evergreen Forest Region\nసమశీతోష్ణ సతతహరిత అటవీ ప్రాంతం",
      "Tropical Deciduous Forest Region\nఉష్ణమండల ఆకురాల్చే అటవీ ప్రాంతం"
    ],
    "correctAnswer": 1,
    "explanation": "వేడి, పొడి వేసవి మరియు తేలికపాటి, తడి శీతాకాలాలతో కూడిన మధ్యధరా వాతావరణం, సిట్రస్ పండ్లు, ఆలివ్‌లు, అత్తి పండ్లు మరియు ద్రాక్షలను పెంచడానికి అనువైనది. ఈ రకమైన వ్యవసాయం మధ్యధరా సముద్రం చుట్టూ ఉన్న ప్రాంతాల యొక్క ఒక ముఖ్య లక్షణం."
  },
  {
    "id": 127,
    "question": "The Equator is NOT passing through one of the following countries (TSTET 05 Jan 2025)\nభూమధ్యరేఖ కింది దేశాలలో ఒకదాని గుండా వెళ్లడం లేదు",
    "options": [
      "Democratic Republic of Congo\nడెమొక్రాటిక్ రిపబ్లిక్ ఆఫ్ కాంగో",
      "Columbia\nకొలంబియా",
      "Brazil\nబ్రెజిల్",
      "Sri Lanka\nశ్రీలంక"
    ],
    "correctAnswer": 3,
    "explanation": "భూమధ్యరేఖ డెమొక్రాటిక్ రిపబ్లిక్ ఆఫ్ కాంగో, కొలంబియా మరియు బ్రెజిల్‌తో సహా 13 దేశాల గుండా వెళుతుంది. శ్రీలంక పూర్తిగా ఉత్తరార్ధగోళంలో, భూమధ్యరేఖకు కొన్ని డిగ్రీల ఉత్తరాన ఉంది."
  },
  {
    "id": 128,
    "question": "In terms of light years, the distance between the Earth and the Sun is (TSTET 05 Jan 2025)\nకాంతి సంవత్సరాల పరంగా, భూమికి మరియు సూర్యునికి మధ్య దూరం",
    "options": [
      "9.131 minutes",
      "7.232 minutes",
      "8.311 minutes",
      "4.124 minutes"
    ],
    "correctAnswer": 2,
    "explanation": "సూర్యుని నుండి కాంతి భూమిని చేరడానికి పట్టే సమయం గురించి ప్రశ్న అడుగుతుంది. సూర్యుని నుండి భూమికి ఉన్న సగటు దూరాన్ని బట్టి, సూర్యకాంతి ఈ దూరాన్ని ప్రయాణించడానికి సుమారు 8.3 నిమిషాలు పడుతుంది."
  },
  {
    "id": 129,
    "question": "Read the following statements and choose the correct answer (TSTET 05 Jan 2025)\nA) Volcanic eruptions and the Deep Ocean Drilling projects form an important source of direct information regarding the interior of the earth\nB) The seismic activity and the gravitation force of the earth form an indirect source of information regarding the interior of the earth\nకింది ప్రకటనలను చదివి సరైన సమాధానాన్ని ఎంచుకోండి\nA) అగ్నిపర్వత విస్ఫోటనాలు మరియు డీప్ ఓషన్ డ్రిల్లింగ్ ప్రాజెక్టులు భూమి యొక్క అంతర్భాగం గురించి ప్రత్యక్ష సమాచారం యొక్క ముఖ్యమైన మూలం\nB) భూకంప కార్యకలాపాలు మరియు భూమి యొక్క గురుత్వాకర్షణ శక్తి భూమి యొక్క అంతర్భాగం గురించి పరోక్ష సమాచార మూలాన్ని ఏర్పరుస్తాయి",
    "options": [
      "Both A and B are correct\nA మరియు B రెండూ సరైనవి",
      "A is correct and B is incorrect\nA సరైనది మరియు B తప్పు",
      "B is correct and A is incorrect\nB సరైనది మరియు A తప్పు",
      "Both A and B are incorrect\nA మరియు B రెండూ తప్పు"
    ],
    "correctAnswer": 0,
    "explanation": "ప్రకటన A సరైనది ఎందుకంటే అగ్నిపర్వత లావా మరియు లోతైన డ్రిల్లింగ్ ప్రాజెక్టుల నుండి వచ్చే పదార్థాలు భౌతిక నమూనాలను అందిస్తాయి, వాటిని ప్రత్యక్ష మూలాలుగా చేస్తాయి. ప్రకటన B కూడా సరైనది ఎందుకంటే భూకంప తరంగాలు మరియు గురుత్వాకర్షణ శక్తిని ప్రత్యక్ష పరిశీలన లేకుండా భూమి యొక్క అంతర్భాగం యొక్క లక్షణాలను అంచనా వేయడానికి విశ్లేషించబడతాయి, వాటిని పరోక్ష మూలాలుగా చేస్తాయి."
  },
  {
    "id": 130,
    "question": "The eastward extension of the Central Highlands is locally known as (TSTET 05 Jan 2025)\nమధ్య ఉన్నత భూముల తూర్పు విస్తరణ స్థానికంగా ఇలా పిలువబడుతుంది",
    "options": [
      "Bundelkhand and Baghelkhand\nబుందేల్‌ఖండ్ మరియు బఘేల్‌ఖండ్",
      "Chota Nagpur Plateau\nఛోటా నాగపూర్ పీఠభూమి",
      "Malwa Plateau\nమాల్వా పీఠభూమి",
      "Karbi-Anglang Plateau\nకర్బి-ఆంగ్లాంగ్ పీఠభూమి"
    ],
    "correctAnswer": 0,
    "explanation": "భారతదేశంలోని మధ్య ఉన్నత భూములలో పశ్చిమాన మాల్వా పీఠభూమి ఉంటుంది. అవి తూర్పు వైపు విస్తరించినప్పుడు, వాటిని బుందేల్‌ఖండ్ మరియు బఘేల్‌ఖండ్ పీఠభూములు అని పిలుస్తారు. ఇంకా తూర్పున ఛోటా నాగపూర్ పీఠభూమి ఉంది."
  },
  {
    "id": 131,
    "question": "The Indian Peninsular Plateau is a table land composed of these rocks (TSTET 05 Jan 2025)\nభారత ద్వీపకల్ప పీఠభూమి ఈ శిలలతో కూడిన పట్టిక భూమి",
    "options": [
      "Sedimentary and Igneous rocks\nఅవక్షేప మరియు అగ్ని శిలలు",
      "Sedimentary and Metamorphic rocks\nఅవక్షేప మరియు రూపాంతర శిలలు",
      "Sedimentary and Crystalline rocks\nఅవక్షేప మరియు స్ఫటికాకార శిలలు",
      "Crystalline, Igneous and Metamorphic rocks\nస్ఫటికాకార, అగ్ని మరియు రూపాంతర శిలలు"
    ],
    "correctAnswer": 3,
    "explanation": "ద్వీపకల్ప పీఠభూమి భూమిపై ఉన్న పురాతన భూభాగాలలో ఒకటి. ఇది ప్రధానంగా పురాతన స్ఫటికాకార, అగ్ని మరియు రూపాంతర శిలలతో కూడి ఉంది, ఇది పురాతన అగ్నిపర్వత కార్యకలాపాలు మరియు తదుపరి భౌగోళిక పరివర్తనల ఫలితంగా ఏర్పడింది."
  },
  {
    "id": 132,
    "question": "Identify the INCORRECT statement regarding cotton crop (TSTET 05 Jan 2025)\nపత్తి పంటకు సంబంధించి తప్పు ప్రకటనను గుర్తించండి",
    "options": [
      "Cotton grows well in the drier parts with black soils in the Deccan Plateau\nదక్కన్ పీఠభూమిలోని నల్ల నేలలతో కూడిన పొడి ప్రాంతాలలో పత్తి బాగా పెరుగుతుంది",
      "Cotton requires high temperature, light rainfall or irrigation with 210 frost free days\nపత్తికి అధిక ఉష్ణోగ్రత, తేలికపాటి వర్షపాతం లేదా 210 మంచు లేని రోజులతో నీటిపారుదల అవసరం",
      "India is the largest producer of cotton in the world\nప్రపంచంలో పత్తిని అత్యధికంగా ఉత్పత్తి చేసే దేశం భారతదేశం",
      "Cotton is a kharief crop and its duration is 6 to 8 months\nపత్తి ఒక ఖరీఫ్ పంట మరియు దాని వ్యవధి 6 నుండి 8 నెలలు"
    ],
    "correctAnswer": 2,
    "explanation": "భారతదేశం పత్తి యొక్క ప్రముఖ ఉత్పత్తిదారులలో ఒకటి అయినప్పటికీ, ఇది తరచుగా అగ్రస్థానం కోసం చైనాతో పోటీపడుతుంది మరియు స్థిరంగా అతిపెద్ద ఏకైక ఉత్పత్తిదారు కాదు. భారతదేశంలో పత్తి సాగుకు సంబంధించిన అన్ని ఇతర ప్రకటనలు సరైనవి."
  },
  {
    "id": 133,
    "question": "In this phase of Agricultural Development in India, the Government of India introduced new kind of seeds to the Indian Soil which were invented in various agricultural institutions in India as well as other countries (TSTET 05 Jan 2025)\nభారతదేశంలో వ్యవసాయ అభివృద్ధి యొక్క ఈ దశలో, భారత ప్రభుత్వం భారతదేశంతో పాటు ఇతర దేశాలలోని వివిధ వ్యవసాయ సంస్థలలో కనుగొనబడిన కొత్త రకం విత్తనాలను భారత భూమికి పరిచయం చేసింది",
    "options": [
      "First Phase\nమొదటి దశ",
      "Second Phase\nరెండవ దశ",
      "Third Phase\nమూడవ దశ",
      "Fourth Phase\nనాల్గవ దశ"
    ],
    "correctAnswer": 1,
    "explanation": "1960ల మధ్యలో ప్రారంభమైన భారతదేశంలో వ్యవసాయ అభివృద్ధి యొక్క రెండవ దశను హరిత విప్లవం అని పిలుస్తారు. ఈ దశ అధిక-దిగుబడినిచ్చే రకం (HYV) విత్తనాల పరిచయంతో వర్గీకరించబడింది, ఇది ఆహార ధాన్యాల ఉత్పత్తిని గణనీయంగా పెంచింది."
  },
  {
    "id": 134,
    "question": "National Aluminium Company Limited (NALCO) is located in this state of India (TSTET 05 Jan 2025)\nనేషనల్ అల్యూమినియం కంపెనీ లిమిటెడ్ (NALCO) భారతదేశంలోని ఈ రాష్ట్రంలో ఉంది",
    "options": [
      "Chattisgarh\nఛత్తీస్‌గఢ్",
      "Jharkhand\nజార్ఖండ్",
      "Odisha\nఒడిశా",
      "West Bengal\nపశ్చిమ బెంగాల్"
    ],
    "correctAnswer": 2,
    "explanation": "నేషనల్ అల్యూమినియం కంపెనీ లిమిటెడ్ (NALCO) దాని రిజిస్టర్డ్ కార్యాలయం మరియు కార్పొరేట్ ప్రధాన కార్యాలయం ఒడిశాలోని భువనేశ్వర్‌లో ఉంది. దాని ప్రధాన కార్యకలాపాలు, బాక్సైట్ మైనింగ్ మరియు అల్యూమినా రిఫైనరీతో సహా, ఒడిశాలో కూడా ఉన్నాయి."
  },
  {
    "id": 135,
    "question": "These plains of India are protected from the cold winds of Central Asia during severe winter because of the Himalayan Mountains (TSTET 05 Jan 2025)\nహిమాలయ పర్వతాల కారణంగా తీవ్రమైన శీతాకాలంలో మధ్య ఆసియా యొక్క చల్లని గాలుల నుండి భారతదేశంలోని ఈ మైదానాలు రక్షించబడతాయి",
    "options": [
      "The Sundarbans\nసుందర్బన్స్",
      "The Indo-Gangetic Plain\nఇండో-గంగా మైదానం",
      "The East Coast Plain\nతూర్పు తీర మైదానం",
      "The West Coast Plain\nపశ్చిమ తీర మైదానం"
    ],
    "correctAnswer": 1,
    "explanation": "హిమాలయ పర్వత శ్రేణి ఒక భారీ వాతావరణ అవరోధంగా పనిచేస్తుంది, మధ్య ఆసియా నుండి వచ్చే శీతల గాలులు భారత ఉపఖండంలోకి రాకుండా నిరోధిస్తుంది. ఇది విస్తారమైన ఇండో-గంగా మైదానాన్ని అత్యంత శీతల శీతాకాలాలను అనుభవించకుండా కాపాడుతుంది."
  },
  {
    "id": 136,
    "question": "As per Human Development Report 2021. The Human Development Index of Sri Lanka was 0.782, then Sri Lanka was in this category of Human Development (TSTET 05 Jan 2025)\nమానవ అభివృద్ధి నివేదిక 2021 ప్రకారం. శ్రీలంక మానవ అభివృద్ధి సూచిక 0.782, అప్పుడు శ్రీలంక ఈ మానవ అభివృద్ధి విభాగంలో ఉంది",
    "options": [
      "Very High Human Development\nఅత్యధిక మానవ అభివృద్ధి",
      "High Human Development\nఅధిక మానవ అభివృద్ధి",
      "Moderate Human Development\nమితమైన మానవ అభివృద్ధి",
      "Low Human Development\nతక్కువ మానవ అభివృద్ధి"
    ],
    "correctAnswer": 1,
    "explanation": "UNDP యొక్క మానవ అభివృద్ధి సూచిక (HDI) వర్గీకరణ ప్రకారం, 0.700 మరియు 0.799 మధ్య సూచిక విలువ 'అధిక మానవ అభివృద్ధి' వర్గంలోకి వస్తుంది. అందువల్ల, శ్రీలంక యొక్క HDI 0.782 దానిని ఈ వర్గంలో ఉంచుతుంది."
  },
  {
    "id": 137,
    "question": "The Policy of Appeasement of Hitler was followed by these countries (TSTET 05 Jan 2025)\nహిట్లర్ యొక్క బుజ్జగింపు విధానాన్ని ఈ దేశాలు అనుసరించాయి",
    "options": [
      "Great Britain and France\nగ్రేట్ బ్రిటన్ మరియు ఫ్రాన్స్",
      "Russia and France\nరష్యా మరియు ఫ్రాన్స్",
      "China and Great Britain\nచైనా మరియు గ్రేట్ బ్రిటన్",
      "Great Britain and Russia\nగ్రేట్ బ్రిటన్ మరియు రష్యా"
    ],
    "correctAnswer": 0,
    "explanation": "1930లలో, బ్రిటన్ మరియు ఫ్రాన్స్ నాజీ జర్మనీ పట్ల బుజ్జగింపు విధానాన్ని అవలంబించాయి, మరో పెద్ద యుద్ధాన్ని నివారించే ఆశతో హిట్లర్ డిమాండ్లకు రాజకీయ మరియు భౌతిక రాయితీలు ఇచ్చాయి. 1938 నాటి మ్యూనిచ్ ఒప్పందం దీనికి ఒక ప్రధాన ఉదాహరణ."
  },
  {
    "id": 138,
    "question": "In 1806 CE, this ruler of France conquered the small independent Kingdoms of Germany and formed the Rhine Confederation (TSTET 05 Jan 2025)\nసా.శ. 1806లో, ఫ్రాన్స్‌కు చెందిన ఈ పాలకుడు జర్మనీలోని చిన్న స్వతంత్ర రాజ్యాలను జయించి రైన్ సమాఖ్యను ఏర్పాటు చేశాడు",
    "options": [
      "Charles X\nచార్లెస్ X",
      "Napoleon Bonaparte\nనెపోలియన్ బోనపార్టే",
      "Napoleon III\nనెపోలియన్ III",
      "Louie XVIII\nలూయీ XVIII"
    ],
    "correctAnswer": 1,
    "explanation": "1806లో, ఆస్టర్లిట్జ్ యుద్ధంలో తన విజయం తరువాత, నెపోలియన్ బోనపార్టే జర్మన్ రాష్ట్రాలను పునర్వ్యవస్థీకరించి, రైన్ సమాఖ్యను స్థాపించాడు, ఇది మొదటి ఫ్రెంచ్ సామ్రాజ్యం యొక్క క్లయింట్ రాష్ట్రాల సమాఖ్య."
  },
  {
    "id": 139,
    "question": "Which of the following statements rightly describes the \"Constitutional Monarchy?\" (TSTET 05 Jan 2025)\nకింది వాటిలో ఏది \"రాజ్యాంగబద్ధమైన రాచరికం?\"ను సరిగ్గా వివరిస్తుంది?",
    "options": [
      "The power of the king was not a divine right but it was granted by the Parliament\nరాజు యొక్క అధికారం దైవిక హక్కు కాదు కానీ అది పార్లమెంటుచే మంజూరు చేయబడింది",
      "The power of the king was hereditary. Hence, he can enjoy all the powers\nరాజు యొక్క అధికారం వంశపారంపర్యమైనది. కాబట్టి, అతను అన్ని అధికారాలను అనుభవించగలడు",
      "The king is elected by the people of the country, so he enjoys all rights\nరాజు దేశ ప్రజలచే ఎన్నుకోబడతాడు, కాబట్టి అతను అన్ని హక్కులను అనుభవిస్తాడు",
      "The king who was appointed by the Parliament has an absolute power\nపార్లమెంటుచే నియమించబడిన రాజుకు సంపూర్ణ అధికారం ఉంటుంది"
    ],
    "correctAnswer": 0,
    "explanation": "రాజ్యాంగబద్ధమైన రాచరికం అనేది ఒక ప్రభుత్వ రూపం, ఇక్కడ ఒక రాజు రాజ్యాంగం యొక్క పరిమితులలో దేశాధినేతగా వ్యవహరిస్తాడు. రాజు యొక్క అధికారాలు చట్టం ద్వారా పరిమితం చేయబడతాయి మరియు వారు సంపూర్ణ అధికారాన్ని కలిగి ఉండరు లేదా దైవిక హక్కుతో పాలించరు."
  },
  {
    "id": 140,
    "question": "By the middle of the 18th century, England and other European countries had established their colonies in this part of North America (TSTET 05 Jan 2025)\n18వ శతాబ్దం మధ్య నాటికి, ఇంగ్లాండ్ మరియు ఇతర యూరోపియన్ దేశాలు ఉత్తర అమెరికాలోని ఈ భాగంలో తమ కాలనీలను స్థాపించాయి",
    "options": [
      "Eastern Coast\nతూర్పు తీరం",
      "Western Coast\nపశ్చిమ తీరం",
      "North-western Part\nవాయువ్య భాగం",
      "South-western Part\nనైరుతి భాగం"
    ],
    "correctAnswer": 0,
    "explanation": "గ్రేట్ బ్రిటన్ యొక్క పదమూడు కాలనీలతో సహా ఉత్తర అమెరికా యొక్క ప్రారంభ యూరోపియన్ వలసరాజ్యం అట్లాంటిక్ లేదా తూర్పు తీరం వెంబడి కేంద్రీకృతమై ఉంది, ఎందుకంటే ఇది ఐరోపాకు సమీపంలో ఉండటం వలన, నివాసం మరియు వాణిజ్యానికి అందుబాటులో ఉంది."
  },
  {
    "id": 141,
    "question": "In 1861. the British developed this as their centre of administration, trade and education in Western Africa (TSTET 05 Jan 2025)\n1861లో. బ్రిటిష్ వారు పశ్చిమ ఆఫ్రికాలో పరిపాలన, వాణిజ్యం మరియు విద్యకు కేంద్రంగా దీనిని అభివృద్ధి చేశారు",
    "options": [
      "Cape Town\nకేప్ టౌన్",
      "Lagos\nలాగోస్",
      "Free Town\nఫ్రీ టౌన్",
      "Accra\nఅక్రా"
    ],
    "correctAnswer": 1,
    "explanation": "బ్రిటిష్ వారు 1861లో లాగోస్‌ను స్వాధీనం చేసుకుని దానిని క్రౌన్ కాలనీగా మార్చారు. దాని వ్యూహాత్మక ఓడరేవు మరియు పెరుగుతున్న ఆర్థిక ప్రాముఖ్యత కారణంగా ఇది పశ్చిమ ఆఫ్రికాలోని బ్రిటిష్ వారికి కీలకమైన పరిపాలనా మరియు వాణిజ్య కేంద్రంగా మారింది."
  },
  {
    "id": 142,
    "question": "The primary purpose of \"Fa-Hieun's\" journey to India in the early 5th century was (TSTET 05 Jan 2025)\n5వ శతాబ్దం ప్రారంభంలో \"ఫా-హియాన్\" భారతదేశ యాత్ర యొక్క ప్రాథమిక ఉద్దేశ్యం",
    "options": [
      "To establish trade routes\nవాణిజ్య మార్గాలను స్థాపించడానికి",
      "To study Buddhism and collect sacred texts\nబౌద్ధమతాన్ని అధ్యయనం చేయడానికి మరియు పవిత్ర గ్రంథాలను సేకరించడానికి",
      "To explore the geography of India\nభారతదేశ భూగోళశాస్త్రాన్ని అన్వేషించడానికి",
      "To spread Chinese culture\nచైనీస్ సంస్కృతిని వ్యాప్తి చేయడానికి"
    ],
    "correctAnswer": 1,
    "explanation": "ఫా-హియాన్ (ఫాక్సియన్) రెండవ చంద్రగుప్తుని పాలనలో భారతదేశానికి ప్రయాణించిన ఒక చైనీస్ బౌద్ధ సన్యాసి. అతని ప్రధాన లక్ష్యం బౌద్ధ గ్రంథాలను (సూత్రాలను) సంపాదించడం మరియు పవిత్ర బౌద్ధ ప్రదేశాలను సందర్శించడం."
  },
  {
    "id": 143,
    "question": "The Second Buddhist Council was held at (TSTET 05 Jan 2025)\nరెండవ బౌద్ధ మండలి ఇక్కడ జరిగింది",
    "options": [
      "Rajgir\nరాజ్‌గిర్",
      "Pataliputra\nపాటలీపుత్ర",
      "Vaishali\nవైశాలి",
      "Sarnath\nసారనాథ్"
    ],
    "correctAnswer": 2,
    "explanation": "బుద్ధుని పరినిర్వాణం తర్వాత సుమారు 100 సంవత్సరాలకు రెండవ బౌద్ధ మండలి వైశాలిలో జరిగింది. ఇది సన్యాసుల క్రమశిక్షణ (వినయ) పై వివాదాన్ని పరిష్కరించడానికి సమావేశపరచబడింది మరియు సంఘంలో మొదటి ప్రధాన చీలికకు దారితీసింది."
  },
  {
    "id": 144,
    "question": "The main purpose of establishing the Dutch East India Company in India was (TSTET 05 Jan 2025)\nభారతదేశంలో డచ్ ఈస్ట్ ఇండియా కంపెనీని స్థాపించడం యొక్క ప్రధాన ఉద్దేశ్యం",
    "options": [
      "To promote Christianity\nక్రైస్తవ మతాన్ని ప్రోత్సహించడానికి",
      "To trade in spices\nసుగంధ ద్రవ్యాలలో వ్యాపారం చేయడానికి",
      "To Supply Guns\nతుపాకులను సరఫరా చేయడానికి",
      "To build military alliances\nసైనిక పొత్తులను నిర్మించడానికి"
    ],
    "correctAnswer": 1,
    "explanation": "డచ్ ఈస్ట్ ఇండియా కంపెనీ (VOC) యొక్క ప్రాథమిక ఉద్దేశ్యం ఆర్థికమైనది. వారు తూర్పు ఇండీస్ నుండి మిరియాలు, లవంగాలు మరియు జాజికాయ వంటి లాభదాయకమైన సుగంధ ద్రవ్యాల వాణిజ్యాన్ని నియంత్రించడానికి ప్రయత్నించారు, ఇవి ఐరోపాలో అధిక విలువను కలిగి ఉండేవి."
  },
  {
    "id": 145,
    "question": "Among the following, the famous fort associated with Shivaji Maharaj was (TSTET 05 Jan 2025)\nకింది వాటిలో, శివాజీ మహారాజ్‌తో సంబంధం ఉన్న ప్రసిద్ధ కోట",
    "options": [
      "Kochi Fort\nకొచ్చి కోట",
      "Raigad Fort\nరాయగడ్ కోట",
      "Agra Fort\nఆగ్రా కోట",
      "Gwalior Fort\nగ్వాలియర్ కోట"
    ],
    "correctAnswer": 1,
    "explanation": "రాయగడ్ కోట ఛత్రపతి శివాజీ మహారాజ్ ఆధ్వర్యంలో మరాఠా సామ్రాజ్యానికి రాజధాని. అతను 1674లో ఈ కోటలో పట్టాభిషిక్తుడయ్యాడు మరియు ఇది అతని పరిపాలనకు కేంద్రంగా పనిచేసింది."
  },
  {
    "id": 146,
    "question": "The major failure of Muhammad Bin Tughlaq's reign was (TSTET 05 Jan 2025)\nముహమ్మద్ బిన్ తుగ్లక్ పాలన యొక్క ప్రధాన వైఫల్యం",
    "options": [
      "Undertaking military campaigns in South India\nదక్షిణ భారతదేశంలో సైనిక ప్రచారాలను చేపట్టడం",
      "The introduction of token currency\nటోకెన్ కరెన్సీని ప్రవేశపెట్టడం",
      "Strengthening of the administrative system\nపరిపాలనా వ్యవస్థను బలోపేతం చేయడం",
      "Not establishing diplomatic relations with neighbouring kingdoms\nపొరుగు రాజ్యాలతో దౌత్య సంబంధాలను ఏర్పరచుకోకపోవడం"
    ],
    "correctAnswer": 1,
    "explanation": "ముహమ్మద్ బిన్ తుగ్లక్ యొక్క టోకెన్ కరెన్సీ ప్రయోగం అతని అత్యంత ముఖ్యమైన వైఫల్యాలలో ఒకటిగా పరిగణించబడుతుంది. అతను వెండి నాణేలతో సమానమైన విలువతో ఇత్తడి మరియు రాగి నాణేలను ప్రవేశపెట్టాడు, కానీ విస్తృతమైన నకిలీలు కరెన్సీ విలువ పతనానికి మరియు తీవ్రమైన ఆర్థిక అంతరాయానికి దారితీశాయి."
  },
  {
    "id": 147,
    "question": "The significant contribution of Raja Raja Chola I to temple architecture was the construction of (TSTET 05 Jan 2025)\nఆలయ నిర్మాణానికి రాజ రాజ చోళుడు I యొక్క ముఖ్యమైన సహకారం ఈ నిర్మాణం",
    "options": [
      "The Brihadeeswarar Temple\nబృహదీశ్వరాలయం",
      "The Meenakshi Temple\nమీనాక్షి ఆలయం",
      "The Lingaraja Temple\nలింగరాజ ఆలయం",
      "The Shore Temple\nతీర దేవాలయం"
    ],
    "correctAnswer": 0,
    "explanation": "రాజ రాజ చోళుడు I తంజావూరులో బృహదీశ్వరాలయాన్ని నిర్మించాడు. సా.శ. 1010లో పూర్తి చేయబడిన ఇది ద్రావిడ వాస్తుశిల్పం యొక్క ఒక అద్భుతమైన కళాఖండం మరియు UNESCO ప్రపంచ వారసత్వ ప్రదేశం."
  },
  {
    "id": 148,
    "question": "Directive Principles of State Policy' aim to promote (TSTET 05 Jan 2025)\n'రాష్ట్ర విధాన నిర్దేశక సూత్రాలు' దీనిని ప్రోత్సహించాలని లక్ష్యంగా పెట్టుకున్నాయి",
    "options": [
      "Political Freedom\nరాజకీయ స్వేచ్ఛ",
      "Social Justice\nసామాజిక న్యాయం",
      "Economic Growth\nఆర్థిక వృద్ధి",
      "Individual Rights\nవ్యక్తిగత హక్కులు"
    ],
    "correctAnswer": 1,
    "explanation": "భారత రాజ్యాంగంలోని రాష్ట్ర విధాన నిర్దేశక సూత్రాలు (DPSP) న్యాయమైన సమాజాన్ని సృష్టించడానికి ప్రభుత్వానికి మార్గదర్శకాలు. అవి సామాజిక మరియు ఆర్థిక న్యాయం, సంక్షేమం మరియు సమానత్వాన్ని ప్రోత్సహించాలని లక్ష్యంగా పెట్టుకున్నాయి, ముఖ్యంగా ఒక సంక్షేమ రాజ్యాన్ని స్థాపించాలని లక్ష్యంగా పెట్టుకున్నాయి."
  },
  {
    "id": 149,
    "question": "In India, one of the following can be amended with Special majority in both the houses of the parliament (TSTET 05 Jan 2025)\nభారతదేశంలో, కింది వాటిలో ఒకటి పార్లమెంటు ఉభయ సభలలో ప్రత్యేక మెజారిటీతో సవరించబడుతుంది",
    "options": [
      "Fundamental Rights incorporated in the Indian Constitution\nభారత రాజ్యాంగంలో పొందుపరచబడిన ప్రాథమిక హక్కులు",
      "Election of the President and its manner\nరాష్ట్రపతి ఎన్నిక మరియు దాని విధానం",
      "Extent of the executive power of the Union and the States\nకేంద్ర మరియు రాష్ట్రాల కార్యనిర్వాహక అధికారం యొక్క పరిధి",
      "Provisions related to the Supreme Court and High courts, etc.\nసుప్రీంకోర్టు మరియు హైకోర్టులకు సంబంధించిన నిబంధనలు, మొదలైనవి."
    ],
    "correctAnswer": 0,
    "explanation": "ప్రాథమిక హక్కులను సవరించడానికి పార్లమెంటు యొక్క ప్రత్యేక మెజారిటీ అవసరం. ఇతర ఎంపికలు సమాఖ్య నిర్మాణానికి సంబంధించినవి మరియు ప్రత్యేక మెజారిటీతో పాటు సగం రాష్ట్ర శాసనసభల ఆమోదం అవసరం."
  },
  {
    "id": 150,
    "question": "The President of India proclaims the National Emergency on the written advice of (TSTET 05 Jan 2025)\nభారత రాష్ట్రపతి వీరి లిఖితపూర్వక సలహాపై జాతీయ అత్యవసర పరిస్థితిని ప్రకటిస్తారు",
    "options": [
      "Prime Minister\nప్రధానమంత్రి",
      "Chief Justice of India\nభారత ప్రధాన న్యాయమూర్తి",
      "Union Council of Ministers\nకేంద్ర మంత్రి మండలి",
      "National Investigation Agency and RAW\nజాతీయ దర్యాప్తు సంస్థ మరియు RAW"
    ],
    "correctAnswer": 2,
    "explanation": "1978 నాటి 44వ సవరణ చట్టం, కేంద్ర క్యాబినెట్ (ఇది కేంద్ర మంత్రి మండలి యొక్క ప్రధాన భాగం) నుండి లిఖితపూర్వక సిఫార్సును పొందిన తర్వాత మాత్రమే రాష్ట్రపతి జాతీయ అత్యవసర పరిస్థితిని ప్రకటించడం తప్పనిసరి చేసింది."
  },
  {
    "id": 151,
    "question": "The primary goal of UNICEF is to (TSTET 05 Jan 2025)\nUNICEF యొక్క ప్రాథమిక లక్ష్యం",
    "options": [
      "Promote gender equality\nలింగ సమానత్వాన్ని ప్రోత్సహించడం",
      "Provide humanitarian assistance\nమానవతా సహాయం అందించడం",
      "Support children's rights and welfare\nపిల్లల హక్కులు మరియు సంక్షేమానికి మద్దతు ఇవ్వడం",
      "Combat climate change\nవాతావరణ మార్పులతో పోరాడటం"
    ],
    "correctAnswer": 2,
    "explanation": "UNICEF అనగా ఐక్యరాజ్యసమితి బాలల నిధి. దీని ప్రాథమిక లక్ష్యం పిల్లల హక్కుల పరిరక్షణ కోసం వాదించడం, వారి ప్రాథమిక అవసరాలను తీర్చడంలో సహాయపడటం మరియు వారి పూర్తి సామర్థ్యాన్ని చేరుకోవడానికి వారి అవకాశాలను విస్తరించడం."
  },
  {
    "id": 152,
    "question": "Read the following statements (TSTET 05 Jan 2025)\nA) The Union Council of Ministers must have membership in either house of the Parliament i.e. Lok Sabha or Rajya Sabha\nB) If the Union Council of Ministers are not members of the Parliament they should be elected or nominated to either of the two houses of the Parliament within one year from the date of assumption of their office\nకింది ప్రకటనలను చదవండి (TSTET 05 Jan 2025)\nA) కేంద్ర మంత్రి మండలికి పార్లమెంటులోని ఏదైనా సభలో, అనగా లోక్‌సభ లేదా రాజ్యసభలో సభ్యత్వం ఉండాలి\nB) కేంద్ర మంత్రి మండలి సభ్యులు పార్లమెంటు సభ్యులు కాకపోతే, వారు పదవీ బాధ్యతలు స్వీకరించిన తేదీ నుండి ఒక సంవత్సరంలోపు పార్లమెంటులోని రెండు సభలలో దేనికైనా ఎన్నికవ్వాలి లేదా నామినేట్ చేయబడాలి",
    "options": [
      "Both 'A' and 'B' are correct\n'A' మరియు 'B' రెండూ సరైనవి",
      "Both 'A' and 'B' are incorrect\n'A' మరియు 'B' రెండూ తప్పు",
      "'A' is correct and 'B' is incorrect\n'A' సరైనది మరియు 'B' తప్పు",
      "'B' is correct and 'A' is incorrect\n'B' సరైనది మరియు 'A' తప్పు"
    ],
    "correctAnswer": 2,
    "explanation": "ప్రకటన A సరైనది. ఒక మంత్రి పార్లమెంటులోని ఏదైనా సభలో సభ్యుడిగా ఉండాలి. అయితే, ప్రకటన B తప్పు, ఎందుకంటే సభ్యుడు కాని వ్యక్తి మంత్రి కావచ్చు కానీ ఒక సంవత్సరంలోపు కాకుండా ఆరు నెలల్లోగా సభ్యుడు కావాలి."
  },
  {
    "id": 153,
    "question": "One among the following is elected for a term of six years (TSTET 05 Jan 2025)\nకింది వారిలో ఒకరు ఆరు సంవత్సరాల కాలానికి ఎన్నుకోబడతారు",
    "options": [
      "Lok Sabha member\nలోక్‌సభ సభ్యుడు",
      "Rajya sabha member\nరాజ్యసభ సభ్యుడు",
      "Chairman of Rajya Sabha\nరాజ్యసభ చైర్మన్",
      "Speaker of Lok Sabha\nలోక్‌సభ స్పీకర్"
    ],
    "correctAnswer": 1,
    "explanation": "రాజ్యసభ (కౌన్సిల్ ఆఫ్ స్టేట్స్) సభ్యులు ఆరు సంవత్సరాల కాలానికి ఎన్నుకోబడతారు, ప్రతి రెండు సంవత్సరాలకు మూడింట ఒక వంతు సభ్యులు పదవీ విరమణ చేస్తారు. లోక్‌సభ సభ్యుల పదవీకాలం ఐదు సంవత్సరాలు."
  },
  {
    "id": 154,
    "question": "Identify the true statement regarding Bills (TSTET 05 Jan 2025)\nబిల్లులకు సంబంధించి సరైన ప్రకటనను గుర్తించండి",
    "options": [
      "Money bills can be introduced in either house of the Parliament\nద్రవ్య బిల్లులను పార్లమెంటులోని ఏ సభలోనైనా ప్రవేశపెట్టవచ్చు",
      "President's prior permission is required for introducing the ordinary bill in the Parliament\nసాధారణ బిల్లును పార్లమెంటులో ప్రవేశపెట్టడానికి రాష్ట్రపతి ముందస్తు అనుమతి అవసరం",
      "Deputy Speaker of Rajya Sabha certifies whether the bill is a money bill or not before sending it to the President\nరాజ్యసభ డిప్యూటీ స్పీకర్ బిల్లును రాష్ట్రపతికి పంపే ముందు అది ద్రవ్య బిల్లా కాదా అని ధృవీకరిస్తారు",
      "There will be a joint sitting of both the houses of Parliament, if the ordinary bill is not passed by the Lok Sabha and Rajya Sabha\nసాధారణ బిల్లు లోక్‌సభ మరియు రాజ్యసభలో ఆమోదం పొందకపోతే, పార్లమెంటు ఉభయ సభల సంయుక్త సమావేశం జరుగుతుంది"
    ],
    "correctAnswer": 3,
    "explanation": "ఒక సాధారణ బిల్లుపై ప్రతిష్టంభన ఏర్పడినప్పుడు, ఆ వివాదాన్ని పరిష్కరించడానికి రాజ్యాంగం ఉభయ సభల సంయుక్త సమావేశానికి వీలు కల్పిస్తుంది. ద్రవ్య బిల్లులను లోక్‌సభలో మాత్రమే ప్రవేశపెట్టగలరు, మరియు లోక్‌సభ స్పీకర్ వాటిని ధృవీకరిస్తారు."
  },
  {
    "id": 155,
    "question": "The landlord forced a 13-year old child to work in his cotton field without paying any wages or paying very low wages. It would be a violation of this Fundamental Right (TSTET 05 Jan 2025)\nఒక భూస్వామి 13 ఏళ్ల బాలుడిని తన పత్తి చేనులో ఎటువంటి వేతనం చెల్లించకుండా లేదా చాలా తక్కువ వేతనంతో పని చేయమని బలవంతం చేశాడు. ఇది ఈ ప్రాథమిక హక్కును ఉల్లంఘించడమే అవుతుంది",
    "options": [
      "Right to Equality\nసమానత్వపు హక్కు",
      "Right to freedom\nస్వేచ్ఛా హక్కు",
      "Right against exploitation\nపీడనకు వ్యతిరేకంగా హక్కు",
      "Right against Constitutional Remedies\nరాజ్యాంగ పరిహారాల హక్కు"
    ],
    "correctAnswer": 2,
    "explanation": "పీడనకు వ్యతిరేకంగా హక్కు (ఆర్టికల్స్ 23 మరియు 24) వెట్టిచాకిరి మరియు బాల కార్మికులను నిషేధిస్తుంది. సరైన వేతనం లేకుండా ఒక బాలుడిని పని చేయమని బలవంతం చేయడం ఒక రకమైన వెట్టిచాకిరి మరియు ఈ ప్రాథమిక హక్కును ఉల్లంఘిస్తుంది."
  },
  {
    "id": 156,
    "question": "On 3rd February 2010. Sri Krishna Committee was appointed to (TSTET 05 Jan 2025)\n3 ఫిబ్రవరి 2010న, శ్రీకృష్ణ కమిటీని దీని కోసం నియమించారు",
    "options": [
      "Look into the issue of Telangana\nతెలంగాణ సమస్యను పరిశీలించడానికి",
      "Suggest measures to prevent sexual assault and abuse\nలైంగిక దాడి మరియు దుర్వినియోగాన్ని నివారించడానికి చర్యలను సూచించడానికి",
      "Bring about reforms in banking sector\nబ్యాంకింగ్ రంగంలో సంస్కరణలు తీసుకురావడానికి",
      "Suggest ways and means to eradicate poverty in India\nభారతదేశంలో పేదరికాన్ని నిర్మూలించడానికి మార్గాలు మరియు పద్ధతులను సూచించడానికి"
    ],
    "correctAnswer": 0,
    "explanation": "ప్రత్యేక తెలంగాణ రాష్ట్ర డిమాండ్‌ను అధ్యయనం చేసి, ఆ విషయంపై సిఫార్సులు చేయడానికి 2010లో భారత ప్రభుత్వం శ్రీకృష్ణ కమిటీని నియమించింది."
  },
  {
    "id": 157,
    "question": "As per the central act. 'Act of Judicial Services Authority', these are NOT eligible for judicial assistance (TSTET 05 Jan 2025)\nకేంద్ర చట్టం 'న్యాయ సేవల ప్రాధికార చట్టం' ప్రకారం, వీరు న్యాయ సహాయానికి అర్హులు కారు",
    "options": [
      "Victims of domestic violence and caste enmity\nగృహ హింస మరియు కుల వైషమ్యాల బాధితులు",
      "All the Citizens who belong to Backward Classes\nవెనుకబడిన తరగతులకు చెందిన పౌరులందరూ",
      "Victims of natural disasters\nప్రకృతి వైపరీత్యాల బాధితులు",
      "Agricultural and Industrial labourers\nవ్యవసాయ మరియు పారిశ్రామిక కార్మికులు"
    ],
    "correctAnswer": 1,
    "explanation": "లీగల్ సర్వీసెస్ అథారిటీస్ యాక్ట్, 1987, వెనుకబడిన తరగతులకు చెందిన పౌరులందరికీ ఉచిత న్యాయ సహాయానికి స్వయంచాలకంగా అర్హత కల్పించదు; SC/ST సభ్యులు లేదా మహిళల వంటి కొన్ని ఇతర వర్గాల మాదిరిగా కాకుండా, ఈ వర్గానికి ఆదాయ పరిమితి ఉంది."
  },
  {
    "id": 158,
    "question": "This organ of the UN is primarily responsible for deliberating and making recommendations on international issues (TSTET 05 Jan 2025)\nUN యొక్క ఈ అంగం అంతర్జాతీయ సమస్యలపై చర్చించడానికి మరియు సిఫార్సులు చేయడానికి ప్రాథమికంగా బాధ్యత వహిస్తుంది",
    "options": [
      "Security Council\nభద్రతా మండలి",
      "General Assembly\nసాధారణ సభ",
      "International Court of Justice\nఅంతర్జాతీయ న్యాయస్థానం",
      "Secretariat\nసచివాలయం"
    ],
    "correctAnswer": 1,
    "explanation": "UN సాధారణ సభ అనేది UN యొక్క ప్రధాన చర్చా, విధాన రూపకల్పన మరియు ప్రాతినిధ్య అంగం. ఇది అంతర్జాతీయ సమస్యల పూర్తి స్పెక్ట్రమ్‌పై బహుపాక్షిక చర్చకు ఒక వేదికను అందిస్తుంది మరియు సభ్య దేశాలకు సిఫార్సులు చేస్తుంది."
  },
  {
    "id": 159,
    "question": "Identify the statement that accurately describes the term \"demand deposits\" (TSTET 05 Jan 2025)\n\"డిమాండ్ డిపాజిట్లు\" అనే పదాన్ని కచ్చితంగా వివరించే ప్రకటనను గుర్తించండి",
    "options": [
      "They can only be withdrawn in cash\nవాటిని నగదు రూపంలో మాత్రమే ఉపసంహరించుకోవచ్చు",
      "They function like currency notes\nఅవి కరెన్సీ నోట్ల వలె పనిచేస్తాయి",
      "They require a notice period for withdrawal of cash\nనగదు ఉపసంహరణకు వాటికి నోటీసు పీరియడ్ అవసరం",
      "They are not accepted for payments\nచెల్లింపుల కోసం అవి అంగీకరించబడవు"
    ],
    "correctAnswer": 1,
    "explanation": "డిమాండ్ డిపాజిట్లను (కరెంట్ లేదా సేవింగ్స్ ఖాతాలలో నిధులు) 'కోరిన వెంటనే' ఉపసంహరించుకోవచ్చు మరియు చెక్కులు, డెబిట్ కార్డులు లేదా ఎలక్ట్రానిక్ బదిలీల ద్వారా చెల్లింపులకు ఉపయోగించవచ్చు, తద్వారా భౌతిక కరెన్సీకి సమానమైన మార్పిడి మాధ్యమంగా పనిచేస్తాయి."
  },
  {
    "id": 160,
    "question": "In the following way, the banks manage to operate with a small amount of cash on hand only (TSTET 05 Jan 2025)\nకింది పద్ధతిలో, బ్యాంకులు కేవలం కొద్ది మొత్తంలో నగదుతోనే కార్యకలాపాలు నిర్వహించగలుగుతాయి",
    "options": [
      "By borrowing from other banks when required\nఅవసరమైనప్పుడు ఇతర బ్యాంకుల నుండి రుణం తీసుకోవడం ద్వారా",
      "By accepting deposits only\nకేవలం డిపాజిట్లను అంగీకరించడం ద్వారా",
      "By predicting withdrawal patterns\nఉపసంహరణ నమూనాలను అంచనా వేయడం ద్వారా",
      "Expecting that only a few depositors withdraw cash in a day\nఒక రోజులో కొద్దిమంది డిపాజిటర్లు మాత్రమే నగదు ఉపసంహరించుకుంటారని ఆశించడం"
    ],
    "correctAnswer": 3,
    "explanation": "బ్యాంకులు ఫ్రాక్షనల్ రిజర్వ్ బ్యాంకింగ్ సూత్రంపై పనిచేస్తాయి. అనుభవం నుండి వారికి తెలుసు, ఏ రోజులోనైనా, డిపాజిటర్లలో ఒక చిన్న భాగం మాత్రమే నగదు ఉపసంహరించుకుంటుంది, ఇది వారికి డిపాజిట్ చేసిన నిధులలో అధిక భాగాన్ని రుణాలుగా ఇవ్వడానికి మరియు చిన్న రిజర్వ్‌ను ఉంచుకోవడానికి అనుమతిస్తుంది."
  },
  {
    "id": 161,
    "question": "One of the following is NOT the source of income for banks (TSTET 05 Jan 2025)\nకింది వాటిలో ఒకటి బ్యాంకులకు ఆదాయ వనరు కాదు",
    "options": [
      "Service charges for issuing demand drafts\nడిమాండ్ డ్రాఫ్ట్‌లను జారీ చేయడానికి సేవా ఛార్జీలు",
      "Interest charged on loans and account maintenance fees\nరుణాలపై వసూలు చేసే వడ్డీ మరియు ఖాతా నిర్వహణ రుసుములు",
      "Government subsidies\nప్రభుత్వ రాయితీలు",
      "The interest paid by the Reserve Bank of India for deposits\nడిపాజిట్ల కోసం రిజర్వ్ బ్యాంక్ ఆఫ్ ఇండియా చెల్లించే వడ్డీ"
    ],
    "correctAnswer": 2,
    "explanation": "బ్యాంకులు ప్రధానంగా వడ్డీ వ్యత్యాసాలు మరియు సేవా రుసుముల నుండి ఆదాయాన్ని పొందుతాయి. ప్రభుత్వ రాయితీలు నిర్దిష్ట రంగాలు లేదా వ్యక్తులకు ఇచ్చే ఆర్థిక సహాయం, వాణిజ్య బ్యాంకులకు ప్రాథమిక లేదా సాధారణ ఆదాయ వనరు కాదు."
  },
  {
    "id": 162,
    "question": "This type of Price Index' includes all goods, both capital and consumer (TSTET 05 Jan 2025)\nఈ రకమైన ధరల సూచీలో మూలధన మరియు వినియోగ వస్తువులు రెండూ ఉంటాయి",
    "options": [
      "Consumer Price Index (CPI)\nవినియోగదారుల ధరల సూచీ (CPI)",
      "Wholesale Price Index (WPI)\nటోకు ధరల సూచీ (WPI)",
      "Retail Price Index (RPI)\nచిల్లర ధరల సూచీ (RPI)",
      "Market Price Index (MPI)\nమార్కెట్ ధరల సూచీ (MPI)"
    ],
    "correctAnswer": 1,
    "explanation": "టోకు ధరల సూచీ (WPI) పెద్దమొత్తంలో విక్రయించే వస్తువుల ధరలలో సగటు మార్పును కొలుస్తుంది. దీని పరిధి విస్తృతమైనది మరియు ముడి పదార్థాలు, మధ్యంతర వస్తువులు (మూలధన వస్తువులు) మరియు పూర్తి అయిన వస్తువులను కలిగి ఉంటుంది, కానీ సేవలను మినహాయిస్తుంది."
  },
  {
    "id": 163,
    "question": "The role of goldsmiths in the early currency system was (TSTET 05 Jan 2025)\nప్రారంభ కరెన్సీ వ్యవస్థలో కంసాలిల పాత్ర",
    "options": [
      "They created coins for trade\nవారు వాణిజ్యం కోసం నాణేలను సృష్టించారు",
      "They provided a safe place for people to store their gold and silver coins\nవారు ప్రజలు తమ బంగారం మరియు వెండి నాణేలను నిల్వ చేయడానికి సురక్షితమైన స్థలాన్ని అందించారు",
      "They regulated the value of currency\nవారు కరెన్సీ విలువను నియంత్రించారు",
      "They were the first bankers in the world\nవారు ప్రపంచంలోనే మొదటి బ్యాంకర్లు"
    ],
    "correctAnswer": 1,
    "explanation": "బ్యాంకింగ్ యొక్క ప్రారంభ దశలలో, కంసాలిలు వ్యాపారుల కోసం విలువైన లోహాలను నిల్వ చేయడానికి తమ సురక్షితమైన ఖజానాలను ఉపయోగించారు. వారు ఈ డిపాజిట్లకు రసీదులను జారీ చేశారు, అవి నిల్వ చేయబడిన విలువకు ప్రతీకగా కాగితపు డబ్బు యొక్క ప్రారంభ రూపంగా చలామణిలోకి రావడం ప్రారంభించాయి."
  },
  {
    "id": 164,
    "question": "The number of withdrawals allowed in a month for a Basic Savings Bank Deposit Account holders including the amount withdrawn from ATMS (TSTET 05 Jan 2025)\nప్రాథమిక పొదుపు బ్యాంకు డిపాజిట్ ఖాతాదారులకు ATMల నుండి ఉపసంహరించుకున్న మొత్తంతో సహా ఒక నెలలో అనుమతించబడిన ఉపసంహరణల సంఖ్య",
    "options": [
      "A maximum of four withdrawals are allowed\nగరిష్టంగా నాలుగు ఉపసంహరణలు అనుమతించబడతాయి",
      "Only two withdrawals are allowed\nకేవలం రెండు ఉపసంహరణలు మాత్రమే అనుమతించబడతాయి",
      "Ten withdrawals are permitted\nపది ఉపసంహరణలు అనుమతించబడతాయి",
      "Unlimited withdrawals are allowed\nఅపరిమిత ఉపసంహరణలు అనుమతించబడతాయి"
    ],
    "correctAnswer": 0,
    "explanation": "ప్రాథమిక పొదుపు బ్యాంకు డిపాజిట్ (BSBD) ఖాతాల కోసం RBI మార్గదర్శకాల ప్రకారం, ఖాతాదారులు సాధారణంగా ATM ఉపసంహరణలతో సహా ఒక నెలలో గరిష్టంగా నాలుగు ఉపసంహరణలకు అర్హులు. ఈ ఖాతా కనీస ఛార్జీలతో ఆర్థిక చేరిక కోసం రూపొందించబడింది."
  },
  {
    "id": 165,
    "question": "In the production process, one among the following does NOT come under \"Physical Capital\" (TSTET 05 Jan 2025)\nఉత్పత్తి ప్రక్రియలో, కింది వాటిలో ఒకటి \"భౌతిక మూలధనం\" కిందకు రాదు",
    "options": [
      "Simple tools like farmer's plough\nరైతు నాగలి వంటి సాధారణ పనిముట్లు",
      "Sophisticated machines such as generators, turbines\nజనరేటర్లు, టర్బైన్లు వంటి అధునాతన యంత్రాలు",
      "Buildings for installation of machinery and the place of work\nయంత్రాలను స్థాపించడానికి భవనాలు మరియు పని ప్రదేశం",
      "The Yarn used by the weavers\nనేత కార్మికులు ఉపయోగించే నూలు"
    ],
    "correctAnswer": 3,
    "explanation": "భౌతిక మూలధనంలో స్థిర మూలధనం (పనిముట్లు, యంత్రాలు, భవనాలు) మరియు చర మూలధనం (ముడి పదార్థాలు) ఉంటాయి. నేత కార్మికులు ఉపయోగించే నూలు ఉత్పత్తి ప్రక్రియలో వినియోగించబడే ముడి పదార్థం, కాబట్టి ఇది చర మూలధనంగా పరిగణించబడుతుంది, స్థిర భౌతిక మూలధనం కాదు."
  },
  {
    "id": 166,
    "question": "Which of the following statement best describes the term 'fertility rate'? (TSTET 05 Jan 2025)\nకింది వాటిలో ఏ ప్రకటన 'సంతానోత్పత్తి రేటు' అనే పదాన్ని ఉత్తమంగా వివరిస్తుంది?",
    "options": [
      "The total number of children that a woman can give birth\nఒక మహిళ జన్మనివ్వగల మొత్తం పిల్లల సంఖ్య",
      "The average number of children that are born to a woman over her lifetime\nఒక మహిళ తన జీవితకాలంలో జన్మనిచ్చే పిల్లల సగటు సంఖ్య",
      "The average number of children born in a specific place\nఒక నిర్దిష్ట ప్రదేశంలో జన్మించిన పిల్లల సగటు సంఖ్య",
      "The total number of children born in a specific place in a year\nఒక సంవత్సరంలో ఒక నిర్దిష్ట ప్రదేశంలో జన్మించిన మొత్తం పిల్లల సంఖ్య"
    ],
    "correctAnswer": 1,
    "explanation": "మొత్తం సంతానోత్పత్తి రేటు (TFR) అనేది ఒక జనాభా సూచిక, ఇది ప్రస్తుత వయస్సు-నిర్దిష్ట సంతానోత్పత్తి రేట్లు స్థిరంగా ఉంటాయని భావిస్తే, ఒక మహిళ తన పునరుత్పత్తి సంవత్సరాలలో కలిగి ఉండే పిల్లల సగటు సంఖ్యను సూచిస్తుంది."
  },
  {
    "id": 167,
    "question": "Which of the following statements best describes the term \"Subsidies\"? (TSTET 05 Jan 2025)\nకింది ప్రకటనలలో ఏది \"సబ్సిడీలు\" అనే పదాన్ని ఉత్తమంగా వివరిస్తుంది?",
    "options": [
      "The amount paid by the government to reduce the cost of certain important goods to keep their prices low\nకొన్ని ముఖ్యమైన వస్తువుల ధరలను తక్కువగా ఉంచడానికి వాటి వ్యయాన్ని తగ్గించడానికి ప్రభుత్వం చెల్లించే మొత్తం",
      "The amount paid by the government to increase the cost of certain important goods to keep their prices very high\nకొన్ని ముఖ్యమైన వస్తువుల ధరలను చాలా ఎక్కువగా ఉంచడానికి వాటి వ్యయాన్ని పెంచడానికి ప్రభుత్వం చెల్లించే మొత్తం",
      "Government giving certain amount of money freely to purchase the basic goods by the poor\nపేదలు ప్రాథమిక వస్తువులను కొనుగోలు చేయడానికి ప్రభుత్వం ఉచితంగా కొంత మొత్తాన్ని ఇవ్వడం",
      "The amount paid by the industrialists to the Government to keep the prices low\nధరలను తక్కువగా ఉంచడానికి పారిశ్రామికవేత్తలు ప్రభుత్వానికి చెల్లించే మొత్తం"
    ],
    "correctAnswer": 0,
    "explanation": "సబ్సిడీ అనేది ప్రభుత్వం నుండి ఒక వ్యాపారం లేదా ఆర్థిక రంగానికి ఇచ్చే ఆర్థిక మద్దతు. ఈ మద్దతు వినియోగదారులకు ఒక వస్తువు లేదా సేవ యొక్క ధరను మార్కెట్ రేటు కంటే తక్కువకు తగ్గించడంలో సహాయపడుతుంది, తద్వారా అవసరమైన వస్తువులు మరింత సరసమైనవిగా మారతాయి."
  },
  {
    "id": 168,
    "question": "The Government employee paid a sum of Rs. 4.00.000 as tax to the Government based on his salary. The type of tax paid by the employee is (TSTET 05 Jan 2025)\nప్రభుత్వ ఉద్యోగి తన జీతం ఆధారంగా ప్రభుత్వానికి రూ. 4,00,000 పన్నుగా చెల్లించాడు. ఉద్యోగి చెల్లించిన పన్ను రకం",
    "options": [
      "Professional Tax\nవృత్తి పన్ను",
      "Corporate Tax\nకార్పొరేట్ పన్ను",
      "Personal Income Tax\nవ్యక్తిగత ఆదాయ పన్ను",
      "GST"
    ],
    "correctAnswer": 2,
    "explanation": "వ్యక్తిగత ఆదాయ పన్ను అనేది ఒక వ్యక్తి యొక్క ఆదాయంపై విధించే ప్రత్యక్ష పన్ను. పన్ను ఉద్యోగి జీతం ఆధారంగా చెల్లించబడినందున, అది ఈ వర్గంలోకి వస్తుంది."
  },
  {
    "id": 169,
    "question": "In a history class, a social science teacher is dealing with The Rule of Mughal Dynasty. Which of the following he can use for making his/her teaching easy (TSTET 05 Jan 2025)\nA) Tree chart\nB) Time chart\nC) Maps\nD) Video clippings from some movies or documentaries\nచరిత్ర తరగతిలో, ఒక సాంఘిక శాస్త్ర ఉపాధ్యాయుడు మొఘల్ రాజవంశం యొక్క పాలనతో వ్యవహరిస్తున్నాడు. తన బోధనను సులభతరం చేయడానికి అతను/ఆమె కింది వాటిలో వేటిని ఉపయోగించగలరు\nA) ట్రీ చార్ట్\nB) టైమ్ చార్ట్\nC) పటాలు\nD) కొన్ని సినిమాలు లేదా డాక్యుమెంటరీల నుండి వీడియో క్లిప్పింగులు",
    "options": [
      "A & B only\nA & B మాత్రమే",
      "A & C only\nA & C మాత్రమే",
      "A, B, C, & D",
      "A, C & D only\nA, C & D మాత్రమే"
    ],
    "correctAnswer": 2,
    "explanation": "జాబితా చేయబడిన అన్ని ఉపకరణాలు ప్రభావవంతమైనవి. ఒక ట్రీ చార్ట్ వంశాన్ని చూపగలదు, టైమ్ చార్ట్ కాలక్రమాన్ని చూపుతుంది, పటాలు సామ్రాజ్యం యొక్క విస్తీర్ణాన్ని చూపుతాయి మరియు వీడియోలు దృశ్యమాన సందర్భాన్ని అందిస్తాయి. ఈ సాధనాల కలయికను ఉపయోగించడం సమగ్రమైన మరియు ఆసక్తికరమైన అభ్యాస అనుభవాన్ని సృష్టిస్తుంది."
  },
  {
    "id": 170,
    "question": "The most suitable method to teach topics like World Peace-India's Contribution', 'Political parties Manifestos and the Future of our country' is (TSTET 05 Jan 2025)\n'ప్రపంచ శాంతి-భారతదేశం యొక్క సహకారం', 'రాజకీయ పార్టీల మేనిఫెస్టోలు మరియు మన దేశ భవిష్యత్తు' వంటి అంశాలను బోధించడానికి అత్యంత అనువైన పద్ధతి",
    "options": [
      "Lecture method\nఉపన్యాస పద్ధతి",
      "Lecture-cum-Demonstration method\nఉపన్యాస-కమ్-ప్రదర్శన పద్ధతి",
      "Problem solving method\nసమస్య పరిష్కార పద్ధతి",
      "Discussion method\nచర్చా పద్ధతి"
    ],
    "correctAnswer": 3,
    "explanation": "ఈ అంశాలు సంక్లిష్టమైనవి మరియు బహుళ దృక్కోణాలకు తెరిచి ఉంటాయి. చర్చా పద్ధతి విమర్శనాత్మక ఆలోచనను ప్రోత్సహిస్తుంది, విద్యార్థులు విభిన్న దృక్కోణాలను పంచుకోవడానికి మరియు చర్చించడానికి అనుమతిస్తుంది మరియు చురుకైన భాగస్వామ్యాన్ని ప్రోత్సహిస్తుంది, ఇది ఏకపక్ష ఉపన్యాసం కంటే ఇటువంటి విషయాలకు మరింత ప్రభావవంతంగా ఉంటుంది."
  },
  {
    "id": 171,
    "question": "This level of knowledge is helpful to students to think actively about inter relations between concepts. (TSTET 05 Jan 2025)\nఈ స్థాయి జ్ఞానం విద్యార్థులకు భావనల మధ్య అంతర్ సంబంధాల గురించి చురుకుగా ఆలోచించడానికి సహాయపడుతుంది.",
    "options": [
      "Metacognitive knowledge\nమెటాకాగ్నిటివ్ జ్ఞానం",
      "Procedural knowledge\nవిధానపరమైన జ్ఞానం",
      "Factual knowledge\nవాస్తవిక జ్ఞానం",
      "Conceptual knowledge\nభావనాత్మక జ్ఞానం"
    ],
    "correctAnswer": 3,
    "explanation": "భావనాత్మక జ్ఞానం అనేది సూత్రాలు, సిద్ధాంతాలు మరియు వాటి మధ్య సంబంధాల గురించిన అవగాహన. ఇది విద్యార్థులు వివిక్త వాస్తవాలను తెలుసుకోవడం కంటే మించి, ఆలోచనలను అనుసంధానించడానికి మరియు ఒక విషయంపై పొందికైన అవగాహనను పెంచుకోవడానికి వీలు కల్పిస్తుంది."
  },
  {
    "id": 172,
    "question": "The document of Memorandum of Understandings (MoUs) made between the countries India and Russia recently, is an example for this type of sources (TSTET 05 Jan 2025)\nఇటీవల భారతదేశం మరియు రష్యా దేశాల మధ్య కుదిరిన అవగాహన ఒప్పందాల (MoUs) పత్రం, ఈ రకమైన వనరులకు ఒక ఉదాహరణ",
    "options": [
      "Primary source\nప్రాథమిక మూలం",
      "Tertiary source\nతృతీయ మూలం",
      "Secondary source\nద్వితీయ మూలం",
      "Internal source\nఅంతర్గత మూలం"
    ],
    "correctAnswer": 0,
    "explanation": "ఒక ప్రాథమిక మూలం ప్రత్యక్ష లేదా ప్రత్యక్ష సాక్ష్యాలను అందిస్తుంది. ఒక MoU వంటి అధికారిక ప్రభుత్వ పత్రం ఒక ప్రాథమిక మూలం, ఎందుకంటే ఇది ఒప్పందం జరిగిన సమయంలో సృష్టించబడిన అసలు పత్రం, దాని విశ్లేషణ కాదు."
  },
  {
    "id": 173,
    "question": "A student is able to make a list of 10 employed women, he/she knows personally in the locality. It is the learning indicator of this academic standard (TSTET 05 Jan 2025)\nఒక విద్యార్థి తన ప్రాంతంలో వ్యక్తిగతంగా తెలిసిన 10 మంది ఉద్యోగినుల జాబితాను తయారు చేయగలుగుతున్నాడు/ది. ఇది ఈ విద్యా ప్రమాణం యొక్క అభ్యాస సూచిక",
    "options": [
      "Mapping Skills\nపట నైపుణ్యాలు",
      "Information Skills\nసమాచార నైపుణ్యాలు",
      "Conceptual understanding\nభావనాత్మక అవగాహన",
      "Appreciation and sensitivity\nప్రశంస మరియు సున్నితత్వం"
    ],
    "correctAnswer": 1,
    "explanation": "ఈ పనికి విద్యార్థి తన తక్షణ వాతావరణం నుండి సమాచారాన్ని సేకరించి, క్రోడీకరించి, నిర్వహించాల్సి ఉంటుంది. ఇది నేరుగా సమాచార నైపుణ్యాలకు సంబంధించినది, ఇందులో వివిధ మూలాల నుండి డేటాను సేకరించి దానిని ఒక నిర్మాణాత్మక పద్ధతిలో ప్రదర్శించడం ఉంటుంది."
  },
  {
    "id": 174,
    "question": "To teach about social reformers, popular persons, the remarkable incidents that happened in their life and their life experiences etc., this historical method is suitable (TSTET 05 Jan 2025)\nసాంఘిక సంస్కర్తలు, ప్రజాదరణ పొందిన వ్యక్తులు, వారి జీవితంలో జరిగిన ముఖ్యమైన సంఘటనలు మరియు వారి జీవితానుభవాలు మొదలైన వాటి గురించి బోధించడానికి, ఈ చారిత్రక పద్ధతి అనువైనది",
    "options": [
      "Anecdotal method\nకథనాత్మక పద్ధతి",
      "Biographical method\nజీవితచరిత్ర పద్ధతి",
      "Evolution method\nపరిణామ పద్ధతి",
      "Social method\nసామాజిక పద్ధతి"
    ],
    "correctAnswer": 1,
    "explanation": "జీవితచరిత్ర పద్ధతి చారిత్రక సంఘటనలను మరియు సామాజిక సందర్భాన్ని అర్థం చేసుకోవడానికి ఒక వ్యక్తి యొక్క జీవిత కథపై దృష్టి పెడుతుంది. సాంఘిక సంస్కర్తల వంటి నిర్దిష్ట వ్యక్తుల జీవితాలు మరియు సహకారాల గురించి బోధించడానికి ఇది అత్యంత ప్రత్యక్ష మరియు అనువైన పద్ధతి."
  },
  {
    "id": 175,
    "question": "According to this section of Right to Education (RTE) Act 2009, \"No teacher shall engage himself or herself in private tuitions or private teaching activity\" (TSTET 05 Jan 2025)\nవిద్యా హక్కు (RTE) చట్టం 2009లోని ఈ సెక్షన్ ప్రకారం, \"ఏ ఉపాధ్యాయుడు/ఉపాధ్యాయురాలు ప్రైవేట్ ట్యూషన్లు లేదా ప్రైవేట్ బోధనా కార్యకలాపాలలో నిమగ్నమవ్వకూడదు\"",
    "options": [
      "Section - 28\nసెక్షన్ - 28",
      "Section - 26\nసెక్షన్ - 26",
      "Section - 27\nసెక్షన్ - 27",
      "Section - 30\nసెక్షన్ - 30"
    ],
    "correctAnswer": 0,
    "explanation": "పిల్లల ఉచిత మరియు నిర్బంధ విద్యా హక్కు (RTE) చట్టం, 2009లోని సెక్షన్ 28, ఉపాధ్యాయులు ప్రైవేట్ ట్యూషన్‌లో పాల్గొనడాన్ని స్పష్టంగా నిషేధిస్తుంది. ఉపాధ్యాయులు తమ పాఠశాల విధుల్లో దృష్టి పెట్టాలని మరియు ప్రయోజనాల సంఘర్షణను నివారించాలని ఇది ఉద్దేశించబడింది."
  },
  {
    "id": 176,
    "question": "National Curriculum Framework (NCF)-2005 suggested that. at this school stage; in political science the focus should be on discussing the philosophical foundation that underlie the value frame work of the Indian constitution i.e.. indepth discussion of equality, liberty, justice, fraternity etc.. (TSTET 05 Jan 2025)\nజాతీయ పాఠ్యప్రణాళిక ఫ్రేమ్‌వర్క్ (NCF)-2005, ఈ పాఠశాల దశలో; రాజకీయ శాస్త్రంలో భారత రాజ్యాంగం యొక్క విలువ చట్రం కింద ఉన్న తాత్విక పునాదిని చర్చించడంపై దృష్టి పెట్టాలని సూచించింది, అనగా.. సమానత్వం, స్వేచ్ఛ, న్యాయం, సౌభ్రాతృత్వం మొదలైన వాటిపై లోతైన చర్చ.",
    "options": [
      "Primary stage\nప్రాథమిక దశ",
      "Upper Primary stage\nఉన్నత ప్రాథమిక దశ",
      "Secondary stage\nమాధ్యమిక దశ",
      "Higher Secondary stage\nఉన్నత మాధ్యమిక దశ"
    ],
    "correctAnswer": 3,
    "explanation": "NCF-2005 ఉన్నత మాధ్యమిక దశలో (XI-XII తరగతులు) రాజకీయ శాస్త్రం కేవలం సంస్థలను వివరించడం నుండి రాజ్యాంగం యొక్క నైరూప్య ఆలోచనలు మరియు తాత్విక పునాదులను చర్చించడం వైపు మారాలని సిఫార్సు చేస్తుంది, ఇది లోతైన, మరింత విశ్లేషణాత్మక అవగాహన కోసం."
  },
  {
    "id": 177,
    "question": "A social science teacher asked her students to make some rules for their class to follow. These were written on a chart. All the students gave their consent to follow them. The chart was pasted in the class for reference. This activity can be an introductory activity for this topic (TSTET 05 Jan 2025)\nఒక సాంఘిక శాస్త్ర ఉపాధ్యాయురాలు తన విద్యార్థులను వారి తరగతి అనుసరించడానికి కొన్ని నియమాలను తయారు చేయమని కోరింది. ఇవి ఒక చార్టుపై వ్రాయబడ్డాయి. విద్యార్థులందరూ వాటిని అనుసరించడానికి తమ సమ్మతిని తెలిపారు. ఆ చార్టును సూచన కోసం తరగతిలో అతికించారు. ఈ కార్యాచరణ ఈ అంశానికి పరిచయ కార్యాచరణగా ఉంటుంది",
    "options": [
      "Diversity\nవైవిధ్యం",
      "Democracy\nప్రజాస్వామ్యం",
      "Resources\nవనరులు",
      "Market\nమార్కెట్"
    ],
    "correctAnswer": 1,
    "explanation": "ఈ కార్యాచరణ ప్రజాస్వామ్యం యొక్క ఒక కీలక అంశాన్ని అనుకరిస్తుంది: పరస్పర అంగీకారం ఆధారంగా, ప్రజలచే నియమాలను సృష్టించడం మరియు ఆ నియమాలచే పాలించబడటం. ఇది స్వీయ-పరిపాలన మరియు సామాజిక ఒప్పందాల భావనలకు ఒక ఆచరణాత్మక పరిచయంగా పనిచేస్తుంది."
  },
  {
    "id": 178,
    "question": "Organisation of excursions will mainly develop this kind of value among students (TSTET 05 Jan 2025)\nవిహారయాత్రల నిర్వహణ ప్రధానంగా విద్యార్థులలో ఈ రకమైన విలువను పెంపొందిస్తుంది",
    "options": [
      "National value\nజాతీయ విలువ",
      "Disciplinary value\nక్రమశిక్షణా విలువ",
      "Vocational value\nవృత్తిపరమైన విలువ",
      "Recreational value\nవినోద విలువ"
    ],
    "correctAnswer": 3,
    "explanation": "విహారయాత్రలు ఇతర విలువలకు దోహదపడగలిగినప్పటికీ, వాటి ప్రాథమిక మరియు అత్యంత ప్రత్యక్ష విలువ వినోదం. అవి సాధారణ తరగతి గది వాతావరణం నుండి విరామం అందిస్తాయి, ఆనందం, విశ్రాంతి మరియు నేర్చుకోవడానికి ఒక సరదా మార్గాన్ని అందిస్తాయి."
  },
  {
    "id": 179,
    "question": "Identify the tools of evaluation of scholastic area among the following (TSTET 05 Jan 2025)\nA) Slip tests\nB) Diagnostic test\nC) Projective test\nD) Assignments\nకింది వాటిలో విద్యాసంబంధ రంగం యొక్క మూల్యాంకన సాధనాలను గుర్తించండి\nA) స్లిప్ టెస్టులు\nB) డయాగ్నస్టిక్ టెస్ట్\nC) ప్రొజెక్టివ్ టెస్ట్\nD) అసైన్‌మెంట్‌లు",
    "options": [
      "A, B & C only\nA, B & C మాత్రమే",
      "A, B & D only\nA, B & D మాత్రమే",
      "B, C & D only\nB, C & D మాత్రమే",
      "A, B, C & D"
    ],
    "correctAnswer": 1,
    "explanation": "విద్యాసంబంధ రంగాలు అకడమిక్ సబ్జెక్టులకు సంబంధించినవి. స్లిప్ టెస్టులు, డయాగ్నస్టిక్ టెస్టులు మరియు అసైన్‌మెంట్‌లు అన్నీ అకడమిక్ జ్ఞానాన్ని మూల్యాంకనం చేయడానికి ప్రామాణిక సాధనాలు. ప్రొజెక్టివ్ టెస్టులు వ్యక్తిత్వాన్ని అంచనా వేయడానికి ఉపయోగించే మానసిక సాధనాలు, ఇది సహ-విద్యా రంగం కిందకు వస్తుంది."
  },
  {
    "id": 180,
    "question": "In a Physical map of India to show the ever green forests, tropical deciduous forest these colours are used respectively (TSTET 05 Jan 2025)\nభారతదేశ భౌతిక పటంలో సతత హరిత అడవులు, ఉష్ణమండల ఆకురాల్చే అడవులను చూపించడానికి వరుసగా ఈ రంగులను ఉపయోగిస్తారు",
    "options": [
      "Both are with dark green colour\nరెండూ ముదురు ఆకుపచ్చ రంగుతో ఉంటాయి",
      "Both are with light green colour\nరెండూ లేత ఆకుపచ్చ రంగుతో ఉంటాయి",
      "Dark green, light green\nముదురు ఆకుపచ్చ, లేత ఆకుపచ్చ",
      "Light green, dark green\nలేత ఆకుపచ్చ, ముదురు ఆకుపచ్చ"
    ],
    "correctAnswer": 2,
    "explanation": "థీమాటిక్ మ్యాపింగ్ సంప్రదాయాల ప్రకారం, వేర్వేరు షేడ్స్ వైవిధ్యాలను సూచిస్తాయి. దట్టమైన సతత హరిత అడవులను సాధారణంగా ముదురు ఆకుపచ్చ రంగులో చూపుతారు, అయితే తక్కువ దట్టమైన ఉష్ణమండల ఆకురాల్చే అడవులను వాటి మధ్య దృశ్యమానంగా తేడాను గుర్తించడానికి లేత ఆకుపచ్చ రంగుతో సూచిస్తారు."
  },
  {
    "id": 181,
    "question": "On topographic map, Contour Lines are most commonly used to (TSTET 11 Jan 2025)\nస్థలాకృతి పటంలో, కాంటూర్ రేఖలు సాధారణంగా దీని కోసం ఉపయోగించబడతాయి",
    "options": [
      "illustrate the type of soil\nనేల రకాన్ని వివరించడానికి",
      "find out the time of a place and distance between the two places\nఒక ప్రదేశం యొక్క సమయం మరియు రెండు ప్రదేశాల మధ్య దూరాన్ని కనుగొనడానికి",
      "illustrate the distribution of water and land on the surface of the earth\nభూమి యొక్క ఉపరితలంపై నీరు మరియు భూమి యొక్క పంపిణీని వివరించడానికి",
      "illustrate the shape of the given landform or terrain\nఇచ్చిన భూస్వరూపం లేదా భూభాగం యొక్క ఆకారాన్ని వివరించడానికి"
    ],
    "correctAnswer": 3,
    "explanation": "కాంటూర్ రేఖలు సమాన ఎత్తు ఉన్న పాయింట్లను కలిపే మ్యాప్‌లోని రేఖలు. ఈ రేఖల నమూనాను అధ్యయనం చేయడం ద్వారా, కొండలు, లోయలు మరియు వాలుల ఏటవాలుతనం సహా భూమి యొక్క త్రిమితీయ ఆకారాన్ని ఊహించవచ్చు."
  },
  {
    "id": 182,
    "question": "These states of India DO NOT share their boundary with Telangana state (TSTET 11 Jan 2025)\nభారతదేశంలోని ఈ రాష్ట్రాలు తెలంగాణ రాష్ట్రంతో తమ సరిహద్దును పంచుకోవు",
    "options": [
      "Chattisgarh and Orissa\nఛత్తీస్‌గఢ్ మరియు ఒరిస్సా",
      "Madhya Pradesh and Maharashtra\nమధ్యప్రదేశ్ మరియు మహారాష్ట్ర",
      "Orissa and Madhya Pradesh\nఒరిస్సా మరియు మధ్యప్రదేశ్",
      "Chattisgarh and Madhya Pradesh\nఛత్తీస్‌గఢ్ మరియు మధ్యప్రదేశ్"
    ],
    "correctAnswer": 2,
    "explanation": "తెలంగాణ తన సరిహద్దులను ఉత్తరాన మహారాష్ట్రతో, తూర్పున ఛత్తీస్‌గఢ్‌తో, పశ్చిమాన కర్ణాటకతో, మరియు దక్షిణ మరియు ఆగ్నేయ దిశలలో ఆంధ్రప్రదేశ్‌తో పంచుకుంటుంది. ఒడిశా (ఒరిస్సా) మరియు మధ్యప్రదేశ్‌కు తెలంగాణతో ఉమ్మడి సరిహద్దు లేదు."
  },
  {
    "id": 183,
    "question": "Which of the following best describes 'the solar insolation variation' across different latitudes? (TSTET 11 Jan 2025)\nవివిధ అక్షాంశాల అంతటా 'సౌర వికిరణ వైవిధ్యాన్ని' కింది వాటిలో ఏది ఉత్తమంగా వివరిస్తుంది?",
    "options": [
      "It is uniform across all latitudes\nఇది అన్ని అక్షాంశాలలో ఏకరీతిగా ఉంటుంది",
      "It is highest at the poles and decreases towards the equator\nఇది ధ్రువాల వద్ద అత్యధికంగా ఉండి భూమధ్యరేఖ వైపు తగ్గుతుంది",
      "It is highest at the equator and decreases towards the poles\nఇది భూమధ్యరేఖ వద్ద అత్యధికంగా ఉండి ధ్రువాల వైపు తగ్గుతుంది",
      "It is highest in between the Tropic of Cancer and the Arctic Circle\nఇది కర్కాటక రేఖ మరియు ఆర్కిటిక్ వలయం మధ్య అత్యధికంగా ఉంటుంది"
    ],
    "correctAnswer": 2,
    "explanation": "సౌర వికిరణం భూమధ్యరేఖ వద్ద అత్యంత తీవ్రంగా ఉంటుంది, ఇక్కడ సూర్య కిరణాలు భూమి యొక్క ఉపరితలాన్ని ప్రత్యక్షంగా, దాదాపు 90-డిగ్రీల కోణంలో తాకుతాయి. ధ్రువాల వైపు అక్షాంశం పెరిగేకొద్దీ, సూర్య కిరణాలు ఉపరితలాన్ని మరింత వాలు కోణంలో తాకుతాయి, అదే పరిమాణంలో శక్తిని పెద్ద ప్రదేశంలో వ్యాపింపజేస్తాయి, ఇది దాని తీవ్రతను తగ్గిస్తుంది."
  },
  {
    "id": 184,
    "question": "When condensation takes place at temperatures below freezing point, water vapour condenses directly into (TSTET 11 Jan 2025)\nగడ్డకట్టే స్థానం కంటే తక్కువ ఉష్ణోగ్రతల వద్ద ఘనీభవనం జరిగినప్పుడు, నీటి ఆవిరి నేరుగా దీనిగా ఘనీభవిస్తుంది",
    "options": [
      "Hail Stone\nవడగళ్ళు",
      "Sleet\nస్లీట్",
      "Ice Crystals\nమంచు స్ఫటికాలు",
      "Snowfall\nహిమపాతం"
    ],
    "correctAnswer": 2,
    "explanation": "నీటి ఆవిరి ద్రవంగా మారకుండా నేరుగా ఘన (మంచు) రూపంలోకి మారే ప్రక్రియను నిక్షేపణ అంటారు. ఈ ప్రక్రియ వాతావరణంలో మంచు స్ఫటికాలను ఏర్పరుస్తుంది, ఇవి హిమపాతాలకు మరియు మంచుకు ప్రాథమిక భాగాలు."
  },
  {
    "id": 185,
    "question": "Which of the following statements correctly describe the term 'Climate'? (TSTET 11 Jan 2025)\nకింది వాటిలో ఏ ప్రకటన 'శీతోష్ణస్థితి' అనే పదాన్ని సరిగ్గా వివరిస్తుంది?",
    "options": [
      "It is a description of the condition of the atmosphere of a place for small period of time\nఇది ఒక ప్రదేశం యొక్క వాతావరణ పరిస్థితిని తక్కువ కాలానికి వివరించడం",
      "It is a description of the atmospheric conditions prevailing in the world for a period of one year\nఇది ఒక సంవత్సరం కాలానికి ప్రపంచంలో నెలకొని ఉన్న వాతావరణ పరిస్థితుల వివరణ",
      "It is a description of the average atmospheric conditions for specific areas over a long period of time\nఇది నిర్దిష్ట ప్రాంతాలకు దీర్ఘకాలం పాటు సగటు వాతావరణ పరిస్థితుల వివరణ",
      "The atmospheric conditions that prevail at a given time of the year\nసంవత్సరంలో ఒక నిర్దిష్ట సమయంలో నెలకొని ఉన్న వాతావరణ పరిస్థితులు"
    ],
    "correctAnswer": 2,
    "explanation": "శీతోష్ణస్థితి అనేది ఒక నిర్దిష్ట ప్రాంతంలోని దీర్ఘకాలిక సగటు వాతావరణ నమూనాలను సూచిస్తుంది, సాధారణంగా 30 సంవత్సరాలు లేదా అంతకంటే ఎక్కువ కాలానికి లెక్కించబడుతుంది. ఇది వాతావరణం నుండి భిన్నమైనది, వాతావరణం స్వల్పకాలిక వాతావరణ పరిస్థితులను వివరిస్తుంది."
  },
  {
    "id": 186,
    "question": "The trees grown in these forests shed their leaves in the dry season to conserve water (TSTET 11 Jan 2025)\nఈ అడవులలో పెరిగే చెట్లు నీటిని ఆదా చేసుకోవడానికి పొడి కాలంలో తమ ఆకులను రాల్చుతాయి",
    "options": [
      "Tropical Evergreen Forests\nఉష్ణమండల సతత హరిత అడవులు",
      "Temperate Evergreen Forests\nసమశీతోష్ణ సతత హరిత అడవులు",
      "Tropical Deciduous Forests\nఉష్ణమండల ఆకురాల్చే అడవులు",
      "Coniferous Forests\nశృంగాకార అడవులు"
    ],
    "correctAnswer": 2,
    "explanation": "ఆకురాల్చే చెట్లు అంటే కాలానుగుణంగా తమ ఆకులను రాల్చేవి. స్పష్టమైన తడి మరియు పొడి కాలాలు ఉన్న ఉష్ణమండల శీతోష్ణస్థితులలో, ఆకురాల్చే అడవులలోని చెట్లు బాష్పోత్సేకం ద్వారా నీటి నష్టాన్ని తగ్గించడానికి పొడి కాలంలో తమ ఆకులను రాల్చుతాయి."
  },
  {
    "id": 187,
    "question": "Among the following, this theory explains the origin of Universe (TSTET 11 Jan 2025)\nకింది వాటిలో, ఈ సిద్ధాంతం విశ్వం యొక్క మూలాన్ని వివరిస్తుంది",
    "options": [
      "Continental Drift Theory\nఖండ చలన సిద్ధాంతం",
      "Big Bang Theory\nమహా విస్ఫోటన సిద్ధాంతం",
      "Heliocentric theory\nసూర్యకేంద్రక సిద్ధాంతం",
      "Relativity theory\nసాపేక్ష సిద్ధాంతం"
    ],
    "correctAnswer": 1,
    "explanation": "విశ్వం ఎలా ప్రారంభమైందో వివరించే ప్రముఖ శాస్త్రీయ వివరణ మహా విస్ఫోటన సిద్ధాంతం. ఇది విశ్వం అత్యంత అధిక సాంద్రత మరియు ఉష్ణోగ్రత యొక్క ప్రారంభ స్థితి నుండి ప్రారంభమైందని, మరియు సుమారు 13.8 బిలియన్ సంవత్సరాలుగా విస్తరిస్తూ మరియు చల్లబడుతూ ఉందని ప్రతిపాదిస్తుంది."
  },
  {
    "id": 188,
    "question": "Mercury, Venus, Earth and Mars are called inner planets as they lie between (TSTET 11 Jan 2025)\nబుధుడు, శుక్రుడు, భూమి మరియు అంగారకుడు అంతర గ్రహాలు అని పిలువబడతాయి ఎందుకంటే అవి వీటి మధ్య ఉంటాయి",
    "options": [
      "The Sun and the Jupiter\nసూర్యుడు మరియు బృహస్పతి",
      "The Sun and the Neptune\nసూర్యుడు మరియు నెప్ట్యూన్",
      "The Sun and the belt of Comets\nసూర్యుడు మరియు తోకచుక్కల పట్టీ",
      "The Sun and the belt of Asteroids\nసూర్యుడు మరియు గ్రహశకలాల పట్టీ"
    ],
    "correctAnswer": 3,
    "explanation": "సౌర వ్యవస్థ విస్తృతంగా అంతర మరియు బాహ్య గ్రహాలుగా గ్రహశకలాల పట్టీ ద్వారా విభజించబడింది, ఇది అంగారకుడు మరియు బృహస్పతి కక్ష్యల మధ్య ఉంది. అంతర గ్రహాలు (బుధుడు, శుక్రుడు, భూమి, అంగారకుడు) ఈ పట్టీ లోపల, సూర్యునికి దగ్గరగా పరిభ్రమించేవి."
  },
  {
    "id": 189,
    "question": "Identify the true statement regarding the 'Crust of the Earth' (TSTET 11 Jan 2025)\n'భూ పటలం' గురించి సరైన ప్రకటనను గుర్తించండి",
    "options": [
      "The density of oceanic crust is more than the density of the Mantle\nసముద్రపు పటలం యొక్క సాంద్రత ప్రావారం యొక్క సాంద్రత కంటే ఎక్కువ",
      "The thickness of oceanic crust is less than the continental crust\nసముద్రపు పటలం యొక్క మందం ఖండ పటలం కంటే తక్కువ",
      "The type of minerals found in the oceanic crust are nickel and ferrous\nసముద్రపు పటలంలో కనిపించే ఖనిజాల రకం నికెల్ మరియు ఇనుము",
      "The Crust is the main source of Magma\nపటలం మాగ్మా యొక్క ప్రధాన మూలం"
    ],
    "correctAnswer": 1,
    "explanation": "ఖండ పటలం సముద్రపు పటలం (5-10 కి.మీ) కంటే గణనీయంగా మందంగా ఉంటుంది (25-70 కి.మీ). అయితే, సముద్రపు పటలం సాంద్రత ఎక్కువ. మాగ్మా ప్రధానంగా ప్రావారం నుండి ఉద్భవిస్తుంది, మరియు భూమి యొక్క కేంద్రకం ప్రధానంగా నికెల్ మరియు ఇనుము (ఫెర్రస్)."
  },
  {
    "id": 190,
    "question": "The correct sequence of the following countries in descending order as per their land area (TSTET 11 Jan 2025)\nకింది దేశాల భూభాగం ప్రకారం అవరోహణ క్రమంలో సరైన క్రమం",
    "options": [
      "Russia, China, India, Brazil and Australia\nరష్యా, చైనా, భారతదేశం, బ్రెజిల్ మరియు ఆస్ట్రేలియా",
      "Russia, Canada, the United States of America. India and Australia\nరష్యా, కెనడా, యునైటెడ్ స్టేట్స్ ఆఫ్ అమెరికా. భారతదేశం మరియు ఆస్ట్రేలియా",
      "The United States of America, Canada, Brazil, India and Australia\nయునైటెడ్ స్టేట్స్ ఆఫ్ అమెరికా, కెనడా, బ్రెజిల్, భారతదేశం మరియు ఆస్ట్రేలియా",
      "Russia, Canada, the United States of America, China and Brazil\nరష్యా, కెనడా, యునైటెడ్ స్టేట్స్ ఆఫ్ అమెరికా, చైనా మరియు బ్రెజిల్"
    ],
    "correctAnswer": 3,
    "explanation": "మొత్తం వైశాల్యం ప్రకారం మొదటి ఐదు దేశాలు అవరోహణ క్రమంలో రష్యా, కెనడా, చైనా, యునైటెడ్ స్టేట్స్ ఆఫ్ అమెరికా మరియు బ్రెజిల్. ఈ ఎంపిక ఈ క్రమాన్ని సరిగ్గా జాబితా చేస్తుంది."
  },
  {
    "id": 191,
    "question": "Among the following, identify the plains of west coast (TSTET 11 Jan 2025)\nకింది వాటిలో, పశ్చిమ తీర మైదానాలను గుర్తించండి",
    "options": [
      "Konkan Coast, Kutch Coast and Malabar Coast\nకొంకణ్ తీరం, కచ్ తీరం మరియు మలబార్ తీరం",
      "Konkan Coast, Coromandal Coast, Kathiawar Coast\nకొంకణ్ తీరం, కోరమాండల్ తీరం, కతియావార్ తీరం",
      "Utkal Coast, Konkan Coast and Malabar Coast\nఉత్కల్ తీరం, కొంకణ్ తీరం మరియు మలబార్ తీరం",
      "Utkal Coast, Coromandal Coast and Kathiawar Coast\nఉత్కల్ తీరం, కోరమాండల్ తీరం మరియు కతియావార్ తీరం"
    ],
    "correctAnswer": 0,
    "explanation": "భారతదేశం యొక్క పశ్చిమ తీరంలో గుజరాత్‌లోని కచ్ మరియు కతియావార్ ద్వీపకల్పాలు, కొంకణ్ తీరం (మహారాష్ట్ర, గోవా, ఉత్తర కర్ణాటక) మరియు మలబార్ తీరం (కేరళ) ఉన్నాయి. కోరమాండల్ మరియు ఉత్కల్ తీరాలు భారతదేశం యొక్క తూర్పు వైపు ఉన్నాయి."
  },
  {
    "id": 192,
    "question": "Among the following Groups of countries, the countries which are grouped under High Human Development Index as per Human Development Index Report, 2021 (TSTET 11 Jan 2025)\nకింది దేశాల సమూహాలలో, మానవ అభివృద్ధి సూచిక నివేదిక, 2021 ప్రకారం అధిక మానవ అభివృద్ధి సూచిక కింద వర్గీకరించబడిన దేశాలు",
    "options": [
      "Norway, Switzerland, United States of America\nనార్వే, స్విట్జర్లాండ్, యునైటెడ్ స్టేట్స్ ఆఫ్ అమెరికా",
      "China, Sri Lanka, Brazil\nచైనా, శ్రీలంక, బ్రెజిల్",
      "United States of America, Sri Lanka, Bhutan\nయునైటెడ్ స్టేట్స్ ఆఫ్ అమెరికా, శ్రీలంక, భూటాన్",
      "Switzerland, Sri Lanka, China\nస్విట్జర్లాండ్, శ్రీలంక, చైనా"
    ],
    "correctAnswer": 1,
    "explanation": "2021/2022 మానవ అభివృద్ధి నివేదిక ప్రకారం, చైనా, శ్రీలంక మరియు బ్రెజిల్ అన్నీ 'అధిక' మానవ అభివృద్ధి వర్గంలో వర్గీకరించబడ్డాయి. నార్వే, స్విట్జర్లాండ్ మరియు USA వంటి దేశాలు 'అత్యధిక' వర్గంలో ఉన్నాయి."
  },
  {
    "id": 193,
    "question": "'Seri culture' means (TSTET 11 Jan 2025)\n'సెరికల్చర్' అనగా",
    "options": [
      "Rearing of silk worms for the production of silk fibre\nపట్టు నూలు ఉత్పత్తి కోసం పట్టు పురుగుల పెంపకం",
      "The scientific method of rearing honey bees\nతేనెటీగల పెంపకం యొక్క శాస్త్రీయ పద్ధతి",
      "Rearing of fish for fish oil\nచేప నూనె కోసం చేపల పెంపకం",
      "The scientific study of seeds and vegetables\nవిత్తనాలు మరియు కూరగాయల శాస్త్రీయ అధ్యయనం"
    ],
    "correctAnswer": 0,
    "explanation": "సెరికల్చర్ అనేది ముడి పట్టును ఉత్పత్తి చేయడానికి పట్టు పురుగులను (పట్టు చిమ్మటల లార్వాలు) వాటి గూళ్లను కోయడం ద్వారా పెంచే వ్యవసాయ పద్ధతి."
  },
  {
    "id": 194,
    "question": "Among the following, the Green House Gases are (TSTET 11 Jan 2025)\nకింది వాటిలో, గ్రీన్ హౌస్ వాయువులు",
    "options": [
      "Carbon di oxide, methane and water vapour\nకార్బన్ డయాక్సైడ్, మీథేన్ మరియు నీటి ఆవిరి",
      "Sulphuric acid, nitrogen and oxygen\nసల్ఫ్యూరిక్ ఆమ్లం, నైట్రోజన్ మరియు ఆక్సిజన్",
      "Carbon di oxide, nitrogen and oxygen\nకార్బన్ డయాక్సైడ్, నైట్రోజన్ మరియు ఆక్సిజన్",
      "Methane, sulphuric acid and oxygen\nమీథేన్, సల్ఫ్యూరిక్ ఆమ్లం మరియు ఆక్సిజన్"
    ],
    "correctAnswer": 0,
    "explanation": "గ్రీన్‌హౌస్ వాయువులు వేడిని బంధించే వాతావరణ వాయువులు. ప్రాథమికమైన వాటిలో కార్బన్ డయాక్సైడ్ ($CO_2$), మీథేన్ ($CH_4$), నీటి ఆవిరి ($H_2O$), మరియు నైట్రస్ ఆక్సైడ్ ఉన్నాయి. వాతావరణంలో అధిక భాగాన్ని కలిగి ఉన్న నైట్రోజన్ మరియు ఆక్సిజన్ ముఖ్యమైన గ్రీన్‌హౌస్ వాయువులు కావు."
  },
  {
    "id": 195,
    "question": "Which of the following industry is located mainly along the banks of the river Hoogly? (TSTET 11 Jan 2025)\nకింది పరిశ్రమలలో ఏది ప్రధానంగా హుగ్లీ నది ఒడ్డున ఉంది?",
    "options": [
      "Cotton Textile Industry\nపత్తి వస్త్ర పరిశ్రమ",
      "Jute Textile Industry\nజనపనార వస్త్ర పరిశ్రమ",
      "Silk Industry\nపట్టు పరిశ్రమ",
      "Aluminium Smelting Industry\nఅల్యూమినియం స్మెల్టింగ్ పరిశ్రమ"
    ],
    "correctAnswer": 1,
    "explanation": "పశ్చిమ బెంగాల్‌లోని హుగ్లీ నదీ బేసిన్ భారతీయ జనపనార పరిశ్రమకు సాంప్రదాయ కేంద్రంగా ఉంది. జనపనార ఉత్పత్తి చేసే ప్రాంతాలకు సామీప్యత, ప్రాసెసింగ్ కోసం సమృద్ధిగా నీరు మరియు చవకైన జల రవాణా జనపనార మిల్లులు వృద్ధి చెందడానికి అనువైన వాతావరణాన్ని సృష్టించాయి."
  },
  {
    "id": 196,
    "question": "Among the following places, the average monthly temperatures remain more or less same throughout the year (TSTET 11 Jan 2025)\nకింది ప్రదేశాలలో, సగటు నెలవారీ ఉష్ణోగ్రతలు సంవత్సరం పొడవునా ಹೆಚ್ಚು తక్కువగా ఒకే విధంగా ఉంటాయి",
    "options": [
      "Hyderabad and Nagpur\nహైదరాబాద్ మరియు నాగ్‌పూర్",
      "Visakhapatnam and Panaji\nవిశాఖపట్నం మరియు పనాజీ",
      "Hyderabad and Panaji\nహైదరాబాద్ మరియు పనాజీ",
      "Darjeeling and Bhopal\nడార్జిలింగ్ మరియు భోపాల్"
    ],
    "correctAnswer": 1,
    "explanation": "విశాఖపట్నం మరియు పనాజీ వంటి తీరప్రాంతాలు సముద్ర వాతావరణాన్ని అనుభవిస్తాయి, ఇక్కడ సముద్రానికి సమీపంలో ఉండటం వలన ఉష్ణోగ్రతలు మితంగా ఉంటాయి, ఇది హైదరాబాద్, నాగ్‌పూర్ మరియు భోపాల్ వంటి లోతట్టు ప్రాంతాలతో పోలిస్తే ఏడాది పొడవునా తక్కువ ఉష్ణోగ్రత పరిధికి దారితీస్తుంది."
  },
  {
    "id": 197,
    "question": "The main purpose of Adolf Hitler in bringing 'The Famous Enabling Act' on 3rd march, 1933 was (TSTET 11 Jan 2025)\n3 మార్చి, 1933న 'ప్రసిద్ధ ఎనేబ్లింగ్ చట్టం' తీసుకురావడంలో అడాల్ఫ్ హిట్లర్ యొక్క ప్రధాన ఉద్దేశ్యం",
    "options": [
      "To establish democratic form of government in Germany\nజర్మనీలో ప్రజాస్వామ్య ప్రభుత్వ రూపాన్ని స్థాపించడం",
      "To bring economic reforms in Germany by assigning the responsibility to Hjalmar Schacht\nజల్మార్ షాక్ట్‌కు బాధ్యతను అప్పగించడం ద్వారా జర్మనీలో ఆర్థిక సంస్కరణలు తీసుకురావడం",
      "To establish dictatorship in Germany\nజర్మనీలో నియంతృత్వాన్ని స్థాపించడం",
      "To arrest and torture the political activists, trade unionists and people of minority communities especially Jews\nరాజకీయ కార్యకర్తలు, ట్రేడ్ యూనియన్ వాదులు మరియు మైనారిటీ వర్గాల ప్రజలను, ముఖ్యంగా యూదులను అరెస్టు చేయడం మరియు హింసించడం"
    ],
    "correctAnswer": 2,
    "explanation": "1933 నాటి ఎనేబ్లింగ్ చట్టం జర్మన్ క్యాబినెట్‌కు, మరియు సమర్థవంతంగా అడాల్ఫ్ హిట్లర్‌కు, రీచ్‌స్టాగ్ (పార్లమెంట్) ఆమోదం లేకుండా చట్టాలను రూపొందించే అధికారాన్ని ఇచ్చింది. ఈ చట్టం వీమార్ రిపబ్లిక్‌ను కూల్చివేసి, హిట్లర్ నియంతృత్వాన్ని స్థాపించిన చట్టపరమైన పునాది."
  },
  {
    "id": 198,
    "question": "On 20th June, 1789 CE, the representatives of Third Estate declared themselves as (TSTET 11 Jan 2025)\n20 జూన్, 1789 CEన, మూడవ ఎస్టేట్ ప్రతినిధులు తమను తాము ఇలా ప్రకటించుకున్నారు",
    "options": [
      "National Assembly\nజాతీయ సభ",
      "The representatives of King Louis XVIII\nరాజు లూయిస్ XVIII యొక్క ప్రతినిధులు",
      "Members of the Jacobian Club\nజాకోబియన్ క్లబ్ సభ్యులు",
      "Directory\nడైరెక్టరీ"
    ],
    "correctAnswer": 0,
    "explanation": "1789 నాటి ఎస్టేట్స్-జనరల్ సమయంలో, మూడవ ఎస్టేట్ సభ్యులు, తమ హక్కులను కోల్పోయినట్లు భావించి, జూన్ 17న తమను తాము జాతీయ సభగా ప్రకటించుకున్నారు. జూన్ 20న, వారు తమ సాధారణ సమావేశ మందిరం నుండి బయటకు లాక్ చేయబడినప్పుడు, వారు సమీపంలోని టెన్నిస్ కోర్టులో సమావేశమై ప్రసిద్ధ టెన్నిస్ కోర్ట్ ప్రమాణం చేశారు, ఒక రాజ్యాంగం స్థాపించబడే వరకు విడిపోకూడదని ప్రమాణం చేశారు."
  },
  {
    "id": 199,
    "question": "In 1783, the Great Britain recognised the independence of thirteen American colonies by signing this treaty (TSTET 11 Jan 2025)\n1783లో, గ్రేట్ బ్రిటన్ ఈ ఒప్పందంపై సంతకం చేయడం ద్వారా పదమూడు అమెరికన్ కాలనీల స్వాతంత్ర్యాన్ని గుర్తించింది",
    "options": [
      "Treaty of Vienna\nవియన్నా ఒప్పందం",
      "Treaty of Frankfort\nఫ్రాంక్‌ఫోర్ట్ ఒప్పందం",
      "Treaty of Versailles\nవెర్సైల్లెస్ ఒప్పందం",
      "Treaty of Paris\nపారిస్ ఒప్పందం"
    ],
    "correctAnswer": 3,
    "explanation": "సెప్టెంబర్ 3, 1783న సంతకం చేయబడిన పారిస్ ఒప్పందం, అధికారికంగా అమెరికన్ విప్లవ యుద్ధాన్ని ముగించింది. ఈ ఒప్పందంలో, గ్రేట్ బ్రిటన్ యునైటెడ్ స్టేట్స్ స్వాతంత్ర్యాన్ని అధికారికంగా గుర్తించింది."
  },
  {
    "id": 200,
    "question": "The Socialist thinker who advocated for public control of Property through Central Planning (TSTET 11 Jan 2025)\nకేంద్ర ప్రణాళిక ద్వారా ఆస్తిపై ప్రజా నియంత్రణను సమర్థించిన సోషలిస్ట్ ఆలోచనాపరుడు",
    "options": [
      "Babeuf\nబాబ్యూఫ్",
      "Saint Simon of France\nఫ్రాన్స్‌కు చెందిన సెయింట్ సైమన్",
      "Simon Boliver\nసైమన్ బొలివర్",
      "Thomas Moore\nథామస్ మూర్"
    ],
    "correctAnswer": 1,
    "explanation": "హెన్రీ డి సెయింట్-సైమన్ ఒక ప్రారంభ ఫ్రెంచ్ ఆదర్శధామ సోషలిస్ట్, అతను శాస్త్రవేత్తలు మరియు పారిశ్రామికవేత్తల మండలిచే నడిచే సమాజాన్ని ఊహించాడు. అతను ప్రైవేట్ లాభం కోసం కాకుండా, మొత్తం సమాజ ప్రయోజనం కోసం ఆస్తిని నిర్వహించే కేంద్రీకృత ప్రణాళికాబద్ధమైన ఆర్థిక వ్యవస్థ కోసం వాదించాడు."
  },
  {
    "id": 201,
    "question": "In between 1500 and 1800, most of Central and South America had come under the control of these European countries (TSTET 11 Jan 2025)\n1500 మరియు 1800 మధ్య, మధ్య మరియు దక్షిణ అమెరికాలోని చాలా ప్రాంతాలు ఈ యూరోపియన్ దేశాల నియంత్రణలోకి వచ్చాయి (TSTET 11 Jan 2025)",
    "options": [
      "France and Spain\nఫ్రాన్స్ మరియు స్పెయిన్",
      "Spain and Portugal\nస్పెయిన్ మరియు పోర్చుగల్",
      "France and England\nఫ్రాన్స్ మరియు ఇంగ్లాండ్",
      "Germany and Portugal\nజర్మనీ మరియు పోర్చుగల్"
    ],
    "correctAnswer": 1,
    "explanation": "ఆవిష్కరణల యుగం తరువాత, స్పెయిన్ మరియు పోర్చుగల్ అమెరికాలో ప్రాథమిక వలసవాదులుగా ఉన్నాయి. టోర్డెసిల్లాస్ ఒప్పందం ద్వారా స్థాపించబడినట్లుగా, స్పెయిన్ మెక్సికో, మధ్య అమెరికా మరియు పశ్చిమ దక్షిణ అమెరికాతో సహా విస్తారమైన భూభాగాలను జయించగా, పోర్చుగల్ బ్రెజిల్‌ను వలసరాజ్యంగా చేసుకుంది."
  },
  {
    "id": 202,
    "question": "Which of the following Vedas is primarily focused on hymns and praises to deities? (TSTET 11 Jan 2025)\nకింది వేదాలలో ఏది ప్రధానంగా దేవతలకు శ్లోకాలు మరియు స్తోత్రాలపై దృష్టి పెడుతుంది? (TSTET 11 Jan 2025)",
    "options": [
      "Samaveda\nసామవేదం",
      "Yajurveda\nయజుర్వేదం",
      "Atharvanaveda\nఅథర్వణవేదం",
      "Rigveda\nఋగ్వేదం"
    ],
    "correctAnswer": 3,
    "explanation": "నాలుగు వేదాలలో పురాతనమైన ఋగ్వేదం, సంస్కృత శ్లోకాల (సూక్తాల) ప్రాచీన సంకలనం. ఇది ప్రధానంగా అగ్ని, ఇంద్రుడు మరియు సోముడు వంటి వివిధ దేవతలను స్తుతించడానికి మరియు ఆవాహన చేయడానికి అంకితం చేయబడింది."
  },
  {
    "id": 203,
    "question": "The ancient kingdom \"Ashmaka\" was located in this part of India (TSTET 11 Jan 2025)\nప్రాచీన రాజ్యం \"అశ్మక\" భారతదేశంలోని ఈ భాగంలో ఉంది (TSTET 11 Jan 2025)",
    "options": [
      "Northern India\nఉత్తర భారతదేశం",
      "Southern India\nదక్షిణ భారతదేశం",
      "Eastern India\nతూర్పు భారతదేశం",
      "Western India\nపశ్చిమ భారతదేశం"
    ],
    "correctAnswer": 1,
    "explanation": "అశ్మక (లేదా అస్సక) ప్రాచీన భారతదేశంలోని పదహారు మహాజనపదాలలో ఒకటి. వింధ్య పర్వతాలకు దక్షిణంగా ఉన్న ఏకైక మహాజనపదం ఇది, ఆధునిక తెలంగాణ మరియు మహారాష్ట్ర ప్రాంతంలోని గోదావరి నది ఒడ్డున ఉంది."
  },
  {
    "id": 204,
    "question": "This Mughal emperor had captured Qutub Shahi ruler Abul Hasan Tana Shah (TSTET 11 Jan 2025)\nఈ మొఘల్ చక్రవర్తి కుతుబ్ షాహీ పాలకుడు అబుల్ హసన్ తానా షాను బంధించాడు (TSTET 11 Jan 2025)",
    "options": [
      "Shah Jahan\nషాజహాన్",
      "Aurangzeb\nఔరంగజేబు",
      "Akbar\nఅక్బర్",
      "Jahangir\nజహంగీర్"
    ],
    "correctAnswer": 1,
    "explanation": "1687లో, గోల్కొండ కోటను ఎనిమిది నెలల సుదీర్ఘ ముట్టడి తర్వాత, మొఘల్ చక్రవర్తి ఔరంగజేబు కుతుబ్ షాహీ రాజవంశం యొక్క చివరి పాలకుడైన అబుల్ హసన్ తానా షాను ఓడించి, బంధించి, తద్వారా ఆ రాజ్యాన్ని మొఘల్ సామ్రాజ్యంలో విలీనం చేశాడు."
  },
  {
    "id": 205,
    "question": "On 9th December 2009, the leader who made an announcement regarding Telangana (TSTET 11 Jan 2025)\n9 డిసెంబర్ 2009న తెలంగాణకు సంబంధించి ప్రకటన చేసిన నాయకుడు (TSTET 11 Jan 2025)",
    "options": [
      "Pranab Mukherjee\nప్రణబ్ ముఖర్జీ",
      "P. Chidambaram\nపి. చిదంబరం",
      "Sonia Gandhi\nసోనియా గాంధీ",
      "Jairam Ramesh\nజైరాం రమేష్"
    ],
    "correctAnswer": 1,
    "explanation": "డిసెంబర్ 9, 2009న, అప్పటి కేంద్ర హోం వ్యవహారాల మంత్రి పి. చిదంబరం, భారత ప్రభుత్వం ప్రత్యేక తెలంగాణ రాష్ట్ర ఏర్పాటు ప్రక్రియను ప్రారంభిస్తుందని ఒక చారిత్రాత్మక ప్రకటన చేశారు."
  },
  {
    "id": 206,
    "question": "Kuo-Min-Tang [KMT] followed the political Philosophy based on the idea of (TSTET 11 Jan 2025)\nకుయో-మిన్-టాంగ్ [KMT] ఈ ఆలోచన ఆధారంగా రాజకీయ తత్వాన్ని అనుసరించింది (TSTET 11 Jan 2025)",
    "options": [
      "Sun Yat-sen\nసన్ యత్-సేన్",
      "Chiang Kai-shek\nచియాంగ్ కై-షేక్",
      "Mao Zedong\nమావో జెడాంగ్",
      "Hu Jintao\nహు జింటావో"
    ],
    "correctAnswer": 0,
    "explanation": "కుమింటాంగ్ (KMT), లేదా చైనీస్ నేషనలిస్ట్ పార్టీ, సన్ యత్-సేన్చే స్థాపించబడింది. దీని భావజాలం అతని 'ప్రజల మూడు సూత్రాలు' పై నిర్మించబడింది: జాతీయవాదం (మిన్జూ), ప్రజాస్వామ్యం (మిన్‌క్వాన్), మరియు ప్రజల జీవనోపాధి (మిన్‌షెంగ్)."
  },
  {
    "id": 207,
    "question": "Parivrajakas typically led the life (TSTET 11 Jan 2025)\nపరివ్రాజకులు సాధారణంగా ఈ జీవితాన్ని గడిపేవారు (TSTET 11 Jan 2025)",
    "options": [
      "In fixed settlements\nస్థిర నివాసాలలో",
      "Wandering from village to village\nగ్రామం నుండి గ్రామానికి తిరుగుతూ",
      "In asrams\nఆశ్రమాలలో",
      "In the royal court\nరాజ దర్బారులో"
    ],
    "correctAnswer": 1,
    "explanation": "పరివ్రాజకులు ప్రాచీన భారతదేశంలో సంచరించే సన్యాసులు లేదా మత భిక్షువులు. వారు స్థిర నివాసాలను మరియు కుటుంబ జీవితాన్ని త్యజించి, ఆధ్యాత్మిక జ్ఞానం మరియు ఉపన్యాసాల కోసం ఒక ప్రదేశం నుండి మరొక ప్రదేశానికి కాలినడకన ప్రయాణించారు."
  },
  {
    "id": 208,
    "question": "The primary objective of the Cripps Mission in India was (TSTET 11 Jan 2025)\nభారతదేశంలో క్రిప్స్ మిషన్ యొక్క ప్రాథమిక లక్ష్యం (TSTET 11 Jan 2025)",
    "options": [
      "To negotiate peace with Japan\nజపాన్‌తో శాంతి చర్చలు జరపడానికి",
      "To gain Indian support for the British war effort\nబ్రిటిష్ యుద్ధ ప్రయత్నానికి భారతీయ మద్దతును పొందడానికి",
      "To promote Hindu-Muslim unity\nహిందూ-ముస్లిం ఐక్యతను ప్రోత్సహించడానికి",
      "To grant India full independence\nభారతదేశానికి పూర్తి స్వాతంత్ర్యం ఇవ్వడానికి"
    ],
    "correctAnswer": 1,
    "explanation": "రెండవ ప్రపంచ యుద్ధ సమయంలో, మార్చి 1942లో బ్రిటిష్ ప్రభుత్వం క్రిప్స్ మిషన్‌ను భారతదేశానికి పంపింది. అక్ష రాజ్యాలకు వ్యతిరేకంగా బ్రిటిష్ యుద్ధ ప్రయత్నానికి భారత నాయకుల పూర్తి సహకారం మరియు మద్దతును పొందడం దీని ప్రధాన ఉద్దేశ్యం."
  },
  {
    "id": 209,
    "question": "Among the following, identify the statutory body (TSTET 11 Jan 2025)\nకింది వాటిలో, చట్టబద్ధమైన సంస్థను గుర్తించండి (TSTET 11 Jan 2025)",
    "options": [
      "National Human Rights Commission\nజాతీయ మానవ హక్కుల కమిషన్",
      "The Election Commission\nఎన్నికల సంఘం",
      "The Union Public Service Commission\nయూనియన్ పబ్లిక్ సర్వీస్ కమిషన్",
      "The Finance Commission\nఆర్థిక సంఘం"
    ],
    "correctAnswer": 0,
    "explanation": "చట్టబద్ధమైన సంస్థ పార్లమెంటు చట్టం ద్వారా సృష్టించబడుతుంది. జాతీయ మానవ హక్కుల కమిషన్ (NHRC) 1993లో మానవ హక్కుల పరిరక్షణ చట్టం కింద స్థాపించబడింది. జాబితా చేయబడిన ఇతర సంస్థలు రాజ్యాంగబద్ధమైన సంస్థలు, ఎందుకంటే అవి భారత రాజ్యాంగం ద్వారా నేరుగా స్థాపించబడ్డాయి."
  },
  {
    "id": 210,
    "question": "Among the following, identify the power of the President of India (TSTET 11 Jan 2025)\nకింది వాటిలో, భారత రాష్ట్రపతి అధికారాన్ని గుర్తించండి (TSTET 11 Jan 2025)",
    "options": [
      "Dissolves Rajya Sabha and State Legislative Councils\nరాజ్యసభ మరియు రాష్ట్ర శాసన మండళ్లను రద్దు చేస్తారు",
      "Calls for a joint session of the Parliament\nపార్లమెంట్ ఉభయ సభల సంయుక్త సమావేశానికి పిలుపునిస్తారు",
      "Nominates 12 members to Lok Sabha\nలోక్‌సభకు 12 మంది సభ్యులను నామినేట్ చేస్తారు",
      "Decides whether a bill is a Money bill or an Ordinary bill\nఒక బిల్లు ద్రవ్య బిల్లా లేదా సాధారణ బిల్లా అని నిర్ణయిస్తారు"
    ],
    "correctAnswer": 1,
    "explanation": "రాజ్యాంగంలోని ఆర్టికల్ 108 ప్రకారం, ద్రవ్యేతర బిల్లుపై ప్రతిష్టంభనను పరిష్కరించడానికి భారత రాష్ట్రపతి పార్లమెంటు ఉభయ సభల సంయుక్త సమావేశాన్ని ఏర్పాటు చేయవచ్చు. ద్రవ్య బిల్లుపై నిర్ణయం లోక్‌సభ స్పీకర్ తీసుకుంటారు."
  },
  {
    "id": 211,
    "question": "Ravi is forced to work as a bonded labour for several years for the amount his father had received from the landlord. It would be a violation of this fundamental Right (TSTET 11 Jan 2025)\nరవి తండ్రి భూస్వామి నుండి తీసుకున్న మొత్తం కోసం చాలా సంవత్సరాలు వెట్టి చాకిరి చేయవలసి వచ్చింది. ఇది ఈ ప్రాథమిక హక్కును ఉల్లంఘించడం అవుతుంది (TSTET 11 Jan 2025)",
    "options": [
      "Right to Equality\nసమానత్వపు హక్కు",
      "Right to freedom\nస్వేచ్ఛా హక్కు",
      "Right against exploitation\nపీడన నిరోధక హక్కు",
      "Right against Constitutional Remedies\nరాజ్యాంగ పరిహారాల హక్కు"
    ],
    "correctAnswer": 2,
    "explanation": "భారత రాజ్యాంగంలోని ఆర్టికల్ 23 మానవుల అక్రమ రవాణా, 'బేగార్' (వెట్టి చాకిరి), మరియు ఇతర ఏ విధమైన బలవంతపు శ్రమను నిషేధిస్తుంది. వెట్టి చాకిరి అనేది పీడనకు వ్యతిరేకమైన ఈ ప్రాథమిక హక్కును ప్రత్యక్షంగా ఉల్లంఘించడమే."
  },
  {
    "id": 212,
    "question": "During National Emergency all or any of the Fundamental rights can be suspended by the Indian president except (TSTET 11 Jan 2025)\nజాతీయ అత్యవసర పరిస్థితి సమయంలో భారత రాష్ట్రపతిచే అన్ని లేదా ఏవైనా ప్రాథమిక హక్కులను నిలిపివేయవచ్చు, వీటిని మినహాయించి (TSTET 11 Jan 2025)",
    "options": [
      "Article 20 and 21 of the Indian Constitution\nభారత రాజ్యాంగంలోని ఆర్టికల్ 20 మరియు 21",
      "Article 21 of the Indian Constitution only\nభారత రాజ్యాంగంలోని ఆర్టికల్ 21 మాత్రమే",
      "Article 19 of the Indian Constitution only\nభారత రాజ్యాంగంలోని ఆర్టికల్ 19 మాత్రమే",
      "Articles 19-21 of the Indian Constitution\nభారత రాజ్యాంగంలోని ఆర్టికల్ 19-21"
    ],
    "correctAnswer": 0,
    "explanation": "44వ సవరణ చట్టం, 1978 ప్రకారం, జాతీయ అత్యవసర పరిస్థితి సమయంలో కూడా, ఆర్టికల్ 20 (నేరాలకు సంబంధించి శిక్షల నుండి రక్షణ) మరియు ఆర్టికల్ 21 (జీవించే హక్కు మరియు వ్యక్తిగత స్వేచ్ఛ యొక్క రక్షణ) కింద హామీ ఇవ్వబడిన ప్రాథమిక హక్కులను నిలిపివేయలేరు."
  },
  {
    "id": 213,
    "question": "Which of the following DOES NOT come under Violation of Human Rights? (TSTET 11 Jan 2025)\nకింది వాటిలో ఏది మానవ హక్కుల ఉల్లంఘన కిందకు రాదు? (TSTET 11 Jan 2025)",
    "options": [
      "Denial of Right to information\nసమాచార హక్కును నిరాకరించడం",
      "Delay in investigating of crimes\nనేరాల దర్యాప్తులో జాప్యం",
      "Discriminations against women in the family\nకుటుంబంలో మహిళలపై వివక్ష",
      "Not providing employment by the Government in the Government sector\nప్రభుత్వ రంగంలో ప్రభుత్వం ఉద్యోగం కల్పించకపోవడం"
    ],
    "correctAnswer": 3,
    "explanation": "ఉద్యోగ అవకాశాలను సృష్టించడం రాష్ట్ర బాధ్యత అయినప్పటికీ, ప్రతి పౌరుడికి ప్రభుత్వ ఉద్యోగం కల్పించలేకపోవడం మానవ హక్కుల ఉల్లంఘనగా పరిగణించబడదు. ఇతర ఎంపికలు న్యాయం, సమాచారం మరియు సమానత్వాన్ని నిరాకరించడాన్ని కలిగి ఉంటాయి, ఇవి గుర్తింపు పొందిన మానవ హక్కుల ఉల్లంఘనలు."
  },
  {
    "id": 214,
    "question": "This amendment of the Indian Constitution inserted a list of Fundamental Duties of Citizens to the constitution (TSTET 11 Jan 2025)\nభారత రాజ్యాంగంలోని ఈ సవరణ రాజ్యాంగానికి పౌరుల ప్రాథమిక విధులకు సంబంధించిన జాబితాను చేర్చింది (TSTET 11 Jan 2025)",
    "options": [
      "42nd amendment\n42వ సవరణ",
      "44th Amendment\n44వ సవరణ",
      "61st Amendment\n61వ సవరణ",
      "52nd Amendment\n52వ సవరణ"
    ],
    "correctAnswer": 0,
    "explanation": "స్వరణ్ సింగ్ కమిటీ సిఫార్సుల మేరకు, 1976లో 42వ సవరణ ద్వారా పౌరుల ప్రాథమిక విధులను భారత రాజ్యాంగంలో చేర్చారు. అవి ఆర్టికల్ 51-Aలో ఉన్నాయి."
  },
  {
    "id": 215,
    "question": "This article of the Indian Constitution states that no person shall be deprived of his life or personal liberty except according to the procedure established by law (TSTET 11 Jan 2025)\nభారత రాజ్యాంగంలోని ఈ ఆర్టికల్ ప్రకారం, చట్టం ద్వారా స్థాపించబడిన ప్రక్రియ ప్రకారం తప్ప ఏ వ్యక్తి తన ప్రాణాన్ని లేదా వ్యక్తిగత స్వేచ్ఛను కోల్పోకూడదని పేర్కొంది (TSTET 11 Jan 2025)",
    "options": [
      "Article 19\nఆర్టికల్ 19",
      "Article 21\nఆర్టికల్ 21",
      "Article 22\nఆర్టికల్ 22",
      "Article 23\nఆర్టికల్ 23"
    ],
    "correctAnswer": 1,
    "explanation": "భారత రాజ్యాంగంలోని ఆర్టికల్ 21 ప్రాథమిక హక్కులకు మూలస్తంభం, ఇది జీవించే హక్కు మరియు వ్యక్తిగత స్వేచ్ఛ యొక్క రక్షణకు హామీ ఇస్తుంది మరియు చట్టబద్ధంగా స్థాపించబడిన ప్రక్రియ ద్వారా తప్ప ఏ వ్యక్తి ఈ హక్కులను కోల్పోలేడని పేర్కొంది."
  },
  {
    "id": 216,
    "question": "The preamble of the Indian Constitution reflects (TSTET 11 Jan 2025)\nభారత రాజ్యాంగ పీఠిక దేనిని ప్రతిబింబిస్తుంది (TSTET 11 Jan 2025)",
    "options": [
      "Fundamental Duties of a citizen\nఒక పౌరుడి ప్రాథమిక విధులు",
      "The Aims, Philosophy and Objectives\nలక్ష్యాలు, తత్వం మరియు ఉద్దేశ్యాలు",
      "The Principles of Liberalism\nఉదారవాద సూత్రాలు",
      "Individual Rights\nవ్యక్తిగత హక్కులు"
    ],
    "correctAnswer": 1,
    "explanation": "పీఠిక రాజ్యాంగానికి పరిచయంగా పనిచేస్తుంది మరియు దాని ప్రాథమిక తత్వం మరియు ప్రాథమిక విలువలను పొందుపరుస్తుంది. ఇది అధికారానికి మూలం, భారత రాష్ట్ర స్వభావం మరియు న్యాయం, స్వేచ్ఛ, సమానత్వం మరియు సౌభ్రాతృత్వాన్ని భద్రపరచడం వంటి రాజ్యాంగ లక్ష్యాలను వివరిస్తుంది."
  },
  {
    "id": 217,
    "question": "Among the following, identify the correct statement regarding the cash reserves of banks (TSTET 11 Jan 2025)\nకింది వాటిలో, బ్యాంకుల నగదు నిల్వలకు సంబంధించి సరైన ప్రకటనను గుర్తించండి (TSTET 11 Jan 2025)",
    "options": [
      "Banks do not keep any cash\nబ్యాంకులు ఎటువంటి నగదును ఉంచుకోవు",
      "Banks keep a small proportion deposits as cash\nబ్యాంకులు డిపాజిట్లలో కొద్ది భాగాన్ని నగదుగా ఉంచుతాయి",
      "Banks keep all deposits as cash\nబ్యాంకులు అన్ని డిపాజిట్లను నగదుగా ఉంచుతాయి",
      "Banks invest all deposits\nబ్యాంకులు అన్ని డిపాజిట్లను పెట్టుబడి పెడతాయి"
    ],
    "correctAnswer": 1,
    "explanation": "ఫ్రాక్షనల్-రిజర్వ్ బ్యాంకింగ్ వ్యవస్థ కింద, వాణిజ్య బ్యాంకులు తమ కస్టమర్ డిపాజిట్లలో కొంత భాగాన్ని మాత్రమే నిల్వలుగా (వాల్ట్ క్యాష్‌గా లేదా సెంట్రల్ బ్యాంక్‌లో డిపాజిట్లుగా) ఉంచాలి. మిగిలిన డిపాజిట్లు రుణాలు ఇవ్వడానికి అందుబాటులో ఉంటాయి."
  },
  {
    "id": 218,
    "question": "The typical relationship between the interest rates on which banks charge on loans and the interest rates they offer on deposits (TSTET 11 Jan 2025)\nబ్యాంకులు రుణాలపై వసూలు చేసే వడ్డీ రేట్లకు మరియు డిపాజిట్లపై వారు అందించే వడ్డీ రేట్లకు మధ్య సాధారణ సంబంధం (TSTET 11 Jan 2025)",
    "options": [
      "The rate of interest will be the same\nవడ్డీ రేటు ఒకే విధంగా ఉంటుంది",
      "Banks pay high interest rates on deposits\nబ్యాంకులు డిపాజిట్లపై అధిక వడ్డీ రేట్లు చెల్లిస్తాయి",
      "Banks charge low interest rates on loans\nబ్యాంకులు రుణాలపై తక్కువ వడ్డీ రేట్లు వసూలు చేస్తాయి",
      "Banks charge high interest rates on loans\nబ్యాంకులు రుణాలపై అధిక వడ్డీ రేట్లు వసూలు చేస్తాయి"
    ],
    "correctAnswer": 3,
    "explanation": "ఒక బ్యాంకు యొక్క వ్యాపార నమూనా వడ్డీ రేటు వ్యత్యాసంపై ఆధారపడి ఉంటుంది. వారు పొదుపుదారుల నుండి డిపాజిట్లపై చెల్లించే రేటు కంటే రుణగ్రహీతలకు ఇచ్చిన రుణాలపై అధిక వడ్డీ రేటును వసూలు చేస్తారు. ఈ మార్జిన్ వారి నిర్వహణ ఖర్చులను కవర్ చేస్తుంది మరియు లాభాన్ని ఆర్జిస్తుంది."
  },
  {
    "id": 219,
    "question": "Among the following food items, the item that is NOT included in \"the Food Price Index (FPI)\" (TSTET 11 Jan 2025)\nకింది ఆహార పదార్థాలలో, \"ఆహార ధరల సూచీ (FPI)\" లో చేర్చని వస్తువు (TSTET 11 Jan 2025)",
    "options": [
      "Beverages\nపానీయాలు",
      "Wheat\nగోధుమలు",
      "Pulses\nపప్పుధాన్యాలు",
      "Rice\nబియ్యం"
    ],
    "correctAnswer": 0,
    "explanation": "FAO ఆహార ధరల సూచీ (FPI) కీలకమైన ఆహార వస్తువుల అంతర్జాతీయ ధరలను ట్రాక్ చేస్తుంది. ఇది ప్రధానంగా తృణధాన్యాలు, కూరగాయల నూనెలు, చక్కెర, మాంసం మరియు పాల ఉత్పత్తులను కలిగి ఉంటుంది. పానీయాలు (కాఫీ, టీ, మొదలైనవి) వంటి ప్రాసెస్ చేయబడిన వస్తువులు సాధారణంగా ఈ సూచీలో భాగంగా ఉండవు."
  },
  {
    "id": 220,
    "question": "Besides the people who have low-incomes, who else will suffer most when the rate of inflation is very high (TSTET 11 Jan 2025)\nద్రవ్యోల్బణం రేటు చాలా ఎక్కువగా ఉన్నప్పుడు, తక్కువ-ఆదాయం ఉన్న వ్యక్తులతో పాటు, మరెవరు ఎక్కువగా నష్టపోతారు (TSTET 11 Jan 2025)",
    "options": [
      "Only wealthy investors\nధనిక పెట్టుబడిదారులు మాత్రమే",
      "Individuals who do not own property\nఆస్తి లేని వ్యక్తులు",
      "The people who invest savings in unproductive assets\nఅనుత్పాదక ఆస్తులలో పొదుపును పెట్టుబడి పెట్టే వ్యక్తులు",
      "Only government employees\nప్రభుత్వ ఉద్యోగులు మాత్రమే"
    ],
    "correctAnswer": 2,
    "explanation": "అధిక ద్రవ్యోల్బణం డబ్బు కొనుగోలు శక్తిని తగ్గిస్తుంది. తమ పొదుపులను నగదు రూపంలో లేదా అనుత్పాదక ఆస్తులలో (ఇంట్లో ఉంచిన బంగారం లేదా ఆదాయం రాని భూమి వంటివి) ఉంచుకునే వ్యక్తులు నష్టపోతారు, ఎందుకంటే కాలక్రమేణా వారి పొదుపుల వాస్తవ విలువ తగ్గుతుంది."
  },
  {
    "id": 221,
    "question": "In the following way, the goldsmiths contributed to the development of paper money (TSTET 11 Jan 2025)\nకింది విధంగా, స్వర్ణకారులు కాగితపు డబ్బు అభివృద్ధికి దోహదపడ్డారు (TSTET 11 Jan 2025)",
    "options": [
      "By charging fees for currency exchange\nకరెన్సీ మార్పిడికి రుసుములు వసూలు చేయడం ద్వారా",
      "By issuing receipts for stored coins, leading to a new system of paper money\nనిల్వ చేసిన నాణేలకు రశీదులు జారీ చేయడం ద్వారా, ఇది కాగితపు డబ్బు యొక్క కొత్త వ్యవస్థకు దారితీసింది",
      "By minting coins that were widely accepted\nవిస్తృతంగా ఆమోదించబడిన నాణేలను ముద్రించడం ద్వారా",
      "By creating a national bank\nఒక జాతీయ బ్యాంకును సృష్టించడం ద్వారా"
    ],
    "correctAnswer": 1,
    "explanation": "చారిత్రాత్మకంగా, ప్రజలు తమ విలువైన నాణేలను భద్రత కోసం స్వర్ణకారుల వద్ద డిపాజిట్ చేసేవారు, దాని కోసం స్వర్ణకారుడు ఒక రశీదును జారీ చేసేవాడు. కాలక్రమేణా, ఈ రశీదులు మార్పిడి మాధ్యమంగా ప్రచారంలోకి రావడం ప్రారంభించాయి, ఎందుకంటే అవి వాస్తవ నాణేల కంటే తీసుకువెళ్లడానికి సులభంగా మరియు సురక్షితంగా ఉన్నాయి. ఈ పద్ధతి ఆధునిక బ్యాంక్ నోట్లకు పూర్వగామి."
  },
  {
    "id": 222,
    "question": "Because of this reason, the traders in the earlier days preferred bank receipts over physical coins (TSTET 11 Jan 2025)\nఈ కారణంగా, తొలి రోజుల్లో వ్యాపారులు భౌతిక నాణేల కంటే బ్యాంకు రశీదులకే ప్రాధాన్యత ఇచ్చారు (TSTET 11 Jan 2025)",
    "options": [
      "Bank receipts were easier to carry\nబ్యాంకు రశీదులు తీసుకువెళ్లడానికి సులభంగా ఉండేవి",
      "Bank receipts were accepted only in certain regions\nబ్యాంకు రశీదులు కొన్ని ప్రాంతాలలో మాత్రమే ఆమోదించబడ్డాయి",
      "Bank receipts could be easily exchanged for goods\nబ్యాంకు రశీదులను వస్తువులకు సులభంగా మార్చుకోవచ్చు",
      "Bank receipts were more valuable than coins\nబ్యాంకు రశీదులు నాణేల కంటే విలువైనవి"
    ],
    "correctAnswer": 0,
    "explanation": "వ్యాపారులకు బ్యాంకు రశీదుల (కాగితపు డబ్బు యొక్క ప్రారంభ రూపాలు) యొక్క ప్రాథమిక ప్రయోజనం వాటి పోర్టబిలిటీ మరియు భద్రత. వాణిజ్యం కోసం పెద్ద మొత్తంలో బరువైన, స్థూలమైన నాణేలను తీసుకువెళ్లడం అసౌకర్యంగా మరియు ప్రమాదకరంగా ఉండేది, అయితే కాగితపు రశీదులు తేలికైనవి మరియు నిర్వహించడానికి సులభంగా ఉండేవి."
  },
  {
    "id": 223,
    "question": "One of the following benefits is provided to the account holders through the PM Jan Dhan Yojana (TSTET 11 Jan 2025)\nకింది ప్రయోజనాలలో ఒకటి PM జన్ ధన్ యోజన ద్వారా ఖాతాదారులకు అందించబడుతుంది (TSTET 11 Jan 2025)",
    "options": [
      "A Rupay debit card shall be issued, in the same way Rs. 1 lakh accident insurance shall be provided\nఒక రూపే డెబిట్ కార్డ్ జారీ చేయబడుతుంది, అదే విధంగా రూ. 1 లక్ష ప్రమాద బీమా అందించబడుతుంది",
      "A credit card with a high credit limit shall be issued\nఅధిక క్రెడిట్ పరిమితితో కూడిన క్రెడిట్ కార్డ్ జారీ చేయబడుతుంది",
      "A monthly cash allowance is provided\nనెలవారీ నగదు భత్యం అందించబడుతుంది",
      "Free access to international money transfers\nఅంతర్జాతీయ డబ్బు బదిలీలకు ఉచిత ప్రాప్యత"
    ],
    "correctAnswer": 0,
    "explanation": "ప్రధాన మంత్రి జన్ ధన్ యోజన (PMJDY) అనేది ఆర్థిక చేరిక కోసం ఒక జాతీయ మిషన్. దీని ముఖ్య లక్షణాలలో ప్రాథమిక పొదుపు బ్యాంకు ఖాతా, రూపే డెబిట్ కార్డ్, మరియు ఖాతాదారునికి అంతర్నిర్మిత ప్రమాద బీమా కవరేజీని అందించడం ఉన్నాయి."
  },
  {
    "id": 224,
    "question": "The maximum amount of debits allowed in a Small Account in a month is (TSTET 11 Jan 2025)\nఒక చిన్న ఖాతాలో ఒక నెలలో అనుమతించబడిన గరిష్ట డెబిట్ల మొత్తం (TSTET 11 Jan 2025)",
    "options": [
      "Rs. 5,000\nరూ. 5,000",
      "Rs. 10,000\nరూ. 10,000",
      "Rs. 20,000\nరూ. 20,000",
      "Rs. 15,000\nరూ. 15,000"
    ],
    "correctAnswer": 1,
    "explanation": "భారతీయ రిజర్వ్ బ్యాంక్ (RBI) మార్గదర్శకాల ప్రకారం, సరళీకృత KYC నిబంధనలతో తెరిచిన 'చిన్న ఖాతా'కు కొన్ని పరిమితులు ఉంటాయి, వాటిలో ఒకే నెలలో మొత్తం ఉపసంహరణలు మరియు బదిలీలు ₹10,000 మించకూడదు."
  },
  {
    "id": 225,
    "question": "The primary focus of the Public Distribution System (PDS) in India is (TSTET 11 Jan 2025)\nభారతదేశంలో ప్రజా పంపిణీ వ్యవస్థ (PDS) యొక్క ప్రాథమిక దృష్టి (TSTET 11 Jan 2025)",
    "options": [
      "Promoting agricultural exports\nవ్యవసాయ ఎగుమతులను ప్రోత్సహించడం",
      "Ensuring access to food grains\nఆహార ధాన్యాల లభ్యతను నిర్ధారించడం",
      "Providing free meals to all\nఅందరికీ ఉచిత భోజనం అందించడం",
      "Regulating food prices\nఆహార ధరలను నియంత్రించడం"
    ],
    "correctAnswer": 1,
    "explanation": "ప్రజా పంపిణీ వ్యవస్థ (PDS) అనేది భారత ప్రభుత్వం స్థాపించిన ఆహార భద్రతా వ్యవస్థ. సమాజంలోని పేద వర్గాలకు గోధుమలు మరియు బియ్యం వంటి అవసరమైన ఆహార ధాన్యాలను రాయితీ ధరలకు పంపిణీ చేయడం దీని ప్రధాన లక్ష్యం, తద్వారా ఆహార భద్రతను నిర్ధారిస్తుంది."
  },
  {
    "id": 226,
    "question": "One of the following is NOT considered a requirement as a factor of production (TSTET 11 Jan 2025)\nకింది వాటిలో ఒకటి ఉత్పత్తి కారకంగా అవసరమని పరిగణించబడదు (TSTET 11 Jan 2025)",
    "options": [
      "Government regulations\nప్రభుత్వ నిబంధనలు",
      "Capital including tools and machines\nపరికరాలు మరియు యంత్రాలతో సహా మూలధనం",
      "Labour which includes skilled and unskilled\nనైపుణ్యం మరియు నైపుణ్యం లేని శ్రమతో కూడిన కార్మికులు",
      "Land and other natural resources\nభూమి మరియు ఇతర సహజ వనరులు"
    ],
    "correctAnswer": 0,
    "explanation": "ఆర్థికశాస్త్రంలో సాంప్రదాయ ఉత్పత్తి కారకాలు భూమి, శ్రమ, మూలధనం మరియు వ్యవస్థాపకత. ప్రభుత్వ నిబంధనలు ఉత్పత్తి జరిగే బాహ్య పరిస్థితులు లేదా చట్టపరమైన ఫ్రేమ్‌వర్క్, కానీ ఉత్పత్తి కారకం కాదు."
  },
  {
    "id": 227,
    "question": "The significant outcome of the Arab Spring in 2010-11 was (TSTET 11 Jan 2025)\n2010-11లో అరబ్ స్ప్రింగ్ యొక్క ముఖ్యమైన ఫలితం (TSTET 11 Jan 2025)",
    "options": [
      "It caused a decline in media influence\nఇది మీడియా ప్రభావంలో క్షీణతకు కారణమైంది",
      "It was primarily a cultural movement without political implications\nఇది ప్రధానంగా రాజకీయ చిక్కులు లేని సాంస్కృతిక ఉద్యమం",
      "It resulted in the uprooting of dictators in several nations\nఇది అనేక దేశాలలో నియంతలను కూకటివేళ్లతో పెకిలించింది",
      "It led to the establishment of new trade agreements\nఇది కొత్త వాణిజ్య ఒప్పందాల స్థాపనకు దారితీసింది"
    ],
    "correctAnswer": 2,
    "explanation": "అరబ్ స్ప్రింగ్ అనేది అనేక అరబ్ దేశాలలో వ్యాపించిన ప్రజాస్వామ్య అనుకూల తిరుగుబాట్ల శ్రేణి. దాని అత్యంత ముఖ్యమైన మరియు తక్షణ పరిణామాలలో ఒకటి ట్యునీషియా, ఈజిప్ట్ మరియు లిబియా వంటి దేశాలలో దీర్ఘకాలంగా ఉన్న అధికార పాలకులను మరియు నియంతలను కూలదోయడం."
  },
  {
    "id": 228,
    "question": "The share of agriculture in a country's GDP over a period of 43-years since independence (TSTET 11 Jan 2025)\nస్వాతంత్ర్యం వచ్చినప్పటి నుండి 43 సంవత్సరాల కాలంలో ఒక దేశం యొక్క GDPలో వ్యవసాయం వాటా (TSTET 11 Jan 2025)",
    "options": [
      "It has become the dominant sector\nఇది ఆధిపత్య రంగంగా మారింది",
      "It fell down drastically\nఇది గణనీయంగా పడిపోయింది",
      "It remained constant\nఇది స్థిరంగా ఉంది",
      "It increased significantly\nఇది గణనీయంగా పెరిగింది"
    ],
    "correctAnswer": 1,
    "explanation": "ఒక దేశ ఆర్థిక వ్యవస్థ అభివృద్ధి చెందుతున్నప్పుడు, GDPలో ప్రాథమిక రంగం (వ్యవసాయం) వాటా సాధారణంగా తగ్గుతుంది, అయితే ద్వితీయ (పరిశ్రమ) మరియు తృతీయ (సేవలు) రంగాల వాటాలు పెరుగుతాయి. భారతదేశంలో, స్వాతంత్ర్యం వచ్చినప్పటి నుండి, సేవా మరియు పారిశ్రామిక రంగాల వేగవంతమైన వృద్ధి వలన జాతీయ GDPకి వ్యవసాయం యొక్క శాతం సహకారం గణనీయంగా తగ్గింది."
  },
  {
    "id": 229,
    "question": "Among the following identify the learning experience placed at fourth from base of the cone in the order of increasing abstractness in Edgar Dale's cone of experiences (TSTET 11 Jan 2025)\nఎడ్గార్ డేల్ యొక్క అనుభవ శంఖువులో పెరుగుతున్న అమూర్తత క్రమంలో, శంఖువు యొక్క ఆధారం నుండి నాల్గవ స్థానంలో ఉన్న అభ్యాస అనుభవాన్ని కింది వాటిలో గుర్తించండి (TSTET 11 Jan 2025)",
    "options": [
      "Field Trips\nక్షేత్ర పర్యటనలు",
      "Demonstration\nప్రదర్శన",
      "Exhibits\nప్రదర్శనలు",
      "Dramatic participation\nనాటకీయ భాగస్వామ్యం"
    ],
    "correctAnswer": 0,
    "explanation": "ఎడ్గార్ డేల్ యొక్క అనుభవ శంఖువు అభ్యాసాన్ని అత్యంత మూర్తమైన (ఆధారం) నుండి అత్యంత అమూర్తమైన (పైభాగం) వరకు అమరుస్తుంది. ఆధారం నుండి క్రమం: ప్రత్యక్ష అనుభవాలు, కల్పిత అనుభవాలు, నాటకీయ భాగస్వామ్యం, ప్రదర్శనలు, క్షేత్ర పర్యటనలు, ప్రదర్శన వస్తువులు మొదలైనవి. ఎంపికలలో, నాటకీయ భాగస్వామ్యం అత్యంత మూర్తమైనది, ఆ తర్వాత ప్రదర్శన, ఆపై క్షేత్ర పర్యటనలు. అందించిన ఎంపికల ఆధారంగా మరియు మూర్తమైన నుండి అమూర్తమైన వైపుకు వెళుతున్నప్పుడు, క్షేత్ర పర్యటనలు ప్రదర్శనలు మరియు నాటకీయ భాగస్వామ్యం తర్వాత స్థానం పొందుతాయి."
  },
  {
    "id": 230,
    "question": "As a social studies teacher which of the following would you include in the syllabus for teaching major challenges still prevailing in contemporary society in India. (TSTET 11 Jan 2025)\nసాంఘిక శాస్త్ర ఉపాధ్యాయునిగా, భారతదేశంలోని సమకాలీన సమాజంలో ఇప్పటికీ నెలకొని ఉన్న ప్రధాన సవాళ్లను బోధించడానికి మీరు సిలబస్‌లో కింది వాటిలో దేనిని చేర్చుతారు. (TSTET 11 Jan 2025)",
    "options": [
      "A) Religiousness\nఎ) మతతత్వం",
      "B) Discrimination among women\nబి) మహిళల మధ్య వివక్ష",
      "C) Child Abuse\nసి) బాలల వేధింపులు",
      "D) Regionalism\nడి) ప్రాంతీయవాదం"
    ],
    "correctAnswer": 1,
    "explanation": "మహిళలపై వివక్ష (B), బాలల వేధింపులు (C), మరియు విభజనవాద ప్రాంతీయతత్వం (D) అన్నీ ఆధునిక భారతదేశంలో ముఖ్యమైన మరియు విస్తృతంగా గుర్తించబడిన సామాజిక సవాళ్లు. 'మతతత్వం' (A), మతపరంగా ఉండటం అనేది మత తీవ్రవాదం లేదా మతతత్వంలా కాకుండా, దానికదే ఒక సామాజిక సమస్య కాదు."
  },
  {
    "id": 231,
    "question": "The essential terms and definitions relating to a topic in social studies relate to this objective (TSTET 11 Jan 2025)\nసాంఘిక శాస్త్రంలో ఒక అంశానికి సంబంధించిన అవసరమైన పదాలు మరియు నిర్వచనాలు ఈ లక్ష్యానికి సంబంధించినవి (TSTET 11 Jan 2025)",
    "options": [
      "Skill\nనైపుణ్యం",
      "Application\nఅనువర్తనం",
      "Knowledge\nజ్ఞానం",
      "Appreciation\nప్రశంస"
    ],
    "correctAnswer": 2,
    "explanation": "బ్లూమ్ యొక్క విద్యా లక్ష్యాల వర్గీకరణలో, 'జ్ఞానం' స్థాయి అత్యంత ప్రాథమికమైనది. ఇది వాస్తవాలు, ప్రాథమిక భావనలు మరియు సమాధానాలను గుర్తుకు తెచ్చుకోవడం కలిగి ఉంటుంది, ఇందులో అవసరమైన పదాలు మరియు వాటి నిర్వచనాలను తెలుసుకోవడం మరియు గుర్తుంచుకోవడం కూడా ఉంటుంది."
  },
  {
    "id": 232,
    "question": "Among the following, which are INCORRECT statements regarding aims and objectives of social studies (TSTET 11 Jan 2025)\nకింది వాటిలో, సాంఘిక శాస్త్రం యొక్క లక్ష్యాలు మరియు ఉద్దేశ్యాలకు సంబంధించి ఏవి తప్పు ప్రకటనలు (TSTET 11 Jan 2025)",
    "options": [
      "A) Aims are the steps to achieve the objectives\nఎ) లక్ష్యాలు ఉద్దేశ్యాలను సాధించడానికి దశలు",
      "B) Objectives may not change as per the content\nబి) కంటెంట్‌కు అనుగుణంగా ఉద్దేశ్యాలు మారకపోవచ్చు",
      "C) Aims are general and long term achievable\nసి) లక్ష్యాలు సాధారణమైనవి మరియు దీర్ఘకాలికంగా సాధించగలవి",
      "Correct answer: A & B only\nసరైన సమాధానం: A & B మాత్రమే"
    ],
    "correctAnswer": 0,
    "explanation": "ప్రకటన (A) తప్పు, ఎందుకంటే సంబంధం తారుమారు చేయబడింది: ఉద్దేశ్యాలు విశాలమైన, దీర్ఘకాలిక లక్ష్యాలను సాధించడానికి నిర్దిష్ట, కొలవగల దశలు. ప్రకటన (B) తప్పు, ఎందుకంటే అభ్యాస ఉద్దేశ్యాలు కంటెంట్-నిర్దిష్టమైనవి మరియు అంశంతో పాటు మారాలి. ప్రకటన (C) సరైనది. కాబట్టి, తప్పు ప్రకటనలు A మరియు B."
  },
  {
    "id": 233,
    "question": "The following Curriculum Framework of Teacher Education suggested giving priority for practicum, life skills and self and participatory learning in pre-service teacher education programmes. (TSTET 11 Jan 2025)\nకింది ఉపాధ్యాయ విద్య యొక్క పాఠ్యప్రణాళిక ఫ్రేమ్‌వర్క్, ప్రీ-సర్వీస్ ఉపాధ్యాయ విద్యా కార్యక్రమాలలో ప్రాక్టికం, జీవన నైపుణ్యాలు మరియు స్వీయ మరియు భాగస్వామ్య అభ్యాసానికి ప్రాధాన్యత ఇవ్వాలని సూచించింది. (TSTET 11 Jan 2025)",
    "options": [
      "NCF-2000\nNCF-2000",
      "NCFTE-2009\nNCFTE-2009",
      "NCF-1975\nNCF-1975",
      "NCF-1988\nNCF-1988"
    ],
    "correctAnswer": 1,
    "explanation": "ఉపాధ్యాయ విద్య కోసం జాతీయ పాఠ్యప్రణాళిక ఫ్రేమ్‌వర్క్ (NCFTE) 2009, ఉపాధ్యాయ విద్యా కార్యక్రమాలు ప్రత్యక్ష ఆచరణాత్మక అనుభవం (ప్రాక్టికం), జీవన నైపుణ్యాల అభివృద్ధి, మరియు స్వీయ-నిర్దేశిత మరియు భాగస్వామ్య అభ్యాస వాతావరణాన్ని పెంపొందించడంపై దృష్టి పెట్టాల్సిన అవసరాన్ని ప్రత్యేకంగా నొక్కి చెప్పింది."
  },
  {
    "id": 234,
    "question": "Match the following List - A with List - B. A) Projected Aids, B) Two-dimensional Aids, C) Three-dimensional Aids, D) Activity Aids with i) Charts, ii) Dramatisations, iii) Films Strips, iv) Replicas (TSTET 11 Jan 2025)\nకింది జాబితా - Aను జాబితా - Bతో జతపరచండి. ఎ) ప్రొజెక్టెడ్ ఎయిడ్స్, బి) ద్వి-మితీయ ఎయిడ్స్, సి) త్రి-మితీయ ఎయిడ్స్, డి) కార్యాచరణ ఎయిడ్స్ తో i) చార్టులు, ii) నాటకీకరణలు, iii) ఫిల్మ్ స్ట్రిప్స్, iv) ప్రతిరూపాలు (TSTET 11 Jan 2025)",
    "options": [
      "A-iv; B-i; C-ii; D-iii",
      "A-iv; B-iii; C-ii; D-i",
      "A-iii; B-i; C-iv; D-ii",
      "A-iii; B-iv; C-i; D-ii"
    ],
    "correctAnswer": 2,
    "explanation": "సరైన జతలు: ఎ) ప్రొజెక్టెడ్ ఎయిడ్స్ iii) ఫిల్మ్ స్ట్రిప్స్‌తో సరిపోలుతాయి, వీటికి ప్రొజెక్షన్ అవసరం. బి) ద్వి-మితీయ ఎయిడ్స్ i) చార్టులతో సరిపోలుతాయి, ఇవి చదునుగా ఉంటాయి. సి) త్రి-మితీయ ఎయిడ్స్ iv) ప్రతిరూపాలతో సరిపోలుతాయి, ఇవి లోతుతో కూడిన నమూనాలు. డి) కార్యాచరణ ఎయిడ్స్ ii) నాటకీకరణలతో సరిపోలుతాయి, ఇందులో చురుకైన భాగస్వామ్యం ఉంటుంది."
  },
  {
    "id": 235,
    "question": "Primary source among the following for knowing about India during medieval period (TSTET 11 Jan 2025)\nమధ్యయుగ కాలంలో భారతదేశం గురించి తెలుసుకోవడానికి కింది వాటిలో ప్రాథమిక మూలం (TSTET 11 Jan 2025)",
    "options": [
      "Text books\nపాఠ్య పుస్తకాలు",
      "Articles in National Journals\nజాతీయ పత్రికలలో వ్యాసాలు",
      "Teacher Notes\nఉపాధ్యాయుల నోట్స్",
      "Inscriptions\nశాసనాలు"
    ],
    "correctAnswer": 3,
    "explanation": "ప్రాథమిక మూలాలు అనేవి అధ్యయనం చేస్తున్న కాలానికి చెందిన అసలైన వస్తువులు. శాసనాలు, రాయి లేదా లోహంపై చెక్కబడిన రచనలు, మధ్యయుగ కాలం నుండి ప్రత్యక్ష సాక్ష్యాలు. పాఠ్యపుస్తకాలు, వ్యాసాలు మరియు నోట్స్ అనేవి ప్రాథమిక మూలాలను విశ్లేషించి తర్వాత సృష్టించబడిన ద్వితీయ మూలాలు."
  },
  {
    "id": 236,
    "question": "Which of the following would you include for giving a project work on non-renewable resource for power generation? (TSTET 11 Jan 2025)\nవిద్యుత్ ఉత్పత్తి కోసం పునరుత్పాదకం కాని వనరుపై ప్రాజెక్ట్ పని ఇవ్వడానికి మీరు కింది వాటిలో దేనిని చేర్చుతారు? (TSTET 11 Jan 2025)",
    "options": [
      "Coal\nబొగ్గు",
      "Biomass\nబయోమాస్",
      "Solar\nసౌరశక్తి",
      "Tidal\nటైడల్"
    ],
    "correctAnswer": 0,
    "explanation": "పునరుత్పాదకం కాని వనరులు పరిమితంగా ఉంటాయి మరియు సహజ ప్రక్రియల ద్వారా భర్తీ చేయబడటం కంటే చాలా వేగంగా వినియోగించబడతాయి. బొగ్గు ఒక శిలాజ ఇంధనం, విద్యుత్ ఉత్పత్తి కోసం విస్తృతంగా ఉపయోగించే పునరుత్పాదకం కాని వనరుకు ఒక క్లాసిక్ ఉదాహరణ. సౌర, బయోమాస్ మరియు టైడల్ అన్నీ పునరుత్పాదక శక్తి రూపాలు."
  },
  {
    "id": 237,
    "question": "Identify the correct sequence of steps while teaching in 5E learning model. (TSTET 11 Jan 2025)\n5E అభ్యాస నమూనాలో బోధించేటప్పుడు దశల యొక్క సరైన క్రమాన్ని గుర్తించండి. (TSTET 11 Jan 2025)",
    "options": [
      "Engage, Explain, Explore, Elaborate, Evaluation\nనిమగ్నం, వివరించు, అన్వేషించు, విస్తరించు, మూల్యాంకనం",
      "Explain, Explore, Engage, Elaborate, Evaluation\nవివరించు, అన్వేషించు, నిమగ్నం, విస్తరించు, మూల్యాంకనం",
      "Engage, Explore, Explain, Elaborate, Evaluation\nనిమగ్నం, అన్వేషించు, వివరించు, విస్తరించు, మూల్యాంకనం",
      "Explain, Engage, Explore, Elaborate, Evaluation\nవివరించు, నిమగ్నం, అన్వేషించు, విస్తరించు, మూల్యాంకనం"
    ],
    "correctAnswer": 2,
    "explanation": "5E నమూనా అనేది ఒక విచారణ-ఆధారిత బోధనా నమూనా. సరైన క్రమం: నిమగ్నం (Engage - విద్యార్థుల ఆసక్తిని ఆకర్షించడం), అన్వేషించు (Explore - విద్యార్థులు భావనతో పరస్పరం వ్యవహరించడం), వివరించు (Explain - విద్యార్థులు మరియు ఉపాధ్యాయుడు భావనను స్పష్టం చేయడం), విస్తరించు (Elaborate - విద్యార్థులు భావనను కొత్త పరిస్థితులకు వర్తింపజేయడం), మరియు మూల్యాంకనం (Evaluate - అవగాహనను అంచనా వేయడం)."
  },
  {
    "id": 238,
    "question": "The total number of working days and total number of periods available for teaching-learning of social studies is reflected in this plan (TSTET 11 Jan 2025)\nసాంఘిక శాస్త్రం యొక్క బోధన-అభ్యసన కోసం అందుబాటులో ఉన్న మొత్తం పని దినాలు మరియు మొత్తం పీరియడ్ల సంఖ్య ఈ ప్రణాళికలో ప్రతిబింబిస్తుంది (TSTET 11 Jan 2025)",
    "options": [
      "Unit\nయూనిట్",
      "Year\nసంవత్సరం",
      "Period\nపీరియడ్",
      "Micro\nమైక్రో"
    ],
    "correctAnswer": 1,
    "explanation": "సంవత్సర ప్రణాళిక (లేదా వార్షిక ప్రణాళిక) అనేది మొత్తం విద్యా సంవత్సరానికి ఒక సమగ్ర బోధనా ప్రణాళిక. ఇది సిలబస్‌ను విభజించి, అందుబాటులో ఉన్న మొత్తం పని దినాలు మరియు బోధనా పీరియడ్‌లలో యూనిట్లు మరియు పాఠాలను కేటాయించడాన్ని కలిగి ఉంటుంది."
  },
  {
    "id": 239,
    "question": "In Anderson, L.W. & Krathwol, D.R. two-dimensional classification of Educational Objectives, 'Invent' comes at the intersection of this knowledge and cognitive process dimensions respectively (TSTET 11 Jan 2025)\nఆండర్సన్, L.W. & క్రాత్‌వోల్, D.R. యొక్క విద్యా లక్ష్యాల ద్వి-మితీయ వర్గీకరణలో, 'ఆవిష్కరించు' అనేది వరుసగా ఈ జ్ఞానం మరియు అభిజ్ఞా ప్రక్రియల పరిమాణాల ఖండన వద్ద వస్తుంది (TSTET 11 Jan 2025)",
    "options": [
      "Meta cognitive knowledge and Creating\nమెటా కాగ్నిటివ్ జ్ఞానం మరియు సృష్టించడం",
      "Factual knowledge and Remembering\nవాస్తవ జ్ఞానం మరియు గుర్తుంచుకోవడం",
      "Conceptual knowledge and Understanding\nభావనాత్మక జ్ఞానం మరియు అర్థం చేసుకోవడం",
      "Procedural knowledge and Applying\nవిధానపరమైన జ్ఞానం మరియు అనువర్తించడం"
    ],
    "correctAnswer": 0,
    "explanation": "ఆండర్సన్ మరియు క్రాత్‌వోల్ యొక్క సవరించిన వర్గీకరణలో, 'ఆవిష్కరించు' అనేది అత్యున్నత అభిజ్ఞా ప్రక్రియ అయిన 'సృష్టించడం'తో అనుబంధించబడిన ఒక కీలకమైన క్రియా పదం. ఈ సృజనాత్మక ప్రక్రియ తరచుగా కొత్త ఆలోచనలు లేదా ఉత్పత్తులను రూపొందించడానికి 'మెటాకాగ్నిటివ్ జ్ఞానం'—ఒకరి స్వంత అభిజ్ఞానం మరియు వ్యూహాల గురించిన అవగాహన—పై ఆధారపడి ఉంటుంది."
  },
  {
    "id": 240,
    "question": "Match the following List - A with List - B. A) Conceptual understanding, B) Appreciation - Sensitivity, C) Information skills with i) 15%, ii) 40%, iii) 10% weightage in SA (TSTET 11 Jan 2025)\nకింది జాబితా - Aను జాబితా - Bతో జతపరచండి. ఎ) భావనాత్మక అవగాహన, బి) ప్రశంస - సున్నితత్వం, సి) సమాచార నైపుణ్యాలు తో i) 15%, ii) 40%, iii) SAలో 10% వెయిటేజ్ (TSTET 11 Jan 2025)",
    "options": [
      "A-ii: B-i; C-iii",
      "A-iii; B-i; C-ii",
      "A-i; B-ii; C-iii",
      "A-ii; B-iii; C-i"
    ],
    "correctAnswer": 3,
    "explanation": "తెలంగాణలో సాంఘిక శాస్త్రం కోసం సమ్మెటివ్ అసెస్‌మెంట్ (SA)లో అకడమిక్ ప్రమాణాల కొరకు ప్రామాణిక వెయిటేజ్ ఆధారంగా, సాధారణ పంపిణీ: ఎ) భావనాత్మక అవగాహన - 40%; బి) ప్రశంస మరియు సున్నితత్వం - 10%; సి) సమాచార నైపుణ్యాలు - 15%. కాబట్టి, సరైన జత A-ii, B-iii, C-i."
  },
  {
    "id": 241,
    "question": "Which of the following statement correctly describes \"Solar Insolation\"? (TSTET 12 Jan 2025)\nకింది వాటిలో ఏ ప్రకటన \"సౌర వికిరణ పుటం (Solar Insolation)\" ను సరిగ్గా వివరిస్తుంది? (TSTET 12 Jan 2025)",
    "options": [
      "The amount of solar radiation received on the surface of the Earth\nభూమి యొక్క ఉపరితలంపై అందుకున్న సౌర వికిరణం మొత్తం",
      "The amount of solar radiation absorbed by the water on the earth\nభూమిపై నీటి ద్వారా గ్రహించబడిన సౌర వికిరణం మొత్తం",
      "The total amount of solar energy reflected back from the surface of the earth\nభూమి యొక్క ఉపరితలం నుండి తిరిగి ప్రతిబింబించే మొత్తం సౌర శక్తి",
      "The distribution of solar energy in the atmosphere\nవాతావరణంలో సౌర శక్తి యొక్క పంపిణీ"
    ],
    "correctAnswer": 0,
    "explanation": "సోలార్ ఇన్సోలేషన్, 'ఇన్‌కమింగ్ సోలార్ రేడియేషన్'కు సంక్షిప్తీకరణ, భూమి యొక్క ఉపరితలం చేరే మొత్తం సౌర శక్తి లేదా వికిరణాన్ని సూచిస్తుంది. ఇది భూమి యొక్క వాతావరణం మరియు శీతోష్ణస్థితి వ్యవస్థలకు ఒక ప్రాథమిక చోదకం."
  },
  {
    "id": 242,
    "question": "Out of the eight planets of our Solar System, identify the inner planets (TSTET 12 Jan 2025)\nమన సౌర వ్యవస్థలోని ఎనిమిది గ్రహాలలో, అంతర గ్రహాలను గుర్తించండి (TSTET 12 Jan 2025)",
    "options": [
      "Mercury, Saturn, Jupiter and Neptune\nబుధుడు, శని, బృహస్పతి మరియు నెప్ట్యూన్",
      "Earth, Saturn, Jupiter and Neptune\nభూమి, శని, బృహస్పతి మరియు నెప్ట్యూన్",
      "Mercury, Venus, Earth and Mars\nబుధుడు, శుక్రుడు, భూమి మరియు అంగారకుడు",
      "Venus, Saturn, Jupiter and Neptune\nశుక్రుడు, శని, బృహస్పతి మరియు నెప్ట్యూన్"
    ],
    "correctAnswer": 2,
    "explanation": "అంతర గ్రహాలు, భూమి వంటి గ్రహాలు (terrestrial planets) అని కూడా పిలుస్తారు, ఇవి సూర్యునికి అత్యంత దగ్గరగా ఉన్న నాలుగు గ్రహాలు. అవి బుధుడు, శుక్రుడు, భూమి మరియు అంగారకుడు. అవి వాటి ఘనమైన, రాతి కూర్పులచే వర్గీకరించబడతాయి."
  },
  {
    "id": 243,
    "question": "The Himalayan rivers, after descending from the mountains deposit pebbles in a narrow belt of about 8 to 16 km in width lying parallel to the slopes of the Siwaliks. This nature of soil is known as (TSTET 12 Jan 2025)\nహిమాలయ నదులు, పర్వతాల నుండి దిగివచ్చిన తరువాత, శివాలిక్ పర్వతాల వాలులకు సమాంతరంగా ఉన్న సుమారు 8 నుండి 16 కి.మీ వెడల్పు గల ఇరుకైన మేఖలలో గులకరాళ్ళను నిక్షేపిస్తాయి. ఈ నేల స్వభావాన్ని ఇలా అంటారు (TSTET 12 Jan 2025)",
    "options": [
      "Khader\nఖాదర్",
      "Terai\nటెరాయ్",
      "Bhabar\nభాబర్",
      "Bhangar\nభంగర్"
    ],
    "correctAnswer": 2,
    "explanation": "భాబర్ అనేది హిమాలయాల పాదాల వద్ద, ముఖ్యంగా శివాలిక్ పర్వతాల వాలుల వెంట ఉన్న ఒక ఇరుకైన, సచ్ఛిద్రమైన మేఖల. ఇది నదులు గులకరాళ్ళు మరియు బండరాళ్ల వంటి ముతక పదార్థాలను నిక్షేపించడం ద్వారా ఏర్పడుతుంది, ఇది దానిని అధిక సచ్ఛిద్రంగా చేస్తుంది."
  },
  {
    "id": 244,
    "question": "The Deccan Plateau is (TSTET 12 Jan 2025)\nదక్కన్ పీఠభూమి (TSTET 12 Jan 2025)",
    "options": [
      "Higher in the west and slopes gently towards east\nపశ్చిమాన ఎత్తుగా ఉండి తూర్పు వైపుకు మెల్లగా వాలుగా ఉంటుంది",
      "Wider in the south and narrower in the north\nదక్షిణాన వెడల్పుగా మరియు ఉత్తరాన ఇరుకుగా ఉంటుంది",
      "Higher in the east and slopes gently westwards\nతూర్పున ఎత్తుగా ఉండి పశ్చిమ వైపుకు మెల్లగా వాలుగా ఉంటుంది",
      "Higher in the South and slopes gently northwards\nదక్షిణాన ఎత్తుగా ఉండి ఉత్తర వైపుకు మెల్లగా వాలుగా ఉంటుంది"
    ],
    "correctAnswer": 0,
    "explanation": "దక్కన్ పీఠభూమి యొక్క సాధారణ ఎత్తు పశ్చిమ కనుమల ఉనికి కారణంగా పశ్చిమాన ఎక్కువగా ఉంటుంది మరియు ఇది బంగాళాఖాతం వైపు తూర్పుకు మెల్లగా వాలుగా ఉంటుంది. ఈ భూ స్వరూపం గోదావరి, కృష్ణా, మరియు కావేరి వంటి ప్రధాన ద్వీపకల్ప నదుల తూర్పు ప్రవాహ దిశను నిర్దేశిస్తుంది."
  },
  {
    "id": 245,
    "question": "The main purpose of Paris Summit, 2015 was (TSTET 12 Jan 2025)\nపారిస్ శిఖరాగ్ర సమావేశం, 2015 యొక్క ముఖ్య ఉద్దేశ్యం (TSTET 12 Jan 2025)",
    "options": [
      "To eradicate poverty throughout the world\nప్రపంచవ్యాప్తంగా పేదరికాన్ని నిర్మూలించడానికి",
      "To attain cent percent literacy in central Asia\nమధ్య ఆసియాలో నూటికి నూరు శాతం అక్షరాస్యతను సాధించడానికి",
      "To ensure that the children enjoy the child rights\nపిల్లలు బాలల హక్కులను అనుభవించేలా చూడటానికి",
      "To reduce greenhouse gas emissions\nగ్రీన్‌హౌస్ వాయు ఉద్గారాలను తగ్గించడానికి"
    ],
    "correctAnswer": 3,
    "explanation": "2015 పారిస్ శిఖరాగ్ర సమావేశం, COP21 అని కూడా పిలుస్తారు, ఇది చారిత్రాత్మక పారిస్ ఒప్పందానికి దారితీసింది. దీని ప్రాథమిక లక్ష్యం గ్లోబల్ వార్మింగ్‌ను పరిమితం చేయడం ద్వారా వాతావరణ మార్పులతో పోరాడటం, దీనికి ప్రపంచ గ్రీన్‌హౌస్ వాయు ఉద్గారాలలో గణనీయమైన తగ్గింపులు అవసరం."
  },
  {
    "id": 246,
    "question": "Locally, these mountain ranges are known as Mizo hills, Naga Hills, Manipur Hills and Patkai Hills (TSTET 12 Jan 2025)\nస్థానికంగా, ఈ పర్వత శ్రేణులను మిజో కొండలు, నాగా కొండలు, మణిపూర్ కొండలు మరియు పట్కాయ్ కొండలు అని పిలుస్తారు (TSTET 12 Jan 2025)",
    "options": [
      "Punjab Himalayas\nపంజాబ్ హిమాలయాలు",
      "Hindu Kush Mountain ranges\nహిందూ కుష్ పర్వత శ్రేణులు",
      "Purvanchal Hills\nపూర్వాంచల్ కొండలు",
      "Kunlun Mountain Ranges\nకున్లున్ పర్వత శ్రేణులు"
    ],
    "correctAnswer": 2,
    "explanation": "పూర్వాంచల్ శ్రేణి, లేదా తూర్పు పర్వతాలు, ఈశాన్య భారతదేశంలోని హిమాలయాల ఉప-పర్వత శ్రేణి. ఇది పట్కాయ్ కొండలు, నాగా కొండలు, మిజో కొండలు మరియు మణిపూర్ కొండలతో సహా అనేక స్థానిక కొండ శ్రేణులను కలిగి ఉంటుంది."
  },
  {
    "id": 247,
    "question": "In India, over 97 per cent of coal reserves are found in this region (TSTET 12 Jan 2025)\nభారతదేశంలో, 97 శాతానికి పైగా బొగ్గు నిల్వలు ఈ ప్రాంతంలో కనిపిస్తాయి (TSTET 12 Jan 2025)",
    "options": [
      "Damodar, Sone, Mahanadi and Godavari\nదామోదర్, సోన్, మహానది మరియు గోదావరి",
      "Indo Gangetic Plain region\nఇండో-గంగా మైదాన ప్రాంతం",
      "Assam, Gujarat and Mumbai High Region\nఅస్సాం, గుజరాత్ మరియు ముంబై హై ప్రాంతం",
      "East and West Coast Plain Region and Sundarbans region\nతూర్పు మరియు పశ్చిమ తీర మైదాన ప్రాంతం మరియు సుందర్బన్స్ ప్రాంతం"
    ],
    "correctAnswer": 0,
    "explanation": "భారతదేశంలోని బొగ్గు నిల్వలలో అధిక భాగం, ముఖ్యంగా గోండ్వానా బొగ్గు క్షేత్రాలు (ఇవి మొత్తం నిల్వల్లో 97% కంటే ఎక్కువ), దామోదర్, సోన్, మహానది మరియు గోదావరి నదీ లోయలలో ఉన్నాయి."
  },
  {
    "id": 248,
    "question": "It is due to Western Ghats, this part of the Deccan Plateau receive very less rainfall (TSTET 12 Jan 2025)\nపశ్చిమ కనుమల కారణంగా, దక్కన్ పీఠభూమిలోని ఈ భాగానికి చాలా తక్కువ వర్షపాతం లభిస్తుంది (TSTET 12 Jan 2025)",
    "options": [
      "The northern\nఉత్తర",
      "The Southern\nదక్షిణ",
      "The Eastern\nతూర్పు",
      "The Central\nమధ్య"
    ],
    "correctAnswer": 2,
    "explanation": "పశ్చిమ కనుమలు వర్షచ్ఛాయా ప్రభావాన్ని సృష్టిస్తాయి. అవి పడమర నుండి తేమతో కూడిన రుతుపవన గాలులను అడ్డుకుంటాయి, దీనివల్ల వాయుముఖ (పశ్చిమ) వైపు భారీ వర్షపాతం మరియు దక్కన్ పీఠభూమిలోని పవనాభిముఖ (తూర్పు) భాగం చాలా తక్కువ వర్షపాతంతో పొడిగా ఉంటుంది."
  },
  {
    "id": 249,
    "question": "The longitudinal Valleys lying in between these mountains are known as 'Duns' (TSTET 12 Jan 2025)\nఈ పర్వతాల మధ్య ఉన్న రేఖాంశ లోయలను 'డూన్‌లు' అని పిలుస్తారు (TSTET 12 Jan 2025)",
    "options": [
      "Greater Himalayas and Lesser Himalayas\nగ్రేటర్ హిమాలయాలు మరియు లెస్సర్ హిమాలయాలు",
      "Punjab Himalayas and Kumaon Himalayas\nపంజాబ్ హిమాలయాలు మరియు కుమావున్ హిమాలయాలు",
      "Lesser Himalayas and Purvanchal Hills\nలెస్సర్ హిమాలయాలు మరియు పూర్వాంచల్ కొండలు",
      "Lesser Himalayas and Siwalik ranges\nలెస్సర్ హిమాలయాలు మరియు శివాలిక్ శ్రేణులు"
    ],
    "correctAnswer": 3,
    "explanation": "'డూన్‌లు' అనేవి లెస్సర్ హిమాలయాలు (హిమాచల్) మరియు బాహ్య హిమాలయ శ్రేణి అయిన శివాలిక్‌ల మధ్య ఉన్న విలక్షణమైన రేఖాంశ లోయలు. డెహ్రాడూన్ ఒక డూన్ లోయకు క్లాసిక్ ఉదాహరణ."
  },
  {
    "id": 250,
    "question": "The Tropic of Cancer is NOT passing through one of these states of India (TSTET 12 Jan 2025)\nకర్కట రేఖ భారతదేశంలోని ఈ రాష్ట్రాలలో ఒకదాని గుండా వెళ్ళదు (TSTET 12 Jan 2025)",
    "options": [
      "Tripura\nత్రిపుర",
      "Mizoram\nమిజోరాం",
      "Manipur\nమణిపూర్",
      "Rajasthan\nరాజస్థాన్"
    ],
    "correctAnswer": 2,
    "explanation": "కర్కట రేఖ ఎనిమిది భారతీయ రాష్ట్రాల గుండా వెళుతుంది: గుజరాత్, రాజస్థాన్, మధ్యప్రదేశ్, ఛత్తీస్‌గఢ్, జార్ఖండ్, పశ్చిమ బెంగాల్, త్రిపుర మరియు మిజోరాం. ఇది మణిపూర్ గుండా వెళ్ళదు."
  },
  {
    "id": 251,
    "question": "As per the Human Development Report, 2021, the Asian countries which are categorised under the Medium Human Development (TSTET 12 Jan 2025)\nమానవ అభివృద్ధి నివేదిక, 2021 ప్రకారం, మధ్యస్థ మానవ అభివృద్ధి విభాగంలో వర్గీకరించబడిన ఆసియా దేశాలు",
    "options": [
      "Sri Lanka and China\nశ్రీలంక మరియు చైనా",
      "Japan and India\nజపాన్ మరియు భారతదేశం",
      "India and Sri Lanka\nభారతదేశం మరియు శ్రీలంక",
      "India and Bangladesh\nభారతదేశం మరియు బంగ్లాదేశ్"
    ],
    "correctAnswer": 3,
    "explanation": "2021-22 మానవ అభివృద్ధి నివేదిక ప్రకారం, భారతదేశం (ర్యాంక్ 132) మరియు బంగ్లాదేశ్ (ర్యాంక్ 129) రెండూ 'మధ్యస్థ మానవ అభివృద్ధి' విభాగంలో ఉన్నాయి. శ్రీలంక మరియు చైనా 'అధిక' విభాగంలో ఉండగా, జపాన్ 'చాలా అధిక' విభాగంలో ఉంది."
  },
  {
    "id": 252,
    "question": "The Oceanic Trenches namely the Challenger and Puertorico are in these oceans respectively (TSTET 12 Jan 2025)\nచాలెంజర్ మరియు ప్యూర్టోరికో అనే సముద్రపు అగడ్తలు వరుసగా ఈ మహాసముద్రాలలో ఉన్నాయి",
    "options": [
      "The Pacific Ocean and the Antarctic Ocean\nపసిఫిక్ మహాసముద్రం మరియు అంటార్కిటిక్ మహాసముద్రం",
      "The Atlantic Ocean and the Indian Ocean\nఅట్లాంటిక్ మహాసముద్రం మరియు హిందూ మహాసముద్రం",
      "The Pacific Ocean and the Atlantic Ocean\nపసిఫిక్ మహాసముద్రం మరియు అట్లాంటిక్ మహాసముద్రం",
      "The Pacific Ocean and the Indian Ocean\nపసిఫిక్ మహాసముద్రం మరియు హిందూ మహాసముద్రం"
    ],
    "correctAnswer": 2,
    "explanation": "భూమిపై అత్యంత లోతైన ప్రదేశంగా ప్రసిద్ధి చెందిన చాలెంజర్ డీప్, పశ్చిమ పసిఫిక్ మహాసముద్రంలోని మరియానా ట్రెంచ్‌లో ఉంది. ప్యూర్టోరికో ట్రెంచ్ అట్లాంటిక్ మహాసముద్రంలో అత్యంత లోతైన ప్రదేశం."
  },
  {
    "id": 253,
    "question": "In 1948, the Declaration of Human Rights was passed by the (TSTET 12 Jan 2025)\n1948లో, మానవ హక్కుల ప్రకటనను ఆమోదించింది",
    "options": [
      "UN Security Council\nUN భద్రతా మండలి",
      "UN General Assembly\nUN సాధారణ సభ",
      "UNESCO\nయునెస్కో",
      "International Court of Justice\nఅంతర్జాతీయ న్యాయస్థానం"
    ],
    "correctAnswer": 1,
    "explanation": "సార్వత్రిక మానవ హక్కుల ప్రకటన (UDHR) అనేది డిసెంబర్ 10, 1948న పారిస్‌లో ఐక్యరాజ్యసమితి సాధారణ సభ ద్వారా ప్రకటించబడిన ఒక మైలురాయి పత్రం."
  },
  {
    "id": 254,
    "question": "The land boundary of India and the total length of the coastline of the mainland including Andaman & Nicobar Islands and Lakshadweep is (TSTET 12 Jan 2025)\nభారతదేశం యొక్క భూ సరిహద్దు మరియు అండమాన్ & నికోబార్ దీవులు మరియు లక్షద్వీప్‌లతో సహా ప్రధాన భూభాగం యొక్క తీరరేఖ మొత్తం పొడవు",
    "options": [
      "25,425 kms and 6,000 kms",
      "15,200 kms and 7,516 kms",
      "15,750 kms and 7,516 kms",
      "5,250 kms and 7,516 kms"
    ],
    "correctAnswer": 1,
    "explanation": "భారతదేశం సుమారు 15,200 కి.మీ.ల మొత్తం భూ సరిహద్దును కలిగి ఉంది. ప్రధాన భూభాగంతో పాటు అండమాన్ & నికోబార్ మరియు లక్షద్వీప్ దీవుల భూభాగాలను కలుపుకొని మొత్తం తీరరేఖ పొడవు 7,516.6 కి.మీ."
  },
  {
    "id": 255,
    "question": "In India, these forests are found abundantly in the Himalayan Mountains (TSTET 12 Jan 2025)\nభారతదేశంలో, హిమాలయ పర్వతాలలో ఈ అడవులు సమృద్ధిగా కనిపిస్తాయి",
    "options": [
      "Tropical Deciduous forests\nఉష్ణమండల ఆకురాల్చే అడవులు",
      "Mediterranean Vegetation\nమధ్యధరా వృక్షసంపద",
      "Temperate Deciduous forests\nసమశీతోష్ణ ఆకురాల్చే అడవులు",
      "Coniferous forests\nశృంగాకార అడవులు"
    ],
    "correctAnswer": 3,
    "explanation": "శృంగాకార అడవులు, వీటిని పర్వత ప్రాంత అడవులు అని కూడా అంటారు, ఇవి హిమాలయాలలోని అధిక ఎత్తైన ప్రదేశాల లక్షణం. ఈ అడవులలో పైన్, దేవదారు, ఫిర్ మరియు స్ప్రూస్ వంటి శీతల వాతావరణానికి అనుగుణంగా ఉండే శంఖాకార చెట్లు ఎక్కువగా ఉంటాయి."
  },
  {
    "id": 256,
    "question": "This tax is levied on the production of goods and sale of services (TSTET 12 Jan 2025)\nఈ పన్ను వస్తువుల ఉత్పత్తి మరియు సేవల అమ్మకంపై విధించబడుతుంది",
    "options": [
      "Corporate Tax\nకార్పొరేట్ పన్ను",
      "Customs Duty\nకస్టమ్స్ డ్యూటీ",
      "Goods and Service Tax\nవస్తువులు మరియు సేవల పన్ను",
      "Octroi Tax\nఆక్ట్రాయ్ పన్ను"
    ],
    "correctAnswer": 2,
    "explanation": "వస్తువులు మరియు సేవల పన్ను (GST) అనేది వస్తువులు మరియు సేవల సరఫరాపై విధించే ఒక సమగ్ర పరోక్ష పన్ను. ఇది ఉత్పత్తిపై (ఎక్సైజ్ డ్యూటీ వంటివి) మరియు సేవల అమ్మకంపై (సర్వీస్ టాక్స్ వంటివి) ఉన్న అనేక ఇతర పరోక్ష పన్నులను భర్తీ చేసింది."
  },
  {
    "id": 257,
    "question": "The banks primarily use the majority of their deposits for (TSTET 12 Jan 2025)\nబ్యాంకులు ప్రాథమికంగా తమ డిపాజిట్లలో అధిక భాగాన్ని దీని కోసం ఉపయోగిస్తాయి",
    "options": [
      "paying interest to depositors\nడిపాజిటర్లకు వడ్డీ చెల్లించడం",
      "purchasing lands in real estate\nరియల్ ఎస్టేట్‌లో భూములు కొనడం",
      "extending loans to the needy\nఅవసరమైన వారికి రుణాలు ఇవ్వడం",
      "maintaining cash reserves\nనగదు నిల్వలను నిర్వహించడం"
    ],
    "correctAnswer": 2,
    "explanation": "వాణిజ్య బ్యాంకు యొక్క ప్రధాన విధి ఆర్థిక మధ్యవర్తిత్వం. అవి ప్రజల నుండి డిపాజిట్లను అంగీకరించి, ఈ నిధులలో అధిక భాగాన్ని వ్యక్తులకు మరియు వ్యాపారాలకు రుణాలు అందించడానికి ఉపయోగిస్తాయి, తద్వారా ఆర్థిక కార్యకలాపాలను సులభతరం చేస్తాయి."
  },
  {
    "id": 258,
    "question": "Which of the following statements best describes the term the \"Price Index\"? (TSTET 12 Jan 2025)\n\"ధరల సూచిక\" అనే పదాన్ని ఈ క్రింది ప్రకటనలలో ఏది ఉత్తమంగా వివరిస్తుంది?",
    "options": [
      "It compares the quality of different goods\nఇది వివిధ వస్తువుల నాణ్యతను పోలుస్తుంది",
      "It predicts future prices of goods\nఇది వస్తువుల భవిష్యత్తు ధరలను అంచనా వేస్తుంది",
      "It determines the exact price of a single good\nఇది ఒకే వస్తువు యొక్క ఖచ్చితమైన ధరను నిర్ధారిస్తుంది",
      "It measures the overall change in prices of goods over time\nఇది కాలక్రమేణా వస్తువుల ధరలలో మొత్తం మార్పును కొలుస్తుంది"
    ],
    "correctAnswer": 3,
    "explanation": "ధరల సూచిక అనేది ఒక నిర్దిష్ట వస్తువులు మరియు సేవల సమూహం యొక్క మొత్తం ధరల స్థాయి కాలక్రమేణా ఎలా మారుతుందో పోల్చడానికి సహాయపడే ఒక గణాంక కొలమానం. ఇది ద్రవ్యోల్బణానికి కీలక సూచిక."
  },
  {
    "id": 259,
    "question": "Which of the following statement correctly describes the phrase \"the Black Money\"? (TSTET 12 Jan 2025)\nఈ క్రింది వాటిలో ఏ వాక్యం \"నల్ల ధనం\" అనే పదాన్ని సరిగ్గా వివరిస్తుంది?",
    "options": [
      "Money earned through legal and illegal means\nచట్టబద్ధమైన మరియు చట్టవిరుద్ధమైన మార్గాల ద్వారా సంపాదించిన డబ్బు",
      "Money deposited in foreign banks legally\nవిదేశీ బ్యాంకులలో చట్టబద్ధంగా జమ చేసిన డబ్బు",
      "Money received from government welfare programs\nప్రభుత్వ సంక్షేమ కార్యక్రమాల నుండి పొందిన డబ్బు",
      "Money generated from illegal or income unreported\nచట్టవిరుద్ధంగా లేదా ఆదాయాన్ని నివేదించకుండా సంపాదించిన డబ్బు"
    ],
    "correctAnswer": 3,
    "explanation": "\"నల్ల ధనం\" అనేది పూర్తిగా చట్టబద్ధం కాని నిధులను సూచిస్తుంది. ఇందులో చట్టవిరుద్ధ కార్యకలాపాల ద్వారా సంపాదించిన డబ్బు లేదా పన్ను అధికారుల నుండి దాచిపెట్టి, నివేదించబడని ఆదాయం ఉంటుంది."
  },
  {
    "id": 260,
    "question": "Which of the following districts of Telangana are located in the Lower Telangana Plateau? (TSTET 12 Jan 2025)\nఈ క్రింది తెలంగాణ జిల్లాలలో ఏవి దిగువ తెలంగాణ పీఠభూమిలో ఉన్నాయి?",
    "options": [
      "Mahabubabad, Warangal, Khammam\nమహబూబాబాద్, వరంగల్, ఖమ్మం",
      "Vikarabad, Narayanpet, Rangareddy\nవికారాబాద్, నారాయణపేట, రంగారెడ్డి",
      "Medak, Sangareddy, Nizamabad\nమెదక్, సంగారెడ్డి, నిజామాబాద్",
      "Medak, Siddipet, Kamareddy\nమెదక్, సిద్దిపేట, కామారెడ్డి"
    ],
    "correctAnswer": 0,
    "explanation": "తెలంగాణ పీఠభూమి స్థూలంగా ఎత్తైన పశ్చిమ భాగం మరియు దిగువ తూర్పు భాగంగా విభజించబడింది. మహబూబాబాద్, వరంగల్ మరియు ఖమ్మం జిల్లాలు తూర్పు భాగంలో ఉన్నాయి, ఇది దిగువ తెలంగాణ పీఠభూమికి అనుగుణంగా ఉంటుంది."
  },
  {
    "id": 261,
    "question": "Since independence, the share of Service Sector activities in GDP in India is (TSTET 12 Jan 2025)\nస్వాతంత్ర్యం వచ్చినప్పటి నుండి, భారతదేశంలో GDPలో సేవా రంగ కార్యకలాపాల వాటా",
    "options": [
      "It has not changed\nఇది మారలేదు",
      "It has decreased significantly\nఇది గణనీయంగా తగ్గింది",
      "It has become less important than agriculture\nఇది వ్యవసాయం కంటే తక్కువ ప్రాముఖ్యత సంతరించుకుంది",
      "There has been a tremendous increase\nఅపారమైన పెరుగుదల ఉంది"
    ],
    "correctAnswer": 3,
    "explanation": "భారతదేశానికి స్వాతంత్ర్యం వచ్చినప్పటి నుండి, ముఖ్యంగా 1990ల ఆర్థిక సంస్కరణల తర్వాత, దేశ స్థూల జాతీయోత్పత్తి (GDP)కి సేవా రంగం యొక్క సహకారం అపారంగా పెరిగింది. ఇది ఇప్పుడు భారత ఆర్థిక వ్యవస్థలో అతిపెద్ద రంగం."
  },
  {
    "id": 262,
    "question": "Identify the Non - ferrous metals from among the following (TSTET 12 Jan 2025)\nకింది వాటిలో ఫెర్రస్-కాని లోహాలను గుర్తించండి",
    "options": [
      "Bauxite, tin, Copper\nబాక్సైట్, తగరం, రాగి",
      "Manganese, Nickel, Cobalt\nమాంగనీస్, నికెల్, కోబాల్ట్",
      "Cobalt, Aluminium, Nickel\nకోబాల్ట్, అల్యూమినియం, నికెల్",
      "Mica, Gold, Manganese\nమైకా, బంగారం, మాంగనీస్"
    ],
    "correctAnswer": 0,
    "explanation": "ఫెర్రస్-కాని లోహాలు అంటే గణనీయమైన పరిమాణంలో ఇనుమును కలిగి ఉండనివి. బాక్సైట్ (అల్యూమినియం యొక్క ధాతువు), తగరం మరియు రాగి ఫెర్రస్-కాని లోహాలకు ఉదాహరణలు. మాంగనీస్, నికెల్ మరియు కోబాల్ట్ ఫెర్రస్ లోహాలు."
  },
  {
    "id": 263,
    "question": "If the average price of goods in the base year is set at 100, then the Price Index of 125 indicates that (TSTET 12 Jan 2025)\nఆధార సంవత్సరంలో వస్తువుల సగటు ధర 100గా నిర్ధారించబడితే, 125 ధరల సూచిక దేనిని సూచిస్తుంది",
    "options": [
      "Prices have been doubled\nధరలు రెట్టింపు అయ్యాయి",
      "Prices have remained the same\nధరలు అలాగే ఉన్నాయి",
      "Prices have increased by 25%\nధరలు 25% పెరిగాయి",
      "Prices have decreased by 25%\nధరలు 25% తగ్గాయి"
    ],
    "correctAnswer": 2,
    "explanation": "ధరల సూచిక ఆధార కాలం నుండి శాతం మార్పును కొలుస్తుంది, ఇది 100 సూచిక విలువ వద్ద సెట్ చేయబడింది. అందువల్ల, 125 సూచిక విలువ 100 ఆధారం నుండి 25 పాయింట్ల పెరుగుదలను సూచిస్తుంది, ఇది ధరలలో 25% పెరుగుదలకు అనువదిస్తుంది."
  },
  {
    "id": 264,
    "question": "Which of the following statement best describes the Phrase \"Mean years of Schooling\"? (TSTET 12 Jan 2025)\nకింది వాటిలో ఏ వాక్యం \"సగటు పాఠశాల సంవత్సరాలు\" అనే పదాన్ని ఉత్తమంగా వివరిస్తుంది?",
    "options": [
      "The average number of completed years of education of a country's population aged 25 years and above\nఒక దేశ జనాభాలో 25 సంవత్సరాలు మరియు అంతకంటే ఎక్కువ వయస్సు గల వారు పూర్తి చేసిన విద్య యొక్క సగటు సంవత్సరాల సంఖ్య",
      "The average number of school going children in the age group of 6 to 14 years\n6 నుండి 14 సంవత్సరాల వయస్సు గల పాఠశాలకు వెళ్లే పిల్లల సగటు సంఖ్య",
      "The number of children in the age group of 6 to 14 years who have completed elementary school\n6 నుండి 14 సంవత్సరాల వయస్సులో ప్రాథమిక పాఠశాల పూర్తి చేసిన పిల్లల సంఖ్య",
      "The average number of children who reached secondary school on completion of primary education\nప్రాథమిక విద్యను పూర్తి చేసి మాధ్యమిక పాఠశాలకు చేరుకున్న పిల్లల సగటు సంఖ్య"
    ],
    "correctAnswer": 0,
    "explanation": "'సగటు పాఠశాల సంవత్సరాలు' అనేది మానవ అభివృద్ధి సూచిక (HDI)లో ఉపయోగించే ఒక నిర్దిష్ట సామాజిక సూచిక. ఇది ఒక దేశంలో 25 ఏళ్లు మరియు అంతకంటే ఎక్కువ వయస్సు ఉన్న వ్యక్తులు పొందిన సగటు విద్యా సంవత్సరాలను సూచిస్తుంది."
  },
  {
    "id": 265,
    "question": "\"Disguised unemployment\" means (TSTET 12 Jan 2025)\n\"ప్రచ్ఛన్న నిరుద్యోగం\" అనగా",
    "options": [
      "Engaging less number of people than required\nఅవసరమైన దానికంటే తక్కువ మందిని నియమించడం",
      "Engaging more number of people than required\nఅవసరమైన దానికంటే ఎక్కువ మందిని నియమించడం",
      "Paying less than the actual amount\nవాస్తవ మొత్తం కంటే తక్కువ చెల్లించడం",
      "Paying more than the actual amount\nవాస్తవ మొత్తం కంటే ఎక్కువ చెల్లించడం"
    ],
    "correctAnswer": 1,
    "explanation": "వాస్తవంగా అవసరమైన దానికంటే ఎక్కువ మంది ఉద్యోగంలో నిమగ్నమై ఉన్నప్పుడు ప్రచ్ఛన్న నిరుద్యోగం ఏర్పడుతుంది. అదనపు శ్రామికుల ఉపాంత ఉత్పాదకత సున్నా, అంటే కొంతమంది కార్మికులను తొలగించినా, మొత్తం ఉత్పత్తి తగ్గదు. అభివృద్ధి చెందుతున్న దేశాల వ్యవసాయ రంగంలో ఇది సర్వసాధారణం."
  },
  {
    "id": 266,
    "question": "In India, this act provides penalties for preventing a person from entering a place of worship or from taking water from a tank or well (TSTET 12 Jan 2025)\nభారతదేశంలో, ఒక వ్యక్తిని ప్రార్థనా స్థలంలోకి ప్రవేశించకుండా లేదా ట్యాంక్ లేదా బావి నుండి నీరు తీసుకోకుండా నిరోధించినందుకు ఈ చట్టం జరిమానాలను అందిస్తుంది",
    "options": [
      "The protection of Civil Rights Act, 1955\nపౌర హక్కుల పరిరక్షణ చట్టం, 1955",
      "The Enabling Act, 1933\nది ఎనేబ్లింగ్ యాక్ట్, 1933",
      "The Protection of Human Rights Act, 1993\nమానవ హక్కుల పరిరక్షణ చట్టం, 1993",
      "The protection of Civil Rights Act, 1951\nపౌర హక్కుల పరిరక్షణ చట్టం, 1951"
    ],
    "correctAnswer": 0,
    "explanation": "పౌర హక్కుల పరిరక్షణ చట్టం, 1955, అంటరానితనం నిర్మూలనను (రాజ్యాంగంలోని ఆర్టికల్ 17 ప్రకారం) అమలు చేయడం లక్ష్యంగా పెట్టుకుంది. ఇది బహిరంగ ప్రార్థనా స్థలాలు, దుకాణాలు మరియు నీటి వనరులకు ప్రవేశాన్ని నిరోధించడం వంటి అశక్తతలను అమలు చేసినందుకు జరిమానాలను నిర్దేశిస్తుంది."
  },
  {
    "id": 267,
    "question": "Identify the federal feature of the Indian Constitution from among the following (TSTET 12 Jan 2025)\nకింది వాటిలో భారత రాజ్యాంగం యొక్క సమాఖ్య లక్షణాన్ని గుర్తించండి",
    "options": [
      "Representation of states in the upper chamber of Union Legislature\nకేంద్ర శాసనసభ ఎగువ సభలో రాష్ట్రాల ప్రాతినిధ్యం",
      "Single integrated Judiciary\nఏకీకృత న్యాయవ్యవస్థ",
      "Role of All India Services personnel in the Administration of states\nరాష్ట్రాల పరిపాలనలో అఖిల భారత సర్వీసుల సిబ్బంది పాత్ర",
      "Governors acting as the agents of Union Government\nకేంద్ర ప్రభుత్వ ఏజెంట్లుగా వ్యవహరిస్తున్న గవర్నర్లు"
    ],
    "correctAnswer": 0,
    "explanation": "సమాఖ్య వ్యవస్థ యొక్క ముఖ్య లక్షణం కేంద్ర శాసనసభలో రాజ్యాంగ రాష్ట్రాలకు ప్రాతినిధ్యం వహించడం. భారతదేశంలో, రాజ్యసభ (రాష్ట్రాల మండలి) అనేది ఎగువ సభ, ఇక్కడ రాష్ట్రాలకు ప్రాతినిధ్యం కల్పించబడుతుంది, ఈ సమాఖ్య సూత్రాన్ని సమర్థిస్తుంది. ఇతర ఎంపికలు ఏకకేంద్ర (సమాఖ్య-కాని) లక్షణాలకు ఉదాహరణలు."
  },
  {
    "id": 268,
    "question": "Among the following, the statement that correctly describes the term \"Universal Adult Franchise\" (TSTET 12 Jan 2025)\nకింది వాటిలో, \"సార్వత్రిక వయోజన ఓటుహక్కు\" అనే పదాన్ని సరిగ్గా వివరించే వాక్యం",
    "options": [
      "Provision of the right to vote to all women without any discrimination only\nఎలాంటి వివక్ష లేకుండా మహిళలందరికీ మాత్రమే ఓటు హక్కు కల్పించడం",
      "Provision of the right to vote to all the citizens irrespective of age limit\nవయోపరిమితితో సంబంధం లేకుండా పౌరులందరికీ ఓటు హక్కు కల్పించడం",
      "Provision of the right to vote to all the citizens who attained the age of 18 years without any discrimination\n18 సంవత్సరాల వయస్సు నిండిన పౌరులందరికీ ఎలాంటి వివక్ష లేకుండా ఓటు హక్కు కల్పించడం",
      "Provision of the right to vote only to educated citizens in the country without any discrimination\nదేశంలోని విద్యావంతులైన పౌరులకు మాత్రమే ఎలాంటి వివక్ష లేకుండా ఓటు హక్కు కల్పించడం"
    ],
    "correctAnswer": 2,
    "explanation": "సార్వత్రిక వయోజన ఓటుహక్కు అంటే, వయోజన పౌరులందరూ ఒక నిర్దిష్ట వయస్సు (భారతదేశంలో 18) వచ్చిన తర్వాత, కులం, మతం, జాతి, లింగం లేదా ఆర్థిక స్థితి ఆధారంగా ఎలాంటి వివక్ష లేకుండా ఎన్నికలలో ఓటు వేసే హక్కును కలిగి ఉంటారు."
  },
  {
    "id": 269,
    "question": "As per the Immoral Trafficking (Prevention) Act, 1956 and the Amendment Act, 2006, the punishment for involving in Human Immoral Trafficking was (TSTET 12 Jan 2025)\nఅనైతిక అక్రమ రవాణా (నివారణ) చట్టం, 1956 మరియు సవరణ చట్టం, 2006 ప్రకారం, మానవ అనైతిక అక్రమ రవాణాలో పాల్గొన్నందుకు శిక్ష",
    "options": [
      "Seven-years rigorous imprisonment to life along with penalty\nజరిమానాతో పాటు ఏడేళ్ల కఠిన కారాగార శిక్ష నుండి జీవిత ఖైదు వరకు",
      "Two- years rigorous imprisonment along with penalty of 1.0 lakh\nరూ. 1.0 లక్ష జరిమానాతో పాటు రెండేళ్ల కఠిన కారాగార శిక్ష",
      "Five- years rigorous imprisonment to life along with penalty of 25.0 lakhs\nరూ. 25.0 లక్షల జరిమానాతో పాటు ఐదేళ్ల కఠిన కారాగార శిక్ష నుండి జీవిత ఖైదు వరకు",
      "One- year rigorous imprisonment only\nఒక సంవత్సరం కఠిన కారాగార శిక్ష మాత్రమే"
    ],
    "correctAnswer": 0,
    "explanation": "అనైతిక అక్రమ రవాణా (నివారణ) చట్టం, 1956, మరియు దాని సవరణలు కఠినమైన శిక్షలను నిర్దేశిస్తాయి. ఒక వ్యక్తిని అక్రమ రవాణా చేసినందుకు, శిక్షలో ఏడేళ్లకు తగ్గకుండా కఠిన కారాగార శిక్ష ఉంటుంది, దీనిని జీవిత ఖైదు వరకు పొడిగించవచ్చు, దానితో పాటు గణనీయమైన జరిమానా కూడా ఉంటుంది."
  },
  {
    "id": 270,
    "question": "Which of the following activity comes under the violation of Fundamental Rights? (TSTET 12 Jan 2025)\nకింది వాటిలో ఏ చర్య ప్రాథమిక హక్కుల ఉల్లంఘన కిందకు వస్తుంది?",
    "options": [
      "Arresting the person and informing the grounds for his arrest\nవ్యక్తిని అరెస్టు చేసి, అతని అరెస్టుకు గల కారణాలను తెలియజేయడం",
      "Allowing the person to reside and settle in any part of the territory of India\nభారతదేశ భూభాగంలో ఏ ప్రాంతంలోనైనా నివసించడానికి మరియు స్థిరపడటానికి వ్యక్తిని అనుమతించడం",
      "Allowing the citizens to express their views in many ways such as through meetings, publications etc.\nపౌరులు తమ అభిప్రాయాలను సమావేశాలు, ప్రచురణలు మొదలైన అనేక మార్గాల ద్వారా వ్యక్తీకరించడానికి అనుమతించడం.",
      "Employing the child below the age of 14 years in the factory to work\n14 సంవత్సరాల కంటే తక్కువ వయస్సు ఉన్న పిల్లలను ఫ్యాక్టరీలో పనిలో నియమించడం"
    ],
    "correctAnswer": 3,
    "explanation": "భారత రాజ్యాంగంలోని ఆర్టికల్ 24, ఇది దోపిడీకి వ్యతిరేకంగా ఉన్న ప్రాథమిక హక్కులో భాగం, ఫ్యాక్టరీలు, గనులు లేదా ఏదైనా ఇతర ప్రమాదకరమైన వృత్తులలో 14 సంవత్సరాల కంటే తక్కువ వయస్సు ఉన్న పిల్లలను నియమించడాన్ని స్పష్టంగా నిషేధిస్తుంది. ఇది పిల్లల ప్రాథమిక హక్కులను ప్రత్యక్షంగా ఉల్లంఘించడమే."
  },
  {
    "id": 271,
    "question": "On 1st November, 1996 Telangana Vidroha Dinam was observed in Warangal by a group of intellectuals headed by (TSTET 12 Jan 2025)\n1 నవంబర్, 1996న వరంగల్‌లో తెలంగాణ విద్రోహ దినంను ఎవరి నేతృత్వంలోని మేధావుల బృందం పాటించింది",
    "options": [
      "Prof. Kodandaram\nప్రొ. కోదండరాం",
      "Prof. Jayashankar\nప్రొ. జయశంకర్",
      "K. Chandrashekar Rao\nకె. చంద్రశేఖర రావు",
      "Marri Chenna Reddy\nమర్రి చెన్నారెడ్డి"
    ],
    "correctAnswer": 1,
    "explanation": "ప్రత్యేక తెలంగాణ ఉద్యమ కీలక సిద్ధాంతకర్త అయిన ప్రొఫెసర్ కె. జయశంకర్, 1996లో వరంగల్‌లో నవంబర్ 1వ తేదీని (ఆంధ్రప్రదేశ్ అవతరణ దినోత్సవం) 'తెలంగాణ విద్రోహ దినం' లేదా 'తెలంగాణ ద్రోహ దినం'గా పాటించడానికి మేధావుల బృందానికి నాయకత్వం వహించారు. ఈ ప్రాంతానికి జరిగిన అన్యాయాలను నిరసించడం దీని ఉద్దేశ్యం."
  },
  {
    "id": 272,
    "question": "Under this writ, the court orders a lower court to transfer a matter pending before it to the higher court (TSTET 12 Jan 2025)\nఈ రిట్ కింద, న్యాయస్థానం తన ముందు పెండింగ్‌లో ఉన్న ఒక విషయాన్ని ఉన్నత న్యాయస్థానానికి బదిలీ చేయమని దిగువ న్యాయస్థానాన్ని ఆదేశిస్తుంది",
    "options": [
      "Habeas Corpus\nహేబియస్ కార్పస్",
      "Mandamus\nమాండమస్",
      "Prohibition\nప్రొహిబిషన్",
      "Certiorari\nసెర్షియోరారీ"
    ],
    "correctAnswer": 3,
    "explanation": "సెర్షియోరారీ రిట్‌ను ఉన్నత న్యాయస్థానం దిగువ న్యాయస్థానానికి లేదా ట్రిబ్యునల్‌కు జారీ చేస్తుంది. ఇది ఇప్పటికే దిగువ న్యాయస్థానం జారీ చేసిన ఉత్తర్వును రద్దు చేయడానికి లేదా పెండింగ్‌లో ఉన్న కేసును దిగువ న్యాయస్థానం నుండి ఉన్నత న్యాయస్థానానికి బదిలీ చేయడానికి ఉపయోగించబడుతుంది."
  },
  {
    "id": 273,
    "question": "As per this, 'it shall be the duty of every citizen of India to maintain the unity and integrity of India' (TSTET 12 Jan 2025)\nదీని ప్రకారం, 'భారతదేశం యొక్క ఐక్యత మరియు సమగ్రతను కాపాడటం ప్రతి భారత పౌరుడి విధి'",
    "options": [
      "Directive Principle of the State Policy\nరాష్ట్ర విధాన నిర్దేశక సూత్రం",
      "Fundamental Right\nప్రాథమిక హక్కు",
      "Fundamental Duty\nప్రాథమిక విధి",
      "Moral Right\nనైతిక హక్కు"
    ],
    "correctAnswer": 2,
    "explanation": "ఈ వాక్యం భారత రాజ్యాంగంలోని ఆర్టికల్ 51-Aలో పొందుపరచబడిన ప్రాథమిక విధులలో భాగం. ప్రత్యేకంగా, ఆర్టికల్ 51-A(c) 'భారతదేశ సార్వభౌమాధికారాన్ని, ఐక్యతను మరియు సమగ్రతను సమర్థించడం మరియు పరిరక్షించడం' ప్రతి పౌరుడి విధి అని పేర్కొంది."
  },
  {
    "id": 274,
    "question": "The permanent seat of the United Nations Security Council held by this government has been given to China (TSTET 12 Jan 2025)\nఈ ప్రభుత్వం నిర్వహించిన ఐక్యరాజ్యసమితి భద్రతా మండలి యొక్క శాశ్వత స్థానం చైనాకు ఇవ్వబడింది",
    "options": [
      "Chiang Kai Shek Government\nచియాంగ్ కై షేక్ ప్రభుత్వం",
      "Sun Yet Sen Government\nసన్ యత్ సేన్ ప్రభుత్వం",
      "Mao Government\nమావో ప్రభుత్వం",
      "Manchu Dynasty\nమంచూ రాజవంశం"
    ],
    "correctAnswer": 0,
    "explanation": "చియాంగ్ కై-షేక్ ప్రభుత్వం కింద ఉన్న రిపబ్లిక్ ఆఫ్ చైనా (ROC), UN వ్యవస్థాపక సభ్యుడు మరియు భద్రతా మండలిలో శాశ్వత స్థానాన్ని కలిగి ఉంది. 1971లో, UN సాధారణ సభ తీర్మానం 2758 ఈ స్థానాన్ని పీపుల్స్ రిపబ్లిక్ ఆఫ్ చైనా (PRC)కి బదిలీ చేసింది."
  },
  {
    "id": 275,
    "question": "One of the following was the member of State's Reorganisation Commission, 1953 (TSTET 12 Jan 2025)\nకింది వారిలో ఒకరు 1953 నాటి రాష్ట్రాల పునర్వ్యవస్థీకరణ కమిషన్ సభ్యుడు",
    "options": [
      "Hriday Nath Kunzru\nహృదయ్ నాథ్ కుంజ్రు",
      "Prof. Ranbir Singh\nప్రొ. రణబీర్ సింగ్",
      "Dr. Abusaleh Sharief\nడా. అబుసలేహ్ షరీఫ్",
      "Vinod K Duggal\nవినోద్ కె దుగ్గల్"
    ],
    "correctAnswer": 0,
    "explanation": "1953లో ఏర్పడిన రాష్ట్రాల పునర్వ్యవస్థీకరణ కమిషన్‌లో ముగ్గురు సభ్యులు ఉన్నారు: ఫజల్ అలీ ఛైర్మన్‌గా, మరియు కె. ఎం. పనిక్కర్ మరియు హృదయ్ నాథ్ కుంజ్రు మిగతా ఇద్దరు సభ్యులు."
  },
  {
    "id": 276,
    "question": "In India, the maximum number of ministers allowed in the Union Council of Ministers (TSTET 12 Jan 2025)\nభారతదేశంలో, కేంద్ర మంత్రి మండలిలో అనుమతించబడిన గరిష్ట మంత్రుల సంఖ్య",
    "options": [
      "20% of Lok Sabha members\nలోక్‌సభ సభ్యులలో 20%",
      "20% of the members of Lok Sabha and Rajya Sabha\nలోక్‌సభ మరియు రాజ్యసభ సభ్యులలో 20%",
      "15% of Lok Sabha members\nలోక్‌సభ సభ్యులలో 15%",
      "15% of the members of Lok Sabha and Rajya Sabha\nలోక్‌సభ మరియు రాజ్యసభ సభ్యులలో 15%"
    ],
    "correctAnswer": 2,
    "explanation": "2003 నాటి 91వ రాజ్యాంగ సవరణ చట్టం ప్రకారం, కేంద్ర మంత్రి మండలిలో ప్రధానమంత్రితో సహా మొత్తం మంత్రుల సంఖ్య లోక్‌సభ మొత్తం సభ్యుల సంఖ్యలో 15% మించకూడదు."
  },
  {
    "id": 277,
    "question": "\"Amitraghata\" was the title of this Mauryan ruler (TSTET 12 Jan 2025)\n\"అమిత్రఘాత\" ఈ మౌర్య పాలకుడి బిరుదు",
    "options": [
      "Chandragupta Maurya\nచంద్రగుప్త మౌర్యుడు",
      "Ashoka\nఅశోకుడు",
      "Bindusara\nబిందుసారుడు",
      "Samprati\nసంప్రతి"
    ],
    "correctAnswer": 2,
    "explanation": "చంద్రగుప్త మౌర్యుని కుమారుడు మరియు రెండవ మౌర్య చక్రవర్తి అయిన బిందుసారుడు 'అమిత్రఘాత' అనే బిరుదుతో పిలువబడ్డాడు, దీనికి సంస్కృతంలో 'శత్రువులను సంహరించేవాడు' అని అర్థం. గ్రీకు ఆధారాలు అతనిని అమిత్రోక్రేట్స్ అని సూచిస్తాయి."
  },
  {
    "id": 278,
    "question": "King Dangadeva constructed the Khandariya Mahadeva Temple which was dedicated to Lord Shiva belonged to this dynasty (TSTET 12 Jan 2025)\nశివునికి అంకితం చేయబడిన కందరియా మహాదేవ ఆలయాన్ని నిర్మించిన రాజు ధంగదేవుడు ఈ రాజవంశానికి చెందినవాడు",
    "options": [
      "Gupta Dynasty\nగుప్త రాజవంశం",
      "Chola Dynasty\nచోళ రాజవంశం",
      "Pallava Dynasty\nపల్లవ రాజవంశం",
      "Chandela Dynasty\nచాందెలా రాజవంశం"
    ],
    "correctAnswer": 3,
    "explanation": "ఖజురహో సముదాయంలో ఉన్న కందరియా మహాదేవ ఆలయం, భారతీయ దేవాలయ వాస్తుశిల్పానికి ఒక అద్భుతమైన ఉదాహరణ. దీనిని సుమారు క్రీ.శ. 1030లో మధ్య భారతదేశాన్ని పాలించిన చాందెలా రాజవంశానికి చెందిన రాజు ధంగదేవుడు నిర్మించాడు."
  },
  {
    "id": 279,
    "question": "This Act of the British Government curbed fundamental Rights such as the freedom of expression and strengthened police powers (TSTET 12 Jan 2025)\nబ్రిటిష్ ప్రభుత్వానికి చెందిన ఈ చట్టం భావప్రకటనా స్వేచ్ఛ వంటి ప్రాథమిక హక్కులను అరికట్టి, పోలీసు అధికారాలను బలోపేతం చేసింది",
    "options": [
      "Rowlatt Act of 1919\nరౌలట్ చట్టం, 1919",
      "Ilbert Bill, 1883\nఇల్బర్ట్ బిల్, 1883",
      "Govt of India Act, 1833\nభారత ప్రభుత్వ చట్టం, 1833",
      "Regulating Act of 1773\nనియంత్రణ చట్టం, 1773"
    ],
    "correctAnswer": 0,
    "explanation": "1919 నాటి రౌలట్ చట్టం బ్రిటిష్ వలస ప్రభుత్వానికి రాజకీయ కార్యకలాపాలను అణచివేయడానికి విస్తృత అధికారాలను ఇచ్చింది. ఇది రాజకీయ ఖైదీలను విచారణ లేకుండా రెండేళ్ల వరకు నిర్బంధించడానికి అనుమతించింది మరియు భావప్రకటనా స్వేచ్ఛతో సహా పౌర స్వేచ్ఛలను తీవ్రంగా పరిమితం చేసింది."
  },
  {
    "id": 280,
    "question": "Which of the following statement rightly describes the term \"Secularism\" (TSTET 12 Jan 2025)\nకింది వాటిలో ఏ వాక్యం \"లౌకికవాదం\" అనే పదాన్ని సరిగ్గా వివరిస్తుంది",
    "options": [
      "The state is one that does not confer any privilege or favour on any particular religion\nరాజ్యం ఏ ప్రత్యేక మతానికి ఎలాంటి ప్రత్యేక హక్కును లేదా అనుకూలతను ఇవ్వదు",
      "The state which accepts a particular religion as their state religion\nఒక నిర్దిష్ట మతాన్ని తమ రాజ్య మతంగా అంగీకరించే రాష్ట్రం",
      "The state which does not allow any religion in their state\nతమ రాష్ట్రంలో ఏ మతాన్ని అనుమతించని రాష్ట్రం",
      "The state which accepts all the religions as their state religions\nఅన్ని మతాలను తమ రాజ్య మతాలుగా అంగీకరించే రాష్ట్రం"
    ],
    "correctAnswer": 0,
    "explanation": "లౌకికవాదం అంటే మత విషయాలలో రాష్ట్రం తటస్థంగా ఉండాలి. ఒక లౌకిక రాజ్యానికి అధికారిక మతం ఉండదు, అన్ని మతాలను సమానంగా పరిగణిస్తుంది మరియు ఏ ప్రత్యేక విశ్వాసానికి ఎలాంటి ప్రత్యేక హక్కులు లేదా అనుకూలతలను ఇవ్వదు."
  },
  {
    "id": 281,
    "question": "In Cave 15 of Ellora, the picture showing Vishnu as Narasimha, the Man Lion' was the work of this period (TSTET 12 Jan 2025)\nఎల్లోరాలోని 15వ గుహలో, విష్ణువును నరసింహుడిగా, అంటే మనిషి-సింహంగా చూపే చిత్రం ఈ కాలం నాటి పని",
    "options": [
      "Pallavas\nపల్లవులు",
      "Chahamanas\nచాహమానులు",
      "Chalukyas\nచాళుక్యులు",
      "Rashtrakutas\nరాష్ట్రకూటులు"
    ],
    "correctAnswer": 3,
    "explanation": "ఎల్లోరా గుహలలోని గుహ 15, దీనిని దశావతార గుహ అని కూడా అంటారు, ఇది రాష్ట్రకూటుల కాలం నాటిది. ఇందులో హిందూ పురాణాల నుండి అద్భుతమైన శిల్పాలు ఉన్నాయి, వాటిలో విష్ణువును నరసింహ (మనిషి-సింహం) అవతారంలో వర్ణించే ప్రసిద్ధ ఫలకం కూడా ఉంది."
  },
  {
    "id": 282,
    "question": "In the European History, the thought of the Early Modern Period' was dominated by the idea of (TSTET 12 Jan 2025)\nయూరోపియన్ చరిత్రలో, 'ఆధునిక యుగం ప్రారంభ కాలం' నాటి ఆలోచన ఈ భావనతో ఆధిపత్యం చెలాయించింది",
    "options": [
      "Human freedom and equality\nమానవ స్వేచ్ఛ మరియు సమానత్వం",
      "Nationalism and religious patriotism\nజాతీయవాదం మరియు మతపరమైన దేశభక్తి",
      "Patriotism and struggle for freedom\nదేశభక్తి మరియు స్వాతంత్ర్యం కోసం పోరాటం",
      "Development and unity of the nations\nదేశాల అభివృద్ధి మరియు ఐక్యత"
    ],
    "correctAnswer": 0,
    "explanation": "యూరప్‌లో ఆధునిక యుగం ప్రారంభ కాలం, ఇందులో పునరుజ్జీవనం, సంస్కరణ మరియు జ్ఞానోదయం ఉన్నాయి, ఆలోచనా విధానంలో తీవ్రమైన మార్పును చూసింది. ముఖ్యంగా జ్ఞానోదయం, హేతువు, వ్యక్తివాదం మరియు సహజ హక్కుల ఆలోచనలను సమర్థించింది, ఇది మానవ స్వేచ్ఛ మరియు సమానత్వంపై ప్రధాన దృష్టికి దారితీసింది."
  },
  {
    "id": 283,
    "question": "In the Declaration of American Independence, Thomas Jefferson declared that all the men are created equal and are endowed by the creator with certain rights which cannot be taken away. Those rights include (TSTET 12 Jan 2025)\nఅమెరికన్ స్వాతంత్ర్య ప్రకటనలో, థామస్ జెఫర్సన్ అందరు మనుషులు సమానంగా సృష్టించబడ్డారని మరియు సృష్టికర్తచే కొన్ని హక్కులతో ప్రసాదించబడ్డారని, వాటిని తీసివేయలేమని ప్రకటించారు. ఆ హక్కులలో ఇవి ఉన్నాయి",
    "options": [
      "Right to life, Liberty and freedom of opinion\nజీవించే హక్కు, స్వేచ్ఛ మరియు అభిప్రాయ స్వేచ్ఛ",
      "Right to life, freedom of speech and equality before law\nజీవించే హక్కు, వాక్ స్వాతంత్ర్యం మరియు చట్టం ముందు సమానత్వం",
      "Right to life, liberty and pursuit of happiness\nజీవించే హక్కు, స్వేచ్ఛ మరియు ఆనందాన్ని అనుసరించే హక్కు",
      "Right to life, pursuit of happiness and equality before law\nజీవించే హక్కు, ఆనందాన్ని అనుసరించే హక్కు మరియు చట్టం ముందు సమానత్వం"
    ],
    "correctAnswer": 2,
    "explanation": "యు.ఎస్. స్వాతంత్ర్య ప్రకటన నుండి ప్రసిద్ధ వాక్యం ఇలా ఉంది: \"ఈ సత్యాలు స్వయం-స్పష్టమైనవని మేము విశ్వసిస్తున్నాము, అందరు మనుషులు సమానంగా సృష్టించబడ్డారు, వారు వారి సృష్టికర్తచే కొన్ని విడదీయరాని హక్కులతో ప్రసాదించబడ్డారు, వాటిలో జీవించే హక్కు, స్వేచ్ఛ మరియు ఆనందాన్ని అనుసరించే హక్కు ఉన్నాయి.\""
  },
  {
    "id": 284,
    "question": "Ems telegram was associated with this war (TSTET 12 Jan 2025)\nఎమ్స్ టెలిగ్రామ్ ఈ యుద్ధంతో సంబంధం కలిగి ఉంది",
    "options": [
      "Prussia's war with Denmark\nడెన్మార్క్‌తో ప్రష్యా యుద్ధం",
      "Austro-Prussian war\nఆస్ట్రో-ప్రష్యన్ యుద్ధం",
      "Franco-Prussian war\nఫ్రాంకో-ప్రష్యన్ యుద్ధం",
      "Battle of Waterloo, 1815"
    ],
    "correctAnswer": 2,
    "explanation": "ఎమ్స్ డిస్పాచ్ (లేదా ఎమ్స్ టెలిగ్రామ్) అనేది ఫ్రాన్స్‌ను రెచ్చగొట్టడానికి ప్రష్యన్ మంత్రి ఒట్టో వాన్ బిస్మార్క్ సవరించిన సందేశం. దాని ప్రచురణ పారిస్‌లో ప్రజాభిప్రాయాన్ని మండించింది, దీనితో చక్రవర్తి నెపోలియన్ III ప్రష్యాపై యుద్ధం ప్రకటించాడు, తద్వారా 1870-71 నాటి ఫ్రాంకో-ప్రష్యన్ యుద్ధం ప్రారంభమైంది."
  },
  {
    "id": 285,
    "question": "According to this 'no European power would be allowed to build colonies in the American Continents and US will not interfere in the affairs of European colonies in the other continents' (TSTET 12 Jan 2025)\nదీని ప్రకారం, 'అమెరికా ఖండాలలో కాలనీలను నిర్మించడానికి ఏ యూరోపియన్ శక్తిని అనుమతించబడదు మరియు ఇతర ఖండాలలోని యూరోపియన్ కాలనీల వ్యవహారాలలో యుఎస్ జోక్యం చేసుకోదు'",
    "options": [
      "Marshall Law\nమార్షల్ లా",
      "Monroe Doctrine\nమన్రో సిద్ధాంతం",
      "The Eisenhower Doctrine\nది ఐసెన్‌హోవర్ సిద్ధాంతం",
      "The Truman Doctrine\nది ట్రూమాన్ సిద్ధాంతం"
    ],
    "correctAnswer": 1,
    "explanation": "ఈ విధానం 1823లో అధ్యక్షుడు జేమ్స్ మన్రోచే ప్రతిపాదించబడిన యు.ఎస్. విదేశాంగ విధానమైన మన్రో సిద్ధాంతానికి మూలస్తంభం. ఇది అమెరికాలో భవిష్యత్ వలసరాజ్యం లేదా జోక్యానికి వ్యతిరేకంగా యూరోపియన్ శక్తులను హెచ్చరించింది, మరియు ప్రతిఫలంగా, యూరోపియన్ వ్యవహారాలలో జోక్యం చేసుకోమని యు.ఎస్. ప్రతిజ్ఞ చేసింది."
  },
  {
    "id": 286,
    "question": "In 1869, king Leopold II of Belgium secretly sent this explorer to Congo region in Africa (TSTET 12 Jan 2025)\n1869లో, బెల్జియం రాజు లియోపోల్డ్ II ఆఫ్రికాలోని కాంగో ప్రాంతానికి ఈ అన్వేషకుడిని రహస్యంగా పంపాడు",
    "options": [
      "Stanley\nస్టాన్లీ",
      "Richard Burton\nరిచర్డ్ బర్టన్",
      "David Livingston\nడేవిడ్ లివింగ్‌స్టన్",
      "John Speke\nజాన్ స్పీక్"
    ],
    "correctAnswer": 0,
    "explanation": "బెల్జియం రాజు లియోపోల్డ్ II కాంగో ప్రాంతాన్ని అన్వేషించడానికి మరియు దానిపై తన అధికారాన్ని స్థాపించడానికి అన్వేషకుడు హెన్రీ మోర్టన్ స్టాన్లీని నియమించుకున్నాడు. ఒక దాతృత్వ మిషన్‌గా మారువేషంలో ఉన్న ఈ వెంచర్, లియోపోల్డ్ వ్యక్తిగత పాలనలో క్రూరమైన కాంగో ఫ్రీ స్టేట్ స్థాపనకు దారితీసింది."
  },
  {
    "id": 287,
    "question": "On 4th May, 1919, the people of china demonstrated in Beijing to protest against the decision of (TSTET 12 Jan 2025)\n4 మే, 1919న, చైనా ప్రజలు బీజింగ్‌లో దేని నిర్ణయానికి వ్యతిరేకంగా ప్రదర్శన చేశారు",
    "options": [
      "'Sun Yet Sen' regarding the programme of Action\n'సన్ యత్ సేన్' కార్యాచరణ కార్యక్రమం గురించి",
      "Decision of Sun yet Sen regarding overthrowing of Manchu Dynasty\nమంచూ రాజవంశాన్ని పడగొట్టడం గురించి సన్ యత్ సేన్ నిర్ణయం",
      "Versailles Peace Conference\nవెర్సైల్స్ శాంతి సమావేశం",
      "The regional military powers called 'war lords'\n'యుద్ధ ప్రభువులు' అని పిలువబడే ప్రాంతీయ సైనిక శక్తులు"
    ],
    "correctAnswer": 2,
    "explanation": "మే నాల్గవ ఉద్యమం వెర్సైల్స్ ఒప్పందానికి వ్యతిరేకంగా బీజింగ్‌లో విద్యార్థుల నేతృత్వంలోని నిరసన. ఈ ఒప్పందం షాన్డాంగ్ ప్రావిన్స్‌లోని జర్మన్ రాయితీలను చైనాకు తిరిగి ఇవ్వడానికి బదులుగా జపాన్‌కు బదిలీ చేసింది, ఇది మిత్రరాజ్యాల ద్వారా జరిగిన ద్రోహంగా భావించబడింది."
  },
  {
    "id": 288,
    "question": "Among the following, identify the correct statement regarding the 'Tennis Court Oath of 1789' in France (TSTET 12 Jan 2025)\nఫ్రాన్స్‌లోని '1789 నాటి టెన్నిస్ కోర్ట్ ప్రమాణం' గురించి కింద ఇవ్వబడిన వాటిలో సరైన వాక్యాన్ని గుర్తించండి",
    "options": [
      "The representatives of Third Estate declared themselves as a National Assembly\nమూడవ ఎస్టేట్ ప్రతినిధులు తమను తాము జాతీయ అసెంబ్లీగా ప్రకటించుకున్నారు",
      "The king Louis XVI promised to declare France as a Republican State\nరాజు లూయిస్ XVI ఫ్రాన్స్‌ను రిపబ్లికన్ రాజ్యంగా ప్రకటిస్తానని వాగ్దానం చేశాడు",
      "The king withdrew the special privileges enjoyed by the members of the First and Second Estate\nమొదటి మరియు రెండవ ఎస్టేట్ సభ్యులు అనుభవిస్తున్న ప్రత్యేక హక్కులను రాజు ఉపసంహరించుకున్నాడు",
      "The King Louis XVI promised to draft a new constitution for France\nరాజు లూయిస్ XVI ఫ్రాన్స్ కోసం కొత్త రాజ్యాంగాన్ని రూపొందిస్తానని వాగ్దానం చేశాడు"
    ],
    "correctAnswer": 0,
    "explanation": "టెన్నిస్ కోర్ట్ ప్రమాణం ఫ్రెంచ్ విప్లవంలో ఒక కీలకమైన క్షణం. మూడవ ఎస్టేట్ సభ్యులు, తమను తాము జాతీయ అసెంబ్లీగా ప్రకటించుకుని, ఫ్రాన్స్ కోసం ఒక రాజ్యాంగాన్ని రూపొందించే వరకు రద్దు కాబోమని ప్రమాణం చేశారు. ఈ చర్య రాచరికానికి వ్యతిరేకంగా వారి అధికారాన్ని ప్రత్యక్షంగా చాటుకుంది."
  },
  {
    "id": 289,
    "question": "By teaching social studies at secondary school level, the teacher can achieve these results A) Social learning B) Knowledge with experience C) Maladjustability and Rigidity D) Skills in selection E) Competence in tackling problems. Choose the correct answer: (TSTET 12 Jan 2025)\nమాధ్యమిక పాఠశాల స్థాయిలో సాంఘిక శాస్త్రాన్ని బోధించడం ద్వారా, ఉపాధ్యాయుడు ఈ ఫలితాలను సాధించగలడు A) సామాజిక అభ్యాసన B) అనుభవంతో కూడిన జ్ఞానం C) అసమయోజనం మరియు దృఢత్వం D) ఎంపికలో నైపుణ్యాలు E) సమస్యలను పరిష్కరించడంలో సామర్థ్యం. సరైన సమాధానాన్ని ఎంచుకోండి:",
    "options": [
      "A, B, C, D & E",
      "A, B, D & E only",
      "B, C, D & E only",
      "A, B, C & E only"
    ],
    "correctAnswer": 1,
    "explanation": "సాంఘిక శాస్త్ర విద్య యొక్క లక్ష్యాలలో సామాజిక అభ్యాసనాన్ని పెంపొందించడం (A), అనుభవం ద్వారా జ్ఞానాన్ని నిర్మించడం (B), సమాచారాన్ని ఎంచుకోవడంలో నైపుణ్యాలను అభివృద్ధి చేయడం (D), మరియు సమస్య-పరిష్కారంలో సామర్థ్యాన్ని పెంచడం (E) ఉన్నాయి. అసమయోజనం మరియు దృఢత్వం (C) అనేవి విద్య సాధించాల్సినవి కాకుండా, ఎదుర్కోవాల్సిన ప్రతికూల లక్షణాలు."
  },
  {
    "id": 290,
    "question": "The essential teaching and learning material for a social studies teacher is (TSTET 12 Jan 2025)\nసాంఘిక శాస్త్ర ఉపాధ్యాయునికి అవసరమైన బోధన మరియు అభ్యాసన సామగ్రి",
    "options": [
      "Calculator for solving problems\nసమస్యలను పరిష్కరించడానికి కాలిక్యులేటర్",
      "Dictionary for knowing the meanings for hardwords\nకఠినమైన పదాలకు అర్థాలు తెలుసుకోవడానికి నిఘంటువు",
      "Compass box for drawing for drawing lines on the black board\nనల్లబల్లపై గీతలు గీయడానికి కంపాస్ బాక్స్",
      "Maps and Globe for teaching history and geography\nచరిత్ర మరియు భూగోళశాస్త్రం బోధించడానికి పటాలు మరియు గ్లోబ్"
    ],
    "correctAnswer": 3,
    "explanation": "ఇతర సాధనాలు ఉపయోగకరంగా ఉన్నప్పటికీ, సాంఘిక శాస్త్రాన్ని బోధించడానికి పటాలు మరియు గ్లోబ్‌లు ప్రాథమిక మరియు అనివార్యమైన సామగ్రి. భౌగోళిక భావనలు, ప్రాదేశిక సంబంధాలు మరియు సంఘటనల చారిత్రక సందర్భాన్ని అర్థం చేసుకోవడానికి ఇవి అవసరం."
  },
  {
    "id": 291,
    "question": "Verifying the new hypothesis, drawing inferences and judging the adequacy or inadequacy of data collected for an issue are the specification of this teaching objective of social studies (TSTET 12 Jan 2025)\nకొత్త పరికల్పనను ధృవీకరించడం, అనుమితులను గీయడం మరియు ఒక సమస్య కోసం సేకరించిన డేటా యొక్క సమర్ధత లేదా అసమర్ధతను నిర్ధారించడం అనేది సాంఘిక శాస్త్రం యొక్క ఈ బోధనా లక్ష్యం యొక్క నిర్దిష్టత",
    "options": [
      "Understanding\nఅవగాహన",
      "Knowledge\nజ్ఞానం",
      "Application\nఅనువర్తనం",
      "Appreciation\nప్రశంస"
    ],
    "correctAnswer": 2,
    "explanation": "ఈ పనులకు కేవలం గుర్తుంచుకోవడం (జ్ఞానం) లేదా వివరించడం (అవగాహన) దాటి ఉన్నత-స్థాయి ఆలోచనా నైపుణ్యాలు అవసరం. సమస్యలను పరిష్కరించడానికి లేదా డేటాను విశ్లేషించడానికి కొత్త, నిర్దిష్ట పరిస్థితులలో నేర్చుకున్న భావనలు మరియు సూత్రాలను ఉపయోగించడం ఇందులో ఉంటుంది, ఇది విద్యా లక్ష్యాలలో 'అనువర్తనం' స్థాయి యొక్క సారాంశం."
  },
  {
    "id": 292,
    "question": "By teaching the concepts like believing and respecting the Laws, paying taxes intime and working for social well being the social studies teacher can inculcate these value among students. (TSTET 12 Jan 2025)\nచట్టాలను విశ్వసించడం మరియు గౌరవించడం, సకాలంలో పన్నులు చెల్లించడం మరియు సామాజిక శ్రేయస్సు కోసం పనిచేయడం వంటి భావనలను బోధించడం ద్వారా సాంఘిక శాస్త్ర ఉపాధ్యాయుడు విద్యార్థులలో ఈ విలువను పెంపొందించగలడు.",
    "options": [
      "Moral values\nనైతిక విలువలు",
      "Vocational values\nవృత్తిపరమైన విలువలు",
      "Interpretative values\nవివరణాత్మక విలువలు",
      "Utilitarian values\nఉపయోగితా విలువలు"
    ],
    "correctAnswer": 0,
    "explanation": "చట్టాలను గౌరవించడం, పన్నులు చెల్లించడం మరియు సామాజిక సంక్షేమానికి దోహదపడటం సమాజంలో పౌర బాధ్యత మరియు నైతిక ప్రవర్తన యొక్క ప్రధాన భాగాలు. ఇవి సరైన ప్రవర్తన యొక్క సూత్రాలకు సంబంధించినవి కాబట్టి, విస్తృతంగా నైతిక విలువలుగా వర్గీకరించబడ్డాయి."
  },
  {
    "id": 293,
    "question": "NCF-2005, suggested to focus on the following aspects, while developing social studies curriculum. A) Plurality and local content B) Content load C) Scientific outlook D) Inter relationship among disciplines. Choose the correct answer: (TSTET 12 Jan 2025)\nNCF-2005, సాంఘిక శాస్త్ర పాఠ్యప్రణాళికను అభివృద్ధి చేసేటప్పుడు, ఈ క్రింది అంశాలపై దృష్టి పెట్టాలని సూచించింది. A) బహుళత్వం మరియు స్థానిక కంటెంట్ B) కంటెంట్ లోడ్ C) శాస్త్రీయ దృక్పథం D) విభాగాల మధ్య పరస్పర సంబంధం. సరైన సమాధానాన్ని ఎంచుకోండి:",
    "options": [
      "B, C & D only",
      "A, C & D only",
      "A, B & C only",
      "A, B, C & D"
    ],
    "correctAnswer": 1,
    "explanation": "జాతీయ పాఠ్యప్రణాళిక ఫ్రేమ్‌వర్క్ (NCF) 2005 విభిన్న దృక్కోణాలు మరియు స్థానిక కంటెంట్‌ను (A) చేర్చడం, శాస్త్రీయ దృక్పథాన్ని (C) పెంపొందించడం మరియు ఇంటర్ డిసిప్లినరీ కనెక్షన్‌లను (D) హైలైట్ చేయడం కోసం వాదించింది. బట్టీపట్టడాన్ని నిరుత్సాహపరచడానికి మరియు అవగాహనను ప్రోత్సహించడానికి కంటెంట్ లోడ్‌ను తగ్గించడం (B) ఒక ముఖ్య సూత్రం."
  },
  {
    "id": 294,
    "question": "Among the following, which one DOES NOT help the social studies teacher to create the effective teaching - learning environment. (TSTET 12 Jan 2025)\nకింది వాటిలో, సాంఘిక శాస్త్ర ఉపాధ్యాయునికి ప్రభావవంతమైన బోధన - అభ్యాసన వాతావరణాన్ని సృష్టించడానికి ఏది సహాయపడదు.",
    "options": [
      "Going beyond the textbook\nపాఠ్యపుస్తకానికి మించి వెళ్ళడం",
      "Practicing the flexible evaluation methods\nసౌకర్యవంతమైన మూల్యాంకన పద్ధతులను ఆచరించడం",
      "Promoting mechanical learning\nయాంత్రిక అభ్యాసాన్ని ప్రోత్సహించడం",
      "Linking the text with daily life experiences\nపాఠాన్ని రోజువారీ జీవిత అనుభవాలతో అనుసంధానించడం"
    ],
    "correctAnswer": 2,
    "explanation": "ప్రభావవంతమైన బోధనా వాతావరణం విమర్శనాత్మక ఆలోచనను మరియు లోతైన అవగాహనను ప్రోత్సహిస్తుంది. యాంత్రిక అభ్యాసాన్ని ప్రోత్సహించడం, అంటే గ్రహింపు లేకుండా బట్టీపట్టడం, ఈ లక్ష్యానికి విరుద్ధం. ఇతర ఎంపికలన్నీ ఆకర్షణీయమైన మరియు ప్రభావవంతమైన అభ్యాసన వాతావరణాన్ని సృష్టించడానికి బాగా గౌరవించబడిన పద్ధతులు."
  },
  {
    "id": 295,
    "question": "Match the following List A with List - B. List-A (Community Resources) A) Historical Resource B) Cultural Resource C) Economic Resource D) Scientific Resource. List-B (Associations) i) Singareni Collaries ii) ISRO iii) Ajanta Caves iv) Tribal museum. Choose the correct answer: (TSTET 12 Jan 2025)\nకింది జాబితా Aని జాబితా - Bతో జతపరచండి. జాబితా-A (సంఘ వనరులు) A) చారిత్రక వనరు B) సాంస్కృతిక వనరు C) ఆర్థిక వనరు D) శాస్త్రీయ వనరు. జాబితా-B (సంస్థలు) i) సింగరేణి కాలరీస్ ii) ఇస్రో iii) అజంతా గుహలు iv) గిరిజన మ్యూజియం. సరైన సమాధానాన్ని ఎంచుకోండి:",
    "options": [
      "A-iii; B-i; C-iv; D-ii",
      "A-iii; B-iv; C-i; D-ii",
      "A-iv; B-iii; C-i; D-ii",
      "A-iii; B-iv; C-ii; D-i"
    ],
    "correctAnswer": 1,
    "explanation": "సరైన జతలు: A) అజంతా గుహలు ఒక చారిత్రక వనరు (iii). B) గిరిజన మ్యూజియం ఒక సాంస్కృతిక వనరును (iv) సూచిస్తుంది. C) సింగరేణి కాలరీస్ ఒక ప్రధాన ఆర్థిక వనరు (i). D) ఇస్రో (భారత అంతరిక్ష పరిశోధన సంస్థ) ఒక ప్రముఖ శాస్త్రీయ వనరు (ii)."
  },
  {
    "id": 296,
    "question": "To teach the concepts, i.e., earth rotation and revolution; shape and area of the earth; and eclipses; effectively the teacher should have competency in this geography (TSTET 12 Jan 2025)\nభూభ్రమణం మరియు పరిభ్రమణం; భూమి యొక్క ఆకారం మరియు వైశాల్యం; మరియు గ్రహణాలు వంటి భావనలను సమర్థవంతంగా బోధించడానికి ఉపాధ్యాయుడు ఈ భూగోళశాస్త్రంలో నైపుణ్యం కలిగి ఉండాలి",
    "options": [
      "Mathematical Geography\nగణిత భూగోళశాస్త్రం",
      "Economic Geography\nఆర్థిక భూగోళశాస్త్రం",
      "Political Geography\nరాజకీయ భూగోళశాస్త్రం",
      "Regional Geography\nప్రాంతీయ భూగోళశాస్త్రం"
    ],
    "correctAnswer": 0,
    "explanation": "గణిత భూగోళశాస్త్రం అనేది భూమి యొక్క రేఖాగణిత లక్షణాలు, అంతరిక్షంలో దాని కదలికలు (భ్రమణం, పరిభ్రమణం), సూర్యునితో దాని సంబంధం మరియు ఫలితంగా వచ్చే రుతువులు, కాల మండలాలు మరియు గ్రహణాలు వంటి దృగ్విషయాలతో వ్యవహరించే శాఖ. ఈ అంశాలు ప్రాథమికంగా ఖగోళ మరియు గణిత సూత్రాలపై ఆధారపడి ఉంటాయి."
  },
  {
    "id": 297,
    "question": "The following approach provides scope for social studies teacher to teach the lessons in collaborative, participative and problem solving methods (TSTET 12 Jan 2025)\nకింది విధానం సాంఘిక శాస్త్ర ఉపాధ్యాయునికి సహకార, భాగస్వామ్య మరియు సమస్య పరిష్కార పద్ధతులలో పాఠాలను బోధించడానికి అవకాశం కల్పిస్తుంది",
    "options": [
      "Subject centric approach\nవిషయ కేంద్రీకృత విధానం",
      "Teacher centric approach\nఉపాధ్యాయ కేంద్రీకృత విధానం",
      "Behaviouristic approach\nప్రవర్తనావాద విధానం",
      "Constructivistic approach\nనిర్మాణాత్మక విధానం"
    ],
    "correctAnswer": 3,
    "explanation": "నిర్మాణాత్మక విధానం ప్రకారం అభ్యాసకులు జ్ఞానాన్ని నిష్క్రియాత్మకంగా స్వీకరించకుండా చురుకుగా నిర్మిస్తారు. ఈ విద్యా తత్వశాస్త్రం సహజంగానే సహకారం, భాగస్వామ్యం మరియు సమస్య-పరిష్కారం వంటి పద్ధతులకు మద్దతు ఇస్తుంది, ఇక్కడ విద్యార్థులు అవగాహనను నిర్మించుకోవడానికి పాఠ్యాంశాలతో మరియు ఒకరితో ఒకరు చురుకుగా నిమగ్నమవుతారు."
  },
  {
    "id": 298,
    "question": "Among the following, which one DOES NOT relates to the advantages of social studies laboratory (TSTET 12 Jan 2025)\nకింది వాటిలో, సాంఘిక శాస్త్ర ప్రయోగశాల యొక్క ప్రయోజనాలకు సంబంధం లేనిది ఏది",
    "options": [
      "It creates interest in experiments and research among students\nఇది విద్యార్థులలో ప్రయోగాలు మరియు పరిశోధనలపై ఆసక్తిని సృష్టిస్తుంది",
      "Cultural and social values will develop among students\nవిద్యార్థులలో సాంస్కృతిక మరియు సామాజిక విలువలు అభివృద్ధి చెందుతాయి",
      "Students will become indiscipline due to involvement in activities\nకార్యకలాపాలలో పాల్గొనడం వల్ల విద్యార్థులు క్రమశిక్షణారహితంగా తయారవుతారు",
      "Valuable equipments will be kept in safety\nవిలువైన పరికరాలు భద్రంగా ఉంచబడతాయి"
    ],
    "correctAnswer": 2,
    "explanation": "సాంఘిక శాస్త్ర ప్రయోగశాల క్రియాశీల, ఆచరణాత్మక అభ్యాసం కోసం ఒక స్థలాన్ని అందించడం లక్ష్యంగా పెట్టుకుంది, ఇది ఆసక్తి, విలువలు మరియు సామగ్రి యొక్క బాధ్యతాయుతమైన వినియోగాన్ని పెంపొందిస్తుంది. విద్యార్థులు క్రమశిక్షణారహితంగా తయారవుతారనేది, చెడు తరగతి గది నిర్వహణ యొక్క ప్రతికూల ఫలితం కావచ్చు, కానీ ప్రయోగశాల యొక్క స్వాభావిక ప్రయోజనం లేదా ఉద్దేశ్యం కాదు."
  },
  {
    "id": 299,
    "question": "Among the following, identify the characteristics of good evaluation tool. A) Utility B) Subjectivity C) Language clarity D) Practicability E) Diagnosticity. Choose the correct answer: (TSTET 12 Jan 2025)\nకింది వాటిలో, మంచి మూల్యాంకన సాధనం యొక్క లక్షణాలను గుర్తించండి. A) ఉపయోగం B) ఆత్మాశ్రయత C) భాషా స్పష్టత D) ఆచరణీయత E) రోగనిర్ధారణ. సరైన సమాధానాన్ని ఎంచుకోండి:",
    "options": [
      "A, B, C, D & E",
      "A, B, C & D only",
      "B, C & D only",
      "A, C, D & E only"
    ],
    "correctAnswer": 3,
    "explanation": "ప్రభావవంతమైన మూల్యాంకన సాధనం ఉపయోగం (A), భాషా స్పష్టత (C), ఆచరణీయత (D), మరియు రోగనిర్ధారణ (E) కలిగి ఉండాలి. స్కోరింగ్ వ్యక్తిగత తీర్పుపై ఆధారపడే ఆత్మాశ్రయత (B) ఒక బలహీనత; ఒక మంచి సాధనం నిష్పాక్షికత కోసం ప్రయత్నించాలి. అందువల్ల, ఉత్తమ లక్షణాల సమితి ఆత్మాశ్రయతను మినహాయిస్తుంది."
  },
  {
    "id": 300,
    "question": "In Telangana state, the summative assessment in social studies is being conducted based on these academic standards. A) Reflection on contemporary issues and questioning B) Experiments and field observation C) Conceptual understanding D) Appreciation and sensitivity. Choose the correct answer: (TSTET 12 Jan 2025)\nతెలంగాణ రాష్ట్రంలో, సాంఘిక శాస్త్రంలో సమ్మేటివ్ అసెస్‌మెంట్ ఈ విద్యా ప్రమాణాల ఆధారంగా నిర్వహించబడుతోంది. A) సమకాలీన సమస్యలపై ప్రతిబింబం మరియు ప్రశ్నించడం B) ప్రయోగాలు మరియు క్షేత్ర పరిశీలన C) భావనాత్మక అవగాహన D) ప్రశంస మరియు సున్నితత్వం. సరైన సమాధానాన్ని ఎంచుకోండి:",
    "options": [
      "A, B & C only",
      "A, C & D only",
      "B, C & D only",
      "A, B, C & D"
    ],
    "correctAnswer": 1,
    "explanation": "తెలంగాణలో సాంఘిక శాస్త్ర మదింపు కోసం విద్యా ప్రమాణాలలో భావనాత్మక అవగాహన (C), సమకాలీన సమస్యలపై ప్రతిబింబం మరియు ప్రశ్నించడం (A), మరియు ప్రశంస మరియు సున్నితత్వం (D) ఉన్నాయి. క్షేత్ర పరిశీలన ఒక కార్యకలాపం అయినప్పటికీ, 'ప్రయోగాలు మరియు క్షేత్ర పరిశీలన' (B) అనేది సాధారణంగా సాంఘిక శాస్త్రం కోసం కాకుండా విజ్ఞానశాస్త్రం కోసం ఉపయోగించే ఒక నిర్దిష్ట విద్యా ప్రమాణం."
  },
  {
    "id": 301,
    "question": "Among the following, identify the statement that best describes the term \"Current Account Deposit\" (TSTET 12 Jan 2025)\nకింది వాటిలో, \"కరెంట్ అకౌంట్ డిపాజిట్\" అనే పదాన్ని ఉత్తమంగా వివరించే ప్రకటనను గుర్తించండి",
    "options": [
      "The money deposited in this account cannot be withdrawn from the bank as and when required\nఈ ఖాతాలో జమ చేసిన డబ్బును అవసరమైనప్పుడు బ్యాంకు నుండి విత్‌డ్రా చేసుకోలేరు",
      "There are no restrictions in the number of times to deposit or withdraw money from the bank in a day\nఒక రోజులో బ్యాంకు నుండి డబ్బు డిపాజిట్ చేయడానికి లేదా విత్‌డ్రా చేయడానికి ఎటువంటి పరిమితులు లేవు",
      "The rate of interest is higher for the amount deposited in this account\nఈ ఖాతాలో జమ చేసిన మొత్తానికి వడ్డీ రేటు ఎక్కువగా ఉంటుంది",
      "The amount deposited in this account has to withdraw only through cheques\nఈ ఖాతాలో జమ చేసిన మొత్తాన్ని చెక్కుల ద్వారా మాత్రమే విత్‌డ్రా చేసుకోవాలి"
    ],
    "correctAnswer": 1,
    "explanation": "కరెంట్ అకౌంట్ అనేది ఒక రకమైన బ్యాంక్ ఖాతా, దీనిని ప్రధానంగా వ్యాపారాలు తరచుగా లావాదేవీల కోసం ఉపయోగిస్తాయి. దీని ముఖ్య లక్షణం అది అందించే సౌలభ్యం, ఒక రోజులో చేయగలిగే డిపాజిట్లు లేదా విత్‌డ్రాలపై ఎటువంటి పరిమితులు ఉండవు. సేవింగ్స్ ఖాతాల మాదిరిగా కాకుండా, ఇవి సాధారణంగా వడ్డీని సంపాదించవు."
  },
  {
    "id": 302,
    "question": "One of the following is the function of \"Commercial Banks\" (TSTET 12 Jan 2025)\nకింది వాటిలో ఒకటి \"వాణిజ్య బ్యాంకుల\" విధి",
    "options": [
      "Regulates Foreign Exchange Reserves\nవిదేశీ మారకద్రవ్య నిల్వలను నియంత్రిస్తుంది",
      "Banker to Central and State Government\nకేంద్ర మరియు రాష్ట్ర ప్రభుత్వానికి బ్యాంకర్",
      "Custodian of Foreign reserves\nవిదేశీ నిల్వల సంరక్షకుడు",
      "Accept deposits from the public\nప్రజల నుండి డిపాజిట్లను అంగీకరించడం"
    ],
    "correctAnswer": 3,
    "explanation": "వాణిజ్య బ్యాంకుల ప్రాథమిక పాత్ర ప్రజలకు మరియు వ్యాపారాలకు సేవ చేయడం. వాటి ప్రాథమిక విధులు ప్రజల నుండి డిపాజిట్లను (పొదుపు, కరెంట్ మరియు ఫిక్స్‌డ్ డిపాజిట్లు వంటివి) అంగీకరించడం మరియు రుణాలు అందించడం. జాబితా చేయబడిన ఇతర ఎంపికలు దేశంలోని కేంద్ర బ్యాంకు (ఉదా., రిజర్వ్ బ్యాంక్ ఆఫ్ ఇండియా) యొక్క విధులు."
  },
  {
    "id": 303,
    "question": "One of the following is NOT the measure of \"Human Development Index\" (TSTET 12 Jan 2025)\nకింది వాటిలో ఒకటి \"మానవ అభివృద్ధి సూచిక\" యొక్క కొలమానం కాదు",
    "options": [
      "Per Capita Income\nతలసరి ఆదాయం",
      "Mean Years of Schooling\nసగటు పాఠశాల విద్య సంవత్సరాలు",
      "Life expectancy at birth\nపుట్టుకతో ఆయుర్దాయం",
      "Density of Population\nజన సాంద్రత"
    ],
    "correctAnswer": 3,
    "explanation": "మానవ అభివృద్ధి సూచిక (HDI) అనేది మానవ అభివృద్ధిలోని మూడు కీలకమైన అంశాలలో సగటు విజయాన్ని కొలిచే ఒక మిశ్రమ సూచిక: దీర్ఘ మరియు ఆరోగ్యకరమైన జీవితం (ఆయుర్దాయం), పరిజ్ఞానం కలిగి ఉండటం (విద్య), మరియు ఒక మంచి జీవన ప్రమాణం కలిగి ఉండటం (తలసరి ఆదాయం). జనాభా సాంద్రత HDIలో ఒక భాగం కాదు."
  },
  {
    "id": 304,
    "question": "Agriculture and related activities such as fishing, forestry, mining, quarrying where nature has a dominant role in the production process comes under this sector of the economy (TSTET 12 Jan 2025)\nవ్యవసాయం మరియు సంబంధిత కార్యకలాపాలైన చేపలు పట్టడం, అటవీ, గనుల తవ్వకం, క్వారీయింగ్ వంటి వాటిలో ప్రకృతి ఉత్పత్తి ప్రక్రియలో ప్రధాన పాత్ర పోషించే ఆర్థిక రంగం ఇది",
    "options": [
      "Primary Sector\nప్రాథమిక రంగం",
      "Secondary Sector\nద్వితీయ రంగం",
      "Tertiary Sector\nతృతీయ రంగం",
      "Quaternary Sector\nచతుర్థ రంగం"
    ],
    "correctAnswer": 0,
    "explanation": "ప్రాథమిక రంగం భూమి నుండి నేరుగా సహజ వనరులను వెలికితీయడం మరియు సేకరించడం వంటి కార్యకలాపాలను కలిగి ఉంటుంది. ఇది ఇతర రంగాలకు ముడి పదార్థాలను అందించడం ద్వారా ఆర్థిక వ్యవస్థకు పునాది వేస్తుంది. ఇందులో అన్ని రకాల వ్యవసాయం, చేపలు పట్టడం, అటవీ మరియు గనుల తవ్వకం ఉన్నాయి."
  },
  {
    "id": 305,
    "question": "Which of the following statement best describes the term Gross Domestic Product ? (TSTET 12 Jan 2025)\nకింది వాటిలో ఏ ప్రకటన స్థూల దేశీయోత్పత్తి అనే పదాన్ని ఉత్తమంగా వివరిస్తుంది?",
    "options": [
      "The total value of final goods and services produced in the country during the period of five years\nఐదు సంవత్సరాల కాలంలో దేశంలో ఉత్పత్తి చేయబడిన తుది వస్తువులు మరియు సేవల మొత్తం విలువ",
      "The total value of capital goods produced in the country during the period of one year\nఒక సంవత్సర కాలంలో దేశంలో ఉత్పత్తి చేయబడిన మూలధన వస్తువుల మొత్తం విలువ",
      "The value derived from total value of final goods and services produced in the country during the period of one year by dividing with the population of the country\nఒక సంవత్సర కాలంలో దేశంలో ఉత్పత్తి చేయబడిన తుది వస్తువులు మరియు సేవల మొత్తం విలువను దేశ జనాభాతో భాగించడం ద్వారా పొందిన విలువ",
      "The total value of final goods and services produced in the country during the period of one year\nఒక సంవత్సర కాలంలో దేశంలో ఉత్పత్తి చేయబడిన తుది వస్తువులు మరియు సేవల మొత్తం విలువ"
    ],
    "correctAnswer": 3,
    "explanation": "స్థూల దేశీయోత్పత్తి (GDP) అనేది ఒక నిర్దిష్ట కాలంలో ఒక దేశంలో వస్తువులు మరియు సేవల ఉత్పత్తి ద్వారా సృష్టించబడిన అదనపు విలువ యొక్క ప్రామాణిక కొలమానం. ఇది సాధారణంగా ఒక సంవత్సరంలో ఒక దేశం యొక్క సరిహద్దులలో ఉత్పత్తి చేయబడిన అన్ని తుది వస్తువులు మరియు సేవల మొత్తం ద్రవ్య విలువను సూచిస్తుంది."
  },
  {
    "id": 306,
    "question": "The information regarding this is an important social indicator to measure the extent of equality between men and women (TSTET 12 Jan 2025)\nదీనికి సంబంధించిన సమాచారం స్త్రీపురుషుల మధ్య సమానత్వ స్థాయిని కొలవడానికి ఒక ముఖ్యమైన సామాజిక సూచిక",
    "options": [
      "Age structure\nవయస్సు నిర్మాణం",
      "Sex Ratio\nలింగ నిష్పత్తి",
      "Fertility rate\nసంతానోత్పత్తి రేటు",
      "Density of Population\nజన సాంద్రత"
    ],
    "correctAnswer": 1,
    "explanation": "లింగ నిష్పత్తి, అనగా ప్రతి 1000 మంది పురుషులకు ఉన్న స్త్రీల సంఖ్య, సమాజంలో లింగ సమానత్వ స్థాయిని కొలవడానికి ఉపయోగించే ఒక కీలకమైన సామాజిక సూచిక. అసమతుల్య నిష్పత్తి స్త్రీ భ్రూణహత్యలు, లింగ ఆధారిత వివక్ష, మరియు స్త్రీలకు ఆరోగ్య సంరక్షణ మరియు పోషణలో అసమానతలు వంటి సమస్యలను సూచిస్తుంది."
  },
  {
    "id": 307,
    "question": "One among the following was the term of Permanent settlement introduced by the British East India Company, 1793 (TSTET 12 Jan 2025)\nకింది వాటిలో ఒకటి, 1793లో బ్రిటిష్ ఈస్ట్ ఇండియా కంపెనీ ప్రవేశపెట్టిన శాశ్వత పరిష్కారపు నిబంధన",
    "options": [
      "The power to collect the revenue was given as agreed upon in auction to the zamindars\nవేలంలో అంగీకరించిన ప్రకారం ఆదాయాన్ని వసూలు చేసే అధికారం జమీందార్లకు ఇవ్వబడింది",
      "The power of collecting revenue was given to village heads\nఆదాయాన్ని వసూలు చేసే అధికారం గ్రామ పెద్దలకు ఇవ్వబడింది",
      "The power to collect revenue was in the hands of the Government officials\nఆదాయాన్ని వసూలు చేసే అధికారం ప్రభుత్వ అధికారుల చేతిలో ఉంది",
      "Giving the power of collecting revenue to the Land lords\nఆదాయాన్ని వసూలు చేసే అధికారం భూస్వాములకు ఇవ్వడం"
    ],
    "correctAnswer": 0,
    "explanation": "1793లో లార్డ్ కారన్‌వాలిస్ ప్రవేశపెట్టిన శాశ్వత పరిష్కారం కింద, భూమి శిస్తును వసూలు చేసే హక్కును వేలంలో అత్యధికంగా పాడిన వారికి, అనగా జమీందార్లకు అప్పగించారు. ఈ జమీందార్లు కంపెనీకి ఒక నిర్ణీత మొత్తంలో శిస్తు చెల్లించి, మిగులును తమ వద్ద ఉంచుకునేవారు. శిస్తు మొత్తం శాశ్వతంగా నిర్ణయించబడింది."
  },
  {
    "id": 308,
    "question": "Which of the following statement best describes the phrase \"Sarf-e-khas\"? (TSTET 12 Jan 2025)\nకింది వాటిలో ఏ ప్రకటన \"సర్ఫ్-ఎ-ఖాస్\" అనే పదాన్ని ఉత్తమంగా వివరిస్తుంది?",
    "options": [
      "The land owned by the zamindars\nజమీందార్ల యాజమాన్యంలోని భూమి",
      "The land that was directly under the Nizam as his personal jagir\nనిజాం వ్యక్తిగత జాగీరుగా నేరుగా అతని ఆధీనంలో ఉన్న భూమి",
      "The land cultivated directly by the zamindars in their own lands\nజమీందార్లు తమ సొంత భూములలో నేరుగా సాగు చేసిన భూమి",
      "The land of Zamindars given to tenants\nకౌలుదారులకు ఇచ్చిన జమీందార్ల భూమి"
    ],
    "correctAnswer": 1,
    "explanation": "పూర్వపు హైదరాబాద్ రాజ్యంలో, \"సర్ఫ్-ఎ-ఖాస్\" అనేది నిజాం యొక్క వ్యక్తిగత ఎస్టేట్ లేదా రాచరిక భూములను సూచిస్తుంది. ఈ భూముల నుండి వచ్చే ఆదాయం పాలకుడి వ్యక్తిగత ఆదాయంగా ఉండి, అతని రాజభవనం మరియు కుటుంబ నిర్వహణకు ఉపయోగించబడేది."
  },
  {
    "id": 309,
    "question": "The Primary goal of sustainable development is (TSTET 12 Jan 2025)\nసుస్థిర అభివృద్ధి యొక్క ప్రాథమిక లక్ష్యం",
    "options": [
      "Economic growth without any concern for the development\nఅభివృద్ధి గురించి ఎటువంటి ఆందోళన లేకుండా ఆర్థిక వృద్ధి",
      "Ensuring that the current generation's needs are met without compromising the ability of future generations to meet their own needs\nభవిష్యత్ తరాల అవసరాలను తీర్చుకునే సామర్థ్యానికి భంగం కలగకుండా ప్రస్తుత తరం అవసరాలు తీరేలా చూడటం",
      "Giving priority to the industrial development\nపారిశ్రామిక అభివృద్ధికి ప్రాధాన్యత ఇవ్వడం",
      "Reducing the population growth globally\nప్రపంచవ్యాప్తంగా జనాభా పెరుగుదలను తగ్గించడం"
    ],
    "correctAnswer": 1,
    "explanation": "ఇది 1987 బ్రంట్‌ల్యాండ్ కమిషన్ నివేదిక నుండి ఉద్భవించిన సుస్థిర అభివృద్ధి యొక్క అత్యంత విస్తృతంగా ఆమోదించబడిన నిర్వచనం. తదుపరి తరాలకు ఒక ఆచరణీయమైన భవిష్యత్తును నిర్ధారించడానికి ఆర్థిక మరియు సామాజిక పురోగతిని పర్యావరణ పరిరక్షణతో సమతుల్యం చేయవలసిన అవసరాన్ని ఇది నొక్కి చెబుతుంది."
  },
  {
    "id": 310,
    "question": "In these days, banks withhold approximately this percentage of their deposits in Cash (TSTET 12 Jan 2025)\nఈ రోజుల్లో, బ్యాంకులు తమ డిపాజిట్లలో సుమారుగా ఈ శాతాన్ని నగదు రూపంలో నిలిపి ఉంచుతాయి",
    "options": [
      "10%",
      "100%",
      "50%",
      "15%"
    ],
    "correctAnswer": 3,
    "explanation": "ఫ్రాక్షనల్-రిజర్వ్ బ్యాంకింగ్ వ్యవస్థ కింద, వాణిజ్య బ్యాంకులు తమ మొత్తం డిపాజిట్లలో కొంత భాగాన్ని మాత్రమే రోజువారీ విత్‌డ్రాల అవసరాలను తీర్చడానికి నగదు నిల్వలుగా ఉంచాలి. భారతదేశంలో, సాధారణ ఆర్థిక ఉదాహరణల ప్రకారం, బ్యాంకులు తమ డిపాజిట్లలో సుమారు 15% నగదుగా ఉంచుతాయి. మిగిలినది రుణాలు మరియు పెట్టుబడుల కోసం ఉపయోగించబడుతుంది."
  },
  {
    "id": 311,
    "question": "This refers to an agreement in which the lender supplies the borrower with money, goods or services in return for the promise of future payment (TSTET 12 Jan 2025)\nఇది ఒక ఒప్పందాన్ని సూచిస్తుంది, దీనిలో రుణదాత భవిష్యత్ చెల్లింపు వాగ్దానానికి బదులుగా రుణగ్రహీతకు డబ్బు, వస్తువులు లేదా సేవలను అందిస్తాడు",
    "options": [
      "Debit\nడెబిట్",
      "Credit\nక్రెడిట్",
      "Collateral\nపూచీకత్తు",
      "Base rate\nబేస్ రేటు"
    ],
    "correctAnswer": 1,
    "explanation": "క్రెడిట్ అనేది రుణగ్రహీత భవిష్యత్తులో అప్పు తీరుస్తాడనే అవగాహనతో రుణదాత నుండి నిధులు, వస్తువులు లేదా సేవలను పొందడానికి అనుమతించే వ్యవస్థ. ఇది ఫైనాన్స్ మరియు వాణిజ్యంలో ఒక ప్రాథమిక భావన."
  },
  {
    "id": 312,
    "question": "\"Inflation\" refers to (TSTET 12 Jan 2025)\n\"ద్రవ్యోల్బణం\" అనగా",
    "options": [
      "Continuous decline in prices of goods\nవస్తువుల ధరలలో నిరంతర క్షీణత",
      "Continuous rise in prices of goods\nవస్తువుల ధరలలో నిరంతర పెరుగుదల",
      "Neither increase nor decrease in prices of goods in long term\nదీర్ఘకాలంలో వస్తువుల ధరలలో పెరుగుదల లేదా తగ్గుదల లేకపోవడం",
      "Price increase with regard to luxury goods only\nవిలాసవంతమైన వస్తువులకు సంబంధించి మాత్రమే ధరల పెరుగుదల"
    ],
    "correctAnswer": 1,
    "explanation": "ద్రవ్యోల్బణం అనేది వస్తువులు మరియు సేవల యొక్క సాధారణ ధరల స్థాయి పెరిగే రేటు, మరియు పర్యవసానంగా, కరెన్సీ యొక్క కొనుగోలు శక్తి తగ్గుతుంది. ఇది సాధారణంగా వార్షిక శాతం పెరుగుదలగా కొలవబడుతుంది."
  },
  {
    "id": 313,
    "question": "This inscription speaks Gauthami Putra Satakarni as 'King of Kings' and Kshaharata Vamsa Niravasesaka (Destroyer of Kshaharata family)' (TSTET 12 Jan 2025)\nఈ శాసనం గౌతమీపుత్ర శాతకర్ణిని 'రాజరాజు' మరియు 'క్షహరాట వంశ నిరవశేషకర (క్షహరాట వంశాన్ని నాశనం చేసినవాడు)'గా పేర్కొంటుంది",
    "options": [
      "The Nasik Inscription\nనాసిక్ శాసనం",
      "The Amaravathi Inscription\nఅమరావతి శాసనం",
      "The Nanaghat Inscription\nనానాఘాట్ శాసనం",
      "The Junagadh Rock Inscription\nజూనాగఢ్ శిలా శాసనం"
    ],
    "correctAnswer": 0,
    "explanation": "శాతవాహన రాజు గౌతమీపుత్ర శాతకర్ణి తల్లి గౌతమీ బాలశ్రీ వేయించిన నాసిక్ ప్రశస్తి శాసనం, అతని విజయాలను వివరిస్తుంది. ఇది శక పాలకుడైన నహపాణుడిపై అతని ముఖ్యమైన సైనిక విజయాన్ని హైలైట్ చేస్తూ, 'క్షహరాట వంశాన్ని నాశనం చేసినవాడు' వంటి బిరుదులతో అతన్ని కీర్తిస్తుంది."
  },
  {
    "id": 314,
    "question": "In the first World War, the countries which participated on behalf of Austria were known as (TSTET 12 Jan 2025)\nమొదటి ప్రపంచ యుద్ధంలో, ఆస్ట్రియా తరపున పాల్గొన్న దేశాలను ఇలా పిలిచేవారు",
    "options": [
      "Axis powers\nఅక్ష రాజ్యాలు",
      "Allied Powers\nమిత్ర రాజ్యాలు",
      "Central Powers\nకేంద్ర రాజ్యాలు",
      "Communist powers\nకమ్యూనిస్ట్ శక్తులు"
    ],
    "correctAnswer": 2,
    "explanation": "కేంద్ర రాజ్యాలు మొదటి ప్రపంచ యుద్ధంలో జర్మనీ, ఆస్ట్రియా-హంగరీ, ఒట్టోమన్ సామ్రాజ్యం మరియు బల్గేరియాలతో కూడిన ఒక సైనిక కూటమి. వారు ఫ్రాన్స్, బ్రిటన్, రష్యా మరియు తరువాత USA వంటి దేశాలతో కూడిన మిత్ర రాజ్యాలకు వ్యతిరేకంగా పోరాడారు. 'అక్ష రాజ్యాలు' అనే పదం రెండవ ప్రపంచ యుద్ధంలోని కూటమిని సూచిస్తుంది."
  },
  {
    "id": 315,
    "question": "The people's Republic of China Government was established in 1949 based on the principles of \"New democracy\". The principle of New Democracy' was an association of (TSTET 12 Jan 2025)\nపీపుల్స్ రిపబ్లిక్ ఆఫ్ చైనా ప్రభుత్వం 1949లో \"నవ ప్రజాస్వామ్యం\" సూత్రాల ఆధారంగా స్థాపించబడింది. 'నవ ప్రజాస్వామ్యం' సూత్రం వీరి యొక్క సంఘం",
    "options": [
      "All social classes who opposed to landlordism and imperialism\nభూస్వామ్యవాదం మరియు సామ్రాజ్యవాదాన్ని వ్యతిరేకించిన అన్ని సామాజిక వర్గాలు",
      "All the Chinese people who have supported Chinese Communist Party\nచైనీస్ కమ్యూనిస్ట్ పార్టీకి మద్దతు ఇచ్చిన చైనీయులందరూ",
      "All the supporters of Mao Zedong who have supported to landlordism and imperialism\nభూస్వామ్యవాదం మరియు సామ్రాజ్యవాదానికి మద్దతు ఇచ్చిన మావో జెడాంగ్ మద్దతుదారులందరూ",
      "All the people who believed in the idea of people's rule\nప్రజల పాలన అనే భావనను విశ్వసించిన ప్రజలందరూ"
    ],
    "correctAnswer": 0,
    "explanation": "మావో జెడాంగ్ యొక్క 'నవ ప్రజాస్వామ్యం' సిద్ధాంతం నాలుగు విప్లవాత్మక సామాజిక వర్గాల కూటమిని ప్రతిపాదించింది: శ్రామికవర్గం, రైతాంగం, పెట్టీ బూర్జువా మరియు జాతీయ బూర్జువా. ఈ 'నాలుగు వర్గాల కూటమి' సామ్రాజ్యవాదాన్ని మరియు భూస్వామ్యవాదాన్ని పడగొట్టడానికి కమ్యూనిస్ట్ పార్టీ నాయకత్వంలో ఏకం కావాలి."
  },
  {
    "id": 316,
    "question": "In 1828, Raja Ram Mohan Roy founded the Brahma Samaj - an assembly of all those who believed in a \"Universal Religion\" is based on the principle of (TSTET 12 Jan 2025)\n1828లో, రాజా రామ్ మోహన్ రాయ్ బ్రహ్మ సమాజాన్ని స్థాపించారు - \"సార్వత్రిక మతం\"ను విశ్వసించే వారందరి సభ, ఇది ఈ సూత్రంపై ఆధారపడి ఉంటుంది",
    "options": [
      "Freedom and respect for women\nస్త్రీలకు స్వేచ్ఛ మరియు గౌరవం",
      "One Supreme God\nఒకే పరమాత్మ",
      "Social Service for national construction\nజాతీయ నిర్మాణం కోసం సామాజిక సేవ",
      "To revive a reformed Hindu religion\nసంస్కరించబడిన హిందూ మతాన్ని పునరుద్ధరించడం"
    ],
    "correctAnswer": 1,
    "explanation": "బ్రహ్మ సమాజం యొక్క కేంద్ర సిద్ధాంతం ఏకేశ్వరోపాసన, అనగా ఒకే, నిరాకార, మరియు సార్వత్రిక దేవుడిపై నమ్మకం. రాజా రామ్ మోహన్ రాయ్ ఉపనిషత్తుల నుండి ప్రేరణ పొంది విగ్రహారాధన, బహుదేవతారాధన, కుల భేదాలు మరియు మూఢనమ్మకాల నుండి విముక్తి పొందిన మతాన్ని సమర్థించారు."
  },
  {
    "id": 317,
    "question": "One of the following is NOT the famous temple constructed by Jains (TSTET 12 Jan 2025)\nకింది వాటిలో ఒకటి జైనులు నిర్మించిన ప్రసిద్ధ ఆలయం కాదు",
    "options": [
      "Dilwara Temple at Mount Abu\nమౌంట్ అబు వద్ద దిల్వారా ఆలయం",
      "Parshvanadha Temple at Khajuraho\nఖజురహో వద్ద పార్శ్వనాథ ఆలయం",
      "Jinanadhapura Basadi Temple near Sravanabelagola\nశ్రావణబెళగొళ సమీపంలోని జిననాథపుర బసది ఆలయం",
      "The Shwedagon Pagoda, Myanmar\nశ్వేదాగాన్ పగోడా, మయన్మార్"
    ],
    "correctAnswer": 3,
    "explanation": "మయన్మార్‌లోని శ్వేదాగాన్ పగోడా ఒక గౌరవనీయమైన బౌద్ధ స్థూపం మరియు దేశంలోని బౌద్ధులకు అత్యంత పవిత్రమైన మతపరమైన ప్రదేశం. మిగిలిన మూడు ఎంపికలు - దిల్వారా దేవాలయాలు, పార్శ్వనాథ ఆలయం, మరియు జిననాథపుర బసది - అన్నీ జైన ఆలయ వాస్తుశిల్పానికి ప్రసిద్ధి చెందిన ఉదాహరణలు."
  },
  {
    "id": 318,
    "question": "In 1919, Mahatma Gandhi gave a call for Satyagraha against (TSTET 12 Jan 2025)\n1919లో, మహాత్మా గాంధీ దేనికి వ్యతిరేకంగా సత్యాగ్రహానికి పిలుపునిచ్చారు",
    "options": [
      "Rowlatt Act\nరౌలట్ చట్టం",
      "Montague Chelmsford Reforms\nమాంటేగ్ చెమ్స్‌ఫోర్డ్ సంస్కరణలు",
      "Local Movements in Champaran and Kheda\nచంపారన్ మరియు ఖేడాలో స్థానిక ఉద్యమాలు",
      "The Ahmedabad Mill workers strike\nఅహ్మదాబాద్ మిల్లు కార్మికుల సమ్మె"
    ],
    "correctAnswer": 0,
    "explanation": "మహాత్మా గాంధీ 1919లో అణచివేత రౌలట్ చట్టానికి వ్యతిరేకంగా దేశవ్యాప్త నిరసనగా రౌలట్ సత్యాగ్రహాన్ని ప్రారంభించారు. ఈ చట్టం బ్రిటిష్ ప్రభుత్వానికి ఉగ్రవాద కార్యకలాపాల అనుమానంతో ఏ వ్యక్తినైనా విచారణ లేకుండా రెండు సంవత్సరాల వరకు జైలులో పెట్టే అధికారాన్ని ఇచ్చింది, ఇది పౌర స్వేచ్ఛను తీవ్రంగా తగ్గించింది."
  },
  {
    "id": 319,
    "question": "Thomas Monroe introduced the Ryotwari System in the Madras Presidency as per the orders of this Governor General in 1798 (TSTET 12 Jan 2025)\n1798లో ఈ గవర్నర్ జనరల్ ఆదేశాల మేరకు థామస్ మన్రో మద్రాస్ ప్రెసిడెన్సీలో రైత్వారీ విధానాన్ని ప్రవేశపెట్టారు",
    "options": [
      "Lord Wellesley\nలార్డ్ వెల్లస్లీ",
      "Lord William Bentick\nలార్డ్ విలియం బెంటింక్",
      "Lord Dalhousie\nలార్డ్ డల్హౌసీ",
      "Lord Warren Hastings\nలార్డ్ వారెన్ హేస్టింగ్స్"
    ],
    "correctAnswer": 0,
    "explanation": "రైత్వారీ వ్యవస్థ, దీనిలో రైతుల (రైతులు) నుండి నేరుగా ఆదాయం వసూలు చేయబడింది, దీనిని థామస్ మన్రో మరింత అభివృద్ధి చేసి అమలు చేశారు. ఇది 1798 నుండి 1805 వరకు భారత గవర్నర్ జనరల్‌గా ఉన్న లార్డ్ వెల్లస్లీ పరిపాలనలో జరిగింది. మన్రో తరువాత మద్రాస్ గవర్నర్ అయ్యి ఈ వ్యవస్థను విస్తరించారు."
  },
  {
    "id": 320,
    "question": "With this treaty, the Mughal emperor Shah Alam II granted the right to collect Diwani to English East India Company along with police and judicial powers (TSTET 12 Jan 2025)\nఈ సంధితో, మొఘల్ చక్రవర్తి షా ఆలం II ఇంగ్లీష్ ఈస్ట్ ఇండియా కంపెనీకి పోలీసు మరియు న్యాయ అధికారాలతో పాటు దివానీని వసూలు చేసే హక్కును మంజూరు చేశారు",
    "options": [
      "Treaty of Allahabad\nఅలహాబాద్ సంధి",
      "Treaty of Masulipatnam\nమచిలీపట్నం సంధి",
      "Treaty of Bassein\nబస్సీన్ సంధి",
      "Treaty of Lahore\nలాహోర్ సంధి"
    ],
    "correctAnswer": 0,
    "explanation": "అలహాబాద్ సంధి 1765లో బక్సర్ యుద్ధం తర్వాత సంతకం చేయబడింది. ఈ సంధి ద్వారా, మొఘల్ చక్రవర్తి షా ఆలం II ఈస్ట్ ఇండియా కంపెనీకి బెంగాల్, బీహార్ మరియు ఒరిస్సా రాష్ట్రాల నుండి దివానీ హక్కులను - అనగా ఆదాయాన్ని వసూలు చేసే హక్కును - మంజూరు చేశారు. ఇది భారతదేశంలో కంపెనీ పాలన ప్రారంభాన్ని సూచించిన ఒక కీలకమైన క్షణం."
  },
  {
    "id": 321,
    "question": "At the end of the first world war, one of the following was NOT the follower of the fascist ideology (TSTET 12 Jan 2025)\nమొదటి ప్రపంచ యుద్ధం ముగిసేనాటికి, కింది వారిలో ఒకరు ఫాసిస్ట్ భావజాలాన్ని అనుసరించిన వారు కాదు",
    "options": [
      "General Franco in Spain\nస్పెయిన్‌లో జనరల్ ఫ్రాంకో",
      "Benito Mussolini in Italy\nఇటలీలో బెనిటో ముస్సోలినీ",
      "Adolf Hitler in Germany\nజర్మనీలో అడాల్ఫ్ హిట్లర్",
      "Stalin in Soviet Union\nసోవియట్ యూనియన్‌లో స్టాలిన్"
    ],
    "correctAnswer": 3,
    "explanation": "ఫాసిజం అనేది ముస్సోలినీ, హిట్లర్ మరియు ఫ్రాంకో వంటి నాయకులు సమర్థించిన ఒక తీవ్ర-మితవాద, నిరంకుశ భావజాలం. సోవియట్ యూనియన్ నాయకుడైన జోసెఫ్ స్టాలిన్ కమ్యూనిజం యొక్క ప్రతిపాదకుడు, ఇది ఒక తీవ్ర-వామపక్ష భావజాలం. కమ్యూనిజం మరియు ఫాసిజం సైద్ధాంతికంగా వ్యతిరేకమైనవి మరియు రెండవ ప్రపంచ యుద్ధంలో ప్రధాన శత్రువులుగా ఉన్నాయి."
  },
  {
    "id": 322,
    "question": "The aim of this society was 'to secure social justice for the weaker sections of the society' (TSTET 12 Jan 2025)\n'సమాజంలోని బలహీన వర్గాలకు సామాజిక న్యాయం కల్పించడం' ఈ సమాజం యొక్క లక్ష్యం",
    "options": [
      "Satya Shodak Samaj\nసత్య శోధక్ సమాజ్",
      "Temple Entry Movement\nఆలయ ప్రవేశ ఉద్యమం",
      "Arya Samaj\nఆర్య సమాజ్",
      "Bahishkrit Hitakarini Sabha\nబహిష్కృత్ హితకారిణి సభ"
    ],
    "correctAnswer": 0,
    "explanation": "సత్య శోధక్ సమాజ్ (సత్యాన్వేషకుల సంఘం) ను 1873లో సంఘ సంస్కర్త జ్యోతిరావ్ ఫులే స్థాపించారు. దీని ప్రధాన లక్ష్యం బ్రాహ్మణ కుల వ్యవస్థ యొక్క దోపిడీ మరియు అణచివేత నుండి నిమ్న కులాల (శూద్రులు మరియు అతిశూద్రులు) హక్కులు మరియు సామాజిక న్యాయం కోసం పోరాడటం మరియు వారిని విముక్తి చేయడం."
  },
  {
    "id": 323,
    "question": "Identify the INCORRECT pair from among the following (TSTET 12 Jan 2025)\nకింది వాటిలో తప్పుగా ఉన్న జతను గుర్తించండి",
    "options": [
      "Vidyanatha - Prataparudra yashobhushanam\nవిద్యానాథుడు - ప్రతాపరుద్ర యశోభూషణం",
      "Palkuriki Somanatha - Basavapurana\nపాల్కురికి సోమనాథుడు - బసవపురాణం",
      "Jayapa Senani - Nritya Ratnavali\nజయప సేనాని - నృత్య రత్నావళి",
      "Rudradeva - Panditharadhya charitra\nరుద్రదేవుడు - పండితారాధ్య చరిత్ర"
    ],
    "correctAnswer": 3,
    "explanation": "'పండితారాధ్య చరిత్ర' అనే గ్రంథాన్ని ప్రసిద్ధ తెలుగు కవి పాల్కురికి సోమనాథుడు రచించారు, ఆయన 'బసవ పురాణం' కూడా రచించారు. దీనిని కాకతీయ పాలకుడైన రుద్రదేవుడు రాయలేదు. మిగిలిన జతలన్నీ సరిగ్గా జతపరచబడ్డాయి."
  },
  {
    "id": 324,
    "question": "Which of the following statement best describes the phrase \"Dogger Bank\"? (TSTET 12 Jan 2025)\nకింది వాటిలో ఏ ప్రకటన \"డాగర్ బ్యాంక్\" అనే పదాన్ని ఉత్తమంగా వివరిస్తుంది?",
    "options": [
      "The part of the North Sea near Great Britain where the fish industry was developed\nగ్రేట్ బ్రిటన్ సమీపంలోని ఉత్తర సముద్ర భాగం, ఇక్కడ చేపల పరిశ్రమ అభివృద్ధి చెందింది",
      "The region between Pyrenees Mountains and Alps Mountains\nపైరినీస్ పర్వతాలు మరియు ఆల్ప్స్ పర్వతాల మధ్య ప్రాంతం",
      "The parts of the sea enclosed by land on three sides\nమూడు వైపులా భూమితో చుట్టుముట్టబడిన సముద్ర భాగాలు",
      "The lands along the Mediterranean Sea\nమధ్యధరా సముద్రం వెంబడి ఉన్న భూములు"
    ],
    "correctAnswer": 0,
    "explanation": "డాగర్ బ్యాంక్ అనేది గ్రేట్ బ్రిటన్ తీరానికి దూరంగా ఉత్తర సముద్రంలో ఉన్న ఒక విశాలమైన, లోతు తక్కువ ఇసుక దిబ్బ. దాని లోతు తక్కువ నీరు దానిని అసాధారణంగా గొప్ప చేపల వేట ప్రాంతంగా చేస్తుంది, ఇది చారిత్రాత్మకంగా కాడ్ మరియు హెర్రింగ్ యొక్క సమృద్ధిగా ఉన్న నిల్వలకు ప్రసిద్ధి చెందింది."
  },
  {
    "id": 325,
    "question": "'Foehn' the Hot Local Winds blow along the northern slopes of these mountain ranges (TSTET 12 Jan 2025)\n'ఫోన్' అనే వేడి స్థానిక పవనాలు ఈ పర్వత శ్రేణుల ఉత్తర వాలుల వెంబడి వీస్తాయి",
    "options": [
      "Alps Mountains\nఆల్ప్స్ పర్వతాలు",
      "Rocky Mountains\nరాకీ పర్వతాలు",
      "Andes Mountains\nఆండీస్ పర్వతాలు",
      "Himalayan Mountains\nహిమాలయ పర్వతాలు"
    ],
    "correctAnswer": 0,
    "explanation": "ఫోన్ (లేదా ఫాన్) అనేది ఒక పర్వత శ్రేణి యొక్క పవనపరాఙ్ముఖ దిశలో (లీవార్డ్ సైడ్) క్రిందికి దిగే ఒక రకమైన వెచ్చని, పొడి గాలి. ఈ దృగ్విషయం ఐరోపాలోని ఆల్ప్స్ పర్వతాల లక్షణం, ఇక్కడ ఈ గాలులు ఉత్తర వాలుల నుండి క్రిందికి వీచి, ఉష్ణోగ్రతలలో వేగవంతమైన పెరుగుదలకు కారణమవుతాయి."
  },
  {
    "id": 326,
    "question": "Savanna Grasslands are mostly grown in these regions (TSTET 12 Jan 2025)\nసవన్నా గడ్డిభూములు ఎక్కువగా ఈ ప్రాంతాలలో పెరుగుతాయి",
    "options": [
      "Mid latitudinal Regions\nమధ్య అక్షాంశ ప్రాంతాలు",
      "Polar Regions\nధ్రువ ప్రాంతాలు",
      "Regions on either side of the Equator and extend to the tropics\nభూమధ్యరేఖకు ఇరువైపులా ఉన్న మరియు ఉష్ణమండలాల వరకు విస్తరించి ఉన్న ప్రాంతాలు",
      "Regions located on Western margins of the continents\nఖండాల పశ్చిమ అంచులలో ఉన్న ప్రాంతాలు"
    ],
    "correctAnswer": 2,
    "explanation": "సవన్నా బయోమ్‌లు సాధారణంగా ఉష్ణమండల ప్రాంతాలలో కనిపిస్తాయి, ఇవి స్పష్టమైన తడి మరియు పొడి కాలాలను కలిగి ఉంటాయి. భౌగోళికంగా, అవి భూమధ్యరేఖ వర్షారణ్యాలు మరియు వేడి ఎడారుల మధ్య, భూమధ్యరేఖకు ఉత్తర మరియు దక్షిణ బెల్టులలో ఉష్ణమండలాల వైపు విస్తరించి ఉన్నాయి."
  },
  {
    "id": 327,
    "question": "Which of the following statement best describes the term \"Grid\"? (TSTET 12 Jan 2025)\nకింది వాటిలో ఏ ప్రకటన \"గ్రిడ్\" అనే పదాన్ని ఉత్తమంగా వివరిస్తుంది?",
    "options": [
      "A network of latitudes and longitudes drawn on a globe\nఒక గ్లోబ్‌పై గీసిన అక్షాంశాలు మరియు రేఖాంశాల నెట్‌వర్క్",
      "An imaginary line that is drawn from the North Pole to the South Pole\nఉత్తర ధ్రువం నుండి దక్షిణ ధ్రువానికి గీసిన ఒక ఊహా రేఖ",
      "The regular path on which the earth goes around the Sun\nభూమి సూర్యుని చుట్టూ తిరిగే సాధారణ మార్గం",
      "The regular path on which the Moon goes around the Earth\nచంద్రుడు భూమి చుట్టూ తిరిగే సాధారణ మార్గం"
    ],
    "correctAnswer": 0,
    "explanation": "భౌగోళిక గ్రిడ్ అనేది భూమి ఉపరితలంపై ఏ ప్రదేశాన్నైనా గుర్తించడానికి రూపొందించిన వ్యవస్థ. ఇది ఊహా రేఖల నెట్‌వర్క్‌ను కలిగి ఉంటుంది: తూర్పు-పడమరలుగా నడిచే అక్షాంశాల సమాంతర రేఖలు మరియు ఉత్తర-దక్షిణాలుగా నడిచే రేఖాంశాల మెరిడియన్లు. వాటి ఖండన ఖచ్చితమైన సమన్వయ-ఆధారిత స్థానాన్ని అనుమతిస్తుంది."
  },
  {
    "id": 328,
    "question": "The reason for the recent earthquakes in Pakistan and Nepal is (TSTET 12 Jan 2025)\nపాకిస్తాన్ మరియు నేపాల్‌లో ఇటీవల సంభవించిన భూకంపాలకు కారణం",
    "options": [
      "The Eurosean Plate subduct the Indian Plate\nయురేషియన్ ప్లేట్ ఇండియన్ ప్లేట్ క్రిందకు చొచ్చుకుపోవడం",
      "The Australian Plate subduct the Indian Plate\nఆస్ట్రేలియన్ ప్లేట్ ఇండియన్ ప్లేట్ క్రిందకు చొచ్చుకుపోవడం",
      "The Indian Plate subduct the Eurosean Plate\nఇండియన్ ప్లేట్ యురేషియన్ ప్లేట్ క్రిందకు చొచ్చుకుపోవడం",
      "The Arabian Plate subduct the Eurosean Plate\nఅరేబియన్ ప్లేట్ యురేషియన్ ప్లేట్ క్రిందకు చొచ్చుకుపోవడం"
    ],
    "correctAnswer": 2,
    "explanation": "నేపాల్ మరియు పాకిస్తాన్‌లోని భాగాలతో సహా మొత్తం హిమాలయ ప్రాంతం, భారత మరియు యురేషియన్ టెక్టోనిక్ ప్లేట్ల మధ్య జరుగుతున్న ఘర్షణ కారణంగా భూకంపపరంగా చురుకుగా ఉంటుంది. ఇండియన్ ప్లేట్ నిరంతరం ఉత్తరం వైపు నెట్టుకుంటూ యురేషియన్ ప్లేట్ కిందకు జారుతోంది (సబ్డక్టింగ్), ఇది భూకంపాలుగా విడుదలయ్యే అపారమైన భౌగోళిక ఒత్తిడిని పెంచుతుంది."
  },
  {
    "id": 329,
    "question": "Among the following, identify the statement that best describes the 'Intrusive Landforms' (TSTET 12 Jan 2025)\nకింది వాటిలో, 'అంతర్గత భూస్వరూపాలు' ను ఉత్తమంగా వివరించే ప్రకటనను గుర్తించండి",
    "options": [
      "Cooling of Lava under the surface without reaching the surface of the earth and becomes rocks\nభూమి ఉపరితలానికి చేరకుండా ఉపరితలం కింద లావా చల్లబడి రాళ్లుగా మారడం",
      "Cooling of lava on the surface of the earth and becomes rocks\nభూమి ఉపరితలంపై లావా చల్లబడి రాళ్లుగా మారడం",
      "Landforms formed as plains\nమైదానాలుగా ఏర్పడిన భూస్వరూపాలు",
      "The landform formed due to internal pressure\nఅంతర్గత పీడనం కారణంగా ఏర్పడిన భూస్వరూపం"
    ],
    "correctAnswer": 0,
    "explanation": "అంతర్గత (లేదా ప్లూటోనిక్) అగ్నిమయ భూస్వరూపాలు మాగ్మా భూమి యొక్క పటలంలో ఉపరితలంపైకి ఉద్గారించకుండా చల్లబడి ఘనీభవించినప్పుడు సృష్టించబడతాయి. ఉదాహరణలలో బాథోలిత్‌లు మరియు లాకోలిత్‌లు వంటి పెద్ద నిర్మాణాలు, అలాగే సిల్ల్స్ మరియు డైక్స్ వంటి పలకల వంటి నిర్మాణాలు ఉన్నాయి."
  },
  {
    "id": 330,
    "question": "The reason for having low pressure at the earth's surface around the equator is (TSTET 12 Jan 2025)\nభూమధ్యరేఖ చుట్టూ భూమి ఉపరితలంపై అల్పపీడనం ఉండటానికి కారణం",
    "options": [
      "Low temperature\nతక్కువ ఉష్ణోగ్రత",
      "Moderate temperature\nమితమైన ఉష్ణోగ్రత",
      "High Rainfall\nఅధిక వర్షపాతం",
      "High temperature\nఅధిక ఉష్ణోగ్రత"
    ],
    "correctAnswer": 3,
    "explanation": "భూమధ్యరేఖ ప్రాంతం ఏడాది పొడవునా తీవ్రమైన మరియు ప్రత్యక్ష సూర్యరశ్మిని పొందుతుంది, ఇది స్థిరంగా అధిక ఉష్ణోగ్రతలకు దారితీస్తుంది. ఈ వేడి ఉపరితల గాలిని వేడి చేస్తుంది, దీనివల్ల అది విస్తరించి, తక్కువ సాంద్రత కలిగి, పైకి లేస్తుంది. గాలి యొక్క ఈ పైకి కదలిక ఉపరితలం వద్ద అల్ప వాతావరణ పీడన పట్టీని సృష్టిస్తుంది, దీనిని డోల్డ్రమ్స్ లేదా ఇంటర్‌ట్రాపికల్ కన్వర్జెన్స్ జోన్ (ITCZ) అని పిలుస్తారు."
  },
  {
    "id": 331,
    "question": "Arrange the following planets in descending order as per their densities (TSTET 12 Jan 2025)\nA) Earth\nB) Mars\nC) Mercury\nD) Venus\nకింది గ్రహాలను వాటి సాంద్రతల ప్రకారం అవరోహణ క్రమంలో అమర్చండి\nA) భూమి\nB) అంగారకుడు\nC) బుధుడు\nD) శుక్రుడు",
    "options": [
      "A, B, C, D",
      "B, A, C, D",
      "A, C, D, B",
      "D, C, B, A"
    ],
    "correctAnswer": 2,
    "explanation": "ఈ భూసంబంధమైన గ్రహాల సుమారు సాంద్రతలు: భూమి (5.51 g/cm³), బుధుడు (5.43 g/cm³), శుక్రుడు (5.24 g/cm³), మరియు అంగారకుడు (3.93 g/cm³). కాబట్టి, అత్యధిక సాంద్రత నుండి అత్యల్ప సాంద్రత వరకు సరైన క్రమం భూమి, బుధుడు, శుక్రుడు, అంగారకుడు (A, C, D, B)."
  },
  {
    "id": 332,
    "question": "These earthquake waves move faster and are the first to arrive at the Surface (TSTET 12 Jan 2025)\nఈ భూకంప తరంగాలు వేగంగా కదులుతాయి మరియు ఉపరితలానికి మొదటగా చేరుకుంటాయి",
    "options": [
      "S waves\nS తరంగాలు",
      "Surface waves\nఉపరితల తరంగాలు",
      "P Waves\nP తరంగాలు",
      "Both S Waves and Surface waves\nS తరంగాలు మరియు ఉపరితల తరంగాలు రెండూ"
    ],
    "correctAnswer": 2,
    "explanation": "P-తరంగాలు, లేదా ప్రాథమిక తరంగాలు, భూమి యొక్క అంతర్భాగం గుండా అత్యంత వేగంగా ప్రయాణించే సంపీడన భూకంప తరంగాలు. వాటి అధిక వేగం కారణంగా, భూకంపం తర్వాత సీస్మోగ్రాఫ్ ద్వారా నమోదు చేయబడిన మొదటి భూకంప తరంగాలు ఇవే."
  },
  {
    "id": 333,
    "question": "In India, wheat is the main food crop in (TSTET 12 Jan 2025)\nభారతదేశంలో, గోధుమ ప్రధాన ఆహార పంటగా ఇక్కడ పండిస్తారు",
    "options": [
      "The plains of North and North eastern India\nఉత్తర మరియు ఈశాన్య భారతదేశ మైదానాలు",
      "Sundarbans delta region and North-eastern part of the country\nసుందర్బన్స్ డెల్టా ప్రాంతం మరియు దేశంలోని ఈశాన్య భాగం",
      "Deccan plateau Region\nదక్కన్ పీఠభూమి ప్రాంతం",
      "North and North-western part of the country\nదేశంలోని ఉత్తర మరియు వాయువ్య భాగం"
    ],
    "correctAnswer": 3,
    "explanation": "గోధుమ భారతదేశంలో ఒక ప్రధాన రబీ (శీతాకాలం) పంట, మరియు దాని సాగు ఉత్తర మరియు వాయువ్య రాష్ట్రాలలో కేంద్రీకృతమై ఉంది. పంజాబ్, హర్యానా, ఉత్తర ప్రదేశ్ మరియు రాజస్థాన్‌లతో సహా ఈ ప్రాంతం, గోధుమ సాగుకు అవసరమైన చల్లని, పొడి వాతావరణాన్ని అందిస్తుంది."
  },
  {
    "id": 334,
    "question": "In the North-West, India shares its land boundary with these countries (TSTET 12 Jan 2025)\nవాయువ్యంలో, భారతదేశం ఈ దేశాలతో తన భూ సరిహద్దును పంచుకుంటుంది",
    "options": [
      "Pakistan and Afghanistan\nపాకిస్తాన్ మరియు ఆఫ్ఘనిస్తాన్",
      "Myanmar and Bangladesh\nమయన్మార్ మరియు బంగ్లాదేశ్",
      "Nepal and Bhutan\nనేపాల్ మరియు భూటాన్",
      "China and Afghanistan\nచైనా మరియు ఆఫ్ఘనిస్తాన్"
    ],
    "correctAnswer": 0,
    "explanation": "భారతదేశం యొక్క వాయువ్య ప్రాంతంలోని భూ సరిహద్దు రెండు దేశాలతో పంచుకోబడింది: పశ్చిమాన పాకిస్తాన్ మరియు సుదూర వాయువ్యంలో (జమ్మూ మరియు కాశ్మీర్ ప్రాంతంలో) ఆఫ్ఘనిస్తాన్‌తో ఒక చిన్న భాగం."
  },
  {
    "id": 335,
    "question": "The Aravali Mountains lie on the (TSTET 12 Jan 2025)\nఆరావళి పర్వతాలు ఇక్కడ ఉన్నాయి",
    "options": [
      "Southern margins of the Peninsular Plateau\nద్వీపకల్ప పీఠభూమి యొక్క దక్షిణ అంచులు",
      "Eastern and North eastern margins of the Peninsular Plateau\nద్వీపకల్ప పీఠభూమి యొక్క తూర్పు మరియు ఈశాన్య అంచులు",
      "Western and north western margins of the peninsular plateau\nద్వీపకల్ప పీఠభూమి యొక్క పశ్చిమ మరియు వాయువ్య అంచులు",
      "Eastern and North eastern margins of the Gangetic Plains\nగంగా మైదానాల తూర్పు మరియు ఈశాన్య అంచులు"
    ],
    "correctAnswer": 2,
    "explanation": "ఆరావళి శ్రేణి, ప్రపంచంలోని పురాతన పర్వత శ్రేణులలో ఒకటి, భారత ద్వీపకల్ప పీఠభూమి యొక్క పశ్చిమ మరియు వాయువ్య అంచున ఉంది. ఇది నైరుతిలో గుజరాత్ నుండి ఈశాన్యంలో ఢిల్లీ వరకు విస్తరించి, సహజ సరిహద్దుగా పనిచేస్తుంది."
  },
  {
    "id": 336,
    "question": "This river rises in the highlands of Chattisgarh and flows through Odisha and reach the Bay of Bengal (TSTET 12 Jan 2025)\nఈ నది ఛత్తీస్‌గఢ్ ఎత్తైన ప్రాంతాలలో ఉద్భవించి, ఒడిశా గుండా ప్రవహించి బంగాళాఖాతంలో కలుస్తుంది",
    "options": [
      "Narmada\nనర్మద",
      "Tapi\nతపి",
      "Mahanadi\nమహానది",
      "Godavari\nగోదావరి"
    ],
    "correctAnswer": 2,
    "explanation": "మహానది ఛత్తీస్‌గఢ్ ఎత్తైన ప్రాంతాలలోని సిహవా కొండల శ్రేణిలో ఉద్భవిస్తుంది. ఇది ఒడిశా రాష్ట్రం గుండా తూర్పు వైపు ప్రవహించి, పెద్ద డెల్టాను ఏర్పరచి బంగాళాఖాతంలో కలుస్తుంది."
  },
  {
    "id": 337,
    "question": "In this region, Sundari trees are found which provide durable hard timber (TSTET 12 Jan 2025)\nఈ ప్రాంతంలో, మన్నికైన గట్టి కలపను అందించే సుందరి చెట్లు కనిపిస్తాయి",
    "options": [
      "The island groups of Andaman & Nicobar\nఅండమాన్ & నికోబార్ దీవుల సమూహాలు",
      "The eastern slopes of the Western Ghats\nపశ్చిమ కనుమల తూర్పు వాలులు",
      "The Ganga and Brahmaputra Delta\nగంగా మరియు బ్రహ్మపుత్ర డెల్టా",
      "Semi-arid areas of Gujarat and Rajasthan\nగుజరాత్ మరియు రాజస్థాన్ యొక్క పాక్షిక శుష్క ప్రాంతాలు"
    ],
    "correctAnswer": 2,
    "explanation": "గంగా-బ్రహ్మపుత్ర డెల్టా ప్రపంచంలోనే అతిపెద్ద మడ అడవి అయిన సుందర్బన్స్‌కు నిలయం. ఈ అడవికి అక్కడ ఎక్కువగా కనిపించే మడ జాతి అయిన సుందరి చెట్టు (హెరిటియెరా ఫోమ్స్) పేరు పెట్టబడింది, ఇది బలమైన, మన్నికైన కలపను ఇస్తుంది."
  },
  {
    "id": 338,
    "question": "The least populous state and Union territory of India are (TSTET 12 Jan 2025)\nభారతదేశంలో అత్యల్ప జనాభా కలిగిన రాష్ట్రం మరియు కేంద్రపాలిత ప్రాంతం",
    "options": [
      "Sikkim and Lakshadweep\nసిక్కిం మరియు లక్షద్వీప్",
      "Mizoram and Andaman & Nicobar Islands\nమిజోరాం మరియు అండమాన్ & నికోబార్ దీవులు",
      "Arunachala Pradesh and Ladakh\nఅరుణాచల్ ప్రదేశ్ మరియు లడఖ్",
      "Meghalaya and Pondicherry\nమేఘాలయ మరియు పాండిచ్చేరి"
    ],
    "correctAnswer": 0,
    "explanation": "భారత జనగణన 2011 ప్రకారం, అత్యల్ప జనాభా కలిగిన రాష్ట్రం సిక్కిం, మరియు అత్యల్ప జనాభా కలిగిన కేంద్రపాలిత ప్రాంతం లక్షద్వీప్."
  },
  {
    "id": 339,
    "question": "This schedule of the Indian constitution was incorporated into the Indian Constitution as per the First Amendment of the Indian Constitution (TSTET 12 Jan 2025)\nభారత రాజ్యాంగంలోని ఈ షెడ్యూల్ భారత రాజ్యాంగం యొక్క మొదటి సవరణ ప్రకారం చేర్చబడింది",
    "options": [
      "12th Schedule\n12వ షెడ్యూల్",
      "7th Schedule\n7వ షెడ్యూల్",
      "9th Schedule\n9వ షెడ్యూల్",
      "10th Schedule\n10వ షెడ్యూల్"
    ],
    "correctAnswer": 2,
    "explanation": "తొమ్మిదవ షెడ్యూల్‌ను 1951 మొదటి సవరణ చట్టం ద్వారా రాజ్యాంగానికి జోడించారు. దాని ఉద్దేశ్యం భూ సంస్కరణలు మరియు దానిలో ఉంచిన ఇతర చట్టాలను న్యాయ సమీక్ష నుండి రక్షించడం, తద్వారా ప్రాథమిక హక్కులను ఉల్లంఘిస్తున్నాయనే కారణంతో వాటిని సవాలు చేయకుండా నిరోధించడం."
  },
  {
    "id": 340,
    "question": "'Meira Paibi' in Meitei language literally can be translated as (TSTET 12 Jan 2025)\nమైతేయి భాషలో 'మీరా పైబీ' అనే పదాన్ని అక్షరాలా ఇలా అనువదించవచ్చు",
    "options": [
      "The women torch bearers\nకాగడాలు ధరించిన మహిళలు",
      "The women with anger\nకోపంతో ఉన్న మహిళలు",
      "The women wearing white dress and demanding peace\nతెల్లని దుస్తులు ధరించి శాంతిని కోరుతున్న మహిళలు",
      "The women with the feeling of regional consciousness for liberation of Manipur\nమణిపూర్ విముక్తి కోసం ప్రాంతీయ చైతన్య భావనతో ఉన్న మహిళలు"
    ],
    "correctAnswer": 0,
    "explanation": "మీరా పైబీ మణిపూర్‌లో ఒక ప్రముఖ మహిళా సామాజిక ఉద్యమం. స్థానిక మైతేయి భాషలో ఈ పదం అక్షరాలా \"కాగడాలు ధరించిన వారు\" అని అనువదిస్తుంది, ఎందుకంటే మహిళా కార్యకర్తలు రాత్రిపూట తమ నిరసన ప్రదర్శనల సమయంలో తరచుగా మండుతున్న కాగడాలను మోసుకెళ్తారు. వారిని పౌర సమాజానికి సంరక్షకులుగా పరిగణిస్తారు."
  },
  {
    "id": 341,
    "question": "Article 13 (1) of the Human Rights is about (TSTET 12 Jan 2025)\nమానవ హక్కుల ఆర్టికల్ 13 (1) దేనికి సంబంధించింది",
    "options": [
      "Everyone has the right to life, liberty and security of person\nప్రతి ఒక్కరికి జీవించే, స్వేచ్ఛ మరియు వ్యక్తిగత భద్రత హక్కు ఉంది",
      "All are equal before the law\nచట్టం ముందు అందరూ సమానులే",
      "No one shall be subjected to arbitrary arrest, detention or exile\nఎవ్వరూ ఏకపక్ష అరెస్ట్, నిర్బంధం లేదా బహిష్కరణకు గురికాకూడదు",
      "Everyone has the right to freedom of movement and residence within the borders of each state\nప్రతి రాష్ట్రం యొక్క సరిహద్దులలో స్వేచ్ఛగా సంచరించడానికి మరియు నివసించడానికి ప్రతి ఒక్కరికి హక్కు ఉంది"
    ],
    "correctAnswer": 3,
    "explanation": "మానవ హక్కుల సార్వత్రిక ప్రకటన (UDHR) యొక్క ఆర్టికల్ 13(1) స్పష్టంగా, \"ప్రతి రాష్ట్రం యొక్క సరిహద్దులలో స్వేచ్ఛగా సంచరించడానికి మరియు నివసించడానికి ప్రతి ఒక్కరికీ హక్కు ఉంది\" అని పేర్కొంటుంది. ఈ హక్కు వ్యక్తిగత స్వేచ్ఛకు ప్రాథమికమైనది."
  },
  {
    "id": 342,
    "question": "The basis for the creation of the Election Commission of India (TSTET 12 Jan 2025)\nభారత ఎన్నికల సంఘం ఏర్పాటుకు ఆధారం",
    "options": [
      "Representation of people's Act, 1950\nప్రజా ప్రాతినిధ్య చట్టం, 1950",
      "Indian Constitution\nభారత రాజ్యాంగం",
      "Parliament Act, 1950\nపార్లమెంట్ చట్టం, 1950",
      "Supreme Court judgement in 1976\n1976లో సుప్రీంకోర్టు తీర్పు"
    ],
    "correctAnswer": 1,
    "explanation": "భారత ఎన్నికల సంఘం నేరుగా రాజ్యాంగం ద్వారా ఏర్పాటు చేయబడిన ఒక రాజ్యాంగబద్ధమైన సంస్థ. భారత రాజ్యాంగంలోని ఆర్టికల్ 324 దాని సృష్టి, కూర్పు మరియు విధులను అందిస్తుంది, ఎన్నికల పర్యవేక్షణ, నిర్దేశం మరియు నియంత్రణ అధికారాన్ని దానికి అప్పగిస్తుంది."
  },
  {
    "id": 343,
    "question": "Ensuring the ability of the earth to nurture life in all its diversity' was the aim of this movement (TSTET 12 Jan 2025)\n'భూమి తన వైవిధ్యమంతటిలో జీవాన్ని పోషించగల సామర్థ్యాన్ని నిర్ధారించడం' ఈ ఉద్యమం యొక్క లక్ష్యం",
    "options": [
      "Greenpeace Movement\nగ్రీన్‌పీస్ ఉద్యమం",
      "Civil Rights Movement\nపౌర హక్కుల ఉద్యమం",
      "Silent Valley Movement\nసైలెంట్ వ్యాలీ ఉద్యమం",
      "Narmada Bachao Movement\nనర్మదా బచావో ఉద్యమం"
    ],
    "correctAnswer": 0,
    "explanation": "గ్రీన్‌పీస్ అనేది \"భూమి తన వైవిధ్యమంతటిలో జీవాన్ని పోషించగల సామర్థ్యాన్ని నిర్ధారించడం\" అనే లక్ష్యంతో పనిచేసే ఒక అంతర్జాతీయ పర్యావరణ సంస్థ. ఇది అహింసాత్మక ప్రత్యక్ష చర్య మరియు వాదోపవాదాల ద్వారా విస్తృత శ్రేణి ప్రపంచ పర్యావరణ సమస్యలపై ప్రచారం చేస్తుంది."
  },
  {
    "id": 344,
    "question": "The president of USSR who initiated a process of reform called Glasnost to bring greater freedom for the people (TSTET 12 Jan 2025)\nప్రజలకు ఎక్కువ స్వేచ్ఛను తీసుకురావడానికి గ్లాస్నోస్ట్ అనే సంస్కరణల ప్రక్రియను ప్రారంభించిన USSR అధ్యక్షుడు",
    "options": [
      "Mikhail Kalinin\nమిఖాయిల్ కలినిన్",
      "Nikolai Shvernik\nనికోలాయ్ శ్వెర్నిక్",
      "Kliment Voroshilov\nక్లిమెంట్ వోరోషిలోవ్",
      "Michael Gorbachev\nమైఖేల్ గోర్బచెవ్"
    ],
    "correctAnswer": 3,
    "explanation": "సోవియట్ యూనియన్ యొక్క చివరి నాయకుడైన మిఖాయిల్ గోర్బచెవ్, 1980ల చివరలో 'గ్లాస్నోస్ట్' ('బహిరంగత' అని అర్థం) విధానాన్ని ప్రవేశపెట్టారు. ఈ విధానం పారదర్శకత మరియు సమాచార స్వేచ్ఛను పెంచడం లక్ష్యంగా పెట్టుకుంది, ఇది ప్రభుత్వంపై ఎక్కువ ప్రజా చర్చ మరియు విమర్శలకు అనుమతించింది, ఇది మునుపటి సోవియట్ విధానాల నుండి గణనీయమైన మార్పు."
  },
  {
    "id": 345,
    "question": "The aims and objectives of the Indian Constitution are incorporated in (TSTET 12 Jan 2025)\nభారత రాజ్యాంగం యొక్క లక్ష్యాలు మరియు ఆశయాలు ఇందులో పొందుపరచబడ్డాయి",
    "options": [
      "Fundamental Rights\nప్రాథమిక హక్కులు",
      "Directive Principles of State Policy\nఆదేశిక సూత్రాలు",
      "Preamble of the Indian Constitution\nభారత రాజ్యాంగ పీఠిక",
      "Fundamental Duties of a Citizen\nపౌరుడి ప్రాథమిక విధులు"
    ],
    "correctAnswer": 2,
    "explanation": "పీఠిక భారత రాజ్యాంగానికి ముందుమాటగా పనిచేస్తుంది, దాని ప్రధాన తత్వశాస్త్రం, మార్గదర్శక సూత్రాలు మరియు లక్ష్యాలను సంగ్రహిస్తుంది. ఇది రాజ్యాంగం తన పౌరులకు సాధించాలని కోరుకునే న్యాయం, స్వేచ్ఛ, సమానత్వం మరియు సౌభ్రాతృత్వం యొక్క ఆదర్శాలను వివరిస్తుంది."
  },
  {
    "id": 346,
    "question": "The Indian Parliament CAN NOT amend one of the following parts of the Indian Constitution by a simple majority (TSTET 12 Jan 2025)\nభారత పార్లమెంటు భారత రాజ్యాంగంలోని కింది భాగాలలో ఒకదానిని సాధారణ మెజారిటీతో సవరించలేదు",
    "options": [
      "The formation of new states\nకొత్త రాష్ట్రాల ఏర్పాటు",
      "Changing the boundaries of states\nరాష్ట్రాల సరిహద్దులను మార్చడం",
      "Rules regarding citizenship\nపౌరసత్వానికి సంబంధించిన నియమాలు",
      "The matters related to Directive Principles of State Policy\nఆదేశిక సూత్రాలకు సంబంధించిన విషయాలు"
    ],
    "correctAnswer": 3,
    "explanation": "ఆదేశిక సూత్రాలను (DPSP) సవరించడానికి ఆర్టికల్ 368 ప్రకారం ప్రత్యేక మెజారిటీ అవసరం, ఇందులో ప్రతి సభ యొక్క మొత్తం సభ్యత్వంలో మెజారిటీ మరియు హాజరైన మరియు ఓటు వేసిన సభ్యులలో మూడింట రెండు వంతుల మెజారిటీ ఉంటుంది. దీనికి విరుద్ధంగా, రాష్ట్ర ఏర్పాటు, సరిహద్దు మార్పులు మరియు పౌరసత్వ నియమాలు వంటి విషయాలను పార్లమెంటు సాధారణ మెజారిటీతో మార్చవచ్చు."
  },
  {
    "id": 347,
    "question": "Who certifies whether the bill is a money bill or not before sending it to the President of India? (TSTET 12 Jan 2025)\nఒక బిల్లును భారత రాష్ట్రపతికి పంపే ముందు అది ద్రవ్య బిల్లు అవునో కాదో ఎవరు ధృవీకరిస్తారు?",
    "options": [
      "The Finance Minister\nఆర్థిక మంత్రి",
      "The Parliamentary Affairs Minister\nపార్లమెంటరీ వ్యవహారాల మంత్రి",
      "The Speaker of Lok Sabha\nలోక్‌సభ స్పీకర్",
      "The Chairman of Rajya Sabha\nరాజ్యసభ ఛైర్మన్"
    ],
    "correctAnswer": 2,
    "explanation": "భారత రాజ్యాంగంలోని ఆర్టికల్ 110(3) ప్రకారం, ఒక బిల్లు ద్రవ్య బిల్లు అవునో కాదో నిర్ణయించే తుది అధికారం లోక్‌సభ స్పీకర్‌కు ఉంటుంది. స్పీకర్ యొక్క ధృవీకరణ అంతిమమైనది మరియు దానిని న్యాయస్థానంలో లేదా పార్లమెంటులోని ఏ సభలోనూ సవాలు చేయలేరు."
  },
  {
    "id": 348,
    "question": "The President can summon a joint sitting of both the houses of parliament, in case of (TSTET 12 Jan 2025)\nఈ సందర్భంలో రాష్ట్రపతి పార్లమెంటు ఉభయ సభల సంయుక్త సమావేశాన్ని ఏర్పాటు చేయవచ్చు",
    "options": [
      "a deadlock between the two houses over the ordinary bill\nసాధారణ బిల్లుపై రెండు సభల మధ్య ప్రతిష్టంభన",
      "a deadlock between the two houses over the Money bill\nద్రవ్య బిల్లుపై రెండు సభల మధ్య ప్రతిష్టంభన",
      "a deadlock between the two houses over the Money bill and the ordinary bill\nద్రవ్య బిల్లు మరియు సాధారణ బిల్లుపై రెండు సభల మధ్య ప్రతిష్టంభన",
      "a bill is not reflecting the aims and aspirations of the common people of India\nఒక బిల్లు భారత సామాన్య ప్రజల లక్ష్యాలు మరియు ఆకాంక్షలను ప్రతిబింబించనప్పుడు"
    ],
    "correctAnswer": 0,
    "explanation": "రాజ్యాంగంలోని ఆర్టికల్ 108 ప్రకారం, ఒక సాధారణ శాసన బిల్లుపై లోక్‌సభ మరియు రాజ్యసభ మధ్య వివాదాన్ని పరిష్కరించడానికి రాష్ట్రపతి సంయుక్త సమావేశాన్ని పిలవవచ్చు. ఈ నిబంధన ద్రవ్య బిల్లులకు లేదా రాజ్యాంగ సవరణ బిల్లులకు వర్తించదు."
  },
  {
    "id": 349,
    "question": "The main objective of this evaluation is to find out the nature and cause of the persistent learning problems and to formulate a plan for seeking suitable remedial actions. (TSTET 12 Jan 2025)\nనిరంతర అభ్యసన సమస్యల స్వభావాన్ని మరియు కారణాన్ని కనుగొనడం మరియు తగిన నివారణ చర్యలను కోరుతూ ఒక ప్రణాళికను రూపొందించడం ఈ మూల్యాంకనం యొక్క ప్రధాన లక్ష్యం.",
    "options": [
      "Formative evaluation\nనిర్మాణాత్మక మూల్యాంకనం",
      "Summative evaluation\nసంగ్రహణాత్మక మూల్యాంకనం",
      "Diagnostic evaluation\nలోపనిర్ధారణ మూల్యాంకనం",
      "Prognostic evaluation\nప్రాగణన మూల్యాంకనం"
    ],
    "correctAnswer": 2,
    "explanation": "లోపనిర్ధారణ మూల్యాంకనం ప్రత్యేకంగా ఒక విద్యార్థి యొక్క అభ్యసన ఇబ్బందుల యొక్క అంతర్లీన కారణాలను గుర్తించడానికి మరియు అర్థం చేసుకోవడానికి రూపొందించబడింది. దీని లక్ష్యం లక్ష్యిత నివారణ బోధన మరియు మద్దతు అభివృద్ధికి తెలియజేయడానికి బలహీనత యొక్క నిర్దిష్ట ప్రాంతాలను గుర్తించడం."
  },
  {
    "id": 350,
    "question": "Based on the following themes, the lessons in present class-VIII Social studies textbook of Telangana State are developed (TSTET 12 Jan 2025)\nA) Diversity on the earth\nB) Natural Realms of the Earth and Economy\nC) Culture and communication\nD) Religion and Society\nE) Political Systems and Governance\nకింది ఇతివృత్తాల ఆధారంగా, తెలంగాణ రాష్ట్రంలోని ప్రస్తుత VIIIవ తరగతి సాంఘిక శాస్త్ర పాఠ్యపుస్తకంలోని పాఠాలు అభివృద్ధి చేయబడ్డాయి\nA) భూమిపై వైవిధ్యం\nB) భూమి యొక్క సహజ రంగాలు మరియు ఆర్థిక వ్యవస్థ\nC) సంస్కృతి మరియు సమాచార ప్రసారం\nD) మతం మరియు సమాజం\nE) రాజకీయ వ్యవస్థలు మరియు పరిపాలన",
    "options": [
      "A, B C & D only\nA, B C & D మాత్రమే",
      "A, C, D & E only\nA, C, D & E మాత్రమే",
      "B, C, D & E only\nB, C, D & E మాత్రమే",
      "A, B C, D & E\nA, B C, D & E"
    ],
    "correctAnswer": 1,
    "explanation": "తెలంగాణ రాష్ట్ర SCERT సాంఘిక శాస్త్ర పాఠ్యపుస్తకాలు ప్రతి తరగతికి కీలక ఇతివృత్తాల చుట్టూ నిర్వహించబడ్డాయి. VIIIవ తరగతికి, ప్రధాన ఇతివృత్తాలు: భూమిపై వైవిధ్యం; ఉత్పత్తి, మార్పిడి మరియు జీవనోపాధులు; రాజకీయ వ్యవస్థలు మరియు పరిపాలన; సామాజిక సంస్థ మరియు అసమానతలు; మరియు మతం మరియు సమాజం. A, C, D, మరియు E ఎంపికలు ఈ అధికారిక ఇతివృత్తాలకు అనుగుణంగా ఉన్నాయి."
  },
  {
    "id": 351,
    "question": "Comparing to the other approaches, the following teaching learning approach provides more scope for experiential learning and to act the teacher as a facilitator (TSTET 12 Jan 2025)\nఇతర విధానాలతో పోలిస్తే, క్రింది బోధన అభ్యాసన విధానం అనుభవాత్మక అభ్యాసానికి మరియు ఉపాధ్యాయుడు ఒక ఫెసిలిటేటర్‌గా వ్యవహరించడానికి ఎక్కువ అవకాశాన్ని అందిస్తుంది (TSTET 12 Jan 2025)",
    "options": [
      "Teacher centric approach\nఉపాధ్యాయ కేంద్రిత విధానం",
      "Subject centric approach\nవిషయ కేంద్రిత విధానం",
      "Behaviouristic approach\nప్రవర్తనావాద విధానం",
      "Constructivistic approach\nనిర్మాణాత్మక విధానం"
    ],
    "correctAnswer": 3,
    "explanation": "నిర్మాణాత్మక విధానం ప్రకారం, అభ్యాసకులు అనుభవాలు మరియు పరస్పర చర్యల ద్వారా తమ సొంత అవగాహన మరియు జ్ఞానాన్ని చురుకుగా నిర్మించుకుంటారు. ఈ నమూనాలో, ఉపాధ్యాయుని పాత్ర కేవలం సమాచారాన్ని అందించడం కాదు, అన్వేషణ, విచారణ మరియు అనుభవాత్మక అభ్యాసానికి అవకాశాలను సృష్టించడం ద్వారా అభ్యాస ప్రక్రియను సులభతరం చేయడం."
  },
  {
    "id": 352,
    "question": "The following teaching methods are more helpful to the social studies teacher to teach the concepts about, 'Social formation in Indian History'. (TSTET 12 Jan 2025)\n'భారత చరిత్రలో సామాజిక నిర్మాణం' గురించిన భావనలను బోధించడానికి సాంఘిక శాస్త్ర ఉపాధ్యాయునికి క్రింది బోధనా పద్ధతులు మరింత సహాయకరంగా ఉంటాయి. (TSTET 12 Jan 2025)",
    "options": [
      "Anecdotal and Evolution methods\nసంఘటనాత్మక మరియు పరిణామ పద్ధతులు",
      "Play way and Project methods\nఆట పద్ధతి మరియు ప్రాజెక్ట్ పద్ధతులు",
      "Discussion and Problem solving methods\nచర్చ మరియు సమస్య పరిష్కార పద్ధతులు",
      "Inductive and Deductive methods\nఆగమన మరియు నిగమన పద్ధతులు"
    ],
    "correctAnswer": 0,
    "explanation": "'సామాజిక నిర్మాణం' అర్థం చేసుకోవడానికి సుదీర్ఘ కాలంలో మార్పులను గుర్తించడం అవసరం. ఈ చారిత్రక అభివృద్ధిని చూపించడానికి పరిణామ పద్ధతి ఆదర్శంగా ఉంటుంది. కథలు మరియు నిర్దిష్ట ఉదాహరణలను ఉపయోగించే సంఘటనాత్మక పద్ధతి, ఈ నైరూప్య పరిణామ ప్రక్రియలను వివరించడంలో సహాయపడుతుంది, వాటిని విద్యార్థులకు మరింత అర్థమయ్యేలా మరియు ఆసక్తికరంగా చేస్తుంది."
  },
  {
    "id": 353,
    "question": "By teaching the biographics of social reformers, Freedom Fighters and Social Scientists; the teacher can inculcate these values among students (TSTET 12 Jan 2025)\nసాంఘిక సంస్కర్తలు, స్వాతంత్ర్య సమరయోధులు మరియు సామాజిక శాస్త్రవేత్తల జీవిత చరిత్రలను బోధించడం ద్వారా, ఉపాధ్యాయుడు విద్యార్థులలో ఈ విలువలను పెంపొందించగలడు (TSTET 12 Jan 2025)",
    "options": [
      "Aesthetic values\nసౌందర్యాత్మక విలువలు",
      "Inspirative values\nస్ఫూర్తిదాయక విలువలు",
      "Utilising Leisure time\nవిశ్రాంతి సమయాన్ని సద్వినియోగం చేసుకోవడం",
      "Vocational values\nవృత్తిపరమైన విలువలు"
    ],
    "correctAnswer": 1,
    "explanation": "గొప్ప చారిత్రక వ్యక్తుల జీవిత కథలు నైతిక విద్యకు శక్తివంతమైన సాధనాలు. అవి విద్యార్థులకు ధైర్యం, త్యాగం, సమగ్రత మరియు సామాజిక నిబద్ధతకు ఉదాహరణలను అందిస్తాయి. ఈ బహిర్గతం విద్యార్థులను ప్రేరేపించడానికి, సానుకూల విలువలు మరియు ఉద్దేశ్యాన్ని పెంపొందించుకోవడానికి ప్రోత్సహించడానికి ఉద్దేశించబడింది."
  },
  {
    "id": 354,
    "question": "Match the following List - A with List - B. (TSTET 12 Jan 2025)\nList-A (Social Scientists)\nA) Vishnu Gupta\nB) Amerthya Sen\nC) Columbus\nD) Max Weber\nList-B (Contributions)\ni) Politics as a vocation\nii) Economics\niii) Economics and Social Justice\niv) Villa-d-La-Navidad settlement\nకింది జాబితా - Aను జాబితా - Bతో జతపరచండి. (TSTET 12 Jan 2025)\nజాబితా-A (సామాజిక శాస్త్రవేత్తలు)\nA) విష్ణు గుప్తుడు\nB) అమర్త్య సేన్\nC) కొలంబస్\nD) మాక్స్ వెబర్\nజాబితా-B (రచనలు/కృషి)\ni) రాజకీయాలు ఒక వృత్తిగా\nii) అర్థశాస్త్రం\niii) ఆర్థికశాస్త్రం మరియు సామాజిక న్యాయం\niv) విల్లా-డి-లా-నావిడాడ్ స్థావరం",
    "options": [
      "A-ii; B-iv; C-i; D-iii",
      "A-iii; B-iv; C-i; D-ii",
      "A-iii; B-ii; C-iv; D-i",
      "A-ii; B-iii; C-iv; D-i"
    ],
    "correctAnswer": 3,
    "explanation": "సరైన జతలు: A) విష్ణు గుప్తుడు (చాణక్యుడు) 'అర్థశాస్త్రం' రాశాడు, ఇది రాజనీతి మరియు ఆర్థిక విధానంపై ఒక ప్రాచీన గ్రంథం, దీనిని విస్తృతంగా 'అర్థశాస్త్రం' (ii) అని పిలుస్తారు. B) అమర్త్య సేన్ సంక్షేమ అర్థశాస్త్రం మరియు సామాజిక న్యాయంపై దృష్టి సారించిన నోబెల్ బహుమతి గ్రహీత (iii). C) కొలంబస్ హిస్పానియోలాలో లా నావిడాడ్ అనే స్వల్పకాలిక స్థావరాన్ని స్థాపించాడు (iv). D) మాక్స్ వెబర్ 'రాజకీయాలు ఒక వృత్తిగా' అనే ప్రసిద్ధ ఉపన్యాసం ఇచ్చారు (i)."
  },
  {
    "id": 355,
    "question": "Among the following, which are correct statements regarding the aims and objectives of social studies (TSTET 12 Jan 2025)\nA) Objectives are specific and short time achievable\nB) Aims are steps to achieve the objectives\nC) Aims are general and short time achievable\nD) Objectives have temporary values than aims\nసాంఘిక శాస్త్రం యొక్క లక్ష్యాలు మరియు ఉద్దేశ్యాలకు సంబంధించి క్రింది వాటిలో ఏవి సరైన ప్రకటనలు (TSTET 12 Jan 2025)\nA) ఉద్దేశ్యాలు నిర్దిష్టమైనవి మరియు తక్కువ సమయంలో సాధించగలవి\nB) లక్ష్యాలు అనేవి ఉద్దేశ్యాలను సాధించడానికి సోపానాలు\nC) లక్ష్యాలు సాధారణమైనవి మరియు తక్కువ సమయంలో సాధించగలవి\nD) లక్ష్యాలతో పోలిస్తే ఉద్దేశ్యాలు తాత్కాలిక విలువలను కలిగి ఉంటాయి",
    "options": [
      "A & D only\nA & D మాత్రమే",
      "A & C only\nA & C మాత్రమే",
      "B, C & D only\nB, C & D మాత్రమే",
      "B & C only\nB & C మాత్రమే"
    ],
    "correctAnswer": 0,
    "explanation": "బోధనా శాస్త్రంలో, లక్ష్యాలు విస్తృతమైన, దీర్ఘకాలిక గమ్యాలు, అయితే ఉద్దేశ్యాలు నిర్దిష్టమైనవి, కొలవదగినవి మరియు సాధించగల స్వల్పకాలిక లక్ష్యాలు. అందువల్ల, ప్రకటన A సరైనది, ఎందుకంటే ఉద్దేశ్యాలు నిర్దిష్టమైనవి మరియు ఒక పాఠం లేదా యూనిట్‌లో సాధించగలవు. ప్రకటన D కూడా సరైనది, ఎందుకంటే ఉద్దేశ్యాలు తక్షణ బోధనా లక్ష్యాలకు ముడిపడి ఉంటాయి, అయితే లక్ష్యాలు విస్తృతమైన, శాశ్వత విలువలను సూచిస్తాయి. ప్రకటనలు B మరియు C లక్ష్యాల సంబంధాన్ని మరియు కాలక్రమాన్ని తప్పుగా నిర్వచించాయి."
  },
  {
    "id": 356,
    "question": "A class - IX, student of Srikakulam district came to Dilsukhnagar (Hyderbad) first time; and reached his relatives home at Gachibowli (Hyderabad) with the help of route map of the city. It is reflecting the following ability of him. (TSTET 12 Jan 2025)\nశ్రీకాకుళం జిల్లాకు చెందిన 9వ తరగతి విద్యార్థి మొదటిసారిగా దిల్‍సుఖ్‍నగర్ (హైదరాబాద్) వచ్చాడు; మరియు నగరం యొక్క రూట్ మ్యాప్ సహాయంతో గచ్చిబౌలి (హైదరాబాద్)లోని తన బంధువుల ఇంటికి చేరుకున్నాడు. ఇది అతని క్రింది సామర్థ్యాన్ని ప్రతిబింబిస్తుంది. (TSTET 12 Jan 2025)",
    "options": [
      "Map drawing\nపటం గీయడం",
      "Map pointing\nపటంలో గుర్తించడం",
      "Map reading\nపట పఠనం",
      "Map making\nపటం తయారుచేయడం"
    ],
    "correctAnswer": 2,
    "explanation": "విద్యార్థి ముందుగా ఉన్న పటాన్ని విజయవంతంగా ఉపయోగించి చిహ్నాలను అర్థం చేసుకుని, మార్గాలను తెలుసుకుని, గమ్యస్థానానికి చేరుకున్నాడు. ఒక నిర్దిష్ట ప్రయోజనం కోసం పటం నుండి సమాచారాన్ని సంగ్రహించి, వర్తింపజేసే ఈ ప్రక్రియను పట పఠనం అంటారు. ఇది ఒక కీలకమైన భౌగోళిక నైపుణ్యం."
  },
  {
    "id": 357,
    "question": "This method helps more to the social studies teacher to inculcate real life learning experiences by teaching political science (TSTET 12 Jan 2025)\nరాజనీతి శాస్త్రాన్ని బోధించడం ద్వారా నిజ జీవిత అభ్యాస అనుభవాలను పెంపొందించడానికి సాంఘిక శాస్త్ర ఉపాధ్యాయునికి ఈ పద్ధతి ఎక్కువగా సహాయపడుతుంది (TSTET 12 Jan 2025)",
    "options": [
      "Simulation method\nఅనుకరణ పద్ధతి",
      "Lecture method\nఉపన్యాస పద్ధతి",
      "Story telling method\nకథాకథన పద్ధతి",
      "Lecture cum Demonstration method\nఉపన్యాస-ప్రదర్శన పద్ధతి"
    ],
    "correctAnswer": 0,
    "explanation": "అనుకరణ అనేది అభ్యాసకులు అనుభవించడానికి వాస్తవ-ప్రపంచ పరిస్థితి యొక్క నమూనాను సృష్టించడం. రాజనీతి శాస్త్రంలో, మాక్ పార్లమెంట్, మోడల్ UN లేదా ఎన్నికలలో పాత్ర పోషించడం వంటి కార్యకలాపాలు విద్యార్థులకు రాజకీయ ప్రక్రియల ప్రత్యక్ష అనుభవాన్ని అందిస్తాయి, ఉపన్యాసాల వంటి నిష్క్రియాత్మక పద్ధతుల కంటే అభ్యాసాన్ని మరింత ఆసక్తికరంగా మరియు వాస్తవికంగా చేస్తాయి."
  },
  {
    "id": 358,
    "question": "A social studies teacher should acquire the ability of using the following technique for introducing a lesson (TSTET 12 Jan 2025)\nA) Story telling\nB) Experimentation\nC) Dramatisation\nD) Using Audio-Visual aids\nE) Narration\nఒక సాంఘిక శాస్త్ర ఉపాధ్యాయుడు పాఠాన్ని పరిచయం చేయడానికి క్రింది పద్ధతిని ఉపయోగించే సామర్థ్యాన్ని పొందాలి (TSTET 12 Jan 2025)\nA) కథ చెప్పడం\nB) ప్రయోగాలు చేయడం\nC) నాటకీకరణ\nD) దృశ్య-శ్రవణ పరికరాలను ఉపయోగించడం\nE) కథనం",
    "options": [
      "A, B, D & E",
      "A, C, D & E only\nA, C, D & E మాత్రమే",
      "A, B, C, D & E",
      "B, C, D & E only\nB, C, D & E మాత్రమే"
    ],
    "correctAnswer": 1,
    "explanation": "ప్రభావవంతమైన పాఠ పరిచయాలు విద్యార్థుల దృష్టిని ఆకర్షిస్తాయి మరియు అభ్యాసానికి వేదికను సిద్ధం చేస్తాయి. కథ చెప్పడం, నాటకీకరణ, దృశ్య-శ్రవణ పరికరాలను ఉపయోగించడం మరియు కథనం అన్నీ సాంఘిక శాస్త్ర సందర్భంలో విద్యార్థులను నిమగ్నం చేయడానికి అద్భుతమైన పద్ధతులు. ప్రయోగాలు చేయడం అనేది ప్రాథమికంగా సైన్స్‌లో ఉపయోగించే ఒక పద్ధతి మరియు సాంఘిక శాస్త్ర అంశాన్ని పరిచయం చేయడానికి ఇది ఒక సాధారణ పద్ధతి కాదు."
  },
  {
    "id": 359,
    "question": "Match the following List A with List - B. (TSTET 12 Jan 2025)\nList -A (Teaching Aids)\nA) Projective aid\nB) Three dimensional aid\nC) Display aid\nD) Activity aid\nList -B (Examples)\ni) Field trip\nii) Slide\niii) Model\niv) Black board\nకింది జాబితా A ను జాబితా - Bతో జతపరచండి. (TSTET 12 Jan 2025)\nజాబితా-A (బోధనోపకరణాలు)\nA) ప్రక్షేపక ఉపకరణం\nB) త్రిమితీయ ఉపకరణం\nC) ప్రదర్శన ఉపకరణం\nD) కార్యాచరణ ఉపకరణం\nజాబితా-B (ఉదాహరణలు)\ni) క్షేత్ర పర్యటన\nii) స్లైడ్\niii) నమూనా\niv) నల్లబల్ల",
    "options": [
      "A-iii; B-ii; C-iv; D-i",
      "A-ii; B-iv; C-i; D-iii",
      "A-iii; B-iv; C-ii; D-i",
      "A-ii; B-iii; C-iv; D-i"
    ],
    "correctAnswer": 3,
    "explanation": "సరైన జతలు: A) స్లైడ్ వంటి ప్రక్షేపక ఉపకరణాన్ని చూడటానికి ప్రొజెక్షన్ అవసరం (ii). B) నమూనా వంటి త్రిమితీయ ఉపకరణం ఎత్తు, వెడల్పు మరియు లోతును కలిగి ఉంటుంది (iii). C) నల్లబల్ల వంటి ప్రదర్శన ఉపకరణం సమాచారాన్ని దృశ్యమానంగా ప్రదర్శించడానికి ఉపయోగించబడుతుంది (iv). D) క్షేత్ర పర్యటన వంటి కార్యాచరణ ఉపకరణం చురుకైన భాగస్వామ్యం మరియు ప్రత్యక్ష అనుభవాన్ని కలిగి ఉంటుంది (i)."
  },
  {
    "id": 360,
    "question": "Social studies teacher conducted plantation, clean and green programmes in the village with class-9 students. Here the teacher (TSTET 12 Jan 2025)\nసాంఘిక శాస్త్ర ఉపాధ్యాయుడు 9వ తరగతి విద్యార్థులతో గ్రామంలో మొక్కలు నాటడం, స్వచ్ఛత మరియు పచ్చదనం కార్యక్రమాలను నిర్వహించాడు. ఇక్కడ ఉపాధ్యాయుడు (TSTET 12 Jan 2025)",
    "options": [
      "Organised school camp\nపాఠశాల శిబిరాన్ని నిర్వహించాడు",
      "Taken the school to community\nపాఠశాలను సమాజంలోకి తీసుకెళ్లాడు",
      "Bring the community to school\nసమాజాన్ని పాఠశాలకు తీసుకువచ్చాడు",
      "Organised field trip\nక్షేత్ర పర్యటనను నిర్వహించాడు"
    ],
    "correctAnswer": 1,
    "explanation": "మొక్కలు నాటడం మరియు పరిశుభ్రత డ్రైవ్‌ల వంటి సమాజ ఆధారిత కార్యకలాపాలను నిర్వహించడం ద్వారా, ఉపాధ్యాయుడు విద్యా ప్రక్రియను పాఠశాల భౌతిక సరిహద్దులకు మించి విస్తరిస్తున్నాడు. ఈ చర్య తరగతి గది అభ్యాసాన్ని వాస్తవ-ప్రపంచ సామాజిక బాధ్యతతో అనుసంధానిస్తుంది, తద్వారా 'పాఠశాలను సమాజంలోకి తీసుకెళ్లడం' మరియు విద్యార్థులలో పౌర నిమగ్నత భావాన్ని పెంపొందించడం."
  },
  {
    "id": 361,
    "question": "This layer of the atmosphere absorbs ultra violet radiation and shields life on the earth from intense, harmful form of energy (TSTET 28 June 2025)\nవాతావరణంలోని ఈ పొర అతినీలలోహిత కిరణాలను గ్రహించి, భూమిపై జీవరాశిని తీవ్రమైన, హానికరమైన శక్తి రూపం నుండి కాపాడుతుంది (TSTET 28 June 2025)",
    "options": [
      "Troposphere\nట్రోపో ఆవరణం",
      "Stratosphere\nస్ట్రాటో ఆవరణం",
      "Mesosphere\nమీసో ఆవరణం",
      "Thermosphere\nథర్మో ఆవరణం"
    ],
    "correctAnswer": 1,
    "explanation": "స్ట్రాటో ఆవరణంలో ఓజోన్ పొర ఉంటుంది, ఇది సూర్యుని నుండి వచ్చే హానికరమైన అతినీలలోహిత (UV) కిరణాలలో అధిక భాగాన్ని గ్రహించడానికి బాధ్యత వహిస్తుంది, తద్వారా భూమిపై జీవరాశిని రక్షిస్తుంది."
  },
  {
    "id": 362,
    "question": "In 2002, this right became a part of the 'Right to Life' (TSTET 28 June 2025)\n2002లో, ఈ హక్కు 'జీవించే హక్కు'లో భాగమైంది (TSTET 28 June 2025)",
    "options": [
      "Right to Primary Education\nప్రాథమిక విద్యా హక్కు",
      "Right to Work\nపని హక్కు",
      "Right to Higher Education\nఉన్నత విద్యా హక్కు",
      "Right to form Associations\nసంఘాలు ఏర్పాటు చేసుకునే హక్కు"
    ],
    "correctAnswer": 0,
    "explanation": "2002లో 86వ రాజ్యాంగ సవరణ చట్టం ద్వారా, ఆర్టికల్ 21-A భారత రాజ్యాంగంలో చేర్చబడింది, ఇది 6 నుండి 14 సంవత్సరాల వయస్సు గల పిల్లలకు ఉచిత మరియు నిర్బంధ విద్యను ప్రాథమిక హక్కుగా మార్చింది. సుప్రీంకోర్టు దీనిని ఆర్టికల్ 21 ప్రకారం జీవించే హక్కులో అంతర్భాగంగా వ్యాఖ్యానించింది."
  },
  {
    "id": 363,
    "question": "The famous valley of Kashmir, running over a distance of about 135 km in south-east to north-west direction, lies in between these ranges (TSTET 28 June 2025)\nప్రసిద్ధ కాశ్మీర్ లోయ, ఆగ్నేయం నుండి వాయువ్యం దిశగా సుమారు 135 కిలోమీటర్ల దూరం విస్తరించి, ఈ శ్రేణుల మధ్య ఉంది (TSTET 28 June 2025)",
    "options": [
      "The Hindu Kush Mountain Ranges and the Zaskar Range\nహిందూ కుష్ పర్వత శ్రేణులు మరియు జాస్కర్ శ్రేణి",
      "The Karakoram Mountain Range and the Kunlun Mountain Range\nకారకోరం పర్వత శ్రేణి మరియు కున్లున్ పర్వత శ్రేణి",
      "The Pir Panjal Range and the Zaskar Range\nపీర్ పంజాల్ శ్రేణి మరియు జాస్కర్ శ్రేణి",
      "The Hindu Kush Mountain Ranges and the Pamir Knot\nహిందూ కుష్ పర్వత శ్రేణులు మరియు పామీర్ ముడి"
    ],
    "correctAnswer": 2,
    "explanation": "కాశ్మీర్ లోయ ఒక అంతర పర్వత లోయ, లేదా బేసిన్, ఇది దక్షిణ మరియు పశ్చిమాన పీర్ పంజాల్ శ్రేణికి మరియు ఉత్తర మరియు తూర్పున జాస్కర్ శ్రేణిని కలిగి ఉన్న గ్రేట్ హిమాలయన్ శ్రేణికి మధ్య ఉంది."
  },
  {
    "id": 364,
    "question": "The existence of southwest monsoon winds in India is due to (TSTET 28 June 2025)\nభారతదేశంలో నైరుతి రుతుపవనాల ఉనికికి కారణం (TSTET 28 June 2025)",
    "options": [
      "Earth's rotation\nభూభ్రమణం",
      "Differential heating of the land and the sea\nభూమి మరియు సముద్రం విభిన్నంగా వేడెక్కడం",
      "Ocean currents\nసముద్ర ప్రవాహాలు",
      "Trade winds\nవ్యాపార పవనాలు"
    ],
    "correctAnswer": 1,
    "explanation": "వేసవిలో, భారత భూభాగం చుట్టూ ఉన్న హిందూ మహాసముద్రం కంటే వేగంగా వేడెక్కుతుంది. ఇది భూమిపై బలమైన అల్పపీడన ప్రాంతాన్ని మరియు సముద్రంపై అధికపీడన ప్రాంతాన్ని సృష్టిస్తుంది, దీనివల్ల తేమతో కూడిన గాలులు సముద్రం నుండి భూమికి వీస్తాయి, దీనిని నైరుతి రుతుపవనాలు అంటారు."
  },
  {
    "id": 365,
    "question": "The Human Development Index Value of a Country 'X' is 0.976. Then, the country 'X' is considered to be in this group of economic development (TSTET 28 June 2025)\nఒక దేశం 'X' యొక్క మానవ అభివృద్ధి సూచిక విలువ 0.976. అప్పుడు, 'X' దేశం ఈ ఆర్థిక అభివృద్ధి సమూహంలో ఉన్నట్లు పరిగణించబడుతుంది (TSTET 28 June 2025)",
    "options": [
      "High Human Development\nఅధిక మానవ అభివృద్ధి",
      "Very High Human Development\nఅత్యధిక మానవ అభివృద్ధి",
      "Medium Human Development\nమధ్యస్థ మానవ అభివృద్ధి",
      "Low Human Development\nతక్కువ మానవ అభివృద్ధి"
    ],
    "correctAnswer": 1,
    "explanation": "ఐక్యరాజ్యసమితి అభివృద్ధి కార్యక్రమం (UNDP) 0.800 మరియు అంతకంటే ఎక్కువ మానవ అభివృద్ధి సూచిక (HDI) స్కోరు ఉన్న దేశాలను 'అత్యధిక మానవ అభివృద్ధి'గా వర్గీకరిస్తుంది. 0.976 స్కోరు ఈ వర్గంలోకి సులభంగా వస్తుంది."
  },
  {
    "id": 366,
    "question": "'A practice of growing two or more crops together on the same field in the same season', is known as (TSTET 28 June 2025)\n'ఒకే పొలంలో ఒకే సీజన్‌లో రెండు లేదా అంతకంటే ఎక్కువ పంటలను కలిపి పండించే పద్ధతి'ని ఇలా అంటారు (TSTET 28 June 2025)",
    "options": [
      "Mixed Farming\nమిశ్రమ వ్యవసాయం",
      "Crop Rotation\nపంట మార్పిడి",
      "Multiple Cropping\nబహుళ పంటలు",
      "Inter Cropping\nఅంతర పంట"
    ],
    "correctAnswer": 3,
    "explanation": "అంతర పంట అనేది ఒకే పొలంలో ఒకేసారి రెండు లేదా అంతకంటే ఎక్కువ పంటలను పండించే వ్యవసాయ పద్ధతి. ఈ పద్ధతి జీవవైవిధ్యాన్ని, దిగుబడిని పెంచుతుంది మరియు పంట నష్టానికి వ్యతిరేకంగా రక్షణను అందిస్తుంది."
  },
  {
    "id": 367,
    "question": "In a country, the negative growth rate of population is observed when (TSTET 28 June 2025)\nఒక దేశంలో, జనాభా యొక్క రుణాత్మక వృద్ధి రేటు ఎప్పుడు గమనించబడుతుంది (TSTET 28 June 2025)",
    "options": [
      "The birth rate is more than the death rate\nజనన రేటు మరణాల రేటు కంటే ఎక్కువగా ఉన్నప్పుడు",
      "The birth and death rate are equal\nజనన మరియు మరణాల రేటు సమానంగా ఉన్నప్పుడు",
      "The rate of migration is less than the rate of immigration\nవలస రేటు వలసల రేటు కంటే తక్కువగా ఉన్నప్పుడు",
      "The birth rate is less than the death rate\nజనన రేటు మరణాల రేటు కంటే తక్కువగా ఉన్నప్పుడు"
    ],
    "correctAnswer": 3,
    "explanation": "మరణాల సంఖ్య (వలసలతో కలిపి) జననాల సంఖ్యను (వలసలతో కలిపి) మించినప్పుడు రుణాత్మక జనాభా వృద్ధి రేటు లేదా జనాభా క్షీణత సంభవిస్తుంది. దీనికి సరళమైన దృష్టాంతం ఏమిటంటే, మరణాల రేటు జనన రేటు కంటే ఎక్కువగా ఉన్నప్పుడు."
  },
  {
    "id": 368,
    "question": "One of the following is NOT the Four Pillars of Human Development (TSTET 28 June 2025)\nకింది వాటిలో ఒకటి మానవ అభివృద్ధికి సంబంధించిన నాలుగు స్తంభాలలో ఒకటి కాదు (TSTET 28 June 2025)",
    "options": [
      "Equity\nసమానత్వం",
      "Sociability\nసామాజికత",
      "Sustainability\nసుస్థిరత",
      "Productivity\nఉత్పాదకత"
    ],
    "correctAnswer": 1,
    "explanation": "UNDP ద్వారా నిర్వచించబడిన మానవ అభివృద్ధి భావన యొక్క నాలుగు ఆవశ్యక స్తంభాలు సమానత్వం, సుస్థిరత, ఉత్పాదకత మరియు సాధికారత. 'సామాజికత' ఈ స్తంభాలలో ఒకటి కాదు."
  },
  {
    "id": 369,
    "question": "Identify an equatorial crop from among the following (TSTET 28 June 2025)\nకింది వాటిలో భూమధ్యరేఖ పంటను గుర్తించండి (TSTET 28 June 2025)",
    "options": [
      "Tea\nతేయాకు",
      "Rubber\nరబ్బరు",
      "Coffee\nకాఫీ",
      "Sugar Cane\nచెరకు"
    ],
    "correctAnswer": 1,
    "explanation": "రబ్బరు చెట్టు అమెజాన్ బేసిన్‌కు చెందినది మరియు భూమధ్యరేఖ ప్రాంతాలలో కనిపించే వేడి, తేమతో కూడిన పరిస్థితులలో వృద్ధి చెందుతుంది, దీనికి ఏడాది పొడవునా అధిక ఉష్ణోగ్రతలు (25°C కంటే ఎక్కువ) మరియు భారీ వర్షపాతం (200 సెం.మీ కంటే ఎక్కువ) అవసరం."
  },
  {
    "id": 370,
    "question": "Which of the following refers to the Dogger Bank, now known as 'Dogger Land'? (TSTET 28 June 2025)\nప్రస్తుతం 'డాగర్ ల్యాండ్' అని పిలవబడే డాగర్ బ్యాంక్‌ను కింది వాటిలో ఏది సూచిస్తుంది? (TSTET 28 June 2025)",
    "options": [
      "A small portion of land from the sea in which the people of Holland have reclaimed\nహాలండ్ ప్రజలు సముద్రం నుండి స్వాధీనం చేసుకున్న ఒక చిన్న భూభాగం",
      "The land that is reclaimed from the sea\nసముద్రం నుండి స్వాధీనం చేసుకున్న భూమి",
      "Part of the North Sea where fish industry is well developed\nఉత్తర సముద్రంలో చేపల పరిశ్రమ బాగా అభివృద్ధి చెందిన భాగం",
      "Part of the sea where ship building Industry is well developed\nసముద్రంలో ఓడల నిర్మాణ పరిశ్రమ బాగా అభివృద్ధి చెందిన భాగం"
    ],
    "correctAnswer": 2,
    "explanation": "డాగర్ బ్యాంక్ అనేది ఉత్తర సముద్రంలోని లోతు తక్కువ ప్రాంతంలో ఉన్న ఒక పెద్ద ఇసుక దిబ్బ, ఇది అత్యంత ఉత్పాదక చేపల వేట ప్రాంతంగా ప్రసిద్ధి చెందింది. డాగర్‌ల్యాండ్ అనేది బ్రిటన్‌ను ప్రధాన భూభాగం ఐరోపాతో కలిపిన, ఇప్పుడు మునిగిపోయిన చరిత్రపూర్వ భూభాగం పేరు, దీనిలో డాగర్ బ్యాంక్ ఒక అవశేషం."
  },
  {
    "id": 371,
    "question": "One of the following is NOT the characteristic feature of Organised Sector (TSTET 28 June 2025)\nకింది వాటిలో ఒకటి వ్యవస్థీకృత రంగం యొక్క లక్షణం కాదు (TSTET 28 June 2025)",
    "options": [
      "Small and Scattered Industrial Units\nచిన్న మరియు చెల్లాచెదురుగా ఉన్న పారిశ్రామిక యూనిట్లు",
      "Security of Employment\nఉద్యోగ భద్రత",
      "Having fixed number of working hours\nనిర్ణీత పని గంటలు కలిగి ఉండటం",
      "Availability of overtime facility\nఓవర్ టైం సౌకర్యం లభ్యత"
    ],
    "correctAnswer": 0,
    "explanation": "వ్యవస్థీకృత రంగం ప్రభుత్వంలో నమోదు చేసుకున్న సంస్థలను కలిగి ఉంటుంది, ఇవి ఉద్యోగ భద్రత, స్థిరమైన పని గంటలు మరియు ప్రయోజనాలను అందిస్తాయి. 'చిన్న మరియు చెల్లాచెదురుగా ఉన్న పారిశ్రామిక యూనిట్లు' అసంఘటిత రంగం యొక్క లక్షణాలు, ఇది ప్రభుత్వ నియంత్రణకు వెలుపల ఎక్కువగా పనిచేస్తుంది."
  },
  {
    "id": 372,
    "question": "This soil is formed from the weathering of igneous rocks (TSTET 28 June 2025)\nఈ నేల అగ్నిశిలల శైథిల్యం వల్ల ఏర్పడుతుంది (TSTET 28 June 2025)",
    "options": [
      "Alluvial Soil\nఒండ్రు నేల",
      "Black Soil\nనల్లరేగడి నేల",
      "Red Soil\nఎర్ర నేల",
      "Sandy Soil\nఇసుక నేల"
    ],
    "correctAnswer": 1,
    "explanation": "నల్లరేగడి నేలలు, రేగూర్ నేలలు అని కూడా పిలుస్తారు, ప్రాథమికంగా దక్కన్ లావా ట్రాప్స్ యొక్క శైథిల్యం నుండి ఏర్పడతాయి, ఇవి అగ్నిపర్వత అగ్నిశిలలు. ఇవి బంకమన్నుతో, తేమను నిలుపుకుంటాయి మరియు పత్తి సాగుకు అనువైనవి."
  },
  {
    "id": 373,
    "question": "Alfred Wegner who introduced the 'theory of Continental Drift' was a German (TSTET 28 June 2025)\n'ఖండచలన సిద్ధాంతాన్ని' ప్రవేశపెట్టిన ఆల్ఫ్రెడ్ వెజెనర్ ఒక జర్మన్ (TSTET 28 June 2025)",
    "options": [
      "Astronomer and Geophysicist\nఖగోళ శాస్త్రవేత్త మరియు భూభౌతిక శాస్త్రవేత్త",
      "Meteorologist and Geophysicist\nవాతావరణ శాస్త్రవేత్త మరియు భూభౌతిక శాస్త్రవేత్త",
      "Geophysicist and Mathematician\nభూభౌతిక శాస్త్రవేత్త మరియు గణిత శాస్త్రజ్ఞుడు",
      "Mathematician and Astronomer\nగణిత శాస్త్రజ్ఞుడు మరియు ఖగోళ శాస్త్రవేత్త"
    ],
    "correctAnswer": 1,
    "explanation": "ఆల్ఫ్రెడ్ వెజెనర్ ఒక జర్మన్ శాస్త్రవేత్త, అతని ప్రాథమిక వృత్తి వాతావరణ శాస్త్రం. ఏదేమైనా, అతను భూగర్భ శాస్త్రం మరియు భూభౌతిక శాస్త్రానికి చేసిన కృషికి, ముఖ్యంగా అతని సంచలనాత్మక ఖండచలన సిద్ధాంతానికి చాలా ప్రసిద్ధి చెందాడు."
  },
  {
    "id": 374,
    "question": "Among the following, the flattest and the smoothest region of the world is (TSTET 28 June 2025)\nకింది వాటిలో, ప్రపంచంలో అత్యంత చదునైన మరియు నునుపైన ప్రాంతం (TSTET 28 June 2025)",
    "options": [
      "Continental Shelf\nఖండ తీరపు అంచు",
      "Continental slope\nఖండ తీరపు వాలు",
      "Deep Sea Plain\nఅగాధ సముద్ర మైదానం",
      "Ocean Deep\nసముద్ర అగాధం"
    ],
    "correctAnswer": 2,
    "explanation": "అగాధ సముద్ర మైదానాలు, అబిస్సల్ మైదానాలు అని కూడా పిలుస్తారు, ఇవి లోతైన సముద్రపు అడుగుభాగంలోని విస్తారమైన, చదునైన ప్రాంతాలు. సూక్ష్మ రేణువుల అవక్షేపాలతో కప్పబడి, అవి భూమి ఉపరితలంపై అత్యంత చదునైన మరియు నునుపైన ప్రాంతాలుగా పరిగణించబడతాయి."
  },
  {
    "id": 375,
    "question": "Among the following treaties, the treaty that was signed in the year 1991 was (TSTET 28 June 2025)\nకింది ఒప్పందాలలో, 1991 సంవత్సరంలో సంతకం చేయబడిన ఒప్పందం (TSTET 28 June 2025)",
    "options": [
      "Strategic Arms Limitation Treaty (SALT)\nవ్యూహాత్మక ఆయుధ పరిమితి ఒప్పందం (SALT)",
      "Strategic Arms Reduction Treaty-I (START-I)\nవ్యూహాత్మక ఆయుధాల తగ్గింపు ఒప్పందం-I (START-I)",
      "The Missile Technology Control Treaty\nక్షిపణి సాంకేతిక నియంత్రణ ఒప్పందం",
      "Strategic Arms Reduction Treaty-II (START-II)\nవ్యూహాత్మక ఆయుధాల తగ్గింపు ఒప్పందం-II (START-II)"
    ],
    "correctAnswer": 1,
    "explanation": "వ్యూహాత్మక ఆయుధాల తగ్గింపు ఒప్పందం (START I) జూలై 31, 1991న యునైటెడ్ స్టేట్స్ మరియు సోవియట్ యూనియన్ సంతకం చేసిన ద్వైపాక్షిక ఒప్పందం. ఇది మోహరించిన వ్యూహాత్మక అణు వార్‌హెడ్‌లు మరియు బాలిస్టిక్ క్షిపణుల సంఖ్యపై పరిమితులను విధించింది."
  },
  {
    "id": 376,
    "question": "Among the following, the trade union formed under the influence of Mahatma Gandhi in Ahmedabad was (TSTET 28 June 2025)\nకింది వాటిలో, అహ్మదాబాద్‌లో మహాత్మా గాంధీ ప్రభావంతో ఏర్పడిన ట్రేడ్ యూనియన్ (TSTET 28 June 2025)",
    "options": [
      "Mazdoor Mahajan\nమజ్దూర్ మహాజన్",
      "Girni Kamgar\nగిర్ని కామ్‌గార్",
      "the Indian National Trade Union Congress (INTUC)\nఇండియన్ నేషనల్ ట్రేడ్ యూనియన్ కాంగ్రెస్ (INTUC)",
      "Bhartiya Mazdoor Sangh\nభారతీయ మజ్దూర్ సంఘ్"
    ],
    "correctAnswer": 0,
    "explanation": "అహ్మదాబాద్ టెక్స్‌టైల్ లేబర్ అసోసియేషన్, ప్రజాదరణ పొందిన మజూర్ మహాజన్ సంఘ్, 1920లో స్థాపించబడింది. ఇది 1918లో గాంధీ నేతృత్వంలో జరిగిన విజయవంతమైన అహ్మదాబాద్ మిల్లు సమ్మె తరువాత, అహింస మరియు ధర్మకర్తృత్వం యొక్క గాంధేయ సూత్రాలపై స్థాపించబడింది."
  },
  {
    "id": 377,
    "question": "When Libya became independent from Italy in 1951 after a long struggle, Italy transferred power to (TSTET 28 June 2025)\nలిబియా 1951లో సుదీర్ఘ పోరాటం తర్వాత ఇటలీ నుండి స్వాతంత్ర్యం పొందినప్పుడు, ఇటలీ అధికారాన్ని ఎవరికి బదిలీ చేసింది (TSTET 28 June 2025)",
    "options": [
      "Muammar Gaddaffi\nముఅమ్మర్ గడాఫీ",
      "King Idris\nరాజు ఇద్రిస్",
      "A Revolutionary Command Council\nఒక విప్లవ కమాండ్ కౌన్సిల్",
      "The Socialist Libyan Arab Republic\nసోషలిస్ట్ లిబియన్ అరబ్ రిపబ్లిక్"
    ],
    "correctAnswer": 1,
    "explanation": "డిసెంబర్ 24, 1951న, లిబియా ఐక్యరాజ్యసమితి ఆధ్వర్యంలో కొంత కాలం తర్వాత ఇటలీ నుండి స్వాతంత్ర్యం పొందింది. అధికారం అధికారికంగా కింగ్ ఇద్రిస్ Iకి బదిలీ చేయబడింది, అతను కొత్తగా స్థాపించబడిన యునైటెడ్ కింగ్‌డమ్ ఆఫ్ లిబియాకు చక్రవర్తి అయ్యాడు."
  },
  {
    "id": 378,
    "question": "In 1906, 'to spread awareness among Dalits by using popular folk arts Bhagya Reddy Varma started (TSTET 28 June 2025)\n1906లో, 'ప్రసిద్ధ జానపద కళలను ఉపయోగించి దళితులలో అవగాహన కల్పించడానికి భాగ్యరెడ్డి వర్మ ప్రారంభించారు (TSTET 28 June 2025)",
    "options": [
      "Vocational Work Centre\nవృత్తి శిక్షణా కేంద్రం",
      "Jagan Mitra Mandali\nజగన్ మిత్ర మండలి",
      "Telangana Praja Samithi\nతెలంగాణ ప్రజా సమితి",
      "Adi Hindu Jatiyonnati Sabha\nఆది హిందూ జాతీయోన్నతి సభ"
    ],
    "correctAnswer": 1,
    "explanation": "ప్రముఖ సంఘ సంస్కర్త అయిన భాగ్యరెడ్డి వర్మ, 1906లో జగన్ మిత్ర మండలిని ప్రారంభించారు. భజనలు మరియు హరికథల వంటి సాంప్రదాయ జానపద కళలను ఉపయోగించి దళిత వర్గాలలో విద్యావంతులను చేయడం మరియు అవగాహన కల్పించడం ఈ సంస్థ యొక్క లక్ష్యం."
  },
  {
    "id": 379,
    "question": "The origin of Burrakatha is associated with this movement (TSTET 28 June 2025)\nబుర్రకథ యొక్క మూలం ఈ ఉద్యమంతో ముడిపడి ఉంది (TSTET 28 June 2025)",
    "options": [
      "Young Bengal Movement\nయంగ్ బెంగాల్ ఉద్యమం",
      "Brahma Samaj Movement\nబ్రహ్మ సమాజ ఉద్యమం",
      "Prarthana Samaj Movement\nప్రార్థన సమాజ ఉద్యమం",
      "Veerashaiva Movement\nవీరశైవ ఉద్యమం"
    ],
    "correctAnswer": 3,
    "explanation": "ఆంధ్రప్రదేశ్ మరియు తెలంగాణ యొక్క సాంప్రదాయ కథా కథన ప్రదర్శన కళ అయిన బుర్రకథకు వీరశైవ ఉద్యమం యొక్క భక్తి గీతాలు మరియు గాథలలో మూలాలు ఉన్నాయి, ఈ ఉద్యమం తన మత మరియు సామాజిక తత్వాన్ని ప్రచారం చేయడానికి ఇటువంటి ప్రదర్శనలను ఉపయోగించుకుంది."
  },
  {
    "id": 380,
    "question": "The Drafting Committee of the Indian Constitution consists of (TSTET 28 June 2025)\nభారత రాజ్యాంగ ముసాయిదా కమిటీలో వీరు ఉంటారు (TSTET 28 June 2025)",
    "options": [
      "The Chairman and the nine members\nఛైర్మన్ మరియు తొమ్మిది మంది సభ్యులు",
      "The Chairman and the six members\nఛైర్మన్ మరియు ఆరుగురు సభ్యులు",
      "The Chairman and the eight members\nఛైర్మన్ మరియు ఎనిమిది మంది సభ్యులు",
      "The Chairman, the Vice-Chairman and the seven members\nఛైర్మన్, వైస్-ఛైర్మన్ మరియు ఏడుగురు సభ్యులు"
    ],
    "correctAnswer": 1,
    "explanation": "డాక్టర్ బి. ఆర్. అంబేద్కర్ అధ్యక్షత వహించిన రాజ్యాంగ పరిషత్ ముసాయిదా కమిటీలో మొత్తం ఏడుగురు సభ్యులు ఉన్నారు: ఒక ఛైర్మన్ మరియు ఆరుగురు ఇతర సభ్యులు. దీనికి భారత రాజ్యాంగ ముసాయిదాను సిద్ధం చేసే బాధ్యత అప్పగించబడింది."
  },
  {
    "id": 381,
    "question": "Kondagattu Anjaneya Swamy Temple' is located in this district of Telangana (TSTET 28 June 2025)\n'కొండగట్టు ఆంజనేయ స్వామి దేవాలయం' తెలంగాణలోని ఈ జిల్లాలో ఉంది (TSTET 28 June 2025)",
    "options": [
      "Jagityal\nజగిత్యాల",
      "Adilabad\nఆదిలాబాద్",
      "Medak\nమెదక్",
      "Kamareddy\nకామారెడ్డి"
    ],
    "correctAnswer": 0,
    "explanation": "ప్రసిద్ధ కొండగట్టు ఆంజనేయ స్వామి దేవాలయం తెలంగాణలోని జగిత్యాల జిల్లా ముత్యంపేట గ్రామంలోని ఒక కొండపై ఉన్న ఒక ప్రధాన పుణ్యక్షేత్రం."
  },
  {
    "id": 382,
    "question": "According to the Indian Constitution, this does not enforce any particular religion on individuals nor take away the religious freedom of individuals (TSTET 28 June 2025)\nభారత రాజ్యాంగం ప్రకారం, ఇది వ్యక్తులపై ఏ ప్రత్యేక మతాన్ని బలవంతం చేయదు లేదా వ్యక్తుల మత స్వేచ్ఛను హరించదు (TSTET 28 June 2025)",
    "options": [
      "Socialist State\nసామ్యవాద రాజ్యం",
      "Secular State\nలౌకిక రాజ్యం",
      "Democratic State\nప్రజాస్వామ్య రాజ్యం",
      "Theocratic State\nమతతత్వ రాజ్యం"
    ],
    "correctAnswer": 1,
    "explanation": "లౌకిక రాజ్యం మత విషయాలలో తటస్థతను పాటిస్తుంది, దానిని ప్రోత్సహించదు లేదా జోక్యం చేసుకోదు. భారత రాజ్యాంగం ఒక లౌకిక రాజ్యాన్ని స్థాపిస్తుంది, రాజ్య మతం లేదని నిర్ధారిస్తుంది మరియు పౌరులందరికీ మత స్వేచ్ఛకు హామీ ఇస్తుంది."
  },
  {
    "id": 383,
    "question": "The Supreme Court Judgement on this case was considered as the second major event in the life of the Indian Constitution (TSTET 28 June 2025)\nఈ కేసులో సుప్రీంకోర్టు తీర్పు భారత రాజ్యాంగ జీవితంలో రెండవ ప్రధాన సంఘటనగా పరిగణించబడింది (TSTET 28 June 2025)",
    "options": [
      "A.K Gopalan Case\nఎ.కె. గోపాలన్ కేసు",
      "Golaknadh Case\nగోలక్‌నాథ్ కేసు",
      "Keshavananda Bharathi Case\nకేశవానంద భారతి కేసు",
      "Shah Bano Begum Case\nషా బానో బేగం కేసు"
    ],
    "correctAnswer": 2,
    "explanation": "1973 నాటి కేశవానంద భారతి కేసు ఒక మైలురాయి తీర్పు, ఇక్కడ సుప్రీంకోర్టు 'ప్రాథమిక నిర్మాణ సిద్ధాంతాన్ని' స్థాపించింది. ఈ సిద్ధాంతం రాజ్యాంగాన్ని సవరించే పార్లమెంటు అధికారాన్ని పరిమితం చేస్తుంది, దాని ప్రాథమిక లక్షణాలను మార్చలేమని పేర్కొంది. ఈ తీర్పు భారత రాజ్యాంగ చట్టానికి మూలస్తంభంగా పరిగణించబడుతుంది."
  },
  {
    "id": 384,
    "question": "The International organisation that was started with a twin objective of 'ensuring lasting peace and human development' was (TSTET 28 June 2025)\n'శాశ్వత శాంతి మరియు మానవ అభివృద్ధిని నిర్ధారించడం' అనే జంట లక్ష్యంతో ప్రారంభమైన అంతర్జాతీయ సంస్థ (TSTET 28 June 2025)",
    "options": [
      "Non-Aligned Movement\nఅలీన ఉద్యమం",
      "United Nations Organisation\nఐక్యరాజ్యసమితి",
      "The International Monetary Fund\nఅంతర్జాతీయ ద్రవ్య నిధి",
      "SAARC\nసార్క్"
    ],
    "correctAnswer": 1,
    "explanation": "ఐక్యరాజ్యసమితి (UNO) రెండవ ప్రపంచ యుద్ధం తర్వాత 1945లో స్థాపించబడింది. దాని చార్టర్‌లో పేర్కొన్న విధంగా దాని ప్రధాన లక్ష్యాలు అంతర్జాతీయ శాంతి మరియు భద్రతను కాపాడటం మరియు ఆర్థిక, సామాజిక, సాంస్కృతిక లేదా మానవతా సమస్యలను పరిష్కరించడంలో అంతర్జాతీయ సహకారాన్ని సాధించడం."
  },
  {
    "id": 385,
    "question": "In 1990, L.K. Advani, the leader Bharatiya Janata Party led 'Rath Yatra' from (TSTET 28 June 2025)\n1990లో, భారతీయ జనతా పార్టీ నాయకుడు ఎల్.కె. అద్వానీ 'రథయాత్ర'ను ఇక్కడి నుండి నడిపించారు (TSTET 28 June 2025)",
    "options": [
      "Kanyakumari\nకన్యాకుమారి",
      "Varanasi\nవారణాసి",
      "Somnath\nసోమనాథ్",
      "New Delhi\nన్యూఢిల్లీ"
    ],
    "correctAnswer": 2,
    "explanation": "బిజెపి నాయకుడు ఎల్.కె. అద్వానీ నేతృత్వంలోని రామ్ రథయాత్ర సెప్టెంబర్ 1990లో గుజరాత్‌లోని చారిత్రాత్మక సోమనాథ్ ఆలయం నుండి ప్రారంభమైంది. దాని గమ్యస్థానం అయోధ్య, మరియు ఇది బాబ్రీ మసీదు స్థలంలో రామాలయ నిర్మాణానికి మద్దతు కూడగట్టడమే లక్ష్యంగా పెట్టుకుంది."
  },
  {
    "id": 386,
    "question": "As per the Article 324 (6) of the Indian Constitution, it utilizes the services of Central and State Government employees (TSTET 28 June 2025)\nభారత రాజ్యాంగంలోని ఆర్టికల్ 324 (6) ప్రకారం, ఇది కేంద్ర మరియు రాష్ట్ర ప్రభుత్వ ఉద్యోగుల సేవలను వినియోగించుకుంటుంది (TSTET 28 June 2025)",
    "options": [
      "The Central Finance Commission for economic survey\nఆర్థిక సర్వే కోసం కేంద్ర ఆర్థిక సంఘం",
      "The Election Commission for conduct of elections\nఎన్నికల నిర్వహణ కోసం ఎన్నికల సంఘం",
      "The Census Department for population Census\nజనాభా గణన కోసం జనాభా లెక్కల శాఖ",
      "The SC commission for caste census\nకుల గణన కోసం SC కమిషన్"
    ],
    "correctAnswer": 1,
    "explanation": "భారత రాజ్యాంగంలోని ఆర్టికల్ 324(6) ప్రకారం, ఎన్నికల నిర్వహణ కోసం ఎన్నికల కమిషన్ అభ్యర్థన మేరకు రాష్ట్రపతి మరియు రాష్ట్ర గవర్నర్లు అవసరమైన సిబ్బందిని అందుబాటులో ఉంచాలి, ఈ ప్రయోజనం కోసం ప్రభుత్వ ఉద్యోగులను వినియోగించుకోవడానికి కమిషన్‌ను అనుమతిస్తుంది."
  },
  {
    "id": 387,
    "question": "As per this article of the Indian Constitution, the President of India can dismiss the state Government and order the Governor of the state to take over the administration of the state with the advice of the Prime Minister (TSTET 28 June 2025)\nభారత రాజ్యాంగంలోని ఈ ఆర్టికల్ ప్రకారం, భారత రాష్ట్రపతి రాష్ట్ర ప్రభుత్వాన్ని రద్దు చేసి, ప్రధానమంత్రి సలహా మేరకు రాష్ట్ర పరిపాలనను చేపట్టమని రాష్ట్ర గవర్నర్‌ను ఆదేశించవచ్చు (TSTET 28 June 2025)",
    "options": [
      "Article 224\nఆర్టికల్ 224",
      "Article 280\nఆర్టికల్ 280",
      "Article 356\nఆర్టికల్ 356",
      "Article 352\nఆర్టికల్ 352"
    ],
    "correctAnswer": 2,
    "explanation": "గవర్నర్ నుండి నివేదిక అందిన తర్వాత లేదా ఇతరత్రా, రాష్ట్ర ప్రభుత్వం రాజ్యాంగ నిబంధనలకు అనుగుణంగా నడవలేని పరిస్థితి ఏర్పడిందని రాష్ట్రపతి సంతృప్తి చెందితే, ఆర్టికల్ 356 ఒక రాష్ట్రంలో రాష్ట్రపతి పాలన విధించడానికి అనుమతిస్తుంది."
  },
  {
    "id": 388,
    "question": "In the Lok Sabha Elections held in India in 1971, the Congress Party went to elections using this popular slogan (TSTET 28 June 2025)\n1971లో భారతదేశంలో జరిగిన లోక్‌సభ ఎన్నికలలో, కాంగ్రెస్ పార్టీ ఈ ప్రసిద్ధ నినాదాన్ని ఉపయోగించి ఎన్నికలకు వెళ్లింది (TSTET 28 June 2025)",
    "options": [
      "Garibi Hatao\nగరీబీ హటావో",
      "Sustainable Development\nసుస్థిర అభివృద్ధి",
      "Save Democracy\nప్రజాస్వామ్యాన్ని కాపాడండి",
      "Unity and Diversity\nభిన్నత్వంలో ఏకత్వం"
    ],
    "correctAnswer": 0,
    "explanation": "'గరీబీ హటావో' (పేదరికాన్ని తొలగించండి) నినాదం 1971 లోక్‌సభ ఎన్నికల కోసం ఇందిరా గాంధీ ప్రచారానికి మూలస్తంభం. ఇది పేదలతో విస్తృతంగా ప్రతిధ్వనించిన ఒక ప్రజాకర్షక సందేశం మరియు ఆమె అఖండ విజయానికి గణనీయంగా దోహదపడింది."
  },
  {
    "id": 389,
    "question": "\"We are going to enter into a life of contradictions, in politics we will have equality and in social and economic life, we will have inequality\" said by (TSTET 28 June 2025)\n\"మనం వైరుధ్యాల జీవితంలోకి ప్రవేశించబోతున్నాం, రాజకీయాల్లో మనకు సమానత్వం ఉంటుంది మరియు సామాజిక మరియు ఆర్థిక జీవితంలో మనకు అసమానత్వం ఉంటుంది\" అని అన్నది (TSTET 28 June 2025)",
    "options": [
      "Dr BR Ambedkar\nడాక్టర్ బిఆర్ అంబేద్కర్",
      "Margaret W Fisher\nమార్గరెట్ డబ్ల్యూ ఫిషర్",
      "Joan V Bondurant\nజోన్ వి బొండురాంట్",
      "Jawaharlal Nehru\nజవహర్‌లాల్ నెహ్రూ"
    ],
    "correctAnswer": 0,
    "explanation": "నవంబర్ 25, 1949న రాజ్యాంగ పరిషత్‌కు తన చివరి ప్రసంగంలో డాక్టర్ బి.ఆర్. అంబేద్కర్ ఈ లోతైన ప్రకటన చేశారు. 'ఒక వ్యక్తి, ఒక ఓటు' సూత్రం ద్వారా మంజూరు చేయబడిన రాజకీయ సమానత్వానికి మరియు భారతదేశంలో పాతుకుపోయిన సామాజిక-ఆర్థిక అసమానతల మధ్య ఉన్న అంతర్లీన వైరుధ్యం గురించి ఆయన హెచ్చరిస్తున్నారు."
  },
  {
    "id": 390,
    "question": "As per the \"Permanent Revenue settlement system\" these were given power to collect revenues (TSTET 28 June 2025)\n\"శాశ్వత రెవెన్యూ సెటిల్మెంట్ విధానం\" ప్రకారం వీరికి రెవెన్యూ వసూలు చేసే అధికారం ఇవ్వబడింది (TSTET 28 June 2025)",
    "options": [
      "Tenants\nకౌలుదారులు",
      "Peasants\nరైతులు",
      "Village heads\nగ్రామ పెద్దలు",
      "Zamindars\nజమీందార్లు"
    ],
    "correctAnswer": 3,
    "explanation": "1793లో లార్డ్ కారన్‌వాలిస్ ప్రవేశపెట్టిన శాశ్వత సెటిల్మెంట్, జమీందార్లను భూమికి యజమానులుగా గుర్తించింది. వారికి రైతుల నుండి అద్దె వసూలు చేసి, బ్రిటిష్ ఈస్ట్ ఇండియా కంపెనీకి నిర్ణీత మొత్తంలో రెవెన్యూ చెల్లించే పని అప్పగించబడింది."
  },
  {
    "id": 391,
    "question": "To put together a programme for uniting Italy into an Italian Republic, Guiseppe Garibaldi formed a secret society called (TSTET 28 June 2025)\nఇటలీని ఇటాలియన్ రిపబ్లిక్‌గా ఏకం చేసే కార్యక్రమాన్ని రూపొందించడానికి, గిసెప్పే గరిబాల్డి ఈ పేరుతో ఒక రహస్య సంఘాన్ని ఏర్పాటు చేశాడు (TSTET 28 June 2025)",
    "options": [
      "Black Shirts\nబ్లాక్ షర్ట్స్",
      "Blue Shirts\nబ్లూ షర్ట్స్",
      "Red Shirts\nరెడ్ షర్ట్స్",
      "White Shirts\nవైట్ షర్ట్స్"
    ],
    "correctAnswer": 2,
    "explanation": "గిసెప్పే గరిబాల్డి అనుచరులు వారి యూనిఫాంల రంగు కారణంగా రెడ్‌షర్ట్స్ అని పిలువబడ్డారు. ఈ స్వచ్ఛంద దళాలు ఇటాలియన్ ఏకీకరణలో, ముఖ్యంగా 1860లో సిసిలీ మరియు నేపుల్స్‌ను జయించిన 'ఎక్స్‌పెడిషన్ ఆఫ్ ది థౌజండ్' సమయంలో కీలక పాత్ర పోషించాయి."
  },
  {
    "id": 392,
    "question": "The Worsley Canal, the First English Canal, was built by (TSTET 28 June 2025)\nమొదటి ఇంగ్లీష్ కాలువ అయిన వోర్స్లీ కాలువను నిర్మించింది (TSTET 28 June 2025)",
    "options": [
      "James Brindley\nజేమ్స్ బ్రిండ్లీ",
      "Stephenson\nస్టీఫెన్‌సన్",
      "John Medcalf\nజాన్ మెడ్‌కాఫ్",
      "Henry cart\nహెన్రీ కార్ట్"
    ],
    "correctAnswer": 0,
    "explanation": "వోర్స్లీ గనుల నుండి విభాగాన్ని కలిగి ఉన్న బ్రిడ్జ్‌వాటర్ కాలువ, ఇంగ్లాండ్‌లో మొదటి ఆధునిక కృత్రిమ కాలువగా పరిగణించబడుతుంది. దీనిని డ్యూక్ ఆఫ్ బ్రిడ్జ్‌వాటర్ కోసం జేమ్స్ బ్రిండ్లీ బొగ్గు రవాణా చేయడానికి ఇంజనీరింగ్ చేశారు, మరియు దాని విజయం బ్రిటన్‌లో కాలువల నిర్మాణ యుగానికి నాంది పలికింది."
  },
  {
    "id": 393,
    "question": "In 1991, the disbanding of USSR was announced by (TSTET 28 June 2025)\n1991లో, USSR రద్దును ప్రకటించింది (TSTET 28 June 2025)",
    "options": [
      "Mikhail Gorbachev\nమిఖాయిల్ గోర్బచెవ్",
      "Nikita Khrushchev\nనికితా క్రుష్చెవ్",
      "Leonid Brezhnev\nలియోనిడ్ బ్రెజ్నెవ్",
      "Boris Yeltsin\nబోరిస్ యెల్ట్సిన్"
    ],
    "correctAnswer": 3,
    "explanation": "సోవియట్ యూనియన్ విచ్ఛిన్నం డిసెంబర్ 8, 1991న బోరిస్ యెల్ట్సిన్ (రష్యా అధ్యక్షుడు) మరియు ఉక్రెయిన్ మరియు బెలారస్ నాయకులు సంతకం చేసిన బెలోవెజా ఒప్పందాల ద్వారా ప్రభావవంతంగా ఖరారు చేయబడింది. వ్యవస్థాపక గణతంత్ర రాజ్యాల అధిపతుల ఈ ప్రకటన USSR యొక్క తుది రద్దుకు దారితీసింది."
  },
  {
    "id": 394,
    "question": "In the 16th century, a \"Seaborne Empire \"was established over the Indian Ocean by (TSTET 28 June 2025)\n16వ శతాబ్దంలో, హిందూ మహాసముద్రంపై \"సముద్ర సామ్రాజ్యాన్ని\" స్థాపించింది (TSTET 28 June 2025)",
    "options": [
      "Spain\nస్పెయిన్",
      "England\nఇంగ్లాండ్",
      "Holland\nహాలండ్",
      "Portuguese\nపోర్చుగీస్"
    ],
    "correctAnswer": 3,
    "explanation": "16వ శతాబ్దంలో, పోర్చుగల్ 'ఎస్టాడో డా ఇండియా' అనే బలీయమైన సముద్ర సామ్రాజ్యాన్ని స్థాపించింది. ఉన్నతమైన నౌకా సాంకేతికత మరియు బలవర్థకమైన వాణిజ్య స్థావరాల (ఫీటోరియాస్) నెట్‌వర్క్ ద్వారా, వారు హిందూ మహాసముద్రం అంతటా కీలకమైన సముద్ర వాణిజ్య మార్గాలను నియంత్రించారు."
  },
  {
    "id": 395,
    "question": "The Social Reformer who fought for Re-marriage of widows, 'Especially child widows' was (TSTET 28 June 2025)\nవితంతువుల పునర్వివాహం, 'ముఖ్యంగా బాల వితంతువుల' కోసం పోరాడిన సంఘ సంస్కర్త (TSTET 28 June 2025)",
    "options": [
      "Raja Rammohan Roy\nరాజా రామ్మోహన్ రాయ్",
      "Ishwar Chandra Vidyasagar\nఈశ్వరచంద్ర విద్యాసాగర్",
      "Kandukuri Veereshalingam\nకందుకూరి వీరేశలింగం",
      "Bhagya Reddy Varma\nభాగ్యరెడ్డి వర్మ"
    ],
    "correctAnswer": 1,
    "explanation": "ఈశ్వరచంద్ర విద్యాసాగర్ 19వ శతాబ్దపు బెంగాల్‌లో ఒక ప్రముఖ సంఘ సంస్కర్త, అతను వితంతువుల హక్కుల కోసం, ముఖ్యంగా వారి పునర్వివాహ హక్కు కోసం తీవ్రంగా ప్రచారం చేశాడు. అతని అవిశ్రాంత ప్రయత్నాలు 1856లో హిందూ వితంతు పునర్వివాహ చట్టం ఆమోదానికి దారితీశాయి."
  },
  {
    "id": 396,
    "question": "Mahatma Gandhi decided to launch this third major movement against the British rule after the failure of Cripps Mission (TSTET 28 June 2025)\nక్రిప్స్ మిషన్ వైఫల్యం తర్వాత మహాత్మా గాంధీ బ్రిటిష్ పాలనకు వ్యతిరేకంగా ఈ మూడవ పెద్ద ఉద్యమాన్ని ప్రారంభించాలని నిర్ణయించుకున్నారు (TSTET 28 June 2025)",
    "options": [
      "Ahmedabad Textile Workers Agitation\nఅహ్మదాబాద్ టెక్స్‌టైల్ కార్మికుల ఆందోళన",
      "Quit India Movement\nక్విట్ ఇండియా ఉద్యమం",
      "Civil Disobedience Movement\nశాసనోల్లంఘన ఉద్యమం",
      "Kaira Protest Movement\nఖైరా నిరసన ఉద్యమం"
    ],
    "correctAnswer": 1,
    "explanation": "1942లో క్రిప్స్ మిషన్ వైఫల్యం, పూర్తి స్వాతంత్ర్యాన్ని అందించకపోవడం, క్విట్ ఇండియా ఉద్యమానికి ప్రధాన ఉత్ప్రేరకం. ఆగష్టు 1942లో, మహాత్మా గాంధీ అఖిల భారత కాంగ్రెస్ కమిటీ బొంబాయి సమావేశంలో ఈ ఉద్యమాన్ని ప్రారంభించారు, భారతదేశంలో బ్రిటిష్ పాలనను అంతం చేయాలని డిమాండ్ చేశారు."
  },
  {
    "id": 397,
    "question": "In March 1946, the British Cabinet sent a three-member mission team to New Delhi to examine (TSTET 28 June 2025)\nమార్చి 1946లో, బ్రిటిష్ క్యాబినెట్ ముగ్గురు సభ్యుల మిషన్ బృందాన్ని న్యూఢిల్లీకి పంపింది, పరిశీలించడానికి (TSTET 28 June 2025)",
    "options": [
      "the demand of separate state made by the All India Muslim League and to suggest a suitable political framework for Indian freedom\nఅఖిల భారత ముస్లిం లీగ్ చేసిన ప్రత్యేక రాష్ట్ర డిమాండ్‌ను మరియు భారత స్వాతంత్ర్యానికి తగిన రాజకీయ చట్రాన్ని సూచించడానికి",
      "the possibility of dividing India into India and Pakistan\nభారతదేశాన్ని ఇండియా మరియు పాకిస్తాన్‌గా విభజించే అవకాశం",
      "the demand of All India Muslim League in keeping India united\nభారతదేశాన్ని ఐక్యంగా ఉంచడంలో అఖిల భారత ముస్లిం లీగ్ డిమాండ్",
      "the demand of Indian National Congress to provide more seats to Muslims\nముస్లింలకు మరిన్ని సీట్లు కేటాయించాలని భారత జాతీయ కాంగ్రెస్ డిమాండ్"
    ],
    "correctAnswer": 0,
    "explanation": "1946 క్యాబినెట్ మిషన్ అధికార బదిలీకి ఒక ప్రణాళికను రూపొందించడంలో సహాయపడటానికి భారతదేశానికి పంపబడింది. ఇది భారత జాతీయ కాంగ్రెస్ (ఐక్య భారతదేశం కోసం) మరియు ముస్లిం లీగ్ (ప్రత్యేక పాకిస్తాన్ రాష్ట్రం కోసం) యొక్క పరస్పర విరుద్ధమైన డిమాండ్లను పరిష్కరించవలసి వచ్చింది, మరియు దాని అంతిమ లక్ష్యం స్వేచ్ఛా మరియు ఐక్య భారతదేశానికి ఒక రాజ్యాంగ చట్రాన్ని ప్రతిపాదించడం."
  },
  {
    "id": 398,
    "question": "Among the following Asaf Jahi rulers, the rulers who would not get the title 'Nizam' from the Mughals were (TSTET 28 June 2025)\nకింది అసఫ్ జాహీ పాలకులలో, మొఘలుల నుండి 'నిజాం' బిరుదును పొందని పాలకులు (TSTET 28 June 2025)",
    "options": [
      "Nazar Jung, Salabath Jung and Afzal Ud Daula\nనాజర్ జంగ్, సలాబత్ జంగ్ మరియు అఫ్జల్ ఉద్ దౌలా",
      "Afzal Ud Daula and Salabath Jung\nఅఫ్జల్ ఉద్ దౌలా మరియు సలాబత్ జంగ్",
      "Meer Mahboob Ali Khan and Muzaffar Jung\nమీర్ మహబూబ్ అలీ ఖాన్ మరియు ముజఫర్ జంగ్",
      "Nazar Jung, Muzafar Jung and Salabath Jung\nనాజర్ జంగ్, ముజఫర్ జంగ్ మరియు సలాబత్ జంగ్"
    ],
    "correctAnswer": 3,
    "explanation": "మొదటి నిజాం మరణం తరువాత, అస్థిరత కాలం ఏర్పడింది. అతని వారసులు, నాసిర్ జంగ్, ముజఫర్ జంగ్, మరియు సలాబత్ జంగ్, ఫ్రెంచ్ మరియు బ్రిటిష్ వారి మద్దతుతో వారసత్వ యుద్ధాలలో పాల్గొన్నారు. ఈ గందరగోళ కాలంలో, వారు మొఘల్ చక్రవర్తి నుండి అధికారిక అనుమతి లేదా 'నిజాం' బిరుదు లేకుండా పాలించారు."
  },
  {
    "id": 399,
    "question": "The Green Revolution was taken as a pilot project in seven districts of the country and was called as (TSTET 28 June 2025)\nహరిత విప్లవం దేశంలోని ఏడు జిల్లాలలో పైలట్ ప్రాజెక్ట్‌గా తీసుకోబడింది మరియు దీనిని ఇలా పిలిచారు (TSTET 28 June 2025)",
    "options": [
      "Intensive Agriculture Development Programme\nసాంద్ర వ్యవసాయ అభివృద్ధి కార్యక్రమం",
      "High Yielding Variety Programme\nఅధిక దిగుబడినిచ్చే రకాల కార్యక్రమం",
      "Intensive Agriculture Area Programme\nసాంద్ర వ్యవసాయ ప్రాంత కార్యక్రమం",
      "Integrated Agriculture Development Programme\nసమీకృత వ్యవసాయ అభివృద్ధి కార్యక్రమం"
    ],
    "correctAnswer": 0,
    "explanation": "1960లో ప్రారంభించబడిన సాంద్ర వ్యవసాయ అభివృద్ధి కార్యక్రమం (IADP), భారతదేశంలో హరిత విప్లవానికి முன்னோடியாக పరిగణించబడుతుంది. మెరుగైన ఇన్‌పుట్‌లు మరియు పద్ధతుల ప్యాకేజీ వ్యవసాయ ఉత్పత్తిని వేగంగా ఎలా పెంచగలదో ప్రదర్శించడానికి ఇది ఎంపిక చేసిన జిల్లాల్లో పైలట్ ప్రాజెక్ట్‌గా ప్రారంభించబడింది."
  },
  {
    "id": 400,
    "question": "Identify the true statement from the following related to National Income A) National Income is the total market value of all final goods and services produced annually in a country B) National income is the total income accrued to a country from various economic activities in a year's time (TSTET 28 June 2025)\nజాతీయ ఆదాయానికి సంబంధించిన క్రింది వాటి నుండి నిజమైన ప్రకటనను గుర్తించండి A) జాతీయ ఆదాయం అనేది ఒక దేశంలో ఏటా ఉత్పత్తి చేయబడిన అన్ని అంతిమ వస్తువులు మరియు సేవల మొత్తం మార్కెట్ విలువ B) జాతీయ ఆదాయం అనేది ఒక సంవత్సర కాలంలో వివిధ ఆర్థిక కార్యకలాపాల నుండి ఒక దేశానికి సమకూరిన మొత్తం ఆదాయం (TSTET 28 June 2025)",
    "options": [
      "Only A is true\nA మాత్రమే నిజం",
      "Only B is true\nB మాత్రమే నిజం",
      "Both A and B are true\nA మరియు B రెండూ నిజం",
      "Both A and B are not true\nA మరియు B రెండూ నిజం కాదు"
    ],
    "correctAnswer": 2,
    "explanation": "రెండు ప్రకటనలు జాతీయ ఆదాయం యొక్క చెల్లుబాటు అయ్యే నిర్వచనాలను అందిస్తాయి. ప్రకటన A దానిని ఉత్పత్తి (లేదా అవుట్‌పుట్) కోణం నుండి నిర్వచిస్తుంది, వస్తువులు మరియు సేవల విలువను సూచిస్తుంది. ప్రకటన B దానిని ఆదాయ కోణం నుండి నిర్వచిస్తుంది, ఆ ఆర్థిక కార్యకలాపాల నుండి మొత్తం సంపాదనను సూచిస్తుంది. జాతీయ అకౌంటింగ్‌లో, ఈ రెండు కొలతలు సమానంగా ఉండాలి."
  },
  {
    "id": 401,
    "question": "From among the following, identify the Primary Sector activities A) Gardening B) Bee Keeping C) Basket Weaving (Choose the correct answer) (TSTET 28 June 2025)\nకింది వాటి నుండి, ప్రాథమిక రంగ కార్యకలాపాలను గుర్తించండి A) తోటపని B) తేనెటీగల పెంపకం C) బుట్టల అల్లకం (సరైన సమాధానాన్ని ఎంచుకోండి)",
    "options": [
      "Only A and B are true\nA మరియు B మాత్రమే నిజం",
      "Only B and C are true\nB మరియు C మాత్రమే నిజం",
      "Only C is true\nC మాత్రమే నిజం",
      "A, B and C are true\nA, B మరియు C అన్నీ నిజం"
    ],
    "correctAnswer": 0,
    "explanation": "ప్రాథమిక రంగం ప్రకృతి నుండి నేరుగా ముడి పదార్థాలను సేకరించడం. తోటపని (వ్యవసాయం) మరియు తేనెటీగల పెంపకం (ఎపికల్చర్) ఈ నిర్వచనానికి సరిపోతాయి. అయితే, బుట్టల అల్లకం అనేది ఒక తయారీ కార్యకలాపం, ఇక్కడ ముడి పదార్థం (వెదురు లేదా చెరకు వంటివి) పూర్తి వస్తువుగా మార్చబడుతుంది, ఇది ద్వితీయ రంగంలోకి వస్తుంది."
  },
  {
    "id": 402,
    "question": "This type of farming is practiced in areas with High Population Density on land (TSTET 28 June 2025)\nభూమిపై అధిక జనాభా సాంద్రత ఉన్న ప్రాంతాలలో ఈ రకమైన వ్యవసాయం ఆచరించబడుతుంది",
    "options": [
      "Intensive Subsistence Farming\nసాంద్ర జీవనాధార వ్యవసాయం",
      "Slash and burn method of farming\nపోడు వ్యవసాయ పద్ధతి",
      "Simple Subsistence farming\nసాధారణ జీవనాధార వ్యవసాయం",
      "Commercial Farming\nవాణిజ్య వ్యవసాయం"
    ],
    "correctAnswer": 0,
    "explanation": "సాంద్ర జీవనాధార వ్యవసాయం అనేది ఒక యూనిట్ విస్తీర్ణంలో అధిక దిగుబడిని సాధించడానికి ఎక్కువ శ్రమతో చిన్న కమతాలను సాగు చేయడం. భూమి కొరత ఉన్న జనసాంద్రత గల ప్రాంతాలలో ఈ రకమైన వ్యవసాయం సర్వసాధారణం."
  },
  {
    "id": 403,
    "question": "Fixation of minimum support price for agricultural product is done by (TSTET 28 June 2025)\nవ్యవసాయ ఉత్పత్తులకు కనీస మద్దతు ధరను ఎవరు నిర్ణయిస్తారు",
    "options": [
      "State Ministry of Agriculture\nరాష్ట్ర వ్యవసాయ మంత్రిత్వ శాఖ",
      "Market Committee\nమార్కెట్ కమిటీ",
      "Commission for Agriculture Costs and Prices\nవ్యవసాయ వ్యయాలు మరియు ధరల కమిషన్",
      "Food Corporation of India\nభారత ఆహార సంస్థ"
    ],
    "correctAnswer": 2,
    "explanation": "వ్యవసాయ వ్యయాలు మరియు ధరల కమిషన్ (CACP) సిఫార్సుల ఆధారంగా భారత ప్రభుత్వం ప్రతి సంవత్సరం ప్రధాన వ్యవసాయ ఉత్పత్తులకు కనీస మద్దతు ధరను (MSP) నిర్ణయిస్తుంది."
  },
  {
    "id": 404,
    "question": "This sector was given more priority in industrial policy of 1991 in India (TSTET 28 June 2025)\nభారతదేశంలో 1991 పారిశ్రామిక విధానంలో ఈ రంగానికి ఎక్కువ ప్రాధాన్యత ఇవ్వబడింది",
    "options": [
      "Public Sector\nప్రభుత్వ రంగం",
      "Private Sector\nప్రైవేట్ రంగం",
      "Cooperative Sector\nసహకార రంగం",
      "Joint Sector\nఉమ్మడి రంగం"
    ],
    "correctAnswer": 1,
    "explanation": "1991 నాటి నూతన పారిశ్రామిక విధానం సరళీకరణ, ప్రైవేటీకరణ మరియు ప్రపంచీకరణ (LPG) శకానికి నాంది పలికింది. ఇది ప్రభుత్వ రంగం పాత్రను గణనీయంగా తగ్గించింది, చాలా పరిశ్రమలకు పారిశ్రామిక లైసెన్సింగ్‌ను రద్దు చేసింది మరియు ఆర్థిక వ్యవస్థను తెరిచింది, తద్వారా ప్రైవేట్ రంగం యొక్క పెరుగుదల మరియు భాగస్వామ్యానికి ప్రధాన ప్రాధాన్యత ఇచ్చింది."
  },
  {
    "id": 405,
    "question": "In the following stages of Paper Production, the length and thickness of the paper is set at this stage (TSTET 28 June 2025)\nకాగితం ఉత్పత్తి యొక్క క్రింది దశలలో, కాగితం యొక్క పొడవు మరియు మందం ఈ దశలో సెట్ చేయబడుతుంది",
    "options": [
      "Spreading the pulp\nగుజ్జును పరచడం",
      "Chipping\nచిన్న ముక్కలుగా చేయడం",
      "Making the wood pulp\nచెక్క గుజ్జును తయారు చేయడం",
      "Cutting\nకత్తిరించడం"
    ],
    "correctAnswer": 0,
    "explanation": "ఒక కాగితం మిల్లులో, గుజ్జును సిద్ధం చేసిన తర్వాత, దానిని కాగితం తయారుచేసే యంత్రంలోకి పంపిస్తారు. ఈ యంత్రం యొక్క 'తడి చివర'లో, గుజ్జు మిశ్రమాన్ని ఒక పెద్ద తెరపై సమానంగా పరుస్తారు. ఈ దశలోనే నిరంతర కాగితపు షీట్ ఏర్పడుతుంది మరియు దాని మందం (ఆధార బరువు) మరియు వెడల్పు నిర్ణయించబడతాయి."
  },
  {
    "id": 406,
    "question": "One of the following is NOT the general function of Reserve Bank of India (TSTET 28 June 2025)\nకింది వాటిలో ఒకటి రిజర్వ్ బ్యాంక్ ఆఫ్ ఇండియా యొక్క సాధారణ విధి కాదు",
    "options": [
      "Banker to the Government\nప్రభుత్వానికి బ్యాంకర్",
      "Custodian of foreign exchange\nవిదేశీ మారక ద్రవ్య సంరక్షకుడు",
      "Control of credit\nరుణ నియంత్రణ",
      "Inspection of the banks\nబ్యాంకుల తనిఖీ"
    ],
    "correctAnswer": 3,
    "explanation": "బ్యాంకుల తనిఖీ అనేది RBI చేసే కీలకమైన కార్యకలాపం అయినప్పటికీ, ఇది 'ఆర్థిక వ్యవస్థ యొక్క నియంత్రణ మరియు పర్యవేక్షణ' అనే దాని విస్తృత విధి కిందకు వస్తుంది. ఇతర ఎంపికలు—ప్రభుత్వానికి బ్యాంకర్‌గా పనిచేయడం, విదేశీ మారక ద్రవ్యాన్ని నిర్వహించడం మరియు రుణాన్ని నియంత్రించడం—అత్యున్నత స్థాయి, సాధారణ విధులుగా పరిగణించబడతాయి."
  },
  {
    "id": 407,
    "question": "The formal source of Credit from the following is (TSTET 28 June 2025)\nకింది వాటిలో రుణానికి అధికారిక మూలం ఏది",
    "options": [
      "Traders\nవ్యాపారులు",
      "Cooperative Societies\nసహకార సంఘాలు",
      "Moneylenders\nవడ్డీ వ్యాపారులు",
      "Friends and relatives\nస్నేహితులు మరియు బంధువులు"
    ],
    "correctAnswer": 1,
    "explanation": "రుణానికి అధికారిక వనరులలో బ్యాంకులు మరియు సహకార సంఘాలు ఉన్నాయి, ఇవి ప్రభుత్వం మరియు రిజర్వ్ బ్యాంక్ ఆఫ్ ఇండియాచే నియంత్రించబడతాయి. వడ్డీ వ్యాపారులు, వ్యాపారులు మరియు బంధువులు వంటి అనధికారిక వనరులు ఈ అధికారిక నియంత్రణ చట్రం వెలుపల పనిచేస్తాయి."
  },
  {
    "id": 408,
    "question": "In India, National Income is calculated by (TSTET 28 June 2025)\nభారతదేశంలో, జాతీయ ఆదాయాన్ని ఎవరు లెక్కిస్తారు",
    "options": [
      "National statistical office\nజాతీయ గణాంక కార్యాలయం",
      "Planning commission\nప్రణాళికా సంఘం",
      "Ministry of Finance\nఆర్థిక మంత్రిత్వ శాఖ",
      "Reserve Bank of India\nభారతీయ రిజర్వ్ బ్యాంక్"
    ],
    "correctAnswer": 0,
    "explanation": "భారతదేశంలో జాతీయ ఆదాయం యొక్క అంచనాను జాతీయ గణాంక కార్యాలయం (NSO) నిర్వహిస్తుంది, ఇది గణాంకాలు మరియు కార్యక్రమాల అమలు మంత్రిత్వ శాఖ (MoSPI) యొక్క ఒక విభాగం."
  },
  {
    "id": 409,
    "question": "This is not related to the features of Social Studies (TSTET 28 June 2025)\nఇది సాంఘిక శాస్త్రం యొక్క లక్షణాలకు సంబంధించినది కాదు",
    "options": [
      "The study of human relations\nమానవ సంబంధాల అధ్యయనం",
      "The study of modern problems\nఆధునిక సమస్యల అధ్యయనం",
      "The study of ancient times and has no relation with present life\nప్రాచీన కాలం యొక్క అధ్యయనం మరియు ప్రస్తుత జీవితంతో సంబంధం లేదు",
      "The study of the development of human society\nమానవ సమాజ అభివృద్ధి అధ్యయనం"
    ],
    "correctAnswer": 2,
    "explanation": "సాంఘిక శాస్త్రం యొక్క ప్రధాన సూత్రం గతం మరియు వర్తమానం మధ్య సంబంధాలను అర్థం చేసుకోవడం. ఇది ఆధునిక సమస్యలు మరియు మానవ సంబంధాలకు సందర్భాన్ని అందించడానికి చరిత్ర మరియు మానవ అభివృద్ధిని అధ్యయనం చేస్తుంది. దీనికి ప్రస్తుత జీవితంతో సంబంధం లేదనే వాదన ప్రాథమికంగా తప్పు."
  },
  {
    "id": 410,
    "question": "'Taxila' and 'Nalanda' are the best examples for this source of history (TSTET 28 June 2025)\n'తక్షశిల' మరియు 'నలంద' చరిత్ర యొక్క ఈ ఆధారాలకు ఉత్తమ ఉదాహరణలు",
    "options": [
      "Archeological sources\nపురావస్తు ఆధారాలు",
      "Literacy sources\nసాహిత్య ఆధారాలు",
      "Secular Literature\nలౌకిక సాహిత్యం",
      "Religious Literature\nమత సాహిత్యం"
    ],
    "correctAnswer": 0,
    "explanation": "తక్షశిల మరియు నలందలోని ప్రాచీన విశ్వవిద్యాలయ ప్రాంగణాల శిధిలాలు పురావస్తు ప్రదేశాలు. తవ్వకాలలో లభించిన నిర్మాణాలు, కళాఖండాలు, ముద్రలు మరియు శాసనాలు గతం నుండి భౌతిక అవశేషాలు, ఇవి చరిత్రకు ప్రాథమిక పురావస్తు ఆధారాలుగా నిలుస్తాయి."
  },
  {
    "id": 411,
    "question": "This method develops the habit of self-study among students (TSTET 28 June 2025)\nఈ పద్ధతి విద్యార్థులలో స్వయం-అధ్యయనం అలవాటును పెంచుతుంది",
    "options": [
      "Lecture method\nఉపన్యాస పద్ధతి",
      "Project method\nప్రాజెక్ట్ పద్ధతి",
      "Observation method\nపరిశీలన పద్ధతి",
      "Story telling method\nకథ చెప్పే పద్ధతి"
    ],
    "correctAnswer": 1,
    "explanation": "ప్రాజెక్ట్ పద్ధతి అనేది విద్యార్థి-కేంద్రీకృత బోధనా శాస్త్రం, ఇక్కడ అభ్యాసకులు ఒక అంశాన్ని లేదా సమస్యను లోతుగా అన్వేషిస్తారు. ఈ ప్రక్రియకు విద్యార్థులు చొరవ తీసుకోవడం, పరిశోధన చేయడం మరియు వారి పనిని నిర్వహించడం అవసరం, తద్వారా స్వాతంత్ర్యం మరియు స్వయం-అధ్యయనం అలవాటును పెంపొందిస్తుంది."
  },
  {
    "id": 412,
    "question": "An important step in Project Method is (TSTET 28 June 2025)\nప్రాజెక్ట్ పద్ధతిలో ఒక ముఖ్యమైన దశ",
    "options": [
      "Choosing a Project\nప్రాజెక్ట్‌ను ఎంచుకోవడం",
      "Implementing a project\nప్రాజెక్ట్‌ను అమలు చేయడం",
      "Writing a report of a project\nప్రాజెక్ట్ యొక్క నివేదిక రాయడం",
      "Planning a project\nప్రాజెక్ట్‌ను ప్రణాళిక చేయడం"
    ],
    "correctAnswer": 0,
    "explanation": "డబ్ల్యు.హెచ్. కిల్‌పాట్రిక్ వివరించినట్లుగా, ప్రాజెక్ట్ పద్ధతిలో మొదటి దశ 'ఒక పరిస్థితిని అందించడం', ఇక్కడ ఉపాధ్యాయుడు విద్యార్థులను 'ఒక ప్రాజెక్ట్‌ను ఎంచుకోవడానికి' ప్రోత్సహించే వాతావరణాన్ని సృష్టిస్తాడు. ఈ ప్రారంభ దశ చాలా ముఖ్యమైనది, ఎందుకంటే ఇది తదుపరి అన్ని దశలకు ఉద్దేశ్యం మరియు ప్రేరణను అందిస్తుంది."
  },
  {
    "id": 413,
    "question": "Among the following, the example of a 'three dimensional aid' is (TSTET 28 June 2025)\nకింది వాటిలో, 'త్రిమితీయ సహాయకం'కి ఉదాహరణ",
    "options": [
      "Chart\nచార్ట్",
      "Model\nనమూనా",
      "Map\nపటం",
      "Picture\nచిత్రం"
    ],
    "correctAnswer": 1,
    "explanation": "త్రిమితీయ (3D) సహాయకాలకు పొడవు, వెడల్పు మరియు ఎత్తు ఉంటాయి. ఒక నమూనా, ఉదాహరణకు ఒక గ్లోబ్ లేదా ఒక భవనం యొక్క ప్రతిరూపం, ఒక 3D ప్రాతినిధ్యం. చార్ట్‌లు, పటాలు మరియు చిత్రాలు ద్విమితీయ (2D)వి, ఎందుకంటే అవి చదునుగా ఉంటాయి."
  },
  {
    "id": 414,
    "question": "Among the following, the visual aid is (TSTET 28 June 2025)\nకింది వాటిలో, దృశ్య సహాయకం ఏది",
    "options": [
      "Tape recorder\nటేప్ రికార్డర్",
      "Radio\nరేడియో",
      "Television\nటెలివిజన్",
      "Linguaphone\nలింగ్వాఫోన్"
    ],
    "correctAnswer": 2,
    "explanation": "దృశ్య సహాయకాలు చూపు ద్వారా సమాచారాన్ని తెలియజేస్తాయి. టేప్ రికార్డర్, రేడియో మరియు లింగ్వాఫోన్ శ్రవణ సహాయకాలు. టెలివిజన్ సాంకేతికంగా శ్రవణ-దృశ్య సహాయకం, కానీ ఎంపికలలో, దృశ్య భాగాన్ని కలిగి ఉన్న ఏకైకది ఇదే."
  },
  {
    "id": 415,
    "question": "A lesson plan is a (TSTET 28 June 2025)\nపాఠ్య ప్రణాళిక అనేది",
    "options": [
      "Teacher's mental and emotional visualisation of the classroom experience\nతరగతి గది అనుభవం యొక్క ఉపాధ్యాయుని మానసిక మరియు భావోద్వేగ దృశ్యీకరణ",
      "A statement of achievements to be realized\nసాధించాల్సిన విజయాల ప్రకటన",
      "A record that is to be submitted to the head master\nప్రధానోపాధ్యాయునికి సమర్పించాల్సిన రికార్డు",
      "A document to be submitted to the government for salary\nజీతం కోసం ప్రభుత్వానికి సమర్పించాల్సిన పత్రం"
    ],
    "correctAnswer": 0,
    "explanation": "పాఠ్య ప్రణాళిక అనేది బోధన కోసం ఉపాధ్యాయుని వివరణాత్మక మార్గదర్శి. ఇది ఒక సాధారణ పత్రానికి మించినది; ఇది తరగతి గదిలో అభ్యాస అనుభవం ఎలా రూపుదిద్దుకుంటుందో ఉపాధ్యాయుని ఆలోచనాత్మక ప్రణాళిక మరియు దృశ్యీకరణను ప్రతిబింబిస్తుంది, ఇందులో లక్ష్యాలు, కార్యకలాపాలు మరియు మదింపులు ఉంటాయి."
  },
  {
    "id": 416,
    "question": "The father of the 'Micro Teaching Method' is (TSTET 28 June 2025)\n'సూక్ష్మ బోధనా పద్ధతి' పితామహుడు",
    "options": [
      "B.S. Bloom\nబి.ఎస్. బ్లూమ్",
      "Dwight W. Allen\nడ్వైట్ డబ్ల్యూ. అలెన్",
      "Skinner\nస్కిన్నర్",
      "Pavlov\nపావ్లోవ్"
    ],
    "correctAnswer": 1,
    "explanation": "ఉపాధ్యాయ శిక్షణా పద్ధతిగా సూక్ష్మ బోధనను 1960ల ప్రారంభంలో స్టాన్‌ఫోర్డ్ విశ్వవిద్యాలయంలో ప్రారంభించారు. డాక్టర్ డ్వైట్ డబ్ల్యూ. అలెన్ దీని ప్రధాన సృష్టికర్తగా ఘనత పొందారు."
  },
  {
    "id": 417,
    "question": "This is not a part of Herbartian steps of lesson planning (TSTET 28 June 2025)\nఇది పాఠ్య ప్రణాళిక యొక్క హెర్బార్టియన్ సోపానాలలో భాగం కాదు",
    "options": [
      "Preparation\nసన్నాహం",
      "Home work\nగృహకార్యం",
      "Presentation\nప్రదర్శన",
      "Comparison\nపోలిక"
    ],
    "correctAnswer": 1,
    "explanation": "అధికారిక హెర్బార్టియన్ ఐదు-సోపానాల వ్యవస్థలో సన్నాహం, ప్రదర్శన, అనుబంధం (పోలిక), సాధారణీకరణ మరియు అనువర్తనం ఉన్నాయి. 'గృహకార్యం' అనేది విద్యార్థులకు తరగతి వెలుపల పూర్తి చేయడానికి కేటాయించిన ఒక కార్యాచరణ మరియు ఇది పాఠం యొక్క ప్రధాన బోధనా సోపానాలలో ఒకటిగా పరిగణించబడదు."
  },
  {
    "id": 418,
    "question": "Which one of the following is not considered as a tool for formative assessment? (TSTET 28 June 2025)\nకింది వాటిలో ఏది నిర్మాణాత్మక మదింపు కోసం ఒక సాధనంగా పరిగణించబడదు?",
    "options": [
      "Multiple choice questions\nబహుళైచ్ఛిక ప్రశ్నలు",
      "Projects\nప్రాజెక్టులు",
      "Oral questions\nమౌఖిక ప్రశ్నలు",
      "Group work\nసమూహ పని"
    ],
    "correctAnswer": 0,
    "explanation": "నిర్మాణాత్మక మదింపు అనేది పురోగతిని పర్యవేక్షించడానికి మరియు అభిప్రాయాన్ని అందించడానికి ఉపయోగించే 'అభ్యసనం కోసం మదింపు'. బహుళైచ్ఛిక ప్రశ్నలను నిర్మాణాత్మకంగా ఉపయోగించగలిగినప్పటికీ, ప్రాజెక్టులు, మౌఖిక ప్రశ్నలు మరియు సమూహ పని వంటి సాధనాలు ఈ ప్రయోజనం కోసం మరింత సహజంగా సరిపోతాయి, ఎందుకంటే అవి విద్యార్థుల ఆలోచనా ప్రక్రియలను వెల్లడిస్తాయి. బహుళైచ్ఛిక ప్రశ్నలు చాలా సాధారణంగా సంగ్రహణాత్మక మదింపు (అభ్యసనం యొక్క మదింపు) కోసం ఉపయోగించబడతాయి."
  },
  {
    "id": 419,
    "question": "Which is the first step in problem solving method? (TSTET 28 June 2025)\nసమస్య పరిష్కార పద్ధతిలో మొదటి సోపానం ఏది?",
    "options": [
      "Formulation of hypothesis\nపరికల్పన సూత్రీకరణ",
      "Collection of data\nదత్తాంశ సేకరణ",
      "Creating the problem situation\nసమస్యాత్మక పరిస్థితిని సృష్టించడం",
      "Analysis of data\nదత్తాంశ విశ్లేషణ"
    ],
    "correctAnswer": 2,
    "explanation": "సమస్య పరిష్కార పద్ధతి ఉపాధ్యాయుడు ఒక సమస్యను పరిచయం చేయడంతో లేదా విద్యార్థులకు ఒక సవాలును అందించే పరిస్థితిని సృష్టించడంతో ప్రారంభమవుతుంది. ఈ మొదటి సోపానం, 'సమస్యాత్మక పరిస్థితిని సృష్టించడం' లేదా 'సమస్యపై అవగాహన', కార్యాన్ని నిర్వచించడానికి మరియు అభ్యాసకులను ప్రేరేపించడానికి అవసరం."
  },
  {
    "id": 420,
    "question": "CCE means (TSTET 28 June 2025)\nCCE అంటే",
    "options": [
      "Continuous and Comprehensive Examination\nనిరంతర మరియు సమగ్ర పరీక్ష",
      "Continuous and Comprehensive Evaluation\nనిరంతర మరియు సమగ్ర మూల్యాంకనం",
      "Central and Comprehensive Examination\nకేంద్ర మరియు సమగ్ర పరీక్ష",
      "Continuous and Central Evaluation\nనిరంతర మరియు కేంద్ర మూల్యాంకనం"
    ],
    "correctAnswer": 1,
    "explanation": "CCE అంటే నిరంతర మరియు సమగ్ర మూల్యాంకనం. ఇది ఒక విద్యార్థి అభివృద్ధి యొక్క అన్ని అంశాలను కవర్ చేసే పాఠశాల ఆధారిత మూల్యాంకన వ్యవస్థ. 'నిరంతర' అనేది సంవత్సరం పొడవునా క్రమమైన మదింపులను సూచిస్తుంది, మరియు 'సమగ్ర' అనేది ఇది స్కాలస్టిక్ (విద్యా) మరియు సహ-స్కాలస్టిక్ (నైపుణ్యాలు, వైఖరులు, విలువలు) రంగాలను కవర్ చేస్తుందని అర్థం."
  },
  {
    "id": 421,
    "question": "Identify the INCORRECT statement regarding the Indian Islands from among the following (TSTET 29 June 2025)\nకింది వాటిలో భారతీయ దీవులకు సంబంధించి తప్పుగా ఉన్న వాక్యాన్ని గుర్తించండి",
    "options": [
      "Narkondam and Barren Islands are of Volcanic Origin\nనార్కొండమ్ మరియు బారెన్ దీవులు అగ్నిపర్వత మూలానికి చెందినవి",
      "The total Geographical area of Lakshadweep Islands is 32 Sq. Kms\nలక్షద్వీప్ దీవుల మొత్తం భౌగోళిక విస్తీర్ణం 32 చ.కి.మీ.",
      "The Lakshadweep islands are famous for a great variety of flora and fauna\nలక్షద్వీప్ దీవులు గొప్ప వృక్షజాలం మరియు జంతుజాలానికి ప్రసిద్ధి చెందాయి",
      "The southernmost tip of India is found in Lakshadweep Island\nభారతదేశం యొక్క దక్షిణ కొన లక్షద్వీప్ దీవిలో ఉంది"
    ],
    "correctAnswer": 3,
    "explanation": "భారతదేశం యొక్క దక్షిణ కొన ఇందిరా పాయింట్, ఇది అండమాన్ మరియు నికోబార్ దీవులలో భాగమైన గ్రేట్ నికోబార్ దీవిలో ఉంది. మిగిలిన వాక్యాలు సరైనవి: బారెన్ దీవి ఒక క్రియాశీల అగ్నిపర్వతం, లక్షద్వీప్ విస్తీర్ణం 32 చ.కి.మీ., మరియు ఇది గొప్ప జీవవైవిధ్యానికి ప్రసిద్ధి చెందింది."
  },
  {
    "id": 422,
    "question": "At this place, the river Ganga which emerges from the mountains reaches on to the Plains (TSTET 29 June 2025)\nఈ ప్రదేశంలో, పర్వతాల నుండి ఉద్భవించే గంగా నది మైదానాలకు చేరుకుంటుంది",
    "options": [
      "Alakananda\nఅలకనంద",
      "Devaprayaga\nదేవప్రయాగ",
      "Allahabad\nఅలహాబాద్",
      "Haridwar\nహరిద్వార్"
    ],
    "correctAnswer": 3,
    "explanation": "గంగా నది హిమాలయాల నుండి ప్రవహించి, ఉత్తరాఖండ్‌లోని తీర్థయాత్రా నగరమైన హరిద్వార్ వద్ద మొదటిసారిగా ఇండో-గంగా మైదానాలలోకి ప్రవేశిస్తుంది."
  },
  {
    "id": 423,
    "question": "Towards the end of the summer season, these help in the early ripening of mangoes and other plantation crops in Peninsular India (TSTET 29 June 2025)\nవేసవి కాలం చివరిలో, ఇవి ద్వీపకల్ప భారతదేశంలో మామిడి మరియు ఇతర తోట పంటలు త్వరగా పక్వానికి రావడానికి సహాయపడతాయి",
    "options": [
      "Trade Winds\nవ్యాపార పవనాలు",
      "pre-monsoon showers\nరుతుపవనాలకు ముందు కురిసే జల్లులు",
      "North-East Monsoon Winds\nఈశాన్య రుతుపవనాలు",
      "Western Disturbances\nపశ్చిమ అవాంతరాలు"
    ],
    "correctAnswer": 1,
    "explanation": "ప్రధాన నైరుతి రుతుపవనాలకు ముందు సంభవించే రుతుపవనాలకు ముందు కురిసే జల్లులను, కేరళ మరియు కర్ణాటక వంటి రాష్ట్రాలలో స్థానికంగా 'మామిడి జల్లులు' అని పిలుస్తారు, ఎందుకంటే అవి మామిడి పండ్ల పక్వానికి చాలా ముఖ్యమైనవి."
  },
  {
    "id": 424,
    "question": "Infant mortality rate (IMR) refers to (TSTET 29 June 2025)\nశిశు మరణాల రేటు (IMR) అంటే",
    "options": [
      "the number of infant deaths, below the age of one year per 1,000 live births in a specific population and time period\nఒక నిర్దిష్ట జనాభా మరియు కాల వ్యవధిలో ప్రతి 1,000 సజీవ జననాలకు ఒక సంవత్సరం లోపు శిశు మరణాల సంఖ్య",
      "the number of infant deaths, below the age of one year per 100 live births in a specific population and time period\nఒక నిర్దిష్ట జనాభా మరియు కాల వ్యవధిలో ప్రతి 100 సజీవ జననాలకు ఒక సంవత్సరం లోపు శిశు మరణాల సంఖ్య",
      "the number of deaths, below the age of five years per 100 live births in a specific population and time period\nఒక నిర్దిష్ట జనాభా మరియు కాల వ్యవధిలో ప్రతి 100 సజీవ జననాలకు ఐదేళ్ల లోపు మరణాల సంఖ్య",
      "The number of deaths, below the age of two years per 1000 live births in a specific population and time period\nఒక నిర్దిష్ట జనాభా మరియు కాల వ్యవధిలో ప్రతి 1000 సజీవ జననాలకు రెండేళ్ల లోపు మరణాల సంఖ్య"
    ],
    "correctAnswer": 0,
    "explanation": "శిశు మరణాల రేటు (IMR) అనేది ఒక నిర్దిష్ట కాలంలో ప్రతి 1,000 సజీవ జననాలకు ఒక సంవత్సరం కంటే తక్కువ వయస్సు ఉన్న పిల్లల మరణాల సంఖ్యగా నిర్వచించబడిన ఒక ప్రామాణిక ఆరోగ్య సూచిక."
  },
  {
    "id": 425,
    "question": "This country in Africa is often referred to as the \"Land of Copper\" (TSTET 29 June 2025)\nఆఫ్రికాలోని ఈ దేశాన్ని తరచుగా \"రాగి భూమి\" అని పిలుస్తారు",
    "options": [
      "Ghana\nఘనా",
      "Sudan\nసూడాన్",
      "Zambia\nజాంబియా",
      "Libya\nలిబియా"
    ],
    "correctAnswer": 2,
    "explanation": "జాంబియా దాని విస్తారమైన రాగి నిల్వలకు ప్రసిద్ధి చెందింది మరియు ఈ లోహం యొక్క ప్రధాన ప్రపంచ ఉత్పత్తిదారు. దాని ఆర్థిక వ్యవస్థ రాగి మైనింగ్‌పై, ముఖ్యంగా కాపర్‌బెల్ట్ ప్రావిన్స్‌లో ఎక్కువగా ఆధారపడి ఉంది, దీనికి 'రాగి భూమి' అనే మారుపేరును సంపాదించిపెట్టింది."
  },
  {
    "id": 426,
    "question": "Among the following, the layer that forms nearly 83% of the volume of the earth is (TSTET 29 June 2025)\nకింది వాటిలో, భూమి యొక్క పరిమాణంలో దాదాపు 83% ఏర్పరిచే పొర ఏది",
    "options": [
      "Continental Crust\nఖండాంతర పటలం",
      "Oceanic Crust\nసముద్రపు పటలం",
      "Mantle\nభూప్రావారం",
      "Core\nభూకేంద్రకం"
    ],
    "correctAnswer": 2,
    "explanation": "భూమి యొక్క భూప్రావారం పటలం మరియు బాహ్య కేంద్రకం మధ్య ఉన్న పొర. ఇది అత్యంత మందమైన పొర మరియు భూమి యొక్క మొత్తం పరిమాణంలో సుమారు 83% ఉంటుంది."
  },
  {
    "id": 427,
    "question": "The Sarees made at this place are of unique design and colour which is quite distinct from other silk sarees. So, it is the first handloom cloth patented in India (TSTET 29 June 2025)\nఈ ప్రదేశంలో తయారైన చీరలు ప్రత్యేకమైన డిజైన్ మరియు రంగును కలిగి ఉంటాయి, ఇవి ఇతర పట్టు చీరల నుండి చాలా భిన్నంగా ఉంటాయి. అందువల్ల, ఇది భారతదేశంలో పేటెంట్ పొందిన మొదటి చేనేత వస్త్రం",
    "options": [
      "Banaras Sarees\nబనారస్ చీరలు",
      "Pochampally Sarees\nపోచంపల్లి చీరలు",
      "Gadwal Sarees\nగద్వాల్ చీరలు",
      "Kothakota Sarees\nకొత్తకోట చీరలు"
    ],
    "correctAnswer": 1,
    "explanation": "తెలంగాణ నుండి పోచంపల్లి ఇక్కత్ 2005లో భౌగోళిక సూచిక (GI) హోదాను పొందిన మొదటి సాంప్రదాయ భారతీయ హస్తకళ. ఈ రక్షణ ఒక భౌగోళిక ప్రదేశానికి ప్రత్యేకమైన ఉత్పత్తుల కోసం పేటెంట్ మాదిరిగానే ఉంటుంది."
  },
  {
    "id": 428,
    "question": "Among the following Asian countries, the country which is ahead in every aspect such as per capita income, Life Expectancy at Birth, Mean Years of Schooling etc as per HDI report 2018 (TSTET 29 June 2025)\n2018 HDI నివేదిక ప్రకారం కింది ఆసియా దేశాలలో, తలసరి ఆదాయం, పుట్టినప్పుడు ఆయుర్దాయం, సగటు పాఠశాల విద్య సంవత్సరాలు వంటి ప్రతి అంశంలో ముందున్న దేశం ఏది",
    "options": [
      "India\nభారతదేశం",
      "Sri Lanka\nశ్రీలంక",
      "Pakistan\nపాకిస్తాన్",
      "Bangladesh\nబంగ్లాదేశ్"
    ],
    "correctAnswer": 1,
    "explanation": "UNDP ప్రచురించిన 2018 మానవ అభివృద్ధి సూచిక (HDI) నివేదిక ప్రకారం, శ్రీలంక భారతదేశం, పాకిస్తాన్ మరియు బంగ్లాదేశ్ ('మధ్యస్థ మానవ అభివృద్ధి' కేటగిరీలో ఉన్నవి) కంటే గణనీయంగా ఉన్నత స్థానంలో ('అధిక' మానవ అభివృద్ధి కేటగిరీలో) ఉంది."
  },
  {
    "id": 429,
    "question": "Renewable Resource means (TSTET 29 June 2025)\nపునరుత్పాదక వనరు అంటే",
    "options": [
      "the resources that continue to exist despite being consumed\nవినియోగించినప్పటికీ ఉనికిలో ఉండే వనరులు",
      "The resource that cannot be readily replaced by natural means\nసహజ మార్గాల ద్వారా తేలికగా భర్తీ చేయలేని వనరు",
      "The resource that can be used in multiple ways\nబహుళ మార్గాల్లో ఉపయోగించగల వనరు",
      "The resource that cannot be used in any way for production\nఉత్పత్తి కోసం ఏ విధంగానూ ఉపయోగించలేని వనరు"
    ],
    "correctAnswer": 0,
    "explanation": "పునరుత్పాదక వనరు అనేది ఒక సహజ వనరు, ఇది సహజ పునరుత్పత్తి లేదా ఇతర పునరావృత ప్రక్రియల ద్వారా వినియోగం వలన క్షీణించిన భాగాన్ని భర్తీ చేయడానికి తిరిగి నింపుకుంటుంది. ఉదాహరణకు సౌరశక్తి, గాలి మరియు నీరు."
  },
  {
    "id": 430,
    "question": "Identify the INCORRECT statement regarding 'Latitudes' (TSTET 29 June 2025)\n'అక్షాంశాల'కు సంబంధించి తప్పుగా ఉన్న వాక్యాన్ని గుర్తించండి",
    "options": [
      "The word latitude is derived from the Latin word 'Latitudo' which means length\nఅక్షాంశం అనే పదం లాటిన్ పదం 'లాటిట్యూడో' నుండి ఉద్భవించింది, దీని అర్థం పొడవు",
      "Latitude values range from 0° to 90° North and 90° South\nఅక్షాంశాల విలువలు 0° నుండి 90° ఉత్తరం మరియు 90° దక్షిణం వరకు ఉంటాయి",
      "Every latitude must be designated with direction 'N' for North and 'S' for South\nప్రతి అక్షాంశం ఉత్తరం కోసం 'N' మరియు దక్షిణం కోసం 'S' దిశతో సూచించబడాలి",
      "Equator is the largest among all the latitudes\nఅన్ని అక్షాంశాలలో భూమధ్యరేఖ అతిపెద్దది"
    ],
    "correctAnswer": 0,
    "explanation": "లాటిన్ పదం 'లాటిట్యూడో' అంటే 'వెడల్పు' లేదా 'విస్తీర్ణం', ఇది అక్షాంశాల అడ్డ గీతలను కచ్చితంగా వివరిస్తుంది. 'పొడవు' రేఖాంశానికి అనుగుణంగా ఉంటుంది. ఇతర వాక్యాలు అన్నీ అక్షాంశాల గురించిన సరైన వాస్తవాలు."
  },
  {
    "id": 431,
    "question": "Submarine Canyons which were found in Continental slope were formed by the process of (TSTET 29 June 2025)\nఖండాంతర వాలులో కనిపించే సముద్రగర్భ కాన్యన్‌లు ఏ ప్రక్రియ ద్వారా ఏర్పడ్డాయి",
    "options": [
      "Erosion of wind\nగాలి కోత",
      "Waves\nఅలలు",
      "Erosion of Glaciers and rivers\nహిమానీనదాలు మరియు నదుల కోత",
      "Erosion of Wind and waves\nగాలి మరియు అలల కోత"
    ],
    "correctAnswer": 2,
    "explanation": "సముద్రగర్భ కాన్యన్‌లు ప్రధానంగా టర్బిడిటీ కరెంట్స్ (అవక్షేపం యొక్క నీటి అడుగున కొండచరియలు విరిగిపడటం) ద్వారా ఏర్పడతాయి. అయినప్పటికీ, సముద్ర మట్టాలు చాలా తక్కువగా ఉన్న హిమయుగాల సమయంలో ఖండాంతర షెల్ఫ్ మీదుగా కాలువలను చెక్కిన నదీ వ్యవస్థల పొడిగింపులు కూడా అనేకం ఉన్నాయి."
  },
  {
    "id": 432,
    "question": "These forests grow in dry areas with little rainfall and high temperatures (TSTET 29 June 2025)\nఈ అడవులు తక్కువ వర్షపాతం మరియు అధిక ఉష్ణోగ్రతలు ఉన్న పొడి ప్రాంతాలలో పెరుగుతాయి",
    "options": [
      "Evergreen Forests\nసతత హరిత అడవులు",
      "Coniferous forests\nశృంగాకార అడవులు",
      "Thorny Forests\nముళ్ళ అడవులు",
      "Deciduous forests\nఆకురాల్చే అడవులు"
    ],
    "correctAnswer": 2,
    "explanation": "ముళ్ళ అడవులు, లేదా ముళ్ళ పొదలు, శుష్క మరియు పాక్షిక-శుష్క ప్రాంతాల లక్షణం. ఈ అడవులలోని మొక్కలు తక్కువ వర్షపాతం మరియు అధిక ఉష్ణోగ్రతల పరిస్థితులలో నీటిని సంరక్షించడానికి పొడవైన వేర్లు, ముళ్ళు మరియు చిన్న ఆకుల వంటి అనుకూలతలను కలిగి ఉంటాయి."
  },
  {
    "id": 433,
    "question": "The possibility of percolation of water into the soil is greater when (TSTET 29 June 2025)\nనీరు నేలలోకి ఇంకే అవకాశం ఎప్పుడు ఎక్కువగా ఉంటుంది",
    "options": [
      "the flow of the rain water is checked by vegetation or bunds\nవర్షపు నీటి ప్రవాహాన్ని వృక్షసంపద లేదా కట్టల ద్వారా అడ్డుకున్నప్పుడు",
      "the river water is allowed to flow freely without any obstruction\nనదీ జలాలు ఎటువంటి ఆటంకం లేకుండా స్వేచ్ఛగా ప్రవహించడానికి అనుమతించినప్పుడు",
      "the surface rock is very hard\nఉపరితల శిల చాలా కఠినంగా ఉన్నప్పుడు",
      "the trees in the forests are cut down and allow the water to flow freely\nఅడవులలోని చెట్లను నరికివేసి, నీరు స్వేచ్ఛగా ప్రవహించడానికి అనుమతించినప్పుడు"
    ],
    "correctAnswer": 0,
    "explanation": "పెర్కోలేషన్ అనేది నేల ద్వారా నీటి కదలిక. ఉపరితల ప్రవాహాన్ని వృక్షసంపద లేదా కట్టల ద్వారా మందగించినప్పుడు, నీరు భూమిలోకి ఇంకడానికి ఎక్కువ సమయం ఉంటుంది, తద్వారా పెర్కోలేషన్ పెరిగి భూగర్భ జలాలు రీఛార్జ్ అవుతాయి."
  },
  {
    "id": 434,
    "question": "As per the regulations of the Indus Water Treaty-1960, India can use only 20% of the total water carried by the Indus River System and this water can be used for irrigation in these states of India (TSTET 29 June 2025)\nసింధు నదీ జలాల ఒప్పందం-1960 నిబంధనల ప్రకారం, సింధు నదీ వ్యవస్థ ద్వారా ప్రవహించే మొత్తం నీటిలో భారతదేశం కేవలం 20% మాత్రమే ఉపయోగించుకోగలదు మరియు ఈ నీటిని భారతదేశంలోని ఈ రాష్ట్రాలలో నీటిపారుదల కోసం ఉపయోగించవచ్చు",
    "options": [
      "Punjab, Haryana and Rajasthan\nపంజాబ్, హర్యానా మరియు రాజస్థాన్",
      "Punjab, Himachal Pradesh and Jammu and Kashmir\nపంజాబ్, హిమాచల్ ప్రదేశ్ మరియు జమ్మూ మరియు కాశ్మీర్",
      "Punjab. Haryana and Jammu and Kashmir\nపంజాబ్, హర్యానా మరియు జమ్మూ మరియు కాశ్మీర్",
      "Punjab, Haryana and Himachal Pradesh\nపంజాబ్, హర్యానా మరియు హిమాచల్ ప్రదేశ్"
    ],
    "correctAnswer": 0,
    "explanation": "సింధు జలాల ఒప్పందం ప్రకారం, మూడు తూర్పు నదులైన రావి, బియాస్ మరియు సట్లెజ్ జలాలపై భారతదేశానికి పూర్తి హక్కులు ఉన్నాయి. ఈ నదుల ద్వారా నీరందించే నీటిపారుదల వ్యవస్థలు ప్రధానంగా పంజాబ్, హర్యానా మరియు రాజస్థాన్‌లకు సేవలు అందిస్తాయి."
  },
  {
    "id": 435,
    "question": "This formed the foundation for India's Democracy (TSTET 29 June 2025)\nఇది భారతదేశ ప్రజాస్వామ్యానికి పునాది వేసింది",
    "options": [
      "The values set forth by the American Constitution\nఅమెరికన్ రాజ్యాంగం నిర్దేశించిన విలువలు",
      "The ideals like liberalism and authoritarianism\nఉదారవాదం మరియు నిరంకుశత్వం వంటి ఆదర్శాలు",
      "The directive principles of State Policy adopted from Irish Constitution\nఐరిష్ రాజ్యాంగం నుండి స్వీకరించబడిన ఆదేశిక సూత్రాలు",
      "The Values that inspired and guided the Indian freedom struggle\nభారత స్వాతంత్ర్య సంగ్రామాన్ని ప్రేరేపించి, మార్గనిర్దేశం చేసిన విలువలు"
    ],
    "correctAnswer": 3,
    "explanation": "భారత ప్రజాస్వామ్యం యొక్క స్వేచ్ఛ, సమానత్వం, సౌభ్రాతృత్వం మరియు న్యాయం వంటి ప్రధాన సూత్రాలు స్వాతంత్ర్యం కోసం జాతీయ ఉద్యమాన్ని ఉత్తేజపరిచిన విలువల నుండి ఉద్భవించాయి. ఈ విలువలు రాజ్యాంగం యొక్క పీఠికలో స్పష్టంగా పేర్కొనబడ్డాయి."
  },
  {
    "id": 436,
    "question": "In the Indian Constitution, these lay down some specific tasks before the Government of India such as Universalizing Literacy, protection of Environment etc. (TSTET 29 June 2025)\nభారత రాజ్యాంగంలో, ఇవి భారత ప్రభుత్వం ముందు సార్వత్రిక అక్షరాస్యత, పర్యావరణ పరిరక్షణ వంటి కొన్ని నిర్దిష్ట పనులను నిర్దేశిస్తాయి.",
    "options": [
      "Fundamental Rights of the Indian Constitution\nభారత రాజ్యాంగం యొక్క ప్రాథమిక హక్కులు",
      "Fundamental Duties of a Citizen\nపౌరుడి ప్రాథమిక విధులు",
      "Directive Principles of a State Policy\nఆదేశిక సూత్రాలు",
      "Human Rights\nమానవ హక్కులు"
    ],
    "correctAnswer": 2,
    "explanation": "రాష్ట్ర విధాన నిర్దేశక సూత్రాలు (DPSP) పాలనలో రాష్ట్రం అనుసరించాల్సిన మార్గదర్శకాలు. వాటిలో విద్యను ప్రోత్సహించడం (ఆర్టికల్ 45), పర్యావరణాన్ని పరిరక్షించడం (ఆర్టికల్ 48A) మరియు ఇతర సామాజిక మరియు ఆర్థిక లక్ష్యాలు ఉన్నాయి."
  },
  {
    "id": 437,
    "question": "This independent institution supervises the expenditure of the Government in India (TSTET 29 June 2025)\nభారతదేశంలో ప్రభుత్వ వ్యయాన్ని ఈ స్వతంత్ర సంస్థ పర్యవేక్షిస్తుంది",
    "options": [
      "NITI Aayog\nనీతి ఆయోగ్",
      "Comptroller and Auditor General\nకంప్ట్రోలర్ మరియు ఆడిటర్ జనరల్",
      "Finance Commission\nఆర్థిక సంఘం",
      "Attorney General\nఅటార్నీ జనరల్"
    ],
    "correctAnswer": 1,
    "explanation": "భారత కంప్ట్రోలర్ మరియు ఆడిటర్ జనరల్ (CAG) అత్యున్నత ఆడిట్ సంస్థ. ఇది ఒక రాజ్యాంగబద్ధమైన సంస్థ, ఇది ఆర్థిక జవాబుదారీతనాన్ని నిర్ధారించడానికి కేంద్ర మరియు రాష్ట్ర ప్రభుత్వాల అన్ని రాబడులు మరియు వ్యయాలను ఆడిట్ చేస్తుంది."
  },
  {
    "id": 438,
    "question": "In 2009, the Indian Parliament passed the \"Right of Children to free and compulsory Education Act\" in order to (TSTET 29 June 2025)\n2009లో, భారత పార్లమెంట్ \"పిల్లల ఉచిత మరియు నిర్బంధ విద్యా హక్కు చట్టం\"ను దేనికోసం ఆమోదించింది",
    "options": [
      "Ensure that all children below the age of 14 years get quality education\n14 సంవత్సరాల కంటే తక్కువ వయస్సు ఉన్న పిల్లలందరికీ నాణ్యమైన విద్య అందేలా చూడటం",
      "Ensure that all children living in the rural areas only get quality education only\nగ్రామీణ ప్రాంతాలలో నివసిస్తున్న పిల్లలందరికీ మాత్రమే నాణ్యమైన విద్య అందేలా చూడటం",
      "Ensure that all children below the age of 16 years get quality education\n16 సంవత్సరాల కంటే తక్కువ వయస్సు ఉన్న పిల్లలందరికీ నాణ్యమైన విద్య అందేలా చూడటం",
      "Ensure that all Physically Handicapped Children only get quality education\nశారీరక వికలాంగులైన పిల్లలందరికీ మాత్రమే నాణ్యమైన విద్య అందేలా చూడటం"
    ],
    "correctAnswer": 0,
    "explanation": "విద్యా హక్కు (RTE) చట్టం, 2009, 6 నుండి 14 సంవత్సరాల వయస్సు గల పిల్లలందరికీ ప్రాథమిక విద్యను ఒక ప్రాథమిక హక్కుగా మార్చింది, ప్రాథమిక విద్యను ఉచితం మరియు నిర్బంధం చేసింది."
  },
  {
    "id": 439,
    "question": "If there are any differences between the two houses of the Parliament in passing an ordinary law, the final decision shall be taken in (TSTET 29 June 2025)\nఒక సాధారణ చట్టాన్ని ఆమోదించడంలో పార్లమెంటు యొక్క రెండు సభల మధ్య ఏవైనా భేదాభిప్రాయాలు ఉంటే, తుది నిర్ణయం ఎక్కడ తీసుకోబడుతుంది",
    "options": [
      "The Lok Sabha only\nలోక్‌సభలో మాత్రమే",
      "The Rajya Sabha only\nరాజ్యసభలో మాత్రమే",
      "The state Legislative Assemblies\nరాష్ట్ర శాసనసభలలో",
      "The joint session of the Parliament\nపార్లమెంటు యొక్క ఉభయ సభల సంయుక్త సమావేశంలో"
    ],
    "correctAnswer": 3,
    "explanation": "ఒక సాధారణ బిల్లుపై లోక్‌సభ మరియు రాజ్యసభ మధ్య ప్రతిష్టంభనను పరిష్కరించడానికి, రాజ్యాంగంలోని ఆర్టికల్ 108 రాష్ట్రపతిచే పిలువబడే ఉభయ సభల సంయుక్త సమావేశానికి వీలు కల్పిస్తుంది. అప్పుడు మెజారిటీ ఓటు ద్వారా నిర్ణయం తీసుకోబడుతుంది."
  },
  {
    "id": 440,
    "question": "One of the following is NOT the aim of the 42nd Amendment of the Indian Constitution (TSTET 29 June 2025)\nకింది వాటిలో ఒకటి భారత రాజ్యాంగం యొక్క 42వ సవరణ లక్ష్యం కాదు",
    "options": [
      "Excluding the courts from election disputes\nఎన్నికల వివాదాల నుండి కోర్టులను మినహాయించడం",
      "Making education as a fundamental Right\nవిద్యను ప్రాథమిక హక్కుగా చేయడం",
      "Making the judiciary subservient to Parliament\nన్యాయవ్యవస్థను పార్లమెంటుకు అధీనం చేయడం",
      "Strengthening of Central Government when compared to the state Governments\nరాష్ట్ర ప్రభుత్వాలతో పోలిస్తే కేంద్ర ప్రభుత్వాన్ని బలోపేతం చేయడం"
    ],
    "correctAnswer": 1,
    "explanation": "విద్యను ప్రాథమిక హక్కుగా చేయడం 2002 నాటి 86వ సవరణ చట్టం ద్వారా సాధించబడింది, ఇది ఆర్టికల్ 21Aని చేర్చింది. 42వ సవరణ (1976) కేంద్ర ప్రభుత్వాన్ని బలోపేతం చేయడానికి మరియు న్యాయవ్యవస్థపై పార్లమెంటరీ ఆధిపత్యాన్ని స్థాపించడానికి ప్రయత్నించినందుకు ప్రసిద్ధి చెందింది."
  },
  {
    "id": 441,
    "question": "The central Government has passed the Criminal Legal Amendment Act in 2013. This was also known as (TSTET 29 June 2025)\nకేంద్ర ప్రభుత్వం 2013లో క్రిమినల్ లీగల్ అమెండ్‌మెంట్ చట్టాన్ని ఆమోదించింది. దీనిని ఇలా కూడా పిలుస్తారు",
    "options": [
      "Sharada Act\nశారదా చట్టం",
      "Nirbhaya Act\nనిర్భయ చట్టం",
      "Disha Bill\nదిశా బిల్లు",
      "POCSO Act\nపోక్సో చట్టం"
    ],
    "correctAnswer": 1,
    "explanation": "క్రిమినల్ లా (సవరణ) చట్టం, 2013, నిర్భయ చట్టంగా ప్రసిద్ధి చెందింది. ఇది 2012 ఢిల్లీ గ్యాంగ్ రేప్ కేసుకు ప్రతిస్పందనగా మహిళలపై నేరాలకు కఠినమైన చట్టాలు మరియు శిక్షలను ప్రవేశపెట్టడానికి రూపొందించబడింది."
  },
  {
    "id": 442,
    "question": "The dance that was performed to worship lord Shiva aggressively in front of Nataraja idol at the Siva Temples to motivate the soldiers before going to wars (TSTET 29 June 2025)\nశివాలయాలలో నటరాజ విగ్రహం ముందు శివుడిని ఉగ్రంగా పూజించడానికి, యుద్ధాలకు వెళ్లే ముందు సైనికులను ప్రేరేపించడానికి ప్రదర్శించబడిన నృత్యం",
    "options": [
      "Dappu Nrityam\nడప్పు నృత్యం",
      "Gussadi Nrityam\nగుస్సాడి నృత్యం",
      "Perini Nrityam\nపేరిణి నృత్యం",
      "Bharatanatyam\nభరతనాట్యం"
    ],
    "correctAnswer": 2,
    "explanation": "కాకతీయ రాజవంశం కాలంలో తెలంగాణ నుండి ఉద్భవించిన పేరిణి శివతాండవం, ఒక శక్తివంతమైన, పురుష నృత్య రూపం. ఇది సాంప్రదాయకంగా యోధులు యుద్ధానికి వెళ్ళే ముందు శివుని ఆత్మను ఆవాహన చేయడానికి ప్రదర్శించేవారు."
  },
  {
    "id": 443,
    "question": "The Constitutional Advisor of the Drafting Committee of the Indian Constitution who became the first Indian Judge in the International Court of Justice was (TSTET 29 June 2025)\nభారత రాజ్యాంగ ముసాయిదా కమిటీకి రాజ్యాంగ సలహాదారుగా ఉండి, అంతర్జాతీయ న్యాయస్థానంలో మొదటి భారతీయ న్యాయమూర్తి అయిన వ్యక్తి",
    "options": [
      "Alladi Krishna Swamy Iyer\nఅల్లాడి కృష్ణ స్వామి అయ్యర్",
      "B.L. Mitter\nబి.ఎల్. మిట్టర్",
      "K.M. Munshi\nకె.ఎం. మున్షి",
      "Sir Benegal Narsingh Rao\nసర్ బెనెగల్ నర్సింగ్ రావు"
    ],
    "correctAnswer": 3,
    "explanation": "సర్ బి.ఎన్. రావు భారత రాజ్యాంగ సభకు రాజ్యాంగ సలహాదారుగా పనిచేశారు మరియు రాజ్యాంగ ముసాయిదాలో కీలక పాత్ర పోషించారు. ఆయన తరువాత 1952 నుండి 1953 వరకు అంతర్జాతీయ న్యాయస్థానం (ICJ)లో న్యాయమూర్తి అయ్యారు."
  },
  {
    "id": 444,
    "question": "Jyotiba Phule founded Satya Shodak Samaj to build a new society based on (TSTET 29 June 2025)\nజ్యోతిబా ఫూలే సత్యశోధక్ సమాజ్‌ను దేని ఆధారంగా ఒక కొత్త సమాజాన్ని నిర్మించడానికి స్థాపించారు",
    "options": [
      "Caste System\nకుల వ్యవస్థ",
      "Truth and Equality\nసత్యం మరియు సమానత్వం",
      "Equity and Social Justice\nసమానత మరియు సామాజిక న్యాయం",
      "Political Justice and Political Equality\nరాజకీయ న్యాయం మరియు రాజకీయ సమానత్వం"
    ],
    "correctAnswer": 1,
    "explanation": "జ్యోతిబా ఫూలే 1873లో నిమ్న కులాలను దోపిడీ మరియు అణచివేత నుండి విముక్తి చేసే లక్ష్యంతో సత్యశోధక్ సమాజ్ (సత్యాన్వేషకుల సంఘం)ని స్థాపించారు. దాని ప్రధాన సిద్ధాంతం సత్యం, సమానత్వం మరియు హేతువాదం సూత్రాలపై ఆధారపడింది."
  },
  {
    "id": 445,
    "question": "The Government of India appointed a Supreme Court judge B.P. Jeevan Reddy to look into the possibilities of (TSTET 29 June 2025)\nభారత ప్రభుత్వం సుప్రీంకోర్టు న్యాయమూర్తి బి.పి. జీవన్ రెడ్డిని దేని అవకాశాలను పరిశీలించడానికి నియమించింది",
    "options": [
      "convincing the people of Manipur to remain in India\nమణిపూర్ ప్రజలను భారతదేశంలోనే ఉండటానికి ఒప్పించడం",
      "revoking the AFSPA Act in north-eastern states\nఈశాన్య రాష్ట్రాలలో AFSPA చట్టాన్ని రద్దు చేయడం",
      "preventing public disorder due to alcohol abuse\nమద్యపానం దుర్వినియోగం కారణంగా ప్రజా అశాంతిని నివారించడం",
      "maintaining law and order in the state\nరాష్ట్రంలో శాంతిభద్రతలను కాపాడటం"
    ],
    "correctAnswer": 1,
    "explanation": "2004లో, సాయుధ దళాల (ప్రత్యేక అధికారాల) చట్టం, 1958 (AFSPA)ను సమీక్షించడానికి, ముఖ్యంగా ఈశాన్య రాష్ట్రాలలో దాని దుర్వినియోగానికి వ్యతిరేకంగా విస్తృత నిరసనల తరువాత, జస్టిస్ బి.పి. జీవన్ రెడ్డి నేతృత్వంలోని ఒక కమిటీని నియమించారు."
  },
  {
    "id": 446,
    "question": "As per this article of the Human Rights \"No one shall be subjected to arbitrary arrest, detention or exile\" (TSTET 29 June 2025)\nమానవ హక్కుల యొక్క ఈ అధికరణం ప్రకారం \"ఎవరూ ఏకపక్ష అరెస్టు, నిర్బంధం లేదా బహిష్కరణకు గురికాకూడదు\"",
    "options": [
      "Article 3\nఅధికరణం 3",
      "Article 5\nఅధికరణం 5",
      "Article 9\nఅధికరణం 9",
      "Article 13\nఅధికరణం 13"
    ],
    "correctAnswer": 2,
    "explanation": "విశ్వ మానవ హక్కుల ప్రకటన (UDHR) యొక్క అధికరణం 9 స్పష్టంగా, 'ఎవరూ ఏకపక్ష అరెస్టు, నిర్బంధం లేదా బహిష్కరణకు గురికాకూడదు' అని పేర్కొంది. ఇది ఒక వ్యక్తి యొక్క స్వేచ్ఛ మరియు భద్రత హక్కును పరిరక్షిస్తుంది."
  },
  {
    "id": 447,
    "question": "The Lion tailed macaque and many other species of insects and birds are unique in this place of India (TSTET 29 June 2025)\nసింహపు తోక గల మకాక్ మరియు అనేక ఇతర జాతుల కీటకాలు మరియు పక్షులు భారతదేశంలోని ఈ ప్రదేశంలో ప్రత్యేకమైనవి",
    "options": [
      "Silent Valley in Western Ghats\nపశ్చిమ కనుమలలోని సైలెంట్ వ్యాలీ",
      "Damodar Valley\nదామోదర్ వ్యాలీ",
      "Nallamala Forests of Andhra Pradesh\nఆంధ్రప్రదేశ్‌లోని నల్లమల అడవులు",
      "Pench forests in Madhya Pradesh\nమధ్యప్రదేశ్‌లోని పెంచ్ అడవులు"
    ],
    "correctAnswer": 0,
    "explanation": "కేరళలోని పశ్చిమ కనుమల నీలగిరి కొండలలో ఉన్న సైలెంట్ వ్యాలీ జాతీయ ఉద్యానవనం ఒక ప్రత్యేకమైన జీవవైవిధ్య హాట్‌స్పాట్. ఇది అంతరించిపోతున్న సింహపు తోక గల మకాక్‌కు చివరి ఆవాసంగా ప్రసిద్ధి చెందింది."
  },
  {
    "id": 448,
    "question": "In 1969, Monarchy was abolished in Libya and it had declared itself as (TSTET 29 June 2025)\n1969లో, లిబియాలో రాచరికం రద్దు చేయబడింది మరియు అది తనను తాను ఇలా ప్రకటించుకుంది",
    "options": [
      "A Democratic Libyan Arab Republic\nఒక ప్రజాస్వామ్య లిబియన్ అరబ్ రిపబ్లిక్",
      "A Communist Libyan Arab Republic\nఒక కమ్యూనిస్ట్ లిబియన్ అరబ్ రిపబ్లిక్",
      "The Socialist Libyan Arab Republic\nసోషలిస్ట్ లిబియన్ అరబ్ రిపబ్లిక్",
      "Libyan Arab Republic\nలిబియన్ అరబ్ రిపబ్లిక్"
    ],
    "correctAnswer": 3,
    "explanation": "సెప్టెంబర్ 1, 1969న ముఅమ్మర్ గడ్డాఫీ నేతృత్వంలోని సైనిక తిరుగుబాటు తరువాత, ఇది కింగ్ ఇడ్రిస్ యొక్క రాచరికాన్ని పడగొట్టింది, దేశానికి అధికారికంగా లిబియన్ అరబ్ రిపబ్లిక్ అని పేరు పెట్టారు."
  },
  {
    "id": 449,
    "question": "Norman Ernest Borlaug, the father of Green Revolution belongs to this country (TSTET 29 June 2025)\nహరిత విప్లవ పితామహుడు నార్మన్ ఎర్నెస్ట్ బోర్లాగ్ ఈ దేశానికి చెందినవాడు",
    "options": [
      "United States of America\nఅమెరికా సంయుక్త రాష్ట్రాలు",
      "Sweden\nస్వీడన్",
      "Norway\nనార్వే",
      "Germany\nజర్మనీ"
    ],
    "correctAnswer": 0,
    "explanation": "నార్మన్ బోర్లాగ్ ఒక అమెరికన్ వ్యవసాయ శాస్త్రవేత్త, ఆయన ప్రపంచవ్యాప్తంగా హరిత విప్లవం అని పిలువబడే వ్యవసాయ ఉత్పత్తిలో విస్తృతమైన పెరుగుదలకు దోహదపడిన కార్యక్రమాలకు నాయకత్వం వహించారు. ఆయన చేసిన కృషికి గాను 1970లో నోబెల్ శాంతి బహుమతి లభించింది."
  },
  {
    "id": 450,
    "question": "This crop is used both as food and fodder (TSTET 29 June 2025)\nఈ పంటను ఆహారంగా మరియు పశుగ్రాసంగా రెండింటికీ ఉపయోగిస్తారు",
    "options": [
      "Pulses\nపప్పుధాన్యాలు",
      "Sugarcane\nచెరకు",
      "Oil Seeds\nనూనె గింజలు",
      "Maize\nమొక్కజొన్న"
    ],
    "correctAnswer": 3,
    "explanation": "మొక్కజొన్న ఒక బహుముఖ పంట. ధాన్యాన్ని మానవులు తింటారు మరియు ఇది పశువుల దాణా (పశుగ్రాసం)లో కూడా ఒక ప్రాథమిక భాగం. మొక్క యొక్క మిగిలిన భాగం, కాండం మరియు ఆకులు వంటివి కూడా పశుగ్రాసంగా ఉపయోగించబడతాయి."
  },
  {
    "id": 451,
    "question": "At this stage of Paper Production, the small wood chips are sent to fibre line section (TSTET 29 June 2025)\nకాగితం ఉత్పత్తి యొక్క ఈ దశలో, చిన్న చెక్క చిప్‌లు ఫైబర్ లైన్ విభాగానికి పంపబడతాయి",
    "options": [
      "Spreading the pulp\nగుజ్జును పరచడం",
      "Chipping\nచిప్పింగ్ (చిన్న ముక్కలుగా చేయడం)",
      "Making the wood pulp\nచెక్క గుజ్జును తయారు చేయడం",
      "Cutting\nకోయడం"
    ],
    "correctAnswer": 2,
    "explanation": "చెక్క చిప్‌లను వేరు చేయబడిన ఫైబర్‌ల ద్రవ్యరాశిగా మార్చే ప్రక్రియను పల్పింగ్ అంటారు. ఇది 'చెక్క గుజ్జును తయారు చేయడం' దశ. చిప్‌లను ఒక డైజెస్టర్‌కు (ఫైబర్ లైన్‌లో భాగం) పంపుతారు, అక్కడ రసాయనాలు మరియు వేడి వాటిని గుజ్జుగా విడగొడతాయి."
  },
  {
    "id": 452,
    "question": "In this sector of the Indian economy, more number of female employees are working (TSTET 29 June 2025)\nభారత ఆర్థిక వ్యవస్థ యొక్క ఈ రంగంలో, ఎక్కువ సంఖ్యలో మహిళా ఉద్యోగులు పనిచేస్తున్నారు",
    "options": [
      "Agricultural Sector\nవ్యవసాయ రంగం",
      "Industrial Sector\nపారిశ్రామిక రంగం",
      "Service Sector\nసేవా రంగం",
      "Quaternary Sector\nచతుర్థ రంగం"
    ],
    "correctAnswer": 0,
    "explanation": "భారతదేశంలో మహిళలకు అత్యధిక ఉపాధి కల్పిస్తున్న రంగం వ్యవసాయ రంగం. భారతదేశంలోని మహిళా శ్రామిక శక్తిలో చాలా ఎక్కువ శాతం మంది సాగుదారులు మరియు కార్మికుల పాత్రలతో సహా వ్యవసాయంలో నిమగ్నమై ఉన్నారు."
  },
  {
    "id": 453,
    "question": "The overall impact of New Industrial Policy 1991 on the Indian Economy was (TSTET 29 June 2025)\nభారత ఆర్థిక వ్యవస్థపై కొత్త పారిశ్రామిక విధానం 1991 యొక్క మొత్తం ప్రభావం",
    "options": [
      "It led to rapid economic growth and liberalisation\nఇది వేగవంతమైన ఆర్థిక వృద్ధికి మరియు సరళీకరణకు దారితీసింది",
      "It had no significant impact\nదీనికి చెప్పుకోదగ్గ ప్రభావం లేదు",
      "It led to decline in economic growth\nఇది ఆర్థిక వృద్ధిలో క్షీణతకు దారితీసింది",
      "It increased the government control over the economy\nఇది ఆర్థిక వ్యవస్థపై ప్రభుత్వ నియంత్రణను పెంచింది"
    ],
    "correctAnswer": 0,
    "explanation": "1991 నాటి కొత్త పారిశ్రామిక విధానం భారతదేశ ఆర్థిక సంస్కరణలలో ఒక ముఖ్య భాగం. ఇది 'లైసెన్స్ రాజ్'ను రద్దు చేసింది, ప్రైవేటీకరణను ప్రోత్సహించింది మరియు విదేశీ పెట్టుబడులకు ఆర్థిక వ్యవస్థను తెరిచింది, సరళీకరణ మరియు అధిక ఆర్థిక వృద్ధి శకానికి నాంది పలికింది."
  },
  {
    "id": 454,
    "question": "From the following options, identify the primary function of money (TSTET 29 June 2025)\nకింది ఎంపికల నుండి, ద్రవ్యం యొక్క ప్రాథమిక విధిని గుర్తించండి",
    "options": [
      "Medium of exchange only\nవినిమయ మాధ్యమం మాత్రమే",
      "Measure of Value only\nవిలువ కొలమానం మాత్రమే",
      "Store of Value\nవిలువ నిధి",
      "Medium of exchange and measure of Value\nవినిమయ మాధ్యమం మరియు విలువ కొలమానం"
    ],
    "correctAnswer": 3,
    "explanation": "ఆర్థికవేత్తలు ద్రవ్యం యొక్క రెండు ప్రాథమిక విధులను గుర్తిస్తారు: లావాదేవీలను సులభతరం చేయడానికి 'వినిమయ మాధ్యమం'గా మరియు ధరలకు ఒక సాధారణ ప్రమాణాన్ని అందించడానికి 'విలువ కొలమానం'గా (లేదా ఖాతా యూనిట్) ఉండటం. 'విలువ నిధి' వంటి ఇతర విధులు ద్వితీయమైనవిగా పరిగణించబడతాయి."
  },
  {
    "id": 455,
    "question": "Among the following, the amount deposited in this account is more convenient to the business people (TSTET 29 June 2025)\nకింది వాటిలో, ఈ ఖాతాలో జమ చేసిన మొత్తం వ్యాపారస్తులకు మరింత సౌకర్యవంతంగా ఉంటుంది",
    "options": [
      "Saving Deposits\nపొదుపు డిపాజిట్లు",
      "Current Deposits\nకరెంట్ డిపాజిట్లు",
      "Term Deposits\nటర్మ్ డిపాజిట్లు",
      "Recurring Deposits\nరికరింగ్ డిపాజిట్లు"
    ],
    "correctAnswer": 1,
    "explanation": "కరెంట్ ఖాతాలు (కరెంట్ డిపాజిట్లు) వ్యాపారాలు, వ్యాపారులు మరియు వ్యవస్థాపకుల కోసం రూపొందించబడ్డాయి, వీరు తరచుగా లావాదేవీలు చేయవలసి ఉంటుంది. వీటికి లావాదేవీల సంఖ్యపై పరిమితులు ఉండవు మరియు ఓవర్‌డ్రాఫ్ట్ సౌకర్యాలను అందిస్తాయి, ఇవి వ్యాపార కార్యకలాపాలకు అవసరం."
  },
  {
    "id": 456,
    "question": "Whenever there is a price rise, the Reserve Bank of India which is an apex body for all the banks in India will A) Reduces the money circulation in the economy B) Asks the banks to lend less or allow depositors to withdraw less C) Controls the interest payments paid to depositors or received from the depositors'. Choose the correct option from the following (TSTET 29 June 2025)\nధరల పెరుగుదల ఉన్నప్పుడల్లా, భారతదేశంలోని అన్ని బ్యాంకులకు అత్యున్నత సంస్థ అయిన భారతీయ రిజర్వ్ బ్యాంక్ A) ఆర్థిక వ్యవస్థలో ద్రవ్య చలామణిని తగ్గిస్తుంది B) బ్యాంకులను తక్కువ రుణాలు ఇవ్వమని లేదా డిపాజిటర్లను తక్కువ ఉపసంహరించుకోవడానికి అనుమతించమని అడుగుతుంది C) డిపాజిటర్లకు చెల్లించే లేదా డిపాజిటర్ల నుండి స్వీకరించే వడ్డీ చెల్లింపులను నియంత్రిస్తుంది. కింది వాటి నుండి సరైన ఎంపికను ఎంచుకోండి",
    "options": [
      "A, B and C are correct\nA, B మరియు C సరైనవి",
      "Only A and B are correct\nA మరియు B మాత్రమే సరైనవి",
      "A, B and C are incorrect\nA, B మరియు C తప్పు",
      "Only B and C are correct\nB మరియు C మాత్రమే సరైనవి"
    ],
    "correctAnswer": 0,
    "explanation": "ద్రవ్యోల్బణాన్ని (ధరల పెరుగుదల) ఎదుర్కోవడానికి, RBI సంకోచ ద్రవ్య విధానాన్ని ఉపయోగిస్తుంది. ఇందులో ఇవి ఉంటాయి: (A) ద్రవ్య సరఫరాను తగ్గించడం, (B) బ్యాంకులకు రుణాలు ఇవ్వడాన్ని కష్టతరం చేయడం (ఉదా., రేట్లను పెంచడం ద్వారా), మరియు (C) రుణాలు తీసుకోవడం మరియు ఖర్చు చేయడాన్ని నిరుత్సాహపరచడానికి వడ్డీ రేట్లను నియంత్రించడం. ఈ మూడు చర్యలు చెల్లుబాటు అయ్యే సాధనాలే."
  },
  {
    "id": 457,
    "question": "Every year, Human Development Report is published by (TSTET 29 June 2025)\nప్రతి సంవత్సరం, మానవ అభివృద్ధి నివేదికను ప్రచురించేది",
    "options": [
      "United Nations Development Programme (UNDP)\nఐక్యరాజ్యసమితి అభివృద్ధి కార్యక్రమం (UNDP)",
      "World Bank\nప్రపంచ బ్యాంకు",
      "International Monetary Fund (IMF)\nఅంతర్జాతీయ ద్రవ్య నిధి (IMF)",
      "World Health Organization (WHO)\nప్రపంచ ఆరోగ్య సంస్థ (WHO)"
    ],
    "correctAnswer": 0,
    "explanation": "మానవ అభివృద్ధి నివేదిక, ఇందులో ప్రసిద్ధ మానవ అభివృద్ధి సూచిక (HDI) ఉంటుంది, ఇది ఐక్యరాజ్యసమితి అభివృద్ధి కార్యక్రమం (UNDP) యొక్క ప్రతిష్టాత్మక వార్షిక ప్రచురణ."
  },
  {
    "id": 458,
    "question": "Which of the following is the correct time-lag for the financial year of India? (TSTET 29 June 2025)\nకింది వాటిలో భారతదేశ ఆర్థిక సంవత్సరానికి సరైన కాల వ్యవధి ఏది?",
    "options": [
      "15th Mar to 14th March of the following year\nమార్చి 15 నుండి మరుసటి సంవత్సరం మార్చి 14 వరకు",
      "1st April to 1st March of the following year\nఏప్రిల్ 1 నుండి మరుసటి సంవత్సరం మార్చి 1 వరకు",
      "1st April to 31st March of the following year\nఏప్రిల్ 1 నుండి మరుసటి సంవత్సరం మార్చి 31 వరకు",
      "1st January to 31st December of the following year\nజనవరి 1 నుండి అదే సంవత్సరం డిసెంబర్ 31 వరకు"
    ],
    "correctAnswer": 2,
    "explanation": "భారత ప్రభుత్వానికి మరియు దేశంలో అకౌంటింగ్ ప్రయోజనాల కోసం అధికారిక ఆర్థిక సంవత్సరం, దీనిని ఆర్థిక సంవత్సరం అని కూడా అంటారు, ఇది ఏప్రిల్ 1 నుండి తరువాతి క్యాలెండర్ సంవత్సరం మార్చి 31 వరకు ఉంటుంది."
  },
  {
    "id": 459,
    "question": "\"We have emerged from this war, the most powerful nation in the world—the most powerful nation, perhaps, in all history.\" Whose words were these? (TSTET 29 June 2025)\n\"మనం ఈ యుద్ధం నుండి ప్రపంచంలోనే అత్యంత శక్తివంతమైన దేశంగా ఆవిర్భవించాము-బహుశా, మొత్తం చరిత్రలోనే అత్యంత శక్తివంతమైన దేశం.\" ఈ మాటలు ఎవరివి?",
    "options": [
      "Winston Churchill\nవిన్‌స్టన్ చర్చిల్",
      "Harry Truman\nహ్యారీ ట్రూమన్",
      "Woodrow Wilson\nవుడ్రో విల్సన్",
      "F.D. Roosevelt\nఎఫ్.డి. రూజ్‌వెల్ట్"
    ],
    "correctAnswer": 1,
    "explanation": "ఈ ఉల్లేఖన ఆగష్టు 9, 1945న అమెరికా అధ్యక్షుడు హ్యారీ ఎస్. ట్రూమన్ జపాన్‌పై అణుబాంబుల వాడకం తర్వాత అమెరికన్ ప్రజలకు చేసిన రేడియో ప్రసంగం నుండి తీసుకోబడింది, ఇది రెండవ ప్రపంచ యుద్ధం ముగింపులో అమెరికా యొక్క ఆధిపత్య ప్రపంచ స్థానాన్ని ప్రతిబింబిస్తుంది."
  },
  {
    "id": 460,
    "question": "According to this Act, \"adult male labourers could not be made to work for more than 12 hours per day\" (TSTET 29 June 2025)\nఈ చట్టం ప్రకారం, \"వయోజన పురుష కార్మికులను రోజుకు 12 గంటల కంటే ఎక్కువ పని చేయించకూడదు\"",
    "options": [
      "Factory Act 1881\nఫ్యాక్టరీ చట్టం 1881",
      "Factory Act 1861\nఫ్యాక్టరీ చట్టం 1861",
      "Factory Act 1871\nఫ్యాక్టరీ చట్టం 1871",
      "Factory Act 1911\nఫ్యాక్టరీ చట్టం 1911"
    ],
    "correctAnswer": 3,
    "explanation": "1911 నాటి భారత ఫ్యాక్టరీ చట్టం ఒక కీలకమైన కార్మిక చట్టం, ఇది టెక్స్‌టైల్ ఫ్యాక్టరీలలో వయోజన పురుష కార్మికుల పని గంటలను రోజుకు గరిష్టంగా 12 గంటలకు పరిమితం చేస్తూ ఒక ముఖ్యమైన సంస్కరణను ప్రవేశపెట్టింది."
  },
  {
    "id": 461,
    "question": "In 1867, Prarthana Samaj in Bombay was started by (TSTET 29 June 2025)\n1867లో, బొంబాయిలో ప్రార్థన సమాజ్‌ను ప్రారంభించినది",
    "options": [
      "Swamy Dayanand Saraswathi\nస్వామి దయానంద సరస్వతి",
      "Ram Rammohan Roy\nరామ్ రామ్మోహన్ రాయ్",
      "R.G. Bhandarkar\nఆర్.జి. భండార్కర్",
      "Swamy Vivekananda\nస్వామి వివేకానంద"
    ],
    "correctAnswer": 2,
    "explanation": "ప్రార్థన సమాజ్‌ను 1867లో ఆత్మారామ్ పాండురంగ్ స్థాపించారు. అయితే, మహాదేవ్ గోవింద్ రనడే మరియు ప్రసిద్ధ పండితుడు ఆర్.జి. భండార్కర్ వంటి ప్రముఖ సంఘ సంస్కర్తలు చేరడంతో ఇది అపారమైన ప్రభావాన్ని మరియు బలాన్ని పొందింది. ఆర్.జి. భండార్కర్ ఈ సమాజ్‌తో సంబంధం ఉన్న ఒక ముఖ్య వ్యక్తి."
  },
  {
    "id": 462,
    "question": "The Enabling Act which was passed on 3rd march, 1933 gave Adolf Hitler all powers to (TSTET 29 June 2025)\nమార్చి 3, 1933న ఆమోదించబడిన ఎనేబ్లింగ్ చట్టం అడాల్ఫ్ హిట్లర్‌కు అన్ని అధికారాలను ఇచ్చింది",
    "options": [
      "rule Germany Democratically\nజర్మనీని ప్రజాస్వామ్యబద్ధంగా పాలించడానికి",
      "sideline Parliament and rule by his order\nపార్లమెంటును పక్కనపెట్టి తన ఆదేశానుసారం పాలించడానికి",
      "establish proletarian form of Government in Germany\nజర్మనీలో శ్రామిక వర్గ ప్రభుత్వాన్ని స్థాపించడానికి",
      "conduct elections in Germany and rule by its order\nజర్మనీలో ఎన్నికలు నిర్వహించి దాని ఆదేశానుసారం పాలించడానికి"
    ],
    "correctAnswer": 1,
    "explanation": "1933 నాటి ఎనేబ్లింగ్ చట్టం ఒక కీలకమైన చట్టం, ఇది ఛాన్సలర్ అడాల్ఫ్ హిట్లర్ నేతృత్వంలోని జర్మన్ క్యాబినెట్‌కు రీచ్‌స్టాగ్ (పార్లమెంట్) ప్రమేయం లేకుండా చట్టాలను రూపొందించే అధికారాన్ని మంజూరు చేసింది. ఇది ప్రజాస్వామ్య ప్రక్రియలను సమర్థవంతంగా రద్దు చేసి, హిట్లర్ నియంతృత్వానికి చట్టపరమైన పునాదిని స్థాపించింది."
  },
  {
    "id": 463,
    "question": "Among the following, the industrialist that started the 'Assembly Line Method' of production to produce more cars quickly (TSTET 29 June 2025)\nకింది వారిలో, ఎక్కువ కార్లను వేగంగా ఉత్పత్తి చేయడానికి 'అసెంబ్లీ లైన్ మెథడ్' ఉత్పత్తి విధానాన్ని ప్రారంభించిన పారిశ్రామికవేత్త",
    "options": [
      "Volkswagen\nవోక్స్‌వ్యాగన్",
      "General Motors\nజనరల్ మోటార్స్",
      "Ford Motors\nఫోర్డ్ మోటార్స్",
      "Maruthi\nమారుతి"
    ],
    "correctAnswer": 2,
    "explanation": "ఫోర్డ్ మోటార్స్ వ్యవస్థాపకుడు హెన్రీ ఫోర్డ్, 1913లో మూవింగ్ అసెంబ్లీ లైన్‌కు మార్గదర్శకత్వం వహించిన ఘనత పొందారు. ఈ ఆవిష్కరణ మోడల్ T వంటి ఆటోమొబైల్‌లను ఉత్పత్తి చేయడానికి అవసరమైన సమయం మరియు వ్యయాన్ని గణనీయంగా తగ్గించడం ద్వారా తయారీ రంగంలో విప్లవాత్మక మార్పులు తెచ్చింది."
  },
  {
    "id": 464,
    "question": "On 8th March 1917, the women of this city of Russia took out a procession demanding 'Peace and Bread' (TSTET 29 June 2025)\nమార్చి 8, 1917న, రష్యాలోని ఈ నగరానికి చెందిన మహిళలు 'శాంతి మరియు రొట్టె' డిమాండ్‌తో ఊరేగింపు తీశారు",
    "options": [
      "Moscow\nమాస్కో",
      "St. Petersburg\nసెయింట్ పీటర్స్‌బర్గ్",
      "Novosibirsk\nనోవోసిబిర్క్స్",
      "Chelyabinsk\nచెలియాబిన్స్క్"
    ],
    "correctAnswer": 1,
    "explanation": "1917 నాటి ఫిబ్రవరి విప్లవం సెయింట్ పీటర్స్‌బర్గ్‌లో (అప్పుడు పెట్రోగ్రాడ్ అని పిలువబడేది) ప్రారంభమైంది. మార్చి 8న (అంతర్జాతీయ మహిళా దినోత్సవం), వేలాది మంది మహిళా వస్త్ర కార్మికులు సమ్మె చేసి, 'శాంతి మరియు రొట్టె' కోసం ప్రదర్శనలు చేశారు, ఈ సంఘటన జార్ పదవీ విరమణకు దారితీసిన విస్తృత విప్లవానికి నాంది పలికింది."
  },
  {
    "id": 465,
    "question": "The invocation part of an inscription is Prashasti, which contains details about (TSTET 29 June 2025)\nఒక శాసనంలోని ఆహ్వాన భాగం ప్రశస్తి, ఇందులో వీరి గురించిన వివరాలు ఉంటాయి",
    "options": [
      "The brahmins and their writings\nబ్రాహ్మణులు మరియు వారి రచనలు",
      "The ruling family, their predecessor, and the period to which they belong\nపాలక కుటుంబం, వారి పూర్వీకులు, మరియు వారు చెందిన కాలం",
      "The distribution of land and the method of collection of taxes from the people\nభూమి పంపిణీ మరియు ప్రజల నుండి పన్నుల వసూలు పద్ధతి",
      "People of that kingdom and their activities\nఆ రాజ్యం యొక్క ప్రజలు మరియు వారి కార్యకలాపాలు"
    ],
    "correctAnswer": 1,
    "explanation": "ప్రశస్తి అనేది ఒక పాలకుడిని ప్రశంసిస్తూ ರಚించబడిన ఒక ప్రశంసాత్మక శాసనం, ఇది భారత చరిత్రలో సాధారణం. ఇది సాధారణంగా రాజు యొక్క వంశవృక్షం (పూర్వీకులు), అతని వ్యక్తిగత విజయాలు, అతని విజయాలు మరియు అతని పాలన యొక్క కాలక్రమాన్ని వివరిస్తుంది."
  },
  {
    "id": 481,
    "question": "The main land of India extends in between these latitudes (TSTET 29 June 2025)\nభారతదేశ ప్రధాన భూభాగం ఈ అక్షాంశాల మధ్య విస్తరించి ఉంది",
    "options": [
      "$8^{\\circ}4^{\\prime}$ N and $33^{\\circ}6^{\\prime}$ N latitudes\n$8^{\\circ}4^{\\prime}$ ఉ మరియు $33^{\\circ}6^{\\prime}$ ఉ అక్షాంశాలు",
      "$6^{\\circ}4^{\\prime}$ N and $33^{\\circ}6^{\\prime}$ N latitudes\n$6^{\\circ}4^{\\prime}$ ఉ మరియు $33^{\\circ}6^{\\prime}$ ఉ అక్షాంశాలు",
      "$8^{\\circ}4^{\\prime}$ N and $37^{\\circ}6^{\\prime}$ N latitudes\n$8^{\\circ}4^{\\prime}$ ఉ మరియు $37^{\\circ}6^{\\prime}$ ఉ అక్షాంశాలు",
      "$6^{\\circ}4^{\\prime}$ N and $37^{\\circ}6^{\\prime}$ N latitudes\n$6^{\\circ}4^{\\prime}$ ఉ మరియు $37^{\\circ}6^{\\prime}$ ఉ అక్షాంశాలు"
    ],
    "correctAnswer": 2,
    "explanation": "భారతదేశ ప్రధాన భూభాగం దక్షిణాన కన్యాకుమారి వద్ద $8^{\\circ}4^{\\prime}$ ఉత్తర అక్షాంశం నుండి కాశ్మీర్‌లోని ఉత్తర కొన వద్ద $37^{\\circ}6^{\\prime}$ ఉత్తర అక్షాంశం వరకు విస్తరించి ఉంది. $6^{\\circ}4^{\\prime}$ ఉత్తర అక్షాంశం ఇందిరా పాయింట్‌ను సూచిస్తుంది, ఇది భారత యూనియన్‌కు దక్షిణపు చిట్టచివరి కొన, ఇది ప్రధాన భూభాగంలో లేదు."
  },
  {
    "id": 482,
    "question": "This sea coast remains mostly dry during the South-west monsoon season as it is in the rain shadow area of the Arabian sea branch and is parallel to the Bay of Bengal branch (TSTET 29 June 2025)\nఈ సముద్ర తీరం అరేబియా సముద్ర శాఖ యొక్క వర్షచ్ఛాయా ప్రాంతంలో ఉండటం మరియు బంగాళాఖాతం శాఖకు సమాంతరంగా ఉండటం వలన నైరుతి రుతుపవనాల కాలంలో ఎక్కువగా పొడిగా ఉంటుంది",
    "options": [
      "Coromandel coast\nకోరమాండల్ తీరం",
      "Canara Coast\nకెనరా తీరం",
      "Konkan Coast\nకొంకణ్ తీరం",
      "Utkal Coast\nఉత్కల్ తీరం"
    ],
    "correctAnswer": 0,
    "explanation": "భారతదేశం యొక్క ఆగ్నేయ తీరంలో ఉన్న కోరమాండల్ తీరం, రుతుపవనాల అరేబియా సముద్ర శాఖకు పశ్చిమ కనుమల వర్షచ్ఛాయా ప్రాంతంలోకి వస్తుంది. బంగాళాఖాతం శాఖ ఈ తీరానికి సమాంతరంగా ప్రవహిస్తుంది, దీని వలన నైరుతి రుతుపవనాల కాలంలో చాలా తక్కువ వర్షపాతం ఉంటుంది."
  },
  {
    "id": 483,
    "question": "The river basin of this river covers Parts of Maharashtra. Madhya Pradesh, Odisha, Telangana and Andhra Pradesh (TSTET 29 June 2025)\nఈ నది యొక్క నదీ పరివాహక ప్రాంతం మహారాష్ట్ర, మధ్యప్రదేశ్, ఒడిశా, తెలంగాణ మరియు ఆంధ్రప్రదేశ్ రాష్ట్రాల భాగాలను కవర్ చేస్తుంది",
    "options": [
      "Krishna\nకృష్ణా",
      "Narmada\nనర్మద",
      "Godavari\nగోదావరి",
      "Mahanadi\nమహానది"
    ],
    "correctAnswer": 2,
    "explanation": "ద్వీపకల్ప భారతదేశంలో గోదావరి నదికి అతిపెద్ద పరివాహక ప్రాంతం ఉంది. ఇది మహారాష్ట్రలో ఉద్భవించి తెలంగాణ, ఆంధ్రప్రదేశ్, ఛత్తీస్‌గఢ్, మరియు ఒడిశా గుండా ప్రవహిస్తుంది, దీని ఉపనదులు మధ్యప్రదేశ్‌లోని కొన్ని భాగాలను కూడా కవర్ చేస్తాయి."
  },
  {
    "id": 484,
    "question": "Identify the statement that best describes 'mixed farming' among the following (TSTET 29 June 2025)\nకింది వాటిలో 'మిశ్రమ వ్యవసాయం'ను ఉత్తమంగా వివరించే వాక్యాన్ని గుర్తించండి",
    "options": [
      "Using of land for growing food and fodder crops and for rearing livestock\nఆహారం మరియు పశుగ్రాసం పంటలను పండించడానికి మరియు పశువుల పెంపకానికి భూమిని ఉపయోగించడం",
      "Using of land for growing food crops only\nఆహార పంటలను పండించడానికి మాత్రమే భూమిని ఉపయోగించడం",
      "The land used for growing of only plantation crops\nతోటల పంటలను పండించడానికి మాత్రమే ఉపయోగించే భూమి",
      "The land used for growing fodder crops and rearing of cattle only\nపశుగ్రాసం పంటలను పండించడానికి మరియు పశువుల పెంపకానికి మాత్రమే ఉపయోగించే భూమి"
    ],
    "correctAnswer": 0,
    "explanation": "మిశ్రమ వ్యవసాయం అనేది ఒక వ్యవసాయ వ్యవస్థ, దీనిలో ఒక రైతు ఒకే భూమిలో పంటల సాగు మరియు పశువుల పెంపకం వంటి విభిన్న వ్యవసాయ పద్ధతులను కలిసి నిర్వహిస్తాడు."
  },
  {
    "id": 485,
    "question": "These trees grow mostly on the sea coasts, on sandy beaches and marshy lands and on lands affected by tidal waves (TSTET 29 June 2025)\nఈ చెట్లు ఎక్కువగా సముద్ర తీరాలలో, ఇసుక బీచ్‌లు మరియు చిత్తడి నేలలలో మరియు అలల తాకిడికి గురైన భూములలో పెరుగుతాయి",
    "options": [
      "Thorny forests\nముళ్ళ అడవులు",
      "Evergreen forests\nసతత హరిత అడవులు",
      "Coniferous forests\nశృంగాకార అడవులు",
      "Mangrove forests\nమడ అడవులు"
    ],
    "correctAnswer": 3,
    "explanation": "మడ అడవులు ప్రత్యేకమైన తీరప్రాంత పర్యావరణ వ్యవస్థలు, ఇవి ఉప్పును తట్టుకోగల చెట్లు (హలోఫైట్లు) కలిగి ఉంటాయి, ఇవి ఇంటర్‌టైడల్ జోన్‌లు, చిత్తడి నేలలు మరియు అలల ప్రభావం ఉన్న ప్రాంతాలలో వృద్ధి చెందుతాయి."
  },
  {
    "id": 486,
    "question": "In a country, the Positive growth of population is observed when (TSTET 29 June 2025)\nఒక దేశంలో, జనాభా యొక్క ధనాత్మక పెరుగుదల ఎప్పుడు గమనించబడుతుంది",
    "options": [
      "The birth rate is more than the death rate\nజనన రేటు మరణాల రేటు కంటే ఎక్కువగా ఉన్నప్పుడు",
      "The birth and death rate are equal\nజనన మరియు మరణాల రేటు సమానంగా ఉన్నప్పుడు",
      "The rate of migration is more than that of immigration\nవలస రేటు వలసల కంటే ఎక్కువగా ఉన్నప్పుడు",
      "The birth rate is less than the death rate\nజనన రేటు మరణాల రేటు కంటే తక్కువగా ఉన్నప్పుడు"
    ],
    "correctAnswer": 0,
    "explanation": "జనాభా యొక్క ధనాత్మక పెరుగుదల, తరచుగా సహజ పెరుగుదల అని పిలుస్తారు, ఇది జనన రేటు (సంవత్సరానికి 1,000 మందికి జననాల సంఖ్య) మరణాల రేటు (సంవత్సరానికి 1,000 మందికి మరణాల సంఖ్య) కంటే ఎక్కువగా ఉన్నప్పుడు సంభవిస్తుంది."
  },
  {
    "id": 487,
    "question": "One among the following statements best describes the term 'Soil' (TSTET 29 June 2025)\nకింది వాక్యాలలో ఒకటి 'నేల' అనే పదాన్ని ఉత్తమంగా వివరిస్తుంది",
    "options": [
      "The breaking up of exposed rocks\nబయటపడిన రాళ్ల విచ్ఛిన్నం",
      "The layer existing in between the crust and the mantle\nభూపటలం మరియు భూప్రావారం మధ్య ఉన్న పొర",
      "The thin layer of grainy substance covering the surface of the earth\nభూమి యొక్క ఉపరితలాన్ని కప్పి ఉంచే పలుచని కణిక పదార్థ పొర",
      "The liquid material under the surface of the earth\nభూమి యొక్క ఉపరితలం కింద ఉన్న ద్రవ పదార్థం"
    ],
    "correctAnswer": 2,
    "explanation": "నేల అనేది భూమి యొక్క ఉపరితలంపై ఉన్న పొర, ఇది ఖనిజాలు, సేంద్రియ పదార్థం, నీరు మరియు గాలి మిశ్రమంతో కూడి ఉంటుంది. 'పలుచని కణిక పదార్థ పొర' అనే వివరణ ఎంపికలలో అత్యంత కచ్చితమైన సాధారణ నిర్వచనం."
  },
  {
    "id": 488,
    "question": "The main mineral constituents of the Continental crust and the Oceanic Crust respectively are (TSTET 29 June 2025)\nఖండాంతర భూపటలం మరియు సముద్ర భూపటలం యొక్క ప్రధాన ఖనిజ భాగాలు వరుసగా",
    "options": [
      "Sial (silica and alumina) and sima (silica and magnesium)\nసియాల్ (సిలికా మరియు అల్యూమినా) మరియు సిమా (సిలికా మరియు మెగ్నీషియం)",
      "sial (silica and alumina) and nife (nickel and ferrous)\nసియాల్ (సిలికా మరియు అల్యూమినా) మరియు నైఫ్ (నికెల్ మరియు ఫెర్రస్)",
      "nife (nickel and ferrous) and sima (silica and magnesium)\nనైఫ్ (నికెల్ మరియు ఫెర్రస్) మరియు సిమా (సిలికా మరియు మెగ్నీషియం)",
      "sima (silica and magnesium) and sial (silica and alumina)\nసిమా (సిలికా మరియు మెగ్నీషియం) మరియు సియాల్ (సిలికా మరియు అల్యూమినా)"
    ],
    "correctAnswer": 0,
    "explanation": "ఖండాంతర భూపటలం ప్రధానంగా సిలికా మరియు అల్యూమినియం అధికంగా ఉండే తేలికపాటి శిలలతో కూడి ఉంటుంది, అందుకే దీనిని 'సియాల్' అని అంటారు. దట్టమైన సముద్ర భూపటలం సిలికా మరియు మెగ్నీషియం అధికంగా ఉండే శిలలతో తయారవుతుంది, దీనిని 'సిమా' అని అంటారు."
  },
  {
    "id": 489,
    "question": "These rocks are formed when the molten magma cools and becomes solid (TSTET 29 June 2025)\nద్రవరూపంలో ఉన్న మాగ్మా చల్లబడి ఘనరూపం దాల్చినప్పుడు ఈ శిలలు ఏర్పడతాయి",
    "options": [
      "Igneous Rocks\nఅగ్ని శిలలు",
      "Metamorphic rocks\nరూపాంతర శిలలు",
      "Sedimentary rocks\nఅవక్షేప శిలలు",
      "Sedimentary and Metamorphic rocks\nఅవక్షేప మరియు రూపాంతర శిలలు"
    ],
    "correctAnswer": 0,
    "explanation": "అగ్ని శిలలు ద్రవరూపంలో ఉన్న శిలా పదార్థం, అంటే మాగ్మా (ఉపరితలం కింద) లేదా లావా (ఉపరితలంపై) చల్లబడి ఘనీభవించడం వల్ల ఏర్పడతాయి. 'ఇగ్నియస్' అనే పదం లాటిన్ పదం 'అగ్ని' నుండి వచ్చింది."
  },
  {
    "id": 490,
    "question": "The term 'Horticulture' refers to (TSTET 29 June 2025)\n'హార్టికల్చర్' అనే పదం దీనిని సూచిస్తుంది",
    "options": [
      "Cultivation of grapes only\nద్రాక్ష సాగు మాత్రమే",
      "Growing vegetables, flowers and fruits for commercial use\nవాణిజ్య ఉపయోగం కోసం కూరగాయలు, పువ్వులు మరియు పండ్లను పండించడం",
      "Commercial rearing of silkworms\nపట్టు పురుగుల వాణిజ్య పెంపకం",
      "Breeding of fish in specially constructed tanks and ponds\nప్రత్యేకంగా నిర్మించిన ట్యాంకులు మరియు చెరువులలో చేపల పెంపకం"
    ],
    "correctAnswer": 1,
    "explanation": "హార్టికల్చర్ అనేది వ్యవసాయంలోని ఒక శాఖ, ఇది పండ్లు, కూరగాయలు, పువ్వులు మరియు అలంకార మొక్కలతో సహా మొక్కల పెంపకంపై దృష్టి పెడుతుంది, తరచుగా వాణిజ్య ప్రయోజనాల కోసం."
  },
  {
    "id": 491,
    "question": "Among the following, the latitude passing through North America is (TSTET 29 June 2025)\nకింది వాటిలో, ఉత్తర అమెరికా గుండా వెళ్లే అక్షాంశం",
    "options": [
      "Tropic of Capricorn\nమకర రేఖ",
      "Equator\nభూమధ్యరేఖ",
      "Tropic of Cancer\nకర్కట రేఖ",
      "Antarctic Circle\nఅంటార్కిటిక్ వలయం"
    ],
    "correctAnswer": 2,
    "explanation": "కర్కట రేఖ ($23.5^{\\circ}$ ఉత్తర అక్షాంశం) ఉత్తర అమెరికా ఖండం గుండా, ప్రత్యేకంగా మెక్సికో మరియు బహామాస్ గుండా వెళ్లే ప్రధాన అక్షాంశ రేఖ."
  },
  {
    "id": 492,
    "question": "From among the following. identify the Non-Metamorphic rock (TSTET 29 June 2025)\nకింది వాటిలో, రూపాంతరం చెందని శిలను గుర్తించండి",
    "options": [
      "Marble stone\nపాలరాయి",
      "Limestone\nసున్నపురాయి",
      "Schist\nషిస్ట్",
      "Quartzite\nక్వార్ట్‌జైట్"
    ],
    "correctAnswer": 1,
    "explanation": "సున్నపురాయి ఒక అవక్షేప శిల. పాలరాయి, షిస్ట్ మరియు క్వార్ట్‌జైట్ అన్నీ రూపాంతర శిలలు. సున్నపురాయి నుండి పాలరాయి, ఇసుకరాయి నుండి క్వార్ట్‌జైట్, మరియు షేల్ లేదా మట్టిరాయి నుండి వేడి మరియు పీడనం కింద షిస్ట్ ఏర్పడతాయి."
  },
  {
    "id": 493,
    "question": "At times the river overflows its banks, then (TSTET 29 June 2025)\nకొన్నిసార్లు నది తన ఒడ్డును దాటి ప్రవహిస్తుంది, అప్పుడు",
    "options": [
      "It deposits layers of fine soil and other materials along river banks\nఇది నదీ తీరాల వెంబడి సన్నని మట్టి మరియు ఇతర పదార్థాల పొరలను నిక్షిప్తం చేస్తుంది",
      "The speed of the river increases and erodes the top most layer of the soil\nనది వేగం పెరిగి నేల పై పొరను కోతకు గురి చేస్తుంది",
      "It deposits only the material carried by it\nఇది తాను తీసుకువచ్చిన పదార్థాన్ని మాత్రమే నిక్షిప్తం చేస్తుంది",
      "It leads to the formation of Gorges\nఇది గార్జ్‌ల ఏర్పాటుకు దారితీస్తుంది"
    ],
    "correctAnswer": 0,
    "explanation": "ఒక నదికి వరద వచ్చి తన ఒడ్డును దాటినప్పుడు, నీరు వ్యాపించి వేగం తగ్గుతుంది, దీనివల్ల అది తీసుకువచ్చే అవక్షేపాన్ని నిక్షిప్తం చేస్తుంది. ఈ ప్రక్రియ సారవంతమైన వరద మైదానాలను నిర్మిస్తుంది."
  },
  {
    "id": 494,
    "question": "Among the following, these winds blow continuously and regularly throughout the year in a particular direction (TSTET 29 June 2025)\nకింది వాటిలో, ఈ గాలులు సంవత్సరం పొడవునా నిరంతరం మరియు క్రమం తప్పకుండా ఒక నిర్దిష్ట దిశలో వీస్తాయి",
    "options": [
      "Trade Winds\nవ్యాపార పవనాలు",
      "Monsoon winds\nరుతుపవనాలు",
      "Hot local Winds\nవేడి స్థానిక పవనాలు",
      "Cold Local Winds\nచల్లని స్థానిక పవనాలు"
    ],
    "correctAnswer": 0,
    "explanation": "వ్యాపార పవనాలు ఒక రకమైన గ్రహ (లేదా శాశ్వత) పవనాలు, ఇవి భూమధ్యరేఖకు సమీపంలో ఒక నిర్దిష్ట దిశలో సంవత్సరం పొడవునా స్థిరంగా వీస్తాయి. రుతుపవనాలు మరియు స్థానిక పవనాలు కాలానుగుణంగా లేదా ఆవర్తనంగా ఉంటాయి."
  },
  {
    "id": 495,
    "question": "In the First Phase of the Agricultural Development i.e. in between 1950-1965, India invested heavily on (TSTET 29 June 2025)\nవ్యవసాయ అభివృద్ధి యొక్క మొదటి దశలో అనగా 1950-1965 మధ్య, భారతదేశం దీనిపై భారీగా పెట్టుబడి పెట్టింది",
    "options": [
      "usage of high yielding variety seeds\nఅధిక దిగుబడినిచ్చే విత్తన రకాల వాడకం",
      "Provision of markets for the farmer's produce\nరైతు ఉత్పత్తికి మార్కెట్ల ఏర్పాటు",
      "Construction of irrigation projects and power projects\nనీటిపారుదల ప్రాజెక్టులు మరియు విద్యుత్ ప్రాజెక్టుల నిర్మాణం",
      "Encouraging Drip Irrigation\nబిందు సేద్యాన్ని ప్రోత్సహించడం"
    ],
    "correctAnswer": 2,
    "explanation": "ప్రారంభ పంచవర్ష ప్రణాళికల (1951-1965) కాలంలో, భారతదేశం యొక్క ప్రాథమిక దృష్టి మౌలిక సదుపాయాల కల్పనపై ఉంది. వ్యవసాయ ఉత్పాదకతను పెంచడానికి భారీ నీటిపారుదల మరియు విద్యుత్ ప్రాజెక్టులలో పెద్ద ఎత్తున పెట్టుబడులు ఇందులో ఉన్నాయి."
  },
  {
    "id": 496,
    "question": "The members of the constituent Assembly were chosen through indirect election by the members of the Provincial Legislative Assemblies that had been established under the (TSTET 29 June 2025)\nరాజ్యాంగ సభ సభ్యులు, దీని కింద స్థాపించబడిన ప్రావిన్షియల్ లెజిస్లేటివ్ అసెంబ్లీల సభ్యులచే పరోక్ష ఎన్నిక ద్వారా ఎన్నుకోబడ్డారు",
    "options": [
      "Government of India Act. 1935\nభారత ప్రభుత్వ చట్టం, 1935",
      "Minto Morely reforms, 1909\nమింటో-మోర్లే సంస్కరణలు, 1909",
      "Montague Chelmsford Reforms, 1919\nమాంటేగ్-చెమ్స్‌ఫర్డ్ సంస్కరణలు, 1919",
      "The Indian Independence Act, 1947\nభారత స్వాతంత్ర్య చట్టం, 1947"
    ],
    "correctAnswer": 0,
    "explanation": "రాజ్యాంగ సభకు ఎన్నికలు 1946లో జరిగాయి. భారత ప్రభుత్వ చట్టం, 1935 అందించిన ఫ్రేమ్‌వర్క్ కింద పనిచేస్తున్న ప్రావిన్షియల్ లెజిస్లేటివ్ అసెంబ్లీల సభ్యులచే సభ్యులు ఎన్నుకోబడ్డారు."
  },
  {
    "id": 497,
    "question": "In this form of Government system, only those in government get their authority from the people and have to answer to the people (TSTET 29 June 2025)\nఈ రకమైన ప్రభుత్వ వ్యవస్థలో, ప్రభుత్వంలో ఉన్నవారు మాత్రమే ప్రజల నుండి తమ అధికారాన్ని పొందుతారు మరియు ప్రజలకు జవాబుదారీగా ఉండాలి",
    "options": [
      "Communist\nకమ్యూనిస్ట్",
      "Democratic\nప్రజాస్వామ్య",
      "Marxist\nమార్క్సిస్ట్",
      "Dictatorial\nనియంతృత్వ"
    ],
    "correctAnswer": 1,
    "explanation": "ప్రజాస్వామ్యం యొక్క ఒక ప్రధాన సూత్రం ప్రజా సార్వభౌమాధికారం, ఇక్కడ ప్రభుత్వం పరిపాలించబడే వారి సమ్మతి నుండి తన అధికారాన్ని పొందుతుంది. ఎన్నికైన అధికారులు తాము ప్రాతినిధ్యం వహించే ప్రజలకు జవాబుదారీగా ఉంటారు."
  },
  {
    "id": 498,
    "question": "One among the following is NOT the Fundamental Right of the Indian Citizen (TSTET 29 June 2025)\nకింది వాటిలో ఒకటి భారత పౌరుడి ప్రాథమిక హక్కు కాదు",
    "options": [
      "Right to protection against arrest and detention in certain cases\nకొన్ని కేసులలో అరెస్ట్ మరియు నిర్బంధానికి వ్యతిరేకంగా రక్షణ పొందే హక్కు",
      "Right to equality of opportunity in public employment\nప్రభుత్వ ఉపాధిలో సమాన అవకాశాల హక్కు",
      "Right to form associations or unions\nసంఘాలు లేదా యూనియన్లను ఏర్పాటు చేసుకునే హక్కు",
      "Right to move to the courts to issue direction for enforcement of Directive Principles of State Policy\nఆదేశిక సూత్రాల అమలు కోసం ఆదేశాలు జారీ చేయమని కోర్టులను ఆశ్రయించే హక్కు"
    ],
    "correctAnswer": 3,
    "explanation": "ప్రాథమిక హక్కులు (రాజ్యాంగంలోని భాగం III) చట్టబద్ధంగా అమలు చేయదగినవి (న్యాయబద్ధమైనవి), అయితే ఆదేశిక సూత్రాలు (భాగం IV) ప్రభుత్వానికి న్యాయబద్ధం కాని మార్గదర్శకాలు. పౌరులు ఆదేశిక సూత్రాలను అమలు చేయమని కోర్టులను ఆశ్రయించలేరు."
  },
  {
    "id": 499,
    "question": "From among the following, identify the SAARC summits hosted by India (TSTET 29 June 2025)\nకింది వాటి నుండి, భారతదేశం ఆతిథ్యం ఇచ్చిన సార్క్ శిఖరాగ్ర సమావేశాలను గుర్తించండి",
    "options": [
      "2nd, 8th summits only\n2వ, 8వ శిఖరాగ్ర సమావేశాలు మాత్రమే",
      "2nd. 8th and 14th summits\n2వ, 8వ మరియు 14వ శిఖరాగ్ర సమావేశాలు",
      "14th and 18th summits\n14వ మరియు 18వ శిఖరాగ్ర సమావేశాలు",
      "2nd and 5th summits\n2వ మరియు 5వ శిఖరాగ్ర సమావేశాలు"
    ],
    "correctAnswer": 1,
    "explanation": "భారతదేశం సార్క్ (దక్షిణాసియా ప్రాంతీయ సహకార మండలి) శిఖరాగ్ర సమావేశానికి మూడుసార్లు ఆతిథ్యం ఇచ్చింది: 2వ శిఖరాగ్ర సమావేశం బెంగళూరులో (1986), 8వ శిఖరాగ్ర సమావేశం న్యూఢిల్లీలో (1995), మరియు 14వ శిఖరాగ్ర సమావేశం న్యూఢిల్లీలో (2007)."
  },
  {
    "id": 500,
    "question": "The headquarters of Greenpeace Movement was located at (TSTET 29 June 2025)\nగ్రీన్‌పీస్ ఉద్యమం యొక్క ప్రధాన కార్యాలయం ఇక్కడ ఉంది",
    "options": [
      "New York\nన్యూయార్క్",
      "London\nలండన్",
      "Alaska\nఅలాస్కా",
      "Amsterdam\nఆమ్‌స్టర్‌డామ్"
    ],
    "correctAnswer": 3,
    "explanation": "గ్రీన్‌పీస్ అనేది ఒక ప్రపంచ ప్రభుత్వేతర పర్యావరణ సంస్థ. దాని అంతర్జాతీయ సమన్వయ సంస్థ, గ్రీన్‌పీస్ ఇంటర్నేషనల్, నెదర్లాండ్స్‌లోని ఆమ్‌స్టర్‌డామ్‌లో ప్రధాన కార్యాలయాన్ని కలిగి ఉంది."
  }
]


export const socialPaper2TeluguQuestions = rawSocialPaper2TeluguData.map(
  (question, index) => {
    const options = question.options ?? [];

    const normalizedCorrect = (() => {
      if (typeof question.correctAnswer === "number") {
        return question.correctAnswer;
      }

      const trimmed = (question.correctAnswer ?? "").trim();
      if (!trimmed) {
        return null;
      }

      const potentialNumber = Number.parseInt(trimmed, 10);
      if (!Number.isNaN(potentialNumber)) {
        return potentialNumber;
      }

      return options.findIndex((option) => {
        const optionTrimmed = option?.trim() ?? "";
        if (!optionTrimmed) {
          return false;
        }

        if (optionTrimmed === trimmed) {
          return true;
        }

        const firstLine = optionTrimmed.split("\n")[0]?.trim() ?? "";
        const trimmedFirstLine = trimmed.split("\n")[0]?.trim() ?? "";
        return (
          firstLine === trimmed ||
          firstLine === trimmedFirstLine ||
          optionTrimmed === trimmedFirstLine
        );
      });
    })();

    const normalizedCorrectAnswer =
      typeof normalizedCorrect === "number" &&
      Number.isInteger(normalizedCorrect) &&
      normalizedCorrect >= 0 &&
      normalizedCorrect < options.length
        ? normalizedCorrect
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