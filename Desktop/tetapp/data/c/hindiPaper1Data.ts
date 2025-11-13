type HindiPaper1RawQuestion = {
  id: number | string;
  text: string;
  options: string[];
  correct: string;
  explanation: string;
};

const rawHindiPaper1Data: HindiPaper1RawQuestion[] = 
[
  {
    "id": 1,
    "text": "विनयचंद्र मौद्गल्य द्वारा रचित कविता है - TS-TET June 2024",
    "options": [
      "अपना प्यारा देश",
      "त्यौहारों का देश",
      "हिंद देश के निवासी",
      "नन्हा मुन्ना राही हूँ"
    ],
    "correct": "हिंद देश के निवासी",
    "explanation": "दी गई कविताओं में से 'हिंद देश के निवासी' विनयचंद्र मौद्गल्य द्वारा रचित है। यह कविता भारत की विविधता में एकता को दर्शाती है।\n (Among the given poems, 'Hind Desh ke Nivasi' is written by Vinaychandra Maudgalya. This poem depicts the unity in diversity of India.)"
  },
  {
    "id": 2,
    "text": "कबीर मुख्य रूप से ...... कवि हैं। रिक्त स्थान की पूर्ति के लिए सही विकल्प है - TS-TET June 2024",
    "options": [
      "प्रेममार्गी",
      "संत",
      "धार्मिक",
      "कृष्णोपासक"
    ],
    "correct": "संत",
    "explanation": "कबीर दास जी भक्ति काल की निर्गुण धारा के एक प्रमुख 'संत' कवि और समाज सुधारक थे। वे ज्ञानाश्रयी शाखा का प्रतिनिधित्व करते थे।\n (Kabir Das was a prominent 'Sant' (saint) poet and social reformer of the Nirgun stream of the Bhakti period. He represented the Gyanshrayi branch.)"
  },
  {
    "id": 3,
    "text": "तुलसीदास का जीवनकाल माना जाता है - TS-TET June 2024",
    "options": [
      "1555 से 1623 तक",
      "1500 से 1600 तक",
      "1532 से 1616 तक",
      "1532 से 1623 तक"
    ],
    "correct": "1532 से 1623 तक",
    "explanation": "गोस्वामी तुलसीदास जी का सर्वमान्य जीवनकाल 1532 ई. से 1623 ई. तक माना जाता है। वे राम भक्ति शाखा के प्रमुख कवि थे।\n (The widely accepted lifespan of Goswami Tulsidas is considered to be from 1532 AD to 1623 AD. He was a prominent poet of the Ram Bhakti branch.)"
  },
  {
    "id": 4,
    "text": "छठवीं कक्षा का बाल दिवस पाठ है - TS-TET June 2024",
    "options": [
      "वार्तालाप पाठ",
      "चित्रपठन पाठ",
      "कहानी पाठ",
      "निबंध पाठ"
    ],
    "correct": "वार्तालाप पाठ",
    "explanation": "तेलंगाना राज्य की छठवीं कक्षा की हिंदी पाठ्यपुस्तक में 'बाल दिवस' पाठ को एक 'वार्तालाप पाठ' (Conversation lesson) के रूप में प्रस्तुत किया गया है, जिसमें बच्चे बाल दिवस के बारे में चर्चा करते हैं।\n (In the Telangana state class 6 Hindi textbook, the lesson 'Bal Divas' is presented as a 'Vartalap Paath' (Conversation lesson), where children discuss Children's Day.)"
  },
  {
    "id": 5,
    "text": "निम्न में से यह कविता पाठ नहीं है - TS-TET June 2024",
    "options": [
      "हमारे त्यौहार",
      "चारमीनार",
      "प्यारी बिटिया",
      "अगर पेड़ भी चलते होते"
    ],
    "correct": "चारमीनार",
    "explanation": "दिए गए विकल्पों में, 'चारमीनार' एक गद्य पाठ (Prose lesson) है, जबकि 'हमारे त्यौहार', 'प्यारी बिटिया' और 'अगर पेड़ भी चलते होते' कविता पाठ (Poetry lessons) हैं।\n (Among the given options, 'Charminar' is a prose lesson, while 'Hamare Tyohar', 'Pyari Bitiya', and 'Agar Ped Bhi Chalte Hote' are poetry lessons.)"
  },
  {
    "id": 6,
    "text": "इन्हें कई बाल साहित्य पुरस्कारों से सम्मानित किया गया था - TS-TET June 2024",
    "options": [
      "दिविक रमेश",
      "बालस्वरूप राही",
      "चालर्स अलवर्ट टिंड्ली",
      "तुलसीदास"
    ],
    "correct": "दिविक रमेश",
    "explanation": "दिविक रमेश एक प्रख्यात हिंदी कवि और बाल साहित्यकार (Children's author) हैं। उन्हें उनके बाल साहित्य में योगदान के लिए कई पुरस्कारों से सम्मानित किया गया है।\n (Divik Ramesh is a renowned Hindi poet and children's author. He has been honored with many awards for his contribution to children's literature.)"
  },
  {
    "id": 7,
    "text": "उँचे शिखरों वाला देश, चंचल नदियों वाला देश । 'नदी' शब्द में प्रयुक्त संज्ञा है - TS-TET June 2024",
    "options": [
      "व्यक्तिवाचक",
      "जातिवाचक",
      "भाववाचक",
      "समूहवाचक"
    ],
    "correct": "जातिवाचक",
    "explanation": "'नदी' शब्द किसी एक विशेष नदी का नाम न होकर, सभी नदियों की संपूर्ण जाति का बोध कराता है। इसलिए, यह 'जातिवाचक संज्ञा' (Common Noun) है।\n (The word 'nadi' (river) refers to the entire class of rivers, not a specific one. Therefore, it is a 'Jativachak Sangya' (Common Noun).)"
  },
  {
    "id": 8,
    "text": "पंथी को छाया नहीं, फल लागै अति दूर । रेखांकित शब्द का अर्थ है - TS-TET June 2024",
    "options": [
      "वृक्ष",
      "राह",
      "मार्ग",
      "बटोही"
    ],
    "correct": "बटोही",
    "explanation": "'पंथी' शब्द का अर्थ है पथिक, राहगीर या यात्रा करने वाला। 'बटोही' शब्द का भी समान अर्थ (Traveler) होता है।\n (The word 'Panthi' means a traveler or wayfarer. The word 'Batohi' has the same meaning (Traveler).)"
  },
  {
    "id": 9,
    "text": "खरगोश, लोमड़ी और भालू भागते-भागते एक हाथी ...... पास ...... निकले । रिक्त स्थानों की पूर्ति के लिए सही विकल्प है - TS-TET June 2024",
    "options": [
      "की, में",
      "के, में",
      "के, से",
      "से, में"
    ],
    "correct": "के, से",
    "explanation": "वाक्य में सही कारक चिह्नों (Postpositions) का प्रयोग होगा: 'हाथी **के** पास' (संबंध कारक) और 'पास **से** निकले' (अपादान कारक, अलगाव को दर्शाता है)। सही विकल्प 'के, से' है।\n (The correct postpositions will be used: 'hathi **ke** paas' (possessive case) and 'paas **se** nikle' (ablative case, showing separation). The correct option is 'ke, se'.)"
  },
  {
    "id": 10,
    "text": "मोहन फल खाता है। वाक्य में 'कर्म' सूचक शब्द है - TS-TET June 2024",
    "options": [
      "मोहन",
      "खाता",
      "है",
      "फल"
    ],
    "correct": "फल",
    "explanation": "इस वाक्य में 'मोहन' कर्ता (Subject) है, 'खाता है' क्रिया (Verb) है। क्रिया (खाने) का प्रभाव 'फल' पर पड़ रहा है, इसलिए 'फल' (Fruit) कर्म (Object) है।\n (In this sentence, 'Mohan' is the subject, 'khata hai' is the verb. The action (eating) affects the 'phal' (fruit), so 'phal' is the object (Karm).)"
  },
  {
    "id": 11,
    "text": "भारत एक देश है । यहाँ ...... भाषाएँ बोली जाती हैं। रिक्त स्थान की पूर्ति के लिए रेखांकित शब्द का सही विलोमार्थक है - TS-TET June 2024",
    "options": [
      "कई",
      "अनेक",
      "विविध",
      "बहुविध"
    ],
    "correct": "अनेक",
    "explanation": "रेखांकित शब्द 'एक' (One) का सही विलोम (Antonym) 'अनेक' (Many) होता है।\n (The correct antonym for the underlined word 'Ek' (One) is 'Anek' (Many).)"
  },
  {
    "id": 12,
    "text": "'धन की कमी होना' भाव से संबंधित मुहावरा है - TS-TET June 2024",
    "options": [
      "टका पास न होना",
      "लाख टका मेरो मोल",
      "टका - सा मुँह लेकर रह जाना",
      "टका सा जवाब देना"
    ],
    "correct": "टका पास न होना",
    "explanation": "'टका पास न होना' मुहावरे (Idiom) का अर्थ है, बिलकुल भी धन न होना या धन की बहुत कमी होना।\n (The idiom 'Taka paas na hona' means to have no money at all or to be very short of money.)"
  },
  {
    "id": 13,
    "text": "\"वाह! वाह ! कितने आम गिरे हैं।\" यह वाक्य है - TS-TET June 2024",
    "options": [
      "इच्छार्थक",
      "विस्मयार्थक",
      "संदेहार्थक",
      "निषेधार्थक"
    ],
    "correct": "विस्मयार्थक",
    "explanation": "इस वाक्य में 'वाह! वाह!' शब्द और विस्मयादिबोधक चिह्न (!) का प्रयोग हुआ है, जो आश्चर्य और हर्ष के भाव को व्यक्त करता है। अतः यह 'विस्मयार्थक' (Exclamatory) वाक्य है।\n (This sentence uses 'Waah! Waah!' and the exclamation mark (!), expressing surprise and joy. Thus, it is an 'Exclamatory' sentence.)"
  },
  {
    "id": 14,
    "text": "सही क्रमवाला वाक्य पहचानिए TS-TET June 2024",
    "options": [
      "एक हमारे गाँव में उद्यान है।",
      "उ‌द्यान हमारे गाँव में है एक ।",
      "हमारे गाँव में एक उद्यान है ।",
      "गाँव में एक है उ‌द्यान हमारा ।"
    ],
    "correct": "हमारे गाँव में एक उद्यान है ।",
    "explanation": "हिंदी व्याकरण में वाक्य के पदों का सही क्रम (Correct sentence structure) (कर्ता + कर्म + क्रिया) होता है। 'हमारे गाँव में एक उद्यान है।' इस क्रम का सही पालन करता है।\n (In Hindi grammar, the correct sentence structure (Subject + Object + Verb) is followed. 'Hamare gaon mein ek udyan hai.' follows this structure correctly.)"
  },
  {
    "id": 15,
    "text": "यह दीर्घ, पश्चवृत्ताकार स्वर है - TS-TET June 2024",
    "options": [
      "अ",
      "ऊ",
      "ओ",
      "ए"
    ],
    "correct": "ऊ",
    "explanation": "स्वर 'ऊ' (oo) के उच्चारण में तीनों गुण हैं: यह 'दीर्घ' (Long vowel) है, 'पश्च' (Back vowel - जीभ का पिछला हिस्सा उठता है) है, और 'वृत्ताकार' (Rounded - होंठ गोल होते हैं) है।\n (The vowel 'ऊ' (oo) has all three properties: It is 'Deergh' (long), 'Pashch' (back vowel - the back of the tongue rises), and 'Vrittakar' (rounded - the lips are rounded).)"
  },
  {
    "id": 16,
    "text": "वर्णों को अशु‌द्धियों के अंतर्गत निम्न में से यह अनावश्यक वर्ण संबंधी अशुद्धि का उदाहरण है- TS-TET June 2024",
    "options": [
      "अध्यन",
      "वीभस्म",
      "परसिद्ध",
      "जैस्सा"
    ],
    "correct": "जैस्सा",
    "explanation": "'अनावश्यक वर्ण संबंधी अशुद्धि' (Error of an unnecessary letter) का अर्थ है कि शब्द में एक अतिरिक्त अक्षर जोड़ दिया गया है। 'जैस्सा' में एक अतिरिक्त 'स' है; शुद्ध शब्द 'जैसा' (Jaisa) है।\n (An 'error of an unnecessary letter' means an extra letter is added to the word. In 'Jaissa', there is an extra 'sa'; the correct word is 'Jaisa'.)"
  },
  {
    "id": 17,
    "text": "सूक्ष्म अध्यापन प्रणाली में विशिष्ट कौशलों के अभ्यास के कारण किसी भी प्रकार की ...... । वाक्य की पूर्ती के लिए सही विकल्प है । TS-TET June 2024",
    "options": [
      "अस्पष्टता नहीं रहती",
      "स्पष्टता नहीं रहती",
      "उपयोगिता नहीं रहती",
      "सरलता नहीं होती"
    ],
    "correct": "अस्पष्टता नहीं रहती",
    "explanation": "सूक्ष्म अध्यापन (Micro-teaching) का उद्देश्य शिक्षण कौशलों को स्पष्ट करना है। बार-बार अभ्यास करने से, कौशल के बारे में कोई 'अस्पष्टता नहीं रहती' (no ambiguity remains) है।\n (The purpose of micro-teaching is to clarify teaching skills. By practicing repeatedly, 'no ambiguity remains' regarding the skill.)"
  },
  {
    "id": 18,
    "text": "आगमन विधि द्वारा प्राप्त किया गया ज्ञान बालक के मन में - ...... हो जाता है। वाक्य की पूर्ति के लिए सही विकल्प है - TS-TET June 2024",
    "options": [
      "अस्थायी",
      "स्थायी",
      "विचलित",
      "अस्थिर"
    ],
    "correct": "स्थायी",
    "explanation": "आगमन विधि (Inductive method) में, छात्र स्वयं उदाहरणों से सामान्य नियम तक पहुँचता है। चूँकि यह 'करके सीखना' (learning by doing) पर आधारित है, इसलिए इससे प्राप्त ज्ञान 'स्थायी' (Permanent) होता है।\n (In the inductive method, the student reaches the general rule from examples. Since it is based on 'learning by doing', the knowledge gained is 'permanent'.)"
  },
  {
    "id": 19,
    "text": "बड़ी कक्षाओं के विद्यालयों के लिए पाठ्य-पुस्तक का आवरण ऐसा होना चाहिए - TS-TET June 2024",
    "options": [
      "रंगबिरंगा",
      "रंगहीन",
      "सादा और कलात्मक",
      "रंगबिरंगा और कलाहीन"
    ],
    "correct": "सादा और कलात्मक",
    "explanation": "जबकि छोटी कक्षाओं की पुस्तकों के आवरण (Covers) बहुत रंगबिरंगे होते हैं, बड़ी कक्षाओं की पुस्तकों से अपेक्षा की जाती है कि वे 'सादे और कलात्मक' (Simple and artistic) हों, जो परिपक्वता (maturity) और विषय की गंभीरता को दर्शाते हों।\n (While covers for younger classes are very colorful, books for higher classes are expected to be 'simple and artistic', reflecting maturity and the seriousness of the subject.)"
  },
  {
    "id": 20,
    "text": "शिक्षा में मूल्यांकन का प्रयोग विद्यालय के कार्यक्रम, पाठ्यक्रम, शैक्षिक सामग्री तथा ...... के लिए किया जाता है। वाक्य की पूर्ति के लिए सही विकल्प है - TS-TET June 2024",
    "options": [
      "शिक्षक और बालकों की जाँच",
      "केवल बालकों की जाँच",
      "केवल शिक्षकों की जाँच",
      "अभिभावकों, शिक्षकों और बालकों की जाँच"
    ],
    "correct": "शिक्षक और बालकों की जाँच",
    "explanation": "मूल्यांकन (Evaluation) एक व्यापक प्रक्रिया है। इसका उपयोग केवल छात्रों (बालकों) के प्रदर्शन को मापने के लिए नहीं, बल्कि शिक्षण विधियों (शिक्षक) की प्रभावशीलता की जाँच करने के लिए भी किया जाता है। अतः यह 'शिक्षक और बालकों की जाँच' दोनों के लिए है।\n (Evaluation is a comprehensive process. It is used not only to measure student (child) performance but also to check the effectiveness of the teaching methods (teacher). Thus, it is for 'assessment of teachers and children'.)"
  },
  {
    "id": 21,
    "text": "सातवीं कक्षा के 'हमारे त्यौहार' पाठ में इस त्यौहार का वर्णन किया गया है - TS-TET 9 Jan 2025",
    "options": [
      "दीपावली",
      "होली",
      "पोंगल",
      "बतुकम्मा"
    ],
    "correct": "बतुकम्मा",
    "explanation": "'हमारे त्यौहार' (Hamare Tyohar) पाठ तेलंगाना राज्य के संदर्भ में है, जहाँ बतुकम्मा एक प्रमुख राज्य उत्सव (state festival) है। इस पाठ में इसी त्यौहार का वर्णन है। (The lesson 'Hamare Tyohar' is in the context of Telangana state, where Bathukamma is a major state festival. This lesson describes this festival.)"
  },
  {
    "id": 22,
    "text": "निम्नलिखित में से यह चित्रपठन पाठ है - TS-TET 9 Jan 2025",
    "options": [
      "बाजार",
      "मैदान",
      "उद्यान",
      "बाल दिवस"
    ],
    "correct": "बाजार",
    "explanation": "चित्रपठन (picture reading) पाठों का उद्देश्य छात्रों को एक दृश्य (scene) दिखाकर उनकी अवलोकन (observation) और वर्णन (descriptive) क्षमताओं को बढ़ाना है। 'बाजार' पाठ को आमतौर पर एक चित्रपठन के रूप में प्रस्तुत किया जाता है। (The purpose of picture reading lessons is to enhance students' observation and descriptive abilities by showing them a scene. The 'Bazaar' lesson is typically presented as a picture reading.)"
  },
  {
    "id": 23,
    "text": "गिरिजा कुमार माथुर को यह पुरस्कार प्राप्त हुआ TS-TET 9 Jan 2025",
    "options": [
      "साहित्य अकादमी",
      "ज्ञानपीठ",
      "सोवियत रूस",
      "कविता सम्राट"
    ],
    "correct": "साहित्य अकादमी",
    "explanation": "गिरिजाकुमार माथुर को उनके काव्य-संग्रह (poetry collection) \"मैं वक्त के हूँ सामने\" के लिए 1991 में साहित्य अकादमी पुरस्कार (Sahitya Akademi Award) से सम्मानित किया गया था। (Girijakumar Mathur was awarded the Sahitya Akademi Award in 1991 for his poetry collection \"Main Vakt Ke Hoon Samne\".)"
  },
  {
    "id": 24,
    "text": "निम्नलिखित में से यह कवि अरबी, संस्कृत, फ़ारसी के विद्वान थे - TS-TET 9 Jan 2025",
    "options": [
      "बिहारी",
      "तुलसी",
      "गिरिजाकुमार माथुर",
      "रहीम"
    ],
    "correct": "रहीम",
    "explanation": "अब्दुर्रहीम ख़ान-ए-ख़ाना (रहीम) मुगल बादशाह अकबर के नवरत्नों में से एक थे। वे बहुभाषाविद (polyglot) थे और तुर्की, अरबी, फ़ारसी, संस्कृत और हिंदी (अवधी/ब्रज) के प्रकांड विद्वान थे। (Abdur Rahim Khan-i-Khanan (Rahim) was one of the Navratnas of Mughal Emperor Akbar. He was a polyglot and a great scholar of Turkish, Arabic, Persian, Sanskrit, and Hindi.)"
  },
  {
    "id": 25,
    "text": "'सूरज का रथ' के रचनाकार है - TS-TET 9 Jan 2025",
    "options": [
      "गिरिजाकुमार माथुर",
      "बालस्वरूप राही",
      "सुरेंद्र विक्रम",
      "सर्वेश्वरदयाल सक्सेना"
    ],
    "correct": "बालस्वरूप राही",
    "explanation": "'सूरज का रथ' एक प्रसिद्ध बाल-कविता (children's poem) है, जिसकी रचना बालस्वरूप राही जी ने की है। (Suraj ka Rath' is a famous children's poem, composed by Bal Swaroop Rahi.)"
  },
  {
    "id": 26,
    "text": "इस समाज सुधारक संत कवि के दोहों में मानवता की भावना होती है - TS-TET 9 Jan 2025",
    "options": [
      "बिहारी",
      "रहीम",
      "कबीर",
      "वृंद"
    ],
    "correct": "कबीर",
    "explanation": "कबीर दास जी एक संत कवि और समाज सुधारक (social reformer) थे। उनके दोहों (couplets) में धार्मिक आडंबरों का विरोध और मानवता (humanity) व भाईचारे का प्रबल संदेश मिलता है। (Kabir Das was a saint-poet and social reformer. In his couplets, there is strong opposition to religious pretenses and a powerful message of humanity and brotherhood.)"
  },
  {
    "id": 27,
    "text": "विल्मा ने जुत्ता को हरा कर अपना पहला स्वर्ण पतक जीता। वाक्य इस काल से संबंधित है- TS-TET 9 Jan 2025",
    "options": [
      "भूत काल",
      "भविष्यत् काल",
      "वर्तमान काल",
      "संदिग्ध वर्तमान काल"
    ],
    "correct": "भूत काल",
    "explanation": "वाक्य \"जीता\" (won) क्रिया के साथ समाप्त होता है, जो यह दर्शाता है कि क्रिया पहले ही संपन्न हो चुकी है। यह भूत काल (Past Tense) की पहचान है। (The sentence ends with the verb \"jeeta\" (won), which indicates that the action has already been completed. This is the identification of the Past Tense.)"
  },
  {
    "id": 28,
    "text": "आपकी मनपसंद कहानी सुनाइए । अर्थ के आधार पर वाक्य का प्रकार है - TS-TET 9 Jan 2025",
    "options": [
      "आज्ञार्थक",
      "विधानार्थक वाक्य",
      "संदेहार्थक वाक्य",
      "विस्मयार्थक वाक्य"
    ],
    "correct": "आज्ञार्थक",
    "explanation": "इस वाक्य में \"सुनाइए\" (tell) शब्द का प्रयोग किया गया है, जो एक आदेश (command) या अनुरोध (request) को व्यक्त करता है। ऐसे वाक्य अर्थ के आधार पर आज्ञार्थक वाक्य (Imperative Sentence) कहलाते हैं। (In this sentence, the word \"sunaiye\" (tell) is used, which expresses a command or a request. Such sentences are called Imperative Sentences based on their meaning.)"
  },
  {
    "id": 29,
    "text": "तुम्हारे राज्य के पूर्व में उत्सव मनाया जा रहा है। रेखांकित शब्द है - TS-TET 9 Jan 2025",
    "options": [
      "गुणवाचक विशेषण",
      "संख्यावाचक विशेषण",
      "परिमाणवाचक विशेषण",
      "सार्वनामिक विशेषण"
    ],
    "correct": "गुणवाचक विशेषण",
    "explanation": "रेखांकित शब्द 'पूर्व' (East) एक दिशा (direction) बता रहा है। दिशा, स्थान, रंग, रूप, या गुण बताने वाले विशेषण गुणवाचक विशेषण (Adjective of Quality) कहलाते हैं। (The underlined word 'poorv' (East) indicates a direction. Adjectives that indicate direction, place, color, form, or quality are called Adjectives of Quality.)"
  },
  {
    "id": 30,
    "text": "दीपावली के दिन दीप-दान किया जाता है। रेखांकित शब्द इस समास का उदाहरण है- TS-TET 9 Jan 2025",
    "options": [
      "द्विगु समास",
      "द्वंद्व समास",
      "तत्पुरुष समास",
      "अव्ययीभाव समास"
    ],
    "correct": "तत्पुरुष समास",
    "explanation": "'दीप-दान' का समास विग्रह (expansion) है 'दीप का दान' (Donation of Lamps)। इसमें 'का' (of) कारक विभक्ति (case ending) का लोप (omission) हुआ है। जिस समास में कारक विभक्ति का लोप होता है, उसे तत्पुरुष समास (Tatpurush Samas) कहते हैं। (The expansion of 'Deep-Daan' is 'Deep ka Daan' (Donation of Lamps). The case ending 'ka' (of) has been omitted. The samas in which a case ending is omitted is called Tatpurush Samas.)"
  },
  {
    "id": 31,
    "text": "विद्यार्थी का संधि विच्छेद है - TS-TET 9 Jan 2025",
    "options": [
      "विद् + अर्थी",
      "विद्य + अर्थी",
      "विद्य + र्थी",
      "विद्या + अर्थी"
    ],
    "correct": "विद्या + अर्थी",
    "explanation": "'विद्यार्थी' शब्द दीर्घ स्वर संधि (Deergh Swar Sandhi) का उदाहरण है। इसका विच्छेद 'विद्या + अर्थी' होता है। यहाँ 'आ' (from विद्या) और 'अ' (from अर्थी) मिलकर 'आ' (in विद्यार्थी) बन जाते हैं। (The word 'Vidyarthi' is an example of Deergh Swar Sandhi. Its dissection is 'Vidya + Arthi'. Here, 'aa' (from Vidya) and 'a' (from Arthi) combine to become 'aa' (in Vidyarthi).)"
  },
  {
    "id": 32,
    "text": "जयपुर नरेश मिर्जा राजा जयसिंह ___ जंतर-मंतर बनवाया था। रिक्त स्थानों के लिए उचित कारक शब्द है - TS-TET 9 Jan 2025",
    "options": [
      "के, ने",
      "के, में",
      "ने, में",
      "से, को"
    ],
    "correct": "के, ने",
    "explanation": "वाक्य को पूरा करने के लिए सही कारक (case) हैं: \"जयपुर **के** नरेश मिर्जा राजा जयसिंह **ने** जंतर-मंतर बनवाया था।\" 'के' संबंध कारक है और 'ने' कर्ता कारक (past tense) है। (The correct cases to complete the sentence are: \"Jaipur **ke** Naresh Mirza Raja Jaisingh **ne** Jantar-Mantar banwaya tha.\" 'Ke' shows relation, and 'ne' is the agent case.)"
  },
  {
    "id": 33,
    "text": "'आपे से बाहर होना' मुहावरे का अर्थ है - TS-TET 9 Jan 2025",
    "options": [
      "अत्यंत उत्तेजित होना",
      "पछताना",
      "अधिक क्रोधित होना",
      "बुद्धिहीन होना"
    ],
    "correct": "अधिक क्रोधित होना",
    "explanation": "'आपे से बाहर होना' एक मुहावरा (idiom) है, जिसका अर्थ है आत्म-नियंत्रण (self-control) खो देना, आमतौर पर अत्यधिक क्रोध (excessive anger) के कारण। (Aape se baahar hona' is an idiom, which means to lose self-control, usually due to excessive anger.)"
  },
  {
    "id": 34,
    "text": "निम्नलिखित में स्त्रीलिंग युक्त शब्द पहचानिए - TS-TET 9 Jan 2025",
    "options": [
      "विद्यालय",
      "संविधान",
      "राजभाषा",
      "भाषण"
    ],
    "correct": "राजभाषा",
    "explanation": "लिंग (gender) की पहचान वाक्य बनाकर की जा सकती है। 'विद्यालय' (पुल्लिंग - masculine) खुला है। 'संविधान' (पुल्लिंग) लिखा गया। 'भाषण' (पुल्लिंग) दिया गया। 'राजभाषा' (स्त्रीलिंग - feminine) घोषित की गई। अतः 'राजभाषा' स्त्रीलिंग है। (Gender can be identified by making a sentence. 'Vidyalaya' (masculine) is open. 'Samvidhan' (masculine) was written. 'Bhashan' (masculine) was given. 'Rajbhasha' (feminine) was declared. Therefore, 'Rajbhasha' is feminine.)"
  },
  {
    "id": 35,
    "text": "यह महाप्राण घोष, कण्ठ्य स्पर्श है TS-TET 9 Jan 2025",
    "options": [
      "छ",
      "घ",
      "द",
      "भ"
    ],
    "correct": "घ",
    "explanation": "'घ' (gh) एक 'कण्ठ्य' (Guttural) व्यंजन है (क-वर्ग)। यह 'घोष' (Voiced) है (वर्ग का तीसरा, चौथा, पाँचवाँ वर्ण)। यह 'महाप्राण' (Aspirated) है (वर्ग का दूसरा और चौथा वर्ण)। 'भ' घोष और महाप्राण है, पर 'ओष्ठ्य' (Labial) है, 'कण्ठ्य' नहीं। ('Gh' is a Guttural consonant (k-varg). It is Voiced (3rd, 4th, 5th letter of a group). It is Aspirated (2nd and 4th letter). 'Bh' is voiced and aspirated, but Labial, not Guttural.)"
  },
  {
    "id": 36,
    "text": "निम्नलिखित में से यह सुलेख की विशेषता नहीं है - TS-TET 9 Jan 2025",
    "options": [
      "जो कुछ लिखा जाता है, वह सुंदर और आकर्षक होता है ।",
      "अक्षर सुडौल और सानुपात होते हैं ।",
      "पंक्तियाँ टेढ़ी न होकर सीधी होती है।",
      "अक्षरों का झुकाव दाहिनी या बायीं ओर होता है ।"
    ],
    "correct": "अक्षरों का झुकाव दाहिनी या बायीं ओर होता है ।",
    "explanation": "सुलेख (Calligraphy) का अर्थ है सुंदर लिखावट। इसमें अक्षरों का सुडौल होना, आकर्षक होना, सानुपात (proportionate) होना और पंक्तियों का सीधा होना शामिल है। मानक देवनागरी सुलेख में अक्षर सीधे (upright) होते हैं, न कि झुके हुए। (Calligraphy means beautiful handwriting. It includes well-formed, attractive, proportionate letters and straight lines. Standard Devanagari calligraphy has upright letters, not slanted ones.)"
  },
  {
    "id": 37,
    "text": "न्याय और निष्पक्षता शिक्षक का यह गुण है - TS-TET 9 Jan 2025",
    "options": [
      "नैतिक",
      "वैयक्तिक",
      "शारीरिक",
      "मानसिक"
    ],
    "correct": "नैतिक",
    "explanation": "न्याय (Justice) और निष्पक्षता (impartiality) एक शिक्षक के व्यावसायिक आचरण (professional conduct) से संबंधित हैं और इन्हें नैतिक गुण (Moral qualities) माना जाता है। (Justice and impartiality are related to a teacher's professional conduct and are considered moral qualities.)"
  },
  {
    "id": 38,
    "text": "निम्नलिखित में से यह मॉण्टेसरी पद्धति का गुण नहीं है - TS-TET 9 Jan 2025",
    "options": [
      "यह पद्धति स्वयं शिक्षा पर बल देती है।",
      "यह पद्धति वैयक्तिक शिक्षण पर बल देती है।",
      "यह पद्धति बालक को अपना ध्यान केंद्रित करने का अधिकार देती है ।",
      "इस पद्धति में दंड और पुरस्कार को भी स्थान दिया गया है।"
    ],
    "correct": "इस पद्धति में दंड और पुरस्कार को भी स्थान दिया गया है।",
    "explanation": "मॉण्टेसरी पद्धति (Montessori method) स्व-शिक्षा (self-education) और स्वतंत्रता (freedom) पर केंद्रित है। मारिया मॉण्टेसरी बाहरी दंड (external punishment) और पुरस्कार (rewards) के सख्त खिलाफ थीं, क्योंकि उनका मानना था कि इससे बच्चे की आंतरिक प्रेरणा (internal motivation) बाधित होती है। (The Montessori method focuses on self-education and freedom. Maria Montessori was strictly against external punishment and rewards, as she believed it hinders a child's internal motivation.)"
  },
  {
    "id": 39,
    "text": "छात्रों की डायरी, शिक्षकों द्वारा तैयार किये गए घटना वृत तथा संचित अभिलेख मूल्यांकन की इस विधि के अंतर्गत आते हैं - TS-TET 9 Jan 2025",
    "options": [
      "छात्रों द्वारा निर्मित वस्तुएँ",
      "अभिलेख",
      "निरीक्षण",
      "प्रश्नावली"
    ],
    "correct": "अभिलेख",
    "explanation": "डायरी (Diaries), घटना वृत्त (Anecdotal records) और संचित अभिलेख (Cumulative records) ये सभी लिखित दस्तावेज (written documents) हैं जो छात्र की प्रगति का ब्यौरा रखते हैं। इन्हें मूल्यांकन की 'अभिलेख' (Records) विधि के रूप में वर्गीकृत किया जाता है। (Diaries, Anecdotal records, and Cumulative records are all written documents that detail a student's progress. They are classified under the 'Records' method of assessment.)"
  },
  {
    "id": 40,
    "text": "निम्नलिखित में से यह श्रव्य दृश्य उपकरण है - TS-TET 9 Jan 2025",
    "options": [
      "रेडियो",
      "श्यामपट",
      "रेखाचित्र",
      "चलचित्र"
    ],
    "correct": "चलचित्र",
    "explanation": "श्रव्य-दृश्य उपकरण (Audio-Visual Aid) वह है जिसे देखा (visual) और सुना (audio) दोनों जा सके। 'रेडियो' केवल श्रव्य है। 'श्यामपट' और 'रेखाचित्र' केवल दृश्य हैं। 'चलचित्र' (Motion Picture/Film) में ध्वनि और चित्र दोनों होते हैं, अतः यह श्रव्य-दृश्य उपकरण है। (An Audio-Visual Aid is one that can be both seen and heard. 'Radio' is only audio. 'Blackboard' and 'Diagram' are only visual. A 'Motion Picture' (Film) has both sound and picture, hence it is an audio-visual aid.)"
  },
  {
    "id": 41,
    "text": "निम्नलिखित में से यह चार्ल्स अलबर्ट टिंडली की रचना है -\n TS-TET 23 June 2025",
    "options": [
      "न्यू स्पेस ऑफ पेराडाइज़",
      "न्यू स्टोरी ऑफ पेराडाइज़",
      "न्यू सांग्स ऑफ पेराडाइज़",
      "न्यू एरा ऑफ पेराडाइज़"
    ],
    "correct": "न्यू सांग्स ऑफ पेराडाइज़",
    "explanation": "चार्ल्स अलबर्ट टिंडली (Charles Albert Tindley) एक अमेरिकी मेथोडिस्ट मंत्री और गॉस्पेल (gospel) संगीतकार थे। 'न्यू सांग्स ऑफ पेराडाइज़' (New Songs of Paradise) उनकी प्रसिद्ध रचनाओं में से एक है। यह प्रश्न पाठ्यपुस्तक से संबंधित है।"
  },
  {
    "id": 42,
    "text": "निम्नलिखित में से यह पठन-हेतु (केवल पढ़ने के लिए) पाठ है -\n TS-TET 23 June 2025",
    "options": [
      "प्यारा गाँव",
      "ऐसा प्यारा देश है मेरा",
      "बढ़ते कदम",
      "उद्यान"
    ],
    "correct": "उद्यान",
    "explanation": "यह प्रश्न तेलंगाना/आंध्र प्रदेश राज्य की हिंदी पाठ्यपुस्तकों पर आधारित है। 'उद्यान' (Garden) पाठ को 'पठन-हेतु' यानी केवल पढ़ने और समझने के अभ्यास के लिए शामिल किया गया है, न कि विस्तृत मूल्यांकन (evaluation) के लिए।"
  },
  {
    "id": 43,
    "text": "'हमारे त्यौहार' पाठ की विधा है -\n TS-TET 23 June 2025",
    "options": [
      "कविता",
      "निबंध",
      "कहानी",
      "संवाद"
    ],
    "correct": "निबंध",
    "explanation": "पाठ्यपुस्तक में 'हमारे त्यौहार' (Our Festivals) पाठ को एक निबंध (Essay) की विधा में प्रस्तुत किया गया है, जिसमें भारत के विभिन्न त्यौहारों के महत्व और मनाने के तरीकों पर जानकारी दी गई है।"
  },
  {
    "id": 44,
    "text": "तन, मन व आत्मा से जो मजबूत होता है, वह सफलता पाता है। वाक्य सर्वनाम के इस प्रकार का उदाहरण है -\n TS-TET 23 June 2025",
    "options": [
      "पुरुषवाचक सर्वनाम",
      "निश्चयवाचक सर्वनाम",
      "संबंधवाचक सर्वनाम",
      "निजवाचक सर्वनाम"
    ],
    "correct": "संबंधवाचक सर्वनाम",
    "explanation": "इस वाक्य में 'जो' और 'वह' सर्वनामों का प्रयोग हुआ है। 'जो' और 'वह' (या 'सो') ऐसे सर्वनाम हैं जो वाक्य के दो हिस्सों के बीच संबंध (relation) स्थापित करते हैं। इसलिए, यह संबंधवाचक सर्वनाम (Relative Pronoun) का उदाहरण है।"
  },
  {
    "id": 45,
    "text": "निम्नलिखित में से यह वर्ण 'रेलवे स्टेशन' पाठ के द्वारा सिखाए जाने वाले वर्णों के अंतर्गत नहीं आता -\n TS-TET 23 June 2025",
    "options": [
      "फ",
      "घ",
      "ड",
      "च"
    ],
    "correct": "च",
    "explanation": "यह प्रश्न पाठ्यपुस्तक के 'रेलवे स्टेशन' (Railway Station) पाठ से संबंधित है। उस पाठ के अभ्यास (exercises) में आमतौर पर 'फ', 'घ', 'ड' जैसे वर्णों पर ध्यान केंद्रित किया जाता है। 'च' वर्ण का परिचय उस विशिष्ट पाठ के मुख्य फोकस (focus) में नहीं है।"
  },
  {
    "id": 46,
    "text": "सही घटनाक्रम पहचानिए ।\n (A) पुरस्कारों का वितरण किया जाता है ।\n (B) कक्षाएँ सजाई जाती हैं ।\n (C) 14 नवंबर के दिन बाल दिवस मनाया जाता है ।\n (D) प्रतियोगिताओं का आयोजन किया जाता है ।\n TS-TET 23 June 2025",
    "options": [
      "A, D, B, C",
      "B, C, D, A",
      "C, B, D, A",
      "D, A, C, B"
    ],
    "correct": "C, B, D, A",
    "explanation": "यह प्रश्न 'बाल दिवस' (Children's Day) मनाने के तार्किक क्रम (logical sequence) पर आधारित है। सही क्रम है: (C) पहले 14 नवंबर की तारीख आती है, (B) फिर उस दिन के लिए कक्षाएँ सजाई जाती हैं, (D) उसके बाद प्रतियोगिताओं (competitions) का आयोजन होता है, और (A) अंत में पुरस्कारों का वितरण किया जाता है।"
  },
  {
    "id": 47,
    "text": "निम्नलिखित में से गलत जोड़ी पहचानिए ।\n TS-TET 23 June 2025",
    "options": [
      "रोहित - चित्रकारी",
      "गुसाड़ी - देवी",
      "सुनीता - रेलगाड़ी",
      "बतुकम्मा - गौरी माँ"
    ],
    "correct": "गुसाड़ी - देवी",
    "explanation": "यह प्रश्न पाठ्यपुस्तक के पात्रों (characters) और विषयों (themes) पर आधारित है। 'रोहित' चित्रकारी से, 'सुनीता' रेलगाड़ी से और 'बतुकम्मा' त्यौहार गौरी माँ से संबंधित है। 'गुसाड़ी' (Gusadi) एक लोक नृत्य (folk dance) है, इसका संबंध सीधे 'देवी' से इस प्रसंग में गलत है।"
  },
  {
    "id": 48,
    "text": "भारत का राष्ट्रीय झंडा तिरंगा है। वाक्य में प्रयुक्त रेखांकित शब्द इसका प्रकार है -\n TS-TET 23 June 2025",
    "options": [
      "गुणवाचक विशेषण",
      "परिमाणवाचक विशेषण",
      "संख्यावाचक विशेषण",
      "सार्वनामिक विशेषण"
    ],
    "correct": "संख्यावाचक विशेषण",
    "explanation": "यहाँ 'तिरंगा' (Tricolour) शब्द (जो रेखांकित माना गया है) 'तीन रंगों का समूह' को दर्शाता है, जो एक निश्चित संख्या (Number) का बोध कराता है। जब कोई शब्द किसी संज्ञा (झंडा) की संख्या संबंधी विशेषता बताता है, तो वह संख्यावाचक विशेषण (Numeral Adjective) कहलाता है।"
  },
  {
    "id": 49,
    "text": "मानव सभ्यता-संस्कृति की रक्षा के लिए वन-संरक्षण आवश्यक है। रेखांकित शब्द इस समास का उदाहरण हैं -\n TS-TET 23 June 2025",
    "options": [
      "तत्पुरुष समास",
      "द्विगु समास",
      "अव्ययीभाव समास",
      "द्वंद्व समास"
    ],
    "correct": "द्वंद्व समास",
    "explanation": "रेखांकित शब्द 'सभ्यता-संस्कृति' (Civilization and Culture) है। इस सामासिक पद में दोनों शब्द (सभ्यता और संस्कृति) प्रधान हैं और इनके बीच 'और' (and) योजक शब्द का लोप है। जिस समास में दोनों पद प्रधान होते हैं, उसे द्वंद्व समास (Copulative Compound) कहते हैं।"
  },
  {
    "id": 50,
    "text": "'स्वच्छ' शब्द इस संधि का उदाहरण है -\n TS-TET 23 June 2025",
    "options": [
      "अयादि संधि",
      "वृद्धि संधि",
      "यण संधि",
      "गुण संधि"
    ],
    "correct": "यण संधि",
    "explanation": "'स्वच्छ' (Clean) शब्द का संधि-विच्छेद 'सु + अच्छ' है। यहाँ 'उ' (लघु स्वर) के बाद 'अ' (भिन्न स्वर) आ रहा है, जिससे 'उ' का 'व्' में परिवर्तन हो रहा है। यह नियम यण संधि (Yan Sandhi) का है।"
  },
  {
    "id": 51,
    "text": "निम्नलिखित में से यह शब्द स्त्रीलिंग नहीं है -\n TS-TET 23 June 2025",
    "options": [
      "बादल",
      "चिड़िया",
      "दया",
      "छात्रा"
    ],
    "correct": "बादल",
    "explanation": "लिंग (Gender) की पहचान वाक्य प्रयोग से की जा सकती है। 'चिड़िया' उड़ रही है (स्त्रीलिंग), 'दया' आ गई (स्त्रीलिंग), 'छात्रा' पढ़ रही है (स्त्रीलिंग)। लेकिन 'बादल' गरज रहा है (पुल्लिंग)। अतः 'बादल' (Cloud) स्त्रीलिंग नहीं है।"
  },
  {
    "id": 52,
    "text": "पिताजी बोले __ \"जाओ __ कपड़े बदल लो, नहीं तो सर्दी लग जाएगी।\" रिक्त स्थानों के लिए उपयुक्त विराम चिह्न क्रमशः हैं -\n TS-TET 23 June 2025",
    "options": [
      "निर्देशक चिह्न, अल्पविराम",
      "अल्पविराम, निर्देशक चिह्न",
      "अर्धविराम, योजक",
      "अल्पविराम, अर्धविराम"
    ],
    "correct": "अल्पविराम, निर्देशक चिह्न",
    "explanation": "विराम चिह्नों (Punctuation) के नियमानुसार, 'पिताजी बोले' के बाद एक अल्पविराम (Comma) (,) का प्रयोग किया जाता है। 'जाओ' के बाद, अगले वाक्य 'कपड़े बदल लो' को जोड़ने के लिए यहाँ निर्देशक चिह्न (Dash) (—) का प्रयोग किया गया है (कुंजी के अनुसार)।"
  },
  {
    "id": 53,
    "text": "खरगोश ने इधर-उधर देखा । रेखांकित शब्द है -\n TS-TET 23 June 2025",
    "options": [
      "रीतिवाचक क्रियाविशेषण",
      "स्थानवाचक क्रियाविशेषण",
      "कालवाचक क्रियाविशेषण",
      "परिमाणवाचक क्रियाविशेषण"
    ],
    "correct": "स्थानवाचक क्रियाविशेषण",
    "explanation": "'इधर-उधर' (Here and there) शब्द क्रिया (देखना) के होने के स्थान (Place) का बोध करा रहा है। जो शब्द क्रिया के स्थान की विशेषता बताते हैं, उन्हें स्थानवाचक क्रियाविशेषण (Adverb of Place) कहते हैं।"
  },
  {
    "id": 54,
    "text": "'धोखा देना' अर्थ से संबंधित सही मुहावरा पहचानिए ।\n TS-TET 23 June 2025",
    "options": [
      "आँखों में धूल झोंकना",
      "आग में घी डालना",
      "आसमान सिर पर उठाना",
      "उल्लू बनाना"
    ],
    "correct": "आँखों में धूल झोंकना",
    "explanation": "'धोखा देना' (To deceive) का सही मुहावVरा (Idiom) 'आँखों में धूल झोंकना' है। 'आग में घी डालना' का अर्थ है क्रोध भड़काना। 'आसमान सिर पर उठाना' का अर्थ है बहुत शोर करना। 'उल्लू बनाना' का अर्थ है मूर्ख बनाना।"
  },
  {
    "id": 55,
    "text": "पाठ-योजना बनाते समय एक शिक्षक को इसका ज्ञान होना आवश्यक नहीं है -\n TS-TET 23 June 2025",
    "options": [
      "बालक की रुचियों, क्षमताओं",
      "विषय",
      "विभिन्न शिक्षण विधियों",
      "स्व-व्यक्तित्व"
    ],
    "correct": "स्व-व्यक्तित्व",
    "explanation": "एक अच्छी पाठ-योजना (Lesson Plan) बनाने के लिए शिक्षक को बालक की रुचियों (interests), विषय (subject) का ज्ञान, और शिक्षण विधियों (teaching methods) का ज्ञान होना आवश्यक है। शिक्षक के अपने व्यक्तित्व (Self-personality) का ज्ञान पाठ-योजना बनाने के लिए प्रत्यक्ष रूप से आवश्यक नहीं है।"
  },
  {
    "id": 56,
    "text": "इस ध्वनि के उच्चारण में फेफड़े से वायु वेग से निकलती है और मुख-द्वार के खुले होने से काकल के बाहर रगड़ उत्पन्न होती है -\n TS-TET 23 June 2025",
    "options": [
      "ष",
      "व",
      "ह",
      "ल"
    ],
    "correct": "ह",
    "explanation": "यह 'ह' (ha) ध्वनि के उच्चारण की विशेषता है। 'ह' एक ऊष्म (Sibilant) और सघोष व्यंजन है, जिसका उच्चारण स्थान कंठ या काकल (Glottis) है। इसके उच्चारण में हवा रगड़ (friction) खाकर बाहर निकलती है।"
  },
  {
    "id": 57,
    "text": "निम्नलिखित में से यह वस्तुनिष्ठ परीक्षा का प्रकार नहीं है -\n TS-TET 23 June 2025",
    "options": [
      "क्रियात्मक परीक्षा",
      "बहु-विकल्प परीक्षा",
      "सत्यासत्य परीक्षा",
      "समरूप परीक्षा"
    ],
    "correct": "क्रियात्मक परीक्षा",
    "explanation": "वस्तुनिष्ठ परीक्षा (Objective Test) में बहु-विकल्प (MCQ), सत्यासत्य (True/False) और समरूप (Matching) प्रश्न शामिल होते हैं, जिनके उत्तर निश्चित होते हैं। क्रियात्मक परीक्षा (Practical Test) में प्रदर्शन (performance) या कौशल (skill) का आकलन किया जाता है, जो वस्तुनिष्ठ नहीं होती।"
  },
  {
    "id": 58,
    "text": "निम्नलिखित में से यह लिखना सिखाने का महत्वपूर्ण नियम है -\n TS-TET 23 June 2025",
    "options": [
      "लेखन-चक्र अधिक लंबा होना चाहिए ।",
      "प्रारंभ में गति की अपेक्षा अक्षरों की सुंदरता पर अधिक ध्यान देना चाहिए ।",
      "एकदम छोटे-छोटे अक्षर लिखने के लिए कहना चाहिए ।",
      "बालकों को पढ़ी हुई वस्तु की अपेक्षा नई सामग्री लिखने के लिए कहना चाहिए।"
    ],
    "correct": "प्रारंभ में गति की अपेक्षा अक्षरों की सुंदरता पर अधिक ध्यान देना चाहिए ।",
    "explanation": "बच्चों को लिखना (Writing) सिखाते समय, यह महत्वपूर्ण है कि वे शुरू में अक्षरों को सही और सुंदर (legible) बनाना सीखें। प्रारंभ (beginning) में गति (speed) पर नहीं, बल्कि अक्षरों की बनावट और सुंदरता पर ध्यान देना चाहिए।"
  },
  {
    "id": 59,
    "text": "शिक्षण की इस प्रणाली का उद्देश्य छात्रों में निरीक्षण, परीक्षण और चिंतन गुणों का विकास करना है -\n TS-TET 23 June 2025",
    "options": [
      "विवरण प्रणाली",
      "व्याख्या प्रणाली",
      "तुलना प्रणाली",
      "वर्णन प्रणाली"
    ],
    "correct": "तुलना प्रणाली",
    "explanation": "तुलना प्रणाली (Comparison Method) में, छात्र दो या दो से अधिक वस्तुओं या विचारों के बीच समानताएं और अंतर खोजते हैं। इस प्रक्रिया में उन्हें निरीक्षण (observation), परीक्षण (analysis) और चिंतन (critical thinking) करने की आवश्यकता होती है।"
  },
  {
    "id": 60,
    "text": "शिक्षण की इस विधि में मातृभाषा का प्रयोग किए बिना ही, एक नई भाषा सिखाई जाती है -\n TS-TET 23 June 2025",
    "options": [
      "डाल्टन योजना",
      "निदर्शित स्वाध्याय प्रणाली",
      "अनुवाद विधि",
      "प्रत्यक्ष विधि"
    ],
    "correct": "प्रत्यक्ष विधि",
    "explanation": "प्रत्यक्ष विधि (Direct Method) में, दूसरी भाषा (target language) को सीधे उसी भाषा में सिखाया जाता है। इसमें मातृभाषा (mother tongue) के अनुवाद (translation) का सहारा नहीं लिया जाता। लक्ष्य (aim) यह होता है कि छात्र नई भाषा में ही सोचना सीखें।"
  },
  {
    "id": 61,
    "text": "महादेवी वर्मा द्वारा रचित संस्मरण है -",
    "options": [
      "पथ के साथी",
      "अतीत के चलचित्र",
      "मेरा परिवार",
      "ये सभी"
    ],
    "correct": "ये सभी",
    "explanation": "महादेवी वर्मा जी ने 'पथ के साथी', 'अतीत के चलचित्र' और 'मेरा परिवार' जैसे प्रसिद्ध संस्मरणों की रचना की है। वे छायावाद की प्रमुख स्तंभों में से एक हैं।"
  },
  {
    "id": 62,
    "text": "सूरदास मुख्य रूप से ...... रस के कवि माने जाते हैं।",
    "options": [
      "श्रृंगार",
      "वीर",
      "करुण",
      "वात्सल्य"
    ],
    "correct": "वात्सल्य",
    "explanation": "सूरदास जी को 'वात्सल्य रस' का सम्राट कहा जाता है। उन्होंने श्री कृष्ण की बाल लीलाओं का अत्यंत सजीव और मार्मिक वर्णन किया है।"
  },
  {
    "id": 63,
    "text": "जयशंकर प्रसाद का जीवनकाल माना जाता है -",
    "options": [
      "1889 से 1937 तक",
      "1850 से 1900 तक",
      "1900 से 1950 तक",
      "1875 से 1925 तक"
    ],
    "correct": "1889 से 1937 तक",
    "explanation": "छायावाद के प्रवर्तक कवि जयशंकर प्रसाद का जीवनकाल 1889 ई. से 1937 ई. तक माना जाता है। 'कामायनी' उनका प्रसिद्ध महाकाव्य है।"
  },
  {
    "id": 64,
    "text": "उच्च प्राथमिक स्तर पर 'पत्र लेखन' पाठ का मुख्य उद्देश्य है -",
    "options": [
      "केवल व्याकरण सिखाना",
      "सुंदर लेखन का अभ्यास",
      "रचनात्मक अभिव्यक्ति और औपचारिकता का ज्ञान",
      "कहानी याद कराना"
    ],
    "correct": "रचनात्मक अभिव्यक्ति और औपचारिकता का ज्ञान",
    "explanation": "पत्र लेखन (Letter Writing) पाठ का उद्देश्य छात्रों को अपने विचारों को लिखित रूप में व्यक्त करने (रचनात्मक अभिव्यक्ति) और पत्र के प्रारूप व शिष्टाचार (औपचारिकता) सिखाना है।"
  },
  {
    "id": 65,
    "text": "निम्न में से यह 'एकांकी' पाठ का उदाहरण है -",
    "options": [
      "ईदगाह",
      "नीलकंठ",
      "रीढ़ की हड्डी",
      "दो बैलों की कथा"
    ],
    "correct": "रीढ़ की हड्डी",
    "explanation": "दिए गए विकल्पों में, 'रीढ़ की हड्डी' (जगदीश चंद्र माथुर द्वारा रचित) एक प्रसिद्ध 'एकांकी' (One-act play) है, जबकि अन्य 'कहानी' या 'संस्मरण' विधा की रचनाएँ हैं।"
  },
  {
    "id": 66,
    "text": "इन्हें 'राष्ट्रकवि' की उपाधि से सम्मानित किया गया था -",
    "options": [
      "सुमित्रानंदन पंत",
      "सूर्यकांत त्रिपाठी 'निराला'",
      "मैथिलीशरण गुप्त",
      "रामधारी सिंह 'दिनकर'"
    ],
    "correct": "मैथिलीशरण गुप्त",
    "explanation": "मैथिलीशरण गुप्त को उनकी रचना 'भारत-भारती' के लिए महात्मा गांधी ने 'राष्ट्रकवि' की उपाधि दी थी। (रामधारी सिंह 'दिनकर' को भी राष्ट्रकवि कहा जाता है, लेकिन 'गुप्त' जी को यह उपाधि पहले मिली थी।)"
  },
  {
    "id": 67,
    "text": "हिमालय भारत का गौरव है। 'हिमालय' शब्द में प्रयुक्त संज्ञा है -",
    "options": [
      "व्यक्तिवाचक",
      "जातिवाचक",
      "भाववाचक",
      "द्रव्यवाचक"
    ],
    "correct": "व्यक्तिवाचक",
    "explanation": "'हिमालय' शब्द किसी एक विशेष पर्वत का नाम बोध कराता है, न कि सभी पर्वतों का। इसलिए, यह 'व्यक्तिवाचक संज्ञा' (Proper Noun) है।"
  },
  {
    "id": 68,
    "text": "जो सब कुछ जानता हो। वाक्यांश के लिए एक शब्द है -",
    "options": [
      "अल्पज्ञ",
      "बहुज्ञ",
      "सर्वज्ञ",
      "विज्ञ"
    ],
    "correct": "सर्वज्ञ",
    "explanation": "'जो सब कुछ जानता हो' (One who knows everything) के लिए एक शब्द 'सर्वज्ञ' होता है। 'अल्पज्ञ' का अर्थ है कम जानने वाला।"
  },
  {
    "id": 69,
    "text": "बच्चे मैदान ...... खेल रहे हैं और शिक्षक पेड़ ...... नीचे बैठे हैं। रिक्त स्थानों की पूर्ति के लिए सही विकल्प है -",
    "options": [
      "पर, के",
      "में, के",
      "में, पर",
      "से, में"
    ],
    "correct": "में, के",
    "explanation": "सही कारक चिह्न (Postpositions) होंगे: 'मैदान **में**' (अधिकरण कारक - स्थान के अंदर) और 'पेड़ **के** नीचे' (संबंध कारक)। सही विकल्प 'में, के' है।"
  },
  {
    "id": 70,
    "text": "वह बहुत तेज़ दौड़ता है। वाक्य में 'तेज़' शब्द है -",
    "options": [
      "संज्ञा",
      "सर्वनाम",
      "क्रिया",
      "क्रिया-विशेषण"
    ],
    "correct": "क्रिया-विशेषण",
    "explanation": "इस वाक्य में 'दौड़ता है' क्रिया है। 'तेज़' शब्द क्रिया (दौड़ने) की विशेषता बता रहा है कि वह कैसे दौड़ता है। अतः 'तेज़' (Fast) 'क्रिया-विशेषण' (Adverb) है।"
  },
  {
    "id": 71,
    "text": "सज्जन का सही संधि-विच्छेद है -",
    "options": [
      "सज् + जन",
      "स + ज्जन",
      "सत् + जन",
      "सज + न"
    ],
    "correct": "सत् + जन",
    "explanation": "'सज्जन' में व्यंजन संधि है। इसका विच्छेद 'सत् + जन' होता है, जहाँ 'त्' का 'ज्' में परिवर्तन हो जाता है।"
  },
  {
    "id": 72,
    "text": "'आग बबूला होना' मुहावरे का अर्थ है -",
    "options": [
      "आग जलाना",
      "बहुत प्रसन्न होना",
      "बहुत क्रोधित होना",
      "आग से खेलना"
    ],
    "correct": "बहुत क्रोधित होना",
    "explanation": "'आग बबूला होना' मुहावरे (Idiom) का अर्थ है, अत्यंत या बहुत अधिक क्रोधित (Very angry) होना।"
  },
  {
    "id": 73,
    "text": "\"अरे! तुम कब आए?\" यह वाक्य है -",
    "options": [
      "आज्ञार्थक",
      "विधानार्थक",
      "प्रश्नार्थक",
      "विस्मयार्थक"
    ],
    "correct": "विस्मयार्थक",
    "explanation": "यद्यपि इस वाक्य में प्रश्न (कब आए?) है, लेकिन 'अरे!' शब्द और विस्मयादिबोधक चिह्न (!) का प्रयोग आश्चर्य (Surprise) के भाव को प्रमुखता से व्यक्त करता है। अतः यह 'विस्मयार्थक' (Exclamatory) वाक्य है।"
  },
  {
    "id": 74,
    "text": "सही क्रमवाला वाक्य पहचानिए -",
    "options": [
      "पक्षी हैं चहचहा रहे पेड़ पर।",
      "पेड़ पर पक्षी चहचहा रहे हैं।",
      "चहचहा रहे हैं पक्षी पेड़ पर।",
      "हैं पेड़ पर पक्षी चहचहा रहे।"
    ],
    "correct": "पेड़ पर पक्षी चहचहा रहे हैं।",
    "explanation": "हिंदी वाक्य संरचना के अनुसार सही क्रम है: 'पेड़ पर' (अधिकरण), 'पक्षी' (कर्ता), 'चहचहा रहे हैं' (क्रिया)। 'पेड़ पर पक्षी चahचहा रहे हैं।' व्याकरणिक रूप से सही है।"
  },
  {
    "id": 75,
    "text": "यह अग्र, अवृत्ताकार स्वर है -",
    "options": [
      "आ",
      "उ",
      "ओ",
      "इ"
    ],
    "correct": "इ",
    "explanation": "स्वर 'इ' (i) के उच्चारण में दोनों गुण हैं: यह 'अग्र' (Front vowel - जीभ का अगला हिस्सा उठता है) है, और 'अवृत्ताकार' (Unrounded - होंठ गोल नहीं होते) है।"
  },
  {
    "id": 76,
    "text": "वर्तनी (स्పెల్లింగ్) की अशुद्धियों के अंतर्गत निम्न में से यह 'वर्ण-लोप' (अक्षर छूट जाना) संबंधी अशुद्धि का उदाहरण है-",
    "options": [
      "अतीथी",
      "उज्वल",
      "कृप्या",
      "ब्रह्मण"
    ],
    "correct": "उज्वल",
    "explanation": "'वर्ण-लोप' (Omission of a letter) का अर्थ है कि शब्द में से एक आवश्यक अक्षर छूट गया है। 'उज्वल' अशुद्ध है; शुद्ध शब्द 'उज्ज्वल' (Ujjwal) है, जिसमें एक 'ज्' का लोप हो गया है।"
  },
  {
    "id": 77,
    "text": "व्याकरण शिक्षण की 'प्रत्यक्ष विधि' (Direct Method) में -",
    "options": [
      "मातृभाषा का प्रयोग किया जाता है।",
      "मातृभाषा का प्रयोग वर्जित होता है।",
      "केवल नियमों को रटाया जाता है।",
      "अनुवाद पर बल दिया जाता है।"
    ],
    "correct": "मातृभाषा का प्रयोग वर्जित होता है।",
    "explanation": "प्रत्यक्ष विधि में, लक्ष्य भाषा (Target Language) को सीधे उसी भाषा के माध्यम से सिखाया जाता है। इसमें वार्तालाप और मौखिक अभ्यास पर बल होता है और 'मातृभाषा का प्रयोग वर्जित होता है'।"
  },
  {
    "id": 78,
    "text": "निगमन विधि (Deductive Method) में शिक्षण का सूत्र है -",
    "options": [
      "उदाहरण से नियम की ओर",
      "नियम से उदाहरण की ओर",
      "सरल से कठिन की ओर",
      "ज्ञात से अज्ञात की ओर"
    ],
    "correct": "नियम से उदाहरण की ओर",
    "explanation": "निगमन विधि, आगमन विधि के विपरीत है। इसमें शिक्षक पहले सामान्य 'नियम' (Rule) प्रस्तुत करता है और फिर उस नियम को स्पष्ट करने के लिए 'उदाहरण' (Examples) देता है।"
  },
  {
    "id": 79,
    "text": "श्रव्य-दृश्य सामग्री (Audio-Visual Aid) का उदाहरण है -",
    "options": [
      "रेडियो",
      "चार्ट",
      "टेलीविज़न",
      "टेप रिकॉर्डर"
    ],
    "correct": "टेलीविज़न",
    "explanation": "श्रव्य-दृश्य सामग्री वह है जिसे सुना (Audio) और देखा (Visual) दोनों जा सके। 'टेलीविज़न' (Television) इसका उत्तम उदाहरण है। रेडियो केवल श्रव्य है, चार्ट केवल दृश्य है।"
  },
  {
    "id": 80,
    "text": "सतत और व्यापक मूल्यांकन (CCE) में 'व्यापक' शब्द का अर्थ है -",
    "options": [
      "केवल शैक्षिक क्षेत्रों का मूल्यांकन",
      "केवल सह-शैक्षिक क्षेत्रों का मूल्यांकन",
      "शैक्षिक और सह-शैक्षिक दोनों क्षेत्रों का मूल्यांकन",
      "बार-बार परीक्षा लेना"
    ],
    "correct": "शैक्षिक और सह-शैक्षिक दोनों क्षेत्रों का मूल्यांकन",
    "explanation": "'व्यापक' (Comprehensive) का अर्थ है छात्र के विकास के सभी पहलुओं, यानी 'शैक्षिक' (Academic) और 'सह-शैक्षिक' (Co-Scholastic - जैसे कला, खेल, जीवन कौशल) दोनों क्षेत्रों का मूल्यांकन करना।"
  },
  {
    "id": 81,
    "text": "'कामायनी' महाकाव्य के रचयिता हैं -",
    "options": [
      "सूर्यकांत त्रिपाठी 'निराला'",
      "जयशंकर प्रसाद",
      "सुमित्रानंदन पंत",
      "महादेवी वर्मा"
    ],
    "correct": "जयशंकर प्रसाद",
    "explanation": "'कामायनी' हिंदी भाषा का एक प्रसिद्ध महाकाव्य है और इसके रचयिता छायावादी कवि 'जयशंकर प्रसाद' हैं।"
  },
  {
    "id": 82,
    "text": "मीराबाई की भक्ति मुख्य रूप से ...... भाव की थी।",
    "options": [
      "सख्य भाव",
      "दास्य भाव",
      "माधुर्य भाव",
      "शांत भाव"
    ],
    "correct": "माधुर्य भाव",
    "explanation": "मीराबाई श्री कृष्ण को अपना पति मानकर उनकी उपासना करती थीं। इसलिए, उनकी भक्ति 'माधुर्य भाव' (Bridal Mysticism) की कहलाती है।"
  },
  {
    "id": 83,
    "text": "'गबन' और 'गोदान' किसके प्रसिद्ध उपन्यास हैं?",
    "options": [
      "प्रेमचंद",
      "जैनेन्द्र कुमार",
      "फणीश्वर नाथ 'रेणु'",
      "यशपाल"
    ],
    "correct": "प्रेमचंद",
    "explanation": "'गबन' और 'गोदान' उपन्यास सम्राट 'प्रेमचंद' जी द्वारा रचित कालजयी उपन्यास हैं, जो भारतीय ग्रामीण जीवन और समाज का यथार्थ चित्रण करते हैं।"
  },
  {
    "id": 84,
    "text": "'चींटी' शब्द का सही बहुवचन (Plural) रूप है -",
    "options": [
      "चींटीयाँ",
      "चींटियाँ",
      "चींटीयों",
      "चींटे"
    ],
    "correct": "चींटियाँ",
    "explanation": "स्त्रीलिंग शब्द 'चींटी' (Ant) का बहुवचन रूप 'चींटियाँ' (Ants) होता है, जिसमें अंतिम 'ई' की मात्रा 'इ' में बदल जाती है और 'याँ' जोड़ा जाता है।"
  },
  {
    "id": 85,
    "text": "'आकाश' शब्द का पर्यायवाची (Synonym) नहीं है -",
    "options": [
      "नभ",
      "गगन",
      "अंबर",
      "अनल"
    ],
    "correct": "अनल",
    "explanation": "'नभ', 'गगन' और 'अंबर' आकाश (Sky) के पर्यायवाची हैं। 'अनल' (Anai) 'अग्नि' या 'आग' (Fire) का पर्यायवाची है।"
  },
  {
    "id": 86,
    "text": "जो आँखों के सामने हो। वाक्यांश के लिए एक शब्द है -",
    "options": [
      "परोक्ष",
      "प्रत्यक्ष",
      "दूरस्थ",
      "अदृश्य"
    ],
    "correct": "प्रत्यक्ष",
    "explanation": "'जो आँखों के सामने हो' (That which is in front of the eyes) के लिए एक शब्द 'प्रत्यक्ष' (Direct/Visible) है। इसका विलोम 'परोक्ष' (अप्रत्यक्ष) होता है।"
  },
  {
    "id": 87,
    "text": "मोहन ने सोहन ...... दूध ...... थैला लिया। रिक्त स्थानों की पूर्ति के लिए सही विकल्प है -",
    "options": [
      "का, से",
      "के, में",
      "से, का",
      "को, का"
    ],
    "correct": "से, का",
    "explanation": "सही कारक चिह्न होंगे: 'सोहन **से**' (अपादान कारक - अलग होने का भाव) और 'दूध **का** थैला' (संबंध कारक)। सही विकल्प 'से, का' है।"
  },
  {
    "id": 88,
    "text": "'पराजय' शब्द में प्रयुक्त उपसर्ग (Prefix) है -",
    "options": [
      "प",
      "परा",
      "जय",
      "पर"
    ],
    "correct": "परा",
    "explanation": "'पराजय' (Defeat) शब्द 'परा' उपसर्ग और 'जय' (Victory) मूल शब्द के योग से बना है। 'परा' का अर्थ 'विपरीत' या 'उलटा' होता है।"
  },
  {
    "id": 89,
    "text": "'काला घोड़ा' में 'काला' शब्द है -",
    "options": [
      "संज्ञा",
      "सर्वनाम",
      "गुणवाचक विशेषण",
      "संख्यावाचक विशेषण"
    ],
    "correct": "गुणवाचक विशेषण",
    "explanation": "'काला' (Black) शब्द 'घोड़ा' (संज्ञा) की विशेषता (रंग) बता रहा है। यह संज्ञा का गुण है, अतः यह 'गुणवाचक विशेषण' (Adjective of Quality) है।"
  },
  {
    "id": 90,
    "text": "'अपना उल्लू सीधा करना' मुहावरे का अर्थ है -",
    "options": [
      "उल्लू पालना",
      "दूसरों की सहायता करना",
      "अपना स्वार्थ सिद्ध करना",
      "मूर्खतापूर्ण कार्य करना"
    ],
    "correct": "अपना स्वार्थ सिद्ध करना",
    "explanation": "'अपना उल्लू सीधा करना' मुहावरे का अर्थ है, दूसरों की परवाह किए बिना केवल 'अपना स्वार्थ सिद्ध करना' (To serve one's own selfish interest)।"
  },
  {
    "id": 91,
    "text": "यदि वर्षा होती, तो फसल अच्छी होती। अर्थ के आधार पर यह वाक्य है -",
    "options": [
      "विधानवाचक",
      "इच्छावाचक",
      "संदेहवाचक",
      "संकेतवाचक"
    ],
    "correct": "संकेतवाचक",
    "explanation": "यह एक 'संकेतवाचक' (Conditional) वाक्य है, क्योंकि इसमें एक क्रिया (फसल अच्छी होना) दूसरी क्रिया (वर्षा होना) पर निर्भर (संकेत) है।"
  },
  {
    "id": 92,
    "text": "यह 'ऊष्म व्यंजन' (Sibilant) का उदाहरण है -",
    "options": [
      "य",
      "प",
      "श",
      "ट"
    ],
    "correct": "श",
    "explanation": "जिन व्यंजनों के उच्चारण में मुख से गर्म हवा (ऊष्मा) निकलती है, वे ऊष्म व्यंजन कहलाते हैं। ये चार हैं: श, ष, स, ह। 'य' अंतःस्थ है, 'प' और 'ट' स्पर्श व्यंजन हैं।"
  },
  {
    "id": 93,
    "text": "वर्तनी (Spelling) की दृष्टि से शुद्ध शब्द है -",
    "options": [
      "आर्शीवाद",
      "आशीर्वाद",
      "आर्शिवाद",
      "आर्सीवाद"
    ],
    "correct": "आशीर्वाद",
    "explanation": "शुद्ध शब्द 'आशीर्वाद' (Blessing) है। इसमें विसर्ग संधि (आशीः + वाद) है और 'र' (रेफ) 'वा' के ऊपर लगता है, 'श' के ऊपर नहीं।"
  },
  {
    "id": 94,
    "text": "भाषा शिक्षण के 'चार कौशलों' (LSRW) का मनोवैज्ञानिक क्रम है -",
    "options": [
      "सुनना, पढ़ना, बोलना, लिखना",
      "सुनना, बोलना, पढ़ना, लिखना",
      "बोलना, सुनना, लिखना, पढ़ना",
      "पढ़ना, लिखना, सुनना, बोलना"
    ],
    "correct": "सुनना, बोलना, पढ़ना, लिखना",
    "explanation": "भाषा सीखने का स्वाभाविक और मनोवैज्ञानिक क्रम है: पहले 'सुनना' (Listening), फिर 'बोलना' (Speaking), उसके बाद 'पढ़ना' (Reading), और अंत में 'लिखना' (Writing)।"
  },
  {
    "id": 95,
    "text": "गद्य शिक्षण (Prose Teaching) का मुख्य उद्देश्य है -",
    "options": [
      "रसानुभूति कराना",
      "छंद और अलंकार का ज्ञान देना",
      "ग्रहण और अभिव्यक्ति कौशल का विकास करना",
      "केवल मनोरंजन करना"
    ],
    "correct": "ग्रहण और अभिव्यक्ति कौशल का विकास करना",
    "explanation": "गद्य शिक्षण का मुख्य उद्देश्य छात्रों में पढ़कर अर्थ 'ग्रहण' (Comprehension) करने और अपने विचारों को 'अभिव्यक्त' (Expression) करने की क्षमता का विकास करना है। रसानुभूति पद्य (कविता) शिक्षण का मुख्य उद्देश्य है।"
  },
  {
    "id": 96,
    "text": "उपचारात्मक शिक्षण (Remedial Teaching) का कार्य है -",
    "options": [
      "परीक्षा से पहले पाठ्यक्रम पूरा करना",
      "छात्रों की त्रुटियों और कमजोरियों का निदान कर उन्हें दूर करना",
      "प्रतिभाशाली छात्रों को अतिरिक्त ज्ञान देना",
      "छात्रों को गृहकार्य देना"
    ],
    "correct": "छात्रों की त्रुटियों और कमजोरियों का निदान कर उन्हें दूर करना",
    "explanation": "उपचारात्मक शिक्षण, निदानात्मक परीक्षण (Diagnostic Test) के बाद किया जाता है। इसका उद्देश्य छात्रों की सीखने संबंधी 'कमजोरियों का निदान कर उन्हें दूर करना' (Diagnosing and removing weaknesses) है।"
  },
  {
    "id": 97,
    "text": "हिंदी दिवस मनाया जाता है -",
    "options": [
      "14 अक्टूबर",
      "14 सितंबर",
      "5 सितंबर",
      "26 जनवरी"
    ],
    "correct": "14 सितंबर",
    "explanation": "भारत की संविधान सभा ने 14 सितंबर 1949 को हिंदी को भारत संघ की राजभाषा के रूप में स्वीकार किया था। इसीलिए प्रतिवर्ष '14 सितंबर' को हिंदी दिवस मनाया जाता है।"
  },
  {
    "id": 98,
    "text": "'अंधे की लाठी' मुहावरे का अर्थ है -",
    "options": [
      "बहुत कमजोर होना",
      "दिखाई न देना",
      "एकमात्र सहारा",
      "असंभव कार्य करना"
    ],
    "correct": "एकमात्र सहारा",
    "explanation": "'अंधे की लाठी' का अर्थ है किसी असहाय व्यक्ति का 'एकमात्र सहारा' (The only support) होना।"
  },
  {
    "id": 99,
    "text": "'यथाशक्ति' शब्द में कौन सा समास (Compound) है?",
    "options": [
      "तत्पुरुष",
      "द्वंद्व",
      "कर्मधारय",
      "अव्ययीभाव"
    ],
    "correct": "अव्ययीभाव",
    "explanation": "'यथाशक्ति' का विग्रह 'शक्ति के अनुसार' होता है। इसमें 'यथा' एक अव्यय (Indeclinable) है और यह पूर्व पद प्रधान है, अतः यह 'अव्ययीभाव समास' (Adverbial Compound) है।"
  },
  {
    "id": 100,
    "text": "'कोमल' शब्द का सही विलोम (Antonym) है -",
    "options": [
      "नरम",
      "कठोर",
      "सरल",
      "मीठा"
    ],
    "correct": "कठोर",
    "explanation": "'कोमल' (Soft) का सटीक विलोम शब्द 'कठोर' (Hard) होता है। 'नरम' इसका पर्यायवाची है।"
  },
  {
    "id": 101,
    "text": "'परमेश्वर' शब्द में कौन सी संधि है?",
    "options": [
      "दीर्घ संधि",
      "गुण संधि",
      "वृद्धि संधि",
      "यण संधि"
    ],
    "correct": "गुण संधि",
    "explanation": "'परमेश्वर' का संधि-विच्छेद 'परम + ईश्वर' है। यहाँ 'अ' (परम) और 'ई' (ईश्वर) मिलकर 'ए' बन रहे हैं (अ + ई = ए)। यह नियम गुण संधि (Gun Sandhi) का है।"
  },
  {
    "id": 102,
    "text": "'नीलकमल' शब्द किस समास का उदाहरण है?",
    "options": [
      "कर्मधारय समास",
      "बहुव्रीहि समास",
      "तत्पुरुष समास",
      "द्वंद्व समास"
    ],
    "correct": "कर्मधारय समास",
    "explanation": "'नीलकमल' का विग्रह 'नीला है जो कमल' होता है। यहाँ पहला पद 'नील' (विशेषण) है और दूसरा पद 'कमल' (संज्ञा) है, जिसकी विशेषता बताई जा रही है। यह कर्मधारय समास (Karmadharaya Compound) की पहचान है।"
  },
  {
    "id": 103,
    "text": "'यह मेरी पुस्तक है।' वाक्य में रेखांकित शब्द (यह) किस प्रकार का सर्वनाम है?",
    "options": [
      "अनिश्चयवाचक सर्वनाम",
      "प्रश्नवाचक सर्वनाम",
      "निश्चयवाचक सर्वनाम",
      "संबंधवाचक सर्वनाम"
    ],
    "correct": "निश्चयवाचक सर्वनाम",
    "explanation": "यहाँ 'यह' शब्द एक निश्चित वस्तु (पुस्तक) की ओर संकेत कर रहा है। जो सर्वनाम किसी निश्चित व्यक्ति या वस्तु का बोध कराते हैं, उन्हें निश्चयवाचक सर्वनाम (Demonstrative Pronoun) कहते हैं।"
  },
  {
    "id": 104,
    "text": "'गाड़ी धीरे-धीरे चल रही है।' वाक्य में रेखांकित शब्द (धीरे-धीरे) है ",
    "options": [
      "रीतिवाचक क्रियाविशेषण",
      "कालवाचक क्रियाविशेषण",
      "स्थानवाचक क्रियाविशेषण",
      "परिमाणवाचक क्रियाविशेषण"
    ],
    "correct": "रीतिवाचक क्रियाविशेषण",
    "explanation": "रेखांकित शब्द 'धीरे-धीरे' क्रिया (चल रही है) के होने की रीति (Manner) या तरीके को बता रहा है। जो शब्द क्रिया की रीति बताते हैं, वे रीतिवाचक क्रियाविशेषण (Adverb of Manner) कहलाते हैं।"
  },
  {
    "id": 105,
    "text": "निम्नलिखित में से कौन सा शब्द पुल्लिंग है?",
    "options": [
      "नदी",
      "हवा",
      "पानी",
      "धरती"
    ],
    "correct": "पानी",
    "explanation": "लिंग (Gender) की पहचान वाक्य प्रयोग से होती है। 'नदी बह रही है' (स्त्रीलिंग), 'हवा चल रही है' (स्त्रीलिंग), 'धरती घूम रही है' (स्त्रीलिंग)। लेकिन 'पानी बह रहा है' (पुल्लिंग)। अतः 'पानी' (Water) पुल्लिंग शब्द है।"
  },
  {
    "id": 106,
    "text": "'आग बबूला होना' मुहावरे का सही अर्थ क्या है?",
    "options": [
      "बहुत प्रसन्न होना",
      "बहुत क्रोधित होना",
      "आग से खेलना",
      "भाग जाना"
    ],
    "correct": "बहुत क्रोधित होना",
    "explanation": "'आग बबूला होना' एक प्रचलित मुहावरा (Idiom) है, जिसका अर्थ है 'अत्यधिक क्रोधित होना' (To be extremely angry)।"
  },
  {
    "id": 107,
    "text": "'वाह __ कितना सुंदर दृश्य है!' रिक्त स्थान की पूर्ति के लिए उचित विराम चिह्न है ",
    "options": [
      "प्रश्नवाचक चिह्न (?)",
      "पूर्ण विराम (।)",
      "अल्पविराम (,)",
      "विस्मयादिबोधक चिह्न (!)"
    ],
    "correct": "विस्मयादिबोधक चिह्न (!)",
    "explanation": "'वाह' एक विस्मयादिबोधक शब्द है जो आश्चर्य या प्रशंसा (Admiration) का भाव व्यक्त कर रहा है। ऐसे शब्दों के बाद विस्मयादिबोधक चिह्न (Exclamation Mark) (!) का प्रयोग किया जाता है।"
  },
  {
    "id": 108,
    "text": "'उत्थान' शब्द का सही विलोम (Antonym) शब्द है ",
    "options": [
      "उन्नति",
      "पतन",
      "प्रगति",
      "ऊपर"
    ],
    "correct": "पतन",
    "explanation": "'उत्थान' (Rise) का अर्थ है ऊपर उठना या प्रगति। इसका सटीक विलोम शब्द 'पतन' (Fall) है, जिसका अर्थ है गिरावट।"
  },
  {
    "id": 109,
    "text": "निम्नलिखित में से कौन सा शब्द 'आकाश' का पर्यायवाची (Synonym) नहीं है?",
    "options": [
      "गगन",
      "नभ",
      "अंबर",
      "पावक"
    ],
    "correct": "पावक",
    "explanation": "'गगन', 'नभ' और 'अंबर' तीनों 'आकाश' (Sky) के पर्यायवाची हैं। 'पावक' (Pavak) 'अग्नि' या 'आग' (Fire) का पर्यायवाची है।"
  },
  {
    "id": 110,
    "text": "'पेड़ों का दर्द' पाठ की विधा है ",
    "options": [
      "कविता",
      "निबंध",
      "एकांकी",
      "जीवनी"
    ],
    "correct": "कविता",
    "explanation": "यह प्रश्न पाठ्यपुस्तक पर आधारित है। 'पेड़ों का दर्द' (Pain of Trees) पाठ को एक कविता (Poem) के रूप में प्रस्तुत किया गया है, जिसका उद्देश्य छात्रों में पर्यावरण के प्रति संवेदनशीलता जगाना है।"
  },
  {
    "id": 111,
    "text": "'मिट्टी की सुगंध' निबंध के लेखक हैं ",
    "options": [
      "महादेवी वर्मा",
      "डॉ. विद्यासागर शर्मा",
      "प्रेमचंद",
      "जयशंकर प्रसाद"
    ],
    "correct": "डॉ. विद्यासागर शर्मा",
    "explanation": "यह प्रश्न पाठ्यपुस्तक में शामिल लेखकों से संबंधित है। 'मिट्टी की सुगंध' (Fragrance of Soil) नामक पाठ, जो एक निबंध है, 'डॉ. विद्यासागर शर्मा' द्वारा लिखा गया है।"
  },
  {
    "id": 112,
    "text": "'हमारा बाजार' पाठ का मुख्य उद्देश्य है ",
    "options": [
      "क्रिया शब्द सिखाना",
      "गिनती और लेन-देन सिखाना",
      "विशेषण सिखाना",
      "कहानी सुनाना"
    ],
    "correct": "गिनती और लेन-देन सिखाना",
    "explanation": "पाठ्यपुस्तक का 'हमारा बाजार' (Our Market) पाठ विशेष रूप से बच्चों को दैनिक जीवन में उपयोग होने वाली गणितीय अवधारणाओं (Mathematical concepts) जैसे गिनती (Counting) और लेन-देन (Transaction) से परिचित कराने के लिए है।"
  },
  {
    "id": 113,
    "text": "'राजू की होशियारी' कहानी में राजू ने किसकी मदद की थी?",
    "options": [
      "एक घायल कबूतर की",
      "अपने मित्र की",
      "एक बूढ़ी अम्मा की",
      "एक बिल्ली के बच्चे की"
    ],
    "correct": "एक बूढ़ी अम्मा की",
    "explanation": "यह प्रश्न पाठ्यपुस्तक की कहानी 'राजू की होशियारी' (Raju's cleverness) के पात्रों और घटनाओं पर आधारित है। कहानी में, राजू एक बूढ़ी अम्मा (Old woman) को सड़क पार करने में मदद करता है।"
  },
  {
    "id": 114,
    "text": "निम्नलिखित में से 'पठन-हेतु' (केवल पढ़ने के लिए) पाठ पहचानिए ",
    "options": [
      "ईमानदारी का फल",
      "समय का मूल्य",
      "चंदा मामा",
      "हमारा तिरंगा"
    ],
    "correct": "चंदा मामा",
    "explanation": "पाठ्यपुस्तक में, 'चंदा मामा' (Moon) एक कविता है जिसे मुख्य रूप से 'पठन-हेतु' यानी छात्रों के पढ़ने के प्रवाह (fluency) और आनंद (enjoyment) के लिए शामिल किया गया है, न कि गहन मूल्यांकन के लिए।"
  },
  {
    "id": 115,
    "text": "'मेला' पाठ के द्वारा मुख्यतः किन मात्राओं का ज्ञान दिया जाता है?",
    "options": [
      "इ, ई",
      "उ, ऊ",
      "ए, ऐ",
      "ओ, औ"
    ],
    "correct": "ए, ऐ",
    "explanation": "यह प्रश्न पाठ्यपुस्तक के वर्ण-ज्ञान (letter knowledge) से संबंधित है। 'मेला' (Fair) पाठ में 'ए' (जैसे 'मेला', 'रेल') और 'ऐ' (जैसे 'पैसे', 'बैल') की मात्राओं (vowel signs) पर विशेष ध्यान केंद्रित किया गया है।"
  },
  {
    "id": 116,
    "text": "गलत जोड़ी पहचानिए (पाठ्यपुस्तक के पात्रों के आधार पर) ।",
    "options": [
      "रानी - साहसी लड़की",
      "बीरबल - चतुर मंत्री",
      "सोहन - आलसी लड़का",
      "अकबर - मूर्ख राजा"
    ],
    "correct": "अकबर - मूर्ख राजा",
    "explanation": "पाठ्यपुस्तक की कहानियों के अनुसार, 'रानी' को साहसी, 'बीरबल' को चतुर और 'सोहन' को आलसी चित्रित किया गया है। लेकिन 'अकबर' (Akbar) को एक समझदार और न्यायप्रिय राजा (Wise King) के रूप में दर्शाया गया है, न कि मूर्ख। अतः यह जोड़ी गलत है।"
  },
  {
    "id": 117,
    "text": "\"उठो लाल अब आँखें खोलो, पानी लाई हूँ मुँह धो लो।\" यह प्रसिद्ध बाल-कविता किसकी रचना है?",
    "options": [
      "सोहन लाल द्विवेदी",
      "सुभद्रा कुमारी चौहान",
      "रामधारी सिंह दिनकर",
      "मैथिलीशरण गुप्त"
    ],
    "correct": "सोहन लाल द्विवेदी",
    "explanation": "यह एक प्रसिद्ध बाल-कविता (Children's poem) है जो अक्सर प्राथमिक कक्षाओं की पाठ्यपुस्तकों में शामिल होती है। इसके रचयिता (Author) 'सोहन लाल द्विवेदी' (Sohan Lal Dwivedi) हैं।"
  },
  {
    "id": 118,
    "text": "'हम सब एक हैं' पाठ का मूल भाव क्या है?",
    "options": [
      "पर्यावरण संरक्षण",
      "राष्ट्रीय एकता",
      "स्वास्थ्य और स्वच्छता",
      "खेल-कूद का महत्व"
    ],
    "correct": "राष्ट्रीय एकता",
    "explanation": "पाठ्यपुस्तक में 'हम सब एक हैं' (We are all one) पाठ का मुख्य उद्देश्य (Objective) बच्चों में 'विविधता में एकता' (Unity in Diversity) की भावना और 'राष्ट्रीय एकता' (National Integration) को मजबूत करना है।"
  },
  {
    "id": 119,
    "text": "'व्याकरण-अनुवाद विधि' (Grammar-Translation Method) में किस पर अधिक बल दिया जाता है?",
    "options": [
      "मौखिक अभ्यास पर",
      "रचनात्मक लेखन पर",
      "लक्ष्य भाषा में सोचने पर",
      "मातृभाषा के प्रयोग पर"
    ],
    "correct": "मातृभाषा के प्रयोग पर",
    "explanation": "व्याकरण-अनुवाद विधि (Pedagogy) में, दूसरी भाषा को सिखाने के लिए नियमों (Rules) और अनुवाद (Translation) पर जोर दिया जाता है। इसमें हर वाक्य का 'मातृभाषा' (Mother Tongue) में अनुवाद किया जाता है।"
  },
  {
    "id": 120,
    "text": "'मौन पठन' (Silent Reading) का मुख्य उद्देश्य क्या है?",
    "options": [
      "उच्चारण (Pronunciation) को सुधारना",
      "दूसरों को सुनाने का अभ्यास करना",
      "पढ़ी गई सामग्री का अर्थ ग्रहण करना",
      "तेजी से पढ़ने की गति बढ़ाना"
    ],
    "correct": "पढ़ी गई सामग्री का अर्थ ग्रहण करना",
    "explanation": "मौन पठन (Pedagogy) का प्राथमिक उद्देश्य है कि छात्र शांति से पढ़ते हुए पाठ्य सामग्री को समझें और उसके अर्थ को आत्मसात (Comprehension) करें।"
  },
  {
    "id": 121,
    "text": "'सतत एवं व्यापक मूल्यांकन' (CCE) में 'व्यापक' (Comprehensive) शब्द का क्या अर्थ है?",
    "options": [
      "केवल शैक्षिक क्षेत्रों का मूल्यांकन",
      "शैक्षिक और सह-शैक्षिक दोनों क्षेत्रों का मूल्यांकन",
      "केवल सह-शैक्षिक क्षेत्रों का मूल्यांकन",
      "प्रतिदिन परीक्षा लेना"
    ],
    "correct": "शैक्षिक और सह-शैक्षिक दोनों क्षेत्रों का मूल्यांकन",
    "explanation": "CCE (Pedagogy) में 'व्यापक' का अर्थ है छात्र के विकास के सभी पहलुओं (All aspects) का मूल्यांकन करना, जिसमें शैक्षिक (Scholastic) (जैसे विषय) और सह-शैक्षिक (Co-scholastic) (जैसे कला, खेल, जीवन कौशल) दोनों शामिल हैं।"
  },
  {
    "id": 122,
    "text": "प्राथमिक स्तर पर लेखन कौशल (Writing Skill) के विकास में पहला चरण क्या होना चाहिए?",
    "options": [
      "तेजी से लिखना",
      "सुंदर और सुडौल अक्षर बनाना (सुलेख)",
      "विचारों की अभिव्यक्ति",
      "जटिल वाक्य लिखना"
    ],
    "correct": "सुंदर और सुडौल अक्षर बनाना (सुलेख)",
    "explanation": "लेखन कौशल (Pedagogy) सिखाने के प्रारंभ में, गति या विचारों से पहले 'अक्षरों की सही बनावट' (Legibility and correct formation) यानी सुलेख (Calligraphy) पर ध्यान देना आवश्यक है।"
  },
  {
    "id": 123,
    "text": "निम्नलिखित में से कौन सी 'श्रव्य-दृश्य सामग्री' (Audio-Visual Aid) है?",
    "options": [
      "रेडियो",
      "चार्ट",
      "श्यामपट्ट (Blackboard)",
      "कंप्यूटर"
    ],
    "correct": "कंप्यूटर",
    "explanation": "श्रव्य-दृश्य सामग्री (Pedagogy) वह है जिसमें सुना (Audio) और देखा (Visual) दोनों जा सके। 'रेडियो' केवल श्रव्य है। 'चार्ट' और 'श्यामपट्ट' केवल दृश्य हैं। 'कंप्यूटर' (Computer) दोनों (Audio and Visual) का माध्यम है।"
  },
  {
    "id": 124,
    "text": "'पठन वैकल्य' (Reading Disorder) को तकनीकी रूप से क्या कहा जाता है?",
    "options": [
      "डिस्लेक्सिया (Dyslexia)",
      "डिस्ग्राफिया (Dysgraphia)",
      "डिस्केल्कुलिया (Dyscalculia)",
      "अफेज़िया (Aphasia)"
    ],
    "correct": "डिस्लेक्सिया (Dyslexia)",
    "explanation": "'डिस्लेक्सिया' (Pedagogy) एक अधिगम अक्षमता (Learning Disability) है जो मुख्य रूप से पढ़ने (Reading) और शब्दों को पहचानने में कठिनाई से संबंधित है।"
  },
  {
    "id": 125,
    "text": "'उदाहरण से नियम' (Example to Rule) की ओर बढ़ना, किस शिक्षण विधि का सूत्र है?",
    "options": [
      "निगमन विधि (Deductive)",
      "आगमन विधि (Inductive)",
      "व्याख्यान विधि (Lecture)",
      "खेल विधि (Play-way)"
    ],
    "correct": "आगमन विधि (Inductive)",
    "explanation": "आगमन विधि (Pedagogy) में, शिक्षक पहले छात्रों के सामने कई 'उदाहरण' (Examples) प्रस्तुत करता है और फिर उन उदाहरणों के आधार पर छात्र स्वयं 'नियम' (Rule) तक पहुँचते हैं।"
  },
  {
    "id": 126,
    "text": "भाषा सीखने का स्वाभाविक (Natural) मनोवैज्ञानिक क्रम क्या है?",
    "options": [
      "पढ़ना, लिखना, बोलना, सुनना",
      "सुनना, बोलना, पढ़ना, लिखना",
      "बोलना, सुनना, लिखना, पढ़ना",
      "लिखना, पढ़ना, सुनना, बोलना"
    ],
    "correct": "सुनना, बोलना, पढ़ना, लिखना",
    "explanation": "भाषा अधिग्रहण (Language Acquisition) का स्वाभाविक क्रम (LSRW) है: बच्चा पहले 'सुनना' (Listening) सीखता है, फिर 'बोलना' (Speaking), उसके बाद 'पढ़ना' (Reading) और अंत में 'लिखना' (Writing) सीखता है।"
  },
  {
    "id": 127,
    "text": "कविता-शिक्षण (Poetry Teaching) का मुख्य उद्देश्य क्या होता है?",
    "options": [
      "व्याकरण के नियम सिखाना",
      "कठिन शब्दों का अर्थ बताना",
      "रसानुभूति और भावानुभूति कराना",
      "कवि का परिचय देना"
    ],
    "correct": "रसानुभूति और भावानुभूति कराना",
    "explanation": "कविता-शिक्षण (Pedagogy) का मुख्य उद्देश्य छात्रों को कविता के भाव (Emotion) और रस (Aesthetic appreciation) का आनंद लेने और उसे महसूस (Appreciation) करने योग्य बनाना है।"
  },
  {
    "id": 128,
    "text": "वस्तुनिष्ठ प्रश्नों (Objective Questions) का एक प्रमुख दोष (Demerit) क्या है?",
    "options": [
      "मूल्यांकन में समय अधिक लगना",
      "विश्वसनीयता (Reliability) की कमी",
      "रचनात्मकता और लेखन शैली का आकलन न हो पाना",
      "पाठ्यक्रम को कवर न करना"
    ],
    "correct": "रचनात्मकता और लेखन शैली का आकलन न हो पाना",
    "explanation": "वस्तुनिष्ठ प्रश्न (Pedagogy) ज्ञान की जाँच तो कर लेते हैं, लेकिन वे छात्र की 'रचनात्मकता' (Creativity) या उसकी 'लेखन शैली' (Writing style) का मूल्यांकन नहीं कर पाते, क्योंकि उत्तर पहले से तय होते हैं।"
  },
  {
    "id": 129,
    "text": "'प' वर्ण का उच्चारण स्थान (Place of Articulation) क्या है?",
    "options": [
      "कंठ (Guttural)",
      "तालु (Palatal)",
      "मूर्धा (Retroflex)",
      "ओष्ठ (Labial)"
    ],
    "correct": "ओष्ठ (Labial)",
    "explanation": "'प' वर्ग (प, फ, ब, भ, म) के सभी वर्णों का उच्चारण (Phonetics) दोनों होंठों (Oshth) के मिलने से होता है। इसलिए इन्हें 'ओष्ठ्य' व्यंजन कहा जाता है।"
  },
  {
    "id": 130,
    "text": "निम्नलिखित में से 'अल्पप्राण' (Alpaprana) व्यंजन कौन सा है?",
    "options": [
      "ख",
      "घ",
      "क",
      "फ"
    ],
    "correct": "क",
    "explanation": "जिन व्यंजनों के उच्चारण में मुख से कम वायु (Less air) निकलती है, वे 'अल्पप्राण' (Phonetics) कहलाते हैं। प्रत्येक वर्ग का पहला, तीसरा और पाँचवाँ व्यंजन (जैसे 'क', 'ग', 'ङ') अल्पप्राण होता है। 'ख', 'घ' और 'फ' महाप्राण (More air) हैं।"
  },
  {
    "id": 131,
    "text": "कहानी-शिक्षण (Story Teaching) का सही तार्किक क्रम चुनिए।\n (A) पात्रों का परिचय कराना\n (B) कहानी का शीर्षक (Title) बताना\n (C) कहानी से मिलने वाली सीख (Moral) पर चर्चा करना\n (D) घटनाओं का क्रमिक विकास प्रस्तुत करना",
    "options": [
      "A, C, B, D",
      "B, A, D, C",
      "C, B, A, D",
      "D, A, C, B"
    ],
    "correct": "B, A, D, C",
    "explanation": "कहानी-शिक्षण (Pedagogy) का तार्किक क्रम (Logical sequence) है: (B) पहले शीर्षक बताना, (A) फिर पात्रों का परिचय देना, (D) उसके बाद कहानी की घटनाओं (Plot) का विकास करना, और (C) अंत में कहानी की नैतिक शिक्षा (Moral) पर चर्चा करना।"
  },
  {
    "id": 132,
    "text": "'पेड़ से पत्ता गिरता है।' वाक्य में 'पेड़ से' (रेखांकित) में कौन सा कारक (Case) है?",
    "options": [
      "करण कारक (Instrumental)",
      "अपादान कारक (Ablative)",
      "संबंध कारक (Genitive)",
      "अधिकरण कारक (Locative)"
    ],
    "correct": "अपादान कारक (Ablative)",
    "explanation": "यहाँ 'से' का प्रयोग 'अलग होने' (Separation) के अर्थ में हुआ है (पत्ता पेड़ से अलग हो रहा है)। जब संज्ञा या सर्वनाम के जिस रूप से अलग होने का भाव प्रकट हो, वहाँ अपादान कारक (Grammar) होता है।"
  },
  {
    "id": 133,
    "text": "'शायद आज वर्षा हो।' यह वाक्य अर्थ के आधार पर किस प्रकार का है?",
    "options": [
      "आज्ञावाचक",
      "इच्छावाचक",
      "संदेहवाचक",
      "संकेतवाचक"
    ],
    "correct": "संदेहवाचक",
    "explanation": "'शायद' (Perhaps) शब्द का प्रयोग यह दर्शाता है कि क्रिया (वर्षा होना) के होने में संदेह (Doubt) या संभावना (Possibility) है। अतः यह एक संदेहवाचक (Dubitative) वाक्य है।"
  },
  {
    "id": 134,
    "text": "'जल ही जीवन है' पाठ का मुख्य विषय क्या है?",
    "options": [
      "जल संरक्षण (Water Conservation)",
      "भारत का इतिहास (History)",
      "वैज्ञानिक आविष्कार (Inventions)",
      "कला और संस्कृति (Art)"
    ],
    "correct": "जल संरक्षण (Water Conservation)",
    "explanation": "यह प्रश्न पाठ्यपुस्तक (Textbook) पर आधारित है। 'जल ही जीवन है' (Water is Life) पाठ का मुख्य उद्देश्य छात्रों को पानी के महत्व और 'जल संरक्षण' (Water Conservation) की आवश्यकता के बारे में शिक्षित करना है।"
  },
  {
    "id": 135,
    "text": "'जो परिश्रम करता है, वह सफल होता है।' रचना के आधार पर यह कैसा वाक्य है?",
    "options": [
      "सरल वाक्य (Simple)",
      "संयुक्त वाक्य (Compound)",
      "मिश्र वाक्य (Complex)",
      "प्रश्नवाचक वाक्य (Interrogative)"
    ],
    "correct": "मिश्र वाक्य (Complex)",
    "explanation": "इस वाक्य में 'जो परिश्रम करता है' एक आश्रित उपवाक्य (Dependent clause) है और 'वह सफल होता है' एक प्रधान उपवाक्य (Main clause) है। जो वाक्य एक प्रधान और एक या अधिक आश्रित उपवाक्यों से मिलकर बनता है, उसे 'मिश्र वाक्य' (Grammar) कहते हैं।"
  },
  {
    "id": 136,
    "text": "'निगमन विधि' (Deductive Method) का एक प्रमुख दोष (Demerit) क्या है?",
    "options": [
      "यह विधि बहुत धीमी है",
      "इसमें छात्र रटने (Rote learning) पर अधिक बल देते हैं",
      "यह छोटे बच्चों के लिए उपयोगी है",
      "इसमें समय अधिक लगता है"
    ],
    "correct": "इसमें छात्र रटने (Rote learning) पर अधिक बल देते हैं",
    "explanation": "निगमन विधि (Pedagogy) 'नियम से उदाहरण' (Rule to Example) की ओर चलती है। इसमें छात्र नियमों (Rules) को याद कर लेते हैं और उनका प्रयोग करते हैं, जिससे समझने के बजाय 'रटने की प्रवृत्ति' (Rote learning) को बढ़ावा मिलता है।"
  },
  {
    "id": 137,
    "text": "'अभिमान' शब्द में प्रयुक्त उपसर्ग (Prefix) क्या है?",
    "options": [
      "अ",
      "मान",
      "अभि",
      "आन"
    ],
    "correct": "अभि",
    "explanation": "'अभिमान' (Arrogance) शब्द 'अभि' उपसर्ग (Grammar) और 'मान' (मूल शब्द) के योग से बना है। 'अभि' एक संस्कृत उपसर्ग है जिसका अर्थ 'ओर' या 'पास' होता है।"
  },
  {
    "id": 138,
    "text": "'लिखावट' शब्द में प्रयुक्त प्रत्यय (Suffix) क्या है?",
    "options": [
      "वट",
      "ट",
      "लिख",
      "आवट"
    ],
    "correct": "आवट",
    "explanation": "'लिखावट' (Handwriting) शब्द 'लिख्' (धातु) में 'आवट' प्रत्यय (Grammar) जोड़ने से बना है। 'लिख + आवट = लिखावट'।"
  },
  {
    "id": 139,
    "text": "निम्नलिखित में से यह 'निबंधात्मक परीक्षा' (Essay Type Test) की विशेषता नहीं है ",
    "options": [
      "भावों और विचारों के संगठन की जाँच",
      "लेखन शैली और रचनात्मकता की जाँच",
      "मूल्यांकन में वस्तुनिष्ठता (Objectivity)",
      "गहन चिंतन की जाँच"
    ],
    "correct": "मूल्यांकन में वस्तुनिष्ठता (Objectivity)",
    "explanation": "निबंधात्मक परीक्षा (Pedagogy) से विचारों, लेखन शैली और चिंतन की जाँच होती है, लेकिन इसका मूल्यांकन (Evaluation) अक्सर 'वस्तुनिष्ठ' (Objective) नहीं हो पाता। परीक्षक (Examiner) की व्यक्तिगत पसंद-नापसंद का अंकन पर प्रभाव पड़ सकता है, जो इसका एक दोष है।"
  },
  {
    "id": 140,
    "text": "'विद्यालय' का सही संधि-विच्छेद है ",
    "options": [
      "विद्य + आलय",
      "विद्या + आलय",
      "विद्य + लय",
      "विद्या + लय"
    ],
    "correct": "विद्या + आलय",
    "explanation": "'विद्यालय' (School) का सही संधि-विच्छेद 'विद्या + आलय' (Grammar) है। यहाँ 'आ' (विद्या) और 'आ' (आलय) मिलकर 'आ' बन रहे हैं (आ + आ = आ)। यह दीर्घ संधि (Dirgha Sandhi) का उदाहरण है।"
  }
]



export const hindiPaper1Questions = rawHindiPaper1Data.map((q, index) => {
  const options = q.options ?? [];
  const correctIndex = options.indexOf(q.correct ?? '');

  return {
    id: `Q${index + 1}`,
    question: q.text,
    options,
    correctAnswer: correctIndex >= 0 ? correctIndex : 0,
    explanation: q.explanation ?? '',
  };
});


export const convertHindiPaper1ToQuestionFormat = (questions: typeof hindiPaper1Questions) => {
  return questions.map((q, index) => ({
    id: index + 1,
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
  }));
};
