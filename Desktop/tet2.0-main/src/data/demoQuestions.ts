import { DEFAULT_LANGUAGE, type QuestionLanguage } from "@/lib/questions/languages";

export type DemoQuestion = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

type DemoQuestionByLanguage = Partial<Record<QuestionLanguage, DemoQuestion[]>>;

type DemoQuestionBank = Record<string, DemoQuestionByLanguage>;

const childDevelopmentPaper2English: DemoQuestion[] = [
  {
    id: "childdev-paper-2-eng-practice-1",
    question: "The leadership style of teacher who is sensitive to feelings of her students is (TSTET 19 June 2025)",
    options: ["Uninvolved", "Autocratic", "Authoritarian", "Democratic"],
    correctAnswer: 3,
    explanation:
      "A democratic leadership style in the classroom is characterized by collaboration, shared decision-making, and a high level of concern for the well-being and feelings of students. A democratic teacher values student input and fosters a supportive and respectful learning environment. Autocratic and authoritarian styles are dictatorial, while an uninvolved style is neglectful.",
  },
  {
    id: "childdev-paper-2-eng-practice-2",
    question: "Identify the INCORRECT statement relating to Vygotsky's theory. (TSTET 20 Jan 2025)",
    options: [
      "Social Environment of the child has a big impact on child's learning",
      "Children construct their own knowledge",
      "Children's mind is like a blank slate on which any knowledge can be imposed",
      "Language plays an important role in mental development",
    ],
    correctAnswer: 2,
    explanation:
      "Lev Vygotsky was a social constructivist who believed that children actively construct knowledge through social interaction and language. The idea that a child's mind is a 'blank slate' or 'tabula rasa' is associated with empiricism (John Locke) and is contrary to Vygotsky's view. He argued that children are not passive recipients of information but active agents in their own learning.",
  },
  {
    id: "childdev-paper-2-eng-practice-3",
    question: "Creation of learning environment for a class in the school is the responsibility of. (TSTET 2016)",
    options: ["Teacher", "Mandal Educational Officer", "Student Leader", "Local Authority"],
    correctAnswer: 0,
    explanation:
      "While many stakeholders contribute to the overall school atmosphere, the primary responsibility for creating a positive, safe, and stimulating learning environment within a specific classroom rests with the teacher. The teacher manages the physical setup, the social-emotional climate, and the instructional activities.",
  },
  {
    id: "childdev-paper-2-eng-practice-4",
    question:
      "The psycho social conflict of Industry vs. Inferiority' according to Erickson belongs to this stage of development (TSTET 20 May 2024)",
    options: ["Later childhood", "Neonate", "Adolescence", "Infancy"],
    correctAnswer: 0,
    explanation:
      "According to Erik Erikson's theory of psychosocial development, the Industry vs. Inferiority stage occurs during later childhood (approximately ages 6-12). In this stage, children focus on mastering academic and social skills, and successful resolution leads to a sense of competence, while failure can result in feelings of inadequacy.",
  },
  {
    id: "childdev-paper-2-eng-practice-5",
    question: "This type of environment is suitable for emotional development of children (APTET 2011)",
    options: ["Indifferent", "Dominant", "Accommodative", "Permissive"],
    correctAnswer: 2,
    explanation:
      "An accommodative (or authoritative) environment is most conducive to healthy emotional development. This approach combines warmth, support, and responsiveness to a child's needs with clear, consistent boundaries. It helps children feel safe, understood, and valued, which allows them to learn to regulate their emotions effectively. Dominant, indifferent, and overly permissive styles can be detrimental.",
  },
];

const childDevelopmentPaper2Urdu: DemoQuestion[] = [
  {
    id: "childdev-paper-2-urdu-practice-1",
    question:
      "Children learn to frame rules and play in an organized manner in this type of play. (TSTET 19 June 2025)\nبچے اس قسم کے کھیل میں اصول بنانا اور منظم طریقے سے کھیلنا سیکھتے ہیں۔",
    options: [
      "Parallel play\nمتوازی کھیل",
      "Cooperative play\nتعاونی کھیل",
      "Solitary play\nتنہا کھیل",
      "Onlooker play\nتماشائی کھیل",
    ],
    correctAnswer: 1,
    explanation:
      "ملڈریڈ پارٹن کے سماجی کھیل کے مراحل کے مطابق، **تعاونی کھیل** سب سے ترقی یافتہ شکل ہے۔ اس کی خصوصیت یہ ہے کہ بچے ایک مشترکہ مقصد کے ساتھ مل کر کھیلتے ہیں، کردار ادا کرتے ہیں، اور اپنی سرگرمی کو منظم کرتے ہیں۔ اس عمل میں فطری طور پر اصولوں پر بحث کرنا اور انہیں مرتب کرنا شامل ہے تاکہ یہ یقینی بنایا جا سکے کہ کھیل یا سرگرمی ہر ایک کے لیے آسانی سے کام کرے۔",
  },
  {
    id: "childdev-paper-2-urdu-practice-2",
    question:
      "One of the following is NOT correct with regard to teaching. (TSTET 2016)\nمندرجہ ذیل میں سے ایک تدریس کے حوالے سے درست نہیں ہے۔",
    options: [
      "Directional\nسمتی",
      "Motivational\nمحرک",
      "Interesting\nدلچسپ",
      "Enforcing\nنافذ کرنا",
    ],
    correctAnswer: 3,
    explanation:
      "مؤثر تدریس سمتی (رہنمائی فراہم کرنا)، محرک (دلچسپی پیدا کرنا)، اور دلچسپ (طلباء کو مشغول کرنا) ہونی چاہیے۔ 'نافذ کرنا' کی اصطلاح مجبوری یا طلباء کو سیکھنے پر مجبور کرنے کا مفہوم رکھتی ہے، جو جدید تدریسی اصولوں کے خلاف ہے جو ایک مثبت ماحول پیدا کرنے پر زور دیتے ہیں جہاں سیکھنا ایک رضاکارانہ اور بامعنی سرگرمی ہے۔",
  },
  {
    id: "childdev-paper-2-urdu-practice-3",
    question:
      "According to Operant Conditioning, which of the following has significant role in learning? (TSTET 18 June 2025)\nآپرینٹ کنڈیشننگ کے مطابق، مندرجہ ذیل میں سے کون سا سیکھنے میں اہم کردار ادا کرتا ہے؟",
    options: [
      "Consequence of behaviour\nرویے کا نتیجہ",
      "Insight\nبصیرت",
      "Known stimuli\nمعلوم محرکات",
      "Elicited response\nپیدا شدہ ردعمل",
    ],
    correctAnswer: 0,
    explanation:
      "بی ایف اسکینر کے تیار کردہ آپرینٹ کنڈیشننگ کے نظریے کے مطابق، رویے کو اس کے نتائج سے کنٹرول کیا جاتا ہے۔ تقویت (ایک مطلوبہ نتیجہ) کے بعد آنے والے رویوں کے دہرائے جانے کا امکان زیادہ ہوتا ہے، جبکہ سزا (ایک غیر مطلوبہ نتیجہ) کے بعد آنے والے رویوں کے دہرائے جانے کا امکان کم ہوتا ہے۔ اس طرح، رویے کا نتیجہ سیکھنے میں کلیدی عنصر ہے۔",
  },
  {
    id: "childdev-paper-2-urdu-practice-4",
    question:
      "In Pavlov's experiment made on dog, the dog salivates even at the sound of the bell. Here 'Salivation' is (TSTET 22 May 2024)\nپاولوف کے کتے پر کیے گئے تجربے میں، کتا گھنٹی کی آواز پر بھی رال ٹپکاتا ہے۔ یہاں 'رال ٹپکانا' ہے",
    options: [
      "conditioned response\nمشروط ردعمل",
      "unconditioned response\nغیر مشروط ردعمل",
      "conditioned stimulus\nمشروط محرک",
      "unconditioned stimulus\nغیر مشروط محرک",
    ],
    correctAnswer: 0,
    explanation:
      "اس کلاسک کنڈیشننگ منظر نامے میں، گھنٹی کے جواب میں رال ٹپکانا جو کنڈیشننگ کے بعد ہوتا ہے، مشروط ردعمل (CR) ہے۔ یہ ایک سیکھا ہوا ردعمل ہے جو پہلے غیر جانبدار محرک (گھنٹی) کے جواب میں ہوتا ہے، جو اب مشروط محرک (CS) بن گیا ہے۔ کھانے پر اصل، قدرتی رال ٹپکانا غیر مشروط ردعمل تھا۔",
  },
  {
    id: "childdev-paper-2-urdu-practice-5",
    question:
      "Developmental tasks of infancy fall into the domains of (TSTET 22 May 2024)\nشیر خوارگی کے ترقیاتی کام ان شعبوں میں آتے ہیں",
    options: [
      "Conative and Affective\nکونیٹو اور افیکٹو",
      "Cognitive and Affective\nکوگنیٹو اور افیکٹو",
      "Cognitive and Conative\nکوگنیٹو اور کونیٹو",
      "Cognitive, Affective and Conative\nکوگنیٹو، افیکٹو اور کونیٹو",
    ],
    correctAnswer: 3,
    explanation:
      "شیر خوارگی میں ترقی ہمہ جہت ہوتی ہے اور تمام بڑے شعبوں کا احاطہ کرتی ہے۔ کوگنیٹو ڈومین ذہنی عمل جیسے سوچنے اور سیکھنے سے مراد ہے۔ افیکٹو ڈومین جذبات، احساسات اور سماجی تعلقات سے متعلق ہے۔ کونیٹو (یا سائیکوموٹر) ڈومین جسمانی مہارتوں اور حرکت کی نشوونما پر مشتمل ہے۔ شیر خوارگی کے دوران یہ تینوں شعبے فعال طور پر ترقی کر رہے ہوتے ہیں۔",
  },
];

const childDevelopmentPaper2Telugu: DemoQuestion[] = [
  {
    id: "childdev-paper-2-te-practice-1",
    question:
      "Primary students are most affected by the (TSTET 22 May 2024)\nప్రాథమిక విద్యార్థులు దేని ద్వారా ఎక్కువగా ప్రభావితమవుతారు?",
    options: [
      "Aptitude of the teacher\nఉపాధ్యాయుని సహజ సామర్థ్యం",
      "Age of the teacher\nఉపాధ్యాయుని వయస్సు",
      "Appearance of the teacher\nఉపాధ్యాయుని రూపురేఖలు",
      "Personality of the teacher\nఉపాధ్యాయుని మూర్తిమత్వం",
    ],
    correctAnswer: 3,
    explanation:
      "చిన్న, ప్రాథమిక స్థాయి విద్యార్థులకు, తరగతి గది యొక్క భావోద్వేగ మరియు సామాజిక వాతావరణం చాలా ముఖ్యం. ఉపాధ్యాయుని మూర్తిమత్వం—వారి ఆప్యాయత, సహనం, ఉత్సాహం మరియు దయ—ఈ వాతావరణాన్ని తీవ్రంగా ప్రభావితం చేస్తుంది, ఇది మరే ఇతర అంశం కన్నా విద్యార్థుల ప్రేరణ, భద్రత మరియు అభ్యసనం పట్ల వైఖరిని ప్రభావితం చేస్తుంది.",
  },
  {
    id: "childdev-paper-2-te-practice-2",
    question:
      "Developmental tasks of infancy fall into the domains of (TSTET 22 May 2024)\nశైశవ దశ యొక్క వికాస కృత్యాలు ఏ రంగాలలోకి వస్తాయి?",
    options: [
      "Conative and Affective\nమానసిక చలనాత్మక మరియు భావావేశ",
      "Cognitive and Affective\nజ్ఞానాత్మక మరియు భావావేశ",
      "Cognitive and Conative\nజ్ఞానాత్మక మరియు మానసిక చలనాత్మక",
      "Cognitive, Affective and Conative\nజ్ఞానాత్మక, భావావేశ మరియు మానసిక చలనాత్మక",
    ],
    correctAnswer: 3,
    explanation:
      "శైశవ దశలో వికాసం సంపూర్ణంగా ఉంటుంది మరియు అన్ని ప్రధాన రంగాలను కవర్ చేస్తుంది. జ్ఞానాత్మక రంగం ఆలోచన మరియు అభ్యాసం వంటి మానసిక ప్రక్రియలను సూచిస్తుంది. భావావేశ రంగం భావోద్వేగాలు, అనుభూతులు మరియు సామాజిక సంబంధాలకు సంబంధించినది. మానసిక చలనాత్మక (లేదా సైకోమోటార్) రంగం శారీరక నైపుణ్యాలు మరియు కదలికల అభివృద్ధిని కలిగి ఉంటుంది. ఈ మూడు రంగాలు శైశవ దశలో చురుకుగా అభివృద్ధి చెందుతాయి.",
  },
  {
    id: "childdev-paper-2-te-practice-3",
    question:
      "'Dysgraphia' is a (TSTET 22 May 2024)\n'డిస్గ్రాఫియా' అనేది ఒక:",
    options: [
      "Mathematical disability\nగణిత వైకల్యం",
      "Writing disability\nరాత వైకల్యం",
      "Reading disability\nపఠన వైకల్యం",
      "Motor disability\nచలనాత్మక వైకల్యం",
    ],
    correctAnswer: 1,
    explanation:
      "డిస్గ్రాఫియా అనేది ఒక వ్యక్తి యొక్క రాత సామర్థ్యాలను ప్రభావితం చేసే ఒక నిర్దిష్ట అభ్యసన వైకల్యం. ఈ పదం 'డిస్' (అంటే కష్టం లేదా బలహీనత) మరియు 'గ్రాఫియా' (రాతకు సంబంధించినది)గా విభజించబడింది. ఇది చేతిరాత, స్పెల్లింగ్ మరియు కాగితంపై ఆలోచనలను వ్యవస్థీకరించడంలో ఇబ్బందులుగా వ్యక్తమవుతుంది.",
  },
  {
    id: "childdev-paper-2-te-practice-4",
    question:
      "Identify the concept introduced by Lev Vygotsky (TSTET 22 May 2024)\nలెవ్ వైగోట్స్కీ ప్రవేశపెట్టిన భావనను గుర్తించండి.",
    options: [
      "Object Permanence\nవస్తు స్థిరత్వం",
      "Assimilation\nసాంశీకరణం",
      "Accommodation\nఅనుగుణ్యం",
      "Zone of Proximal Development\nసామీప్య వికాస మండలం",
    ],
    correctAnswer: 3,
    explanation:
      "**సామీప్య వికాస మండలం (ZPD)** అనేది లెవ్ వైగోట్స్కీ యొక్క సామాజిక-సాంస్కృతిక సిద్ధాంతంలో ఒక ప్రాథమిక భావన. ఇది ఒక అభ్యాసకుడు ఇంకా స్వతంత్రంగా చేయలేని కానీ ఎక్కువ జ్ఞానమున్న ఇతరుల (MKO) మార్గదర్శకత్వంతో సాధించగల పనుల శ్రేణిని వివరిస్తుంది. ఇతర భావనలు—వస్తు స్థిరత్వం, సాంశీకరణం, మరియు అనుగుణ్యం—జీన్ పియాజె యొక్క జ్ఞానాత్మಕ వికాస సిద్ధాంతం నుండి కీలక ఆలోచనలు.",
  },
  {
    id: "childdev-paper-2-te-practice-5",
    question:
      "'Satish wants to start business but is not initiating fearing loss'. The conflict being faced by Satish is (TSTET 22 May 2024)\n'సతీష్ వ్యాపారం ప్రారంభించాలనుకుంటున్నాడు కానీ నష్టం వస్తుందనే భయంతో ప్రారంభించడం లేదు'. సతీష్ ఎదుర్కొంటున్న సంఘర్షణ ఏది?",
    options: [
      "Approach Avoidance conflict\nఉపగమ-పరిహార సంఘర్షణ",
      "Approach Approach conflict\nఉపగమ-ఉపగమ సంఘర్షణ",
      "Avoidance - Avoidance conflict\nపరిహార-పరిహార సంఘర్షణ",
      "Avoidance - Approach conflict\nపరిహార-ఉపగమ సంఘర్షణ",
    ],
    correctAnswer: 0,
    explanation:
      "ఒక **ఉపగమ-పరిహార సంఘర్షణ** ఒకే లక్ష్యానికి సానుకూల మరియు ప్రతికూల అంశాలు రెండూ ఉన్నప్పుడు సంభవిస్తుంది, దీనివల్ల వ్యక్తి దాని పట్ల ఏకకాలంలో ఆకర్షితుడై మరియు వికర్షితుడై అనుభూతి చెందుతాడు. ఇక్కడ, వ్యాపారం ప్రారంభించడం లక్ష్యం. సానుకూల అంశం దానిని ప్రారంభించాలనే కోరిక (ఉపగమ), అయితే ప్రతికూల అంశం నష్టం భయం (పరిహార). సతీష్ ఒకే లక్ష్యంపై వాంఛనీయ మరియు అవాంఛనీయ లక్షణాలతో సంఘర్షణ పడుతున్నాడు.",
  },
];

const mathematicsPaper1English: DemoQuestion[] = [
  {
    id: "math-paper1-en-demo-1",
    question:
      "In an exam Rahul, Anuj and Ishika got marks in the ratio 6: 5: 7. If Anuj got 60 marks, then the marks scored by Ishika is (TSTET 18 Jan 2025)",
    options: ["72", "84", "78", "66"],
    correctAnswer: 1,
    explanation:
      " Step 1: Set up the relationship.\nThe ratio of marks is Rahul : Anuj : Ishika = 6 : 5 : 7. Let the common multiplier be 'x'. Their marks are 6x, 5x, and 7x.\n\n Step 2: Find the value of 'x' using Anuj's marks.\nAnuj's marks correspond to the ratio part '5', so $5x = 60$.\n$x = \\frac{60}{5} = 12$.\n\n Step 3: Calculate Ishika's marks.\nIshika's marks correspond to the ratio part '7'. So, her marks are 7x.\nIshika's marks = $7 \\times 12 = 84$.",
  },
  {
    id: "math-paper1-en-demo-2",
    question: "The perimeter of a semicircle is 36 cms. Its diameter (in centimeters) is (APTET 2012)",
    options: ["7", "14", "22", "28"],
    correctAnswer: 1,
    explanation:
      " Step 1: Understand the formula for the perimeter of a semicircle. The perimeter consists of two parts: the curved arc (half the circumference of a full circle) and the straight diameter.\nPerimeter = ($\\frac{1}{2} \\times$ Circumference) + Diameter.\nPerimeter = ($\\frac{1}{2} \\times \\pi d$) + d, where 'd' is the diameter.\n\n Step 2: Factor out 'd' from the formula.\nPerimeter = $d (\\frac{\\pi}{2} + 1)$.\n\n Step 3: Substitute the given perimeter and the value of $\\pi$ (use $\\pi = \\frac{22}{7}$).\n$36 = d (\\frac{22/7}{2} + 1) = d (\\frac{11}{7} + 1)$.\n\n Step 4: Simplify the expression in the parenthesis.\n$36 = d (\\frac{11}{7} + \\frac{7}{7}) = d (\\frac{18}{7})$.\n\n Step 5: Solve for the diameter 'd'.\n$d = 36 \\times \\frac{7}{18}$.\n$d = 2 \\times 7 = 14$.\n\nThe diameter is 14 cm.",
  },
  {
    id: "math-paper1-en-demo-3",
    question: "With which of the following lengths, a triangle CANNOT be formed. (TSTET 10 Jan 2025)",
    options: ["6cm, 7cm, 8cm", "6cm, 6cm, 6cm", "3cm, 4cm, 5cm", "4cm, 8cm, 4cm"],
    correctAnswer: 3,
    explanation:
      "This question tests the Triangle Inequality Theorem, which states that the sum of the lengths of any two sides of a triangle must be greater than the length of the third side.\n\nLet the sides be a, b, and c. The conditions are:\n1. a + b > c\n2. a + c > b\n3. b + c > a\n\nLet's check each option:\n\n* **Option 1: 6cm, 7cm, 8cm**\n    6 + 7 = 13 > 8 (True)\n    6 + 8 = 14 > 7 (True)\n    7 + 8 = 15 > 6 (True)\n    A triangle **can** be formed.\n\n* **Option 2: 6cm, 6cm, 6cm** (Equilateral triangle)\n    6 + 6 = 12 > 6 (True)\n    A triangle **can** be formed.\n\n* **Option 3: 3cm, 4cm, 5cm** (Right-angled triangle)\n    3 + 4 = 7 > 5 (True)\n    3 + 5 = 8 > 4 (True)\n    4 + 5 = 9 > 3 (True)\n    A triangle **can** be formed.\n\n* **Option 4: 4cm, 8cm, 4cm**\n    Let's check the sum of the two smaller sides against the largest side.\n    4 + 4 = 8. This is **not greater** than the third side, 8.\n    Since 4 + 4 is not strictly greater than 8, the Triangle Inequality Theorem is violated. A triangle **cannot** be formed. The three sides would form a flat line segment.",
  },
  {
    id: "math-paper1-en-demo-4",
    question: "The sides of a triangle are 7cm, 24cm and 25cm. Its area (in sq. cm) is (TSTET 18 Jan 2025)",
    options: ["84", "49", "96", "72"],
    correctAnswer: 0,
    explanation:
      " Step 1: Check if the triangle is a right-angled triangle using the converse of the Pythagorean theorem.\nThe sides are a=7, b=24, and c=25.\n$a^2 + b^2 = 7^2 + 24^2 = 49 + 576 = 625$.\n$c^2 = 25^2 = 625$.\nSince $a^2 + b^2 = c^2$, the triangle is a right-angled triangle, and the two shorter sides (7cm and 24cm) are its base and height.\n\n Step 2: Calculate the area of the right-angled triangle.\nThe formula for the area is $\\frac{1}{2} \\times \\text{base} \\times \\text{height}$.\nArea = $\\frac{1}{2} \\times 7 \\times 24 = 7 \\times 12 = 84$ sq. cm.",
  },
  {
    id: "math-paper1-en-demo-5",
    question:
      "If the mean of the observations $x_{1}, x_{2}, x_{3},.......x_{10}$ is 30, then the mean of $x_{1}+2, x_{2}+4, x_{3}+6,.........x_{10}+20$ is ...... (TSTET 2017)",
    options: ["42", "39", "40", "41"],
    correctAnswer: 3,
    explanation:
      "A property of the mean states that the new mean is the old mean plus the mean of the numbers added to each observation.\n\n Step 1: Find the mean of the numbers added to the observations.\nThe numbers added are 2, 4, 6, ..., 20. This is an arithmetic progression with 10 terms.\nThe sum of this progression is $S = \\frac{n}{2}(a + l) = \\frac{10}{2}(2 + 20) = 5(22) = 110$.\nThe mean of these added numbers is $\\frac{\\text{Sum}}{\\text{Count}} = \\frac{110}{10} = 11$.\n\n Step 2: Calculate the new mean.\nNew Mean = Old Mean + Mean of added numbers\nNew Mean = $30 + 11 = 41$.",
  },
];

const mathematicsPaper1Urdu: DemoQuestion[] = [
  {
    id: "math-paper1-ur-demo-1",
    question:
      "In a triangle, the height is double of its base and its area is 484 sq.cm. The length of its height (in cm) is: (TSTET 02 June 2024)\nایک مثلث میں، اونچائی اس کے قاعدے سے دوگنی ہے اور اس کا رقبہ 484 مربع سینٹی میٹر ہے۔ اس کی اونچائی کی لمبائی (سینٹی میٹر میں) ہے:",
    options: ["22", "44", "34", "28"],
    correctAnswer: 1,
    explanation:
      "مثلث کے رقبے کا فارمولا $A = \\frac{1}{2} \\times \\text{قاعدہ} \\times \\text{اونچائی}$ ہے۔\n\nمرحلہ 1: مسئلے کے بیان کی بنیاد پر مساوات قائم کریں۔\nفرض کریں 'b' قاعدہ ہے اور 'h' اونچائی ہے۔\n* رقبہ (A) = 484\n* اونچائی قاعدے سے دوگنی ہے: $h = 2b$۔ اس کا مطلب ہے کہ $b = \\frac{h}{2}$۔\n\nمرحلہ 2: معلوم اقدار اور تعلقات کو رقبے کے فارمولے میں ڈالیں۔\n$484 = \\frac{1}{2} \\times b \\times h$\n$b = \\frac{h}{2}$ کو فارمولے میں ڈالیں تاکہ مساوات صرف 'h' کی شکل میں ہو۔\n$484 = \\frac{1}{2} \\times (\\frac{h}{2}) \\times h$\n$484 = \\frac{h^2}{4}$\n\nمرحلہ 3: 'h' کے لیے حل کریں۔\nدونوں اطراف کو 4 سے ضرب دیں:\n$h^2 = 484 \\times 4$\n$h^2 = 1936$\nدونوں اطراف کا مربع جڑ لیں:\n$h = \\sqrt{1936} = 44$۔\n\nاونچائی کی لمبائی 44 سینٹی میٹر ہے۔",
  },
  {
    id: "math-paper1-ur-demo-2",
    question: "In the given numbers, Ramanujan's number is (APTET 2011)\n دیے گئے اعداد میں، رامانوجن کا عدد ہے",
    options: ["1729", "1719", "1709", "1739"],
    correctAnswer: 0,
    explanation:
      "رامانوجن کا عدد، جسے ہارڈی-رامانوجن عدد بھی کہا جاتا ہے، 1729 ہے۔ یہ سب سے چھوٹا قدرتی عدد ہونے کی وجہ سے مشہور ہے جسے دو مختلف مثبت عددی مکعبوں کے مجموعے کے طور پر دو الگ الگ طریقوں سے ظاہر کیا جا سکتا ہے۔\n\n1. $1^3 + 12^3 = 1 + 1728 = 1729$\n2. $9^3 + 10^3 = 729 + 1000 = 1729$",
  },
  {
    id: "math-paper1-ur-demo-3",
    question: "$(-0.75)+\\{(-0.5 \\times 2\\frac{2}{5}) \\div \\frac{2}{5}\\} = $ (TSTET 18 Jan 2025)",
    options: ["$2\\frac{3}{4}$", "2.25", "-3.75", "-2.25"],
    correctAnswer: 2,
    explanation:
      "عمل کی ترتیب (BODMAS/PEMDAS) پر عمل کریں۔\n\nمرحلہ 1: پہلے گھوبگھرالی بریکٹ کے اندر کے اظہار کو حل کریں۔ مخلوط عدد اور اعشاریہ کو کسروں میں تبدیل کریں۔\n$2\\frac{2}{5} = \\frac{12}{5}$\n$-0.5 = -\\frac{1}{2}$\n\nمرحلہ 2: بریکٹ کے اندر ضرب کا عمل انجام دیں۔\n$-\\frac{1}{2} \\times \\frac{12}{5} = -\\frac{12}{10} = -\\frac{6}{5}$\n\nمرحلہ 3: بریکٹ کے اندر تقسیم کا عمل انجام دیں۔\n$(-\\frac{6}{5}) \\div \\frac{2}{5} = -\\frac{6}{5} \\times \\frac{5}{2} = -\\frac{6}{2} = -3$\n\nمرحلہ 4: حتمی جمع کا عمل انجام دیں۔\n$(-0.75) + (-3) = -0.75 - 3 = -3.75$۔",
  },
  {
    id: "math-paper1-ur-demo-4",
    question:
      "The number of vertices in a square pyramid are: (TSTET 02 June 2024)\nایک مربع اہرام (square pyramid) میں راسوں (vertices) کی تعداد ہوتی ہے:",
    options: ["5", "4", "3", "6"],
    correctAnswer: 0,
    explanation:
      "ایک مربع اہرام ایک سہ جہتی شکل ہے جس کا قاعدہ مربع ہوتا ہے اور چار تکونی چہرے ہوتے ہیں جو ایک ہی نقطہ پر ملتے ہیں جسے چوٹی (apex) کہتے ہیں۔\n\n* **قاعدے کے راس**: مربع قاعدے کے 4 کونے ہوتے ہیں، جو راس ہیں۔\n* **چوٹی کا راس**: وہ نقطہ جہاں چار تکونی چہرے اوپر ملتے ہیں، ایک اور راس ہے۔\n\nراسوں کی کل تعداد = (قاعدے میں راس) + (چوٹی کا راس)\nکل راس = 4 + 1 = 5۔\n\nلہذا، ایک مربع اہرام میں 5 راس ہوتے ہیں۔",
  },
  {
    id: "math-paper1-ur-demo-5",
    question: "Which of the following measures CANNOT form a triangle? (TSTET 08 Jan 2025)\nمندرجہ ذیل میں سے کون سی پیمائشیں مثلث نہیں بنا سکتیں؟",
    options: ["7cm, 8cm, 9cm", "8cm, 8cm, 8cm", "6cm, 8cm, 10cm", "3cm, 6cm, 3cm"],
    correctAnswer: 3,
    explanation:
      "**مثلث کی عدم مساوات کا نظریہ** یہ بتاتا ہے کہ کسی مثلث کے کسی بھی دو اطراف کی لمبائیوں کا مجموعہ تیسرے اطراف کی لمبائی سے زیادہ ہونا چاہیے۔\n\n* **آپشن 1 (7, 8, 9):**\n    $7+8 > 9$ (15 > 9) درست۔\n    $7+9 > 8$ (16 > 8) درست۔\n    $8+9 > 7$ (17 > 7) درست۔ مثلث بن سکتا ہے۔\n* **آپشن 2 (8, 8, 8):**\n    $8+8 > 8$ (16 > 8) درست۔ ایک متساوی الاضلاع مثلث بن سکتا ہے۔\n* **آپشن 3 (6, 8, 10):**\n    $6+8 > 10$ (14 > 10) درست۔\n    $6+10 > 8$ (16 > 8) درست۔\n    $8+10 > 6$ (18 > 6) درست۔ ایک قائمہ زاویہ مثلث بن سکتا ہے۔\n* **آپشن 4 (3, 6, 3):**\n    $3+3 > 6$ (6 > 6) **غلط۔** مجموعہ برابر ہے، زیادہ نہیں۔ یہ لمبائیاں مثلث نہیں بنا سکتیں؛ وہ ایک سیدھا خط بنائیں گی۔",
  },
];

const mathematicsPaper1Telugu: DemoQuestion[] = [
  {
    id: "math-paper1-te-demo-1",
    question:
      "When the number of the faces of a cuboid is subtracted from the sum of its vertices and edges, the value is (TSTET 09 Jan 2025)\nఒక దీర్ఘఘనం యొక్క శీర్షాలు మరియు అంచుల మొత్తం నుండి దాని ముఖాల సంఖ్యను తీసివేస్తే, వచ్చే విలువ ఎంత?",
    options: ["10", "12", "8", "14"],
    correctAnswer: 3,
    explanation:
      "ఏ దీర్ఘఘనానికైనా, మనకు కింది ధర్మాలు ఉంటాయి:\n- శీర్షాల సంఖ్య (V) = 8\n- అంచుల సంఖ్య (E) = 12\n- ముఖాల సంఖ్య (F) = 6\n\nప్రశ్న అడుగుతున్న సమాసం విలువ: (శీర్షాలు మరియు అంచుల మొత్తం) - (ముఖాల సంఖ్య).\nసమాసం = $(V + E) - F$\n\nవిలువలను ప్రతిక్షేపించండి:\nసమాసం = $(8 + 12) - 6$\nసమాసం = $20 - 6 = 14$.",
  },
  {
    id: "math-paper1-te-demo-2",
    question:
      "If cost of $5\\frac{1}{4}$ dozens of apples is ₹1386, then the cost of 9 apples is (TSTET 08 Jan 2025)\n$5\\frac{1}{4}$ డజన్ల యాపిల్స్ ధర ₹1386 అయితే, 9 యాపిల్స్ ధర ఎంత?",
    options: ["₹198", "₹225", "₹156", "₹204"],
    correctAnswer: 0,
    explanation:
      "దశ 1: **మొత్తం యాపిల్స్ సంఖ్యను లెక్కించండి.**\nఒక డజన్ = 12 వస్తువులు.\n$5\\frac{1}{4}$ డజన్లు = $\\frac{21}{4}$ డజన్లు.\nమొత్తం యాపిల్స్ సంఖ్య = $\\frac{21}{4} \\times 12 = 21 \\times 3 = 63$ యాపిల్స్.\n\nదశ 2: **ఒక యాపిల్ ధరను లెక్కించండి.**\n63 యాపిల్స్ ధర ₹1386.\nఒక యాపిల్ ధర = $\\frac{1386}{63}$.\n$1386 \\div 63 = 22$. కాబట్టి, ఒక యాపిల్ ధర ₹22.\n\nదశ 3: **9 యాపిల్స్ ధరను లెక్కించండి.**\n9 యాపిల్స్ ధర = $9 \\times$ ఒక యాపిల్ ధర = $9 \\times 22 = ₹198$.",
  },
  {
    id: "math-paper1-te-demo-3",
    question: "Number of lines of symmetry in a regular pentagon is (TSTET 08 Jan 2025)\nఒక క్రమ పంచభుజిలోని సౌష్ఠవ రేఖల సంఖ్య ఎంత?",
    options: ["4", "6", "7", "5"],
    correctAnswer: 3,
    explanation:
      "సౌష్ఠవ రేఖ అనేది ఒక ఆకారాన్ని రెండు సర్వసమానమైన అర్థభాగాలుగా విభజించే రేఖ, ఇవి ఒకదానికొకటి దర్పణ ప్రతిబింబాలుగా ఉంటాయి. ఏ క్రమ బహుభుజి (అన్ని భుజాలు సమానంగా మరియు అన్ని కోణాలు సమానంగా ఉండే బహుభుజి) కైనా, సౌష్ఠవ రేఖల సంఖ్య దాని భుజాల సంఖ్యకు సమానంగా ఉంటుంది. క్రమ పంచభుజికి **5** భుజాలు ఉంటాయి కాబట్టి, దానికి **5** సౌష్ఠవ రేఖలు ఉంటాయి. ప్రతి సౌష్ఠవ రేఖ ఒక శీర్షాన్ని ఎదురుగా ఉన్న భుజం మధ్య బిందువుతో కలుపుతుంది.",
  },
  {
    id: "math-paper1-te-demo-4",
    question:
      "The number of cubes with edge 3cm that can be made from a cuboid of dimensions $15cm \\times 12cm \\times 9cm$ are (TSTET 09 Jan 2025)\n$15cm \\times 12cm \\times 9cm$ కొలతలు గల దీర్ఘఘనం నుండి 3cm అంచు గల ఎన్ని ఘనాలను తయారు చేయవచ్చు?",
    options: ["48", "24", "28", "60"],
    correctAnswer: 3,
    explanation:
      "ఒక పెద్ద దీర్ఘఘనంలో ఎన్ని చిన్న ఘనాలు సరిపోతాయో కనుగొనడానికి, మనం దీర్ఘఘనం ఘనపరిమాణాన్ని ఒక ఘనం ఘనపరిమాణంతో భాగిస్తాము.\n\nదశ 1: దీర్ఘఘనం ఘనపరిమాణాన్ని లెక్కించండి.\nదీర్ఘఘనం ఘనపరిమాణం = పొడవు $\times$ వెడల్పు $\times$ ఎత్తు\nఘనపరిమాణం = $15 \text{ cm} \times 12 \text{ cm} \times 9 \text{ cm} = 1620 \text{ cm}^3$.\n\nదశ 2: ఒక చిన్న ఘనం ఘనపరిమాణాన్ని లెక్కించండి.\nఘనం ఘనపరిమాణం = అంచు$^3$\nఘనపరిమాణం = $(3 \text{ cm})^3 = 27 \text{ cm}^3$.\n\nదశ 3: దీర్ఘఘనం ఘనపరిమాణాన్ని ఘనం ఘనపరిమాణంతో భాగించండి.\nఘనాల సంఖ్య = $\frac{\text{దీర్ఘఘనం ఘనపరిమాణం}}{\text{ఘనం ఘనపరిమాణం}} = \frac{1620}{27} = 60$.\n\nప్రత్యామ్నాయంగా, ప్రతి కొలత వెంబడి ఎన్ని ఘనాలు సరిపోతాయో లెక్కించండి:\n15 cm భుజం వెంబడి: $15 / 3 = 5$ ఘనాలు\n12 cm భుజం వెంబడి: $12 / 3 = 4$ ఘనాలు\n9 cm భుజం వెంబడి: $9 / 3 = 3$ ఘనాలు\nమొత్తం ఘనాల సంఖ్య = $5 \times 4 \times 3 = 60$.",
  },
  {
    id: "math-paper1-te-demo-5",
    question: "Number of lines of symmetry in a regular pentagon is (TSTET 08 Jan 2025)\nఒక క్రమ పంచభుజిలోని సౌష్ఠవ రేఖల సంఖ్య ఎంత?",
    options: ["4", "6", "7", "5"],
    correctAnswer: 3,
    explanation:
      "సౌష్ఠవ రేఖ అనేది ఒక ఆకారాన్ని రెండు సర్వసమానమైన అర్థభాగాలుగా విభజించే రేఖ, ఇవి ఒకదానికొకటి దర్పణ ప్రతిబింబాలుగా ఉంటాయి. ఏ క్రమ బహుభుజి (అన్ని భుజాలు సమానంగా మరియు అన్ని కోణాలు సమానంగా ఉండే బహుభుజి) కైనా, సౌష్ఠవ రేఖల సంఖ్య దాని భుజాల సంఖ్యకు సమానంగా ఉంటుంది. క్రమ పంచభుజికి **5** భుజాలు ఉంటాయి కాబట్టి, దానికి **5** సౌష్ఠవ రేఖలు ఉంటాయి. ప్రతి సౌష్ఠవ రేఖ ఒక శీర్షాన్ని ఎదురుగా ఉన్న భుజం మధ్య బిందువుతో కలుపుతుంది.",
  },
];

const buildDemoBank = (bank: DemoQuestionBank, subject: string, language: QuestionLanguage, questions: DemoQuestion[]) => {
  if (!bank[subject]) {
    bank[subject] = {} as DemoQuestionByLanguage;
  }

  bank[subject]![language] = questions;
};

const demoPracticeBank: DemoQuestionBank = {};
buildDemoBank(demoPracticeBank, "child-development-pedagogy-paper2", "en", childDevelopmentPaper2English);
buildDemoBank(demoPracticeBank, "child-development-pedagogy-paper2", "ur", childDevelopmentPaper2Urdu);
buildDemoBank(demoPracticeBank, "child-development-pedagogy-paper2", "te", childDevelopmentPaper2Telugu);
buildDemoBank(demoPracticeBank, "mathematics-paper1", "en", mathematicsPaper1English);
buildDemoBank(demoPracticeBank, "mathematics-paper1", "ur", mathematicsPaper1Urdu);
buildDemoBank(demoPracticeBank, "mathematics-paper1", "te", mathematicsPaper1Telugu);

const demoMockBank: DemoQuestionBank = {};
buildDemoBank(demoMockBank, "child-development-pedagogy-paper2", "en", childDevelopmentPaper2English);
buildDemoBank(demoMockBank, "child-development-pedagogy-paper2", "ur", childDevelopmentPaper2Urdu);
buildDemoBank(demoMockBank, "child-development-pedagogy-paper2", "te", childDevelopmentPaper2Telugu);
buildDemoBank(demoMockBank, "mathematics-paper1", "en", mathematicsPaper1English);
buildDemoBank(demoMockBank, "mathematics-paper1", "ur", mathematicsPaper1Urdu);
buildDemoBank(demoMockBank, "mathematics-paper1", "te", mathematicsPaper1Telugu);


const getDemoQuestionsForLanguage = (
  bank: DemoQuestionBank,
  subject: string,
  language: QuestionLanguage,
): DemoQuestion[] => {
  const subjectQuestions = bank[subject];
  if (!subjectQuestions) {
    return [];
  }

  return subjectQuestions[language] ?? subjectQuestions[DEFAULT_LANGUAGE] ?? [];
};

export const demoPracticeQuestions = demoPracticeBank;
export const demoMockQuestions = demoMockBank;

export const getDemoPracticeQuestions = (subject: string, language: QuestionLanguage): DemoQuestion[] =>
  getDemoQuestionsForLanguage(demoPracticeQuestions, subject, language);

export const getDemoMockQuestions = (subject: string, language: QuestionLanguage): DemoQuestion[] =>
  getDemoQuestionsForLanguage(demoMockQuestions, subject, language);

export const isDemoSubject = (subject: string): boolean => {
  return Boolean(demoPracticeQuestions[subject] || demoMockQuestions[subject]);
};
