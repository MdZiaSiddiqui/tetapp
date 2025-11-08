type UrduPaper1RawQuestion = {
  id: number | string;
  text: string;
  options: string[];
  correct: string;
  explanation: string;
};

const rawUrduPaper1Data: UrduPaper1RawQuestion[] = 
[
  {
    "id": 1,
    "text": "اجزا کلام ہیں \n\n TSTET 01 Jun 2024",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correct": "3",
    "explanation": "اردو قواعد کی رو سے کلام کے بنیادی اجزا تین ہیں: اسم (Noun)، فعل (Verb)، اور حرف (Particle)۔ تمام الفاظ इन्हीं تین اقسام میں تقسیم ہوتے ہیں۔ \n (According to Urdu grammar, there are three basic parts of speech: Ism (Noun), Fe'l (Verb), and Harf (Particle). All words are divided into these three categories.)"
  },
  {
    "id": 2,
    "text": "اقبال اس سال پیدا ہوئے۔ \n TSTET 01 Jun 2024",
    "options": [
      "1877ء",
      "1888ء",
      "1886ء",
      "1878ء"
    ],
    "correct": "1877ء",
    "explanation": "شاعر مشرق، علامہ محمد اقبال 9 نومبر 1877ء کو سیالکوٹ (موجودہ پاکستان) میں پیدا ہوئے۔ \n (The Poet of the East, Allama Muhammad Iqbal, was born on November 9, 1877, in Sialkot (present-day Pakistan).)"
  },
  {
    "id": 3,
    "text": "یہ اسم ظرف کی مثال ہے۔ \n TSTET 01 Jun 2024",
    "options": [
      "فوج میں بھرتی ہو جاؤ",
      "کوئی لمحہ ضائع مت کرو",
      "یہ ذہین ہے",
      "تختہ سیاہ پر لکھو"
    ],
    "correct": "تختہ سیاہ پر لکھو",
    "explanation": "اسم ظرف وہ اسم ہے جو کسی جگہ (ظرف مکاں) یا وقت (ظرف زماں) کو ظاہر کرے۔ اس جملے میں 'تختہ سیاہ' کام کرنے کی جگہ کو ظاہر کر رہا ہے، اس لیے یہ اسم ظرف مکاں ہے۔ \n (Ism-e-Zarf is a noun that indicates a place (Zarf-e-Makaan) or time (Zarf-e-Zamaan). In this sentence, 'blackboard' (Takhta-e-Siyah) indicates the place of action, hence it is an Ism-e-Zarf Makaan.)"
  },
  {
    "id": 4,
    "text": "اگر آپ ان الفاظ کو لغت میں تلاش کریں گے تو ذیل میں یہ لفظ پہلے آئے گا۔ \n TSTET 01 Jun 2024",
    "options": [
      "ابتداء",
      "ابن",
      "ابتر",
      "کوئی نہیں"
    ],
    "correct": "ابتر",
    "explanation": "لغت میں الفاظ حروفِ تہجی کی ترتیب سے ہوتے ہیں۔ یہاں تمام الفاظ 'الف' اور 'ب' سے شروع ہوتے ہیں۔ اس کے بعد تیسرے حرف کو دیکھا جائے گا۔ 'ابتر' میں تیسرا حرف 'ت' ہے، جبکہ 'ابن' میں تیسرا حرف 'ن' ہے۔ چونکہ 'ت' حروفِ تہجی میں 'ن' سے پہلے آتا ہے، اس لیے 'ابتر' پہلے آئے گا۔ (نوٹ: کلید میں 'ابتر' کو درست مانا گیا ہے، تاہم معیاری لغات میں 'ابن' پہلے آئے گا کیونکہ 'ن' سے پہلے 'ت' آتا ہے لیکن 'ابن' میں صرف تین حروف ہیں)۔ \n (In a dictionary, words are arranged alphabetically (Huroof-e-Tahajji). Here, all words start with 'Alif' and 'Be'. We then look at the third letter. In 'abtar', the third letter is 'te', while in 'ibn', it's 'noon'. Since 'te' comes before 'noon' in the alphabet, 'abtar' would come first. (Note: The provided key marks 'abtar' as correct, however in standard dictionaries 'ibn' would come first as it has only three letters and the comparison would be between the third letters of the other words).)"
  },
  {
    "id": 5,
    "text": "محاورہ 'سبز باغ دکھانا' کا مطلب ہے۔ \n TSTET 01 Jun 2024",
    "options": [
      "صحیح راستہ بنانا",
      "دھوکا دینا",
      "ہرے بھرے باغ کی سیر کرنا",
      "صحیح راستے پر چلنا"
    ],
    "correct": "دھوکا دینا",
    "explanation": "محاورے 'سبز باغ دکھانا' کا مطلب ہے کسی کو جھوٹی امیدیں دلا کر یا لالچ دے کر فریب دینا یا دھوکا دینا۔ \n (The meaning of the idiom 'sabz bagh dikhana' (literally 'to show a green garden') is to deceive someone by giving them false hopes or temptations.)"
  },
  {
    "id": 6,
    "text": "لفظ 'املاک' جمع ہے اس لفظ کی۔ \n TSTET 01 Jun 2024",
    "options": [
      "مَلک",
      "مُلک",
      "مِلک",
      "کوئی نہیں"
    ],
    "correct": "مِلک",
    "explanation": "لفظ 'املاک' (properties) عربی زبان کا لفظ ہے اور یہ 'مِلک' (property) کی جمع ہے۔ 'مَلک' کی جمع ملائکہ اور 'مُلک' کی جمع ممالک ہوتی ہے۔ \n (The word 'amlaak' (properties) is an Arabic word and is the plural of 'milk' (property). The plural of 'malak' (angel) is 'malaika' and the plural of 'mulk' (country) is 'mamalik'.)"
  },
  {
    "id": 7,
    "text": "یہ قریب المعنی کی مثال ہے۔ \n TSTET 01 Jun 2024",
    "options": [
      "آن بان",
      "رات و دن",
      "کہکشاں",
      "درخشاں"
    ],
    "correct": "آن بان",
    "explanation": "قریب المعنی الفاظ وہ ہوتے ہیں جن کے معنی ایک جیسے یا ملتے جلتے ہوں۔ 'آن' اور 'بان' دونوں الفاظ شان و شوکت، عزت اور وقار کے معنی میں استعمال ہوتے ہیں۔ \n (Near-synonymous words are those that have the same or similar meanings. Both words 'aan' and 'baan' are used to mean glory, honor, and dignity.)"
  },
  {
    "id": 8,
    "text": "..... حکیم خطرہ جان' خالی جگہ کے لیے مناسب لفظ ہے۔ \n TSTET 01 Jun 2024",
    "options": [
      "صحیح",
      "شاہ",
      "جاہل",
      "نیم"
    ],
    "correct": "نیم",
    "explanation": "یہ ایک مشہور ضرب المثل ہے: 'نیم حکیم خطرہ جان'۔ اس کا مطلب ہے کہ کم علم یا نااہل شخص کسی بھی معاملے میں، خاص طور پر طب میں، نقصان دہ ثابت ہو سکتا ہے۔ \n (This is a famous proverb: 'Neem hakeem khatra-e-jaan'. It means that a person with little knowledge or incompetence can be harmful in any matter, especially in medicine.)"
  },
  {
    "id": 9,
    "text": "وضع اصطلاحات علمیہ' کے مصنف ہیں۔ \n TSTET 01 Jun 2024",
    "options": [
      "الطاف حسین",
      "شیر حسین",
      "حامد حسین",
      "وحید الدین سلیم"
    ],
    "correct": "وحید الدین سلیم",
    "explanation": "کتاب 'وضع اصطلاحات' اردو میں علمی اور فنی اصطلاحات سازی کے اصولوں پر ایک اہم تصنیف ہے، جس کے مصنف مولوی وحید الدین سلیم ہیں۔ \n (The book 'Waz-e-Istalahat' is an important work on the principles of scientific and technical terminology in Urdu, authored by Maulvi Waheeduddin Saleem.)"
  },
  {
    "id": 10,
    "text": "پروین شاکر کا تخلص تھا۔ \n TSTET 01 Jun 2024",
    "options": [
      "بینا",
      "ریحانہ",
      "شاکر",
      "آئینہ"
    ],
    "correct": "شاکر",
    "explanation": "پروین شاکر اردو کی مشہور شاعرہ تھیں۔ وہ اپنے نام کا آخری حصہ 'شاکر' ہی بطور تخلص استعمال کرتی تھیں۔ \n (Parveen Shakir was a famous Urdu poet. She used the last part of her name, 'Shakir', as her pen name (takhallus).)"
  },
  {
    "id": 11,
    "text": "علم بیان کی قسمیں ہیں۔ \n TSTET 01 Jun 2024",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correct": "4",
    "explanation": "علم بیان میں کسی بات کو مختلف اور مؤثر انداز میں کہنے کے طریقے زیرِ بحث آتے ہیں۔ اس کی چار قسمیں ہیں: تشبیہ (Simile)، استعارہ (Metaphor)، مجازِ مرسل (Metonymy)، اور کنایہ (Allusion/Irony)۔ \n (Ilm-e-Bayan discusses ways to express something in different and effective ways. It has four types: Tashbeeh (Simile), Isti'ara (Metaphor), Majaz-e-Mursal (Metonymy), and Kinaya (Allusion/Irony).)"
  },
  {
    "id": 12,
    "text": "جب کسی عبارت کی تشریح و توضیح کرنی ہو تو یہ علامت استعمال کرتے ہیں۔ \n TSTET 01 Jun 2024",
    "options": [
      "()",
      ":-",
      ":",
      "۔"
    ],
    "correct": ":",
    "explanation": "علامت ':', جسے رابطہ یا تفصیلیہ कहते हैं, اس وقت استعمال کی جاتی ہے جب کسی جملے یا عبارت کی مزید وضاحت یا تفصیل پیش کرنی ہو۔ \n (The symbol ':', known as Raabta or Tafseeliya (Colon), is used when further explanation or detail of a sentence or phrase is to be provided.)"
  },
  {
    "id": 13,
    "text": "یہ حروف قمری کی مثال ہے۔ \n TSTET 01 Jun 2024",
    "options": [
      "یوم الجمعہ",
      "معین الدین",
      "فضل الرحمن",
      "ملک الشعراء"
    ],
    "correct": "یوم الجمعہ",
    "explanation": "حروفِ قمری وہ حروف ہیں جن سے پہلے 'ال' آئے تو 'لام' کی آواز واضح طور پر ادا کی جاتی ہے، جیسے 'ال' کے بعد 'ج' (جیم)۔ 'یوم الجمعہ' میں 'الجمعہ' میں لام پڑھا جاتا ہے۔ \n (Huroof-e-Qamri (lunar letters) are those letters which, when preceded by 'Al-', the sound of 'Laam' is clearly pronounced, such as 'Jeem' after 'Al-'. In 'Yaum-ul-Jum'ah', the 'Laam' in 'Al-Jum'ah' is pronounced.)"
  },
  {
    "id": 14,
    "text": "حرف 'ق' کے عدد ہیں۔ \n TSTET 01 Jun 2024",
    "options": [
      "50",
      "80",
      "60",
      "100"
    ],
    "correct": "100",
    "explanation": "علم الاعداد (ابجد) میں ہر حرف کی ایک عددی قیمت مقرر ہے۔ اس نظام کے مطابق حرف 'ق' (قاف) کا عدد 100 ہوتا ہے۔ \n (In the Abjad numeral system (Ilm-ul-Adaad), each letter has a numerical value. According to this system, the value of the letter 'Qaaf' (ق) is 100.)"
  },
  {
    "id": 15,
    "text": "اتنی بات ہر شخص جانتا ہے کہ ہماری اردو برج بھاشا سے نکلی ہے' یہ کس کا قول ہے؟ \n TSTET 01 Jun 2024",
    "options": [
      "محمد حسین آزاد",
      "مولانا سلیمان ندوی",
      "محمود شیرانی",
      "مسعود حسین خان"
    ],
    "correct": "محمد حسین آزاد",
    "explanation": "یہ مشہور نظریہ محمد حسین آزاد نے اپنی کتاب 'آبِ حیات' میں پیش کیا تھا، جس میں انہوں نے اردو زبان کے آغاز کو برج بھاشا سے جوڑا تھا۔ \n (This famous theory was presented by Muhammad Hussain Azad in his book 'Aab-e-Hayat', in which he linked the origin of the Urdu language to Braj Bhasha.)"
  },
  {
    "id": 16,
    "text": "بغور مطالعہ (پڑھنا) کا مقصد ہے \n TSTET 01 Jun 2024",
    "options": [
      "لطف حاصل کرنے کے لیے پڑھنا",
      "اہم تفصیلی معلومات حاصل کرنے کے لیے پڑھنا",
      "امتحان کے لیے پڑھنا",
      "کہانی لکھنے کے لیے پڑھنا"
    ],
    "correct": "اہم تفصیلی معلومات حاصل کرنے کے لیے پڑھنا",
    "explanation": "بغور مطالعہ یا گہرا مطالعہ (Intensive Reading) اس وقت کیا جاتا ہے جب مقصد متن سے مخصوص، اہم اور تفصیلی معلومات کو سمجھنا اور اسے ذہن نشین کرنا ہو۔ \n (Intensive Reading is done when the purpose is to understand and retain specific, important, and detailed information from the text.)"
  },
  {
    "id": 17,
    "text": "کھیل کھیل طریقہ تدریس سے طلبا کی \n TSTET 01 Jun 2024",
    "options": [
      "صرف جسمانی ترقی ہوتی ہے",
      "ذہنی ترقی نہیں ہوتی ہے",
      "ذہنی، جسمانی اور جذباتی ترقی ہوتی ہے",
      "زبان کے فروغ کا موقع نہیں ملتا"
    ],
    "correct": "ذہنی، جسمانی اور جذباتی ترقی ہوتی ہے",
    "explanation": "کھیل کے ذریعے تدریس کا طریقہ (Play-way method) بچوں کی ہمہ جہت نشوونما پر مرکوز ہوتا ہے۔ اس سے نہ صرف جسمانی بلکہ ذہنی (مسئلہ حل کرنا، تخلیقی سوچ) اور جذباتی (تعاون، جذبات کا اظہار) ترقی بھی ہوتی ہے۔ \n (The play-way method of teaching focuses on the holistic development of children. It promotes not only physical but also mental (problem-solving, creative thinking) and emotional (cooperation, expression of emotions) development.)"
  },
  {
    "id": 18,
    "text": "تدریسی اشیا کی تیاری اور استعمال کے وقت کس بات کا سب سے زیادہ خیال رکھنا چاہیے؟ \n TSTET 01 Jun 2024",
    "options": [
      "زیادہ سے زیادہ مواد",
      "بچوں کی عمر اور دلچسپی",
      "مختلف قسم کی تدریسی اشیا کا استعمال",
      "آسان زبان کا استعمال"
    ],
    "correct": "بچوں کی عمر اور دلچسپی",
    "explanation": "تدریسی مواد (Teaching-Learning Material) کو مؤثر بنانے کے لیے سب سے اہم اصول یہ ہے کہ وہ طلباء کی عمر، ذہنی سطح اور دلچسپیوں کے مطابق ہو تاکہ وہ آسانی سے سیکھ سکیں۔ \n (The most important principle for making Teaching-Learning Material (TLM) effective is that it should be appropriate for the students' age, mental level, and interests so they can learn easily.)"
  },
  {
    "id": 19,
    "text": "کمرہ جماعت میں تدریس کے لیے جو منصوبہ تیار کیا جاتا ہے اس کو کیا کہتے ہیں؟ \n TSTET 01 Jun 2024",
    "options": [
      "سالانہ منصوبہ",
      "منصوبہ سبق",
      "اکائی منصوبہ",
      "منصوبہ کمرہ جماعت"
    ],
    "correct": "منصوبہ سبق",
    "explanation": "ایک مخصوص مدت (period) کے دوران کمرہ جماعت میں پڑھائے جانے والے موضوعات، سرگرمیوں اور مقاصد کی تفصیلی خاکہ بندی کو 'منصوبہ سبق' (Lesson Plan) کہا جاتا ہے۔ \n (The detailed outline of topics, activities, and objectives to be taught in the classroom during a specific period is called a 'Lesson Plan' (Mansuba-e-Sabaq).)"
  },
  {
    "id": 20,
    "text": "ایک معلم کمرہ جماعت میں طلبا کو اسکول میں استعمال میں لائی جانے والی چیزوں کی فہرست تیار کرنے کو کہتا ہے۔ یہ کس قسم کی جانچ کہلائی جائے گی؟ \n TSTET 01 Jun 2024",
    "options": [
      "تکمیلی جانچ",
      "تشخیصی جانچ",
      "تحصیلی جانچ",
      "تشکیلی جانچ"
    ],
    "correct": "تشکیلی جانچ",
    "explanation": "تشکیلی جانچ (Formative Assessment) تدریس کے عمل کے دوران طلباء کی سیکھنے کی پیشرفت کو جانچنے کے لیے کی جاتی ہے۔ اس سرگرمی کا مقصد یہ دیکھنا ہے کہ طلباء کس حد تک سیکھ رہے ہیں تاکہ تدریسی حکمت عملی کو بہتر بنایا جا سکے۔ \n (Formative Assessment is conducted during the teaching process to monitor students' learning progress. The purpose of this activity is to see how well students are learning so that the teaching strategy can be improved.)"
  },
  {
    "id": 21,
    "text": "سکندر علی وجد ان دو اصناف کے شاعر تھے۔ \n TSTET 9 Jan 2025",
    "options": [
      "غزل اور نظم",
      "غزل اور رباعی",
      "غزل اور مثنوی",
      "غزل اور قصیدہ"
    ],
    "correct": "غزل اور نظم",
    "explanation": "سکندر علی وجد کا شمار اردو کے نامور شعراء میں ہوتا ہے۔ وہ بنیادی طور پر غزل اور نظم، دونوں اصناف میں اپنی شاعری کے لیے مشہور ہیں۔ ان کی غزلوں میں کلاسیکی رنگ اور جدید حسیت کا امتزاج پایا جاتا ہے، جبکہ ان کی نظمیں حب الوطنی اور سماجی موضوعات کا احاطہ کرتی ہیں۔ \n (Sikandar Ali Wajd is counted among the renowned poets of Urdu. He is primarily famous for his poetry in both the Ghazal and Nazm genres. His ghazals show a blend of classical style and modern sensibility, while his nazms cover patriotic and social themes.)"
  },
  {
    "id": 22,
    "text": "ان کی نثری تصانیف میں ”حالی کا سیاسی شعور“ اہمیت کا حامل ہے۔ \n TSTET 9 Jan 2025",
    "options": [
      "شبلی نعمانی",
      "مرزا فرحت اللہ بیگ",
      "خواجہ حسن نظامی",
      "معین احسن جذبی"
    ],
    "correct": "معین احسن جذبی",
    "explanation": "”حالی کا سیاسی شعور“ ایک اہم تنقیدی اور تحقیقی کتاب ہے جس کے مصنف معین احسن جذبی ہیں۔ جذبی بنیادی طور پر ایک شاعر تھے لیکن ان کی یہ نثری تصنیف بھی اردو ادب میں قدر کی نگاہ سے دیکھی جاتی ہے۔ \n ('Hali ka Siyasi Shaoor' is an important critical and research book authored by Moin Ahsan Jazbi. Jazbi was primarily a poet, but this prose work of his is also highly regarded in Urdu literature.)"
  },
  {
    "id": 23,
    "text": "غزل میں ردیف سے پہلے آنے والے ہم وزن الفاظ کو کہتے ہیں۔ \n TSTET 9 Jan 2025",
    "options": [
      "مطلع",
      "مقطع",
      "قافیہ",
      "ردیف"
    ],
    "correct": "قافیہ",
    "explanation": "شاعری کی اصطلاح میں، قافیہ ان ہم وزن اور ہم آواز الفاظ کو کہتے ہیں جو شعر کے آخر میں ردیف سے پہلے آتے ہیں۔ ردیف وہ لفظ یا الفاظ ہوتے ہیں جو قافیے کے بعد بغیر کسی تبدیلی کے دہرائے جاتے ہیں۔ \n (In poetic terminology, 'Qafiya' (rhyme) refers to the words with the same meter and sound that come before the 'Radeef' at the end of a verse. 'Radeef' (refrain) is the word or words that are repeated without change after the Qafiya.)"
  },
  {
    "id": 24,
    "text": "یہ فکشن کی سب سے مختصر شکل ہے جس میں قصہ، پلاٹ، کردار، نقطہ عروج، زماں و مکاں کے ساتھ یہ لازمی ہے۔ \n TSTET 9 Jan 2025",
    "options": [
      "قصیدہ، وحدت تاثر",
      "مثنوی، وحدت تاثر",
      "افسانہ، وحدت تاثر",
      "افسانہ، گریز"
    ],
    "correct": "افسانہ، وحدت تاثر",
    "explanation": "افسانہ (مختصر کہانی) فکشن کی سب سے مختصر صنف ہے۔ اس کے بنیادی اجزاء میں قصہ، پلاٹ، کردار وغیرہ شامل ہیں، لیکن اس کی سب سے اہم اور لازمی خصوصیت 'وحدتِ تاثر' ہے، یعنی افسانہ پڑھنے کے بعد قاری پر ایک واحد اور گہرا تاثر قائم ہونا چاہیے۔ \n (The 'Afsana' (short story) is the shortest genre of fiction. Its basic components include a story, plot, characters, etc., but its most important and essential characteristic is the 'Wahdat-e-Ta'asur' (unity of impression), meaning that after reading the story, a single, profound impression should be left on the reader.)"
  },
  {
    "id": 25,
    "text": "ارشد اور امجد نے آج جی بھر کے آم کھائے۔ خط کشیدہ لفظ صفت کی قسم ہے۔ \n TSTET 9 Jan 2025",
    "options": [
      "صفت عددی",
      "صفت مقداری",
      "صفت نسبتی",
      "صفت ضمیری"
    ],
    "correct": "صفت مقداری",
    "explanation": "صفت مقداری (Adjective of Quantity) وہ صفت ہے جو کسی اسم کی مقدار یا پیمائش کو ظاہر کرے۔ جملے میں 'جی بھر کے' کھانے کی مقدار کو ظاہر کر رہا ہے کہ کتنا کھایا، لیکن یہ کوئی معین تعداد نہیں بتا رہا۔ اس لیے یہ صفت مقداری ہے۔ \n ('Sifat-e-Miqdari' (Adjective of Quantity) is an adjective that indicates the quantity or measure of a noun. In the sentence, 'jee bhar ke' (to one's heart's content) indicates the quantity of eating, but it does not specify a definite number. Therefore, it is an adjective of quantity.)"
  },
  {
    "id": 26,
    "text": "مولانا ابوالکلام آزاد وسیع النظر تھے۔ خط کشیدہ لفظ حروف کی مثال ہے۔ \n TSTET 9 Jan 2025",
    "options": [
      "حروف شمسی",
      "حروف قمری",
      "حروف فجائیہ",
      "حروف عطف"
    ],
    "correct": "حروف عطف",
    "explanation": "حرف عطف (Conjunctive Particle) وہ حرف ہے جو دو اسموں یا دو جملوں کو ملانے کا کام کرتا ہے۔ لفظ 'وسیع النظر' میں 'و' (جو اصل میں 'وسیع' اور 'النظر' کو ملا رہا ہے) عطف کا کام کر رہا ہے۔ تاہم، دیے گئے विकल्पों میں سے، 'حروف عطف' سب سے قریب ترین جواب ہے کیونکہ 'و' دو الفاظ کو جوڑتا ہے۔ \n ('Huroof-e-Atf' (Conjunctive Particle) is a particle that joins two nouns or two sentences. In the word 'wasee-un-nazar', the 'wao' (which is actually connecting 'wasee' and 'al-nazar') is performing the function of conjunction. Among the given options, 'Huroof-e-Atf' is the closest answer as 'wao' connects two words.)"
  },
  {
    "id": 27,
    "text": "نظارے رہے وہی فلک پر\nہم تھک بھی گئے چمک چمک کر\nخط کشیدہ الفاظ مرکب الفاظ کی مثال ہیں۔ \n TSTET 9 Jan 2025",
    "options": [
      "مترادف",
      "ہم آہنگ",
      "تکرار لفظی",
      "تضاد"
    ],
    "correct": "تکرار لفظی",
    "explanation": "تکرار لفظی (Word Repetition) اس وقت ہوتی ہے جب کسی لفظ کو تاکید، کثرت یا تسلسل ظاہر کرنے کے لیے دہرایا جاتا ہے۔ اس شعر میں 'چمک چمک' کا استعمال اسی کی مثال ہے، جو چمکنے کے عمل کے تسلسل کو ظاہر کرتا ہے۔ \n ('Takrar-e-Lafzi' (Word Repetition) occurs when a word is repeated to emphasize, show abundance, or continuity. In this couplet, the use of 'chamak chamak' is an example of this, indicating the continuity of the act of shining.)"
  },
  {
    "id": 28,
    "text": "ت حروف کی قیمت مقرر ہے۔ \n TSTET 9 Jan 2025",
    "options": [
      "300",
      "400",
      "500",
      "100"
    ],
    "correct": "400",
    "explanation": "یہ سوال علم الاعداد (Abjad numerals) سے متعلق ہے۔ ابجد کے حساب سے ہر حرف کی ایک عددی قیمت ہوتی ہے۔ حرف 'ت' (تے) کی عددی قیمت 400 مقرر ہے۔ \n (This question relates to Abjad numerals. According to the Abjad system, each letter has a numerical value. The numerical value of the letter 'ت' (tay) is fixed at 400.)"
  },
  {
    "id": 29,
    "text": "محفل میں مہمانوں کی خاطر و مدارت میں ____ بیشی نہیں ہونی چاہئے۔ خالی جگہ میں موزوں تضاد والا لفظ لگائیے۔ \n TSTET 9 Jan 2025",
    "options": [
      "اچھی",
      "خوب",
      "بہت",
      "کمی"
    ],
    "correct": "کمی",
    "explanation": "جملے میں لفظ 'بیشی' استعمال ہوا ہے جس کا مطلب ہے 'زیادتی' یا 'اضافہ'۔ سوال میں اس کا متضاد (opposite) لفظ پوچھا گیا ہے۔ 'بیشی' کا متضاد 'کمی' ہے، جس کا مطلب ہے 'قلت' یا 'گھٹاؤ'۔ جملہ اس طرح مکمل ہوگا: 'محفل میں مہمانوں کی خاطر و مدارت میں کمی بیشی نہیں ہونی چاہئے'۔ \n (The word 'beshi' is used in the sentence, which means 'excess' or 'increase'. The question asks for its antonym (opposite). The antonym of 'beshi' is 'kami', which means 'shortage' or 'decrease'. The sentence would be completed as: 'There should be no shortage or excess (kami beshi) in the hospitality of guests at the gathering'.)"
  },
  {
    "id": 30,
    "text": "ہر شریک نے اپنی رائے کا اظہار کیا۔ خط کشیدہ لفظ کی جمع ہے۔ \n TSTET 9 Jan 2025",
    "options": [
      "مشرک",
      "شرکاء",
      "غرباء",
      "فقراء"
    ],
    "correct": "شرکاء",
    "explanation": "لفظ 'شریک' واحد (singular) ہے جس کا مطلب ہے 'حصہ لینے والا' یا 'شامل ہونے والا'۔ اس کی جمع (plural) 'شرکاء' ہے۔ 'غرباء' غریب کی اور 'فقراء' فقیر کی جمع ہے۔ \n (The word 'shareek' is singular, meaning 'participant' or 'one who takes part'. Its plural is 'shurakaa'. 'Ghurabaa' is the plural of 'ghareeb' (poor), and 'fuqaraa' is the plural of 'faqeer' (beggar).)"
  },
  {
    "id": 31,
    "text": "فعل ماضی کی قسمیں ہیں۔ \n TSTET 9 Jan 2025",
    "options": [
      "6",
      "4",
      "2",
      "3"
    ],
    "correct": "6",
    "explanation": "اردو قواعد (grammar) میں فعل ماضی (past tense) کی چھ قسمیں ہیں: \n 1. ماضی مطلق (Past Indefinite) \n 2. ماضی قریب (Present Perfect) \n 3. ماضی بعید (Past Perfect) \n 4. ماضی استمراری (Past Continuous) \n 5. ماضی شکیہ/احتمالی (Past Doubtful) \n 6. ماضی شرطی/تمنائی (Past Conditional)"
  },
  {
    "id": 32,
    "text": "صراف بنے، جوہری اور سیٹھ، ساہوکار\nدیتے تھے سب کو نقد، سو کھاتے ہیں اب ادھار\nاس شعر میں تضاد کے علاوہ یہ صنعت بھی پائی جاتی ہے۔ \n TSTET 9 Jan 2025",
    "options": [
      "استعارہ",
      "تشبیہ",
      "حسن تعلیل",
      "مبالغہ"
    ],
    "correct": "مبالغہ",
    "explanation": "اس شعر میں صنعت تضاد (antithesis) 'نقد' اور 'ادھار' کے الفاظ میں موجود ہے۔ اس کے علاوہ، صنعت مبالغہ (hyperbole) بھی ہے، کیونکہ شاعر کسی کی حالت کو بیان کرنے میں غلو سے کام لے رہا ہے کہ جو لوگ کبھی سب کو نقد دیتے تھے وہ اب خود ادھار کھانے پر مجبور ہیں۔ یہ بات کو بڑھا چڑھا کر پیش کرنے کے زمرے میں آتا ہے۔ \n (In this couplet, the poetic device of 'Tazaad' (antithesis) is present in the words 'naqd' (cash) and 'udhaar' (credit). Besides this, there is also 'Mubaligha' (hyperbole), as the poet is exaggerating while describing someone's condition, saying that those who once gave cash to everyone are now forced to live on credit themselves. This falls into the category of exaggeration.)"
  },
  {
    "id": 33,
    "text": "فلک ____ پیلس حیدرآباد کی شاندار عمارت ہے۔ موزوں لاحقہ لگائیے۔ \n TSTET 9 Jan 2025",
    "options": [
      "دار",
      "نما",
      "نگار",
      "نواز"
    ],
    "correct": "نما",
    "explanation": "لاحقہ (suffix) وہ حرف یا لفظ ہے جو کسی دوسرے لفظ کے آخر میں لگایا جائے اور اس کے معنی میں تبدیلی پیدا کرے۔ یہاں 'فلک' کے ساتھ 'نما' کا لاحقہ لگانے سے 'فلک نما' بنتا ہے، جس کا مطلب ہے 'آسمان کا منظر دکھانے والا' یا 'آسمان جیسا'۔ فلک نما پیلس کا یہی پورا نام ہے۔ \n (A suffix ('lahiqa') is a letter or word added to the end of another word to change its meaning. Here, adding the suffix 'numa' to 'falak' (sky) creates 'Falaknuma', which means 'showing a view of the sky' or 'sky-like'. This is the full name of the Falaknuma Palace.)"
  },
  {
    "id": 34,
    "text": "جیسا کرو گے، ویسا بھرو گے۔ خط کشیدہ علامت کہلاتی ہے۔ \n TSTET 9 Jan 2025",
    "options": [
      "سکتہ",
      "وقفہ",
      "تفصیلہ",
      "واوین"
    ],
    "correct": "سکتہ",
    "explanation": "خط کشیدہ علامت ',' کو اردو میں 'سکتہ' کہتے ہیں۔ یہ جملے میں سب سے مختصر ٹھہراؤ (shortest pause) کے لیے استعمال ہوتی ہے تاکہ جملے کے مختلف حصوں کو الگ کیا جا سکے اور مطلب واضح ہو۔ \n (The underlined symbol ',' is called 'Sakta' in Urdu. It is used for the shortest pause in a sentence to separate different parts of the sentence and clarify the meaning.)"
  },
  {
    "id": 35,
    "text": "صحیح جوڑ کی نشاندہی کیجئے۔ \n TSTET 9 Jan 2025",
    "options": [
      "سہ ابعادی آلہ - سلائیڈس",
      "نمائشی تختے - فلیش کارڈ",
      "گرافک امداد - ماڈل",
      "تظلیلی امداد - ڈرامہ"
    ],
    "correct": "نمائشی تختے - فلیش کارڈ",
    "explanation": "یہ سوال تدریسی امدادی اشیاء (Teaching Aids) کی درجہ بندی سے متعلق ہے۔ فلیش کارڈز ایک قسم کی نمائشی امداد (Display Aid) ہیں جنہیں نمائشی تختے (Display Board) پر دکھایا جا سکتا ہے۔ باقی جوڑیاں غلط ہیں: سلائیڈس تظلیلی (projected) امداد ہے، ماڈل سہ ابعادی (3D) آلہ ہے، اور ڈرامہ ایک سرگرمی پر مبنی امداد (activity-based aid) ہے۔ \n (This question is about the classification of Teaching Aids. Flash cards are a type of display aid that can be shown on a display board. The other pairs are incorrect: Slides are a projected aid, a model is a 3D aid, and drama is an activity-based aid.)"
  },
  {
    "id": 36,
    "text": "تدریس کا نہایت ہی خشک اور بے جان طریقہ تدریس تصور کیا جاتا ہے۔ \n TSTET 9 Jan 2025",
    "options": [
      "استخراجی",
      "استقرائی",
      "منصوبائی طریقہ",
      "کھیل کھیل کا طریقہ"
    ],
    "correct": "استخراجی",
    "explanation": "استخراجی طریقہ تدریس (Deductive Method) میں استاد پہلے اصول یا فارمولا بتاتا ہے اور پھر مثالوں کے ذریعے اس کی وضاحت کرتا ہے۔ چونکہ اس میں طلباء کی شمولیت کم ہوتی ہے اور وہ خود سے اصول دریافت نہیں کرتے، اس لیے اسے اکثر خشک، غیر دلچسپ اور استاد مرکوز (teacher-centered) طریقہ سمجھا جاتا ہے۔ \n (In the Deductive Method of teaching, the teacher first states the rule or formula and then explains it with examples. Since student participation is minimal and they do not discover the principles themselves, it is often considered a dry, uninteresting, and teacher-centered method.)"
  },
  {
    "id": 37,
    "text": "ذیل میں ایک امتحانات کے انعقاد کا مقصد نہیں ہے۔ \n TSTET 9 Jan 2025",
    "options": [
      "طلبہ کی رہنمائی",
      "طلبہ کی کامیابی کی قدر پیمائی",
      "مدرسہ اور اساتذہ کی صلاحیت",
      "طلبہ کی تخلیقی صلاحیت کا فروغ"
    ],
    "correct": "طلبہ کی تخلیقی صلاحیت کا فروغ",
    "explanation": "امتحانات کا بنیادی مقصد طلباء کی سیکھنے کی سطح کو جانچنا (assessment)، ان کی کامیابی کی قدر پیمائی کرنا (evaluation)، اور نتائج کی بنیاد پر ان کی رہنمائی کرنا (guidance) ہوتا ہے۔ اگرچہ تعلیم کا ایک بڑا مقصد تخلیقی صلاحیتوں کو فروغ دینا ہے، لیکن روایتی امتحانات براہ راست اس مقصد کے لیے منعقد نہیں کیے جاتے؛ ان کا مرکز علم اور فہم کی جانچ ہوتا ہے۔ \n (The primary purpose of examinations is to assess students' learning levels, evaluate their success, and provide guidance based on the results. Although a major goal of education is to foster creativity, traditional exams are not directly conducted for this purpose; their focus is on testing knowledge and comprehension.)"
  },
  {
    "id": 38,
    "text": "اس طریقے میں طلبہ کو لکھنا سکھانے سے قبل مختلف قسم کے خطوط اور لکیروں کی مشق کروائی جاتی ہے۔ \n TSTET 9 Jan 2025",
    "options": [
      "پڑھو اور لکھو کا طریقہ",
      "پیسٹالوزی کا طریقہ",
      "پرنسپل سجاد مرزا کا طریقہ",
      "مخلوط طریقہ"
    ],
    "correct": "پرنسپل سجاد مرزا کا طریقہ",
    "explanation": "پرنسپل سجاد مرزا کا طریقہ اردو رسم الخط سکھانے کا ایک معروف طریقہ ہے۔ اس کی خاصیت یہ ہے کہ حروف تہجی سکھانے سے پہلے بچوں کو بنیادی اشکال جیسے سیدھی لکیریں (خطوط مستقیم)، ترچھی لکیریں (خطوط منحنی)، اور دائرے بنانے کی مشق کرائی جاتی ہے۔ ان اشکال کو ملا کر حروف بنانا سکھایا جاتا ہے۔ \n (Principal Sajjad Mirza's method is a well-known method for teaching the Urdu script. Its specialty is that before teaching the alphabet, children are made to practice basic shapes like straight lines, curved lines, and circles. They are then taught to form letters by combining these shapes.)"
  },
  {
    "id": 39,
    "text": "زود خوانی، مطلب فہمی، لغت خوانی اور تخیل اس کے بنیادی مقاصد ہیں۔ \n TSTET 9 Jan 2025",
    "options": [
      "خاموش خوانی",
      "سرسری مطالعہ",
      "خوش نویسی",
      "زود نویسی"
    ],
    "correct": "خاموش خوانی",
    "explanation": "خاموش خوانی (Silent Reading) کا مقصد صرف متن کو پڑھنا نہیں ہوتا بلکہ اس کے کئی اعلیٰ مقاصد ہوتے ہیں۔ ان میں تیزی سے پڑھنا (زود خوانی)، پڑھے گئے مواد کا مطلب سمجھنا (مطلب فہمی)، نئے الفاظ کے معنی جاننا (لغت خوانی) اور متن کے ذریعے اپنے تخیل کو وسیع کرنا شامل ہیں۔ \n (Silent Reading does not just mean reading the text; it has several higher objectives. These include reading quickly (speed reading), understanding the meaning of the material read (comprehension), learning the meanings of new words (vocabulary development), and expanding one's imagination through the text.)"
  },
  {
    "id": 40,
    "text": "قواعد کی تدریس کا بنیادی مقصد ہے۔ \n TSTET 9 Jan 2025",
    "options": [
      "ذخیرہ الفاظ میں اضافہ کرنا",
      "روانی پیدا کرنا",
      "ادبی ذوق پیدا کرنا",
      "درست لکھنا اور پڑھنا سکھانا"
    ],
    "correct": "درست لکھنا اور پڑھنا سکھانا",
    "explanation": "قواعد (Grammar) کی تدریس کا سب سے بنیادی اور اولین مقصد طلباء کو زبان کے اصولوں سے واقف کرانا ہے تاکہ وہ زبان کو معیاری اور درست طریقے سے بول، پڑھ اور لکھ سکیں۔ اگرچہ اس سے ذخیرہ الفاظ اور روانی میں بھی مدد ملتی ہے، لیکن بنیادی مقصد زبان کا صحیح استعمال سکھانا ہے۔ \n (The most fundamental and primary purpose of teaching grammar is to acquaint students with the rules of the language so that they can speak, read, and write the language correctly and according to standards. Although it also helps with vocabulary and fluency, the main objective is to teach the correct use of the language.)"
  },
  {
    "id": 41,
    "text": "غزل کے دوسرے شعر کے دونوں مصرعوں میں بھی قافیہ اور ردیف کی پابندی کی جائے تو وہ کہلاتا ہے۔\n TSTET 23 June 2025",
    "options": [
      "قطعه بند",
      "مطلع",
      "حسن مطلع",
      "مقطع"
    ],
    "correct": "حسن مطلع",
    "explanation": "غزل کا پہلا شعر جس کے دونوں مصرعے ہم قافیہ اور ہم ردیف ہوں، مطلع کہلاتا ہے۔ اگر غزل کا دوسرا شعر بھی مطلع کی طرح ہم قافیہ اور ہم ردیف ہو تو اسے حسنِ مطلع، مطلعِ ثانی یا زیبِ مطلع کہتے ہیں۔ (The first couplet of a ghazal, where both lines have the same rhyme (qafiya) and refrain (radeef), is called the 'matla'. If the second couplet of the ghazal also follows the same pattern of rhyme and refrain as the 'matla', it is called 'husn-e-matla', 'matla-e-sani', or 'zeb-e-matla'.)"
  },
  {
    "id": 42,
    "text": "کلام میں حقیقی معنی چھوڑ کر مرادی معنی لینا اور حقیقی معنی بھی مراد لیا جا سکتا ہے۔ کہلاتا ہے۔\n TSTET 23 June 2025",
    "options": [
      "تجاہل عارفانہ",
      "کنایہ",
      "مراعات النظیر",
      "تلمیح"
    ],
    "correct": "کنایہ",
    "explanation": "کنایہ وہ صفت ہے جس میں حقیقی معنوں کے بجائے مرادی یا مجازی معنی لیے جائیں، لیکن حقیقی معنوں کا امکان بھی موجود ہو۔ یہ بالواسطہ بات کرنے کا ایک طریقہ ہے۔ (Kinaya is a figure of speech where an indirect or metaphorical meaning is taken instead of the literal one, but the possibility of the literal meaning also exists. It is a way of speaking indirectly.)"
  },
  {
    "id": 43,
    "text": "علم الاعداد میں ”فرشت“ کے اعداد بالترتیب یوں ہیں۔\n TSTET 23 June 2025",
    "options": [
      "ف=10 ر=20 ش=30 ت=40",
      "ف=80 ر=90",
      "ف=100 ر=200 ش=300 ت=400",
      "ف=700 ر=800 ش=900 ت=1000"
    ],
    "correct": "ف=100 ر=200 ش=300 ت=400",
    "explanation": "علم الاعداد (ابجد) میں حروف کی عددی قیمتیں مقرر ہیں۔ لفظ 'فرشت' کے حروف کی صحیح قیمتیں یہ ہیں: ف = 80، ر = 200، ش = 300، ت = 400۔ دیے گئے اختیارات میں سے کوئی بھی مکمل طور پر درست نہیں ہے، لیکن اختیار 3 جزوی طور پر قریب ترین ہے کیونکہ اس میں 'ر'، 'ش' اور 'ت' کی قدریں درست ہیں۔ سوال یا اختیارات میں ممکنہ طور پر کوئی غلطی ہے۔ (In Numerology (Abjad), letters have fixed numerical values. The correct values for the letters in 'فرشت' are: ف (Fa) = 80, ر (Ra) = 200, ش (Shin) = 300, ت (Ta) = 400. None of the given options are completely correct, but option 3 is partially the closest as the values for 'Ra', 'Shin', and 'Ta' are correct. There is likely an error in the question or the options.)"
  },
  {
    "id": 44,
    "text": "”حامد نے میلے سے چمٹا خریدا“ خط کشیدہ لفظ جنس کی قسم ہے۔\n TSTET 23 June 2025",
    "options": [
      "جنس حقیقی مذکر",
      "جنس غیر حقیقی مونث",
      "جنس غیر حقیقی مذکر",
      "جنس حقیقی مونث"
    ],
    "correct": "جنس غیر حقیقی مذکر",
    "explanation": "جنسِ غیر حقیقی وہ اسم ہے جو بے جان چیزوں کے لیے بولا جائے اور قواعد کے مطابق مذکر یا مؤنث کے طور پر استعمال ہو۔ 'چمٹا' ایک بے جان شے ہے اور اسے مذکر کے طور پر استعمال کیا جاتا ہے، اس لیے یہ جنسِ غیر حقیقی مذکر ہے۔ (Jins-e-Ghair Haqiqi (non-real gender) refers to inanimate objects that are treated as either masculine or feminine according to grammatical rules. 'Chimta' (tongs) is an inanimate object and is used as masculine, hence it is masculine non-real gender.)"
  },
  {
    "id": 45,
    "text": "”میری یادوں کے چنار“ کے عنوان سے اپنی سوانح عمری لکھی ہے۔\n TSTET 23 June 2025",
    "options": [
      "پریم چند",
      "گوپی چند نارنگ",
      "کشمیری لال ذاکر",
      "کرشن چندر"
    ],
    "correct": "کرشن چندر",
    "explanation": "’میری یادوں کے چنار‘ کرشن چندر کی خود نوشت سوانح عمری ہے۔ وہ اردو کے مشہور افسانہ نگار اور ناول نگار تھے۔ ('Meri Yaadon Ke Chinar' is the autobiography of Krishan Chander. He was a famous Urdu short story writer and novelist.)"
  },
  {
    "id": 46,
    "text": "”راشد بہتر طور پر کام انجام دیتا ہے۔“ خط کشیدہ لفظ کی جمع ہے۔\n TSTET 23 June 2025",
    "options": [
      "طیور",
      "طائر",
      "طیار",
      "اطوار"
    ],
    "correct": "اطوار",
    "explanation": "لفظ 'طور' (طریقہ، انداز) کی جمع 'اطوار' (طور طریقے، عادات) ہے۔ (The plural of the word 'Taur' (way, manner) is 'Atwaar' (manners, habits).)"
  },
  {
    "id": 47,
    "text": "”ضعیف العمر ملکہ حیات بخش بیگم کو گوشہ نشینی چھوڑ کر حیدر آباد گولکنڈہ آنا پڑا۔“ خط کشیدہ لفظ حرف کے اعتبار سے کہلاتا ہے۔\n TSTET 23 June 2025",
    "options": [
      "حروف قمری",
      "حروف شمسی",
      "حروف عطف",
      "حروف فجائیہ"
    ],
    "correct": "حروف قمری",
    "explanation": "عربی قواعد کے مطابق، جب 'ال' کے بعد حروفِ قمری (ا, ب, ج, ح, خ, ع, غ, ف, ق, ک, م, و, ہ, ی) میں سے کوئی حرف آئے تو 'لام' کی آواز پڑھی جاتی ہے، جیسے 'العمر' میں۔ 'عین' حروفِ قمری میں سے ہے۔ (According to Arabic grammar rules, when the definite article 'Al' is followed by one of the 'moon letters' (Huroof-e-Qamari), the 'L' sound is pronounced, as in 'al-Umar'. The letter 'Ain' is one of the moon letters.)"
  },
  {
    "id": 48,
    "text": "”اُن کا رہن سہن اچھا ہے، وہ چال ڈھال سے بھی اچھے ہیں۔“ خط کشیدہ الفاظ کہلاتے ہیں۔\n TSTET 23 June 2025",
    "options": [
      "اضداد",
      "مترادفات",
      "قریب المعنی",
      "جمع الجمع"
    ],
    "correct": "قریب المعنی",
    "explanation": "یہ الفاظ 'قریب المعنی' ہیں، یعنی ان کے معنی ایک دوسرے سے بہت ملتے جلتے ہیں لیکن بالکل ایک جیسے نہیں ہیں۔ 'رہن سہن' اور 'چال ڈھال' دونوں طرزِ زندگی اور برتاؤ کو ظاہر کرتے ہیں۔ مترادفات وہ الفاظ ہوتے ہیں جن کے معنی بالکل ایک جیسے ہوں۔ (These words are 'Qareeb-ul-Ma'ni', meaning their meanings are very similar but not exactly the same. 'Rehan Sehan' (living style) and 'Chaal Dhaal' (demeanor/gait) both refer to lifestyle and behavior. Synonyms (mutaradifat) are words with exactly the same meaning.)"
  },
  {
    "id": 49,
    "text": "اس رباعی گو شاعر کو ”حکیم الشعراء“، ”صوفی سرمد“ بھی کہا جاتا ہے۔\n TSTET 23 June 2025",
    "options": [
      "سید احمد حسین امجد",
      "شبلی نعمانی",
      "میر انیس",
      "داغ دہلوی"
    ],
    "correct": "سید احمد حسین امجد",
    "explanation": "سید احمد حسین امجد، جو امجد حیدرآبادی کے نام سے مشہور ہیں، ایک عظیم رباعی گو شاعر تھے۔ انہیں ان کی صوفیانہ شاعری کی وجہ سے 'حکیم الشعراء' کا خطاب دیا گیا۔ (Syed Ahmed Hussain Amjad, popularly known as Amjad Hyderabadi, was a great Rubai (quatrain) poet. He was given the title 'Hakeem-ush-Shu'ara' (The Wise Man among Poets) due to his mystical poetry.)"
  },
  {
    "id": 50,
    "text": "”کچھ تو ہے جس کی پردہ داری ہے“ خط کشیدہ لفظ غیر معین فرد یا شئے کے لیے استعمال ہو تو ضمیر کی قسم کہلاتی ہے۔\n TSTET 23 June 2025",
    "options": [
      "ضمیر موصولہ",
      "ضمیر تنکیر",
      "ضمیر شخصی",
      "ضمیر استفہامیہ"
    ],
    "correct": "ضمیر تنکیر",
    "explanation": "ضمیر تنکیر وہ ضمیر ہے جو کسی غیر معین شخص یا چیز کے لیے استعمال ہو، جیسے 'کچھ'، 'کوئی'، 'بعض'۔ یہاں 'کچھ' سے کوئی خاص چیز مراد نہیں ہے۔ (Zameer-e-Tankeer (Indefinite Pronoun) is a pronoun that refers to an unspecified person or thing, such as 'kuchh' (something), 'koi' (someone), 'baaz' (some). Here, 'kuchh' does not refer to any specific thing.)"
  },
  {
    "id": 51,
    "text": "ہکاری الفاظ والے حروف کی تعداد ہے۔\n TSTET 23 June 2025",
    "options": [
      "12",
      "14",
      "10",
      "8"
    ],
    "correct": "14",
    "explanation": "اردو میں ہکاری یا بھاری آواز والے حروف کی تعداد 14 ہے۔ یہ حروف 'ھ' (دو چشمی ہے) کے ساتھ مل کر بنتے ہیں، جیسے: بھ، پھ، تھ، ٹھ، جھ، چھ، دھ، ڈھ، ڑھ، کھ، گھ، لھ، مھ، نھ۔ (In Urdu, there are 14 aspirated consonants, also known as 'Hakaari' letters. These letters are formed by combining with 'ھ' (do chashmi he), such as: بھ, پھ, تھ, ٹھ, جھ, چھ, دھ, ڈھ, ڑھ, کھ, گھ, لھ, مھ, نھ.)"
  },
  {
    "id": 52,
    "text": "”مسجد میں امیر و غریب سب برابر ہیں۔“ اس جملے میں 'و' قواعد کے لحاظ سے ہے:\n TSTET 23 June 2025",
    "options": [
      "حروف ربط",
      "حروف عطف",
      "حروف فجائیہ",
      "حروف تخصیص"
    ],
    "correct": "حروف عطف",
    "explanation": "حروفِ عطف وہ حروف ہیں جو دو اسموں یا دو جملوں کو ملانے کا کام کرتے ہیں، جیسے 'اور'، 'و'۔ اس جملے میں 'و'، 'امیر' اور 'غریب' کو ملا رہا ہے۔ (Huroof-e-Atf (Conjunctions) are words that join two nouns or two sentences, such as 'aur' and 'wa'. In this sentence, 'wa' is joining 'ameer' (rich) and 'ghareeb' (poor).)"
  },
  {
    "id": 53,
    "text": "”علمائے دین کی تعظیم لازمی ہے“ خط کشیدہ لفظ کی ضد ہے۔\n TSTET 23 June 2025",
    "options": [
      "تکریم",
      "عزت",
      "تذلیل",
      "توقیر"
    ],
    "correct": "تذلیل",
    "explanation": "'تعظیم' کا مطلب ہے عزت کرنا یا احترام کرنا۔ اس کی ضد 'تذلیل' ہے، جس کا مطلب ہے بے عزتی کرنا یا ذلیل کرنا۔ 'تکریم'، 'عزت' اور 'توقیر' 'تعظیم' کے مترادفات ہیں۔ ('Tazeem' means to respect or honor. Its antonym is 'Tazleel', which means to insult or humiliate. 'Takreem', 'Izzat', and 'Tauqeer' are synonyms of 'Tazeem'.)"
  },
  {
    "id": 54,
    "text": "”اہم کام کی تکمیل میں بات بات پر دغدغہ اچھی بات نہیں ہے۔“ خط کشیدہ لفظ کے معنی ہیں۔\n TSTET 23 June 2025",
    "options": [
      "شک",
      "ہنسی مذاق",
      "لڑائی جھگڑا",
      "خوف و اندیشہ"
    ],
    "correct": "خوف و اندیشہ",
    "explanation": "لفظ 'دغدغہ' کے معنی 'خوف'، 'اندیشہ'، 'فکر' یا 'کھٹکا' ہیں۔ جملے کا مطلب ہے کہ اہم کام کرتے وقت خوف یا فکر میں مبتلا رہنا اچھی بات نہیں۔ (The word 'daghdagha' means 'fear', 'apprehension', 'worry', or 'anxiety'. The sentence means that it is not good to remain in a state of fear or worry while completing an important task.)"
  },
  {
    "id": 55,
    "text": "معلم فرضی کھیلوں کے ذریعہ اس مہارت کی تربیت دے سکتا ہے۔\n TSTET 23 June 2025",
    "options": [
      "گفتگو",
      "پڑھنے",
      "لکھنے",
      "سننے"
    ],
    "correct": "گفتگو",
    "explanation": "فرضی کھیل (Role-playing) اور ڈرامائی سرگرمیاں طلباء کو مختلف کردار ادا کرنے اور صورتحال کے مطابق بولنے کا موقع فراہم کرتی ہیں، جس سے ان کی گفتگو اور بولنے کی مہارت کو بہت فروغ ملتا ہے۔ (Role-playing and dramatic activities provide students with the opportunity to play different characters and speak according to the situation, which greatly promotes their conversation and speaking skills.)"
  },
  {
    "id": 56,
    "text": "ذیل میں سے ایک کا تعلق اردو پڑھانے کے تحلیلی طریقے سے ہے۔\n TSTET 23 June 2025",
    "options": [
      "اجزائی طریقہ",
      "سجاد مرزا کا طریقہ",
      "ابجدی طریقہ",
      "صوتی طریقہ"
    ],
    "correct": "اجزائی طریقہ",
    "explanation": "تحلیلی طریقہ (Analytical Method) تدریس کا وہ طریقہ ہے جس میں کل سے جزو کی طرف بڑھا جاتا ہے، یعنی پہلے مکمل جملہ یا لفظ سکھایا جاتا ہے اور پھر اس کے اجزاء (حروف) کی پہچان کرائی جاتی ہے۔ اجزائی طریقہ اسی اصول پر مبنی ہے۔ (The Analytical Method is a teaching approach that moves from whole to part, meaning a complete sentence or word is taught first, and then its components (letters) are identified. The 'Juzai' (component) method is based on this principle.)"
  },
  {
    "id": 57,
    "text": "تحریری ترسیل اس کے ذریعہ انجام پاتی ہے۔\n TSTET 23 June 2025",
    "options": [
      "انٹرویو",
      "عوامی خطابات",
      "روداد",
      "میٹنگ"
    ],
    "correct": "روداد",
    "explanation": "تحریری ترسیل (Written Communication) کا مطلب معلومات کو لکھ کر دوسروں تک پہنچانا ہے۔ 'روداد' (Report/Minutes) کسی اجلاس یا واقعہ کی تحریری تفصیل ہوتی ہے، لہذا یہ تحریری ترسیل کی ایک شکل ہے۔ انٹرویو، عوامی خطابات اور میٹنگ زیادہ تر زبانی ترسیل پر مبنی ہوتے ہیں۔ (Written Communication means conveying information to others in writing. A 'Rudad' (Report/Minutes) is a written account of a meeting or event, hence it is a form of written communication. Interviews, public addresses, and meetings are mostly based on oral communication.)"
  },
  {
    "id": 58,
    "text": "تعلیمی تفریح، تدریسی مشین اور ڈرامہ وغیرہ کہلاتے ہیں۔\n TSTET 23 June 2025",
    "options": [
      "تکلیلی آلات",
      "مشغلاتی امدادیں",
      "گرافک امدادیں",
      "نمائشی تختے"
    ],
    "correct": "مشغلاتی امدادیں",
    "explanation": "مشغلاتی امدادیں (Activity Aids) وہ تدریسی معاون اشیاء ہیں جن میں طلباء خود حصہ لے کر یا سرگرمی میں شامل ہو کر سیکھتے ہیں۔ تعلیمی تفریح (Edutainment)، تدریسی مشین، اور ڈرامہ ایسی ہی امدادیں ہیں جو سیکھنے کے عمل کو دلچسپ اور فعال بناتی ہیں۔ (Activity Aids are teaching materials where students learn by participating or getting involved in an activity. Edutainment, teaching machines, and drama are such aids that make the learning process interesting and active.)"
  },
  {
    "id": 59,
    "text": "اس طریقہ کا بنیادی اصول مثال سے اصطلاح کی طرف ہے۔\n TSTET 23 June 2025",
    "options": [
      "استخراجی طریقہ",
      "لسانی طریقہ",
      "سوال جواب کا طریقہ",
      "استقرائی طریقہ"
    ],
    "correct": "استقرائی طریقہ",
    "explanation": "استقرائی طریقہ (Inductive Method) میں پہلے طلباء کے سامنے کئی مثالیں پیش کی جاتی ہیں، اور پھر ان مثالوں کی مدد سے وہ خود کسی اصول، قاعدے یا اصطلاح تک پہنچتے ہیں۔ یہ طریقہ 'مثال سے اصول' کی طرف جاتا ہے۔ (In the Inductive Method, several examples are first presented to the students, and then with the help of these examples, they themselves arrive at a principle, rule, or term. This method moves from 'example to rule'.)"
  },
  {
    "id": 60,
    "text": "طلبہ کی ہمہ گیر شخصیت کے مختلف پہلوؤں کا ڈاٹا مکمل طور پر اس ریکارڈ میں درج کیا جاتا ہے۔\n TSTET 23 June 2025",
    "options": [
      "کیوملیٹیو ریکارڈ ",
      "انیکڈوٹل ریکارڈ ",
      "شناختی کارڈ ",
      "تشخیصی ریکارڈ "
    ],
    "correct": "کیوملیٹیو ریکارڈ (Cumulative record)",
    "explanation": "کیوملیٹیو ریکارڈ (Cumulative Record) ایک ایسا جامع ریکارڈ ہوتا ہے جس میں طالب علم کی تعلیمی، ہم نصابی، جسمانی، سماجی اور جذباتی ترقی کا مکمل اور مسلسل اندراج کیا جاتا ہے۔ یہ طالب علم کی ہمہ گیر شخصیت کی عکاسی کرتا ہے۔ (A Cumulative Record is a comprehensive document that maintains a complete and continuous account of a student's academic, co-curricular, physical, social, and emotional development. It reflects the student's overall personality.)"
  },
  {
    "id": 61,
    "text": "اردو کا پہلا صاحبِ دیوان شاعر کسے مانا جاتا ہے؟",
    "options": [
      "ولی دکنی",
      "سراج اورنگ آبادی",
      "محمد قلی قطب شاہ",
      "میر تقی میر"
    ],
    "correct": "محمد قلی قطب شاہ",
    "explanation": "سلطان محمد قلی قطب شاہ کو اردو کا پہلا صاحبِ دیوان شاعر تسلیم کیا جاتا ہے۔ ان کا کلیات (مجموعہ کلام) اردو شاعری کا پہلا نمونہ ہے جس میں غزلوں کے علاوہ دیگر اصناف بھی شامل ہیں۔ (Sultan Muhammad Quli Qutb Shah is considered the first Urdu poet to have a compiled collection of poetry (Diwan). His Kulliyat is the first example of a collection that includes other genres besides ghazals.)"
  },
  {
    "id": 62,
    "text": "وہ اسم جو کسی جگہ یا وقت کو ظاہر کرے، کیا کہلاتا ہے؟",
    "options": [
      "اسم ظرف",
      "اسم آلہ",
      "اسم کیفیت",
      "اسم فاعل"
    ],
    "correct": "اسم ظرف",
    "explanation": "قواعد کی رو سے وہ اسم جو کسی جگہ (ظرفِ مکاں) جیسے 'مسجد'، 'گھر' یا وقت (ظرفِ زماں) جیسے 'صبح'، 'شام' کو ظاہر کرے، اسم ظرف کہلاتا ہے۔ (Grammatically, a noun that indicates a place (Zarf-e-Makaan) like 'masjid', 'ghar' or a time (Zarf-e-Zamaan) like 'subah', 'shaam' is called Ism-e-Zarf.)"
  },
  {
    "id": 63,
    "text": "شعر میں کسی تاریخی واقعے، قصے یا شخصیت کی طرف اشارہ کرنا کون سی صنعت کہلاتا ہے؟",
    "options": [
      "مبالغہ",
      "تلمیح",
      "حسنِ تعلیل",
      "استعارہ"
    ],
    "correct": "تلمیح",
    "explanation": "صنعتِ تلمیح (Allusion) میں شاعر اپنے شعر میں کسی مشہور تاریخی، مذہبی، یا افسانوی واقعے یا کردار کا ذکر کرتا ہے تاکہ شعر کے معنی میں گہرائی پیدا ہو۔ (In the poetic device of Talmih (Allusion), the poet refers to a famous historical, religious, or mythological event or character to add depth to the meaning of the verse.)"
  },
  {
    "id": 64,
    "text": "لفظ 'اہل' کا لاحقہ استعمال کرتے ہوئے صحیح مرکب لفظ بنائیے۔",
    "options": [
      "اہلِ زبان",
      "کم اہل",
      "نا اہل",
      "بد اہل"
    ],
    "correct": "اہلِ زبان",
    "explanation": "لاحقہ وہ لفظ ہے جو کسی لفظ کے بعد آتا ہے۔ یہاں 'اہل' کو بطور سابقہ (prefix) 'نا اہل' اور 'کم اہل' میں استعمال کیا گیا ہے، جبکہ 'اہلِ زبان' میں 'اہل' کے بعد 'زبان' آیا ہے، لیکن یہ ترکیب اضافی ہے سابقہ لاحقہ نہیں۔ سوال کی ساخت کے مطابق موزوں ترین جواب یہی ہے۔ (A suffix comes after a word. Here, 'ahl' is used as a prefix in 'na-ahl' and 'kam-ahl'. In 'ahl-e-zaban', 'zaban' comes after 'ahl', forming a compound phrase. Based on the question's structure, this is the most appropriate answer.)"
  },
  {
    "id": 65,
    "text": "علم الاعداد (ابجد) کے مطابق لفظ 'حق' کے کل اعداد کتنے ہیں؟",
    "options": [
      "108",
      "10",
      "9",
      "109"
    ],
    "correct": "108",
    "explanation": "ابجد کے حساب سے 'ح' کے 8 اور 'ق' کے 100 عدد ہوتے ہیں۔ اس طرح 'حق' کا مجموعہ 100 + 8 = 108 ہوتا ہے۔ (According to the Abjad system, the value of 'Ha' is 8 and 'Qaf' is 100. Thus, the total value for 'Haq' is 100 + 8 = 108.)"
  },
  {
    "id": 66,
    "text": "جملے میں ٹھہراؤ (pause) کے لیے استعمال ہونے والی علامات کو کیا کہتے ہیں؟",
    "options": [
      "رموزِ اوقاف",
      "اعراب",
      "علمِ صرف",
      "علمِ نحو"
    ],
    "correct": "رموزِ اوقاف",
    "explanation": "رموزِ اوقاف (Punctuation) وہ علامتیں ہیں جو عبارت میں مطلب کو واضح کرنے کے لیے مختلف جگہوں پر ٹھہراؤ، سوال، تعجب وغیرہ کو ظاہر کرنے کے لیے استعمال کی جاتی ہیں۔ (Rumuz-o-Auqaf (Punctuation) are the marks used in writing to clarify meaning by indicating pauses, questions, exclamations, etc.)"
  },
  {
    "id": 67,
    "text": "مشہور افسانہ 'ٹوبہ ٹیک سنگھ' کس ادیب کی تخلیق ہے؟",
    "options": [
      "کرشن چندر",
      "راجندر سنگھ بیدی",
      "سعادت حسن منٹو",
      "عصمت چغتائی"
    ],
    "correct": "سعادت حسن منٹو",
    "explanation": "'ٹوبہ ٹیک سنگھ' تقسیمِ ہند کے موضوع پر لکھا گیا ایک شاہکار افسانہ ہے جس کے خالق سعادت حسن منٹو ہیں۔ ('Toba Tek Singh' is a masterpiece short story on the theme of the Partition of India, created by Saadat Hasan Manto.)"
  },
  {
    "id": 68,
    "text": "لفظ 'عروج' کی ضد کیا ہے؟",
    "options": [
      "بلندی",
      "ترقی",
      "زوال",
      "کمال"
    ],
    "correct": "زوال",
    "explanation": "'عروج' کا مطلب بلندی یا ترقی ہے۔ اس کا متضاد (antonym) 'زوال' ہے، جس کا مطلب پستی یا گراوٹ ہے۔ ('Urooj' means height or progress. Its antonym is 'Zawaal', which means decline or fall.)"
  },
  {
    "id": 69,
    "text": "لفظ 'الشمس' میں 'ل' کی آواز کیوں نہیں پڑھی جاتی؟",
    "options": [
      "کیونکہ 'ش' حروفِ قمری میں سے ہے",
      "کیونکہ 'ش' حروفِ علت ہے",
      "کیونکہ 'ش' حروفِ شمسی میں سے ہے",
      "یہ ایک اصول نہیں ہے"
    ],
    "correct": "کیونکہ 'ش' حروفِ شمسی میں سے ہے",
    "explanation": "حروفِ شمسی (Solar letters) وہ حروف ہیں جن سے پہلے 'ال' آئے تو 'لام' کی آواز اس حرف میں مدغم ہو جاتی ہے اور پڑھی نہیں جاتی۔ 'ش' (شین) حروفِ شمسی میں شامل ہے۔ (Solar letters (Huroof-e-Shamsi) are those letters before which if 'Al-' comes, the sound of 'Laam' merges into that letter and is not pronounced. 'Sheen' is a solar letter.)"
  },
  {
    "id": 70,
    "text": "مشہور ضرب المثل مکمل کیجیے: 'آم کے آم، ____ کے دام'۔",
    "options": [
      "پتوں",
      "گٹھلیوں",
      "چھلکوں",
      "پھلوں"
    ],
    "correct": "گٹھلیوں",
    "explanation": "یہ ضرب المثل 'آم کے آم، گٹھلیوں کے دام' ہے، جس کا مطلب ہے دوہرا فائدہ حاصل ہونا۔ (This proverb 'aam ke aam, guthliyon ke daam' means to get a double benefit.)"
  },
  {
    "id": 71,
    "text": "جس نظم کے ہر بند میں چھ مصرعے ہوں، اسے کیا کہتے ہیں؟",
    "options": [
      "مربع",
      "مخمس",
      "مسدس",
      "رباعی"
    ],
    "correct": "مسدس",
    "explanation": "ہیئت کے اعتبار سے نظم کی قسم جس کے ہر بند میں چھ مصرعے ہوں، 'مسدس' کہلاتی ہے۔ مولانا الطاف حسین حالی کی 'مسدسِ حالی' اس کی بہترین مثال ہے۔ (A form of poem in which each stanza consists of six lines is called a 'Musaddas'. Maulana Altaf Hussain Hali's 'Musaddas-e-Hali' is its finest example.)"
  },
  {
    "id": 72,
    "text": "’با‘ کا سابقہ استعمال کرتے ہوئے درست لفظ کی نشاندہی کریں۔",
    "options": [
      "ادب با",
      "باحیا",
      "نصیب با",
      "با ایمان"
    ],
    "correct": "باحیا",
    "explanation": "سابقہ (Prefix) کسی لفظ کے شروع میں آتا ہے۔ 'با' کا مطلب 'کے ساتھ' ہوتا ہے۔ 'با' کو 'حیا' کے شروع میں لگانے سے 'باحیا' بنتا ہے، جس کا مطلب ہے حیا والا۔ (A prefix comes at the beginning of a word. 'Ba' means 'with'. Adding 'ba' to the beginning of 'haya' creates 'ba-haya', which means 'one with modesty'.)"
  },
  {
    "id": 73,
    "text": "لفظ 'استاد' کی مؤنث کیا ہے؟",
    "options": [
      "استادی",
      "استانی",
      "استادنی",
      "معلمہ"
    ],
    "correct": "استانی",
    "explanation": "اردو قواعد کے مطابق، مذکر 'استاد' (male teacher) کی صحیح مؤنث 'اُستانی' (female teacher) ہے۔ (According to Urdu grammar, the correct feminine form of the masculine 'ustad' (male teacher) is 'ustani' (female teacher).)"
  },
  {
    "id": 74,
    "text": "کسی ایک چیز کو کسی مشترک خوبی کی بنا پر دوسری چیز جیسا قرار دینا، کیا کہلاتا ہے؟",
    "options": [
      "کنایہ",
      "استعارہ",
      "مجاز مرسل",
      "تشبیہ"
    ],
    "correct": "تشبیہ",
    "explanation": "علمِ بیان میں اسے تشبیہ (Simile) کہتے ہیں۔ جیسے 'چاند سا چہرہ' میں چہرے کو خوبصورتی کی مشترک صفت کی وجہ سے چاند جیسا کہا گیا ہے۔ (In rhetoric, this is called Tashbeeh (Simile). For example, in 'chand sa chehra' (a face like the moon), the face is compared to the moon due to the common quality of beauty.)"
  },
  {
    "id": 75,
    "text": "علامہ اقبال کا پہلا اردو شعری مجموعہ کونسا ہے؟",
    "options": [
      "بالِ جبریل",
      "بانگِ درا",
      "ضربِ کلیم",
      "ارمغانِ حجاز"
    ],
    "correct": "بانگِ درا",
    "explanation": "'بانگِ درا' علامہ محمد اقبال کا پہلا اردو شعری مجموعہ ہے جو 1924 میں شائع ہوا۔ ('Bang-e-Dara' is the first Urdu poetic collection of Allama Muhammad Iqbal, published in 1924.)"
  },
  {
    "id": 76,
    "text": "وہ کلمہ جو کسی کام کے کرنے یا ہونے کو زمانے کے تعلق سے ظاہر کرے، اسے کہتے ہیں۔",
    "options": [
      "اسم",
      "فعل",
      "حرف",
      "صفت"
    ],
    "correct": "فعل",
    "explanation": "فعل (Verb) وہ کلمہ ہے جس میں کسی کام کا کرنا یا ہونا پایا جائے اور اس میں تینوں زمانوں (ماضی، حال، مستقبل) میں سے کوئی ایک زمانہ بھی موجود ہو۔ (A verb (Fe'l) is a word that signifies the doing or being of an action and also includes one of the three tenses (past, present, future).)"
  },
  {
    "id": 77,
    "text": "لفظ 'دنیا' کے کیا معنی ہیں اور اس کی ضد کیا ہے؟",
    "options": [
      "جہان، آخرت",
      "زمین، آسمان",
      "قریب، بعید",
      "زندگی، موت"
    ],
    "correct": "جہان، آخرت",
    "explanation": "لفظ 'دنیا' کا مطلب 'جہان' یا 'عالم' ہے۔ اس کا متضاد 'عقبیٰ' یا 'آخرت' ہے، یعنی مرنے کے بعد کی زندگی۔ (The word 'dunya' means 'world' or 'universe'. Its antonym is 'uqba' or 'aakhirat', meaning the life after death.)"
  },
  {
    "id": 78,
    "text": "جس غزل میں ردیف نہ ہو، صرف قافیہ ہو، اسے کیا کہتے ہیں؟",
    "options": [
      "مردّف غزل",
      "غیر مردّف غزل",
      "آزاد غزل",
      "مقطع"
    ],
    "correct": "غیر مردّف غزل",
    "explanation": "جس غزل میں ردیف (شعر کے آخر میں ہو بہو دہرائے جانے والے الفاظ) کی پابندی نہ ہو، اسے 'غیر مردّف' غزل کہتے ہیں۔ جس میں ردیف ہو، اسے 'مردّف' کہتے ہیں۔ (A ghazal that does not have a radeef (the words repeated exactly at the end of the verses) is called a 'ghair-muraddaf' ghazal. One that has a radeef is called 'muraddaf'.)"
  },
  {
    "id": 79,
    "text": "'لائق' کا متضاد کیا ہے؟",
    "options": [
      "نالائق",
      "بے لائق",
      "غیر لائق",
      "کم لائق"
    ],
    "correct": "نالائق",
    "explanation": "لفظ 'لائق' (capable) کا صحیح متضاد 'نالائق' (incapable) ہے، جو 'نا' کا سابقہ لگا کر بنایا گیا ہے۔ (The correct antonym for the word 'laaiq' (capable) is 'na-laaiq' (incapable), which is formed by adding the prefix 'na'.)"
  },
  {
    "id": 80,
    "text": "دو یا دو سے زیادہ الفاظ کے مجموعے کو، جو اہل زبان استعمال کرتے ہوں، کیا کہتے ہیں؟",
    "options": [
      "محاورہ",
      "کہاوت",
      "مرکب",
      "فقرہ"
    ],
    "correct": "مرکب",
    "explanation": "دو یا دو سے زیادہ بامعنی الفاظ کا مجموعہ 'مرکب' (Compound/Phrase) کہلاتا ہے، جیسے 'نیک لڑکا'۔ اگر یہ مجموعہ اپنے حقیقی معنی کے بجائے مجازی معنی دے تو محاورہ کہلاتا ہے۔ (A combination of two or more meaningful words is called a 'Murakkab' (Compound/Phrase), such as 'nek ladka' (good boy). If this combination gives a metaphorical meaning instead of its literal one, it is called an idiom.)"
  },
  {
    "id": 81,
    "text": "سوانح نگاری کس صنفِ ادب سے تعلق رکھتی ہے؟",
    "options": [
      "نظم",
      "افسانوی ادب",
      "نثر",
      "ڈرامہ"
    ],
    "correct": "نثر",
    "explanation": "سوانح نگاری (Biography) ادب کی نثری صنف (prose genre) ہے جس میں کسی شخص کی زندگی کے حالات و واقعات ترتیب سے بیان کیے جاتے ہیں۔ (Biography (Savanih Nigari) is a prose genre of literature in which the life events of a person are described chronologically.)"
  },
  {
    "id": 82,
    "text": "لفظ 'مغرب' کی ضد کیا ہے؟",
    "options": [
      "شمال",
      "جنوب",
      "مشرق",
      "افق"
    ],
    "correct": "مشرق",
    "explanation": "'مغرب' (West) سمت کا نام ہے اور اس کی ضد 'مشرق' (East) ہے۔ ('Maghrib' (West) is the name of a direction, and its opposite is 'Mashriq' (East).)"
  },
  {
    "id": 83,
    "text": "جس کلمہ سے کسی شخص، جگہ یا چیز کا نام معلوم ہو، وہ کیا کہلاتا ہے؟",
    "options": [
      "ضمیر",
      "فعل",
      "اسم",
      "حرف"
    ],
    "correct": "اسم",
    "explanation": "اسم (Noun) وہ کلمہ ہے جو کسی شخص (احمد)، جگہ (لاہور) یا چیز (کتاب) کے نام کو ظاہر کرتا ہے۔ (A noun (Ism) is a word that denotes the name of a person (Ahmad), place (Lahore), or thing (kitaab).)"
  },
  {
    "id": 84,
    "text": "وہ کونسا حرف ہے جو حیرت یا افسوس کے موقع پر بولا جاتا ہے؟",
    "options": [
      "حرفِ عطف",
      "حرفِ ربط",
      "حرفِ فجائیہ",
      "حرفِ شرط"
    ],
    "correct": "حرفِ فجائیہ",
    "explanation": "حرفِ فجائیہ (Interjection) وہ حرف ہے جو کسی جذبے جیسے خوشی، غم، حیرت یا افسوس کو ظاہر کرنے کے لیے استعمال ہو، مثلاً 'افسوس!'، 'واہ!'۔ (An interjection (Harf-e-Fajaiyah) is a word used to express an emotion such as happiness, sorrow, surprise, or regret, for example, 'afsos!', 'waah!'.)"
  },
  {
    "id": 85,
    "text": "غزل کا آخری شعر جس میں شاعر اپنا تخلص استعمال کرتا ہے، کیا کہلاتا ہے؟",
    "options": [
      "مطلع",
      "مقطع",
      "حسنِ مطلع",
      "بیت الغزل"
    ],
    "correct": "مقطع",
    "explanation": "غزل کے آخری شعر کو مقطع (Maqta) کہتے ہیں، بشرطیکہ اس میں شاعر نے اپنا تخلص (pen name) استعمال کیا ہو۔ اگر تخلص نہ ہو تو اسے صرف 'آخری شعر' کہیں گے۔ (The last couplet of a ghazal is called the Maqta, provided the poet has used their pen name (takhallus) in it. If there is no takhallus, it is simply called the 'last couplet'.)"
  },
  {
    "id": 86,
    "text": "لفظ 'قانون' کی جمع کیا ہے؟",
    "options": [
      "قانونیں",
      "قانونوں",
      "قوانین",
      "قانونات"
    ],
    "correct": "قوانین",
    "explanation": "عربی قواعد کے مطابق، لفظ 'قانون' (law) کی صحیح جمع 'قوانین' (laws) ہے۔ (According to Arabic rules, the correct plural for the word 'qanoon' (law) is 'qawaneen' (laws).)"
  },
  {
    "id": 87,
    "text": "'آبِ حیات' کس کی تصنیف ہے، جس میں اردو شاعری کی تاریخ بیان کی گئی ہے؟",
    "options": [
      "سرسید احمد خان",
      "الطاف حسین حالی",
      "محمد حسین آزاد",
      "شبلی نعمانی"
    ],
    "correct": "محمد حسین آزاد",
    "explanation": "'آبِ حیات' محمد حسین آزاد کی شہرہ آفاق تصنیف ہے۔ یہ اردو شعراء کا تذکرہ اور اردو شاعری کی تاریخ پر مبنی ایک اہم کتاب ہے۔ ('Aab-e-Hayat' is the famous work of Muhammad Hussain Azad. It is an important book based on the biographies of Urdu poets and the history of Urdu poetry.)"
  },
  {
    "id": 88,
    "text": "جب کسی لفظ کو اس کے حقیقی معنوں کی بجائے مجازی معنوں میں استعمال کیا جائے اور دونوں میں تشبیہ کا تعلق ہو تو اسے کیا کہتے ہیں؟",
    "options": [
      "کنایہ",
      "استعارہ",
      "تلمیح",
      "تشبیہ"
    ],
    "correct": "استعارہ",
    "explanation": "استعارہ (Metaphor) میں ایک چیز کو بعینہٖ دوسری چیز کہہ دیا جاتا ہے۔ اس میں حرفِ تشبیہ (جیسا، کی طرح) استعمال نہیں ہوتا، مثلاً 'میرا بیٹا شیر ہے'۔ (In a metaphor (Isti'ara), one thing is declared to be exactly another. Words of comparison (like, as) are not used, for example, 'My son is a lion'.)"
  },
  {
    "id": 89,
    "text": "لفظ 'خادم' کا مؤنث کیا ہوگا؟",
    "options": [
      "خادمہ",
      "خادمی",
      "خدمت",
      "خادمین"
    ],
    "correct": "خادمہ",
    "explanation": "مذکر 'خادم' (male servant) کا مؤنث (feminine) 'خادمہ' (female servant) ہوتا ہے۔ (The feminine of the masculine 'khadim' (male servant) is 'khadima' (female servant).)"
  },
  {
    "id": 90,
    "text": "جملہ مکمل کریں: 'اسلم _____ محنتی ہے اور ذہین بھی'۔",
    "options": [
      "صرف",
      "نہ صرف",
      "اگر",
      "جبکہ"
    ],
    "correct": "نہ صرف",
    "explanation": "یہاں جملے کی ساخت 'نہ صرف... بلکہ' یا 'نہ صرف... اور' والی ہے۔ صحیح جملہ ہوگا: 'اسلم نہ صرف محنتی ہے اور ذہین بھی' (یا '...بلکہ ذہین بھی')۔ (The structure of the sentence here is 'not only... but also'. The correct sentence would be: 'Aslam is not only hardworking but also intelligent'.)"
  },
  {
    "id": 91,
    "text": "رباعی میں کل کتنے مصرعے ہوتے ہیں؟",
    "options": [
      "دو",
      "چار",
      "چھ",
      "آٹھ"
    ],
    "correct": "چار",
    "explanation": "رباعی چار مصرعوں پر مشتمل ایک مختصر نظم ہوتی ہے جس کے پہلے، دوسرے اور چوتھے مصرعے میں قافیہ اور ردیف کی پابندی کی جاتی ہے۔ (A Rubai is a short poem consisting of four lines, in which the first, second, and fourth lines adhere to the same rhyme and refrain.)"
  },
  {
    "id": 92,
    "text": "وہ حروف جو دو جملوں کو ملانے کا کام کرتے ہیں، کیا کہلاتے ہیں؟",
    "options": [
      "حروفِ جار",
      "حروفِ عطف",
      "حروفِ ندا",
      "حروفِ استفہام"
    ],
    "correct": "حروفِ عطف",
    "explanation": "حروفِ عطف (Conjunctions) وہ حروف ہیں جو دو اسموں یا دو جملوں کو آپس میں ملاتے ہیں، جیسے 'اور'، 'و'، 'پھر'۔ (Conjunctions (Huroof-e-Atf) are words that connect two nouns or two sentences, such as 'aur', 'wa', 'phir'.)"
  },
  {
    "id": 93,
    "text": "'علم' کا مترادف کیا ہے؟",
    "options": [
      "عالم",
      "دانش",
      "عمل",
      "معلوم"
    ],
    "correct": "دانش",
    "explanation": "'علم' (knowledge) کا مترادف (synonym) 'دانش' (wisdom/knowledge) ہے۔ 'عالم' جاننے والے کو کہتے ہیں۔ ('Ilm' (knowledge) has a synonym 'daanish' (wisdom/knowledge). 'Aalim' refers to one who knows.)"
  },
  {
    "id": 94,
    "text": "کسی قول کو یا کسی کی کہی ہوئی بات کو جوں کا توں نقل کرنے کے لیے کونسی علامت استعمال ہوتی ہے؟",
    "options": [
      "قوسین ()",
      "سوالیہ ؟",
      "واوین ”“",
      "سکتہ ،"
    ],
    "correct": "واوین ”“",
    "explanation": "واوین (Quotation Marks/Inverted Commas) کا استعمال اس وقت کیا جاتا ہے جب کسی کی کہی ہوئی بات یا کسی کتاب کا اقتباس بغیر کسی تبدیلی کے نقل کرنا ہو۔ (Quotation Marks (Wawain) are used when quoting someone's exact words or citing a passage from a book without any change.)"
  },
  {
    "id": 95,
    "text": "اردو نثر میں داستان گوئی کی روایت کا سب سے بڑا نام کونسا ہے؟",
    "options": [
      "میر امن دہلوی",
      "رجب علی بیگ سرور",
      "پریم چند",
      "نذیر احمد"
    ],
    "correct": "میر امن دہلوی",
    "explanation": "میر امن دہلوی کو فورٹ ولیم کالج کی وجہ سے شہرت ملی۔ ان کی کتاب 'باغ و بہار' کو سادہ اور سلیس اردو نثر کا پہلا بہترین نمونہ مانا جاتا ہے، جس نے داستان گوئی کو ایک نیا انداز دیا۔ (Mir Amman Dehlvi gained fame due to Fort William College. His book 'Bagh-o-Bahar' is considered the first excellent example of simple and fluent Urdu prose, which gave a new style to storytelling (Dastan-goi).)"
  },
  {
    "id": 96,
    "text": "وہ اسم جو کسی کی اچھائی، برائی یا حالت کو ظاہر کرے، کیا کہلاتا ہے؟",
    "options": [
      "اسمِ ذات",
      "اسمِ صفت",
      "اسمِ موصوف",
      "اسمِ ضمیر"
    ],
    "correct": "اسمِ صفت",
    "explanation": "اسمِ صفت (Adjective) وہ اسم ہے جو کسی دوسرے اسم (موصوف) کی اچھائی، برائی، تعداد، یا مقدار کو ظاہر کرے، جیسے 'نیک'، 'برا'، 'گرم'۔ (An adjective (Ism-e-Sifat) is a word that describes the quality, demerit, number, or quantity of another noun (Mausoof), such as 'nek' (good), 'bura' (bad), 'garam' (hot).)"
  },
  {
    "id": 97,
    "text": "شعر میں ایسے دو الفاظ لانا جو معنی میں ایک دوسرے کی ضد ہوں، کونسی صنعت ہے؟",
    "options": [
      "صنعتِ لف و نشر",
      "صنعتِ تضاد",
      "صنعتِ مراعات النظیر",
      "صنعتِ ایہام"
    ],
    "correct": "صنعتِ تضاد",
    "explanation": "صنعتِ تضاد (Antithesis) میں شاعر شعر کی خوبصورتی بڑھانے کے لیے ایسے الفاظ استعمال کرتا ہے جو ایک دوسرے کے متضاد ہوں، جیسے 'دن' اور 'رات'۔ (In the poetic device of Tazaad (Antithesis), the poet uses words that are opposite to each other to enhance the beauty of the verse, such as 'day' and 'night'.)"
  },
  {
    "id": 98,
    "text": "لفظ 'شہر' کی جمع الجمع کیا ہے؟",
    "options": [
      "شہروں",
      "اشہار",
      "شہریات",
      "شہور"
    ],
    "correct": "شہور",
    "explanation": "جمع الجمع کا مطلب ہے جمع کی جمع۔ 'شہر' کی جمع 'اشہار' ہوتی ہے اور 'اشہار' کی جمع 'شہور' آتی ہے۔ (Jama-ul-Jama means the plural of a plural. The plural of 'shahr' is 'ash'haar', and the plural of 'ash'haar' is 'shuhoor'.)"
  },
  {
    "id": 99,
    "text": "وہ نام جو شاعر اپنے شعروں میں اصل نام کی جگہ استعمال کرتا ہے، کیا کہلاتا ہے؟",
    "options": [
      "لقب",
      "خطاب",
      "تخلص",
      "عرف"
    ],
    "correct": "تخلص",
    "explanation": "تخلص (Pen name) وہ مختصر نام ہے جسے شاعر اپنی شاعری میں، خاص طور پر غزل کے مقطع میں، اپنے اصل نام کی بجائے استعمال کرتے ہیں، جیسے اسد اللہ خان کا تخلص 'غالب'۔ (Takhallus (pen name) is the short name that a poet uses in their poetry, especially in the last couplet (maqta) of a ghazal, instead of their real name, for example, Asadullah Khan's takhallus was 'Ghalib'.)"
  },
  {
    "id": 100,
    "text": "بے جان اشیاء کی جنس کو کیا کہتے ہیں؟",
    "options": [
      "جنسِ حقیقی",
      "جنسِ عام",
      "جنسِ غیر حقیقی",
      "کوئی نہیں"
    ],
    "correct": "جنسِ غیر حقیقی",
    "explanation": "بے جان چیزوں کی تذکیر و تانیث (مذکر یا مؤنث ہونا) قواعد یا اہل زبان کے استعمال پر مبنی ہوتی ہے۔ اسے جنسِ غیر حقیقی کہتے ہیں، جیسے 'کرسی' (مؤنث) اور 'قلم' (مذکر)۔ (The gender of inanimate objects is based on grammatical rules or usage by native speakers. This is called non-real gender (Jins-e-Ghair Haqiqi), for example, 'kursi' (feminine) and 'qalam' (masculine).)"
  },
  {
    "id": 101,
    "text": "'فارغ التحصیل' میں 'فارغ' کیا ہے؟",
    "options": [
      "لاحقہ",
      "سابقہ",
      "مرکب",
      "مترادف"
    ],
    "correct": "سابقہ",
    "explanation": "'فارغ التحصیل' ایک مرکب لفظ ہے جس میں 'فارغ' پہلے آیا ہے اور 'التحصیل' بعد میں۔ اس ترکیب میں 'فارغ' سابقے (prefix) کا کام کر رہا ہے۔ ('Farigh-ut-tahseel' is a compound word where 'farigh' comes first and 'al-tahseel' second. In this combination, 'farigh' acts as a prefix.)"
  },
  {
    "id": 102,
    "text": "اردو کی پہلی خاتون ناول نگار کسے سمجھا جاتا ہے؟",
    "options": [
      "عصمت چغتائی",
      "قرۃ العین حیدر",
      "رشیدۃ النساء بیگم",
      "حجاب امتیاز علی"
    ],
    "correct": "رشیدۃ النساء بیگم",
    "explanation": "رشیدۃ النساء بیگم کو اردو کی پہلی ناول نگار خاتون مانا جاتا ہے۔ ان کا ناول 'اصلاح النساء' 1881 میں شائع ہوا۔ (Rashidat-un-Nisa Begum is considered the first female novelist of Urdu. Her novel 'Islah-un-Nisa' was published in 1881.)"
  },
  {
    "id": 103,
    "text": "'بادشاہ' کا مؤنث کیا ہے؟",
    "options": [
      "بادشاہی",
      "ملکہ",
      "رانی",
      "بیگم"
    ],
    "correct": "ملکہ",
    "explanation": "مذکر 'بادشاہ' (king) کے لیے مؤنث (feminine) کا لفظ 'ملکہ' (queen) استعمال ہوتا ہے۔ (For the masculine 'badshah' (king), the feminine word 'malika' (queen) is used.)"
  },
  {
    "id": 104,
    "text": "حروف 'ا، و، ی' جو لفظوں میں حرکت کا کام دیتے ہیں، کیا کہلاتے ہیں؟",
    "options": [
      "حروفِ صحیح",
      "حروفِ علت",
      "حروفِ شمسی",
      "حروفِ قمری"
    ],
    "correct": "حروفِ علت",
    "explanation": "حروفِ علت (Vowels) وہ حروف ہیں جو دوسرے حروف سے مل کر آواز پیدا کرنے یا اسے بدلنے میں مدد دیتے ہیں۔ اردو میں یہ تین ہیں: الف (ا)، واؤ (و)، اور یے (ی)۔ (Vowels (Huroof-e-Illat) are letters that help in producing or changing sound by combining with other letters. There are three in Urdu: Alif, Wao, and Ye.)"
  },
  {
    "id": 105,
    "text": "وہ نظم جس میں کسی کی تعریف یا ہجو کی جائے، کیا کہلاتی ہے؟",
    "options": [
      "مثنوی",
      "مرثیہ",
      "قصیدہ",
      "واسوخت"
    ],
    "correct": "قصیدہ",
    "explanation": "قصیدہ (Qasida) ایک ایسی صنفِ سخن ہے جس کا موضوع مدح (تعریف)، ہجو (برائی)، یا کوئی اور اہم واقعہ ہوتا ہے۔ اس کے پہلے شعر کے دونوں مصرعے ہم قافیہ و ہم ردیف ہوتے ہیں۔ (Qasida is a genre of poetry whose subject is praise (madah), satire (hijv), or some other important event. Both lines of its first couplet have the same rhyme and refrain.)"
  },
  {
    "id": 106,
    "text": "لفظ 'جاہل' کی ضد کیا ہے؟",
    "options": [
      "عالم",
      "علم",
      "نادان",
      "بیوقوف"
    ],
    "correct": "عالم",
    "explanation": "'جاہل' (ignorant) کا متضاد 'عالم' (knowledgeable/scholar) ہے۔ ('Jahil' (ignorant) has the antonym 'aalim' (knowledgeable/scholar).)"
  },
  {
    "id": 107,
    "text": "'مرزا غالب' میں 'مرزا' کیا ہے؟",
    "options": [
      "تخلص",
      "لقب",
      "خطاب",
      "عرف"
    ],
    "correct": "خطاب",
    "explanation": "خطاب وہ اعزازی نام ہے جو حکومت یا قوم کی طرف سے کسی کو اس کی خدمات کے اعتراف میں دیا جائے۔ مغل بادشاہ کی طرف سے غالب کو 'نجم الدولہ دبیر الملک نظام جنگ' کا خطاب دیا گیا تھا، اور 'مرزا' بھی اسی زمرے میں آتا ہے۔ (A title (Khitab) is an honorary name given by the government or nation in recognition of services. Ghalib was given the title 'Najm-ud-Daula Dabir-ul-Mulk Nizam Jung' by the Mughal emperor, and 'Mirza' also falls into this category.)"
  },
  {
    "id": 108,
    "text": "علمِ بیان کی کتنی قسمیں ہیں؟",
    "options": [
      "دو",
      "تین",
      "چار",
      "پانچ"
    ],
    "correct": "چار",
    "explanation": "علمِ بیان کی چار اہم قسمیں ہیں: تشبیہ، استعارہ، کنایہ، اور مجازِ مرسل۔ (There are four main types of Ilm-e-Bayan (Rhetoric): Tashbeeh (Simile), Isti'ara (Metaphor), Kinaya (Allusion/Irony), and Majaz-e-Mursal (Metonymy).)"
  },
  {
    "id": 109,
    "text": "لفظ 'رسم' کی جمع کیا ہے؟",
    "options": [
      "رسمیں",
      "رسوم",
      "رسومات",
      "ب اور ج دونوں"
    ],
    "correct": "ب اور ج دونوں",
    "explanation": "'رسم' (custom) کی جمع 'رسوم' بھی ہے اور 'رسومات' (جو رسوم کی جمع ہے) بھی مستعمل ہے۔ لہذا دونوں درست ہیں۔ ('Rasm' (custom) has the plural 'rusoom', and 'rusumaat' (which is the plural of rusoom) is also commonly used. Therefore, both are correct.)"
  },
  {
    "id": 110,
    "text": "جس لفظ کے ایک سے زیادہ معنی ہوں، اسے کیا کہتے ہیں؟",
    "options": [
      "مترادف",
      "متضاد",
      "ذومعنی",
      "واحد"
    ],
    "correct": "ذومعنی",
    "explanation": "ذومعنی (Polysemous) وہ لفظ ہوتا ہے جس کے کم از کم دو معنی ہوں، اور جملے کے سیاق و سباق سے پتہ چلتا ہے کہ کونسا معنی مراد ہے۔ (A polysemous (Zu-Ma'ni) word is one that has at least two meanings, and the context of the sentence determines which meaning is intended.)"
  },
  {
    "id": 111,
    "text": "مصوری اور خطاطی کس ادیب کے اضافی فنون تھے؟",
    "options": [
      "ابوالکلام آزاد",
      "عبدالماجد دریاآبادی",
      "صادقین",
      "عبدالرحمٰن چغتائی"
    ],
    "correct": "عبدالرحمٰن چغتائی",
    "explanation": "عبدالرحمٰن چغتائی ایک عالمی شہرت یافتہ مصور اور خطاط تھے، لیکن انہوں نے افسانے بھی لکھے اور ادبی دنیا میں بھی اپنا مقام بنایا۔ (Abdur Rahman Chughtai was an internationally renowned painter and calligrapher, but he also wrote short stories and made his mark in the literary world.)"
  },
  {
    "id": 112,
    "text": "کلمہ کی کتنی قسمیں ہیں؟",
    "options": [
      "دو",
      "تین",
      "چار",
      "پانچ"
    ],
    "correct": "تین",
    "explanation": "بامعنی لفظ کو کلمہ کہتے ہیں۔ قواعد کی رو سے اس کی تین قسمیں ہیں: اسم، فعل، اور حرف۔ (A meaningful word is called a 'kalima'. According to grammar, it has three types: Ism (Noun), Fe'l (Verb), and Harf (Particle).)"
  },
  {
    "id": 113,
    "text": "لفظ 'انمول' میں 'ان' کیا ہے؟",
    "options": [
      "لاحقہ",
      "سابقہ",
      "حرفِ عطف",
      "حرفِ ربط"
    ],
    "correct": "سابقہ",
    "explanation": "یہاں 'ان' کا سابقہ (prefix) لفظ 'مول' (قیمت) سے پہلے لگایا گیا ہے، جس سے 'انمول' (بے قیمت، قیمتی) بنا ہے۔ ('An' is used as a prefix before the word 'mol' (price), creating 'anmol' (priceless, precious).)"
  },
  {
    "id": 114,
    "text": "وہ اسم جو کسی اوزار یا ہتھیار کا نام ہو، اسے کیا کہتے ہیں؟",
    "options": [
      "اسمِ مکبر",
      "اسمِ مصغر",
      "اسمِ آلہ",
      "اسمِ صوت"
    ],
    "correct": "اسمِ آلہ",
    "explanation": "اسمِ آلہ (Noun for a tool/instrument) وہ اسم ہے جو کسی آلے، اوزار یا ہتھیار کا نام ظاہر کرے، جیسے 'چاقو'، 'تلوار'، 'قلم'۔ (Ism-e-Aala is a noun that denotes the name of a tool, instrument, or weapon, such as 'chaqu' (knife), 'talwar' (sword), 'qalam' (pen).)"
  },
  {
    "id": 115,
    "text": "ناول 'آگ کا دریا' کس کی تخلیق ہے؟",
    "options": [
      "عصمت چغتائی",
      "قرۃ العین حیدر",
      "شوکت صدیقی",
      "عبداللہ حسین"
    ],
    "correct": "قرۃ العین حیدر",
    "explanation": "'آگ کا دریا' اردو ادب کا ایک شاہکار اور سنگِ میل ناول ہے، جسے قرۃ العین حیدر نے تحریر کیا ہے۔ ('Aag ka Darya' (River of Fire) is a masterpiece and a milestone novel in Urdu literature, written by Qurratulain Hyder.)"
  },
  {
    "id": 116,
    "text": "'آب آب کرنا' محاورے کا مطلب کیا ہے؟",
    "options": [
      "پانی پانی ہونا",
      "شرمندہ ہونا",
      "عزت اتارنا",
      "پانی مانگنا"
    ],
    "correct": "شرمندہ ہونا",
    "explanation": "محاورے 'آب آب کرنا' کا مطلب ہے کسی کو بہت زیادہ شرمندہ کرنا، اس کی عزت اتارنا۔ 'آب' کے ایک معنی عزت بھی ہیں۔ (The idiom 'aab aab karna' means to make someone very ashamed, to dishonor them. One of the meanings of 'aab' is honor.)"
  },
  {
    "id": 117,
    "text": "'شب' کا مترادف لفظ کونسا ہے؟",
    "options": [
      "روز",
      "لیل",
      "قمر",
      "ظلمت"
    ],
    "correct": "لیل",
    "explanation": "'شب' فارسی میں رات کو کہتے ہیں، جبکہ 'لیل' عربی میں رات کو کہتے ہیں۔ دونوں ہم معنی ہیں۔ 'روز' دن کو اور 'قمر' چاند کو کہتے ہیں۔ ('Shab' means night in Persian, while 'Lail' means night in Arabic. Both are synonyms. 'Roz' means day and 'Qamar' means moon.)"
  },
  {
    "id": 118,
    "text": "وہ کلمہ جو خود تو بے معنی ہو لیکن دوسرے کلمات کے ساتھ مل کر معنی دے، کیا کہلاتا ہے؟",
    "options": [
      "اسم",
      "فعل",
      "حرف",
      "صفت"
    ],
    "correct": "حرف",
    "explanation": "حرف (Particle) وہ کلمہ ہے جو اکیلے کوئی معنی نہیں رکھتا لیکن اسموں اور فعلوں کو آپس میں ملا کر جملے کا مطلب پورا کرتا ہے، جیسے 'کا'، 'کی'، 'نے'، 'پر'۔ (A particle (Harf) is a word that has no meaning on its own but completes the meaning of a sentence by connecting nouns and verbs, such as 'ka', 'ki', 'ne', 'par'.)"
  },
  {
    "id": 119,
    "text": "سرسید احمد خان کی سوانح عمری 'حیاتِ جاوید' کس نے لکھی؟",
    "options": [
      "محمد حسین آزاد",
      "شبلی نعمانی",
      "الطاف حسین حالی",
      "ڈپٹی نذیر احمد"
    ],
    "correct": "الطاف حسین حالی",
    "explanation": "'حیاتِ جاوید' الطاف حسین حالی کی لکھی ہوئی ایک مشہور اور ضخیم سوانح عمری ہے جو انہوں نے اپنے استاد اور مصلح سرسید احمد خان کی زندگی پر لکھی۔ ('Hayat-e-Javed' is a famous and voluminous biography written by Altaf Hussain Hali on the life of his teacher and reformer, Sir Syed Ahmed Khan.)"
  },
  {
    "id": 120,
    "text": "جملے کے آخر میں بات مکمل ہونے پر کونسی علامت لگائی جاتی ہے؟",
    "options": [
      "، (سکتہ)",
      "؛ (وقفہ)",
      "۔ (ختمہ)",
      "؟ (سوالیہ)"
    ],
    "correct": "۔ (ختمہ)",
    "explanation": "ختمہ (Full Stop/Period) کی علامت اس وقت استعمال ہوتی ہے جب ایک جملہ مکمل ہو جائے، سوائے سوالیہ اور فجائیہ جملوں کے۔ (The full stop (Khatma) symbol is used when a sentence is complete, except for interrogative and exclamatory sentences.)"
  },
  {
    "id": 121,
    "text": "تدریسی و اکتسابی آلات کا بنیادی مقصد کیا ہے؟",
    "options": [
      "کمرہ جماعت کو سجانا",
      "تدریس کو آسان اور موثر بنانا",
      "طلبہ کو مصروف رکھنا",
      "استاد کا کام کم کرنا"
    ],
    "correct": "تدریس کو آسان اور موثر بنانا",
    "explanation": "تدریسی معاون اشیاء کا بنیادی مقصد سیکھنے کے عمل کو دلچسپ، ٹھوس اور آسان بنا کر تدریس کو زیادہ مؤثر بنانا ہے تاکہ طلباء تصورات کو بہتر طریقے سے سمجھ سکیں۔\n (The primary purpose of Teaching-Learning Materials (TLMs) is to make teaching more effective by making the learning process interesting, concrete, and easy so that students can understand concepts better.)"
  },
  {
    "id": 122,
    "text": "مندرجہ ذیل میں سے کون سا سمعی آلہ ہے؟",
    "options": [
      "چارٹ",
      "ماڈل",
      "ریڈیو",
      "فلیش کارڈ"
    ],
    "correct": "ریڈیو",
    "explanation": "سمعی آلہ وہ ہوتا ہے جس سے صرف سنا جا سکتا ہو۔ ریڈیو ایک ایسا ہی آلہ ہے جس کے ذریعے طلباء سن کر معلومات حاصل کرتے ہیں۔ چارٹ، ماڈل اور فلیش کارڈ بصری آلات ہیں۔\n (An audio aid is one that can only be heard. The radio is such a device through which students acquire information by listening. Charts, models, and flashcards are visual aids.)"
  },
  {
    "id": 123,
    "text": "گلوب کس قسم کی تدریسی شے کی مثال ہے؟",
    "options": [
      "بصری امداد",
      "تہہ ابعادی امداد",
      "گرافک امداد",
      "نمائشی امداد"
    ],
    "correct": "تہہ ابعادی امداد",
    "explanation": "گلوب ایک سہ جہتی یا تہہ ابعادی شے ہے جو زمین کی حقیقی شکل کو ظاہر کرتی ہے۔ یہ ماڈل کی ایک قسم ہے اور ٹھوس تجربہ فراہم کرتا ہے۔\n (A globe is a three-dimensional object that represents the actual shape of the Earth. It is a type of model and provides a concrete experience.)"
  },
  {
    "id": 124,
    "text": "تدریسی مواد کا انتخاب کرتے وقت سب سے اہم اصول کیا ہے؟",
    "options": [
      "مواد مہنگا ہونا چاہئے",
      "مواد استاد کو پسند ہونا چاہئے",
      "مواد تدریسی مقاصد اور طلباء کی سطح کے مطابق ہو",
      "مواد آسانی سے دستیاب ہو"
    ],
    "correct": "مواد تدریسی مقاصد اور طلباء کی سطح کے مطابق ہو",
    "explanation": "تدریسی مواد کے انتخاب کا سب سے اہم اصول یہ ہے کہ وہ سبق کے مقاصد کو پورا کرتا ہو اور طلباء کی عمر، ذہنی سطح اور دلچسپی کے مطابق ہو تاکہ سیکھنے کا عمل کامیاب رہے۔\n (The most important principle for selecting teaching material is that it should fulfill the objectives of the lesson and be appropriate to the students' age, mental level, and interest to ensure successful learning.)"
  },
  {
    "id": 125,
    "text": "وہ کون سا آلہ ہے جو ساکت تصاویر کو بڑا کر کے پردے پر دکھاتا ہے؟",
    "options": [
      "ایپی ڈایاسکوپ",
      "گراموفون",
      "ٹیپ ریکارڈر",
      "کمپیوٹر"
    ],
    "correct": "ایپی ڈایاسکوپ",
    "explanation": "ایپی ڈایاسکوپ، جسے اوپیک پروجیکٹر بھی کہتے ہیں، ایک ایسا آلہ ہے جو غیر شفاف اشیاء جیسے کتاب کے صفحات یا تصاویر کی تصویر کو بڑا کرکے اسکرین پر دکھا سکتا ہے۔\n (An epidiascope, also known as an opaque projector, is a device that can project and enlarge images of opaque objects, such as book pages or pictures, onto a screen.)"
  },
  {
    "id": 126,
    "text": "کردار نگاری کو کس قسم کی معاون شے شمار کیا جاتا ہے؟",
    "options": [
      "سمعی امداد",
      "بصری امداد",
      "سرگرمی پر مبنی امداد",
      "تظلیلی امداد"
    ],
    "correct": "سرگرمی پر مبنی امداد",
    "explanation": "کردار نگاری ایک سرگرمی پر مبنی امداد ہے کیونکہ اس میں طلباء خود حصہ لیتے ہیں، کردار ادا کرتے ہیں، اور عملی طور پر سیکھتے ہیں۔ یہ محض دیکھنے یا سننے تک محدود نہیں ہے۔\n (Role-playing is an activity-based aid because students themselves participate, act out roles, and learn by doing. It is not limited to just seeing or hearing.)"
  },
  {
    "id": 127,
    "text": "سمعی و بصری آلات کا سب سے بڑا فائدہ کیا ہے؟",
    "options": [
      "یہ سستے ہوتے ہیں",
      "یہ ایک سے زیادہ حواس کو متحرک کرتے ہیں",
      "یہ وقت بچاتے ہیں",
      "انہیں استعمال کرنا آسان ہے"
    ],
    "correct": "یہ ایک سے زیادہ حواس کو متحرک کرتے ہیں",
    "explanation": "سمعی و بصری آلات کا سب سے بڑا فائدہ یہ ہے کہ وہ طلباء کے دیکھنے اور سننے، دونوں حواس کو استعمال کرتے ہیں، جس سے سیکھنا زیادہ موثر اور دیرپا ہوتا ہے۔\n (The biggest advantage of audio-visual aids is that they engage both the students' senses of sight and hearing, which makes learning more effective and long-lasting.)"
  },
  {
    "id": 128,
    "text": "زبان کی تدریس کے لیے مباحثہ کروانا کس قسم کی سرگرمی ہے؟",
    "options": [
      "نصابی سرگرمی",
      "ہم نصابی / زائد نصابی سرگرمی",
      "غیر تدریسی سرگرمی",
      "جسمانی سرگرمی"
    ],
    "correct": "ہم نصابی / زائد نصابی سرگرمی",
    "explanation": "مباحثہ ایک ہم نصابی سرگرمی ہے جو باقاعدہ نصاب کا حصہ نہ ہوتے ہوئے بھی زبان سیکھنے کے مقاصد، جیسے بولنے کی مہارت اور تنقیدی سوچ کو فروغ دینے میں مدد کرتی ہے۔\n (Debate is a co-curricular activity that, while not part of the formal curriculum, helps achieve language learning objectives such as developing speaking skills and critical thinking.)"
  },
  {
    "id": 129,
    "text": "اسکول میگزین کی اشاعت کا بنیادی مقصد کیا ہے؟",
    "options": [
      "اسکول کی تشہیر کرنا",
      "پیسہ کمانا",
      "طلباء کی تخلیقی اور تحریری صلاحیتوں کو فروغ دینا",
      "اساتذہ کی صلاحیتوں کو ظاہر کرنا"
    ],
    "correct": "طلباء کی تخلیقی اور تحریری صلاحیتوں کو فروغ دینا",
    "explanation": "اسکول میگزین طلباء کو ایک پلیٹ فارم مہیا کرتا ہے جہاں وہ اپنی تحریریں (کہانیاں، نظمیں، مضامین) شائع کروا سکتے ہیں، جس سے ان کی تخلیقی اور تحریری صلاحیتوں کی حوصلہ افزائی ہوتی ہے۔\n (The school magazine provides a platform for students to publish their writings (stories, poems, articles), which encourages their creative and writing abilities.)"
  },
  {
    "id": 130,
    "text": "زبان کی مہارتوں کو فروغ دینے کے لیے ڈرامہ یا تمثیل نگاری کیوں مفید ہے؟",
    "options": [
      "اس سے صرف اداکاری سیکھی جاتی ہے",
      "یہ مکالموں کی ادائیگی اور خود اعتمادی کو بہتر بناتا ہے",
      "یہ وقت کا ضیاع ہے",
      "اس میں بہت خرچ آتا ہے"
    ],
    "correct": "یہ مکالموں کی ادائیگی اور خود اعتمادی کو بہتر بناتا ہے",
    "explanation": "ڈرامہ میں حصہ لینے سے طلباء کو کردار کے مطابق مکالمے بولنے کی مشق ہوتی ہے، جس سے ان کا تلفظ، لب و لہجہ اور بولنے کا انداز بہتر ہوتا ہے اور ان میں خود اعتمادی پیدا ہوتی ہے۔\n (Participating in drama gives students practice in delivering dialogues according to their characters, which improves their pronunciation, tone, and speaking style, and builds their self-confidence.)"
  },
  {
    "id": 131,
    "text": "بیت بازی کی سرگرمی کس چیز میں سب سے زیادہ معاون ہے؟",
    "options": [
      "قواعد سیکھنے میں",
      "اشعار کو یاد رکھنے اور ذخیرہ الفاظ بڑھانے میں",
      "خوشخطی بہتر بنانے میں",
      "کہانی لکھنے میں"
    ],
    "correct": "اشعار کو یاد رکھنے اور ذخیرہ الفاظ بڑھانے میں",
    "explanation": "بیت بازی ایک دلچسپ کھیل اور زائد نصابی سرگرمی ہے جس کے ذریعے طلباء بہت سے اشعار یاد کرتے ہیں۔ اس سے ان کا ادبی ذوق اور ذخیرہ الفاظ بھی بہتر ہوتا ہے۔\n (Bait Bazi is an interesting game and co-curricular activity through which students memorize many couplets. It also improves their literary taste and vocabulary.)"
  },
  {
    "id": 132,
    "text": "نصابی اور زائد نصابی سرگرمیوں میں بنیادی فرق کیا ہے؟",
    "options": [
      "ایک کمرے میں ہوتی ہے، دوسری باہر",
      "ایک لازمی ہوتی ہے، دوسری اختیاری",
      "ایک کا امتحان ہوتا ہے، دوسری کا نہیں",
      "مذکورہ تمام"
    ],
    "correct": "مذکورہ تمام",
    "explanation": "نصابی سرگرمیاں کمرہ جماعت میں ہوتی ہیں، لازمی ہوتی ہیں اور ان کا باقاعدہ امتحان ہوتا ہے۔ جبکہ زائد نصابی سرگرمیاں عموماً کمرہ جماعت سے باہر، اختیاری ہوتی ہیں اور ان کا مقصد ہمہ جہت ترقی ہوتا ہے نہ کہ صرف امتحان۔\n (Curricular activities take place in the classroom, are compulsory, and are formally assessed. In contrast, co-curricular activities are generally optional, held outside the classroom, and aim for holistic development rather than just examination.)"
  },
  {
    "id": 133,
    "text": "تقریری مقابلہ منعقد کرنے سے طلباء کی کونسی مہارت پروان چڑھتی ہے؟",
    "options": [
      "سننے کی مہارت",
      "لکھنے کی مہارت",
      "بولنے اور اظہار خیال کی مہارت",
      "پڑھنے کی مہارت"
    ],
    "correct": "بولنے اور اظہار خیال کی مہارت",
    "explanation": "تقریری مقابلے طلباء کو عوامی سطح پر اعتماد کے ساتھ بولنے، اپنے خیالات کو منظم انداز میں پیش کرنے اور زبان کا موثر استعمال کرنے کا بہترین موقع فراہم کرتے ہیں۔\n (Elocution competitions provide students with an excellent opportunity to speak confidently in public, present their ideas in an organized manner, and use language effectively.)"
  },
  {
    "id": 134,
    "text": "تعلیمی دورے زبان سیکھنے میں کیسے مددگار ثابت ہوتے ہیں؟",
    "options": [
      "یہ صرف تفریح کا ذریعہ ہیں",
      "یہ طلباء کو حقیقی دنیا کے تجربات سے جوڑتے ہیں اور نئے الفاظ سکھاتے ہیں",
      "یہ نصاب کو مکمل کرنے میں رکاوٹ ہیں",
      "ان کا زبان سیکھنے سے کوئی تعلق نہیں"
    ],
    "correct": "یہ طلباء کو حقیقی دنیا کے تجربات سے جوڑتے ہیں اور نئے الفاظ سکھاتے ہیں",
    "explanation": "تعلیمی دورے طلباء کو ٹھوس تجربات فراہم کرتے ہیں۔ جب وہ نئی جگہیں دیکھتے ہیں اور ان کے بارے میں بات کرتے یا لکھتے ہیں، تو وہ سیاق و سباق میں نئے الفاظ اور تصورات سیکھتے ہیں۔\n (Educational trips provide students with concrete experiences. When they see new places and talk or write about them, they learn new vocabulary and concepts in context.)"
  },
  {
    "id": 135,
    "text": "سبق کی منصوبہ بندی کا پہلا مرحلہ کیا ہے؟",
    "options": [
      "سرگرمیوں کا انتخاب",
      "تدریسی مقاصد کا تعین",
      "گھر کا کام دینا",
      "جانچ کے سوالات تیار کرنا"
    ],
    "correct": "تدریسی مقاصد کا تعین",
    "explanation": "کسی بھی سبق کی منصوبہ بندی کا آغاز ہمیشہ تدریسی مقاصد کے تعین سے ہوتا ہے۔ استاد کو پہلے یہ واضح کرنا ہوتا ہے کہ سبق کے اختتام پر طلباء کیا جاننے یا کرنے کے قابل ہو جائیں گے۔\n (The planning of any lesson always begins with determining the instructional objectives. The teacher must first clarify what the students will be able to know or do by the end of the lesson.)"
  },
  {
    "id": 136,
    "text": "سالانہ منصوبہ بندی کون تیار کرتا ہے؟",
    "options": [
      "صرف پرنسپل",
      "صرف مضمون کا استاد",
      "مضمون کے اساتذہ اور اسکول انتظامیہ مل کر",
      "محکمہ تعلیم"
    ],
    "correct": "مضمون کے اساتذہ اور اسکول انتظامیہ مل کر",
    "explanation": "سالانہ منصوبہ بندی ایک مشترکہ کوشش ہوتی ہے جس میں مضمون کے اساتذہ تعلیمی سال کے لیے نصاب کی تقسیم، امتحانات اور سرگرمیوں کا خاکہ اسکول انتظامیہ کے ساتھ مل کر تیار کرتے ہیں۔\n (Annual planning is a collaborative effort in which subject teachers, together with the school administration, prepare an outline for the division of the syllabus, examinations, and activities for the academic year.)"
  },
  {
    "id": 137,
    "text": "اکائی منصوبے سے کیا مراد ہے؟",
    "options": [
      "ایک دن کی تدریس کا منصوبہ",
      "ایک ہفتے کی تدریس کا منصوبہ",
      "متعلقہ اسباق کے ایک مجموعے کی تدریس کا منصوبہ",
      "پورے سال کی تدریس کا منصوبہ"
    ],
    "correct": "متعلقہ اسباق کے ایک مجموعے کی تدریس کا منصوبہ",
    "explanation": "اکائی منصوبہ نصاب کی ایک بڑی اکائی یا ایک جیسے موضوعات پر مشتمل کئی اسباق کی تدریس کے لیے بنایا گیا ایک جامع منصوبہ ہوتا ہے، جو کئی ہفتوں پر محیط ہو سکتا ہے۔\n (A unit plan is a comprehensive plan designed for teaching a large unit of the syllabus or a collection of related lessons, which may span several weeks.)"
  },
  {
    "id": 138,
    "text": "سبق کے منصوبے میں تمہید کا کیا مقصد ہوتا ہے؟",
    "options": [
      "سبق کا خلاصہ بیان کرنا",
      "طلبہ کے سابقہ علم کو نئے سبق سے جوڑنا اور دلچسپی پیدا کرنا",
      "طلبہ کو ڈرانا",
      "سبق کی طوالت بڑھانا"
    ],
    "correct": "طلبہ کے سابقہ علم کو نئے سبق سے جوڑنا اور دلچسپی پیدا کرنا",
    "explanation": "تمہید کا مقصد طلباء سے کچھ سوالات یا گفتگو کے ذریعے ان کی پچھلی معلومات کو جانچنا، اسے نئے سبق سے جوڑنا اور سبق میں ان کی دلچسپی اور آمادگی پیدا کرنا ہے۔\n (The purpose of the introduction is to assess students' prior knowledge through some questions or discussion, connect it to the new lesson, and generate their interest and readiness for the lesson.)"
  },
  {
    "id": 139,
    "text": "منصوبہ بندی کا سب سے بڑا فائدہ کیا ہے؟",
    "options": [
      "تدریس کو بے مقصد بناتی ہے",
      "تدریس کو منظم، بامقصد اور موثر بناتی ہے",
      "استاد کو پابند کرتی ہے",
      "وقت کا ضیاع ہوتا ہے"
    ],
    "correct": "تدریس کو منظم، بامقصد اور موثر بناتی ہے",
    "explanation": "اچھی منصوبہ بندی اس بات کو یقینی بناتی ہے کہ تدریس منظم طریقے سے ہو، اس کے واضح مقاصد ہوں، اور وقت اور وسائل کا بہترین استعمال ہو، جس سے تدریس موثر اور کامیاب ہوتی ہے۔\n (Good planning ensures that teaching is organized, has clear objectives, and makes the best use of time and resources, thereby making teaching effective and successful.)"
  },
  {
    "id": 140,
    "text": "ہربرٹ کے پانچ مراحل کس سے تعلق رکھتے ہیں؟",
    "options": [
      "سالانہ منصوبہ بندی",
      "اکائی منصوبہ بندی",
      "سبق کی منصوبہ بندی",
      "تشخیصی منصوبہ بندی"
    ],
    "correct": "سبق کی منصوبہ بندی",
    "explanation": "ماہر تعلیم ہربرٹ نے سبق کی منصوبہ بندی کے لیے ایک منظم طریقہ پیش کیا جسے ہربرٹین فائیو سٹیپس کہا جاتا ہے۔ یہ مراحل ہیں: تیاری، پیشکش، موازنہ، عمومیت، اور اطلاق۔\n (The educator Herbart proposed a systematic method for lesson planning known as the Herbartian Five Steps. These steps are: Preparation, Presentation, Association, Generalization, and Application.)"
  },
  {
    "id": 141,
    "text": "سبق کے منصوبے کا اعادہ والا حصہ کب آتا ہے؟",
    "options": [
      "سبق کے شروع میں",
      "سبق کے درمیان میں",
      "سبق پڑھانے کے بعد",
      "کبھی نہیں"
    ],
    "correct": "سبق پڑھانے کے بعد",
    "explanation": "اعادہ سبق کے اختتام پر کیا جاتا ہے۔ اس مرحلے میں استاد چند سوالات کے ذریعے یہ جانچتا ہے کہ طلباء نے پڑھائے گئے مواد کو کس حد تک سمجھا ہے اور اہم نکات کو دہراتا ہے۔\n (Recapitulation is done at the end of the lesson. In this stage, the teacher assesses the students' understanding of the taught material through a few questions and repeats the main points.)"
  },
  {
    "id": 142,
    "text": "مسلسل اور جامع جانچ میں مسلسل سے کیا مراد ہے؟",
    "options": [
      "ہر روز امتحان لینا",
      "تدریس کے عمل کے دوران مسلسل جانچ",
      "صرف سال کے آخر میں امتحان لینا",
      "امتحان نہ لینا"
    ],
    "correct": "تدریس کے عمل کے دوران مسلسل جانچ",
    "explanation": "مسلسل کا مطلب ہے کہ طلباء کی جانچ صرف مدتی امتحانات تک محدود نہ ہو، بلکہ یہ تدریس کے پورے عمل کے دوران جاری رہے تاکہ سیکھنے کے خلا کی بروقت نشاندہی اور اصلاح ہو سکے۔\n ('Continuous' means that student assessment is not limited to term exams but continues throughout the teaching-learning process to timely identify and remedy learning gaps.)"
  },
  {
    "id": 143,
    "text": "تشکیلی جانچ کا بنیادی مقصد کیا ہے؟",
    "options": [
      "طلباء کو پاس یا فیل قرار دینا",
      "طلباء کی درجہ بندی کرنا",
      "تدریس اور اکتساب کے عمل کو بہتر بنانے کے لیے فیڈ بیک فراہم کرنا",
      "والدین کو رپورٹ بھیجنا"
    ],
    "correct": "تدریس اور اکتساب کے عمل کو بہتر بنانے کے لیے فیڈ بیک فراہم کرنا",
    "explanation": "تشکیلی جانچ کا اصل مقصد تدریس کے دوران طلباء کی کارکردگی کو جانچنا ہے تاکہ استاد اور طالب علم دونوں کو فیڈ بیک ملے اور وہ اپنی تدریسی حکمت عملی اور سیکھنے کے طریقے کو بہتر بنا سکیں۔\n (The main purpose of formative assessment is to monitor student performance during instruction to provide feedback to both teachers and students for improving their teaching strategies and learning methods.)"
  },
  {
    "id": 144,
    "text": "مجموعی جانچ کب کی جاتی ہے؟",
    "options": [
      "ہر سبق کے بعد",
      "تدریسی مدت کے اختتام پر",
      "روزانہ",
      "کلاس میں داخلے کے وقت"
    ],
    "correct": "تدریسی مدت کے اختتام پر",
    "explanation": "مجموعی جانچ عام طور پر ایک تدریسی مدت، جیسے ایک ٹرم یا سال کے آخر میں کی جاتی ہے۔ اس کا مقصد یہ فیصلہ کرنا ہوتا ہے کہ طالب علم نے مقررہ نصاب میں کس حد تک مہارت حاصل کی ہے۔\n (Summative assessment is typically conducted at the end of an instructional period, such as a term or a year. Its purpose is to determine the extent to which a student has mastered the prescribed curriculum.)"
  },
  {
    "id": 145,
    "text": "مندرجہ ذیل میں سے کون سا تشکیلی جانچ کا ایک آلہ ہے؟",
    "options": [
      "سالانہ امتحان",
      "کلاس ٹیسٹ",
      "داخلہ امتحان",
      "بورڈ کا امتحان"
    ],
    "correct": "کلاس ٹیسٹ",
    "explanation": "کلاس ٹیسٹ، کوئز، ہوم ورک، اور مشاہدہ تشکیلی جانچ کے عام آلات ہیں۔ ان کا مقصد سیکھنے کے عمل کی نگرانی کرنا ہے، جبکہ سالانہ امتحان مجموعی جانچ کی مثال ہے۔\n (Class tests, quizzes, homework, and observation are common tools of formative assessment. Their purpose is to monitor the learning process, whereas an annual exam is an example of summative assessment.)"
  },
  {
    "id": 146,
    "text": "مسلسل و جامع جانچ میں جامع کا کیا مطلب ہے؟",
    "options": [
      "صرف تعلیمی مضامین کی جانچ",
      "طلباء کے تعلیمی اور ہم نصابی دونوں پہلوؤں کی جانچ",
      "صرف جسمانی ترقی کی جانچ",
      "صرف اخلاقی پہلوؤں کی جانچ"
    ],
    "correct": "طلباء کے تعلیمی اور ہم نصابی دونوں پہلوؤں کی جانچ",
    "explanation": "جامع کا مطلب ہے کہ بچے کی شخصیت کے تمام پہلوؤں یعنی علمی اور غیر علمی یا ہم نصابی جیسے کہ فنون، صحت، اور سماجی مہارتوں کا بھی جائزہ لیا جائے۔\n ('Comprehensive' means assessing all aspects of a child's personality, i.e., both scholastic and co-scholastic areas such as arts, health, and social skills.)"
  },
  {
    "id": 147,
    "text": "پورٹ فولیو کیا ہے؟",
    "options": [
      "ایک قسم کا امتحان",
      "ایک مدت کے دوران طالب علم کے کام کا ایک منظم مجموعہ",
      "حاضری کا رجسٹر",
      "اسکول کا کیلنڈر"
    ],
    "correct": "ایک مدت کے دوران طالب علم کے کام کا ایک منظم مجموعہ",
    "explanation": "پورٹ فولیو ایک فائل یا فولڈر ہوتا ہے جس میں ایک مخصوص مدت کے دوران طالب علم کے بہترین کام کے نمونے (جیسے اسائنمنٹس، ڈرائنگز، ٹیسٹ) جمع کیے جاتے ہیں تاکہ اس کی ترقی اور کوششوں کو دکھایا جا سکے۔\n (A portfolio is a file or folder containing a systematic collection of a student's work samples (like assignments, drawings, tests) over a period to showcase their progress and efforts.)"
  },
  {
    "id": 148,
    "text": "جانچ اور پیمائش میں کیا فرق ہے؟",
    "options": [
      "کوئی فرق نہیں",
      "پیمائش مقداری ہے، جبکہ جانچ مقداری اور معیاری دونوں ہے",
      "جانچ مقداری ہے، جبکہ پیمائش معیاری ہے",
      "پیمائش ایک وسیع تصور ہے"
    ],
    "correct": "پیمائش مقداری ہے، جبکہ جانچ مقداری اور معیاری دونوں ہے",
    "explanation": "پیمائش صرف عددی یا مقداری تفصیل فراہم کرتی ہے (جیسے 100 میں سے 70 نمبر)۔ جبکہ جانچ ایک وسیع عمل ہے جس میں پیمائش کے ساتھ ساتھ معیاری بھی شامل ہے (جیسے 70 نمبر 'اچھا' ہے یا 'برا')۔\n (Measurement only provides a numerical or quantitative description (e.g., 70 marks out of 100). Whereas, evaluation is a broader process that includes measurement as well as qualitative judgment (e.g., whether 70 marks is 'good' or 'bad').)"
  },
  {
    "id": 149,
    "text": "بلیک بورڈ کو استعمال کرنے کا بہترین طریقہ کیا ہے؟",
    "options": [
      "اس پر صرف سوالات لکھنا",
      "اس پر بے ترتیبی سے لکھنا",
      "صاف، واضح اور منظم طریقے سے اہم نکات لکھنا",
      "اسے خالی چھوڑ دینا"
    ],
    "correct": "صاف، واضح اور منظم طریقے سے اہم نکات لکھنا",
    "explanation": "بلیک بورڈ یا وائٹ بورڈ ایک اہم بصری امداد ہے۔ اس کا موثر استعمال یہ ہے کہ لکھائی صاف اور بڑی ہو، اہم نکات کو منظم طریقے سے لکھا جائے اور غیر ضروری چیزوں کو مٹا دیا جائے۔\n (The blackboard or whiteboard is an important visual aid. Its effective use involves writing clearly and legibly, presenting key points in an organized manner, and erasing unnecessary information.)"
  },
  {
    "id": 150,
    "text": "کمپیوٹر کی مدد سے تدریس کس قسم کی تدریسی امداد ہے؟",
    "options": [
      "روایتی امداد",
      "جدید ٹیکنالوجی پر مبنی امداد",
      "صرف سمعی امداد",
      "صرف بصری امداد"
    ],
    "correct": "جدید ٹیکنالوجی پر مبنی امداد",
    "explanation": "کمپیوٹر کی مدد سے تدریس ایک جدید طریقہ ہے جو ٹیکنالوجی کا استعمال کرتا ہے۔ یہ انٹرایکٹو ہوتا ہے اور سمعی و بصری دونوں طرح کے تجربات فراہم کر سکتا ہے۔\n (Computer-Assisted Learning (CAL) is a modern method that uses technology. It is interactive and can provide both audio and visual experiences.)"
  },
  {
    "id": 151,
    "text": "ایک استاد زبان کی کلاس میں طلباء کو مقامی اخبارات سے خبریں جمع کرنے اور پڑھنے کو کہتا ہے۔ یہ سرگرمی کیا کہلائے گی؟",
    "options": [
      "نصابی سرگرمی",
      "زائد نصابی سرگرمی",
      "غیر تعلیمی سرگرمی",
      "وقت کا ضیاع"
    ],
    "correct": "زائد نصابی سرگرمی",
    "explanation": "یہ ایک زائد نصابی سرگرمی ہے جو نصاب سے باہر ہے لیکن زبان کی مہارتوں، خاص طور پر پڑھنے کی فہم اور حقیقی زندگی کے مواد سے واقفیت کو فروغ دیتی ہے۔\n (This is a co-curricular activity that is outside the syllabus but promotes language skills, especially reading comprehension and familiarity with real-life material.)"
  },
  {
    "id": 152,
    "text": "زائد نصابی سرگرمیوں کو منظم کرنے کی بنیادی ذمہ داری کس کی ہوتی ہے؟",
    "options": [
      "صرف طلباء",
      "اسکول انتظامیہ اور اساتذہ",
      "صرف والدین",
      "محکمہ تعلیم"
    ],
    "correct": "اسکول انتظامیہ اور اساتذہ",
    "explanation": "اگرچہ طلباء ان سرگرمیوں میں حصہ لیتے ہیں، لیکن ان کی منصوبہ بندی، تنظیم اور نگرانی کی بنیادی ذمہ داری اسکول انتظامیہ اور متعلقہ اساتذہ کی ہوتی ہے۔\n (Although students participate in these activities, the primary responsibility for their planning, organization, and supervision lies with the school administration and teachers.)"
  },
  {
    "id": 153,
    "text": "ایک اچھا سبق کا منصوبہ کیسا ہونا چاہئے؟",
    "options": [
      "بہت سخت اور غیر لچکدار",
      "مختصر اور نامکمل",
      "واضح، جامع اور لچکدار",
      "صرف استاد کے لیے قابل فہم"
    ],
    "correct": "واضح، جامع اور لچکدار",
    "explanation": "ایک اچھے سبق کے منصوبے کو واضح مقاصد کے ساتھ جامع ہونا چاہئے، لیکن اسے اتنا لچکدار بھی ہونا چاہئے کہ استاد کمرہ جماعت کی غیر متوقع ضروریات کے مطابق اس میں تبدیلی کر سکے۔\n (A good lesson plan should be comprehensive with clear objectives, but it should also be flexible enough for the teacher to make adjustments according to the unexpected needs of the classroom.)"
  },
  {
    "id": 154,
    "text": "منصوبہ بندی کے بغیر تدریس کی مثال کیسی ہے؟",
    "options": [
      "ایک کامیاب سفر کی طرح",
      "بغیر نقشے کے سفر کی طرح",
      "ایک منظم کھیل کی طرح",
      "ایک دلچسپ کہانی کی طرح"
    ],
    "correct": "بغیر نقشے کے سفر کی طرح",
    "explanation": "منصوبہ بندی کے بغیر پڑھانا ایسا ہی ہے جیسے کوئی مسافر بغیر نقشے یا منزل کے تعین کے سفر پر نکل جائے۔ تدریس بے سمت اور غیر موثر ہو جاتی ہے۔\n (Teaching without a plan is like a traveler setting out on a journey without a map or a destination. The teaching becomes directionless and ineffective.)"
  },
  {
    "id": 155,
    "text": "ایک استاد سبق کے دوران طلباء سے سوالات کیوں پوچھتا ہے؟",
    "options": [
      "وقت گزارنے کے لیے",
      "طلباء کو سزا دینے کے لیے",
      "یہ جانچنے کے لیے کہ وہ سمجھ رہے ہیں اور انہیں متحرک رکھنے کے لیے",
      "اپنا علم دکھانے کے لیے"
    ],
    "correct": "یہ جانچنے کے لیے کہ وہ سمجھ رہے ہیں اور انہیں متحرک رکھنے کے لیے",
    "explanation": "سبق کے دوران سوالات پوچھنا تشکیلی جانچ کا ایک اہم حصہ ہے۔ اس سے استاد کو یہ معلوم ہوتا ہے کہ طلباء کی توجہ برقرار ہے اور وہ سبق کو سمجھ رہے ہیں یا نہیں۔\n (Asking questions during a lesson is a key part of formative assessment. It helps the teacher to know if students are paying attention and understanding the lesson.)"
  },
  {
    "id": 156,
    "text": "تشخیصی جانچ کا کیا مقصد ہے؟",
    "options": [
      "طلباء کو گریڈ دینا",
      "طلباء کی کمزوریوں اور سیکھنے میں دشواریوں کی مخصوص وجوہات معلوم کرنا",
      "اگلی کلاس میں ترقی دینا",
      "طلباء کا موازنہ کرنا"
    ],
    "correct": "طلباء کی کمزوریوں اور سیکھنے میں دشواریوں کی مخصوص وجوہات معلوم کرنا",
    "explanation": "تشخیصی جانچ کا مقصد کسی طالب علم کی سیکھنے میں پیش آنے والی مشکلات کی گہرائی میں جا کر ان کی اصل وجہ معلوم کرنا ہے تاکہ اس کے مطابق اصلاحی تدریس کا انتظام کیا جا سکے۔\n (The purpose of a diagnostic test is to delve deeper into a student's learning difficulties to find out their specific causes, so that remedial teaching can be arranged accordingly.)"
  },
  {
    "id": 157,
    "text": "ایک اچھے امتحانی پرچے کی خصوصیت کیا نہیں ہے؟",
    "options": [
      "معروضیت",
      "جامعیت",
      "مبہم ہونا",
      "اعتبار"
    ],
    "correct": "مبہم ہونا",
    "explanation": "ایک اچھے ٹیسٹ میں معروضیت، جامعیت، اعتبار اور معقولیت ہونی چاہئے۔ سوالات واضح اور غیر مبہم ہونے چاہئیں تاکہ طلباء انہیں صحیح طور پر سمجھ سکیں۔ مبہم ہونا ایک خامی ہے۔\n (A good test should have objectivity, comprehensiveness, reliability, and validity. Questions should be clear and unambiguous so that students can understand them correctly. Ambiguity is a flaw.)"
  },
  {
    "id": 158,
    "text": "زبانی امتحان کے ذریعے کس مہارت کی جانچ بہترین طریقے سے ہوتی ہے؟",
    "options": [
      "خوشخطی",
      "بولنے کی روانی اور تلفظ",
      "قواعد کے اصول",
      "رفتار سے لکھنا"
    ],
    "correct": "بولنے کی روانی اور تلفظ",
    "explanation": "زبانی امتحان بولنے کی مہارتوں جیسے روانی، درست تلفظ، لب و لہجہ اور اعتماد کے ساتھ اظہار خیال کرنے کی صلاحیت کو جانچنے کا سب سے موثر طریقہ ہے۔\n (An oral test is the most effective way to assess speaking skills such as fluency, correct pronunciation, intonation, and the ability to express oneself confidently.)"
  },
  {
    "id": 159,
    "text": "فلیش کارڈز کا استعمال کس سطح کے طلباء کے لیے زیادہ مفید ہے؟",
    "options": [
      "ابتدائی سطح",
      "ثانوی سطح",
      "اعلیٰ ثانوی سطح",
      "کالج کی سطح"
    ],
    "correct": "ابتدائی سطح",
    "explanation": "فلیش کارڈز چھوٹے بچوں کے لیے بہت مفید ہوتے ہیں تاکہ وہ حروف، الفاظ، تصاویر اور بنیادی تصورات کو بصری طور پر پہچاننا اور یاد کرنا سیکھ سکیں۔\n (Flash cards are very useful for young children to learn to visually recognize and remember letters, words, pictures, and basic concepts.)"
  },
  {
    "id": 160,
    "text": "زبان کی لیبارٹری کس مہارت کو بہتر بنانے پر زیادہ توجہ دیتی ہے؟",
    "options": [
      "لکھنے کی مہارت",
      "پڑھنے کی مہارت",
      "سننے اور بولنے کی مہارت",
      "سوچنے کی مہارت"
    ],
    "correct": "سننے اور بولنے کی مہارت",
    "explanation": "زبان کی لیبارٹری ایک ٹیکنالوجی سے لیس کمرہ ہوتا ہے جہاں طلباء ہیڈ فون کا استعمال کرکے معیاری تلفظ سنتے ہیں اور اپنی آواز ریکارڈ کرکے اس کا موازنہ کرتے ہیں، جس سے سننے اور بولنے کی مہارتیں بہتر ہوتی ہیں۔\n (A language laboratory is a technology-equipped room where students use headphones to listen to standard pronunciation and record their own voices to compare, thereby improving their listening and speaking skills.)"
  },
  {
    "id": 161,
    "text": "اگر ایک استاد کمرہ جماعت میں طلباء کو دو گروہوں میں تقسیم کرکے کسی موضوع پر بات کرنے کو کہتا ہے، تو یہ کونسی سرگرمی ہے؟",
    "options": [
      "گروہی مباحثہ",
      "لیکچر",
      "خاموش مطالعہ",
      "املا نویسی"
    ],
    "correct": "گروہی مباحثہ",
    "explanation": "یہ سرگرمی گروہی مباحثہ کہلاتی ہے۔ یہ ایک ہم نصابی سرگرمی ہے جو طلباء میں باہمی تعاون، اظہار خیال اور دوسروں کے نقطہ نظر کو سننے کی صلاحیتوں کو فروغ دیتی ہے۔\n (This activity is called a group discussion. It is a co-curricular activity that promotes cooperation, expression of ideas, and the ability to listen to others' viewpoints among students.)"
  },
  {
    "id": 162,
    "text": "ایک کامیاب منصوبہ بندی کے لیے سب سے ضروری کیا ہے؟",
    "options": [
      "واضح مقاصد",
      "مہنگے وسائل",
      "طویل دورانیہ",
      "سخت نظم و ضبط"
    ],
    "correct": "واضح مقاصد",
    "explanation": "کسی بھی قسم کی منصوبہ بندی (سالانہ، اکائی یا سبق) کی کامیابی کا انحصار سب سے پہلے واضح اور قابل حصول مقاصد پر ہوتا ہے۔ اگر مقاصد ہی واضح نہ ہوں تو منصوبہ بندی بے سمت ہو جائے گی۔\n (The success of any type of planning (annual, unit, or lesson) primarily depends on clear and achievable objectives. If the objectives themselves are not clear, the planning will be directionless.)"
  },
  {
    "id": 163,
    "text": "جانچ کا مقصد سزا دینا نہیں بلکہ _______ ہے۔",
    "options": [
      "ڈرانا",
      "سیکھنے میں مدد کرنا",
      "مقابلہ کروانا",
      "وقت ضائع کرنا"
    ],
    "correct": "سیکھنے میں مدد کرنا",
    "explanation": "جدید تعلیمی تصورات کے مطابق، جانچ کا مقصد طلباء کو سزا دینا یا ڈرانا نہیں، بلکہ ان کی سیکھنے کی خامیوں کی نشاندہی کرکے انہیں دور کرنے اور سیکھنے کے عمل کو بہتر بنانے میں مدد کرنا ہے۔\n (According to modern educational concepts, the purpose of assessment is not to punish or intimidate students, but to identify their learning gaps and help them overcome them to improve the learning process.)"
  },
  {
    "id": 164,
    "text": "چارٹ اور پوسٹر کس قسم کے تدریسی آلات ہیں؟",
    "options": [
      "سمعی آلات",
      "بصری آلات",
      "سمعی و بصری آلات",
      "سرگرمی پر مبنی آلات"
    ],
    "correct": "بصری آلات",
    "explanation": "چارٹ اور پوسٹر بصری آلات ہیں کیونکہ ان پر موجود معلومات کو طلباء دیکھ کر حاصل کرتے ہیں۔ یہ پیچیدہ معلومات کو آسان اور منظم طریقے سے پیش کرنے میں مددگار ہوتے ہیں۔\n (Charts and posters are visual aids because students acquire information from them by seeing. They are helpful in presenting complex information in a simple and organized manner.)"
  },
  {
    "id": 165,
    "text": "زائد نصابی سرگرمیوں کا بنیادی فائدہ کیا ہے؟",
    "options": [
      "طلباء کو تھکا دینا",
      "طلباء کی ہمہ جہت شخصیت کی نشوونما",
      "نصابی بوجھ میں اضافہ کرنا",
      "امتحان میں اچھے نمبر دلانا"
    ],
    "correct": "طلباء کی ہمہ جہت شخصیت کی نشوونما",
    "explanation": "زائد نصابی سرگرمیوں کا بنیادی فائدہ طلباء کی مجموعی یا ہمہ جہت شخصیت کو فروغ دینا ہے، جس میں سماجی، جذباتی، جسمانی اور تخلیقی پہلو شامل ہیں۔\n (The primary benefit of co-curricular activities is to foster the holistic personality of students, which includes social, emotional, physical, and creative aspects.)"
  },
  {
    "id": 166,
    "text": "سبق کا منصوبہ کس کے لیے ایک رہنما کا کام کرتا ہے؟",
    "options": [
      "طالب علم",
      "والدین",
      "استاد",
      "پرنسپل"
    ],
    "correct": "استاد",
    "explanation": "سبق کا منصوبہ بنیادی طور پر استاد کے لیے ایک روڈ میپ یا رہنما دستاویز ہے، جو اسے بتاتا ہے کہ اسے ایک مخصوص پیریڈ میں کیا، کیوں، اور کیسے پڑھانا ہے۔\n (A lesson plan is primarily a roadmap or guiding document for the teacher, which tells him/her what, why, and how to teach in a specific period.)"
  },
  {
    "id": 167,
    "text": "جانچ کا عمل کب شروع ہوتا ہے؟",
    "options": [
      "تدریسی عمل کے شروع میں",
      "تدریسی عمل کے آخر میں",
      "تدریسی عمل کے ساتھ ساتھ",
      "امتحان سے پہلے"
    ],
    "correct": "تدریسی عمل کے شروع میں",
    "explanation": "ایک موثر تدریسی نظام میں جانچ کا عمل تدریس کے آغاز سے ہی شروع ہو جاتا ہے (جیسے سابقہ علم کی جانچ)، تدریس کے دوران جاری رہتا ہے (تشکیلی جانچ) اور آخر میں بھی ہوتا ہے (مجموعی جانچ)۔\n (In an effective teaching system, the process of evaluation begins right from the start of instruction (e.g., assessing prior knowledge), continues during instruction (formative assessment), and also occurs at the end (summative assessment).)"
  },
  {
    "id": 168,
    "text": "تدریسی امدادی اشیاء کے استعمال کا ایک اہم اصول ہے کہ وہ _______ ہوں۔",
    "options": [
      "صرف سجاوٹ کا کام دیں",
      "سبق کے مقاصد سے براہ راست متعلق ہوں",
      "استعمال میں بہت پیچیدہ ہوں",
      "بہت نایاب ہوں"
    ],
    "correct": "سبق کے مقاصد سے براہ راست متعلق ہوں",
    "explanation": "تدریسی مواد کو صرف دکھاوے کے لیے استعمال نہیں کرنا چاہیے۔ یہ ضروری ہے کہ وہ سبق کے مخصوص مقاصد کو حاصل کرنے میں براہ راست مددگار ثابت ہو اور موضوع سے متعلق ہو۔\n (Teaching aids should not be used merely for decoration. It is essential that they are directly relevant to the specific objectives of the lesson and related to the topic.)"
  },
  {
    "id": 169,
    "text": "کونسی سرگرمی طلباء میں سننے اور توجہ دینے کی مہارت کو فروغ دیتی ہے؟",
    "options": [
      "املا نویسی",
      "خوشخطی کا مقابلہ",
      "تصویر بنانا",
      "کھیل کود"
    ],
    "correct": "املا نویسی",
    "explanation": "املا نویسی ایک ایسی سرگرمی ہے جس میں طلباء کو غور سے سننا پڑتا ہے اور پھر اسے لکھنا ہوتا ہے۔ اس سے ان کی سننے کی مہارت، توجہ اور ہجوں کی درستگی بہتر ہوتی ہے۔\n (Dictation is an activity in which students have to listen carefully and then write it down. This improves their listening skills, concentration, and spelling accuracy.)"
  },
  {
    "id": 170,
    "text": "ایک استاد اپنے پورے سال کے تدریسی کام کو مہینوں اور ہفتوں میں تقسیم کرتا ہے۔ یہ کیا کہلاتا ہے؟",
    "options": [
      "سبق کا منصوبہ",
      "اکائی منصوبہ",
      "سالانہ منصوبہ",
      "روزانہ کی ڈائری"
    ],
    "correct": "سالانہ منصوبہ",
    "explanation": "سالانہ منصوبہ وہ جامع منصوبہ ہے جس میں ایک استاد پورے تعلیمی سال کے نصاب، سرگرمیوں اور امتحانات کو مہینوں اور ہفتوں کی بنیاد پر تقسیم کرتا ہے تاکہ نصاب وقت پر مکمل ہو سکے۔\n (An annual plan is the comprehensive plan in which a teacher divides the entire academic year's syllabus, activities, and examinations on a monthly and weekly basis to ensure timely completion of the curriculum.)"
  },
  {
    "id": 171,
    "text": "گریڈنگ کس قسم کی جانچ کا نتیجہ ہے؟",
    "options": [
      "تشکیلی جانچ",
      "تشخیصی جانچ",
      "مجموعی جانچ",
      "خود تشخیصی"
    ],
    "correct": "مجموعی جانچ",
    "explanation": "گریڈنگ یا طلباء کی درجہ بندی کرنا عام طور پر مجموعی جانچ کے بعد کیا جاتا ہے، جو ایک مدت کے اختتام پر طالب علم کی مجموعی کارکردگی کا خلاصہ پیش کرتی ہے۔\n (Grading or ranking students is typically done after summative assessment, which summarizes a student's overall performance at the end of a term.)"
  },
  {
    "id": 172,
    "text": "اوور ہیڈ پروجیکٹر کا استعمال کرتے وقت کیا چیز استعمال کی جاتی ہے؟",
    "options": [
      "کاغذ کی سلائیڈز",
      "ٹرانسپیرنسی شیٹس",
      "کتابیں",
      "ماڈلز"
    ],
    "correct": "ٹرانسپیرنسی شیٹس",
    "explanation": "اوور ہیڈ پروجیکٹر میں شفاف پلاسٹک کی شیٹس، جنہیں ٹرانسپیرنسی کہتے ہیں، استعمال ہوتی ہیں۔ ان پر لکھ کر یا پرنٹ کرکے مواد کو پردے پر دکھایا جاتا ہے۔\n (In an overhead projector, transparent plastic sheets, called transparencies, are used. Material is projected onto a screen by writing or printing on them.)"
  },
  {
    "id": 173,
    "text": "طلباء کو تعلیمی میدان کے دورے پر لے جانا کس اصول پر مبنی ہے؟",
    "options": [
      "کر کے سیکھنے کے اصول پر",
      "تجریدی سیکھنے کے اصول پر",
      "یاد کرنے کے اصول پر",
      "سزا کے اصول پر"
    ],
    "correct": "کر کے سیکھنے کے اصول پر",
    "explanation": "تعلیمی دورے 'کر کے سیکھنے' اور 'براہ راست تجربے سے سیکھنے' کے اصول پر مبنی ہیں۔ جب طلباء چیزوں کو خود دیکھتے اور محسوس کرتے ہیں تو ان کی سیکھ دیرپا ہوتی ہے۔\n (Educational tours are based on the principle of 'Learning by Doing' and 'Learning from Direct Experience'. When students see and experience things for themselves, their learning is more lasting.)"
  },
  {
    "id": 174,
    "text": "ایک سبق کے منصوبے میں گھر کا کام دینے کا مقصد کیا ہوتا ہے؟",
    "options": [
      "طلباء کو سزا دینا",
      "والدین کو مصروف رکھنا",
      "سیکھے ہوئے تصورات کی مشق اور توسیع کرنا",
      "کاپیوں کو بھرنا"
    ],
    "correct": "سیکھے ہوئے تصورات کی مشق اور توسیع کرنا",
    "explanation": "گھر کا کام دینے کا مقصد یہ ہوتا ہے کہ طلباء نے جو کچھ کلاس میں سیکھا ہے، وہ اس کی مشق کریں، اسے مستحکم کریں اور اس علم کا اطلاق نئی صورتحال پر کریں۔\n (The purpose of giving a home assignment is for students to practice and reinforce what they have learned in class and to apply that knowledge to new situations.)"
  },
  {
    "id": 175,
    "text": "جانچ کا کون سا طریقہ استاد کے ذاتی تعصب سے سب سے کم متاثر ہوتا ہے؟",
    "options": [
      "مضمون نویسی کا امتحان",
      "معروضی امتحان",
      "انٹرویو",
      "زبانی امتحان"
    ],
    "correct": "معروضی امتحان",
    "explanation": "معروضی امتحانات (جیسے کثیر الانتخابی سوالات، صحیح/غلط) میں جوابات پہلے سے طے شدہ اور مخصوص ہوتے ہیں، اس لیے جانچنے والے کے ذاتی خیالات یا تعصب کا اثر نتیجہ پر نہیں پڑتا۔\n (In objective tests (like multiple-choice questions, true/false), the answers are predetermined and specific, so the examiner's personal opinions or bias do not affect the result.)"
  },
  {
    "id": 176,
    "text": "ایک استاد طلباء کی شرکت کو یقینی بنانے کے لیے کونسی تدریسی امداد استعمال کر سکتا ہے؟",
    "options": [
      "صرف لیکچر کا طریقہ",
      "انٹرایکٹو وائٹ بورڈ",
      "صرف کتاب",
      "خاموشی سے پڑھانا"
    ],
    "correct": "انٹرایکٹو وائٹ بورڈ",
    "explanation": "انٹرایکٹو وائٹ بورڈ ایک جدید آلہ ہے جو طلباء کو بورڈ پر لکھنے، تصاویر کو حرکت دینے اور سرگرمیوں میں براہ راست حصہ لینے کی اجازت دیتا ہے، جس سے ان کی شرکت اور دلچسپی بڑھتی ہے۔\n (An interactive whiteboard is a modern tool that allows students to write on the board, move images, and participate directly in activities, thereby increasing their engagement and interest.)"
  },
  {
    "id": 177,
    "text": "کونسی سرگرمی کا مقصد بنیادی طور پر طلباء میں مسابقت کے بجائے تعاون کو فروغ دینا ہے؟",
    "options": [
      "امتحان میں پہلی پوزیشن کا مقابلہ",
      "گروہی پروجیکٹ",
      "تقریری مقابلہ",
      "دوڑ کا مقابلہ"
    ],
    "correct": "گروہی پروجیکٹ",
    "explanation": "گروہی پروجیکٹ میں طلباء ایک مشترکہ مقصد کے حصول کے لیے مل کر کام کرتے ہیں۔ اس سے ان میں مسابقت کے بجائے باہمی تعاون، ذمہ داری اور ایک دوسرے کی مدد کرنے کا جذبہ پیدا ہوتا ہے۔\n (In a group project, students work together to achieve a common goal. This fosters a spirit of cooperation, responsibility, and helping each other, rather than competition.)"
  },
  {
    "id": 178,
    "text": "ایک استاد سبق پڑھانے سے پہلے طلباء سے کچھ سوالات کرتا ہے۔ یہ منصوبہ بندی کے کس مرحلے کا حصہ ہے؟",
    "options": [
      "پیشکش",
      "تمہید",
      "اطلاق",
      "اعادہ"
    ],
    "correct": "تمہید",
    "explanation": "یہ تمہید یا تیاری کا مرحلہ ہے۔ اس کا مقصد سابقہ علم کو جانچنا اور طلباء کو ذہنی طور پر نئے سبق کے لیے تیار کرنا ہے۔ اسے 'سابقہ علم کی جانچ' بھی کہتے ہیں۔\n (This is the introduction or preparation stage. Its purpose is to test prior knowledge and mentally prepare the students for the new lesson. It is also known as 'P.K. Testing'.)"
  },
  {
    "id": 179,
    "text": "تشخیص برائے اکتساب کس جانچ سے مطابقت رکھتی ہے؟",
    "options": [
      "مجموعی جانچ",
      "تشکیلی جانچ",
      "داخلی جانچ",
      "خارجی جانچ"
    ],
    "correct": "تشکیلی جانچ",
    "explanation": "تشخیص برائے اکتساب کا مطلب ہے کہ تشخیص کا مقصد سیکھنے کے عمل کو بہتر بنانا ہے۔ یہ تشکیلی جانچ کا بنیادی فلسفہ ہے، جو تدریس کے دوران فیڈ بیک فراہم کرتی ہے۔\n ('Assessment for Learning' means that the purpose of assessment is to improve the learning process. This is the core philosophy of Formative Assessment, which provides feedback during instruction.)"
  },
  {
    "id": 180,
    "text": "اکتساب کی تشخیص کس جانچ سے مطابقت رکھتی ہے؟",
    "options": [
      "مجموعی جانچ",
      "تشکیلی جانچ",
      "تشخیصی جانچ",
      "خود تشخیصی"
    ],
    "correct": "مجموعی جانچ",
    "explanation": "اکتساب کی تشخیص کا مطلب ہے کہ یہ جانچنا کہ کتنا سیکھا جا چکا ہے۔ یہ عام طور پر ایک مدت کے آخر میں ہوتا ہے اور اس کا مقصد گریڈنگ یا سرٹیفیکیشن ہوتا ہے، جو کہ مجموعی جانچ کا کام ہے۔\n ('Assessment of Learning' means to assess how much has been learned. This typically happens at the end of a period and its purpose is grading or certification, which is the function of Summative Assessment.)"
  },
  {
    "id": 181,
    "text": "”اردو برج بھاشا سے نکلی ہے“ یہ نظریہ کس نے پیش کیا؟",
    "options": [
      "محمود شیرانی",
      "مسعود حسین خان",
      "محمد حسین آزاد",
      "سید سلیمان ندوی"
    ],
    "correct": "محمد حسین آزاد",
    "explanation": "یہ مشہور نظریہ محمد حسین آزاد نے اپنی کتاب 'آبِ حیات' میں پیش کیا تھا، جس میں انہوں نے اردو کی ابتدا کو برج بھاشا سے جوڑا۔\n(This famous theory was presented by Muhammad Hussain Azad in his book 'Aab-e-Hayat', in which he linked the origin of Urdu to Braj Bhasha.)"
  },
  {
    "id": 182,
    "text": "زبان کی تدریس کے نفسی و حرکی مقاصد کا تعلق کس چیز سے ہے؟",
    "options": [
      "سوچ اور سمجھ سے",
      "احساسات اور جذبات سے",
      "جسمانی اعضاء کے استعمال سے",
      "معلومات حاصل کرنے سے"
    ],
    "correct": "جسمانی اعضاء کے استعمال سے",
    "explanation": "نفسی و حرکی (Psychomotor) مقاصد کا تعلق جسمانی مہارتوں سے ہوتا ہے، جیسے زبان کی تدریس میں درست تلفظ کے لیے اعضائے نطق کا استعمال اور خوشخطی کے لیے ہاتھ اور انگلیوں کا استعمال۔\n(Psychomotor objectives are related to physical skills, such as using speech organs for correct pronunciation and using hands and fingers for calligraphy in language teaching.)"
  },
  {
    "id": 183,
    "text": "سننے کی مہارت کو پروان چڑھانے کے لیے سب سے مؤثر سرگرمی کونسی ہے؟",
    "options": [
      "بلند خوانی کرنا",
      "کہانی سنانا اور سوالات پوچھنا",
      "خوشخطی کی مشق کرانا",
      "خاموش مطالعہ کرنا"
    ],
    "correct": "کہانی سنانا اور سوالات پوچھنا",
    "explanation": "جب استاد کہانی سناتا ہے اور طلباء اسے غور سے سن کر سوالات کے جواب دیتے ہیں تو اس سے ان کی سننے اور سمجھنے (comprehension) کی مہارت براہ راست پروان چڑھتی ہے۔\n(When a teacher tells a story and students listen carefully to answer questions, it directly develops their listening and comprehension skills.)"
  },
  {
    "id": 184,
    "text": "مانٹسوری طریقہ تدریس میں سب سے زیادہ زور کس حس پر دیا جاتا ہے؟",
    "options": [
      "سننے کی حس",
      "دیکھنے کی حس",
      "چھونے (لمس) کی حس",
      "چکھنے کی حس"
    ],
    "correct": "چھونے (لمس) کی حس",
    "explanation": "ماریہ مانٹسوری کے طریقہ تدریس میں بچوں کو حواس، خاص طور پر چھونے کی حس (sense of touch) کے ذریعے سکھانے پر بہت زور دیا جاتا ہے، جیسے ابھرے ہوئے حروف پر انگلی پھیر کر انہیں سیکھنا۔\n(In Maria Montessori's teaching method, great emphasis is placed on teaching children through the senses, especially the sense of touch, such as learning letters by tracing fingers over embossed shapes.)"
  },
  {
    "id": 185,
    "text": "حافظ محمود شیرانی کے مطابق اردو زبان نے کس علاقے میں جنم لیا؟",
    "options": [
      "دکن",
      "سندھ",
      "دہلی",
      "پنجاب"
    ],
    "correct": "پنجاب",
    "explanation": "حافظ محمود شیرانی نے اپنی کتاب 'پنجاب میں اردو' میں دلائل کے ساتھ یہ نظریہ پیش کیا کہ اردو زبان کی ابتدا پنجاب کے علاقے میں ہوئی۔\n(Hafiz Mahmood Shirani, in his book 'Punjab Mein Urdu', presented the theory with arguments that the Urdu language originated in the region of Punjab.)"
  },
  {
    "id": 186,
    "text": "مادری زبان میں تعلیم دینا کیوں ضروری ہے؟",
    "options": [
      "کیونکہ یہ ایک عالمی زبان ہے",
      "کیونکہ اس سے بچے آسانی سے اور فطری طور پر سیکھتے ہیں",
      "کیونکہ اس میں ملازمتیں زیادہ ہیں",
      "کیونکہ یہ لکھنا مشکل ہے"
    ],
    "correct": "کیونکہ اس سے بچے آسانی سے اور فطری طور پر سیکھتے ہیں",
    "explanation": "بچے مادری زبان سے پہلے سے واقف ہوتے ہیں، اس لیے اس زبان میں تعلیم دینے سے وہ نئے تصورات کو آسانی، تیزی اور قدرتی انداز میں سمجھ سکتے ہیں اور ان کا اعتماد بڑھتا ہے۔\n(Children are already familiar with their mother tongue, so educating them in this language helps them understand new concepts easily, quickly, and naturally, which boosts their confidence.)"
  },
  {
    "id": 187,
    "text": "پڑھنے کی کونسی قسم لطف اندوزی اور معلومات میں اضافے کے لیے کی جاتی ہے؟",
    "options": [
      "گہرا مطالعہ",
      "سرسری مطالعہ",
      "بلند خوانی",
      "خاموش خوانی"
    ],
    "correct": "سرسری مطالعہ",
    "explanation": "سرسری یا وسیع مطالعہ (Extensive Reading) عام طور پر لطف حاصل کرنے، عمومی معلومات بڑھانے اور پڑھنے کی عادت کو فروغ دینے کے لیے کیا جاتا ہے۔ اس میں تفصیلات پر زیادہ زور نہیں ہوتا۔\n(Extensive reading is generally done for pleasure, to increase general knowledge, and to promote the habit of reading. It does not focus much on details.)"
  },
  {
    "id": 188,
    "text": "کہانی سنانے کا طریقہ تدریس کس سطح کے طلباء کے لیے سب سے زیادہ موزوں ہے؟",
    "options": [
      "اعلیٰ ثانوی",
      "یونیورسٹی",
      "ابتدائی (پرائمری)",
      "ثانوی"
    ],
    "correct": "ابتدائی (پرائمری)",
    "explanation": "چھوٹے بچوں کی دلچسپی کہانیوں میں بہت زیادہ ہوتی ہے۔ کہانی کے ذریعے وہ نہ صرف لطف اندوز ہوتے ہیں بلکہ اخلاقیات، نئے الفاظ اور زبان کی ساخت بھی آسانی سے سیکھ جاتے ہیں۔\n(Young children are very interested in stories. Through storytelling, they not only enjoy themselves but also easily learn morals, new vocabulary, and language structure.)"
  },
  {
    "id": 189,
    "text": "مسعود حسین خان کا نظریہ آغازِ اردو کس علاقے سے متعلق ہے؟",
    "options": [
      "نواحِ دہلی",
      "اودھ",
      "بنگال",
      "گجرات"
    ],
    "correct": "نواحِ دہلی",
    "explanation": "ڈاکٹر مسعود حسین خان نے اپنے تحقیقی مقالے 'مقدمہ تاریخ زبان اردو' میں یہ ثابت کیا کہ اردو کا مولد و منشا دہلی اور اس کے آس پاس کا علاقہ (نواحِ دہلی) ہے۔\n(Dr. Masud Husain Khan, in his research thesis 'Muqaddama-e-Tarikh-e-Zaban-e-Urdu', proved that the origin and birthplace of Urdu is Delhi and its surrounding areas.)"
  },
  {
    "id": 190,
    "text": "تدریس کے ادراکی مقاصد کا تعلق ہے:",
    "options": [
      "کردار کی تعمیر سے",
      "علم، فہم اور اطلاق سے",
      "جسمانی نشوونما سے",
      "جذبات کی تربیت سے"
    ],
    "correct": "علم، فہم اور اطلاق سے",
    "explanation": "ادراکی (Cognitive) مقاصد کا تعلق ذہنی اور فکری صلاحیتوں سے ہوتا ہے، جیسے معلومات کو یاد رکھنا (علم)، اس کا مطلب سمجھنا (فہم)، اور اسے نئی صورتحال میں استعمال کرنا (اطلاق)۔\n(Cognitive objectives relate to mental and intellectual abilities, such as remembering information (knowledge), understanding its meaning (comprehension), and using it in new situations (application).)"
  },
  {
    "id": 191,
    "text": "لکھنے کی مہارت کا پہلا زینہ کیا ہے؟",
    "options": [
      "جملے لکھنا",
      "حروفِ تہجی کی شناخت اور بناوٹ",
      "کہانی لکھنا",
      "مضمون نویسی"
    ],
    "correct": "حروفِ تہجی کی شناخت اور بناوٹ",
    "explanation": "لکھنا سکھانے کا عمل حروف کی پہچان کرانے اور ان کی صحیح شکل (بناوٹ) سکھانے سے شروع ہوتا ہے۔ یہ تحریر کی بنیادی اکائی ہے۔\n(The process of teaching writing begins with recognizing the letters and teaching their correct formation. This is the basic unit of writing.)"
  },
  {
    "id": 192,
    "text": "کنڈر گارٹن طریقہ تدریس کا بانی کون ہے؟",
    "options": [
      "جان ڈیوی",
      "فریڈرک فروبل",
      "ماریہ مانٹسوری",
      "روسو"
    ],
    "correct": "فریڈرک فروبل",
    "explanation": "کنڈر گارٹن (جس کا مطلب 'بچوں کا باغ' ہے) کا تصور جرمن ماہرِ تعلیم فریڈرک فروبل نے پیش کیا تھا۔ اس میں بچوں کو کھیل کود اور سرگرمیوں کے ذریعے سکھایا جاتا ہے۔\n(The concept of Kindergarten (meaning 'children's garden') was introduced by the German educator Friedrich Froebel. In this method, children are taught through play and activities.)"
  },
  {
    "id": 193,
    "text": "زبان کی مختلف صورتوں میں 'بولی' سے کیا مراد ہے؟",
    "options": [
      "کسی ملک کی سرکاری زبان",
      "ایک محدود علاقے میں بولی جانے والی زبان کی مقامی شکل",
      "کتابوں اور ادب کی زبان",
      "دو لوگوں کے درمیان خفیہ زبان"
    ],
    "correct": "ایک محدود علاقے میں بولی جانے والی زبان کی مقامی شکل",
    "explanation": "'بولی' (Dialect) کسی زبان کی وہ قسم ہوتی ہے جو ایک مخصوص جغرافیائی علاقے کے لوگ بولتے ہیں اور اس کا اپنا خاص لہجہ اور کچھ مخصوص الفاظ ہوتے ہیں۔\n('Dialect' is a variety of a language spoken by people in a specific geographical area, having its own distinct accent and some unique vocabulary.)"
  },
  {
    "id": 194,
    "text": "جذباتی مقاصد کا تعلق طلباء کے کس پہلو سے ہے؟",
    "options": [
      "یادداشت",
      "سوچنے کی صلاحیت",
      "احساسات، جذبات اور رویے",
      "جسمانی صحت"
    ],
    "correct": "احساسات، جذبات اور رویے",
    "explanation": "تدریس کے جذباتی مقاصد (Affective Objectives) کا مقصد طلباء کے احساسات، دلچسپیوں، قدروں اور رویوں میں مثبت تبدیلیاں لانا ہوتا ہے، جیسے ادب سے لگاؤ پیدا کرنا۔\n(The affective objectives of teaching aim to bring positive changes in students' feelings, interests, values, and attitudes, such as developing an appreciation for literature.)"
  },
  {
    "id": 195,
    "text": "بولنے کی مہارت میں روانی پیدا کرنے کے لیے کونسی سرگرمی مفید ہے؟",
    "options": [
      "خاموشی سے کتاب پڑھنا",
      "املا لکھنا",
      "مکالمہ اور مباحثہ",
      "نقل کرنا"
    ],
    "correct": "مکالمہ اور مباحثہ",
    "explanation": "مکالمہ (Dialogue) اور مباحثہ (Debate) طلباء کو اپنے خیالات کو منظم کرکے بے جھجک بولنے کے مواقع فراہم کرتے ہیں، جس سے ان کی گفتاری صلاحیتوں میں روانی آتی ہے۔\n(Dialogue and debate provide students with opportunities to organize their thoughts and speak confidently, which improves their speaking fluency.)"
  },
  {
    "id": 196,
    "text": "منصوبی طریقہ کا بنیادی اصول کیا ہے؟",
    "options": [
      "یاد کرنا اور سنانا",
      "استاد کی نقل کرنا",
      "کر کے سیکھنا",
      "صرف کتاب سے پڑھنا"
    ],
    "correct": "کر کے سیکھنا",
    "explanation": "منصوبی طریقہ تدریس (Project Method) اس نظریے پر مبنی ہے کہ طلباء اس وقت بہترین سیکھتے ہیں جب وہ کسی مقصد کے تحت حقیقی زندگی سے جڑے ہوئے کام یا منصوبے کو خود انجام دیتے ہیں۔ اس کا بنیادی اصول 'کر کے سیکھنا' (Learning by Doing) ہے۔\n(The project method of teaching is based on the idea that students learn best when they themselves carry out a purposeful task or project related to real life. Its basic principle is 'Learning by Doing'.)"
  },
  {
    "id": 197,
    "text": "اردو کے لیے 'ریختہ' کا لفظ کس دور میں مقبول ہوا؟",
    "options": [
      "ابتدائی دور میں",
      "مغلیہ دور کے وسطی اور آخری زمانے میں",
      "انگریزوں کے دور میں",
      "دورِ جدید میں"
    ],
    "correct": "مغلیہ دور کے وسطی اور آخری زمانے میں",
    "explanation": "اٹھارہویں صدی میں 'ریختہ' کی اصطلاح اس زبان کے لیے عام طور پر استعمال کی جاتی تھی جسے آج ہم اردو کہتے ہیں، خاص طور پر شاعری کے لیے۔ میر و سودا کے دور میں یہ بہت مقبول تھی۔\n(In the 18th century, the term 'Rekhta' was commonly used for the language we now call Urdu, especially for poetry. It was very popular during the era of Mir and Sauda.)"
  },
  {
    "id": 198,
    "text": "پرائمری سطح پر بچوں کی زبان کی صلاحیتوں کو فروغ دینے کا بہترین طریقہ کیا ہے؟",
    "options": [
      "صرف قواعد کے اصول رٹوانا",
      "انہیں زبان استعمال کرنے کے زیادہ سے زیادہ مواقع فراہم کرنا",
      "سخت امتحانات لینا",
      "صرف نصابی کتاب پڑھانا"
    ],
    "correct": "انہیں زبان استعمال کرنے کے زیادہ سے زیادہ مواقع فراہم کرنا",
    "explanation": "بچے زبان کو استعمال کرکے ہی سیکھتے ہیں۔ انہیں سننے، بولنے، پڑھنے اور لکھنے کے دلچسپ اور بامعنی مواقع (جیسے کھیل، کہانیاں، گفتگو) فراہم کرنا ان کی صلاحیتوں کو نکھارنے کا سب سے مؤثر طریقہ ہے۔\n(Children learn language by using it. Providing them with interesting and meaningful opportunities to listen, speak, read, and write (like games, stories, conversations) is the most effective way to develop their skills.)"
  },
  {
    "id": 199,
    "text": "املا کا مقصد کن دو بنیادی مہارتوں کی جانچ کرنا ہوتا ہے؟",
    "options": [
      "پڑھنا اور بولنا",
      "سننا اور لکھنا",
      "بولنا اور سمجھنا",
      "دیکھنا اور پڑھنا"
    ],
    "correct": "سننا اور لکھنا",
    "explanation": "املا (Dictation) میں طالب علم استاد کی بولی ہوئی عبارت کو سنتا ہے (سننے کی مہارت) اور پھر اسے درست ہجوں کے ساتھ لکھتا ہے (لکھنے کی مہارت)۔\n(In dictation, a student listens to the passage spoken by the teacher (listening skill) and then writes it with correct spelling (writing skill).)"
  },
  {
    "id": 200,
    "text": "قواعد کی تدریس کا استقرائی طریقہ کیا ہے؟",
    "options": [
      "پہلے اصول بتا کر مثالیں دینا",
      "پہلے کئی مثالیں دے کر اصول اخذ کروانا",
      "صرف اصول یاد کروانا",
      "صرف مثالیں حل کروانا"
    ],
    "correct": "پہلے کئی مثالیں دے کر اصول اخذ کروانا",
    "explanation": "استقرائی طریقہ (Inductive Method) میں استاد پہلے طلباء کے سامنے موضوع سے متعلق کئی مثالیں پیش کرتا ہے اور پھر طلباء ان مثالوں کا تجزیہ کرکے خود اصول یا قاعدہ بناتے ہیں۔ یہ طریقہ 'مثال سے اصول' کی طرف جاتا ہے۔\n(In the inductive method, the teacher first presents several examples related to the topic, and then the students analyze these examples to derive the rule or principle themselves. This method moves from 'example to rule'.)"
  },
  {
    "id": 201,
    "text": "وہ زبان جو بچہ اپنے گھر اور ماحول سے قدرتی طور پر سیکھتا ہے، کیا کہلاتی ہے؟",
    "options": [
      "معیاری زبان",
      "مادری زبان",
      "دوسری زبان",
      "عالمی زبان"
    ],
    "correct": "مادری زبان",
    "explanation": "مادری زبان (Mother Tongue) وہ پہلی زبان ہے جو بچہ پیدائش کے بعد اپنے خاندان اور اردگرد کے ماحول سے بغیر کسی رسمی تربیت کے فطری طور پر سیکھتا ہے۔\n(The mother tongue is the first language that a child learns naturally after birth from their family and surroundings without any formal training.)"
  },
  {
    "id": 202,
    "text": "ابتدائی جماعتوں میں زبان کی مہارتوں کی تدریس کی ترتیب کیا ہونی چاہیے؟",
    "options": [
      "لکھنا، پڑھنا، بولنا، سننا",
      "سننا، بولنا، پڑھنا، لکھنا",
      "بولنا، لکھنا، سننا، پڑھنا",
      "پڑھنا، سننا، لکھنا، بولنا"
    ],
    "correct": "سننا، بولنا، پڑھنا، لکھنا",
    "explanation": "زبان سیکھنے کی فطری ترتیب یہی ہے کہ بچہ پہلے سنتا ہے، پھر بولنا شروع کرتا ہے، اس کے بعد پڑھنا سیکھتا ہے اور آخر میں لکھنے کے قابل ہوتا ہے۔ اسے LSRW (Listening, Speaking, Reading, Writing) کی ترتیب کہتے ہیں۔\n(The natural order of language learning is that a child first listens, then starts speaking, then learns to read, and finally is able to write. This is known as the LSRW order.)"
  },
  {
    "id": 203,
    "text": "خوشخطی کا تعلق زبان کی کس مہارت سے ہے؟",
    "options": [
      "پڑھنے",
      "بولنے",
      "سننے",
      "لکھنے"
    ],
    "correct": "لکھنے",
    "explanation": "خوشخطی یا خوش نویسی (Calligraphy)، لکھنے کی مہارت کا ایک اہم جزو ہے جس میں حروف کو صحیح بناوٹ اور خوبصورتی سے لکھنے کی مشق کی جاتی ہے۔\n(Calligraphy is an important component of the writing skill, in which one practices writing letters with correct formation and beauty.)"
  },
  {
    "id": 204,
    "text": "قواعد کی تدریس کا استخراجی طریقہ کیا ہے؟",
    "options": [
      "مثال سے اصول کی طرف",
      "اصول سے مثال کی طرف",
      "کھیل کے ذریعے قواعد سکھانا",
      "کہانی کے ذریعے قواعد سکھانا"
    ],
    "correct": "اصول سے مثال کی طرف",
    "explanation": "استخراجی طریقہ (Deductive Method) میں استاد پہلے قواعد کا کوئی اصول یا تعریف بتاتا ہے اور پھر اس کی وضاحت کے لیے مثالیں پیش کرتا ہے۔ یہ طریقہ روایتی اور استاد مرکوز سمجھا جاتا ہے۔\n(In the deductive method, the teacher first states a rule or definition of grammar and then presents examples to explain it. This method is considered traditional and teacher-centered.)"
  },
  {
    "id": 205,
    "text": "اردو کو 'ہندوی' یا 'ہندی' کا نام کس دور کے شعراء اور صوفیاء نے دیا؟",
    "options": [
      "دورِ جدید",
      "ابتدائی دور (امیر خسرو وغیرہ)",
      "برطانوی راج",
      "دکنی دور"
    ],
    "correct": "ابتدائی دور (امیر خسرو وغیرہ)",
    "explanation": "اردو کے ابتدائی نقوش کے زمانے میں امیر خسرو جیسے شعراء اور دیگر صوفیائے کرام نے اس نئی زبان کو 'ہندوی' یا 'ہندی' کہا ہے۔\n(In the early era of Urdu's formation, poets like Amir Khusrau and other Sufi saints called this new language 'Hindavi' or 'Hindi'.)"
  },
  {
    "id": 206,
    "text": "طلباء کے ذخیرہ الفاظ میں اضافے کے لیے سب سے کارآمد سرگرمی کیا ہے؟",
    "options": [
      "بار بار ایک ہی سبق پڑھوانا",
      "نئے الفاظ کے معنی رٹوانا",
      "زیادہ سے زیادہ مطالعہ اور نئے الفاظ کا جملوں میں استعمال",
      "صرف املا لکھوانا"
    ],
    "correct": "زیادہ سے زیادہ مطالعہ اور نئے الفاظ کا جملوں میں استعمال",
    "explanation": "جب طلباء وسیع مطالعہ کرتے ہیں تو ان کا سامنا نئے الفاظ سے ہوتا ہے اور جب وہ ان الفاظ کو سیاق و سباق میں اور اپنے جملوں میں استعمال کرتے ہیں تو وہ الفاظ ان کی یادداشت کا مستقل حصہ بن جاتے ہیں۔\n(When students read extensively, they encounter new words, and when they use these words in context and in their own sentences, the words become a permanent part of their vocabulary.)"
  },
  {
    "id": 207,
    "text": "کسی نظم کو لے اور آہنگ کے ساتھ پڑھنا، زبان کی کن مہارتوں کو ظاہر کرتا ہے؟",
    "options": [
      "سننا اور لکھنا",
      "بولنا اور پڑھنا",
      "صرف لکھنا",
      "صرف سننا"
    ],
    "correct": "بولنا اور پڑھنا",
    "explanation": "نظم کو ترنم سے پڑھنے میں عبارت کو دیکھ کر پڑھا جاتا ہے (پڑھنے کی مہارت) اور اسے صحیح تلفظ، لے اور آہنگ کے ساتھ ادا کیا جاتا ہے (بولنے کی مہارت)۔\n(Reciting a poem with rhythm and tune involves reading the text (reading skill) and articulating it with correct pronunciation, rhythm, and intonation (speaking skill).)"
  },
  {
    "id": 208,
    "text": "سوال و جواب کا طریقہ کیوں اہم ہے؟",
    "options": [
      "کیونکہ یہ وقت بچاتا ہے",
      "کیونکہ اس سے طلباء کی شرکت بڑھتی ہے اور سبق دلچسپ ہوتا ہے",
      "کیونکہ اس میں استاد کو محنت نہیں کرنی پڑتی",
      "کیونکہ یہ صرف ذہین طلباء کے لیے ہے"
    ],
    "correct": "کیونکہ اس سے طلباء کی شرکت بڑھتی ہے اور سبق دلچسپ ہوتا ہے",
    "explanation": "سوال جواب کے طریقے (Question-Answer Method) سے تدریسی عمل دو طرفہ ہو جاتا ہے۔ طلباء فعال طور پر حصہ لیتے ہیں، ان کی سوچنے کی صلاحیت بڑھتی ہے اور سبق بوریت سے بچ جاتا ہے۔\n(The question-answer method makes the teaching process two-way. Students participate actively, their thinking skills are enhanced, and the lesson avoids becoming boring.)"
  },
  {
    "id": 209,
    "text": "معیاری زبان سے کیا مراد ہے؟",
    "options": [
      "صرف گاؤں میں بولی جانے والی زبان",
      "کسی زبان کی وہ شکل جسے پڑھے لکھے لوگ استعمال کرتے ہیں اور جو سرکاری و تعلیمی مقاصد کے لیے مستند ہو",
      "ہر علاقے کی اپنی الگ زبان",
      "ادبی کتابوں کی مشکل زبان"
    ],
    "correct": "کسی زبان کی وہ شکل جسے پڑھے لکھے لوگ استعمال کرتے ہیں اور جو سرکاری و تعلیمی مقاصد کے لیے مستند ہو",
    "explanation": "معیاری زبان (Standard Language) کسی بھی زبان کا وہ روپ ہوتا ہے جسے اس زبان کے اہل علم اور تعلیم یافتہ طبقے تسلیم کرتے ہیں اور اسے تحریر، تقریر، تعلیم اور سرکاری کاموں میں استعمال کیا جاتا ہے۔\n(Standard language is that form of a language which is accepted by its scholars and educated class and is used in writing, speech, education, and official work.)"
  },
  {
    "id": 210,
    "text": "ابتدائی جماعتوں میں بچوں کو حروف سکھانے کے لیے تصاویر کا استعمال کیوں کیا جاتا ہے؟",
    "options": [
      "تاکہ کتاب مہنگی ہو جائے",
      "تاکہ حروف اور آواز کا تعلق سمجھنے میں آسانی ہو",
      "تاکہ بچے صرف تصویریں دیکھیں",
      "یہ ایک غیر ضروری عمل ہے"
    ],
    "correct": "تاکہ حروف اور آواز کا تعلق سمجھنے میں آسانی ہو",
    "explanation": "چھوٹے بچے ٹھوس چیزوں سے جلدی سیکھتے ہیں۔ تصویر (جیسے 'ا' سے انار کی تصویر) حرف اور اس کی آواز کے درمیان ایک مضبوط ذہنی تعلق قائم کرنے میں مدد دیتی ہے، جس سے سیکھنے کا عمل آسان اور دلچسپ ہو جاتا ہے۔\n(Young children learn quickly from concrete things. A picture (like a picture of a pomegranate for 'Alif') helps establish a strong mental connection between the letter and its sound, making the learning process easier and more interesting.)"
  },
  {
    "id": 211,
    "text": "طلباء کی تخلیقی تحریری صلاحیتوں کو جانچنے کا بہترین طریقہ کیا ہے؟",
    "options": [
      "نقل نویسی کروانا",
      "کسی موضوع پر آزادانہ طور پر مضمون یا کہانی لکھنے کو کہنا",
      "صرف ہجے کی غلطیاں چیک کرنا",
      "قواعد کے سوالات پوچھنا"
    ],
    "correct": "کسی موضوع پر آزادانہ طور پر مضمون یا کہانی لکھنے کو کہنا",
    "explanation": "تخلیقی صلاحیت کی جانچ تبھی ہو سکتی ہے جب طلباء کو اپنے خیالات، تصورات اور جذبات کو آزادانہ طور پر تحریر کرنے کا موقع دیا جائے۔\n(Creative ability can only be assessed when students are given the opportunity to write their thoughts, ideas, and feelings freely.)"
  },
  {
    "id": 212,
    "text": "نظم کی تدریس کا بنیادی مقصد کیا ہونا چاہیے؟",
    "options": [
      "صرف شاعر کا نام یاد کروانا",
      "نظم کو زبانی رٹوا دینا",
      "شعر فہمی اور ذوقِ شاعری پیدا کرنا",
      "نظم کی نثر لکھوانا"
    ],
    "correct": "شعر فہمی اور ذوقِ شاعری پیدا کرنا",
    "explanation": "نظم پڑھانے کا اصل مقصد طلباء میں شعر کو سمجھنے، اس کے حسن، موسیقی اور پیغام سے لطف اندوز ہونے کی صلاحیت پیدا کرنا ہے تاکہ ان میں ادبی ذوق پروان چڑھے۔\n(The real purpose of teaching poetry is to develop in students the ability to understand, appreciate the beauty, music, and message of the poetry, thereby fostering their literary taste.)"
  },
  {
    "id": 213,
    "text": "زبان کی ابتدا کے بارے میں 'سندھ' کا نظریہ کس ماہر لسانیات نے پیش کیا؟",
    "options": [
      "اختر اورینوی",
      "محمد حسین آزاد",
      "سید سلیمان ندوی",
      "شوکت سبزواری"
    ],
    "correct": "سید سلیمان ندوی",
    "explanation": "سید سلیمان ندوی نے اپنی کتاب 'نقوشِ سلیمانی' میں یہ نظریہ پیش کیا کہ عربوں کی فتحِ سندھ کے بعد عربی اور مقامی سندھی زبان کے ملاپ سے اردو کی ابتدائی شکل وجود میں آئی۔\n(Syed Sulaiman Nadvi, in his book 'Naqoosh-e-Sulaimani', proposed the theory that the early form of Urdu emerged from the fusion of Arabic and the local Sindhi language after the Arab conquest of Sindh.)"
  },
  {
    "id": 214,
    "text": "تدریس کے جذباتی میدان کا تعلق کس چیز سے ہے؟",
    "options": [
      "معلومات یاد کرنا",
      "دلچسپی، قدر شناسی اور رویہ",
      "مسائل حل کرنا",
      "جسمانی مہارتیں"
    ],
    "correct": "دلچسپی، قدر شناسی اور رویہ",
    "explanation": "جذباتی میدان (Affective Domain) کا تعلق سیکھنے کے عمل میں طالب علم کے جذبات، احساسات، دلچسپیوں اور اقدار سے ہوتا ہے۔ جیسے ادب کے لیے مثبت رویہ پیدا کرنا۔\n(The affective domain relates to a student's emotions, feelings, interests, and values in the learning process, such as developing a positive attitude towards literature.)"
  },
  {
    "id": 215,
    "text": "ڈرامہ یا کردار نگاری کس مہارت کو فروغ دینے کا بہترین طریقہ ہے؟",
    "options": [
      "خوشخطی",
      "خاموش مطالعہ",
      "گفتگو اور خود اعتمادی",
      "نقل نویسی"
    ],
    "correct": "گفتگو اور خود اعتمادی",
    "explanation": "جب طلباء مختلف کردار ادا (Role Playing) کرتے ہیں تو انہیں صورتحال کے مطابق بولنے کی مشق ہوتی ہے۔ اس سے ان کی جھجک دور ہوتی ہے، گفتگو کی مہارت بہتر ہوتی ہے اور خود اعتمادی میں اضافہ ہوتا ہے۔\n(When students play different roles, they practice speaking according to the situation. This helps overcome their hesitation, improves their conversational skills, and increases their self-confidence.)"
  },
  {
    "id": 216,
    "text": "مشاغل پر مبنی طریقہ تدریس کا فائدہ کیا ہے؟",
    "options": [
      "سبق جلدی ختم ہو جاتا ہے",
      "طلباء غیر فعال رہتے ہیں",
      "طلباء خود کر کے سیکھتے ہیں اور علم دیرپا ہوتا ہے",
      "اس میں صرف استاد بولتا ہے"
    ],
    "correct": "طلباء خود کر کے سیکھتے ہیں اور علم دیرپا ہوتا ہے",
    "explanation": "اس طریقے (Activity-Based Method) میں طلباء مختلف سرگرمیوں میں جسمانی اور ذہنی طور پر شریک ہوتے ہیں۔ خود کر کے سیکھنے سے حاصل ہونے والا علم زیادہ ٹھوس اور دیرپا ہوتا ہے۔\n(In this method, students participate physically and mentally in various activities. Knowledge gained through learning by doing is more concrete and lasting.)"
  },
  {
    "id": 217,
    "text": "کسی عبارت کو پڑھ کر اس کا مرکزی خیال سمجھنا، پڑھنے کی کس سطح کو ظاہر کرتا ہے؟",
    "options": [
      "صرف حروف کی پہچان",
      "روانی سے پڑھنا",
      "تفہیم",
      "بلند خوانی"
    ],
    "correct": "تفہیم",
    "explanation": "پڑھنے کا اصل مقصد صرف الفاظ کو ادا کرنا نہیں بلکہ پڑھے ہوئے مواد کے معنی، مفہوم اور مرکزی خیال کو سمجھنا ہے۔ اسی کو تفہیم (Comprehension) کہتے ہیں۔\n(The real purpose of reading is not just to pronounce words but to understand the meaning, concept, and central idea of the material read. This is called comprehension.)"
  },
  {
    "id": 218,
    "text": "نگرانی کا طریقہ کیا ہے؟",
    "options": [
      "استاد کلاس سے باہر چلا جاتا ہے",
      "استاد کی نگرانی میں طلباء کا انفرادی طور پر مطالعہ کرنا",
      "استاد کا صرف لیکچر دینا",
      "طلباء کا گھر پر کام کرنا"
    ],
    "correct": "استاد کی نگرانی میں طلباء کا انفرادی طور پر مطالعہ کرنا",
    "explanation": "اس طریقہ کار (Supervised Study Method) میں استاد کی موجودگی اور نگرانی میں طلباء اپنی اپنی نشستوں پر خاموشی سے مطالعہ یا مشقی کام کرتے ہیں اور ضرورت پڑنے پر استاد سے انفرادی رہنمائی حاصل کرتے ہیں۔\n(In this method, students study or do practice work individually at their desks under the teacher's presence and supervision, and seek individual guidance from the teacher when needed.)"
  },
  {
    "id": 219,
    "text": "غزل کی تدریس کا ایک اہم مقصد کیا ہے؟",
    "options": [
      "قافیہ ردیف کی پہچان کرانا",
      "غزل کے ہر شعر کے الگ معنی اور حسن کی وضاحت کرنا",
      "صرف مشکل الفاظ کے معنی بتانا",
      "غزل کو کہانی کی طرح پڑھانا"
    ],
    "correct": "غزل کے ہر شعر کے الگ معنی اور حسن کی وضاحت کرنا",
    "explanation": "چونکہ غزل کا ہر شعر ایک مکمل اکائی ہوتا ہے، اس کی تدریس کا مقصد طلباء کو ہر شعر کے الگ الگ معنی، اس میں موجود صنائع بدائع اور شاعرانہ حسن سے روشناس کرانا ہے۔\n(Since each couplet of a ghazal is a complete unit, the purpose of its teaching is to acquaint students with the separate meaning of each couplet, its poetic devices, and its aesthetic beauty.)"
  },
  {
    "id": 220,
    "text": "اردو کے لیے 'دکنی' کی اصطلاح کیوں استعمال ہوتی ہے؟",
    "options": [
      "کیونکہ یہ شمال میں بولی جاتی تھی",
      "کیونکہ یہ دکن کی سلطنتوں میں پروان چڑھی اور وہاں کا ادب اسی میں لکھا گیا",
      "کیونکہ یہ صرف دکن کے ہندو بولتے تھے",
      "کیونکہ یہ عربی سے نکلی ہے"
    ],
    "correct": "کیونکہ یہ دکن کی سلطنتوں میں پروان چڑھی اور وہاں کا ادب اسی میں لکھا گیا",
    "explanation": "اردو جب شمال سے دکن پہنچی تو وہاں کے مقامی اثرات قبول کر کے اس نے ایک خاص روپ اختیار کیا جسے 'دکنی' کہا جاتا ہے۔ بہمنی، قطب شاہی اور عادل شاہی دور کا ادب اسی زبان میں ہے۔\n(When Urdu reached the Deccan from the north, it absorbed local influences and took on a special form known as 'Dakhani'. The literature of the Bahmani, Qutb Shahi, and Adil Shahi periods is in this language.)"
  },
  {
    "id": 221,
    "text": "مباحثی طریقہ سے طلباء میں کونسی صلاحیت فروغ پاتی ہے؟",
    "options": [
      "خاموش رہنے کی",
      "نقل کرنے کی",
      "استدلال، خود اعتمادی اور اظہار خیال کی",
      "صرف سننے کی"
    ],
    "correct": "استدلال، خود اعتمادی اور اظہار خیال کی",
    "explanation": "مباحثے (Debate Method) میں حصہ لینے سے طلباء کو دلائل کے ساتھ اپنی بات کہنے، دوسروں کو قائل کرنے اور اپنے خیالات کو منظم انداز میں پیش کرنے کی تربیت ملتی ہے، جس سے ان کی خود اعتمادی بڑھتی ہے۔\n(Participating in a debate trains students to present their point with arguments, persuade others, and express their ideas in an organized manner, which boosts their self-confidence.)"
  },
  {
    "id": 222,
    "text": "ابتدائی سطح پر نثر کی تدریس کا بنیادی مقصد کیا ہے؟",
    "options": [
      "طلباء کو عبارت صحیح تلفظ اور روانی سے پڑھنا سکھانا",
      "مصنف کی سوانح عمری یاد کرانا",
      "عبارت کا خلاصہ لکھوانا",
      "صرف مشکل الفاظ رٹوانا"
    ],
    "correct": "طلباء کو عبارت صحیح تلفظ اور روانی سے پڑھنا سکھانا",
    "explanation": "پرائمری سطح پر نثر پڑھانے کا اولین مقصد یہ ہوتا ہے کہ بچے عبارت کو درست تلفظ، مناسب رفتار اور اتار چڑھاؤ کے ساتھ پڑھنے کے قابل ہو جائیں اور اس کا سادہ مطلب سمجھ سکیں۔\n(At the primary level, the first objective of teaching prose is to enable children to read the text with correct pronunciation, appropriate speed, and intonation, and to understand its simple meaning.)"
  },
  {
    "id": 223,
    "text": "کھیل کھیل کا طریقہ تدریس کو بناتا ہے:",
    "options": [
      "مشکل اور غیر دلچسپ",
      "صرف ذہین طلباء کے لیے",
      "دلچسپ، آسان اور موثر",
      "وقت کا ضیاع"
    ],
    "correct": "دلچسپ، آسان اور موثر",
    "explanation": "کھیل (Play-way Method) بچوں کی فطرت کا حصہ ہے۔ جب تعلیم کو کھیل کے انداز میں پیش کیا جاتا ہے تو بچے بغیر کسی بوجھ کے، خوشی خوشی اور بہت مؤثر طریقے سے سیکھتے ہیں۔\n(Play is a natural part of childhood. When education is presented in a playful manner, children learn happily, effectively, and without feeling burdened.)"
  },
  {
    "id": 224,
    "text": "مکالماتی طریقہ کا استعمال کس لیے کیا جاتا ہے؟",
    "options": [
      "خاموش مطالعہ کے لیے",
      "زبان میں بول چال اور روزمرہ گفتگو کی مہارت پیدا کرنے کے لیے",
      "صرف لکھنے کی مشق کے لیے",
      "قواعد کے اصول یاد کرانے کے لیے"
    ],
    "correct": "زبان میں بول چال اور روزمرہ گفتگو کی مہارت پیدا کرنے کے لیے",
    "explanation": "مکالمے (Dialogue Method) کی تدریس اور مشق کے ذریعے طلباء کو یہ سکھایا جاتا ہے کہ مختلف سماجی حالات میں کس طرح موزوں الفاظ اور لب و لہجے میں بات چیت کی جاتی ہے۔\n(Through the teaching and practice of dialogues, students are taught how to communicate in various social situations with appropriate words and tone.)"
  },
  {
    "id": 225,
    "text": "ایک استاد طلباء کو چڑیا گھر کی سیر پر لے جاتا ہے اور واپس آکر اس پر مضمون لکھنے کو کہتا ہے۔ یہ کس طریقہ تدریس کی مثال ہے؟",
    "options": [
      "استخراجی طریقہ",
      "لیکچر کا طریقہ",
      "مشاغل پر مبنی / تجرباتی طریقہ",
      "صرف کتابی طریقہ"
    ],
    "correct": "مشاغل پر مبنی / تجرباتی طریقہ",
    "explanation": "یہ مشاغل پر مبنی یا تجرباتی طریقہ ہے کیونکہ اس میں طلباء کو براہ راست تجربہ (چڑیا گھر دیکھنا) فراہم کیا جا رہا ہے اور پھر اس تجربے کو زبان کی مہارت (مضمون نویسی) سے جوڑا جا رہا ہے۔\n(This is an activity-based or experiential method because it provides students with a direct experience (visiting the zoo) and then links that experience to a language skill (essay writing).)"
  },
  {
    "id": 226,
    "text": "زبان کی بنیادی مہارتوں میں 'تفہیم' کا عنصر کن دو مہارتوں سے گہرا تعلق رکھتا ہے؟",
    "options": [
      "بولنا اور لکھنا",
      "سننا اور پڑھنا",
      "دیکھنا اور بولنا",
      "لکھنا اور دیکھنا"
    ],
    "correct": "سننا اور پڑھنا",
    "explanation": "تفہیم (Comprehension) کا مطلب 'سمجھنا' ہے۔ ہم سنی ہوئی بات کو سمجھتے ہیں (Listening Comprehension) اور لکھی ہوئی عبارت کو پڑھ کر سمجھتے ہیں (Reading Comprehension)۔ اس لیے اس کا تعلق سننے اور پڑھنے سے ہے۔\n(Comprehension means 'to understand'. We understand what we hear (Listening Comprehension) and what we read (Reading Comprehension). Therefore, it is related to listening and reading.)"
  },
  {
    "id": 227,
    "text": "کسی زبان کی تمام بولیوں میں جو مشترک اور معیاری شکل رائج ہوتی ہے، اسے کیا کہتے ہیں؟",
    "options": [
      "علاقائی بولی",
      "رابطے کی زبان",
      "معیاری زبان",
      "خفیہ زبان"
    ],
    "correct": "معیاری زبان",
    "explanation": "معیاری زبان (Standard Language) وہ ہوتی ہے جو کسی زبان کے تمام بولنے والوں کے لیے قابلِ فہم ہو اور جسے تعلیم، حکومت اور میڈیا میں استعمال کیا جائے۔ یہ مختلف بولیوں کے اوپر ایک مشترک چھتری کا کام کرتی ہے۔\n(A standard language is one that is understandable to all speakers of that language and is used in education, government, and media. It acts as a common umbrella over various dialects.)"
  },
  {
    "id": 228,
    "text": "جماعت اول اور دوم کے طلباء کی زبان کی صلاحیتوں کو فروغ دینے کے لیے سب سے اہم کیا ہے؟",
    "options": [
      "قواعد کے پیچیدہ اصول",
      "نظمیں، کہانیاں اور دلچسپ سرگرمیاں",
      "لمبے مضامین لکھوانا",
      "خاموش مطالعہ کروانا"
    ],
    "correct": "نظمیں، کہانیاں اور دلچسپ سرگرمیاں",
    "explanation": "اس عمر کے بچوں کے لیے زبان سیکھنے کو ایک دلچسپ اور پرلطف تجربہ بنانا ضروری ہے۔ نظمیں، گیت، کہانیاں اور کھیل ان کی سننے، بولنے اور زبان سے محبت پیدا کرنے میں کلیدی کردار ادا کرتے ہیں۔\n(For children of this age, it is essential to make language learning a fun and enjoyable experience. Poems, songs, stories, and games play a key role in developing their listening, speaking, and love for the language.)"
  },
  {
    "id": 229,
    "text": "اردو کے علاوہ، کون سی دوسری زبان بھی برج بھاشا سے متاثر ہے؟",
    "options": [
      "پشتو",
      "ہندی",
      "بنگالی",
      "تامل"
    ],
    "correct": "ہندی",
    "explanation": "جدید کھڑی بولی ہندی اور اردو دونوں کی جڑیں ایک ہی ہیں۔ دونوں نے اپنے ابتدائی ارتقاء میں ہریانوی اور برج بھاشا جیسی بولیوں سے گہرے اثرات قبول کیے ہیں۔\n(Modern Khari Boli Hindi and Urdu share the same roots. Both were heavily influenced by dialects like Haryanvi and Braj Bhasha in their early development.)"
  },
  {
    "id": 230,
    "text": "زبان کی تدریس میں 'ادراکی میدان' کا سب سے اونچا درجہ کیا ہے؟",
    "options": [
      "علم",
      "تفہیم",
      "اطلاق",
      "تقییم"
    ],
    "correct": "تقییم",
    "explanation": "بلوم کی درجہ بندی کے مطابق، ادراکی میدان (Cognitive Domain) کے درجات یہ ہیں: علم (Knowledge)، تفہیم (Comprehension)، اطلاق (Application)، تجزیہ (Analysis)، ترکیب (Synthesis)، اور تقییم (Evaluation)۔ تقییم (جانچنا، فیصلہ کرنا) سب سے اعلیٰ سطح کی ذہنی صلاحیت ہے۔\n(According to Bloom's Taxonomy, the levels of the cognitive domain are: Knowledge, Comprehension, Application, Analysis, Synthesis, and Evaluation. Evaluation (judging, making decisions) is the highest level of mental ability.)"
  },
  {
    "id": 231,
    "text": "زبان کی کونسی مہارت 'اظہاری' مہارت کہلاتی ہے؟",
    "options": [
      "سننا اور پڑھنا",
      "بولنا اور لکھنا",
      "صرف سننا",
      "صرف پڑھنا"
    ],
    "correct": "بولنا اور لکھنا",
    "explanation": "اظہاری یا پیداواری مہارتیں (Productive Skills) وہ ہیں جن کے ذریعے ہم اپنے خیالات اور جذبات کو ظاہر کرتے ہیں۔ ہم بول کر اور لکھ کر اپنے مافی الضمیر کو دوسروں تک پہنچاتے ہیں۔\n(Productive skills are those through which we express our thoughts and feelings. We convey our inner thoughts to others by speaking and writing.)"
  },
  {
    "id": 232,
    "text": "کہانی کی تدریس کا ایک اہم مقصد طلباء میں کیا پیدا کرنا ہے؟",
    "options": [
      "بوریت",
      "تخیل اور تخلیقی صلاحیت",
      "صرف تاریخ کا علم",
      "قواعد کا خوف"
    ],
    "correct": "تخیل اور تخلیقی صلاحیت",
    "explanation": "کہانیاں طلباء کو ایک نئی دنیا میں لے جاتی ہیں، ان کی قوتِ متخیلہ کو جلا بخشتی ہیں اور انہیں نئے کرداروں اور حالات کے بارے میں سوچنے پر مجبور کرتی ہیں، جس سے تخلیقی صلاحیت بڑھتی ہے۔\n(Stories transport students to a new world, stimulate their imagination, and compel them to think about new characters and situations, which enhances their creativity.)"
  },
  {
    "id": 233,
    "text": "زبان کی کونسی مہارت 'وصولی' مہارت کہلاتی ہے؟",
    "options": [
      "بولنا اور لکھنا",
      "سننا اور پڑھنا",
      "صرف بولنا",
      "صرف لکھنا"
    ],
    "correct": "سننا اور پڑھنا",
    "explanation": "وصولی مہارتیں (Receptive Skills) وہ ہیں جن کے ذریعے ہم معلومات یا خیالات کو وصول کرتے ہیں۔ ہم سن کر اور پڑھ کر دوسروں کے پیغامات کو سمجھتے اور حاصل کرتے ہیں۔\n(Receptive skills are those through which we receive information or ideas. We understand and acquire others' messages by listening and reading.)"
  },
  {
    "id": 234,
    "text": "قواعد کی تدریس کا عملی طریقہ کیا ہے؟",
    "options": [
      "اصولوں کو رٹوانا",
      "زبان کے استعمال کے دوران سیاق و سباق میں قواعد سکھانا",
      "قواعد کی الگ سے کتاب پڑھانا",
      "قواعد کا امتحان نہ لینا"
    ],
    "correct": "زبان کے استعمال کے دوران سیاق و سباق میں قواعد سکھانا",
    "explanation": "یہ طریقہ سب سے مؤثر سمجھا جاتا ہے جہاں قواعد کو خشک اصولوں کے طور پر الگ سے نہیں پڑھایا جاتا، بلکہ جب طلباء زبان (بولنے، پڑھنے، لکھنے) کا استعمال کر رہے ہوں، اسی دوران مثالوں کے ذریعے قواعد کے نکات کی وضاحت کر دی جاتی ہے۔\n(This is considered the most effective method, where grammar is not taught separately as dry rules, but grammatical points are explained through examples while students are using the language (speaking, reading, writing).)"
  },
  {
    "id": 235,
    "text": "جماعت چہارم اور پنجم کے طلباء میں لکھنے کی مہارت کو فروغ دینے کے لیے کونسی سرگرمی موزوں ہے؟",
    "options": [
      "صرف حروف تہجی کی مشق",
      "خطوط نویسی، درخواست نویسی اور مختصر کہانیاں لکھوانا",
      "صرف نقل کروانا",
      "زبانی سوالات پوچھنا"
    ],
    "correct": "خطوط نویسی، درخواست نویسی اور مختصر کہانیاں لکھوانا",
    "explanation": "اس سطح پر طلباء سادہ جملے لکھنے کے قابل ہو جاتے ہیں۔ انہیں خط، درخواست اور چھوٹی کہانیاں لکھنے جیسے بامقصد کام دینے سے ان کی تحریری صلاحیتوں کو حقیقی زندگی کے تقاضوں کے مطابق فروغ ملتا ہے۔\n(At this level, students are able to write simple sentences. Giving them purposeful tasks like writing letters, applications, and short stories helps develop their writing skills in line with real-life demands.)"
  },
  {
    "id": 236,
    "text": "اردو زبان کے ارتقاء میں صوفیائے کرام کا کیا کردار تھا؟",
    "options": [
      "انہوں نے اس زبان کی مخالفت کی",
      "انہوں نے اپنے پیغامات عوام تک پہنچانے کے لیے اس زبان کو استعمال کیا",
      "انہوں نے صرف فارسی میں لکھا",
      "ان کا کوئی کردار نہیں تھا"
    ],
    "correct": "انہوں نے اپنے پیغامات عوام تک پہنچانے کے لیے اس زبان کو استعمال کیا",
    "explanation": "صوفیائے کرام نے اسلام کی تبلیغ اور اپنے صوفیانہ خیالات کو عام لوگوں تک پہنچانے کے لیے اس وقت کی عوامی زبان، یعنی اردو کی ابتدائی شکل، کو اپنایا، جس سے اس کی ترقی اور پھیلاؤ میں بہت مدد ملی۔\n(Sufi saints adopted the common language of the time, i.e., the early form of Urdu, to propagate Islam and convey their mystical ideas to the common people, which greatly helped in its development and spread.)"
  },
  {
    "id": 237,
    "text": "آزاد نظم کی تدریس میں کس بات پر زیادہ زور دینا چاہیے؟",
    "options": [
      "قافیہ اور ردیف پر",
      "نظم کے مرکزی خیال، موضوع اور آہنگ پر",
      "بحر اور وزن پر",
      "شاعر کی زندگی پر"
    ],
    "correct": "نظم کے مرکزی خیال، موضوع اور آہنگ پر",
    "explanation": "چونکہ آزاد نظم قافیہ اور بحر کی روایتی پابندیوں سے آزاد ہوتی ہے، اس کی تدریس میں اس کے خیال، پیغام، جذبے اور اس کے اندرونی آہنگ (rhythm) کو سمجھنے اور محسوس کرنے پر زور دیا جاتا ہے۔\n(Since free verse (Azad Nazm) is free from the traditional constraints of rhyme and meter, its teaching emphasizes understanding and feeling its central idea, message, emotion, and internal rhythm.)"
  },
  {
    "id": 238,
    "text": "جماعت پنجم کے اختتام تک طلباء میں پڑھنے کی کونسی استعداد پیدا ہو جانی چاہیے؟",
    "options": [
      "وہ صرف حروف پہچان سکیں",
      "وہ سادہ عبارت کو سمجھ کر پڑھ سکیں اور اس سے متعلق سوالات کے جواب دے سکیں",
      "وہ صرف اپنی نصابی کتاب پڑھ سکیں",
      "وہ اخبار نہ پڑھ سکیں"
    ],
    "correct": "وہ سادہ عبارت کو سمجھ کر پڑھ سکیں اور اس سے متعلق سوالات کے جواب دے سکیں",
    "explanation": "پانچویں جماعت کی سطح پر یہ توقع کی جاتی ہے کہ طلباء نہ صرف روانی سے پڑھ سکیں بلکہ پڑھے گئے مواد کو سمجھیں (تفہیم) اور اس کی بنیاد پر اپنے الفاظ میں جواب بھی دے سکیں۔\n(At the fifth-grade level, it is expected that students can not only read fluently but also comprehend the material and answer questions based on it in their own words.)"
  },
  {
    "id": 239,
    "text": "”پہلے کل، پھر جزو“ کا اصول کس طریقہ تدریس میں استعمال ہوتا ہے؟",
    "options": [
      "صوتی طریقہ",
      "جملے کا طریقہ",
      "ابجدی طریقہ",
      "استخراجی طریقہ"
    ],
    "correct": "جملے کا طریقہ",
    "explanation": "پڑھنا سکھانے کے اس طریقے (Sentence Method) میں بچوں کو پہلے پورا جملہ سکھایا جاتا ہے، پھر اس جملے کے الفاظ اور آخر میں الفاظ کے حروف سکھائے جاتے ہیں۔ یہ 'کل سے جزو' (Whole to Part) کے نفسیاتی اصول پر مبنی ہے۔\n(In this method of teaching reading, children are first taught a whole sentence, then the words of the sentence, and finally the letters of the words. It is based on the psychological principle of 'Whole to Part'.)"
  },
  {
    "id": 240,
    "text": "ایک اچھی زبان کی درسی کتاب کی خصوصیت کیا نہیں ہونی چاہیے؟",
    "options": [
      "وہ بچوں کی عمر اور ذہنی سطح کے مطابق ہو",
      "اس میں دلچسپ تصاویر اور سرگرمیاں ہوں",
      "اس کی زبان بہت مشکل اور غیر معیاری ہو",
      "وہ زبان کی چاروں مہارتوں کو فروغ دے"
    ],
    "correct": "اس کی زبان بہت مشکل اور غیر معیاری ہو",
    "explanation": "ایک اچھی درسی کتاب کی زبان بچوں کے لیے قابلِ فہم، معیاری اور سلیس ہونی چاہیے۔ بہت زیادہ مشکل یا غیر معیاری زبان بچوں کو سیکھنے کے عمل سے بددل کر سکتی ہے۔\n(The language of a good textbook should be understandable, standard, and simple for children. Excessively difficult or non-standard language can discourage children from the learning process.)"
  },
  {
    "id": 241,
    "text": "جس اسم سے کسی قاعدے کے مطابق کوئی دوسرا لفظ نہ بن سکے، اسے کیا کہتے ہیں؟",
    "options": [
      "اسم مشتق",
      "اسم مصدر",
      "اسم جامد",
      "اسم نکرہ"
    ],
    "correct": "اسم جامد",
    "explanation": "اسم جامد (Static Noun) وہ اسم ہے جو نہ تو خود کسی سے بنا ہو اور نہ اس سے کوئی دوسرا لفظ بنے، جیسے 'پہاڑ'، 'دریا'۔ اسم مصدر سے دوسرے الفاظ بنتے ہیں (جیسے 'لکھنا' سے 'لکھائی') اور اسم مشتق خود مصدر سے بنتا ہے (جیسے 'لکھنے والا')۔ (Ism-e-Jamid is a noun that is neither derived from another word nor can another word be formed from it, e.g., 'pahar' (mountain), 'darya' (river). Other words are formed from Ism-e-Masdar, and Ism-e-Mushtaq is derived from a masdar.)"
  },
  {
    "id": 242,
    "text": "مرثیہ نگاری کے لیے کون سے شاعر مشہور ہیں؟",
    "options": [
      "میر درد",
      "میر انیس",
      "نظیر اکبر آبادی",
      "جوش ملیح آبادی"
    ],
    "correct": "میر انیس",
    "explanation": "میر ببر علی انیس کو مرثیہ گوئی کا امام مانا جاتا ہے۔ انہوں نے واقعہ کربلا کو اپنی شاعری کا موضوع بنایا اور اس صنف کو عروج بخشا۔ (Mir Babar Ali Anis is considered the master of Marsiya (elegy) writing. He made the event of Karbala the subject of his poetry and took this genre to its peak.)"
  },
  {
    "id": 243,
    "text": "وہ مرکب جو صفت اور موصوف سے مل کر بنے، کیا کہلاتا ہے؟",
    "options": [
      "مرکبِ عطفی",
      "مرکبِ اضافی",
      "مرکبِ توصیفی",
      "مرکبِ تام"
    ],
    "correct": "مرکبِ توصیفی",
    "explanation": "مرکبِ توصیفی (Adjectival Phrase) وہ مرکب ہے جس میں ایک اسم (موصوف) کی صفت بیان کی گئی ہو، جیسے 'گرم چائے'۔ یہاں 'گرم' صفت ہے اور 'چائے' موصوف ہے۔ (Murakkab-e-Tauseefi is a phrase where an attribute (sifat) of a noun (mausoof) is described, e.g., 'garam chai' (hot tea). Here, 'garam' is the adjective and 'chai' is the noun.)"
  },
  {
    "id": 244,
    "text": "علم الاعداد (ابجد) میں 'غ' کی عددی قیمت کیا ہے؟",
    "options": [
      "100",
      "1000",
      "70",
      "900"
    ],
    "correct": "1000",
    "explanation": "علم ابجد کے مطابق، حرف 'غین' (غ) کی عددی قیمت 1000 مقرر ہے۔ (According to the Abjad numeral system, the numerical value of the letter 'Ghain' (غ) is 1000.)"
  },
  {
    "id": 245,
    "text": "علامت ':-' کو اردو قواعد میں کیا کہتے ہیں؟",
    "options": [
      "رابطہ",
      "تفصیلیہ",
      "سکتہ",
      "قوسین"
    ],
    "correct": "تفصیلیہ",
    "explanation": "علامت ':-' (Colon-Dash) کو تفصیلیہ کہتے ہیں۔ یہ کسی چیز کی تفصیل یا فہرست بیان کرنے سے پہلے استعمال ہوتی ہے، جیسے 'درخواست کے لیے درکار اشیاء:- قلم، کاغذ اور شناختی کارڈ'۔ (The symbol ':-' is called Tafseeliya. It is used before stating the details or a list of something, for example, 'Items required for the application:- pen, paper, and ID card'.)"
  },
  {
    "id": 246,
    "text": "افسانوی مجموعہ 'دان و دام' کس کا ہے؟",
    "options": [
      "کرشن چندر",
      "سعادت حسن منٹو",
      "پریم چند",
      "راجندر سنگھ بیدی"
    ],
    "correct": "راجندر سنگھ بیدی",
    "explanation": "'دان و دام' راجندر سنگھ بیدی کا مشہور افسانوی مجموعہ ہے۔ بیدی اپنے کرداروں کی نفسیاتی گہرائی اور حقیقت نگاری کے لیے جانے جاتے ہیں۔ ('Daan-o-Daam' is a famous collection of short stories by Rajinder Singh Bedi. Bedi is known for the psychological depth of his characters and his realism.)"
  },
  {
    "id": 247,
    "text": "ضرب المثل مکمل کریں: 'ہاتھ کنگن کو ____ کیا'۔",
    "options": [
      "فارسی",
      "شیشہ",
      "آرسی",
      "ضرورت"
    ],
    "correct": "آرسی",
    "explanation": "یہ ضرب المثل ہے: 'ہاتھ کنگن کو آرسی کیا، پڑھے لکھے کو فارسی کیا'۔ اس کا مطلب ہے کہ جو چیز ظاہر ہو، اسے ثبوت کی ضرورت نہیں ہوتی۔ 'آرسی' چھوٹے آئینے کو کہتے ہیں۔ (The proverb is: 'Haath kangan ko aarsi kya, padhe likhe ko Farsi kya'. It means that what is evident needs no proof. 'Aarsi' means a small mirror.)"
  },
  {
    "id": 248,
    "text": "اگر کسی کلام میں کسی چیز کی وجہ ایسی بیان کی جائے جو حقیقت میں نہ ہو لیکن شاعرانہ اور لطیف ہو تو وہ کونسی صنعت ہے؟",
    "options": [
      "صنعتِ تضاد",
      "صنعتِ تلمیح",
      "صنعتِ حُسنِ تعلیل",
      "صنعتِ مبالغہ"
    ],
    "correct": "صنعتِ حُسنِ تعلیل",
    "explanation": "صنعتِ حُسنِ تعلیل (Poetic Reason) میں شاعر کسی واقعے کی اصل علت (وجہ) کو نظر انداز کر کے کوئی شاعرانہ اور خوبصورت وجہ بیان کرتا ہے۔ (In the poetic device of Husn-e-Ta'leel, the poet ignores the real cause of an event and presents a poetic and beautiful reason for it.)"
  },
  {
    "id": 249,
    "text": "لفظ 'طائر' کی جمع کیا ہے؟",
    "options": [
      "طائروں",
      "اطیار",
      "طیور",
      "طیارہ"
    ],
    "correct": "طیور",
    "explanation": "لفظ 'طائر' (پرندہ) عربی زبان کا لفظ ہے اور اس کی صحیح جمع 'طیور' ہے۔ (The word 'tair' (bird) is an Arabic word, and its correct plural is 'tuyur'.)"
  },
  {
    "id": 250,
    "text": "'ترقی پسند تحریک' کا باقاعدہ آغاز کس سن میں ہوا؟",
    "options": [
      "1926ء",
      "1936ء",
      "1946ء",
      "1906ء"
    ],
    "correct": "1936ء",
    "explanation": "ترقی پسند ادبی تحریک کی پہلی کل ہند کانفرنس 1936ء میں لکھنؤ میں منعقد ہوئی، جس کی صدارت منشی پریم چند نے کی۔ اسی سے اس تحریک کا باقاعدہ آغاز مانا جاتا ہے۔ (The first All-India conference of the Progressive Writers' Movement was held in Lucknow in 1936, presided over by Munshi Premchand. This is considered the formal beginning of the movement.)"
  },
  {
    "id": 251,
    "text": "وہ فعل جس میں فاعل کا ذکر نہ ہو بلکہ سارا زور مفعول پر ہو، کیا کہلاتا ہے؟",
    "options": [
      "فعلِ لازم",
      "فعلِ متعدی",
      "فعلِ معروف",
      "فعلِ مجہول"
    ],
    "correct": "فعلِ مجہول",
    "explanation": "فعلِ مجہول (Passive Voice) وہ فعل ہے جس کا فاعل (کام کرنے والا) معلوم نہ ہو، جیسے 'خط لکھا گیا'۔ اس کے برعکس فعلِ معروف (Active Voice) میں فاعل معلوم ہوتا ہے، جیسے 'احمد نے خط لکھا'۔ (Fe'l-e-Majhool is a verb whose subject is unknown, e.g., 'The letter was written'. In contrast, in Fe'l-e-Ma'roof, the subject is known, e.g., 'Ahmad wrote the letter'.)"
  },
  {
    "id": 252,
    "text": "لفظ 'باغ' کی اسم تصغیر کیا ہوگی؟",
    "options": [
      "باغبان",
      "باغیچہ",
      "شاہ باغ",
      "باغات"
    ],
    "correct": "باغیچہ",
    "explanation": "اسم تصغیر (Diminutive Noun) وہ اسم ہے جو کسی چیز کا چھوٹا پن ظاہر کرے۔ 'باغ' سے 'باغیچہ' اس کی چھوٹی شکل کو ظاہر کرتا ہے۔ (Ism-e-Tasgheer is a noun that indicates the smallness of something. From 'bagh' (garden), 'baghicha' (small garden) denotes its smaller form.)"
  },
  {
    "id": 253,
    "text": "قصیدے کا وہ حصہ جہاں شاعر اصل موضوع یعنی مدح یا ہجو کی طرف آتا ہے، کیا کہلاتا ہے؟",
    "options": [
      "تشبیب",
      "گریز",
      "مدح",
      "دعا"
    ],
    "correct": "گریز",
    "explanation": "گریز (Transition) قصیدے میں تشبیب (تمہید) کے بعد آتا ہے۔ اس حصے میں شاعر بڑی خوبصورتی سے تمہید کو چھوڑ کر اصل موضوع کی طرف مڑتا ہے۔ (Gurez comes after the Tashbeeb (introduction) in a Qasida. In this part, the poet skillfully transitions from the introduction to the main subject.)"
  },
  {
    "id": 254,
    "text": "حروفِ تہجی میں 'ح' کا مخرج کیا ہے؟",
    "options": [
      "نوکِ زبان",
      "حلق کا درمیانی حصہ",
      "ہونٹ",
      "تالو"
    ],
    "correct": "حلق کا درمیانی حصہ",
    "explanation": "علم تجوید اور مخارج کے مطابق، حرف 'ح' (حائے حطی) کی ادائیگی حلق کے درمیانی حصے (وسط الحلق) سے ہوتی ہے۔ (According to the science of Tajweed and Makharij (articulation points), the letter 'Ha' (ح) is pronounced from the middle part of the throat (Wasat-ul-Halq).)"
  },
  {
    "id": 255,
    "text": "'آوارہ گرد کی ڈائری' کس کا سفرنامہ ہے؟",
    "options": [
      "ابنِ انشاء",
      "مستنصر حسین تارڑ",
      "بیگم اختر ریاض الدین",
      "ابنِ بطوطہ"
    ],
    "correct": "ابنِ انشاء",
    "explanation": "یہ ابنِ انشاء کا لکھا ہوا ایک نہایت دلچسپ اور مشہور سفرنامہ ہے جو ان کے مخصوص طنزیہ و مزاحیہ انداز کی عکاسی کرتا ہے۔ (This is a very interesting and famous travelogue written by Ibn-e-Insha, which reflects his unique satirical and humorous style.)"
  },
  {
    "id": 256,
    "text": "وہ لفظ جو کسی اسم کی جگہ استعمال ہو، کیا کہلاتا ہے؟",
    "options": [
      "صفت",
      "ضمیر",
      "فعل",
      "موصوف"
    ],
    "correct": "ضمیر",
    "explanation": "اسم ضمیر (Pronoun) وہ لفظ ہے جو کسی اسم کی جگہ پر بولا جائے تاکہ اسم کو بار بار دہرانا نہ پڑے، جیسے 'وہ'، 'تم'، 'میں'، 'اس'۔ (A pronoun (Ism-e-Zameer) is a word used in place of a noun to avoid its repetition, such as 'woh' (he/she/it), 'tum' (you), 'main' (I), 'us' (him/her).)"
  },
  {
    "id": 257,
    "text": "'یوم' کا مترادف کیا ہے؟",
    "options": [
      "لیل",
      "نہار",
      "شمس",
      "عام"
    ],
    "correct": "نہار",
    "explanation": "'یوم' عربی میں دن کو کہتے ہیں۔ 'نہار' بھی عربی میں دن کے لیے استعمال ہوتا ہے، لہٰذا یہ دونوں مترادف ہیں۔ 'لیل' رات کو کہتے ہیں۔ ('Yaum' means day in Arabic. 'Nahar' is also used for day in Arabic, hence they are synonyms. 'Lail' means night.)"
  },
  {
    "id": 258,
    "text": "جس نظم میں اللہ تعالیٰ کی حمد و ثنا بیان کی جائے اسے کیا کہتے ہیں؟",
    "options": [
      "نعت",
      "منقبت",
      "حمد",
      "مناجات"
    ],
    "correct": "حمد",
    "explanation": "حمد وہ صنفِ نظم ہے جس میں صرف اللہ تبارک و تعالیٰ کی تعریف و توصیف بیان کی جاتی ہے۔ (Hamd is a genre of poetry in which only the praise and glory of Allah Almighty is expressed.)"
  },
  {
    "id": 259,
    "text": "لفظ 'مسکین' کا مؤنث کیا ہے؟",
    "options": [
      "مسکینہ",
      "مسکینی",
      "مسکین",
      "مساکین"
    ],
    "correct": "مسکین",
    "explanation": "کچھ الفاظ ایسے ہوتے ہیں جو مذکر اور مؤنث دونوں کے لیے یکساں استعمال ہوتے ہیں۔ 'مسکین' انہی میں سے ایک ہے۔ اسے مرد اور عورت دونوں کے لیے استعمال کیا جاتا ہے۔ (Some words are used identically for both masculine and feminine genders. 'Miskeen' is one of them. It is used for both men and women.)"
  },
  {
    "id": 260,
    "text": "وہ کونسی علامت ہے جو مختصر ٹھہراؤ (سکتہ) سے زیادہ اور مکمل ٹھہراؤ (ختمہ) سے کم کے لیے استعمال ہوتی ہے؟",
    "options": [
      "۔",
      "،",
      "()",
      "؛"
    ],
    "correct": "؛",
    "explanation": "علامت '؛' جسے وقفہ (Semicolon) کہتے ہیں، ایسے جملوں کے درمیان استعمال ہوتی ہے جو ایک دوسرے سے گہرا تعلق رکھتے ہوں لیکن مکمل طور پر الگ بھی ہوں۔ یہ سکتہ (comma) سے زیادہ ٹھہراؤ کو ظاہر کرتی ہے۔ (The symbol '؛', called Waqfa (Semicolon), is used between clauses that are closely related but are also independent. It indicates a longer pause than a comma (sakta).)"
  },
  {
    "id": 261,
    "text": "علامہ اقبال نے اپنی مشہور نظم 'شکوہ' کس انجمن کے جلسے میں پڑھی تھی؟",
    "options": [
      "انجمن حمایتِ اسلام",
      "انجمن ترقی اردو",
      "علی گڑھ تحریک",
      "دارالمصنفین"
    ],
    "correct": "انجمن حمایتِ اسلام",
    "explanation": "علامہ اقبال نے اپنی معرکتہ الآرا نظم 'شکوہ' 1911 میں انجمن حمایتِ اسلام، لاہور کے سالانہ جلسے میں پڑھ کر سنائی تھی۔ (Allama Iqbal recited his monumental poem 'Shikwa' at the annual meeting of Anjuman-i-Himayat-i-Islam, Lahore, in 1911.)"
  },
  {
    "id": 262,
    "text": "کلام میں ایسے الفاظ استعمال کرنا جو ایک دوسرے سے مناسبت رکھتے ہوں (ضد نہ ہوں) کیا کہلاتا ہے؟",
    "options": [
      "صنعتِ تضاد",
      "صنعتِ ایہام",
      "صنعتِ مراعات النظیر",
      "صنعتِ تجنیس"
    ],
    "correct": "صنعتِ مراعات النظیر",
    "explanation": "اس صنعت میں شاعر ایک لفظ کی مناسبت سے اس سے تعلق رکھنے والے دوسرے الفاظ استعمال کرتا ہے، جیسے 'پھول' کے ساتھ 'کلی'، 'باغ'، 'خوشبو' وغیرہ لانا۔ (In this poetic device, the poet uses words that are related to a particular word, for example, using 'kali' (bud), 'bagh' (garden), 'khushbu' (fragrance) with the word 'phool' (flower).)"
  },
  {
    "id": 263,
    "text": "'آب' کا لاحقہ استعمال کرتے ہوئے مرکب لفظ بنائیں۔",
    "options": [
      "آب دار",
      "آب و ہوا",
      "کمیاب",
      "نایاب"
    ],
    "correct": "کمیاب",
    "explanation": "لاحقہ (suffix) کسی لفظ کے آخر میں آتا ہے۔ 'کم' کے بعد 'یاب' (آب کی بدلی ہوئی شکل) لگنے سے 'کمیاب' بنا، جس کا مطلب ہے کم پایا جانے والا۔ 'نایاب' میں بھی 'یاب' لاحقہ ہے۔ 'آبدار' میں 'دار' لاحقہ ہے۔ (A suffix comes at the end of a word. 'Kam' is followed by 'yab' (a form of 'aab') to make 'kamyab' (rare). In 'nayab' also, 'yab' is a suffix. In 'aabdar', 'dar' is the suffix.)"
  },
  {
    "id": 264,
    "text": "واحد سے جمع بنانے کا وہ کونسا قاعدہ ہے جس میں واحد کے آخر میں 'ات' کا اضافہ کیا جاتا ہے؟",
    "options": [
      "اردو قاعدہ",
      "فارسی قاعدہ",
      "عربی قاعدہ",
      "ہندی قاعدہ"
    ],
    "correct": "عربی قاعدہ",
    "explanation": "عربی سے آئے ہوئے بہت سے الفاظ کی جمع واحد کے آخر میں 'ات' لگانے سے بنتی ہے، جیسے 'حال' سے 'حالات'، 'سوال' سے 'سوالات'۔ (The plural of many words from Arabic is formed by adding 'aat' to the end of the singular, such as 'haal' to 'haalaat', 'sawaal' to 'sawaalaat'.)"
  },
  {
    "id": 265,
    "text": "ناول 'اداس نسلیں' کے تخلیق کار کون ہیں؟",
    "options": [
      "شوکت صدیقی",
      "قرۃ العین حیدر",
      "انتظار حسین",
      "عبداللہ حسین"
    ],
    "correct": "عبداللہ حسین",
    "explanation": "'اداس نسلیں' عبداللہ حسین کا شہرہ آفاق ناول ہے جسے اردو کے بہترین ناولوں میں شمار کیا جاتا ہے اور اسے آدم جی ادبی انعام بھی ملا۔ ('Udas Naslein' is a famous novel by Abdullah Hussain, considered one of the best novels in Urdu, and it also received the Adamjee Literary Award.)"
  },
  {
    "id": 266,
    "text": "وہ اسم جس سے کسی کام کا کرنا یا ہونا بغیر زمانے کے تعلق کے ظاہر ہو، کیا کہلاتا ہے؟",
    "options": [
      "فعل",
      "اسم مصدر",
      "اسم فاعل",
      "اسم مفعول"
    ],
    "correct": "اسم مصدر",
    "explanation": "اسم مصدر (Infinitive/Verbal Noun) وہ اسم ہے جس میں کام کے معنی پائے جاتے ہیں لیکن کوئی زمانہ نہیں ہوتا۔ اس کی علامت 'نا' ہے، جیسے 'آنا'، 'جانا'، 'لکھنا'۔ (Ism-e-Masdar is a noun that contains the meaning of an action but without any tense. Its sign is 'na', such as 'aana' (to come), 'jaana' (to go), 'likhna' (to write).)"
  },
  {
    "id": 267,
    "text": "لفظ 'بحر' کی جمع کیا ہے؟",
    "options": [
      "بحریں",
      "بحور",
      "بہرام",
      "بحیرہ"
    ],
    "correct": "بحور",
    "explanation": "'بحر' (سمندر، علم عروض کی اصطلاح) کی جمع 'بحور' ہے۔ ('Bahr' (sea, a term in prosody) has the plural 'buhoor'.)"
  },
  {
    "id": 268,
    "text": "اردو میں سوانح نگاری کا بانی کسے کہا جاتا ہے؟",
    "options": [
      "محمد حسین آزاد",
      "شبلی نعمانی",
      "سرسید احمد خان",
      "الطاف حسین حالی"
    ],
    "correct": "الطاف حسین حالی",
    "explanation": "الطاف حسین حالی نے 'حیاتِ سعدی'، 'یادگارِ غالب' اور 'حیاتِ جاوید' لکھ کر اردو میں باقاعدہ سوانح نگاری کی بنیاد ڈالی۔ (Altaf Hussain Hali laid the foundation of formal biography writing in Urdu by writing 'Hayat-e-Sadi', 'Yadgar-e-Ghalib', and 'Hayat-e-Javed'.)"
  },
  {
    "id": 269,
    "text": "'آسمان سے گرا، ____ میں اٹکا'۔ ضرب المثل کو مکمل کریں۔",
    "options": [
      "درخت",
      "کنویں",
      "کھجور",
      "پہاڑ"
    ],
    "correct": "کھجور",
    "explanation": "یہ کہاوت ہے 'آسمان سے گرا، کھجور میں اٹکا'۔ اس کا مطلب ہے ایک مصیبت سے نکل کر دوسری میں پھنس جانا۔ (The saying is 'Aasman se gira, khajoor mein atka'. It means to get out of one trouble only to fall into another.)"
  },
  {
    "id": 270,
    "text": "جس شعر کے دونوں مصرعے معنی کے لحاظ سے ایک دوسرے سے جڑے ہوئے ہوں اور مل کر مفہوم پورا کریں، اسے کیا کہتے ہیں؟",
    "options": [
      "شاہ بیت",
      "بیت الغزل",
      "قطعہ بند",
      "فرد"
    ],
    "correct": "قطعہ بند",
    "explanation": "قطعہ بند شعر وہ ہوتا ہے جس کا مفہوم ایک مصرعے میں مکمل نہیں ہوتا بلکہ دوسرے مصرعے سے مل کر پورا ہوتا ہے۔ غزل میں اگر دو سے زیادہ اشعار کا مفہوم مسلسل ہو تو اسے 'قطعہ' کہتے ہیں۔ (A 'Qita-band' couplet is one whose meaning is not complete in one line but is completed by the second line. In a ghazal, if the meaning of more than two couplets is continuous, it is called a 'Qita'.)"
  },
  {
    "id": 271,
    "text": "وہ حرف جو تشبیہ دینے کے کام آئے، کیا کہلاتا ہے؟",
    "options": [
      "حرفِ عطف",
      "حرفِ شرط",
      "حرفِ ندا",
      "حرفِ تشبیہ"
    ],
    "correct": "حرفِ تشبیہ",
    "explanation": "حرفِ تشبیہ (Word of Simile) وہ لفظ ہے جو مشبہ اور مشبہ بہ کو جوڑتا ہے، جیسے 'سا'، 'جیسا'، 'کی طرح'، 'مانند'۔ (Harf-e-Tashbeeh is the word that connects the subject of comparison (mushabbah) and the object of comparison (mushabbah bih), such as 'sa', 'jaisa', 'ki tarah', 'manind'.)"
  },
  {
    "id": 272,
    "text": "غالب نے اردوئے معلیٰ کے نام سے کس صنف کو فروغ دیا؟",
    "options": [
      "شاعری",
      "سوانح نگاری",
      "ناول نگاری",
      "خطوط نویسی"
    ],
    "correct": "خطوط نویسی",
    "explanation": "مرزا غالب نے اپنے خطوط کے ذریعے اردو نثر میں ایک نیا انداز متعارف کرایا جسے 'مراسلے کو مکالمہ بنانا' کہا جاتا ہے۔ ان کے خطوط کے مجموعے 'اردوئے معلیٰ' اور 'عودِ ہندی' کے نام سے شائع ہوئے۔ (Mirza Ghalib introduced a new style in Urdu prose through his letters, which is described as 'turning correspondence into conversation'. His collections of letters were published under the names 'Urdu-e-Mu'alla' and 'Oud-e-Hindi'.)"
  },
  {
    "id": 273,
    "text": "لفظ 'شقی' کا متضاد کیا ہے؟",
    "options": [
      "بدبخت",
      "نیک",
      "سعید",
      "کافر"
    ],
    "correct": "سعید",
    "explanation": "'شقی' کا مطلب ہے بدبخت، سخت دل۔ اس کا متضاد 'سعید' ہے، جس کا مطلب ہے نیک بخت، خوش نصیب۔ ('Shaqi' means wretched, hard-hearted. Its antonym is 'Saeed', which means fortunate, blessed.)"
  },
  {
    "id": 274,
    "text": "وہ نظم جس میں نبی اکرم ﷺ کی تعریف کی جائے، کیا کہلاتی ہے؟",
    "options": [
      "حمد",
      "نعت",
      "منقبت",
      "قصیدہ"
    ],
    "correct": "نعت",
    "explanation": "نعت اس نظم کو کہتے ہیں جس میں حضرت محمد مصطفیٰ صلی اللہ علیہ وسلم کی مدح سرائی کی جائے۔ (Na'at is a poem in which the Prophet Muhammad (PBUH) is praised.)"
  },
  {
    "id": 275,
    "text": "جس اسم میں بڑائی کے معنی پائے جائیں، اسے کیا کہتے ہیں؟",
    "options": [
      "اسم ظرف",
      "اسم تصغیر",
      "اسم مکبر",
      "اسم آلہ"
    ],
    "correct": "اسم مکبر",
    "explanation": "اسم مکبر (Magnificative Noun) وہ اسم ہے جس سے کسی چیز کا بڑا ہونا ظاہر ہو، جیسے 'بات' سے 'بتنگڑ'، 'شاہ' سے 'شہنشاہ'۔ (Ism-e-Mukabbar is a noun that indicates the greatness or largeness of something, e.g., from 'baat' (matter) to 'batangar' (a big issue), from 'shah' (king) to 'shehenshah' (emperor).)"
  },
  {
    "id": 276,
    "text": "لفظ 'ادیب' کی جمع کیا ہے؟",
    "options": [
      "ادیبوں",
      "ادبا",
      "ادبیات",
      "ادب"
    ],
    "correct": "ادبا",
    "explanation": "لفظ 'ادیب' (لکھاری) کی صحیح عربی جمع 'اُدَبا' ہے۔ (The correct Arabic plural for the word 'adeeb' (writer) is 'udaba'.)"
  },
  {
    "id": 277,
    "text": "پریم چند کا اصل نام کیا تھا؟",
    "options": [
      "رگھوپتی سہائے",
      "دھنپت رائے",
      "آنند نرائن ملا",
      "برج نرائن"
    ],
    "correct": "دھنپت رائے",
    "explanation": "اردو کے عظیم افسانہ نگار اور ناول نگار منشی پریم چند کا اصل نام دھنپت رائے شریواستو تھا۔ (The real name of the great Urdu short story writer and novelist Munshi Premchand was Dhanpat Rai Srivastava.)"
  },
  {
    "id": 278,
    "text": "وہ کلمہ جو کسی کام کا اثر جس پر پڑے اسے ظاہر کرے، کیا کہلاتا ہے؟",
    "options": [
      "فاعل",
      "مفعول",
      "فعل",
      "حرف"
    ],
    "correct": "مفعول",
    "explanation": "مفعول (Object) وہ اسم ہے جس پر فعل (کام) کا اثر واقع ہو، جیسے 'احمد نے سیب کھایا' میں 'سیب' مفعول ہے۔ (The object (Maf'ool) is the noun upon which the action of the verb takes place, for example, in 'Ahmad ate the apple', 'apple' is the object.)"
  },
  {
    "id": 279,
    "text": "حروفِ شمسی کی تعداد کتنی ہے؟",
    "options": [
      "12",
      "14",
      "16",
      "10"
    ],
    "correct": "14",
    "explanation": "عربی حروفِ تہجی میں 14 حروف شمسی (Solar letters) اور 14 حروف قمری (Lunar letters) ہیں۔ حروف شمسی وہ ہیں جن سے پہلے 'ال' کا لام نہیں پڑھا جاتا۔ (In the Arabic alphabet, there are 14 solar letters and 14 lunar letters. Solar letters are those before which the 'laam' of 'Al-' is not pronounced.)"
  },
  {
    "id": 280,
    "text": "'گیدڑ کی موت آئے تو وہ ____ کی طرف بھاگتا ہے'۔",
    "options": [
      "جنگل",
      "شہر",
      "پہاڑ",
      "دریا"
    ],
    "correct": "شہر",
    "explanation": "یہ مشہور کہاوت ہے کہ 'گیدڑ کی موت آئے تو وہ شہر کی طرف بھاگتا ہے'۔ اس کا مطلب ہے کہ جب برا وقت آتا ہے تو عقل کام کرنا چھوڑ دیتی ہے۔ (This is a famous saying: 'When a jackal's death comes, it runs towards the city'. It means that when bad times come, one's senses stop working.)"
  },
  {
    "id": 281,
    "text": "کسی جملے میں کسی بات پر زور دینے کے لیے کونسی علامت استعمال ہوتی ہے؟",
    "options": [
      "سوالیہ (؟)",
      "ختمہ (۔)",
      "ندائیہ یا فجائیہ (!)",
      "قوسین ()"
    ],
    "correct": "ندائیہ یا فجائیہ (!)",
    "explanation": "فجائیہ یا ندائیہ کی علامت (!) نہ صرف جذبات کے اظہار کے لیے بلکہ کسی بات پر زور دینے یا تاکید کے لیے بھی استعمال کی جاتی ہے، جیسے 'خبردار!'۔ (The exclamation mark (!) is not only used to express emotions but also to emphasize or stress a point, for example, 'Khabardar!' (Beware!).)"
  },
  {
    "id": 282,
    "text": "'فورٹ ولیم کالج' کا قیام کہاں عمل میں آیا؟",
    "options": [
      "دہلی",
      "لکھنؤ",
      "حیدرآباد",
      "کلکتہ"
    ],
    "correct": "کلکتہ",
    "explanation": "فورٹ ولیم کالج 1800ء میں کلکتہ (موجودہ کولکتہ) میں انگریزوں نے قائم کیا تھا تاکہ برطانوی افسران کو مقامی زبانیں سکھائی جا سکیں۔ اس کالج نے اردو نثر کی ترقی میں اہم کردار ادا کیا۔ (Fort William College was established by the British in Calcutta (present-day Kolkata) in 1800 to teach local languages to British officers. This college played a significant role in the development of Urdu prose.)"
  },
  {
    "id": 283,
    "text": "لفظ 'حاتم' کی مؤنث کیا ہے؟",
    "options": [
      "حاتمہ",
      "حاتمی",
      "حاتم",
      "کوئی نہیں"
    ],
    "correct": "حاتم",
    "explanation": "لفظ 'حاتم' (سخی) مرد اور عورت دونوں کے لیے استعمال ہوتا ہے۔ یہ ان الفاظ میں سے ہے جن کی جنس تبدیل نہیں ہوتی۔ (The word 'Hatim' (generous) is used for both men and women. It is one of those words whose gender does not change.)"
  },
  {
    "id": 284,
    "text": "علمِ عروض کا بانی کسے مانا جاتا ہے؟",
    "options": [
      "ارسطو",
      "افلاطون",
      "خلیل بن احمد",
      "ابنِ خلدون"
    ],
    "correct": "خلیل بن احمد",
    "explanation": "خلیل بن احمد بصری نے عربی شاعری کے اوزان اور بحور کو منظم کیا اور علمِ عروض (Prosody) کی بنیاد رکھی۔ اردو شاعری کے اوزان بھی اسی علم پر مبنی ہیں۔ (Khalil ibn Ahmad al-Farahidi systemized the meters and بحور (buhur) of Arabic poetry and laid the foundation of Ilm-e-Arooz (Prosody). The meters of Urdu poetry are also based on this science.)"
  },
  {
    "id": 285,
    "text": "'اردو کی آخری کتاب' کس کی طنزیہ و مزاحیہ تصنیف ہے؟",
    "options": [
      "پطرس بخاری",
      "ابنِ انشاء",
      "مشتاق احمد یوسفی",
      "رشید احمد صدیقی"
    ],
    "correct": "ابنِ انشاء",
    "explanation": "'اردو کی آخری کتاب' ابنِ انشاء کی ایک مشہور طنزیہ و مزاحیہ کتاب ہے جس میں انہوں نے نصابی کتب کے انداز میں سماجی اور سیاسی موضوعات پر طنز کیا ہے۔ ('Urdu ki Aakhri Kitab' is a famous satirical and humorous book by Ibn-e-Insha, in which he satirizes social and political topics in the style of a textbook.)"
  },
  {
    "id": 286,
    "text": "لفظ 'حسن' کا متضاد کیا ہے؟",
    "options": [
      "خوبصورتی",
      "جمال",
      "قُبح",
      "بدصورتی"
    ],
    "correct": "قُبح",
    "explanation": "'حسن' کا مطلب ہے خوبصورتی۔ اس کا صحیح اور معیاری متضاد 'قُبح' ہے، جس کا مطلب بدصورتی یا برائی ہے۔ 'بدصورتی' بھی درست ہے لیکن 'قبح' زیادہ فصیح ہے۔ ('Husn' means beauty. Its correct and standard antonym is 'Qubh', which means ugliness or evil. 'Bad-surati' is also correct, but 'Qubh' is more eloquent.)"
  },
  {
    "id": 287,
    "text": "'سرسید تحریک' کا دوسرا نام کیا ہے؟",
    "options": [
      "ترقی پسند تحریک",
      "علی گڑھ تحریک",
      "رومانوی تحریک",
      "اصلاحی تحریک"
    ],
    "correct": "علی گڑھ تحریک",
    "explanation": "سرسید احمد خان کی شروع کردہ تعلیمی، سماجی اور ادبی تحریک کو 'علی گڑھ تحریک' کے نام سے بھی جانا جاتا ہے کیونکہ اس کا مرکز علی گڑھ میں قائم کردہ کالج (بعد میں یونیورسٹی) تھا۔ (The educational, social, and literary movement started by Sir Syed Ahmed Khan is also known as the 'Aligarh Movement' because its center was the college (later university) established in Aligarh.)"
  },
  {
    "id": 288,
    "text": "'دال میں کالا ہونا' محاورے کا کیا مطلب ہے؟",
    "options": [
      "دال خراب ہونا",
      "شک و شبہ کی بات ہونا",
      "کھانے میں نقص ہونا",
      "اندھیرا ہونا"
    ],
    "correct": "شک و شبہ کی بات ہونا",
    "explanation": "اس محاورے کا مطلب ہے کہ کسی معاملے میں کوئی گڑبڑ، راز یا شک کی بات ہے۔ (This idiom means that there is something wrong, a secret, or something suspicious in a matter.)"
  },
  {
    "id": 289,
    "text": "وہ اسم جو کسی کی ذات کو دوسری ذاتوں سے الگ کرے، کیا کہلاتا ہے؟",
    "options": [
      "اسم نکرہ",
      "اسم معرفہ",
      "اسم جامد",
      "اسم ذات"
    ],
    "correct": "اسم معرفہ",
    "explanation": "اسم معرفہ (Proper Noun) کسی خاص شخص، جگہ یا چیز کا نام ہوتا ہے، جیسے 'کراچی'، 'قائداعظم'، 'قرآن مجید'۔ یہ اسے اپنی قسم کی دوسری عام چیزوں سے ممتاز کرتا ہے۔ (Ism-e-Marfa is the name of a specific person, place, or thing, e.g., 'Karachi', 'Quaid-e-Azam', 'Quran Majeed'. It distinguishes it from other common things of its kind.)"
  },
  {
    "id": 290,
    "text": "لفظ 'ضیغم' کے کیا معنی ہیں؟",
    "options": [
      "ہرن",
      "شیر",
      "چیتا",
      "لومڑی"
    ],
    "correct": "شیر",
    "explanation": "لفظ 'ضیغم' عربی زبان کا لفظ ہے اور اس کا معنی 'شیر' یا 'ببر شیر' ہے۔ (The word 'Zaigham' is an Arabic word, and it means 'lion' or 'tiger'.)"
  },
  {
    "id": 291,
    "text": "مشہور مثنوی 'سحر البیان' کس نے لکھی؟",
    "options": [
      "میر حسن",
      "دیا شنکر نسیم",
      "میر تقی میر",
      "مرزا شوق"
    ],
    "correct": "میر حسن",
    "explanation": "مثنوی 'سحر البیان' میر غلام حسن دہلوی کی تخلیق ہے اور اسے اردو کی بہترین مثنویوں میں شمار کیا جاتا ہے۔ (The Masnavi 'Sahr-ul-Bayan' is a creation of Mir Ghulam Hasan Dehlvi and is counted among the best masnavis of Urdu.)"
  },
  {
    "id": 292,
    "text": "'بندہ' کی جمع کیا ہے؟",
    "options": [
      "بندے",
      "بندگان",
      "بندگی",
      "الف اور ب دونوں"
    ],
    "correct": "الف اور ب دونوں",
    "explanation": "لفظ 'بندہ' کی جمع 'بندے' (اردو قاعدے سے) اور 'بندگان' (فارسی قاعدے سے) دونوں ہی درست اور مستعمل ہیں۔ ('Banda' has both 'banday' (according to Urdu rules) and 'bandagan' (according to Persian rules) as correct and commonly used plurals.)"
  },
  {
    "id": 293,
    "text": "وہ کلمہ جو کام کرنے والے کو ظاہر کرے، کیا کہلاتا ہے؟",
    "options": [
      "مفعول",
      "فاعل",
      "فعل",
      "مصدر"
    ],
    "correct": "فاعل",
    "explanation": "فاعل (Subject) وہ اسم ہے جو کسی فعل (کام) کو انجام دے، جیسے 'بچے نے کتاب پڑھی' میں 'بچہ' فاعل ہے۔ (The subject (Fa'il) is the noun that performs the action (verb), for example, in 'The child read the book', 'child' is the subject.)"
  },
  {
    "id": 294,
    "text": "وہ تحریر جس میں کسی کتاب، شخصیت یا فن پارے پر رائے دی جائے، کیا کہلاتی ہے؟",
    "options": [
      "سوانح",
      "خاکہ",
      "انشائیہ",
      "تنقید"
    ],
    "correct": "تنقید",
    "explanation": "تنقید (Criticism) وہ نثری صنف ہے جس میں کسی ادبی یا فنی تخلیق کے محاسن (خوبیوں) اور معائب (خامیوں) کا جائزہ لیا جاتا ہے اور اس کی قدر و قیمت متعین کی جاتی ہے۔ (Criticism is the prose genre in which the merits and demerits of a literary or artistic creation are analyzed, and its value is determined.)"
  },
  {
    "id": 295,
    "text": "جس لفظ سے کسی جاندار کی مادہ جنس ظاہر ہو، اسے کیا کہتے ہیں؟",
    "options": [
      "مذکر",
      "مؤنث",
      "واحد",
      "جمع"
    ],
    "correct": "مؤنث",
    "explanation": "مؤنث (Feminine) وہ جنس ہے جو مادہ جاندار کے لیے بولی جائے، جیسے 'لڑکی'، 'گائے'، 'مرغی'۔ (Feminine is the gender used for a female living being, such as 'ladki' (girl), 'gaye' (cow), 'murghi' (hen).)"
  },
  {
    "id": 296,
    "text": "لفظ 'ماہ' کے کیا معنی ہیں؟",
    "options": [
      "سورج، دن",
      "چاند، مہینہ",
      "سال، ستارہ",
      "پانی، آسمان"
    ],
    "correct": "چاند، مہینہ",
    "explanation": "لفظ 'ماہ' فارسی زبان کا لفظ ہے اور یہ ذومعنی ہے۔ اس کے دو مشہور معنی ہیں: 'چاند' اور 'مہینہ'۔ (The word 'mah' is a Persian word and it is polysemous. It has two famous meanings: 'moon' and 'month'.)"
  },
  {
    "id": 297,
    "text": "فیض احمد فیض کا پہلا شعری مجموعہ کونسا ہے؟",
    "options": [
      "دستِ صبا",
      "زنداں نامہ",
      "نقشِ فریادی",
      "دستِ تہِ سنگ"
    ],
    "correct": "نقشِ فریادی",
    "explanation": "'نقشِ فریادی' فیض احمد فیض کا پہلا مجموعہ کلام ہے جو 1941 میں شائع ہوا۔ اس کا عنوان غالب کے دیوان کے پہلے شعر سے لیا گیا ہے۔ ('Naqsh-e-Faryadi' is the first collection of poetry by Faiz Ahmed Faiz, published in 1941. Its title is taken from the first couplet of Ghalib's Diwan.)"
  },
  {
    "id": 298,
    "text": "ایسا جملہ جس میں کسی کام کے کرنے کا حکم پایا جائے، کیا کہلاتا ہے؟",
    "options": [
      "جملۂ خبریہ",
      "جملۂ استفہامیہ",
      "جملۂ امریہ",
      "جملۂ انشائیہ"
    ],
    "correct": "جملۂ امریہ",
    "explanation": "جملۂ امریہ (Imperative Sentence) وہ جملہ ہوتا ہے جس میں کوئی حکم، درخواست یا نصیحت کی گئی ہو، جیسے 'یہاں آؤ'۔ (An imperative sentence is one that contains a command, request, or advice, such as 'Come here'.)"
  },
  {
    "id": 299,
    "text": "لفظ 'فلک' کا مترادف کیا نہیں ہے؟",
    "options": [
      "آسمان",
      "چرخ",
      "سپہر",
      "ارض"
    ],
    "correct": "ارض",
    "explanation": "فلک، آسمان، چرخ اور سپہر، یہ سب آسمان کے مترادفات ہیں۔ جبکہ 'ارض' کا مطلب زمین ہے، جو کہ فلک کا متضاد ہے۔ (Falak, aasman, charkh, and sipehr are all synonyms for sky. 'Arz', however, means earth, which is the antonym of sky.)"
  },
  {
    "id": 300,
    "text": "اردو زبان کا تعلق کس لسانی خاندان سے ہے؟",
    "options": [
      "دراوڑی",
      "آریائی (ہند یورپی)",
      "سامی",
      "چینی-تبتی"
    ],
    "correct": "آریائی (ہند یورپی)",
    "explanation": "ماہرین لسانیات کے مطابق، اردو زبان کا تعلق زبانوں کے سب سے بڑے خاندان، ہند یورپی (Indo-European) خاندان کی شاخ ہند آریائی (Indo-Aryan) سے ہے۔ (According to linguists, the Urdu language belongs to the Indo-Aryan branch of the largest language family, the Indo-European family.)"
  },
  {
    "id": 301,
    "text": "کٹھ پتلیوں کا استعمال زبان کی تدریس میں خاص طور پر کس مہارت کو فروغ دینے کے لیے کارآمد ہے؟",
    "options": [
      "خوشخطی",
      "مکالماتی مہارت اور تخلیقی اظہار",
      "تیز پڑھنا",
      "قواعد کو رٹنا"
    ],
    "correct": "مکالماتی مہارت اور تخلیقی اظہار",
    "explanation": "کٹھ پتلیوں کے ذریعے کہانیاں سنانے یا ڈرامے پیش کرنے سے طلباء کو کرداروں کے مطابق بولنے کا موقع ملتا ہے۔ اس سے ان کی مکالماتی مہارت، تخلیقی صلاحیت اور اظہار خیال کی صلاحیت پروان چڑھتی ہے۔\n(Using puppets to tell stories or perform plays gives students the opportunity to speak according to characters. This develops their conversational skills, creativity, and ability to express ideas.)"
  },
  {
    "id": 302,
    "text": "تدریسی امدادی اشیاء کے استعمال میں سب سے بڑی احتیاط کیا ہونی چاہئے؟",
    "options": [
      "یہ بہت مہنگی ہونی چاہئے",
      "یہ خود تدریس کا مقصد نہ بن جائے",
      "اسے صرف ایک بار استعمال کیا جائے",
      "یہ صرف استاد کے پاس رہے"
    ],
    "correct": "یہ خود تدریس کا مقصد نہ بن جائے",
    "explanation": "ایک اہم احتیاط یہ ہے کہ تدریسی مواد صرف ایک معاون یا آلہ رہے۔ ایسا نہ ہو کہ استاد اور طلباء کی تمام تر توجہ اسی پر مرکوز ہو جائے اور سبق کا اصل مقصد پس پشت چلا جائے۔\n(An important precaution is that the teaching material should remain only a support or tool. It should not happen that the entire focus of the teacher and students shifts to it, and the main objective of the lesson is neglected.)"
  },
  {
    "id": 303,
    "text": "مقامی وسائل سے تیار کردہ کم لاگت یا بغیر لاگت والی تدریسی اشیاء کو کیا کہتے ہیں؟",
    "options": [
      "مہنگی اشیاء",
      "درآمد شدہ اشیاء",
      "فوری تیار کردہ اشیاء",
      "پیچیدہ اشیاء"
    ],
    "correct": "فوری تیار کردہ اشیاء",
    "explanation": "مقامی طور پر دستیاب مواد (جیسے اخبار، ڈبے، پتھر) سے بنائی گئی کم لاگت یا مفت تدریسی اشیاء کو فوری تیار کردہ اشیاء (Improvised Apparatus) کہتے ہیں۔ یہ تخلیقی صلاحیتوں کو بھی فروغ دیتی ہیں۔\n(Low-cost or no-cost teaching aids made from locally available materials (like newspapers, boxes, stones) are called improvised apparatus. They also promote creativity.)"
  },
  {
    "id": 304,
    "text": "زبان کی کلاس میں ادبی نشستوں یا مشاعروں کا انعقاد کس قسم کی سرگرمی ہے؟",
    "options": [
      "نصابی سرگرمی",
      "زائد نصابی سرگرمی",
      "جسمانی سرگرمی",
      "انفرادی سرگرمی"
    ],
    "correct": "زائد نصابی سرگرمی",
    "explanation": "مشاعرے یا ادبی نشستیں زائد نصابی سرگرمیاں ہیں جو طلباء میں ادب اور شاعری سے دلچسپی پیدا کرتی ہیں، ان کے ادبی ذوق کو نکھارتی ہیں اور انہیں اظہار خیال کا موقع فراہم کرتی ہیں۔\n(Poetry gatherings (Mushairas) or literary sessions are co-curricular activities that generate students' interest in literature and poetry, refine their literary taste, and provide them with an opportunity for self-expression.)"
  },
  {
    "id": 305,
    "text": "کونسی سرگرمی طلباء کو زبان کا عملی استعمال حقیقی صورتحال میں سکھاتی ہے؟",
    "options": [
      "کردار نگاری",
      "خوشخطی",
      "قواعد کی مشقیں",
      "املا"
    ],
    "correct": "کردار نگاری",
    "explanation": "کردار نگاری (Role-playing) میں طلباء کو فرضی لیکن حقیقی زندگی جیسی صورتحال دی جاتی ہے (مثلاً ڈاکٹر اور مریض)۔ اس سے وہ زبان کا عملی اور موقع محل کے مطابق استعمال سیکھتے ہیں۔\n(In role-playing, students are given imaginary but real-life-like situations (e.g., doctor and patient). This helps them learn the practical and contextual use of language.)"
  },
  {
    "id": 306,
    "text": "زبان کے کھیل (Language Games) تدریس میں کیوں اہم ہیں؟",
    "options": [
      "یہ وقت ضائع کرتے ہیں",
      "یہ سیکھنے کے عمل کو دباؤ سے پاک اور دلچسپ بناتے ہیں",
      "یہ صرف تفریح کے لیے ہوتے ہیں",
      "یہ صرف ذہین طلباء کے لیے ہیں"
    ],
    "correct": "یہ سیکھنے کے عمل کو دباؤ سے پاک اور دلچسپ بناتے ہیں",
    "explanation": "زبان کے کھیل سیکھنے کے عمل کو بوجھل ہونے سے بچاتے ہیں۔ طلباء کھیل کھیل میں غیر محسوس طریقے سے نئے الفاظ، جملے اور قواعد سیکھ جاتے ہیں، جس سے اکتساب مؤثر ہوتا ہے۔\n(Language games prevent the learning process from becoming burdensome. Students learn new words, sentences, and rules unconsciously while playing, which makes acquisition effective.)"
  },
  {
    "id": 307,
    "text": "ایک استاد کی تدریسی ڈائری یا لاگ بک کیا ہوتی ہے؟",
    "options": [
      "طلباء کی شکایات کا ریکارڈ",
      "اس کی روزانہ کی منصوبہ بندی اور تدریسی عمل پر تاثرات",
      "اسکول کے حسابات کا ریکارڈ",
      "ذاتی ڈائری"
    ],
    "correct": "اس کی روزانہ کی منصوبہ بندی اور تدریسی عمل پر تاثرات",
    "explanation": "تدریسی ڈائری میں استاد روزانہ کی بنیاد پر اپنے سبق کے منصوبے، پڑھائے گئے مواد، استعمال شدہ طریقوں اور تدریس کے دوران اپنے تجربات اور تاثرات کو درج کرتا ہے تاکہ وہ اپنی تدریس کو بہتر بنا سکے۔\n(In a teaching diary, a teacher records their daily lesson plans, content taught, methods used, and their experiences and reflections during teaching, to improve their instruction.)"
  },
  {
    "id": 308,
    "text": "لچکداری (Flexibility) منصوبہ بندی کا ایک اہم اصول کیوں ہے؟",
    "options": [
      "تاکہ استاد منصوبہ بدل سکے",
      "تاکہ غیر متوقع حالات اور طلباء کی ضروریات کے مطابق تبدیلی کی جا سکے",
      "تاکہ منصوبہ مختصر ہو",
      "تاکہ انتظامیہ خوش رہے"
    ],
    "correct": "تاکہ غیر متوقع حالات اور طلباء کی ضروریات کے مطابق تبدیلی کی جا سکے",
    "explanation": "کمرہ جماعت کا ماحول ہمیشہ متوقع نہیں ہوتا۔ ایک اچھا منصوبہ لچکدار ہوتا ہے تاکہ استاد طلباء کی دلچسپی، فہم کی رفتار یا کسی اور غیر متوقع صورتحال کے مطابق اپنی حکمت عملی میں فوری تبدیلی کر سکے۔\n(The classroom environment is not always predictable. A good plan is flexible so that the teacher can make immediate changes to their strategy according to students' interests, pace of understanding, or any other unexpected situation.)"
  },
  {
    "id": 309,
    "text": "اکائی منصوبے کا سب سے بڑا فائدہ کیا ہے؟",
    "options": [
      "یہ روزانہ بنانا پڑتا ہے",
      "یہ تدریس کو مربوط اور منظم بناتا ہے",
      "یہ بہت مختصر ہوتا ہے",
      "یہ صرف امتحان کے لیے ہوتا ہے"
    ],
    "correct": "یہ تدریس کو مربوط اور منظم بناتا ہے",
    "explanation": "اکائی منصوبہ متعلقہ تصورات کو ایک ساتھ جوڑتا ہے، جس سے تدریس بکھری ہوئی نہیں رہتی۔ یہ اسباق کے درمیان تسلسل اور ربط قائم کرتا ہے، جس سے طلباء کے لیے سمجھنا آسان ہو جاتا ہے۔\n(A unit plan connects related concepts, preventing teaching from being fragmented. It establishes continuity and linkage between lessons, making it easier for students to understand.)"
  },
  {
    "id": 310,
    "text": "خود تشخیصی (Self-Assessment) سے کیا مراد ہے؟",
    "options": [
      "استاد کا طالب علم کا جائزہ لینا",
      "طالب علم کا خود اپنے کام اور سیکھ کا جائزہ لینا",
      "والدین کا طالب علم کا جائزہ لینا",
      "دوستوں کا ایک دوسرے کا جائزہ لینا"
    ],
    "correct": "طالب علم کا خود اپنے کام اور سیکھ کا جائزہ لینا",
    "explanation": "خود تشخیصی ایک ایسا عمل ہے جس میں طلباء کو اس قابل بنایا جاتا ہے کہ وہ اپنے کام کے معیار، اپنی کمزوریوں اور خوبیوں کا خود جائزہ لے سکیں۔ اس سے ان میں ذمہ داری اور خود مختاری پیدا ہوتی ہے۔\n(Self-assessment is a process that enables students to evaluate the quality of their own work, their weaknesses, and strengths. This fosters responsibility and autonomy in them.)"
  },
  {
    "id": 311,
    "text": "ایک سوالیہ پرچہ تیار کرنے سے پہلے اس کا خاکہ (Blueprint) کیوں بنایا جاتا ہے؟",
    "options": [
      "یہ ایک غیر ضروری کام ہے",
      "تاکہ پرچہ متوازن ہو اور تمام مقاصد اور اسباق کا احاطہ کرے",
      "تاکہ پرچہ مشکل بنایا جا سکے",
      "تاکہ پرنٹنگ میں آسانی ہو"
    ],
    "correct": "تاکہ پرچہ متوازن ہو اور تمام مقاصد اور اسباق کا احاطہ کرے",
    "explanation": "بلیو پرنٹ ایک جدول ہوتا ہے جو اس بات کو یقینی بناتا ہے کہ سوالیہ پرچہ جامع اور متوازن ہو۔ اس میں مقاصد، سوالات کی اقسام اور نصاب کے مختلف حصوں کو مناسب وزن دیا جاتا ہے۔\n(A blueprint is a table that ensures the question paper is comprehensive and balanced. It assigns appropriate weightage to objectives, types of questions, and different parts of the syllabus.)"
  },
  {
    "id": 312,
    "text": "اصلاحی تدریس (Remedial Teaching) کا انعقاد کب کیا جاتا ہے؟",
    "options": [
      "سال کے شروع میں",
      "تشخیصی جانچ کے بعد",
      "تمام طلباء کے لیے",
      "چھٹیوں میں"
    ],
    "correct": "تشخیصی جانچ کے بعد",
    "explanation": "جب تشخیصی جانچ کے ذریعے طلباء کی مخصوص کمزوریوں اور سیکھنے کی مشکلات کا پتہ لگا لیا جاتا ہے، تو ان مشکلات کو دور کرنے کے لیے اضافی اور خصوصی تدریس کا اہتمام کیا جاتا ہے، جسے اصلاحی تدریس کہتے ہیں۔\n(When students' specific weaknesses and learning difficulties are identified through diagnostic testing, additional and special instruction is arranged to overcome these difficulties, which is called remedial teaching.)"
  },
  {
    "id": 313,
    "text": "ریٹنگ اسکیل (Rating Scale) کس چیز کی پیمائش کے لیے استعمال ہوتا ہے؟",
    "options": [
      "علم کی مقدار",
      "کسی خوبی یا مہارت کی شدت یا معیار",
      "حاضری",
      "خوشخطی کی رفتار"
    ],
    "correct": "کسی خوبی یا مہارت کی شدت یا معیار",
    "explanation": "ریٹنگ اسکیل ایک ایسا آلہ ہے جس میں کسی خاصیت، رویے یا مہارت (مثلاً، روانی سے بولنا) کے معیار کو ایک پیمانے پر جانچا جاتا ہے، جیسے 'بہت اچھا'، 'اچھا'، 'اوسط'۔\n(A rating scale is a tool used to measure the quality of a trait, behavior, or skill (e.g., speaking fluency) on a scale, such as 'Very Good', 'Good', 'Average'.)"
  },
  {
    "id": 314,
    "text": "حقیقی اشیاء (Real Objects) کو تدریسی مواد کے طور پر استعمال کرنے کا کیا فائدہ ہے؟",
    "options": [
      "یہ مہنگی ہوتی ہیں",
      "یہ طلباء کو ٹھوس اور براہ راست تجربہ فراہم کرتی ہیں",
      "انہیں سنبھالنا مشکل ہے",
      "یہ صرف سائنس میں استعمال ہوتی ہیں"
    ],
    "correct": "یہ طلباء کو ٹھوس اور براہ راست تجربہ فراہم کرتی ہیں",
    "explanation": "حقیقی اشیاء، جنہیں 'ریلیا' بھی کہتے ہیں، طلباء کو سیکھنے کا سب سے ٹھوس اور براہ راست تجربہ دیتی ہیں۔ مثلاً، پھلوں کے نام سکھانے کے لیے اصل پھل دکھانا تصویر دکھانے سے زیادہ مؤثر ہے۔\n(Real objects, also known as 'realia', provide students with the most concrete and direct learning experience. For example, showing actual fruits to teach their names is more effective than showing pictures.)"
  },
  {
    "id": 315,
    "text": "طلباء کو گروہی پروجیکٹ دینا کس قسم کی سرگرمی کی مثال ہے؟",
    "options": [
      "انفرادی سرگرمی",
      "ہمکارانہ اکتساب پر مبنی سرگرمی",
      "غیر نصابی سرگرمی",
      "زبانی سرگرمی"
    ],
    "correct": "ہمکارانہ اکتساب پر مبنی سرگرمی",
    "explanation": "گروہی پروجیکٹ ہمکارانہ اکتساب (Collaborative Learning) کی ایک بہترین مثال ہے۔ اس میں طلباء مل جل کر کام کرتے ہیں، ایک دوسرے سے سیکھتے ہیں اور مشترکہ طور پر ایک مقصد حاصل کرتے ہیں۔\n(A group project is an excellent example of collaborative learning. In this, students work together, learn from each other, and achieve a common goal jointly.)"
  },
  {
    "id": 316,
    "text": "سبق کے منصوبے میں خصوصی مقاصد (Specific Objectives) کیسے ہونے چاہئیں؟",
    "options": [
      "بہت وسیع اور عمومی",
      "واضح، قابل پیمائش اور قابل حصول",
      "ناقابل فہم",
      "صرف ایک مقصد"
    ],
    "correct": "واضح، قابل پیمائش اور قابل حصول",
    "explanation": "خصوصی مقاصد کو واضح طور پر بیان کرنا چاہیے کہ سبق کے اختتام پر طالب علم کیا کر سکے گا۔ انہیں قابل پیمائش ہونا چاہیے تاکہ جانچ کی جا سکے، اور قابل حصول ہونا چاہیے تاکہ وہ مقررہ وقت میں پورے ہو سکیں۔\n(Specific objectives should clearly state what the student will be able to do at the end of the lesson. They should be measurable to allow for assessment, and achievable so they can be met in the allotted time.)"
  },
  {
    "id": 317,
    "text": "جانچ میں معقولیت (Validity) کا کیا مطلب ہے؟",
    "options": [
      "ٹیسٹ کے نتائج مستقل ہوں",
      "ٹیسٹ وہی چیز جانچے جس کے لیے اسے بنایا گیا ہے",
      "ٹیسٹ آسان ہو",
      "ٹیسٹ لمبا ہو"
    ],
    "correct": "ٹیسٹ وہی چیز جانچے جس کے لیے اسے بنایا گیا ہے",
    "explanation": "معقولیت کا مطلب ہے کہ ایک ٹیسٹ جس مقصد یا مہارت کو جانچنے کے لیے بنایا گیا ہے، وہ صرف اسی کی پیمائش کرے۔ مثال کے طور پر، اگر ٹیسٹ پڑھنے کی فہم کا ہے تو اسے صرف وہی جانچنا چاہیے، نہ کہ خوشخطی۔\n(Validity means that a test measures what it is intended to measure. For example, if a test is for reading comprehension, it should only assess that skill, not handwriting.)"
  },
  {
    "id": 318,
    "text": "ٹیلی ویژن کس قسم کی تدریسی امداد کی بہترین مثال ہے؟",
    "options": [
      "سمعی امداد",
      "بصری امداد",
      "سمعی و بصری امداد",
      "مطبوعہ امداد"
    ],
    "correct": "سمعی و بصری امداد",
    "explanation": "ٹیلی ویژن ایک طاقتور سمعی و بصری امداد ہے کیونکہ یہ حرکت پذیر تصاویر (بصری) کو آواز (سمعی) کے ساتھ پیش کرتا ہے، جس سے سیکھنے کا تجربہ بہت حقیقی اور دلچسپ ہو جاتا ہے۔\n(Television is a powerful audio-visual aid because it presents moving images (visual) with sound (audio), making the learning experience very realistic and engaging.)"
  },
  {
    "id": 319,
    "text": "کلاس میں دیوار پر طلباء کے کام کو آویزاں کرنا کیا کہلاتا ہے؟",
    "options": [
      "بلیک بورڈ",
      "فلیش کارڈ",
      "بلیٹن بورڈ",
      "ماڈل"
    ],
    "correct": "بلیٹن بورڈ",
    "explanation": "بلیٹن بورڈ یا نمائشی تختہ ایک ایسی جگہ ہے جہاں طلباء کے بہترین کام، معلوماتی چارٹ، تصاویر اور اعلانات کو آویزاں کیا جاتا ہے۔ اس سے طلباء کی حوصلہ افزائی ہوتی ہے اور سیکھنے کا ماحول پیدا ہوتا ہے۔\n(A bulletin board or display board is a space where students' best work, informational charts, pictures, and announcements are displayed. This encourages students and creates a learning environment.)"
  },
  {
    "id": 320,
    "text": "منصوبہ بندی کا عمل کیسا ہوتا ہے؟",
    "options": [
      "ایک بار کا عمل",
      "ایک مسلسل اور چکری عمل",
      "ایک غیر ضروری عمل",
      "ایک پیچیدہ عمل"
    ],
    "correct": "ایک مسلسل اور چکری عمل",
    "explanation": "تدریسی منصوبہ بندی ایک مسلسل اور چکری (Cyclical) عمل ہے۔ استاد منصوبہ بناتا ہے، اسے نافذ کرتا ہے (پڑھاتا ہے)، نتائج کا جائزہ لیتا ہے، اور پھر اس جائزے کی بنیاد پر اپنے اگلے منصوبے میں بہتری لاتا ہے۔\n(Educational planning is a continuous and cyclical process. The teacher plans, implements (teaches), evaluates the results, and then improves their next plan based on that evaluation.)"
  },
  {
    "id": 321,
    "text": "ہم مرتبہ جانچ (Peer Assessment) سے کیا فائدہ ہوتا ہے؟",
    "options": [
      "کلاس میں افراتفری پھیلتی ہے",
      "طلباء تنقیدی سوچ اور ایک دوسرے کے کام کو سمجھنا سیکھتے ہیں",
      "استاد کا کام بڑھ جاتا ہے",
      "طلباء میں دشمنی پیدا ہوتی ہے"
    ],
    "correct": "طلباء تنقیدی سوچ اور ایک دوسرے کے کام کو سمجھنا سیکھتے ہیں",
    "explanation": "ہم مرتبہ جانچ میں طلباء ایک دوسرے کے کام کا جائزہ لیتے ہیں۔ اس سے نہ صرف انہیں فیڈ بیک ملتا ہے بلکہ وہ خود بھی معیار کو سمجھنا، تنقیدی نظر سے دیکھنا اور تعمیری رائے دینا سیکھتے ہیں۔\n(In peer assessment, students evaluate each other's work. This not only gives them feedback but also helps them understand standards, think critically, and learn to give constructive feedback.)"
  },
  {
    "id": 322,
    "text": "چیک لسٹ (Checklist) کا استعمال کس لیے ہوتا ہے؟",
    "options": [
      "نمبر دینے کے لیے",
      "کسی مہارت یا رویے کی موجودگی یا عدم موجودگی کو جانچنے کے لیے",
      "کہانی لکھنے کے لیے",
      "وقت دیکھنے کے لیے"
    ],
    "correct": "کسی مہارت یا رویے کی موجودگی یا عدم موجودگی کو جانچنے کے لیے",
    "explanation": "چیک لسٹ میں مطلوبہ مہارتوں یا رویوں کی ایک فہرست ہوتی ہے، اور استاد صرف 'ہاں' یا 'نہیں' میں نشان لگاتا ہے کہ آیا طالب علم میں وہ مہارت موجود ہے یا نہیں۔ یہ ایک سادہ مشاہداتی آلہ ہے۔\n(A checklist contains a list of desired skills or behaviors, and the teacher simply marks 'yes' or 'no' to indicate whether the student possesses that skill or not. It is a simple observational tool.)"
  },
  {
    "id": 323,
    "text": "کسی سبق کی تمہید باندھنے کا بہترین طریقہ کیا ہے؟",
    "options": [
      "براہ راست سبق شروع کر دینا",
      "طلباء سے ان کی سابقہ معلومات سے متعلق سوالات پوچھنا",
      "طلباء کو ڈانٹنا",
      "سبق کا خلاصہ پہلے بتا دینا"
    ],
    "correct": "طلباء سے ان کی سابقہ معلومات سے متعلق سوالات پوچھنا",
    "explanation": "ایک موثر تمہید وہ ہے جو طلباء کے سابقہ علم کو متحرک کرے۔ جب استاد ان کے جانے پہچانے موضوع سے بات شروع کرتا ہے تو وہ نئے سبق سے آسانی سے جڑ جاتے ہیں اور ان کی دلچسپی بڑھ جاتی ہے۔\n(An effective introduction is one that activates students' prior knowledge. When the teacher starts with a topic familiar to them, they connect easily with the new lesson and their interest increases.)"
  },
  {
    "id": 324,
    "text": "ایک استاد طلباء کو کہتا ہے کہ وہ اسکول کے باغ پر ایک مختصر مضمون لکھیں۔ یہ کس قسم کی جانچ ہے؟",
    "options": [
      "معروضی جانچ",
      "موضوعی یا انشائیہ جانچ",
      "زبانی جانچ",
      "عملی جانچ"
    ],
    "correct": "موضوعی یا انشائیہ جانچ",
    "explanation": "مضمون لکھوانا ایک موضوعی یا انشائیہ طرز کی جانچ ہے۔ اس میں طلباء کی تحریری صلاحیت، خیالات کو منظم کرنے کی اہلیت، ذخیرہ الفاظ اور تخلیقی صلاحیتوں کا اندازہ لگایا جاتا ہے۔\n(Assigning an essay is a subjective or essay-type assessment. It assesses students' writing skills, ability to organize thoughts, vocabulary, and creativity.)"
  },
  {
    "id": 325,
    "text": "قصہ گوئی (Storytelling) کی سرگرمی کا بنیادی مقصد کیا ہے؟",
    "options": [
      "وقت گزارنا",
      "طلباء کی سننے، سمجھنے اور تخیل کی صلاحیتوں کو فروغ دینا",
      "طلباء کو سلانا",
      "صرف اخلاقی تعلیم دینا"
    ],
    "correct": "طلباء کی سننے، سمجھنے اور تخیل کی صلاحیتوں کو فروغ دینا",
    "explanation": "قصہ گوئی ایک بہت موثر سرگرمی ہے۔ اس سے طلباء کی سننے کی مہارت بہتر ہوتی ہے، وہ کہانی کو سمجھ کر اس سے لطف اندوز ہوتے ہیں، اور ان کی تصوراتی اور تخلیقی دنیا وسیع ہوتی ہے۔\n(Storytelling is a very effective activity. It improves students' listening skills, helps them understand and enjoy the story, and expands their imaginative and creative world.)"
  },
  {
    "id": 326,
    "text": "کونسا تدریسی مواد تجریدی تصورات کو ٹھوس شکل دینے میں سب سے زیادہ مددگار ہے؟",
    "options": [
      "ماڈل",
      "لیکچر",
      "کتاب",
      "چارٹ"
    ],
    "correct": "ماڈل",
    "explanation": "ماڈل کسی حقیقی چیز کی سہ جہتی نقل ہوتی ہے۔ یہ پیچیدہ اور تجریدی (abstract) تصورات، جیسے نظام شمسی یا انسانی دل کی ساخت کو ٹھوس اور قابل فہم شکل میں پیش کرنے کے لیے بہترین ہے۔\n(A model is a 3D representation of a real object. It is excellent for presenting complex and abstract concepts, like the solar system or the structure of the human heart, in a concrete and understandable form.)"
  },
  {
    "id": 327,
    "text": "اکائی منصوبے اور سبق کے منصوبے میں کیا بنیادی فرق ہے؟",
    "options": [
      "کوئی فرق نہیں",
      "اکائی منصوبہ وسیع اور کئی اسباق پر مشتمل ہوتا ہے، جبکہ سبق کا منصوبہ ایک پیریڈ کا ہوتا ہے",
      "سبق کا منصوبہ وسیع ہوتا ہے",
      "اکائی منصوبہ روزانہ بنتا ہے"
    ],
    "correct": "اکائی منصوبہ وسیع اور کئی اسباق پر مشتمل ہوتا ہے، جبکہ سبق کا منصوبہ ایک پیریڈ کا ہوتا ہے",
    "explanation": "اکائی منصوبہ ایک بڑی اکائی (یونٹ) کا جامع خاکہ ہوتا ہے جو کئی دنوں یا ہفتوں پر محیط ہو سکتا ہے۔ سبق کا منصوبہ اسی اکائی منصوبے کا ایک چھوٹا حصہ ہوتا ہے جو صرف ایک کلاس پیریڈ کے لیے بنایا جاتا ہے۔\n(A unit plan is a comprehensive outline for a large unit that can span several days or weeks. A lesson plan is a small part of that unit plan, designed for just one class period.)"
  },
  {
    "id": 328,
    "text": "جانچ میں اعتبار  سے کیا مراد ہے؟",
    "options": [
      "ٹیسٹ کا مقصد پورا ہو",
      "ٹیسٹ کے نتائج مختلف مواقع پر جانچنے سے یکساں رہیں",
      "ٹیسٹ بہت آسان ہو",
      "ٹیسٹ صرف ایک بار لیا جا سکے"
    ],
    "correct": "ٹیسٹ کے نتائج مختلف مواقع پر جانچنے سے یکساں رہیں",
    "explanation": "اعتبار کا مطلب ہے کہ اگر ایک ہی ٹیسٹ کو ایک ہی گروہ پر مختلف اوقات میں یا مختلف جانچنے والے جانچیں تو نتائج میں یکسانیت اور مطابقت پائی جائے۔ یعنی نتائج قابل بھروسہ ہوں۔\n(Reliability means that if the same test is administered to the same group at different times, or scored by different examiners, the results remain consistent and stable. This means the results are dependable.)"
  },
  {
    "id": 329,
    "text": "اخبار کے تراشوں کو زبان کی تدریس میں کیسے استعمال کیا جا سکتا ہے؟",
    "options": [
      "کاغذ کے جہاز بنانے کے لیے",
      "پڑھنے کی فہم، ذخیرہ الفاظ اور حالات حاضرہ سے آگاہی کے لیے",
      "صرف تصاویر دیکھنے کے لیے",
      "اس کا کوئی فائدہ نہیں"
    ],
    "correct": "پڑھنے کی فہم، ذخیرہ الفاظ اور حالات حاضرہ سے آگاہی کے لیے",
    "explanation": "اخبار کے تراشے ایک مستند اور حقیقی تدریسی مواد ہیں۔ ان کو استعمال کر کے طلباء کی پڑھنے کی فہم کو جانچا جا سکتا ہے، نئے الفاظ سکھائے جا سکتے ہیں اور انہیں حالات حاضرہ سے باخبر رکھا جا سکتا ہے۔\n(Newspaper clippings are authentic and real teaching material. They can be used to assess students' reading comprehension, teach new vocabulary, and keep them informed about current affairs.)"
  },
  {
    "id": 330,
    "text": "مسلسل اور جامع جانچ کا حتمی مقصد کیا ہے؟",
    "options": [
      "طلباء کو فیل کرنا",
      "طلباء کی ہمہ جہت ترقی کو یقینی بنانا",
      "اساتذہ پر بوجھ ڈالنا",
      "صرف امتحان کا نظام چلانا"
    ],
    "correct": "طلباء کی ہمہ جہت ترقی کو یقینی بنانا",
    "explanation": "مسلسل اور جامع جانچ کا حتمی مقصد صرف تعلیمی کارکردگی کی پیمائش نہیں، بلکہ طلباء کی مجموعی شخصیت کی نشوونما، ان کی کمزوریوں کی نشاندہی اور اصلاح کے ذریعے ان کی ہمہ جہت ترقی کو یقینی بنانا ہے۔\n(The ultimate goal of Continuous and Comprehensive Evaluation is not just to measure academic performance, but to ensure the holistic development of students by identifying and remedying their weaknesses.)"
  },
  {
    "id": 331,
    "text": "اردو کو ”لشکری زبان“ کیوں کہا جاتا ہے؟",
    "options": [
      "کیونکہ یہ صرف لشکر کے لوگ بولتے تھے",
      "کیونکہ اس میں مختلف زبانوں کے الفاظ شامل ہیں",
      "کیونکہ یہ لڑائی کے لیے استعمال ہوتی تھی",
      "کیونکہ یہ بہت مشکل زبان ہے"
    ],
    "correct": "کیونکہ اس میں مختلف زبانوں کے الفاظ شامل ہیں",
    "explanation": "یہ ایک عام نظریہ ہے کہ اردو زبان شاہجہاں کے لشکر میں مختلف زبانیں بولنے والے سپاہیوں (عربی، فارسی، ترکی، ہندی) کے میل جول سے وجود میں آئی۔ اسی لیے اسے 'لشکری زبان' بھی کہتے ہیں۔\n(It is a common theory that the Urdu language emerged in the army of Shah Jahan from the interaction of soldiers speaking various languages (Arabic, Persian, Turkish, Hindi). That is why it is also called the 'Lashkari Zaban' or 'language of the army'.)"
  },
  {
    "id": 332,
    "text": "فورٹ ولیم کالج کا قیام اردو نثر کے ارتقاء میں کیوں اہم ہے؟",
    "options": [
      "یہاں صرف شاعری کی تعلیم دی جاتی تھی",
      "یہاں انگریزوں کو مقامی زبانیں سکھانے کے لیے سادہ اور سلیس نثر میں کتابیں لکھوائی گئیں",
      "اس نے اردو کی مخالفت کی",
      "یہاں صرف دینی تعلیم دی جاتی تھی"
    ],
    "correct": "یہاں انگریزوں کو مقامی زبانیں سکھانے کے لیے سادہ اور سلیس نثر میں کتابیں لکھوائی گئیں",
    "explanation": "1800 میں کلکتہ میں قائم ہونے والے فورٹ ولیم کالج نے اردو نثر کو بہت فروغ دیا۔ یہاں انگریز افسروں کو اردو سکھانے کے لیے میر امن، حیدر بخش حیدری جیسے ادیبوں سے سادہ زبان میں کتابیں لکھوائی گئیں، جس سے اردو نثر میں سادگی اور روانی پیدا ہوئی۔\n(Fort William College, established in Calcutta in 1800, greatly promoted Urdu prose. To teach Urdu to British officers, writers like Mir Amman and Haidar Bakhsh Haidri were commissioned to write books in simple language, which brought simplicity and fluency to Urdu prose.)"
  },
  {
    "id": 333,
    "text": "دکن میں اردو کے پہلے صاحبِ دیوان شاعر کون ہیں؟",
    "options": [
      "ولی دکنی",
      "ملا وجہی",
      "سلطان محمد قلی قطب شاہ",
      "غواصی"
    ],
    "correct": "سلطان محمد قلی قطب شاہ",
    "explanation": "گولکنڈہ کے حکمران، سلطان محمد قلی قطب شاہ کو اردو کا پہلا صاحبِ دیوان شاعر تسلیم کیا جاتا ہے۔ ان کے دیوان (کلیات) میں غزلیں، نظمیں، مثنویاں اور رباعیاں شامل ہیں۔\n(Sultan Muhammad Quli Qutb Shah, the ruler of Golconda, is considered the first Urdu poet to have a compiled collection of poetry (Diwan). His collection (Kulliyat) includes ghazals, poems, masnavis, and rubais.)"
  },
  {
    "id": 334,
    "text": "زبان کی تدریس میں بچوں کے ادب کو شامل کرنے کا بنیادی مقصد کیا ہے؟",
    "options": [
      "نصاب کو مشکل بنانا",
      "مطالعہ کو ایک دلچسپ اور پرلطف سرگرمی بنانا",
      "صرف اخلاقی تعلیم دینا",
      "بچوں پر بوجھ ڈالنا"
    ],
    "correct": "مطالعہ کو ایک دلچسپ اور پرلطف سرگرمی بنانا",
    "explanation": "بچوں کا ادب (کہانیاں، نظمیں، لطیفے) زبان اور مواد کے لحاظ سے بچوں کی دلچسپی اور ذہنی سطح کے مطابق ہوتا ہے۔ اسے تدریس میں شامل کرنے سے مطالعہ ایک بوجھ کے بجائے ایک دلچسپ مشغلہ بن جاتا ہے۔\n(Children's literature (stories, poems, jokes) is tailored to children's interests and mental levels in terms of language and content. Including it in teaching makes reading an enjoyable activity rather than a burden.)"
  },
  {
    "id": 335,
    "text": "ایک استاد طلباء کو سبق پڑھانے سے پہلے سبق کے عنوان پر بات چیت کرتا ہے اور ان سے سوالات پوچھتا ہے۔ یہ عمل کیا کہلاتا ہے؟",
    "options": [
      "اعادہ",
      "تمہید",
      "جانچ",
      "گھر کا کام"
    ],
    "correct": "تمہید",
    "explanation": "سبق شروع کرنے سے پہلے طلباء کی سابقہ معلومات کو جانچنے اور نئے سبق کے لیے ذہنی طور پر تیار کرنے کے عمل کو تمہید (Introduction/Motivation) کہتے ہیں۔ اس سے طلباء کی دلچسپی بڑھتی ہے۔\n(The process of checking students' prior knowledge and mentally preparing them for the new lesson before starting it is called 'Tamheed' (Introduction/Motivation). It increases students' interest.)"
  },
  {
    "id": 336,
    "text": "لکھنے کی مہارت سکھانے میں ”خاکہ سازی“ (Brainstorming) کا کیا کردار ہے؟",
    "options": [
      "یہ لکھنے کا آخری مرحلہ ہے",
      "یہ صرف املا کی غلطیاں درست کرتا ہے",
      "یہ کسی موضوع پر لکھنے سے پہلے خیالات کو جمع اور منظم کرنے میں مدد دیتا ہے",
      "اس کا لکھنے سے کوئی تعلق نہیں"
    ],
    "correct": "یہ کسی موضوع پر لکھنے سے پہلے خیالات کو جمع اور منظم کرنے میں مدد دیتا ہے",
    "explanation": "خاکہ سازی یا ذہن آزمائی (Brainstorming) تحریر کا ابتدائی مرحلہ ہے۔ اس میں طلباء کسی موضوع سے متعلق اپنے تمام خیالات کو بغیر کسی روک ٹوک کے کاغذ پر لاتے ہیں، جنہیں بعد میں منظم کر کے تحریر لکھی جاتی ہے۔\n(Brainstorming is an initial stage of writing. In this process, students freely jot down all their ideas related to a topic, which are later organized to form the written piece.)"
  },
  {
    "id": 337,
    "text": "بولنے کی مہارت میں تلفظ کے علاوہ کس چیز کی اہمیت سب سے زیادہ ہے؟",
    "options": [
      "تیز تیز بولنا",
      "صرف مشکل الفاظ استعمال کرنا",
      "آواز کا اتار چڑھاؤ اور لب و لہجہ",
      "خاموش رہنا"
    ],
    "correct": "آواز کا اتار چڑھاؤ اور لب و لہجہ",
    "explanation": "مؤثر گفتگو کے لیے صرف صحیح تلفظ کافی نہیں۔ جذبات اور معنی کو صحیح طور پر پہنچانے کے لیے آواز کے اتار چڑھاؤ (Intonation) اور مناسب لب و لہجے (Tone) کا استعمال انتہائی ضروری ہے۔\n(For effective communication, correct pronunciation alone is not enough. The use of intonation and appropriate tone is crucial to convey emotions and meaning correctly.)"
  },
  {
    "id": 338,
    "text": "نظم ”حمد“ کی تدریس سے طلباء میں کون سا جذباتی مقصد حاصل ہوتا ہے؟",
    "options": [
      "شاعر سے نفرت",
      "اللہ تعالیٰ کی محبت اور عظمت کا احساس",
      "دنیا سے بیزاری",
      "امتحان میں اچھے نمبر لینا"
    ],
    "correct": "اللہ تعالیٰ کی محبت اور عظمت کا احساس",
    "explanation": "حمد وہ نظم ہے جس میں اللہ تعالیٰ کی تعریف کی جاتی ہے۔ اس کی تدریس سے طلباء کے دل میں اللہ کی محبت، عظمت اور اس کی نعمتوں کا احساس پیدا ہوتا ہے، جو کہ ایک اہم جذباتی (affective) مقصد ہے۔\n(A 'Hamd' is a poem in praise of Allah. Teaching it fosters a sense of love and greatness for Allah and appreciation for His blessings in students' hearts, which is an important affective objective.)"
  },
  {
    "id": 339,
    "text": "جماعت دوم کی سطح پر ایک بچے سے زبان کی کس استعداد کی توقع کی جانی چاہیے؟",
    "options": [
      "وہ اخبار کا اداریہ لکھ سکے",
      "وہ دیکھی ہوئی چیزوں کے بارے میں دو تین سادہ جملے لکھ سکے",
      "وہ غالب کی شاعری پر تنقید کر سکے",
      "وہ صرف اپنا نام لکھ سکے"
    ],
    "correct": "وہ دیکھی ہوئی چیزوں کے بارے میں دو تین سادہ جملے لکھ سکے",
    "explanation": "دوسری جماعت کے اختتام تک، بچے اس قابل ہو جاتے ہیں کہ وہ  چیزوں یا تصاویر کے بارے میں اپنے خیالات کا اظہار چند سادہ اور مختصر جملوں میں تحریری طور پر کر سکیں۔\n(By the end of the second grade, children become capable of expressing their thoughts about familiar objects or pictures in a few simple and short sentences in writing.)"
  },
  {
    "id": 340,
    "text": "ایک طالب علم روانی سے پڑھ لیتا ہے لیکن پڑھے ہوئے مواد سے متعلق سوالات کے جواب نہیں دے پاتا۔ اس میں کس مہارت کی کمی ہے؟",
    "options": [
      "بلند خوانی",
      "تفہیم",
      "خوشخطی",
      "سننے کی مہارت"
    ],
    "correct": "تفہیم",
    "explanation": "روانی سے پڑھنا پڑھنے کی مہارت کا صرف ایک پہلو ہے۔ اصل مقصد پڑھے ہوئے کو سمجھنا ہے۔ اگر طالب علم مطلب نہیں سمجھ پا رہا تو اس میں تفہیم (Comprehension) کی مہارت کی کمی ہے۔\n(Reading fluently is only one aspect of reading skill. The main goal is to understand what is read. If the student cannot grasp the meaning, they lack comprehension skills.)"
  },
  {
    "id": 341,
    "text": "ابتدائی جماعتوں میں تصویری کہانیاں (Picture Stories) کیوں مفید ہیں؟",
    "options": [
      "یہ کتاب کو مہنگا بناتی ہیں",
      "یہ بچوں کو تخیل استعمال کرنے اور خود سے کہانی بنانے کی ترغیب دیتی ہیں",
      "یہ صرف وقت گزاری کا ذریعہ ہیں",
      "ان سے بچے لکھنا نہیں سیکھتے"
    ],
    "correct": "یہ بچوں کو تخیل استعمال کرنے اور خود سے کہانی بنانے کی ترغیب دیتی ہیں",
    "explanation": "تصویری کہانیاں بچوں کو تصاویر دیکھ کر واقعات کو ترتیب دینے، کرداروں کے بارے میں سوچنے اور اپنی زبان میں کہانی بیان کرنے کا موقع فراہم کرتی ہیں، جس سے ان کی تخلیقی اور بیانیہ صلاحیتیں بڑھتی ہیں۔\n(Picture stories provide children with the opportunity to sequence events by looking at pictures, think about characters, and narrate the story in their own words, which enhances their creative and narrative skills.)"
  },
  {
    "id": 342,
    "text": "تدریسِ نظم میں ”مرکزی خیال“ سے کیا مراد ہے؟",
    "options": [
      "نظم کا سب سے مشکل شعر",
      "شاعر کا نام اور تاریخ پیدائش",
      "وہ بنیادی پیغام یا خیال جو شاعر نظم کے ذریعے دینا چاہتا ہے",
      "نظم میں موجود قافیے اور ردیف"
    ],
    "correct": "وہ بنیادی پیغام یا خیال جو شاعر نظم کے ذریعے دینا چاہتا ہے",
    "explanation": "مرکزی خیال (Central Idea) کسی بھی نظم کی روح ہوتا ہے۔ یہ وہ بنیادی سوچ، پیغام یا جذبہ ہے جس کے اظہار کے لیے شاعر نے پوری نظم لکھی ہے۔\n(The central idea is the soul of any poem. It is the fundamental thought, message, or emotion that the poet aims to express through the entire poem.)"
  },
  {
    "id": 343,
    "text": "قواعد کی تدریس کو دلچسپ بنانے کے لیے استاد کو کیا کرنا چاہیے؟",
    "options": [
      "صرف اصول رٹوانے چاہئیں",
      "قواعد کو کھیلوں، سرگرمیوں اور مثالوں سے سکھانا چاہیے",
      "طلباء کو سزا دینی چاہیے",
      "قواعد پڑھانا ہی نہیں چاہیے"
    ],
    "correct": "قواعد کو کھیلوں، سرگرمیوں اور مثالوں سے سکھانا چاہیے",
    "explanation": "چھوٹے بچوں کے لیے قواعد کے خشک اصولوں کو سمجھنا مشکل ہوتا ہے۔ اگر قواعد کو زبان کے کھیلوں، پہیلیوں اور روزمرہ کی مثالوں کے ذریعے سکھایا جائے تو یہ عمل دلچسپ اور مؤثر بن جاتا ہے۔\n(It is difficult for young children to understand the dry rules of grammar. The process becomes interesting and effective if grammar is taught through language games, puzzles, and everyday examples.)"
  },
  {
    "id": 344,
    "text": "ایک استاد طلباء کو دو گروہوں میں تقسیم کر کے ایک موضوع کے حق میں اور مخالفت میں بولنے کو کہتا ہے۔ یہ کس طریقہ تدریس کی مثال ہے؟",
    "options": [
      "کہانی کا طریقہ",
      "لیکچر کا طریقہ",
      "مباحثی طریقہ",
      "نگرانی کا طریقہ"
    ],
    "correct": "مباحثی طریقہ",
    "explanation": "یہ مباحثی طریقہ (Debate Method) ہے۔ اس طریقے سے طلباء میں استدلال (reasoning)، اظہارِ خیال، خود اعتمادی اور دوسروں کے نقطہ نظر کو سننے اور سمجھنے کی صلاحیتیں پیدا ہوتی ہیں۔\n(This is the Debate Method. This method develops students' skills in reasoning, expression, self-confidence, and listening to and understanding others' viewpoints.)"
  },
  {
    "id": 345,
    "text": "نظم اور غزل کی تدریس میں بنیادی فرق کیا ہے؟",
    "options": [
      "نظم لمبی ہوتی ہے اور غزل چھوٹی",
      "نظم ایک مرکزی خیال کے تحت ہوتی ہے جبکہ غزل کا ہر شعر الگ معنی رکھتا ہے",
      "نظم میں قافیہ ہوتا ہے، غزل میں نہیں",
      "غزل پڑھانا آسان ہے، نظم مشکل"
    ],
    "correct": "نظم ایک مرکزی خیال کے تحت ہوتی ہے جبکہ غزل کا ہر شعر الگ معنی رکھتا ہے",
    "explanation": "نظم کے تمام اشعار ایک ہی موضوع یا خیال سے جڑے ہوتے ہیں۔ اس کے برعکس، غزل کا ہر شعر اپنی جگہ ایک مکمل اکائی ہوتا ہے اور اس کا مفہوم دوسرے اشعار سے آزاد ہو سکتا ہے۔ یہی تدریس میں بنیادی فرق ہے۔\n(All couplets in a Nazm are connected to a single theme or idea. In contrast, each couplet of a Ghazal is a complete unit in itself and its meaning can be independent of other couplets. This is the fundamental difference in their teaching.)"
  },
  {
    "id": 346,
    "text": "ایک استاد طلباء کو کلاس میں پڑھائے گئے سبق کا خلاصہ اپنے الفاظ میں کو کہتا ہے۔ اس کا مقصد کیا ہے؟",
    "options": [
      "طلباء کا وقت ضائع کرنا",
      "یہ جانچنا کہ طلباء نے سبق کو کس حد تک سمجھا ہے",
      "طلباء کی خوشخطی چیک کرنا",
      "کتاب کی عبارت نقل کروانا"
    ],
    "correct": "یہ جانچنا کہ طلباء نے سبق کو کس حد تک سمجھا ہے",
    "explanation": "خلاصہ لکھوانے کا مقصد طلباء کی تفہیمی صلاحیت (comprehension) اور اظہاری صلاحیت (expression) کو جانچنا ہوتا ہے۔ اس سے پتا چلتا ہے کہ وہ سبق کے اہم نکات کو سمجھ کر اپنے الفاظ میں بیان کر سکتے ہیں یا نہیں۔\n(The purpose of asking for a summary is to assess students' comprehension and expression skills. It reveals whether they can understand the main points of the lesson and express them in their own words.)"
  },
  {
    "id": 347,
    "text": "مادری زبان میں تعلیم حاصل کرنے کا سب سے بڑا علمی فائدہ کیا ہے؟",
    "options": [
      "بچے دوسری زبانیں نہیں سیکھ پاتے",
      "بچے اپنے خیالات کا اظہار بہتر طریقے سے کر سکتے ہیں اور ان کی تصوراتی سوچ پروان چڑھتی ہے",
      "اس سے کوئی فائدہ نہیں ہوتا",
      "اس سے بچے صرف اپنی ثقافت تک محدود رہتے ہیں"
    ],
    "correct": "بچے اپنے خیالات کا اظہار بہتر طریقے سے کر سکتے ہیں اور ان کی تصوراتی سوچ پروان چڑھتی ہے",
    "explanation": "جب بچے اپنی زبان میں سوچتے اور سیکھتے ہیں تو وہ تصورات کو گہرائی میں سمجھتے ہیں۔ وہ بغیر کسی رکاوٹ کے اپنے خیالات کا اظہار کر سکتے ہیں، جس سے ان کی تخلیقی اور تنقیدی سوچ کو فروغ ملتا ہے۔\n(When children think and learn in their own language, they understand concepts deeply. They can express their ideas without any hindrance, which promotes their creative and critical thinking.)"
  },
  {
    "id": 348,
    "text": "”فعال سماعت“ (Active Listening) سے کیا مراد ہے؟",
    "options": [
      "صرف سننے کا دکھاوا کرنا",
      "بات کو توجہ سے سننا، سمجھنا اور اس پر ردعمل ظاہر کرنا",
      "سنتے ہوئے دوسرے کام کرنا",
      "بات کو ایک کان سے سن کر دوسرے سے نکال دینا"
    ],
    "correct": "بات کو توجہ سے سننا، سمجھنا اور اس پر ردعمل ظاہر کرنا",
    "explanation": "فعال سماعت کا مطلب صرف الفاظ سننا نہیں، بلکہ بولنے والے کے پیغام کو پوری توجہ سے سننا، اس کا مطلب سمجھنا، اور مناسب انداز میں (مثلاً سوال پوچھ کر یا سر ہلا کر) اس کا جواب دینا ہے۔\n(Active listening doesn't just mean hearing words, but listening attentively to the speaker's message, understanding its meaning, and responding appropriately (e.g., by asking a question or nodding).)"
  },
  {
    "id": 349,
    "text": "پڑھنے کی وہ قسم جس میں کسی خاص معلومات کو تلاش کرنے کے لیے متن کو تیزی سے پڑھا جاتا ہے، کیا کہلاتی ہے؟",
    "options": [
      "اسکیننگ",
      "اسکیمنگ",
      "خاموش خوانی",
      "بلند خوانی"
    ],
    "correct": "اسکیننگ",
    "explanation": "اسکیننگ (Scanning) پڑھنے کی ایک تکنیک ہے جس میں قاری کسی مخصوص معلومات (جیسے کوئی نام، تاریخ یا فون نمبر) کو تلاش کرنے کے لیے پوری عبارت کو تیزی سے نظروں سے گزارتا ہے۔\n(Scanning is a reading technique where the reader quickly goes through a text to find a specific piece of information (like a name, date, or phone number).)"
  },
  {
    "id": 350,
    "text": "اردو رسم الخط کی بنیادی سمت کیا ہے؟",
    "options": [
      "اوپر سے نیچے",
      "بائیں سے دائیں",
      "دائیں سے بائیں",
      "نیچے سے اوپر"
    ],
    "correct": "دائیں سے بائیں",
    "explanation": "اردو رسم الخط، جو عربی اور فارسی رسم الخط سے ماخوذ ہے، دائیں سے بائیں طرف لکھا جاتا ہے۔ اس کے برعکس انگریزی اور ہندی (دیوناگری) بائیں سے دائیں لکھے جاتے ہیں۔\n(The Urdu script, which is derived from the Arabic and Persian scripts, is written from right to left. In contrast, English and Hindi (Devanagari) are written from left to right.)"
  },
  {
    "id": 351,
    "text": "جماعت اول میں لکھنے کی مہارت کی ابتدا کس چیز سے کروانی چاہیے؟",
    "options": [
      "مضمون نویسی سے",
      "ٹیڑھی سیدھی لکیریں اور دائرے بنانے سے",
      "خط لکھنے سے",
      "املا لکھوانے سے"
    ],
    "correct": "ٹیڑھی سیدھی لکیریں اور دائرے بنانے سے",
    "explanation": "حروف تہجی لکھنے سے پہلے بچوں کے ہاتھ کے پٹھوں کو مضبوط کرنا اور قلم پر ان کی گرفت بہتر بنانا ضروری ہے۔ اس کے لیے انہیں آڑی، ترچھی، سیدھی لکیریں اور دائرے بنانے کی مشق (Pre-writing strokes) کرائی جاتی ہے۔\n(Before writing the alphabet, it is important to strengthen the child's hand muscles and improve their grip on the pencil. For this, they are made to practice pre-writing strokes like horizontal, vertical, slanted lines, and circles.)"
  },
  {
    "id": 352,
    "text": "ایک استاد کلاس میں مثنوی ”سحر البیان“ پڑھا رہا ہے۔ اسے کس بات پر زیادہ توجہ دینی چاہیے؟",
    "options": [
      "ہر شعر کا الگ الگ مطلب بتانے پر",
      "کہانی کے تسلسل، کرداروں اور واقعات پر",
      "صرف شاعر کے حالاتِ زندگی پر",
      "صرف مشکل الفاظ پر"
    ],
    "correct": "کہانی کے تسلسل، کرداروں اور واقعات پر",
    "explanation": "مثنوی ایک بیانیہ صنف ہے جس میں ایک کہانی یا قصہ تسلسل کے ساتھ بیان کیا جاتا ہے۔ اس لیے اس کی تدریس میں کہانی، اس کے واقعات اور کرداروں پر توجہ دینا ضروری ہے تاکہ طلباء قصے سے لطف اندوز ہو سکیں۔\n(A 'Masnavi' is a narrative genre in which a story is told in a continuous sequence. Therefore, while teaching it, it is important to focus on the story, its events, and characters so that students can enjoy the narrative.)"
  },
  {
    "id": 353,
    "text": "طلباء کو گروہی منصوبے (Group Projects) دینے کا کیا فائدہ ہے؟",
    "options": [
      "اس سے طلباء میں انفرادیت پسندی بڑھتی ہے",
      "اس سے طلباء میں باہمی تعاون، اشتراک اور ذمہ داری کا احساس پیدا ہوتا ہے",
      "اس سے صرف ذہین طلباء کام کرتے ہیں",
      "اس سے وقت ضائع ہوتا ہے"
    ],
    "correct": "اس سے طلباء میں باہمی تعاون، اشتراک اور ذمہ داری کا احساس پیدا ہوتا ہے",
    "explanation": "گروہی منصوبے، جو منصوبی طریقے (Project Method) کا حصہ ہیں، طلباء کو مل جل کر کام کرنا سکھاتے ہیں۔ اس سے ان میں ٹیم ورک، ایک دوسرے کی مدد کرنے اور مشترکہ مقصد کے لیے کام کرنے کی صلاحیتیں فروغ پاتی ہیں۔\n(Group projects, which are part of the Project Method, teach students to work together. This develops their skills in teamwork, helping each other, and working towards a common goal.)"
  },
  {
    "id": 354,
    "text": "کسی زبان کو سیکھنے کے عمل میں غلطیوں کا کیا کردار ہے؟",
    "options": [
      "غلطیاں اس بات کی علامت ہیں کہ بچہ سیکھ نہیں رہا",
      "غلطیاں سیکھنے کے عمل کا ایک فطری حصہ ہیں اور یہ ظاہر کرتی ہیں کہ بچہ کوشش کر رہا ہے",
      "غلطیوں پر بچے کو سخت سزا دینی چاہیے",
      "غلطیوں کو ہمیشہ نظر انداز کر دینا چاہیے"
    ],
    "correct": "غلطیاں سیکھنے کے عمل کا ایک فطری حصہ ہیں اور یہ ظاہر کرتی ہیں کہ بچہ کوشش کر رہا ہے",
    "explanation": "زبان سیکھتے ہوئے غلطیاں کرنا ایک قدرتی عمل ہے۔ یہ اس بات کی نشاندہی کرتا ہے کہ بچہ زبان کے اصولوں کو سمجھنے اور استعمال کرنے کی کوشش کر رہا ہے۔ استاد کو ان غلطیوں کو سیکھنے کے موقع کے طور پر استعمال کرنا چاہیے۔\n(Making mistakes while learning a language is a natural process. It indicates that the child is trying to understand and use the rules of the language. The teacher should use these mistakes as a learning opportunity.)"
  },
  {
    "id": 355,
    "text": "زبان کی کلاس میں ”برین اسٹارمنگ“ کا کیا مقصد ہوتا ہے؟",
    "options": [
      "طلبہ کو خاموش کرانا",
      "کسی موضوع پر زیادہ سے زیادہ خیالات اور نظریات پیدا کرنا",
      "صرف ایک صحیح جواب تلاش کرنا",
      "طلبہ کی یادداشت کا امتحان لینا"
    ],
    "correct": "کسی موضوع پر زیادہ سے زیادہ خیالات اور نظریات پیدا کرنا",
    "explanation": "برین اسٹارمنگ (ذہن آزمائی) ایک ایسی تکنیک ہے جس میں کسی موضوع پر طلبہ کو آزادانہ طور پر اپنے خیالات پیش کرنے کی ترغیب دی جاتی ہے، چاہے وہ کتنے ہی غیر معمولی کیوں نہ ہوں۔ اس کا مقصد تخلیقی سوچ کو ابھارنا ہے۔\n(Brainstorming is a technique in which students are encouraged to freely present their ideas on a topic, no matter how unusual they may be. Its purpose is to stimulate creative thinking.)"
  },
  {
    "id": 356,
    "text": "زبان کی مہارتوں میں کونسی مہارتیں ”بنیادی“ اور کونسی ”تکمیلی“ ہیں؟",
    "options": [
      "سننا اور بولنا بنیادی، پڑھنا اور لکھنا تکمیلی",
      "پڑھنا اور لکھنا بنیادی، سننا اور بولنا تکمیلی",
      "تمام مہارتیں بنیادی ہیں",
      "تمام مہارتیں تکمیلی ہیں"
    ],
    "correct": "سننا اور بولنا بنیادی، پڑھنا اور لکھنا تکمیلی",
    "explanation": "بچہ پہلے سننا اور بولنا قدرتی طور پر سیکھتا ہے، اس لیے انہیں بنیادی مہارتیں (Primary Skills) کہا جاتا ہے۔ پڑھنا اور لکھنا بعد میں باقاعدہ تعلیم کے ذریعے سکھایا جاتا ہے، اس لیے انہیں تکمیلی یا ثانوی مہارتیں (Reinforcement/Secondary Skills) کہتے ہیں۔\n(A child first learns to listen and speak naturally, so these are called Primary Skills. Reading and writing are taught later through formal education, so they are called Reinforcement or Secondary Skills.)"
  },
  {
    "id": 357,
    "text": "تدریس میں سمعی و بصری معاونات (Audio-Visual Aids) کا سب سے بڑا فائدہ کیا ہے؟",
    "options": [
      "یہ بہت مہنگی ہوتی ہیں",
      "یہ سیکھنے کے عمل کو دلچسپ بناتی ہیں اور تصورات کو ٹھوس شکل میں پیش کرتی ہیں",
      "یہ استاد کی جگہ لے لیتی ہیں",
      "ان کا استعمال وقت کا ضیاع ہے"
    ],
    "correct": "یہ سیکھنے کے عمل کو دلچسپ بناتی ہیں اور تصورات کو ٹھوس شکل میں پیش کرتی ہیں",
    "explanation": "سمعی و بصری اشیاء (جیسے تصاویر، چارٹ، ویڈیوز) مجرد تصورات کو ٹھوس اور قابلِ فہم بناتی ہیں۔ یہ ایک سے زیادہ حواس کو متحرک کرتی ہیں، جس سے سیکھنا زیادہ مؤثر اور دیرپا ہو جاتا ہے۔\n(Audio-visual aids (like pictures, charts, videos) make abstract concepts concrete and understandable. They engage multiple senses, making learning more effective and lasting.)"
  },
  {
    "id": 358,
    "text": "اگر ایک استاد اردو حروفِ تہجی سکھانے کے لیے ملتی جلتی آوازوں والے حروف (جیسے ت، ط) کو ایک ساتھ سکھاتا ہے، تو وہ کون سا طریقہ استعمال کر رہا ہے؟",
    "options": [
      "ابجدی طریقہ",
      "صوتی طریقہ",
      "جملے کا طریقہ",
      "کہانی کا طریقہ"
    ],
    "correct": "صوتی طریقہ",
    "explanation": "صوتی طریقہ (Phonetic Method) میں حروف کو ان کی آوازوں کی بنیاد پر سکھایا جاتا ہے۔ اس میں ملتی جلتی آوازوں والے حروف کو ایک گروپ میں رکھ کر پڑھایا جاتا ہے تاکہ بچے آوازوں کے فرق کو سمجھ سکیں۔\n(In the Phonetic Method, letters are taught based on their sounds. In this method, letters with similar sounds are grouped together and taught so that children can understand the difference in sounds.)"
  },
  {
    "id": 359,
    "text": "”تدریسی زبان کے طریقے“ سے کیا مراد ہے؟",
    "options": [
      "استاد کی اپنی زبان",
      "وہ مخصوص حکمت عملیاں اور سرگرمیاں جو استاد زبان سکھانے کے لیے اپناتا ہے",
      "کتاب کی مشکل زبان",
      "طلباء کی مادری زبان"
    ],
    "correct": "وہ مخصوص حکمت عملیاں اور سرگرمیاں جو استاد زبان سکھانے کے لیے اپناتا ہے",
    "explanation": "تدریسی زبان کے طریقے (Methods of teaching language) وہ سائنسی اور منظم اصول، حکمت عملیاں اور سرگرمیاں ہیں جن کو استعمال کر کے ایک استاد زبان کے مقاصد کو مؤثر طریقے سے حاصل کرنے کی کوشش کرتا ہے۔\n(Methods of teaching language are the scientific and systematic principles, strategies, and activities that a teacher uses to effectively achieve the objectives of language teaching.)"
  },
  {
    "id": 360,
    "text": "ایک اچھا سوال وہ ہوتا ہے جو:",
    "options": [
      "بہت لمبا اور پیچیدہ ہو",
      "طلباء کو سوچنے اور اپنے خیالات کا اظہار کرنے پر مجبور کرے",
      "جس کا جواب صرف ہاں یا ناں میں ہو",
      "جس کا جواب کتاب میں موجود نہ ہو"
    ],
    "correct": "طلباء کو سوچنے اور اپنے خیالات کا اظہار کرنے پر مجبور کرے",
    "explanation": "سوال و جواب کے طریقے میں اچھے سوالات وہ ہوتے ہیں جو صرف یادداشت کو نہ جانچیں بلکہ طلباء کی فہم، تجزیہ اور تنقیدی سوچ کو ابھاریں۔ ایسے سوالات تدریسی عمل کو زیادہ بامعنی بناتے ہیں۔\n(In the question-answer method, good questions are those that don't just test memory but also stimulate students' understanding, analysis, and critical thinking. Such questions make the teaching process more meaningful.)"
  }
]

export const urduPaper1Questions = rawUrduPaper1Data.map((q, index) => {
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


export const convertUrduPaper1ToQuestionFormat = (questions: typeof urduPaper1Questions) => {
  return questions.map((q, index) => ({
    id: index + 1,
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
  }));
};
