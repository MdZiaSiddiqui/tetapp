type EnvironmentalPaper1TeluguRawQuestion = {
  id: number | string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

const rawEnvironmentalPaper1TeluguData: EnvironmentalPaper1TeluguRawQuestion[] =
[
  {
    "id": 1,
    "question": "Generally, junk food contains high levels of (TSTET 08 Jan 2025)\nసాధారణంగా, జంక్ ఫుడ్‌లో అధిక స్థాయిలో ఉండేవి",
    "options": [
      "Fiber\nఫైబర్ (పీచుపదార్థం)",
      "Proteins\nప్రోటీన్లు",
      "Carbohydrates\nకార్బోహైడ్రేట్లు",
      "Vitamins\nవిటమిన్లు"
    ],
    "correctAnswer": 2,
    "explanation": "జంక్ ఫుడ్ సాధారణంగా అధిక కేలరీలు, చక్కెర మరియు కొవ్వులతో నిండి ఉంటుంది, ఇవి ప్రధానంగా కార్బోహైడ్రేట్ల రూపాలు. ఆరోగ్యకరమైన ఆహారం కోసం కీలకమైన ఫైబర్, ప్రోటీన్లు మరియు విటమిన్లు వంటి అవసరమైన పోషకాలు ఇందులో తక్కువగా ఉంటాయి."
  },
  {
    "id": 2,
    "question": "Ramu added dilute iodine solution to a food item, and it turned dark blue or black. What does this indicate about that food item? (TSTET 08 Jan 2025)\nరాము ఒక ఆహార పదార్థానికి పలచని అయోడిన్ ద్రావణాన్ని జోడించాడు, మరియు అది ముదురు నీలం లేదా నలుపు రంగులోకి మారింది. ఇది ఆ ఆహార పదార్థం గురించి ఏమి సూచిస్తుంది?",
    "options": [
      "It contains proteins\nఅది ప్రోటీన్లను కలిగి ఉంటుంది",
      "It contains carbohydrates (starch)\nఅది కార్బోహైడ్రేట్లను (పిండిపదార్థం) కలిగి ఉంటుంది",
      "It contains fats\nఅది కొవ్వులను కలిగి ఉంటుంది",
      "It contains vitamins\nఅది విటమిన్లను కలిగి ఉంటుంది"
    ],
    "correctAnswer": 1,
    "explanation": "పిండిపదార్థం ఉనికిని గుర్తించడానికి అయోడిన్ పరీక్ష ఒక ప్రామాణిక రసాయన పరీక్ష. అయోడిన్ ద్రావణం పిండిపదార్థంతో కలిసినప్పుడు, అది స్టార్చ్-అయోడిన్ కాంప్లెక్స్‌ను ఏర్పరుస్తుంది, ఇది ప్రత్యేకమైన నీలం-నలుపు రంగును కలిగి ఉంటుంది. ఈ చర్య ఆహార పదార్థంలో పిండిపదార్థం రూపంలో కార్బోహైడ్రేట్లు ఉన్నాయని నిర్ధారిస్తుంది."
  },
  {
    "id": 3,
    "question": "The antibacterial drug penicillin is derived from (TSTET 08 Jan 2025)\nయాంటీ బాక్టీరియల్ ఔషధం అయిన పెన్సిలిన్‌ను దేని నుండి గ్రహిస్తారు?",
    "options": [
      "bacteria\nబ్యాక్టీరియా",
      "virus\nవైరస్",
      "algae\nశైవలాలు",
      "fungus\nశిలీంధ్రం"
    ],
    "correctAnswer": 3,
    "explanation": "పెన్సిలిన్ అనేది యాంటీబయాటిక్స్ సమూహం, దీనిని 1928లో అలెగ్జాండర్ ఫ్లెమింగ్ కనుగొన్నారు. ఇది ఒక రకమైన బూజు నుండి ఉత్పత్తి అవుతుంది, ఇది ఫంగస్ (శిలీంధ్ర) రాజ్యానికి చెందిన సూక్ష్మజీవి, ప్రత్యేకంగా పెన్సిలియం జాతికి చెందినది."
  },
  {
    "id": 4,
    "question": "Identify the insect that ants nurture for honeydew: (TSTET 08 Jan 2025)\nహనీడ్యూ (తేనెబూర) కోసం చీమలు పెంచే కీటకాన్ని గుర్తించండి:",
    "options": [
      "Aphids\nఅఫిడ్స్",
      "Grasshoppers\nమిడతలు",
      "Bees\nతేనెటీగలు",
      "Beetles\nబీటిల్స్"
    ],
    "correctAnswer": 0,
    "explanation": "చీమలు మరియు అఫిడ్స్ పరస్పర సహజీవన సంబంధాన్ని పంచుకుంటాయి. చీమలు అఫిడ్స్‌ను దోపిడీ కీటకాలు మరియు పరాన్నజీవుల నుండి రక్షిస్తాయి. ప్రతిఫలంగా, చీమలు అఫిడ్స్ మొక్కల రసాన్ని తిన్న తర్వాత స్రవించే హనీడ్యూ అనే చక్కెర అధికంగా ఉండే ద్రవ వ్యర్థాన్ని తింటాయి."
  },
  {
    "id": 5,
    "question": "Identify the correct pair of seed and its method of dispersal: (TSTET 08 Jan 2025)\nవిత్తనం మరియు దాని వ్యాప్తి పద్ధతి యొక్క సరైన జతను గుర్తించండి:",
    "options": [
      "Milkweed seed - Wind dispersal\nజిల్లేడు విత్తనం - గాలి ద్వారా వ్యాప్తి",
      "Mango seed - Water dispersal\nమామిడి విత్తనం - నీటి ద్వారా వ్యాప్తి",
      "Coconut seed - Sky dispersal\nకొబ్బరి విత్తనం - ఆకాశం ద్వారా వ్యాప్తి",
      "Guava seed - Fire dispersal\nజామ విత్తనం - నిప్పు ద్వారా వ్యాప్తి"
    ],
    "correctAnswer": 0,
    "explanation": "జిల్లేడు విత్తనాలకు పట్టులాంటి, పారాచూట్ లాంటి వెంట్రుకలు (ఫ్లాస్) ఉంటాయి, ఇవి గాలి ద్వారా సులభంగా ఎక్కువ దూరాలకు కొట్టుకుపోవడానికి వీలు కల్పిస్తాయి. మామిడి విత్తనాలు సాధారణంగా జంతువుల ద్వారా (జూకోరీ), మరియు కొబ్బరికాయలు నీటి ద్వారా (హైడ్రోకోరీ) వ్యాప్తి చెందుతాయి."
  },
  {
    "id": 6,
    "question": "Identify the correct set of basic gases found in air (TSTET 08 Jan 2025)\nగాలిలో ఉండే ప్రాథమిక వాయువుల సరైన సముదాయాన్ని గుర్తించండి",
    "options": [
      "Nitrogen, Oxygen, Argon, Hydrogen\nనైట్రోజన్, ఆక్సిజన్, ఆర్గాన్, హైడ్రోజన్",
      "Nitrogen, Oxygen, Argon, Carbon dioxide\nనైట్రోజన్, ఆక్సిజన్, ఆర్గాన్, కార్బన్ డయాక్సైడ్",
      "Nitrogen, Oxygen, Hydrogen, Helium\nనైట్రోజన్, ఆక్సిజన్, హైడ్రోజన్, హీలియం",
      "Oxygen, Carbon dioxide, Nitrogen, Neon\nఆక్సిజన్, కార్బన్ డయాక్సైడ్, నైట్రోజన్, నియాన్"
    ],
    "correctAnswer": 1,
    "explanation": "భూమి యొక్క వాతావరణం వివిధ నిష్పత్తులలో అనేక వాయువులతో కూడి ఉంటుంది. అత్యంత సమృద్ధిగా ఉండే వాయువులు నైట్రోజన్ (సుమారు 78%), ఆక్సిజన్ (సుమారు 21%), ఆర్గాన్ (సుమారు 0.9%), మరియు కార్బన్ డయాక్సైడ్ (సుమారు 0.04%). హైడ్రోజన్ మరియు ఇతర వాయువులు చాలా తక్కువ పరిమాణంలో మాత్రమే ఉంటాయి."
  },
  {
    "id": 7,
    "question": "Choose the correct set of renewable energy resources among the following: (TSTET 08 Jan 2025)\nకింది వాటిలో పునరుత్పాదక ఇంధన వనరుల సరైన సమితిని ఎంచుకోండి:",
    "options": [
      "Solar energy, Wind energy, Coal, Biomass\nసౌర శక్తి, పవన శక్తి, బొగ్గు, బయోమాస్",
      "Natural gas, Solar energy, Biomass, Nuclear energy\nసహజ వాయువు, సౌర శక్తి, బయోమాస్, అణుశక్తి",
      "Hydropower, Solar energy, Geothermal energy, Biomass\nజల విద్యుత్, సౌర శక్తి, భూతాప శక్తి, బయోమాస్",
      "Wind energy, Coal, Biomass, Oil\nపవన శక్తి, బొగ్గు, బయోమాస్, చమురు"
    ],
    "correctAnswer": 2,
    "explanation": "పునరుత్పాదక ఇంధన వనరులు అనేవి సహజంగా పునరుద్ధరించబడేవి మరియు స్థిరమైనవి. జల విద్యుత్ (నీటి నుండి), సౌర శక్తి (సూర్యుడి నుండి), భూతాప శక్తి (భూమి యొక్క వేడి నుండి), మరియు బయోమాస్ (సేంద్రీయ పదార్థం నుండి) అన్నీ పునరుత్పాదకమైనవి. బొగ్గు, చమురు మరియు సహజ వాయువు పునరుత్పాదకం కాని శిలాజ ఇంధనాలు."
  },
  {
    "id": 8,
    "question": "The full form of CETP in the context of wastewater management is (TSTET 08 Jan 2025)\nమురుగునీటి నిర్వహణ సందర్భంలో CETP యొక్క పూర్తి రూపం",
    "options": [
      "Centralized Effluent Treatment Plant\nసెంట్రలైజ్డ్ ఎఫ్లూయెంట్ ట్రీట్‌మెంట్ ప్లాంట్",
      "Chemical Effluent Treatment Plant\nకెమికల్ ఎఫ్లూయెంట్ ట్రీట్‌మెంట్ ప్లాంట్",
      "Combined Effluent Treatment Plant\nకంబైన్డ్ ఎఫ్లూయెంట్ ట్రీట్‌మెంట్ ప్లాంట్",
      "Common Effluent Treatment Plant\nకామన్ ఎఫ్లూయెంట్ ట్రీట్‌మెంట్ ప్లాంట్"
    ],
    "correctAnswer": 3,
    "explanation": "కామన్ ఎఫ్లూయెంట్ ట్రీట్‌మెంట్ ప్లాంట్ (CETP) అనేది ఒక నిర్దిష్ట ప్రాంతంలో ఉన్న అనేక చిన్న మరియు మధ్య తరహా పారిశ్రామిక యూనిట్ల నుండి వచ్చే సమిష్టి మురుగునీటిని (ఎఫ్లూయెంట్) శుద్ధి చేయడానికి రూపొందించిన ఒక సౌకర్యం. పారిశ్రామిక కాలుష్యాన్ని నిర్వహించడానికి ఈ సమిష్టి విధానం మరింత ఖర్చుతో కూడుకున్నది మరియు సమర్థవంతమైనది."
  },
  {
    "id": 9,
    "question": "The system responsible for the movement of organs in a human body (TSTET 08 Jan 2025)\nమానవ శరీరంలో అవయవాల కదలికకు బాధ్యత వహించే వ్యవస్థ",
    "options": [
      "Nervous system\nనాడీ వ్యవస్థ",
      "Digestive system\nజీర్ణ వ్యవస్థ",
      "Musculoskeletal system\nకండర అస్థిపంజర వ్యవస్థ",
      "Circulatory system\nప్రసరణ వ్యవస్థ"
    ],
    "correctAnswer": 2,
    "explanation": "ఎముకలు, కండరాలు, మృదులాస్థి, స్నాయువులు మరియు స్నాయు బంధనాలతో కూడిన కండర అస్థిపంజర వ్యవస్థ శరీరానికి దాని నిర్మాణం, మద్దతు మరియు కదిలే సామర్థ్యాన్ని అందిస్తుంది. ఇది శరీరం యొక్క మొత్తం కదలికకు మరియు అంతర్గత అవయవాల కదలికకు బాధ్యత వహిస్తుంది."
  },
  {
    "id": 10,
    "question": "Read the following statements and choose the correct answer\nStatement I: Brush the teeth of the upper jaw in downward motion and lower jaw in an upward motion.\nStatement II: If we do not brush teeth we cannot eat solid foods. (TSTET 08 Jan 2025)\nకింది వాక్యాలను చదివి సరైన సమాధానాన్ని ఎంచుకోండి\nవాక్యం I: పై దవడ పళ్ళను క్రిందికి మరియు క్రింది దవడ పళ్ళను పైకి బ్రష్ చేయాలి.\nవాక్యం II: మనం పళ్ళు తోముకోకపోతే ఘన ఆహారాలను తినలేము.",
    "options": [
      "Statement I is true and Statement II is false.\nవాక్యం I నిజం మరియు వాక్యం II తప్పు.",
      "Both Statement I and Statement II are false.\nవాక్యం I మరియు వాక్యం II రెండూ తప్పు.",
      "Both Statement I and Statement II are true.\nవాక్యం I మరియు వాక్యం II రెండూ నిజం.",
      "Statement I is false and Statement II is true.\nవాక్యం I తప్పు మరియు వాక్యం II నిజం."
    ],
    "correctAnswer": 0,
    "explanation": "వాక్యం I పళ్ళను సమర్థవంతంగా బ్రష్ చేయడానికి సరైన మరియు సిఫార్సు చేయబడిన పద్ధతిని వివరిస్తుంది, అనగా చిగుళ్ళ నుండి దూరంగా బ్రష్ చేయడం. వాక్యం II అతిశయోక్తి మరియు అందువల్ల తప్పు; పేలవమైన దంత పరిశుభ్రత తినడం కష్టతరం చేసే సమస్యలకు దారితీయవచ్చు, కానీ బ్రష్ చేయకపోవడం వెంటనే ఒక వ్యక్తిని ఘన ఆహారం తినలేకుండా చేయదు."
  },
  {
    "id": 11,
    "question": "Read the following statements and choose the correct answer:\nStatement A: The doctor who treats diseases of the digestive system is called a gastroenterologist.\nStatement B: Food stays 3 to 5 hours in the small intestine for digestion.\nStatement C: The food is digested more quickly in the stomach than when placed outside the body. (TSTET 08 Jan 2025)\nకింది వాక్యాలను చదివి సరైన సమాధానాన్ని ఎంచుకోండి:\nవాక్యం A: జీర్ణవ్యవస్థ వ్యాధులకు చికిత్స చేసే వైద్యుడిని గ్యాస్ట్రోఎంటరాలజిస్ట్ అంటారు.\nవాక్యం B: జీర్ణం కావడానికి ఆహారం చిన్న ప్రేగులో 3 నుండి 5 గంటలు ఉంటుంది.\nవాక్యం C: శరీరం వెలుపల ఉంచిన దానికంటే కడుపులో ఆహారం వేగంగా జీర్ణమవుతుంది.",
    "options": [
      "All statements are true.\nఅన్ని వాక్యాలు నిజం.",
      "Only Statements A and B are true.\nవాక్యాలు A మరియు B మాత్రమే నిజం.",
      "Only Statements A and C are true.\nవాక్యాలు A మరియు C మాత్రమే నిజం.",
      "Only Statements B and C are true.\nవాక్యాలు B మరియు C మాత్రమే నిజం."
    ],
    "correctAnswer": 0,
    "explanation": "మూడు వాక్యాలు వాస్తవంగా సరైనవి. A) గ్యాస్ట్రోఎంటరాలజిస్ట్ జీర్ణవ్యవస్థకు వైద్య నిపుణుడు. B) పోషకాలను గ్రహించే చిన్న ప్రేగులో ఆహారం ప్రయాణ సమయం సాధారణంగా 3 నుండి 5 గంటలు. C) కడుపులోని ఆమ్ల వాతావరణం మరియు కండరాల కదలికలు (పెరిస్టాల్సిస్) శరీరం వెలుపల జరిగే సాధారణ రసాయన విచ్ఛిన్నంతో పోలిస్తే జీర్ణ ప్రక్రియను గణనీయంగా వేగవంతం చేస్తాయి."
  },
  {
    "id": 12,
    "question": "After fertilization, the seeds develop from the ovule, and the ovary of the flower usually develops into a: (TSTET 08 Jan 2025)\nఫలదీకరణం తర్వాత, విత్తనాలు అండం నుండి అభివృద్ధి చెందుతాయి, మరియు పువ్వు యొక్క అండాశయం సాధారణంగా దేనిగా అభివృద్ధి చెందుతుంది:",
    "options": [
      "Leaf\nఆకు",
      "Stem\nకాండం",
      "Flower\nపువ్వు",
      "Fruit\nపండు"
    ],
    "correctAnswer": 3,
    "explanation": "పుష్పించే మొక్కలలో, ద్వంద్వ ఫలదీకరణ ప్రక్రియ హార్మోన్ల మార్పులను ప్రేరేపిస్తుంది, దీనివల్ల అండాశయంలోని అండాలు విత్తనాలుగా అభివృద్ధి చెందుతాయి. అదే సమయంలో, చుట్టుపక్కల ఉన్న అండాశయ గోడ పరిపక్వం చెంది పండుగా మారుతుంది, ఇది విత్తనాలను రక్షించడానికి మరియు వాటి వ్యాప్తికి సహాయపడుతుంది."
  },
  {
    "id": 13,
    "question": "The Earth takes a day to complete one rotation. Then the time taken by the earth to cover '82' longitudes is (TSTET 08 Jan 2025)\nభూమి ఒక భ్రమణం పూర్తి చేయడానికి ఒక రోజు పడుతుంది. అప్పుడు భూమి '82' రేఖాంశాలను దాటడానికి పట్టే సమయం",
    "options": [
      "12 hours 18 minutes\n12 గంటల 18 నిమిషాలు",
      "5 hours 28 minutes\n5 గంటల 28 నిమిషాలు",
      "18 hours 24 minutes\n18 గంటల 24 నిమిషాలు",
      "6 hours 28 minutes\n6 గంటల 28 నిమిషాలు"
    ],
    "correctAnswer": 1,
    "explanation": "భూమి 24 గంటల్లో 360° భ్రమణం పూర్తి చేస్తుంది. ఒక డిగ్రీ (రేఖాంశం)కి పట్టే సమయాన్ని కనుగొనడానికి, మనం లెక్కిస్తాము: (24 గంటలు * 60 నిమిషాలు/గంట) / 360° = డిగ్రీకి 4 నిమిషాలు. 82 రేఖాంశాలను దాటడానికి, పట్టే సమయం 82° * 4 నిమిషాలు/° = 328 నిమిషాలు. దీనిని గంటలు మరియు నిమిషాలుగా మార్చితే: 328 / 60 = 5 మరియు శేషం 28. కాబట్టి, పట్టే సమయం 5 గంటల 28 నిమిషాలు."
  },
  {
    "id": 14,
    "question": "One among the following statements best describes the term \"Condensation\" (TSTET 08 Jan 2025)\nకింది వాక్యాలలో ఒకటి \"సాంద్రీకరణం\" అనే పదాన్ని ఉత్తమంగా వివరిస్తుంది",
    "options": [
      "The process of change of water into water vapour\nనీరు నీటి ఆవిరిగా మారే ప్రక్రియ",
      "The amount of invisible water vapour present in the atmosphere\nవాతావరణంలో ఉన్న అదృశ్య నీటి ఆవిరి పరిమాణం",
      "Transporting of water from the atmosphere to the surface of the earth\nవాతావరణం నుండి భూమి ఉపరితలానికి నీటిని రవాణా చేయడం",
      "The process in which the water vapour changes into water\nనీటి ఆవిరి నీరుగా మారే ప్రక్రియ"
    ],
    "correctAnswer": 3,
    "explanation": "సాంద్రీకరణం అనేది ఒక పదార్థాన్ని దాని వాయు స్థితి నుండి ద్రవ స్థితికి మార్చే భౌతిక ప్రక్రియ. నీటి చక్రంలో, గాలిలోని నీటి ఆవిరి చల్లబడి, శక్తిని కోల్పోయి, తిరిగి ద్రవ నీటి బిందువులుగా మారినప్పుడు ఇది సంభవిస్తుంది, తద్వారా మేఘాలు లేదా మంచు ఏర్పడతాయి."
  },
  {
    "id": 15,
    "question": "These forests grow in the regions where it rains only for some months and is warm and dry for most of the year (TSTET 08 Jan 2025)\nఈ అడవులు కొన్ని నెలలు మాత్రమే వర్షం పడి, సంవత్సరంలో ఎక్కువ భాగం వెచ్చగా మరియు పొడిగా ఉండే ప్రాంతాలలో పెరుగుతాయి",
    "options": [
      "Tropical Evergreen Forest\nఉష్ణమండల సతత హరిత అరణ్యం",
      "Coniferous Forests\nశృంగాకార అడవులు",
      "The Deciduous Forests\nఆకురాల్చే అడవులు",
      "Thorny Forests\nముళ్ళ అడవులు"
    ],
    "correctAnswer": 2,
    "explanation": "ఆకురాల్చే అడవులు ప్రత్యేకమైన పొడి కాలంతో కూడిన వాతావరణాన్ని కలిగి ఉంటాయి. ఈ అడవులలోని చెట్లు నీటిని సంరక్షించుకోవడానికి పొడి కాలంలో తమ ఆకులను రాలుస్తాయి. ఉష్ణమండల సతత హరిత అడవులు ఏడాది పొడవునా భారీ వర్షపాతాన్ని పొందుతాయి, అయితే ముళ్ళ అడవులు ఇంకా పొడిగా ఉండే శుష్క ప్రాంతాలలో కనిపిస్తాయి."
  },
  {
    "id": 16,
    "question": "This mineral comes in thin layers and is a non-conductor of electricity and heat (TSTET 08 Jan 2025)\nఈ ఖనిజం పలుచని పొరలుగా లభిస్తుంది మరియు విద్యుత్, వేడికి అధమ వాహకం",
    "options": [
      "Mica\nమైకా",
      "Manganese\nమాంగనీస్",
      "Bauxite\nబాక్సైట్",
      "Iron-ore\nఇనుప ఖనిజం"
    ],
    "correctAnswer": 0,
    "explanation": "మైకా అనేది ఒక సిలికేట్ ఖనిజం, ఇది దాని పరిపూర్ణ బేసల్ క్లీవేజ్‌కు ప్రసిద్ధి చెందింది, ఇది పలుచని, సౌకర్యవంతమైన పలకలుగా విడిపోవడానికి అనుమతిస్తుంది. ఇది అద్భుతమైన విద్యున్నిరోధక బలం మరియు ఉష్ణ స్థిరత్వాన్ని కలిగి ఉంది, ఇది విద్యుత్ మరియు వేడి రెండింటికీ ఒక అద్భుతమైన ఇన్సులేటర్‌గా పనిచేస్తుంది. మిగతా ఎంపికలు లోహ ఖనిజాలు మరియు వాహకాలు."
  },
  {
    "id": 17,
    "question": "The Constitution of India vests all the executive powers of the state Government in the hands of (TSTET 08 Jan 2025)\nభారత రాజ్యాంగం రాష్ట్ర ప్రభుత్వത്തിന്റെ అన్ని కార్యనిర్వాహక అధికారాలను ఎవరి చేతుల్లో ఉంచింది?",
    "options": [
      "The Chief Minister\nముఖ్యమంత్రి",
      "The Governor\nగవర్నర్",
      "The Council of Ministers\nమంత్రి మండలి",
      "The Chief Secretary\nప్రధాన కార్యదర్శి"
    ],
    "correctAnswer": 1,
    "explanation": "భారత రాజ్యాంగంలోని 154వ అధికరణం ప్రకారం, ఒక రాష్ట్ర కార్యనిర్వాహక అధికారం అధికారికంగా గవర్నర్‌కు సంక్రమిస్తుంది. అయితే, భారతదేశ పార్లమెంటరీ వ్యవస్థలో, గవర్నర్ నామమాత్రపు అధిపతిగా వ్యవహరిస్తారు, మరియు నిజమైన కార్యనిర్వాహక అధికారాన్ని ముఖ్యమంత్రి నేతృత్వంలోని మంత్రి మండలి వినియోగిస్తుంది."
  },
  {
    "id": 18,
    "question": "Identify the INCORRECT statement regarding 'the impact of Technology in Agriculture' (TSTET 08 Jan 2025)\n'వ్యవసాయంలో సాంకేతికత ప్రభావం'కు సంబంధించి తప్పు వాక్యాన్ని గుర్తించండి",
    "options": [
      "Using of technology in Agriculture helped the farmers to produce more food grains\nవ్యవసాయంలో సాంకేతికతను ఉపయోగించడం రైతులకు ఎక్కువ ఆహార ధాన్యాలను ఉత్పత్తి చేయడానికి సహాయపడింది",
      "The use of technology has not reduced the usage of manpower\nసాంకేతికత వాడకం మానవశక్తి వినియోగాన్ని తగ్గించలేదు",
      "With the usage of technology in agriculture, the farmers began to cultivate their farms twice or thrice a year\nవ్యవసాయంలో సాంకేతికత వాడకంతో, రైతులు సంవత్సరానికి రెండు లేదా మూడు సార్లు తమ పొలాలను సాగు చేయడం ప్రారంభించారు",
      "The use of technology has changed the nature of work done by the agricultural labourers\nసాంకేతికత వాడకం వ్యవసాయ కూలీలు చేసే పని స్వభావాన్ని మార్చింది"
    ],
    "correctAnswer": 1,
    "explanation": "ఈ వాక్యం తప్పు. వ్యవసాయ సాంకేతికత, ముఖ్యంగా యాంత్రీకరణ (ట్రాక్టర్లు, కంబైన్ హార్వెస్టర్లు) యొక్క ప్రధాన ప్రభావం దున్నడం, విత్తడం మరియు కోయడం వంటి పనులకు మానవ శ్రమ లేదా మానవశక్తి అవసరాన్ని గణనీయంగా తగ్గించడం. మిగతా వాక్యాలు వ్యవసాయంలో సాంకేతికత యొక్క సరైన పరిణామాలు."
  },
  {
    "id": 19,
    "question": "This independent institution supervises the expenditure of the Government in India (TSTET 08 Jan 2025)\nఈ స్వతంత్ర సంస్థ భారతదేశంలో ప్రభుత్వ వ్యయాన్ని పర్యవేక్షిస్తుంది",
    "options": [
      "NITI Aayog\nనీతి ఆయోగ్",
      "Comptroller and Auditor General\nకంప్ట్రోలర్ అండ్ ఆడిటర్ జనరల్",
      "Finance Commission\nఆర్థిక సంఘం",
      "Attorney General\nఅటార్నీ జనరల్"
    ],
    "correctAnswer": 1,
    "explanation": "కంప్ట్రోలర్ అండ్ ఆడిటర్ జనరల్ (CAG) ఆఫ్ ఇండియా అనేది భారత ప్రభుత్వం మరియు రాష్ట్ర ప్రభుత్వాల యొక్క అన్ని రసీదులు మరియు వ్యయాలను ఆడిట్ చేయడానికి బాధ్యత వహించే ఒక స్వతంత్ర రాజ్యాంగ అధికార సంస్థ. ఇది ప్రజా ధనానికి సంరక్షకుడిగా పనిచేస్తుంది, ప్రభుత్వ వ్యయం చట్ట ప్రకారం జరిగేలా చూస్తుంది."
  },
  {
    "id": 20,
    "question": "This formed the foundation for India's Democracy (TSTET 08 Jan 2025)\nఇది భారత ప్రజాస్వామ్యానికి పునాది వేసింది",
    "options": [
      "The Values that inspired and guided the freedom struggle\nస్వాతంత్ర్య పోరాటాన్ని ప్రేరేపించి, మార్గనిర్దేశం చేసిన విలువలు",
      "The values that were adapted from the American Constitution\nఅమెరికా రాజ్యాంగం నుండి స్వీకరించిన విలువలు",
      "The ideals like liberalism and authoritarianism\nఉదారవాదం మరియు నిరంకుశత్వం వంటి ఆదర్శాలు",
      "The directive principles of State Policy adapted from Irish Constitution\nఐరిష్ రాజ్యాంగం నుండి స్వీకరించిన ఆదేశిక సూత్రాలు"
    ],
    "correctAnswer": 0,
    "explanation": "భారత ప్రజాస్వామ్యం యొక్క పునాది సూత్రాలైన న్యాయం, స్వేచ్ఛ, సమానత్వం మరియు సౌభ్రాతృత్వం వంటివి స్వాతంత్ర్యం కోసం జరిగిన జాతీయ పోరాట సమయంలో పెంపొందించబడిన విలువల యొక్క ప్రత్యక్ష వారసత్వం. ఈ మూల ఆదర్శాలు భారత రాజ్యాంగ పీఠికలో స్పష్టంగా పేర్కొనబడ్డాయి."
  },
  {
    "id": 21,
    "question": "This Kakatiya ruler wrote 'Nitisara' in sanskrit (TSTET 08 Jan 2025)\nఈ కాకతీయ పాలకుడు సంస్కృతంలో 'నీతిసార'ను రచించాడు",
    "options": [
      "Ganapati Deva\nగణపతి దేవుడు",
      "Rudramadevi\nరుద్రమదేవి",
      "Prola II\nరెండవ ప్రోలుడు",
      "Rudra Deva\nరుద్రదేవుడు"
    ],
    "correctAnswer": 3,
    "explanation": "కాకతీయ వంశానికి చెందిన ప్రముఖ పాలకుడైన రుద్రదేవుడు (ప్రతాపరుద్రుడు I అని కూడా పిలుస్తారు) కళ మరియు సాహిత్యాన్ని పోషించాడు. సంస్కృతంలో వ్రాయబడిన రాజకీయం మరియు రాజనీతిపై ఒక గ్రంథమైన 'నీతిసార' రచయితగా ఆయనకు ఘనత లభించింది."
  },
  {
    "id": 22,
    "question": "Among the following, Identify the INCORRECT statement regarding the \"Vijayanagara Empire\" (TSTET 08 Jan 2025)\nకింది వాటిలో, \"విజయనగర సామ్రాజ్యం\"కు సంబంధించి తప్పు వాక్యాన్ని గుర్తించండి",
    "options": [
      "The city of Vijaynagara was built on the banks of the river Tungabhadra next to ancient temple of Sri Virupaksha\nవిజయనగర నగరం తుంగభద్ర నది ఒడ్డున పురాతన శ్రీ విరూపాక్ష దేవాలయం పక్కన నిర్మించబడింది",
      "The Portuguese traveller, Domingo Paes visited the Vijayanagara Empire during the period of Sri Krishnadevaraya\nపోర్చుగీస్ యాత్రికుడు డొమింగో పేస్ శ్రీ కృష్ణదేవరాయల కాలంలో విజయనగర సామ్రాజ్యాన్ని సందర్శించాడు",
      "The Bronze idols of Sri Krishnadevaraya and his two wives were installed in Tirumala Temple\nశ్రీ కృష్ణదేవరాయలు మరియు ఆయన ఇద్దరు భార్యల కాంస్య విగ్రహాలు తిరుమల ఆలయంలో ప్రతిష్టించబడ్డాయి",
      "The Vijayanagara rulers imported a large number of horses from Africa and Europe\nవిజయనగర పాలకులు ఆఫ్రికా మరియు యూరప్ నుండి పెద్ద సంఖ్యలో గుర్రాలను దిగుమతి చేసుకున్నారు"
    ],
    "correctAnswer": 3,
    "explanation": "ఈ వాక్యం తప్పు. విజయనగర పాలకులు తమ అశ్విక దళాన్ని బలోపేతం చేయడానికి అధిక సంఖ్యలో నాణ్యమైన యుద్ధ గుర్రాలను దిగుమతి చేసుకోవడంలో ప్రసిద్ధి చెందినప్పటికీ, ఈ దిగుమతులకు ప్రాథమిక వనరులు అరేబియా మరియు పర్షియా (ఇరాన్), ఆఫ్రికా మరియు యూరప్ కాదు."
  },
  {
    "id": 23,
    "question": "Vallabharaya's Kridabhiramam describes this in detail (TSTET 08 Jan 2025)\nవల్లభరాయుని క్రీడాభిరామం దీనిని వివరంగా వివరిస్తుంది",
    "options": [
      "the worship of Palnati Veeras, Mailara and many more mother goddesses in Warangal\nవరంగల్‌లో పల్నాటి వీరులు, మైలార మరియు అనేక ఇతర మాతృదేవతల ఆరాధన",
      "the administration of Vijayanagara rulers\nవిజయనగర పాలకుల పరిపాలన",
      "the women participation in administration and protection of Kingdom\nరాజ్య పరిపాలన మరియు రక్షణలో మహిళల భాగస్వామ్యం",
      "the culture followed by the people during Kakatiya period and Vijayanagara period\nకాకతీయ మరియు విజయనగర కాలంలో ప్రజలు అనుసరించిన సంస్కృతి"
    ],
    "correctAnswer": 0,
    "explanation": "వినుకొండ వల్లభరాయుని 'క్రీడాభిరామం' ఒక ముఖ్యమైన తెలుగు సాహిత్య రచన, ఇది కాకతీయ కాలంలో వరంగల్ నగరంలోని సామాజిక జీవితం, ఆచారాలు, పండుగలు మరియు మతపరమైన పద్ధతుల గురించి వివరణాత్మక మరియు స్పష్టమైన వర్ణనను అందిస్తుంది. ఇందులో వివిధ స్థానిక మరియు జానపద దేవతల ఆరాధన వర్ణనలు ఉన్నాయి."
  },
  {
    "id": 24,
    "question": "The Muslim Sultans and Padshahs did not claim to be incarnations of God but Persian Court Chronicles described the sultan as the (TSTET 08 Jan 2025)\nముస్లిం సుల్తానులు మరియు పాదుషాలు తాము దేవుని అవతారాలుగా చెప్పుకోలేదు కానీ పెర్షియన్ ఆస్థాన చరిత్రలు సుల్తాన్‌ను ఇలా వర్ణించాయి",
    "options": [
      "Son of God\nదేవుని కుమారుడు",
      "Shadow of God\nదేవుని నీడ",
      "The greatest Law givers and architects\nగొప్ప శాసనకర్తలు మరియు వాస్తుశిల్పులు",
      "The protector of people\nప్రజల రక్షకుడు"
    ],
    "correctAnswer": 1,
    "explanation": "ఢిల్లీ సుల్తానేట్ మరియు మొఘల్ సామ్రాజ్యం యొక్క రాజకీయ భావజాలంలో, పెర్షియన్ సంప్రదాయాలచే ప్రభావితమై, పాలకుడిని తరచుగా 'జిల్-ఇ-ఇలాహి' అని పిలిచేవారు, దీనికి 'భూమిపై దేవుని నీడ' అని అనువాదం. ఈ బిరుదు రాజు యొక్క అధికారం దైవిక ప్రతిబింబం అని సూచించింది, దైవత్వాన్ని చెప్పుకోకుండా అతని పాలనను చట్టబద్ధం చేసింది."
  },
  {
    "id": 25,
    "question": "In teaching and learning of science, field trips play a vital role because they provide the learners with this kind of experiences. (TSTET 08 Jan 2025)\nవిజ్ఞాన శాస్త్రం బోధన మరియు అభ్యసనంలో, క్షేత్ర పర్యటనలు కీలక పాత్ర పోషిస్తాయి ఎందుకంటే అవి అభ్యాసకులకు ఈ రకమైన అనుభవాలను అందిస్తాయి.",
    "options": [
      "Indirect\nపరోక్ష",
      "Direct\nప్రత్యక్ష",
      "Vicarious\nప్రత్యామ్నాయ",
      "Indirect & Vicarious\nపరోక్ష & ప్రత్యామ్నాయ"
    ],
    "correctAnswer": 1,
    "explanation": "క్షేత్ర పర్యటనలు ఒక ముఖ్యమైన బోధనా సాధనం ఎందుకంటే అవి ప్రత్యక్ష, స్వయంగా పొందే మరియు అనుభవపూర్వక అభ్యాస అవకాశాలను అందిస్తాయి. అవి విద్యార్థులను వారి వాస్తవ ప్రపంచ సందర్భంలో భావనలు మరియు దృగ్విషయాలను గమనించడానికి అనుమతిస్తాయి, అభ్యాసాన్ని తరగతి గది యొక్క నైరూప్య పరిధుల నుండి దాటి తీసుకువెళతాయి."
  },
  {
    "id": 26,
    "question": "Read the following statements regarding NCF-2005\nA) NCF-2005 recognises the learner as a constructor of Knowledge.\nB) NCF-2005 never suggested that the learners be provided with learning experiences which enable them to develop their own concepts through inquiry and problem solving. (TSTET 08 Jan 2025)\nNCF-2005 కి సంబంధించి కింది వాక్యాలను చదవండి\nA) NCF-2005 అభ్యాసకుడిని జ్ఞాన నిర్మాతగా గుర్తిస్తుంది.\nB) అభ్యాసకులు విచారణ మరియు సమస్య పరిష్కారం ద్వారా వారి స్వంత భావనలను అభివృద్ధి చేసుకోగల అభ్యాస అనుభవాలను అందించాలని NCF-2005 ఎప్పుడూ సూచించలేదు.",
    "options": [
      "Both A & B are correct\nA & B రెండూ సరైనవి",
      "Both A & B are incorrect\nA & B రెండూ తప్పు",
      "A is correct, B is incorrect\nA సరైనది, B తప్పు",
      "A incorrect, B is correct\nA తప్పు, B సరైనది"
    ],
    "correctAnswer": 2,
    "explanation": "వాక్యం A సరైనది; ఇది NCF-2005కు ఆధారం అయిన నిర్మాణాత్మక విధానాన్ని ప్రతిబింబిస్తుంది. వాక్యం B తప్పు ఎందుకంటే NCF-2005 అభ్యాసకులు జ్ఞానాన్ని నిష్క్రియాత్మకంగా స్వీకరించకుండా, వారి స్వంత జ్ఞానాన్ని నిర్మించుకోవడానికి వీలుగా కార్యాచరణ-ఆధారిత, విచారణ-ఆధారిత మరియు సమస్య-పరిష్కార పద్ధతులను బలంగా సమర్థిస్తుంది."
  },
  {
    "id": 27,
    "question": "If a learner is able to understand that the nature has some laws for itself, maintains a kind of naturally established harmony and if he wants to protect the beauty and the harmony in the nature, it shows he has developed these values (TSTET 08 Jan 2025)\nఒక అభ్యాసకుడు ప్రకృతికి కొన్ని సొంత నియమాలు ఉన్నాయని, ఒక రకమైన సహజంగా ఏర్పడిన సామరస్యాన్ని నిర్వహిస్తుందని అర్థం చేసుకోగలిగితే మరియు అతను ప్రకృతిలోని అందం మరియు సామరస్యాన్ని రక్షించాలనుకుంటే, అతను ఈ విలువలను అభివృద్ధి చేసుకున్నాడని చూపిస్తుంది",
    "options": [
      "Moral value only\nనైతిక విలువ మాత్రమే",
      "Utilitarian and Moral values\nఉపయోగితా మరియు నైతిక విలువలు",
      "Aesthetic value only\nసౌందర్యాత్మక విలువ మాత్రమే",
      "Aesthetic and Moral values\nసౌందర్యాత్మక మరియు నైతిక విలువలు"
    ],
    "correctAnswer": 3,
    "explanation": "ప్రకృతి యొక్క అందం మరియు సామరస్యాన్ని ప్రశంసించడం సౌందర్యాత్మక విలువల క్రిందకు వస్తుంది. దానిని రక్షించాలి మరియు గౌరవించాలి అనే అవగాహన బాధ్యత యొక్క భావాన్ని ప్రతిబింబిస్తుంది, ఇది ఒక నైతిక విలువ. అందువల్ల, అభ్యాసకుడు పర్యావరణం పట్ల సౌందర్యాత్మక మరియు నైతిక విలువలు రెండింటినీ అభివృద్ధి చేసుకున్నాడు."
  },
  {
    "id": 28,
    "question": "National Curriculum Framework (NCF) 2005 recommended that for the primary grades, the content related to natural and social environment should be integrated with (TSTET 08 Jan 2025)\nజాతీయ పాఠ్యప్రణాళికా చట్రం (NCF) 2005 ప్రాథమిక తరగతులకు, సహజ మరియు సామాజిక పర్యావరణానికి సంబంధించిన కంటెంట్‌ను దేనితో ఏకీకృతం చేయాలని సిఫార్సు చేసింది",
    "options": [
      "Mathematics only\nగణితం మాత్రమే",
      "Language and Mathematics\nభాష మరియు గణితం",
      "Language only\nభాష మాత్రమే",
      "no other subjects\nఇతర సబ్జెక్టులు లేవు"
    ],
    "correctAnswer": 1,
    "explanation": "I మరియు II తరగతుల కోసం, NCF-2005 ఒక సమీకృత పాఠ్యప్రణాళికను సిఫార్సు చేస్తుంది, ఇక్కడ పర్యావరణ అధ్యయనాల (EVS) భావనలు ప్రత్యేక సబ్జెక్టుగా బోధించబడవు కానీ భాష మరియు గణితం బోధనలో పొందుపరచబడతాయి. IIIవ తరగతి నుండి ప్రత్యేక EVS పాఠ్యపుస్తకం ప్రవేశపెట్టబడింది."
  },
  {
    "id": 29,
    "question": "Identify the correct pairs.\nA) Black board - Reusable writing aid\nB) Bulletin board - used for display of notifications, interesting incidents. etc.\nC) Plasti graph board - Made of glass, acrylic etc. and with smooth plain surface (TSTET 08 Jan 2025)\nసరైన జతలను గుర్తించండి.\nA) నల్లబల్ల - పునర్వినియోగపరచదగిన రచనా సహాయకం\nB) బులెటిన్ బోర్డ్ - నోటిఫికేషన్లు, ఆసక్తికరమైన సంఘటనలు మొదలైన వాటి ప్రదర్శన కోసం ఉపయోగిస్తారు.\nC) ప్లాస్టి గ్రాఫ్ బోర్డ్ - గాజు, యాక్రిలిక్ మొదలైన వాటితో మరియు నునుపైన ఉపరితలంతో తయారు చేయబడింది",
    "options": [
      "A & B only\nA & B మాత్రమే",
      "B & C only\nB & C మాత్రమే",
      "A & C only\nA & C మాత్రమే",
      "A B & C\nA B & C"
    ],
    "correctAnswer": 0,
    "explanation": "వాక్యాలు A మరియు B నల్లబల్ల మరియు బులెటిన్ బోర్డు యొక్క సరైన వర్ణనలు. వాక్యం C తప్పు. ఒక ప్లాస్టిగ్రాఫ్, లేదా ఫ్లాన్నెల్ బోర్డ్, ఫ్లాన్నెల్ లేదా ఫెల్ట్ వంటి ఒక వస్త్ర ఉపరితలాన్ని కలిగి ఉంటుంది, దానికి అదే విధమైన వెనుకభాగం ఉన్న కటౌట్‌లు అంటుకోగలవు; అది గాజు లేదా యాక్రిలిక్‌తో నునుపైన ఉపరితలంతో తయారు చేయబడదు."
  },
  {
    "id": 30,
    "question": "\"Tells the greatness of our nation's history\" is the learning indicator of this academic standard (TSTET 08 Jan 2025)\n\"మన దేశ చరిత్ర యొక్క గొప్పతనాన్ని చెబుతుంది\" అనేది ఈ విద్యా ప్రమాణం యొక్క అభ్యసన సూచిక",
    "options": [
      "Mapping skills\nపట నైపుణ్యాలు",
      "Questioning and formulation of hypothesis\nప్రశ్నించడం మరియు పరికల్పనల రూపకల్పన",
      "Experiments and field observations\nప్రయోగాలు మరియు క్షేత్ర పరిశీలనలు",
      "Appreciation and sensitivity\nప్రశంస మరియు సున్నితత్వం"
    ],
    "correctAnswer": 3,
    "explanation": "దేశ చరిత్ర యొక్క గొప్పతనాన్ని ప్రశంసించడం మరియు దాని గురించి మాట్లాడగలగడం కేవలం వాస్తవాలు తెలుసుకోవడం కంటే ఎక్కువ. ఇది విలువల అభివృద్ధి, గర్వ భావన మరియు తన వారసత్వం పట్ల గౌరవాన్ని సూచిస్తుంది, ఇది 'ప్రశంస మరియు సున్నితత్వం' అనే విద్యా ప్రమాణం క్రిందకు వస్తుంది."
  },
  {
    "id": 31,
    "question": "Identify from the following, the food item that is made of ingredients from both plants and animals. (TSTET 09 Jan 2025)\nకింది వాటి నుండి, మొక్కలు మరియు జంతువులు రెండింటి నుండి పదార్థాలతో తయారు చేయబడిన ఆహార పదార్థాన్ని గుర్తించండి.",
    "options": [
      "Pizza\nపిజ్జా",
      "Dhokla\nధోక్లా",
      "Potato fry\nబంగాళాదుంప వేపుడు",
      "Chole\nఛోలే"
    ],
    "correctAnswer": 0,
    "explanation": "పిజ్జా సాధారణంగా పిండి (మొక్కల ఆధారిత)తో చేసిన క్రస్ట్, టమోటా సాస్ (మొక్క), మరియు చీజ్ (పాల నుండి జంతు ఉత్పత్తి)తో తయారు చేయబడుతుంది. ఇందులో తరచుగా కూరగాయల టాపింగ్స్ (మొక్క) మరియు మాంసం టాపింగ్స్ (జంతువు) ఉంటాయి. ధోక్లా, బంగాళాదుంప వేపుడు, మరియు ఛోలే సాధారణంగా మొక్కల ఆధారిత పదార్థాలతో మాత్రమే తయారు చేయబడతాయి."
  },
  {
    "id": 32,
    "question": "This vitamin mainly helps the body fight against many diseases and strengthen the immune system. (TSTET 09 Jan 2025)\nఈ విటమిన్ ప్రధానంగా శరీరం అనేక వ్యాధులతో పోరాడటానికి మరియు రోగనిరోధక శక్తిని బలోపేతం చేయడానికి సహాయపడుతుంది.",
    "options": [
      "Vitamin A\nవిటమిన్ ఎ",
      "Vitamin E\nవిటమిన్ ఇ",
      "Vitamin C\nవిటమిన్ సి",
      "Vitamin K\nవిటమిన్ కె"
    ],
    "correctAnswer": 2,
    "explanation": "ఆస్కార్బిక్ ఆమ్లం అని కూడా పిలువబడే విటమిన్ సి, రోగనిరోధక వ్యవస్థకు చాలా ముఖ్యమైనది. ఇది సహజ మరియు అనుకూల రోగనిరోధక వ్యవస్థల యొక్క వివిధ కణాల విధులకు మద్దతు ఇస్తుంది మరియు శరీరం అంటువ్యాధులు మరియు వ్యాధులతో పోరాడటానికి సహాయపడటంలో దాని పాత్రకు ప్రసిద్ధి చెందింది."
  },
  {
    "id": 33,
    "question": "Identify the substance used to prepare \"Apis tincture\" in homeopathy. (TSTET 09 Jan 2025)\nహోమియోపతిలో \"ఏపిస్ టింక్చర్\" ను తయారు చేయడానికి ఉపయోగించే పదార్థాన్ని గుర్తించండి.",
    "options": [
      "Snake venom\nపాము విషం",
      "Honeybee venom\nతేనెటీగ విషం",
      "Spider venom\nసాలీడు విషం",
      "Plant extracts\nమొక్కల సారాలు"
    ],
    "correctAnswer": 1,
    "explanation": "హోమియోపతిలో, 'ఏపిస్ మెల్లిఫికా' లేదా ఏపిస్ టింక్చర్ అని పిలువబడే నివారణ తేనెటీగ విషం నుండి తయారు చేయబడుతుంది. ఇది వాపు, మంట మరియు కుట్టినట్లుగా ఉండే నొప్పులు వంటి తేనెటీగ కుట్టిన లక్షణాలను పోలిన పరిస్థితులకు చికిత్స చేయడానికి ఉపయోగిస్తారు."
  },
  {
    "id": 34,
    "question": "Identify the animal that sometimes forgets the place where it stored the food it collects. (TSTET 09 Jan 2025)\nతాను సేకరించిన ఆహారాన్ని నిల్వ ఉంచిన స్థలాన్ని కొన్నిసార్లు మర్చిపోయే జంతువును గుర్తించండి.",
    "options": [
      "Elephant\nఏనుగు",
      "Bear\nఎలుగుబంటి",
      "Rabbit\nకుందేలు",
      "Squirrel\nఉడుత"
    ],
    "correctAnswer": 3,
    "explanation": "ఉడుతలు 'స్కాటర్-హోర్డింగ్' అనే పద్ధతిని పాటిస్తాయి, ఇక్కడ అవి అనేక ప్రదేశాలలో ఆహారాన్ని పాతిపెడతాయి. వాటికి మంచి ప్రాదేశిక జ్ఞాపకశక్తి ఉన్నప్పటికీ, అవి తమ నిల్వలన్నింటినీ తిరిగి పొందలేవు, తరచుగా కొన్ని ఎక్కడ పాతిపెట్టాయో మర్చిపోతాయి. ఈ మర్చిపోయిన ఆహారం అప్పుడు కొత్త మొక్కలు మరియు చెట్లుగా పెరుగుతుంది."
  },
  {
    "id": 35,
    "question": "Among the following, the flower that contains all four main floral parts: sepals, petals, stamens, and carpels is (TSTET 09 Jan 2025)\nకింది వాటిలో, నాలుగు ప్రధాన పుష్ప భాగాలను కలిగి ఉన్న పువ్వు: రక్షక పత్రాలు, ఆకర్షణ పత్రాలు, కేసరాలు మరియు అండకోశాలు",
    "options": [
      "Cucumber\nదోసకాయ",
      "Bottle gourd\nసొరకాయ",
      "Papaya\nబొప్పాయి",
      "Ipomoea\nఇపోమియా"
    ],
    "correctAnswer": 3,
    "explanation": "నాలుగు ప్రధాన భాగాలను (రక్షక పత్రాలు, ఆకర్షణ పత్రాలు, కేసరాలు మరియు అండకోశాలు) కలిగిన పువ్వును సంపూర్ణ పుష్పం అంటారు. ఇపోమియా (మార్నింగ్ గ్లోరీ)లో సంపూర్ణ పుష్పాలు ఉంటాయి. దోసకాయ, సొరకాయ మరియు బొప్పాయిలలో అసంపూర్ణ పుష్పాలు ఉంటాయి, ఎందుకంటే అవి సాధారణంగా ఏకలింగకాలు (పురుష లేదా స్త్రీ భాగాలు ఉంటాయి, కానీ రెండూ కాదు)."
  },
  {
    "id": 36,
    "question": "Reducing the emissions of carbon dioxide helps mitigate the greenhouse effect by: (TSTET 09 Jan 2025)\nకార్బన్ డయాక్సైడ్ ఉద్గారాలను తగ్గించడం గ్రీన్‌హౌస్ ప్రభావాన్ని దేని ద్వారా తగ్గించడంలో సహాయపడుతుంది:",
    "options": [
      "Increasing the amount of heat trapped in the atmosphere, raising global temperatures.\nవాతావరణంలో చిక్కుకున్న వేడి పరిమాణాన్ని పెంచి, ప్రపంచ ఉష్ణోగ్రతలను పెంచుతుంది.",
      "Decreasing the amount of sunlight reaching the Earth, cooling the planet.\nభూమికి చేరే సూర్యరశ్మి పరిమాణాన్ని తగ్గించి, గ్రహాన్ని చల్లబరుస్తుంది.",
      "Reducing the amount of heat trapped by the atmosphere, lowering global temperatures.\nవాతావరణం ద్వారా చిక్కుకున్న వేడి పరిమాణాన్ని తగ్గించి, ప్రపంచ ఉష్ణోగ్రతలను తగ్గిస్తుంది.",
      "Increasing the concentration of oxygen in the atmosphere, improving air quality.\nవాతావరణంలో ఆక్సిజన్ గాఢతను పెంచి, గాలి నాణ్యతను మెరుగుపరుస్తుంది."
    ],
    "correctAnswer": 2,
    "explanation": "కార్బన్ డయాక్సైడ్ భూమి వాతావరణంలో వేడిని బంధించే ఒక ప్రధాన గ్రీన్‌హౌస్ వాయువు. దాని ఉద్గారాలను తగ్గించడం వల్ల ఈ వాయువు యొక్క గాఢత తగ్గుతుంది, ఇది బంధించబడిన వేడి పరిమాణాన్ని తగ్గిస్తుంది. ఇది గ్లోబల్ వార్మింగ్ రేటును నెమ్మదింపజేయడానికి మరియు కాలక్రమేణా ప్రపంచ ఉష్ణోగ్రతలను తగ్గించడానికి సహాయపడుతుంది."
  },
  {
    "id": 37,
    "question": "A farmer wants to adapt an eco-friendly method to power based irrigation systems on his farm. Which renewable energy source could be the best option for him? (TSTET 09 Jan 2025)\nఒక రైతు తన పొలంలో విద్యుత్ ఆధారిత నీటిపారుదల వ్యవస్థల కోసం పర్యావరణ అనుకూల పద్ధతిని అనుసరించాలనుకుంటున్నాడు. అతనికి ఏ పునరుత్పాదక ఇంధన వనరు ఉత్తమ ఎంపిక కావచ్చు?",
    "options": [
      "Solar power\nసౌరశక్తి",
      "Wind power\nపవన శక్తి",
      "Biomass\nబయోమాస్",
      "Hydropower\nజల విద్యుత్"
    ],
    "correctAnswer": 0,
    "explanation": "పొలంలో నీటిపారుదల కోసం సౌరశక్తి ఒక అద్భుతమైన పర్యావరణ అనుకూల ఎంపిక. నీటి పంపులను నేరుగా నడపడానికి సోలార్ ప్యానెళ్లను అక్కడికక్కడే ఏర్పాటు చేయవచ్చు, ఇది ముఖ్యంగా ఎండగా ఉండే వ్యవసాయ ప్రాంతాలలో నమ్మదగిన మరియు వికేంద్రీకృత ఇంధన వనరుగా మారుతుంది."
  },
  {
    "id": 38,
    "question": "Identify the water pollutants among the following: (TSTET 09 Jan 2025)\nకింది వాటిలో నీటి కాలుష్య కారకాలను గుర్తించండి:",
    "options": [
      "Oxygen\nఆక్సిజన్",
      "Pesticides\nపురుగుమందులు",
      "Nitrogen\nనైట్రోజన్",
      "Carbon dioxide\nకార్బన్ డయాక్సైడ్"
    ],
    "correctAnswer": 1,
    "explanation": "పురుగుమందులు వ్యవసాయంలో ఉపయోగించే రసాయనాలు, ఇవి వర్షం ద్వారా నదులు, వాగులు మరియు భూగర్భ జలాల్లోకి కొట్టుకుపోతాయి. అవి ప్రధాన నీటి కాలుష్య కారకాలుగా పరిగణించబడతాయి ఎందుకంటే అవి జల పర్యావరణ వ్యవస్థలకు హాని కలిగిస్తాయి మరియు నీటిని వినియోగానికి సురక్షితం కానివిగా చేస్తాయి."
  },
  {
    "id": 39,
    "question": "The Father of India's White Revolution is (TSTET 09 Jan 2025)\nభారతదేశ శ్వేత విప్లవ పితామహుడు",
    "options": [
      "Hiralal Chaudhuri\nహీరాలాల్ చౌదరి",
      "Verghese Kurien\nవర్గీస్ కురియన్",
      "Durgesh Patel\nదుర్గేష్ పటేల్",
      "M.S. Swaminathan\nఎం.ఎస్. స్వామినాథన్"
    ],
    "correctAnswer": 1,
    "explanation": "డాక్టర్ వర్గీస్ కురియన్ భారతదేశ 'శ్వేత విప్లవ పితామహుడు'గా ప్రసిద్ధి చెందారు. 'ఆపరేషన్ ఫ్లడ్' పై ఆయన చేసిన కృషి, పాలు కొరత ఉన్న దేశం నుండి ప్రపంచంలోనే అతిపెద్ద పాల ఉత్పత్తిదారుగా భారతదేశాన్ని మార్చింది, లక్షలాది గ్రామీణ రైతులకు సాధికారత కల్పించింది."
  },
  {
    "id": 40,
    "question": "This organ divides into two and opens into the lungs. (TSTET 09 Jan 2025)\nఈ అవయవం రెండుగా విడిపోయి ఊపిరితిత్తులలోకి తెరుచుకుంటుంది.",
    "options": [
      "Esophagus\nఅన్నవాహిక",
      "Diaphragm\nఉదరవితానం",
      "Trachea\nవాయునాళం",
      "Larynx\nస్వరపేటిక"
    ],
    "correctAnswer": 2,
    "explanation": "వాయునాళం, లేదా గాలిగొట్టం, స్వరపేటిక నుండి విస్తరించి ఊపిరితిత్తులకు గాలిని తీసుకువెళ్లే వాయుమార్గం. దాని దిగువ చివర, ఇది శ్వాసనాళాలు అని పిలువబడే రెండు ప్రధాన నాళాలుగా విడిపోతుంది, ప్రతి ఊపిరితిత్తికి ఒకటి."
  },
  {
    "id": 41,
    "question": "The word \"cranium\" refers to this part of the body. (TSTET 09 Jan 2025)\n\"క్రేనియం\" అనే పదం శరీరంలోని ఈ భాగాన్ని సూచిస్తుంది.",
    "options": [
      "The upper jawbone\nపై దవడ ఎముక",
      "The rib cage\nపక్కటెముకల గూడు",
      "The vertebral column\nవెన్నెముక",
      "The skull that encases the brain\nమెదడును కప్పి ఉంచే పుర్రె"
    ],
    "correctAnswer": 3,
    "explanation": "క్రేనియం అనేది పుర్రె యొక్క భాగం, ఇది మెదడును చుట్టి రక్షిస్తుంది. ఇది అనేక ఫ్యూజ్డ్, ఫ్లాట్ ఎముకల ద్వారా ఏర్పడుతుంది."
  },
  {
    "id": 42,
    "question": "The substance that causes spiciness in chilies is: (TSTET 09 Jan 2025)\nమిరపకాయలలో కారానికి కారణమయ్యే పదార్థం:",
    "options": [
      "Capsaicin\nకాప్సైసిన్",
      "Caffeine\nకెఫిన్",
      "Glucose\nగ్లూకోజ్",
      "Citric acid\nసిట్రిక్ ఆమ్లం"
    ],
    "correctAnswer": 0,
    "explanation": "కాప్సైసిన్ అనేది మిరపకాయలలోని క్రియాశీల రసాయన సమ్మేళనం, ఇది వాటి ఘాటైన లేదా కారమైన వేడికి కారణం. దీనిని తిన్నప్పుడు, ఇది నోటిలోని నొప్పి గ్రాహకాలతో బంధించబడి, కారం అనే అనుభూతిని సృష్టిస్తుంది."
  },
  {
    "id": 43,
    "question": "The trees that grow in the Evergreen forests are always green because (TSTET 09 Jan 2025)\nసతతహరిత అడవులలో పెరిగే చెట్లు ఎల్లప్పుడూ పచ్చగా ఉంటాయి ఎందుకంటే",
    "options": [
      "The trees that grow in these forests have a very short period between shedding their leaves and regrowing of their leaves.\nఈ అడవులలో పెరిగే చెట్లు ఆకులు రాలడానికి మరియు కొత్త ఆకులు పెరగడానికి మధ్య చాలా తక్కువ వ్యవధి ఉంటుంది.",
      "The trees that grow only in these forests do not shed their leaves at all.\nఈ అడవులలో మాత్రమే పెరిగే చెట్లు అస్సలు ఆకులను రాల్చవు.",
      "These forests grow only in the areas of heavy rainfall throughout the year.\nఈ అడవులు ఏడాది పొడవునా భారీ వర్షపాతం ఉన్న ప్రాంతాలలో మాత్రమే పెరుగుతాయి.",
      "These trees have needle like leaves, even though they shed their leaves they look green.\nఈ చెట్లకు సూది వంటి ఆకులు ఉంటాయి, అవి ఆకులు రాల్చినప్పటికీ పచ్చగా కనిపిస్తాయి."
    ],
    "correctAnswer": 0,
    "explanation": "సతతహరిత చెట్లు తమ ఆకులను రాలుస్తాయి, కానీ అవి ఆకురాల్చే చెట్లలా ఒకేసారి కాకుండా, ఏడాది పొడవునా క్రమంగా చేస్తాయి. పాత ఆకులు రాలుతున్నప్పుడు కొత్త ఆకులు పెరుగుతాయి, కాబట్టి చెట్లు నిరంతర పచ్చని ఆకులతో ఉంటాయి, ఆకులు లేని కాలం చాలా క్లుప్తంగా లేదా అస్సలు ఉండదు."
  },
  {
    "id": 44,
    "question": "Among the following, identify the statement which correctly describes the phrase \"Contour lines\". (TSTET 09 Jan 2025)\nకింది వాటిలో, \"కాంటూర్ లైన్స్\" అనే పదాన్ని సరిగ్గా వివరించే వాక్యాన్ని గుర్తించండి.",
    "options": [
      "If the contour lines are drawn closer in the map, they represent a gentle slope.\nపటంలో కాంటూర్ లైన్స్ దగ్గరగా గీస్తే, అవి తేలికపాటి వాలును సూచిస్తాయి.",
      "Contours are the lines on the map joining the places of same width.\nకాంటూర్లు ఒకే వెడల్పు ఉన్న ప్రదేశాలను కలిపే పటంపై గీతలు.",
      "Contours are usually drawn at fixed intervals of 100m, 150m and 200m.\nకాంటూర్లు సాధారణంగా 100 మీ, 150 మీ మరియు 200 మీటర్ల స్థిరమైన అంతరాలలో గీయబడతాయి.",
      "Contour lines give an indication of the slope of the land as well as the elevation above the sea level.\nకాంటూర్ లైన్స్ భూమి యొక్క వాలుతో పాటు సముద్ర మట్టానికి పైనున్న ఎత్తును కూడా సూచిస్తాయి."
    ],
    "correctAnswer": 3,
    "explanation": "టోపోగ్రాఫిక్ పటాలకు కాంటూర్ లైన్స్ ప్రాథమికమైనవి. అవి సముద్ర మట్టానికి సమాన ఎత్తులో ఉన్న బిందువులను కలుపుతాయి. ఈ గీతల మధ్య దూరం భూభాగం యొక్క ఏటవాలును సూచిస్తుంది; దగ్గరి గీతలు ఏటవాలును, మరియు వెడల్పాటి గీతలు తేలికపాటి వాలును సూచిస్తాయి. అందువల్ల, అవి ఎత్తు మరియు వాలు రెండింటినీ సమర్థవంతంగా చూపుతాయి."
  },
  {
    "id": 45,
    "question": "This plain in Europe stretches across several countries like Russia, Ukraine, Poland etc. (TSTET 09 Jan 2025)\nయూరప్‌లోని ఈ మైదానం రష్యా, ఉక్రెయిన్, పోలాండ్ వంటి అనేక దేశాలలో విస్తరించి ఉంది.",
    "options": [
      "North European Plain\nఉత్తర యూరోపియన్ మైదానం",
      "Mid-Danube Plain\nమధ్య-డానుబే మైదానం",
      "Eastern European Plain\nతూర్పు యూరోపియన్ మైదానం",
      "The Upper Thracian Plain\nఎగువ థ్రేసియన్ మైదానం"
    ],
    "correctAnswer": 0,
    "explanation": "ఉత్తర యూరోపియన్ మైదానం ఫ్రాన్స్ అట్లాంటిక్ తీరం నుండి తూర్పుగా జర్మనీ మరియు పోలాండ్ గుండా బెలారస్, ఉక్రెయిన్ మరియు యూరోపియన్ రష్యాలోకి విస్తరించి ఉన్న ఒక విశాలమైన లోతట్టు భౌగోళిక ప్రాంతం. ఇది యూరప్‌లోని అత్యంత విస్తృతమైన భూరూప ప్రాంతం."
  },
  {
    "id": 46,
    "question": "In Europe \"Gulf Stream\" is called as (TSTET 09 Jan 2025)\nయూరప్‌లో \"గల్ఫ్ స్ట్రీమ్\" ను ఇలా పిలుస్తారు",
    "options": [
      "South Atlantic Drift\nదక్షిణ అట్లాంటిక్ డ్రిఫ్ట్",
      "North Atlantic Drift\nఉత్తర అట్లాంటిక్ డ్రిఫ్ట్",
      "South Equatorial Current\nదక్షిణ ఈక్వటోరియల్ కరెంట్",
      "North Equatorial Current\nఉత్తర ఈక్వటోరియల్ కరెంట్"
    ],
    "correctAnswer": 1,
    "explanation": "గల్ఫ్ స్ట్రీమ్ ఒక వెచ్చని అట్లాంటిక్ సముద్ర ప్రవాహం. ఇది సముద్రం మీదుగా ఈశాన్య దిశగా కదులుతున్నప్పుడు, అది ఉత్తర అట్లాంటిక్ డ్రిఫ్ట్ అవుతుంది. ఈ ప్రవాహం పశ్చిమ యూరప్‌కు అంత అధిక అక్షాంశంలో ఊహించిన దానికంటే గణనీయంగా తేలికపాటి ఉష్ణోగ్రతలను తెస్తుంది."
  },
  {
    "id": 47,
    "question": "In 2009, the Indian Parliament passed the \"Right of Children to free and compulsory Education Act\" in order to (TSTET 09 Jan 2025)\n2009లో, భారత పార్లమెంటు \"పిల్లల ఉచిత మరియు నిర్బంధ విద్యా హక్కు చట్టం\"ను దేనికోసం ఆమోదించింది?",
    "options": [
      "Ensure that all children below the age of 14 years get quality education.\n14 సంవత్సరాల కంటే తక్కువ వయస్సు ఉన్న పిల్లలందరూ నాణ్యమైన విద్యను పొందేలా చూడటం.",
      "Ensure that all children living in the rural areas only get quality education.\nగ్రామీణ ప్రాంతాలలో నివసించే పిల్లలందరూ మాత్రమే నాణ్యమైన విద్యను పొందేలా చూడటం.",
      "Ensure that all children get quality education up to Secondary Level.\nపిల్లలందరూ సెకండరీ స్థాయి వరకు నాణ్యమైన విద్యను పొందేలా చూడటం.",
      "Ensure that all Physically Handicapped Children get quality education below the age of 18 years.\n18 సంవత్సరాల కంటే తక్కువ వయస్సు ఉన్న శారీరక వికలాంగ పిల్లలందరూ నాణ్యమైన విద్యను పొందేలా చూడటం."
    ],
    "correctAnswer": 0,
    "explanation": "విద్యా హక్కు (RTE) చట్టం, 2009, 6 మరియు 14 సంవత్సరాల మధ్య వయస్సు గల ప్రతి బిడ్డకు విద్యను ప్రాథమిక హక్కుగా మార్చిన ఒక చారిత్రాత్మక చట్టం. ఈ వయస్సు వర్గానికి ఉచిత, నిర్బంధ మరియు నాణ్యమైన ప్రాథమిక విద్యను అందుబాటులోకి తీసుకురావడం దీని ప్రాథమిక లక్ష్యం."
  },
  {
    "id": 48,
    "question": "In India, the Prime Minister and his Council of Ministers have to quit when (TSTET 09 Jan 2025)\nభారతదేశంలో, ప్రధానమంత్రి మరియు ఆయన మంత్రి మండలి ఎప్పుడు రాజీనామా చేయాలి?",
    "options": [
      "The President of India asks the Prime Minister to resign.\nభారత రాష్ట్రపతి ప్రధానమంత్రిని రాజీనామా చేయమని అడిగినప్పుడు.",
      "The majority of the Lok Sabha members say that they have \"No Confidence\" in the council of Ministers.\nలోక్‌సభ సభ్యులలో అధికశాతం మంది మంత్రిమండలిపై తమకు \"అవిశ్వాసం\" ఉందని చెప్పినప్పుడు.",
      "They lose in the election in any one of the bye election conducted in any part of the country.\nదేశంలోని ఏ ప్రాంతంలోనైనా నిర్వహించిన ఏదైనా ఒక ఉప ఎన్నికలో వారు ఓడిపోయినప్పుడు.",
      "The Private Bill is not passed in either of the houses of the Parliament.\nపార్లమెంటు ఉభయ సభలలో ఏ ఒక్కదానిలోనైనా ప్రైవేట్ బిల్లు ఆమోదం పొందనప్పుడు."
    ],
    "correctAnswer": 1,
    "explanation": "భారతదేశ పార్లమెంటరీ ప్రజాస్వామ్యంలో, కార్యనిర్వాహక వర్గం (ప్రధానమంత్రి మరియు మంత్రి మండలి) శాసనసభ దిగువ సభ అయిన లోక్‌సభకు సమిష్టిగా బాధ్యత వహిస్తుంది. లోక్‌సభలో మెజారిటీ ఓటుతో అవిశ్వాస తీర్మానం ఆమోదం పొందితే, ప్రభుత్వం తన మెజారిటీ మద్దతును కోల్పోయిందని అది ప్రదర్శిస్తుంది, మరియు అది రాజీనామా చేయాలి."
  },
  {
    "id": 49,
    "question": "In Punjab, the followers of Swamy Dayananda Saraswathi set up the Dayananda Anglo Vedic School to (TSTET 09 Jan 2025)\nపంజాబ్‌లో, స్వామి దయానంద సరస్వతి అనుచరులు దయానంద ఆంగ్లో వేదిక్ పాఠశాలను దేనికోసం స్థాపించారు?",
    "options": [
      "To encourage the children to fight for freedom.\nపిల్లలను స్వేచ్ఛ కోసం పోరాడటానికి ప్రోత్సహించడం.",
      "To convert the other religious people into Hinduism.\nఇతర మతాల వారిని హిందూ మతంలోకి మార్చడం.",
      "To educate children in modern subjects.\nపిల్లలకు ఆధునిక విషయాలలో విద్యను అందించడం.",
      "To focus on Vedic religion.\nవైదిక మతంపై దృష్టి పెట్టడం."
    ],
    "correctAnswer": 2,
    "explanation": "దయానంద ఆంగ్లో-వేదిక్ (D.A.V.) విద్యా ఉద్యమం సాంప్రదాయ భారతీయ విలువలు మరియు వైదిక బోధనలను ఆధునిక శాస్త్రీయ మరియు ఆంగ్ల విద్యతో మిళితం చేయడమే లక్ష్యంగా పెట్టుకుంది. విద్యార్థులను వారి సాంస్కృతిక వారసత్వంలో పాతుకుపోయేలా చేస్తూ, ఆధునిక ప్రపంచం యొక్క సవాళ్లకు వారిని సిద్ధం చేసే సంపూర్ణ విద్యను అందించడం దీని లక్ష్యం."
  },
  {
    "id": 50,
    "question": "This movement gave tremendous impetus to Indian Industry. (TSTET 09 Jan 2025)\nఈ ఉద్యమం భారత పరిశ్రమకు అపారమైన ప్రోత్సాహాన్ని ఇచ్చింది.",
    "options": [
      "Non-Cooperation Movement\nసహాయ నిరాకరణ ఉద్యమం",
      "Swadeshi Movement\nస్వదేశీ ఉద్యమం",
      "Quit India Movement\nక్విట్ ఇండియా ఉద్యమం",
      "Civil Disobedience Movement\nశాసనోల్లంఘన ఉద్యమం"
    ],
    "correctAnswer": 1,
    "explanation": "స్వదేశీ ఉద్యమం (1905లో ప్రారంభమైంది) బ్రిటిష్ వస్తువులను బహిష్కరించడం మరియు భారతీయ తయారీ ఉత్పత్తుల వాడకాన్ని ప్రోత్సహించడంపై దృష్టి పెట్టింది. ఇది స్వదేశీ వస్తువులకు డిమాండ్‌లో పెరుగుదలను సృష్టించింది, ఇది వస్త్రాలు, సబ్బు, అగ్గిపెట్టెలు మరియు బ్యాంకులు సహా అనేక భారతీయ పరిశ్రమల స్థాపన మరియు వృద్ధికి దారితీసింది."
  }
]


export const environmentalPaper1TeluguQuestions = rawEnvironmentalPaper1TeluguData.map(
  (question, index) => {
    const options = question.options ?? [];
    const normalizedCorrectAnswer =
      Number.isInteger(question.correctAnswer) &&
      question.correctAnswer >= 0 &&
      question.correctAnswer < options.length
        ? question.correctAnswer
        : 0;

    return {
      id: `TEL-EVS1-${index + 1}`,
      question: question.question ?? "",
      options,
      correctAnswer: normalizedCorrectAnswer,
      explanation: question.explanation ?? "",
    };
  },
);


export const convertEnvironmentalPaper1TeluguToQuestionFormat = (
  questions: typeof environmentalPaper1TeluguQuestions,
) => {
  return questions.map((question, index) => ({
    id: index + 1,
    question: question.question,
    options: question.options,
    correctAnswer: question.correctAnswer,
    explanation: question.explanation,
  }));
};