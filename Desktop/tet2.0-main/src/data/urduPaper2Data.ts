type UrduPaper2RawQuestion = {
  id: number | string;
  text: string;
  options: string[];
  correct: string;
  explanation: string;
};

const rawUrduPaper2Data: UrduPaper2RawQuestion[] = 
[
  {
    "id": 1,
    "text": "ان کا شمار جگر مراد آبادی کے اساتذہ میں نہیں ہوتا۔\n TSTET 11 Jan 2025",
    "options": [
      "نظر علی",
      "داغ دہلوی",
      "امیر اللہ خان تسلیم",
      "مرزا غالب"
    ],
    "correct": "مرزا غالب",
    "explanation": "جگر مرادآبادی کے اساتذہ میں داغ دہلوی، تسلیم لکھنوی اور اصغر گونڈوی شامل تھے۔ مرزا غالب کا انتقال جگر کی پیدائش سے بہت پہلے 1869 میں ہوگیا تھا، لہٰذا وہ ان کے استاد نہیں ہو سکتے۔\n (Jigar Moradabadi's teachers included Daag Dehlvi, Tasleem Lakhnavi, and Asghar Gondvi. Mirza Ghalib passed away in 1869, long before Jigar's birth, so he could not have been his teacher.)"
  },
  {
    "id": 2,
    "text": "جب کلام میں ایسا لفظ استعمال کیا جائے جس کے دو معنی ہوں، ایک قریب کا اور دوسرا بعید کا، اور شاعر کی مراد بعید کے معنی سے ہو تو اسے کہتے ہیں۔\n TSTET 11 Jan 2025",
    "options": [
      "صنعت ایہام",
      "صنعت تجنیس",
      "صنعت کنایہ",
      "صنعت مبالغہ"
    ],
    "correct": "صنعت ایہام",
    "explanation": "صنعتِ ایہام (Pun) وہ صنعت ہے جس میں شاعر کلام میں ایسا لفظ استعمال کرتا ہے جس کے دو معنی ہوتے ہیں، ایک قریب اور دوسرا بعید، لیکن شاعر کی مراد بعید معنی سے ہوتی ہے۔\n (Sanat-e-Iham (Pun) is a figure of speech where a word with two meanings, one near (obvious) and one far (intended), is used, and the poet intends the far meaning.)"
  },
  {
    "id": 3,
    "text": "”باسی کڑی میں اُبال آنا“ یہ ایک ہے۔\n TSTET 11 Jan 2025",
    "options": [
      "محاورہ ہے",
      "ضرب المثل ہے",
      "قول ہے",
      "فقرہ ہے"
    ],
    "correct": "ضرب المثل ہے",
    "explanation": "”باسی کڑی میں ابال آنا“ ایک ضرب المثل (Proverb) ہے، جس کا مطلب ہے بڑھاپے میں جوانی کی سی امنگیں پیدا ہونا یا کسی پرانے معاملے کا پھر سے ابھرنا۔ یہ اپنے آپ میں ایک مکمل جملہ ہے اور ایک خاص معنی دیتا ہے۔\n ('Basi kadi mein ubaal aana' is a proverb (Zarb-ul-Misl), meaning a resurgence of youthful feelings in old age or the re-emergence of an old issue. It is a complete sentence in itself and conveys a specific meaning.)"
  },
  {
    "id": 4,
    "text": "مفاعلتن، مفاعلتن، مفاعلتن، مفاعلتن کی تکرار سے بننے والی بحر ہے۔\n TSTET 11 Jan 2025",
    "options": [
      "بحر متقارب",
      "بحر ہزج",
      "بحر وافر",
      "بحر کامل"
    ],
    "correct": "بحر وافر",
    "explanation": "علمِ عروض (Prosody) میں، بحرِ وافر وہ بحر (meter) ہے جس کا رکن 'مُفَاعَلَتُن' ہے۔ اس رکن کی چار بار تکرار سے بحرِ وافر سالم بنتی ہے۔\n (In Ilm-e-Arooz (Prosody), Bahr-e-Wafir is the meter (bahr) whose foot (rukn) is 'Mufa'alatun'. The repetition of this foot four times forms the Bahr-e-Wafir Salim.)"
  },
  {
    "id": 5,
    "text": "”سمجھو سیٹھ“ اس افسانے کا کردار ہے۔\n TSTET 11 Jan 2025",
    "options": [
      "عقلن عورت",
      "بات مساوات کی",
      "پنچایت",
      "سب سے بڑا دردمند"
    ],
    "correct": "پنچایت",
    "explanation": "سمجھو سیٹھ، منشی پریم چند کے مشہور افسانے ”پنچایت“ کا ایک اہم کردار ہے، جو الگو چودھری سے بیل خریدتا ہے۔\n (Samjhu Seth is a significant character in Munshi Premchand's famous short story 'Panchayat', who buys an ox from Algu Chowdhry.)"
  },
  {
    "id": 6,
    "text": "علم الاعداد میں لفظ ”اردو“ کی قیمت ہے۔\n TSTET 11 Jan 2025",
    "options": [
      "210",
      "211",
      "511",
      "315"
    ],
    "correct": "211",
    "explanation": "علم الاعداد (Abjad numerals) میں ہر حرف کی ایک عددی قیمت ہوتی ہے۔ لفظ 'اردو' کے حروف کی قیمت یہ ہے: ا (1) + ر (200) + د (4) + و (6) = 211۔\n (In Ilm-ul-Adad (Abjad numerals), each letter has a numerical value. The values for the letters in 'Urdu' (اردو) are: Alif (1) + Re (200) + Dal (4) + Vav (6) = 211.)"
  },
  {
    "id": 7,
    "text": "”آہنگ“ ان کے مجموعہ کلام کا نام ہے۔\n TSTET 11 Jan 2025",
    "options": [
      "اسرار الحق مجاز",
      "کشمیری لال ذاکر",
      "معین احسن جذبی",
      "بے نظیر شاہ"
    ],
    "correct": "اسرار الحق مجاز",
    "explanation": "”آہنگ“ ترقی پسند شاعر اسرار الحق مجاز لکھنوی کے شعری مجموعے (Poetry Collection) کا نام ہے۔\n ('Ahang' is the name of the poetry collection (Majmua-e-Kalam) by the progressive poet Asrar-ul-Haq Majaz Lakhnawi.)"
  },
  {
    "id": 8,
    "text": "شق القمر، جلوۂ طور، یوسف و زلیخا شاعری میں ان کی مثالیں ہیں۔\n TSTET 11 Jan 2025",
    "options": [
      "تشبیہ",
      "استعارہ",
      "تلمیح",
      "کنایہ"
    ],
    "correct": "تلمیح",
    "explanation": "تلمیح (Allusion) وہ صنعت ہے جس میں شاعر اپنے شعر میں کسی تاریخی واقعے، مذہبی قصے یا مشہور شخصیت کی طرف اشارہ کرتا ہے۔ شق القمر (چاند کا دو ٹکڑے ہونا)، جلوۂ طور (کوہِ طور پر نور کا ظاہر ہونا) اور یوسف و زلیخا کا قصہ، یہ سب مشہور تلمیحات ہیں۔\n (Talmih (Allusion) is a figure of speech where a poet refers to a historical event, religious story, or a famous personality. 'Shaq-ul-Qamar' (Splitting of the moon), 'Jalwa-e-Toor' (The divine light on Mount Sinai), and the story of 'Yusuf-o-Zuleikha' are all famous allusions.)"
  },
  {
    "id": 9,
    "text": "”چاول پر قل لکھنے کا فن“ نثر کی اس صنف کو کہا جاتا ہے۔\n TSTET 11 Jan 2025",
    "options": [
      "ناول",
      "داستان",
      "مختصر افسانہ",
      "انشائیہ"
    ],
    "correct": "مختصر افسانہ",
    "explanation": "یہ جملہ مختصر افسانے (Short Story) کی جامعیت اور اختصار کو بیان کرنے کے لیے استعمال ہوتا ہے۔ جس طرح چاول کے ایک دانے پر پوری سورت لکھنا کمال ہے، اسی طرح کم سے کم الفاظ میں مکمل کہانی بیان کرنا مختصر افسانے کا فن ہے۔\n (This phrase is used to describe the comprehensiveness and brevity of a short story (Mukhtasar Afsana). Just as it is a feat to write a whole chapter on a grain of rice, telling a complete story in the fewest words is the art of the short story.)"
  },
  {
    "id": 10,
    "text": "وہ ضمیر جو کسی بیان کی وضاحت یا جملوں کو ملانے کے لیے استعمال ہوتی ہے۔\n TSTET 11 Jan 2025",
    "options": [
      "ضمیر شخصی",
      "ضمیر موصولہ",
      "ضمیر تنکیر",
      "ضمیر استفہامیہ"
    ],
    "correct": "ضمیر موصولہ",
    "explanation": "ضمیر موصولہ (Relative Pronoun) وہ ضمیر ہے جو دو جملوں کو جوڑنے اور پہلے جملے کے اسم کا تعلق دوسرے جملے سے قائم کرنے کے لیے استعمال ہوتی ہے۔ مثلاً جو، جس، جن، وغیرہ۔\n (Zameer-e-Mausula (Relative Pronoun) is a pronoun used to connect two sentences and establish the relationship of a noun in the first sentence with the second sentence. For example: jo (who/which), jis (whose), jin (whom).)"
  },
  {
    "id": 11,
    "text": "وہ فعل ماضی جس میں کسی کام کو انجام پائے تھوڑا ہی وقت ہوا ہو، فعل ماضی قریب کہلاتا ہے۔ اس کی پہچان یہ ہے کہ:\n TSTET 11 Jan 2025",
    "options": [
      "جملے کے آخر میں 'رہا تھا' ہوتا ہے۔",
      "جملے کے آخر میں 'ہے' ہوتا ہے۔",
      "جملے کے آخر میں 'ہوگا' ہوتا ہے۔",
      "جملے کے آخر میں 'تھے' ہوتا ہے۔"
    ],
    "correct": "جملے کے آخر میں 'ہے' ہوتا ہے۔",
    "explanation": "فعل ماضی قریب (Present Perfect Tense) اس کام کو ظاہر کرتا ہے جو ابھی ابھی ختم ہوا ہو۔ اس کی ساخت فعل ماضی مطلق کے بعد 'ہے' یا 'ہیں' لگانے سے بنتی ہے۔ مثلاً 'وہ آیا ہے'۔\n (Fe'l-e-Mazi Qareeb (Present Perfect Tense) indicates an action that has just been completed. It is formed by adding 'hai' or 'hain' after the past absolute tense. For example, 'Woh aaya hai' (He has come).)"
  },
  {
    "id": 12,
    "text": "باہنر کی قدر کیا بے ہنر کے سامنے\nبارہا آیا ہے یہ منظر نظر کے سامنے\nمذکورہ شعر میں اس صنعت کا استعمال ہوا ہے۔\n TSTET 11 Jan 2025",
    "options": [
      "صنعت تلمیح",
      "صنعت تضاد",
      "صنعت مبالغہ",
      "صنعت تجنیس"
    ],
    "correct": "صنعت تضاد",
    "explanation": "صنعتِ تضاد (Antithesis) وہ صنعت ہے جس میں شعر میں دو متضاد الفاظ استعمال کیے جائیں۔ اس شعر میں 'باہنر' (ہنرمند) اور 'بے ہنر' (جس میں ہنر نہ ہو) ایک دوسرے کی ضد ہیں، لہٰذا یہاں صنعتِ تضاد کا استعمال ہوا ہے۔\n (Sanat-e-Tazad (Antithesis) is a figure of speech where two opposite words are used in a couplet. In this verse, 'ba-hunar' (skilled) and 'be-hunar' (unskilled) are opposites of each other, hence the use of this figure of speech.)"
  },
  {
    "id": 13,
    "text": "ذیل میں ان کے تعلق سے کہا جاتا ہے کہ وہ بڑے جوشیلے اخبار نویس، بلند پایہ انشا پرداز، بہترین شاعر اور وضع اصطلاحات کے ماہر تھے۔\n TSTET 11 Jan 2025",
    "options": [
      "خواجہ حسن نظامی",
      "احمد شاہ بخاری",
      "کرشن چندر",
      "وحید الدین سلیم"
    ],
    "correct": "وحید الدین سلیم",
    "explanation": "مولانا وحید الدین سلیم پانی پتی ایک مشہور صحافی، ادیب، شاعر اور ماہرِ لسانیات تھے۔ انہیں نئی علمی اور فنی اصطلاحات وضع کرنے (Term Coining) میں مہارت حاصل تھی۔\n (Maulana Waheeduddin Saleem Panipati was a famous journalist, writer, poet, and linguist. He was skilled in coining new academic and technical terms.)"
  },
  {
    "id": 14,
    "text": "اعظم گڑھ میں دارالمصنفین کی بنیاد انھوں نے رکھی۔\n TSTET 11 Jan 2025",
    "options": [
      "وحید الدین سلیم",
      "حسرت موہانی",
      "شبلی نعمانی",
      "معین احسن جذبی"
    ],
    "correct": "شبلی نعمانی",
    "explanation": "دارالمصنفین (شبلی اکیڈمی)، اعظم گڑھ، ایک مشہور علمی و تحقیقی ادارہ ہے جس کی بنیاد علامہ شبلی نعمانی نے 1914 میں رکھی تھی۔\n (Dar-ul-Musannifeen (Shibli Academy) in Azamgarh is a famous academic and research institute founded by Allama Shibli Nomani in 1914.)"
  },
  {
    "id": 15,
    "text": "غلام السیدین کے مطابق اس طریقے کو چھوٹی جماعتوں کے لیے مفید تصور کیا جاتا ہے۔\n TSTET 11 Jan 2025",
    "options": [
      "تقریری طریقہ",
      "کہانی کا طریقہ",
      "کھیل کھیل کا طریقہ",
      "منصوبائی طریقہ"
    ],
    "correct": "کہانی کا طریقہ",
    "explanation": "ماہرِ تعلیم غلام السیدین کے مطابق، کہانی کا طریقہ (Story-telling Method) چھوٹی جماعتوں کے بچوں کو سکھانے کے لیے بہت مؤثر اور مفید ہے کیونکہ یہ ان کی دلچسپی کو برقرار رکھتا ہے اور اخلاقی تعلیم کا بھی ذریعہ ہے۔\n (According to the educationalist Ghulam-us-Sayyidain, the story-telling method is very effective and useful for teaching young children in primary classes as it sustains their interest and also serves as a means of moral education.)"
  },
  {
    "id": 16,
    "text": "سیر و تفریح، سائنس فیئر، ڈرامہ کہلاتے ہیں۔\n TSTET 11 Jan 2025",
    "options": [
      "گرافک امدادیں",
      "تظلیلی امدادیں",
      "مشغلاتی امدادیں",
      "نمائشی تختے"
    ],
    "correct": "مشغلاتی امدادیں",
    "explanation": "یہ تمام سرگرمیاں تدریسی عمل میں مشغلاتی امدادیں (Activity Aids) کہلاتی ہیں کیونکہ ان میں طلباء براہِ راست حصہ لیتے ہیں اور کر کے سیکھتے ہیں۔\n (All these activities are called Activity Aids in the teaching process because students participate directly in them and learn by doing.)"
  },
  {
    "id": 17,
    "text": "ادبی ماحول کے جذبے کی تسکین کے لیے طلبہ کو ضرورت ہوتی ہے۔\n TSTET 11 Jan 2025",
    "options": [
      "سائنس فیئر",
      "لینگویج لیباریٹری",
      "کھیلوں کا میدان",
      "تعلیمی تفریح"
    ],
    "correct": "لینگویج لیباریٹری",
    "explanation": "ایک ادبی اور لسانی ماحول پیدا کرنے اور زبان کی مہارتوں (سننا، بولنا، پڑھنا) کو بہتر بنانے کے لیے لینگویج لیباریٹری (Language Laboratory) ایک اہم وسیلہ ہے۔\n (A Language Laboratory is an important resource for creating a literary and linguistic environment and for improving language skills (listening, speaking, reading).)"
  },
  {
    "id": 18,
    "text": "مناسب تکرار کے ذریعے طالب علم کو سکھایا جاتا ہے۔\n TSTET 11 Jan 2025",
    "options": [
      "قواعد",
      "ترجمہ",
      "انشاء",
      "املا"
    ],
    "correct": "قواعد",
    "explanation": "زبان کے قواعد (Grammar) کو سکھانے اور ذہن نشین کرانے کے لیے مناسب تکرار اور مشق (Drill and Practice) کا طریقہ بہت کارآمد ہوتا ہے۔\n (The method of appropriate repetition and practice (Drill and Practice) is very effective for teaching and memorizing language grammar (Qawa'id).)"
  },
  {
    "id": 19,
    "text": "درستگی، رفتار، جامعیت اور اظہار اوصاف ہیں۔\n TSTET 11 Jan 2025",
    "options": [
      "سریع مطالعہ",
      "تنقیدی مطالعہ",
      "زود نویسی",
      "عمدہ خواندگی"
    ],
    "correct": "عمدہ خواندگی",
    "explanation": "ایک اچھی اور مؤثر پڑھائی یا عمدہ خواندگی (Good Reading) کی خصوصیات میں درست تلفظ (Accuracy)، مناسب رفتار (Speed)، مطلب کو سمجھنا (Comprehension) اور تاثرات کا اظہار (Expression) شامل ہیں۔\n (The characteristics of good and effective reading (Umda Khwandagi) include correct pronunciation (Durustagi), appropriate speed (Raftar), understanding the meaning (Jamiyat), and conveying expressions (Izhar).)"
  },
  {
    "id": 20,
    "text": "ایسا مطالعہ جس کا مقصد صرف کسی مضمون کا اصل مقصد یا نفسِ مضمون معلوم کرنا ہو تو اسے کہتے ہیں۔\n TSTET 11 Jan 2025",
    "options": [
      "استحسانی مطالعہ",
      "مطالعۂ ادراک",
      "تنقیدی مطالعہ",
      "اضافی مطالعہ"
    ],
    "correct": "مطالعۂ ادراک",
    "explanation": "مطالعۂ ادراک (Reading for Comprehension/Gist) وہ مطالعہ ہے جس کا مقصد متن کو سرسری طور پر پڑھ کر اس کا مرکزی خیال، خلاصہ یا نفسِ مضمون جاننا ہوتا ہے۔ اسے طائرانہ نظر ڈالنا (Skimming) بھی کہتے ہیں۔\n (Mutala-e-Idraak (Reading for Comprehension/Gist) is the type of reading where the purpose is to quickly read the text to understand its central idea, summary, or main point. It is also known as skimming.)"
  },
  {
    "id": 21,
    "text": "علم الاعداد میں ”اردو“ کی قیمت ہے۔\n TSTET 30 June 2025",
    "options": [
      "209",
      "210",
      "211",
      "212"
    ],
    "correct": "211",
    "explanation": "علم الاعداد (ابجد) میں ہر حرف کی ایک عددی قیمت ہوتی ہے۔ لفظ 'اردو' کے حروف کی قیمتیں یہ ہیں: ا (1) + ر (200) + د (4) + و (6) = 211۔ \n(In Abjad numerology, each letter has a numerical value. For the word 'Urdu', the values are: Alif (1) + Re (200) + Dal (4) + Vav (6) = 211.)"
  },
  {
    "id": 22,
    "text": "اعظم گڑھ میں دارالمصنفین کی بنیاد ڈالنے والی شخصیت ہیں۔\n TSTET 30 June 2025",
    "options": [
      "مولانا شبلی نعمانی",
      "اختر شیرانی",
      "بے نظیر شاہ",
      "محمود الرحمان فاروقی"
    ],
    "correct": "مولانا شبلی نعمانی",
    "explanation": "دارالمصنفین، جسے شبلی اکیڈمی بھی کہا جاتا ہے، کی بنیاد اعظم گڑھ میں مشہور اسلامی اسکالر، مورخ، اور مصنف مولانا شبلی نعمانی نے رکھی تھی۔ \n(Dar-ul-Musannifeen, also known as the Shibli Academy, was founded in Azamgarh by the renowned Islamic scholar, historian, and writer Maulana Shibli Nomani.)"
  },
  {
    "id": 23,
    "text": "دو مختلف بیانات میں رابطے کے لیے اس علامت کا استعمال کیا جاتا ہے۔\n TSTET 30 June 2025",
    "options": [
      "،",
      ":",
      "۔",
      "“ ”"
    ],
    "correct": ":",
    "explanation": "علامت رابطہ (:) دو ایسے جملوں یا بیانات کو جوڑنے کے لیے استعمال ہوتی ہے جہاں دوسرا جملہ پہلے کی وضاحت کرتا ہے یا اس کی مثال پیش کرتا ہے۔ \n(The colon (:) is used to connect two statements or clauses where the second explains, illustrates, or expands on the first.)"
  },
  {
    "id": 24,
    "text": "عبد الحق کے مطابق نام دیو مالی ایک نیک آدمی تھا۔ خط کشیدہ لفظ صفت کی قسم ہے۔\n TSTET 30 June 2025",
    "options": [
      "مرکب توصیفی",
      "مرکب اضافی",
      "مرکب غیر اضافی",
      "علامت اضافت"
    ],
    "correct": "مرکب توصیفی",
    "explanation": "جملہ 'نیک آدمی' ایک مرکب توصیفی ہے، جس میں 'نیک' صفت ہے اور 'آدمی' موصوف ہے۔ یہ ترکیب کسی اسم کی اچھائی یا برائی بیان کرتی ہے۔ \n(The phrase 'nek aadmi' (good man) is a 'Murakkab-e-Tauseefi' (Descriptive Compound), where 'nek' is the adjective (sifat) and 'aadmi' is the noun (mausoof). This structure describes the quality of a noun.)"
  },
  {
    "id": 25,
    "text": "باہنر کی قدر کیا بے ہنر کے سامنے\nبار ہا آیا ہے یہ منظر نظر کے سامنے\nمذکورہ بالا شعر کے پہلے مصرعے میں صنعت کی نشاندہی کیجئے۔\n TSTET 30 June 2025",
    "options": [
      "صنعت مبالغہ",
      "تلمیح",
      "صنعت تجنیس",
      "صنعت تضاد"
    ],
    "correct": "صنعت تضاد",
    "explanation": "اس شعر کے پہلے مصرعے میں 'باہنر' (ہنرمند) اور 'بے ہنر' (جس میں ہنر نہ ہو) استعمال ہوئے ہیں، جو ایک دوسرے کے متضاد الفاظ ہیں۔ شعر میں دو متضاد الفاظ کا استعمال 'صنعتِ تضاد' کہلاتا ہے۔ \n(In the first line of this couplet, the words 'ba-hunar' (skilled) and 'be-hunar' (unskilled) are used, which are antonyms. The use of two opposite words in poetry is called 'San'at-e-Tazad' (Antithesis).)"
  },
  {
    "id": 26,
    "text": "جب جملے میں کوئی اسم مضاف الیہ واقع ہو تو اس کی ایسی حالت کو کہتے ہیں۔\n TSTET 30 June 2025",
    "options": [
      "حالت ظرفی",
      "حالت اضافی",
      "حالت خبری",
      "حالت مفعولی"
    ],
    "correct": "حالت اضافی",
    "explanation": "اردو قواعد میں، جب ایک اسم کا دوسرے اسم سے تعلق یا ملکیت ظاہر کی جائے تو اسے حالتِ اضافی کہتے ہیں۔ جس اسم کا تعلق ہوتا ہے وہ 'مضاف الیہ' کہلاتا ہے۔ \n(In Urdu grammar, when a noun shows possession or relation to another noun, it is in the genitive case, known as 'Halat-e-Izafi'. The noun showing possession is the 'Mudaf Ilaih'.)"
  },
  {
    "id": 27,
    "text": "اعراب کی جگہ استعمال ہونے والے حروف کہلاتے ہیں۔\n TSTET 30 June 2025",
    "options": [
      "حروف تہجی",
      "حروف علت",
      "حروف صحیح",
      "حروف قمری"
    ],
    "correct": "حروف علت",
    "explanation": "اردو میں اعراب (زبر، زیر، پیش) مختصر مصوتوں کی آواز دیتے ہیں۔ ان کی جگہ لمبی مصوتی آوازوں کے لیے جو حروف استعمال ہوتے ہیں وہ ا، و، ی ہیں، اور انہیں حروفِ علت کہا جاتا ہے۔ \n(In Urdu, diacritics (eraab) represent short vowel sounds. The letters used in their place for long vowel sounds are Alif (ا), Wao (و), and Ye (ی), and they are called 'Huroof-e-Illat' (Vowels).)"
  },
  {
    "id": 28,
    "text": "وہ نظم جس میں خدا کی تعریف کرتے ہوئے اپنی حاجتوں کا اظہار عجز و انکساری کے ساتھ کیا جائے کہلاتی ہے۔\n TSTET 30 June 2025",
    "options": [
      "قصیدہ",
      "رباعی",
      "منقبت",
      "مناجات"
    ],
    "correct": "مناجات",
    "explanation": "مناجات ایک ایسی نظم ہے جس میں شاعر اللہ تعالیٰ کی حمد و ثنا بیان کرتا ہے اور پھر بڑی عاجزی اور انکساری سے اپنی دعائیں اور ضرورتیں پیش کرتا ہے۔ \n(A 'Munajat' is a poem in which the poet praises God and then humbly presents his prayers and needs with utmost humility and submission.)"
  },
  {
    "id": 29,
    "text": "کیفی اعظمی کا اصل نام کیا ہے؟\n TSTET 30 June 2025",
    "options": [
      "سید فتح حسین رضوی",
      "سید احمد شاہ بخاری",
      "سید داؤد خان",
      "سید اطہر حسین رضوی"
    ],
    "correct": "سید اطہر حسین رضوی",
    "explanation": "مشہور ترقی پسند شاعر اور فلمی گیت نگار کیفی اعظمی کا اصل نام سید اطہر حسین رضوی تھا۔ \n(The real name of the famous progressive poet and film lyricist Kaifi Azmi was Syed Athar Hussain Rizvi.)"
  },
  {
    "id": 30,
    "text": "وند + سبب “ کی تکرار سے بننے والی بحر ہے۔\n TSTET 30 June 2025",
    "options": [
      "فعولن فعولن فعولن",
      "فاعلن، فاعلن، فاعلن",
      "فاعلاتن فاعلاتن فاعلاتن",
      "مفاعیلن مفاعیلن مفاعیلن"
    ],
    "correct": "فعولن فعولن فعولن",
    "explanation": "علم عروض میں، رکن 'فعولن' ایک 'وتد مجموع' (فعُ) اور ایک 'سبب خفیف' (لُن) سے مل کر بنتا ہے۔ لہٰذا، 'وتد + سبب' کی تکرار سے بننے والی بحر 'فعولن' کی تکرار پر مبنی ہوگی، جیسے بحرِ متقارب۔ \n(In Urdu prosody ('Ilm-e-Arud'), the metrical foot 'fa'ulun' is composed of a 'watad majmu' (fa'u) and a 'sabab khafif' (lun). Therefore, a meter formed by the repetition of 'watad + sabab' will be based on the repetition of 'fa'ulun', such as Bahr-e-Mutaqarib.)"
  },
  {
    "id": 31,
    "text": "واں چاندنی ہے جو کچھ ، یاں درد کی کسک ہے۔ خط کشیدہ لفظ کے معنی ہیں۔\n TSTET 30 June 2025",
    "options": [
      "مسرت",
      "ٹیس",
      "شادمانی",
      "خوشی"
    ],
    "correct": "ٹیس",
    "explanation": "لفظ 'کسک' کا مطلب ہلکا اور مسلسل درد، چبھن یا ٹیس ہے۔ دیے گئے اختیارات میں 'ٹیس' اس کا سب سے قریبی ہم معنی لفظ ہے۔ \n(The word 'kasak' means a mild and continuous ache, a sting, or a pang. Among the given options, 'tees' is its closest synonym.)"
  },
  {
    "id": 32,
    "text": "17 جولائی 1945ء کو ایوت محل مہاراشٹرا میں پیدا ہوئے۔\n TSTET 30 June 2025",
    "options": [
      "مرزا فرحت اللہ بیگ",
      "جوش ملیح آبادی",
      "ڈاکٹر بانو سرتاج",
      "معین احسن جذبی"
    ],
    "correct": "ڈاکٹر بانو سرتاج",
    "explanation": "ڈاکٹر بانو سرتاج ایک مشہور اردو افسانہ نگار اور ماہرِ تعلیم تھیں جو 17 جولائی 1945 کو مہاراشٹر کے شہر ایوت محل میں پیدا ہوئیں۔ \n(Dr. Bano Sartaj was a famous Urdu short story writer and academician who was born on 17 July 1945 in the city of Yavatmal, Maharashtra.)"
  },
  {
    "id": 33,
    "text": "وہ ضمیر جو کسی بیان کی وضاحت یا جملوں کو ملانے کے لیے استعمال ہوتا ہے۔\n TSTET 30 June 2025",
    "options": [
      "ضمیر موصولہ",
      "ضمیر شخصی",
      "ضمیر استفہامیہ",
      "ضمیر اشارہ"
    ],
    "correct": "ضمیر موصولہ",
    "explanation": "ضمیر موصولہ (مثلاً جو، جس، جن) وہ ضمیر ہے جو دو جملوں کو ملاتا ہے اور اپنے سے پہلے آنے والے اسم (مرجع) کی وضاحت کرتا ہے۔ \n(A relative pronoun ('Zamir-e-Mausoola'), such as 'jo', 'jis', 'jin', is a pronoun that connects two sentences and refers to a preceding noun (antecedent), providing more information about it.)"
  },
  {
    "id": 34,
    "text": "ا ، ب ، ج یہ حروف کہلاتے ہیں۔\n TSTET 30 June 2025",
    "options": [
      "حروف قمری",
      "حروف شمسی",
      "حروف علت",
      "ہمکاری الفاظ"
    ],
    "correct": "حروف قمری",
    "explanation": "عربی اور اردو قواعد کی رو سے، وہ حروف جن سے پہلے 'ال' لگانے پر 'لام' کی آواز واضح طور پر ادا کی جائے، 'حروفِ قمری' کہلاتے ہیں۔ ا، ب، اور ج اسی قبیل سے ہیں۔ \n(According to Arabic and Urdu grammar, the letters before which the 'l' sound in the article 'al' is pronounced are called 'Huroof-e-Qamari' (lunar letters). 'Alif', 'Be', and 'Jeem' belong to this category.)"
  },
  {
    "id": 35,
    "text": "نظم کی تدریس کے لیے کون سا تدریسی طریقہ سب سے زیادہ موزوں ہے؟\n TSTET 30 June 2025",
    "options": [
      "گفتگو کا طریقہ",
      "اداکاری کا طریقہ",
      "غنائیہ طریقہ",
      "راست طریقہ"
    ],
    "correct": "غنائیہ طریقہ",
    "explanation": "غنائیہ طریقہ (گانے یا ترنم سے پڑھنے کا طریقہ) نظم کی تدریس کے لیے سب سے مؤثر ہے کیونکہ یہ نظم کے آہنگ، موسیقی اور جذبات کو ابھارتا ہے، جس سے طلباء اس کی جمالیات کو بہتر طور پر سمجھ اور محسوس کر سکتے ہیں۔ \n(The singing/recitation method ('Ghanaiya Tariqa') is most suitable for teaching poetry as it highlights the rhythm, musicality, and emotion of the poem, helping students to better understand and appreciate its aesthetics.)"
  },
  {
    "id": 36,
    "text": "توضیحی مہارت کا تعلق ہے۔\n TSTET 30 June 2025",
    "options": [
      "اسکول سے",
      "طلبہ سے",
      "وسائل سے",
      "مائیکرو ٹیچنگ سے"
    ],
    "correct": "مائیکرو ٹیچنگ سے",
    "explanation": "توضیحی مہارت (Skill of Explanation) تدریس کی ایک بنیادی مہارت ہے جس کی مشق اور تربیت خاص طور پر 'مائیکرو ٹیچنگ' کے ذریعے کی جاتی ہے۔ مائیکرو ٹیچنگ اساتذہ کی تربیت کا ایک طریقہ ہے۔ \n(The Skill of Explanation is a fundamental teaching skill that is specifically practiced and developed through 'Micro-teaching', which is a teacher training technique.)"
  },
  {
    "id": 37,
    "text": "سمعی معاون اشیا کا جوڑ ہے۔\n TSTET 30 June 2025",
    "options": [
      "فلیش کارڈ، اور ہیڈ پراجکٹر",
      "ٹیپ ریکارڈ، لنگوافون",
      "سی ڈیز، فلانئل بورڈ",
      "فلیش کارڈ، ویڈیو"
    ],
    "correct": "ٹیپ ریکارڈ، لنگوافون",
    "explanation": "سمعی معاون اشیاء وہ تدریسی آلات ہیں جو سننے کی حس سے تعلق رکھتے ہیں۔ ٹیپ ریکارڈر اور لنگوافون دونوں ہی آواز کو سننے کے لیے استعمال ہوتے ہیں، اس لیے یہ سمعی معاون اشیاء کا جوڑا ہے۔ \n(Auditory aids are teaching tools that appeal to the sense of hearing. Both the tape recorder and the linguaphone are used for listening to sound, making them a pair of auditory aids.)"
  },
  {
    "id": 38,
    "text": "مناسب تکرار کے ذریعہ طالب علم کو سکھایا جاتا ہے۔\n TSTET 30 June 2025",
    "options": [
      "قواعد",
      "ترجمہ",
      "الفاظ کی ہجے",
      "تدریس"
    ],
    "correct": "قواعد",
    "explanation": "تکرار اور مشق کا طریقہ عام طور پر قواعد سکھانے کے لیے استعمال کیا جاتا ہے۔ اس طریقے سے طلباء گرامر کے اصولوں اور ساختوں کو ذہن نشین کر لیتے ہیں تاکہ ان کا استعمال خودکار ہو جائے۔ \n(The method of repetition and drills is commonly used for teaching grammar ('qawa'id'). This helps students internalize grammatical rules and structures, leading to automaticity in their use.)"
  },
  {
    "id": 39,
    "text": "اس سرگرمی کی وجہ سے طلبہ کے ذخیرہ الفاظ میں اضافہ کے ساتھ ساتھ قوت یاداشت تیز ہوتی ہے۔\n TSTET 30 June 2025",
    "options": [
      "اسکول میگزین",
      "سیمینار",
      "ڈرامہ",
      "بیت بازی"
    ],
    "correct": "بیت بازی",
    "explanation": "بیت بازی ایک شعری مقابلہ ہے جس میں شرکاء کو حافظے سے اشعار سنانے ہوتے ہیں۔ یہ سرگرمی نہ صرف قوتِ یاداشت کو تیز کرتی ہے بلکہ نئے الفاظ اور تراکیب سے روشناس کروا کر ذخیرہ الفاظ میں بھی اضافہ کرتی ہے۔ \n(Bait Bazi is a poetry competition where participants recite couplets from memory. This activity not only sharpens memory but also enhances vocabulary by exposing participants to new words and phrases.)"
  },
  {
    "id": 40,
    "text": "دوران تدریس کی جانے والی جانچ ہے۔\n TSTET 30 June 2025",
    "options": [
      "تشخیصی جانچ",
      "تشکیلی جانچ",
      "مجموعی جانچ",
      "پروگناسٹک جانچ"
    ],
    "correct": "تشکیلی جانچ",
    "explanation": "وہ جانچ جو تدریس اور سیکھنے کے عمل کے دوران طلباء کی پیشرفت پر نظر رکھنے اور رائے دینے کے لیے کی جاتی ہے، 'تشکیلی جانچ' (Formative Assessment) کہلاتی ہے۔ \n(The assessment that is conducted during the teaching and learning process to monitor student progress and provide feedback is known as 'Tashkeeli Jaanch' (Formative Assessment).)"
  },
  {
    "id": 41,
    "text": "مسدس کہتے ہیں \n TSTET 23 May 2024",
    "options": [
      "5 مصرعے کے بند کو",
      "6 مصرعے کے بند کو",
      "4 مصرعے کے بند کو",
      "3 مصرعے کے بند کو"
    ],
    "correct": "6 مصرعے کے بند کو",
    "explanation": "مسدس اردو شاعری کی ایک صنف ہے جس کا ہر بند چھ مصرعوں پر مشتمل ہوتا ہے۔ اس کی سب سے مشہور مثال الطاف حسین حالی کی نظم 'مد و جزر اسلام' ہے، جسے 'مسدس حالی' بھی کہا جاتا ہے۔ (Musaddas is a genre of Urdu poetry in which each stanza consists of six lines. The most famous example is Altaf Hussain Hali's poem 'Madd o Jazar-e-Islam', also known as 'Musaddas-e-Hali'.)"
  },
  {
    "id": 42,
    "text": "مد و جزر اسلام کے شاعر ہیں۔ \n TSTET 23 May 2024",
    "options": [
      "حالی",
      "ذوق",
      "آتش",
      "میر"
    ],
    "correct": "حالی",
    "explanation": "'مد و جزرِ اسلام' الطاف حسین حالی کی ایک مشہور اور طویل نظم ہے، جسے عام طور پر 'مسدسِ حالی' کے نام سے جانا جاتا ہے۔ یہ نظم مسلمانوں کے عروج و زوال کی داستان بیان کرتی ہے۔ (Madd o Jazar-e-Islam is a famous and long poem by Altaf Hussain Hali, commonly known as 'Musaddas-e-Hali'. This poem narrates the story of the rise and fall of Muslims.)"
  },
  {
    "id": 43,
    "text": "یہ اسم کیفیت کی مثال ہے۔ \n TSTET 23 May 2024",
    "options": [
      "آسمان",
      "دل",
      "فضیلت",
      "قلم"
    ],
    "correct": "فضیلت",
    "explanation": "اسم کیفیت (Abstract Noun) وہ اسم ہے جو کسی ایسی چیز کو ظاہر کرے جسے ہم نہ دیکھ سکیں اور نہ چھو سکیں، بلکہ صرف محسوس کر سکیں۔ 'فضیلت' (virtue) ایک کیفیت ہے، جبکہ آسمان، دل اور قلم مادی اشیاء ہیں جنہیں دیکھا اور چھوا جا سکتا ہے۔ (An Abstract Noun is a noun that denotes something we cannot see or touch, but can only feel. 'Fazilat' (virtue) is a quality, whereas sky, heart, and pen are material objects that can be seen and touched.)"
  },
  {
    "id": 44,
    "text": "جب کسی کے قول کو ان کے ہی الفاظ میں لکھنا ہو تو یہ علامت استعمال کی جاتی ہے۔ \n TSTET 23 May 2024",
    "options": [
      "( )",
      "!",
      "“ ”",
      "۔"
    ],
    "correct": "“ ”",
    "explanation": "قواعد میں، جب کسی کا قول یا اقتباس بغیر کسی تبدیلی کے نقل کیا جاتا ہے، تو اسے واوین (“ ”) کے درمیان لکھا جاتا ہے۔ اس علامت کو انگریزی میں Inverted Commas یا Quotation Marks کہتے ہیں۔ (In grammar, when someone's saying or a quotation is reproduced without any change, it is enclosed in quotation marks (“ ”).)"
  },
  {
    "id": 45,
    "text": "کسی کی تعریف یا مذمت میں لکھی جانے والی نظم کہلاتی ہے۔ \n TSTET 23 May 2024",
    "options": [
      "غزل",
      "رباعی",
      "قصیدہ",
      "مثنوی"
    ],
    "correct": "قصیدہ",
    "explanation": "قصیدہ ایک ایسی صنفِ سخن ہے جس کے بنیادی موضوعات کسی کی مدح (تعریف)، ہجو (مذمت)، یا کوئی واقعہ بیان کرنا ہوتا ہے۔ (Qasida is a genre of poetry whose primary themes are praising someone (madah), satirizing someone (haju), or narrating an event.)"
  },
  {
    "id": 46,
    "text": "خاقانی ہند اس شاعر کا خطاب ہے۔ \n TSTET 23 May 2024",
    "options": [
      "مرزا غالب",
      "میر حسن",
      "ذوق",
      "بہادر شاہ ظفر"
    ],
    "correct": "ذوق",
    "explanation": "شیخ محمد ابراہیم ذوق کو مغل بادشاہ اکبر شاہ ثانی نے 'خاقانیِ ہند' کا خطاب عطا کیا تھا۔ خاقانی فارسی کے ایک عظیم قصیدہ گو شاعر تھے، اور ذوق کی قصیدہ گوئی میں مہارت کی وجہ سے انہیں یہ خطاب دیا گیا۔ (Shaikh Muhammad Ibrahim Zauq was given the title of 'Khaqani-e-Hind' by the Mughal emperor Akbar Shah II. Khaqani was a great Persian Qasida poet, and Zauq was given this title due to his mastery in writing Qasidas.)"
  },
  {
    "id": 47,
    "text": "جب کسی لفظ پر الف لام لگایا جائے اور وہ الف لام پڑھا جائے تو (اس کے بعد آنے والے حروف) کہلاتے ہیں۔ \n TSTET 23 May 2024",
    "options": [
      "حروف قمری",
      "حروف شمسی",
      "حروف علت",
      "حروف ہکاری"
    ],
    "correct": "حروف قمری",
    "explanation": "عربی قواعد کے مطابق، جب 'ال' (الف لام) کے بعد حروفِ قمری (Lunar Letters) میں سے کوئی حرف آئے تو 'لام' کی آواز واضح طور پر پڑھی جاتی ہے، جیسے 'اَلْقَمَر'۔ حروف شمسی (Solar Letters) کی صورت میں 'لام' کی آواز نہیں پڑھی جاتی، جیسے 'اَلشَّمْس'۔ (According to Arabic grammar, when one of the 'huroof-e-qamari' (Lunar Letters) comes after 'Al' (Alif-Laam), the sound of 'Laam' is pronounced clearly, for example, 'al-qamar'. In the case of 'huroof-e-shamsi' (Solar Letters), the sound of 'Laam' is not pronounced, for example, 'ash-shams'.)"
  },
  {
    "id": 48,
    "text": "اس شاعر نے دارالترجمہ عثمانیہ یونیورسٹی میں بحیثیت ناظر ادبی خدمت انجام دی۔ \n TSTET 23 May 2024",
    "options": [
      "جوش",
      "حالی",
      "ذوق",
      "وحید الدین سلیم"
    ],
    "correct": "وحید الدین سلیم",
    "explanation": "مولوی وحید الدین سلیم ایک نامور ادیب، نقاد اور ماہرِ لسانیات تھے جنہوں نے جامعہ عثمانیہ کے دارالترجمہ میں ناظرِ ادبی (Literary Superintendent) کے طور پر خدمات انجام دیں اور اصطلاحات سازی میں اہم کردار ادا کیا۔ (Maulvi Waheeduddin Saleem was a renowned writer, critic, and linguist who served as the Literary Superintendent (Nazir-e-Adabi) at Dar-ut-Tarjuma of Osmania University and played a significant role in terminology development.)"
  },
  {
    "id": 49,
    "text": "شعری محاسن کو اجاگر کرنا اور اس سے لطف اندوز ہونا کہلاتا ہے۔ \n TSTET 23 May 2024",
    "options": [
      "استعارہ",
      "علم قافیہ",
      "علم عروض",
      "علم بیان"
    ],
    "correct": "علم بیان",
    "explanation": "علم بیان (Rhetoric) وہ علم ہے جس میں کلام کے معنوی حسن اور دلکشی پیدا کرنے کے طریقوں، جیسے تشبیہ، استعارہ، مجازِ مرسل اور کنایہ کا مطالعہ کیا جاتا ہے۔ یہ شعری محاسن کو سمجھنے اور ان سے لطف اندوز ہونے میں مدد کرتا ہے۔ (Ilm-ul-Bayan (Rhetoric) is the science that studies the methods of creating semantic beauty and charm in speech, such as simile, metaphor, metonymy, and irony. It helps in understanding and appreciating poetic merits.)"
  },
  {
    "id": 50,
    "text": "”فضیلت چاند کی طرح خوبصورت ہے۔“ اس جملہ میں حرف تشبیہ ہے۔ \n TSTET 23 May 2024",
    "options": [
      "فضیلت",
      "کی طرح",
      "چاند",
      "خوبصورت"
    ],
    "correct": "کی طرح",
    "explanation": "تشبیہ میں چار ارکان ہوتے ہیں: مشبہ (فضیلت)، مشبہ بہ (چاند)، وجہ شبہ (خوبصورتی) اور حرفِ تشبیہ۔ حرفِ تشبیہ وہ لفظ ہے جو مشبہ اور مشبہ بہ کے درمیان تعلق قائم کرتا ہے۔ اس جملے میں 'کی طرح' حرفِ تشبیہ ہے۔ (A simile (Tashbeeh) has four components: Mushabbah (the compared - Fazilat), Mushabbah bihi (compared to - moon), Wajh-e-Shabah (reason for comparison - beauty), and Harf-e-Tashbeeh (particle of similitude). The particle of similitude is the word that establishes the relationship. In this sentence, 'ki tarah' (like/as) is that particle.)"
  },
  {
    "id": 51,
    "text": "بسم اللہ الرحمن الرحیم کے کل اعداد ہیں۔ \n TSTET 23 May 2024",
    "options": [
      "781",
      "786",
      "886",
      "192"
    ],
    "correct": "786",
    "explanation": "علم الاعداد (ابجد) میں ہر عربی حرف کی ایک عددی قیمت مقرر ہے۔ 'بسم اللہ الرحمن الرحیم' کے تمام حروف کی عددی قیمتوں کو جمع کرنے پر کل مجموعہ 786 آتا ہے۔ (In numerology (Ilm-ul-Abjad), each Arabic letter has a numerical value. The sum of the numerical values of all the letters in 'Bismillah al-Rahman al-Rahim' totals 786.)"
  },
  {
    "id": 52,
    "text": "نر جاندار کے مقابلہ مادہ اور مادہ جاندار کے مقابل نر ہو تو کہلاتا ہے۔ \n TSTET 23 May 2024",
    "options": [
      "جنس غیر حقیقی",
      "جنس عام",
      "جنس حقیقی",
      "جنسِ مجازی"
    ],
    "correct": "جنس حقیقی",
    "explanation": "قواعد میں جنس کی دو قسمیں ہیں: جنسِ حقیقی اور جنسِ غیر حقیقی۔ جنسِ حقیقی وہ جنس ہے جس میں مذکر کے مقابلے میں مادہ جاندار اور مادہ کے مقابلے میں مذکر جاندار موجود ہو، جیسے مرد اور عورت، بیل اور گائے۔ (In grammar, there are two types of gender: real gender (Jins-e-Haqiqi) and unreal gender (Jins-e-Ghair Haqiqi). Real gender is where a female counterpart exists for a male living being and vice versa, such as man and woman, ox and cow.)"
  },
  {
    "id": 53,
    "text": "وہ نام جو کسی شئے یا شخص کے وجود میں آنے کے وقت رکھا گیا ہو کہلاتا ہے۔ \n TSTET 23 May 2024",
    "options": [
      "خطاب",
      "اسم علم",
      "تخلص",
      "لقب"
    ],
    "correct": "اسم علم",
    "explanation": "اسم علم وہ اسم معرفہ (Proper Noun) ہے جو کسی شخص، جگہ یا چیز کا اصلی یا ذاتی نام ہو، جو اسے دوسروں سے ممتاز کرے۔ یہ نام عموماً پیدائش کے وقت رکھا جاتا ہے۔ (Ism-e-Alam is a proper noun which is the original or personal name of a person, place, or thing that distinguishes it from others. This name is usually given at the time of birth.)"
  },
  {
    "id": 54,
    "text": "لفظ 'صحیح' کی جمع ہے۔ \n TSTET 23 May 2024",
    "options": [
      "اصح",
      "صحیحوں",
      "صحاح",
      "صحیحات"
    ],
    "correct": "صحاح",
    "explanation": "'صحیح' عربی زبان کا لفظ ہے اور اس کی جمع 'صِحاح' ہے۔ جیسے 'احادیثِ صحاح' یعنی صحیح حدیثوں کا مجموعہ (جیسے صحاح ستہ)۔ ('Sahih' is an Arabic word and its plural is 'Sihah'. For example, 'Ahadith-e-Sihah' means the collection of authentic hadiths (like the Sihah Sitta).)"
  },
  {
    "id": 55,
    "text": "ترسیل خیالات کا وہ ذریعہ جس کا گفتگو یا تحریر سے کوئی واسطہ نہیں ہوتا۔ \n TSTET 23 May 2024",
    "options": [
      "اشارات",
      "علامات",
      "بولی",
      "بات چیت"
    ],
    "correct": "اشارات",
    "explanation": "اشاراتی زبان یا جسمانی حرکات (body language) غیر لفظی ترسیل (non-verbal communication) کا ایک ذریعہ ہے جس میں خیالات کا اظہار بغیر الفاظ کے، یعنی بغیر بولے یا لکھے، کیا جاتا ہے۔ (Sign language or body language is a means of non-verbal communication in which ideas are expressed without words, i.e., without speaking or writing.)"
  },
  {
    "id": 56,
    "text": "یہ علاقہ شناخت اور عقلی مشاغل اور مہارتوں کی نمائندگی کرتا ہے۔ \n TSTET 23 May 2024",
    "options": [
      "ادراکی علاقہ",
      "جذباتی علاقہ",
      "تاثراتی علاقہ",
      "نفسی و حرکیاتی علاقہ"
    ],
    "correct": "ادراکی علاقہ",
    "explanation": "بلوم کی درجہ بندی (Bloom's Taxonomy) کے مطابق، ادراکی علاقہ (Cognitive Domain) کا تعلق ذہنی اور عقلی مہارتوں سے ہوتا ہے، جیسے کہ معلومات کو یاد رکھنا، سمجھنا، تجزیہ کرنا اور مسائل کو حل کرنا۔ (According to Bloom's Taxonomy, the Cognitive Domain is related to mental and intellectual skills, such as remembering information, understanding, analyzing, and solving problems.)"
  },
  {
    "id": 57,
    "text": "اس تدریس کا اہم مقصد تدریسی مہارتوں پر عبور حاصل کرنا ہے۔ \n TSTET 23 May 2024",
    "options": [
      "تدارکی تدریس",
      "تدریجی تدریس",
      "خرد تدریس",
      "اصلاحی تدریس"
    ],
    "correct": "خرد تدریس",
    "explanation": "خرد تدریس (Micro-teaching) اساتذہ کی تربیت کا ایک طریقہ ہے جس میں زیرِ تربیت اساتذہ اپنی تدریسی مہارتوں (teaching skills) کو بہتر بنانے کے لیے مختصر دورانیے کے اسباق کی مشق کرتے ہیں اور اس پر انہیں فیڈ بیک دیا جاتا ہے۔ (Micro-teaching is a teacher training technique in which trainee teachers practice short-duration lessons to improve their teaching skills and receive feedback on their performance.)"
  },
  {
    "id": 58,
    "text": "ذیل میں ایک کا تعلق درسی کتب کی ظاہری خوبی کے اوصاف سے ہے۔ \n TSTET 23 May 2024",
    "options": [
      "فرہنگ",
      "طباعت",
      "مشقی سوالات",
      "ترتیب مواد"
    ],
    "correct": "طباعت",
    "explanation": "درسی کتاب کی ظاہری خوبیوں کا تعلق اس کے مادی پہلوؤں سے ہوتا ہے، جیسے اس کی جلد، کاغذ کا معیار، اور طباعت (printing)۔ فرہنگ، مشقی سوالات اور مواد کی ترتیب کتاب کی باطنی یا داخلی خوبیاں ہیں۔ (The external qualities of a textbook relate to its physical aspects, such as its cover, paper quality, and printing. The glossary, exercises, and arrangement of content are the book's internal qualities.)"
  },
  {
    "id": 59,
    "text": "صحیح جوڑ ہے۔ \n TSTET 23 May 2024",
    "options": [
      "سہ ابعادی آلہ - لینگو فون",
      "نمائشی تختے - فلم",
      "گرافک امداد - نمونے",
      "مشغلاتی امداد - سیر و تفریح"
    ],
    "correct": "مشغلاتی امداد - سیر و تفریح",
    "explanation": "تدریسی امداد کی درجہ بندی میں، سیر و تفریح (Excursion) کو مشغلاتی امداد (Activity Aid) شمار کیا جاتا ہے کیونکہ اس میں طلباء خود سرگرمی میں حصہ لے کر سیکھتے ہیں۔ دیگر جوڑے غلط ہیں: لینگو فون سماعی آلہ ہے، فلم بصری-سماعی آلہ ہے، اور نمونے (models) سہ ابعادی آلات ہیں۔ (In the classification of teaching aids, an excursion is considered an Activity Aid because students learn by participating in the activity. The other pairs are incorrect: a linguaphone is an audio aid, a film is an audio-visual aid, and models are 3D aids.)"
  },
  {
    "id": 60,
    "text": "عزت کرنا - شراب پینا - سگریٹ پینا - الگ خصوصیت والے کی نشاندہی کیجئے۔ اوپر دیا گیا سوال معروضی سوالات کی یہ قسم ہے۔ \n TSTET 23 May 2024",
    "options": [
      "درجہ بندی ٹائپ",
      "تقابلی ٹائپ",
      "مماثلتی ٹائپ",
      "کثیر الانتخابی ٹائپ"
    ],
    "correct": "درجہ بندی ٹائپ",
    "explanation": "یہ سوال درجہ بندی (Classification) کی قسم سے تعلق رکھتا ہے۔ اس قسم کے سوال میں دیے گئے الفاظ کے گروپ میں سے ایک ایسے لفظ کا انتخاب کرنا ہوتا ہے جو باقیوں سے مختلف خصوصیت رکھتا ہو۔ یہاں 'عزت کرنا' ایک مثبت سماجی قدر ہے جبکہ باقی دو منفی عادات ہیں۔ (This question belongs to the classification type. In this type of question, one has to select a word from a given group that has a different characteristic from the rest. Here, 'to respect' is a positive social value, while the other two are negative habits.)"
  },
  {
    "id": 61,
    "text": "”باغ و بہار“ کا تعلق ادب کی کس صنف سے ہے؟",
    "options": [
      "ناول",
      "داستان",
      "افسانہ",
      "انشائیہ"
    ],
    "correct": "داستان",
    "explanation": "”باغ و بہار“ میر امن دہلوی کی لکھی ہوئی ایک مشہور داستان ہے، جو فورٹ ولیم کالج کے تحت لکھی گئی تھی۔ یہ قصۂ چہار درویش کا اردو ترجمہ ہے۔\n('Bagh o Bahar' is a famous Dastan (tale) written by Mir Amman Dehlvi under the patronage of Fort William College. It is an Urdu translation of the 'Qissa-e-Chahar Darvesh'.)"
  },
  {
    "id": 62,
    "text": "”شکوہ“ اور ”جواب شکوہ“ علامہ اقبال کے کس شعری مجموعے میں شامل ہیں؟",
    "options": [
      "بانگ درا",
      "بال جبریل",
      "ضرب کلیم",
      "ارمغان حجاز"
    ],
    "correct": "بانگ درا",
    "explanation": "علامہ اقبال کی مشہور نظمیں ”شکوہ“ (1909) اور ”جوابِ شکوہ“ (1913) ان کے پہلے اردو شعری مجموعے ”بانگِ درا“ (1924) میں شامل ہیں۔\n(Allama Iqbal's famous poems 'Shikwa' (1909) and 'Jawab-e-Shikwa' (1913) are included in his first Urdu poetry collection, 'Bang-e-Dara' (1924).)"
  },
  {
    "id": 63,
    "text": "وہ اسم جو کسی مصدر سے بنے اور اس میں کام کرنے والے کے معنی پائے جائیں، کیا کہلاتا ہے؟",
    "options": [
      "اسم مفعول",
      "اسم حالیہ",
      "اسم فاعل",
      "اسم کیفیت"
    ],
    "correct": "اسم فاعل",
    "explanation": "اسم فاعل (Participle Noun/Agent Noun) وہ اسم ہے جو کسی مصدر سے بنے اور کام کرنے والے کو ظاہر کرے۔ مثلاً 'لکھنا' سے 'لکھنے والا' یا 'لکھاری'۔\n(Ism-e-Fa'il is a noun derived from a verb root (masdar) that indicates the doer of the action. For example, from 'likhna' (to write), we get 'likhne wala' or 'likhari' (writer).)"
  },

  {
    "id": 64,
    "text": "جب کسی جملے میں سوال پوچھا جائے تو آخر میں کونسی علامت لگائی جاتی ہے؟",
    "options": [
      "۔ (ختمہ)",
      "، (سکتہ)",
      "؟ (سوالیہ)",
      "! (فجائیہ)"
    ],
    "correct": "؟ (سوالیہ)",
    "explanation": "رموز اوقاف میں، سوالیہ نشان (؟) یا علامتِ استفہام وہ علامت ہے جو ہر اس جملے کے آخر میں لگائی جاتی ہے جس میں کوئی سوال پوچھا گیا ہو۔\n(In punctuation (Rumuz-o-Auqaf), the question mark (?) or 'Alamat-e-Istifham' is the sign placed at the end of every interrogative sentence.)"
  },
  {
    "id": 65,
    "text": "لفظ 'خوش' جو 'خوشبو' میں استعمال ہوا ہے، قواعد کی رو سے کیا ہے؟",
    "options": [
      "لاحقہ",
      "سابقہ",
      "مترادف",
      "ضد"
    ],
    "correct": "سابقہ",
    "explanation": "سابقہ (Prefix) وہ حرف یا لفظ ہے جو کسی دوسرے بامعنی لفظ کے شروع میں لگ کر ایک نیا لفظ بناتا ہے۔ یہاں 'خوش' لفظ 'بو' سے پہلے لگ کر 'خوشبو' بنا رہا ہے۔\n(A 'Sabiqa' (prefix) is a letter or word that is added to the beginning of a meaningful word to create a new word. Here, 'khush' is prefixed to 'bu' (smell) to form 'khushbu' (fragrance).)"
  },
  {
    "id": 66,
    "text": "پانی بھرنا، آگ بگولا ہونا، اپنا الو سیدھا کرنا، یہ سب کیا ہیں؟",
    "options": [
      "کہاوتیں",
      "ضرب الامثال",
      "محاورے",
      "روزمرہ"
    ],
    "correct": "محاورے",
    "explanation": "محاورہ (Idiom) دو یا دو سے زیادہ الفاظ کا وہ مجموعہ ہے جو اپنے حقیقی معنوں کے بجائے مجازی معنوں میں استعمال ہوتا ہے، اور اس کے آخر میں مصدر کی علامت 'نا' ہوتی ہے۔\n(A 'Muhawara' (idiom) is a group of two or more words used in a figurative, not literal, sense, and it typically ends with the infinitive marker 'na'.)"
  },
  {
    "id": 67,
    "text": "”حیات جاوید“ کس کی سوانح عمری ہے؟",
    "options": [
      "مرزا غالب",
      "علامہ اقبال",
      "سر سید احمد خان",
      "مولانا محمد علی جوہر"
    ],
    "correct": "سر سید احمد خان",
    "explanation": "”حیاتِ جاوید“ الطاف حسین حالی کی لکھی ہوئی ایک مشہور سوانح عمری (Biography) ہے، جس میں انہوں نے سر سید احمد خان کی زندگی اور خدمات پر تفصیل سے روشنی ڈالی ہے۔\n('Hayat-e-Javed' is a famous biography written by Altaf Hussain Hali, in which he detailed the life and services of Sir Syed Ahmed Khan.)"
  },
  {
    "id": 68,
    "text": "”آگ کا دریا“ کس کا مشہور ناول ہے؟",
    "options": [
      "عصمت چغتائی",
      "کرشن چندر",
      "قرۃ العین حیدر",
      "سعادت حسن منٹو"
    ],
    "correct": "قرۃ العین حیدر",
    "explanation": "”آگ کا دریا“ قرۃ العین حیدر کا شاہکار ناول ہے، جو 1959 میں شائع ہوا۔ اسے اردو ادب کے اہم ترین ناولوں میں شمار کیا جاتا ہے۔\n('Aag ka Darya' is the masterpiece novel by Qurratulain Hyder, published in 1959. It is considered one of the most important novels in Urdu literature.)"
  },
  {
    "id": 69,
    "text": "وہ نظم جس میں کسی کی موت پر غم کا اظہار کیا جائے، کیا کہلاتی ہے؟",
    "options": [
      "قصیدہ",
      "مثنوی",
      "مرثیہ",
      "واسوخت"
    ],
    "correct": "مرثیہ",
    "explanation": "مرثیہ (Elegy) وہ صنفِ شاعری ہے جس میں کسی شخص کی وفات پر رنج و غم کا اظہار کیا جاتا ہے اور اس کی خوبیاں بیان کی جاتی ہیں۔ مرثیہ نگاری میں میر انیس اور مرزا دبیر مشہور ہیں۔\n('Marsiya' (Elegy) is a genre of poetry in which grief and sorrow are expressed over someone's death, and their virtues are described. Mir Anis and Mirza Dabeer are famous for writing Marsiyas.)"
  },
  {
    "id": 70,
    "text": "علمِ عروض میں ارکان کی تعداد کتنی ہے؟",
    "options": [
      "پانچ",
      "سات",
      "آٹھ",
      "دس"
    ],
    "correct": "آٹھ",
    "explanation": "علمِ عروض (Prosody) میں بحروں کی بنیاد جن الفاظ پر ہے انہیں ارکان کہتے ہیں۔ بنیادی ارکان کی تعداد آٹھ ہے: فعولن، فاعلن، مفاعیلن، فاعلاتن، مستفعلن، متفاعلن، مفاعلتن، اور مفعولات۔\n(In Ilm-e-Arooz (Prosody), the words that form the basis of meters are called 'Arkan' (feet). There are eight basic feet: Fa'ulun, Fa'ilun, Mafa'ilun, Fa'ilatun, Mustaf'ilun, Mutafa'ilun, Mufa'alatun, and Maf'ulatu.)"
  },
  {
    "id": 71,
    "text": "”شیر کی آمد ہے کہ رن کانپ رہا ہے“ ۔ اس مصرعے میں کونسی صنعت استعمال ہوئی ہے؟",
    "options": [
      "تشبیہ",
      "استعارہ",
      "مبالغہ",
      "تلمیح"
    ],
    "correct": "استعارہ",
    "explanation": "اس مصرعے میں بہادر شخص (مثلاً حضرت عباسؓ) کو براہِ راست 'شیر' کہہ دیا گیا ہے۔ جب کسی ایک چیز کو بعینہٖ دوسری چیز قرار دیا جائے تو اسے استعارہ (Metaphor) کہتے ہیں۔\n(In this line, a brave person (e.g., Hazrat Abbas) is directly called a 'lion'. When one thing is declared to be exactly another thing, it is called an 'Iste'ara' (Metaphor).)"
  },
  {
    "id": 72,
    "text": "لفظ 'آفتاب' کا مترادف کیا ہے؟",
    "options": [
      "چاند",
      "ستارہ",
      "سورج",
      "آسمان"
    ],
    "correct": "سورج",
    "explanation": "مترادفات وہ الفاظ ہوتے ہیں جو معنی میں ایک جیسے ہوں۔ 'آفتاب' فارسی زبان کا لفظ ہے جس کا مطلب 'سورج' ہے۔ خورشید اور شمس بھی اس کے مترادفات ہیں۔\n(Synonyms are words that have the same meaning. 'Aftab' is a Persian word meaning 'sun'. 'Khurshid' and 'Shams' are also its synonyms.)"
  },
  {
    "id": 73,
    "text": "لفظ 'دنیا' کی ضد کیا ہے؟",
    "options": [
      "آخرت",
      "زمین",
      "جنت",
      "آسمان"
    ],
    "correct": "آخرت",
    "explanation": "ضد یا متضاد وہ الفاظ ہیں جو معنی میں ایک دوسرے کے الٹ ہوں۔ 'دنیا' کا مطلب ہے یہ جہان، اور اس کا متضاد 'آخرت' ہے، یعنی مرنے کے بعد کا جہان۔\n(Antonyms are words that are opposite in meaning. 'Dunya' means 'this world', and its antonym is 'Akhirat', which means the hereafter or the world after death.)"
  },
  {
    "id": 74,
    "text": "'لڑکا' سے اسم کیفیت کیا بنے گا؟",
    "options": [
      "لڑکی",
      "لڑکے",
      "لڑکپن",
      "لڑاکا"
    ],
    "correct": "لڑکپن",
    "explanation": "اسم کیفیت (Abstract Noun) وہ اسم ہے جو کسی کیفیت، حالت یا جذبے کو ظاہر کرے۔ 'لڑکا' سے اس کی حالت یا کیفیت 'لڑکپن' (boyhood/childhood) بنتی ہے۔\n(An abstract noun is one that expresses a quality, state, or emotion. From 'larka' (boy), the abstract noun for its state is 'larakpan' (boyhood).)"
  },
  {
    "id": 75,
    "text": "وہ فعل جس میں کسی کام کا کرنا یا ہونا گزرے ہوئے زمانے میں شرط یا تمنا کے ساتھ پایا جائے، اسے کہتے ہیں۔",
    "options": [
      "ماضی مطلق",
      "ماضی شکیہ",
      "ماضی استمراری",
      "ماضی شرطی یا تمنائی"
    ],
    "correct": "ماضی شرطی یا تمنائی",
    "explanation": "ماضی شرطی یا تمنائی (Subjunctive Past) وہ فعل ہے جو گزرے ہوئے زمانے میں کسی شرط یا آرزو کو ظاہر کرے۔ مثلاً 'اگر وہ محنت کرتا تو کامیاب ہو جاتا'۔\n('Mazi Sharti ya Tamannai' (Subjunctive Past) is a verb that expresses a condition or wish in the past. For example, 'Agar woh mehnat karta to kamyab ho jata' (If he had worked hard, he would have succeeded).)"
  },
  {
    "id": 76,
    "text": "حروفِ تہجی میں 'ٹ' ، 'ڈ' ، 'ڑ' کون سے حروف کہلاتے ہیں؟",
    "options": [
      "حروفِ حلقی",
      "حروفِ ہندی (سخت)",
      "ہکاری حروف",
      "حروفِ شجری"
    ],
    "correct": "حروفِ ہندی (سخت)",
    "explanation": "ٹ، ڈ، اور ڑ وہ آوازیں ہیں جو خالص ہندی الاصل الفاظ میں پائی جاتی ہیں اور اردو نے انہیں اپنایا ہے۔ انہیں سخت یا معکوسی (Retroflex) حروف بھی کہا جاتا ہے۔\n('Te', 'Daal', and 'Re' are sounds found in words of purely Indian origin that Urdu has adopted. They are also known as hard or retroflex consonants.)"
  },
  {
    "id": 77,
    "text": "ابنِ مریم، ابنِ بطوطہ، ابو القاسم۔ یہ سب اسم کی کس قسم کی مثالیں ہیں؟",
    "options": [
      "لقب",
      "خطاب",
      "کنیت",
      "تخلص"
    ],
    "correct": "کنیت",
    "explanation": "کنیت وہ نام ہے جو باپ، ماں، بیٹے یا کسی اور رشتے کی نسبت سے پکارا جائے۔ 'ابن' (بیٹا) یا 'ابو' (باپ) سے شروع ہونے والے نام کنیت کہلاتے ہیں۔\n('Kunyat' is a name used to call someone based on their relationship with their father, mother, son, etc. Names starting with 'Ibn' (son of) or 'Abu' (father of) are examples of Kunyat.)"
  },
  {
    "id": 78,
    "text": "وہ نظم جس کا ہر بند پانچ مصرعوں پر مشتمل ہو، اسے کیا کہتے ہیں؟",
    "options": [
      "رباعی",
      "مربع",
      "مخمس",
      "مسدس"
    ],
    "correct": "مخمس",
    "explanation": "مخمس (Quintain) وہ نظم ہے جس کا ہر بند (stanza) پانچ مصرعوں پر مشتمل ہوتا ہے۔ نظیر اکبر آبادی نے اپنی شاعری میں مخمس کا کثرت سے استعمال کیا ہے۔\n('Mukhammas' is a poem in which each stanza consists of five lines. Nazeer Akbarabadi frequently used this form in his poetry.)"
  },
  {
    "id": 79,
    "text": "علم الاعداد میں لفظ 'علی' کی قیمت کیا ہے؟",
    "options": [
      "101",
      "110",
      "70",
      "12"
    ],
    "correct": "110",
    "explanation": "علم الاعداد (ابجد) میں حروف کی قیمتیں یہ ہیں: ع (70) + ل (30) + ی (10)۔ ان کا مجموعہ 110 ہوتا ہے۔\n(In Abjad numerology, the values of the letters are: 'Ain' (70) + 'Lam' (30) + 'Ye' (10). Their sum is 110.)"
  },
  {
    "id": 80,
    "text": "پطرس بخاری کا اصل نام کیا تھا؟",
    "options": [
      "احمد شاہ بخاری",
      "رشید احمد صدیقی",
      "مشتاق احمد یوسفی",
      "شوکت تھانوی"
    ],
    "correct": "احمد شاہ بخاری",
    "explanation": "اردو کے عظیم مزاح نگار پطرس بخاری کا اصل نام سید احمد شاہ بخاری تھا۔ پطرس ان کا قلمی نام تھا۔ ان کی کتاب 'مضامین پطرس' اردو مزاح میں سنگِ میل کی حیثیت رکھتی ہے۔\n(The real name of the great Urdu humorist Patras Bokhari was Syed Ahmed Shah Bokhari. 'Patras' was his pen name. His book 'Mazameen-e-Patras' is a milestone in Urdu humor.)"
  },
  {
    "id": 81,
    "text": "”ذکرِ میر“ کس کی خود نوشت سوانح عمری ہے؟",
    "options": [
      "میر انیس",
      "میر درد",
      "میر تقی میر",
      "میر حسن"
    ],
    "correct": "میر تقی میر",
    "explanation": "”ذکرِ میر“ خدائے سخن میر تقی میر کی خود نوشت (Autobiography) ہے، جو انہوں نے فارسی زبان میں لکھی تھی۔ اس میں انہوں نے اپنی زندگی کے حالات اور زمانے کا نقشہ کھینچا ہے۔\n('Zikr-e-Mir' is the autobiography of the 'God of Poetry' Mir Taqi Mir, which he wrote in Persian. In it, he depicted the events of his life and the state of his times.)"
  },
  {
    "id": 82,
    "text": "جس لفظ کا صرف ایک ہی معنی ہو، اسے کیا کہتے ہیں؟",
    "options": [
      "مرکب لفظ",
      "مہمل لفظ",
      "موضوع لفظ",
      "مفرد لفظ"
    ],
    "correct": "مفرد لفظ",
    "explanation": "مفرد لفظ (Simple Word) وہ لفظ ہے جو اکیلا ہو اور ایک ہی معنی رکھتا ہو، یعنی وہ دوسرے الفاظ سے مل کر نہ بنا ہو۔ مثلاً: گھر، کتاب، قلم۔\n(A 'Mufrad Lafz' (Simple Word) is a single word that has only one meaning and is not formed by combining other words. For example: ghar (house), kitab (book), qalam (pen).)"
  },
  {
    "id": 83,
    "text": "وہ حروف جو خوشی، غم یا حیرت کے موقع پر بے ساختہ زبان سے نکلتے ہیں، کہلاتے ہیں:",
    "options": [
      "حروفِ عطف",
      "حروفِ فجائیہ",
      "حروفِ شرط",
      "حروفِ ندا"
    ],
    "correct": "حروفِ فجائیہ",
    "explanation": "حروفِ فجائیہ (Interjections) وہ حروف ہیں جو کسی جذبے جیسے خوشی، غم، حیرت، یا نفرت کے اظہار کے لیے استعمال ہوتے ہیں۔ مثلاً: واہ!، اف!، سبحان اللہ!۔\n('Huroof-e-Fajaiyah' (Interjections) are words used to express a sudden feeling or emotion like joy, sorrow, surprise, or contempt. For example: Wah!, Uff!, Subhan Allah!.)"
  },
  {
    "id": 84,
    "text": "”ابن الوقت“ کس کا مشہور ناول ہے؟",
    "options": [
      "پریم چند",
      "ڈپٹی نذیر احمد",
      "رتن ناتھ سرشار",
      "عبدالحلیم شرر"
    ],
    "correct": "ڈپٹی نذیر احمد",
    "explanation": "”ابن الوقت“ کو اردو کا پہلا باقاعدہ ناول سمجھا جاتا ہے، جسے ڈپٹی نذیر احمد نے لکھا تھا۔ اس کا مرکزی کردار انگریزی تہذیب سے مرعوب ایک شخص ہے۔\n('Ibn-ul-Waqt' is considered the first formal novel of Urdu, written by Deputy Nazir Ahmed. Its main character is a person impressed by English civilization.)"
  },
  {
    "id": 85,
    "text": "کلام میں کسی مشہور تاریخی واقعے، آیت یا حدیث کی طرف اشارہ کرنا کیا کہلاتا ہے؟",
    "options": [
      "ایہام",
      "تجنیس",
      "تلمیح",
      "مراعاۃ النظیر"
    ],
    "correct": "تلمیح",
    "explanation": "صنعتِ تلمیح (Allusion) میں شاعر اپنے شعر میں کسی مشہور تاریخی واقعے، قرآنی آیت، حدیث یا کسی قصے کی طرف مختصر اشارہ کرتا ہے جس سے شعر کے معنی میں وسعت پیدا ہو جاتی ہے۔\n(In the figure of speech 'Talmih' (Allusion), a poet makes a brief reference to a famous historical event, Quranic verse, Hadith, or story, which adds depth to the meaning of the couplet.)"
  },
  {
    "id": 86,
    "text": "”دہلی کا ایک یادگار مشاعرہ“ کس کی تصنیف ہے؟",
    "options": [
      "مرزا فرحت اللہ بیگ",
      "مولوی عبد الحق",
      "خواجہ حسن نظامی",
      "رشید احمد صدیقی"
    ],
    "correct": "مرزا فرحت اللہ بیگ",
    "explanation": "یہ مرزا فرحت اللہ بیگ کا لکھا ہوا ایک نہایت دلچسپ اور معلوماتی خاکہ ہے جس میں انہوں نے بہادر شاہ ظفر کے دور کے آخری مشاعرے کی روداد بیان کی ہے۔\n(This is a very interesting and informative sketch written by Mirza Farhatullah Baig, in which he has narrated the proceedings of the last great Mushaira of Bahadur Shah Zafar's era.)"
  },
  {
    "id": 87,
    "text": "لفظ 'کتاب' کی جمع کیا ہے؟",
    "options": [
      "کتابیں",
      "کتب",
      "مکتب",
      "الف اور ب دونوں"
    ],
    "correct": "الف اور ب دونوں",
    "explanation": "اردو میں 'کتاب' کی جمع 'کتابیں' بھی درست ہے اور عربی سے ماخوذ جمع 'کتب' بھی رائج ہے۔ لہٰذا دونوں جوابات درست ہیں۔\n(In Urdu, the plural of 'kitab' can be 'kitabein' (Urdu form) as well as 'kutub' (the plural form derived from Arabic). Therefore, both answers are correct.)"
  },
  {
    "id": 88,
    "text": "شعر کے آخر میں بار بار آنے والے لفظ یا الفاظ کے مجموعے کو کیا کہتے ہیں؟",
    "options": [
      "قافیہ",
      "ردیف",
      "مقطع",
      "مطلع"
    ],
    "correct": "ردیف",
    "explanation": "ردیف (Refrain) وہ لفظ یا الفاظ ہیں جو قافیے کے بعد آتے ہیں اور ہر شعر کے دوسرے مصرعے میں (اور مطلع کے دونوں مصرعوں میں) بغیر کسی تبدیلی کے دہرائے جاتے ہیں۔\n(The 'Radeef' (refrain) is the word or set of words that comes after the 'Qafiya' (rhyme) and is repeated unchanged at the end of the second line of every couplet (and in both lines of the 'Matla').)"
  },
  {
    "id": 89,
    "text": "ذیل میں سے کون سا لفظ مذکر ہے؟",
    "options": [
      "دہی",
      "روٹی",
      "چائے",
      "کرسی"
    ],
    "correct": "دہی",
    "explanation": "اردو قواعد میں کچھ الفاظ کی جنس کو لے کر اختلاف پایا جاتا ہے، لیکن اہل زبان کی اکثریت 'دہی' کو مذکر بولتی ہے (دہی کھٹا ہے)، جبکہ روٹی، چائے اور کرسی مؤنث ہیں۔\n(In Urdu grammar, there is some disagreement about the gender of certain words, but the majority of native speakers consider 'dahi' (yogurt) as masculine (dahi khatta hai), while 'roti', 'chai', and 'kursi' are feminine.)"
  },
  {
    "id": 90,
    "text": "”علی گڑھ تحریک“ کے بانی کون تھے؟",
    "options": [
      "الطاف حسین حالی",
      "شبلی نعمانی",
      "سر سید احمد خان",
      "مولوی نذیر احمد"
    ],
    "correct": "سر سید احمد خان",
    "explanation": "علی گڑھ تحریک انیسویں صدی کی ایک اہم تعلیمی، سماجی اور ادبی تحریک تھی جس کے بانی سر سید احمد خان تھے۔ اس کا مقصد مسلمانوں میں جدید تعلیم کو فروغ دینا تھا۔\n(The Aligarh Movement was an important educational, social, and literary movement of the 19th century, founded by Sir Syed Ahmed Khan. Its aim was to promote modern education among Muslims.)"
  },
  {
    "id": 91,
    "text": "”اردوئے معلیٰ“ کس کے خطوط کا مجموعہ ہے؟",
    "options": [
      "مولانا ابوالکلام آزاد",
      "علامہ اقبال",
      "مرزا غالب",
      "مولانا حالی"
    ],
    "correct": "مرزا غالب",
    "explanation": "”اردوئے معلیٰ“ اور ”عودِ ہندی“ مرزا اسد اللہ خان غالب کے خطوط کے دو مشہور مجموعے ہیں۔ غالب نے خط کو 'آدھی ملاقات' بنا دیا اور مراسلے کو مکالمہ بنا دیا۔\n('Urdu-e-Mu'alla' and 'Oud-e-Hindi' are two famous collections of letters by Mirza Asadullah Khan Ghalib. Ghalib transformed letter writing, making correspondence feel like a conversation.)"
  },
  {
    "id": 92,
    "text": "وہ کلمہ جو کسی اسم کی جگہ استعمال ہو، کیا کہلاتا ہے؟",
    "options": [
      "صفت",
      "فعل",
      "ضمیر",
      "حرف"
    ],
    "correct": "ضمیر",
    "explanation": "ضمیر (Pronoun) وہ کلمہ ہے جو کسی اسم کی جگہ پر بولا جائے تاکہ اسم کو بار بار دہرانا نہ پڑے۔ مثلاً: وہ، تم، میں، اس، ان۔\n(A 'Zameer' (pronoun) is a word that is used in place of a noun to avoid its repetition. For example: woh (he/she/that), tum (you), main (I), us (him/her), un (them).)"
  },
  {
    "id": 93,
    "text": "کلام میں دو ایسے لفظ استعمال کرنا جن کے معنی ایک دوسرے کی ضد ہوں، کونسی صنعت کہلاتی ہے؟",
    "options": [
      "صنعتِ تلمیح",
      "صنعتِ ایہام",
      "صنعتِ تضاد",
      "صنعتِ لف و نشر"
    ],
    "correct": "صنعتِ تضاد",
    "explanation": "صنعتِ تضاد (Antithesis) وہ صنعت ہے جس میں شاعر اپنے شعر میں دو ایسے الفاظ لاتا ہے جو معنوی طور پر ایک دوسرے کے مخالف ہوں۔ جیسے: دن اور رات، صبح اور شام۔\n('San'at-e-Tazad' (Antithesis) is a figure of speech in which a poet uses two words that are opposite in meaning in a couplet. For example: din (day) and raat (night), subah (morning) and shaam (evening).)"
  },
  {
    "id": 94,
    "text": "وہ اسم جو کسی جگہ یا وقت کو ظاہر کرے، کیا کہلاتا ہے؟",
    "options": [
      "اسم ظرف",
      "اسم آلہ",
      "اسم مصغر",
      "اسم مکبر"
    ],
    "correct": "اسم ظرف",
    "explanation": "اسم ظرف (Adverbial Noun of place or time) وہ اسم ہے جو کسی جگہ (ظرفِ مکاں) یا وقت (ظرفِ زماں) کو ظاہر کرے۔ مثلاً: مسجد، اسکول (مکاں)؛ صبح، شام (زماں)۔\n('Ism-e-Zarf' is a noun that indicates a place ('Zarf-e-Makan') or a time ('Zarf-e-Zaman'). For example: masjid, school (place); subah, shaam (time).)"
  },
  {
    "id": 95,
    "text": "جملے میں فاعل اور مفعول دونوں ہوں تو وہ فعل کونسا فعل کہلاتا ہے؟",
    "options": [
      "فعل لازم",
      "فعل متعدی",
      "فعل ناقص",
      "فعل تام"
    ],
    "correct": "فعل متعدی",
    "explanation": "فعل متعدی (Transitive Verb) وہ فعل ہے جس کا اثر فاعل سے گزر کر مفعول تک پہنچے۔ اسے اپنا مفہوم مکمل کرنے کے لیے فاعل کے علاوہ مفعول کی بھی ضرورت ہوتی ہے۔ جیسے: 'احمد نے خط لکھا'۔\n(A 'Fe'l-e-Muta'addi' (Transitive Verb) is a verb whose action passes from the subject to an object. It requires an object in addition to the subject to complete its meaning. For example: 'Ahmed ne khat likha' (Ahmed wrote a letter).)"
  },
  {
    "id": 96,
    "text": "حروفِ تہجی میں وہ حروف جن پر نقطہ نہیں ہوتا، کیا کہلاتے ہیں؟",
    "options": [
      "حروفِ منقوط",
      "حروفِ غیر منقوط",
      "حروفِ علت",
      "حروفِ صحیح"
    ],
    "correct": "حروفِ غیر منقوط",
    "explanation": "وہ حروف جن پر کوئی نقطہ نہیں ہوتا، انہیں غیر منقوط یا مہملہ کہتے ہیں۔ مثلاً: ا، ح، د، ر، س، ص، ط، ع، ک، ل، م، ہ، و۔\n(Letters that do not have any dots on them are called 'Huroof-e-Ghair Manqoot'. For example: ا, ح, د, ر, س, ص, ط, ع, ک, ل, م, ہ, و.)"
  },
  {
    "id": 97,
    "text": "الطاف حسین حالی کا تخلص کیا تھا؟",
    "options": [
      "الطاف",
      "حسین",
      "حالی",
      "پانی پتی"
    ],
    "correct": "حالی",
    "explanation": "تخلص وہ مختصر نام ہوتا ہے جو شاعر اپنے شعروں میں استعمال کرتا ہے۔ خواجہ الطاف حسین پانی پتی کا تخلص 'حالی' تھا۔\n(The 'Takhallus' is the short pen name a poet uses in their poetry. The Takhallus of Khwaja Altaf Hussain Panipati was 'Hali'.)"
  },
  {
    "id": 98,
    "text": "اردو ڈرامے کا شیکسپیئر کسے کہا جاتا ہے؟",
    "options": [
      "امتیاز علی تاج",
      "آغا حشر کاشمیری",
      "حبیب تنویر",
      "محمد حسن"
    ],
    "correct": "آغا حشر کاشمیری",
    "explanation": "آغا حشر کاشمیری کو ان کی ڈرامہ نگاری کی خدمات اور فن پر مہارت کی وجہ سے ”اردو ڈرامے کا شیکسپیئر“ کہا جاتا ہے۔ انہوں نے بہت سے کامیاب ڈرامے لکھے اور اسٹیج کیے۔\n(Agha Hashar Kashmiri is called the 'Shakespeare of Urdu Drama' due to his services and mastery in the art of playwriting. He wrote and staged many successful plays.)"
  },
  {
    "id": 99,
    "text": "وہ اسم معرفہ جو کسی خاص صفت کی وجہ سے مشہور ہو جائے، کیا کہلاتا ہے؟",
    "options": [
      "خطاب",
      "لقب",
      "تخلص",
      "کنیت"
    ],
    "correct": "لقب",
    "explanation": "لقب (Appellation/Epithet) وہ نام ہے جو کسی خاص خوبی یا وصف کی وجہ سے قوم یا لوگوں کی طرف سے دیا جائے۔ جیسے قائد اعظم (محمد علی جناح)، بلبلِ ہند (سروجنی نائیڈو)۔\n(A 'Laqab' is a title given by the people or nation due to a particular quality or attribute. For example, Quaid-e-Azam (for Muhammad Ali Jinnah), Bulbul-e-Hind (for Sarojini Naidu).)"
  },
  {
    "id": 100,
    "text": "”امراؤ جان ادا“ کس کا شاہکار ناول ہے؟",
    "options": [
      "پریم چند",
      "ڈپٹی نذیر احمد",
      "مرزا ہادی رسوا",
      "عبدالحلیم شرر"
    ],
    "correct": "مرزا ہادی رسوا",
    "explanation": "”امراؤ جان ادا“ مرزا محمد ہادی رسوا کا لکھا ہوا ایک شہرہ آفاق ناول ہے، جو 1899 میں شائع ہوا۔ یہ لکھنؤ کی ایک طوائف کی زندگی کی کہانی پر مبنی ہے۔\n('Umrao Jaan Ada' is a world-renowned novel written by Mirza Muhammad Hadi Ruswa, published in 1899. It is based on the life story of a courtesan in Lucknow.)"
  },
  {
    "id": 101,
    "text": "’آبِ حیات‘ کے مصنف کون ہیں؟",
    "options": [
      "الطاف حسین حالی",
      "محمد حسین آزاد",
      "شبلی نعمانی",
      "سرسید احمد خان"
    ],
    "correct": "محمد حسین آزاد",
    "explanation": "’آبِ حیات‘ محمد حسین آزاد کی لکھی ہوئی اردو شعراء کی ایک مشہور تاریخ اور تذکرہ ہے۔ اسے اردو نثر کا ایک اہم سنگ میل سمجھا جاتا ہے۔\n('Aab-e-Hayat' is a famous history and tazkira (biographical anthology) of Urdu poets written by Muhammad Husain Azad. It is considered a significant milestone in Urdu prose.)"
  },
  {
    "id": 102,
    "text": "علم نحو کس چیز سے بحث کرتا ہے؟",
    "options": [
      "لفظوں کی ساخت سے",
      "جملوں کی ساخت اور ترکیب سے",
      "شعر کے وزن سے",
      "حروف کے تلفظ سے"
    ],
    "correct": "جملوں کی ساخت اور ترکیب سے",
    "explanation": "علمِ نحو (Syntax) قواعد کا وہ حصہ ہے جس میں جملوں کی ساخت، الفاظ کو جوڑ کر جملے بنانے اور ان کے باہمی تعلق سے بحث کی جاتی ہے۔\n(Ilm-e-Nahw (Syntax) is the part of grammar that deals with the structure of sentences, the combination of words to form sentences, and their interrelationship.)"
  },
  {
    "id": 103,
    "text": "’آسمان سے گرا کھجور میں اٹکا‘ یہ کیا ہے؟",
    "options": [
      "محاورہ",
      "روزمرہ",
      "کہاوت",
      "فقرہ"
    ],
    "correct": "کہاوت",
    "explanation": "کہاوت یا ضرب المثل (Proverb) ایک ایسا مکمل جملہ ہوتا ہے جس میں کوئی حکمت یا تجربے کی بات پوشیدہ ہوتی ہے۔ ’آسمان سے گرا کھجور میں اٹکا‘ کا مطلب ہے ایک مصیبت سے نکل کر دوسری میں پھنس جانا۔\n(A 'Kahawat' or 'Zarb-ul-Misl' (proverb) is a complete sentence that contains some wisdom or experiential truth. 'Aasman se gira, khajoor mein atka' means to escape one trouble only to fall into another.)"
  },
  {
    "id": 104,
    "text": "وہ اسم جو کسی اوزار یا ہتھیار کا نام ہو، کہلاتا ہے۔",
    "options": [
      "اسم ظرف",
      "اسم مکبر",
      "اسم آلہ",
      "اسم صوت"
    ],
    "correct": "اسم آلہ",
    "explanation": "اسم آلہ (Noun of Instrument) وہ اسم ہے جو کسی اوزار یا ہتھیار کے نام کو ظاہر کرے۔ مثلاً: چھری، تلوار، قلم، ہتھوڑا۔\n(Ism-e-Aala (Noun of Instrument) is a noun that denotes the name of a tool or weapon. For example: chhuri (knife), talwar (sword), qalam (pen), hathora (hammer).)"
  },
  {
    "id": 105,
    "text": "ترقی پسند تحریک کی پہلی کانفرنس کہاں منعقد ہوئی؟",
    "options": [
      "دہلی",
      "لکھنؤ",
      "علی گڑھ",
      "حیدرآباد"
    ],
    "correct": "لکھنؤ",
    "explanation": "انجمن ترقی پسند مصنفین (Progressive Writers' Association) کی پہلی باقاعدہ کانفرنس 1936 میں لکھنؤ میں منعقد ہوئی، اور اس کی صدارت منشی پریم چند نے کی تھی۔\n(The first official conference of the Progressive Writers' Association was held in Lucknow in 1936, and it was presided over by Munshi Premchand.)"
  },
  {
    "id": 106,
    "text": "ذیل میں سے کونسا حرف، حروفِ قمری کی مثال ہے؟",
    "options": [
      "ت",
      "د",
      "ش",
      "ب"
    ],
    "correct": "ب",
    "explanation": "حروفِ قمری وہ حروف ہیں جن سے پہلے 'ال' لگانے پر 'لام' کی آواز پڑھی جاتی ہے۔ مثلاً 'الباب'۔ جبکہ 'ت'، 'د' اور 'ش' حروفِ شمسی ہیں (جیسے الشمس)۔\n('Huroof-e-Qamari' (Lunar letters) are those before which if 'Al-' is added, the 'l' sound is pronounced, e.g., 'Al-Bab'. Whereas 'ت', 'د', and 'ش' are solar letters (e.g., Ash-Shams).)"
  },
  {
    "id": 107,
    "text": "’لا‘ کس طرح کا سابقہ ہے؟",
    "options": [
      "ہندی سابقہ",
      "فارسی سابقہ",
      "عربی سابقہ",
      "سنسکرت سابقہ"
    ],
    "correct": "عربی سابقہ",
    "explanation": "’لا‘ عربی زبان کا سابقہ (prefix) ہے جو نفی کے معنی دیتا ہے۔ مثلاً: لاجواب، لاعلم، لاپرواہ۔\n('La' is an Arabic prefix that gives a negative meaning. For example: la-jawab (matchless), la-ilm (ignorant), la-parwah (careless).)"
  },
  {
    "id": 108,
    "text": "’فسانہ عجائب‘ کے مصنف کون ہیں؟",
    "options": [
      "میر امن",
      "انشاء اللہ خان انشاء",
      "رجب علی بیگ سرور",
      "حیدر بخش حیدری"
    ],
    "correct": "رجب علی بیگ سرور",
    "explanation": "’فسانہ عجائب‘ رجب علی بیگ سرور کی لکھی ہوئی ایک مشہور داستان ہے۔ یہ لکھنؤ میں لکھی گئی اور اس کی زبان بہت مقفیٰ اور مسجع (rhyming and ornate) ہے۔\n('Fasana-e-Ajaib' is a famous Dastan written by Rajab Ali Baig Suroor. It was written in Lucknow, and its language is very rhyming and ornate.)"
  },
  {
    "id": 109,
    "text": "ایک مصرعے میں چند چیزوں کا ذکر کر کے دوسرے مصرعے میں ان کی مناسبت سے دوسری چیزیں بیان کرنا، کونسی صنعت ہے؟",
    "options": [
      "صنعتِ تضاد",
      "صنعتِ تلمیح",
      "صنعتِ لف و نشر",
      "صنعتِ حسنِ تعلیل"
    ],
    "correct": "صنعتِ لف و نشر",
    "explanation": "صنعتِ لف و نشر (Convolvement) میں شاعر پہلے مصرعے میں کچھ چیزیں (لف) بیان کرتا ہے اور پھر دوسرے مصرعے میں ان کی ترتیب کے ساتھ یا بغیر ترتیب کے مناسبات (نشر) لاتا ہے۔\n(In 'San'at-e-Laff-o-Nashr', a poet first mentions a few things ('Laff') in the first line and then brings their corresponding attributes ('Nashr') in the second line, either in order or out of order.)"
  },
  {
    "id": 110,
    "text": "جملے میں بات کو مکمل کرنے کے لیے جو علامت استعمال ہوتی ہے، وہ ہے:",
    "options": [
      "سکتہ (،)",
      "رابطہ (:-)",
      "تفصیلیہ (:-)",
      "ختمہ (۔)"
    ],
    "correct": "ختمہ (۔)",
    "explanation": "ختمہ (۔) یا Full Stop کی علامت ہر بیانیہ یا حکمیہ جملے کے آخر میں لگائی جاتی ہے، جو اس بات کی نشاندہی کرتی ہے کہ بات مکمل ہو گئی ہے۔\n(The 'Khatma' (۔) or full stop is used at the end of every declarative or imperative sentence to indicate that the statement is complete.)"
  },
  {
    "id": 111,
    "text": "جس نظم میں شہر کی بربادی اور تباہی کا ذکر ہو، اسے کیا کہتے ہیں؟",
    "options": [
      "مرثیہ",
      "شہر آشوب",
      "واسوخت",
      "گیت"
    ],
    "correct": "شہر آشوب",
    "explanation": "شہر آشوب شاعری کی وہ صنف ہے جس میں کسی شہر کی تباہی، بربادی، معاشی بدحالی یا زمانے کی ابتری کا نقشہ کھینچا جاتا ہے۔\n('Shahr Ashob' is a genre of poetry that depicts the destruction, ruin, economic decline, or general turmoil of a city or an era.)"
  },
  {
    "id": 112,
    "text": "”شعر العجم“ کس کی تصنیف ہے؟",
    "options": [
      "الطاف حسین حالی",
      "محمد حسین آزاد",
      "شبلی نعمانی",
      "سید سلیمان ندوی"
    ],
    "correct": "شبلی نعمانی",
    "explanation": "”شعر العجم“ علامہ شبلی نعمانی کی فارسی شاعری کی تاریخ اور تنقید پر لکھی گئی ایک شاہکار کتاب ہے، جو پانچ جلدوں پر مشتمل ہے۔\n('Sher-ul-Ajam' is a masterpiece by Allama Shibli Nomani on the history and criticism of Persian poetry, consisting of five volumes.)"
  },
  {
    "id": 113,
    "text": "وہ مرکب جو صفت اور موصوف سے مل کر بنے، کیا کہلاتا ہے؟",
    "options": [
      "مرکب اضافی",
      "مرکب عطفی",
      "مرکب توصیفی",
      "مرکب عددی"
    ],
    "correct": "مرکب توصیفی",
    "explanation": "مرکب توصیفی (Descriptive Phrase) وہ مرکب ہے جس میں ایک اسم (موصوف) کی اچھائی یا برائی (صفت) بیان کی جائے۔ جیسے: نیک لڑکا، ٹھنڈا پانی۔\n(A 'Murakkab-e-Tauseefi' (Descriptive Phrase) is a phrase that describes the quality (sifat/adjective) of a noun (mausoof). For example: nek larka (good boy), thanda paani (cold water).)"
  },
  {
    "id": 114,
    "text": "”بانگِ درا“، ”بالِ جبریل“ اور ”ضربِ کلیم“ کس کے شعری مجموعے ہیں؟",
    "options": [
      "فیض احمد فیض",
      "جوش ملیح آبادی",
      "علامہ اقبال",
      "اکبر الہ آبادی"
    ],
    "correct": "علامہ اقبال",
    "explanation": "یہ تینوں شاعرِ مشرق علامہ محمد اقبال کے اردو کلام کے مشہور مجموعے ہیں۔ ان کے علاوہ ”ارمغانِ حجاز“ بھی ان کا ایک اہم شعری مجموعہ ہے۔\n(All three are famous collections of Urdu poetry by the 'Poet of the East', Allama Muhammad Iqbal. Besides these, 'Armaghan-e-Hijaz' is also another of his important poetry collections.)"
  },
  {
    "id": 115,
    "text": "”گئودان“ کس کا مشہور ناول ہے؟",
    "options": [
      "کرشن چندر",
      "سعادت حسن منٹو",
      "راجندر سنگھ بیدی",
      "پریم چند"
    ],
    "correct": "پریم چند",
    "explanation": "”گئودان“ منشی پریم چند کا آخری اور سب سے مشہور ناول ہے۔ اسے اردو اور ہندی ادب کا شاہکار سمجھا جاتا ہے، جو ہندوستانی کسان کی زندگی کی عکاسی کرتا ہے۔\n('Godan' is the last and most famous novel by Munshi Premchand. It is considered a masterpiece of Urdu and Hindi literature, depicting the life of an Indian peasant.)"
  },
  {
    "id": 116,
    "text": "وہ لفظ جو کسی اسم یا ضمیر کی حالت، تعداد یا مقدار کو ظاہر کرے، کیا کہلاتا ہے؟",
    "options": [
      "فعل",
      "صفت",
      "حرف",
      "تمیز"
    ],
    "correct": "صفت",
    "explanation": "صفت (Adjective) وہ کلمہ ہے جو کسی اسم یا ضمیر کی اچھائی، برائی، تعداد، مقدار یا حالت کو بیان کرے۔ مثلاً: سرخ پھول، پانچ کتابیں، تھوڑا پانی۔\n(An 'Adjective' is a word that describes the quality, quantity, number, or state of a noun or pronoun. For example: surkh phool (red flower), paanch kitabein (five books), thora paani (a little water).)"
  },
  {
    "id": 117,
    "text": "”خاکم بدہن“ کس کا لکھا ہوا خاکوں کا مجموعہ ہے؟",
    "options": [
      "پطرس بخاری",
      "رشید احمد صدیقی",
      "مشتاق احمد یوسفی",
      "ابن انشاء"
    ],
    "correct": "رشید احمد صدیقی",
    "explanation": "”خاکم بدہن“ مشہور مزاح نگار اور خاکہ نویس رشید احمد صدیقی کے لکھے ہوئے خاکوں کا مجموعہ ہے۔ ان کے خاکوں میں علی گڑھ کی تہذیب نمایاں ہے۔\n('Khakam ba-dahan' is a collection of biographical sketches written by the famous humorist and sketch writer Rashid Ahmed Siddiqui. The culture of Aligarh is prominent in his sketches.)"
  },
  {
    "id": 118,
    "text": "جو کلمہ اپنے معنی خود نہ بتائے بلکہ دوسرے کلموں سے مل کر معنی دے، اسے کہتے ہیں:",
    "options": [
      "اسم",
      "فعل",
      "حرف",
      "صفت"
    ],
    "correct": "حرف",
    "explanation": "حرف (Particle) وہ کلمہ ہے جس کے اپنے کوئی معنی نہیں ہوتے، لیکن یہ اسموں اور فعلوں کو آپس میں ملانے کا کام کرتا ہے جس سے جملے کا مطلب واضح ہوتا ہے۔ مثلاً: نے، کو، سے، کا، کی۔\n(A 'Harf' (particle) is a word that has no meaning of its own but serves to connect nouns and verbs, thereby clarifying the meaning of a sentence. For example: ne, ko, se, ka, ki.)"
  },
  {
    "id": 119,
    "text": "”سحر البیان“ کس کی لکھی ہوئی مثنوی ہے؟",
    "options": [
      "میر تقی میر",
      "میر حسن",
      "دیا شنکر نسیم",
      "نواب مرزا شوق"
    ],
    "correct": "میر حسن",
    "explanation": "”سحر البیان“ میر حسن دہلوی کی لکھی ہوئی ایک مشہور مثنوی (a long narrative poem) ہے۔ اسے شمالی ہند کی بہترین مثنویوں میں شمار کیا جاتا ہے۔\n('Sahr-ul-Bayan' is a famous Masnavi (a long narrative poem) written by Mir Hasan Dehlvi. It is considered one of the best Masnavis of Northern India.)"
  },
  {
    "id": 120,
    "text": "کسی لفظ پر تلفظ کو ظاہر کرنے والی علامتیں (زبر، زیر، پیش) کیا کہلاتی ہیں؟",
    "options": [
      "مخارج",
      "اعراب",
      "اوقاف",
      "ارکان"
    ],
    "correct": "اعراب",
    "explanation": "اعراب (Diacritics) وہ علامتیں (حرکات و سکنات) ہیں جو حروف پر لگائی جاتی ہیں تاکہ ان کا صحیح تلفظ واضح ہو سکے۔ ان میں زبر، زیر، پیش، جزم، تشدید اور مد شامل ہیں۔\n('Eraab' (Diacritics) are the marks placed on letters to clarify their correct pronunciation. They include zabar, zer, pesh, jazm, tashdeed, and madd.)"
  },
  {
    "id": 121,
    "text": "ماہرین لسانیات کے مطابق اردو زبان کا تعلق کس خاندان سے ہے؟",
    "options": [
      "دراوڑی",
      "آسٹریائی",
      "ہند آریائی",
      "چینی-تبتی"
    ],
    "correct": "ہند آریائی",
    "explanation": "اردو زبان کا تعلق زبانوں کے ہند-یورپی خاندان کی شاخ ہند-آریائی سے ہے۔ یہ اسی خاندان سے ہے جس سے سنسکرت، ہندی، پنجابی اور بنگالی جیسی زبانیں تعلق رکھتی ہیں۔"
  },
  {
    "id": 122,
    "text": "”نظریۂ دکن“ کے مطابق اردو کی جائے پیدائش کون سا علاقہ ہے؟",
    "options": [
      "دہلی اور نواح",
      "پنجاب",
      "سندھ",
      "دکن"
    ],
    "correct": "دکن",
    "explanation": "نصیر الدین ہاشمی جیسے محققین کے مطابق، اردو زبان نے دکن میں اس وقت جنم لیا اور نشوونما پائی جب شمالی ہند کے صوفیاء اور تاجر دکن میں آباد ہوئے۔"
  },
  {
    "id": 123,
    "text": "سہ لسانی فارمولے کا بنیادی مقصد کیا ہے؟",
    "options": [
      "صرف مادری زبان کو فروغ دینا",
      "قومی یکجہتی اور کثیر لسانیت کو فروغ دینا",
      "انگریزی زبان کو ختم کرنا",
      "علاقائی زبانوں کو کمزور کرنا"
    ],
    "correct": "قومی یکجہتی اور کثیر لسانیت کو فروغ دینا",
    "explanation": "سہ لسانی فارمولے کا مقصد یہ ہے کہ طلباء اپنی مادری زبان کے ساتھ ساتھ قومی اور بین الاقوامی سطح پر رابطے کی زبانیں بھی سیکھیں، جس سے قومی یکجہتی اور ہم آہنگی کو فروغ ملے۔"
  },
  {
    "id": 124,
    "text": "ابتدائی جماعتوں میں تعلیم کا بہترین ذریعہ کون سی زبان ہوتی ہے؟",
    "options": [
      "انگریزی",
      "قومی زبان",
      "مادری زبان",
      "کلاسیکی زبان"
    ],
    "correct": "مادری زبان",
    "explanation": "ماہرینِ تعلیم اور نفسیات کے مطابق، ابتدائی سطح پر مادری زبان میں تعلیم دینے سے بچوں کی فہم و ادراک کی صلاحیت بہتر ہوتی ہے اور وہ آسانی سے سیکھتے ہیں۔"
  },
  {
    "id": 125,
    "text": "زبان کی وہ قسم جو کسی خاص علاقے میں بولی جاتی ہے اور اس کا کوئی تحریری ادب نہیں ہوتا، کیا کہلاتی ہے؟",
    "options": [
      "معیاری زبان",
      "بولی",
      "قومی زبان",
      "سرکاری زبان"
    ],
    "correct": "بولی",
    "explanation": "بولی (Dialect) کسی زبان کی وہ مقامی شکل ہوتی ہے جو ایک محدود علاقے میں بولی جاتی ہے اور عموماً اس کا اپنا رسم الخط یا باقاعدہ ادب نہیں ہوتا۔"
  },
  {
    "id": 126,
    "text": "اردو کو بحیثیتِ زبانِ اول پڑھانے کا ایک اہم مقصد کیا ہے؟",
    "options": [
      "صرف حروف تہجی سکھانا",
      "ادب سے لطف اندوز ہونے کی صلاحیت پیدا کرنا",
      "بنیادی بات چیت سکھانا",
      "صرف لکھنا سکھانا"
    ],
    "correct": "ادب سے لطف اندوز ہونے کی صلاحیت پیدا کرنا",
    "explanation": "جب اردو کو پہلی زبان کے طور پر پڑھایا جاتا ہے، تو اس کا ایک اعلیٰ مقصد طلباء میں ادبی ذوق پیدا کرنا اور انہیں اردو کے عظیم ادبی ورثے سے روشناس کرانا ہوتا ہے۔"
  },
  {
    "id": 127,
    "text": "بحیثیتِ زائد زبان، اردو کی تدریس کا بنیادی مقصد کیا ہونا چاہیے؟",
    "options": [
      "اردو شاعری پر تنقید کرنا سکھانا",
      "روزمرہ کی ضروریات کے لیے زبان کا استعمال سکھانا",
      "اردو میں تحقیق کرنا سکھانا",
      "اردو کے قواعد پر عبور حاصل کرانا"
    ],
    "correct": "روزمرہ کی ضروریات کے لیے زبان کا استعمال سکھانا",
    "explanation": "زائد زبان (Additional Language) کے طور پر اردو سکھانے کا بنیادی مقصد طلباء کو اس قابل بنانا ہے کہ وہ اپنی روزمرہ کی زندگی میں بنیادی بات چیت اور ابلاغ کے لیے زبان استعمال کر سکیں۔"
  },
  {
    "id": 128,
    "text": "بلوم کی درجہ بندی میں سب سے نچلی سطح کون سی ہے؟",
    "options": [
      "تجزیہ",
      "اطلاق",
      "علم/یادداشت",
      "تفہیم"
    ],
    "correct": "علم/یادداشت",
    "explanation": "بلوم کے ادراکی شعبے (Cognitive Domain) میں چھ سطحیں ہیں، جن میں سب سے پہلی اور بنیادی سطح 'علم' یا 'یادداشت' (Knowledge/Remembering) ہے، جس میں حقائق اور معلومات کو یاد رکھنا شامل ہے۔"
  },
  {
    "id": 129,
    "text": "اگر ایک طالب علم کسی کہانی کا خلاصہ اپنے الفاظ میں بیان کر سکتا ہے، تو وہ بلوم کی درجہ بندی کے کس درجے پر ہے؟",
    "options": [
      "علم",
      "تفہیم",
      "اطلاق",
      "تجزیہ"
    ],
    "correct": "تفہیم",
    "explanation": "کسی مواد کو سمجھ کر اسے اپنے الفاظ میں بیان کرنا 'تفہیم' (Comprehension/Understanding) کی سطح پر آتا ہے۔ اس میں ترجمہ کرنا، تشریح کرنا اور خلاصہ بیان کرنا شامل ہے۔"
  },
  {
    "id": 130,
    "text": "قواعد کے اصولوں کو استعمال کرتے ہوئے درست جملے بنانا، بلوم کے کس مقصدی درجے کی مثال ہے؟",
    "options": [
      "تفہیم",
      "تجزیہ",
      "اطلاق",
      "تخلیق"
    ],
    "correct": "اطلاق",
    "explanation": "سیکھے ہوئے علم یا اصولوں کو نئی صورتحال میں استعمال کرنا 'اطلاق' (Application) کہلاتا ہے۔ قواعد سیکھ کر جملے بنانا اس کی بہترین مثال ہے۔"
  },
  {
    "id": 131,
    "text": "زبان کی بنیادی مہارتوں میں سے کون سی مہارتیں 'توصیلی' یا 'تخلیقی' (Productive Skills) کہلاتی ہیں؟",
    "options": [
      "سننا اور پڑھنا",
      "بولنا اور لکھنا",
      "سننا اور بولنا",
      "پڑھنا اور لکھنا"
    ],
    "correct": "بولنا اور لکھنا",
    "explanation": "بولنا (Speaking) اور لکھنا (Writing) تخلیقی یا توصیلی مہارتیں ہیں کیونکہ ان کے ذریعے ہم اپنے خیالات اور پیغامات دوسروں تک پہنچاتے ہیں۔"
  },
  {
    "id": 132,
    "text": "زبان کی کون سی مہارتیں 'وصولی' (Receptive Skills) کہلاتی ہیں؟",
    "options": [
      "بولنا اور لکھنا",
      "سننا اور پڑھنا",
      "سننا اور لکھنا",
      "بولنا اور پڑھنا"
    ],
    "correct": "سننا اور پڑھنا",
    "explanation": "سننا (Listening) اور پڑھنا (Reading) وصولی مہارتیں ہیں کیونکہ ان کے ذریعے ہم دوسروں کے پیغامات اور خیالات کو وصول کرتے یا سمجھتے ہیں۔"
  },
  {
    "id": 133,
    "text": "زبان سیکھنے کی فطری ترتیب کیا ہے؟",
    "options": [
      "پڑھنا، لکھنا، سننا، بولنا",
      "سننا، بولنا، پڑھنا، لکھنا",
      "بولنا، سننا، لکھنا، پڑھنا",
      "لکھنا، پڑھنا، بولنا، سننا"
    ],
    "correct": "سننا، بولنا، پڑھنا، لکھنا",
    "explanation": "بچہ فطری طور پر سب سے پہلے سنتا ہے، پھر بولنا شروع کرتا ہے، اس کے بعد پڑھنا سیکھتا ہے اور آخر میں لکھنا سیکھتا ہے۔ یہی زبان کی مہارتوں کی فطری ترتیب (LSRW) ہے۔"
  },
  {
    "id": 134,
    "text": "تقریر اور مباحثے کا انعقاد کس لسانی مہارت کو فروغ دینے میں سب سے زیادہ معاون ہے؟",
    "options": [
      "سننے کی مہارت",
      "پڑھنے کی مہارت",
      "بولنے کی مہارت",
      "لکھنے کی مہارت"
    ],
    "correct": "بولنے کی مہارت",
    "explanation": "تقریر، مباحثے اور کردار نگاری (Role-playing) جیسی سرگرمیاں طلباء کو اپنے خیالات کو روانی اور اعتماد کے ساتھ بول کر اظہار کرنے کے مواقع فراہم کرتی ہیں۔"
  },
  {
    "id": 135,
    "text": "املا نویسی (Dictation) کی مشق کا بنیادی مقصد کس مہارت کو بہتر بنانا ہے؟",
    "options": [
      "بولنا اور پڑھنا",
      "سننا اور لکھنا",
      "صرف سننا",
      "صرف بولنا"
    ],
    "correct": "سننا اور لکھنا",
    "explanation": "املا نویسی میں طالب علم غور سے سنتا ہے (سننے کی مہارت) اور پھر اسے درست ہجوں کے ساتھ لکھتا ہے (لکھنے کی مہارت)۔ اس لیے یہ دونوں مہارتوں کو بیک وقت بہتر بناتی ہے۔"
  },
  {
    "id": 136,
    "text": "بلند خوانی (Loud Reading) کا بنیادی مقصد کیا ہے؟",
    "options": [
      "صرف کہانی سمجھنا",
      "درست تلفظ اور روانی پیدا کرنا",
      "خاموشی سے پڑھنے کی عادت ڈالنا",
      "لکھنے کی رفتار بڑھانا"
    ],
    "correct": "درست تلفظ اور روانی پیدا کرنا",
    "explanation": "بلند خوانی سے استاد طالب علم کے تلفظ، ادائیگی، اور روانی کی غلطیوں کو پکڑ سکتا ہے اور ان کی اصلاح کر سکتا ہے۔"
  },
  {
    "id": 137,
    "text": "خاموش خوانی (Silent Reading) کا سب سے بڑا فائدہ کیا ہے؟",
    "options": [
      "تلفظ درست ہوتا ہے",
      "تیزی سے پڑھ کر مطلب سمجھنے کی صلاحیت بڑھتی ہے",
      "دوسرے طلباء پریشان نہیں ہوتے",
      "استاد کو آرام ملتا ہے"
    ],
    "correct": "تیزی سے پڑھ کر مطلب سمجھنے کی صلاحیت بڑھتی ہے",
    "explanation": "خاموش خوانی میں توجہ تلفظ پر نہیں بلکہ معنی کو سمجھنے پر ہوتی ہے، جس سے پڑھنے کی رفتار اور فہم (Comprehension) میں اضافہ ہوتا ہے۔"
  },
  {
    "id": 138,
    "text": "ابتدائی جماعتوں میں لکھنے کی مہارت کا آغاز کس چیز سے کرانا چاہیے؟",
    "options": [
      "مضامین لکھوانے سے",
      "ٹیڑھی سیدھی لکیریں کھنچوانے سے (Scribbling)",
      "کہانیاں لکھوانے سے",
      "قواعد سکھانے سے"
    ],
    "correct": "ٹیڑھی سیدھی لکیریں کھنچوانے سے (Scribbling)",
    "explanation": "لکھنے کی مہارت کے فروغ کے لیے ابتدائی مرحلے میں بچوں کو قلم پکڑنے اور ہاتھ کی حرکات پر قابو پانے کی مشق کرائی جاتی ہے، جسے 'خط کشی' یا Scribbling کہتے ہیں۔"
  },
  {
    "id": 139,
    "text": "طلباء کو کسی موضوع پر اپنے خیالات کو منظم انداز میں لکھنے کے لیے کہنا، بلوم کے کس مقصدی درجے کو ظاہر کرتا ہے؟",
    "options": [
      "اطلاق",
      "تجزیہ",
      "تخلیق/ترکیب",
      "جانچ/قدریت"
    ],
    "correct": "تخلیق/ترکیب",
    "explanation": "جب طلباء مختلف خیالات کو ملا کر ایک نئی اور منظم تحریر (جیسے مضمون یا کہانی) تخلیق کرتے ہیں، تو یہ بلوم کی درجہ بندی کی اعلیٰ ترین سطح 'تخلیق' یا 'ترکیب' (Synthesis/Creating) پر عمل پیرا ہوتے ہیں۔"
  },
  {
    "id": 140,
    "text": "جماعت اول اور دوم کے طلباء سے زبان دانی کی کون سی بنیادی استعداد کی توقع کی جاتی ہے؟",
    "options": [
      "تنقیدی مضامین لکھنا",
      "سادہ جملے سن کر سمجھنا اور بولنا",
      "ناول کا خلاصہ بیان کرنا",
      "رسمی خط لکھنا"
    ],
    "correct": "سادہ جملے سن کر سمجھنا اور بولنا",
    "explanation": "ابتدائی جماعتوں میں زبان کی تدریس کا مقصد بچوں میں سننے، سمجھنے اور سادہ جملوں میں اپنی بات کہنے کی بنیادی صلاحیت پیدا کرنا ہوتا ہے۔"
  },
  {
    "id": 141,
    "text": "حافظ محمود شیرانی کے نظریے کے مطابق اردو کی جائے پیدائش کیا ہے؟",
    "options": [
      "دکن",
      "سندھ",
      "دہلی",
      "پنجاب"
    ],
    "correct": "پنجاب",
    "explanation": "حافظ محمود شیرانی نے اپنی کتاب ”پنجاب میں اردو“ میں لسانیاتی شواہد کی بنیاد پر یہ نظریہ پیش کیا کہ اردو زبان پنجاب میں پیدا ہوئی اور مسلمانوں کے ساتھ دہلی پہنچی۔"
  },
  {
    "id": 142,
    "text": "سہ لسانی فارمولے کے تحت تیسری زبان کون سی ہوتی ہے؟",
    "options": [
      "مادری زبان",
      "ہندی یا کوئی دوسری جدید ہندوستانی زبان/انگریزی",
      "صرف انگریزی",
      "صرف سنسکرت"
    ],
    "correct": "ہندی یا کوئی دوسری جدید ہندوستانی زبان/انگریزی",
    "explanation": "عام طور پر، پہلی زبان مادری/علاقائی زبان، دوسری زبان ہندی (غیر ہندی علاقوں میں) یا کوئی اور جدید ہندوستانی زبان/انگریزی، اور تیسری زبان انگریزی (جہاں دوسری زبان نہ ہو) یا کوئی جدید ہندوستانی زبان ہوتی ہے۔"
  },
  {
    "id": 143,
    "text": "کسی نظم کو پڑھ کر اس کے مرکزی خیال کا تعین کرنا، بلوم کے کس ادراکی درجے سے تعلق رکھتا ہے؟",
    "options": [
      "تجزیہ",
      "اطلاق",
      "علم",
      "قدریت (Evaluation)"
    ],
    "correct": "تجزیہ",
    "explanation": "تجزیہ (Analysis) کی سطح پر طالب علم معلومات کو حصوں میں تقسیم کرتا ہے اور ان کے باہمی تعلق کو سمجھتا ہے۔ نظم کا مرکزی خیال معلوم کرنا اسی صلاحیت کا مظہر ہے۔"
  },
  {
    "id": 144,
    "text": "زبان کی مہارتوں میں سے کون سی مہارت تحریری شکل میں ہوتی ہے؟",
    "options": [
      "سننا",
      "بولنا",
      "لکھنا",
      "اشارہ کرنا"
    ],
    "correct": "لکھنا",
    "explanation": "لکھنا (Writing) زبان کے اظہار کی وہ شکل ہے جس میں خیالات اور معلومات کو حروف اور الفاظ کے ذریعے تحریری صورت میں پیش کیا جاتا ہے۔"
  },
  {
    "id": 145,
    "text": "جماعت چہارم کے طالب علم سے پڑھنے کی کون سی استعداد کی توقع کی جانی چاہیے؟",
    "options": [
      "صرف حروف کی پہچان",
      "کہانی پڑھ کر اس کے کرداروں کے بارے میں بتا سکنا",
      "تحقیقی مقالے پڑھنا",
      "اخبار کے اداریے پر تبصرہ کرنا"
    ],
    "correct": "کہانی پڑھ کر اس کے کرداروں کے بارے میں بتا سکنا",
    "explanation": "اس سطح پر طلباء سے یہ توقع کی جاتی ہے کہ وہ سادہ متن کو سمجھ کر پڑھ سکیں اور اس کے بنیادی عناصر جیسے کردار، واقعات اور مرکزی خیال کو پہچان سکیں۔"
  },
  {
    "id": 146,
    "text": "سید سلیمان ندوی نے اردو کی جائے پیدائش کس علاقے کو قرار دیا؟",
    "options": [
      "دکن",
      "وادیِ سندھ",
      "دہلی",
      "اودھ"
    ],
    "correct": "وادیِ سندھ",
    "explanation": "سید سلیمان ندوی نے اپنی کتاب ”نقوشِ سلیمانی“ میں یہ نظریہ پیش کیا کہ مسلمان سب سے پہلے سندھ آئے، اس لیے اردو زبان کی ابتدا اسی علاقے میں عربی اور مقامی زبانوں کے ملاپ سے ہوئی۔"
  },
  {
    "id": 147,
    "text": "مادری زبان کی اہمیت کا سب سے بڑا پہلو کیا ہے؟",
    "options": [
      "یہ صرف گھر میں بولی جاتی ہے",
      "یہ بچے کی شخصیت اور سوچ کی بنیاد بنتی ہے",
      "یہ روزگار کے لیے ضروری ہے",
      "اس کا سیکھنا مشکل ہے"
    ],
    "correct": "یہ بچے کی شخصیت اور سوچ کی بنیاد بنتی ہے",
    "explanation": "بچہ اپنی مادری زبان میں ہی سب سے پہلے سوچنا، محسوس کرنا اور اپنے ماحول سے تعلق قائم کرنا سیکھتا ہے، جو اس کی مجموعی شخصیت کی نشوونما کے لیے بنیاد فراہم کرتی ہے۔"
  },
  {
    "id": 148,
    "text": "بحیثیتِ زبانِ اول، اردو کی تدریس کا مقصد طلباء میں پیدا کرنا ہے:",
    "options": [
      "صرف خواندگی",
      "تنقیدی اور تخلیقی صلاحیت",
      "صرف بات چیت کی اہلیت",
      "صرف ہجے یاد کرنا"
    ],
    "correct": "تنقیدی اور تخلیقی صلاحیت",
    "explanation": "پہلی زبان کی تدریس کا اعلیٰ مقصد طلباء کو اس قابل بنانا ہے کہ وہ زبان کو صرف استعمال نہ کریں بلکہ اس کا تجزیہ (تنقید) کر سکیں اور اس میں نئے خیالات (تخلیق) بھی پیش کر سکیں۔"
  },
  {
    "id": 149,
    "text": "دو کرداروں کے درمیان مکالمے کا موازنہ کرنا بلوم کی درجہ بندی کے کس سطح پر آئے گا؟",
    "options": [
      "تفہیم",
      "تجزیہ",
      "اطلاق",
      "قدریت/جانچ"
    ],
    "correct": "قدریت/جانچ",
    "explanation": "جب کسی معیار کی بنیاد پر دو چیزوں کا موازنہ کیا جائے اور ان کے بارے میں کوئی فیصلہ یا رائے قائم کی جائے تو یہ 'قدریت' یا 'جانچ' (Evaluation) کی سطح کہلاتی ہے۔"
  },
  {
    "id": 150,
    "text": "سننے کی مہارت کی جانچ کے لیے سب سے موزوں سرگرمی کون سی ہے؟",
    "options": [
      "ایک پیراگراف لکھنے کو کہنا",
      "ایک کہانی سنا کر اس پر مبنی سوالات پوچھنا",
      "کتاب سے ایک صفحہ پڑھنے کو کہنا",
      "تصویر بنانے کو کہنا"
    ],
    "correct": "ایک کہانی سنا کر اس پر مبنی سوالات پوچھنا",
    "explanation": "اس سرگرمی سے یہ جانچا جا سکتا ہے کہ طالب علم نے سنی ہوئی معلومات کو کس حد تک سمجھا اور یاد رکھا ہے، جو کہ سننے کی مہارت کا کلیدی جزو ہے۔"
  },
  {
    "id": 151,
    "text": "مسعود حسین خان کا نظریۂ پیدائشِ اردو کس علاقے سے متعلق ہے؟",
    "options": [
      "پنجاب",
      "دکن",
      "دہلی اور نواحِ دہلی",
      "سندھ"
    ],
    "correct": "دہلی اور نواحِ دہلی",
    "explanation": "مسعود حسین خان نے اپنی تحقیق 'مقدمہ تاریخ زبان اردو' میں یہ نظریہ پیش کیا کہ اردو دہلی اور اس کے آس پاس بولی جانے والی ہریانوی اور کھڑی بولی پر مبنی ہے اور وہیں پیدا ہوئی۔"
  },
  {
    "id": 152,
    "text": "وہ زبان جو کسی ملک میں سرکاری کام کاج کے لیے استعمال ہوتی ہے، کیا کہلاتی ہے؟",
    "options": [
      "مادری زبان",
      "علاقائی زبان",
      "سرکاری زبان",
      "بولی"
    ],
    "correct": "سرکاری زبان",
    "explanation": "سرکاری زبان (Official Language) وہ زبان ہوتی ہے جسے حکومت اپنے دفتری، قانونی اور انتظامی امور کے لیے استعمال کرتی ہے۔"
  },
  {
    "id": 153,
    "text": "تدریسی مقاصد کو قابلِ پیمائش اور واضح بنانے پر کس نے سب سے زیادہ زور دیا؟",
    "options": [
      "فرائیڈ",
      "پیاجے",
      "بینجمن بلوم",
      "وائیگاٹسکی"
    ],
    "correct": "بینجمن بلوم",
    "explanation": "بینجمن بلوم اور ان کے ساتھیوں نے تدریسی مقاصد کی ایک منظم درجہ بندی پیش کی تاکہ اساتذہ سیکھنے کے عمل کو واضح، منظم اور قابلِ پیمائش بنا سکیں۔"
  },
  {
    "id": 154,
    "text": "پڑھنے کی مہارت کی ایک ذیلی مہارت 'سکیننگ' (Scanning) سے کیا مراد ہے؟",
    "options": [
      "متن کا مرکزی خیال جاننا",
      "لطف اندوزی کے لیے پڑھنا",
      "کسی مخصوص معلومات کو تیزی سے تلاش کرنا",
      "ہر لفظ کو غور سے پڑھنا"
    ],
    "correct": "کسی مخصوص معلومات کو تیزی سے تلاش کرنا",
    "explanation": "سکیننگ پڑھنے کی وہ تکنیک ہے جس میں پورے متن کو پڑھنے کے بجائے تیزی سے نظر دوڑا کر کسی خاص نام، تاریخ، یا لفظ جیسی مخصوص معلومات کو تلاش کیا جاتا ہے۔"
  },
  {
    "id": 155,
    "text": "اعلیٰ ثانوی جماعتوں (Higher Secondary) میں لکھنے کی استعداد کا مقصد کیا ہونا چاہیے؟",
    "options": [
      "صرف حروف لکھنا سکھانا",
      "اپنے خیالات کو منطقی اور مدلل انداز میں پیش کرنا",
      "نقل نویسی کروانا",
      "سادہ جملے لکھوانا"
    ],
    "correct": "اپنے خیالات کو منطقی اور مدلل انداز میں پیش کرنا",
    "explanation": "اس سطح پر طلباء سے توقع کی جاتی ہے کہ وہ رسمی اور غیر رسمی تحریریں، مضامین اور رپورٹیں لکھ سکیں جس میں ان کے خیالات منظم، منطقی اور دلائل پر مبنی ہوں۔"
  },
  {
    "id": 156,
    "text": "محمد حسین آزاد نے کس زبان کو اردو کی ماں قرار دیا؟",
    "options": [
      "فارسی",
      "برج بھاشا",
      "عربی",
      "پنجابی"
    ],
    "correct": "برج بھاشا",
    "explanation": "محمد حسین آزاد نے اپنی مشہور کتاب 'آبِ حیات' میں یہ نظریہ پیش کیا کہ ”اتنی بات ہر شخص جانتا ہے کہ ہماری اردو زبان برج بھاشا سے نکلی ہے“۔"
  },
  {
    "id": 157,
    "text": "اردو بحیثیتِ زائد زبان کی تدریس میں کس چیز پر زیادہ توجہ نہیں دی جاتی؟",
    "options": [
      "تلفظ کی درستگی",
      "بنیادی ذخیرہ الفاظ",
      "شاعری کے عروض اور بلاغت پر",
      "روزمرہ کی گفتگو پر"
    ],
    "correct": "شاعری کے عروض اور بلاغت پر",
    "explanation": "زائد زبان سکھانے کا مقصد ابلاغ ہوتا ہے، اس لیے شاعری کے فنی پہلوؤں جیسے علم عروض اور علم بلاغت کی گہرائیوں میں جانا اس کی تدریس کا بنیادی مقصد نہیں ہوتا۔"
  },
  {
    "id": 158,
    "text": "اگر استاد طلباء سے کہے کہ 'اس کہانی کا انجام مختلف ہوتا تو کیا ہوتا؟'، تو وہ کس ذہنی صلاحیت کو ابھار رہا ہے؟",
    "options": [
      "یادداشت",
      "تفہیم",
      "تخلیقی سوچ",
      "اطلاق"
    ],
    "correct": "تخلیقی سوچ",
    "explanation": "یہ سوال طلباء کو روایتی سوچ سے ہٹ کر نئے امکانات اور خیالات پیدا کرنے کی ترغیب دیتا ہے، جو کہ تخلیقی سوچ (Creative Thinking) اور بلوم کی 'تخلیق' کی سطح سے تعلق رکھتا ہے۔"
  },
  {
    "id": 159,
    "text": "پڑھنے کی مہارت کی ذیلی مہارت 'سکیمنگ' (Skimming) کا کیا مطلب ہے؟",
    "options": [
      "کسی خاص لفظ کو ڈھونڈنا",
      "متن کا مجموعی تاثر یا مرکزی خیال جاننے کے لیے تیزی سے پڑھنا",
      "ایک ایک لفظ کا ترجمہ کرنا",
      "بلند آواز سے پڑھنا"
    ],
    "correct": "متن کا مجموعی تاثر یا مرکزی خیال جاننے کے لیے تیزی سے پڑھنا",
    "explanation": "سکیمنگ میں متن کو سرسری طور پر تیزی سے پڑھا جاتا ہے تاکہ اس کا خلاصہ، نفسِ مضمون یا مرکزی خیال معلوم کیا جا سکے۔"
  },
  {
    "id": 160,
    "text": "خوش خطی (Calligraphy) کا تعلق زبان کی کس مہارت سے ہے؟",
    "options": [
      "سننا",
      "بولنا",
      "پڑھنا",
      "لکھنا"
    ],
    "correct": "لکھنا",
    "explanation": "خوش خطی لکھنے کی مہارت کا ایک جمالیاتی پہلو ہے، جس میں حروف کو خوبصورت اور مقررہ اصولوں کے مطابق لکھا جاتا ہے۔"
  },
  {
    "id": 161,
    "text": "زبان کی ماہیت کے بارے میں کون سا بیان درست ہے؟",
    "options": [
      "زبان موروثی ہوتی ہے",
      "زبان ایک سماجی عمل ہے جسے سیکھا جاتا ہے",
      "زبان میں کبھی تبدیلی نہیں آتی",
      "زبان کے اصول جامد ہوتے ہیں"
    ],
    "correct": "زبان ایک سماجی عمل ہے جسے سیکھا جاتا ہے",
    "explanation": "زبان کوئی موروثی یا جینیاتی چیز نہیں بلکہ یہ ایک سماجی نظام ہے جسے انسان اپنے ماحول اور معاشرے سے تقلید اور مشق کے ذریعے سیکھتا ہے۔"
  },
  {
    "id": 162,
    "text": "مادری زبان میں تعلیم کی حمایت قومی تعلیمی پالیسی (NEP) کیوں کرتی ہے؟",
    "options": [
      "کیونکہ یہ سب سے آسان ہے",
      "کیونکہ اس سے سیکھنے کی بنیاد مضبوط ہوتی ہے اور شرحِ ترکِ تعلیم کم ہوتی ہے",
      "کیونکہ دوسری زبانیں سکھانا مہنگا ہے",
      "کیونکہ یہ صرف ایک روایت ہے"
    ],
    "correct": "کیونکہ اس سے سیکھنے کی بنیاد مضبوط ہوتی ہے اور شرحِ ترکِ تعلیم کم ہوتی ہے",
    "explanation": "قومی تعلیمی پالیسی اس بات پر زور دیتی ہے کہ مادری زبان میں پڑھانے سے بچے تصورات کو بہتر طریقے سے سمجھتے ہیں، جس سے ان کی تعلیمی بنیاد مضبوط ہوتی ہے اور وہ اسکول چھوڑنے پر مائل نہیں ہوتے۔"
  },
  {
    "id": 163,
    "text": "کسی کردار پر تنقیدی رائے دینا کہ آیا وہ مثبت تھا یا منفی، بلوم کے کس مقصدی درجے سے متعلق ہے؟",
    "options": [
      "تجزیہ",
      "اطلاق",
      "قدریت/جانچ",
      "تفہیم"
    ],
    "correct": "قدریت/جانچ",
    "explanation": "جب کوئی طالب علم کسی معیار کی بنیاد پر کسی چیز (جیسے کردار) کے بارے میں اچھا یا برا ہونے کا فیصلہ کرتا ہے یا اپنی رائے قائم کرتا ہے، تو یہ عمل 'قدریت' یا 'جانچ' (Evaluation) کہلاتا ہے۔"
  },
  {
    "id": 164,
    "text": "زبان کی چاروں بنیادی مہارتیں (LSRW) آپس میں کیسی ہیں؟",
    "options": [
      "ایک دوسرے سے بالکل الگ ہیں",
      "ایک دوسرے سے مربوط اور جڑی ہوئی ہیں",
      "صرف دو مہارتیں اہم ہیں",
      "ان میں کوئی ترتیب نہیں ہے"
    ],
    "correct": "ایک دوسرے سے مربوط اور جڑی ہوئی ہیں",
    "explanation": "زبان کی تمام مہارتیں ایک دوسرے پر انحصار کرتی ہیں اور باہم مربوط ہیں۔ اچھی طرح سننے والا ہی اچھا بول سکتا ہے اور اچھا پڑھنے والا ہی اچھا لکھ سکتا ہے۔"
  },
  {
    "id": 165,
    "text": "مڈل اسکول (جماعت 6 تا 8) کی سطح پر زبان کی تدریس کا ایک اہم مقصد کیا ہوتا ہے؟",
    "options": [
      "صرف حروف شناسی",
      "مختلف ادبی اصناف (نظم، نثر، افسانہ) سے تعارف کرانا",
      "صرف گنتی سکھانا",
      "صرف املا درست کرانا"
    ],
    "correct": "مختلف ادبی اصناف (نظم، نثر، افسانہ) سے تعارف کرانا",
    "explanation": "مڈل اسکول کی سطح پر طلباء کی ذہنی نشوونما اس قابل ہو جاتی ہے کہ انہیں زبان کے بنیادی استعمال سے آگے بڑھ کر مختلف ادبی اصناف سے متعارف کرایا جائے تاکہ ان میں ادبی ذوق پیدا ہو۔"
  },
  {
    "id": 166,
    "text": "شوقی ضیف کا نظریۂ اردو کس سے مماثلت رکھتا ہے؟",
    "options": [
      "حافظ محمود شیرانی",
      "سید سلیمان ندوی",
      "مسعود حسین خان",
      "محمد حسین آزاد"
    ],
    "correct": "مسعود حسین خان",
    "explanation": "مصر کے محقق ڈاکٹر شوقی ضیف نے بھی مسعود حسین خان کے نظریے کی تائید کی کہ اردو دہلی اور اس کے گرد و نواح میں کھڑی بولی اور ہریانوی کے زیرِ اثر پروان چڑھی۔"
  },
  {
    "id": 167,
    "text": "زبان کی بقا کے لیے سب سے اہم کیا ہے؟",
    "options": [
      "اس کا صرف لکھا جانا",
      "اس کا روزمرہ زندگی میں استعمال ہونا",
      "اس کے قواعد کا مشکل ہونا",
      "اس کا صرف کتابوں میں موجود ہونا"
    ],
    "correct": "اس کا روزمرہ زندگی میں استعمال ہونا",
    "explanation": "کوئی بھی زبان اسی وقت تک زندہ رہتی ہے جب تک وہ لوگوں کے روزمرہ کے بول چال، رابطے اور اظہار کا ذریعہ بنی رہے۔ اگر اس کا استعمال ختم ہو جائے تو وہ مردہ ہو جاتی ہے۔"
  },
  {
    "id": 168,
    "text": "زبان اول اور زائد زبان کی تدریس میں بنیادی فرق کس چیز کا ہوتا ہے؟",
    "options": [
      "استاد کا",
      "کمرہ جماعت کا",
      "تدریسی مقاصد اور طریقہ کار کا",
      "کتابوں کے رنگ کا"
    ],
    "correct": "تدریسی مقاصد اور طریقہ کار کا",
    "explanation": "زبان اول کے مقاصد گہرے اور ادبی ہوتے ہیں جبکہ زائد زبان کے مقاصد ابلاغی اور فوری ضرورت پر مبنی ہوتے ہیں۔ اسی فرق کی وجہ سے دونوں کے تدریسی طریقے بھی مختلف ہوتے ہیں۔"
  },
  {
    "id": 169,
    "text": "زبان کی مہارتوں میں سب سے پہلے کون سی مہارت بچے میں پیدا ہوتی ہے؟",
    "options": [
      "بولنے کی",
      "لکھنے کی",
      "پڑھنے کی",
      "سننے کی"
    ],
    "correct": "سننے کی",
    "explanation": "پیدائش کے بعد بچہ سب سے پہلے اپنے اردگرد کی آوازوں کو سنتا اور پہچاننا شروع کرتا ہے۔ یہ زبان سیکھنے کے عمل میں سب سے پہلا قدم ہے۔"
  },
  {
    "id": 170,
    "text": "پرائمری سطح پر بچوں کی ذخیرہ الفاظ میں اضافے کے لیے سب سے مؤثر طریقہ کیا ہے؟",
    "options": [
      "انہیں لغت یاد کروانا",
      "تصویروں، کہانیوں اور نظموں کا استعمال کرنا",
      "قواعد کے اصول رٹوانا",
      "لمبے مضامین لکھنے کو دینا"
    ],
    "correct": "تصویروں، کہانیوں اور نظموں کا استعمال کرنا",
    "explanation": "چھوٹے بچے ٹھوس چیزوں اور دلچسپ سرگرمیوں سے زیادہ سیکھتے ہیں۔ تصویریں، کہانیاں اور گیت انہیں نئے الفاظ کو سیاق و سباق میں آسانی اور دلچسپی سے سیکھنے میں مدد دیتے ہیں۔"
  },
  {
    "id": 171,
    "text": "’زبان‘ کی ماہیت کیا ہے؟",
    "options": [
      "علامتوں کا ایک بے ترتیب مجموعہ",
      "صوتی علامتوں کا ایک باقاعدہ نظام",
      "صرف لکھنے کا ایک طریقہ",
      "خیالات کا غیر منظم اظہار"
    ],
    "correct": "صوتی علامتوں کا ایک باقاعدہ نظام",
    "explanation": "زبان آوازوں پر مبنی علامتوں (الفاظ) کا ایک منظم اور باقاعدہ نظام ہے جس کے ذریعے انسان اپنے خیالات، احساسات اور معلومات کا تبادلہ کرتا ہے۔"
  },
  {
    "id": 172,
    "text": "سہ لسانی فارمولا کس تعلیمی کمیشن کی سفارش پر وضع کیا گیا؟",
    "options": [
      "رادھا کرشنن کمیشن",
      "مدالیار کمیشن",
      "کوٹھاری کمیشن",
      "سپرُو کمیٹی"
    ],
    "correct": "کوٹھاری کمیشن",
    "explanation": "کوٹھاری کمیشن (1964-66) نے ہندوستان کے کثیر لسانی منظرنامے کے پیش نظر قومی یکجہتی کو فروغ دینے کے لیے سہ لسانی فارمولے کو مؤثر طریقے سے نافذ کرنے کی سفارش کی تھی۔"
  },
  {
    "id": 173,
    "text": "اردو بحیثیت زائد زبان سکھانے والے استاد کو سب سے زیادہ توجہ کس بات پر دینی چاہیے؟",
    "options": [
      "طلباء کو زیادہ سے زیادہ بولنے کے مواقع فراہم کرنے پر",
      "صرف گرامر کے اصول لکھوانے پر",
      "کلاسیکی ادب پڑھانے پر",
      "طلباء کو خاموش رکھنے پر"
    ],
    "correct": "طلباء کو زیادہ سے زیادہ بولنے کے مواقع فراہم کرنے پر",
    "explanation": "زائد زبان سیکھنے کا بنیادی مقصد بات چیت کرنا ہے۔ لہٰذا استاد کو ایسا ماحول بنانا چاہیے جہاں طلباء غلطیوں کے خوف کے بغیر زبان کو استعمال کرنے کی زیادہ سے زیادہ مشق کریں۔"
  },
  {
    "id": 174,
    "text": "بلوم کی درجہ بندی کے مطابق، کسی مسئلے کے حل کے لیے مختلف تجاویز پیش کرنا کس سطح کی صلاحیت ہے؟",
    "options": [
      "اطلاق",
      "تجزیہ",
      "تفہیم",
      "تخلیق (Synthesis)"
    ],
    "correct": "تخلیق (Synthesis)",
    "explanation": "مختلف عناصر یا خیالات کو ملا کر ایک نیا حل، منصوبہ یا تجویز بنانا 'تخلیق' یا 'ترکیب' کی اعلیٰ سطح کی ذہنی صلاحیت ہے۔"
  },
  {
    "id": 175,
    "text": "ابتدائی جماعتوں میں بچوں کی تحریری صلاحیت کو فروغ دینے کے لیے استاد کو کیا کرنا چاہیے؟",
    "options": [
      "ان کے خیالات کو اہمیت دینی چاہیے چاہے ہجے غلط ہوں",
      "صرف ہجے کی غلطیوں پر سختی کرنی چاہیے",
      "انہیں لکھنے سے منع کرنا چاہیے",
      "صرف نقل کرنے کو کہنا چاہیے"
    ],
    "correct": "ان کے خیالات کو اہمیت دینی چاہیے چاہے ہجے غلط ہوں",
    "explanation": "ابتدائی مرحلے میں مقصد بچوں کو لکھنے پر آمادہ کرنا اور ان میں اعتماد پیدا کرنا ہوتا ہے۔ اگر شروع میں ہی ہجے پر زیادہ زور دیا جائے تو وہ لکھنے سے گھبرانے لگتے ہیں۔"
  },
  {
    "id": 176,
    "text": "’معیاری زبان‘ (Standard Language) کسے کہتے ہیں؟",
    "options": [
      "جو صرف ایک گاؤں میں بولی جائے",
      "وہ زبان جسے ایک ملک کے تعلیم یافتہ طبقے بولتے اور لکھتے ہیں اور جو سرکاری طور پر تسلیم شدہ ہو",
      "جس کا کوئی قاعدہ نہ ہو",
      "جو صرف شاعری میں استعمال ہو"
    ],
    "correct": "وہ زبان جسے ایک ملک کے تعلیم یافتہ طبقے بولتے اور لکھتے ہیں اور جو سرکاری طور پر تسلیم شدہ ہو",
    "explanation": "معیاری زبان کسی زبان کی وہ شکل ہوتی ہے جسے اس کے تمام بولنے والے معیاری اور درست تسلیم کرتے ہیں اور جو تعلیم، میڈیا اور سرکاری سطح پر استعمال ہوتی ہے۔"
  },
  {
    "id": 177,
    "text": "زبان اول کے طور پر اردو پڑھانے کا مقصد طلباء میں زبان کے تئیں کیا پیدا کرنا ہے؟",
    "options": [
      "خوف اور بیزاری",
      "محبت، قدر اور جمالیاتی شعور",
      "صرف امتحان پاس کرنے کا جذبہ",
      "اسے غیر ضروری سمجھنے کا رجحان"
    ],
    "correct": "محبت، قدر اور جمالیاتی شعور",
    "explanation": "زبان اول کی تدریس کا ایک اہم جذباتی مقصد یہ ہے کہ طلباء اپنی زبان اور اس کے ادب سے محبت کریں، اس کی قدر کریں اور اس کے حسن کو محسوس کرنے کے قابل بنیں۔"
  },
  {
    "id": 178,
    "text": "طلباء کو اخبار سے خبریں پڑھ کر سنانے کے لیے کہنا کن مہارتوں کو فروغ دیتا ہے؟",
    "options": [
      "صرف سننا",
      "صرف بولنا",
      "پڑھنا اور بولنا",
      "لکھنا اور سننا"
    ],
    "correct": "پڑھنا اور بولنا",
    "explanation": "اس سرگرمی میں طالب علم پہلے خبر کو پڑھتا ہے (پڑھنے کی مہارت) اور پھر اسے دوسروں کے سامنے بیان کرتا یا سناتا ہے (بولنے کی مہارت)۔"
  },
  {
    "id": 179,
    "text": "ایک استاد کہانی سناتے وقت آواز میں اتار چڑھاؤ اور تاثرات کا استعمال کرتا ہے۔ اس کا مقصد کیا ہے؟",
    "options": [
      "طلباء کو ڈرانا",
      "سننے کی مہارت کو مؤثر بنانا اور طلباء کی دلچسپی برقرار رکھنا",
      "اپنا وقت گزارنا",
      "کہانی کو جلدی ختم کرنا"
    ],
    "correct": "سننے کی مہارت کو مؤثر بنانا اور طلباء کی دلچسپی برقرار رکھنا",
    "explanation": "آواز کا اتار چڑھاؤ اور چہرے کے تاثرات کہانی کو جاندار بنا دیتے ہیں، جس سے طلباء پوری توجہ سے سنتے ہیں اور کہانی کے مفہوم اور جذبات کو بہتر طریقے سے سمجھتے ہیں۔"
  },
  {
    "id": 180,
    "text": "جماعت واری استعدادی صلاحیتوں کے فروغ سے کیا مراد ہے؟",
    "options": [
      "تمام جماعتوں کو ایک ہی چیز پڑھانا",
      "ہر جماعت کی عمر اور ذہنی سطح کے مطابق لسانی مہارتوں کے اہداف مقرر کرنا",
      "طلباء کو ان کی صلاحیت کے بغیر اگلی جماعت میں بھیج دینا",
      "صرف ہونہار طلباء پر توجہ دینا"
    ],
    "correct": "ہر جماعت کی عمر اور ذہنی سطح کے مطابق لسانی مہارتوں کے اہداف مقرر کرنا",
    "explanation": "اس کا مطلب یہ ہے کہ ہر جماعت کے لیے زبان کی مختلف مہارتوں (سننا، بولنا، پڑھنا، لکھنا) کے لیے مخصوص اور قابلِ حصول اہداف (Competencies) طے کیے جائیں جو بچوں کی عمر اور نفسیات کے مطابق ہوں۔"
  },
  {
    "id": 181,
    "text": "تدریسی عمل کو موثر، دلچسپ اور آسان بنانے کے لیے استعمال ہونے والی اشیاء کو کیا کہتے ہیں؟",
    "options": [
      "تعلیمی مقاصد",
      "تدریسی معاون اشیاء",
      "نصابی سرگرمیاں",
      "امتحانی سوالات"
    ],
    "correct": "تدریسی معاون اشیاء",
    "explanation": "تدریسی معاون اشیاء (Teaching Aids) وہ آلات اور مواد ہیں جنہیں اساتذہ تدریسی عمل کو زیادہ موثر، قابل فہم اور دلچسپ بنانے کے لیے استعمال کرتے ہیں۔"
  },
  {
    "id": 182,
    "text": "وہ کونسی تدریسی شئے ہے جو صرف सुनने کی حس پر انحصار کرتی ہے؟",
    "options": [
      "چارٹ",
      "ماڈل",
      "ریڈیو",
      "فلم"
    ],
    "correct": "ریڈیو",
    "explanation": "ریڈیو ایک سمعی معاون شئے (Audio Aid) ہے کیونکہ اس سے حاصل ہونے والی معلومات کا تعلق صرف سننے کی حس سے ہوتا ہے۔ چارٹ اور ماڈل بصری جبکہ فلم سمعی و بصری شئے ہے۔"
  },
  {
    "id": 183,
    "text": "طلباء میں حقیقی تجربات اور مشاہدے کو فروغ دینے کے لیے سب سے موزوں تدریسی سرگرمی کونسی ہے؟",
    "options": [
      "کلاس روم میں لیکچر",
      "تصاویر دکھانا",
      "تعلیمی سیر و تفریح",
      "ٹیپ ریکارڈر سنوانا"
    ],
    "correct": "تعلیمی سیر و تفریح",
    "explanation": "تعلیمی سیر و تفریح (Educational Excursion) ایک مشغلاتی امداد (Activity Aid) ہے جو طلباء کو حقیقی ماحول میں براہ راست مشاہدے اور تجربے کے ذریعے سیکھنے کا موقع فراہم کرتی ہے۔"
  },
  {
    "id": 184,
    "text": "بلیک بورڈ یا وائٹ بورڈ تدریسی معاون اشیاء کی کس قسم میں شمار ہوتے ہیں؟",
    "options": [
      "سمعی امداد",
      "بصری امداد",
      "سمعی و بصری امداد",
      "مشغلاتی امداد"
    ],
    "correct": "بصری امداد",
    "explanation": "بلیک بورڈ ایک روایتی اور بہت عام بصری امداد (Visual Aid) ہے، جس پر لکھ کر یا تصاویر بنا کر تصورات کو واضح کیا جاتا ہے۔"
  },
  {
    "id": 185,
    "text": "پروجیکٹر، کمپیوٹر اور ٹیلی ویژن کس قسم کی تدریسی امداد کی بہترین مثالیں ہیں؟",
    "options": [
      "سمعی معاون اشیاء",
      "بصری معاون اشیاء",
      "سمعی و بصری معاون اشیاء",
      "گرافک امداد"
    ],
    "correct": "سمعی و بصری معاون اشیاء",
    "explanation": "یہ تمام آلات سمعی و بصری معاون اشیاء  ہیں کیونکہ ان میں آواز اور تصویر دونوں ایک ساتھ پیش کی جاتی ہیں، جو سیکھنے کے عمل کو زیادہ پرکشش بناتی ہیں۔"
  },
  {
    "id": 186,
    "text": "تدریسی معاون اشیاء کا بنیادی مقصد کیا ہے؟",
    "options": [
      "استاد کا کام کم کرنا",
      "سیکھنے کے عمل کو ٹھوس اور دیرپا بنانا",
      "کلاس روم کو سجانا",
      "صرف ذہین طلباء کی مدد کرنا"
    ],
    "correct": "سیکھنے کے عمل کو ٹھوس اور دیرپا بنانا",
    "explanation": "تدریسی امداد کا بنیادی مقصد تصورات کو ٹھوس شکل دے کر سیکھنے کے عمل کو آسان، دلچسپ اور یادگار بنانا ہے تاکہ حاصل شدہ علم زیادہ دیر تک ذہن میں رہے۔"
  },
  {
    "id": 187,
    "text": "جانچ کا وہ عمل جو طالب علم کی تعلیمی کارکردگی کی قدر و قیمت کا تعین کرے، کیا کہلاتا ہے؟",
    "options": [
      "پیمائش (Measurement)",
      "تعین قدر (Evaluation)",
      "آزمائش (Testing)",
      "امتحان (Examination)"
    ],
    "correct": "تعین قدر (Evaluation)",
    "explanation": "تعین قدر یا تشخیص (Evaluation) ایک جامع عمل ہے جس میں نہ صرف طالب علم کی کارکردگی کی پیمائش کی جاتی ہے بلکہ اس کی قدر و قیمت اور معیار کا فیصلہ بھی کیا جاتا ہے۔"
  },
  {
    "id": 188,
    "text": "امتحانات منعقد کرنے کی سب سے اہم ضرورت کیا ہے؟",
    "options": [
      "طلباء کو ڈرانا",
      "طلباء کی تعلیمی پیشرفت کا جائزہ لینا اور درجہ بندی کرنا",
      "اسکول کا نام روشن کرنا",
      "والدین کو خوش کرنا"
    ],
    "correct": "طلباء کی تعلیمی پیشرفت کا جائزہ لینا اور درجہ بندی کرنا",
    "explanation": "امتحانات کی بنیادی ضرورت یہ ہے کہ ان کے ذریعے طلباء کی سیکھنے کی سطح، کامیابیوں اور کمزوریوں کا منظم طریقے سے جائزہ لیا جائے اور انہیں अगली جماعت میں ترقی دی جائے۔"
  },
  {
    "id": 189,
    "text": "مسلسل اور جامع جانچ (CCE) میں 'مسلسل' سے کیا مراد ہے؟",
    "options": [
      "ہر روز امتحان لینا",
      "صرف سال کے آخر میں امتحان لینا",
      "تدریس کے پورے عمل کے دوران مسلسل جانچ کرنا",
      "امتحان کے بغیر درجہ بندی کرنا"
    ],
    "correct": "تدریس کے پورے عمل کے دوران مسلسل جانچ کرنا",
    "explanation": "مسلسل اور جامع جانچ (CCE) میں 'مسلسل' کا مطلب ہے کہ تشخیص کا عمل تدریسی سال کے آغاز سے آخر تک جاری رہتا ہے، جس میں باقاعدہ وقفوں سے جانچ شامل ہوتی ہے۔"
  },
  {
    "id": 190,
    "text": "وہ جانچ جو تدریسی عمل کے دوران طلباء کی سیکھنے کی مشکلات کا پتہ لگانے اور رائے دینے کے لیے کی جاتی ہے، کیا کہلاتی ہے؟",
    "options": [
      "تشکیلی جانچ (Formative Assessment)",
      "مجموعی جانچ (Summative Assessment)",
      "تشخیصی جانچ (Diagnostic Assessment)",
      "پیشن گوئی جانچ (Prognostic Assessment)"
    ],
    "correct": "تشکیلی جانچ (Formative Assessment)",
    "explanation": "تشکیلی یا تکوینی جانچ (Formative Assessment) کا مقصد تدریس کے دوران ہی طلباء کی سیکھنے کی کیفیت کو جانچنا، انہیں فیڈ بیک دینا اور تدریسی طریقہ کار کو بہتر بنانا ہے۔"
  },
  {
    "id": 191,
    "text": "سالانہ امتحانات یا کسی کورس کے اختتام پر لی جانے والی جانچ کس کی مثال ہے؟",
    "options": [
      "تشکیلی جانچ",
      "مجموعی جانچ",
      "مسلسل جانچ",
      "غیر رسمی جانچ"
    ],
    "correct": "مجموعی جانچ",
    "explanation": "مجموعی یا تحصیلی جانچ (Summative Assessment) کسی تعلیمی مدت (ٹرم یا سال) کے اختتام پر کی جاتی ہے تاکہ یہ فیصلہ کیا جا سکے کہ طلباء نے مقررہ مقاصد کس حد تک حاصل کیے ہیں۔"
  },
  {
    "id": 192,
    "text": "مسلسل اور جامع جانچ (CCE) میں 'جامع' کا لفظ کن پہلوؤں کی جانچ کی طرف اشارہ کرتا ہے؟",
    "options": [
      "صرف درسی مضامین",
      "صرف ہم نصابی سرگرمیاں",
      "طلباء کی شخصیت کے درسی اور ہم نصابی دونوں پہلو",
      "صرف طلباء کا اخلاق"
    ],
    "correct": "طلباء کی شخصیت کے درسی اور ہم نصابی دونوں پہلو",
    "explanation": "'جامع' (Comprehensive) کا مطلب ہے کہ اس جانچ میں طلباء کی علمی (Scholastic) اور غیر علمی یا ہم نصابی (Co-Scholastic) دونوں صلاحیتوں، جیسے کھیل کود، فنون اور سماجی خوبیوں، کا احاطہ کیا جاتا ہے۔"
  },
  {
    "id": 193,
    "text": "جانچ کا وہ کونسا آلہ ہے جس میں طالب علم کے رویے یا کارکردگی کو 'ہاں' یا 'نہیں' یا 'موجود' اور 'غیر موجود' میں درج کیا جاتا ہے؟",
    "options": [
      "درجہ بندی پیمانہ (Rating Scale)",
      "چیک لسٹ (Checklist)",
      "واقعاتی ریکارڈ (Anecdotal Record)",
      "انٹرویو (Interview)"
    ],
    "correct": "چیک لسٹ (Checklist)",
    "explanation": "چیک لسٹ ایک سادہ آلہ ہے جس میں مطلوبہ خصائص، رویوں یا مہارتوں کی ایک فہرست ہوتی ہے، اور مشاہدہ کرنے والا صرف ان کی موجودگی یا عدم موجودگی کو نشان زد کرتا ہے۔"
  },
  {
    "id": 194,
    "text": "معروضی قسم کے سوالات (Objective Type Questions) کی سب سے بڑی خوبی کیا ہے؟",
    "options": [
      "جانچ میں یکسانیت اور معروضیت",
      "طلباء کی لکھنے کی مہارت کی جانچ",
      "طلباء کے تخیل کی جانچ",
      "سوالات بنانے میں آسانی"
    ],
    "correct": "جانچ میں یکسانیت اور معروضیت",
    "explanation": "معروضی سوالات کا جواب متعین اور مختصر ہوتا ہے، جس کی وجہ سے ممتحن کی ذاتی رائے کا اثر نہیں پڑتا اور جانچ میں معروضیت (Objectivity) اور بھروسہ مندی (Reliability) قائم رہتی ہے۔"
  },
  {
    "id": 195,
    "text": "ایک اچھی تعلیمی تحصیلی آزمائش کی اہم ترین خصوصیت کیا ہے؟",
    "options": [
      "وہ بہت مشکل ہو",
      "وہ صرف آسان سوالات پر مشتمل ہو",
      "وہ جس مقصد کے لیے بنائی گئی ہے، اسی کی پیمائش کرے",
      "وہ بہت طویل ہو"
    ],
    "correct": "وہ جس مقصد کے لیے بنائی گئی ہے، اسی کی پیمائش کرے",
    "explanation": "ایک اچھی آزمائش کی سب سے اہم خصوصیت اس کا 'درست' (Valid) ہونا ہے۔ درستگی (Validity) کا مطلب ہے کہ ٹیسٹ ان ہی صلاحیتوں یا معلومات کی پیمائش کرے جن کی پیمائش کے لیے اسے تیار کیا گیا ہے۔"
  },
  {
    "id": 196,
    "text": "جانچ کی وہ تکنیک جس میں طالب علم کے کسی خاص واقعے یا رویے کا مختصر اور معروضی بیان درج کیا جاتا ہے، کیا کہلاتی ہے؟",
    "options": [
      "چیک لسٹ",
      "درجہ بندی پیمانہ",
      "واقعاتی ریکارڈ ",
      "سوشیومیٹری"
    ],
    "correct": "واقعاتی ریکارڈ (Anecdotal Record)",
    "explanation": "واقعاتی ریکارڈ میں استاد طالب علم کی زندگی کے کسی اہم اور غیر معمولی واقعے کا مختصر خلاصہ درج کرتا ہے تاکہ اس کی شخصیت کے مختلف پہلوؤں کو سمجھا جا سکے۔"
  },
  {
    "id": 197,
    "text": "اگر ایک ٹیسٹ کو مختلف اوقات میں ایک ہی گروہ پر استعمال کرنے سے تقریباً ایک جیسے نتائج حاصل ہوں تو وہ ٹیسٹ کیا کہلائے گا؟",
    "options": [
      "درست ",
      "قابلِ اعتبار ",
      "معروضی ",
      "جامع "
    ],
    "correct": "قابلِ اعتبار (Reliable)",
    "explanation": "قابلیتِ اعتبار (Reliability) کا مطلب ہے کہ آزمائش کے نتائج میں استحکام ہو۔ یعنی اگر حالات یکساں رہیں تو بار بار جانچنے پر بھی نتائج میں کوئی بڑی تبدیلی نہ آئے۔"
  },
  {
    "id": 198,
    "text": "تحصیلی آزمائش (Achievement Test) کا بنیادی مقصد کیا ہے؟",
    "options": [
      "طالب علم کی ذہنی صلاحیت جاننا",
      "یہ معلوم کرنا کہ طالب علم نے کیا سیکھا ہے",
      "طالب علم کے مستقبل کی پیش گوئی کرنا",
      "طالب علم کی دلچسپیوں کا پتہ لگانا"
    ],
    "correct": "یہ معلوم کرنا کہ طالب علم نے کیا سیکھا ہے",
    "explanation": "تعلیمی تحصیلی آزمائش اس بات کی پیمائش کے لیے بنائی جاتی ہے کہ ایک طالب علم نے ایک مخصوص مدت میں پڑھائے گئے مواد میں سے کتنا علم اور مہارت حاصل کی ہے۔"
  },
  {
    "id": 199,
    "text": "خالی جگہ پر کریں، جوڑی ملائیں اور صحیح/غلط والے سوالات کس قسم کی آزمائش میں شامل ہیں؟",
    "options": [
      "مضمون نویسی کی آزمائش ",
      "معروضی آزمائش ",
      "مختصر جوابی آزمائش ",
      "زبانی آزمائش "
    ],
    "correct": "معروضی آزمائش (Objective Type)",
    "explanation": "یہ تمام سوالات معروضی آزمائش کی قسمیں ہیں کیونکہ ان کے جوابات متعین اور مختصر ہوتے ہیں اور ان کی جانچ میں ممتحن کی ذاتی رائے شامل نہیں ہوتی۔"
  },
  {
    "id": 200,
    "text": "جانچ کا مقصد طلباء کی کمزوریوں کی نشاندہی کرنا اور انہیں دور کرنے کے لیے اصلاحی تدریس کا اہتمام کرنا ہو تو اسے کیا کہیں گے؟",
    "options": [
      "مجموعی جانچ",
      "تشخیصی جانچ (Diagnostic Evaluation)",
      "درجہ بندی جانچ",
      "معیاری جانچ"
    ],
    "correct": "تشخیصی جانچ (Diagnostic Evaluation)",
    "explanation": "تشخیصی جانچ کا بنیادی مقصد، جیسا کہ طب میں ہوتا ہے، بیماری (سیکھنے میں کمزوری) کی وجہ معلوم کرنا ہے تاکہ اس کا صحیح علاج (اصلاحی تدریس) کیا جا سکے۔"
  },
  {
    "id": 201,
    "text": "ایک استاد طلباء کو تاریخی مقامات کے ماڈل بنانے کا کام دیتا ہے۔ یہ کس قسم کی تدریسی امداد ہے؟",
    "options": [
      "سمعی امداد",
      "سہ جہتی امداد (Three-Dimensional Aid)",
      "گرافک امداد",
      "نمائشی امداد"
    ],
    "correct": "سہ جہتی امداد (Three-Dimensional Aid)",
    "explanation": "ماڈل (Models) سہ جہتی یا ثلاثی الابعاد امداد ہیں کیونکہ ان میں لمبائی، چوڑائی اور اونچائی ہوتی ہے، جو حقیقی چیز کا ٹھوس تصور پیش کرتے ہیں۔"
  },
  {
    "id": 202,
    "text": "فلیش کارڈز کا استعمال عام طور پر کس مقصد کے لیے کیا جاتا ہے؟",
    "options": [
      "لمبے مضامین پڑھانے کے لیے",
      "نئے الفاظ یا تصورات متعارف کرانے کے لیے",
      "فلم دکھانے کے لیے",
      "کہانی سنانے کے لیے"
    ],
    "correct": "نئے الفاظ یا تصورات متعارف کرانے کے لیے",
    "explanation": "فلیش کارڈز بصری امداد ہیں جو نئے الفاظ، حروف، تصاویر یا مختصر تصورات کو ایک ایک کرکے طلباء کے سامنے پیش کرنے اور انہیں یاد کرانے کے لیے بہت موثر ہیں۔"
  },
  {
    "id": 203,
    "text": "درج ذیل میں سے کونسا 'پروجیکٹڈ' (Projected) تدریسی امداد نہیں ہے؟",
    "options": [
      "اوور ہیڈ پروجیکٹر (OHP)",
      "سلائیڈ پروجیکٹر",
      "ملٹی میڈیا پروجیکٹر",
      "چارٹ"
    ],
    "correct": "چارٹ",
    "explanation": "پروجیکٹڈ امداد وہ ہوتی ہے جسے کسی اسکرین پر دکھانے کے لیے پروجیکٹر کی ضرورت ہوتی ہے۔ چارٹ ایک 'نان-پروجیکٹڈ' (Non-Projected) بصری امداد ہے جسے براہ راست دکھایا جاتا ہے۔"
  },
  {
    "id": 204,
    "text": "تدریس میں معاون اشیاء کے استعمال کا سب سے بڑا نفسیاتی فائدہ کیا ہے؟",
    "options": [
      "یہ طلباء میں تجسس اور دلچسپی پیدا کرتی ہیں",
      "یہ استاد کو آرام کا موقع دیتی ہیں",
      "یہ مہنگی ہوتی ہیں",
      "یہ کلاس میں نظم و ضبط قائم کرتی ہیں"
    ],
    "correct": "یہ طلباء میں تجسس اور دلچسپی پیدا کرتی ہیں",
    "explanation": "معاون اشیاء سیکھنے کے عمل کو یکسانیت سے بچاتی ہیں اور طلباء کے ایک سے زیادہ حواس کو متحرک کرتی ہیں، جس سے ان کا تجسس اور سیکھنے کی تحریک بڑھتی ہے۔"
  },
  {
    "id": 205,
    "text": "تشکیلی اور مجموعی جانچ میں بنیادی فرق کیا ہے؟",
    "options": [
      "وقت کا فرق",
      "مقصد کا فرق",
      "سوالات کا فرق",
      "نمبروں کا فرق"
    ],
    "correct": "مقصد کا فرق",
    "explanation": "بنیادی فرق مقصد کا ہے۔ تشکیلی جانچ کا مقصد 'سیکھنے کے لیے جانچ' (Assessment for Learning) ہے تاکہ بہتری لائی جا سکے، جبکہ مجموعی جانچ کا مقصد 'سیکھنے کی جانچ' (Assessment of Learning) ہے تاکہ فیصلہ کیا جا سکے۔"
  },
  {
    "id": 206,
    "text": "ایک استاد کلاس میں کوئز، بحث و مباحثہ اور ہوم ورک کو جانچ کے لیے استعمال کرتا ہے۔ یہ کس قسم کی جانچ ہے؟",
    "options": [
      "صرف مجموعی جانچ",
      "تشکیلی جانچ",
      "صرف تشخیصی جانچ",
      "داخلی جانچ"
    ],
    "correct": "تشکیلی جانچ",
    "explanation": "یہ تمام سرگرمیاں تشکیلی جانچ کی تکنیک ہیں کیونکہ یہ تدریس کے دوران طلباء کی سمجھ اور پیشرفت کو جانچنے کے لیے استعمال کی جاتی ہیں تاکہ فوری فیڈ بیک دیا جا سکے۔"
  },
  {
    "id": 207,
    "text": "جانچ کا وہ آلہ جس میں کسی صفت یا رویے کی شدت کو عددی پیمانے (مثلاً 1 سے 5 تک) پر جانچا جاتا ہے، کیا کہلاتا ہے؟",
    "options": [
      "چیک لسٹ",
      "انٹرویو",
      "درجہ بندی پیمانہ (Rating Scale)",
      "مشاہدہ"
    ],
    "correct": "درجہ بندی پیمانہ (Rating Scale)",
    "explanation": "درجہ بندی پیمانہ کسی خاصیت یا مہارت کی سطح یا شدت کو ظاہر کرنے کے لیے استعمال ہوتا ہے، جیسے 'بہت اچھا'، 'اچھا'، 'اوسط'، 'کمزور' جنہیں اعداد 1, 2, 3, 4, 5 بھی دیے جا سکتے ہیں۔"
  },
  {
    "id": 208,
    "text": "تحصیلی آزمائش کی تیاری میں پہلا قدم کیا ہوتا ہے؟",
    "options": [
      "سوالات لکھنا",
      "آزمائش کے مقاصد اور خاکہ (Blue Print) تیار کرنا",
      "نمبر دینا",
      "آزمائش کا انعقاد کرنا"
    ],
    "correct": "آزمائش کے مقاصد اور خاکہ (Blue Print) تیار کرنا",
    "explanation": "کسی بھی آزمائش کو تیار کرنے کا پہلا اور سب سے اہم مرحلہ اس کے مقاصد کا تعین کرنا اور ایک خاکہ (Blue Print) بنانا ہے جس میں یہ طے کیا جاتا ہے کہ کن موضوعات سے کتنے اور کس قسم کے سوالات شامل کیے جائیں گے۔"
  },
  {
    "id": 209,
    "text": "پورٹ فولیو (Portfolio) جانچ کی کونسی تکنیک ہے؟",
    "options": [
      "ایک قسم کا امتحان",
      "طالب علم کے کاموں کا با مقصد مجموعہ",
      "استاد کا ذاتی ریکارڈ",
      "ایک قسم کی چیک لسٹ"
    ],
    "correct": "طالب علم کے کاموں کا با مقصد مجموعہ",
    "explanation": "پورٹ فولیو ایک فائل یا فولڈر ہوتا ہے جس میں ایک طالب علم کے بہترین کاموں (مثلاً ڈرائنگ، مضامین، پروجیکٹس) کو ایک مدت کے دوران منظم طریقے سے جمع کیا جاتا ہے تاکہ اس کی پیشرفت اور کامیابیوں کا جائزہ لیا جا سکے۔"
  },
  {
    "id": 210,
    "text": "درج ذیل میں سے کون سا غیر رسمی جانچ (Informal Assessment) کی مثال ہے؟",
    "options": [
      "سالانہ امتحان",
      "یونٹ ٹیسٹ",
      "کلاس میں استاد کا طلباء سے سوالات پوچھنا اور ان کا مشاہدہ کرنا",
      "داخلہ ٹیسٹ"
    ],
    "correct": "کلاس میں استاد کا طلباء سے سوالات پوچھنا اور ان کا مشاہدہ کرنا",
    "explanation": "غیر رسمی جانچ وہ ہوتی ہے جو منصوبہ بند طریقے سے نہیں کی جاتی اور اس میں گریڈنگ شامل نہیں ہوتی۔ کلاس روم میں روزمرہ کا مشاہدہ اور سوال و جواب اس کی بہترین مثال ہے۔"
  },
  {
    "id": 211,
    "text": "نقشے اور گلوب تدریسی معاون اشیاء کی کس ذیلی قسم سے تعلق رکھتے ہیں؟",
    "options": [
      "مشغلاتی امداد",
      "سمعی امداد",
      "گرافک امداد (Graphic Aids)",
      "پروجیکٹڈ امداد"
    ],
    "correct": "گرافک امداد (Graphic Aids)",
    "explanation": "گرافک امداد وہ بصری مواد ہے جو معلومات کو تصویری شکل میں پیش کرتا ہے۔ نقشے، چارٹ، گراف اور پوسٹر اسی زمرے میں آتے ہیں۔"
  },
  {
    "id": 212,
    "text": "زبان کی تدریس میں 'لنگوا فون' (Linguaphone) کا استعمال کس مہارت کو بہتر بنانے کے لیے ہوتا ہے؟",
    "options": [
      "لکھنے کی مہارت",
      "پڑھنے کی مہارت",
      "سننے اور بولنے (تلفظ) کی مہارت",
      "قواعد کی مہارت"
    ],
    "correct": "سننے اور بولنے (تلفظ) کی مہارت",
    "explanation": "لنگوا فون ایک سمعی آلہ ہے جو ریکارڈ شدہ سبق کے ذریعے طلباء کو صحیح تلفظ سننے اور اس کی نقل کرکے اپنی بولنے کی صلاحیت کو بہتر بنانے میں مدد کرتا ہے۔"
  },
  {
    "id": 213,
    "text": "ڈرامہ یا کردار نگاری (Role Playing) کو تدریسی تکنیک کے طور پر استعمال کرنا کس قسم کی امداد کہلاتا ہے؟",
    "options": [
      "بصری امداد",
      "سمعی امداد",
      "مشغلاتی امداد (Activity Aid)",
      "تین جہتی امداد"
    ],
    "correct": "مشغلاتی امداد (Activity Aid)",
    "explanation": "ڈرامہ ایک مشغلاتی امداد ہے کیونکہ اس میں طلباء خود سرگرمی میں حصہ لیتے ہیں، جس سے وہ موضوع کو تجرباتی طور پر سیکھتے ہیں اور ان کی سماجی مہارتیں بھی پروان چڑھتی ہیں۔"
  },
  {
    "id": 214,
    "text": "تعین قدر (Evaluation) پیمائش (Measurement) سے زیادہ جامع کیوں ہے؟",
    "options": [
      "کیونکہ اس میں صرف اعداد و شمار ہوتے ہیں",
      "کیونکہ یہ صرف امتحانات پر مبنی ہے",
      "کیونکہ اس میں مقداری اور معیاری دونوں طرح کے فیصلے شامل ہیں",
      "کیونکہ یہ آسان ہے"
    ],
    "correct": "کیونکہ اس میں مقداری اور معیاری دونوں طرح کے فیصلے شامل ہیں",
    "explanation": "پیمائش صرف مقداری (quantitative) ہوتی ہے (مثلاً 100 میں سے 70 نمبر)۔ جبکہ تعین قدر میں مقداری پیمائش کے ساتھ ساتھ معیاری (qualitative) فیصلہ بھی شامل ہوتا ہے (مثلاً 70 نمبر کی کارکردگی 'اچھی' ہے)۔"
  },
  {
    "id": 215,
    "text": "مجموعی جانچ (Summative Assessment) کا بنیادی کام کیا ہے؟",
    "options": [
      "فوری فیڈ بیک دینا",
      "تدریس کو بہتر بنانا",
      "طلباء کو سرٹیفکیٹ دینا یا اگلی جماعت میں ترقی دینا",
      "سیکھنے کی مشکلات کی نشاندہی کرنا"
    ],
    "correct": "طلباء کو سرٹیفکیٹ دینا یا اگلی جماعت میں ترقی دینا",
    "explanation": "مجموعی جانچ کا مقصد ایک تعلیمی پروگرام کے اختتام پر طلباء کی مجموعی کارکردگی کا فیصلہ کرنا ہوتا ہے، جس کی بنیاد پر انہیں گریڈ، سرٹیفکیٹ یا ترقی دی جاتی ہے۔"
  },
  {
    "id": 216,
    "text": "ایک استاد یہ جاننا چاہتا ہے کہ اس کے طلباء ضرب کے سوالات کیوں غلط کر رہے ہیں۔ اسے کونسی جانچ کرنی چاہیے؟",
    "options": [
      "مجموعی جانچ",
      "تشخیصی جانچ",
      "اہلیتی جانچ",
      "تشکیلی جانچ"
    ],
    "correct": "تشخیصی جانچ",
    "explanation": "جب مقصد کسی خاص کمزوری یا غلطی کی وجہ معلوم کرنا ہو تو تشخیصی جانچ (Diagnostic Assessment) کی جاتی ہے تاکہ اس کے مطابق اصلاحی تدریس کی جا سکے۔"
  },
  {
    "id": 217,
    "text": "ایک معیاری تحصیلی آزمائش (Standardized Achievement Test) کی کیا پہچان ہے؟",
    "options": [
      "یہ صرف ایک اسکول کے لیے ہوتی ہے",
      "اسے کوئی بھی استاد بنا سکتا ہے",
      "اس کے انعقاد، اسکورنگ اور تشریح کے لیے یکساں اصول ہوتے ہیں",
      "یہ بہت آسان ہوتی ہے"
    ],
    "correct": "اس کے انعقاد، اسکورنگ اور تشریح کے لیے یکساں اصول ہوتے ہیں",
    "explanation": "معیاری آزمائش وہ ہوتی ہے جسے ماہرین تیار کرتے ہیں اور اس کے لیے یکساں طریقہ کار (uniform procedure) اور معیار (norms) مقرر ہوتے ہیں تاکہ مختلف طلباء کی کارکردگی کا موازنہ کیا جا سکے۔"
  },
  {
    "id": 218,
    "text": "زبانی آزمائش (Oral Test) کے ذریعے کس صلاحیت کی جانچ بہترین طریقے سے کی جا سکتی ہے؟",
    "options": [
      "خوشخطی",
      "رفتار سے لکھنا",
      "خیالات کا اظہار، تلفظ اور خود اعتمادی",
      "یاد کرنے کی صلاحیت"
    ],
    "correct": "خیالات کا اظہار، تلفظ اور خود اعتمادی",
    "explanation": "زبانی آزمائش طلباء کی بولنے کی صلاحیت، خیالات کو منظم کرکے پیش کرنے کی مہارت، صحیح تلفظ اور ان کی خود اعتمادی کو جانچنے کا بہترین ذریعہ ہے۔"
  },
  {
    "id": 219,
    "text": "اگر کسی آزمائش کے سوالات پورے نصاب کا احاطہ کرتے ہوں تو اس آزمائش میں کونسی خوبی پائی جاتی ہے؟",
    "options": [
      "معروضیت (Objectivity)",
      "قابلیت اعتبار (Reliability)",
      "جامعیت (Comprehensiveness)",
      "عملیت (Usability)"
    ],
    "correct": "جامعیت (Comprehensiveness)",
    "explanation": "جامعیت کا مطلب ہے کہ آزمائش میں شامل سوالات نصاب کے تمام اہم حصوں کی نمائندگی کرتے ہوں اور کوئی بھی اہم حصہ چھوٹ نہ گیا ہو۔"
  },
  {
    "id": 220,
    "text": "'بلیو پرنٹ' (Blue Print) کیا ہے؟",
    "options": [
      "امتحان کا ٹائم ٹیبل",
      "ایک قسم کا گراف",
      "سوالیہ پرچہ تیار کرنے کا سہ جہتی خاکہ",
      "جوابی کاپی کا پہلا صفحہ"
    ],
    "correct": "سوالیہ پرچہ تیار کرنے کا سہ جہتی خاکہ",
    "explanation": "بلیو پرنٹ ایک تفصیلی چارٹ یا خاکہ ہوتا ہے جس میں مقاصد، مواد اور سوالات کی اقسام کے مطابق نمبروں کی تقسیم ظاہر کی جاتی ہے، تاکہ ایک متوازن سوالیہ پرچہ تیار کیا جا سکے۔"
  },
  {
    "id": 221,
    "text": "حقیقی اشیاء (Real Objects) کو بطور تدریسی امداد استعمال کرنے کا سب سے بڑا فائدہ کیا ہے؟",
    "options": [
      "یہ ہمیشہ دستیاب ہوتی ہیں",
      "یہ سیکھنے کا سب سے ٹھوس اور براہ راست تجربہ فراہم کرتی ہیں",
      "یہ بہت سستی ہوتی ہیں",
      "انہیں سنبھالنا آسان ہوتا ہے"
    ],
    "correct": "یہ سیکھنے کا سب سے ٹھوس اور براہ راست تجربہ فراہم کرتی ہیں",
    "explanation": "حقیقی اشیاء (Real objects or Realia) کے ذریعے طلباء اپنی تمام حسیات کا استعمال کرتے ہوئے سیکھتے ہیں، جو تصورات کو سمجھنے اور یاد رکھنے کا سب سے موثر اور ٹھوس طریقہ ہے۔"
  },
  {
    "id": 222,
    "text": "اوور ہیڈ پروجیکٹر (OHP) میں استعمال ہونے والی شفاف شیٹ کو کیا کہتے ہیں؟",
    "options": [
      "سلائیڈ",
      "فلم سٹرپ",
      "ٹرانسپیرنسی (Transparency)",
      "نیگیٹیو"
    ],
    "correct": "ٹرانسپیرنسی (Transparency)",
    "explanation": "اوور ہیڈ پروجیکٹر ایک بصری امداد ہے جو ٹرانسپیرنسی (شفاف پلاسٹک شیٹ) پر لکھے یا بنے ہوئے مواد کو بڑا کرکے پردے یا دیوار پر دکھاتا ہے۔"
  },
  {
    "id": 223,
    "text": "تمام تدریسی معاون اشیاء کے استعمال کا حتمی مقصد کیا ہونا چاہئے؟",
    "options": [
      "تفریح فراہم کرنا",
      "وقت گزارنا",
      "تدریسی مقاصد کو حاصل کرنے میں مدد کرنا",
      "کلاس روم کو جدید دکھانا"
    ],
    "correct": "تدریسی مقاصد کو حاصل کرنے میں مدد کرنا",
    "explanation": "تدریسی امداد اپنے آپ میں مقصد نہیں بلکہ مقصد کو حاصل کرنے کا ذریعہ ہے۔ ان کا انتخاب اور استعمال ہمیشہ سبق کے مقررہ تعلیمی مقاصد کو مدنظر رکھ کر کیا جانا چاہیے۔"
  },
  {
    "id": 224,
    "text": "مسلسل اور جامع جانچ (CCE) کا سب سے اہم فائدہ کیا ہے؟",
    "options": [
      "یہ طلباء پر امتحانات کے دباؤ اور خوف کو کم کرتی ہے",
      "یہ استاد کے کام کو بڑھا دیتی ہے",
      "یہ صرف ذہین طلباء کے لیے ہے",
      "اس میں بہت زیادہ کاغذ استعمال ہوتا ہے"
    ],
    "correct": "یہ طلباء پر امتحانات کے دباؤ اور خوف کو کم کرتی ہے",
    "explanation": "چونکہ جانچ کا عمل سال بھر جاری رہتا ہے اور صرف سالانہ امتحان پر انحصار نہیں کیا جاتا، اس لیے طلباء میں امتحان کا دباؤ، تناؤ اور خوف کم ہو جاتا ہے۔"
  },
  {
    "id": 225,
    "text": "مضمون نویسی کی آزمائش (Essay Type Test) کس صلاحیت کو جانچنے کے لیے سب سے موزوں ہے؟",
    "options": [
      "صحیح جواب کی شناخت",
      "طلباء کی تنظیم، تنقیدی سوچ اور خیالات کے اظہار کی صلاحیت",
      "حقائق کو یاد رکھنے کی صلاحیت",
      "تیزی سے پڑھنے کی صلاحیت"
    ],
    "correct": "طلباء کی تنظیم، تنقیدی سوچ اور خیالات کے اظہار کی صلاحیت",
    "explanation": "مضمون نویسی کی آزمائشیں طلباء کو اپنے خیالات کو منظم کرنے، معلومات کا تجزیہ اور ترکیب کرنے اور انہیں اپنے الفاظ میں تفصیل سے بیان کرنے کا موقع فراہم کرتی ہیں۔"
  },
  {
    "id": 226,
    "text": "اگر ایک آزمائش کو استعمال کرنا، اسکور کرنا اور اس کی تشریح کرنا آسان ہو تو اس میں کونسی خوبی موجود ہے؟",
    "options": [
      "درستگی (Validity)",
      "قابلیت اعتبار (Reliability)",
      "عملیت (Usability/Practicability)",
      "معروضیت (Objectivity)"
    ],
    "correct": "عملیت (Usability/Practicability)",
    "explanation": "عملیت یا قابلِ استعمال ہونے کا تعلق آزمائش کے عملی پہلوؤں سے ہے، جیسے اس پر آنے والا خرچ، وقت اور اس کے انتظام اور اسکورنگ میں آسانی۔"
  },
  {
    "id": 227,
    "text": "درج ذیل میں سے کونسا ایک جانچ کا آلہ (Tool) ہے، تکنیک (Technique) نہیں؟",
    "options": [
      "مشاہدہ (Observation)",
      "انٹرویو (Interview)",
      "سوالنامہ (Questionnaire)",
      "پروجیکٹ ورک (Project Work)"
    ],
    "correct": "سوالنامہ (Questionnaire)",
    "explanation": "مشاہدہ، انٹرویو اور پروجیکٹ ورک معلومات اکٹھا کرنے کی تکنیک ہیں۔ سوالنامہ ایک ٹھوس آلہ ہے جس میں سوالات کی ایک فہرست ہوتی ہے، جسے ان تکنیکوں کے دوران استعمال کیا جا سکتا ہے۔"
  },
  {
    "id": 228,
    "text": "طلباء کی سماجی مہارتوں اور گروہ میں ان کے تعلقات کو جانچنے کے لیے کونسی تکنیک سب سے زیادہ کارآمد ہے؟",
    "options": [
      "تحریری امتحان",
      "سوشیومیٹری (Sociometry)",
      "چیک لسٹ",
      "معیاری آزمائش"
    ],
    "correct": "سوشیومیٹری (Sociometry)",
    "explanation": "سوشیومیٹری ایک تکنیک ہے جس کے ذریعے ایک گروہ کے اراکین کے باہمی سماجی تعلقات، پسندیدگی اور ناپسندیدگی کا مطالعہ کیا جاتا ہے۔"
  },
  {
    "id": 229,
    "text": "تعلیمی تحصیلی آزمائشیں بنیادی طور پر کتنی اقسام کی ہوتی ہیں؟",
    "options": [
      "صرف ایک",
      "دو: استاد کی بنائی ہوئی آزمائش اور معیاری آزمائش",
      "تین: زبانی، تحریری، عملی",
      "چار: معروضی، موضوعی، مختصر، طویل"
    ],
    "correct": "دو: استاد کی بنائی ہوئی آزمائش اور معیاری آزمائش",
    "explanation": "بنیادی طور پر تحصیلی آزمائشوں کو دو بڑی اقسام میں تقسیم کیا جاتا ہے: ایک وہ جو کلاس روم ٹیچر اپنی ضروریات کے مطابق بناتا ہے (Teacher-made Test) اور دوسری وہ جو ماہرین وسیع پیمانے پر استعمال کے لیے بناتے ہیں (Standardized Test)۔"
  },
  {
    "id": 230,
    "text": "تشکیلی جانچ کا موازنہ ایک باورچی سے کیا جاتا ہے جو...",
    "options": [
      "کھانا پکانے کے بعد اسے چکھتا ہے۔",
      "کھانا پکانے کے دوران اسے چکھتا ہے تاکہ نمک مرچ ٹھیک کر سکے۔",
      "مہمانوں کے تاثرات کا انتظار کرتا ہے۔",
      "صرف ترکیب کی کتاب پڑھتا ہے۔"
    ],
    "correct": "کھانا پکانے کے دوران اسے چکھتا ہے تاکہ نمک مرچ ٹھیک کر سکے۔",
    "explanation": "یہ مثال واضح کرتی ہے کہ تشکیلی جانچ عمل کے دوران کی جاتی ہے تاکہ اگر کوئی کمی ہو تو اسے فوری طور پر درست کیا جا سکے، بالکل اسی طرح جیسے باورچی پکانے کے دوران سوپ چکھتا ہے۔"
  },
  {
    "id": 231,
    "text": "فلانل بورڈ (Flannel Board) کس قسم کی تدریسی امداد ہے؟",
    "options": [
      "سمعی امداد",
      "پروجیکٹڈ امداد",
      "نمائشی تختہ (Display Board)",
      "مشغلاتی امداد"
    ],
    "correct": "نمائشی تختہ (Display Board)",
    "explanation": "فلانل بورڈ یا کھدر کا تختہ ایک بصری امداد اور نمائشی تختہ ہے جس پر کھردرا کپڑا لگا ہوتا ہے، جس کی وجہ سے ریگ مال لگے کٹ آؤٹس یا تصاویر آسانی سے چپک جاتی ہیں۔"
  },
  {
    "id": 232,
    "text": "تدریسی معاون اشیاء کے استعمال کے حوالے سے ایڈگر ڈیل کا 'کون آف ایکسپیریئنس' (Cone of Experience) کیا ظاہر کرتا ہے؟",
    "options": [
      "کہ سب سے موثر سیکھنا ٹھوس اور براہ راست تجربات سے ہوتا ہے۔",
      "کہ سب سے موثر سیکھنا کتابیں پڑھنے سے ہوتا ہے۔",
      "کہ تدریسی امداد غیر ضروری ہے۔",
      "کہ صرف سننا سیکھنے کا بہترین طریقہ ہے۔"
    ],
    "correct": "کہ سب سے موثر سیکھنا ٹھوس اور براہ راست تجربات سے ہوتا ہے۔",
    "explanation": "ایڈگر ڈیل کا تجرباتی مخروط یہ نظریہ پیش کرتا ہے کہ لوگ جو کچھ کرتے ہیں (براہ راست تجربہ) اس سے سب سے زیادہ سیکھتے ہیں، جبکہ صرف پڑھنے یا سننے سے سیکھا ہوا علم سب سے کم یاد رہتا ہے۔"
  },
  {
    "id": 233,
    "text": "جانچ اور تعین قدر میں کیا تعلق ہے؟",
    "options": [
      "دونوں ایک ہی چیز ہیں",
      "جانچ، تعین قدر کا ایک حصہ ہے",
      "تعین قدر، جانچ کا ایک حصہ ہے",
      "دونوں کا آپس میں کوئی تعلق نہیں"
    ],
    "correct": "جانچ، تعین قدر کا ایک حصہ ہے",
    "explanation": "تعین قدر (Evaluation) ایک وسیع اور جامع اصطلاح ہے۔ جانچ (Assessment) اس وسیع عمل کا ایک حصہ ہے جس میں طلباء کی کارکردگی سے متعلق ڈیٹا اکٹھا کیا جاتا ہے۔"
  },
  {
    "id": 234,
    "text": "گریڈنگ (Grading) کا عمل کس قسم کی جانچ کے بعد کیا جاتا ہے؟",
    "options": [
      "تشخیصی جانچ",
      "تشکیلی جانچ",
      "مجموعی جانچ",
      "غیر رسمی جانچ"
    ],
    "correct": "مجموعی جانچ",
    "explanation": "گریڈنگ یا درجہ بندی کا مقصد طلباء کی کارکردگی کا حتمی فیصلہ صادر کرنا ہوتا ہے، جو کہ مجموعی جانچ (Summative Assessment) کا بنیادی مقصد ہے۔"
  },
  {
    "id": 235,
    "text": "مفت جوابی سوالات (Open-ended Questions) کس آزمائش کی خصوصیت ہیں؟",
    "options": [
      "معروضی آزمائش",
      "مضمون نویسی یا موضوعی آزمائش",
      "صحیح/غلط آزمائش",
      "جوڑی ملانے والی آزمائش"
    ],
    "correct": "مضمون نویسی یا موضوعی آزمائش",
    "explanation": "مفت جوابی سوالات وہ ہوتے ہیں جن کا کوئی ایک متعین جواب نہیں ہوتا بلکہ طالب علم کو اپنے خیالات اور تخلیقی صلاحیتوں کا اظہار کرنے کی آزادی ہوتی ہے، جیسا کہ مضمون نویسی کے سوالات میں ہوتا ہے۔"
  },
  {
    "id": 236,
    "text": "ایک استاد اپنی جماعت کے لیے جو یونٹ ٹیسٹ بناتا ہے، وہ کیا کہلاتا ہے؟",
    "options": [
      "معیاری آزمائش (Standardized Test)",
      "غیر معیاری یا استاد کی بنائی ہوئی آزمائش (Non-standardized or Teacher-made Test)",
      "اہلیتی آزمائش (Aptitude Test)",
      "تشخیصی آزمائش (Diagnostic Test)"
    ],
    "correct": "غیر معیاری یا استاد کی بنائی ہوئی آزمائش (Non-standardized or Teacher-made Test)",
    "explanation": "یہ آزمائشیں غیر معیاری ہوتی ہیں کیونکہ یہ ایک مخصوص کلاس اور محدود مواد کے لیے خود استاد کے ذریعے تیار کی جاتی ہیں اور ان کا اطلاق وسیع پیمانے پر نہیں ہوتا۔"
  },
  {
    "id": 237,
    "text": "اچھی جانچ کی خصوصیات میں 'امتیازی صلاحیت' (Discriminating Power) سے کیا مراد ہے؟",
    "options": [
      "یہ آزمائش بہت آسان ہو",
      "یہ آزمائش بہت مشکل ہو",
      "یہ آزمائش ذہین اور کمزور طلباء میں فرق کر سکے",
      "یہ آزمائش سب کو فیل کر دے"
    ],
    "correct": "یہ آزمائش ذہین اور کمزور طلباء میں فرق کر سکے",
    "explanation": "ایک اچھے ٹیسٹ آئٹم میں یہ صلاحیت ہونی چاہیے کہ وہ ان طلباء میں تمیز کر سکے جو مواد کو اچھی طرح سمجھتے ہیں اور ان میں جو نہیں سمجھتے۔"
  },
  {
    "id": 238,
    "text": "معلومات کو منظم اور مختصر طور پر پیش کرنے کے لیے کونسی بصری امداد سب سے موزوں ہے؟",
    "options": [
      "ماڈل",
      "چارٹ",
      "حقیقی شئے",
      "ریڈیو"
    ],
    "correct": "چارٹ",
    "explanation": "چارٹ ایک گرافک امداد ہے جو پیچیدہ معلومات، درجہ بندی، عمل یا موازنہ کو منظم، سادہ اور بصری طور پر پرکشش انداز میں پیش کرنے کا بہترین ذریعہ ہے۔"
  },
  {
    "id": 239,
    "text": "عملی امتحانات (Practical Exams) جانچ کی کس تکنیک کا حصہ ہیں؟",
    "options": [
      "زبانی جانچ",
      "تحریری جانچ",
      "کارکردگی کی جانچ (Performance Assessment)",
      "خود کی جانچ"
    ],
    "correct": "کارکردگی کی جانچ (Performance Assessment)",
    "explanation": "عملی امتحانات کارکردگی کی جانچ کی ایک قسم ہیں جس میں طالب علم کے علم کو جانچنے کے بجائے اس کی عملی مہارت اور کسی کام کو انجام دینے کی صلاحیت کو پرکھا جاتا ہے۔"
  },
  {
    "id": 240,
    "text": "تعین قدر کا عمل کب شروع ہوتا ہے؟",
    "options": [
      "تدریسی عمل کے اختتام پر",
      "تدریسی عمل کے درمیان",
      "تعلیمی مقاصد کے تعین کے ساتھ ہی",
      "امتحان کے بعد"
    ],
    "correct": "تعلیمی مقاصد کے تعین کے ساتھ ہی",
    "explanation": "ایک موثر تدریسی نظام میں تعین قدر کا عمل الگ تھلگ نہیں ہوتا، بلکہ یہ تدریسی مقاصد کے تعین کے ساتھ ہی شروع ہو جاتا ہے تاکہ یہ یقینی بنایا جا سکے کہ تدریس اور جانچ دونوں ان مقاصد کے حصول کی سمت میں ہوں۔"
  },
  {
    "id": 241,
    "text": "طلباء کو قواعد سکھانے کے لیے مثالوں سے اصولوں کی طرف جانے کا طریقہ کیا کہلاتا ہے؟",
    "options": [
      "استخراجی طریقہ",
      "استقرائی طریقہ",
      "منصوبائی طریقہ",
      "لکچر کا طریقہ"
    ],
    "correct": "استقرائی طریقہ",
    "explanation": "استقرائی طریقہ (Inductive Method) میں پہلے طلباء کے سامنے متعدد مثالیں پیش کی جاتی ہیں اور پھر ان کی مدد سے ایک عام اصول یا قاعدہ اخذ کیا جاتا ہے۔ یہ طریقہ نفسیاتی اصولوں کے مطابق ہے اور سیکھنے کے عمل کو دلچسپ بناتا ہے۔"
  },
  {
    "id": 242,
    "text": "وہ کونسا تدریسی منصوبہ ہے جو پورے تعلیمی سال کے نصاب اور سرگرمیوں کا احاطہ کرتا ہے؟",
    "options": [
      "سبق کی منصوبہ بندی",
      "اکائی منصوبہ بندی",
      "سالانہ منصوبہ بندی",
      "مائیکرو منصوبہ بندی"
    ],
    "correct": "سالانہ منصوبہ بندی",
    "explanation": "سالانہ منصوبہ بندی (Yearly Planning) ایک جامع منصوبہ ہوتا ہے جس میں ایک استاد پورے سال کے لیے اپنے مضمون کے نصاب، تدریسی اہداف، امتحانات اور دیگر سرگرمیوں کا خاکہ تیار کرتا ہے۔"
  },
  {
    "id": 243,
    "text": "نظم کی تدریس کے لیے سب سے موزوں اور مؤثر طریقہ کون سا ہے؟",
    "options": [
      "بحث و مباحثہ",
      "غنائیہ طریقہ",
      "اداکاری کا طریقہ",
      "توضیحی طریقہ"
    ],
    "correct": "غنائیہ طریقہ",
    "explanation": "غنائیہ طریقہ (Singing/Recitation Method) میں نظم کو ترنم اور آہنگ کے ساتھ پڑھایا جاتا ہے۔ یہ طریقہ نظم کی موسیقی، جذبات اور جمالیاتی پہلوؤں کو اجاگر کرتا ہے، جس سے طلباء لطف اندوز ہوتے ہیں اور اسے آسانی سے سمجھتے ہیں۔"
  },
  {
    "id": 244,
    "text": "زیرِ تربیت اساتذہ میں تدریسی مہارتوں کو فروغ دینے کے لیے کونسی تکنیک استعمال کی جاتی ہے جس میں کم وقت میں چھوٹے گروپ کو پڑھایا جاتا ہے؟",
    "options": [
      "ٹیم ٹیچنگ",
      "نگرانی کا طریقہ",
      "مائیکرو ٹیچنگ",
      "ڈالٹن پلان"
    ],
    "correct": "مائیکرو ٹیچنگ",
    "explanation": "مائیکرو ٹیچنگ (Micro-teaching) اساتذہ کی تربیت کا ایک طریقہ ہے جس میں تدریسی عمل کو چھوٹے حصوں میں تقسیم کیا جاتا ہے۔ استاد ایک چھوٹی جماعت کو مختصر وقت (5-10 منٹ) کے لیے پڑھاتا ہے تاکہ کسی ایک مخصوص تدریسی مہارت پر توجہ مرکوز کی جا سکے۔"
  },
  {
    "id": 245,
    "text": "ڈرامے کی تدریس کو دلچسپ اور عملی بنانے کے لیے سب سے بہترین طریقہ کون سا ہے؟",
    "options": [
      "لکچر کا طریقہ",
      "سوال و جواب کا طریقہ",
      "اداکاری کا طریقہ",
      "ترجمے کا طریقہ"
    ],
    "correct": "اداکاری کا طریقہ",
    "explanation": "اداکاری کا طریقہ (Acting/Role-play Method) ڈرامے کی تدریس کے لیے انتہائی مؤثر ہے۔ اس میں طلباء خود کرداروں کو ادا کرتے ہیں، جس سے وہ مکالموں، جذبات اور کہانی کو براہ راست تجربے کے ذریعے سیکھتے ہیں۔"
  },
  {
    "id": 246,
    "text": "ایک استاد پہلے زبان کے اصول اور قواعد بتاتا ہے اور پھر مثالیں پیش کرتا ہے۔ یہ کون سا طریقہ ہے؟",
    "options": [
      "استقرائی طریقہ",
      "راست طریقہ",
      "اکتشافی طریقہ",
      "استخراجی طریقہ"
    ],
    "correct": "استخراجی طریقہ",
    "explanation": "استخراجی طریقہ (Deductive Method) میں تدریس کا عمل اصول سے مثال کی طرف ہوتا ہے۔ استاد پہلے کوئی قاعدہ یا تعریف بتاتا ہے اور پھر اس کی وضاحت کے لیے مثالیں پیش کرتا ہے۔ یہ روایتی طریقہ ہے۔"
  },
  {
    "id": 247,
    "text": "تدریسی منصوبہ بندی میں 'اکائی منصوبہ بندی' کا کیا مطلب ہے؟",
    "options": [
      "ایک دن کے سبق کا منصوبہ",
      "پورے سال کا منصوبہ",
      "کئی ملتے جلتے اسباق پر مشتمل ایک مجموعے کا منصوبہ",
      "ایک امتحان کا منصوبہ"
    ],
    "correct": "کئی ملتے جلتے اسباق پر مشتمل ایک مجموعے کا منصوبہ",
    "explanation": "اکائی منصوبہ بندی (Unit Planning) میں نصاب کے ایک بڑے حصے کو، جو موضوعاتی طور پر ایک دوسرے سے منسلک ہوں، ایک 'یونٹ' یا 'اکائی' کے طور پر منظم کیا جاتا ہے اور پھر اس کی تدریس کا منصوبہ بنایا جاتا ہے۔"
  },
  {
    "id": 248,
    "text": "وہ کون سا طریقہ ہے جس میں مادری زبان کے استعمال کے بغیر براہ راست ہدف والی زبان (Target Language) میں ہی تعلیم دی جاتی ہے؟",
    "options": [
      "ترجمے کا طریقہ",
      "راست طریقہ",
      "دو لسانی طریقہ",
      "استقرائی طریقہ"
    ],
    "correct": "راست طریقہ",
    "explanation": "راست طریقہ (Direct Method) میں گفتگو اور تدریس کا تمام عمل صرف اسی زبان میں ہوتا ہے جسے سکھانا مقصود ہو۔ اس میں ترجمے اور مادری زبان کے استعمال سے گریز کیا جاتا ہے۔"
  },
  {
    "id": 249,
    "text": "طلباء کو کسی موضوع پر خود تحقیق کرکے اور تجربات کے ذریعے سیکھنے کا موقع فراہم کرنے والا طریقہ کیا کہلاتا ہے؟",
    "options": [
      "لکچر کا طریقہ",
      "اکتشافی طریقہ",
      "استخراجی طریقہ",
      "یاد کرنے کا طریقہ"
    ],
    "correct": "اکتشافی طریقہ",
    "explanation": "اکتشافی طریقہ (Heuristic/Discovery Method) میں استاد طلباء کے سامنے ایک مسئلہ رکھتا ہے اور انہیں خود حقائق اور معلومات دریافت کرنے کی رہنمائی کرتا ہے۔ اس کا مقصد طلباء میں مسئلہ حل کرنے کی صلاحیت پیدا کرنا ہے۔"
  },
  {
    "id": 250,
    "text": "جب دو یا دو سے زیادہ اساتذہ مل کر ایک ہی جماعت کو پڑھانے کا منصوبہ بناتے اور اس پر عمل کرتے ہیں، تو اسے کہتے ہیں:",
    "options": [
      "مائیکرو ٹیچنگ",
      "ٹیم ٹیچنگ",
      "انفرادی تدریس",
      "نگرانی کا طریقہ"
    ],
    "correct": "ٹیم ٹیچنگ",
    "explanation": "ٹیم ٹیچنگ (Team Teaching) ایک تدریسی حکمت عملی ہے جس میں اساتذہ کی ایک ٹیم مشترکہ طور پر تدریس کی ذمہ داریاں نبھاتی ہے۔ اس سے اساتذہ کی مہارتوں کا بہترین استعمال ممکن ہوتا ہے۔"
  },
  {
    "id": 251,
    "text": "طلباء کے علم، فہم اور دلچسپی کو جانچنے کے لیے دورانِ سبق استاد کی طرف سے پوچھے جانے والے سوالات کس طریقہ کار کا حصہ ہیں؟",
    "options": [
      "سوال و جواب کا طریقہ",
      "منصوبائی طریقہ",
      "ڈرامائی طریقہ",
      "بیانیہ طریقہ"
    ],
    "correct": "سوال و جواب کا طریقہ",
    "explanation": "سوال و جواب کا طریقہ (Question-Answer Method) تدریس کا ایک قدیم اور مؤثر طریقہ ہے جس میں استاد سوالات کے ذریعے طلباء کی سوچ کو ابھارتا ہے، ان کی توجہ برقرار رکھتا ہے اور سبق کو آگے بڑھاتا ہے۔"
  },
  {
    "id": 252,
    "text": "ہیلن پارک ہرسٹ کا متعارف کردہ تدریسی طریقہ جس میں طلباء اپنی رفتار سے انفرادی طور پر کام کرتے ہیں، کیا کہلاتا ہے؟",
    "options": [
      "پروجیکٹ میتھڈ",
      "ڈالٹن پلان",
      "مائیکرو ٹیچنگ",
      "ٹیم ٹیچنگ"
    ],
    "correct": "ڈالٹن پلان",
    "explanation": "ڈالٹن پلان (Dalton Plan) ایک تعلیمی منصوبہ ہے جو انفرادی تعلیم پر زور دیتا ہے۔ اس میں طلباء کو ماہانہ اسائنمنٹس دی جاتی ہیں اور وہ اپنی رفتار اور ذمہ داری کے ساتھ اسے مکمل کرتے ہیں۔"
  },
  {
    "id": 253,
    "text": "تفصیلی مطالعہ کے برعکس، کسی متن کا مرکزی خیال یا خاص معلومات حاصل کرنے کے لیے تیزی سے پڑھنا کیا کہلاتا ہے؟",
    "options": [
      "تنقیدی مطالعہ",
      "سری مطالعہ",
      "گہرا مطالعہ",
      "خاموش مطالعہ"
    ],
    "correct": "سری مطالعہ",
    "explanation": "سری مطالعہ (Skimming and Scanning) کا مقصد متن کی ہر تفصیل کو پڑھنا نہیں ہوتا، بلکہ تیزی سے نظر دوڑا کر اس کا خلاصہ، مرکزی خیال (Skimming) یا کوئی مخصوص معلومات (Scanning) تلاش کرنا ہوتا ہے۔"
  },
  {
    "id": 254,
    "text": "وہ کونسا طریقہ ہے جس میں طلباء کو حقیقی زندگی سے منسلک کوئی کام یا مسئلہ دیا جاتا ہے جسے وہ ایک منصوبے کے تحت مکمل کرتے ہیں؟",
    "options": [
      "اداکاری کا طریقہ",
      "منصوبائی طریقہ",
      "استخراجی طریقہ",
      "ترجمے کا طریقہ"
    ],
    "correct": "منصوبائی طریقہ",
    "explanation": "منصوبائی طریقہ یا پروجیکٹ میتھڈ (Project Method) ایک ایسا طریقہ ہے جس میں سیکھنے کا عمل ایک ٹھوس منصوبے کے گرد گھومتا ہے۔ طلباء گروہی یا انفرادی طور پر کام کرکے عملی تجربے سے سیکھتے ہیں۔"
  },
  {
    "id": 255,
    "text": "ایک زبان کے متن کو دوسری زبان میں منتقل کرنے کا طریقہ کیا کہلاتا ہے؟",
    "options": [
      "راست طریقہ",
      "ترجمے کا طریقہ",
      "توضیحی طریقہ",
      "بیانیہ طریقہ"
    ],
    "correct": "ترجمے کا طریقہ",
    "explanation": "ترجمے کا طریقہ (Translation Method) زبان سکھانے کا وہ روایتی طریقہ ہے جس میں ہدف زبان کے ہر لفظ اور جملے کا مادری زبان میں ترجمہ کرکے مطلب سمجھایا جاتا ہے۔ اسے گرامر-ترجمہ کا طریقہ بھی کہتے ہیں۔"
  },
  {
    "id": 256,
    "text": "سبق کی منصوبہ بندی (Lesson Plan) کا سب سے پہلا اور اہم مرحلہ کیا ہوتا ہے؟",
    "options": [
      "سرگرمیوں کا انتخاب",
      "تدریسی مقاصد کا تعین",
      "امتحان کی تیاری",
      "گھر کا کام دینا"
    ],
    "correct": "تدریسی مقاصد کا تعین",
    "explanation": "کسی بھی سبق کی منصوبہ بندی کرتے وقت سب سے پہلے یہ طے کیا جاتا ہے کہ سبق کے اختتام پر طلباء کیا جاننے، سمجھنے یا کرنے کے قابل ہوں گے۔ انہیں تدریسی مقاصد (Instructional Objectives) کہتے ہیں۔"
  },
  {
    "id": 257,
    "text": "زبانی اظہار اور تخلیقی صلاحیتوں کو فروغ دینے کے لیے طلباء کو کسی موضوع پر اپنے خیالات کو آزادانہ طور پر لکھنے کی مشق کرانا کس صنف کی تدریس میں شامل ہے؟",
    "options": [
      "قواعد",
      "غزل",
      "انشائیہ",
      "نظم"
    ],
    "correct": "انشائیہ",
    "explanation": "انشائیہ (Essay) کی تدریس کا مقصد طلباء کی تحریری صلاحیتوں کو نکھارنا ہے۔ اس میں انہیں کسی موضوع پر منظم انداز میں اپنے خیالات، دلائل اور معلومات کو پیش کرنے کی تربیت دی جاتی ہے۔"
  },
  {
    "id": 258,
    "text": "وہ طریقہ جس میں استاد کلاس میں کام دیتا ہے اور پھر طلباء کے کام کرتے وقت ان کی رہنمائی اور نگرانی کرتا ہے، کہلاتا ہے:",
    "options": [
      "لکچر کا طریقہ",
      "نگرانی کا طریقہ",
      "بحث کا طریقہ",
      "اداکاری کا طریقہ"
    ],
    "correct": "نگرانی کا طریقہ",
    "explanation": "نگرانی کا طریقہ (Supervised Study Method) میں طلباء استاد کی موجودگی اور نگرانی میں اپنی درسی مشقیں یا اسائنمنٹ مکمل کرتے ہیں۔ اس سے استاد کو ان کی مشکلات کو فوری طور پر حل کرنے کا موقع ملتا ہے۔"
  },
  {
    "id": 259,
    "text": "استاد کا کلاس میں کسی موضوع پر مفصل اور منظم تقریر کرنا تدریس کا کون سا طریقہ ہے؟",
    "options": [
      "سوال و جواب کا طریقہ",
      "لکچر یا بیانیہ طریقہ",
      "اکتشافی طریقہ",
      "منصوبائی طریقہ"
    ],
    "correct": "لکچر یا بیانیہ طریقہ",
    "explanation": "لکچر یا بیانیہ طریقہ (Lecture or Narrative Method) میں استاد ایک ماہر کے طور پر معلومات کو منظم کرکے طلباء کے سامنے زبانی طور پر پیش کرتا ہے۔ یہ طریقہ کم وقت میں زیادہ مواد پڑھانے کے لیے استعمال ہوتا ہے۔"
  },
  {
    "id": 260,
    "text": "تدریسی منصوبہ بندی کی صحیح ترتیب کیا ہے؟",
    "options": [
      "اکائی > سالانہ > سبق",
      "سبق > اکائی > سالانہ",
      "سالانہ > اکائی > سبق",
      "سالانہ > سبق > اکائی"
    ],
    "correct": "سالانہ > اکائی > سبق",
    "explanation": "منصوبہ بندی کا عمل عمومی سے خصوصی کی طرف ہوتا ہے۔ سب سے پہلے پورے سال کا منصوبہ (سالانہ) بنایا جاتا ہے، پھر اسے اکائیوں (یونٹس) میں تقسیم کیا جاتا ہے، اور آخر میں ہر اکائی کے لیے روزانہ کے اسباق (سبق) کا منصوبہ تیار کیا جاتا ہے۔"
  },
  {
    "id": 261,
    "text": "طلباء میں تنقیدی سوچ اور اظہار رائے کی صلاحیت کو فروغ دینے کے لیے کون سا طریقہ سب سے زیادہ موزوں ہے؟",
    "options": [
      "یاد کرنے کا طریقہ",
      "بحث و مباحثہ",
      "لکچر کا طریقہ",
      "ترجمے کا طریقہ"
    ],
    "correct": "بحث و مباحثہ",
    "explanation": "بحث و مباحثہ (Debate and Discussion) ایک ایسا طریقہ ہے جس میں طلباء کسی موضوع کے حق میں یا مخالفت میں دلائل پیش کرتے ہیں۔ اس سے ان کی سوچنے، تجزیہ کرنے اور اپنے خیالات کو اعتماد سے پیش کرنے کی صلاحیت بڑھتی ہے۔"
  },
  {
    "id": 262,
    "text": "نثر کی تدریس کے دوران استاد کا مشکل الفاظ، محاورات اور جملوں کی وضاحت کرنا کس طریقے کے زمرے میں آتا ہے؟",
    "options": [
      "غنائیہ طریقہ",
      "توضیحی و تشریحی طریقہ",
      "اداکاری کا طریقہ",
      "منصوبائی طریقہ"
    ],
    "correct": "توضیحی و تشریحی طریقہ",
    "explanation": "توضیحی و تشریحی طریقہ (Explanatory and Interpretive Method) میں استاد سبق کے مشکل حصوں کی وضاحت کرتا ہے، سیاق و سباق بیان کرتا ہے اور متن کے گہرے معنی کو واضح کرتا ہے تاکہ طلباء اسے اچھی طرح سمجھ سکیں۔"
  },
  {
    "id": 263,
    "text": "سبق کی منصوبہ بندی کا وہ حصہ کیا کہلاتا ہے جس میں یہ جانچا جاتا ہے کہ تدریسی مقاصد حاصل ہوئے یا نہیں؟",
    "options": [
      "تمہید",
      "پیشکش",
      "گھر کا کام",
      "جانچ یا جائزہ"
    ],
    "correct": "جانچ یا جائزہ",
    "explanation": "سبق کی منصوبہ بندی کے آخری حصے میں جانچ یا جائزہ (Evaluation) کا مرحلہ ہوتا ہے۔ اس میں استاد مختلف سوالات یا سرگرمیوں کے ذریعے یہ اندازہ لگاتا ہے کہ طلباء نے سبق کو کس حد تک سمجھا ہے۔"
  },
  {
    "id": 264,
    "text": "تدریسی مہارتوں (Teaching Skills) کا بنیادی مقصد کیا ہے؟",
    "options": [
      "نصاب کو جلدی ختم کرنا",
      "تدریس کو زیادہ مؤثر اور دلچسپ بنانا",
      "کلاس میں نظم و ضبط قائم رکھنا",
      "طلباء کو امتحان کے لیے تیار کرنا"
    ],
    "correct": "تدریس کو زیادہ مؤثر اور دلچسپ بنانا",
    "explanation": "تدریسی مہارتیں، جیسے سوال پوچھنے کی مہارت، وضاحت کی مہارت، اور مثالیں دینے کی مہارت، استاد کو اپنے سبق کو زیادہ منظم، دلچسپ اور مؤثر بنانے میں مدد دیتی ہیں، جس سے سیکھنے کا عمل بہتر ہوتا ہے۔"
  },
  {
    "id": 265,
    "text": "غزل کی تدریس میں سب سے زیادہ زور کس پہلو پر دیا جانا چاہیے؟",
    "options": [
      "شاعر کی زندگی پر",
      "غزل کے ہر شعر کے الگ معنی اور اس کی جمالیات پر",
      "قواعد کی مشق پر",
      "کہانی سنانے پر"
    ],
    "correct": "غزل کے ہر شعر کے الگ معنی اور اس کی جمالیات پر",
    "explanation": "غزل کی سب سے بڑی خصوصیت یہ ہے کہ اس کا ہر شعر ایک مکمل اکائی ہوتا ہے۔ لہٰذا، غزل کی تدریس میں ہر شعر کی انفرادی تشریح، اس میں موجود صنائع بدائع، اور اس کے تہہ در تہہ معنی کو سمجھانے پر زور دیا جاتا ہے۔"
  },
  {
    "id": 266,
    "text": "استقرائی اور استخراجی طریقے بنیادی طور پر زبان کے کس جزو کی تدریس کے لیے سب سے زیادہ استعمال ہوتے ہیں؟",
    "options": [
      "انشائیہ",
      "نظم",
      "قواعد",
      "ڈرامہ"
    ],
    "correct": "قواعد",
    "explanation": "قواعد (Grammar) کی تدریس کے لیے استقرائی (مثال سے اصول) اور استخراجی (اصول سے مثال) طریقے سب سے زیادہ مشہور اور مؤثر ہیں۔ استقرائی طریقہ کو جدید اور زیادہ نفسیاتی سمجھا جاتا ہے۔"
  },
  {
    "id": 267,
    "text": "ایک اکائی (Unit) میں شامل تمام اسباق کو پڑھانے کے لیے درکار کل وقت اور وسائل کی منصوبہ بندی کس میں کی جاتی ہے؟",
    "options": [
      "سالانہ منصوبے میں",
      "سبق کے منصوبے میں",
      "اکائی منصوبے میں",
      "ٹائم ٹیبل میں"
    ],
    "correct": "اکائی منصوبے میں",
    "explanation": "اکائی منصوبہ (Unit Plan) ایک درمیانی سطح کا منصوبہ ہے جو ایک مخصوص اکائی کو پڑھانے کے لیے درکار تدریسی حکمت عملیوں، مواد، سرگرمیوں اور وقت کا تفصیلی خاکہ فراہم کرتا ہے۔"
  },
  {
    "id": 268,
    "text": "جس طریقے میں طلباء کو سیکھنے کے عمل میں زیادہ آزادی اور ذمہ داری دی جاتی ہے، وہ کون سا ہے؟",
    "options": [
      "لکچر کا طریقہ",
      "ڈالٹن پلان",
      "یاد کرنے کا طریقہ",
      "استخراجی طریقہ"
    ],
    "correct": "ڈالٹن پلان",
    "explanation": "ڈالٹن پلان کی بنیاد ہی انفرادی سیکھنے، آزادی اور ذمہ داری پر ہے۔ طلباء خود فیصلہ کرتے ہیں کہ وہ کب، کہاں اور کیسے اپنا تفویض کردہ کام مکمل کریں گے۔"
  },
  {
    "id": 269,
    "text": "تدریس کا وہ طریقہ جس میں استاد اور شاگرد دونوں فعال کردار ادا کرتے ہیں، کون سا ہے؟",
    "options": [
      "صرف لکچر کا طریقہ",
      "بحث و مباحثہ کا طریقہ",
      "صرف یاد کرنے کا طریقہ",
      "صرف ترجمے کا طریقہ"
    ],
    "correct": "بحث و مباحثہ کا طریقہ",
    "explanation": "بحث و مباحثہ (Debate and Discussion) کے طریقے میں استاد صرف معلومات فراہم نہیں کرتا بلکہ گفتگو کو منظم کرتا ہے، اور طلباء فعال طور پر اپنے خیالات اور دلائل کا اظہار کرتے ہیں، جس سے یہ ایک دو طرفہ عمل بن جاتا ہے۔"
  },
  {
    "id": 270,
    "text": "مائیکرو ٹیچنگ کا چکر (Micro-teaching Cycle) عام طور پر کس مرحلے سے شروع ہوتا ہے؟",
    "options": [
      "دوبارہ منصوبہ بندی",
      "فیڈ بیک",
      "منصوبہ بندی",
      "دوبارہ پڑھانا"
    ],
    "correct": "منصوبہ بندی",
    "explanation": "مائیکرو ٹیچنگ کا عمل منصوبہ بندی (Plan) سے شروع ہوتا ہے، جس کے بعد پڑھانا (Teach)، فیڈ بیک (Feedback)، دوبارہ منصوبہ بندی (Re-plan)، دوبارہ پڑھانا (Re-teach)، اور پھر دوبارہ فیڈ بیک (Re-feedback) کے مراحل آتے ہیں۔"
  },
  {
    "id": 271,
    "text": "ایک اچھا سبق کا منصوبہ (Lesson Plan) کیسا ہونا چاہیے؟",
    "options": [
      "بہت سخت اور غیر لچکدار",
      "صرف استاد کے لیے قابل فہم",
      "واضح، منظم اور لچکدار",
      "بہت مختصر اور غیر واضح"
    ],
    "correct": "واضح، منظم اور لچکدار",
    "explanation": "ایک مؤثر سبق کا منصوبہ واضح مقاصد پر مبنی، منطقی طور پر منظم، اور اتنا لچکدار ہونا چاہیے کہ کلاس روم کی غیر متوقع صورتحال کے مطابق اس میں تبدیلی کی جا سکے۔"
  },
  {
    "id": 272,
    "text": "گرامر-ترجمہ کا طریقہ (Grammar-Translation Method) کس مہارت پر سب سے زیادہ زور دیتا ہے؟",
    "options": [
      "بولنے اور سننے پر",
      "پڑھنے اور لکھنے پر",
      "صرف بولنے پر",
      "صرف سننے پر"
    ],
    "correct": "پڑھنے اور لکھنے پر",
    "explanation": "گرامر-ترجمہ کا طریقہ زبان کی زبانی مہارتوں (بولنا اور سننا) کو نظر انداز کرتا ہے اور اس کا بنیادی مقصد طلباء کو زبان کے قواعد سکھانا اور متن کو پڑھنے اور ترجمہ کرنے کے قابل بنانا ہوتا ہے۔"
  },
  {
    "id": 273,
    "text": "ابتدائی جماعتوں میں زبان سکھانے کے لیے کون سا طریقہ زیادہ کارآمد ثابت ہوتا ہے؟",
    "options": [
      "لکچر کا طریقہ",
      "استخراجی طریقہ",
      "اداکاری اور گانے کا طریقہ",
      "بحث و مباحثہ"
    ],
    "correct": "اداکاری اور گانے کا طریقہ",
    "explanation": "چھوٹے بچوں کو زبان سکھانے کے لیے کھیل، گانے (غنائیہ طریقہ) اور اداکاری (اداکاری کا طریقہ) پر مبنی سرگرمیاں زیادہ مؤثر ہوتی ہیں کیونکہ یہ سیکھنے کے عمل کو دلچسپ اور یادگار بناتی ہیں۔"
  },
  {
    "id": 274,
    "text": "سالانہ منصوبہ بندی کا بنیادی فائدہ کیا ہے؟",
    "options": [
      "یہ روزانہ کی تدریس کو مشکل بناتا ہے",
      "یہ اساتذہ کو آزادی سے کام کرنے نہیں دیتا",
      "یہ پورے سال کے کام کو منظم اور متوازن بناتا ہے",
      "اس سے صرف امتحان کی تیاری ہوتی ہے"
    ],
    "correct": "یہ پورے سال کے کام کو منظم اور متوازن بناتا ہے",
    "explanation": "سالانہ منصوبہ بندی اس بات کو یقینی بناتی ہے کہ نصاب وقت پر مکمل ہو، تمام موضوعات کو مناسب وقت ملے، اور تدریسی سرگرمیاں اور جائزے پورے سال میں منظم طریقے سے تقسیم ہوں۔"
  },
  {
    "id": 275,
    "text": "جب ایک استاد کسی کہانی یا تاریخی واقعہ کو بیان کرکے سبق پڑھاتا ہے تو وہ کون سا طریقہ استعمال کر رہا ہوتا ہے؟",
    "options": [
      "بیانیہ طریقہ",
      "اکتشافی طریقہ",
      "پروجیکٹ طریقہ",
      "استقرائی طریقہ"
    ],
    "correct": "بیانیہ طریقہ",
    "explanation": "بیانیہ طریقہ (Narrative Method) میں استاد معلومات کو ایک کہانی یا ترتیب وار واقعات کی شکل میں پیش کرتا ہے۔ یہ طریقہ تاریخ، ادب اور دیگر سماجی علوم کے لیے بہت موزوں ہے۔"
  },
  {
    "id": 276,
    "text": "ان میں سے کون سا تدریسی منصوبہ بندی کا حصہ نہیں ہے؟",
    "options": [
      "سالانہ منصوبہ بندی",
      "اکائی منصوبہ بندی",
      "سبق کی منصوبہ بندی",
      "طالب علم کی ذاتی منصوبہ بندی"
    ],
    "correct": "طالب علم کی ذاتی منصوبہ بندی",
    "explanation": "سالانہ، اکائی اور سبق کی منصوبہ بندی استاد کے تدریسی عمل کا حصہ ہیں، جبکہ طالب علم کی ذاتی منصوبہ بندی اس کے اپنے مطالعے اور وقت کے انتظام سے تعلق رکھتی ہے۔"
  },
  {
    "id": 277,
    "text": "کس طریقے میں استاد کا کردار ایک سہولت کار (facilitator) کا ہوتا ہے نہ کہ صرف معلومات فراہم کرنے والے کا؟",
    "options": [
      "لکچر کا طریقہ",
      "منصوبائی طریقہ",
      "یاد کرنے کا طریقہ",
      "استخراجی طریقہ"
    ],
    "correct": "منصوبائی طریقہ",
    "explanation": "منصوبائی طریقہ (Project Method) اور اکتشافی طریقہ جیسے جدید طریقوں میں استاد کا کردار ایک رہنما یا سہولت کار کا ہوتا ہے جو طلباء کو خود سیکھنے کے لیے ماحول اور وسائل فراہم کرتا ہے۔"
  },
  {
    "id": 278,
    "text": "سبق کے منصوبے (Lesson Plan) میں 'تمہید' یا 'آمادگی' کا مقصد کیا ہوتا ہے؟",
    "options": [
      "سبق کا خلاصہ بیان کرنا",
      "طلباء کے سابقہ علم کو نئے سبق سے جوڑنا اور دلچسپی پیدا کرنا",
      "گھر کا کام دینا",
      "سبق کو دہرانا"
    ],
    "correct": "طلباء کے سابقہ علم کو نئے سبق سے جوڑنا اور دلچسپی پیدا کرنا",
    "explanation": "تمہید (Introduction) کا مقصد طلباء کی توجہ حاصل کرنا، ان کے پچھلے علم کو جانچنا اور اسے نئے سبق سے منسلک کرکے سیکھنے کے لیے ذہنی طور پر تیار کرنا ہوتا ہے۔"
  },
  {
    "id": 279,
    "text": "قواعد کی تدریس کا استقرائی طریقہ کس تعلیمی اصول پر مبنی ہے؟",
    "options": [
      "نامعلوم سے معلوم کی طرف",
      "عمومی سے خصوصی کی طرف",
      "خصوصی سے عمومی کی طرف",
      "خلاصہ سے تفصیل کی طرف"
    ],
    "correct": "خصوصی سے عمومی کی طرف",
    "explanation": "استقرائی طریقہ 'خصوصی سے عمومی کی طرف' (Specific to General) کے اصول پر کام کرتا ہے۔ اس میں طلباء مخصوص مثالوں کا تجزیہ کرکے ایک عمومی اصول یا قاعدہ تک پہنچتے ہیں۔"
  },
  {
    "id": 280,
    "text": "ٹیم ٹیچنگ (Team Teaching) کا سب سے بڑا فائدہ کیا ہے؟",
    "options": [
      "اساتذہ پر کام کا بوجھ بڑھ جاتا ہے",
      "طلباء کو مختلف اساتذہ کی مہارتوں سے فائدہ ہوتا ہے",
      "یہ صرف چھوٹے گروپ کے لیے موزوں ہے",
      "اس میں زیادہ وقت لگتا ہے"
    ],
    "correct": "طلباء کو مختلف اساتذہ کی مہارتوں سے فائدہ ہوتا ہے",
    "explanation": "ٹیم ٹیچنگ میں چونکہ مختلف اساتذہ مل کر پڑھاتے ہیں، اس لیے طلباء کو ہر استاد کے منفرد تدریسی انداز، علم اور مہارت سے سیکھنے کا موقع ملتا ہے، جو ان کے سیکھنے کے تجربے کو بہتر بناتا ہے۔"
  },
  {
    "id": 281,
    "text": "کون سا طریقہ طالب علم کو 'کر کے سیکھنے' (Learning by Doing) کا موقع فراہم کرتا ہے؟",
    "options": [
      "لکچر کا طریقہ",
      "منصوبائی طریقہ",
      "یاد کرنے کا طریقہ",
      "ترجمے کا طریقہ"
    ],
    "correct": "منصوبائی طریقہ",
    "explanation": "منصوبائی طریقہ (Project Method) عملی کام پر مبنی ہوتا ہے۔ اس میں طلباء نظریاتی علم حاصل کرنے کے بجائے خود ایک پروجیکٹ پر کام کرتے ہوئے عملی تجربے کے ذریعے سیکھتے ہیں۔"
  },
  {
    "id": 282,
    "text": "ایک استاد سبق پڑھانے سے پہلے یہ سوچتا ہے کہ 'میں یہ سبق کیوں پڑھا رہا ہوں؟'۔ یہ سوال سبق کی منصوبہ بندی کے کس جزو سے متعلق ہے؟",
    "options": [
      "تدریسی معاونات",
      "سرگرمیاں",
      "مقاصد",
      "جائزہ"
    ],
    "correct": "مقاصد",
    "explanation": "یہ سوال تدریسی مقاصد (Objectives) کے تعین سے متعلق ہے۔ مقاصد یہ واضح کرتے ہیں کہ ایک استاد اس سبق کے ذریعے طلباء میں کون سی تبدیلیاں لانا چاہتا ہے اور اس کی تدریس کا حتمی مقصد کیا ہے۔"
  },
  {
    "id": 283,
    "text": "استخراجی طریقہ (Deductive Method) کا ایک ممکنہ نقصان کیا ہے؟",
    "options": [
      "یہ طلباء کی سوچ کو ابھارتا ہے",
      "یہ طلباء کو غیر فعال بنا سکتا ہے اور رٹنے کی حوصلہ افزائی کرتا ہے",
      "اس میں بہت زیادہ وقت لگتا ہے",
      "یہ چھوٹی جماعتوں کے لیے بہترین ہے"
    ],
    "correct": "یہ طلباء کو غیر فعال بنا سکتا ہے اور رٹنے کی حوصلہ افزائی کرتا ہے",
    "explanation": "چونکہ استخراجی طریقے میں اصول استاد بتاتا ہے اور طلباء اسے صرف یاد کرکے مثالوں پر لاگو کرتے ہیں، اس لیے اس میں طلباء کی اپنی سوچ اور دریافت کا عمل محدود ہوجاتا ہے اور وہ غیر فعال سامع بن سکتے ہیں۔"
  },
  {
    "id": 284,
    "text": "مائیکرو ٹیچنگ کا فوکس کس چیز پر ہوتا ہے؟",
    "options": [
      "پورا نصاب پڑھانے پر",
      "ایک مخصوص تدریسی مہارت پر",
      "کلاس میں نظم و ضبط پر",
      "طویل مدتی منصوبوں پر"
    ],
    "correct": "ایک مخصوص تدریسی مہارت پر",
    "explanation": "مائیکرو ٹیچنگ کا مقصد تدریسی عمل کی پیچیدگی کو کم کرکے استاد کو کسی ایک مہارت، جیسے سوال پوچھنا، مثال دینا، یا بلیک بورڈ کا استعمال، پر عبور حاصل کرنے میں مدد دینا ہے۔"
  },
  {
    "id": 285,
    "text": "منصوبہ بندی کے بغیر تدریس کی مثال کس طرح ہے؟",
    "options": [
      "نقشے کے ساتھ سفر کرنا",
      "بغیر پتوار کے کشتی چلانا",
      "ہدایات کے ساتھ کھانا پکانا",
      "ایک منظم تقریر کرنا"
    ],
    "correct": "بغیر پتوار کے کشتی چلانا",
    "explanation": "منصوبہ بندی کے بغیر تدریس بے سمت اور بے مقصد ہو جاتی ہے۔ جس طرح بغیر پتوار کے کشتی اپنی منزل تک نہیں پہنچ سکتی، اسی طرح بغیر منصوبے کے تدریس اپنے مقاصد حاصل نہیں کر سکتی۔"
  },
  {
    "id": 286,
    "text": "راست طریقہ (Direct Method) میں قواعد کیسے سکھائے جاتے ہیں؟",
    "options": [
      "الگ سے اصول رٹا کر",
      "ترجمے کے ذریعے",
      "استقرائی طریقے سے، گفتگو کے دوران",
      "قواعد سکھائے ہی نہیں جاتے"
    ],
    "correct": "استقرائی طریقے سے، گفتگو کے دوران",
    "explanation": "راست طریقے میں قواعد کو باقاعدہ طور پر الگ سے نہیں پڑھایا جاتا، بلکہ زبان کے عملی استعمال اور گفتگو کے دوران مثالوں کے ذریعے استقرائی انداز میں سکھایا جاتا ہے۔"
  },
  {
    "id": 287,
    "text": "کسی مضمون یا کتاب کا سرسری جائزہ لے کر اس کے مرکزی خیال کو سمجھنا کیا کہلاتا ہے؟",
    "options": [
      "اسکیننگ (Scanning)",
      "اسکیمنگ (Skimming)",
      "تنقیدی مطالعہ",
      "گہرا مطالعہ"
    ],
    "correct": "اسکیمنگ (Skimming)",
    "explanation": "سری مطالعہ کی دو قسمیں ہیں۔ اسکیمنگ (Skimming) کا مطلب متن پر تیزی سے نظر ڈال کر اس کا عمومی تاثر یا مرکزی خیال حاصل کرنا ہے، جبکہ اسکیننگ (Scanning) کا مطلب کسی مخصوص معلومات کو تلاش کرنا ہے۔"
  },
  {
    "id": 288,
    "text": "ایک مؤثر سبق کے منصوبے میں سرگرمیاں (Activities) کس بنیاد پر منتخب کی جانی چاہئیں؟",
    "options": [
      "صرف استاد کی پسند پر",
      "صرف تفریح کے لیے",
      "تدریسی مقاصد کے حصول کے لیے",
      "کتاب میں دی گئی ترتیب کے مطابق"
    ],
    "correct": "تدریسی مقاصد کے حصول کے لیے",
    "explanation": "سبق میں شامل تمام سرگرمیاں بامقصد ہونی چاہئیں اور ان کا انتخاب اس بنیاد پر کیا جانا چاہیے کہ وہ مقررہ تدریسی مقاصد کو حاصل کرنے میں مددگار ثابت ہوں۔"
  },
  {
    "id": 289,
    "text": "تدریس میں 'سوال و جواب کے طریقے' کا بانی کسے سمجھا جاتا ہے؟",
    "options": [
      "افلاطون",
      "ارسطو",
      "سقراط",
      "جان ڈیوی"
    ],
    "correct": "سقراط",
    "explanation": "یونانی فلسفی سقراط (Socrates) نے سوالات کے ذریعے علم اور سچائی تک پہنچنے کا طریقہ متعارف کرایا، جسے 'سقراطی طریقہ' (Socratic Method) بھی کہا جاتا ہے۔ یہ جدید سوال و جواب کے طریقے کی بنیاد ہے۔"
  },
  {
    "id": 290,
    "text": "اکائی منصوبہ (Unit Plan) کس کس کے درمیان ایک پل کا کام کرتا ہے؟",
    "options": [
      "استاد اور شاگرد",
      "سالانہ منصوبے اور سبق کے منصوبے",
      "کتاب اور نصاب",
      "اسکول اور والدین"
    ],
    "correct": "سالانہ منصوبے اور سبق کے منصوبے",
    "explanation": "اکائی منصوبہ سال بھر کے وسیع منصوبے کو روزانہ کے چھوٹے چھوٹے عملی منصوبوں (سبق کے منصوبے) سے جوڑتا ہے۔ یہ ایک پل کی طرح کام کرتا ہے جو طویل مدتی اہداف کو قلیل مدتی اقدامات میں تقسیم کرتا ہے۔"
  },
  {
    "id": 291,
    "text": "وہ کون سا طریقہ ہے جس میں جماعت کو چھوٹے چھوٹے گروپوں میں تقسیم کرکے ہر گروپ کو الگ الگ کام سونپا جاتا ہے؟",
    "options": [
      "لکچر کا طریقہ",
      "منصوبائی طریقہ",
      "گروہی کام کا طریقہ",
      "یاد کرنے کا طریقہ"
    ],
    "correct": "گروہی کام کا طریقہ",
    "explanation": "یہ سوال براہ راست syllabus میں مذکور نہیں لیکن 'منصوبائی طریقہ' اور 'بحث و مباحثہ' کا ایک اہم جزو گروہی کام ہے۔ گروہی کام میں طلباء مل کر کام کرتے ہیں، جس سے باہمی تعاون اور سیکھنے کی صلاحیت بڑھتی ہے۔ یہاں سب سے قریب جواب منصوبائی طریقہ ہو سکتا ہے جس میں اکثر گروہی کام شامل ہوتا ہے۔"
  },
  {
    "id": 292,
    "text": "انشائیہ کی تدریس کا بنیادی مقصد کیا ہے؟",
    "options": [
      "خوشخطی کو بہتر بنانا",
      "طلباء کی تخلیقی اور تنظیمی تحریری صلاحیتوں کو فروغ دینا",
      "املا کی غلطیوں کو دور کرنا",
      "تیزی سے پڑھنے کی مشق کرانا"
    ],
    "correct": "طلباء کی تخلیقی اور تنظیمی تحریری صلاحیتوں کو فروغ دینا",
    "explanation": "انشائیہ (Essay) لکھوانے کا مقصد صرف لکھنا سکھانا نہیں، بلکہ طلباء کو اپنے خیالات کو منطقی ترتیب دینا، دلائل پیش کرنا اور ایک موضوع پر جامع اور تخلیقی انداز میں اظہارِ خیال کرنا سکھانا ہے۔"
  },
  {
    "id": 293,
    "text": "کون سا طریقہ زبان کی چاروں مہارتوں (سننا، بولنا، پڑھنا، لکھنا) کی متوازن ترقی پر زور دیتا ہے؟",
    "options": [
      "گرامر-ترجمہ کا طریقہ",
      "راست طریقہ",
      "خاموش طریقہ",
      "صرف پڑھنے کا طریقہ"
    ],
    "correct": "راست طریقہ",
    "explanation": "راست طریقہ (Direct Method) کا زور زبان کے عملی استعمال پر ہوتا ہے، جس میں بولنے اور سننے کو بنیادی اہمیت دی جاتی ہے، اور ساتھ ہی پڑھنے اور لکھنے کی بھی مشق کرائی جاتی ہے، جس سے چاروں مہارتیں ایک ساتھ فروغ پاتی ہیں۔"
  },
  {
    "id": 294,
    "text": "تدریسی مہارتوں میں 'تقویت کی مہارت' (Skill of Reinforcement) کا کیا مطلب ہے؟",
    "options": [
      "طلباء کو سزا دینا",
      "طلباء کے صحیح جوابات اور اچھے رویے کی حوصلہ افزائی کرنا",
      "سبق کو بار بار دہرانا",
      "مشکل سوالات پوچھنا"
    ],
    "correct": "طلباء کے صحیح جوابات اور اچھے رویے کی حوصلہ افزائی کرنا",
    "explanation": "تقویت یا حوصلہ افزائی ایک اہم تدریسی مہارت ہے۔ اس میں استاد طلباء کی اچھی کارکردگی پر انہیں شاباشی دیتا ہے یا مثبت تاثرات دیتا ہے تاکہ وہ مستقبل میں بھی سیکھنے کے عمل میں دلچسپی لیں۔"
  },
  {
    "id": 295,
    "text": "کسی سبق کا روزانہ کی بنیاد پر بنایا جانے والا منصوبہ کیا کہلاتا ہے؟",
    "options": [
      "سالانہ منصوبہ",
      "اکائی منصوبہ",
      "سبق کا منصوبہ",
      "ٹائم ٹیبل"
    ],
    "correct": "سبق کا منصوبہ",
    "explanation": "سبق کا منصوبہ (Lesson Plan) ایک دن کے مخصوص پیریڈ کے لیے تدریس کا تفصیلی خاکہ ہوتا ہے، جس میں مقاصد، مواد، سرگرمیاں اور جائزے کے مراحل شامل ہوتے ہیں۔"
  },
  {
    "id": 296,
    "text": "ایک استاد طلباء کو ایک نظم دیتا ہے اور کہتا ہے کہ اس میں سے قافیہ اور ردیف تلاش کریں۔ یہ سرگرمی زبان کی کس صنف کی تدریس سے متعلق ہے؟",
    "options": [
      "نثر",
      "ڈرامہ",
      "غزل/نظم",
      "انشائیہ"
    ],
    "correct": "غزل/نظم",
    "explanation": "قافیہ اور ردیف شاعری، خاص طور پر غزل اور نظم کے بنیادی اجزاء ہیں۔ اس قسم کی سرگرمی شاعری کی ساخت اور فنی پہلوؤں کو سمجھانے کے لیے استعمال کی جاتی ہے۔"
  },
  {
    "id": 297,
    "text": "قواعد کی تدریس کا کون سا طریقہ زیادہ طالب علم پر مبنی (student-centered) ہے؟",
    "options": [
      "استقرائی طریقہ",
      "استخراجی طریقہ",
      "لکچر کا طریقہ",
      "ترجمے کا طریقہ"
    ],
    "correct": "استقرائی طریقہ",
    "explanation": "استقرائی طریقے میں طلباء خود مثالوں کا تجزیہ کرکے اصول اخذ کرتے ہیں، اس لیے وہ سیکھنے کے عمل میں زیادہ فعال ہوتے ہیں۔ اس کے برعکس، استخراجی طریقہ زیادہ استاد پر مبنی (teacher-centered) ہے۔"
  },
  {
    "id": 298,
    "text": "ایک کامیاب سبق کے منصوبے کی سب سے اہم خصوصیت کیا ہے؟",
    "options": [
      "اس کا بہت طویل ہونا",
      "اس کا مقاصد پر مبنی ہونا",
      "اس کا کسی دوسری کتاب سے نقل کیا جانا",
      "اس کا صرف ایک سرگرمی پر مشتمل ہونا"
    ],
    "correct": "اس کا مقاصد پر مبنی ہونا",
    "explanation": "ایک کامیاب سبق کا منصوبہ ہمیشہ واضح اور قابلِ حصول مقاصد پر مبنی ہوتا ہے۔ تمام سرگرمیاں اور تدریسی مواد ان مقاصد کو حاصل کرنے کے لیے ہی منتخب کیے جاتے ہیں۔"
  },
  {
    "id": 299,
    "text": "اخبار کے مضمون میں سے کسی خاص خبر کو تلاش کرنا 'سری مطالعہ' کی کس قسم کی مثال ہے؟",
    "options": [
      "اسکیمنگ",
      "اسکیننگ",
      "تنقیدی مطالعہ",
      "تفریحی مطالعہ"
    ],
    "correct": "اسکیننگ",
    "explanation": "اسکیننگ (Scanning) کا مطلب ہے کسی متن کو تیزی سے دیکھ کر اس میں سے کوئی مخصوص معلومات، جیسے کوئی نام، تاریخ، یا خاص لفظ تلاش کرنا۔"
  },
  {
    "id": 300,
    "text": "تدریس کا کون سا طریقہ 'مسئلہ حل کرنے کی صلاحیت' (Problem-Solving Skill) کو سب سے زیادہ فروغ دیتا ہے؟",
    "options": [
      "یاد کرنے کا طریقہ",
      "اکتشافی طریقہ",
      "لکچر کا طریقہ",
      "ترجمے کا طریقہ"
    ],
    "correct": "اکتشافی طریقہ",
    "explanation": "اکتشافی طریقہ (Heuristic/Discovery Method) کی بنیاد ہی کسی مسئلے یا سوال پر رکھی جاتی ہے۔ طلباء کو خود اس مسئلے کا حل تلاش کرنا ہوتا ہے، جس سے ان کی مسئلہ حل کرنے کی صلاحیت براہ راست فروغ پاتی ہے۔"
  },
  {
    "id": 301,
    "text": "افسانہ ”کفن“ کے خالق کون ہیں؟",
    "options": [
      "سعادت حسن منٹو",
      "منشی پریم چند",
      "کرشن چندر",
      "عصمت چغتائی"
    ],
    "correct": "منشی پریم چند",
    "explanation": "”کفن“ منشی پریم چند کا ایک شاہکار اور حقیقت نگاری پر مبنی افسانہ ہے جو غربت اور انسانی نفسیات کی گہرائیوں کو بیان کرتا ہے۔\n('Kafan' is a masterpiece and realistic short story by Munshi Premchand that delves into the depths of poverty and human psychology.)"
  },
  {
    "id": 302,
    "text": "وہ اسم جو کسی جاندار یا بے جان چیز کی آواز کو ظاہر کرے، کیا کہلاتا ہے؟",
    "options": [
      "اسم آلہ",
      "اسم صوت",
      "اسم ظرف",
      "اسم مکبر"
    ],
    "correct": "اسم صوت",
    "explanation": "اسم صوت (Onomatopoeic Noun) وہ اسم ہوتا ہے جو کسی بھی قسم کی آواز کو ظاہر کرتا ہے۔ مثلاً: کائیں کائیں (کوے کی آواز)، چھم چھم (بارش کی آواز)۔\n(Ism-e-Saut (Onomatopoeic Noun) is a noun that represents any kind of sound. For example: 'kain kain' (cawing of a crow), 'chham chham' (sound of rain).)"
  },
  {
    "id": 303,
    "text": "”یادوں کی برات“ کس شاعر کی خود نوشت سوانح حیات ہے؟",
    "options": [
      "فیض احمد فیض",
      "جوش ملیح آبادی",
      "فراق گورکھپوری",
      "جگر مرادآبادی"
    ],
    "correct": "جوش ملیح آبادی",
    "explanation": "”یادوں کی برات“ شاعرِ انقلاب جوش ملیح آبادی کی مشہور خود نوشت (Autobiography) ہے، جو ان کی زندگی کے مختلف پہلوؤں اور ادبی سفر کی داستان ہے۔\n('Yadon ki Baraat' is the famous autobiography of the 'Poet of Revolution', Josh Malihabadi, narrating various aspects of his life and literary journey.)"
  },
  {
    "id": 304,
    "text": "جملے کے اجزا میں ٹھہراؤ پیدا کرنے کے لیے ”سکتہ“ سے زیادہ اور ”وقفہ“ سے کم ٹھہراؤ کے لیے کونسی علامت استعمال ہوتی ہے؟",
    "options": [
      "ختمہ (۔)",
      "رابطہ (:)",
      "سوالیہ (؟)",
      "وقفہ (؛)"
    ],
    "correct": "وقفہ (؛)",
    "explanation": "وقفہ یا سیمی کالن (؛) کا استعمال وہاں ہوتا ہے جہاں سکتہ (comma) سے زیادہ اور ختمہ (full stop) سے کم ٹھہرنا مقصود ہو۔ یہ اکثر ایک بڑے جملے کے خود مختار اجزا کو جوڑنے کے لیے استعمال ہوتا ہے۔\n(The Semicolon (؛) is used where a pause longer than a comma but shorter than a full stop is required. It is often used to connect independent clauses within a larger sentence.)"
  },
  {
    "id": 305,
    "text": "کسی چیز کی ایسی وجہ بیان کرنا جو درحقیقت اس کی وجہ نہ ہو مگر اس میں شاعرانہ خوبی پائی جائے، کونسی صنعت کہلاتی ہے؟",
    "options": [
      "صنعتِ مبالغہ",
      "صنعتِ تلمیح",
      "صنعتِ حسنِ تعلیل",
      "صنعتِ ایہام"
    ],
    "correct": "صنعتِ حسنِ تعلیل",
    "explanation": "صنعتِ حسنِ تعلیل (Poetic Reason) میں شاعر کسی واقعے کی اصلی اور حقیقی وجہ کو نظر انداز کر کے کوئی لطیف اور شاعرانہ وجہ بیان کرتا ہے۔\n(In 'San'at-e-Husn-e-Ta'leel', the poet ignores the real reason for an event and instead provides a subtle and poetic cause.)"
  },
  {
    "id": 306,
    "text": "لفظ ”شجاعت“ قواعد کی رو سے کیا ہے؟",
    "options": [
      "اسم فاعل",
      "اسم مفعول",
      "اسم کیفیت",
      "صفت"
    ],
    "correct": "اسم کیفیت",
    "explanation": "شجاعت (bravery) ایک کیفیت یا خوبی کا نام ہے جسے صرف محسوس کیا جا سکتا ہے، دیکھا یا چھوا نہیں جا سکتا۔ لہٰذا یہ اسم کیفیت (Abstract Noun) ہے۔\n('Shuja'at' (bravery) is the name of a quality or state that can only be felt, not seen or touched. Therefore, it is an Abstract Noun.)"
  },
  {
    "id": 307,
    "text": "”اردو کی آخری کتاب“ کس کی مزاحیہ تصنیف ہے؟",
    "options": [
      "مشتاق احمد یوسفی",
      "پطرس بخاری",
      "ابن انشاء",
      "رشید احمد صدیقی"
    ],
    "correct": "ابن انشاء",
    "explanation": "”اردو کی آخری کتاب“ ابن انشاء کی طنزیہ و مزاحیہ کتاب ہے جو درسی کتابوں کے پیروڈی کے انداز میں لکھی گئی ہے۔\n('Urdu ki Aakhri Kitab' is a satirical and humorous book by Ibn-e-Insha, written as a parody of textbooks.)"
  },
  {
    "id": 308,
    "text": "وہ فعل جس کا فاعل معلوم نہ ہو بلکہ صرف مفعول کا ذکر ہو، کیا کہلاتا ہے؟",
    "options": [
      "فعل معروف",
      "فعل مجہول",
      "فعل لازم",
      "فعل متعدی"
    ],
    "correct": "فعل مجہول",
    "explanation": "فعل مجہول (Passive Voice) وہ فعل ہے جس میں کام کرنے والا یعنی فاعل معلوم نہیں ہوتا اور فعل کی نسبت مفعول کی طرف ہوتی ہے۔ مثلاً ”خط لکھا گیا“۔\n('Fe'l-e-Majhool' (Passive Voice) is a verb where the doer (subject) is unknown, and the action is attributed to the object. For example, 'Khat likha gaya' (The letter was written).)"
  },
  {
    "id": 309,
    "text": "”موازنہ انیس و دبیر“ کس کی مشہور تنقیدی کتاب ہے؟",
    "options": [
      "الطاف حسین حالی",
      "محمد حسین آزاد",
      "امداد امام اثر",
      "شبلی نعمانی"
    ],
    "correct": "شبلی نعمانی",
    "explanation": "”موازنہ انیس و دبیر“ علامہ شبلی نعمانی کی ایک اہم تنقیدی تصنیف ہے جس میں انہوں نے اردو مرثیہ گوئی کے دو عظیم شاعروں، میر انیس اور مرزا دبیر، کے کلام کا تقابلی جائزہ پیش کیا ہے۔\n('Mawazna-e-Anees-o-Dabeer' is a significant critical work by Allama Shibli Nomani in which he presented a comparative analysis of the poetry of two great Marsiya poets, Mir Anis and Mirza Dabeer.)"
  },
  {
    "id": 310,
    "text": "وہ ضمیر جو اشارے کے لیے استعمال ہو، کیا کہلاتی ہے؟",
    "options": [
      "ضمیر شخصی",
      "ضمیر موصولہ",
      "ضمیر اشارہ",
      "ضمیر استفہامیہ"
    ],
    "correct": "ضمیر اشارہ",
    "explanation": "ضمیر اشارہ (Demonstrative Pronoun) وہ ضمیر ہے جو کسی شخص، جگہ یا چیز کی طرف اشارہ کرنے کے لیے استعمال ہوتی ہے۔ مثلاً: یہ، وہ، اِس، اُس۔\n('Zameer-e-Ishara' (Demonstrative Pronoun) is a pronoun used to point towards a person, place, or thing. For example: yeh (this/these), woh (that/those), is (this), us (that).)"
  },
  {
    "id": 311,
    "text": "لفظ 'ارتقا' کی ضد کیا ہے؟",
    "options": [
      "عروج",
      "بلندی",
      "تنزل",
      "ترقی"
    ],
    "correct": "تنزل",
    "explanation": "ارتقا کا مطلب ہے بتدریج ترقی کرنا یا آگے بڑھنا۔ اس کا متضاد (antonym) 'تنزل' ہے، جس کا مطلب ہے پستی کی طرف جانا یا زوال پذیر ہونا۔\n('Irtiqa' means to evolve or progress gradually. Its antonym is 'tanazzul', which means to decline or degenerate.)"
  },
  {
    "id": 312,
    "text": "”زنداں نامہ“ کس شاعر کے مجموعہ کلام کا نام ہے؟",
    "options": [
      "ناصر کاظمی",
      "ساحر لدھیانوی",
      "احمد فراز",
      "فیض احمد فیض"
    ],
    "correct": "فیض احمد فیض",
    "explanation": "”زنداں نامہ“ فیض احمد فیض کا شعری مجموعہ ہے جو زیادہ تر ان کی قید و بند کے زمانے کی شاعری پر مشتمل ہے۔\n('Zindan-Nama' is a poetry collection by Faiz Ahmed Faiz, mostly comprising poems written during his imprisonment.)"
  },
  {
    "id": 313,
    "text": "حروف 'ت، د، س، ش' کون سے حروف کہلاتے ہیں؟",
    "options": [
      "حروف قمری",
      "حروف شمسی",
      "حروف علت",
      "حروف حلقی"
    ],
    "correct": "حروف شمسی",
    "explanation": "حروف شمسی (Solar Letters) وہ حروف ہیں کہ جب ان سے پہلے 'ال' لگایا جائے تو 'لام' کی آواز نہیں پڑھی جاتی، بلکہ بعد والا حرف مشدد (doubled) ہو جاتا ہے۔ جیسے 'الشمس'۔\n('Huroof-e-Shamsi' (Solar Letters) are those letters before which if 'Al-' is added, the 'l' sound is not pronounced; instead, the following letter is stressed (doubled). For example, 'Ash-Shams'.)"
  },
  {
    "id": 314,
    "text": "چار مصرعوں پر مشتمل وہ صنفِ سخن جس کا پہلا، دوسرا اور چوتھا مصرع ہم قافیہ و ہم ردیف ہو، کیا کہلاتی ہے؟",
    "options": [
      "قطعہ",
      "مربع",
      "رباعی",
      "گیت"
    ],
    "correct": "رباعی",
    "explanation": "رباعی چار مصرعوں کی ایک مخصوص نظم ہوتی ہے جس کے لیے بحرِ ہزج کا وزن مخصوص ہے اور اس کا پہلا، دوسرا اور چوتھا مصرع ہم قافیہ ہوتا ہے۔ تیسرا مصرع آزاد ہو سکتا ہے۔\n(A 'Rubai' is a specific four-line poem in a particular meter (Bahr-e-Hazaj), in which the first, second, and fourth lines rhyme. The third line can be unrhymed.)"
  },
  {
    "id": 315,
    "text": "’دان‘ کس زبان کا لاحقہ (suffix) ہے؟",
    "options": [
      "عربی",
      "فارسی",
      "ترکی",
      "ہندی"
    ],
    "correct": "فارسی",
    "explanation": "’دان‘ فارسی زبان کا لاحقہ ہے جو ظرفیت یعنی 'رکھنے کی جگہ' کے معنی دیتا ہے۔ مثلاً: قلم دان، نمک دان، روشن دان۔\n('Dan' is a Persian suffix that signifies a container or place for something. For example: qalam-dan (pen holder), namak-dan (salt shaker), roshan-dan (ventilator).)"
  },
  {
    "id": 316,
    "text": "ناول ”ٹیڑھی لکیر“ کس کی تصنیف ہے؟",
    "options": [
      "قرۃ العین حیدر",
      "خدیجہ مستور",
      "عصمت چغتائی",
      "جمیلہ ہاشمی"
    ],
    "correct": "عصمت چغتائی",
    "explanation": "”ٹیڑھی لکیر“ عصمت چغتائی کا مشہور اور نفسیاتی ناول ہے جس کا مرکزی کردار 'شمن' ہے۔ یہ ناول ایک لڑکی کی باغیانہ زندگی اور نفسیاتی کشمکش کی عکاسی کرتا ہے۔\n('Terhi Lakeer' is a famous psychological novel by Ismat Chughtai, whose main character is 'Shamman'. The novel depicts the rebellious life and psychological conflicts of a girl.)"
  },
  {
    "id": 317,
    "text": "وہ مرکب جو دو اسموں کو ملائے اور ان میں ’اور‘، ’و‘ یا ’پھر‘ کا معنی پایا جائے، کیا کہلاتا ہے؟",
    "options": [
      "مرکب اضافی",
      "مرکب توصیفی",
      "مرکب عطفی",
      "مرکب امتزاجی"
    ],
    "correct": "مرکب عطفی",
    "explanation": "مرکب عطفی (Conjunctive Phrase) وہ مرکب ہے جس میں دو اسموں کو حروفِ عطف (جیسے اور، و) کی مدد سے جوڑا جاتا ہے۔ مثلاً: شب و روز، میز اور کرسی۔\n(A 'Murakkab-e-Atfi' is a phrase where two nouns are joined by a conjunction (like 'aur', 'wa'). For example: shab-o-roz (night and day), mez aur kursi (table and chair).)"
  },
  {
    "id": 318,
    "text": "وہ کلمہ جس سے کسی کام کا کرنا، ہونا یا سہنا زمانے کے تعلق کے ساتھ ظاہر ہو، اسے کہتے ہیں:",
    "options": [
      "اسم",
      "فعل",
      "حرف",
      "ضمیر"
    ],
    "correct": "فعل",
    "explanation": "فعل (Verb) وہ کلمہ ہے جو کسی کام کے ہونے کو زمانے (ماضی، حال، مستقبل) کے ساتھ ظاہر کرتا ہے۔ مثلاً: آیا، جاتا ہے، لکھے گا۔\n(A 'Fe'l' (Verb) is a word that denotes the occurrence of an action in relation to time (past, present, future). For example: aaya (came), jaata hai (goes), likhega (will write).)"
  },
  {
    "id": 319,
    "text": "”خدا کی بستی“ کس کا مشہور ناول ہے؟",
    "options": [
      "شوکت صدیقی",
      "عبداللہ حسین",
      "انتظار حسین",
      "اشفاق احمد"
    ],
    "correct": "شوکت صدیقی",
    "explanation": "”خدا کی بستی“ شوکت صدیقی کا ایک شہرہ آفاق ناول ہے جو معاشرتی مسائل، غربت اور شہری زندگی کی تلخیوں کی حقیقت پسندانہ عکاسی کرتا ہے۔\n('Khuda ki Basti' is a world-renowned novel by Shaukat Siddiqui that realistically portrays social problems, poverty, and the harsh realities of urban life.)"
  },
  {
    "id": 320,
    "text": "علمِ عروض میں وتد کے کتنے اقسام ہیں؟",
    "options": [
      "دو",
      "تین",
      "چار",
      "پانچ"
    ],
    "correct": "دو",
    "explanation": "علم عروض میں وتد کے دو اقسام ہیں: ۱۔ وتدِ مجموع (جس میں دو حرف متحرک اور تیسرا ساکن ہو، جیسے 'چَمَن') ۲۔ وتدِ مفروق (جس میں پہلا اور تیسرا حرف متحرک اور درمیانی ساکن ہو، جیسے 'کَل کا')۔\n(In prosody, there are two types of 'Watad': 1. Watad-e-Majmu' (two consecutive moving letters followed by a stationary one). 2. Watad-e-Mafruq (a moving letter, a stationary one, and then another moving letter).)"
  },
  {
    "id": 321,
    "text": "’راجندر سنگھ بیدی‘ کا پہلا افسانوی مجموعہ کونسا ہے؟",
    "options": [
      "گرہن",
      "کوکھ جلی",
      "اپنے دکھ مجھے دے دو",
      "دانہ و دام"
    ],
    "correct": "دانہ و دام",
    "explanation": "’دانہ و دام‘ راجندر سنگھ بیدی کے افسانوں کا پہلا مجموعہ ہے جو 1936 میں شائع ہوا۔ اس میں ان کا مشہور افسانہ 'گرم کوٹ' بھی شامل ہے۔\n('Dana-o-Daam' is the first collection of short stories by Rajinder Singh Bedi, published in 1936. It also includes his famous story 'Garam Kot'.)"
  },
  {
    "id": 322,
    "text": "وہ الفاظ جو بناوٹ کے لحاظ سے نہ مفرد ہوں نہ مرکب، بلکہ کسی مرکب جملے سے بگڑ کر بنے ہوں، کیا کہلاتے ہیں؟",
    "options": [
      "اسم مشتق",
      "اسم جامد",
      "مرکب تام",
      "مرکب ناقص"
    ],
    "correct": "اسم جامد",
    "explanation": "اسم جامد (Primary Noun) وہ اسم ہے جو نہ تو خود کسی کلمے سے نکلا ہو اور نہ اس سے کوئی دوسرا کلمہ نکلے۔ یہ اپنی ذات میں خود ایک مکمل لفظ ہوتا ہے۔ جیسے: میز، کرسی، پتھر۔ سوال کی تعریف اسم جامد کی ایک قسم 'اسم صوت' یا مخصوص ناموں پر صادق آسکتی ہے مگر وسیع تر معنی میں یہ جامد ہی ہے۔\n(Ism-e-Jamid is a noun that is neither derived from another word nor gives rise to other words. It is a primary word in itself, e.g., table, chair, stone. The question's definition might lean towards specific types, but the broadest category is Jamid.)"
  },
  {
    "id": 323,
    "text": "”آوارہ گرد کی ڈائری“ کس کا سفر نامہ ہے؟",
    "options": [
      "مستنصر حسین تارڑ",
      "ابن انشاء",
      "عطاء الحق قاسمی",
      "شفیق الرحمن"
    ],
    "correct": "ابن انشاء",
    "explanation": "”آوارہ گرد کی ڈائری“ ابن انشاء کا لکھا ہوا ایک سفرنامہ ہے، جو ان کے مخصوص مزاحیہ اور شگفتہ اندازِ تحریر کی عکاسی کرتا ہے۔\n('Awara Gard ki Diary' is a travelogue written by Ibn-e-Insha, reflecting his unique humorous and light-hearted style.)"
  },
  {
    "id": 324,
    "text": "علم بیان میں ”مجازِ مرسل“ کی کیا تعریف ہے؟",
    "options": [
      "ایک چیز کو دوسری چیز جیسا قرار دینا",
      "کسی لفظ کو حقیقی معنوں کی بجائے مجازی معنوں میں استعمال کرنا بغیر تشبیہ کے تعلق کے",
      "کسی تاریخی واقعے کی طرف اشارہ کرنا",
      "کلام میں متضاد الفاظ لانا"
    ],
    "correct": "کسی لفظ کو حقیقی معنوں کی بجائے مجازی معنوں میں استعمال کرنا بغیر تشبیہ کے تعلق کے",
    "explanation": "مجازِ مرسل (Metonymy) میں لفظ اپنے حقیقی معنوں کی بجائے مجازی معنوں میں استعمال ہوتا ہے لیکن ان دونوں معنوں میں تشبیہ کا تعلق نہیں ہوتا بلکہ کوئی اور تعلق (جیسے جز کہہ کر کل مراد لینا) ہوتا ہے۔\n(In Majaz-e-Mursal (Metonymy), a word is used in its figurative sense instead of its real sense, but the relationship between the two meanings is not one of similitude but some other relation (like part for whole).)"
  },
  {
    "id": 325,
    "text": "اردو کا پہلا اخبار کونسا تھا؟",
    "options": [
      "دہلی اردو اخبار",
      "جام جہاں نما",
      "سید الاخبار",
      "کوہِ نور"
    ],
    "correct": "جام جہاں نما",
    "explanation": "”جامِ جہاں نما“ کلکتہ سے 1822 میں جاری ہوا اور اسے اردو کا پہلا اخبار تسلیم کیا جاتا ہے۔ شروع میں یہ فارسی میں تھا لیکن جلد ہی اس کا اردو ضمیمہ بھی شائع ہونے لگا۔\n('Jam-e-Jahan Numa', started from Calcutta in 1822, is considered the first Urdu newspaper. Initially, it was in Persian, but an Urdu supplement was soon added.)"
  },
  {
    "id": 326,
    "text": "وہ فعل جس میں کام کا اثر فاعل سے گزر کر دو مفعولوں تک پہنچے، کیا کہلاتا ہے؟",
    "options": [
      "فعل متعدی",
      "فعل لازم",
      "فعل متعدی المتعدی",
      "فعل ناقص"
    ],
    "correct": "فعل متعدی المتعدی",
    "explanation": "فعل متعدی المتعدی (Doubly Transitive Verb) وہ فعل ہے جسے اپنا مفہوم مکمل کرنے کے لیے دو مفعولوں کی ضرورت ہوتی ہے۔ مثلاً: استاد نے شاگرد کو کتاب پڑھائی۔\n(A 'Fe'l-e-Muta'addi al-Muta'addi' (Doubly Transitive Verb) is a verb that requires two objects to complete its meaning. For example: 'Ustad ne shagird ko kitab parhai' (The teacher taught the book to the student).)"
  },
  {
    "id": 327,
    "text": "”اداس نسلیں“ کس کا مشہور ناول ہے؟",
    "options": [
      "شوکت صدیقی",
      "عبداللہ حسین",
      "انتظار حسین",
      "بانو قدسیہ"
    ],
    "correct": "عبداللہ حسین",
    "explanation": "”اداس نسلیں“ عبداللہ حسین کا شاہکار ناول ہے جس میں برصغیر کی تقسیم کے پس منظر میں تین نسلوں کی کہانی بیان کی گئی ہے۔ اسے آدم جی ادبی انعام بھی ملا۔\n('Udas Naslein' is the masterpiece novel by Abdullah Hussain, which narrates the story of three generations against the backdrop of the partition of the subcontinent. It also won the Adamjee Literary Award.)"
  },
  {
    "id": 328,
    "text": "”پریم پچیسی“ اور ”پریم بتیسی“ کس کے افسانوی مجموعے ہیں؟",
    "options": [
      "کرشن چندر",
      "بیدی",
      "منٹو",
      "پریم چند"
    ],
    "correct": "پریم چند",
    "explanation": "یہ دونوں منشی پریم چند کے ابتدائی دور کے افسانوں کے مجموعے ہیں، جن میں ان کی دیہی زندگی کی عکاسی اور اصلاحی نقطہ نظر نمایاں ہے۔\n(These are both collections of short stories from Munshi Premchand's early period, in which his depiction of rural life and reformist perspective are prominent.)"
  },
  {
    "id": 329,
    "text": "جملے میں کسی لفظ کی وضاحت کے لیے جو جملہ یا لفظ لایا جاتا ہے، اسے کن علامتوں میں لکھا جاتا ہے؟",
    "options": [
      "واوین ”“",
      "خط وحدانی -",
      "قوسین ( )",
      "رابطہ :"
    ],
    "correct": "قوسین ( )",
    "explanation": "قوسین یا بریکٹ ( ) کا استعمال جملہ معترضہ کے لیے کیا جاتا ہے، یعنی ایسا جملہ جو اصل عبارت کے بیچ میں وضاحت یا اضافی معلومات کے لیے آئے۔\n(Parentheses or Brackets ( ) are used for a parenthetical clause, which is a phrase inserted into the main sentence for explanation or additional information.)"
  },
  {
    "id": 330,
    "text": "مثنوی ”گلزارِ نسیم“ کے شاعر کون ہیں؟",
    "options": [
      "میر حسن",
      "دیا شنکر نسیم",
      "نواب مرزا شوق",
      "مومن خان مومن"
    ],
    "correct": "دیا شنکر نسیم",
    "explanation": "”گلزارِ نسیم“ پنڈت دیا شنکر نسیم لکھنوی کی مشہور مثنوی ہے جو قصۂ گل بکاولی پر مبنی ہے۔ یہ اپنی زبان کی برجستگی اور اختصار کے لیے مشہور ہے۔\n('Gulzar-e-Naseem' is a famous masnavi by Pandit Daya Shankar Naseem of Lucknow, based on the story of Gul Bakawali. It is known for its linguistic spontaneity and conciseness.)"
  },
  {
    "id": 331,
    "text": "وہ الفاظ جو ایک ہی مخرج سے نکلتے ہیں اور آواز میں یکساں ہوتے ہیں لیکن معنی اور املا میں مختلف ہوں، کیا کہلاتے ہیں؟",
    "options": [
      "مترادف الفاظ",
      "متضاد الفاظ",
      "ہم صوت الفاظ",
      "سابقے اور لاحقے"
    ],
    "correct": "ہم صوت الفاظ",
    "explanation": "ہم صوت الفاظ (Homophones) وہ الفاظ ہیں جن کا تلفظ ایک جیسا ہوتا ہے لیکن ان کے معنی اور اکثر املا مختلف ہوتے ہیں۔ مثلاً: عام (پھل) اور عام (معمولی)؛ عرض (چوڑائی) اور ارض (زمین)۔\n(Homophones are words that are pronounced the same but differ in meaning and often in spelling. For example: 'aam' (mango) and 'aam' (common); 'arz' (width) and 'arz' (earth).)"
  },
  {
    "id": 332,
    "text": "”دلی کی چند عجیب ہستیاں“ کس کی تصنیف ہے؟",
    "options": [
      "اشرف صبوحی",
      "خواجہ حسن نظامی",
      "مرزا فرحت اللہ بیگ",
      "مولوی عبدالحق"
    ],
    "correct": "اشرف صبوحی",
    "explanation": "یہ اشرف صبوحی کی کتاب ہے جس میں انہوں نے دہلی کے دلچسپ اور منفرد کرداروں کے خاکے لکھے ہیں، جو دہلی کی پرانی تہذیب کی عکاسی کرتے ہیں۔\n(This is a book by Ashraf Sabuhi in which he has written sketches of interesting and unique characters of Delhi, reflecting the old culture of the city.)"
  },
  {
    "id": 333,
    "text": "جس فعل کا فاعل کوئی غیر جاندار اسم ہو، وہ قواعد کی رو سے کیا کہلاتا ہے؟",
    "options": [
      "فعل حقیقی",
      "فعل مجازی",
      "فعل ناقص",
      "فعل تام"
    ],
    "correct": "فعل مجازی",
    "explanation": "جب فعل کو اس کے غیر حقیقی فاعل (جو جاندار نہ ہو) کی طرف منسوب کیا جائے تو اسے فعل مجازی کہتے ہیں۔ مثلاً: ”گاڑی چلتی ہے“۔ یہاں چلنے کا کام دراصل ڈرائیور کرتا ہے، گاڑی خود نہیں۔\n(When a verb is attributed to its non-real (non-living) subject, it is called a metaphorical verb. For example: 'Gaari chalti hai' (The car runs). Here, the act of running is actually done by the driver, not the car itself.)"
  },
  {
    "id": 334,
    "text": "”مقدمہ شعر و شاعری“ کا موضوع کیا ہے؟",
    "options": [
      "سوانح نگاری",
      "تاریخ",
      "شاعری پر تنقید",
      "داستان گوئی"
    ],
    "correct": "شاعری پر تنقید",
    "explanation": "”مقدمہ شعر و شاعری“ الطاف حسین حالی کی کتاب ہے جسے اردو کی پہلی باقاعدہ تنقیدی کتاب سمجھا جاتا ہے۔ اس میں حالی نے شاعری کے اصولوں اور اس کی اصلاح پر بحث کی ہے۔\n('Muqaddama-e-Sher-o-Shayari' by Altaf Hussain Hali is considered the first formal book of criticism in Urdu. In it, Hali discussed the principles of poetry and its reform.)"
  },
  {
    "id": 335,
    "text": "کسی لفظ کو چھوٹا کرکے بیان کرنا کیا کہلاتا ہے؟",
    "options": [
      "اسم مکبر",
      "اسم آلہ",
      "اسم مصغر",
      "اسم صوت"
    ],
    "correct": "اسم مصغر",
    "explanation": "اسم مصغر (Diminutive Noun) وہ اسم ہے جو کسی چیز کا چھوٹا پن ظاہر کرے۔ مثلاً: باغ سے باغیچہ، صندوق سے صندوقچی، بھائی سے بھیا۔\n(Ism-e-Musaghghar (Diminutive Noun) is a noun that denotes the smallness of something. For example: from 'bagh' (garden) to 'baghicha' (small garden), from 'sanduq' (box) to 'sanduqchi' (small box).)"
  },
  {
    "id": 336,
    "text": "”انجمن پنجاب“ کا قیام کہاں عمل میں آیا؟",
    "options": [
      "دہلی",
      "لکھنؤ",
      "لاہور",
      "علی گڑھ"
    ],
    "correct": "لاہور",
    "explanation": "انجمن پنجاب لاہور میں 1865 میں قائم ہوئی۔ اس نے جدید اردو نظم کی بنیاد ڈالی اور موضوعاتی مشاعروں کی روایت شروع کی، جس میں آزاد اور حالی نے اہم کردار ادا کیا۔\n(Anjuman-e-Punjab was established in Lahore in 1865. It laid the foundation of modern Urdu poetry and started the tradition of thematic mushairas, in which Azad and Hali played a significant role.)"
  },
  {
    "id": 337,
    "text": "وہ جملہ جس میں مسند اور مسند الیہ کے علاوہ مفعول بھی ہو، کیا کہلاتا ہے؟",
    "options": [
      "جملہ فعلیہ",
      "جملہ اسمیہ",
      "جملہ شرطیہ",
      "جملہ انشائیہ"
    ],
    "correct": "جملہ فعلیہ",
    "explanation": "جملہ فعلیہ (Verbal Sentence) وہ جملہ ہے جس کی بنیاد فعل پر ہوتی ہے اور اس میں فاعل (مسند الیہ)، فعل (مسند) اور بعض اوقات مفعول بھی ہوتا ہے۔ جملہ اسمیہ میں فعل کی جگہ اسم ہوتا ہے۔\n(A 'Jumla-e-Fe'liya' (Verbal Sentence) is a sentence based on a verb, containing a subject (musnad ilaih), a verb (musnad), and sometimes an object. An Ismiya sentence has a noun instead of a verb as its predicate.)"
  },
  {
    "id": 338,
    "text": "افسانہ ”ٹھنڈا گوشت“ کس کا لکھا ہوا ہے؟",
    "options": [
      "عصمت چغتائی",
      "راجندر سنگھ بیدی",
      "سعادت حسن منٹو",
      "کرشن چندر"
    ],
    "correct": "سعادت حسن منٹو",
    "explanation": "”ٹھنڈا گوشت“ سعادت حسن منٹو کا ایک متنازعہ اور مشہور افسانہ ہے جو تقسیمِ ہند کے فسادات کے پس منظر میں لکھا گیا ہے۔ اس پر فحاشی کا مقدمہ بھی چلا تھا۔\n('Thanda Gosht' is a controversial and famous short story by Saadat Hasan Manto, written against the backdrop of the Partition riots. A case of obscenity was also filed against it.)"
  },
  {
    "id": 339,
    "text": "وہ لفظ جو کسی چیز کی بڑائی یا عظمت کو ظاہر کرے، کیا کہلاتا ہے؟",
    "options": [
      "اسم مصغر",
      "اسم مکبر",
      "اسم ظرف",
      "اسم آلہ"
    ],
    "correct": "اسم مکبر",
    "explanation": "اسم مکبر (Magnificative Noun) وہ اسم ہے جو کسی چیز کی بڑائی یا شان و شوکت کو ظاہر کرے۔ مثلاً: بات سے بتنگڑ، شاہ سے شہنشاہ، راہ سے شاہراہ۔\n(Ism-e-Mukabbar is a noun that expresses the greatness or grandeur of something. For example: from 'baat' (matter) to 'batangar' (big issue), from 'shah' (king) to 'shehenshah' (emperor).)"
  },
  {
    "id": 340,
    "text": "فورٹ ولیم کالج کا قیام کب اور کہاں عمل میں آیا؟",
    "options": [
      "1803، دہلی میں",
      "1857، لکھنؤ میں",
      "1800، کلکتہ میں",
      "1790، مدراس میں"
    ],
    "correct": "1800، کلکتہ میں",
    "explanation": "فورٹ ولیم کالج کی بنیاد 1800 میں لارڈ ویلزلی نے کلکتہ میں رکھی۔ اس کا مقصد انگریز افسران کو ہندوستانی زبانوں اور تہذیب سے روشناس کرانا تھا۔ اس نے اردو نثر کے ارتقا میں اہم کردار ادا کیا۔\n(Fort William College was founded in 1800 in Calcutta by Lord Wellesley. Its purpose was to acquaint British officers with Indian languages and culture. It played a vital role in the development of Urdu prose.)"
  },
  {
    "id": 341,
    "text": "’آتش‘ کس مشہور شاعر کا تخلص تھا؟",
    "options": [
      "حیدر علی آتش",
      "غلام ہمدانی مصحفی",
      "امام بخش ناسخ",
      "بہادر شاہ ظفر"
    ],
    "correct": "حیدر علی آتش",
    "explanation": "خواجہ حیدر علی آتش لکھنؤ دبستانِ شاعری کے ایک عظیم شاعر تھے۔ ’آتش‘ ان کا تخلص تھا۔ وہ اپنی قلندرانہ طبیعت اور آتش بیانی کے لیے مشہور تھے۔\n(Khwaja Haidar Ali Atish was a great poet of the Lucknow school of poetry. 'Atish' was his pen name. He was famous for his carefree nature and fiery expression.)"
  },
  {
    "id": 342,
    "text": "وہ جملہ جس میں کسی کام کے کرنے یا نہ کرنے کا حکم پایا جائے، کیا کہلاتا ہے؟",
    "options": [
      "جملہ خبریہ",
      "جملہ انشائیہ",
      "جملہ اسمیہ",
      "جملہ شرطیہ"
    ],
    "correct": "جملہ انشائیہ",
    "explanation": "جملہ انشائیہ وہ جملہ ہوتا ہے جس میں خبر دینے کے بجائے کوئی حکم، سوال، تمنا یا ندا وغیرہ پائی جائے۔ حکم اور نہی (ممانعت) اسی کی قسمیں ہیں۔ مثلاً: ”یہاں آؤ“، ”جھوٹ مت بولو“۔\n(A 'Jumla-e-Inshaiya' is a sentence that, instead of giving information, contains a command, question, wish, or address. Command (amr) and prohibition (nahi) are its types. For example: 'Yahan aao' (Come here), 'Jhoot mat bolo' (Do not tell a lie).)"
  },
  {
    "id": 343,
    "text": "”رانی کیتکی کی کہانی“ کے مصنف کون ہیں؟",
    "options": [
      "میر امن",
      "للو لال جی",
      "انشاء اللہ خان انشاء",
      "حیدر بخش حیدری"
    ],
    "correct": "انشاء اللہ خان انشاء",
    "explanation": "”رانی کیتکی کی کہانی“ انشاء اللہ خان انشاء کی لکھی ہوئی ایک داستان ہے۔ اس کی خصوصیت یہ ہے کہ اس میں عربی اور فارسی کا ایک بھی لفظ استعمال نہیں کیا گیا ہے، اور یہ خالص ہندوستانی زبان میں لکھی گئی ہے۔\n('Rani Ketki ki Kahani' is a Dastan written by Insha Allah Khan Insha. Its specialty is that not a single Arabic or Persian word is used in it, and it is written in pure Hindustani language.)"
  },
  {
    "id": 344,
    "text": "لفظ 'ماہ' کا مترادف کیا ہے؟",
    "options": [
      "سورج",
      "ستارہ",
      "قمر",
      "آسمان"
    ],
    "correct": "قمر",
    "explanation": "’ماہ‘ فارسی زبان میں چاند کو کہتے ہیں۔ ’قمر‘ عربی زبان کا لفظ ہے اور اس کا مطلب بھی چاند ہے۔ لہٰذا یہ دونوں مترادف ہیں۔\n('Maah' is the Persian word for the moon. 'Qamar' is the Arabic word, which also means the moon. Therefore, they are synonyms.)"
  },
  {
    "id": 345,
    "text": "شاعری میں ایک ہی لفظ کو اس طرح استعمال کرنا کہ اس کے دونوں معنی مراد لیے جا سکیں، کونسی صنعت ہے؟",
    "options": [
      "صنعت ایہام",
      "صنعت تجنیس",
      "صنعت تضاد",
      "صنعت ذو معنیین"
    ],
    "correct": "صنعت ذو معنیین",
    "explanation": "ایہام میں ایک معنی قریب اور دوسرا بعید ہوتا ہے اور مراد بعید ہوتی ہے۔ لیکن صنعتِ ذو معنیین میں لفظ کے دونوں معنی یکساں طور پر مراد لیے جا سکتے ہیں اور دونوں سے شعر کا لطف بڑھتا ہے۔\n(In Iham, one meaning is obvious and the other is intended. But in 'San'at-e-Zu Ma'nain', both meanings of the word can be equally applied, and both enhance the beauty of the verse.)"
  },
  {
    "id": 346,
    "text": "جس مصرعے یا شعر کا وزن بحر کے مطابق نہ ہو، اسے کیا کہتے ہیں؟",
    "options": [
      "موزوں",
      "مقفیٰ",
      "خارج از بحر",
      "مردف"
    ],
    "correct": "خارج از بحر",
    "explanation": "علم عروض کی اصطلاح میں، جو شعر یا مصرع مقررہ بحر کے وزن پر پورا نہ اترے، اسے 'خارج از بحر' یا 'بے وزن' کہا جاتا ہے۔\n(In the terminology of prosody, a couplet or line that does not fit the meter of the prescribed 'bahr' is called 'kharaj-az-bahr' (out of meter) or 'be-wazn' (unmetered).)"
  },
  {
    "id": 347,
    "text": "”چراغ تلے“ کس مزاح نگار کی تصنیف ہے؟",
    "options": [
      "پطرس بخاری",
      "شفیق الرحمن",
      "مشتاق احمد یوسفی",
      "کنہیا لال کپور"
    ],
    "correct": "مشتاق احمد یوسفی",
    "explanation": "”چراغ تلے“ مشتاق احمد یوسفی کی پہلی اور بہت مشہور مزاحیہ کتاب ہے، جو 1961 میں شائع ہوئی۔ اس کا مقدمہ اردو مزاح میں ایک اہم مقام رکھتا ہے۔\n('Chiragh Talay' is the first and very famous humorous book by Mushtaq Ahmed Yousufi, published in 1961. Its preface holds an important place in Urdu humor.)"
  },
  {
    "id": 348,
    "text": "لفظ 'عالم' کی جمع کیا ہے؟",
    "options": [
      "عالموں",
      "علم",
      "عالمین",
      "معلوم"
    ],
    "correct": "عالمین",
    "explanation": "عربی قواعد کے مطابق 'عالَم' (دنیا/جہان) کی جمع 'عالَمین' ہے۔ جیسے قرآن مجید میں 'رب العالمین' (تمام جہانوں کا رب) استعمال ہوا ہے۔\n(According to Arabic grammar, the plural of 'aalam' (world/universe) is 'aalameen'. As used in the Holy Quran, 'Rabb-ul-Aalameen' (Lord of all worlds).)"
  },
  {
    "id": 349,
    "text": "وہ کلمہ جو کسی کام کے ہونے یا کرنے کا طریقہ یا کیفیت بتائے، کیا کہلاتا ہے؟",
    "options": [
      "صفت",
      "فعل",
      "اسم حالیہ",
      "متعلق فعل"
    ],
    "correct": "متعلق فعل",
    "explanation": "متعلق فعل (Adverb) وہ کلمہ ہے جو فعل کے معنی کی وضاحت کرتا ہے اور بتاتا ہے کہ کام کب، کہاں، کیسے یا کتنی بار ہوا۔ مثلاً: وہ تیز دوڑا۔ یہاں 'تیز' متعلق فعل ہے۔\n(An 'Adverb' is a word that modifies the meaning of a verb, indicating when, where, how, or how often an action occurred. For example, in 'Woh tez daura' (He ran fast), 'tez' is the adverb.)"
  },
  {
    "id": 350,
    "text": "”شعلہ و شبنم“ کس شاعر کا شعری مجموعہ ہے؟",
    "options": [
      "فیض احمد فیض",
      "جوش ملیح آبادی",
      "فراق گورکھپوری",
      "اختر شیرانی"
    ],
    "correct": "جوش ملیح آبادی",
    "explanation": "”شعلہ و شبنم“ جوش ملیح آبادی کے مشہور ترین شعری مجموعوں میں سے ایک ہے، جس میں ان کی انقلابی اور رومانی نظمیں شامل ہیں۔\n('Shola-o-Shabnam' is one of Josh Malihabadi's most famous poetry collections, which includes his revolutionary and romantic poems.)"
  },
  {
    "id": 351,
    "text": "وہ کہانی جس کی بنیاد جنوں، پریوں اور مافوق الفطرت عناصر پر ہو، کیا کہلاتی ہے؟",
    "options": [
      "ناول",
      "افسانہ",
      "داستان",
      "ڈراما"
    ],
    "correct": "داستان",
    "explanation": "داستان (Tale/Fantasy) ایک طویل قصہ ہوتا ہے جس میں عموماً مافوق الفطرت کردار (جن، پری، دیو) اور طلسماتی واقعات بیان کیے جاتے ہیں۔ اس کا پلاٹ پیچیدہ اور تہہ در تہہ ہوتا ہے۔\n(A 'Dastan' is a long narrative that usually features supernatural characters (genies, fairies, giants) and magical events. Its plot is complex and layered.)"
  },
  {
    "id": 352,
    "text": "”دلی کا نذیری خاکہ“ کس نے لکھا؟",
    "options": [
      "مولوی عبد الحق",
      "مرزا فرحت اللہ بیگ",
      "خواجہ حسن نظامی",
      "رشید احمد صدیقی"
    ],
    "correct": "مرزا فرحت اللہ بیگ",
    "explanation": "”ڈپٹی نذیر احمد کی کہانی، کچھ ان کی کچھ میری زبانی“ کو اردو کا پہلا باقاعدہ خاکہ تسلیم کیا جاتا ہے۔ اسے مرزا فرحت اللہ بیگ نے اپنے استاد نذیر احمد پر لکھا تھا۔\n('Deputy Nazir Ahmad ki Kahani, Kuch Unki Kuch Meri Zabani' is considered the first formal sketch in Urdu. It was written by Mirza Farhatullah Baig about his teacher, Nazir Ahmad.)"
  },
  {
    "id": 353,
    "text": "”آنگن“ کس کا مشہور ناول ہے؟",
    "options": [
      "عصمت چغتائی",
      "قرۃ العین حیدر",
      "خدیجہ مستور",
      "بانو قدسیہ"
    ],
    "correct": "خدیجہ مستور",
    "explanation": "”آنگن“ خدیجہ مستور کا ایک مشہور ناول ہے جو تحریکِ آزادی اور تقسیمِ ہند کے پس منظر میں ایک خاندان کے بکھرنے کی کہانی بیان کرتا ہے۔ اس پر آدم جی انعام بھی ملا۔\n('Aangan' is a famous novel by Khadija Mastoor that narrates the story of a disintegrating family against the backdrop of the freedom movement and the partition of India. It also won the Adamjee Award.)"
  },
  {
    "id": 354,
    "text": "حروف ’ف، ق، و، م‘ کا مخرج کیا ہے؟",
    "options": [
      "حلقی (حلق)",
      "لہاتیہ (کوّا)",
      "خیشومی (ناک)",
      "شفوی (ہونٹ)"
    ],
    "correct": "شفوی (ہونٹ)",
    "explanation": "یہ حروف ہونٹوں کی مدد سے ادا کیے جاتے ہیں، اس لیے علم مخارج (Phonetics) میں انہیں حروفِ شفوی کہا جاتا ہے۔ 'ب' بھی اسی زمرے میں آتا ہے۔\n(These letters are articulated with the help of the lips, so in phonetics, they are called 'Huroof-e-Shafawi' (labial letters). 'ب' also falls into this category.)"
  },
  {
    "id": 355,
    "text": "وہ اسم جو کسی مصدر سے بنے اور اس چیز کو ظاہر کرے جس پر کام واقع ہوا ہو، کیا کہلاتا ہے؟",
    "options": [
      "اسم فاعل",
      "اسم مفعول",
      "اسم حالیہ",
      "اسم معاوضہ"
    ],
    "correct": "اسم مفعول",
    "explanation": "اسم مفعول (Past Participle Noun) وہ اسم ہے جو مصدر سے بنے اور اس ذات یا شے کو بتائے جس پر فعل واقع ہوا ہو۔ مثلاً 'لکھنا' سے 'لکھا ہوا'، 'مظلوم' (جس پر ظلم ہوا)۔\n(Ism-e-Maf'ool is a noun derived from a verb root that indicates the person or thing upon which the action was performed. For example, from 'likhna' (to write), 'likha hua' (written); 'mazloom' (the one who was oppressed).)"
  },
  {
    "id": 356,
    "text": "”غبارِ خاطر“ کا تعلق ادب کی کس صنف سے ہے؟",
    "options": [
      "ناول",
      "سفرنامہ",
      "خطوط",
      "خودنوشت"
    ],
    "correct": "خطوط",
    "explanation": "”غبارِ خاطر“ مولانا ابوالکلام آزاد کے ان خطوط کا مجموعہ ہے جو انہوں نے قلعہ احمد نگر میں اپنی اسیری کے دوران لکھے تھے۔ یہ خطوط اردو نثر کا ایک اعلیٰ نمونہ ہیں۔\n('Ghubar-e-Khatir' is a collection of letters by Maulana Abul Kalam Azad, which he wrote during his imprisonment in Ahmednagar Fort. These letters are a fine example of Urdu prose.)"
  },
  {
    "id": 357,
    "text": "علم الاعداد میں لفظ ”محمد“ کی قیمت کیا ہے؟",
    "options": [
      "40",
      "90",
      "92",
      "132"
    ],
    "correct": "92",
    "explanation": "علم الاعداد (ابجد) میں حروف کی قیمتیں یہ ہیں: م (40) + ح (8) + م (40) + د (4)۔ ان کا مجموعہ 92 ہوتا ہے۔\n(In Abjad numerology, the values of the letters are: Meem (40) + He (8) + Meem (40) + Dal (4). Their sum is 92.)"
  },
  {
    "id": 358,
    "text": "وہ صفت جس میں کسی دوسری چیز سے نسبت یا لگاؤ ظاہر ہو، کیا کہلاتی ہے؟",
    "options": [
      "صفت ذاتی",
      "صفت عددی",
      "صفت مقداری",
      "صفت نسبتی"
    ],
    "correct": "صفت نسبتی",
    "explanation": "صفت نسبتی (Relative Adjective) وہ صفت ہے جو کسی اسم کا کسی دوسری چیز، شخص یا جگہ سے تعلق ظاہر کرے۔ مثلاً: لاہور سے لاہوری، پاکستان سے پاکستانی۔\n(A 'Sifat-e-Nisbati' (Relative Adjective) is an adjective that shows a noun's relation to another thing, person, or place. For example: from 'Lahore', 'Lahori'; from 'Pakistan', 'Pakistani'.)"
  },
  {
    "id": 359,
    "text": "”سرسید اور ان کے نامور رفقاء“ کس کی تصنیف ہے؟",
    "options": [
      "الطاف حسین حالی",
      "شبلی نعمانی",
      "سید سلیمان ندوی",
      "مولوی عبدالحق"
    ],
    "correct": "مولوی عبدالحق",
    "explanation": "یہ کتاب بابائے اردو مولوی عبدالحق نے لکھی ہے، جس میں انہوں نے سرسید احمد خان اور ان کے ساتھیوں (حالی، شبلی، نذیر احمد وغیرہ) کی ادبی اور قومی خدمات پر روشنی ڈالی ہے۔\n(This book was written by 'Baba-e-Urdu' Maulvi Abdul Haq, in which he highlighted the literary and national services of Sir Syed Ahmed Khan and his companions (Hali, Shibli, Nazir Ahmad, etc.).)"
  },
  {
    "id": 360,
    "text": "”راجہ گدھ“ کس کا مشہور ناول ہے؟",
    "options": [
      "عبداللہ حسین",
      "اشفاق احمد",
      "بانو قدسیہ",
      "انتظار حسین"
    ],
    "correct": "بانو قدسیہ",
    "explanation": "”راجہ گدھ“ بانو قدسیہ کا ایک نہایت مشہور اور فکر انگیز ناول ہے جو انسانی نفسیات، محبت اور حلال و حرام کے فلسفے جیسے موضوعات سے بحث کرتا ہے۔\n('Raja Gidh' is a very famous and thought-provoking novel by Bano Qudsia that deals with themes like human psychology, love, and the philosophy of the lawful and forbidden.)"
  }
]

export const urduPaper2Questions = rawUrduPaper2Data.map((q, index) => {
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


export const convertUrduPaper2ToQuestionFormat = (questions: typeof urduPaper2Questions) => {
  return questions.map((q, index) => ({
    id: index + 1,
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
  }));
};
