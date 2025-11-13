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
  },
  {
    "id": 51,
    "question": "The Nizams were initially Provincial Governors of these rulers.\n(TSTET 09 Jan 2025)\nనిజాంలు మొదట ఈ పాలకుల యొక్క ప్రాంతీయ గవర్నర్లుగా ఉండేవారు.",
    "options": [
      "Maratha Rulers\nమరాఠా పాలకులు",
      "Bahmani Sulthans\nబహమనీ సుల్తానులు",
      "Mughal Emperors\nమొఘల్ చక్రవర్తులు",
      "Nawabs of Bengal\nబెంగాల్ నవాబులు"
    ],
    "correctAnswer": 2,
    "explanation": "అసఫ్ జాహీ వంశం, వీరి పాలకులను హైదరాబాద్ నిజాంలు అని పిలుస్తారు, దీనిని మీర్ కమర్-ఉద్-దిన్ సిద్ధిఖీ స్థాపించారు. అతను మొఘల్ చక్రవర్తుల క్రింద దక్కన్ ప్రాంతానికి వైస్రాయ్ లేదా ప్రాంతీయ గవర్నర్‌గా ఉండేవాడు. మొఘల్ శక్తి బలహీనపడటంతో, అతను ఒక స్వతంత్ర రాజ్యాన్ని స్థాపించాడు."
  },
  {
    "id": 52,
    "question": "Among the following, identify the INCORRECT statement regarding the functions of the President of India.\n(TSTET 09 Jan 2025)\nభారత రాష్ట్రపతి విధులకు సంబంధించి క్రింది వాటిలో తప్పు వాఖ్యాన్ని గుర్తించండి.",
    "options": [
      "The President nominates 2 members to Lok Sabha and 12 members to Rajya Sabha.\nరాష్ట్రపతి లోక్‌సభకు 2 మంది సభ్యులను మరియు రాజ్యసభకు 12 మంది సభ్యులను నామినేట్ చేస్తారు.",
      "The President appoints the Chief Election Commissioner and other commissioners.\nరాష్ట్రపతి ప్రధాన ఎన్నికల కమిషనర్ మరియు ఇతర కమిషనర్లను నియమిస్తారు.",
      "The President Declares National Emergency as per article 352 of the Indian Constitution.\nరాష్ట్రపతి భారత రాజ్యాంగంలోని 352వ అధికరణం ప్రకారం జాతీయ అత్యవసర పరిస్థితిని ప్రకటిస్తారు.",
      "The President presides the meetings of the joint session of the Parliament.\nరాష్ట్రపతి పార్లమెంట్ ఉభయ సభల సంయుక్త సమావేశానికి అధ్యక్షత వహిస్తారు."
    ],
    "correctAnswer": 3,
    "explanation": "ఈ వాక్యం తప్పు. భారత రాష్ట్రపతికి పార్లమెంట్ ఉభయ సభల సంయుక్త సమావేశాన్ని ఏర్పాటు చేసే అధికారం ఉన్నప్పటికీ, ఆ సమావేశానికి లోక్‌సభ స్పీకర్ అధ్యక్షత వహిస్తారు. మిగిలిన మూడు వాక్యాలు రాష్ట్రపతి విధులను సరిగ్గా వివరిస్తాయి."
  },
  {
    "id": 53,
    "question": "The eastern most boundary of the Himalayan Mountains is\n(TSTET 09 Jan 2025)\nహిమాలయ పర్వతాల యొక్క తూర్పు సరిహద్దు ఏది?",
    "options": [
      "Brahmaputra Valley\nబ్రహ్మపుత్ర లోయ",
      "The Nag Tiba Ranges\nనాగ్ టిబ్బా శ్రేణులు",
      "The Pir Panjal Range\nపీర్ పంజాల్ శ్రేణి",
      "Sundarbans\nసుందరబనాలు"
    ],
    "correctAnswer": 0,
    "explanation": "విశాలమైన హిమాలయ పర్వత శ్రేణి పశ్చిమాన సింధు నది నుండి తూర్పున బ్రహ్మపుత్ర నది వరకు విస్తరించి ఉంది. బ్రహ్మపుత్ర నది నామ్చా బర్వా శిఖరం వద్ద ఒక పదునైన మలుపు తీసుకుంటుంది, ఇది ఈ పర్వత శ్రేణికి అత్యంత తూర్పు బిందువును సూచిస్తుంది."
  },
  {
    "id": 54,
    "question": "This river originates in the northern slopes of the Kailash range in Tibet.\n(TSTET 09 Jan 2025)\nఈ నది టిబెట్‌లోని కైలాస పర్వత శ్రేణి ఉత్తర వాలులలో ఉద్భవించింది.",
    "options": [
      "Yamuna\nయమున",
      "Sone\nసోన్",
      "Indus\nసింధు",
      "Ganges\nగంగ"
    ],
    "correctAnswer": 2,
    "explanation": "సింధు నది టిబెట్ పీఠభూమిలో, కైలాస పర్వత శ్రేణిలోని మానసరోవర్ సరస్సు దగ్గర పుట్టింది. ఇది టిబెట్ మరియు లడఖ్ గుండా వాయువ్య దిశగా ప్రవహించి, ఆ తర్వాత పాకిస్తాన్‌లోకి దక్షిణం వైపు తిరుగుతుంది. గంగా మరియు యమున నదులు భారత హిమాలయాలలో ఉద్భవించాయి."
  },
  {
    "id": 55,
    "question": "According to this educational psychologist, teaching of science is making children involve in the scientific processes.\n(TSTET 09 Jan 2025)\nఈ విద్యా మనస్తత్వవేత్త ప్రకారం, సైన్స్ బోధన అంటే పిల్లలను శాస్త్రీయ ప్రక్రియలలో నిమగ్నం చేయడం.",
    "options": [
      "E. L. Thorndike\nఇ. ఎల్. థోర్న్‌డైక్",
      "Richard M. Gagne\nరిచర్డ్ ఎం. గాగ్నే",
      "Jean Piaget\nజీన్ పియాజె",
      "Heinrich Pestalozzi\nహెన్రిచ్ పెస్టలోజీ"
    ],
    "correctAnswer": 1,
    "explanation": "ప్రభావశీలుడైన విద్యా మనస్తత్వవేత్త రాబర్ట్ ఎం. గాగ్నే, విజ్ఞానశాస్త్ర విద్య కేవలం వాస్తవాలను నేర్చుకోవడం మాత్రమే కాదని, 'శాస్త్ర ప్రక్రియలను' నైపుణ్యంగా సాధించడం అని నొక్కిచెప్పారు. ఈ ప్రక్రియలలో పరిశీలన, అనుమితి, వర్గీకరణ మరియు ప్రయోగాలు వంటి నైపుణ్యాలు ఉంటాయి, ఇవి శాస్త్రీయ పరిశోధనకు ప్రాథమికమైనవి."
  },
  {
    "id": 56,
    "question": "The following competencies/learning indicators can be excluded in slip-tests of the formative assessment.\n(TSTET 09 Jan 2025)\nనిర్మాణాత్మక మూల్యాంకనంలోని స్లిప్-టెస్ట్‌ల నుండి క్రింది సామర్థ్యాలు/అభ్యాస సూచికలను మినహాయించవచ్చు.",
    "options": [
      "appreciation, values & sensitivity towards diversity\nప్రశంస, విలువలు & వైవిధ్యం పట్ల సున్నితత్వం",
      "information skills, drawing skills\nసమాచార నైపుణ్యాలు, చిత్రలేఖన నైపుణ్యాలు",
      "understanding, questioning & formulation of hypothesis\nఅవగాహన, ప్రశ్నించడం & పరికల్పన రూపకల్పన",
      "projects, surveys & field trips\nప్రాజెక్టులు, సర్వేలు & క్షేత్ర పర్యటనలు"
    ],
    "correctAnswer": 3,
    "explanation": "స్లిప్ టెస్ట్‌లు అనేవి సాధారణంగా తక్షణ జ్ఞాపకశక్తిని మరియు సంభావిత అవగాహనను తనిఖీ చేయడానికి ఉపయోగించే చిన్న, శీఘ్ర మూల్యాంకనాలు. ప్రాజెక్టులు, సర్వేలు మరియు క్షేత్ర పర్యటనల వంటి సామర్థ్యాలు దీర్ఘకాలిక, కార్యాచరణ-ఆధారిత మూల్యాంకనాలు, వీటిలో ప్రణాళిక, అమలు మరియు వివరణాత్మక నివేదన ఉంటాయి, కాబట్టి వాటిని ఒక సాధారణ స్లిప్ టెస్ట్ ద్వారా మూల్యాంకనం చేయలేము."
  },
  {
    "id": 57,
    "question": "One of the following is NOT an advantage of science kits.\n(TSTET 09 Jan 2025)\nకింది వాటిలో సైన్స్ కిట్‌ల ప్రయోజనం కానిది ఏది?",
    "options": [
      "They require extra source of energy for use.\nవాటిని ఉపయోగించడానికి అదనపు శక్తి వనరు అవసరం.",
      "They are portable and can be used both indoors and outdoors.\nఅవి పోర్టబుల్ మరియు ఇండోర్, అవుట్‌డోర్‌లలో ఉపయోగించవచ్చు.",
      "The material and the equipment kept in science kits are simple, locally available and are capable of improvisation.\nసైన్స్ కిట్‌లలోని వస్తువులు మరియు పరికరాలు సరళమైనవి, స్థానికంగా లభించేవి మరియు మెరుగుపరచడానికి వీలుగా ఉంటాయి.",
      "A large number of activities can be performed with the simple material available in these kits.\nఈ కిట్‌లలో లభించే సాధారణ వస్తువులతో పెద్ద సంఖ్యలో కార్యకలాపాలు నిర్వహించవచ్చు."
    ],
    "correctAnswer": 0,
    "explanation": "ఇది ఒక ప్రయోజనం కాదు; ఇది ఒక ప్రతికూలత మరియు తరచుగా అవాస్తవం. చాలా విద్యాపరమైన సైన్స్ కిట్‌ల యొక్క ముఖ్య ప్రయోజనం ఏమిటంటే, అవి స్వయం-సమృద్ధిగా ఉండేలా మరియు బాహ్య శక్తి వనరు అవసరం లేని సాధారణ వస్తువులను ఉపయోగించేలా రూపొందించబడ్డాయి. ఇది వాటిని బహుముఖంగా మరియు ఏ సెట్టింగ్‌లోనైనా ఉపయోగించడానికి సులభం చేస్తుంది. మిగిలిన ఎంపికలన్నీ ప్రయోజనాలే."
  },
  {
    "id": 58,
    "question": "\"A student tells the reason for change in the family system\" is the learning indicator of this academic standard.\n(TSTET 09 Jan 2025)\n\"ఒక విద్యార్థి కుటుంబ వ్యవస్థలో మార్పుకు కారణాన్ని చెబుతాడు\" అనేది ఈ విద్యా ప్రమాణానికి అభ్యాస సూచిక.",
    "options": [
      "Information gathering skills\nసమాచార సేకరణ నైపుణ్యాలు",
      "Conceptual understanding\nభావనాత్మక అవగాహన",
      "Questioning and formulation of hypothesis\nప్రశ్నించడం మరియు పరికల్పన రూపకల్పన",
      "Experiments and field observation\nప్రయోగాలు మరియు క్షేత్ర పరిశీలన"
    ],
    "correctAnswer": 1,
    "explanation": "కుటుంబ వ్యవస్థలో మార్పుల వంటి సామాజిక దృగ్విషయం వెనుక గల కారణాలను వివరించడానికి ఒక విద్యార్థి వివిధ వాస్తవాలను మరియు ఆలోచనలను ఒక పొందికైన వివరణగా కలపడం అవసరం. ఇది సాధారణ జ్ఞాపకశక్తిని మించి, లోతైన అభ్యాస స్థాయిని ప్రదర్శిస్తుంది, ఇది భావనాత్మక అవగాహనకు మూలం."
  },
  {
    "id": 59,
    "question": "'Swords used by soldiers and a house made with thermacol' are the examples respectively for\n(TSTET 09 Jan 2025)\n'సైనికులు ఉపయోగించే కత్తులు మరియు థర్మాకోల్‌తో చేసిన ఇల్లు' అనేవి వరుసగా వీటికి ఉదాహరణలు",
    "options": [
      "Real objects, Models\nనిజ వస్తువులు, నమూనాలు",
      "Models, real objects\nనమూనాలు, నిజ వస్తువులు",
      "Both are real objects\nరెండూ నిజ వస్తువులే",
      "Both are models\nరెండూ నమూనాలే"
    ],
    "correctAnswer": 0,
    "explanation": "సైనికులు వాస్తవంగా ఉపయోగించిన కత్తులు నిజమైన వస్తువులు (రియాలియా అని కూడా అంటారు), ఎందుకంటే అవి వాస్తవ ప్రపంచంలోని ప్రామాణికమైన వస్తువులు. థర్మాకోల్ (పాలీస్టైరిన్)తో చేసిన ఇల్లు అనేది నిజమైన ఇంటికి ప్రాతినిధ్యం లేదా చిన్న ప్రతిరూపం, కాబట్టి నిర్వచనం ప్రకారం ఇది ఒక నమూనా."
  },
  {
    "id": 60,
    "question": "Choose the correct pair among the following related to maps.\n(TSTET 09 Jan 2025)\nపటాలకు సంబంధించి క్రింది వాటిలో సరైన జతను ఎంచుకోండి.",
    "options": [
      "Flat maps - one dimensional maps\nచదునైన పటాలు - ఏక డైమెన్షనల్ పటాలు",
      "Relief maps - two dimensional maps\nఉపశమన పటాలు - ద్వి డైమెన్షనల్ పటాలు",
      "Flat maps - two dimensional maps\nచదునైన పటాలు - ద్వి డైమెన్షనల్ పటాలు",
      "Relief maps - one dimensional maps\nఉపశమన పటాలు - ఏక డైమెన్షనల్ పటాలు"
    ],
    "correctAnswer": 2,
    "explanation": "అట్లాస్‌లోని సాధారణ చదునైన పటం వంటిది, త్రి-డైమెన్షనల్ (3D) స్థలం యొక్క ద్వి-డైమెన్షనల్ (2D) ప్రాతినిధ్యం. దీనికి పొడవు మరియు వెడల్పు ఉంటాయి కానీ మూడవ డైమెన్షన్ (ఎత్తు/ఉన్నతి)ను చిహ్నాలు లేదా కాంటూర్ లైన్‌ల ద్వారా సూచిస్తుంది. ఒక రిలీఫ్ మ్యాప్ గనుక ఉపరితలం ఎత్తుగా ఉంటే అది 3D కావచ్చు, కానీ చదునైన పటం ఎల్లప్పుడూ 2Dగా పరిగణించబడుతుంది."
  },
  {
    "id": 61,
    "question": "The food item which is commonly referred to as fermented food from the following is:\n(TSTET 10 Jan 2025)\nకింది వాటిలో సాధారణంగా పులియబెట్టిన ఆహారంగా సూచించబడే ఆహార పదార్థం ఏది:",
    "options": [
      "Pulao\nపలావ్",
      "Pasta\nపాస్తా",
      "Idly\nఇడ్లీ",
      "Rice\nఅన్నం"
    ],
    "correctAnswer": 2,
    "explanation": "పులియబెట్టడం (ఫర్మెంటేషన్) అనేది ఈస్ట్ మరియు బ్యాక్టీరియా వంటి సూక్ష్మజీవులు కార్బోహైడ్రేట్‌లను ఆల్కహాల్ లేదా ఆమ్లాలుగా మార్చే జీవక్రియ ప్రక్రియ. ఇడ్లీ పిండిని బియ్యం మరియు పప్పులతో తయారు చేసి, కొన్ని గంటల పాటు పులియబెట్టడానికి వదిలివేస్తారు, ఇది దానికి ప్రత్యేకమైన మృదువైన, స్పాంజి లాంటి ఆకృతిని మరియు కొద్దిగా పుల్లని రుచిని ఇస్తుంది. పలావ్, అన్నం మరియు పాస్తా వండిన వంటకాలు, వీటిలో సాధారణంగా పులియబెట్టే ప్రక్రియ ఉండదు."
  },
  {
    "id": 62,
    "question": "This vitamin deficiency occurs in many people due to insufficient exposure to sunlight:\n(TSTET 10 Jan 2025)\nసూర్యరశ్మికి తగినంతగా గురికాకపోవడం వల్ల చాలా మందిలో ఈ విటమిన్ లోపం ఏర్పడుతుంది:",
    "options": [
      "Vitamin A\nవిటమిన్ ఎ",
      "Vitamin B12\nవిటమిన్ బి12",
      "Vitamin C\nవిటమిన్ సి",
      "Vitamin D\nవిటమిన్ డి"
    ],
    "correctAnswer": 3,
    "explanation": "విటమిన్ డిని తరచుగా 'సన్‌షైన్ విటమిన్' అని పిలుస్తారు, ఎందుకంటే సూర్యరశ్మికి గురైనప్పుడు చర్మం దానిని ఉత్పత్తి చేస్తుంది. ఇది కాల్షియం శోషణ మరియు ఎముకల ఆరోగ్యానికి కీలక పాత్ర పోషిస్తుంది. తగినంత సూర్యరశ్మి లేకపోవడం విటమిన్ డి లోపానికి ఒక ప్రాథమిక కారణం. ఇతర విటమిన్లు ప్రధానంగా ఆహారం ద్వారా లభిస్తాయి."
  },
  {
    "id": 63,
    "question": "These are called as 'natural scavengers':\n(TSTET 10 Jan 2025)\nవీటిని 'సహజ పారిశుద్ధ్య కార్మికులు' (natural scavengers) అని పిలుస్తారు:",
    "options": [
      "Crows\nకాకులు",
      "Lions\nసింహాలు",
      "Elephants\nఏనుగులు",
      "Deers\nజింకలు"
    ],
    "correctAnswer": 0,
    "explanation": "స్కావెంజర్‌లు అంటే చనిపోయిన జంతువులు, చనిపోయిన మొక్కల పదార్థాలు లేదా వ్యర్థాలను తినే జంతువులు. కాకులు స్కావెంజర్‌లకు ఒక చక్కటి ఉదాహరణ, ఇవి చనిపోయిన జంతువులను తొలగించి పర్యావరణాన్ని శుభ్రపరచడంలో ముఖ్యమైన పర్యావరణ పాత్ర పోషిస్తాయి. సింహాలు మాంసాహారులు, ఏనుగులు మరియు జింకలు శాకాహారులు."
  },
  {
    "id": 64,
    "question": "Identify the correct pair among the following:\n(TSTET 10 Jan 2025)\nకింది వాటిలో సరైన జతను గుర్తించండి:",
    "options": [
      "Sericulture - Cultivation of fish\nసెరికల్చర్ - చేపల పెంపకం",
      "Agro culture - Cultivation of plants\nఆగ్రో కల్చర్ - మొక్కల పెంపకం",
      "Aqua culture - Cultivation of aquatic organisms\nఆక్వా కల్చర్ - జలచరాల పెంపకం",
      "Zoo culture - Cultivation of animals\nజూ కల్చర్ - జంతువుల పెంపకం"
    ],
    "correctAnswer": 2,
    "explanation": "చేపలు, క్రస్టేషియన్లు, మొలస్క్‌లు, జల మొక్కలు మరియు ఇతర జల జీవుల పెంపకానికి సరైన పదం ఆక్వాకల్చర్. సెరికల్చర్ అంటే పట్టు కోసం పట్టు పురుగులను పెంచడం. మొక్కల పెంపకానికి సరైన పదం వ్యవసాయం (Agriculture). 'జూ కల్చర్' అనేది ప్రామాణిక పదం కాదు; పశుపోషణ (animal husbandry) అనేది వ్యవసాయ జంతువుల పెంపకం మరియు సంరక్షణ శాస్త్రం."
  },
  {
    "id": 65,
    "question": "Among the following, the most correct sentence about lichens is:\n(TSTET 10 Jan 2025)\nకింది వాటిలో లైకెన్‌ల గురించి అత్యంత సరైన వాక్యం ఏది:",
    "options": [
      "Lichens are a type of moss that grow in wet, shaded areas.\nలైకెన్‌లు తడి, నీడ ఉన్న ప్రదేశాలలో పెరిగే ఒక రకమైన నాచు.",
      "Lichens are a symbiotic association between a fungus and an algae or cyanobacterium.\nలైకెన్‌లు ఒక శిలీంధ్రం మరియు శైవలం లేదా సైనోబాక్టీరియా మధ్య సహజీవన సంబంధం.",
      "Lichens are independent organisms that do not rely on other species for survival.\nలైకెన్‌లు జీవించడానికి ఇతర జాతులపై ఆధారపడని స్వతంత్ర జీవులు.",
      "Lichens are plants that absorb nutrients through their roots from the soil.\nలైకెన్‌లు నేల నుండి తమ వేర్ల ద్వారా పోషకాలను గ్రహించే మొక్కలు."
    ],
    "correctAnswer": 1,
    "explanation": "లైకెన్‌లు అనేవి శైవలాలు లేదా సైనోబాక్టీరియాలు అనేక శిలీంధ్ర జాతుల తంతువుల మధ్య పరస్పర ప్రయోజనకరమైన సంబంధంలో జీవించడం వల్ల ఏర్పడే సంయుక్త జీవులు. శిలీంధ్రం ఆశ్రయం, నీరు మరియు ఖనిజాలను అందిస్తుంది, అయితే శైవలం లేదా సైనోబాక్టీరియా కిరణజన్య సంయోగక్రియ ద్వారా ఆహారాన్ని అందిస్తుంది. అవి మొక్కలు కావు మరియు వాటికి వేర్లు ఉండవు."
  },
  {
    "id": 66,
    "question": "Read the following statements and choose the correct statements.\nA) Greenhouse effect is the principal cause of global warming.\nB) Depletion of forests is the principal cause of acid rain.\nC) CFC is a cause of the greenhouse effect.\n(TSTET 10 Jan 2025)\nకింది వాక్యాలను చదివి, సరైన వాక్యాలను ఎంచుకోండి.\nA) గ్లోబల్ వార్మింగ్‌కు గ్రీన్‌హౌస్ ప్రభావం ప్రధాన కారణం.\nB) అడవుల నరికివేత ఆమ్ల వర్షానికి ప్రధాన కారణం.\nC) CFC గ్రీన్‌హౌస్ ప్రభావానికి ఒక కారణం.",
    "options": [
      "A only\nA మాత్రమే",
      "A & C only\nA & C మాత్రమే",
      "B & C only\nB & C మాత్రమే",
      "A, B & C\nA, B & C"
    ],
    "correctAnswer": 1,
    "explanation": "వాక్యం A సరైనది; వాతావరణంలో వాయువులు వేడిని బంధించే తీవ్రమైన గ్రీన్‌హౌస్ ప్రభావం గ్లోబల్ వార్మింగ్‌కు ప్రాథమిక చోదకం. వాక్యం C సరైనది; క్లోరోఫ్లోరోకార్బన్‌లు (CFCలు) శక్తివంతమైన గ్రీన్‌హౌస్ వాయువులు. వాక్యం B తప్పు; ఆమ్ల వర్షానికి ప్రధాన కారణం శిలాజ ఇంధనాలను మండించడం వల్ల వెలువడే సల్ఫర్ డయాక్సైడ్ మరియు నైట్రోజన్ ఆక్సైడ్‌లు, అటవీ నిర్మూలన కాదు."
  },
  {
    "id": 67,
    "question": "Identify the correct set contains future energy resources that are renewable, sustainable, and have minimal environmental impact from the following.\n(TSTET 10 Jan 2025)\nకింది వాటి నుండి పునరుత్పాదక, స్థిరమైన మరియు తక్కువ పర్యావరణ ప్రభావాన్ని కలిగి ఉన్న భవిష్యత్ ఇంధన వనరులను కలిగి ఉన్న సరైన సమితిని గుర్తించండి.",
    "options": [
      "Fossil fuels, Nuclear energy, Hydropower\nశిలాజ ఇంధనాలు, అణుశక్తి, జలవిద్యుత్",
      "Geothermal energy, Hydropower, Coal\nభూ ఉష్ణ శక్తి, జలవిద్యుత్, బొగ్గు",
      "Coal, Oil, Natural gas\nబొగ్గు, చమురు, సహజ వాయువు",
      "Solar power, Wind power, Biomass\nసౌరశక్తి, పవన శక్తి, బయోమాస్"
    ],
    "correctAnswer": 3,
    "explanation": "సౌరశక్తి, పవన శక్తి మరియు బయోమాస్ అన్నీ నిరంతరం భర్తీ చేయబడే సహజ ప్రక్రియల నుండి తీసుకోబడిన పునరుత్పాదక ఇంధన వనరులు. అవి స్థిరమైనవిగా పరిగణించబడతాయి మరియు పునరుత్పాదకం కానివి మరియు కాలుష్యం మరియు వాతావరణ మార్పులకు ప్రధాన కారణాలైన శిలాజ ఇంధనాలతో (బొగ్గు, చమురు, సహజ వాయువు) పోలిస్తే తక్కువ పర్యావరణ ప్రభావాన్ని కలిగి ఉంటాయి."
  },
  {
    "id": 68,
    "question": "Among the following, identify the correct set of chemicals commonly used for disinfecting water:\n(TSTET 10 Jan 2025)\nకింది వాటిలో, నీటిని శుద్ధి చేయడానికి సాధారణంగా ఉపయోగించే రసాయనాల సరైన సమితిని గుర్తించండి:",
    "options": [
      "Chlorine and Ozone\nక్లోరిన్ మరియు ఓజోన్",
      "Hydrogen Peroxide and Sodium Hydroxide\nహైడ్రోజన్ పెరాక్సైడ్ మరియు సోడియం హైడ్రాక్సైడ్",
      "Acetic Acid and Citric Acid\nఎసిటిక్ యాసిడ్ మరియు సిట్రిక్ యాసిడ్",
      "Sulfuric Acid and Sodium Chloride\nసల్ఫ్యూరిక్ యాసిడ్ మరియు సోడియం క్లోరైడ్"
    ],
    "correctAnswer": 0,
    "explanation": "క్లోరిన్ మరియు ఓజోన్ శక్తివంతమైన ఆక్సీకరణ కారకాలు, వీటిని నీటి శుద్ధి కర్మాగారాలలో బ్యాక్టీరియా మరియు వైరస్‌ల వంటి హానికరమైన సూక్ష్మజీవులను చంపడం ద్వారా నీటిని శుద్ధి చేయడానికి విస్తృతంగా ఉపయోగిస్తారు. ఇతర జతలు పెద్ద ఎత్తున క్రిమిసంహారకానికి ఉపయోగించబడవు లేదా త్రాగునీటి శుద్ధికి తగినవి కావు."
  },
  {
    "id": 69,
    "question": "Knee joints and elbow joints are examples of:\n(TSTET 10 Jan 2025)\nమోకాలి కీళ్ళు మరియు మోచేతి కీళ్ళు వీటికి ఉదాహరణలు:",
    "options": [
      "Ball and socket joint\nబంతి గిన్నె కీలు",
      "Pivot joint\nబొంగరపు కీలు",
      "Hinge joint\nమడతబందు కీలు",
      "Fixed joint\nకదలని కీలు"
    ],
    "correctAnswer": 2,
    "explanation": "మడతబందు కీళ్ళు ఒక రకమైన సైనోవియల్ కీలు, ఇవి తలుపు మడతబందు వలె పనిచేస్తాయి, కేవలం ఒకే తలంలో (వంగడం మరియు చాచడం) కదలికను అనుమతిస్తాయి. మానవ శరీరంలో మోకాలు మరియు మోచేయి మడతబందు కీళ్ళకు ప్రధాన ఉదాహరణలు. బంతి గిన్నె కీళ్ళు (తుంటి వంటివి) చాలా విస్తృతమైన కదలికలను అనుమతిస్తాయి."
  },
  {
    "id": 70,
    "question": "The blood vessels that carries oxygenated blood from the heart to the body are:\n(TSTET 10 Jan 2025)\nగుండె నుండి శరీరానికి ఆక్సిజన్ సహిత రక్తాన్ని తీసుకువెళ్ళే రక్తనాళాలు ఏవి:",
    "options": [
      "Pulmonary artery\nపుపుస ధమని",
      "Pulmonary vein\nపుపుస సిర",
      "Aorta\nబృహద్ధమని (Aorta)",
      "Vena cava\nమహా సిర (Vena cava)"
    ],
    "correctAnswer": 2,
    "explanation": "బృహద్ధమని (Aorta) శరీరంలోని ప్రధాన మరియు అతిపెద్ద ధమని. ఇది గుండె యొక్క ఎడమ జఠరిక నుండి ఉద్భవించి, దైహిక రక్త ప్రసరణ ద్వారా శరీరంలోని అన్ని భాగాలకు ఆక్సిజన్ సహిత రక్తాన్ని తీసుకువెళుతుంది. పుపుస ధమని ఆక్సిజన్ రహిత రక్తాన్ని ఊపిరితిత్తులకు తీసుకువెళుతుంది, అయితే మహా సిర ఆక్సిజన్ రహిత రక్తాన్ని గుండెకు తిరిగి తీసుకువస్తుంది."
  },
  {
    "id": 71,
    "question": "Identify the correct set of organs that excrete waste products produced by metabolism.\n(TSTET 10 Jan 2025)\nజీవక్రియ ద్వారా ఉత్పత్తి అయ్యే వ్యర్థ పదార్థాలను విసర్జించే అవయవాల సరైన సమితిని గుర్తించండి.",
    "options": [
      "Lungs, Kidneys, and Skin\nఊపిరితిత్తులు, మూత్రపిండాలు మరియు చర్మం",
      "Liver, Lungs, and Heart\nకాలేయం, ఊపిరితిత్తులు మరియు గుండె",
      "Stomach, Lungs, and Kidneys\nకడుపు, ఊపిరితిత్తులు మరియు మూత్రపిండాలు",
      "Intestines, Liver, and Lungs\nపేగులు, కాలేయం మరియు ఊపిరితిత్తులు"
    ],
    "correctAnswer": 0,
    "explanation": "విసర్జన వ్యవస్థ జీవక్రియ వ్యర్థాలను తొలగిస్తుంది. మూత్రపిండాలు ప్రాథమిక విసర్జన అవయవాలు, ఇవి రక్తాన్ని వడపోసి మూత్రాన్ని ఉత్పత్తి చేస్తాయి. ఊపిరితిత్తులు వాయు వ్యర్థ పదార్థమైన కార్బన్ డయాక్సైడ్‌ను విసర్జిస్తాయి. చర్మం చెమట ద్వారా యూరియా మరియు లవణాలు వంటి వ్యర్థ పదార్థాలను విసర్జిస్తుంది. అందువల్ల, ఊపిరితిత్తులు, మూత్రపిండాలు మరియు చర్మం విసర్జన అవయవాల యొక్క సరైన సమితిని ఏర్పరుస్తాయి."
  },
  {
    "id": 72,
    "question": "The main function of the large intestine is:\n(TSTET 10 Jan 2025)\nపెద్ద ప్రేగు యొక్క ప్రధాన విధి:",
    "options": [
      "Absorption of food\nఆహారాన్ని శోషించడం",
      "Storage of food\nఆహారాన్ని నిల్వ చేయడం",
      "Digestion of cellulose\nసెల్యులోజ్‌ను జీర్ణం చేయడం",
      "Absorption of water\nనీటిని శోషించడం"
    ],
    "correctAnswer": 3,
    "explanation": "చిన్న ప్రేగులో పోషకాలు శోషించబడిన తర్వాత, మిగిలిన పదార్థం పెద్ద ప్రేగులోకి వెళుతుంది. దీని ప్రాథమిక విధి ఈ పదార్థం నుండి నీరు మరియు ఎలక్ట్రోలైట్‌లను శోషించుకోవడం, దానిని మలంగా ఘనీభవించి విసర్జనకు సిద్ధం చేయడం."
  },
  {
    "id": 73,
    "question": "Which of the following statements best describes the term 'Delta'?\n(TSTET 10 Jan 2025)\n'డెల్టా' అనే పదాన్ని ఉత్తమంగా వివరించే వాక్యం ఏది?",
    "options": [
      "A high, flat area of land\nఎత్తైన, చదునైన భూభాగం",
      "An area where sand and alluvial deposits are deposited by the river at the mouth of the sea\nనది సముద్రంలో కలిసే ముఖద్వారం వద్ద నది ద్వారా ఇసుక మరియు ఒండ్రు నిక్షేపాలు మేట వేయబడిన ప్రాంతం",
      "A steep-sided valley\nనిటారుగా ఉన్న లోయ",
      "An elevated area with a flat top\nచదునైన పైభాగంతో ఉన్న ఎత్తైన ప్రదేశం"
    ],
    "correctAnswer": 1,
    "explanation": "నదీ డెల్టా అనేది నది ముఖద్వారం వద్ద ఏర్పడే త్రిభుజాకార భూభాగం, ఇక్కడ నది ప్రవాహం వేగం తగ్గి, అది మోసుకొచ్చిన ఒండ్రుమట్టిని నిక్షేపిస్తుంది. నది సముద్రం, సరస్సు వంటి నిశ్చల నీటిలో ప్రవేశించినప్పుడు ఇది జరుగుతుంది."
  },
  {
    "id": 74,
    "question": "The main function of the Gond Patla was:\n(TSTET 10 Jan 2025)\nగోండు పట్ల యొక్క ప్రధాన విధి:",
    "options": [
      "To ensure the unity of the villagers and negotiate with the outsiders and agencies on behalf of the villagers\nగ్రామస్తుల ఐక్యతను నిర్ధారించడం మరియు గ్రామస్తుల తరఫున బయటి వ్యక్తులు మరియు ఏజెన్సీలతో చర్చలు జరపడం",
      "To negotiate trade agreements and business in the village\nగ్రామంలో వాణిజ్య ఒప్పందాలు మరియు వ్యాపారంపై చర్చలు జరపడం",
      "To conduct panchayat elections in the village\nగ్రామంలో పంచాయతీ ఎన్నికలు నిర్వహించడం",
      "To manage educational programs in the village\nగ్రామంలో విద్యా కార్యక్రమాలను నిర్వహించడం"
    ],
    "correctAnswer": 0,
    "explanation": "'పట్ల' అనేది గోండు గ్రామానికి సాంప్రదాయ పెద్ద. ఈ పాత్ర సమాజ పాలనలో కేంద్ర స్థానంలో ఉంటుంది, ఇందులో వివాదాలను పరిష్కరించడం, సామాజిక సామరస్యం మరియు ఐక్యతను కాపాడటం, మరియు బాహ్య అధికారులు మరియు వ్యక్తులతో సంభాషణలలో గ్రామానికి ప్రాతినిధ్యం వహించడం వంటివి ఉంటాయి."
  },
  {
    "id": 75,
    "question": "Identify the primary responsibility of a Gram Panchayat Secretary:\n(TSTET 10 Jan 2025)\nగ్రామ పంచాయతీ కార్యదర్శి యొక్క ప్రాథమిక బాధ్యతను గుర్తించండి:",
    "options": [
      "Organizing local festivals\nస్థానిక పండుగలను నిర్వహించడం",
      "Maintaining accounts and minutes of the meetings of the Gram Panchayats\nగ్రామ పంచాయతీల ఖాతాలు మరియు సమావేశాల మినిట్స్‌ను నిర్వహించడం",
      "Coordinating the activities of the Government\nప్రభుత్వ కార్యకలాపాలను సమన్వయం చేయడం",
      "Managing agricultural activities\nవ్యవసాయ కార్యకలాపాలను నిర్వహించడం"
    ],
    "correctAnswer": 1,
    "explanation": "గ్రామ పంచాయతీ కార్యదర్శి ప్రభుత్వం నియమించిన అధికారి, వీరు పంచాయతీ యొక్క పరిపాలనా విధులను నిర్వహిస్తారు. సమావేశాల కోసం ఎజెండాను సిద్ధం చేయడం, మినిట్స్ (కార్యకలాపాలను) నమోదు చేయడం మరియు గ్రామ పంచాయతీ యొక్క ఆర్థిక ఖాతాలను నిర్వహించడం వంటి అధికారిక రికార్డులను ఉంచడం వీరి ముఖ్య బాధ్యత."
  },
  {
    "id": 76,
    "question": "This is known as Prime Meridian:\n(TSTET 10 Jan 2025)\nదీనిని ప్రైమ్ మెరిడియన్ అని పిలుస్తారు:",
    "options": [
      "The longitude that is passing through Greenwich\nగ్రీన్‌విచ్ గుండా వెళుతున్న రేఖాంశం",
      "The longitude that passes near Allahabad\nఅలహాబాద్ సమీపంలో వెళుతున్న రేఖాంశం",
      "The latitude that is dividing the earth into northern and southern hemispheres\nభూమిని ఉత్తర మరియు దక్షిణ అర్ధగోళాలుగా విభజించే అక్షాంశం",
      "The longitude that is passing through 180 degrees east and west longitude\n180 డిగ్రీల తూర్పు మరియు పశ్చిమ రేఖాంశం గుండా వెళుతున్న రేఖాంశం"
    ],
    "correctAnswer": 0,
    "explanation": "ప్రైమ్ మెరిడియన్ అనేది 0° రేఖాంశ రేఖ. అంతర్జాతీయ ఒప్పందం ప్రకారం, ఇది UKలోని లండన్‌లోని గ్రీన్‌విచ్‌లోని రాయల్ అబ్జర్వేటరీ గుండా వెళుతుంది. ఇది రేఖాంశాన్ని కొలవడానికి మరియు ప్రపంచవ్యాప్తంగా సమయ మండలాలను నిర్ణయించడానికి ప్రారంభ స్థానం."
  },
  {
    "id": 77,
    "question": "This colour is commonly used to represent boundaries on land use maps:\n(TSTET 10 Jan 2025)\nభూ వినియోగ పటాలపై సరిహద్దులను సూచించడానికి ఈ రంగును సాధారణంగా ఉపయోగిస్తారు:",
    "options": [
      "Green\nఆకుపచ్చ",
      "Yellow\nపసుపు",
      "Black\nనలుపు",
      "Blue\nనీలం"
    ],
    "correctAnswer": 2,
    "explanation": "ప్రామాణిక కార్టోగ్రఫీలో మరియు టోపోగ్రాఫికల్ మ్యాప్‌లలో, మానవ నిర్మిత లక్షణాలను సూచించడానికి నలుపు రంగును ఉపయోగిస్తారు. ఇందులో రాజకీయ సరిహద్దులు, పరిపాలనా సరిహద్దులు, రోడ్లు, భవనాలు మరియు స్థలాల పేర్లు ఉంటాయి. ఆకుపచ్చ సాధారణంగా అడవులు/వృక్షసంపదను సూచిస్తుంది, మరియు నీలం నీటి వనరులను సూచిస్తుంది."
  },
  {
    "id": 78,
    "question": "This group of individuals is targeted under the 'Antyodaya Anna Yojana':\n(TSTET 10 Jan 2025)\n'అంత్యోదయ అన్న యోజన' కింద ఈ సమూహంలోని వ్యక్తులు లక్ష్యంగా ఉన్నారు:",
    "options": [
      "Middle-income families\nమధ్య-ఆదాయ కుటుంబాలు",
      "Below Poverty Line (BPL) families\nదారిద్య్ర రేఖకు దిగువన (BPL) ఉన్న కుటుంబాలు",
      "Above Poverty line (APL) families\nదారిద్య్ర రేఖకు ఎగువన (APL) ఉన్న కుటుంబాలు",
      "Private employees\nప్రైవేట్ ఉద్యోగులు"
    ],
    "correctAnswer": 1,
    "explanation": "అంత్యోదయ అన్న యోజన (AAY) అనేది సమాజంలోని అత్యంత బలహీన వర్గాలకు ఆహార భద్రతను అందించడమే లక్ష్యంగా ఉన్న భారత ప్రభుత్వ పథకం. ఇది ఇప్పటికే దారిద్య్ర రేఖకు దిగువన (BPL) ఉన్నట్లుగా గుర్తించబడిన కుటుంబాలలో అత్యంత పేదవారిని ప్రత్యేకంగా లక్ష్యంగా చేసుకుంటుంది."
  },
  {
    "id": 79,
    "question": "The main objective of The National Food Security Act, 2013 was:\n(TSTET 10 Jan 2025)\nజాతీయ ఆహార భద్రతా చట్టం, 2013 యొక్క ముఖ్య ఉద్దేశ్యం:",
    "options": [
      "To provide healthcare to all citizens\nపౌరులందరికీ ఆరోగ్య సంరక్షణ అందించడం",
      "To promote agricultural exports\nవ్యవసాయ ఎగుమతులను ప్రోత్సహించడం",
      "To eliminate poverty\nపేదరికాన్ని నిర్మూలించడం",
      "To ensure access to adequate food at affordable prices to all\nఅందరికీ సరసమైన ధరలకు తగినంత ఆహారం అందుబాటులో ఉండేలా చూడటం"
    ],
    "correctAnswer": 3,
    "explanation": "జాతీయ ఆహార భద్రతా చట్టం, 2013, ప్రజలు గౌరవంగా జీవించడానికి సరసమైన ధరలకు తగిన పరిమాణంలో నాణ్యమైన ఆహారాన్ని అందుబాటులో ఉంచడం ద్వారా మానవ జీవిత చక్ర విధానంలో ఆహార మరియు పోషకాహార భద్రతను అందించడమే లక్ష్యంగా పెట్టుకుంది."
  },
  {
    "id": 80,
    "question": "Among the following, identify the main objective of the MGNREGA, 2005:\n(TSTET 10 Jan 2025)\nకింది వాటిలో, MGNREGA, 2005 యొక్క ముఖ్య ఉద్దేశ్యాన్ని గుర్తించండి:",
    "options": [
      "To promote urban employment\nపట్టణ ఉపాధిని ప్రోత్సహించడం",
      "To provide guarantee for at least 100 days of employment in a year in the rural areas\nగ్రామీణ ప్రాంతాలలో సంవత్సరానికి కనీసం 100 రోజుల ఉపాధికి హామీ ఇవ్వడం",
      "To improve rural infrastructure and rural employment\nగ్రామీణ మౌలిక సదుపాయాలు మరియు గ్రామీణ ఉపాధిని మెరుగుపరచడం",
      "To support agricultural subsidies and promote rural employment\nవ్యవసాయ సబ్సిడీలకు మద్దతు ఇవ్వడం మరియు గ్రామీణ ఉపాధిని ప్రోత్సహించడం"
    ],
    "correctAnswer": 1,
    "explanation": "మహాత్మా గాంధీ జాతీయ గ్రామీణ ఉపాధి హామీ చట్టం (MGNREGA) ఒక చారిత్రాత్మక సామాజిక భద్రతా చట్టం. దీని ప్రాథమిక లక్ష్యం, నైపుణ్యం లేని శారీరక శ్రమ చేయడానికి స్వచ్ఛందంగా ముందుకు వచ్చే ప్రతి కుటుంబంలోని వయోజన సభ్యులకు ఒక ఆర్థిక సంవత్సరంలో కనీసం 100 రోజుల వేతన ఉపాధికి చట్టబద్ధంగా హామీ ఇవ్వడం ద్వారా గ్రామీణ కుటుంబాల జీవనోపాధి భద్రతను పెంచడం."
  },
  {
    "id": 81,
    "question": "Among the following, this social reformer was credited with promoting women education in India and was the first female teacher in India:\n(TSTET 10 Jan 2025)\nకింది వారిలో, ఈ సంఘ సంస్కర్త భారతదేశంలో మహిళా విద్యను ప్రోత్సహించిన ఘనతను పొందారు మరియు భారతదేశంలో మొదటి మహిళా ఉపాధ్యాయురాలు:",
    "options": [
      "Savitribai Phule\nసావిత్రిబాయి ఫూలే",
      "Sarojini Naidu\nసరోజినీ నాయుడు",
      "Rani Lakshmibai\nరాణి లక్ష్మీబాయి",
      "Pandita Ramabai Saraswati\nపండిత రమాబాయి సరస్వతి"
    ],
    "correctAnswer": 0,
    "explanation": "సావిత్రిబాయి ఫూలే భారతదేశ సామాజిక సంస్కరణ ఉద్యమంలో ఒక ముఖ్యమైన వ్యక్తి. ఆమె తన భర్త జ్యోతిరావ్ ఫూలేతో కలిసి 1848లో పూణేలో భారతదేశంలో బాలికల కోసం మొదటి పాఠశాలను ప్రారంభించారు. ఆమె భారతదేశపు మొట్టమొదటి మహిళా ఉపాధ్యాయురాలిగా మరియు మహిళల హక్కులు మరియు విద్య యొక్క మార్గదర్శకురాలిగా విస్తృతంగా గౌరవించబడింది."
  },
  {
    "id": 82,
    "question": "Which of the following statements best describes the term 'Humidity'?\n(TSTET 10 Jan 2025)\n'తేమ' (Humidity) అనే పదాన్ని ఉత్తమంగా వివరించే వాక్యం ఏది?",
    "options": [
      "The change of water into water vapour\nనీరు నీటి ఆవిరిగా మారడం",
      "The amount of water vapour present in the atmosphere\nవాతావరణంలో ఉన్న నీటి ఆవిరి పరిమాణం",
      "the process in which water vapour changes into water\nనీటి ఆవిరి నీరుగా మారే ప్రక్రియ",
      "the tiny droplets of water hanging in the air above\nగాలిలో వేలాడుతున్న చిన్న నీటి బిందువులు"
    ],
    "correctAnswer": 1,
    "explanation": "తేమ అనేది గాలిలోని నీటి ఆవిరి గాఢత యొక్క కొలమానం. మొదటి ఎంపిక బాష్పీభవనాన్ని వివరిస్తుంది, మూడవది ఘనీభవనాన్ని వివరిస్తుంది, మరియు నాలుగవది మేఘం లేదా పొగమంచును వివరిస్తుంది."
  },
  {
    "id": 83,
    "question": "Cholas were subordinates to these kings:\n(TSTET 10 Jan 2025)\nచోళులు ఈ రాజులకు సామంతులుగా ఉండేవారు:",
    "options": [
      "Pallava Kings of Kanchipuram\nకాంచీపురం పల్లవ రాజులు",
      "Chalukyas of Badami\nబాదామి చాళుక్యులు",
      "Chauhans of Ajmer\nఅజ్మీర్ చౌహాన్‌లు",
      "Chalukyas of Gujarat\nగుజరాత్ చాళుక్యులు"
    ],
    "correctAnswer": 0,
    "explanation": "ప్రారంభ మధ్యయుగ కాలంలో, వారు తమ స్వంత సామ్రాజ్యాన్ని స్థాపించడానికి ముందు, చోళులు కావేరి డెల్టాలో ఒక చిన్న పాలక కుటుంబంగా ఉండేవారు. వారు తమ రాజధాని కాంచీపురం నుండి పాలించిన శక్తివంతమైన పల్లవ రాజులకు సామంతులుగా లేదా అధీనులుగా సేవ చేశారు."
  },
  {
    "id": 84,
    "question": "This foreign traveller visited the Vijayanagara kingdom during Sri Krishna Devaraya's reign:\n(TSTET 10 Jan 2025)\nశ్రీ కృష్ణ దేవరాయల పాలనలో ఈ విదేశీ యాత్రికుడు విజయనగర సామ్రాజ్యాన్ని సందర్శించాడు:",
    "options": [
      "Marco Polo\nమార్కో పోలో",
      "Abdul Razak\nఅబ్దుల్ రజాక్",
      "Nuniz\nనూనిజ్",
      "Domingo Paes\nడొమింగో పేస్"
    ],
    "correctAnswer": 3,
    "explanation": "డొమింగో పేస్, ఒక పోర్చుగీస్ వ్యాపారి మరియు యాత్రికుడు, సుమారు 1520 సంవత్సరంలో, దాని అత్యంత ప్రసిద్ధ చక్రవర్తి శ్రీకృష్ణదేవరాయల పాలనలో విజయనగర సామ్రాజ్యాన్ని సందర్శించాడు. అతని వివరణాత్మక రచనలు సామ్రాజ్యం ఉచ్ఛస్థితిలో ఉన్నప్పటి ఒక స్పష్టమైన ప్రత్యక్ష సాక్షి కథనాన్ని అందిస్తాయి."
  },
  {
    "id": 85,
    "question": "One of the following is NOT a quality of scientists:\n(TSTET 10 Jan 2025)\nకింది వాటిలో శాస్త్రవేత్తల లక్షణం కానిది ఏది:",
    "options": [
      "subjectivism\nఆత్మాశ్రయత్వం (subjectivism)",
      "scepticism\nసంశయవాదం (scepticism)",
      "perseverance\nపట్టుదల (perseverance)",
      "open mindedness\nవిశాల దృక్పథం (open mindedness)"
    ],
    "correctAnswer": 0,
    "explanation": "శాస్త్రం నిష్పాక్షికతను నొక్కి చెబుతుంది, ఇక్కడ తీర్మానాలు వ్యక్తిగత పక్షపాతం లేదా భావాలకు అతీతంగా, సాక్ష్యాలు మరియు వాస్తవాలపై ఆధారపడి ఉంటాయి. వ్యక్తిగత అభిప్రాయాలు మరియు భావాలపై ఆధారపడే ఆత్మాశ్రయత్వం, ఈ శాస్త్రీయ ఆదర్శానికి విరుద్ధం. సంశయవాదం (వాదనలను ప్రశ్నించడం), పట్టుదల మరియు విశాల దృక్పథం అన్నీ ఒక శాస్త్రవేత్తకు కీలకమైన లక్షణాలు."
  },
  {
    "id": 86,
    "question": "Read the following statements about 'Rubrics'.\nA) Rubrics helps the learners in assessing their own as well as their peers' learning.\nB) Rubrics helps the learners enhance their self-confidence, commitment and understanding towards problem solving.\n(TSTET 10 Jan 2025)\n'రూబ్రిక్స్' గురించి కింది వాక్యాలను చదవండి.\nA) రూబ్రిక్స్ అభ్యాసకులు తమ స్వంత మరియు వారి సహచరుల అభ్యాసాన్ని అంచనా వేయడంలో సహాయపడతాయి.\nB) రూబ్రిక్స్ అభ్యాసకులు వారి ఆత్మవిశ్వాసం, నిబద్ధత మరియు సమస్య పరిష్కారం పట్ల అవగాహనను పెంచుకోవడంలో సహాయపడతాయి.",
    "options": [
      "Only A is correct\nA మాత్రమే సరైనది",
      "Only B is correct\nB మాత్రమే సరైనది",
      "A & B are correct\nA & B సరైనవి",
      "A & B are incorrect\nA & B తప్పు"
    ],
    "correctAnswer": 2,
    "explanation": "రెండు వాక్యాలు సరైనవే. రూబ్రిక్ అనేది ఒక అసైన్‌మెంట్ కోసం మూల్యాంకన ప్రమాణాలను స్పష్టంగా వివరించే ఒక సాధనం. (A) ఈ స్పష్టత విద్యార్థులు తమ సొంత పనిని (స్వీయ-మూల్యాంకనం) మరియు వారి సహవిద్యార్థుల పనిని (సహచర-మూల్యాంకనం) సమర్థవంతంగా అంచనా వేయడానికి అనుమతిస్తుంది. (B) విజయం కోసం ఖచ్చితమైన అంచనాలను అర్థం చేసుకోవడం ద్వారా, విద్యార్థులు ఆత్మవిశ్వాసాన్ని పొందవచ్చు మరియు సమస్యలను ఎలా ఎదుర్కోవాలో మరియు పరిష్కరించాలో స్పష్టమైన అవగాహనను పెంపొందించుకోవచ్చు."
  },
  {
    "id": 87,
    "question": "If a student of class 5 observes his heart beat and wants to know how a heart functions. He asks all his doubts to his teacher. This indicates that the student has:\n(TSTET 10 Jan 2025)\n5వ తరగతి విద్యార్థి తన హృదయ స్పందనను గమనించి, గుండె ఎలా పనిచేస్తుందో తెలుసుకోవాలనుకుంటే, అతను తన అన్ని సందేహాలను తన ఉపాధ్యాయుడిని అడుగుతాడు. ఇది విద్యార్థికి ఉన్నట్లు సూచిస్తుంది:",
    "options": [
      "Logical thinking\nతార్కిక ఆలోచన",
      "Questioning nature\nప్రశ్నించే స్వభావం",
      "Creativity\nసృజనాత్మకత",
      "Open mindedness\nవిశాల దృక్పథం"
    ],
    "correctAnswer": 1,
    "explanation": "విద్యార్థి పరిశీలన చేసి, ఆ తర్వాత అనేక ప్రశ్నలు అడగడం ద్వారా చురుకుగా మరింత సమాచారం కోరడం అనేది అతనిలోని ఉత్సుకతను మరియు 'ప్రశ్నించే స్వభావాన్ని' ప్రదర్శిస్తుంది. ఇది అన్వేషణ-ఆధారిత అభ్యాసం మరియు శాస్త్రీయ దృక్పథం యొక్క ప్రాథమిక అంశం."
  },
  {
    "id": 88,
    "question": "The following item is NOT assessed in the formative assessment of social studies at class-7.\nA) Written works\nB) Project works\nC) Slip tests\nD) Reflection on social & contemporary issues\n(TSTET 10 Jan 2025)\n7వ తరగతి సాంఘిక శాస్త్రం యొక్క నిర్మాణాత్మక మూల్యాంకనంలో కింది అంశం అంచనా వేయబడదు.\nA) రాత పనులు\nB) ప్రాజెక్ట్ పనులు\nC) స్లిప్ టెస్టులు\nD) సామాజిక & సమకాలీన సమస్యలపై ప్రతిబింబం",
    "options": [
      "A, B & C only\nA, B & C మాత్రమే",
      "B, C & D only\nB, C & D మాత్రమే",
      "A, C & D only\nA, C & D మాత్రమే",
      "A, B, C & D\nA, B, C & D"
    ],
    "correctAnswer": 0,
    "explanation": "ఈ ప్రశ్న మూల పత్రంలో తప్పుగా ఉన్నట్లు గుర్తించబడింది, మరియు అభ్యర్థులందరికీ పూర్తి మార్కులు ఇవ్వబడ్డాయి. నిర్మాణాత్మక మూల్యాంకనం అనేది నిరంతర అభిప్రాయాన్ని అందించడానికి విద్యార్థుల అభ్యాసాన్ని పర్యవేక్షించడం. జాబితా చేయబడిన అన్ని ఎంపికలు (రాత పని, ప్రాజెక్టులు, స్లిప్ టెస్టులు మరియు ప్రతిబింబాలు) నిర్మాణాత్మక మూల్యాంకనం కోసం ఉపయోగించగల చెల్లుబాటు అయ్యే సాధనాలు. ఏ ఎంపికనూ నిశ్చయంగా మినహాయించలేనందున, ఈ ప్రశ్న వివాదాస్పదంగా పరిగణించబడింది."
  },
  {
    "id": 89,
    "question": "A class-6 student is able to give reasons, similarities, differences and citing illustrations about a particular topic. It indicates the achievement of the following academic standard among him:\n(TSTET 10 Jan 2025)\n6వ తరగతి విద్యార్థి ఒక నిర్దిష్ట అంశం గురించి కారణాలు, సారూప్యతలు, తేడాలు చెప్పగలిగి, ఉదాహరణలను ఉదహరించగలిగితే, అది అతనిలో కింది విద్యా ప్రమాణం సాధించినట్లు సూచిస్తుంది:",
    "options": [
      "Mapping Skills\nపట నైపుణ్యాలు",
      "Information Skills\nసమాచార నైపుణ్యాలు",
      "Conceptual Understanding\nభావనాత్మక అవగాహన",
      "Reading the given text and interpreting it\nఇచ్చిన పాఠ్యాన్ని చదివి, వ్యాఖ్యానించడం"
    ],
    "correctAnswer": 2,
    "explanation": "వివరించడం, పోల్చడం, తేడాలను చెప్పడం మరియు ఉదాహరణలు ఇవ్వగల సామర్థ్యం కేవలం వాస్తవాలను గుర్తుంచుకోవడాన్ని మించినది. ఇది విద్యార్థి అంశం యొక్క ప్రధాన భావనలను మరియు అంతర్లీన సంబంధాలను గ్రహించాడని ప్రదర్శిస్తుంది, ఇదే 'భావనాత్మక అవగాహన' యొక్క నిర్వచనం."
  },
  {
    "id": 90,
    "question": "By providing opportunities for students to visit natural forests, waterfalls, seas & mountains etc., the social studies teacher can develop mainly these values among them:\n(TSTET 10 Jan 2025)\nవిద్యార్థులకు సహజ అడవులు, జలపాతాలు, సముద్రాలు & పర్వతాలు మొదలైన వాటిని సందర్శించడానికి అవకాశాలు కల్పించడం ద్వారా, సాంఘిక శాస్త్ర ఉపాధ్యాయుడు వారిలో ప్రధానంగా ఈ విలువలను అభివృద్ధి చేయగలడు:",
    "options": [
      "Democratic values\nప్రజాస్వామ్య విలువలు",
      "Aesthetic, Recreational values\nసౌందర్యాత్మక, వినోదాత్మక విలువలు",
      "Moral values\nనైతిక విలువలు",
      "Cultural values\nసాంస్కృతిక విలువలు"
    ],
    "correctAnswer": 1,
    "explanation": "అడవులు మరియు పర్వతాలు వంటి సహజ వాతావరణాలను అనుభవించడం ప్రధానంగా సహజ సౌందర్యం పట్ల ప్రశంసను (సౌందర్యాత్మక విలువ) పెంచుతుంది. ఇది విద్యార్థులు ఆనందం మరియు విశ్రాంతి కోసం ఈ ప్రదేశాలను అర్థం చేసుకోవడానికి మరియు విలువ ఇవ్వడానికి కూడా సహాయపడుతుంది (వినోదాత్మక విలువ). ఇతర విలువలు చర్చించబడవచ్చు, కానీ ఈ రెండూ అటువంటి సందర్శనల యొక్క అత్యంత ప్రత్యక్ష ఫలితాలు."
  },
  {
    "id": "91",
    "question": "Carotenoids help us mainly in\n(TSTET 18 Jan 2025)\nకెరోటినాయిడ్లు మనకు ప్రధానంగా ఇందులో సహాయపడతాయి",
    "options": [
      "Enhancing vision and improving skin health\nదృష్టిని మెరుగుపరచడం మరియు చర్మ ఆరోగ్యాన్ని మెరుగుపరచడం",
      "Strengthening bones and increasing muscle mass\nఎముకలను బలోపేతం చేయడం మరియు కండర ద్రవ్యరాశిని పెంచడం",
      "Boosting the immune system and improving digestion\nరోగనిరోధక శక్తిని పెంచడం మరియు జీర్ణక్రియను మెరుగుపరచడం",
      "Promoting hair growth and reducing stress\nజుట్టు పెరుగుదలను ప్రోత్సహించడం మరియు ఒత్తిడిని తగ్గించడం"
    ],
    "correctAnswer": 0,
    "explanation": "క్యారెట్ మరియు చిలగడదుంపలలో లభించే బీటా కెరోటిన్ వంటి కెరోటినాయిడ్లు శరీరంలో విటమిన్ ఎ (రెటినాల్)గా మార్చబడతాయి. విటమిన్ ఎ మంచి దృష్టిని, ముఖ్యంగా తక్కువ కాంతిలో, మరియు చర్మ కణజాలాల ఆరోగ్యం మరియు మరమ్మత్తు కోసం చాలా అవసరం. కెరోటినాయిడ్లు యాంటీఆక్సిడెంట్లుగా కూడా పనిచేస్తాయి, చర్మ కణాలను నష్టం నుండి కాపాడతాయి."
  },
  {
    "id": "92",
    "question": "\"X\" is a food component that makes paper translucent. Identify \"X\".\n(TSTET 18 Jan 2025)\n\"X\" అనేది కాగితాన్ని పారభాసకంగా (translucent) మార్చే ఆహార భాగం. \"X\"ని గుర్తించండి.",
    "options": [
      "Carbohydrates\nకార్బోహైడ్రేట్లు",
      "Proteins\nప్రోటీన్లు",
      "Fats\nకొవ్వులు",
      "Vitamins\nవిటమిన్లు"
    ],
    "correctAnswer": 2,
    "explanation": "ఆహార నమూనాలో కొవ్వుల ఉనికిని గుర్తించడానికి ఒక సాధారణ పరీక్ష కాగితం పరీక్ష. కొవ్వు ఉన్న ఆహార పదార్థాన్ని కాగితంపై రుద్దినప్పుడు, అది జిడ్డుగా ఉండే మరకను వదిలివేస్తుంది, ఇది కాగితాన్ని పారభాసకంగా (కాంతిని ప్రసరింపజేస్తుంది కానీ వివరణాత్మక ఆకారాలు కనిపించవు) చేస్తుంది. లిపిడ్లు (కొవ్వులు) కాగితం యొక్క రంధ్రాలలోకి ఇంకడం వల్ల ఇది జరుగుతుంది."
  },
  {
    "id": "93",
    "question": "Jersey cows are imported from this country to India\n(TSTET 18 Jan 2025)\nజెర్సీ ఆవులను ఈ దేశం నుండి భారతదేశానికి దిగుమతి చేసుకుంటారు",
    "options": [
      "Australia\nఆస్ట్రేలియా",
      "France\nఫ్రాన్స్",
      "Pakistan\nపాకిస్తాన్",
      "England\nఇంగ్లాండ్"
    ],
    "correctAnswer": 3,
    "explanation": "జెర్సీ జాతి పాడి పశువులు జెర్సీ ద్వీపం నుండి ఉద్భవించాయి, ఇది ఒక బ్రిటిష్ క్రౌన్ డిపెండెన్సీ. ఈ కారణంగా, వాటి మూలం యునైటెడ్ కింగ్‌డమ్ (ఇంగ్లాండ్)తో ముడిపడి ఉంది. అధిక పాల దిగుబడి మరియు అధిక వెన్న శాతం కారణంగా భారతదేశంలోకి దిగుమతి చేసుకునే ఒక ప్రసిద్ధ జాతి ఇది."
  },
  {
    "id": "94",
    "question": "Among the following, identify the correct statement regarding air pressure.\n(TSTET 18 Jan 2025)\nకింది వాటిలో, వాయు పీడనానికి సంబంధించి సరైన వాక్యాన్ని గుర్తించండి.",
    "options": [
      "The greater the difference in pressure, the faster the air moves.\nపీడనంలో వ్యత్యాసం ఎంత ఎక్కువగా ఉంటే, గాలి అంత వేగంగా కదులుతుంది.",
      "The greater the difference in pressure, the slower the air moves.\nపీడనంలో వ్యత్యాసం ఎంత ఎక్కువగా ఉంటే, గాలి అంత నెమ్మదిగా కదులుతుంది.",
      "Air movement is unaffected by pressure differences.\nగాలి కదలిక పీడన వ్యత్యాసాలచే ప్రభావితం కాదు.",
      "Air moves only when there is no pressure difference.\nపీడన వ్యత్యాసం లేనప్పుడు మాత్రమే గాలి కదులుతుంది."
    ],
    "correctAnswer": 0,
    "explanation": "గాలి పీడనంలోని వ్యత్యాసాల వల్ల గాలి ఏర్పడుతుంది. గాలి సహజంగా అధిక పీడన ప్రాంతాల నుండి అల్ప పీడన ప్రాంతాలకు ప్రవహిస్తుంది. ఈ పీడన వ్యత్యాసం యొక్క పరిమాణం, దీనిని పీడన ప్రవణత అని పిలుస్తారు, గాలి వేగాన్ని నిర్ణయిస్తుంది. నిటారుగా ఉన్న పీడన ప్రవణత (తక్కువ దూరంలో పీడనంలో పెద్ద వ్యత్యాసం) బలమైన, వేగంగా కదిలే గాలులకు దారితీస్తుంది."
  },
  {
    "id": "95",
    "question": "These are considered as consumers in a food chain\n(TSTET 18 Jan 2025)\nఆహార గొలుసులో వీటిని వినియోగదారులుగా పరిగణిస్తారు",
    "options": [
      "Only Herbivores\nశాకాహారులు మాత్రమే",
      "Only carnivores\nమాంసాహారులు మాత్రమే",
      "Only algae\nశైవలాలు మాత్రమే",
      "Both Herbivores and Carnivores\nశాకాహారులు మరియు మాంసాహారులు రెండూ"
    ],
    "correctAnswer": 3,
    "explanation": "ఒక పర్యావరణ వ్యవస్థలో, నిర్మాతలు (మొక్కలు మరియు శైవలాలు వంటివి) తమ స్వంత ఆహారాన్ని సృష్టించుకుంటాయి. వినియోగదారులు ఇతర జీవులను తినడం ద్వారా శక్తిని పొందే జీవులు. ఈ వర్గంలో శాకాహారులు (నిర్మాతలను తినే ప్రాథమిక వినియోగదారులు), మాంసాహారులు (ఇతర జంతువులను తినే ద్వితీయ/తృతీయ వినియోగదారులు), మరియు సర్వభక్షకులు ఉంటాయి. అందువల్ల, శాకాహారులు మరియు మాంసాహారులు రెండూ వినియోగదారుల రకాలే."
  },
  {
    "id": "96",
    "question": "The scientist who named rice as 'Oryza'\n(TSTET 18 Jan 2025)\nబియ్యానికి 'ఒరైజా' అని పేరు పెట్టిన శాస్త్రవేత్త",
    "options": [
      "Albert Einstein\nఆల్బర్ట్ ఐన్‌స్టీన్",
      "Carolus Linnaeus\nకరోలస్ లిన్నేయస్",
      "Gregor Mendel\nగ్రెగర్ మెండెల్",
      "Charles Darwin\nచార్లెస్ డార్విన్"
    ],
    "correctAnswer": 1,
    "explanation": "ఆధునిక వర్గీకరణ పితామహుడిగా పిలువబడే కరోలస్ లిన్నేయస్, జాతులకు పేరు పెట్టడానికి ద్వినామీకరణ నామకరణ వ్యవస్థను అభివృద్ధి చేశారు. అతను సాగు చేసిన బియ్యానికి *ఒరైజా సటైవా* అనే శాస్త్రీయ నామాన్ని ఇచ్చాడు, ఇక్కడ 'ఒరైజా' అనేది ప్రజాతి పేరు."
  },
  {
    "id": "97",
    "question": "According to the Motor Vehicles Act, pollution emitted by vehicles must be tested. What does PUC stand for?\n(TSTET 18 Jan 2025)\nమోటారు వాహనాల చట్టం ప్రకారం, వాహనాల ద్వారా వెలువడే కాలుష్యాన్ని తప్పనిసరిగా పరీక్షించాలి. PUC అంటే ఏమిటి?",
    "options": [
      "Pollution Unit Certificate\nపొల్యూషన్ యూనిట్ సర్టిఫికేట్",
      "Pollution Under Control\nపొల్యూషన్ అండర్ కంట్రోల్",
      "Public Utility Certificate\nపబ్లిక్ యుటిలిటీ సర్టిఫికేట్",
      "Pollution Utilization Check\nపొల్యూషన్ యుటిలైజేషన్ చెక్"
    ],
    "correctAnswer": 1,
    "explanation": "PUC అంటే 'పొల్యూషన్ అండర్ కంట్రోల్'. ఇది భారతదేశంలోని అన్ని వాహనాలకు తప్పనిసరి ధృవీకరణ పత్రం, ఇది కార్బన్ మోనాక్సైడ్ మరియు హైడ్రోకార్బన్‌ల వంటి కాలుష్య కారకాల ఉద్గారాలు చట్టబద్ధంగా నిర్దేశించిన పరిమితుల్లో ఉన్నాయని ధృవీకరిస్తుంది."
  },
  {
    "id": "98",
    "question": "The teeth that first appear in children are called:\n(TSTET 18 Jan 2025)\nపిల్లలలో మొదట కనిపించే దంతాలను ఇలా పిలుస్తారు:",
    "options": [
      "Permanent teeth\nశాశ్వత దంతాలు",
      "Wisdom teeth\nజ్ఞాన దంతాలు",
      "Milk teeth\nపాల దంతాలు",
      "Incisor teeth\nకొరుకు దంతాలు"
    ],
    "correctAnswer": 2,
    "explanation": "మానవులలో మొదటి దంతాల సమితిని పాల దంతాలు అని పిలుస్తారు, వీటిని ప్రాథమిక లేదా ఊడిపోయే దంతాలు అని కూడా అంటారు. అవి సాధారణంగా ఆరు నెలల వయస్సులో కనిపించడం ప్రారంభించి, తరువాత శాశ్వత దంతాల సమితితో భర్తీ చేయబడతాయి. కొరుకు దంతాలు ఒక రకమైన దంతాలు, కానీ 'పాల దంతాలు' అనేది మొత్తం ప్రారంభ సమితిని సూచిస్తుంది."
  },
  {
    "id": "99",
    "question": "Among the following, identify the correct location of the heart.\n(TSTET 18 Jan 2025)\nకింది వాటిలో, గుండె యొక్క సరైన స్థానాన్ని గుర్తించండి.",
    "options": [
      "Two-thirds of the heart is on the left side of the chest, and one-third is on the right side of the chest.\nగుండెలో మూడింట రెండు వంతులు ఛాతీకి ఎడమ వైపున, మూడింట ఒక వంతు ఛాతీకి కుడి వైపున ఉంటుంది.",
      "Half of the heart is on the left side of the chest, and Half is on the right side of the chest.\nగుండెలో సగం ఛాతీకి ఎడమ వైపున, సగం ఛాతీకి కుడి వైపున ఉంటుంది.",
      "Three-fourths of the heart is on the left side of the chest, and one-fourth is on the right side of the chest.\nగుండెలో నాలుగింట మూడు వంతులు ఛాతీకి ఎడమ వైపున, నాలుగింట ఒక వంతు ఛాతీకి కుడి వైపున ఉంటుంది.",
      "One-third of the heart is on the left side of the chest, and two-thirds is on the right side of the chest.\nగుండెలో మూడింట ఒక వంతు ఛాతీకి ఎడమ వైపున, మూడింట రెండు వంతులు ఛాతీకి కుడి వైపున ఉంటుంది."
    ],
    "correctAnswer": 0,
    "explanation": "మానవ గుండె థొరాసిక్ కుహరంలో, మీడియాస్టినమ్ అనే కేంద్ర భాగంలో ఉంటుంది. ఇది మధ్యలో ఉన్నప్పటికీ, దాని శిఖరం ఎడమ వైపుకు చూపే విధంగా వంగి ఉంటుంది. ఫలితంగా, గుండె ద్రవ్యరాశిలో సుమారు మూడింట రెండు వంతులు శరీరం యొక్క మధ్యరేఖకు ఎడమ వైపున ఉంటుంది."
  },
  {
    "id": "100",
    "question": "On cold winter mornings. when we speak. we observe smoke-like vapour coming out of our mouth due to\n(TSTET 18 Jan 2025)\nచల్లని శీతాకాలపు ఉదయాలలో, మనం మాట్లాడినప్పుడు, మన నోటి నుండి పొగలాంటి ఆవిరి బయటకు రావడం గమనిస్తాము, దీనికి కారణం",
    "options": [
      "Evaporation\nబాష్పీభవనం",
      "Condensation\nఘనీభవనం",
      "Sublimation\nఉత్పతనం",
      "Freezing\nగడ్డకట్టడం"
    ],
    "correctAnswer": 1,
    "explanation": "మనం ఊపిరి పీల్చుకునే గాలి మన ఊపిరితిత్తుల నుండి వెచ్చగా మరియు నీటి ఆవిరితో నిండి ఉంటుంది. ఈ వెచ్చని, తేమతో కూడిన గాలి శీతాకాలపు ఉదయం యొక్క చల్లని పరిసర గాలితో కలిసినప్పుడు, అది వేగంగా చల్లబడుతుంది. ఈ శీతలీకరణ నీటి ఆవిరిని చిన్న ద్రవ నీటి బిందువులు లేదా మంచు స్ఫటికాల యొక్క కనిపించే మేఘంగా ఘనీభవింపజేస్తుంది, ఈ ప్రక్రియను ఘనీభవనం అంటారు."
  },
  {
    "id": "101",
    "question": "Plants release excess water in their body through stomata and some other parts as well. This process is called:\n(TSTET 18 Jan 2025)\nమొక్కలు తమ శరీరంలోని అదనపు నీటిని పత్రరంధ్రాలు మరియు కొన్ని ఇతర భాగాల ద్వారా కూడా విడుదల చేస్తాయి. ఈ ప్రక్రియను ఇలా పిలుస్తారు:",
    "options": [
      "Respiration\nశ్వాసక్రియ",
      "Photosynthesis\nకిరణజన్య సంయోగక్రియ",
      "Evaporation\nబాష్పీభవనం",
      "Transpiration\nభాష్పోత్సేకం"
    ],
    "correctAnswer": 3,
    "explanation": "భాష్పోత్సేకం అనేది మొక్కల వాయు భాగాల నుండి, ప్రాథమికంగా ఆకు ఉపరితలంపై ఉన్న పత్రరంధ్రాలు అని పిలువబడే చిన్న రంధ్రాల ద్వారా నీరు ఆవిరి రూపంలో కోల్పోయే జీవ ప్రక్రియ. ఇది మొక్క యొక్క నీటి చక్రంలో ఒక ముఖ్యమైన భాగం."
  },
  {
    "id": "102",
    "question": "One of the reasons for drought from the following is:\n(TSTET 18 Jan 2025)\nకింది వాటిలో కరువుకు ఒక కారణం:",
    "options": [
      "Excessive rainfall\nఅధిక వర్షపాతం",
      "High humidity\nఅధిక తేమ",
      "Inability to harvest rainwater\nవర్షపు నీటిని నిల్వ చేయలేకపోవడం",
      "Frequent floods\nతరచుగా వచ్చే వరదలు"
    ],
    "correctAnswer": 2,
    "explanation": "కరువు ప్రాథమికంగా దీర్ఘకాలిక అవపాతం లేకపోవడం వల్ల సంభవిస్తుంది. అయినప్పటికీ, పేలవమైన నీటి నిర్వహణ వల్ల దాని ప్రభావాలు మరింత తీవ్రమవుతాయి. వర్షం పడినప్పుడు వర్షపు నీటిని సేకరించి నిల్వ చేయలేకపోవడం అంటే పొడి కాలంలో ఉపయోగించుకోవడానికి నిల్వలు ఉండవు, తద్వారా నీటి కొరతను తీవ్రతరం చేసి కరువు పరిస్థితులకు దోహదం చేస్తుంది."
  },
  {
    "id": "103",
    "question": "In Europe, these countries were famous for the cultivation of Grapes for making Wine\n(TSTET 18 Jan 2025)\nఐరోపాలో, ఈ దేశాలు వైన్ తయారీకి ద్రాక్ష సాగుకు ప్రసిద్ధి చెందాయి",
    "options": [
      "The Mediterranean Countries\nమధ్యధరా దేశాలు",
      "The Eastern European Plains\nతూర్పు యూరోపియన్ మైదానాలు",
      "The Regions surrounding Scandinavian Mountains\nస్కాండినేవియన్ పర్వతాల చుట్టూ ఉన్న ప్రాంతాలు",
      "The Polar Regions of Europe\nఐరోపా యొక్క ధ్రువ ప్రాంతాలు"
    ],
    "correctAnswer": 0,
    "explanation": "మధ్యధరా ప్రాంతం, దాని విలక్షణమైన వేడి, పొడి వేసవికాలం మరియు తేలికపాటి, తడి శీతాకాలాల వాతావరణంతో, వైన్ తయారీకి (ద్రాక్ష పెంపకం) సంపూర్ణంగా సరిపోతుంది. ఫ్రాన్స్, ఇటలీ మరియు స్పెయిన్ వంటి దేశాలు ఈ ప్రాంతంలో ఉన్నాయి మరియు వైన్ ఉత్పత్తి యొక్క వారి సుదీర్ఘ చరిత్రకు ప్రపంచవ్యాప్తంగా ప్రసిద్ధి చెందాయి."
  },
  {
    "id": "104",
    "question": "Among the following, identify the INCORRECT statement regarding Rivers\n(TSTET 18 Jan 2025)\nకింది వాటిలో, నదులకు సంబంధించి తప్పు వాక్యాన్ని గుర్తించండి",
    "options": [
      "As the river flows further from the source, it gets bigger and broader\nనది మూలం నుండి ముందుకు ప్రవహించే కొద్దీ, అది పెద్దదిగా మరియు వెడల్పుగా మారుతుంది",
      "A river usually starts in the form of a thin stream at the source\nనది సాధారణంగా మూలం వద్ద ఒక సన్నని ప్రవాహం రూపంలో ప్రారంభమవుతుంది",
      "As the river becomes bigger and broader, its flow gets slower\nనది పెద్దదిగా మరియు వెడల్పుగా మారే కొద్దీ, దాని ప్రవాహం నెమ్మదిస్తుంది",
      "The rivers do not deposit the silt and the sand it has carried on its bed and bank when its flow gets slower\nనదులు ప్రవాహం నెమ్మదించినప్పుడు తాము మోసుకొచ్చిన ఒండ్రు మరియు ఇసుకను తమ గర్భంలో మరియు ఒడ్డున నిక్షేపించవు"
    ],
    "correctAnswer": 3,
    "explanation": "ఈ వాక్యం తప్పు. నది వేగం తగ్గినప్పుడు, అవక్షేపాలను రవాణా చేసే దాని సామర్థ్యం కూడా తగ్గుతుంది. పర్యవసానంగా, అది తన ఒండ్రు, ఇసుక మరియు కంకరల భారాన్ని నిక్షేపించడం ప్రారంభిస్తుంది. ఈ నిక్షేపణ ప్రక్రియ డెల్టాలు, వరద మైదానాలు మరియు ఇసుక దిబ్బల వంటి లక్షణాలను ఏర్పరచడానికి కారణమవుతుంది."
  },
  {
    "id": "105",
    "question": "Among the following, identify the cold current (TSTET 18 Jan 2025)\nకింది వాటిలో శీతల ప్రవాహాన్ని గుర్తించండి.",
    "options": [
      "California current\nకాలిఫోర్నియా ప్రవాహం",
      "North Equatorial Current\nఉత్తర భూమధ్యరేఖా ప్రవాహం",
      "Kurushivo Current\nకురుషివో ప్రవాహం",
      "East Australian Current\nతూర్పు ఆస్ట్రేలియన్ ప్రవాహం"
    ],
    "correctAnswer": 0,
    "explanation": "కాలిఫోర్నియా ప్రవాహం ఉత్తర అమెరికా పశ్చిమ తీరం వెంబడి దక్షిణం వైపు ప్రవహించే శీతల నీటి సముద్ర ప్రవాహం. శీతల ప్రవాహాలు ధ్రువ ప్రాంతాల నుండి ఉద్భవించి, తక్కువ అక్షాంశాలకు చల్లని నీటిని తీసుకువస్తాయి. ఉత్తర భూమధ్యరేఖా, కురోషియో మరియు తూర్పు ఆస్ట్రేలియన్ ప్రవాహాలు అన్నీ ఉష్ణ ప్రవాహాలు."
  },
  {
    "id": "106",
    "question": "These forests are NOT found in Telangana State (TSTET 18 Jan 2025)\nఈ అడవులు తెలంగాణ రాష్ట్రంలో కనిపించవు.",
    "options": [
      "Deciduous forests\nఆకురాల్చే అడవులు",
      "Thorny Forests\nముళ్ళ అడవులు",
      "Evergreen Forests only\nసతత హరిత అడవులు మాత్రమే",
      "Evergreen and Thorny Forests\nసతత హరిత మరియు ముళ్ళ అడవులు"
    ],
    "correctAnswer": 2,
    "explanation": "తెలంగాణలో ఉష్ణమండల సవన్నా వాతావరణం ఉంటుంది, ఇది స్పష్టమైన తడి మరియు పొడి కాలాలను కలిగి ఉంటుంది. ఈ వాతావరణం ఉష్ణమండల పొడి ఆకురాల్చే అడవులు మరియు ముళ్ళ పొదల అడవులకు అనుకూలంగా ఉంటుంది. సతత హరిత అడవులకు ఏడాది పొడవునా అధిక వర్షపాతం అవసరం, ఈ పరిస్థితి తెలంగాణలో లేదు. అందువల్ల, సతత హరిత అడవులు రాష్ట్రంలో కనిపించే సహజ వృక్షసంపద కాదు."
  },
  {
    "id": "107",
    "question": "'Sri Ahita Gaja Kesari' was the gold coin issued by the (TSTET 18 Jan 2025)\n'శ్రీ అహిత గజ కేసరి' అనే బంగారు నాణేన్ని జారీ చేసినవారు",
    "options": [
      "Vijayanagara rulers\nవిజయనగర రాజులు",
      "Kakatiyas\nకాకతీయులు",
      "Cholas\nచోళులు",
      "Guptas\nగుప్తులు"
    ],
    "correctAnswer": 1,
    "explanation": "'అహితగజకేసరి' అంటే 'ఏనుగు వంటి శత్రువులకు సింహం వంటివాడు' అని అర్థం, ఇది కాకతీయ పాలకులు స్వీకరించిన బిరుదు. దక్కన్ ప్రాంతంలో వారి పాలనలో వారు జారీ చేసిన బంగారు నాణేలపై ఈ బిరుదును ముద్రించారు."
  },
  {
    "id": "108",
    "question": "The main objective of the Zamindari system introduced in India under the permanent Settlement Act, 1793 was (TSTET 18 Jan 2025)\nశాశ్వత శిస్తుల చట్టం, 1793 ప్రకారం భారతదేశంలో ప్రవేశపెట్టిన జమీందారీ వ్యవస్థ యొక్క ముఖ్య ఉద్దేశ్యం",
    "options": [
      "To encourage the farmers to produce more\nరైతులను ఎక్కువ ఉత్పత్తి చేసేలా ప్రోత్సహించడం",
      "To confiscate the land of the farmers and to encourage common farming\nరైతుల భూమిని స్వాధీనం చేసుకుని, ఉమ్మడి వ్యవసాయాన్ని ప్రోత్సహించడం",
      "To encourage Agro-based industries\nవ్యవసాయ ఆధారిత పరిశ్రమలను ప్రోత్సహించడం",
      "To streamline the collection of land revenue through intermediaries\nమధ్యవర్తుల ద్వారా భూమి శిస్తు సేకరణను క్రమబద్ధీకరించడం"
    ],
    "correctAnswer": 3,
    "explanation": "1793 నాటి శాశ్వత శిస్తుల చట్టం ప్రధానంగా బ్రిటిష్ ఈస్ట్ ఇండియా కంపెనీకి స్థిరమైన ఆదాయ వనరును భద్రపరచడానికి తీసుకున్న పరిపాలనా చర్య. ఇది జమీందార్లను మధ్యవర్తులుగా నియమించి, రైతుల నుండి భూమి శిస్తును వసూలు చేసి ప్రభుత్వానికి ఒక నిర్దిష్ట మొత్తాన్ని చెల్లించే బాధ్యతను అప్పగించింది, తద్వారా మొత్తం సేకరణ ప్రక్రియను క్రమబద్ధీకరించింది."
  },
  {
    "id": "109",
    "question": "The first women graduate from Calcutta who participated in the meetings of the Indian National Congress (TSTET 18 Jan 2025)\nభారత జాతీయ కాంగ్రెస్ సమావేశాలలో పాల్గొన్న కలకత్తా నుండి మొదటి మహిళా పట్టభద్రురాలు",
    "options": [
      "Bankim Chandra Chattopadhyay\nబంకించంద్ర చటోపాధ్యాయ",
      "Kadambari Ganguli\nకాదంబిని గంగూలీ",
      "Banalata Sen\nబనలతా సేన్",
      "Dukaribala Devi\nదుకారిబాల దేవి"
    ],
    "correctAnswer": 1,
    "explanation": "కాదంబినీ గంగూలీ భారత చరిత్రలో ఒక మార్గదర్శక వ్యక్తి. 1883లో, ఆమె బ్రిటిష్ సామ్రాజ్యంలో మొదటి మహిళా పట్టభద్రులలో ఒకరిగా నిలిచారు. నిష్ణాతురాలైన వైద్యురాలు మరియు మహిళల హక్కుల కోసం ఒక ప్రముఖ గొంతుకగా, ఆమె 1889లో భారత జాతీయ కాంగ్రెస్ సమావేశంలో ప్రసంగించిన మొదటి మహిళగా కూడా నిలిచారు."
  },
  {
    "id": "110",
    "question": "Democracy is a government of the people, by the people and for the people' was defined by (TSTET 18 Jan 2025)\n'ప్రజాస్వామ్యం అనేది ప్రజల యొక్క, ప్రజల చేత, ప్రజల కొరకు నడిచే ప్రభుత్వం' అని నిర్వచించినది",
    "options": [
      "Abraham Linclon\nఅబ్రహం లింకన్",
      "Thomas Jefferson\nథామస్ జెఫర్సన్",
      "Woodrow Wilson\nవుడ్రో విల్సన్",
      "Truman\nట్రూమన్"
    ],
    "correctAnswer": 0,
    "explanation": "ప్రజాస్వామ్యం యొక్క ఈ ప్రసిద్ధ నిర్వచనం, అమెరికా అంతర్యుద్ధం సమయంలో, నవంబర్ 19, 1863న అమెరికా అధ్యక్షుడు అబ్రహం లింకన్ చేసిన గెట్టిస్‌బర్గ్ ప్రసంగంలోని ఒక ముఖ్యమైన వాక్యం."
  },
  {
    "id": "111",
    "question": "This person is responsible for implementing all the decisions of the panchayat and looking after the day to day working of the panchayat (TSTET 18 Jan 2025)\nపంచాయతీ యొక్క అన్ని నిర్ణయాలను అమలు చేయడానికి మరియు పంచాయతీ యొక్క రోజువారీ పనులను చూసుకోవడానికి బాధ్యత వహించే వ్యక్తి",
    "options": [
      "Village Secretary\nగ్రామ కార్యదర్శి",
      "Executive officer\nకార్యనిర్వహణాధికారి",
      "Upa sarpanch\nఉప సర్పంచ్",
      "Sarpanch\nసర్పంచ్"
    ],
    "correctAnswer": 3,
    "explanation": "సర్పంచ్ గ్రామ పంచాయతీకి ఎన్నికైన అధిపతి మరియు దాని ముఖ్య కార్యనిర్వహణాధికారిగా వ్యవహరిస్తారు. వారు సమావేశాలకు అధ్యక్షత వహించడం, పంచాయతీ తీసుకున్న తీర్మానాలు మరియు నిర్ణయాలను అమలు చేయడం మరియు గ్రామంలోని అన్ని పరిపాలనా మరియు అభివృద్ధి కార్యకలాపాలను పర్యవేక్షించడం వంటి బాధ్యతలను కలిగి ఉంటారు."
  },
  {
    "id": "112",
    "question": "Among the following, one of the highest mountain peaks of the Himalayan mountains in Sikkim is (TSTET 18 Jan 2025)\nకింది వాటిలో, సిక్కింలోని హిమాలయ పర్వతాలలోని ఎత్తైన పర్వత శిఖరాలలో ఒకటి",
    "options": [
      "Dhaulagiri\nధౌలగిరి",
      "Godwin Austin\nగాడ్విన్ ఆస్టిన్",
      "Kanchanajunga\nకాంచనగంగ",
      "Manaslu\nమనస్లు"
    ],
    "correctAnswer": 2,
    "explanation": "కాంచనగంగ ప్రపంచంలో మూడవ ఎత్తైన పర్వతం. దీని ప్రధాన శిఖరం నేపాల్ మరియు భారతదేశంలోని సిక్కిం రాష్ట్రం మధ్య సరిహద్దులో ఉంది. గాడ్విన్ ఆస్టెన్ (K2) కారకోరం శ్రేణిలో ఉంది, ధౌలగిరి మరియు మనస్లు పూర్తిగా నేపాల్‌లో ఉన్నాయి."
  },
  {
    "id": "113",
    "question": "The teachings of Buddha and his followers have been compiled in (TSTET 18 Jan 2025)\nబుద్ధుడు మరియు అతని అనుచరుల బోధనలు ఇందులో సంకలనం చేయబడ్డాయి",
    "options": [
      "Tripitikas\nత్రిపిటకాలు",
      "Angas\nఅంగాలు",
      "Vedas\nవేదాలు",
      "Triratnas\nత్రిరత్నాలు"
    ],
    "correctAnswer": 0,
    "explanation": "త్రిపిటక, అంటే పాళీ భాషలో 'మూడు గంపలు' అని అర్థం, ఇది బౌద్ధ గ్రంథాల యొక్క సాంప్రదాయిక నియమావళి. ఇది బుద్ధుని బోధనలు (సుత్త పిటక), సన్యాస నియమాలు (వినయ పిటక), మరియు తాత్విక విశ్లేషణల (అభిధమ్మ పిటక) యొక్క విస్తృతమైన సంకలనం."
  },
  {
    "id": "114",
    "question": "Among the following, the Vijayanagara rulers built this temple (TSTET 18 Jan 2025)\nకింది వాటిలో, విజయనగర రాజులు ఈ ఆలయాన్ని నిర్మించారు",
    "options": [
      "Gangaikonda Cholapuram\nగంగైకొండ చోళపురం",
      "The Rajarajeshwara Temple\nరాజరాజేశ్వర ఆలయం",
      "Hazararama Swamy temple\nహజరరామ స్వామి ఆలయం",
      "The Kandariya Mahadeva Temple\nకందariya మహాదేవ ఆలయం"
    ],
    "correctAnswer": 2,
    "explanation": "హంపిలోని రాజ ప్రాంగణం నడిబొడ్డున ఉన్న హజరరామ ఆలయం, 15వ శతాబ్దంలో విజయనగర సామ్రాజ్యానికి చెందిన దేవరాయ I చే నిర్మించబడింది. గంగైకొండ చోళపురం మరియు రాజరాజేశ్వర ఆలయం చోళులచే నిర్మించబడ్డాయి, మరియు కందariya మహాదేవ ఆలయం చండేలా రాజవంశంచే నిర్మించబడింది."
  },
  {
    "id": "115",
    "question": "After the introduction of CCE. instead of awarding marks, grading system is being followed in our state to communicate the students performance in assessment to the students as well as to their parents. Which of the following grading method/s is/are followed to report the students performance? A) Direct grading B) Indirect grading (TSTET 18 Jan 2025)\nCCE ప్రవేశపెట్టిన తర్వాత, మార్కులు ఇవ్వడానికి బదులుగా, విద్యార్థుల పనితీరును విద్యార్థులకు మరియు వారి తల్లిదండ్రులకు తెలియజేయడానికి మన రాష్ట్రంలో గ్రేడింగ్ విధానం అనుసరించబడుతోంది. విద్యార్థుల పనితీరును నివేదించడానికి కింది వాటిలో ఏ గ్రేడింగ్ పద్ధతి(లు) అనుసరించబడుతున్నాయి? A) ప్రత్యక్ష గ్రేడింగ్ B) పరోక్ష గ్రేడింగ్",
    "options": [
      "A only\nA మాత్రమే",
      "Both A & B\nA & B రెండూ",
      "B only\nB మాత్రమే",
      "Neither A nor B\nA లేదా B కాదు"
    ],
    "correctAnswer": 0,
    "explanation": "నిరంతర సమగ్ర మూల్యాంకనం (CCE) సందర్భంలో, ప్రత్యక్ష గ్రేడింగ్ అనేది ప్రాధాన్యత కలిగిన పద్ధతి. ఇది విద్యార్థి పనిని అంచనా వేసి, పనితీరును మొదట సంఖ్యా మార్కులుగా మార్చకుండా, గుణాత్మక ప్రమాణాల ఆధారంగా నేరుగా గ్రేడ్‌ను (ఉదా., A, B, C) కేటాయించడాన్ని కలిగి ఉంటుంది. ఇది మార్కులకు ప్రాధాన్యత తగ్గించి, సంపూర్ణ, గుణాత్మక అభిప్రాయంపై దృష్టి పెట్టే CCE తత్వానికి అనుగుణంగా ఉంటుంది."
  },
  {
    "id": "116",
    "question": "The 3rd phase in the 5E learning model of Constructivist Approach is (TSTET 18 Jan 2025)\nనిర్మాణాత్మక విధానం యొక్క 5E అభ్యాస నమూనాలో 3వ దశ",
    "options": [
      "Explore\nఅన్వేషించడం",
      "Explain\nవివరించడం",
      "Evaluate\nమూల్యాంకనం",
      "Elaborate\nవిస్తరించడం"
    ],
    "correctAnswer": 1,
    "explanation": "5E నమూనా ఐదు విభిన్న దశలతో కూడిన ఒక పరిశోధన ఆధారిత బోధనా నమూనా: 1. నిమగ్నం చేయడం, 2. అన్వేషించడం, 3. వివరించడం, 4. విస్తరించడం, మరియు 5. మూల్యాంకనం. 'వివరించడం' దశ మూడవది, ఇక్కడ విద్యార్థులు వారు అన్వేషించిన భావనలపై తమ అవగాహనను వ్యక్తపరుస్తారు, మరియు ఉపాధ్యాయుడు అధికారిక నిర్వచనాలు మరియు స్పష్టతలను అందిస్తారు."
  },
  {
    "id": "117",
    "question": "The approach that supports the project method is (TSTET 18 Jan 2025)\nప్రాజెక్ట్ పద్ధతికి మద్దతు ఇచ్చే విధానం",
    "options": [
      "Teacher centred approach\nఉపాధ్యాయ కేంద్రిత విధానం",
      "Experimental approach\nప్రయోగాత్మక విధానం",
      "Behaviouristic approach\nప్రవర్తనావాద విధానం",
      "Collaborative learning approach\nసహకార అభ్యాస విధానం"
    ],
    "correctAnswer": 3,
    "explanation": "ప్రాజెక్ట్ పద్ధతిలో విద్యార్థులు ఒక అంశాన్ని పరిశోధించడానికి లేదా ఒక సమస్యను పరిష్కరించడానికి సమూహాలలో కలిసి పనిచేయడం అంతర్లీనంగా ఉంటుంది. ఈ ప్రక్రియకు బృందకృషి, కమ్యూనికేషన్ మరియు భాగస్వామ్య బాధ్యత అవసరం, ఇది సహకార అభ్యాస విధానానికి ఒక ప్రధాన ఉదాహరణగా నిలుస్తుంది, ఇక్కడ అభ్యసన అనేది ఒక సామాజిక కార్యాచరణ."
  },
  {
    "id": "118",
    "question": "In Telangana state, the present EVS textbooks at primary level are mainly developed based these themes A) Religion Society B) Agriculture - Crops C) Our constitution D) Safety and First aid E) Food, Health & Hygiene (TSTET 18 Jan 2025)\nతెలంగాణ రాష్ట్రంలో, ప్రాథమిక స్థాయిలో ప్రస్తుత EVS పాఠ్యపుస్తకాలు ప్రధానంగా ఈ ఇతివృత్తాల ఆధారంగా అభివృద్ధి చేయబడ్డాయి A) మతం సమాజం B) వ్యవసాయం - పంటలు C) మన రాజ్యాంగం D) భద్రత మరియు ప్రథమ చికిత్స E) ఆహారం, ఆరోగ్యం & పరిశుభ్రత",
    "options": [
      "A, B, C D & E\nA, B, C, D & E",
      "B, C, D & E only\nB, C, D & E మాత్రమే",
      "A, C, D & E only\nA, C, D & E మాత్రమే",
      "A. B. C & D only\nA, B, C & D మాత్రమే"
    ],
    "correctAnswer": 0,
    "explanation": "ప్రాథమిక స్థాయిలో పర్యావరణ అధ్యయనాలు (EVS) పాఠ్యాంశాలు విజ్ఞాన శాస్త్రం, సాంఘిక శాస్త్రం మరియు పర్యావరణ విద్య నుండి విషయాలను గ్రహించి, ఒక సమీకృత సబ్జెక్టుగా రూపొందించబడ్డాయి. పాఠ్యపుస్తకాలు ఒక పిల్లల జీవితానికి సంబంధించిన విస్తృత శ్రేణి ఇతివృత్తాలను కవర్ చేస్తాయి, ఇందులో జాబితా చేయబడిన అన్ని అంశాలు ఉంటాయి: సామాజిక నిర్మాణాలు (మతంతో సహా), వ్యవసాయం, పౌరశాస్త్రం (రాజ్యాంగం), భద్రత, ఆహారం మరియు ఆరోగ్యం."
  },
  {
    "id": "119",
    "question": "This activity will NOT help the EVS teacher to create effective transactional environment in classroom (TSTET 18 Jan 2025)\nఈ కార్యాచరణ తరగతి గదిలో ప్రభావవంతమైన బోధనాభ్యసన వాతావరణాన్ని సృష్టించడానికి EVS ఉపాధ్యాయునికి సహాయపడదు",
    "options": [
      "Encouraging students to ask questions in classroom\nతరగతి గదిలో విద్యార్థులను ప్రశ్నలు అడగడానికి ప్రోత్సహించడం",
      "Promoting students to participate in discussions in classroom\nతరగతి గదిలో చర్చలలో పాల్గొనడానికి విద్యార్థులను ప్రోత్సహించడం",
      "Imposing punishments and stress to maintain discipline in classroom\nతరగతి గదిలో క్రమశిక్షణను పాటించడానికి శిక్షలు మరియు ఒత్తిడిని విధించడం",
      "Respecting the feelings and opinion of students in classroom\nతరగతి గదిలో విద్యార్థుల భావాలు మరియు అభిప్రాయాలను గౌరవించడం"
    ],
    "correctAnswer": 2,
    "explanation": "ప్రభావవంతమైన అభ్యాస (బోధనాభ్యసన) వాతావరణం అంటే సురక్షితమైన, సహాయకరమైన మరియు చురుకైన భాగస్వామ్యాన్ని ప్రోత్సహించేది. శిక్షలను ఉపయోగించడం మరియు ఒత్తిడిని సృష్టించడం వలన ప్రతికూలమైన, భయం ఆధారిత వాతావరణం ఏర్పడుతుంది, ఇది జిజ్ఞాసను అణిచివేస్తుంది, అభ్యసనను అడ్డుకుంటుంది మరియు బహిరంగ సంభాషణను నిరుత్సాహపరుస్తుంది. మిగిలిన మూడు ఎంపికలు సానుకూల మరియు ప్రభావవంతమైన తరగతి గది వాతావరణానికి సంకేతాలు."
  },
  {
    "id": "120",
    "question": "According to Dr. C. Henry Morison the following teaching step helps the teacher, to identify the individual differences and to adopt remedial teaching (TSTET 18 Jan 2025)\nడా. సి. హెన్రీ మోరిసన్ ప్రకారం, కింది బోధనా సోపానం ఉపాధ్యాయునికి వ్యక్తిగత భేదాలను గుర్తించడానికి మరియు నివారణ బోధనను అనుసరించడానికి సహాయపడుతుంది",
    "options": [
      "Organisation\nవ్యవస్థీకరణ",
      "Presentation\nప్రదర్శన",
      "Recitation\nపఠనం",
      "Assimilation\nస్వాధినీకరణ"
    ],
    "correctAnswer": 3,
    "explanation": "హెన్రీ మోరిసన్ యొక్క ఐదు-సోపానాల బోధనా నమూనాలో (అన్వేషణ, ప్రదర్శన, స్వాధినీకరణ, వ్యవస్థీకరణ, పఠనం), 'స్వాధినీకరణ' దశలో విద్యార్థులు కొత్త విషయాన్ని అంతర్గతీకరించడానికి పర్యవేక్షించబడిన అధ్యయనంలో నిమగ్నమవుతారు. ఈ కాలంలో, ఉపాధ్యాయుడు విద్యార్థులు పనిచేస్తున్నప్పుడు చురుకుగా గమనిస్తారు, ఇది వ్యక్తిగత అభ్యాస ఇబ్బందులను గుర్తించడానికి మరియు తక్షణ మద్దతు లేదా నివారణ బోధనను అందించడానికి ఒక అవకాశాన్ని కల్పిస్తుంది."
  },
  {
    "id": 121,
    "question": "The most abundant food component in millets (TSTET 08 Jan 2025)\nచిరుధాన్యాలలో అత్యంత సమృద్ధిగా ఉండే ఆహార భాగం",
    "options": [
      "Starch\nపిండిపదార్థం (స్టార్చ్)",
      "Proteins\nప్రోటీన్లు",
      "Vitamins\nవిటమిన్లు",
      "Mineral salts\nఖనిజ లవణాలు"
    ],
    "correctAnswer": 0,
    "explanation": "చిరుధాన్యాలు ఒక రకమైన తృణధాన్యాలు. వరి, గోధుమ వంటి ఇతర ప్రధాన తృణధాన్యాల వలె, వాటి ప్రాథమిక పోషక భాగం కార్బోహైడ్రేట్లు, ఇందులో పిండిపదార్థం (స్టార్చ్) అత్యంత ముఖ్యమైనది. ఈ ధాన్యాలు అందించే ప్రధాన శక్తి వనరుగా పిండిపదార్థం పనిచేస్తుంది."
  },
  {
    "id": 122,
    "question": "Seetha added two drops of copper sulphate solution and ten drops of dilute sodium hydroxide to a food item. and it turned violet. She aimed to detect: (TSTET 08 Jan 2025)\nసీత ఒక ఆహార పదార్థానికి రెండు చుక్కల కాపర్ సల్ఫేట్ ద్రావణం మరియు పది చుక్కల సజల సోడియం హైడ్రాక్సైడ్ కలిపింది, మరియు అది ఊదా రంగులోకి మారింది. ఆమె దేనిని గుర్తించడానికి ఉద్దేశించింది:",
    "options": [
      "Starch\nపిండిపదార్థం",
      "Proteins\nప్రోటీన్లు",
      "Fats\nకొవ్వులు",
      "Sugars\nచక్కెరలు"
    ],
    "correctAnswer": 1,
    "explanation": "వివరించిన ప్రక్రియ బ్యూరెట్ పరీక్ష, ఇది ప్రోటీన్లలోని పెప్టైడ్ బంధాల ఉనికిని గుర్తించడానికి ఉపయోగిస్తారు. క్షార వాతావరణంలో (సోడియం హైడ్రాక్సైడ్ ద్వారా సృష్టించబడినది), కాపర్ సల్ఫేట్ ద్రావణంలోని కాపర్(II) అయాన్లు పెప్టైడ్ బంధాలతో ఒక సమన్వయ సమ్మేళనాన్ని ఏర్పరుస్తాయి, ఫలితంగా ఒక లక్షణమైన ఊదా రంగు వస్తుంది. ఇది ఆహార నమూనాలో ప్రోటీన్ల ఉనికిని సూచిస్తుంది."
  },
  {
    "id": 123,
    "question": "'Rickets' in children may be caused by the deficiency of (TSTET 08 Jan 2025)\nపిల్లలలో 'రికీట్స్' దేని లోపం వల్ల సంభవించవచ్చు",
    "options": [
      "Vitamin A\nవిటమిన్ A",
      "Iodine\nఅయోడిన్",
      "Iron\nఇనుము",
      "Calcium\nకాల్షియం"
    ],
    "correctAnswer": 3,
    "explanation": "రికీట్స్ అనేది పిల్లలలో ఎముకల అభివృద్ధిని ప్రభావితం చేసే ఒక పరిస్థితి, ఇది మృదువైన మరియు బలహీనమైన ఎముకలకు దారితీస్తుంది. ఇది ప్రధానంగా విటమిన్ D లోపం వల్ల వస్తుంది, ఇది కాల్షియం మరియు ఫాస్పరస్ శోషణకు అవసరం. ఎముకల యొక్క ప్రధాన ఖనిజ భాగమైన కాల్షియం యొక్క ప్రత్యక్ష లోపం కూడా రికెట్స్‌కు కారణమవుతుంది."
  },
  {
    "id": 124,
    "question": "Antony van Leeuwenhoek called bacteria as (TSTET 08 Jan 2025)\nఆంటోనీ వాన్ లీవెన్‌హోక్ బ్యాక్టీరియాను ఇలా పిలిచారు",
    "options": [
      "Animalcules\nయానిమల్క్యూల్స్",
      "Microbes\nమైక్రోబ్స్",
      "Germs\nజెర్మ్స్",
      "Protozoa\nప్రోటోజోవా"
    ],
    "correctAnswer": 0,
    "explanation": "ఆంటోనీ వాన్ లీవెన్‌హోక్, 17వ శతాబ్దపు శాస్త్రవేత్త మరియు సూక్ష్మదర్శిని యొక్క మార్గదర్శకుడు, సూక్ష్మజీవులను గమనించిన మొదటి మానవులలో ఒకరు. చెరువు నీరు వంటి వివిధ నమూనాలలో బ్యాక్టీరియాతో సహా ఈ చిన్న జీవులను కనుగొన్న తరువాత, అతను వాటిని 'యానిమల్క్యూల్స్' అని ప్రసిద్ధంగా పేర్కొన్నాడు, అంటే 'చిన్న జంతువులు'."
  },
  {
    "id": 125,
    "question": "The plant that is capable of self-pollination is: (TSTET 08 Jan 2025)\nస్వయం-పరాగసంపర్కం చేయగల మొక్క:",
    "options": [
      "Mango\nమామిడి",
      "Coconut\nకొబ్బరి",
      "Pea\nబఠానీ",
      "Papaya\nబొప్పాయి"
    ],
    "correctAnswer": 2,
    "explanation": "బఠానీ మొక్కల పువ్వులు సహజంగా స్వయం-పరాగసంపర్కం (ఆటోగామి) కోసం నిర్మించబడ్డాయి. పువ్వు యొక్క కీల్ రేక మగ (పరాగకోశాలు) మరియు ఆడ (కీలాగ్రం) పునరుత్పత్తి భాగాలను రెండింటినీ కప్పివేస్తుంది, ఇది ఒకే పువ్వులో పరాగ రేణువుల బదిలీని సులభతరం చేస్తుంది. మరోవైపు, బొప్పాయి సాధారణంగా ఏకలింగాశ్రయి (వేరువేరు మగ మరియు ఆడ మొక్కలను కలిగి ఉంటుంది) మరియు పరపరాగసంపర్కం అవసరం."
  },
  {
    "id": 126,
    "question": "Identify the correct pair of secondary pollutants of the atmosphere from the following: (TSTET 08 Jan 2025)\nకింది వాటి నుండి వాతావరణంలోని ద్వితీయ కాలుష్య కారకాల సరైన జతను గుర్తించండి:",
    "options": [
      "Carbon monoxide (CO), Nitrogen oxides (NO, NO2)\nకార్బన్ మోనాక్సైడ్ (CO), నైట్రోజన్ ఆక్సైడ్లు (NO, NO2)",
      "Sulphur dioxide (SO2), Suspended Particulate matter (SPM)\nసల్ఫర్ డయాక్సైడ్ (SO2), సస్పెండ్ చేయబడిన కణ పదార్థం (SPM)",
      "Ozone (O3), Peroxyacetyl nitrates (PANs)\nఓజోన్ (O3), పెరాక్సీఅసిటైల్ నైట్రేట్లు (PANs)",
      "Methane (CH4), Carbon dioxide (CO2)\nమీథేన్ (CH4), కార్బన్ డయాక్సైడ్ (CO2)"
    ],
    "correctAnswer": 2,
    "explanation": "ద్వితీయ కాలుష్య కారకాలు నేరుగా విడుదల చేయబడవు కానీ ప్రాథమిక కాలుష్య కారకాల రసాయన చర్యల ద్వారా వాతావరణంలో ఏర్పడతాయి. భూస్థాయి ఓజోన్ (O3) మరియు పెరాక్సీఅసిటైల్ నైట్రేట్లు (PANs) దీనికి ఉత్కృష్ట ఉదాహరణలు, ఇవి నైట్రోజన్ ఆక్సైడ్లు (NOx) మరియు అస్థిర కర్బన సమ్మేళనాలు (VOCs) వంటి ప్రాథమిక కాలుష్య కారకాలు సూర్యరశ్మి సమక్షంలో చర్య జరిపినప్పుడు ఏర్పడతాయి. ఇతర ఎంపికలు ప్రాథమిక కాలుష్య కారకాలను జాబితా చేస్తాయి, అవి నేరుగా ఒక మూలం నుండి విడుదల చేయబడతాయి."
  },
  {
    "id": 127,
    "question": "Read the following statements and choose the correct answer.\nStatement I: Solar energy, Wind energy, and Biomass are examples of non-renewable energy resources.\nStatement II: Coal, Natural gas, Oil are examples of non-renewable energy resources.\n(TSTET 08 Jan 2025)\nకింది వాక్యాలను చదివి సరైన సమాధానాన్ని ఎంచుకోండి.\nవాక్యం I: సౌరశక్తి, పవనశక్తి మరియు జీవద్రవ్యరాశి పునరుత్పాదక శక్తి వనరులకు ఉదాహరణలు.\nవాక్యం II: బొగ్గు, సహజవాయువు, నూనె పునరుత్పాదకం కాని శక్తి వనరులకు ఉదాహరణలు.",
    "options": [
      "Only Statement I is correct\nవాక్యం I మాత్రమే సరైనది",
      "Only Statement II is correct\nవాక్యం II మాత్రమే సరైనది",
      "Both statements are correct\nరెండు వాక్యాలు సరైనవి",
      "Both statements are incorrect\nరెండు వాక్యాలు తప్పు"
    ],
    "correctAnswer": 1,
    "explanation": "వాక్యం I తప్పు; సౌర, పవన మరియు జీవద్రవ్యరాశి పునరుత్పాదక వనరులు ఎందుకంటే అవి సహజంగా పునరుద్ధరించబడతాయి. వాక్యం II సరైనది; బొగ్గు, సహజవాయువు మరియు నూనె శిలాజ ఇంధనాలు, ఇవి పునరుత్పాదకం కానివిగా పరిగణించబడతాయి ఎందుకంటే అవి ఏర్పడటానికి మిలియన్ల సంవత్సరాలు పడుతుంది మరియు అవి సృష్టించబడిన దానికంటే చాలా వేగంగా వినియోగించబడతాయి."
  },
  {
    "id": 128,
    "question": "Rajesh, an 8th class student, took a piece of detergent and added it to a test tube filled with water. After shaking the test tube, if a lot of foam formed, what can Rajesh conclude about that water? (TSTET 08 Jan 2025)\n8వ తరగతి విద్యార్థి అయిన రాజేష్, ఒక డిటర్జెంట్ ముక్కను తీసుకుని, నీటితో నిండిన పరీక్ష నాళికలో వేశాడు. పరీక్ష నాళికను కదిపిన తరువాత, చాలా నురుగు ఏర్పడితే, ఆ నీటి గురించి రాజేష్ ఏమి నిర్ధారించగలడు?",
    "options": [
      "The water contains high levels of calcium sulphate.\nనీటిలో అధిక స్థాయిలో కాల్షియం సల్ఫేట్ ఉంది.",
      "The water contains high levels of chlorine.\nనీటిలో అధిక స్థాయిలో క్లోరిన్ ఉంది.",
      "The water is hard.\nనీరు కఠినమైనది.",
      "The water is soft.\nనీరు మృదువైనది."
    ],
    "correctAnswer": 3,
    "explanation": "నీటి యొక్క నురుగును ఏర్పరిచే సామర్థ్యం దాని కాఠిన్యాన్ని పరీక్షించడానికి ఒక పరీక్ష. కఠిన జలంలో కాల్షియం మరియు మెగ్నీషియం అయాన్ల వంటి కరిగిన ఖనిజాలు ఉంటాయి, ఇవి సబ్బు/డిటర్జెంట్‌తో చర్య జరిపి మలినాన్ని ఏర్పరుస్తాయి మరియు నురుగును నిరోధిస్తాయి. మృదు జలంలో ఈ ఖనిజాల గాఢత తక్కువగా ఉంటుంది మరియు సులభంగా నురుగు వస్తుంది. చాలా నురుగు ఏర్పడినందున, నీరు మృదువైనది."
  },
  {
    "id": 129,
    "question": "The number of vertebrae in an adult human body is (TSTET 08 Jan 2025)\nవయోజన మానవ శరీరంలోని వెన్నుపూసల సంఖ్య",
    "options": [
      "33",
      "30",
      "26",
      "24"
    ],
    "correctAnswer": 2,
    "explanation": "శిశువు 33 వ్యక్తిగత వెన్నుపూసలతో జన్మించినప్పటికీ, వీటిలో చాలా వరకు పెరుగుదల సమయంలో కలిసిపోతాయి. ఒక వయోజనుడిలో, ఐదు త్రిక వెన్నుపూసలు కలిసి త్రికంగా (sacrum) ఏర్పడతాయి, మరియు నాలుగు అనుత్రిక వెన్నుపూసలు కలిసి అనుత్రికంగా (coccyx) ఏర్పడతాయి. దీని ఫలితంగా వయోజన వెన్నెముకలో మొత్తం 26 ఎముకలు ఉంటాయి: 7 గర్భాశయ, 12 వక్షోజ, 5 కటి, 1 త్రికం మరియు 1 అనుత్రికం."
  },
  {
    "id": 130,
    "question": "The structure in the ear that is responsible for converting sound vibrations into electrical signals that are sent to the brain: (TSTET 08 Jan 2025)\nచెవిలోని ఏ నిర్మాణం ధ్వని కంపనాలను మెదడుకు పంపే విద్యుత్ సంకేతాలుగా మార్చడానికి బాధ్యత వహిస్తుంది:",
    "options": [
      "Cochlea\nకోక్లియా",
      "Eardrum\nకర్ణభేరి",
      "Malleus\nమాలియస్",
      "Auditory canal\nశ్రవణ నాళం"
    ],
    "correctAnswer": 0,
    "explanation": "కోక్లియా లోపలి చెవిలో ఒక మురి, ద్రవంతో నిండిన నిర్మాణం. ఇందులో మెకానోరిసెప్టర్లుగా పనిచేసే ప్రత్యేకమైన కేశ కణాలు ఉంటాయి. ధ్వని కంపనాలు చెవి గుండా ప్రయాణించి కోక్లియాను చేరినప్పుడు, అవి ద్రవం మరియు ఈ కేశ కణాలను కదిలిస్తాయి. ఈ కదలిక విద్యుత్ నరాల ప్రేరణలుగా మార్చబడుతుంది (ట్రాన్స్‌డ్యూస్ చేయబడుతుంది) మరియు శ్రవణ నాడి ద్వారా మెదడుకు ప్రసారం చేయబడుతుంది."
  },
  {
    "id": 131,
    "question": "Among the following statements, which statement correctly describes the main difference between a urologist and a nephrologist? (TSTET 08 Jan 2025)\nకింది వాక్యాలలో, యూరాలజిస్ట్ మరియు నెఫ్రాలజిస్ట్ మధ్య ప్రధాన వ్యత్యాసాన్ని సరిగ్గా వివరించే వాక్యం ఏది?",
    "options": [
      "A urologist treats kidney diseases, while a nephrologist treats heart diseases.\nయూరాలజిస్ట్ మూత్రపిండాల వ్యాధులకు చికిత్స చేస్తారు, అయితే నెఫ్రాలజిస్ట్ గుండె వ్యాధులకు చికిత్స చేస్తారు.",
      "A nephrologist focuses on kidney related surgery, while a urologist handles only medical treatments.\nనెఫ్రాలజిస్ట్ మూత్రపిండ సంబంధిత శస్త్రచికిత్సపై దృష్టి పెడతారు, అయితే యూరాలజిస్ట్ కేవలం వైద్య చికిత్సలను నిర్వహిస్తారు.",
      "A urologist treats only male reproductive health, while a nephrologist treats only female reproductive health.\nయూరాలజిస్ట్ కేవలం పురుషుల పునరుత్పత్తి ఆరోగ్యానికి చికిత్స చేస్తారు, అయితే నెఫ్రాలజిస్ట్ కేవలం మహిళల పునరుత్పత్తి ఆరోగ్యానికి చికిత్స చేస్తారు.",
      "A nephrologist treats kidney diseases medically, while a urologist treats urinary tract diseases and performs related surgeries.\nనెఫ్రాలజిస్ట్ మూత్రపిండాల వ్యాధులకు వైద్యపరంగా చికిత్స చేస్తారు, అయితే యూరాలజిస్ట్ మూత్ర నాళ వ్యాధులకు చికిత్స చేస్తారు మరియు సంబంధిత శస్త్రచికిత్సలు చేస్తారు."
    ],
    "correctAnswer": 3,
    "explanation": "నెఫ్రాలజిస్ట్ మూత్రపిండాల పనితీరు మరియు వ్యాధులపై దృష్టి సారించే ఒక వైద్య నిపుణుడు, మందులు మరియు డయాలసిస్ వంటి శస్త్రచికిత్స కాని మార్గాల ద్వారా వాటికి చికిత్స చేస్తారు. యూరాలజిస్ట్ ఒక శస్త్రచికిత్స నిపుణుడు, అతను రెండు లింగాలలో మూత్రపిండాలు మరియు మొత్తం మూత్ర నాళం (మూత్రాశయం, మూత్ర నాళాలు, మూత్రమార్గం) యొక్క నిర్మాణ లేదా నిర్మాణాత్మక సమస్యలకు, అలాగే పురుష పునరుత్పత్తి వ్యవస్థకు చికిత్స చేస్తారు."
  },
  {
    "id": 132,
    "question": "What looks like a fruit in a cashew nut is not a fruit. It is actually a (TSTET 08 Jan 2025)\nజీడిపప్పులో పండులా కనిపించేది పండు కాదు. ఇది వాస్తవానికి ఒక",
    "options": [
      "Leaf\nఆకు",
      "Fruit stalk\nపండు కాడ",
      "Seed\nవిత్తనం",
      "Root\nవేరు"
    ],
    "correctAnswer": 1,
    "explanation": "జీడి 'పప్పు' అనేది నిజమైన పండు, ఇందులో విత్తనం ఉంటుంది. ఇది పెరిగే మాంసపు, బేరిపండు ఆకారంలో ఉన్న నిర్మాణం, జీడి యాపిల్ అని పిలుస్తారు, ఇది ఒక 'అనుబంధ పండు' లేదా 'మిథ్యా ఫలం'. ఇది నిజమైన పండు కాదు కానీ జీడి పువ్వు యొక్క ఉబ్బిన పుష్పాసనం లేదా పండు కాడ (పెడిసెల్) నుండి అభివృద్ధి చెందుతుంది."
  },
  {
    "id": 133,
    "question": "The type of forests grow in the areas having very high rainfall and also have a very warm climate (TSTET 08 Jan 2025)\nచాలా అధిక వర్షపాతం మరియు చాలా వెచ్చని వాతావరణం ఉన్న ప్రాంతాలలో పెరిగే అడవుల రకం",
    "options": [
      "The Tropical Deciduous Forests\nఉష్ణమండల ఆకురాల్చే అడవులు",
      "The Evergreen Forests\nసతత హరిత అడవులు",
      "The Coniferous forests\nశృంగాకార అడవులు",
      "The Mangrove Forests\nమడ అడవులు"
    ],
    "correctAnswer": 1,
    "explanation": "సతత హరిత అడవులు, ముఖ్యంగా ఉష్ణమండల సతత హరిత వర్షారణ్యాలు, అధిక వార్షిక వర్షపాతం (సాధారణంగా 200 సెం.మీ. కంటే ఎక్కువ) మరియు నిలకడగా అధిక ఉష్ణోగ్రతలు ఉన్న ప్రాంతాలలో కనిపిస్తాయి. ఈ పరిస్థితులు చెట్లు ఏడాది పొడవునా తమ ఆకులను నిలుపుకోవడానికి అనుమతిస్తాయి, కాబట్టి అడవి ఆకురాల్చే కాలం లేకుండా నిరంతరం పచ్చగా ఉంటుంది."
  },
  {
    "id": 134,
    "question": "Among the following, the places having 'Moderate Climate' are (TSTET 08 Jan 2025)\nకింది వాటిలో, 'మధ్యస్థ వాతావరణం' ఉన్న ప్రదేశాలు",
    "options": [
      "Hyderabad and Nagpur\nహైదరాబాద్ మరియు నాగపూర్",
      "Simla and Nagpur\nసిమ్లా మరియు నాగపూర్",
      "Visakhapatnam and Mumbai\nవిశాఖపట్నం మరియు ముంబై",
      "Hyderabad and Mumbai\nహైదరాబాద్ మరియు ముంబై"
    ],
    "correctAnswer": 2,
    "explanation": "ఒక మధ్యస్థ లేదా సముద్ర వాతావరణం తక్కువ వార్షిక ఉష్ణోగ్రత పరిధిని కలిగి ఉంటుంది మరియు సాధారణంగా తీర ప్రాంతాలలో కనిపిస్తుంది. సముద్రం ఒక నియంత్రణ ప్రభావాన్ని చూపి, వేసవిలో తీవ్రమైన వేడిని మరియు శీతాకాలంలో తీవ్రమైన చలిని నివారిస్తుంది. విశాఖపట్నం మరియు ముంబై రెండూ తీరప్రాంత నగరాలు మరియు ఈ ప్రభావాన్ని అనుభవిస్తాయి. హైదరాబాద్ మరియు నాగపూర్ వంటి లోతట్టు నగరాలు మరింత తీవ్రమైన ఖండాంతర వాతావరణాలను కలిగి ఉంటాయి."
  },
  {
    "id": 135,
    "question": "Which of the following statement best describes the term 'Evaporation'? (TSTET 08 Jan 2025)\nకింది వాక్యాలలో ఏది 'భాష్పీభవనం' అనే పదాన్ని ఉత్తమంగా వివరిస్తుంది?",
    "options": [
      "The process of change of water into water vapour\nనీరు నీటి ఆవిరిగా మారే ప్రక్రియ",
      "The amount of invisible water vapour present in the atmosphere\nవాతావరణంలో ఉన్న అదృశ్య నీటి ఆవిరి మొత్తం",
      "Transporting of water from the atmosphere to the surface of the earth\nవాతావరణం నుండి భూమి యొక్క ఉపరితలానికి నీటిని రవాణా చేయడం",
      "The process in which the water vapour changes into water\nనీటి ఆవిరి నీరుగా మారే ప్రక్రియ"
    ],
    "correctAnswer": 0,
    "explanation": "భాష్పీభవనం అనేది ఒక ద్రవ పదార్థం వాయువుగా లేదా ఆవిరిగా మారే ప్రక్రియ. నీటి చక్రం సందర్భంలో, ఇది నీరు ద్రవ స్థితి నుండి వాయు స్థితికి (నీటి ఆవిరి) మారే ప్రక్రియ. ఎంపిక 2 తేమను వివరిస్తుంది, ఎంపిక 3 అవపాతాన్ని వివరిస్తుంది, మరియు ఎంపిక 4 ఘనీభవనాన్ని వివరిస్తుంది."
  },
  {
    "id": 136,
    "question": "As the earth goes around the Sun, the angle of incidence decreases in the north in these months of the year (TSTET 08 Jan 2025)\nభూమి సూర్యుని చుట్టూ తిరుగుతున్నప్పుడు, సంవత్సరంలోని ఈ నెలల్లో ఉత్తరాన పతన కోణం తగ్గుతుంది",
    "options": [
      "November and December\nనవంబర్ మరియు డిసెంబర్",
      "June and July\nజూన్ మరియు జూలై",
      "March and April\nమార్చి మరియు ఏప్రిల్",
      "May and June\nమే మరియు జూన్"
    ],
    "correctAnswer": 0,
    "explanation": "పతన కోణం అనేది సూర్యకిరణాలు భూమిని తాకే కోణం. తక్కువ కోణం అంటే సూర్యరశ్మి తక్కువ ప్రత్యక్షంగా మరియు ఎక్కువ విస్తరించి ఉంటుంది. భూమి యొక్క అక్షసంబంధ వంపు కారణంగా, ఉత్తరార్ధగోళం నవంబర్ మరియు డిసెంబర్ నెలల్లో సూర్యుని నుండి దూరంగా వంగి ఉంటుంది. దీని ఫలితంగా తక్కువ పతన కోణం, యూనిట్ ప్రాంతానికి తక్కువ సౌరశక్తి, మరియు తద్వారా శీతాకాలం ఏర్పడుతుంది."
  },
  {
    "id": 137,
    "question": "As per the preamble of the Indian Constitution, the people of India resolved to secure the following ideals to all the citizens living in the country (TSTET 08 Jan 2025)\nభారత రాజ్యాంగ పీఠిక ప్రకారం, భారతదేశ ప్రజలు దేశంలో నివసిస్తున్న పౌరులందరికీ ఈ క్రింది ఆదర్శాలను భద్రపరచాలని సంకల్పించారు",
    "options": [
      "Liberty, Equality, Justice and Fraternity\nస్వేచ్ఛ, సమానత్వం, న్యాయం మరియు సౌభ్రాతృత్వం",
      "Liberty, Happiness, Accountability and Sustainability\nస్వేచ్ఛ, ఆనందం, జవాబుదారీతనం మరియు సుస్థిరత",
      "Generosity, Integrity, Sustainability and Equality\nఉదారత, సమగ్రత, సుస్థిరత మరియు సమానత్వం",
      "Uniqueness, Sustainability, Accountability and Justice\nవిలక్షణత, సుస్థిరత, జవాబుదారీతనం మరియు న్యాయం"
    ],
    "correctAnswer": 0,
    "explanation": "భారత రాజ్యాంగ పీఠిక పౌరులందరికీ భద్రపరచాల్సిన ముఖ్య ఆదర్శాలను స్పష్టంగా వివరిస్తుంది: న్యాయం (సామాజిక, ఆర్థిక, రాజకీయ), స్వేచ్ఛ (ఆలోచన, భావప్రకటన, విశ్వాసం, నమ్మకం, ఆరాధన), సమానత్వం (హోదా మరియు అవకాశాలలో), మరియు సౌభ్రాతృత్వం (వ్యక్తి గౌరవాన్ని మరియు దేశ ఐక్యతను నిర్ధారిస్తుంది)."
  },
  {
    "id": 138,
    "question": "In the Indian Constitution, this lays down some specific tasks before the Government of India such as Universalizing Literacy, protection of Environment etc. (TSTET 08 Jan 2025)\nభారత రాజ్యాంగంలో, ఇది భారత ప్రభుత్వానికి కొన్ని నిర్దిష్ట పనులను నిర్దేశిస్తుంది, ఉదాహరణకు సార్వత్రిక అక్షరాస్యత, పర్యావరణ పరిరక్షణ మొదలైనవి.",
    "options": [
      "Fundamental Rights of the Indian citizens\nభారత పౌరుల ప్రాథమిక హక్కులు",
      "Fundamental Duties of a Citizen\nపౌరుని ప్రాథమిక విధులు",
      "Directive Principles of a State Policy\nరాష్ట్ర విధాన నిర్దేశక సూత్రాలు",
      "Human Rights\nమానవ హక్కులు"
    ],
    "correctAnswer": 2,
    "explanation": "రాష్ట్ర విధాన నిర్దేశక సూత్రాలు (DPSP) ప్రభుత్వం చట్టాలను రూపొందించేటప్పుడు అనుసరించాల్సిన మార్గదర్శకాలు. అవి న్యాయస్థానాలచే అమలు చేయబడవు కానీ రాష్ట్రం సాధించాల్సిన సామాజిక మరియు ఆర్థిక లక్ష్యాలను సూచిస్తాయి. వీటిలో విద్యకు సంబంధించిన సూత్రాలు (అధికరణ 45, సార్వత్రిక అక్షరాస్యతకు సంబంధించింది) మరియు పర్యావరణ పరిరక్షణ (అధికరణ 48A) ఉన్నాయి."
  },
  {
    "id": 139,
    "question": "Identify the correct statement regarding passing of an Ordinary Bill in India (TSTET 08 Jan 2025)\nభారతదేశంలో సాధారణ బిల్లును ఆమోదించడానికి సంబంధించి సరైన వాక్యాన్ని గుర్తించండి",
    "options": [
      "The ordinary bills are to be passed in the Lok Sabha only\nసాధారణ బిల్లులను లోక్‌సభలో మాత్రమే ఆమోదించాలి",
      "If there are any differences between the two houses of the Parliament in passing an ordinary bill, the final decision shall be taken in a joint session of the Parliament\nసాధారణ బిల్లును ఆమోదించడంలో పార్లమెంటు ఉభయ సభల మధ్య ఏవైనా విభేదాలు ఉంటే, తుది నిర్ణయం పార్లమెంటు ఉమ్మడి సమావేశంలో తీసుకోబడుతుంది",
      "The Rajya sabha is empowered with more powers regarding ordinary bills\nసాధారణ బిల్లుల విషయంలో రాజ్యసభకు ఎక్కువ అధికారాలు ఉన్నాయి",
      "As Lok Sabha has more members, it is likely to have more powers regarding ordinary bills\nలోక్‌సభలో ఎక్కువ మంది సభ్యులు ఉన్నందున, సాధారణ బిల్లుల విషయంలో దానికి ఎక్కువ అధికారాలు ఉండే అవకాశం ఉంది"
    ],
    "correctAnswer": 1,
    "explanation": "ఒక సాధారణ బిల్లు పార్లమెంటు ఉభయ సభల (లోక్‌సభ మరియు రాజ్యసభ) ఆమోదం పొందాలి. రెండు సభల మధ్య ఒక అసమ్మతి లేదా ప్రతిష్టంభన ఉంటే, రాజ్యాంగంలోని అధికరణ 108 దానిని పరిష్కరించడానికి ఒక యంత్రాంగాన్ని అందిస్తుంది, అదే ఉభయ సభల ఉమ్మడి సమావేశం, ఇక్కడ హాజరైన మరియు ఓటు వేసిన సభ్యుల సాధారణ మెజారిటీతో బిల్లు ఆమోదించబడుతుంది."
  },
  {
    "id": 140,
    "question": "One among the following has NOT attended the first session of the Indian National Congress held in 1885 (TSTET 08 Jan 2025)\nకింది వారిలో ఒకరు 1885లో జరిగిన భారత జాతీయ కాంగ్రెస్ మొదటి సమావేశానికి హాజరుకాలేదు",
    "options": [
      "Dadabhai Naoroji\nదాదాభాయ్ నౌరోజీ",
      "Jawaharlal Nehru\nజవహర్‌లాల్ నెహ్రూ",
      "Surendranath Banerjee\nసురేంద్రనాథ్ బెనర్జీ",
      "S. Subramania Iyer\nఎస్. సుబ్రమణియ అయ్యర్"
    ],
    "correctAnswer": 1,
    "explanation": "భారత జాతీయ కాంగ్రెస్ ప్రారంభ సమావేశం 1885లో జరిగింది. జవహర్‌లాల్ నెహ్రూ ఈ సంఘటన జరిగిన నాలుగు సంవత్సరాల తర్వాత, 1889లో జన్మించారు, కనుక అతను హాజరు కావడం అసాధ్యం. దాదాభాయ్ నౌరోజీ మరియు ఎస్. సుబ్రమణియ అయ్యర్ హాజరైన వ్యవస్థాపక సభ్యులలో ఉన్నారు. మరో ప్రముఖ నాయకుడు సురేంద్రనాథ్ బెనర్జీ అదే సమయంలో కలకత్తాలో ఇండియన్ నేషనల్ కాన్ఫరెన్స్‌తో బిజీగా ఉన్నందున అతను కూడా హాజరు కాలేదు, కానీ నెహ్రూ హాజరు కాకపోవడానికి కారణం అతను ఇంకా జన్మించకపోవడమే."
  },
  {
    "id": 141,
    "question": "Mulla Abdul Qayyum established an organization called 'Anjumen-e-maref' which aimed at (TSTET 08 Jan 2025)\nముల్లా అబ్దుల్ ఖయ్యూం 'అంజుమన్-ఎ-మారిఫ్' అనే సంస్థను స్థాపించారు, దాని లక్ష్యం",
    "options": [
      "Developing social, intellectual and economic life of the people\nప్రజల సామాజిక, మేధో మరియు ఆర్థిక జీవితాన్ని అభివృద్ధి చేయడం",
      "Propagation of Urdu language in all the schools run by the Nizam\nనిజాం నడిపే అన్ని పాఠశాలల్లో ఉర్దూ భాషను ప్రచారం చేయడం",
      "Enhancing the culture and the architecture in Hyderabad state\nహైదరాబాద్ రాష్ట్రంలో సంస్కృతి మరియు వాస్తుశిల్పాన్ని మెరుగుపరచడం",
      "The construction of Schools and Colleges in Hyderabad State\nహైదరాబాద్ రాష్ట్రంలో పాఠశాలలు మరియు కళాశాలల నిర్మాణం"
    ],
    "correctAnswer": 0,
    "explanation": "ముల్లా అబ్దుల్ ఖయ్యూం 1892లో హైదరాబాద్‌లో 'అంజుమన్-ఎ-మారిఫ్'ను ఒక సామాజిక-విద్యా సంస్కరణ ఉద్యమంగా స్థాపించారు. దాని ప్రాథమిక లక్ష్యం ఆధునిక విద్యను ప్రోత్సహించడం మరియు నిజాం రాష్ట్రంలోని ప్రజల, ముఖ్యంగా ముస్లిం సమాజం యొక్క మొత్తం సామాజిక, మేధో మరియు ఆర్థిక ఉన్నతిని తీసుకురావడం."
  },
  {
    "id": 142,
    "question": "The Inscriptions from Uthiramerur in Chengalpat district provide details of (TSTET 08 Jan 2025)\nచెంగల్పట్టు జిల్లాలోని ఉత్తరమేరూర్ నుండి లభించిన శాసనాలు దేని వివరాలను అందిస్తాయి",
    "options": [
      "The administration of Kakatiya rulers\nకాకతీయ పాలకుల పరిపాలన",
      "The way in which the Sabha was organized during Cholas\nచోళుల కాలంలో సభ ఏ విధంగా నిర్వహించబడింది",
      "The information regarding the temple at Gangaikonda Cholapuram\nగంగైకొండ చోళపురంలోని ఆలయం గురించిన సమాచారం",
      "The way in which Warriors, chiefs and kings derived much of their income by taxing the traders\nయోధులు, ముఖ్యులు మరియు రాజులు వ్యాపారులపై పన్ను విధించడం ద్వారా తమ ఆదాయంలో ఎక్కువ భాగాన్ని ఎలా పొందేవారు"
    ],
    "correctAnswer": 1,
    "explanation": "చోళుల కాలం నాటి ఉత్తరమేరూర్ శాసనాలు, స్థానిక స్వపరిపాలన వ్యవస్థ యొక్క వివరణాత్మక వర్ణనకు ప్రసిద్ధి చెందాయి. అవి గ్రామ సభ ఎలా ఏర్పడింది, దాని సభ్యుల అర్హతలు, ఎన్నికల పద్ధతులు (కుడవోలై అనే లాటరీ వ్యవస్థతో సహా) మరియు వివిధ కమిటీల పనితీరు గురించి విస్తృతమైన వివరాలను అందిస్తాయి."
  },
  {
    "id": 143,
    "question": "This person performed many burrakathas during the Telangana Movement (TSTET 08 Jan 2025)\nతెలంగాణ ఉద్యమ సమయంలో ఈ వ్యక్తి అనేక బుర్రకథలను ప్రదర్శించారు",
    "options": [
      "Rukmini Devi\nరుక్మిణీ దేవి",
      "Balasaraswathi\nబాలసరస్వతి",
      "Vishnuru Deshmukh\nవిస్నూరు దేశ్‌ముఖ్",
      "Nazar\nనాజర్"
    ],
    "correctAnswer": 3,
    "explanation": "షేక్ నాజర్ ఒక ప్రసిద్ధ బుర్రకథ కళాకారుడు, అతను తెలంగాణ సాయుధ పోరాటం (1946-51) సమయంలో ఈ సాంప్రదాయిక జానపద కళారూపాన్ని కమ్యూనికేషన్ మరియు సమీకరణ కోసం ఒక శక్తివంతమైన సాధనంగా ఉపయోగించారు. అతని ప్రదర్శనలు అణచివేత మరియు పరాక్రమ కథలను వివరించి, రైతులను నిజాంలు మరియు దేశ్‌ముఖ్‌ల భూస్వామ్య వ్యవస్థకు వ్యతిరేకంగా తిరుగుబాటు చేయడానికి ప్రేరేపించాయి."
  },
  {
    "id": 144,
    "question": "These mountain ranges were formed in the last stage of formation of Himalayas (TSTET 08 Jan 2025)\nహిమాలయాల నిర్మాణంలో చివరి దశలో ఈ పర్వత శ్రేణులు ఏర్పడ్డాయి",
    "options": [
      "The Greater Himalayas\nగ్రేటర్ హిమాలయాలు",
      "The Lesser Himalayas\nలెస్సర్ హిమాలయాలు",
      "The Siwalik Ranges\nశివాలిక్ శ్రేణులు",
      "The Purvanchal Hills\nపూర్వాంచల్ కొండలు"
    ],
    "correctAnswer": 2,
    "explanation": "హిమాలయ పర్వత వ్యవస్థ మూడు ప్రధాన దశలలో ఏర్పడింది. శివాలిక్ శ్రేణి, బాహ్య హిమాలయాలు అని కూడా పిలుస్తారు, ఇది అత్యంత చిన్నది మరియు దక్షిణాన ఉన్న శ్రేణి. ఇది గ్రేటర్ మరియు లెస్సర్ హిమాలయాల నుండి కోతకు గురైన అవక్షేపాలు మరియు శిధిలాల చేరడం ద్వారా హిమాలయాల ఉన్నతి యొక్క చివరి దశలో ఏర్పడింది."
  },
  {
    "id": 145,
    "question": "NCF-2005 recommends that, the EVS textbooks should link the students' life at school to their life outside the school. This implies that (TSTET 08 Jan 2025)\nNCF-2005 సిఫార్సు ప్రకారం, EVS పాఠ్యపుస్తకాలు పాఠశాలలో విద్యార్థుల జీవితాన్ని వారి పాఠశాల వెలుపల జీవితంతో అనుసంధానించాలి. దీని అర్థం",
    "options": [
      "the textbook only should be the source of knowledge\nపాఠ్యపుస్తకం మాత్రమే జ్ఞానానికి మూలం కావాలి",
      "all the activities given in textbook should support the students to construct knowledge for themselves and relate/apply to their everyday life\nపాఠ్యపుస్తకంలో ఇచ్చిన అన్ని కార్యకలాపాలు విద్యార్థులు తమకు తాముగా జ్ఞానాన్ని నిర్మించుకోవడానికి మరియు వారి రోజువారీ జీవితానికి సంబంధించి/అన్వయించుకోవడానికి మద్దతు ఇవ్వాలి",
      "the textbook should not at all be a source of knowledge construction\nపాఠ్యపుస్తకం జ్ఞాన నిర్మాణానికి ఏమాత్రం మూలం కాకూడదు",
      "students should be compelled to memorise the concepts given in the textbooks\nవిద్యార్థులు పాఠ్యపుస్తకాలలో ఇచ్చిన భావనలను బట్టీ పట్టమని బలవంతం చేయాలి"
    ],
    "correctAnswer": 1,
    "explanation": "జాతీయ పాఠ్యాంశాల చట్రం (NCF) 2005 యొక్క ఒక ముఖ్య సూత్రం పాఠశాల జ్ఞానాన్ని పిల్లల తరగతి గది వెలుపల జీవితంతో అనుసంధానించడం. ఈ నిర్మాణాత్మక విధానం అంటే పాఠ్యపుస్తకాలు మరియు కార్యకలాపాలు ఒకే మూలం నుండి వాస్తవాలను బట్టీ పట్టడానికి బదులుగా, భావనలను వారి వ్యక్తిగత అనుభవాలు మరియు పర్యావరణంతో సంబంధం కల్పించడం ద్వారా విద్యార్థులు తమ సొంత అవగాహనను నిర్మించుకోవడానికి సహాయపడే సాధనాలుగా ఉపయోగపడాలి."
  },
  {
    "id": 146,
    "question": "Choose the correct sequence of the following steps in a scientific method\nA) Experimentation\nB) Identification and defining a problem\nC) Formulation of hypothesis\nD) Drawing conclusions and making generalisations\n(TSTET 08 Jan 2025)\nశాస్త్రీయ పద్ధతిలోని కింది సోపానాల సరైన క్రమాన్ని ఎంచుకోండి\nA) ప్రయోగం చేయడం\nB) సమస్యను గుర్తించడం మరియు నిర్వచించడం\nC) పరికల్పనను రూపొందించడం\nD) ముగింపులు మరియు సాధారణీకరణలు చేయడం",
    "options": [
      "A, B, C, D",
      "C, B, A, D",
      "B, A, D, C",
      "B, C, A, D"
    ],
    "correctAnswer": 3,
    "explanation": "శాస్త్రీయ పద్ధతి యొక్క తార్కిక క్రమం ఈ క్రింది విధంగా ఉంటుంది: మొదట, ఒక ప్రశ్న లేవనెత్తబడుతుంది లేదా ఒక సమస్య గుర్తించబడి నిర్వచించబడుతుంది (B). తరువాత, పరికల్పన అని పిలువబడే ఒక పరీక్షించదగిన వివరణ లేదా అంచనా రూపొందించబడుతుంది (C). అప్పుడు, ఈ పరికల్పనను పరీక్షించడానికి మరియు డేటాను సేకరించడానికి ఒక ప్రయోగం నిర్వహించబడుతుంది (A). చివరగా, ఫలితాలను విశ్లేషించి ముగింపులు మరియు సాధారణీకరణలు చేయబడతాయి (D)."
  },
  {
    "id": 147,
    "question": "If a teacher of EVS is using stories and poems for explaining various concepts. the most suitable and appropriate logic behind this is\nA) to inculcate creativity in students to write and sing stories/poems of their own.\nB) to complete the syllabus before time.\nC) to make the children aware of the diversity in language and culture.\nD) to make her lessons more interactive, enjoyable and interesting.\n(TSTET 08 Jan 2025)\nఒక EVS ఉపాధ్యాయురాలు వివిధ భావనలను వివరించడానికి కథలు మరియు పద్యాలను ఉపయోగిస్తుంటే. దీని వెనుక అత్యంత అనువైన మరియు సముచితమైన తర్కం\nA) విద్యార్థులలో వారి స్వంత కథలు/పద్యాలు రాయడానికి మరియు పాడటానికి సృజనాత్మకతను పెంపొందించడం.\nB) సిలబస్‌ను సమయానికి ముందే పూర్తి చేయడం.\nC) పిల్లలకు భాష మరియు సంస్కృతిలో వైవిధ్యాన్ని తెలియజేయడం.\nD) ఆమె పాఠాలను మరింత ఇంటరాక్టివ్‌గా, ఆనందదాయకంగా మరియు ఆసక్తికరంగా చేయడం.",
    "options": [
      "C & D only\nC & D మాత్రమే",
      "A, C & D only\nA, C & D మాత్రమే",
      "B, C & D only\nB, C & D మాత్రమే",
      "A, B, C, D\nA, B, C, D"
    ],
    "correctAnswer": 1,
    "explanation": "EVS తరగతిలో కథలు మరియు పద్యాలను ఉపయోగించడం ఒక మంచి బోధనా వ్యూహం. ఇది పాఠాలను మరింత ఆకర్షణీయంగా మరియు ఆసక్తికరంగా చేస్తుంది (D), సాంస్కృతిక మరియు భాషా వైవిధ్యాన్ని పరిచయం చేయడానికి సహాయపడుతుంది (C), మరియు విద్యార్థుల స్వంత సృజనాత్మకతను ప్రేరేపించగలదు (A). సిలబస్‌ను పూర్తి చేయడం (B) ఒక పరిపాలనా లక్ష్యం, ఈ బోధనా పద్ధతిని ఎంచుకోవడానికి ఒక బోధనా కారణం కాదు. అందువల్ల, A, C, మరియు D అన్నీ చెల్లుబాటు అయ్యే విద్యా తర్కాలు."
  },
  {
    "id": 148,
    "question": "'Learning through activities, discovery and exploration in a child friendly manner and child centred manner' is the statement mentioned in this section/sub-section of Right to Education Act (RTE) - 2009 (TSTET 08 Jan 2025)\n'పిల్లల స్నేహపూర్వక మరియు పిల్లల కేంద్రిత పద్ధతిలో కార్యకలాపాలు, ఆవిష్కరణ మరియు అన్వేషణ ద్వారా నేర్చుకోవడం' అనే వాక్యం విద్యా హక్కు చట్టం (RTE) - 2009లోని ఈ సెక్షన్/ఉప-సెక్షన్‌లో పేర్కొనబడింది",
    "options": [
      "Section - 29 (1)\nసెక్షన్ - 29 (1)",
      "Section - 29 (2) (e)\nసెక్షన్ - 29 (2) (ఇ)",
      "Section - 29 (2) (g)\nసెక్షన్ - 29 (2) (జి)",
      "Section - 24 (2)\nసెక్షన్ - 24 (2)"
    ],
    "correctAnswer": 1,
    "explanation": "RTE చట్టం 2009లోని సెక్షన్ 29 పాఠ్యాంశాలు మరియు మూల్యాంకన విధానాలను వివరిస్తుంది. ప్రత్యేకంగా, సెక్షన్ 29(2) పాఠ్యాంశాలను నిర్దేశించేటప్పుడు విద్యా అధికార యంత్రాంగం దేనిని పరిగణనలోకి తీసుకోవాలో వివరిస్తుంది. ఉప-సెక్షన్ (ఇ) పాఠ్యాంశాలు 'పిల్లల స్నేహపూర్వక మరియు పిల్లల కేంద్రిత పద్ధతిలో కార్యకలాపాలు, ఆవిష్కరణ మరియు అన్వేషణ ద్వారా నేర్చుకోవడాన్ని' సులభతరం చేయాలని నిర్దేశిస్తుంది."
  },
  {
    "id": 149,
    "question": "An EVS teacher conducted Role play on Post master and Post man for class - 3 students. This activity comes under the following category of Edgar Dale Cone of Experience (TSTET 08 Jan 2025)\nఒక EVS ఉపాధ్యాయుడు 3వ తరగతి విద్యార్థుల కోసం పోస్ట్ మాస్టర్ మరియు పోస్ట్ మ్యాన్‌పై పాత్ర పోషణ నిర్వహించారు. ఈ కార్యాచరణ ఎడ్గార్ డేల్ అనుభవ శంకువులోని కింది వర్గం కిందకు వస్తుంది",
    "options": [
      "Demonstration\nప్రదర్శన",
      "Visual symbols\nదృశ్య చిహ్నాలు",
      "Dramatic Participation\nనాటకీయ భాగస్వామ్యం",
      "Motion pictures\nచలన చిత్రాలు"
    ],
    "correctAnswer": 2,
    "explanation": "ఎడ్గార్ డేల్ అనుభవ శంకువు అభ్యాస కార్యకలాపాలను వాటి అమూర్త స్థాయి ద్వారా వర్గీకరిస్తుంది. పాత్ర పోషణ అనేది 'నాటకీయ భాగస్వామ్యం' యొక్క ఒక రూపం. ఇది అత్యంత ప్రభావవంతమైన, మూర్త అభ్యాస అనుభవంగా పరిగణించబడుతుంది ఎందుకంటే విద్యార్థులు చురుకుగా ఒక వాస్తవ-జీవిత పరిస్థితిని అనుకరిస్తున్నారు, ఇది శంకువు యొక్క ఆధార భాగంలో ఇతర ప్రత్యక్ష, ఉద్దేశపూర్వక అనుభవాలతో పాటు ఉంటుంది."
  },
  {
    "id": 150,
    "question": "A social science teacher wanted to introduce a new topic to the students. The teacher divided the students into small heterogeneous groups in terms of both socio-economic and natural abilities. Then the teacher named the groups with the names of some Indian states and made them do certain activities specific to those states. Which topic did the teacher want to introduce to the students here? (TSTET 08 Jan 2025)\nఒక సాంఘిక శాస్త్ర ఉపాధ్యాయురాలు విద్యార్థులకు ఒక కొత్త అంశాన్ని పరిచయం చేయాలనుకున్నారు. ఆమె విద్యార్థులను సామాజిక-ఆర్థిక మరియు సహజ సామర్థ్యాల పరంగా చిన్న చిన్న భిన్న సమూహాలుగా విభజించారు. తరువాత, ఆ సమూహాలకు కొన్ని భారత రాష్ట్రాల పేర్లు పెట్టి, ఆ రాష్ట్రాలకు సంబంధించిన కొన్ని నిర్దిష్ట కార్యకలాపాలను చేయించారు. ఇక్కడ ఉపాధ్యాయురాలు విద్యార్థులకు ఏ అంశాన్ని పరిచయం చేయాలనుకుంటున్నారు?",
    "options": [
      "India in modern times\nఆధునిక కాలంలో భారతదేశం",
      "Economic growth\nఆర్థిక వృద్ధి",
      "India - Diversity\nభారతదేశం - భిన్నత్వం",
      "Gender discrimination\nలింగ వివక్ష"
    ],
    "correctAnswer": 2,
    "explanation": "ఉపాధ్యాయురాలి కార్యాచరణ రూపకల్పన భారతదేశంలోని భిన్నత్వమనే అంశాన్ని నేరుగా ప్రస్తావిస్తుంది. సమూహాలకు వేర్వేరు రాష్ట్రాలను కేటాయించి, ఆ రాష్ట్రాలకు సంబంధించిన నిర్దిష్ట కార్యకలాపాలను (ఉదా., సంస్కృతి, భాష, ఆహారం, సంప్రదాయాలు) అన్వేషించేలా చేయడం ద్వారా, ఉపాధ్యాయురాలు విద్యార్థులకు భారతదేశంలోని వివిధ ప్రాంతాల యొక్క గొప్ప మరియు వైవిధ్యభరితమైన స్వభావాన్ని అర్థం చేసుకోవడానికి మరియు ప్రశంసించడానికి ఒక అనుభవపూర్వక అభ్యాస అవకాశాన్ని సృష్టిస్తున్నారు."
  },
  {
    "id": 151,
    "question": "The food item that contains highest amount of potassium among the following is (TSTET 10 Jan 2025)\nకింది వాటిలో అత్యధికంగా పొటాషియం ఉన్న ఆహార పదార్థం",
    "options": [
      "Apple\nఆపిల్",
      "Banana\nఅరటిపండు",
      "Rice\nబియ్యం",
      "Chicken\nచికెన్"
    ],
    "correctAnswer": 1,
    "explanation": "అరటిపండ్లు పొటాషియంకు అద్భుతమైన మూలంగా విస్తృతంగా గుర్తించబడ్డాయి. పొటాషియం నరాల సంకేతాలు మరియు కండరాల సంకోచాల వంటి శారీరక విధులకు కీలకమైన ఖనిజం మరియు ఎలక్ట్రోలైట్. ఆపిల్, బియ్యం మరియు చికెన్‌లో పొటాషియం ఉన్నప్పటికీ, అరటిపండ్లలో సాధారణంగా గణనీయంగా అధిక సాంద్రత ఉంటుంది, ఇది ఇచ్చిన ఎంపికలలో పొటాషియం అధికంగా ఉండే ఆహారం కోసం ఉత్తమ ఎంపికగా నిలుస్తుంది."
  },
  {
    "id": 152,
    "question": "Among the following, the protein found in egg whites is (TSTET 10 Jan 2025)\nకింది వాటిలో, గుడ్డు తెల్లసొనలో కనిపించే ప్రోటీన్",
    "options": [
      "Albumin\nఅల్బుమిన్",
      "Casein\nకేసిన్",
      "Gluten\nగ్లూటెన్",
      "Collagen\nకొల్లాజెన్"
    ],
    "correctAnswer": 0,
    "explanation": "అల్బుమిన్ గుడ్డు తెల్లసొనలో కనిపించే ప్రాథమిక ప్రోటీన్, దీనిని ఎగ్ అల్బుమెన్ అని కూడా అంటారు. కేసిన్ పాలలో ప్రధాన ప్రోటీన్, గ్లూటెన్ గోధుమ మరియు సంబంధిత ధాన్యాలలో కనిపించే ప్రోటీన్ సమ్మేళనం, మరియు కొల్లాజెన్ జంతువుల చర్మం మరియు ఇతర బంధన కణజాలాలలో కనిపించే ప్రధాన నిర్మాణ ప్రోటీన్."
  },
  {
    "id": 153,
    "question": "Read the following statements and choose the correct answer\nStatement I: Animal fibres contain proteins, while plant fibres contain carbohydrates.\nStatement II: Fibers obtained from animals are artificial fibres. (TSTET 10 Jan 2025)\nకింది ప్రకటనలను చదివి సరైన సమాధానాన్ని ఎంచుకోండి\nప్రకటన I: జంతువుల ఫైబర్‌లలో ప్రోటీన్లు ఉంటాయి, మొక్కల ఫైబర్‌లలో కార్బోహైడ్రేట్లు ఉంటాయి.\nప్రకటన II: జంతువుల నుండి పొందిన ఫైబర్‌లు కృత్రిమ ఫైబర్‌లు.",
    "options": [
      "Both Statement I and Statement II are true\nప్రకటన I మరియు ప్రకటన II రెండూ నిజం",
      "Both Statement I and Statement II are false\nప్రకటన I మరియు ప్రకటన II రెండూ తప్పు",
      "Statement I is true and Statement II is false\nప్రకటన I నిజం మరియు ప్రకటన II తప్పు",
      "Statement I is false and Statement II is true\nప్రకటన I తప్పు మరియు ప్రకటన II నిజం"
    ],
    "correctAnswer": 2,
    "explanation": "ప్రకటన I నిజం ఎందుకంటే ఉన్ని మరియు పట్టు వంటి జంతు ఫైబర్‌లు ప్రోటీన్ ఆధారితమైనవి, అయితే పత్తి మరియు నార వంటి మొక్కల ఫైబర్‌లు ప్రధానంగా సెల్యులోజ్‌తో తయారవుతాయి, ఇది కార్బోహైడ్రేట్. ప్రకటన II తప్పు ఎందుకంటే జంతువుల నుండి వచ్చే ఫైబర్‌లు సహజ ఫైబర్‌లు. నైలాన్ మరియు పాలిస్టర్ వంటి కృత్రిమ ఫైబర్‌లు సింథటిక్‌గా తయారు చేయబడతాయి."
  },
  {
    "id": 154,
    "question": "The practice of growing more than one crop in the same place and at the same time called (TSTET 10 Jan 2025)\nఒకే స్థలంలో మరియు ఒకే సమయంలో ఒకటి కంటే ఎక్కువ పంటలను పండించే పద్ధతిని ఏమంటారు",
    "options": [
      "Mono-cropping\nఏకపంట",
      "Multi-cropping\nబహుళ పంటలు",
      "Intercropping\nఅంతర పంట",
      "Crop rotation\nపంట మార్పిడి"
    ],
    "correctAnswer": 2,
    "explanation": "అంతర పంట అనేది ఒకే పొలంలో ఏకకాలంలో రెండు లేదా అంతకంటే ఎక్కువ పంటలను పండించే వ్యవసాయ పద్ధతి. ఈ పద్ధతి దిగుబడిని పెంచుతుంది మరియు వనరులను మెరుగ్గా ఉపయోగించుకోవచ్చు. ఏకపంట అనేది ఒకే పంటను పండించడం, బహుళ పంటలు అనేది ఒక సంవత్సరంలో బహుళ పంటలను పండించడం కోసం ఒక విస్తృత పదం (దీనిలో అంతర పంట కూడా ఉండవచ్చు), మరియు పంట మార్పిడి అనేది వరుసగా వేర్వేరు పంటలను పండించడం."
  },
  {
    "id": 155,
    "question": "As an environmentalist, read the following suggestions for protecting national monuments and identify the correct suggestions.\nA) Implementing regulations to control tourism, pollution, and urban development near national monuments.\nB) Allowing unrestricted tourism and infrastructure development around national monuments to boost the economy.\nC) Promoting sustainable tourism practices while limiting pollution and development near monuments.\nD) Reducing environmental protection efforts to encourage economic growth around national monuments. (TSTET 10 Jan 2025)\nఒక పర్యావరణవేత్తగా, జాతీయ స్మారక చిహ్నాలను పరిరక్షించడానికి క్రింది సూచనలను చదివి, సరైన సూచనలను గుర్తించండి.\nA) జాతీయ స్మారక చిహ్నాల దగ్గర పర్యాటకం, కాలుష్యం మరియు పట్టణ అభివృద్ధిని నియంత్రించడానికి నిబంధనలను అమలు చేయడం.\nB) ఆర్థిక వ్యవస్థను పెంచడానికి జాతీయ స్మారక చిహ్నాల చుట్టూ అనియంత్రిత పర్యాటకం మరియు మౌలిక సదుపాయాల అభివృద్ధికి అనుమతించడం.\nC) స్మారక చిహ్నాల దగ్గర కాలుష్యం మరియు అభివృద్ధిని పరిమితం చేస్తూ స్థిరమైన పర్యాటక పద్ధతులను ప్రోత్సహించడం.\nD) జాతీయ స్మారక చిహ్నాల చుట్టూ ఆర్థిక వృద్ధిని ప్రోత్సహించడానికి పర్యావరణ పరిరక్షణ ప్రయత్నాలను తగ్గించడం.",
    "options": [
      "A & B only\nA & B మాత్రమే",
      "B & C only\nB & C మాత్రమే",
      "C & D only\nC & D మాత్రమే",
      "A & C only\nA & C మాత్రమే"
    ],
    "correctAnswer": 3,
    "explanation": "పర్యావరణవేత్త దృక్కోణం నుండి సరైన సూచనలు A మరియు C. నిబంధనలను అమలు చేయడం (A) మరియు స్థిరమైన పర్యాటకాన్ని ప్రోత్సహించడం (C) స్మారక చిహ్నాలను పరిరక్షించడానికి చురుకైన చర్యలు. దీనికి విరుద్ధంగా, అనియంత్రిత అభివృద్ధిని అనుమతించడం (B) మరియు పర్యావరణ పరిరక్షణను తగ్గించడం (D) ఈ సాంస్కృతిక వారసత్వ ప్రదేశాల క్షీణతకు మరియు నష్టానికి దారితీస్తుంది."
  },
  {
    "id": 156,
    "question": "Identify the diseases primarily spread through air and water respectively from the following (TSTET 10 Jan 2025)\nకింది వాటి నుండి వరుసగా గాలి మరియు నీటి ద్వారా వ్యాపించే వ్యాధులను గుర్తించండి",
    "options": [
      "Tuberculosis and Cholera\nక్షయ మరియు కలరా",
      "Malaria and HIV/AIDS\nమలేరియా మరియు HIV/AIDS",
      "Filaria and Hepatitis A\nఫైలేరియా మరియు హెపటైటిస్ A",
      "Dengue and Typhoid\nడెంగ్యూ మరియు టైఫాయిడ్"
    ],
    "correctAnswer": 0,
    "explanation": "క్షయ అనేది దగ్గు లేదా తుమ్ముల నుండి శ్వాసకోశ బిందువుల ద్వారా వ్యాపించే బ్యాక్టీరియా వల్ల కలిగే గాలి ద్వారా సంక్రమించే వ్యాధి. కలరా అనేది విబ్రియో కలరే అనే బ్యాక్టీరియాతో కలుషితమైన నీరు లేదా ఆహారాన్ని తీసుకోవడం వల్ల కలిగే ఒక ప్రామాణిక నీటి ద్వారా సంక్రమించే వ్యాధి. ఈ జత వరుసగా గాలి మరియు నీటి ద్వారా సంక్రమించడాన్ని సరిగ్గా సూచిస్తుంది."
  },
  {
    "id": 157,
    "question": "Identify the renewable energy resource derived from animals and plants (TSTET 10 Jan 2025)\nజంతువులు మరియు మొక్కల నుండి పొందిన పునరుత్పాదక ఇంధన వనరును గుర్తించండి",
    "options": [
      "Coal\nబొగ్గు",
      "Nuclear Energy\nఅణుశక్తి",
      "Natural Gas\nసహజ వాయువు",
      "Biomass\nజీవపదార్థం (బయోమాస్)"
    ],
    "correctAnswer": 3,
    "explanation": "జీవపదార్థం (బయోమాస్) అనేది సేంద్రీయ పదార్థాల నుండి పొందిన పునరుత్పాదక ఇంధన వనరు, ఇందులో మొక్కలు (కలప మరియు పంటలు వంటివి) మరియు జంతువులు (ఎరువు వంటివి) ఉంటాయి. బొగ్గు మరియు సహజ వాయువు పునరుత్పాదకత లేని శిలాజ ఇంధనాలు. అణుశక్తి కూడా యురేనియం వంటి పరిమిత వనరులపై ఆధారపడి ఉన్నందున పునరుత్పాదకత లేనిదిగా పరిగణించబడుతుంది."
  },
  {
    "id": 158,
    "question": "Cross pollination means (TSTET 10 Jan 2025)\nపరపరాగ సంపర్కం అంటే",
    "options": [
      "Pollination that occurs within the same flower\nఒకే పువ్వులో జరిగే పరాగసంపర్కం",
      "Pollination that occurs between two flowers of the same species\nఒకే జాతికి చెందిన రెండు పువ్వుల మధ్య జరిగే పరాగసంపర్కం",
      "Pollination that occurs through artificial means\nకృత్రిమ మార్గాల ద్వారా జరిగే పరాగసంపర్కం",
      "Pollination that occurs between flowers of different plants of the different species\nవివిధ జాతుల వేర్వేరు మొక్కల పువ్వుల మధ్య జరిగే పరాగసంపర్కం"
    ],
    "correctAnswer": 3,
    "explanation": "పరపరాగ సంపర్కం అనేది ఒక పువ్వు యొక్క పరాగకోశం నుండి మరొక పువ్వు యొక్క కీలాగ్రానికి పరాగ రేణువుల బదిలీ. ఇది వివిధ జాతుల మధ్య జరిగినప్పుడు, దానిని సంకరీకరణం అంటారు. ఒకే జాతికి చెందిన వేర్వేరు మొక్కల మధ్య కూడా పరపరాగ సంపర్కం జరుగుతుంది (ఎంపిక 2), అయితే ఎంపిక 4 ఒక సంకర సంతానానికి దారితీసే మరింత నిర్దిష్ట రకమైన పరపరాగ సంపర్కాన్ని వివరిస్తుంది. ఎంపిక 1 ఆత్మపరాగ సంపర్కాన్ని వివరిస్తుంది."
  },
  {
    "id": 159,
    "question": "Among the following, which is NOT a species of Indian honey bee (TSTET 10 Jan 2025)\nకింది వాటిలో, భారతీయ తేనెటీగ జాతి కానిది ఏది",
    "options": [
      "Apis cerana indica\nఏపిస్ సెరానా ఇండికా",
      "Apis mellifera\nఏపిస్ మెల్లిఫెరా",
      "Apis dorsata\nఏపిస్ డోర్సాటా",
      "Apis florea\nఏపిస్ ఫ్లోరియా"
    ],
    "correctAnswer": 1,
    "explanation": "ఏపిస్ మెల్లిఫెరా, సాధారణంగా యూరోపియన్ లేదా పాశ్చాత్య తేనెటీగ అని పిలుస్తారు, ఇది భారతదేశానికి చెందినది కాదు. వాణిజ్య తేనెటీగల పెంపకంలో దాని అధిక తేనె దిగుబడి కోసం దేశంలోకి ప్రవేశపెట్టబడింది. ఏపిస్ సెరానా ఇండికా (భారతీయ తేనెటీగ), ఏపిస్ డోర్సాటా (పెద్ద రాతి తేనెటీగ), మరియు ఏపిస్ ఫ్లోరియా (చిన్న తేనెటీగ) అన్నీ భారతదేశానికి చెందిన జాతులు."
  },
  {
    "id": 160,
    "question": "The toxic gas released during the Bhopal Gas Tragedy (TSTET 10 Jan 2025)\nభోపాల్ గ్యాస్ దుర్ఘటన సమయంలో విడుదలైన విష వాయువు",
    "options": [
      "Carbon dioxide\nకార్బన్ డయాక్సైడ్",
      "Hydrogen sulphide\nహైడ్రోజన్ సల్ఫైడ్",
      "Nitrogen oxide\nనైట్రోజన్ ఆక్సైడ్",
      "Methyl isocyanate\nమిథైల్ ఐసోసైనేట్"
    ],
    "correctAnswer": 3,
    "explanation": "డిసెంబర్ 1984లో జరిగిన భోపాల్ గ్యాస్ దుర్ఘటన, ఒక పురుగుమందుల ప్లాంట్ నుండి మిథైల్ ఐసోసైనేట్ (MIC) వాయువు విడుదల కావడం వల్ల సంభవించిన ఒక విపత్కర పారిశ్రామిక ప్రమాదం. ఈ అత్యంత విషపూరిత వాయువు వేలాది తక్షణ మరణాలకు మరియు ప్రాణాలతో బయటపడిన వారికి గణనీయమైన దీర్ఘకాలిక ఆరోగ్య సమస్యలకు కారణమైంది."
  },
  {
    "id": 161,
    "question": "The main function of the kidney is (TSTET 10 Jan 2025)\nమూత్రపిండాల ప్రధాన విధి",
    "options": [
      "To produce insulin\nఇన్సులిన్‌ను ఉత్పత్తి చేయడం",
      "To regulate body temperature\nశరీర ఉష్ణోగ్రతను నియంత్రించడం",
      "To filter blood and remove waste products\nరక్తాన్ని వడపోసి వ్యర్థ పదార్థాలను తొలగించడం",
      "To produce red blood cells\nఎర్ర రక్త కణాలను ఉత్పత్తి చేయడం"
    ],
    "correctAnswer": 2,
    "explanation": "మానవ శరీరంలో మూత్రపిండాల ప్రాథమిక పాత్ర వడపోత వ్యవస్థగా పనిచేయడం. అవి రక్తం నుండి వ్యర్థ పదార్థాలు, అదనపు లవణాలు మరియు నీటిని వడపోస్తాయి, అవి తర్వాత మూత్రంగా విసర్జించబడతాయి. ఇన్సులిన్ క్లోమం ద్వారా ఉత్పత్తి చేయబడుతుంది, ఉష్ణోగ్రత నియంత్రణ మెదడు ద్వారా నిర్వహించబడుతుంది, మరియు ఎర్ర రక్త కణాలు ఎముక మజ్జలో ఉత్పత్తి చేయబడతాయి."
  },
  {
    "id": 162,
    "question": "Read the following statements and choose the correct ones.\nStatement A: Blood helps us to regulate the body temperature and to fight against the disease-causing germs.\nStatement B: Blood is a fluid tissue made of plasma.\nStatement C: Blood contains three types of blood cells RBC, WBC, Blood Platelets. (TSTET 10 Jan 2025)\nకింది ప్రకటనలను చదివి సరైన వాటిని ఎంచుకోండి.\nప్రకటన A: రక్తం శరీర ఉష్ణోగ్రతను నియంత్రించడానికి మరియు వ్యాధి కారక క్రిములతో పోరాడటానికి సహాయపడుతుంది.\nప్రకటన B: రక్తం ప్లాస్మాతో తయారైన ఒక ద్రవ కణజాలం.\nప్రకటన C: రక్తంలో మూడు రకాల రక్త కణాలు ఉంటాయి: RBC, WBC, రక్త ఫలకికలు.",
    "options": [
      "All the statements are true\nఅన్ని ప్రకటనలు నిజం",
      "Statements A and B are only true\nప్రకటనలు A మరియు B మాత్రమే నిజం",
      "Statements B and C are only true\nప్రకటనలు B మరియు C మాత్రమే నిజం",
      "Statements A and C are only true\nప్రకటనలు A మరియు C మాత్రమే నిజం"
    ],
    "correctAnswer": 0,
    "explanation": "మూడు ప్రకటనలు వాస్తవంగా సరైనవి. ప్రకటన A: రక్తం వేడిని పంపిణీ చేయడం ద్వారా శరీర ఉష్ణోగ్రతను నిర్వహించడానికి సహాయపడుతుంది, మరియు తెల్ల రక్త కణాలు అంటువ్యాధులతో పోరాడతాయి. ప్రకటన B: రక్తం దాని ద్రవ మాత్రికగా ప్లాస్మాతో ద్రవ బంధన కణజాలంగా వర్గీకరించబడింది. ప్రకటన C: రక్తం యొక్క మూడు ప్రధాన కణ భాగాలైన ఎర్ర రక్త కణాలు (ఎరిథ్రోసైట్లు), తెల్ల రక్త కణాలు (ల్యూకోసైట్లు), మరియు ఫలకికలు (థ్రోంబోసైట్లు)."
  },
  {
    "id": 163,
    "question": "These climatic regions are famous for cultivation of fruits like olive, figs, grapes, oranges etc. (TSTET 10 Jan 2025)\nఈ శీతోష్ణస్థితి ప్రాంతాలు ఆలివ్, అత్తి, ద్రాక్ష, నారింజ వంటి పండ్ల సాగుకు ప్రసిద్ధి చెందాయి.",
    "options": [
      "The Monsoon Climatic Regions\nరుతుపవన శీతోష్ణస్థితి ప్రాంతాలు",
      "The tropical Climatic Regions\nఉష్ణమండల శీతోష్ణస్థితి ప్రాంతాలు",
      "The Mediterranean Climatic Regions\nమధ్యధరా శీతోష్ణస్థితి ప్రాంతాలు",
      "Arid Climatic Regions\nశుష్క శీతోష్ణస్థితి ప్రాంతాలు"
    ],
    "correctAnswer": 2,
    "explanation": "మధ్యధరా శీతోష్ణస్థితి, దాని లక్షణాలైన వేడి, పొడి వేసవికాలం మరియు చల్లని, తడి శీతాకాలాలతో, సిట్రస్ పండ్లు (నారింజ), ద్రాక్ష, ఆలివ్ మరియు అత్తి పండ్ల సాగుకు అనువైనది. ఈ పంటలు మధ్యధరా సముద్రం, కాలిఫోర్నియా మరియు ఆస్ట్రేలియాలోని కొన్ని ప్రాంతాల చుట్టూ ఉన్న ప్రాంతాల యొక్క ప్రత్యేక ఉత్పత్తులు."
  },
  {
    "id": 164,
    "question": "These regions of Africa receive heavy rainfall (TSTET 10 Jan 2025)\nఆఫ్రికాలోని ఈ ప్రాంతాలలో భారీ వర్షపాతం ఉంటుంది",
    "options": [
      "Central and Western Africa\nమధ్య మరియు పశ్చిమ ఆఫ్రికా",
      "South-western Africa\nనైరుతి ఆఫ్రికా",
      "North-western Africa Regions\nవాయువ్య ఆఫ్రికా ప్రాంతాలు",
      "South Eastern Africa Regions\nఆగ్నేయ ఆఫ్రికా ప్రాంతాలు"
    ],
    "correctAnswer": 0,
    "explanation": "మధ్య మరియు పశ్చిమ ఆఫ్రికాలోని భూమధ్యరేఖ ప్రాంతాలు, ముఖ్యంగా కాంగో బేసిన్, ఉష్ణమండల వర్షారణ్య శీతోష్ణస్థితిని కలిగి ఉంటాయి. ఈ శీతోష్ణస్థితి మండలం అధిక ఉష్ణోగ్రతలు మరియు ఏడాది పొడవునా సమృద్ధిగా, భారీ వర్షపాతాన్ని అనుభవిస్తుంది, ఇది దట్టమైన అటవీ పర్యావరణ వ్యవస్థలకు మద్దతు ఇస్తుంది."
  },
  {
    "id": 165,
    "question": "Which of the following statement best describes the term \"waves\"? (TSTET 10 Jan 2025)\nకింది వాటిలో ఏ వాక్యం \"తరంగాలు\" అనే పదాన్ని ఉత్తమంగా వివరిస్తుంది?",
    "options": [
      "Moving of sea water from one part to another in big streams\nసముద్రపు నీరు ఒక భాగం నుండి మరొక భాగానికి పెద్ద ప్రవాహాలుగా కదలడం",
      "The rhythmic rise and fall of the water in the ocean every day\nప్రతిరోజూ సముద్రంలో నీటి యొక్క లయబద్ధమైన పెరుగుదల మరియు పతనం",
      "The rising and falling of water on the surface of the ocean,\nసముద్ర ఉపరితలంపై నీరు పెరగడం మరియు తగ్గడం",
      "The flowing of water in one definite direction\nఒక నిర్దిష్ట దిశలో నీరు ప్రవహించడం"
    ],
    "correctAnswer": 2,
    "explanation": "తరంగాలు సముద్రం, లేదా సరస్సు ఉపరితలంపై నీటి యొక్క ఉత్థాన పతన కదలిక లేదా పైకి క్రిందికి కదలడం అని ఉత్తమంగా వర్ణించబడ్డాయి. అవి సాధారణంగా గాలి తన శక్తిని నీటికి బదిలీ చేయడం వల్ల సంభవిస్తాయి. ఎంపిక 1 ప్రవాహాలను వివరిస్తుంది, మరియు ఎంపిక 2 ఆటుపోట్లను వివరిస్తుంది."
  },
  {
    "id": 166,
    "question": "This mineral is used in cutting and polishing industry, decorative panels, monuments and flooring panels (TSTET 10 Jan 2025)\nఈ ఖనిజం కటింగ్ మరియు పాలిషింగ్ పరిశ్రమ, అలంకార ప్యానెల్లు, స్మారక చిహ్నాలు మరియు ఫ్లోరింగ్ ప్యానెళ్లలో ఉపయోగించబడుతుంది",
    "options": [
      "Lime Stone\nసున్నపురాయి",
      "Granite\nగ్రానైట్",
      "Manganese\nమాంగనీస్",
      "Barytes\nబరైటీస్"
    ],
    "correctAnswer": 1,
    "explanation": "గ్రానైట్ ఒక గట్టి, స్ఫటికాకార అగ్ని శిల, ఇది చాలా మన్నికైనది మరియు అధిక మెరుపు కోసం పాలిష్ చేయబడుతుంది. ఈ లక్షణాలు దీనిని స్మారక చిహ్నాలు, అలంకార భవన ప్యానెల్లు, కౌంటర్‌టాప్‌లు మరియు ఫ్లోర్ టైల్స్ కోసం ఒక ప్రసిద్ధ మరియు ప్రీమియం పదార్థంగా చేస్తాయి."
  },
  {
    "id": 167,
    "question": "In India, the share of agriculture in employment in between 1973-74 and 2017-2018 (TSTET 10 Jan 2025)\nభారతదేశంలో, 1973-74 మరియు 2017-2018 మధ్య ఉపాధిలో వ్యవసాయం వాటా",
    "options": [
      "has remained same\nఅదే విధంగా ఉంది",
      "has increased\nపెరిగింది",
      "has fallen down\nపడిపోయింది",
      "has increased at slow pace\nనెమ్మదిగా పెరిగింది"
    ],
    "correctAnswer": 2,
    "explanation": "1973 మరియు 2018 మధ్య, భారత ఆర్థిక వ్యవస్థ ఒక నిర్మాణాత్మక మార్పుకు గురైంది. పారిశ్రామిక మరియు సేవా రంగాలు పెరగడంతో, ఉపాధి కోసం వ్యవసాయంపై ఆధారపడటం తగ్గింది. ఈ కాలంలో వ్యవసాయంలో నిమగ్నమైన కార్మికుల వాటా గణనీయంగా పడిపోయింది, అయినప్పటికీ ఇది ఇప్పటికీ ఉపాధికి ప్రధాన వనరుగా ఉంది."
  },
  {
    "id": 168,
    "question": "Among the following foreign travellers, the last one to visit the Vijayanagara Empire was (TSTET 10 Jan 2025)\nకింది విదేశీ యాత్రికులలో, విజయనగర సామ్రాజ్యాన్ని సందర్శించిన చివరి వ్యక్తి",
    "options": [
      "Nicolo Conti\nనికోలో కాంటి",
      "Domingo Paes\nడొమింగో పేస్",
      "Abdul Razzak\nఅబ్దుల్ రజాక్",
      "Fernao Nuniz\nఫెర్నావో నునిజ్"
    ],
    "correctAnswer": 3,
    "explanation": "కాలక్రమానుసారంగా, నికోలో కాంటి సుమారు 1420లో, అబ్దుల్ రజాక్ 1440లలో, మరియు డొమింగో పేస్ సుమారు 1520లో సందర్శించారు. ఫెర్నావో నునిజ్, ఒక పోర్చుగీస్ గుర్రపు వ్యాపారి, 1529 మరియు 1542 మధ్య అచ్యుత దేవరాయ పాలనలో సందర్శించారు, ఇది సామ్రాజ్యం పతనానికి ముందు ఈ నలుగురు యాత్రికులలో చివరి వ్యక్తిగా నిలిచింది."
  },
  {
    "id": 169,
    "question": "Among the following Mughal Emperors, this Mughal emperor introduced cannons and Guns in Indian Warfare (TSTET 10 Jan 2025)\nకింది మొఘల్ చక్రవర్తులలో, ఈ మొఘల్ చక్రవర్తి భారత యుద్ధరంగంలో ఫిరంగులు మరియు తుపాకులను ప్రవేశపెట్టారు",
    "options": [
      "Akbar\nఅక్బర్",
      "Humayun\nహుమాయున్",
      "Babur\nబాబర్",
      "Aurangajeb\nఔరంగజేబు"
    ],
    "correctAnswer": 2,
    "explanation": "భారతదేశంలో మొఘల్ సామ్రాజ్య స్థాపకుడైన బాబర్, భారత యుద్ధరంగంలో తుపాకులు, మ్యాచ్‌లాక్‌లు మరియు ఫిరంగులతో సహా అగ్ని ఆయుధాలను సమర్థవంతంగా ప్రవేశపెట్టడం మరియు ఉపయోగించడం కోసం ఘనత పొందారు. ఈ సైనిక సాంకేతికత 1526లో మొదటి పానిపట్ యుద్ధంలో అతని విజయానికి నిర్ణయాత్మక పాత్ర పోషించింది."
  },
  {
    "id": 170,
    "question": "Under the Zamindari System, the main role of Zamindars was (TSTET 10 Jan 2025)\nజమిందారీ వ్యవస్థ కింద, జమిందార్ల ప్రధాన పాత్ర",
    "options": [
      "To collect land revenue from the peasants and also to act as intermediaries between the Government and the Peasants\nరైతుల నుండి భూమి శిస్తును వసూలు చేయడం మరియు ప్రభుత్వం మరియు రైతుల మధ్య మధ్యవర్తులుగా వ్యవహరించడం",
      "To provide irrigation facilities to the agricultural lands with the state funds\nరాష్ట్ర నిధులతో వ్యవసాయ భూములకు నీటిపారుదల సౌకర్యాలు కల్పించడం",
      "To collect the entire production from the farmers and give small portion of it for their livelihood\nరైతుల నుండి మొత్తం ఉత్పత్తిని వసూలు చేసి, వారి జీవనోపాధి కోసం దానిలో చిన్న భాగాన్ని ఇవ్వడం",
      "To encourage the farmers to produce more by making use of the available irrigation facilities\nఅందుబాటులో ఉన్న నీటిపారుదల సౌకర్యాలను ఉపయోగించుకుని ఎక్కువ ఉత్పత్తి చేయడానికి రైతులను ప్రోత్సహించడం"
    ],
    "correctAnswer": 0,
    "explanation": "జమిందారీ వ్యవస్థ, ముఖ్యంగా బ్రిటిష్ వారిచే స్థాపించబడినది, జమిందార్లను భూస్వాములుగా నియమించింది. వారి ప్రాథమిక బాధ్యత భూమిని సాగు చేసే రైతుల నుండి ఆదాయాన్ని (అద్దె) వసూలు చేయడం మరియు నిర్ణీత మొత్తాన్ని రాష్ట్రానికి చెల్లించడం, తద్వారా మధ్యవర్తులుగా వ్యవహరించడం."
  },
  {
    "id": 171,
    "question": "Which of the following is called the \"anti-meridian\"? (TSTET 10 Jan 2025)\nకింది వాటిలో ఏది \"యాంటీ-మెరిడియన్\" అని పిలువబడుతుంది?",
    "options": [
      "The latitude passing through 0 latitude\n0 అక్షాంశం గుండా వెళుతున్న అక్షాంశం",
      "The longitude passing through Greenwich\nగ్రీన్‌విచ్ గుండా వెళుతున్న రేఖాంశం",
      "The longitude which is directly opposite to 0° longitude\n0° రేఖాంశానికి నేరుగా ఎదురుగా ఉన్న రేఖాంశం",
      "The latitudes which are parallel to the Equator\nభూమధ్యరేఖకు సమాంతరంగా ఉన్న అక్షాంశాలు"
    ],
    "correctAnswer": 2,
    "explanation": "యాంటీ-మెరిడియన్ అనేది 180° రేఖాంశం, ఇది భూగోళం యొక్క మరొక వైపున ప్రైమ్ మెరిడియన్ (0° రేఖాంశం)కు నేరుగా ఎదురుగా ఉంటుంది. ప్రైమ్ మెరిడియన్ మరియు యాంటీ-మెరిడియన్ కలిసి ఒక గొప్ప వృత్తాన్ని ఏర్పరుస్తాయి, ఇది భూమిని తూర్పు మరియు పశ్చిమ అర్ధగోళాలుగా విభజిస్తుంది. అంతర్జాతీయ తేదీ రేఖ యాంటీ-మెరిడియన్ దగ్గర ఉంది."
  },
  {
    "id": 172,
    "question": "Which of the following statement best describes the term \"Transpiration\"? (TSTET 10 Jan 2025)\nకింది వాటిలో ఏ వాక్యం \"భాష్పోత్సేకం\" అనే పదాన్ని ఉత్తమంగా వివరిస్తుంది?",
    "options": [
      "The amount of invisible water vapour present in the atmosphere\nవాతావరణంలో ఉన్న అదృశ్య నీటి ఆవిరి పరిమాణం",
      "The process of changing of water into water vapour\nనీరు నీటి ఆవిరిగా మారే ప్రక్రియ",
      "The process of changing of water vapour into water\nనీటి ఆవిరి నీరుగా మారే ప్రక్రియ",
      "The process of evaporation of water from the leaves of the plant\nమొక్క యొక్క ఆకుల నుండి నీరు ఆవిరి అయ్యే ప్రక్రియ"
    ],
    "correctAnswer": 3,
    "explanation": "భాష్పోత్సేకం అనేది మొక్కల ద్వారా వేర్ల నుండి ఆకుల దిగువన ఉన్న చిన్న రంధ్రాలకు (పత్రరంధ్రాలు) తేమను తీసుకువెళ్ళే జీవ ప్రక్రియ, ఇక్కడ అది ఆవిరిగా మారి వాతావరణంలోకి విడుదల చేయబడుతుంది. ఇది తప్పనిసరిగా మొక్కల ఆకుల నుండి నీరు ఆవిరి అవ్వడం."
  },
  {
    "id": 173,
    "question": "As per this article of the Indian Constitution, all individuals are free to follow their conscience and practice any religion (TSTET 10 Jan 2025)\nభారత రాజ్యాంగంలోని ఈ ఆర్టికల్ ప్రకారం, వ్యక్తులందరూ తమ మనస్సాక్షిని అనుసరించడానికి మరియు ఏ మతాన్నైనా ఆచరించడానికి స్వేచ్ఛ కలిగి ఉంటారు",
    "options": [
      "Art.31",
      "Art. 24",
      "Art. 25",
      "Art. 21"
    ],
    "correctAnswer": 2,
    "explanation": "భారత రాజ్యాంగంలోని ఆర్టికల్ 25 మనస్సాక్షి స్వేచ్ఛ మరియు మతాన్ని స్వేచ్ఛగా ప్రకటించడం, ఆచరించడం మరియు ప్రచారం చేయడం హామీ ఇస్తుంది. ఇది ప్రజా ஒழுங்கு, నైతికత మరియు ఆరోగ్యానికి లోబడి, అందరూ మనస్సాక్షి స్వేచ్ఛకు మరియు తమ మతాన్ని స్వేచ్ఛగా ప్రకటించడానికి, ఆచరించడానికి మరియు ప్రచారం చేయడానికి సమానంగా అర్హులని నిర్ధారిస్తుంది."
  },
  {
    "id": 174,
    "question": "Ramanujacharya propounded the doctrine of (TSTET 10 Jan 2025)\nరామానుజాచార్యులు ప్రతిపాదించిన సిద్ధాంతం",
    "options": [
      "Advaita\nఅద్వైతం",
      "Dvaita\nద్వైతం",
      "Veerashaiva\nవీరశైవం",
      "Vishishtadvaita\nవిశిష్టాద్వైతం"
    ],
    "correctAnswer": 3,
    "explanation": "రామానుజాచార్యులు ఒక ముఖ్య హిందూ వేదాంతి మరియు తత్వవేత్త, ఆయన వేదాంత తత్వశాస్త్రంలోని విశిష్టాద్వైత (అర్హతగల అద్వైతం) పాఠశాల యొక్క ప్రధాన ప్రతిపాదకుడు. అద్వైతం (అద్వైతం) శంకరులచే మరియు ద్వైతం (ద్వైతం) మధ్వాచార్యులచే ప్రతిపాదించబడింది."
  },
  {
    "id": 175,
    "question": "Which of the following options is a major objective of teaching EVS from classes 3 to 5? (TSTET 10 Jan 2025)\n3 నుండి 5 తరగతులకు EVS బోధన యొక్క ప్రధాన లక్ష్యం కింది వాటిలో ఏది?",
    "options": [
      "Preparing students for studying science in higher classes\nఉన్నత తరగతులలో సైన్స్ అధ్యయనం కోసం విద్యార్థులను సిద్ధం చేయడం",
      "Helping learners link classroom learning to life outside the school\nతరగతి గది అభ్యాసాన్ని పాఠశాల బయటి జీవితానికి అనుసంధానించడంలో అభ్యాసకులకు సహాయపడటం",
      "Developing in-depth understanding of the basic concepts of life\nజీవితం యొక్క ప్రాథమిక భావనలపై లోతైన అవగాహనను అభివృద్ధి చేయడం",
      "to provide hands-on experience activities to children to perform independently\nపిల్లలు స్వతంత్రంగా నిర్వహించడానికి చేతుల మీదుగా అనుభవపూర్వక కార్యకలాపాలను అందించడం"
    ],
    "correctAnswer": 1,
    "explanation": "ప్రాథమిక స్థాయిలో పర్యావరణ అధ్యయనాలను (EVS) బోధించడం యొక్క ప్రధాన లక్ష్యం విద్యను సందర్భోచితంగా మరియు అర్థవంతంగా మార్చడం. ఇది తరగతి గదిలో నేర్చుకున్న భావనలను వారి తక్షణ పర్యావరణం, కుటుంబం, సమాజం మరియు రోజువారీ అనుభవాలకు అనుసంధానించడంలో పిల్లలకు సహాయపడటం ద్వారా సాధించబడుతుంది, తద్వారా పాఠశాల మరియు బయటి జీవితం మధ్య అంతరాన్ని తగ్గించవచ్చు."
  },
  {
    "id": 176,
    "question": "An EVS teacher while preparing unit plan to teach about 'Animals' wrote the following as the following competencies/learning outcomes that the children would achieve after the unit is taught. Which of the following DOESN'T relate to the unit of concern? (TSTET 10 Jan 2025)\nఒక EVS ఉపాధ్యాయుడు 'జంతువులు' గురించి బోధించడానికి యూనిట్ ప్రణాళికను సిద్ధం చేస్తున్నప్పుడు, యూనిట్ బోధించిన తర్వాత పిల్లలు సాధించే క్రింది సామర్థ్యాలు/అభ్యాస ఫలితాలుగా రాశారు. కింది వాటిలో ఏది సంబంధిత యూనిట్‌కు సంబంధం లేదు?",
    "options": [
      "tells the similarities and differences between animals\nజంతువుల మధ్య సారూప్యతలు మరియు వ్యత్యాసాలను చెబుతుంది",
      "describes the features of different animals\nవివిధ జంతువుల లక్షణాలను వివరిస్తుంది",
      "tells about the food products we get from animals\nజంతువుల నుండి మనం పొందే ఆహార ఉత్పత్తుల గురించి చెబుతుంది",
      "explains how to tame wild animals\nవన్యప్రాణులను ఎలా మచ్చిక చేసుకోవాలో వివరిస్తుంది"
    ],
    "correctAnswer": 3,
    "explanation": "వన్యప్రాణులను ఎలా మచ్చిక చేసుకోవాలో పిల్లలకు బోధించడం ప్రాథమిక స్థాయిలో EVS యూనిట్ కోసం తగిన లేదా సురక్షితమైన విద్యా లక్ష్యం కాదు. ఇది అసాధ్యం మరియు ప్రమాదకరం. జంతువులను పోల్చడం, లక్షణాలను వివరించడం మరియు జంతు ఉత్పత్తులను గుర్తించడం వంటి ఇతర ఎంపికలు ఈ అంశానికి తగిన మరియు సంబంధిత అభ్యాస ఫలితాలు."
  },
  {
    "id": 177,
    "question": "Nitin, a class 5 student, always plays with building blocks. His teacher taught about heart in class by demonstration. Now, he is trying to assemble a model of heart out of the jumbled blocks. Here, he is (TSTET 10 Jan 2025)\nనితిన్, 5వ తరగతి విద్యార్థి, ఎల్లప్పుడూ బిల్డింగ్ బ్లాక్‌లతో ఆడుకుంటాడు. అతని ఉపాధ్యాయుడు ప్రదర్శన ద్వారా తరగతిలో గుండె గురించి బోధించాడు. ఇప్పుడు, అతను చిందరవందరగా ఉన్న బ్లాక్‌ల నుండి గుండె నమూనాను సమీకరించడానికి ప్రయత్నిస్తున్నాడు. ఇక్కడ, అతను",
    "options": [
      "observing\nపరిశీలిస్తున్నాడు",
      "synthesizing\nసంశ్లేషణ చేస్తున్నాడు",
      "applying\nఅన్వయిస్తున్నాడు",
      "understanding\nఅర్థం చేసుకుంటున్నాడు"
    ],
    "correctAnswer": 2,
    "explanation": "నితిన్ అన్వయం యొక్క అభిజ్ఞా ప్రక్రియలో నిమగ్నమై ఉన్నాడు. అతను తన ఉపాధ్యాయుడి ప్రదర్శన నుండి గుండె నిర్మాణం గురించి పొందిన నైరూప్య జ్ఞానాన్ని తీసుకుని, దానిని ఒక ఆచరణాత్మక, చేతుల మీదుగా చేసే పనికి అన్వయిస్తున్నాడు: అతని బ్లాక్‌లతో భౌతిక నమూనాను నిర్మించడం. ఇది సాధారణ అవగాహనకు మించి ఉన్నత స్థాయి అభ్యాసాన్ని ప్రదర్శిస్తుంది."
  },
  {
    "id": 178,
    "question": "Bathymetric maps represent (TSTET 10 Jan 2025)\nబాతిమెట్రిక్ పటాలు దేనిని సూచిస్తాయి",
    "options": [
      "Depth of the Seas\nసముద్రాల లోతు",
      "Nature of the Soil\nనేల స్వభావం",
      "Width of the Earth\nభూమి వెడల్పు",
      "Height of the Mountains\nపర్వతాల ఎత్తు"
    ],
    "correctAnswer": 0,
    "explanation": "బాతిమెట్రీ అనేది సముద్రాలు, మరియు సరస్సులు వంటి నీటి వనరుల లోతును కొలిచే శాస్త్రం. ఒక బాతిమెట్రిక్ పటం అందువల్ల ఒక స్థలాకృతి పటం యొక్క నీటి అడుగున సమానం, ఇది నీటి అడుగున భూభాగం యొక్క లోతులు మరియు ఆకారాన్ని సూచించడానికి కాంటూర్ రేఖలు లేదా రంగు కోడింగ్‌ను ఉపయోగిస్తుంది."
  },
  {
    "id": 179,
    "question": "NCF-2005, suggested to include these major contemporary issues in social studies at elementary level\nA) Poverty\nB) Illiteracy\nC) Child labour\nD) Gender inequalities\nE) Environmental issues\nChoose the correct answer (TSTET 10 Jan 2025)\nNCF-2005, ప్రాథమిక స్థాయిలో సాంఘిక శాస్త్రంలో ఈ ప్రధాన సమకాలీన సమస్యలను చేర్చాలని సూచించింది\nA) పేదరికం\nB) నిరక్షరాస్యత\nC) బాల కార్మిక వ్యవస్థ\nD) లింగ అసమానతలు\nE) పర్యావరణ సమస్యలు\nసరైన సమాధానాన్ని ఎంచుకోండి",
    "options": [
      "A, B, C & E only\nA, B, C & E మాత్రమే",
      "A, C, D & E only\nA, C, D & E మాత్రమే",
      "A, B, C & D only\nA, B, C & D మాత్రమే",
      "A, B, C, D & E"
    ],
    "correctAnswer": 1,
    "explanation": "జాతీయ పాఠ్యప్రణాళిక ఫ్రేమ్‌వర్క్ (NCF) 2005 సంబంధిత మరియు సమకాలీన వాస్తవాలను ప్రస్తావించే సాంఘిక శాస్త్ర పాఠ్యప్రణాళికకు మద్దతు ఇస్తుంది. ఇది పేదరికం, బాల కార్మిక వ్యవస్థ, లింగ అసమానతలు మరియు పర్యావరణ సవాళ్లు వంటి కీలక సమస్యలను చేర్చాలని సిఫార్సు చేస్తుంది, విద్యార్థులు సమాజం గురించి సున్నితమైన మరియు విమర్శనాత్మక అవగాహనను పెంపొందించుకోవడానికి సహాయపడుతుంది. అందించిన సమాధాన కీ ప్రకారం, ఈ నిర్దిష్ట అంశాల జాబితా నుండి నిరక్షరాస్యత మినహాయించబడింది."
  },
  {
    "id": 180,
    "question": "After reading the lesson \"forests\", a class - 6 student wrote a representative letter to the forest officer about the conservation of forests. It is reflecting the achievement of this academic standard in him (TSTET 10 Jan 2025)\n\"అడవులు\" పాఠం చదివిన తరువాత, 6వ తరగతి విద్యార్థి అటవీ పరిరక్షణ గురించి అటవీ అధికారికి ఒక ప్రాతినిధ్య లేఖ రాశాడు. ఇది అతనిలో ఈ విద్యా ప్రమాణం యొక్క సాధనను ప్రతిబింబిస్తుంది",
    "options": [
      "Mapping skills\nపట నైపుణ్యాలు",
      "Information skills\nసమాచార నైపుణ్యాలు",
      "Questioning and hypothesis formulation\nప్రశ్నించడం మరియు పరికల్పన సూత్రీకరణ",
      "Appreciation and sensitivity\nప్రశంస మరియు సున్నితత్వం"
    ],
    "correctAnswer": 3,
    "explanation": "పరిరక్షణ గురించి ఒక అధికారికి లేఖ రాయడం అనే విద్యార్థి చర్య కేవలం వాస్తవాలను గుర్తుచేసుకోవడం కంటే ఎక్కువగా ఉంటుంది. ఇది లోతైన నిమగ్నతను ప్రదర్శిస్తుంది, విద్యార్థి అడవుల విలువను అభినందిస్తున్నాడని మరియు వాటి పరిరక్షణ పట్ల బాధ్యతాయుతమైన భావాన్ని (సున్నితత్వం) కలిగి ఉన్నాడని చూపిస్తుంది, ఇది సాంఘిక మరియు పర్యావరణ అధ్యయనాలలో ఒక కీలక విద్యా ప్రమాణం."
  },
  {
    "id": 181,
    "question": "The edible part of the Cauliflower plant is: (TSTET 18 Jan 2025)\nకాలిఫ్లవర్ మొక్కలో తినదగిన భాగం:",
    "options": [
      "Root\nవేరు",
      "Stem\nకాండం",
      "Flower\nపువ్వు",
      "Leaf\nఆకు"
    ],
    "correctAnswer": 2,
    "explanation": "కాలిఫ్లవర్ యొక్క తల, మనం తినే భాగం, సాంకేతికంగా ఒక పుష్పగుచ్ఛం లేదా పుష్ప విభాజ్య కణజాలాల సమూహం. ఇది అభివృద్ధి చెందని పూల మొగ్గలను కలిగి ఉంటుంది, కాబట్టి 'పువ్వు' సరైన తినదగిన భాగం."
  },
  {
    "id": 182,
    "question": "Identify which is NOT a food component among the following: (TSTET 18 Jan 2025)\nకింది వాటిలో ఆహార భాగం కానిది ఏది గుర్తించండి:",
    "options": [
      "Carbohydrates\nపిండిపదార్థాలు (కార్బోహైడ్రేట్లు)",
      "Proteins\nమాంసకృత్తులు (ప్రోటీన్లు)",
      "Fats\nకొవ్వులు",
      "Water\nనీరు"
    ],
    "correctAnswer": 3,
    "explanation": "ఆహార భాగాలు, లేదా స్థూలపోషకాలు, శక్తిని అందించే మరియు పెరుగుదల మరియు శారీరక విధులకు అవసరమైన పదార్థాలు. వీటిలో కార్బోహైడ్రేట్లు, ప్రోటీన్లు మరియు కొవ్వులు ఉన్నాయి. నీరు జీవితానికి అత్యవసరమైన పోషకం అయినప్పటికీ, ఇది కేలరీలు లేదా శక్తిని అందించదు మరియు తరచుగా శక్తిని అందించే ఆహార భాగాల నుండి విడిగా వర్గీకరించబడుతుంది."
  },
  {
    "id": 183,
    "question": "Read the following statements and choose the correct answer:\nStatement I: Removing of hair or fleece from the skin of a sheep is called shearing.\nStatement II: Hairs of animals are used to obtain woollen fibre. (TSTET 18 Jan 2025)\nకింది ప్రకటనలను చదివి సరైన సమాధానాన్ని ఎంచుకోండి:\nప్రకటన I: గొర్రె చర్మం నుండి వెంట్రుకలు లేదా ఉన్నిని తొలగించడాన్ని 'షియరింగ్' అంటారు.\nప్రకటన II: ఉన్ని నూలును పొందడానికి జంతువుల వెంట్రుకలను ఉపయోగిస్తారు.",
    "options": [
      "Both Statement I and Statement II are correct\nప్రకటన I మరియు ప్రకటన II రెండూ సరైనవి",
      "Statement I is correct. Statement II is incorrect\nప్రకటన I సరైనది. ప్రకటన II తప్పు",
      "Statement I is incorrect. Statement II is correct\nప్రకటన I తప్పు. ప్రకటన II సరైనది",
      "Both Statement I and Statement II are incorrect\nప్రకటన I మరియు ప్రకటన II రెండూ తప్పు"
    ],
    "correctAnswer": 0,
    "explanation": "రెండు ప్రకటనలు వాస్తవంగా సరైనవి. 'షియరింగ్' అనేది గొర్రె ఉన్నిని కత్తిరించే ప్రక్రియకు నిర్దిష్ట పదం. గొర్రెలు మరియు మేకల వంటి ఇతర జంతువుల వెంట్రుకలైన ఉన్నిని వస్త్రాల కోసం ఉన్ని నూలులను సృష్టించడానికి ప్రాసెస్ చేస్తారు."
  },
  {
    "id": 184,
    "question": "In honeybees, the drone is referred to as: (TSTET 18 Jan 2025)\nతేనెటీగలలో, డ్రోన్ అని దేనిని అంటారు:",
    "options": [
      "Worker bee\nకూలీ ఈగ",
      "Male bee\nమగ ఈగ",
      "Queen bee\nరాణి ఈగ",
      "Young larvae\nయువ లార్వాలు"
    ],
    "correctAnswer": 1,
    "explanation": "ఒక తేనెటీగ సమూహంలో ఒక రాణి (సారవంతమైన ఆడ), అనేక శుభ్రమైన ఆడ కూలీ ఈగలు, మరియు తక్కువ సంఖ్యలో మగ ఈగలు ఉంటాయి, వీటిని డ్రోన్‌లు అంటారు. డ్రోన్ యొక్క ప్రాథమిక పాత్ర ఫలదీకరణం చెందని రాణితో జతకట్టడం."
  },
  {
    "id": 185,
    "question": "The accumulation of nutrients in water bodies leading to excessive plant growth and a decrease in oxygen is called: (TSTET 18 Jan 2025)\nనీటి వనరులలో పోషకాలు పేరుకుపోయి, అధిక మొక్కల పెరుగుదలకు మరియు ఆక్సిజన్ తగ్గడానికి దారితీయడాన్ని ఏమంటారు:",
    "options": [
      "Pollution\nకాలుష్యం",
      "Eutrophication\nయూట్రోఫికేషన్",
      "Photosynthesis\nకిరణజన్య సంయోగక్రియ",
      "Bioaccumulation\nజీవ సంచయనం"
    ],
    "correctAnswer": 1,
    "explanation": "యూట్రోఫికేషన్ అనేది ఒక నీటి వనరు ఖనిజాలు మరియు పోషకాలతో అధికంగా సమృద్ధి చెందే ప్రక్రియ, ఇది శైవలాల (ఆల్గల్ బ్లూమ్స్) అధిక పెరుగుదలను ప్రోత్సహిస్తుంది. ఈ శైవలాలు చనిపోయి కుళ్ళిపోయినప్పుడు, ఈ ప్రక్రియ పెద్ద మొత్తంలో కరిగిన ఆక్సిజన్‌ను వినియోగిస్తుంది, ఇది ఇతర జలచరాలకు హానికరమైన హైపోక్సిక్ పరిస్థితులకు దారితీస్తుంది."
  },
  {
    "id": 186,
    "question": "A report states that the fluoride concentration in drinking water in India is around 0.5 ppm. \"ppm\" stands for: (TSTET 18 Jan 2025)\nభారతదేశంలో త్రాగునీటిలో ఫ్లోరైడ్ గాఢత సుమారు 0.5 ppm అని ఒక నివేదిక పేర్కొంది. \"ppm\" అంటే:",
    "options": [
      "Parts per million\nపార్ట్స్ పర్ మిలియన్",
      "Parts per meter\nపార్ట్స్ పర్ మీటర్",
      "Percentage per million\nపర్సంటేజ్ పర్ మిలియన్",
      "Pollution per million\nపొల్యూషన్ పర్ మిలియన్"
    ],
    "correctAnswer": 0,
    "explanation": "'ppm' అనే సంక్షిప్త పదం 'పార్ట్స్ పర్ మిలియన్' అని సూచిస్తుంది. ఇది గాఢతను కొలిచే ఒక ప్రమాణం, ఇది ఒక ద్రావణం లేదా మిశ్రమం యొక్క ఒక మిలియన్ భాగాలకు ఒక భాగం పదార్థాన్ని సూచిస్తుంది. ఉదాహరణకు, 1 ppm అనేది ఒక లీటరుకు 1 మిల్లీగ్రాముకు (mg/L) సమానం."
  },
  {
    "id": 187,
    "question": "Identify the correct statement from the following: (TSTET 18 Jan 2025)\nకింది వాటి నుండి సరైన ప్రకటనను గుర్తించండి:",
    "options": [
      "Desert rats can stay without water longer than camels.\nఎడారి ఎలుకలు ఒంటెల కన్నా ఎక్కువ కాలం నీరు లేకుండా ఉండగలవు.",
      "Camels can stay without water longer than desert rats.\nఒంటెలు ఎడారి ఎలుకల కన్నా ఎక్కువ కాలం నీరు లేకుండా ఉండగలవు.",
      "Both desert rats and camels need the same amount of water daily.\nఎడారి ఎలుకలు మరియు ఒంటెలు రెండింటికీ రోజుకు ఒకే పరిమాణంలో నీరు అవసరం.",
      "Desert rats and camels never need water to survive.\nఎడారి ఎలుకలు మరియు ఒంటెలకు జీవించడానికి ఎప్పుడూ నీరు అవసరం లేదు."
    ],
    "correctAnswer": 0,
    "explanation": "కంగారూ ఎలుకలు (ఒక రకమైన ఎడారి ఎలుక) అత్యంత సమర్థవంతమైన మూత్రపిండాలు మరియు జీవక్రియ ప్రక్రియలను కలిగి ఉంటాయి, ఇవి అవి తినే విత్తనాల నుండి అవసరమైన నీటిని పొందడానికి వీలు కల్పిస్తాయి. అవి ఏ నీరు తాగకుండా తమ జీవితాంతం జీవించగలవు. ఒంటెలు నీటిని సంరక్షించుకోవడంలో మరియు వారాల తరబడి లేకుండా జీవించగల సామర్థ్యానికి ప్రసిద్ధి చెందినప్పటికీ, అవి చివరికి తాగవలసి ఉంటుంది. అందువల్ల, ప్రత్యక్ష నీటి వనరు లేకుండా జీవించడానికి ఎడారి ఎలుక మరింత అనుకూలంగా ఉంటుంది."
  },
  {
    "id": 188,
    "question": "If the alveoli are damaged in human lungs, then: (TSTET 18 Jan 2025)\nమానవ ఊపిరితిత్తులలో వాయుగోళాలు దెబ్బతింటే, అప్పుడు:",
    "options": [
      "The lungs will absorb more oxygen efficiently.\nఊపిరితిత్తులు ఎక్కువ ఆక్సిజన్‌ను సమర్థవంతంగా గ్రహిస్తాయి.",
      "The exchange of oxygen and carbon dioxide will be impaired.\nఆక్సిజన్ మరియు కార్బన్ డయాక్సైడ్ మార్పిడి దెబ్బతింటుంది.",
      "The lungs will produce more mucus to protect the body.\nఊపిరితిత్తులు శరీరాన్ని రక్షించడానికి ఎక్కువ శ్లేష్మాన్ని ఉత్పత్తి చేస్తాయి.",
      "The blood circulation will improve.\nరక్త ప్రసరణ మెరుగుపడుతుంది."
    ],
    "correctAnswer": 1,
    "explanation": "వాయుగోళాలు ఊపిరితిత్తులలోని చిన్న గాలి సంచులు, ఇక్కడ గాలి మరియు రక్తం మధ్య వాయువుల ముఖ్యమైన మార్పిడి జరుగుతుంది. ఆక్సిజన్ రక్తంలోకి వెళుతుంది మరియు కార్బన్ డయాక్సైడ్ బయటకు వెళుతుంది. వాయుగోళాలకు నష్టం (ఉదాహరణకు, ధూమపానం లేదా వ్యాధి నుండి) ఈ మార్పిడికి అందుబాటులో ఉన్న ఉపరితల వైశాల్యాన్ని తగ్గిస్తుంది, తద్వారా ఆక్సిజన్‌ను తీసుకోవడానికి మరియు కార్బన్ డయాక్సైడ్‌ను తొలగించడానికి శరీరం యొక్క సామర్థ్యాన్ని దెబ్బతీస్తుంది."
  },
  {
    "id": 189,
    "question": "Read the following statements and choose the correct answer:\nStatement I: The neurologist treats the diseases related to the nerves and brain.\nStatement II: The brain co-ordinates with the different parts of the body and orders the nerves to take the necessary action. (TSTET 18 Jan 2025)\nకింది ప్రకటనలను చదివి సరైన సమాధానాన్ని ఎంచుకోండి:\nప్రకటన I: నరాల నిపుణుడు నరాలు మరియు మెదడుకు సంబంధించిన వ్యాధులకు చికిత్స చేస్తాడు.\nప్రకటన II: మెదడు శరీరంలోని వివిధ భాగాలతో సమన్వయం చేసుకుంటుంది మరియు అవసరమైన చర్య తీసుకోవడానికి నరాలకు ఆదేశిస్తుంది.",
    "options": [
      "Statement I is correct, Statement II is incorrect\nప్రకటన I సరైనది, ప్రకటన II తప్పు",
      "Statement I is incorrect. Statement II is correct\nప్రకటన I తప్పు. ప్రకటన II సరైనది",
      "Both Statement I and Statement II are correct\nప్రకటన I మరియు ప్రకటన II రెండూ సరైనవి",
      "Both Statement I and Statement II are incorrect\nప్రకటన I మరియు ప్రకటన II రెండూ తప్పు"
    ],
    "correctAnswer": 2,
    "explanation": "రెండు ప్రకటనలు సరైనవి. నరాల నిపుణుడు నరాల వ్యవస్థ యొక్క రుగ్మతలను నిర్ధారించి చికిత్స చేసే వైద్య నిపుణుడు, ఇందులో మెదడు, వెన్నుపాము మరియు నరాలు ఉంటాయి. మెదడు కేంద్ర నియంత్రణ యూనిట్‌గా పనిచేస్తుంది, అన్ని శరీర విధులను సమన్వయం చేస్తుంది మరియు చర్యలను ప్రారంభించడానికి నరాల ద్వారా సంకేతాలను పంపుతుంది."
  },
  {
    "id": 190,
    "question": "Identify the INCORRECT pair: (TSTET 18 Jan 2025)\nతప్పు జతను గుర్తించండి:",
    "options": [
      "Clavicle - Shoulder\nజత్రుక (క్లావికల్) - భుజం",
      "Pelvic girdle - Below stomach\nకటి వలయం - కడుపు కింద",
      "Cartilage - Ear\nమృదులాస్థి - చెవి",
      "Femur - Neck\nతొడ ఎముక (ఫెమర్) - మెడ"
    ],
    "correctAnswer": 3,
    "explanation": "ఫెమర్ అనేది తొడ ఎముక, ఇది పై కాలులో ఉంటుంది. ఇది మానవ శరీరంలో పొడవైన మరియు బలమైన ఎముక. మెడకు గర్భాశయ వెన్నుపూస మద్దతు ఇస్తుంది. అందువల్ల, 'ఫెమర్ - మెడ' జత శరీర నిర్మాణ శాస్త్రపరంగా తప్పు. ఇతర జతలు సరైనవి: క్లావికల్ భుజంలోని కాలర్‌బోన్, కటి వలయం కడుపు కింద ఉంటుంది, మరియు బయటి చెవి మృదులాస్థితో తయారవుతుంది."
  },
  {
    "id": 191,
    "question": "Identify the plant that reproduce through vegetative reproduction. (TSTET 18 Jan 2025)\nశాకీయ ప్రత్యుత్పత్తి ద్వారా పునరుత్పత్తి చేసే మొక్కను గుర్తించండి.",
    "options": [
      "Mango\nమామిడి",
      "Apple\nఆపిల్",
      "Potato\nబంగాళాదుంప",
      "Banana\nఅరటిపండు"
    ],
    "correctAnswer": 2,
    "explanation": "బంగాళాదుంప ఒక దుంప, ఇది రూపాంతరం చెందిన భూగర్భ కాండం. బంగాళాదుంపపై ఉన్న 'కళ్ళు' వాస్తవానికి మొగ్గలతో కూడిన కణుపులు, ఇవి మొలకెత్తి కొత్త మొక్కగా పెరుగుతాయి. ఇది శాకీయ ప్రత్యుత్పత్తి యొక్క సహజ రూపం. జాబితా చేయబడిన ఇతర మొక్కలను అంటుకట్టడం వంటి కృత్రిమ మార్గాల ద్వారా శాకీయంగా ప్రచారం చేయగలిగినప్పటికీ, బంగాళాదుంప సహజ పునరుత్పత్తి కోసం శాకీయ భాగాన్ని ఉపయోగించే మొక్కకు ఒక ఉదాహరణ."
  },
  {
    "id": 192,
    "question": "The leaves in a plant do NOT help in: (TSTET 18 Jan 2025)\nమొక్కలోని ఆకులు దీనిలో సహాయపడవు:",
    "options": [
      "Preparing food\nఆహారాన్ని తయారు చేయడంలో",
      "Transpiration\nభాష్పోత్సేకంలో",
      "Exchange of gases\nవాయువుల మార్పిడిలో",
      "Germination\nఅంకురోత్పత్తిలో"
    ],
    "correctAnswer": 3,
    "explanation": "ఆకులు కిరణజన్య సంయోగక్రియ (ఆహారాన్ని తయారు చేయడం), భాష్పోత్సేకం (నీటి ఆవిరి విడుదల), మరియు శ్వాసక్రియ (వాయువుల మార్పిడి) కోసం అవసరం. అంకురోత్పత్తి అనేది ఒక విత్తనం మొలకగా మొలకెత్తే ప్రక్రియ. ఈ ప్రక్రియ విత్తనంలో నిల్వ ఉన్న శక్తిపై ఆధారపడి ఉంటుంది మరియు ఆకులతో ప్రమేయం ఉండదు, ఇవి అంకురోత్పత్తి ప్రారంభమైన తర్వాత అభివృద్ధి చెందుతాయి."
  },
  {
    "id": 193,
    "question": "As per the Indian Constitution, the person below this age shall not be employed to work in the factory or mines or engaged in any hazardous employment: (TSTET 18 Jan 2025)\nభారత రాజ్యాంగం ప్రకారం, ఈ వయస్సు కంటే తక్కువ ఉన్న వ్యక్తిని ఫ్యాక్టరీలో లేదా గనులలో పనిలో నియమించరాదు లేదా ఏదైనా ప్రమాదకరమైన ఉపాధిలో నిమగ్నం చేయరాదు:",
    "options": [
      "18 years\n18 సంవత్సరాలు",
      "16 years\n16 సంవత్సరాలు",
      "14 years\n14 సంవత్సరాలు",
      "15 years\n15 సంవత్సరాలు"
    ],
    "correctAnswer": 2,
    "explanation": "భారత రాజ్యాంగంలోని ఆర్టికల్ 24, ఇది దోపిడీకి వ్యతిరేకంగా ప్రాథమిక హక్కు, 14 సంవత్సరాల కంటే తక్కువ వయస్సు ఉన్న పిల్లలను ఏదైనా ఫ్యాక్టరీ, గని లేదా ఇతర ప్రమాదకరమైన వృత్తులలో నియమించడాన్ని స్పష్టంగా నిషేధిస్తుంది."
  },
  {
    "id": 194,
    "question": "As per International Children's charter proposed by UNO in 1989, one of the following is a child right: (TSTET 18 Jan 2025)\n1989లో UNO ప్రతిపాదించిన అంతర్జాతీయ బాలల చార్టర్ ప్రకారం, కింది వాటిలో ఒకటి బాలల హక్కు:",
    "options": [
      "Right to have good health and get medical care\nమంచి ఆరోగ్యం మరియు వైద్య సంరక్షణ పొందే హక్కు",
      "Right to vote in the election\nఎన్నికలలో ఓటు వేసే హక్కు",
      "Right to contest in the election conducted at school\nపాఠశాలలో నిర్వహించే ఎన్నికలలో పోటీ చేసే హక్కు",
      "Right to reside and leave the country as and when required without the prior permission of the Government\nప్రభుత్వ ముందస్తు అనుమతి లేకుండా అవసరమైనప్పుడు దేశంలో నివసించే మరియు దేశం విడిచి వెళ్ళే హక్కు"
    ],
    "correctAnswer": 0,
    "explanation": "బాలల హక్కులపై UN కన్వెన్షన్ (1989) పిల్లల కోసం ఒక సమగ్ర హక్కుల సమితిని ఏర్పాటు చేస్తుంది. ఈ కన్వెన్షన్‌లోని ఆర్టికల్ 24 ప్రత్యేకంగా ఒక పిల్లల 'సాధ్యమైన అత్యధిక ఆరోగ్య ప్రమాణం మరియు అనారోగ్యం చికిత్స కోసం సౌకర్యాల' హక్కును గుర్తిస్తుంది. ఇతర ఎంపికలు ఈ అంతర్జాతీయ చార్టర్ కింద పిల్లల కోసం నిర్దేశించిన హక్కులు కావు."
  },
  {
    "id": 195,
    "question": "Among the following, the states having 30 or more than 30 Lok Sabha seats in India are: (TSTET 18 Jan 2025)\nకింది వాటిలో, భారతదేశంలో 30 లేదా 30 కంటే ఎక్కువ లోక్‌సభ స్థానాలు ఉన్న రాష్ట్రాలు:",
    "options": [
      "Gujarat, West Bengal, Andhra Pradesh\nగుజరాత్, పశ్చిమ బెంగాల్, ఆంధ్రప్రదేశ్",
      "Maharashtra, West Bengal, Tamil Nadu\nమహారాష్ట్ర, పశ్చిమ బెంగాల్, తమిళనాడు",
      "Rajasthan, Orissa, Gujarat\nరాజస్థాన్, ఒరిస్సా, గుజరాత్",
      "Tamil Nadu, Karnataka, Andhra Pradesh\nతమిళనాడు, కర్ణాటక, ఆంధ్రప్రదేశ్"
    ],
    "correctAnswer": 1,
    "explanation": "ప్రస్తుత కేటాయింపుల ఆధారంగా, లోక్‌సభ స్థానాల సంఖ్య: మహారాష్ట్ర (48), పశ్చిమ బెంగాల్ (42), మరియు తమిళనాడు (39). ఈ ఎంపికలోని మూడు రాష్ట్రాలు 30 కంటే ఎక్కువ స్థానాలను కలిగి ఉన్నాయి. ఇతర ఎంపికలలో, అనేక రాష్ట్రాలు ఈ పరిమితి కంటే తక్కువగా ఉన్నాయి (ఉదాహరణకు, గుజరాత్‌కు 26, ఆంధ్రప్రదేశ్‌కు 25, కర్ణాటకకు 28)."
  },
  {
    "id": 196,
    "question": "Identify the function of Gram Panchayat in Telangana State: (TSTET 18 Jan 2025)\nతెలంగాణ రాష్ట్రంలో గ్రామ పంచాయతీ విధిని గుర్తించండి:",
    "options": [
      "Provision of housing for weaker sections of the society\nసమాజంలోని బలహీన వర్గాలకు గృహవసతి కల్పించడం",
      "establishment of small scale industries in the village\nగ్రామంలో చిన్న తరహా పరిశ్రమల స్థాపన",
      "Maintenance of street lights, proper sanitation\nవీధి దీపాల నిర్వహణ, సరైన పారిశుధ్యం",
      "control over markets and fairs\nసంతలు మరియు జాతరలపై నియంత్రణ"
    ],
    "correctAnswer": 2,
    "explanation": "గ్రామ పంచాయతీ యొక్క ప్రధాన మరియు తప్పనిసరి విధులలో ప్రజా సౌకర్యాల కల్పన మరియు నిర్వహణ ఒకటి. ఇందులో ప్రజారోగ్యం మరియు పరిశుభ్రతను కాపాడటానికి వీధుల్లో దీపాలు వెలిగించడం, గ్రామంలో సరైన పారిశుధ్యం మరియు మురుగునీటి పారుదల వ్యవస్థలు ఉండేలా చూడటం వంటివి ఉంటాయి."
  },
  {
    "id": 197,
    "question": "Among the following, these districts of Telangana state are located in the 'Upper Telangana Plateau': (TSTET 18 Jan 2025)\nకింది వాటిలో, తెలంగాణ రాష్ట్రంలోని ఈ జిల్లాలు 'ఎగువ తెలంగాణ పీఠభూమి'లో ఉన్నాయి:",
    "options": [
      "Sangareddy, Medak, Nizamabad\nసంగారెడ్డి, మెదక్, నిజామాబాద్",
      "Khammam, Suryapet, Mahabubabad\nఖమ్మం, సూర్యాపేట, మహబూబాబాద్",
      "Warangal, Suryapet, Bhadradri Kothagudem\nవరంగల్, సూర్యాపేట, భద్రాద్రి కొత్తగూడెం",
      "Mulugu, Nalgonda, Khammam\nములుగు, నల్గొండ, ఖమ్మం"
    ],
    "correctAnswer": 0,
    "explanation": "తెలంగాణ భౌగోళిక స్వరూపంలో రాష్ట్ర పశ్చిమ భాగంలో అధిక ఎత్తులో ఉన్న ఎగువ తెలంగాణ పీఠభూమి ఉంది. సంగారెడ్డి, మెదక్ మరియు నిజామాబాద్ జిల్లాలు ఈ వాయువ్య ప్రాంతంలో ఉన్నాయి. ఇతర ఎంపికలలోని జిల్లాలు ప్రధానంగా తూర్పు మరియు దక్షిణ భాగాలలో ఉన్నాయి, ఇవి దిగువ తెలంగాణ పీఠభూమికి చెందినవి."
  },
  {
    "id": 198,
    "question": "One among the following was NOT the Stone Age Sites of Telangana State: (TSTET 18 Jan 2025)\nకింది వాటిలో ఒకటి తెలంగాణ రాష్ట్రంలోని రాతియుగం నాటి ప్రదేశం కాదు:",
    "options": [
      "Ekkala in Jayashankar Bhoopalapally\nజయశంకర్ భూపాలపల్లిలోని ఎక్కల",
      "Amrabad in Nagarkurnool District\nనాగర్‌కర్నూల్ జిల్లాలోని అమ్రాబాద్",
      "Ramagundam in Peddapally District\nపెద్దపల్లి జిల్లాలోని రామగుండం",
      "Ananthagiri in Vikarabad District\nవికారాబాద్ జిల్లాలోని అనంతగిరి"
    ],
    "correctAnswer": 3,
    "explanation": "ఎక్కల, అమ్రాబాద్ మరియు రామగుండం సమీపంలోని గోదావరి బేసిన్ అన్నీ రాతియుగం (పాతరాతి/నవీనశిలాయుగం) నాటి ముఖ్యమైన పురావస్తు పరిశోధనలు జరిగిన ప్రాంతాలుగా గుర్తించబడ్డాయి. అనంతగిరి కొండలు దాని ఆలయానికి చారిత్రాత్మకంగా ముఖ్యమైనవి అయినప్పటికీ, అది ప్రధానంగా తవ్వకాలు జరిపిన ఒక పెద్ద రాతియుగం నాటి ప్రదేశంగా ప్రసిద్ధి చెందలేదు."
  },
  {
    "id": 199,
    "question": "These forests grow in very dry areas with little rainfall and high temperatures: (TSTET 18 Jan 2025)\nఈ అడవులు చాలా పొడి ప్రాంతాలలో, తక్కువ వర్షపాతం మరియు అధిక ఉష్ణోగ్రతల వద్ద పెరుగుతాయి:",
    "options": [
      "Deciduous Forests\nఆకురాల్చే అడవులు",
      "Coniferous forests\nశృంగాకార అడవులు",
      "Thorny forests\nముళ్ళ అడవులు",
      "Mediterranean Vegetation\nమధ్యధరా వృక్షసంపద"
    ],
    "correctAnswer": 2,
    "explanation": "ముళ్ళ అడవులు శుష్క మరియు పాక్షిక-శుష్క వాతావరణాల లక్షణం. ఈ ప్రాంతాలలోని వృక్షసంపద, ఉదాహరణకు తుమ్మ మరియు కాక్టస్, నీటిని సంరక్షించడానికి ముళ్ళు, చిన్న ఆకులు మరియు లోతైన వేర్లు వంటి లక్షణాలను అభివృద్ధి చేసుకోవడం ద్వారా చాలా తక్కువ వర్షపాతం మరియు అధిక ఉష్ణోగ్రతలలో జీవించడానికి అనుగుణంగా మారాయి."
  },
  {
    "id": 200,
    "question": "One of the following raw materials is used in making of glass and ceramic ware: (TSTET 18 Jan 2025)\nగాజు మరియు పింగాణీ సామానుల తయారీలో కింది ముడి పదార్థాలలో ఒకటి ఉపయోగించబడుతుంది:",
    "options": [
      "Barytes\nబరైటీస్",
      "Barium\nబేరియం",
      "Feldspar\nఫెల్డ్‌స్పార్",
      "Manganese\nమాంగనీస్"
    ],
    "correctAnswer": 2,
    "explanation": "గాజు మరియు పింగాణీ రెండింటి తయారీలో ఫెల్డ్‌స్పార్ ఒక కీలకమైన ముడి పదార్థం. ఇది ఒక ఫ్లక్స్‌గా పనిచేస్తుంది, ఇది ప్రధాన భాగం (గాజులో సిలికా, సిరామిక్స్‌లో బంకమన్ను) యొక్క ద్రవీభవన ఉష్ణోగ్రతను తగ్గిస్తుంది, తద్వారా శక్తిని ఆదా చేస్తుంది మరియు తుది ఉత్పత్తి యొక్క బలం మరియు మన్నికను మెరుగుపరుస్తుంది."
  },
  {
    "id": 201,
    "question": "In the Ancient period, most of the Mahajanapadas were mainly located on the banks of this river: (TSTET 18 Jan 2025)\nప్రాచీన కాలంలో, చాలా మహాజనపదాలు ప్రధానంగా ఈ నది ఒడ్డున ఉండేవి:",
    "options": [
      "Krishna\nకృష్ణా",
      "Brahmaputra\nబ్రహ్మపుత్ర",
      "Mahanadi\nమహానది",
      "Ganges\nగంగా"
    ],
    "correctAnswer": 3,
    "explanation": "మహాజనపదాలు ప్రాచీన భారతదేశంలోని పదహారు ప్రధాన రాజ్యాలు మరియు గణతంత్రాలు. వీటిలో చాలా వరకు, మగధ, కాశీ మరియు కోసల వంటి అత్యంత శక్తివంతమైన వాటితో సహా, సారవంతమైన ఇండో-గంగా మైదానంలో ఉన్నాయి. గంగా నది మరియు దాని ఉపనదులు వ్యవసాయానికి నీటిని అందించాయి, వాణిజ్యాన్ని సులభతరం చేశాయి మరియు పెద్ద జనాభాకు మద్దతు ఇచ్చాయి."
  },
  {
    "id": 202,
    "question": "Deogarh and Udayagiri in Madhya Pradesh and Bhitragoan and Eran in Uttara Pradesh were built by these rulers: (TSTET 18 Jan 2025)\nమధ్యప్రదేశ్‌లోని దేవగఢ్ మరియు ఉదయగిరి మరియు ఉత్తరప్రదేశ్‌లోని భితర్‌గావ్ మరియు ఎరాన్ ఈ పాలకులచే నిర్మించబడ్డాయి:",
    "options": [
      "Satavahanas\nశాతవాహనులు",
      "Mauryans\nమౌర్యులు",
      "Guptas\nగుప్తులు",
      "Rashtrakutas\nరాష్ట్రకూటులు"
    ],
    "correctAnswer": 2,
    "explanation": "ఈ ప్రదేశాలు గుప్త సామ్రాజ్యం (క్రీ.శ. 4 నుండి 6వ శతాబ్దాలు) నాటి దేవాలయాలు మరియు కళలకు ప్రసిద్ధి చెందాయి. దేవగఢ్‌లోని దశావతార ఆలయం మరియు భితర్‌గావ్‌లోని ఇటుక ఆలయం గుప్త రాజవంశం యొక్క ఆధ్వర్యంలో వర్ధిల్లిన తొలి హిందూ దేవాలయ నిర్మాణానికి ఉదాహరణలు."
  },
  {
    "id": 203,
    "question": "The movement of water through the atmosphere specifically from the ocean to over land in the form of clouds is known as: (TSTET 18 Jan 2025)\nవాతావరణం ద్వారా, ముఖ్యంగా సముద్రం నుండి భూమిపైకి మేఘాల రూపంలో నీటి కదలికను ఇలా అంటారు:",
    "options": [
      "Transpiration\nభాష్పోత్సేకం",
      "Evaporation\nభాష్పీభవనం",
      "Condensation\nద్రవీభవనం",
      "Transportation\nరవాణా"
    ],
    "correctAnswer": 3,
    "explanation": "నీటి చక్రంలో, 'రవాణా' (లేదా అడ్వెక్షన్) అనేది గాలి ద్వారా మేఘాలను (ద్రవీభవించిన నీటి ఆవిరి ద్రవ్యరాశులు) ఒక ప్రదేశం నుండి మరొక ప్రదేశానికి తరలించే ప్రక్రియ. ఈ విధంగా సముద్రాల నుండి ఆవిరైన తేమ భూభాగాలపైకి తీసుకువెళ్ళబడుతుంది, అక్కడ అది తరువాత అవపాతంగా పడగలదు."
  },
  {
    "id": 204,
    "question": "As per land area, the place of India in the world is: (TSTET 18 Jan 2025)\nభూభాగం ప్రకారం, ప్రపంచంలో భారతదేశం యొక్క స్థానం:",
    "options": [
      "2nd\n2వ",
      "4th\n4వ",
      "7th\n7వ",
      "9th\n9వ"
    ],
    "correctAnswer": 2,
    "explanation": "మొత్తం భౌగోళిక వైశాల్యం ప్రకారం, భారతదేశం ప్రపంచంలో ఏడవ అతిపెద్ద దేశం. రష్యా, కెనడా, చైనా, యునైటెడ్ స్టేట్స్, బ్రెజిల్ మరియు ఆస్ట్రేలియా అనే ఆరు దేశాలు భారతదేశం కంటే పెద్ద భూభాగాలను కలిగి ఉన్నాయి."
  },
  {
    "id": 205,
    "question": "In an EVS class, the teacher wanted to teach the topic 'House flies spread Diseases'. The most appropriate learning resource that can be used for the topic to make the teaching effective is:\nA) flash cards\nB) charts\nC) local primary health center (TSTET 18 Jan 2025)\nఒక EVS తరగతిలో, ఉపాధ్యాయుడు 'ఈగలు వ్యాధులను వ్యాపింపజేస్తాయి' అనే అంశాన్ని బోధించాలనుకున్నారు. బోధనను ప్రభావవంతంగా చేయడానికి ఈ అంశం కోసం ఉపయోగించగల అత్యంత సముచితమైన అభ్యాస వనరు:\nA) ఫ్లాష్ కార్డులు\nB) చార్టులు\nC) స్థానిక ప్రాథమిక ఆరోగ్య కేంద్రం",
    "options": [
      "A & B only\nA & B మాత్రమే",
      "A, B & C\nA, B & C",
      "A & C only\nA & C మాత్రమే",
      "B & C only\nB & C మాత్రమే"
    ],
    "correctAnswer": 1,
    "explanation": "ప్రభావవంతమైన బోధనా వ్యూహంలో బహుళ వనరులు ఉంటాయి. వ్యాధి వ్యాప్తి ప్రక్రియను చూపించడానికి ఫ్లాష్ కార్డులు మరియు చార్టులు అద్భుతమైన దృశ్య సహాయకాలు. స్థానిక ప్రాథమిక ఆరోగ్య కేంద్రాన్ని చేర్చడం వలన వాస్తవ ప్రపంచ, సమాజ ఆధారిత అభ్యాస అంశం జోడించబడుతుంది, ఇక్కడ విద్యార్థులు నివారణ మరియు స్థానిక ఆరోగ్య సమస్యల గురించి ఆచరణాత్మక సమాచారాన్ని పొందవచ్చు. ఈ మూడింటిని కలపడం సమగ్ర అభ్యాస అనుభవాన్ని అందిస్తుంది."
  },
  {
    "id": 206,
    "question": "While handling the multi grade teaching method, the best and the most effective method a teacher can follow is: (TSTET 18 Jan 2025)\nబహుళ-తరగతి బోధనా పద్ధతిని నిర్వహిస్తున్నప్పుడు, ఒక ఉపాధ్యాయుడు అనుసరించగల ఉత్తమ మరియు అత్యంత ప్రభావవంతమైన పద్ధతి:",
    "options": [
      "leaving students for self- learning without teacher support\nఉపాధ్యాయుని మద్దతు లేకుండా విద్యార్థులను స్వీయ-అభ్యాసానికి వదిలివేయడం",
      "making grade wise groups based on their intelligence\nవారి తెలివితేటల ఆధారంగా గ్రేడ్ వారీగా సమూహాలను తయారు చేయడం",
      "grouping the children with special needs separately\nప్రత్యేక అవసరాలు ఉన్న పిల్లలను విడిగా సమూహాలుగా చేయడం",
      "grouping the children into heterogeneous groups strategically\nపిల్లలను వ్యూహాత్మకంగా భిన్నమైన సమూహాలుగా చేయడం"
    ],
    "correctAnswer": 3,
    "explanation": "బహుళ-తరగతి గదిలో, వ్యూహాత్మక భిన్నమైన (మిశ్రమ-సామర్థ్యం, మిశ్రమ-వయస్సు) సమూహాలను సృష్టించడం చాలా ప్రభావవంతమైన పద్ధతి. ఈ విధానం సహచర అభ్యాసం, సహకారం మరియు సామాజిక నైపుణ్యాల అభివృద్ధిని ప్రోత్సహిస్తుంది, పాత లేదా మరింత అభివృద్ధి చెందిన విద్యార్థులు ఇతరులకు సహాయం చేయడానికి అనుమతిస్తుంది, అదే సమయంలో వారి స్వంత జ్ఞానాన్ని బలోపేతం చేస్తుంది. ఇది కఠినమైన, వేరు చేయబడిన సమూహాల కంటే మరింత సమగ్రమైనది మరియు డైనమిక్‌గా ఉంటుంది."
  },
  {
    "id": 207,
    "question": "When an EVS teacher takes students to zoo. his intention could be: (TSTET 18 Jan 2025)\nఒక EVS ఉపాధ్యాయుడు విద్యార్థులను జూకి తీసుకెళ్ళినప్పుడు. అతని ఉద్దేశ్యం ఇలా ఉండవచ్చు:",
    "options": [
      "just to pass the classroom time\nకేవలం తరగతి గది సమయాన్ని గడపడానికి",
      "to develop animal domesticating skills in children\nపిల్లలలో జంతువులను మచ్చిక చేసుకునే నైపుణ్యాలను అభివృద్ధి చేయడానికి",
      "to sensitize the students for animal protection\nజంతు సంరక్షణ కోసం విద్యార్థులను సున్నితంగా చేయడానికి",
      "to make them apply their classroom learning in real life situations\nవారి తరగతి గది అభ్యాసాన్ని నిజ జీవిత పరిస్థితులలో అన్వయించేలా చేయడానికి"
    ],
    "correctAnswer": 3,
    "explanation": "జూ సందర్శన వంటి క్షేత్ర పర్యటనలు తరగతి గది సిద్ధాంతం మరియు వాస్తవ ప్రపంచ పరిశీలన మధ్య వారధిగా పనిచేస్తాయి. ఇది విద్యార్థులు జంతువులు, నివాసాలు మరియు పర్యావరణ వ్యవస్థల గురించి నేర్చుకున్న వాటిని స్పష్టమైన, నిజ జీవిత నేపధ్యంలో అన్వయించడానికి అనుమతిస్తుంది. ఈ రకమైన అనుభవపూర్వక అభ్యాసం నైరూప్య భావనలను మరింత స్పష్టంగా మరియు గుర్తుండిపోయేలా చేస్తుంది. ఇది జంతు సంక్షేమం మరియు సంరక్షణకు వారిని సున్నితంగా చేయడానికి కూడా ఉపయోగపడుతుంది."
  },
  {
    "id": 208,
    "question": "Identify Democratic values among the following:\nA) Good citizenship\nB) Respecting other\nC) Exercising franchise (TSTET 18 Jan 2025)\nకింది వాటిలో ప్రజాస్వామ్య విలువలను గుర్తించండి:\nA) మంచి పౌరసత్వం\nB) ఇతరులను గౌరవించడం\nC) ఓటు హక్కును వినియోగించుకోవడం",
    "options": [
      "A & B only\nA & B మాత్రమే",
      "A, B & C\nA, B & C",
      "B & C only\nB & C మాత్రమే",
      "A & C only\nA & C మాత్రమే"
    ],
    "correctAnswer": 1,
    "explanation": "ఈ మూడు ప్రజాస్వామ్యంలో అవసరమైన విలువలు. మంచి పౌరసత్వం చురుకైన మరియు బాధ్యతాయుతమైన భాగస్వామ్యాన్ని కలిగి ఉంటుంది. ఇతరులను మరియు వారి హక్కులను గౌరవించడం బహుళత్వ సమాజానికి ప్రాథమికం. ఫ్రాంచైజీని (ఓటింగ్) వినియోగించుకోవడం పౌరులు తమ పాలనలో పాల్గొనే ప్రాథమిక యంత్రాంగం."
  },
  {
    "id": 209,
    "question": "The lessons in the present EVS text books of our state syllabus are developed based on this curricular approach: (TSTET 18 Jan 2025)\nమన రాష్ట్ర సిలబస్‌లోని ప్రస్తుత EVS పాఠ్యపుస్తకాలలోని పాఠాలు ఈ పాఠ్యప్రణాళిక విధానం ఆధారంగా అభివృద్ధి చేయబడ్డాయి:",
    "options": [
      "Integrated approach\nసమీకృత విధానం",
      "Unit approach\nయూనిట్ విధానం",
      "Chronological approach\nకాలక్రమానుసార విధానం",
      "Concentric approach\nఏక కేంద్రక విధానం"
    ],
    "correctAnswer": 0,
    "explanation": "జాతీయ పాఠ్యప్రణాళిక ఫ్రేమ్‌వర్క్ (NCF) ప్రకారం ప్రాథమిక తరగతుల కోసం ఆధునిక పర్యావరణ అధ్యయనాలు (EVS) పాఠ్యప్రణాళికలు సమీకృత విధానాన్ని అవలంబిస్తాయి. దీని అర్థం విజ్ఞానశాస్త్రం, సాంఘికశాస్త్రం మరియు పర్యావరణ విద్య నుండి వచ్చిన భావనలు ప్రత్యేక సబ్జెక్టులుగా కాకుండా, పిల్లల తక్షణ పర్యావరణానికి సంబంధించిన నేపథ్య పాఠాలుగా ఏకీకృతం చేయబడతాయి, ఇది సంపూర్ణ దృక్పథాన్ని అందిస్తుంది."
  },
  {
    "id": 210,
    "question": "The following charts are used to represent the growth and development of an empire. a dynasty and historical facts: (TSTET 18 Jan 2025)\nఒక సామ్రాజ్యం, ఒక రాజవంశం మరియు చారిత్రక వాస్తవాల పెరుగుదల మరియు అభివృద్ధిని సూచించడానికి క్రింది చార్టులు ఉపయోగించబడతాయి:",
    "options": [
      "'Pie' charts\n'పై' చార్టులు",
      "Classification charts\nవర్గీకరణ చార్టులు",
      "Genealogy charts\nవంశవృక్ష చార్టులు",
      "Tabulation charts\nపట్టిక చార్టులు"
    ],
    "correctAnswer": 2,
    "explanation": "వంశవృక్ష చార్టు, దీనిని తరచుగా కుటుంబ వృక్షం లేదా రాజవంశ చార్టు అని పిలుస్తారు, ఒక రాజవంశంలోని పాలకుల వంశం మరియు వారసత్వాన్ని వివరించడానికి ప్రత్యేకంగా రూపొందించబడింది. ఈ దృశ్యమాన ప్రాతినిధ్యం తరతరాలుగా ఒక పాలక కుటుంబం లేదా సామ్రాజ్యం యొక్క చారిత్రక అభివృద్ధి మరియు సంబంధాలను చూపించడానికి అనువైనది."
  },
  {
    "id": 211,
    "question": "The constant temperature at which a liquid substance gets converted into gaseous state is called (APTET July 2011)\nఒక ద్రవ పదార్థం వాయు స్థితిలోకి మారే స్థిరమైన ఉష్ణోగ్రతను ఇలా అంటారు",
    "options": [
      "freezing point.\nఘనీభవన స్థానం.",
      "lower fixed point.\nదిగువ స్థిర స్థానం.",
      "boiling point.\nమరిగే స్థానం.",
      "melting point.\nద్రవీభవన స్థానం."
    ],
    "correctAnswer": 2,
    "explanation": "మరిగే స్థానం అనేది ఒక నిర్దిష్ట ఉష్ణోగ్రత, దీని వద్ద ఒక ద్రవం ఇచ్చిన పీడనం కింద వేడి చేసినప్పుడు వాయువుగా (ఆవిరిగా) మారుతుంది. ఘనీభవన స్థానం అంటే ద్రవం ఘనంగా మారడం, మరియు ద్రవీభవన స్థానం అంటే ఘనం ద్రవంగా మారడం. ఉష్ణోగ్రత స్కేల్‌పై దిగువ స్థిర స్థానం సాధారణంగా నీటి ఘనీభవన స్థానం."
  },
  {
    "id": 212,
    "question": "Raju could hear the echo of his clap from a hill in front of him after 3 seconds of his clapping. The distance between him and the hill, assuming the velocity of sound in air to be 320 m/sec is..... (APTET July 2011)\nరాజు చప్పట్లు కొట్టిన 3 సెకన్ల తర్వాత తన ముందు ఉన్న కొండ నుండి తన చప్పట్ల ప్రతిధ్వనిని వినగలిగాడు. గాలిలో ధ్వని వేగం 320 మీ/సె అని భావించి, అతనికి మరియు కొండకు మధ్య దూరం.....",
    "options": [
      "480 m",
      "960 m",
      "320 m",
      "3 m"
    ],
    "correctAnswer": 0,
    "explanation": "ప్రతిధ్వని అంటే ధ్వని పరావర్తనం. ధ్వని కొండకు ప్రయాణించి, ఆపై శ్రోత వద్దకు తిరిగి వస్తుంది. ఈ రౌండ్ ట్రిప్‌కు పట్టిన మొత్తం సమయం 3 సెకన్లు. ధ్వని ప్రయాణించిన మొత్తం దూరం = వేగం × సమయం. కాబట్టి, మొత్తం దూరం = 320 మీ/సె × 3 సె = 960 మీ. ఇది ధ్వని కొండకు వెళ్లి తిరిగి రావడానికి పట్టిన దూరం కాబట్టి, రాజుకు మరియు కొండకు మధ్య ఉన్న అసలు దూరం ఈ మొత్తం దూరంలో సగం ఉంటుంది: 960 మీ / 2 = 480 మీ."
  },
  {
    "id": 213,
    "question": "Consider 3 magnets A, B, C are one of the poles of each of the magnets. A, B get attracted and A, C get repelled. Then the following statement is true (APTET July 2011)\n3 అయస్కాంతాలు A, B, C లను పరిగణించండి, అవి ఒక్కొక్క అయస్కాంతం యొక్క ధ్రువాలు. A, B ఆకర్షించబడతాయి మరియు A, C వికర్షించబడతాయి. అప్పుడు కింది వాక్యం నిజం",
    "options": [
      "A, C are like and B, C are like.\nA, C సజాతి మరియు B, C సజాతి.",
      "A, B are unlike and B, C are unlike.\nA, B విజాతి మరియు B, C విజాతి.",
      "A, B are unlike and B, C are like.\nA, B విజాతి మరియు B, C సజాతి.",
      "A, B are like and B, C are unlike.\nA, B సజాతి మరియు B, C విజాతి."
    ],
    "correctAnswer": 1,
    "explanation": "అయస్కాంతత్వం యొక్క ప్రాథమిక సూత్రం ప్రకారం సజాతి ధ్రువాలు వికర్షించుకుంటాయి, మరియు విజాతి ధ్రువాలు ఆకర్షించుకుంటాయి. ధ్రువం A మరియు ధ్రువం C వికర్షించుకుంటున్నాయి కాబట్టి, అవి సజాతి ధ్రువాలు అయి ఉండాలి (ఉదా. రెండూ ఉత్తర ధ్రువాలు). ధ్రువం A మరియు ధ్రువం B ఆకర్షించుకుంటున్నాయి కాబట్టి, అవి విజాతి ధ్రువాలు అయి ఉండాలి (ఉదా. A ఉత్తరం అయితే, B దక్షిణం అయి ఉండాలి). పర్యవసానంగా, C, A లాంటిది (ఉత్తరం) మరియు B, A కు విరుద్ధం (దక్షిణం) కాబట్టి, B మరియు C కూడా విజాతి ధ్రువాలు అవుతాయి."
  },
  {
    "id": 214,
    "question": "The molecular formula for Ammonium Phosphate is (APTET July 2011)\nఅమ్మోనియం ఫాస్ఫేట్ యొక్క అణు సూత్రం",
    "options": [
      "NH₃PO₃",
      "NH₃(PO₄)₂",
      "(NH₄)₃PO₄",
      "NH₄PO₃"
    ],
    "correctAnswer": 2,
    "explanation": "అమ్మోనియం అయాన్ $NH₄⁺$ రసాయన సూత్రాన్ని మరియు +1 ఛార్జ్‌ను కలిగి ఉంటుంది. ఫాస్ఫేట్ అయాన్ $PO₄³⁻$ సూత్రాన్ని మరియు -3 ఛార్జ్‌ను కలిగి ఉంటుంది. ఒక తటస్థ అయానిక్ సమ్మేళనాన్ని ఏర్పరచడానికి, మొత్తం ధనాత్మక ఛార్జ్ మొత్తం రుణాత్మక ఛార్జ్‌ను సమతుల్యం చేయాలి. అందువల్ల, ఒక ఫాస్ఫేట్ అయాన్ యొక్క ఛార్జ్‌ను సమతుల్యం చేయడానికి మూడు అమ్మోనియం అయాన్‌లు అవసరం, ఫలితంగా అణు సూత్రం $(NH₄)₃PO₄$ అవుతుంది."
  },
  {
    "id": 215,
    "question": "The apparatus used to transfer a fixed volume of liquid from the source accurately to another container is (APTET July 2011)\nఒక మూలం నుండి మరొక పాత్రకు స్థిరమైన పరిమాణంలో ద్రవాన్ని కచ్చితంగా బదిలీ చేయడానికి ఉపయోగించే పరికరం",
    "options": [
      "Pipette\nపిపెట్",
      "Measuring jar\nకొలజాడీ",
      "Measuring flask\nకొలజాడీ ఫ్లాస్క్",
      "Burette\nబ్యూరెట్"
    ],
    "correctAnswer": 0,
    "explanation": "పిపెట్ అనేది ఒక ప్రయోగశాల పరికరం, ఇది కచ్చితమైన, స్థిరమైన పరిమాణంలో ద్రవాన్ని కొలవడానికి మరియు బదిలీ చేయడానికి ప్రత్యేకంగా రూపొందించబడింది. కొలజాడీ (లేదా గ్రాడ్యుయేటెడ్ సిలిండర్) సుమారు పరిమాణ కొలతల కోసం ఉపయోగించబడుతుంది. కొలజాడీ ఫ్లాస్క్ (వాల్యూమెట్రిక్ ఫ్లాస్క్) ఒక నిర్దిష్ట ఉష్ణోగ్రత వద్ద ఒక కచ్చితమైన పరిమాణాన్ని కలిగి ఉండేలా క్రమాంకనం చేయబడింది. బ్యూరెట్ అనేది ఒక ద్రవాన్ని వేరియబుల్ కానీ కచ్చితంగా కొలిచిన పరిమాణాలలో పంపిణీ చేయడానికి ఉపయోగిస్తారు, సాధారణంగా టైట్రేషన్లలో."
  },
  {
    "id": 216,
    "question": "In a Bramah press other things remaining constant if the cross-section of large piston is doubled, then the thrust on it (APTET July 2011)\nఒక బ్రామా ప్రెస్‌లో ఇతర విషయాలు స్థిరంగా ఉన్నప్పుడు, పెద్ద పిస్టన్ యొక్క అడ్డుకోత వైశాల్యం రెట్టింపు చేయబడితే, దానిపై ఉండే థ్రస్ట్ (తోపుడు బలం)",
    "options": [
      "is raised by 4 times.\n4 రెట్లు పెరుగుతుంది.",
      "will remain the same.\nఅదే విధంగా ఉంటుంది.",
      "is halved.\nసగానికి తగ్గుతుంది.",
      "is doubled.\nరెట్టింపు అవుతుంది."
    ],
    "correctAnswer": 3,
    "explanation": "బ్రామా ప్రెస్ పాస్కల్ సూత్రంపై పనిచేస్తుంది, ఇక్కడ ఒక మూసివేసిన ద్రవంలో పీడనం ($P$) స్థిరంగా ఉంటుంది ($P = F/A$, ఇక్కడ F బలం మరియు A వైశాల్యం). చిన్న పిస్టన్‌పై పీడనం ($P₁ = F₁/A₁$) పెద్ద పిస్టన్‌పై పీడనానికి ($P₂ = F₂/A₂$) సమానం. అందువల్ల, పెద్ద పిస్టన్‌పై అవుట్‌పుట్ బలం (థ్రస్ట్) $F₂ = F₁ \times (A₂/A₁)$ అవుతుంది. పెద్ద పిస్టన్ యొక్క వైశాల్యం ($A₂$) రెట్టింపు చేయబడితే, ఇన్‌పుట్ బలం ($F₁$) స్థిరంగా ఉందని భావిస్తే, థ్రస్ట్ ($F₂$) కూడా రెట్టింపు అవుతుంది."
  },
  {
    "id": 217,
    "question": "'m' gms of Carbon reacts completely with 'n' gms of Oxygen to produce Carbon dioxide. The mass of Oxygen required to react with 'm' gms of Carbon completely and produce Carbon-monoxide is..... (APTET July 2011)\n'm' గ్రాముల కార్బన్, 'n' గ్రాముల ఆక్సిజన్‌తో పూర్తిగా చర్య జరిపి కార్బన్ డయాక్సైడ్‌ను ఉత్పత్తి చేస్తుంది. 'm' గ్రాముల కార్బన్‌తో పూర్తిగా చర్య జరిపి కార్బన్-మోనాక్సైడ్‌ను ఉత్పత్తి చేయడానికి అవసరమైన ఆక్సిజన్ ద్రవ్యరాశి.....",
    "options": [
      "n/2 gms\nn/2 గ్రాములు",
      "m gms\nm గ్రాములు",
      "n gms\nn గ్రాములు",
      "m/2 gms\nm/2 గ్రాములు"
    ],
    "correctAnswer": 0,
    "explanation": "రసాయన చర్యలు: 1. కార్బన్ డయాక్సైడ్ కోసం: $C + O₂ → CO₂  2. కార్బన్ మోనాక్సైడ్ కోసం: $2C + O₂ → 2CO$ (లేదా $C + ½O₂ → CO$) తుల్యం చేయబడిన సమీకరణాల నుండి, అదే పరిమాణంలో కార్బన్‌తో చర్య జరపడానికి, కార్బన్ మోనాక్సైడ్ ఉత్పత్తికి కార్బన్ డయాక్సైడ్ ఉత్పత్తితో పోలిస్తే సరిగ్గా సగం పరిమాణంలో ఆక్సిజన్ అవసరం. 'm' గ్రాముల కార్బన్‌కు $CO₂$ కోసం 'n' గ్రాముల ఆక్సిజన్ అవసరమైతే, $CO$ కోసం n/2 గ్రాముల ఆక్సిజన్ అవసరం."
  },
  {
    "id": 218,
    "question": "The gas liberated on heating Zinc Carbonate is (APTET July 2011)\nజింక్ కార్బోనేట్‌ను వేడి చేసినప్పుడు విడుదలయ్యే వాయువు",
    "options": [
      "H₂",
      "O₂",
      "CO₂",
      "CO"
    ],
    "correctAnswer": 2,
    "explanation": "జింక్ కార్బోనేట్ ($ZnCO₃$) యొక్క ఉష్ణ వియోగం జింక్ ఆక్సైడ్ ($ZnO$) మరియు కార్బన్ డయాక్సైడ్ ($CO₂$) వాయువు ఏర్పడటానికి దారితీస్తుంది. ఈ చర్యను ఇలా సూచిస్తారు: $ZnCO₃ (s) → ZnO (s) + CO₂ (g)$"
  },
  {
    "id": 219,
    "question": "The first artificial satellite launched by India is ...... (APTET July 2011)\nభారతదేశం ప్రయోగించిన మొదటి కృత్రిమ ఉపగ్రహం ......",
    "options": [
      "Bhaskara\nభాస్కర",
      "APPLE\nఆపిల్",
      "Arya Bhatta\nఆర్యభట్ట",
      "Rohini\nరోహిణి"
    ],
    "correctAnswer": 2,
    "explanation": "ఆర్యభట్ట భారతదేశపు మొదటి ఉపగ్రహం. దీనిని ఏప్రిల్ 19, 1975న సోవియట్ యూనియన్ ప్రయోగించింది. ఈ ఉపగ్రహానికి ప్రసిద్ధ ప్రాచీన భారతీయ ఖగోళ శాస్త్రవేత్త మరియు గణిత శాస్త్రజ్ఞుడి పేరు పెట్టారు."
  },
  {
    "id": 220,
    "question": "The emblem of a T.V. channel is displayed at the left hand top corner of the screen. When Raju is seeing the image of the T.V. in a mirror the emblem appears at (APTET July 2011)\nఒక T.V. ఛానల్ యొక్క చిహ్నం స్క్రీన్ యొక్క ఎడమ చేతి పై మూలలో ప్రదర్శించబడుతుంది. రాజు అద్దంలో T.V. యొక్క ప్రతిబింబాన్ని చూస్తున్నప్పుడు ఆ చిహ్నం ఎక్కడ కనిపిస్తుంది",
    "options": [
      "left hand bottom corner.\nఎడమ చేతి దిగువ మూలలో.",
      "right hand top corner.\nకుడి చేతి పై మూలలో.",
      "left hand top corner.\nఎడమ చేతి పై మూలలో.",
      "right hand bottom corner.\nకుడి చేతి దిగువ మూలలో."
    ],
    "correctAnswer": 1,
    "explanation": "సమతల దర్పణం పార్శ్వ విలోమ ప్రతిబింబాన్ని సృష్టిస్తుంది, అంటే వస్తువు యొక్క ఎడమ వైపు ప్రతిబింబంలో కుడి వైపుగా కనిపిస్తుంది మరియు దీనికి విరుద్ధంగా ఉంటుంది. నిలువు దిశ (పైకి మరియు క్రిందికి) మారదు. అందువల్ల, T.V. స్క్రీన్ యొక్క పై-ఎడమ మూలలో ఉన్న ఒక చిహ్నం దాని అద్దం ప్రతిబింబంలో పై-కుడి మూలలో కనిపిస్తుంది."
  },
  {
    "id": 221,
    "question": "The shape of the body which is always in stable equilibrium, irrespective of the position it is placed, is (APTET July 2011)\nఏ స్థితిలో ఉంచినా ఎల్లప్పుడూ స్థిరమైన సమతాస్థితిలో ఉండే వస్తువు యొక్క ఆకారం",
    "options": [
      "Cube\nఘనం",
      "Cone\nశంఖువు",
      "Cylinder\nస్థూపం",
      "Sphere\nగోళం"
    ],
    "correctAnswer": 3,
    "explanation": "ఈ ప్రశ్న 'స్థిరమైన' మరియు 'తటస్థ' సమతాస్థితిని గందరగోళానికి గురి చేస్తుంది. ఒక వస్తువును కొద్దిగా స్థానభ్రంశం చేసిన తర్వాత దాని అసలు స్థానానికి తిరిగి వస్తే అది స్థిరమైన సమతాస్థితిలో ఉంటుంది. ఒక వస్తువును స్థానభ్రంశం చేసిన తర్వాత కొత్త స్థానంలోనే ఉంటే అది తటస్థ సమతాస్థితిలో ఉంటుంది. ఒక గోళం ఎల్లప్పుడూ తటస్థ సమతాస్థితిలో ఉంటుంది, అంటే అది పడిపోకుండా ఏ స్థితిలో ఉంచినా అక్కడే ఉంటుంది. ఒక ఘనం దాని ముఖంపై ఉన్నప్పుడు మాత్రమే స్థిరంగా ఉంటుంది, మరియు ఒక శంఖువు దాని ఆధారంపై ఉన్నప్పుడు మాత్రమే స్థిరంగా ఉంటుంది. ఏ దిశలోనైనా సమతాస్థితిలో ఉండే వస్తువుకు గోళం ఉత్తమ సమాధానం."
  },
  {
    "id": 222,
    "question": "Electrochemical effect is used in ... (APTET July 2011)\nవిద్యుత్ రసాయన ప్రభావం ...లో ఉపయోగించబడుతుంది.",
    "options": [
      "Telegraph\nటెలిగ్రాఫ్",
      "Electric motors\nవిద్యుత్ మోటార్లు",
      "Electric stove\nవిద్యుత్ స్టవ్",
      "Purification of metals\nలోహాల శుద్ధీకరణ"
    ],
    "correctAnswer": 3,
    "explanation": "విద్యుత్ రసాయన ప్రభావం విద్యుత్ ద్వారా నడిచే రసాయన ప్రతిచర్యలను (విద్యుద్విశ్లేషణ) కలిగి ఉంటుంది. ఈ సూత్రం లోహాల శుద్ధీకరణ (ఎలక్ట్రోరిఫైనింగ్) మరియు ఎలక్ట్రోప్లేటింగ్‌లో వర్తించబడుతుంది. దీనికి విరుద్ధంగా, ఒక విద్యుత్ స్టవ్ కరెంట్ యొక్క ఉష్ణ ప్రభావాన్ని ఉపయోగిస్తుంది, అయితే విద్యుత్ మోటార్లు మరియు టెలిగ్రాఫ్‌లు కరెంట్ యొక్క అయస్కాంత ప్రభావం ఆధారంగా పనిచేస్తాయి."
  },
  {
    "id": 223,
    "question": "One of the following is not the correct pair (APTET July 2011)\nకింది వాటిలో ఒకటి సరైన జత కాదు",
    "options": [
      "Chlorophyll - Conversion of energy.\nక్లోరోఫిల్ - శక్తి మార్పిడి.",
      "Chromoplast - Colourless.\nక్రోమోప్లాస్ట్ - రంగులేనిది.",
      "Young tomatoes - Leucoplast.\nలేత టమోటాలు - ల్యూకోప్లాస్ట్.",
      "Green chilli - Chloroplast.\nపచ్చి మిరప - క్లోరోప్లాస్ట్."
    ],
    "correctAnswer": 1,
    "explanation": "క్రోమోప్లాస్ట్‌లు కెరోటినాయిడ్స్ వంటి వర్ణద్రవ్యాలను కలిగి ఉన్న ప్లాస్టిడ్‌లు, ఇవి పండ్లు మరియు పువ్వులకు వాటి పసుపు, నారింజ లేదా ఎరుపు రంగులను ఇస్తాయి; అవి రంగులేనివి కావు. ల్యూకోప్లాస్ట్‌లు రంగులేని ప్లాస్టిడ్‌లు. అందువల్ల, 'క్రోమోప్లాస్ట్ - రంగులేనిది' జత తప్పు. కిరణజన్య సంయోగక్రియ సమయంలో కాంతి శక్తిని రసాయన శక్తిగా మార్చడానికి క్లోరోఫిల్ అవసరం. లేత టమోటాలలోని ల్యూకోప్లాస్ట్‌లు పండు పండినప్పుడు క్రోమోప్లాస్ట్‌లుగా మారతాయి. పచ్చి మిరపకాయలలో క్లోరోప్లాస్ట్‌లు ఉంటాయి."
  },
  {
    "id": 224,
    "question": "A plant has bisexual flowers. You want to cross pollinate those flowers. You have to ..... (APTET July 2011)\nఒక మొక్కకు ద్విలింగ పుష్పాలు ఉన్నాయి. మీరు ఆ పువ్వులను పరపరాగసంపర్కం చేయాలనుకుంటున్నారు. మీరు ..... చేయాలి.",
    "options": [
      "remove both Androecium and Gynoecium.\nఆండ్రోసియం మరియు గైనోసియం రెండింటినీ తొలగించాలి.",
      "remove Calyx.\nకాలిక్స్‌ను తొలగించాలి.",
      "remove Corolla.\nకొరోల్లాను తొలగించాలి.",
      "remove either Gynoecium or Androecium.\nగైనోసియం లేదా ఆండ్రోసియంలలో ఒకదాన్ని తొలగించాలి."
    ],
    "correctAnswer": 3,
    "explanation": "ఒక ద్విలింగ పుష్పంలో (పురుష మరియు స్త్రీ భాగాలు రెండూ ఉన్నవి) పరపరాగసంపర్కం నిర్ధారించడానికి మరియు స్వీయ-పరాగసంపర్కాన్ని నివారించడానికి, విపుంసీకరణ (emasculation) చేయాలి. ఈ ప్రక్రియలో పురుష పునరుత్పత్తి భాగాన్ని (ఆండ్రోసియం, లేదా కేసరాలు) అవి పరిపక్వం చెంది పుప్పొడిని విడుదల చేయడానికి ముందే తొలగించడం జరుగుతుంది, అయితే స్త్రీ భాగాన్ని (గైనోసియం) మరొక మొక్క నుండి పుప్పొడిని స్వీకరించడానికి చెక్కుచెదరకుండా ఉంచుతారు."
  },
  {
    "id": 225,
    "question": "Alternation of generation is seen in the life history of (APTET July 2011)\nజీవిత చరిత్రలో తరాల ఏకాంతరత ఎక్కడ కనిపిస్తుంది",
    "options": [
      "Frog\nకప్ప",
      "Selaginella\nసెలాజినెల్లా",
      "Chlamydomonas\nక్లామిడోమోనాస్",
      "Mosquito\nదోమ"
    ],
    "correctAnswer": 1,
    "explanation": "తరాల ఏకాంతరత అనేది ఒక జీవి యొక్క జీవిత చక్రంలో బహుకణ ద్వయస్థితిక (స్పోరోఫైట్) దశ మరియు బహుకణ ఏకస్థితిక (గామెటోఫైట్) దశ మధ్య ప్రత్యామ్నాయంగా మారే ఒక నమూనా. ఇది అన్ని భూమి మొక్కల లక్షణం. సెలాజినెల్లా, ఒక రకమైన ఫెర్న్ మిత్రుడు, ఈ జీవిత చక్రాన్ని స్పష్టంగా ప్రదర్శిస్తుంది. కప్పలు మరియు దోమలు వంటి జంతువులు రూపాంతరక్రియకు గురవుతాయి, ఇది శరీర రూపంలో మార్పు, ఏకస్థితిక మరియు ద్వయస్థితిక తరాల ఏకాంతరత కాదు."
  },
  {
    "id": 226,
    "question": "The evidences of extinct animals left on earth that are useful in 'Evolution of life' are (APTET July 2011)\n'జీవ పరిణామం'లో ఉపయోగపడే, భూమిపై మిగిలి ఉన్న అంతరించిపోయిన జంతువుల ఆధారాలు",
    "options": [
      "Bones\nఎముకలు",
      "Foot prints\nపాదముద్రలు",
      "Fossils\nశిలాజాలు",
      "Fuels\nఇంధనాలు"
    ],
    "correctAnswer": 2,
    "explanation": "శిలాజాలు గత భౌగోళిక యుగం నుండి జీవుల యొక్క భద్రపరచబడిన అవశేషాలు, జాడలు లేదా ముద్రలు. అవి పరిణామాన్ని అధ్యయనం చేయడానికి అత్యంత కీలకమైన సాక్ష్యం, ఎందుకంటే అవి గత జీవ రూపాల యొక్క ప్రత్యక్ష రికార్డును అందిస్తాయి మరియు కాలక్రమేణా అవి ఎలా మారాయో చూపిస్తాయి. ఎముకలు మరియు పాదముద్రలు శిలాజాలుగా మారగలవు, కానీ 'శిలాజాలు' అనేది అటువంటి అన్ని సాక్ష్యాల కోసం సమగ్ర పదం."
  },
  {
    "id": 227,
    "question": "Medicine for dog bite was discovered by ........ (APTET July 2011)\nకుక్క కాటుకు మందును ........ కనుగొన్నారు.",
    "options": [
      "Edward Jenner\nఎడ్వర్డ్ జెన్నర్",
      "Louis Pasteur\nలూయిస్ పాశ్చర్",
      "Robert Koch\nరాబర్ట్ కోచ్",
      "Alexander Fleming\nఅలెగ్జాండర్ ఫ్లెమింగ్"
    ],
    "correctAnswer": 1,
    "explanation": "కుక్క కాటు వలన రేబిస్, ఒక ప్రాణాంతక వైరల్ వ్యాధి సోకే ప్రమాదం ఉంది. ఫ్రెంచ్ జీవశాస్త్రవేత్త లూయిస్ పాశ్చర్ 1885లో రేబిస్‌కు వ్యతిరేకంగా మొదటి సమర్థవంతమైన వ్యాక్సిన్‌ను అభివృద్ధి చేశారు. ఎడ్వర్డ్ జెన్నర్ మశూచి వ్యాక్సిన్‌ను సృష్టించారు, రాబర్ట్ కోచ్ ఆంత్రాక్స్, క్షయ మరియు కలరాకు కారణమయ్యే బ్యాక్టీరియాను గుర్తించారు, మరియు అలెగ్జాండర్ ఫ్లెమింగ్ పెన్సిలిన్‌ను కనుగొన్నారు."
  },
  {
    "id": 228,
    "question": "Suppose a student of 8th class complains that he has ear-ache, fever and pain in opening mouth. As a biology teacher, you identify the disease as (APTET July 2011)\n8వ తరగతి విద్యార్థి తనకు చెవి నొప్పి, జ్వరం మరియు నోరు తెరవడంలో నొప్పి ఉందని ఫిర్యాదు చేశాడనుకుందాం. ఒక జీవశాస్త్ర ఉపాధ్యాయుడిగా, మీరు ఆ వ్యాధిని ఇలా గుర్తిస్తారు",
    "options": [
      "Pertusis\nపెర్టుసిస్",
      "Rubella\nరుబెల్లా",
      "Mumps\nగవదబిళ్లలు",
      "Malaria\nమలేరియా"
    ],
    "correctAnswer": 2,
    "explanation": "గవదబిళ్లలు ఒక అంటువ్యాధి వైరల్ ఇన్ఫెక్షన్, ఇది ప్రధానంగా చెవుల దగ్గర ఉన్న పరోటిడ్ (లాలాజల) గ్రంథులను ప్రభావితం చేస్తుంది. దాని సాధారణ లక్షణాలు ఈ గ్రంథుల వాపు, ఇది చెవి ప్రాంతంలో నొప్పికి మరియు నోరు తెరవడంలో కష్టం లేదా నొప్పికి దారితీస్తుంది, జ్వరం మరియు సాధారణ అసౌకర్యంతో పాటు."
  },
  {
    "id": 229,
    "question": "Identify the right food chain. (APTET July 2011)\nసరైన ఆహార గొలుసును గుర్తించండి.",
    "options": [
      "Calotes → Eagle → Snake\nతొండ → గద్ద → పాము",
      "Carnivores → Herbivores → Plants\nమాంసాహారులు → శాకాహారులు → మొక్కలు",
      "Plants → Insects → Calotes\nమొక్కలు → కీటకాలు → తొండ",
      "Plants → Goat → Tiger\nమొక్కలు → మేక → పులి"
    ],
    "correctAnswer": 3,
    "explanation": "ఒక ఆహార గొలుసు పర్యావరణ వ్యవస్థలో శక్తి ప్రవాహాన్ని వివరిస్తుంది. ఇది ఒక ఉత్పత్తిదారుతో (సాధారణంగా ఒక మొక్క) ప్రారంభం కావాలి, దాని తర్వాత ఒక ప్రాథమిక వినియోగదారు (శాకాహారి), మరియు తరువాత ద్వితీయ లేదా తృతీయ వినియోగదారులు (మాంసాహారులు లేదా సర్వభక్షకులు) ఉండాలి. ఎంపిక (3) 'మొక్కలు → కీటకాలు → తొండ (బల్లి)' మరియు ఎంపిక (4) 'మొక్కలు → మేక → పులి' రెండూ సరైన ఆహార గొలుసులను సూచిస్తాయి. బహుళ ఎంపికలు సరైనవి అయినప్పుడు, ప్రశ్నలో పొరపాటు ఉండవచ్చు, కానీ అందించిన సమాధాన కీ ప్రకారం, 'మొక్కలు → మేక → పులి' అనేది ఉద్దేశించిన సమాధానం."
  },
  {
    "id": 230,
    "question": "The order of stages in tissue culture is (APTET July 2011)\nకణజాల వర్ధనంలో దశల క్రమం",
    "options": [
      "Explant, Callus, Plant, New Plant\nఎక్స్‌ప్లాంట్, కాలస్, ప్లాంట్‌లెట్, కొత్త మొక్క",
      "Callus, Plant, New Plant, Explant\nకాలస్, ప్లాంట్‌లెట్, కొత్త మొక్క, ఎక్స్‌ప్లాంట్",
      "Plant, Explant, Callus, New Plant\nప్లాంట్‌లెట్, ఎక్స్‌ప్లాంట్, కాలస్, కొత్త మొక్క",
      "New Plant, Plant, Callus, Explant\nకొత్త మొక్క, ప్లాంట్‌లెట్, కాలస్, ఎక్స్‌ప్లాంట్"
    ],
    "correctAnswer": 0,
    "explanation": "మొక్కల కణజాల వర్ధనంలో సరైన క్రమం మొక్క కణజాలం యొక్క ఒక చిన్న ముక్కను తీసుకోవడంతో ప్రారంభమవుతుంది, దీనిని 'ఎక్స్‌ప్లాంట్' అంటారు. ఈ ఎక్స్‌ప్లాంట్‌ను ఒక స్టెరైల్ పోషక మాధ్యమంపై పెంచుతారు, అక్కడ దాని కణాలు విభజన చెంది 'కాలస్' అని పిలువబడే ఒక అవిభేదిత ద్రవ్యరాశిని ఏర్పరుస్తాయి. ఈ కాలస్‌ను విభేదనం చెందించి, ఒక చిన్న 'ప్లాంట్‌లెట్' గా అభివృద్ధి చేయడానికి హార్మోన్లను ఉపయోగిస్తారు, ఇది చివరికి ఒక 'కొత్త మొక్క'గా పెరుగుతుంది."
  },
  {
    "id": 231,
    "question": "The human dental formula (APTET July 2011)\nమానవ దంత సూత్రం",
    "options": [
      "1/1, 2/2, 3/3, 2/2",
      "2/2, 1/1, 2/2, 3/3",
      "2/2, 2/2, 3/3, 3/3",
      "1/1, 3/3, 2/2, 2/2"
    ],
    "correctAnswer": 1,
    "explanation": "మానవ దంత సూత్రం నోటి యొక్క ఒక క్వాడ్రంట్‌లో (పై లేదా క్రింది దవడలో సగం) ప్రతి రకం పంటి సంఖ్యను వివరిస్తుంది. శాశ్వత దంతాల కోసం, సూత్రం కొరుకు పళ్ళు (Incisors), కోర పళ్ళు (Canines), అగ్ర చర్వణకాలు (Premolars), మరియు చర్వణకాలు (Molars) క్రమంలో వ్రాయబడుతుంది. వయోజన మానవునికి సరైన సూత్రం 2/2 (కొరుకు పళ్ళు), 1/1 (కోర పళ్ళు), 2/2 (అగ్ర చర్వణకాలు), 3/3 (చర్వణకాలు)."
  },
  {
    "id": 232,
    "question": "A scientist has selected single celled organisms that can live even in acidic medium like HCl for his experiment. They belong to the Kingdom (APTET July 2011)\nఒక శాస్త్రవేత్త తన ప్రయోగం కోసం HCl వంటి ఆమ్ల మాధ్యమంలో కూడా జీవించగల ఏకకణ జీవులను ఎంచుకున్నాడు. అవి ఈ రాజ్యానికి చెందినవి",
    "options": [
      "Animalia\nఅనిమాలియా",
      "Plantae\nప్లాంటే",
      "Monera\nమొనీరా",
      "Protista\nప్రొటిస్టా"
    ],
    "correctAnswer": 2,
    "explanation": "మొనీరా రాజ్యంలో బ్యాక్టీరియా మరియు ఆర్కియా వంటి ప్రొకార్యోటిక్ జీవులు ఉంటాయి. ఆర్కియాలు కఠినమైన వాతావరణంలో జీవించగలవు కాబట్టి వాటిని ఎక్స్‌ట్రీమోఫైల్స్ అంటారు. అసిడోఫైల్స్ అనేవి అధిక ఆమ్ల పరిస్థితులలో వృద్ధి చెందే ఒక రకమైన ఎక్స్‌ట్రీమోఫైల్స్. అందువల్ల, HClలో నివసించే ఏకకణ జీవులు మొనీరాకు చెందినవి."
  },
  {
    "id": 233,
    "question": "Most of the disease spreading animals without notochord belong to phylum (APTET July 2011)\nపృష్ఠవంశం లేని, వ్యాధులను వ్యాప్తి చేసే చాలా జంతువులు ఈ వర్గానికి చెందినవి",
    "options": [
      "Arthropoda\nఆర్థ్రోపొడా",
      "Protozoa\nప్రోటోజోవా",
      "Nematyhelminthes\nనెమటిహెల్మింథిస్",
      "Mammalia\nమమ్మాలియా"
    ],
    "correctAnswer": 0,
    "explanation": "పృష్ఠవంశం లేని జంతువులు అకశేరుకాలు. ఆర్థ్రోపొడా వర్గం, ఇందులో కీటకాలు (దోమలు, ఈగలు, పురుగులు వంటివి) మరియు అరాక్నిడ్‌లు (పేలు వంటివి) ఉంటాయి, మానవులకు మరియు ఇతర జంతువులకు వ్యాధులను వ్యాప్తి చేసే వాహకాలుగా పనిచేసే అత్యధిక జాతులను కలిగి ఉంది. మమ్మాలియా సకశేరుకాలు (పృష్ఠవంశం కలిగి ఉంటాయి), మరియు ప్రోటోజోవా జంతు రాజ్యంలో వర్గీకరించబడలేదు."
  },
  {
    "id": 234,
    "question": "This provides quantitative as well as qualitative description of the outcomes of teaching-learning process. (APTET July 2011)\nఇది బోధన-అభ్యాస ప్రక్రియ యొక్క ఫలితాల పరిమాణాత్మక మరియు గుణాత్మక వివరణను అందిస్తుంది.",
    "options": [
      "Testing\nపరీక్షించడం",
      "Measurement\nకొలత",
      "Evaluation\nమూల్యాంకనం",
      "Examination\nపరీక్ష"
    ],
    "correctAnswer": 2,
    "explanation": "మూల్యాంకనం అనేది బోధన-అభ్యాస ప్రక్రియ యొక్క విలువ లేదా యోగ్యతను నిర్ధారించే ఒక విస్తృతమైన, క్రమబద్ధమైన ప్రక్రియ. ఇది సమగ్రమైనది, మొత్తం ఫలితాలను అంచనా వేయడానికి పరిమాణాత్మక డేటా (పరీక్షలు మరియు కొలతల నుండి సంఖ్యా స్కోర్లు) మరియు గుణాత్మక సమాచారం (పరిశీలనలు, వివరణలు, విలువ తీర్పులు) రెండింటినీ ఉపయోగిస్తుంది."
  },
  {
    "id": 235,
    "question": "In Bloom's Taxonomy of Educational Objectives, the specification 'Translation' belongs to the objective (APTET July 2011)\nబ్లూమ్ యొక్క విద్యా లక్ష్యాల వర్గీకరణలో, 'అనువాదం' అనే నిర్దిష్టత ఈ లక్ష్యానికి చెందినది",
    "options": [
      "Application\nఅనువర్తనం",
      "Analysis\nవిశ్లేషణ",
      "Synthesis\nసంశ్లేషణ",
      "Comprehension\nఅవగాహన"
    ],
    "correctAnswer": 3,
    "explanation": "బ్లూమ్ యొక్క అసలు వర్గీకరణలో, అభిజ్ఞా డొమైన్ యొక్క 'అవగాహన' స్థాయి పదార్థం యొక్క అర్థాన్ని గ్రహించే సామర్థ్యాన్ని సూచిస్తుంది. ఈ స్థాయిలో అనువాదం (సమాచారాన్ని ఒక రూపం నుండి మరొక రూపంలోకి మార్చడం, ఉదా. ఒక సూత్రాన్ని మాటలలో వివరించడం), వ్యాఖ్యానం (వివరించడం లేదా సంగ్రహించడం), మరియు బహిర్వేశనం (అంచనాలు వేయడం) వంటి ప్రవర్తనలు ఉంటాయి."
  },
  {
    "id": 236,
    "question": "The information that need not be given in a laboratory instruction card is (APTET July 2011)\nఒక ప్రయోగశాల సూచనల కార్డులో ఇవ్వనవసరం లేని సమాచారం",
    "options": [
      "who has to do the experiment.\nప్రయోగం ఎవరు చేయాలో.",
      "the purpose of the equipment.\nపరికరాల ఉద్దేశ్యం.",
      "the method to be adopted.\nఅనుసరించాల్సిన పద్ధతి.",
      "precautions to be observed.\nపాటించాల్సిన జాగ్రత్తలు."
    ],
    "correctAnswer": 0,
    "explanation": "ఒక ప్రయోగశాల సూచనల కార్డు అనేది ఒక ప్రయోగాన్ని నిర్వహించే ఏ విద్యార్థికైనా సాధారణ మార్గదర్శి. ఇందులో లక్ష్యం, అవసరమైన పదార్థాలు, విధానం/పద్ధతి మరియు భద్రతా జాగ్రత్తలు వంటి అవసరమైన సమాచారం ఉండాలి. సూచనలు సార్వత్రికమైనవి కాబట్టి, ప్రయోగాన్ని నిర్వహించే నిర్దిష్ట విద్యార్థి పేరును పేర్కొనవలసిన అవసరం లేదు."
  },
  {
    "id": 237,
    "question": "In Edger Dale's cone of experience the learning experiences are arranged in the order of (taking the start point from the base of the cone) (APTET July 2011)\nఎడ్గర్ డేల్ యొక్క అనుభవ శంఖువులో అభ్యాస అనుభవాలు ఈ క్రమంలో అమర్చబడి ఉంటాయి (శంఖువు యొక్క ఆధారం నుండి ప్రారంభ బిందువును తీసుకుంటూ)",
    "options": [
      "decreasing abstractness.\nతగ్గుతున్న నైరూప్యత.",
      "increasing abstractness.\nపెరుగుతున్న నైరూప్యత.",
      "increasing expenditure.\nపెరుగుతున్న ఖర్చు.",
      "increasing concreteness.\nపెరుగుతున్న వాస్తవికత."
    ],
    "correctAnswer": 1,
    "explanation": "ఎడ్గర్ డేల్ యొక్క అనుభవ శంఖువు నమూనా అభ్యాస అనుభవాలను వాస్తవికత నుండి నైరూప్యత వరకు ఒక క్రమంలో అమరుస్తుంది. శంఖువు యొక్క ఆధారం అత్యంత వాస్తవిక, ప్రత్యక్ష, చేతితో చేసే అనుభవాలను (ఉదా. ఒక నిజమైన పనిని చేయడం) సూచిస్తుంది. శంఖువు పైకి వెళ్ళేకొద్దీ, అనుభవాలు క్రమంగా మరింత నైరూప్యంగా మారతాయి, చివరకు శిఖరం వద్ద శబ్ద సంకేతాలతో (చదవడం, మాటలు వినడం) ముగుస్తాయి. అందువల్ల, ఆధారం నుండి పైకి వెళ్ళే క్రమం పెరుగుతున్న నైరూప్యతను సూచిస్తుంది."
  },
  {
    "id": 238,
    "question": "The method of teaching that makes the students to look at knowledge as a whole is (APTET July 2011)\nవిద్యార్థులను జ్ఞానాన్ని సంపూర్ణంగా చూసేలా చేసే బోధనా పద్ధతి",
    "options": [
      "Project method\nప్రాజెక్ట్ పద్ధతి",
      "Lecture method\nఉపన్యాస పద్ధతి",
      "Demonstration method\nప్రదర్శన పద్ధతి",
      "Discussion method\nచర్చా పద్ధతి"
    ],
    "correctAnswer": 0,
    "explanation": "ప్రాజెక్ట్ పద్ధతి అనేది ఒక బోధనా విధానం, ఇక్కడ విద్యార్థులు వాస్తవ-ప్రపంచ సమస్య లేదా అంశంపై లోతైన పరిశోధనలో పాల్గొంటారు. ఈ పద్ధతి అంతర్లీనంగా బహుళ-విషయ సంబంధితమైనది, ప్రాజెక్ట్‌ను పూర్తి చేయడానికి విద్యార్థులు వివిధ సబ్జెక్టుల నుండి జ్ఞానం మరియు నైపుణ్యాలను ఏకీకృతం చేయవలసి ఉంటుంది, తద్వారా జ్ఞానం యొక్క సంపూర్ణ దృష్టిని పెంపొందిస్తుంది."
  },
  {
    "id": 239,
    "question": "An ancient, convenient and inexpensive method of teaching that is suitable for teaching almost all the subjects of school curriculum is (APTET July 2011)\nపాఠశాల పాఠ్యప్రణాళికలోని దాదాపు అన్ని సబ్జెక్టులను బోధించడానికి అనువైన ఒక పురాతన, అనుకూలమైన మరియు చవకైన బోధనా పద్ధతి",
    "options": [
      "Lecture method\nఉపన్యాస పద్ధతి",
      "Demonstration method\nప్రదర్శన పద్ధతి",
      "Source method\nఆధార పద్ధతి",
      "Story-telling method\nకథ చెప్పే పద్ధతి"
    ],
    "correctAnswer": 0,
    "explanation": "ఉపన్యాస పద్ధతి అత్యంత సాంప్రదాయ మరియు దీర్ఘకాలంగా ఉన్న బోధనా పద్ధతులలో ఒకటి. ఇది అనుకూలమైనది మరియు చవకైనదిగా పరిగణించబడుతుంది, ఎందుకంటే ఇది ఒకే ఉపాధ్యాయుడు తక్కువ వనరులతో పెద్ద సమూహ విద్యార్థులకు సమాచారాన్ని అందించడానికి అనుమతిస్తుంది. దాని సౌలభ్యం కారణంగా, ఇది దాదాపు అన్ని సబ్జెక్టులలో భావనలను పరిచయం చేయడానికి, ముఖ్యంగా వాస్తవిక సమాచారం మరియు సిద్ధాంత విజ్ఞానాన్ని తెలియజేయడానికి అనువుగా ఉంటుంది."
  },
  {
    "id": 241,
    "question": "Examine the following:\nA) The tip of the tongue sweet taste\nB) The back of the tongue sour taste\nC) The edges of the tongue- bitter taste\nD) The middle of the tongue-salty taste\nIdentify the correct pairs: (APTET Jan 2012)\nకింది వాటిని పరిశీలించండి:\nA) నాలుక కొన - తీపి రుచి\nB) నాలుక వెనుక భాగం - పులుపు రుచి\nC) నాలుక అంచులు - చేదు రుచి\nD) నాలుక మధ్య భాగం - ఉప్పు రుచి\nసరైన జతలను గుర్తించండి:",
    "options": [
      "A), C)",
      "B), D)",
      "B), C)",
      "A), D)"
    ],
    "correctAnswer": 3,
    "explanation": "ఈ ప్రశ్న సాంప్రదాయకమైన, కానీ ఇప్పుడు అతి సరళీకృతంగా పరిగణించబడుతున్న 'నాలుక పటం'ని సూచిస్తుంది. నాలుక కొన తీపి రుచికి అత్యంత సున్నితంగా ఉంటుంది (A). నాలుక అంతటా అన్ని రుచులను గుర్తించగలిగినప్పటికీ, ఈ సరళీకృత నమూనాలో, కొందరు మధ్య/ముందు భాగాన్ని ఉప్పు రుచితో (D) అనుబంధిస్తారు. వెనుక భాగం చేదు కోసం మరియు పక్క భాగాలు పులుపు కోసం. దీని ఆధారంగా, ఉద్దేశించిన సరైన జతలు A) మరియు D)."
  },
  {
    "id": 242,
    "question": "The first-aid kit in a classroom contains tartaric acid, iodine, antiseptic lotion and potassium permanganate. The item/items you use to give first-aid to the victim of scorpion bite is/are (APTET Jan 2012)\nఒక తరగతి గదిలోని ప్రథమ చికిత్స పెట్టెలో టార్టారిక్ ఆమ్లం, అయోడిన్, యాంటీసెప్టిక్ లోషన్ మరియు పొటాషియం పర్మాంగనేట్ ఉన్నాయి. తేలు కాటుకు గురైన బాధితుడికి ప్రథమ చికిత్స చేయడానికి మీరు ఉపయోగించే వస్తువు/వస్తువులు ఏవి?",
    "options": [
      "iodine\nఅయోడిన్",
      "potassium permanganate or tartaric acid\nపొటాషియం పర్మాంగనేట్ లేదా టార్టారిక్ ఆమ్లం",
      "antiseptic lotion\nయాంటీసెప్టిక్ లోషన్",
      "antiseptic lotion and iodine\nయాంటీసెప్టిక్ లోషన్ మరియు అయోడిన్"
    ],
    "correctAnswer": 1,
    "explanation": "తేలు విషం సాధారణంగా క్షార స్వభావం కలిగి ఉంటుంది. విషాన్ని తటస్థీకరించి, నొప్పిని తగ్గించడానికి బలహీనమైన ఆమ్లాన్ని పూయడం ఒక సాధారణ ప్రథమ చికిత్స పద్ధతి. టార్టారిక్ ఆమ్లం ఈ ప్రయోజనం కోసం అనువైన బలహీనమైన ఆమ్లం. ఆక్సీకరణ కారకమైన పొటాషియం పర్మాంగనేట్ కూడా ఒక సాంప్రదాయ నివారణ, అయినప్పటికీ దీని ఆధునిక వైద్య వినియోగం చర్చనీయాంశం. ఇచ్చిన ఎంపికలలో, ఇది అత్యంత సరైన సాంప్రదాయ నివారణలను అందిస్తుంది."
  },
  {
    "id": 243,
    "question": "The number of players and extra players present in a kabaddi team respectively are (APTET Jan 2012)\nకబడ్డీ జట్టులో ఉండే ఆటగాళ్లు మరియు అదనపు ఆటగాళ్ల సంఖ్య వరుసగా",
    "options": [
      "5, 2",
      "6, 4",
      "7, 5",
      "8, 2"
    ],
    "correctAnswer": 2,
    "explanation": "ఒక ప్రామాణిక కబడ్డీ జట్టులో 12 మంది ఆటగాళ్లు ఉంటారు. ఒక మ్యాచ్ సమయంలో, 7 మంది ఆటగాళ్లు కోర్టులో ఉంటారు, మిగిలిన 5 మంది ఆటగాళ్లు ప్రత్యామ్నాయులు లేదా 'అదనపు ఆటగాళ్లు'గా బెంచ్‌పై ఉంటారు."
  },
  {
    "id": 244,
    "question": "Examples for pollination by water and pollination by wind respectively are (APTET Jan 2012)\nనీటి ద్వారా పరాగసంపర్కం మరియు గాలి ద్వారా పరాగసంపర్కానికి ఉదాహరణలు వరుసగా",
    "options": [
      "hydrilla, maize\nహైడ్రిల్లా, మొక్కజొన్న",
      "wheat, vallisneria\nగోధుమ, వాలిస్నేరియా",
      "drosera, paddy\nడ్రోసెరా, వరి",
      "eichornia, pistia\nఐకోర్నియా, పిస్టియా"
    ],
    "correctAnswer": 0,
    "explanation": "ఈ ప్రశ్నలో మొదట నీటి ద్వారా పరాగసంపర్కం (హైడ్రోఫిలీ) మరియు తరువాత గాలి ద్వారా పరాగసంపర్కం (ఎనిమోఫిలీ)కు ఉదాహరణ అడిగారు. హైడ్రిల్లా నీటిలోపల పెరిగే మొక్క, ఇది పరాగసంపర్కం కోసం నీటిని ఉపయోగిస్తుంది. మొక్కజొన్న పెద్ద మొత్తంలో పుప్పొడిని విడుదల చేస్తుంది, ఇది గాలి ద్వారా వ్యాపిస్తుంది. ఈ జత అడిగిన క్రమానికి సరిగ్గా సరిపోతుంది."
  },
  {
    "id": 245,
    "question": "Skeleton of a man: bones:: skeleton of leaf: .......... (APTET Jan 2012)\nమనిషి అస్థిపంజరం: ఎముకలు:: ఆకు అస్థిపంజరం: ..........",
    "options": [
      "chlorophyll\nపత్రహరితం",
      "veins\nఈనెలు",
      "xylem\nదారువు",
      "stomata\nపత్రరంధ్రాలు"
    ],
    "correctAnswer": 1,
    "explanation": "ఇది ఒక సారూప్యత. మనిషి అస్థిపంజరం ఎముకలతో నిర్మితమై, శరీరానికి నిర్మాణ చట్రాన్ని అందిస్తుంది. అదేవిధంగా, ఆకు యొక్క 'అస్థిపంజరం' దాని ఈనెల నెట్‌వర్క్, ఇది నిర్మాణానికి మద్దతు ఇస్తుంది మరియు నీరు, పోషకాలను రవాణా చేస్తుంది."
  },
  {
    "id": 246,
    "question": "A farmer collected 'sword suckers' to grow in his field. The crop is....... (APTET Jan 2012)\nఒక రైతు తన పొలంలో పెంచడానికి 'స్వార్డ్ సక్కర్స్' (కత్తి పిలకలు) సేకరించాడు. ఆ పంట....",
    "options": [
      "potato\nబంగాళాదుంప",
      "turmeric\nపసుపు",
      "plantain\nఅరటి",
      "sweet potato\nచిలగడదుంప"
    ],
    "correctAnswer": 2,
    "explanation": "'స్వార్డ్ సక్కర్స్' అనేవి అరటి మొక్కలలో శాఖీయ ప్రత్యుత్పత్తి కోసం ఉపయోగించే ఒక నిర్దిష్ట రకమైన పిలకలు. అవి వాటి సన్నని, కత్తి ఆకారపు ఆకులతో గుర్తించబడతాయి మరియు రైతులు వాటిని ఇష్టపడతారు ఎందుకంటే అవి బలమైన, ఉత్పాదక మొక్కలుగా అభివృద్ధి చెందుతాయి."
  },
  {
    "id": 247,
    "question": "The skin disease caused due to vitamin deficiency is (APTET Jan 2012)\nవిటమిన్ లోపం వల్ల కలిగే చర్మ వ్యాధి",
    "options": [
      "Pellagra\nపెల్లాగ్రా",
      "Eczema\nతామర (ఎగ్జిమా)",
      "Acne\nమొటిమలు",
      "Measles\nతట్టు"
    ],
    "correctAnswer": 0,
    "explanation": "పెల్లాగ్రా అనేది నియాసిన్ (విటమిన్ B3) తీవ్రమైన లోపం వల్ల కలిగే ఒక దైహిక వ్యాధి. పెల్లాగ్రా యొక్క ముఖ్య లక్షణాలలో ఒకటి డెర్మటైటిస్, ఇది మందపాటి, పొలుసుల మరియు ముదురు రంగు దద్దుర్లతో కూడిన చర్మ పరిస్థితి."
  },
  {
    "id": 248,
    "question": "A farmer has a field with sand soil in a coastal region. Suggest a suitable crop which can be grown in his field. (APTET Jan 2012)\nఒక రైతుకు తీరప్రాంతంలో ఇసుక నేల ఉన్న పొలం ఉంది. అతని పొలంలో పండించగల κατάλληλη పంటను సూచించండి.",
    "options": [
      "Turmeric\nపసుపు",
      "Sugarcane\nచెరకు",
      "Chillies\nమిరప",
      "Casuarina\nసరుగుడు"
    ],
    "correctAnswer": 3,
    "explanation": "సరుగుడు (Casuarina) అనేది తీరప్రాంతాలలో కనిపించే ఇసుక, ఉప్పు నేలలను బాగా తట్టుకోగల చెట్ల జాతి. నేల కోతను నివారించడానికి వీటిని తరచుగా గాలి అవరోధాలుగా నాటుతారు. జాబితాలోని ఇతర పంటలకు మరింత సారవంతమైన మరియు నీరు నిలవని ఒండ్రు నేలలు అవసరం."
  },
  {
    "id": 249,
    "question": "A person wishes to stay in a forest and study the life of wild animals. The type of the house he has to live in is (APTET Jan 2012)\nఒక వ్యక్తి అడవిలో ఉండి వన్యప్రాణుల జీవితాన్ని అధ్యయనం చేయాలనుకుంటున్నాడు. అతను నివసించాల్సిన ఇంటి రకం",
    "options": [
      "a tent house\nఒక గుడారం ఇల్లు (టెంట్)",
      "a mud house\nఒక మట్టి ఇల్లు",
      "a stilt house\nఒక స్టిల్ట్ ఇల్లు (వెదురు బొంగులపై కట్టిన ఇల్లు)",
      "a hut\nఒక గుడిసె"
    ],
    "correctAnswer": 0,
    "explanation": "అడవి వంటి మారుమూల సహజ వాతావరణంలో తాత్కాలిక ఆశ్రయం కోసం, ఒక గుడారం (టెంట్) అత్యంత ఆచరణాత్మక ఎంపిక. ఇది పోర్టబుల్, ఏర్పాటు చేయడం సులభం, మరియు పరిశోధన లేదా అన్వేషణ చేసేవారికి అవసరమైన రక్షణను అందిస్తుంది."
  },
  {
    "id": 250,
    "question": "The abundant presence of these plants decreases the nitrogen percentage in the air. (APTET Jan 2012)\nఈ మొక్కలు సమృద్ధిగా ఉండటం వల్ల గాలిలో నత్రజని శాతం తగ్గుతుంది.",
    "options": [
      "leguminous plants\nలెగ్యూమినస్ మొక్కలు (చిక్కుడు జాతి)",
      "plantains\nఅరటి",
      "water hyacinth\nగుర్రపు డెక్క",
      "coconut\nకొబ్బరి"
    ],
    "correctAnswer": 0,
    "explanation": "లెగ్యూమినస్ మొక్కలు వాటి వేరు బొడిపెల్లో నత్రజని-స్థాపన బాక్టీరియా (రైజోబియం వంటివి)తో సహజీవన సంబంధం కలిగి ఉంటాయి. ఈ బాక్టీరియా వాతావరణంలోని నత్రజని వాయువును (N₂), అనగా గాలిలో సుమారు 78% ఉన్న వాయువును, అమ్మోనియా మరియు ఇతర నత్రజని సమ్మేళనాలుగా మారుస్తాయి. ఈ ప్రక్రియను నత్రజని స్థాపన అంటారు, ఇది మొక్కకు నత్రజనిని అందుబాటులోకి తెచ్చి నేలను సుసంపన్నం చేస్తుంది, తద్వారా గాలి నుండి నత్రజనిని సమర్థవంతంగా తొలగిస్తుంది."
  },
  {
    "id": 251,
    "question": "The gas that destroys chlorophyll in plant leaves is (APTET Jan 2012)\nమొక్క ఆకులలోని పత్రహరితాన్ని నాశనం చేసే వాయువు",
    "options": [
      "CO₂",
      "SO₃",
      "H₂S",
      "SO₂"
    ],
    "correctAnswer": 3,
    "explanation": "సల్ఫర్ డయాక్సైడ్ (SO₂) మొక్కలకు అత్యంత విషపూరితమైన ఒక ప్రధాన వాయు కాలుష్య కారకం. ఇది పత్రరంధ్రాల ద్వారా ఆకులలోకి ప్రవేశించి, పత్రహరితం అణువులను దెబ్బతీసి, కిరణజన్య సంయోగక్రియకు అంతరాయం కలిగిస్తుంది. ఇది క్లోరోసిస్ (ఆకులు పసుపు రంగులోకి మారడం) మరియు చివరికి కణజాల మరణానికి దారితీస్తుంది."
  },
  {
    "id": 252,
    "question": "Pick up the wrong statement with reference to water. (APTET Jan 2012)\nనీటికి సంబంధించి తప్పు వాక్యాన్ని ఎంచుకోండి.",
    "options": [
      "It is not an element.\nఇది ఒక మూలకం కాదు.",
      "It is a good conductor of electricity.\nఇది మంచి విద్యుత్ వాహకం.",
      "2H₂ + O₂ ⟶ 2H₂O",
      "It has a constant ratio of hydrogen and oxygen.\nఇది హైడ్రోజన్ మరియు ఆక్సిజన్ యొక్క స్థిరమైన నిష్పత్తిని కలిగి ఉంటుంది."
    ],
    "correctAnswer": 1,
    "explanation": "స్వచ్ఛమైన నీరు (H₂O) చాలా బలహీనమైన విద్యుత్ వాహకం, ఎందుకంటే ఇది చాలా తక్కువ స్వేచ్ఛా అయాన్‌లను కలిగి ఉన్న అణు సమ్మేళనం. నీటిలో లవణాలు వంటి కరిగిన అయానిక్ పదార్థాలు ఉన్నప్పుడు మాత్రమే అది విద్యుత్ వాహకంగా మారుతుంది, ఎందుకంటే అవి కదిలే అయాన్‌లను అందిస్తాయి. అందువల్ల, ఇది 'మంచి వాహకం' అనే వాక్యం తప్పు."
  },
  {
    "id": 253,
    "question": "Examine the following statements.\ni) Need not clean toilet daily.\nii) White washing of a house to be taken up periodically.\niii) Store the garbage in the dustbin only forever.\niv) Water and food vessels must be covered with lids.\nIdentify the correct responses from the following options. (APTET Jan 2012)\nకింది వాక్యాలను పరిశీలించండి.\ni) మరుగుదొడ్డిని రోజూ శుభ్రం చేయనవసరం లేదు.\nii) ఇంటికి కాలానుగుణంగా సున్నం వేయాలి.\niii) చెత్తను ఎప్పటికీ చెత్తబుట్టలోనే నిల్వ చేయాలి.\niv) నీరు మరియు ఆహార పాత్రలను మూతలతో కప్పి ఉంచాలి.\nకింది ఎంపికల నుండి సరైన ప్రతిస్పందనలను గుర్తించండి.",
    "options": [
      "i), iii)",
      "i), iv)",
      "ii), iv)",
      "iii), iv)"
    ],
    "correctAnswer": 2,
    "explanation": "వాక్యాలు (ii) మరియు (iv) మంచి పరిశుభ్రత పద్ధతులను సూచిస్తాయి. కాలానుగుణంగా సున్నం వేయడం ఇంటిని శుభ్రపరచడంలో మరియు క్రిమిరహితం చేయడంలో సహాయపడుతుంది. ఆహారం మరియు నీటిని కప్పి ఉంచడం వాటిని కలుషితాల నుండి రక్షిస్తుంది. వాక్యం (i) అపరిశుభ్రమైనది, మరియు వాక్యం (iii) తప్పు, ఎందుకంటే చెత్తను క్రమం తప్పకుండా పారవేయాలి."
  },
  {
    "id": 254,
    "question": "Latitudes and longitudes on a globe are (APTET Jan 2012)\nగ్లోబుపై అక్షాంశాలు మరియు రేఖాంశాలు అనేవి",
    "options": [
      "latitudes are horizontal imaginary lines and longitudes are vertical imaginary lines\nఅక్షాంశాలు అడ్డంగా ఉండే ఊహాజనిత రేఖలు మరియు రేఖాంశాలు నిలువుగా ఉండే ఊహాజనిత రేఖలు",
      "latitudes are vertical imaginary lines and longitudes are horizontal imaginary lines\nఅక్షాంశాలు నిలువుగా ఉండే ఊహాజనిత రేఖలు మరియు రేఖాంశాలు అడ్డంగా ఉండే ఊహాజనిత రేఖలు",
      "both latitudes and longitudes are horizontal imaginary lines\nఅక్షాంశాలు మరియు రేఖాంశాలు రెండూ అడ్డంగా ఉండే ఊహాజనిత రేఖలు",
      "both latitudes and longitudes are vertical imaginary lines\nఅక్షాంశాలు మరియు రేఖాంశాలు రెండూ నిలువుగా ఉండే ఊహాజనిత రేఖలు"
    ],
    "correctAnswer": 0,
    "explanation": "అక్షాంశాలు భూమి చుట్టూ అడ్డంగా (తూర్పు-పడమర) నడిచే ఊహాజనిత రేఖలు, ఇవి భూమధ్యరేఖకు సమాంతరంగా ఉంటాయి. రేఖాంశాలు ఉత్తర ధ్రువం నుండి దక్షిణ ధ్రువానికి నిలువుగా (ఉత్తరం-దక్షిణం) నడిచే ఊహాజనిత రేఖలు."
  },
  {
    "id": 255,
    "question": "'Gramasabha' means.... (APTET Jan 2012)\n'గ్రామసభ' అనగా....",
    "options": [
      "it is a meeting in which the sarpanch and all ward members participate\nఇది సర్పంచ్ మరియు వార్డు సభ్యులందరూ పాల్గొనే సమావేశం",
      "it is a meeting headed by the sarpanch in which all the people of a village attend\nఇది సర్పంచ్ అధ్యక్షతన జరిగే సమావేశం, దీనిలో గ్రామ ప్రజలందరూ హాజరవుతారు",
      "it is a meeting of sarpanch and the upasarpanch with village secretary and other employees of grama panchayat\nఇది సర్పంచ్ మరియు ఉపసర్పంచ్‌ల సమావేశం, గ్రామ కార్యదర్శి మరియు గ్రామ పంచాయతీ ఇతర ఉద్యోగులతో జరుగుతుంది",
      "it is a meeting headed by the sarpanch in which all ward members, youth associations and caste heads attend\nఇది సర్పంచ్ అధ్యక్షతన జరిగే సమావేశం, దీనిలో వార్డు సభ్యులు, యువజన సంఘాలు మరియు కుల పెద్దలు హాజరవుతారు"
    ],
    "correctAnswer": 1,
    "explanation": "గ్రామసభ పంచాయతీ రాజ్ వ్యవస్థ యొక్క పునాది. ఇది ఒక గ్రామం లేదా గ్రామాల సమూహంలో ఓటర్లుగా నమోదు చేసుకున్న వయోజన పౌరులందరితో కూడిన సాధారణ సభ. ఇది ప్రత్యక్ష ప్రజాస్వామ్యానికి ఒక వేదిక, ఇక్కడ గ్రామ ప్రజలందరూ స్థానిక పాలనలో పాల్గొనవచ్చు."
  },
  {
    "id": 256,
    "question": "'Shravanbelagola', and 'Mahabalipuram', the historical places are located respectively in these states (APTET Jan 2012)\n'శ్రావణబెళగొళ' మరియు 'మహాబలిపురం', ఈ చారిత్రక ప్రదేశాలు వరుసగా ఈ రాష్ట్రాలలో ఉన్నాయి",
    "options": [
      "Andhra Pradesh, Tamil Nadu\nఆంధ్రప్రదేశ్, తమిళనాడు",
      "Kerala, Karnataka\nకేరళ, కర్ణాటక",
      "Tamil Nadu, Karnataka\nతమిళనాడు, కర్ణాటక",
      "Karnataka, Tamil Nadu\nకర్ణాటక, తమిళనాడు"
    ],
    "correctAnswer": 3,
    "explanation": "శ్రావణబెళగొళ గోమఠేశ్వర విగ్రహానికి ప్రసిద్ధి చెందిన ఒక ప్రసిద్ధ జైన పుణ్యక్షేత్రం, ఇది కర్ణాటక రాష్ట్రంలో ఉంది. మహాబలిపురం యునెస్కో ప్రపంచ వారసత్వ ప్రదేశంగా గుర్తింపు పొందిన దేవాలయాలు మరియు రాతి శిల్పాలకు ప్రసిద్ధి చెందిన చారిత్రక పట్టణం, ఇది తమిళనాడు రాష్ట్రంలో ఉంది."
  },
  {
    "id": 257,
    "question": "The area of India is (APTET Jan 2012)\nభారతదేశ విస్తీర్ణం",
    "options": [
      "3.28 million sq. kms\n3.28 మిలియన్ చ.కి.మీ",
      "32.8 million sq. kms\n32.8 మిలియన్ చ.కి.మీ",
      "3.28 billion sq. kms\n3.28 బిలియన్ చ.కి.మీ",
      "32.8 billion sq. kms\n32.8 బిలియన్ చ.కి.మీ"
    ],
    "correctAnswer": 0,
    "explanation": "భారతదేశం యొక్క మొత్తం భౌగోళిక విస్తీర్ణం 3,287,263 చదరపు కిలోమీటర్లు. దీనిని సాధారణంగా 3.28 మిలియన్ చదరపు కిలోమీటర్లుగా పేర్కొంటారు, ఇది భూ విస్తీర్ణం ప్రకారం ప్రపంచంలో ఏడవ అతిపెద్ద దేశంగా నిలుస్తుంది."
  },
  {
    "id": 258,
    "question": "Read the following and identify the correct pair:\nA) Kuchipudi - Tamil Nadu\nB) Bhangra - Punjab\nC) Bharatanatyam - Andhra Pradesh\n(APTET Jan 2012)\nకింది వాటిని చదివి, సరైన జతను గుర్తించండి:\nA) కూచిపూడి - తమిళనాడు\nB) భాంగ్రా - పంజాబ్\nC) భరతనాట్యం - ఆంధ్రప్రదేశ్",
    "options": [
      "B), C)",
      "A), C)",
      "A), B)",
      "B) only\nB) మాత్రమే"
    ],
    "correctAnswer": 3,
    "explanation": "భాంగ్రా పంజాబ్ యొక్క సాంప్రదాయ జానపద నృత్యం. ఈ జత సరైనది. కూచిపూడి ఆంధ్రప్రదేశ్‌కు చెందిన శాస్త్రీయ నృత్యం (తమిళనాడు కాదు). భరతనాట్యం తమిళనాడుకు చెందిన శాస్త్రీయ నృత్యం (ఆంధ్రప్రదేశ్ కాదు). అందువల్ల, కేవలం B జత మాత్రమే సరిగ్గా జత చేయబడింది."
  },
  {
    "id": 259,
    "question": "Eastern and western ghats of peninsular plateau meet here. (APTET Jan 2012)\nద్వీపకల్ప పీఠభూమి యొక్క తూర్పు మరియు పశ్చిమ కనుమలు ఇక్కడ కలుస్తాయి.",
    "options": [
      "Seshachala hills\nశేషాచలం కొండలు",
      "Nallamala mountains\nనల్లమల పర్వతాలు",
      "Nilgiri mountains\nనీలగిరి పర్వతాలు",
      "Papi hills\nపాపికొండలు"
    ],
    "correctAnswer": 2,
    "explanation": "పశ్చిమ కనుమలు మరియు తూర్పు కనుమలు ద్వీపకల్ప భారతదేశంలోని రెండు ప్రధాన పర్వత శ్రేణులు. ఇవి తమిళనాడు, కేరళ, మరియు కర్ణాటక రాష్ట్రాల కూడలిలో ఉన్న నీలగిరి కొండల వద్ద కలుస్తాయి."
  },
  {
    "id": 260,
    "question": "The hot deserts are situated between these latitudes on either side of the equator. (APTET Jan 2012)\nభూమధ్యరేఖకు ఇరువైపులా ఈ అక్షాంశాల మధ్య ఉష్ణ ఎడారులు ఉన్నాయి.",
    "options": [
      "15° - 30°",
      "30° - 45°",
      "5° - 15°",
      "0° - 5°"
    ],
    "correctAnswer": 0,
    "explanation": "ప్రపంచంలోని చాలా గొప్ప ఉష్ణ ఎడారులు ఉపఉష్ణమండల అధిక-పీడన మండలాల్లో ఉన్నాయి, ఇవి సాధారణంగా ఉత్తర మరియు దక్షిణ అర్ధగోళాలలో 15 నుండి 30 డిగ్రీల అక్షాంశాల మధ్య ఉంటాయి. ఈ ప్రాంతాలలో, పొడి గాలి కిందకు దిగుతుంది, ఇది మేఘాల ఏర్పాటును నిరోధించి, చాలా తక్కువ వర్షపాతానికి దారితీస్తుంది."
  },
  {
    "id": 261,
    "question": "Health, revenue, fire services and education belong to this category. (APTET Jan 2012)\nఆరోగ్యం, రెవెన్యూ, అగ్నిమాపక సేవలు మరియు విద్య ఈ వర్గానికి చెందినవి.",
    "options": [
      "All are ordinary services.\nఅన్నీ సాధారణ సేవలు.",
      "All are emergency services.\nఅన్నీ అత్యవసర సేవలు.",
      "Health and fire services are emergency services, revenue and education services are ordinary services.\nఆరోగ్యం మరియు అగ్నిమాపక సేవలు అత్యవసర సేవలు, రెవెన్యూ మరియు విద్య సేవలు సాధారణ సేవలు.",
      "Health and fire services are ordinary services; revenue and education services are emergency services.\nఆరోగ్యం మరియు అగ్నిమాపక సేవలు సాధారణ సేవలు; రెవెన్యూ మరియు విద్య సేవలు అత్యవసర సేవలు."
    ],
    "correctAnswer": 2,
    "explanation": "సేవలను వాటి ఆవశ్యకత ఆధారంగా వర్గీకరించవచ్చు. అగ్నిమాపక సేవలు మరియు అనేక ఆరోగ్య సేవలు (అంబులెన్సులు మరియు అత్యవసర గదులు వంటివి) తక్షణ, ప్రాణాంతక పరిస్థితులకు స్పందిస్తాయి మరియు అందువల్ల అత్యవసర సేవలుగా పరిగణించబడతాయి. రెవెన్యూ మరియు విద్య అనేవి సాధారణ, అత్యవసరం కాని ప్రాతిపదికన పనిచేసే అవసరమైన ప్రజా సేవలు మరియు సాధారణ సేవలుగా పరిగణించబడతాయి."
  },
  {
    "id": 262,
    "question": "The popular names of Gopal Krishna Gokhale and Dadabhai Naoroji respectively are (APTET Jan 2012)\nగోపాల కృష్ణ గోఖలే మరియు దాదాభాయ్ నౌరోజీ యొక్క ప్రసిద్ధ పేర్లు వరుసగా",
    "options": [
      "Iron man, Punjab Kesari\nఉక్కు మనిషి, పంజాబ్ కేసరి",
      "Grand old man of India; Iron man\nభారత కురువృద్ధుడు; ఉక్కు మనిషి",
      "Punjab Kesari; Socrates of Maharashtra\nపంజాబ్ కేసరి; మహారాష్ట్ర సోక్రటీస్",
      "Socrates of Maharashtra; Grand old man of India\nమహారాష్ట్ర సోక్రటీస్; భారత కురువృద్ధుడు"
    ],
    "correctAnswer": 3,
    "explanation": "గోపాల కృష్ణ గోఖలే ఒక గౌరవనీయ రాజకీయ నాయకుడు మరియు మహాత్మా గాంధీకి గురువు, ఆయనను తరచుగా ఆయన జ్ఞానానికి 'మహారాష్ట్ర సోక్రటీస్' అని పిలుస్తారు. దాదాభాయ్ నౌరోజీ భారత జాతీయవాద ఉద్యమ మార్గదర్శకుడు మరియు ఆయనను ఆప్యాయంగా 'భారత కురువృద్ధుడు' (Grand Old Man of India) అని పిలుస్తారు."
  },
  {
    "id": 263,
    "question": "This is not an organ of the United Nations Organization. (APTET Jan 2012)\nఇది ఐక్యరాజ్యసమితి యొక్క అంగం కాదు.",
    "options": [
      "The Secretariat\nసచివాలయం",
      "The General Assembly\nసాధారణ సభ",
      "The World Health Organization\nప్రపంచ ఆరోగ్య సంస్థ",
      "The International Court of Justice\nఅంతర్జాతీయ న్యాయస్థానం"
    ],
    "correctAnswer": 2,
    "explanation": "ఐక్యరాజ్యసమితికి ఆరు ప్రధాన అంగాలు ఉన్నాయి: సాధారణ సభ, భద్రతా మండలి, ఆర్థిక మరియు సామాజిక మండలి, ధర్మకర్తృత్వ మండలి, అంతర్జాతీయ న్యాయస్థానం, మరియు సచివాలయం. ప్రపంచ ఆరోగ్య సంస్థ (WHO) ఐరాస యొక్క ఒక ప్రత్యేక ఏజెన్సీ, కానీ దాని ఆరు ప్రధాన అంగాలలో ఒకటి కాదు."
  },
  {
    "id": 264,
    "question": "Examine the following and identify the mismatch:\nA) Mud house - Rajastan\nB) Igloo - Lake\nC) Sky scraper - Big city\n(APTET Jan 2012)\nకింది వాటిని పరిశీలించి, సరిపోలని దానిని గుర్తించండి:\nA) మట్టి ఇల్లు - రాజస్థాన్\nB) ఇగ్లూ - సరస్సు\nC) ఆకాశహర్మ్యం - పెద్ద నగరం",
    "options": [
      "C) only\nC) మాత్రమే",
      "B) only\nB) మాత్రమే",
      "A) only\nA) మాత్రమే",
      "C) and A)\nC) మరియు A)"
    ],
    "correctAnswer": 1,
    "explanation": "ఇగ్లూ అనేది మంచు దిమ్మలతో చేసిన ఆశ్రయం, ఇది ఆర్కిటిక్ ప్రాంతాల లక్షణం. ఇది సరస్సుతో సంబంధం కలిగి లేదు. మట్టి ఇళ్ళు రాజస్థాన్ వంటి వేడి, పొడి ప్రాంతాలలో సాధారణం, మరియు ఆకాశహర్మ్యాలు పెద్ద నగరాల లక్షణం. అందువల్ల, సరిపోలని జత B)."
  },
  {
    "id": 265,
    "question": "The product of science is indicated by.... (APTET Jan 2012)\nవిజ్ఞాన శాస్త్రం యొక్క ఉత్పత్తి దీని ద్వారా సూచించబడుతుంది....",
    "options": [
      "the scientific method of inquiry\nశాస్త్రీయ పరిశోధన పద్ధతి",
      "accumulated and systematized body of knowledge\nసంచిత మరియు వ్యవస్థీకృత జ్ఞాన రాశి",
      "the scientific attitude\nశాస్త్రీయ వైఖరి",
      "gathering of data\nసమాచార సేకరణ"
    ],
    "correctAnswer": 1,
    "explanation": "విజ్ఞాన శాస్త్రానికి రెండు అంశాలు ఉన్నాయి: ప్రక్రియ మరియు ఉత్పత్తి. 'ప్రక్రియ'లో శాస్త్రీయ పద్ధతి, వైఖరి మరియు పరిశోధన నైపుణ్యాలు ఉంటాయి. విజ్ఞాన శాస్త్రం యొక్క 'ఉత్పత్తి' ఈ ప్రక్రియల ఫలితం, ఇది ధృవీకరించబడిన, వ్యవస్థీకృత మరియు క్రమబద్ధీకరించబడిన జ్ఞానం యొక్క విస్తారమైన భాగం (వాస్తవాలు, సూత్రాలు, సిద్ధాంతాలు, చట్టాలు)."
  },
  {
    "id": 266,
    "question": "Most important initial step towards achievement of an aim is ... (APTET Jan 2012)\nఒక లక్ష్యాన్ని సాధించడానికి అత్యంత ముఖ్యమైన ప్రారంభ దశ ...",
    "options": [
      "skill\nనైపుణ్యం",
      "ability\nసామర్థ్యం",
      "objective\nలక్ష్యం (ఆబ్జెక్టివ్)",
      "goal\nగమ్యం (గోల్)"
    ],
    "correctAnswer": 2,
    "explanation": "విద్యా ప్రణాళికలో, ఒక ఆశయం (aim) అనేది విస్తృత, దీర్ఘకాలిక ఉద్దేశ్యం యొక్క ప్రకటన. ఒక ఆశయాన్ని సాధించడానికి, దానిని చిన్న, నిర్దిష్ట, మరియు కొలవగల దశలుగా విభజించాలి. ఈ నిర్దిష్ట దశలను లక్ష్యాలు (objectives) అంటారు. అందువల్ల, స్పష్టమైన లక్ష్యాలను నిర్దేశించడం విస్తృత ఆశయాన్ని చేరుకోవడానికి కీలకమైన మొదటి అడుగు."
  },
  {
    "id": 267,
    "question": "The method that helps in developing manipulative skills among the students is.... (APTET Jan 2012)\nవిద్యార్థులలో చేతి నైపుణ్యాలను (manipulative skills) అభివృద్ధి చేయడానికి సహాయపడే పద్ధతి....",
    "options": [
      "lecture method\nఉపన్యాస పద్ధతి",
      "historical method\nచారిత్రక పద్ధతి",
      "laboratory method\nప్రయోగశాల పద్ధతి",
      "lecture cum demonstration method\nఉపన్యాస-ప్రదర్శన పద్ధతి"
    ],
    "correctAnswer": 2,
    "explanation": "చేతి నైపుణ్యాలు (లేదా సైకోమోటార్ నైపుణ్యాలు) వస్తువులు మరియు పరికరాలను భౌతికంగా నిర్వహించడాన్ని కలిగి ఉంటాయి. ప్రయోగశాల పద్ధతి విద్యార్థులకు ప్రత్యక్ష అనుభవాన్ని అందిస్తుంది, వారు శాస్త్రీయ పరికరాలతో నేరుగా సంకర్షణ చెందడానికి మరియు వాటిని ఉపయోగించడానికి వీలు కల్పిస్తుంది, తద్వారా ఈ నైపుణ్యాలను సమర్థవంతంగా అభివృద్ధి చేస్తుంది."
  },
  {
    "id": 268,
    "question": "The arrangements that shows the creatures living on the land is.... (APTET Jan 2012)\nభూమిపై నివసించే జీవులను చూపించే ఏర్పాటు....",
    "options": [
      "aquarium\nఅక్వేరియం",
      "terrarium\nటెర్రేరియం",
      "herbarium\nహెర్బేరియం",
      "vivarium\nవైవేరియం"
    ],
    "correctAnswer": 1,
    "explanation": "టెర్రేరియం (లాటిన్ 'టెర్రా' అంటే భూమి నుండి) అనేది భూమిపై నివసించే మొక్కలు మరియు జంతువులను ఉంచడానికి మరియు ప్రదర్శించడానికి రూపొందించిన ఒక ఆవరణం. అక్వేరియం జలచరాల కోసం, మరియు హెర్బేరియం భద్రపరచబడిన మొక్కల సేకరణ."
  },
  {
    "id": 269,
    "question": "The plan meant for evaluating the learning outcomes of the students in the classroom is called (APTET Jan 2012)\nతరగతి గదిలో విద్యార్థుల అభ్యసన ఫలితాలను మూల్యాంకనం చేయడానికి ఉద్దేశించిన ప్రణాళికను ఇలా అంటారు",
    "options": [
      "unit plan\nయూనిట్ ప్రణాళిక",
      "subject plan\nవిషయ ప్రణాళిక",
      "lesson plan\nపాఠ్య ప్రణాళిక",
      "year plan\nవార్షిక ప్రణాళిక"
    ],
    "correctAnswer": 2,
    "explanation": "పాఠ్య ప్రణాళిక అనేది ఒకే బోధనా కాలానికి ఉపాధ్యాయుని యొక్క వివరణాత్మక రూపురేఖ. ఏదైనా పాఠ్య ప్రణాళిక యొక్క ముఖ్య భాగం మదింపు లేదా మూల్యాంకన విభాగం, ఇది ఉపాధ్యాయుడు విద్యార్థుల అవగాహనను ఎలా కొలుస్తాడో మరియు ఆ నిర్దిష్ట పాఠం యొక్క అభ్యసన ఫలితాలు సాధించబడ్డాయో లేదో నిర్ణయిస్తుందో నిర్దేశిస్తుంది."
  },
  {
    "id": 270,
    "question": "The evaluation that is used for grading purpose is called (APTET Jan 2012)\nగ్రేడింగ్ ప్రయోజనం కోసం ఉపయోగించే మూల్యాంకనాన్ని ఇలా అంటారు",
    "options": [
      "formative evaluation\nనిర్మాణాత్మక మూల్యాంకనం",
      "summative evaluation\nసంగ్రహణాత్మక మూల్యాంకనం",
      "diagnostic evaluation\nలోపనిర్ధారణ మూల్యాంకనం",
      "grading evaluation\nగ్రేడింగ్ మూల్యాంకనం"
    ],
    "correctAnswer": 1,
    "explanation": "సంగ్రహణాత్మక మూల్యాంకనం ఒక బోధనా కాలం (ఉదాహరణకు, ఒక యూనిట్, సెమిస్టర్, లేదా సంవత్సరం) ముగింపులో విద్యార్థుల తుది సాధన స్థాయిని కొలవడానికి నిర్వహించబడుతుంది. దీని ప్రాథమిక ఉద్దేశ్యం ఏమి నేర్చుకున్నారో 'సంగ్రహించడం', మరియు ఫలితాలు సాధారణంగా గ్రేడ్‌లను కేటాయించడానికి ఉపయోగించబడతాయి."
  },
  {
    "id": 271,
    "question": "This is not a pulse crop. (TSTET Jan 2017)\nఇది పప్పుధాన్యాల పంట కాదు.",
    "options": [
      "Black gram\nమినుములు",
      "Pea\nబఠానీ",
      "Ground nut\nవేరుశనగ",
      "Ragi\nరాగి"
    ],
    "correctAnswer": 3,
    "explanation": "పప్పుధాన్యాలు లెగ్యూమ్ కుటుంబంలోని మొక్కల తినదగిన విత్తనాలు. మినుములు, బఠానీ మరియు వేరుశనగ అన్నీ లెగ్యూమ్‌లే. రాగి, దీనిని ఫింగర్ మిల్లెట్ అని కూడా పిలుస్తారు, ఇది ఒక రకమైన తృణధాన్యం, పప్పుధాన్యం కాదు."
  },
  {
    "id": 272,
    "question": "This is rich in proteins. (TSTET Jan 2017)\nఇందులో ప్రొటీన్లు సమృద్ధిగా ఉంటాయి.",
    "options": [
      "Wheat\nగోధుమ",
      "Rice\nబియ్యం",
      "Red gram\nకందిపప్పు",
      "Maize\nమొక్కజొన్న"
    ],
    "correctAnswer": 2,
    "explanation": "కందిపప్పు, దీనిని పీజియన్ పీ లేదా తూర్ దాల్ అని కూడా పిలుస్తారు, ఇది ఒక పప్పుధాన్యం మరియు ప్రొటీన్ల యొక్క గొప్ప మూలం. గోధుమ, బియ్యం మరియు మొక్కజొన్న ప్రధానంగా పిండిపదార్థాలు అధికంగా ఉండే ప్రధాన తృణధాన్యాలు."
  },
  {
    "id": 273,
    "question": "Number of Pre-molars normally found in adult human beings. (TSTET Jan 2017)\nవయోజన మానవులలో సాధారణంగా కనిపించే అగ్ర చర్వణకాల (Pre-molars) సంఖ్య.",
    "options": [
      "8",
      "2",
      "4",
      "6"
    ],
    "correctAnswer": 0,
    "explanation": "ఒక వయోజన మానవునికి మొత్తం 32 దంతాలు ఉంటాయి. ఇందులో 8 అగ్ర చర్వణకాలు (బైకస్పిడ్స్ అని కూడా అంటారు) ఉంటాయి, పై మరియు dưới దవడల రెండు వైపులా రెండు చొప్పున, రదనికలు మరియు చర్వణకాల మధ్య ఉంటాయి."
  },
  {
    "id": 274,
    "question": "Liquids are measured in these units. (TSTET Jan 2017)\nద్రవాలను ఈ యూనిట్లలో కొలుస్తారు.",
    "options": [
      "Square meters\nచదరపు మీటర్లు",
      "Litres\nలీటర్లు",
      "Meters\nమీటర్లు",
      "Grams\nగ్రాములు"
    ],
    "correctAnswer": 1,
    "explanation": "ద్రవాల ఘనపరిమాణాన్ని కొలవడానికి ప్రామాణిక యూనిట్ లీటరు. చదరపు మీటర్లు వైశాల్యానికి, మీటర్లు పొడవుకు, మరియు గ్రాములు ద్రవ్యరాశికి ఉపయోగిస్తారు."
  },
  {
    "id": 275,
    "question": "The largest flower is seen in. (TSTET Jan 2017)\nఅతిపెద్ద పువ్వు ఇందులో కనిపిస్తుంది.",
    "options": [
      "Lotus\nతామర పువ్వు",
      "Passiflora\nపాసిఫ్లోరా",
      "Rafflesia\nరఫ్లేసియా",
      "Sunflower\nపొద్దుతిరుగుడు పువ్వు"
    ],
    "correctAnswer": 2,
    "explanation": "సుమత్రా మరియు బోర్నియో వర్షారణ్యాలలో కనిపించే రఫ్లేసియా ఆర్నాల్డీ, ప్రపంచంలోనే అతిపెద్ద ఏకైక పువ్వును ఉత్పత్తి చేస్తుంది. ఇది 3 అడుగుల కంటే ఎక్కువ వ్యాసంతో పెరగగలదు."
  },
  {
    "id": 276,
    "question": "Dust and smoke particles present in the air can cause this disease in human beings. (TSTET Jan 2017)\nగాలిలో ఉండే దుమ్ము మరియు పొగ కణాలు మానవులలో ఈ వ్యాధికి కారణమవుతాయి.",
    "options": [
      "Gastritis\nగ్యాస్ట్రైటిస్ (జీర్ణాశయపు శోథ)",
      "Bronchitis\nబ్రోంకైటిస్ (శ్వాసనాళాల వాపు)",
      "Arthritis\nఆర్థరైటిస్ (కీళ్లనొప్పులు)",
      "Anaemia\nరక్తహీనత"
    ],
    "correctAnswer": 1,
    "explanation": "దుమ్ము మరియు పొగ వంటి కాలుష్య కారకాలను పీల్చడం వల్ల ఊపిరితిత్తులకు గాలిని తీసుకువెళ్లే శ్వాసనాళాల పొర చికాకుకు గురవుతుంది. ఈ చికాకు మరియు వాపు బ్రోంకైటిస్ అనే శ్వాసకోశ పరిస్థితికి దారితీస్తుంది."
  },
  {
    "id": 277,
    "question": "The layer nearest to the Earth surface is. (TSTET Jan 2017)\nభూమి ఉపరితలానికి అత్యంత సమీపంలో ఉన్న పొర.",
    "options": [
      "Exosphere\nఎక్సోస్పియర్",
      "Troposphere\nట్రోపోస్పియర్",
      "Stratosphere\nస్ట్రాటోస్పియర్",
      "Mesosphere\nమీసోస్పియర్"
    ],
    "correctAnswer": 1,
    "explanation": "భూమి యొక్క వాతావరణ పొరలు, నేల నుండి పైకి, ట్రోపోస్పియర్, స్ట్రాటోస్పియర్, మీసోస్పియర్, థర్మోస్పియర్, మరియు ఎక్సోస్పియర్. ట్రోపోస్పియర్ మనం నివసించే మరియు వాతావరణం సంభవించే అత్యల్ప పొర."
  },
  {
    "id": 278,
    "question": "These energies never get exhausted. (TSTET Jan 2017)\nఈ శక్తులు ఎప్పటికీ తరిగిపోవు.",
    "options": [
      "Wind, sunlight\nగాలి, సూర్యరశ్మి",
      "Kerosene, wind, water\nకిరోసిన్, గాలి, నీరు",
      "Coal, sunlight, wind\nబొగ్గు, సూర్యరశ్మి, గాలి",
      "Natural gas, water\nసహజ వాయువు, నీరు"
    ],
    "correctAnswer": 0,
    "explanation": "గాలి మరియు సూర్యరశ్మి పునరుత్పాదక ఇంధన వనరులు, అంటే అవి సహజంగా పునరుద్ధరించబడతాయి మరియు ఎప్పటికీ అయిపోవు. కిరోసిన్, బొగ్గు, మరియు సహజ వాయువు పునరుత్పాదకం కాని శిలాజ ఇంధనాలు, ఇవి పరిమితంగా ఉండి, వాడకంతో తరిగిపోతాయి."
  },
  {
    "id": 279,
    "question": "Falaknuma Palace built by the. (TSTET Jan 2017)\nఫలక్‌నుమా ప్యాలెస్‌ను నిర్మించినది.",
    "options": [
      "Salarjung - III\nసాలార్‌జంగ్ - III",
      "Quli Qutub Shah\nకూలీ కుతుబ్ షా",
      "Mir Osman Ali Khan\nమీర్ ఉస్మాన్ అలీ ఖాన్",
      "Sir Viquar-ul-Umra\nసర్ వికార్-ఉల్-ఉమ్రా"
    ],
    "correctAnswer": 3,
    "explanation": "హైదరాబాద్‌లోని ఫలక్‌నుమా ప్యాలెస్‌ను నవాబ్ సర్ వికార్-ఉల్-ఉమ్రా నిర్మించారు, ఆయన 1894 నుండి 1901 వరకు హైదరాబాద్ రాష్ట్ర ప్రధానమంత్రిగా పనిచేశారు. తరువాత దీనిని హైదరాబాద్ నిజాం కొనుగోలు చేశారు."
  },
  {
    "id": 280,
    "question": "On the basis of area the country that is smaller than India. (TSTET Jan 2017)\nవిస్తీర్ణం ఆధారంగా భారతదేశం కంటే చిన్న దేశం.",
    "options": [
      "Canada\nకెనడా",
      "Brazil\nబ్రెజిల్",
      "Australia\nఆస్ట్రేలియా",
      "Argentina\nఅర్జెంటీనా"
    ],
    "correctAnswer": 3,
    "explanation": "భారతదేశం విస్తీర్ణంలో ప్రపంచంలో 7వ అతిపెద్ద దేశం. కెనడా (2వ), బ్రెజిల్ (5వ), మరియు ఆస్ట్రేలియా (6వ) అన్నీ భారతదేశం కంటే పెద్దవి. అర్జెంటీనా 8వ అతిపెద్ద దేశం, కనుక ఇది భారతదేశం కంటే చిన్నది."
  },
  {
    "id": 281,
    "question": "Children are not having the following right. (TSTET Jan 2017)\nపిల్లలకు ఈ క్రింది హక్కు లేదు.",
    "options": [
      "Right to protection from wars\nయుద్ధాల నుండి రక్షణ పొందే హక్కు",
      "Right to survival\nజీవించే హక్కు",
      "Right to be honoured\nగౌరవించబడే హక్కు",
      "Right to employment\nఉద్యోగం పొందే హక్కు"
    ],
    "correctAnswer": 3,
    "explanation": "ఐరాస బాలల హక్కుల ఒడంబడిక ప్రకారం, పిల్లలకు జీవించే, రక్షణ పొందే, అభివృద్ధి చెందే మరియు పాల్గొనే హక్కులు ఉన్నాయి. ఉద్యోగ హక్కు పెద్దలకు ఉంటుంది; బాల కార్మిక వ్యవస్థ నిషేధించబడింది, మరియు పిల్లలకు ఆర్థిక దోపిడీ నుండి రక్షణ పొందే హక్కు ఉంది."
  },
  {
    "id": 282,
    "question": "Chairman of the Drafting Committee of Indian Constitution. (TSTET Jan 2017)\nభారత రాజ్యాంగ ముసాయిదా కమిటీ చైర్మన్.",
    "options": [
      "Jawaharlal Nehru\nజవహర్‌లాల్ నెహ్రూ",
      "Dr. Rajendra Prasad\nడా. రాజేంద్ర ప్రసాద్",
      "Dr. B.R. Ambedkar\nడా. బి.ఆర్. అంబేద్కర్",
      "K.M. Munshi\nకె.ఎం. మున్షీ"
    ],
    "correctAnswer": 2,
    "explanation": "భారత రాజ్యాంగాన్ని రచించే బాధ్యత వహించిన రాజ్యాంగ పరిషత్ యొక్క ముసాయిదా కమిటీకి డా. బి.ఆర్. అంబేద్కర్ చైర్మన్‌గా ఉన్నారు. డా. రాజేంద్ర ప్రసాద్ రాజ్యాంగ పరిషత్ అధ్యక్షుడిగా ఉన్నారు."
  },
  {
    "id": 283,
    "question": "In human beings, peripheral nervous system consists of ..... (TSTET Jan 2017)\nమానవులలో, పరిధీయ నాడీ వ్యవస్థలో ఇవి ఉంటాయి .....",
    "options": [
      "Cranial nerves and spinal nerves.\nకపాల నాడులు మరియు వెన్ను నాడులు.",
      "Brain & cranial nerves\nమెదడు & కపాల నాడులు",
      "Spinal cord and spinal nerves.\nవెన్నుపాము మరియు వెన్ను నాడులు.",
      "Brain and spinal cord.\nమెదడు మరియు వెన్నుపాము."
    ],
    "correctAnswer": 0,
    "explanation": "నాడీ వ్యవస్థ రెండు ప్రధాన భాగాలుగా విభజించబడింది: కేంద్ర నాడీ వ్యవస్థ (CNS), ఇందులో మెదడు మరియు వెన్నుపాము ఉంటాయి, మరియు పరిధీయ నాడీ వ్యవస్థ (PNS). PNS అనేది CNS నుండి శరీరంలోని మిగిలిన భాగాలకు విస్తరించే అన్ని నాడులతో రూపొందించబడింది, ఇందులో కపాల మరియు వెన్ను నాడులు ఉంటాయి."
  },
  {
    "id": 284,
    "question": "'Pistil' belongs to this part of a flower. (TSTET Jan 2017)\n'పిస్టిల్' (అండకోశం) పువ్వులోని ఈ భాగానికి చెందింది.",
    "options": [
      "Gynoecium\nగైనోసియం (అండకోశం)",
      "Calyx\nకాలెక్స్ (రక్షక పత్రావళి)",
      "Corolla\nకొరొల్లా (ఆకర్షణ పత్రావళి)",
      "Androecium\nఆండ్రోసియం (కేసరావళి)"
    ],
    "correctAnswer": 0,
    "explanation": "గైనోసియం అనేది ఒక పువ్వు యొక్క స్త్రీ పునరుత్పత్తి భాగాల సమిష్టి పదం. ఇది ఒకటి లేదా అంతకంటే ఎక్కువ పిస్టిల్స్ (లేదా కార్పెల్స్)తో కూడి ఉంటుంది. కాలెక్స్ అనేది రక్షక పత్రాల వలయం, కొరొల్లా అనేది ఆకర్షణ పత్రాల వలయం, మరియు ఆండ్రోసియం పురుష పునరుత్పత్తి భాగం (కేసరాలు)."
  },
  {
    "id": 285,
    "question": "This gland doesn't secrete digestive enzymes. (TSTET Jan 2017)\nఈ గ్రంథి జీర్ణ ఎంజైమ్‌లను స్రవించదు.",
    "options": [
      "Pancreas\nక్లోమం",
      "Salivary glands\nలాలాజల గ్రంథులు",
      "Gastric glands\nజఠర గ్రంథులు",
      "Liver\nకాలేయం"
    ],
    "correctAnswer": 3,
    "explanation": "క్లోమం, లాలాజల గ్రంథులు మరియు జఠర గ్రంథులు అన్నీ ఆహారాన్ని రసాయనికంగా విచ్ఛిన్నం చేసే ఎంజైమ్‌లను ఉత్పత్తి చేసి స్రవిస్తాయి. కాలేయం పైత్యరసాన్ని ఉత్పత్తి చేస్తుంది, ఇది కొవ్వులను ఎమల్సిఫై చేయడం ద్వారా జీర్ణక్రియకు అవసరం, కానీ పైత్యరసంలో ఎలాంటి జీర్ణ ఎంజైమ్‌లు ఉండవు."
  },
  {
    "id": 286,
    "question": "The disease 'Scurvy' in human beings is caused due to the deficiency of ...... (TSTET Jan 2017)\nమానవులలో 'స్కర్వీ' వ్యాధి దేని లోపం వలన కలుగుతుంది?",
    "options": [
      "Folic acid\nఫోలిక్ ఆమ్లం",
      "Riboflavin\nరిబోఫ్లేవిన్",
      "Calciferol\nకాల్సిఫెరాల్",
      "Ascorbic acid\nఆస్కార్బిక్ ఆమ్లం"
    ],
    "correctAnswer": 3,
    "explanation": "విటమిన్ సి లోపం వల్ల స్కర్వీ వ్యాధి వస్తుంది. విటమిన్ సి యొక్క రసాయన నామం ఆస్కార్బిక్ ఆమ్లం. దీని లక్షణాలు బలహీనత, చిగుళ్ల వ్యాధి, మరియు చర్మ రక్తస్రావం."
  },
  {
    "id": 287,
    "question": "Deoxygenated blood is collected into this chamber of human heart from the body parts. (TSTET Jan 2017)\nశరీర భాగాల నుండి ఆక్సిజన్ రహిత రక్తం మానవ గుండెలోని ఈ గదిలోకి సేకరించబడుతుంది.",
    "options": [
      "Right ventricle\nకుడి జఠరిక",
      "Left atrium\nఎడమ కర్ణిక",
      "Right atrium\nకుడి కర్ణిక",
      "Left ventricle\nఎడమ జఠరిక"
    ],
    "correctAnswer": 2,
    "explanation": "శరీరం నుండి ఆక్సిజన్ రహిత రక్తం ఊర్ధ్వ మరియు అధో బృహత్ సిరల ద్వారా గుండె యొక్క కుడి కర్ణికలోకి ప్రవేశిస్తుంది. కుడి కర్ణిక నుండి, అది కుడి జఠరికలోకి పంప్ చేయబడి, ఆపై ఆక్సిజన్ కోసం ఊపిరితిత్తులకు పంపబడుతుంది."
  },
  {
    "id": 288,
    "question": "The factors essential for photosynthesis are. (TSTET Jan 2017)\nకిరణజన్య సంయోగక్రియకు అవసరమైన కారకాలు.",
    "options": [
      "CO2, Starch, Chlorophyll, Sunlight.\nCO2, పిండిపదార్థం, క్లోరోఫిల్, సూర్యరశ్మి.",
      "CO2, H2O, Chlorophyll, Sunlight.\nCO2, H2O, క్లోరోఫిల్, సూర్యరశ్మి.",
      "CO2, O2, Chlorophyll, Sunlight.\nCO2, O2, క్లోరోఫిల్, సూర్యరశ్మి.",
      "Glucose, CO2, Chlorophyll, Sunlight.\nగ్లూకోజ్, CO2, క్లోరోఫిల్, సూర్యరశ్మి."
    ],
    "correctAnswer": 1,
    "explanation": "కిరణజన్య సంయోగక్రియ అనేది మొక్కలు సూర్యరశ్మి, నీరు (H2O) మరియు కార్బన్ డయాక్సైడ్ (CO2) ఉపయోగించి తమ ఆహారాన్ని (గ్లూకోజ్/చక్కెర) తయారుచేసుకునే ప్రక్రియ. ఈ ప్రక్రియకు కాంతి శక్తిని గ్రహించడానికి ఆకులలోని ఆకుపచ్చ వర్ణద్రవ్యం అయిన క్లోరోఫిల్ అవసరం. పిండిపదార్థం, గ్లూకోజ్, మరియు ఆక్సిజన్ (O2) ఈ చర్య యొక్క ఉత్పన్నాలు, కానీ అవసరమైన క్రియాజనకాలు కావు."
  },
  {
    "id": 289,
    "question": "The world famous Ellora caves belongs to this period. (TSTET Jan 2017)\nప్రపంచ ప్రసిద్ధి చెందిన ఎల్లోరా గుహలు ఈ కాలానికి చెందినవి.",
    "options": [
      "Kakatiyas\nకాకతీయులు",
      "Guptas\nగుప్తులు",
      "Mauryas\nమౌర్యులు",
      "Vijayanagaras\nవిజయనగర"
    ],
    "correctAnswer": 1,
    "explanation": "ఎల్లోరా గుహలు 6వ మరియు 10వ శతాబ్దాల మధ్య నిర్మించబడ్డాయి. ప్రధాన పోషకులు రాష్ట్రకూట రాజవంశం అయినప్పటికీ, తొలి గుహలు అంతకు ముందున్న గుప్త మరియు వాకాటక కాలాల శైలీకృత ప్రభావాలను చూపుతాయి. ఇచ్చిన ఎంపికలలో, నిర్మాణ ప్రారంభ దశను ప్రభావితం చేసిన అత్యంత సంబంధిత పూర్వ యుగం గుప్తుల కాలం."
  },
  {
    "id": 290,
    "question": "At present the post offices are not providing the following service. (TSTET Jan 2017)\nప్రస్తుతం తపాలా కార్యాలయాలు ఈ క్రింది సేవను అందించడం లేదు.",
    "options": [
      "Sending telegrams\nటెలిగ్రామ్‌లు పంపడం",
      "Saves money\nడబ్బు ఆదా చేయడం",
      "Life insurance\nజీవిత బీమా",
      "Post the letters\nఉత్తరాలను పోస్ట్ చేయడం"
    ],
    "correctAnswer": 0,
    "explanation": "భారతదేశంలో టెలిగ్రాఫ్ సేవ జూలై 2013లో అధికారికంగా నిలిపివేయబడింది. తపాలా కార్యాలయాలు పొదుపు ఖాతాలు, బీమా పాలసీలు వంటి ఆర్థిక సేవలను మరియు వాటి ప్రాథమిక విధి అయిన ఉత్తరాల బట్వాడాను కొనసాగిస్తున్నాయి."
  },
  {
    "id": 291,
    "question": "The Mandal Praja Parishad General body meeting is conducted by. (TSTET Jan 2017)\nమండల ప్రజా పరిషత్ సాధారణ సభ సమావేశాన్ని ఎవరు నిర్వహిస్తారు?",
    "options": [
      "Agriculture Officer.\nవ్యవసాయ అధికారి.",
      "Tahsildar\nతహశీల్దార్",
      "Mandal Educational Officer.\nమండల విద్యా అధికారి.",
      "Mandal Parishad Development Officer.\nమండల పరిషత్ అభివృద్ధి అధికారి."
    ],
    "correctAnswer": 3,
    "explanation": "మండల పరిషత్ అభివృద్ధి అధికారి (MPDO) మండల ప్రజా పరిషత్ యొక్క ముఖ్య కార్యనిర్వహణాధికారిగా పనిచేస్తారు. తీర్మానాలను అమలు చేయడం మరియు పరిపాలనను పర్యవేక్షించడం MPDO యొక్క బాధ్యత, ఇందులో సాధారణ సభ సమావేశాలను నిర్వహించడం కూడా ఉంటుంది."
  },
  {
    "id": 292,
    "question": "The author of the 'Bhramarambika Samvadam'. (TSTET Jan 2017)\n'భ్రమరాంబికా సంవాదం' రచయిత ఎవరు?",
    "options": [
      "Kadukuntla Papa Sastri\nకడుకుంట్ల పాప శాస్త్రి",
      "Anumula Venkata Subrahmanya Sastri\nఅనుముల వెంకట సుబ్రహ్మణ్య శాస్త్రి",
      "Pavuram Rangacharyulu\nపావురం రంగాచార్యులు",
      "Bahiri Gopala Rao\nబహిరి గోపాల రావు"
    ],
    "correctAnswer": 0,
    "explanation": "'భ్రమరాంబికా సంవాదం' తెలుగు సాహిత్యంలో ఒక ముఖ్యమైన రచన, దీనిని కడుకుంట్ల పాప శాస్త్రి రచించారు."
  },
  {
    "id": 293,
    "question": "Gandipet tank is also known as .... (TSTET Jan 2017)\nగండిపేట చెరువును ఇలా కూడా పిలుస్తారు ....",
    "options": [
      "Osman Sagar\nఉస్మాన్ సాగర్",
      "Hussain Sagar\nహుస్సేన్ సాగర్",
      "Ali Sagar\nఅలీ సాగర్",
      "Udaya Samudram\nఉదయ సముద్రం"
    ],
    "correctAnswer": 0,
    "explanation": "గండిపేట చెరువు హైదరాబాద్‌లోని ఒక జలాశయం, ఇది 1920లో మూసీ నదిపై ఆనకట్ట కట్టడం ద్వారా ఏర్పడింది. ఇది హైదరాబాద్ చివరి నిజాం మీర్ ఉస్మాన్ అలీ ఖాన్ హయాంలో నిర్మించబడింది మరియు అతని గౌరవార్థం అధికారికంగా ఉస్మాన్ సాగర్ అని పేరు పెట్టబడింది."
  },
  {
    "id": 294,
    "question": "This river does not flow in the Telangana state. (TSTET Jan 2017)\nఈ నది తెలంగాణ రాష్ట్రంలో ప్రవహించదు.",
    "options": [
      "Penna\nపెన్నా",
      "Pranahitha\nప్రాణహిత",
      "Thungabhadra\nతుంగభద్ర",
      "Kinnerasani\nకిన్నెరసాని"
    ],
    "correctAnswer": 0,
    "explanation": "ప్రాణహిత, తుంగభద్ర మరియు కిన్నెరసాని నదులు గోదావరి లేదా కృష్ణా నదులకు ఉపనదులు మరియు వాటి ప్రవాహ మార్గంలో కొంత భాగం తెలంగాణలో ఉంది. పెన్నా (లేదా పెన్నార్) నది ప్రధానంగా ఆంధ్రప్రదేశ్ మరియు కర్ణాటకల గుండా ప్రవహిస్తుంది మరియు తెలంగాణలోకి ప్రవేశించదు."
  },
  {
    "id": 295,
    "question": "This specification belongs to 'application'. (TSTET Jan 2017)\nఈ నిర్దిష్టత 'అనువర్తనానికి' సంబంధించినది.",
    "options": [
      "Detect errors in a wrong statement.\nతప్పు వాక్యంలో దోషాలను గుర్తించడం.",
      "Recognise facts, concepts, etc.\nవాస్తవాలు, భావనలు మొదలైనవాటిని గుర్తించడం.",
      "Draw inference from the relevent facts or data.\nసంబంధిత వాస్తవాలు లేదా డేటా నుండి అనుమితిని రాబట్టడం.",
      "Classify items as per the selected criteria.\nఎంచుకున్న ప్రమాణాల ప్రకారం అంశాలను వర్గీకరించడం."
    ],
    "correctAnswer": 2,
    "explanation": "విద్యా వర్గీకరణలో, 'అనువర్తనం' అనేది కొత్త పరిస్థితులలో జ్ఞానాన్ని ఉపయోగించడాన్ని సూచిస్తుంది. వాస్తవాలను గుర్తించడం 'జ్ఞానం'. వర్గీకరించడం 'అవగాహన/విశ్లేషణ'. దోషాలను గుర్తించడం నియమాలను వర్తింపజేయడం, కానీ డేటా నుండి ఒక అనుమితిని రాబట్టడం అనేది సమాచారాన్ని అర్థం చేసుకోవడానికి మరియు కొత్త ముగింపుకు రావడానికి తార్కికం మరియు విశ్లేషణాత్మక నైపుణ్యాల యొక్క ప్రత్యక్ష అనువర్తనం, ఇది శాస్త్రీయ సందర్భంలో 'అనువర్తన' డొమైన్‌తో బలంగా సరిపోలుతుంది."
  },
  {
    "id": 296,
    "question": "This is not one of the principles of curriculum construction. (TSTET Jan 2017)\nఇది పాఠ్యప్రణాళిక నిర్మాణ సూత్రాలలో ఒకటి కాదు.",
    "options": [
      "Principle of elasticity.\nస్థితిస్థాపకత సూత్రం.",
      "Principle of activity.\nకార్యాచరణ సూత్రం.",
      "Principle of creativity.\nసృజనాత్మకత సూత్రం.",
      "Principle of teacher centredness.\nఉపాధ్యాయ కేంద్రీకృత సూత్రం."
    ],
    "correctAnswer": 3,
    "explanation": "ఆధునిక పాఠ్యప్రణాళిక నిర్మాణ సూత్రాలు అభ్యాసకుడిపై దృష్టి పెడతాయి. ముఖ్య సూత్రాలలో కార్యాచరణ-ఆధారితంగా ఉండటం, సృజనాత్మకతను పెంపొందించడం మరియు విభిన్న అవసరాలకు అనుగుణంగా సౌకర్యవంతంగా (స్థితిస్థాపకత) ఉండటం ఉన్నాయి. విద్యార్థి చురుకైన భాగస్వామ్యం కంటే ఉపాధ్యాయుని పాత్రకు ప్రాధాన్యతనిచ్చే ఉపాధ్యాయ-కేంద్రీకృత విధానం, పాత నమూనాగా పరిగణించబడుతుంది మరియు సమర్థవంతమైన ఆధునిక పాఠ్యప్రణాళిక రూపకల్పన సూత్రం కాదు."
  },
  {
    "id": 297,
    "question": "Find the incorrect statement about aims and objectives of Science teaching. (TSTET Jan 2017)\nవిజ్ఞాన శాస్త్ర బోధన యొక్క లక్ష్యాలు మరియు ఉద్దేశ్యాల గురించి తప్పు వాక్యాన్ని కనుగొనండి.",
    "options": [
      "Aim involves all-round development of an individual which is beyond the scope of the school, where as objective is specific, immediate and visible change brought in a learner during an instructional hour.\nలక్ష్యం అనేది ఒక వ్యక్తి యొక్క సర్వతోముఖాభివృద్ధిని కలిగి ఉంటుంది, ఇది పాఠశాల పరిధికి మించినది, అయితే ఉద్దేశ్యం అనేది ఒక బోధనా గంటలో అభ్యాసకుడిలో తీసుకువచ్చిన నిర్దిష్ట, తక్షణ మరియు కనిపించే మార్పు.",
      "Aim is a distant goal, while objective is a short-term goal which is meaningful, clear and precisely defined.\nలక్ష్యం ఒక సుదూర గమ్యం, అయితే ఉద్దేశ్యం ఒక స్వల్పకాలిక గమ్యం, ఇది అర్థవంతమైనది, స్పష్టమైనది మరియు కచ్చితంగా నిర్వచించబడినది.",
      "Objectives come from aim whose attainments are steps towards achievement of educational aim.\nఉద్దేశ్యాలు లక్ష్యం నుండి వస్తాయి, వాటి సాధనలు విద్యా లక్ష్యం సాధన వైపు వేసే అడుగులు.",
      "Aim can be achieved at a short-time with hard work without breaking aim into objectives.\nలక్ష్యాలను ఉద్దేశ్యాలుగా విభజించకుండా కష్టపడి పనిచేయడం ద్వారా స్వల్పకాలంలో లక్ష్యాన్ని సాధించవచ్చు."
    ],
    "correctAnswer": 3,
    "explanation": "లక్ష్యాలు విద్య యొక్క విస్తృత, దీర్ఘకాలిక గమ్యాలు (ఉదా., 'శాస్త్రీయ అక్షరాస్యతను అభివృద్ధి చేయడం'). ఉద్దేశ్యాలు ఆ లక్ష్యాలను సాధించడానికి తీసుకునే నిర్దిష్ట, కొలవగల, స్వల్పకాలిక దశలు (ఉదా., 'విద్యార్థి పువ్వు యొక్క భాగాలను గుర్తించగలడు'). లక్ష్యాలను స్వల్పకాలంలో సాధించలేము; అవి సుదీర్ఘ కాలంలో అనేక చిన్న ఉద్దేశ్యాల సంచిత సాధన ద్వారా గ్రహించబడతాయి."
  },
  {
    "id": 298,
    "question": "Recently Education department introduced this for strengthening the teaching learning process. (TSTET Jan 2017)\nఇటీవల విద్యా శాఖ బోధన-అభ్యాసన ప్రక్రియను బలోపేతం చేయడానికి దీనిని ప్రవేశపెట్టింది.",
    "options": [
      "Extension classes\nవిస్తరణ తరగతులు",
      "Digital classes\nడిజిటల్ తరగతులు",
      "Library classes\nగ్రంథాలయ తరగతులు",
      "Self learning classes\nస్వీయ అభ్యాసన తరగతులు"
    ],
    "correctAnswer": 1,
    "explanation": "2017కి ముందు మరియు ఆ సంవత్సరంలో, తెలంగాణతో సహా భారతదేశంలోని విద్యా విభాగాలు తరగతి గదులలో సాంకేతికతను ఏకీకృతం చేయడానికి గణనీయమైన ప్రాధాన్యతనిచ్చాయి. కంప్యూటర్లు, ప్రొజెక్టర్లు మరియు డిజిటల్ కంటెంట్‌ను ఉపయోగించి 'డిజిటల్ క్లాసులు' ప్రవేశపెట్టడం బోధన-అభ్యాసన ప్రక్రియను ఆధునికీకరించడానికి మరియు బలోపేతం చేయడానికి ఒక ప్రధాన చొరవ."
  },
  {
    "id": 299,
    "question": "This method is useful for handling the lesson 'Gems of Clay:'. (TSTET Jan 2017)\n'మట్టిలోని మాణిక్యాలు' పాఠాన్ని బోధించడానికి ఈ పద్ధతి ఉపయోగపడుతుంది:",
    "options": [
      "Question and Answer method.\nప్రశ్న మరియు జవాబు పద్ధతి.",
      "Lecture method.\nఉపన్యాస పద్ధతి.",
      "Story telling method.\nకథ చెప్పే పద్ధతి.",
      "Field study.\nక్షేత్ర పర్యటన."
    ],
    "correctAnswer": 3,
    "explanation": "'మట్టిలోని మాణిక్యాలు' పాఠం బహుశా కుండలు, మట్టి లేదా మట్టితో చేసిన వస్తువులతో వ్యవహరిస్తుంది. అటువంటి అంశాన్ని బోధించడానికి క్షేత్ర పర్యటన అత్యంత ప్రభావవంతమైన మరియు అనుభవపూర్వక పద్ధతి, ఇది విద్యార్థులను తరగతి గది నుండి కుమ్మరి వర్క్‌షాప్ లేదా నది ఒడ్డు వంటి సంబంధిత ప్రదేశానికి తీసుకువెళుతుంది. ఇది ప్రత్యక్ష, చేతితో చూసే పరిశీలన మరియు అభ్యాసాన్ని అందిస్తుంది."
  },
  {
    "id": 300,
    "question": "Teaching learning process always should be focused on. (TSTET Jan 2017)\nబోధన-అభ్యాసన ప్రక్రియ ఎల్లప్పుడూ దీనిపై దృష్టి పెట్టాలి.",
    "options": [
      "School centred\nపాఠశాల కేంద్రీకృతం",
      "Subject centred\nవిషయ కేంద్రీకృతం",
      "Teacher centred\nఉపాధ్యాయ కేంద్రీకృతం",
      "Student centred\nవిద్యార్థి కేంద్రీకృతం"
    ],
    "correctAnswer": 3,
    "explanation": "ఆధునిక విద్యా తత్వశాస్త్రం విద్యార్థి-కేంద్రీకృత (లేదా అభ్యాసకుడు-కేంద్రీకృత) విధానాన్ని నొక్కి చెబుతుంది. దీని అర్థం బోధన-అభ్యాసన ప్రక్రియ కేవలం ఉపాధ్యాయుడు, విషయం లేదా సంస్థపై కాకుండా, విద్యార్థుల అవసరాలు, ఆసక్తులు, సామర్థ్యాలు మరియు అభ్యాస శైలుల చుట్టూ రూపొందించబడాలి."
  },
  {
    "id": 301,
    "question": "One of the following is NOT a factor of water pollution. (TSTET 2023)\nకింది వాటిలో ఒకటి నీటి కాలుష్యానికి కారకం కాదు.",
    "options": [
      "Biodegradable wastes\nజీవ విచ్ఛిన్న వ్యర్థాలు",
      "Heat\nవేడి",
      "Sediment\nఅవక్షేపం",
      "Chloro Fluoro Carbons\nక్లోరో ఫ్లోరో కార్బన్లు"
    ],
    "correctAnswer": 3,
    "explanation": "క్లోరో ఫ్లోరో కార్బన్లు (CFCలు) ప్రధానంగా భూమి యొక్క ఓజోన్ పొరను దెబ్బతీసే వాయు కాలుష్య కారకాలుగా ప్రసిద్ధి చెందాయి. అవి చివరికి నీటి వ్యవస్థలలోకి ప్రవేశించగలిగినప్పటికీ, అవి నీటి కాలుష్యానికి ప్రత్యక్ష లేదా ప్రాథమిక కారకంగా పరిగణించబడవు. జీవ విచ్ఛిన్న వ్యర్థాలు, వేడి (ఉష్ణ కాలుష్యం), మరియు అవక్షేపం అన్నీ నీటి కాలుష్యానికి సాధారణ మరియు ప్రత్యక్ష కారణాలు."
  },
  {
    "id": 302,
    "question": "Identify the non-renewable energy resources from the following. (TSTET 2023)\nకింది వాటి నుండి పునరుత్పాదకం కాని ఇంధన వనరులను గుర్తించండి.",
    "options": [
      "Fossil fuels\nశిలాజ ఇంధనాలు",
      "Wind energy\nపవన శక్తి",
      "Hydel energy\nజల విద్యుత్ శక్తి",
      "Solar energy\nసౌర శక్తి"
    ],
    "correctAnswer": 0,
    "explanation": "పునరుత్పాదకం కాని వనరులు అంటే అవి ఏర్పడే దానికంటే చాలా వేగంగా వినియోగించబడతాయి మరియు పరిమిత పరిమాణంలో ఉంటాయి. బొగ్గు, చమురు మరియు సహజ వాయువు వంటి శిలాజ ఇంధనాలు దీనికి ప్రధాన ఉదాహరణలు. పవన, జల (నీరు), మరియు సౌర శక్తి పునరుత్పాదకమైనవిగా పరిగణించబడతాయి ఎందుకంటే అవి సహజంగా తిరిగి భర్తీ చేయబడతాయి."
  },
  {
    "id": 303,
    "question": "In humans it excretes urine from urinary bladder to outside the body. (TSTET 2023)\nమానవులలో ఇది మూత్రాశయం నుండి మూత్రాన్ని శరీరం బయటకు విసర్జిస్తుంది.",
    "options": [
      "Ureters\nమూత్ర నాళాలు",
      "Malpighian tubules\nమాల్పీజియన్ నాళికలు",
      "Urethra\nప్రసేకం",
      "Renal tubules\nవృక్క నాళికలు"
    ],
    "correctAnswer": 2,
    "explanation": "ప్రసేకం అనేది మూత్రాశయం నుండి మూత్రం శరీరం బయటకు వెళ్ళే గొట్టం. మూత్ర నాళాలు మూత్రపిండాల నుండి మూత్రాశయానికి మూత్రాన్ని తీసుకువెళ్ళే గొట్టాలు. వృక్క నాళికలు మూత్రపిండాలలోని నెఫ్రాన్‌లలో భాగం, మరియు మాల్పీజియన్ నాళికలు కీటకాలలో విసర్జన అవయవాలు."
  },
  {
    "id": 304,
    "question": "In humans the inhaled air goes from the nasal cavity into this: (TSTET 2023)\nమానవులలో పీల్చిన గాలి నాసికా కుహరం నుండి దీనిలోకి వెళుతుంది:",
    "options": [
      "Pharynx\nగ్రసని",
      "Bronchus\nశ్వాసనాళిక",
      "Trachea\nవాయునాళం",
      "Larynx\nస్వరపేటిక"
    ],
    "correctAnswer": 0,
    "explanation": "పీల్చిన గాలి ప్రయాణించే సరైన క్రమం: నాసికా కుహరం → గ్రసని (గొంతు) → స్వరపేటిక (వాయిస్ బాక్స్) → వాయునాళం (గాలి గొట్టం) → శ్వాసనాళికలు. కాబట్టి, నాసికా కుహరం తర్వాత, గాలి గ్రసనిలోకి ప్రవేశిస్తుంది."
  },
  {
    "id": 305,
    "question": "Pulmonary artery arises from upper part of this chamber of human heart. (TSTET 2023)\nపుపుస ధమని మానవ గుండెలోని ఈ గది యొక్క పైభాగం నుండి ఉద్భవిస్తుంది.",
    "options": [
      "Right auricle\nకుడి కర్ణిక",
      "Left auricle\nఎడమ కర్ణిక",
      "Left ventricle\nఎడమ జఠరిక",
      "Right ventricle\nకుడి జఠరిక"
    ],
    "correctAnswer": 3,
    "explanation": "పుపుస ధమని అనేది గుండె నుండి ఊపిరితిత్తులకు ఆక్సిజన్ లేని రక్తాన్ని తీసుకువెళ్ళే పెద్ద రక్త నాళం. ఇది కుడి జఠరిక యొక్క పై భాగం నుండి ఉద్భవిస్తుంది."
  },
  {
    "id": 306,
    "question": "The enzyme present in saliva. (TSTET 2023)\nలాలాజలంలో ఉండే ఎంజైమ్.",
    "options": [
      "Lipase\nలైపేజ్",
      "Ptyalin\nటయలిన్",
      "Pepsin\nపెప్సిన్",
      "Trypsin\nట్రిప్సిన్"
    ],
    "correctAnswer": 1,
    "explanation": "లాలాజలంలో టయలిన్ అనే ఎంజైమ్ ఉంటుంది, దీనిని లాలాజల అమైలేజ్ అని కూడా అంటారు. దీని పని పిండిపదార్థాన్ని సరళమైన చక్కెరలుగా విడగొట్టడం ద్వారా జీర్ణ ప్రక్రియను ప్రారంభించడం. పెప్సిన్ కడుపులో కనుగొనబడుతుంది, అయితే ట్రిప్సిన్ మరియు లైపేజ్ చిన్న ప్రేగులలో పనిచేస్తాయి."
  },
  {
    "id": 307,
    "question": "'X' travelled from Hyderabad to Goa. For which, 'X' travelled in ........ direction. (TSTET 2023)\n'X' హైదరాబాద్ నుండి గోవాకు ప్రయాణించాడు. దీని కోసం, 'X' ........ దిశలో ప్రయాణించాడు.",
    "options": [
      "West\nపడమర",
      "North\nఉత్తరం",
      "South\nదక్షిణం",
      "East\nతూర్పు"
    ],
    "correctAnswer": 0,
    "explanation": "భారతదేశ పటంలో, గోవా రాష్ట్రం హైదరాబాద్, తెలంగాణకు పశ్చిమాన ఉంది. కాబట్టి, హైదరాబాద్ నుండి గోవాకు ప్రయాణించడానికి, పడమటి దిశలో ప్రయాణించాలి."
  },
  {
    "id": 308,
    "question": "The Toll Free Number 1098 is related to: (TSTET 2023)\nటోల్ ఫ్రీ నంబర్ 1098 దీనికి సంబంధించినది:",
    "options": [
      "Women Helpline\nమహిళల హెల్ప్‌లైన్",
      "Traffic Help Line\nట్రాఫిక్ హెల్ప్ లైన్",
      "Child Line\nచైల్డ్ లైన్",
      "Blood Bank\nరక్త నిధి"
    ],
    "correctAnswer": 2,
    "explanation": "1098 నంబర్ అనేది భారతదేశంలో సహాయం మరియు ఆసరా అవసరమైన పిల్లల కోసం టోల్-ఫ్రీ, 24/7 అత్యవసర ఫోన్ సేవ, దీనిని చైల్డ్‌లైన్ అని పిలుస్తారు."
  },
  {
    "id": 309,
    "question": "The parliament alone makes the laws on these subjects. (TSTET 2023)\nపార్లమెంటు మాత్రమే ఈ విషయాలపై చట్టాలను చేస్తుంది.",
    "options": [
      "Agriculture, Hospitals and Dispensaries\nవ్యవసాయం, ఆసుపత్రులు మరియు వైద్యశాలలు",
      "The rules and regulations relating to the telephone and postal system.\nటెలిఫోన్ మరియు తపాలా వ్యవస్థకు సంబంధించిన నియమాలు మరియు నిబంధనలు.",
      "Kendriya Vidyalayas and Central Schools.\nకేంద్రీయ విద్యాలయాలు మరియు సెంట్రల్ పాఠశాలలు.",
      "Irrigation, Police and Health Care.\nనీటిపారుదల, పోలీస్ మరియు ఆరోగ్య సంరక్షణ."
    ],
    "correctAnswer": 1,
    "explanation": "భారత రాజ్యాంగంలో, శాసనాల కోసం విషయాలు కేంద్ర జాబితా, రాష్ట్ర జాబితా మరియు ఉమ్మడి జాబితాగా విభజించబడ్డాయి. పోస్టులు మరియు టెలిగ్రాఫ్‌లు, టెలిఫోన్‌లు మరియు ఇతర కమ్యూనికేషన్ రూపాలు కేంద్ర జాబితా కిందకు వస్తాయి, అంటే వాటికి సంబంధించిన చట్టాలను చేసే అధికారం కేవలం కేంద్ర పార్లమెంటుకు మాత్రమే ఉంటుంది. వ్యవసాయం, పోలీసులు మరియు ఆసుపత్రులు రాష్ట్ర జాబితాలో ఉన్నాయి."
  },
  {
    "id": 310,
    "question": "A customer filed a civil case against a shop keeper and was not happy with the Judgment given by the Junior Civil Judge at Divisional Level. Then, he can make an appeal in this court. (TSTET 2023)\nఒక వినియోగదారుడు ఒక దుకాణదారుడిపై సివిల్ కేసు దాఖలు చేసి, డివిజనల్ స్థాయిలో జూనియర్ సివిల్ జడ్జి ఇచ్చిన తీర్పుతో సంతోషంగా లేడు. అప్పుడు, అతను ఈ కోర్టులో అప్పీల్ చేసుకోవచ్చు.",
    "options": [
      "District Court\nజిల్లా కోర్టు",
      "Session's Court\nసెషన్స్ కోర్టు",
      "High Court\nహైకోర్టు",
      "Asst. Session's Court\nఅసిస్టెంట్ సెషన్స్ కోర్టు"
    ],
    "correctAnswer": 0,
    "explanation": "భారతదేశంలో సివిల్ కోర్టుల సోపానక్రమం సాధారణంగా దిగువ కోర్టుల నుండి ఉన్నత న్యాయస్థానాలకు ప్రవహిస్తుంది. ఒక జూనియర్ సివిల్ జడ్జి తీర్పుకు వ్యతిరేకంగా అప్పీల్ తరువాతి ఉన్నత న్యాయస్థానంలో దాఖలు చేయబడుతుంది, అది జిల్లా కోర్టు. సెషన్స్ కోర్టులు ప్రధానంగా క్రిమినల్ కేసులను విచారిస్తాయి."
  },
  {
    "id": 311,
    "question": "Identify the modified root from the following. (TSTET 2023)\nకింది వాటి నుండి రూపాంతరం చెందిన వేరును గుర్తించండి.",
    "options": [
      "Turmeric\nపసుపు",
      "Potato\nబంగాళాదుంప",
      "Sweet potato\nచిలగడదుంప",
      "Ginger\nఅల్లం"
    ],
    "correctAnswer": 2,
    "explanation": "చిలగడదుంప అనేది రూపాంతరం చెందిన నిల్వ వేరు (దుంప వేరు). ఇది మొక్క కోసం ఆహారాన్ని దాని వేరు వ్యవస్థలో నిల్వ చేస్తుంది. దీనికి విరుద్ధంగా, బంగాళాదుంప, పసుపు మరియు అల్లం అన్నీ రూపాంతరం చెందిన కాండాలు (బంగాళాదుంప ఒక దుంప, పసుపు మరియు అల్లం రైజోమ్‌లు)."
  },
  {
    "id": 312,
    "question": "This vitamin deficiency causes 'Pellagra'. (TSTET 2023)\nఈ విటమిన్ లోపం 'పెల్లాగ్రా'కు కారణమవుతుంది.",
    "options": [
      "Niacin\nనియాసిన్",
      "Folic acid\nఫోలిక్ ఆమ్లం",
      "Biotin\nబయోటిన్",
      "Thiamine\nథయామిన్"
    ],
    "correctAnswer": 0,
    "explanation": "నియాసిన్ (విటమిన్ B3) యొక్క తీవ్రమైన లోపం వల్ల పెల్లాగ్రా అనే వ్యాధి వస్తుంది. ఇది తరచుగా 'మూడు Dలు' అని పిలువబడే లక్షణాలతో వర్గీకరించబడుతుంది: డెర్మటైటిస్ (చర్మవ్యాధి), డయేరియా (విరేచనాలు), మరియు డిమెన్షియా (మతిమరుపు)."
  },
  {
    "id": 313,
    "question": "In angiosperms fruits' develop from: (TSTET 2023)\nఆవృతబీజాలలో ఫలాలు దీని నుండి అభివృద్ధి చెందుతాయి:",
    "options": [
      "Embryo sac\nపిండకోశం",
      "Ovule\nఅండం",
      "Embryo\nపిండం",
      "Ovary\nఅండాశయం"
    ],
    "correctAnswer": 3,
    "explanation": "ఆవృతబీజాలలో (పుష్పించే మొక్కలు), ఫలదీకరణం తర్వాత, పువ్వు యొక్క అండాశయం పరిపక్వం చెంది ఫలంగా అభివృద్ధి చెందుతుంది. అండాశయంలోని అండాలు విత్తనాలుగా అభివృద్ధి చెందుతాయి."
  },
  {
    "id": 314,
    "question": "The number of canines in an adult human having 32 teeth. (TSTET 2023)\n32 దంతాలు ఉన్న వయోజన మానవునిలో రదనికల సంఖ్య.",
    "options": [
      "12",
      "4",
      "6",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "పూర్తిగా 32 దంతాలు ఉన్న వయోజన మానవునికి నాలుగు రదనికలు ఉంటాయి. పై దవడలో రెండు మరియు క్రింది దవడలో రెండు ఉంటాయి, ఇవి కుంతకాలు మరియు అగ్ర చర్వణకాల మధ్య ఉంటాయి. అవి ఆహారాన్ని చీల్చడానికి ఉపయోగించే మొనదేలిన దంతాలు."
  },
  {
    "id": 315,
    "question": "The most abundant gas in the atmosphere is: (TSTET 2023)\nవాతావరణంలో అత్యంత సమృద్ధిగా ఉండే వాయువు:",
    "options": [
      "Carbon dioxide\nకార్బన్ డయాక్సైడ్",
      "Oxygen\nఆక్సిజన్",
      "Nitrogen\nనత్రజని",
      "Hydrogen\nహైడ్రోజన్"
    ],
    "correctAnswer": 2,
    "explanation": "భూమి యొక్క వాతావరణం సుమారు 78% నత్రజనితో కూడి ఉంటుంది, ఇది అత్యంత సమృద్ధిగా ఉండే వాయువు. ఆక్సిజన్ సుమారు 21% తో రెండవ అత్యంత సమృద్ధిగా ఉండే వాయువు."
  },
  {
    "id": 316,
    "question": "The following disease is transmitted through air. (TSTET 2023)\nకింది వ్యాధి గాలి ద్వారా వ్యాపిస్తుంది.",
    "options": [
      "Dengue\nడెంగ్యూ",
      "Tuberculosis\nక్షయవ్యాధి",
      "Cholera\nకలరా",
      "Malaria\nమలేరియా"
    ],
    "correctAnswer": 1,
    "explanation": "క్షయవ్యాధి (TB) గాలి ద్వారా సంక్రమించే వ్యాధి. ఇది దగ్గు మరియు తుమ్ముల ద్వారా గాలిలోకి విడుదలయ్యే చిన్న తుంపరల ద్వారా ఒక వ్యక్తి నుండి మరొకరికి వ్యాపించే బ్యాక్టీరియా వల్ల వస్తుంది. డెంగ్యూ మరియు మలేరియా దోమల ద్వారా (వాహక-జనిత), మరియు కలరా కలుషిత నీటి ద్వారా (నీటి-జనిత) వ్యాపిస్తాయి."
  },
  {
    "id": 317,
    "question": "As per the UN Convention on Child Rights, 1989, one of the following is not the Child Right. (TSTET 2023)\nUN బాలల హక్కుల ఒప్పందం, 1989 ప్రకారం, కింది వాటిలో ఒకటి బాలల హక్కు కాదు.",
    "options": [
      "Right to get protection from the illegal activities of the child.\nపిల్లల చట్టవిరుద్ధమైన కార్యకలాపాల నుండి రక్షణ పొందే హక్కు.",
      "Right to gain Knowledge and get awareness of the world.\nజ్ఞానాన్ని సంపాదించి, ప్రపంచం గురించి అవగాహన పొందే హక్కు.",
      "Right to protection from violence and harmful incidents.\nహింస మరియు హానికరమైన సంఘటనల నుండి రక్షణ పొందే హక్కు.",
      "Right to get protection from harmful medicines.\nహానికరమైన మందుల నుండి రక్షణ పొందే హక్కు."
    ],
    "correctAnswer": 0,
    "explanation": "UN బాలల హక్కుల ఒప్పందం (UNCRC) పిల్లలను హాని నుండి రక్షించడం మరియు వారి శ్రేయస్సును నిర్ధారించడంపై దృష్టి పెడుతుంది. ఇది వారి స్వంత చట్టవిరుద్ధమైన కార్యకలాపాల పరిణామాల నుండి రక్షించబడటానికి హక్కును మంజూరు చేయదు. మైనర్ల న్యాయ వ్యవస్థలో ప్రత్యేక పరిగణనలు ఉన్నప్పటికీ, హక్కు ఈ విధంగా రూపొందించబడలేదు. ఇతర ఎంపికలు విద్యా హక్కు, హాని నుండి రక్షణ మరియు ఆరోగ్య సంరక్షణ వంటి UNCRC యొక్క ప్రధాన సూత్రాలను ప్రతిబింబిస్తాయి."
  },
  {
    "id": 318,
    "question": "King Ashoka, the Mauryan emperor, appointed these officers to solve the problems arising between the people. (TSTET 2023)\nమౌర్య చక్రవర్తి అశోకుడు ప్రజల మధ్య తలెత్తే సమస్యలను పరిష్కరించడానికి ఈ అధికారులను నియమించాడు.",
    "options": [
      "Nayakas\nనాయకులు",
      "Mansabdars\nమన్సబ్దార్లు",
      "Patla\nపట్ల",
      "Dhammamahamathrulu\nధమ్మమహామాత్రులు"
    ],
    "correctAnswer": 3,
    "explanation": "చక్రవర్తి అశోకుడు 'ధమ్మ మహామత్తాస్' (ధమ్మమహామాత్రులు) అని పిలువబడే ప్రత్యేక అధికారులను నియమించాడు. వారి విధి ప్రయాణించి ధమ్మ (ధర్మబద్ధమైన ప్రవర్తన) సందేశాన్ని వ్యాప్తి చేయడం, అలాగే ప్రజల సంక్షేమాన్ని చూడటం మరియు న్యాయం జరిగేలా చూడటం."
  },
  {
    "id": 319,
    "question": "This Nizam of Hyderabad continued as Raj Pramukh for the state of Hyderabad upto 1956. (TSTET 2023)\nఈ హైదరాబాద్ నిజాం 1956 వరకు హైదరాబాద్ రాష్ట్రానికి రాజ్ ప్రముఖ్‌గా కొనసాగారు.",
    "options": [
      "Mir Akbar Ali Khan\nమీర్ అక్బర్ అలీ ఖాన్",
      "Mir Osman Ali Khan\nమీర్ ఉస్మాన్ అలీ ఖాన్",
      "Nizam Ali Khan\nనిజాం అలీ ఖాన్",
      "Mir Tahniyath Khan\nమీర్ తహ్నియత్ ఖాన్"
    ],
    "correctAnswer": 1,
    "explanation": "హైదరాబాద్ రాష్ట్రం భారతదేశంలో విలీనమైన తర్వాత, దాని చివరి పాలక నిజాం, మీర్ ఉస్మాన్ అలీ ఖాన్, ఆ రాష్ట్రానికి రాజప్రముఖ్ (రాష్ట్ర గవర్నర్‌కు సమానం)గా నియమించబడ్డారు. అతను 1950 నుండి 1956 వరకు, రాష్ట్రం రద్దు చేయబడి, పునర్వ్యవస్థీకరించబడే వరకు ఈ రాజ్యాంగ పదవిలో పనిచేశాడు."
  },
  {
    "id": 320,
    "question": "In 1919, the British Government passed the Rowlatt Act. It empowered the British Government: (TSTET 2023)\n1919లో, బ్రిటిష్ ప్రభుత్వం రౌలట్ చట్టాన్ని ఆమోదించింది. ఇది బ్రిటిష్ ప్రభుత్వానికి దేనిపై అధికారం ఇచ్చింది:",
    "options": [
      "To arrest the people who broke the salt laws.\nఉప్పు చట్టాలను ఉల్లంఘించిన వారిని అరెస్టు చేయడానికి.",
      "To declare independence to India.\nభారతదేశానికి స్వాతంత్ర్యం ప్రకటించడానికి.",
      "To arrest anyone without warrant and imprison without trial.\nవారెంట్ లేకుండా ఎవరినైనా అరెస్టు చేయడానికి మరియు విచారణ లేకుండా జైలులో పెట్టడానికి.",
      "To support the Khilafat Movement.\nఖిలాఫత్ ఉద్యమానికి మద్దతు ఇవ్వడానికి."
    ],
    "correctAnswer": 2,
    "explanation": "1919 నాటి అరాచక మరియు విప్లవ నేరాల చట్టం, సాధారణంగా రౌలట్ చట్టంగా పిలువబడుతుంది, ఇది రాజకీయ అసమ్మతిని అణచివేయడానికి బ్రిటిష్ వలస ప్రభుత్వానికి కఠినమైన అధికారాలను ఇచ్చింది. ఇది వ్యక్తులను నిరవధికంగా నిర్బంధించడం, విచారణ లేకుండా జైలులో ఉంచడం మరియు పత్రికలపై కఠినమైన ఆంక్షలను విధించడం వంటివి అనుమతించింది."
  },
  {
    "id": 321,
    "question": "Identify the INCORRECT statement regarding the Latitudes is: (TSTET 2023)\nఅక్షాంశాలకు సంబంధించి తప్పుగా ఉన్న వాక్యాన్ని గుర్తించండి:",
    "options": [
      "The Tropic of Cancer is passing through India.\nకర్కాటక రేఖ భారతదేశం గుండా వెళుతుంది.",
      "The Equator is the largest among all the latitudes.\nఅన్ని అక్షాంశాలలో భూమధ్యరేఖ అతిపెద్దది.",
      "The Equator divides the Earth into two equal halves.\nభూమధ్యరేఖ భూమిని రెండు సమాన అర్ధభాగాలుగా విభజిస్తుంది.",
      "There are 180 latitudes on either side of the Equator.\nభూమధ్యరేఖకు ఇరువైపులా 180 అక్షాంశాలు ఉన్నాయి."
    ],
    "correctAnswer": 3,
    "explanation": "ఈ వాక్యం తప్పు. అక్షాంశాలను భూమధ్యరేఖ (0°) నుండి ధ్రువాల (90°) వరకు డిగ్రీలలో కొలుస్తారు. ఉత్తరార్ధగోళంలో 90 డిగ్రీల అక్షాంశాలు మరియు దక్షిణార్ధగోళంలో 90 డిగ్రీల అక్షాంశాలు ఉన్నాయి. కాబట్టి, భూమధ్యరేఖకు ఇరువైపులా 90 అక్షాంశాలు ఉంటాయి, 180 కాదు."
  },
  {
    "id": 322,
    "question": "Identify the correct pair from the following. (TSTET 2023)\nకింది వాటిలో సరైన జతను గుర్తించండి.",
    "options": [
      "Satya Shodak Samaj - Jyothiba Phule.\nసత్య శోధక్ సమాజ్ - జ్యోతిబా ఫూలే.",
      "Brahma Samaj - Swamy Dayananda Saraswati.\nబ్రహ్మ సమాజం - స్వామి దయానంద సరస్వతి.",
      "Arya Samaj - Atmaram Keshab Chandra Sen.\nఆర్య సమాజ్ - ఆత్మారాం కేశబ్ చంద్ర సేన్.",
      "Prarthana Samaj - Raja Ram Mohan Roy.\nప్రార్థన సమాజ్ - రాజా రామ్ మోహన్ రాయ్."
    ],
    "correctAnswer": 0,
    "explanation": "సరిగ్గా సరిపోలిన జత 'సత్య శోధక్ సమాజ్ - జ్యోతిబా ఫూలే'. జ్యోతిబా ఫూలే 1873లో ఈ సామాజిక సంస్కరణ సంస్థను స్థాపించారు. మిగిలిన జతలు తప్పు: బ్రహ్మ సమాజాన్ని రాజా రామ్ మోహన్ రాయ్, ఆర్య సమాజాన్ని స్వామి దయానంద సరస్వతి, మరియు ప్రార్థన సమాజాన్ని ఆత్మారాం పాండురంగ్ స్థాపించారు."
  },
  {
    "id": 323,
    "question": "The Eastern edges of the Deccan Plateau is: (TSTET 2023)\nదక్కన్ పీఠభూమి యొక్క తూర్పు అంచులు:",
    "options": [
      "The Western Ghats and The Eastern Ghats.\nపశ్చిమ కనుమలు మరియు తూర్పు కనుమలు.",
      "The Mahadev and The Kaimur Range.\nమహాదేవ్ మరియు కైమూర్ శ్రేణి.",
      "The Satpura Range and The Nilgiri Hills.\nసాత్పురా శ్రేణి మరియు నీలగిరి కొండలు.",
      "Nilgiri Mountains and The Western Ghats.\nనీలగిరి పర్వతాలు మరియు పశ్చిమ కనుమలు."
    ],
    "correctAnswer": 1,
    "explanation": "దక్కన్ పీఠభూమికి ఉత్తరాన సాత్పురా శ్రేణి సరిహద్దుగా ఉంది. సాత్పురా శ్రేణి యొక్క తూర్పు వైపు విస్తరణలు మహాదేవ్ కొండలు మరియు మైకల్ శ్రేణి. కైమూర్ శ్రేణి, సాత్పురాకు ఉత్తరాన ఉన్న వింధ్య శ్రేణి యొక్క తూర్పు విస్తరణ. ఈ శ్రేణులు కలిసి పీఠభూమికి ఈశాన్య సరిహద్దును లేదా అంచును ఏర్పరుస్తాయి."
  },
  {
    "id": 324,
    "question": "The amount of rainfall is very high along the west coast due to the presence of: (TSTET 2023)\nపశ్చిమ తీరంలో అధిక వర్షపాతం ఉండటానికి కారణం:",
    "options": [
      "Upper Atmospheric circulation.\nఎగువ వాతావరణ ప్రసరణ.",
      "The Arabian Sea on the west coast.\nపశ్చిమ తీరంలో అరేబియా సముద్రం.",
      "The Western Ghats.\nపశ్చిమ కనుమలు.",
      "Depressions and cyclones throughout the year.\nసంవత్సరం పొడవునా అల్పపీడనాలు మరియు తుఫానులు."
    ],
    "correctAnswer": 2,
    "explanation": "రుతుపవనాల కాలంలో భారతదేశ పశ్చిమ తీరం వెంబడి కురిసే భారీ వర్షపాతానికి ప్రధాన కారణం పర్వతీయ అవరోధం. తీరానికి సమాంతరంగా ఉన్న పశ్చిమ కనుమల పర్వత శ్రేణి, అరేబియా సముద్రం నుండి వచ్చే తేమతో కూడిన నైరుతి రుతుపవనాలను అడ్డుకుంటుంది. దీనివల్ల గాలి పైకి లేచి, చల్లబడి, తన తేమను పవనాభిముఖ దిశలో భారీ వర్షంగా విడుదల చేస్తుంది."
  },
  {
    "id": 325,
    "question": "'Executing' and 'Finding' are the sub-categories of the following cognitive process dimension respectively. (TSTET 2023)\n'నిర్వహించడం' మరియు 'కనుగొనడం' అనేవి వరుసగా క్రింది అభిజ్ఞా ప్రక్రియ పరిమాణం యొక్క ఉప-విభాగాలు.",
    "options": [
      "Applying; Analysing.\nఅన్వయించడం; విశ్లేషించడం.",
      "Remembering; Understanding.\nజ్ఞప్తికి తెచ్చుకోవడం; అవగాహన చేసుకోవడం.",
      "Understanding; Applying.\nఅవగాహన చేసుకోవడం; అన్వయించడం.",
      "Applying; Remembering.\nఅన్వయించడం; జ్ఞప్తికి తెచ్చుకోవడం."
    ],
    "correctAnswer": 0,
    "explanation": "ఈ ప్రశ్న సవరించిన బ్లూమ్ యొక్క వర్గీకరణలోని అభిజ్ఞాత్మక పరిమాణాలకు సంబంధించినది. 'నిర్వహించడం' (ఒక ప్రక్రియను అమలు చేయడం) అనేది 'అన్వయించడం' స్థాయిలోని ఒక ముఖ్య భాగం. 'కనుగొనడం' (భేదాలను గుర్తించడం, వ్యవస్థీకరించడం మరియు ఆపాదించడం) అనేది 'విశ్లేషించడం' స్థాయిలో ఒక భాగం, ఇక్కడ అభ్యాసకులు విషయాన్ని దాని నిర్మాణం అర్థం చేసుకోవడానికి చిన్న భాగాలుగా విడగొడతారు."
  },
  {
    "id": 326,
    "question": "'Telling reasons' and 'Classifying based on the criteria' are the learning indicators of this Academic standard. (TSTET 2023)\n'కారణాలు చెప్పడం' మరియు 'ప్రమాణాల ఆధారంగా వర్గీకరించడం' అనేవి ఈ విద్యా ప్రమాణం యొక్క అభ్యాసన సూచికలు.",
    "options": [
      "Information skills, Projects.\nసమాచార నైపుణ్యాలు, ప్రాజెక్టులు.",
      "Conceptual understanding.\nభావనాత్మక అవగాహన.",
      "Questioning-Hypothesis.\nప్రశ్నించడం-పరిశోధనా పత్రం.",
      "Experiments-Field observation.\nప్రయోగాలు-క్షేత్ర పరిశీలన."
    ],
    "correctAnswer": 1,
    "explanation": "ఏదైనా ఎందుకు జరుగుతుందో వివరించగల సామర్థ్యం ('కారణాలు చెప్పడం') మరియు భాగస్వామ్య లక్షణాల ఆధారంగా వస్తువులను సమూహపరచడం ('వర్గీకరించడం') అనేవి ఒక విద్యార్థి భావనాత్మక అవగాహనను సాధించాడనడానికి బలమైన సూచికలు. ఇది వారు బట్టీ పట్టడం నుండి అంతర్లీన సూత్రాలు మరియు సంబంధాలను గ్రహించే స్థాయికి చేరుకున్నారని చూపిస్తుంది."
  },
  {
    "id": 327,
    "question": "Identify the visual teaching aid from the following. (TSTET 2023)\nకింది వాటిలో దృశ్య బోధనా పరికరాన్ని గుర్తించండి.",
    "options": [
      "Computer\nకంప్యూటర్",
      "Television\nటెలివిజన్",
      "Film strip\nఫిల్మ్ స్ట్రిప్",
      "Radio\nరేడియో"
    ],
    "correctAnswer": 2,
    "explanation": "దృశ్య పరికరం అనేది ప్రధానంగా దృష్టి జ్ఞానానికి ఆకర్షణ కలిగించే ఒక సాధనం. ఫిల్మ్ స్ట్రిప్ ప్రదర్శించడానికి ఉద్దేశించిన స్థిర చిత్రాల శ్రేణిని కలిగి ఉంటుంది, ఇది పూర్తిగా దృశ్య పరికరంగా చేస్తుంది. కంప్యూటర్లు మరియు టెలివిజన్ శ్రవణ-దృశ్య పరికరాలు, ఎందుకంటే అవి ధ్వని మరియు చిత్రాలను రెండింటినీ అందిస్తాయి. రేడియో పూర్తిగా శ్రవణ పరికరం."
  },
  {
    "id": 328,
    "question": "This is a child centred teaching method. (TSTET 2023)\nఇది శిశు కేంద్రిత బోధనా పద్ధతి.",
    "options": [
      "Historical method.\nచారిత్రక పద్ధతి.",
      "Lecture method.\nఉపన్యాస పద్ధతి.",
      "Lecture cum demonstration method.\nఉపన్యాస మరియు ప్రదర్శన పద్ధతి.",
      "Heuristic method.\nఅన్వేషణా పద్ధతి."
    ],
    "correctAnswer": 3,
    "explanation": "అన్వేషణా పద్ధతి (Heuristic method), దీనిని ఆవిష్కరణ పద్ధతి అని కూడా అంటారు, ఇది ఒక ముఖ్యమైన శిశు-కేంద్రిత విధానం. ఇది విద్యార్థిని ఒక ఆవిష్కర్త పాత్రలో ఉంచి, విచారణ మరియు అన్వేషణ ద్వారా సమాధానాలు మరియు పరిష్కారాలను కనుగొనడానికి ప్రోత్సహిస్తుంది. ఉపాధ్యాయుడు బోధకుడిగా కాకుండా మార్గదర్శకుడిగా వ్యవహరిస్తాడు. జాబితా చేయబడిన ఇతర పద్ధతులు ప్రధానంగా ఉపాధ్యాయ-కేంద్రితమైనవి."
  },
  {
    "id": 329,
    "question": "This type of evaluation is conducted before the commencement of teaching learning process and is used to know the strengths and weaknesses of the students. (TSTET 2023)\nఈ రకమైన మూల్యాంకనం బోధనా-అభ్యాసన ప్రక్రియ ప్రారంభానికి ముందు నిర్వహించబడుతుంది మరియు విద్యార్థుల బలాలు మరియు బలహీనతలను తెలుసుకోవడానికి ఉపయోగించబడుతుంది.",
    "options": [
      "Prognostic evaluation.\nప్రాగుక్తిక మూల్యాంకనం.",
      "Diagnostic evaluation.\nలోప నిర్ధారణ మూల్యాంకనం.",
      "Formative evaluation.\nనిర్మాణాత్మక మూల్యాంకనం.",
      "Summative evaluation.\nసంగ్రహణాత్మక మూల్యాంకనం."
    ],
    "correctAnswer": 1,
    "explanation": "ఒక యూనిట్ లేదా కోర్సు ప్రారంభంలో విద్యార్థి యొక్క ముందుగా ఉన్న జ్ఞానం, నైపుణ్యాలు, బలాలు మరియు బలహీనతలను 'నిర్ధారించడానికి' లోప నిర్ధారణ మూల్యాంకనం నిర్వహించబడుతుంది. ఈ సమాచారం ఉపాధ్యాయుడు విద్యార్థుల అవసరాలకు అనుగుణంగా బోధనను రూపొందించడానికి అనుమతిస్తుంది. నిర్మాణాత్మక మూల్యాంకనం అభ్యాసన సమయంలో జరుగుతుంది, మరియు సంగ్రహణాత్మక మూల్యాంకనం చివరలో జరుగుతుంది."
  },
  {
    "id": 330,
    "question": "This committee/commission recommended for the first time introducing Environmental Studies (EVS) as a core subject at primary level instead of teaching General Science and Social Studies separately. (TSTET 2023)\nఈ కమిటీ/కమిషన్ ప్రాథమిక స్థాయిలో జనరల్ సైన్స్ మరియు సోషల్ స్టడీస్‌ను వేర్వేరుగా బోధించే బదులుగా పర్యావరణ అధ్యయనాలను (EVS) ఒక ప్రధాన విషయంగా ప్రవేశపెట్టాలని మొదటిసారిగా సిఫార్సు చేసింది.",
    "options": [
      "Secondary Education Commission (1952-53).\nమాధ్యమిక విద్యా కమిషన్ (1952-53).",
      "Indian Education Commission (1964-66).\nభారత విద్యా కమిషన్ (1964-66).",
      "Iswari Bhai Patel Committee (1977).\nఈశ్వరీభాయ్ పటేల్ కమిటీ (1977).",
      "Prof. Yashpal Committee (1993).\nప్రొ. యశ్పాల్ కమిటీ (1993)."
    ],
    "correctAnswer": 2,
    "explanation": "ఈశ్వరీభాయ్ పటేల్ కమిటీ (1977) పాఠశాల పాఠ్యప్రణాళికను సమీక్షించడంలో కీలకపాత్ర పోషించింది. ప్రాథమిక దశలో, సైన్స్ మరియు సోషల్ స్టడీస్‌ను వేర్వేరు విభాగాలుగా బోధించకూడదని, వాటిని 'పర్యావరణ అధ్యయనాలు' (EVS) అనే ఒకే సబ్జెక్టుగా ఏకీకృతం చేయాలని ఇది సిఫార్సు చేసింది. ఇది సహజ మరియు సామాజిక వాతావరణాల నుండి కంటెంట్‌ను తీసుకుంటుంది."
  },
  {
    "id": 331,
    "question": "Potato is a modification of (TSTET 02 June 2024)\nబంగాళాదుంప దీని రూపాంతరం",
    "options": [
      "leaf\nఆకు",
      "root\nవేరు",
      "fruit\nపండు",
      "stem\nకాండం"
    ],
    "correctAnswer": 3,
    "explanation": "బంగాళాదుంప ఒక దుంప, ఇది ఆహారాన్ని, ప్రధానంగా పిండిపదార్థాన్ని నిల్వ చేయడానికి మార్పు చెందిన ఉబ్బిన భూగర్భ కాండం. బంగాళాదుంప యొక్క 'కళ్ళు' వాస్తవానికి కణుపులు, వాటి నుండి కొత్త కాండాలు మరియు వేర్లు పెరుగుతాయి, ఇది కాండం అని నిర్ధారిస్తుంది."
  },
  {
    "id": 332,
    "question": "One of the following is NOT a step in making clay pots (TSTET 02 June 2024)\nకింది వాటిలో మట్టి కుండల తయారీలో ఒక దశ కానిది",
    "options": [
      "separating stones from clay\nమట్టి నుండి రాళ్లను వేరు చేయడం",
      "rolling soft soaked clay on potter's wheel\nకుమ్మరి చక్రంపై మెత్తగా నానబెట్టిన మట్టిని చుట్టడం",
      "tapping the pot made on wheel with a wooden plate for correct shape\nచక్రంపై చేసిన కుండను సరైన ఆకారం కోసం చెక్క పలకతో కొట్టడం",
      "baking the dried pots in a kiln\nఎండిన కుండలను బట్టీలో కాల్చడం"
    ],
    "correctAnswer": 1,
    "explanation": "కుమ్మరి చక్రంపై మెత్తగా నానబెట్టిన మట్టిని ఉపయోగించినప్పటికీ, ఆ ప్రక్రియను 'విసరడం' లేదా మట్టిని ఆకృతి చేయడానికి 'కేంద్రీకరించడం' అంటారు. 'చుట్టడం' అనే పదం చదునైన పలకలు లేదా మట్టి కాయిల్స్ తయారు చేయడంతో ఎక్కువగా సంబంధం కలిగి ఉంటుంది. ఇతర ఎంపికలు—మట్టిని శుభ్రపరచడం, తెడ్డుతో ఆకృతి చేయడం మరియు బట్టీలో కాల్చడం—అన్నీ కుండల తయారీలో ప్రామాణిక దశలు."
  },
  {
    "id": 333,
    "question": "The scientist who believed that electricity is caused by a moving liquid called 'Homer' is (TSTET 02 June 2024)\n'హోమర్' అనే కదిలే ద్రవం వల్ల విద్యుత్ ఏర్పడుతుందని నమ్మిన శాస్త్రవేత్త",
    "options": [
      "Thomas Edison\nథామస్ ఎడిసన్",
      "Rutherford\nరూథర్‌ఫోర్డ్",
      "William Gilbert\nవిలియం గిల్బర్ట్",
      "Bohr\nబోర్"
    ],
    "correctAnswer": 2,
    "explanation": "విలియం గిల్బర్ట్ (1544-1603) ఒక ఆంగ్ల శాస్త్రవేత్త, అయస్కాంతత్వం మరియు స్థిర విద్యుత్‌పై పరిశోధనలకు మార్గదర్శకుడు. వస్తువును రుద్దినప్పుడు దాని నుండి వెలువడే ఒక పదార్థ 'ప్రవాహం' (effluvium) వల్ల స్థిర ఆకర్షణ కలుగుతుందని ఆయన సిద్ధాంతీకరించారు. 'హోమర్' అనే పదం ప్రామాణికం కానప్పటికీ, కదిలే ద్రవం విద్యుత్‌కు కారణమవుతుందనే భావన గిల్బర్ట్ యొక్క తొలి రచనలకు ఆపాదించబడింది."
  },
  {
    "id": 334,
    "question": "Choose the correct statement about Dr. Beamont's experiments on stomach and the process of digestion (TSTET 02 June 2024)\nడాక్టర్ బీమాంట్ యొక్క కడుపు మరియు జీర్ణక్రియ ప్రక్రియపై చేసిన ప్రయోగాల గురించి సరైన వాక్యాన్ని ఎంచుకోండి",
    "options": [
      "Food is digested slowly in stomach than when placed outside the body provided with digestive juices\nజీర్ణ రసాలు అందించినప్పుడు శరీరం వెలుపల ఉంచిన దానికంటే కడుపులో ఆహారం నెమ్మదిగా జీర్ణం అవుతుంది",
      "When a person is unhappy, the process of digestion is slow\nఒక వ్యక్తి సంతోషంగా లేనప్పుడు, జీర్ణక్రియ ప్రక్రియ నెమ్మదిస్తుంది",
      "The digestive juices present in stomach are basic in nature\nకడుపులో ఉండే జీర్ణ రసాలు స్వభావంలో క్షారయుతంగా ఉంటాయి",
      "Half boiled eggs took more time to get digested than skimmed eggs\nతక్కువ ఉడికించిన గుడ్ల కంటే సగం ఉడికించిన గుడ్లు జీర్ణం కావడానికి ఎక్కువ సమయం తీసుకున్నాయి"
    ],
    "correctAnswer": 1,
    "explanation": "అలెక్సిస్ సెయింట్ మార్టిన్‌పై డాక్టర్ విలియం బీమాంట్ చేసిన ప్రయోగాలు జీర్ణక్రియ యొక్క అనేక ముఖ్యమైన అంశాలను వెల్లడించాయి. అతని ముఖ్యమైన ఆవిష్కరణలలో ఒకటి, మానసిక స్థితులు జీర్ణక్రియను నేరుగా ప్రభావితం చేస్తాయని; సెయింట్ మార్టిన్ కోపంగా లేదా కలత చెందినప్పుడు, జీర్ణక్రియ ప్రక్రియ గణనీయంగా నెమ్మదించడాన్ని అతను గమనించాడు. జీర్ణక్రియ ఒక రసాయన ప్రక్రియ అని, గ్యాస్ట్రిక్ రసం ఆమ్లయుతంగా ఉంటుందని, మరియు బయట కంటే కడుపులో ఆహారం వేగంగా జీర్ణం అవుతుందని కూడా అతను నిరూపించాడు."
  },
  {
    "id": 335,
    "question": "We use __________ to measure a string of flowers (TSTET 02 June 2024)\nపూల మాలను కొలవడానికి మనం __________ ఉపయోగిస్తాము",
    "options": [
      "scale\nస్కేలు",
      "hand span\nజాన",
      "foot span\nఅడుగు",
      "cubit\nమూర"
    ],
    "correctAnswer": 3,
    "explanation": "అనేక సాంప్రదాయ సందర్భాలలో, 'మూర' (మోచేతి నుండి మధ్య వేలి కొన వరకు ఉన్న పొడవు) అనేది పూల దండలు లేదా మాలల పొడవును కొలవడానికి పూల వ్యాపారులు ఉపయోగించే ఒక సాధారణ అప్రమాణిక కొలత యూనిట్. ఇతర ఎంపికలు ఈ నిర్దిష్ట ప్రయోజనం కోసం తక్కువ ఆచరణాత్మకమైనవి లేదా సంప్రదాయబద్ధమైనవి."
  },
  {
    "id": 336,
    "question": "A medium sized tomato contains the following amounts of proteins and fibre respectively (TSTET 02 June 2024)\nఒక మధ్యస్థ పరిమాణ టమాటాలో వరుసగా క్రింది పరిమాణంలో ప్రోటీన్లు మరియు పీచుపదార్థం ఉంటాయి",
    "options": [
      "1.8 gms & 3 gms\n1.8 గ్రాములు & 3 గ్రాములు",
      "4.3 gms & 1.5 gms\n4.3 గ్రాములు & 1.5 గ్రాములు",
      "1.08 gms & 1.5 gms\n1.08 గ్రాములు & 1.5 గ్రాములు",
      "2 gms & 5 gms\n2 గ్రాములు & 5 గ్రాములు"
    ],
    "correctAnswer": 2,
    "explanation": "ఒక మధ్యస్థ పరిమాణ టమాటా (సుమారు 123 గ్రాములు) యొక్క పోషక విలువల్లో సుమారు 1.08 గ్రాముల ప్రోటీన్ మరియు 1.5 గ్రాముల పీచుపదార్థం ఉంటాయి. ఇతర విలువలు ఈ పరిమాణంలోని టమాటాకు ఖచ్చితమైనవి కావు."
  },
  {
    "id": 337,
    "question": "The excess growth of this plant in waters reduces the amount of dissolved oxygen leading to the death of the water organisms, animals and plants (TSTET 02 June 2024)\nనీటిలో ఈ మొక్క అధికంగా పెరగడం వల్ల కరిగిన ఆక్సిజన్ పరిమాణం తగ్గి, నీటి జీవులు, జంతువులు మరియు మొక్కల మరణానికి దారితీస్తుంది",
    "options": [
      "Algae\nశైవలాలు",
      "Nelumbo/Lotus\nనెలుంబో/తామర",
      "Eichhornia\nఐకోర్నియా",
      "Azolla\nఅజొల్లా"
    ],
    "correctAnswer": 2,
    "explanation": "ఐకోర్నియా, సాధారణంగా గుర్రపు డెక్కగా పిలువబడుతుంది, ఇది ఒక ప్రసిద్ధ ఆక్రమణశీల జల కలుపు మొక్క. ఇది వేగంగా పెరిగి, నీటి ఉపరితలంపై దట్టమైన పొరలను ఏర్పరుస్తుంది, ఇది సూర్యరశ్మిని అడ్డుకుంటుంది మరియు గాలి నుండి నీటికి ఆక్సిజన్ బదిలీని నిరోధిస్తుంది. మొక్కలు చనిపోయినప్పుడు, వాటి కుళ్ళిపోవడం పెద్ద మొత్తంలో కరిగిన ఆక్సిజన్‌ను వినియోగించుకుంటుంది, ఇది చేపలు మరియు ఇతర జలచరాల మరణానికి దారితీసే హైపోక్సిక్ పరిస్థితులకు కారణమవుతుంది."
  },
  {
    "id": 338,
    "question": "Identify the non-luminous object from the following (TSTET 02 June 2024)\nకింది వాటిలో స్వయం ప్రకాశకం కాని వస్తువును గుర్తించండి",
    "options": [
      "Sun\nసూర్యుడు",
      "Earth\nభూమి",
      "Star\nనక్షత్రం",
      "Glow worm\nమిణుగురు పురుగు"
    ],
    "correctAnswer": 1,
    "explanation": "స్వయం ప్రకాశకం కాని వస్తువు అంటే తనంతట తానుగా కాంతిని ఉత్పత్తి చేయనిది. భూమి సూర్యుని నుండి వచ్చే కాంతిని పరావర్తనం చేయడం ద్వారా ప్రకాశిస్తుంది. దీనికి విరుద్ధంగా, సూర్యుడు మరియు ఇతర నక్షత్రాలు కేంద్రక సంలీనం ద్వారా కాంతిని ఉత్పత్తి చేస్తాయి కాబట్టి అవి స్వయం ప్రకాశకాలు, మరియు మిణుగురు పురుగు జీవకాంతిని వెదజల్లుతుంది, ఇది ఒక రసాయన ప్రతిచర్య ద్వారా కాంతిని సృష్టిస్తుంది."
  },
  {
    "id": 339,
    "question": "The source book that keeps a record of all the endangered animal and plant species (TSTET 02 June 2024)\nఅంతరించిపోతున్న అన్ని జంతు మరియు వృక్ష జాతుల రికార్డును ఉంచే మూల గ్రంథం",
    "options": [
      "Red Data Book\nరెడ్ డేటా బుక్",
      "Yellow pages\nయెల్లో పేజెస్",
      "Yellow Data Book\nయెల్లో డేటా బుక్",
      "Green Data Book\nగ్రీన్ డేటా బుక్"
    ],
    "correctAnswer": 0,
    "explanation": "రెడ్ డేటా బుక్ అనేది ఒక నిర్దిష్ట ప్రాంతంలోని అంతరించిపోతున్న మరియు అరుదైన జాతుల మొక్కలు, జంతువులు మరియు శిలీంధ్రాలను నమోదు చేయడానికి సృష్టించబడిన ఒక బహిరంగ పత్రం. అంతరించిపోయే అధిక ప్రమాదం ఉన్న జాతులను హైలైట్ చేయడానికి ఇది ఇంటర్నేషనల్ యూనియన్ ఫర్ కన్జర్వేషన్ ఆఫ్ నేచర్ (IUCN) చే నిర్వహించబడుతుంది."
  },
  {
    "id": 340,
    "question": "Lime water is (TSTET 02 June 2024)\nసున్నపు నీరు అంటే",
    "options": [
      "Sodium Hydroxide\nసోడియం హైడ్రాక్సైడ్",
      "Calcium Hydroxide\nకాల్షియం హైడ్రాక్సైడ్",
      "Ammonium Chloride\nఅమ్మోనియం క్లోరైడ్",
      "Magnesium sulphide\nమెగ్నీషియం సల్ఫైడ్"
    ],
    "correctAnswer": 1,
    "explanation": "సున్నపు నీరు అనేది కాల్షియం హైడ్రాక్సైడ్ యొక్క సంతృప్త జల ద్రావణానికి సాధారణ పేరు, దీని రసాయన ఫార్ములా $Ca(OH)_2$. కార్బన్ డయాక్సైడ్‌ను గుర్తించడానికి ఇది ఒక సాంప్రదాయిక రసాయన పరీక్షలో ఉపయోగించబడుతుంది, ఎందుకంటే కాల్షియం కార్బోనేట్ అవక్షేపం ఏర్పడటం వల్ల దాని గుండా $CO_2$ ను పంపినప్పుడు అది పాలలా తెల్లగా మారుతుంది."
  },
  {
    "id": 341,
    "question": "Carbon dioxide was called 'fixed air' by this scientist (TSTET 02 June 2024)\nకార్బన్ డయాక్సైడ్‌ను ఈ శాస్త్రవేత్త 'ఫిక్స్‌డ్ ఎయిర్' అని పిలిచారు",
    "options": [
      "J.B. Pristley\nజె.బి. ప్రిస్ట్‌లీ",
      "Von Helmont\nవాన్ హెల్మాంట్",
      "Lavoisier\nలావోయిజర్",
      "Joseph Black\nజోసెఫ్ బ్లాక్"
    ],
    "correctAnswer": 3,
    "explanation": "1750లలో, స్కాటిష్ రసాయన శాస్త్రవేత్త జోసెఫ్ బ్లాక్ కార్బన్ డయాక్సైడ్ యొక్క లక్షణాలను అధ్యయనం చేశారు. కొన్ని ఖనిజాలను వేడి చేయడం ద్వారా ఈ వాయువును ఉత్పత్తి చేయవచ్చని మరియు ఇది ఉచ్ఛ్వాసంలో కూడా ఉంటుందని ఆయన ప్రదర్శించారు. దీనిని ఒక ఘన రూపంలోకి (కాల్షియం కార్బోనేట్ వంటిది) 'స్థిరీకరించవచ్చు' కాబట్టి, దానికి 'ఫిక్స్‌డ్ ఎయిర్' అని పేరు పెట్టారు."
  },
  {
    "id": 342,
    "question": "Our Wrist is made up of several small bones called (TSTET 02 June 2024)\nమన మణికట్టు అనేక చిన్న ఎముకలతో తయారైంది, వాటిని ఇలా పిలుస్తారు",
    "options": [
      "Knuckles\nవేలి కణుపులు",
      "Carpals\nకార్పల్స్",
      "Chest of bones\nఎముకల ఛాతీ",
      "hinges\nమడతబందులు"
    ],
    "correctAnswer": 1,
    "explanation": "మణికట్టు అనేది కార్పల్స్ అని పిలువబడే ఎనిమిది చిన్న, క్రమరహిత ఆకారంలో ఉన్న ఎముకలతో కూడిన ఒక సంక్లిష్టమైన కీలు. ఈ ఎముకలు ముంజేయిని (రేడియస్ మరియు ఉల్నా) చేతితో (మెటాకార్పల్స్) కలుపుతాయి మరియు విస్తృతమైన కదలికలకు అనుమతిస్తాయి."
  },
  {
    "id": 343,
    "question": "Identify the factor that does not affect the temperature and the climate among the following (TSTET 02 June 2024)\nకింది వాటిలో ఉష్ణోగ్రత మరియు వాతావరణాన్ని ప్రభావితం చేయని కారకాన్ని గుర్తించండి",
    "options": [
      "Distance from the equator\nభూమధ్యరేఖ నుండి దూరం",
      "Altitude of the place from the sea level\nసముద్ర మట్టం నుండి ప్రదేశం యొక్క ఎత్తు",
      "Land-water relationship\nభూమి-నీటి సంబంధం",
      "Longitudinal variations\nరేఖాంశ వైవిధ్యాలు"
    ],
    "correctAnswer": 3,
    "explanation": "వాతావరణం అక్షాంశం (భూమధ్యరేఖ నుండి దూరం), ఎత్తు, పెద్ద నీటి వనరులకు సమీపంలో ఉండటం, మరియు సముద్ర ప్రవాహాలు వంటి కారకాలచే ప్రభావితమవుతుంది. భూమిపై తూర్పు-పడమర స్థానాన్ని కొలిచే రేఖాంశం, ప్రధానంగా సమయ మండలాలను నిర్ణయిస్తుంది మరియు ఒక ప్రాంతం యొక్క వాతావరణం లేదా సగటు ఉష్ణోగ్రతపై ప్రత్యక్ష, క్రమబద్ధమైన ప్రభావాన్ని కలిగి ఉండదు."
  },
  {
    "id": 344,
    "question": "The Colour code 'Dark Grey' is used to represent this land cover and land use in maps (TSTET 02 June 2024)\nపటాలలో ఈ భూ విస్తరణ మరియు భూ వినియోగాన్ని సూచించడానికి 'ముదురు బూడిద రంగు' కోడ్ ఉపయోగించబడుతుంది",
    "options": [
      "Land useful for agriculture\nవ్యవసాయానికి ఉపయోగపడే భూమి",
      "Plateaus and swamps\nపీఠభూములు మరియు చిత్తడి నేలలు",
      "Mountains\nపర్వతాలు",
      "Cropped Area\nపంట ప్రాంతం"
    ],
    "correctAnswer": 2,
    "explanation": "స్థలాకృతి మరియు భూ వినియోగ పటాలలో, వివిధ లక్షణాలను సూచించడానికి వేర్వేరు రంగులు ఉపయోగించబడతాయి. నియమాలు కొద్దిగా మారినప్పటికీ, బూడిద మరియు గోధుమ రంగు ఛాయలు సాధారణంగా పర్వత, రాతి లేదా బంజరు భూమిని వర్ణించడానికి ఉపయోగించబడతాయి. ఆకుపచ్చ సాధారణంగా అడవులను, పసుపు వ్యవసాయాన్ని, మరియు నీలం నీటిని సూచిస్తుంది."
  },
  {
    "id": 345,
    "question": "Among the following, people considered this sea as 'Middle of the World' (TSTET 02 June 2024)\nకింది వాటిలో, ప్రజలు ఈ సముద్రాన్ని 'ప్రపంచం మధ్యలో' ఉన్నట్లుగా భావించారు",
    "options": [
      "The Mediterranean Sea\nమధ్యధరా సముద్రం",
      "The Caspian Sea\nకాస్పియన్ సముద్రం",
      "The Black Sea\nనల్ల సముద్రం",
      "The Adriatic Sea\nఏడ్రియాటిక్ సముద్రం"
    ],
    "correctAnswer": 0,
    "explanation": "'మధ్యధరా' అనే పేరు లాటిన్ 'మీడియస్' (మధ్య) మరియు 'టెర్రా' (భూమి) నుండి వచ్చింది, దీని అర్థం 'భూమి మధ్యలో'. దాని తీరాల చుట్టూ వర్థిల్లిన రోమన్లు మరియు గ్రీకులు వంటి ప్రాచీన నాగరికతలు, దీనిని తమకు తెలిసిన ప్రపంచానికి కేంద్రంగా భావించాయి."
  },
  {
    "id": 346,
    "question": "In 1323, Sultan Mohammad Bin Tughluq defeated this Kakatiya ruler and put an end to the rule of Kakatiya dynasty (TSTET 02 June 2024)\n1323లో, సుల్తాన్ మహమ్మద్ బిన్ తుగ్లక్ ఈ కాకతీయ పాలకుడిని ఓడించి కాకతీయ రాజవంశం యొక్క పాలనకు ముగింపు పలికారు",
    "options": [
      "Rudramadevi\nరుద్రమదేవి",
      "Prathaparudra II\nరెండవ ప్రతాపరుద్రుడు",
      "Ganapathideva\nగణపతిదేవుడు",
      "Prola II\nరెండవ ప్రోలుడు"
    ],
    "correctAnswer": 1,
    "explanation": "కాకతీయ రాజవంశం యొక్క పాలన దాని చివరి పాలకుడు, రెండవ ప్రతాపరుద్రుని ఓటమి మరియు బందీతో ముగిసింది. క్రీ.శ. 1323లో, ఢిల్లీ సుల్తానేట్ సైన్యాలు, ఉలుఘ్ ఖాన్ (తరువాత సుల్తాన్ మహమ్మద్ బిన్ తుగ్లక్ అయ్యాడు) నాయకత్వంలో రాజధాని ఓరుగల్లును విజయవంతంగా ముట్టడించాయి, ఇది రాజ్యం యొక్క విలీనానికి దారితీసింది."
  },
  {
    "id": 347,
    "question": "These leaders of the Indian National Congress adopted the Policy of Pray, Petition and Protest (TSTET 02 June 2024)\nభారత జాతీయ కాంగ్రెస్ యొక్క ఈ నాయకులు ప్రార్థన, విజ్ఞప్తి మరియు నిరసన విధానాన్ని అనుసరించారు",
    "options": [
      "The Gandhians\nగాంధేయవాదులు",
      "The Extremists\nఅతివాదులు",
      "The Moderates\nమితవాదులు",
      "The members of the Constituent Assembly\nరాజ్యాంగ సభ సభ్యులు"
    ],
    "correctAnswer": 2,
    "explanation": "భారత జాతీయ కాంగ్రెస్ యొక్క ప్రారంభ దశ (1885-1905) మితవాదులు అని పిలువబడే నాయకులచే నడపబడింది. వారి రాజకీయ వ్యూహం రాజ్యాంగబద్ధమైన ఆందోళన మరియు బ్రిటిష్ ప్రభుత్వం యొక్క న్యాయ భావనకు విజ్ఞప్తి చేయడంపై ఆధారపడి ఉంది. విజ్ఞప్తులు సమర్పించడం, విజ్ఞాపనలు చేయడం (ప్రార్థనలు), మరియు సమావేశాలు నిర్వహించడం వంటి ఈ విధానాన్ని తరచుగా '3 P'లు అని అంటారు."
  },
  {
    "id": 348,
    "question": "The foreign writers and travellers who visited the Vijayanagara Empire were (TSTET 02 June 2024)\nవిజయనగర సామ్రాజ్యాన్ని సందర్శించిన విదేశీ రచయితలు మరియు ప్రయాణికులు",
    "options": [
      "Marcopolo, Nicolo Conte, Abdul Razak and Domingo Paes\nమార్కోపోలో, నికోలో కాంటే, అబ్దుల్ రజాక్ మరియు డొమింగో పేస్",
      "Marcopolo, Nicolo Conte, Domingo Paes and Nuniz\nమార్కోపోలో, నికోలో కాంటే, డొమింగో పేస్ మరియు నూనిజ్",
      "Nicolo Conte, Domingo Paes, Nuniz and Abdul Razak\nనికోలో కాంటే, డొమింగో పేస్, నూనిజ్ మరియు అబ్దుల్ రజాక్",
      "Nicolo Conte, Nuniz, Marco Polo and Vasco-da-gama\nనికోలో కాంటే, నూనిజ్, మార్కో పోలో మరియు వాస్కో-డ-గామా"
    ],
    "correctAnswer": 2,
    "explanation": "నికోలో డి' కాంటి (వెనిస్ నుండి), అబ్దుర్ రజాక్ (పర్షియా నుండి), డొమింగో పేస్ (పోర్చుగల్ నుండి), మరియు ఫెర్నావో నూనెస్ (పోర్చుగల్ నుండి) అందరూ వేర్వేరు సమయాల్లో విజయనగర సామ్రాజ్యాన్ని సందర్శించి, దాని సంపద, పరిపాలన మరియు సమాజం గురించి వివరణాత్మక కథనాలను అందించిన ప్రసిద్ధ ప్రయాణికులు. మార్కో పోలో మరియు వాస్కో-డ-గామా ప్రధానంగా విజయనగర రాజధానిని సందర్శించడంతో సంబంధం కలిగి లేరు."
  },
  {
    "id": 349,
    "question": "One of the following is NOT the correct statement regarding the Gram Panchayat (TSTET 02 June 2024)\nకింది వాటిలో గ్రామ పంచాయతీకి సంబంధించి సరైన వాక్యం కానిది ఒకటి",
    "options": [
      "A panchayat will have at least five ward members and may have as many as 21 ward members\nఒక పంచాయతీలో కనీసం ఐదుగురు వార్డు సభ్యులు ఉంటారు మరియు గరిష్టంగా 21 మంది వార్డు సభ్యులు ఉండవచ్చు",
      "Any person who is 21 years or above can contest the election\n21 సంవత్సరాలు లేదా అంతకంటే ఎక్కువ వయస్సు ఉన్న ఏ వ్యక్తి అయినా ఎన్నికలలో పోటీ చేయవచ్చు",
      "The Parliament reserved 50% seats in local bodies for women\nస్థానిక సంస్థలలో మహిళలకు పార్లమెంట్ 50% సీట్లను రిజర్వ్ చేసింది",
      "There is no reservation policy for SCs, STs and BCs in local bodies\nస్థానిక సంస్థలలో ఎస్సీలు, ఎస్టీలు మరియు బీసీలకు రిజర్వేషన్ విధానం లేదు"
    ],
    "correctAnswer": 3,
    "explanation": "ఈ వాక్యం తప్పు. 1992 నాటి 73వ రాజ్యాంగ సవరణ చట్టం, ప్రతి పంచాయతీలో షెడ్యూల్డ్ కులాలు (ఎస్సీలు) మరియు షెడ్యూల్డ్ తెగల (ఎస్టీలు) జనాభా నిష్పత్తికి అనుగుణంగా సీట్లను రిజర్వ్ చేయడాన్ని తప్పనిసరి చేస్తుంది. వెనుకబడిన తరగతుల (బీసీలు) కోసం సీట్ల రిజర్వేషన్ కోసం నిబంధనలు రూపొందించడానికి రాష్ట్ర శాసనసభలకు కూడా ఇది అధికారం ఇస్తుంది."
  },
  {
    "id": 350,
    "question": "As per this Fundamental Right, the Constitution in no uncertain terms abolishes 'untouchability' and its practice in any form (TSTET 02 June 2024)\nఈ ప్రాథమిక హక్కు ప్రకారం, రాజ్యాంగం నిస్సందేహంగా 'అంటరానితనం' మరియు దాని ఆచరణను ఏ రూపంలోనైనా రద్దు చేస్తుంది",
    "options": [
      "Right to Freedom\nస్వేచ్ఛా హక్కు",
      "Right to Equality\nసమానత్వపు హక్కు",
      "Right to Constitutional Remedies\nరాజ్యాంగ పరిహార హక్కు",
      "Right against Exploitation\nదోపిడీకి వ్యతిరేకంగా హక్కు"
    ],
    "correctAnswer": 1,
    "explanation": "భారత రాజ్యాంగంలోని ఆర్టికల్ 17, ప్రాథమిక సమానత్వపు హక్కు (ఆర్టికల్స్ 14-18)లో భాగంగా ఉంది, ఇది 'అంటరానితనాన్ని' స్పష్టంగా రద్దు చేస్తుంది మరియు దాని ఆచరణను ఏ రూపంలోనైనా నిషేధిస్తుంది. అంటరానితనం నుండి ఉత్పన్నమయ్యే ఏదైనా వైకల్యాన్ని అమలు చేయడం చట్టం ప్రకారం శిక్షార్హమైన నేరంగా చేస్తుంది."
  },
  {
    "id": 351,
    "question": "The court deals with the criminal cases at district level (TSTET 02 June 2024)\nజిల్లా స్థాయిలో క్రిమినల్ కేసులను విచారించే కోర్టు",
    "options": [
      "District Court\nజిల్లా కోర్టు",
      "Session Court\nసెషన్స్ కోర్టు",
      "Asst. Sessions Judge Court\nసహాయ సెషన్స్ జడ్జి కోర్టు",
      "High Court\nహైకోర్టు"
    ],
    "correctAnswer": 1,
    "explanation": "భారత న్యాయ వ్యవస్థలో, జిల్లా స్థాయిలో, క్రిమినల్ కేసులకు అత్యున్నత న్యాయస్థానం సెషన్స్ కోర్టు. జిల్లా కోర్టు ప్రధానంగా సివిల్ కేసులను విచారిస్తుంది. తరచుగా, ఒకే న్యాయ అధికారి జిల్లా జడ్జిగా (సివిల్ విషయాల కోసం) మరియు సెషన్స్ జడ్జిగా (క్రిమినల్ విషయాల కోసం) అధ్యక్షత వహిస్తారు."
  },
  {
    "id": 352,
    "question": "One of the following is NOT the correct statement regarding the activities of Mandal Parishad Office (TSTET 02 June 2024)\nకింది వాటిలో మండల పరిషత్ కార్యాలయం యొక్క కార్యకలాపాలకు సంబంధించి సరైన వాక్యం కానిది ఒకటి",
    "options": [
      "It receives complaints from the people and responds immediately\nఇది ప్రజల నుండి ఫిర్యాదులను స్వీకరించి తక్షణమే స్పందిస్తుంది",
      "It undertakes Construction and repairing of wells\nఇది బావుల నిర్మాణం మరియు మరమ్మతులు చేపడుతుంది",
      "It provides health care facilities and Sanitation\nఇది ఆరోగ్య సంరక్షణ సౌకర్యాలు మరియు పారిశుధ్యాన్ని అందిస్తుంది",
      "It provides primary education to the children\nఇది పిల్లలకు ప్రాథమిక విద్యను అందిస్తుంది"
    ],
    "correctAnswer": 0,
    "explanation": "మండల పరిషత్ అనేది అనేక గ్రామాలను కవర్ చేసే అభివృద్ధి కార్యక్రమాలను ప్రణాళిక మరియు అమలు చేయడానికి బాధ్యత వహించే ఒక మధ్యస్థ-స్థాయి పంచాయతీ సంస్థ. ఇది పారిశుధ్యం మరియు ప్రాథమిక విద్య వంటి విధులను పర్యవేక్షిస్తున్నప్పటికీ, రోజువారీ వ్యక్తిగత ఫిర్యాదులను స్వీకరించడానికి మరియు పరిష్కరించడానికి ప్రాథమిక సంస్థ గ్రామ స్థాయిలో గ్రామ పంచాయతీ. మండల కార్యాలయం అన్ని ఫిర్యాదులను స్వీకరించి తక్షణమే స్పందిస్తుందని చెప్పడం తప్పు."
  },
  {
    "id": 353,
    "question": "In 1906, Bhagya Reddy Varma started 'Jagan Mitra mandali' to (TSTET 02 June 2024)\n1906లో, భాగ్యరెడ్డి వర్మ 'జగన్ మిత్ర మండలి'ని దేనికోసం ప్రారంభించారు",
    "options": [
      "Establish schools and colleges and educate dalits\nపాఠశాలలు మరియు కళాశాలలను స్థాపించి దళితులను విద్యావంతులను చేయడానికి",
      "Unite dalits and make them to fight for freedom\nదళితులను ఏకం చేసి స్వాతంత్ర్యం కోసం పోరాడేలా చేయడానికి",
      "Establish schools in every village to empower the girl child\nబాలికలను సాధికారపరచడానికి ప్రతి గ్రామంలో పాఠశాలలను స్థాపించడానికి",
      "Spread awareness among dalits by using popular folk arts\nప్రసిద్ధ జానపద కళలను ఉపయోగించి దళితులలో అవగాహనను వ్యాప్తి చేయడానికి"
    ],
    "correctAnswer": 3,
    "explanation": "హైదరాబాద్ రాష్ట్రంలో ఒక ప్రముఖ సంఘ సంస్కర్త అయిన భాగ్యరెడ్డి వర్మ, దళిత సమాజం యొక్క ఉన్నతి కోసం పనిచేయడానికి జగన్ మిత్ర మండలిని స్థాపించారు. ఈ సంస్థ ఉపయోగించిన ఒక ముఖ్యమైన పద్ధతి, 'హరికథలు' మరియు 'బుర్రకథలు' వంటి సాంప్రదాయ మరియు ప్రసిద్ధ జానపద కళారూపాలను ఉపయోగించి సామాజిక అవగాహన మరియు సంస్కరణవాద సందేశాలను వ్యాప్తి చేయడం, ఇవి ప్రజలకు సులభంగా అర్థమయ్యేవి."
  },
  {
    "id": 354,
    "question": "One of the following is NOT the Source of Income for Gram Panchayats (TSTET 02 June 2024)\nకింది వాటిలో గ్రామ పంచాయతీలకు ఆదాయ వనరు కానిది ఒకటి",
    "options": [
      "The various taxes levied by the Gram panchayats\nగ్రామ పంచాయతీలు విధించే వివిధ పన్నులు",
      "The Grants from the state and central Government\nరాష్ట్ర మరియు కేంద్ర ప్రభుత్వం నుండి గ్రాంట్లు",
      "Funds made available Under the MGNREGA\nMGNREGA కింద అందుబాటులో ఉన్న నిధులు",
      "The village panchayats are authorised to collect Profession tax from the employees\nఉద్యోగుల నుండి వృత్తి పన్ను వసూలు చేయడానికి గ్రామ పంచాయతీలకు అధికారం ఉంది"
    ],
    "correctAnswer": 3,
    "explanation": "వృత్తి పన్ను అనేది రాష్ట్ర ప్రభుత్వం చేత వృత్తులు, వర్తకాలు మరియు ఉపాధిపై విధించబడే పన్ను, గ్రామ పంచాయతీ చేత కాదు. గ్రామ పంచాయతీలు స్థానిక పన్నులు (ఇంటి పన్ను, నీటి పన్ను వంటివి), రాష్ట్ర మరియు కేంద్ర ప్రభుత్వాల నుండి గ్రాంట్లు, మరియు MGNREGA వంటి నిర్దిష్ట పథకాల నుండి నిధుల నుండి తమ ఆదాయాన్ని పొందుతాయి, కానీ వారికి వృత్తి పన్ను విధించడానికి మరియు వసూలు చేయడానికి అధికారం లేదు."
  },
  {
    "id": 355,
    "question": "A teacher often asks probing questions while teaching environmental studies in class V. By doing so, he aims to improve these (TSTET 02 June 2024)\nVవ తరగతిలో పర్యావరణ అధ్యయనాలు బోధిస్తున్నప్పుడు ఒక ఉపాధ్యాయుడు తరచుగా శోధనాత్మక ప్రశ్నలు అడుగుతాడు. ఇలా చేయడం ద్వారా, అతను వీటిని మెరుగుపరచాలని లక్ష్యంగా పెట్టుకున్నాడు",
    "options": [
      "observation skills\nపరిశీలన నైపుణ్యాలు",
      "emotional skills\nభావోద్వేగ నైపుణ్యాలు",
      "listening skills\nవినే నైపుణ్యాలు",
      "thinking skills\nఆలోచనా నైపుణ్యాలు"
    ],
    "correctAnswer": 3,
    "explanation": "శోధనాత్మక ప్రశ్నలు విద్యార్థులను ఉపరితల సమాధానాలకు మించి లోతుగా ఆలోచించమని ప్రోత్సహించడానికి రూపొందించబడ్డాయి. అవి విశ్లేషణ, సంశ్లేషణ, సమర్థన మరియు ప్రతిబింబాన్ని ప్రేరేపిస్తాయి. అటువంటి ప్రశ్నలను అడగడం ద్వారా, ఉపాధ్యాయుడు విద్యార్థుల ఉన్నత-స్థాయి ఆలోచనా నైపుణ్యాల అభివృద్ధిని నేరుగా లక్ష్యంగా చేసుకుంటాడు."
  },
  {
    "id": 356,
    "question": "Which one of the following represents one of the main objectives of teaching EVS at primary level? (TSTET 02 June 2024)\nకింది వాటిలో ఏది ప్రాథమిక స్థాయిలో EVS బోధన యొక్క ప్రధాన లక్ష్యాలలో ఒకటిగా సూచిస్తుంది?",
    "options": [
      "To inform the learners about the books they should read to expand their knowledge\nవారి జ్ఞానాన్ని విస్తరించుకోవడానికి వారు చదవాల్సిన పుస్తకాల గురించి అభ్యాసకులకు తెలియజేయడం",
      "To create and nurture curiosity in children about the world around them\nపిల్లలలో వారి చుట్టూ ఉన్న ప్రపంచం గురించి ఉత్సుకతను సృష్టించడం మరియు పెంపొందించడం",
      "To make learners aware of technical terms and definitions\nఅభ్యాసకులకు సాంకేతిక పదాలు మరియు నిర్వచనాల గురించి అవగాహన కల్పించడం",
      "To assess technical terms related to EVS\nEVS కి సంబంధించిన సాంకేతిక పదాలను అంచనా వేయడం"
    ],
    "correctAnswer": 1,
    "explanation": "ప్రాథమిక స్థాయిలో పర్యావరణ అధ్యయనాల (EVS) యొక్క ప్రధాన లక్ష్యం పిల్లలను వారి తక్షణ సహజ, సామాజిక మరియు సాంస్కృతిక వాతావరణానికి అనుసంధానించడం. ఇది కేవలం సాంకేతిక పదాలు లేదా నిర్వచనాలను గుర్తుంచుకోవడంపై దృష్టి పెట్టకుండా, పిల్లలు తమ చుట్టూ ఉన్న ప్రపంచాన్ని అర్థం చేసుకోవడానికి సహాయపడే ఉత్సుకత, అన్వేషణ మరియు పరిశీలన నైపుణ్యాలను పెంపొందించాలని లక్ష్యంగా పెట్టుకుంది."
  },
  {
    "id": 357,
    "question": "In class IV a student is able to imagine the results based on the familiar information. This learning outcome belongs to which of the following academic standard? (TSTET 02 June 2024)\nIVవ తరగతిలో ఒక విద్యార్థి తెలిసిన సమాచారం ఆధారంగా ఫలితాలను ఊహించగలుగుతున్నాడు. ఈ అభ్యాసన ఫలితం క్రింది ఏ విద్యా ప్రమాణానికి చెందినది?",
    "options": [
      "Experiments - Field observations\nప్రయోగాలు - క్షేత్ర పరిశీలనలు",
      "Conceptual understanding\nభావనాత్మక అవగాహన",
      "Questioning and Formulating Hypotheses\nప్రశ్నించడం మరియు పరికల్పనలను రూపొందించడం",
      "Information skills / projects\nసమాచార నైపుణ్యాలు / ప్రాజెక్టులు"
    ],
    "correctAnswer": 2,
    "explanation": "ఒక పరికల్పనను రూపొందించడం అనేది ముందుగా ఉన్న జ్ఞానం లేదా తెలిసిన సమాచారం ఆధారంగా ఒక ఫలితం గురించి అంచనా వేయడం లేదా విద్యావంతులైన ఊహ చేయడం. సంభావ్య ఫలితాలను ఊహించే చర్య ('ఏమి జరుగుతుంది...?') ఈ శాస్త్రీయ ప్రక్రియ యొక్క ప్రాథమిక భాగం, ఇది ప్రశ్నించడం మరియు పరికల్పనలను రూపొందించడం అనే విద్యా ప్రమాణం కిందకు వస్తుంది."
  },
  {
    "id": 358,
    "question": "Match the following related to academic standards and learning indicators.\nAcademic standard\n A) Conceptual understanding\n B) Questioning and formulation of hypotheses\n C) Information skills and project works\nLearning indicator\n i) Collection of information and writing in tables\n ii) making comparisons on objects and phenomena\n iii) Imagination of the outcomes based on known information\nChoose the correct answer (TSTET 02 June 2024)\nవిద్యా ప్రమాణాలు మరియు అభ్యాసన సూచికలకు సంబంధించిన కింది వాటిని జతపరచండి.\nవిద్యా ప్రమాణం\n A) భావనాత్మక అవగాహన\n B) ప్రశ్నించడం మరియు పరికల్పనల రూపకల్పన\n C) సమాచార నైపుణ్యాలు మరియు ప్రాజెక్ట్ పనులు\nఅభ్యాసన సూచిక\n i) సమాచార సేకరణ మరియు పట్టికలలో రాయడం\n ii) వస్తువులు మరియు దృగ్విషయాలపై పోలికలు చేయడం\n iii) తెలిసిన సమాచారం ఆధారంగా ఫలితాల ఊహ\nసరైన సమాధానాన్ని ఎంచుకోండి",
    "options": [
      "A-ii, B-iii, C-i",
      "A-iii, B-i, C-ii",
      "A-i, B-ii, C-iii",
      "A-ii, B-i, C-iii"
    ],
    "correctAnswer": 0,
    "explanation": "సరైన జతపరుచుట:\nA) వస్తువులు మరియు దృగ్విషయాలపై పోలికలు చేయగల సామర్థ్యం ద్వారా భావనాత్మక అవగాహన ప్రదర్శించబడుతుంది (ii).\nB) ప్రశ్నించడం మరియు పరికల్పనల రూపకల్పన అనేది తెలిసిన సమాచారం ఆధారంగా ఫలితాల ఊహను కలిగి ఉంటుంది (iii).\nC) సమాచార నైపుణ్యాలు మరియు ప్రాజెక్ట్ పనులలో సమాచార సేకరణ మరియు దానిని పట్టికలలో రాయడం వంటి ఆచరణాత్మక పనులు ఉంటాయి (i)."
  },
  {
    "id": 359,
    "question": "Identify the INCORRECT statement related to the learning process in EVS. (TSTET 02 June 2024)\nEVSలో అభ్యాసన ప్రక్రియకు సంబంధించిన తప్పు వాక్యాన్ని గుర్తించండి.",
    "options": [
      "Teacher has to adopt multi dimensional approach\nఉపాధ్యాయుడు బహుమితీయ విధానాన్ని అనుసరించాలి",
      "Learning occurs through integration\nఏకీకరణ ద్వారా అభ్యాసనం జరుగుతుంది",
      "Children explore their world in a holistic way\nపిల్లలు తమ ప్రపంచాన్ని సంపూర్ణంగా అన్వేషిస్తారు",
      "Learning is not related to socio-cultural context\nఅభ్యాసనం సామాజిక-సాంస్కృతిక సందర్భానికి సంబంధించినది కాదు"
    ],
    "correctAnswer": 3,
    "explanation": "ఈ వాక్యం తప్పు. ఆధునిక బోధనా శాస్త్రం, ముఖ్యంగా EVSలో, అభ్యాసనం పిల్లల సామాజిక-సాంస్కృతిక సందర్భంతో లోతుగా ముడిపడి ఉందని నొక్కి చెబుతుంది. పిల్లలు తమ కుటుంబం, సంఘం మరియు సాంస్కృతిక వాతావరణంతో వారి పరస్పర చర్యల ఆధారంగా జ్ఞానాన్ని నిర్మించుకుంటారు. EVS పాఠ్యపుస్తక జ్ఞానం మరియు పిల్లల నిజ జీవిత అనుభవాల మధ్య అంతరాన్ని పూడ్చాలని లక్ష్యంగా పెట్టుకుంది."
  },
  {
    "id": 360,
    "question": "This is an example of print rich environment for EVS learning. (TSTET 02 June 2024)\nఇది EVS అభ్యాసనం కోసం ముద్రణా సమృద్ధ వాతావరణానికి ఒక ఉదాహరణ.",
    "options": [
      "Charts of alphabet\nఅక్షరమాల చార్టులు",
      "Rhyming charts\nప్రాసల చార్టులు",
      "Charts of numbers\nసంఖ్యల చార్టులు",
      "Story books of birds & animals\nపక్షులు & జంతువుల కథల పుస్తకాలు"
    ],
    "correctAnswer": 3,
    "explanation": "EVS వంటి ఒక నిర్దిష్ట సబ్జెక్ట్ కోసం 'ముద్రణా-సమృద్ధ వాతావరణం' అంటే విద్యార్థులను ఆ సబ్జెక్ట్ కంటెంట్‌కు సంబంధించిన ముద్రిత సామగ్రితో చుట్టుముట్టడం. అక్షరమాల మరియు సంఖ్యల చార్టులు సాధారణ అక్షరాస్యతకు దోహదపడినప్పటికీ, పక్షులు మరియు జంతువుల గురించిన కథల పుస్తకాలు పర్యావరణ అధ్యయనాల యొక్క ఇతివృత్తాలకు నేరుగా సంబంధించినవి, సందర్భం, పదజాలం అందిస్తాయి మరియు సహజ ప్రపంచంపై ఆసక్తిని రేకెత్తిస్తాయి."
  },
  {
    "id": 361,
    "question": "These bacteria decompose plant and animal wastes and turn it into fertilizers. (TSTET 02 June 2024)\nఈ బాక్టీరియా మొక్కల మరియు జంతు వ్యర్థాలను కుళ్ళిపోయేలా చేసి ఎరువులుగా మారుస్తుంది.",
    "options": [
      "Bacillus\nబాసిల్లస్",
      "Entero bacter\nఎంటెరో బాక్టర్",
      "Azato bacter & Nitro bacter\nఅజటో బాక్టర్ & నైట్రో బాక్టర్",
      "Campylo bacter\nక్యాంపిలో బాక్టర్"
    ],
    "correctAnswer": 0,
    "explanation": "బాసిల్లస్ జాతులు బాగా తెలిసిన విచ్ఛిన్నకారులు. చనిపోయిన మొక్కలు మరియు జంతువులు వంటి కర్బన పదార్థాల విచ్ఛిన్నంలో ఇవి కీలక పాత్ర పోషిస్తాయి, వాటిని నేలను సుసంపన్నం చేసే సరళమైన పదార్థాలుగా విడగొట్టి, వ్యర్థాలను సమర్థవంతంగా సహజ ఎరువుగా మారుస్తాయి."
  },
  {
    "id": 362,
    "question": "The function of preparation of food for the plant is performed by. (TSTET 02 June 2024)\nమొక్కకు ఆహారాన్ని తయారుచేసే పనిని ఇది చేస్తుంది.",
    "options": [
      "stem\nకాండం",
      "flower\nపువ్వు",
      "roots\nవేర్లు",
      "leaf\nఆకు"
    ],
    "correctAnswer": 3,
    "explanation": "చాలా మొక్కలలో కిరణజన్య సంయోగక్రియకు ప్రాథమిక ప్రదేశం ఆకు. క్లోరోఫిల్‌ను ఉపయోగించి, ఆకులు సూర్యరశ్మిని గ్రహించి, దాని శక్తిని కార్బన్ డయాక్సైడ్ మరియు నీటిని గ్లూకోజ్ (ఆహారం) మరియు ఆక్సిజన్‌గా మార్చడానికి ఉపయోగిస్తాయి."
  },
  {
    "id": 363,
    "question": "Choose the INCORRECT instruction in case of bleeding nose. (TSTET 02 June 2024)\nముక్కు నుండి రక్తం కారుతున్న సందర్భంలో తప్పు సూచనను ఎంచుకోండి.",
    "options": [
      "Shake the head for 10 minutes\n10 నిమిషాల పాటు తల ఊపండి",
      "Don't use cotton to stop the bleeding\nరక్తాన్ని ఆపడానికి పత్తిని ఉపయోగించవద్దు",
      "Press the soft part of the nose for 10 minutes\nముక్కు యొక్క మెత్తని భాగాన్ని 10 నిమిషాల పాటు నొక్కండి",
      "Bend the head forward\nతలను ముందుకు వంచండి"
    ],
    "correctAnswer": 0,
    "explanation": "ముక్కు నుండి రక్తం కారుతున్నప్పుడు తల ఊపడం తప్పు మరియు హానికరం, ఎందుకంటే ఇది ఏర్పడుతున్న రక్తం గడ్డను తొలగించి రక్తస్రావాన్ని మరింత తీవ్రతరం చేస్తుంది. సరైన ప్రథమ చికిత్స ముందుకు వంగి ముక్కు యొక్క మెత్తని భాగాన్ని నొక్కడం."
  },
  {
    "id": 364,
    "question": "Which of the following is a renewable energy resource? (TSTET 02 June 2024)\nకింది వాటిలో పునరుత్పాదక ఇంధన వనరు ఏది?",
    "options": [
      "coal\nబొగ్గు",
      "water\nనీరు",
      "petroleum\nపెట్రోలియం",
      "natural gas\nసహజ వాయువు"
    ],
    "correctAnswer": 1,
    "explanation": "నీరు పునరుత్పాదక ఇంధన వనరు, ప్రధానంగా జల విద్యుత్తులో ఉపయోగించబడుతుంది. ఇది సహజ నీటి చక్రంలో భాగం మరియు వర్షపాతం ద్వారా తిరిగి నింపబడుతుంది, బొగ్గు, పెట్రోలియం మరియు సహజ వాయువు వంటి శిలాజ ఇంధనాల వలె కాకుండా, అవి పునరుత్పాదకం కానివి."
  },
  {
    "id": 365,
    "question": "Rafflesia is the largest flower in the world. Choose the correct answer showing the measurements of its diameter and weight respectively. (TSTET 02 June 2024)\nప్రపంచంలో అతిపెద్ద పువ్వు రఫ్లేసియా. దాని వ్యాసం మరియు బరువును వరుసగా చూపే సరైన సమాధానాన్ని ఎంచుకోండి.",
    "options": [
      "1.5 metres, 6 kgs\n1.5 మీటర్లు, 6 కిలోలు",
      "1.5 metres, 5-8 kgs\n1.5 మీటర్లు, 5-8 కిలోలు",
      "2 metre, 7-10 kgs\n2 మీటర్లు, 7-10 కిలోలు",
      "1 metre, 7-10 kgs\n1 మీటరు, 7-10 కిలోలు"
    ],
    "correctAnswer": 3,
    "explanation": "రఫ్లేసియా ఆర్నాల్డి భూమిపై అతిపెద్ద పువ్వును ఉత్పత్తి చేయడంలో ప్రసిద్ధి చెందింది. ఇది సుమారు 1 మీటరు (లేదా 3 అడుగులు) వ్యాసానికి పెరుగుతుంది మరియు 7 నుండి 10 కిలోగ్రాముల బరువు ఉంటుంది."
  },
  {
    "id": 366,
    "question": "One of the following is NOT a function of worker ants. (TSTET 02 June 2024)\nకిందివాటిలో శ్రామిక చీమల విధి కానిది ఏది?",
    "options": [
      "protection of eggs\nగుడ్లను రక్షించడం",
      "laying eggs\nగుడ్లు పెట్టడం",
      "procuring food\nఆహారాన్ని సేకరించడం",
      "building and repairing of anthills\nపుట్టలను నిర్మించడం మరియు మరమ్మత్తు చేయడం"
    ],
    "correctAnswer": 1,
    "explanation": "చీమల గుంపులో, గుడ్లు పెట్టడం రాణి చీమ యొక్క ప్రాథమిక విధి. శ్రామిక చీమలు (వంధ్య ఆడవి) ఆహారం కోసం వెతకడం, పిల్లల సంరక్షణ మరియు గూడును నిర్వహించడం వంటి అన్ని ఇతర పనులకు బాధ్యత వహిస్తాయి."
  },
  {
    "id": 367,
    "question": "The layer of atmosphere nearest to the earth's surface is. (TSTET 02 June 2024)\nభూమి ఉపరితలానికి అత్యంత సమీపంలో ఉన్న వాతావరణ పొర ఏది?",
    "options": [
      "Thermosphere\nథర్మోస్ఫియర్",
      "Mesosphere\nమీసోస్ఫియర్",
      "Troposphere\nట్రోపోస్ఫియర్",
      "Exosphere\nఎక్సోస్ఫియర్"
    ],
    "correctAnswer": 2,
    "explanation": "ట్రోపోస్ఫియర్ భూమి వాతావరణంలో అత్యంత దిగువ పొర, ఇది ఉపరితలం నుండి సుమారు 8 నుండి 15 కిలోమీటర్ల వరకు విస్తరించి ఉంటుంది. వాతావరణంలోని అన్ని మార్పులు ఇక్కడే జరుగుతాయి మరియు వాతావరణ ద్రవ్యరాశిలో అధిక భాగం ఇక్కడే ఉంటుంది."
  },
  {
    "id": 368,
    "question": "Particles of lead oxide present in auto mobile exhaust can cause. (TSTET 02 June 2024)\nఆటోమొబైల్ పొగలో ఉండే లెడ్ ఆక్సైడ్ కణాలు దేనికి కారణమవుతాయి?",
    "options": [
      "Anaemia\nరక్తహీనత",
      "Bronchitis\nబ్రోన్కైటిస్",
      "Leucopenia\nల్యూకోపెనియా",
      "Leucamia\nల్యూకేమియా"
    ],
    "correctAnswer": 0,
    "explanation": "సీసం (లెడ్) ఒక విషపూరితమైన బరువైన లోహం, వాహనాల పొగ నుండి పీల్చినప్పుడు, ఇది శరీరంలో హిమోగ్లోబిన్ ఉత్పత్తికి ఆటంకం కలిగిస్తుంది. ఈ ఆటంకం రక్తహీనతకు దారితీస్తుంది, ఇది ఎర్ర రక్త కణాలు లేదా హిమోగ్లోబిన్ లోపంతో గుర్తించబడే పరిస్థితి."
  },
  {
    "id": 369,
    "question": "The power of moving air is used in. (TSTET 02 June 2024)\nకదిలే గాలి యొక్క శక్తిని దేనిలో ఉపయోగిస్తారు?",
    "options": [
      "Production of Carbondioxide\nకార్బన్ డయాక్సైడ్ ఉత్పత్తి",
      "Production of electricity\nవిద్యుత్ ఉత్పత్తి",
      "Preparation of food materials\nఆహార పదార్థాల తయారీ",
      "Prevention of pollution\nకాలుష్య నివారణ"
    ],
    "correctAnswer": 1,
    "explanation": "కదిలే గాలి (పవనం) యొక్క గతి శక్తిని విండ్ టర్బైన్‌లు ఉపయోగించుకుని జనరేటర్‌ను తిప్పి విద్యుత్తును ఉత్పత్తి చేస్తాయి. ఇది పవన శక్తి అని పిలువబడే ఒక శుభ్రమైన, పునరుత్పాదక ఇంధన వనరు."
  },
  {
    "id": 370,
    "question": "Identify the Non-primary colour from the following. (TSTET 02 June 2024)\nకిందివాటి నుండి ప్రాథమికేతర రంగును గుర్తించండి.",
    "options": [
      "green\nఆకుపచ్చ",
      "blue\nనీలం",
      "red\nఎరుపు",
      "yellow\nపసుపు"
    ],
    "correctAnswer": 3,
    "explanation": "కాంతి యొక్క ప్రాథమిక రంగులు (సంకలిత నమూనా) ఎరుపు, ఆకుపచ్చ మరియు నీలం (RGB). మిగతా అన్ని రంగులు ఈ మూడింటిని కలపడం ద్వారా సృష్టించబడతాయి. పసుపు ఒక ద్వితీయ రంగు, ఇది ఎరుపు మరియు ఆకుపచ్చ కాంతిని కలపడం ద్వారా సృష్టించబడుతుంది, కాబట్టి ఈ సందర్భంలో ఇది ప్రాథమికేతర రంగు."
  },
  {
    "id": 371,
    "question": "Asexual reproduction is seen in this plant/tree. (TSTET 02 June 2024)\nఈ మొక్క/చెట్టులో అలైంగిక పునరుత్పత్తి కనిపిస్తుంది.",
    "options": [
      "Guava\nజామ",
      "Marigold\nబంతి పువ్వు",
      "Yeast\nయీస్ట్",
      "Orange\nనారింజ"
    ],
    "correctAnswer": 2,
    "explanation": "యీస్ట్ అనేది ఏకకణ శిలీంధ్రం, ఇది బడ్డింగ్ అనే ప్రక్రియ ద్వారా అలైంగికంగా పునరుత్పత్తి చేస్తుంది, ఇక్కడ మాతృ కణం నుండి కొత్త కణం పెరుగుతుంది. ఇతర ఎంపికలు పుష్పించే మొక్కలు, ఇవి ప్రాథమికంగా విత్తనాల ద్వారా లైంగికంగా పునరుత్పత్తి చేస్తాయి."
  },
  {
    "id": 372,
    "question": "A mustard plant produces these many seeds in its life time. (TSTET 02 June 2024)\nఒక ఆవాల మొక్క తన జీవితకాలంలో ఇన్ని విత్తనాలను ఉత్పత్తి చేస్తుంది.",
    "options": [
      "10,000",
      "20,000",
      "15,000",
      "40,000"
    ],
    "correctAnswer": 0,
    "explanation": "ఒక ఆవాల మొక్క అధిక సంఖ్యలో విత్తనాలను ఉత్పత్తి చేయగలదు, తన జాతిని విజయవంతంగా వ్యాప్తి చేయడానికి తరచుగా సుమారు 10,000 విత్తనాలను ఉత్పత్తి చేస్తుంది."
  },
  {
    "id": 373,
    "question": "On physical maps 'yellow' colour is generally used to show. (TSTET 02 June 2024)\nభౌతిక పటాలపై 'పసుపు' రంగు సాధారణంగా దేనిని చూపించడానికి ఉపయోగించబడుతుంది?",
    "options": [
      "Plateaus\nపీఠభూములు",
      "Plains\nమైదానాలు",
      "Water bodies\nజలాశయాలు",
      "Mountains\nపర్వతాలు"
    ],
    "correctAnswer": 0,
    "explanation": "కార్టోగ్రఫీలో, భౌతిక పటాలపై వివిధ భౌగోళిక లక్షణాలను సూచించడానికి నిర్దిష్ట రంగులు ఉపయోగించబడతాయి. పీఠభూములు మరియు ఇతర ఎత్తైన, చదునైన భూములను సూచించడానికి పసుపు రంగు ప్రామాణికంగా ఉపయోగించబడుతుంది. ఆకుపచ్చ సాధారణంగా మైదానాలను, మరియు గోధుమ రంగు పర్వతాలను చూపుతుంది."
  },
  {
    "id": 374,
    "question": "In India, the oldest mountains are. (TSTET 02 June 2024)\nభారతదేశంలో, పురాతన పర్వతాలు ఏవి?",
    "options": [
      "Aravalli Range\nఆరావళి శ్రేణి",
      "Satpura Range\nసాత్పురా శ్రేణి",
      "Himalayas\nహిమాలయాలు",
      "Vindhya Range\nవింధ్య శ్రేణి"
    ],
    "correctAnswer": 0,
    "explanation": "వాయువ్య భారతదేశంలోని ఆరావళి శ్రేణి ప్రపంచంలోని పురాతన ముడుత పర్వత శ్రేణులలో ఒకటి, ఇది ప్రోటెరోజోయిక్ యుగానికి చెందినది. దీనికి విరుద్ధంగా, హిమాలయాలు భౌగోళికంగా యువ పర్వతాలు మరియు ఇప్పటికీ పెరుగుతున్నాయి."
  },
  {
    "id": 375,
    "question": "Ancient Indian art and architecture reached its zenith during the period of. (TSTET 02 June 2024)\nప్రాచీన భారతీయ కళ మరియు వాస్తుశిల్పం ఎవరి కాలంలో అత్యున్నత స్థాయికి చేరుకుంది?",
    "options": [
      "Guptas\nగుప్తులు",
      "Mauryas\nమౌర్యులు",
      "Rajputs\nరాజపుత్రులు",
      "Kushans\nకుషాణులు"
    ],
    "correctAnswer": 0,
    "explanation": "గుప్త సామ్రాజ్య కాలం (క్రీ.శ. 4 నుండి 6వ శతాబ్దం) కళ, వాస్తుశిల్పం, విజ్ఞానం మరియు సాహిత్యంలో అద్భుతమైన విజయాల కారణంగా 'భారతదేశ స్వర్ణయుగం'గా విస్తృతంగా పరిగణించబడుతుంది. ఈ యుగం శాస్త్రీయ భారతీయ శిల్పకళ మరియు ఆలయ వాస్తుశిల్పం యొక్క అత్యుత్తమ ఉదాహరణలను అందించింది."
  },
  {
    "id": 376,
    "question": "The most important fundamental tenet of Jainism is. (TSTET 02 June 2024)\nజైనమతం యొక్క అతి ముఖ్యమైన ప్రాథమిక సిద్ధాంతం ఏది?",
    "options": [
      "charity\nదానం",
      "dispassion\nవిరక్తి",
      "loyalty\nవిశ్వాసం",
      "non-violence\nఅహింస"
    ],
    "correctAnswer": 3,
    "explanation": "'అహింస' లేదా అహింస, జైనమతం యొక్క అత్యంత ప్రాథమిక సూత్రం. ఈ సిద్ధాంతం అన్ని చర్యలకు (శారీరక, వాචిక మరియు మానసిక) వర్తిస్తుంది మరియు అన్ని జీవులకు విస్తరించి, జైన నీతి మరియు తత్వశాస్త్రానికి మూలస్తంభంగా ఏర్పడుతుంది."
  },
  {
    "id": 377,
    "question": "'Lothal' is known for. (TSTET 02 June 2024)\n'లోథల్' దేనికి ప్రసిద్ధి చెందింది?",
    "options": [
      "Vardaman's birth place\nవర్ధమానుడి జన్మస్థలం",
      "ancient dockyard\nపురాతన నౌకాశ్రయం",
      "lion capital of Ashoka\nఅశోకుని సింహ రాజధాని",
      "great seat of Buddhist learning centre\nబౌద్ధ విద్యా కేంద్రం యొక్క గొప్ప పీఠం"
    ],
    "correctAnswer": 1,
    "explanation": "ఆధునిక గుజరాత్‌లోని పురాతన సింధు లోయ నాగరికత యొక్క ప్రముఖ నగరమైన లోథల్, ప్రపంచంలోనే మొట్టమొదటి మానవ నిర్మిత నౌకాశ్రయాన్ని కలిగి ఉండటానికి ప్రసిద్ధి చెందింది. ఈ నిర్మాణం వాణిజ్య కేంద్రంగా నగరం యొక్క ప్రాముఖ్యతను తెలియజేస్తుంది."
  },
  {
    "id": 378,
    "question": "The Charminar in Hyderabad was constructed in the year. (TSTET 02 June 2024)\nహైదరాబాద్‌లోని చార్మినార్ ఏ సంవత్సరంలో నిర్మించబడింది?",
    "options": [
      "1691",
      "1581",
      "1591",
      "1701"
    ],
    "correctAnswer": 2,
    "explanation": "చార్మినార్ 1591లో కుతుబ్ షాహీ వంశం యొక్క ఐదవ పాలకుడు అయిన ముహమ్మద్ కులీ కుతుబ్ షా చేత నిర్మించబడింది. నగరంలో ఒక ప్రాణాంతకమైన ప్లేగు మహమ్మారి ముగింపునకు గుర్తుగా ఆయన ఈ స్మారక చిహ్నాన్ని నిర్మించారు."
  },
  {
    "id": 379,
    "question": "'Give me blood, I will give you freedom'. This was the slogan given by. (TSTET 02 June 2024)\n'నాకు రక్తాన్ని ఇవ్వండి, నేను మీకు స్వాతంత్ర్యాన్ని ఇస్తాను'. ఈ నినాదాన్ని ఇచ్చింది ఎవరు?",
    "options": [
      "Subhash Chandra Bose\nసుభాష్ చంద్రబోస్",
      "Mahatma Gandhi\nమహాత్మా గాంధీ",
      "Bhagat Singh\nభగత్ సింగ్",
      "Lala Lajpat Rai\nలాలా లజపత్ రాయ్"
    ],
    "correctAnswer": 0,
    "explanation": "ఈ శక్తివంతమైన నినాదాన్ని సుభాష్ చంద్రబోస్ తన ఇండియన్ నేషనల్ ఆర్మీ (INA) లో చేరడానికి మరియు బ్రిటిష్ పాలన నుండి భారతదేశ స్వాతంత్ర్యం కోసం పోరాడటానికి ప్రజలను ప్రేరేపించడానికి మరియు సమీకరించడానికి ఉపయోగించారు."
  },
  {
    "id": 380,
    "question": "National Panchayati Raj Day is celebrated by the Ministry of Panchayati Raj annually on. (TSTET 02 June 2024)\nజాతీయ పంచాయతీ రాజ్ దినోత్సవాన్ని పంచాయతీ రాజ్ మంత్రిత్వ శాఖ ఏటా ఏ రోజున జరుపుకుంటుంది?",
    "options": [
      "24th March\n24 మార్చి",
      "24th June\n24 జూన్",
      "24th August\n24 ఆగస్టు",
      "24th April\n24 ఏప్రిల్"
    ],
    "correctAnswer": 3,
    "explanation": "జాతీయ పంచాయతీ రాజ్ దినోత్సవాన్ని ప్రతి సంవత్సరం ఏప్రిల్ 24న జరుపుకుంటారు. ఇది 73వ రాజ్యాంగ సవరణ చట్టం, 1992, 1993లో అమల్లోకి వచ్చిన రోజును స్మరించుకుంటుంది, ఇది పంచాయతీ రాజ్ స్థానిక స్వపరిపాలన వ్యవస్థను రాజ్యాంగబద్ధం చేసింది."
  },
  {
    "id": 381,
    "question": "Devadula lift irrigation project is on the river. (TSTET 02 June 2024)\nదేవాదుల ఎత్తిపోతల పథకం ఏ నదిపై ఉంది?",
    "options": [
      "Godavari\nగోదావరి",
      "Krishna\nకృష్ణా",
      "Manjeera\nమంజీరా",
      "Musi\nమూసీ"
    ],
    "correctAnswer": 0,
    "explanation": "జె. చొక్కా రావు దేవాదుల ఎత్తిపోతల పథకం తెలంగాణలోని ఒక ప్రధాన ప్రాజెక్టు, ఇది అనేక మెట్ట ప్రాంతాలకు సాగునీరు మరియు తాగునీటిని అందించడానికి గోదావరి నది నుండి నీటిని ఎత్తిపోయడానికి రూపొందించబడింది."
  },
  {
    "id": 382,
    "question": "The main purpose of establishing the wildlife sanctuaries is to. (TSTET 02 June 2024)\nవన్యప్రాణుల అభయారణ్యాలను స్థాపించడం యొక్క ముఖ్య ఉద్దేశ్యం ఏమిటి?",
    "options": [
      "develop tourism\nపర్యాటకాన్ని అభివృద్ధి చేయడం",
      "protect the tribals living in the forests\nఅడవులలో నివసిస్తున్న గిరిజనులను రక్షించడం",
      "save the domestic animals from the wild animals\nపెంపుడు జంతువులను వన్యప్రాణుల నుండి కాపాడటం",
      "protect the endangered species\nఅంతరించిపోతున్న జాతులను రక్షించడం"
    ],
    "correctAnswer": 3,
    "explanation": "వన్యప్రాణుల అభయారణ్యం యొక్క ప్రాథమిక లక్ష్యం జీవవైవిధ్య పరిరక్షణ. ఇవి వృక్షజాలం మరియు జంతుజాలానికి రక్షిత సహజ ఆవాసాన్ని అందించడానికి స్థాపించబడ్డాయి, ముఖ్యంగా అంతరించిపోతున్న మరియు ప్రమాదంలో ఉన్న జాతులను విలుప్తమవకుండా కాపాడటానికి ప్రత్యేక దృష్టి పెడతాయి."
  },
  {
    "id": 383,
    "question": "The dance form 'Perini Sivatandavam' is related to. (TSTET 02 June 2024)\n'పేరిణి శివతాండవం' అనే నృత్య రూపం దేనికి సంబంధించినది?",
    "options": [
      "dance of kings\nరాజుల నృత్యం",
      "dance of warriors\nయోధుల నృత్యం",
      "dance of priests\nపూజారుల నృత్యం",
      "dance of tribals\nగిరిజనుల నృత్యం"
    ],
    "correctAnswer": 1,
    "explanation": "పేరిణి శివతాండవం తెలంగాణకు చెందిన ఒక పురాతన, ఉద్వేగభరితమైన పురుష నృత్య రూపం, దీనిని తరచుగా 'యోధుల నృత్యం' అని పిలుస్తారు. దీనిని సాంప్రదాయకంగా యోధులు యుద్ధానికి వెళ్లే ముందు శివుని ఆత్మను ఆవాహన చేయడానికి ప్రదర్శించేవారు."
  },
  {
    "id": 384,
    "question": "Among the following districts of Telangana, the major chillies producing district is. (TSTET 02 June 2024)\nతెలంగాణలోని కింది జిల్లాలలో, ప్రధానంగా మిరపను పండించే జిల్లా ఏది?",
    "options": [
      "Vikarabad\nవికారాబాద్",
      "Zaheerabad\nజహీరాబాద్",
      "Mahabubabad\nమహబూబాబాద్",
      "Nizamabad\nనిజామాబాద్"
    ],
    "correctAnswer": 2,
    "explanation": "తెలంగాణలోని అనేక ప్రాంతాలలో మిరపను పండిస్తున్నప్పటికీ, ప్రస్తుత మహబూబాబాద్ జిల్లాను కలిగి ఉన్న పూర్వపు వరంగల్ జిల్లా ప్రాంతం మిరప సాగు మరియు ఉత్పత్తికి అత్యంత ముఖ్యమైన ప్రాంతాలలో ఒకటి."
  },
  {
    "id": 385,
    "question": "Among the following, the best example for the whole class activity is. (TSTET 02 June 2024)\nకిందివాటిలో, తరగతి మొత్తం పాల్గొనే కార్యకలాపానికి ఉత్తమ ఉదాహరణ ఏది?",
    "options": [
      "Participation in field trip\nక్షేత్ర పర్యటనలో పాల్గొనడం",
      "Reading a book\nపుస్తకం చదవడం",
      "Expressing opinions\nఅభిప్రాయాలను వ్యక్తపరచడం",
      "Preparing a chart of people's life style\nప్రజల జీవనశైలిపై చార్ట్ తయారుచేయడం"
    ],
    "correctAnswer": 0,
    "explanation": "క్షేత్ర పర్యటన అనేది ఒక అనుభవపూర్వక అభ్యాస కార్యకలాపం, ఇది తరగతి గది వెలుపల మొత్తం తరగతి ఒక సమూహంగా కలిసి కదులుతూ మరియు నేర్చుకోవడాన్ని స్వాభావికంగా కలిగి ఉంటుంది. ఇతర కార్యకలాపాలను వ్యక్తిగతంగా లేదా చిన్న సమూహాలలో చేయవచ్చు."
  },
  {
    "id": 386,
    "question": "Identify the method which is NOT based on the principle 'Learning by doing'. (TSTET 02 June 2024)\n'చేస్తూ నేర్చుకోవడం' అనే సూత్రంపై ఆధారపడని పద్ధతిని గుర్తించండి.",
    "options": [
      "Problem solving method\nసమస్య పరిష్కార పద్ధతి",
      "Project method\nప్రాజెక్ట్ పద్ధతి",
      "Lecture cum demonstration method\nఉపన్యాస-ప్రదర్శన పద్ధతి",
      "Laboratory method\nప్రయోగశాల పద్ధతి"
    ],
    "correctAnswer": 2,
    "explanation": "'చేస్తూ నేర్చుకోవడం' అనే సూత్రం విద్యార్థుల చురుకైన ప్రమేయాన్ని నొక్కి చెబుతుంది. సమస్య పరిష్కారం, ప్రాజెక్ట్, మరియు ప్రయోగశాల పద్ధతులు అన్నీ విద్యార్థి-కేంద్రీకృతమైనవి మరియు చురుకైన భాగస్వామ్యం అవసరం. అయితే, ఉపన్యాస-ప్రదర్శన పద్ధతి ఉపాధ్యాయ-కేంద్రీకృతమైనది, ఇందులో విద్యార్థులు ప్రధానంగా గమనిస్తారు, కాబట్టి ఇది ఈ సూత్రంపై తక్కువగా ఆధారపడి ఉంటుంది."
  },
  {
    "id": 387,
    "question": "Identify the non-projected teaching aid among the following. (TSTET 02 June 2024)\nకిందివాటిలో ప్రక్షేపణం కాని బోధనోపకరణాన్ని గుర్తించండి.",
    "options": [
      "Slide\nస్లయిడ్",
      "Black board\nనల్లబల్ల",
      "Epidiascope\nఎపిడయాస్కోప్",
      "Filmstrip\nఫిల్మ్‌స్ట్రిప్"
    ],
    "correctAnswer": 1,
    "explanation": "ప్రక్షేపణ బోధనోపకరణాలకు (స్లయిడ్‌లు, ఫిల్మ్‌స్ట్రిప్‌లు, మరియు ఎపిడయాస్కోప్‌లు వంటివి) చిత్రాన్ని తెరపై ప్రదర్శించడానికి ఒక పరికరం అవసరం. నల్లబల్ల, చార్టులు లేదా నమూనాలు వంటి ప్రక్షేపణం కాని ఉపకరణాలను ప్రొజెక్షన్ అవసరం లేకుండా నేరుగా చూడవచ్చు."
  },
  {
    "id": 388,
    "question": "To achieve the objectives of Environmental Studies at primary level, National Curriculum Framework (NCF) - 2005 suggested the following principles of teaching\nA) Knowledge of ICT should be utilized in teaching learning\nB) Teacher should generate innovative activities with his creative thinking and implement them in class\nC) Subject of environment must be taught in parts instead of holistic way\nChoose the correct answer. (TSTET 02 June 2024)\nప్రాథమిక స్థాయిలో పర్యావరణ అధ్యయనాల లక్ష్యాలను సాధించడానికి, జాతీయ పాఠ్యప్రణాళిక ఫ్రేమ్‌వర్క్ (NCF) - 2005 కింది బోధనా సూత్రాలను సూచించింది.\nA) బోధన-అభ్యాసనలో ICT జ్ఞానాన్ని ఉపయోగించాలి\nB) ఉపాధ్యాయుడు తన సృజనాత్మక ఆలోచనలతో వినూత్న కార్యకలాపాలను సృష్టించి వాటిని తరగతిలో అమలు చేయాలి\nC) పర్యావరణ అంశాన్ని సమగ్రంగా కాకుండా భాగాలుగా బోధించాలి\nసరైన సమాధానాన్ని ఎంచుకోండి.",
    "options": [
      "A & C only\nA & C మాత్రమే",
      "A & B only\nA & B మాత్రమే",
      "B & C only\nB & C మాత్రమే",
      "A, B & C\nA, B & C"
    ],
    "correctAnswer": 1,
    "explanation": "NCF-2005 ICT (A) వాడకాన్ని ప్రోత్సహిస్తుంది మరియు ఉపాధ్యాయులను వినూత్న కార్యకలాపాలను (B) సృష్టించమని ప్రోత్సహిస్తుంది. అయితే, ఇది విచ్ఛిన్నమైన విధానాన్ని తీవ్రంగా వ్యతిరేకిస్తుంది, పర్యావరణ అధ్యయనాల యొక్క సమగ్ర మరియు సంపూర్ణ దృష్టిని సమర్థిస్తుంది. అందువల్ల, వాక్యం C తప్పు."
  },
  {
    "id": 389,
    "question": "Question data is illegible in the provided source document. (TSTET 02 June 2024)\nఅందించిన మూల పత్రంలో ప్రశ్న డేటా చదవడానికి వీలు లేకుండా ఉంది.",
    "options": [
      "Option not available\nఎంపిక అందుబాటులో లేదు",
      "Option not available\nఎంపిక అందుబాటులో లేదు",
      "Option not available\nఎంపిక అందుబాటులో లేదు",
      "Option not available\nఎంపిక అందుబాటులో లేదు"
    ],
    "correctAnswer": 0,
    "explanation": "సరఫరా చేయబడిన PDF పత్రంలో చదవడానికి వీలులేనందున ప్రశ్న 149 యొక్క పాఠ్యాన్ని సంగ్రహించడం సాధ్యం కాలేదు."
  },
  {
    "id": 390,
    "question": "Question data is illegible in the provided source document. (TSTET 02 June 2024)\nఅందించిన మూల పత్రంలో ప్రశ్న డేటా చదవడానికి వీలు లేకుండా ఉంది.",
    "options": [
      "Option not available\nఎంపిక అందుబాటులో లేదు",
      "Option not available\nఎంపిక అందుబాటులో లేదు",
      "Option not available\nఎంపిక అందుబాటులో లేదు",
      "Option not available\nఎంపిక అందుబాటులో లేదు"
    ],
    "correctAnswer": 0,
    "explanation": "సరఫరా చేయబడిన PDF పత్రంలో చదవడానికి వీలులేనందున ప్రశ్న 150 యొక్క పాఠ్యాన్ని సంగ్రహించడం సాధ్యం కాలేదు."
  },
  {
    "id": 391,
    "question": "Identify the plant among the following which stores its food in the stem. (TSTET 30 May 2024)\nకిందివాటిలో తన ఆహారాన్ని కాండంలో నిల్వ చేసుకునే మొక్కను గుర్తించండి.",
    "options": [
      "Apple\nఆపిల్",
      "Cucumber\nదోసకాయ",
      "Brinjal\nవంకాయ",
      "Turmeric\nపసుపు"
    ],
    "correctAnswer": 3,
    "explanation": "పసుపు అనేది తన ఆహారాన్ని రైజోమ్ అని పిలువబడే రూపాంతరం చెందిన భూగర్భ కాండంలో నిల్వ చేసుకునే మొక్క. ఈ రైజోమ్ మొక్క యొక్క భాగాన్ని పండించి సుగంధ ద్రవ్యంగా ఉపయోగిస్తారు. ఆపిల్, దోసకాయ మరియు వంకాయ అన్నీ పండ్లు, ఇవి వాటి సంబంధిత మొక్కల పునరుత్పత్తి భాగాలు."
  },
  {
    "id": 392,
    "question": "Number of premolars present in an adult person. (TSTET 30 May 2024)\nఒక వయోజన వ్యక్తిలో ఉండే అగ్రచర్వణకాల సంఖ్య.",
    "options": [
      "2",
      "4",
      "8",
      "6"
    ],
    "correctAnswer": 2,
    "explanation": "ఒక వయోజన మానవునికి మొత్తం 8 అగ్రచర్వణకాలు ఉంటాయి. పై దవడలో నాలుగు మరియు కింది దవడలో నాలుగు, ప్రతి వైపు రెండు ఉంటాయి. ఈ పళ్ళు కోరపళ్ళకు మరియు చర్వణకాలకు మధ్య ఉంటాయి మరియు ఆహారాన్ని నలపడానికి మరియు రుబ్బడానికి ఉపయోగిస్తారు."
  },
  {
    "id": 393,
    "question": "Identify the INCORRECT pair among the following. (TSTET 30 May 2024)\nకిందివాటిలో తప్పు జతను గుర్తించండి.",
    "options": [
      "Energy giving food : Carbohydrates\nశక్తినిచ్చే ఆహారం : కార్బోహైడ్రేట్లు",
      "Growth food : Proteins\nపెరుగుదల ఆహారం : ప్రోటీన్లు",
      "Protection of health : Vitamins\nఆరోగ్య పరిరక్షణ : విటమిన్లు",
      "Bowel movements : Minerals\nమలవిసర్జన : ఖనిజాలు"
    ],
    "correctAnswer": 3,
    "explanation": "తప్పు జత 'మలవిసర్జన : ఖనిజాలు'. క్రమబద్ధమైన మలవిసర్జనకు ప్రధానంగా పీచుపదార్థం (డైటరీ ఫైబర్) సహాయపడుతుంది, ఖనిజాలు కాదు. ఖనిజాలు వివిధ శారీరక విధులకు అవసరం అయినప్పటికీ, పీచుపదార్థం మలానికి బరువును చేర్చి జీర్ణక్రియను సులభతరం చేస్తుంది. మిగతా జతలు సరైనవే: కార్బోహైడ్రేట్లు శక్తిని అందిస్తాయి, ప్రోటీన్లు పెరుగుదలకు, మరియు విటమిన్లు ఆరోగ్యాన్ని కాపాడటానికి సహాయపడతాయి."
  },
  {
    "id": 394,
    "question": "Which of the following gas is present in higher quantity in air? (TSTET 30 May 2024)\nగాలిలో అధిక పరిమాణంలో ఉండే వాయువు ఏది?",
    "options": [
      "Nitrogen\nనైట్రోజన్",
      "Carbon dioxide\nకార్బన్ డయాక్సైడ్",
      "Carbon monoxide\nకార్బన్ మోనాక్సైడ్",
      "Hydrogen\nహైడ్రోజన్"
    ],
    "correctAnswer": 0,
    "explanation": "భూమి వాతావరణంలో నైట్రోజన్ అత్యంత సమృద్ధిగా ఉండే వాయువు, మనం పీల్చే గాలిలో సుమారు 78% ఉంటుంది. ఆక్సిజన్ సుమారు 21% తో రెండవ అత్యంత సమృద్ధిగా ఉండే వాయువు. కార్బన్ డయాక్సైడ్, కార్బన్ మోనాక్సైడ్, మరియు హైడ్రోజన్ చాలా తక్కువ పరిమాణంలో ఉంటాయి."
  },
  {
    "id": 395,
    "question": "If a person catches fire, we will follow the SDR principle. SDR means: (TSTET 30 May 2024)\nఒక వ్యక్తికి నిప్పు అంటుకుంటే, మనం SDR సూత్రాన్ని అనుసరిస్తాము. SDR అంటే:",
    "options": [
      "SHIFT-DRY-REST\nషిఫ్ట్-డ్రై-రెస్ట్",
      "SAVE-DROP-RESCUE\nసేవ్-డ్రాప్-రెస్క్యూ",
      "STOP-DROP-ROLL\nఆపు-పడుకో-దొర్లు",
      "SPEED-DRIVE-REMOVE\nస్పీడ్-డ్రైవ్-రిమూవ్"
    ],
    "correctAnswer": 2,
    "explanation": "సరైన అగ్నిమాపక భద్రతా విధానం 'ఆపు-పడుకో-దొర్లు' (STOP-DROP-ROLL). మీ బట్టలకు నిప్పు అంటుకుంటే, మీరు వెంటనే చేస్తున్న పనిని ఆపి (STOP), నేలపై పడుకుని (DROP) (మీ ముఖాన్ని చేతులతో కప్పుకుని), మరియు మంటలను ఆర్పడానికి అటు ఇటు దొర్లాలి (ROLL)."
  },
  {
    "id": 396,
    "question": "Identify the correct statement among the following. (TSTET 30 May 2024)\nకిందివాటిలో సరైన వాక్యాన్ని గుర్తించండి.",
    "options": [
      "All Renewable resources are extracted from Earth.\nఅన్ని పునరుత్పాదక వనరులు భూమి నుండి సంగ్రహించబడతాయి.",
      "Sunlight, water and wind will never get exhausted.\nసూర్యరశ్మి, నీరు మరియు గాలి ఎప్పటికీ తరిగిపోవు.",
      "Nagarjuna Sagar is a thermal electric power station.\nనాగార్జున సాగర్ ఒక థర్మల్ విద్యుత్ కేంద్రం.",
      "Renewable energy resources cause pollution.\nపునరుత్పాదక ఇంధన వనరులు కాలుష్యాన్ని కలిగిస్తాయి."
    ],
    "correctAnswer": 1,
    "explanation": "సూర్యరశ్మి, నీరు (జలవిద్యుత్), మరియు గాలి అపరిమితమైన పునరుత్పాదక ఇంధన వనరులుగా పరిగణించబడతాయి ఎందుకంటే అవి సహజంగా పునరుద్ధరించబడతాయి మరియు ఎప్పటికీ అయిపోవు. వాక్యం 1 తప్పు, ఎందుకంటే సౌర మరియు పవన శక్తి భూమి నుండి 'సంగ్రహించబడవు'. వాక్యం 3 తప్పు; నాగార్జున సాగర్ ఒక జలవిద్యుత్ కేంద్రం. వాక్యం 4 తప్పు, ఎందుకంటే శిలాజ ఇంధనాలతో పోలిస్తే సౌర మరియు పవన వంటి పునరుత్పాదక వనరులు చాలా తక్కువ లేదా అసలు కాలుష్యాన్ని ఉత్పత్తి చేయవు."
  },
  {
    "id": 397,
    "question": "The longest and strongest bone in the human body is: (TSTET 30 May 2024)\nమానవ శరీరంలో పొడవైన మరియు బలమైన ఎముక ఏది?",
    "options": [
      "Ribs\nపక్కటెముకలు",
      "Knee bone\nమోకాలి ఎముక",
      "Femur\nతొడ ఎముక (ఫీమర్)",
      "Calf bone\nపిక్క ఎముక"
    ],
    "correctAnswer": 2,
    "explanation": "ఫీమర్, లేదా తొడ ఎముక, మానవ శరీరంలో పొడవైన, బరువైన మరియు బలమైన ఎముక. ఇది తుంటి నుండి మోకాలి వరకు విస్తరించి ఉంటుంది మరియు బరువును మోయడానికి మరియు కదలికను ప్రారంభించడానికి కీలకం."
  },
  {
    "id": 398,
    "question": "The percentage of fresh water out of the water available on the earth is: (TSTET 30 May 2024)\nభూమిపై అందుబాటులో ఉన్న నీటిలో మంచినీటి శాతం ఎంత?",
    "options": [
      "1%",
      "2%",
      "10%",
      "25%"
    ],
    "correctAnswer": 0,
    "explanation": "భూమిపై ఉన్న నీటిలో సుమారు 3% మంచినీరు అయినప్పటికీ, అందులో ఎక్కువ భాగం హిమానీనదాలు, మంచు శిఖరాలు మరియు భూగర్భంలో చిక్కుకొని అందుబాటులో లేదు. సరస్సులు, నదులు మరియు చిత్తడి నేలలలో సులభంగా అందుబాటులో ఉన్న మంచినీరు ప్రపంచ మొత్తం నీటిలో 1% కన్నా తక్కువ."
  },
  {
    "id": 399,
    "question": "Which of the following are NOT present in human Blood? (TSTET 30 May 2024)\nకిందివాటిలో మానవ రక్తంలో ఏవి ఉండవు?",
    "options": [
      "Red Blood Corpuscles (RBC)\nఎర్ర రక్త కణాలు (RBC)",
      "White Blood Corpuscles (WBC)\nతెల్ల రక్త కణాలు (WBC)",
      "Blood Platelets\nరక్త ఫలకికలు",
      "Hepatocytes\nహెపటోసైట్లు"
    ],
    "correctAnswer": 3,
    "explanation": "హెపటోసైట్లు కాలేయంలో కనిపించే ప్రధాన కణ రకం; అవి రక్తం యొక్క భాగం కాదు. మానవ రక్తం ప్లాస్మా, ఎర్ర రక్త కణాలు (ఆక్సిజన్ రవాణా కోసం), తెల్ల రక్త కణాలు (రోగనిరోధక శక్తి కోసం), మరియు ప్లేట్‌లెట్స్ (గడ్డకట్టడం కోసం) కలిగి ఉంటుంది."
  },
  {
    "id": 400,
    "question": "Cuscuta is an example of: (TSTET 30 May 2024)\nకస్కూటా (బంగారు తీగ) దేనికి ఉదాహరణ?",
    "options": [
      "Autotroph\nస్వయంపోషకం",
      "Parasite\nపరాన్నజీవి",
      "Saprophyte\nపూతికాహారి",
      "Symbiont\nసహజీవి"
    ],
    "correctAnswer": 1,
    "explanation": "సాధారణంగా డాడర్ అని పిలువబడే కస్కూటా (బంగారు తీగ) ఒక పరాన్నజీవి మొక్క. దీనికి క్లోరోఫిల్ ఉండదు మరియు కిరణజన్య సంయోగక్రియ ద్వారా తన ఆహారాన్ని తాను ఉత్పత్తి చేసుకోలేదు. బదులుగా, ఇది ఒక ఆతిథేయి మొక్కకు అతుక్కుని, జీవించడానికి అవసరమైన పోషకాలను మరియు నీటిని దాని నుండి గ్రహిస్తుంది."
  },
  {
    "id": 401,
    "question": "Identify the greenhouse gas among the following. (TSTET 30 May 2024)\nకిందివాటిలో గ్రీన్‌హౌస్ వాయువును గుర్తించండి.",
    "options": [
      "Methane\nమీథేన్",
      "Hydrogen\nహైడ్రోజన్",
      "Chlorine\nక్లోరిన్",
      "Argon\nఆర్గాన్"
    ],
    "correctAnswer": 0,
    "explanation": "మీథేన్ (CH4) ఒక శక్తివంతమైన గ్రీన్‌హౌస్ వాయువు, అంటే ఇది వాతావరణంలో వేడిని గ్రహించి బంధిస్తుంది, ఇది గ్రీన్‌హౌస్ ప్రభావానికి మరియు గ్లోబల్ వార్మింగ్‌కు దోహదం చేస్తుంది. హైడ్రోజన్, క్లోరిన్, మరియు ఆర్గాన్ ముఖ్యమైన గ్రీన్‌హౌస్ వాయువులుగా పరిగణించబడవు."
  },
  {
    "id": 402,
    "question": "Aeration helps organisms to grow and breakdown waste material faster. This is a: (TSTET 30 May 2024)\nగాలిని పంపడం (ఏరేషన్) జీవుల పెరుగుదలకు మరియు వ్యర్థ పదార్థాలను వేగంగా విచ్ఛిన్నం చేయడానికి సహాయపడుతుంది. ఇది ఒక:",
    "options": [
      "Physical process\nభౌతిక ప్రక్రియ",
      "Biological process\nజీవ ప్రక్రియ",
      "Chemical process\nరసాయన ప్రక్రియ",
      "Chlorination process\nక్లోరినేషన్ ప్రక్రియ"
    ],
    "correctAnswer": 1,
    "explanation": "మురుగునీటి శుద్ధి వంటి ప్రక్రియలలో ఏరేషన్ అనేది ఒక జీవ ప్రక్రియ. ఇది వ్యర్థాలలోకి గాలిని (ఆక్సిజన్‌ను) పంపి, సేంద్రీయ కాలుష్యాలను తిని విచ్ఛిన్నం చేసే ఏరోబిక్ సూక్ష్మజీవుల (బ్యాక్టీరియా వంటివి) పెరుగుదలను ప్రోత్సహిస్తుంది."
  },
  {
    "id": 403,
    "question": "The rivers Krishna and Godavari are originated in these Ghats and formed deltas at this sea coast. (TSTET 30 May 2024)\nకృష్ణా మరియు గోదావరి నదులు ఈ ఘాట్‌లలో ఉద్భవించి, ఈ సముద్ర తీరంలో డెల్టాలను ఏర్పరుస్తాయి.",
    "options": [
      "Western Ghats and East Coast\nపశ్చిమ కనుమలు మరియు తూర్పు తీరం",
      "Eastern Ghats and East Coast\nతూర్పు కనుమలు మరియు తూర్పు తీరం",
      "Western Ghats and West Coast\nపశ్చిమ కనుమలు మరియు పశ్చిమ తీరం",
      "Eastern Ghats and West Coast\nతూర్పు కనుమలు మరియు పశ్చిమ తీరం"
    ],
    "correctAnswer": 0,
    "explanation": "గోదావరి మరియు కృష్ణా నదులు రెండూ పశ్చిమ కనుమల పర్వత శ్రేణిలో ఉద్భవించాయి. అవి దక్కన్ పీఠభూమి గుండా తూర్పు వైపు ప్రవహించి, భారతదేశ తూర్పు తీరంలో బంగాళాఖాతంలో కలుస్తాయి, అక్కడ అవి పెద్ద, సారవంతమైన డెల్టాలను ఏర్పరుస్తాయి."
  },
  {
    "id": 404,
    "question": "Among the following, these districts of Telangana are sharing the boundary with Andhra Pradesh. (TSTET 30 May 2024)\nకింది వాటిలో, తెలంగాణలోని ఈ జిల్లాలు ఆంధ్రప్రదేశ్‌తో సరిహద్దును పంచుకుంటున్నాయి.",
    "options": [
      "Nagar Kurnool, Jogulamba Gadwal and Mahabubnagar\nనాగర్‌కర్నూల్, జోగులాంబ గద్వాల్ మరియు మహబూబ్‌నగర్",
      "Wanaparthy, Mahabubabad and Mahabubnagar\nవనపర్తి, మహబూబాబాద్ మరియు మహబూబ్‌నగర్",
      "Suryapet, Mahabubabad and Mahabubnagar\nసూర్యాపేట, మహబూబాబాద్ మరియు మహబూబ్‌నగర్",
      "Khammam, Suryapet and Nalgonda\nఖమ్మం, సూర్యాపేట మరియు నల్గొండ"
    ],
    "correctAnswer": 3,
    "explanation": "తెలంగాణలోని అనేక జిల్లాలు ఆంధ్రప్రదేశ్‌తో సరిహద్దును పంచుకుంటున్నాయి. అందించిన ఎంపికలలో, ఖమ్మం, సూర్యాపేట మరియు నల్గొండ జిల్లాల కలయిక ఈ సరిహద్దు వెంబడి ఉన్న జిల్లాలను సరిగ్గా గుర్తిస్తుంది."
  },
  {
    "id": 405,
    "question": "The Kakatiyas began their career as warriors and Samanthas under these rulers of Karnataka and established their kingdom. (TSTET 30 May 2024)\nకాకతీయులు కర్ణాటకలోని ఈ పాలకుల క్రింద యోధులుగా మరియు సామంతులుగా తమ వృత్తిని ప్రారంభించి తమ రాజ్యాన్ని స్థాపించారు.",
    "options": [
      "Pallavas and Cheras\nపల్లవులు మరియు చేరలు",
      "Bahmanis and Gajapathis\nబహమనీలు మరియు గజపతులు",
      "Rashtrakuta and Chalukyas\nరాష్ట్రకూటులు మరియు చాళుక్యులు",
      "Bahamanis and Rashtrakutas\nబహమనీలు మరియు రాష్ట్రకూటులు"
    ],
    "correctAnswer": 2,
    "explanation": "ప్రారంభ కాకతీయులు రాష్ట్రకూట రాజవంశానికి మరియు తరువాత పశ్చిమ చాళుక్య సామ్రాజ్యానికి సామంతులుగా పనిచేశారు. వారు తమ సొంత స్వతంత్ర సామ్రాజ్యాన్ని స్థాపించడానికి ముందు ఈ శక్తివంతమైన రాజ్యాల క్రింద సైనిక మరియు పరిపాలనా అనుభవాన్ని పొందారు."
  },
  {
    "id": 406,
    "question": "The foreign traveller who visited the Vijayanagara Empire during Sri Krishna Devaraya was: (TSTET 30 May 2024)\nశ్రీ కృష్ణ దేవరాయల కాలంలో విజయనగర సామ్రాజ్యాన్ని సందర్శించిన విదేశీ యాత్రికుడు:",
    "options": [
      "Nicolo Conti\nనికోలో కాంటి",
      "Abdul Razak\nఅబ్దుల్ రజాక్",
      "Domingo Paes\nడొమింగో పేస్",
      "Nuniz\nనూనిజ్"
    ],
    "correctAnswer": 2,
    "explanation": "డొమింగో పేస్, ఒక పోర్చుగీస్ గుర్రాల వ్యాపారి, కృష్ణదేవరాయల పాలనలో విజయనగర సామ్రాజ్యాన్ని సందర్శించాడు. అతని వివరణాత్మక రచనలు ఆ కాలంలో సామ్రాజ్యం యొక్క పరిపాలన, సంస్కృతి మరియు శ్రేయస్సు గురించి అత్యంత విలువైన చారిత్రక ఆధారాలలో ఒకటిగా నిలిచాయి."
  },
  {
    "id": 407,
    "question": "This ruler of Qutub Shahi Dynasty was responsible for planning and building the city of Hyderabad. (TSTET 30 May 2024)\nకుతుబ్ షాహీ రాజవంశంలోని ఈ పాలకుడు హైదరాబాద్ నగరాన్ని ప్రణాళికాబద్ధంగా నిర్మించడానికి బాధ్యత వహించాడు.",
    "options": [
      "Ibrahim Quli Qutub Shah\nఇబ్రహీం కులీ కుతుబ్ షా",
      "Mohd Quli Qutub Shah\nమహ్మద్ కులీ కుతుబ్ షా",
      "Jamshed Quli\nజంషెడ్ కులీ",
      "Abul Hasan Tana Shah\nఅబుల్ హసన్ తానా షా"
    ],
    "correctAnswer": 1,
    "explanation": "కుతుబ్ షాహీ రాజవంశం యొక్క ఐదవ సుల్తాన్ అయిన మహమ్మద్ కులీ కుతుబ్ షా 1591లో హైదరాబాద్ నగరాన్ని స్థాపించాడు. అతను రాజధానిని గోల్కొండ నుండి కొత్త నగరానికి మార్చాడు మరియు దాని ప్రణాళిక మరియు దాని అత్యంత ప్రసిద్ధ కట్టడం, చార్మినార్ నిర్మాణంలో అతనికే ఘనత దక్కుతుంది."
  },
  {
    "id": 408,
    "question": "The places that recorded the highest and the lowest temperatures on the earth so far are: (TSTET 30 May 2024)\nభూమిపై ఇప్పటివరకు అత్యధిక మరియు అత్యల్ప ఉష్ణోగ్రతలు నమోదైన ప్రదేశాలు:",
    "options": [
      "The Rajasthan Desert, India and Oymyakon in Russia\nరాజస్థాన్ ఎడారి, భారతదేశం మరియు రష్యాలోని ఓమ్యాకాన్",
      "Kebili in Tunisia and Jena Dwyer in Antarctica\nట్యునీషియాలోని కెబిలి మరియు అంటార్కిటికాలోని జేనా డ్వైర్",
      "Azizia in Libya and Vostok Station in the Antarctica\nలిబియాలోని అజీజియా మరియు అంటార్కిటికాలోని వోస్టోక్ స్టేషన్",
      "Mitribah in Kuwait and Amundsen-Scott Station in Antarctica\nకువైట్‌లోని మిత్రిబా మరియు అంటార్కిటికాలోని అముండ్సెన్-స్కాట్ స్టేషన్"
    ],
    "correctAnswer": 2,
    "explanation": "చారిత్రాత్మకంగా, అత్యధిక ఉష్ణోగ్రత లిబియాలోని ఎల్ అజీజియాలో మరియు అత్యల్ప ఉష్ణోగ్రత అంటార్కిటికాలోని సోవియట్ వోస్టోక్ స్టేషన్‌లో నమోదైంది. అత్యధిక ఉష్ణోగ్రత రికార్డును అధికారికంగా కాలిఫోర్నియాలోని డెత్ వ్యాలీకి కేటాయించినప్పటికీ, ఈ ఎంపికలోని కలయిక విస్తృతంగా ఉదహరించబడిన చారిత్రక రికార్డులను ప్రతిబింబిస్తుంది."
  },
  {
    "id": 409,
    "question": "One among the following cases usually begin with lodging of an FIR and Police Investigation. (TSTET 30 May 2024)\nకింది కేసులలో ఒకటి సాధారణంగా ఎఫ్‌ఐఆర్ నమోదు మరియు పోలీసు దర్యాప్తుతో ప్రారంభమవుతుంది.",
    "options": [
      "A dispute regarding purchase of goods\nవస్తువుల కొనుగోలుకు సంబంధించిన వివాదం",
      "A rent dispute between the owner and the tenant\nయజమాని మరియు అద్దెదారు మధ్య అద్దె వివాదం",
      "Causing damage to property belonging to others\nఇతరులకు చెందిన ఆస్తికి నష్టం కలిగించడం",
      "An attempt to stealing gold from the shop\nదుకాణం నుండి బంగారం దొంగిలించడానికి ప్రయత్నం"
    ],
    "correctAnswer": 3,
    "explanation": "దొంగతనానికి ప్రయత్నించడం ఒక క్రిమినల్ నేరం, ప్రత్యేకంగా ఇది కాగ్నిజబుల్ నేరం, ఇది పోలీసులను వారెంట్ లేకుండా అరెస్టు చేయడానికి అనుమతిస్తుంది. ఇటువంటి కేసులు ఫస్ట్ ఇన్ఫర్మేషన్ రిపోర్ట్ (FIR) దాఖలుతో ప్రారంభమవుతాయి, ఇది పోలీసు దర్యాప్తును ప్రారంభిస్తుంది. ఇతర ఎంపికలు సివిల్ వివాదాలు, వీటిని సివిల్ కోర్టుల ద్వారా పరిష్కరిస్తారు, ఎఫ్‌ఐఆర్‌ల ద్వారా కాదు."
  },
  {
    "id": 410,
    "question": "One among the following is NOT the provision of Right to Education Act 2009. (TSTET 30 May 2024)\nకింది వాటిలో ఒకటి విద్యా హక్కు చట్టం 2009 యొక్క నిబంధన కాదు.",
    "options": [
      "Improving school infrastructure facilities\nపాఠశాల మౌలిక సదుపాయాలను మెరుగుపరచడం",
      "No discrimination and related practices towards children belonging to backward and marginalized communities\nవెనుకబడిన మరియు అణగారిన వర్గాలకు చెందిన పిల్లల పట్ల వివక్ష మరియు సంబంధిత పద్ధతులు చూపకపోవడం",
      "Removal of name for continuous absence and repetition of the child in the same class for failing in the examination\nనిరంతర గైర్హాజరుకు పేరు తొలగించడం మరియు పరీక్షలో విఫలమైనందుకు అదే తరగతిలో పిల్లలను పునరావృతం చేయడం",
      "Appointment of only eligible candidates as teachers\nఅర్హులైన అభ్యర్థులను మాత్రమే ఉపాధ్యాయులుగా నియమించడం"
    ],
    "correctAnswer": 2,
    "explanation": "విద్యా హక్కు (RTE) చట్టం 2009 ప్రకారం, ప్రాథమిక విద్య పూర్తయ్యే వరకు ఏ విద్యార్థిని ఏ తరగతిలోనూ నిలిపివేయకూడదు లేదా పాఠశాల నుండి బహిష్కరించకూడదు. అందువల్ల, పరీక్షలో విఫలమైనందుకు విద్యార్థిని అదే తరగతిలో పునరావృతం చేయించడం లేదా గైర్హాజరుకు పేరు తొలగించడం చట్టంలోని నిబంధనలకు విరుద్ధం."
  },
  {
    "id": 411,
    "question": "Among the following, identify the tax that is NOT levied by the Municipalities. (TSTET 30 May 2024)\nకింది వాటిలో, పురపాలక సంఘాలు విధించని పన్నును గుర్తించండి.",
    "options": [
      "Taxes on shops and film tickets\nదుకాణాలు మరియు సినిమా టిక్కెట్లపై పన్నులు",
      "Taxes on animals and vehicles\nజంతువులు మరియు వాహనాలపై పన్నులు",
      "Water tax for the supply of water\nనీటి సరఫరా కోసం నీటి పన్ను",
      "Land revenue and stamp duty\nభూమి శిస్తు మరియు స్టాంప్ డ్యూటీ"
    ],
    "correctAnswer": 3,
    "explanation": "భూమి శిస్తు మరియు స్టాంప్ డ్యూటీని రాష్ట్ర ప్రభుత్వం వసూలు చేస్తుంది, పురపాలక సంఘాల వంటి స్థానిక పట్టణ సంస్థలు కాదు. పురపాలక సంఘాలు ఆస్తి పన్ను, నీటి పన్ను, వినోద పన్ను (సినిమా టిక్కెట్లపై), మరియు వ్యాపారాలు, వాహనాలపై పన్నుల వంటి వనరుల ద్వారా ఆదాయాన్ని పొందుతాయి."
  },
  {
    "id": 412,
    "question": "One among the following is NOT directly elected by the voters of the constituency. (TSTET 30 May 2024)\nకింది వారిలో ఒకరు నియోజకవర్గ ఓటర్లచే ప్రత్యక్షంగా ఎన్నుకోబడరు.",
    "options": [
      "A Mandal Parishad Territorial Constituency Member\nఒక మండల పరిషత్ ప్రాదేశిక నియోజకవర్గ సభ్యుడు",
      "The Chairperson of the Zilla Parishad\nజిల్లా పరిషత్ చైర్‌పర్సన్",
      "A Zilla Parishad Territorial Constituency Member\nఒక జిల్లా పరిషత్ ప్రాదేశిక నియోజకవర్గ సభ్యుడు",
      "Village Sarpanch\nగ్రామ సర్పంచ్"
    ],
    "correctAnswer": 1,
    "explanation": "జిల్లా పరిషత్ చైర్‌పర్సన్ పరోక్షంగా ఎన్నుకోబడతారు. జిల్లాలోని ఓటర్లు జిల్లా పరిషత్ ప్రాదేశిక నియోజకవర్గ (ZPTC) సభ్యులను ప్రత్యక్షంగా ఎన్నుకుంటారు. ఈ ఎన్నికైన ZPTC సభ్యులు తమలో ఒకరిని చైర్‌పర్సన్‌గా ఎన్నుకుంటారు. సర్పంచ్ మరియు MPTC సభ్యులు కూడా ప్రజలచే ప్రత్యక్షంగా ఎన్నుకోబడతారు."
  },
  {
    "id": 413,
    "question": "According to Gauthama Buddha, sorrow is caused by: (TSTET 30 May 2024)\nగౌతమ బుద్ధుని ప్రకారం, దుఃఖానికి కారణం:",
    "options": [
      "Excessive craving and desire\nఅexcessive కోరిక మరియు వాంఛ",
      "Desire for family life\nకుటుంబ జీవితంపై కోరిక",
      "Not worshiping God\nదేవుడిని పూజించకపోవడం",
      "Not following the principles of Buddhism\nబౌద్ధమత సూత్రాలను పాటించకపోవడం"
    ],
    "correctAnswer": 0,
    "explanation": "బౌద్ధమతం యొక్క నాలుగు ఆర్య సత్యాల ప్రకారం, దుఃఖానికి (దుఃఖ) మూలం 'తృష్ణ'గా గుర్తించబడింది, దీని అర్థం కోరిక, వాంఛ లేదా ఆసక్తి. మన అత్యాశ మరియు ప్రాపంచిక సుఖాలు, ఉనికిపై మనకున్న అనుబంధాలే అన్ని దుఃఖాలకు మూల కారణమని బుద్ధుడు బోధించాడు."
  },
  {
    "id": 414,
    "question": "These forests are grown mostly on the sea coasts, sandy beaches and marshy lands and the land affected by tidal waves. (TSTET 30 May 2024)\nఈ అడవులు ఎక్కువగా సముద్ర తీరాలు, ఇసుక బీచ్‌లు, చిత్తడి నేలలు మరియు అలల తాకిడికి గురైన భూములలో పెరుగుతాయి.",
    "options": [
      "Thorn Forests\nముళ్ళ అడవులు",
      "Dry-Deciduous Forests\nపొడి ఆకురాల్చు అడవులు",
      "Mangrove Forests\nమాంగ్రూవ్ అడవులు",
      "Moist deciduous forests\nతేమతో కూడిన ఆకురాల్చు అడవులు"
    ],
    "correctAnswer": 2,
    "explanation": "మాంగ్రూవ్ అడవులు తీరప్రాంతాలలోని ఇంటర్‌టైడల్ జోన్‌లలో వృద్ధి చెందే ప్రత్యేకమైన పర్యావరణ వ్యవస్థలు. ఈ అడవులలోని మొక్కలు ఉప్పునీటిలో మరియు నీటితో నిండిన, చిత్తడి నేలలలో జీవించడానికి ప్రత్యేకంగా అనుకూలతను కలిగి ఉంటాయి, ఇవి క్రమం తప్పకుండా అలల తాకిడికి గురవుతాయి."
  },
  {
    "id": 415,
    "question": "Identify the correct statement from the following. (TSTET 30 May 2024)\nకింది వాటి నుండి సరైన వాక్యాన్ని గుర్తించండి.",
    "options": [
      "The method of verifying already formulated principle, theme, properties etc. is called Inductive method.\nఇప్పటికే రూపొందించిన సూత్రం, ఇతివృత్తం, లక్షణాలు మొదలైనవాటిని ధృవీకరించే పద్ధతిని ఆగమన పద్ధతి అంటారు.",
      "Deductive method is a method of learning abstract concepts from concrete concepts\nనిగమన పద్ధతి అనేది మూర్త భావనల నుండి అమూర్త భావనలను నేర్చుకునే పద్ధతి",
      "Project method is popularized by H.E Armstrong\nప్రాజెక్ట్ పద్ధతిని హెచ్.ఇ. ఆర్మ్‌స్ట్రాంగ్ ప్రాచుర్యంలోకి తెచ్చారు",
      "There are two parts in each Assignment in Assignment method.\nఅసైన్‌మెంట్ పద్ధతిలో ప్రతి అసైన్‌మెంట్‌లో రెండు భాగాలు ఉంటాయి."
    ],
    "correctAnswer": 3,
    "explanation": "అసైన్‌మెంట్ పద్ధతి యొక్క కొన్ని నమూనాలలో, డాల్టన్ ప్లాన్ వంటివి, అసైన్‌మెంట్‌లు రెండు భాగాలుగా cấu trúc చేయబడ్డాయి: విద్యార్థులందరూ పూర్తి చేయవలసిన తప్పనిసరి 'కనీస' భాగం మరియు ముందుగా పూర్తి చేసినవారు లేదా అంశాన్ని మరింత అన్వేషించాలనుకునే వారి కోసం ఐచ్ఛిక 'గరిష్ట' భాగం. ఇతర వాక్యాలు తప్పు: ఒక నియమాన్ని ధృవీకరించడం నిగమన తర్కం; ప్రాజెక్ట్ పద్ధతిని డబ్ల్యూ. హెచ్. కిల్పాట్రిక్ సమర్థించారు; మరియు హెచ్.ఇ. ఆర్మ్‌స్ట్రాంగ్ అన్వేషణా పద్ధతితో సంబంధం కలిగి ఉన్నారు."
  },
  {
    "id": 416,
    "question": "The Aim of \"Do this\" section included in various topics in EVS text books of Telangana State is: (TSTET 30 May 2024)\nతెలంగాణ రాష్ట్ర EVS పాఠ్యపుస్తకాలలోని వివిధ అంశాలలో చేర్చబడిన \"ఇవి చేయండి\" విభాగం యొక్క లక్ష్యం:",
    "options": [
      "providing opportunities to learn definitions of scientific terms\nశాస్త్రీయ పదాల నిర్వచనాలను నేర్చుకోవడానికి అవకాశాలు కల్పించడం",
      "providing direct hands-on experiences\nప్రత్యక్ష అనుభవపూర్వక అభ్యాసాన్ని అందించడం",
      "Securing good marks in examination\nపరీక్షలో మంచి మార్కులు సాధించడం",
      "keeping the students engaged at home\nవిద్యార్థులను ఇంట్లో నిమగ్నమై ఉంచడం"
    ],
    "correctAnswer": 1,
    "explanation": "EVS పాఠ్యపుస్తకాలలోని 'ఇవి చేయండి' విభాగాలు క్రియాశీల భాగస్వామ్యాన్ని మరియు చేయడం ద్వారా నేర్చుకోవడాన్ని ప్రోత్సహించడానికి రూపొందించబడ్డాయి. అవి విద్యార్థులకు బోధించబడుతున్న భావనలతో ప్రత్యక్ష, తొలి మరియు అనుభవపూర్వక అనుభవాన్ని పొందడానికి కార్యకలాపాలు మరియు సాధారణ ప్రయోగాలను అందిస్తాయి, ఇది మెరుగైన అవగాహన మరియు గుర్తుంచుకోవడానికి దోహదపడుతుంది."
  },
  {
    "id": 417,
    "question": "In class IV, a student is able to give reasons for changes that occur in families due to marriages, births, employment in new places, transfer to other towns and so on. Which academic standard is this? (TSTET 30 May 2024)\nIVవ తరగతిలో, ఒక విద్యార్థి వివాహాలు, జననాలు, కొత్త ప్రదేశాలలో ఉపాధి, ఇతర పట్టణాలకు బదిలీ మొదలైన కారణాల వల్ల కుటుంబాలలో జరిగే మార్పులకు కారణాలను చెప్పగలుగుతున్నాడు. ఇది ఏ విద్యా ప్రమాణం?",
    "options": [
      "Experiments - field observations\nప్రయోగాలు - క్షేత్ర పరిశీలనలు",
      "Questioning and formulating hypotheses\nప్రశ్నించడం మరియు పరికల్పనలు చేయడం",
      "Conceptual understanding\nభావనాత్మక అవగాహన",
      "Information skills, projects\nసమాచార నైపుణ్యాలు, ప్రాజెక్టులు"
    ],
    "correctAnswer": 2,
    "explanation": "ఒక దృగ్విషయం వెనుక ఉన్న కారణాలను వివరించగల సామర్థ్యం అంతర్లీన భావనలపై పట్టును ప్రదర్శిస్తుంది. ఒక విద్యార్థి వివాహం లేదా బదిలీల వంటి సంఘటనల కారణంగా కుటుంబాలు *ఎందుకు* మారుతాయో వివరించగలిగినప్పుడు, వారు 'భావనాత్మక అవగాహన'ను ప్రదర్శిస్తున్నారు. ఇది వాస్తవాలను కేవలం గుర్తుచేసుకోవడం కంటే మించి ఉంటుంది మరియు కారణ-ప్రభావ సంబంధాలను అర్థం చేసుకోవడాన్ని కలిగి ఉంటుంది."
  },
  {
    "id": 418,
    "question": "Flowers are classified into complete flower and incomplete flower is based on (TSTET 30 May 2024)\nపుష్పాలను సంపూర్ణ పుష్పం మరియు అసంపూర్ణ పుష్పంగా వర్గీకరించడం దేని ఆధారంగా జరుగుతుంది?",
    "options": [
      "Types of seeds\nవిత్తనాల రకాలు",
      "Shape of flower\nపుష్పం యొక్క ఆకారం",
      "Presence and absence of floral parts\nపుష్ప భాగాల ఉనికి మరియు లేకపోవడం",
      "Presence and absence of sexual parts\nలైంగిక భాగాల ఉనికి మరియు లేకపోవడం"
    ],
    "correctAnswer": 2,
    "explanation": "సంపూర్ణ పుష్పం అంటే రక్షక పత్రావళి, ఆకర్షక పత్రావళి, కేసరావళి (పురుష భాగం), మరియు అండకోశం (స్త్రీ భాగం) అనే నాలుగు ప్రధాన భాగాలు ఉన్న పుష్పం. అసంపూర్ణ పుష్పంలో ఈ నాలుగు భాగాలలో ఒకటి లేదా అంతకంటే ఎక్కువ భాగాలు లోపించి ఉంటాయి. అందువల్ల, ఈ వర్గీకరణ ఈ ముఖ్యమైన పుష్ప భాగాల ఉనికి లేదా లేకపోవడంపై ఆధారపడి ఉంటుంది."
  },
  {
    "id": 419,
    "question": "Canine teeth are used for (TSTET 30 May 2024)\nరదనికలు దేనికి ఉపయోగిస్తారు?",
    "options": [
      "grinding the food\nఆహారాన్ని నూరడానికి",
      "tearing the food\nఆహారాన్ని చీల్చడానికి",
      "biting the food\nఆహారాన్ని కొరకడానికి",
      "chewing food\nఆహారాన్ని నమలడానికి"
    ],
    "correctAnswer": 1,
    "explanation": "రదనికలు సాధారణంగా నోటిలో పొడవైన మరియు అత్యంత పదునైన దంతాలు. వాటి ప్రాథమిక విధి ఆహారాన్ని, ముఖ్యంగా మాంసం వంటి కఠినమైన ఆహారాలను పట్టుకోవడం మరియు చీల్చడం. నూరడం మరియు నమలడం ప్రధానంగా చర్వణకాలు మరియు అగ్రచర్వణకాలు ద్వారా జరుగుతుంది."
  },
  {
    "id": 420,
    "question": "When we are injured, new cells are formed to heal the wound. Which of the following nutrients are more essential to heal wounds? (TSTET 30 May 2024)\nమనకు గాయమైనప్పుడు, గాయాన్ని మాన్పడానికి కొత్త కణాలు ఏర్పడతాయి. గాయాలను మాన్పడానికి కింది పోషకాలలో ఏవి ఎక్కువ అవసరం?",
    "options": [
      "Proteins\nప్రోటీన్లు",
      "Fats\nకొవ్వులు",
      "Carbohydrates\nకార్బోహైడ్రేట్లు",
      "Minerals\nఖనిజాలు"
    ],
    "correctAnswer": 0,
    "explanation": "ప్రోటీన్లు శరీరం యొక్క కణజాలాలకు ప్రాథమిక నిర్మాణ అంశాలు. అవి కణాల పెరుగుదల, నిర్వహణ మరియు మరమ్మత్తుకు అవసరం. గాయం నయం అయ్యే సమయంలో, కొత్త కణజాలాన్ని నిర్మించడానికి మరియు సంభావ్య ఇన్ఫెక్షన్లతో పోరాడటానికి శరీరానికి ప్రోటీన్ల అవసరం గణనీయంగా పెరుగుతుంది."
  },
  {
    "id": 421,
    "question": "Identify the correct statement among the following. (TSTET 30 May 2024)\nకింది వాటిలో సరైన వాక్యాన్ని గుర్తించండి.",
    "options": [
      "Air expands on cooling.\nగాలి చల్లబడినప్పుడు వ్యాకోచిస్తుంది.",
      "Air contracts on heating.\nగాలి వేడి చేసినప్పుడు సంకోచిస్తుంది.",
      "Cool air tends to go rise upward the earth's surface.\nచల్లని గాలి భూమి ఉపరితలం నుండి పైకి వెళ్ళే ధోరణిని కలిగి ఉంటుంది.",
      "As warm air rises, the air pressure at that place is reduced.\nవెచ్చని గాలి పైకి లేచినప్పుడు, ఆ ప్రదేశంలో గాలి పీడనం తగ్గుతుంది."
    ],
    "correctAnswer": 3,
    "explanation": "గాలిని వేడి చేసినప్పుడు, అది వ్యాకోచించి, తక్కువ సాంద్రత కలిగి, పైకి లేస్తుంది. ఈ గాలి స్తంభం పైకి కదులుతున్నప్పుడు, అది కింద ఉన్న భూమిపై తక్కువ బరువును ప్రయోగిస్తుంది, ఇది ఆ ప్రదేశంలో గాలి పీడనం తగ్గడానికి దారితీస్తుంది. ఈ దృగ్విషయం వాతావరణ ప్రసరణ మరియు వాతావరణ నమూనాల యొక్క ప్రాథమిక సూత్రం."
  },
  {
    "id": 422,
    "question": "The tremors or vibrations of the earth are noted on this scale (TSTET 30 May 2024)\nభూమి యొక్క ప్రకంపనలు లేదా కంపనాలు ఈ స్కేల్‌పై గుర్తించబడతాయి",
    "options": [
      "Mohs scale\nమోస్ స్కేల్",
      "Picto scale\nపిక్టో స్కేల్",
      "Richter scale\nరిక్టర్ స్కేల్",
      "Octo scale\nఆక్టో స్కేల్"
    ],
    "correctAnswer": 2,
    "explanation": "రిక్టర్ స్కేల్ అనేది భూకంపం యొక్క పరిమాణాన్ని (బలం) కొలవడానికి ఉపయోగించే ఒక లాగరిథమిక్ స్కేల్. ఇది భూకంపం యొక్క హైపోసెంటర్ వద్ద విడుదలైన భూకంప శక్తిని పరిమాణాత్మకంగా లెక్కిస్తుంది. మోస్ స్కేల్ ఖనిజాల కాఠిన్యాన్ని కొలుస్తుంది."
  },
  {
    "id": 423,
    "question": "Identify the INCORRECT statement among the following. (TSTET 30 May 2024)\nకింది వాటిలో తప్పు వాక్యాన్ని గుర్తించండి.",
    "options": [
      "Electricity is generated with water vapour that is produced when water is heated with coal is called thermal electricity.\nబొగ్గుతో నీటిని వేడి చేసినప్పుడు ఉత్పత్తి అయ్యే నీటి ఆవిరితో విద్యుత్తును ఉత్పత్తి చేయడాన్ని థర్మల్ విద్యుత్ అంటారు.",
      "The power stations where electricity is generated from water are called Hydro-electric power stations.\nనీటి నుండి విద్యుత్తును ఉత్పత్తి చేసే పవర్ స్టేషన్లను హైడ్రో-ఎలక్ట్రిక్ పవర్ స్టేషన్లు అంటారు.",
      "Wind energy is used to rotate the fans, to pull out water from wells.\nపవన శక్తి ఫ్యాన్లను తిప్పడానికి, బావుల నుండి నీటిని తోడటానికి ఉపయోగిస్తారు.",
      "Petrol, diesel, kerosene, coal are the renewable future energy reserves.\nపెట్రోల్, డీజిల్, కిరోసిన్, బొగ్గు పునరుత్పాదక భవిష్యత్ ఇంధన నిల్వలు."
    ],
    "correctAnswer": 3,
    "explanation": "పెట్రోల్, డీజిల్, కిరోసిన్ మరియు బొగ్గు అన్నీ శిలాజ ఇంధనాలు. అవి పునరుత్పాదకం కాని ఇంధన వనరులు ఎందుకంటే అవి మిలియన్ల సంవత్సరాల క్రితం ప్రాచీన జీవుల అవశేషాల నుండి ఏర్పడ్డాయి మరియు మానవ కాలపరిమితిలో తిరిగి నింపబడవు. పునరుత్పాదక ఇంధన వనరులలో సౌర, పవన మరియు జలవిద్యుత్ ఉన్నాయి."
  },
  {
    "id": 424,
    "question": "According to the Science Museum of Minnesota (SMM), the only organ in the body that can float is (TSTET 30 May 2024)\nసైన్స్ మ్యూజియం ఆఫ్ మిన్నెసోటా (SMM) ప్రకారం, శరీరంలో తేలగల ఏకైక అవయవం",
    "options": [
      "Heart\nగుండె",
      "Skin\nచర్మం",
      "Lungs\nఊపిరితిత్తులు",
      "Eye\nకన్ను"
    ],
    "correctAnswer": 2,
    "explanation": "మానవ శరీరంలో నీటిపై తేలగల ఏకైక అవయవాలు ఊపిరితిత్తులు. ఎందుకంటే వాటిలో అల్వియోలీ అని పిలువబడే లక్షలాది చిన్న గాలి సంచులు ఉంటాయి, ఇవి శ్వాసను విడిచిపెట్టిన తర్వాత కూడా అవశేష గాలిని బంధిస్తాయి, ఇది అవయవాన్ని నీటి కంటే తక్కువ సాంద్రతతో చేస్తుంది."
  },
  {
    "id": 425,
    "question": "Water released from projects during floods is measured in (TSTET 30 May 2024)\nవరదల సమయంలో ప్రాజెక్టుల నుండి విడుదలయ్యే నీటిని దీనిలో కొలుస్తారు",
    "options": [
      "Gallon\nగాలన్",
      "Liter\nలీటర్",
      "Milliliter\nమిల్లీలీటర్",
      "Cusecs\nక్యూసెక్కులు"
    ],
    "correctAnswer": 3,
    "explanation": "క్యూసెక్కులు అంటే 'సెకనుకు ఘనపు అడుగులు' (cubic feet per second). ఇది ఒక నిర్దిష్ట బిందువు గుండా కాలక్రమేణా ప్రవహించే నీటి పరిమాణాన్ని కొలవడానికి ఉపయోగించే ప్రవాహ రేటు యొక్క ప్రమాణం. హైడ్రాలజీలో మరియు నీటిపారుదల, ఆనకట్ట అధికారులు పెద్ద పరిమాణంలో ప్రవహించే నీటిని కొలవడానికి దీనిని సాధారణంగా ఉపయోగిస్తారు."
  },
  {
    "id": 426,
    "question": "Identify the correct pair among the following (TSTET 30 May 2024)\nకింది వాటిలో సరైన జతను గుర్తించండి",
    "options": [
      "White Blood Cells: Carry oxygen to all the cells of our body\nతెల్ల రక్త కణాలు: మన శరీరంలోని అన్ని కణాలకు ఆక్సిజన్‌ను తీసుకువెళతాయి",
      "Blood platelets: Help in coagulation of blood\nరక్త ఫలకికలు: రక్తం గడ్డకట్టడంలో సహాయపడతాయి",
      "Cardiologist: The doctor who treats the diseases of the Brain\nకార్డియాలజిస్ట్: మెదడు వ్యాధులకు చికిత్స చేసే వైద్యుడు",
      "Red Blood Cells: Fight against the disease-causing germs\nఎర్ర రక్త కణాలు: వ్యాధి కలిగించే సూక్ష్మక్రిములతో పోరాడతాయి"
    ],
    "correctAnswer": 1,
    "explanation": "రక్త ఫలకికలు (థ్రోంబోసైట్లు) రక్తం గడ్డకట్టడానికి (స్కందనం) అవసరం. రక్తనాళానికి గాయమైనప్పుడు, ఫలకికలు ఆ ప్రదేశంలో గుమిగూడి రక్తస్రావాన్ని ఆపడానికి ఒక ప్లగ్‌ను ఏర్పాటు చేయడంలో సహాయపడతాయి. ఎర్ర రక్త కణాలు ఆక్సిజన్‌ను తీసుకువెళతాయి మరియు తెల్ల రక్త కణాలు ఇన్ఫెక్షన్లతో పోరాడతాయి."
  },
  {
    "id": 427,
    "question": "In Cuscuta plant, Haustoria are (TSTET 30 May 2024)\nకస్క్యూటా మొక్కలో, హాస్టోరియా అనేవి",
    "options": [
      "Fruits\nపండ్లు",
      "Roots\nవేర్లు",
      "Stems\nకాండాలు",
      "Leaves\nఆకులు"
    ],
    "correctAnswer": 1,
    "explanation": "కస్క్యూటా (సాధారణంగా బంగారు తీగ అని పిలుస్తారు) అనేది క్లోరోఫిల్ లేని ఒక పరాన్నజీవి మొక్క. ఇది హాస్టోరియా అని పిలువబడే ప్రత్యేకమైన, రూపాంతరం చెందిన వేర్లను ఉపయోగించి అతిధేయి మొక్క యొక్క నాడీ కణజాలంలోకి చొచ్చుకుపోయి అతిధేయి నుండి నేరుగా నీరు మరియు పోషకాలను గ్రహిస్తుంది."
  },
  {
    "id": 428,
    "question": "It is NOT caused by air pollution (TSTET 30 May 2024)\nఇది వాయు కాలుష్యం వల్ల ஏற்படదు",
    "options": [
      "Chlorofluorocarbons\nక్లోరోఫ్లోరోకార్బన్లు",
      "Greenhouse effect\nగ్రీన్‌హౌస్ ప్రభావం",
      "Acid rain\nఆమ్ల వర్షం",
      "Ozone depletion\nఓజోన్ క్షీణత"
    ],
    "correctAnswer": 0,
    "explanation": "క్లోరోఫ్లోరోకార్బన్లు (CFCలు) వాయు కాలుష్యానికి కారణం, ప్రభావం కాదు. అవి విడుదలైనప్పుడు ఓజోన్ పొరను దెబ్బతీసే రసాయనాలు. గ్రీన్‌హౌస్ ప్రభావం, ఆమ్ల వర్షం మరియు ఓజోన్ క్షీణత అన్నీ వాయు కాలుష్య కారకాల వల్ల కలిగే లేదా తీవ్రమయ్యే దృగ్విషయాలు."
  },
  {
    "id": 429,
    "question": "Identify the correct sequence regarding the stages of safe drinking water supply. (TSTET 30 May 2024)\nసురక్షితమైన త్రాగునీటి సరఫరా యొక్క దశలకు సంబంధించి సరైన క్రమాన్ని గుర్తించండి.",
    "options": [
      "Pond/Tank-Filtration-Aeration-Chlorination-Overhead Tank-Taps\nచెరువు/ట్యాంక్-వడపోత-గాలిని పంపడం-క్లోరినేషన్-ఓవర్‌హెడ్ ట్యాంక్-నల్లాలు",
      "Pond/Tank- Aeration-Chlorination -Filtration- Overhead Tank-Taps\nచెరువు/ట్యాంక్- గాలిని పంపడం-క్లోరినేషన్-వడపోత- ఓవర్‌హెడ్ ట్యాంక్-నల్లాలు",
      "Pond/Tank Chlorination Filtration Aeration - Overhead Tank-Taps\nచెరువు/ట్యాంక్ క్లోరినేషన్ వడపోత గాలిని పంపడం - ఓవర్‌హెడ్ ట్యాంక్-నల్లాలు",
      "Pond/Tank- Aeration- Filtration-Chlorination-Overhead Tank-Taps\nచెరువు/ట్యాంక్- గాలిని పంపడం- వడపోత-క్లోరినేషన్-ఓవర్‌హెడ్ ట్యాంక్-నల్లాలు"
    ],
    "correctAnswer": 3,
    "explanation": "పురపాలక సరఫరా కోసం ఉపరితల నీటిని శుద్ధి చేసే ప్రామాణిక ప్రక్రియలో ఇవి ఉంటాయి: 1) కరిగిన వాయువులను తొలగించడానికి మరియు లోహాలను ఆక్సీకరణం చేయడానికి గాలిని పంపడం. 2) తేలియాడే కణాలను తొలగించడానికి కోయాగ్యులేషన్/ఫ్లోక్యులేషన్ తరువాత అవక్షేపణ మరియు వడపోత. 3) హానికరమైన సూక్ష్మజీవులను చంపడానికి క్రిమిసంహారకం (క్లోరినేషన్). 4) నిల్వ (ఓవర్‌హెడ్ ట్యాంక్) మరియు పంపిణీ (నల్లాలు)."
  },
  {
    "id": 430,
    "question": "The founder of Satavahana dynasty was (TSTET 30 May 2024)\nశాతవాహన రాజవంశ స్థాపకుడు",
    "options": [
      "Kanishika\nకనిష్కుడు",
      "Srimuka\nశ్రీముఖుడు",
      "Sathakarni\nశాతకర్ణి",
      "Sri Pulomavi\nశ్రీ పులోమావి"
    ],
    "correctAnswer": 1,
    "explanation": "మౌర్య సామ్రాజ్యం పతనం తర్వాత దక్కన్ ప్రాంతాన్ని అనేక శతాబ్దాల పాటు పాలించిన శాతవాహన రాజవంశ స్థాపకుడిగా సిముఖుడు (శ్రీముఖుడు అని కూడా పిలుస్తారు) చరిత్రకారులచే విస్తృతంగా పరిగణించబడ్డాడు."
  },
  {
    "id": 431,
    "question": "The River that flows through eastern part of the Sahara Desert is (TSTET 30 May 2024)\nసహారా ఎడారి యొక్క తూర్పు భాగం గుండా ప్రవహించే నది",
    "options": [
      "Nile river\nనైలు నది",
      "Volga river\nఓల్గా నది",
      "Congo river\nకాంగో నది",
      "Luni river\nలూనీ నది"
    ],
    "correctAnswer": 0,
    "explanation": "నైలు నది ఈశాన్య ఆఫ్రికా గుండా దక్షిణం నుండి ఉత్తరానికి ప్రవహిస్తుంది. దాని మార్గం సహారా ఎడారి యొక్క తూర్పు భాగం గుండా, ముఖ్యంగా సుడాన్ మరియు ఈజిప్ట్‌లో, మధ్యధరా సముద్రంలోకి ఖాళీ అయ్యే ముందు ఒక సారవంతమైన లోయను ఏర్పరుస్తుంది."
  },
  {
    "id": 432,
    "question": "The World Earth day is observed on (TSTET 30 May 2024)\nప్రపంచ ధరిత్రీ దినోత్సవాన్ని ఎప్పుడు జరుపుకుంటారు?",
    "options": [
      "28th March\n28 మార్చి",
      "22nd April\n22 ఏప్రిల్",
      "24th April\n24 ఏప్రిల్",
      "10th March\n10 మార్చి"
    ],
    "correctAnswer": 1,
    "explanation": "ప్రపంచ ధరిత్రీ దినోత్సవాన్ని ఏటా ఏప్రిల్ 22న జరుపుకుంటారు. ఇది పర్యావరణ పరిరక్షణకు మద్దతును ప్రదర్శించడానికి మరియు వాతావరణ మార్పులు, ఇతర పర్యావరణ సమస్యలపై అవగాహన పెంచడానికి ఒక ప్రపంచ కార్యక్రమం."
  },
  {
    "id": 433,
    "question": "The author of the book \"Wings of Fire\" is (TSTET 30 May 2024)\n\"వింగ్స్ ఆఫ్ ఫైర్\" పుస్తక రచయిత",
    "options": [
      "Dr B R Ambedkar\nడాక్టర్ బి ఆర్ అంబేద్కర్",
      "Dr APJ Abdul kalam\nడాక్టర్ ఏపీజే అబ్దుల్ కలాం",
      "JP Narayana\nజెపి నారాయణ",
      "Ravindranath Tagore\nరవీంద్రనాథ్ ఠాగూర్"
    ],
    "correctAnswer": 1,
    "explanation": "\"వింగ్స్ ఆఫ్ ఫైర్\" అనేది భారతదేశ 11వ రాష్ట్రపతి డాక్టర్ ఎ.పి.జె. అబ్దుల్ కలాం ఆత్మకథ. అరుణ్ తివారితో కలిసి రచించిన ఈ పుస్తకం, అతని బాల్యం నుండి భారతదేశ అంతరిక్ష మరియు క్షిపణి కార్యక్రమాలకు అతను చేసిన ముఖ్యమైన பங்களிப்புகள் వరకు అతని ప్రేరణాత్మక జీవిత కథను వివరిస్తుంది."
  },
  {
    "id": 434,
    "question": "This rule was considered as 'The golden age of Ancient India' (TSTET 30 May 2024)\nఈ పాలనను 'ప్రాచీన భారతదేశ స్వర్ణయుగం'గా పరిగణించారు",
    "options": [
      "Mauryan rule\nమౌర్యుల పాలన",
      "Satavahana rule\nశాతవాహనుల పాలన",
      "Gupta rule\nగుప్తుల పాలన",
      "Harsha rule\nహర్షుని పాలన"
    ],
    "correctAnswer": 2,
    "explanation": "గుప్త సామ్రాజ్యం (క్రీ.శ. 320-550) కాలాన్ని తరచుగా 'ప్రాచీన భారతదేశ స్వర్ణయుగం' అని పిలుస్తారు, ఎందుకంటే ఈ సమయంలో గణితం (సున్నా భావన), ఖగోళశాస్త్రం, విజ్ఞానశాస్త్రం, సాహిత్యం, కళ మరియు వాస్తుశిల్పంలో అద్భుతమైన విజయాలు సాధించబడ్డాయి."
  },
  {
    "id": 435,
    "question": "The official language of Arunachal Pradesh is (TSTET 30 May 2024)\nఅరుణాచల్ ప్రదేశ్ అధికారిక భాష",
    "options": [
      "Hindi\nహిందీ",
      "Konkani\nకొంకణి",
      "English\nఇంగ్లీష్",
      "Bengali\nబెంగాలీ"
    ],
    "correctAnswer": 2,
    "explanation": "అరుణాచల్ ప్రదేశ్ రాష్ట్రానికి ఏకైక అధికారిక భాష ఇంగ్లీష్, ఇది అన్ని పరిపాలనా మరియు అధికారిక ప్రయోజనాల కోసం ఉపయోగించబడుతుంది. ఇది రాష్ట్రంలో మాట్లాడే విభిన్న గిరిజన భాషల మధ్య సంభాషణను సులభతరం చేస్తుంది."
  },
  {
    "id": 436,
    "question": "The temperate Grass lands of North America are (TSTET 30 May 2024)\nఉత్తర అమెరికాలోని సమశీతోష్ణ గడ్డి భూములు",
    "options": [
      "Prairies\nప్రేరీలు",
      "Pampas\nపంపాలు",
      "Steppes\nస్టెప్పీలు",
      "Savannas\nసవన్నాలు"
    ],
    "correctAnswer": 0,
    "explanation": "ఉత్తర అమెరికాలోని సమశీతోష్ణ గడ్డి భూములను ప్రేరీలు అంటారు. పంపాలు దక్షిణ అమెరికాలో, స్టెప్పీలు యురేషియాలో మరియు సవన్నాలు ప్రధానంగా ఆఫ్రికాలో ఉండే ఉష్ణమండల గడ్డి భూములు."
  },
  {
    "id": 437,
    "question": "McMahon line divides these two countries (TSTET 30 May 2024)\nమెక్‌మహాన్ రేఖ ఈ రెండు దేశాలను విభజిస్తుంది",
    "options": [
      "India and Nepal\nభారతదేశం మరియు నేపాల్",
      "India and Bangladesh\nభారతదేశం మరియు బంగ్లాదేశ్",
      "India and China\nభారతదేశం మరియు చైనా",
      "India and Pakistan\nభారతదేశం మరియు పాకిస్తాన్"
    ],
    "correctAnswer": 2,
    "explanation": "మెక్‌మహాన్ రేఖ అనేది భారతదేశం యొక్క ఈశాన్య ప్రాంతం మరియు చైనా మధ్య వాస్తవ సరిహద్దుగా పనిచేసే విభజన రేఖ. దీనిని భారతదేశం గుర్తించినప్పటికీ, దాని చట్టబద్ధతను చైనా వివాదాస్పదం చేస్తుంది."
  },
  {
    "id": 438,
    "question": "Pakhal Wildlife sanctuary is located in (TSTET 30 May 2024)\nపాఖల్ వన్యప్రాణుల అభయారణ్యం ఎక్కడ ఉంది?",
    "options": [
      "Khammam\nఖమ్మం",
      "Adilabad\nఆదిలాబాద్",
      "Warangal\nవరంగల్",
      "Karimnagar\nకరీంనగర్"
    ],
    "correctAnswer": 2,
    "explanation": "పాఖల్ వన్యప్రాణుల అభయారణ్యం తెలంగాణలోని వరంగల్ జిల్లాలో ఉంది. ఇది కాకతీయ రాజవంశం కాలంలో నిర్మించిన కృత్రిమ సరస్సు అయిన పాఖల్ సరస్సును ఆనుకొని ఉంది."
  },
  {
    "id": 439,
    "question": "Harithaharam programme is intended to increase the forest area by (TSTET 30 May 2024)\nహరితహారం కార్యక్రమం అటవీ విస్తీర్ణాన్ని ఎంత శాతం పెంచడానికి ఉద్దేశించబడింది?",
    "options": [
      "44%",
      "33%",
      "15%",
      "12%"
    ],
    "correctAnswer": 1,
    "explanation": "తెలంగాణ ప్రభుత్వం 'తెలంగాణకు హరితహారం' కార్యక్రమాన్ని ప్రారంభించింది. జాతీయ అటవీ విధానం ఆదేశాలకు అనుగుణంగా రాష్ట్ర మొత్తం భౌగోళిక విస్తీర్ణంలో పచ్చదనాన్ని 33%కి పెంచడం ఈ కార్యక్రమం యొక్క ముఖ్య లక్ష్యం."
  },
  {
    "id": 440,
    "question": "The period of Kharif season in Telangana state is (TSTET 30 May 2024)\nతెలంగాణ రాష్ట్రంలో ఖరీఫ్ సీజన్ కాలం ఏది?",
    "options": [
      "April to September\nఏప్రిల్ నుండి సెప్టెంబర్",
      "June to September\nజూన్ నుండి సెప్టెంబర్",
      "October to March\nఅక్టోబర్ నుండి మార్చి",
      "January to April\nజనవరి నుండి ఏప్రిల్"
    ],
    "correctAnswer": 1,
    "explanation": "తెలంగాణలో ఖరీఫ్ సీజన్ నైరుతి రుతుపవనాలతో సమానంగా ఉంటుంది. వర్షాలు ప్రారంభమవడంతో సాధారణంగా జూన్‌లో విత్తనాలు వేయడం మొదలవుతుంది మరియు పంటలను శరదృతువులో, అంటే సెప్టెంబర్-అక్టోబర్ ప్రాంతంలో కోయడం జరుగుతుంది."
  },
  {
    "id": 441,
    "question": "From among the following, 39th UNESCO world heritage site in India is (TSTET 30 May 2024)\nకింది వాటిలో, భారతదేశంలో 39వ యునెస్కో ప్రపంచ వారసత్వ ప్రదేశం ఏది?",
    "options": [
      "Ramappa\nరామప్ప",
      "Charminar\nచార్మినార్",
      "Nagarjuna sagar\nనాగార్జున సాగర్",
      "Warangal fort\nవరంగల్ కోట"
    ],
    "correctAnswer": 0,
    "explanation": "తెలంగాణలో ఉన్న కాకతీయ రుద్రేశ్వర ఆలయం, ప్రసిద్ధంగా రామప్ప దేవాలయం అని పిలువబడుతుంది, దీనిని జూలై 2021లో భారతదేశపు 39వ యునెస్కో ప్రపంచ వారసత్వ ప్రదేశంగా ప్రకటించారు."
  },
  {
    "id": 442,
    "question": "A flower that has both androecium and gynoecium is called as (TSTET 01 June 2024)\nపురుష ప్రత్యుత్పత్తి భాగం (కేసరావళి) మరియు స్త్రీ ప్రత్యుత్పత్తి భాగం (అండకోశం) రెండింటినీ కలిగి ఉన్న పువ్వును ఏమని పిలుస్తారు?",
    "options": [
      "Incomplete flower\nఅసంపూర్ణ పుష్పం",
      "Unisexual flower\nఏకలింగ పుష్పం",
      "Bisexual flower\nద్విలింగ పుష్పం",
      "Staminate flower\nకేసర పుష్పం"
    ],
    "correctAnswer": 2,
    "explanation": "ఒక పువ్వులో పురుష ప్రత్యుత్పత్తి భాగం (కేసరావళి) మరియు స్త్రీ ప్రత్యుత్పత్తి భాగం (అండకోశం) రెండూ ఉన్నప్పుడు దానిని ద్విలింగ (లేదా సంపూర్ణ) పుష్పం అంటారు. ఏకలింగ పుష్పంలో ఈ భాగాలలో ఒకటి మాత్రమే ఉంటుంది."
  },
  {
    "id": 443,
    "question": "Jams and fruit juices are preserved with (TSTET 01 June 2024)\nజామ్‌లు మరియు పండ్ల రసాలు దేనితో నిల్వ చేయబడతాయి?",
    "options": [
      "Salt\nఉప్పు",
      "Sugar\nచక్కెర",
      "Honey\nతేనె",
      "Oil\nనూనె"
    ],
    "correctAnswer": 1,
    "explanation": "జామ్‌లు మరియు పండ్ల రసాల వంటి ఆహార పదార్థాలలో అధిక చక్కెర గాఢత ఒక సంరక్షణకారిగా పనిచేస్తుంది. ద్రవాభిసరణ ప్రక్రియ ద్వారా, చక్కెర సూక్ష్మజీవుల నుండి నీటిని బయటకు లాగుతుంది, ఇది బాక్టీరియా మరియు బూజుల పెరుగుదలను నిరోధించే తక్కువ నీటి-క్రియాశీలత వాతావరణాన్ని సృష్టిస్తుంది, తద్వారా పాడుకాకుండా నివారిస్తుంది."
  },
  {
    "id": 444,
    "question": "As we go upwards in Troposphere layer of Earth's atmosphere, the temperature will (TSTET 01 June 2024)\nభూమి యొక్క వాతావరణంలోని ట్రోపో ఆవరణంలో మనం పైకి వెళ్లేకొద్దీ, ఉష్ణోగ్రత ఏమవుతుంది?",
    "options": [
      "Increases\nపెరుగుతుంది",
      "Decreases\nతగ్గుతుంది",
      "Remains same\nఅలాగే ఉంటుంది",
      "Constant\nస్థిరంగా ఉంటుంది"
    ],
    "correctAnswer": 1,
    "explanation": "వాతావరణం యొక్క అత్యల్ప పొర అయిన ట్రోపో ఆవరణంలో వాతావరణం ఏర్పడుతుంది. ఈ పొర ప్రాథమికంగా భూమి యొక్క ఉపరితలం ద్వారా వేడి చేయబడుతుంది కాబట్టి, ఎత్తు పెరిగేకొద్దీ ఉష్ణోగ్రత తగ్గుతుంది. మీరు ఉపరితలం నుండి దూరంగా వెళ్ళే కొద్దీ, గాలి తక్కువ సాంద్రతతో మరియు చల్లగా మారుతుంది. ఈ శీతలీకరణ రేటును పర్యావరణ క్షీణతా రేటు అని అంటారు."
  },
  {
    "id": 445,
    "question": "The first hour after the accident is known as (TSTET 01 June 2024)\nప్రమాదం జరిగిన తర్వాత మొదటి గంటను ఏమని అంటారు?",
    "options": [
      "Critical hour\nక్లిష్టమైన గంట",
      "Silver hour\nసిల్వర్ అవర్",
      "Saving hour\nసేవింగ్ అవర్",
      "Golden hour\nగోల్డెన్ అవర్"
    ],
    "correctAnswer": 3,
    "explanation": "అత్యవసర వైద్యంలో 'గోల్డెన్ అవర్' అనేది ఒక తీవ్రమైన గాయం తర్వాత వెంటనే వచ్చే కీలకమైన సమయాన్ని సూచిస్తుంది. ఈ మొదటి గంటలోపు తక్షణ వైద్య సంరక్షణ అందించడం రోగి యొక్క మనుగడ అవకాశాలను గణనీయంగా పెంచుతుందని మరియు దీర్ఘకాలిక సమస్యలను తగ్గిస్తుందని నమ్ముతారు."
  },
  {
    "id": 446,
    "question": "The future energy resource among the following (TSTET 01 June 2024)\nకింది వాటిలో భవిష్యత్ ఇంధన వనరు ఏది?",
    "options": [
      "Water\nనీరు",
      "Coal\nబొగ్గు",
      "Petroleum\nపెట్రోలియం",
      "Natural gas\nసహజ వాయువు"
    ],
    "correctAnswer": 0,
    "explanation": "బొగ్గు, పెట్రోలియం మరియు సహజ వాయువు పునరుత్పాదకం కాని శిలాజ ఇంధనాలు, అంటే అవి పరిమితమైనవి మరియు చివరికి అంతరించిపోతాయి. జలవిద్యుత్ ఉత్పత్తికి ఉపయోగించే నీరు ఒక పునరుత్పాదక వనరు, ఇది జాబితా చేయబడిన ఇతర వాటితో పోలిస్తే భవిష్యత్తు కోసం మరింత స్థిరమైన మరియు దీర్ఘకాలిక శక్తి వనరుగా ఉంటుంది."
  },
  {
    "id": 447,
    "question": "The largest organ in human body among the following (TSTET 01 June 2024)\nకింది వాటిలో మానవ శరీరంలోని అతిపెద్ద అవయవం ఏది?",
    "options": [
      "Bone\nఎముక",
      "Liver\nకాలేయం",
      "Small intestine\nచిన్న ప్రేగు",
      "Skin\nచర్మం"
    ],
    "correctAnswer": 3,
    "explanation": "మానవ శరీరంలో ఉపరితల వైశాల్యం మరియు బరువు రెండింటి పరంగా చర్మం అతిపెద్ద అవయవం. ఇది అస్థిపంజర వ్యవస్థలో ఒక భాగం మరియు వ్యాధికారక క్రిములు మరియు బాహ్య పర్యావరణ నష్టం నుండి రక్షణ కవచంగా పనిచేస్తుంది. కాలేయం అతిపెద్ద అంతర్గత అవయవం."
  },
  {
    "id": 448,
    "question": "World Water Day is held annually on (TSTET 01 June 2024)\nప్రపంచ నీటి దినోత్సవాన్ని ఏటా ఏ రోజున జరుపుకుంటారు?",
    "options": [
      "22nd January\nజనవరి 22",
      "11th April\nఏప్రిల్ 11",
      "22nd March\nమార్చి 22",
      "11th June\nజూన్ 11"
    ],
    "correctAnswer": 2,
    "explanation": "ప్రపంచ నీటి దినోత్సవం అనేది ప్రతి సంవత్సరం మార్చి 22న జరుపుకునే ఐక్యరాజ్యసమితి వార్షిక ఆచరణ దినం. ఇది మంచినీటి ప్రాముఖ్యతపై దృష్టి పెడుతుంది మరియు మంచినీటి వనరుల స్థిరమైన నిర్వహణను ప్రోత్సహిస్తుంది."
  },
  {
    "id": 449,
    "question": "Earthworms breathe through their (TSTET 01 June 2024)\nవానపాములు దేని ద్వారా శ్వాసిస్తాయి?",
    "options": [
      "Skin\nచర్మం",
      "Gills\nమొప్పలు",
      "Lenticels\nలెంటిసెల్స్",
      "Stomata\nపత్రరంధ్రాలు"
    ],
    "correctAnswer": 0,
    "explanation": "వానపాములు చర్మ శ్వాసక్రియను నిర్వహిస్తాయి, అంటే అవి తమ చర్మం ద్వారా శ్వాసిస్తాయి. వాటి చర్మం తేమగా ఉంచబడుతుంది, ఇది చుట్టుపక్కల నేల లేదా నీటి నుండి కరిగిన ఆక్సిజన్‌ను వాటి రక్తప్రవాహంలోకి వ్యాపనం చెందేలా చేస్తుంది, అదే సమయంలో కార్బన్ డయాక్సైడ్ బయటకు వ్యాపిస్తుంది."
  },
  {
    "id": 450,
    "question": "The plants with fibrous root system have leaves with (TSTET 01 June 2024)\nపీచు వేరు వ్యవస్థ కలిగిన మొక్కలు ఎలాంటి ఆకులను కలిగి ఉంటాయి?",
    "options": [
      "Parallel venation\nసమాంతర ఈనెల వ్యాపనం",
      "Horizontal venation\nక్షితిజ సమాంతర ఈనెల వ్యాపనం",
      "Reticulate venation\nజాలాకార ఈనెల వ్యాపనం",
      "Branched venation\nశాఖాయుత ఈనెల వ్యాపనం"
    ],
    "correctAnswer": 0,
    "explanation": "పుష్పించే మొక్కలలో వేరు రకం మరియు ఆకు ఈనెల వ్యాపనం మధ్య బలమైన సంబంధం ఉంది. గడ్డి మరియు మొక్కజొన్న వంటి ఏకదళ బీజాలు సాధారణంగా పీచు వేరు వ్యవస్థను మరియు సమాంతర ఈనెల వ్యాపనం కలిగిన ఆకులను కలిగి ఉంటాయి, ఇక్కడ ఈనెలు ఆకు పొడవుకు సమాంతరంగా ఉంటాయి. ద్విదళ బీజాలు సాధారణంగా తల్లి వేరు వ్యవస్థను మరియు జాలాకార (వల లాంటి) ఈనెల వ్యాపనం కలిగిన ఆకులను కలిగి ఉంటాయి."
  },
  {
    "id": 451,
    "question": "The following disease causes due to particles of mercury (TSTET 01 June 2024)\nకింది వాటిలో పాదరసం కణాల వల్ల ఏ వ్యాధి వస్తుంది?",
    "options": [
      "Minamata\nమినిమాటా",
      "Pellagra\nపెల్లాగ్రా",
      "Diarrhea\nఅతిసారం",
      "Covid-19\nకోవిడ్-19"
    ],
    "correctAnswer": 0,
    "explanation": "మినిమాటా వ్యాధి అనేది తీవ్రమైన పాదరసం విషప్రయోగం వల్ల కలిగే ఒక నరాల సంబంధిత రుగ్మత. ఇది మొదట జపాన్‌లోని మినిమాటాలో గుర్తించబడింది, అక్కడ మిథైల్మెర్క్యురీతో కలుషితమైన పారిశ్రామిక వ్యర్థ జలాలను మినిమాటా బేలోకి విడుదల చేశారు, ఇది స్థానిక నివాసితులు తినే చేపలు మరియు షెల్ఫిష్‌లను విషపూరితం చేసింది."
  },
  {
    "id": 452,
    "question": "The doctor who treats the disorders and diseases of the eyes is known as (TSTET 31 May 2024)\nకంటి రుగ్మతలు మరియు వ్యాధులకు చికిత్స చేసే వైద్యుడిని ఏమని పిలుస్తారు?",
    "options": [
      "Ophthalmologist\nనేత్ర వైద్య నిపుణుడు (ఆప్తమాలజిస్ట్)",
      "Dermatologist\nచర్మ వ్యాధి నిపుణుడు (డెర్మటాలజిస్ట్)",
      "Oncologist\nక్యాన్సర్ నిపుణుడు (ఆంకాలజిస్ట్)",
      "Cosmetologist\nసౌందర్య నిపుణుడు (కాస్మోటాలజిస్ట్)"
    ],
    "correctAnswer": 0,
    "explanation": "నేత్ర వైద్య నిపుణుడు (ఆప్తమాలజిస్ట్) కంటి వ్యాధులు మరియు రుగ్మతల నిర్ధారణ మరియు చికిత్సలో నైపుణ్యం కలిగిన వైద్యుడు. చర్మ వ్యాధి నిపుణుడు చర్మ సంబంధిత పరిస్థితులకు చికిత్స చేస్తారు, క్యాన్సర్ నిపుణుడు క్యాన్సర్‌కు చికిత్స చేస్తారు మరియు సౌందర్య నిపుణుడు అందం చికిత్సలను అందిస్తారు."
  },
  {
    "id": 453,
    "question": "Night blindness is caused due to deficiency of this vitamin in our food (TSTET 31 May 2024)\nమన ఆహారంలో ఈ విటమిన్ లోపం వల్ల రేచీకటి వస్తుంది",
    "options": [
      "Vitamin A\nవిటమిన్ ఎ",
      "Vitamin C\nవిటమిన్ సి",
      "Vitamin D\nవిటమిన్ డి",
      "Vitamin B\nవిటమిన్ బి"
    ],
    "correctAnswer": 0,
    "explanation": "విటమిన్ ఎ దృష్టికి, ముఖ్యంగా తక్కువ కాంతి పరిస్థితులలో చాలా ముఖ్యమైనది. ఇది రెటీనాలోని రోడాప్సిన్ అనే వర్ణద్రవ్యంలో ఒక ముఖ్య భాగం, ఇది చీకటిలో కన్ను చూడటానికి సహాయపడుతుంది. విటమిన్ ఎ లోపం రేచీకటికి (నిక్టలోపియా) దారితీస్తుంది."
  },
  {
    "id": 454,
    "question": "Which one of the following is viviparous animal? (TSTET 31 May 2024)\nకింది వాటిలో శిశూత్పాదక జంతువు ఏది?",
    "options": [
      "Frog\nకప్ప",
      "Hen\nకోడి",
      "Crocodile\nమొసలి",
      "Cow\nఆవు"
    ],
    "correctAnswer": 3,
    "explanation": "శిశూత్పాదక జంతువులు పిల్లలకు జన్మనిస్తాయి. ఆవులు క్షీరదాలు మరియు అవి దూడలకు జన్మనిస్తాయి. కప్పలు, కోళ్లు (పక్షులు), మరియు మొసళ్ళు అండోత్పాదకాలు, అంటే అవి గుడ్లు పెడతాయి, అవి తరువాత పొదుగుతాయి."
  },
  {
    "id": 455,
    "question": "Humans, animals and plants live in this layer of Earth's atmosphere (TSTET 31 May 2024)\nమానవులు, జంతువులు మరియు మొక్కలు భూమి యొక్క ఈ వాతావరణ పొరలో నివసిస్తాయి",
    "options": [
      "Exosphere\nఎక్సో ఆవరణం",
      "Stratosphere\nస్ట్రాటో ఆవరణం",
      "Troposphere\nట్రోపో ఆవరణం",
      "Mesosphere\nమీసో ఆవరణం"
    ],
    "correctAnswer": 2,
    "explanation": "ట్రోపో ఆవరణం భూమి యొక్క వాతావరణంలో అత్యల్ప పొర, ఇది ఉపరితలం నుండి పైకి విస్తరించి ఉంటుంది. ఇది మనం శ్వాసించే గాలిని కలిగి ఉంటుంది మరియు మానవులు, జంతువులు మరియు మొక్కలతో సహా అన్ని వాతావరణ మరియు జీవ రూపాలు ఇక్కడే ఉంటాయి."
  },
  {
    "id": 456,
    "question": "In case of sun stroke, we should give this to the patient after the body regains normal temperature (TSTET 31 May 2024)\nవడదెబ్బ తగిలినప్పుడు, శరీరం సాధారణ ఉష్ణోగ్రతకు వచ్చిన తర్వాత రోగికి దీనిని ఇవ్వాలి",
    "options": [
      "Glucose solution\nగ్లూకోజ్ ద్రావణం",
      "ORS solution\nORS ద్రావణం",
      "Iodine solution\nఅయోడిన్ ద్రావణం",
      "Milk of Magnesia\nమిల్క్ ఆఫ్ మెగ్నీషియా"
    ],
    "correctAnswer": 1,
    "explanation": "వడదెబ్బ తీవ్రమైన నిర్జలీకరణానికి మరియు ఎలక్ట్రోలైట్ల నష్టానికి దారితీస్తుంది. శరీరాన్ని చల్లబరిచిన తర్వాత, శరీరంలో కోల్పోయిన నీరు, లవణాలు (ఎలక్ట్రోలైట్లు) మరియు చక్కెరను త్వరగా మరియు సమర్థవంతంగా తిరిగి నింపడానికి ఓరల్ రీహైడ్రేషన్ సొల్యూషన్ (ORS) ఇవ్వబడుతుంది."
  },
  {
    "id": 457,
    "question": "Body builders require to make more muscles and body mass. For this purpose, they need to take a diet which is rich in (TSTET 31 May 2024)\nశరీర దారుఢ్యాన్ని పెంచేవారు కండరాలు మరియు శరీర ద్రవ్యరాశిని పెంచుకోవాలి. ఈ ప్రయోజనం కోసం, వారు ఏ పోషకాలు అధికంగా ఉండే ఆహారం తీసుకోవాలి?",
    "options": [
      "Proteins\nప్రోటీన్లు",
      "Vitamins\nవిటమిన్లు",
      "Roughages\nపీచుపదార్థాలు",
      "Minerals\nఖనిజాలు"
    ],
    "correctAnswer": 0,
    "explanation": "ప్రోటీన్లు శరీరం యొక్క నిర్మాణ విభాగాలు. అవి కణజాలాలను, ముఖ్యంగా కండర కణజాలాన్ని మరమ్మత్తు చేయడానికి మరియు నిర్మించడానికి అవసరం, ఇది బాడీబిల్డింగ్ వంటి తీవ్రమైన వ్యాయామం సమయంలో విచ్ఛిన్నమవుతుంది."
  },
  {
    "id": 458,
    "question": "The main root of the plant is called as (TSTET 31 May 2024)\nమొక్క యొక్క ప్రధాన వేరును ఏమని పిలుస్తారు?",
    "options": [
      "Lateral root\nపార్శ్వ వేరు",
      "Tap root\nతల్లి వేరు",
      "Fibrous root\nపీచు వేరు",
      "Parallel root\nసమాంతర వేరు"
    ],
    "correctAnswer": 1,
    "explanation": "తల్లి వేరు అనేది పెద్ద, కేంద్ర మరియు ప్రధాన వేరు, దీని నుండి చిన్న, పార్శ్వ వేర్లు మొలకెత్తుతాయి. ఈ వ్యవస్థ క్యారెట్లు మరియు డాండెలైన్లు వంటి అనేక ద్విదళ బీజ మొక్కలలో సాధారణం. పీచు వేరు వ్యవస్థలో ఒకే పరిమాణంలో ఉండే వేర్ల సమూహం ఉంటుంది."
  },
  {
    "id": 459,
    "question": "The percentage of water in the human body's weight (TSTET 31 May 2024)\nమానవ శరీర బరువులో నీటి శాతం ఎంత?",
    "options": [
      "50%",
      "60%",
      "70%",
      "80%"
    ],
    "correctAnswer": 2,
    "explanation": "నీరు మానవ శరీరంలో ప్రధాన భాగం. సగటున, ఒక వయోజన మానవుని శరీరం సుమారు 60-70% నీటితో ఉంటుంది. ఇది వాస్తవంగా ప్రతి శారీరక విధికి అవసరం. ఇచ్చిన ఎంపికలలో, 70% అత్యంత సరైన సమాధానం."
  },
  {
    "id": 460,
    "question": "Among the following. identify the Hydroelectric power station located in Telangana (TSTET 31 May 2024)\nకింది వాటిలో తెలంగాణలో ఉన్న జలవిద్యుత్ కేంద్రాన్ని గుర్తించండి",
    "options": [
      "NTPC Ramagundam\nNTPC రామగుండం",
      "Jaipur power plant\nజైపూర్ పవర్ ప్లాంట్",
      "Kakatiya power plant\nకాకతీయ పవర్ ప్లాంట్",
      "Nagarjuna Sagar Power plant\nనాగార్జున సాగర్ పవర్ ప్లాంట్"
    ],
    "correctAnswer": 3,
    "explanation": "కృష్ణా నదిపై నిర్మించిన నాగార్జున సాగర్ డ్యామ్ వద్ద తెలంగాణకు సేవలు అందించే ఒక ప్రధాన జలవిద్యుత్ కేంద్రం ఉంది. జాబితా చేయబడిన ఇతర ఎంపికలు (NTPC రామగుండం, జైపూర్, కాకతీయ) థర్మల్ పవర్ స్టేషన్లు, ఇవి బొగ్గును కాల్చడం ద్వారా విద్యుత్‌ను ఉత్పత్తి చేస్తాయి."
  },
  {
    "id": 461,
    "question": "Identify the contagious disease that spread during floods (TSTET 31 May 2024)\nవరదల సమయంలో వ్యాపించే అంటువ్యాధిని గుర్తించండి",
    "options": [
      "Cholera\nకలరా",
      "T.B.\nక్షయ",
      "Dengue\nడెంగ్యూ",
      "AIDS\nఎయిడ్స్"
    ],
    "correctAnswer": 0,
    "explanation": "వరదలు తరచుగా త్రాగునీటి వనరులను కలుషితం చేస్తాయి. కలరా అనేది కలుషితమైన నీటి ద్వారా వేగంగా వ్యాపించే బాక్టీరియా వల్ల కలిగే నీటి ద్వారా సంక్రమించే వ్యాధి, ఇది వరదల సమయంలో మరియు తరువాత వ్యాప్తికి దారితీస్తుంది. డెంగ్యూ దోమల ద్వారా, క్షయ గాలి ద్వారా, మరియు ఎయిడ్స్ శరీర ద్రవాల ద్వారా వ్యాపిస్తుంది."
  },
  {
    "id": 462,
    "question": "Which juice DOES NOT contain enzymes? (TSTET 31 May 2024)\nఏ రసంలో ఎంజైమ్‌లు ఉండవు?",
    "options": [
      "Gastric juice\nజఠర రసం",
      "Bile juice\nపైత్య రసం",
      "Pancreatic juice\nక్లోమ రసం",
      "Intestinal juice\nఆంత్ర రసం"
    ],
    "correctAnswer": 1,
    "explanation": "కాలేయం ద్వారా ఉత్పత్తి అయ్యే పైత్య రసం, కొవ్వులను ఎమల్సిఫై చేయడం ద్వారా (పెద్ద కొవ్వు గ్లోబుల్స్‌ను చిన్న బిందువులుగా విచ్ఛిన్నం చేయడం) వాటి జీర్ణక్రియలో సహాయపడుతుంది. అయితే, ఇందులో జీర్ణ ఎంజైమ్‌లు ఏవీ ఉండవు. జఠర, క్లోమ మరియు ఆంత్ర రసాలు అన్నీ ఆహారాన్ని విచ్ఛిన్నం చేసే ఎంజైమ్‌లతో సమృద్ధిగా ఉంటాయి."
  },
  {
    "id": 463,
    "question": "The relationship between the distance on a map and the actual distance on the Earth is called the (TSTET 31 May 2024)\nపటంపై ఉన్న దూరానికి మరియు భూమిపై ఉన్న వాస్తవ దూరానికి మధ్య ఉన్న సంబంధాన్ని ఏమని పిలుస్తారు?",
    "options": [
      "grid mile\nగ్రిడ్ మైలు",
      "map scale\nపటం స్కేలు",
      "yard stick\nగజం బద్ద",
      "micro metre\nమైక్రో మీటర్"
    ],
    "correctAnswer": 1,
    "explanation": "పటం స్కేలు అనేది పటంపై ఉన్న దూరానికి మరియు సంబంధిత వాస్తవ-ప్రపంచ దూరానికి మధ్య ఉన్న నిష్పత్తిని సూచిస్తుంది. ఇది వినియోగదారులను పటాన్ని ఉపయోగించి నేలపై దూరాలను కచ్చితంగా కొలవడానికి అనుమతిస్తుంది."
  },
  {
    "id": 464,
    "question": "The Deccan plateau has a high and steep edge (scarp) on the west. This is known as the (TSTET 31 May 2024)\nదక్కన్ పీఠభూమికి పశ్చిమాన ఎత్తైన మరియు నిట్రమైన అంచు (స్కార్ప్) ఉంది. దీనిని ఏమని పిలుస్తారు?",
    "options": [
      "Western Ghats\nపశ్చిమ కనుమలు",
      "Satpura Range\nసాత్పురా శ్రేణి",
      "Aravalli Range\nఆరావళి శ్రేణి",
      "Vindhya Range\nవింధ్య శ్రేణి"
    ],
    "correctAnswer": 0,
    "explanation": "పశ్చిమ కనుమలు దక్కన్ పీఠభూమి యొక్క నిట్రమైన పశ్చిమ అంచును (ఎస్карప్మెంట్) ఏర్పరుస్తాయి. ఈ పర్వత శ్రేణి భారతదేశం యొక్క పశ్చిమ తీరానికి సమాంతరంగా నడుస్తుంది, పీఠభూమిని ఇరుకైన తీర మైదానం నుండి వేరు చేస్తుంది."
  },
  {
    "id": 465,
    "question": "The God represented in Elephanta Caves sculpture is (TSTET 31 May 2024)\nఎలిఫెంటా గుహల శిల్పంలో ప్రాతినిధ్యం వహించే దేవుడు ఎవరు?",
    "options": [
      "Vishnu\nవిష్ణువు",
      "Shiva\nశివుడు",
      "Ganapathi\nగణపతి",
      "Brahma\nబ్రహ్మ"
    ],
    "correctAnswer": 1,
    "explanation": "ఎలిఫెంటా గుహలు ప్రధానంగా హిందూ దేవుడైన శివుడికి అంకితం చేయబడిన శిల్ప గుహల సముదాయం. అత్యంత ప్రసిద్ధ శిల్పం త్రిమూర్తి, ఇది సృష్టికర్త, సంరక్షకుడు మరియు వినాశకుడిగా శివుని మూడు తలల ప్రాతినిధ్యం."
  },
  {
    "id": 466,
    "question": "Gautam Buddha delivered his first sermon at (TSTET 31 May 2024)\nగౌతమ బుద్ధుడు తన మొదటి ఉపన్యాసాన్ని ఎక్కడ ఇచ్చాడు?",
    "options": [
      "Vaishali\nవైశాలి",
      "Lumbini\nలుంబిని",
      "Sarnath\nసారనాథ్",
      "Bodh Gaya\nబోధ గయ"
    ],
    "correctAnswer": 2,
    "explanation": "బోధ గయలో జ్ఞానోదయం పొందిన తరువాత, గౌతమ బుద్ధుడు సారనాథ్ (వారణాసి సమీపంలో)లోని జింకల వనానికి ప్రయాణించి, అక్కడ తన మొదటి ఐదుగురు శిష్యులకు తన మొదటి ఉపన్యాసాన్ని ఇచ్చాడు. ఈ సంఘటనను 'ధర్మ చక్ర ప్రవర్తన' లేదా 'ధర్మ చక్రాన్ని కదలికలో ఉంచడం' అని అంటారు."
  },
  {
    "id": 467,
    "question": "The most extensively used metal in Indus Valley Civilization was (TSTET 31 May 2024)\nసింధు లోయ నాగరికతలో అత్యంత విస్తృతంగా ఉపయోగించిన లోహం ఏది?",
    "options": [
      "silver\nవెండి",
      "bronze\nకంచు",
      "copper\nరాగి",
      "gold\nబంగారం"
    ],
    "correctAnswer": 2,
    "explanation": "సింధు లోయ నాగరికత కంచు యుగానికి చెందినది. వారు కంచు (రాగి మరియు తగరం యొక్క మిశ్రమం) తయారీకి ప్రసిద్ధి చెందినప్పటికీ, పనిముట్లు, పాత్రలు, ఆయుధాలు మరియు విగ్రహాల తయారీకి రాగి అత్యంత విస్తృతంగా మరియు విరివిగా ఉపయోగించబడిన లోహం."
  },
  {
    "id": 468,
    "question": "Ruins of Vijayanagar empire can be seen at (TSTET 31 May 2024)\nవిజయనగర సామ్రాజ్య శిథిలాలను ఎక్కడ చూడవచ్చు?",
    "options": [
      "Hampi\nహంపి",
      "Madurai\nమదురై",
      "Vijayanagaram\nవిజయనగరం",
      "Mysuru\nమైసూరు"
    ],
    "correctAnswer": 0,
    "explanation": "ప్రస్తుత కర్ణాటకలోని హంపి, చారిత్రక విజయనగర సామ్రాజ్యానికి రాజధాని. హంపిలోని స్మారక కట్టడాల సమూహం ఒక యునెస్కో ప్రపంచ వారసత్వ ప్రదేశం మరియు ఇది పూర్వ సామ్రాజ్యం యొక్క అద్భుతమైన శిథిలాలను కలిగి ఉంది."
  },
  {
    "id": 469,
    "question": "Bhoodan Movement was started by (TSTET 31 May 2024)\nభూదానోద్యమాన్ని ఎవరు ప్రారంభించారు?",
    "options": [
      "Mahatma Gandhi\nమహాత్మా గాంధీ",
      "Jaya Prakash Narayan\nజయ ప్రకాష్ నారాయణ్",
      "Ravi Narayan Reddy\nరవి నారాయణ రెడ్డి",
      "Vinoba Bhave\nవినోబా భావే"
    ],
    "correctAnswer": 3,
    "explanation": "భూదానోద్యమం (భూమి బహుమతి ఉద్యమం) 1951లో తెలంగాణలోని పోచంపల్లిలో ఆచార్య వినోబా భావే ప్రారంభించిన స్వచ్ఛంద భూ సంస్కరణల ఉద్యమం. ఆయన ధనిక భూస్వాములను తమ భూమిలో కొంత భాగాన్ని భూమిలేని వారికి స్వచ్ఛందంగా ఇవ్వమని కోరారు."
  },
  {
    "id": 470,
    "question": "73rd Constitution Amendment Act came into force in the year (TSTET 31 May 2024)\n73వ రాజ్యాంగ సవరణ చట్టం ఏ సంవత్సరంలో అమల్లోకి వచ్చింది?",
    "options": [
      "1992",
      "1993",
      "1991",
      "1994"
    ],
    "correctAnswer": 1,
    "explanation": "పంచాయతీ రాజ్ (గ్రామీణ స్థానిక ప్రభుత్వ) సంస్థలకు రాజ్యాంగ హోదా కల్పించే 73వ రాజ్యాంగ సవరణ చట్టం, 1992లో పార్లమెంటుచే ఆమోదించబడింది మరియు ఏప్రిల్ 24, 1993న అమల్లోకి వచ్చింది."
  },
  {
    "id": 471,
    "question": "The following river is NOT flowing in Telangana (TSTET 31 May 2024)\nకింది నదులలో ఏది తెలంగాణలో ప్రవహించదు?",
    "options": [
      "Manjeera\nమంజీరా",
      "Pranahita\nప్రాణహిత",
      "Tungabhadra\nతుంగభద్ర",
      "Kaveri\nకావేరి"
    ],
    "correctAnswer": 3,
    "explanation": "కావేరి నది కర్ణాటక మరియు తమిళనాడు రాష్ట్రాల గుండా ప్రవహిస్తుంది. మంజీరా, ప్రాణహిత మరియు తుంగభద్ర నదులు అన్నీ గోదావరి లేదా కృష్ణా నదీ వ్యవస్థలలో భాగం మరియు తెలంగాణ రాష్ట్రం గుండా ప్రవహిస్తాయి."
  },
  {
    "id": 472,
    "question": "Bharatpur bird sanctuary is located in this state (TSTET 31 May 2024)\nభరత్‌పూర్ పక్షుల అభయారణ్యం ఈ రాష్ట్రంలో ఉంది",
    "options": [
      "Assam\nఅస్సాం",
      "Madhya Pradesh\nమధ్యప్రదేశ్",
      "Gujarat\nగుజరాత్",
      "Rajasthan\nరాజస్థాన్"
    ],
    "correctAnswer": 3,
    "explanation": "భరత్‌పూర్ పక్షుల అభయారణ్యం, అధికారికంగా కియోలాడియో నేషనల్ పార్క్ అని పిలువబడుతుంది, ఇది రాజస్థాన్‌లోని భరత్‌పూర్‌లో ఉన్న ఒక ప్రసిద్ధ పక్షుల అభయారణ్యం. ఇది దాని గొప్ప పక్షిజాలానికి ప్రసిద్ధి చెందిన యునెస్కో ప్రపంచ వారసత్వ ప్రదేశం."
  },
  {
    "id": 473,
    "question": "In Hyderabad, 'Sadar festival' is celebrated annually along with this festival (TSTET 31 May 2024)\nహైదరాబాద్‌లో 'సదర్ పండుగ'ను ఏటా ఈ పండుగతో పాటు జరుపుకుంటారు",
    "options": [
      "Diwali\nదీపావళి",
      "Sankranthi\nసంక్రాంతి",
      "Dasara\nదసరా",
      "Bonalu\nబోనాలు"
    ],
    "correctAnswer": 0,
    "explanation": "సదర్ పండుగ అనేది హైదరాబాద్‌లోని యాదవ సంఘం జరుపుకునే దున్నపోతుల ఉత్సవం. ఇది దీపావళి మరుసటి రోజు జరుగుతుంది మరియు అలంకరించిన దున్నపోతులను ఊరేగించడం ఇందులో భాగం."
  },
  {
    "id": 474,
    "question": "Among the following crops, the highest-producing crop in Telangana is (TSTET 31 May 2024)\nకింది పంటలలో, తెలంగాణలో అత్యధికంగా ఉత్పత్తి అయ్యే పంట ఏది?",
    "options": [
      "ground nut\nవేరుశెనగ",
      "cotton\nపత్తి",
      "red gram\nకంది",
      "Millets\nచిరుధాన్యాలు"
    ],
    "correctAnswer": 1,
    "explanation": "తెలంగాణ భారతదేశంలోని ఒక ప్రధాన వ్యవసాయ రాష్ట్రం, మరియు సాగు విస్తీర్ణం మరియు మొత్తం ఉత్పత్తి రెండింటి పరంగా పత్తి దాని అత్యంత ముఖ్యమైన వాణిజ్య పంటలలో ఒకటి."
  },
  {
    "id": 475,
    "question": "As per the National Curriculum Framework-2005, the number of themes formulated in EVS for classes 3 and 5 is (TSTET 31 May 2024)\nజాతీయ పాఠ్యప్రణాళిక ఫ్రేమ్‌వర్క్-2005 ప్రకారం, 3 మరియు 5 తరగతులకు EVSలో రూపొందించబడిన ఇతివృత్తాల సంఖ్య ఎంత?",
    "options": [
      "4",
      "7",
      "5",
      "6"
    ],
    "correctAnswer": 3,
    "explanation": "NCF-2005 ప్రకారం, III నుండి V తరగతుల వరకు EVS పాఠ్యప్రణాళికను ఆరు ప్రధాన ఇతివృత్తాల చుట్టూ నిర్వహించాలని సిఫార్సు చేయబడింది: 1. కుటుంబం మరియు స్నేహితులు, 2. ఆహారం, 3. ఆశ్రయం, 4. నీరు, 5. ప్రయాణం, మరియు 6. మనం తయారు చేసేవి మరియు చేసే పనులు."
  },
  {
    "id": 476,
    "question": "Question and options are illegible in the provided document. (TSTET 31 May 2024)\nఅందించిన పత్రంలో ప్రశ్న మరియు ఎంపికలు అస్పష్టంగా ఉన్నాయి.",
    "options": [
      "Illegible\nఅస్పష్టం",
      "Illegible\nఅస్పష్టం",
      "Illegible\nఅస్పష్టం",
      "Illegible\nఅస్పష్టం"
    ],
    "correctAnswer": 0,
    "explanation": "ఈ ప్రశ్నకు సంబంధించిన మూల పత్రం (ప్రశ్న సంఖ్య 146) నాణ్యత చాలా తక్కువగా ఉంది మరియు దానిని కచ్చితంగా అనువదించడం సాధ్యపడలేదు."
  },
  {
    "id": 477,
    "question": "Which of the following does NOT constitute a part of the teaching-learning process in EVS? (TSTET 31 May 2024)\nకింది వాటిలో ఏది EVSలో బోధన-అభ్యాసన ప్రక్రియలో భాగం కాదు?",
    "options": [
      "Field Trips\nక్షేత్ర పర్యటనలు",
      "Textbooks\nపాఠ్యపుస్తకాలు",
      "Peer Assessment\nసహచర మూల్యాంకనం",
      "Storytelling\nకథలు చెప్పడం"
    ],
    "correctAnswer": 2,
    "explanation": "క్షేత్ర పర్యటనలు, పాఠ్యపుస్తకాలు మరియు కథలు చెప్పడం అనేవి EVS బోధించడానికి మరియు నేర్చుకోవడానికి ఉపయోగించే పద్ధతులు మరియు వనరులు. అయితే, సహచర మూల్యాంకనం అనేది విద్యార్థులు తమ సహచరుల పనిని అంచనా వేసే ఒక మూల్యాంకన రూపం. ఇది మొత్తం విద్యా ప్రక్రియలో భాగం అయినప్పటికీ, ఇది ప్రత్యక్ష బోధన-అభ్యాసన పద్ధతి కాకుండా ప్రధానంగా ఒక మూల్యాంకన పద్ధతి."
  },
  {
    "id": 478,
    "question": "The primary purpose of conducting a field trip in EVS is (TSTET 31 May 2024)\nEVSలో క్షేత్ర పర్యటన నిర్వహించడం యొక్క ప్రాథమిక ఉద్దేశ్యం ఏమిటి?",
    "options": [
      "To provide direct experience\nప్రత్యక్ష అనుభవాన్ని అందించడం",
      "To develop social skills among children\nపిల్లలలో సామాజిక నైపుణ్యాలను అభివృద్ధి చేయడం",
      "To complete the syllabus on time\nసిలబస్‌ను సకాలంలో పూర్తి చేయడం",
      "To provide recreation and fun for children\nపిల్లలకు వినోదం మరియు సరదాను అందించడం"
    ],
    "correctAnswer": 0,
    "explanation": "పర్యావరణ అధ్యయనాలలో క్షేత్ర పర్యటన యొక్క ప్రధాన విద్యా లక్ష్యం విద్యార్థులకు ప్రత్యక్ష, చేతితో చేసే మరియు వాస్తవ-ప్రపంచ అనుభవాలను అందించడం. ఈ రకమైన అనుభవపూర్వక అభ్యాసం తరగతి గదిలో నేర్చుకున్న భావనలను పటిష్టం చేయడానికి సహాయపడుతుంది. వినోదం మరియు సామాజిక నైపుణ్యాలు సానుకూల దుష్ప్రభావాలు అయినప్పటికీ, ప్రాథమిక ఉద్దేశ్యం అనుభవపూర్వక అభ్యాసం."
  },
  {
    "id": 479,
    "question": "While teaching the theme 'Travel' in EVS, a teacher should focus on (TSTET 31 May 2024)\nEVSలో 'ప్రయాణం' అనే ఇతివృత్తాన్ని బోధించేటప్పుడు, ఒక ఉపాధ్యాయుడు దేనిపై దృష్టి పెట్టాలి?",
    "options": [
      "Different modes of transport\nవివిధ రకాల రవాణా మార్గాలు",
      "Communication and its relevance with travel\nప్రయాణంతో సమాచారం మరియు దాని సంబంధం",
      "Use of different types of fuels in vehicles\nవాహనాలలో వివిధ రకాల ఇంధనాల వాడకం",
      "All of the above\nపైన పేర్కొన్నవన్నీ"
    ],
    "correctAnswer": 3,
    "explanation": "'ప్రయాణం' అనే ఇతివృత్తం బహుముఖమైనది. ఒక సమర్థవంతమైన బోధనా విధానం ప్రజలు ప్రయాణించే వివిధ మార్గాలు (రవాణా విధానాలు), వాటిని నడిపించే ఇంధనాలు మరియు వాటి పర్యావరణ ప్రభావం, మరియు చరిత్ర అంతటా ప్రయాణం మరియు సమాచారం మధ్య సంబంధం వంటి వివిధ అంశాలను కవర్ చేయాలి."
  },
  {
    "id": 480,
    "question": "Which of the following is an effective tool for portfolio assessment in EVS? (TSTET 31 May 2024)\nEVSలో పోర్ట్‌ఫోలియో మూల్యాంకనం కోసం కింది వాటిలో ఏది సమర్థవంతమైన సాధనం?",
    "options": [
      "Worksheets\nవర్క్‌షీట్‌లు",
      "Oral questions\nమౌఖిక ప్రశ్నలు",
      "Anecdotal records\nఉదంత రికార్డులు",
      "End-of-term examination\nటర్మ్-ఎండ్ పరీక్ష"
    ],
    "correctAnswer": 2,
    "explanation": "పోర్ట్‌ఫోలియో అనేది పెరుగుదలను చూపించడానికి కాలక్రమేణా ఒక విద్యార్థి పని యొక్క సమాహారం. ఉదంత రికార్డులు, విద్యార్థి యొక్క నైపుణ్యాలు, ప్రవర్తనలు మరియు వివిధ సందర్భాలలో పురోగతి గురించి సంక్షిప్త ఉపాధ్యాయుల పరిశీలనలు, పోర్ట్‌ఫోలియోలో చేర్చడానికి ఒక అద్భుతమైన గుణాత్మక సాధనం. అవి వర్క్‌షీట్‌లు లేదా పరీక్షలు సంగ్రహించలేని అభ్యాసం యొక్క గొప్ప, సందర్భోచిత సాక్ష్యాలను అందిస్తాయి."
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