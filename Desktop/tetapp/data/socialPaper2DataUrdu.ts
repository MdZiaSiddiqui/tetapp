type SocialPaper2UrduRawQuestion = {
  id: number | string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

const rawSocialPaper2UrduData: SocialPaper2UrduRawQuestion[] =
[
  {
    "id": 1,
    "question": "Usually, Contour lines are drawn in the map at these fixed intervals of height (TSTET 02 Jan 2025)\nعام طور پر، نقشے میں کنٹور لائنیں اونچائی کے ان مقررہ وقفوں پر کھینچی جاتی ہیں",
    "options": [
      "100 metres, 200 metres and 300 metres\n100 میٹر، 200 میٹر اور 300 میٹر",
      "50 metres, 200 metres and 500 metres\n50 میٹر، 200 میٹر اور 500 میٹر",
      "20 metres, 50 metres and 100 metres\n20 میٹر، 50 میٹر اور 100 میٹر",
      "100 metres, 500 metres and 1000 metres\n100 میٹر، 500 میٹر اور 1000 میٹر"
    ],
    "correctAnswer": 2,
    "explanation": "کنٹور لائنیں مساوی بلندی کے مقامات کو جوڑتی ہیں۔ وقفہ، یا لائنوں کے درمیان عمودی فاصلہ، مستقل رکھا جاتا ہے۔ ٹپوگرافک نقشوں پر عام وقفے 20، 50، اور 100 میٹر ہوتے ہیں، جو نقشے کے پیمانے اور علاقے کی ڈھلوان پر منحصر ہوتے ہیں۔"
  },
  {
    "id": 2,
    "question": "These districts of Telangana state share their boundary with the state of Chattisgarh (TSTET 02 Jan 2025)\nتلنگانہ ریاست کے یہ اضلاع اپنی سرحد ریاست چھتیس گڑھ کے ساتھ بانٹتے ہیں",
    "options": [
      "Bhadradri Kothagudem and Jayashakar Bhoopalapally\nبھدرادری کوتھا گوڈیم اور جیاشنکر بھوپال پلی",
      "Bhadradri Kothagudem and Adilabad\nبھدرادری کوتھا گوڈیم اور عادل آباد",
      "Komarum Bheem and Adilabad\nکمارام بھیم اور عادل آباد",
      "Manchiryal and Komarum Bheem\nمنچریال اور کمارام بھیم"
    ],
    "correctAnswer": 0,
    "explanation": "تلنگانہ کی شمال مشرقی سرحد چھتیس گڑھ کے ساتھ ملتی ہے۔ اس سرحد پر واقع اضلاع بنیادی طور پر بھدرادری کوتھا گوڈیم اور ملوگو ہیں (جو جیاشنکر بھوپال پلی سے الگ کر کے بنایا گیا تھا)۔"
  },
  {
    "id": 3,
    "question": "Which of the following statement refers to Continental (Extreme) Climate'? (TSTET 02 Jan 2025)\nمندرجہ ذیل میں سے کون سا بیان 'براعظمی (شدید) آب و ہوا' کی طرف اشارہ کرتا ہے؟",
    "options": [
      "The places having no difference between the maximum and the minimum monthly average temperatures\nوہ مقامات جہاں زیادہ سے زیادہ اور کم سے کم ماہانہ اوسط درجہ حرارت کے درمیان کوئی فرق نہیں ہوتا",
      "The places having less difference between the maximum and the minimum monthly average temperatures\nوہ مقامات جہاں زیادہ سے زیادہ اور کم سے کم ماہانہ اوسط درجہ حرارت کے درمیان کم فرق ہوتا ہے",
      "The places having great difference between the maximum and the minimum monthly average temperatures\nوہ مقامات جہاں زیادہ سے زیادہ اور کم سے کم ماہانہ اوسط درجہ حرارت کے درمیان بہت زیادہ فرق ہوتا ہے",
      "The places having negligible difference between the maximum and the minimum monthly average temperatures\nوہ مقامات جہاں زیادہ سے زیادہ اور کم سے کم ماہانہ اوسط درجہ حرارت کے درمیان نہ ہونے کے برابر فرق ہوتا ہے"
    ],
    "correctAnswer": 2,
    "explanation": "براعظمی آب و ہوا کی خصوصیت سال بھر درجہ حرارت میں نمایاں تغیرات ہیں۔ سمندروں کے معتدل اثرات سے دور مقامات پر بہت گرم گرمیاں اور بہت سرد سردیاں ہوتی ہیں، جس کی وجہ سے زیادہ سے زیادہ اور کم سے کم درجہ حرارت کے درمیان ایک بڑا یا 'بہت زیادہ' فرق ہوتا ہے۔"
  },
  {
    "id": 4,
    "question": "These parts of India receive annual rainfall over 400 cm. (TSTET 02 Jan 2025)\nہندوستان کے ان حصوں میں سالانہ 400 سینٹی میٹر سے زیادہ بارش ہوتی ہے۔",
    "options": [
      "The eastern part of Western Ghats\nمغربی گھاٹوں کا مشرقی حصہ",
      "North Eastern parts of India\nہندوستان کے شمال مشرقی حصے",
      "The Chota Nagpur Plateau region\nچھوٹا ناگپور سطح مرتفع کا علاقہ",
      "The Deccan Plateau region\nدکن کی سطح مرتفع کا علاقہ"
    ],
    "correctAnswer": 1,
    "explanation": "ہندوستان کے شمال مشرقی حصے، خاص طور پر میگھالیہ میں کھاسی پہاڑیوں کا ہوا کی سمت والا حصہ (مثلاً، ماوسینرام، چیراپونجی)، ملک میں سب سے زیادہ بارش حاصل کرتے ہیں، جو اکثر سالانہ 400 سینٹی میٹر سے تجاوز کر جاتی ہے، جس کی وجہ خلیج بنگال سے آنے والی مون سون ہوائیں ہیں۔"
  },
  {
    "id": 5,
    "question": "In this layer of the atmosphere, the temperature increases as there is an increase in altitude (TSTET 02 Jan 2025)\nفضا کی اس تہہ میں، بلندی میں اضافے کے ساتھ درجہ حرارت بڑھتا ہے",
    "options": [
      "Troposphere\nٹروپوسفیئر",
      "Stratosphere\nاسٹریٹوسفیئر",
      "Mesosphere\nمیزوسفیئر",
      "Stratosphere and Mesosphere\nاسٹریٹوسفیئر اور میزوسفیئر"
    ],
    "correctAnswer": 1,
    "explanation": "اسٹریٹوسفیئر میں، اونچائی کے ساتھ درجہ حرارت بڑھتا ہے۔ یہ 'درجہ حرارت کا الٹاؤ' سورج کی بالائے بنفشی (UV) شعاعوں کے اوزون کی تہہ کے ذریعے جذب ہونے کی وجہ سے ہوتا ہے، جو فضا کے اس حصے میں مرکوز ہے۔"
  },
  {
    "id": 6,
    "question": "These forests are commonly found in South East USA. South China and in South East Brazil (TSTET 02 Jan 2025)\nیہ جنگلات عام طور پر جنوب مشرقی امریکہ، جنوبی چین اور جنوب مشرقی برازیل میں پائے جاتے ہیں",
    "options": [
      "Tropical Deciduous Forests\nگرم مرطوب خزاں رسیدہ جنگلات",
      "Tropical Evergreen Forests\nگرم مرطوب سدا بہار جنگلات",
      "Temperate Deciduous Forests\nمعتدل خزاں رسیدہ جنگلات",
      "Temperate Evergreen Forests\nمعتدل سدا بہار جنگلات"
    ],
    "correctAnswer": 3,
    "explanation": "معتدل سدا بہار جنگلات درمیانی عرض بلد کے ساحلی علاقوں میں پائے جاتے ہیں۔ مخصوص علاقے (جنوب مشرقی امریکہ، جنوبی چین، جنوب مشرقی برازیل) اس قسم کے جنگلات کے لیے مخصوص مقامات ہیں، جن کی خصوصیت گرم گرمیاں، ہلکی سردیاں، اور چوڑے پتوں والے اور مخروطی درختوں کا امتزاج ہے۔"
  },
  {
    "id": 7,
    "question": "This type of farming depends upon monsoon rainfall, natural fertility of the soil and suitability of other environmental conditions to the crops grown (TSTET 02 Jan 2025)\nکاشتکاری کی یہ قسم مون سون کی بارش، مٹی کی قدرتی زرخیزی اور اگائی جانے والی فصلوں کے لیے دیگر ماحولیاتی حالات کی موزونیت پر منحصر ہے",
    "options": [
      "Intensive Subsistence Farming\nگھنی निर्वाह کاشتکاری",
      "Simple Subsistence Farming\nسادہ निर्वाह کاشتکاری",
      "Commercial Farming\nتجارتی کاشتکاری",
      "Extensive Agricultural Farming\nوسیع زرعی کاشتکاری"
    ],
    "correctAnswer": 1,
    "explanation": "سادہ (یا قدیم) گزراوقات کی کاشتکاری ایک روایتی زرعی طریقہ ہے جو مکمل طور پر قدرتی عوامل جیسے بارش اور مٹی کی زرخیزی پر انحصار کرتا ہے۔ اس میں بنیادی اوزار اور خاندانی محنت کا استعمال ہوتا ہے تاکہ بنیادی طور پر خود کے استعمال کے لیے خوراک اگائی جا سکے۔"
  },
  {
    "id": 8,
    "question": "The distance between any two consecutive longitudes is approximately 111.32 km at the equator. The perimeter of the Earth at the equator is (TSTET 02 Jan 2025)\nخط استوا پر کسی بھی دو لگاتار طول البلد کے درمیان فاصلہ تقریباً 111.32 کلومیٹر ہے۔ خط استوا پر زمین کا محیط ہے",
    "options": [
      "40,075 Km\n40,075 کلومیٹر",
      "41,470 km\n41,470 کلومیٹر",
      "39,294 km\n39,294 کلومیٹر",
      "12,896 km\n12,896 کلومیٹر"
    ],
    "correctAnswer": 0,
    "explanation": "زمین کے 360 ڈگری طول البلد ہیں۔ استوائی محیط کا حساب لگانے کے لیے، ایک ڈگری کے فاصلے کو 360 سے ضرب دیں۔ لہذا، 111.32 کلومیٹر/ڈگری * 360 ڈگری = 40,075.2 کلومیٹر۔"
  },
  {
    "id": 9,
    "question": "Read the following sentences regarding 'Surface Waves'. A) The velocity of Surface waves changes as they travel through materials with different densities in the interior of the earth B) The denser the material, the higher the velocity of the 'surface waves' (TSTET 02 Jan 2025)\n'سطحی لہروں' کے بارے میں مندرجہ ذیل جملے پڑھیں۔ A) سطحی لہروں کی رفتار بدل جاتی ہے جب وہ زمین کے اندر مختلف کثافت والے مواد سے گزرتی ہیں B) مواد جتنا زیادہ کثیف ہوگا، 'سطحی لہروں' کی رفتار اتنی ہی زیادہ ہوگی",
    "options": [
      "Both A and B are incorrect\nA اور B دونوں غلط ہیں",
      "A is correct and B is incorrect\nA صحیح ہے اور B غلط ہے",
      "B is correct and A is incorrect\nB صحیح ہے اور A غلط ہے",
      "Both A and B are correct\nA اور B دونوں صحیح ہیں"
    ],
    "correctAnswer": 0,
    "explanation": "دونوں بیانات غلط ہیں۔ سطحی لہریں زمین کی سطح کے ساتھ سفر کرتی ہیں، اس کے اندرونی حصے میں نہیں، اس لیے بیان A غلط ہے۔ دونوں بیانات میں بیان کردہ خصوصیات باڈی ویوز (P-ویوز اور S-ویوز) پر لاگو ہوتی ہیں، جو زمین کے اندرونی حصے سے گزرتی ہیں۔"
  },
  {
    "id": 10,
    "question": "The Geographical area of India and the percentage of the total Geographical area of India in the world is (TSTET 02 Jan 2025)\nہندوستان کا جغرافیائی رقبہ اور دنیا میں ہندوستان کے کل جغرافیائی رقبے کا فیصد ہے",
    "options": [
      "32.8 million Sq. km and 2.4% of world's Geographical area\n32.8 ملین مربع کلومیٹر اور دنیا کے جغرافیائی رقبے کا 2.4%",
      "328 million Sq. km and 3.4% of world's Geographical area\n328 ملین مربع کلومیٹر اور دنیا کے جغرافیائی رقبے کا 3.4%",
      "3.28 million Sq.km and 2.4% of world's Geographical area\n3.28 ملین مربع کلومیٹر اور دنیا کے جغرافیائی رقبے کا 2.4%",
      "0.328 million Sq. km and 2.4% of world's Geographical area\n0.328 ملین مربع کلومیٹر اور دنیا کے جغرافیائی رقبے کا 2.4%"
    ],
    "correctAnswer": 2,
    "explanation": "ہندوستان کا کل زمینی رقبہ تقریباً 3.28 ملین مربع کلومیٹر ہے۔ یہ دنیا کے کل زمینی رقبے کا تقریباً 2.4% بنتا ہے، جو اسے عالمی سطح پر ساتواں سب سے بڑا ملک بناتا ہے۔"
  },
  {
    "id": 11,
    "question": "From among the following, identify the true statements regarding the Western Ghats. A) The height of Western Ghats progressively increases from north to south. B) Anaimudi and Dodda betta are the highest peaks of the Western Ghats. C) The Eastern Ghats are higher than the Western Ghats. D) The Rivers like Godavari, Krishna. Thungabhadra etc. are originated in the Western Ghats. (TSTET 02 Jan 2025)\nمندرجہ ذیل میں سے، مغربی گھاٹوں کے بارے میں درست بیانات کی نشاندہی کریں۔ A) مغربی گھاٹوں کی اونچائی شمال سے جنوب کی طرف بتدریج بڑھتی ہے۔ B) انائیمودی اور ڈوڈا بیٹا مغربی گھاٹوں کی بلند ترین چوٹیاں ہیں۔ C) مشرقی گھاٹ مغربی گھاٹوں سے زیادہ بلند ہیں۔ D) گوداوری، کرشنا، تنگبھدرا وغیرہ دریا مغربی گھاٹوں سے نکلتے ہیں۔",
    "options": [
      "A & B only\nصرف A اور B",
      "B & C only\nصرف B اور C",
      "B & D only\nصرف B اور D",
      "A, B & D only\nصرف A، B اور D"
    ],
    "correctAnswer": 3,
    "explanation": "بیانات A، B، اور D درست ہیں۔ مغربی گھاٹوں کی بلندی جنوب کی طرف بڑھتی ہے (A)۔ انائیمودی سب سے اونچی چوٹی ہے (B)۔ جزیرہ نما کے بڑے دریا وہیں سے نکلتے ہیں (D)۔ بیان C غلط ہے۔ مغربی گھاٹ مشرقی گھاٹوں سے نمایاں طور پر بلند اور زیادہ مسلسل ہیں۔"
  },
  {
    "id": 12,
    "question": "Among the following Groups of countries, the countries which are grouped under 'Very High Human Development' as per Human Development Index Report, 2021 (TSTET 02 Jan 2025)\nمندرجہ ذیل ممالک کے گروپوں میں سے، وہ ممالک جو انسانی ترقی کے اشاریہ رپورٹ 2021 کے مطابق 'بہت اعلی انسانی ترقی' کے تحت گروپ کیے گئے ہیں",
    "options": [
      "Norway, Switzerland, United States of America\nناروے، سوئٹزرلینڈ، ریاستہائے متحدہ امریکہ",
      "China, Sri Lanka, India\nچین، سری لنکا، ہندوستان",
      "United States of America, Sri Lanka and Bhutan\nریاستہائے متحدہ امریکہ، سری لنکا اور بھوٹان",
      "Switzerland, Sri Lanka and China\nسوئٹزرلینڈ، سری لنکا اور چین"
    ],
    "correctAnswer": 0,
    "explanation": "یو این ڈی پی کی انسانی ترقی کی رپورٹ 2021/22 کے مطابق، ناروے، سوئٹزرلینڈ، اور امریکہ جیسے ممالک کو مسلسل 'بہت اعلی انسانی ترقی' کے زمرے میں رکھا گیا ہے۔ ہندوستان، چین، اور سری لنکا 'اعلی' یا 'درمیانی' ترقی کے زمرے میں آتے ہیں۔"
  },
  {
    "id": 13,
    "question": "Between the latitudes 10° and 30° North and South of the equator, rainfall is heavier on the eastern coasts and decreases towards the west due to these winds (TSTET 02 Jan 2025)\nخط استوا کے شمال اور جنوب میں 10° اور 30° عرض بلد کے درمیان، مشرقی ساحلوں پر بارش زیادہ ہوتی ہے اور ان ہواؤں کی وجہ سے مغرب کی طرف کم ہو جاتی ہے",
    "options": [
      "Westerlies\nمغربی ہوائیں",
      "Monsoon winds\nمون سون ہوائیں",
      "Trade Winds\nتجارتی ہوائیں",
      "Polar Winds\nقطبی ہوائیں"
    ],
    "correctAnswer": 2,
    "explanation": "حارہ کے علاقوں میں، تجارتی ہوائیں مشرق سے مغرب کی طرف چلتی ہیں۔ جب وہ گرم سمندروں پر سے گزرتی ہیں، تو وہ نمی اٹھا لیتی ہیں، جس سے براعظموں کے مشرقی ساحلوں پر بھاری بارش ہوتی ہے۔ جب وہ مغرب کی طرف اندرون ملک بڑھتی ہیں، تو وہ نمی کھو دیتی ہیں، اور بارش کم ہو جاتی ہے۔"
  },
  {
    "id": 14,
    "question": "Which one of the following is the main cause of land degradation of soil in Punjab, Haryana and Western Uttar Pradesh? (TSTET 02 Jan 2025)\nپنجاب، ہریانہ اور مغربی اتر پردیش میں مٹی کے زمینی انحطاط کی بنیادی وجہ مندرجہ ذیل میں سے کون سی ہے؟",
    "options": [
      "Intensive cultivation\nگھنی کاشتکاری",
      "Over irrigation\nضرورت سے زیادہ آبپاشی",
      "Deforestation\nجنگلات کی کٹائی",
      "Overgrazing of animals\nجانوروں کا زیادہ چرنا"
    ],
    "correctAnswer": 1,
    "explanation": "پنجاب، ہریانہ، اور مغربی یوپی کے زرعی طور پر گنجان علاقوں میں، نہروں اور ٹیوب ویلوں سے زیادہ آبپاشی نے پانی کے جمع ہونے اور مٹی کی نمکینی کے شدید مسائل کو جنم دیا ہے، جو زمینی انحطاط کی بڑی شکلیں ہیں۔"
  },
  {
    "id": 15,
    "question": "In China, all social classes opposing feudalism and imperialism were united on the basis of this theory (TSTET 02 Jan 2025)\nچین میں، جاگیرداری اور سامراج کی مخالفت کرنے والی تمام سماجی طبقات اس نظریے کی بنیاد پر متحد تھے",
    "options": [
      "New Democracy\nنئی جمہوریت",
      "Communism\nکمیونزم",
      "Revolution\nانقلاب",
      "Land for all\nسب کے لیے زمین"
    ],
    "correctAnswer": 0,
    "explanation": "ماؤ زے تنگ کے 'نئی جمہوریت' کے نظریے نے چین میں سوشلزم کی طرف منتقلی سے پہلے انقلاب کی قیادت کرنے کے لیے تمام سامراج مخالف اور جاگیرداری مخالف سماجی طبقات—پرولتاریہ، کسان، پیٹی بورژوازی، اور قومی بورژوازی—کے اتحاد کی تجویز پیش کی۔"
  },
  {
    "id": 16,
    "question": "Adolf Hitler assigned the responsibility of economic recovery to Hjalmar Schacht in Germany. He aimed at (TSTET 02 Jan 2025)\nایڈولف ہٹلر نے جرمنی میں اقتصادی بحالی کی ذمہ داری ہلمار شاخت کو سونپی۔ اس کا مقصد تھا",
    "options": [
      "Heavy collection of taxes from the people\nلوگوں سے بھاری ٹیکس وصولی",
      "Full production and full employment through a state funded work creation programme\nریاستی فنڈ سے چلنے والے کام کی تخلیق کے پروگرام کے ذریعے مکمل پیداوار اور مکمل روزگار",
      "Privatisation of industries in the country\nملک میں صنعتوں کی نجکاری",
      "Bringing a new variety of seeds in the field of agriculture to increase production\nپیداوار بڑھانے کے لیے زراعت کے شعبے میں نئی قسم کے بیج لانا"
    ],
    "correctAnswer": 1,
    "explanation": "عظیم کساد بازاری کا مقابلہ کرنے کے لیے، ہٹلر کے اقتصادی وزیر، ہلمار شاخت نے ریاستی فنڈ سے چلنے والے عوامی کاموں (جیسے آٹوبان) اور دوبارہ اسلحہ سازی پر مرکوز پالیسیاں نافذ کیں۔ مقصد معیشت کو متحرک کرنا اور مکمل پیداوار اور روزگار حاصل کرنا تھا۔"
  },
  {
    "id": 17,
    "question": "To isolate France, this German Chancellor had made a secret alliance with Austria in 1879 and Italy and Austria in 1882 (TSTET 02 Jan 2025)\nفرانس کو الگ تھلگ کرنے کے لیے، اس جرمن چانسلر نے 1879 میں آسٹریا اور 1882 میں اٹلی اور آسٹریا کے ساتھ خفیہ اتحاد کیا تھا",
    "options": [
      "Olaf Scholz\nاولاف شولز",
      "Helmet Kohl\nہیلمٹ کوہل",
      "Kurt George Kiesinger\nکرٹ جارج کیزنگر",
      "Otto Von Bismarck\nاوٹو وان بسمارک"
    ],
    "correctAnswer": 3,
    "explanation": "اوٹو وان بسمارک کی خارجہ پالیسی فرانکو-پرشین جنگ کے بعد فرانس کو الگ تھلگ رکھنے پر مرکوز تھی۔ اس نے اس مقصد کو حاصل کرنے کے لیے اتحادوں کا ایک سلسلہ تیار کیا، جس میں آسٹریا-ہنگری کے ساتھ دوہرا اتحاد (1879) اور آسٹریا-ہنگری اور اٹلی کے ساتھ سہ رخی اتحاد (1882) شامل تھا۔"
  },
  {
    "id": 18,
    "question": "Giuseppe Mazzini formed a secret society called 'Young Italy' to (TSTET 02 Jan 2025)\nجیوسپی مازینی نے 'ینگ اٹلی' نامی ایک خفیہ سوسائٹی قائم کی تاکہ",
    "options": [
      "To separate the Italian States and hand over to Bourbon Kings\nاطالوی ریاستوں کو الگ کر کے بوربن بادشاہوں کے حوالے کرنا",
      "To unite Italy into an Italian Republic\nاٹلی کو ایک اطالوی جمہوریہ میں متحد کرنا",
      "To defeat France and occupy the small independent German Kingdoms\nفرانس کو شکست دینا اور چھوٹی آزاد جرمن سلطنتوں پر قبضہ کرنا",
      "To drive out the Spanish rulers with the help and support of the local peasants\nمقامی کسانوں کی مدد اور حمایت سے ہسپانوی حکمرانوں کو بھگانا"
    ],
    "correctAnswer": 1,
    "explanation": "جیوسپی مازینی، ایک پرجوش قوم پرست، نے 1831 میں 'ینگ اٹلی' کی بنیاد رکھی۔ اس کا مقصد غیر ملکی حکمرانی اور جزیرہ نما کی بکھری ہوئی بادشاہتوں کے خلاف عوامی بغاوت کو بھڑکا کر ایک متحد، آزاد اور جمہوری اٹلی کے نظریے کو فروغ دینا تھا۔"
  },
  {
    "id": 19,
    "question": "Which of the following statement best describes the concept of 'Socialism'? (TSTET 02 Jan 2025)\nمندرجہ ذیل میں سے کون سا بیان 'سوشلزم' کے تصور کو بہترین طریقے سے بیان کرتا ہے؟",
    "options": [
      "It calls for public and private ownership of Natural Resources\nیہ قدرتی وسائل کی عوامی اور نجی ملکیت کا مطالبہ کرتا ہے",
      "It insists upon the equal distribution of Land among all the people\nیہ تمام لوگوں کے درمیان زمین کی مساوی تقسیم پر اصرار کرتا ہے",
      "It calls for public ownership rather than private control of property and natural resources\nیہ جائیداد اور قدرتی وسائل پر نجی کنٹرول کے بجائے عوامی ملکیت کا مطالبہ کرتا ہے",
      "It calls for the private ownership of the means of Production\nیہ پیداوار کے ذرائع کی نجی ملکیت کا مطالبہ کرتا ہے"
    ],
    "correctAnswer": 2,
    "explanation": "سوشلزم کا بنیادی اصول پیداوار کے ذرائع (کارخانے، زمین، وسائل) کی اجتماعی یا عوامی ملکیت اور جمہوری کنٹرول ہے۔ یہ سرمایہ داری کے برعکس ہے، جو نجی ملکیت اور کنٹرول پر مبنی ہے۔"
  },
  {
    "id": 20,
    "question": "One among the following was not a member of 'Group of Ministers' formed in 2013 for the formation of Telangana? (TSTET 02 Jan 2025)\nمندرجہ ذیل میں سے ایک 2013 میں تلنگانہ کی تشکیل کے لیے بنائے گئے 'وزراء کے گروپ' کا رکن نہیں تھا؟",
    "options": [
      "Sushilkumar Shinde\nسشیل کمار شندے",
      "Rajnath Singh\nراج ناتھ سنگھ",
      "P. Chidambaram\nپی چدمبرم",
      "M. Veerappa Moily\nایم ویرپا موئلی"
    ],
    "correctAnswer": 1,
    "explanation": "وزراء کا گروپ (GoM) حکمران یو پی اے حکومت نے تشکیل دیا تھا۔ اس میں شندے، چدمبرم، اور موئلی جیسے سینئر وزراء شامل تھے۔ راج ناتھ سنگھ اس وقت اپوزیشن بی جے پی کے ایک سینئر رہنما تھے اور اس حکومت کی مقرر کردہ کمیٹی کا حصہ نہیں تھے۔"
  },
  {
    "id": 21,
    "question": "Among the following. identify the educational reform of Salar Jung (TSTET 02 Jan 2025)\nمندرجہ ذیل میں سے، سالار جنگ کی تعلیمی اصلاحات کی نشاندہی کریں۔",
    "options": [
      "To promote traditional Islamic education\nروایتی اسلامی تعلیم کو فروغ دینا",
      "To Introduce Western education system\nمغربی تعلیمی نظام متعارف کرانا",
      "To provide education to common people\nعام لوگوں کو تعلیم فراہم کرنا",
      "To establish military training schools\nفوجی تربیتی اسکول قائم کرنا"
    ],
    "correctAnswer": 1,
    "explanation": "حیدرآباد ریاست کے وزیر اعظم کے طور پر، سالار جنگ اول ایک کلیدی جدید ساز تھے۔ ان کی اصلاحات کا ایک بڑا حصہ مغربی تعلیم کا تعارف تھا، جس نے ایسے ادارے قائم کیے جو ایک موثر انتظامی طبقہ پیدا کرنے کے لیے انگریزی اور جدید مضامین پڑھاتے تھے۔"
  },
  {
    "id": 22,
    "question": "The first president of the All-India Muslim League was (TSTET 02 Jan 2025)\nآل انڈیا مسلم لیگ کے پہلے صدر تھے",
    "options": [
      "Agakhan\nآغا خان",
      "Mohammad Ali Jinnah\nمحمد علی جناح",
      "Nawab Khan\nنواب خان",
      "Liaquat Ali Khan\nلیاقت علی خان"
    ],
    "correctAnswer": 0,
    "explanation": "آل انڈیا مسلم لیگ کی بنیاد 1906 میں رکھی گئی تھی۔ اس کے پہلے صدر سر سلطان محمد شاہ، آغا خان سوم تھے، جو ایک ممتاز رہنما تھے اور انہوں نے برطانوی ہندوستان میں مسلمانوں کی ابتدائی سیاسی متحرک کاری میں اہم کردار ادا کیا۔"
  },
  {
    "id": 23,
    "question": "In this theory. Dadabhai Naoroji expounded how the vast amount of wealth was taken away from India by the British (TSTET 02 Jan 2025)\nاس نظریے میں، دادا بھائی نوروجی نے وضاحت کی کہ کس طرح انگریزوں نے ہندوستان سے بڑی مقدار میں دولت چھین لی",
    "options": [
      "Drain Theory\nڈرین تھیوری",
      "Demand Theory\nڈیمانڈ تھیوری",
      "Supply Theory\nسپلائی تھیوری",
      "Economic Growth Theory\nمعاشی ترقی کا نظریہ"
    ],
    "correctAnswer": 0,
    "explanation": "اپنی کتاب 'پاورٹی اینڈ ان-برٹش رول ان انڈیا' میں، دادا بھائی نوروجی نے 'ڈرین تھیوری' پیش کی۔ اس میں یہ دلیل دی گئی کہ برطانیہ استحصالی اقتصادی پالیسیوں، تنخواہوں اور پنشن کے ذریعے منظم طریقے سے ہندوستان سے دولت نکال رہا تھا، جس کی وجہ سے ہندوستان کی غربت میں اضافہ ہوا۔"
  },
  {
    "id": 24,
    "question": "The primary principle of establishing 'the Ramakrishna Mission' was (TSTET 02 Jan 2025)\n'رام کرشن مشن' کے قیام کا بنیادی اصول تھا",
    "options": [
      "Promoting political independence to India\nہندوستان کو سیاسی آزادی کا فروغ دینا",
      "Service to man is Service to God\nانسان کی خدمت خدا کی خدمت ہے",
      "to propagate Hinduism with the slogan 'Go back to Veda'\n'ویدوں کی طرف واپس جاؤ' کے نعرے کے ساتھ ہندو مت کی تبلیغ کرنا",
      "To undertake Religious conversions\nمذہبی تبدیلیاں کرنا"
    ],
    "correctAnswer": 1,
    "explanation": "سوامی وویکانند کے قائم کردہ رام کرشن مشن کا بنیادی نظریہ سری رام کرشن کی تعلیمات پر مبنی ہے، جس میں اس بات پر زور دیا گیا ہے کہ انسانیت کی خدمت خدا کی عبادت کا ایک طریقہ ہے۔ اس کا نصب العین 'آتمانو موکشارتم جگت ہتایا چا' ہے (اپنی نجات اور دنیا کی فلاح و بہبود کے لیے)۔"
  },
  {
    "id": 25,
    "question": "Queen Victoria's 'Proclamation' of 1858 aimed at (TSTET 02 Jan 2025)\nملکہ وکٹوریہ کے 1858 کے 'اعلان' کا مقصد تھا",
    "options": [
      "Establishment of railways in India\nہندوستان میں ریلوے کا قیام",
      "Establishment of schools for Indians\nہندوستانیوں کے لیے اسکولوں کا قیام",
      "The transition of power from East India Company rule to direct British rule\nایسٹ انڈیا کمپنی کی حکمرانی سے براہ راست برطانوی حکمرانی میں اقتدار کی منتقلی",
      "Promotion of agriculture and reducing taxes\nزراعت کو فروغ دینا اور ٹیکس کم کرنا"
    ],
    "correctAnswer": 2,
    "explanation": "1857 کی بغاوت کے بعد، برطانوی حکومت نے گورنمنٹ آف انڈیا ایکٹ 1858 منظور کیا۔ ملکہ وکٹوریہ کے اعلان نے باضابطہ طور پر ایسٹ انڈیا کمپنی کی حکمرانی کے خاتمے اور ہندوستان کی حکمرانی کو براہ راست برطانوی تاج کو منتقل کرنے کا اعلان کیا۔"
  },
  {
    "id": 26,
    "question": "Which of the following territory was primarily controlled by the French East India Company in India? (TSTET 02 Jan 2025)\nہندوستان میں مندرجہ ذیل میں سے کون سا علاقہ بنیادی طور پر فرانسیسی ایسٹ انڈیا کمپنی کے زیر کنٹرول تھا؟",
    "options": [
      "Goa\nگوا",
      "Bengal\nبنگال",
      "Pondicherry\nپانڈیچری",
      "Chinsura\nچنسورہ"
    ],
    "correctAnswer": 2,
    "explanation": "پانڈیچری (اب پڈوچیری) فرانسیسی ہندوستان کا دارالحکومت اور مرکزی بستی تھی۔ اگرچہ ان کی دیگر تجارتی چوکیاں تھیں، پانڈیچری نے فرانسیسی ایسٹ انڈیا کمپنی کے انتظامی ہیڈکوارٹر کے طور پر کام کیا۔"
  },
  {
    "id": 27,
    "question": "The purpose of the Preamble of the Indian Constitution is (TSTET 02 Jan 2025)\nہندوستانی آئین کے دیباچے کا مقصد ہے",
    "options": [
      "To outline the structure of the Government\nحکومت کی ساخت کا خاکہ پیش کرنا",
      "To state the objectives of the constitution\nآئین کے مقاصد بیان کرنا",
      "To list out the fundamental Rights of the citizen\nشہری کے بنیادی حقوق کی فہرست بنانا",
      "To declare India as a welfare state\nہندوستان کو ایک فلاحی ریاست قرار دینا"
    ],
    "correctAnswer": 1,
    "explanation": "دیباچہ ایک تعارف کے طور پر کام کرتا ہے اور آئین کے فلسفے اور بنیادی اقدار کا اظہار کرتا ہے۔ یہ بنیادی مقاصد کو بیان کرتا ہے: تمام شہریوں کے لیے انصاف، آزادی، مساوات اور بھائی چارے کو یقینی بنانا، اور ہندوستان کو ایک خود مختار، سوشلسٹ، سیکولر، اور جمہوری جمہوریہ قرار دیتا ہے۔"
  },
  {
    "id": 28,
    "question": "The principles 'Liberty, Equality and Fraternity' were adapted by the Indian Constitution from the constitution of this country (TSTET 02 Jan 2025)\n'آزادی، مساوات اور بھائی چارے' کے اصول ہندوستانی آئین نے اس ملک کے آئین سے اپنائے تھے",
    "options": [
      "France\nفرانس",
      "England\nانگلینڈ",
      "Ireland\nآئرلینڈ",
      "United States of America\nریاستہائے متحدہ امریکہ"
    ],
    "correctAnswer": 0,
    "explanation": "آزادی، مساوات، اور بھائی چارے کے نظریات، جو ہندوستانی آئین کے دیباچے میں درج ہیں، فرانسیسی انقلاب (1789-1799) سے لیے گئے تھے، جس کا نعرہ 'آزادی، مساوات، بھائی چارہ' تھا۔"
  },
  {
    "id": 29,
    "question": "In India, the Union Council of Ministers is responsible only to the (TSTET 02 Jan 2025)\nہندوستان میں، مرکزی وزراء کی کونسل صرف اس کے لیے ذمہ دار ہے",
    "options": [
      "Lok Sabha and Rajya Sabha\nلوک سبھا اور راجیہ سبھا",
      "Lok Sabha\nلوک سبھا",
      "Rajya Sabha\nراجیہ سبھا",
      "Lok Sabha, Rajya Sabha and State Legislative Assemblies of all States and Union Territories\nلوک سبھا، راجیہ سبھا اور تمام ریاستوں اور مرکز کے زیر انتظام علاقوں کی ریاستی قانون ساز اسمبلیاں"
    ],
    "correctAnswer": 1,
    "explanation": "ہندوستان کے آئین کا آرٹیکل 75(3) واضح طور پر کہتا ہے کہ 'وزراء کی کونسل اجتماعی طور پر ایوانِ عوام (لوک سبھا) کے سامنے جوابدہ ہوگی'۔ اجتماعی ذمہ داری کا یہ اصول ہندوستان میں پارلیمانی جمہوریت کی بنیاد ہے۔"
  },
  {
    "id": 30,
    "question": "Study the given statements and choose the correct statements. A) The chief administrative organ of the United Nations Organisation is the Secretariat. B) The Secretariat is headed by the Secretary General who is appointed for a term of five years by the General Assembly on the recommendations of the Security Council. C) The main function of the Secretariat is to execute the decisions of the main organs and the specialised agencies of the United Nations Organisation. (TSTET 02 Jan 2025)\nدیے گئے بیانات کا مطالعہ کریں اور درست بیانات کا انتخاب کریں۔ A) اقوام متحدہ کی تنظیم کا چیف انتظامی ادارہ سیکرٹریٹ ہے۔ B) سیکرٹریٹ کی سربراہی سیکرٹری جنرل کرتا ہے جسے سلامتی کونسل کی سفارشات پر جنرل اسمبلی پانچ سال کی مدت کے لیے مقرر کرتی ہے۔ C) سیکرٹریٹ کا بنیادی کام اقوام متحدہ کی تنظیم کے اہم اعضاء اور خصوصی ایجنسیوں کے فیصلوں پر عمل درآمد کرنا ہے۔",
    "options": [
      "A, B & C\nA، B اور C",
      "B & C only\nصرف B اور C",
      "A & C only\nصرف A اور C",
      "A & B only\nصرف A اور B"
    ],
    "correctAnswer": 0,
    "explanation": "تینوں بیانات درست ہیں۔ سیکرٹریٹ اقوام متحدہ کا انتظامی بازو ہے (A)، جس کی سربراہی سیکرٹری جنرل کرتا ہے جسے سلامتی کونسل اور جنرل اسمبلی پر مشتمل ایک مخصوص عمل کے ذریعے پانچ سال کی مدت کے لیے مقرر کیا جاتا ہے (B)۔ اس کا بنیادی کام اقوام متحدہ کے دیگر اہم اعضاء کے فیصلوں اور مینڈیٹ کو نافذ کرنا ہے (C)۔"
  },
  {
    "id": 31,
    "question": "The Directive Principles of the Indian Constitution Contain A) the goals and objectives that we as a society should adopt B) certain rights that individuals should enjoy apart from the Fundamental Rights C) certain policies that the government should adopt (TSTET 02 Jan 2025)\nہندوستانی آئین کے رہنما اصولوں میں شامل ہیں A) وہ اہداف اور مقاصد جو ہمیں بحیثیت معاشرہ اپنانے چاہئیں B) کچھ حقوق جن سے افراد کو بنیادی حقوق کے علاوہ لطف اندوز ہونا چاہئے C) کچھ پالیسیاں جو حکومت کو اپنانی چاہئیں",
    "options": [
      "A & B only\nصرف A اور B",
      "A only\nصرف A",
      "A, B & C\nA، B اور C",
      "B & C only\nصرف B اور C"
    ],
    "correctAnswer": 2,
    "explanation": "ریاستی پالیسی کے رہنما اصول (DPSP) رہنما خطوط کا ایک جامع مجموعہ ہیں۔ ان میں طویل مدتی سماجی اہداف (A)، افراد کے لیے غیر قابلِ نفاذ حقوق (B)، اور حکومت کے لیے ایک منصفانہ اور فلاحی ریاست بنانے کے لیے عمل کرنے کی مخصوص پالیسیاں (C) شامل ہیں۔"
  },
  {
    "id": 32,
    "question": "Who is responsible for deciding any disputes or doubts that arise during the election process of the President of India? (TSTET 02 Jan 2025)\nہندوستان کے صدر کے انتخابی عمل کے دوران پیدا ہونے والے کسی بھی تنازعہ یا شک کا فیصلہ کرنے کا ذمہ دار کون ہے؟",
    "options": [
      "The Union Council of Ministers\nمرکزی وزراء کی کونسل",
      "The Election Commission of India\nالیکشن کمیشن آف انڈیا",
      "The Supreme Court of India\nسپریم کورٹ آف انڈیا",
      "The Cabinet sub-committee\nکابینہ کی ذیلی کمیٹی"
    ],
    "correctAnswer": 2,
    "explanation": "آئین کے آرٹیکل 71(1) کے مطابق، صدر یا نائب صدر کے انتخاب کے سلسلے میں پیدا ہونے والے تمام شکوک و شبہات اور تنازعات کی تحقیقات اور فیصلہ سپریم کورٹ آف انڈیا کرتا ہے، اور اس کا فیصلہ حتمی ہوتا ہے۔ فراہم کردہ اختیارات غلط ہیں؛ میں نے آئینی دفعات کی بنیاد پر آپشن کو درست کیا ہے۔"
  },
  {
    "id": 33,
    "question": "Among the following, the states having bicameral legislatures (State Legislative Assembly and State Legislative Council) are (TSTET 02 Jan 2025)\nمندرجہ ذیل میں سے، دو ایوانی مقننہ (ریاستی قانون ساز اسمبلی اور ریاستی قانون ساز کونسل) رکھنے والی ریاستیں ہیں",
    "options": [
      "Madhya Pradesh, Telangana, Andhra Pradesh, Tamil Nadu\nمدھیہ پردیش، تلنگانہ، آندھرا پردیش، تمل ناڈو",
      "Uttar Pradesh, Telangana, Andhra Pradesh, Bihar\nاتر پردیش، تلنگانہ، آندھرا پردیش، بہار",
      "Tamil Nadu, Telangana, Andhra Pradesh, Chattisgarh\nتمل ناڈو، تلنگانہ، آندھرا پردیش، چھتیس گڑھ",
      "Rajasthan, Telangana, Andhra Pradesh, Gujarat\nراجستھان، تلنگانہ، آندھرا پردیش، گجرات"
    ],
    "correctAnswer": 1,
    "explanation": "2024 تک، چھ ہندوستانی ریاستوں میں دو ایوانی مقننہ (دو ایوان) ہیں: آندھرا پردیش، بہار، کرناٹک، مہاراشٹر، تلنگانہ، اور اتر پردیش۔ آپشن 2 میں دیا گیا گروپ ان ریاستوں میں سے چار کی صحیح فہرست دیتا ہے۔"
  },
  {
    "id": 34,
    "question": "Judges of the Supreme Court can be removed by the President from their position only on the ground of (TSTET 02 Jan 2025)\nسپریم کورٹ کے ججوں کو صدر ان کے عہدے سے صرف اس بنیاد پر ہٹا سکتا ہے",
    "options": [
      "Proved misbehaviour or incapacity\nثابت شدہ بدسلوکی یا نااہلی",
      "Showing discrimination in the workplace\nکام کی جگہ پر امتیازی سلوک دکھانا",
      "Improper interpretation of the Indian constitution\nہندوستانی آئین کی غلط تشریح",
      "Making unnecessary financial allegations against the government\nحکومت کے خلاف غیر ضروری مالی الزامات لگانا"
    ],
    "correctAnswer": 0,
    "explanation": "آئین کے آرٹیکل 124(4) کے مطابق، سپریم کورٹ کے جج کو صرف صدر کے حکم سے ہٹایا جا سکتا ہے، جو پارلیمنٹ کے ایک خطاب کے بعد منظور کیا جاتا ہے، جس کی حمایت ہر ایوان کی خصوصی اکثریت سے ہوتی ہے، ثابت شدہ بدسلوکی یا نااہلی کی بنیاد پر۔"
  },
  {
    "id": 35,
    "question": "One among the following is NOT a Child Right as per UNO's Charter on Child Rights, 1989 (TSTET 02 Jan 2025)\nمندرجہ ذیل میں سے ایک اقوام متحدہ کے 1989 کے بچوں کے حقوق کے چارٹر کے مطابق بچوں کا حق نہیں ہے",
    "options": [
      "Right to use English as a medium of Instruction in all schools compulsorily\nتمام اسکولوں میں لازمی طور پر انگریزی کو ذریعہ تعلیم کے طور پر استعمال کرنے کا حق",
      "Right to have good health and get medical care\nاچھی صحت اور طبی دیکھ بھال حاصل کرنے کا حق",
      "Right to get help when neglected and suffering\nنظر انداز کیے جانے اور تکلیف میں مبتلا ہونے پر مدد حاصل کرنے کا حق",
      "Right to get protection from harmful medicines\nنقصان دہ ادویات سے تحفظ حاصل کرنے کا حق"
    ],
    "correctAnswer": 0,
    "explanation": "بچوں کے حقوق پر اقوام متحدہ کا کنونشن صحت اور تحفظ سمیت وسیع پیمانے پر حقوق کی وکالت کرتا ہے۔ یہ کسی مخصوص زبان کی تعلیم کو لازمی قرار نہیں دیتا؛ بلکہ، یہ ثقافتی شناخت کو فروغ دینے کے لیے جہاں ممکن ہو بچے کی اپنی زبان میں تعلیم کی حوصلہ افزائی کرتا ہے۔"
  },
  {
    "id": 36,
    "question": "Identify the true statement regarding 'the demand deposit' (TSTET 02 Jan 2025)\n'ڈیمانڈ ڈپازٹ' کے بارے میں درست بیان کی نشاندہی کریں",
    "options": [
      "A type of investment account with high returns\nاعلی منافع کے ساتھ ایک قسم کا سرمایہ کاری اکاؤنٹ",
      "A deposit that is only accessible through a bank's ATM\nایک ڈپازٹ جو صرف بینک کے اے ٹی ایم کے ذریعے قابل رسائی ہے",
      "A deposit that can be withdrawn on demand\nایک ڈپازٹ جسے مطالبہ پر نکالا جا سکتا ہے",
      "A long-term savings account with penalties for early withdrawal\nقبل از وقت نکالنے پر جرمانے کے ساتھ ایک طویل مدتی بچت اکاؤنٹ"
    ],
    "correctAnswer": 2,
    "explanation": "ڈیمانڈ ڈپازٹ ایک قسم کا بینک اکاؤنٹ ہے، جیسے کہ چیکنگ یا سیونگ اکاؤنٹ، جس سے کسی بھی وقت ('مطالبہ پر') بینک کو پیشگی اطلاع دیے بغیر فنڈز نکالے جا سکتے ہیں۔ یہ بہت مائع ہوتے ہیں۔"
  },
  {
    "id": 37,
    "question": "From the following statements, identify the true statement regarding the role of Reserve Bank of India in the banking system (TSTET 02 Jan 2025)\nمندرجہ ذیل بیانات سے، بینکنگ نظام میں ریزرو بینک آف انڈیا کے کردار کے بارے میں درست بیان کی نشاندہی کریں",
    "options": [
      "It supervises the banking system and issues guidelines\nیہ بینکنگ نظام کی نگرانی کرتا ہے اور رہنما خطوط جاری کرتا ہے",
      "It issues currency notes and coins directly to the public\nیہ براہ راست عوام کو کرنسی نوٹ اور سکے جاری کرتا ہے",
      "It provides loans to individual customers\nیہ انفرادی صارفین کو قرض فراہم کرتا ہے",
      "It manages the investments of private banks\nیہ نجی بینکوں کی سرمایہ کاری کا انتظام کرتا ہے"
    ],
    "correctAnswer": 0,
    "explanation": "ریزرو بینک آف انڈیا (آر بی آئی) ملک کا مرکزی بینک اور ریگولیٹری ادارہ ہے۔ ایک بنیادی کام تجارتی بینکوں اور مالیاتی اداروں کے کام کی نگرانی کرنا، بینکنگ نظام میں استحکام اور عوامی اعتماد کو یقینی بنانے کے لیے رہنما خطوط مرتب کرنا ہے۔"
  },
  {
    "id": 38,
    "question": "One of the following is NOT taken into consideration to measure Wholesale Price Index (WPI) (TSTET 02 Jan 2025)\nتھوک قیمتوں کے اشاریے (WPI) کی پیمائش کے لیے مندرجہ ذیل میں سے ایک کو مدنظر نہیں رکھا جاتا ہے",
    "options": [
      "All capital goods\nتمام سرمایے کا سامان",
      "All consumer goods\nتمام صارفی سامان",
      "a few selected consumer goods at the retail price\nخوردہ قیمت پر چند منتخب صارفی سامان",
      "All capital goods and consumer goods and changes in their wholesale rates\nتمام سرمایے کا سامان اور صارفی سامان اور ان کی تھوک شرحوں میں تبدیلیاں"
    ],
    "correctAnswer": 2,
    "explanation": "تھوک قیمتوں کا اشاریہ (WPI) کاروباروں کے درمیان تجارت کی جانے والی اشیاء کی سطح پر افراط زر کی پیمائش کرتا ہے، یعنی تھوک کے مرحلے پر۔ اس میں خدمات کی قیمتیں یا صارفین کی طرف سے ادا کی جانے والی حتمی خوردہ قیمتیں شامل نہیں ہیں، جنہیں صارفی قیمتوں کے اشاریے (CPI) میں شامل کیا جاتا ہے۔"
  },
  {
    "id": 39,
    "question": "This was introduced by the Indian government in 2009 to track food inflation trends (TSTET 02 Jan 2025)\nیہ 2009 میں ہندوستانی حکومت نے خوراک کی مہنگائی کے رجحانات کو ٹریک کرنے کے لیے متعارف کرایا تھا",
    "options": [
      "Agricultural Price Index (API)\nزرعی قیمت کا اشاریہ (API)",
      "Wholesale Price Index (WPI)\nتھوک قیمت کا اشاریہ (WPI)",
      "Food Price Index (FPI)\nخوراک کی قیمت کا اشاریہ (FPI)",
      "Consumer Price Index (CPI)\nصارفین کی قیمت کا اشاریہ (CPI)"
    ],
    "correctAnswer": 2,
    "explanation": "خوراک کی اشیاء کی قیمتوں میں تیز اتار چڑھاؤ کی خاص طور پر نگرانی کرنے کے لیے، حکومت نے ایک علیحدہ فوڈ پرائس انڈیکس (FPI) متعارف کرایا۔ یہ خوراک کی مہنگائی کو قریب سے ٹریک کرنے اور بروقت پالیسی مداخلتوں کو مرتب کرنے میں مدد کرتا ہے۔"
  },
  {
    "id": 40,
    "question": "According to the United Nations Development Programme, these people have migrated to countries such as USA, Canada, UK and other developed countries from India (TSTET 02 Jan 2025)\nاقوام متحدہ کے ترقیاتی پروگرام کے مطابق، یہ لوگ ہندوستان سے امریکہ، کینیڈا، برطانیہ اور دیگر ترقی یافتہ ممالک میں ہجرت کر چکے ہیں",
    "options": [
      "Unskilled workers\nغیر ہنر مند کارکن",
      "People with Technical skills and professional expertise\nتکنیکی مہارت اور پیشہ ورانہ مہارت رکھنے والے لوگ",
      "Semi-skilled workers\nنیم ہنر مند کارکن",
      "People in teaching profession\nتدریسی پیشے سے وابستہ لوگ"
    ],
    "correctAnswer": 1,
    "explanation": "ہندوستان سے ترقی یافتہ مغربی ممالک کی طرف ہجرت کی خصوصیت اعلیٰ ہنر مند پیشہ ور افراد کی نقل و حرکت ہے، جن میں ڈاکٹر، انجینئر، سائنسدان، اور آئی ٹی ماہرین شامل ہیں۔ اس رجحان کو اکثر 'برین ڈرین' کہا جاتا ہے۔"
  },
  {
    "id": 41,
    "question": "The primary objective of the PM Jan Dhan Yojana is (TSTET 02 Jan 2025)\nپی ایم جن دھن یوجنا کا بنیادی مقصد ہے",
    "options": [
      "To ensure every household has access to luxury goods\nیہ یقینی بنانا کہ ہر گھرانے کو پرتعیش اشیاء تک رسائی حاصل ہو",
      "To promote foreign investment in India\nبھارت میں غیر ملکی سرمایہ کاری کو فروغ دینا",
      "To increase the number of ATMs in urban areas\nشہری علاقوں میں اے ٹی ایم کی تعداد میں اضافہ کرنا",
      "To achieve financial inclusion for poor households\nغریب گھرانوں کے لیے مالی شمولیت حاصل کرنا"
    ],
    "correctAnswer": 3,
    "explanation": "پردھان منتری جن دھن یوجنا (PMJDY) مالی شمولیت پر ایک قومی مشن ہے۔ اس کا بنیادی مقصد یہ یقینی بنانا ہے کہ تمام گھرانوں، خاص طور پر کم آمدنی والے گروپوں کو، بنیادی مالی خدمات جیسے بینک اکاؤنٹس، قرض، انشورنس، اور پنشن تک رسائی حاصل ہو۔"
  },
  {
    "id": 42,
    "question": "Among the following, identify the correct statement regarding 'Solar Insolation' in the month of March (TSTET 02 Jan 2025)\nمارچ کے مہینے میں 'سولر انسولیشن' کے حوالے سے مندرجہ ذیل میں سے صحیح بیان کی نشاندہی کریں",
    "options": [
      "The amount of Solar Insolation increases from the equator towards the poles\nسولر انسولیشن کی مقدار خط استوا سے قطبین کی طرف بڑھتی ہے",
      "The amount of Solar Insolation decreases from the equator towards the poles\nسولر انسولیشن کی مقدار خط استوا سے قطبین کی طرف کم ہوتی ہے",
      "The amount of solar Insolation remains the same throughout the globe\nسولر انسولیشن کی مقدار پوری دنیا میں یکساں رہتی ہے",
      "The amount of Solar Insolation is highest at the poles and the lowest at the tropic of Cancer\nسولر انسولیشن کی مقدار قطبین پر سب سے زیادہ اور خط سرطان پر سب سے کم ہوتی ہے"
    ],
    "correctAnswer": 1,
    "explanation": "زمین کی کروی شکل کی وجہ سے، سورج کی شعاعیں خط استوا پر سب سے زیادہ براہ راست پڑتی ہیں اور قطبین کی طرف ترچھی ہوتی جاتی ہیں۔ اس کی وجہ سے فی یونٹ رقبہ شمسی توانائی کی مقدار (انسولیشن) خط استوا کے قریب سب سے زیادہ ہوتی ہے اور قطبین کی طرف بتدریج کم ہوتی جاتی ہے۔ یہ عمومی نمونہ مارچ میں بھی درست رہتا ہے۔"
  },
  {
    "id": 43,
    "question": "Which of the following is NOT the violation of Fundamental Right? (TSTET 02 Jan 2025)\nمندرجہ ذیل میں سے کون سا بنیادی حق کی خلاف ورزی نہیں ہے؟",
    "options": [
      "Employing the child below the age of 14 years in the factory\n14 سال سے کم عمر کے بچے کو فیکٹری میں ملازم رکھنا",
      "Arresting the person and not informing the grounds for his arrest\nشخص کو گرفتار کرنا اور اس کی گرفتاری کی وجوہات نہ بتانا",
      "Restricting the person to reside and settle in any part of the territory of India\nشخص کو ہندوستان کے کسی بھی حصے میں رہنے اور بسنے سے روکنا",
      "Allowing the citizens to express their views in many ways such as through meetings, publications etc.\nشہریوں کو جلسوں، اشاعتوں وغیرہ جیسے کئی طریقوں سے اپنے خیالات کا اظہار کرنے کی اجازت دینا"
    ],
    "correctAnswer": 3,
    "explanation": "شہریوں کو اپنے خیالات کا اظہار کرنے کی اجازت دینا بنیادی حقِ آزادیٔ تقریر و اظہار (آرٹیکل 19) کا استعمال ہے۔ دیگر تین آپشنز بنیادی حقوق کی خلاف ورزیوں کی نمائندگی کرتے ہیں: استحصال کے خلاف حق (آرٹیکل 24)، آزادی اور ذاتی آزادی کا حق (آرٹیکل 22)، اور نقل و حرکت کی آزادی کا حق (آرٹیکل 19)۔"
  },
  {
    "id": 44,
    "question": "Among the following, identify the true statement regarding the service sector (TSTET 02 Jan 2025)\nمندرجہ ذیل میں سے، خدمت کے شعبے (service sector) کے بارے میں صحیح بیان کی نشاندہی کریں",
    "options": [
      "It only includes jobs that produce tangible goods\nاس میں صرف ایسی ملازمتیں شامل ہیں جو ٹھوس اشیاء پیدا کرتی ہیں",
      "It does not include professionals like doctors and teachers\nاس میں ڈاکٹروں اور اساتذہ جیسے پیشہ ور افراد شامل نہیں ہیں",
      "It contributes to GDP through the income earned by its constituents\nیہ اپنے اجزاء کی کمائی ہوئی آمدنی کے ذریعے جی ڈی پی میں حصہ ڈالتا ہے",
      "It is the primary sector of the economy\nیہ معیشت کا بنیادی شعبہ ہے"
    ],
    "correctAnswer": 2,
    "explanation": "خدمت کا شعبہ (یا تیسرا شعبہ) ایسی صنعتوں پر مشتمل ہے جو ٹھوس اشیاء کے بجائے خدمات فراہم کرتی ہیں۔ ان تمام خدمات سے حاصل ہونے والی آمدنی — بینکنگ اور آئی ٹی سے لے کر صحت اور تعلیم تک — کسی ملک کی مجموعی گھریلو پیداوار (جی ڈی پی) میں ایک بڑا حصہ ڈالتی ہے۔"
  },
  {
    "id": 45,
    "question": "This trend has been observed in developed countries over the past 50 years (TSTET 02 Jan 2025)\nگزشتہ 50 سالوں میں ترقی یافتہ ممالک میں یہ رجحان دیکھا گیا ہے",
    "options": [
      "A shift from industry to agriculture\nصنعت سے زراعت کی طرف منتقلی",
      "A shift from industry to the service sector\nصنعت سے خدمت کے شعبے کی طرف منتقلی",
      "No significant changes were observed\nکوئی خاص تبدیلیاں نہیں دیکھی گئیں",
      "A shift from the service sector to agriculture\nخدمت کے شعبے سے زراعت کی طرف منتقلی"
    ],
    "correctAnswer": 1,
    "explanation": "گزشتہ چند دہائیوں کے دوران، ترقی یافتہ ممالک کی معیشتوں میں ایک ساختی تبدیلی آئی ہے۔ مینوفیکچرنگ/صنعتی شعبے کی نسبتی اہمیت میں کمی آئی ہے، جبکہ خدمت کا شعبہ (فنانس، صحت، آئی ٹی، وغیرہ) جی ڈی پی اور روزگار میں سب سے بڑا حصہ دار بن کر ابھرا ہے۔"
  },
  {
    "id": 46,
    "question": "Among the following, identify the Important feature of GST in India (TSTET 02 Jan 2025)\nمندرجہ ذیل میں سے، ہندوستان میں جی ایس ٹی کی اہم خصوصیت کی نشاندہی کریں",
    "options": [
      "One tax for the whole country\nپورے ملک کے لیے ایک ٹیکس",
      "Rate of taxation is same to all the products\nتمام مصنوعات پر ٹیکس کی شرح یکساں ہے",
      "Tax rates would differ across states\nریاستوں میں ٹیکس کی شرحیں مختلف ہوں گی",
      "All the goods are included in GST\nتمام اشیاء جی ایس ٹی میں شامل ہیں"
    ],
    "correctAnswer": 0,
    "explanation": "ہندوستان میں گڈز اینڈ سروسز ٹیکس (جی ایس ٹی) کا بنیادی تصور 'ایک قوم، ایک ٹیکس' ہے۔ اس نے متعدد مرکزی اور ریاستی ٹیکسوں کو ایک واحد، متحد ٹیکس ڈھانچے سے بدل دیا جو پورے ملک میں لاگو ہوتا ہے، جس سے ایک مشترکہ قومی بازار پیدا ہوا۔"
  },
  {
    "id": 47,
    "question": "The primary focus of this UN Declaration is on 'Gender Equality and Empowerment of Women' is (TSTET 02 Jan 2025)\nاقوام متحدہ کے اس اعلامیے کی بنیادی توجہ 'صنفی مساوات اور خواتین کو بااختیار بنانے' پر ہے",
    "options": [
      "The UN Declaration on Social Progress and Development, 1969\nسماجی ترقی اور فروغ پر اقوام متحدہ کا اعلامیہ، 1969",
      "Kyoto Protocol in Japan. 1997\nکیوٹو پروٹوکول، جاپان۔ 1997",
      "The Beijing Declaration and Programme of Action. 1995\nبیجنگ اعلامیہ اور پروگرام آف ایکشن۔ 1995",
      "The IPCC 2015 Paris Summit\nآئی پی سی سی 2015 پیرس سمٹ"
    ],
    "correctAnswer": 2,
    "explanation": "بیجنگ اعلامیہ اور پلیٹ فارم فار ایکشن، جو 1995 میں بیجنگ میں خواتین پر چوتھی عالمی کانفرنس میں اپنایا گیا، دنیا بھر میں خواتین کے حقوق اور صنفی مساوات کو آگے بڑھانے کے لیے ایک تاریخی دستاویز ہے۔ یہ 12 تشویشناک شعبوں میں اسٹریٹجک مقاصد کا خاکہ پیش کرتا ہے۔"
  },
  {
    "id": 48,
    "question": "During winter in India, the cyclonic depressions coming from this sea called the Western Disturbances cause low to moderate rainfall over North India (TSTET 02 Jan 2025)\nہندوستان میں موسم سرما کے دوران، اس سمندر سے آنے والے طوفانی دباؤ جنہیں مغربی ہوائیں کہا جاتا ہے، شمالی ہندوستان میں کم سے اعتدال پسند بارش کا سبب بنتے ہیں",
    "options": [
      "Caspian Sea\nبحیرہ کیسپین",
      "Arabian Sea\nبحیرہ عرب",
      "Bay of Bengal\nخلیج بنگال",
      "Mediterranean Sea\nبحیرہ روم"
    ],
    "correctAnswer": 3,
    "explanation": "مغربی ہوائیں غیر منطقہ حارہ کے طوفان ہیں جو بحیرہ روم کے اوپر پیدا ہوتے ہیں۔ انہیں ذیلی منطقہ حارہ کی مغربی جیٹ اسٹریمز مشرق کی طرف لے جاتی ہیں اور موسم سرما کے مہینوں میں شمال مغربی ہندوستان میں اہم غیر مانسونی بارش (بارش اور برف) لاتی ہیں۔"
  },
  {
    "id": 49,
    "question": "Choose the correct pairs among the following related to contributions of social scientists. A) Max weber Politics as a vocation B) Karl Marx - Socialist manifesto C) Amartya Sen - Economic and Social Justice (TSTET 02 Jan 2025)\nسماجی سائنسدانوں کی خدمات سے متعلق مندرجہ ذیل میں سے صحیح جوڑوں کا انتخاب کریں۔ A) میکس ویبر - سیاست بطور پیشہ B) کارل مارکس - سوشلسٹ مینی فیسٹو C) امرتیہ سین - معاشی اور سماجی انصاف",
    "options": [
      "A, B & C",
      "A & B only\nصرف A اور B",
      "A & C only\nصرف A اور C",
      "B & C only\nصرف B اور C"
    ],
    "correctAnswer": 2,
    "explanation": "A صحیح ہے ('سیاست بطور پیشہ' ویبر کا ایک مشہور مضمون ہے)۔ C صحیح ہے (امرتیہ سین سماجی انصاف اور فلاحی معاشیات پر اپنے کام کے لیے مشہور ہیں)۔ B غلط ہے؛ کارل مارکس نے 'کمیونسٹ مینی فیسٹو' مشترکہ طور پر لکھا تھا، نہ کہ 'سوشلسٹ مینی فیسٹو'۔"
  },
  {
    "id": 50,
    "question": "The computation involving the amount of production of essential food commodities, their purchase and sales etc., reveals the co-relation between these two subjects (TSTET 02 Jan 2025)\nضروری غذائی اجناس کی پیداوار کی مقدار، ان کی خرید و فروخت وغیرہ پر مشتمل حساب کتاب ان دو مضامین کے درمیان باہمی تعلق کو ظاہر کرتا ہے",
    "options": [
      "Civics and Physical Science\nشہریات اور طبعی سائنس",
      "Economics and mathematics\nاقتصادیات اور ریاضی",
      "History and life science\nتاریخ اور حیاتیاتی سائنس",
      "Geography and Arts\nجغرافیہ اور فنون"
    ],
    "correctAnswer": 1,
    "explanation": "اقتصادیات پیداوار، کھپت، خرید و فروخت کے اصولوں سے متعلق ہے۔ ریاضی ان اقتصادی سرگرمیوں کے حساب کتاب، ڈیٹا کے تجزیے، ماڈلنگ، اور مقدار کی پیمائش کے لیے اوزار فراہم کرتا ہے، جو ایک مضبوط باہمی تعلق کو ظاہر کرتا ہے۔"
  },
  {
    "id": 51,
    "question": "Identify the correct statement relating to Objectives and Aims among the following (TSTET 02 Jan 2025)\nمندرجہ ذیل میں سے مقاصد (Objectives) اور اہداف (Aims) سے متعلق صحیح بیان کی نشاندہی کریں",
    "options": [
      "Both are achievable in long term\nدونوں طویل مدت میں قابل حصول ہیں",
      "Both are achievable in short term\nدونوں قلیل مدت میں قابل حصول ہیں",
      "Objectives are achievable in long term and aims are achievable in short term\nمقاصد طویل مدت میں اور اہداف قلیل مدت میں قابل حصول ہیں",
      "Objectives are achievable in short term and aims are achievable in long term\nمقاصد قلیل مدت میں اور اہداف طویل مدت میں قابل حصول ہیں"
    ],
    "correctAnswer": 3,
    "explanation": "تعلیمی اصطلاحات میں، 'ہدف' (Aim) نیت کا ایک وسیع، طویل مدتی بیان ہے۔ ایک 'مقصد' (Objective) ایک مخصوص، قابل پیمائش، قلیل مدتی ہدف ہے جو وسیع تر ہدف کو حاصل کرنے میں معاون ہوتا ہے۔ لہذا، مقاصد قلیل مدتی ہوتے ہیں، اور اہداف طویل مدتی ہوتے ہیں۔"
  },
  {
    "id": 52,
    "question": "The active verb Tabulate' is an example of remembering category in cognitive process dimension comes at this level of knowledge dimension (TSTET 02 Jan 2025)\nفعال فعل 'جدول بنانا' (Tabulate) علمی عمل کے زمرے میں یاد رکھنے کی ایک مثال ہے جو علم کے اس درجے پر آتی ہے",
    "options": [
      "Procedural knowledge\nطریقہ کار کا علم",
      "Factual knowledge\nحقائق پر مبنی علم",
      "Conceptual knowledge\nتصوراتی علم",
      "Metacognitive knowledge\nماورائے ادراک علم"
    ],
    "correctAnswer": 1,
    "explanation": "نظر ثانی شدہ بلوم کی درجہ بندی کے مطابق، 'جدول بنانا' 'یاد رکھنے' کے علمی عمل میں آتا ہے۔ اس میں مخصوص معلومات یا ڈیٹا (حقائق) کو ایک جدول کی شکل میں ترتیب دینا اور پیش کرنا شامل ہے، جو 'حقائق پر مبنی علم' کے زمرے سے مطابقت رکھتا ہے۔"
  },
  {
    "id": 53,
    "question": "'Collect the pictures of leaders of Telangana Armed Struggle' is an activity aimed at achievement of this academic standard. (TSTET 02 Jan 2025)\n'تلنگانہ مسلح جدوجہد کے رہنماؤں کی تصاویر جمع کریں' یہ سرگرمی اس تعلیمی معیار کے حصول کے لیے ہے",
    "options": [
      "Conceptual understanding\nتصوراتی تفہیم",
      "Information gathering Skills\nمعلومات اکٹھا کرنے کی مہارت",
      "Mapping Skills\nنقشہ سازی کی مہارت",
      "Appreciation and sensitivity\nقدردانی اور حساسیت"
    ],
    "correctAnswer": 1,
    "explanation": "اس سرگرمی کے لیے طلباء کو مختلف ذرائع سے مخصوص ڈیٹا (تصاویر) تلاش کرنے، شناخت کرنے، منتخب کرنے اور جمع کرنے کی ضرورت ہوتی ہے۔ یہ براہ راست معلومات جمع کرنے اور تنظیمی مہارتوں کی ترقی اور مشق کو ہدف بناتی ہے۔"
  },
  {
    "id": 54,
    "question": "National Curriculum Framework (NCF) 2005 focussed on the following elements regarding construction of social science curriculum. A) Content Load B) Global Content C) Normative duties D) Inter relationship among disciplines (TSTET 02 Jan 2025)\nقومی نصابی ڈھانچہ (NCF) 2005 نے سماجی سائنس کے نصاب کی تشکیل کے حوالے سے مندرجہ ذیل عناصر پر توجہ مرکوز کی۔ A) مواد کا بوجھ B) عالمی مواد C) معیاری فرائض D) مضامین کے درمیان باہمی تعلق",
    "options": [
      "A, B, C & D",
      "A, B & C only\nصرف A, B اور C",
      "A, C & D only\nصرف A, C اور D",
      "B, C & D only\nصرف B, C اور D"
    ],
    "correctAnswer": 0,
    "explanation": "NCF 2005 نے سماجی علوم کے لیے ایک جامع نقطہ نظر کی سفارش کی، جس میں زور دیا گیا: مواد کا بوجھ کم کرنا (A)، عالمی تناظر کو شامل کرنا (B)، انصاف اور مساوات جیسے معیاری مسائل پر تنقیدی سوچ کو فروغ دینا (C)، اور بین الضابطہ روابط کی حوصلہ افزائی کرنا (D)۔"
  },
  {
    "id": 55,
    "question": "A teacher appointed shall maintain regularity and punctuality in attending school' it is mentioned in this section of Right to Education Act (RTE) - 2009 (TSTET 02 Jan 2025)\n'ایک مقرر کردہ استاد اسکول میں حاضری میں باقاعدگی اور وقت کی پابندی کو برقرار رکھے گا' یہ حق تعلیم ایکٹ (RTE) - 2009 کی اس دفعہ میں ذکر کیا گیا ہے",
    "options": [
      "Section - 22(1)\nدفعہ - 22(1)",
      "Section - 23(1)\nدفعہ - 23(1)",
      "Section - 24(1) (a)\nدفعہ - 24(1) (a)",
      "Section 29(2) (a)\nدفعہ 29(2) (a)"
    ],
    "correctAnswer": 2,
    "explanation": "آر ٹی ای ایکٹ، 2009 کی دفعہ 24، اساتذہ کے فرائض کی تفصیلات بیان کرتی ہے۔ خاص طور پر، اس دفعہ کی شق (1)(a) یہ لازمی قرار دیتی ہے کہ اساتذہ کو 'اسکول میں حاضری میں باقاعدگی اور وقت کی پابندی کو برقرار رکھنا' ہوگا۔"
  },
  {
    "id": 56,
    "question": "Match the following related to theme specific maps. Part-A: A) Bethymetric maps, B) Ethnographical maps, C) Vegetation maps. Part-B: i) reveals distribution of different human races in the world, ii) reveal distribution of different crops, iii) reveal depth of a sea. (TSTET 02 Jan 2025)\nموضوعاتی نقشوں سے متعلق مندرجہ ذیل کو ملائیں۔ حصہ-A: A) بیتھی میٹرک نقشے، B) ایتھنوگرافیکل نقشے، C) نباتاتی نقشے۔ حصہ-B: i) دنیا میں مختلف انسانی نسلوں کی تقسیم کو ظاہر کرتا ہے، ii) مختلف فصلوں کی تقسیم کو ظاہر کرتا ہے، iii) سمندر کی گہرائی کو ظاہر کرتا ہے۔",
    "options": [
      "A-i; B-ii; C-iii",
      "A-ii; B-i; C-iii",
      "A-iii; B-i; C-ii",
      "A-iii; B-ii; C-i"
    ],
    "correctAnswer": 2,
    "explanation": "صحیح جوڑیاں ہیں: A) بیتھی میٹرک نقشے سمندر کی گہرائی دکھاتے ہیں (iii)۔ B) ایتھنوگرافیکل نقشے انسانی نسلوں/نسلی گروہوں کی تقسیم دکھاتے ہیں (i)۔ C) نباتاتی نقشے پودوں کی زندگی کی تقسیم دکھاتے ہیں، بشمول فصلیں (ii)۔"
  },
  {
    "id": 57,
    "question": "The step that follows immediately the step 'Identifying the problem' - in problem solving method (TSTET 02 Jan 2025)\nمسئلہ حل کرنے کے طریقے میں 'مسئلہ کی شناخت' کے فوراً بعد آنے والا مرحلہ ہے",
    "options": [
      "Application of tested solution\nآزمودہ حل کا اطلاق",
      "Planning the process to solve the problem\nمسئلہ حل کرنے کے عمل کی منصوبہ بندی",
      "Executing the planned process\nمنصوبہ بند عمل پر عمل درآمد",
      "Evaluting the solution\nحل کا جائزہ لینا"
    ],
    "correctAnswer": 1,
    "explanation": "مسئلہ حل کرنے کے طریقے میں، جب ایک مسئلہ واضح طور پر شناخت اور بیان ہو جاتا ہے، تو فوری اگلا قدم اس مسئلے کو حل کرنے کے لیے ایک حکمت عملی یا عملی منصوبہ تیار کرنا ہوتا ہے۔"
  },
  {
    "id": 58,
    "question": "In this phase of concept mapping students explain the concept they acquired after discussion and reveal new things learned in the shape of summary (TSTET 02 Jan 2025)\nتصوراتی نقشہ سازی کے اس مرحلے میں طلباء بحث کے بعد حاصل کردہ تصور کی وضاحت کرتے ہیں اور خلاصے کی شکل میں سیکھی گئی نئی چیزوں کو ظاہر کرتے ہیں",
    "options": [
      "Phase-IV: Closure\nمرحلہ-IV: اختتام",
      "Phase-II: Propositional phase\nمرحلہ-II: تجویزی مرحلہ",
      "Phase-I: Presentation of abstraction\nمرحلہ-I: تجرید کی پیشکش",
      "Phase-III: Application\nمرحلہ-III: اطلاق"
    ],
    "correctAnswer": 0,
    "explanation": "ایک سبق کا 'اختتامی' مرحلہ سیکھنے کو مستحکم کرنے کے لیے ڈیزائن کیا گیا ہے۔ یہ وہ وقت ہے جب طلباء کو کلیدی خیالات کا خلاصہ کرنے، اپنے الفاظ میں تصورات کی وضاحت کرنے، اور جو کچھ انہوں نے سیکھا ہے اس پر غور کرنے کی ترغیب دی جاتی ہے، تاکہ معلومات کو صحیح طریقے سے مربوط کیا جا سکے۔"
  },
  {
    "id": 59,
    "question": "On invitation of a social science teacher, local farmers visited the school. explained and cleared the doubts of students about soil types, soil fertility, crops grown in a village. This activity is (TSTET 02 Jan 2025)\nایک سماجی سائنس کے استاد کی دعوت پر، مقامی کسانوں نے اسکول کا دورہ کیا۔ مٹی کی اقسام، مٹی کی زرخیزی، گاؤں میں اگائی جانے والی فصلوں کے بارے میں طلباء کے شکوک و شبہات کو واضح کیا۔ یہ سرگرمی ہے",
    "options": [
      "Project learning\nپروجیکٹ پر مبنی تعلیم",
      "Cooperative learning\nباہمی تعاون سے سیکھنا",
      "Bringing community to school\nکمیونٹی کو اسکول لانا",
      "Taking school to community\nاسکول کو کمیونٹی میں لے جانا"
    ],
    "correctAnswer": 2,
    "explanation": "یہ تعلیم میں کمیونٹی کے وسائل کو استعمال کرنے کی ایک مثال ہے۔ مقامی ماہرین (کسانوں) کو کلاس روم میں اپنے عملی علم کو بانٹنے کے لیے مدعو کرکے، استاد مؤثر طریقے سے 'کمیونٹی کو اسکول لا رہا ہے' تاکہ ایک مستند سیکھنے کا تجربہ فراہم کیا جا سکے۔"
  },
  {
    "id": 60,
    "question": "Choose the correct statements relating to Continuous and Comprehensive Evaluation (CCE). A) National Policy on Education 1986 recommended for CCE B) CCE was introduced in upper primary and secondary stages of schooling only C) CCE was introduced for qualitative improvement in the education system (TSTET 02 Jan 2025)\nمسلسل اور جامع تشخیص (CCE) سے متعلق صحیح بیانات کا انتخاب کریں۔ A) قومی تعلیمی پالیسی 1986 نے CCE کی سفارش کی B) CCE صرف اپر پرائمری اور سیکنڈری اسکولنگ کے مراحل میں متعارف کرایا گیا C) CCE تعلیمی نظام میں معیاری بہتری کے لیے متعارف کرایا گیا",
    "options": [
      "A, B & C",
      "A & C only\nصرف A اور C",
      "A & B only\nصرف A اور B",
      "B & C only\nصرف B اور C"
    ],
    "correctAnswer": 1,
    "explanation": "A صحیح ہے، کیونکہ NPE 1986 نے سب سے پہلے CCE کی تجویز پیش کی۔ C صحیح ہے، کیونکہ اس کا مقصد معیاری بہتری تھا۔ B غلط ہے کیونکہ CCE کو RTE ایکٹ کے تحت پورے ابتدائی مرحلے (کلاس I-VIII) کے لیے نافذ کیا گیا تھا، نہ کہ صرف اپر پرائمری اور سیکنڈری کے لیے۔"
  },
  {
    "id": 61,
    "question": "Among the following, the true statement regarding Contour Lines is (TSTET 02 Jan 2025)\nمندرجہ ذیل میں سے، کونٹور لائنوں کے بارے میں صحیح بیان ہے",
    "options": [
      "All the places on a Contour line will have the same height from the sea level\nکونٹور لائن پر موجود تمام مقامات کی سطح سمندر سے اونچائی یکساں ہوگی",
      "Contour lines are not usually drawn at fixed intervals of height\nکونٹور لائنیں عام طور پر اونچائی کے مقررہ وقفوں پر نہیں کھینچی جاتیں",
      "Wherever the Contour lines are drawn far apart, they represent steep slope\nجہاں بھی کونٹور لائنیں ایک دوسرے سے دور کھینچی جاتی ہیں، وہ کھڑی ڈھلوان کی نمائندگی کرتی ہیں",
      "On map, the hills and mountains are represented in V shape\nنقشے پر، پہاڑیوں اور پہاڑوں کو V کی شکل میں دکھایا جاتا ہے"
    ],
    "correctAnswer": 0,
    "explanation": "کونٹور لائنیں نقشے پر خیالی لکیریں ہوتی ہیں جو ایک حوالہ نقطہ، جو عام طور پر سطح سمندر ہوتا ہے، سے یکساں بلندی والے مقامات کو جوڑتی ہیں۔ یہ ان کی بنیادی تعریف ہے۔ جب کونٹور لائنیں ایک دوسرے سے دور ہوتی ہیں، تو وہ نرم ڈھلوان کی نمائندگی کرتی ہیں، نہ کہ کھڑی ڈھلوان کی۔"
  },
  {
    "id": 62,
    "question": "The 'Angle of Incidence' refers to (TSTET 02 Jan 2025)\n'زاویہ وقوع' (Angle of Incidence) سے مراد ہے",
    "options": [
      "The angle at which the Sun's rays reflect back to the atmosphere from the earth's surface\nوہ زاویہ جس پر سورج کی شعاعیں زمین کی سطح سے ماحول میں واپس منعکس ہوتی ہیں",
      "The angle at which the amount of Solar energy is reflected back by the earth's atmosphere\nوہ زاویہ جس پر شمسی توانائی کی مقدار زمین کے ماحول سے واپس منعکس ہوتی ہے",
      "The angle at which the Sun's rays fall on the earth's surface\nوہ زاویہ جس پر سورج کی شعاعیں زمین کی سطح پر پڑتی ہیں",
      "The angle at which the amount of Solar energy is absorbed and reflected away by clouds\nوہ زاویہ جس پر شمسی توانائی کی مقدار بادلوں کے ذریعے جذب اور منعکس ہوتی ہے"
    ],
    "correctAnswer": 2,
    "explanation": "زاویہ وقوع وہ زاویہ ہے جس پر سورج کی شعاعیں زمین کی سطح سے ٹکراتی ہیں۔ ایک بلند زاویہ (90° کے قریب) کا مطلب ہے زیادہ براہ راست اور مرتکز سورج کی روشنی، جس سے درجہ حرارت زیادہ ہوتا ہے، جبکہ کم زاویہ کا مطلب ہے کہ سورج کی روشنی ایک بڑے علاقے پر پھیل جاتی ہے، جس کے نتیجے میں درجہ حرارت ٹھنڈا ہوتا ہے۔"
  },
  {
    "id": 63,
    "question": "Generally, the \"Moderate Climate\" is observed at (TSTET 02 Jan 2025)\nعام طور پر، \"معتدل آب و ہوا\" یہاں دیکھی جاتی ہے",
    "options": [
      "Places located very near to the sea coast\nسمندری ساحل کے بہت قریب واقع مقامات",
      "Places located very near to the equator and the interior parts of the continent\nخط استوا کے بہت قریب اور براعظم کے اندرونی حصوں میں واقع مقامات",
      "Places located at higher altitudes and the interior parts of the continent\nبلند ارتفاعات اور براعظم کے اندرونی حصوں میں واقع مقامات",
      "Places located in the interior parts of the continent only\nصرف براعظم کے اندرونی حصوں میں واقع مقامات"
    ],
    "correctAnswer": 0,
    "explanation": "سمندری ساحلوں جیسے بڑے آبی ذخائر کے قریب کے علاقے معتدل آب و ہوا کا تجربہ کرتے ہیں۔ اس کی وجہ یہ ہے کہ پانی زمین کے مقابلے میں زیادہ آہستہ گرم اور ٹھنڈا ہوتا ہے۔ یہ معتدل اثر، جسے سمندری اثر کہا جاتا ہے، درجہ حرارت کے شدید اتار چڑھاؤ کو روکتا ہے، جس کے نتیجے میں اندرونی علاقوں کے مقابلے میں گرمیاں ٹھنڈی اور سردیاں گرم ہوتی ہیں۔"
  },
  {
    "id": 64,
    "question": "This layer of the interior of the earth is the main source of Magma (TSTET 02 Jan 2025)\nزمین کے اندرون کی یہ تہہ میگما کا بنیادی ذریعہ ہے",
    "options": [
      "Outer core\nبیرونی مرکزہ",
      "Continental crust\nبراعظمی پرت",
      "Oceanic Crust\nسمندری پرت",
      "Mantle\nمینٹل"
    ],
    "correctAnswer": 3,
    "explanation": "مینٹل، خاص طور پر بالائی حصہ جسے ایستھینوسفیئر کہا جاتا ہے، میگما کا بنیادی ذریعہ ہے۔ یہ تہہ نیم پگھلی ہوئی ہے، اور شدید گرمی اور دباؤ کی وجہ سے، چٹان پگھل کر میگما بناتی ہے، جو پھر آتش فشانی کے دوران سطح پر آسکتا ہے۔"
  },
  {
    "id": 65,
    "question": "A farmer having 'a own shed in the village' comes under this factor of production (TSTET 02 Jan 2025)\nایک کسان جس کا 'گاؤں میں اپنا شیڈ' ہو، پیداوار کے اس عامل کے تحت آتا ہے",
    "options": [
      "Land\nزمین",
      "Labour\nمحنت",
      "Physical Capital\nطبعی سرمایہ",
      "Working Capital\nکاروباری سرمایہ"
    ],
    "correctAnswer": 2,
    "explanation": "ایک شیڈ ایک طبعی اثاثہ ہے جو پیداواری عمل میں طویل عرصے تک استعمال ہوتا ہے۔ اقتصادیات میں، ایسی پائیدار اشیاء (اوزار، مشینری، عمارتیں) کو طبعی سرمایہ یا مستقل سرمایہ کے طور پر درجہ بندی کیا جاتا ہے، جو پیداوار کا ایک اہم عامل ہے۔"
  },
  {
    "id": 66,
    "question": "This law states that the Coriolis Force is responsible for deflecting winds towards right in the northern hemisphere and towards left in the southern hemisphere (TSTET 02 Jan 2025)\nیہ قانون بیان کرتا ہے کہ کوریولس قوت شمالی نصف کرہ میں ہواؤں کو دائیں طرف اور جنوبی نصف کرہ میں بائیں طرف موڑنے کی ذمہ دار ہے",
    "options": [
      "Farrel's law\nفیرل کا قانون",
      "Pascals Law\nپاسکل کا قانون",
      "Kepler's Law\nکیپلر کا قانون",
      "Newton's third Law\nنیوٹن کا تیسرا قانون"
    ],
    "correctAnswer": 0,
    "explanation": "فیرل کا قانون حرکت پذیر اشیاء، خاص طور پر ہواؤں اور سمندری لہروں پر کوریولس قوت کے اثر کو بیان کرتا ہے۔ یہ بتاتا ہے کہ زمین کی گردش کی وجہ سے، یہ حرکتیں شمالی نصف کرہ میں دائیں طرف اور جنوبی نصف کرہ میں بائیں طرف مڑ جاتی ہیں۔"
  },
  {
    "id": 67,
    "question": "'Trade Winds' are located in between these pressure belts (TSTET 02 Jan 2025)\n'تجارتی ہوائیں' ان دباؤ کی پٹیوں کے درمیان واقع ہیں",
    "options": [
      "Sub-tropical High Pressure Belt and Sub-Polar Low Pressure Belt\nذیلی منطقہ حارہ کی زیادہ دباؤ کی پٹی اور ذیلی قطبی کم دباؤ کی پٹی",
      "Equatorial Low Pressure Belt and Sub-tropical High Pressure Belt\nاستوائی کم دباؤ کی پٹی اور ذیلی منطقہ حارہ کی زیادہ دباؤ کی پٹی",
      "Polar High Pressure Belt and Sub-Polar Low Pressure Belt\nقطبی زیادہ دباؤ کی پٹی اور ذیلی قطبی کم دباؤ کی پٹی",
      "Sub-tropical High Pressure Belt and Polar High Pressure Belt\nذیلی منطقہ حارہ کی زیادہ دباؤ کی پٹی اور قطبی زیادہ دباؤ کی پٹی"
    ],
    "correctAnswer": 1,
    "explanation": "تجارتی ہوائیں غالب مشرقی ہوائیں ہیں جو ذیلی منطقہ حارہ کی زیادہ دباؤ کی پٹیوں (تقریباً 30° شمالی اور جنوبی عرض البلد) سے استوائی کم دباؤ کی پٹی (ڈولڈرمز) کی طرف بہتی ہیں۔ یہ عالمی ماحولیاتی گردش کے نظام کا ایک اہم جزو ہیں۔"
  },
  {
    "id": 68,
    "question": "The word 'Orogenic' is derived from the Greek word \"oros\", which means (TSTET 02 Jan 2025)\nلفظ 'Orogenic' یونانی لفظ 'oros' سے ماخوذ ہے، جس کا مطلب ہے",
    "options": [
      "Plateau\nسطح مرتفع",
      "Mountain\nپہاڑ",
      "Plain\nمیدان",
      "Floodplain\nسیلابی میدان"
    ],
    "correctAnswer": 1,
    "explanation": "اصطلاح 'orogenic' پہاڑوں کی تشکیل (orogeny) کے عمل سے متعلق ہے۔ یہ یونانی الفاظ 'oros' یعنی پہاڑ اور 'genesis' یعنی تخلیق یا ابتدا سے ماخوذ ہے۔"
  },
  {
    "id": 69,
    "question": "Hygrometer is an instrument used to measure the (TSTET 02 Jan 2025)\nہائیگرومیٹر ایک آلہ ہے جو ناپنے کے لیے استعمال ہوتا ہے",
    "options": [
      "The water vapour content in the air\nہوا میں آبی بخارات کی مقدار",
      "The specific gravity or density of liquids\nمائعات کی مخصوص کشش ثقل یا کثافت",
      "The direction of the wind\nہوا کی سمت",
      "The amount of rainfall in a specific area over a certain period of time\nایک مخصوص علاقے میں ایک خاص مدت کے دوران بارش کی مقدار"
    ],
    "correctAnswer": 0,
    "explanation": "ہائیگرومیٹر ایک موسمیاتی آلہ ہے جو خاص طور پر ہوا میں آبی بخارات کی مقدار کی پیمائش کے لیے ڈیزائن کیا گیا ہے، جسے نمی کہا جاتا ہے۔"
  },
  {
    "id": 70,
    "question": "The West and South West margins of the continents have this type of forests (TSTET 02 Jan 2025)\nبراعظموں کے مغربی اور جنوب مغربی حاشیوں پر اس قسم کے جنگلات پائے جاتے ہیں",
    "options": [
      "The Tropical Deciduous forests\nمنطقہ حارہ کے خزاں رسیدہ جنگلات",
      "The Coniferous Forests\nصنوبری جنگلات",
      "Temperate Deciduous Forests\nمعتدل خزاں رسیدہ جنگلات",
      "The Mediterranean Vegetation\nبحیرہ روم کی نباتات"
    ],
    "correctAnswer": 3,
    "explanation": "بحیرہ روم کی نباتات ان خطوں کی خصوصیت ہے جہاں گرم، خشک گرمیاں اور ہلکی، گیلی سردیاں ہوتی ہیں۔ اس قسم کی آب و ہوا عام طور پر براعظموں کے مغربی اور جنوب مغربی حاشیوں پر 30° اور 45° عرض البلد کے درمیان پائی جاتی ہے، جیسے بحیرہ روم کا طاس اور کیلیفورنیا۔"
  },
  {
    "id": 71,
    "question": "This plateau of India rides over the Indian Plate (TSTET 02 Jan 2025)\nہندوستان کی یہ سطح مرتفع ہندوستانی پلیٹ پر سوار ہے",
    "options": [
      "Malwa Plateau\nمالوا سطح مرتفع",
      "Chota Nagpur Plateau\nچھوٹا ناگپور سطح مرتفع",
      "Marwar Plateau\nمارواڑ سطح مرتفع",
      "Deccan Plateau\nدکن سطح مرتفع"
    ],
    "correctAnswer": 3,
    "explanation": "دکن کی سطح مرتفع مغربی اور جنوبی ہندوستان میں ایک بڑی سطح مرتفع ہے۔ یہ ہندوستانی پلیٹ کا ایک حصہ ہے، جو ایک بڑی ٹیکٹونک پلیٹ ہے جو کبھی سپر براعظم گونڈوانا کا حصہ تھی اور لاکھوں سالوں سے شمال کی طرف حرکت کر رہی ہے۔"
  },
  {
    "id": 72,
    "question": "From among the following, identify the densest planet (TSTET 02 Jan 2025)\nمندرجہ ذیل میں سے، سب سے زیادہ کثیف سیارے کی نشاندہی کریں",
    "options": [
      "Jupiter\nمشتری",
      "Mars\nمریخ",
      "Mercury\nعطارد",
      "Earth\nزمین"
    ],
    "correctAnswer": 3,
    "explanation": "زمین ہمارے نظام شمسی کا سب سے کثیف سیارہ ہے، جس کی اوسط کثافت تقریباً 5.51 گرام فی مکعب سینٹی میٹر ہے۔ یہ زیادہ کثافت اس کے بڑے دھاتی مرکزے اور دبے ہوئے چٹانی مینٹل کی وجہ سے ہے۔"
  },
  {
    "id": 73,
    "question": "These soils are developed on crystalline igneous rocks in areas of low rainfall in the eastern and southern parts of the Deccan Plateau (TSTET 02 Jan 2025)\nیہ مٹی دکن سطح مرتفع کے مشرقی اور جنوبی حصوں میں کم بارش والے علاقوں میں بلوری آتشی چٹانوں پر بنتی ہے",
    "options": [
      "Black Soils\nکالی مٹی",
      "Red Soils\nلال مٹی",
      "Laterite Soils\nلیٹرائٹ مٹی",
      "Alluvial Soils\nالووئل مٹی"
    ],
    "correctAnswer": 1,
    "explanation": "لال مٹی قدیم بلوری اور میٹامورفک چٹانوں جیسے گرینائٹ کے موسمی اثرات سے بنتی ہے۔ وہ آئرن آکسائڈز کی زیادہ مقدار کی وجہ سے اپنا مخصوص لال رنگ حاصل کرتی ہیں اور عام طور پر کم بارش والے علاقوں میں پائی جاتی ہیں، جیسے دکن سطح مرتفع کے کچھ حصے۔"
  },
  {
    "id": 74,
    "question": "Which of the following statements best describes the Sex Ratio? (TSTET 02 Jan 2025)\nمندرجہ ذیل میں سے کون سا بیان جنسی تناسب کی بہترین وضاحت کرتا ہے؟",
    "options": [
      "The ratio between the number of males and females in different age groups\nمختلف عمر کے گروپوں میں مردوں اور عورتوں کی تعداد کے درمیان تناسب",
      "The ratio between the number of males and females in the age group of 15 to 59 years\n15 سے 59 سال کی عمر کے گروپ میں مردوں اور عورتوں کی تعداد کے درمیان تناسب",
      "The number of females per 1000 males in the population\nآبادی میں فی 1000 مردوں پر عورتوں کی تعداد",
      "The number of males and females living in a unit area\nایک یونٹ رقبے میں رہنے والے مردوں اور عورتوں کی تعداد"
    ],
    "correctAnswer": 2,
    "explanation": "جنسی تناسب ایک آبادیاتی اشاریہ ہے جو آبادی میں مردوں اور عورتوں کے درمیان توازن کو بیان کرنے کے لیے استعمال ہوتا ہے۔ ہندوستان میں، اسے خاص طور پر فی 1000 مردوں پر عورتوں کی تعداد کے طور پر بیان کیا جاتا ہے۔"
  },
  {
    "id": 75,
    "question": "The cultivation of this crop requires warm and moist frost free climate all through the year (TSTET 02 Jan 2025)\nاس فصل کی کاشت کے لیے سال بھر گرم اور مرطوب ٹھنڈ سے پاک آب و ہوا کی ضرورت ہوتی ہے",
    "options": [
      "Sugar Cane\nگنا",
      "Jute\nپٹ سن",
      "Paddy\nدھان",
      "Tea\nچائے"
    ],
    "correctAnswer": 0,
    "explanation": "گنا ایک منطقہ حارہ اور ذیلی منطقہ حارہ کی فصل ہے جسے اپنے طویل بڑھنے کے موسم میں بہترین نشوونما کے لیے گرم، مرطوب اور ٹھنڈ سے پاک آب و ہوا کی ضرورت ہوتی ہے۔ ٹھنڈ گنے کو شدید نقصان پہنچا سکتی ہے اور اس میں سوکروز کی مقدار کو کم کر سکتی ہے۔"
  },
  {
    "id": 76,
    "question": "The main purpose of Kyoto Protocol, 1997 was (TSTET 02 Jan 2025)\nکیوٹو پروٹوکول، 1997 کا بنیادی مقصد تھا",
    "options": [
      "To protect the earth from global warming\nزمین کو گلوبل وارمنگ سے بچانا",
      "To ensure that all the nations in the world are not suffering from hunger\nاس بات کو یقینی بنانا کہ دنیا کی تمام قومیں بھوک سے دوچار نہ ہوں",
      "To maintain peace and harmony in the world\nدنیا میں امن و امان برقرار رکھنا",
      "To bring cultural unity among all the nations of the world\nدنیا کی تمام قوموں کے درمیان ثقافتی اتحاد لانا"
    ],
    "correctAnswer": 0,
    "explanation": "کیوٹو پروٹوکول ایک بین الاقوامی معاہدہ تھا جس نے ریاستی فریقوں کو گرین ہاؤس گیسوں کے اخراج کو کم کرنے کا پابند کیا، اس سائنسی اتفاق رائے کی بنیاد پر کہ گلوبل وارمنگ ہو رہی ہے اور انسانی ساختہ CO2 کا اخراج اسے بڑھا رہا ہے۔"
  },
  {
    "id": 77,
    "question": "The countries which were NOT invited to the Treaty of Versailles, 1919 at the end of the First World War by the victorious countries (TSTET 02 Jan 2025)\nوہ ممالک جنہیں پہلی جنگ عظیم کے اختتام پر 1919 کے معاہدہ ورسائی میں فاتح ممالک نے مدعو نہیں کیا تھا",
    "options": [
      "Germany, Austria and Turkey\nجرمنی، آسٹریا اور ترکی",
      "Germany. France and Russia\nجرمنی، فرانس اور روس",
      "United States of America, France. Italy\nریاستہائے متحدہ امریکہ، فرانس، اٹلی",
      "Italy. Germany and Turkey\nاٹلی، جرمنی اور ترکی"
    ],
    "correctAnswer": 0,
    "explanation": "معاہدہ ورسائی ایک سزا پر مبنی معاہدہ تھا جو شکست خوردہ مرکزی طاقتوں پر مسلط کیا گیا تھا۔ جرمنی اور اس کے اتحادیوں، بشمول آسٹریا-ہنگری اور سلطنت عثمانیہ (ترکی)، کو مذاکرات میں مدعو نہیں کیا گیا تھا اور انہیں فاتح اتحادی طاقتوں کی طرف سے طے شدہ شرائط کو قبول کرنے پر مجبور کیا گیا تھا۔"
  },
  {
    "id": 78,
    "question": "In February, 1917, due to this reason a provisional Government was established in Russia (TSTET 02 Jan 2025)\nفروری 1917 میں، اس وجہ سے روس میں ایک عبوری حکومت قائم ہوئی",
    "options": [
      "Escaping of Czar Nicholas II leaving his throne\nزار نکولس دوم کا تخت چھوڑ کر فرار ہونا",
      "Murder of Czar Nicholas II in the first world war\nپہلی جنگ عظیم میں زار نکولس دوم کا قتل",
      "Economic crisis\nمعاشی بحران",
      "Invasion of Russia by Germany\nجرمنی کا روس پر حملہ"
    ],
    "correctAnswer": 0,
    "explanation": "1917 کا فروری انقلاب معاشی بحرانوں اور جنگی ہلاکتوں سے پیدا ہونے والی وسیع پیمانے پر بے چینی کی وجہ سے شروع ہوا۔ اس کے نتیجے میں بڑے پیمانے پر احتجاج ہوئے اور زار نکولس دوم نے تخت چھوڑ دیا۔ اس کے بعد پیدا ہونے والے اقتدار کے خلا میں، ایک عبوری حکومت تشکیل دی گئی۔"
  },
  {
    "id": 79,
    "question": "The South western portions of Nigeria are dominated by these tribes (TSTET 02 Jan 2025)\nنائجیریا کے جنوب مغربی حصوں پر ان قبائل کا غلبہ ہے",
    "options": [
      "Igbo tribes\nایگبو قبائل",
      "Hausa Fulani tribes\nہاؤسا فولانی قبائل",
      "Yoruba tribes\nیوروبا قبائل",
      "Massey tribes\nمیسے قبائل"
    ],
    "correctAnswer": 2,
    "explanation": "نائجیریا میں تین بڑے نسلی گروہ ہیں۔ یوروبا لوگ بنیادی طور پر ملک کے جنوب مغربی حصے میں پائے جاتے ہیں۔ ہاؤسا-فولانی شمال میں اور ایگبو جنوب مشرق میں مرکوز ہیں۔"
  },
  {
    "id": 80,
    "question": "Which of the following best describes 'Pan Africanism'? (TSTET 02 Jan 2025)\nمندرجہ ذیل میں سے کون سا 'پین افریقنزم' کی بہترین وضاحت کرتا ہے؟",
    "options": [
      "It is an idea which promotes the unity of all African people irrespective of country or tribe\nیہ ایک ایسا نظریہ ہے جو ملک یا قبیلے سے قطع نظر تمام افریقی عوام کے اتحاد کو فروغ دیتا ہے",
      "It is a concept which helps the people of Africa in developing agriculturally and industrially\nیہ ایک ایسا تصور ہے جو افریقہ کے لوگوں کو زرعی اور صنعتی طور پر ترقی کرنے میں مدد کرتا ہے",
      "It developed the idea of a common Nigerian Nation and began to fight the British rule\nاس نے ایک مشترکہ نائجیرین قوم کا نظریہ تیار کیا اور برطانوی حکومت سے لڑنا شروع کیا",
      "It is nothing but the policy of Divide and Rule\nیہ 'تقسیم کرو اور حکومت کرو' کی پالیسی کے سوا کچھ نہیں"
    ],
    "correctAnswer": 0,
    "explanation": "پین-افریقنزم ایک عالمی سیاسی تحریک ہے جس کا مقصد تمام افریقی نسل کے لوگوں کے درمیان یکجہتی کے رشتوں کی حوصلہ افزائی اور مضبوطی کرنا ہے۔ یہ افریقی اقوام کے سیاسی، سماجی اور اقتصادی اتحاد کی وکالت کرتی ہے۔"
  },
  {
    "id": 81,
    "question": "Komarrum Bhim started a guerilla struggle centered on this place (TSTET 02 Jan 2025)\nکومارم بھیم نے اس جگہ پر مرکوز ایک گوریلا جدوجہد شروع کی",
    "options": [
      "Jodeghat\nجوڈے گھاٹ",
      "Sankepally\nسنکی پلی",
      "Dammanapalli\nدمن پلی",
      "Koyyur\nکوئیور"
    ],
    "correctAnswer": 0,
    "explanation": "کومارم بھیم، گونڈ برادری کے ایک قبائلی رہنما، نے نظام حیدرآباد کے خلاف بغاوت کی قیادت کی۔ قبائلی حقوق کے لیے ان کی گوریلا مہم موجودہ تلنگانہ کے ضلع عادل آباد کے جوڈے گھاٹ کے جنگلات میں مرکوز تھی۔"
  },
  {
    "id": 82,
    "question": "The Greek ambassador who was known for his detailed accounts of Indian society and culture during the Mauryan Empire (TSTET 02 Jan 2025)\nیونانی سفیر جو موریہ سلطنت کے دوران ہندوستانی معاشرے اور ثقافت کے بارے میں اپنی تفصیلی تفصیلات کے لیے جانا جاتا تھا",
    "options": [
      "Herodotus\nہیروڈوٹس",
      "Megasthenes\nمیگاستھینیز",
      "Ptolemy\nبطلیموس",
      "Strabo\nاسٹرابو"
    ],
    "correctAnswer": 1,
    "explanation": "میگاستھینیز ایک یونانی سفیر تھا جسے موریہ شہنشاہ چندر گپت کے دربار میں بھیجا گیا تھا۔ اس کی تصنیف، 'انڈیکا'، موریہ ہندوستان کا ایک قیمتی تاریخی بیان ہے، جو اس کے معاشرے، انتظامیہ اور جغرافیہ کا تفصیلی مشاہدہ فراہم کرتی ہے۔"
  },
  {
    "id": 83,
    "question": "The Nasik inscriptions are primarily associated with this historical figure (TSTET 02 Jan 2025)\nناسِک کے کتبے بنیادی طور پر اس تاریخی شخصیت سے وابستہ ہیں",
    "options": [
      "Ashoka\nاشوک",
      "Gautam Buddha\nگوتم بدھ",
      "Gautami Balashri\nگوتامی بالاشری",
      "Harshavardhana\nہرش وردھن"
    ],
    "correctAnswer": 2,
    "explanation": "ناسِک غار کے کتبے ساتواہن خاندان سے وابستہ ہیں۔ ایک کلیدی کتبہ عظیم ساتواہن بادشاہ گوتمی پتر ستکرنی کی والدہ گوتامی بالاشری نے جاری کیا تھا، اور اس میں ان کے بیٹے کی کامیابیوں اور فتوحات کی تفصیل ہے۔"
  },
  {
    "id": 84,
    "question": "\"Manuscript\" is (TSTET 02 Jan 2025)\n\"مخطوطہ\" ہے",
    "options": [
      "A printed book\nایک چھپی ہوئی کتاب",
      "A handwritten document\nایک ہاتھ سے لکھی ہوئی دستاویز",
      "A digital book\nایک ڈیجیٹل کتاب",
      "A photographic image\nایک فوٹو گرافی کی تصویر"
    ],
    "correctAnswer": 1,
    "explanation": "لفظ 'مخطوطہ' لاطینی الفاظ 'مانو' (ہاتھ سے) اور 'اسکرپٹس' (لکھا ہوا) سے ماخوذ ہے۔ اس سے مراد کوئی بھی دستاویز، کتاب، یا متن ہے جو چھپائی کی ایجاد سے پہلے ہاتھ سے لکھا گیا ہو۔"
  },
  {
    "id": 85,
    "question": "In the context of historical studies, an \"inscription\" is (TSTET 02 Jan 2025)\nتاریخی مطالعات کے تناظر میں، ایک \"کتبہ\" ہے",
    "options": [
      "A type of written document created by historians\nمؤرخین کی طرف سے بنائی گئی ایک قسم کی تحریری دستاویز",
      "A carved or written message on a Stone or a metal\nپتھر یا دھات پر کندہ یا لکھا ہوا پیغام",
      "An oral tradition passed down through generations\nایک زبانی روایت جو نسل در نسل منتقل ہوتی ہے",
      "A fictional narrative created for entertainment\nتفریح کے لیے تخلیق کردہ ایک افسانوی بیانیہ"
    ],
    "correctAnswer": 1,
    "explanation": "کتبے پتھر، دھات کی پلیٹوں یا ستونوں جیسی سخت سطحوں پر کندہ تحریریں ہیں۔ یہ مورخین کے لیے ایک اہم بنیادی ماخذ ہیں کیونکہ یہ ماضی کے واقعات، حکمرانوں اور معاشروں کے بارے میں براہ راست اور پائیدار ثبوت فراہم کرتے ہیں۔"
  },
  {
    "id": 86,
    "question": "This system had contributed to the rise of \"Jotedars\" in Bengal (TSTET 02 Jan 2025)\nاس نظام نے بنگال میں \"جوت داروں\" کے عروج میں اہم کردار ادا کیا تھا",
    "options": [
      "Zamindari system\nزمینداری نظام",
      "Ryotwari system\nریوتواری نظام",
      "Share cropping system\nبٹائی داری نظام",
      "Feudal system\nجاگیردارانہ نظام"
    ],
    "correctAnswer": 0,
    "explanation": "بنگال میں زمینداری نظام (مستقل بندوبست) کے تحت، زمیندار اکثر اپنے محصول وصولی کے حقوق کو ذیلی ٹھیکے پر دے دیتے تھے۔ اس سے امیر کسانوں یا درمیانی زمینداروں کا ایک طبقہ پیدا ہوا جسے جوت دار کہا جاتا ہے، جو زمین کے وسیع خطوں کو کنٹرول کرتے تھے اور دیہاتوں میں کافی طاقت رکھتے تھے۔"
  },
  {
    "id": 87,
    "question": "The three powers involved in the Battle of Buxar, 1764 were (TSTET 02 Jan 2025)\n1764 کی بکسر کی لڑائی میں شامل تین طاقتیں تھیں",
    "options": [
      "British East India Company. Marathas, Mysore kings\nبرٹش ایسٹ انڈیا کمپنی، مرہٹے، میسور کے بادشاہ",
      "British East India Company, Nawab of Bengal, Mughal Emperor\nبرٹش ایسٹ انڈیا کمپنی، نواب بنگال، مغل بادشاہ",
      "British East India Company, French East India Company, Dutch East India Company\nبرٹش ایسٹ انڈیا کمپنی، فرانسیسی ایسٹ انڈیا کمپنی، ڈچ ایسٹ انڈیا کمپنی",
      "British East India Company. Sikhs. Portuguese\nبرٹش ایسٹ انڈیا کمپنی، سکھ، پرتگالی"
    ],
    "correctAnswer": 1,
    "explanation": "بکسر کی جنگ برطانوی ایسٹ انڈیا کمپنی کی افواج اور میر قاسم (نواب بنگال)، شجاع الدولہ (نواب اودھ)، اور شاہ عالم ثانی (مغل شہنشاہ) کی مشترکہ فوجوں کے درمیان لڑی گئی تھی۔"
  },
  {
    "id": 88,
    "question": "The Chief Constitutional Advisor to the Indian Constitution Drafting Committee was (TSTET 02 Jan 2025)\nہندوستانی آئین کی ڈرافٹنگ کمیٹی کے چیف آئینی مشیر تھے",
    "options": [
      "Granville Austin\nگرینویل آسٹن",
      "Benegal Narsing Rao\nبینیگل نرسنگ راؤ",
      "TT Krishnamachary\nٹی ٹی کرشنماچاری",
      "DP Khaitan\nڈی پی کھیتان"
    ],
    "correctAnswer": 1,
    "explanation": "سر بینیگل نرسنگ راؤ (بی این راؤ) ایک ممتاز قانون دان تھے جنہوں نے دستور ساز اسمبلی کے آئینی مشیر کے طور پر خدمات انجام دیں۔ انہوں نے آئین کا ابتدائی مسودہ تیار کیا جس پر ڈاکٹر بی آر امبیڈکر کی سربراہی میں ڈرافٹنگ کمیٹی نے کام کیا۔"
  },
  {
    "id": 89,
    "question": "The President of India nominates 12 members to the Rajya Sabha who are eminent with knowledge of practical experience in these areas (TSTET 02 Jan 2025)\nہندوستان کا صدر راجیہ سبھا کے لیے 12 اراکین کو نامزد کرتا ہے جو ان شعبوں میں عملی تجربے کے علم کے ساتھ ممتاز ہیں",
    "options": [
      "Literature, Science, art and Social Service\nادب، سائنس، فن اور سماجی خدمت",
      "Economics, Psychology and Social Service\nمعاشیات، نفسیات اور سماجی خدمت",
      "Law, literature and Economics\nقانون، ادب اور معاشیات",
      "Science, Sports and Economics\nسائنس، کھیل اور معاشیات"
    ],
    "correctAnswer": 0,
    "explanation": "ہندوستانی آئین کے آرٹیکل 80 کے مطابق، صدر راجیہ سبھا (کونسل آف اسٹیٹس) کے لیے 12 اراکین کو ایسے لوگوں میں سے نامزد کر سکتا ہے جو ادب، سائنس، فن اور سماجی خدمت جیسے شعبوں میں خصوصی علم یا عملی تجربہ رکھتے ہوں۔"
  },
  {
    "id": 90,
    "question": "Study the given statements and choose the correct answer: A) President's prior permission is required to present the Money Bills in the Indian Parliament. B) If there is no unanimity between two houses in passing the money bill, joint sitting of both the houses of the Parliament will be summoned by the President of India (TSTET 02 Jan 2025)\nدیئے گئے بیانات کا مطالعہ کریں اور صحیح جواب کا انتخاب کریں: A) ہندوستانی پارلیمنٹ میں منی بل پیش کرنے کے لیے صدر کی پیشگی اجازت ضروری ہے۔ B) اگر منی بل پاس کرنے میں دونوں ایوانوں کے درمیان اتفاق رائے نہ ہو تو پارلیمنٹ کے دونوں ایوانوں کا مشترکہ اجلاس صدر ہند کی طرف سے طلب کیا جائے گا",
    "options": [
      "Both 'A' and 'B' are correct\nدونوں 'A' اور 'B' درست ہیں",
      "'A' is correct and 'B' is incorrect\n'A' درست ہے اور 'B' غلط ہے",
      "Both 'A' and 'B' are incorrect\nدونوں 'A' اور 'B' غلط ہیں",
      "'B' is correct and 'A' is incorrect\n'B' درست ہے اور 'A' غلط ہے"
    ],
    "correctAnswer": 1,
    "explanation": "بیان A درست ہے؛ منی بل صرف صدر کی پیشگی سفارش کے ساتھ لوک سبھا میں پیش کیا جا سکتا ہے۔ بیان B غلط ہے؛ منی بل کے لیے مشترکہ اجلاس کی کوئی گنجائش نہیں ہے۔ راجیہ سبھا کے اختیارات محدود ہیں اور وہ منی بل کو مسترد یا اس میں ترمیم نہیں کر سکتی۔"
  },
  {
    "id": 91,
    "question": "Among the following, the primary purpose of Directive Principles of State Policy in India is (TSTET 02 Jan 2025)\nدرج ذیل میں سے، ہندوستان میں ریاستی پالیسی کے رہنما اصولوں کا بنیادی مقصد ہے",
    "options": [
      "To provide fundamental rights to all individuals\nتمام افراد کو بنیادی حقوق فراہم کرنا",
      "To guide the State in policy-making\nپالیسی سازی میں ریاست کی رہنمائی کرنا",
      "To define the structure of the government\nحکومت کی ساخت کی تعریف کرنا",
      "To establish a parliamentary system\nایک پارلیمانی نظام قائم کرنا"
    ],
    "correctAnswer": 1,
    "explanation": "ریاستی پالیسی کے رہنما اصول (DPSP) مرکزی اور ریاستی حکومتوں کے لیے رہنما خطوط ہیں جنہیں قوانین اور پالیسیاں بناتے وقت ذہن میں رکھنا چاہیے۔ یہ قانونی طور پر قابل نفاذ نہیں ہیں لیکن ان کا مقصد ریاست کو سماجی اور اقتصادی جمہوریت کی تشکیل کی طرف رہنمائی کرنا ہے۔"
  },
  {
    "id": 92,
    "question": "In India, the President can extend the tenure of the Lok Sabha under special circumstances like national emergency for a period not exceeding one year at a time on the advice of the (TSTET 02 Jan 2025)\nہندوستان میں، صدر قومی ایمرجنسی جیسے خصوصی حالات میں لوک سبھا کی مدت میں ایک وقت میں ایک سال سے زیادہ کی توسیع نہیں کر سکتا، اس کی صلاح پر",
    "options": [
      "Prime Minister\nوزیر اعظم",
      "Speaker of Lok Sabha\nلوک سبھا کا اسپیکر",
      "Union Council of Ministers\nمرکزی وزراء کی کونسل",
      "Chief Justice of India\nچیف جسٹس آف انڈیا"
    ],
    "correctAnswer": 2,
    "explanation": "قومی ایمرجنسی کے دوران، لوک سبھا کی مدت کو پارلیمنٹ کے قانون کے ذریعے ایک وقت میں ایک سال کے لیے بڑھایا جا سکتا ہے۔ یہ قانون سازی کی کارروائی حکومت کرتی ہے، جس کی قیادت وزیر اعظم اور مرکزی وزراء کی کونسل کرتی ہے، جو صدر کو مشورہ دیتے ہیں۔"
  },
  {
    "id": 93,
    "question": "The National Human Rights Commission can conduct 'suo motu' investigations. What does 'suo motu' mean? (TSTET 02 Jan 2025)\nقومی انسانی حقوق کمیشن 'سو موٹو' تحقیقات کر سکتا ہے۔ 'سو موٹو' کا کیا مطلب ہے؟",
    "options": [
      "To investigate based on public complaints\nعوامی شکایات کی بنیاد پر تحقیقات کرنا",
      "To investigate on its own initiative\nاپنی پہل پر تحقیقات کرنا",
      "To investigate only court referrals\nصرف عدالتی حوالہ جات کی تحقیقات کرنا",
      "To investigate after government approval\nحکومتی منظوری کے بعد تحقیقات کرنا"
    ],
    "correctAnswer": 1,
    "explanation": "'سو موٹو' ایک لاطینی قانونی اصطلاح ہے جس کا مطلب ہے 'اپنی تحریک پر'۔ اس سے ظاہر ہوتا ہے کہ قومی انسانی حقوق کمیشن (NHRC) کو یہ اختیار حاصل ہے کہ وہ باقاعدہ شکایت درج کیے جانے کا انتظار کیے بغیر، انسانی حقوق کی خلاف ورزیوں کی تحقیقات خود شروع کر سکتا ہے۔"
  },
  {
    "id": 94,
    "question": "The primary focus of the United Nations Beijing Declaration and Programme of Action, 1995 was (TSTET 02 Jan 2025)\nاقوام متحدہ کے بیجنگ اعلامیہ اور پروگرام آف ایکشن، 1995 کا بنیادی مرکز تھا",
    "options": [
      "Economic development of Asian Countries\nایشیائی ممالک کی اقتصادی ترقی",
      "Gender equality and empowerment of women\nصنفی مساوات اور خواتین کو بااختیار بنانا",
      "Environmental protection\nماحولیاتی تحفظ",
      "Political Stability\nسیاسی استحکام"
    ],
    "correctAnswer": 1,
    "explanation": "بیجنگ اعلامیہ اور پلیٹ فارم فار ایکشن، جو 1995 میں خواتین پر چوتھی عالمی کانفرنس میں اپنایا گیا، خواتین اور لڑکیوں کے حقوق اور بااختیار بنانے کو آگے بڑھانے کے لیے ایک تاریخی عالمی ایجنڈا ہے، جو صنفی مساوات کے حصول پر مرکوز ہے۔"
  },
  {
    "id": 95,
    "question": "One of the following is a child Right as per International Children's Charter proposed by UNO in 1989 (TSTET 02 Jan 2025)\nدرج ذیل میں سے ایک 1989 میں اقوام متحدہ کی طرف سے پیش کردہ بین الاقوامی بچوں کے چارٹر کے مطابق بچوں کا حق ہے",
    "options": [
      "Right to leave the country as and when required even without the permission of the Government\nحکومت کی اجازت کے بغیر بھی جب ضرورت ہو ملک چھوڑنے کا حق",
      "Right to live with parents as far as possible\nجہاں تک ممکن ہو والدین کے ساتھ رہنے کا حق",
      "Right to contest in the school election\nاسکول کے انتخابات میں حصہ لینے کا حق",
      "Right to enter into contracts\nمعاہدوں میں داخل ہونے کا حق"
    ],
    "correctAnswer": 1,
    "explanation": "بچوں کے حقوق پر اقوام متحدہ کا کنونشن (1989) بچوں کے حقوق کو قائم کرتا ہے۔ کنونشن کا آرٹیکل 9 واضح طور پر کہتا ہے کہ بچوں کو اپنے والدین کے ساتھ رہنے کا حق ہے جب تک کہ یہ بچے کے بہترین مفادات سے مطابقت نہ رکھتا ہو۔"
  },
  {
    "id": 96,
    "question": "Choose the correct characteristic feature of demand deposits (TSTET 02 Jan 2025)\nڈیمانڈ ڈپازٹس کی صحیح خصوصیت کا انتخاب کریں",
    "options": [
      "Demand deposits can only be accessed through physical bank branches\nڈیمانڈ ڈپازٹس تک صرف فزیکل بینک برانچوں کے ذریعے رسائی حاصل کی جا سکتی ہے",
      "Demand deposits need not require a minimum balance to be maintained\nڈیمانڈ ڈپازٹس کو کم از کم بیلنس برقرار رکھنے کی ضرورت نہیں ہوتی",
      "Demand deposits are not insured by the government\nڈیمانڈ ڈپازٹس حکومت کی طرف سے بیمہ شدہ نہیں ہوتے",
      "Demand deposits can be used for payments by cheque or electronic means\nڈیمانڈ ڈپازٹس کو چیک یا الیکٹرانک ذرائع سے ادائیگی کے لیے استعمال کیا جا سکتا ہے"
    ],
    "correctAnswer": 3,
    "explanation": "ڈیمانڈ ڈپازٹس بینک کھاتوں میں موجود فنڈز ہوتے ہیں جنہیں بغیر پیشگی اطلاع کے کسی بھی وقت نکالا جا سکتا ہے۔ ایک اہم خصوصیت ان کی لیکویڈیٹی ہے، جس کی وجہ سے انہیں چیک، ڈیبٹ کارڈ، یا الیکٹرانک ٹرانسفر کے ذریعے ادائیگیوں کے لیے آسانی سے استعمال کیا جا سکتا ہے۔"
  },
  {
    "id": 97,
    "question": "The banks keep only a small proportion of their deposits as cash to (TSTET 02 Jan 2025)\nبینک اپنے ڈپازٹس کا صرف ایک چھوٹا سا حصہ نقد کے طور پر رکھتے ہیں تاکہ",
    "options": [
      "avoid taxes\nٹیکس سے بچیں",
      "invest in stocks\nاسٹاک میں سرمایہ کاری کریں",
      "pay depositors who withdraw money\nرقم نکالنے والے ڈپازٹرز کو ادائیگی کریں",
      "cover operational costs\nآپریشنل اخراجات کو پورا کریں"
    ],
    "correctAnswer": 2,
    "explanation": "بینک فریکشنل ریزرو سسٹم پر کام کرتے ہیں۔ وہ ڈپازٹرز کی روزانہ رقم نکالنے کی طلب کو پورا کرنے کے لیے کل ڈپازٹس کا ایک چھوٹا حصہ نقد ذخائر کے طور پر رکھتے ہیں، اور بقیہ رقم سود کمانے کے لیے قرض پر دے دیتے ہیں۔"
  },
  {
    "id": 98,
    "question": "What role do banks play between depositors and borrowers? (TSTET 02 Jan 2025)\nڈپازٹرز اور قرض لینے والوں کے درمیان بینک کیا کردار ادا کرتے ہیں؟",
    "options": [
      "Banks act as financial advisors\nبینک مالیاتی مشیر کے طور پر کام کرتے ہیں",
      "Banks manage government funds\nبینک سرکاری فنڈز کا انتظام کرتے ہیں",
      "Banks mediate between those who have surplus funds and those in need of funds\nبینک ان لوگوں کے درمیان ثالثی کرتے ہیں جن کے پاس فاضل فنڈز ہیں اور جنہیں فنڈز کی ضرورت ہے",
      "Banks serve only depositors\nبینک صرف ڈپازٹرز کی خدمت کرتے ہیں"
    ],
    "correctAnswer": 2,
    "explanation": "بینک مالیاتی ثالث کے طور پر کام کرتے ہیں۔ وہ بچت کرنے والوں (ڈپازٹرز) سے فاضل فنڈز اکٹھا کرتے ہیں اور ان فنڈز کو افراد اور کاروبار (قرض لینے والوں) تک پہنچاتے ہیں جنہیں سرمایہ کاری یا کھپت کے لیے ان کی ضرورت ہوتی ہے۔ یہ ثالثی معیشت کے لیے بہت اہم ہے۔"
  },
  {
    "id": 99,
    "question": "A 'Price Index' 100 represents (TSTET 02 Jan 2025)\nایک 'پرائس انڈیکس' 100 نمائندگی کرتا ہے",
    "options": [
      "Prices have increased by 100%\nقیمتوں میں 100 فیصد اضافہ ہوا ہے",
      "Prices are irrelevant to the base year\nقیمتیں بنیادی سال سے غیر متعلق ہیں",
      "Prices are at the average level of the base year\nقیمتیں بنیادی سال کی اوسط سطح پر ہیں",
      "Prices have decreased by 100%\nقیمتوں میں 100 فیصد کمی ہوئی ہے"
    ],
    "correctAnswer": 2,
    "explanation": "پرائس انڈیکس وقت کے ساتھ قیمتوں میں تبدیلیوں کی پیمائش کرتا ہے۔ بنیادی سال حوالہ نقطہ ہے، اور اس کی انڈیکس ویلیو ہمیشہ 100 پر سیٹ ہوتی ہے۔ لہذا، بعد کے سال کے لیے 100 کا پرائس انڈیکس کا مطلب ہے کہ قیمتیں، اوسطاً، بنیادی سال سے تبدیل نہیں ہوئی ہیں۔"
  },
  {
    "id": 100,
    "question": "Identify the true statement regarding \"the price indices\" (TSTET 02 Jan 2025)\n\"پرائس انڈیکس\" کے بارے میں درست بیان کی نشاندہی کریں",
    "options": [
      "Price indices can only compare prices in one location\nپرائس انڈیکس صرف ایک جگہ پر قیمتوں کا موازنہ کر سکتے ہیں",
      "Price indices show percentage of change in prices over time\nپرائس انڈیکس وقت کے ساتھ قیمتوں میں تبدیلی کی فیصد کو ظاہر کرتے ہیں",
      "Price indices are only useful for consumer goods\nپرائس انڈیکس صرف صارفین کی اشیاء کے لیے مفید ہیں",
      "Price indices do not reflect changes in the economy\nپرائس انڈیکس معیشت میں تبدیلیوں کی عکاسی نہیں کرتے"
    ],
    "correctAnswer": 1,
    "explanation": "پرائس انڈیکس کا بنیادی کام ایک بنیادی مدت کے مقابلے میں وقت کے ساتھ اشیاء اور خدمات کی ایک مقررہ ٹوکری کی مجموعی قیمت کی سطح میں تبدیلی کو ٹریک کرنا ہے۔ یہ اس تبدیلی کو فیصد کے طور پر ظاہر کرتا ہے، جو افراط زر یا تنزلی کی نشاندہی کرتا ہے۔"
  },
  {
    "id": 101,
    "question": "In India, the companies that run factories or businesses have to pay this type of tax on the profits of that company (TSTET 02 Jan 2025)\nہندوستان میں، فیکٹریاں یا کاروبار چلانے والی کمپنیوں کو اس کمپنی کے منافع پر اس قسم کا ٹیکس ادا کرنا پڑتا ہے",
    "options": [
      "Goods and Services Tax\nگڈز اینڈ سروسز ٹیکس",
      "Corporate tax\nکارپوریٹ ٹیکس",
      "Capital Gains Tax\nکیپٹل گینز ٹیکس",
      "Customs Duty\nکسٹم ڈیوٹی"
    ],
    "correctAnswer": 1,
    "explanation": "کارپوریٹ ٹیکس ایک براہ راست ٹیکس ہے جو کارپوریٹ اداروں کو اپنے کاروبار سے حاصل ہونے والی خالص آمدنی یا منافع پر لگایا جاتا ہے۔ یہ حکومت کے لیے آمدنی کا ایک بڑا ذریعہ ہے۔"
  },
  {
    "id": 102,
    "question": "How did the early bankers in India like the Jagatseths and Shahs achieve banking system with their receipts? (TSTET 02 Jan 2025)\nہندوستان میں جگت سیٹھوں اور شاہوں جیسے ابتدائی بینکرز نے اپنی رسیدوں کے ساتھ بینکنگ کا نظام کیسے حاصل کیا؟",
    "options": [
      "They were the first to mint coins\nوہ سکے بنانے والے پہلے تھے",
      "Their receipts were accepted throughout the country\nان کی رسیدیں پورے ملک میں قبول کی جاتی تھیں",
      "They regulated the value of gold\nانہوں نے سونے کی قیمت کو منظم کیا",
      "They established the first national bank\nانہوں نے پہلا قومی بینک قائم کیا"
    ],
    "correctAnswer": 1,
    "explanation": "جگت سیٹھ جیسے دیسی بینکرز ڈپازٹس کے لیے رسیدیں (ہنڈیاں) جاری کرکے کام کرتے تھے۔ ان ہنڈیوں پر وسیع پیمانے پر بھروسہ کیا جاتا تھا اور ملک بھر میں تجارت کے لیے تبادلے کے ذریعہ کے طور پر قبول کیا جاتا تھا، جو جدید چیک یا بینک ڈرافٹ کی طرح کام کرتی تھیں۔"
  },
  {
    "id": 103,
    "question": "The key feature of the Basic Savings Bank Deposit Account (BSBDA) is (TSTET 02 Jan 2025)\nبنیادی بچت بینک ڈپازٹ اکاؤنٹ (BSBDA) کی کلیدی خصوصیت ہے",
    "options": [
      "It requires a minimum balance of at least Rs. 1,000\nاس میں کم از کم 1,000 روپے کا بیلنس درکار ہوتا ہے",
      "It can have zero or very low minimum balance\nاس میں صفر یا بہت کم کم از کم بیلنس ہو سکتا ہے",
      "It allows unlimited withdrawals each month\nیہ ہر ماہ لامحدود رقم نکالنے کی اجازت دیتا ہے",
      "It is available only to individuals over 18 years\nیہ صرف 18 سال سے زیادہ عمر کے افراد کے لیے دستیاب ہے"
    ],
    "correctAnswer": 1,
    "explanation": "بنیادی بچت بینک ڈپازٹ اکاؤنٹ (BSBDA) کو آر بی آئی نے مالی شمولیت کو فروغ دینے کے لیے متعارف کرایا تھا۔ اس کی اہم خصوصیت یہ ہے کہ اس میں کسی کم از کم بیلنس کی ضرورت نہیں ہوتی، جس سے بینکنگ معاشرے کے تمام طبقات کے لیے قابل رسائی ہو جاتی ہے، حالانکہ اس میں کچھ لین دین کی حدود ہیں۔"
  },
  {
    "id": 104,
    "question": "A Small Account under simplified KYC norms is (TSTET 02 Jan 2025)\nآسان KYC اصولوں کے تحت ایک چھوٹا اکاؤنٹ ہے",
    "options": [
      "An account exclusively meant for business transactions\nایک اکاؤنٹ جو خصوصی طور پر کاروباری لین دین کے لیے ہے",
      "A Basic Savings Bank Deposit Account treated as a Small Account\nایک بنیادی بچت بینک ڈپازٹ اکاؤنٹ جسے ایک چھوٹا اکاؤنٹ سمجھا جاتا ہے",
      "An account that requires extensive documentation\nایک اکاؤنٹ جس میں وسیع دستاویزات کی ضرورت ہوتی ہے",
      "An account with no withdrawal limits\nایک اکاؤنٹ جس میں رقم نکالنے کی کوئی حد نہیں ہے"
    ],
    "correctAnswer": 1,
    "explanation": "'چھوٹا اکاؤنٹ' ایک قسم کا بنیادی بچت بینک ڈپازٹ اکاؤنٹ (BSBDA) ہے جسے آسان 'اپنے کسٹمر کو جانیں' (KYC) اصولوں کے ساتھ کھولا جا سکتا ہے، ان افراد کے لیے جن کے پاس باقاعدہ اکاؤنٹ کے لیے درکار تمام سرکاری دستاویزات نہیں ہو سکتیں، اس طرح مالی شمولیت کو فروغ ملتا ہے۔"
  },
  {
    "id": 105,
    "question": "The purpose of the National Food Security Act enacted in 2013 was (TSTET 02 Jan 2025)\n2013 میں نافذ کیے گئے قومی فوڈ سیکورٹی ایکٹ کا مقصد تھا",
    "options": [
      "To promote organic farming\nنامیاتی کھیتی کو فروغ دینا",
      "To increase agricultural exports\nزرعی برآمدات میں اضافہ کرنا",
      "To regulate food prices\nخوراک کی قیمتوں کو منظم کرنا",
      "To legalize people's Right to Food\nلوگوں کے خوراک کے حق کو قانونی حیثیت دینا"
    ],
    "correctAnswer": 3,
    "explanation": "قومی فوڈ سیکورٹی ایکٹ، 2013 کا مقصد ہندوستان کی تقریباً دو تہائی آبادی کو سبسڈی والے اناج فراہم کرنا ہے۔ یہ موجودہ فوڈ سیکورٹی پروگراموں کو قانونی حقوق میں تبدیل کرتا ہے، جس سے خوراک کا حق ایک قابل سماعت حق بن جاتا ہے۔"
  },
  {
    "id": 106,
    "question": "One of the following factors of production comes under 'Working Capital\" (TSTET 02 Jan 2025)\nپیداوار کے درج ذیل عوامل میں سے ایک 'ورکنگ کیپیٹل' کے تحت آتا ہے",
    "options": [
      "Tools and machines\nاوزار اور مشینیں",
      "Raw materials and money for production\nپیداوار کے لیے خام مال اور پیسہ",
      "Land and natural resources\nزمین اور قدرتی وسائل",
      "Long-term investments\nطویل مدتی سرمایہ کاری"
    ],
    "correctAnswer": 1,
    "explanation": "ورکنگ کیپیٹل ان اثاثوں سے مراد ہے جو پیداواری عمل میں استعمال ہو جاتے ہیں یا نقد میں تبدیل ہو جاتے ہیں۔ اس میں خام مال اور روزمرہ کے آپریشنل اخراجات کے لیے درکار رقم شامل ہے۔ اوزار اور مشینوں کو فکسڈ کیپیٹل سمجھا جاتا ہے۔"
  },
  {
    "id": 107,
    "question": "Before the mid-20th century, production was primarily organized (TSTET 02 Jan 2025)\n20ویں صدی کے وسط سے پہلے، پیداوار بنیادی طور پر منظم تھی",
    "options": [
      "Exclusively by multinational corporations\nخصوصی طور پر ملٹی نیشنل کارپوریشنز کے ذریعے",
      "Within individual countries\nانفرادی ممالک کے اندر",
      "Globally, with a focus on international trade\nعالمی سطح پر، بین الاقوامی تجارت پر توجہ کے ساتھ",
      "Through informal local markets\nغیر رسمی مقامی بازاروں کے ذریعے"
    ],
    "correctAnswer": 1,
    "explanation": "20ویں صدی کے نصف آخر میں عالمگیریت اور ملٹی نیشنل کارپوریشنز (MNCs) کے عروج سے پہلے، پیداواری سرگرمیاں بڑی حد تک قومی سرحدوں کے اندر محدود تھیں۔ اگرچہ بین الاقوامی تجارت موجود تھی، لیکن پیچیدہ عالمی سپلائی چین معمول نہیں تھیں۔"
  },
  {
    "id": 108,
    "question": "GDP primarily measures (TSTET 02 Jan 2025)\nجی ڈی پی بنیادی طور پر پیمائش کرتا ہے",
    "options": [
      "The income of all citizens in a country only\nصرف ایک ملک میں تمام شہریوں کی آمدنی",
      "The total number of goods produced in a country only\nصرف ایک ملک میں پیدا ہونے والی اشیاء کی کل تعداد",
      "The market value of all final goods and services produced\nپیدا ہونے والی تمام حتمی اشیاء اور خدمات کی مارکیٹ ویلیو",
      "The available number of service sector jobs only\nصرف سروس سیکٹر میں دستیاب ملازمتوں کی تعداد"
    ],
    "correctAnswer": 2,
    "explanation": "مجموعی گھریلو پیداوار (GDP) ایک مخصوص مدت کے دوران کسی ملک کی سرحدوں کے اندر پیدا ہونے والی تمام حتمی اشیاء اور خدمات کی مالیاتی مارکیٹ ویلیو کی پیمائش کرتی ہے۔ یہ کسی ملک کی اقتصادی صحت کے جامع اسکور کارڈ کے طور پر کام کرتی ہے۔"
  },
  {
    "id": 109,
    "question": "Match the following: A) Chanukya B) Amartya Sen C) Mother Theressa with their respective works/establishments. (TSTET 02 Jan 2025)\nدرج ذیل کو ملائیں: A) چانکیہ B) امرتیہ سین C) مدر ٹریسا کو ان کے متعلقہ کاموں/اداروں کے ساتھ۔",
    "options": [
      "A-i (Nirmal Hruday); B-ii (Communist League); C-iii (Arthashastra)\nA-i (نرمل ہردے)؛ B-ii (کمیونسٹ لیگ)؛ C-iii (ارتھ شاستر)",
      "A-iii (Arthashastra); B-ii (Communist League); C-iv (The ideal of Justice)\nA-iii (ارتھ شاستر)؛ B-ii (کمیونسٹ لیگ)؛ C-iv (دی آئیڈیل آف جسٹس)",
      "A-iii (Arthashastra); B-iv (The ideal of Justice); C-ii (Communist League)\nA-iii (ارتھ شاستر)؛ B-iv (دی آئیڈیل آف جسٹس)؛ C-ii (کمیونسٹ لیگ)",
      "A-iv (The ideal of Justice); B-iii (Arthashastra); C-i (Nirmal Hruday)\nA-iv (دی آئیڈیل آف جسٹس)؛ B-iii (ارتھ شاستر)؛ C-i (نرمل ہردے)"
    ],
    "correctAnswer": 2,
    "explanation": "صحیح جوڑیاں ہیں: چانکیہ نے 'ارتھ شاستر' لکھی۔ امرتیہ سین نے 'دی آئیڈیا آف جسٹس' لکھی۔ مدر ٹریسا نے نرمل ہردے کی بنیاد رکھی۔ امتحان میں فراہم کردہ آپشن میں ایک ٹائپو ہے، جس میں مدر ٹریسا کو غلط آئٹم سے جوڑا گیا ہے، لیکن چانکیہ اور امرتیہ سین کو صحیح طور پر جوڑا گیا ہے۔"
  },
  {
    "id": 110,
    "question": "To study the topic 'Climate', it is essential to know about the temperature, pressure of atmosphere; level of humidity and rainfall. For this, knowledge of this subject is required along with social science (TSTET 02 Jan 2025)\n'موسمیات' کے موضوع کا مطالعہ کرنے کے لیے، درجہ حرارت، فضا کا دباؤ؛ نمی کی سطح اور بارش کے بارے میں جاننا ضروری ہے۔ اس کے لیے، سماجی سائنس کے ساتھ اس مضمون کا علم بھی ضروری ہے",
    "options": [
      "Life Science\nحیاتیاتی سائنس",
      "Physical Science\nطبعی سائنس",
      "Physical Education\nجسمانی تعلیم",
      "Work Education\nکام کی تعلیم"
    ],
    "correctAnswer": 1,
    "explanation": "موسمیات کے مطالعہ میں طبعی مظاہر جیسے درجہ حرارت، فضائی دباؤ، نمی اور بارش کو سمجھنا شامل ہے۔ یہ طبعی سائنس، خاص طور پر طبیعیات اور طبعی جغرافیہ میں بنیادی تصورات ہیں، جو اس کے علم کو ضروری بناتے ہیں۔"
  },
  {
    "id": 111,
    "question": "Choose the correct statements among the following related to aims and objectives: A) Aims are general and objectives are specific. B) Aims are steps to achieve the objectives. C) The scope of aims is broad and the scope of objectives is limited (TSTET 02 Jan 2025)\nمقاصد و اہداف سے متعلق درج ذیل میں سے درست بیانات کا انتخاب کریں: A) اہداف عمومی ہوتے ہیں اور مقاصد مخصوص ہوتے ہیں۔ B) اہداف مقاصد کو حاصل کرنے کے اقدامات ہیں۔ C) اہداف کا دائرہ وسیع اور مقاصد کا دائرہ محدود ہوتا ہے",
    "options": [
      "A & C only\nصرف A اور C",
      "A & B only\nصرف A اور B",
      "B & C only\nصرف B اور C",
      "A, B & C\nA، B اور C"
    ],
    "correctAnswer": 0,
    "explanation": "تعلیمی منصوبہ بندی میں، اہداف مقصد کے وسیع، طویل مدتی بیانات ہوتے ہیں، جبکہ مقاصد مخصوص، قابل پیمائش، قلیل مدتی اہداف ہوتے ہیں۔ لہذا، اہداف وسیع دائرہ کار کے ساتھ عمومی ہوتے ہیں (A, C درست ہیں)، اور مقاصد اہداف کو حاصل کرنے کے اقدامات ہیں، نہ کہ اس کے برعکس (جس سے B غلط ہو جاتا ہے)۔"
  },
  {
    "id": 112,
    "question": "The active verb 'Reflect' is an example for this level of knowledge dimension, which is in evaluating category of cognitive process dimension (TSTET 02 Jan 2025)\nفعال فعل 'غور و فکر کرنا' علمی جہت کے اس درجے کی ایک مثال ہے، جو علمی عمل کے جہت کی تشخیصی قسم میں ہے",
    "options": [
      "Conceptual knowledge\nتصوراتی علم",
      "Procedural knowledge\nطریقہ کار کا علم",
      "Factual knowledge\nحقیقی علم",
      "Metacognitive knowledge\nماورائے علمی علم"
    ],
    "correctAnswer": 3,
    "explanation": "بلوم کی نظر ثانی شدہ درجہ بندی میں، 'غور و فکر' 'تشخیص' کے علمی عمل کے تحت آتا ہے۔ اس عمل کے لیے ماورائے علمی علم کی ضرورت ہوتی ہے، جو کسی کے اپنے سوچنے کے عمل کا علم ہے۔ اپنے سیکھنے اور کارکردگی پر غور و فکر کرنا ماورائے علم کا ایک کلیدی پہلو ہے۔"
  },
  {
    "id": 113,
    "question": "\"All are equal before law\" explain with the illustration: This is one of the activity to achieve this academic standard (TSTET 02 Jan 2025)\n\"قانون کے سامنے سب برابر ہیں\" مثال کے ساتھ وضاحت کریں: یہ اس تعلیمی معیار کو حاصل کرنے کی سرگرمیوں میں سے ایک ہے",
    "options": [
      "Conceptual understanding\nتصوراتی تفہیم",
      "Understanding and interpreting by reading the given text\nدیئے گئے متن کو پڑھ کر سمجھنا اور تشریح کرنا",
      "Information gathering Skills\nمعلومات جمع کرنے کی مہارتیں",
      "Appreciation and Sensitivity\nتعریف اور حساسیت"
    ],
    "correctAnswer": 0,
    "explanation": "یہ تعلیمی کام 'تصوراتی تفہیم' کو ہدف بناتا ہے۔ اس میں طالب علم سے یہ مطالبہ کیا جاتا ہے کہ وہ صرف جملے کو یاد کرنے کے بجائے، اس کی وضاحت کرکے اور متعلقہ مثالیں فراہم کرکے \"قانون کے سامنے سب برابر ہیں\" کے تصور کی گہری سمجھ کا مظاہرہ کرے۔"
  },
  {
    "id": 114,
    "question": "This policy/curriculum frame work has suggested that instead of 'civics', the term 'political science' is to be used (TSTET 02 Jan 2025)\nاس پالیسی/نصابی فریم ورک نے تجویز دی ہے کہ 'شہریات' کے بجائے 'سیاسیات' کی اصطلاح استعمال کی جائے",
    "options": [
      "National Policy on Education - 1986\nقومی تعلیمی پالیسی - 1986",
      "New Education Policy - 2020\nنئی تعلیمی پالیسی - 2020",
      "National curriculum framework 2000\nقومی نصابی فریم ورک 2000",
      "National Curriculum frame work - 2005\nقومی نصابی فریم ورک - 2005"
    ],
    "correctAnswer": 3,
    "explanation": "قومی نصابی فریم ورک (NCF) 2005 نے 'شہریات' سے 'سیاسیات' کی طرف منتقلی کی سفارش کی تاکہ صرف حکومتی ڈھانچے پر توجہ مرکوز کرنے کے بجائے طاقت، سیاسی عمل اور جمہوری اصولوں کے زیادہ متحرک مطالعہ کی حوصلہ افزائی کی جا سکے۔"
  },
  {
    "id": 115,
    "question": "\"A teacher appointed shall complete entire curriculum with in the specified time\" - It is mentioned in this section of Right to Education (RTE) Act - 2009 (TSTET 02 Jan 2025)\n\"ایک مقرر کردہ استاد مقررہ وقت کے اندر پورا نصاب مکمل کرے گا\" - یہ حق تعلیم (RTE) ایکٹ - 2009 کے اس سیکشن میں ذکر کیا گیا ہے",
    "options": [
      "Section24 (1) (d)\nسیکشن 24 (1) (d)",
      "Section24 (1) (C)\nسیکشن 24 (1) (C)",
      "Section - 25 (1)\nسیکشن - 25 (1)",
      "Section29(2) (f)\nسیکشن 29 (2) (f)"
    ],
    "correctAnswer": 1,
    "explanation": "بچوں کے مفت اور لازمی تعلیم کے حق کا ایکٹ (RTE)، 2009 کا سیکشن 24، اساتذہ کے فرائض کا خاکہ پیش کرتا ہے۔ خاص طور پر، سیکشن 24(1)(c) یہ حکم دیتا ہے کہ ایک استاد \"مقررہ وقت کے اندر پورا نصاب مکمل کرے گا۔\""
  },
  {
    "id": 116,
    "question": "'War equipments', and 'dictionary of geography are the examples of these sources respectively (TSTET 02 Jan 2025)\n'جنگی سازوسامان'، اور 'جغرافیہ کی لغت' بالترتیب ان ذرائع کی مثالیں ہیں",
    "options": [
      "Primary source, Secondary source\nبنیادی ماخذ، ثانوی ماخذ",
      "Secondary source, Primary source\nثانوی ماخذ، بنیادی ماخذ",
      "Both are Primary sources\nدونوں بنیادی ماخذ ہیں",
      "Both are Secondary sources\nدونوں ثانوی ماخذ ہیں"
    ],
    "correctAnswer": 0,
    "explanation": "ایک مخصوص دور کا جنگی سازوسامان زیر مطالعہ وقت کا ایک طبعی نمونہ ہے، جو اسے ایک بنیادی ماخذ بناتا ہے۔ جغرافیہ کی لغت ایک حوالہ جاتی کام ہے جو دوسرے ذرائع سے معلومات کو مرتب اور تشریح کرتی ہے، جو اسے ایک ثانوی ماخذ بناتی ہے۔"
  },
  {
    "id": 117,
    "question": "Choose the correct statements among the following related to cooperative learning: A) Cooperative learning believes in group efforts and cooperation among learners. B) Cooperative learning encourages individual goals rather than group goals. C) Cooperative learning emphasises social learning (TSTET 02 Jan 2025)\nکوآپریٹو لرننگ سے متعلق درج ذیل میں سے درست بیانات کا انتخاب کریں: A) کوآپریٹو لرننگ گروہی کوششوں اور سیکھنے والوں کے درمیان تعاون پر یقین رکھتی ہے۔ B) کوآپریٹو لرننگ گروہی اہداف کے بجائے انفرادی اہداف کی حوصلہ افزائی کرتی ہے۔ C) کوآپریٹو لرننگ سماجی تعلیم پر زور دیتی ہے",
    "options": [
      "A. B & C\nA، B اور C",
      "A & B only\nصرف A اور B",
      "B & C only\nصرف B اور C",
      "A & C only\nصرف A اور C"
    ],
    "correctAnswer": 3,
    "explanation": "کوآپریٹو لرننگ گروہی کوشش، تعاون، اور سماجی تعامل پر مبنی ہے (بیانات A اور C درست ہیں)۔ یہ مشترکہ گروہی اہداف اور باہمی جوابدہی پر زور دیتی ہے، نہ کہ انفرادی اہداف پر (جس سے بیان B غلط ہو جاتا ہے)۔"
  },
  {
    "id": 118,
    "question": "Choose the correct statements among the following related to concept mapping: A) A concept map visually illustrates the relationships between concepts and ideas. B) Concept maps are a way to develop logical thinking and study skills. C) Concept maps have cross links or relationships between concepts in different segments/domains. (TSTET 02 Jan 2025)\nکانسیپٹ میپنگ سے متعلق درج ذیل میں سے درست بیانات کا انتخاب کریں: A) ایک کانسیپٹ میپ تصورات اور خیالات کے درمیان تعلقات کو بصری طور پر واضح کرتا ہے۔ B) کانسیپٹ میپ منطقی سوچ اور مطالعہ کی مہارتوں کو فروغ دینے کا ایک طریقہ ہے۔ C) کانسیپٹ میپ میں مختلف حصوں/ڈومینز میں تصورات کے درمیان کراس لنکس یا تعلقات ہوتے ہیں۔",
    "options": [
      "A & B only\nصرف A اور B",
      "B & C only\nصرف B اور C",
      "A & C only\nصرف A اور C",
      "A, B & C\nA، B اور C"
    ],
    "correctAnswer": 3,
    "explanation": "تینوں بیانات کانسیپٹ میپنگ کو صحیح طریقے سے بیان کرتے ہیں۔ یہ ایک بصری ٹول ہے جو خیالات کے درمیان تعلقات کو ظاہر کرتا ہے (A)، منطقی سوچ کو فروغ دینے میں مدد کرتا ہے (B)، اور مختلف ڈومینز میں تصورات کو جوڑنے کے لیے کراس لنکس کا استعمال کرتا ہے (C)۔"
  },
  {
    "id": 119,
    "question": "Choose the correct statements among the following related to main objectives of Continuous Comprehensive Evaluation (CCE): A) To make evaluation an integral part of teaching learning process. B) To maintain desired standard of attainment. C) To provide scope for self-evaluation (TSTET 02 Jan 2025)\nمسلسل جامع تشخیص (CCE) کے اہم مقاصد سے متعلق درج ذیل میں سے درست بیانات کا انتخاب کریں: A) تشخیص کو تدریسی عمل کا ایک لازمی حصہ بنانا۔ B) حصولیابی کے مطلوبہ معیار کو برقرار رکھنا۔ C) خود تشخیصی کے لیے گنجائش فراہم کرنا",
    "options": [
      "A & B only\nصرف A اور B",
      "B & C only\nصرف B اور C",
      "A & C only\nصرف A اور C",
      "A, B & C\nA، B اور C"
    ],
    "correctAnswer": 3,
    "explanation": "CCE کے مقاصد میں تشخیص کو تدریسی عمل کے ساتھ مربوط کرنا (A)، کامیابی کے معیار کو بہتر بنانے اور برقرار رکھنے کے لیے فیڈ بیک کا استعمال کرنا (B)، اور طلباء کو خود تشخیصی کے ذریعے اپنے سیکھنے کو سمجھنے کے لیے بااختیار بنانا (C) شامل ہیں۔"
  },
  {
    "id": 120,
    "question": "A social science teacher organised cleanliness camp in a nearby village with school students. This activity relates to (TSTET 02 Jan 2025)\nایک سماجی سائنس کے استاد نے اسکول کے طلباء کے ساتھ قریبی گاؤں میں صفائی کیمپ کا اہتمام کیا۔ یہ سرگرمی متعلق ہے",
    "options": [
      "Bringing community to school\nکمیونٹی کو اسکول لانا",
      "Taking the school to community\nاسکول کو کمیونٹی تک لے جانا",
      "Implementation of higher authorities order\nاعلیٰ حکام کے حکم پر عمل درآمد",
      "It is one of the duties of a teacher\nیہ استاد کے فرائض میں سے ایک ہے"
    ],
    "correctAnswer": 1,
    "explanation": "یہ سرگرمی کمیونٹی پر مبنی سیکھنے کی ایک مثال ہے، جو مؤثر طریقے سے اسکول کو کمیونٹی تک لے جاتی ہے۔ یہ سیکھنے کے ماحول کو کلاس روم سے باہر بڑھاتی ہے، تعلیمی تصورات کو حقیقی دنیا کی سماجی ذمہ داری سے جوڑتی ہے۔"
  },
  {
    "id": 121,
    "question": "In India, while preparing maps we usually follow the conventions used by the (TSTET 05 Jan 2025)\nہندوستان میں، نقشے تیار کرتے وقت ہم عام طور پر ان کنونشنز کی پیروی کرتے ہیں جو استعمال کیے جاتے ہیں",
    "options": [
      "Indian Meteorological Department\nانڈین میٹیورولوجیکل ڈیپارٹمنٹ",
      "National Mineral Development Corporation\nنیشنل منرل ڈیولپمنٹ کارپوریشن",
      "Survey of India\nسروے آف انڈیا",
      "Indian Geomatics Research Institute\nانڈین جیومیٹکس ریسرچ انسٹی ٹیوٹ"
    ],
    "correctAnswer": 2,
    "explanation": "سروے آف انڈیا ملک کی قومی نقشہ سازی ایجنسی ہے جو محکمہ سائنس اور ٹیکنالوجی کے تحت کام کرتی ہے۔ یہ ہندوستان کے تمام ٹوپوگرافیکل کنٹرول، سروے، اور نقشہ سازی کے لیے ذمہ دار ہے، اور یہ ملک میں تیار کردہ نقشوں کے لیے کنونشنز اور معیارات مرتب کرتا ہے۔"
  },
  {
    "id": 122,
    "question": "The Sun's rays that reach the ground DO NOT heat the earth's surface uniformly, because of (TSTET 05 Jan 2025)\nسورج کی وہ شعاعیں جو زمین تک پہنچتی ہیں، زمین کی سطح کو یکساں طور پر گرم نہیں کرتیں، اس کی وجہ ہے",
    "options": [
      "The vertical fall of Sun's rays on the surface of the earth\nزمین کی سطح پر سورج کی شعاعوں کا عمودی طور پر گرنا",
      "The reflection of solar energy by the earth's atmosphere\nزمین کی فضا کے ذریعے شمسی توانائی کا انعکاس",
      "The Curved nature of the earth's surface\nزمین کی سطح کی خمیدہ نوعیت",
      "The fall of harmful ultra violet rays of the sun on the surface of the earth\nسورج کی نقصان دہ بالائے بنفشی شعاعوں کا زمین کی سطح پر گرنا"
    ],
    "correctAnswer": 2,
    "explanation": "زمین کی کروی شکل کی وجہ سے، سورج کی روشنی سطح پر مختلف زاویوں سے پڑتی ہے۔ خط استوا پر، شعاعیں زیادہ براہ راست ہوتی ہیں، جس سے حرارت مرکوز ہوتی ہے۔ قطبین کی طرف، شعاعیں ایک ترچھے زاویے سے ٹکراتی ہیں، جس سے توانائی کی اتنی ہی مقدار ایک بڑے رقبے پر پھیل جاتی ہے، جس کے نتیجے میں کم شدید حرارت پیدا ہوتی ہے۔"
  },
  {
    "id": 123,
    "question": "Coriolis effect is responsible for (TSTET 05 Jan 2025)\nکوریولس اثر اس کے لیے ذمہ دار ہے",
    "options": [
      "Deflecting of winds towards right in the northern hemisphere and towards left in the southern hemisphere\nشمالی نصف کرہ میں ہواؤں کا دائیں طرف اور جنوبی نصف کرہ میں بائیں طرف مڑنا",
      "Deflecting of winds towards right in the southern hemisphere and towards left in the northern hemisphere\nجنوبی نصف کرہ میں ہواؤں کا دائیں طرف اور شمالی نصف کرہ میں بائیں طرف مڑنا",
      "Deflecting of winds towards right in the northern hemisphere and also towards right in the southern hemisphere\nشمالی نصف کرہ میں ہواؤں کا دائیں طرف اور جنوبی نصف کرہ میں بھی دائیں طرف مڑنا",
      "Deflecting of winds towards left in the northern hemisphere and also towards left in the southern hemisphere\nشمالی نصف کرہ میں ہواؤں کا بائیں طرف اور جنوبی نصف کرہ میں بھی بائیں طرف مڑنا"
    ],
    "correctAnswer": 0,
    "explanation": "کوریولس اثر، جو زمین کی گردش کی وجہ سے ہوتا ہے، حرکت کرتی ہوئی اشیاء (جیسے ہوا کے دھارے) کو شمالی نصف کرہ میں دائیں طرف اور جنوبی نصف کرہ میں بائیں طرف موڑ دیتا ہے۔ یہ موسمیات اور بحریات میں ایک بنیادی اصول ہے۔"
  },
  {
    "id": 124,
    "question": "Identify the INCORRECT statement regarding 'Thar Desert' (TSTET 05 Jan 2025)\n'صحرائے تھر' کے بارے میں غلط بیان کی نشاندہی کریں",
    "options": [
      "The Thar Desert has an arid climate with very low vegetation\nصحرائے تھر میں بہت کم نباتات کے ساتھ خشک آب و ہوا ہے",
      "Saraswathi is the only river flowing in this Desert\nسرسوتی اس صحرا میں بہنے والا واحد دریا ہے",
      "It is located on the leeward side of the Aravalli Mountains\nیہ اراولی پہاڑوں کے لیورڈ سائیڈ پر واقع ہے",
      "Here, the Streams appear during rainy season and disappear soon after the end of the season\nیہاں، ندیاں بارش کے موسم میں نمودار ہوتی ہیں اور موسم کے اختتام کے فوراً بعد غائب ہو جاتی ہیں"
    ],
    "correctAnswer": 1,
    "explanation": "لونی دریا واحد اہم دریا ہے جو صحرائے تھر سے گزرتا ہے۔ سرسوتی ایک افسانوی یا قدیم دریا ہے جس کے بارے میں خیال کیا جاتا ہے کہ وہ کبھی اس علاقے سے بہتا تھا لیکن اب موجود نہیں ہے۔ لہٰذا، یہ بیان کہ سرسوتی واحد دریا ہے، غلط ہے۔"
  },
  {
    "id": 125,
    "question": "Which of the following statement correctly describes the term 'Weather'? (TSTET 05 Jan 2025)\nمندرجہ ذیل میں سے کون سا بیان 'موسم' کی اصطلاح کو صحیح طور پر بیان کرتا ہے؟",
    "options": [
      "It is a description of the condition of the atmosphere for small period of time\nیہ مختصر مدت کے لیے فضا کی حالت کی تفصیل ہے",
      "It is a description of the atmospheric conditions prevailing in the world for a period of one year\nیہ ایک سال کی مدت کے لیے دنیا میں رائج ماحولیاتی حالات کی تفصیل ہے",
      "It is a description of the average atmospheric conditions for specific areas over a long period of time\nیہ ایک طویل مدت کے لیے مخصوص علاقوں کے اوسط ماحولیاتی حالات کی تفصیل ہے",
      "The atmospheric conditions that prevail over a long period of one hundred years and more\nوہ ماحولیاتی حالات جو ایک سو سال اور اس سے زیادہ کی طویل مدت تک غالب رہتے ہیں"
    ],
    "correctAnswer": 0,
    "explanation": "موسم سے مراد کسی مخصوص وقت اور جگہ پر فضا کی حالت ہے، جس میں درجہ حرارت، بارش اور ہوا جیسے عوامل شامل ہیں۔ یہ قلیل مدتی حالات کو بیان کرتا ہے، جبکہ آب و ہوا طویل مدتی ماحولیاتی نمونوں کو بیان کرتی ہے۔"
  },
  {
    "id": 126,
    "question": "Fruits such as oranges, figs, olives and grapes are most commonly cultivated in these regions (TSTET 05 Jan 2025)\nپھل جیسے کہ سنگترے، انجیر، زیتون اور انگور عام طور پر ان علاقوں میں کاشت کیے جاتے ہیں",
    "options": [
      "Coniferous Forest region\nکونیفرس جنگلات کا علاقہ",
      "Mediterranean Vegetation Region\nبحیرہ روم کے نباتات کا علاقہ",
      "Temperate Evergreen Forest Region\nمعتدل سدا بہار جنگلات کا علاقہ",
      "Tropical Deciduous Forest Region\nگرم مرطوب پت جھڑی جنگلات کا علاقہ"
    ],
    "correctAnswer": 1,
    "explanation": "بحیرہ روم کی آب و ہوا، جس کی خصوصیت گرم، خشک گرمیاں اور ہلکی، گیلی سردیاں ہیں، کھٹے پھل، زیتون، انجیر اور انگور اگانے کے لیے مثالی ہے۔ اس قسم کی زراعت بحیرہ روم کے آس پاس کے علاقوں کی ایک پہچان ہے۔"
  },
  {
    "id": 127,
    "question": "The Equator is NOT passing through one of the following countries (TSTET 05 Jan 2025)\nخط استوا مندرجہ ذیل ممالک میں سے کسی ایک سے نہیں گزرتا",
    "options": [
      "Democratic Republic of Congo\nجمہوری جمہوریہ کانگو",
      "Columbia\nکولمبیا",
      "Brazil\nبرازیل",
      "Sri Lanka\nسری لنکا"
    ],
    "correctAnswer": 3,
    "explanation": "خط استوا 13 ممالک سے گزرتا ہے، جن میں جمہوری جمہوریہ کانگو، کولمبیا اور برازیل شامل ہیں۔ سری لنکا مکمل طور پر شمالی نصف کرہ میں واقع ہے، جو خط استوا سے چند ڈگری شمال میں ہے۔"
  },
  {
    "id": 128,
    "question": "In terms of light years, the distance between the Earth and the Sun is (TSTET 05 Jan 2025)\nنوری سالوں کے لحاظ سے، زمین اور سورج کے درمیان فاصلہ ہے",
    "options": [
      "9.131 minutes\n9.131 منٹ",
      "7.232 minutes\n7.232 منٹ",
      "8.311 minutes\n8.311 منٹ",
      "4.124 minutes\n4.124 منٹ"
    ],
    "correctAnswer": 2,
    "explanation": "سوال میں پوچھا گیا ہے کہ سورج کی روشنی کو زمین تک پہنچنے میں کتنا وقت لگتا ہے۔ سورج سے زمین تک کے اوسط فاصلے کو دیکھتے ہوئے، سورج کی روشنی کو یہ فاصلہ طے کرنے میں تقریباً 8.3 منٹ لگتے ہیں۔"
  },
  {
    "id": 129,
    "question": "Read the following statements and choose the correct answer (TSTET 05 Jan 2025)\nA) Volcanic eruptions and the Deep Ocean Drilling projects form an important source of direct information regarding the interior of the earth\nB) The seismic activity and the gravitation force of the earth form an indirect source of information regarding the interior of the earth\nمندرجہ ذیل بیانات کو پڑھیں اور صحیح جواب کا انتخاب کریں\nA) آتش فشاں پھٹنا اور گہرے سمندر میں ڈرلنگ کے منصوبے زمین کے اندرونی حصے کے بارے میں براہ راست معلومات کا ایک اہم ذریعہ ہیں\nB) زلزلہ کی سرگرمی اور زمین کی کشش ثقل زمین کے اندرونی حصے کے بارے میں معلومات کا ایک بالواسطہ ذریعہ ہیں",
    "options": [
      "Both A and B are correct\nA اور B دونوں صحیح ہیں",
      "A is correct and B is incorrect\nA صحیح ہے اور B غلط ہے",
      "B is correct and A is incorrect\nB صحیح ہے اور A غلط ہے",
      "Both A and B are incorrect\nA اور B دونوں غلط ہیں"
    ],
    "correctAnswer": 0,
    "explanation": "بیان A صحیح ہے کیونکہ آتش فشاں کا لاوا اور گہری ڈرلنگ کے منصوبوں سے حاصل ہونے والا مواد جسمانی نمونے فراہم کرتا ہے، جو انہیں براہ راست ذرائع بناتا ہے۔ بیان B بھی صحیح ہے کیونکہ زلزلہ کی لہروں اور کشش ثقل کا تجزیہ کرکے زمین کے اندرونی حصے کی خصوصیات کا اندازہ لگایا جاتا ہے بغیر براہ راست مشاہدے کے، جو انہیں بالواسطہ ذرائع بناتا ہے۔"
  },
  {
    "id": 130,
    "question": "The eastward extension of the Central Highlands is locally known as (TSTET 05 Jan 2025)\nوسطی پہاڑی علاقوں کی مشرقی توسیع کو مقامی طور پر کہا جاتا ہے",
    "options": [
      "Bundelkhand and Baghelkhand\nبندیل کھنڈ اور بگھیل کھنڈ",
      "Chota Nagpur Plateau\nچھوٹا ناگپور سطح مرتفع",
      "Malwa Plateau\nمالوا سطح مرتفع",
      "Karbi-Anglang Plateau\nکاربی-آنگلانگ سطح مرتفع"
    ],
    "correctAnswer": 0,
    "explanation": "ہندوستان کے وسطی پہاڑی علاقے مغرب میں مالوا سطح مرتفع پر مشتمل ہیں۔ جیسے ہی وہ مشرق کی طرف پھیلتے ہیں، انہیں بندیل کھنڈ اور بگھیل کھنڈ کے سطح مرتفع کے نام سے جانا جاتا ہے۔ مزید مشرق میں چھوٹا ناگپور کا سطح مرتفع ہے۔"
  },
  {
    "id": 131,
    "question": "The Indian Peninsular Plateau is a table land composed of these rocks (TSTET 05 Jan 2025)\nہندوستانی جزیرہ نما سطح مرتفع ان چٹانوں پر مشتمل ایک میدانی علاقہ ہے",
    "options": [
      "Sedimentary and Igneous rocks\nتلچھٹی اور آتشی چٹانیں",
      "Sedimentary and Metamorphic rocks\nتلچھٹی اور रूपांतरित چٹانیں",
      "Sedimentary and Crystalline rocks\nتلچھٹی اور بلوری چٹانیں",
      "Crystalline, Igneous and Metamorphic rocks\nبلوری، آتشی اور रूपांतरित چٹانیں"
    ],
    "correctAnswer": 3,
    "explanation": "جزیرہ نما سطح مرتفع زمین کے قدیم ترین زمینی خطوں میں سے ایک ہے۔ یہ بنیادی طور پر پرانی بلوری، آتشی اور रूपांतरित چٹانوں پر مشتمل ہے، جو قدیم آتش فشانی سرگرمیوں اور اس کے بعد کی ارضیاتی تبدیلیوں کا نتیجہ ہے۔"
  },
  {
    "id": 132,
    "question": "Identify the INCORRECT statement regarding cotton crop (TSTET 05 Jan 2025)\nکپاس کی فصل کے بارے میں غلط بیان کی نشاندہی کریں",
    "options": [
      "Cotton grows well in the drier parts with black soils in the Deccan Plateau\nکپاس دکن کے سطح مرتفع میں کالی مٹی والے خشک حصوں میں اچھی طرح اگتی ہے",
      "Cotton requires high temperature, light rainfall or irrigation with 210 frost free days\nکپاس کو 210 ٹھنڈ سے پاک دنوں کے ساتھ زیادہ درجہ حرارت، ہلکی بارش یا آبپاشی کی ضرورت ہوتی ہے",
      "India is the largest producer of cotton in the world\nہندوستان دنیا میں کپاس کا سب سے بڑا پیدا کنندہ ہے",
      "Cotton is a kharief crop and its duration is 6 to 8 months\nکپاس ایک خریف کی فصل ہے اور اس کا دورانیہ 6 سے 8 ماہ ہوتا ہے"
    ],
    "correctAnswer": 2,
    "explanation": "اگرچہ ہندوستان کپاس کے سرکردہ پیدا کنندگان میں سے ایک ہے، لیکن یہ اکثر سرفہرست مقام کے لیے چین سے مقابلہ کرتا ہے اور مسلسل واحد سب سے بڑا پیدا کنندہ نہیں ہے۔ ہندوستان میں کپاس کی کاشت کے بارے میں دیگر تمام بیانات درست ہیں۔"
  },
  {
    "id": 133,
    "question": "In this phase of Agricultural Development in India, the Government of India introduced new kind of seeds to the Indian Soil which were invented in various agricultural institutions in India as well as other countries (TSTET 05 Jan 2025)\nہندوستان میں زرعی ترقی کے اس مرحلے میں، حکومت ہند نے ہندوستانی مٹی میں نئی قسم کے بیج متعارف کرائے جو ہندوستان کے ساتھ ساتھ دیگر ممالک کے مختلف زرعی اداروں میں ایجاد ہوئے تھے",
    "options": [
      "First Phase\nپہلا مرحلہ",
      "Second Phase\nدوسرا مرحلہ",
      "Third Phase\nتیسرا مرحلہ",
      "Fourth Phase\nچوتھا مرحلہ"
    ],
    "correctAnswer": 1,
    "explanation": "ہندوستان میں زرعی ترقی کا دوسرا مرحلہ، جو 1960 کی دہائی کے وسط میں شروع ہوا، سبز انقلاب کے نام سے جانا جاتا ہے۔ اس مرحلے کی خصوصیت زیادہ پیداوار دینے والی اقسام (HYV) کے بیجوں کا تعارف تھا، جس نے غذائی اناج کی پیداوار میں نمایاں اضافہ کیا۔"
  },
  {
    "id": 134,
    "question": "National Aluminium Company Limited (NALCO) is located in this state of India (TSTET 05 Jan 2025)\nنیشنل ایلومینیم کمپنی لمیٹڈ (نالکو) ہندوستان کی اس ریاست میں واقع ہے",
    "options": [
      "Chattisgarh\nچھتیس گڑھ",
      "Jharkhand\nجھارکھنڈ",
      "Odisha\nاوڈیشہ",
      "West Bengal\nمغربی بنگال"
    ],
    "correctAnswer": 2,
    "explanation": "نیشنل ایلومینیم کمپنی لمیٹڈ (نالکو) کا رجسٹرڈ دفتر اور کارپوریٹ ہیڈ کوارٹر بھونیشور، اوڈیشہ میں ہے۔ اس کے بڑے آپریشنز، بشمول باکسائٹ کی کان کنی اور ایلومینا ریفائنری، بھی اوڈیشہ میں واقع ہیں۔"
  },
  {
    "id": 135,
    "question": "These plains of India are protected from the cold winds of Central Asia during severe winter because of the Himalayan Mountains (TSTET 05 Jan 2025)\nہندوستان کے یہ میدانی علاقے شدید سردیوں کے دوران وسطی ایشیا کی سرد ہواؤں سے ہمالیہ کے پہاڑوں کی وجہ سے محفوظ رہتے ہیں",
    "options": [
      "The Sundarbans\nسندربن",
      "The Indo-Gangetic Plain\nہند-گنگا کا میدان",
      "The East Coast Plain\nمشرقی ساحلی میدان",
      "The West Coast Plain\nمغربی ساحلی میدان"
    ],
    "correctAnswer": 1,
    "explanation": "ہمالیہ کا پہاڑی سلسلہ ایک بہت بڑی موسمیاتی رکاوٹ کے طور پر کام کرتا ہے، جو وسطی ایشیا سے آنے والی یخ بستہ ہواؤں کو برصغیر پاک و ہند میں داخل ہونے سے روکتا ہے۔ یہ وسیع و عریض ہند-گنگا کے میدان کو انتہائی سرد سردیوں کا سامنا کرنے سے بچاتا ہے۔"
  },
  {
    "id": 136,
    "question": "As per Human Development Report 2021. The Human Development Index of Sri Lanka was 0.782, then Sri Lanka was in this category of Human Development (TSTET 05 Jan 2025)\nانسانی ترقی کی رپورٹ 2021 کے مطابق۔ سری لنکا کا انسانی ترقی کا اشاریہ 0.782 تھا، تو سری لنکا انسانی ترقی کے اس زمرے میں تھا",
    "options": [
      "Very High Human Development\nبہت اعلیٰ انسانی ترقی",
      "High Human Development\nاعلیٰ انسانی ترقی",
      "Moderate Human Development\nمعتدل انسانی ترقی",
      "Low Human Development\nکم انسانی ترقی"
    ],
    "correctAnswer": 1,
    "explanation": "UNDP کے انسانی ترقی کے اشاریہ (HDI) کی درجہ بندی کے مطابق، 0.700 اور 0.799 کے درمیان ایک اشاریہ کی قدر 'اعلیٰ انسانی ترقی' کے زمرے میں آتی ہے۔ لہٰذا، سری لنکا کا 0.782 کا HDI اسے اس زمرے میں رکھتا ہے۔"
  },
  {
    "id": 137,
    "question": "The Policy of Appeasement of Hitler was followed by these countries (TSTET 05 Jan 2025)\nہٹلر کی خوشامد کی پالیسی پر ان ممالک نے عمل کیا",
    "options": [
      "Great Britain and France\nبرطانیہ اور فرانس",
      "Russia and France\nروس اور فرانس",
      "China and Great Britain\nچین اور برطانیہ",
      "Great Britain and Russia\nبرطانیہ اور روس"
    ],
    "correctAnswer": 0,
    "explanation": "1930 کی دہائی میں، برطانیہ اور فرانس نے نازی جرمنی کے خلاف خوشامد کی پالیسی اپنائی، جس میں ہٹلر کے مطالبات کو سیاسی اور مادی رعایتیں دی گئیں تاکہ ایک اور بڑی جنگ سے بچا جا سکے۔ 1938 کا میونخ معاہدہ اس کی ایک بہترین مثال ہے۔"
  },
  {
    "id": 138,
    "question": "In 1806 CE, this ruler of France conquered the small independent Kingdoms of Germany and formed the Rhine Confederation (TSTET 05 Jan 2025)\n1806 عیسوی میں، فرانس کے اس حکمران نے جرمنی کی چھوٹی آزاد ریاستوں کو فتح کیا اور رائن کنفیڈریشن تشکیل دی",
    "options": [
      "Charles X\nچارلس دہم",
      "Napoleon Bonaparte\nنیپولین بوناپارٹ",
      "Napoleon III\nنیپولین سوم",
      "Louie XVIII\nلوئی ہژدہم"
    ],
    "correctAnswer": 1,
    "explanation": "1806 میں، آسٹریلٹز کی جنگ میں اپنی فتح کے بعد، نیپولین بوناپارٹ نے جرمن ریاستوں کو دوبارہ منظم کیا اور رائن کنفیڈریشن قائم کی، جو پہلی فرانسیسی سلطنت کی ماتحت ریاستوں کا ایک کنفیڈریشن تھا۔"
  },
  {
    "id": 139,
    "question": "Which of the following statements rightly describes the \"Constitutional Monarchy?\" (TSTET 05 Jan 2025)\nمندرجہ ذیل میں سے کون سا بیان \"آئینی بادشاہت\" کو صحیح طور پر بیان کرتا ہے؟",
    "options": [
      "The power of the king was not a divine right but it was granted by the Parliament\nبادشاہ کا اختیار کوئی خدائی حق نہیں تھا بلکہ اسے پارلیمنٹ نے عطا کیا تھا",
      "The power of the king was hereditary. Hence, he can enjoy all the powers\nبادشاہ کا اختیار موروثی تھا۔ لہٰذا، وہ تمام اختیارات سے لطف اندوز ہو سکتا ہے",
      "The king is elected by the people of the country, so he enjoys all rights\nبادشاہ کو ملک کے عوام منتخب کرتے ہیں، اس لیے وہ تمام حقوق سے لطف اندوز ہوتا ہے",
      "The king who was appointed by the Parliament has an absolute power\nوہ بادشاہ جسے پارلیمنٹ نے مقرر کیا تھا، مطلق العنان ہوتا ہے"
    ],
    "correctAnswer": 0,
    "explanation": "آئینی بادشاہت حکومت کی ایک شکل ہے جہاں ایک بادشاہ آئین کے دائرہ کار میں رہتے ہوئے سربراہ مملکت کے طور پر کام کرتا ہے۔ بادشاہ کے اختیارات قانون کے ذریعہ محدود ہوتے ہیں، اور وہ مطلق العنان نہیں ہوتے یا خدائی حق کے تحت حکومت نہیں کرتے ہیں۔"
  },
  {
    "id": 140,
    "question": "By the middle of the 18th century, England and other European countries had established their colonies in this part of North America (TSTET 05 Jan 2025)\n18ویں صدی کے وسط تک، انگلینڈ اور دیگر یورپی ممالک نے شمالی امریکہ کے اس حصے میں اپنی کالونیاں قائم کر لی تھیں",
    "options": [
      "Eastern Coast\nمشرقی ساحل",
      "Western Coast\nمغربی ساحل",
      "North-western Part\nشمال مغربی حصہ",
      "South-western Part\nجنوب مغربی حصہ"
    ],
    "correctAnswer": 0,
    "explanation": "شمالی امریکہ کی ابتدائی یورپی نوآبادیات، بشمول برطانیہ کی تیرہ کالونیاں، بحر اوقیانوس یا مشرقی ساحل پر مرکوز تھیں کیونکہ یہ یورپ سے قریب تھا، جس سے یہ آباد کاری اور تجارت کے لیے قابل رسائی تھا۔"
  },
  {
    "id": 141,
    "question": "In 1861. the British developed this as their centre of administration, trade and education in Western Africa (TSTET 05 Jan 2025)\n1861 میں۔ انگریزوں نے اسے مغربی افریقہ میں اپنی انتظامیہ، تجارت اور تعلیم کا مرکز بنایا",
    "options": [
      "Cape Town\nکیپ ٹاؤن",
      "Lagos\nلاگوس",
      "Free Town\nفری ٹاؤن",
      "Accra\nاکرا"
    ],
    "correctAnswer": 1,
    "explanation": "انگریزوں نے 1861 میں لاگوس پر قبضہ کر لیا، اسے کراؤن کالونی بنا دیا۔ یہ اپنی اسٹریٹجک بندرگاہ اور بڑھتی ہوئی معاشی اہمیت کی وجہ سے مغربی افریقہ میں انگریزوں کے لیے ایک اہم انتظامی اور تجارتی مرکز بن گیا۔"
  },
  {
    "id": 142,
    "question": "The primary purpose of \"Fa-Hieun's\" journey to India in the early 5th century was (TSTET 05 Jan 2025)\n5ویں صدی کے اوائل میں \"فا-ہیون\" کے ہندوستان کے سفر کا بنیادی مقصد تھا",
    "options": [
      "To establish trade routes\nتجارتی راستے قائم کرنا",
      "To study Buddhism and collect sacred texts\nبدھ مت کا مطالعہ کرنا اور مقدس متون جمع کرنا",
      "To explore the geography of India\nہندوستان کے جغرافیہ کو دریافت کرنا",
      "To spread Chinese culture\nچینی ثقافت کو پھیلانا"
    ],
    "correctAnswer": 1,
    "explanation": "فا-ہیون (فاکسیان) ایک چینی بدھ راہب تھا جس نے چندر گپت دوم کے دور میں ہندوستان کا سفر کیا۔ اس کا بنیادی مقصد بدھ مت کے صحیفے (سوتر) حاصل کرنا اور مقدس بدھ مقامات کا دورہ کرنا تھا۔"
  },
  {
    "id": 143,
    "question": "The Second Buddhist Council was held at (TSTET 05 Jan 2025)\nدوسری بدھ کونسل کا انعقاد یہاں ہوا",
    "options": [
      "Rajgir\nراجگیر",
      "Pataliputra\nپاٹلی پتر",
      "Vaishali\nویشالی",
      "Sarnath\nسارناتھ"
    ],
    "correctAnswer": 2,
    "explanation": "دوسری بدھ کونسل بدھ کے پرینروان کے تقریباً 100 سال بعد ویشالی میں منعقد ہوئی۔ یہ خانقاہی نظم و ضبط (وینایا) پر ایک تنازعہ کو حل کرنے کے لیے بلائی گئی تھی اور اس کے نتیجے میں سنگھا کے اندر پہلی بڑی تقسیم ہوئی۔"
  },
  {
    "id": 144,
    "question": "The main purpose of establishing the Dutch East India Company in India was (TSTET 05 Jan 2025)\nہندوستان میں ڈچ ایسٹ انڈیا کمپنی کے قیام کا بنیادی مقصد تھا",
    "options": [
      "To promote Christianity\nعیسائیت کو فروغ دینا",
      "To trade in spices\nمسالوں کی تجارت کرنا",
      "To Supply Guns\nبندوقیں فراہم کرنا",
      "To build military alliances\nفوجی اتحاد بنانا"
    ],
    "correctAnswer": 1,
    "explanation": "ڈچ ایسٹ انڈیا کمپنی (VOC) کا بنیادی مقصد اقتصادی تھا۔ انہوں نے مشرقی انڈیز سے کالی مرچ، لونگ اور جائفل جیسے مسالوں کی منافع بخش تجارت کو کنٹرول کرنے کی کوشش کی، جن کی یورپ میں بہت قدر تھی۔"
  },
  {
    "id": 145,
    "question": "Among the following, the famous fort associated with Shivaji Maharaj was (TSTET 05 Jan 2025)\nمندرجہ ذیل میں سے، شیواجی مہاراج سے وابستہ مشہور قلعہ تھا",
    "options": [
      "Kochi Fort\nکوچی قلعہ",
      "Raigad Fort\nرائے گڑھ قلعہ",
      "Agra Fort\nآگرہ قلعہ",
      "Gwalior Fort\nگوالیار قلعہ"
    ],
    "correctAnswer": 1,
    "explanation": "رائے گڑھ قلعہ چھترپتی شیواجی مہاراج کے تحت مراٹھا سلطنت کا دارالحکومت تھا۔ 1674 میں ان کی تاجپوشی اسی قلعے میں ہوئی تھی، اور یہ ان کی انتظامیہ کا مرکز تھا۔"
  },
  {
    "id": 146,
    "question": "The major failure of Muhammad Bin Tughlaq's reign was (TSTET 05 Jan 2025)\nمحمد بن تغلق کے دور کی سب سے بڑی ناکامی تھی",
    "options": [
      "Undertaking military campaigns in South India\nجنوبی ہندوستان میں فوجی مہمات چلانا",
      "The introduction of token currency\nٹوکن کرنسی کا تعارف",
      "Strengthening of the administrative system\nانتظامی نظام کو مضبوط کرنا",
      "Not establishing diplomatic relations with neighbouring kingdoms\nپڑوسی ریاستوں کے ساتھ سفارتی تعلقات قائم نہ کرنا"
    ],
    "correctAnswer": 1,
    "explanation": "محمد بن تغلق کا ٹوکن کرنسی کا تجربہ ان کی سب سے اہم ناکامیوں میں سے ایک سمجھا جاتا ہے۔ اس نے پیتل اور تانبے کے سکے متعارف کرائے جن کی قیمت چاندی کے سکوں کے برابر تھی، لیکن بڑے پیمانے پر جعل سازی نے کرنسی کی قدر کو تباہ کر دیا اور شدید اقتصادی خلل پیدا کیا۔"
  },
  {
    "id": 147,
    "question": "The significant contribution of Raja Raja Chola I to temple architecture was the construction of (TSTET 05 Jan 2025)\nراجا راجا چول اول کا مندر کی تعمیر میں اہم کردار تھا",
    "options": [
      "The Brihadeeswarar Temple\nبریہدیشورار مندر",
      "The Meenakshi Temple\nمیناکشی مندر",
      "The Lingaraja Temple\nلنگاراجا مندر",
      "The Shore Temple\nشور مندر"
    ],
    "correctAnswer": 0,
    "explanation": "راجا راجا چول اول نے تھانجاور میں بریہدیشورار مندر تعمیر کروایا۔ 1010 عیسوی میں مکمل ہونے والا یہ مندر دراوڑی فن تعمیر کا ایک شاہکار اور یونیسکو کا عالمی ثقافتی ورثہ ہے۔"
  },
  {
    "id": 148,
    "question": "Directive Principles of State Policy' aim to promote (TSTET 05 Jan 2025)\n'ریاستی پالیسی کے رہنما اصول' کا مقصد فروغ دینا ہے",
    "options": [
      "Political Freedom\nسیاسی آزادی",
      "Social Justice\nسماجی انصاف",
      "Economic Growth\nاقتصادی ترقی",
      "Individual Rights\nانفرادی حقوق"
    ],
    "correctAnswer": 1,
    "explanation": "ہندوستانی آئین میں ریاستی پالیسی کے رہنما اصول (DPSP) حکومت کے لیے ایک منصفانہ معاشرہ بنانے کے لیے رہنما خطوط ہیں۔ ان کا مقصد سماجی اور اقتصادی انصاف، فلاح و بہبود اور مساوات کو فروغ دینا ہے، جو بنیادی طور پر ایک فلاحی ریاست کے قیام کا مقصد ہے۔"
  },
  {
    "id": 149,
    "question": "In India, one of the following can be amended with Special majority in both the houses of the parliament (TSTET 05 Jan 2025)\nہندوستان میں، مندرجہ ذیل میں سے کسی ایک میں پارلیمنٹ کے دونوں ایوانوں میں خصوصی اکثریت سے ترمیم کی جا سکتی ہے",
    "options": [
      "Fundamental Rights incorporated in the Indian Constitution\nہندوستانی آئین میں شامل بنیادی حقوق",
      "Election of the President and its manner\nصدر کا انتخاب اور اس کا طریقہ",
      "Extent of the executive power of the Union and the States\nیونین اور ریاستوں کی انتظامی طاقت کی حد",
      "Provisions related to the Supreme Court and High courts, etc.\nسپریم کورٹ اور ہائی کورٹس وغیرہ سے متعلق دفعات۔"
    ],
    "correctAnswer": 0,
    "explanation": "بنیادی حقوق میں ترمیم کے لیے پارلیمنٹ کی خصوصی اکثریت درکار ہوتی ہے۔ دیگر آپشنز وفاقی ڈھانچے سے متعلق ہیں اور ان کے لیے خصوصی اکثریت کے علاوہ نصف ریاستی مقننہ کی توثیق کی ضرورت ہوتی ہے۔"
  },
  {
    "id": 150,
    "question": "The President of India proclaims the National Emergency on the written advice of (TSTET 05 Jan 2025)\nہندوستان کا صدر قومی ایمرجنسی کا اعلان اس کی تحریری مشاورت پر کرتا ہے",
    "options": [
      "Prime Minister\nوزیر اعظم",
      "Chief Justice of India\nچیف جسٹس آف انڈیا",
      "Union Council of Ministers\nمرکزی وزراء کی کونسل",
      "National Investigation Agency and RAW\nنیشنل انویسٹی گیشن ایجنسی اور را"
    ],
    "correctAnswer": 2,
    "explanation": "1978 کے 44ویں ترمیمی ایکٹ نے صدر کے لیے یہ لازمی قرار دیا کہ وہ قومی ایمرجنسی کا اعلان صرف مرکزی کابینہ (جو مرکزی وزراء کی کونسل کا مرکز ہے) سے تحریری سفارش حاصل کرنے کے بعد ہی کر سکتا ہے۔"
  },
  {
    "id": 151,
    "question": "The primary goal of UNICEF is to (TSTET 05 Jan 2025)\nیونیسیف کا بنیادی مقصد ہے",
    "options": [
      "Promote gender equality\nصنفی مساوات کو فروغ دینا",
      "Provide humanitarian assistance\nانسانی امداد فراہم کرنا",
      "Support children's rights and welfare\nبچوں کے حقوق اور فلاح و بہبود کی حمایت کرنا",
      "Combat climate change\nموسمیاتی تبدیلی کا مقابلہ کرنا"
    ],
    "correctAnswer": 2,
    "explanation": "یونیسیف کا مطلب اقوام متحدہ کا بچوں کا فنڈ ہے۔ اس کا بنیادی مشن بچوں کے حقوق کے تحفظ کی وکالت کرنا، ان کی بنیادی ضروریات کو پورا کرنے میں مدد کرنا، اور ان کی پوری صلاحیت تک پہنچنے کے مواقع کو بڑھانا ہے۔"
  },
  {
    "id": 152,
    "question": "Read the following statements (TSTET 05 Jan 2025)\nA) The Union Council of Ministers must have membership in either house of the Parliament i.e. Lok Sabha or Rajya Sabha\nB) If the Union Council of Ministers are not members of the Parliament they should be elected or nominated to either of the two houses of the Parliament within one year from the date of assumption of their office\nمندرجہ ذیل بیانات کو پڑھیں\nA) مرکزی وزراء کی کونسل کو پارلیمنٹ کے کسی بھی ایوان یعنی لوک سبھا یا راجیہ سبھا میں رکنیت حاصل ہونی چاہئے\nB) اگر مرکزی وزراء کی کونسل پارلیمنٹ کے رکن نہیں ہیں تو انہیں اپنے عہدے کا چارج سنبھالنے کی تاریخ سے ایک سال کے اندر پارلیمنٹ کے دونوں ایوانوں میں سے کسی ایک کے لیے منتخب یا نامزد کیا جانا چاہئے",
    "options": [
      "Both 'A' and 'B' are correct\n'A' اور 'B' دونوں صحیح ہیں",
      "Both 'A' and 'B' are incorrect\n'A' اور 'B' دونوں غلط ہیں",
      "'A' is correct and 'B' is incorrect\n'A' صحیح ہے اور 'B' غلط ہے",
      "'B' is correct and 'A' is incorrect\n'B' صحیح ہے اور 'A' غلط ہے"
    ],
    "correctAnswer": 2,
    "explanation": "بیان A صحیح ہے۔ ایک وزیر کو پارلیمنٹ کے کسی بھی ایوان کا رکن ہونا چاہئے۔ تاہم، بیان B غلط ہے کیونکہ ایک غیر رکن وزیر بن سکتا ہے لیکن اسے چھ ماہ کے اندر رکن بننا ضروری ہے، نہ کہ ایک سال کے اندر۔"
  },
  {
    "id": 153,
    "question": "One among the following is elected for a term of six years (TSTET 05 Jan 2025)\nمندرجہ ذیل میں سے ایک چھ سال کی مدت کے لیے منتخب ہوتا ہے",
    "options": [
      "Lok Sabha member\nلوک سبھا کا رکن",
      "Rajya sabha member\nراجیہ سبھا کا رکن",
      "Chairman of Rajya Sabha\nراجیہ سبھا کا چیئرمین",
      "Speaker of Lok Sabha\nلوک سبھا کا اسپیکر"
    ],
    "correctAnswer": 1,
    "explanation": "راجیہ سبھا (ریاستوں کی کونسل) کے اراکین چھ سال کی مدت کے لیے منتخب ہوتے ہیں، جس میں ایک تہائی اراکین ہر دو سال بعد ریٹائر ہو جاتے ہیں۔ لوک سبھا کے اراکین کی مدت پانچ سال ہوتی ہے۔"
  },
  {
    "id": 154,
    "question": "Identify the true statement regarding Bills (TSTET 05 Jan 2025)\nبلوں کے بارے میں درست بیان کی نشاندہی کریں",
    "options": [
      "Money bills can be introduced in either house of the Parliament\nمنی بل پارلیمنٹ کے کسی بھی ایوان میں پیش کیے جا سکتے ہیں",
      "President's prior permission is required for introducing the ordinary bill in the Parliament\nپارلیمنٹ میں عام بل پیش کرنے کے لیے صدر کی پیشگی اجازت ضروری ہے",
      "Deputy Speaker of Rajya Sabha certifies whether the bill is a money bill or not before sending it to the President\nراجیہ سبھا کے ڈپٹی اسپیکر صدر کو بھیجنے سے پہلے تصدیق کرتے ہیں کہ بل منی بل ہے یا نہیں",
      "There will be a joint sitting of both the houses of Parliament, if the ordinary bill is not passed by the Lok Sabha and Rajya Sabha\nاگر عام بل لوک سبھا اور راجیہ سبھا سے منظور نہیں ہوتا ہے تو پارلیمنٹ کے دونوں ایوانوں کا مشترکہ اجلاس ہوگا"
    ],
    "correctAnswer": 3,
    "explanation": "ایک عام بل پر تعطل کی صورت میں، آئین میں اختلاف کو حل کرنے کے لیے دونوں ایوانوں کے مشترکہ اجلاس کا انتظام ہے۔ منی بل صرف لوک سبھا میں پیش کیے جا سکتے ہیں، اور لوک سبھا کا اسپیکر ان کی تصدیق کرتا ہے۔"
  },
  {
    "id": 155,
    "question": "The landlord forced a 13-year old child to work in his cotton field without paying any wages or paying very low wages. It would be a violation of this Fundamental Right (TSTET 05 Jan 2025)\nزمیندار نے ایک 13 سالہ بچے کو بغیر کوئی اجرت دیے یا بہت کم اجرت دے کر اپنے کپاس کے کھیت میں کام کرنے پر مجبور کیا۔ یہ اس بنیادی حق کی خلاف ورزی ہوگی",
    "options": [
      "Right to Equality\nمساوات کا حق",
      "Right to freedom\nآزادی کا حق",
      "Right against exploitation\nاستحصال کے خلاف حق",
      "Right against Constitutional Remedies\nآئینی علاج کے خلاف حق"
    ],
    "correctAnswer": 2,
    "explanation": "استحصال کے خلاف حق (آرٹیکل 23 اور 24) جبری مشقت اور بچوں سے مزدوری پر پابندی لگاتا ہے۔ کسی بچے کو مناسب اجرت کے بغیر کام کرنے پر مجبور کرنا جبری مشقت کی ایک شکل ہے اور اس بنیادی حق کی خلاف ورزی ہے۔"
  },
  {
    "id": 156,
    "question": "On 3rd February 2010. Sri Krishna Committee was appointed to (TSTET 05 Jan 2025)\n3 فروری 2010 کو، سری کرشنا کمیٹی کو اس لیے مقرر کیا گیا تھا",
    "options": [
      "Look into the issue of Telangana\nتلنگانہ کے مسئلے کو دیکھنا",
      "Suggest measures to prevent sexual assault and abuse\nجنسی حملے اور زیادتی کو روکنے کے لیے اقدامات تجویز کرنا",
      "Bring about reforms in banking sector\nبینکنگ سیکٹر میں اصلاحات لانا",
      "Suggest ways and means to eradicate poverty in India\nہندوستان میں غربت کے خاتمے کے لیے طریقے اور ذرائع تجویز کرنا"
    ],
    "correctAnswer": 0,
    "explanation": "سری کرشنا کمیٹی کو حکومت ہند نے 2010 میں الگ تلنگانہ ریاست کے مطالبے کا مطالعہ کرنے اور اس معاملے پر سفارشات پیش کرنے کے لیے مقرر کیا تھا۔"
  },
  {
    "id": 157,
    "question": "As per the central act. 'Act of Judicial Services Authority', these are NOT eligible for judicial assistance (TSTET 05 Jan 2025)\nمرکزی قانون کے مطابق۔ 'جوڈیشل سروسز اتھارٹی ایکٹ' کے تحت، یہ عدالتی امداد کے اہل نہیں ہیں",
    "options": [
      "Victims of domestic violence and caste enmity\nگھریلو تشدد اور ذات پات کی دشمنی کا شکار افراد",
      "All the Citizens who belong to Backward Classes\nپسماندہ طبقات سے تعلق رکھنے والے تمام شہری",
      "Victims of natural disasters\nقدرتی آفات کا شکار افراد",
      "Agricultural and Industrial labourers\nزرعی اور صنعتی مزدور"
    ],
    "correctAnswer": 1,
    "explanation": "لیگل سروسز اتھارٹیز ایکٹ، 1987، پسماندہ طبقات سے تعلق رکھنے والے تمام شہریوں کو خود بخود مفت قانونی امداد کی اہلیت نہیں دیتا؛ اس زمرے کے لیے آمدنی کی ایک حد ہے، جبکہ کچھ دیگر زمروں جیسے کہ ایس سی/ایس ٹی اراکین یا خواتین کے لیے ایسا نہیں ہے۔"
  },
  {
    "id": 158,
    "question": "This organ of the UN is primarily responsible for deliberating and making recommendations on international issues (TSTET 05 Jan 2025)\nاقوام متحدہ کا یہ ادارہ بنیادی طور پر بین الاقوامی مسائل پر غور و خوض کرنے اور سفارشات پیش کرنے کا ذمہ دار ہے",
    "options": [
      "Security Council\nسلامتی کونسل",
      "General Assembly\nجنرل اسمبلی",
      "International Court of Justice\nبین الاقوامی عدالت انصاف",
      "Secretariat\nسیکرٹریٹ"
    ],
    "correctAnswer": 1,
    "explanation": "اقوام متحدہ کی جنرل اسمبلی اقوام متحدہ کا اہم مشاورتی، پالیسی ساز اور نمائندہ ادارہ ہے۔ یہ بین الاقوامی مسائل کے مکمل спектرم پر کثیرالجہتی بحث کے لیے ایک فورم فراہم کرتی ہے اور رکن ممالک کو سفارشات پیش کرتی ہے۔"
  },
  {
    "id": 159,
    "question": "Identify the statement that accurately describes the term \"demand deposits\" (TSTET 05 Jan 2025)\nاس بیان کی نشاندہی کریں جو \"ڈیمانڈ ڈپازٹس\" کی اصطلاح کو درست طور پر بیان کرتا ہے",
    "options": [
      "They can only be withdrawn in cash\nانہیں صرف نقد رقم میں نکالا جا سکتا ہے",
      "They function like currency notes\nوہ کرنسی نوٹوں کی طرح کام کرتے ہیں",
      "They require a notice period for withdrawal of cash\nنقد رقم نکالنے کے لیے انہیں نوٹس کی مدت درکار ہوتی ہے",
      "They are not accepted for payments\nانہیں ادائیگیوں کے لیے قبول نہیں کیا جاتا ہے"
    ],
    "correctAnswer": 1,
    "explanation": "ڈیمانڈ ڈپازٹس (کرنٹ یا سیونگ اکاؤنٹس میں فنڈز) کو 'مطالبے پر' نکالا جا سکتا ہے اور چیک، ڈیبٹ کارڈ، یا الیکٹرانک ٹرانسفر کے ذریعے ادائیگیوں کے لیے استعمال کیا جا سکتا ہے، اس طرح یہ فزیکل کرنسی کی طرح تبادلے کے ایک ذریعہ کے طور پر کام کرتے ہیں۔"
  },
  {
    "id": 160,
    "question": "In the following way, the banks manage to operate with a small amount of cash on hand only (TSTET 05 Jan 2025)\nمندرجہ ذیل طریقے سے، بینک صرف تھوڑی سی نقد رقم کے ساتھ کام کرنے کا انتظام کرتے ہیں",
    "options": [
      "By borrowing from other banks when required\nضرورت پڑنے پر دوسرے بینکوں سے قرض لے کر",
      "By accepting deposits only\nصرف ڈپازٹ قبول کرکے",
      "By predicting withdrawal patterns\nنکالنے کے نمونوں کی پیشن گوئی کرکے",
      "Expecting that only a few depositors withdraw cash in a day\nیہ توقع کرتے ہوئے کہ ایک دن میں صرف چند ہی جمع کنندگان نقد رقم نکالیں گے"
    ],
    "correctAnswer": 3,
    "explanation": "بینک فریکشنل ریزرو بینکنگ کے اصول پر کام کرتے ہیں۔ وہ تجربے سے جانتے ہیں کہ کسی بھی دن، جمع کنندگان کا صرف ایک چھوٹا سا حصہ ہی نقد رقم نکالے گا، جس سے وہ جمع شدہ فنڈز کی اکثریت کو قرض پر دے سکتے ہیں جبکہ ایک چھوٹا سا ریزرو رکھتے ہیں۔"
  },
  {
    "id": 161,
    "question": "One of the following is NOT the source of income for banks (TSTET 05 Jan 2025)\nمندرجہ ذیل میں سے ایک بینکوں کی آمدنی کا ذریعہ نہیں ہے",
    "options": [
      "Service charges for issuing demand drafts\nڈیمانڈ ڈرافٹ جاری کرنے کے لیے سروس چارجز",
      "Interest charged on loans and account maintenance fees\nقرضوں پر عائد سود اور اکاؤنٹ کی دیکھ بھال کی فیس",
      "Government subsidies\nحکومتی سبسڈی",
      "The interest paid by the Reserve Bank of India for deposits\nریزرو بینک آف انڈیا کی طرف سے جمع شدہ رقم پر ادا کیا جانے والا سود"
    ],
    "correctAnswer": 2,
    "explanation": "بینک بنیادی طور پر سود کے فرق اور سروس فیس سے آمدنی حاصل کرتے ہیں۔ حکومتی سبسڈی مخصوص شعبوں یا افراد کو دی جانے والی مالی امداد ہے، جو تجارتی بینکوں کے لیے آمدنی کا کوئی بنیادی یا باقاعدہ ذریعہ نہیں ہے۔"
  },
  {
    "id": 162,
    "question": "This type of Price Index' includes all goods, both capital and consumer (TSTET 05 Jan 2025)\nاس قسم کے پرائس انڈیکس میں تمام اشیاء، سرمایہ اور صارفی دونوں شامل ہیں",
    "options": [
      "Consumer Price Index (CPI)\nکنزیومر پرائس انڈیکس (CPI)",
      "Wholesale Price Index (WPI)\nہول سیل پرائس انڈیکس (WPI)",
      "Retail Price Index (RPI)\nریٹیل پرائس انڈیکس (RPI)",
      "Market Price Index (MPI)\nمارکیٹ پرائس انڈیکس (MPI)"
    ],
    "correctAnswer": 1,
    "explanation": "ہول سیل پرائس انڈیکس (WPI) تھوک میں فروخت ہونے والی اشیاء کی قیمتوں میں اوسط تبدیلی کی پیمائش کرتا ہے۔ اس کی ٹوکری وسیع ہے اور اس میں خام مال، درمیانی اشیاء (سرمایہ جاتی اشیاء)، اور تیار شدہ اشیاء شامل ہیں، لیکن خدمات شامل نہیں ہیں۔"
  },
  {
    "id": 163,
    "question": "The role of goldsmiths in the early currency system was (TSTET 05 Jan 2025)\nابتدائی کرنسی کے نظام میں سناروں کا کردار تھا",
    "options": [
      "They created coins for trade\nانہوں نے تجارت کے لیے سکے بنائے",
      "They provided a safe place for people to store their gold and silver coins\nانہوں نے لوگوں کو اپنے سونے اور چاندی کے سکے رکھنے کے لیے ایک محفوظ جگہ فراہم کی",
      "They regulated the value of currency\nانہوں نے کرنسی کی قدر کو منظم کیا",
      "They were the first bankers in the world\nوہ دنیا کے پہلے بینکر تھے"
    ],
    "correctAnswer": 1,
    "explanation": "بینکنگ کے ابتدائی مراحل میں، سنار تاجروں کے لیے قیمتی دھاتیں ذخیرہ کرنے کے لیے اپنے محفوظ تہہ خانوں کا استعمال کرتے تھے۔ انہوں نے ان ذخائر کے لیے رسیدیں جاری کیں، جو پھر کاغذی کرنسی کی ابتدائی شکل کے طور پر گردش کرنے لگیں، جو ذخیرہ شدہ قدر کی نمائندگی کرتی تھیں۔"
  },
  {
    "id": 164,
    "question": "The number of withdrawals allowed in a month for a Basic Savings Bank Deposit Account holders including the amount withdrawn from ATMS (TSTET 05 Jan 2025)\nبنیادی بچت بینک ڈپازٹ اکاؤنٹ ہولڈرز کے لیے ایک ماہ میں اے ٹی ایم سے نکالی گئی رقم سمیت کتنی بار رقم نکالنے کی اجازت ہے",
    "options": [
      "A maximum of four withdrawals are allowed\nزیادہ سے زیادہ چار بار رقم نکالنے کی اجازت ہے",
      "Only two withdrawals are allowed\nصرف دو بار رقم نکالنے کی اجازت ہے",
      "Ten withdrawals are permitted\nدس بار رقم نکالنے کی اجازت ہے",
      "Unlimited withdrawals are allowed\nلامحدود بار رقم نکالنے کی اجازت ہے"
    ],
    "correctAnswer": 0,
    "explanation": "آر بی آئی کی بنیادی بچت بینک ڈپازٹ (BSBD) اکاؤنٹس کے لیے رہنما خطوط کے مطابق، ہولڈرز عام طور پر ایک ماہ میں زیادہ سے زیادہ چار بار رقم نکالنے کے حقدار ہیں، بشمول اے ٹی ایم سے نکالی گئی رقم۔ یہ اکاؤنٹ کم سے کم چارجز کے ساتھ مالی شمولیت کے لیے ڈیزائن کیا گیا ہے۔"
  },
  {
    "id": 165,
    "question": "In the production process, one among the following does NOT come under \"Physical Capital\" (TSTET 05 Jan 2025)\nپیداواری عمل میں، مندرجہ ذیل میں سے ایک \"طبیعی سرمایہ\" کے تحت نہیں آتا ہے",
    "options": [
      "Simple tools like farmer's plough\nکسان کے ہل جیسے سادہ اوزار",
      "Sophisticated machines such as generators, turbines\nجنریٹرز، ٹربائن جیسی جدید مشینیں",
      "Buildings for installation of machinery and the place of work\nمشینری کی تنصیب اور کام کی جگہ کے لیے عمارتیں",
      "The Yarn used by the weavers\nبنکروں کا استعمال کردہ سوت"
    ],
    "correctAnswer": 3,
    "explanation": "طبیعی سرمائے میں مستقل سرمایہ (اوزار، مشینیں، عمارتیں) اور کام کرنے والا سرمایہ (خام مال) شامل ہیں۔ بنکروں کا استعمال کردہ سوت ایک خام مال ہے جو پیداواری عمل میں استعمال ہوتا ہے، لہذا اسے کام کرنے والا سرمایہ سمجھا جاتا ہے، مستقل طبیعی سرمایہ نہیں۔"
  },
  {
    "id": 166,
    "question": "Which of the following statement best describes the term 'fertility rate'? (TSTET 05 Jan 2025)\nمندرجہ ذیل میں سے کون سا بیان 'شرح تولید' کی اصطلاح کو بہترین طور پر بیان کرتا ہے؟",
    "options": [
      "The total number of children that a woman can give birth\nایک عورت کل کتنے بچوں کو جنم دے سکتی ہے",
      "The average number of children that are born to a woman over her lifetime\nایک عورت اپنی زندگی میں اوسطاً کتنے بچوں کو جنم دیتی ہے",
      "The average number of children born in a specific place\nایک مخصوص جگہ پر پیدا ہونے والے بچوں کی اوسط تعداد",
      "The total number of children born in a specific place in a year\nایک سال میں ایک مخصوص جگہ پر پیدا ہونے والے بچوں کی کل تعداد"
    ],
    "correctAnswer": 1,
    "explanation": "کل شرح تولید (TFR) ایک آبادیاتی اشاریہ ہے جو ایک عورت کے تولیدی سالوں کے دوران پیدا ہونے والے بچوں کی اوسط تعداد کی نمائندگی کرتا ہے، بشرطیکہ موجودہ عمر کے لحاظ سے شرح تولید مستقل رہے۔"
  },
  {
    "id": 167,
    "question": "Which of the following statements best describes the term \"Subsidies\"? (TSTET 05 Jan 2025)\nمندرجہ ذیل میں سے کون سا بیان \"سبسڈی\" کی اصطلاح کو بہترین طور پر بیان کرتا ہے؟",
    "options": [
      "The amount paid by the government to reduce the cost of certain important goods to keep their prices low\nحکومت کی طرف سے ادا کی جانے والی رقم جو کچھ اہم اشیاء کی قیمت کو کم کرنے کے لیے دی جاتی ہے تاکہ ان کی قیمتیں کم رہیں",
      "The amount paid by the government to increase the cost of certain important goods to keep their prices very high\nحکومت کی طرف سے ادا کی جانے والی رقم جو کچھ اہم اشیاء کی قیمت کو بڑھانے کے لیے دی جاتی ہے تاکہ ان کی قیمتیں بہت زیادہ رہیں",
      "Government giving certain amount of money freely to purchase the basic goods by the poor\nحکومت غریبوں کو بنیادی اشیاء خریدنے کے لیے کچھ رقم مفت دیتی ہے",
      "The amount paid by the industrialists to the Government to keep the prices low\nصنعت کاروں کی طرف سے حکومت کو قیمتیں کم رکھنے کے لیے ادا کی جانے والی رقم"
    ],
    "correctAnswer": 0,
    "explanation": "سبسڈی حکومت کی طرف سے کسی کاروبار یا معاشی شعبے کو دی جانے والی مالی امداد ہے۔ یہ امداد صارفین کے لیے کسی شے یا خدمت کی قیمت کو مارکیٹ ریٹ سے کم کرنے میں مدد دیتی ہے، جس سے ضروری اشیاء زیادہ سستی ہو جاتی ہیں۔"
  },
  {
    "id": 168,
    "question": "The Government employee paid a sum of Rs. 4.00.000 as tax to the Government based on his salary. The type of tax paid by the employee is (TSTET 05 Jan 2025)\nایک سرکاری ملازم نے اپنی تنخواہ کی بنیاد پر حکومت کو 4,00,000 روپے بطور ٹیکس ادا کیے۔ ملازم کی طرف سے ادا کردہ ٹیکس کی قسم ہے",
    "options": [
      "Professional Tax\nپیشہ ورانہ ٹیکس",
      "Corporate Tax\nکارپوریٹ ٹیکس",
      "Personal Income Tax\nذاتی انکم ٹیکس",
      "GST\nجی ایس ٹی"
    ],
    "correctAnswer": 2,
    "explanation": "ذاتی انکم ٹیکس ایک براہ راست ٹیکس ہے جو کسی فرد کی آمدنی پر لگایا جاتا ہے۔ چونکہ ٹیکس ملازم کی تنخواہ کی بنیاد پر ادا کیا جاتا ہے، یہ اس زمرے میں آتا ہے۔"
  },
  {
    "id": 169,
    "question": "In a history class, a social science teacher is dealing with The Rule of Mughal Dynasty. Which of the following he can use for making his/her teaching easy (TSTET 05 Jan 2025)\nA) Tree chart\nB) Time chart\nC) Maps\nD) Video clippings from some movies or documentaries\nتاریخ کی کلاس میں، ایک سماجی سائنس کا استاد مغل خاندان کی حکمرانی پر بات کر رہا ہے۔ وہ اپنی تدریس کو آسان بنانے کے لیے مندرجہ ذیل میں سے کیا استعمال کر سکتا/سکتی ہے\nالف) ٹری چارٹ\nب) ٹائم چارٹ\nج) نقشے\nد) کچھ فلموں یا دستاویزی فلموں سے ویڈیو کلپنگز",
    "options": [
      "A & B only\nصرف الف اور ب",
      "A & C only\nصرف الف اور ج",
      "A, B, C, & D\nالف، ب، ج، اور د",
      "A, C & D only\nصرف الف، ج اور د"
    ],
    "correctAnswer": 2,
    "explanation": "فہرست میں دی گئی تمام امدادی اشیاء مؤثر ہیں۔ ایک ٹری چارٹ نسب دکھا سکتا ہے، ایک ٹائم چارٹ تاریخ کا تسلسل دکھاتا ہے، نقشے سلطنت کی وسعت کو ظاہر کرتے ہیں، اور ویڈیوز بصری سیاق و سباق فراہم کرتی ہیں۔ ان آلات کے امتزاج کا استعمال ایک جامع اور دلچسپ سیکھنے کا تجربہ تخلیق کرتا ہے۔"
  },
  {
    "id": 170,
    "question": "The most suitable method to teach topics like World Peace-India's Contribution', 'Political parties Manifestos and the Future of our country' is (TSTET 05 Jan 2025)\n'عالمی امن-ہندوستان کا کردار'، 'سیاسی جماعتوں کے منشور اور ہمارے ملک کا مستقبل' جیسے موضوعات کو پڑھانے کا سب سے موزوں طریقہ ہے",
    "options": [
      "Lecture method\nلیکچر کا طریقہ",
      "Lecture-cum-Demonstration method\nلیکچر کم ڈیمونسٹریشن کا طریقہ",
      "Problem solving method\nمسئلہ حل کرنے کا طریقہ",
      "Discussion method\nبحث کا طریقہ"
    ],
    "correctAnswer": 3,
    "explanation": "یہ موضوعات پیچیدہ ہیں اور متعدد نقطہ نظر کے لیے کھلے ہیں۔ بحث کا طریقہ تنقیدی سوچ کی حوصلہ افزائی کرتا ہے، طلباء کو مختلف نقطہ نظر کو بانٹنے اور ان پر بحث کرنے کی اجازت دیتا ہے، اور فعال شرکت کو فروغ دیتا ہے، جو ایسے موضوعات کے لیے یک طرفہ لیکچر سے زیادہ مؤثر ہے۔"
  },
  {
    "id": 171,
    "question": "This level of knowledge is helpful to students to think actively about inter relations between concepts. (TSTET 05 Jan 2025)\nعلم کی یہ سطح طلباء کو تصورات کے مابین باہمی تعلقات کے بارے میں فعال طور پر سوچنے میں مددگار ہے",
    "options": [
      "Metacognitive knowledge\nماورائے ادراک علم",
      "Procedural knowledge\nطریقہ کار کا علم",
      "Factual knowledge\nحقائق پر مبنی علم",
      "Conceptual knowledge\nتصوراتی علم"
    ],
    "correctAnswer": 3,
    "explanation": "تصوراتی علم اصولوں، نظریات اور ان کے مابین تعلقات کی تفہیم ہے۔ یہ طلباء کو خیالات کو جوڑنے اور کسی مضمون کی مربوط تفہیم بنانے کے قابل بناتا ہے، جو الگ تھلگ حقائق جاننے سے آگے ہے۔"
  },
  {
    "id": 172,
    "question": "The document of Memorandum of Understandings (MoUs) made between the countries India and Russia recently, is an example for this type of sources (TSTET 05 Jan 2025)\nحال ہی میں ہندوستان اور روس کے مابین ہونے والے مفاہمت کی یادداشتوں (ایم او یوز) کی دستاویز اس قسم کے ذرائع کی ایک مثال ہے",
    "options": [
      "Primary source\nبنیادی ماخذ",
      "Tertiary source\nثالثی ماخذ",
      "Secondary source\nثانوی ماخذ",
      "Internal source\nاندرونی ماخذ"
    ],
    "correctAnswer": 0,
    "explanation": "ایک بنیادی ماخذ براہ راست یا اولین ثبوت فراہم کرتا ہے۔ ایم او یو جیسی سرکاری دستاویز ایک بنیادی ماخذ ہے کیونکہ یہ معاہدے کے وقت تخلیق کی گئی اصل دستاویز ہے، نہ کہ اس کا تجزیہ۔"
  },
  {
    "id": 173,
    "question": "A student is able to make a list of 10 employed women, he/she knows personally in the locality. It is the learning indicator of this academic standard (TSTET 05 Jan 2025)\nایک طالب علم اپنے علاقے میں ذاتی طور پر جاننے والی 10 ملازمت پیشہ خواتین کی فہرست بنانے کے قابل ہے۔ یہ اس تعلیمی معیار کا سیکھنے کا اشاریہ ہے",
    "options": [
      "Mapping Skills\nنقشہ سازی کی مہارتیں",
      "Information Skills\nمعلوماتی مہارتیں",
      "Conceptual understanding\nتصوراتی تفہیم",
      "Appreciation and sensitivity\nتعریف اور حساسیت"
    ],
    "correctAnswer": 1,
    "explanation": "اس کام کے لیے طالب علم کو اپنے فوری ماحول سے معلومات جمع، اکٹھا اور منظم کرنے کی ضرورت ہوتی ہے۔ یہ براہ راست معلوماتی مہارتوں سے متعلق ہے، جس میں مختلف ذرائع سے ڈیٹا اکٹھا کرنا اور اسے منظم شکل میں پیش کرنا شامل ہے۔"
  },
  {
    "id": 174,
    "question": "To teach about social reformers, popular persons, the remarkable incidents that happened in their life and their life experiences etc., this historical method is suitable (TSTET 05 Jan 2025)\nسماجی مصلحین، مشہور شخصیات، ان کی زندگی میں پیش آنے والے قابل ذکر واقعات اور ان کے زندگی کے تجربات وغیرہ کے بارے میں پڑھانے کے لیے، یہ تاریخی طریقہ موزوں ہے",
    "options": [
      "Anecdotal method\nواقعاتی طریقہ",
      "Biographical method\nسوانحی طریقہ",
      "Evolution method\nارتقائی طریقہ",
      "Social method\nسماجی طریقہ"
    ],
    "correctAnswer": 1,
    "explanation": "سوانحی طریقہ تاریخی واقعات اور سماجی سیاق و سباق کو سمجھنے کے لیے کسی فرد کی زندگی کی کہانی پر توجہ مرکوز کرتا ہے۔ یہ سماجی مصلحین جیسی مخصوص شخصیات کی زندگیوں اور شراکتوں کے بارے میں پڑھانے کا سب سے براہ راست اور موزوں طریقہ ہے۔"
  },
  {
    "id": 175,
    "question": "According to this section of Right to Education (RTE) Act 2009, \"No teacher shall engage himself or herself in private tuitions or private teaching activity\" (TSTET 05 Jan 2025)\nتعلیم کا حق (آر ٹی ای) ایکٹ 2009 کی اس شق کے مطابق، \"کوئی بھی استاد خود کو پرائیویٹ ٹیوشن یا پرائیویٹ تدریسی سرگرمی میں مشغول نہیں کرے گا\"",
    "options": [
      "Section - 28\nشق - 28",
      "Section - 26\nشق - 26",
      "Section - 27\nشق - 27",
      "Section - 30\nشق - 30"
    ],
    "correctAnswer": 0,
    "explanation": "بچوں کے مفت اور لازمی تعلیم کے حق (آر ٹی ای) ایکٹ، 2009 کی شق 28، اساتذہ کو پرائیویٹ ٹیوشن میں مشغول ہونے سے واضح طور پر منع کرتی ہے۔ اس کا مقصد یہ یقینی بنانا ہے کہ اساتذہ اپنی اسکول کی ذمہ داریوں پر توجہ مرکوز کریں اور مفادات کے تصادم کو روکیں۔"
  },
  {
    "id": 176,
    "question": "National Curriculum Framework (NCF)-2005 suggested that. at this school stage; in political science the focus should be on discussing the philosophical foundation that underlie the value frame work of the Indian constitution i.e.. indepth discussion of equality, liberty, justice, fraternity etc.. (TSTET 05 Jan 2025)\nقومی نصابی فریم ورک (این سی ایف) - 2005 نے تجویز دی کہ اسکول کے اس مرحلے پر؛ سیاسیات میں توجہ اس فلسفیانہ بنیاد پر بحث کرنے پر ہونی چاہیے جو ہندوستانی آئین کے اقدار کے فریم ورک کی بنیاد ہے یعنی مساوات، آزادی، انصاف، بھائی چارے وغیرہ پر گہرائی سے بحث",
    "options": [
      "Primary stage\nپرائمری مرحلہ",
      "Upper Primary stage\nاپر پرائمری مرحلہ",
      "Secondary stage\nثانوی مرحلہ",
      "Higher Secondary stage\nاعلیٰ ثانوی مرحلہ"
    ],
    "correctAnswer": 3,
    "explanation": "این سی ایف-2005 سفارش کرتا ہے کہ اعلیٰ ثانوی مرحلے (کلاس XI-XII) پر، سیاسیات کو صرف اداروں کی وضاحت سے ہٹ کر آئین کے تجریدی خیالات اور فلسفیانہ بنیادوں پر بحث کرنے کی طرف منتقل ہونا چاہیے تاکہ ایک گہری، زیادہ تجزیاتی تفہیم حاصل ہو سکے۔"
  },
  {
    "id": 177,
    "question": "A social science teacher asked her students to make some rules for their class to follow. These were written on a chart. All the students gave their consent to follow them. The chart was pasted in the class for reference. This activity can be an introductory activity for this topic (TSTET 05 Jan 2025)\nایک سماجی سائنس کی استاد نے اپنے طلباء سے اپنی کلاس کے لیے کچھ اصول بنانے کو کہا جن پر عمل کیا جائے۔ یہ ایک چارٹ پر لکھے گئے۔ تمام طلباء نے ان پر عمل کرنے کی رضامندی دی۔ چارٹ کو حوالہ کے لیے کلاس میں چسپاں کر دیا گیا۔ یہ سرگرمی اس موضوع کے لیے ایک تعارفی سرگرمی ہو سکتی ہے",
    "options": [
      "Diversity\nتنوع",
      "Democracy\nجمہوریت",
      "Resources\nوسائل",
      "Market\nمارکیٹ"
    ],
    "correctAnswer": 1,
    "explanation": "یہ سرگرمی جمہوریت کے ایک اہم پہلو کی تقلید کرتی ہے: ان لوگوں کے ذریعہ قوانین کی تخلیق جو پھر باہمی رضامندی کی بنیاد پر ان کے زیر انتظام ہوتے ہیں۔ یہ خود حکمرانی اور سماجی معاہدوں کے تصورات کے لیے ایک عملی تعارف کے طور پر کام کرتا ہے۔"
  },
  {
    "id": 178,
    "question": "Organisation of excursions will mainly develop this kind of value among students (TSTET 05 Jan 2025)\nسیر و تفریح کا اہتمام طلباء میں بنیادی طور پر اس قسم کی قدر کو فروغ دے گا",
    "options": [
      "National value\nقومی قدر",
      "Disciplinary value\nنظم و ضبط کی قدر",
      "Vocational value\nپیشہ ورانہ قدر",
      "Recreational value\nتفریحی قدر"
    ],
    "correctAnswer": 3,
    "explanation": "جبکہ سیر و تفریح دیگر اقدار میں بھی حصہ ڈال سکتی ہے، ان کی بنیادی اور سب سے براہ راست قدر تفریحی ہے۔ وہ معمول کے کلاس روم کے ماحول سے ایک وقفہ فراہم کرتی ہیں، لطف، آرام، اور سیکھنے کا ایک تفریحی طریقہ پیش کرتی ہیں۔"
  },
  {
    "id": 179,
    "question": "Identify the tools of evaluation of scholastic area among the following (TSTET 05 Jan 2025)\nA) Slip tests\nB) Diagnostic test\nC) Projective test\nD) Assignments\nمندرجہ ذیل میں سے اسکالسٹک ایریا کی تشخیص کے آلات کی نشاندہی کریں\nالف) سلپ ٹیسٹ\nب) تشخیصی ٹیسٹ\nج) پروجیکٹیو ٹیسٹ\nد) اسائنمنٹس",
    "options": [
      "A, B & C only\nصرف الف، ب اور ج",
      "A, B & D only\nصرف الف، ب اور د",
      "B, C & D only\nصرف ب، ج اور د",
      "A, B, C & D\nالف، ب، ج اور د"
    ],
    "correctAnswer": 1,
    "explanation": "اسکالسٹک ایریاز تعلیمی مضامین سے متعلق ہیں۔ سلپ ٹیسٹ، تشخیصی ٹیسٹ، اور اسائنمنٹس سبھی تعلیمی علم کی تشخیص کے معیاری آلات ہیں۔ پروجیکٹیو ٹیسٹ نفسیاتی آلات ہیں جو شخصیت کا جائزہ لینے کے لیے استعمال ہوتے ہیں، جو ہم نصابی ڈومین کے تحت آتے ہیں۔"
  },
  {
    "id": 180,
    "question": "In a Physical map of India to show the ever green forests, tropical deciduous forest these colours are used respectively (TSTET 05 Jan 2025)\nہندوستان کے ایک طبعی نقشے میں سدا بہار جنگلات، استوائی پت جھڑی جنگلات کو دکھانے کے لیے بالترتیب یہ رنگ استعمال کیے جاتے ہیں",
    "options": [
      "Both are with dark green colour\nدونوں گہرے سبز رنگ کے ہیں",
      "Both are with light green colour\nدونوں ہلکے سبز رنگ کے ہیں",
      "Dark green, light green\nگہرا سبز، ہلکا سبز",
      "Light green, dark green\nہلکا سبز، گہرا سبز"
    ],
    "correctAnswer": 2,
    "explanation": "موضوعاتی نقشہ سازی کے اصولوں کے مطابق، مختلف شیڈز تغیرات کی نمائندگی کرتے ہیں۔ گھنے سدا بہار جنگلات کو عام طور پر گہرے سبز رنگ میں دکھایا جاتا ہے، جبکہ کم گھنے استوائی پت جھڑی جنگلات کو ان کے درمیان بصری طور پر فرق کرنے کے لیے ہلکے سبز رنگ کے شیڈ سے ظاہر کیا جاتا ہے۔"
  },
  {
    "id": 181,
    "question": "On topographic map, Contour Lines are most commonly used to (TSTET 11 Jan 2025)\nٹوپوگرافک نقشے پر، کنٹور لائنیں عام طور پر اس کے لیے استعمال ہوتی ہیں",
    "options": [
      "illustrate the type of soil\nمٹی کی قسم کو واضح کرنے کے لیے",
      "find out the time of a place and distance between the two places\nکسی جگہ کا وقت اور دو جگہوں کے درمیان فاصلہ معلوم کرنے کے لیے",
      "illustrate the distribution of water and land on the surface of the earth\nزمین کی سطح پر پانی اور زمین کی تقسیم کو واضح کرنے کے لیے",
      "illustrate the shape of the given landform or terrain\nدی گئی زمینی شکل یا علاقے کی شکل کو واضح کرنے کے لیے"
    ],
    "correctAnswer": 3,
    "explanation": "کنٹور لائنیں نقشے پر وہ لکیریں ہوتی ہیں جو مساوی بلندی کے مقامات کو جوڑتی ہیں۔ ان لکیروں کے نمونے کا مطالعہ کرکے، کوئی بھی زمین کی سہ جہتی شکل کا تصور کرسکتا ہے، بشمول پہاڑیاں، وادیاں، اور ڈھلوانوں کی تیزی۔"
  },
  {
    "id": 182,
    "question": "These states of India DO NOT share their boundary with Telangana state (TSTET 11 Jan 2025)\nہندوستان کی یہ ریاستیں تلنگانہ ریاست کے ساتھ اپنی سرحد کا اشتراک نہیں کرتیں",
    "options": [
      "Chattisgarh and Orissa\nچھتیس گڑھ اور اڑیسہ",
      "Madhya Pradesh and Maharashtra\nمدھیہ پردیش اور مہاراشٹر",
      "Orissa and Madhya Pradesh\nاڑیسہ اور مدھیہ پردیش",
      "Chattisgarh and Madhya Pradesh\nچھتیس گڑھ اور مدھیہ پردیش"
    ],
    "correctAnswer": 2,
    "explanation": "تلنگانہ اپنی سرحدیں شمال میں مہاراشٹر، مشرق میں چھتیس گڑھ، مغرب میں کرناٹک، اور جنوب اور جنوب مشرق میں آندھرا پردیش کے ساتھ بانٹتا ہے۔ اڑیسہ (اوریسا) اور مدھیہ پردیش کی تلنگانہ کے ساتھ کوئی مشترکہ سرحد نہیں ہے۔"
  },
  {
    "id": 183,
    "question": "Which of the following best describes 'the solar insolation variation' across different latitudes? (TSTET 11 Jan 2025)\nمندرجہ ذیل میں سے کون مختلف عرض البلدوں میں 'شمسی تابکاری کے تغیر' کو بہترین طور پر بیان کرتا ہے؟",
    "options": [
      "It is uniform across all latitudes\nیہ تمام عرض البلدوں میں یکساں ہے",
      "It is highest at the poles and decreases towards the equator\nیہ قطبین پر سب سے زیادہ ہے اور خط استوا کی طرف کم ہوتا ہے",
      "It is highest at the equator and decreases towards the poles\nیہ خط استوا پر سب سے زیادہ ہے اور قطبین کی طرف کم ہوتا ہے",
      "It is highest in between the Tropic of Cancer and the Arctic Circle\nیہ سرطان اور آرکٹک سرکل کے درمیان سب سے زیادہ ہے"
    ],
    "correctAnswer": 2,
    "explanation": "شمسی تابکاری خط استوا پر سب سے زیادہ شدید ہوتی ہے جہاں سورج کی شعاعیں زمین کی سطح پر براہ راست، تقریباً 90 ڈگری کے زاویے پر پڑتی ہیں۔ جیسے جیسے عرض البلد قطبین کی طرف بڑھتا ہے، سورج کی شعاعیں سطح پر زیادہ ترچھے زاویے سے ٹکراتی ہیں، جس سے توانائی کی اتنی ہی مقدار ایک بڑے رقبے پر پھیل جاتی ہے، جو اس کی شدت کو کم کر دیتی ہے۔"
  },
  {
    "id": 184,
    "question": "When condensation takes place at temperatures below freezing point, water vapour condenses directly into (TSTET 11 Jan 2025)\nجب نقطہ انجماد سے کم درجہ حرارت پر تکثیف ہوتی ہے، تو آبی بخارات براہ راست اس میں تبدیل ہو جاتے ہیں",
    "options": [
      "Hail Stone\nاولے",
      "Sleet\nبرف ملی بارش",
      "Ice Crystals\nبرف کے کرسٹل",
      "Snowfall\nبرف باری"
    ],
    "correctAnswer": 2,
    "explanation": "وہ عمل جس میں آبی بخارات پہلے مائع بنے بغیر براہ راست ٹھوس (برف) میں تبدیل ہو جاتے ہیں، اسے ڈیپوزیشن کہتے ہیں۔ یہ عمل فضا میں برف کے کرسٹل بناتا ہے، جو برف کے گالوں اور پالا کے بنیادی اجزاء ہیں۔"
  },
  {
    "id": 185,
    "question": "Which of the following statements correctly describe the term 'Climate'? (TSTET 11 Jan 2025)\nمندرجہ ذیل میں سے کون سا بیان 'آب و ہوا' کی اصطلاح کو صحیح طور پر بیان کرتا ہے؟",
    "options": [
      "It is a description of the condition of the atmosphere of a place for small period of time\nیہ کسی جگہ کی فضا کی حالت کا مختصر مدت کے لیے بیان ہے",
      "It is a description of the atmospheric conditions prevailing in the world for a period of one year\nیہ دنیا میں ایک سال کی مدت کے لیے رائج ماحولیاتی حالات کا بیان ہے",
      "It is a description of the average atmospheric conditions for specific areas over a long period of time\nیہ ایک طویل مدت کے دوران مخصوص علاقوں کے لیے اوسط ماحولیاتی حالات کا بیان ہے",
      "The atmospheric conditions that prevail at a given time of the year\nسال کے کسی مخصوص وقت میں رائج ماحولیاتی حالات"
    ],
    "correctAnswer": 2,
    "explanation": "آب و ہوا سے مراد کسی خاص خطے میں موسمی نمونوں کا طویل مدتی اوسط ہے، جو عام طور پر 30 سال یا اس سے زیادہ کی مدت میں شمار کیا جاتا ہے۔ یہ موسم سے الگ ہے، جو قلیل مدتی ماحولیاتی حالات کو بیان کرتا ہے۔"
  },
  {
    "id": 186,
    "question": "The trees grown in these forests shed their leaves in the dry season to conserve water (TSTET 11 Jan 2025)\nان جنگلات میں اگنے والے درخت پانی کو بچانے کے لیے خشک موسم میں اپنے پتے گرا دیتے ہیں",
    "options": [
      "Tropical Evergreen Forests\nاستوائی سدا بہار جنگلات",
      "Temperate Evergreen Forests\nمعتدل سدا بہار جنگلات",
      "Tropical Deciduous Forests\nاستوائی پت جھڑی جنگلات",
      "Coniferous Forests\nصنوبری جنگلات"
    ],
    "correctAnswer": 2,
    "explanation": "پت جھڑی درخت وہ ہوتے ہیں جو موسمی طور پر اپنے پتے گراتے ہیں۔ الگ الگ گیلے اور خشک موسموں والی استوائی آب و ہوا میں، پت جھڑی جنگلات کے درخت خشک موسم کے دوران اپنے پتے گرا دیتے ہیں تاکہ ٹرانسپریشن کے ذریعے پانی کے نقصان کو کم کیا جا سکے۔"
  },
  {
    "id": 187,
    "question": "Among the following, this theory explains the origin of Universe (TSTET 11 Jan 2025)\nمندرجہ ذیل میں سے، یہ نظریہ کائنات کی ابتدا کی وضاحت کرتا ہے",
    "options": [
      "Continental Drift Theory\nبراعظمی بہاؤ کا نظریہ",
      "Big Bang Theory\nبگ بینگ کا نظریہ",
      "Heliocentric theory\nسورج مرکزی نظریہ",
      "Relativity theory\nنظریہ اضافیت"
    ],
    "correctAnswer": 1,
    "explanation": "بگ بینگ کا نظریہ کائنات کی شروعات کے بارے میں سب سے اہم سائنسی وضاحت ہے۔ یہ نظریہ پیش کرتا ہے کہ کائنات انتہائی اعلی کثافت اور درجہ حرارت کی ابتدائی حالت سے شروع ہوئی جو تقریباً 13.8 بلین سالوں سے پھیل رہی ہے اور ٹھنڈی ہو رہی ہے۔"
  },
  {
    "id": 188,
    "question": "Mercury, Venus, Earth and Mars are called inner planets as they lie between (TSTET 11 Jan 2025)\nعطارد، زہرہ، زمین اور مریخ کو اندرونی سیارے کہا جاتا ہے کیونکہ وہ ان کے درمیان واقع ہیں",
    "options": [
      "The Sun and the Jupiter\nسورج اور مشتری",
      "The Sun and the Neptune\nسورج اور نیپچون",
      "The Sun and the belt of Comets\nسورج اور دومکیتوں کی پٹی",
      "The Sun and the belt of Asteroids\nسورج اور سیارچوں کی پٹی"
    ],
    "correctAnswer": 3,
    "explanation": "نظام شمسی کو وسیع پیمانے پر اندرونی اور بیرونی سیاروں میں سیارچوں کی پٹی کے ذریعے تقسیم کیا گیا ہے، جو مریخ اور مشتری کے مداروں کے درمیان واقع ہے۔ اندرونی سیارے (عطارد، زہرہ، زمین، مریخ) وہ ہیں جو اس پٹی کے اندر، سورج کے قریب گردش کرتے ہیں۔"
  },
  {
    "id": 189,
    "question": "Identify the true statement regarding the 'Crust of the Earth' (TSTET 11 Jan 2025)\n'زمین کی پرت' کے بارے میں صحیح بیان کی نشاندہی کریں",
    "options": [
      "The density of oceanic crust is more than the density of the Mantle\nسمندری پرت کی کثافت مینٹل کی کثافت سے زیادہ ہے",
      "The thickness of oceanic crust is less than the continental crust\nسمندری پرت کی موٹائی براعظمی پرت سے کم ہے",
      "The type of minerals found in the oceanic crust are nickel and ferrous\nسمندری پرت میں پائے جانے والے معدنیات کی قسم نکل اور فیرس ہے",
      "The Crust is the main source of Magma\nپرت میگما کا بنیادی ذریعہ ہے"
    ],
    "correctAnswer": 1,
    "explanation": "براعظمی پرت سمندری پرت (5-10 کلومیٹر) سے نمایاں طور پر موٹی (25-70 کلومیٹر) ہے۔ تاہم، سمندری پرت زیادہ کثیف ہے۔ میگما بنیادی طور پر مینٹل سے نکلتا ہے، اور زمین کا مرکز بنیادی طور پر نکل اور لوہے (فیرس) پر مشتمل ہے۔"
  },
  {
    "id": 190,
    "question": "The correct sequence of the following countries in descending order as per their land area (TSTET 11 Jan 2025)\nمندرجہ ذیل ممالک کی ان کے زمینی رقبے کے مطابق نزولی ترتیب میں صحیح ترتیب ہے",
    "options": [
      "Russia, China, India, Brazil and Australia\nروس، چین، ہندوستان، برازیل اور آسٹریلیا",
      "Russia, Canada, the United States of America. India and Australia\nروس، کینیڈا، ریاستہائے متحدہ امریکہ، ہندوستان اور آسٹریلیا",
      "The United States of America, Canada, Brazil, India and Australia\nریاستہائے متحدہ امریکہ، کینیڈا، برازیل، ہندوستان اور آسٹریلیا",
      "Russia, Canada, the United States of America, China and Brazil\nروس، کینیڈا، ریاستہائے متحدہ امریکہ، چین اور برازیل"
    ],
    "correctAnswer": 3,
    "explanation": "کل رقبے کے لحاظ سے سب سے بڑے پانچ ممالک نزولی ترتیب میں روس، کینیڈا، چین، ریاستہائے متحدہ امریکہ، اور برازیل ہیں۔ یہ آپشن اس ترتیب کو صحیح طور پر فہرست میں لاتا ہے۔"
  },
  {
    "id": 191,
    "question": "Among the following, identify the plains of west coast (TSTET 11 Jan 2025)\nمندرجہ ذیل میں سے، مغربی ساحل کے میدانوں کی نشاندہی کریں",
    "options": [
      "Konkan Coast, Kutch Coast and Malabar Coast\nکونکن ساحل، کچھ ساحل اور مالابار ساحل",
      "Konkan Coast, Coromandal Coast, Kathiawar Coast\nکونکن ساحل، کورومنڈل ساحل، کاٹھیاواڑ ساحل",
      "Utkal Coast, Konkan Coast and Malabar Coast\nاتکل ساحل، کونکن ساحل اور مالابار ساحل",
      "Utkal Coast, Coromandal Coast and Kathiawar Coast\nاتکل ساحل، کورومنڈل ساحل اور کاٹھیاواڑ ساحل"
    ],
    "correctAnswer": 0,
    "explanation": "ہندوستان کے مغربی ساحل میں گجرات میں کچھ اور کاٹھیاواڑ کے جزیرہ نما، کونکن ساحل (مہاراشٹر، گوا، شمالی کرناٹک)، اور مالابار ساحل (کیرالہ) شامل ہیں۔ کورومنڈل اور اتکل ساحل ہندوستان کے مشرقی جانب ہیں۔"
  },
  {
    "id": 192,
    "question": "Among the following Groups of countries, the countries which are grouped under High Human Development Index as per Human Development Index Report, 2021 (TSTET 11 Jan 2025)\nمندرجہ ذیل ممالک کے گروہوں میں سے، وہ ممالک جو انسانی ترقی کے اشاریہ رپورٹ 2021 کے مطابق اعلی انسانی ترقی کے اشاریہ کے تحت گروپ کیے گئے ہیں",
    "options": [
      "Norway, Switzerland, United States of America\nناروے، سوئٹزرلینڈ، ریاستہائے متحدہ امریکہ",
      "China, Sri Lanka, Brazil\nچین، سری لنکا، برازیل",
      "United States of America, Sri Lanka, Bhutan\nریاستہائے متحدہ امریکہ، سری لنکا، بھوٹان",
      "Switzerland, Sri Lanka, China\nسوئٹزرلینڈ، سری لنکا، چین"
    ],
    "correctAnswer": 1,
    "explanation": "2021/2022 کی انسانی ترقی کی رپورٹ کے مطابق، چین، سری لنکا، اور برازیل سبھی 'اعلی' انسانی ترقی کے زمرے میں شامل ہیں۔ ناروے، سوئٹزرلینڈ، اور امریکہ جیسے ممالک 'بہت اعلی' زمرے میں ہیں۔"
  },
  {
    "id": 193,
    "question": "'Seri culture' means (TSTET 11 Jan 2025)\n'سیری کلچر' کا مطلب ہے",
    "options": [
      "Rearing of silk worms for the production of silk fibre\nریشم کے ریشے کی پیداوار کے لیے ریشم کے کیڑوں کی پرورش",
      "The scientific method of rearing honey bees\nشہد کی مکھیوں کی پرورش کا سائنسی طریقہ",
      "Rearing of fish for fish oil\nمچھلی کے تیل کے لیے مچھلیوں کی پرورش",
      "The scientific study of seeds and vegetables\nبیجوں اور سبزیوں کا سائنسی مطالعہ"
    ],
    "correctAnswer": 0,
    "explanation": "سیری کلچر ریشم کے کیڑوں (ریشم کے پتنگوں کے لاروا) کو پالنے اور ان کی پرورش کرنے کا زرعی عمل ہے تاکہ ان کے کوکون کی کٹائی کرکے خام ریشم تیار کیا جا سکے۔"
  },
  {
    "id": 194,
    "question": "Among the following, the Green House Gases are (TSTET 11 Jan 2025)\nمندرجہ ذیل میں سے، گرین ہاؤس گیسیں ہیں",
    "options": [
      "Carbon di oxide, methane and water vapour\nکاربن ڈائی آکسائیڈ، میتھین اور آبی بخارات",
      "Sulphuric acid, nitrogen and oxygen\nسلفیورک ایسڈ، نائٹروجن اور آکسیجن",
      "Carbon di oxide, nitrogen and oxygen\nکاربن ڈائی آکسائیڈ، نائٹروجن اور آکسیجن",
      "Methane, sulphuric acid and oxygen\nمیتھین، سلفیورک ایسڈ اور آکسیجن"
    ],
    "correctAnswer": 0,
    "explanation": "گرین ہاؤس گیسیں ماحولیاتی گیسیں ہیں جو حرارت کو قید کرتی ہیں۔ بنیادی گیسوں میں کاربن ڈائی آکسائیڈ ($CO_2$)، میتھین ($CH_4$)، آبی بخارات ($H_2O$)، اور نائٹرس آکسائیڈ شامل ہیں۔ نائٹروجن اور آکسیجن، جو ماحول کا زیادہ تر حصہ بناتے ہیں، اہم گرین ہاؤس گیسیں نہیں ہیں۔"
  },
  {
    "id": 195,
    "question": "Which of the following industry is located mainly along the banks of the river Hoogly? (TSTET 11 Jan 2025)\nمندرجہ ذیل میں سے کون سی صنعت بنیادی طور پر دریائے ہوگلی کے کناروں پر واقع ہے؟",
    "options": [
      "Cotton Textile Industry\nسوتی ٹیکسٹائل کی صنعت",
      "Jute Textile Industry\nپٹ سن ٹیکسٹائل کی صنعت",
      "Silk Industry\nریشم کی صنعت",
      "Aluminium Smelting Industry\nایلومینیم پگھلانے کی صنعت"
    ],
    "correctAnswer": 1,
    "explanation": "مغربی بنگال میں دریائے ہوگلی کا طاس ہندوستانی پٹ سن کی صنعت کا روایتی مرکز ہے۔ پٹ سن پیدا کرنے والے علاقوں سے قربت، پروسیسنگ کے لیے وافر پانی، اور سستی آبی نقل و حمل نے پٹ سن ملوں کے پھلنے پھولنے کے لیے ایک مثالی ماحول پیدا کیا۔"
  },
  {
    "id": 196,
    "question": "Among the following places, the average monthly temperatures remain more or less same throughout the year (TSTET 11 Jan 2025)\nمندرجہ ذیل مقامات میں سے، اوسط ماہانہ درجہ حرارت سال بھر کم و بیش یکساں رہتا ہے",
    "options": [
      "Hyderabad and Nagpur\nحیدرآباد اور ناگپور",
      "Visakhapatnam and Panaji\nوشاکھاپٹنم اور پنجی",
      "Hyderabad and Panaji\nحیدرآباد اور پنجی",
      "Darjeeling and Bhopal\nدارجلنگ اور بھوپال"
    ],
    "correctAnswer": 1,
    "explanation": "وشاکھاپٹنم اور پنجی جیسے ساحلی مقامات پر سمندری آب و ہوا کا تجربہ ہوتا ہے، جہاں سمندر سے قربت درجہ حرارت کو معتدل رکھتی ہے، جس کی وجہ سے حیدرآباد، ناگپور، اور بھوپال جیسے اندرونی مقامات کے مقابلے میں سال بھر درجہ حرارت کی حد کم ہوتی ہے۔"
  },
  {
    "id": 197,
    "question": "The main purpose of Adolf Hitler in bringing 'The Famous Enabling Act' on 3rd march, 1933 was (TSTET 11 Jan 2025)\n3 مارچ 1933 کو 'مشہور انیبلنگ ایکٹ' لانے میں ایڈولف ہٹلر کا بنیادی مقصد تھا",
    "options": [
      "To establish democratic form of government in Germany\nجرمنی میں جمہوری طرز حکومت قائم کرنا",
      "To bring economic reforms in Germany by assigning the responsibility to Hjalmar Schacht\nہالمار شاخت کو ذمہ داری سونپ کر جرمنی میں معاشی اصلاحات لانا",
      "To establish dictatorship in Germany\nجرمنی میں آمریت قائم کرنا",
      "To arrest and torture the political activists, trade unionists and people of minority communities especially Jews\nسیاسی کارکنوں، ٹریڈ یونینسٹوں اور اقلیتی برادریوں کے لوگوں خصوصاً یہودیوں کو گرفتار اور تشدد کرنا"
    ],
    "correctAnswer": 2,
    "explanation": "1933 کے انیبلنگ ایکٹ نے جرمن کابینہ، اور مؤثر طریقے سے ایڈولف ہٹلر کو، ریخ اسٹگ (پارلیمنٹ) کی منظوری کے بغیر قوانین نافذ کرنے کا اختیار دیا۔ یہ ایکٹ وہ قانونی بنیاد تھی جس نے ویمار جمہوریہ کو ختم کیا اور ہٹلر کی آمریت قائم کی۔"
  },
  {
    "id": 198,
    "question": "On 20th June, 1789 CE, the representatives of Third Estate declared themselves as (TSTET 11 Jan 2025)\n20 جون 1789 عیسوی کو، تیسرے اسٹیٹ کے نمائندوں نے خود کو قرار دیا",
    "options": [
      "National Assembly\nقومی اسمبلی",
      "The representatives of King Louis XVIII\nبادشاہ لوئس XVIII کے نمائندے",
      "Members of the Jacobian Club\nجیکوبن کلب کے اراکین",
      "Directory\nڈائریکٹری"
    ],
    "correctAnswer": 0,
    "explanation": "1789 کے اسٹیٹس جنرل کے دوران، تیسرے اسٹیٹ کے اراکین نے، حق رائے دہی سے محروم محسوس کرتے ہوئے، 17 جون کو خود کو قومی اسمبلی قرار دیا۔ 20 جون کو، جب انہوں نے خود کو اپنے معمول کے میٹنگ ہال سے باہر مقفل پایا، تو انہوں نے قریبی ٹینس کورٹ میں اجلاس کیا اور مشہور ٹینس کورٹ کا حلف لیا، جس میں انہوں نے عہد کیا کہ جب تک آئین قائم نہیں ہو جاتا وہ الگ نہیں ہوں گے۔"
  },
  {
    "id": 199,
    "question": "In 1783, the Great Britain recognised the independence of thirteen American colonies by signing this treaty (TSTET 11 Jan 2025)\n1783 میں، برطانیہ نے اس معاہدے پر دستخط کرکے تیرہ امریکی کالونیوں کی آزادی کو تسلیم کیا",
    "options": [
      "Treaty of Vienna\nویانا کا معاہدہ",
      "Treaty of Frankfort\nفرینکفرٹ کا معاہدہ",
      "Treaty of Versailles\nورسائی کا معاہدہ",
      "Treaty of Paris\nپیرس کا معاہدہ"
    ],
    "correctAnswer": 3,
    "explanation": "پیرس کا معاہدہ، جو 3 ستمبر 1783 کو دستخط ہوا، نے امریکی انقلابی جنگ کو باضابطہ طور پر ختم کیا۔ اس معاہدے میں، برطانیہ نے باضابطہ طور پر ریاستہائے متحدہ کی آزادی کو تسلیم کیا۔"
  },
  {
    "id": 200,
    "question": "The Socialist thinker who advocated for public control of Property through Central Planning (TSTET 11 Jan 2025)\nوہ سوشلسٹ مفکر جس نے مرکزی منصوبہ بندی کے ذریعے جائیداد پر عوامی کنٹرول کی وکالت کی",
    "options": [
      "Babeuf\nبابیوف",
      "Saint Simon of France\nفرانس کا سینٹ سائمن",
      "Simon Boliver\nسائمن بولیور",
      "Thomas Moore\nتھامس مور"
    ],
    "correctAnswer": 1,
    "explanation": "ہنری ڈی سینٹ سائمن ایک ابتدائی فرانسیسی یوٹوپیائی سوشلسٹ تھے جنہوں نے سائنسدانوں اور صنعت کاروں کی ایک کونسل کی قیادت میں ایک معاشرے کا تصور کیا۔ انہوں نے ایک مرکزی منصوبہ بند معیشت کی دلیل دی جہاں جائیداد کو نجی منافع کے بجائے پورے معاشرے کے فائدے کے لیے منظم کیا جائے گا۔"
  },
  {
    "id": 201,
    "question": "In between 1500 and 1800, most of Central and South America had come under the control of these European countries (TSTET 11 Jan 2025)\n1500 اور 1800 کے درمیان، وسطی اور جنوبی امریکہ کا بیشتر حصہ ان یورپی ممالک کے کنٹرول میں آ گیا تھا",
    "options": [
      "France and Spain\nفرانس اور اسپین",
      "Spain and Portugal\nاسپین اور پرتگال",
      "France and England\nفرانس اور انگلینڈ",
      "Germany and Portugal\nجرمنی اور پرتگال"
    ],
    "correctAnswer": 1,
    "explanation": "عہدِ دریافت کے بعد، اسپین اور پرتگال امریکہ کے بنیادی نوآبادیاتی تھے۔ اسپین نے میکسیکو، وسطی امریکہ، اور مغربی جنوبی امریکہ سمیت وسیع علاقوں کو فتح کیا، جبکہ پرتگال نے برازیل کو نوآبادیاتی بنایا، جیسا کہ معاہدہ ٹورڈیسلاس کے ذریعے قائم کیا گیا تھا۔"
  },
  {
    "id": 202,
    "question": "Which of the following Vedas is primarily focused on hymns and praises to deities? (TSTET 11 Jan 2025)\nمندرجہ ذیل میں سے کون سا وید بنیادی طور پر دیوتاؤں کے لیے بھجنوں اور تعریفوں پر مرکوز ہے؟",
    "options": [
      "Samaveda\nسام وید",
      "Yajurveda\nیجر وید",
      "Atharvanaveda\nاتھرو وید",
      "Rigveda\nرگ وید"
    ],
    "correctAnswer": 3,
    "explanation": "رگ وید، چار ویدوں میں سب سے پرانا، سنسکرت بھجنوں (سکتوں) کا ایک قدیم مجموعہ ہے۔ یہ بنیادی طور پر مختلف دیوتاؤں جیسے اگنی، اندر، اور سوما کی تعریف اور پکار کے لیے وقف ہے۔"
  },
  {
    "id": 203,
    "question": "The ancient kingdom \"Ashmaka\" was located in this part of India (TSTET 11 Jan 2025)\nقدیم سلطنت \"اشمک\" ہندوستان کے اس حصے میں واقع تھی",
    "options": [
      "Northern India\nشمالی ہندوستان",
      "Southern India\nجنوبی ہندوستان",
      "Eastern India\nمشرقی ہندوستان",
      "Western India\nمغربی ہندوستان"
    ],
    "correctAnswer": 1,
    "explanation": "اشمک (یا اسک) قدیم ہندوستان کے سولہ مہاجن پدوں میں سے ایک تھا۔ یہ واحد تھا جو وندھیا پہاڑوں کے جنوب میں واقع تھا، جو جدید دور کے تلنگانہ اور مہاراشٹر کے علاقے میں دریائے گوداوری کے کناروں پر واقع تھا۔"
  },
  {
    "id": 204,
    "question": "This Mughal emperor had captured Qutub Shahi ruler Abul Hasan Tana Shah (TSTET 11 Jan 2025)\nاس مغل شہنشاہ نے قطب شاہی حکمران ابوالحسن تانا شاہ کو گرفتار کیا تھا",
    "options": [
      "Shah Jahan\nشاہ جہاں",
      "Aurangzeb\nاورنگزیب",
      "Akbar\nاکبر",
      "Jahangir\nجہانگیر"
    ],
    "correctAnswer": 1,
    "explanation": "1687 میں، گولکنڈہ قلعے کے آٹھ ماہ طویل محاصرے کے بعد، مغل شہنشاہ اورنگزیب نے قطب شاہی خاندان کے آخری حکمران ابوالحسن تانا شاہ کو شکست دی اور قید کر لیا، اس طرح سلطنت کو مغل سلطنت میں شامل کر لیا۔"
  },
  {
    "id": 205,
    "question": "On 9th December 2009, the leader who made an announcement regarding Telangana (TSTET 11 Jan 2025)\n9 دسمبر 2009 کو، تلنگانہ کے بارے میں اعلان کرنے والے رہنما تھے",
    "options": [
      "Pranab Mukherjee\nپرنب مکھرجی",
      "P. Chidambaram\nپی. چدمبرم",
      "Sonia Gandhi\nسونیا گاندھی",
      "Jairam Ramesh\nجے رام رمیش"
    ],
    "correctAnswer": 1,
    "explanation": "9 دسمبر 2009 کو، اس وقت کے مرکزی وزیر داخلہ پی. چدمبرم نے ایک تاریخی اعلان کیا جس میں کہا گیا کہ حکومت ہند تلنگانہ کی علیحدہ ریاست بنانے کا عمل شروع کرے گی۔"
  },
  {
    "id": 206,
    "question": "Kuo-Min-Tang [KMT] followed the political Philosophy based on the idea of (TSTET 11 Jan 2025)\nکو-من-تانگ [KMT] نے اس کے نظریے پر مبنی سیاسی فلسفے کی پیروی کی",
    "options": [
      "Sun Yat-sen\nسن یات سین",
      "Chiang Kai-shek\nچیانگ کائی شیک",
      "Mao Zedong\nماؤ زے تنگ",
      "Hu Jintao\nہو جن تاؤ"
    ],
    "correctAnswer": 0,
    "explanation": "کوومنتانگ (KMT)، یا چینی نیشنلسٹ پارٹی، کی بنیاد سن یات سین نے رکھی تھی۔ اس کا نظریہ ان کے 'عوام کے تین اصولوں' پر مبنی ہے: قوم پرستی (منزو)، جمہوریت (منکوان)، اور عوام کی livelihood (منشینگ)۔"
  },
  {
    "id": 207,
    "question": "Parivrajakas typically led the life (TSTET 11 Jan 2025)\nپریوراجک عام طور پر زندگی گزارتے تھے",
    "options": [
      "In fixed settlements\nمستقل بستیوں میں",
      "Wandering from village to village\nگاؤں گاؤں گھومتے ہوئے",
      "In asrams\nآشرموں میں",
      "In the royal court\nشاہی دربار میں"
    ],
    "correctAnswer": 1,
    "explanation": "پریوراجک قدیم ہندوستان میں گھومنے پھرنے والے سنیاسی یا مذہبی بھکاری تھے۔ انہوں نے روحانی علم اور گفتگو کے حصول کے لیے ایک جگہ سے دوسری جگہ پیدل سفر کرتے ہوئے مستقل ٹھکانوں اور خاندانی زندگی کو ترک کر دیا تھا۔"
  },
  {
    "id": 208,
    "question": "The primary objective of the Cripps Mission in India was (TSTET 11 Jan 2025)\nہندوستان میں کرپس مشن کا بنیادی مقصد تھا",
    "options": [
      "To negotiate peace with Japan\nجاپان کے ساتھ امن مذاکرات کرنا",
      "To gain Indian support for the British war effort\nبرطانوی جنگی کوششوں کے لیے ہندوستانی حمایت حاصل کرنا",
      "To promote Hindu-Muslim unity\nہندو مسلم اتحاد کو فروغ دینا",
      "To grant India full independence\nہندوستان کو مکمل آزادی دینا"
    ],
    "correctAnswer": 1,
    "explanation": "کرپس مشن کو برطانوی حکومت نے دوسری جنگ عظیم کے دوران مارچ 1942 میں ہندوستان بھیجا تھا۔ اس کا بنیادی مقصد محوری طاقتوں کے خلاف برطانوی جنگی کوششوں کے لیے ہندوستانی رہنماؤں کا مکمل تعاون اور حمایت حاصل کرنا تھا۔"
  },
  {
    "id": 209,
    "question": "Among the following, identify the statutory body (TSTET 11 Jan 2025)\nمندرجہ ذیل میں سے، قانونی ادارے کی نشاندہی کریں",
    "options": [
      "National Human Rights Commission\nقومی انسانی حقوق کمیشن",
      "The Election Commission\nالیکشن کمیشن",
      "The Union Public Service Commission\nیونین پبلک سروس کمیشن",
      "The Finance Commission\nفنانس کمیشن"
    ],
    "correctAnswer": 0,
    "explanation": "ایک قانونی ادارہ پارلیمنٹ کے ایک ایکٹ کے ذریعے بنایا جاتا ہے۔ قومی انسانی حقوق کمیشن (NHRC) 1993 میں انسانی حقوق کے تحفظ کے ایکٹ کے تحت قائم کیا گیا تھا۔ فہرست میں شامل دیگر ادارے آئینی ادارے ہیں، کیونکہ وہ براہ راست ہندوستان کے آئین کے ذریعے قائم کیے گئے ہیں۔"
  },
  {
    "id": 210,
    "question": "Among the following, identify the power of the President of India (TSTET 11 Jan 2025)\nمندرجہ ذیل میں سے، ہندوستان کے صدر کے اختیار کی نشاندہی کریں",
    "options": [
      "Dissolves Rajya Sabha and State Legislative Councils\nراجیہ سبھا اور ریاستی قانون ساز کونسلوں کو تحلیل کرتا ہے",
      "Calls for a joint session of the Parliament\nپارلیمنٹ کا مشترکہ اجلاس بلاتا ہے",
      "Nominates 12 members to Lok Sabha\nلوک سبھا کے لیے 12 اراکین کو نامزد کرتا ہے",
      "Decides whether a bill is a Money bill or an Ordinary bill\nفیصلہ کرتا ہے کہ آیا کوئی بل منی بل ہے یا عام بل"
    ],
    "correctAnswer": 1,
    "explanation": "آئین کے آرٹیکل 108 کے تحت، ہندوستان کا صدر کسی غیر منی بل پر تعطل کو حل کرنے کے لیے پارلیمنٹ کے دونوں ایوانوں کا مشترکہ اجلاس بلا سکتا ہے۔ منی بل پر فیصلہ لوک سبھا کے اسپیکر کا ہوتا ہے۔"
  },
  {
    "id": 211,
    "question": "Ravi is forced to work as a bonded labour for several years for the amount his father had received from the landlord. It would be a violation of this fundamental Right (TSTET 11 Jan 2025)\nروی کو کئی سالوں تک بندھوا مزدور کے طور پر کام کرنے پر مجبور کیا جاتا ہے کیونکہ اس کے والد نے زمیندار سے رقم وصول کی تھی۔ یہ اس بنیادی حق کی خلاف ورزی ہوگی",
    "options": [
      "Right to Equality\nمساوات کا حق",
      "Right to freedom\nآزادی کا حق",
      "Right against exploitation\nاستحصال کے خلاف حق",
      "Right against Constitutional Remedies\nآئینی علاج کا حق"
    ],
    "correctAnswer": 2,
    "explanation": "ہندوستانی آئین کا آرٹیکل 23 انسانی اسمگلنگ، 'بیگار' (جبری مشقت)، اور جبری مشقت کی کسی بھی دوسری شکل پر پابندی لگاتا ہے۔ بندھوا مزدوری استحصال کے خلاف اس بنیادی حق کی براہ راست خلاف ورزی ہے۔"
  },
  {
    "id": 212,
    "question": "During National Emergency all or any of the Fundamental rights can be suspended by the Indian president except (TSTET 11 Jan 2025)\nقومی ایمرجنسی کے دوران ہندوستانی صدر کے ذریعہ تمام یا کسی بھی بنیادی حقوق کو معطل کیا جاسکتا ہے سوائے",
    "options": [
      "Article 20 and 21 of the Indian Constitution\nہندوستانی آئین کے آرٹیکل 20 اور 21",
      "Article 21 of the Indian Constitution only\nصرف ہندوستانی آئین کا آرٹیکل 21",
      "Article 19 of the Indian Constitution only\nصرف ہندوستانی آئین کا آرٹیکل 19",
      "Articles 19-21 of the Indian Constitution\nہندوستانی آئین کے آرٹیکلز 19-21"
    ],
    "correctAnswer": 0,
    "explanation": "44 ویں ترمیمی ایکٹ، 1978 کے مطابق، قومی ایمرجنسی کے دوران بھی، آرٹیکل 20 (جرائم کے لیے سزا کے سلسلے میں تحفظ) اور آرٹیکل 21 (زندگی اور ذاتی آزادی کا تحفظ) کے تحت ضمانت دیے گئے بنیادی حقوق کو معطل نہیں کیا جا سکتا۔"
  },
  {
    "id": 213,
    "question": "Which of the following DOES NOT come under Violation of Human Rights? (TSTET 11 Jan 2025)\nدرج ذیل میں سے کون سا انسانی حقوق کی خلاف ورزی کے زمرے میں نہیں آتا؟",
    "options": [
      "Denial of Right to information\nمعلومات کے حق سے انکار",
      "Delay in investigating of crimes\nجرائم کی تفتیش میں تاخیر",
      "Discriminations against women in the family\nخاندان میں خواتین کے خلاف امتیازی سلوک",
      "Not providing employment by the Government in the Government sector\nحکومت کی طرف سے سرکاری شعبے میں روزگار فراہم نہ کرنا"
    ],
    "correctAnswer": 3,
    "explanation": "جبکہ ریاست کی ذمہ داری ہے کہ وہ روزگار کے مواقع پیدا کرے، ہر شہری کو سرکاری نوکری فراہم نہ کر پانا انسانی حقوق کی خلاف ورزی نہیں سمجھا جاتا۔ دیگر آپشنز میں انصاف، معلومات اور مساوات سے انکار شامل ہے، جو کہ تسلیم شدہ انسانی حقوق کی خلاف ورزیاں ہیں۔"
  },
  {
    "id": 214,
    "question": "This amendment of the Indian Constitution inserted a list of Fundamental Duties of Citizens to the constitution (TSTET 11 Jan 2025)\nہندوستانی آئین کی اس ترمیم نے آئین میں شہریوں کے بنیادی فرائض کی ایک فہرست شامل کی",
    "options": [
      "42nd amendment\n42 ویں ترمیم",
      "44th Amendment\n44 ویں ترمیم",
      "61st Amendment\n61 ویں ترمیم",
      "52nd Amendment\n52 ویں ترمیم"
    ],
    "correctAnswer": 0,
    "explanation": "شہریوں کے بنیادی فرائض کو 1976 میں 42 ویں ترمیم کے ذریعے سورن سنگھ کمیٹی کی سفارشات پر ہندوستان کے آئین میں شامل کیا گیا تھا۔ یہ آرٹیکل 51-A میں موجود ہیں۔"
  },
  {
    "id": 215,
    "question": "This article of the Indian Constitution states that no person shall be deprived of his life or personal liberty except according to the procedure established by law (TSTET 11 Jan 2025)\nہندوستانی آئین کا یہ آرٹیکل کہتا ہے کہ کسی بھی شخص کو قانون کے قائم کردہ طریقہ کار کے علاوہ اس کی زندگی یا ذاتی آزادی سے محروم نہیں کیا جائے گا",
    "options": [
      "Article 19\nآرٹیکل 19",
      "Article 21\nآرٹیکل 21",
      "Article 22\nآرٹیکل 22",
      "Article 23\nآرٹیکل 23"
    ],
    "correctAnswer": 1,
    "explanation": "ہندوستانی آئین کا آرٹیکل 21 بنیادی حقوق کا سنگ بنیاد ہے، جو زندگی اور ذاتی آزادی کے تحفظ کی ضمانت دیتا ہے اور یہ کہتا ہے کہ کسی بھی شخص کو قانونی طور پر قائم کردہ طریقہ کار کے علاوہ ان حقوق سے محروم نہیں کیا جا سکتا۔"
  },
  {
    "id": 216,
    "question": "The preamble of the Indian Constitution reflects (TSTET 11 Jan 2025)\nہندوستانی آئین کا دیباچہ عکاسی کرتا ہے",
    "options": [
      "Fundamental Duties of a citizen\nشہری کے بنیادی فرائض",
      "The Aims, Philosophy and Objectives\nمقاصد، فلسفہ اور اہداف",
      "The Principles of Liberalism\nلبرل ازم کے اصول",
      "Individual Rights\nانفرادی حقوق"
    ],
    "correctAnswer": 1,
    "explanation": "دیباچہ آئین کے تعارف کے طور پر کام کرتا ہے اور اس کے بنیادی فلسفے اور بنیادی اقدار کو مجسم کرتا ہے۔ یہ اتھارٹی کے ماخذ، ہندوستانی ریاست کی نوعیت، اور آئین کے مقاصد، جیسے انصاف، آزادی، مساوات اور بھائی چارے کو محفوظ بنانے کا خاکہ پیش کرتا ہے۔"
  },
  {
    "id": 217,
    "question": "Among the following, identify the correct statement regarding the cash reserves of banks (TSTET 11 Jan 2025)\nدرج ذیل میں سے، بینکوں کے نقد ذخائر کے بارے میں صحیح بیان کی نشاندہی کریں",
    "options": [
      "Banks do not keep any cash\nبینک کوئی نقد رقم نہیں رکھتے",
      "Banks keep a small proportion deposits as cash\nبینک ڈپازٹس کا ایک چھوٹا حصہ نقد کے طور پر رکھتے ہیں",
      "Banks keep all deposits as cash\nبینک تمام ڈپازٹس کو نقد کے طور پر رکھتے ہیں",
      "Banks invest all deposits\nبینک تمام ڈپازٹس کی سرمایہ کاری کرتے ہیں"
    ],
    "correctAnswer": 1,
    "explanation": "فریکشنل ریزرو بینکنگ کے نظام کے تحت، تجارتی بینکوں کو اپنے صارفین کے ڈپازٹس کا صرف ایک حصہ بطور ریزرو (یا تو والٹ کیش کے طور پر یا مرکزی بینک کے پاس ڈپازٹس کے طور پر) رکھنے کی ضرورت ہوتی ہے۔ باقی ڈپازٹس قرض دینے کے لیے دستیاب ہوتے ہیں۔"
  },
  {
    "id": 218,
    "question": "The typical relationship between the interest rates on which banks charge on loans and the interest rates they offer on deposits (TSTET 11 Jan 2025)\nبینکوں کی طرف سے قرضوں پر وصول کی جانے والی شرح سود اور ڈپازٹس پر پیش کی جانے والی شرح سود کے درمیان عام تعلق",
    "options": [
      "The rate of interest will be the same\nشرح سود ایک جیسی ہوگی",
      "Banks pay high interest rates on deposits\nبینک ڈپازٹس پر زیادہ شرح سود ادا کرتے ہیں",
      "Banks charge low interest rates on loans\nبینک قرضوں پر کم شرح سود وصول کرتے ہیں",
      "Banks charge high interest rates on loans\nبینک قرضوں پر زیادہ شرح سود وصول کرتے ہیں"
    ],
    "correctAnswer": 3,
    "explanation": "ایک بینک کا کاروباری ماڈل شرح سود کے پھیلاؤ پر انحصار کرتا ہے۔ وہ قرض لینے والوں کو دیے گئے قرضوں پر بچت کرنے والوں سے ڈپازٹس پر ادا کی جانے والی شرح سے زیادہ شرح سود وصول کرتے ہیں۔ یہ مارجن ان کے آپریٹنگ اخراجات کو پورا کرتا ہے اور منافع پیدا کرتا ہے۔"
  },
  {
    "id": 219,
    "question": "Among the following food items, the item that is NOT included in \"the Food Price Index (FPI)\" (TSTET 11 Jan 2025)\nدرج ذیل غذائی اشیاء میں سے، وہ شے جو \"فوڈ پرائس انڈیکس (FPI)\" میں شامل نہیں ہے",
    "options": [
      "Beverages\nمشروبات",
      "Wheat\nگندم",
      "Pulses\nدالیں",
      "Rice\nچاول"
    ],
    "correctAnswer": 0,
    "explanation": "FAO فوڈ پرائس انڈیکس (FPI) کلیدی غذائی اشیاء کی ایک ٹوکری کی بین الاقوامی قیمتوں کو ٹریک کرتا ہے۔ اس میں بنیادی طور پر اناج، سبزیوں کے تیل، چینی، گوشت اور دودھ کی مصنوعات شامل ہیں۔ پراسیس شدہ اشیاء جیسے مشروبات (کافی، چائے، وغیرہ) عام طور پر اس انڈیکس کا حصہ نہیں ہوتے۔"
  },
  {
    "id": 220,
    "question": "Besides the people who have low-incomes, who else will suffer most when the rate of inflation is very high (TSTET 11 Jan 2025)\nکم آمدنی والے لوگوں کے علاوہ، جب افراط زر کی شرح بہت زیادہ ہو تو اور کون سب سے زیادہ متاثر ہوگا",
    "options": [
      "Only wealthy investors\nصرف امیر سرمایہ کار",
      "Individuals who do not own property\nوہ افراد جن کے پاس جائیداد نہیں ہے",
      "The people who invest savings in unproductive assets\nوہ لوگ جو بچت کو غیر پیداواری اثاثوں میں لگاتے ہیں",
      "Only government employees\nصرف سرکاری ملازمین"
    ],
    "correctAnswer": 2,
    "explanation": "زیادہ افراط زر پیسے کی قوت خرید کو ختم کر دیتی ہے۔ وہ افراد جو اپنی بچت کو نقد یا غیر پیداواری اثاثوں (جیسے گھر میں رکھا سونا یا زمین جو آمدنی پیدا نہیں کرتی) میں رکھتے ہیں، نقصان اٹھاتے ہیں کیونکہ وقت کے ساتھ ساتھ ان کی بچت کی حقیقی قدر کم ہو جاتی ہے۔"
  },
  {
    "id": 221,
    "question": "In the following way, the goldsmiths contributed to the development of paper money (TSTET 11 Jan 2025)\nمندرجہ ذیل طریقے سے، سناروں نے کاغذی کرنسی کی ترقی میں حصہ ڈالا",
    "options": [
      "By charging fees for currency exchange\nکرنسی کے تبادلے کے لیے فیس وصول کرکے",
      "By issuing receipts for stored coins, leading to a new system of paper money\nذخیرہ شدہ سکوں کی رسیدیں جاری کرکے، جس سے کاغذی کرنسی کا ایک نیا نظام وجود میں آیا",
      "By minting coins that were widely accepted\nایسے سکے بنا کر جو بڑے پیمانے پر قبول کیے گئے",
      "By creating a national bank\nایک قومی بینک بنا کر"
    ],
    "correctAnswer": 1,
    "explanation": "تاریخی طور پر، لوگ اپنے قیمتی سکے سناروں کے پاس حفاظت کے لیے جمع کرواتے تھے، جس کے لیے سنار ایک رسید جاری کرتا تھا۔ وقت گزرنے کے ساتھ، یہ رسیدیں تبادلے کے ایک ذریعہ کے طور پر گردش کرنے لگیں، کیونکہ انہیں اصل سکوں کے مقابلے میں لے جانا آسان اور محفوظ تھا۔ یہ عمل جدید بینک نوٹوں کا پیش خیمہ تھا۔"
  },
  {
    "id": 222,
    "question": "Because of this reason, the traders in the earlier days preferred bank receipts over physical coins (TSTET 11 Jan 2025)\nاس وجہ سے، ابتدائی دنوں میں تاجر جسمانی سکوں پر بینک کی رسیدوں کو ترجیح دیتے تھے",
    "options": [
      "Bank receipts were easier to carry\nبینک کی رسیدیں لے جانے میں آسان تھیں",
      "Bank receipts were accepted only in certain regions\nبینک کی رسیدیں صرف کچھ علاقوں میں قبول کی جاتی تھیں",
      "Bank receipts could be easily exchanged for goods\nبینک کی رسیدوں کو آسانی سے سامان کے بدلے تبدیل کیا جا سکتا تھا",
      "Bank receipts were more valuable than coins\nبینک کی رسیدیں سکوں سے زیادہ قیمتی تھیں"
    ],
    "correctAnswer": 0,
    "explanation": "تاجروں کے لیے بینک کی رسیدوں (کاغذی کرنسی کی ابتدائی شکلیں) کا بنیادی فائدہ ان کی نقل و حمل میں آسانی اور حفاظت تھی۔ تجارت کے لیے بھاری، بڑے سکوں کی بڑی رقم لے جانا غیر সুবিধাজনক اور پرخطر تھا، جبکہ کاغذی رسیدیں ہلکی اور سنبھالنے میں آسان تھیں۔"
  },
  {
    "id": 223,
    "question": "One of the following benefits is provided to the account holders through the PM Jan Dhan Yojana (TSTET 11 Jan 2025)\nپی ایم جن دھن یوجنا کے ذریعے کھاتہ داروں کو درج ذیل میں سے ایک فائدہ فراہم کیا جاتا ہے",
    "options": [
      "A Rupay debit card shall be issued, in the same way Rs. 1 lakh accident insurance shall be provided\nایک روپے ڈیبٹ کارڈ جاری کیا جائے گا، اسی طرح 1 لاکھ روپے کا ایکسیڈنٹ انشورنس فراہم کیا جائے گا",
      "A credit card with a high credit limit shall be issued\nایک اعلی کریڈٹ کی حد والا کریڈٹ کارڈ جاری کیا جائے گا",
      "A monthly cash allowance is provided\nایک ماہانہ نقد الاؤنس فراہم کیا جاتا ہے",
      "Free access to international money transfers\nبین الاقوامی منی ٹرانسفر تک مفت رسائی"
    ],
    "correctAnswer": 0,
    "explanation": "پردھان منتری جن دھن یوجنا (PMJDY) مالی شمولیت کے لیے ایک قومی مشن ہے۔ اس کی اہم خصوصیات میں ایک بنیادی بچت بینک اکاؤنٹ، ایک روپے ڈیبٹ کارڈ، اور کھاتہ دار کے لیے ایک ان بلٹ ایکسیڈنٹ انشورنس کور فراہم کرنا شامل ہے۔"
  },
  {
    "id": 224,
    "question": "The maximum amount of debits allowed in a Small Account in a month is (TSTET 11 Jan 2025)\nایک چھوٹے اکاؤنٹ میں ایک مہینے میں ڈیبٹ کی زیادہ سے زیادہ رقم کی اجازت ہے",
    "options": [
      "Rs. 5,000",
      "Rs. 10,000",
      "Rs. 20,000",
      "Rs. 15,000"
    ],
    "correctAnswer": 1,
    "explanation": "ریزرو بینک آف انڈیا (RBI) کے رہنما خطوط کے مطابق، آسان KYC اصولوں کے ساتھ کھولے گئے 'چھوٹے اکاؤنٹ' میں کچھ حدود ہوتی ہیں، بشمول یہ کہ ایک مہینے میں کل نکلوائی گئی رقم اور منتقلی ₹10,000 سے زیادہ نہیں ہو سکتی۔"
  },
  {
    "id": 225,
    "question": "The primary focus of the Public Distribution System (PDS) in India is (TSTET 11 Jan 2025)\nہندوستان میں پبلک ڈسٹری بیوشن سسٹم (PDS) کی بنیادی توجہ ہے",
    "options": [
      "Promoting agricultural exports\nزرعی برآمدات کو فروغ دینا",
      "Ensuring access to food grains\nغذائی اجناس تک رسائی کو یقینی بنانا",
      "Providing free meals to all\nسب کو مفت کھانا فراہم کرنا",
      "Regulating food prices\nخوراک کی قیمتوں کو منظم کرنا"
    ],
    "correctAnswer": 1,
    "explanation": "پبلک ڈسٹری بیوشن سسٹم (PDS) حکومت ہند کی طرف سے قائم کردہ ایک فوڈ سیکیورٹی سسٹم ہے۔ اس کا بنیادی مقصد معاشرے کے غریب طبقوں کو سبسڈی والی قیمتوں پر گندم اور چاول جیسی ضروری غذائی اجناس تقسیم کرنا ہے، اس طرح فوڈ سیکیورٹی کو یقینی بنایا جاتا ہے۔"
  },
  {
    "id": 226,
    "question": "One of the following is NOT considered a requirement as a factor of production (TSTET 11 Jan 2025)\nدرج ذیل میں سے ایک کو پیداوار کے عنصر کے طور پر ایک ضرورت نہیں سمجھا جاتا ہے",
    "options": [
      "Government regulations\nسرکاری ضوابط",
      "Capital including tools and machines\nسرمایہ بشمول اوزار اور مشینیں",
      "Labour which includes skilled and unskilled\nمحنت جس میں ہنر مند اور غیر ہنر مند شامل ہیں",
      "Land and other natural resources\nزمین اور دیگر قدرتی وسائل"
    ],
    "correctAnswer": 0,
    "explanation": "معاشیات میں پیداوار کے روایتی عوامل زمین، محنت، سرمایہ اور انٹرپرینیورشپ ہیں۔ سرکاری ضوابط خارجی حالات یا قانونی ڈھانچہ ہیں جس کے اندر پیداوار ہوتی ہے، نہ کہ خود پیداوار کا ایک عنصر۔"
  },
  {
    "id": 227,
    "question": "The significant outcome of the Arab Spring in 2010-11 was (TSTET 11 Jan 2025)\n2010-11 میں عرب بہار کا اہم نتیجہ تھا",
    "options": [
      "It caused a decline in media influence\nاس نے میڈیا کے اثر و رسوخ میں کمی کا سبب بنا",
      "It was primarily a cultural movement without political implications\nیہ بنیادی طور پر سیاسی مضمرات کے بغیر ایک ثقافتی تحریک تھی",
      "It resulted in the uprooting of dictators in several nations\nاس کے نتیجے میں کئی ممالک میں آمروں کا خاتمہ ہوا",
      "It led to the establishment of new trade agreements\nاس نے نئے تجارتی معاہدوں کے قیام کی راہ ہموار کی"
    ],
    "correctAnswer": 2,
    "explanation": "عرب بہار جمہوریت کے حامی بغاوتوں کا ایک سلسلہ تھا جو کئی عرب ممالک میں پھیل گیا۔ اس کے سب سے اہم اور فوری نتائج میں سے ایک تیونس، مصر اور لیبیا جیسے ممالک میں طویل عرصے سے قائم آمر حکمرانوں اور ڈکٹیٹروں کا تختہ الٹنا تھا۔"
  },
  {
    "id": 228,
    "question": "The share of agriculture in a country's GDP over a period of 43-years since independence (TSTET 11 Jan 2025)\nآزادی کے بعد 43 سال کے عرصے میں ملک کی جی ڈی پی میں زراعت کا حصہ",
    "options": [
      "It has become the dominant sector\nیہ غالب شعبہ بن گیا ہے",
      "It fell down drastically\nاس میں زبردست کمی آئی",
      "It remained constant\nیہ مستقل رہا",
      "It increased significantly\nاس میں نمایاں اضافہ ہوا"
    ],
    "correctAnswer": 1,
    "explanation": "جیسے جیسے کسی ملک کی معیشت ترقی کرتی ہے، جی ڈی پی میں بنیادی شعبے (زراعت) کا حصہ عام طور پر کم ہوتا ہے جبکہ ثانوی (صنعت) اور ثالثی (خدمات) شعبوں کے حصے بڑھتے ہیں۔ ہندوستان میں، آزادی کے بعد سے، خدمات اور صنعتی شعبوں کی تیز رفتار ترقی نے قومی جی ڈی پی میں زراعت کے فیصد حصہ میں زبردست کمی کا باعث بنا ہے۔"
  },
  {
    "id": 229,
    "question": "Among the following identify the learning experience placed at fourth from base of the cone in the order of increasing abstractness in Edgar Dale's cone of experiences (TSTET 11 Jan 2025)\nایڈگر ڈیل کے تجربات کے کون میں بڑھتی ہوئی تجرید کی ترتیب میں، درج ذیل میں سے اس سیکھنے کے تجربے کی نشاندہی کریں جو کون کی بنیاد سے چوتھے نمبر پر ہے",
    "options": [
      "Field Trips\nفیلڈ ٹرپس",
      "Demonstration\nمظاہرہ",
      "Exhibits\nنمائشیں",
      "Dramatic participation\nڈرامائی شرکت"
    ],
    "correctAnswer": 0,
    "explanation": "ایڈگر ڈیل کا 'کون آف ایکسپیریئنس' سیکھنے کے عمل کو سب سے ٹھوس (بنیاد) سے سب سے زیادہ تجریدی (اوپر) تک ترتیب دیتا ہے۔ بنیاد سے ترتیب یہ ہے: براہ راست تجربات، مصنوعی تجربات، ڈرامائی شرکت، مظاہرے، فیلڈ ٹرپس، نمائشیں، وغیرہ۔ دیے گئے آپشنز میں، ڈرامائی شرکت سب سے زیادہ ٹھوس ہے، اس کے بعد مظاہرہ، پھر فیلڈ ٹرپس ہیں۔ فراہم کردہ آپشنز کی بنیاد پر اور ٹھوس سے تجریدی کی طرف بڑھتے ہوئے، فیلڈ ٹرپس کو مظاہرے اور ڈرامائی شرکت کے بعد رکھا جائے گا۔"
  },
  {
    "id": 230,
    "question": "As a social studies teacher which of the following would you include in the syllabus for teaching major challenges still prevailing in contemporary society in India. (TSTET 11 Jan 2025)\nایک سماجی علوم کے استاد کے طور پر آپ ہندوستان کے معاصر معاشرے میں اب بھی رائج بڑے چیلنجز کی تعلیم کے لیے نصاب میں درج ذیل میں سے کس کو شامل کریں گے؟",
    "options": [
      "A) Religiousness\nالف) مذہبیت",
      "B) Discrimination among women\nب) خواتین میں امتیازی سلوک",
      "C) Child Abuse\nج) بچوں پر تشدد",
      "D) Regionalism\nد) علاقائیت"
    ],
    "correctAnswer": 1,
    "explanation": "خواتین کے خلاف امتیازی سلوک (B)، بچوں پر تشدد (C)، اور تفرقہ انگیز علاقائیت (D) جدید ہندوستان میں تمام اہم اور وسیع پیمانے پر تسلیم شدہ سماجی چیلنجز ہیں۔ 'مذہبیت' (A)، یعنی مذہبی ہونے کی حالت، بذات خود ایک سماجی مسئلہ نہیں ہے، برخلاف مذہبی انتہا پسندی یا فرقہ پرستی کے۔"
  },
  {
    "id": 231,
    "question": "The essential terms and definitions relating to a topic in social studies relate to this objective (TSTET 11 Jan 2025)\nسماجی علوم میں کسی موضوع سے متعلق ضروری اصطلاحات اور تعریفات اس مقصد سے تعلق رکھتی ہیں",
    "options": [
      "Skill\nمہارت",
      "Application\nاطلاق",
      "Knowledge\nعلم",
      "Appreciation\nتحسین"
    ],
    "correctAnswer": 2,
    "explanation": "بلوم کے تعلیمی مقاصد کی درجہ بندی میں، 'علم' کی سطح سب سے بنیادی ہے۔ اس میں حقائق، بنیادی تصورات، اور جوابات کو یاد کرنا شامل ہے، جس میں ضروری اصطلاحات اور ان کی تعریفات کو جاننا اور یاد رکھنا بھی شامل ہے۔"
  },
  {
    "id": 232,
    "question": "Among the following, which are INCORRECT statements regarding aims and objectives of social studies (TSTET 11 Jan 2025)\nدرج ذیل میں سے، سماجی علوم کے مقاصد اور اہداف کے بارے میں کون سے بیانات غلط ہیں",
    "options": [
      "A) Aims are the steps to achieve the objectives\nالف) مقاصد اہداف کو حاصل کرنے کے اقدامات ہیں",
      "B) Objectives may not change as per the content\nب) اہداف مواد کے مطابق تبدیل نہیں ہوسکتے ہیں",
      "C) Aims are general and long term achievable\nج) مقاصد عمومی اور طویل مدتی قابل حصول ہیں",
      "Correct answer: A & B only\nصحیح جواب: صرف الف اور ب"
    ],
    "correctAnswer": 0,
    "explanation": "بیان (الف) غلط ہے کیونکہ تعلق الٹا ہے: اہداف وسیع، طویل مدتی مقاصد کو حاصل کرنے کے لیے مخصوص، قابل پیمائش اقدامات ہیں۔ بیان (ب) غلط ہے کیونکہ سیکھنے کے اہداف مواد کے لیے مخصوص ہوتے ہیں اور موضوع کے ساتھ تبدیل ہونے چاہئیں۔ بیان (ج) درست ہے۔ لہذا، غلط بیانات الف اور ب ہیں۔"
  },
  {
    "id": 233,
    "question": "The following Curriculum Framework of Teacher Education suggested giving priority for practicum, life skills and self and participatory learning in pre-service teacher education programmes. (TSTET 11 Jan 2025)\nاساتذہ کی تعلیم کے درج ذیل نصابی فریم ورک نے پری سروس ٹیچر ایجوکیشن پروگراموں میں پریکٹیکم، زندگی کی مہارتوں اور خود اور شراکتی سیکھنے کو ترجیح دینے کی تجویز دی ہے۔",
    "options": [
      "NCF-2000",
      "NCFTE-2009",
      "NCF-1975",
      "NCF-1988"
    ],
    "correctAnswer": 1,
    "explanation": "نیشنل کریکولم فریم ورک فار ٹیچر ایجوکیشن (NCFTE) 2009 نے خاص طور پر اساتذہ کی تعلیم کے پروگراموں کے لیے عملی تجربے (پریکٹیکم)، زندگی کی مہارتوں کی نشوونما، اور خود ہدایت یافتہ اور شراکتی سیکھنے کے ماحول کو فروغ دینے کی ضرورت پر زور دیا۔"
  },
  {
    "id": 234,
    "question": "Match the following List - A with List - B. A) Projected Aids, B) Two-dimensional Aids, C) Three-dimensional Aids, D) Activity Aids with i) Charts, ii) Dramatisations, iii) Films Strips, iv) Replicas (TSTET 11 Jan 2025)\nفہرست - الف کو فہرست - ب کے ساتھ ملائیں۔ الف) پروجیکٹڈ ایڈز، ب) دو جہتی ایڈز، ج) سہ جہتی ایڈز، د) سرگرمی ایڈز کے ساتھ i) چارٹس، ii) ڈراماٹائزیشنز، iii) فلم سٹرپس، iv) ریپلیکاز",
    "options": [
      "A-iv; B-i; C-ii; D-iii",
      "A-iv; B-iii; C-ii; D-i",
      "A-iii; B-i; C-iv; D-ii",
      "A-iii; B-iv; C-i; D-ii"
    ],
    "correctAnswer": 2,
    "explanation": "صحیح ملاپ یہ ہیں: الف) پروجیکٹڈ ایڈز کا iii) فلم سٹرپس سے ملاپ ہے، کیونکہ انہیں پروجیکشن کی ضرورت ہوتی ہے۔ ب) دو جہتی ایڈز کا i) چارٹس سے ملاپ ہے، جو کہ فلیٹ ہوتے ہیں۔ ج) سہ جہتی ایڈز کا iv) ریپلیکاز سے ملاپ ہے، جو گہرائی والے ماڈل ہوتے ہیں۔ د) سرگرمی ایڈز کا ii) ڈراماٹائزیشنز سے ملاپ ہے، جس میں فعال شرکت شامل ہوتی ہے۔"
  },
  {
    "id": 235,
    "question": "Primary source among the following for knowing about India during medieval period (TSTET 11 Jan 2025)\nدرمیانی دور میں ہندوستان کے بارے میں جاننے کے لیے درج ذیل میں سے بنیادی ماخذ",
    "options": [
      "Text books\nدرسی کتابیں",
      "Articles in National Journals\nقومی جرائد میں مضامین",
      "Teacher Notes\nاستاد کے نوٹس",
      "Inscriptions\nکتبے"
    ],
    "correctAnswer": 3,
    "explanation": "بنیادی ماخذ اس دور کا اصل مواد ہوتے ہیں جس کا مطالعہ کیا جا رہا ہو۔ کتبے، جو پتھر یا دھات پر کھدی ہوئی تحریریں ہیں، قرون وسطی کے دور کا براہ راست ثبوت ہیں۔ درسی کتابیں، مضامین، اور نوٹس ثانوی ماخذ ہیں جو بعد میں بنیادی ماخذ کا تجزیہ کرکے بنائے گئے ہیں۔"
  },
  {
    "id": 236,
    "question": "Which of the following would you include for giving a project work on non-renewable resource for power generation? (TSTET 11 Jan 2025)\nبجلی پیدا کرنے کے لیے غیر قابل تجدید وسائل پر پروجیکٹ کا کام دینے کے لیے آپ درج ذیل میں سے کس کو شامل کریں گے؟",
    "options": [
      "Coal\nکوئلہ",
      "Biomass\nبایوماس",
      "Solar\nشمسی",
      "Tidal\nمدو جذر"
    ],
    "correctAnswer": 0,
    "explanation": "غیر قابل تجدید وسائل محدود ہیں اور قدرتی عمل کے ذریعے ان کی جگہ لینے سے کہیں زیادہ تیزی سے استعمال ہوتے ہیں۔ کوئلہ ایک فوسل فیول ہے، جو بجلی پیدا کرنے کے لیے وسیع پیمانے پر استعمال ہونے والے غیر قابل تجدید وسائل کی ایک کلاسیکی مثال ہے۔ شمسی، بایوماس، اور مدو جذر سب قابل تجدید توانائی کی شکلیں ہیں۔"
  },
  {
    "id": 237,
    "question": "Identify the correct sequence of steps while teaching in 5E learning model. (TSTET 11 Jan 2025)\n5E لرننگ ماڈل میں پڑھاتے وقت اقدامات کی صحیح ترتیب کی نشاندہی کریں۔",
    "options": [
      "Engage, Explain, Explore, Elaborate, Evaluation\nمشغول، وضاحت، دریافت، تفصیل، تشخیص",
      "Explain, Explore, Engage, Elaborate, Evaluation\nوضاحت، دریافت، مشغول، تفصیل، تشخیص",
      "Engage, Explore, Explain, Elaborate, Evaluation\nمشغول، دریافت، وضاحت، تفصیل، تشخیص",
      "Explain, Engage, Explore, Elaborate, Evaluation\nوضاحت، مشغول، دریافت، تفصیل، تشخیص"
    ],
    "correctAnswer": 2,
    "explanation": "5E ماڈل ایک انکوائری پر مبنی تدریسی ماڈل ہے۔ صحیح ترتیب یہ ہے: مشغول کریں (طالب علم کی دلچسپی حاصل کریں)، دریافت کریں (طلباء تصور کے ساتھ تعامل کرتے ہیں)، وضاحت کریں (طلباء اور استاد تصور کو واضح کرتے ہیں)، تفصیل دیں (طلباء تصور کو نئی صورتحالوں پر لاگو کرتے ہیں)، اور تشخیص کریں (تفہیم کا اندازہ لگائیں)۔"
  },
  {
    "id": 238,
    "question": "The total number of working days and total number of periods available for teaching-learning of social studies is reflected in this plan (TSTET 11 Jan 2025)\nسماجی علوم کی تدریس-سیکھنے کے لیے دستیاب کل کام کے دنوں اور کل پیریڈز کی تعداد اس منصوبے میں جھلکتی ہے",
    "options": [
      "Unit\nیونٹ",
      "Year\nسال",
      "Period\nپیریڈ",
      "Micro\nمائیکرو"
    ],
    "correctAnswer": 1,
    "explanation": "ایک سالانہ منصوبہ (یا ایئر پلان) پورے تعلیمی سال کے لیے ایک جامع تدریسی منصوبہ ہوتا ہے۔ اس میں نصاب کو توڑنا اور دستیاب کل کام کے دنوں اور تدریسی پیریڈز میں اکائیوں اور اسباق کو مختص کرنا شامل ہے۔"
  },
  {
    "id": 239,
    "question": "In Anderson, L.W. & Krathwol, D.R. two-dimensional classification of Educational Objectives, 'Invent' comes at the intersection of this knowledge and cognitive process dimensions respectively (TSTET 11 Jan 2025)\nاینڈرسن، ایل ڈبلیو اور کراتھوول، ڈی آر کے تعلیمی مقاصد کی دو جہتی درجہ بندی میں، 'ایجاد' بالترتیب اس علم اور علمی عمل کے جہتوں کے تقاطع پر آتا ہے",
    "options": [
      "Meta cognitive knowledge and Creating\nمیٹا کوگنیٹو علم اور تخلیق",
      "Factual knowledge and Remembering\nحقائق پر مبنی علم اور یاد رکھنا",
      "Conceptual knowledge and Understanding\nتصوراتی علم اور سمجھنا",
      "Procedural knowledge and Applying\nطریقہ کار کا علم اور اطلاق"
    ],
    "correctAnswer": 0,
    "explanation": "اینڈرسن اور کراتھوول کی نظر ثانی شدہ درجہ بندی میں، 'ایجاد' سب سے اعلیٰ علمی عمل، 'تخلیق' سے وابستہ ایک کلیدی ایکشن فعل ہے۔ یہ تخلیقی عمل اکثر 'میٹا کوگنیٹو علم' پر انحصار کرتا ہے—یعنی کسی کے اپنے ادراک اور حکمت عملیوں کے بارے میں آگاہی—تاکہ نئے خیالات یا مصنوعات پیدا کی جا سکیں۔"
  },
  {
    "id": 240,
    "question": "Match the following List - A with List - B. A) Conceptual understanding, B) Appreciation - Sensitivity, C) Information skills with i) 15%, ii) 40%, iii) 10% weightage in SA (TSTET 11 Jan 2025)\nفہرست - الف کو فہرست - ب کے ساتھ ملائیں۔ الف) تصوراتی تفہیم، ب) تحسین - حساسیت، ج) معلوماتی مہارتیں کے ساتھ i) 15%، ii) 40%، iii) SA میں 10% وزن",
    "options": [
      "A-ii: B-i; C-iii",
      "A-iii; B-i; C-ii",
      "A-i; B-ii; C-iii",
      "A-ii; B-iii; C-i"
    ],
    "correctAnswer": 3,
    "explanation": "تلنگانہ میں سماجی علوم میں سمٹیو اسسمنٹ (SA) کے لیے تعلیمی معیارات کے معیاری وزن کی بنیاد پر، عام تقسیم یہ ہے: الف) تصوراتی تفہیم - 40%؛ ب) تحسین اور حساسیت - 10%؛ ج) معلوماتی مہارتیں - 15%۔ لہذا، صحیح ملاپ A-ii، B-iii، C-i ہے۔"
  },
  {
    "id": 241,
    "question": "Which of the following statement correctly describes \"Solar Insolation\"? (TSTET 12 Jan 2025)\nدرج ذیل میں سے کون سا بیان \"شمسی انسولیشن\" کو صحیح طور پر بیان کرتا ہے؟",
    "options": [
      "The amount of solar radiation received on the surface of the Earth\nزمین کی سطح پر موصول ہونے والی شمسی تابکاری کی مقدار",
      "The amount of solar radiation absorbed by the water on the earth\nزمین پر پانی کے ذریعے جذب ہونے والی شمسی تابکاری کی مقدار",
      "The total amount of solar energy reflected back from the surface of the earth\nزمین کی سطح سے واپس منعکس ہونے والی شمسی توانائی کی کل مقدار",
      "The distribution of solar energy in the atmosphere\nماحول میں شمسی توانائی کی تقسیم"
    ],
    "correctAnswer": 0,
    "explanation": "شمسی انسولیشن، جو 'آنے والی شمسی تابکاری' کا مخفف ہے، شمسی توانائی یا تابکاری کی کل مقدار کو کہتے ہیں جو زمین کی سطح تک پہنچتی ہے۔ یہ زمین کے موسم اور آب و ہوا کے نظام کا ایک بنیادی محرک ہے۔"
  },
  {
    "id": 242,
    "question": "Out of the eight planets of our Solar System, identify the inner planets (TSTET 12 Jan 2025)\nہمارے نظام شمسی کے آٹھ سیاروں میں سے، اندرونی سیاروں کی نشاندہی کریں",
    "options": [
      "Mercury, Saturn, Jupiter and Neptune\nعطارد، زحل، مشتری اور نیپچون",
      "Earth, Saturn, Jupiter and Neptune\nزمین، زحل، مشتری اور نیپچون",
      "Mercury, Venus, Earth and Mars\nعطارد، زہرہ، زمین اور مریخ",
      "Venus, Saturn, Jupiter and Neptune\nزہرہ، زحل، مشتری اور نیپچون"
    ],
    "correctAnswer": 2,
    "explanation": "اندرونی سیارے، جنہیں ارضی سیارے بھی کہا جاتا ہے، سورج کے قریب ترین چار سیارے ہیں۔ وہ عطارد، زہرہ، زمین اور مریخ ہیں۔ ان کی خصوصیت ان کی ٹھوس، چٹانی ساخت ہے۔"
  },
  {
    "id": 243,
    "question": "The Himalayan rivers, after descending from the mountains deposit pebbles in a narrow belt of about 8 to 16 km in width lying parallel to the slopes of the Siwaliks. This nature of soil is known as (TSTET 12 Jan 2025)\nہمالیائی ندیاں، پہاڑوں سے اترنے کے بعد شیوالک کی ڈھلوانوں کے متوازی تقریباً 8 سے 16 کلومیٹر چوڑی ایک تنگ پٹی میں کنکریاں جمع کرتی ہیں۔ مٹی کی اس نوعیت کو کہا جاتا ہے",
    "options": [
      "Khader\nکھادر",
      "Terai\nترائی",
      "Bhabar\nبھابھر",
      "Bhangar\nبانگر"
    ],
    "correctAnswer": 2,
    "explanation": "بھابھر ہمالیہ کے دامن میں، خاص طور پر شیوالک کی ڈھلوانوں کے ساتھ ایک تنگ، مسام دار پٹی ہے۔ یہ ندیوں کے ذریعے کنکریوں اور پتھروں جیسے موٹے مواد کو جمع کرنے سے بنتی ہے، جو اسے بہت زیادہ مسام دار بناتی ہے۔"
  },
  {
    "id": 244,
    "question": "The Deccan Plateau is (TSTET 12 Jan 2025)\nدکن کا سطح مرتفع ہے",
    "options": [
      "Higher in the west and slopes gently towards east\nمغرب میں اونچا اور مشرق کی طرف آہستہ آہستہ ڈھلوان",
      "Wider in the south and narrower in the north\nجنوب میں چوڑا اور شمال میں تنگ",
      "Higher in the east and slopes gently westwards\nمشرق میں اونچا اور مغرب کی طرف آہستہ آہستہ ڈھلوان",
      "Higher in the South and slopes gently northwards\nجنوب میں اونچا اور شمال کی طرف آہستہ آہستہ ڈھلوان"
    ],
    "correctAnswer": 0,
    "explanation": "دکن کے سطح مرتفع کی عمومی بلندی مغربی گھاٹوں کی موجودگی کی وجہ سے مغرب میں زیادہ ہے اور یہ خلیج بنگال کی طرف مشرق کی طرف آہستہ آہستہ ڈھلوان ہے۔ یہ ٹپوگرافی گوداوری، کرشنا اور کاویری جیسی بڑی جزیرہ نما ندیوں کی مشرق کی طرف بہنے والی سمت کا تعین کرتی ہے۔"
  },
  {
    "id": 245,
    "question": "The main purpose of Paris Summit, 2015 was (TSTET 12 Jan 2025)\nپیرس سربراہی اجلاس، 2015 کا بنیادی مقصد تھا",
    "options": [
      "To eradicate poverty throughout the world\nپوری دنیا سے غربت کا خاتمہ کرنا",
      "To attain cent percent literacy in central Asia\nوسطی ایشیا میں صد فیصد خواندگی حاصل کرنا",
      "To ensure that the children enjoy the child rights\nاس بات کو یقینی بنانا کہ بچے بچوں کے حقوق سے لطف اندوز ہوں",
      "To reduce greenhouse gas emissions\nگرین ہاؤس گیسوں کے اخراج کو کم کرنا"
    ],
    "correctAnswer": 3,
    "explanation": "2015 کا پیرس سربراہی اجلاس، جسے COP21 بھی کہا جاتا ہے، تاریخی پیرس معاہدے کا باعث بنا۔ اس کا بنیادی مقصد عالمی درجہ حرارت کو محدود کرکے موسمیاتی تبدیلیوں کا مقابلہ کرنا ہے، جس کے لیے عالمی گرین ہاؤس گیسوں کے اخراج میں نمایاں کمی کی ضرورت ہے۔"
  },
  {
    "id": 246,
    "question": "Locally, these mountain ranges are known as Mizo hills, Naga Hills, Manipur Hills and Patkai Hills (TSTET 12 Jan 2025)\nمقامی طور پر، یہ پہاڑی سلسلے میزو پہاڑیوں، ناگا پہاڑیوں، منی پور پہاڑیوں اور پٹکائی پہاڑیوں کے نام سے جانے جاتے ہیں",
    "options": [
      "Punjab Himalayas\nپنجاب ہمالیہ",
      "Hindu Kush Mountain ranges\nہندو کش پہاڑی سلسلے",
      "Purvanchal Hills\nپوروانچل پہاڑیاں",
      "Kunlun Mountain Ranges\nکنلون پہاڑی سلسلے"
    ],
    "correctAnswer": 2,
    "explanation": "پوروانچل رینج، یا مشرقی پہاڑ، شمال مشرقی ہندوستان میں ہمالیہ کا ایک ذیلی پہاڑی سلسلہ ہے۔ یہ کئی مقامی پہاڑی سلسلوں پر مشتمل ہے، جن میں پٹکائی پہاڑیاں، ناگا پہاڑیاں، میزو پہاڑیاں، اور منی پور پہاڑیاں شامل ہیں۔"
  },
  {
    "id": 247,
    "question": "In India, over 97 per cent of coal reserves are found in this region (TSTET 12 Jan 2025)\nہندوستان میں، کوئلے کے 97 فیصد سے زیادہ ذخائر اس خطے میں پائے جاتے ہیں",
    "options": [
      "Damodar, Sone, Mahanadi and Godavari\nدمودر، سون، مہاندی اور گوداوری",
      "Indo Gangetic Plain region\nسندھ-گنگا کے میدانی علاقے",
      "Assam, Gujarat and Mumbai High Region\nآسام، گجرات اور ممبئی ہائی کا علاقہ",
      "East and West Coast Plain Region and Sundarbans region\nمشرقی اور مغربی ساحلی میدانی علاقہ اور سندربن کا علاقہ"
    ],
    "correctAnswer": 0,
    "explanation": "ہندوستان کے کوئلے کے ذخائر کی اکثریت، خاص طور پر گونڈوانا کوئلے کے میدان جو کل کا 97 فیصد سے زیادہ ہیں، دمودر، سون، مہاندی اور گوداوری کی ندی وادیوں میں واقع ہیں۔"
  },
  {
    "id": 248,
    "question": "It is due to Western Ghats, this part of the Deccan Plateau receive very less rainfall (TSTET 12 Jan 2025)\nیہ مغربی گھاٹوں کی وجہ سے ہے، دکن کے سطح مرتفع کے اس حصے میں بہت کم بارش ہوتی ہے",
    "options": [
      "The northern\nشمالی",
      "The Southern\nجنوبی",
      "The Eastern\nمشرقی",
      "The Central\nوسطی"
    ],
    "correctAnswer": 2,
    "explanation": "مغربی گھاٹ بارش کے سائے کا اثر پیدا کرتے ہیں۔ وہ مغرب سے آنے والی نمی سے بھری مون سون ہواؤں کو روکتے ہیں، جس کی وجہ سے ہوا کی سمت (مغربی) میں بھاری بارش ہوتی ہے اور دکن کے سطح مرتفع کا ہوا کی مخالف سمت (مشرقی) حصہ بہت کم بارش کے ساتھ خشک رہ جاتا ہے۔"
  },
  {
    "id": 249,
    "question": "The longitudinal Valleys lying in between these mountains are known as 'Duns' (TSTET 12 Jan 2025)\nان پہاڑوں کے درمیان واقع طول البلد وادیاں 'دُون' کے نام سے جانی جاتی ہیں",
    "options": [
      "Greater Himalayas and Lesser Himalayas\nعظیم ہمالیہ اور زیریں ہمالیہ",
      "Punjab Himalayas and Kumaon Himalayas\nپنجاب ہمالیہ اور کماؤں ہمالیہ",
      "Lesser Himalayas and Purvanchal Hills\nزیریں ہمالیہ اور پوروانچل پہاڑیاں",
      "Lesser Himalayas and Siwalik ranges\nزیریں ہمالیہ اور شیوالک سلسلے"
    ],
    "correctAnswer": 3,
    "explanation": "'دُون' مخصوص طول البلد وادیاں ہیں جو زیریں ہمالیہ (ہماچل) اور بیرونی ہمالیائی سلسلے، شیوالک کے درمیان واقع ہیں۔ دہرادون دُون وادی کی ایک کلاسیکی مثال ہے۔"
  },
  {
    "id": 250,
    "question": "The Tropic of Cancer is NOT passing through one of these states of India (TSTET 12 Jan 2025)\nخط سرطان ہندوستان کی ان ریاستوں میں سے ایک سے نہیں گزرتا ہے",
    "options": [
      "Tripura\nتریپورہ",
      "Mizoram\nمیزورم",
      "Manipur\nمنی پور",
      "Rajasthan\nراجستھان"
    ],
    "correctAnswer": 2,
    "explanation": "خط سرطان ہندوستان کی آٹھ ریاستوں سے گزرتا ہے: گجرات، راجستھان، مدھیہ پردیش، چھتیس گڑھ، جھارکھنڈ، مغربی بنگال، تریپورہ، اور میزورم۔ یہ منی پور سے نہیں گزرتا ہے۔"
  },
  {
    "id": 251,
    "question": "As per the Human Development Report, 2021, the Asian countries which are categorised under the Medium Human Development (TSTET 12 Jan 2025)\nانسانی ترقی کی رپورٹ، 2021 کے مطابق، وہ ایشیائی ممالک جو درمیانی انسانی ترقی کے زمرے میں آتے ہیں",
    "options": [
      "Sri Lanka and China\nسری لنکا اور چین",
      "Japan and India\nجاپان اور ہندوستان",
      "India and Sri Lanka\nہندوستان اور سری لنکا",
      "India and Bangladesh\nہندوستان اور بنگلہ دیش"
    ],
    "correctAnswer": 3,
    "explanation": "2021-22 کی انسانی ترقی کی رپورٹ کے مطابق، ہندوستان (درجہ 132) اور بنگلہ دیش (درجہ 129) دونوں کو 'درمیانی انسانی ترقی' کے زمرے میں رکھا گیا تھا۔ سری لنکا اور چین 'اعلی' زمرے میں تھے، جبکہ جاپان 'بہت اعلی' زمرے میں تھا۔"
  },
  {
    "id": 252,
    "question": "The Oceanic Trenches namely the Challenger and Puertorico are in these oceans respectively (TSTET 12 Jan 2025)\nسمندری خندقیں یعنی چیلنجر اور پورٹوریکو بالترتیب ان سمندروں میں ہیں",
    "options": [
      "The Pacific Ocean and the Antarctic Ocean\nبحرالکاہل اور بحر منجمد جنوبی",
      "The Atlantic Ocean and the Indian Ocean\nبحر اوقیانوس اور بحر ہند",
      "The Pacific Ocean and the Atlantic Ocean\nبحرالکاہل اور بحر اوقیانوس",
      "The Pacific Ocean and the Indian Ocean\nبحرالکاہل اور بحر ہند"
    ],
    "correctAnswer": 2,
    "explanation": "چیلنجر ڈیپ، زمین پر سب سے گہرا معلوم مقام، مغربی بحرالکاہل میں ماریانا خندق میں واقع ہے۔ پورٹو ریکو خندق بحر اوقیانوس کا سب سے گہرا مقام ہے۔"
  },
  {
    "id": 253,
    "question": "In 1948, the Declaration of Human Rights was passed by the (TSTET 12 Jan 2025)\n1948 میں، انسانی حقوق کا اعلامیہ منظور کیا گیا تھا",
    "options": [
      "UN Security Council\nاقوام متحدہ کی سلامتی کونسل",
      "UN General Assembly\nاقوام متحدہ کی جنرل اسمبلی",
      "UNESCO\nیونیسکو",
      "International Court of Justice\nبین الاقوامی عدالت انصاف"
    ],
    "correctAnswer": 1,
    "explanation": "انسانی حقوق کا عالمی اعلامیہ (UDHR) ایک تاریخی دستاویز تھی جسے اقوام متحدہ کی جنرل اسمبلی نے 10 دسمبر 1948 کو پیرس میں جاری کیا تھا۔"
  },
  {
    "id": 254,
    "question": "The land boundary of India and the total length of the coastline of the mainland including Andaman & Nicobar Islands and Lakshadweep is (TSTET 12 Jan 2025)\nہندوستان کی زمینی سرحد اور انڈمان اور نکوبار جزائر اور لکشدیپ سمیت مرکزی زمین کی ساحلی پٹی کی کل لمبائی ہے",
    "options": [
      "25,425 kms and 6,000 kms\n25,425 کلومیٹر اور 6,000 کلومیٹر",
      "15,200 kms and 7,516 kms\n15,200 کلومیٹر اور 7,516 کلومیٹر",
      "15,750 kms and 7,516 kms\n15,750 کلومیٹر اور 7,516 کلومیٹر",
      "5,250 kms and 7,516 kms\n5,250 کلومیٹر اور 7,516 کلومیٹر"
    ],
    "correctAnswer": 1,
    "explanation": "ہندوستان کی کل زمینی سرحد تقریباً 15,200 کلومیٹر ہے۔ پوری ساحلی پٹی، جس میں مرکزی زمین کے ساتھ ساتھ انڈمان اور نکوبار اور لکشدیپ کے جزیروں کے علاقے بھی شامل ہیں، 7,516.6 کلومیٹر ہے۔"
  },
  {
    "id": 255,
    "question": "In India, these forests are found abundantly in the Himalayan Mountains (TSTET 12 Jan 2025)\nہندوستان میں، یہ جنگلات ہمالیائی پہاڑوں میں کثرت سے پائے جاتے ہیں",
    "options": [
      "Tropical Deciduous forests\nگرم مرطوب پت جھڑی جنگلات",
      "Mediterranean Vegetation\nبحیرہ روم کی نباتات",
      "Temperate Deciduous forests\nمعتدل پت جھڑی جنگلات",
      "Coniferous forests\nصنوبری جنگلات"
    ],
    "correctAnswer": 3,
    "explanation": "صنوبری جنگلات، جنہیں پہاڑی جنگلات بھی کہا جاتا ہے، ہمالیہ کے بلند علاقوں کی خصوصیت ہیں۔ ان جنگلات میں صنوبر، دیودار، فر اور سپروس جیسے مخروطی درختوں کی بہتات ہوتی ہے جو سرد موسم کے مطابق ڈھل چکے ہیں۔"
  },
  {
    "id": 256,
    "question": "This tax is levied on the production of goods and sale of services (TSTET 12 Jan 2025)\nیہ ٹیکس اشیاء کی پیداوار اور خدمات کی فروخت پر لگایا جاتا ہے",
    "options": [
      "Corporate Tax\nکارپوریٹ ٹیکس",
      "Customs Duty\nکسٹم ڈیوٹی",
      "Goods and Service Tax\nگڈز اینڈ سروس ٹیکس",
      "Octroi Tax\nچنگی ٹیکس"
    ],
    "correctAnswer": 2,
    "explanation": "گڈز اینڈ سروسز ٹیکس (GST) ایک جامع بالواسطہ ٹیکس ہے جو اشیاء اور خدمات کی فراہمی پر لگایا جاتا ہے۔ اس نے بہت سے دوسرے بالواسطہ ٹیکسوں کی جگہ لے لی ہے، جن میں پیداوار پر لگنے والے ٹیکس (جیسے ایکسائز ڈیوٹی) اور خدمات کی فروخت پر لگنے والے ٹیکس (جیسے سروس ٹیکس) شامل ہیں۔"
  },
  {
    "id": 257,
    "question": "The banks primarily use the majority of their deposits for (TSTET 12 Jan 2025)\nبینک بنیادی طور پر اپنی زیادہ تر امانتوں کو کس لیے استعمال کرتے ہیں",
    "options": [
      "paying interest to depositors\nجمع کنندگان کو سود ادا کرنے کے لیے",
      "purchasing lands in real estate\nریل اسٹیٹ میں زمینیں خریدنے کے لیے",
      "extending loans to the needy\nضرورت مندوں کو قرض دینے کے لیے",
      "maintaining cash reserves\nنقد ذخائر برقرار رکھنے کے لیے"
    ],
    "correctAnswer": 2,
    "explanation": "کمرشل بینک کا بنیادی کام مالیاتی ثالثی ہے۔ وہ عوام سے امانتیں قبول کرتے ہیں اور ان فنڈز کا بڑا حصہ افراد اور کاروباروں کو قرض فراہم کرنے کے لیے استعمال کرتے ہیں، جس سے اقتصادی سرگرمیوں کو سہولت ملتی ہے۔"
  },
  {
    "id": 258,
    "question": "Which of the following statements best describes the term the \"Price Index\"? (TSTET 12 Jan 2025)\nمندرجہ ذیل میں سے کون سا بیان \"پرائس انڈیکس\" کی اصطلاح کو بہترین طریقے سے بیان کرتا ہے؟",
    "options": [
      "It compares the quality of different goods\nیہ مختلف اشیاء کے معیار کا موازنہ کرتا ہے",
      "It predicts future prices of goods\nیہ اشیاء کی مستقبل کی قیمتوں کی پیش گوئی کرتا ہے",
      "It determines the exact price of a single good\nیہ ایک واحد شے کی صحیح قیمت کا تعین کرتا ہے",
      "It measures the overall change in prices of goods over time\nیہ وقت کے ساتھ اشیاء کی قیمتوں میں مجموعی تبدیلی کی پیمائش کرتا ہے"
    ],
    "correctAnswer": 3,
    "explanation": "پرائس انڈیکس ایک شماریاتی پیمانہ ہے جو اس بات کا موازنہ کرنے میں مدد کرتا ہے کہ وقت کے ساتھ اشیاء اور خدمات کی ایک ٹوکری کی مجموعی قیمت کی سطح کیسے بدلتی ہے۔ یہ افراط زر کا ایک اہم اشارہ ہے۔"
  },
  {
    "id": 259,
    "question": "Which of the following statement correctly describes the phrase \"the Black Money\"? (TSTET 12 Jan 2025)\nمندرجہ ذیل میں سے کون سا بیان \"کالا دھن\" کے جملے کو صحیح طور پر بیان کرتا ہے؟",
    "options": [
      "Money earned through legal and illegal means\nقانونی اور غیر قانونی طریقوں سے کمائی گئی رقم",
      "Money deposited in foreign banks legally\nقانونی طور پر غیر ملکی بینکوں میں جمع کرائی گئی رقم",
      "Money received from government welfare programs\nحکومتی فلاحی پروگراموں سے موصول ہونے والی رقم",
      "Money generated from illegal or income unreported\nغیر قانونی یا غیر رپورٹ شدہ آمدنی سے پیدا ہونے والی رقم"
    ],
    "correctAnswer": 3,
    "explanation": "\"کالا دھن\" ان فنڈز سے مراد ہے جو مکمل طور پر جائز نہیں ہیں۔ اس میں غیر قانونی سرگرمیوں سے پیدا ہونے والی رقم یا وہ آمدنی شامل ہے جسے ٹیکس حکام سے چھپایا گیا ہو اور اس لیے وہ غیر رپورٹ شدہ ہو۔"
  },
  {
    "id": 260,
    "question": "Which of the following districts of Telangana are located in the Lower Telangana Plateau? (TSTET 12 Jan 2025)\nتلنگانہ کے مندرجہ ذیل میں سے کون سے اضلاع زیریں تلنگانہ سطح مرتفع میں واقع ہیں؟",
    "options": [
      "Mahabubabad, Warangal, Khammam\nمحبوب آباد، ورنگل، کھمم",
      "Vikarabad, Narayanpet, Rangareddy\nوقارآباد، نارائن پیٹ، رنگاریڈی",
      "Medak, Sangareddy, Nizamabad\nمیدک، سنگاریڈی، نظام آباد",
      "Medak, Siddipet, Kamareddy\nمیدک، سدی پیٹ، کاماریڈی"
    ],
    "correctAnswer": 0,
    "explanation": "تلنگانہ کی سطح مرتفع کو وسیع طور پر بلند مغربی حصے اور نچلے مشرقی حصے میں تقسیم کیا گیا ہے۔ محبوب آباد، ورنگل اور کھمم کے اضلاع مشرقی حصے میں واقع ہیں، جو زیریں تلنگانہ سطح مرتفع سے مطابقت رکھتا ہے۔"
  },
  {
    "id": 261,
    "question": "Since independence, the share of Service Sector activities in GDP in India is (TSTET 12 Jan 2025)\nآزادی کے بعد سے، ہندوستان کی جی ڈی پی میں خدمات کے شعبے کی سرگرمیوں کا حصہ",
    "options": [
      "It has not changed\nاس میں کوئی تبدیلی نہیں آئی",
      "It has decreased significantly\nاس میں نمایاں کمی آئی ہے",
      "It has become less important than agriculture\nیہ زراعت سے کم اہم ہو گیا ہے",
      "There has been a tremendous increase\nاس میں زبردست اضافہ ہوا ہے"
    ],
    "correctAnswer": 3,
    "explanation": "ہندوستان کی آزادی کے بعد، اور خاص طور پر 1990 کی دہائی کی اقتصادی اصلاحات کے بعد، ملک کی مجموعی گھریلو پیداوار (جی ڈی پی) میں خدمات کے شعبے کے حصہ میں زبردست اضافہ ہوا ہے۔ یہ اب ہندوستانی معیشت کا سب سے بڑا شعبہ ہے۔"
  },
  {
    "id": 262,
    "question": "Identify the Non - ferrous metals from among the following (TSTET 12 Jan 2025)\nمندرجہ ذیل میں سے غیر فیرس دھاتوں کی شناخت کریں",
    "options": [
      "Bauxite, tin, Copper\nباکسائٹ، ٹن، کاپر",
      "Manganese, Nickel, Cobalt\nمینگنیج، نکل، کوبالٹ",
      "Cobalt, Aluminium, Nickel\nکوبالٹ، ایلومینیم، نکل",
      "Mica, Gold, Manganese\nمائیکا، سونا، مینگنیج"
    ],
    "correctAnswer": 0,
    "explanation": "غیر فیرس دھاتیں وہ ہیں جن میں لوہے کی نمایاں مقدار نہیں ہوتی۔ باکسائٹ (ایلومینیم کی کچ دھات)، ٹن، اور کاپر غیر فیرس دھاتوں کی کلاسیکی مثالیں ہیں۔ مینگنیج، نکل، اور کوبالٹ فیرس دھاتیں ہیں۔"
  },
  {
    "id": 263,
    "question": "If the average price of goods in the base year is set at 100, then the Price Index of 125 indicates that (TSTET 12 Jan 2025)\nاگر بنیادی سال میں اشیاء کی اوسط قیمت 100 مقرر کی گئی ہے، تو 125 کا پرائس انڈیکس اس بات کی نشاندہی کرتا ہے کہ",
    "options": [
      "Prices have been doubled\nقیمتیں دوگنی ہو گئی ہیں",
      "Prices have remained the same\nقیمتیں وہی رہی ہیں",
      "Prices have increased by 25%\nقیمتوں میں 25 فیصد اضافہ ہوا ہے",
      "Prices have decreased by 25%\nقیمتوں میں 25 فیصد کمی ہوئی ہے"
    ],
    "correctAnswer": 2,
    "explanation": "پرائس انڈیکس بنیادی مدت سے فیصد تبدیلی کی پیمائش کرتا ہے، جو 100 کی انڈیکس ویلیو پر سیٹ ہوتی ہے۔ لہذا، 125 کی انڈیکس ویلیو 100 کی بنیاد سے 25 پوائنٹس کے اضافے کی نشاندہی کرتی ہے، جس کا مطلب قیمتوں میں 25 فیصد اضافہ ہے۔"
  },
  {
    "id": 264,
    "question": "Which of the following statement best describes the Phrase \"Mean years of Schooling\"? (TSTET 12 Jan 2025)\nمندرجہ ذیل میں سے کون سا بیان \"اسکولنگ کے اوسط سال\" کے جملے کو بہترین طریقے سے بیان کرتا ہے؟",
    "options": [
      "The average number of completed years of education of a country's population aged 25 years and above\nکسی ملک کی 25 سال اور اس سے زیادہ عمر کی آبادی کی تعلیم کے مکمل شدہ سالوں کی اوسط تعداد",
      "The average number of school going children in the age group of 6 to 14 years\n6 سے 14 سال کی عمر کے گروپ میں اسکول جانے والے بچوں کی اوسط تعداد",
      "The number of children in the age group of 6 to 14 years who have completed elementary school\n6 سے 14 سال کی عمر کے گروپ کے بچوں کی تعداد جنہوں نے ایلیمنٹری اسکول مکمل کر لیا ہے",
      "The average number of children who reached secondary school on completion of primary education\nپرائمری تعلیم مکمل کرنے پر سیکنڈری اسکول پہنچنے والے بچوں کی اوسط تعداد"
    ],
    "correctAnswer": 0,
    "explanation": "'اسکولنگ کے اوسط سال' انسانی ترقی کے اشاریہ (HDI) میں استعمال ہونے والا ایک مخصوص سماجی اشارہ ہے۔ یہ کسی ملک میں 25 سال اور اس سے زیادہ عمر کے لوگوں کی طرف سے حاصل کردہ تعلیم کے سالوں کی اوسط تعداد کی نمائندگی کرتا ہے۔"
  },
  {
    "id": 265,
    "question": "\"Disguised unemployment\" means (TSTET 12 Jan 2025)\n\"پوشیدہ بے روزگاری\" کا مطلب ہے",
    "options": [
      "Engaging less number of people than required\nضرورت سے کم لوگوں کو کام پر لگانا",
      "Engaging more number of people than required\nضرورت سے زیادہ لوگوں کو کام پر لگانا",
      "Paying less than the actual amount\nاصل رقم سے کم ادائیگی کرنا",
      "Paying more than the actual amount\nاصل رقم سے زیادہ ادائیگی کرنا"
    ],
    "correctAnswer": 1,
    "explanation": "پوشیدہ بے روزگاری اس وقت ہوتی ہے جب کسی کام میں ضرورت سے زیادہ لوگ ملازم ہوں۔ فاضل محنت کی معمولی پیداواریت صفر ہوتی ہے، جس کا مطلب ہے کہ اگر کچھ کارکنوں کو ہٹا دیا جائے تو کل پیداوار میں کمی نہیں آئے گی۔ یہ ترقی پذیر ممالک کے زرعی شعبے میں عام ہے۔"
  },
  {
    "id": 266,
    "question": "In India, this act provides penalties for preventing a person from entering a place of worship or from taking water from a tank or well (TSTET 12 Jan 2025)\nہندوستان میں، یہ ایکٹ کسی شخص کو عبادت گاہ میں داخل ہونے یا ٹینک یا کنویں سے پانی لینے سے روکنے پر سزائیں فراہم کرتا ہے",
    "options": [
      "The protection of Civil Rights Act, 1955\nتحفظ شہری حقوق ایکٹ، 1955",
      "The Enabling Act, 1933\nان ایبلنگ ایکٹ، 1933",
      "The Protection of Human Rights Act, 1993\nتحفظ انسانی حقوق ایکٹ، 1993",
      "The protection of Civil Rights Act, 1951\nتحفظ شہری حقوق ایکٹ، 1951"
    ],
    "correctAnswer": 0,
    "explanation": "تحفظ شہری حقوق ایکٹ، 1955 کا مقصد چھوت چھات کے خاتمے کو نافذ کرنا ہے (آئین کے آرٹیکل 17 کے مطابق)۔ یہ معذوریوں کو نافذ کرنے کے لیے سزائیں تجویز کرتا ہے، جیسے کہ عوامی عبادت گاہوں، دکانوں اور پانی کے ذرائع تک رسائی کو روکنا۔"
  },
  {
    "id": 267,
    "question": "Identify the federal feature of the Indian Constitution from among the following (TSTET 12 Jan 2025)\nمندرجہ ذیل میں سے ہندوستانی آئین کی وفاقی خصوصیت کی شناخت کریں",
    "options": [
      "Representation of states in the upper chamber of Union Legislature\nیونین مقننہ کے ایوان بالا میں ریاستوں کی نمائندگی",
      "Single integrated Judiciary\nواحد مربوط عدلیہ",
      "Role of All India Services personnel in the Administration of states\nریاستوں کی انتظامیہ میں آل انڈیا سروسز کے اہلکاروں کا کردار",
      "Governors acting as the agents of Union Government\nگورنروں کا یونین حکومت کے ایجنٹ کے طور پر کام کرنا"
    ],
    "correctAnswer": 0,
    "explanation": "وفاقی نظام کی ایک اہم خصوصیت مرکزی مقننہ میں آئینی ریاستوں کی نمائندگی ہے۔ ہندوستان میں، راجیہ سبھا (کونسل آف اسٹیٹس) ایوان بالا ہے جہاں ریاستوں کی نمائندگی کی جاتی ہے، جو اس وفاقی اصول کو برقرار رکھتی ہے۔ دیگر آپشنز وحدانی (غیر وفاقی) خصوصیات کی مثالیں ہیں۔"
  },
  {
    "id": 268,
    "question": "Among the following, the statement that correctly describes the term \"Universal Adult Franchise\" (TSTET 12 Jan 2025)\nمندرجہ ذیل میں سے، وہ بیان جو \"یونیورسل ایڈلٹ فرنچائز\" کی اصطلاح کو صحیح طور پر بیان کرتا ہے",
    "options": [
      "Provision of the right to vote to all women without any discrimination only\nصرف تمام خواتین کو بغیر کسی امتیاز کے ووٹ کا حق فراہم کرنا",
      "Provision of the right to vote to all the citizens irrespective of age limit\nعمر کی حد سے قطع نظر تمام شہریوں کو ووٹ کا حق فراہم کرنا",
      "Provision of the right to vote to all the citizens who attained the age of 18 years without any discrimination\nتمام شہریوں کو جنہوں نے 18 سال کی عمر حاصل کر لی ہے، بغیر کسی امتیاز کے ووٹ کا حق فراہم کرنا",
      "Provision of the right to vote only to educated citizens in the country without any discrimination\nملک میں صرف تعلیم یافتہ شہریوں کو بغیر کسی امتیاز کے ووٹ کا حق فراہم کرنا"
    ],
    "correctAnswer": 2,
    "explanation": "یونیورسل ایڈلٹ فرنچائز کا مطلب ہے کہ تمام بالغ شہری، ایک خاص عمر (ہندوستان میں 18 سال) تک پہنچنے پر، انتخابات میں ووٹ ڈالنے کا حق رکھتے ہیں، بغیر کسی ذات، مذہب، نسل، جنس، یا معاشی حیثیت کی بنیاد پر امتیاز کے۔"
  },
  {
    "id": 269,
    "question": "As per the Immoral Trafficking (Prevention) Act, 1956 and the Amendment Act, 2006, the punishment for involving in Human Immoral Trafficking was (TSTET 12 Jan 2025)\nغیر اخلاقی اسمگلنگ (روک تھام) ایکٹ، 1956 اور ترمیمی ایکٹ، 2006 کے مطابق، انسانی غیر اخلاقی اسمگلنگ میں ملوث ہونے کی سزا تھی",
    "options": [
      "Seven-years rigorous imprisonment to life along with penalty\nسات سال قید بامشقت سے عمر قید تک جرمانے کے ساتھ",
      "Two- years rigorous imprisonment along with penalty of 1.0 lakh\nدو سال قید بامشقت کے ساتھ 1.0 لاکھ کا جرمانہ",
      "Five- years rigorous imprisonment to life along with penalty of 25.0 lakhs\nپانچ سال قید بامشقت سے عمر قید تک 25.0 لاکھ کے جرمانے کے ساتھ",
      "One- year rigorous imprisonment only\nصرف ایک سال قید بامشقت"
    ],
    "correctAnswer": 0,
    "explanation": "غیر اخلاقی اسمگلنگ (روک تھام) ایکٹ، 1956، اور اس کی ترامیم سخت سزائیں تجویز کرتی ہیں۔ کسی شخص کی اسمگلنگ کے لیے، سزا میں کم از کم سات سال کی قید بامشقت شامل ہے، جسے عمر قید تک بڑھایا جا سکتا ہے، ساتھ ہی ایک بھاری جرمانہ بھی۔"
  },
  {
    "id": 270,
    "question": "Which of the following activity comes under the violation of Fundamental Rights? (TSTET 12 Jan 2025)\nمندرجہ ذیل میں سے کون سی سرگرمی بنیادی حقوق کی خلاف ورزی کے تحت آتی ہے؟",
    "options": [
      "Arresting the person and informing the grounds for his arrest\nشخص کو گرفتار کرنا اور اس کی گرفتاری کی وجوہات سے آگاہ کرنا",
      "Allowing the person to reside and settle in any part of the territory of India\nشخص کو ہندوستان کے کسی بھی حصے میں رہنے اور بسنے کی اجازت دینا",
      "Allowing the citizens to express their views in many ways such as through meetings, publications etc.\nشہریوں کو اپنے خیالات کا اظہار کئی طریقوں سے کرنے کی اجازت دینا جیسے کہ میٹنگز، اشاعتوں وغیرہ کے ذریعے",
      "Employing the child below the age of 14 years in the factory to work\n14 سال سے کم عمر کے بچے کو فیکٹری میں کام پر لگانا"
    ],
    "correctAnswer": 3,
    "explanation": "ہندوستانی آئین کا آرٹیکل 24، جو استحصال کے خلاف بنیادی حق کا حصہ ہے، 14 سال سے کم عمر کے بچوں کو فیکٹریوں، کانوں، یا کسی دوسرے خطرناک پیشوں میں ملازمت دینے سے واضح طور پر منع کرتا ہے۔ یہ بچے کے بنیادی حقوق کی براہ راست خلاف ورزی ہے۔"
  },
  {
    "id": 271,
    "question": "On 1st November, 1996 Telangana Vidroha Dinam was observed in Warangal by a group of intellectuals headed by (TSTET 12 Jan 2025)\nیکم نومبر 1996 کو، تلنگانہ ودروہ دنم ورنگل میں دانشوروں کے ایک گروپ نے کس کی سربراہی میں منایا تھا",
    "options": [
      "Prof. Kodandaram\nپروفیسر کودنڈارام",
      "Prof. Jayashankar\nپروفیسر جے شنکر",
      "K. Chandrashekar Rao\nکے. چندرشیکھر راؤ",
      "Marri Chenna Reddy\nمری چنا ریڈی"
    ],
    "correctAnswer": 1,
    "explanation": "پروفیسر کے. جے شنکر، جو علیحدہ تلنگانہ تحریک کے ایک اہم نظریہ دان تھے، نے 1996 میں ورنگل میں یکم نومبر (آندھرا پردیش کے یوم تاسیس) کو 'تلنگانہ ودروہ دنم' یا 'تلنگانہ یوم غداری' کے طور پر منانے کے لیے دانشوروں کے ایک گروپ کی قیادت کی تاکہ اس خطے کے ساتھ ہونے والی مبینہ ناانصافیوں کے خلاف احتجاج کیا جا سکے۔"
  },
  {
    "id": 272,
    "question": "Under this writ, the court orders a lower court to transfer a matter pending before it to the higher court (TSTET 12 Jan 2025)\nاس رٹ کے تحت، عدالت ایک نچلی عدالت کو حکم دیتی ہے کہ وہ اپنے سامنے زیر التوا معاملے کو اعلیٰ عدالت میں منتقل کرے",
    "options": [
      "Habeas Corpus\nہیبیس کارپس",
      "Mandamus\nمینڈیمس",
      "Prohibition\nپروہبیشن",
      "Certiorari\nسرٹیوراری"
    ],
    "correctAnswer": 3,
    "explanation": "سرٹیوراری کی رٹ ایک اعلیٰ عدالت کی طرف سے نچلی عدالت یا ٹریبونل کو جاری کی جاتی ہے۔ اس کا استعمال کسی ماتحت عدالت کی طرف سے پہلے ہی منظور شدہ حکم کو کالعدم قرار دینے یا زیر التوا مقدمے کو ماتحت عدالت سے اعلیٰ عدالت میں منتقل کرنے کے لیے کیا جاتا ہے۔"
  },
  {
    "id": 273,
    "question": "As per this, 'it shall be the duty of every citizen of India to maintain the unity and integrity of India' (TSTET 12 Jan 2025)\nاس کے مطابق، 'یہ ہندوستان کے ہر شہری کا فرض ہوگا کہ وہ ہندوستان کے اتحاد اور سالمیت کو برقرار رکھے'",
    "options": [
      "Directive Principle of the State Policy\nریاستی پالیسی کا رہنما اصول",
      "Fundamental Right\nبنیادی حق",
      "Fundamental Duty\nبنیادی فرض",
      "Moral Right\nاخلاقی حق"
    ],
    "correctAnswer": 2,
    "explanation": "یہ بیان ہندوستانی آئین کے آرٹیکل 51-A میں درج بنیادی فرائض کا حصہ ہے۔ خاص طور پر، آرٹیکل 51-A(c) کہتا ہے کہ ہر شہری کا فرض ہے کہ 'ہندوستان کی خودمختاری، اتحاد اور سالمیت کو برقرار رکھے اور اس کا تحفظ کرے۔'"
  },
  {
    "id": 274,
    "question": "The permanent seat of the United Nations Security Council held by this government has been given to China (TSTET 12 Jan 2025)\nاس حکومت کے زیر قبضہ اقوام متحدہ کی سلامتی کونسل کی مستقل نشست چین کو دے دی گئی ہے",
    "options": [
      "Chiang Kai Shek Government\nچیانگ کائی شیک حکومت",
      "Sun Yet Sen Government\nسن یات سین حکومت",
      "Mao Government\nماؤ حکومت",
      "Manchu Dynasty\nمانچو خاندان"
    ],
    "correctAnswer": 0,
    "explanation": "جمہوریہ چین (ROC)، چیانگ کائی شیک کی حکومت کے تحت، اقوام متحدہ کا بانی رکن تھا اور سلامتی کونسل میں مستقل نشست رکھتا تھا۔ 1971 میں، اقوام متحدہ کی جنرل اسمبلی کی قرارداد 2758 نے یہ نشست عوامی جمہوریہ چین (PRC) کو منتقل کر دی۔"
  },
  {
    "id": 275,
    "question": "One of the following was the member of State's Reorganisation Commission, 1953 (TSTET 12 Jan 2025)\nمندرجہ ذیل میں سے ایک ریاستوں کی تنظیم نو کمیشن، 1953 کا رکن تھا",
    "options": [
      "Hriday Nath Kunzru\nہردے ناتھ کنزرو",
      "Prof. Ranbir Singh\nپروفیسر رنبیر سنگھ",
      "Dr. Abusaleh Sharief\nڈاکٹر ابوصالح شریف",
      "Vinod K Duggal\nونود کے دگل"
    ],
    "correctAnswer": 0,
    "explanation": "ریاستوں کی تنظیم نو کمیشن، جو 1953 میں تشکیل دیا گیا تھا، تین ارکان پر مشتمل تھا: فضل علی بحیثیت چیئرمین، اور کے. ایم. پانیکر اور ہردے ناتھ کنزرو دوسرے دو ارکان تھے۔"
  },
  {
    "id": 276,
    "question": "In India, the maximum number of ministers allowed in the Union Council of Ministers (TSTET 12 Jan 2025)\nہندوستان میں، یونین کونسل آف منسٹرز میں وزراء کی زیادہ سے زیادہ تعداد کی اجازت ہے",
    "options": [
      "20% of Lok Sabha members\nلوک سبھا کے 20 فیصد ارکان",
      "20% of the members of Lok Sabha and Rajya Sabha\nلوک سبھا اور راجیہ سبھا کے 20 فیصد ارکان",
      "15% of Lok Sabha members\nلوک سبھا کے 15 فیصد ارکان",
      "15% of the members of Lok Sabha and Rajya Sabha\nلوک سبھا اور راجیہ سبھا کے 15 فیصد ارکان"
    ],
    "correctAnswer": 2,
    "explanation": "2003 کے 91ویں آئینی ترمیمی ایکٹ میں یہ شرط عائد کی گئی تھی کہ یونین کونسل آف منسٹرز میں وزراء کی کل تعداد، بشمول وزیر اعظم، لوک سبھا کی کل طاقت کے 15 فیصد سے زیادہ نہیں ہوگی۔"
  },
  {
    "id": 277,
    "question": "\"Amitraghata\" was the title of this Mauryan ruler (TSTET 12 Jan 2025)\n\"امترگھاٹ\" اس موری حکمران کا لقب تھا",
    "options": [
      "Chandragupta Maurya\nچندرگپت موریہ",
      "Ashoka\nاشوک",
      "Bindusara\nبندوسار",
      "Samprati\nسمپراتی"
    ],
    "correctAnswer": 2,
    "explanation": "بندوسار، چندرگپت موریہ کا بیٹا اور دوسرا موری شہنشاہ، 'امترگھاٹ' کے لقب سے جانا جاتا تھا، جس کا سنسکرت میں مطلب 'دشمنوں کا قاتل' ہے۔ یونانی ذرائع اسے امتروچیٹس کہتے ہیں۔"
  },
  {
    "id": 278,
    "question": "King Dangadeva constructed the Khandariya Mahadeva Temple which was dedicated to Lord Shiva belonged to this dynasty (TSTET 12 Jan 2025)\nبادشاہ دنگادیو نے کھنڈریا مہادیو مندر تعمیر کروایا جو بھگوان شیو کے لیے وقف تھا، اس کا تعلق اس خاندان سے تھا",
    "options": [
      "Gupta Dynasty\nگپت خاندان",
      "Chola Dynasty\nچولا خاندان",
      "Pallava Dynasty\nپلو خاندان",
      "Chandela Dynasty\nچندیلا خاندان"
    ],
    "correctAnswer": 3,
    "explanation": "کھجوراہو کمپلیکس میں واقع کنڈاریا مہادیو مندر، ہندوستانی مندر کے فن تعمیر کا ایک شاہکار ہے۔ اسے تقریباً 1030 عیسوی میں چندیلا خاندان کے بادشاہ دھنگادیو نے تعمیر کروایا تھا جس نے وسطی ہندوستان پر حکومت کی تھی۔"
  },
  {
    "id": 279,
    "question": "This Act of the British Government curbed fundamental Rights such as the freedom of expression and strengthened police powers (TSTET 12 Jan 2025)\nبرطانوی حکومت کے اس ایکٹ نے اظہار رائے کی آزادی جیسے بنیادی حقوق کو محدود کیا اور پولیس کے اختیارات کو مضبوط کیا",
    "options": [
      "Rowlatt Act of 1919\nرولٹ ایکٹ 1919",
      "Ilbert Bill, 1883\nالبرٹ بل، 1883",
      "Govt of India Act, 1833\nگورنمنٹ آف انڈیا ایکٹ، 1833",
      "Regulating Act of 1773\nریگولیٹنگ ایکٹ 1773"
    ],
    "correctAnswer": 0,
    "explanation": "1919 کے رولٹ ایکٹ نے برطانوی نوآبادیاتی حکومت کو سیاسی سرگرمیوں کو دبانے کے لیے وسیع اختیارات دیے۔ اس نے سیاسی قیدیوں کو دو سال تک بغیر مقدمہ چلائے حراست میں رکھنے کی اجازت دی اور اظہار رائے کی آزادی سمیت شہری آزادیوں کو شدید طور پر محدود کر دیا۔"
  },
  {
    "id": 280,
    "question": "Which of the following statement rightly describes the term \"Secularism\" (TSTET 12 Jan 2025)\nمندرجہ ذیل میں سے کون سا بیان \"سیکولرازم\" کی اصطلاح کو صحیح طور پر بیان کرتا ہے",
    "options": [
      "The state is one that does not confer any privilege or favour on any particular religion\nریاست وہ ہے جو کسی خاص مذہب کو کوئی استحقاق یا رعایت نہیں دیتی",
      "The state which accepts a particular religion as their state religion\nوہ ریاست جو کسی خاص مذہب کو اپنے ریاستی مذہب کے طور پر قبول کرتی ہے",
      "The state which does not allow any religion in their state\nوہ ریاست جو اپنی ریاست میں کسی بھی مذہب کی اجازت نہیں دیتی",
      "The state which accepts all the religions as their state religions\nوہ ریاست جو تمام مذاہب کو اپنے ریاستی مذاہب کے طور پر قبول کرتی ہے"
    ],
    "correctAnswer": 0,
    "explanation": "سیکولرازم کا مطلب یہ ہے کہ ریاست کو مذہب کے معاملات میں غیر جانبدار رہنا چاہیے۔ ایک سیکولر ریاست کا کوئی سرکاری مذہب نہیں ہوتا، تمام مذاہب کے ساتھ یکساں سلوک کرتی ہے، اور کسی خاص عقیدے کو کوئی خاص مراعات یا رعایت نہیں دیتی۔"
  },
  {
    "id": 281,
    "question": "In Cave 15 of Ellora, the picture showing Vishnu as Narasimha, the Man Lion' was the work of this period (TSTET 12 Jan 2025)\nایلورا کے غار نمبر 15 میں، وشنو کو نرسنگھ، یعنی شیر مرد کے طور پر دکھانے والی تصویر اس دور کا کام تھی",
    "options": [
      "Pallavas\nپلووں",
      "Chahamanas\nچہامنوں",
      "Chalukyas\nچالوکیوں",
      "Rashtrakutas\nراشٹرکوٹوں"
    ],
    "correctAnswer": 3,
    "explanation": "ایلورا کے غاروں میں غار نمبر 15، جسے دشاوتار غار بھی کہا جاتا ہے، راشٹرکوٹ دور سے تعلق رکھتا ہے۔ اس میں ہندو دیومالا کے شاندار مجسمے ہیں، جن میں ایک مشہور پینل بھی شامل ہے جس میں وشنو کو ان کے نرسنگھ (شیر مرد) اوتار میں دکھایا گیا ہے۔"
  },
  {
    "id": 282,
    "question": "In the European History, the thought of the Early Modern Period' was dominated by the idea of (TSTET 12 Jan 2025)\nیورپی تاریخ میں، 'ابتدائی جدید دور' کی سوچ پر کس نظریے کا غلبہ تھا",
    "options": [
      "Human freedom and equality\nانسانی آزادی اور مساوات",
      "Nationalism and religious patriotism\nقوم پرستی اور مذہبی حب الوطنی",
      "Patriotism and struggle for freedom\nحب الوطنی اور آزادی کی جدوجہد",
      "Development and unity of the nations\nقوموں کی ترقی اور اتحاد"
    ],
    "correctAnswer": 0,
    "explanation": "یورپ میں ابتدائی جدید دور، جس میں نشاۃ ثانیہ، اصلاح اور روشن خیالی شامل تھی، نے سوچ میں ایک گہری تبدیلی دیکھی۔ روشن خیالی نے، خاص طور پر، عقل، انفرادیت اور فطری حقوق کے نظریات کو فروغ دیا، جس کی وجہ سے انسانی آزادی اور مساوات پر غالب توجہ مرکوز ہوئی۔"
  },
  {
    "id": 283,
    "question": "In the Declaration of American Independence, Thomas Jefferson declared that all the men are created equal and are endowed by the creator with certain rights which cannot be taken away. Those rights include (TSTET 12 Jan 2025)\nامریکی آزادی کے اعلان میں، تھامس جیفرسن نے اعلان کیا کہ تمام انسان برابر پیدا ہوئے ہیں اور خالق نے انہیں کچھ ایسے حقوق عطا کیے ہیں جو چھینے نہیں جا سکتے۔ ان حقوق میں شامل ہیں",
    "options": [
      "Right to life, Liberty and freedom of opinion\nزندگی کا حق، آزادی اور رائے کی آزادی",
      "Right to life, freedom of speech and equality before law\nزندگی کا حق، اظہار رائے کی آزادی اور قانون کے سامنے مساوات",
      "Right to life, liberty and pursuit of happiness\nزندگی کا حق، آزادی اور خوشی کی تلاش",
      "Right to life, pursuit of happiness and equality before law\nزندگی کا حق، خوشی کی تلاش اور قانون کے سامنے مساوات"
    ],
    "correctAnswer": 2,
    "explanation": "امریکہ کے اعلانِ آزادی کی مشہور سطر یوں ہے: \"ہم ان سچائیوں کو خود واضح مانتے ہیں، کہ تمام انسان برابر پیدا ہوئے ہیں، کہ انہیں ان کے خالق نے کچھ ناقابلِ انتقال حقوق عطا کیے ہیں، کہ ان میں زندگی، آزادی اور خوشی کی تلاش شامل ہیں۔\""
  },
  {
    "id": 284,
    "question": "Ems telegram was associated with this war (TSTET 12 Jan 2025)\nایمس ٹیلیگرام کا تعلق اس جنگ سے تھا",
    "options": [
      "Prussia's war with Denmark\nپرشیا کی ڈنمارک کے ساتھ جنگ",
      "Austro-Prussian war\nآسٹرو-پرشین جنگ",
      "Franco-Prussian war\nفرینکو-پرشین جنگ",
      "Battle of Waterloo, 1815\nواٹرلو کی جنگ، 1815"
    ],
    "correctAnswer": 2,
    "explanation": "ایمس ڈسپیچ (یا ایمس ٹیلیگرام) ایک پیغام تھا جسے پرشین وزیر اوٹو وان بسمارک نے فرانس کو اکسانے کے لیے ترمیم کیا تھا۔ اس کی اشاعت نے پیرس میں رائے عامہ کو بھڑکا دیا، جس کی وجہ سے شہنشاہ نپولین سوم نے پرشیا کے خلاف جنگ کا اعلان کیا، اس طرح 1870-71 کی فرینکو-پرشین جنگ شروع ہوئی۔"
  },
  {
    "id": 285,
    "question": "According to this 'no European power would be allowed to build colonies in the American Continents and US will not interfere in the affairs of European colonies in the other continents' (TSTET 12 Jan 2025)\nاس کے مطابق 'کسی بھی یورپی طاقت کو امریکی براعظموں میں نوآبادیاں بنانے کی اجازت نہیں ہوگی اور امریکہ دوسرے براعظموں میں یورپی نوآبادیوں کے معاملات میں مداخلت نہیں کرے گا'",
    "options": [
      "Marshall Law\nمارشل لاء",
      "Monroe Doctrine\nمنرو نظریہ",
      "The Eisenhower Doctrine\nآئزن ہاور نظریہ",
      "The Truman Doctrine\nٹرومین نظریہ"
    ],
    "correctAnswer": 1,
    "explanation": "یہ پالیسی منرو نظریے کا سنگ بنیاد ہے، جو 1823 میں صدر جیمز منرو کی طرف سے بیان کردہ امریکی خارجہ پالیسی ہے۔ اس نے یورپی طاقتوں کو امریکہ میں مستقبل کی نوآبادیات یا مداخلت کے خلاف خبردار کیا، اور بدلے میں، امریکہ نے یورپی معاملات میں مداخلت نہ کرنے کا عہد کیا۔"
  },
  {
    "id": 286,
    "question": "In 1869, king Leopold II of Belgium secretly sent this explorer to Congo region in Africa (TSTET 12 Jan 2025)\n1869 میں، بیلجیم کے بادشاہ لیوپولڈ دوم نے خفیہ طور پر اس مہم جو کو افریقہ کے کانگو کے علاقے میں بھیجا",
    "options": [
      "Stanley\nاسٹینلے",
      "Richard Burton\nرچرڈ برٹن",
      "David Livingston\nڈیوڈ لیونگسٹن",
      "John Speke\nجان اسپیک"
    ],
    "correctAnswer": 0,
    "explanation": "بیلجیم کے بادشاہ لیوپولڈ دوم نے مہم جو ہنری مورٹن اسٹینلے کو کانگو کے علاقے کی کھوج اور اس پر اپنا دعویٰ قائم کرنے کے لیے ملازمت پر رکھا۔ یہ مہم، جسے ایک فلاحی مشن کا روپ دیا گیا تھا، لیوپولڈ کی ذاتی حکمرانی کے تحت کانگو فری اسٹیٹ کے سفاکانہ قیام کا باعث بنی۔"
  },
  {
    "id": 287,
    "question": "On 4th May, 1919, the people of china demonstrated in Beijing to protest against the decision of (TSTET 12 Jan 2025)\n4 مئی 1919 کو، چین کے لوگوں نے بیجنگ میں کس فیصلے کے خلاف احتجاج کرنے کے لیے مظاہرہ کیا",
    "options": [
      "'Sun Yet Sen' regarding the programme of Action\n'سن یات سین' کے پروگرام آف ایکشن کے حوالے سے",
      "Decision of Sun yet Sen regarding overthrowing of Manchu Dynasty\nمانچو خاندان کا تختہ الٹنے کے حوالے سے سن یات سین کا فیصلہ",
      "Versailles Peace Conference\nورسائی امن کانفرنس",
      "The regional military powers called 'war lords'\n'وار لارڈز' کہلانے والی علاقائی فوجی طاقتیں"
    ],
    "correctAnswer": 2,
    "explanation": "چوتھی مئی کی تحریک ورسائی کے معاہدے کے خلاف بیجنگ میں طلباء کی زیر قیادت ایک احتجاج تھا۔ اس معاہدے نے شانڈونگ صوبے میں جرمن مراعات کو چین کو واپس کرنے کے بجائے جاپان کو منتقل کر دیا، جسے اتحادی طاقتوں کی طرف سے ایک دھوکہ سمجھا گیا۔"
  },
  {
    "id": 288,
    "question": "Among the following, identify the correct statement regarding the 'Tennis Court Oath of 1789' in France (TSTET 12 Jan 2025)\nمندرجہ ذیل میں سے، فرانس میں '1789 کے ٹینس کورٹ کے حلف' کے بارے میں صحیح بیان کی شناخت کریں",
    "options": [
      "The representatives of Third Estate declared themselves as a National Assembly\nتیسری اسٹیٹ کے نمائندوں نے خود کو قومی اسمبلی قرار دیا",
      "The king Louis XVI promised to declare France as a Republican State\nبادشاہ لوئی شش دہم نے فرانس کو ایک جمہوری ریاست قرار دینے کا وعدہ کیا",
      "The king withdrew the special privileges enjoyed by the members of the First and Second Estate\nبادشاہ نے پہلی اور دوسری اسٹیٹ کے ارکان کو حاصل خصوصی مراعات واپس لے لیں",
      "The King Louis XVI promised to draft a new constitution for France\nبادشاہ لوئی شش دہم نے فرانس کے لیے ایک نیا آئین تیار کرنے کا وعدہ کیا"
    ],
    "correctAnswer": 0,
    "explanation": "ٹینس کورٹ کا حلف فرانسیسی انقلاب میں ایک اہم لمحہ تھا۔ تیسری اسٹیٹ کے ارکان نے، خود کو قومی اسمبلی قرار دینے کے بعد، اس وقت تک منتشر نہ ہونے کا حلف اٹھایا جب تک کہ وہ فرانس کے لیے ایک آئین تیار نہ کر لیں۔ یہ عمل بادشاہت کے خلاف ان کی طاقت کا براہ راست اظہار تھا۔"
  },
  {
    "id": 289,
    "question": "By teaching social studies at secondary school level, the teacher can achieve these results A) Social learning B) Knowledge with experience C) Maladjustability and Rigidity D) Skills in selection E) Competence in tackling problems. Choose the correct answer: (TSTET 12 Jan 2025)\nسیکنڈری اسکول کی سطح پر سماجی علوم پڑھا کر، استاد یہ نتائج حاصل کر سکتا ہے: A) سماجی تعلیم B) تجربے کے ساتھ علم C) ناسازگاری اور سختی D) انتخاب میں مہارت E) مسائل سے نمٹنے میں قابلیت۔ صحیح جواب کا انتخاب کریں:",
    "options": [
      "A, B, C, D & E",
      "A, B, D & E only",
      "B, C, D & E only",
      "A, B, C & E only"
    ],
    "correctAnswer": 1,
    "explanation": "سماجی علوم کی تعلیم کے مقاصد میں سماجی تعلیم کو فروغ دینا (A)، تجربے کے ذریعے علم کی تعمیر (B)، معلومات کے انتخاب میں مہارت پیدا کرنا (D)، اور مسائل حل کرنے کی صلاحیت کو بڑھانا (E) شامل ہیں۔ ناسازگاری اور سختی (C) منفی خصائص ہیں جن کا مقابلہ کرنا تعلیم کا مقصد ہے، نہ کہ انہیں حاصل کرنا۔"
  },
  {
    "id": 290,
    "question": "The essential teaching and learning material for a social studies teacher is (TSTET 12 Jan 2025)\nسماجی علوم کے استاد کے لیے ضروری تدریسی اور سیکھنے کا مواد ہے",
    "options": [
      "Calculator for solving problems\nمسائل حل کرنے کے لیے کیلکولیٹر",
      "Dictionary for knowing the meanings for hardwords\nمشکل الفاظ کے معنی جاننے کے لیے لغت",
      "Compass box for drawing for drawing lines on the black board\nبلیک بورڈ پر لکیریں کھینچنے کے لیے کمپاس باکس",
      "Maps and Globe for teaching history and geography\nتاریخ اور جغرافیہ پڑھانے کے لیے نقشے اور گلوب"
    ],
    "correctAnswer": 3,
    "explanation": "جبکہ دیگر اوزار بھی مفید ہیں، نقشے اور گلوب سماجی علوم پڑھانے کے لیے بنیادی اور ناگزیر مواد ہیں۔ وہ جغرافیائی تصورات، مقامی تعلقات اور واقعات کے تاریخی پس منظر کو سمجھنے کے لیے ضروری ہیں۔"
  },
  {
    "id": 291,
    "question": "Verifying the new hypothesis, drawing inferences and judging the adequacy or inadequacy of data collected for an issue are the specification of this teaching objective of social studies (TSTET 12 Jan 2025)\nنئے مفروضے کی تصدیق کرنا، نتائج اخذ کرنا اور کسی مسئلے کے لیے جمع کیے گئے ڈیٹا کی مناسبت یا عدم مناسبت کا فیصلہ کرنا سماجی علوم کے اس تدریسی مقصد کی تفصیلات ہیں",
    "options": [
      "Understanding\nتفہیم",
      "Knowledge\nعلم",
      "Application\nاطلاق",
      "Appreciation\nقدردانی"
    ],
    "correctAnswer": 2,
    "explanation": "ان کاموں کے لیے اعلیٰ سطحی سوچ کی مہارتوں کی ضرورت ہوتی ہے جو محض یاد کرنے (علم) یا وضاحت کرنے (تفہیم) سے بالاتر ہیں۔ ان میں مسائل کو حل کرنے یا ڈیٹا کا تجزیہ کرنے کے لیے نئے، ٹھوس حالات میں سیکھے گئے تصورات اور اصولوں کا استعمال شامل ہے، جو تعلیمی مقاصد میں 'اطلاق' کی سطح کا جوہر ہے۔"
  },
  {
    "id": 292,
    "question": "By teaching the concepts like believing and respecting the Laws, paying taxes intime and working for social well being the social studies teacher can inculcate these value among students. (TSTET 12 Jan 2025)\nقوانین پر یقین اور ان کا احترام، وقت پر ٹیکس ادا کرنا اور سماجی بہبود کے لیے کام کرنے جیسے تصورات کو پڑھا کر سماجی علوم کا استاد طلباء میں یہ اقدار پیدا کر سکتا ہے۔",
    "options": [
      "Moral values\nاخلاقی اقدار",
      "Vocational values\nپیشہ ورانہ اقدار",
      "Interpretative values\nتشریحی اقدار",
      "Utilitarian values\nافادیت پسند اقدار"
    ],
    "correctAnswer": 0,
    "explanation": "قوانین کا احترام، ٹیکس ادا کرنا، اور سماجی بہبود میں حصہ ڈالنا معاشرے کے اندر شہری ذمہ داری اور اخلاقی طرز عمل کے بنیادی اجزاء ہیں۔ انہیں وسیع پیمانے پر اخلاقی اقدار کے طور پر درجہ بندی کیا جاتا ہے، کیونکہ وہ صحیح طرز عمل کے اصولوں سے تعلق رکھتے ہیں۔"
  },
  {
    "id": 293,
    "question": "NCF-2005, suggested to focus on the following aspects, while developing social studies curriculum. A) Plurality and local content B) Content load C) Scientific outlook D) Inter relationship among disciplines. Choose the correct answer: (TSTET 12 Jan 2025)\nاین سی ایف-2005 نے سماجی علوم کے نصاب کو تیار کرتے وقت مندرجہ ذیل پہلوؤں پر توجہ مرکوز کرنے کی تجویز دی۔ A) کثرت اور مقامی مواد B) مواد کا بوجھ C) سائنسی نقطہ نظر D) مضامین کے درمیان باہمی تعلق۔ صحیح جواب کا انتخاب کریں:",
    "options": [
      "B, C & D only",
      "A, C & D only",
      "A, B & C only",
      "A, B, C & D"
    ],
    "correctAnswer": 1,
    "explanation": "قومی نصابی فریم ورک (NCF) 2005 نے متنوع نقطہ نظر اور مقامی مواد (A) کو شامل کرنے، سائنسی نقطہ نظر (C) کو فروغ دینے، اور بین الضابطہ روابط (D) کو اجاگر کرنے کی وکالت کی۔ ایک کلیدی اصول مواد کے بوجھ کو *کم کرنا* (B) تھا تاکہ رٹنے کی حوصلہ شکنی کی جائے اور سمجھ کو فروغ دیا جائے۔"
  },
  {
    "id": 294,
    "question": "Among the following, which one DOES NOT help the social studies teacher to create the effective teaching - learning environment. (TSTET 12 Jan 2025)\nمندرجہ ذیل میں سے، کون سا سماجی علوم کے استاد کو موثر تدریسی-سیکھنے کا ماحول بنانے میں مدد نہیں کرتا۔",
    "options": [
      "Going beyond the textbook\nنصابی کتاب سے آگے جانا",
      "Practicing the flexible evaluation methods\nلچکدار تشخیصی طریقوں پر عمل کرنا",
      "Promoting mechanical learning\nمشینی سیکھنے کو فروغ دینا",
      "Linking the text with daily life experiences\nمتن کو روزمرہ کی زندگی کے تجربات سے جوڑنا"
    ],
    "correctAnswer": 2,
    "explanation": "ایک موثر تدریسی ماحول تنقیدی سوچ اور گہری سمجھ کی حوصلہ افزائی کرتا ہے۔ مشینی سیکھنے کو فروغ دینا، جو بغیر سمجھے رٹنا ہے، اس مقصد کے خلاف ہے۔ دیگر آپشنز ایک پرکشش اور موثر سیکھنے کا ماحول بنانے کے لیے تسلیم شدہ بہترین طریقے ہیں۔"
  },
  {
    "id": 295,
    "question": "Match the following List A with List - B. List-A (Community Resources) A) Historical Resource B) Cultural Resource C) Economic Resource D) Scientific Resource. List-B (Associations) i) Singareni Collaries ii) ISRO iii) Ajanta Caves iv) Tribal museum. Choose the correct answer: (TSTET 12 Jan 2025)\nفہرست A کو فہرست B سے ملائیں۔ فہرست-A (کمیونٹی وسائل) A) تاریخی وسیلہ B) ثقافتی وسیلہ C) اقتصادی وسیلہ D) سائنسی وسیلہ۔ فہرست-B (ادارے) i) سنگارینی کالریز ii) اسرو iii) اجنتا کے غار iv) قبائلی میوزیم۔ صحیح جواب کا انتخاب کریں:",
    "options": [
      "A-iii; B-i; C-iv; D-ii",
      "A-iii; B-iv; C-i; D-ii",
      "A-iv; B-iii; C-i; D-ii",
      "A-iii; B-iv; C-ii; D-i"
    ],
    "correctAnswer": 1,
    "explanation": "صحیح جوڑے یہ ہیں: A) اجنتا کے غار ایک تاریخی وسیلہ ہیں (iii)۔ B) ایک قبائلی میوزیم ایک ثقافتی وسیلہ کی نمائندگی کرتا ہے (iv)۔ C) سنگارینی کالریز ایک بڑا اقتصادی وسیلہ ہیں (i)۔ D) اسرو (انڈین اسپیس ریسرچ آرگنائزیشن) ایک اہم سائنسی وسیلہ ہے (ii)۔"
  },
  {
    "id": 296,
    "question": "To teach the concepts, i.e., earth rotation and revolution; shape and area of the earth; and eclipses; effectively the teacher should have competency in this geography (TSTET 12 Jan 2025)\nزمین کی گردش اور انقلاب؛ زمین کی شکل اور رقبہ؛ اور گرہن جیسے تصورات کو مؤثر طریقے سے پڑھانے کے لیے استاد کو اس جغرافیہ میں مہارت ہونی چاہیے",
    "options": [
      "Mathematical Geography\nریاضیاتی جغرافیہ",
      "Economic Geography\nاقتصادی جغرافیہ",
      "Political Geography\nسیاسی جغرافیہ",
      "Regional Geography\nعلاقائی جغرافیہ"
    ],
    "correctAnswer": 0,
    "explanation": "ریاضیاتی جغرافیہ وہ شاخ ہے جو زمین کی ہندسی خصوصیات، خلا میں اس کی حرکات (گردش، انقلاب)، سورج سے اس کے تعلق، اور اس کے نتیجے میں ہونے والے مظاہر جیسے موسموں، ٹائم زونز، اور گرہن سے متعلق ہے۔ یہ موضوعات بنیادی طور پر فلکیاتی اور ریاضیاتی اصولوں پر مبنی ہیں۔"
  },
  {
    "id": 297,
    "question": "The following approach provides scope for social studies teacher to teach the lessons in collaborative, participative and problem solving methods (TSTET 12 Jan 2025)\nمندرجہ ذیل نقطہ نظر سماجی علوم کے استاد کو باہمی تعاون، شرکت اور مسئلہ حل کرنے کے طریقوں سے اسباق پڑھانے کی گنجائش فراہم کرتا ہے",
    "options": [
      "Subject centric approach\nموضوع پر مبنی نقطہ نظر",
      "Teacher centric approach\nاستاد پر مبنی نقطہ نظر",
      "Behaviouristic approach\nرویہ جاتی نقطہ نظر",
      "Constructivistic approach\nتعمیراتی نقطہ نظر"
    ],
    "correctAnswer": 3,
    "explanation": "تعمیراتی نقطہ نظر یہ کہتا ہے کہ سیکھنے والے غیر فعال طور پر علم حاصل کرنے کے بجائے فعال طور پر علم کی تعمیر کرتے ہیں۔ یہ تعلیمی فلسفہ فطری طور پر باہمی تعاون، شرکت، اور مسئلہ حل کرنے جیسے طریقوں کی حمایت کرتا ہے، جہاں طلباء سمجھ بوجھ پیدا کرنے کے لیے مواد اور ایک دوسرے کے ساتھ فعال طور پر مشغول ہوتے ہیں۔"
  },
  {
    "id": 298,
    "question": "Among the following, which one DOES NOT relates to the advantages of social studies laboratory (TSTET 12 Jan 2025)\nمندرجہ ذیل میں سے، کون سا سماجی علوم کی لیبارٹری کے فوائد سے تعلق نہیں رکھتا",
    "options": [
      "It creates interest in experiments and research among students\nیہ طلباء میں تجربات اور تحقیق میں دلچسپی پیدا کرتا ہے",
      "Cultural and social values will develop among students\nطلباء میں ثقافتی اور سماجی اقدار پیدا ہوں گی",
      "Students will become indiscipline due to involvement in activities\nسرگرمیوں میں ملوث ہونے کی وجہ سے طلباء غیر نظم و ضبط کا شکار ہو جائیں گے",
      "Valuable equipments will be kept in safety\nقیمتی سامان حفاظت میں رکھا جائے گا"
    ],
    "correctAnswer": 2,
    "explanation": "سماجی علوم کی لیب کا مقصد فعال، عملی سیکھنے کے لیے ایک جگہ فراہم کرنا ہے، جو دلچسپی، اقدار، اور مواد کے ذمہ دارانہ استعمال کو فروغ دیتی ہے۔ یہ بیان کہ طلباء غیر نظم و ضبط کا شکار ہو جائیں گے، ناقص کلاس روم مینجمنٹ کا ایک ممکنہ منفی نتیجہ ہے، نہ کہ لیبارٹری کا کوئی موروثی فائدہ یا مقصد۔"
  },
  {
    "id": 299,
    "question": "Among the following, identify the characteristics of good evaluation tool. A) Utility B) Subjectivity C) Language clarity D) Practicability E) Diagnosticity. Choose the correct answer: (TSTET 12 Jan 2025)\nمندرجہ ذیل میں سے، اچھے تشخیصی آلے کی خصوصیات کی شناخت کریں۔ A) افادیت B) موضوعیت C) زبان کی وضاحت D) عملیت E) تشخیصیت۔ صحیح جواب کا انتخاب کریں:",
    "options": [
      "A, B, C, D & E",
      "A, B, C & D only",
      "B, C & D only",
      "A, C, D & E only"
    ],
    "correctAnswer": 3,
    "explanation": "ایک مؤثر تشخیصی آلے میں افادیت (A)، زبان کی وضاحت (C)، عملیت (D)، اور تشخیصیت (E) ہونی چاہیے۔ موضوعیت (B)، جہاں اسکورنگ ذاتی فیصلے پر منحصر ہوتی ہے، ایک کمزوری ہے؛ ایک اچھے آلے کو معروضیت کے لیے کوشش کرنی چاہیے۔ لہذا، خصوصیات کا بہترین سیٹ موضوعیت کو خارج کرتا ہے۔"
  },
  {
    "id": 300,
    "question": "In Telangana state, the summative assessment in social studies is being conducted based on these academic standards. A) Reflection on contemporary issues and questioning B) Experiments and field observation C) Conceptual understanding D) Appreciation and sensitivity. Choose the correct answer: (TSTET 12 Jan 2025)\nریاست تلنگانہ میں، سماجی علوم میں مجموعی تشخیص ان تعلیمی معیارات کی بنیاد پر کی جا رہی ہے۔ A) عصری مسائل پر غور و فکر اور سوال کرنا B) تجربات اور میدانی مشاہدہ C) تصوراتی تفہیم D) قدردانی اور حساسیت۔ صحیح جواب کا انتخاب کریں:",
    "options": [
      "A, B & C only",
      "A, C & D only",
      "B, C & D only",
      "A, B, C & D"
    ],
    "correctAnswer": 1,
    "explanation": "تلنگانہ میں سماجی علوم کی تشخیص کے تعلیمی معیارات میں تصوراتی تفہیم (C)، عصری مسائل پر غور و فکر اور سوال کرنا (A)، اور قدردانی اور حساسیت (D) شامل ہیں۔ جبکہ میدانی مشاہدہ ایک سرگرمی ہے، 'تجربات اور میدانی مشاہدہ' (B) ایک مخصوص تعلیمی معیار ہے جو عام طور پر سائنس کے لیے استعمال ہوتا ہے، سماجی علوم کے لیے نہیں۔"
  },
  {
    "id": 301,
    "question": "Among the following, identify the statement that best describes the term \"Current Account Deposit\" (TSTET 12 Jan 2025)\nمندرجہ ذیل میں سے، اس بیان کی نشاندہی کریں جو \"کرنٹ اکاؤنٹ ڈپازٹ\" کی اصطلاح کو بہترین طریقے سے بیان کرتا ہے",
    "options": [
      "The money deposited in this account cannot be withdrawn from the bank as and when required\nاس اکاؤنٹ میں جمع کی گئی رقم کو ضرورت پڑنے پر بینک سے نہیں نکالا جا سکتا",
      "There are no restrictions in the number of times to deposit or withdraw money from the bank in a day\nایک دن میں بینک سے رقم جمع کرنے یا نکالنے کی تعداد پر کوئی پابندی نہیں ہے",
      "The rate of interest is higher for the amount deposited in this account\nاس اکاؤنٹ میں جمع کی گئی رقم پر سود کی شرح زیادہ ہے",
      "The amount deposited in this account has to withdraw only through cheques\nاس اکاؤنٹ میں جمع کی گئی رقم صرف چیک کے ذریعے نکالی جا سکتی ہے"
    ],
    "correctAnswer": 1,
    "explanation": "کرنٹ اکاؤنٹ ایک قسم کا بینک اکاؤنٹ ہے جو بنیادی طور پر کاروباری اداروں کی طرف سے بار بار لین دین کے لیے استعمال ہوتا ہے۔ اس کی اہم خصوصیت اس کی لچک ہے، جس میں ایک دن میں جمع یا نکالی جانے والی رقم کی تعداد پر کوئی حد نہیں ہوتی۔ سیونگ اکاؤنٹس کے برعکس، ان پر عام طور پر کوئی سود نہیں ملتا۔"
  },
  {
    "id": 302,
    "question": "One of the following is the function of \"Commercial Banks\" (TSTET 12 Jan 2025)\nمندرجہ ذیل میں سے ایک \"کمرشل بینکوں\" کا کام ہے",
    "options": [
      "Regulates Foreign Exchange Reserves\nغیر ملکی زرمبادلہ کے ذخائر کو منظم کرتا ہے",
      "Banker to Central and State Government\nمرکزی اور ریاستی حکومت کا بینکر",
      "Custodian of Foreign reserves\nغیر ملکی ذخائر کا نگران",
      "Accept deposits from the public\nعوام سے ڈپازٹ قبول کرنا"
    ],
    "correctAnswer": 3,
    "explanation": "کمرشل بینکوں کا بنیادی کردار عوام اور کاروباری اداروں کی خدمت کرنا ہے۔ ان کے بنیادی کاموں میں عوام سے ڈپازٹس (جیسے سیونگز، کرنٹ، اور فکسڈ ڈپازٹس) قبول کرنا اور قرضے فراہم کرنا شامل ہے۔ درج دیگر آپشنز ملک کے مرکزی بینک (مثلاً، ریزرو بینک آف انڈیا) کے کام ہیں۔"
  },
  {
    "id": 303,
    "question": "One of the following is NOT the measure of \"Human Development Index\" (TSTET 12 Jan 2025)\nمندرجہ ذیل میں سے ایک \"انسانی ترقی کے اشاریہ\" کا پیمانہ نہیں ہے",
    "options": [
      "Per Capita Income\nفی کس آمدنی",
      "Mean Years of Schooling\nتعلیم کے اوسط سال",
      "Life expectancy at birth\nپیدائش کے وقت متوقع عمر",
      "Density of Population\nآبادی کی کثافت"
    ],
    "correctAnswer": 3,
    "explanation": "انسانی ترقی کا اشاریہ (HDI) ایک جامع اشاریہ ہے جو انسانی ترقی کے تین اہم پہلوؤں میں اوسط کامیابی کی پیمائش کرتا ہے: ایک لمبی اور صحت مند زندگی (متوقع عمر)، علم (تعلیم)، اور ایک معقول معیار زندگی (فی کس آمدنی)۔ آبادی کی کثافت HDI کا جزو نہیں ہے۔"
  },
  {
    "id": 304,
    "question": "Agriculture and related activities such as fishing, forestry, mining, quarrying where nature has a dominant role in the production process comes under this sector of the economy (TSTET 12 Jan 2025)\nزراعت اور اس سے متعلقہ سرگرمیاں جیسے ماہی گیری، جنگلات، کان کنی، جہاں پیداواری عمل میں فطرت کا غالب کردار ہوتا ہے، معیشت کے اس شعبے کے تحت آتی ہیں",
    "options": [
      "Primary Sector\nبنیادی شعبہ",
      "Secondary Sector\nثانوی شعبہ",
      "Tertiary Sector\nثالثی شعبہ",
      "Quaternary Sector\nچوتھا شعبہ"
    ],
    "correctAnswer": 0,
    "explanation": "بنیادی شعبے میں براہ راست زمین سے قدرتی وسائل کا حصول اور کٹائی شامل ہے۔ یہ دوسرے شعبوں کے لیے خام مال فراہم کرکے معیشت کی بنیاد بناتا ہے۔ اس میں زراعت، ماہی گیری، جنگلات، اور کان کنی کی تمام شکلیں شامل ہیں۔"
  },
  {
    "id": 305,
    "question": "Which of the following statement best describes the term Gross Domestic Product ? (TSTET 12 Jan 2025)\nمندرجہ ذیل میں سے کون سا بیان مجموعی گھریلو پیداوار (Gross Domestic Product) کی اصطلاح کو بہترین طریقے سے بیان کرتا ہے؟",
    "options": [
      "The total value of final goods and services produced in the country during the period of five years\nپانچ سال کی مدت کے دوران ملک میں پیدا ہونے والی حتمی اشیاء اور خدمات کی کل مالیت",
      "The total value of capital goods produced in the country during the period of one year\nایک سال کی مدت کے دوران ملک میں پیدا ہونے والے سرمائے کے سامان کی کل مالیت",
      "The value derived from total value of final goods and services produced in the country during the period of one year by dividing with the population of the country\nایک سال کی مدت کے دوران ملک میں پیدا ہونے والی حتمی اشیاء اور خدمات کی کل مالیت کو ملک کی آبادی سے تقسیم کرکے حاصل کی گئی قدر",
      "The total value of final goods and services produced in the country during the period of one year\nایک سال کی مدت کے دوران ملک میں پیدا ہونے والی حتمی اشیاء اور خدمات کی کل مالیت"
    ],
    "correctAnswer": 3,
    "explanation": "مجموعی گھریلو پیداوار (GDP) ایک ملک میں ایک مخصوص مدت کے دوران اشیاء اور خدمات کی پیداوار کے ذریعے پیدا ہونے والی اضافی قدر کا معیاری پیمانہ ہے۔ یہ ایک مخصوص مدت، عام طور پر ایک سال، میں ملک کی سرحدوں کے اندر پیدا ہونے والی تمام تیار شدہ اشیاء اور خدمات کی کل مالیاتی قدر کی نمائندگی کرتی ہے۔"
  },
  {
    "id": 306,
    "question": "The information regarding this is an important social indicator to measure the extent of equality between men and women (TSTET 12 Jan 2025)\nاس سے متعلق معلومات مردوں اور عورتوں کے درمیان مساوات کی حد کو ماپنے کے لیے ایک اہم سماجی اشارہ ہے",
    "options": [
      "Age structure\nعمر کی ساخت",
      "Sex Ratio\nجنسی تناسب",
      "Fertility rate\nشرح پیدائش",
      "Density of Population\nآبادی کی کثافت"
    ],
    "correctAnswer": 1,
    "explanation": "جنسی تناسب، جو کہ فی 1000 مردوں کے مقابلے میں خواتین کی تعداد ہے، ایک اہم سماجی اشارہ ہے جو معاشرے میں صنفی مساوات کی ڈگری کی پیمائش کے لیے استعمال ہوتا ہے۔ ایک غیر متوازن تناسب خواتین کے جنین کشی، صنفی امتیاز، اور خواتین کے لیے صحت کی دیکھ بھال اور غذائیت میں تفاوت جیسے مسائل کی نشاندہی کر سکتا ہے۔"
  },
  {
    "id": 307,
    "question": "One among the following was the term of Permanent settlement introduced by the British East India Company, 1793 (TSTET 12 Jan 2025)\nمندرجہ ذیل میں سے ایک 1793 میں برطانوی ایسٹ انڈیا کمپنی کی طرف سے متعارف کرائے گئے مستقل تصفیے (Permanent settlement) کی شرط تھی",
    "options": [
      "The power to collect the revenue was given as agreed upon in auction to the zamindars\nمحصول وصول کرنے کا اختیار نیلامی میں طے شدہ معاہدے کے مطابق زمینداروں کو دیا گیا تھا",
      "The power of collecting revenue was given to village heads\nمحصول وصول کرنے کا اختیار گاؤں کے سربراہوں کو دیا گیا تھا",
      "The power to collect revenue was in the hands of the Government officials\nمحصول وصول کرنے کا اختیار سرکاری اہلکاروں کے ہاتھ میں تھا",
      "Giving the power of collecting revenue to the Land lords\nمحصول وصول کرنے کا اختیار جاگیرداروں کو دینا"
    ],
    "correctAnswer": 0,
    "explanation": "1793 میں لارڈ کارنوالس کے ذریعہ متعارف کرائے گئے مستقل تصفیے کے تحت، زمینی محصول وصول کرنے کا حق سب سے زیادہ بولی لگانے والوں کو نیلام کیا گیا، جو زمیندار بن گئے۔ ان زمینداروں کو کمپنی کو ایک مقررہ رقم کا محصول ادا کرنا پڑتا تھا، اور کوئی بھی اضافی رقم وہ اپنے پاس رکھتے تھے۔ محصول کی رقم مستقل طور پر طے کی گئی تھی۔"
  },
  {
    "id": 308,
    "question": "Which of the following statement best describes the phrase \"Sarf-e-khas\"? (TSTET 12 Jan 2025)\nمندرجہ ذیل میں سے کون سا بیان \"صرفِ خاص\" کے جملے کو بہترین طریقے سے بیان کرتا ہے؟",
    "options": [
      "The land owned by the zamindars\nزمینداروں کی ملکیت والی زمین",
      "The land that was directly under the Nizam as his personal jagir\nوہ زمین جو براہ راست نظام کی ذاتی جاگیر کے طور پر ان کے ماتحت تھی",
      "The land cultivated directly by the zamindars in their own lands\nزمینداروں کی طرف سے اپنی زمینوں میں براہ راست کاشت کی گئی زمین",
      "The land of Zamindars given to tenants\nزمینداروں کی زمین جو کرایہ داروں کو دی گئی ہو"
    ],
    "correctAnswer": 1,
    "explanation": "سابقہ ریاست حیدرآباد میں، \"صرفِ خاص\" سے مراد نظام کی ذاتی جائیداد یا شاہی اراضی تھی۔ ان زمینوں سے حاصل ہونے والا محصول حکمران کی نجی آمدنی تھی اور اسے ان کے محل اور خاندان کی دیکھ بھال کے لیے استعمال کیا جاتا تھا۔"
  },
  {
    "id": 309,
    "question": "The Primary goal of sustainable development is (TSTET 12 Jan 2025)\nپائیدار ترقی کا بنیادی مقصد ہے",
    "options": [
      "Economic growth without any concern for the development\nترقی کی کوئی فکر کیے بغیر معاشی ترقی",
      "Ensuring that the current generation's needs are met without compromising the ability of future generations to meet their own needs\nاس بات کو یقینی بنانا کہ موجودہ نسل کی ضروریات مستقبل کی نسلوں کی اپنی ضروریات پوری کرنے کی صلاحیت کو متاثر کیے بغیر پوری ہوں",
      "Giving priority to the industrial development\nصنعتی ترقی کو ترجیح دینا",
      "Reducing the population growth globally\nعالمی سطح پر آبادی میں اضافے کو کم کرنا"
    ],
    "correctAnswer": 1,
    "explanation": "یہ پائیدار ترقی کی سب سے زیادہ قبول شدہ تعریف ہے، جو 1987 کی برنڈٹ لینڈ کمیشن رپورٹ سے ماخوذ ہے۔ یہ آنے والی نسلوں کے لیے ایک قابل عمل مستقبل کو یقینی بنانے کے لیے معاشی اور سماجی ترقی کو ماحولیاتی تحفظ کے ساتھ متوازن کرنے کی ضرورت پر زور دیتی ہے۔"
  },
  {
    "id": 310,
    "question": "In these days, banks withhold approximately this percentage of their deposits in Cash (TSTET 12 Jan 2025)\nآج کل، بینک اپنی جمع شدہ رقم کا تقریباً اتنا فیصد نقد کی صورت میں رکھتے ہیں",
    "options": [
      "10%",
      "100%",
      "50%",
      "15%"
    ],
    "correctAnswer": 3,
    "explanation": "فریکشنل ریزرو بینکنگ کے نظام کے تحت، کمرشل بینکوں کو روزانہ کی نکاسی کی ضروریات کو پورا کرنے کے لیے اپنی کل جمع شدہ رقم کا صرف ایک حصہ نقد ریزرو کے طور پر رکھنا ہوتا ہے۔ بھارت میں، عام اقتصادی مثالوں کے مطابق، بینک اپنی جمع شدہ رقم کا تقریباً 15 فیصد نقد کے طور پر رکھتے ہیں۔ باقی رقم قرض دینے اور سرمایہ کاری کے لیے استعمال ہوتی ہے۔"
  },
  {
    "id": 311,
    "question": "This refers to an agreement in which the lender supplies the borrower with money, goods or services in return for the promise of future payment (TSTET 12 Jan 2025)\nاس سے مراد ایک ایسا معاہدہ ہے جس میں قرض دہندہ قرض لینے والے کو مستقبل میں ادائیگی کے وعدے کے بدلے رقم، سامان یا خدمات فراہم کرتا ہے",
    "options": [
      "Debit\nڈیبٹ",
      "Credit\nکریڈٹ",
      "Collateral\nضمانت",
      "Base rate\nبنیادی شرح"
    ],
    "correctAnswer": 1,
    "explanation": "کریڈٹ وہ نظام ہے جو قرض لینے والے کو قرض دہندہ سے فنڈز، سامان یا خدمات حاصل کرنے کی اجازت دیتا ہے اس سمجھوتے کے ساتھ کہ قرض لینے والا مستقبل کی تاریخ میں قرض واپس کرے گا۔ یہ مالیات اور تجارت میں ایک بنیادی تصور ہے۔"
  },
  {
    "id": 312,
    "question": "\"Inflation\" refers to (TSTET 12 Jan 2025)\n\"افراط زر\" سے مراد ہے",
    "options": [
      "Continuous decline in prices of goods\nاشیاء کی قیمتوں میں مسلسل کمی",
      "Continuous rise in prices of goods\nاشیاء کی قیمتوں میں مسلسل اضافہ",
      "Neither increase nor decrease in prices of goods in long term\nطویل مدت میں اشیاء کی قیمتوں میں نہ اضافہ نہ کمی",
      "Price increase with regard to luxury goods only\nصرف پرتعیش اشیاء کی قیمتوں میں اضافہ"
    ],
    "correctAnswer": 1,
    "explanation": "افراط زر وہ شرح ہے جس پر اشیاء اور خدمات کی عمومی قیمتوں کی سطح بڑھ رہی ہے، اور نتیجتاً، کرنسی کی قوت خرید کم ہو رہی ہے۔ اسے عام طور پر سالانہ فیصد اضافے کے طور پر ماپا جاتا ہے۔"
  },
  {
    "id": 313,
    "question": "This inscription speaks Gauthami Putra Satakarni as 'King of Kings' and Kshaharata Vamsa Niravasesaka (Destroyer of Kshaharata family)' (TSTET 12 Jan 2025)\nیہ کتبہ گوتمی پتر ساتکرنی کو 'بادشاہوں کا بادشاہ' اور 'کشہارات وamsa نراوسیسکا (کشہارات خاندان کا تباہ کنندہ)' کے طور پر بیان کرتا ہے۔",
    "options": [
      "The Nasik Inscription\nناسک کا کتبہ",
      "The Amaravathi Inscription\nامراوتی کا کتبہ",
      "The Nanaghat Inscription\nناناگھاٹ کا کتبہ",
      "The Junagadh Rock Inscription\nجوناگڑھ چٹان کا کتبہ"
    ],
    "correctAnswer": 0,
    "explanation": "ناسک پرشستی، جو کہ ستواہن بادشاہ گوتمی پتر ساتکرنی کی والدہ گوتمی بالاسری کے حکم پر لکھا گیا ایک کتبہ ہے، ان کی کامیابیوں کی تفصیل بیان کرتا ہے۔ یہ انہیں 'کشہارات خاندان کا تباہ کنندہ' جیسے القابات سے نوازتا ہے، جو کہ ساکا حکمران نہاپن پر ان کی اہم فوجی فتح کو اجاگر کرتا ہے۔"
  },
  {
    "id": 314,
    "question": "In the first World War, the countries which participated on behalf of Austria were known as (TSTET 12 Jan 2025)\nپہلی جنگ عظیم میں، آسٹریا کی طرف سے حصہ لینے والے ممالک کو کہا جاتا تھا",
    "options": [
      "Axis powers\nمحوری طاقتیں",
      "Allied Powers\nاتحادی طاقتیں",
      "Central Powers\nمرکزی طاقتیں",
      "Communist powers\nکمیونسٹ طاقتیں"
    ],
    "correctAnswer": 2,
    "explanation": "مرکزی طاقتیں پہلی جنگ عظیم کے دوران ایک فوجی اتحاد تھا جس میں جرمنی، آسٹریا-ہنگری، سلطنت عثمانیہ، اور بلغاریہ شامل تھے۔ انہوں نے اتحادی طاقتوں کے خلاف جنگ لڑی، جن میں فرانس، برطانیہ، روس، اور بعد میں امریکہ جیسے ممالک شامل تھے۔ 'محوری طاقتیں' کی اصطلاح دوسری جنگ عظیم کے اتحاد سے مراد ہے۔"
  },
  {
    "id": 315,
    "question": "The people's Republic of China Government was established in 1949 based on the principles of \"New democracy\". The principle of New Democracy' was an association of (TSTET 12 Jan 2025)\nعوامی جمہوریہ چین کی حکومت 1949 میں \"نئی جمہوریت\" کے اصولوں پر قائم کی گئی تھی۔ 'نئی جمہوریت' کا اصول ان کا ایک اتحاد تھا",
    "options": [
      "All social classes who opposed to landlordism and imperialism\nتمام سماجی طبقات جو جاگیرداری اور سامراجیت کے مخالف تھے",
      "All the Chinese people who have supported Chinese Communist Party\nتمام چینی لوگ جنہوں نے چینی کمیونسٹ پارٹی کی حمایت کی",
      "All the supporters of Mao Zedong who have supported to landlordism and imperialism\nماؤ زے تنگ کے تمام حامی جنہوں نے جاگیرداری اور سامراجیت کی حمایت کی",
      "All the people who believed in the idea of people's rule\nتمام لوگ جو عوام کی حکمرانی کے خیال پر یقین رکھتے تھے"
    ],
    "correctAnswer": 0,
    "explanation": "ماؤ زے تنگ کے 'نئی جمہوریت' کے نظریے نے چار انقلابی سماجی طبقات کے اتحاد کی تجویز پیش کی: پرولتاریہ، کسان، پیٹی بورژوازی، اور قومی بورژوازی۔ یہ 'چار طبقات کا بلاک' کمیونسٹ پارٹی کی قیادت میں سامراجیت اور جاگیرداری (زمینداری) کا تختہ الٹنے کے لیے متحد ہونا تھا۔"
  },
  {
    "id": 316,
    "question": "In 1828, Raja Ram Mohan Roy founded the Brahma Samaj - an assembly of all those who believed in a \"Universal Religion\" is based on the principle of (TSTET 12 Jan 2025)\n1828 میں، راجہ رام موہن رائے نے برہمو سماج کی بنیاد رکھی - جو ان تمام لوگوں کی ایک جماعت تھی جو ایک \"آفاقی مذہب\" پر یقین رکھتے تھے، جس کا اصول یہ تھا",
    "options": [
      "Freedom and respect for women\nخواتین کی آزادی اور عزت",
      "One Supreme God\nایک اعلیٰ خدا",
      "Social Service for national construction\nقومی تعمیر کے لیے سماجی خدمت",
      "To revive a reformed Hindu religion\nایک اصلاح شدہ ہندو مذہب کو زندہ کرنا"
    ],
    "correctAnswer": 1,
    "explanation": "برہمو سماج کا مرکزی عقیدہ توحید تھا، یعنی ایک اعلیٰ، بے شکل، اور آفاقی خدا پر یقین۔ راجہ رام موہن رائے نے ایک ایسے مذہب کی وکالت کی جو بت پرستی، شرک، ذات پات کی تفریق، اور توہم پرستانہ رسومات سے پاک ہو، اور اس کی प्रेरणा اپنشدوں سے لی گئی تھی۔"
  },
  {
    "id": 317,
    "question": "One of the following is NOT the famous temple constructed by Jains (TSTET 12 Jan 2025)\nمندرجہ ذیل میں سے ایک جینوں کا تعمیر کردہ مشہور مندر نہیں ہے",
    "options": [
      "Dilwara Temple at Mount Abu\nماؤنٹ ابو میں دلواڑا مندر",
      "Parshvanadha Temple at Khajuraho\nکھجوراہو میں پرشوانادھ مندر",
      "Jinanadhapura Basadi Temple near Sravanabelagola\nشراونابیلگولا کے قریب جننادھاپور باسدی مندر",
      "The Shwedagon Pagoda, Myanmar\nشویڈاگون پگوڈا، میانمار"
    ],
    "correctAnswer": 3,
    "explanation": "میانمار میں شویڈاگون پگوڈا ایک قابل احترام بدھ اسٹوپا ہے اور ملک میں بدھ مت کے ماننے والوں کے لیے سب سے مقدس مذہبی مقام ہے۔ دیگر تین آپشنز — دلواڑا مندر، پرشواناتھ مندر، اور جنناتھ پور باسدی — سب جین مندر کے فن تعمیر کی مشہور مثالیں ہیں۔"
  },
  {
    "id": 318,
    "question": "In 1919, Mahatma Gandhi gave a call for Satyagraha against (TSTET 12 Jan 2025)\n1919 میں، مہاتما گاندھی نے اس کے خلاف ستیہ گرہ کی کال دی",
    "options": [
      "Rowlatt Act\nرولٹ ایکٹ",
      "Montague Chelmsford Reforms\nمونٹیگ-چیمسفورڈ اصلاحات",
      "Local Movements in Champaran and Kheda\nچمپارن اور کھیڑا میں مقامی تحریکیں",
      "The Ahmedabad Mill workers strike\nاحمد آباد مل ورکرز کی ہڑتال"
    ],
    "correctAnswer": 0,
    "explanation": "مہاتما گاندھی نے 1919 میں جابرانہ رولٹ ایکٹ کے خلاف ملک گیر احتجاج کے طور پر رولٹ ستیہ گرہ کا آغاز کیا۔ اس ایکٹ نے برطانوی حکومت کو کسی بھی شخص کو دہشت گردانہ سرگرمیوں کے شبہ میں بغیر کسی مقدمے کے دو سال تک قید کرنے کا اختیار دیا، جس سے شہری آزادیوں کو شدید طور پر کم کیا گیا۔"
  },
  {
    "id": 319,
    "question": "Thomas Monroe introduced the Ryotwari System in the Madras Presidency as per the orders of this Governor General in 1798 (TSTET 12 Jan 2025)\nتھامس منرو نے 1798 میں اس گورنر جنرل کے احکامات کے مطابق مدراس پریذیڈنسی میں ریوٹواری نظام متعارف کرایا",
    "options": [
      "Lord Wellesley\nلارڈ ویلزلی",
      "Lord William Bentick\nلارڈ ولیم بینٹک",
      "Lord Dalhousie\nلارڈ ڈلہوزی",
      "Lord Warren Hastings\nلارڈ وارن ہیسٹنگز"
    ],
    "correctAnswer": 0,
    "explanation": "ریوٹواری نظام، جہاں محصول براہ راست کاشتکاروں (ریوٹ) سے وصول کیا جاتا تھا، کو تھامس منرو نے مزید ترقی دی اور نافذ کیا۔ یہ لارڈ ویلزلی کی انتظامیہ کے دوران ہوا، جو 1798 سے 1805 تک ہندوستان کے گورنر جنرل تھے۔ منرو بعد میں مدراس کے گورنر بنے اور اس نظام کو وسعت دی۔"
  },
  {
    "id": 320,
    "question": "With this treaty, the Mughal emperor Shah Alam II granted the right to collect Diwani to English East India Company along with police and judicial powers (TSTET 12 Jan 2025)\nاس معاہدے کے تحت مغل شہنشاہ شاہ عالم دوم نے انگریزی ایسٹ انڈیا کمپنی کو پولیس اور عدالتی اختیارات کے ساتھ دیوانی وصول کرنے کا حق دیا",
    "options": [
      "Treaty of Allahabad\nالہ آباد کا معاہدہ",
      "Treaty of Masulipatnam\nمسولی پٹنم کا معاہدہ",
      "Treaty of Bassein\nبسین کا معاہدہ",
      "Treaty of Lahore\nلاہور کا معاہدہ"
    ],
    "correctAnswer": 0,
    "explanation": "الہ آباد کا معاہدہ 1765 میں بکسر کی لڑائی کے بعد ہوا تھا۔ اس معاہدے کے ذریعے، مغل شہنشاہ شاہ عالم دوم نے ایسٹ انڈیا کمپنی کو بنگال، بہار اور اڑیسہ کے صوبوں سے دیوانی حقوق — یعنی محصول وصول کرنے کا حق — عطا کیا۔ یہ ایک اہم لمحہ تھا جس نے ہندوستان میں کمپنی کی حکمرانی کا آغاز کیا۔"
  },
  {
    "id": 321,
    "question": "At the end of the first world war, one of the following was NOT the follower of the fascist ideology (TSTET 12 Jan 2025)\nپہلی جنگ عظیم کے اختتام پر، مندرجہ ذیل میں سے ایک فاشسٹ نظریے کا پیروکار نہیں تھا",
    "options": [
      "General Franco in Spain\nاسپین میں جنرل فرانکو",
      "Benito Mussolini in Italy\nاٹلی میں بینیٹو مسولینی",
      "Adolf Hitler in Germany\nجرمنی میں ایڈولف ہٹلر",
      "Stalin in Soviet Union\nسوویت یونین میں اسٹالن"
    ],
    "correctAnswer": 3,
    "explanation": "فاشزم ایک انتہائی دائیں بازو کا، آمرانہ نظریہ ہے جس کی حمایت مسولینی، ہٹلر اور فرانکو جیسے رہنماؤں نے کی۔ سوویت یونین کے رہنما جوزف اسٹالن کمیونزم کے حامی تھے، جو کہ ایک انتہائی بائیں بازو کا نظریہ ہے۔ کمیونزم اور فاشزم نظریاتی طور پر مخالف تھے اور دوسری جنگ عظیم کے دوران بڑے مخالفین تھے۔"
  },
  {
    "id": 322,
    "question": "The aim of this society was 'to secure social justice for the weaker sections of the society' (TSTET 12 Jan 2025)\nاس سوسائٹی کا مقصد 'معاشرے کے کمزور طبقات کے لیے سماجی انصاف کو یقینی بنانا' تھا",
    "options": [
      "Satya Shodak Samaj\nستیہ شودھک سماج",
      "Temple Entry Movement\nمندر میں داخلے کی تحریک",
      "Arya Samaj\nآریہ سماج",
      "Bahishkrit Hitakarini Sabha\nبہشکرت ہتکارینی سبھا"
    ],
    "correctAnswer": 0,
    "explanation": "ستیہ شودھک سماج (سچائی کے متلاشیوں کی سوسائٹی) کی بنیاد سماجی مصلح جیوتی راؤ پھولے نے 1873 میں رکھی تھی۔ اس کا بنیادی مقصد نچلی ذاتوں (شودر اور اتی شودر) کے حقوق اور سماجی انصاف کے لیے لڑنا اور انہیں برہمنی ذات پات کے نظام کے استحصال اور ظلم سے آزاد کرانا تھا۔"
  },
  {
    "id": 323,
    "question": "Identify the INCORRECT pair from among the following (TSTET 12 Jan 2025)\nمندرجہ ذیل میں سے غلط جوڑے کی نشاندہی کریں",
    "options": [
      "Vidyanatha - Prataparudra yashobhushanam\nودیاناتھ - پرتاپردر یشوبھوشنم",
      "Palkuriki Somanatha - Basavapurana\nپالکوریکی سومناتھ - بساواپوران",
      "Jayapa Senani - Nritya Ratnavali\nجیاپا سینانی - نرتیہ رتناولی",
      "Rudradeva - Panditharadhya charitra\nرودردیو - پنڈتارادھیہ چریتر"
    ],
    "correctAnswer": 3,
    "explanation": "'پنڈتارادھیہ چریتر' مشہور تیلگو شاعر پالکوریکی سومناتھ نے لکھی تھی، جنہوں نے 'بساوا پران' بھی تصنیف کی۔ یہ کاکتیہ حکمران رودردیو نے نہیں لکھی تھی۔ باقی تمام جوڑے صحیح طور پر ملائے گئے ہیں۔"
  },
  {
    "id": 324,
    "question": "Which of the following statement best describes the phrase \"Dogger Bank\"? (TSTET 12 Jan 2025)\nمندرجہ ذیل میں سے کون سا بیان \"ڈوگر بینک\" کے جملے کو بہترین طریقے سے بیان کرتا ہے؟",
    "options": [
      "The part of the North Sea near Great Britain where the fish industry was developed\nبحیرہ شمالی کا وہ حصہ جو برطانیہ کے قریب ہے جہاں ماہی گیری کی صنعت ترقی یافتہ تھی",
      "The region between Pyrenees Mountains and Alps Mountains\nپائرینیز پہاڑوں اور الپس پہاڑوں کے درمیان کا علاقہ",
      "The parts of the sea enclosed by land on three sides\nسمندر کے وہ حصے جو تین طرف سے زمین سے گھرے ہوئے ہیں",
      "The lands along the Mediterranean Sea\nبحیرہ روم کے ساتھ والی زمینیں"
    ],
    "correctAnswer": 0,
    "explanation": "ڈوگر بینک بحیرہ شمالی میں واقع ایک وسیع، کم گہرا ریت کا کنارہ ہے، جو برطانیہ کے ساحل سے دور ہے۔ اس کے کم گہرے پانی اسے ایک غیر معمولی طور پر امیر ماہی گیری کا میدان بناتے ہیں، جو تاریخی طور پر کوڈ اور ہیرنگ کے وافر ذخائر کے لیے مشہور ہے۔"
  },
  {
    "id": 325,
    "question": "'Foehn' the Hot Local Winds blow along the northern slopes of these mountain ranges (TSTET 12 Jan 2025)\n'فوہن' گرم مقامی ہوائیں ان پہاڑی سلسلوں کی شمالی ڈھلوانوں کے ساتھ چلتی ہیں",
    "options": [
      "Alps Mountains\nالپس پہاڑ",
      "Rocky Mountains\nراکی پہاڑ",
      "Andes Mountains\nاینڈیز پہاڑ",
      "Himalayan Mountains\nہمالیائی پہاڑ"
    ],
    "correctAnswer": 0,
    "explanation": "فوہن (یا Föhn) ایک قسم کی گرم، خشک ہوا ہے جو کسی پہاڑی سلسلے کے لیوارڈ (ہوا کے مخالف) کی طرف اترتی ہے۔ یہ رجحان یورپ میں الپس کی خصوصیت ہے، جہاں یہ ہوائیں شمالی ڈھلوانوں سے نیچے چلتی ہیں، جس سے درجہ حرارت میں تیزی سے اضافہ ہوتا ہے۔"
  },
  {
    "id": 326,
    "question": "Savanna Grasslands are mostly grown in these regions (TSTET 12 Jan 2025)\nسوانا گھاس کے میدان زیادہ تر ان علاقوں میں اگتے ہیں",
    "options": [
      "Mid latitudinal Regions\nوسطی عرض البلد کے علاقے",
      "Polar Regions\nقطبی علاقے",
      "Regions on either side of the Equator and extend to the tropics\nخط استوا کے دونوں طرف کے علاقے اور جو منطقہ حارہ تک پھیلے ہوئے ہیں",
      "Regions located on Western margins of the continents\nبراعظموں کے مغربی حاشیوں پر واقع علاقے"
    ],
    "correctAnswer": 2,
    "explanation": "سوانا بایوم عام طور پر اشنکٹبندیی علاقوں میں پائے جاتے ہیں جن کی خصوصیت ایک مخصوص گیلے اور خشک موسم سے ہوتی ہے۔ جغرافیائی طور پر، یہ استوائی بارشی جنگلات اور گرم صحراؤں کے درمیان، خط استوا کے شمال اور جنوب میں بیلٹ میں واقع ہیں جو منطقہ حارہ کی طرف پھیلے ہوئے ہیں۔"
  },
  {
    "id": 327,
    "question": "Which of the following statement best describes the term \"Grid\"? (TSTET 12 Jan 2025)\nمندرجہ ذیل میں سے کون سا بیان \"گرڈ\" کی اصطلاح کو بہترین طریقے سے بیان کرتا ہے؟",
    "options": [
      "A network of latitudes and longitudes drawn on a globe\nایک گلوب پر کھینچے گئے عرض البلد اور طول البلد کا ایک نیٹ ورک",
      "An imaginary line that is drawn from the North Pole to the South Pole\nایک خیالی لکیر جو قطب شمالی سے قطب جنوبی تک کھینچی گئی ہے",
      "The regular path on which the earth goes around the Sun\nوہ باقاعدہ راستہ جس پر زمین سورج کے گرد گھومتی ہے",
      "The regular path on which the Moon goes around the Earth\nوہ باقاعدہ راستہ جس پر چاند زمین کے گرد گھومتا ہے"
    ],
    "correctAnswer": 0,
    "explanation": "جغرافیائی گرڈ ایک ایسا نظام ہے جو زمین کی سطح پر کسی بھی مقام کی نشاندہی کرنے کے لیے ڈیزائن کیا گیا ہے۔ یہ خیالی لکیروں کے ایک نیٹ ورک پر مشتمل ہے: عرض البلد کے متوازی جو مشرق-مغرب میں چلتے ہیں اور طول البلد کے میریڈین جو شمال-جنوب میں چلتے ہیں۔ ان کا تقاطع کوآرڈینیٹ پر مبنی مقام کی درست نشاندہی کی اجازت دیتا ہے۔"
  },
  {
    "id": 328,
    "question": "The reason for the recent earthquakes in Pakistan and Nepal is (TSTET 12 Jan 2025)\nپاکستان اور نیپال میں حالیہ زلزلوں کی وجہ ہے",
    "options": [
      "The Eurosean Plate subduct the Indian Plate\nیوریشین پلیٹ انڈین پلیٹ کے نیچے دھنس جاتی ہے",
      "The Australian Plate subduct the Indian Plate\nآسٹریلوی پلیٹ انڈین پلیٹ کے نیچے دھنس جاتی ہے",
      "The Indian Plate subduct the Eurosean Plate\nانڈین پلیٹ یوریشین پلیٹ کے نیچے دھنس جاتی ہے",
      "The Arabian Plate subduct the Eurosean Plate\nعربین پلیٹ یوریشین پلیٹ کے نیچے دھنس جاتی ہے"
    ],
    "correctAnswer": 2,
    "explanation": "نیپال اور پاکستان کے کچھ حصوں سمیت پورا ہمالیائی خطہ ہندوستانی اور یوریشین ٹیکٹونک پلیٹوں کے درمیان جاری تصادم کی وجہ سے زلزلوں کے لحاظ سے فعال ہے۔ ہندوستانی پلیٹ مسلسل شمال کی طرف دھکیل رہی ہے اور یوریشین پلیٹ کے نیچے پھسل (سبڈکٹ) رہی ہے، جس سے بے پناہ جغرافیائی دباؤ پیدا ہوتا ہے جو زلزلوں کی صورت میں خارج ہوتا ہے۔"
  },
  {
    "id": 329,
    "question": "Among the following, identify the statement that best describes the 'Intrusive Landforms' (TSTET 12 Jan 2025)\nمندرجہ ذیل میں سے، اس بیان کی نشاندہی کریں جو 'انٹروزیو لینڈ فارمز' کو بہترین طریقے سے بیان کرتا ہے",
    "options": [
      "Cooling of Lava under the surface without reaching the surface of the earth and becomes rocks\nلاوا کا زمین کی سطح تک پہنچے بغیر سطح کے نیچے ٹھنڈا ہونا اور چٹان بن جانا",
      "Cooling of lava on the surface of the earth and becomes rocks\nلاوا کا زمین کی سطح پر ٹھنڈا ہونا اور چٹان بن جانا",
      "Landforms formed as plains\nمیدانوں کی شکل میں بننے والے زمینی خدوخال",
      "The landform formed due to internal pressure\nاندرونی دباؤ کی وجہ سے بننے والا زمینی خدوخال"
    ],
    "correctAnswer": 0,
    "explanation": "انٹروزیو (یا پلوٹونک) آتشی زمینی خدوخال اس وقت بنتے ہیں جب میگما زمین کی پرت کے اندر ٹھنڈا اور ٹھوس ہو جاتا ہے بغیر سطح پر پھٹے۔ مثالوں میں باتھولتھ اور لاکولتھ جیسی بڑی تشکیلات، نیز سلز اور ڈائکس جیسی شیٹ نما ساختیں شامل ہیں۔"
  },
  {
    "id": 330,
    "question": "The reason for having low pressure at the earth's surface around the equator is (TSTET 12 Jan 2025)\nخط استوا کے ارد گرد زمین کی سطح پر کم دباؤ ہونے کی وجہ ہے",
    "options": [
      "Low temperature\nکم درجہ حرارت",
      "Moderate temperature\nمعتدل درجہ حرارت",
      "High Rainfall\nزیادہ بارش",
      "High temperature\nزیادہ درجہ حرارت"
    ],
    "correctAnswer": 3,
    "explanation": "خط استوا کا علاقہ سال بھر شدید اور براہ راست سورج کی روشنی حاصل کرتا ہے، جس کی وجہ سے درجہ حرارت مسلسل زیادہ رہتا ہے۔ یہ گرمی سطح کی ہوا کو گرم کرتی ہے، جس کی وجہ سے وہ پھیلتی ہے، کم گھنی ہو جاتی ہے، اور اوپر اٹھتی ہے۔ ہوا کی یہ اوپر کی طرف حرکت سطح پر کم فضائی دباؤ کی ایک پٹی بناتی ہے، جسے ڈولڈرمز یا انٹر ٹراپیکل کنورجنس زون (ITCZ) کہا جاتا ہے۔"
  },
  {
    "id": 331,
    "question": "Arrange the following planets in descending order as per their densities (TSTET 12 Jan 2025)\nA) Earth\nB) Mars\nC) Mercury\nD) Venus\nمندرجہ ذیل سیاروں کو ان کی کثافت کے مطابق نزولی ترتیب میں ترتیب دیں\nA) زمین\nB) مریخ\nC) عطارد\nD) زہرہ",
    "options": [
      "A, B, C, D",
      "B, A, C, D",
      "A, C, D, B",
      "D, C, B, A"
    ],
    "correctAnswer": 2,
    "explanation": "ان ارضی سیاروں کی تخمینی کثافتیں یہ ہیں: زمین (5.51 g/cm³)، عطارد (5.43 g/cm³)، زہرہ (5.24 g/cm³)، اور مریخ (3.93 g/cm³)۔ لہذا، سب سے زیادہ کثافت سے سب سے کم کی طرف صحیح ترتیب زمین، عطارد، زہرہ، مریخ (A, C, D, B) ہے۔"
  },
  {
    "id": 332,
    "question": "These earthquake waves move faster and are the first to arrive at the Surface (TSTET 12 Jan 2025)\nیہ زلزلہ کی لہریں تیزی سے حرکت کرتی ہیں اور سطح پر سب سے پہلے پہنچتی ہیں",
    "options": [
      "S waves\nS لہریں",
      "Surface waves\nسطحی لہریں",
      "P Waves\nP لہریں",
      "Both S Waves and Surface waves\nS لہریں اور سطحی لہریں دونوں"
    ],
    "correctAnswer": 2,
    "explanation": "P-لہریں، یا پرائمری لہریں، کمپریشنل زلزلہ کی لہریں ہیں جو زمین کے اندرونی حصے میں سب سے تیزی سے سفر کرتی ہیں۔ ان کی تیز رفتاری کی وجہ سے، یہ زلزلے کے بعد سیسموگراف کے ذریعے ریکارڈ کی جانے والی پہلی زلزلہ کی لہریں ہیں۔"
  },
  {
    "id": 333,
    "question": "In India, wheat is the main food crop in (TSTET 12 Jan 2025)\nبھارت میں، گندم یہاں کی اہم غذائی فصل ہے",
    "options": [
      "The plains of North and North eastern India\nشمالی اور شمال مشرقی ہندوستان کے میدان",
      "Sundarbans delta region and North-eastern part of the country\nسندربن ڈیلٹا کا علاقہ اور ملک کا شمال مشرقی حصہ",
      "Deccan plateau Region\nدکن سطح مرتفع کا علاقہ",
      "North and North-western part of the country\nملک کا شمالی اور شمال مغربی حصہ"
    ],
    "correctAnswer": 3,
    "explanation": "گندم ہندوستان میں ربیع (سردیوں) کی ایک بڑی فصل ہے، اور اس کی کاشت شمالی اور شمال مغربی ریاستوں میں مرکوز ہے۔ یہ علاقہ، بشمول پنجاب، ہریانہ، اتر پردیش، اور راجستھان، گندم کی کاشت کے لیے درکار مثالی ٹھنڈی، خشک آب و ہوا فراہم کرتا ہے۔"
  },
  {
    "id": 334,
    "question": "In the North-West, India shares its land boundary with these countries (TSTET 12 Jan 2025)\nشمال مغرب میں، بھارت اپنی زمینی سرحد ان ممالک کے ساتھ بانٹتا ہے",
    "options": [
      "Pakistan and Afghanistan\nپاکستان اور افغانستان",
      "Myanmar and Bangladesh\nمیانمار اور بنگلہ دیش",
      "Nepal and Bhutan\nنیپال اور بھوٹان",
      "China and Afghanistan\nچین اور افغانستان"
    ],
    "correctAnswer": 0,
    "explanation": "بھارت کی شمال مغربی علاقے میں زمینی سرحد دو ممالک کے ساتھ مشترک ہے: براہ راست مغرب میں پاکستان اور شمال مغرب کے دور دراز علاقے (جموں و کشمیر کے علاقے میں) میں افغانستان کے ساتھ ایک چھوٹا سا حصہ۔"
  },
  {
    "id": 335,
    "question": "The Aravali Mountains lie on the (TSTET 12 Jan 2025)\nاراولّی پہاڑیاں اس پر واقع ہیں",
    "options": [
      "Southern margins of the Peninsular Plateau\nجزیرہ نما سطح مرتفع کے جنوبی حاشیے",
      "Eastern and North eastern margins of the Peninsular Plateau\nجزیرہ نما سطح مرتفع کے مشرقی اور شمال مشرقی حاشیے",
      "Western and north western margins of the peninsular plateau\nجزیرہ نما سطح مرتفع کے مغربی اور شمال مغربی حاشیے",
      "Eastern and North eastern margins of the Gangetic Plains\nگنگا کے میدانوں کے مشرقی اور شمال مشرقی حاشیے"
    ],
    "correctAnswer": 2,
    "explanation": "اراولّی سلسلہ، دنیا کے قدیم ترین پہاڑی سلسلوں میں سے ایک، بھارتی جزیرہ نما سطح مرتفع کے مغربی اور شمال مغربی کنارے پر واقع ہے۔ یہ جنوب مغرب میں گجرات سے لے کر شمال مشرق میں دہلی تک پھیلا ہوا ہے، اور ایک قدرتی سرحد کے طور پر کام کرتا ہے۔"
  },
  {
    "id": 336,
    "question": "This river rises in the highlands of Chattisgarh and flows through Odisha and reach the Bay of Bengal (TSTET 12 Jan 2025)\nیہ دریا چھتیس گڑھ کے بلند علاقوں سے نکلتا ہے اور اڑیسہ سے بہتا ہوا خلیج بنگال میں جا گرتا ہے",
    "options": [
      "Narmada\nنرمدا",
      "Tapi\nتاپی",
      "Mahanadi\nمہاندی",
      "Godavari\nگوداوری"
    ],
    "correctAnswer": 2,
    "explanation": "مہاندی دریا چھتیس گڑھ کے بلند علاقوں میں سہاوہ پہاڑیوں سے نکلتا ہے۔ یہ ریاست اڑیسہ سے مشرق کی طرف بہتا ہے اور پھر ایک بڑا ڈیلٹا بنا کر خلیج بنگال میں جا گرتا ہے۔"
  },
  {
    "id": 337,
    "question": "In this region, Sundari trees are found which provide durable hard timber (TSTET 12 Jan 2025)\nاس خطے میں، سندری کے درخت پائے جاتے ہیں جو پائیدار سخت لکڑی فراہم کرتے ہیں",
    "options": [
      "The island groups of Andaman & Nicobar\nانڈمان اور نکوبار کے جزائر کے گروہ",
      "The eastern slopes of the Western Ghats\nمغربی گھاٹوں کی مشرقی ڈھلوانیں",
      "The Ganga and Brahmaputra Delta\nگنگا اور برہم پترا ڈیلٹا",
      "Semi-arid areas of Gujarat and Rajasthan\nگجرات اور راجستھان کے نیم بنجر علاقے"
    ],
    "correctAnswer": 2,
    "explanation": "گنگا-برہم پترا ڈیلٹا دنیا کے سب سے بڑے مینگروو جنگل، سندربن، کا گھر ہے۔ اس جنگل کا نام وہاں پائے جانے والے غالب مینگروو کی قسم، سندری کے درخت (Heritiera fomes) کے نام پر رکھا گیا ہے، جو ایک مضبوط، پائیدار لکڑی فراہم کرتا ہے۔"
  },
  {
    "id": 338,
    "question": "The least populous state and Union territory of India are (TSTET 12 Jan 2025)\nبھارت کی سب سے کم آبادی والی ریاست اور یونین ٹیریٹری ہیں",
    "options": [
      "Sikkim and Lakshadweep\nسکم اور لکشادیپ",
      "Mizoram and Andaman & Nicobar Islands\nمیزورم اور انڈمان و نکوبار جزائر",
      "Arunachala Pradesh and Ladakh\nاروناچل پردیش اور لداخ",
      "Meghalaya and Pondicherry\nمیگھالیہ اور پانڈیچری"
    ],
    "correctAnswer": 0,
    "explanation": "بھارت کی مردم شماری 2011 کے مطابق، سب سے کم آبادی والی ریاست سکم ہے، اور سب سے کم آبادی والی یونین ٹیریٹری لکشادیپ ہے۔"
  },
  {
    "id": 339,
    "question": "This schedule of the Indian constitution was incorporated into the Indian Constitution as per the First Amendment of the Indian Constitution (TSTET 12 Jan 2025)\nبھارتی آئین کا یہ شیڈول بھارتی آئین کی پہلی ترمیم کے مطابق آئین میں شامل کیا گیا تھا",
    "options": [
      "12th Schedule\n12واں شیڈول",
      "7th Schedule\n7واں شیڈول",
      "9th Schedule\n9واں شیڈول",
      "10th Schedule\n10واں شیڈول"
    ],
    "correctAnswer": 2,
    "explanation": "نواں شیڈول 1951 کی پہلی ترمیم ایکٹ کے ذریعے آئین میں شامل کیا گیا تھا۔ اس کا مقصد زمینی اصلاحات اور اس میں شامل دیگر قوانین کو عدالتی نظرثانی سے بچانا تھا، تاکہ انہیں بنیادی حقوق کی خلاف ورزی کی بنیاد پر چیلنج کیے جانے سے روکا جا سکے۔"
  },
  {
    "id": 340,
    "question": "'Meira Paibi' in Meitei language literally can be translated as (TSTET 12 Jan 2025)\nمیتئی زبان میں 'میرا پائیبی' کا لفظی ترجمہ کیا جا سکتا ہے",
    "options": [
      "The women torch bearers\nمشعل بردار خواتین",
      "The women with anger\nغصے والی خواتین",
      "The women wearing white dress and demanding peace\nسفید لباس پہنے اور امن کا مطالبہ کرنے والی خواتین",
      "The women with the feeling of regional consciousness for liberation of Manipur\nمنی پور کی آزادی کے لیے علاقائی شعور کے جذبے والی خواتین"
    ],
    "correctAnswer": 0,
    "explanation": "میرا پائیبی منی پور میں خواتین کی ایک نمایاں سماجی تحریک ہے۔ یہ اصطلاح، مقامی میتئی زبان میں، لفظی طور پر \"مشعل بردار\" کے معنی دیتی ہے، کیونکہ خواتین کارکن اکثر رات کو اپنے احتجاجی مارچوں کے دوران جلتی ہوئی مشعلیں اٹھائے ہوتی ہیں۔ انہیں سول سوسائٹی کا محافظ سمجھا جاتا ہے۔"
  },
  {
    "id": 341,
    "question": "Article 13 (1) of the Human Rights is about (TSTET 12 Jan 2025)\nانسانی حقوق کا آرٹیکل 13 (1) اس بارے میں ہے",
    "options": [
      "Everyone has the right to life, liberty and security of person\nہر شخص کو زندگی، آزادی اور ذاتی تحفظ کا حق ہے",
      "All are equal before the law\nسب قانون کے سامنے برابر ہیں",
      "No one shall be subjected to arbitrary arrest, detention or exile\nکسی کو بھی من مانی گرفتاری، حراست یا جلاوطنی کا نشانہ نہیں بنایا جائے گا",
      "Everyone has the right to freedom of movement and residence within the borders of each state\nہر شخص کو ہر ریاست کی سرحدوں کے اندر نقل و حرکت اور رہائش کی آزادی کا حق ہے"
    ],
    "correctAnswer": 3,
    "explanation": "انسانی حقوق کے عالمی اعلامیے (UDHR) کا آرٹیکل 13(1) واضح طور پر کہتا ہے، \"ہر شخص کو ہر ریاست کی سرحدوں کے اندر نقل و حرکت اور رہائش کی آزادی کا حق ہے۔\" یہ حق ذاتی آزادی کے لیے بنیادی ہے۔"
  },
  {
    "id": 342,
    "question": "The basis for the creation of the Election Commission of India (TSTET 12 Jan 2025)\nبھارت کے الیکشن کمیشن کی تشکیل کی بنیاد ہے",
    "options": [
      "Representation of people's Act, 1950\nعوامی نمائندگی ایکٹ، 1950",
      "Indian Constitution\nبھارتی آئین",
      "Parliament Act, 1950\nپارلیمنٹ ایکٹ، 1950",
      "Supreme Court judgement in 1976\n1976 میں سپریم کورٹ کا فیصلہ"
    ],
    "correctAnswer": 1,
    "explanation": "بھارت کا الیکشن کمیشن ایک آئینی ادارہ ہے جو براہ راست آئین کے ذریعے قائم کیا گیا ہے۔ بھارتی آئین کا آرٹیکل 324 اس کی تشکیل، ساخت اور افعال فراہم کرتا ہے، اور اسے انتخابات کی نگرانی، ہدایت اور کنٹرول کا اختیار دیتا ہے۔"
  },
  {
    "id": 343,
    "question": "Ensuring the ability of the earth to nurture life in all its diversity' was the aim of this movement (TSTET 12 Jan 2025)\n'زمین کی تمام تنوع میں زندگی کی پرورش کرنے کی صلاحیت کو یقینی بنانا' اس تحریک کا مقصد تھا",
    "options": [
      "Greenpeace Movement\nگرین پیس موومنٹ",
      "Civil Rights Movement\nشہری حقوق کی تحریک",
      "Silent Valley Movement\nسائلنٹ ویلی موومنٹ",
      "Narmada Bachao Movement\nنرمدا بچاؤ آندولن"
    ],
    "correctAnswer": 0,
    "explanation": "گرین پیس ایک بین الاقوامی ماحولیاتی تنظیم ہے جس کا بیان کردہ مشن \"زمین کی تمام تنوع میں زندگی کی پرورش کرنے کی صلاحیت کو یقینی بنانا\" ہے۔ یہ عدم تشدد پر مبنی براہ راست کارروائی اور وکالت کے ذریعے وسیع پیمانے پر عالمی ماحولیاتی مسائل پر مہم چلاتی ہے۔"
  },
  {
    "id": 344,
    "question": "The president of USSR who initiated a process of reform called Glasnost to bring greater freedom for the people (TSTET 12 Jan 2025)\nیو ایس ایس آر کے وہ صدر جنہوں نے عوام کے لیے زیادہ آزادی لانے کے لیے گلاسنوسٹ نامی اصلاحات کا عمل شروع کیا",
    "options": [
      "Mikhail Kalinin\nمیخائل کالینن",
      "Nikolai Shvernik\nنکولائی شورنک",
      "Kliment Voroshilov\nکلیمینٹ ووروشیلوف",
      "Michael Gorbachev\nمیخائل گورباچوف"
    ],
    "correctAnswer": 3,
    "explanation": "میخائل گورباچوف، سوویت یونین کے آخری رہنما، نے 1980 کی دہائی کے آخر میں 'گلاسنوسٹ' (جس کا مطلب ہے 'کشادگی') کی پالیسی متعارف کرائی۔ اس پالیسی کا مقصد شفافیت اور معلومات کی آزادی کو بڑھانا تھا، جس سے حکومت پر عوامی بحث اور تنقید کی زیادہ گنجائش پیدا ہوئی، جو پچھلی سوویت پالیسیوں سے ایک اہم انحراف تھا۔"
  },
  {
    "id": 345,
    "question": "The aims and objectives of the Indian Constitution are incorporated in (TSTET 12 Jan 2025)\nبھارتی آئین کے مقاصد اور اہداف اس میں شامل ہیں",
    "options": [
      "Fundamental Rights\nبنیادی حقوق",
      "Directive Principles of State Policy\nریاستی پالیسی کے رہنما اصول",
      "Preamble of the Indian Constitution\nبھارتی آئین کا دیباچہ",
      "Fundamental Duties of a Citizen\nایک شہری کے بنیادی فرائض"
    ],
    "correctAnswer": 2,
    "explanation": "دیباچہ بھارتی آئین کے پیش لفظ کے طور پر کام کرتا ہے، جو اس کے بنیادی فلسفے، رہنما اصولوں اور مقاصد کو سمیٹتا ہے۔ یہ انصاف، آزادی، مساوات اور بھائی چارے کے ان نظریات کا خاکہ پیش کرتا ہے جنہیں آئین اپنے شہریوں کے لیے حاصل کرنا چاہتا ہے۔"
  },
  {
    "id": 346,
    "question": "The Indian Parliament CAN NOT amend one of the following parts of the Indian Constitution by a simple majority (TSTET 12 Jan 2025)\nہندوستانی پارلیمنٹ سادہ اکثریت سے ہندوستانی آئین کے مندرجہ ذیل حصوں میں سے کسی ایک میں ترمیم نہیں کر سکتی",
    "options": [
      "The formation of new states\nنئی ریاستوں کی تشکیل",
      "Changing the boundaries of states\nریاستوں کی حدود کو تبدیل کرنا",
      "Rules regarding citizenship\nشہریت سے متعلق قوانین",
      "The matters related to Directive Principles of State Policy\nریاستی پالیسی کے رہنما اصولوں سے متعلق معاملات"
    ],
    "correctAnswer": 3,
    "explanation": "ریاستی پالیسی کے رہنما اصولوں (DPSP) میں ترمیم کے لیے آرٹیکل 368 کے تحت خصوصی اکثریت کی ضرورت ہوتی ہے، جس میں ہر ایوان کی کل رکنیت کی اکثریت اور موجودہ اور ووٹ دینے والے اراکین کی دو تہائی اکثریت شامل ہوتی ہے۔ اس کے برعکس، ریاست کی تشکیل، حدود میں تبدیلی، اور شہریت کے قوانین جیسے معاملات کو پارلیمنٹ کی سادہ اکثریت سے تبدیل کیا جا سکتا ہے۔"
  },
  {
    "id": 347,
    "question": "Who certifies whether the bill is a money bill or not before sending it to the President of India? (TSTET 12 Jan 2025)\nہندوستان کے صدر کو بھیجنے سے پہلے کون اس بات کی تصدیق کرتا ہے کہ بل منی بل ہے یا نہیں؟",
    "options": [
      "The Finance Minister\nوزیر خزانہ",
      "The Parliamentary Affairs Minister\nپارلیمانی امور کے وزیر",
      "The Speaker of Lok Sabha\nلوک سبھا کے اسپیکر",
      "The Chairman of Rajya Sabha\nراجیہ سبھا کے چیئرمین"
    ],
    "correctAnswer": 2,
    "explanation": "ہندوستانی آئین کے آرٹیکل 110(3) کے مطابق، لوک سبھا کے اسپیکر کو یہ فیصلہ کرنے کا حتمی اختیار ہے کہ آیا کوئی بل منی بل ہے۔ اسپیکر کی تصدیق حتمی ہے اور اسے کسی عدالت یا پارلیمنٹ کے کسی بھی ایوان میں چیلنج نہیں کیا جا سکتا۔"
  },
  {
    "id": 348,
    "question": "The President can summon a joint sitting of both the houses of parliament, in case of (TSTET 12 Jan 2025)\nصدر پارلیمنٹ کے دونوں ایوانوں کا مشترکہ اجلاس بلا سکتا ہے، اس صورت میں",
    "options": [
      "a deadlock between the two houses over the ordinary bill\nعام بل پر دونوں ایوانوں کے درمیان تعطل",
      "a deadlock between the two houses over the Money bill\nمنی بل پر دونوں ایوانوں کے درمیان تعطل",
      "a deadlock between the two houses over the Money bill and the ordinary bill\nمنی بل اور عام بل پر دونوں ایوانوں کے درمیان تعطل",
      "a bill is not reflecting the aims and aspirations of the common people of India\nایک بل ہندوستان کے عام لوگوں کے مقاصد اور امنگوں کی عکاسی نہیں کر رہا ہے"
    ],
    "correctAnswer": 0,
    "explanation": "آئین کے آرٹیکل 108 کے تحت، صدر لوک سبھا اور راجیہ سبھا کے درمیان کسی عام قانون سازی بل پر اختلاف کو حل کرنے کے لیے مشترکہ اجلاس بلا سکتا ہے۔ یہ شق منی بلز یا آئینی ترمیمی بلز پر لاگو نہیں ہوتی۔"
  },
  {
    "id": 349,
    "question": "The main objective of this evaluation is to find out the nature and cause of the persistent learning problems and to formulate a plan for seeking suitable remedial actions. (TSTET 12 Jan 2025)\nاس جائزے کا بنیادی مقصد مسلسل سیکھنے کے مسائل کی نوعیت اور وجہ معلوم کرنا اور مناسب اصلاحی اقدامات کے لیے ایک منصوبہ تشکیل دینا ہے۔",
    "options": [
      "Formative evaluation\nتشکیلی جائزہ",
      "Summative evaluation\nخلاصہ جائزہ",
      "Diagnostic evaluation\nتشخیصی جائزہ",
      "Prognostic evaluation\nتشخیصی پیشین گوئی کا جائزہ"
    ],
    "correctAnswer": 2,
    "explanation": "تشخیصی جائزہ خاص طور پر کسی طالب علم کی سیکھنے کی مشکلات کی بنیادی وجوہات کی نشاندہی اور سمجھنے کے لیے ڈیزائن کیا گیا ہے۔ اس کا مقصد کمزوری کے مخصوص شعبوں کی نشاندہی کرنا ہے تاکہ ہدفی اصلاحی ہدایات اور معاونت کی ترقی کے بارے میں آگاہ کیا جا سکے۔"
  },
  {
    "id": 350,
    "question": "Based on the following themes, the lessons in present class-VIII Social studies textbook of Telangana State are developed (TSTET 12 Jan 2025)\nA) Diversity on the earth\nB) Natural Realms of the Earth and Economy\nC) Culture and communication\nD) Religion and Society\nE) Political Systems and Governance\nمندرجہ ذیل موضوعات کی بنیاد پر، تلنگانہ ریاست کی موجودہ آٹھویں جماعت کی سماجی علوم کی نصابی کتاب کے اسباق تیار کیے گئے ہیں\nA) زمین پر تنوع\nB) زمین اور معیشت کے قدرتی دائرے\nC) ثقافت اور مواصلات\nD) مذہب اور معاشرہ\nE) سیاسی نظام اور حکمرانی",
    "options": [
      "A, B C & D only",
      "A, C, D & E only",
      "B, C, D & E only",
      "A, B C, D & E"
    ],
    "correctAnswer": 1,
    "explanation": "تلنگانہ اسٹیٹ ایس سی ای آر ٹی کی سماجی علوم کی نصابی کتابیں ہر جماعت کے لیے کلیدی موضوعات کے ارد گرد منظم ہیں۔ آٹھویں جماعت کے لیے، بڑے موضوعات ہیں: زمین پر تنوع؛ پیداوار، تبادلہ اور ذریعہ معاش؛ سیاسی نظام اور حکمرانی؛ سماجی تنظیم اور عدم مساوات؛ اور مذہب اور معاشرہ۔ آپشنز A، C، D، اور E ان سرکاری موضوعات سے مطابقت رکھتے ہیں۔"
  },
  {
    "id": 351,
    "question": "Comparing to the other approaches, the following teaching learning approach provides more scope for experiential learning and to act the teacher as a facilitator (TSTET 12 Jan 2025)\nدیگر طریقوں کے مقابلے میں، مندرجہ ذیل تدریسی سیکھنے کا طریقہ تجرباتی سیکھنے اور استاد کو ایک سہولت کار کے طور پر کام کرنے کے لیے زیادہ گنجائش فراہم کرتا ہے۔",
    "options": [
      "Teacher centric approach\nاستاد پر مبنی نقطہ نظر",
      "Subject centric approach\nمضمون پر مبنی نقطہ نظر",
      "Behaviouristic approach\nرویہ جاتی نقطہ نظر",
      "Constructivistic approach\nتعمیراتی نقطہ نظر"
    ],
    "correctAnswer": 3,
    "explanation": "تعمیراتی نقطہ نظر یہ मानता ہے کہ سیکھنے والے تجربات اور تعاملات کے ذریعے فعال طور پر اپنی سمجھ اور علم کی تعمیر کرتے ہیں۔ اس ماڈل میں، استاد کا کردار صرف معلومات فراہم کرنا نہیں ہے بلکہ تلاش، تفتیش، اور تجرباتی سیکھنے کے مواقع پیدا کرکے سیکھنے کے عمل کو آسان بنانا ہے۔"
  },
  {
    "id": 352,
    "question": "The following teaching methods are more helpful to the social studies teacher to teach the concepts about, 'Social formation in Indian History'. (TSTET 12 Jan 2025)\nہندوستانی تاریخ میں 'سماجی تشکیل' کے بارے میں تصورات سکھانے کے لیے مندرجہ ذیل تدریسی طریقے سماجی علوم کے استاد کے لیے زیادہ مددگار ہیں۔",
    "options": [
      "Anecdotal and Evolution methods\nواقعاتی اور ارتقائی طریقے",
      "Play way and Project methods\nکھیل کا طریقہ اور پروجیکٹ کے طریقے",
      "Discussion and Problem solving methods\nبحث اور مسئلہ حل کرنے کے طریقے",
      "Inductive and Deductive methods\nاستقرائی اور استخراجی طریقے"
    ],
    "correctAnswer": 0,
    "explanation": "'سماجی تشکیل' کو سمجھنے کے لیے طویل عرصے تک تبدیلیوں کا سراغ لگانے کی ضرورت ہے۔ ارتقائی طریقہ اس تاریخی ترقی کو ظاہر کرنے کے لیے مثالی ہے۔ واقعاتی طریقہ، کہانیوں اور مخصوص مثالوں کا استعمال کرتے ہوئے، ان تجریدی ارتقائی عملوں کو واضح کرنے میں مدد کرتا ہے، جس سے وہ طلباء کے لیے زیادہ قابل فہم اور دلچسپ بن جاتے ہیں۔"
  },
  {
    "id": 353,
    "question": "By teaching the biographics of social reformers, Freedom Fighters and Social Scientists; the teacher can inculcate these values among students (TSTET 12 Jan 2025)\nسماجی مصلحین، مجاہدین آزادی اور سماجی سائنسدانوں کی سوانح حیات پڑھا کر؛ استاد طلباء میں یہ اقدار پیدا کر سکتا ہے۔",
    "options": [
      "Aesthetic values\nجمالیاتی اقدار",
      "Inspirative values\nمتاثر کن اقدار",
      "Utilising Leisure time\nفارغ وقت کا استعمال",
      "Vocational values\nپیشہ ورانہ اقدار"
    ],
    "correctAnswer": 1,
    "explanation": "عظیم تاریخی شخصیات کی زندگی کی کہانیاں کردار کی تعلیم کے لیے طاقتور اوزار ہیں۔ وہ طلباء کو ہمت، قربانی، دیانتداری، اور سماجی وابستگی کی مثالوں سے روشناس کراتی ہیں۔ اس نمائش کا مقصد طلباء کو متاثر کرنا ہے، انہیں مثبت اقدار اور مقصد کا احساس پیدا کرنے کی ترغیب دینا ہے۔"
  },
  {
    "id": 354,
    "question": "Match the following List - A with List - B. (TSTET 12 Jan 2025)\nList-A (Social Scientists)\nA) Vishnu Gupta\nB) Amerthya Sen\nC) Columbus\nD) Max Weber\nList-B (Contributions)\ni) Politics as a vocation\nii) Economics\niii) Economics and Social Justice\niv) Villa-d-La-Navidad settlement\nمندرجہ ذیل فہرست - A کو فہرست - B کے ساتھ ملائیں۔\nفہرست-A (سماجی سائنسدان)\nA) وشنو گپتا\nB) امرتیہ سین\nC) کولمبس\nD) میکس ویبر\nفہرست-B (شراکتیں)\ni) سیاست بطور پیشہ\nii) معاشیات\niii) معاشیات اور سماجی انصاف\niv) ولا-ڈی-لا-ناویداد بستی",
    "options": [
      "A-ii; B-iv; C-i; D-iii",
      "A-iii; B-iv; C-i; D-ii",
      "A-iii; B-ii; C-iv; D-i",
      "A-ii; B-iii; C-iv; D-i"
    ],
    "correctAnswer": 3,
    "explanation": "درست جوڑیاں یہ ہیں: A) وشنو گپتا (چانکیہ) نے 'ارتھ شاستر' لکھی، جو ریاستی امور اور اقتصادی پالیسی پر ایک قدیم متن ہے، جسے اکثر وسیع طور پر 'معاشیات' (ii) کہا جاتا ہے۔ B) امرتیہ سین نوبل انعام یافتہ ہیں جن کا کام فلاحی معاشیات اور سماجی انصاف (iii) پر مرکوز ہے۔ C) کولمبس نے ہسپانیولا (iv) میں لا ناویڈاد کی قلیل مدتی بستی قائم کی۔ D) میکس ویبر نے 'سیاست بطور پیشہ' (i) کے عنوان سے ایک مشہور لیکچر دیا۔"
  },
  {
    "id": 355,
    "question": "Among the following, which are correct statements regarding the aims and objectives of social studies (TSTET 12 Jan 2025)\nA) Objectives are specific and short time achievable\nB) Aims are steps to achieve the objectives\nC) Aims are general and short time achievable\nD) Objectives have temporary values than aims\nمندرجہ ذیل میں سے، سماجی علوم کے مقاصد اور اہداف کے بارے میں کون سے بیانات درست ہیں\nA) مقاصد مخصوص اور کم وقت میں حاصل کیے جا سکتے ہیں\nB) اہداف مقاصد کو حاصل کرنے کے لیے اقدامات ہیں\nC) اہداف عمومی اور کم وقت میں حاصل کیے جا سکتے ہیں\nD) مقاصد کی نسبت اہداف کی عارضی قدریں ہوتی ہیں",
    "options": [
      "A & D only",
      "A & C only",
      "B, C & D only",
      "B & C only"
    ],
    "correctAnswer": 0,
    "explanation": "تدریس میں، اہداف وسیع، طویل مدتی اہداف ہوتے ہیں، جبکہ مقاصد مخصوص، قابل پیمائش، اور قابل حصول قلیل مدتی اہداف ہوتے ہیں۔ لہذا، بیان A درست ہے کیونکہ مقاصد مخصوص ہوتے ہیں اور ایک سبق یا یونٹ کے اندر حاصل کیے جا سکتے ہیں۔ بیان D بھی درست ہے کیونکہ مقاصد فوری تدریسی اہداف سے منسلک ہوتے ہیں، جبکہ اہداف وسیع، دیرپا اقدار کی نمائندگی کرتے ہیں۔ بیانات B اور C اہداف کے تعلق اور ٹائم لائن کی غلط تعریف کرتے ہیں۔"
  },
  {
    "id": 356,
    "question": "A class - IX, student of Srikakulam district came to Dilsukhnagar (Hyderbad) first time; and reached his relatives home at Gachibowli (Hyderabad) with the help of route map of the city. It is reflecting the following ability of him. (TSTET 12 Jan 2025)\nسری کاکولم ضلع کا ایک نویں جماعت کا طالب علم پہلی بار دل سکھ نگر (حیدرآباد) آیا؛ اور شہر کے روٹ میپ کی مدد سے گچی باؤلی (حیدرآباد) میں اپنے رشتہ داروں کے گھر پہنچ گیا۔ یہ اس کی مندرجہ ذیل قابلیت کی عکاسی کرتا ہے۔",
    "options": [
      "Map drawing\nنقشہ بنانا",
      "Map pointing\nنقشے پر نشاندہی کرنا",
      "Map reading\nنقشہ پڑھنا",
      "Map making\nنقشہ سازی"
    ],
    "correctAnswer": 2,
    "explanation": "طالب علم نے کامیابی کے ساتھ ایک پہلے سے موجود نقشے کا استعمال کرتے ہوئے علامات کی تشریح کی، راستوں کو سمجھا، اور ایک منزل تک پہنچا۔ ایک مخصوص مقصد کے لیے نقشے سے معلومات نکالنے اور لاگو کرنے کے اس عمل کو نقشہ پڑھنا کہا جاتا ہے۔ یہ ایک اہم جغرافیائی مہارت ہے۔"
  },
  {
    "id": 357,
    "question": "This method helps more to the social studies teacher to inculcate real life learning experiences by teaching political science (TSTET 12 Jan 2025)\nیہ طریقہ سماجی علوم کے استاد کو سیاسیات پڑھا کر حقیقی زندگی کے سیکھنے کے تجربات پیدا کرنے میں زیادہ مدد کرتا ہے۔",
    "options": [
      "Simulation method\nنقلی طریقہ",
      "Lecture method\nلیکچر کا طریقہ",
      "Story telling method\nکہانی سنانے کا طریقہ",
      "Lecture cum Demonstration method\nلیکچر اور مظاہرے کا طریقہ"
    ],
    "correctAnswer": 0,
    "explanation": "نقلی طریقہ میں سیکھنے والوں کے تجربے کے لیے حقیقی دنیا کی صورتحال کا ایک ماڈل بنانا شامل ہے۔ سیاسیات میں، فرضی پارلیمنٹ، ماڈل یو این، یا انتخابات میں کردار ادا کرنے جیسی سرگرمیاں طلباء کو سیاسی عمل کا براہ راست، عملی تجربہ فراہم کرتی ہیں، جس سے سیکھنا لیکچرز جیسے غیر فعال طریقوں سے زیادہ دلچسپ اور حقیقت پسندانہ بن جاتا ہے۔"
  },
  {
    "id": 358,
    "question": "A social studies teacher should acquire the ability of using the following technique for introducing a lesson (TSTET 12 Jan 2025)\nA) Story telling\nB) Experimentation\nC) Dramatisation\nD) Using Audio-Visual aids\nE) Narration\nایک سماجی علوم کے استاد کو سبق متعارف کرانے کے لیے مندرجہ ذیل تکنیک کو استعمال کرنے کی صلاحیت حاصل کرنی چاہیے\nA) کہانی سنانا\nB) تجربہ کرنا\nC) ڈرامائی تشکیل\nD) سمعی و بصری امداد کا استعمال\nE) بیانیہ",
    "options": [
      "A, B, D & E",
      "A, C, D & E only",
      "A, B, C, D & E",
      "B, C, D & E only"
    ],
    "correctAnswer": 1,
    "explanation": "مؤثر سبق کا تعارف طلباء کی توجہ حاصل کرتا ہے اور سیکھنے کے لیے اسٹیج تیار کرتا ہے۔ کہانی سنانا، ڈرامائی تشکیل، سمعی و بصری امداد کا استعمال، اور بیانیہ سبھی سماجی علوم کے تناظر میں طلباء کو مشغول کرنے کے لیے بہترین تکنیک ہیں۔ تجربہ کرنا ایک ایسا طریقہ ہے جو بنیادی طور پر سائنس میں استعمال ہوتا ہے اور سماجی علوم کے موضوع کو متعارف کرانے کے لیے یہ ایک عام تکنیک نہیں ہے۔"
  },
  {
    "id": 359,
    "question": "Match the following List A with List - B. (TSTET 12 Jan 2025)\nList -A (Teaching Aids)\nA) Projective aid\nB) Three dimensional aid\nC) Display aid\nD) Activity aid\nList -B (Examples)\ni) Field trip\nii) Slide\niii) Model\niv) Black board\nمندرجہ ذیل فہرست - A کو فہرست - B کے ساتھ ملائیں۔\nفہرست-A (تدریسی امداد)\nA) پروجیکٹیو امداد\nB) سہ جہتی امداد\nC) ڈسپلے امداد\nD) سرگرمی امداد\nفہرست-B (مثالیں)\ni) فیلڈ ٹرپ\nii) سلائیڈ\niii) ماڈل\niv) بلیک بورڈ",
    "options": [
      "A-iii; B-ii; C-iv; D-i",
      "A-ii; B-iv; C-i; D-iii",
      "A-iii; B-iv; C-ii; D-i",
      "A-ii; B-iii; C-iv; D-i"
    ],
    "correctAnswer": 3,
    "explanation": "درست جوڑیاں یہ ہیں: A) ایک پروجیکٹیو امداد، جیسے سلائیڈ، کو دیکھنے کے لیے پروجیکشن کی ضرورت ہوتی ہے (ii)۔ B) ایک سہ جہتی امداد، جیسے ماڈل، کی اونچائی، چوڑائی، اور گہرائی ہوتی ہے (iii)۔ C) ایک ڈسپلے امداد، جیسے بلیک بورڈ، بصری طور پر معلومات پیش کرنے کے لیے استعمال ہوتی ہے (iv)۔ D) ایک سرگرمی امداد، جیسے فیلڈ ٹرپ، میں فعال شرکت اور براہ راست تجربہ شامل ہوتا ہے (i)۔"
  },
  {
    "id": 360,
    "question": "Social studies teacher conducted plantation, clean and green programmes in the village with class-9 students. Here the teacher (TSTET 12 Jan 2025)\nسماجی علوم کے استاد نے نویں جماعت کے طلباء کے ساتھ گاؤں میں شجرکاری، صاف اور سبز پروگرام منعقد کیے۔ یہاں استاد نے",
    "options": [
      "Organised school camp\nاسکول کیمپ کا اہتمام کیا",
      "Taken the school to community\nاسکول کو کمیونٹی تک لے گئے",
      "Bring the community to school\nکمیونٹی کو اسکول لایا",
      "Organised field trip\nفیلڈ ٹرپ کا اہتمام کیا"
    ],
    "correctAnswer": 1,
    "explanation": "شجرکاری اور صفائی مہم جیسی کمیونٹی پر مبنی سرگرمیوں کا اہتمام کرکے، استاد تعلیمی عمل کو اسکول کی جسمانی حدود سے باہر بڑھا رہا ہے۔ یہ عمل کلاس روم کی تعلیم کو حقیقی دنیا کی سماجی ذمہ داری سے جوڑتا ہے، اس طرح 'اسکول کو کمیونٹی تک لے جاتا ہے' اور طلباء میں شہری مصروفیت کے احساس کو فروغ دیتا ہے۔"
  },
  {
    "id": 361,
    "question": "This layer of the atmosphere absorbs ultra violet radiation and shields life on the earth from intense, harmful form of energy (TSTET 28 June 2025)\nفضا کی یہ تہہ بالائے بنفشی شعاعوں کو جذب کرتی ہے اور زمین پر زندگی کو توانائی کی شدید، نقصان دہ شکل سے بچاتی ہے۔",
    "options": [
      "Troposphere\nٹروپوسفیئر",
      "Stratosphere\nاسٹریٹوسفیئر",
      "Mesosphere\nمیسوسفیئر",
      "Thermosphere\nتھرموسفیئر"
    ],
    "correctAnswer": 1,
    "explanation": "اسٹریٹوسفیئر میں اوزون کی تہہ ہوتی ہے، جو سورج کی زیادہ تر نقصان دہ بالائے بنفشی (UV) شعاعوں کو جذب کرنے کی ذمہ دار ہے، اس طرح زمین پر زندگی کی حفاظت کرتی ہے۔"
  },
  {
    "id": 362,
    "question": "In 2002, this right became a part of the 'Right to Life' (TSTET 28 June 2025)\n2002 میں، یہ حق 'زندگی کے حق' کا حصہ بن گیا",
    "options": [
      "Right to Primary Education\nبنیادی تعلیم کا حق",
      "Right to Work\nکام کا حق",
      "Right to Higher Education\nاعلیٰ تعلیم کا حق",
      "Right to form Associations\nانجمنیں بنانے کا حق"
    ],
    "correctAnswer": 0,
    "explanation": "2002 کے 86 ویں ترمیمی ایکٹ کے ذریعے، آرٹیکل 21-A کو ہندوستان کے آئین میں شامل کیا گیا، جس سے 6 سے 14 سال کی عمر کے بچوں کے لیے مفت اور لازمی تعلیم کو ایک بنیادی حق بنایا گیا۔ سپریم کورٹ نے اسے آرٹیکل 21 کے تحت زندگی کے حق کا ایک لازمی حصہ قرار دیا ہے۔"
  },
  {
    "id": 363,
    "question": "The famous valley of Kashmir, running over a distance of about 135 km in south-east to north-west direction, lies in between these ranges (TSTET 28 June 2025)\nکشمیر کی مشہور وادی، جو جنوب مشرق سے شمال مغرب کی سمت میں تقریباً 135 کلومیٹر کے فاصلے پر پھیلی ہوئی ہے، ان سلسلوں کے درمیان واقع ہے۔",
    "options": [
      "The Hindu Kush Mountain Ranges and the Zaskar Range\nکوہ ہندو کش اور زنسکار سلسلہ",
      "The Karakoram Mountain Range and the Kunlun Mountain Range\nسلسلہ کوہ قراقرم اور سلسلہ کوہ کنلون",
      "The Pir Panjal Range and the Zaskar Range\nپیر پنجال سلسلہ اور زنسکار سلسلہ",
      "The Hindu Kush Mountain Ranges and the Pamir Knot\nکوہ ہندو کش اور پامیر ناٹ"
    ],
    "correctAnswer": 2,
    "explanation": "وادی کشمیر ایک بین پہاڑی وادی، یا ایک بیسن ہے، جو جنوب اور مغرب میں پیر پنجال سلسلہ اور شمال اور مشرق میں عظیم ہمالیہ سلسلہ، جس میں زنسکار سلسلہ بھی شامل ہے، کے درمیان واقع ہے۔"
  },
  {
    "id": 364,
    "question": "The existence of southwest monsoon winds in India is due to (TSTET 28 June 2025)\nہندوستان میں جنوب مغربی مون سون ہواؤں کا وجود اس وجہ سے ہے۔",
    "options": [
      "Earth's rotation\nزمین کی گردش",
      "Differential heating of the land and the sea\nزمین اور سمندر کی مختلف حرارت",
      "Ocean currents\nسمندری رویں",
      "Trade winds\nتجارتی ہوائیں"
    ],
    "correctAnswer": 1,
    "explanation": "گرمیوں کے دوران، ہندوستانی سرزمین آس پاس کے بحر ہند کے مقابلے میں تیزی سے گرم ہو جاتی ہے۔ اس سے زمین پر ایک مضبوط کم دباؤ کا علاقہ اور سمندر پر ایک زیادہ دباؤ کا علاقہ بنتا ہے، جس کی وجہ سے نمی سے بھری ہوائیں سمندر سے زمین کی طرف چلتی ہیں، جسے جنوب مغربی مون سون کہا جاتا ہے۔"
  },
  {
    "id": 365,
    "question": "The Human Development Index Value of a Country 'X' is 0.976. Then, the country 'X' is considered to be in this group of economic development (TSTET 28 June 2025)\nایک ملک 'X' کی انسانی ترقی کے اشاریے کی قدر 0.976 ہے۔ تب، ملک 'X' کو اقتصادی ترقی کے اس گروپ میں سمجھا جاتا ہے۔",
    "options": [
      "High Human Development\nاعلیٰ انسانی ترقی",
      "Very High Human Development\nبہت اعلیٰ انسانی ترقی",
      "Medium Human Development\nدرمیانی انسانی ترقی",
      "Low Human Development\nکم انسانی ترقی"
    ],
    "correctAnswer": 1,
    "explanation": "اقوام متحدہ کے ترقیاتی پروگرام (UNDP) 0.800 اور اس سے اوپر کے انسانی ترقی کے اشاریے (HDI) اسکور والے ممالک کو 'بہت اعلیٰ انسانی ترقی' کے طور پر درجہ بندی کرتا ہے۔ 0.976 کا اسکور آسانی سے اس زمرے میں آتا ہے۔"
  },
  {
    "id": 366,
    "question": "'A practice of growing two or more crops together on the same field in the same season', is known as (TSTET 28 June 2025)\n'ایک ہی کھیت میں ایک ہی موسم میں دو یا دو سے زیادہ فصلیں ایک ساتھ اگانے کا عمل'، کہلاتا ہے۔",
    "options": [
      "Mixed Farming\nمخلوط کاشتکاری",
      "Crop Rotation\nفصلوں کی گردش",
      "Multiple Cropping\nمتعدد فصلیں اگانا",
      "Inter Cropping\nبین فصلی کاشت"
    ],
    "correctAnswer": 3,
    "explanation": "بین فصلی کاشت ایک ہی کھیت میں بیک وقت دو یا دو سے زیادہ فصلیں کاشت کرنے کا زرعی عمل ہے۔ یہ طریقہ حیاتیاتی تنوع، پیداوار میں اضافہ کر سکتا ہے، اور فصل کی ناکامی کے خلاف تحفظ فراہم کر سکتا ہے۔"
  },
  {
    "id": 367,
    "question": "In a country, the negative growth rate of population is observed when (TSTET 28 June 2025)\nایک ملک میں، آبادی کی منفی شرح نمو اس وقت دیکھی جاتی ہے جب",
    "options": [
      "The birth rate is more than the death rate\nشرح پیدائش شرح اموات سے زیادہ ہو",
      "The birth and death rate are equal\nشرح پیدائش اور شرح اموات برابر ہوں",
      "The rate of migration is less than the rate of immigration\nہجرت کی شرح امیگریشن کی شرح سے کم ہو",
      "The birth rate is less than the death rate\nشرح پیدائش شرح اموات سے کم ہو"
    ],
    "correctAnswer": 3,
    "explanation": "آبادی کی منفی شرح نمو، یا آبادی میں کمی، اس وقت ہوتی ہے جب اموات کی تعداد (علاوہ ہجرت) پیدائش کی تعداد (علاوہ امیگریشن) سے تجاوز کر جاتی ہے۔ اس کا سب سے آسان منظرنامہ یہ ہے کہ جب شرح اموات شرح پیدائش سے زیادہ ہو۔"
  },
  {
    "id": 368,
    "question": "One of the following is NOT the Four Pillars of Human Development (TSTET 28 June 2025)\nمندرجہ ذیل میں سے ایک انسانی ترقی کے چار ستونوں میں سے نہیں ہے۔",
    "options": [
      "Equity\nمساوات",
      "Sociability\nملنساری",
      "Sustainability\nپائیداری",
      "Productivity\nپیداواریت"
    ],
    "correctAnswer": 1,
    "explanation": "یو این ڈی پی کے ذریعہ بیان کردہ انسانی ترقی کے تصور کے چار لازمی ستون مساوات، پائیداری، پیداواریت، اور بااختیار بنانا ہیں۔ 'ملنساری' ان ستونوں میں سے ایک نہیں ہے۔"
  },
  {
    "id": 369,
    "question": "Identify an equatorial crop from among the following (TSTET 28 June 2025)\nمندرجہ ذیل میں سے ایک استوائی فصل کی نشاندہی کریں۔",
    "options": [
      "Tea\nچائے",
      "Rubber\nربڑ",
      "Coffee\nکافی",
      "Sugar Cane\nگنا"
    ],
    "correctAnswer": 1,
    "explanation": "ربڑ کا درخت ایمیزون بیسن کا مقامی ہے اور استوائی علاقوں میں پائے جانے والے گرم، مرطوب حالات میں پروان چڑھتا ہے، جس کے لیے سال بھر مسلسل اعلی درجہ حرارت (25 ° C سے اوپر) اور بھاری بارش (200 سینٹی میٹر سے زیادہ) کی ضرورت ہوتی ہے۔"
  },
  {
    "id": 370,
    "question": "Which of the following refers to the Dogger Bank, now known as 'Dogger Land'? (TSTET 28 June 2025)\nمندرجہ ذیل میں سے کون سا ڈوگر بینک کا حوالہ دیتا ہے، جو اب 'ڈوگر لینڈ' کے نام سے جانا جاتا ہے؟",
    "options": [
      "A small portion of land from the sea in which the people of Holland have reclaimed\nسمندر سے زمین کا ایک چھوٹا سا حصہ جسے ہالینڈ کے لوگوں نے دوبارہ حاصل کیا ہے",
      "The land that is reclaimed from the sea\nوہ زمین جو سمندر سے حاصل کی گئی ہے",
      "Part of the North Sea where fish industry is well developed\nبحیرہ شمالی کا وہ حصہ جہاں مچھلی کی صنعت اچھی طرح سے ترقی یافتہ ہے",
      "Part of the sea where ship building Industry is well developed\nسمندر کا وہ حصہ جہاں جہاز سازی کی صنعت اچھی طرح سے ترقی یافتہ ہے"
    ],
    "correctAnswer": 2,
    "explanation": "ڈوگر بینک بحیرہ شمالی کے ایک کم گہرے علاقے میں ایک بڑا ریت کا تودہ ہے، جو ایک انتہائی پیداواری ماہی گیری کے میدان کے طور پر مشہور ہے۔ ڈوگر لینڈ اب ڈوبی ہوئی پراگیتہاسک زمین کے لیے نام ہے جو برطانیہ کو براعظم یورپ سے جوڑتی تھی، جس کا ڈوگر بینک ایک باقیات ہے۔"
  },
  {
    "id": 371,
    "question": "One of the following is NOT the characteristic feature of Organised Sector (TSTET 28 June 2025)\nمندرجہ ذیل میں سے ایک منظم شعبے کی خصوصیت نہیں ہے۔",
    "options": [
      "Small and Scattered Industrial Units\nچھوٹے اور بکھرے ہوئے صنعتی یونٹس",
      "Security of Employment\nملازمت کا تحفظ",
      "Having fixed number of working hours\nکام کے اوقات کی مقررہ تعداد ہونا",
      "Availability of overtime facility\nاضافی وقت (اوور ٹائم) کی سہولت کی دستیابی"
    ],
    "correctAnswer": 0,
    "explanation": "منظم شعبہ حکومت کے ساتھ رجسٹرڈ اداروں پر مشتمل ہوتا ہے، جو ملازمت کی حفاظت، مقررہ کام کے اوقات، اور فوائد پیش کرتا ہے۔ 'چھوٹے اور بکھرے ہوئے صنعتی یونٹس' غیر منظم شعبے کی خصوصیات ہیں، جو بڑی حد تک حکومتی ضابطے سے باہر کام کرتا ہے۔"
  },
  {
    "id": 372,
    "question": "This soil is formed from the weathering of igneous rocks (TSTET 28 June 2025)\nیہ مٹی آتشی چٹانوں کے موسمی اثرات سے بنتی ہے۔",
    "options": [
      "Alluvial Soil\nایلوویل مٹی",
      "Black Soil\nکالی مٹی",
      "Red Soil\nسرخ مٹی",
      "Sandy Soil\nریتیلی مٹی"
    ],
    "correctAnswer": 1,
    "explanation": "کالی مٹی، جسے ریگور مٹی بھی کہا جاتا ہے، بنیادی طور پر دکن کے لاوا ٹریپس کے موسمی اثرات سے بنتی ہے، جو آتش فشانی آتشی چٹانیں ہیں۔ یہ چکنی ہوتی ہیں، نمی برقرار رکھتی ہیں، اور کپاس کی کاشت کے لیے مثالی ہیں۔"
  },
  {
    "id": 373,
    "question": "Alfred Wegner who introduced the 'theory of Continental Drift' was a German (TSTET 28 June 2025)\nالفریڈ ویگنر جس نے 'براعظمی بہاؤ کا نظریہ' پیش کیا تھا، ایک جرمن تھا۔",
    "options": [
      "Astronomer and Geophysicist\nماہر فلکیات اور جیو فزیکسٹ",
      "Meteorologist and Geophysicist\nماہر موسمیات اور جیو فزیکسٹ",
      "Geophysicist and Mathematician\nجیو فزیکسٹ اور ریاضی دان",
      "Mathematician and Astronomer\nریاضی دان اور ماہر فلکیات"
    ],
    "correctAnswer": 1,
    "explanation": "الفریڈ ویگنر ایک جرمن سائنسدان تھا جس کا بنیادی پیشہ موسمیات تھا۔ تاہم، وہ ارضیات اور جیو فزکس میں اپنی خدمات، خاص طور پر براعظمی بہاؤ کے اپنے যুগান্তকারী نظریے کے لیے سب سے زیادہ مشہور ہے۔"
  },
  {
    "id": 374,
    "question": "Among the following, the flattest and the smoothest region of the world is (TSTET 28 June 2025)\nمندرجہ ذیل میں سے، دنیا کا سب سے ہموار اور سب سے ملائم خطہ ہے۔",
    "options": [
      "Continental Shelf\nبراعظمی شیلف",
      "Continental slope\nبراعظمی ڈھلوان",
      "Deep Sea Plain\nگہرے سمندر کا میدان",
      "Ocean Deep\nسمندر کی گہرائی"
    ],
    "correctAnswer": 2,
    "explanation": "گہرے سمندر کے میدان، جنہیں ابیسل میدان بھی کہا جاتا ہے، گہرے سمندر کے فرش کے وسیع، ہموار علاقے ہیں۔ باریک دانے دار تلچھٹ سے ڈھکے ہوئے، انہیں زمین کی سطح پر سب سے ہموار اور سب سے ملائم خطے سمجھا جاتا ہے۔"
  },
  {
    "id": 375,
    "question": "Among the following treaties, the treaty that was signed in the year 1991 was (TSTET 28 June 2025)\nمندرجہ ذیل معاہدوں میں سے، وہ معاہدہ جو سال 1991 میں دستخط کیا گیا تھا",
    "options": [
      "Strategic Arms Limitation Treaty (SALT)\nاسٹریٹجک آرمز لمیٹیشن ٹریٹی (SALT)",
      "Strategic Arms Reduction Treaty-I (START-I)\nاسٹریٹجک آرمز ریڈکشن ٹریٹی-I (START-I)",
      "The Missile Technology Control Treaty\nمیزائل ٹیکنالوجی کنٹرول ٹریٹی",
      "Strategic Arms Reduction Treaty-II (START-II)\nاسٹریٹجک آرمز ریڈکشن ٹریٹی-II (START-II)"
    ],
    "correctAnswer": 1,
    "explanation": "اسٹریٹجک آرمز ریڈکشن ٹریٹی (START I) ایک دو طرفہ معاہدہ تھا جس پر ریاستہائے متحدہ اور سوویت یونین نے 31 جولائی 1991 کو دستخط کیے تھے۔ اس نے تعینات اسٹریٹجک جوہری وارہیڈز اور بیلسٹک میزائلوں کی تعداد پر حدیں مقرر کیں۔"
  },
  {
    "id": 376,
    "question": "Among the following, the trade union formed under the influence of Mahatma Gandhi in Ahmedabad was (TSTET 28 June 2025)\nمندرجہ ذیل میں سے، احمد آباد میں مہاتما گاندھی کے زیر اثر بننے والی ٹریڈ یونین تھی۔",
    "options": [
      "Mazdoor Mahajan\nمزدور مہاجن",
      "Girni Kamgar\nگرنی کامگار",
      "the Indian National Trade Union Congress (INTUC)\nانڈین نیشنل ٹریڈ یونین کانگریس (INTUC)",
      "Bhartiya Mazdoor Sangh\nبھارتیہ مزدور سنگھ"
    ],
    "correctAnswer": 0,
    "explanation": "احمد آباد ٹیکسٹائل لیبر ایسوسی ایشن، جو مزدور مہاجن سنگھ کے نام سے مشہور ہے، 1920 میں قائم کی گئی تھی۔ یہ 1918 میں گاندھی کی قیادت میں کامیاب احمد آباد مل ہڑتال کے بعد عدم تشدد اور ٹرسٹی شپ کے گاندھیائی اصولوں پر قائم کی گئی تھی۔"
  },
  {
    "id": 377,
    "question": "When Libya became independent from Italy in 1951 after a long struggle, Italy transferred power to (TSTET 28 June 2025)\nجب لیبیا 1951 میں ایک طویل جدوجہد کے بعد اٹلی سے آزاد ہوا تو اٹلی نے اقتدار منتقل کر دیا۔",
    "options": [
      "Muammar Gaddaffi\nمعمر قذافی",
      "King Idris\nبادشاہ ادریس",
      "A Revolutionary Command Council\nایک انقلابی کمانڈ کونسل",
      "The Socialist Libyan Arab Republic\nسوشلسٹ لیبیائی عرب جمہوریہ"
    ],
    "correctAnswer": 1,
    "explanation": "24 دسمبر 1951 کو، لیبیا نے اقوام متحدہ کی نگرانی میں ایک مدت کے بعد اٹلی سے آزادی حاصل کی۔ اقتدار باضابطہ طور پر بادشاہ ادریس اول کو منتقل کیا گیا، جو نئی قائم ہونے والی متحدہ مملکت لیبیا کے بادشاہ بنے۔"
  },
  {
    "id": 378,
    "question": "In 1906, 'to spread awareness among Dalits by using popular folk arts Bhagya Reddy Varma started (TSTET 28 June 2025)\n1906 میں، 'مقبول لوک فنون کا استعمال کرکے دلتوں میں بیداری پھیلانے کے لیے بھاگیہ ریڈی ورما نے شروع کیا۔",
    "options": [
      "Vocational Work Centre\nپیشہ ورانہ کام کا مرکز",
      "Jagan Mitra Mandali\nجگن مترا منڈلی",
      "Telangana Praja Samithi\nتلنگانہ پرجا سمیتی",
      "Adi Hindu Jatiyonnati Sabha\nآدی ہندو جاتیونتی سبھا"
    ],
    "correctAnswer": 1,
    "explanation": "بھاگیہ ریڈی ورما، ایک ممتاز سماجی مصلح، نے 1906 میں جگن مترا منڈلی کا آغاز کیا۔ تنظیم کا مقصد دلت برادریوں میں تعلیم اور بیداری پیدا کرنا تھا، جس کے لیے بھجن اور ہری کتھا جیسے روایتی لوک فنون کا استعمال کرکے سماجی اصلاح کے پیغامات پہنچائے جاتے تھے۔"
  },
  {
    "id": 379,
    "question": "The origin of Burrakatha is associated with this movement (TSTET 28 June 2025)\nبرراکتھا کی ابتدا اس تحریک سے وابستہ ہے۔",
    "options": [
      "Young Bengal Movement\nینگ بنگال تحریک",
      "Brahma Samaj Movement\nبرہمو سماج تحریک",
      "Prarthana Samaj Movement\nپرتھنا سماج تحریک",
      "Veerashaiva Movement\nویراشیو تحریک"
    ],
    "correctAnswer": 3,
    "explanation": "برراکتھا، آندھرا پردیش اور تلنگانہ کا ایک روایتی کہانی سنانے کا پرفارمنس آرٹ، اپنی جڑیں ویراشیو تحریک کے عقیدتی گیتوں اور بیلڈز میں رکھتا ہے، جس نے اپنے مذہبی اور سماجی فلسفے کی تبلیغ کے لیے ایسی پرفارمنس کا استعمال کیا۔"
  },
  {
    "id": 380,
    "question": "The Drafting Committee of the Indian Constitution consists of (TSTET 28 June 2025)\nہندوستانی آئین کی ڈرافٹنگ کمیٹی پر مشتمل ہے۔",
    "options": [
      "The Chairman and the nine members\nچیئرمین اور نو اراکین",
      "The Chairman and the six members\nچیئرمین اور چھ اراکین",
      "The Chairman and the eight members\nچیئرمین اور آٹھ اراکین",
      "The Chairman, the Vice-Chairman and the seven members\nچیئرمین، وائس چیئرمین اور سات اراکین"
    ],
    "correctAnswer": 1,
    "explanation": "آئین ساز اسمبلی کی ڈرافٹنگ کمیٹی، جس کی صدارت ڈاکٹر بی آر امبیڈکر نے کی، کل سات اراکین پر مشتمل تھی: ایک چیئرمین اور چھ دیگر اراکین۔ اسے ہندوستان کے آئین کا مسودہ تیار کرنے کا کام سونپا گیا تھا۔"
  },
  {
    "id": 381,
    "question": "Kondagattu Anjaneya Swamy Temple' is located in this district of Telangana (TSTET 28 June 2025)\n'کونڈاگٹو انجانیا سوامی مندر' تلنگانہ کے اس ضلع میں واقع ہے۔",
    "options": [
      "Jagityal\nجگتیال",
      "Adilabad\nعادل آباد",
      "Medak\nمیدک",
      "Kamareddy\nکاماریڈی"
    ],
    "correctAnswer": 0,
    "explanation": "مشہور کونڈاگٹو انجانیا سوامی مندر تلنگانہ کے جگتیال ضلع کے متھیم پیٹ گاؤں میں ایک پہاڑی پر واقع ایک بڑا زیارت گاہ ہے۔"
  },
  {
    "id": 382,
    "question": "According to the Indian Constitution, this does not enforce any particular religion on individuals nor take away the religious freedom of individuals (TSTET 28 June 2025)\nہندوستانی آئین کے مطابق، یہ افراد پر کوئی خاص مذہب نافذ نہیں کرتا اور نہ ہی افراد کی مذہبی آزادی کو چھینتا ہے۔",
    "options": [
      "Socialist State\nسوشلسٹ ریاست",
      "Secular State\nسیکولر ریاست",
      "Democratic State\nجمہوری ریاست",
      "Theocratic State\nتھیوکریٹک ریاست"
    ],
    "correctAnswer": 1,
    "explanation": "ایک سیکولر ریاست مذہب کے معاملات میں غیر جانبداری برقرار رکھتی ہے، نہ تو اسے فروغ دیتی ہے اور نہ ہی اس میں مداخلت کرتی ہے۔ ہندوستانی آئین ایک سیکولر ریاست قائم کرتا ہے، اس بات کو یقینی بناتا ہے کہ کوئی ریاستی مذہب نہ ہو اور تمام شہریوں کو مذہب کی آزادی کی ضمانت دیتا ہے۔"
  },
  {
    "id": 383,
    "question": "The Supreme Court Judgement on this case was considered as the second major event in the life of the Indian Constitution (TSTET 28 June 2025)\nاس کیس پر سپریم کورٹ کا فیصلہ ہندوستانی آئین کی زندگی کا دوسرا بڑا واقعہ سمجھا جاتا تھا۔",
    "options": [
      "A.K Gopalan Case\nاے۔ کے۔ گوپالن کیس",
      "Golaknadh Case\nگولک ناتھ کیس",
      "Keshavananda Bharathi Case\nکیشوانند بھارتی کیس",
      "Shah Bano Begum Case\nشاہ بانو بیگم کیس"
    ],
    "correctAnswer": 2,
    "explanation": "1973 کا کیشوانند بھارتی کیس ایک تاریخی فیصلہ ہے جہاں سپریم کورٹ نے 'بنیادی ڈھانچے کا نظریہ' قائم کیا۔ یہ نظریہ پارلیمنٹ کی آئین میں ترمیم کی طاقت کو محدود کرتا ہے، یہ بیان کرتے ہوئے کہ اس کی بنیادی خصوصیات کو تبدیل نہیں کیا جا سکتا۔ یہ فیصلہ ہندوستانی آئینی قانون کا ایک سنگ بنیاد سمجھا جاتا ہے۔"
  },
  {
    "id": 384,
    "question": "The International organisation that was started with a twin objective of 'ensuring lasting peace and human development' was (TSTET 28 June 2025)\nوہ بین الاقوامی تنظیم جو 'دیرپا امن اور انسانی ترقی کو یقینی بنانے' کے دوہرے مقصد کے ساتھ شروع کی گئی تھی",
    "options": [
      "Non-Aligned Movement\nغیر وابستہ تحریک",
      "United Nations Organisation\nاقوام متحدہ کی تنظیم",
      "The International Monetary Fund\nبین الاقوامی مالیاتی فنڈ",
      "SAARC\nسارک"
    ],
    "correctAnswer": 1,
    "explanation": "اقوام متحدہ کی تنظیم (UNO) دوسری جنگ عظیم کے بعد 1945 میں قائم کی گئی تھی۔ اس کے بنیادی مقاصد، جیسا کہ اس کے چارٹر میں بیان کیا گیا ہے، بین الاقوامی امن و سلامتی کو برقرار رکھنا اور اقتصادی، سماجی، ثقافتی، یا انسانی مسائل کو حل کرنے میں بین الاقوامی تعاون حاصل کرنا ہے۔"
  },
  {
    "id": 385,
    "question": "In 1990, L.K. Advani, the leader Bharatiya Janata Party led 'Rath Yatra' from (TSTET 28 June 2025)\n1990 میں، بھارتیہ جنتا پارٹی کے رہنما ایل کے اڈوانی نے 'رتھ یاترا' کی قیادت کی",
    "options": [
      "Kanyakumari\nکنیاکماری",
      "Varanasi\nوارانسی",
      "Somnath\nسومناتھ",
      "New Delhi\nنئی دہلی"
    ],
    "correctAnswer": 2,
    "explanation": "بی جے پی رہنما ایل کے اڈوانی کی قیادت میں رام رتھ یاترا ستمبر 1990 میں گجرات کے تاریخی سومناتھ مندر سے شروع ہوئی۔ اس کی منزل ایودھیا تھی، اور اس کا مقصد بابری مسجد کی جگہ پر رام مندر کی تعمیر کے لیے حمایت حاصل کرنا تھا۔"
  },
  {
    "id": 386,
    "question": "As per the Article 324 (6) of the Indian Constitution, it utilizes the services of Central and State Government employees (TSTET 28 June 2025)\nہندوستانی آئین کے آرٹیکل 324 (6) کے مطابق، یہ مرکزی اور ریاستی حکومت کے ملازمین کی خدمات کا استعمال کرتا ہے۔",
    "options": [
      "The Central Finance Commission for economic survey\nاقتصادی سروے کے لیے مرکزی مالیاتی کمیشن",
      "The Election Commission for conduct of elections\nانتخابات کے انعقاد کے لیے الیکشن کمیشن",
      "The Census Department for population Census\nآبادی کی مردم شماری کے لیے محکمہ مردم شماری",
      "The SC commission for caste census\nذات پات کی مردم شماری کے لیے ایس سی کمیشن"
    ],
    "correctAnswer": 1,
    "explanation": "ہندوستانی آئین کا آرٹیکل 324(6) یہ لازمی قرار دیتا ہے کہ صدر اور ریاستی گورنرز کو انتخابات کے انعقاد کے لیے درخواست پر الیکشن کمیشن کو ضروری عملہ فراہم کرنا ہوگا، جس سے کمیشن کو اس مقصد کے لیے سرکاری ملازمین کا استعمال کرنے کی اجازت ملتی ہے۔"
  },
  {
    "id": 387,
    "question": "As per this article of the Indian Constitution, the President of India can dismiss the state Government and order the Governor of the state to take over the administration of the state with the advice of the Prime Minister (TSTET 28 June 2025)\nہندوستانی آئین کے اس آرٹیکل کے مطابق، ہندوستان کا صدر ریاستی حکومت کو برطرف کر سکتا ہے اور وزیر اعظم کے مشورے پر ریاست کے گورنر کو ریاست کی انتظامیہ سنبھالنے کا حکم دے سکتا ہے۔",
    "options": [
      "Article 224\nآرٹیکل 224",
      "Article 280\nآرٹیکل 280",
      "Article 356\nآرٹیکل 356",
      "Article 352\nآرٹیکل 352"
    ],
    "correctAnswer": 2,
    "explanation": "آرٹیکل 356 ایک ریاست میں صدر راج کے نفاذ کی اجازت دیتا ہے اگر صدر، گورنر کی رپورٹ ملنے پر یا دوسری صورت میں، مطمئن ہو کہ ایسی صورتحال پیدا ہو گئی ہے جس میں ریاست کی حکومت آئین کی دفعات کے مطابق نہیں چلائی جا سکتی۔"
  },
  {
    "id": 388,
    "question": "In the Lok Sabha Elections held in India in 1971, the Congress Party went to elections using this popular slogan (TSTET 28 June 2025)\n1971 میں ہندوستان میں ہونے والے لوک سبھا انتخابات میں، کانگریس پارٹی نے اس مقبول نعرے کا استعمال کرتے ہوئے انتخابات میں حصہ لیا",
    "options": [
      "Garibi Hatao\nغریبی ہٹاؤ",
      "Sustainable Development\nپائیدار ترقی",
      "Save Democracy\nجمہوریت بچاؤ",
      "Unity and Diversity\nاتحاد اور تنوع"
    ],
    "correctAnswer": 0,
    "explanation": "'غریبی ہٹاؤ' کا نعرہ 1971 کے لوک سبھا انتخابات کے لیے اندرا گاندھی کی مہم کا سنگ بنیاد تھا۔ یہ ایک مقبول پیغام تھا جو غریبوں میں وسیع پیمانے پر گونجتا تھا اور ان کی زبردست فتح میں اہم کردار ادا کرتا تھا۔"
  },
  {
    "id": 389,
    "question": "\"We are going to enter into a life of contradictions, in politics we will have equality and in social and economic life, we will have inequality\" said by (TSTET 28 June 2025)\n\"ہم تضادات کی زندگی میں داخل ہونے جا رہے ہیں، سیاست میں ہمارے پاس مساوات ہوگی اور سماجی اور اقتصادی زندگی میں، ہمارے پاس عدم مساوات ہوگی\" یہ کس نے کہا",
    "options": [
      "Dr BR Ambedkar\nڈاکٹر بی آر امبیڈکر",
      "Margaret W Fisher\nمارگریٹ ڈبلیو فشر",
      "Joan V Bondurant\nجون وی بونڈورنٹ",
      "Jawaharlal Nehru\nجواہر لعل نہرو"
    ],
    "correctAnswer": 0,
    "explanation": "ڈاکٹر بی آر امبیڈکر نے یہ گہرا بیان 25 نومبر 1949 کو آئین ساز اسمبلی میں اپنے آخری خطاب میں دیا۔ وہ 'ایک آدمی، ایک ووٹ' کے اصول کے ذریعے دی گئی سیاسی مساوات اور ہندوستان میں گہری جڑوں والی سماجی و اقتصادی عدم مساوات کے تسلسل کے درمیان موروثی تضاد کے بارے میں خبردار کر رہے تھے۔"
  },
  {
    "id": 390,
    "question": "As per the \"Permanent Revenue settlement system\" these were given power to collect revenues (TSTET 28 June 2025)\n\"مستقل محصولاتی تصفیہ کے نظام\" کے مطابق انہیں محصول وصول کرنے کا اختیار دیا گیا تھا۔",
    "options": [
      "Tenants\nکرایہ دار",
      "Peasants\nکسان",
      "Village heads\nگاؤں کے سربراہ",
      "Zamindars\nزمیندار"
    ],
    "correctAnswer": 3,
    "explanation": "مستقل تصفیہ، جو 1793 میں لارڈ کارنوالس نے متعارف کرایا تھا، نے زمینداروں کو زمین کے مالک کے طور پر تسلیم کیا۔ انہیں کسانوں سے کرایہ وصول کرنے اور برطانوی ایسٹ انڈیا کمپنی کو ایک مقررہ رقم کا محصول ادا کرنے کا کام سونپا گیا تھا۔"
  },
  {
    "id": 391,
    "question": "To put together a programme for uniting Italy into an Italian Republic, Guiseppe Garibaldi formed a secret society called (TSTET 28 June 2025)\nاٹلی کو ایک اطالوی جمہوریہ میں متحد کرنے کا پروگرام ترتیب دینے کے لیے، جوزپے گیریبالڈی نے ایک خفیہ سوسائٹی بنائی جسے کہا جاتا تھا",
    "options": [
      "Black Shirts\nبلیک شرٹس",
      "Blue Shirts\nبلیو شرٹس",
      "Red Shirts\nریڈ شرٹس",
      "White Shirts\nوائٹ شرٹس"
    ],
    "correctAnswer": 2,
    "explanation": "جوزپے گیریبالڈی کے پیروکاروں کو ان کی وردیوں کے رنگ کی وجہ سے ریڈ شرٹس (سرخ قمیض والے) کے نام سے جانا جاتا تھا۔ یہ رضاکار افواج اطالوی اتحاد میں بہت اہم تھیں، خاص طور پر 1860 کی 'ہزاروں کی مہم' کے دوران جس نے سسلی اور نیپلز کو فتح کیا۔"
  },
  {
    "id": 392,
    "question": "The Worsley Canal, the First English Canal, was built by (TSTET 28 June 2025)\nوورسلے کینال، پہلی انگریزی نہر، کس نے تعمیر کی تھی",
    "options": [
      "James Brindley\nجیمز برنڈلے",
      "Stephenson\nسٹیفنسن",
      "John Medcalf\nجان میڈکالف",
      "Henry cart\nہنری کارٹ"
    ],
    "correctAnswer": 0,
    "explanation": "برج واٹر کینال، جس میں وورسلے کی کانوں کا حصہ بھی شامل ہے، انگلینڈ کی پہلی جدید مصنوعی نہر سمجھی جاتی ہے۔ اسے ڈیوک آف برج واٹر کے لیے کوئلہ منتقل کرنے کی غرض سے جیمز برنڈلے نے انجنیئر کیا تھا، اور اس کی کامیابی نے برطانیہ میں نہریں بنانے کے دور کا آغاز کیا۔"
  },
  {
    "id": 393,
    "question": "In 1991, the disbanding of USSR was announced by (TSTET 28 June 2025)\n1991 میں، سوویت یونین (USSR) کی تحلیل کا اعلان کس نے کیا تھا",
    "options": [
      "Mikhail Gorbachev\nمیخائل گورباچوف",
      "Nikita Khrushchev\nنکیتا خروشیف",
      "Leonid Brezhnev\nلیونڈ بریژنیف",
      "Boris Yeltsin\nبورس یلسن"
    ],
    "correctAnswer": 3,
    "explanation": "سوویت یونین کی تحلیل پر مؤثر طریقے سے 8 دسمبر 1991 کو بیلوویژا معاہدے کے ذریعے مہر ثبت کی گئی، جس پر بورس یلسن (روس کے صدر) اور یوکرین اور بیلاروس کے رہنماؤں نے دستخط کیے۔ بانی جمہوریات کے سربراہان کے اس اعلان نے سوویت یونین کی حتمی تحلیل کی راہ ہموار کی۔"
  },
  {
    "id": 394,
    "question": "In the 16th century, a \"Seaborne Empire \"was established over the Indian Ocean by (TSTET 28 June 2025)\n16ویں صدی میں، بحر ہند پر ایک \"بحری سلطنت\" کس نے قائم کی تھی",
    "options": [
      "Spain\nاسپین",
      "England\nانگلینڈ",
      "Holland\nہالینڈ",
      "Portuguese\nپرتگالی"
    ],
    "correctAnswer": 3,
    "explanation": "16ویں صدی میں، پرتگال نے 'Estado da Índia' قائم کی، جو ایک زبردست بحری سلطنت تھی۔ اعلیٰ بحری ٹیکنالوجی اور قلعہ بند تجارتی چوکیوں (feitorias) کے نیٹ ورک کے ذریعے، انہوں نے بحر ہند کے اہم سمندری تجارتی راستوں کو کنٹرول کیا۔"
  },
  {
    "id": 395,
    "question": "The Social Reformer who fought for Re-marriage of widows, 'Especially child widows' was (TSTET 28 June 2025)\nوہ سماجی مصلح جس نے بیواؤں، 'خاص طور پر کم عمر بیواؤں' کی دوبارہ شادی کے لیے جدوجہد کی، کون تھا",
    "options": [
      "Raja Rammohan Roy\nراجہ رام موہن رائے",
      "Ishwar Chandra Vidyasagar\nایشور چندر ودیا ساگر",
      "Kandukuri Veereshalingam\nکندوکوری ویریشالنگم",
      "Bhagya Reddy Varma\nبھاگیہ ریڈی ورما"
    ],
    "correctAnswer": 1,
    "explanation": "ایشور چندر ودیا ساگر 19ویں صدی کے بنگال میں ایک سرکردہ سماجی مصلح تھے جنہوں نے بیواؤں کے حقوق، خاص طور پر ان کی دوبارہ شادی کے حق کے لیے بھرپور مہم چلائی۔ ان کی انتھک کوششوں کے نتیجے میں 1856 میں ہندو بیواؤں کی دوبارہ شادی کا ایکٹ منظور ہوا۔"
  },
  {
    "id": 396,
    "question": "Mahatma Gandhi decided to launch this third major movement against the British rule after the failure of Cripps Mission (TSTET 28 June 2025)\nکرپس مشن کی ناکامی کے بعد مہاتما گاندھی نے برطانوی حکومت کے خلاف یہ تیسری بڑی تحریک شروع کرنے کا فیصلہ کیا",
    "options": [
      "Ahmedabad Textile Workers Agitation\nاحمد آباد ٹیکسٹائل ورکرز ایجی ٹیشن",
      "Quit India Movement\nہندوستان چھوڑو تحریک",
      "Civil Disobedience Movement\nسول نافرمانی کی تحریک",
      "Kaira Protest Movement\nکھیڑا احتجاجی تحریک"
    ],
    "correctAnswer": 1,
    "explanation": "1942 میں کرپس مشن کی ناکامی، جس نے مکمل آزادی کی پیشکش نہیں کی، ہندوستان چھوڑو تحریک کے لیے ایک بڑا محرک تھی۔ اگست 1942 میں، مہاتما گاندھی نے آل انڈیا کانگریس کمیٹی کے بمبئی اجلاس میں یہ تحریک شروع کی، جس میں ہندوستان میں برطانوی راج کے خاتمے کا مطالبہ کیا گیا۔"
  },
  {
    "id": 397,
    "question": "In March 1946, the British Cabinet sent a three-member mission team to New Delhi to examine (TSTET 28 June 2025)\nمارچ 1946 میں، برطانوی کابینہ نے ایک تین رکنی مشن ٹیم کو نئی دہلی بھیجا تاکہ جائزہ لیا جا سکے",
    "options": [
      "the demand of separate state made by the All India Muslim League and to suggest a suitable political framework for Indian freedom\nآل انڈیا مسلم لیگ کے علیحدہ ریاست کے مطالبے کا اور ہندوستانی آزادی کے لیے ایک موزوں سیاسی ڈھانچے کی تجویز دینا",
      "the possibility of dividing India into India and Pakistan\nہندوستان کو ہندوستان اور پاکستان میں تقسیم کرنے کے امکان کا",
      "the demand of All India Muslim League in keeping India united\nہندوستان کو متحد رکھنے میں آل انڈیا مسلم لیگ کے مطالبے کا",
      "the demand of Indian National Congress to provide more seats to Muslims\nانڈین نیشنل کانگریس کے مسلمانوں کو مزید نشستیں فراہم کرنے کے مطالبے کا"
    ],
    "correctAnswer": 0,
    "explanation": "1946 کا کابینہ مشن ہندوستان کو اقتدار کی منتقلی کا منصوبہ بنانے میں مدد کے لیے بھیجا گیا تھا۔ اسے انڈین نیشنل کانگریس (متحدہ ہندوستان کے لیے) اور مسلم لیگ (پاکستان کی علیحدہ ریاست کے لیے) کے متضاد مطالبات کو حل کرنا تھا، اور اس کا حتمی مقصد ایک آزاد اور متحدہ ہندوستان کے لیے ایک آئینی ڈھانچہ تجویز کرنا تھا۔"
  },
  {
    "id": 398,
    "question": "Among the following Asaf Jahi rulers, the rulers who would not get the title 'Nizam' from the Mughals were (TSTET 28 June 2025)\nدرج ذیل آصف جاہی حکمرانوں میں سے، وہ حکمران کون تھے جنہیں مغلوں سے 'نظام' کا خطاب نہیں ملا",
    "options": [
      "Nazar Jung, Salabath Jung and Afzal Ud Daula\nناصر جنگ، صلابت جنگ اور افضل الدولہ",
      "Afzal Ud Daula and Salabath Jung\nافضل الدولہ اور صلابت جنگ",
      "Meer Mahboob Ali Khan and Muzaffar Jung\nمیر محبوب علی خان اور مظفر جنگ",
      "Nazar Jung, Muzafar Jung and Salabath Jung\nناصر جنگ، مظفر جنگ اور صلابت جنگ"
    ],
    "correctAnswer": 3,
    "explanation": "پہلے نظام کی وفات کے بعد، عدم استحکام کا دور شروع ہوا۔ ان کے جانشین، ناصر جنگ، مظفر جنگ، اور صلابت جنگ، فرانسیسیوں اور انگریزوں کی حمایت سے جانشینی کی جنگوں میں ملوث تھے۔ اس افراتفری کے دور میں، انہوں نے مغل شہنشاہ سے باقاعدہ منظوری یا 'نظام' کے خطاب کے بغیر حکومت کی۔"
  },
  {
    "id": 399,
    "question": "The Green Revolution was taken as a pilot project in seven districts of the country and was called as (TSTET 28 June 2025)\nسبز انقلاب کو ملک کے سات اضلاع میں ایک پائلٹ پروجیکٹ کے طور پر شروع کیا گیا تھا اور اسے کہا جاتا تھا",
    "options": [
      "Intensive Agriculture Development Programme\nانٹینسیو ایگریکلچر ڈیولپمنٹ پروگرام",
      "High Yielding Variety Programme\nہائی ییلڈنگ ورائٹی پروگرام",
      "Intensive Agriculture Area Programme\nانٹینسیو ایگریکلچر ایریا پروگرام",
      "Integrated Agriculture Development Programme\nانٹیگریٹڈ ایگریکلچر ڈیولپمنٹ پروگرام"
    ],
    "correctAnswer": 0,
    "explanation": "1960 میں شروع کیا گیا انٹینسیو ایگریکلچرل ڈیولپمنٹ پروگرام (IADP)، ہندوستان میں سبز انقلاب کا پیش خیمہ سمجھا جاتا ہے۔ اسے منتخب اضلاع میں ایک پائلٹ پروجیکٹ کے طور پر شروع کیا گیا تھا تاکہ یہ ظاہر کیا جا سکے کہ بہتر آدانوں اور طریقوں کا ایک پیکیج کس طرح زرعی پیداوار میں تیزی سے اضافہ کر سکتا ہے۔"
  },
  {
    "id": 400,
    "question": "Identify the true statement from the following related to National Income A) National Income is the total market value of all final goods and services produced annually in a country B) National income is the total income accrued to a country from various economic activities in a year's time (TSTET 28 June 2025)\nقومی آمدنی سے متعلق درج ذیل میں سے صحیح بیان کی نشاندہی کریں A) قومی آمدنی کسی ملک میں سالانہ پیدا ہونے والی تمام حتمی اشیاء اور خدمات کی کل بازاری قدر ہے B) قومی آمدنی وہ کل آمدنی ہے جو کسی ملک کو ایک سال کے عرصے میں مختلف اقتصادی سرگرمیوں سے حاصل ہوتی ہے",
    "options": [
      "Only A is true\nصرف A درست ہے",
      "Only B is true\nصرف B درست ہے",
      "Both A and B are true\nA اور B دونوں درست ہیں",
      "Both A and B are not true\nA اور B دونوں درست نہیں ہیں"
    ],
    "correctAnswer": 2,
    "explanation": "دونوں بیانات قومی آمدنی کی درست تعریفیں فراہم کرتے ہیں۔ بیان A اسے پیداوار (یا آؤٹ پٹ) کے نقطہ نظر سے بیان کرتا ہے، جو اشیاء اور خدمات کی قدر کی نمائندگی کرتا ہے۔ بیان B اسے آمدنی کے نقطہ نظر سے بیان کرتا ہے، جو ان اقتصادی سرگرمیوں سے حاصل ہونے والی کل آمدنی کی نمائندگی کرتا ہے۔ قومی کھاتوں میں، یہ دونوں پیمانے برابر ہونے چاہئیں۔"
  },
  {
    "id": 401,
    "question": "From among the following, identify the Primary Sector activities A) Gardening B) Bee Keeping C) Basket Weaving (Choose the correct answer) (TSTET 28 June 2025)\nدرج ذیل میں سے، پرائمری سیکٹر کی سرگرمیوں کی نشاندہی کریں A) باغبانی B) شہد کی مکھیوں کی پرورش C) ٹوکری بننا (صحیح جواب منتخب کریں)",
    "options": [
      "Only A and B are true\nصرف A اور B درست ہیں",
      "Only B and C are true\nصرف B اور C درست ہیں",
      "Only C is true\nصرف C درست ہے",
      "A, B and C are true\nA، B اور C درست ہیں"
    ],
    "correctAnswer": 0,
    "explanation": "پرائمری سیکٹر میں براہ راست فطرت سے خام مال نکالنا شامل ہے۔ باغبانی (زراعت) اور شہد کی مکھیوں کی پرورش (شہد کی مکھیاں پالنا) اس تعریف پر پورا اترتے ہیں۔ تاہم، ٹوکری بننا ایک مینوفیکچرنگ سرگرمی ہے جہاں خام مال (جیسے بانس یا بید) کو تیار شدہ مصنوعات میں پراسیس کیا جاتا ہے، جو اسے ثانوی شعبے میں رکھتا ہے۔"
  },
  {
    "id": 402,
    "question": "This type of farming is practiced in areas with High Population Density on land (TSTET 28 June 2025)\nاس قسم کی کاشتکاری ان علاقوں میں کی جاتی ہے جہاں زمین پر آبادی کی کثافت زیادہ ہوتی ہے",
    "options": [
      "Intensive Subsistence Farming\nگھنی گزربسر والی کاشتکاری",
      "Slash and burn method of farming\nکاٹو اور جلاؤ کاشتکاری کا طریقہ",
      "Simple Subsistence farming\nسادہ گزربسر والی کاشتکاری",
      "Commercial Farming\nتجارتی کاشتکاری"
    ],
    "correctAnswer": 0,
    "explanation": "گھنی گزربسر والی کاشتکاری کی خصوصیت یہ ہے کہ چھوٹی زمینوں پر زیادہ محنت لگا کر فی یونٹ رقبہ زیادہ پیداوار حاصل کی جاتی ہے۔ زراعت کی یہ شکل گنجان آباد علاقوں میں عام ہے جہاں زمین کی کمی ہوتی ہے۔"
  },
  {
    "id": 403,
    "question": "Fixation of minimum support price for agricultural product is done by (TSTET 28 June 2025)\nزرعی مصنوعات کے لیے کم از کم امدادی قیمت کا تعین کون کرتا ہے",
    "options": [
      "State Ministry of Agriculture\nریاستی وزارت زراعت",
      "Market Committee\nمارکیٹ کمیٹی",
      "Commission for Agriculture Costs and Prices\nکمیشن برائے زرعی لاگت اور قیمتیں",
      "Food Corporation of India\nفوڈ کارپوریشن آف انڈیا"
    ],
    "correctAnswer": 2,
    "explanation": "حکومت ہند ہر سال کمیشن برائے زرعی لاگت اور قیمتوں (CACP) کی سفارشات کی بنیاد پر بڑی زرعی مصنوعات کے لیے کم از کم امدادی قیمت (MSP) کا تعین کرتی ہے۔"
  },
  {
    "id": 404,
    "question": "This sector was given more priority in industrial policy of 1991 in India (TSTET 28 June 2025)\nبھارت کی 1991 کی صنعتی پالیسی میں اس شعبے کو زیادہ ترجیح دی گئی تھی",
    "options": [
      "Public Sector\nپبلک سیکٹر",
      "Private Sector\nپرائیویٹ سیکٹر",
      "Cooperative Sector\nکوآپریٹو سیکٹر",
      "Joint Sector\nجوائنٹ سیکٹر"
    ],
    "correctAnswer": 1,
    "explanation": "1991 کی نئی صنعتی پالیسی نے لبرلائزیشن، پرائیویٹائزیشن، اور گلوبلائزیشن (LPG) کے دور کا آغاز کیا۔ اس نے پبلک سیکٹر کے کردار کو نمایاں طور پر کم کیا، زیادہ تر صنعتوں کے لیے صنعتی لائسنسنگ کو ختم کیا، اور معیشت کو کھول دیا، اس طرح پرائیویٹ سیکٹر کی ترقی اور شرکت کو بڑی ترجیح دی۔"
  },
  {
    "id": 405,
    "question": "In the following stages of Paper Production, the length and thickness of the paper is set at this stage (TSTET 28 June 2025)\nکاغذ کی پیداوار کے درج ذیل مراحل میں، کاغذ کی لمبائی اور موٹائی کس مرحلے پر طے کی جاتی ہے",
    "options": [
      "Spreading the pulp\nگودا پھیلانا",
      "Chipping\nچپنگ (ٹکڑے کرنا)",
      "Making the wood pulp\nلکڑی کا گودا بنانا",
      "Cutting\nکاٹنا"
    ],
    "correctAnswer": 0,
    "explanation": "کاغذ کی مل میں، گودا تیار ہونے کے بعد، اسے کاغذ بنانے والی مشین میں ڈالا جاتا ہے۔ اس مشین کے 'گیلے سرے' پر، گودے کے محلول کو ایک بڑی سکرین پر یکساں طور پر پھیلایا جاتا ہے۔ یہ وہ مرحلہ ہے جہاں کاغذ کی مسلسل شیٹ بنتی ہے، اور اس کی موٹائی (بنیادی وزن) اور چوڑائی کا تعین ہوتا ہے۔"
  },
  {
    "id": 406,
    "question": "One of the following is NOT the general function of Reserve Bank of India (TSTET 28 June 2025)\nدرج ذیل میں سے ایک ریزرو بینک آف انڈیا کا عمومی کام نہیں ہے",
    "options": [
      "Banker to the Government\nحکومت کا بینکر",
      "Custodian of foreign exchange\nزرمبادلہ کا نگران",
      "Control of credit\nکریڈٹ کا کنٹرول",
      "Inspection of the banks\nبینکوں کا معائنہ"
    ],
    "correctAnswer": 3,
    "explanation": "جبکہ بینکوں کا معائنہ آر بی آئی کی طرف سے انجام دی جانے والی ایک اہم سرگرمی ہے، یہ اس کے وسیع تر کام 'مالیاتی نظام کے ریگولیٹر اور سپروائزر' کے تحت آتا ہے۔ دیگر اختیارات—حکومت کے بینکر کے طور پر کام کرنا، زرمبادلہ کا انتظام کرنا، اور کریڈٹ کو کنٹرول کرنا—اعلیٰ سطح کے، جامع عمومی کام سمجھے جاتے ہیں۔"
  },
  {
    "id": 407,
    "question": "The formal source of Credit from the following is (TSTET 28 June 2025)\nدرج ذیل میں سے کریڈٹ کا رسمی ذریعہ ہے",
    "options": [
      "Traders\nتاجر",
      "Cooperative Societies\nکوآپریٹو سوسائٹیز",
      "Moneylenders\nساہوکار",
      "Friends and relatives\nدوست اور رشتہ دار"
    ],
    "correctAnswer": 1,
    "explanation": "کریڈٹ کے رسمی ذرائع میں بینک اور کوآپریٹو سوسائٹیاں شامل ہیں، جنہیں حکومت اور ریزرو بینک آف انڈیا ریگولیٹ کرتے ہیں۔ غیر رسمی ذرائع جیسے ساہوکار، تاجر، اور رشتہ دار اس رسمی ریگولیٹری فریم ورک سے باہر کام کرتے ہیں۔"
  },
  {
    "id": 408,
    "question": "In India, National Income is calculated by (TSTET 28 June 2025)\nبھارت میں، قومی آمدنی کا حساب کون لگاتا ہے",
    "options": [
      "National statistical office\nقومی شماریاتی دفتر",
      "Planning commission\nمنصوبہ بندی کمیشن",
      "Ministry of Finance\nوزارت خزانہ",
      "Reserve Bank of India\nریزرو بینک آف انڈیا"
    ],
    "correctAnswer": 0,
    "explanation": "ہندوستان میں قومی آمدنی کا تخمینہ قومی شماریاتی دفتر (NSO) کے ذریعے کیا جاتا ہے، جو وزارت شماریات اور پروگرام کے نفاذ (MoSPI) کا ایک ونگ ہے۔"
  },
  {
    "id": 409,
    "question": "This is not related to the features of Social Studies (TSTET 28 June 2025)\nاس کا تعلق سماجی علوم کی خصوصیات سے نہیں ہے",
    "options": [
      "The study of human relations\nانسانی تعلقات کا مطالعہ",
      "The study of modern problems\nجدید مسائل کا مطالعہ",
      "The study of ancient times and has no relation with present life\nقدیم زمانے کا مطالعہ اور موجودہ زندگی سے کوئی تعلق نہیں",
      "The study of the development of human society\nانسانی معاشرے کی ترقی کا مطالعہ"
    ],
    "correctAnswer": 2,
    "explanation": "سماجی علوم کا ایک بنیادی اصول ماضی اور حال کے درمیان تعلق کو سمجھنا ہے۔ یہ جدید مسائل اور انسانی تعلقات کے لیے سیاق و سباق فراہم کرنے کے لیے تاریخ اور انسانی ترقی کا مطالعہ کرتا ہے۔ یہ بیان کہ اس کا موجودہ زندگی سے کوئی تعلق نہیں، بنیادی طور پر غلط ہے۔"
  },
  {
    "id": 410,
    "question": "'Taxila' and 'Nalanda' are the best examples for this source of history (TSTET 28 June 2025)\n'ٹیکسلا' اور 'نالندہ' تاریخ کے اس ماخذ کی بہترین مثالیں ہیں",
    "options": [
      "Archeological sources\nآثار قدیمہ کے ذرائع",
      "Literacy sources\nادبی ذرائع",
      "Secular Literature\nسیکولر ادب",
      "Religious Literature\nمذہبی ادب"
    ],
    "correctAnswer": 0,
    "explanation": "ٹیکسلا اور نالندہ میں قدیم یونیورسٹی کمپلیکس کے کھنڈرات آثار قدیمہ کے مقامات ہیں۔ کھدائی شدہ ڈھانچے، نوادرات، مہریں، اور کتبے ماضی کی طبعی باقیات ہیں، جو انہیں تاریخ کے بنیادی آثار قدیمہ کے ذرائع بناتے ہیں۔"
  },
  {
    "id": 411,
    "question": "This method develops the habit of self-study among students (TSTET 28 June 2025)\nیہ طریقہ طلباء میں خود مطالعہ کی عادت پیدا کرتا ہے",
    "options": [
      "Lecture method\nلیکچر کا طریقہ",
      "Project method\nپروجیکٹ کا طریقہ",
      "Observation method\nمشاہدے کا طریقہ",
      "Story telling method\nکہانی سنانے کا طریقہ"
    ],
    "correctAnswer": 1,
    "explanation": "پروجیکٹ کا طریقہ ایک طالب علم پر مبنی تدریس ہے جہاں سیکھنے والے کسی موضوع یا مسئلے کو گہرائی سے تلاش کرتے ہیں۔ اس عمل میں طلباء کو پہل کرنے، تحقیق کرنے، اور اپنے کام کا انتظام کرنے کی ضرورت ہوتی ہے، اس طرح خود انحصاری اور خود مطالعہ کی عادت کو فروغ ملتا ہے۔"
  },
  {
    "id": 412,
    "question": "An important step in Project Method is (TSTET 28 June 2025)\nپروجیکٹ میتھڈ میں ایک اہم قدم ہے",
    "options": [
      "Choosing a Project\nپروجیکٹ کا انتخاب کرنا",
      "Implementing a project\nپروجیکٹ کو نافذ کرنا",
      "Writing a report of a project\nپروجیکٹ کی رپورٹ لکھنا",
      "Planning a project\nپروجیکٹ کی منصوبہ بندی کرنا"
    ],
    "correctAnswer": 0,
    "explanation": "ڈبلیو ایچ کلپیٹرک کے بیان کے مطابق، پروجیکٹ کے طریقہ کار میں پہلا قدم 'صورتحال فراہم کرنا' ہے جہاں استاد ایک ایسا ماحول پیدا کرتا ہے جو طلباء کو 'پروجیکٹ کا انتخاب' کرنے کی ترغیب دیتا ہے۔ یہ ابتدائی قدم بہت اہم ہے کیونکہ یہ بعد کے تمام مراحل کے لیے مقصد اور ترغیب فراہم کرتا ہے۔"
  },
  {
    "id": 413,
    "question": "Among the following, the example of a 'three dimensional aid' is (TSTET 28 June 2025)\nدرج ذیل میں سے، 'سہ جہتی امداد' کی مثال ہے",
    "options": [
      "Chart\nچارٹ",
      "Model\nماڈل",
      "Map\nنقشہ",
      "Picture\nتصویر"
    ],
    "correctAnswer": 1,
    "explanation": "سہ جہتی (3D) امداد میں لمبائی، چوڑائی اور اونچائی ہوتی ہے۔ ایک ماڈل، جیسے گلوب یا کسی عمارت کی نقل، ایک 3D نمائندگی ہے۔ چارٹ، نقشے، اور تصاویر دو جہتی (2D) ہیں کیونکہ وہ ہموار ہوتی ہیں۔"
  },
  {
    "id": 414,
    "question": "Among the following, the visual aid is (TSTET 28 June 2025)\nدرج ذیل میں سے، بصری امداد ہے",
    "options": [
      "Tape recorder\nٹیپ ریکارڈر",
      "Radio\nریڈیو",
      "Television\nٹیلی ویژن",
      "Linguaphone\nلنگوا فون"
    ],
    "correctAnswer": 2,
    "explanation": "بصری امداد بصارت کے ذریعے معلومات پہنچاتی ہیں۔ ٹیپ ریکارڈر، ریڈیو، اور لنگوا فون سمعی امداد ہیں۔ ٹیلی ویژن تکنیکی طور پر ایک سمعی و بصری امداد ہے، لیکن انتخاب میں، یہ واحد ہے جس میں بصری جزو شامل ہے۔"
  },
  {
    "id": 415,
    "question": "A lesson plan is a (TSTET 28 June 2025)\nسبق کا منصوبہ ہے",
    "options": [
      "Teacher's mental and emotional visualisation of the classroom experience\nکلاس روم کے تجربے کا استاد کا ذہنی اور جذباتی تصور",
      "A statement of achievements to be realized\nحاصل کی جانے والی کامیابیوں کا ایک بیان",
      "A record that is to be submitted to the head master\nایک ریکارڈ جو ہیڈ ماسٹر کو جمع کرایا جانا ہے",
      "A document to be submitted to the government for salary\nتنخواہ کے لیے حکومت کو جمع کرایا جانے والا ایک دستاویز"
    ],
    "correctAnswer": 0,
    "explanation": "سبق کا منصوبہ تدریس کے لیے استاد کی تفصیلی رہنمائی ہے۔ یہ ایک سادہ دستاویز سے بڑھ کر ہے؛ یہ استاد کی سوچ سمجھ کر کی گئی منصوبہ بندی اور اس تصور کی عکاسی کرتا ہے کہ سیکھنے کا تجربہ کلاس روم میں کیسے سامنے آئے گا، جس میں مقاصد، سرگرمیاں، اور جائزے شامل ہیں۔"
  },
  {
    "id": 416,
    "question": "The father of the 'Micro Teaching Method' is (TSTET 28 June 2025)\n'مائیکرو ٹیچنگ میتھڈ' کا بانی کون ہے",
    "options": [
      "B.S. Bloom\nبی ایس بلوم",
      "Dwight W. Allen\nڈوائٹ ڈبلیو ایلن",
      "Skinner\nاسکنر",
      "Pavlov\nپاولوف"
    ],
    "correctAnswer": 1,
    "explanation": "مائیکرو ٹیچنگ کو اساتذہ کی تربیت کی تکنیک کے طور پر 1960 کی دہائی کے اوائل میں اسٹینفورڈ یونیورسٹی میں شروع کیا گیا تھا۔ ڈاکٹر ڈوائٹ ڈبلیو ایلن کو اس کا مرکزی بانی مانا جاتا ہے۔"
  },
  {
    "id": 417,
    "question": "This is not a part of Herbartian steps of lesson planning (TSTET 28 June 2025)\nیہ سبق کی منصوبہ بندی کے ہربرٹین اقدامات کا حصہ نہیں ہے",
    "options": [
      "Preparation\nتیاری",
      "Home work\nہوم ورک",
      "Presentation\nپیشکش",
      "Comparison\nموازنہ"
    ],
    "correctAnswer": 1,
    "explanation": "رسمی ہربرٹین پانچ قدمی نظام میں تیاری، پیشکش، وابستگی (موازنہ)، عمومیت، اور اطلاق شامل ہیں۔ 'ہوم ورک' ایک سرگرمی ہے جو طلباء کو کلاس سے باہر مکمل کرنے کے لیے دی جاتی ہے اور اسے سبق کے بنیادی تدریسی مراحل میں سے ایک نہیں سمجھا جاتا۔"
  },
  {
    "id": 418,
    "question": "Which one of the following is not considered as a tool for formative assessment? (TSTET 28 June 2025)\nدرج ذیل میں سے کون سا تشکیلی تشخیص کا آلہ نہیں سمجھا جاتا؟",
    "options": [
      "Multiple choice questions\nکثیر انتخابی سوالات",
      "Projects\nپروجیکٹس",
      "Oral questions\nزبانی سوالات",
      "Group work\nگروپ ورک"
    ],
    "correctAnswer": 0,
    "explanation": "تشکیلی تشخیص 'سیکھنے کے لیے تشخیص' ہے جو پیشرفت کی نگرانی اور رائے فراہم کرنے کے لیے استعمال ہوتی ہے۔ اگرچہ MCQs کو تشکیلی طور پر استعمال کیا جا سکتا ہے، لیکن پروجیکٹس، زبانی سوالات، اور گروپ ورک جیسے ٹولز اس مقصد کے لیے زیادہ موزوں ہیں کیونکہ وہ طلباء کے سوچنے کے عمل کو ظاہر کرتے ہیں۔ MCQs عام طور پر مجموعی تشخیص (سیکھنے کی تشخیص) کے لیے استعمال ہوتے ہیں۔"
  },
  {
    "id": 419,
    "question": "Which is the first step in problem solving method? (TSTET 28 June 2025)\nمسئلہ حل کرنے کے طریقہ کار میں پہلا قدم کون سا ہے؟",
    "options": [
      "Formulation of hypothesis\nمفروضے کی تشکیل",
      "Collection of data\nڈیٹا کا جمع کرنا",
      "Creating the problem situation\nمسئلے کی صورتحال پیدا کرنا",
      "Analysis of data\nڈیٹا کا تجزیہ"
    ],
    "correctAnswer": 2,
    "explanation": "مسئلہ حل کرنے کا طریقہ کار استاد کے ایک مسئلہ متعارف کرانے یا ایسی صورتحال پیدا کرنے سے شروع ہوتا ہے جو طلباء کے لیے ایک چیلنج پیش کرے۔ یہ پہلا قدم، 'مسئلے کی صورتحال پیدا کرنا' یا 'مسئلے سے آگاہی'، کام کی وضاحت کرنے اور سیکھنے والوں کو ترغیب دینے کے لیے ضروری ہے۔"
  },
  {
    "id": 420,
    "question": "CCE means (TSTET 28 June 2025)\nسی سی ای کا مطلب ہے",
    "options": [
      "Continuous and Comprehensive Examination\nمسلسل اور جامع امتحان",
      "Continuous and Comprehensive Evaluation\nمسلسل اور جامع تشخیص",
      "Central and Comprehensive Examination\nمرکزی اور جامع امتحان",
      "Continuous and Central Evaluation\nمسلسل اور مرکزی تشخیص"
    ],
    "correctAnswer": 1,
    "explanation": "سی سی ای کا مطلب مسلسل اور جامع تشخیص ہے۔ یہ اسکول پر مبنی تشخیص کا ایک نظام ہے جو طالب علم کی نشوونما کے تمام پہلوؤں کا احاطہ کرتا ہے۔ 'مسلسل' سے مراد سال بھر باقاعدہ جائزے ہیں، اور 'جامع' کا مطلب ہے کہ یہ اسکولی (تعلیمی) اور ہم نصابی (مهارتیں، رویے، اقدار) دونوں شعبوں کا احاطہ کرتا ہے۔"
  },
  {
    "id": 421,
    "question": "Identify the INCORRECT statement regarding the Indian Islands from among the following (TSTET 29 June 2025)\nدرج ذیل میں سے ہندوستانی جزائر کے بارے میں غلط بیان کی نشاندہی کریں",
    "options": [
      "Narkondam and Barren Islands are of Volcanic Origin\nنارکونڈم اور بیرن جزائر آتش فشانی اصل کے ہیں",
      "The total Geographical area of Lakshadweep Islands is 32 Sq. Kms\nلکشدیپ جزائر کا کل جغرافیائی رقبہ 32 مربع کلومیٹر ہے",
      "The Lakshadweep islands are famous for a great variety of flora and fauna\nلکشدیپ جزائر نباتات اور حیوانات کی ایک بڑی قسم کے لیے مشہور ہیں",
      "The southernmost tip of India is found in Lakshadweep Island\nہندوستان کا سب سے جنوبی سرا لکشدیپ جزیرے میں پایا جاتا ہے"
    ],
    "correctAnswer": 3,
    "explanation": "ہندوستان کا سب سے جنوبی سرا اندرا پوائنٹ ہے، جو عظیم نیکوبار جزیرے میں واقع ہے، جو انڈمان اور نیکوبار جزائر کا حصہ ہے۔ دیگر بیانات درست ہیں: بیرن جزیرہ ایک فعال آتش فشاں ہے، لکشدیپ کا رقبہ 32 مربع کلومیٹر ہے، اور یہ اپنی بھرپور حیاتیاتی تنوع کے لیے جانا جاتا ہے۔"
  },
  {
    "id": 422,
    "question": "At this place, the river Ganga which emerges from the mountains reaches on to the Plains (TSTET 29 June 2025)\nاس مقام پر، دریائے گنگا جو پہاڑوں سے نکلتا ہے، میدانوں میں پہنچتا ہے",
    "options": [
      "Alakananda\nالکنندا",
      "Devaprayaga\nدیوپریاگ",
      "Allahabad\nالہ آباد",
      "Haridwar\nہریدوار"
    ],
    "correctAnswer": 3,
    "explanation": "دریائے گنگا ہمالیہ سے بہتا ہے اور اتراکھنڈ کے مقدس شہر ہریدوار میں پہلی بار ہند-گنگا کے میدانوں میں داخل ہوتا ہے۔"
  },
  {
    "id": 423,
    "question": "Towards the end of the summer season, these help in the early ripening of mangoes and other plantation crops in Peninsular India (TSTET 29 June 2025)\nموسم گرما کے اختتام کی طرف، یہ جزیرہ نما ہندوستان میں آموں اور دیگر شجرکاری فصلوں کے جلد پکنے میں مدد کرتے ہیں",
    "options": [
      "Trade Winds\nتجارتی ہوائیں",
      "pre-monsoon showers\nپری مون سون بارشیں",
      "North-East Monsoon Winds\nشمال مشرقی مون سون ہوائیں",
      "Western Disturbances\nمغربی ہوائیں"
    ],
    "correctAnswer": 1,
    "explanation": "پری مون سون بارشیں، جو جنوب مغربی مون سون سے پہلے ہوتی ہیں، کیرالہ اور کرناٹک جیسی ریاستوں میں مقامی طور پر 'آم کی بارش' کے نام سے جانی جاتی ہیں کیونکہ یہ آموں کے پکنے کے لیے بہت اہم ہیں۔"
  },
  {
    "id": 424,
    "question": "Infant mortality rate (IMR) refers to (TSTET 29 June 2025)\nبچوں کی شرح اموات (IMR) سے مراد ہے",
    "options": [
      "the number of infant deaths, below the age of one year per 1,000 live births in a specific population and time period\nایک مخصوص آبادی اور وقت کی مدت میں فی 1,000 زندہ پیدائشوں پر ایک سال سے کم عمر کے بچوں کی اموات کی تعداد",
      "the number of infant deaths, below the age of one year per 100 live births in a specific population and time period\nایک مخصوص آبادی اور وقت کی مدت میں فی 100 زندہ پیدائشوں پر ایک سال سے کم عمر کے بچوں کی اموات کی تعداد",
      "the number of deaths, below the age of five years per 100 live births in a specific population and time period\nایک مخصوص آبادی اور وقت کی مدت میں فی 100 زندہ پیدائشوں پر پانچ سال سے کم عمر کے بچوں کی اموات کی تعداد",
      "The number of deaths, below the age of two years per 1000 live births in a specific population and time period\nایک مخصوص آبادی اور وقت کی مدت میں فی 1000 زندہ پیدائشوں پر دو سال سے کم عمر کے بچوں کی اموات کی تعداد"
    ],
    "correctAnswer": 0,
    "explanation": "بچوں کی شرح اموات (IMR) ایک معیاری صحت کا اشارہ ہے جس کی تعریف ایک مخصوص مدت کے دوران ہر 1,000 زندہ پیدائشوں پر ایک سال سے کم عمر کے بچوں کی اموات کی تعداد کے طور پر کی جاتی ہے۔"
  },
  {
    "id": 425,
    "question": "This country in Africa is often referred to as the \"Land of Copper\" (TSTET 29 June 2025)\nافریقہ کے اس ملک کو اکثر \"تانبے کی سرزمین\" کہا جاتا ہے",
    "options": [
      "Ghana\nگھانا",
      "Sudan\nسوڈان",
      "Zambia\nزیمبیا",
      "Libya\nلیبیا"
    ],
    "correctAnswer": 2,
    "explanation": "زیمبیا اپنے وسیع تانبے کے ذخائر کے لیے مشہور ہے اور اس دھات کا ایک بڑا عالمی پروڈیوسر ہے۔ اس کی معیشت کا زیادہ تر انحصار تانبے کی کان کنی پر ہے، خاص طور پر کاپربیلٹ صوبے میں، جس کی وجہ سے اسے 'تانبے کی سرزمین' کا لقب ملا ہے۔"
  },
  {
    "id": 426,
    "question": "Among the following, the layer that forms nearly 83% of the volume of the earth is (TSTET 29 June 2025)\nدرج ذیل میں سے، وہ تہہ جو زمین کے حجم کا تقریباً 83% بناتی ہے",
    "options": [
      "Continental Crust\nبراعظمی پرت",
      "Oceanic Crust\nسمندری پرت",
      "Mantle\nمینٹل",
      "Core\nکور"
    ],
    "correctAnswer": 2,
    "explanation": "زمین کا مینٹل وہ تہہ ہے جو کرسٹ اور بیرونی کور کے درمیان واقع ہے۔ یہ سب سے موٹی تہہ ہے اور زمین کے کل حجم کا تقریباً 83% بناتی ہے۔"
  },
  {
    "id": 427,
    "question": "The Sarees made at this place are of unique design and colour which is quite distinct from other silk sarees. So, it is the first handloom cloth patented in India (TSTET 29 June 2025)\nاس جگہ پر بنی ساڑیاں منفرد ڈیزائن اور رنگ کی ہوتی ہیں جو دیگر ریشمی ساڑھیوں سے بالکل مختلف ہوتی ہیں۔ اس لیے، یہ ہندوستان میں پیٹنٹ ہونے والا پہلا ہینڈلوم کپڑا ہے",
    "options": [
      "Banaras Sarees\nبنارسی ساڑیاں",
      "Pochampally Sarees\nپوچمپلی ساڑیاں",
      "Gadwal Sarees\nگدوال ساڑیاں",
      "Kothakota Sarees\nکوٹھاکوٹا ساڑیاں"
    ],
    "correctAnswer": 1,
    "explanation": "تلنگانہ سے پوچمپلی اِکت پہلا روایتی ہندوستانی دستکاری تھا جسے 2005 میں جغرافیائی اشارے (GI) کا درجہ دیا گیا۔ یہ تحفظ کسی جغرافیائی مقام سے مخصوص مصنوعات کے لیے پیٹنٹ کی طرح ہے۔"
  },
  {
    "id": 428,
    "question": "Among the following Asian countries, the country which is ahead in every aspect such as per capita income, Life Expectancy at Birth, Mean Years of Schooling etc as per HDI report 2018 (TSTET 29 June 2025)\nایچ ڈی آئی رپورٹ 2018 کے مطابق درج ذیل ایشیائی ممالک میں سے وہ ملک جو فی کس آمدنی، پیدائش کے وقت زندگی کی توقع، اسکولنگ کے اوسط سال وغیرہ جیسے ہر پہلو میں آگے ہے",
    "options": [
      "India\nبھارت",
      "Sri Lanka\nسری لنکا",
      "Pakistan\nپاکستان",
      "Bangladesh\nبنگلہ دیش"
    ],
    "correctAnswer": 1,
    "explanation": "یو این ڈی پی کی طرف سے شائع کردہ 2018 کی انسانی ترقی کے اشاریہ (HDI) کی رپورٹ کے مطابق، سری لنکا کو بھارت، پاکستان، اور بنگلہ دیش (سب 'درمیانی' انسانی ترقی کے زمرے میں) سے نمایاں طور پر بلند درجہ دیا گیا تھا ('اعلیٰ' انسانی ترقی کے زمرے میں)۔"
  },
  {
    "id": 429,
    "question": "Renewable Resource means (TSTET 29 June 2025)\nقابل تجدید وسائل کا مطلب ہے",
    "options": [
      "the resources that continue to exist despite being consumed\nوہ وسائل جو استعمال ہونے کے باوجود موجود رہتے ہیں",
      "The resource that cannot be readily replaced by natural means\nوہ وسیلہ جسے قدرتی طریقوں سے آسانی سے تبدیل نہیں کیا جا سکتا",
      "The resource that can be used in multiple ways\nوہ وسیلہ جسے کئی طریقوں سے استعمال کیا جا سکتا ہے",
      "The resource that cannot be used in any way for production\nوہ وسیلہ جسے پیداوار کے لیے کسی بھی طرح استعمال نہیں کیا جا سکتا"
    ],
    "correctAnswer": 0,
    "explanation": "قابل تجدید وسیلہ ایک قدرتی وسیلہ ہے جو استعمال اور کھپت سے ختم ہونے والے حصے کو بھرنے کے لیے دوبارہ پیدا ہوتا ہے، یا تو قدرتی تولید کے ذریعے یا دیگر بار بار ہونے والے عمل کے ذریعے۔ مثالوں میں شمسی توانائی، ہوا، اور پانی شامل ہیں۔"
  },
  {
    "id": 430,
    "question": "Identify the INCORRECT statement regarding 'Latitudes' (TSTET 29 June 2025)\n'عرض البلد' کے بارے میں غلط بیان کی نشاندہی کریں",
    "options": [
      "The word latitude is derived from the Latin word 'Latitudo' which means length\nلفظ 'latitude' لاطینی لفظ 'Latitudo' سے ماخوذ ہے جس کا مطلب لمبائی ہے",
      "Latitude values range from 0° to 90° North and 90° South\nعرض البلد کی قدریں 0° سے 90° شمال اور 90° جنوب تک ہوتی ہیں",
      "Every latitude must be designated with direction 'N' for North and 'S' for South\nہر عرض البلد کو شمال کے لیے 'N' اور جنوب کے لیے 'S' سمت کے ساتھ نامزد کیا جانا چاہیے",
      "Equator is the largest among all the latitudes\nخط استوا تمام عرض البلدوں میں سب سے بڑا ہے"
    ],
    "correctAnswer": 0,
    "explanation": "لاطینی لفظ 'Latitudo' کا مطلب 'چوڑائی' ہے، جو عرض البلد کی افقی لکیروں کو درست طور پر بیان کرتا ہے۔ 'لمبائی' طول البلد سے مطابقت رکھتی ہے۔ دیگر تمام بیانات عرض البلد کے بارے میں درست حقائق ہیں۔"
  },
  {
    "id": 431,
    "question": "Submarine Canyons which were found in Continental slope were formed by the process of (TSTET 29 June 2025)\nآبدوز وادیاں جو براعظمی ڈھلوان میں پائی گئیں، کس عمل سے بنیں",
    "options": [
      "Erosion of wind\nہوا کا کٹاؤ",
      "Waves\nلہریں",
      "Erosion of Glaciers and rivers\nگلیشیئرز اور دریاؤں کا کٹاؤ",
      "Erosion of Wind and waves\nہوا اور لہروں کا کٹاؤ"
    ],
    "correctAnswer": 2,
    "explanation": "آبدوز وادیاں بنیادی طور پر ٹربیڈیٹی کرنٹ (پانی کے اندر تلچھٹ کے تودے گرنے) سے بنتی ہیں۔ تاہم، بہت سی دریاؤں کے نظام کی توسیع بھی ہیں جنہوں نے برفانی دور کے دوران جب سمندر کی سطح بہت کم تھی، براعظمی شیلف پر چینل بنائے تھے۔"
  },
  {
    "id": 432,
    "question": "These forests grow in dry areas with little rainfall and high temperatures (TSTET 29 June 2025)\nیہ جنگلات کم بارش اور زیادہ درجہ حرارت والے خشک علاقوں میں اگتے ہیں",
    "options": [
      "Evergreen Forests\nسدا بہار جنگلات",
      "Coniferous forests\nصنوبری جنگلات",
      "Thorny Forests\nکانٹے دار جنگلات",
      "Deciduous forests\nپت جھڑی جنگلات"
    ],
    "correctAnswer": 2,
    "explanation": "کانٹے دار جنگلات، یا کانٹے دار جھاڑیاں، خشک اور نیم خشک علاقوں کی خصوصیت ہیں۔ ان جنگلات کے پودوں میں کم بارش اور زیادہ درجہ حرارت کے حالات میں پانی کو بچانے کے لیے لمبی جڑیں، کانٹے، اور چھوٹے پتے جیسی موافقتیں ہوتی ہیں۔"
  },
  {
    "id": 433,
    "question": "The possibility of percolation of water into the soil is greater when (TSTET 29 June 2025)\nمٹی میں پانی کے سرایت کرنے کا امکان زیادہ ہوتا ہے جب",
    "options": [
      "the flow of the rain water is checked by vegetation or bunds\nبارش کے پانی کے بہاؤ کو نباتات یا بندوں سے روکا جاتا ہے",
      "the river water is allowed to flow freely without any obstruction\nدریا کے پانی کو بغیر کسی رکاوٹ کے آزادانہ بہنے دیا جاتا ہے",
      "the surface rock is very hard\nسطح کی چٹان بہت سخت ہوتی ہے",
      "the trees in the forests are cut down and allow the water to flow freely\nجنگلات میں درخت کاٹ دیے جاتے ہیں اور پانی کو آزادانہ بہنے دیا جاتا ہے"
    ],
    "correctAnswer": 0,
    "explanation": "پرکولیشن مٹی کے ذریعے پانی کی حرکت ہے۔ جب سطحی بہاؤ کو نباتات یا بندوں سے سست کیا جاتا ہے، تو پانی کو زمین میں رسنے کے لیے زیادہ وقت ملتا ہے، اس طرح پرکولیشن میں اضافہ ہوتا ہے اور زیر زمین پانی ری چارج ہوتا ہے۔"
  },
  {
    "id": 434,
    "question": "As per the regulations of the Indus Water Treaty-1960, India can use only 20% of the total water carried by the Indus River System and this water can be used for irrigation in these states of India (TSTET 29 June 2025)\nسندھ طاس معاہدہ-1960 کے ضوابط کے مطابق، بھارت دریائے سندھ کے نظام سے لائے گئے کل پانی کا صرف 20% استعمال کر سکتا ہے اور یہ پانی بھارت کی ان ریاستوں میں آبپاشی کے لیے استعمال کیا جا سکتا ہے",
    "options": [
      "Punjab, Haryana and Rajasthan\nپنجاب، ہریانہ اور راجستھان",
      "Punjab, Himachal Pradesh and Jammu and Kashmir\nپنجاب، ہماچل پردیش اور جموں و کشمیر",
      "Punjab. Haryana and Jammu and Kashmir\nپنجاب، ہریانہ اور جموں و کشمیر",
      "Punjab, Haryana and Himachal Pradesh\nپنجاب، ہریانہ اور ہماچل پردیش"
    ],
    "correctAnswer": 0,
    "explanation": "سندھ طاس معاہدے کے تحت، بھارت کو تین مشرقی دریاؤں: راوی، بیاس، اور ستلج کے پانی پر مکمل حقوق حاصل ہیں۔ ان دریاؤں سے چلنے والے آبپاشی کے نظام بنیادی طور پر پنجاب، ہریانہ، اور راجستھان کی خدمت کرتے ہیں۔"
  },
  {
    "id": 435,
    "question": "This formed the foundation for India's Democracy (TSTET 29 June 2025)\nاس نے ہندوستان کی جمہوریت کی بنیاد رکھی",
    "options": [
      "The values set forth by the American Constitution\nامریکی آئین کی طرف سے مقرر کردہ اقدار",
      "The ideals like liberalism and authoritarianism\nلبرل ازم اور آمریت جیسے نظریات",
      "The directive principles of State Policy adopted from Irish Constitution\nآئرش آئین سے اپنائے گئے ریاستی پالیسی کے رہنما اصول",
      "The Values that inspired and guided the Indian freedom struggle\nوہ اقدار جنہوں نے ہندوستان کی جدوجہد آزادی کو متاثر کیا اور رہنمائی کی"
    ],
    "correctAnswer": 3,
    "explanation": "ہندوستانی جمہوریت کے بنیادی اصول، جیسے آزادی، مساوات، بھائی چارہ، اور انصاف، ان اقدار سے ماخوذ ہیں جنہوں نے آزادی کی قومی تحریک کو توانائی بخشی۔ یہ اقدار آئین کی تمہید میں واضح طور پر بیان کی گئی ہیں۔"
  },
  {
    "id": 436,
    "question": "In the Indian Constitution, these lay down some specific tasks before the Government of India such as Universalizing Literacy, protection of Environment etc. (TSTET 29 June 2025)\nہندوستانی آئین میں، یہ حکومت ہند کے سامنے کچھ مخصوص کام انجام دیتے ہیں جیسے خواندگی کو عام کرنا، ماحولیات کا تحفظ وغیرہ۔",
    "options": [
      "Fundamental Rights of the Indian Constitution\nہندوستانی آئین کے بنیادی حقوق",
      "Fundamental Duties of a Citizen\nشہری کے بنیادی فرائض",
      "Directive Principles of a State Policy\nریاستی پالیسی کے رہنما اصول",
      "Human Rights\nانسانی حقوق"
    ],
    "correctAnswer": 2,
    "explanation": "ریاستی پالیسی کے رہنما اصول (DPSP) ریاست کے لیے حکمرانی میں عمل کرنے کے لیے رہنما خطوط ہیں۔ ان میں تعلیم کو فروغ دینا (آرٹیکل 45)، ماحولیات کا تحفظ (آرٹیکل 48A)، اور دیگر سماجی و اقتصادی اہداف شامل ہیں۔"
  },
  {
    "id": 437,
    "question": "This independent institution supervises the expenditure of the Government in India (TSTET 29 June 2025)\nیہ آزاد ادارہ ہندوستان میں حکومت کے اخراجات کی نگرانی کرتا ہے۔",
    "options": [
      "NITI Aayog\nنیتی آیوگ",
      "Comptroller and Auditor General\nکمپٹرولر اینڈ آڈیٹر جنرل",
      "Finance Commission\nفنانس کمیشن",
      "Attorney General\nاٹارنی جنرل"
    ],
    "correctAnswer": 1,
    "explanation": "کمپٹرولر اینڈ آڈیٹر جنرل (CAG) آف انڈیا سپریم آڈٹ ادارہ ہے۔ یہ ایک آئینی ادارہ ہے جو مرکزی اور ریاستی حکومتوں کی تمام وصولیوں اور اخراجات کا آڈٹ کرتا ہے تاکہ مالی احتساب کو یقینی بنایا جا سکے۔"
  },
  {
    "id": 438,
    "question": "In 2009, the Indian Parliament passed the \"Right of Children to free and compulsory Education Act\" in order to (TSTET 29 June 2025)\n2009 میں، ہندوستانی پارلیمنٹ نے اس مقصد کے لیے \"بچوں کے مفت اور لازمی تعلیم کا حق ایکٹ\" منظور کیا۔",
    "options": [
      "Ensure that all children below the age of 14 years get quality education\nاس بات کو یقینی بنانا کہ 14 سال سے کم عمر کے تمام بچوں کو معیاری تعلیم ملے۔",
      "Ensure that all children living in the rural areas only get quality education only\nاس بات کو یقینی بنانا کہ صرف دیہی علاقوں میں رہنے والے تمام بچوں کو معیاری تعلیم ملے۔",
      "Ensure that all children below the age of 16 years get quality education\nاس بات کو یقینی بنانا کہ 16 سال سے کم عمر کے تمام بچوں کو معیاری تعلیم ملے۔",
      "Ensure that all Physically Handicapped Children only get quality education\nاس بات کو یقینی بنانا کہ صرف جسمانی طور پر معذور بچوں کو معیاری تعلیم ملے۔"
    ],
    "correctAnswer": 0,
    "explanation": "تعلیم کا حق (آر ٹی ای) ایکٹ، 2009 نے 6 سے 14 سال کی عمر کے تمام بچوں کے لیے تعلیم کے بنیادی حق کو عملی جامہ پہنایا، جس سے ابتدائی تعلیم مفت اور لازمی ہو گئی۔"
  },
  {
    "id": 439,
    "question": "If there are any differences between the two houses of the Parliament in passing an ordinary law, the final decision shall be taken in (TSTET 29 June 2025)\nاگر ایک عام قانون کو منظور کرنے میں پارلیمنٹ کے دونوں ایوانوں کے درمیان کوئی اختلاف ہو تو حتمی فیصلہ کہاں لیا جائے گا؟",
    "options": [
      "The Lok Sabha only\nصرف لوک سبھا میں",
      "The Rajya Sabha only\nصرف راجیہ سبھا میں",
      "The state Legislative Assemblies\nریاستی قانون ساز اسمبلیوں میں",
      "The joint session of the Parliament\nپارلیمنٹ کے مشترکہ اجلاس میں"
    ],
    "correctAnswer": 3,
    "explanation": "ایک عام بل پر لوک سبھا اور راجیہ سبھا کے درمیان تعطل کو حل کرنے کے لیے، آئین کا آرٹیکل 108 دونوں ایوانوں کے مشترکہ اجلاس کا انتظام کرتا ہے، جسے صدر طلب کرتا ہے۔ پھر فیصلہ اکثریتی ووٹ سے کیا جاتا ہے۔"
  },
  {
    "id": 440,
    "question": "One of the following is NOT the aim of the 42nd Amendment of the Indian Constitution (TSTET 29 June 2025)\nمندرجہ ذیل میں سے ایک ہندوستانی آئین کی 42ویں ترمیم کا مقصد نہیں ہے۔",
    "options": [
      "Excluding the courts from election disputes\nانتخابی تنازعات سے عدالتوں کو خارج کرنا",
      "Making education as a fundamental Right\nتعلیم کو بنیادی حق بنانا",
      "Making the judiciary subservient to Parliament\nعدلیہ کو پارلیمنٹ کے ماتحت بنانا",
      "Strengthening of Central Government when compared to the state Governments\nریاستی حکومتوں کے مقابلے میں مرکزی حکومت کو مضبوط کرنا"
    ],
    "correctAnswer": 1,
    "explanation": "تعلیم کو بنیادی حق 2002 کے 86 ویں ترمیمی ایکٹ کے ذریعے بنایا گیا تھا، جس نے آرٹیکل 21A داخل کیا۔ 42 ویں ترمیم (1976) مرکزی حکومت کو مضبوط کرنے اور عدلیہ پر پارلیمانی بالادستی قائم کرنے کی کوشش کے لیے جانی جاتی تھی۔"
  },
  {
    "id": 441,
    "question": "The central Government has passed the Criminal Legal Amendment Act in 2013. This was also known as (TSTET 29 June 2025)\nمرکزی حکومت نے 2013 میں فوجداری قانونی ترمیمی ایکٹ منظور کیا۔ اسے اس نام سے بھی جانا جاتا تھا۔",
    "options": [
      "Sharada Act\nشاردہ ایکٹ",
      "Nirbhaya Act\nنربھیا ایکٹ",
      "Disha Bill\nدشا بل",
      "POCSO Act\nپوکسو ایکٹ"
    ],
    "correctAnswer": 1,
    "explanation": "فوجداری قانون (ترمیمی) ایکٹ، 2013 کو عام طور پر نربھیا ایکٹ کے نام سے جانا جاتا ہے۔ اسے 2012 کے دہلی گینگ ریپ کیس کے جواب میں نافذ کیا گیا تھا تاکہ خواتین کے خلاف جرائم کے لیے سخت قوانین اور سزائیں متعارف کرائی جا سکیں۔"
  },
  {
    "id": 442,
    "question": "The dance that was performed to worship lord Shiva aggressively in front of Nataraja idol at the Siva Temples to motivate the soldiers before going to wars (TSTET 29 June 2025)\nوہ رقص جو جنگوں پر جانے سے پہلے سپاہیوں کو متحرک کرنے کے لیے شیو مندروں میں نٹاراج کے مجسمے کے سامنے جارحانہ انداز میں بھگوان شیو کی پوجا کے لیے کیا جاتا تھا۔",
    "options": [
      "Dappu Nrityam\nڈپو نرتیم",
      "Gussadi Nrityam\nگوساڈی نرتیم",
      "Perini Nrityam\nپیرینی نرتیم",
      "Bharatanatyam\nبھرتناٹیم"
    ],
    "correctAnswer": 2,
    "explanation": "پیرینی شیوٹانڈوم، جس کا آغاز کاکتیہ خاندان کے دوران تلنگانہ سے ہوا، ایک جاندار، مردانہ رقص کی شکل ہے۔ یہ روایتی طور پر جنگجوؤں کے ذریعہ جنگ میں جانے سے پہلے بھگوان شیو کی روح کو پکارنے کے لیے پیش کیا جاتا تھا۔"
  },
  {
    "id": 443,
    "question": "The Constitutional Advisor of the Drafting Committee of the Indian Constitution who became the first Indian Judge in the International Court of Justice was (TSTET 29 June 2025)\nہندوستانی آئین کی ڈرافٹنگ کمیٹی کے آئینی مشیر جو بین الاقوامی عدالت انصاف میں پہلے ہندوستانی جج بنے، وہ کون تھے؟",
    "options": [
      "Alladi Krishna Swamy Iyer\nالادی کرشنا سوامی ایر",
      "B.L. Mitter\nبی ایل مٹر",
      "K.M. Munshi\nکے ایم منشی",
      "Sir Benegal Narsingh Rao\nسر بینیگل نرسنگ راؤ"
    ],
    "correctAnswer": 3,
    "explanation": "سر بی این راؤ نے ہندوستان کی آئین ساز اسمبلی کے آئینی مشیر کے طور پر خدمات انجام دیں اور آئین کا مسودہ تیار کرنے میں کلیدی کردار ادا کیا۔ وہ بعد میں 1952 سے 1953 تک بین الاقوامی عدالت انصاف (ICJ) میں جج بنے۔"
  },
  {
    "id": 444,
    "question": "Jyotiba Phule founded Satya Shodak Samaj to build a new society based on (TSTET 29 June 2025)\nجیوتی با پھولے نے ستیہ شودھک سماج کی بنیاد کس اصول پر ایک نیا معاشرہ بنانے کے لیے رکھی؟",
    "options": [
      "Caste System\nذات پات کا نظام",
      "Truth and Equality\nسچائی اور مساوات",
      "Equity and Social Justice\nمساوات اور سماجی انصاف",
      "Political Justice and Political Equality\nسیاسی انصاف اور سیاسی مساوات"
    ],
    "correctAnswer": 1,
    "explanation": "جیوتی با پھولے نے 1873 میں ستیہ شودھک سماج (سچائی کے متلاشیوں کی سوسائٹی) کا قیام نچلی ذاتوں کو استحصال اور ظلم سے آزاد کرانے کے مشن کے ساتھ کیا۔ اس کا بنیادی نظریہ سچائی، مساوات اور عقلیت پسندی کے اصولوں پر مبنی تھا۔"
  },
  {
    "id": 445,
    "question": "The Government of India appointed a Supreme Court judge B.P. Jeevan Reddy to look into the possibilities of (TSTET 29 June 2025)\nحکومت ہند نے سپریم کورٹ کے جج بی پی جیون ریڈی کو کن امکانات کا جائزہ لینے کے لیے مقرر کیا؟",
    "options": [
      "convincing the people of Manipur to remain in India\nمنی پور کے لوگوں کو ہندوستان میں رہنے پر راضی کرنا",
      "revoking the AFSPA Act in north-eastern states\nشمال مشرقی ریاستوں میں AFSPA ایکٹ کو منسوخ کرنا",
      "preventing public disorder due to alcohol abuse\nشراب کے استعمال کی وجہ سے عوامی بے امنی کو روکنا",
      "maintaining law and order in the state\nریاست میں امن و امان برقرار رکھنا"
    ],
    "correctAnswer": 1,
    "explanation": "2004 میں، جسٹس بی پی جیون ریڈی کی سربراہی میں ایک کمیٹی کو مسلح افواج (خصوصی اختیارات) ایکٹ، 1958 (AFSPA) کا جائزہ لینے کے لیے مقرر کیا گیا تھا، خاص طور پر شمال مشرقی ریاستوں میں اس کے غلط استعمال کے خلاف بڑے پیمانے پر مظاہروں کے بعد۔"
  },
  {
    "id": 446,
    "question": "As per this article of the Human Rights \"No one shall be subjected to arbitrary arrest, detention or exile\" (TSTET 29 June 2025)\nانسانی حقوق کے اس آرٹیکل کے مطابق \"کسی کو بھی من مانی گرفتاری، حراست یا جلاوطنی کا نشانہ نہیں بنایا جائے گا\"",
    "options": [
      "Article 3\nآرٹیکل 3",
      "Article 5\nآرٹیکل 5",
      "Article 9\nآرٹیکل 9",
      "Article 13\nآرٹیکل 13"
    ],
    "correctAnswer": 2,
    "explanation": "انسانی حقوق کے عالمی اعلامیہ (UDHR) کا آرٹیکل 9 واضح طور پر کہتا ہے، 'کسی کو بھی من مانی گرفتاری، حراست یا جلاوطنی کا نشانہ نہیں بنایا جائے گا۔' یہ فرد کی آزادی اور سلامتی کے حق کا تحفظ کرتا ہے۔"
  },
  {
    "id": 447,
    "question": "The Lion tailed macaque and many other species of insects and birds are unique in this place of India (TSTET 29 June 2025)\nشیر کی دم والا بندر اور کیڑوں اور پرندوں کی بہت سی دوسری اقسام ہندوستان کی اس جگہ پر منفرد ہیں۔",
    "options": [
      "Silent Valley in Western Ghats\nمغربی گھاٹوں میں سائلنٹ ویلی",
      "Damodar Valley\nدامودر وادی",
      "Nallamala Forests of Andhra Pradesh\nآندھرا پردیش کے نلّامالا جنگلات",
      "Pench forests in Madhya Pradesh\nمدھیہ پردیش کے پینچ جنگلات"
    ],
    "correctAnswer": 0,
    "explanation": "سائلنٹ ویلی نیشنل پارک، جو کیرالہ میں مغربی گھاٹوں کی نیلگیری پہاڑیوں میں واقع ہے، ایک منفرد حیاتیاتی تنوع کا مرکز ہے۔ یہ خاص طور پر خطرے سے دوچار شیر کی دم والے بندر کے لیے آخری قابل عمل مسکن ہونے کے لیے جانا جاتا ہے۔"
  },
  {
    "id": 448,
    "question": "In 1969, Monarchy was abolished in Libya and it had declared itself as (TSTET 29 June 2025)\n1969 میں، لیبیا میں بادشاہت کا خاتمہ کر دیا گیا اور اس نے خود کو کیا قرار دیا؟",
    "options": [
      "A Democratic Libyan Arab Republic\nایک جمہوری لیبیائی عرب جمہوریہ",
      "A Communist Libyan Arab Republic\nایک کمیونسٹ لیبیائی عرب جمہوریہ",
      "The Socialist Libyan Arab Republic\nسوشلسٹ لیبیائی عرب جمہوریہ",
      "Libyan Arab Republic\nلیبیائی عرب جمہوریہ"
    ],
    "correctAnswer": 3,
    "explanation": "1 ستمبر 1969 کو معمر قذافی کی قیادت میں فوجی بغاوت کے بعد، جس نے شاہ ادریس کی بادشاہت کا تختہ الٹ دیا، ملک کا سرکاری نام لیبیائی عرب جمہوریہ رکھا گیا۔"
  },
  {
    "id": 449,
    "question": "Norman Ernest Borlaug, the father of Green Revolution belongs to this country (TSTET 29 June 2025)\nنارمن ارنسٹ بورلاگ، سبز انقلاب کے بانی، کا تعلق کس ملک سے ہے؟",
    "options": [
      "United States of America\nریاستہائے متحدہ امریکہ",
      "Sweden\nسویڈن",
      "Norway\nناروے",
      "Germany\nجرمنی"
    ],
    "correctAnswer": 0,
    "explanation": "نارمن بورلاگ ایک امریکی زرعی سائنسدان تھے جنہوں نے دنیا بھر میں ایسے اقدامات کی قیادت کی جنہوں نے زرعی پیداوار میں بڑے پیمانے پر اضافے میں حصہ ڈالا جسے سبز انقلاب کہا جاتا ہے۔ انہیں ان کے کام کے لیے 1970 میں نوبل امن انعام سے نوازا گیا۔"
  },
  {
    "id": 450,
    "question": "This crop is used both as food and fodder (TSTET 29 June 2025)\nیہ فصل خوراک اور چارے دونوں کے طور پر استعمال ہوتی ہے۔",
    "options": [
      "Pulses\nدالیں",
      "Sugarcane\nگنا",
      "Oil Seeds\nتیل کے بیج",
      "Maize\nمکئی"
    ],
    "correctAnswer": 3,
    "explanation": "مکئی (کارن) ایک ورسٹائل فصل ہے۔ اناج انسان کھاتے ہیں اور یہ مویشیوں کی خوراک (چارہ) کا ایک بنیادی جزو بھی ہے۔ پودے کا باقی حصہ، جیسے ڈنٹھل اور پتے، بھی جانوروں کے چارے کے طور پر استعمال ہوتے ہیں۔"
  },
  {
    "id": 451,
    "question": "At this stage of Paper Production, the small wood chips are sent to fibre line section (TSTET 29 June 2025)\nکاغذ کی پیداوار کے اس مرحلے پر، لکڑی کے چھوٹے چپس کو فائبر لائن سیکشن میں بھیجا جاتا ہے۔",
    "options": [
      "Spreading the pulp\nگودا پھیلانا",
      "Chipping\nچپنگ",
      "Making the wood pulp\nلکڑی کا گودا بنانا",
      "Cutting\nکاٹنا"
    ],
    "correctAnswer": 2,
    "explanation": "لکڑی کے چپس کو الگ الگ ریشوں کے ایک بڑے حصے میں تبدیل کرنے کے عمل کو پلپنگ کہا جاتا ہے۔ یہ 'لکڑی کا گودا بنانے' کا مرحلہ ہے۔ چپس کو ایک ڈائجسٹر (فائبر لائن کا حصہ) میں بھیجا جاتا ہے جہاں کیمیکل اور حرارت انہیں گودا میں توڑ دیتے ہیں۔"
  },
  {
    "id": 452,
    "question": "In this sector of the Indian economy, more number of female employees are working (TSTET 29 June 2025)\nہندوستانی معیشت کے اس شعبے میں، خواتین ملازمین کی زیادہ تعداد کام کر رہی ہے۔",
    "options": [
      "Agricultural Sector\nزرعی شعبہ",
      "Industrial Sector\nصنعتی شعبہ",
      "Service Sector\nخدمات کا شعبہ",
      "Quaternary Sector\nچہارم شعبہ"
    ],
    "correctAnswer": 0,
    "explanation": "زرعی شعبہ ہندوستان میں خواتین کا سب سے بڑا آجر ہے۔ ہندوستان کی خواتین افرادی قوت کا ایک بہت بڑا فیصد زراعت میں مصروف ہے، جس میں کاشتکاروں اور مزدوروں کے کردار بھی شامل ہیں۔"
  },
  {
    "id": 453,
    "question": "The overall impact of New Industrial Policy 1991 on the Indian Economy was (TSTET 29 June 2025)\nنئی صنعتی پالیسی 1991 کا ہندوستانی معیشت پر مجموعی اثر کیا تھا؟",
    "options": [
      "It led to rapid economic growth and liberalisation\nاس سے تیز رفتار اقتصادی ترقی اور لبرلائزیشن ہوئی",
      "It had no significant impact\nاس کا کوئی خاص اثر نہیں ہوا",
      "It led to decline in economic growth\nاس سے اقتصادی ترقی میں کمی آئی",
      "It increased the government control over the economy\nاس نے معیشت پر حکومتی کنٹرول میں اضافہ کیا"
    ],
    "correctAnswer": 0,
    "explanation": "1991 کی نئی صنعتی پالیسی ہندوستان کی اقتصادی اصلاحات کا ایک اہم جزو تھی۔ اس نے 'لائسنس راج' کو ختم کیا، نجکاری کو فروغ دیا، اور معیشت کو غیر ملکی سرمایہ کاری کے لیے کھول دیا، جس سے لبرلائزیشن اور اعلیٰ اقتصادی ترقی کے دور کا آغاز ہوا۔"
  },
  {
    "id": 454,
    "question": "From the following options, identify the primary function of money (TSTET 29 June 2025)\nمندرجہ ذیل اختیارات میں سے، پیسے کے بنیادی کام کی نشاندہی کریں۔",
    "options": [
      "Medium of exchange only\nصرف تبادلے کا ذریعہ",
      "Measure of Value only\nصرف قدر کا پیمانہ",
      "Store of Value\nقدر کا ذخیرہ",
      "Medium of exchange and measure of Value\nتبادلے کا ذریعہ اور قدر کا پیمانہ"
    ],
    "correctAnswer": 3,
    "explanation": "ماہرین اقتصادیات پیسے کے دو بنیادی کاموں کی نشاندہی کرتے ہیں: لین دین میں سہولت فراہم کرنے کے لیے 'تبادلے کا ذریعہ' ہونا اور قیمتوں کے تعین کے لیے ایک مشترکہ معیار فراہم کرنے کے لیے 'قدر کا پیمانہ' (یا حساب کی اکائی)۔ دیگر کام جیسے 'قدر کا ذخیرہ' ثانوی سمجھے جاتے ہیں۔"
  },
  {
    "id": 455,
    "question": "Among the following, the amount deposited in this account is more convenient to the business people (TSTET 29 June 2025)\nمندرجہ ذیل میں سے، اس اکاؤنٹ میں جمع کی گئی رقم کاروباری لوگوں کے لیے زیادہ آسان ہے۔",
    "options": [
      "Saving Deposits\nبچت کے ذخائر",
      "Current Deposits\nکرنٹ ڈپازٹس",
      "Term Deposits\nمدتی ذخائر",
      "Recurring Deposits\nریکرنگ ڈپازٹس"
    ],
    "correctAnswer": 1,
    "explanation": "کرنٹ اکاؤنٹس (کرنٹ ڈپازٹس) تاجروں، اور کاروباری افراد کے لیے بنائے گئے ہیں جنہیں بار بار لین دین کرنے کی ضرورت ہوتی ہے۔ ان میں لین دین کی تعداد پر کوئی حد نہیں ہوتی اور اوور ڈرافٹ کی سہولیات پیش کی جاتی ہیں، جو کاروباری کارروائیوں کے لیے ضروری ہیں۔"
  },
  {
    "id": 456,
    "question": "Whenever there is a price rise, the Reserve Bank of India which is an apex body for all the banks in India will A) Reduces the money circulation in the economy B) Asks the banks to lend less or allow depositors to withdraw less C) Controls the interest payments paid to depositors or received from the depositors'. Choose the correct option from the following (TSTET 29 June 2025)\nجب بھی قیمتوں میں اضافہ ہوتا ہے، ریزرو بینک آف انڈیا جو ہندوستان کے تمام بینکوں کے لیے ایک اعلیٰ ادارہ ہے، کرے گا: A) معیشت میں پیسے کی گردش کو کم کرتا ہے B) بینکوں سے کم قرض دینے یا جمع کنندگان کو کم رقم نکالنے کی اجازت دینے کو کہتا ہے C) جمع کنندگان کو ادا کی جانے والی یا جمع کنندگان سے وصول کی جانے والی سود کی ادائیگیوں کو کنٹرول کرتا ہے۔ مندرجہ ذیل میں سے صحیح آپشن کا انتخاب کریں۔",
    "options": [
      "A, B and C are correct\nA، B اور C درست ہیں",
      "Only A and B are correct\nصرف A اور B درست ہیں",
      "A, B and C are incorrect\nA، B اور C غلط ہیں",
      "Only B and C are correct\nصرف B اور C درست ہیں"
    ],
    "correctAnswer": 0,
    "explanation": "افراط زر (قیمتوں میں اضافہ) کا مقابلہ کرنے کے لیے، آر بی آئی سکڑاؤ والی مانیٹری پالیسی کا استعمال کرتا ہے۔ اس میں شامل ہیں: (A) پیسے کی فراہمی کو کم کرنا، (B) بینکوں کے لیے قرض دینا مشکل بنانا (مثلاً، شرحیں بڑھا کر)، اور (C) قرض لینے اور خرچ کرنے کی حوصلہ شکنی کے لیے شرح سود کو کنٹرول کرنا۔ تینوں اقدامات درست اوزار ہیں۔"
  },
  {
    "id": 457,
    "question": "Every year, Human Development Report is published by (TSTET 29 June 2025)\nہر سال، انسانی ترقی کی رپورٹ کون شائع کرتا ہے؟",
    "options": [
      "United Nations Development Programme (UNDP)\nاقوام متحدہ کا ترقیاتی پروگرام (یو این ڈی پی)",
      "World Bank\nعالمی بینک",
      "International Monetary Fund (IMF)\nبین الاقوامی مالیاتی فنڈ (آئی ایم ایف)",
      "World Health Organization (WHO)\nعالمی ادارہ صحت (ڈبلیو ایچ او)"
    ],
    "correctAnswer": 0,
    "explanation": "انسانی ترقی کی رپورٹ، جس میں معروف انسانی ترقی کا اشاریہ (HDI) شامل ہے، اقوام متحدہ کے ترقیاتی پروگرام (UNDP) کی سالانہ اہم اشاعت ہے۔"
  },
  {
    "id": 458,
    "question": "Which of the following is the correct time-lag for the financial year of India? (TSTET 29 June 2025)\nمندرجہ ذیل میں سے کون سا ہندوستان کے مالی سال کے لیے صحیح وقت کا وقفہ ہے؟",
    "options": [
      "15th Mar to 14th March of the following year\n15 مارچ سے اگلے سال 14 مارچ تک",
      "1st April to 1st March of the following year\n1 اپریل سے اگلے سال 1 مارچ تک",
      "1st April to 31st March of the following year\n1 اپریل سے اگلے سال 31 مارچ تک",
      "1st January to 31st December of the following year\n1 جنوری سے अगले سال 31 دسمبر تک"
    ],
    "correctAnswer": 2,
    "explanation": "حکومت ہند کے لیے اور ملک میں اکاؤنٹنگ کے مقاصد کے لیے سرکاری مالی سال، جسے مالی سال بھی کہا جاتا ہے، 1 اپریل سے اگلے کیلنڈر سال کے 31 مارچ تک چلتا ہے۔"
  },
  {
    "id": 459,
    "question": "\"We have emerged from this war, the most powerful nation in the world—the most powerful nation, perhaps, in all history.\" Whose words were these? (TSTET 29 June 2025)\n\"ہم اس جنگ سے ابھرے ہیں، دنیا کی سب سے طاقتور قوم — شاید پوری تاریخ کی سب سے طاقتور قوم۔\" یہ الفاظ کس کے تھے؟",
    "options": [
      "Winston Churchill\nونسٹن چرچل",
      "Harry Truman\nہیری ٹرومین",
      "Woodrow Wilson\nووڈرو ولسن",
      "F.D. Roosevelt\nایف ڈی روزویلٹ"
    ],
    "correctAnswer": 1,
    "explanation": "یہ اقتباس 9 اگست 1945 کو امریکی صدر ہیری ایس ٹرومین کی طرف سے امریکی عوام سے ایک ریڈیو خطاب سے ہے، جو جاپان پر ایٹم بموں کے استعمال کے بعد، دوسری جنگ عظیم کے اختتام پر امریکہ کی غالب عالمی پوزیشن کی عکاسی کرتا ہے۔"
  },
  {
    "id": 460,
    "question": "According to this Act, \"adult male labourers could not be made to work for more than 12 hours per day\" (TSTET 29 June 2025)\nاس ایکٹ کے مطابق، \"بالغ مرد مزدوروں کو روزانہ 12 گھنٹے سے زیادہ کام کرنے پر مجبور نہیں کیا جا سکتا تھا\"",
    "options": [
      "Factory Act 1881\nفیکٹری ایکٹ 1881",
      "Factory Act 1861\nفیکٹری ایکٹ 1861",
      "Factory Act 1871\nفیکٹری ایکٹ 1871",
      "Factory Act 1911\nفیکٹری ایکٹ 1911"
    ],
    "correctAnswer": 3,
    "explanation": "1911 کا انڈین فیکٹری ایکٹ لیبر قانون سازی کا ایک اہم حصہ تھا جس نے ٹیکسٹائل فیکٹریوں میں بالغ مرد کارکنوں کے کام کے اوقات کو روزانہ زیادہ سے زیادہ 12 گھنٹے تک محدود کرکے ایک اہم اصلاح متعارف کرائی۔"
  },
  {
    "id": 461,
    "question": "In 1867, Prarthana Samaj in Bombay was started by (TSTET 29 June 2025)\n1867 میں، بمبئی میں پرارتھنا سماج کا آغاز کس نے کیا؟",
    "options": [
      "Swamy Dayanand Saraswathi\nسوامی دیانند سرسوتی",
      "Ram Rammohan Roy\nراجہ رام موہن رائے",
      "R.G. Bhandarkar\nآر جی بھنڈارکر",
      "Swamy Vivekananda\nسوامی وویکانند"
    ],
    "correctAnswer": 2,
    "explanation": "پرارتھنا سماج کی بنیاد 1867 میں آتمارام پانڈورنگ نے رکھی تھی۔ تاہم، اس نے مہادیو گووند راناڈے جیسے ممتاز سماجی مصلحین اور مشہور اسکالر آر جی بھنڈارکر، جو سماج سے وابستہ ایک اہم شخصیت ہیں، کی شمولیت سے بے پناہ اثر و رسوخ اور طاقت حاصل کی۔"
  },
  {
    "id": 462,
    "question": "The Enabling Act which was passed on 3rd march, 1933 gave Adolf Hitler all powers to (TSTET 29 June 2025)\n3 مارچ 1933 کو منظور ہونے والے انیبلنگ ایکٹ نے ایڈولف ہٹلر کو کیا تمام اختیارات دیے؟",
    "options": [
      "rule Germany Democratically\nجرمنی پر جمہوری طور پر حکومت کرنا",
      "sideline Parliament and rule by his order\nپارلیمنٹ کو نظرانداز کرنا اور اپنے حکم سے حکومت کرنا",
      "establish proletarian form of Government in Germany\nجرمنی میں پرولتاری طرز حکومت قائم کرنا",
      "conduct elections in Germany and rule by its order\nجرمنی میں انتخابات کرانا اور اس کے حکم سے حکومت کرنا"
    ],
    "correctAnswer": 1,
    "explanation": "1933 کا انیبلنگ ایکٹ ایک اہم قانون تھا جس نے چانسلر ایڈولف ہٹلر کی سربراہی میں جرمن کابینہ کو ریخستاگ (پارلیمنٹ) کی شمولیت کے بغیر قوانین نافذ کرنے کا اختیار دیا۔ اس نے مؤثر طریقے سے جمہوری عمل کو ختم کیا اور ہٹلر کی آمریت کی قانونی بنیاد قائم کی۔"
  },
  {
    "id": 463,
    "question": "Among the following, the industrialist that started the 'Assembly Line Method' of production to produce more cars quickly (TSTET 29 June 2025)\nمندرجہ ذیل میں سے، کس صنعت کار نے زیادہ کاریں تیزی سے تیار کرنے کے لیے پیداوار کا 'اسمبلی لائن طریقہ' شروع کیا؟",
    "options": [
      "Volkswagen\nووکس ویگن",
      "General Motors\nجنرل موٹرز",
      "Ford Motors\nفورڈ موٹرز",
      "Maruthi\nماروتی"
    ],
    "correctAnswer": 2,
    "explanation": "ہنری فورڈ، فورڈ موٹرز کے بانی، کو 1913 میں متحرک اسمبلی لائن کا آغاز کرنے کا سہرا دیا جاتا ہے۔ اس جدت نے ماڈل ٹی جیسی آٹوموبائل تیار کرنے کے لیے درکار وقت اور لاگت کو ڈرامائی طور پر کم کرکے مینوفیکچرنگ میں انقلاب برپا کر دیا۔"
  },
  {
    "id": 464,
    "question": "On 8th March 1917, the women of this city of Russia took out a procession demanding 'Peace and Bread' (TSTET 29 June 2025)\n8 مارچ 1917 کو، روس کے اس شہر کی خواتین نے 'امن اور روٹی' کا مطالبہ کرتے ہوئے ایک جلوس نکالا۔",
    "options": [
      "Moscow\nماسکو",
      "St. Petersburg\nسینٹ پیٹرزبرگ",
      "Novosibirsk\nنووسیبرسک",
      "Chelyabinsk\nچیلیابنسک"
    ],
    "correctAnswer": 1,
    "explanation": "1917 کا فروری انقلاب سینٹ پیٹرزبرگ (اس وقت پیٹرو گراڈ کے نام سے جانا جاتا تھا) میں شروع ہوا۔ 8 مارچ (خواتین کا عالمی دن) کو، ہزاروں خواتین ٹیکسٹائل ورکرز نے 'امن اور روٹی' کے لیے مارچ کرتے ہوئے ہڑتال کی، ایک ایسا واقعہ جس نے وسیع تر انقلاب کو بھڑکا دیا جو زار کی دستبرداری کا باعث بنا۔"
  },
  {
    "id": 465,
    "question": "The invocation part of an inscription is Prashasti, which contains details about (TSTET 29 June 2025)\nایک کتبے کا ابتدائی حصہ پرشستی کہلاتا ہے، جس میں کس کے بارے میں تفصیلات ہوتی ہیں؟",
    "options": [
      "The brahmins and their writings\nبرہمن اور ان کی تحریریں",
      "The ruling family, their predecessor, and the period to which they belong\nحکمران خاندان، ان کے پیشرو، اور وہ دور جس سے وہ تعلق رکھتے ہیں",
      "The distribution of land and the method of collection of taxes from the people\nزمین کی تقسیم اور لوگوں سے ٹیکس وصول کرنے کا طریقہ",
      "People of that kingdom and their activities\nاس سلطنت کے لوگ اور ان کی سرگرمیاں"
    ],
    "correctAnswer": 1,
    "explanation": "پرشستی ایک مدحیہ کتبہ ہے، جو ہندوستانی تاریخ میں عام ہے، جو کسی حکمران کی تعریف میں لکھا جاتا ہے۔ یہ عام طور پر بادشاہ کے نسب (پیشرو)، اس کے ذاتی کارناموں، اس کی فتوحات، اور اس کے دور حکومت کی ٹائم لائن کی تفصیلات بیان کرتا ہے۔"
  },
  {
    "id": 481,
    "question": "The main land of India extends in between these latitudes (TSTET 29 June 2025)\nہندوستان کی مرکزی سرزمین ان عرض بلد کے درمیان پھیلی ہوئی ہے۔",
    "options": [
      "$8^{\\circ}4^{\\prime}$ N and $33^{\\circ}6^{\\prime}$ N latitudes\n$8^{\\circ}4^{\\prime}$ شمالی اور $33^{\\circ}6^{\\prime}$ شمالی عرض بلد",
      "$6^{\\circ}4^{\\prime}$ N and $33^{\\circ}6^{\\prime}$ N latitudes\n$6^{\\circ}4^{\\prime}$ شمالی اور $33^{\\circ}6^{\\prime}$ شمالی عرض بلد",
      "$8^{\\circ}4^{\\prime}$ N and $37^{\\circ}6^{\\prime}$ N latitudes\n$8^{\\circ}4^{\\prime}$ شمالی اور $37^{\\circ}6^{\\prime}$ شمالی عرض بلد",
      "$6^{\\circ}4^{\\prime}$ N and $37^{\\circ}6^{\\prime}$ N latitudes\n$6^{\\circ}4^{\\prime}$ شمالی اور $37^{\\circ}6^{\\prime}$ شمالی عرض بلد"
    ],
    "correctAnswer": 2,
    "explanation": "ہندوستان کی مرکزی سرزمین جنوب میں کنیاکماری میں $8^{\\circ}4^{\\prime}$ شمالی عرض بلد سے لے کر کشمیر کے شمالی ترین مقام $37^{\\circ}6^{\\prime}$ شمالی عرض بلد تک پھیلی ہوئی ہے۔ $6^{\\circ}4^{\\prime}$ شمالی عرض بلد اندرا پوائنٹ کی نشاندہی کرتا ہے، جو ہندوستانی یونین کا جنوبی ترین سرا ہے، جو مرکزی سرزمین پر نہیں ہے۔"
  },
  {
    "id": 482,
    "question": "This sea coast remains mostly dry during the South-west monsoon season as it is in the rain shadow area of the Arabian sea branch and is parallel to the Bay of Bengal branch (TSTET 29 June 2025)\nیہ ساحلی علاقہ جنوب مغربی مانسون کے موسم میں زیادہ تر خشک رہتا ہے کیونکہ یہ بحیرہ عرب کی شاخ کے بارش سے محروم علاقے میں واقع ہے اور خلیج بنگال کی شاخ کے متوازی ہے۔",
    "options": [
      "Coromandel coast\nکورومنڈل ساحل",
      "Canara Coast\nکنارا ساحل",
      "Konkan Coast\nکونکن ساحل",
      "Utkal Coast\nاتکل ساحل"
    ],
    "correctAnswer": 0,
    "explanation": "کورومنڈل ساحل، جو ہندوستان کے جنوب مشرقی ساحل پر واقع ہے، مانسون کی بحیرہ عرب شاخ کے لیے مغربی گھاٹوں کے بارش سے محروم علاقے میں آتا ہے۔ خلیج بنگال کی شاخ اس ساحل کے متوازی بہتی ہے، جس کی وجہ سے جنوب مغربی مانسون کے موسم میں بہت کم بارش ہوتی ہے۔"
  },
  {
    "id": 483,
    "question": "The river basin of this river covers Parts of Maharashtra. Madhya Pradesh, Odisha, Telangana and Andhra Pradesh (TSTET 29 June 2025)\nاس دریا کا بیسن مہاراشٹر، مدھیہ پردیش، اڈیشہ، تلنگانہ اور آندھرا پردیش کے کچھ حصوں پر محیط ہے۔",
    "options": [
      "Krishna\nکرشنا",
      "Narmada\nنرمدا",
      "Godavari\nگوداوری",
      "Mahanadi\nمہاندی"
    ],
    "correctAnswer": 2,
    "explanation": "دریائے گوداوری کا بیسن جزیرہ نما ہندوستان میں سب سے بڑا ہے۔ یہ مہاراشٹر سے نکلتا ہے اور تلنگانہ، آندھرا پردیش، چھتیس گڑھ اور اڈیشہ سے بہتا ہے، اس کے معاون دریا مدھیہ پردیش کے کچھ حصوں کا بھی احاطہ کرتے ہیں۔"
  },
  {
    "id": 484,
    "question": "Identify the statement that best describes 'mixed farming' among the following (TSTET 29 June 2025)\nدرج ذیل میں سے اس بیان کی نشاندہی کریں جو 'مخلوط کاشتکاری' کی بہترین وضاحت کرتا ہے۔",
    "options": [
      "Using of land for growing food and fodder crops and for rearing livestock\nزمین کا استعمال غذائی اور چارے کی فصلیں اگانے اور مویشی پالنے کے لیے",
      "Using of land for growing food crops only\nزمین کا استعمال صرف غذائی فصلیں اگانے کے لیے",
      "The land used for growing of only plantation crops\nزمین کا استعمال صرف شجر کاری کی فصلیں اگانے کے لیے",
      "The land used for growing fodder crops and rearing of cattle only\nزمین کا استعمال صرف چارے کی فصلیں اگانے اور مویشی پالنے کے لیے"
    ],
    "correctAnswer": 0,
    "explanation": "مخلوط کاشتکاری ایک زرعی نظام ہے جس میں ایک کسان ایک ہی زمین پر مختلف زرعی سرگرمیاں ایک ساتھ انجام دیتا ہے، جیسے فصلوں کی کاشت اور مویشی پالنا۔"
  },
  {
    "id": 485,
    "question": "These trees grow mostly on the sea coasts, on sandy beaches and marshy lands and on lands affected by tidal waves (TSTET 29 June 2025)\nیہ درخت زیادہ تر سمندری ساحلوں، ریتیلے ساحلوں اور دلدلی زمینوں اور سمندری لہروں سے متاثرہ زمینوں پر اگتے ہیں۔",
    "options": [
      "Thorny forests\nکانٹے دار جنگلات",
      "Evergreen forests\nسدا بہار جنگلات",
      "Coniferous forests\nصنوبری جنگلات",
      "Mangrove forests\nمینگروو جنگلات"
    ],
    "correctAnswer": 3,
    "explanation": "مینگروو جنگلات خاص ساحلی ماحولیاتی نظام ہیں جن کی خصوصیت نمک برداشت کرنے والے درخت (ہیلوفائٹس) ہیں جو بین سمندری علاقوں، دلدلی زمینوں اور سمندری لہروں سے متاثرہ علاقوں میں پروان چڑھتے ہیں۔"
  },
  {
    "id": 486,
    "question": "In a country, the Positive growth of population is observed when (TSTET 29 June 2025)\nکسی ملک میں، آبادی میں مثبت اضافہ اس وقت دیکھا جاتا ہے جب",
    "options": [
      "The birth rate is more than the death rate\nشرح پیدائش شرح اموات سے زیادہ ہو",
      "The birth and death rate are equal\nشرح پیدائش اور شرح اموات برابر ہوں",
      "The rate of migration is more than that of immigration\nہجرت کی شرح امیگریشن سے زیادہ ہو",
      "The birth rate is less than the death rate\nشرح پیدائش شرح اموات سے کم ہو"
    ],
    "correctAnswer": 0,
    "explanation": "آبادی میں مثبت اضافہ، جسے اکثر قدرتی اضافہ بھی کہا جاتا ہے، اس وقت ہوتا ہے جب شرح پیدائش (ہر 1,000 افراد پر سالانہ پیدائش کی تعداد) شرح اموات (ہر 1,000 افراد پر سالانہ اموات کی تعداد) سے زیادہ ہو۔"
  },
  {
    "id": 487,
    "question": "One among the following statements best describes the term 'Soil' (TSTET 29 June 2025)\nدرج ذیل میں سے کون سا بیان 'مٹی' کی اصطلاح کی بہترین وضاحت کرتا ہے؟",
    "options": [
      "The breaking up of exposed rocks\nکھلی چٹانوں کا ٹوٹنا",
      "The layer existing in between the crust and the mantle\nقشر ارض اور مینٹل کے درمیان موجود تہہ",
      "The thin layer of grainy substance covering the surface of the earth\nزمین کی سطح کو ڈھانپنے والی دانے دار مادے کی پتلی تہہ",
      "The liquid material under the surface of the earth\nزمین کی سطح کے نیچے مائع مادہ"
    ],
    "correctAnswer": 2,
    "explanation": "مٹی زمین کی سطح کی سب سے اوپری تہہ ہے، جو معدنیات، نامیاتی مادے، پانی اور ہوا کے آمیزے پر مشتمل ہے۔ 'دانے دار مادے کی پتلی تہہ' کی تفصیل دیے گئے اختیارات میں سب سے درست عمومی تعریف ہے۔"
  },
  {
    "id": 488,
    "question": "The main mineral constituents of the Continental crust and the Oceanic Crust respectively are (TSTET 29 June 2025)\nبراعظمی قشر اور بحری قشر کے اہم معدنی اجزاء بالترتیب ہیں",
    "options": [
      "Sial (silica and alumina) and sima (silica and magnesium)\nسیال (سلیکا اور ایلومینا) اور سیما (سلیکا اور میگنیشیم)",
      "sial (silica and alumina) and nife (nickel and ferrous)\nسیال (سلیکا اور ایلومینا) اور نائف (نکل اور فیرس)",
      "nife (nickel and ferrous) and sima (silica and magnesium)\nنائف (نکل اور فیرس) اور سیما (سلیکا اور میگنیشیم)",
      "sima (silica and magnesium) and sial (silica and alumina)\nسیما (سلیکا اور میگنیشیم) اور سیال (سلیکا اور ایلومینا)"
    ],
    "correctAnswer": 0,
    "explanation": "براعظمی قشر بنیادی طور پر ہلکی چٹانوں پر مشتمل ہے جو سلیکا اور ایلومینیم سے بھرپور ہوتی ہیں، اس لیے اسے 'سیال' کہا جاتا ہے۔ زیادہ کثیف بحری قشر سلیکا اور میگنیشیم سے بھرپور چٹانوں سے بنا ہے، جسے 'سیما' کہا جاتا ہے۔"
  },
  {
    "id": 489,
    "question": "These rocks are formed when the molten magma cools and becomes solid (TSTET 29 June 2025)\nیہ چٹانیں اس وقت بنتی ہیں جب پگھلا ہوا میگما ٹھنڈا ہو کر ٹھوس ہو جاتا ہے۔",
    "options": [
      "Igneous Rocks\nآتشی چٹانیں",
      "Metamorphic rocks\nمتحول چٹانیں",
      "Sedimentary rocks\nتہہ دار چٹانیں",
      "Sedimentary and Metamorphic rocks\nتہہ دار اور متحول چٹانیں"
    ],
    "correctAnswer": 0,
    "explanation": "آتشی چٹانیں پگھلے ہوئے چٹانی مواد، یعنی میگما (سطح کے نیچے) یا لاوا (سطح پر) کے ٹھنڈا ہونے اور ٹھوس ہونے سے بنتی ہیں۔ 'آتشی' (Igneous) کی اصطلاح آگ کے لیے لاطینی لفظ سے ماخوذ ہے۔"
  },
  {
    "id": 490,
    "question": "The term 'Horticulture' refers to (TSTET 29 June 2025)\nاصطلاح 'ہارٹیکلچر' سے مراد ہے",
    "options": [
      "Cultivation of grapes only\nصرف انگور کی کاشت",
      "Growing vegetables, flowers and fruits for commercial use\nتجارتی استعمال کے لیے سبزیاں، پھول اور پھل اگانا",
      "Commercial rearing of silkworms\nریشم کے کیڑوں کی تجارتی پرورش",
      "Breeding of fish in specially constructed tanks and ponds\nخاص طور پر بنائے گئے ٹینکوں اور تالابوں میں مچھلیوں کی افزائش نسل"
    ],
    "correctAnswer": 1,
    "explanation": "ہارٹیکلچر زراعت کی وہ شاخ ہے جو پودوں کی کاشت پر مرکوز ہے، جس میں پھل، سبزیاں، پھول اور سجاوٹی پودے شامل ہیں، جو اکثر تجارتی مقاصد کے لیے ہوتے ہیں۔"
  },
  {
    "id": 491,
    "question": "Among the following, the latitude passing through North America is (TSTET 29 June 2025)\nدرج ذیل میں سے، شمالی امریکہ سے گزرنے والا عرض بلد ہے",
    "options": [
      "Tropic of Capricorn\nخطِ جدی",
      "Equator\nخطِ استوا",
      "Tropic of Cancer\nخطِ سرطان",
      "Antarctic Circle\nانٹارکٹک سرکل"
    ],
    "correctAnswer": 2,
    "explanation": "خطِ سرطان ($23.5^{\\circ}$ شمالی عرض بلد) عرض بلد کی وہ بڑی لکیر ہے جو براعظم شمالی امریکہ سے، خاص طور پر میکسیکو اور بہاماس سے گزرتی ہے۔"
  },
  {
    "id": 492,
    "question": "From among the following. identify the Non-Metamorphic rock (TSTET 29 June 2025)\nدرج ذیل میں سے غیر متحول چٹان کی نشاندہی کریں۔",
    "options": [
      "Marble stone\nسنگ مرمر",
      "Limestone\nچونے کا پتھر",
      "Schist\nشسٹ",
      "Quartzite\nکوارٹزائٹ"
    ],
    "correctAnswer": 1,
    "explanation": "چونے کا پتھر ایک تہہ دار چٹان ہے۔ سنگ مرمر، شسٹ اور کوارٹزائٹ سبھی متحول چٹانیں ہیں۔ سنگ مرمر چونے کے پتھر سے، کوارٹزائٹ ریت کے پتھر سے، اور شسٹ شیل یا مڈ اسٹون سے حرارت اور دباؤ کے تحت بنتا ہے۔"
  },
  {
    "id": 493,
    "question": "At times the river overflows its banks, then (TSTET 29 June 2025)\nکبھی کبھی دریا اپنے کناروں سے باہر بہہ جاتا ہے، تب",
    "options": [
      "It deposits layers of fine soil and other materials along river banks\nیہ دریا کے کناروں پر باریک مٹی اور دیگر مواد کی تہیں جمع کرتا ہے",
      "The speed of the river increases and erodes the top most layer of the soil\nدریا کی رفتار بڑھ جاتی ہے اور مٹی کی اوپری تہہ کو ختم کر دیتی ہے",
      "It deposits only the material carried by it\nیہ صرف اپنے ساتھ لایا ہوا مواد جمع کرتا ہے",
      "It leads to the formation of Gorges\nیہ گھاٹیوں کی تشکیل کا باعث بنتا ہے"
    ],
    "correctAnswer": 0,
    "explanation": "جب دریا میں سیلاب آتا ہے اور وہ اپنے کناروں سے باہر بہہ جاتا ہے، تو پانی پھیل جاتا ہے اور اس کی رفتار کم ہو جاتی ہے، جس کی وجہ سے وہ اپنے ساتھ لائے ہوئے تلچھٹ کو جمع کرتا ہے۔ اس عمل سے زرخیز سیلابی میدان بنتے ہیں۔"
  },
  {
    "id": 494,
    "question": "Among the following, these winds blow continuously and regularly throughout the year in a particular direction (TSTET 29 June 2025)\nدرج ذیل میں سے، یہ ہوائیں سال بھر ایک خاص سمت میں مسلسل اور باقاعدگی سے چلتی ہیں",
    "options": [
      "Trade Winds\nتجارتی ہوائیں",
      "Monsoon winds\nمانسونی ہوائیں",
      "Hot local Winds\nگرم مقامی ہوائیں",
      "Cold Local Winds\nسرد مقامی ہوائیں"
    ],
    "correctAnswer": 0,
    "explanation": "تجارتی ہوائیں ایک قسم کی سیاروی (یا مستقل) ہوائیں ہیں جو خط استوا کے قریب سال بھر ایک مخصوص سمت میں مستقل طور پر چلتی ہیں۔ مانسونی اور مقامی ہوائیں موسمی یا وقتی ہوتی ہیں۔"
  },
  {
    "id": 495,
    "question": "In the First Phase of the Agricultural Development i.e. in between 1950-1965, India invested heavily on (TSTET 29 June 2025)\nزرعی ترقی کے پہلے مرحلے میں یعنی 1950-1965 کے درمیان، ہندوستان نے بھاری سرمایہ کاری کی",
    "options": [
      "usage of high yielding variety seeds\nزیادہ پیداوار دینے والی قسم کے بیجوں کا استعمال",
      "Provision of markets for the farmer's produce\nکسانوں کی پیداوار کے لیے منڈیوں کی فراہمی",
      "Construction of irrigation projects and power projects\nآبپاشی کے منصوبوں اور بجلی کے منصوبوں کی تعمیر",
      "Encouraging Drip Irrigation\nقطرہ آبپاشی کی حوصلہ افزائی"
    ],
    "correctAnswer": 2,
    "explanation": "ابتدائی پانچ سالہ منصوبوں (1951-1965) کے دوران، ہندوستان کی بنیادی توجہ بنیادی ڈھانچے کی تعمیر پر تھی۔ اس میں زرعی پیداواریت کو بڑھانے کے لیے بڑے پیمانے پر آبپاشی اور بجلی کے منصوبوں میں بڑی سرمایہ کاری شامل تھی۔"
  },
  {
    "id": 496,
    "question": "The members of the constituent Assembly were chosen through indirect election by the members of the Provincial Legislative Assemblies that had been established under the (TSTET 29 June 2025)\nآئین ساز اسمبلی کے ارکان کا انتخاب صوبائی قانون ساز اسمبلیوں کے ارکان کے ذریعے بالواسطہ انتخابات کے ذریعے کیا گیا تھا جو اس کے تحت قائم کی گئی تھیں",
    "options": [
      "Government of India Act. 1935\nحکومت ہند ایکٹ، 1935",
      "Minto Morely reforms, 1909\nمنٹو مارلے اصلاحات، 1909",
      "Montague Chelmsford Reforms, 1919\nمونٹیگو چیلمسفورڈ اصلاحات، 1919",
      "The Indian Independence Act, 1947\nہندوستانی آزادی ایکٹ، 1947"
    ],
    "correctAnswer": 0,
    "explanation": "آئین ساز اسمبلی کے انتخابات 1946 میں ہوئے تھے۔ ارکان کا انتخاب صوبائی قانون ساز اسمبلیوں کے ارکان نے کیا تھا، جو حکومت ہند ایکٹ، 1935 کے فراہم کردہ فریم ورک کے تحت کام کر رہی تھیں۔"
  },
  {
    "id": 497,
    "question": "In this form of Government system, only those in government get their authority from the people and have to answer to the people (TSTET 29 June 2025)\nحکومتی نظام کی اس شکل میں، صرف حکومت میں شامل افراد ہی عوام سے اپنا اختیار حاصل کرتے ہیں اور انہیں عوام کو جوابدہ ہونا پڑتا ہے۔",
    "options": [
      "Communist\nکمیونسٹ",
      "Democratic\nجمہوری",
      "Marxist\nمارکسسٹ",
      "Dictatorial\nآمرانہ"
    ],
    "correctAnswer": 1,
    "explanation": "جمہوریت کا ایک بنیادی اصول عوامی خودمختاری ہے، جہاں حکومت اپنی طاقت عوام کی رضامندی سے حاصل کرتی ہے۔ منتخب عہدیدار ان لوگوں کے سامنے جوابدہ ہوتے ہیں جن کی وہ نمائندگی کرتے ہیں۔"
  },
  {
    "id": 498,
    "question": "One among the following is NOT the Fundamental Right of the Indian Citizen (TSTET 29 June 2025)\nدرج ذیل میں سے ایک ہندوستانی شہری کا بنیادی حق نہیں ہے",
    "options": [
      "Right to protection against arrest and detention in certain cases\nبعض صورتوں میں گرفتاری اور نظربندی کے خلاف تحفظ کا حق",
      "Right to equality of opportunity in public employment\nعوامی ملازمت میں مواقع کی مساوات کا حق",
      "Right to form associations or unions\nانجمنیں یا یونینیں بنانے کا حق",
      "Right to move to the courts to issue direction for enforcement of Directive Principles of State Policy\nریاستی پالیسی کے رہنما اصولوں کے نفاذ کے لیے ہدایات جاری کرنے کے لیے عدالتوں سے رجوع کرنے کا حق"
    ],
    "correctAnswer": 3,
    "explanation": "بنیادی حقوق (آئین کا حصہ III) قانونی طور پر قابل نفاذ ہیں (عدالت کے ذریعے)، جبکہ ریاستی پالیسی کے رہنما اصول (حصہ IV) حکومت کے لیے غیر عدالتی رہنما خطوط ہیں۔ شہری رہنما اصولوں کو نافذ کرنے کے لیے عدالتوں سے رجوع نہیں کر سکتے۔"
  },
  {
    "id": 499,
    "question": "From among the following, identify the SAARC summits hosted by India (TSTET 29 June 2025)\nدرج ذیل میں سے، ہندوستان کی میزبانی میں ہونے والے سارک سربراہی اجلاسوں کی نشاندہی کریں۔",
    "options": [
      "2nd, 8th summits only\nصرف دوسرا، آٹھواں سربراہی اجلاس",
      "2nd. 8th and 14th summits\nدوسرا، آٹھواں اور چودھواں سربراہی اجلاس",
      "14th and 18th summits\nچودھواں اور اٹھارہواں سربراہی اجلاس",
      "2nd and 5th summits\nدوسرا اور پانچواں سربراہی اجلاس"
    ],
    "correctAnswer": 1,
    "explanation": "ہندوستان نے تین بار سارک (جنوبی ایشیائی علاقائی تعاون کی تنظیم) سربراہی اجلاس کی میزبانی کی ہے: دوسرا سربراہی اجلاس بنگلورو میں (1986)، آٹھواں سربراہی اجلاس نئی دہلی میں (1995)، اور چودھواں سربراہی اجلاس نئی دہلی میں (2007)۔"
  },
  {
    "id": 500,
    "question": "The headquarters of Greenpeace Movement was located at (TSTET 29 June 2025)\nگرین پیس موومنٹ کا ہیڈ کوارٹر واقع تھا",
    "options": [
      "New York\nنیویارک",
      "London\nلندن",
      "Alaska\nالاسکا",
      "Amsterdam\nایمسٹرڈیم"
    ],
    "correctAnswer": 3,
    "explanation": "گرین پیس ایک عالمی غیر سرکاری ماحولیاتی تنظیم ہے۔ اس کا بین الاقوامی رابطہ کار ادارہ، گرین پیس انٹرنیشنل، ایمسٹرڈیم، نیدرلینڈز میں واقع ہے۔"
  },
  {
    "id": 501,
    "question": "Who preached the idea of 'One Jati, one God and one Religion for all'? (TSTET 29 June 2025)\nسب کے لیے 'ایک جاتی، ایک خدا اور ایک مذہب' کے نظریے کی تبلیغ کس نے کی؟",
    "options": [
      "Arigey Ramaswamy\nاریگے راماسوامی",
      "Narayana Guru\nنارائنا گرو",
      "Dr. B.R. Ambedkar\nڈاکٹر بی آر امبیڈکر",
      "Bhagya Reddy Varma\nبھاگیہ ریڈی ورما"
    ],
    "correctAnswer": 1,
    "explanation": "کیرالہ کے ایک سماجی مصلح، سری نارائنا گرو نے مشہور طور پر 'اورو جاتی، اورو متھم، اورو دیوم منشیانو' کا اعلان کیا، جس کا ترجمہ 'انسانیت کے لیے ایک ذات، ایک مذہب، ایک خدا' ہے، جو ذات پات کے نظام کے خلاف ایک پکار تھی۔"
  },
  {
    "id": 502,
    "question": "The nuclear scientist who played a key role in leading the human rights movement in the USSR was (TSTET 29 June 2025)\nیو ایس ایس آر میں انسانی حقوق کی تحریک کی قیادت میں کلیدی کردار ادا کرنے والے جوہری سائنسدان تھے",
    "options": [
      "Alexander Solzhenitsyn\nالیگزینڈر سولزینیتسن",
      "Mikhael Gorbachev\nمیخائل گورباچوف",
      "Andrei Sakharov\nآندرے سخاروف",
      "Mikhail Mikhailovich\nمیخائل میخائیلووچ"
    ],
    "correctAnswer": 2,
    "explanation": "آندرے سخاروف ایک مشہور سوویت جوہری طبیعیات دان تھے جو سوویت یونین میں انسانی حقوق اور شہری آزادیوں کے ایک سرکردہ مخالف اور وکیل بن گئے۔ انہیں ان کی کوششوں کے لیے 1975 میں امن کا نوبل انعام دیا گیا۔"
  },
  {
    "id": 503,
    "question": "The United Nations Secretary General who persuaded India and Pakistan to agree to a ceasefire during Indo-Pak war in 1965 (TSTET 29 June 2025)\nاقوام متحدہ کے سیکرٹری جنرل جنہوں نے 1965 کی پاک بھارت جنگ کے دوران ہندوستان اور پاکستان کو جنگ بندی پر راضی کیا",
    "options": [
      "Ban Ki-moon\nبان کی مون",
      "Boutros Boutros-Ghali\nبطرس بطرس غالی",
      "U Thant\nیو تھانٹ",
      "Trygve Lie\nٹریگوے لی"
    ],
    "correctAnswer": 2,
    "explanation": "برما کے یو تھانٹ، اقوام متحدہ کے تیسرے سیکرٹری جنرل، نے 1965 کی پاک بھارت جنگ کے دوران ایک اہم سفارتی کردار ادا کیا۔ ان کی ذاتی مداخلتیں اور برصغیر کے مشن جنگ بندی کے حصول میں اہم تھے۔"
  },
  {
    "id": 504,
    "question": "India and China signed the Pancha Sheel pact on (TSTET 29 June 2025)\nہندوستان اور چین نے پنچ شیل معاہدے پر دستخط کیے",
    "options": [
      "29th April, 1954",
      "29th April, 1955",
      "15th September, 1961",
      "25th December. 1971"
    ],
    "correctAnswer": 0,
    "explanation": "پنچ شیل، یا پرامن بقائے باہمی کے پانچ اصول، باضابطہ طور پر 'چین کے تبت علاقے اور ہندوستان کے درمیان تجارت اور تعلقات کے معاہدے' میں بیان کیے گئے تھے، جس پر دونوں ممالک نے 29 اپریل 1954 کو دستخط کیے تھے۔"
  },
  {
    "id": 505,
    "question": "The main objective of NAM during the Cold War was (TSTET 29 June 2025)\nسرد جنگ کے دوران غیر وابستہ تحریک (NAM) کا بنیادی مقصد تھا",
    "options": [
      "To align with the Soviet bloc\nسوویت بلاک کے ساتھ اتحاد کرنا",
      "To align with the Western bloc\nمغربی بلاک کے ساتھ اتحاد کرنا",
      "To remain neutral and promote peace\nغیر جانبدار رہنا اور امن کو فروغ دینا",
      "To form a military alliance\nایک فوجی اتحاد بنانا"
    ],
    "correctAnswer": 2,
    "explanation": "غیر وابستہ تحریک (NAM) سرد جنگ کے دوران ترقی پذیر ممالک نے تشکیل دی تھی تاکہ امریکہ کی قیادت والے مغربی بلاک یا سوویت یونین کی قیادت والے مشرقی بلاک کے ساتھ اتحاد سے بچا جا سکے۔ اس کا بنیادی مقصد غیر جانبداری کو برقرار رکھنا اور امن و تعاون کی وکالت کرنا تھا۔"
  },
  {
    "id": 506,
    "question": "In 1968. Saddam Hussain came to power in Iraq with the twin slogans of Arab Nationalism and Socialism. By 'Socialism', they meant (TSTET 29 June 2025)\n1968 میں، صدام حسین عراق میں عرب قوم پرستی اور سوشلزم کے دوہرے نعروں کے ساتھ اقتدار میں آئے۔ 'سوشلزم' سے ان کا مطلب تھا",
    "options": [
      "Distribution of oil resources among all the people of Iraq\nعراق کے تمام لوگوں میں تیل کے وسائل کی تقسیم",
      "Use of oil resources for the welfare of Religious institutions\nمذہبی اداروں کی فلاح و بہبود کے لیے تیل کے وسائل کا استعمال",
      "Nationalising and utilising the oil resources to spread Islamism\nاسلام ازم کو پھیلانے کے لیے تیل کے وسائل کو قومیانا اور استعمال کرنا",
      "Nationalisation of oil resources and the use of oil revenues by the state to fund welfare measures\nتیل کے وسائل کو قومیانا اور تیل کی آمدنی کا ریاست کی طرف سے فلاحی اقدامات کے لیے استعمال"
    ],
    "correctAnswer": 3,
    "explanation": "بعثی نظریے نے عرب قوم پرستی کو سوشلزم کی ایک شکل کے ساتھ ملایا جس کا عملی طور پر مطلب اہم صنعتوں پر ریاستی کنٹرول تھا۔ عراق میں، اس میں ملک کے تیل کے وسائل کو قومیانا اور آمدنی کو ریاستی فلاح و بہبود اور ترقیاتی پروگراموں کے لیے استعمال کرنا شامل تھا۔"
  },
  {
    "id": 507,
    "question": "The conference which was held in 1955 paved the way for the Non-Aligned Movement (TSTET 29 June 2025)\n1955 میں ہونے والی کانفرنس نے غیر وابستہ تحریک کی راہ ہموار کی",
    "options": [
      "Bandung Conference\nبانڈونگ کانفرنس",
      "North Atlantic Treaty Organisation\nشمالی بحر اوقیانوس معاہدے کی تنظیم",
      "Warsaw Pact\nوارسا معاہدہ",
      "United Nations Organisation\nاقوام متحدہ کی تنظیم"
    ],
    "correctAnswer": 0,
    "explanation": "ایشین-افریقی کانفرنس، جو 1955 میں انڈونیشیا کے شہر بانڈونگ میں منعقد ہوئی، نے 29 نئی آزاد اقوام کے رہنماؤں کو اکٹھا کیا۔ اس کانفرنس میں قائم کیے گئے تعاون اور نوآبادیات مخالف اصولوں نے 1961 میں غیر وابستہ تحریک کی باقاعدہ تشکیل کی بنیاد رکھی۔"
  },
  {
    "id": 508,
    "question": "Identify the correct statement regarding an Ordinary Bill on the central subjects in India (TSTET 29 June 2025)\nہندوستان میں مرکزی موضوعات پر ایک عام بل کے بارے میں صحیح بیان کی نشاندہی کریں۔",
    "options": [
      "The ordinary bills are to be passed in the Lok Sabha only\nعام بل صرف لوک سبھا میں منظور کیے جانے ہیں",
      "If there are any differences between the two houses of the Parliament in passing an ordinary bill, the final decision shall be taken in a joint session of the Parliament\nاگر پارلیمنٹ کے دونوں ایوانوں کے درمیان کسی عام بل کو منظور کرنے میں کوئی اختلاف ہو تو حتمی فیصلہ پارلیمنٹ کے مشترکہ اجلاس میں کیا جائے گا",
      "The Rajya Sabha is empowered with more powers regarding ordinary bills\nراجیہ سبھا کو عام بلوں کے بارے میں زیادہ اختیارات حاصل ہیں",
      "As Lok Sabha has more members, it is likely to have more powers regarding ordinary bills\nچونکہ لوک سبھا کے ارکان زیادہ ہیں، اس لیے اسے عام بلوں کے بارے میں زیادہ اختیارات حاصل ہونے کا امکان ہے"
    ],
    "correctAnswer": 1,
    "explanation": "ایک عام بل کو قانون بننے کے لیے اسے لوک سبھا اور راجیہ سبھا دونوں سے منظور ہونا ضروری ہے۔ اگر کوئی اختلاف یا تعطل ہو تو آئین کا آرٹیکل 108 دونوں ایوانوں کے مشترکہ اجلاس کی اجازت دیتا ہے تاکہ اکثریت کی رائے سے اس مسئلے کو حل کیا جا سکے۔"
  },
  {
    "id": 509,
    "question": "Which of the following is the best example of Globalization? (TSTET 29 June 2025)\nدرج ذیل میں سے کون سی عالمگیریت کی بہترین مثال ہے؟",
    "options": [
      "Exchange of goods across the national boundaries\nقومی سرحدوں کے پار سامان کا تبادلہ",
      "Exchange of goods and services across the national boundaries\nقومی سرحدوں کے پار سامان اور خدمات کا تبادلہ",
      "Exchange of goods, services and capital across the national boundaries\nقومی سرحدوں کے پار سامان، خدمات اور سرمائے کا تبادلہ",
      "Exchange of goods, services, capital and information across the national boundaries\nقومی سرحدوں کے پار سامان، خدمات، سرمائے اور معلومات کا تبادلہ"
    ],
    "correctAnswer": 3,
    "explanation": "عالمگیریت باہمی ربط کو بڑھانے کا ایک وسیع عمل ہے۔ اس میں سامان، خدمات اور سرمائے کا بہاؤ شامل ہے، لیکن اس کی جدید تعریف اس وقت سب سے زیادہ مکمل ہوتی ہے جب اس میں معلومات، خیالات اور ثقافت کا تیز رفتار، سرحد پار تبادلہ بھی شامل ہو۔"
  },
  {
    "id": 510,
    "question": "One of the following is NOT applicable for a worker who works in the Organized Sector (TSTET 29 June 2025)\nدرج ذیل میں سے ایک منظم شعبے میں کام کرنے والے کارکن پر لاگو نہیں ہوتا ہے",
    "options": [
      "The worker gets a regular salary at the end of the month\nکارکن کو مہینے کے آخر میں باقاعدہ تنخواہ ملتی ہے",
      "The worker is not paid for leave\nکارکن کو چھٹی کی تنخواہ نہیں دی جاتی",
      "The worker gets medical allowances\nکارکن کو طبی الاؤنس ملتے ہیں",
      "The worker gets an appointment letter stating the terms and conditions of work when he/she joins work\nکارکن کو کام میں شامل ہونے پر کام کی شرائط و ضوابط پر مشتمل تقرری کا خط ملتا ہے"
    ],
    "correctAnswer": 1,
    "explanation": "منظم شعبے کی تعریف باقاعدہ روزگار، ملازمت کے تحفظ اور قانون کے تحت لازمی فوائد سے ہوتی ہے۔ ان فوائد میں بامعاوضہ چھٹی (عارضی، بیماری، وغیرہ) شامل ہے۔ چھٹی کے لیے ادائیگی نہ کیا جانا غیر منظم شعبے کی خصوصیت ہے۔"
  },
  {
    "id": 511,
    "question": "Identify the INCORRECT statement from the following related to Public Distribution System (PDS) (TSTET 29 June 2025)\nعوامی تقسیم کے نظام (PDS) سے متعلق درج ذیل میں سے غلط بیان کی نشاندہی کریں۔",
    "options": [
      "The poorest families are issued Antyodaya Cards\nغریب ترین خاندانوں کو انتیودیا کارڈ جاری کیے جاتے ہیں",
      "Poor are issued BPL (White) cards\nغریبوں کو بی پی ایل (سفید) کارڈ جاری کیے جاتے ہیں",
      "Antyodaya and BPL cards are one and the same\nانتیودیا اور بی پی ایل کارڈ ایک ہی ہیں",
      "Above Poverty Line families are issued Pink Cards\nخط غربت سے اوپر کے خاندانوں کو گلابی کارڈ جاری کیے جاتے ہیں"
    ],
    "correctAnswer": 2,
    "explanation": "ھدف شدہ عوامی تقسیم کے نظام (TPDS) کے تحت، انتیودیا انا یوجنا (AAY) ایک مخصوص اسکیم ہے جو خط غربت سے نیچے (BPL) خاندانوں میں سے 'غریب ترین' کو ھدف بناتی ہے۔ وہ BPL کی ایک ذیلی قسم ہیں، ایک ہی چیز نہیں۔"
  },
  {
    "id": 512,
    "question": "The concept of Sustainability first appeared in the year (TSTET 29 June 2025)\nپائیداری کا تصور پہلی بار اس سال میں سامنے آیا",
    "options": [
      "1992",
      "1978",
      "1980",
      "1987"
    ],
    "correctAnswer": 3,
    "explanation": "پائیدار ترقی کے تصور کو 1987 میں اقوام متحدہ کے برنڈلینڈ کمیشن کی رپورٹ 'ہمارا مشترکہ مستقبل' میں نمایاں طور پر بیان اور مقبول کیا گیا تھا۔"
  },
  {
    "id": 513,
    "question": "The amount received by the Government in the form of interest, fees and dividends is known as (TSTET 29 June 2025)\nحکومت کو سود، فیس اور منافع کی شکل میں ملنے والی رقم کو کہا جاتا ہے",
    "options": [
      "Tax Revenue Receipts\nٹیکس ریونیو کی وصولیاں",
      "Non-Tax Revenue Receipts\nغیر ٹیکس ریونیو کی وصولیاں",
      "Capital Receipts\nسرمایہ کی وصولیاں",
      "Non-Tax Capital Revenue Receipts\nغیر ٹیکس سرمایہ ریونیو کی وصولیاں"
    ],
    "correctAnswer": 1,
    "explanation": "حکومتی آمدنی کو ٹیکس اور غیر ٹیکس آمدنی میں درجہ بند کیا گیا ہے۔ غیر ٹیکس آمدنی میں ٹیکس کے علاوہ دیگر ذرائع سے حاصل ہونے والی تمام حکومتی آمدنی شامل ہے، جیسے قرضوں پر حاصل سود، پبلک سیکٹر یونٹس سے منافع، فیس، جرمانے اور گرانٹس۔"
  },
  {
    "id": 514,
    "question": "This service can be used for high value transactions (TSTET 29 June 2025)\nاس سروس کو اعلیٰ مالیت کے لین دین کے لیے استعمال کیا جا سکتا ہے",
    "options": [
      "USSD\nیو ایس ایس ڈی",
      "RTGS\nآر ٹی جی ایس",
      "UPI\nیو پی آئی",
      "IMPS\nآئی ایم پی ایس"
    ],
    "correctAnswer": 1,
    "explanation": "ریئل ٹائم گراس سیٹلمنٹ (آر ٹی جی ایس) ایک فنڈ ٹرانسفر سسٹم ہے جو اعلیٰ مالیت کے لین دین کے لیے ڈیزائن کیا گیا ہے۔ آر ٹی جی ایس کے ذریعے بھیجی جانے والی کم از کم رقم 2 لاکھ روپے ہے، جس کی کوئی اوپری حد نہیں ہے۔"
  },
  {
    "id": 515,
    "question": "The World Trade Organization came into effect in (TSTET 29 June 2025)\nعالمی تجارتی تنظیم کا نفاذ ہوا",
    "options": [
      "6th March, 1996",
      "8th April, 1994",
      "5th February, 1994",
      "1st January, 1995"
    ],
    "correctAnswer": 3,
    "explanation": "عالمی تجارتی تنظیم (WTO) باضابطہ طور پر 1 جنوری 1995 کو کثیرالجہتی تجارتی مذاکرات کے یوروگوئے راؤنڈ کے اختتام کے بعد ٹیرف اور تجارت پر جنرل ایگریمنٹ (GATT) کے جانشین کے طور پر قائم کی گئی تھی۔"
  },
  {
    "id": 516,
    "question": "In India, the money supply is regulated by (TSTET 29 June 2025)\nہندوستان میں، رقم کی فراہمی کو منظم کیا جاتا ہے",
    "options": [
      "The Government of India\nحکومت ہند",
      "Commercial Banks\nتجارتی بینک",
      "Ministry of Finance\nوزارت خزانہ",
      "The Reserve Bank of India\nریزرو بینک آف انڈیا"
    ],
    "correctAnswer": 3,
    "explanation": "ریزرو بینک آف انڈیا (آر بی آئی)، ملک کے مرکزی بینک کے طور پر، مالیاتی پالیسی کی تشکیل اور نفاذ کا ذمہ دار ہے، جس میں افراط زر کو کنٹرول کرنے اور قیمتوں میں استحکام کو یقینی بنانے کے لیے رقم کی فراہمی کا انتظام شامل ہے۔"
  },
  {
    "id": 517,
    "question": "One of the following organizes the procurement of food grains and sale of food grains through Public Distribution System (TSTET 29 June 2025)\nدرج ذیل میں سے ایک عوامی تقسیم کے نظام کے ذریعے اناج کی خریداری اور فروخت کا اہتمام کرتا ہے",
    "options": [
      "Commission for Agricultural Costs and Prices\nزرعی لاگت اور قیمتوں کا کمیشن",
      "Food Corporation of India\nفوڈ کارپوریشن آف انڈیا",
      "Local Market Committee\nمقامی مارکیٹ کمیٹی",
      "Agricultural Department of the State\nریاست کا محکمہ زراعت"
    ],
    "correctAnswer": 1,
    "explanation": "فوڈ کارپوریشن آف انڈیا (ایف سی آئی) حکومت ہند کی نوڈل ایجنسی ہے جو کسانوں سے کم از کم امدادی قیمت (ایم ایس پی) پر اناج خریدتی ہے، بفر اسٹاک کو برقرار رکھتی ہے، اور انہیں عوامی تقسیم کے نظام (پی ڈی ایس) کے لیے ریاستوں میں تقسیم کرتی ہے۔"
  },
  {
    "id": 518,
    "question": "A Postwoman Selling Milk to the consumers fall under this sector of the economy (TSTET 29 June 2025)\nصارفین کو دودھ فروخت کرنے والی ایک ڈاکیہ معیشت کے اس شعبے کے تحت آتی ہے",
    "options": [
      "Agricultural Sector\nزرعی شعبہ",
      "Service Sector\nخدمات کا شعبہ",
      "Secondary Sector\nثانوی شعبہ",
      "Quaternary Sector\nچہارم شعبہ"
    ],
    "correctAnswer": 1,
    "explanation": "مصنوعات کی فروخت اور ترسیل کی سرگرمی ایک خدمت ہے۔ لہذا، یہ تیسرے شعبے کے تحت آتا ہے، جسے خدمات کا شعبہ بھی کہا جاتا ہے، جو صارفین اور کاروبار کو خدمات فراہم کرتا ہے۔"
  },
  {
    "id": 519,
    "question": "Thomas Munro devised the Ryotwari Settlement System in this part of India (TSTET 29 June 2025)\nتھامس منرو نے ہندوستان کے اس حصے میں ریوٹواری سیٹلمنٹ سسٹم وضع کیا",
    "options": [
      "North-Western part\nشمال مغربی حصہ",
      "Northern India\nشمالی ہندوستان",
      "North-East state\nشمال مشرقی ریاست",
      "Southern and Western part\nجنوبی اور مغربی حصہ"
    ],
    "correctAnswer": 3,
    "explanation": "ریوٹواری نظام، ایک زمینی محصول کا نظام جہاں حکومت براہ راست کاشتکاروں (ریوٹوں) سے ٹیکس وصول کرتی تھی، بنیادی طور پر تھامس منرو نے مدراس اور بمبئی پریذیڈنسیوں کے کچھ حصوں میں متعارف کرایا تھا، جس میں جنوبی اور مغربی ہندوستان شامل تھا۔"
  },
  {
    "id": 520,
    "question": "Among the following, the Famous Scholar and Anthropologist who studied the tribes of Telangana (TSTET 29 June 2025)\nدرج ذیل میں سے، تلنگانہ کے قبائل کا مطالعہ کرنے والے مشہور اسکالر اور ماہر بشریات ہیں",
    "options": [
      "Furer Haimendorf\nفیورر ہائیمنڈورف",
      "Clifford Geertz\nکلفورڈ گیرٹز",
      "Margaret Mead\nمارگریٹ میڈ",
      "Irawati Karve\nاراوتی کاروے"
    ],
    "correctAnswer": 0,
    "explanation": "کرسٹوف وون فیورر-ہائیمنڈورف ایک آسٹرین ماہر بشریات تھے جنہوں نے 1940 کی دہائی میں ہندوستان میں مختلف قبائلی برادریوں پر وسیع نسلیاتی مطالعہ کیا، جن میں تلنگانہ کے علاقے کے گونڈ، چنچو، اور کونڈا ریڈی شامل تھے۔"
  },
  {
    "id": 521,
    "question": "The first ruler of Magadha Mahajanapada in the 6th century BC was (TSTET 29 June 2025)\nچھٹی صدی قبل مسیح میں مگدھ مہاجن پد کا پہلا حکمران کون تھا (TSTET 29 June 2025)",
    "options": [
      "Brihadratha\nبریہدرتھ",
      "Bimbisara\nبمبیسار",
      "Jarasandha\nجراسندھ",
      "Maha Padma Nanda\nمہا پدم نند"
    ],
    "correctAnswer": 1,
    "explanation": "بمبیسار، جو ہرینک خاندان سے تعلق رکھتا تھا، مگدھ سلطنت کا پہلا اہم بادشاہ مانا جاتا ہے۔ اس نے چھٹی صدی قبل مسیح میں حکومت کی اور فتوحات اور اسٹریٹجک شادیوں کے ذریعے اپنی سلطنت کو وسعت دی۔"
  },
  {
    "id": 522,
    "question": "The treaty in which France gave Alsace and Lorraine to Germany in 1871 was (TSTET 29 June 2025)\nوہ معاہدہ جس میں فرانس نے 1871 میں السیس اور لورین جرمنی کو دیا تھا (TSTET 29 June 2025)",
    "options": [
      "The treaty of Paris\nمعاہدہ پیرس",
      "The Treaty of Versailles\nمعاہدہ ورسائی",
      "The Treaty of Trianon\nمعاہدہ ٹریانون",
      "The Treaty of Frankfurt\nمعاہدہ فرینکفرٹ"
    ],
    "correctAnswer": 3,
    "explanation": "10 مئی 1871 کو دستخط شدہ معاہدہ فرینکفرٹ نے فرانکو-پرشین جنگ کا باضابطہ طور پر خاتمہ کیا۔ اس کی شرائط کے تحت، شکست خوردہ فرانس کو السیس اور لورین کے بیشتر علاقوں کو نئی متحد جرمن سلطنت کے حوالے کرنے پر مجبور کیا گیا۔"
  },
  {
    "id": 523,
    "question": "As per the French Constitution, these rights were considered as natural and inalienable rights A) Right to life B) Right to freedom of Speech C) Right to freedom of opinion D) Right to equality before law. Choose the correct answer (TSTET 29 June 2025)\nفرانسیسی آئین کے مطابق، ان حقوق کو فطری اور ناقابل تنسیخ حقوق سمجھا جاتا تھا A) زندگی کا حق B) تقریر کی آزادی کا حق C) رائے کی آزادی کا حق D) قانون کے سامنے مساوات کا حق۔ صحیح جواب منتخب کریں (TSTET 29 June 2025)",
    "options": [
      "A & B only\nصرف A اور B",
      "C & D only\nصرف C اور D",
      "A, B & D only\nصرف A، B اور D",
      "A, B, C & D\nA، B، C اور D"
    ],
    "correctAnswer": 3,
    "explanation": "1789 کا انسان اور شہری کے حقوق کا اعلامیہ، جو انقلاب فرانس کی ایک کلیدی دستاویز ہے، نے کئی حقوق کو فطری اور ناقابل تنسیخ قرار دیا۔ ان میں آزادی، جائیداد، سلامتی، تقریر اور رائے کی آزادی، اور قانون کے سامنے تمام شہریوں کی مساوات شامل تھی، جس میں فطری طور پر زندگی کا حق بھی شامل ہے۔"
  },
  {
    "id": 524,
    "question": "This sculpture of Michelangelo depicts Mary holding the dead body of Christ (TSTET 29 June 2025)\nمائیکل اینجلو کا یہ مجسمہ مریم کو مسیح کے جسد خاکی کو تھامے ہوئے دکھاتا ہے (TSTET 29 June 2025)",
    "options": [
      "The Pieta\nدی پیئٹا",
      "Dying Slave\nڈائنگ سلیو",
      "Sistine Chapel ceiling\nسسٹین چیپل کی چھت",
      "Madonna of Bruges\nمیڈونا آف بروجز"
    ],
    "correctAnswer": 0,
    "explanation": "پیئٹا مائیکل اینجلو کا نشاۃ ثانیہ کے مجسمہ سازی کا ایک شاہکار ہے۔ یہ سینٹ پیٹرز باسیلیکا میں رکھا گیا ہے، اور اس میں حضرت مریم کو مصلوب ہونے کے بعد حضرت عیسیٰ کے جسد خاکی کو گود میں لیے ہوئے دکھایا گیا ہے۔"
  },
  {
    "id": 525,
    "question": "The teachings of Buddha and his followers have been compiled in A) Sutta Pitaka B) Abhidhamma Pitaka C) Vinaya Pitaka D) Gnana Pitaka Choose the correct answer (TSTET 29 June 2025)\nبدھ اور ان کے پیروکاروں کی تعلیمات کو مرتب کیا گیا ہے A) ست پٹک B) ابھیدھم پٹک C) ونے پٹک D) گیان پٹک صحیح جواب کا انتخاب کریں (TSTET 29 June 2025)",
    "options": [
      "A, C & D only\nصرف A، C اور D",
      "A, B & C only\nصرف A، B اور C",
      "A, B, C & D\nA، B، C اور D",
      "A & B only\nصرف A اور B"
    ],
    "correctAnswer": 1,
    "explanation": "ابتدائی بدھ مت کے مقدس صحیفوں کو تری پٹک ('تین ٹوکریاں') کے نام سے جانا جاتا ہے۔ یہ ست پٹک (بدھ کے خطبات)، ونے پٹک (راہبانہ نظم و ضبط کے اصول)، اور ابھیدھم پٹک (فلسفیانہ متون) پر مشتمل ہیں۔ 'گیان پٹک' ان تینوں میں سے ایک نہیں ہے۔"
  },
  {
    "id": 526,
    "question": "In 1947, a large number of campaigns were organized to integrate Hyderabad State into Indian Union under the leadership of (TSTET 29 June 2025)\n1947 میں، ریاست حیدرآباد کو انڈین یونین میں ضم کرنے کے لیے کس کی قیادت میں بڑی تعداد میں مہمات چلائی گئیں (TSTET 29 June 2025)",
    "options": [
      "Swami Ramananda Tirtha\nسوامی رامانند تیرتھ",
      "Makdum Moinuddin\nمخدوم معین الدین",
      "Ravi Narayana Reddy\nروی نارائن ریڈی",
      "P.V. Narasimha Rao\nپی وی نرسمہا راؤ"
    ],
    "correctAnswer": 0,
    "explanation": "سوامی رامانند تیرتھ حیدرآباد اسٹیٹ کانگریس کے اہم رہنما تھے اور انہوں نے نظام کی حکمرانی کے خلاف عوامی تحریک کی قیادت کی، جس میں ریاست حیدرآباد کو نئی آزاد انڈین یونین میں ضم کرنے کی وکالت کی گئی۔"
  },
  {
    "id": 527,
    "question": "The International Cricket Council (ICC) was shifted from London to (TSTET 24 May 2024)\nانٹرنیشنل کرکٹ کونسل (آئی سی سی) کو لندن سے کہاں منتقل کیا گیا تھا (TSTET 24 May 2024)",
    "options": [
      "Qatar\nقطر",
      "Sydney\nسڈنی",
      "Dubai\nدبئی",
      "Mumbai\nممبئی"
    ],
    "correctAnswer": 2,
    "explanation": "انٹرنیشنل کرکٹ کونسل (آئی سی سی) کا ہیڈ کوارٹر 1909 میں اپنے قیام سے لے کر 2005 تک لندن کے لارڈز میں واقع تھا۔ اگست 2005 میں، آئی سی سی نے اپنا مرکزی دفتر دبئی، متحدہ عرب امارات میں منتقل کر دیا۔"
  },
  {
    "id": 528,
    "question": "One among the following was NOT the women members of the Constituent Assembly (TSTET 24 May 2024)\nمندرجہ ذیل میں سے کون دستور ساز اسمبلی کی خاتون رکن نہیں تھیں (TSTET 24 May 2024)",
    "options": [
      "Sucheta Kriplani\nسچیتا کرپلانی",
      "Sarojini Naidu\nسروجنی نائیڈو",
      "Durgabai Deshmukh\nدرگابائی دیشمکھ",
      "Annie Besant\nاینی بیسنٹ"
    ],
    "correctAnswer": 3,
    "explanation": "سچیتا کرپلانی، سروجنی نائیڈو، اور درگابائی دیشمکھ ہندوستان کی دستور ساز اسمبلی کی ممتاز رکن تھیں۔ اینی بیسنٹ، جو ہندوستان کی جدوجہد آزادی کی ایک اہم شخصیت تھیں، 1933 میں انتقال کر گئیں اور اس طرح وہ اسمبلی کا حصہ نہیں تھیں، جو 1946 میں تشکیل دی گئی تھی۔"
  },
  {
    "id": 529,
    "question": "In India, the Government will not be run on the basis of any religion. Citizen will have complete freedom to follow any religion or no religion at all. It means (TSTET 24 May 2024)\nہندوستان میں، حکومت کسی بھی مذہب کی بنیاد پر نہیں چلائی جائے گی۔ شہریوں کو کسی بھی مذہب کی پیروی کرنے یا نہ کرنے کی مکمل آزادی ہوگی۔ اس کا مطلب ہے (TSTET 24 May 2024)",
    "options": [
      "India is a Sovereign State\nہندوستان ایک خودمختار ریاست ہے",
      "India is a Socialist State\nہندوستان ایک سوشلسٹ ریاست ہے",
      "India is a Republican State\nہندوستان ایک جمہوری ریاست ہے",
      "India is a Secular State\nہندوستان ایک سیکولر ریاست ہے"
    ],
    "correctAnswer": 3,
    "explanation": "یہ اصول سیکولرازم کی وضاحت کرتا ہے، جو ہندوستانی آئین کا ایک بنیادی اصول ہے۔ ایک سیکولر ریاست کا کوئی سرکاری مذہب نہیں ہوتا اور یہ یقینی بناتی ہے کہ تمام شہریوں کو اپنی پسند کے کسی بھی مذہب پر عمل کرنے، اس کا اقرار کرنے اور اس کی تبلیغ کرنے کی آزادی ہے، یا کوئی مذہب نہ ماننے کی آزادی ہے۔"
  },
  {
    "id": 530,
    "question": "If there are differences between the two houses of the Indian parliament in passing any ordinary law, then the final decision shall be taken in (TSTET 24 May 2024)\nاگر کسی عام قانون کو منظور کرنے میں ہندوستانی پارلیمنٹ کے دونوں ایوانوں کے درمیان اختلافات ہوں، تو حتمی فیصلہ کہاں کیا جائے گا (TSTET 24 May 2024)",
    "options": [
      "The Lok Sabha Only\nصرف لوک سبھا",
      "The Rajya Sabha only\nصرف راجیہ سبھا",
      "The joint session of the Parliament\nپارلیمنٹ کا مشترکہ اجلاس",
      "The Cabinet meeting headed by the Prime Minister of India\nہندوستان کے وزیر اعظم کی سربراہی میں کابینہ کا اجلاس"
    ],
    "correctAnswer": 2,
    "explanation": "ہندوستانی آئین کا آرٹیکل 108 پارلیمنٹ کے دونوں ایوانوں کے درمیان کسی عام بل پر تعطل کو حل کرنے کا ایک طریقہ کار فراہم کرتا ہے۔ ہندوستان کا صدر لوک سبھا اور راجیہ سبھا دونوں کا مشترکہ اجلاس بلا سکتا ہے، جہاں بل کو سادہ اکثریت سے منظور کیا جاتا ہے۔"
  },
  {
    "id": 531,
    "question": "Swami Vivekananda set up the Ramakrishna Mission with these objectives (TSTET 24 May 2024)\nسوامی وویکانند نے رام کرشن مشن کو ان مقاصد کے ساتھ قائم کیا (TSTET 24 May 2024)",
    "options": [
      "To make the people believe in one Supreme God and to revive a reformed Hindu Religion\nلوگوں کو ایک اعلیٰ خدا پر یقین دلانا اور ایک اصلاح شدہ ہندو مذہب کو زندہ کرنا",
      "To make the people engage in Social Work and Social Service for International Reconstruction\nلوگوں کو بین الاقوامی تعمیر نو کے لیے سماجی کام اور سماجی خدمت میں مشغول کرنا",
      "To revive a reformed Hindu Religion and to engage in Social Work and Social Service for national Construction\nایک اصلاح شدہ ہندو مذہب کو زندہ کرنا اور قومی تعمیر کے لیے سماجی کام اور سماجی خدمت میں مشغول ہونا",
      "To preach ahimsa and to revive a reformed Hindu Religion\nاہنسا کی تبلیغ کرنا اور ایک اصلاح شدہ ہندو مذہب کو زندہ کرنا"
    ],
    "correctAnswer": 2,
    "explanation": "سوامی وویکانند نے رام کرشن مشن کی بنیاد 'آتمانو موکشارتم جگت ہتایا چا' (اپنی نجات اور دنیا کی فلاح و بہبود کے لیے) کے دوہرے نعرے کے ساتھ رکھی۔ اس نے ویدانت فلسفہ کو پھیلانے اور سماجی خدمات کی سرگرمیوں جیسے آفات میں امداد، تعلیم، اور صحت کی دیکھ بھال میں ایک روحانی عمل کے طور پر مشغول ہونے پر توجہ مرکوز کی، جس سے قومی ترقی میں حصہ ڈالا گیا۔"
  },
  {
    "id": 532,
    "question": "The Muslim social reformer who started a journal Muallim - e - Niswan for writing women's issues (TSTET 24 May 2024)\nوہ مسلم سماجی مصلح جس نے خواتین کے مسائل پر لکھنے کے لیے ایک جریدہ 'معلم نسواں' شروع کیا (TSTET 24 May 2024)",
    "options": [
      "Mohib Hussain\nمحب حسین",
      "Abdul Quayyum\nعبد القیوم",
      "Sir Syed Ahmed Khan\nسر سید احمد خان",
      "Nazar Hussain\nنذر حسین"
    ],
    "correctAnswer": 0,
    "explanation": "محب حسین، حیدرآباد کے ایک سماجی مصلح، 19ویں صدی کے آخر میں خواتین کی تعلیم اور حقوق کے زبردست حامی تھے۔ 1892 میں، انہوں نے اس مقصد کی حمایت کے لیے ہفتہ وار جریدہ 'معلم نسواں' (خواتین کی استاد) کی بنیاد رکھی۔"
  },
  {
    "id": 533,
    "question": "It shall be the duty of every citizen to maintain 'the unity and Sovereignty of India', is a (TSTET 24 May 2024)\n'ہندوستان کے اتحاد اور خودمختاری' کو برقرار رکھنا ہر شہری کا فرض ہوگا، یہ ہے ایک (TSTET 24 May 2024)",
    "options": [
      "Fundamental Right\nبنیادی حق",
      "Fundamental Duty of a citizen\nشہری کا بنیادی فرض",
      "Directive principles of State Policy\nریاستی پالیسی کے رہنما اصول",
      "Economic Right of a citizen of India\nہندوستان کے شہری کا اقتصادی حق"
    ],
    "correctAnswer": 1,
    "explanation": "یہ ہندوستانی آئین کے آرٹیکل 51A(c) میں درج ایک بنیادی فرض ہے۔ یہ ہر شہری کو 'ہندوستان کی خودمختاری، اتحاد اور سالمیت کو برقرار رکھنے اور اس کی حفاظت کرنے' کا پابند کرتا ہے۔"
  },
  {
    "id": 534,
    "question": "By 15th August, 1947, these three princely states had not agreed to sign the 'Instrument of Accession' with India (TSTET 24 May 2024)\n15 اگست 1947 تک، ان تین شاہی ریاستوں نے ہندوستان کے ساتھ 'الحاق کی دستاویز' پر دستخط کرنے پر اتفاق نہیں کیا تھا (TSTET 24 May 2024)",
    "options": [
      "Hyderabad, Kashmir and Jodhpur\nحیدرآباد، کشمیر اور جودھ پور",
      "Kashmir, Mysore and Hyderabad\nکشمیر، میسور اور حیدرآباد",
      "Raipur, Kashmir and Hyderabad\nرائے پور، کشمیر اور حیدرآباد",
      "Hyderabad, Kashmir and Junagadh\nحیدرآباد، کشمیر اور جوناگڑھ"
    ],
    "correctAnswer": 3,
    "explanation": "ہندوستان کی آزادی کے وقت، بیشتر شاہی ریاستیں ہندوستان میں شامل ہو گئیں۔ تاہم، حیدرآباد، جموں و کشمیر، اور جوناگڑھ کے حکمرانوں نے ابتدائی طور پر الحاق کے خلاف فیصلہ کیا، جس کی وجہ سے بعد میں انہیں ضم کرنے کے لیے سیاسی اور فوجی مداخلتیں ہوئیں۔"
  },
  {
    "id": 535,
    "question": "The Election Commission of India is an (TSTET 24 May 2024)\nالیکشن کمیشن آف انڈیا ایک ہے (TSTET 24 May 2024)",
    "options": [
      "Quasi-judicial body\nنیم عدالتی ادارہ",
      "Judicial body\nعدالتی ادارہ",
      "Autonomous Constitutional body\nخود مختار آئینی ادارہ",
      "Statutory body\nقانونی ادارہ"
    ],
    "correctAnswer": 2,
    "explanation": "الیکشن کمیشن آف انڈیا آئین کے آرٹیکل 324 کے تحت قائم کیا گیا ہے۔ یہ ایک آزاد اور خود مختار ادارہ ہے، جو انتظامی کنٹرول سے آزاد ہے، تاکہ آزادانہ اور منصفانہ انتخابات کو یقینی بنایا جا سکے، جو اسے ایک خود مختار آئینی ادارہ بناتا ہے۔"
  },
  {
    "id": 536,
    "question": "From among the following, identify the country located in the Indian Ocean (TSTET 24 May 2024)\nمندرجہ ذیل میں سے، بحر ہند میں واقع ملک کی نشاندہی کریں (TSTET 24 May 2024)",
    "options": [
      "Madagascar\nمڈغاسکر",
      "Taiwan\nتائیوان",
      "Bermuda\nبرمودا",
      "Jamaica\nجمیکا"
    ],
    "correctAnswer": 0,
    "explanation": "مڈغاسکر ایک بڑا جزیرہ نما ملک ہے جو بحر ہند میں افریقی براعظم کے جنوب مشرقی ساحل پر واقع ہے۔ تائیوان بحرالکاہل میں ہے، جبکہ برمودا اور جمیکا بحر اوقیانوس میں ہیں۔"
  },
  {
    "id": 537,
    "question": "The rate of GST for Televisions is 18%. The maximum retail price of a TV is Rs 70800. The amount of Tax to be paid to the Government for purchasing TV is (TSTET 24 May 2024)\nٹیلی ویژن کے لیے جی ایس ٹی کی شرح 18% ہے۔ ایک ٹی وی کی زیادہ سے زیادہ خوردہ قیمت 70800 روپے ہے۔ ٹی وی خریدنے پر حکومت کو ادا کیے جانے والے ٹیکس کی رقم ہے (TSTET 24 May 2024)",
    "options": [
      "Rs 12744",
      "Rs 10800",
      "Rs 9000",
      "Rs 11474"
    ],
    "correctAnswer": 1,
    "explanation": "زیادہ سے زیادہ خوردہ قیمت (MRP) جی ایس ٹی سمیت ہوتی ہے۔ فرض کریں کہ بنیادی قیمت P ہے۔ تو P + (P کا 18%) = 70800، جس کا مطلب ہے 1.18P = 70800۔ بنیادی قیمت P = 70800 / 1.18 = 60000۔ جی ایس ٹی کی رقم بنیادی قیمت کا 18% ہے: 0.18 × 60000 = 10800 روپے۔"
  },
  {
    "id": 538,
    "question": "One among the following is NOT a Characteristic feature of Developing Countries (TSTET 24 May 2024)\nمندرجہ ذیل میں سے ایک ترقی پذیر ممالک کی خصوصیت نہیں ہے (TSTET 24 May 2024)",
    "options": [
      "Having Low Per Capita Income\nکم فی کس آمدنی کا ہونا",
      "the problem of Unemployment and underemployment is observed\nبے روزگاری اور جزوی بے روزگاری کا مسئلہ دیکھا جاتا ہے",
      "Presence of excessive dependence on agriculture\nزراعت پر ضرورت سے زیادہ انحصار کی موجودگی",
      "Having Low growth rate of population\nآبادی کی کم شرح نمو کا ہونا"
    ],
    "correctAnswer": 3,
    "explanation": "ترقی پذیر ممالک کی عام طور پر خصوصیات کم فی کس آمدنی، زیادہ بے روزگاری، اور زراعت پر بھاری انحصار ہیں۔ تاہم، ان میں اکثر آبادی کی شرح نمو زیادہ ہوتی ہے۔ آبادی کی کم شرح نمو ترقی یافتہ ممالک کی زیادہ خصوصیت ہے۔"
  },
  {
    "id": 539,
    "question": "Among the following, the rate of interest is higher on these deposits in India (TSTET 24 May 2024)\nمندرجہ ذیل میں سے، ہندوستان میں ان ڈپازٹس پر شرح سود زیادہ ہے (TSTET 24 May 2024)",
    "options": [
      "Saving Deposits\nسیونگ ڈپازٹس",
      "Current Deposits\nکرنٹ ڈپازٹس",
      "Fixed Deposits\nفکسڈ ڈپازٹس",
      "Recurring Deposits\nریکرنگ ڈپازٹس"
    ],
    "correctAnswer": 2,
    "explanation": "عام طور پر، بینک فکسڈ ڈپازٹس (FDs) پر سب سے زیادہ شرح سود پیش کرتے ہیں۔ اس کی وجہ یہ ہے کہ جمع کنندہ ایک مقررہ مدت کے لیے بینک کے پاس رقم رکھنے پر راضی ہوتا ہے، جس سے بینک کو قرض دینے کے لیے مستحکم فنڈز ملتے ہیں۔ کرنٹ اکاؤنٹس پر عام طور پر کوئی سود نہیں ملتا۔"
  },
  {
    "id": 540,
    "question": "In India, the biggest commercial bank among the following is (TSTET 24 May 2024)\nہندوستان میں، مندرجہ ذیل میں سے سب سے بڑا تجارتی بینک ہے (TSTET 24 May 2024)",
    "options": [
      "Reserve Bank of India\nریزرو بینک آف انڈیا",
      "State bank of India\nاسٹیٹ بینک آف انڈیا",
      "Axis bank\nایکسس بینک",
      "ICICI Bank\nآئی سی آئی سی آئی بینک"
    ],
    "correctAnswer": 1,
    "explanation": "اسٹیٹ بینک آف انڈیا (SBI) اثاثوں، ڈپازٹس اور شاخوں کی تعداد کے لحاظ سے ہندوستان کا سب سے بڑا پبلک سیکٹر اور تجارتی بینک ہے۔ ریزرو بینک آف انڈیا مرکزی بینک ہے، تجارتی بینک نہیں۔"
  },
  {
    "id": 541,
    "question": "These Mountains form the Southern boundary of Europe (TSTET 30 June 2025)\nیہ پہاڑ یورپ کی جنوبی سرحد بناتے ہیں (TSTET 30 June 2025)",
    "options": [
      "The Eural Mountains\nاورال کے پہاڑ",
      "The Caucasian Mountains\nقفقاز کے پہاڑ",
      "Pyrenees Mountains\nپیرینیز کے پہاڑ",
      "Carpathian Mountains\nکارپیتھین کے پہاڑ"
    ],
    "correctAnswer": 1,
    "explanation": "قفقاز کے پہاڑ، جو بحیرہ اسود اور بحیرہ کیسپین کے درمیان واقع ہیں، جغرافیائی طور پر مشرقی یورپ اور مغربی ایشیا کو الگ کرنے والی قدرتی سرحد سمجھے جاتے ہیں، اس طرح اس خطے میں یورپ کی جنوبی سرحد بناتے ہیں۔"
  },
  {
    "id": 542,
    "question": "Most of the rocks under the soil in Telangana Consists of Granite, which are (TSTET 30 June 2025)\nتلنگانہ میں مٹی کے نیچے زیادہ تر چٹانیں گرینائٹ پر مشتمل ہیں، جو ہیں (TSTET 30 June 2025)",
    "options": [
      "Loose and Pervious Rocks\nڈھیلی اور قابل نفوذ چٹانیں",
      "Hard and impervious Rocks\nسخت اور ناقابل نفوذ چٹانیں",
      "Sedimentary Rocks\nتلچھٹی چٹانیں",
      "Metamorphic Rocks\nتبدیل شدہ چٹانیں"
    ],
    "correctAnswer": 1,
    "explanation": "تلنگانہ دکن سطح مرتفع کا حصہ ہے، جو بنیادی طور پر گرینائٹ جیسی سخت، کرسٹلائن آتشی چٹانوں پر مشتمل ہے۔ گرینائٹ گھنا، سخت اور ناقابل نفوذ ہونے کے لیے جانا جاتا ہے، جس کا مطلب ہے کہ یہ پانی کو آسانی سے گزرنے نہیں دیتا۔"
  },
  {
    "id": 543,
    "question": "The Himalayan Mountains which stretch over the northern borders of India are of (TSTET 30 June 2025)\nہمالیہ کے پہاڑ جو ہندوستان کی شمالی سرحدوں پر پھیلے ہوئے ہیں، وہ ہیں (TSTET 30 June 2025)",
    "options": [
      "Old Fold Mountains\nپرانے تہہ دار پہاڑ",
      "Residual Mountains\nبقیہ پہاڑ",
      "Volcanic Mountains\nآتش فشانی پہاڑ",
      "Young fold Mountains\nنوجوان تہہ دار پہاڑ"
    ],
    "correctAnswer": 3,
    "explanation": "ہمالیہ کو نوجوان تہہ دار پہاڑوں کے طور پر درجہ بندی کیا جاتا ہے کیونکہ وہ ہندوستانی اور یوریشیائی ٹیکٹونک پلیٹوں کے ٹکراؤ سے بنے تھے، یہ عمل ارضیاتی وقت میں نسبتاً حال ہی میں شروع ہوا تھا۔ وہ ساختی طور پر تہہ دار ہیں اور اب بھی بلند ہو رہے ہیں۔"
  },
  {
    "id": 544,
    "question": "Among the following, the river that originated in the Betul district of Madhya Pradesh and flows towards west (TSTET 30 June 2025)\nمندرجہ ذیل میں سے، وہ دریا جو مدھیہ پردیش کے بیتول ضلع سے نکلتا ہے اور مغرب کی طرف بہتا ہے (TSTET 30 June 2025)",
    "options": [
      "Narmada\nنرمدا",
      "Saraswati\nسرسوتی",
      "Tapati\nتاپتی",
      "Chambal\nچمبل"
    ],
    "correctAnswer": 2,
    "explanation": "دریائے تاپتی مدھیہ پردیش کے بیتول ضلع کے ملتائی ریزرو فاریسٹ سے نکلتا ہے۔ یہ جزیرہ نما کے بڑے دریاؤں میں سے ایک ہے جو مغرب کی طرف ایک رفٹ وادی سے بہتا ہے اور آخر کار بحیرہ عرب میں جا گرتا ہے۔"
  },
  {
    "id": 545,
    "question": "This involves 'conversion of water vapour into droplets of water or crystals of ice' (TSTET 30 June 2025)\nاس میں 'آبی بخارات کا پانی کے قطروں یا برف کے کرسٹل میں تبدیل ہونا' شامل ہے (TSTET 30 June 2025)",
    "options": [
      "Evaporation\nعمل تبخیر",
      "Transpirtation\nعمل تنفس",
      "Humidity\nنمی",
      "Condensation\nعمل تکثیف"
    ],
    "correctAnswer": 3,
    "explanation": "عمل تکثیف وہ طبعی عمل ہے جس میں ہوا میں موجود آبی بخارات ٹھنڈا ہونے پر مائع پانی کے قطروں یا ٹھوس برف کے کرسٹل میں تبدیل ہو جاتے ہیں۔ یہ عمل بادلوں اور شبنم کی تشکیل کے لیے ضروری ہے۔"
  },
  {
    "id": 546,
    "question": "The winds that blow continuously and regularly above the world pressure belts are known as (TSTET 30 June 2025)\nوہ ہوائیں جو دنیا کی پریشر بیلٹس کے اوپر مسلسل اور باقاعدگی سے چلتی ہیں، کہلاتی ہیں (TSTET 30 June 2025)",
    "options": [
      "Hot Local Winds\nگرم مقامی ہوائیں",
      "Cold Local Winds\nسرد مقامی ہوائیں",
      "Seasonal Winds\nموسمی ہوائیں",
      "Planetary Winds\nسیاراتی ہوائیں"
    ],
    "correctAnswer": 3,
    "explanation": "سیاراتی ہوائیں، جنہیں مروجہ ہوائیں بھی کہا جاتا ہے، بڑے پیمانے پر ہوا کے نمونے ہیں جو سال بھر کرہ ارض پر مسلسل چلتی ہیں۔ یہ زمین کی گردش اور ہوا کے دباؤ میں فرق کی وجہ سے چلتی ہیں، اور ان میں تجارتی ہوائیں، مغربی ہوائیں، اور قطبی مشرقی ہوائیں شامل ہیں۔"
  },
  {
    "id": 547,
    "question": "This type of forests are found in the regions very near to the equator and close to the tropics (TSTET 30 June 2025)\nاس قسم کے جنگلات خط استوا کے بہت قریب اور منطقہ حارہ کے قریب کے علاقوں میں پائے جاتے ہیں (TSTET 30 June 2025)",
    "options": [
      "Temperate Evergreen Forests\nمعتدل سدا بہار جنگلات",
      "Coniferous Forests\nصنوبری جنگلات",
      "Tropical Evergreen Forests\nگرم مرطوب سدا بہار جنگلات",
      "Tropical Deciduous Forests\nگرم مرطوب خزاں رسیدہ جنگلات"
    ],
    "correctAnswer": 2,
    "explanation": "گرم مرطوب سدا بہار جنگلات، یا بارانی جنگلات، خط استوا کے قریب اور منطقہ حارہ کے اندر گرم اور مرطوب علاقوں میں پائے جاتے ہیں۔ ان علاقوں میں سال بھر بھاری بارش ہوتی ہے، جس کی وجہ سے گھنے، کثیر سطحی جنگلات ہوتے ہیں جن میں پودوں اور جانوروں کی زندگی کی وسیع اقسام ہوتی ہیں۔"
  },
  {
    "id": 548,
    "question": "According to Kyoto Protocol, its aim of 'bringing down the release of Green House Gases to less than 5.2%' to be achieved between these years (TSTET 30 June 2025)\nکیوٹو پروٹوکول کے مطابق، اس کا ہدف 'گرین ہاؤس گیسوں کے اخراج کو 5.2% سے کم کرنا' ان سالوں کے درمیان حاصل کیا جانا تھا (TSTET 30 June 2025)",
    "options": [
      "1997 and 2008\n1997 اور 2008",
      "2008 and 2012\n2008 اور 2012",
      "1997 and 2005\n1997 اور 2005",
      "2013 and 2025\n2013 اور 2025"
    ],
    "correctAnswer": 1,
    "explanation": "کیوٹو پروٹوکول کی پہلی وابستگی کی مدت 2008 سے 2012 تک تھی۔ اس مدت کے دوران، شریک صنعتی ممالک نے 1990 کی سطح کے مقابلے میں اپنے اجتماعی گرین ہاؤس گیسوں کے اخراج کو اوسطاً 5.2% تک کم کرنے کا عہد کیا۔"
  },
  {
    "id": 549,
    "question": "The main food crop in north and north-western part of India is (TSTET 30 June 2025)\nہندوستان کے شمالی اور شمال مغربی حصے میں اہم غذائی فصل ہے (TSTET 30 June 2025)",
    "options": [
      "Paddy\nدھان",
      "Maize\nمکئی",
      "Wheat\nگیہوں",
      "Jowar\nجوار"
    ],
    "correctAnswer": 2,
    "explanation": "گیہوں ہندوستان کی شمالی اور شمال مغربی ریاستوں، جیسے پنجاب، ہریانہ، اتر پردیش، اور راجستھان کے لوگوں کے لیے بنیادی غذائی فصل ہے۔ یہ ربیع کی فصل ہے جو اس خطے کی ٹھنڈی سردیوں اور دھوپ والی بہار میں پروان چڑھتی ہے۔"
  },
  {
    "id": 550,
    "question": "In the third phase of Green Revolution i.e. 1990s to the present, the Indian farmers (TSTET 30 June 2025)\nسبز انقلاب کے تیسرے مرحلے یعنی 1990 کی دہائی سے لے کر آج تک، ہندوستانی کسانوں نے (TSTET 30 June 2025)",
    "options": [
      "have invested heavily on getting irrigation facilities to their farms\nاپنے کھیتوں کو آبپاشی کی سہولیات فراہم کرنے پر بھاری سرمایہ کاری کی ہے",
      "began to use the High Yielding Variety Seeds\nزیادہ پیداوار دینے والے بیجوں کا استعمال شروع کیا",
      "have increased using Chemical fertilizers and machinery such as tractors\nکیمیائی کھادوں اور ٹریکٹر جیسی مشینری کا استعمال بڑھا دیا ہے",
      "have sold their produce to markets within the country and to the Government through the FCI\nاپنی پیداوار کو ملک کے اندر بازاروں اور ایف سی آئی کے ذریعے حکومت کو فروخت کیا ہے"
    ],
    "correctAnswer": 3,
    "explanation": "1990 کی دہائی کے بعد ہندوستانی زراعت کا مرحلہ زیادہ سے زیادہ مارکیٹ انضمام کی خصوصیت رکھتا ہے۔ سبز انقلاب سے پیداوار میں اضافے کی وجہ سے، کسانوں نے نہ صرف خود استعمال کے لیے پیداوار کی بلکہ ایک قابل فروخت فاضل بھی پیدا کیا، جسے کھلی منڈیوں اور فوڈ کارپوریشن آف انڈیا (FCI) جیسی سرکاری خریداری ایجنسیوں کو فروخت کیا گیا۔"
  },
  {
    "id": 551,
    "question": "In India. most of the Jute mills are located in West Bengal mainly along the banks of this river (TSTET 30 June 2025)\nہندوستان میں، زیادہ تر جوٹ ملیں مغربی بنگال میں بنیادی طور پر اس دریا کے کنارے واقع ہیں (TSTET 30 June 2025)",
    "options": [
      "Hugli\nہگلی",
      "Ganges\nگنگا",
      "Mahanadi\nمہاندی",
      "Brahmaputra\nبرہم پترا"
    ],
    "correctAnswer": 0,
    "explanation": "ہندوستان کی زیادہ تر جوٹ ملیں دریائے ہوگلی (Hugli) کے کناروں پر واقع ہیں، جو گنگا کی ایک شاخ ہے۔ یہ خطہ خام جوٹ پیدا کرنے والے علاقوں سے قربت، پروسیسنگ کے لیے پانی کی دستیابی، اور نقل و حمل کے لیے کولکتہ بندرگاہ تک رسائی کی وجہ سے مثالی ہے۔"
  },
  {
    "id": 552,
    "question": "Which one of the following term is used to describe trade between two or more countries? (TSTET 30 June 2025)\nدو یا دو سے زیادہ ممالک کے درمیان تجارت کو بیان کرنے کے لیے مندرجہ ذیل میں سے کون سی اصطلاح استعمال ہوتی ہے؟ (TSTET 30 June 2025)",
    "options": [
      "Local trade\nمقامی تجارت",
      "Mutual trade\nباہمی تجارت",
      "Internal trade\nاندرونی تجارت",
      "International trade\nبین الاقوامی تجارت"
    ],
    "correctAnswer": 3,
    "explanation": "بین الاقوامی تجارت قومی سرحدوں کے پار سامان، خدمات اور سرمائے کا تبادلہ ہے۔ یہ تجارت کی وہ شکل ہے جو دو یا دو سے زیادہ مختلف ممالک کے درمیان ہوتی ہے۔"
  },
  {
    "id": 553,
    "question": "India is critically deficient in the reserve and production of this mineral (TSTET 30 June 2025)\nہندوستان اس معدنیات کے ذخائر اور پیداوار میں شدید کمی کا شکار ہے (TSTET 30 June 2025)",
    "options": [
      "Bauxite\nباکسائٹ",
      "Iron ore\nلوہا",
      "Manganese\nمینگنیج",
      "Copper\nتانبا"
    ],
    "correctAnswer": 3,
    "explanation": "ہندوستان کے تانبے کے ذخائر اس کی گھریلو طلب کو پورا کرنے کے لیے ناکافی ہیں، جس کی وجہ سے ملک اس ضروری صنعتی دھات کا خالص درآمد کنندہ ہے۔ جبکہ ہندوستان میں لوہے، باکسائٹ اور مینگنیج کے کافی ذخائر ہیں، تانبے کی پیداوار کھپت سے بہت پیچھے ہے۔"
  },
  {
    "id": 554,
    "question": "This organisation was established in 1960 for the development of the roads of strategic importance in the northern and north eastern border areas of India (TSTET 30 June 2025)\nیہ تنظیم 1960 میں ہندوستان کے شمالی اور شمال مشرقی سرحدی علاقوں میں اسٹریٹجک اہمیت کی سڑکوں کی ترقی کے لیے قائم کی گئی تھی (TSTET 30 June 2025)",
    "options": [
      "National Highway Authority of India\nنیشنل ہائی وے اتھارٹی آف انڈیا",
      "Border Roads Organisation\nبارڈر روڈز آرگنائزیشن",
      "Central Public Works Department\nسنٹرل پبلک ورکس ڈیپارٹمنٹ",
      "The State Public Works Department\nاسٹیٹ پبلک ورکس ڈیپارٹمنٹ"
    ],
    "correctAnswer": 1,
    "explanation": "بارڈر روڈز آرگنائزیشن (BRO) مئی 1960 میں ہندوستان کے اسٹریٹجک سرحدی علاقوں میں سڑکوں کے نیٹ ورک کو تیار کرنے اور برقرار رکھنے کے مخصوص مقصد کے ساتھ تشکیل دی گئی تھی۔ یہ فوجی نقل و حرکت کو بڑھانے اور دور دراز علاقوں میں اقتصادی ترقی کو فروغ دینے میں اہم کردار ادا کرتی ہے۔"
  },
  {
    "id": 555,
    "question": "In Manipur. Maira Paibi was originated as a movement to prevent (TSTET 30 June 2025)\nمنی پور میں، میرا پائیبی کی تحریک کس چیز کو روکنے کے لیے شروع ہوئی تھی (TSTET 30 June 2025)",
    "options": [
      "public disorder due to alcohol abuse in 1970s\n1970 کی دہائی میں شراب نوشی کی وجہ سے عوامی بے امنی",
      "the army from entering into their region\nفوج کو اپنے علاقے میں داخل ہونے سے",
      "the terrorist groups from entering into their region\nدہشت گرد گروہوں کو اپنے علاقے میں داخل ہونے سے",
      "the tribal people from entering into their region\nقبائلی لوگوں کو اپنے علاقے میں داخل ہونے سے"
    ],
    "correctAnswer": 0,
    "explanation": "منی پور میں میرا پائیبی تحریک، جس کی قیادت خواتین نے کی، ابتدائی طور پر 1970 کی دہائی کے آخر میں شراب نوشی اور منشیات کے استعمال کے خلاف سماجی اصلاحی مہم کے طور پر ابھری۔ وقت گزرنے کے ساتھ، اس کا دائرہ کار انسانی حقوق کی خلاف ورزیوں اور ریاستی مظالم کے خلاف احتجاج تک پھیل گیا۔"
  },
  {
    "id": 556,
    "question": "Among the following, the permanent members of the UN Security Council were (TSTET 30 June 2025)\nمندرجہ ذیل میں سے، اقوام متحدہ کی سلامتی کونسل کے مستقل اراکین تھے (TSTET 30 June 2025)",
    "options": [
      "USA, UK, Russia, Germany and France\nامریکہ، برطانیہ، روس، جرمنی اور فرانس",
      "USA, UK, Russia, China and UAE\nامریکہ، برطانیہ، روس، چین اور متحدہ عرب امارات",
      "USA, UK, Russia, Canada and France\nامریکہ، برطانیہ، روس، کینیڈا اور فرانس",
      "USA, UK, Russia, China and France\nامریکہ، برطانیہ، روس، چین اور فرانس"
    ],
    "correctAnswer": 3,
    "explanation": "اقوام متحدہ کی سلامتی کونسل کے پانچ مستقل اراکین، جنہیں اکثر P5 کہا جاتا ہے، چین، فرانس، روس، برطانیہ اور امریکہ ہیں۔ یہ ممالک دوسری جنگ عظیم کے بڑے اتحادی فاتح تھے اور کونسل کے اندر ویٹو پاور رکھتے ہیں۔"
  },
  {
    "id": 557,
    "question": "In 1992, India accepted the Policy of Liberalisation forcefully because of the following organisation (TSTET 30 June 2025)\n1992 میں، ہندوستان نے مندرجہ ذیل تنظیم کی وجہ سے لبرلائزیشن کی پالیسی کو زبردستی قبول کیا (TSTET 30 June 2025)",
    "options": [
      "World Bank\nورلڈ بینک",
      "NABARD\nنابارڈ",
      "International Monetary Fund\nانٹرنیشنل مانیٹری فنڈ",
      "Asian Development Bank\nایشین ڈیولپمنٹ بینک"
    ],
    "correctAnswer": 2,
    "explanation": "1991 میں، ہندوستان کو ادائیگیوں کے توازن کے شدید بحران کا سامنا کرنا پڑا، جس نے اسے بین الاقوامی مالیاتی فنڈ (IMF) سے بیل آؤٹ حاصل کرنے پر مجبور کیا۔ آئی ایم ایف کا قرض ہندوستان کی طرف سے ساختی اقتصادی اصلاحات کے نفاذ پر مشروط تھا، جس میں اس کی معیشت کی لبرلائزیشن بھی شامل تھی۔"
  },
  {
    "id": 558,
    "question": "In India, the first coalition Government was formed under this Prime Minister (TSTET 30 June 2025)\nہندوستان میں، پہلی مخلوط حکومت اس وزیر اعظم کے تحت تشکیل دی گئی تھی (TSTET 30 June 2025)",
    "options": [
      "Atal Bihari Vajpayee\nاٹل بہاری واجپائی",
      "Manmohan Singh\nمنموہن سنگھ",
      "Vishwanath Prathap Singh\nوشوناتھ پرتاپ سنگھ",
      "P.V. Narasimha Rao\nپی وی نرسمہا راؤ"
    ],
    "correctAnswer": 2,
    "explanation": "دیے گئے اختیارات میں سے، 1989 میں وی پی سنگھ کی قیادت میں نیشنل فرنٹ حکومت ہندوستانی سیاست میں نمایاں مخلوط دور کا آغاز کرتی ہے۔ یہ ایک اقلیتی حکومت تھی جو پارٹیوں کے اتحاد سے تشکیل دی گئی تھی، جسے باہر سے بی جے پی اور بائیں بازو دونوں کی حمایت حاصل تھی۔"
  },
  {
    "id": 559,
    "question": "This amendment Act of the Indian Constitution provides for disqualification of public representatives on the grounds of defection from one political party to another political party (TSTET 30 June 2025)\nہندوستانی آئین کا یہ ترمیمی ایکٹ عوامی نمائندوں کو ایک سیاسی جماعت سے دوسری سیاسی جماعت میں انحراف کی بنیاد پر نااہل قرار دینے کا انتظام کرتا ہے (TSTET 30 June 2025)",
    "options": [
      "61st Amendment Act\n61 واں ترمیمی ایکٹ",
      "52nd Amendment Act\n52 واں ترمیمی ایکٹ",
      "86th Amendment Act\n86 واں ترمیمی ایکٹ",
      "42nd Amendment Act\n42 واں ترمیمی ایکٹ"
    ],
    "correctAnswer": 1,
    "explanation": "1985 کے 52 ویں ترمیمی ایکٹ نے آئین میں دسویں شیڈول کا اضافہ کیا، جسے عام طور پر انسداد انحراف قانون کے نام سے جانا جاتا ہے۔ یہ منتخب اراکین کی نااہلی کی وجوہات بیان کرتا ہے جو اپنی سیاسی جماعت سے منحرف ہوتے ہیں۔"
  },
  {
    "id": 560,
    "question": "Among the following, the President of India who was elected to the office of President more than once (TSTET 30 June 2025)\nمندرجہ ذیل میں سے، ہندوستان کے وہ صدر جو ایک سے زیادہ بار صدر کے عہدے پر منتخب ہوئے (TSTET 30 June 2025)",
    "options": [
      "Sarvepally Radha Krishna\nسروے پلی رادھا کرشنن",
      "Neelam Sanjeeva Reddy\nنیلم سنجیوا ریڈی",
      "Zakir Hussain\nذاکر حسین",
      "Dr. Rajendra Prasad\nڈاکٹر راجندر پرساد"
    ],
    "correctAnswer": 3,
    "explanation": "ڈاکٹر راجندر پرساد، ہندوستان کے پہلے صدر، واحد شخص ہیں جنہوں نے 1950 سے 1962 تک دو مکمل مدتوں کے لیے یہ عہدہ سنبھالا۔"
  },
  {
    "id": 561,
    "question": "From among the following, these were borrowed from the Irish Constitution (TSTET 30 June 2025)\nمندرجہ ذیل میں سے، یہ آئرش آئین سے مستعار لیے گئے تھے",
    "options": [
      "Fundamental Rights\nبنیادی حقوق",
      "Fundamental Duties of the Citizen of India\nہندوستان کے شہری کے بنیادی فرائض",
      "Directive Principles of State Policy\nریاستی پالیسی کے رہنما اصول",
      "Preamble of the Indian Constitution\nہندوستانی آئین کا دیباچہ"
    ],
    "correctAnswer": 2,
    "explanation": "ہندوستانی آئین کے بنانے والوں نے ریاستی پالیسی کے رہنما اصولوں (DPSP) کے تصور کے لیے 1937 کے آئرش آئین سے تحریک حاصل کی۔ یہ اصول ریاست کے لیے سماجی اور اقتصادی انصاف کو فروغ دینے کے لیے رہنما خطوط کے طور پر کام کرتے ہیں۔"
  },
  {
    "id": 562,
    "question": "Which of the following writ is issued by the higher court to the lower court to transfer a case pending with the latter to itself (TSTET 30 June 2025)\nمندرجہ ذیل میں سے کونسی رٹ اعلیٰ عدالت کی طرف سے نچلی عدالت کو جاری کی جاتی ہے تاکہ مؤخر الذکر کے پاس زیر التوا مقدمہ خود کو منتقل کیا جا سکے",
    "options": [
      "Habeas Corpus\nحبس بے جا",
      "Mandamus\nمینڈیمس",
      "Quo Warranto\nکو وارنٹو",
      "Certiorari\nسرٹیوراری"
    ],
    "correctAnswer": 3,
    "explanation": "سرٹیوراری کی رٹ ایک اعلیٰ عدالت کی طرف سے کسی نچلی عدالت یا ٹریبونل کو جاری کی جاتی ہے۔ اسے نچلی عدالت کے فیصلے کو منسوخ کرنے یا زیر التوا مقدمہ کو اعلیٰ عدالت میں غور کے لیے منتقل کرنے کے لیے استعمال کیا جا سکتا ہے۔"
  },
  {
    "id": 563,
    "question": "These Countries were deemed as the original members of the United Nations Organisation (TSTET 30 June 2025)\nان ممالک کو اقوام متحدہ کی تنظیم کے اصل اراکین سمجھا جاتا تھا",
    "options": [
      "The Five permanent members of the UN Security Council only\nصرف اقوام متحدہ کی سلامتی کونسل کے پانچ مستقل اراکین",
      "The Allied powers who fought the Second World War only\nصرف دوسری جنگ عظیم لڑنے والی اتحادی طاقتیں",
      "The Countries that signed the UN Charter at the San Francisco Conference on June 25, 1945\nوہ ممالک جنہوں نے 25 جون 1945 کو سان فرانسسکو کانفرنس میں اقوام متحدہ کے چارٹر پر دستخط کیے تھے",
      "The five big nations of the world in area only\nصرف رقبے کے لحاظ سے دنیا کی پانچ بڑی قومیں"
    ],
    "correctAnswer": 2,
    "explanation": "اقوام متحدہ کے اصل اراکین وہ 51 ممالک ہیں جنہوں نے 1945 میں سان فرانسسکو کانفرنس میں شرکت کی اور اقوام متحدہ کے چارٹر پر دستخط کیے، یا اس سے قبل 1942 کے اقوام متحدہ کے اعلامیے پر دستخط کیے تھے۔ انہوں نے سب سے پہلے چارٹر کی توثیق کی تھی۔"
  },
  {
    "id": 564,
    "question": "As per the article 248 of the Indian Constitution, the Union Government is empowered to make laws on these subjects (TSTET 30 June 2025)\nہندوستانی آئین کے آرٹیکل 248 کے مطابق، مرکزی حکومت کو ان مضامین پر قانون بنانے کا اختیار ہے",
    "options": [
      "Central Subjects\nمرکزی مضامین",
      "Concurrent Subjects\nمشترکہ مضامین",
      "State Subjects\nریاستی مضامین",
      "Residual Subjects\nبقیہ مضامین"
    ],
    "correctAnswer": 3,
    "explanation": "ہندوستان کے آئین کا آرٹیکل 248 قانون سازی کے بقیہ اختیارات یونین پارلیمنٹ کو دیتا ہے۔ اس کا مطلب ہے کہ پارلیمنٹ کو کسی بھی ایسے معاملے پر قانون بنانے کا خصوصی اختیار ہے جو ریاستی فہرست یا مشترکہ فہرست میں درج نہیں ہے۔"
  },
  {
    "id": 565,
    "question": "Across many countries, Greenpeace Movement has taken up the impact of (TSTET 30 June 2025)\nبہت سے ممالک میں، گرین پیس موومنٹ نے اس کے اثرات کا بیڑا اٹھایا ہے",
    "options": [
      "Food Crisis in Africa\nافریقہ میں خوراک کا بحران",
      "Climate Change\nموسمیاتی تبدیلی",
      "Gender inequality\nصنفی عدم مساوات",
      "Concentration of wealth in the hands of a few people\nچند لوگوں کے ہاتھوں میں دولت کا ارتکاز"
    ],
    "correctAnswer": 1,
    "explanation": "گرین پیس ایک بین الاقوامی ماحولیاتی تنظیم ہے جو وسیع پیمانے پر مسائل پر مہم چلاتی ہے، جس میں موسمیاتی تبدیلی ایک مرکزی توجہ کا مرکز ہے۔ وہ قابل تجدید توانائی کی طرف منتقلی اور عالمی حدت کا مقابلہ کرنے کے لیے جنگلات کے تحفظ کی وکالت کرتے ہیں۔"
  },
  {
    "id": 566,
    "question": "In this war, the USA invented and used the Chemical weapons including Napalm Bombs (TSTET 30 June 2025)\nاس جنگ میں، امریکہ نے کیمیائی ہتھیاروں کا ایجاد اور استعمال کیا جن میں نیپام بم بھی شامل تھے",
    "options": [
      "Vietnam War\nویتنام کی جنگ",
      "First World War\nپہلی جنگ عظیم",
      "Second World War\nدوسری جنگ عظیم",
      "The Afghan War\nافغان جنگ"
    ],
    "correctAnswer": 0,
    "explanation": "ویتنام جنگ کے دوران، امریکی فوج نے کیمیائی ہتھیاروں کا وسیع پیمانے پر استعمال کیا۔ اس میں نیپام جیسے آتش گیر ہتھیار اور ایجنٹ اورنج جیسے کیمیائی ڈیفولینٹ شامل تھے، جن کے تباہ کن اور دیرپا اثرات مرتب ہوئے۔"
  },
  {
    "id": 567,
    "question": "In 1972, this agreement was signed between India and Pakisthan under the leadership of Zulfiker Ali Bhutto and Indira Gandhi (TSTET 30 June 2025)\n1972 میں، یہ معاہدہ ذوالفقار علی بھٹو اور اندرا گاندھی کی قیادت میں ہندوستان اور پاکستان کے درمیان طے پایا",
    "options": [
      "Tashkent Agreement\nمعاہدہ تاشقند",
      "Simla Agreement\nشملہ معاہدہ",
      "Indus Water Treaty\nسندھ طاس معاہدہ",
      "Lahore Declaration\nاعلان لاہور"
    ],
    "correctAnswer": 1,
    "explanation": "شملہ معاہدہ 2 جولائی 1972 کو شملہ، ہندوستان میں ہندوستانی وزیر اعظم اندرا گاندھی اور پاکستانی صدر ذوالفقار علی بھٹو نے دستخط کیا تھا۔ یہ معاہدہ 1971 میں بنگلہ دیش کی آزادی کی جنگ کے بعد ہوا تھا۔"
  },
  {
    "id": 568,
    "question": "The Tenth Schedule of the Indian Constitution explains (TSTET 30 June 2025)\nہندوستانی آئین کا دسواں شیڈول وضاحت کرتا ہے",
    "options": [
      "About Panchayat raj and Nagarapalika systems\nپنچایتی راج اور ناگرپالیکا نظام کے بارے میں",
      "About allocation of seats for each state of India in Rajya Sabha\nراجیہ سبھا میں ہندوستان کی ہر ریاست کے لیے نشستوں کی تقسیم کے بارے میں",
      "About the Administration and control of Scheduled areas and Scheduled tribes\nشیڈولڈ علاقوں اور شیڈولڈ قبائل کے انتظام اور کنٹرول کے بارے میں",
      "The grounds and procedures for disqualification of public representatives\nعوامی نمائندوں کی نااہلی کی وجوہات اور طریقہ کار"
    ],
    "correctAnswer": 3,
    "explanation": "ہندوستانی آئین کا دسواں شیڈول، جسے انسداد انحراف قانون بھی کہا جاتا ہے، ان منتخب قانون سازوں کو نااہل قرار دینے کے عمل اور بنیادوں کو بیان کرتا ہے جو ایک سیاسی جماعت سے دوسری میں منحرف ہو جاتے ہیں۔"
  },
  {
    "id": 569,
    "question": "One among the following example DOES NOT fall under Unorganised Sector (TSTET 30 June 2025)\nمندرجہ ذیل میں سے ایک مثال غیر منظم شعبے کے تحت نہیں آتی ہے",
    "options": [
      "A farmer cultivating his land\nایک کسان اپنی زمین پر کاشتکاری کر رہا ہے",
      "A daily wage labourer working for his contractor\nایک یومیہ اجرت کا مزدور اپنے ٹھیکیدار کے لیے کام کر رہا ہے",
      "A doctor treating a patient in the Government hospital\nایک ڈاکٹر سرکاری ہسپتال میں مریض کا علاج کر رہا ہے",
      "A handloom weaver working on a loom in her house\nایک ہینڈلوم بنکر اپنے گھر میں لوم پر کام کر رہی ہے"
    ],
    "correctAnswer": 2,
    "explanation": "سرکاری ہسپتال کا ڈاکٹر منظم شعبے کا حصہ ہے۔ اس شعبے کی خصوصیت باقاعدہ روزگار، مقررہ کام کے اوقات، اور سماجی تحفظ کے فوائد جیسے پروویڈنٹ فنڈ اور میڈیکل چھٹی ہے، جو غیر منظم شعبے (مثلاً یومیہ اجرت، چھوٹے پیمانے پر کاشتکاری) میں نہیں ہوتے۔"
  },
  {
    "id": 570,
    "question": "At present, this Sector contributes most to the Indian economy (TSTET 30 June 2025)\nاس وقت، یہ شعبہ ہندوستانی معیشت میں سب سے زیادہ حصہ ڈالتا ہے",
    "options": [
      "Service Sector\nخدمات کا شعبہ",
      "Agricultural Sector\nزرعی شعبہ",
      "Manufacturing Sector\nمینوفیکچرنگ سیکٹر",
      "Small Scale Industrial Sector\nچھوٹے پیمانے کا صنعتی شعبہ"
    ],
    "correctAnswer": 0,
    "explanation": "خدمات کا شعبہ، یا تیسرا شعبہ، ہندوستان کی مجموعی گھریلو پیداوار (GDP) میں سب سے بڑا حصہ رکھتا ہے۔ اس میں آئی ٹی، فنانس، تجارت، مہمان نوازی، اور مواصلات جیسی وسیع سرگرمیاں شامل ہیں، اور یہ ملک کی اقتصادی ترقی کا بنیادی محرک رہا ہے۔"
  },
  {
    "id": 571,
    "question": "The Human Development Index of China in 2024 is 0.797. Then China falls under this category (TSTET 30 June 2025)\n2024 میں چین کا انسانی ترقی کا اشاریہ 0.797 ہے۔ تب چین اس زمرے میں آتا ہے",
    "options": [
      "Very High Human Development\nبہت اعلی انسانی ترقی",
      "High Human Development\nاعلی انسانی ترقی",
      "Medium Human Development\nدرمیانی انسانی ترقی",
      "Low Human Development\nکم انسانی ترقی"
    ],
    "correctAnswer": 1,
    "explanation": "اقوام متحدہ کے ترقیاتی پروگرام (UNDP) کی درجہ بندی کے مطابق، 0.700 اور 0.799 کے درمیان انسانی ترقی کے اشاریہ (HDI) کی قدر والے ممالک کو 'اعلی انسانی ترقی' کے زمرے میں رکھا جاتا ہے۔ 0.800 اور اس سے اوپر کا HDI 'بہت اعلی' ہوتا ہے۔"
  },
  {
    "id": 572,
    "question": "In Dairy Production, the farmer is having his own cattle shed in the village. Having cattle shed in the village comes under this factor of Production (TSTET 30 June 2025)\nڈیری پیداوار میں، کسان کا گاؤں میں اپنا مویشیوں کا باڑہ ہے۔ گاؤں میں مویشیوں کا باڑہ ہونا پیداوار کے اس عنصر کے تحت آتا ہے",
    "options": [
      "Land\nزمین",
      "Labour\nمحنت",
      "Physical Capital\nطبعی سرمایہ",
      "Working Capital\nورکنگ کیپیٹل"
    ],
    "correctAnswer": 0,
    "explanation": "معاشیات میں، پیداوار کے ایک عنصر کے طور پر 'زمین' میں صرف زمین ہی نہیں بلکہ تمام قدرتی وسائل شامل ہیں۔ اس تناظر میں، گاؤں کا وہ پلاٹ جس پر مویشیوں کا باڑہ کھڑا ہے، 'زمین' کے عنصر کا حصہ سمجھا جاتا ہے۔"
  },
  {
    "id": 573,
    "question": "National Income is also called as (TSTET 30 June 2025)\nقومی آمدنی کو یہ بھی کہا جاتا ہے",
    "options": [
      "NNP at factor Cost\nلاگت پر خالص قومی پیداوار (NNP)",
      "GDP at Factor Cost\nلاگت پر مجموعی گھریلو پیداوار (GDP)",
      "NDP at Factor Cost\nلاگت پر خالص گھریلو پیداوار (NDP)",
      "NNP at Market Price\nبازاری قیمت پر خالص قومی پیداوار (NNP)"
    ],
    "correctAnswer": 0,
    "explanation": "قومی آمدنی کی تعریف لاگت پر خالص قومی پیداوار (NNP at FC) کے طور پر کی جاتی ہے۔ یہ ایک اکاؤنٹنگ سال میں کسی ملک کے عام باشندوں کی طرف سے اجرت، کرایہ، سود اور منافع کی شکل میں حاصل کی گئی تمام آمدنیوں کا مجموعہ ہے۔"
  },
  {
    "id": 574,
    "question": "The multinational Companies enter the Global Market with the help of (TSTET 30 June 2025)\nکثیر القومی کمپنیاں عالمی منڈی میں اس کی مدد سے داخل ہوتی ہیں",
    "options": [
      "UNESCO\nیونیسکو",
      "WTO\nڈبلیو ٹی او",
      "UNO\nیو این او",
      "UNDP\nیو این ڈی پی"
    ],
    "correctAnswer": 1,
    "explanation": "عالمی تجارتی تنظیم (WTO) بین الاقوامی تجارتی قوانین کو ترتیب دے کر اور نافذ کر کے عالمی تجارت کو سہولت فراہم کرتی ہے۔ یہ ایک زیادہ پیش قیاسی اور کھلی عالمی منڈی بنانے میں مدد کرتی ہے، جو کثیر القومی کمپنیوں کے لیے سرحدوں کے پار اپنے کاروبار کو چلانے اور پھیلانے کے لیے سازگار ہے۔"
  },
  {
    "id": 575,
    "question": "Consider the following statements related to Consumer Price Index (CPI)\nA) Different CPIs are published by the Government of India\nB) The CPI is used to calculate the D.A. to be paid to the Government Employees\nC) The CPI measures only changes in prices of a few selected consumer goods at the retail price\nIdentify the true statements from the given options (TSTET 30 June 2025)\nصارفین کی قیمت کے اشاریہ (CPI) سے متعلق درج ذیل بیانات پر غور کریں\nA) حکومت ہند مختلف CPIs شائع کرتی ہے\nB) CPI کا استعمال سرکاری ملازمین کو ادا کیے جانے والے مہنگائی بھتے (D.A.) کا حساب لگانے کے لیے کیا جاتا ہے\nC) CPI صرف خوردہ قیمت پر چند منتخب صارفی اشیاء کی قیمتوں میں تبدیلیوں کی پیمائش کرتا ہے\nدیے گئے اختیارات میں سے درست بیانات کی نشاندہی کریں",
    "options": [
      "Only A is true\nصرف A درست ہے",
      "Only A and B are true\nصرف A اور B درست ہیں",
      "A, B and C are true\nA، B اور C درست ہیں",
      "Only B is true\nصرف B درست ہے"
    ],
    "correctAnswer": 2,
    "explanation": "تینوں بیانات درست ہیں۔ A) ہندوستان کئی CPIs شائع کرتا ہے (مثلاً، صنعتی کارکنوں، زرعی مزدوروں کے لیے)۔ B) سرکاری ملازمین کے لیے مہنگائی الاؤنس (D.A.) صنعتی کارکنوں کے لیے CPI سے منسلک ہے۔ C) CPI صارفین کی طرف سے اشیاء اور خدمات کی ایک مخصوص ٹوکری کے لیے ادا کی جانے والی قیمتوں میں اوسط تبدیلی کی پیمائش کرتا ہے۔"
  },
  {
    "id": 576,
    "question": "During the inflationary situation, the Government uses import and export policy to (TSTET 30 June 2025)\nافراط زر کی صورت حال کے دوران، حکومت درآمد اور برآمد کی پالیسی کو اس لیے استعمال کرتی ہے",
    "options": [
      "regulate the prices of essential goods\nضروری اشیاء کی قیمتوں کو منظم کرنے کے لیے",
      "increase the prices of essential goods so as to help the farmers\nضروری اشیاء کی قیمتوں میں اضافہ کرنے کے لیے تاکہ کسانوں کی مدد ہو سکے",
      "reduce imports to increase the prices of essential goods and help the rich people\nدرآمدات کو کم کرنے کے لیے تاکہ ضروری اشیاء کی قیمتوں میں اضافہ ہو اور امیر لوگوں کی مدد ہو سکے",
      "help the business people by increasing the prices of essential goods\nکاروباری لوگوں کی مدد کرنے کے لیے ضروری اشیاء کی قیمتوں میں اضافہ کر کے"
    ],
    "correctAnswer": 0,
    "explanation": "افراط زر (بڑھتی ہوئی قیمتوں) کا مقابلہ کرنے کے لیے، حکومت اپنی تجارتی پالیسیوں کو ایڈجسٹ کر سکتی ہے۔ ضروری اشیاء کی درآمدات میں اضافہ یا برآمدات کو محدود کرکے، یہ گھریلو سپلائی کو بڑھا سکتی ہے، جو قیمتوں کو مستحکم کرنے یا کم کرنے اور افراط زر کو روکنے میں مدد دیتی ہے۔"
  },
  {
    "id": 577,
    "question": "The prices of goods sold through Public Distribution System (PDS) are less than that of the market price, then the difference in price is borne by the (TSTET 30 June 2025)\nعوامی تقسیم کے نظام (PDS) کے ذریعے فروخت ہونے والی اشیاء کی قیمتیں بازاری قیمت سے کم ہوتی ہیں، تو قیمت میں فرق کون برداشت کرتا ہے",
    "options": [
      "The Gram Panchayat\nگرام پنچایت",
      "Government\nحکومت",
      "supplier\nسپلائر",
      "Cooperative Societies\nکوآپریٹو سوسائٹیز"
    ],
    "correctAnswer": 1,
    "explanation": "بازاری قیمت اور PDS کے ذریعے فروخت ہونے والی اشیاء کی سبسڈی والی قیمت کے درمیان فرق کو فوڈ سبسڈی کہا جاتا ہے۔ یہ سبسڈی حکومت کی طرف سے غذائی تحفظ کو یقینی بنانے اور معاشرے کے غریب طبقات کے لیے ضروری اشیاء کو سستی بنانے کے لیے برداشت کی جاتی ہے۔"
  },
  {
    "id": 578,
    "question": "Ravi wants to deposit certain amount of money in the bank to get maximum interest. Then, he has to deposit his amount in this account: (TSTET 30 June 2025)\nروی زیادہ سے زیادہ سود حاصل کرنے کے لیے بینک میں کچھ رقم جمع کرنا چاہتا ہے۔ تب، اسے اپنی رقم اس اکاؤنٹ میں جمع کرنی ہوگی:",
    "options": [
      "Savings Account\nسیونگز اکاؤنٹ",
      "Small Savings Deposit\nچھوٹی بچت کی ڈپازٹ",
      "Current Deposit Account\nکرنٹ ڈپازٹ اکاؤنٹ",
      "Fixed Deposit Account\nفکسڈ ڈپازٹ اکاؤنٹ"
    ],
    "correctAnswer": 3,
    "explanation": "ایک فکسڈ ڈپازٹ (FD) اکاؤنٹ معیاری بینک ڈپازٹ کے اختیارات میں سب سے زیادہ شرح سود پیش کرتا ہے کیونکہ رقم ایک مقررہ مدت کے لیے جمع کی جاتی ہے، جس سے بینک کو یقینی فنڈز ملتے ہیں۔ کرنٹ اکاؤنٹس پر بہت کم یا کوئی سود نہیں ملتا، جبکہ سیونگز اکاؤنٹس FDs کے مقابلے میں کم شرح سود پیش کرتے ہیں۔"
  },
  {
    "id": 579,
    "question": "In British India, the Zamindari system was primarily implemented in (TSTET 30 June 2025)\nبرطانوی ہندوستان میں، زمینداری نظام بنیادی طور پر یہاں نافذ کیا گیا تھا",
    "options": [
      "Bombay and Madras Presidencies\nبمبئی اور مدراس پریزیڈنسیز",
      "Bengal, Bihar, and parts of Northern India\nبنگال، بہار، اور شمالی ہندوستان کے کچھ حصے",
      "Punjab and Sindh\nپنجاب اور سندھ",
      "Travancore and Cochin\nتراونکور اور کوچین"
    ],
    "correctAnswer": 1,
    "explanation": "زمینداری نظام، جسے مستقل تصفیہ بھی کہا جاتا ہے، 1793 میں لارڈ کارنوالس نے متعارف کرایا تھا۔ اسے سب سے پہلے بنگال پریزیڈنسی میں نافذ کیا گیا تھا، جس میں موجودہ دور کا بنگال، بہار، اور اتر پردیش اور اڈیشہ کے کچھ حصے شامل تھے۔"
  },
  {
    "id": 580,
    "question": "Which one of the following statement best describes the 'Policy of Doctrine of Lapse'? (TSTET 30 June 2025)\nمندرجہ ذیل میں سے کون سا بیان 'ڈاکٹرائن آف لیپس کی پالیسی' کی بہترین وضاحت کرتا ہے؟",
    "options": [
      "Any ruler without his heir, his kingdom would come under company's rule\nکوئی بھی حکمران جس کا کوئی وارث نہ ہو، اس کی بادشاہت کمپنی کی حکمرانی میں آ جائے گی",
      "Any Indian ruler should accept Residents of the British East India Company\nکسی بھی ہندوستانی حکمران کو برٹش ایسٹ انڈیا کمپنی کے ریزیڈنٹس کو قبول کرنا چاہیے",
      "The Indian ruler should maintain certain army for the sake of British East India Company\nہندوستانی حکمران کو برٹش ایسٹ انڈیا کمپنی کی خاطر ایک مخصوص فوج رکھنی چاہیے",
      "The Indian ruler should accept the British East India Company to trade with India without any payment of Tax\nہندوستانی حکمران کو برٹش ایسٹ انڈیا کمپنی کو بغیر کسی ٹیکس کی ادائیگی کے ہندوستان کے ساتھ تجارت کرنے کی اجازت دینی چاہیے"
    ],
    "correctAnswer": 0,
    "explanation": "ڈاکٹرائن آف لیپس لارڈ ڈلہوزی کی طرف سے وضع کردہ الحاق کی پالیسی تھی۔ اس میں کہا گیا تھا کہ اگر برطانوی بالادستی کے تحت کسی شاہی ریاست کا حکمران قدرتی مرد وارث کے بغیر مر جاتا ہے، تو اس کی بادشاہت ختم ہو جائے گی، یعنی اسے انگریز اپنے قبضے میں لے لیں گے۔"
  },
  {
    "id": 581,
    "question": "'When we inflict sorrow on other living beings, we add to our load of sins'. Who taught this? (TSTET 30 June 2025)\n'جب ہم دوسرے جانداروں کو دکھ پہنچاتے ہیں، تو ہم اپنے گناہوں کا بوجھ بڑھاتے ہیں'۔ یہ کس نے سکھایا؟",
    "options": [
      "Vardhamana Mahaveera\nوردھمان مہاویر",
      "Gautama Buddha\nگوتم بدھ",
      "M. K. Gandhi\nایم کے گاندھی",
      "Ajita Kesakambalin\nاجیتا کیساکمبلن"
    ],
    "correctAnswer": 0,
    "explanation": "یہ تعلیم جین مت میں اہنسا (عدم تشدد) کے بنیادی اصول کو بیان کرتی ہے، جسے وردھمان مہاویر نے پھیلایا تھا۔ جین مت کسی بھی جاندار کو نقصان نہ پہنچانے کو سب سے زیادہ اہمیت دیتا ہے، کیونکہ ایسا کرنے سے منفی کرم (گناہ) جمع ہوتا ہے۔"
  },
  {
    "id": 582,
    "question": "'Agricultural transformation was not simply an economic issue but a political, social and economic transformation of rural sector', said by (TSTET 30 June 2025)\n'زرعی تبدیلی صرف ایک معاشی مسئلہ نہیں تھی بلکہ دیہی شعبے کی سیاسی، سماجی اور معاشی تبدیلی تھی'، یہ کس نے کہا تھا",
    "options": [
      "Mahatma Gandhi\nمہاتما گاندھی",
      "Lal Bahadur Shastri\nلال بہادر شاستری",
      "Sardar Vallabhbhai Patel\nسردار ولبھ بھائی پٹیل",
      "Jawaharlal Nehru\nجواہر لال نہرو"
    ],
    "correctAnswer": 3,
    "explanation": "جواہر لال نہرو، ہندوستان کے پہلے وزیر اعظم کے طور پر، زرعی اصلاحات (جیسے زمینی اصلاحات اور کمیونٹی ڈویلپمنٹ پروجیکٹس) کو قوم کی مکمل سماجی-سیاسی اور اقتصادی جدیدیت کے لیے لازمی سمجھتے تھے، نہ کہ صرف ایک تنگ اقتصادی سرگرمی کے طور پر۔"
  },
  {
    "id": 583,
    "question": "Among the following, the prominent Americans who actively campaigned for political equality and freedom of thought for all people (TSTET 30 June 2025)\nمندرجہ ذیل میں سے، وہ ممتاز امریکی جنہوں نے تمام لوگوں کے لیے سیاسی مساوات اور فکر کی آزادی کے لیے فعال طور پر مہم چلائی",
    "options": [
      "Tom Paine and Thomas Jefferson\nٹام پین اور تھامس جیفرسن",
      "Woodrow Wilson and Thomas Jefferson\nووڈرو ولسن اور تھامس جیفرسن",
      "Tom Paine and George Washington\nٹام پین اور جارج واشنگٹن",
      "George Washington and Thomas Jefferson\nجارج واشنگٹن اور تھامس جیفرسن"
    ],
    "correctAnswer": 0,
    "explanation": "تھامس پین کا پمفلٹ 'کامن سینس' اور تھامس جیفرسن کی تحریر کردہ اعلانِ آزادی امریکی انقلاب کی بنیاد تھے۔ دونوں افراد قدرتی حقوق، سیاسی مساوات اور انفرادی آزادی جیسے روشن خیالی کے نظریات کے بااثر حامی تھے۔"
  },
  {
    "id": 584,
    "question": "The Unification of Italy was accomplished by Victor Emmanuel II with the occupation of (TSTET 30 June 2025)\nاٹلی کا اتحاد وکٹر ایمانوئل دوم نے اس پر قبضہ کرکے مکمل کیا",
    "options": [
      "Two Sicilies\nدو سسلیاں",
      "Rome\nروم",
      "Papal State\nپاپائی ریاست",
      "Lombardy\nلومبارڈی"
    ],
    "correctAnswer": 1,
    "explanation": "اطالوی اتحاد (Risorgimento) کا آخری عمل 1870 میں روم پر قبضے کے ساتھ ہوا۔ پوپ کی حفاظت کرنے والے فرانسیسی فوجیوں کے انخلا کے بعد، اطالوی افواج نے شہر پر قبضہ کر لیا، جو پھر بادشاہ وکٹر ایمانوئل دوم کے تحت متحدہ اٹلی کا دارالحکومت بن گیا۔"
  },
  {
    "id": 585,
    "question": "On 17th September 1948, this princely state of India was integrated into the Indian Union. (TSTET 30 June 2025)\n17 ستمبر 1948 کو، ہندوستان کی اس شاہی ریاست کو ہندوستانی یونین میں ضم کر دیا گیا۔",
    "options": [
      "Hyderabad\nحیدرآباد",
      "Baroda\nبڑودہ",
      "Jammu & Kashmir\nجموں و کشمیر",
      "Junagadh\nجوناگڑھ"
    ],
    "correctAnswer": 0,
    "explanation": "حیدرآباد کی شاہی ریاست، جس پر نظام کی حکومت تھی، 17 ستمبر 1948 کو 'آپریشن پولو' کے نام سے مشہور فوجی کارروائی کے بعد ہندوستانی یونین میں ضم ہوگئی۔"
  },
  {
    "id": 586,
    "question": "This act of the British Parliament transferred the powers of the East India Company to the British Crown. (TSTET 30 June 2025)\nبرطانوی پارلیمنٹ کے اس ایکٹ نے ایسٹ انڈیا کمپنی کے اختیارات برطانوی تاج کو منتقل کر دیے۔",
    "options": [
      "The Government of India Act, 1909\nحکومت ہند ایکٹ، 1909",
      "The Government of India Act, 1919\nحکومت ہند ایکٹ، 1919",
      "The Government of India Act, 1858\nحکومت ہند ایکٹ، 1858",
      "The Indian Independence Act of 1947\nہندوستانی آزادی ایکٹ 1947"
    ],
    "correctAnswer": 2,
    "explanation": "1857 کی ہندوستانی بغاوت کے بعد، برطانوی پارلیمنٹ نے حکومت ہند ایکٹ 1858 منظور کیا، جس نے ایسٹ انڈیا کمپنی کو تحلیل کر دیا اور اس کے انتظامی اختیارات، علاقے اور مسلح افواج براہ راست برطانوی تاج کو منتقل کر دیے، جس سے براہ راست برطانوی حکمرانی (راج) کا دور شروع ہوا۔"
  },
  {
    "id": 587,
    "question": "In 1906, a group of Muslim landlords and Nawabs formed the All India Muslim League at (TSTET 30 June 2025)\n1906 میں، مسلم زمینداروں اور نوابوں کے ایک گروہ نے آل انڈیا مسلم لیگ کی بنیاد یہاں رکھی",
    "options": [
      "Karachi\nکراچی",
      "Mumbai\nممبئی",
      "Dhaka\nڈھاکہ",
      "Khaimkarni\nخیم کرنی"
    ],
    "correctAnswer": 2,
    "explanation": "آل انڈیا مسلم لیگ کی بنیاد 30 دسمبر 1906 کو ڈھاکہ (اب بنگلہ دیش میں) میں آل انڈیا محمدن ایجوکیشنل کانفرنس کے سالانہ اجلاس کے دوران رکھی گئی تھی۔ لیگ ہندوستان میں مسلمانوں کے سیاسی حقوق اور مفادات کے تحفظ کے لیے بنائی گئی تھی۔"
  },
  {
    "id": 588,
    "question": "In 1941, USA Joined the Second World War because (TSTET 30 June 2025)\n1941 میں، امریکہ دوسری جنگ عظیم میں شامل ہوا کیونکہ",
    "options": [
      "Japan attacked the pearl harbor of USA\nجاپان نے امریکہ کے پرل ہاربر پر حملہ کیا",
      "German troops sunk the commercial ship, Lusitania of USA\nجرمن فوجیوں نے امریکہ کے تجارتی جہاز لوسیٹانیا کو ڈبو دیا",
      "USA wanted to stop spreading of Communism\nامریکہ کمیونزم کے پھیلاؤ کو روکنا چاہتا تھا",
      "Britain and France requested USA to join the war\nبرطانیہ اور فرانس نے امریکہ سے جنگ میں شامل ہونے کی درخواست کی"
    ],
    "correctAnswer": 0,
    "explanation": "امریکہ نے دوسری جنگ عظیم میں باضابطہ طور پر اس وقت داخلہ لیا جب شاہی جاپانی بحریہ نے 7 دسمبر 1941 کو ہوائی کے پرل ہاربر میں امریکی بحری اڈے پر اچانک حملہ کیا۔ لوسیٹانیا کا ڈوبنا پہلی جنگ عظیم میں امریکی داخلے کا ایک اہم واقعہ تھا، دوسری جنگ عظیم میں نہیں۔"
  },
  {
    "id": 589,
    "question": "By this policy/Commission recommendation, Continuous and Comprehensive Evaluation (CCE) was made mandatory to introduce in schools as an important step of examination reforms and for the qualitative improvement in the education system (TSTET 24 May 2024)\nاس پالیسی/کمیشن کی سفارش کے ذریعے، امتحانی اصلاحات کے ایک اہم قدم کے طور پر اور تعلیمی نظام میں معیاری بہتری کے لیے اسکولوں میں مسلسل اور جامع تشخیص (CCE) کو متعارف کرانا لازمی قرار دیا گیا",
    "options": [
      "National Policy on Education - 1968\nقومی تعلیمی پالیسی - 1968",
      "National Policy on Education - 1986\nقومی تعلیمی پالیسی - 1986",
      "Secondary Education Commission - 1952-53\nثانوی تعلیمی کمیشن - 1952-53",
      "Indian Education Commission - 1964-66\nہندوستانی تعلیمی کمیشن - 1964-66"
    ],
    "correctAnswer": 1,
    "explanation": "1986 کی قومی تعلیمی پالیسی نے امتحانی اصلاحات کی پرزور سفارش کی، جس میں ایک دباؤ سے پاک ماحول میں طالب علم کی ترقی کے تمام پہلوؤں کا جائزہ لینے کے لیے مسلسل اور جامع تشخیص (CCE) کا تعارف بھی شامل تھا۔ بعد میں اسے تعلیم کے حق کے ایکٹ، 2009 کے ذریعے نافذ کیا گیا۔"
  },
  {
    "id": 590,
    "question": "Development of right type of behaviour and conduct; and skill of finding solutions to the social life/problems respectively are known as (TSTET 24 May 2024)\nصحیح قسم کے رویے اور طرز عمل کی ترقی؛ اور سماجی زندگی/مسائل کے حل تلاش کرنے کی مہارت کو بالترتیب کہا جاتا ہے",
    "options": [
      "Both are aims\nدونوں مقاصد ہیں",
      "Both are objectives\nدونوں اہداف ہیں",
      "Objective, Aim\nہدف، مقصد",
      "Aim, Objective\nمقصد، ہدف"
    ],
    "correctAnswer": 3,
    "explanation": "تعلیمی اصطلاح میں، 'مقصد' ایک وسیع، طویل مدتی ہدف ہے (مثلاً، اچھا برتاؤ پیدا کرنا)۔ ایک 'ہدف' ایک مخصوص، قابل پیمائش، قلیل مدتی نتیجہ ہے (مثلاً، مسئلہ حل کرنے کی مہارت حاصل کرنا)۔ اس طرح، برتاؤ کو فروغ دینا ایک مقصد ہے، اور حل تلاش کرنے کی مہارت ایک ہدف ہے۔"
  },
  {
    "id": 591,
    "question": "Which of the following statements is NOT TRUE related to merits of spiral approach? (TSTET 24 May 2024)\nمندرجہ ذیل میں سے کون سا بیان اسپائرل اپروچ کے فوائد سے متعلق درست نہیں ہے؟",
    "options": [
      "Content difficulty is according to the level of students\nمواد کی مشکل طلباء کی سطح کے مطابق ہوتی ہے",
      "Teaching is done based on the student's mental level\nتدریس طالب علم کی ذہنی سطح کی بنیاد پر کی جاتی ہے",
      "Due to continuous repetition of content retention of concepts in students will be for long time\nمواد کی مسلسل تکرار کی وجہ سے طلباء میں تصورات کا برقرار رہنا طویل عرصے تک رہے گا",
      "Logical/Rational thinking will not be improved among students\nطلباء میں منطقی/عقلی سوچ بہتر نہیں ہوگی"
    ],
    "correctAnswer": 3,
    "explanation": "اسپائرل اپروچ پیچیدگی کی بڑھتی ہوئی سطحوں پر موضوعات کا دوبارہ جائزہ لیتا ہے۔ یہ سیکھنے کو تقویت دیتا ہے، مواد کو طالب علم کی سطح کے مطابق بناتا ہے، اور خاص طور پر وقت کے ساتھ ساتھ سمجھ کو گہرا کرنے اور منطقی اور عقلی سوچ کو بہتر بنانے کے لیے ڈیزائن کیا گیا ہے۔ لہذا، یہ بیان کہ یہ منطقی سوچ کو بہتر نہیں کرتا، غلط ہے۔"
  },
  {
    "id": 592,
    "question": "To show the crops grown in a village for one year, this graph is most suitable (TSTET 24 May 2024)\nایک سال کے لیے گاؤں میں اگائی جانے والی فصلوں کو دکھانے کے لیے، یہ گراف سب سے موزوں ہے",
    "options": [
      "Pie-graph\nپائی گراف",
      "Time graph\nٹائم گراف",
      "Bar graph\nبار گراف",
      "Pictograph\nپکٹوگراف"
    ],
    "correctAnswer": 0,
    "explanation": "ایک پائی گراف (یا پائی چارٹ) مختلف زمروں کے تناسب یا فیصد کو ظاہر کرنے کے لیے مثالی ہے جو مل کر ایک مکمل بناتے ہیں۔ اس معاملے میں، کل اگائی گئی فصلیں پورے 'پائی' کی نمائندگی کرتی ہیں، اور ہر قسم کی فصل اس کل کا ایک 'ٹکڑا' یا فیصد کی نمائندگی کرتی ہے۔"
  },
  {
    "id": 593,
    "question": "One among the following is a dimension of social studies curriculum organisation (TSTET 24 May 2024)\nمندرجہ ذیل میں سے ایک سماجی علوم کے نصاب کی تنظیم کی ایک جہت ہے",
    "options": [
      "Vertical dimension and Concentric dimension.\nعمودی جہت اور ہم مرکز جہت۔",
      "Horizontal dimension and Topical dimension.\nافقی جہت اور موضوعاتی جہت۔",
      "Continuity, sequence, integration.\nتسلسل، ترتیب، انضمام۔",
      "Spiral dimension and logical dimension.\nاسپائرل جہت اور منطقی جہت۔"
    ],
    "correctAnswer": 2,
    "explanation": "مؤثر نصاب کی تنظیم تین کلیدی اصولوں پر مبنی ہے: تسلسل (کلیدی تصورات کا دوبارہ جائزہ لینا)، ترتیب (مواد کو منطقی، ترقی پسند ترتیب میں ترتیب دینا)، اور انضمام (مختلف مضامین کے علم کو جوڑنا)۔ یہ جہتیں ایک مربوط سیکھنے کے تجربے کو یقینی بناتی ہیں۔"
  },
  {
    "id": 594,
    "question": "As per NCERT 'Any individual or organization systematically collecting information for a specific purpose' is called (TSTET 24 May 2024)\nاین سی ای آر ٹی کے مطابق 'کوئی بھی فرد یا تنظیم جو کسی مخصوص مقصد کے لیے منظم طریقے سے معلومات اکٹھا کرتی ہے' کہلاتی ہے",
    "options": [
      "Data\nڈیٹا",
      "Information\nمعلومات",
      "Agency\nایجنسی",
      "Universe\nکائنات"
    ],
    "correctAnswer": 2,
    "explanation": "تحقیق اور ڈیٹا اکٹھا کرنے میں، 'ایجنسی' سے مراد کوئی بھی ادارہ ہے، خواہ وہ فرد ہو، سرکاری ادارہ ہو، یا نجی تنظیم، جو ایک متعین مقصد کے لیے معلومات کو منظم طریقے سے جمع کرنے کا ذمہ دار ہے۔"
  },
  {
    "id": 595,
    "question": "In social studies teaching, this is a kind of visual aid which creates illusion of depth through the use of pairs of photographs (TSTET 24 May 2024)\nسماجی علوم کی تدریس میں، یہ ایک قسم کی بصری امداد ہے جو تصاویر کے جوڑوں کے استعمال سے گہرائی کا بھرم پیدا کرتی ہے",
    "options": [
      "Diorama\nڈائیوراما",
      "Epidiascope\nایپی ڈایاسکوپ",
      "Stereoscope\nسٹیریوسکوپ",
      "Telescope\nٹیلی سکوپ"
    ],
    "correctAnswer": 2,
    "explanation": "سٹیریوسکوپ ایک بصری آلہ ہے جو الگ الگ تصاویر کے جوڑے کو دیکھنے کے لیے استعمال ہوتا ہے، ہر آنکھ کے لیے ایک، جسے ایک واحد سہ جہتی تصویر کے طور پر دیکھا جاتا ہے۔ دو آفسیٹ 2D تصاویر پیش کرکے، یہ دیکھنے والے کے لیے گہرائی کا ایک قائل کرنے والا بھرم پیدا کرتا ہے۔"
  },
  {
    "id": 596,
    "question": "One of the following is NOT a quality of a good social studies text book (TSTET 24 May 2024)\nمندرجہ ذیل میں سے ایک اچھی سماجی علوم کی درسی کتاب کا معیار نہیں ہے",
    "options": [
      "The content and language should be suitable for the age group of the children.\nمواد اور زبان بچوں کی عمر کے گروپ کے لیے موزوں ہونی چاہیے۔",
      "It should have content bias.\nاس میں مواد کا تعصب ہونا چاہیے۔",
      "The style of presentation should be attractive and interesting.\nپیشکش کا انداز پرکشش اور دلچسپ ہونا چاہیے۔",
      "It should provide opportunities for learning by doing.\nاسے کر کے سیکھنے کے مواقع فراہم کرنے چاہئیں۔"
    ],
    "correctAnswer": 1,
    "explanation": "ایک اچھی درسی کتاب کا بنیادی معیار معروضیت اور غیر جانبداری ہے۔ 'مواد کا تعصب' کا مطلب ہے کہ مواد کو متعصبانہ یا یک طرفہ نقطہ نظر سے پیش کیا گیا ہے، جو کسی بھی تعلیمی وسیلے میں ایک سنگین خامی ہے۔"
  },
  {
    "id": 597,
    "question": "Identify the correct statement about 'Project method' (TSTET 24 May 2024)\n'پروجیکٹ طریقہ' کے بارے میں درست بیان کی نشاندہی کریں",
    "options": [
      "It is a Teacher-centered method.\nیہ ایک استاد پر مبنی طریقہ ہے۔",
      "The teacher selects the project.\nاستاد پروجیکٹ کا انتخاب کرتا ہے۔",
      "It does not provide scope for co-operative learning.\nیہ باہمی تعاون سے سیکھنے کی گنجائش فراہم نہیں کرتا ہے۔",
      "It helps for the practical application of the knowledge.\nیہ علم کے عملی اطلاق میں مدد کرتا ہے۔"
    ],
    "correctAnswer": 3,
    "explanation": "پروجیکٹ کا طریقہ ایک طالب علم پر مبنی تدریس ہے جہاں طلباء ایک پیچیدہ سوال، مسئلہ، یا چیلنج کی تحقیقات اور جواب دینے کے لیے طویل عرصے تک کام کرکے علم اور مہارت حاصل کرتے ہیں۔ اس کی بنیادی طاقت طلباء کو نظریاتی علم کو حقیقی دنیا کے عملی کاموں پر لاگو کرنے کی اجازت دینا ہے۔"
  },
  {
    "id": 598,
    "question": "A social studies teacher wants to teach the concept of 'Formation of clouds'. Identify the most suitable method among the following (TSTET 24 May 2024)\nایک سماجی علوم کا استاد 'بادلوں کی تشکیل' کا تصور سکھانا چاہتا ہے۔ مندرجہ ذیل میں سے سب سے موزوں طریقہ کی نشاندہی کریں",
    "options": [
      "Demonstration method\nمظاہرے کا طریقہ",
      "Project method\nپروجیکٹ کا طریقہ",
      "Lecture method\nلیکچر کا طریقہ",
      "Text Book method\nدرسی کتاب کا طریقہ"
    ],
    "correctAnswer": 0,
    "explanation": "بادلوں کی تشکیل میں بخارات اور گاڑھا ہونا جیسے عمل شامل ہیں، جنہیں کلاس روم میں براہ راست مظاہرے کے ذریعے آسانی سے اور مؤثر طریقے سے دکھایا جا سکتا ہے (مثلاً، پانی ابالنا اور ٹھنڈی سطح پر گاڑھا ہونا دیکھنا)۔ یہ تجریدی سائنسی تصور کو طلباء کے لیے ٹھوس اور قابل فہم بناتا ہے۔"
  },
  {
    "id": 599,
    "question": "One of the following indicates 'what the student has learnt' (TSTET 24 May 2024)\nمندرجہ ذیل میں سے ایک اس بات کی نشاندہی کرتا ہے کہ 'طالب علم نے کیا سیکھا ہے'",
    "options": [
      "Academic Standard\nتعلیمی معیار",
      "Teaching method\nتدریسی طریقہ",
      "Curriculum\nنصاب",
      "Text book\nدرسی کتاب"
    ],
    "correctAnswer": 0,
    "explanation": "تعلیمی معیارات وہ بینچ مارک ہیں جو متوقع علم اور مہارتوں کی وضاحت کرتے ہیں جو طلباء کو ہر گریڈ کی سطح پر حاصل کرنی چاہئیں۔ ان معیارات کے خلاف طالب علم کی کارکردگی کی پیمائش کرنا یہ تعین کرنے کا بنیادی طریقہ ہے کہ انہوں نے کامیابی سے کیا سیکھا ہے۔"
  },
  {
    "id": 600,
    "question": "The ability to understand the importance of Public property and to protect them is a/an (TSTET 24 May 2024)\nعوامی املاک کی اہمیت کو سمجھنے اور ان کی حفاظت کرنے کی صلاحیت ایک ہے",
    "options": [
      "Value\nقدر",
      "Skill\nمہارت",
      "Academic standard\nتعلیمی معیار",
      "Teaching objective\nتدریسی ہدف"
    ],
    "correctAnswer": 0,
    "explanation": "عوامی املاک کی حفاظت شہری ذمہ داری اور معاشرے کے احترام کا عکاس ہے۔ اسے ایک 'قدر' سمجھا جاتا ہے—ایک اصول یا طرز عمل کا معیار جسے کوئی فرد یا معاشرہ اپناتا ہے۔ یہ کردار سازی کی تعلیم کا حصہ ہے نہ کہ قابل پیمائش مہارت یا تعلیمی معیار۔"
  },
  {
    "id": 600,
    "question": "The ability to understand the importance of Public property and to protect them is a/an (TSTET 24 May 2024)\nعوامی املاک کی اہمیت کو سمجھنے اور ان کی حفاظت کرنے کی صلاحیت ایک ہے",
    "options": [
      "Value\nقدر",
      "Skill\nمہارت",
      "Academic standard\nتعلیمی معیار",
      "Teaching objective\nتدریسی مقصد"
    ],
    "correctAnswer": 0,
    "explanation": "عوامی املاک کی حفاظت شہری ذمہ داری اور معاشرے کے احترام کا عکاس ہے۔ اسے ایک 'قدر' سمجھا جاتا ہے — یعنی طرز عمل کا ایک اصول یا معیار جسے کوئی فرد یا معاشرہ اپناتا ہے۔ یہ کردار سازی کی تعلیم کا حصہ ہے نہ کہ کوئی قابل پیمائش مہارت یا تعلیمی معیار۔"
  },
  {
    "id": 601,
    "question": "The Siwalik Mountain ranges run parallel to the Lesser Himalayas for a distance of about 2400 kms from (TSTET 30 June 2025)\nشیوالک پہاڑی سلسلے تقریباً 2400 کلومیٹر کے فاصلے تک چھوٹے ہمالیہ کے متوازی چلتے ہیں",
    "options": [
      "Hindu Kush Mountain Ranges to Brahmaputra Valley\nہندوکش پہاڑی سلسلوں سے برہم پترا وادی تک",
      "Potwar Plateau to Hindu Kush Mountain Ranges\nسطح مرتفع پوٹھوہار سے ہندوکش پہاڑی سلسلوں تک",
      "Potwar Plateau to Brahmaputra Valley\nسطح مرتفع پوٹھوہار سے برہم پترا وادی تک",
      "Rivers Ghaggar to Teesta\nدریائے گھگر سے تیستا تک"
    ],
    "correctAnswer": 2,
    "explanation": "شیوالک سلسلہ، جسے بیرونی ہمالیہ بھی کہا جاتا ہے، مغرب میں سطح مرتفع پوٹھوہار سے لے کر مشرق میں برہم پترا وادی تک تقریباً 2,400 کلومیٹر تک پھیلا ہوا ہے۔ یہ ہمالیہ کا سب سے جنوبی اور ارضیاتی طور پر سب سے نیا مشرق-مغرب سلسلہ بناتے ہیں۔"
  },
  {
    "id": 602,
    "question": "The words latitude and longitude are derived from the Greek words 'Latitudo' and 'Longitudo respectively, which means (TSTET 30 June 2025)\nعرض بلد (latitude) اور طول بلد (longitude) کے الفاظ یونانی الفاظ 'Latitudo' اور 'Longitudo' سے بالترتیب ماخوذ ہیں، جن کا مطلب ہے",
    "options": [
      "Length and width\nلمبائی اور چوڑائی",
      "revolving and rotating\nگھومنا اور چکر لگانا",
      "height and depth\nاونچائی اور گہرائی",
      "width and length\nچوڑائی اور لمبائی"
    ],
    "correctAnswer": 3,
    "explanation": "عرض بلد (latitude) اور طول بلد (longitude) کی اصطلاحات لاطینی زبان سے نکلی ہیں۔ 'Latitudo' کا مطلب چوڑائی ہے، جو افقی یا مشرق-مغرب کی لکیروں کی طرف اشارہ کرتا ہے، اور 'longitudo' کا مطلب لمبائی ہے، جو نقشے پر عمودی یا شمال-جنوب کی لکیروں کی طرف اشارہ کرتا ہے۔"
  },
  {
    "id": 603,
    "question": "Identify the Statement that best describes the 'Inversion of temperature' (TSTET 30 June 2025)\nاس بیان کی نشاندہی کریں جو 'درجہ حرارت کے الٹاؤ' (Inversion of temperature) کو بہترین طریقے سے بیان کرتا ہے",
    "options": [
      "An increase in temperature with height\nاونچائی کے ساتھ درجہ حرارت میں اضافہ",
      "A decrease in pressure with altitude\nبلندی کے ساتھ دباؤ میں کمی",
      "A constant temperature at all heights\nتمام اونچائیوں پر یکساں درجہ حرارت",
      "A decrease in temperature with height\nاونچائی کے ساتھ درجہ حرارت میں کمی"
    ],
    "correctAnswer": 0,
    "explanation": "عام طور پر، ٹروپوسفیئر میں، اونچائی میں اضافے کے ساتھ درجہ حرارت کم ہوتا ہے۔ درجہ حرارت کا الٹاؤ اس عام طرز سے انحراف ہے، جہاں سطح پر ٹھنڈی ہوا کی ایک تہہ کے اوپر گرم ہوا کی ایک تہہ ہوتی ہے، جس کی وجہ سے اونچائی کے ساتھ درجہ حرارت میں اضافہ ہوتا ہے۔"
  },
  {
    "id": 604,
    "question": "This Meteorologist and Geophysicist had hypothesised that the super continent of Pangaea broke up to form Laurasia and Gondwana Land (TSTET 30 June 2025)\nاس ماہر موسمیات اور جیو فزیکسٹ نے یہ نظریہ پیش کیا تھا کہ سپر براعظم پینجیا ٹوٹ کر لوریشیا اور گونڈوانا لینڈ میں تقسیم ہو گیا",
    "options": [
      "Alfred Wegner\nالفریڈ ویگنر",
      "Marcia McNutt\nمارسیا میک نٹ",
      "Harold Zaffreys\nہیرالڈ زیفریز",
      "Zhang Heng\nژانگ ہینگ"
    ],
    "correctAnswer": 0,
    "explanation": "الفریڈ ویگنر، ایک جرمن ماہر موسمیات اور جیو فزیکسٹ، نے پہلی بار 1912 میں براعظمی بہاؤ کا نظریہ پیش کیا۔ ان کے مفروضے میں کہا گیا تھا کہ براعظم کبھی ایک ہی سپر براعظم پینجیا میں جڑے ہوئے تھے، جو بعد میں ٹوٹ کر اپنی موجودہ پوزیشنوں پر بہہ گئے۔"
  },
  {
    "id": 605,
    "question": "Submarine Canyons are observed in this region of the Ocean Floor (TSTET 30 June 2025)\nآبدوز وادیاں (Submarine Canyons) سمندر کی تہہ کے اس خطے میں دیکھی جاتی ہیں",
    "options": [
      "Continental Shelf\nبراعظمی شیلف",
      "Continental Slope\nبراعظمی ڈھلوان",
      "Abyssal Plain\nعمیق میدان",
      "Oceanic Deep\nسمندری گہرائی"
    ],
    "correctAnswer": 1,
    "explanation": "آبدوز وادیاں کھڑی ڈھلوان والی وادیاں ہیں جو بنیادی طور پر براعظمی ڈھلوان پر پائی جاتی ہیں۔ یہ مختلف عملوں سے بنتی ہیں، جن میں ٹربیڈیٹی کرنٹ (turbidity currents) کے ذریعے کٹاؤ بھی شامل ہے۔"
  },
  {
    "id": 606,
    "question": "This Volcano is known as 'the light house of the Mediterranean Sea' (TSTET 30 June 2025)\nاس آتش فشاں کو 'بحیرہ روم کا لائٹ ہاؤس' کہا جاتا ہے",
    "options": [
      "Mt. Pelee in West Indies\nویسٹ انڈیز میں ماؤنٹ پیلی",
      "Fujiyama in Japan\nجاپان میں فیوجی یاما",
      "Stromboli in Sicily\nسسلی میں اسٹرمبولی",
      "Cotopaxi in Equador\nایکواڈور میں کوٹوپیکسی"
    ],
    "correctAnswer": 2,
    "explanation": "اسٹرمبولی، سسلی کے شمال میں ایک جزیرے پر واقع آتش فشاں، صدیوں سے تقریباً مسلسل پھٹ رہا ہے۔ اس کے بار بار ہونے والے ہلکے دھماکے دہکتے ہوئے لاوے کو ہوا میں اچھالتے ہیں، جس سے رات کو ایک نظر آنے والی چمک پیدا ہوتی ہے، جس کی وجہ سے اسے 'بحیرہ روم کا لائٹ ہاؤس' کا لقب ملا ہے۔"
  },
  {
    "id": 607,
    "question": "In this part of India, Red Soils develop on crystalline and igneous rocks in the areas of low rainfall (TSTET 30 June 2025)\nبھارت کے اس حصے میں، کم بارش والے علاقوں میں کرسٹلائن اور آتشی چٹانوں پر سرخ مٹی بنتی ہے",
    "options": [
      "Eastern and southern parts of the Deccan plateau\nسطح مرتفع دکن کے مشرقی اور جنوبی حصے",
      "Western and Southern parts of the Deccan Plateau\nسطح مرتفع دکن کے مغربی اور جنوبی حصے",
      "Andaman and Nicobar island Region\nجزائر انڈمان و نکوبار کا علاقہ",
      "North western part of Indo Gangetic plain\nہند-گنگا کے میدان کا شمال مغربی حصہ"
    ],
    "correctAnswer": 0,
    "explanation": "سرخ مٹی عام طور پر قدیم کرسٹلائن اور میٹامورفک چٹانوں جیسے گرینائٹ اور نائس (gneisses) کے موسمی اثرات سے بنتی ہے۔ یہ کم بارش والے علاقوں میں پائی جاتی ہے، خاص طور پر سطح مرتفع دکن کے مشرقی اور جنوبی حصوں میں۔"
  },
  {
    "id": 608,
    "question": "As per the Directorate of Economics and Statistics, Ministry of Agriculture, 2017, the percentage of land under Net Sown Area is (TSTET 30 June 2025)\nڈائریکٹوریٹ آف اکنامکس اینڈ سٹیٹسٹکس، وزارت زراعت، 2017 کے مطابق، خالص بوئے گئے رقبے (Net Sown Area) کے تحت زمین کا فیصد ہے",
    "options": [
      "18.11%",
      "45.5%",
      "23.3%",
      "54.5%"
    ],
    "correctAnswer": 1,
    "explanation": "ڈائریکٹوریٹ آف اکنامکس اینڈ سٹیٹسٹکس کے زمینی استعمال کے اعداد و شمار 2016-17 کے مطابق، ہندوستان میں خالص بویا گیا رقبہ 140.1 ملین ہیکٹر تھا، جو زمینی استعمال کے اعداد و شمار کے لیے کل رپورٹنگ ایریا کا 45.5% تھا۔"
  },
  {
    "id": 609,
    "question": "Among the following, the project constructed across the river Mahanadi is (TSTET 30 June 2025)\nمندرجہ ذیل میں سے، دریائے مہاندی پر تعمیر کیا گیا منصوبہ ہے",
    "options": [
      "Sardar Sarovar Project\nسردار سروور پروجیکٹ",
      "Rana Pratap Sagar Dam\nرانا پرتاپ ساگر ڈیم",
      "Hirakud Project\nہیرا کڈ پروجیکٹ",
      "Pravara Project\nپراورا پروجیکٹ"
    ],
    "correctAnswer": 2,
    "explanation": "ہیرا کڈ ڈیم بھارت کی ریاست اڑیسہ کے شہر سنبل پور سے تقریباً 15 کلومیٹر کے فاصلے پر دریائے مہاندی پر بنایا گیا ہے۔ یہ ہندوستان کی آزادی کے بعد شروع کیے گئے پہلے بڑے کثیر المقاصد دریائی وادی منصوبوں میں سے ایک ہے۔"
  },
  {
    "id": 610,
    "question": "The Second largest producer of Paddy in the world is (TSTET 30 June 2025)\nدنیا میں دھان (Paddy) کا دوسرا سب سے بڑا پیدا کنندہ ہے",
    "options": [
      "China\nچین",
      "Pakistan\nپاکستان",
      "Bangladesh\nبنگلہ دیش",
      "India\nبھارت"
    ],
    "correctAnswer": 3,
    "explanation": "بھارت، چین کے بعد دنیا میں چاول (دھان) کا دوسرا سب سے بڑا پیدا کنندہ ہے۔ چاول بھارتی آبادی کے ایک بڑے حصے کی بنیادی خوراک اور ایک بڑی زرعی جنس ہے۔"
  },
  {
    "id": 611,
    "question": "One among the following is NOT the form of Cloud (TSTET 30 June 2025)\nمندرجہ ذیل میں سے ایک بادل کی قسم نہیں ہے",
    "options": [
      "Cirrus\nسرّس",
      "Nimbus\nنمبس",
      "Sleet\nژالہ باری",
      "Stratus\nاسٹریٹس"
    ],
    "correctAnswer": 2,
    "explanation": "ژالہ باری (Sleet) بارش کی ایک قسم ہے جو برف کے گولوں پر مشتمل ہوتی ہے، جو برف کے گالوں کے پگھلنے اور پھر زمین پر گرنے سے پہلے دوبارہ جمنے سے بنتی ہے۔ سرّس (Cirrus)، نمبس (Nimbus)، اور اسٹریٹس (Stratus) سب بادلوں کی بڑی اقسام یا شکلیں ہیں۔"
  },
  {
    "id": 612,
    "question": "These forests are grown in the higher latitudes between 50°and 70° of the northern Hemisphere (TSTET 30 June 2025)\nیہ جنگلات شمالی نصف کرہ کے 50° اور 70° کے درمیان اونچے عرض بلد میں اگتے ہیں",
    "options": [
      "Mediterranean Vegetation\nبحیرہ روم کی نباتات",
      "Coniferous forests\nصنوبری جنگلات",
      "Temperate Deciduous Forests\nمعتدل پت جھڑی جنگلات",
      "Tropical Evergreen Forests\nاشنکٹبندیی سدا بہار جنگلات"
    ],
    "correctAnswer": 1,
    "explanation": "صنوبری جنگلات، جنہیں ٹائیگا یا بوریل جنگلات بھی کہا جاتا ہے، شمالی نصف کرہ کے اونچے عرض بلد میں، عام طور پر 50° اور 70° شمال کے درمیان پائے جاتے ہیں۔ ان جنگلات کی خصوصیت سرد موسم سرما اور مخروطی شکل کے سدا بہار درخت ہیں۔"
  },
  {
    "id": 613,
    "question": "Identify the Cold Current from among the following (TSTET 30 June 2025)\nمندرجہ ذیل میں سے سرد رو (Cold Current) کی نشاندہی کریں",
    "options": [
      "West Australian Current\nمغربی آسٹریلوی رو",
      "Kuroshivo Current\nکوروشیو رو",
      "East Australian Current\nمشرقی آسٹریلوی رو",
      "South Equatorial Current\nجنوبی استوائی رو"
    ],
    "correctAnswer": 0,
    "explanation": "مغربی آسٹریلوی رو جنوبی بحر ہند کی ایک سرد سطحی رو ہے، جو آسٹریلیا کے مغربی ساحل کے ساتھ شمال کی طرف بہتی ہے۔ دی گئی دیگر رویں گرم رویں ہیں۔"
  },
  {
    "id": 614,
    "question": "The annual insolation received by the earth on 3rd January is slightly more than the amount received on 4th July, because (TSTET 30 June 2025)\n3 جنوری کو زمین کو ملنے والی سالانہ شمسی تابکاری 4 جولائی کو ملنے والی مقدار سے قدرے زیادہ ہوتی ہے، کیونکہ",
    "options": [
      "The earth is nearest to the Sun\nزمین سورج کے قریب ترین ہوتی ہے",
      "The earth is farthest from the Sun\nزمین سورج سے سب سے دور ہوتی ہے",
      "The earth is neither nearest nor farthest from the Sun\nزمین نہ تو سورج کے قریب ترین ہوتی ہے اور نہ ہی سب سے دور",
      "The length of the day is more\nدن کی لمبائی زیادہ ہوتی ہے"
    ],
    "correctAnswer": 0,
    "explanation": "زمین سورج کے گرد ایک بیضوی مدار میں گردش کرتی ہے۔ یہ تقریباً 3 جنوری کو سورج کے قریب ترین مقام پر پہنچتی ہے، جسے پیری ہیلیئن (perihelion) کہتے ہیں۔ سورج کے قریب ہونے کی وجہ سے یہ قدرے زیادہ شمسی تابکاری (insolation) حاصل کرتی ہے۔"
  },
  {
    "id": 615,
    "question": "Ravi's weight is 80 Kgs and his height is 1.79 mts. Then, the BMI of Ravi is (TSTET 30 June 2025)\nروی کا وزن 80 کلوگرام ہے اور اس کا قد 1.79 میٹر ہے۔ تو، روی کا بی ایم آئی (BMI) ہے",
    "options": [
      "44.69",
      "24.96",
      "12.48",
      "6.24"
    ],
    "correctAnswer": 1,
    "explanation": "باڈی ماس انڈیکس (BMI) کا حساب کلوگرام میں وزن کو میٹر میں قد کے مربع سے تقسیم کرکے کیا جاتا ہے۔ بی ایم آئی = 80 / (1.79 * 1.79) = 80 / 3.2041 ≈ 24.96۔"
  },
  {
    "id": 616,
    "question": "Identify the correct statement regarding the distribution of workers among the different sectors of the economy as per the data given in 2017-18 (TSTET 30 June 2025)\n2017-18 کے اعداد و شمار کے مطابق معیشت کے مختلف شعبوں میں کارکنوں کی تقسیم کے حوالے سے درست بیان کی نشاندہی کریں",
    "options": [
      "The workers in the Industrial and Service Sector are more than the Agricultural Sector\nصنعتی اور خدماتی شعبے میں کارکن زرعی شعبے سے زیادہ ہیں",
      "The workers in Agricultural Sector are more than the Industrial and Service Sector\nزرعی شعبے میں کارکن صنعتی اور خدماتی شعبے سے زیادہ ہیں",
      "The distribution of workers in three sectors is same\nتینوں شعبوں میں کارکنوں کی تقسیم یکساں ہے",
      "The workers in service sector are less than the Industrial Sector\nخدماتی شعبے میں کارکن صنعتی شعبے سے کم ہیں"
    ],
    "correctAnswer": 1,
    "explanation": "بھارت کے 2017-18 کے اقتصادی سروے کے مطابق، زرعی شعبہ، جی ڈی پی میں کم حصہ ڈالنے کے باوجود، صنعتی اور خدماتی شعبوں کے مقابلے میں اب بھی افرادی قوت کا سب سے بڑا حصہ (تقریباً 42-44%) ملازم رکھتا تھا۔"
  },
  {
    "id": 617,
    "question": "In the rural areas in India, the main demand for credit is for (TSTET 30 June 2025)\nبھارت کے دیہی علاقوں میں، قرض کا بنیادی مطالبہ اس کے لیے ہوتا ہے",
    "options": [
      "Purchase of agricultural land\nزرعی زمین کی خریداری",
      "Construction of houses\nگھروں کی تعمیر",
      "Crop production\nفصل کی پیداوار",
      "Undertaking business activities\nکاروباری سرگرمیوں کا آغاز"
    ],
    "correctAnswer": 2,
    "explanation": "دیہی بھارت میں، بنیادی معاشی سرگرمی زراعت ہے۔ کسانوں کو اکثر بوائی کے موسم کے آغاز میں بیج، کھاد اور کیڑے مار ادویات جیسی ضروری اشیاء خریدنے کے لیے قرض کی ضرورت ہوتی ہے۔ یہ فصل کی پیداوار کو قرض کے مطالبے کی بنیادی وجہ بناتا ہے۔"
  },
  {
    "id": 618,
    "question": "In India, Aadhar Enabled Payment System (AEPS) is offered by (TSTET 30 June 2025)\nبھارت میں، آدھار اینیبلڈ پیمنٹ سسٹم (AEPS) کس کی طرف سے پیش کیا جاتا ہے",
    "options": [
      "Ministry of Finance\nوزارت خزانہ",
      "Reserve Bank of India\nریزرو بینک آف انڈیا",
      "National Payments Corporation of India\nنیشنل پےمنٹس کارپوریشن آف انڈیا",
      "Comptroller & Auditor General of India\nکمپٹرولر اینڈ آڈیٹر جنرل آف انڈیا"
    ],
    "correctAnswer": 2,
    "explanation": "آدھار اینیبلڈ پیمنٹ سسٹم (AEPS) ایک ادائیگی کی خدمت ہے جسے نیشنل پےمنٹس کارپوریشن آف انڈیا (NPCI) نے تیار کیا ہے۔ یہ بینک صارفین کو اپنے آدھار فعال بینک اکاؤنٹ تک رسائی کے لیے آدھار کو اپنی شناخت کے طور پر استعمال کرنے کی اجازت دیتا ہے۔"
  },
  {
    "id": 619,
    "question": "The employees working in the State and the Central Government offices get an additional payment called 'Dearness Allowance' or D.A. to (TSTET 30 June 2025)\nریاستی اور مرکزی حکومت کے دفاتر میں کام کرنے والے ملازمین کو ایک اضافی ادائیگی ملتی ہے جسے 'مہنگائی بھتہ' یا ڈی.اے. کہا جاتا ہے تاکہ",
    "options": [
      "Increase their income so as to meet the increasing inflation\nان کی آمدنی میں اضافہ کیا جائے تاکہ بڑھتی ہوئی مہنگائی کا مقابلہ کیا جا سکے",
      "Keep additional income in the hands of employees\nملازمین کے ہاتھ میں اضافی آمدنی رکھی جائے",
      "Increase the purchasing capacity of employees\nملازمین کی قوت خرید میں اضافہ کیا جائے",
      "Make the employees rich\nملازمین کو امیر بنایا جائے"
    ],
    "correctAnswer": 0,
    "explanation": "مہنگائی بھتہ (DA) بھارت میں سرکاری ملازمین اور پنشنرز کو دیا جانے والا ایک رہائشی لاگت کا ایڈجسٹمنٹ الاؤنس ہے۔ اس کا بنیادی مقصد ان کی قوت خرید پر مہنگائی کے اثرات کو کم کرنا ہے۔"
  },
  {
    "id": 620,
    "question": "The range of Human Development Index Value is (TSTET 30 June 2025)\nانسانی ترقیاتی اشاریہ (Human Development Index) کی قدر کی حد ہے",
    "options": [
      "1 to 100",
      "0 to 1",
      "-0.1 to 0.1",
      "1 to 1000"
    ],
    "correctAnswer": 1,
    "explanation": "انسانی ترقیاتی اشاریہ (HDI) متوقع عمر، تعلیم اور فی کس آمدنی کے اشاریوں کا ایک مرکب شماریات ہے۔ کسی بھی ملک کے لیے HDI کی قدر 0 اور 1 کے درمیان ایک عدد کے طور پر شمار کی جاتی ہے، جہاں 1 سب سے زیادہ انسانی ترقی کی نمائندگی کرتا ہے۔"
  },
  {
    "id": 621,
    "question": "Year 2000 is the base year. In 2001, the average prices of all goods have been increased by 10%, whereas in 2002 they have been increased by 15%. Then, the Price Index in 2002 is (TSTET 30 June 2025)\nسال 2000 بنیادی سال ہے۔ 2001 میں، تمام اشیاء کی اوسط قیمتوں میں 10% کا اضافہ ہوا ہے، جبکہ 2002 میں ان میں 15% کا اضافہ ہوا ہے۔ تو، 2002 میں پرائس انڈیکس ہے",
    "options": [
      "125.75",
      "115.25",
      "126.5",
      "125.5"
    ],
    "correctAnswer": 2,
    "explanation": "بنیادی سال (2000) کا انڈیکس 100 ہے۔ 2001 میں، قیمتوں میں 10% اضافہ ہوا، لہذا انڈیکس 110 ہو گیا۔ 2002 میں، قیمتوں میں 2001 کی سطح سے 15% اضافہ ہوا۔ لہذا، 2002 کے لیے انڈیکس 110 + (110 کا 15%) = 110 + 16.5 = 126.5 ہے۔"
  },
  {
    "id": 622,
    "question": "These are used to calculate the Dearness Allowance to be paid for Government Employees to revise legal wage rates (TSTET 30 June 2025)\nیہ سرکاری ملازمین کو ادا کیے جانے والے مہنگائی بھتے کا حساب لگانے اور قانونی اجرت کی شرحوں پر نظر ثانی کرنے کے لیے استعمال ہوتے ہیں",
    "options": [
      "Wholesale Price Index\nتھوک قیمت کا اشاریہ",
      "Consumer Price Indices\nصارفین کی قیمتوں کے اشاریے",
      "Retail Price Index\nخوردہ قیمت کا اشاریہ",
      "Producers Price Index\nپیدا کنندگان کی قیمت کا اشاریہ"
    ],
    "correctAnswer": 1,
    "explanation": "سرکاری ملازمین کے لیے مہنگائی بھتہ (DA) کا حساب آل انڈیا کنزیومر پرائس انڈیکس فار انڈسٹریل ورکرز (CPI-IW) کی بنیاد پر کیا جاتا ہے۔ CPI گھرانوں کے ذریعے استعمال ہونے والی اشیاء اور خدمات کی قیمتوں میں تبدیلیوں کی عکاسی کرتا ہے، جو اسے مہنگائی کے خلاف اجرتوں کو ایڈجسٹ کرنے کے لیے مناسب پیمانہ بناتا ہے۔"
  },
  {
    "id": 623,
    "question": "Removing barriers or restrictions set by Government is known as (TSTET 30 June 2025)\nحکومت کی طرف سے لگائی گئی رکاوٹوں یا پابندیوں کو ہٹانا کہلاتا ہے",
    "options": [
      "Economic liberalisation\nمعاشی لبرلائزیشن",
      "Globalisation\nعالمگیریت",
      "Privatisation\nنجکاری",
      "Nationalisation\nقومیانہ"
    ],
    "correctAnswer": 0,
    "explanation": "معاشی لبرلائزیشن سے مراد کاروبار اور تجارت پر حکومتی ضوابط اور پابندیوں میں کمی یا خاتمہ ہے۔ اس عمل کا مقصد نجی شعبے کی شرکت کو فروغ دینا اور ایک زیادہ کھلی، مارکیٹ پر مبنی معیشت بنانا ہے۔"
  },
  {
    "id": 624,
    "question": "During inflationary situation, the Reserve Bank of India reduces the money in circulation in the economy to (TSTET 30 June 2025)\nمہنگائی کی صورت حال کے دوران، ریزرو بینک آف انڈیا معیشت میں گردش کرنے والے پیسے کو کم کرتا ہے تاکہ",
    "options": [
      "Increase the purchasing capacity of the people\nلوگوں کی قوت خرید میں اضافہ کیا جا سکے",
      "Make the money available only to the poor people\nپیسہ صرف غریب لوگوں کو دستیاب کرایا جا سکے",
      "Reduce the purchasing capacity of the people\nلوگوں کی قوت خرید کو کم کیا جا سکے",
      "Discourage savings in the bank so as to keep more money in the hands of the poor people\nبینک میں بچت کی حوصلہ شکنی کی جائے تاکہ غریب لوگوں کے ہاتھ میں زیادہ پیسہ رہے"
    ],
    "correctAnswer": 2,
    "explanation": "مہنگائی کے دوران، مرکزی بینک (RBI) رقم کی فراہمی کو سخت کرتا ہے (مثلاً، شرح سود میں اضافہ کرکے)۔ اس سے قرض لینا مہنگا ہو جاتا ہے، جس سے گردش میں مجموعی رقم کم ہو جاتی ہے اور اس طرح مجموعی طلب اور قوت خرید کم ہو جاتی ہے، جس سے مہنگائی کو کنٹرول کرنے میں مدد ملتی ہے۔"
  },
  {
    "id": 625,
    "question": "This Act/scheme mandates that it is the responsibility of the Government to provide manual work on demand and the wages to the workers and the capital needed are to be paid by the Government (TSTET 30 June 2025)\nیہ ایکٹ/اسکیم لازمی قرار دیتی ہے کہ حکومت کی ذمہ داری ہے کہ وہ مطالبے پر دستی کام فراہم کرے اور کارکنوں کو اجرت اور درکار سرمایہ حکومت ادا کرے",
    "options": [
      "National Food Security Act, 2013\nقومی غذائی تحفظ ایکٹ، 2013",
      "Pradhanamanthri Anna Yojana\nپردھان منتری انا یوجنا",
      "MGNREGA\nمنریگا",
      "The Factories Act\nفیکٹریز ایکٹ"
    ],
    "correctAnswer": 2,
    "explanation": "مہاتما گاندھی نیشنل رورل ایمپلائمنٹ گارنٹی ایکٹ (MGNREGA)، جو 2005 میں منظور ہوا، ایک سماجی تحفظ کی اسکیم ہے جو قانونی طور پر ہر دیہی گھرانے کو ایک مالی سال میں کم از کم 100 دن کی اجرت پر مبنی روزگار کی ضمانت دیتی ہے جس کے بالغ اراکین غیر ہنر مند دستی کام کرنے کے لیے رضاکارانہ طور پر تیار ہوں۔"
  },
  {
    "id": 626,
    "question": "Gautham Buddha suggested the Ashtanga marga (Eight-fold path) for (TSTET 30 June 2025)\nگوتم بدھ نے اشٹانگ مارگ (آٹھ نکاتی راستہ) کی تجویز دی تھی",
    "options": [
      "Making the people aware of the four noble truths\nلوگوں کو چار عظیم سچائیوں سے آگاہ کرنے کے لیے",
      "Making the people to know the original teachings of Buddha\nلوگوں کو بدھ کی اصل تعلیمات سے روشناس کرانے کے لیے",
      "Elimination of human misery\nانسانی مصائب کے خاتمے کے لیے",
      "Attainment of salvation\nنجات حاصل کرنے کے لیے"
    ],
    "correctAnswer": 2,
    "explanation": "بدھ مت میں، آٹھ نکاتی راستہ (اشٹانگ مارگ) وہ عملی ذریعہ ہے جو بدھ نے دکھ (تکلیف) کو ختم کرنے اور خود شناسی حاصل کرنے کے لیے تجویز کیا ہے۔ یہ چار عظیم سچائیوں میں سے چوتھا ہے اور اسے خواہش اور جہالت کو مٹا کر انسانی مصائب کو ختم کرنے کا راستہ سمجھا جاتا ہے۔"
  },
  {
    "id": 627,
    "question": "One of the following books was NOT authored by Acharya Nagarjuna (TSTET 30 June 2025)\nمندرجہ ذیل میں سے ایک کتاب آچاریہ ناگ ارجن کی تصنیف نہیں ہے",
    "options": [
      "Sunyavada\nشونیہ واد",
      "Suhrullekha\nسوہری لیکھا",
      "Madyamikakarika\nمدھیامیکا کاریکا",
      "Deepavamsha\nدیپ وamsa"
    ],
    "correctAnswer": 3,
    "explanation": "آچاریہ ناگ ارجن ایک بڑے بدھ مت کے فلسفی تھے جنہوں نے 'مول مدھیامیکا کاریکا' (جو مدھیامیکا کا مرکز ہے) اور 'شونیتا سپتتی' (شونیہ واد/خالی پن پر) جیسی تصانیف لکھیں۔ 'سوہری لیکھا' بھی ان سے منسوب ہے۔ 'دیپ وamsa' سری لنکا کی ایک قدیم تاریخ ہے، جسے ناگ ارجن نے نہیں لکھا۔"
  },
  {
    "id": 628,
    "question": "The construction of these two temples in Rajasthan is considered as the most notable contributions of the Jains to the domain of architecture (TSTET 30 June 2025)\nراجستھان میں ان دو مندروں کی تعمیر کو فن تعمیر کے شعبے میں جینیوں کی سب سے قابل ذکر شراکت سمجھا جاتا ہے",
    "options": [
      "Dilwara Temple and Mount Abu\nدلواڑا مندر اور ماؤنٹ ابو",
      "Khajuraho and Dilwara Temple\nکھجوراہو اور دلواڑا مندر",
      "Mount Abu and Lakkundi Temple\nماؤنٹ ابو اور لکنڈی مندر",
      "Dilwara Temple and Seth Hathisinghi Temple\nدلواڑا مندر اور سیٹھ ہاتھی سنگھ مندر"
    ],
    "correctAnswer": 3,
    "explanation": "راجستھان میں ماؤنٹ ابو کے قریب دلواڑا مندر سنگ مرمر کے شاندار استعمال اور پیچیدہ نقش و نگار کے لیے دنیا بھر میں مشہور ہیں۔ سیٹھ ہاتھی سنگھ مندر، اگرچہ احمد آباد، گجرات میں واقع ہے، لیکن یہ بھی جین مندر کے فن تعمیر کی ایک اور نمایاں مثال ہے۔ سوال میں ان دونوں کو جینیوں کی قابل ذکر شراکت کے طور پر جوڑا گیا ہے۔"
  },
  {
    "id": 629,
    "question": "The primary objective of the Marshall Plan was (TSTET 30 June 2025)\nمارشل پلان کا بنیادی مقصد تھا",
    "options": [
      "To spread communism in Europe\nیورپ میں کمیونزم پھیلانا",
      "To rebuild war-torn European economies\nجنگ سے تباہ حال یورپی معیشتوں کی تعمیر نو کرنا",
      "To create a military alliance in Europe\nیورپ میں ایک فوجی اتحاد بنانا",
      "To colonize Eastern Europe\nمشرقی یورپ کو نوآبادی بنانا"
    ],
    "correctAnswer": 1,
    "explanation": "مارشل پلان، سرکاری طور پر یورپی بحالی پروگرام، 1948 میں منظور کیا گیا ایک امریکی اقدام تھا۔ اس کا بنیادی مقصد دوسری جنگ عظیم کے خاتمے کے بعد مغربی یورپی معیشتوں کی تعمیر نو میں مدد کے لیے اقتصادی امداد فراہم کرنا تھا، جس کا ایک مقصد کمیونزم کے پھیلاؤ کو روکنا بھی تھا۔"
  },
  {
    "id": 630,
    "question": "Among the following, the Harappan Civilisation Sites located in India were (TSTET 30 June 2025)\nمندرجہ ذیل میں سے، بھارت میں واقع ہڑپہ تہذیب کے مقامات تھے",
    "options": [
      "Kalibangan, Chanudharo and Lothal\nکالی بنگن، چن ہودڑو اور لوتھل",
      "Mohen Ja Daro, Shortugai and Sutkagendor\nموہنجو دڑو، شورتوگئی اور ستکاگین دور",
      "Kalibangan, Ropar and Harappa\nکالی بنگن، روپڑ اور ہڑپہ",
      "Kalibangan, Ropar and Lothal\nکالی بنگن، روپڑ اور لوتھل"
    ],
    "correctAnswer": 3,
    "explanation": "کالی بنگن راجستھان میں، روپڑ (یا روپ نگر) پنجاب میں، اور لوتھل گجرات میں واقع ہے۔ یہ تینوں اہم ہڑپہ مقامات جدید دور کے بھارت کی حدود میں واقع ہیں۔"
  },
  {
    "id": 631,
    "question": "As per the Chola Inscription, 'Pallichchhandam' refers to (TSTET 30 June 2025)\nچولا کتبے کے مطابق، 'پلیچ چندم' سے مراد ہے",
    "options": [
      "Land donated to Jain Institutions\nجین اداروں کو عطیہ کی گئی زمین",
      "Land gifted to Brahmins\nبرہمنوں کو تحفے میں دی گئی زمین",
      "Land for the maintenance of a school\nایک اسکول کی دیکھ بھال کے لیے زمین",
      "Land gifted to temples\nمندروں کو تحفے میں دی گئی زمین"
    ],
    "correctAnswer": 0,
    "explanation": "چولا کتبے زمین کے عطیات کی مختلف اقسام بیان کرتے ہیں۔ 'پلیچ چندم' خاص طور پر اس زمین کی طرف اشارہ کرتا ہے جو جین اداروں کی حمایت اور دیکھ بھال کے لیے عطیہ کی گئی تھی۔"
  },
  {
    "id": 632,
    "question": "The archaeologists are of the opinion that the city of Vijayanagara had four separate divisions. Among the four divisions the first division was (TSTET 30 June 2025)\nماہرین آثار قدیمہ کی رائے ہے کہ وجے نگر شہر کے چار الگ الگ حصے تھے۔ ان چار حصوں میں سے پہلا حصہ تھا",
    "options": [
      "situated on rocky hills which was devoted to temples,\nپتھریلی پہاڑیوں پر واقع تھا جو مندروں کے لیے وقف تھا",
      "situated on the valley where crops were raised using water from irrigation channels\nوادی میں واقع تھا جہاں آبپاشی کی نہروں سے پانی استعمال کرکے فصلیں اگائی جاتی تھیں",
      "a royal centre in which royal palaces and residences of important nayaks were located\nایک شاہی مرکز جس میں شاہی محلات اور اہم نائکوں کی رہائش گاہیں واقع تھیں",
      "Residences of ordinary people\nعام لوگوں کی رہائش گاہیں"
    ],
    "correctAnswer": 0,
    "explanation": "ماہرین آثار قدیمہ نے وجے نگر شہر کو کئی علاقوں میں تقسیم کیا ہے۔ پہلے حصے کو اکثر مقدس مرکز کہا جاتا ہے، جو دریائے تنگ بھدرا کے کنارے گرینائٹ کی پتھریلی پہاڑیوں پر واقع تھا اور بنیادی طور پر مندروں اور مذہبی ڈھانچوں پر مشتمل تھا۔"
  },
  {
    "id": 633,
    "question": "'Mehrauli Iron Pillar' Inscription refers to the achievements of (TSTET 30 June 2025)\n'مہرولی لوہے کے ستون' کا کتبہ کس کی کامیابیوں کی طرف اشارہ کرتا ہے",
    "options": [
      "Samudragupta\nسمندر گپت",
      "Gautamiputra Satakarni\nگوتمی پتر سات کرنی",
      "Chandragupta II\nچندر گپت دوم",
      "Ashoka\nاشوک"
    ],
    "correctAnswer": 2,
    "explanation": "دہلی کے قطب کمپلیکس میں واقع مہرولی لوہے کے ستون پر موجود کتبہ 'چندر' نامی بادشاہ کی بہادری کی تعریف کرتا ہے، جسے مورخین وسیع پیمانے پر گپت شہنشاہ چندرگپت دوم وکرمادتیہ کے طور پر شناخت کرتے ہیں۔"
  },
  {
    "id": 634,
    "question": "In France, these philosophers wanted to create a society based on freedom and equal laws and opportunities for all (TSTET 30 June 2025)\nفرانس میں، یہ فلسفی سب کے لیے آزادی اور مساوی قوانین اور مواقع پر مبنی معاشرہ بنانا چاہتے تھے",
    "options": [
      "John Locke, Jean Jacques Rousseau\nجان لاک، ژاں ژاک روسو",
      "Montesquieu and Aristotle\nمونٹیسکیو اور ارسطو",
      "John Locke and Karl Marx\nجان لاک اور کارل مارکس",
      "Noam Chomsky and Karl Marx\nنوم چومسکی اور کارل مارکس"
    ],
    "correctAnswer": 0,
    "explanation": "روشن خیالی کے فلسفیوں کے نظریات نے فرانسیسی انقلاب کو بہت متاثر کیا۔ جان لاک نے قدرتی حقوق کی وکالت کی، اور ژاں ژاک روسو نے 'سماجی معاہدہ' میں ایک عمومی مرضی اور مساوات پر مبنی معاشرے کی حمایت کی۔"
  },
  {
    "id": 635,
    "question": "One of the main demand of women during French Revolution was that (TSTET 30 June 2025)\nانقلاب فرانس کے دوران خواتین کا ایک اہم مطالبہ یہ تھا کہ",
    "options": [
      "the women should get the same political Rights as men\nخواتین کو مردوں کے برابر سیاسی حقوق ملنے چاہئیں",
      "all the women should be included in the list of Active Citizens\nتمام خواتین کو فعال شہریوں کی فہرست میں شامل کیا جانا چاہئے",
      "Napolean Bonaparte should be made the King of France\nنپولین بوناپارٹ کو فرانس کا بادشاہ بنایا جانا چاہئے",
      "The power should be in the hands of third estate\nاقتدار تیسری اسٹیٹ کے ہاتھ میں ہونا چاہئے"
    ],
    "correctAnswer": 0,
    "explanation": "انقلاب فرانس کے دوران، خواتین فعال شریک تھیں لیکن انہیں سیاسی حقوق سے محروم رکھا گیا تھا۔ ان کا سب سے اہم مطالبہ مردوں کے ساتھ سیاسی مساوات کا تھا، جس میں ووٹ ڈالنے اور عوامی عہدہ رکھنے کا حق بھی شامل تھا۔"
  },
  {
    "id": 636,
    "question": "As per this, no European power would be allowed to build colonies in the American Continents and the United States will not interfere in the affairs of Europe or colonies in other continents (TSTET 30 June 2025)\nاس کے مطابق، کسی بھی یورپی طاقت کو امریکی براعظموں میں نوآبادیاں بنانے کی اجازت نہیں ہوگی اور امریکہ یورپ یا دوسرے براعظموں میں نوآبادیوں کے معاملات میں مداخلت نہیں کرے گا",
    "options": [
      "Truman Doctrine\nٹرومین نظریہ",
      "Munroe Doctrine\nمنرو نظریہ",
      "Marshall Plan\nمارشل پلان",
      "Treaty of Paris\nمعاہدہ پیرس"
    ],
    "correctAnswer": 1,
    "explanation": "منرو نظریہ ریاستہائے متحدہ کی خارجہ پالیسی کا ایک موقف تھا جسے صدر جیمز منرو نے 1823 میں پیش کیا تھا۔ اس میں کہا گیا تھا کہ یورپی ممالک کی طرف سے امریکہ میں نوآبادیاں بنانے یا ریاستوں میں مداخلت کرنے کی مزید کوششوں کو جارحیت کے طور پر دیکھا جائے گا۔"
  },
  {
    "id": 637,
    "question": "Libya is located in this part of Africa Continent (TSTET 30 June 2025)\nلیبیا براعظم افریقہ کے اس حصے میں واقع ہے",
    "options": [
      "North-Western\nشمال مغربی",
      "Northern\nشمالی",
      "South-Eastern\nجنوب مشرقی",
      "Central\nوسطی"
    ],
    "correctAnswer": 1,
    "explanation": "لیبیا شمالی افریقہ کے مغرب کے علاقے میں واقع ایک ملک ہے۔ اس کی سرحد شمال میں بحیرہ روم سے ملتی ہے، جو اسے شمالی افریقہ کا حصہ بناتی ہے۔"
  },
  {
    "id": 638,
    "question": "One of the following is the provision of Right of Children in Free and Compulsory Education (RTE) Act, 2009 (TSTET 30 June 2025)\nمندرجہ ذیل میں سے ایک بچوں کے مفت اور لازمی تعلیم کے حق (RTE) ایکٹ، 2009 کی ایک شق ہے",
    "options": [
      "The Curriculum and Evaluation procedures must be in conformity with the values enshrined in the constitution\nنصاب اور تشخیصی طریقہ کار آئین میں درج اقدار کے مطابق ہونے چاہئیں",
      "Every Child should be admitted into the school at the age of three\nہر بچے کو تین سال کی عمر میں اسکول میں داخل کیا جانا چاہئے",
      "Children can continue in the school even after 14 years of age for the completion of Secondary Education\nبچے ثانوی تعلیم کی تکمیل کے لیے 14 سال کی عمر کے بعد بھی اسکول میں تعلیم جاری رکھ سکتے ہیں",
      "Child's name should be removed if the child fails in the class\nاگر بچہ کلاس میں فیل ہو جائے تو اس کا نام خارج کر دینا چاہئے"
    ],
    "correctAnswer": 0,
    "explanation": "آر ٹی ای ایکٹ، 2009 کی دفعہ 29(2) میں کہا گیا ہے کہ تعلیمی اتھارٹی، نصاب اور تشخیصی طریقہ کار وضع کرتے وقت، آئین میں درج اقدار کے ساتھ مطابقت کو مدنظر رکھے گی۔"
  },
  {
    "id": 639,
    "question": "With this act, the minimum age of marriage for girls was raised to 14 years (TSTET 30 June 2025)\nاس ایکٹ کے ذریعے لڑکیوں کی شادی کی کم از کم عمر بڑھا کر 14 سال کر دی گئی",
    "options": [
      "The POCSO Act, 2012\nپوکسو ایکٹ، 2012",
      "Sharada Act of 1929\nشاردہ ایکٹ 1929",
      "Child Marriages Act, 2006\nچائلڈ میرج ایکٹ، 2006",
      "Criminal Legal Amendment Act, 2013\nکرمنل لیگل امینڈمنٹ ایکٹ، 2013"
    ],
    "correctAnswer": 1,
    "explanation": "چائلڈ میرج ریسٹرینٹ ایکٹ 1929، جسے عام طور پر ساردا ایکٹ (اس کے بانی ہربلاس ساردا کے نام پر) کہا جاتا ہے، نے لڑکیوں کی شادی کی کم از کم عمر 14 سال اور لڑکوں کی 18 سال مقرر کی۔"
  },
  {
    "id": 640,
    "question": "In 1953, the States Reorganization Commission was appointed under the chairmanship of Fazal Ali to address the issue of formation of states on the basis of (TSTET 30 June 2025)\n1953 میں، ریاستوں کی تشکیل کے مسئلے کو حل کرنے کے لیے فضل علی کی سربراہی میں اسٹیٹس ری آرگنائزیشن کمیشن کا تقرر کیا گیا جس کی بنیاد تھی",
    "options": [
      "Caste\nذات",
      "Religions\nمذاہب",
      "Language\nزبان",
      "Culture\nثقافت"
    ],
    "correctAnswer": 2,
    "explanation": "لسانی بنیادوں پر ریاستوں کی تشکیل کے وسیع پیمانے پر مطالبے کے بعد، حکومت ہند نے 1953 میں اسٹیٹس ری آرگنائزیشن کمیشن کا تقرر کیا۔ کمیشن کا بنیادی مینڈیٹ زبان کی بنیاد پر ریاستوں کی تنظیم نو کا جائزہ لینا تھا۔"
  },
  {
    "id": 641,
    "question": "The main objective of Operation Blue Star was (TSTET 30 June 2025)\nآپریشن بلیو سٹار کا بنیادی مقصد تھا",
    "options": [
      "To conduct election in the newly formed states\nنئی تشکیل شدہ ریاستوں میں انتخابات کرانا",
      "To clear the Golden Temple complex in Amritsar from Sikh militants\nامرتسر میں گولڈن ٹیمپل کمپلیکس کو سکھ عسکریت پسندوں سے پاک کرنا",
      "To fight the Pakistan militants in Jammu & Kashmir\nجموں و کشمیر میں پاکستانی عسکریت پسندوں سے لڑنا",
      "Liberation of Bangladesh from Pakistan\nبنگلہ دیش کی پاکستان سے آزادی"
    ],
    "correctAnswer": 1,
    "explanation": "آپریشن بلیو سٹار جون 1984 میں بھارتی فوج کی طرف سے کیا گیا ایک فوجی آپریشن تھا۔ اس کا بنیادی مقصد سکھ عسکریت پسند رہنما جرنیل سنگھ بھنڈرانوالے اور اس کے مسلح پیروکاروں کو امرتسر میں گولڈن ٹیمپل کمپلیکس سے ہٹانا تھا۔"
  },
  {
    "id": 642,
    "question": "The major highlight of the National Emergency period in India was (TSTET 30 June 2025)\nبھارت میں قومی ایمرجنسی کے دور کی سب سے بڑی خاص بات تھی",
    "options": [
      "42nd Amendment of the Indian Constitution\nبھارتی آئین کی 42ویں ترمیم",
      "Entry of Rajiv Gandhi into Indian Politics\nراجیو گاندھی کا بھارتی سیاست میں داخلہ",
      "Enactment of Official Religious Act\nسرکاری مذہبی ایکٹ کا نفاذ",
      "Formation of New states on the basis of linguistic principle\nلسانی اصول کی بنیاد پر نئی ریاستوں کی تشکیل"
    ],
    "correctAnswer": 0,
    "explanation": "42ویں ترمیمی ایکٹ 1976 قومی ایمرجنسی (1975-1977) کے دوران نافذ کیا گیا تھا۔ یہ سب سے متنازعہ ترامیم میں سے ایک ہے، جس نے آئین میں وسیع پیمانے پر تبدیلیاں کیں، بشمول دیباچہ، اور سپریم کورٹ اور ہائی کورٹس کے اختیارات کو کم کرنے کی کوشش کی۔"
  },
  {
    "id": 643,
    "question": "As per the provisions of Article 356 of the Indian Constitution, the president may dismiss the State Government and order the Governor to take over the administration of the State with the advice of (TSTET 30 June 2025)\nبھارتی آئین کے آرٹیکل 356 کی دفعات کے مطابق، صدر ریاستی حکومت کو برطرف کر سکتا ہے اور گورنر کو کس کے مشورے سے ریاست کا انتظام سنبھالنے کا حکم دے سکتا ہے",
    "options": [
      "Chief Justice of India\nچیف جسٹس آف انڈیا",
      "Home Minister\nوزیر داخلہ",
      "The Prime Minister\nوزیر اعظم",
      "Chief Justice of High Court of that particular state\nاس مخصوص ریاست کی ہائی کورٹ کے چیف جسٹس"
    ],
    "correctAnswer": 2,
    "explanation": "بھارت کا صدر وزراء کی کونسل کی امداد اور مشورے پر عمل کرتا ہے، جس کی سربراہی وزیر اعظم کرتے ہیں۔ آرٹیکل 356 کے تحت صدر راج نافذ کرنے کا فیصلہ ایک انتظامی فیصلہ ہے جو یونین کابینہ، جس کی سربراہی وزیر اعظم کرتے ہیں، لیتی ہے اور پھر صدر کو اس کی سفارش کرتی ہے۔"
  },
  {
    "id": 644,
    "question": "The two major ideological and political Camps emerged in the post Second world war period were (TSTET 30 June 2025)\nدوسری جنگ عظیم کے بعد کے دور میں ابھرنے والے دو بڑے نظریاتی اور سیاسی کیمپ تھے",
    "options": [
      "The Communist bloc and Non-aligned bloc\nکمیونسٹ بلاک اور غیر وابستہ بلاک",
      "The Democratic-Capitalist bloc and Non-aligned bloc\nجمہوری-سرمایہ دارانہ بلاک اور غیر وابستہ بلاک",
      "The Communist bloc and the Democratic-Capitalist bloc\nکمیونسٹ بلاک اور جمہوری-سرمایہ دارانہ بلاک",
      "Fascist bloc and The Democratic bloc\nفاشسٹ بلاک اور جمہوری بلاک"
    ],
    "correctAnswer": 2,
    "explanation": "دوسری جنگ عظیم کے بعد، دنیا بڑی حد تک دو بڑے نظریاتی اور سیاسی بلاکوں میں تقسیم ہو گئی، جس کی وجہ سے سرد جنگ شروع ہوئی۔ یہ سوویت یونین کی قیادت میں کمیونسٹ بلاک، اور ریاستہائے متحدہ کی قیادت میں جمہوری-سرمایہ دارانہ بلاک تھے۔"
  },
  {
    "id": 645,
    "question": "A war fought behind closed doors through propaganda and words without real physical combat as in traditional warfare. This is known as (TSTET 30 June 2025)\nایک ایسی جنگ جو بند دروازوں کے پیچھے پروپیگنڈے اور الفاظ کے ذریعے لڑی جاتی ہے، بغیر حقیقی جسمانی لڑائی کے جیسا کہ روایتی جنگ میں ہوتا ہے۔ اسے کہا جاتا ہے",
    "options": [
      "Civil war\nخانہ جنگی",
      "Cold war\nسرد جنگ",
      "Guerrilla war\nگوریلا جنگ",
      "Nuclear war\nجوہری جنگ"
    ],
    "correctAnswer": 1,
    "explanation": "'سرد جنگ' کی اصطلاح ریاستہائے متحدہ اور سوویت یونین اور ان کے اتحادیوں کے درمیان جغرافیائی سیاسی تناؤ کی حالت کو بیان کرتی ہے۔ اس کی خصوصیت پروپیگنڈا، جاسوسی، اور پراکسی جنگیں تھیں، لیکن دونوں سپر پاورز کے درمیان براہ راست بڑے پیمانے پر لڑائی نہیں ہوئی۔"
  },
  {
    "id": 646,
    "question": "CIA is the (TSTET 30 June 2025)\nسی آئی اے ہے",
    "options": [
      "The spy agency of United States of America\nریاستہائے متحدہ امریکہ کی جاسوسی ایجنسی",
      "The militant group of Russia\nروس کا عسکریت پسند گروپ",
      "A radical student group fought for their rights\nایک بنیاد پرست طلباء کا گروپ جو اپنے حقوق کے لیے لڑا",
      "The space agency of United States of America\nریاستہائے متحدہ امریکہ کی خلائی ایجنسی"
    ],
    "correctAnswer": 0,
    "explanation": "سی آئی اے، یا سینٹرل انٹیلیجنس ایجنسی، ریاستہائے متحدہ کی وفاقی حکومت کی بنیادی غیر ملکی انٹیلیجنس اور کاؤنٹر انٹیلیجنس ایجنسی ہے۔ یہ ایک سویلین ایجنسی ہے جسے دنیا بھر سے قومی سلامتی کی معلومات اکٹھا کرنے، اس پر کارروائی کرنے، اور اس کا تجزیہ کرنے کا کام سونپا گیا ہے۔"
  },
  {
    "id": 647,
    "question": "The primary aim of the Bandung Conference was to (TSTET 30 June 2025)\nبانڈونگ کانفرنس کا بنیادی مقصد تھا",
    "options": [
      "Establish a new military alliance\nایک نیا فوجی اتحاد قائم کرنا",
      "Promote Western democracy\nمغربی جمہوریت کو فروغ دینا",
      "Promote Afro-Asian economic and cultural cooperation\nافریقی-ایشیائی اقتصادی اور ثقافتی تعاون کو فروغ دینا",
      "Expand colonial territories\nنوآبادیاتی علاقوں کو وسعت دینا"
    ],
    "correctAnswer": 2,
    "explanation": "بانڈونگ کانفرنس، جو 1955 میں انڈونیشیا میں منعقد ہوئی، نئی آزاد ایشیائی اور افریقی ریاستوں کا ایک اجلاس تھا۔ ایک اہم مقصد ان ممالک کے درمیان اقتصادی اور ثقافتی تعاون کو فروغ دینا اور نوآبادیات اور نو-نوآبادیات کی مخالفت کرنا تھا۔"
  },
  {
    "id": 648,
    "question": "Which of the following is termed as Excess Rainfall? (TSTET 30 June 2025)\nمندرجہ ذیل میں سے کسے اضافی بارش کہا جاتا ہے؟",
    "options": [
      "+20 percent or more of the average rainfall\nاوسط بارش کا +20 فیصد یا اس سے زیادہ",
      "+10 percent or more of the average rainfall\nاوسط بارش کا +10 فیصد یا اس سے زیادہ",
      "+19 percent to -19 percent of the average rainfall\nاوسط بارش کا +19 فیصد سے -19 فیصد تک",
      "-20 percent to -59 percent of the average rainfall\nاوسط بارش کا -20 فیصد سے -59 فیصد تک"
    ],
    "correctAnswer": 0,
    "explanation": "ہندوستان کا محکمہ موسمیات (IMD) بارش کی درجہ بندی طویل مدتی اوسط سے اس کے انحراف کی بنیاد پر کرتا ہے۔ بارش کے موسم کو 'اضافی' کے طور پر درجہ بند کیا جاتا ہے جب بارش اوسط سے +20% یا اس سے زیادہ ہو۔"
  },
  {
    "id": 649,
    "question": "One among the following does NOT come under cognitive domain (TSTET 30 June 2025)\nمندرجہ ذیل میں سے ایک علمی ڈومین (cognitive domain) کے تحت نہیں آتا ہے",
    "options": [
      "Remembering\nیاد رکھنا",
      "Drawing\nڈرائنگ",
      "Understanding\nسمجھنا",
      "Evaluating\nجانچنا"
    ],
    "correctAnswer": 1,
    "explanation": "بلوم کی درجہ بندی (Bloom's Taxonomy) کے مطابق، علمی ڈومین میں یاد رکھنا، سمجھنا، اور جانچنا جیسی فکری مہارتیں شامل ہیں۔ ڈرائنگ ایک جسمانی مہارت ہے جو سائیکوموٹر ڈومین (psychomotor domain) کے تحت آتی ہے۔"
  },
  {
    "id": 650,
    "question": "Identify the INCORRECT statement relating to aims & objectives (TSTET 30 June 2025)\nمقاصد و اہداف سے متعلق غلط بیان کی نشاندہی کریں",
    "options": [
      "Objectives can be achieved in a short duration of time\nمقاصد کو مختصر مدت میں حاصل کیا جا سکتا ہے",
      "Aims are long term goals\nاہداف طویل مدتی ہوتے ہیں",
      "Objectives are broad and philosophical in nature\nمقاصد وسیع اور فلسفیانہ نوعیت کے ہوتے ہیں",
      "Aims are general in nature\nاہداف عمومی نوعیت کے ہوتے ہیں"
    ],
    "correctAnswer": 2,
    "explanation": "تعلیم میں، اہداف وسیع، طویل مدتی اور فلسفیانہ بیانات ہوتے ہیں۔ دوسری طرف، مقاصد مخصوص، قابل پیمائش اور قلیل مدتی نتائج ہوتے ہیں۔ لہذا، یہ بیان کہ مقاصد وسیع اور فلسفیانہ ہوتے ہیں، غلط ہے۔"
  },
  {
    "id": 651,
    "question": "In a social studies lesson plan, the part that connects the pupil's previous knowledge with the new knowledge is (TSTET 30 June 2025)\nسماجی علوم کے سبق کے منصوبے میں، وہ حصہ جو طالب علم کے پچھلے علم کو نئے علم سے جوڑتا ہے وہ ہے (TSTET 30 جون 2025)",
    "options": [
      "Presentation\nپیشکش",
      "Introduction/Motivation\nتعارف/ترغیب",
      "Evaluation\nتشخیص",
      "Recapitulation\nاعادہ"
    ],
    "correctAnswer": 1,
    "explanation": "سبق کے منصوبے کا تعارفی یا ترغیبی مرحلہ نئی تعلیم کے لیے اسٹیج ترتیب دینے کے لیے بہت اہم ہوتا ہے۔ اس حصے کا ایک کلیدی کام طلباء کے سابقہ علم کو فعال کرنا اور جو کچھ وہ پہلے سے جانتے ہیں اور نئے مواد کے درمیان ایک ربط پیدا کرنا ہے۔"
  },
  {
    "id": 652,
    "question": "The curriculum that emphasizes on the development of democratic values and problem solving abilities among the students is (TSTET 30 June 2025)\nوہ نصاب جو طلباء میں جمہوری اقدار اور مسئلہ حل کرنے کی صلاحیتوں کی نشوونما پر زور دیتا ہے وہ ہے (TSTET 30 جون 2025)",
    "options": [
      "Spiral curriculum\nاسپائرل نصاب",
      "Concentric curriculum\nمرتکز نصاب",
      "Core curriculum\nبنیادی نصاب",
      "Integrated curriculum\nمربوط نصاب"
    ],
    "correctAnswer": 2,
    "explanation": "بنیادی نصاب تمام طلباء کے لیے درکار مشترکہ کورسز کا ایک مجموعہ ہے۔ اس کا ڈیزائن اکثر جمہوری معاشرے میں شہریت کے لیے ضروری مہارتوں اور علم کو فروغ دینے پر مرکوز ہوتا ہے، بشمول مسئلہ حل کرنا اور جمہوری اقدار کو سمجھنا۔"
  },
  {
    "id": 653,
    "question": "One among the following is NOT a characteristic of a good social studies text book (TSTET 30 June 2025)\nمندرجہ ذیل میں سے ایک اچھی سماجی علوم کی درسی کتاب کی خصوصیت نہیں ہے (TSTET 30 جون 2025)",
    "options": [
      "Use of simple and understandable language\nسادہ اور قابل فہم زبان کا استعمال",
      "Use of many technical terms\nبہت سی تکنیکی اصطلاحات کا استعمال",
      "Illustrations in the form of pictures, maps & diagrams\nتصاویر، نقشوں اور خاکوں کی شکل میں مثالیں",
      "Logical and psychological sequence\nمنطقی اور نفسیاتی ترتیب"
    ],
    "correctAnswer": 1,
    "explanation": "ایک اچھی درسی کتاب کو اپنے قارئین کے لیے قابل رسائی ہونا چاہیے۔ واضح وضاحت کے بغیر تکنیکی اصطلاحات کا زیادہ استعمال مواد کو سمجھنا مشکل بنا سکتا ہے اور سیکھنے میں رکاوٹ بن سکتا ہے۔ سادگی اور وضاحت کلیدی خصوصیات ہیں۔"
  },
  {
    "id": 654,
    "question": "One among the following does not come under 'Print Media' (TSTET 30 June 2025)\nمندرجہ ذیل میں سے ایک 'پرنٹ میڈیا' کے تحت نہیں آتا ہے (TSTET 30 جون 2025)",
    "options": [
      "News Paper\nاخبار",
      "Journals\nجرائد",
      "Encyclopaedias\nانسائیکلوپیڈیا",
      "Educational T.V.\nتعلیمی ٹی وی"
    ],
    "correctAnswer": 3,
    "explanation": "پرنٹ میڈیا سے مراد اخبارات اور جرائد جیسی مطبوعہ اشاعتوں کے ذریعے بڑے پیمانے پر مواصلات ہیں۔ تعلیمی ٹیلی ویژن (ٹی وی) براڈکاسٹ میڈیا کی ایک شکل ہے، جو معلومات کی ترسیل کے لیے الیکٹرانک ذرائع استعمال کرتا ہے۔"
  },
  {
    "id": 655,
    "question": "One among the following is a Teacher Centred Method (TSTET 30 June 2025)\nمندرجہ ذیل میں سے ایک استاد پر مرکوز طریقہ ہے (TSTET 30 جون 2025)",
    "options": [
      "Project Method\nپروجیکٹ کا طریقہ",
      "Problem Solving Method\nمسئلہ حل کرنے کا طریقہ",
      "Heuristic Method\nہیورسٹک طریقہ",
      "Lecture Method\nلیکچر کا طریقہ"
    ],
    "correctAnswer": 3,
    "explanation": "استاد پر مرکوز طریقہ میں، استاد علم کا بنیادی اختیار اور ذریعہ ہوتا ہے۔ لیکچر کا طریقہ اس کی ایک کلاسیکی مثال ہے، جہاں استاد ایک غیر فعال کلاس کو معلومات فراہم کرتا ہے۔ دیگر درج شدہ طریقے طالب علم پر مرکوز ہیں۔"
  },
  {
    "id": 656,
    "question": "A teacher should give more importance to this while teaching history (TSTET 30 June 2025)\nتاریخ پڑھاتے وقت ایک استاد کو اس بات پر زیادہ اہمیت دینی چاہیے (TSTET 30 جون 2025)",
    "options": [
      "Names of the kings and their reigns\nبادشاہوں کے نام اور ان کے ادوار",
      "Dates of different wars and events\nمختلف جنگوں اور واقعات کی تاریخیں",
      "Cause and Effect relationship\nسبب اور اثر کا تعلق",
      "Historical places\nتاریخی مقامات"
    ],
    "correctAnswer": 2,
    "explanation": "مؤثر تاریخ کی تعلیم واقعات کے پیچھے 'کیوں' کو سمجھنے پر زور دیتی ہے۔ سبب اور اثر کے تعلقات پر توجہ مرکوز کرنے سے طلباء کو تاریخی سوچ کی مہارتیں پیدا کرنے اور صرف حقائق کو یاد کرنے کے بجائے واقعات کی وسیع تر اہمیت کو سمجھنے میں مدد ملتی ہے۔"
  },
  {
    "id": 657,
    "question": "The resource that helps the students to understand the concept of time sense in history is (TSTET 30 June 2025)\nوہ وسیلہ جو طلباء کو تاریخ میں وقت کے احساس کے تصور کو سمجھنے میں مدد کرتا ہے وہ ہے (TSTET 30 جون 2025)",
    "options": [
      "Globe\nگلوب",
      "Map\nنقشہ",
      "Time Line\nٹائم لائن",
      "Charts\nچارٹس"
    ],
    "correctAnswer": 2,
    "explanation": "ٹائم لائن وقت کی ایک مدت کی گرافک نمائندگی ہے، جس پر اہم واقعات کو تاریخی ترتیب میں نشان زد کیا جاتا ہے۔ یہ طلباء کو تاریخی واقعات کے تسلسل کو دیکھنے اور تاریخی وقت کا احساس پیدا کرنے میں مدد دینے کے لیے ایک بہترین ذریعہ ہے۔"
  },
  {
    "id": 658,
    "question": "The father of Evaluation is (TSTET 30 June 2025)\nتشخیص کا بانی ہے (TSTET 30 جون 2025)",
    "options": [
      "J.P. Guilford\nجے. پی. گلفورڈ",
      "B.S. Bloom\nبی. ایس. بلوم",
      "J.S. Bruner\nجے. ایس. برونر",
      "Robert Mager\nرابرٹ میگر"
    ],
    "correctAnswer": 1,
    "explanation": "بینجمن ایس. بلوم کو تعلیمی تشخیص میں ایک کلیدی شخصیت سمجھا جاتا ہے۔ ان کی 'تعلیمی مقاصد کی درجہ بندی' نے سیکھنے کے مقاصد کی درجہ بندی کے لیے ایک منظم فریم ورک فراہم کیا، جس نے تعلیمی تشخیص کے جدید طریقوں کی بنیاد رکھی۔"
  },
  {
    "id": 659,
    "question": "Choose the INCORRECT pair (TSTET 30 June 2025)\nغلط جوڑی کا انتخاب کریں (TSTET 30 جون 2025)",
    "options": [
      "Essay type questions - Subjectivity\nمضمون نویسی کے سوالات - موضوعیت",
      "Objective type questions - Validity\nمعروضی قسم کے سوالات - جواز",
      "Short answer questions - Comprehensiveness\nمختصر جوابی سوالات - جامعیت",
      "Objective type questions - Reliability\nمعروضی قسم کے سوالات - اعتبار"
    ],
    "correctAnswer": 2,
    "explanation": "مختصر جوابی سوالات جامعیت کی پیمائش (پورے مواد کے علاقے کا احاطہ کرنے) کے لیے بہترین ذریعہ نہیں ہیں۔ معروضی ٹیسٹ زیادہ مؤثر طریقے سے مواد کی ایک وسیع رینج کا احاطہ کر سکتے ہیں۔ مختصر جوابات کو جامعیت کے ساتھ جوڑنا سب سے کمزور ربط ہے۔"
  },
  {
    "id": 660,
    "question": "Continuous and Comprehensive Evaluation (CCE) mainly aims at (TSTET 30 June 2025)\nمسلسل اور جامع تشخیص (CCE) کا بنیادی مقصد ہے (TSTET 30 جون 2025)",
    "options": [
      "To help the teacher to develop teaching strategy\nاستاد کو تدریسی حکمت عملی تیار کرنے میں مدد کرنا",
      "To help in the selection of students for higher education\nاعلیٰ تعلیم کے لیے طلباء کے انتخاب میں مدد کرنا",
      "To help the students for their holistic development\nطلباء کی ہمہ جہت ترقی میں مدد کرنا",
      "To assess the student at the end of the year\nسال کے آخر میں طالب علم کا جائزہ لینا"
    ],
    "correctAnswer": 2,
    "explanation": "مسلسل اور جامع تشخیص (CCE) کا بنیادی مقصد سال بھر طالب علم کی ترقی کے تمام پہلوؤں کا جائزہ لینا ہے۔ اس میں تعلیمی (اکیڈمک) اور غیر تعلیمی (زندگی کی مہارتیں، رویے، اقدار) دونوں شعبے شامل ہیں، جو ہمہ جہت ترقی کو فروغ دیتے ہیں۔"
  },
  {
    "id": 661,
    "question": "Identify the correct sequence of the given temperatures in descending order (12°C, -16°C, 29°C, 0°C, 4°C, 1°C, -1°C, -4°C, 16°C) (TSTET 24 May 2024)\nدیے گئے درجہ حرارت کی صحیح ترتیب کو نزولی ترتیب میں شناخت کریں (12°C, -16°C, 29°C, 0°C, 4°C, 1°C, -1°C, -4°C, 16°C) (TSTET 24 مئی 2024)",
    "options": [
      "0°C, -1°C, 1°C, -4°C, 4°C, 12°C, -16°C, 16°C, 29°C",
      "-16°C, -4°C, -1°C, 0°C, 1°C, 4°C, 12°C, 16°C, 29°C",
      "-1°C, -4°C, -16°C, 0°C, 1°C, 4°C, 12°C, 16°C, 29°C",
      "29°C, 16°C, 12°C, 4°C, 1°C, 0°C, -1°C, -4°C, -16°C"
    ],
    "correctAnswer": 3,
    "explanation": "نزولی ترتیب کا مطلب ہے اعداد کو سب سے بڑی قدر سے سب سے چھوٹی قدر تک ترتیب دینا۔ درجہ حرارت کے لیے، سب سے بڑا مثبت عدد سب سے بڑا ہے، اور سب سے بڑی مطلق قدر والا منفی عدد سب سے چھوٹا ہے۔ صحیح ترتیب 29°C, 16°C, 12°C, 4°C, 1°C, 0°C, -1°C, -4°C, -16°C ہے۔"
  },
  {
    "id": 662,
    "question": "The local time of 'X' located at 90° East Longitude, when it is 12 noon at Greenwich located at 0° longitudes is (TSTET 24 May 2024)\n90° مشرقی طول البلد پر واقع 'X' کا مقامی وقت کیا ہوگا، جب 0° طول البلد پر واقع گرین وچ میں دوپہر کے 12 بجے ہوں گے؟ (TSTET 24 مئی 2024)",
    "options": [
      "6:00 p.m.\nشام 6:00 بجے",
      "6:00 a.m.\nصبح 6:00 بجے",
      "3:00 p.m.\nسہ پہر 3:00 بجے",
      "3:00 a.m.\nصبح 3:00 بجے"
    ],
    "correctAnswer": 0,
    "explanation": "زمین ہر گھنٹے میں 15° طول البلد گھومتی ہے۔ پرائم میریڈین (گرین وچ) سے ہر 15° مشرق کی طرف، وقت ایک گھنٹہ آگے ہوتا ہے۔ چونکہ مقام 'X' 90° مشرق میں ہے، وقت کا فرق 90 / 15 = 6 گھنٹے ہے۔ لہذا، 'X' کا وقت گرین وچ سے 6 گھنٹے آگے ہوگا، جس سے یہ شام کے 6:00 بجے ہوں گے جب گرین وچ میں دوپہر کے 12 بجے ہوں گے۔"
  },
  {
    "id": 663,
    "question": "The Byson Gorge is located in this state of India (TSTET 24 May 2024)\nبائیسن گورج بھارت کی اس ریاست میں واقع ہے (TSTET 24 مئی 2024)",
    "options": [
      "Jammu and Kashmir\nجموں و کشمیر",
      "Arunachala Pradesh\nاروناچل پردیش",
      "Andhra Pradesh\nآندھرا پردیش",
      "Gujarat\nگجرات"
    ],
    "correctAnswer": 2,
    "explanation": "بائیسن گورج آندھرا پردیش میں دریائے گوداوری پر واقع ہے۔ یہ پاپیکونڈالو پہاڑی سلسلے اور پاپیکونڈالو نیشنل پارک کا ایک خوبصورت حصہ ہے۔"
  },
  {
    "id": 664,
    "question": "Puerto Rica or Naves, one of the deepest trenches in the world, is located in this Ocean (TSTET 24 May 2024)\nپورٹو ریکا یا نیوس، جو دنیا کی سب سے گہری کھائیوں میں سے ایک ہے، اس بحر میں واقع ہے (TSTET 24 مئی 2024)",
    "options": [
      "The Indian Ocean\nبحر ہند",
      "The Arctic Ocean\nبحر منجمد شمالی",
      "The Pacific Ocean\nبحرالکاہل",
      "The Atlantic Ocean\nبحر اوقیانوس"
    ],
    "correctAnswer": 3,
    "explanation": "پورٹو ریکو ٹرینچ بحر اوقیانوس کا سب سے گہرا مقام ہے۔ یہ بحیرہ کیریبین اور بحر اوقیانوس کے درمیان کی سرحد پر واقع ہے۔"
  },
  {
    "id": 665,
    "question": "Actually, the winds move slightly to the right in the northern hemisphere and to the left in the southern hemisphere due to the impact of (TSTET 24 May 2024)\nدرحقیقت، ہوائیں شمالی نصف کرہ میں تھوڑا دائیں طرف اور جنوبی نصف کرہ میں بائیں طرف حرکت کرتی ہیں جس کی وجہ ہے (TSTET 24 مئی 2024)",
    "options": [
      "Earth's Revolution around the Sun on its own axis\nزمین کا اپنے محور پر سورج کے گرد گردش کرنا",
      "Earth's Rotation on its own axis\nزمین کا اپنے محور پر گھومنا",
      "Revolution of the Moon around the Earth on its own axis\nچاند کا اپنے محور پر زمین کے گرد گردش کرنا",
      "Tilting of the Earth while rotating around itself\nزمین کا اپنے گرد گھومتے ہوئے جھکاؤ"
    ],
    "correctAnswer": 1,
    "explanation": "اس رجحان کو کوریولس اثر کے نام سے جانا جاتا ہے۔ یہ حرکت کرتی ہوئی اشیاء (جیسے ہوا اور سمندری دھاریں) کا ایک ظاہری انحراف ہے جو زمین کے اپنے محور پر گھومنے کی وجہ سے ہوتا ہے۔ یہ اثر شمالی نصف کرہ میں اشیاء کو دائیں طرف اور جنوبی نصف کرہ میں بائیں طرف منحرف کرنے کا سبب بنتا ہے۔"
  },
  {
    "id": 666,
    "question": "Identify the mineral that is available in thin layers and is a non-conductor of electricity and heat (TSTET 24 May 2024)\nاس معدنیات کی شناخت کریں جو پتلی تہوں میں دستیاب ہے اور بجلی اور حرارت کا غیر موصل ہے (TSTET 24 مئی 2024)",
    "options": [
      "Copper\nتانبا",
      "Mica\nابرک",
      "Manganese\nمینگنیز",
      "Aluminium\nایلومینیم"
    ],
    "correctAnswer": 1,
    "explanation": "ابرک ایک معدنیات ہے جو اپنی بہت پتلی، لچکدار چادروں میں تقسیم ہونے کی صلاحیت کے لیے جانا جاتا ہے۔ یہ ایک بہترین برقی اور حرارتی انسولیٹر ہے، جو اسے الیکٹرانکس اور برقی صنعتوں میں ایک قیمتی مواد بناتا ہے۔"
  },
  {
    "id": 667,
    "question": "These states of India are sharing the boundary with Bhutan (TSTET 24 May 2024)\nبھارت کی یہ ریاستیں بھوٹان کے ساتھ سرحد کا اشتراک کرتی ہیں (TSTET 24 مئی 2024)",
    "options": [
      "Sikkim, West Bengal, Arunachala Pradesh and Assam\nسکم، مغربی بنگال، اروناچل پردیش اور آسام",
      "Bihar, Meghalaya, Arunachala Pradesh and Assam\nبہار، میگھالیہ، اروناچل پردیش اور آسام",
      "Meghalaya, West Bengal, Arunachala Pradesh and Sikkim\nمیگھالیہ، مغربی بنگال، اروناچل پردیش اور سکم",
      "West Bengal, Arunachala Pradesh, Sikkim and Manipur\nمغربی بنگال، اروناچل پردیش، سکم اور منی پور"
    ],
    "correctAnswer": 0,
    "explanation": "بھارت بھوٹان کے ساتھ اپنی سرحد چار ریاستوں کے ساتھ بانٹتا ہے۔ مغرب سے مشرق تک، یہ ریاستیں سکم، مغربی بنگال، آسام، اور اروناچل پردیش ہیں۔"
  },
  {
    "id": 668,
    "question": "One of the following is NOT the function of World Trade organization (TSTET 24 May 2024)\nمندرجہ ذیل میں سے ایک عالمی تجارتی تنظیم کا کام نہیں ہے (TSTET 24 مئی 2024)",
    "options": [
      "It cooperates with the international institutions such as IMF and World bank\nیہ بین الاقوامی اداروں جیسے آئی ایم ایف اور عالمی بینک کے ساتھ تعاون کرتا ہے",
      "It oversees International Trade policies\nیہ بین الاقوامی تجارتی پالیسیوں کی نگرانی کرتا ہے",
      "It acts as a forum for multilateral trade negotiations\nیہ کثیرالجہتی تجارتی مذاکرات کے لیے ایک فورم کے طور پر کام کرتا ہے",
      "It provides financial support to the developing and undeveloped countries of the world\nیہ دنیا کے ترقی پذیر اور غیر ترقی یافتہ ممالک کو مالی مدد فراہم کرتا ہے"
    ],
    "correctAnswer": 3,
    "explanation": "عالمی تجارتی تنظیم (WTO) بین الاقوامی تجارت کے لیے قوانین طے کرتی ہے اور تنازعات کو حل کرنے میں مدد کرتی ہے۔ تاہم، یہ ممالک کو براہ راست مالی مدد یا قرض فراہم نہیں کرتی ہے۔ مالی امداد فراہم کرنا عالمی بینک اور بین الاقوامی مالیاتی فنڈ (IMF) جیسے اداروں کا بنیادی کردار ہے۔"
  },
  {
    "id": 669,
    "question": "Identify the Intermediary Goods among the following (TSTET 24 May 2024)\nمندرجہ ذیل میں سے درمیانی اشیاء کی شناخت کریں (TSTET 24 مئی 2024)",
    "options": [
      "Bricks and steel used in construction work\nتعمیراتی کام میں استعمال ہونے والی اینٹیں اور اسٹیل",
      "Televisions used at home\nگھر میں استعمال ہونے والے ٹیلی ویژن",
      "The coal used for cooking purpose\nکھانا پکانے کے مقصد کے لیے استعمال ہونے والا کوئلہ",
      "Mobile Phones used by the individuals\nافراد کے زیر استعمال موبائل فون"
    ],
    "correctAnswer": 0,
    "explanation": "درمیانی اشیاء وہ مصنوعات ہیں جو دیگر اشیاء کی پیداوار میں ان پٹ کے طور پر استعمال ہوتی ہیں۔ اینٹیں اور اسٹیل ایک حتمی مصنوعات، جیسے کہ عمارت، بنانے کے لیے استعمال ہوتے ہیں۔ ٹیلی ویژن، موبائل فون، اور گھر میں کھانا پکانے کے لیے کوئلہ حتمی اشیاء ہیں، کیونکہ وہ براہ راست صارف کے ذریعے استعمال ہوتی ہیں۔"
  },
  {
    "id": 670,
    "question": "The valleys lying in between the lesser Himalayas and the Shiwaliks are called as (TSTET 24 May 2024)\nچھوٹے ہمالیہ اور شوالک کے درمیان واقع وادیوں کو کہا جاتا ہے (TSTET 24 مئی 2024)",
    "options": [
      "Gorges\nگھاٹیاں",
      "Flood Plains\nسیلابی میدان",
      "Canyons\nکھائیاں",
      "Duns\nدُون"
    ],
    "correctAnswer": 3,
    "explanation": "چھوٹے ہمالیہ (ہماچل) اور بیرونی ہمالیہ (شوالک) کے درمیان واقع طولانی وادیوں کو 'دُون' کے نام سے جانا جاتا ہے۔ مشہور مثالوں میں دہرادون، کوٹلی دُون، اور پٹلی دُون شامل ہیں۔"
  },
  {
    "id": 671,
    "question": "The only industry in India which is self-reliant and complete in the value chain i.e. from raw material to the highest value added products (TSTET 24 May 2024)\nبھارت میں واحد صنعت جو خود انحصار ہے اور ویلیو چین میں مکمل ہے یعنی خام مال سے لے کر سب سے زیادہ ویلیو ایڈڈ مصنوعات تک (TSTET 24 مئی 2024)",
    "options": [
      "Fertilizer Industry\nکھاد کی صنعت",
      "Chemical Industry\nکیمیائی صنعت",
      "Textile Industry\nٹیکسٹائل انڈسٹری",
      "Iron and Steel Industry\nلوہا اور اسٹیل کی صنعت"
    ],
    "correctAnswer": 2,
    "explanation": "ٹیکسٹائل انڈسٹری کو بھارت میں خود انحصار اور اپنی ویلیو چین میں مکمل سمجھا جاتا ہے۔ یہ پیداوار کے پورے عمل پر محیط ہے، کپاس جیسے خام ریشوں کی کاشت سے لے کر، کتائی، بُنائی، اور پروسیسنگ کے ذریعے، ملبوسات جیسی تیار شدہ اشیاء کی تیاری تک۔"
  },
  {
    "id": 672,
    "question": "These forests are found in large parts of India, Northern Australia and in Central America (TSTET 24 May 2024)\nیہ جنگلات بھارت کے بڑے حصوں، شمالی آسٹریلیا اور وسطی امریکہ میں پائے جاتے ہیں (TSTET 24 مئی 2024)",
    "options": [
      "Tropical Deciduous forest\nاشنکٹبندیی پਤ جھڑی جنگل",
      "Temperate Evergreen forests\nمعتدل سدا بہار جنگلات",
      "Tropical Evergreen Forests\nاشنکٹبندیی سدا بہار جنگلات",
      "Coniferous forests\nصنوبری جنگلات"
    ],
    "correctAnswer": 0,
    "explanation": "اشنکٹبندیی پਤ جھڑی جنگلات، جنہیں مون سون جنگلات بھی کہا جاتا ہے، ان علاقوں میں پائے جاتے ہیں جہاں خشک موسم نمایاں ہوتا ہے۔ ان جنگلات میں درخت اس مدت کے دوران اپنے پتے گرا دیتے ہیں۔ یہ بائیوم بھارت کے بڑے حصوں کے ساتھ ساتھ شمالی آسٹریلیا اور وسطی امریکہ کی خصوصیت ہے۔"
  },
  {
    "id": 673,
    "question": "This type of farming depends upon monsoon rainfall, natural fertility of the soil and sustainability of other environmental conditions to the crops grown (TSTET 24 May 2024)\nاس قسم کی کاشتکاری مون سون کی بارش، مٹی کی قدرتی زرخیزی اور اگائی جانے والی فصلوں کے لیے دیگر ماحولیاتی حالات کی پائیداری پر منحصر ہے (TSTET 24 مئی 2024)",
    "options": [
      "Intensive Subsistence farming\nگہری گزربسر کی کاشتکاری",
      "Simple Subsistence farming\nسادہ گزربسر کی کاشتکاری",
      "Commercial farming\nتجارتی کاشتکاری",
      "Extensive farming\nوسیع کاشتکاری"
    ],
    "correctAnswer": 1,
    "explanation": "سادہ گزربسر کی کاشتکاری (یا قدیم گزربسر کی کاشتکاری) کی خصوصیت اس کا قدرتی حالات جیسے مون سون کی بارشوں اور مٹی کی زرخیزی پر انحصار ہے، جس میں سادہ اوزار اور خاندانی محنت کا استعمال کرتے ہوئے بنیادی طور پر خاندان کے اپنے استعمال کے لیے فصلیں اگائی جاتی ہیں۔"
  },
  {
    "id": 674,
    "question": "This mountain range forms the northern Edge of the Deccan Plateau (TSTET 24 May 2024)\nیہ پہاڑی سلسلہ دکن کے سطح مرتفع کا شمالی کنارہ بناتا ہے (TSTET 24 مئی 2024)",
    "options": [
      "The Mahadev Range\nمہادیو سلسلہ",
      "The Kaimur Range\nکیمور سلسلہ",
      "The Satpura Range\nست پورہ سلسلہ",
      "The Aravali Range\nاراولّی سلسلہ"
    ],
    "correctAnswer": 2,
    "explanation": "دکن کا سطح مرتفع جنوبی ہندوستان میں ایک بڑا مثلثی سطح مرتفع ہے۔ ست پورہ سلسلہ، وندھیا سلسلے کے ساتھ مل کر، اس کی شمالی سرحد بناتا ہے، جو سطح مرتفع کے لیے ایک وسیع بنیاد کے طور پر کام کرتا ہے۔"
  },
  {
    "id": 675,
    "question": "The two prime factors for the suitable location for establishing Aluminum smelting industry are (TSTET 24 May 2024)\nایلومینیم سمیلٹنگ انڈسٹری قائم کرنے کے لیے موزوں مقام کے لیے دو اہم عوامل ہیں (TSTET 24 مئی 2024)",
    "options": [
      "Availability of cheap labour and Regular supply of water resources\nسستی لیبر کی دستیابی اور پانی کے وسائل کی باقاعدہ فراہمی",
      "Regular supply of electricity and an assured source of raw material\nبجلی کی باقاعدہ فراہمی اور خام مال کا یقینی ذریعہ",
      "Availability of cheap labour and an assured source of raw material\nسستی لیبر کی دستیابی اور خام مال کا یقینی ذریعہ",
      "Regular supply of water resources and availability of transport facilities\nپانی کے وسائل کی باقاعدہ فراہمی اور نقل و حمل کی سہولیات کی دستیابی"
    ],
    "correctAnswer": 1,
    "explanation": "ایلومینیم سمیلٹنگ ایک انتہائی توانائی طلب عمل ہے جس کے لیے بجلی کی وسیع اور بلا تعطل فراہمی کی ضرورت ہوتی ہے۔ لہذا، ایک سستا اور قابل اعتماد بجلی کا ذریعہ سب سے اہم عنصر ہے۔ خام مال، باکسائٹ، کی یقینی فراہمی دوسری کلیدی ضرورت ہے۔"
  },
  {
    "id": 676,
    "question": "The Hot local winds that move down the Rocky Mountains in the USA-Canada and part of North America are (TSTET 24 May 2024)\nگرم مقامی ہوائیں جو امریکہ-کینیڈا اور شمالی امریکہ کے کچھ حصوں میں راکی پہاڑوں سے نیچے آتی ہیں وہ ہیں (TSTET 24 مئی 2024)",
    "options": [
      "Simmon\nسمون",
      "Yoma\nیوما",
      "Mistral\nمسٹرل",
      "Chinnok\nچنوک"
    ],
    "correctAnswer": 3,
    "explanation": "چنوک ایک گرم، خشک ہوا ہے جو راکی پہاڑوں کے مشرقی جانب سے چلتی ہے۔ یہ درجہ حرارت میں تیزی سے اضافہ اور برف پگھلانے کے لیے جانی جاتی ہے، جس کی وجہ سے اسے 'برف کھانے والی' کا لقب ملا ہے۔"
  },
  {
    "id": 677,
    "question": "One of the following is NOT required to construct Human Development Index (TSTET 24 May 2024)\nانسانی ترقی کا اشاریہ بنانے کے لیے مندرجہ ذیل میں سے ایک کی ضرورت نہیں ہے (TSTET 24 مئی 2024)",
    "options": [
      "Life Expectancy at birth\nپیدائش کے وقت متوقع عمر",
      "Education-Adult Literacy, combined Gross Enrolment Ratio\nتعلیم-بالغوں کی خواندگی، مشترکہ مجموعی اندراج کا تناسب",
      "Growth rate of Population\nآبادی کی شرح نمو",
      "Real GDP per Capita based on purchasing power\nخریداری کی طاقت پر مبنی حقیقی فی کس جی ڈی پی"
    ],
    "correctAnswer": 2,
    "explanation": "انسانی ترقی کا اشاریہ (HDI) تین جہتوں کی بنیاد پر ترقی کی پیمائش کرتا ہے: ایک لمبی اور صحت مند زندگی (متوقع عمر)، علم (تعلیمی سطح)، اور ایک مہذب معیار زندگی (فی کس GNI)۔ آبادی کی شرح نمو HDI کے حساب کتاب کا براہ راست جزو نہیں ہے۔"
  },
  {
    "id": 678,
    "question": "The king of England who believed that the absolute powers of the king were given by God, so the kings ruled the country by a Divine Right (TSTET 24 May 2024)\nانگلستان کا وہ بادشاہ جو یہ مانتا تھا کہ بادشاہ کے مطلق اختیارات خدا کی طرف سے دیے گئے ہیں، لہذا بادشاہ خدائی حق کے تحت ملک پر حکومت کرتے تھے (TSTET 24 مئی 2024)",
    "options": [
      "Henry VII\nہنری ہفتم",
      "Edward VI\nایڈورڈ ششم",
      "James I\nجیمز اول",
      "James VI\nجیمز ششم"
    ],
    "correctAnswer": 2,
    "explanation": "انگلستان کے جیمز اول (جو اسکاٹ لینڈ کے جیمز ششم بھی تھے) 'بادشاہوں کے خدائی حق' کے مضبوط حامی تھے۔ انہوں نے دلیل دی کہ بادشاہوں نے اپنا اختیار براہ راست خدا سے حاصل کیا ہے اور وہ پارلیمنٹ جیسے زمینی حکام کے سامنے جوابدہ نہیں ہیں۔"
  },
  {
    "id": 679,
    "question": "In 1789 CE, The Government of the United States of America adopted (TSTET 24 May 2024)\n1789 عیسوی میں، ریاستہائے متحدہ امریکہ کی حکومت نے اپنایا (TSTET 24 مئی 2024)",
    "options": [
      "A Democratic Constitution\nایک جمہوری آئین",
      "A Republican Constitution\nایک جمہوریہ آئین",
      "Monarchial form of Constitution\nبادشاہی طرز کا آئین",
      "Jacobian Constitution\nجیکوبین آئین"
    ],
    "correctAnswer": 1,
    "explanation": "امریکی آئین، جو 1789 میں نافذ ہوا، نے ایک وفاقی جمہوریہ قائم کی۔ جمہوریہ حکومت کی ایک ایسی شکل ہے جس میں ملک کو 'عوامی معاملہ' سمجھا جاتا ہے، نہ کہ حکمرانوں کی نجی تشویش یا جائیداد، اور جہاں ریاست کے عہدے وراثت میں نہیں ملتے۔ اس طرح، یہ ایک جمہوریہ آئین ہے۔"
  },
  {
    "id": 680,
    "question": "To accomplish the unification of Germany, Bismarck got the first opportunity to rouse nationalist feelings among Prussians with opening of the issue of these places with Denmark (TSTET 24 May 2024)\nجرمنی کے اتحاد کو مکمل کرنے کے لیے، بسمارک کو ڈنمارک کے ساتھ ان جگہوں کا مسئلہ اٹھا کر پروشینوں میں قوم پرستانہ جذبات ابھارنے کا پہلا موقع ملا (TSTET 24 مئی 2024)",
    "options": [
      "Hanover and Hassel-Cassel\nہینوور اور ہیسل-کیسل",
      "Bavaria, Baden and Wurttemberg\nباویریا، بیڈن اور ورٹمبرگ",
      "Schleswig and Holstein\nشلس وِگ اور ہولسٹین",
      "City of Frankfurt and Holstein\nفرینکفرٹ شہر اور ہولسٹین"
    ],
    "correctAnswer": 2,
    "explanation": "شلس وِگ-ہولسٹین سوال، جو ڈنمارک کی حکمرانی کے تحت بڑی جرمن آبادی والی دو ڈچیوں کی حیثیت پر ایک پیچیدہ تنازعہ تھا، نے اوٹو وان بسمارک کو 1864 میں ڈنمارک کے خلاف جنگ چھیڑنے کا بہانہ فراہم کیا۔ یہ کامیاب جنگ ان تین جنگوں میں سے پہلی تھی جو اس نے پروشیا کے تحت جرمن اتحاد حاصل کرنے کے لیے شروع کیں۔"
  },
  {
    "id": 681,
    "question": "Among the following, Identify the preconditions required for industrialization A) The Concentration of wealth in the hands of those who want to invest money in production B) Availability of workers who were willing to work for low wages C) Requirement of large market to sell its products D) Requirement of cheap raw materials and efficient transport infrastructure (TSTET 24 May 2024)\nمندرجہ ذیل میں سے، صنعت کاری کے لیے درکار شرائط کی شناخت کریں A) ان لوگوں کے ہاتھوں میں دولت کا ارتکاز جو پیداوار میں پیسہ لگانا چاہتے ہیں B) کم اجرت پر کام کرنے کے لیے تیار کارکنوں کی دستیابی C) اپنی مصنوعات فروخت کرنے کے لیے بڑی منڈی کی ضرورت D) سستے خام مال اور موثر ٹرانسپورٹ کے بنیادی ڈھانچے کی ضرورت (TSTET 24 مئی 2024)",
    "options": [
      "A & B only\nصرف A اور B",
      "B & C only\nصرف B اور C",
      "B, C & D only\nصرف B، C اور D",
      "A, B, C & D\nA، B، C اور D"
    ],
    "correctAnswer": 3,
    "explanation": "درج کردہ چاروں عوامل صنعت کاری کے لیے ضروری شرائط ہیں۔ سرمایہ کاری (A)، ایک بڑی لیبر فورس (B)، تیار شدہ سامان کے لیے بازار (C)، اور خام مال اور نقل و حمل تک رسائی (D) یہ تمام اہم اجزاء ہیں جنہوں نے صنعتی انقلاب کو ہوا دی۔"
  },
  {
    "id": 682,
    "question": "Nizam Ul Mulk, the founder of the Asaf Jahi Dynasty, was the (TSTET 24 May 2024)\nآصف جاہی خاندان کے بانی نظام الملک تھے (TSTET 24 مئی 2024)",
    "options": [
      "Mansabdar under Mughal Rule\nمغل حکومت کے تحت منصب دار",
      "The Subedar of the Deccan under the Mughal rule\nمغل حکومت کے تحت دکن کا صوبیدار",
      "The Subedar of Bahamani rulers\nبہمنی حکمرانوں کا صوبیدار",
      "The Revenue Minister of Aurangajeb\nاورنگزیب کا وزیر مالیات"
    ],
    "correctAnswer": 1,
    "explanation": "نظام الملک مغل سلطنت میں ایک اعلیٰ عہدے دار اور جنرل تھے۔ انہیں دکن کا صوبیدار (گورنر) مقرر کیا گیا تھا۔ کمزور ہوتی مغل مرکزی اتھارٹی کا فائدہ اٹھاتے ہوئے، انہوں نے درحقیقت آزاد حکومت قائم کی اور آصف جاہی خاندان کی بنیاد رکھی، جس نے حیدرآباد کی ریاست پر حکومت کی۔"
  },
  {
    "id": 683,
    "question": "This Mughal emperor granted Robert Clive the right to rule Bengal (TSTET 24 May 2024)\nاس مغل شہنشاہ نے رابرٹ کلائیو کو بنگال پر حکومت کرنے کا حق دیا (TSTET 24 مئی 2024)",
    "options": [
      "Bahadurshah I\nبہادر شاہ اول",
      "Jahandar Shah\nجہاندار شاہ",
      "Shah Alam II\nشاہ عالم دوم",
      "Mohammed Azam Shah\nمحمد اعظم شاہ"
    ],
    "correctAnswer": 2,
    "explanation": "بکسر کی جنگ (1764) کے بعد، مغل شہنشاہ شاہ عالم دوم نے 1765 میں الہ آباد کے معاہدے پر دستخط کیے۔ اس معاہدے میں، انہوں نے بنگال، بہار اور اڑیسہ کی دیوانی — یعنی محصول وصول کرنے کا حق — برطانوی ایسٹ انڈیا کمپنی کو دے دیا، جس کی نمائندگی رابرٹ کلائیو کر رہے تھے۔ اس عطا نے مؤثر طریقے سے انگریزوں کو اس خطے پر انتظامی کنٹرول دے دیا۔"
  },
  {
    "id": 684,
    "question": "The Central and South American countries are called 'Latin American Countries' since these languages are considered as off shoots of Latin (TSTET 24 May 2024)\nوسطی اور جنوبی امریکہ کے ممالک کو 'لاطینی امریکی ممالک' کہا جاتا ہے کیونکہ ان زبانوں کو لاطینی کی شاخیں سمجھا جاتا ہے (TSTET 24 مئی 2024)",
    "options": [
      "Spanish and Portuguese\nہسپانوی اور پرتگالی",
      "French and English\nفرانسیسی اور انگریزی",
      "German and Portuguese\nجرمن اور پرتگالی",
      "Spanish and German\nہسپانوی اور جرمن"
    ],
    "correctAnswer": 0,
    "explanation": "اصطلاح 'لاطینی امریکہ' امریکہ کے ان حصوں کی طرف اشارہ کرتی ہے جہاں رومانوی زبانیں — وہ زبانیں جو لاطینی سے نکلی ہیں — بولی جاتی ہیں۔ اس خطے میں دو غالب زبانیں ہسپانوی اور پرتگالی ہیں، جو اسپین اور پرتگال کے نوآبادیات لائے تھے۔"
  },
  {
    "id": 685,
    "question": "An Inca site of worship, known as Machu Pichu, is in this country (TSTET 24 May 2024)\nانکا کی ایک عبادت گاہ، جسے ماچو پیچو کے نام سے جانا جاتا ہے، اس ملک میں ہے (TSTET 24 مئی 2024)",
    "options": [
      "Brasilia\nبرازیلیا",
      "Peru\nپیرو",
      "Argentina\nارجنٹائن",
      "Venezuela\nوینزویلا"
    ],
    "correctAnswer": 1,
    "explanation": "ماچو پیچو 15ویں صدی کا ایک مشہور انکا قلعہ ہے جو پیرو کے انڈیز پہاڑوں میں واقع ہے۔ یہ جنوبی امریکہ کے سب سے اہم آثار قدیمہ میں سے ایک ہے اور انکا سلطنت کی علامت ہے۔"
  },
  {
    "id": 686,
    "question": "In the 16th century, these people had established a 'Seaborne Empire' over the Indian Ocean (TSTET 24 May 2024)\n16ویں صدی میں، ان لوگوں نے بحر ہند پر ایک 'سمندری سلطنت' قائم کی تھی (TSTET 24 مئی 2024)",
    "options": [
      "Spanish\nہسپانوی",
      "English\nانگریز",
      "French\nفرانسیسی",
      "Portuguese\nپرتگالی"
    ],
    "correctAnswer": 3,
    "explanation": "پرتگالی یورپی سمندری تلاش میں پیش پیش تھے۔ 16ویں صدی میں، انہوں نے بحر ہند میں تجارتی چوکیوں اور بحری اڈوں کا ایک وسیع نیٹ ورک قائم کیا، جس سے ایک 'سمندری سلطنت' (Estado da Índia) وجود میں آئی جس نے اہم تجارتی راستوں کو کنٹرول کیا۔"
  },
  {
    "id": 687,
    "question": "In between 1839-1842, the two Opium wars were fought between (TSTET 24 May 2024)\n1839-1842 کے درمیان، دو افیون کی جنگیں ان کے درمیان لڑی گئیں (TSTET 24 مئی 2024)",
    "options": [
      "China and France\nچین اور فرانس",
      "China and England\nچین اور انگلستان",
      "India and China\nبھارت اور چین",
      "China and Japan\nچین اور جاپان"
    ],
    "correctAnswer": 1,
    "explanation": "پہلی افیون جنگ (1839-1842) چنگ خاندان کے چین اور برطانیہ (انگلستان) کے درمیان لڑی گئی تھی۔ یہ تنازعہ چین کی طرف سے برطانوی قیادت میں افیون کی تجارت کو دبانے کی کوششوں سے پیدا ہوا۔ (نوٹ: سوال میں 'دو' جنگوں کا ذکر ہے، لیکن تاریخ کی حد پہلی جنگ سے مطابقت رکھتی ہے)۔"
  },
  {
    "id": 688,
    "question": "In this system of Government, the Government get their authority from the people and have to answer to the people (TSTET 24 May 2024)\nاس حکومتی نظام میں، حکومت اپنا اختیار عوام سے حاصل کرتی ہے اور اسے عوام کو جوابدہ ہونا پڑتا ہے (TSTET 24 مئی 2024)",
    "options": [
      "Constitutional Monarchy\nآئینی بادشاہت",
      "Republican Government\nجمہوری حکومت",
      "Democratic Government\nجمہوری حکومت",
      "Aristocratic Government\nاشرافیہ کی حکومت"
    ],
    "correctAnswer": 2,
    "explanation": "جمہوری حکومت کا تعریفی اصول عوامی خودمختاری ہے، جس کا مطلب ہے کہ حکومت کا اختیار حکومت کیے جانے والوں کی رضامندی سے حاصل ہوتا ہے۔ حکومت عوام کے سامنے جوابدہ ہوتی ہے، عام طور پر باقاعدہ، آزاد اور منصفانہ انتخابات کے ذریعے۔"
  },
  {
    "id": 689,
    "question": "One of the following was NOT true regarding the effect of the Economic Depression -1929-39 (TSTET 24 May 2024)\n1929-39 کے معاشی بحران کے اثرات کے بارے میں مندرجہ ذیل میں سے ایک درست نہیں تھا (TSTET 24 مئی 2024)",
    "options": [
      "25% of Americans and 33% of other countries people were unemployed\n25% امریکی اور 33% دیگر ممالک کے لوگ بے روزگار تھے",
      "As factories were closed down and the trade was declined, cities became centers of decline\nجیسے جیسے فیکٹریاں بند ہوئیں اور تجارت میں کمی آئی، شہر زوال کے مراکز بن گئے",
      "The millions of farmers stopped cultivating the land as the prices for agricultural products were declined\nلاکھوں کسانوں نے زمین کاشت کرنا چھوڑ دیا کیونکہ زرعی مصنوعات کی قیمتیں گر گئی تھیں",
      "There was no impact of the Economic Depression on Germany\nجرمنی پر معاشی بحران کا کوئی اثر نہیں ہوا"
    ],
    "correctAnswer": 3,
    "explanation": "یہ بیان کہ جرمنی متاثر نہیں ہوا تھا، غلط ہے۔ جرمنی میں ویمار جمہوریہ عظیم کساد بازاری سے شدید متاثر ہوا، کیونکہ امریکی بینکوں نے اپنے قرضے واپس لے لیے تھے۔ نتیجے میں ہونے والی معاشی تباہی، انتہائی مہنگائی، اور بڑے پیمانے پر بے روزگاری نے عدم استحکام کا ایک ایسا ماحول پیدا کیا جو ایڈولف ہٹلر اور نازی پارٹی کے عروج میں اہم کردار ادا کرتا تھا۔"
  },
  {
    "id": 690,
    "question": "The lower house of the German Parliament is known as (TSTET 24 May 2024)\nجرمن پارلیمنٹ کے ایوان زیریں کو کہا جاتا ہے (TSTET 24 مئی 2024)",
    "options": [
      "Duma\nڈوما",
      "Reichstag\nرائخ اسٹگ",
      "Bundesrat\nبندس رات",
      "National Assembly\nقومی اسمبلی"
    ],
    "correctAnswer": 1,
    "explanation": "تاریخی طور پر، جرمن پارلیمنٹ کا ایوان زیریں رائخ اسٹگ تھا۔ آج کل کے ایوان زیریں کو بنڈسٹاگ کہا جاتا ہے، لیکن اس کا اجلاس تاریخی رائخ اسٹگ کی عمارت میں ہوتا ہے۔ بندس رات ایوان بالا ہے، جو وفاقی ریاستوں کی نمائندگی کرتا ہے۔"
  },
  {
    "id": 691,
    "question": "The three principles of the programme of 'Sun Yet Sen' were Nationalism, Democracy and Socialism. Here, Socialism means (TSTET 24 May 2024)\n'سن یات سین' کے پروگرام کے تین اصول قوم پرستی، جمہوریت اور سوشلزم تھے۔ یہاں، سوشلزم کا مطلب ہے (TSTET 24 مئی 2024)",
    "options": [
      "Overthrowing of Manchu dynasty and distribution of Government lands to the peasants\nمانچو خاندان کا تختہ الٹنا اور سرکاری زمینوں کی کسانوں میں تقسیم",
      "Establishing a people's Government\nعوامی حکومت کا قیام",
      "Controlling industries and land reforms to distribute land to the landless peasants\nصنعتوں کو کنٹرول کرنا اور بے زمین کسانوں میں زمین تقسیم کرنے کے لیے زمینی اصلاحات",
      "Establishing a constitutional Monarchy in the country\nملک میں آئینی بادشاہت کا قیام"
    ],
    "correctAnswer": 2,
    "explanation": "سن یات سین کے 'عوام کے تین اصولوں' میں 'عوام کی livelihood' (Mínshēng) کا اصول شامل تھا، جس کا ترجمہ اکثر سوشلزم کے طور پر کیا جاتا ہے۔ یہ اصول سرمائے کے ضابطے اور زمین کی ملکیت کی مساوات کے ذریعے معاشی مساوات کو یقینی بنانے پر مرکوز تھا، جس میں کسانوں کی مدد کے لیے زمینی اصلاحات شامل تھیں۔"
  },
  {
    "id": 692,
    "question": "The Indian Constitutional Drafting Committee consisted of (TSTET 24 May 2024)\nہندوستانی آئین کی ڈرافٹنگ کمیٹی پر مشتمل تھی (TSTET 24 مئی 2024)",
    "options": [
      "A Chairman, seven other members and Constitutional Advisor\nایک چیئرمین، سات دیگر اراکین اور آئینی مشیر",
      "A Chairman, nine other members and Constitutional Advisor\nایک چیئرمین، نو دیگر اراکین اور آئینی مشیر",
      "A Chairman, Six other members and Constitutional Advisor\nایک چیئرمین، چھ دیگر اراکین اور آئینی مشیر",
      "A Chairman, sixteen other members and Constitutional Advisor\nایک چیئرمین، سولہ دیگر اراکین اور آئینی مشیر"
    ],
    "correctAnswer": 2,
    "explanation": "ہندوستانی آئین ساز اسمبلی کی ڈرافٹنگ کمیٹی کی صدارت ڈاکٹر بی. آر. امبیڈکر نے کی تھی اور یہ چھ دیگر اراکین پر مشتمل تھی۔ کمیٹی کی کل تعداد سات اراکین تھی (1 چیئرمین + 6 اراکین)۔ بی. این. راؤ اسمبلی کے آئینی مشیر تھے لیکن وہ خود کمیٹی کے رکن نہیں تھے۔"
  },
  {
    "id": 693,
    "question": "Among the following, identify the phases of Disaster Management A) Disaster Strike B) Emergency response and relief C) Rehabilitation and reconstruction D) Preparedness and Mitigation (TSTET 24 May 2024)\nمندرجہ ذیل میں سے، ڈیزاسٹر مینجمنٹ کے مراحل کی شناخت کریں A) آفت کا حملہ B) ہنگامی ردعمل اور امداد C) بحالی اور تعمیر نو D) تیاری اور تخفیف (TSTET 24 مئی 2024)",
    "options": [
      "A, B & C only\nصرف A، B اور C",
      "B, C & D only\nصرف B، C اور D",
      "A, B & D only\nصرف A، B اور D",
      "A, B, C & D\nA، B، C اور D"
    ],
    "correctAnswer": 3,
    "explanation": "جامع ڈیزاسٹر مینجمنٹ سائیکل میں تمام چار مراحل شامل ہیں۔ یہ آفت سے پہلے کی کارروائیوں جیسے تیاری اور تخفیف (D) سے شروع ہوتا ہے، اس کے بعد خود واقعہ (A)، فوری ہنگامی ردعمل (B)، اور بحالی اور تعمیر نو (C) کے ذریعے طویل مدتی بحالی ہوتی ہے۔"
  },
  {
    "id": 694,
    "question": "'Doosra' and the 'reverse swing' were associated with this game (TSTET 24 May 2024)\n'دوسرا' اور 'ریورس سوئنگ' اس کھیل سے وابستہ تھے (TSTET 24 مئی 2024)",
    "options": [
      "Kabaddi\nکبڈی",
      "Football\nفٹ بال",
      "Cricket\nکرکٹ",
      "Hockey\nہاکی"
    ],
    "correctAnswer": 2,
    "explanation": "'ریورس سوئنگ' کرکٹ میں ایک باؤلنگ تکنیک ہے جہاں ایک پرانی، گھسی ہوئی گیند روایتی سوئنگ کے مخالف سمت میں سوئنگ کرتی ہے۔ 'دوسرا' ایک آف اسپن باؤلر کی طرف سے پھینکی جانے والی ایک مخصوص قسم کی گیند ہے جو دائیں ہاتھ کے بلے باز سے دور گھومتی ہے۔"
  },
  {
    "id": 695,
    "question": "The members of the Constituent Assembly were (TSTET 24 May 2024)\nآئین ساز اسمبلی کے اراکین تھے (TSTET 24 مئی 2024)",
    "options": [
      "Directly elected through adult franchise\nبالغ رائے دہی کے ذریعے براہ راست منتخب",
      "elected mainly by the members of the existing provincial legislatures\nبنیادی طور پر موجودہ صوبائی اسمبلیوں کے اراکین کے ذریعے منتخب",
      "Nominated by the Viceroy\nوائسرائے کے ذریعے نامزد",
      "Representatives of the Princely States only\nصرف شاہی ریاستوں کے نمائندے"
    ],
    "correctAnswer": 1,
    "explanation": "ہندوستان کی آئین ساز اسمبلی کے اراکین کو عوام نے براہ راست منتخب نہیں کیا تھا۔ انہیں بالواسطہ طور پر 1946 میں قائم ہونے والی صوبائی قانون ساز اسمبلیوں کے اراکین نے منتخب کیا تھا۔ شاہی ریاستوں کے نمائندے عام طور پر حکمرانوں کے ذریعے نامزد کیے جاتے تھے۔"
  },
  {
    "id": 696,
    "question": "India will have supreme right to take decisions on internal as well as external matters and make her own laws and no external power can make laws for India. This means that (TSTET 24 May 2024)\nبھارت کو اندرونی اور بیرونی معاملات پر فیصلے کرنے اور اپنے قوانین بنانے کا اعلیٰ حق حاصل ہوگا اور کوئی بیرونی طاقت بھارت کے لیے قوانین نہیں بنا سکتی۔ اس کا مطلب ہے کہ (TSTET 24 مئی 2024)",
    "options": [
      "India is a Socialist State\nبھارت ایک سوشلسٹ ریاست ہے",
      "India is a Democratic State\nبھارت ایک جمہوری ریاست ہے",
      "India is a Sovereign State\nبھارت ایک خودمختار ریاست ہے",
      "India is a secular State\nبھارت ایک سیکولر ریاست ہے"
    ],
    "correctAnswer": 2,
    "explanation": "یہ بیان خودمختاری کے تصور کی تعریف کرتا ہے۔ ایک خودمختار ریاست آزاد ہوتی ہے اور اسے اپنے علاقے اور حکمرانی پر حتمی اختیار حاصل ہوتا ہے، جو اپنی داخلی اور خارجی پالیسیوں میں بیرونی کنٹرول یا اثر و رسوخ سے آزاد ہوتی ہے۔"
  },
  {
    "id": 697,
    "question": "Among the following, the Indian States having only one Lok Sabha seat are (TSTET 24 May 2024)\nمندرجہ ذیل میں سے، وہ بھارتی ریاستیں جن میں صرف ایک لوک سبھا نشست ہے وہ ہیں (TSTET 24 مئی 2024)",
    "options": [
      "Mizoram, Nagaland and Sikkim\nمیزورم، ناگالینڈ اور سکم",
      "Manipur, Meghalaya and Sikkim\nمنی پور، میگھالیہ اور سکم",
      "Manipur, Meghalaya and Mizoram\nمنی پور، میگھالیہ اور میزورم",
      "Tripura, Mizoram and Manipur\nتریپورہ، میزورم اور منی پور"
    ],
    "correctAnswer": 0,
    "explanation": "آبادی کے حجم کی بنیاد پر، بھارت میں کئی چھوٹی ریاستوں کو لوک سبھا (ایوان زیریں) میں ایک ہی نشست مختص کی گئی ہے۔ دیے گئے اختیارات میں سے، میزورم، ناگالینڈ، اور سکم ہر ایک کے پاس صرف ایک لوک سبھا حلقہ ہے۔"
  },
  {
    "id": 698,
    "question": "The followers of Swami Dayananda Saraswathi set up the Dayanand Anglo Vedic School to (TSTET 24 May 2024)\nسوامی دیانند سرسوتی کے پیروکاروں نے دیانند اینگلو ویدک اسکول قائم کیا تاکہ (TSTET 24 مئی 2024)",
    "options": [
      "Revive a reformed Hindu Religion and to engage in Social Work and Social Service for national Construction\nایک اصلاح شدہ ہندو مذہب کو زندہ کرنا اور قومی تعمیر کے لیے سماجی کام اور سماجی خدمت میں مشغول ہونا",
      "Educate children in modern subjects and at the same time keep them in touch with their religion and culture\nبچوں کو جدید مضامین میں تعلیم دینا اور ساتھ ہی انہیں اپنے مذہب اور ثقافت سے جوڑے رکھنا",
      "Advocate the worship of one supreme God through simple rituals and recitation of Vedic mantras\nسادہ رسومات اور ویدک منتروں کی تلاوت کے ذریعے ایک اعلیٰ خدا کی عبادت کی وکالت کرنا",
      "Educate the children to enable them understand simple rituals and recitation of Vedic mantras\nبچوں کو سادہ رسومات اور ویدک منتروں کی تلاوت کو سمجھنے کے قابل بنانے کے لیے تعلیم دینا"
    ],
    "correctAnswer": 1,
    "explanation": "دیانند اینگلو ویدک (D.A.V.) تحریک کا مقصد ایک ایسا تعلیمی نظام بنانا تھا جو جدید، مغربی علم (اینگلو) کو روایتی ہندوستانی ثقافت اور ویدک اصولوں (ویدک) کے ساتھ متوازن کرے۔ اس کا مقصد طلباء کو عصری دنیا کے لیے تیار کرنا تھا جبکہ یہ یقینی بنانا تھا کہ وہ اپنی ثقافتی اور مذہبی ورثے سے جڑے رہیں۔"
  },
  {
    "id": 699,
    "question": "The article 18 of the Indian Constitution talks about (TSTET 24 May 2024)\nہندوستانی آئین کا آرٹیکل 18 اس کے بارے میں بات کرتا ہے (TSTET 24 مئی 2024)",
    "options": [
      "Abolition of Untouchability\nچھوت چھات کا خاتمہ",
      "Equal Protection of Law\nقانون کا مساوی تحفظ",
      "Abolition of Titles\nخطابات کا خاتمہ",
      "Equality of Opportunities\nمواقع کی مساوات"
    ],
    "correctAnswer": 2,
    "explanation": "آرٹیکل 18، حق مساوات کے تحت، خطابات کے خاتمے سے متعلق ہے۔ یہ ریاست کو خطابات (فوجی اور تعلیمی امتیازات کے علاوہ) عطا کرنے سے منع کرتا ہے اور ہندوستان کے شہریوں کو کسی غیر ملکی ریاست سے کوئی خطاب قبول کرنے سے منع کرتا ہے۔"
  },
  {
    "id": 700,
    "question": "The theme of the Road Safety Week, 2006 was (TSTET 24 May 2024)\nروڈ سیفٹی ہفتہ، 2006 کا موضوع تھا (TSTET 24 مئی 2024)",
    "options": [
      "Our Aim, Zero Harm\nہمارا مقصد، صفر نقصان",
      "Sustainable Transport\nپائیدار ٹرانسپورٹ",
      "Sadak Suraksha jeevan Raksha\nسڑک سرکشا جیون رکشا",
      "Road Safety and no Accident\nروڈ سیفٹی اور کوئی حادثہ نہیں"
    ],
    "correctAnswer": 3,
    "explanation": "جنوری 2006 میں بھارت میں منائے جانے والے 17ویں قومی روڈ سیفٹی ہفتہ کا موضوع 'روڈ سیفٹی اور کوئی حادثہ نہیں' تھا۔ اس موضوع کو ٹریفک قوانین کے بارے میں عوامی بیداری بڑھانے اور سڑکوں پر ہلاکتوں کو کم کرنے کے لیے فروغ دیا گیا تھا۔"
  },
  {
    "id": 701,
    "question": "One among the following is NOT a form of trafficking (TSTET 24 May 2024)\nمندرجہ ذیل میں سے ایک اسمگلنگ کی شکل نہیں ہے",
    "options": [
      "Forced prostitution\nجبری جسم فروشی",
      "involving children in begging for money and beating them to obey\nبچوں کو پیسے مانگنے کے لیے بھیک میں شامل کرنا اور انہیں حکم ماننے کے لیے مارنا",
      "Removing body parts and doing business\nجسمانی اعضاء نکالنا اور کاروبار کرنا",
      "Threatening to harm or threatening to stop education\nنقصان پہنچانے کی دھمکی دینا یا تعلیم روکنے کی دھمکی دینا"
    ],
    "correctAnswer": 3,
    "explanation": "انسانی اسمگلنگ میں استحصال کے مقصد سے دھمکی، طاقت یا زبردستی کے ذریعے افراد کی بھرتی، نقل و حمل یا پناہ دینا شامل ہے۔ جبری جسم فروشی، جبری بھیک، اور اعضاء کی اسمگلنگ استحصال کی تسلیم شدہ شکلیں ہیں۔ جبکہ تعلیم روکنے کی دھمکی دینا جبر کی ایک شکل ہے، یہ خود اسمگلنگ کی شکل نہیں ہے جب تک کہ اسے کسی کو مزدوری یا جنسی استحصال میں مجبور کرنے کے لیے ایک آلے کے طور پر استعمال نہ کیا جائے۔"
  },
  {
    "id": 702,
    "question": "For the first time in the history of Election Commission, the election notification for these two constituencies had been cancelled in 2016 (TSTET 24 May 2024)\nالیکشن کمیشن کی تاریخ میں پہلی بار، 2016 میں ان دو حلقوں کے لیے انتخابی نوٹیفکیشن منسوخ کر دیا گیا تھا",
    "options": [
      "Aravakurichi and Tanjavore\nارواکوریچی اور تنجاور",
      "Vellore and Tiruchirapalli\nویلور اور تروچراپلی",
      "Dindigul and Madurai\nڈنڈیگل اور مدورائی",
      "Shiv Ganga and Tenkasi\nشیو گنگا اور ٹینکاسی"
    ],
    "correctAnswer": 0,
    "explanation": "مئی 2016 میں، الیکشن کمیشن آف انڈیا نے امیدواروں کی جانب سے ووٹروں میں بڑے پیمانے پر منظم طریقے سے رقم کی تقسیم کے ثبوت کی وجہ سے تمل ناڈو کے ارواکوریچی اور تنجاور (تنجاور) حلقوں میں انتخابات کے نوٹیفکیشن کو منسوخ کرنے کا ایک غیر معمولی قدم اٹھایا۔"
  },
  {
    "id": 703,
    "question": "The Rate of GST for Watches is 12%. The Maximum Retail Price of a Watch is Rs. 22400. The amount of tax to be paid to the Government for purchasing watch is (TSTET 24 May 2024)\nگھڑیوں پر جی ایس ٹی کی شرح 12% ہے۔ ایک گھڑی کی زیادہ سے زیادہ خوردہ قیمت 22400 روپے ہے۔ گھڑی خریدنے پر حکومت کو ادا کیے جانے والے ٹیکس کی رقم ہے",
    "options": [
      "Rs. 20000\n20000 روپے",
      "Rs. 2000\n2000 روپے",
      "Rs. 2400\n2400 روپے",
      "Rs. 2600\n2600 روپے"
    ],
    "correctAnswer": 2,
    "explanation": "زیادہ سے زیادہ خوردہ قیمت (MRP) میں جی ایس ٹی شامل ہے۔ فرض کریں کہ ٹیکس سے پہلے کی قیمت 'P' ہے۔ مساوات یہ ہے: P + (P کا 12%) = 22400، جو آسان ہو کر 1.12 * P = 22400 بن جاتی ہے۔ P کے لیے حل کرنے پر P = 20000 آتا ہے۔ جی ایس ٹی کی رقم MRP اور ٹیکس سے پہلے کی قیمت کا فرق ہے: 22400 - 20000 = 2400 روپے۔"
  },
  {
    "id": 704,
    "question": "One among the following is not the characteristic feature of developing countries (TSTET 24 May 2024)\nمندرجہ ذیل میں سے ایک ترقی پذیر ممالک کی خصوصیت نہیں ہے",
    "options": [
      "Rapid Population Growth\nتیز رفتار آبادی میں اضافہ",
      "High standard of living\nاعلیٰ معیارِ زندگی",
      "Excessive dependence on agriculture\nزراعت پر بے حد انحصار",
      "Lack of infrastructural development\nبنیادی ڈھانچے کی ترقی کا فقدان"
    ],
    "correctAnswer": 1,
    "explanation": "ترقی پذیر ممالک کی عام طور پر خصوصیات میں آبادی میں تیز اضافہ، زراعت پر بہت زیادہ انحصار، اور ناکافی بنیادی ڈھانچہ شامل ہیں۔ اعلیٰ معیارِ زندگی، جس کا مطلب اعلیٰ فی کس آمدنی، معیاری صحت کی دیکھ بھال، اور تعلیم ہے، ترقی یافتہ ممالک کی پہچان ہے، ترقی پذیر ممالک کی نہیں۔"
  },
  {
    "id": 705,
    "question": "Among the following, identify the tax imposed by the state Government (TSTET 24 May 2024)\nمندرجہ ذیل میں سے، ریاستی حکومت کی طرف سے عائد کردہ ٹیکس کی نشاندہی کریں",
    "options": [
      "Personal Income Tax\nذاتی انکم ٹیکس",
      "Goods and Service Tax\nگڈز اینڈ سروس ٹیکس",
      "Customs duty\nکسٹم ڈیوٹی",
      "Land Revenue and Stamp Duty\nلینڈ ریونیو اور اسٹامپ ڈیوٹی"
    ],
    "correctAnswer": 3,
    "explanation": "ہندوستان کے وفاقی ٹیکس کے ڈھانچے میں، ذاتی انکم ٹیکس اور کسٹم ڈیوٹی مرکزی حکومت کی طرف سے عائد کی جاتی ہیں۔ جی ایس ٹی مرکز اور ریاستیں دونوں عائد کرتی ہیں۔ زمین کا محصول (لینڈ ریونیو) اور جائیداد کے لین دین پر اسٹامپ ڈیوٹی وہ ٹیکس ہیں جو ریاستی حکومتوں کے خصوصی دائرہ اختیار میں آتے ہیں۔"
  },
  {
    "id": 706,
    "question": "The Indian Law Governing migration and employment of Indians abroad is (TSTET 24 May 2024)\nہندوستانیوں کی بیرون ملک ہجرت اور روزگار کو کنٹرول کرنے والا ہندوستانی قانون ہے",
    "options": [
      "The enabling Act, 1933\nدی انیبلنگ ایکٹ، 1933",
      "The emigration Act, 1983\nدی ایمیگریشن ایکٹ، 1983",
      "The emigration Act, 1921\nدی ایمیگریشن ایکٹ، 1921",
      "The immigration and Nationality Act, 1952\nدی امیگریشن اینڈ نیشنلٹی ایکٹ، 1952"
    ],
    "correctAnswer": 1,
    "explanation": "ایمیگریشن ایکٹ 1983 ہندوستان کا کلیدی قانون ہے جو بیرون ملک روزگار کے لیے ہندوستانی شہریوں کی بھرتی کو منظم کرتا ہے۔ اس کا مقصد تارکین وطن کارکنوں کے حقوق اور فلاح و بہبود کا تحفظ کرنا اور ان کے استحصال کو روکنا ہے۔"
  },
  {
    "id": 707,
    "question": "Among the following, the non-commercial bank is (TSTET 24 May 2024)\nمندرجہ ذیل میں سے، غیر تجارتی بینک ہے",
    "options": [
      "The Reserve bank of India\nریزرو بینک آف انڈیا",
      "The State bank of India\nاسٹیٹ بینک آف انڈیا",
      "The Axis Bank\nایکسس بینک",
      "The ICICI Bank\nآئی سی آئی سی آئی بینک"
    ],
    "correctAnswer": 0,
    "explanation": "ریزرو بینک آف انڈیا (آر بی آئی) ملک کا مرکزی بینک ہے۔ ایس بی آئی، ایکسس، اور آئی سی آئی سی آئی جیسے تجارتی بینکوں کے برعکس، آر بی آئی عام عوام سے براہ راست لین دین نہیں کرتا ہے۔ اس کے فرائض ریگولیٹری ہیں اور ان میں مانیٹری پالیسی کا انتظام، کرنسی جاری کرنا، اور حکومت اور دیگر بینکوں کے لیے بینکر کا کردار ادا کرنا شامل ہے۔"
  },
  {
    "id": 708,
    "question": "In India, the rates of GST at present are (TSTET 24 May 2024)\nہندوستان میں، اس وقت جی ایس ٹی کی شرحیں ہیں",
    "options": [
      "5%, 10%, 15% and 20%",
      "5%, 12%, 18% and 28%",
      "7%, 12%, 18% and 24%",
      "5%, 14%, 21% and 28%"
    ],
    "correctAnswer": 1,
    "explanation": "ہندوستان میں گڈز اینڈ سروسز ٹیکس (جی ایس ٹی) کا ایک درجہ بند ڈھانچہ ہے جس میں اشیاء اور خدمات کے لیے چار بنیادی شرحیں ہیں۔ یہ معیاری سلیب 5%، 12%، 18%، اور 28% ہیں۔ کچھ اشیاء مستثنیٰ ہیں (0%)، جبکہ سونے پر 3% ٹیکس ہے۔"
  },
  {
    "id": 709,
    "question": "Now a days, all the farmers prefer cash crops to food crops. What problems does this lead to? This question aimed at achieving this academic standard (TSTET 24 May 2024)\nآج کل، تمام کسان غذائی فصلوں پر نقد فصلوں کو ترجیح دیتے ہیں۔ اس سے کیا مسائل پیدا ہوتے ہیں؟ اس سوال کا مقصد اس تعلیمی معیار کو حاصل کرنا ہے",
    "options": [
      "Conceptual understanding\nتصوراتی تفہیم",
      "Reflection on contemporary issues and questioning\nعصری مسائل پر غور و فکر اور سوال کرنا",
      "Information skills\nمعلوماتی مہارتیں",
      "Appreciation and sensitivity\nقدردانی اور حساسیت"
    ],
    "correctAnswer": 1,
    "explanation": "یہ سوال طلباء کو ایک موجودہ رجحان کا تجزیہ کرنے، اس کے ممکنہ نتائج (مثلاً، غذائی تحفظ، ماحولیات، معیشت پر) کے بارے میں سوچنے، اور سوالات اٹھانے پر اکساتا ہے۔ یہ حقائق کو یاد کرنے سے آگے بڑھ کر عصری مسائل پر غور و فکر اور سوال کرنے کے تعلیمی معیار کے تحت آتا ہے۔"
  },
  {
    "id": 710,
    "question": "Which of the following statement is NOT TRUE related to black board? (TSTET 24 May 2024)\nبلیک بورڈ کے متعلق مندرجہ ذیل میں سے کون سا بیان درست نہیں ہے؟",
    "options": [
      "Black board acts as a mirror for the classroom work\nبلیک بورڈ کلاس روم کے کام کے لیے ایک آئینے کا کام کرتا ہے",
      "Students should not be involved for writing on Black board\nطلباء کو بلیک بورڈ پر لکھنے کے لیے شامل نہیں کیا جانا چاہیے",
      "Black board can be used at anytime as per need\nبلیک بورڈ کو ضرورت کے مطابق کسی بھی وقت استعمال کیا جا سکتا ہے",
      "Black board can also be used along with other aids\nبلیک بورڈ کو دیگر معاون آلات کے ساتھ بھی استعمال کیا جا سکتا ہے"
    ],
    "correctAnswer": 1,
    "explanation": "بلیک بورڈ کلاس روم میں ایک اہم انٹرایکٹو ٹول ہے۔ طلباء کو بورڈ پر لکھنے یا مسائل حل کرنے کے لیے شامل کرنا ایک قابل قدر تدریسی حکمت عملی ہے جو فعال سیکھنے اور مشغولیت کو فروغ دیتی ہے۔ لہذا، یہ بیان کہ طلباء کو شامل نہیں کیا جانا چاہیے، غلط ہے۔"
  },
  {
    "id": 711,
    "question": "Which of the following statement is NOT TRUE related to Inductive method? (TSTET 24 May 2024)\nاستقرائی طریقہ (Inductive method) سے متعلق مندرجہ ذیل میں سے کون سا بیان درست نہیں ہے؟",
    "options": [
      "In inductive method learning proceeds from particular to general\nاستقرائی طریقہ میں سیکھنے کا عمل جز سے کل کی طرف بڑھتا ہے",
      "Thinking ability, competencies and skills are developed in children by this method\nاس طریقے سے بچوں میں سوچنے کی صلاحیت، قابلیت اور مہارتیں پیدا ہوتی ہیں",
      "Scientific attitudes cannot be developed by this method\nاس طریقے سے سائنسی رویے پیدا نہیں کیے جا سکتے",
      "Students retain the things they learned for longer time\nطلباء سیکھی ہوئی چیزوں کو زیادہ دیر تک یاد رکھتے ہیں"
    ],
    "correctAnswer": 2,
    "explanation": "استقرائی طریقہ، جس میں مخصوص مشاہدات سے وسیع تر عمومیت کی طرف بڑھنا شامل ہے، سائنسی تحقیق کی بنیاد ہے۔ یہ تجسس، مشاہدے کی مہارت، اور تنقیدی سوچ کو فروغ دیتا ہے، جو سائنسی رویے کے بنیادی اجزاء ہیں۔ اس طرح، یہ بیان کہ یہ سائنسی رویے پیدا نہیں کر سکتا، غلط ہے۔"
  },
  {
    "id": 712,
    "question": "Which of the following statements are true related to map reading? A) Map reading is an art B) Any person can read maps C) Maps have their own language (TSTET 24 May 2024)\nنقشہ خوانی سے متعلق مندرجہ ذیل میں سے کون سے بیانات درست ہیں؟ A) نقشہ خوانی ایک فن ہے B) کوئی بھی شخص نقشے پڑھ سکتا ہے C) نقشوں کی اپنی زبان ہوتی ہے",
    "options": [
      "A only\nصرف A",
      "A & C only\nصرف A اور C",
      "A, B & C\nA، B اور C",
      "B only\nصرف B"
    ],
    "correctAnswer": 1,
    "explanation": "بیانات A اور C درست ہیں۔ نقشہ خوانی کے لیے مہارت اور تشریح کی ضرورت ہوتی ہے، جو اسے ایک فن بناتی ہے (A)۔ نقشے علامات، رنگوں اور پیمانوں کے ایک معیاری سیٹ کے ذریعے معلومات پہنچاتے ہیں، جو ان کی اپنی زبان تشکیل دیتا ہے (C)۔ بیان B غلط ہے کیونکہ نقشہ خوانی ایک سیکھی جانے والی مہارت ہے، کوئی پیدائشی صلاحیت نہیں۔"
  },
  {
    "id": 713,
    "question": "The main aim of teaching Social Studies at upper primary stage is (TSTET 24 May 2024)\nاعلیٰ پرائمری سطح پر سماجی علوم پڑھانے کا بنیادی مقصد ہے",
    "options": [
      "To describe the relationship between human beings and their social environment\nانسانوں اور ان کے سماجی ماحول کے درمیان تعلق کو بیان کرنا",
      "To describe the relationship between human beings and their physical environment\nانسانوں اور ان کے طبعی ماحول کے درمیان تعلق کو بیان کرنا",
      "To give knowledge about our Country and other parts of the world\nہمارے ملک اور دنیا کے دیگر حصوں کے بارے میں علم دینا",
      "To develop rational thinking and problem solving skills among the students\nطلباء میں عقلی سوچ اور مسئلہ حل کرنے کی مہارتوں کو فروغ دینا"
    ],
    "correctAnswer": 3,
    "explanation": "اگرچہ تمام آپشنز سماجی علوم کی تعلیم کا حصہ ہیں، لیکن اعلیٰ پرائمری سطح پر بنیادی مقصد اعلیٰ درجے کی سوچ کو پروان چڑھانا ہے۔ اس میں سماجی مسائل کے بارے میں تنقیدی اور عقلی طور پر سوچنے کی صلاحیت پیدا کرنا اور مسائل کو حل کرنے کے لیے علم کا اطلاق کرنا شامل ہے، تاکہ باخبر اور فعال شہریت کو فروغ دیا جا سکے۔"
  },
  {
    "id": 714,
    "question": "The Social Science laboratory for upper primary level students should be established (TSTET 24 May 2024)\nاعلیٰ پرائمری سطح کے طلباء کے لیے سوشل سائنس لیبارٹری قائم کی جانی چاہیے",
    "options": [
      "In a separate room\nایک علیحدہ کمرے میں",
      "In the corner of classroom\nکلاس روم کے کونے میں",
      "In the corner of library\nلائبریری کے کونے میں",
      "In a separate room of the library\nلائبریری کے ایک علیحدہ کمرے میں"
    ],
    "correctAnswer": 0,
    "explanation": "مؤثر ہونے کے لیے، ایک سوشل سائنس لیبارٹری کو مختلف مواد جیسے نقشے، گلوب، ماڈل، چارٹ، اور سمعی و بصری آلات رکھنے کے لیے مناسب جگہ کی ضرورت ہوتی ہے، اور طلباء کی سرگرمیوں کی اجازت دینے کے لیے بھی۔ اس مقصد کے لیے ایک وقف، علیحدہ کمرہ سب سے موزوں انتظام ہے۔"
  },
  {
    "id": 715,
    "question": "A good objective should (TSTET 24 May 2024)\nایک اچھا مقصد ہونا چاہیے",
    "options": [
      "be comprehensive\nجامع ہو",
      "be specific\nمخصوص ہو",
      "be long\nطویل ہو",
      "be difficult\nمشکل ہو"
    ],
    "correctAnswer": 1,
    "explanation": "تعلیمی منصوبہ بندی میں، ایک اچھی طرح سے وضع کردہ مقصد کو مخصوص اور قابل پیمائش ہونا چاہیے۔ اسے متوقع سیکھنے کے نتائج کو واضح اور غیر مبہم طور پر بیان کرنا چاہیے، تاکہ اس کی کامیابی کا واضح جائزہ لیا جا سکے۔ اسے اکثر SMART (مخصوص، قابل پیمائش، قابل حصول، متعلقہ، وقت کا پابند) معیار سے یاد رکھا جاتا ہے۔"
  },
  {
    "id": 716,
    "question": "Which of the following is not the way of assessing the academic standard 'Information Skills'? (TSTET 24 May 2024)\nمندرجہ ذیل میں سے کون سا تعلیمی معیار 'معلوماتی مہارتوں' کا جائزہ لینے کا طریقہ نہیں ہے؟",
    "options": [
      "Observation of maps\nنقشوں کا مشاہدہ",
      "Drawing maps\nنقشے بنانا",
      "Reading maps\nنقشے پڑھنا",
      "Giving opinions on maps\nنقشوں پر رائے دینا"
    ],
    "correctAnswer": 3,
    "explanation": "'معلوماتی مہارتیں' ڈیٹا اکٹھا کرنے، منظم کرنے اور پیش کرنے کی صلاحیت سے متعلق ہیں۔ نقشوں کا مشاہدہ، پڑھنا اور بنانا ان مہارتوں کا براہ راست اطلاق ہیں۔ 'رائے دینا' ایک مختلف تعلیمی معیار کے تحت آتا ہے، جیسے 'قدردانی اور حساسیت' یا 'غور و فکر'، کیونکہ اس میں ذاتی فیصلہ اور اقدار شامل ہیں۔"
  },
  {
    "id": 717,
    "question": "A teacher made the students to participate in a discussion on current events after explaining the lesson. This method is (TSTET 24 May 2024)\nایک استاد نے سبق کی وضاحت کے بعد طلباء کو موجودہ واقعات پر بحث میں حصہ لینے کے لیے کہا۔ یہ طریقہ ہے",
    "options": [
      "Narration method\nبیانیہ طریقہ",
      "Lecture-cum-discussion method\nلیکچر کم ڈسکشن طریقہ",
      "Source method\nماخذی طریقہ",
      "Observation method\nمشاہداتی طریقہ"
    ],
    "correctAnswer": 1,
    "explanation": "یہ طریقہ دو الگ الگ تدریسی اجزاء کو یکجا کرتا ہے: پہلا، استاد وضاحت کے ذریعے معلومات فراہم کرتا ہے ('لیکچر' کا حصہ)، اور دوسرا، استاد طلباء کے تعامل اور فعال شرکت کو آسان بناتا ہے ('بحث' کا حصہ)۔ یہ لیکچر کم ڈسکشن طریقہ کی تعریف ہے۔"
  },
  {
    "id": 718,
    "question": "The following is a printed teaching aid (TSTET 24 May 2024)\nمندرجہ ذیل ایک مطبوعہ تدریسی معاون ہے",
    "options": [
      "Chart\nچارٹ",
      "Newspaper\nاخبار",
      "Globe\nگلوب",
      "Model\nماڈل"
    ],
    "correctAnswer": 1,
    "explanation": "ایک مطبوعہ تدریسی معاون ایک ایسا وسیلہ ہے جو پرنٹنگ کے ذریعے بڑے پیمانے پر تیار کیا جاتا ہے۔ ایک اخبار اس تفصیل پر پوری طرح فٹ بیٹھتا ہے۔ ایک چارٹ عام طور پر ایک بصری ڈسپلے ہوتا ہے، جبکہ گلوب اور ماڈل سہ جہتی نمائندگی ہیں، اسی معنی میں مطبوعہ میڈیا نہیں۔"
  },
  {
    "id": 719,
    "question": "Among the following, one is a characteristic feature of a good test (TSTET 24 May 2024)\nمندرجہ ذیل میں سے، ایک اچھے ٹیسٹ کی خصوصیت ہے",
    "options": [
      "Validity\nمعتبریت (Validity)",
      "Difficulty\nمشکل",
      "Easy scoring\nآسان اسکورنگ",
      "Objectivity in scoring\nاسکورنگ میں معروضیت"
    ],
    "correctAnswer": 0,
    "explanation": "ایک اچھے تشخیصی آلے کی کلیدی خصوصیات میں معتبریت (validity)، اعتبار (reliability)، اور معروضیت (objectivity) شامل ہیں۔ معتبریت سب سے اہم ہے؛ اس سے مراد یہ ہے کہ ایک ٹیسٹ کس حد تک درست طریقے سے اس چیز کی پیمائش کرتا ہے جس کی پیمائش کے لیے اسے ڈیزائن کیا گیا ہے۔ اسکورنگ میں معروضیت بھی ایک مطلوبہ خصوصیت ہے لیکن یہ مجموعی اعتبار اور انصاف کا ایک جزو ہے، جبکہ معتبریت ٹیسٹ کے بنیادی مقصد کو پورا کرتی ہے۔"
  },
  {
    "id": 720,
    "question": "To evaluate the 'Appreciation and Sensitivity' academic standard, the following type of questions should be used (TSTET 24 May 2024)\n'قدردانی اور حساسیت' کے تعلیمی معیار کا جائزہ لینے کے لیے، مندرجہ ذیل قسم کے سوالات استعمال کیے جانے چاہئیں",
    "options": [
      "Open ended questions\nکھلے سوالات (Open ended questions)",
      "Multiple choice questions\nکثیر الانتخابی سوالات",
      "Matching questions\nمطابقت والے سوالات",
      "Fill in the blank questions\nخالی جگہ پر کرنے والے سوالات"
    ],
    "correctAnswer": 0,
    "explanation": "قدردانی اور حساسیت میں موضوعی تفہیم، ہمدردی، اور ذاتی اقدار شامل ہیں۔ ان خوبیوں کو ایک ہی درست جواب والے بند سوالات (جیسے MCQs یا خالی جگہ پر کرنا) سے مناسب طور پر نہیں ماپا جا سکتا۔ طلباء کو اپنے باریک خیالات، احساسات، اور جوازات کا اظہار کرنے کی اجازت دینے کے لیے کھلے سوالات کی ضرورت ہوتی ہے۔"
  },
  {
    "id": 721,
    "question": "Identify the correct sequence of the given temperatures in descending order (12°C, -16°C, 29°C, 0°C, 4°C, 1°C, -1°C, -4°C, 16°C). (TSTET 24 May 2024)\nدیے گئے درجہ حرارت کی صحیح ترتیب کو نزولی ترتیب میں شناخت کریں (12°C, -16°C, 29°C, 0°C, 4°C, 1°C, -1°C, -4°C, 16°C)۔",
    "options": [
      "0°C, -1°C, 1°C, -4°C, 4°C, 12°C, -16°C, 16°C, 29°C",
      "-16°C, -4°C, -1°C, 0°C, 1°C, 4°C, 12°C, 16°C, 29°C",
      "-1°C, -4°C, -16°C, 0°C, 1°C, 4°C, 12°C, 16°C, 29°C",
      "29°C, 16°C, 12°C, 4°C, 1°C, 0°C, -1°C, -4°C, -16°C"
    ],
    "correctAnswer": 3,
    "explanation": "نزولی ترتیب کا مطلب ہے اعداد کو سب سے بڑے سے سب سے چھوٹے کی طرف ترتیب دینا۔ دیے گئے سیٹ میں، مثبت اعداد صفر اور منفی اعداد سے بڑے ہوتے ہیں۔ سب سے زیادہ درجہ حرارت سے سب سے کم درجہ حرارت تک کی صحیح ترتیب یہ ہے: 29°C, 16°C, 12°C, 4°C, 1°C, 0°C, -1°C, -4°C, -16°C۔"
  },
  {
    "id": 722,
    "question": "The local time of 'X' located at 90° East Longitude, when it is 12 noon at Greenwich located at 0° longitudes is (TSTET 24 May 2024)\n90° مشرقی طول البلد پر واقع 'X' کا مقامی وقت کیا ہوگا، جب 0° طول البلد پر واقع گرین وچ میں دوپہر کے 12 بجے ہوں؟",
    "options": [
      "6.00 p.m.\nشام 6:00 بجے",
      "6.00 a.m.\nصبح 6:00 بجے",
      "3.00 p.m.\nسہ پہر 3:00 بجے",
      "3.00 a.m.\nصبح 3:00 بجے"
    ],
    "correctAnswer": 0,
    "explanation": "زمین 24 گھنٹوں میں 360° گھومتی ہے، جس کا مطلب ہے کہ یہ فی گھنٹہ 15° طول البلد طے کرتی ہے۔ گرین وچ (0°) اور مقام 'X' (90°E) کے درمیان وقت کا فرق 90° / 15° فی گھنٹہ = 6 گھنٹے ہے۔ چونکہ 'X' مشرقی نصف کرہ میں ہے، اس کا وقت گرین وچ مین ٹائم (GMT) سے آگے ہے۔ لہذا، اگر گرین وچ میں دوپہر کے 12:00 بجے ہیں، تو مقام 'X' پر 6 گھنٹے بعد، یعنی شام 6:00 بجے ہوں گے۔"
  },
  {
    "id": 723,
    "question": "The Byson Gorge is located in this state of India (TSTET 24 May 2024)\nبائیسن گھاٹی (Byson Gorge) ہندوستان کی اس ریاست میں واقع ہے",
    "options": [
      "Jammu and Kashmir\nجموں و کشمیر",
      "Arunachala Pradesh\nاروناچل پردیش",
      "Andhra Pradesh\nآندھرا پردیش",
      "Gujarat\nگجرات"
    ],
    "correctAnswer": 2,
    "explanation": "بائیسن گھاٹی، جسے پاپیکونڈالو گھاٹی بھی کہا جاتا ہے، ایک خوبصورت گھاٹی ہے جو دریائے گوداوری کے پاپیکونڈا نیشنل پارک سے گزرتے ہوئے بنتی ہے۔ یہ نمایاں جغرافیائی خصوصیت ریاست آندھرا پردیش میں واقع ہے۔"
  },
  {
    "id": 724,
    "question": "Puerto Rica or Naves, one of the deepest trenches in the world, is located in this Ocean (TSTET 24 May 2024)\nپورٹو ریکو یا نیویز، جو دنیا کی گہری ترین کھائیوں میں سے ایک ہے، اس سمندر میں واقع ہے",
    "options": [
      "The Indian Ocean\nبحر ہند",
      "The Arctic Ocean\nبحر منجمد شمالی",
      "The Pacific Ocean\nبحرالکاہل",
      "The Atlantic Ocean\nبحر اوقیانوس"
    ],
    "correctAnswer": 3,
    "explanation": "پورٹو ریکو ٹرینچ بحر اوقیانوس کا سب سے گہرا حصہ اور دنیا کی آٹھویں گہری ترین کھائی ہے۔ یہ بحیرہ کیریبین اور بحر اوقیانوس کے درمیان کی سرحد پر واقع ہے۔"
  },
  {
    "id": 725,
    "question": "Actually, the winds move slightly to the right in the northern hemisphere and to the left in the southern hemisphere due to the impact of (TSTET 24 May 2024)\nدراصل، ہوائیں شمالی نصف کرہ میں قدرے دائیں طرف اور جنوبی نصف کرہ میں بائیں طرف حرکت کرتی ہیں جس کی وجہ ہے",
    "options": [
      "Earth's Revolution around the Sun on its own axis\nزمین کا اپنے محور پر سورج کے گرد گردش کرنا",
      "Earth's Rotation on its own axis\nزمین کا اپنے محور پر گردش کرنا",
      "Revolution of the Moon around the Earth on its own axis\nچاند کا اپنے محور پر زمین کے گرد گردش کرنا",
      "Tilting of the Earth while rotating around itself\nزمین کا اپنے گرد گھومتے ہوئے جھکاؤ"
    ],
    "correctAnswer": 1,
    "explanation": "اس مظہر کو کوریولس اثر (Coriolis effect) کے نام سے جانا جاتا ہے۔ یہ حرکت کرتی ہوئی اشیاء (جیسے ہوائیں اور سمندری رویں) کا ایک ظاہری انحراف ہے جب انہیں گھومتے ہوئے حوالہ جاتی فریم سے دیکھا جاتا ہے۔ زمین کی اپنے محور پر گردش اس اثر کا سبب بنتی ہے، جو اشیاء کو شمالی نصف کرہ میں دائیں طرف اور جنوبی نصف کرہ میں بائیں طرف منحرف کرتی ہے۔"
  },
  {
    "id": 726,
    "question": "Identify the mineral that is available in thin layers and is a non-conductor of electricity and heat (TSTET 24 May 2024)\nاس معدنیات کی شناخت کریں جو پتلی تہوں میں دستیاب ہے اور بجلی اور حرارت کا غیر موصل ہے",
    "options": [
      "Copper\nتانبا",
      "Mica\nابرک (Mica)",
      "Manganese\nمینگنیج",
      "Aluminium\nایلومینیم"
    ],
    "correctAnswer": 1,
    "explanation": "ابرک (Mica) ایک سلیکیٹ معدنیات ہے جو اپنی پتلی، لچکدار تہوں یا شیٹس میں تقسیم ہونے کی صلاحیت کے لیے جانا جاتا ہے (کامل بیسل کلیویج)۔ یہ ایک بہترین برقی اور حرارتی انسولیٹر ہے، جو اسے الیکٹرانکس اور برقی صنعتوں میں انتہائی قیمتی بناتا ہے۔"
  },
  {
    "id": 727,
    "question": "These states of India are sharing the boundary with Bhutan (TSTET 24 May 2024)\nہندوستان کی یہ ریاستیں بھوٹان کے ساتھ سرحد کا اشتراک کرتی ہیں",
    "options": [
      "Sikkim, West Bengal, Arunachala Pradesh and Assam\nسکم، مغربی بنگال، اروناچل پردیش اور آسام",
      "Bihar, Meghalaya, Arunachala Pradesh and Assam\nبہار، میگھالیہ، اروناچل پردیش اور آسام",
      "Meghalaya, West Bengal, Arunachala Pradesh and Sikkim\nمیگھالیہ، مغربی بنگال، اروناچل پردیش اور سکم",
      "West Bengal, Arunachala Pradesh, Sikkim and Manipur\nمغربی بنگال، اروناچل پردیش، سکم اور منی پور"
    ],
    "correctAnswer": 0,
    "explanation": "ہندوستان چار ریاستوں کے ساتھ بھوٹان کے ساتھ اپنی سرحد کا اشتراک کرتا ہے۔ مغرب سے مشرق تک، یہ ریاستیں سکم، مغربی بنگال، آسام، اور اروناچل پردیش ہیں۔"
  },
  {
    "id": 728,
    "question": "One of the following is NOT the function of World Trade organization (TSTET 24 May 2024)\nمندرجہ ذیل میں سے ایک عالمی تجارتی تنظیم کا کام نہیں ہے",
    "options": [
      "It cooperates with the international institutions such as IMF and World bank\nیہ آئی ایم ایف اور ورلڈ بینک جیسے بین الاقوامی اداروں کے ساتھ تعاون کرتی ہے",
      "It oversees International Trade policies\nیہ بین الاقوامی تجارتی پالیسیوں کی نگرانی کرتی ہے",
      "It acts as a forum for multilateral trade negotiations\nیہ کثیرالجہتی تجارتی مذاکرات کے لیے ایک فورم کے طور پر کام کرتی ہے",
      "It provides financial support to the developing and undeveloped countries of the world\nیہ دنیا کے ترقی پذیر اور غیر ترقی یافتہ ممالک کو مالی مدد فراہم کرتی ہے"
    ],
    "correctAnswer": 3,
    "explanation": "عالمی تجارتی تنظیم (WTO) بنیادی طور پر بین الاقوامی تجارت کو منظم کرنے، تنازعات کو حل کرنے، اور تجارتی مذاکرات کے لیے ایک فورم کے طور پر کام کرنے سے متعلق ہے۔ ممالک کو براہ راست مالی مدد یا قرض فراہم کرنا ورلڈ بینک اور بین الاقوامی مالیاتی فنڈ (IMF) جیسے مالیاتی اداروں کا بنیادی کام ہے، نہ کہ WTO کا۔"
  },
  {
    "id": 729,
    "question": "Identify the Intermediary Goods among the following (TSTET 24 May 2024)\nمندرجہ ذیل میں سے درمیانی اشیاء (Intermediary Goods) کی شناخت کریں",
    "options": [
      "Bricks and steel used in construction work\nتعمیراتی کام میں استعمال ہونے والی اینٹیں اور اسٹیل",
      "Televisions used at home\nگھر میں استعمال ہونے والے ٹیلی ویژن",
      "The coal used for cooking purpose\nکھانا پکانے کے مقصد کے لیے استعمال ہونے والا کوئلہ",
      "Mobile Phones used by the individuals\nافراد کے زیر استعمال موبائل فون"
    ],
    "correctAnswer": 0,
    "explanation": "درمیانی اشیاء، یا انٹرمیڈیٹ گڈز، وہ مصنوعات ہیں جو حتمی مصنوعات بنانے کے لیے پیداواری عمل میں استعمال ہوتی ہیں۔ اس معاملے میں، اینٹیں اور اسٹیل ایک عمارت (حتمی مصنوعات) کی تعمیر کے لیے استعمال ہوتے ہیں۔ ٹیلی ویژن، موبائل فون، اور گھریلو استعمال کے لیے کوئلہ براہ راست استعمال کے لیے حتمی اشیاء ہیں۔"
  },
  {
    "id": 730,
    "question": "The valleys lying in between the lesser Himalayas and the Shiwaliks are called as (TSTET 24 May 2024)\nچھوٹے ہمالیہ اور شیوالک کے درمیان واقع وادیوں کو کہا جاتا ہے",
    "options": [
      "Gorges\nگھاٹیاں",
      "Flood Plains\nسیلابی میدان",
      "Canyons\nکینیون",
      "Duns\nدون"
    ],
    "correctAnswer": 3,
    "explanation": "دون (Duns) لمبی وادیاں ہیں جو چھوٹے ہمالیہ (یا ہماچل) اور بیرونی ہمالیہ (یا شیوالک) کے درمیان واقع ہیں۔ یہ وادیاں پہاڑی سلسلوں کی تہہ بندی سے بنتی ہیں اور ان میں جलोढ़ی ذخائر بھرے ہوتے ہیں۔ دہرادون دون وادی کی ایک کلاسیکی مثال ہے۔"
  },
  {
    "id": 731,
    "question": "The only industry in India which is self-reliant and complete in the value chain i.e. from raw material to the highest value added products (TSTET 24 May 2024)\nہندوستان کی واحد صنعت جو خود انحصار اور ویلیو چین میں مکمل ہے یعنی خام مال سے لے کر سب سے زیادہ ویلیو ایڈڈ مصنوعات تک",
    "options": [
      "Fertilizer Industry\nکھاد کی صنعت",
      "Chemical Industry\nکیمیائی صنعت",
      "Textile Industry\nٹیکسٹائل کی صنعت",
      "Iron and Steel Industry\nلوہا اور اسٹیل کی صنعت"
    ],
    "correctAnswer": 2,
    "explanation": "ٹیکسٹائل کی صنعت ہندوستان میں اپنی پوری ویلیو چین میں خود انحصار اور مکمل ہونے کی وجہ سے منفرد ہے۔ یہ خام مال جیسے کپاس کی پیداوار سے لے کر، پروسیسنگ کی سرگرمیوں جیسے جننگ، اسپننگ، ویونگ، اور ڈائینگ تک، اور پھر گارمنٹس جیسی اعلیٰ قیمت والی تیار شدہ مصنوعات کی تخلیق تک پھیلی ہوئی ہے۔"
  },
  {
    "id": 732,
    "question": "These forests are found in large parts of India, Northern Australia and in Central America (TSTET 24 May 2024)\nیہ جنگلات ہندوستان کے بڑے حصوں، شمالی آسٹریلیا اور وسطی امریکہ میں پائے جاتے ہیں",
    "options": [
      "Tropical Deciduous forest\nاشنکٹبندیی پت جھڑی جنگل",
      "Temperate Evergreen forests\nمعتدل سدا بہار جنگلات",
      "Tropical Evergreen Forests\nاشنکٹبندیی سدا بہار جنگلات",
      "Coniferous forests\nمخروطی جنگلات"
    ],
    "correctAnswer": 0,
    "explanation": "اشنکٹبندیی پت جھڑی جنگلات، جنہیں مانسون جنگلات بھی کہا جاتا ہے، ان خطوں کی خصوصیت ہیں جہاں ایک واضح خشک موسم ہوتا ہے۔ ان جنگلات کے درخت نمی کو بچانے کے لیے خشک موسم کے دوران اپنے پتے گرا دیتے ہیں۔ اس قسم کا جنگل ہندوستان کے بڑے حصوں، شمالی آسٹریلیا اور وسطی امریکہ میں وسیع پیمانے پر پایا جاتا ہے، جہاں موسمی بارشوں کا نمونہ ہوتا ہے۔"
  },
  {
    "id": 733,
    "question": "This type of farming depends upon monsoon rainfall, natural fertility of the soil and sustainability of other environmental conditions to the crops grown (TSTET 24 May 2024)\nاس قسم کی کاشتکاری کا انحصار مانسون کی بارش، مٹی کی قدرتی زرخیزی اور اگائی جانے والی فصلوں کے لیے دیگر ماحولیاتی حالات کی پائیداری پر ہوتا ہے",
    "options": [
      "Intensive Subsistence farming\nگہری گزربسر کی کاشتکاری",
      "Simple Subsistence farming\nسادہ گزربسر کی کاشتکاری",
      "Commercial farming\nتجارتی کاشتکاری",
      "Extensive farming\nوسیع کاشتکاری"
    ],
    "correctAnswer": 1,
    "explanation": "سادہ گزربسر کی کاشتکاری، جسے قدیم گزربسر کی زراعت بھی کہا جاتا ہے، روایتی اوزاروں اور خاندانی محنت کا استعمال کرتے ہوئے زمین کے چھوٹے ٹکڑوں پر کی جاتی ہے۔ یہ قدرتی حالات جیسے مانسون کی بارشوں اور مٹی کی موروثی زرخیزی پر بہت زیادہ انحصار کرتی ہے، بغیر جدید آدانوں جیسے کھاد یا آبپاشی کے استعمال کے۔ پیداوار زیادہ تر کسان کے خاندان کے ذریعے ہی استعمال کی جاتی ہے۔"
  },
  {
    "id": 734,
    "question": "This mountain range forms the northern Edge of the Deccan Plateau (TSTET 24 May 2024)\nیہ پہاڑی سلسلہ دکن کے سطح مرتفع کا شمالی کنارہ بناتا ہے",
    "options": [
      "The Mahadev Range\nمہادیو سلسلہ",
      "The Kaimur Range\nکیمور سلسلہ",
      "The Satpura Range\nست پورہ سلسلہ",
      "The Aravali Range\nاراولی سلسلہ"
    ],
    "correctAnswer": 2,
    "explanation": "وسطی ہندوستان میں ست پورہ سلسلہ پہاڑیوں کا ایک سلسلہ ہے جو وندھیا سلسلے کے جنوب میں مشرق-مغرب میں چلتا ہے۔ یہ دکن کے سطح مرتفع کی شمالی حد یا کنارہ بناتا ہے، جو اسے شمال میں سندھ-گنگا کے میدان سے الگ کرتا ہے۔"
  },
  {
    "id": 735,
    "question": "The two prime factors for the suitable location for establishing Aluminum smelting industry are (TSTET 24 May 2024)\nایلومینیم پگھلانے کی صنعت قائم کرنے کے لیے موزوں مقام کے دو اہم عوامل ہیں",
    "options": [
      "Availability of cheap labour and Regular supply of water resources\nسستی مزدوری کی دستیابی اور پانی کے وسائل کی باقاعدہ فراہمی",
      "Regular supply of electricity and an assured source of raw material\nبجلی کی باقاعدہ فراہمی اور خام مال کا یقینی ذریعہ",
      "Availability of cheap labour and an assured source of raw material\nسستی مزدوری کی دستیابی اور خام مال کا یقینی ذریعہ",
      "Regular supply of water resources and availability of transport facilities\nپانی کے وسائل کی باقاعدہ فراہمی اور نقل و حمل کی سہولیات کی دستیابی"
    ],
    "correctAnswer": 1,
    "explanation": "ایلومینیم پگھلانا ایک انتہائی بجلی استعمال کرنے والا عمل ہے۔ لہذا، ایک سمیلٹر کے مقام کے لیے سب سے اہم عنصر بجلی کی باقاعدہ اور سستی فراہمی تک رسائی ہے۔ دوسرا اہم عنصر خام مال، باکسائٹ، کے یقینی ذریعہ سے قربت ہے تاکہ نقل و حمل کے اخراجات کم رہیں۔"
  },
  {
    "id": 736,
    "question": "The Hot local winds that move down the Rocky Mountains in the USA-Canada and part of North America are (TSTET 24 May 2024)\nگرم مقامی ہوائیں جو امریکہ-کینیڈا اور شمالی امریکہ کے کچھ حصوں میں راکی پہاڑوں سے نیچے اترتی ہیں، وہ ہیں",
    "options": [
      "Simmon\nسمون",
      "Yoma\nیوما",
      "Mistral\nمسٹرال",
      "Chinnok\nچنوک"
    ],
    "correctAnswer": 3,
    "explanation": "چنوک ایک گرم، خشک، فین قسم کی ہوا ہے جو شمالی امریکہ میں راکی پہاڑوں کے مشرقی ڈھلوانوں سے نیچے اترتی ہے۔ یہ ہوائیں سردیوں میں درجہ حرارت میں تیزی سے اضافہ کا سبب بن سکتی ہیں اور انہیں 'برف کھانے والی' کے نام سے جانا جاتا ہے کیونکہ یہ برف کو تیزی سے پگھلا سکتی ہیں۔"
  },
  {
    "id": 737,
    "question": "One of the following is NOT required to construct Human Development Index (TSTET 24 May 2024)\nانسانی ترقی کے اشاریے (Human Development Index) کی تعمیر کے لیے مندرجہ ذیل میں سے ایک کی ضرورت نہیں ہے",
    "options": [
      "Life Expectancy at birth\nپیدائش کے وقت متوقع زندگی",
      "Education-Adult Literacy, combined Gross Enrolment Ratio\nتعلیم-بالغ خواندگی، مشترکہ مجموعی اندراج کا تناسب",
      "Growth rate of Population\nآبادی کی شرح نمو",
      "Real GDP per Capita based on purchasing power\nخریداری کی طاقت پر مبنی حقیقی فی کس جی ڈی پی"
    ],
    "correctAnswer": 2,
    "explanation": "انسانی ترقی کا اشاریہ (ایچ ڈی آئی) تین اہم جہتوں کی بنیاد پر ترقی کی پیمائش کرتا ہے: ایک طویل اور صحت مند زندگی (متوقع زندگی)، علم (تعلیم کی سطح)، اور ایک مہذب معیارِ زندگی (فی کس جی این آئی)۔ آبادی کی شرح نمو ایک آبادیاتی اشارہ ہے لیکن یہ ایچ ڈی آئی اسکور کے حساب کتاب میں استعمال ہونے والا براہ راست جزو نہیں ہے۔"
  },
  {
    "id": 738,
    "question": "The king of England who believed that the absolute powers of the king were given by God, so the kings ruled the country by a Divine Right (TSTET 24 May 2024)\nانگلینڈ کا وہ بادشاہ جو یہ مانتا تھا کہ بادشاہ کے مطلق اختیارات خدا کی طرف سے دیے گئے ہیں، اس لیے بادشاہ خدائی حق کے تحت ملک پر حکومت کرتے تھے",
    "options": [
      "Henry VII\nہنری ہفتم",
      "Edward VI\nایڈورڈ ششم",
      "James I\nجیمز اول",
      "James VI\nجیمز ششم"
    ],
    "correctAnswer": 2,
    "explanation": "انگلینڈ کے جیمز اول (جو اسکاٹ لینڈ کے جیمز ششم بھی تھے) 'بادشاہوں کے خدائی حق' کے کٹر حامی تھے۔ ان کا ماننا تھا کہ بادشاہوں نے اپنا اختیار براہ راست خدا سے حاصل کیا ہے اور وہ صرف خدا کے سامنے جوابدہ ہیں، اپنی رعایا یا پارلیمنٹ کے سامنے نہیں۔ یہ عقیدہ ان کے دور حکومت میں تنازعہ کا ایک بڑا ذریعہ تھا۔"
  },
  {
    "id": 739,
    "question": "In 1789 CE, The Government of the United States of America adopted (TSTET 24 May 2024)\n1789 عیسوی میں، ریاستہائے متحدہ امریکہ کی حکومت نے اپنایا",
    "options": [
      "A Democratic Constitution\nایک جمہوری آئین",
      "A Republican Constitution\nایک جمہوری آئین (Republican Constitution)",
      "Monarchial form of Constitution\nبادشاہی طرز کا آئین",
      "Jacobian Constitution\nجیکوبین آئین"
    ],
    "correctAnswer": 1,
    "explanation": "1789 میں، ریاستہائے متحدہ کا آئین نافذ ہوا، جس نے ملک کی حکومت کی شکل قائم کی۔ اس دستاویز نے ایک وفاقی جمہوریہ بنایا، ایک ایسا نظام جہاں طاقت عوام اور ان کے منتخب نمائندوں کے پاس ہوتی ہے، اور جس میں بادشاہ کے بجائے ایک منتخب صدر ہوتا ہے۔ لہذا، یہ ایک جمہوری (Republican) آئین ہے۔"
  },
  {
    "id": 740,
    "question": "To accomplish the unification of Germany, Bismarck got the first opportunity to rouse nationalist feelings among Prussians with opening of the issue of these places with Denmark (TSTET 24 May 2024)\nجرمنی کے اتحاد کو پورا کرنے کے لیے، بسمارک کو پرشینوں میں قوم پرستانہ جذبات ابھارنے کا پہلا موقع ڈنمارک کے ساتھ ان جگہوں کا مسئلہ اٹھا کر ملا",
    "options": [
      "Hanover and Hassel-Cassel\nہینوور اور ہیسل-کیسل",
      "Bavaria, Baden and Wurttemberg\nباویریا، بیڈن اور ورٹمبرگ",
      "Schleswig and Holstein\nشلس وِگ اور ہولسٹین",
      "City of Frankfurt and Holstein\nفرینکفرٹ شہر اور ہولسٹین"
    ],
    "correctAnswer": 2,
    "explanation": "'شلس وِگ-ہولسٹین سوال' نے اوٹو وان بسمارک کو جرمن اتحاد کے عمل میں پہلا بڑا موقع فراہم کیا۔ 1864 میں، اس نے ان دو ڈچیوں پر ڈنمارک کے خلاف جنگ میں پرشیا اور آسٹریا کی قیادت کی۔ فیصلہ کن فتح نے مضبوط جرمن قوم پرستانہ جذبات کو بھڑکایا اور پرشیا کو سرکردہ جرمن ریاست کے طور پر قائم کیا۔"
  },
  {
    "id": 741,
    "question": "Among the following, Identify the preconditions required for industrialization\nA) The Concentration of wealth in the hands of those who want to invest money in production\nB) Availability of workers who were willing to work for low wages\nC) Requirement of large market to sell its products\nD) Requirement of cheap raw materials and efficient transport infrastructure (TSTET 24 May 2024)\nمندرجہ ذیل میں سے، صنعت کاری کے لیے درکار شرائط کی نشاندہی کریں\nA) دولت کا ان لوگوں کے ہاتھوں میں مرتکز ہونا جو پیداوار میں پیسہ لگانا چاہتے ہیں\nB) ایسے مزدوروں کی دستیابی جو کم اجرت پر کام کرنے کے لیے تیار ہوں\nC) اپنی مصنوعات فروخت کرنے کے لیے بڑی مارکیٹ کی ضرورت\nD) سستے خام مال اور موثر نقل و حمل کے بنیادی ڈھانچے کی ضرورت",
    "options": [
      "A & B only\nصرف A اور B",
      "B & C only\nصرف B اور C",
      "B, C & D only\nصرف B، C اور D",
      "A, B, C & D\nA، B، C اور D"
    ],
    "correctAnswer": 3,
    "explanation": "فہرست میں شامل چاروں عوامل کو صنعت کاری کے لیے اہم پیشگی شرائط کے طور پر وسیع پیمانے پر تسلیم کیا جاتا ہے۔ اس کے لیے سرمایہ کاری کے لیے سرمایہ (A)، ایک مزدور قوت (B)، سامان فروخت کرنے کے لیے بازار (C)، اور خام مال اور نقل و حمل تک رسائی (D) کی ضرورت ہوتی ہے۔ 18ویں صدی کے برطانیہ میں ان حالات کے یکجا ہونے نے صنعتی انقلاب کو جنم دینے میں مدد کی۔"
  },
  {
    "id": 742,
    "question": "Nizam Ul Mulk, the founder of the Asaf Jahi Dynasty, was the (TSTET 24 May 2024)\nآصف جاہی خاندان کے بانی نظام الملک تھے",
    "options": [
      "Mansabdar under Mughal Rule\nمغل حکومت کے تحت منصب دار",
      "The Subedar of the Deccan under the Mughal rule\nمغل حکومت کے تحت دکن کے صوبیدار",
      "The Subedar of Bahamani rulers\nبہمنی حکمرانوں کے صوبیدار",
      "The Revenue Minister of Aurangajeb\nاورنگزیب کے وزیر مال"
    ],
    "correctAnswer": 1,
    "explanation": "میر قمر الدین خان صدیقی، جن کا لقب نظام الملک تھا، مغل سلطنت میں ایک اعلیٰ عہدے دار تھے۔ انہیں دکن کے صوبے کا صوبیدار مقرر کیا گیا تھا۔ انہوں نے آہستہ آہستہ اپنی طاقت کو مستحکم کیا اور 1724 میں خود مختار آصف جاہی خاندان کی بنیاد رکھی، حیدرآباد کو اپنا دارالحکومت بنایا اور دہلی میں کمزور ہوتی مغل اتھارٹی سے بڑی حد تک آزاد ہو کر دکن پر حکومت کی۔"
  },
  {
    "id": 743,
    "question": "This Mughal emperor granted Robert Clive the right to rule Bengal (TSTET 24 May 2024)\nاس مغل بادشاہ نے رابرٹ کلائیو کو بنگال پر حکومت کرنے کا حق دیا",
    "options": [
      "Bahadurshah I\nبہادر شاہ اول",
      "Jahandar Shah\nجہاندار شاہ",
      "Shah Alam II\nشاہ عالم دوم",
      "Mohammed Azam Shah\nمحمد اعظم شاہ"
    ],
    "correctAnswer": 2,
    "explanation": "1764 میں بکسر کی فیصلہ کن برطانوی فتح کے بعد، مغل بادشاہ شاہ عالم دوم نے 1765 میں الہ آباد کے معاہدے پر دستخط کیے۔ اس معاہدے کے ذریعے، اس نے بنگال، بہار اور اڑیسہ کی دیوانی — یعنی ٹیکس وصول کرنے کا حق — برطانوی ایسٹ انڈیا کمپنی کو دے دیا، جس کی نمائندگی رابرٹ کلائیو نے کی۔ اس گرانٹ نے کمپنی کو قانونی اختیار دیا اور ہندوستان میں برطانوی حکومت کے قیام میں ایک بڑا قدم ثابت ہوا۔"
  },
  {
    "id": 744,
    "question": "The Central and South American countries are called 'Latin American Countries since these languages are considered as off shoots of Latin (TSTET 24 May 2024)\nوسطی اور جنوبی امریکہ کے ممالک کو 'لاطینی امریکی ممالک' کہا جاتا ہے کیونکہ ان زبانوں کو لاطینی کی شاخیں سمجھا جاتا ہے",
    "options": [
      "Spanish and Portuguese\nہسپانوی اور پرتگالی",
      "French and English\nفرانسیسی اور انگریزی",
      "German and Portuguese\nجرمن اور پرتگالی",
      "Spanish and German\nہسپانوی اور جرمن"
    ],
    "correctAnswer": 0,
    "explanation": "'لاطینی امریکہ' کی اصطلاح امریکہ کے ان خطوں کی طرف اشارہ کرتی ہے جہاں رومانوی زبانیں — وہ زبانیں جو لاطینی سے نکلی ہیں — بنیادی طور پر بولی جاتی ہیں۔ اس خطے کی اہم زبانیں ہسپانوی اور پرتگالی ہیں، جو اسپین اور پرتگال کے نوآبادیات نے متعارف کروائی تھیں۔"
  },
  {
    "id": 745,
    "question": "An Inca site of worship, known as Machu Pichu, is in this country (TSTET 24 May 2024)\nانکا کی ایک عبادت گاہ، جسے ماچو پچو کے نام سے جانا جاتا ہے، اس ملک میں ہے",
    "options": [
      "Brasilia\nبرازیلیا",
      "Peru\nپیرو",
      "Argentina\nارجنٹائن",
      "Venezuela\nوینزویلا"
    ],
    "correctAnswer": 1,
    "explanation": "ماچو پچو 15ویں صدی کا انکا قلعہ ہے جو پیرو کے انڈیز پہاڑوں میں واقع ہے۔ یہ دنیا کے مشہور ترین آثار قدیمہ میں سے ایک ہے اور انکا سلطنت کی تعمیراتی اور فلکیاتی مہارتوں کا ثبوت ہے۔"
  },
  {
    "id": 746,
    "question": "In the 16th century, these people had established a 'Seaborne Empire' over the Indian Ocean (TSTET 24 May 2024)\n16ویں صدی میں، ان لوگوں نے بحر ہند پر ایک 'سمندری سلطنت' قائم کی تھی",
    "options": [
      "Spanish\nہسپانوی",
      "English\nانگریز",
      "French\nفرانسیسی",
      "Portuguese\nپرتگالی"
    ],
    "correctAnswer": 3,
    "explanation": "16ویں صدی کے دوران، پرتگالی پہلے یورپی تھے جنہوں نے بحر ہند میں ایک وسیع بحری تجارتی سلطنت قائم کی۔ اپنی اعلیٰ بحری طاقت اور قلعہ بند تجارتی چوکیوں کے نیٹ ورک کے ذریعے، انہوں نے تقریباً ایک صدی تک اہم تجارتی راستوں، خاص طور پر منافع بخش مصالحوں کی تجارت، کو کنٹرول کیا۔"
  },
  {
    "id": 747,
    "question": "In between 1839-1842, the two Opium wars were fought between (TSTET 24 May 2024)\n1839-1842 کے درمیان، دو افیون کی جنگیں ان کے درمیان لڑی گئیں",
    "options": [
      "China and France\nچین اور فرانس",
      "China and England\nچین اور انگلینڈ",
      "India and China\nہندوستان اور چین",
      "China and Japan\nچین اور جاپان"
    ],
    "correctAnswer": 1,
    "explanation": "پہلی افیون جنگ (1839-1842) برطانیہ (انگلینڈ) اور چین کے چنگ خاندان کے درمیان لڑی گئی تھی۔ اس تنازعہ کا آغاز چین کی اس مہم سے ہوا جس کا مقصد برطانوی تاجروں کی طرف سے کی جانے والی غیر قانونی افیون کی تجارت کو روکنا تھا۔ (نوٹ: سوال کا متن غلط طور پر اس مدت میں دو جنگوں کا مطلب ہے؛ دوسری افیون جنگ بعد میں 1856 سے 1860 تک ہوئی)۔"
  },
  {
    "id": 748,
    "question": "In this system of Government, the Government get their authority from the people and have to answer to the people (TSTET 24 May 2024)\nحکومت کے اس نظام میں، حکومت اپنا اختیار عوام سے حاصل کرتی ہے اور اسے عوام کو جواب دینا پڑتا ہے",
    "options": [
      "Constitutional Monarchy\nآئینی بادشاہت",
      "Republican Government\nجمہوری حکومت (Republican)",
      "Democratic Government\nجمہوری حکومت (Democratic)",
      "Aristocratic Government\nاشرافیہ کی حکومت"
    ],
    "correctAnswer": 2,
    "explanation": "ایک جمہوری حکومت کی واضح خصوصیت یہ ہے کہ اس کا اختیار حکومت کیے جانے والوں کی رضامندی سے حاصل ہوتا ہے۔ عوامی خودمختاری کے اس اصول کا مطلب ہے کہ حکومت عوام کے سامنے جوابدہ اور ذمہ دار ہے، عام طور پر باقاعدہ، آزادانہ اور منصفانہ انتخابات کے ذریعے۔"
  },
  {
    "id": 749,
    "question": "One of the following was NOT true regarding the effect of the Economic Depression -1929-39 (TSTET 24 May 2024)\nمندرجہ ذیل میں سے ایک اقتصادی بحران 1929-39 کے اثرات کے بارے میں سچ نہیں تھا",
    "options": [
      "25% of Americans and 33% of other countries people were unemployed\n25% امریکی اور 33% دیگر ممالک کے لوگ بے روزگار تھے",
      "As factories were closed down and the trade was declined, cities became centers of decline\nجیسے ہی فیکٹریاں بند ہوئیں اور تجارت میں کمی آئی، شہر زوال کے مراکز بن گئے",
      "The millions of farmers stopped cultivating the land as the prices for agricultural products were declined\nلاکھوں کسانوں نے زمین کاشت کرنا چھوڑ دیا کیونکہ زرعی مصنوعات کی قیمتیں گر گئی تھیں",
      "There was no impact of the Economic Depression on Germany\nجرمنی پر اقتصادی بحران کا کوئی اثر نہیں ہوا"
    ],
    "correctAnswer": 3,
    "explanation": "جرمنی ان ممالک میں سے ایک تھا جو عظیم کساد بازاری سے سب سے زیادہ تباہ ہوئے تھے۔ اس کی معیشت، جو پہلی جنگ عظیم کے بعد کی بحالی اور ہرجانے کے لیے امریکی قرضوں پر بہت زیادہ انحصار کرتی تھی، جب وہ قرضے واپس لے لیے گئے تو تباہ ہو گئی۔ اس سے ہائپر انفلیشن، بڑے پیمانے پر بے روزگاری، اور شدید سیاسی عدم استحکام پیدا ہوا، جس نے براہ راست نازی پارٹی کے عروج میں اہم کردار ادا کیا۔"
  },
  {
    "id": 750,
    "question": "The lower house of the German Parliament is known as (TSTET 24 May 2024)\nجرمن پارلیمنٹ کے ایوانِ زیریں کو کہا جاتا ہے",
    "options": [
      "Duma\nڈوما",
      "Reichstag\nرائخ اسٹگ",
      "Bundesrat\nبندسرات",
      "National Assembly\nقومی اسمبلی"
    ],
    "correctAnswer": 1,
    "explanation": "تاریخی طور پر، جرمن پارلیمنٹ کے مرکزی، ایوانِ زیریں کو رائخ اسٹگ کہا جاتا تھا۔ جدید وفاقی جمہوریہ جرمنی میں، اسے بنڈسٹاگ کے نام سے جانا جاتا ہے۔ بندسرات ایوانِ بالا ہے، جو ریاستوں کی نمائندگی کرتا ہے۔ ڈوما روسی پارلیمنٹ کا ایوانِ زیریں ہے۔"
  },
  {
    "id": 751,
    "question": "The three principles of the programme of 'Sun Yet Sen' were Nationalism, Democracy and Socialism. Here, Socialism means (TSTET 24 May 2024)\n'سن یات سین' کے پروگرام کے تین اصول قوم پرستی، جمہوریت اور سوشلزم تھے۔ یہاں سوشلزم کا مطلب ہے",
    "options": [
      "Overthrowing of Manchu dynasty and distribution of Government lands to the peasants\nمانچو خاندان کا تختہ الٹنا اور کسانوں میں سرکاری زمینوں کی تقسیم",
      "Establishing a people's Government\nعوامی حکومت کا قیام",
      "Controlling industries and land reforms to distribute land to the landless peasants\nصنعتوں پر قابو پانا اور بے زمین کسانوں میں زمین کی تقسیم کے لیے زمینی اصلاحات",
      "Establishing a constitutional Monarchy in the country\nملک میں آئینی بادشاہت کا قیام"
    ],
    "correctAnswer": 2,
    "explanation": "سن یات سین کا تیسرا اصول، منشینگ، کا ترجمہ اکثر 'عوامی livelihood' یا 'سوشلزم' کیا جاتا ہے۔ اس کا مرکز معاشی خوشحالی اور مساوات پیدا کرنا تھا۔ اس کے کلیدی اجزاء میں ریاست کے ذریعے بڑی صنعتوں کی ریگولیشن اور 'زمین کے حقوق کی مساوات' شامل تھے، جو ایک زمینی اصلاحات کا پروگرام تھا جس کا مقصد یہ یقینی بنانا تھا کہ کسان اس زمین کے مالک ہوں جس پر وہ کاشت کرتے ہیں۔"
  },
  {
    "id": 752,
    "question": "The Indian Constitutional Drafting Committee consisted of (TSTET 24 May 2024)\nہندوستانی آئین کی ڈرافٹنگ کمیٹی ان پر مشتمل تھی",
    "options": [
      "A Chairman, seven other members and Constitutional Advisor\nایک چیئرمین، سات دیگر اراکین اور آئینی مشیر",
      "A Chairman, nine other members and Constitutional Advisor\nایک چیئرمین، نو دیگر اراکین اور آئینی مشیر",
      "A Chairman, Six other members and Constitutional Advisor\nایک چیئرمین، چھ دیگر اراکین اور آئینی مشیر",
      "A Chairman, sixteen other members and Constitutional Advisor\nایک چیئرمین، سولہ دیگر اراکین اور آئینی مشیر"
    ],
    "correctAnswer": 2,
    "explanation": "ڈاکٹر بی آر امبیڈکر کی سربراہی میں ڈرافٹنگ کمیٹی کل سات اراکین پر مشتمل تھی: ایک چیئرمین (امبیڈکر) اور چھ دیگر اراکین۔ سر بی این راؤ نے آئین ساز اسمبلی کے آئینی مشیر کے طور پر خدمات انجام دیں، لیکن وہ خود ڈرافٹنگ کمیٹی کے رکن نہیں تھے۔"
  },
  {
    "id": 753,
    "question": "Among the following, identify the phases of Disaster Management\nA) Disaster Strike\nB) Emergency response and relief\nC) Rehabilitation and reconstruction\nD) Preparedness and Mitigation (TSTET 24 May 2024)\nدرج ذیل میں سے، ڈیزاسٹر مینجمنٹ کے مراحل کی نشاندہی کریں\nA) آفت کا حملہ\nB) ہنگامی ردعمل اور امداد\nC) بحالی اور تعمیر نو\nD) تیاری اور تخفیف",
    "options": [
      "A, B & C only\nصرف A, B & C",
      "B, C & D only\nصرف B, C & D",
      "A, B & D only\nصرف A, B & D",
      "A, B, C & D"
    ],
    "correctAnswer": 3,
    "explanation": "جامع ڈیزاسٹر مینجمنٹ سائیکل میں تمام چار مذکورہ عناصر شامل ہیں۔ یہ آفت سے پہلے کی سرگرمیوں جیسے کہ تخفیف اور تیاری (D) سے شروع ہوتا ہے۔ اس کے بعد خود واقعہ، یعنی آفت کا حملہ (A) ہوتا ہے۔ فوراً بعد، ردعمل کا مرحلہ (B) شروع ہوتا ہے۔ آخری، طویل مدتی مرحلے میں بحالی، اور تعمیر نو (C) شامل ہے، جو مستقبل کے خطرات کو کم کرنے کے لیے تخفیف میں واپس فیڈ کرتا ہے۔"
  },
  {
    "id": 754,
    "question": "'Doosra' and the 'reverse swing' were associated with this game (TSTET 24 May 2024)\n'دوسرا' اور 'ریورس سوئنگ' اس کھیل سے وابستہ تھے",
    "options": [
      "Kabaddi\nکبڈی",
      "Football\nفٹ بال",
      "Cricket\nکرکٹ",
      "Hockey\nہاکی"
    ],
    "correctAnswer": 2,
    "explanation": "'ریورس سوئنگ' اور 'دوسرا' دونوں کرکٹ کے کھیل میں باؤلرز کے ذریعہ استعمال ہونے والی خصوصی تکنیک ہیں۔ ریورس سوئنگ ایک پرانی، کھردری گیند کو روایتی سوئنگ کی مخالف سمت میں سوئنگ کرنے کا ایک طریقہ ہے، جبکہ دوسرا ایک قسم کی آف اسپن ڈلیوری ہے جو دائیں ہاتھ کے بلے باز سے دور ہو جاتی ہے۔"
  },
  {
    "id": 755,
    "question": "The members of the Constituent Assembly were (TSTET 24 May 2024)\nآئین ساز اسمبلی کے اراکین تھے",
    "options": [
      "Directly elected through adult franchise\nبالغ حق رائے دہی کے ذریعے براہ راست منتخب",
      "elected mainly by the members of the existing provincial legislatures\nبنیادی طور پر موجودہ صوبائی اسمبلیوں کے اراکین کے ذریعے منتخب",
      "Nominated by the Viceroy\nوائسرائے کے ذریعہ نامزد",
      "Representatives of the Princely States only\nصرف شاہی ریاستوں کے نمائندے"
    ],
    "correctAnswer": 1,
    "explanation": "آئین ساز اسمبلی کے اراکین کو ہندوستان کے عوام نے براہ راست منتخب نہیں کیا تھا۔ انہیں صوبائی قانون ساز اسمبلیوں کے اراکین نے بالواسطہ طور پر منتخب کیا تھا، جو 1946 میں محدود حق رائے دہی پر منتخب ہوئے تھے۔ شاہی ریاستوں کے اراکین کو عام طور پر ان ریاستوں کے حکمرانوں نے نامزد کیا تھا۔"
  },
  {
    "id": 756,
    "question": "India will have supreme right to take decisions on internal as well as external matters and make her own laws and no external power can make laws for India. This means that (TSTET 24 May 2024)\nہندوستان کو اندرونی اور بیرونی معاملات پر فیصلے کرنے کا اعلیٰ حق حاصل ہوگا اور وہ اپنے قوانین خود بنائے گا اور کوئی بیرونی طاقت ہندوستان کے لیے قوانین نہیں بنا سکتی۔ اس کا مطلب یہ ہے کہ",
    "options": [
      "India is a Socialist State\nہندوستان ایک سوشلسٹ ریاست ہے",
      "India is a Democratic State\nہندوستان ایک جمہوری ریاست ہے",
      "India is a Sovereign State\nہندوستان ایک خودمختار ریاست ہے",
      "India is a secular State\nہندوستان ایک سیکولر ریاست ہے"
    ],
    "correctAnswer": 2,
    "explanation": "یہ بیان خودمختاری کے اصول کی تعریف کرتا ہے۔ ایک خودمختار ریاست آزاد ہوتی ہے اور کسی دوسرے ملک کے اختیار کے تابع نہیں ہوتی۔ اسے اپنے آپ پر حکومت کرنے، اپنے قوانین بنانے اور اندرونی اور بیرونی دونوں معاملات پر بغیر کسی بیرونی مداخلت کے فیصلے کرنے کا پورا حق اور اختیار حاصل ہے۔"
  },
  {
    "id": 757,
    "question": "Among the following, the Indian States having only one Lok Sabha seat are (TSTET 24 May 2024)\nدرج ذیل میں سے، وہ ہندوستانی ریاستیں جن کی صرف ایک لوک سبھا سیٹ ہے",
    "options": [
      "Mizoram, Nagaland and Sikkim\nمیزورم، ناگالینڈ اور سکم",
      "Manipur, Meghalaya and Sikkim\nمنی پور، میگھالیہ اور سکم",
      "Manipur, Meghalaya and Mizoram\nمنی پور، میگھالیہ اور میزورم",
      "Tripura, Mizoram and Manipur\nتریپورہ، میزورم اور منی پور"
    ],
    "correctAnswer": 0,
    "explanation": "آبادی کے حجم کی بنیاد پر، ہندوستان کی کئی چھوٹی ریاستوں کو لوک سبھا (پارلیمنٹ کا ایوان زیریں) میں ایک ہی نشست مختص کی گئی ہے۔ دیے گئے اختیارات میں سے، میزورم، ناگالینڈ اور سکم میں سے ہر ایک کے پاس ایک لوک سبھا حلقہ ہے۔ منی پور اور میگھالیہ میں سے ہر ایک کے پاس دو نشستیں ہیں، اور تریپورہ میں بھی دو نشستیں ہیں۔"
  },
  {
    "id": 758,
    "question": "The followers of Swami Dayananda Saraswathi set up the Dayanand Anglo Vedic School to (TSTET 24 May 2024)\nسوامی دیانند سرسوتی کے پیروکاروں نے دیانند اینگلو ویدک اسکول قائم کیا تھا تاکہ",
    "options": [
      "Revive a reformed Hindu Religion and to engage in Social Work and Social Service for national Construction\nایک اصلاح شدہ ہندو مذہب کو زندہ کرنا اور قومی تعمیر کے لیے سماجی کام اور سماجی خدمت میں مشغول ہونا",
      "Educate children in modern subjects and at the same time keep them in touch with their religion and culture\nبچوں کو جدید مضامین میں تعلیم دینا اور ساتھ ہی انہیں ان کے مذہب اور ثقافت سے جوڑے رکھنا",
      "Advocate the worship of one supreme God through simple rituals and recitation of Vedic mantras\nسادہ رسومات اور ویدک منتروں کی تلاوت کے ذریعے ایک اعلیٰ ترین خدا کی عبادت کی وکالت کرنا",
      "Educate the children to enable them understand simple rituals and recitation of Vedic mantras\nبچوں کو تعلیم دینا تاکہ وہ سادہ رسومات اور ویدک منتروں کی تلاوت کو سمجھ سکیں"
    ],
    "correctAnswer": 1,
    "explanation": "دیانند اینگلو ویدک (D.A.V.) تحریک سوامی دیانند کے وژن کو برقرار رکھنے کے لیے قائم کی گئی تھی۔ اس کا بنیادی تعلیمی فلسفہ مغربی تعلیم (اینگلو) اور روایتی ہندوستانی ویدک حکمت (ویدک) کا امتزاج پیدا کرنا تھا۔ اس کا مقصد طلباء کو جدید، سائنسی علم فراہم کرنا تھا جبکہ اس بات کو یقینی بنانا تھا کہ وہ اپنی ثقافت اور مذہبی اقدار میں جڑے رہیں۔"
  },
  {
    "id": 759,
    "question": "The article 18 of the Indian Constitution talks about (TSTET 24 May 2024)\nہندوستانی آئین کا آرٹیکل 18 اس کے بارے میں بات کرتا ہے",
    "options": [
      "Abolition of Untouchability\nچھوت چھات کا خاتمہ",
      "Equal Protection of Law\nقانون کا مساوی تحفظ",
      "Abolition of Titles\nخطابات کا خاتمہ",
      "Equality of Opportunities\nمواقع کی مساوات"
    ],
    "correctAnswer": 2,
    "explanation": "ہندوستانی آئین کا آرٹیکل 18، جو مساوات کے حق کا حصہ ہے، 'خطابات کے خاتمے' سے متعلق ہے۔ یہ ریاست کو کوئی بھی خطاب (فوجی اور تعلیمی امتیازات کے علاوہ) دینے سے منع کرتا ہے اور ہندوستانی شہریوں کو غیر ملکی ریاستوں سے خطابات قبول کرنے سے روکتا ہے، اس طرح سماجی مساوات کو فروغ دیتا ہے۔"
  },
  {
    "id": 760,
    "question": "The theme of the Road Safety Week, 2006 was (TSTET 24 May 2024)\nروڈ سیفٹی ہفتہ، 2006 کا موضوع تھا",
    "options": [
      "Our Aim, Zero Harm\nہمارا مقصد، صفر نقصان",
      "Sustainable Transport\nپائیدار ٹرانسپورٹ",
      "Sadak Suraksha jeevan Raksha\nسڑک سرکشا جیون رکشا",
      "Road Safety and no Accident\nروڈ سیفٹی اور کوئی حادثہ نہیں"
    ],
    "correctAnswer": 3,
    "explanation": "ہندوستان میں 2006 میں منائے جانے والے قومی روڈ سیفٹی ہفتہ کا موضوع 'روڈ سیفٹی اور کوئی حادثہ نہیں' تھا۔ اس سالانہ تقریب کا مقصد ٹریفک قوانین کے بارے میں عوامی بیداری پیدا کرنا اور سڑک حادثات کی وجہ سے ہونے والی ہلاکتوں کو کم کرنا ہے۔"
  },
  {
    "id": 761,
    "question": "One among the following is NOT a form of trafficking (TSTET 24 May 2024)\nدرج ذیل میں سے ایک اسمگلنگ کی شکل نہیں ہے",
    "options": [
      "Forced prostitution\nجبری جسم فروشی",
      "involving children in begging for money and beating them to obey\nبچوں کو پیسے مانگنے میں ملوث کرنا اور انہیں اطاعت کرنے کے لیے مارنا",
      "Removing body parts and doing business\nجسم کے اعضاء کو ہٹانا اور کاروبار کرنا",
      "Threatening to harm or threatening to stop education\nنقصان پہنچانے کی دھمکی دینا یا تعلیم روکنے کی دھمکی دینا"
    ],
    "correctAnswer": 3,
    "explanation": "انسانی اسمگلنگ میں استحصال کے مقصد سے طاقت، دھوکہ دہی، یا جبر کے ذریعے لوگوں کی بھرتی، نقل و حمل، یا پناہ دینا شامل ہے۔ جبری جسم فروشی، جبری بھیک، اور اعضاء کی کٹائی سب استحصال کی شکلیں ہیں اور اس طرح اسمگلنگ کی شکلیں ہیں۔ جبکہ نقصان پہنچانے یا تعلیم روکنے کی دھمکیاں اسمگلروں کے ذریعہ استعمال کیے جانے والے جبر کے طریقے ہیں، وہ مقصد کا ذریعہ ہیں، خود اسمگلنگ کی شکل نہیں۔"
  },
  {
    "id": 762,
    "question": "For the first time in the history of Election Commission, the election notification for these two constituencies had been cancelled in 2016 (TSTET 24 May 2024)\nالیکشن کمیشن کی تاریخ میں پہلی بار، 2016 میں ان دو حلقوں کے لیے انتخابی نوٹیفکیشن منسوخ کر دیا گیا تھا",
    "options": [
      "Arava Kurichi and Tanjavure\nاروا کوریچی اور تنجاور",
      "Vellore and Tiruchirapalli\nویلور اور تروچراپلی",
      "Dindigul and Madurai\nڈنڈیگل اور مدورائی",
      "Shiva Ganga and Tenkasi\nشیو گنگا اور ٹینکاسی"
    ],
    "correctAnswer": 0,
    "explanation": "ایک تاریخی پہلے اقدام میں، الیکشن کمیشن آف انڈیا نے مئی 2016 میں تمل ناڈو کے دو اسمبلی حلقوں، اروا کوریچی اور تنجاور (تنجور) میں انتخابات منسوخ کر دیے تھے، جس کی وجہ امیدواروں اور سیاسی جماعتوں کی جانب سے ووٹروں کو رشوت دینے کے لیے بڑے پیمانے پر، منظم طریقے سے رقم اور تحائف کی تقسیم کے ثبوت تھے۔"
  },
  {
    "id": 763,
    "question": "The Rate of GST for Watches is 12%. The Maximum Retail Price of a Watch is Rs. 22400. The amount of tax to be paid to the Government for purchasing watch is (TSTET 24 May 2024)\nگھڑیوں پر جی ایس ٹی کی شرح 12% ہے۔ ایک گھڑی کی زیادہ سے زیادہ خوردہ قیمت 22400 روپے ہے۔ گھڑی خریدنے پر حکومت کو ادا کیے جانے والے ٹیکس کی رقم ہے",
    "options": [
      "Rs. 2400",
      "Rs. 2688",
      "Rs. 2100",
      "Rs. 2500"
    ],
    "correctAnswer": 1,
    "explanation": "یہ فرض کرتے ہوئے کہ 22,400 روپے کی زیادہ سے زیادہ خوردہ قیمت (MRP) وہ بنیادی قیمت ہے جس پر جی ایس ٹی کا حساب لگایا جاتا ہے، ٹیکس کی رقم اس قیمت کا 12% ہوگی۔ حساب: ٹیکس = 22,400 روپے * (12/100) = 2,688 روپے۔ (نوٹ: عام طور پر، MRP میں تمام ٹیکس شامل ہوتے ہیں، جس سے 2400 روپے کی ٹیکس رقم حاصل ہوگی۔ تاہم، دیے گئے اختیارات کو دیکھتے ہوئے، سوال کا مقصد یہ ہے کہ ٹیکس کا حساب بیان کردہ MRP پر کیا جائے۔)"
  },
  {
    "id": 764,
    "question": "One among the following is not the characteristic feature of developing countries (TSTET 24 May 2024)\nدرج ذیل میں سے ایک ترقی پذیر ممالک کی خصوصیت نہیں ہے",
    "options": [
      "Rapid Population Growth\nتیزی سے آبادی میں اضافہ",
      "High standard of living\nاعلیٰ معیار زندگی",
      "Excessive dependence on agriculture\nزراعت پر زیادہ انحصار",
      "Lack of infrastructural development\nبنیادی ڈھانچے کی ترقی کا فقدان"
    ],
    "correctAnswer": 1,
    "explanation": "اعلیٰ معیار زندگی ترقی یافتہ ممالک کی خصوصیت ہے، ترقی پذیر ممالک کی نہیں۔ ترقی پذیر ممالک کی خصوصیات میں عام طور پر آبادی میں تیزی سے اضافہ، بنیادی شعبے (جیسے زراعت) پر بھاری اقتصادی انحصار، کم فی کس آمدنی، اور غیر ترقی یافتہ بنیادی ڈھانچہ شامل ہیں۔"
  },
  {
    "id": 765,
    "question": "Among the following, identify the tax imposed by the state Government (TSTET 24 May 2024)\nدرج ذیل میں سے، ریاستی حکومت کی طرف سے عائد کردہ ٹیکس کی نشاندہی کریں",
    "options": [
      "Personal Income Tax\nذاتی انکم ٹیکس",
      "Goods and Service Tax\nگڈز اینڈ سروس ٹیکس",
      "Customs duty\nکسٹم ڈیوٹی",
      "Land Revenue and Stamp Duty\nلینڈ ریونیو اور اسٹامپ ڈیوٹی"
    ],
    "correctAnswer": 3,
    "explanation": "ہندوستان کے وفاقی نظام میں، ٹیکس لگانے کے اختیارات تقسیم ہیں۔ ذاتی انکم ٹیکس اور کسٹم ڈیوٹی مرکزی حکومت کے ٹیکس ہیں۔ جی ایس ٹی مرکز اور ریاستیں دونوں جمع کرتی ہیں۔ تاہم، لینڈ ریونیو (زرعی زمین پر ٹیکس) اور اسٹامپ ڈیوٹی (قانونی دستاویزات اور جائیداد کے لین دین پر ٹیکس) وہ ٹیکس ہیں جو خصوصی طور پر ریاستی حکومتیں عائد اور وصول کرتی ہیں۔"
  },
  {
    "id": 766,
    "question": "The Indian Law Governing migration and employment of Indians abroad is (TSTET 24 May 2024)\nہندوستانیوں کی بیرون ملک ہجرت اور روزگار کو کنٹرول کرنے والا ہندوستانی قانون ہے",
    "options": [
      "The enrolling Act, 1933\nدی انرولنگ ایکٹ، 1933",
      "The emigration Act, 1983\nدی ایمیگریشن ایکٹ، 1983",
      "The emigration Act, 1921\nدی ایمیگریشن ایکٹ، 1921",
      "The immigration and Nationality Act, 1952\nدی امیگریشن اینڈ نیشنلٹی ایکٹ، 1952"
    ],
    "correctAnswer": 1,
    "explanation": "ایمیگریشن ایکٹ، 1983 ہندوستان کا کلیدی قانون ہے جو ہجرت کے عمل اور دوسرے ممالک میں روزگار کے لیے ہندوستانی شہریوں کی بھرتی کو منظم کرتا ہے۔ اس کا بنیادی مقصد بیرون ملک ہندوستانی کارکنوں کی حفاظت اور فلاح و بہبود کو یقینی بنانا ہے۔"
  },
  {
    "id": 767,
    "question": "Among the following, the non-commercial bank is (TSTET 24 May 2024)\nدرج ذیل میں سے، غیر تجارتی بینک ہے",
    "options": [
      "The Reserve bank of India\nریزرو بینک آف انڈیا",
      "The State bank of India\nاسٹیٹ بینک آف انڈیا",
      "The Axis Bank\nایکسس بینک",
      "The ICICI Bank\nآئی سی آئی سی آئی بینک"
    ],
    "correctAnswer": 0,
    "explanation": "ریزرو بینک آف انڈیا (RBI) ملک کا مرکزی بینک ہے۔ تجارتی بینکوں (جیسے SBI، Axis، ICICI) کے برعکس جو عام لوگوں سے معاملہ کرتے ہیں، RBI کا کردار بینکنگ سسٹم کو منظم کرنا، کرنسی کا انتظام کرنا، اور حکومت اور دیگر بینکوں کے لیے بینکر کے طور پر کام کرنا ہے۔ یہ ایک ریگولیٹری ادارہ ہے، تجارتی نہیں۔"
  },
  {
    "id": 768,
    "question": "In India, the rates of GST at present are (TSTET 24 May 2024)\nہندوستان میں، اس وقت جی ایس ٹی کی شرحیں ہیں",
    "options": [
      "5%, 10%, 15% and 20%",
      "5%, 12%, 18% and 28%",
      "7%, 12%, 18% and 24%",
      "5%, 14%, 21% and 28%"
    ],
    "correctAnswer": 1,
    "explanation": "ہندوستان کے گڈز اینڈ سروسز ٹیکس (GST) سسٹم میں ایک ٹائرڈ ڈھانچہ ہے جس میں اشیاء اور خدمات کے لیے چار بنیادی شرحیں ہیں۔ یہ معیاری سلیب 5%، 12%، 18%، اور 28% ہیں۔ اس کے علاوہ، ضروری اشیاء کے لیے 0% اور سونے کے لیے 3% جیسی خصوصی شرحیں بھی ہیں۔"
  },
  {
    "id": 769,
    "question": "Now a days, all the farmers prefer cash crops to food crops. What problems does this lead to? This question aimed at achieving this academic standard (TSTET 24 May 2024)\nآج کل، تمام کسان غذائی فصلوں پر نقد فصلوں کو ترجیح دیتے ہیں۔ اس سے کیا مسائل پیدا ہوتے ہیں؟ اس سوال کا مقصد اس تعلیمی معیار کو حاصل کرنا تھا",
    "options": [
      "Conceptual understanding\nتصوراتی تفہیم",
      "Reflection on contemporary issues and questioning\nعصری مسائل پر غور و فکر اور سوال کرنا",
      "Information skills\nمعلوماتی مہارت",
      "Appreciation and sensitivity\nتعریف اور حساسیت"
    ],
    "correctAnswer": 1,
    "explanation": "اس سوال کے لیے طلباء کو حقائق کو یاد کرنے سے آگے بڑھنے کی ضرورت ہے۔ انہیں ایک موجودہ سماجی رجحان (غذائی فصلوں سے نقد فصلوں کی طرف منتقلی) کا تجزیہ کرنا ہوگا، اس کے ممکنہ منفی نتائج (مثلاً، غذائی تحفظ پر) کے بارے میں تنقیدی طور پر سوچنا ہوگا، اور ایک دلیل تیار کرنی ہوگی۔ یہ عمل براہ راست عصری مسائل پر غور و فکر اور موجودہ طریقوں پر سوال کرنے کے تعلیمی معیار سے مطابقت رکھتا ہے۔"
  },
  {
    "id": 770,
    "question": "Which of the following statement is NOT TRUE related to black board? (TSTET 24 May 2024)\nدرج ذیل میں سے کون سا بیان بلیک بورڈ سے متعلق درست نہیں ہے؟",
    "options": [
      "Black board acts as a mirror for the classroom work.\nبلیک بورڈ کلاس روم کے کام کے لیے ایک آئینے کے طور پر کام کرتا ہے۔",
      "Students should not be involved for writing on Black board\nطلباء کو بلیک بورڈ پر لکھنے کے لیے شامل نہیں کیا جانا چاہیے۔",
      "Black board can be used at anytime as per need\nبلیک بورڈ کو ضرورت کے مطابق کسی بھی وقت استعمال کیا جا سکتا ہے۔",
      "Black board can also be used along with other aids\nبلیک بورڈ کو دیگر امدادی سامان کے ساتھ بھی استعمال کیا جا سکتا ہے۔"
    ],
    "correctAnswer": 1,
    "explanation": "مؤثر اور جدید تدریسی طریقے طلباء کی فعال شرکت پر زور دیتے ہیں۔ طلباء کو بلیک بورڈ پر لکھوا کر شامل کرنا مصروفیت، تشخیص اور باہمی تعاون سے سیکھنے کے لیے ایک قیمتی تکنیک ہے۔ لہذا، یہ بیان کہ طلباء کو بورڈ پر لکھنے سے خارج کیا جانا چاہیے، غلط ہے اور اچھی تدریس کے خلاف ہے۔"
  },
  {
    "id": 771,
    "question": "Which of the following statement is NOT TRUE related to Inductive method? (TSTET 24 May 2024)\nدرج ذیل میں سے کون سا بیان استقرائی طریقہ سے متعلق درست نہیں ہے؟",
    "options": [
      "In inductive method, learning proceeds from particular to general\nاستقرائی طریقہ میں، سیکھنے کا عمل خاص سے عام کی طرف بڑھتا ہے۔",
      "Thinking ability, competencies and skills are developed in children by this method\nاس طریقہ سے بچوں میں سوچنے کی صلاحیت، قابلیت اور مہارتیں پیدا ہوتی ہیں۔",
      "Scientific attitudes cannot be developed by this method\nاس طریقہ سے سائنسی رویے پیدا نہیں کیے جا سکتے۔",
      "Students retain the things they learned for longer time\nطلباء اپنی سیکھی ہوئی چیزوں کو زیادہ دیر تک یاد رکھتے ہیں۔"
    ],
    "correctAnswer": 2,
    "explanation": "استقرائی طریقہ سائنسی تحقیق کے لیے بنیادی ہے۔ اس میں مخصوص مشاہدات کرنا اور پھر ان سے وسیع تر عمومیت یا نظریات اخذ کرنا شامل ہے۔ مشاہدے، تجزیے، اور مفروضے کی تشکیل کا یہ عمل قدرتی طور پر کلیدی سائنسی رویوں جیسے تجسس، معروضیت، اور ثبوت پر انحصار کو فروغ دیتا ہے۔ لہذا، یہ بیان کہ یہ سائنسی رویے پیدا نہیں کر سکتا، غلط ہے۔"
  },
  {
    "id": 772,
    "question": "Which of the following statements are true related to map reading?\nA) Map reading is an art\nB) Any person can read maps\nC) Maps have their own language\nChoose the correct answer (TSTET 24 May 2024)\nنقشہ پڑھنے سے متعلق درج ذیل میں سے کون سے بیانات درست ہیں؟\nA) نقشہ پڑھنا ایک فن ہے\nB) کوئی بھی شخص نقشے پڑھ سکتا ہے\nC) نقشوں کی اپنی زبان ہوتی ہے\nصحیح جواب کا انتخاب کریں",
    "options": [
      "A, C only\nصرف A, C",
      "A only\nصرف A",
      "A, B & C",
      "A, B only\nصرف A, B"
    ],
    "correctAnswer": 0,
    "explanation": "نقشہ پڑھنا ایک فن اور ایک مہارت سمجھا جاتا ہے (A درست ہے)۔ نقشے علامات، رنگوں اور پیمانوں کا ایک مخصوص سیٹ استعمال کرتے ہیں جو ان کی اپنی زبان بناتے ہیں (C درست ہے)۔ تاہم، بیان (B) ضروری نہیں کہ درست ہو؛ نقشے کو صحیح طریقے سے پڑھنے اور اس کی تشریح کرنے کے لیے سیکھنے اور مشق کی ضرورت ہوتی ہے، یہ کوئی پیدائشی صلاحیت نہیں ہے جسے کوئی بھی شخص بغیر تربیت کے کر سکتا ہے۔"
  },
  {
    "id": 773,
    "question": "This statement is NOT related to social studies (TSTET 24 May 2024)\nیہ بیان سماجی علوم سے متعلق نہیں ہے",
    "options": [
      "Social studies is the study of people in relation to each other and to their environment\nسماجی علوم لوگوں کا ایک دوسرے اور ان کے ماحول کے تعلق سے مطالعہ ہے۔",
      "Social studies gives importance to memorization\nسماجی علوم یاد کرنے کو اہمیت دیتا ہے۔",
      "Social studies draws its subject matter from history, geography, civics, economics etc\nسماجی علوم اپنا موضوع تاریخ، جغرافیہ، شہریات، معاشیات وغیرہ سے اخذ کرتا ہے۔",
      "Social studies deals with human relations in many forms.\nسماجی علوم انسانی تعلقات کو کئی شکلوں میں دیکھتا ہے۔"
    ],
    "correctAnswer": 1,
    "explanation": "جدید سماجی علوم کی تعلیم کا بنیادی مقصد تنقیدی سوچ، تجزیاتی مہارت، اور پیچیدہ انسانی تعلقات اور معاشرتی ڈھانچے کی سمجھ کو فروغ دینا ہے۔ اگرچہ کچھ حقائق کو یاد کرنا ضروری ہے، لیکن زور سمجھ اور اطلاق پر ہے، نہ کہ رٹا لگانے پر۔ لہذا، یہ کہنا کہ یہ 'یاد کرنے کو اہمیت دیتا ہے' اس کے بنیادی مقصد کی غلط نمائندگی کرتا ہے۔"
  },
  {
    "id": 774,
    "question": "This is not a component of a lesson plan. (TSTET 24 May 2024)\nیہ سبق کے منصوبے کا جزو نہیں ہے۔",
    "options": [
      "Time of the class\nکلاس کا وقت",
      "Period number\nپیریڈ نمبر",
      "Date of the class\nکلاس کی تاریخ",
      "Teacher’s signature\nاستاد کے دستخط"
    ],
    "correctAnswer": 3,
    "explanation": "سبق کا منصوبہ ایک سبق کو منعقد کرنے کے لیے استاد کی رہنمائی ہے۔ اس کے لازمی اجزاء میں مقاصد، سرگرمیاں، مواد، اور لاجسٹک معلومات جیسے تاریخ، کلاس، اور پیریڈ شامل ہیں۔ استاد کے دستخط تصدیق یا منظوری جیسے انتظامی مقاصد کے لیے ہوتے ہیں اور یہ سبق کو حقیقت میں پڑھانے کے لیے درکار کوئی فعال جزو نہیں ہے۔"
  },
  {
    "id": 775,
    "question": "This helps to acquire knowledge on their own by using various source materials. (TSTET 24 May 2024)\nیہ مختلف ذرائع مواد کا استعمال کرکے خود سے علم حاصل کرنے میں مدد کرتا ہے۔",
    "options": [
      "Project Method\nپروجیکٹ کا طریقہ",
      "Recitation method\nتلاوت کا طریقہ",
      "Question-Answer method\nسوال و جواب کا طریقہ",
      "Lecture method\nلیکچر کا طریقہ"
    ],
    "correctAnswer": 0,
    "explanation": "پروجیکٹ کا طریقہ ایک طالب علم پر مبنی نقطہ نظر ہے جہاں طلباء ایک طویل مدت تک کسی موضوع کی چھان بین کرتے ہیں۔ یہ طریقہ فطری طور پر طلباء سے مطالبہ کرتا ہے کہ وہ اپنے پروجیکٹ کو مکمل کرنے کے لیے مختلف ذرائع (کتابیں، انٹرنیٹ، انٹرویوز) سے آزادانہ طور پر تحقیق کریں اور معلومات اکٹھا کریں، اس طرح خود ہدایت یافتہ سیکھنے کو فروغ ملتا ہے۔"
  },
  {
    "id": 776,
    "question": "This type of test items can not be used for diagnosis (TSTET 24 May 2024)\nاس قسم کے ٹیسٹ آئٹمز کو تشخیص کے لیے استعمال نہیں کیا جا سکتا",
    "options": [
      "Multiple choice\nمتعدد انتخاب",
      "Matching type\nملاپ کی قسم",
      "Completion type\nتکمیل کی قسم",
      "Essay type\nمضمون کی قسم"
    ],
    "correctAnswer": 1,
    "explanation": "تشخیصی ٹیسٹوں کا مقصد مخصوص سیکھنے کی مشکلات کی نشاندہی کرنا ہے۔ ملاپ کی قسم کے سوالات اشیاء کے جوڑوں کے درمیان تعلقات کی شناخت کی جانچ کے لیے موثر ہیں لیکن عام طور پر تشخیص کے لیے ناقص ہیں۔ وہ طالب علم کے سوچنے کے عمل یا ان کی غلط فہمی کی مخصوص نوعیت کو اس طرح ظاہر نہیں کرتے جس طرح متعدد انتخاب میں غلط انتخاب کا تجزیہ کرنا، مضمون میں تحریری جواب کا تجزیہ کرنا، یا تکمیل کی قسم کے سوال میں مخصوص غلطی کو دیکھنا کر سکتا ہے۔"
  },
  {
    "id": 777,
    "question": "'To study about the life style of tribals in Adilabad district'. The most suitable teaching method is (TSTET 24 May 2024)\n'عادل آباد ضلع میں قبائلیوں کے طرز زندگی کے بارے میں مطالعہ کرنا'۔ سب سے موزوں تدریسی طریقہ ہے",
    "options": [
      "Project Method\nپروجیکٹ کا طریقہ",
      "Source Method\nماخذ کا طریقہ",
      "Lecture Method\nلیکچر کا طریقہ",
      "Field trip Method\nفیلڈ ٹرپ کا طریقہ"
    ],
    "correctAnswer": 3,
    "explanation": "کسی کمیونٹی کے طرز زندگی کا مطالعہ کرنے کے لیے، سب سے مؤثر اور مستند طریقہ فیلڈ ٹرپ (جسے سیر و تفریح کا طریقہ بھی کہا جاتا ہے) ہے۔ یہ طلباء کو براہ راست، پہلا ہاتھ کا تجربہ حاصل کرنے اور لوگوں، ان کی ثقافت، اور ان کے ماحول کو حقیقی ماحول میں مشاہدہ کرنے کی اجازت دیتا ہے، جو کسی بھی کلاس روم پر مبنی طریقہ سے کہیں زیادہ بھرپور تفہیم فراہم کرتا ہے۔"
  },
  {
    "id": 778,
    "question": "This is not a quality of a good social studies text book. (TSTET 24 May 2024)\nیہ ایک اچھی سماجی علوم کی نصابی کتاب کا معیار نہیں ہے۔",
    "options": [
      "Logical and psychological sequence of content\nمواد کی منطقی اور نفسیاتی ترتیب",
      "Gives scope for discussions and debates\nبحث و مباحثے کی گنجائش دیتا ہے۔",
      "Gives information through pictures and cartoons\nتصاویر اور کارٹون کے ذریعے معلومات دیتا ہے۔",
      "Gives importance for memorizing facts\nحقائق کو یاد کرنے پر زور دیتا ہے۔"
    ],
    "correctAnswer": 3,
    "explanation": "ایک اعلیٰ معیار کی سماجی علوم کی نصابی کتاب کو تنقیدی سوچ، تجزیہ، اور تصورات کی تفہیم کو فروغ دینا چاہیے۔ اس کا بنیادی مقصد رٹا لگانے کے لیے حقائق کا ذخیرہ بننا نہیں ہے۔ لہذا، ایک نصابی کتاب جو حقائق کو یاد کرنے کو بنیادی اہمیت دیتی ہے، بجائے اس کے کہ تحقیق اور تشریح کی حوصلہ افزائی کرے، ایک اچھے تعلیمی وسائل کے کلیدی معیار سے محروم ہے۔"
  },
  {
    "id": 779,
    "question": "The father of modern Chinese revolution is (TSTET 24 May 2024)\nجدید چینی انقلاب کا بانی ہے",
    "options": [
      "Dr. Sun Yat Sen\nڈاکٹر سن یات سین",
      "Mao Zedong\nماؤ زے تنگ",
      "Chiang Kai Shek\nچیانگ کائی شیک",
      "Yuan Shikai\nیوان شیکائی"
    ],
    "correctAnswer": 0,
    "explanation": "ڈاکٹر سن یات سین کو 'جدید چین کا بانی' کے طور پر عزت دی جاتی ہے۔ وہ ایک انقلابی اور سیاسی رہنما تھے جنہوں نے 1911 کے انقلاب کے دوران چنگ خاندان کا تختہ الٹنے میں اہم کردار ادا کیا۔ انہوں نے کومنتانگ (KMT) کی مشترکہ بنیاد رکھی اور جمہوریہ چین کے پہلے عبوری صدر کے طور پر خدمات انجام دیں۔"
  },
  {
    "id": 780,
    "question": "In the year 1917, the peasants of Champaran were forced by the British to cultivate this crop. (TSTET 24 May 2024)\nسال 1917 میں، چمپارن کے کسانوں کو انگریزوں نے اس فصل کو کاشت کرنے پر مجبور کیا تھا۔",
    "options": [
      "Tea\nچائے",
      "Cotton\nکپاس",
      "Indigo\nنیل",
      "Opium\nافیون"
    ],
    "correctAnswer": 2,
    "explanation": "1917 کا چمپارن ستیہ گرہ، جس کی قیادت مہاتما گاندھی نے کی، بہار کے چمپارن کے کرایہ دار کسانوں کی جانب سے ایک تحریک تھی۔ انہیں ان کے برطانوی زمینداروں نے استحصالی 'تنکتھیا' نظام کے تحت اپنی زمین کے ایک حصے پر نیل کاشت کرنے پر مجبور کیا، جس کی وجہ سے انہیں بڑی مشکلات اور مالی نقصان اٹھانا پڑا۔"
  },
  {
    "id": 781,
    "question": "Ravi is travelling from New York to New Delhi. Hence, he (TSTET 28 May 2024)\nروی نیویارک سے نئی دہلی کا سفر کر رہا ہے۔ لہٰذا، وہ",
    "options": [
      "Loses 4 minutes of time as he crosses every longitude\nہر طول البلد کو عبور کرتے وقت 4 منٹ کا وقت کھو دیتا ہے",
      "Gains 4 minutes of time as he crosses every longitude\nہر طول البلد کو عبور کرتے وقت 4 منٹ کا وقت حاصل کرتا ہے",
      "Neither gains nor loses the time as he crosses every longitude\nہر طول البلد کو عبور کرتے وقت نہ وقت حاصل کرتا ہے اور نہ ہی کھوتا ہے",
      "Gains 15 minutes of time as he crosses every longitude\nہر طول البلد کو عبور کرتے وقت 15 منٹ کا وقت حاصل کرتا ہے"
    ],
    "correctAnswer": 1,
    "explanation": "جب نیویارک (مغربی نصف کرہ) سے نئی دہلی (مشرقی نصف کرہ) کی طرف مشرق کی سمت سفر کرتے ہیں، تو کوئی پہلے کے ٹائم زون کی طرف بڑھتا ہے۔ زمین مغرب سے مشرق کی طرف گھومتی ہے، اور مشرق کی طرف ہر ڈگری طول البلد عبور کرنے پر وقت میں 4 منٹ کا اضافہ ہوتا ہے۔ لہٰذا، روی سفر کے دوران وقت حاصل کرے گا۔"
  },
  {
    "id": 782,
    "question": "The lava which cools under the surface and becomes rocks even without reaching the surface of the earth, these rocks are called as (TSTET 28 May 2024)\nوہ لاوا جو سطح کے نیچے ٹھنڈا ہو کر زمین کی سطح تک پہنچے بغیر چٹانیں بن جاتا ہے، ان چٹانوں کو کہا جاتا ہے",
    "options": [
      "Intrusive rocks\nانٹروژیو چٹانیں",
      "Extrusive rocks\nایکسٹروژیو چٹانیں",
      "Sedimentary rocks\nتلچھٹی چٹانیں",
      "Metamorphic rocks\nمیٹامورفک چٹانیں"
    ],
    "correctAnswer": 0,
    "explanation": "انٹروژیو آگنی چٹانیں، جنہیں پلوٹونک چٹانیں بھی کہا جاتا ہے، اس وقت بنتی ہیں جب میگما زمین کی پرت کے اندر سطح تک پہنچے بغیر آہستہ آہستہ ٹھنڈا اور کرسٹلائز ہو جاتا ہے۔ یہ آہستہ ٹھنڈک کا عمل بڑے کرسٹل کی تشکیل کی اجازت دیتا ہے۔ گرینائٹ ایک عام مثال ہے۔"
  },
  {
    "id": 783,
    "question": "The water concentrated here is most easily accessible for human needs and absolutely vital for the ecosystems (TSTET 28 May 2024)\nیہاں مرتکز پانی انسانی ضروریات کے لیے سب سے زیادہ آسانی سے قابل رسائی ہے اور ماحولیاتی نظام کے لیے بالکل ضروری ہے",
    "options": [
      "Ice and permanent snow cover in the Antarctica\nانٹارکٹیکا میں برف اور مستقل برف کی تہہ",
      "The permanent snow in the mountain ranges\nپہاڑی سلسلوں میں مستقل برف",
      "Fresh Ground Waters\nتازہ زمینی پانی",
      "Water concentrated in lakes, reservoirs and in rivers\nجھیلوں، آبی ذخائر اور دریاؤں میں مرتکز پانی"
    ],
    "correctAnswer": 3,
    "explanation": "سطحی تازہ پانی، جو جھیلوں، آبی ذخائر اور دریاؤں میں پایا جاتا ہے، انسانی استعمال، زراعت اور صنعت کے لیے پانی کا سب سے زیادہ قابل رسائی ذریعہ ہے۔ یہ بہت سے اہم آبی ماحولیاتی نظام کی بنیاد بھی بناتا ہے، حالانکہ یہ زمین کے کل پانی کا بہت چھوٹا حصہ ہے۔"
  },
  {
    "id": 784,
    "question": "From among the following, the layer of Heterosphere is (TSTET 28 May 2024)\nدرج ذیل میں سے، ہیٹروسفیئر کی تہہ ہے",
    "options": [
      "Troposphere\nٹروپوسفیئر",
      "Stratosphere\nاسٹریٹوسفیئر",
      "Mesosphere\nمیزوسفیئر",
      "Exosphere\nایگزوسفیئر"
    ],
    "correctAnswer": 3,
    "explanation": "زمین کی فضا کو ہوموسفیئر (تقریباً 80 کلومیٹر تک) اور ہیٹروسفیئر (80 کلومیٹر سے اوپر) میں تقسیم کیا گیا ہے۔ ہیٹروسفیئر میں تھرموسفیئر اور ایگزوسفیئر شامل ہیں۔ اس تہہ میں، گیسیں اچھی طرح سے ملی ہوئی نہیں ہوتیں اور سالماتی وزن کے لحاظ سے تہہ دار ہوتی ہیں۔ ایگزوسفیئر سب سے بیرونی تہہ ہے۔"
  },
  {
    "id": 785,
    "question": "Read the following statements and answer the following A) A Canyon is characterised by steep side slopes. It is wider at its top than at the bottom. B) A Gorge is almost equal in width at its top as well as its bottom (TSTET 28 May 2024)\nدرج ذیل بیانات کو پڑھیں اور جواب دیں A) ایک وادی (Canyon) کی خصوصیت کھڑی ڈھلوانیں ہیں۔ یہ اوپر سے چوڑی اور نیچے سے تنگ ہوتی ہے۔ B) ایک گھاٹی (Gorge) اوپر اور نیچے تقریباً برابر چوڑائی کی ہوتی ہے۔",
    "options": [
      "Statement 'A 'is correct but 'B' is incorrect\nبیان 'A' درست ہے لیکن 'B' غلط ہے",
      "Statement 'A 'is incorrect but 'B' is correct\nبیان 'A' غلط ہے لیکن 'B' درست ہے",
      "Statement 'A 'and 'B' are correct\nبیان 'A' اور 'B' دونوں درست ہیں",
      "Statement 'A 'and 'B' are incorrect\nبیان 'A' اور 'B' دونوں غلط ہیں"
    ],
    "correctAnswer": 2,
    "explanation": "دونوں بیانات متعلقہ زمینی اشکال کی صحیح وضاحت کرتے ہیں۔ ایک وادی (Canyon) ایک گہری وادی ہے جس کی کھڑی ڈھلوانیں ہوتی ہیں، جو عام طور پر اوپر سے چوڑی ہوتی ہے، اور اکثر خشک علاقوں میں بنتی ہے۔ ایک گھاٹی (Gorge) بھی ایک گہری، تنگ وادی ہے، لیکن اس کی چوڑائی اوپر سے نیچے تک تقریباً یکساں ہوتی ہے، اور اکثر بہت کھڑی، پتھریلی دیواریں ہوتی ہیں۔"
  },
  {
    "id": 786,
    "question": "Between the latitudes $40^{0}$ and $60^{0}$ N and S of the equator, the rainfall is heavy on the west coast and decreases towards the east due to (TSTET 28 May 2024)\nخط استوا کے $40^{0}$ اور $60^{0}$ شمال اور جنوب کے عرض البلد کے درمیان، مغربی ساحل پر بارش زیادہ ہوتی ہے اور مشرق کی طرف کم ہوتی ہے اس کی وجہ",
    "options": [
      "The Westerlies\nمغربی ہوائیں",
      "Trade winds\nتجارتی ہوائیں",
      "Monsoon winds\nموسمی ہوائیں",
      "The Polar High Pressure Winds\nقطبی ہائی پریشر ہوائیں"
    ],
    "correctAnswer": 0,
    "explanation": "مغربی ہوائیں وہ غالب ہوائیں ہیں جو درمیانی عرض البلد ($30^{0}$ سے $60^{0}$) میں مغرب سے مشرق کی طرف چلتی ہیں۔ وہ سمندروں سے نمی اٹھاتی ہیں اور براعظموں کے مغربی ساحلوں پر اہم اوروگرافک بارش کا سبب بنتی ہیں۔ جب وہ اندرون ملک (مشرق کی طرف) چلتی ہیں، تو وہ نمی کھو دیتی ہیں، جس کی وجہ سے بارش میں کمی واقع ہوتی ہے۔"
  },
  {
    "id": 787,
    "question": "This type of farming is labour intensive where high doses of biochemical inputs and irrigation are used for obtaining higher production (TSTET 28 May 2024)\nاس قسم کی کاشتکاری محنت طلب ہے جہاں زیادہ پیداوار حاصل کرنے کے لیے بائیو کیمیکل ان پٹس اور آبپاشی کی زیادہ مقدار استعمال کی جاتی ہے",
    "options": [
      "Simple subsistence farming\nسادہ گزارہ کاشتکاری",
      "Commercial farming\nتجارتی کاشتکاری",
      "Intensive subsistence farming\nگھنی گزارہ کاشتکاری",
      "Mixed farming\nمخلوط کاشتکاری"
    ],
    "correctAnswer": 2,
    "explanation": "گھنی گزارہ کاشتکاری کی خصوصیت ایک چھوٹے سے زمین کے پلاٹ پر محنت، کھاد، اور پانی کے زیادہ ان پٹس سے ہوتی ہے تاکہ فی یونٹ رقبہ کی پیداوار کو زیادہ سے زیادہ کیا جا سکے۔ یہ طریقہ گنجان آباد علاقوں میں عام ہے جہاں زمین کی ملکیت چھوٹی ہوتی ہے۔"
  },
  {
    "id": 788,
    "question": "The two main factors for the location of the Aluminium Smelting Industry are (TSTET 28 May 2024)\nایلومینیم سمیلٹنگ انڈسٹری کے مقام کے لیے دو اہم عوامل ہیں",
    "options": [
      "Regular Supply of water and availability of cheap labour\nپانی کی باقاعدہ فراہمی اور سستی مزدوری کی دستیابی",
      "Regular supply of electricity and continuous availability of labour cheaply\nبجلی کی باقاعدہ فراہمی اور سستی مزدوری کی مسلسل دستیابی",
      "An assured source of raw material at minimum cost and regular supply of water\nکم سے کم لاگت پر خام مال کا یقینی ذریعہ اور پانی کی باقاعدہ فراہمی",
      "Regular supply of electricity and an assured source of raw material at minimum cost\nبجلی کی باقاعدہ فراہمی اور کم سے کم لاگت پر خام مال کا یقینی ذریعہ"
    ],
    "correctAnswer": 3,
    "explanation": "ایلومینیم سمیلٹنگ ایک انتہائی بجلی پر منحصر عمل ہے، جس کے لیے بجلی کی بڑی اور باقاعدہ فراہمی کی ضرورت ہوتی ہے۔ خام مال، باکسائٹ، کے ذریعہ سے کم قیمت پر قربت بھی نقل و حمل کے اخراجات کو کم کرنے اور صنعت کی اقتصادی viability کو یقینی بنانے کے لیے اہم ہے۔"
  },
  {
    "id": 789,
    "question": "The Shiwalik Ranges run parallel to the lesser Himalayas for a distance of 2400 km from (TSTET 28 May 2024)\nشیوالک سلسلے چھوٹے ہمالیہ کے متوازی 2400 کلومیٹر کے فاصلے تک یہاں سے چلتے ہیں",
    "options": [
      "Pir Panjal Range and Zaskar Range\nپیر پنجال رینج اور زسکار رینج",
      "The Potwar Plateau and the Brahmaputra Valley\nپوٹوہار سطح مرتفع اور برہم پترا وادی",
      "Jammu & Kashmir and Nagaland\nجموں و کشمیر اور ناگالینڈ",
      "Dehradun in Uttaranchal and Brahmaputra Valley\nاترانچل میں دہرادون اور برہم پترا وادی"
    ],
    "correctAnswer": 1,
    "explanation": "شیوالک رینج، ہمالیہ کے سب سے بیرونی دامن، مغرب میں پاکستان کے پوٹوہار سطح مرتفع سے لے کر مشرق میں اروناچل پردیش کی برہم پترا وادی تک تقریباً 2,400 کلومیٹر تک پھیلی ہوئی ہے، جو ہمالیہ کے اہم سلسلوں کے متوازی چلتی ہے۔"
  },
  {
    "id": 790,
    "question": "Identify the true statement from among the following (TSTET 28 May 2024)\nدرج ذیل میں سے صحیح بیان کی نشاندہی کریں",
    "options": [
      "Shimla is cooler than Delhi and Panaji as it is located at higher altitude\nشملہ دہلی اور پنجی سے زیادہ ٹھنڈا ہے کیونکہ یہ زیادہ اونچائی پر واقع ہے",
      "Shimla is hotter than Delhi and Panaji as it is located at higher altitude\nشملہ دہلی اور پنجی سے زیادہ گرم ہے کیونکہ یہ زیادہ اونچائی پر واقع ہے",
      "Shimla, Delhi and Panaji experience same temperatures even though they are located at different altitudes\nشملہ، دہلی اور پنجی مختلف اونچائیوں پر واقع ہونے کے باوجود ایک جیسے درجہ حرارت کا تجربہ کرتے ہیں",
      "There is no impact of Altitude on temperature\nاونچائی کا درجہ حرارت پر کوئی اثر نہیں ہوتا"
    ],
    "correctAnswer": 0,
    "explanation": "درجہ حرارت عام طور پر اونچائی میں اضافے کے ساتھ کم ہوتا ہے، یہ ایک ایسا رجحان ہے جسے نارمل لیپس ریٹ کہا جاتا ہے۔ چونکہ شملہ دہلی (تقریباً 280 میٹر) اور پنجی (سطح سمندر پر) سے بہت زیادہ اونچائی (تقریباً 2276 میٹر) پر واقع ہے، اس لیے یہاں سال بھر درجہ حرارت ٹھنڈا رہتا ہے۔"
  },
  {
    "id": 791,
    "question": "This information is an important social indicator to measure the extent of equality between men and women in a society (TSTET 28 May 2024)\nیہ معلومات معاشرے میں مردوں اور عورتوں کے درمیان مساوات کی حد کو ماپنے کے لیے ایک اہم سماجی اشارے ہے",
    "options": [
      "Growth Rate of Population\nآبادی کی شرح نمو",
      "Literacy rate\nشرح خواندگی",
      "Fertility rate\nشرح تولید",
      "Sex Ratio\nجنسی تناسب"
    ],
    "correctAnswer": 3,
    "explanation": "جنسی تناسب، جسے 1000 مردوں کے مقابلے میں خواتین کی تعداد کے طور پر بیان کیا جاتا ہے، صنفی توازن کا ایک اہم اشارہ ہے۔ ایک بگڑا ہوا یا گرتا ہوا جنسی تناسب اکثر سماجی مسائل جیسے کہ خواتین کے جنین کشی، بیٹے کی ترجیح، صنفی بنیاد پر امتیازی سلوک، اور خواتین کے لیے وسائل تک غیر مساوی رسائی کی نشاندہی کرتا ہے۔"
  },
  {
    "id": 792,
    "question": "One of the following is NOT the characteristic feature of Peninsular rivers (TSTET 28 May 2024)\nدرج ذیل میں سے ایک جزیرہ نما دریاؤں کی خصوصیت نہیں ہے",
    "options": [
      "they have fixed course\nان کا راستہ متعین ہوتا ہے",
      "meanders are absent\nموڑ موجود نہیں ہوتے",
      "largely non perennial\nبڑے پیمانے پر غیر بارہماسی",
      "largely perennial\nبڑے پیمانے پر بارہماسی"
    ],
    "correctAnswer": 3,
    "explanation": "جزیرہ نما دریا زیادہ تر بارش سے بھرے ہوتے ہیں اور گلیشیئرز سے نہیں نکلتے۔ لہٰذا، ان کا بہاؤ موسمی ہے اور مون سون پر منحصر ہے، جو انہیں بڑی حد تک غیر بارہماسی بناتا ہے (سال بھر نہیں بہتے)۔ بڑی حد تک بارہماسی ہونا ہمالیائی دریاؤں کی خصوصیت ہے، جزیرہ نما دریاؤں کی نہیں۔"
  },
  {
    "id": 793,
    "question": "In India, these soils cover about 45.6% of the total geographical area of the country (TSTET 28 May 2024)\nہندوستان میں، یہ مٹی ملک کے کل جغرافیائی رقبے کا تقریباً 45.6% احاطہ کرتی ہے",
    "options": [
      "Red Soils\nسرخ مٹی",
      "Black Soils\nکالی مٹی",
      "Alluvial Soils\nالویئل مٹی",
      "Laterite Soils\nلیٹرائٹ مٹی"
    ],
    "correctAnswer": 2,
    "explanation": "الویئل مٹی ہندوستان میں سب سے زیادہ پھیلی ہوئی مٹی ہے، جو کل زمینی رقبے کا تقریباً 46% احاطہ کرتی ہے۔ یہ وسیع شمالی میدانوں اور دریاؤں کی وادیوں میں پائی جاتی ہے اور دریاؤں کے ذریعے گاد، ریت اور مٹی کے جمع ہونے سے بنتی ہے، جو اسے انتہائی زرخیز بناتی ہے۔"
  },
  {
    "id": 794,
    "question": "On these two days, the Sun shine directly over the equator (TSTET 28 May 2024)\nان دو دنوں میں، سورج براہ راست خط استوا پر چمکتا ہے",
    "options": [
      "June 21 and December 22\n21 جون اور 22 دسمبر",
      "March 21 and December 22\n21 مارچ اور 22 دسمبر",
      "June 21 and September 23\n21 جون اور 23 ستمبر",
      "March 21 and September 23\n21 مارچ اور 23 ستمبر"
    ],
    "correctAnswer": 3,
    "explanation": "اعتدالین (equinoxes) تقریباً 21 مارچ (بہاری اعتدال) اور 23 ستمبر (خزانی اعتدال) کو ہوتے ہیں۔ ان تاریخوں پر، سورج کی شعاعیں براہ راست خط استوا پر پڑتی ہیں، جس کے نتیجے میں پوری دنیا میں دن اور رات کی لمبائی تقریباً برابر ہوتی ہے۔"
  },
  {
    "id": 795,
    "question": "From among the following, the finest iron ore with a very high content of iron is (TSTET 28 May 2024)\nدرج ذیل میں سے، لوہے کے بہت زیادہ مواد کے ساتھ بہترین لوہے کی کچ دھات ہے",
    "options": [
      "Magnetite\nمیگنیٹائٹ",
      "Hematite\nہیمیٹائٹ",
      "Limotite\nلیموٹائٹ",
      "Siderite\nسائڈیرائٹ"
    ],
    "correctAnswer": 0,
    "explanation": "میگنیٹائٹ ($Fe_3O_4$) کو لوہے کی بہترین قسم کی کچ دھات سمجھا جاتا ہے، جس میں لوہے کا مواد 72% تک ہوتا ہے۔ اس میں بہترین مقناطیسی خصوصیات بھی ہوتی ہیں۔ ہیمیٹائٹ عالمی سطح پر سب سے اہم صنعتی لوہے کی کچ دھات ہے لیکن اس میں میگنیٹائٹ سے تھوڑا کم لوہے کا مواد ہوتا ہے۔"
  },
  {
    "id": 796,
    "question": "Fixation of minimum support price is based on the recommendations of (TSTET 28 May 2024)\nکم از کم امدادی قیمت کا تعین ان کی سفارشات پر مبنی ہے",
    "options": [
      "Commission for agriculture costs and prices\nکمیشن برائے زرعی لاگت اور قیمتیں",
      "Food corporation of India\nفوڈ کارپوریشن آف انڈیا",
      "Indian costs and works association\nانڈین کاسٹس اینڈ ورکس ایسوسی ایشن",
      "Farmers Associations of India\nفارمرز ایسوسی ایشنز آف انڈیا"
    ],
    "correctAnswer": 0,
    "explanation": "کمیشن برائے زرعی لاگت اور قیمتیں (CACP) وہ قانونی ادارہ ہے جو حکومت ہند کو مختلف زرعی فصلوں کے لیے کم از کم امدادی قیمتوں (MSPs) کی سفارش کرتا ہے، جو پھر حتمی فیصلہ کرتی ہے۔"
  },
  {
    "id": 797,
    "question": "Arrange 'the stages of manufacturing paper in a proper sequence A) Making wood pulp B) Chipping C) Pressing, drying and rolling D) Spreading pulp E) Cutting the paper (TSTET 28 May 2024)\n'کاغذ بنانے کے مراحل' کو ایک مناسب ترتیب میں ترتیب دیں A) لکڑی کا گودا بنانا B) چپنگ C) دبانا، خشک کرنا اور رول کرنا D) گودا پھیلانا E) کاغذ کاٹنا",
    "options": [
      "A, E, C, D, B",
      "A, B, C, D, E",
      "B, C, D, E, A",
      "B, A, D, C, E"
    ],
    "correctAnswer": 3,
    "explanation": "کاغذ سازی کے لیے صحیح ترتیب یہ ہے: B) چپنگ (لکڑی کاٹنا)، A) لکڑی کا گودا بنانا (فائبر سلری بنانا)، D) گودا پھیلانا (ایک شیٹ بنانا)، C) دبانا، خشک کرنا اور رول کرنا (پانی نکالنا اور ہموار کرنا)، اور E) کاغذ کاٹنا۔"
  },
  {
    "id": 798,
    "question": "IFSC and internet do not need for the following digital payments (TSTET 28 May 2024)\nدرج ذیل ڈیجیٹل ادائیگیوں کے لیے IFSC اور انٹرنیٹ کی ضرورت نہیں ہے",
    "options": [
      "RTGS",
      "NEFT",
      "USSD",
      "UPI"
    ],
    "correctAnswer": 2,
    "explanation": "ان اسٹرکچرڈ سپلیمنٹری سروس ڈیٹا (USSD) ٹیکنالوجی انٹرنیٹ کنکشن کے بغیر ایک بنیادی فیچر فون کا استعمال کرتے ہوئے موبائل بینکنگ لین دین کی اجازت دیتی ہے۔ صارفین خدمات تک رسائی کے لیے ایک مخصوص کوڈ (جیسے *99#) ڈائل کرتے ہیں۔ RTGS، NEFT، اور UPI کو عام طور پر انٹرنیٹ کنکشن کی ضرورت ہوتی ہے۔"
  },
  {
    "id": 799,
    "question": "A change in the price is measured with the help of a statistical device referred as (TSTET 28 May 2024)\nقیمت میں تبدیلی کو ایک شماریاتی آلے کی مدد سے ماپا جاتا ہے جسے کہا جاتا ہے",
    "options": [
      "Inflation\nافراط زر",
      "Price index\nقیمت کا اشاریہ",
      "Margin price\nمارجن قیمت",
      "Growth\nترقی"
    ],
    "correctAnswer": 1,
    "explanation": "قیمت کا اشاریہ ایک شماریاتی پیمانہ ہے جو ایک بنیادی مدت کے مقابلے میں وقت کے ساتھ اشیاء اور خدمات کی ایک ٹوکری کی قیمتوں میں اوسط فیصد تبدیلی کو ظاہر کرتا ہے۔ یہ افراط زر کو ماپنے کے لیے استعمال ہونے والا بنیادی آلہ ہے۔"
  },
  {
    "id": 800,
    "question": "Inorder to obtain Gross Domestic Product, the following has to be subtracted from Gross National Product (TSTET 28 May 2024)\nمجموعی گھریلو پیداوار حاصل کرنے کے لیے، درج ذیل کو مجموعی قومی پیداوار سے منہا کرنا ہوگا",
    "options": [
      "Net income from abroad\nبیرون ملک سے خالص آمدنی",
      "Depreciation\nفرسودگی",
      "Indirect taxes\nبالواسطہ ٹیکس",
      "Subsidy\nسبسڈی"
    ],
    "correctAnswer": 0,
    "explanation": "تعلق یہ ہے کہ GNP = GDP + بیرون ملک سے خالص فیکٹر آمدنی (NFIA)۔ لہٰذا، GNP سے GDP حاصل کرنے کے لیے، کسی کو بیرون ملک سے خالص فیکٹر آمدنی کو منہا کرنا ہوگا (جو کہ رہائشیوں کی بیرون ملک سے حاصل کردہ آمدنی مائنس غیر رہائشیوں کی اندرون ملک حاصل کردہ آمدنی ہے)۔"
  },
  {
    "id": 801,
    "question": "The following can be considered as chronic energy deficiency (TSTET 28 May 2024)\nدرج ذیل کو دائمی توانائی کی کمی سمجھا جا سکتا ہے",
    "options": [
      "$BMI\\le18.5$",
      "BMI between 18.5 and 25\nBMI 18.5 اور 25 کے درمیان",
      "$BMI\\ge25$",
      "$BMI\\ge20$"
    ],
    "correctAnswer": 0,
    "explanation": "باڈی ماس انڈیکس (BMI) جسمانی چربی کا ایک پیمانہ ہے۔ عالمی ادارہ صحت (WHO) کے مطابق، 18.5 یا اس سے کم BMI کو کم وزن کے طور پر درجہ بندی کیا جاتا ہے، جو بالغوں میں دائمی توانائی کی کمی یا غذائی قلت کا اشارہ ہے۔"
  },
  {
    "id": 802,
    "question": "Removing of trade barriers or restrictions set by the government is known as (TSTET 28 May 2024)\nحکومت کی طرف سے عائد کردہ تجارتی رکاوٹوں یا پابندیوں کو ہٹانا کیا کہلاتا ہے",
    "options": [
      "Globalisation\nگلوبلائزیشن",
      "Liberalisation\nلبرلائزیشن",
      "Privatisation\nنجکاری",
      "Socialization\nسماجی کاری"
    ],
    "correctAnswer": 1,
    "explanation": "لبرلائزیشن سے مراد معاشی سرگرمیوں پر حکومتی کنٹرول اور پابندیوں کو کم کرنے یا ختم کرنے کا عمل ہے۔ تجارت کے تناظر میں، اس میں آزاد تجارت کو فروغ دینے کے لیے ٹیرف، کوٹہ اور درآمدی لائسنس جیسی رکاوٹوں کو دور کرنا شامل ہے۔"
  },
  {
    "id": 803,
    "question": "The main force behind Chipko movement was (TSTET 28 May 2024)\nچپکو تحریک کے پیچھے اصل قوت کون تھی",
    "options": [
      "Greenpeace organization\nگرین پیس تنظیم",
      "Tribal people\nقبائلی لوگ",
      "Village women\nگاؤں کی خواتین",
      "Contractors\nٹھیکیدار"
    ],
    "correctAnswer": 2,
    "explanation": "چپکو تحریک بنیادی طور پر گڑھوال ہمالیہ کی دیہی خواتین کی طرف سے چلائی جانے والی ایک عدم تشدد پر مبنی ماحولیاتی تحریک تھی۔ انہوں نے درختوں کو کٹنے سے بچانے کے لیے انہیں گلے لگایا (لفظ 'چپکو' کا لفظی مطلب)، جس سے روزی روٹی اور sustenance کے لیے جنگلات پر ان کے انحصار کو اجاگر کیا گیا۔"
  },
  {
    "id": 804,
    "question": "One among the following is NOT a service sector activity (TSTET 28 May 2024)\nدرج ذیل میں سے کون سی سروس سیکٹر کی سرگرمی نہیں ہے",
    "options": [
      "Milk vending\nدودھ فروشی",
      "Mining extraction\nکان کنی",
      "Garden watchmen\nباغ کے چوکیدار",
      "Vegetable selling\nسبزی فروشی"
    ],
    "correctAnswer": 1,
    "explanation": "معاشی سرگرمیوں کو بنیادی (استخراج)، ثانوی (مینوفیکچرنگ) اور ثالثی (خدمات) شعبوں میں تقسیم کیا گیا ہے۔ کان کنی میں زمین سے قدرتی وسائل نکالنا شامل ہے، جو کہ ایک بنیادی شعبے کی سرگرمی ہے۔ دیگر تمام آپشنز ثالثی شعبے کی سرگرمیاں ہیں۔"
  },
  {
    "id": 805,
    "question": "Magasthenes, an ambassador of a Greek King, was in the court of (TSTET 28 May 2024)\nمیگاستھینز، ایک یونانی بادشاہ کا سفیر، کس کے دربار میں تھا",
    "options": [
      "Bimbisara\nبمبسار",
      "Chandragupta Maurya\nچندرگپت موریا",
      "Ashoka\nاشوک",
      "Bindusara\nبندوسار"
    ],
    "correctAnswer": 1,
    "explanation": "میگاستھینز ایک یونانی سفارت کار تھا جسے سیلیوکس اول نیکاتور نے پاٹلی پتر میں چندرگپت موریا کے دربار میں سفیر بنا کر بھیجا تھا۔ اس کی مشہور تصنیف 'انڈیکا' موریائی ہندوستان کا ایک قیمتی، اگرچہ جزوی طور پر بکھرا ہوا، احوال فراہم کرتی ہے۔"
  },
  {
    "id": 806,
    "question": "This inscription had provided the details of the way in which the Sabha was organised during Cholas (TSTET 28 May 2024)\nاس کتبے نے چولوں کے دور میں سبھا کی تنظیم کے طریقے کی تفصیلات فراہم کی تھیں",
    "options": [
      "Uttaramerur Inscription\nاترامیور کتبہ",
      "Allahabad Inscription\nالٰہ آباد کتبہ",
      "Junagadh Rock Inscription\nجوناگڑھ چٹانی کتبہ",
      "Nasik Inscription\nناسِک کتبہ"
    ],
    "correctAnswer": 0,
    "explanation": "تمل ناڈو سے ملنے والے اترامیور کتبے چولا خاندان کے دوران گاؤں کی خود حکمرانی کے نظام کے بارے میں تفصیلی معلومات فراہم کرتے ہیں۔ وہ 'سبھا' (گاؤں کی اسمبلی) کے کام کی وضاحت کرتے ہیں، بشمول اراکین کی قابلیت اور لاٹری سسٹم کے ذریعے ان کے انتخاب کا عمل۔"
  },
  {
    "id": 807,
    "question": "The Mahajanapadhas which were NOT in India at present (TSTET 28 May 2024)\nوہ مہاجن پد جو اس وقت ہندوستان میں نہیں تھے",
    "options": [
      "Magadha, Anga\nمگدھ، انگا",
      "Vatsa, Kosala\nواتسا، کوسالا",
      "Kamboja, Gandhara\nکمبوج، گندھارا",
      "Magadha. Asmaka\nمگدھ، اسمکا"
    ],
    "correctAnswer": 2,
    "explanation": "قدیم مہاجن پد کمبوج اور گندھارا برصغیر کے شمال مغربی حصے میں واقع تھے۔ ان کے علاقے جدید دور کے افغانستان اور پاکستان کے کچھ حصوں سے مطابقت رکھتے ہیں، جو انہیں ہندوستان کی موجودہ سیاسی حدود سے باہر رکھتے ہیں۔"
  },
  {
    "id": 808,
    "question": "Shantamula and Virapurushadatta were the important kings of this dynasty (TSTET 28 May 2024)\nشانت مولا اور ویراپروشدت اس خاندان کے اہم بادشاہ تھے",
    "options": [
      "Chola Dynasty\nچولا خاندان",
      "Mauryan Dynasty\nموریا خاندان",
      "Satavahana Dynasty\nساتواہن خاندان",
      "Ikashavaku Dynasty\nاکشواکو خاندان"
    ],
    "correctAnswer": 3,
    "explanation": "واسیستھی پتر چمتامولا (شانت مولا) وجے پوری کے اکشواکو خاندان کے بانی تھے، جنہوں نے ساتواہن کے بعد مشرقی دکن کے علاقے میں حکومت کی۔ ان کا بیٹا، ویراپروشدت، اس خاندان کا ایک اور اہم حکمران تھا جو بدھ مت کی سرپرستی کے لیے جانا جاتا تھا۔"
  },
  {
    "id": 809,
    "question": "On 6th April, 1930 Mahatma Gandhi reached Dandi and picked up a handful salt and broke the salt law as a symbol of (TSTET 28 May 2024)\n6 اپریل 1930 کو مہاتما گاندھی نے ڈانڈی پہنچ کر ایک مٹھی نمک اٹھایا اور نمک قانون کو کس علامت کے طور پر توڑا",
    "options": [
      "the Indian people's refusal to live under the British made laws and therefore under the British rule\nہندوستانی عوام کا برطانوی ساختہ قوانین کے تحت اور اس لیے برطانوی حکمرانی کے تحت رہنے سے انکار",
      "the Indian people's willingness to live under the British made laws and therefore under the British rule\nہندوستانی عوام کا برطانوی ساختہ قوانین کے تحت اور اس لیے برطانوی حکمرانی کے تحت رہنے کی رضامندی",
      "the Indian people's willingness to live under the British made laws with some modifications to self-rule\nہندوستانی عوام کا خود حکمرانی میں کچھ ترامیم کے ساتھ برطانوی ساختہ قوانین کے تحت رہنے کی رضامندی",
      "the Indian people's willingness to live under the British made laws with the participation of the members of the INC in making laws\nہندوستانی عوام کا قوانین بنانے میں آئی این سی کے اراکین کی شرکت کے ساتھ برطانوی ساختہ قوانین کے تحت رہنے کی رضامندی"
    ],
    "correctAnswer": 0,
    "explanation": "ڈانڈی میں نمک بنانے کا عمل جدوجہد آزادی کے دوران سول نافرمانی کی ایک طاقتور علامت تھی۔ یہ برطانوی حکومت کے اختیار اور ان کے غیر منصفانہ قوانین کو براہ راست چیلنج کرنے کی نمائندگی کرتا تھا، جو ہندوستانی عوام کے برطانوی حکمرانی کو قبول کرنے سے انکار کی علامت ہے۔"
  },
  {
    "id": 810,
    "question": "In 1789. the Government of the United States of America adopted a Republican Constitution. Which means (TSTET 28 May 2024)\n1789 میں، ریاستہائے متحدہ امریکہ کی حکومت نے ایک جمہوری آئین اپنایا۔ جس کا مطلب ہے",
    "options": [
      "The United States would not be ruled by the kings but by the representatives elected by the people\nریاستہائے متحدہ پر بادشاہوں کی حکومت نہیں ہوگی بلکہ عوام کے منتخب نمائندوں کی ہوگی",
      "The United States would be ruled by the Kings with limited powers\nریاستہائے متحدہ پر محدود اختیارات والے بادشاہوں کی حکومت ہوگی",
      "The United States would not be ruled by the kings but by the representatives nominated by the states\nریاستہائے متحدہ پر بادشاہوں کی حکومت نہیں ہوگی بلکہ ریاستوں کے نامزد کردہ نمائندوں کی ہوگی",
      "The United States would not be ruled by the kings but by the representatives nominated by Kings\nریاستہائے متحدہ پر بادشاہوں کی حکومت نہیں ہوگی بلکہ بادشاہوں کے نامزد کردہ نمائندوں کی ہوگی"
    ],
    "correctAnswer": 0,
    "explanation": "جمہوری طرز حکومت وہ ہے جہاں ریاست کا سربراہ بادشاہ نہیں ہوتا بلکہ ایک منتخب یا نامزد عہدیدار ہوتا ہے، اور خودمختار طاقت عوام کے پاس ہوتی ہے۔ امریکی آئین نے ایک ایسا نظام قائم کیا جہاں ملک پر حکومت کرنے کے لیے نمائندوں کو شہریوں کے ذریعے منتخب کیا جاتا ہے۔"
  },
  {
    "id": 811,
    "question": "In the 18th Century, the Second Estate of the French Society was 'Nobility', which includes (TSTET 28 May 2024)\n18ویں صدی میں، فرانسیسی معاشرے کا دوسرا طبقہ 'نوبلٹی' تھا، جس میں شامل ہیں",
    "options": [
      "Clergy and Aristocratic Class\nپادری اور اشرافیہ طبقہ",
      "Aristocratic and Bureaucratic Class\nاشرافیہ اور بیوروکریٹک طبقہ",
      "Merchants and Bureaucratic Class\nسوداگر اور بیوروکریٹک طبقہ",
      "Clergy and Bureaucratic Class\nپادری اور بیوروکریٹک طبقہ"
    ],
    "correctAnswer": 1,
    "explanation": "فرانس کے قدیم نظام میں، دوسرا طبقہ امراء پر مشتمل تھا۔ اس میں موروثی اشرافیہ (بشمول شاہی خاندان) اور بیوروکریسی اور فوج کے اعلیٰ عہدے دار شامل تھے جو نوابی خطابات رکھتے تھے۔ پادری پہلے طبقے پر مشتمل تھے، اور باقی سب تیسرے طبقے میں تھے۔"
  },
  {
    "id": 812,
    "question": "During Kakatiya period. Nayankara System was prevalent during the reign of (TSTET 28 May 2024)\nکاکتیہ دور میں، ناینکارا نظام کس کے دور حکومت میں رائج تھا",
    "options": [
      "Ganapati Deva and Rudra Deva\nگنپتی دیو اور رودر دیو",
      "Mahadeva and Ganapati Deva\nمہادیو اور گنپتی دیو",
      "Prolaraja I and Mahadeva\nپرولاراج اول اور مہادیو",
      "Rudramadevi and Prataparudra II\nردرمادیوی اور پرتاپ رودر دوم"
    ],
    "correctAnswer": 3,
    "explanation": "ناینکارا نظام، ایک جاگیردارانہ انتظامی عمل جہاں فوجی سربراہوں (نایکوں) کو فوجی خدمات کے بدلے زمین دی جاتی تھی، پوری طرح سے تیار ہوا اور ردھرما دیوی اور پرتاپ رودر دوم کے بعد کے دور حکومت میں کاکتیہ انتظامیہ کی ایک نمایاں خصوصیت بن گیا۔"
  },
  {
    "id": 813,
    "question": "As per the enactment of this Act, any person who was suspected by the police of being a terrorist could be arrested and kept in prison without any trial (TSTET 28 May 2024)\nاس ایکٹ کے نفاذ کے مطابق، کوئی بھی شخص جس پر پولیس کو دہشت گرد ہونے کا شبہ ہو، اسے بغیر کسی مقدمے کے گرفتار کرکے جیل میں رکھا جا سکتا تھا",
    "options": [
      "The Rowlett Act, 1919\nرولٹ ایکٹ، 1919",
      "The Regulating Act, 1773\nریگولیٹنگ ایکٹ، 1773",
      "The Charter Act, 1793\nچارٹر ایکٹ، 1793",
      "The Minto-Morely Reforms, 1909\nمنٹو مارلے اصلاحات، 1909"
    ],
    "correctAnswer": 0,
    "explanation": "1919 کے انارکیکل اینڈ ریوولیوشنری کرائمز ایکٹ، جسے عام طور پر رولٹ ایکٹ کے نام سے جانا جاتا ہے، نے ہندوستان میں برطانوی حکومت کو سیاسی سرگرمیوں کو دبانے کے لیے بے پناہ اختیارات دیے۔ اس نے سیاسی قیدیوں کو دو سال تک بغیر مقدمہ چلائے حراست میں رکھنے کی اجازت دی، جس کی وجہ سے بڑے پیمانے پر احتجاج ہوا۔"
  },
  {
    "id": 814,
    "question": "In march 1946, the British Cabinet sent a three-member mission to new Delhi to examine the demand of (TSTET 28 May 2024)\nمارچ 1946 میں، برطانوی کابینہ نے کس مطالبے کا جائزہ لینے کے لیے نئی دہلی میں تین رکنی مشن بھیجا",
    "options": [
      "to suggest a suitable economic framework for the economic development of India\nہندوستان کی معاشی ترقی کے لیے ایک مناسب معاشی ڈھانچہ تجویز کرنا",
      "to suggest the demand of Separate Pakistan and to suggest a suitable political framework for a free India\nعلیحدہ پاکستان کے مطالبے کی تجویز دینا اور آزاد ہندوستان کے لیے ایک مناسب سیاسی ڈھانچہ تجویز کرنا",
      "to suggest the demand of separate Bangladesh\nعلیحدہ بنگلہ دیش کے مطالبے کی تجویز دینا",
      "to request the Indian National Congress to provide support for solving the issue of separate Pakistan\nانڈین نیشنل کانگریس سے علیحدہ پاکستان کے مسئلے کو حل کرنے کے لیے تعاون فراہم کرنے کی درخواست کرنا"
    ],
    "correctAnswer": 1,
    "explanation": "1946 کا کابینہ مشن اقتدار کی منتقلی پر بات چیت کے لیے ہندوستان بھیجا گیا تھا۔ اس کے بنیادی مقاصد مسلم لیگ کے علیحدہ پاکستان کے مطالبے کا جائزہ لینا اور آزاد ہندوستان کے لیے ایک آئینی ڈھانچہ تجویز کرنا تھا، اس امید کے ساتھ کہ اسے متحد رکھا جائے گا۔"
  },
  {
    "id": 815,
    "question": "This was considered as the currency of the Hyderabad State (TSTET 28 May 2024)\nاسے ریاست حیدرآباد کی کرنسی سمجھا جاتا تھا",
    "options": [
      "Besant\nبیسنٹ",
      "Sri Ahita Gajakesari\nسری اہتا گجکیسری",
      "Osmania Sikka\nعثمانیہ سکہ",
      "Dinars and Rupaka\nدینار اور روپکا"
    ],
    "correctAnswer": 2,
    "explanation": "عثمانیہ سکہ ریاست حیدرآباد کی سرکاری کرنسی تھی، جو آخری نظام میر عثمان علی خان کے دور میں متعارف کرائی گئی تھی۔ یہ سکے اور نوٹ ریاست کے جدید انتظامی اور مالیاتی نظام کا حصہ تھے۔"
  },
  {
    "id": 816,
    "question": "Britain was the first country to experience modern Industrialisation because of having A) Political Stability and Unified market B) growing towns in area and population C) good network of rivers and an indented coastline with sheltered bays for the movement of goods D) a very good financial system to establish and maintain big industrial enterprises (TSTET 28 May 2024)\nبرطانیہ جدید صنعت کاری کا تجربہ کرنے والا پہلا ملک تھا کیونکہ اس کے پاس A) سیاسی استحکام اور متحدہ منڈی B) رقبے اور آبادی میں بڑھتے ہوئے شہر C) دریاؤں کا اچھا نیٹ ورک اور سامان کی نقل و حرکت کے لیے پناہ گاہوں کے ساتھ دندانے دار ساحلی پٹی D) بڑے صنعتی اداروں کے قیام اور دیکھ بھال کے لیے ایک بہت اچھا مالیاتی نظام تھا",
    "options": [
      "A & C only\nصرف A اور C",
      "B & C only\nصرف B اور C",
      "C & D only\nصرف C اور D",
      "A, B, C & D\nA، B، C اور D"
    ],
    "correctAnswer": 3,
    "explanation": "برطانیہ کی صنعت کاری کے لیے چاروں عوامل اہم تھے۔ سیاسی استحکام، ایک متحدہ قومی منڈی، نقل و حمل کے لیے جغرافیائی فوائد، مزدور فراہم کرنے والی بڑھتی ہوئی شہری آبادی، اور سرمایہ کاری کے لیے ایک جدید مالیاتی نظام، ان سب نے مل کر صنعتی انقلاب کے لیے بہترین حالات پیدا کیے۔"
  },
  {
    "id": 817,
    "question": "Identify the correct statement (TSTET 28 May 2024)\nصحیح بیان کی نشاندہی کریں",
    "options": [
      "The Constitution was adopted by the Constituent Assembly (CA) on 26th November. 1949 and it came into force on 26th January, 1950.\nآئین کو آئین ساز اسمبلی نے 26 نومبر 1949 کو اپنایا اور یہ 26 جنوری 1950 کو نافذ ہوا۔",
      "The Constitution was adopted by the Constituent Assembly (CA) on 26th November, 1949 and it came into force on 26th November, 1950.\nآئین کو آئین ساز اسمبلی نے 26 نومبر 1949 کو اپنایا اور یہ 26 نومبر 1950 کو نافذ ہوا۔",
      "The Constitution was adopted by the Constituent Assembly (CA) on 26th January. 1949 and it came into force on 26th January, 1950.\nآئین کو آئین ساز اسمبلی نے 26 جنوری 1949 کو اپنایا اور یہ 26 جنوری 1950 کو نافذ ہوا۔",
      "The Constitution was adopted by the Constituent Assembly (CA) on 26th January, 1949 and it came into force on 26th November, 1950.\nآئین کو آئین ساز اسمبلی نے 26 جنوری 1949 کو اپنایا اور یہ 26 نومبر 1950 کو نافذ ہوا۔"
    ],
    "correctAnswer": 0,
    "explanation": "ہندوستان کے آئین کو آئین ساز اسمبلی نے 26 نومبر 1949 کو باضابطہ طور پر اپنایا (اب اسے یوم آئین کے طور پر منایا جاتا ہے)۔ یہ 1930 کے پورنا سوراج اعلامیے کی یاد میں 26 جنوری 1950 کو مکمل طور پر نافذ ہوا، اور اس دن کو یوم جمہوریہ کے طور پر منایا جاتا ہے۔"
  },
  {
    "id": 818,
    "question": "The court orders that the arrested person should be presented before it. This writ is (TSTET 28 May 2024)\nعدالت حکم دیتی ہے کہ گرفتار شخص کو اس کے سامنے پیش کیا جائے۔ یہ رٹ ہے",
    "options": [
      "Habeas corpus\nہیبیس کارپس",
      "Mandamus\nمینڈیمس",
      "Prohibition\nپروہیبیشن",
      "Quo Warranto\nکو وارنٹو"
    ],
    "correctAnswer": 0,
    "explanation": "ہیبیس کارپس، ایک لاطینی اصطلاح جس کا مطلب ہے 'جسم کو پیش کرنا'، ایک رٹ ہے جو زیر حراست شخص کو عدالت میں پیش کرنے کا تقاضا کرتی ہے۔ یہ ایک بنیادی حق ہے جو افراد کو غیر قانونی حراست سے بچاتا ہے اور عدالت کو حراست کی قانونی حیثیت کا تعین کرنے کی اجازت دیتا ہے۔"
  },
  {
    "id": 819,
    "question": "Identify the correct statement about the Election Commissioners' tenure (TSTET 28 May 2024)\nالیکشن کمشنرز کی مدت ملازمت کے بارے میں صحیح بیان کی نشاندہی کریں",
    "options": [
      "Election Commissioners are appointed for a six-year term or continue till the age of 65, whichever is earlier.\nالیکشن کمشنرز چھ سال کی مدت کے لیے مقرر کیے جاتے ہیں یا 65 سال کی عمر تک، جو بھی پہلے ہو، خدمات انجام دیتے ہیں۔",
      "Election Commissioners are appointed for a five-year term or continue till the age of 65, whichever is earlier.\nالیکشن کمشنرز پانچ سال کی مدت کے لیے مقرر کیے جاتے ہیں یا 65 سال کی عمر تک، جو بھی پہلے ہو، خدمات انجام دیتے ہیں۔",
      "Election Commissioners are appointed for a six-year term or continue till the age of 62, whichever is earlier.\nالیکشن کمشنرز چھ سال کی مدت کے لیے مقرر کیے جاتے ہیں یا 62 سال کی عمر تک، جو بھی پہلے ہو، خدمات انجام دیتے ہیں۔",
      "Election Commissioners are appointed for a five-year term or continue till the age of 62, whichever is earlier.\nالیکشن کمشنرز پانچ سال کی مدت کے لیے مقرر کیے جاتے ہیں یا 62 سال کی عمر تک، جو بھی پہلے ہو، خدمات انجام دیتے ہیں۔"
    ],
    "correctAnswer": 0,
    "explanation": "بھارت کے چیف الیکشن کمشنر (سی ای سی) اور دیگر الیکشن کمشنرز (ای سیز) چھ سال کی مدت تک یا 65 سال کی عمر تک، جو بھی پہلے ہو، اپنے عہدے پر فائز رہتے ہیں۔ یہ مقررہ مدت الیکشن کمیشن کی آزادی اور خود مختاری کو یقینی بناتی ہے۔"
  },
  {
    "id": 820,
    "question": "The restriction on the number of the members of the Council of Ministers shall not exceed (TSTET 28 May 2024)\nوزراء کی کونسل کے اراکین کی تعداد پر پابندی اس سے زیادہ نہیں ہونی چاہیے",
    "options": [
      "15 percent of the total strength of the Lok Sabha or Assembly\nلوک سبھا یا اسمبلی کی کل تعداد کا 15 فیصد",
      "10 percent of the total strength of the Lok Sabha or Assembly\nلوک سبھا یا اسمبلی کی کل تعداد کا 10 فیصد",
      "12 percent of the total strength of the Lok Sabha or Assembly\nلوک سبھا یا اسمبلی کی کل تعداد کا 12 فیصد",
      "20 percent of the total strength of the Lok Sabha or Assembly\nلوک سبھا یا اسمبلی کی کل تعداد کا 20 فیصد"
    ],
    "correctAnswer": 0,
    "explanation": "91ویں آئینی ترمیمی ایکٹ، 2003 نے آرٹیکل 75(1A) شامل کیا، جو یہ شرط عائد کرتا ہے کہ مرکزی وزراء کی کونسل میں وزراء کی کل تعداد، بشمول وزیر اعظم، لوک سبھا کی کل تعداد کے 15 فیصد سے زیادہ نہیں ہوگی۔"
  },
  {
    "id": 821,
    "question": "Rajya Sabha is dissolved once in (TSTET 28 May 2024)\nراجیہ سبھا کو کتنے سال میں ایک بار تحلیل کیا جاتا ہے",
    "options": [
      "6 years\n6 سال",
      "10 years\n10 سال",
      "5 years\n5 سال",
      "It is never dissolved\nیہ کبھی تحلیل نہیں ہوتی"
    ],
    "correctAnswer": 3,
    "explanation": "راجیہ سبھا، یا کونسل آف اسٹیٹس، ایک مستقل ادارہ ہے اور اسے تحلیل نہیں کیا جا سکتا۔ اس کے ایک تہائی اراکین ہر دوسرے سال ریٹائر ہو جاتے ہیں، اور ان کی جگہ نئے منتخب اراکین لے لیتے ہیں۔ ہر رکن چھ سال کی مدت کے لیے خدمات انجام دیتا ہے۔"
  },
  {
    "id": 822,
    "question": "86th Constitutional amendment Act 2002 is about (TSTET 28 May 2024)\n86 واں آئینی ترمیمی ایکٹ 2002 کس بارے میں ہے",
    "options": [
      "The voting age was decreased from 21 to 18 for both Lok Sabha and Legislative Assemblies elections\nلوک سبھا اور قانون ساز اسمبلیوں دونوں کے انتخابات کے لیے ووٹنگ کی عمر 21 سے کم کر کے 18 سال کر دی گئی",
      "Panchayati Raj Institutions were given constitutional status\nپنچایتی راج اداروں کو آئینی حیثیت دی گئی",
      "The women's reservation bill which reserves one-third of all seats for women in Lok Sabha / State legislative assemblies\nخواتین کا ریزرویشن بل جو لوک سبھا / ریاستی قانون ساز اسمبلیوں میں تمام نشستوں کا ایک تہائی خواتین کے لیے مخصوص کرتا ہے",
      "Elementary Education was made a fundamental right-Free and Compulsory education to children between 6 and 14 years\nابتدائی تعلیم کو بنیادی حق بنایا گیا - 6 سے 14 سال کی عمر کے بچوں کے لیے مفت اور لازمی تعلیم"
    ],
    "correctAnswer": 3,
    "explanation": "86ویں ترمیمی ایکٹ 2002 نے ہندوستان کے آئین میں آرٹیکل 21-A داخل کیا، جس سے ابتدائی تعلیم کو ایک بنیادی حق بنایا گیا۔ یہ ریاست کو پابند کرتا ہے کہ وہ چھ سے چودہ سال کی عمر کے تمام بچوں کو مفت اور لازمی تعلیم فراہم کرے۔"
  },
  {
    "id": 823,
    "question": "The following is NOT in the State List under the constitution of India (TSTET 28 May 2024)\nدرج ذیل میں سے کون سا ہندوستان کے آئین کے تحت ریاستی فہرست میں نہیں ہے",
    "options": [
      "Fisheries\nماہی گیری",
      "Insurance\nانشورنس",
      "Police\nپولیس",
      "Agriculture\nزراعت"
    ],
    "correctAnswer": 1,
    "explanation": "ہندوستانی آئین کا ساتواں شیڈول مضامین کو یونین لسٹ، اسٹیٹ لسٹ اور کنکرنٹ لسٹ میں تقسیم کرتا ہے۔ انشورنس (اندراج 47) یونین لسٹ کے تحت ایک مضمون ہے، جس کا مطلب ہے کہ صرف مرکزی حکومت ہی اس پر قانون سازی کر سکتی ہے۔ پولیس، ماہی گیری اور زراعت ریاستی فہرست کے تحت آتے ہیں۔"
  },
  {
    "id": 824,
    "question": "The following one is elected indirectly (TSTET 28 May 2024)\nدرج ذیل میں سے کون بالواسطہ طور پر منتخب ہوتا ہے",
    "options": [
      "Sarpanch of Grama Panchayath\nگرام پنچایت کا سرپنچ",
      "Councillor of the Municipality\nمیونسپلٹی کا کونسلر",
      "Chairperson of the Zilla Parishad\nضلع پریشد کا چیئرپرسن",
      "Ward Member of Grama Panchayath\nگرام پنچایت کا وارڈ ممبر"
    ],
    "correctAnswer": 2,
    "explanation": "ضلع پریشد کا چیئرپرسن بالواسطہ طور پر منتخب ہوتا ہے۔ ضلع پریشد کے براہ راست منتخب اراکین اپنے میں سے چیئرپرسن کا انتخاب کرتے ہیں۔ سرپنچ، وارڈ ممبران اور میونسپل کونسلرز عام طور پر عوام کے ذریعے براہ راست منتخب ہوتے ہیں۔"
  },
  {
    "id": 825,
    "question": "United Nations Day is celebrated on (TSTET 28 May 2024)\nاقوام متحدہ کا دن کب منایا جاتا ہے",
    "options": [
      "11th December\n11 دسمبر",
      "24th October\n24 اکتوبر",
      "24th November\n24 نومبر",
      "21st September\n21 ستمبر"
    ],
    "correctAnswer": 1,
    "explanation": "اقوام متحدہ کا دن ہر سال 24 اکتوبر کو منایا جاتا ہے۔ یہ دن 1945 میں اقوام متحدہ کے چارٹر کے نافذ ہونے کی سالگرہ کی نشاندہی کرتا ہے، جس نے باضابطہ طور پر اقوام متحدہ کی تنظیم قائم کی۔"
  },
  {
    "id": 826,
    "question": "Panchayati Raj system was first introduced in this state (TSTET 28 May 2024)\nپنچایتی راج نظام سب سے پہلے کس ریاست میں متعارف کرایا گیا تھا",
    "options": [
      "Tamil Nadu\nتمل ناڈو",
      "Kerala\nکیرالہ",
      "Rajasthan\nراجستھان",
      "Uttar Pradesh\nاتر پردیش"
    ],
    "correctAnswer": 2,
    "explanation": "ہندوستان میں جدید پنچایتی راج نظام کا افتتاح سب سے پہلے وزیر اعظم جواہر لعل نہرو نے 2 اکتوبر 1959 کو راجستھان کے ناگور ضلع میں کیا تھا۔ یہ بلونت رائے مہتا کمیٹی کی جمہوری وکندریقرت کی سفارشات پر مبنی تھا۔"
  },
  {
    "id": 827,
    "question": "This government has two or more levels (TSTET 28 May 2024)\nاس حکومت کی دو یا دو سے زیادہ سطحیں ہوتی ہیں",
    "options": [
      "Federal Government\nوفاقی حکومت",
      "Unitary Government\nوحدانی حکومت",
      "Dictatorship Government\nآمرانہ حکومت",
      "Coalition Government\nاتحادی حکومت"
    ],
    "correctAnswer": 0,
    "explanation": "وفاقی حکومت ایک ایسا نظام ہے جہاں اقتدار آئینی طور پر ایک مرکزی قومی حکومت اور جزوی سیاسی اکائیوں (جیسے ریاستیں یا صوبے) کے درمیان تقسیم ہوتا ہے۔ خودمختاری کی یہ تقسیم فطری طور پر حکومت کی دو یا دو سے زیادہ سطحیں پیدا کرتی ہے۔"
  },
  {
    "id": 828,
    "question": "Permanent Secretariate of SAARC is located at (TSTET 28 May 2024)\nسارک کا مستقل سیکرٹریٹ کہاں واقع ہے",
    "options": [
      "New Delhi, India\nنئی دہلی، ہندوستان",
      "Dhaka, Bangladesh\nڈھاکہ، بنگلہ دیش",
      "Kathmandu, Nepal\nکاٹھمنڈو، نیپال",
      "Colombo, Sri Lanka\nکولمبو، سری لنکا"
    ],
    "correctAnswer": 2,
    "explanation": "جنوبی ایشیائی علاقائی تعاون کی تنظیم (سارک) کا مستقل سیکرٹریٹ 16 جنوری 1987 کو نیپال کے شہر کاٹھمنڈو میں قائم کیا گیا تھا۔ یہ تنظیم کے انتظامی مرکز کے طور پر کام کرتا ہے، اس کی سرگرمیوں کو مربوط اور مانیٹر کرتا ہے۔"
  },
  {
    "id": 829,
    "question": "By teaching geography, the teacher can develop these skills among learners. A) Map B) Observational C) Field Study D) Time perspective (TSTET 28 May 2024)\nجغرافیہ پڑھا کر، استاد سیکھنے والوں میں یہ مہارتیں پیدا کر سکتا ہے۔ A) نقشہ B) مشاہداتی C) فیلڈ اسٹڈی D) وقت کا تناظر",
    "options": [
      "A, B & C only\nصرف A، B اور C",
      "A, C & D only\nصرف A، C اور D",
      "B, C & D only\nصرف B، C اور D",
      "A, B, C & D\nA، B، C اور D"
    ],
    "correctAnswer": 3,
    "explanation": "جغرافیہ کی تعلیم ان تمام مہارتوں کو فروغ دیتی ہے۔ نقشہ کی مہارت (A) اس مضمون کا مرکز ہے۔ مشاہداتی (B) اور فیلڈ اسٹڈی (C) کی مہارتیں حقیقی دنیا کے ماحول کو سمجھنے کے لیے بہت اہم ہیں۔ وقت کا تناظر (D) یہ مطالعہ کرنے کے لیے ضروری ہے کہ وقت کے ساتھ ساتھ جسمانی اور انسانی منظرنامے کیسے تیار ہوتے ہیں۔"
  },
  {
    "id": 830,
    "question": "Industries, Radio stations, Airports, Railways are belong to these resources (TSTET 28 May 2024)\nصنعتیں، ریڈیو اسٹیشن، ہوائی اڈے، ریلوے ان وسائل سے تعلق رکھتے ہیں",
    "options": [
      "Natural\nقدرتی",
      "Human made\nانسان کے بنائے ہوئے",
      "Printed\nمطبوعہ",
      "Audiovisual\nسمعی و بصری"
    ],
    "correctAnswer": 1,
    "explanation": "یہ سب انسانوں کے بنائے ہوئے بنیادی ڈھانچے اور ٹیکنالوجی کی مثالیں ہیں۔ یہ فطرت میں نہیں پائے جاتے بلکہ قدرتی وسائل اور انسانی ذہانت کا استعمال کرتے ہوئے بنائے جاتے ہیں۔ لہذا، انہیں انسان کے بنائے ہوئے وسائل کے طور پر درجہ بندی کیا جاتا ہے۔"
  },
  {
    "id": 831,
    "question": "Among the following strategies, which one is more useful to the teacher to explain the concept of 'Child labour and its consequences' - in the classroom (TSTET 28 May 2024)\nدرج ذیل حکمت عملیوں میں سے، کلاس روم میں 'چائلڈ لیبر اور اس کے نتائج' کے تصور کی وضاحت کے لیے استاد کے لیے کون سی حکمت عملی زیادہ مفید ہے",
    "options": [
      "Lecture method\nلیکچر کا طریقہ",
      "Dramatization\nڈرامائی تشکیل",
      "Questioning\nسوال کرنا",
      "Story telling\nکہانی سنانا"
    ],
    "correctAnswer": 1,
    "explanation": "چائلڈ لیبر جیسے حساس موضوعات کے لیے ڈرامائی تشکیل ایک انتہائی موثر حکمت عملی ہے۔ یہ طلباء کو جذباتی طور پر مشغول ہونے، کردار ادا کرکے ہمدردی پیدا کرنے، اور انسانی نقطہ نظر سے نتائج کو سمجھنے کی اجازت دیتا ہے، جو لیکچر جیسے غیر فعال طریقوں سے زیادہ موثر ہے۔"
  },
  {
    "id": 832,
    "question": "This is the most suitable teaching aid to teach 'Rainfall' to the learners. (TSTET 28 May 2024)\nسیکھنے والوں کو 'بارش' پڑھانے کے لیے یہ سب سے موزوں تدریسی امداد ہے۔",
    "options": [
      "Rain Gauge\nبارش پیما",
      "Maps\nنقشے",
      "Globe\nگلوب",
      "Barometer\nبیرومیٹر"
    ],
    "correctAnswer": 0,
    "explanation": "بارش پیما ایک مخصوص آلہ ہے جو بارش کی مقدار کی پیمائش کے لیے استعمال ہوتا ہے۔ اصل آلے یا ماڈل کا استعمال بارش کی پیمائش کی وضاحت کے لیے سب سے براہ راست اور موزوں تدریسی امداد ہے، جو اس تصور کو ٹھوس اور سیکھنے والوں کے لیے قابل فہم بناتا ہے۔"
  },
  {
    "id": 833,
    "question": "The purpose of the 'Diagnostic test' in social studies is (TSTET 28 May 2024)\nسماجی علوم میں 'تشخیصی ٹیسٹ' کا مقصد ہے",
    "options": [
      "to assess the previous knowledge of the students\nطلباء کے سابقہ علم کا جائزہ لینا",
      "to know the intelligence of the student\nطالب علم کی ذہانت کو جاننا",
      "to know the learning difficulties or gaps of the students\nطلباء کی سیکھنے کی مشکلات یا خامیوں کو جاننا",
      "to give grades to the students\nطلباء کو گریڈ دینا"
    ],
    "correctAnswer": 2,
    "explanation": "ایک تشخیصی ٹیسٹ خاص طور پر کسی خاص شعبے میں طالب علم کی طاقتوں اور کمزوریوں کی نشاندہی کرنے کے لیے ڈیزائن کیا گیا ہے۔ اس کا بنیادی مقصد سیکھنے کی مخصوص مشکلات یا سمجھ میں خامیوں کی نشاندہی کرنا ہے تاکہ مناسب اصلاحی ہدایات فراہم کی جا سکیں۔"
  },
  {
    "id": 834,
    "question": "The important source for writing a historical story for a particular period is (TSTET 28 May 2024)\nکسی خاص دور کے لیے تاریخی کہانی لکھنے کا اہم ذریعہ ہے",
    "options": [
      "Archaeological Sources\nآثار قدیمہ کے ذرائع",
      "Literary Sources\nادبی ذرائع",
      "Oral Sources\nزبانی ذرائع",
      "Inscriptions\nکتبے"
    ],
    "correctAnswer": 1,
    "explanation": "جبکہ تمام آپشنز تاریخی ذرائع ہیں، ادبی ذرائع (جیسے تاریخ، سوانح حیات، سفرنامے، اور عصری تحریریں) تاریخی کہانی لکھنے کے لیے ضروری بیانیہ، سیاق و سباق، کردار کی تفصیلات اور واقعات فراہم کرتے ہیں۔ وہ کسی دور کے معاشرے اور نقطہ نظر کے بارے میں بصیرت پیش کرتے ہیں۔"
  },
  {
    "id": 835,
    "question": "These are the appropriate methods for teaching \"Democratic and Nationalist Movements\" (TSTET 28 May 2024)\n\"جمہوری اور قوم پرست تحریکوں\" کو پڑھانے کے لیے یہ مناسب طریقے ہیں",
    "options": [
      "Activity and Project methods\nسرگرمی اور پروجیکٹ کے طریقے",
      "Discussion and Story telling methods\nبحث اور کہانی سنانے کے طریقے",
      "Problem solving and Laboratory methods\nمسئلہ حل کرنے اور لیبارٹری کے طریقے",
      "Source and Project methods\nماخذ اور پروجیکٹ کے طریقے"
    ],
    "correctAnswer": 3,
    "explanation": "ماخذ کے طریقے میں بنیادی اور ثانوی ذرائع (دستاویزات، خطوط، تصاویر) کا تجزیہ شامل ہے، جو تاریخی تحریکوں کو سمجھنے کے لیے ضروری ہے۔ پروجیکٹ کا طریقہ طلباء کو ان تحریکوں پر گہرائی سے تحقیق کرنے کی اجازت دیتا ہے، جس سے تنقیدی سوچ اور اس میں شامل پیچیدگیوں کی گہری سمجھ کو فروغ ملتا ہے۔"
  },
  {
    "id": 836,
    "question": "To motivate students in the classroom learning a teacher should (TSTET 28 May 2024)\nکلاس روم میں سیکھنے کے لیے طلباء کو ترغیب دینے کے لیے ایک استاد کو چاہیے",
    "options": [
      "create a conducive environment\nسازگار ماحول پیدا کرنا",
      "use appropriate TLM\nمناسب تدریسی مواد استعمال کرنا",
      "use various methods\nمختلف طریقے استعمال کرنا",
      "ask questions\nسوالات پوچھنا"
    ],
    "correctAnswer": 0,
    "explanation": "ایک سازگار سیکھنے کا ماحول — جو مثبت، معاون، محفوظ اور مشغول ہو — طلباء کو ترغیب دینے کے لیے بنیادی عنصر ہے۔ جبکہ دیگر آپشنز اس ماحول کے اجزاء ہیں، مجموعی ماحول سیکھنے کی اندرونی ترغیب کو فروغ دینے میں سب سے اہم عنصر ہے۔"
  },
  {
    "id": 837,
    "question": "Social studies teacher should have this knowledge for integrating social values among learners (TSTET 28 May 2024)\nسیکھنے والوں میں سماجی اقدار کو مربوط کرنے کے لیے سماجی علوم کے استاد کو یہ علم ہونا چاہیے",
    "options": [
      "Philosophical knowledge\nفلسفیانہ علم",
      "Psychological knowledge\nنفسیاتی علم",
      "Historical knowledge\nتاریخی علم",
      "Geographical knowledge\nجغرافیائی علم"
    ],
    "correctAnswer": 0,
    "explanation": "انصاف، مساوات، اور آزادی جیسی سماجی اقدار کو مربوط کرنے کے لیے استاد کو ان تصورات کی بنیاد رکھنے والے فلسفیانہ اصولوں کی بنیادی سمجھ ہونی چاہیے۔ فلسفیانہ علم استاد کو بحث و مباحثے کی تشکیل اور طلباء کو ایک مربوط اخلاقی ڈھانچہ تیار کرنے میں رہنمائی کرنے میں مدد کرتا ہے۔"
  },
  {
    "id": 838,
    "question": "The founder of 'Problem Solving Method' is (TSTET 28 May 2024)\n'مسئلہ حل کرنے کے طریقے' کے بانی ہیں",
    "options": [
      "Kilpatrick\nکلپیٹرک",
      "John Dewey\nجان ڈیوی",
      "Bruner\nبرونر",
      "Thorndike\nتھورنڈائک"
    ],
    "correctAnswer": 1,
    "explanation": "تعلیم میں مسئلہ حل کرنے کا طریقہ سب سے زیادہ امریکی فلسفی اور ماہر تعلیم جان ڈیوی سے وابستہ ہے۔ انہوں نے 'کر کے سیکھنے' کے خیال کی حمایت کی اور ایسے تعلیمی تجربات کی وکالت کی جہاں طلباء انکوائری کے ذریعے حقیقی دنیا کے مسائل کو حل کرنے میں فعال طور پر مشغول ہوں۔"
  },
  {
    "id": 839,
    "question": "Which of the following is NOT a quality of a good social studies text book (TSTET 28 May 2024)\nدرج ذیل میں سے کون سی ایک اچھی سماجی علوم کی نصابی کتاب کا معیار نہیں ہے",
    "options": [
      "It is written from examination point of view\nیہ امتحانی نقطہ نظر سے لکھی گئی ہے",
      "It should be helpful in developing creative thinking among students\nیہ طلباء میں تخلیقی سوچ کو فروغ دینے میں مددگار ہونی چاہیے",
      "It should be child centric\nیہ بچوں پر مرکوز ہونی چاہیے",
      "It has appropriate pictures, illustrations and maps\nاس میں مناسب تصاویر، عکاسی اور نقشے ہیں"
    ],
    "correctAnswer": 0,
    "explanation": "ایک اچھی نصابی کتاب کا مقصد حقیقی سمجھ، تنقیدی سوچ اور مضمون سے محبت کو فروغ دینا ہونا چاہیے۔ صرف امتحانی نقطہ نظر سے لکھی گئی کتاب اکثر رٹا لگانے کی حوصلہ افزائی کرتی ہے اور گہری تعلیم کو فروغ دینے میں ناکام رہتی ہے، جو جدید تعلیم کے اہداف کے خلاف ہے۔"
  },
  {
    "id": 840,
    "question": "In social studies curriculum these are the two dimensions of scope are (TSTET 28 May 2024)\nسماجی علوم کے نصاب میں دائرہ کار کی یہ دو جہتیں ہیں",
    "options": [
      "Length, Breadth\nلمبائی، چوڑائی",
      "Horizontal, Vertical\nافقی، عمودی",
      "Easy, Difficult\nآسان، مشکل",
      "Simple, Complex\nسادہ، پیچیدہ"
    ],
    "correctAnswer": 1,
    "explanation": "نصاب کے ڈیزائن میں، دائرہ کار کی دو اہم جہتیں ہوتی ہیں۔ عمودی دائرہ کار گریڈ کی سطحوں پر ایک تصور کی گہرائی اور پیشرفت سے مراد ہے (مثلاً، سادہ سے پیچیدہ تک)۔ افقی دائرہ کار ایک ہی گریڈ کی سطح کے اندر شامل موضوعات کی وسعت سے مراد ہے، جو اکثر مختلف مضامین کو مربوط کرتا ہے۔"
  },
  {
    "id": 841,
    "question": "'Ravi' is travelling from New Delhi to New York, then 'Ravi' (TSTET 28 May 2024)\n'روی' نئی دہلی سے نیویارک کا سفر کر رہا ہے، تو 'روی'",
    "options": [
      "Loses 4 minutes of time as he crosses every longitude\nہر طول البلد کو عبور کرتے وقت 4 منٹ کا وقت کھو دیتا ہے",
      "Gains 4 minutes of time as he crosses every longitude\nہر طول البلد کو عبور کرتے وقت 4 منٹ کا وقت حاصل کرتا ہے",
      "Neither gains nor loses the time as he crosses every longitude\nہر طول البلد کو عبور کرتے وقت نہ تو وقت حاصل کرتا ہے اور نہ ہی کھوتا ہے",
      "Gains 15 minutes of time as he crosses every longitude\nہر طول البلد کو عبور کرتے وقت 15 منٹ کا وقت حاصل کرتا ہے"
    ],
    "correctAnswer": 0,
    "explanation": "مغرب کی طرف سفر کرتے وقت (نئی دہلی سے نیویارک تک)، کوئی زمین کی گردش کے خلاف حرکت کرتا ہے۔ زمین 24 گھنٹوں میں 360 ڈگری گھومتی ہے، جو ہر 4 منٹ میں 1 ڈگری طول البلد کے برابر ہے۔ لہذا، مغرب کی طرف حرکت کرتے ہوئے ہر طول البلد کو عبور کرنے پر، ابتدائی میریڈین کے نسبت وقت مؤثر طریقے سے کھو جاتا ہے۔"
  },
  {
    "id": 842,
    "question": "The lava which pours on the surface of the earth and forms these rocks (TSTET 28 May 2024)\nوہ لاوا جو زمین کی سطح پر بہتا ہے اور ان چٹانوں کو بناتا ہے",
    "options": [
      "Intrusive rocks\nانٹروزیو چٹانیں",
      "Extrusive rocks\nایکسٹروزیو چٹانیں",
      "Sedimentary rocks\nتلچھٹ کی چٹانیں",
      "Metamorphic rocks\nمیٹامورفک چٹانیں"
    ],
    "correctAnswer": 1,
    "explanation": "ایکسٹروزیو آتشی چٹانیں میگما (لاوا) سے بنتی ہیں جو زمین کی سطح پر پھٹتا ہے اور تیزی سے ٹھنڈا ہوتا ہے۔ اس تیزی سے ٹھنڈک کے عمل کے نتیجے میں باریک دانے دار چٹانیں جیسے بیسالٹ بنتی ہیں۔ اس کے برعکس، انٹروزیو چٹانیں سطح کے نیچے آہستہ آہستہ ٹھنڈی ہوتی ہیں۔"
  },
  {
    "id": 843,
    "question": "This ocean or sea is sometimes considered as an extension of the Pacific Ocean the Atlantic Ocean and the Indian Ocean (TSTET 28 May 2024)\nاس سمندر یا بحر کو کبھی کبھی بحرالکاہل، بحر اوقیانوس اور بحر ہند کی توسیع سمجھا جاتا ہے",
    "options": [
      "Arctic Ocean\nبحر منجمد شمالی",
      "Antarctic Ocean\nبحر منجمد جنوبی",
      "Mediterranean Sea\nبحیرہ روم",
      "Arabian Sea\nبحیرہ عرب"
    ],
    "correctAnswer": 1,
    "explanation": "بحر منجمد جنوبی، جسے جنوبی بحر بھی کہا جاتا ہے، انٹارکٹیکا کو گھیرے ہوئے ہے۔ یہ وہ مقام ہے جہاں انٹارکٹیکا سے شمال کی طرف بہنے والے ٹھنڈے پانی تین بڑے سمندروں — بحرالکاہل، بحر اوقیانوس، اور بحر ہند — کے گرم پانیوں سے ملتے ہیں اور اس طرح اکثر انہیں ان کی توسیع سمجھا جاتا ہے۔"
  },
  {
    "id": 844,
    "question": "From among the following, this layer of the atmosphere contains about 75% of the total gaseous mass of atmosphere and practically all the moisture and dust particles (TSTET 28 May 2024)\nدرج ذیل میں سے، فضا کی یہ تہہ فضا کے کل گیسی ماس کا تقریباً 75% اور عملی طور پر تمام نمی اور دھول کے ذرات پر مشتمل ہے",
    "options": [
      "Troposphere\nٹروپوسفیئر",
      "Stratosphere\nاسٹریٹوسفیئر",
      "Mesosphere\nمیسوسفیئر",
      "Thermosphere\nتھرموسفیئر"
    ],
    "correctAnswer": 0,
    "explanation": "ٹروپوسفیئر زمین کی فضا کی سب سے نچلی تہہ ہے۔ اس میں فضا کے کل ماس کا تقریباً 75% اور تقریباً تمام آبی بخارات اور ایروسول (دھول کے ذرات) موجود ہیں۔ یہ وہ تہہ ہے جہاں زیادہ تر موسمی مظاہر رونما ہوتے ہیں۔"
  },
  {
    "id": 845,
    "question": "From among the following, these are NOT formed by the work of water (TSTET 28 May 2024)\nدرج ذیل میں سے، یہ پانی کے کام سے نہیں بنتے ہیں",
    "options": [
      "V Shaped Valleys\nV شکل کی وادیاں",
      "Ox-bow lakes\nآکس بو جھیلیں",
      "Gorges\nگھاٹیاں",
      "U Shaped Valleys\nU شکل کی وادیاں"
    ],
    "correctAnswer": 3,
    "explanation": "U شکل کی وادیاں گلیشیائی کٹاؤ سے بننے والی خصوصیت والی زمینی شکلیں ہیں۔ جیسے ہی بڑے گلیشیئر حرکت کرتے ہیں، وہ زمین کی تزئین کو تراشتے ہیں، موجودہ وادیوں کو چوڑا اور گہرا کرکے ایک مخصوص 'U' شکل میں ڈھال دیتے ہیں۔ V شکل کی وادیاں، گھاٹیاں اور آکس بو جھیلیں سب دریاؤں (پانی) کے عمل سے بنتی ہیں۔"
  },
  {
    "id": 846,
    "question": "Between the latitudes $10^{0}$ and $30^{0}$ N and S of the equator, the rainfall is heavier on the eastern coasts and decreases towards the west due to (TSTET 28 May 2024)\nخط استوا کے $10^{0}$ اور $30^{0}$ شمال اور جنوب کے عرض البلد کے درمیان، مشرقی ساحلوں پر بارش زیادہ ہوتی ہے اور مغرب کی طرف کم ہوتی ہے جس کی وجہ ہے",
    "options": [
      "The Westerlies\nمغربی ہوائیں",
      "Trade winds\nتجارتی ہوائیں",
      "Monsoon winds\nمون سون کی ہوائیں",
      "The Polar High Pressure Winds\nقطبی زیادہ دباؤ والی ہوائیں"
    ],
    "correctAnswer": 1,
    "explanation": "ان عرض البلدوں میں، مروجہ تجارتی ہوائیں مشرق سے مغرب کی طرف چلتی ہیں۔ وہ سمندر کے اوپر سے نمی اٹھاتی ہیں اور اسے براعظموں کے مشرقی ساحلوں پر بارش کی صورت میں چھوڑ دیتی ہیں۔ جیسے ہی یہ ہوائیں زمین پر مغرب کی طرف سفر کرتی ہیں، وہ نمی کھو دیتی ہیں، جس کی وجہ سے مغربی حصوں میں کم بارش ہوتی ہے۔"
  },
  {
    "id": 847,
    "question": "In this type of farming, agriculture is practised on small patches of land with the help of primitive tools like hoe, dao, and digging sticks through family/ community labour (TSTET 28 May 2024)\nاس قسم کی کاشتکاری میں، زراعت زمین کے چھوٹے ٹکڑوں پر کدال، داؤ، اور کھدائی کی چھڑیوں جیسے قدیم اوزاروں کی مدد سے خاندانی/کمیونٹی لیبر کے ذریعے کی جاتی ہے",
    "options": [
      "Simple Subsistence farming\nسادہ گزارہ کاشتکاری",
      "Commercial farming\nتجارتی کاشتکاری",
      "Intensive Subsistence farming\nگھنی گزارہ کاشتکاری",
      "Mixed farming\nمخلوط کاشتکاری"
    ],
    "correctAnswer": 0,
    "explanation": "سادہ گزارہ کاشتکاری، جسے اکثر شفٹنگ کلٹیویشن کہا جاتا ہے، میں زمین کے چھوٹے پلاٹوں کو صاف کرنا اور کاشت کے لیے بنیادی اوزاروں کا استعمال شامل ہے۔ پیداوار بنیادی طور پر کسان کے خاندان یا کمیونٹی کے ذریعے استعمال کی جاتی ہے، جس میں فروخت کے لیے بہت کم یا کوئی فاضل نہیں ہوتا۔"
  },
  {
    "id": 848,
    "question": "A Very bulky, dark reddish coloured rock used as a raw-material in Aluminium smelters is (TSTET 28 May 2024)\nایک بہت بھاری، گہرے سرخی مائل رنگ کی چٹان جو ایلومینیم سمیلٹرز میں خام مال کے طور پر استعمال ہوتی ہے",
    "options": [
      "Iron ore\nلوہے کی کچ دھات",
      "Bauxite\nباکسائٹ",
      "Coal\nکوئلہ",
      "Lime Stone\nچونے کا پتھر"
    ],
    "correctAnswer": 1,
    "explanation": "باکسائٹ وہ بنیادی کچ دھات ہے جس سے ایلومینیم نکالا جاتا ہے۔ یہ ایک تلچھٹ کی چٹان ہے جس میں ایلومینیم آکسائڈ کی مقدار زیادہ ہوتی ہے اور عام طور پر اس کا رنگ سرخی مائل بھورا ہوتا ہے۔ یہ ایلومینیم سمیلٹرز کے لیے ضروری خام مال ہے۔"
  },
  {
    "id": 849,
    "question": "The famous Kashmir Valley is running over a distance of about 135 km in (TSTET 28 May 2024)\nمشہور وادی کشمیر تقریباً 135 کلومیٹر کے فاصلے پر کس سمت میں پھیلی ہوئی ہے",
    "options": [
      "North East to South East\nشمال مشرق سے جنوب مشرق",
      "North-West to North-East\nشمال مغرب سے شمال مشرق",
      "South-West to North-West\nجنوب مغرب سے شمال مغرب",
      "South-East to North-West\nجنوب مشرق سے شمال مغرب"
    ],
    "correctAnswer": 3,
    "explanation": "وادی کشمیر ایک بیضوی شکل کی وادی ہے جو پیر پنجال رینج اور عظیم ہمالیائی رینج کے درمیان واقع ہے۔ اس کی جغرافیائی سمت جنوب مشرق سے شمال مغرب تک طولانی طور پر چلتی ہے۔"
  },
  {
    "id": 850,
    "question": "These mountains act as barriers protecting the Great Plains of India from the cold winds of Central Asia during severe winter (TSTET 28 May 2024)\nیہ پہاڑ شدید سردیوں کے دوران ہندوستان کے عظیم میدانوں کو وسطی ایشیا کی سرد ہواؤں سے بچانے کے لیے رکاوٹوں کا کام کرتے ہیں",
    "options": [
      "The Aravali Mountains\nاراوَلی پہاڑ",
      "The Purvanchal Hills\nپوروانچل پہاڑیاں",
      "The Himalayan Mountains\nہمالیائی پہاڑ",
      "The Western Ghats\nمغربی گھاٹ"
    ],
    "correctAnswer": 2,
    "explanation": "ہمالیہ کا وسیع سلسلہ ایک موسمی تقسیم کا کام کرتا ہے۔ یہ سردیوں کے دوران وسطی ایشیا سے آنے والی سرد، خشک ہواؤں کا راستہ روکتا ہے، اس طرح برصغیر کو شدید سردی سے بچاتا ہے اور عظیم میدانوں میں نسبتاً گرم آب و ہوا کو برقرار رکھتا ہے۔"
  },
  {
    "id": 851,
    "question": "From among the following, this DOES NOT lead to population change (TSTET 28 May 2024)\nدرج ذیل میں سے، یہ آبادی میں تبدیلی کا باعث نہیں بنتا (TSTET 28 مئی 2024)",
    "options": [
      "Birth Rate\nشرح پیدائش",
      "Death Rate\nشرح اموات",
      "Internal migration\nاندرونی ہجرت",
      "External or International migration\nبیرونی یا بین الاقوامی ہجرت"
    ],
    "correctAnswer": 2,
    "explanation": "کسی ملک کی کل آبادی تین عوامل کی وجہ سے تبدیل ہوتی ہے: شرح پیدائش، شرح اموات، اور بین الاقوامی ہجرت (امیگریشن اور ایمیگریشن)۔ اندرونی ہجرت ملک کی سرحدوں کے اندر لوگوں کی نقل و حرکت ہے؛ یہ آبادی کی تقسیم کو تبدیل کرتی ہے لیکن ملک کی کل آبادی کی گنتی کو تبدیل نہیں کرتی۔"
  },
  {
    "id": 852,
    "question": "From among the following, the rivers originated in the western Ghats are (TSTET 28 May 2024)\nدرج ذیل میں سے، مغربی گھاٹوں سے نکلنے والے دریا ہیں (TSTET 28 مئی 2024)",
    "options": [
      "Narmada, Krishna and Godavari\nنرمدا، کرشنا اور گوداوری",
      "Krishna. Godavari and Thungabhadra\nکرشنا، گوداوری اور تنگابھدرا",
      "Tapti, Narmada and Godavari\nتاپتی، نرمدا اور گوداوری",
      "Tapti. Narmada and Thungabhadra\nتاپتی، نرمدا اور تنگابھدرا"
    ],
    "correctAnswer": 1,
    "explanation": "گوداوری، کرشنا، اور کاویری جیسے بڑے جزیرہ نما دریا، نیز تنگابھدرا (کرشنا کا ایک بڑا معاون دریا) کا ماخذ مغربی گھاٹ ہے۔ نرمدا اور تاپتی دریا وسطی ہندوستان سے نکلتے ہیں۔"
  },
  {
    "id": 853,
    "question": "These soils are generally rich in potash but poor in phosphorous (TSTET 28 May 2024)\nیہ مٹی عام طور پر پوٹاش سے بھرپور ہوتی ہے لیکن فاسفورس میں کمزور ہوتی ہے (TSTET 28 مئی 2024)",
    "options": [
      "Red Soils\nسرخ مٹی",
      "Black Soils\nکالی مٹی",
      "Alluvial Soils\nجلوری مٹی",
      "Laterite Soils\nلیٹرائٹ مٹی"
    ],
    "correctAnswer": 2,
    "explanation": "جلوری مٹی، جو ہندوستان کے دریاؤں کے میدانوں میں بڑے پیمانے پر پائی جاتی ہے، بہت زرخیز ہوتی ہے۔ ان میں پوٹاش اور چونے کا مناسب تناسب ہوتا ہے لیکن اکثر فاسفورس اور نائٹروجن کی کمی ہوتی ہے۔"
  },
  {
    "id": 854,
    "question": "The angle of incidence (TSTET 28 May 2024)\nزاویہ وقوع (TSTET 28 مئی 2024)",
    "options": [
      "increases in the north during the months of November and December and decreases in the months of May and June\nنومبر اور دسمبر کے مہینوں میں شمال میں بڑھتا ہے اور مئی اور جون کے مہینوں میں کم ہوتا ہے",
      "Decreases in the north during the months of November and December and increases in the months of May and June\nنومبر اور دسمبر کے مہینوں میں شمال میں کم ہوتا ہے اور مئی اور جون کے مہینوں میں بڑھتا ہے",
      "Neither increase nor decrease with the change of months, it remains constant\nمہینوں کی تبدیلی کے ساتھ نہ تو بڑھتا ہے اور نہ ہی کم ہوتا ہے، یہ مستقل رہتا ہے",
      "increases in the north during the months of November and December and also increases in the months of May and June\nنومبر اور دسمبر کے مہینوں میں شمال میں بڑھتا ہے اور مئی اور جون کے مہینوں میں بھی بڑھتا ہے"
    ],
    "correctAnswer": 1,
    "explanation": "زاویہ وقوع وہ زاویہ ہے جس پر سورج کی روشنی زمین سے ٹکراتی ہے۔ شمالی نصف کرہ میں، یہ زاویہ سردیوں (نومبر-دسمبر) کے دوران کم ہوجاتا ہے کیونکہ سورج آسمان میں نیچے ہوتا ہے، اور گرمیوں (مئی-جون) کے دوران بڑھ جاتا ہے جب سورج زیادہ براہ راست سر پر ہوتا ہے۔"
  },
  {
    "id": 855,
    "question": "The river Godavari finally meets the Bay of Bengal at (TSTET 28 May 2024)\nدریائے گوداوری آخر کار خلیج بنگال میں کہاں ملتا ہے (TSTET 28 مئی 2024)",
    "options": [
      "Antarvedhi in East Godavari District\nمشرقی گوداوری ضلع میں انترویدی",
      "Hamsaladeevi in Krishna District\nکرشنا ضلع میں ہنسلادیوی",
      "Poompuhar in Mayiladutturai District\nمایلادوتورائی ضلع میں پومپوہار",
      "Kandukurthi in Nizamabad District\nنظام آباد ضلع میں کنداکرتی"
    ],
    "correctAnswer": 0,
    "explanation": "دریائے گوداوری خلیج بنگال میں گرنے سے پہلے ایک بڑا ڈیلٹا بناتا ہے۔ اس کی ایک اہم شاخ، وششٹھ گوداوری، آندھرا پردیش کے مشرقی گوداوری ضلع میں انترویدی کے مقام پر سمندر سے ملتی ہے۔"
  },
  {
    "id": 856,
    "question": "At present, the Indian law governing migration and employment of Indians abroad (TSTET 28 May 2024)\nموجودہ وقت میں، بیرون ملک ہندوستانیوں کی ہجرت اور روزگار کو کنٹرول کرنے والا ہندوستانی قانون ہے (TSTET 28 مئی 2024)",
    "options": [
      "The Emigration Act, 1983\nامیگریشن ایکٹ، 1983",
      "The Emigration Act, 1859\nامیگریشن ایکٹ، 1859",
      "The Enabling Act, 1933\nانیبلنگ ایکٹ، 1933",
      "The Emigration Act, 1971\nامیگریشن ایکٹ، 1971"
    ],
    "correctAnswer": 0,
    "explanation": "امیگریشن ایکٹ، 1983 موجودہ ہندوستانی قانون ہے جو بیرون ملک روزگار کے لیے ہندوستانی شہریوں کی ہجرت کو کنٹرول کرتا ہے۔ اس کا مقصد اس عمل کو منظم کرنا اور بیرون ملک ہندوستانی کارکنوں کی فلاح و بہبود کا تحفظ کرنا ہے۔"
  },
  {
    "id": 857,
    "question": "In India, the first jute mill was established near to this city (TSTET 28 May 2024)\nہندوستان میں، پہلی جوٹ مل اس شہر کے قریب قائم کی گئی تھی (TSTET 28 مئی 2024)",
    "options": [
      "Kolkata\nکولکتہ",
      "Mumbai\nممبئی",
      "Lucknow\nلکھنؤ",
      "Surat\nسورت"
    ],
    "correctAnswer": 0,
    "explanation": "ہندوستان میں پہلی جوٹ مل 1855 میں دریائے ہوگلی کے کنارے واقع ریشڑا میں قائم کی گئی تھی، جو کولکتہ (سابقہ کلکتہ) کے بہت قریب ہے۔ یہ علاقہ خام مال کے ذرائع اور بندرگاہ سے قربت کی وجہ سے مثالی تھا۔"
  },
  {
    "id": 858,
    "question": "This tax is levied at every stage of the production (TSTET 28 May 2024)\nیہ ٹیکس پیداوار کے ہر مرحلے پر لگایا جاتا ہے (TSTET 28 مئی 2024)",
    "options": [
      "Property Tax\nپراپرٹی ٹیکس",
      "Sales tax\nسیلز ٹیکس",
      "Customs duty\nکسٹم ڈیوٹی",
      "Value added tax\nویلیو ایڈڈ ٹیکس"
    ],
    "correctAnswer": 3,
    "explanation": "ویلیو ایڈڈ ٹیکس (VAT) ایک کثیر مرحلہ ٹیکس ہے جو اشیاء اور خدمات کی پیداوار اور تقسیم کے ہر مرحلے پر شامل کی گئی قیمت پر لگایا جاتا ہے۔ حتمی ٹیکس صارف برداشت کرتا ہے۔ (نوٹ: ہندوستان میں، VAT کو بڑی حد تک گڈز اینڈ سروسز ٹیکس، GST میں ضم کر دیا گیا ہے، جو اسی طرح کے اصول پر عمل کرتا ہے)۔"
  },
  {
    "id": 859,
    "question": "Organised and unorganised employment is related to (TSTET 28 May 2024)\nمنظم اور غیر منظم روزگار کا تعلق ہے (TSTET 28 مئی 2024)",
    "options": [
      "Type of ownership\nملکیت کی قسم",
      "Size of investment in industry\nصنعت میں سرمایہ کاری کا حجم",
      "Working condition of employees\nملازمین کے کام کے حالات",
      "Type of industrial product\nصنعتی مصنوعات کی قسم"
    ],
    "correctAnswer": 2,
    "explanation": "منظم اور غیر منظم شعبوں کے درمیان بنیادی فرق ملازمین کو دستیاب کام کے حالات اور سماجی تحفظ کے فوائد میں ہے۔ منظم شعبہ ملازمت کی حفاظت، مقررہ کام کے اوقات، اور پراویڈنٹ فنڈ اور بامعاوضہ چھٹی جیسے فوائد فراہم کرتا ہے، جبکہ غیر منظم شعبہ عام طور پر ایسا نہیں کرتا۔"
  },
  {
    "id": 860,
    "question": "Formula to find Body Mass Index is: (TSTET 28 May 2024)\nباڈی ماس انڈیکس معلوم کرنے کا فارمولا ہے: (TSTET 28 مئی 2024)",
    "options": [
      "Weight in $Kgs/height\\times height(in~metres)$",
      "Weight x Weight (in Kgs)/ height x height (in metres)",
      "Weight in Kgs / height (in metres)",
      "height (in metres) / Weight in Kgs"
    ],
    "correctAnswer": 0,
    "explanation": "باڈی ماس انڈیکس (BMI) کا حساب کسی شخص کے وزن (کلوگرام میں) کو اس کی اونچائی (میٹر میں) کے مربع سے تقسیم کرکے کیا جاتا ہے۔ فارمولا یہ ہے: $BMI = \\text{وزن (کلوگرام)} / [\\text{اونچائی (میٹر)}]^2$۔"
  },
  {
    "id": 861,
    "question": "Which of the following are affected by the Globalisation? A) Nationality B) Culture C) Language D) Elections (TSTET 28 May 2024)\nدرج ذیل میں سے کون گلوبلائزیشن سے متاثر ہوتا ہے؟ A) قومیت B) ثقافت C) زبان D) انتخابات (TSTET 28 مئی 2024)",
    "options": [
      "A & D only\nصرف A اور D",
      "B. C & D only\nصرف B، C اور D",
      "A. B & C only\nصرف A، B اور C",
      "A, B, C & D\nA، B، C اور D"
    ],
    "correctAnswer": 2,
    "explanation": "گلوبلائزیشن باہمی ربط کو فروغ دیتی ہے، جو ثقافت (میڈیا اور تبادلے کے ذریعے)، زبان (عالمی زبانوں کے پھیلاؤ)، اور قومیت کے تصورات (ہجرت اور عالمی شہریت کی وجہ سے) پر گہرا اثر ڈالتی ہے۔ گھریلو انتخابات کا انعقاد ایک خودمختار سیاسی عمل ہے اور یہ براہ راست گلوبلائزیشن سے متاثر نہیں ہوتا۔"
  },
  {
    "id": 862,
    "question": "One among the following is NOT a measure to provide food security in India (TSTET 28 May 2024)\nدرج ذیل میں سے ایک ہندوستان میں غذائی تحفظ فراہم کرنے کا اقدام نہیں ہے (TSTET 28 مئی 2024)",
    "options": [
      "MNREGA\nمنریگا (MNREGA)",
      "PDS\nپی ڈی ایس (PDS)",
      "ICDS\nآئی سی ڈی ایس (ICDS)",
      "MDM\nایم ڈی ایم (MDM)"
    ],
    "correctAnswer": 0,
    "explanation": "پبلک ڈسٹری بیوشن سسٹم (PDS)، انٹیگریٹڈ چائلڈ ڈیولپمنٹ سروسز (ICDS)، اور مڈ ڈے میل (MDM) اسکیم براہ راست مداخلتیں ہیں جو خوراک یا سبسڈی والا راشن فراہم کرتی ہیں۔ منریگا (مہاتما گاندھی نیشنل رورل ایمپلائمنٹ گارنٹی ایکٹ) ایک روزگار اسکیم ہے جو قوت خرید میں اضافہ کرکے بالواسطہ طور پر غذائی تحفظ کو بڑھاتی ہے، لیکن یہ براہ راست خوراک کی فراہمی کا پروگرام نہیں ہے۔"
  },
  {
    "id": 863,
    "question": "The environmental ability to observe and render harmless waste and pollution is called as (TSTET 28 May 2024)\nفضلہ اور آلودگی کو جذب کرنے اور بے ضرر بنانے کی ماحولیاتی صلاحیت کو کہا جاتا ہے (TSTET 28 مئی 2024)",
    "options": [
      "Sink function\nسنک فنکشن",
      "Environmental balance\nماحولیاتی توازن",
      "Biodiversity\nحیاتیاتی تنوع",
      "Sustainable development\nپائیدار ترقی"
    ],
    "correctAnswer": 0,
    "explanation": "ماحولیاتی سائنس میں، 'سنک فنکشن' سے مراد قدرتی ماحول کی وہ صلاحیت ہے جس کے ذریعے وہ انسانی سرگرمیوں سے پیدا ہونے والے فضلہ اور آلودگی کو جذب، تحلیل اور بے ضرر بناتا ہے۔ جب یہ صلاحیت حد سے بڑھ جاتی ہے، تو ماحولیاتی انحطاط ہوتا ہے۔"
  },
  {
    "id": 864,
    "question": "As per 2017-18 in India, the major share of employment is in the following sector (TSTET 28 May 2024)\n2017-18 کے مطابق ہندوستان میں، روزگار کا سب سے بڑا حصہ درج ذیل شعبے میں ہے (TSTET 28 مئی 2024)",
    "options": [
      "Foreign sector\nغیر ملکی شعبہ",
      "Tertiary sector\nثالثی شعبہ",
      "Industrial sector\nصنعتی شعبہ",
      "Agricultural sector\nزرعی شعبہ"
    ],
    "correctAnswer": 3,
    "explanation": "جی ڈی پی میں اس کی گرتی ہوئی شراکت کے باوجود، زرعی شعبہ ہندوستان میں مسلسل سب سے بڑا آجر رہا ہے۔ 2017-18 کی مدت میں، اس نے آبادی کے سب سے بڑے حصے کو روزگار فراہم کرنا جاری رکھا۔"
  },
  {
    "id": 865,
    "question": "One among the following was NOT included in Kautilya's Arthasatra (TSTET 28 May 2024)\nدرج ذیل میں سے ایک کوٹلیہ کے ارتھ شاستر میں شامل نہیں تھا (TSTET 28 مئی 2024)",
    "options": [
      "How to conquer and rule kingdoms?\nبادشاہتوں کو کیسے فتح کیا جائے اور ان پر حکومت کی جائے؟",
      "How to protect themselves from conspiracies?\nسازشوں سے خود کو کیسے بچایا جائے؟",
      "How to tax different kinds of professions and gives information about various resources available in different parts of Indian subcontinent?\nمختلف قسم کے پیشوں پر ٹیکس کیسے لگایا جائے اور برصغیر پاک و ہند کے مختلف حصوں میں دستیاب مختلف وسائل کے بارے میں معلومات دیتا ہے؟",
      "How to give information regarding the inscriptions of Chandra Gupta Maurya?\nچندر گپت موریہ کے کتبات کے بارے میں معلومات کیسے دی جائے؟"
    ],
    "correctAnswer": 3,
    "explanation": "ارتھ شاستر ریاستی امور، معاشیات اور فوجی حکمت عملی پر ایک قدیم مقالہ ہے جو کوٹلیہ (چانکیہ) سے منسوب ہے۔ اس میں حکمرانی، ٹیکس اور انتظامیہ کی تفصیلات شامل ہیں۔ تاہم، اس میں چندر گپت موریہ کے کتبات کے بارے میں معلومات شامل نہیں ہیں، جو اس کے دور حکومت میں بنائے گئے تاریخی نمونے ہیں، نہ کہ حکمرانی پر اس نسخہ جاتی متن کا حصہ۔"
  },
  {
    "id": 866,
    "question": "Shankaracharya was an advocate of (TSTET 28 May 2024)\nشنکراچاریہ اس کے حامی تھے (TSTET 28 مئی 2024)",
    "options": [
      "The best means of attaining salvation was through intense devotion to Vishnu\nنجات حاصل کرنے کا بہترین ذریعہ وشنو سے شدید عقیدت تھی",
      "The doctrine of the oneness of the individual soul and the supreme God which is the ultimate reality\nانفرادی روح اور خدائے برتر کے ایک ہونے کا نظریہ جو حتمی حقیقت ہے",
      "The equality of all human beings and against Brahmanical ideas about caste\nتمام انسانوں کی مساوات اور ذات پات کے بارے میں برہمنی نظریات کے خلاف",
      "Understanding the pain of others\nدوسروں کے درد کو سمجھنا"
    ],
    "correctAnswer": 1,
    "explanation": "آدی شنکراچاریہ ادویت ویدانت فلسفہ کے مکتبہ فکر کے سب سے بڑے حامی تھے۔ اس کا مرکزی اصول غیر ثنویت (ادویت) ہے، جس کا ماننا ہے کہ انفرادی روح (آتمن) حتمی، اعلیٰ حقیقت (برہمن) کے مترادف ہے۔"
  },
  {
    "id": 867,
    "question": "During the times of Mahajanapadas, Agriculture was managed by landowners called (TSTET 28 May 2024)\nمہاجن پدوں کے زمانے میں، زراعت کا انتظام زمینداروں کے ذریعے کیا جاتا تھا جنہیں کہا جاتا تھا (TSTET 28 مئی 2024)",
    "options": [
      "Patlas\nپٹلاس",
      "Grihapathis\nگرہاپتی",
      "Bhrutakas\nبھرتکاس",
      "Dasas\nداس"
    ],
    "correctAnswer": 1,
    "explanation": "مہاجن پد کے دور میں، دولت مند زمیندار اور زرعی گھرانوں کے سربراہ جو بڑے کھیتوں کا انتظام کرتے تھے، 'گرہاپتی' (یا گہاپتی) کے نام سے جانے جاتے تھے۔ وہ دیہی معیشت میں ایک اہم طبقہ تھے، جو اکثر مزدوروں (داس اور کاماکار) کو ملازمت دیتے تھے۔"
  },
  {
    "id": 868,
    "question": "Megalith literally means (TSTET 28 May 2024)\nمیگالتھ کا لفظی مطلب ہے (TSTET 28 مئی 2024)",
    "options": [
      "A big structure made of Iron\nلوہے سے بنا ایک بڑا ڈھانچہ",
      "A big stone\nایک بڑا پتھر",
      "A burial site made of iron\nلوہے سے بنی ایک تدفین کی جگہ",
      "A tool made up of a big stone and mineral\nایک بڑے پتھر اور معدنیات سے بنا ایک آلہ"
    ],
    "correctAnswer": 1,
    "explanation": "لفظ 'میگالتھ' دو یونانی الفاظ سے ماخوذ ہے: 'میگاس' جس کا مطلب ہے بڑا یا عظیم، اور 'لیتھوس' جس کا مطلب ہے پتھر۔ میگالتھ بڑے پتھروں سے تعمیر کردہ قبل از تاریخ کے ڈھانچے یا یادگاریں ہیں، جو عام طور پر تدفین کی جگہوں یا یادگاری نشانوں کے طور پر استعمال ہوتی ہیں۔"
  },
  {
    "id": 869,
    "question": "In Andhra Pradesh, a highlight of the non- cooperation movement was (TSTET 28 May 2024)\nآندھرا پردیش میں، عدم تعاون کی تحریک کی ایک خاص بات تھی (TSTET 28 مئی 2024)",
    "options": [
      "Chirala Perala Movement\nچیرالا پیرالا تحریک",
      "Forest Satyagraha in Palnati Taluqua in Guntur District\nگنٹور ضلع کے پالناڈو تعلقہ میں جنگل ستیہ گرہ",
      "Movement by the Peasants of Pratapgarh in the United Province\nمتحدہ صوبے میں پرتاپ گڑھ کے کسانوں کی تحریک",
      "Quit India Satyagraha, Hyderabad\nہندوستان چھوڑو ستیہ گرہ، حیدرآباد"
    ],
    "correctAnswer": 1,
    "explanation": "ملک گیر عدم تعاون کی تحریک کے حصے کے طور پر، گنٹور ضلع کے پالناڈو علاقے میں جنگل ستیہ گرہ آندھرا پردیش میں ایک بڑا واقعہ تھا۔ مقامی کسانوں نے فیس ادا کیے بغیر اپنے مویشیوں کو مخصوص جنگلات میں چرا کر نوآبادیاتی جنگل کے پابندی والے قوانین کی خلاف ورزی کی، جس سے برطانوی اتھارٹی کو براہ راست چیلنج کیا گیا۔"
  },
  {
    "id": 870,
    "question": "The Declaration of American Independence declared that all men are created equal and are endowed by the creator with certain rights which cannot be taken away. These rights include (TSTET 28 May 2024)\nامریکی آزادی کے اعلان نامے میں یہ اعلان کیا گیا کہ تمام انسان برابر پیدا ہوئے ہیں اور خالق نے انہیں کچھ ایسے حقوق سے نوازا ہے جو چھینے نہیں جا سکتے۔ ان حقوق میں شامل ہیں (TSTET 28 مئی 2024)",
    "options": [
      "The Right to Life, Right to Equality and Right to Freedom of Speech\nزندگی کا حق، مساوات کا حق اور اظہار رائے کی آزادی کا حق",
      "The Right to Life, Right to Liberty and Right to Expression\nزندگی کا حق، آزادی کا حق اور اظہار کا حق",
      "Right to Education, Right to Survival and Right to Expression\nتعلیم کا حق، بقا کا حق اور اظہار کا حق",
      "Right to life. Right to Liberty and Pursuit of happiness\nزندگی کا حق، آزادی کا حق اور خوشی کی تلاش"
    ],
    "correctAnswer": 3,
    "explanation": "ریاستہائے متحدہ کے آزادی کے اعلان نامے میں ناقابل تنسیخ حقوق کے تصور کو مشہور طور پر بیان کیا گیا ہے، جس میں کہا گیا ہے کہ ان میں 'زندگی، آزادی اور خوشی کی تلاش' شامل ہیں۔ یہ جملہ اس دستاویز کے سب سے مشہور جملوں میں سے ایک ہے۔"
  },
  {
    "id": 871,
    "question": "The Constitution of France drafted in 1791 by the National Assembly began with (TSTET 28 May 2024)\nقومی اسمبلی کے ذریعہ 1791 میں تیار کردہ فرانس کے آئین کا آغاز اس سے ہوا (TSTET 28 مئی 2024)",
    "options": [
      "The Declaration of the Rights of man and citizen\nانسان اور شہری کے حقوق کا اعلامیہ",
      "The Declaration of Rights of Woman\nعورت کے حقوق کا اعلامیہ",
      "Provisions pertaining to citizenship\nشہریت سے متعلق دفعات",
      "The Declaration of the Rights and Duties to be followed by the citizens\nشہریوں کے لیے حقوق اور فرائض کا اعلامیہ"
    ],
    "correctAnswer": 0,
    "explanation": "فرانس کے 1791 کے آئین، جس نے ایک آئینی بادشاہت قائم کی، نے اپنے دیباچے کے طور پر 'انسان اور شہری کے حقوق کے اعلامیہ' کو شامل کیا۔ یہ بنیادی دستاویز، جو پہلی بار 1789 میں اپنائی گئی تھی، نے نئے فرانسیسی معاشرے کے بنیادی حقوق اور اصولوں کا خاکہ پیش کیا۔"
  },
  {
    "id": 872,
    "question": "Cave 15 of Ellora, showing Vishnu as Narasimha (the man lion) is a work of this period (TSTET 28 May 2024)\nایلورا کا غار 15، جس میں وشنو کو نرسimha (انسان شیر) کے طور پر دکھایا گیا ہے، اس دور کا کام ہے (TSTET 28 مئی 2024)",
    "options": [
      "Guptas\nگپتا",
      "Chalukyas\nچالوکیہ",
      "Rashtrakutas\nراشٹرکوٹ",
      "Chahamanas\nچہامان"
    ],
    "correctAnswer": 2,
    "explanation": "غار 15، ایلورا کا دشاوتار غار، ایک اہم یادگار ہے جو بنیادی طور پر راشٹرکوٹ خاندان، خاص طور پر 8 ویں صدی میں دنتی درگا کے دور حکومت سے منسوب ہے۔ وشنو کو ان کے نرسimha (انسان شیر) اوتار میں دکھانے والا شاندار ریلیف پینل راشٹرکوٹ کے چٹان تراشی کے فن کا ایک شاہکار ہے۔"
  },
  {
    "id": 873,
    "question": "This turned out to be the first all India struggle against the British Government although it was largely restricted to cities (TSTET 28 May 2024)\nیہ برطانوی حکومت کے خلاف پہلی آل انڈیا جدوجہد ثابت ہوئی حالانکہ یہ زیادہ تر شہروں تک محدود تھی (TSTET 28 مئی 2024)",
    "options": [
      "Non Cooperation Movement\nتحریک عدم تعاون",
      "Rowlatt Satyagraha\nرولٹ ستیہ گرہ",
      "Civil Disobedience Movement\nسول نافرمانی کی تحریک",
      "Quit India Movement\nہندوستان چھوڑو تحریک"
    ],
    "correctAnswer": 1,
    "explanation": "1919 کا رولٹ ستیہ گرہ مہاتما گاندھی کی پہلی آل انڈیا عوامی جدوجہد کی کوشش تھی۔ یہ جابرانہ رولٹ ایکٹ کے جواب میں تھا اور اس میں ملک بھر میں ہڑتالیں اور احتجاج شامل تھے، جو اگرچہ وسیع تھے، لیکن شہری مراکز میں سب سے زیادہ شدید تھے۔"
  },
  {
    "id": 874,
    "question": "A three-member mission sent by the British Cabinet in 1946 consist of the following members (TSTET 28 May 2024)\n1946 میں برطانوی کابینہ کی طرف سے بھیجے گئے تین رکنی مشن میں درج ذیل ارکان شامل تھے (TSTET 28 مئی 2024)",
    "options": [
      "Straford Cripss. Pethick Lawrence and Alexander\nاسٹافورڈ کرپس، پیتھک لارنس اور الیگزینڈر",
      "Lord Mountbatten, Pethick Lawrence, Straford Cripss\nلارڈ ماؤنٹ بیٹن، پیتھک لارنس، اسٹافورڈ کرپس",
      "Clement Atlee, Lord Mountbatten and Straford Cripss\nکلیمینٹ ایٹلی، لارڈ ماؤنٹ بیٹن اور اسٹافورڈ کرپس",
      "Clement Atlee. Alexander and Stafford Cripps\nکلیمینٹ ایٹلی، الیگزینڈر اور اسٹافورڈ کرپس"
    ],
    "correctAnswer": 0,
    "explanation": "1946 کا کابینہ مشن برائے ہندوستان تین برطانوی کابینہ کے اراکین پر مشتمل تھا: لارڈ پیتھک لارنس، سیکرٹری آف اسٹیٹ برائے ہندوستان؛ سر اسٹافورڈ کرپس، صدر بورڈ آف ٹریڈ؛ اور اے وی الیگزینڈر، فرسٹ لارڈ آف ایڈمرلٹی۔ ان کا مقصد ہندوستان کو اقتدار کی منتقلی پر بات چیت کرنا تھا۔"
  },
  {
    "id": 875,
    "question": "From among the following, the Gold coin issued by the Kakatiyas was (TSTET 28 May 2024)\nدرج ذیل میں سے، کاکتیوں کے ذریعہ جاری کردہ سونے کا سکہ تھا (TSTET 28 مئی 2024)",
    "options": [
      "Besant\nبیسنت",
      "Sri Ahita Gajakesari\nسری اہتا گجکیسری",
      "Osmania Sikka\nعثمانیہ سکہ",
      "Dinars and Rupaka\nدینار اور روپکا"
    ],
    "correctAnswer": 1,
    "explanation": "کاکتیہ حکمرانوں نے مخصوص خطابات اور علامتوں کے ساتھ سکے جاری کیے۔ 'گجکیسری' (ہاتھیوں کا شیر، جو دشمن بادشاہوں کے فاتح کی نشاندہی کرتا ہے) کا خطاب ان کے ذریعہ استعمال کیا گیا تھا، اور 'سری اہتا گجکیسری' کے افسانے والے سونے کے سکے ان کے دور حکومت سے منسوب کیے گئے ہیں۔"
  },
  {
    "id": 876,
    "question": "From among the following, this family had brought a revolution in the metallurgical industry (TSTET 28 May 2024)\nدرج ذیل میں سے، اس خاندان نے دھات کاری کی صنعت میں ایک انقلاب برپا کیا تھا (TSTET 28 مئی 2024)",
    "options": [
      "Tata Family\nٹاٹا خاندان",
      "Birla Family\nبرلا خاندان",
      "Crupp's Family\nکروپ کا خاندان",
      "Abraham Darby Family\nابراہم ڈاربی خاندان"
    ],
    "correctAnswer": 3,
    "explanation": "انگلینڈ کے کول بروکڈیل کا ڈاربی خاندان صنعتی انقلاب میں اہم کردار ادا کرتا تھا۔ 1709 میں، ابراہم ڈاربی اول نے چارکول کی بجائے کوک کا استعمال کرتے ہوئے لوہے کو کامیابی سے پگھلایا، یہ ایک ایسی پیش رفت تھی جس نے لوہے کی بڑے پیمانے پر پیداوار کو ممکن بنایا اور دھات کاری کی صنعت کو بنیادی طور پر تبدیل کر دیا۔"
  },
  {
    "id": 877,
    "question": "Identify the correct statement (TSTET 28 May 2024)\nصحیح بیان کی نشاندہی کریں (TSTET 28 مئی 2024)",
    "options": [
      "The Draft Constitution contains 395 Articles and 9 Schedules.\nمسودہ آئین 395 آرٹیکلز اور 9 شیڈولز پر مشتمل ہے۔",
      "The Draft Constitution contains 398 Articles and 8 Schedules.\nمسودہ آئین 398 آرٹیکلز اور 8 شیڈولز پر مشتمل ہے۔",
      "The Draft Constitution contains 392 Articles and 8 Schedules.\nمسودہ آئین 392 آرٹیکلز اور 8 شیڈولز پر مشتمل ہے۔",
      "The Draft Constitution contains 395 Articles and 8 Schedules.\nمسودہ آئین 395 آرٹیکلز اور 8 شیڈولز پر مشتمل ہے۔"
    ],
    "correctAnswer": 3,
    "explanation": "جب ڈرافٹنگ کمیٹی نے فروری 1948 میں ہندوستان کا مسودہ آئین پیش کیا، تو یہ 395 آرٹیکلز اور 8 شیڈولز پر مشتمل تھا۔ اس فریم ورک نے 26 نومبر 1949 کو منظور کیے گئے حتمی آئین کی بنیاد رکھی۔"
  },
  {
    "id": 878,
    "question": "Dr. Ambedkar considered this right as 'heart and soul of the constitution'. (TSTET 28 May 2024)\nڈاکٹر امبیڈکر نے اس حق کو 'آئین کا دل اور روح' سمجھا۔ (TSTET 28 مئی 2024)",
    "options": [
      "Right to freedom\nآزادی کا حق",
      "Right against exploitation\nاستحصال کے خلاف حق",
      "Right to freedom of religion\nمذہب کی آزادی کا حق",
      "Right to constitutional remedies\nآئینی علاج کا حق"
    ],
    "correctAnswer": 3,
    "explanation": "ڈاکٹر بی آر امبیڈکر نے مشہور طور پر آرٹیکل 32، آئینی علاج کے حق کو، ہندوستانی آئین کا 'دل اور روح' کہا تھا۔ انہوں نے اس بات پر زور دیا کہ یہ حق، جو شہریوں کو بنیادی حقوق کے نفاذ کے لیے سپریم کورٹ سے رجوع کرنے کی اجازت دیتا ہے، وہی ہے جو دیگر تمام حقوق کو بامعنی اور موثر بناتا ہے۔"
  },
  {
    "id": 879,
    "question": "The Chief Election Commissioner and Election Commissioners can be removed before the expiry of the term by (TSTET 28 May 2024)\nچیف الیکشن کمشنر اور الیکشن کمشنرز کو مدت ختم ہونے سے پہلے ہٹایا جا سکتا ہے (TSTET 28 مئی 2024)",
    "options": [
      "the President, if both Houses of Parliament make a recommendation with a simple majority.\nصدر کے ذریعہ، اگر پارلیمنٹ کے دونوں ایوان سادہ اکثریت سے سفارش کریں۔",
      "the Vice President, if both Houses of Parliament make a recommendation with a special majority.\nنائب صدر کے ذریعہ، اگر پارلیمنٹ کے دونوں ایوان خصوصی اکثریت سے سفارش کریں۔",
      "the speaker of the Lok Sabha, if both Houses of Parliament make a recommendation with a special majority.\nلوک سبھا کے اسپیکر کے ذریعہ، اگر پارلیمنٹ کے دونوں ایوان خصوصی اکثریت سے سفارش کریں۔",
      "the President, if both Houses of Parliament make a recommendation with a special majority.\nصدر کے ذریعہ، اگر پارلیمنٹ کے دونوں ایوان خصوصی اکثریت سے سفارش کریں۔"
    ],
    "correctAnswer": 3,
    "explanation": "الیکشن کمیشن کی آزادی کو یقینی بنانے کے لیے، چیف الیکشن کمشنر کو مدت ملازمت کا تحفظ حاصل ہے۔ انہیں صرف سپریم کورٹ کے جج کے اسی طرح کے عمل کے ذریعے دفتر سے ہٹایا جا سکتا ہے: پارلیمنٹ کے ایک خطاب کے بعد صدر کے حکم سے، جسے ہر ایوان کی خصوصی اکثریت کی حمایت حاصل ہو۔"
  },
  {
    "id": 880,
    "question": "Which one of the following DOES NOT constitute the electoral college for electing the President of India (TSTET 28 May 2024)\nدرج ذیل میں سے کون سا ہندوستان کے صدر کے انتخاب کے لیے انتخابی کالج تشکیل نہیں دیتا (TSTET 28 مئی 2024)",
    "options": [
      "Elected members of Rajya Sabha\nراجیہ سبھا کے منتخب اراکین",
      "Elected members of the Legislative Assembly of each State\nہر ریاست کی قانون ساز اسمبلی کے منتخب اراکین",
      "Elected members of the State Legislative Council\nریاستی قانون ساز کونسل کے منتخب اراکین",
      "Elected members of Lok Sabha\nلوک سبھا کے منتخب اراکین"
    ],
    "correctAnswer": 2,
    "explanation": "صدر کے انتخاب کے لیے انتخابی کالج لوک سبھا، راجیہ سبھا اور ریاستی قانون ساز اسمبلیوں کے منتخب اراکین پر مشتمل ہوتا ہے۔ ریاستی قانون ساز کونسلوں (ودھان پریشد) کے اراکین اس انتخابی کالج کا حصہ نہیں ہیں۔"
  },
  {
    "id": 881,
    "question": "In which of the following can a non-member be the presiding officer (TSTET 28 May 2024)\nدرج ذیل میں سے کس میں ایک غیر رکن صدارتی افسر ہو سکتا ہے (TSTET 28 مئی 2024)",
    "options": [
      "Lok Sabha\nلوک سبھا",
      "State Assembly\nریاستی اسمبلی",
      "Rajya Sabha\nراجیہ سبھا",
      "State Legislative Council\nریاستی قانون ساز کونسل"
    ],
    "correctAnswer": 2,
    "explanation": "ہندوستان کے نائب صدر راجیہ سبھا کے سابقہ چیئرمین کے طور پر کام کرتے ہیں۔ نائب صدر، جو پارلیمنٹ کے دونوں ایوانوں کے اراکین کے ذریعہ منتخب ہوتے ہیں، خود راجیہ سبھا کے رکن نہیں ہیں لیکن اس کی کارروائی کی صدارت کرتے ہیں۔"
  },
  {
    "id": 882,
    "question": "73rd constitutional amendment Act 1992 is about (TSTET 28 May 2024)\n73 واں آئینی ترمیمی ایکٹ 1992 اس کے بارے میں ہے (TSTET 28 مئی 2024)",
    "options": [
      "Panchayati Raj Institutions were given Constitutional status\nپنچایتی راج اداروں کو آئینی حیثیت دی گئی",
      "Elementary Education was made a fundamental right-Free and compulsory education to children between 6 and 14 years\nابتدائی تعلیم کو بنیادی حق بنایا گیا - 6 سے 14 سال کے بچوں کو مفت اور لازمی تعلیم",
      "The women's reservation bill which reserves one-third of all seats to women in Lok Sabha State legislative assemblies\nخواتین کا ریزرویشن بل جو لوک سبھا اور ریاستی قانون ساز اسمبلیوں میں تمام نشستوں کا ایک تہائی خواتین کے لیے مخصوص کرتا ہے",
      "The voting age was decreased from 21 to 18 for both Lok Sabha and Legislative Assemblies elections\nلوک سبھا اور قانون ساز اسمبلیوں کے انتخابات کے لیے ووٹنگ کی عمر 21 سے کم کر کے 18 سال کر دی گئی"
    ],
    "correctAnswer": 0,
    "explanation": "1992 کا 73 واں آئینی ترمیمی ایکٹ ایک تاریخی قانون سازی تھی جس نے پنچایتی راج اداروں کو آئینی حیثیت اور تحفظ فراہم کیا، دیہی علاقوں میں مقامی خود حکومت کا تین سطحی نظام قائم کیا اور نچلی سطح پر جمہوریت کو مضبوط بنانے کا مقصد رکھا۔"
  },
  {
    "id": 883,
    "question": "Laws on the subjects mentioned under the Concurrent List will be made by (TSTET 28 May 2024)\nمتفقہ فہرست کے تحت ذکر کردہ مضامین پر قوانین بنائے جائیں گے (TSTET 28 مئی 2024)",
    "options": [
      "Only Central Government\nصرف مرکزی حکومت",
      "Only State Government\nصرف ریاستی حکومت",
      "Central Government and State Government\nمرکزی حکومت اور ریاستی حکومت",
      "Central Government, State Government and Local Bodies (Zilla Parishads)\nمرکزی حکومت، ریاستی حکومت اور مقامی ادارے (ضلع پریشد)"
    ],
    "correctAnswer": 2,
    "explanation": "متفقہ فہرست میں وہ مضامین شامل ہیں جن پر مرکزی اور ریاستی دونوں حکومتیں قانون سازی کر سکتی ہیں۔ کسی متفقہ مضمون پر مرکزی قانون اور ریاستی قانون کے درمیان کسی بھی تنازعہ یا عدم مطابقت کی صورت میں، مرکزی قانون غالب رہے گا۔"
  },
  {
    "id": 884,
    "question": "The minimum age required to be elected as a Sarpanch of Grama Panchayath is (TSTET 28 May 2024)\nگرام پنچایت کے سرپنچ کے طور پر منتخب ہونے کے لیے کم از کم عمر درکار ہے (TSTET 28 مئی 2024)",
    "options": [
      "21 years\n21 سال",
      "25 years\n25 سال",
      "18 years\n18 سال",
      "30 years\n30 سال"
    ],
    "correctAnswer": 0,
    "explanation": "ہندوستانی آئین کے آرٹیکل 243F کے مطابق، پنچایتی راج نظام کے کسی بھی سطح پر انتخابات لڑنے کے لیے، بشمول سرپنچ کے عہدے کے، کم از کم عمر 21 سال ہے۔"
  },
  {
    "id": 885,
    "question": "World Human Right Day is Celebrated on (TSTET 28 May 2024)\nعالمی انسانی حقوق کا دن منایا جاتا ہے (TSTET 28 مئی 2024)",
    "options": [
      "10th November\n10 نومبر",
      "10th October\n10 اکتوبر",
      "10th December\n10 دسمبر",
      "10th September\n10 ستمبر"
    ],
    "correctAnswer": 2,
    "explanation": "انسانی حقوق کا دن ہر سال 10 دسمبر کو منایا جاتا ہے۔ یہ اس دن کی یاد مناتا ہے جب 1948 میں اقوام متحدہ کی جنرل اسمبلی نے انسانی حقوق کا عالمی اعلامیہ (UDHR) اپنایا تھا، جو ہر انسان کے ناقابل تنسیخ حقوق کا اعلان کرنے والی ایک سنگ میل دستاویز ہے۔"
  },
  {
    "id": 886,
    "question": "A German citizen staying in India cannot claim the following Right (TSTET 28 May 2024)\nہندوستان میں مقیم ایک جرمن شہری درج ذیل حق کا دعویٰ نہیں کر سکتا (TSTET 28 مئی 2024)",
    "options": [
      "Equality before law\nقانون کے سامنے مساوات",
      "Protection of Life and personal liberty\nزندگی اور ذاتی آزادی کا تحفظ",
      "Freedom of religion\nمذہب کی آزادی",
      "Freedom of trade and profession\nتجارت اور پیشے کی آزادی"
    ],
    "correctAnswer": 3,
    "explanation": "ہندوستانی آئین میں، کچھ بنیادی حقوق تمام افراد (شہریوں اور غیر ملکیوں) کو دستیاب ہیں، جبکہ دیگر صرف شہریوں کے لیے مخصوص ہیں۔ آرٹیکل 19(1)(g) کے تحت ضمانت دی گئی تجارت اور پیشے کی آزادی کا حق صرف ہندوستان کے شہریوں کو دستیاب ہے۔ قانون کے سامنے مساوات (آرٹیکل 14) اور زندگی کا تحفظ (آرٹیکل 21) جیسے حقوق سب پر لاگو ہوتے ہیں۔"
  },
  {
    "id": 887,
    "question": "The following is NOT a feature of a democratic government (TSTET 28 May 2024)\nدرج ذیل میں سے کون سی ایک جمہوری حکومت کی خصوصیت نہیں ہے (TSTET 28 مئی 2024)",
    "options": [
      "Fundamental rights\nبنیادی حقوق",
      "Free and fair elections\nآزادانہ اور منصفانہ انتخابات",
      "Freedom of religion\nمذہب کی آزادی",
      "Centralized decision-making\nمرکزی فیصلہ سازی"
    ],
    "correctAnswer": 3,
    "explanation": "جمہوریت کی اہم خصوصیات میں بنیادی حقوق کا تحفظ، قانون کی حکمرانی، اور آزادانہ و منصفانہ انتخابات شامل ہیں۔ مرکزی فیصلہ سازی، جہاں اقتدار بغیر کسی روک ٹوک، توازن، یا عوامی شرکت کے ایک ہی اتھارٹی میں مرکوز ہوتا ہے، آمرانہ یا غیر جمہوری نظاموں کی خصوصیت ہے۔"
  },
  {
    "id": 888,
    "question": "The headquarters of UNESCO is located in (TSTET 28 May 2024)\nیونیسکو کا ہیڈکوارٹر واقع ہے (TSTET 28 مئی 2024)",
    "options": [
      "Paris\nپیرس",
      "Geneva\nجنیوا",
      "Rome\nروم",
      "New York\nنیویارک"
    ],
    "correctAnswer": 0,
    "explanation": "اقوام متحدہ کی تعلیمی، سائنسی اور ثقافتی تنظیم (یونیسکو) کا ہیڈکوارٹر پیرس، فرانس میں واقع ہے۔"
  },
  {
    "id": 889,
    "question": "Among the following, identify the main features of social studies A) Social studies as a human study B) Social studies as an idealistic course C) The concept of social studies, excludes commitment to action D) Social studies is a broad and composite instructional area. (TSTET 28 May 2024)\nدرج ذیل میں سے، سماجی علوم کی اہم خصوصیات کی نشاندہی کریں A) سماجی علوم بحیثیت انسانی مطالعہ B) سماجی علوم بحیثیت ایک مثالی کورس C) سماجی علوم کا تصور، عمل کے عزم کو خارج کرتا ہے D) سماجی علوم ایک وسیع اور جامع تدریسی شعبہ ہے۔ (TSTET 28 مئی 2024)",
    "options": [
      "A, B, C & D\nA، B، C اور D",
      "A, B & D only\nصرف A، B اور D",
      "B, C & D only\nصرف B، C اور D",
      "A & D only\nصرف A اور D"
    ],
    "correctAnswer": 3,
    "explanation": "سماجی علوم بنیادی طور پر انسانوں اور ان کے تعاملات کا مطالعہ ہے (A)۔ یہ ایک وسیع، جامع شعبہ بھی ہے جو تاریخ، جغرافیہ، اور شہریات جیسے مضامین کو مربوط کرتا ہے (D)۔ تاہم، ایک اہم مقصد شہری اہلیت کو فروغ دینا اور عمل کی حوصلہ افزائی کرنا ہے، نہ کہ اسے خارج کرنا (جس سے C غلط ہو جاتا ہے)۔ یہ خالصتاً مثالی ہونے کے بجائے زیادہ عملی بھی ہے (جس سے B ایک بنیادی خصوصیت کے طور پر کم اہم ہو جاتا ہے)۔"
  },
  {
    "id": 890,
    "question": "Among the following, which is NOT CORRECT pair regarding educationists and their contributions (TSTET 28 May 2024)\nدرج ذیل میں سے، ماہرین تعلیم اور ان کی خدمات کے حوالے سے کون سا جوڑا درست نہیں ہے (TSTET 28 مئی 2024)",
    "options": [
      "John Dewey - quoted that classroom is miniature of universe\nجان ڈیوی - نے کہا کہ کلاس روم کائنات کا ایک چھوٹا سا نمونہ ہے",
      "Benjamin Bloom - developed the lesson plan steps\nبینجمن بلوم - نے سبق کے منصوبے کے مراحل تیار کیے",
      "Kothari - suggested to establish common school system\nکوٹھاری - نے مشترکہ اسکول سسٹم قائم کرنے کی تجویز دی",
      "Killpatrick - Focussed on learning by doing\nکل پیٹرک - نے کرکے سیکھنے پر توجہ مرکوز کی"
    ],
    "correctAnswer": 1,
    "explanation": "بینجمن بلوم اپنی تعلیمی مقاصد کی درجہ بندی (علمی، جذباتی، نفسیاتی حرکی ڈومینز) کے لیے مشہور ہیں، نہ کہ سبق کے منصوبے کے مراحل تیار کرنے کے لیے۔ سبق کی منصوبہ بندی کے منظم مراحل سب سے زیادہ مشہور جوہان فریڈرک ہربرٹ (ہربرٹین اسٹیپس) سے وابستہ ہیں۔ دیگر جوڑے درست ہیں۔"
  },
  {
    "id": 891,
    "question": "Match the following List - A with List - B List - A (Disciplines) A) Geography B) History C) Economics D) Civics List - B (Aims of teaching) i) understanding the impact of culture on human evolution ii) appreciating role of UNO in promoting the world peace iii) Understanding the inter-dependency among countries iv) Understanding relation between demand and supply (TSTET 28 May 2024)\nفہرست - A کو فہرست - B سے ملائیں فہرست - A (مضامین) A) جغرافیہ B) تاریخ C) معاشیات D) شہریات فہرست - B (تدریس کے مقاصد) i) انسانی ارتقاء پر ثقافت کے اثرات کو سمجھنا ii) عالمی امن کو فروغ دینے میں اقوام متحدہ کے کردار کو سراہنا iii) ممالک کے درمیان باہمی انحصار کو سمجھنا iv) طلب اور رسد کے درمیان تعلق کو سمجھنا (TSTET 28 مئی 2024)",
    "options": [
      "A - ii, B - iii, C - iv, D - i",
      "A - iii, B - i, C - iv, D - ii",
      "A - iii, B - iv, C - i, D - ii",
      "A - iv, B - ii, C - iii, D - i"
    ],
    "correctAnswer": 1,
    "explanation": "صحیح ملاپ یہ ہیں: جغرافیہ ممالک کے درمیان باہمی انحصار سکھاتا ہے (A-iii)۔ تاریخ انسانی ارتقاء پر ثقافت کے اثرات کو سمجھنے میں مدد کرتی ہے (B-i)۔ معاشیات طلب اور رسد کے درمیان تعلق کی وضاحت کرتی ہے (C-iv)۔ شہریات اقوام متحدہ جیسے بین الاقوامی اداروں کے کردار کو سراہنے میں مدد کرتی ہے (D-ii)۔"
  },
  {
    "id": 892,
    "question": "A class-9 student, actively participated in collecting different coins, stamps etc., and prepared albums, scrap books. It is reflecting the specifications of the following domain. (TSTET 28 May 2024)\nنویں جماعت کا ایک طالب علم، مختلف سکے، ڈاک ٹکٹ وغیرہ جمع کرنے میں فعال طور پر حصہ لیتا ہے، اور البم، اسکریپ بکس تیار کرتا ہے۔ یہ درج ذیل ڈومین کی خصوصیات کی عکاسی کر رہا ہے۔ (TSTET 28 مئی 2024)",
    "options": [
      "Psychomotor domain\nسائیکوموٹر ڈومین",
      "Cognitive domain\nعلمی ڈومین",
      "Affective domain\nجذباتی ڈومین",
      "Social domain\nسماجی ڈومین"
    ],
    "correctAnswer": 2,
    "explanation": "طالب علم کی رضاکارانہ شرکت اور ڈاک ٹکٹوں اور سکوں کو جمع کرنے اور منظم کرنے میں لگن اس سرگرمی کے تئیں ذاتی دلچسپی، قدردانی اور مثبت رویے کی نشاندہی کرتی ہے۔ یہ پہلو — احساسات، اقدار، قدردانی، اور رویے — سیکھنے کے جذباتی ڈومین (Affective Domain) کا مرکز ہیں۔"
  },
  {
    "id": 893,
    "question": "The main function of the State Council for Educational Research and Training (SCERT) is (TSTET 28 May 2024)\nاسٹیٹ کونسل فار ایجوکیشنل ریسرچ اینڈ ٹریننگ (SCERT) کا بنیادی کام ہے (TSTET 28 مئی 2024)",
    "options": [
      "Development of Curriculum, Text Books\nنصاب، درسی کتب کی ترقی",
      "Conducting Common Examinations at school Level\nاسکول کی سطح پر مشترکہ امتحانات کا انعقاد",
      "Teacher Recruitment and transfers\nاساتذہ کی بھرتی اور تبادلے",
      "Providing Mid-Day meal to students\nطلباء کو مڈ ڈے میل فراہم کرنا"
    ],
    "correctAnswer": 0,
    "explanation": "SCERT ریاستی سطح پر اعلیٰ تعلیمی ادارہ ہے۔ اس کی بنیادی ذمہ داریوں میں اسکول کے نصاب، سلیبس، اور درسی کتب کو ڈیزائن اور تیار کرنا، نیز اساتذہ کے تربیتی پروگرام اور تعلیمی تحقیق کا انعقاد شامل ہے۔"
  },
  {
    "id": 894,
    "question": "Among the following, the learning resource that belongs to Graphic Aid is (TSTET 28 May 2024)\nدرج ذیل میں سے، وہ سیکھنے کا وسیلہ جو گرافک ایڈ سے تعلق رکھتا ہے (TSTET 28 مئی 2024)",
    "options": [
      "Diagrams\nڈایاگرام",
      "Models\nماڈلز",
      "Flash Cards\nفلیش کارڈز",
      "Objects\nاشیاء"
    ],
    "correctAnswer": 0,
    "explanation": "گرافک ایڈز دو جہتی بصری مواد ہیں جو ڈرائنگ، لکیروں اور علامتوں کے ذریعے حقائق اور خیالات کو بیان کرتے ہیں۔ ڈایاگرام گرافک ایڈ کی ایک بہترین مثال ہیں، جو معلومات کو بصری طور پر پیش کرتے ہیں۔ ماڈلز اور اشیاء تین جہتی ہیں، گرافک نہیں۔"
  },
  {
    "id": 895,
    "question": "Among the following, which statement is NOT CORRECT about evaluation. (TSTET 28 May 2024)\nدرج ذیل میں سے، کون سا بیان تشخیص کے بارے میں درست نہیں ہے۔ (TSTET 28 مئی 2024)",
    "options": [
      "Evaluation is a judgemental process\nتشخیص ایک فیصلہ کن عمل ہے",
      "Evaluation is a continuous process\nتشخیص ایک مسلسل عمل ہے",
      "Evaluation is a part of teaching and learning\nتشخیص تدریس اور سیکھنے کا ایک حصہ ہے",
      "Evaluation is a terminal process\nتشخیص ایک آخری عمل ہے"
    ],
    "correctAnswer": 3,
    "explanation": "جدید تدریسیات اس بات پر زور دیتی ہے کہ تشخیص کو تدریسی-سیکھنے کے عمل کا ایک مسلسل اور لازمی حصہ ہونا چاہیے (جیسا کہ CCE - مسلسل اور جامع تشخیص میں ہے)۔ یہ ایک آخری عمل نہیں ہے جو صرف ہدایات کے اختتام پر ہوتا ہے، کیونکہ اس کے مقاصد میں سیکھنے کے خلا کی تشخیص اور بہتری کے لیے رائے فراہم کرنا شامل ہے۔"
  },
  {
    "id": 896,
    "question": "According to National Curriculum Framework - 2005, the main goal of Social Science is (TSTET 28 May 2024)\nقومی نصابی فریم ورک - 2005 کے مطابق، سماجی سائنس کا بنیادی مقصد ہے (TSTET 28 مئی 2024)",
    "options": [
      "To prepare the student as an ideal citizen\nطالب علم کو ایک مثالی شہری کے طور پر تیار کرنا",
      "To develop critical thinking among the students\nطلباء میں تنقیدی سوچ کو فروغ دینا",
      "To provide the knowledge about the society and nation\nمعاشرے اور قوم کے بارے میں علم فراہم کرنا",
      "To create interest on social issues\nسماجی مسائل پر دلچسپی پیدا کرنا"
    ],
    "correctAnswer": 1,
    "explanation": "NCF-2005 کے مطابق، سماجی سائنس کی تدریس کا ایک مرکزی مقصد تنقیدی سوچ اور عکاسی کی صلاحیتوں کو فروغ دینا ہے۔ اس میں طلباء کو صرف معلومات کو یاد کرنے کے بجائے، معاشرتی مسائل پر سوال کرنے، تجزیہ کرنے اور متعدد نقطہ نظر سے سمجھنے کے لیے لیس کرنا شامل ہے۔"
  },
  {
    "id": 897,
    "question": "To develop patriotism among the children the teacher should adopt the following method. (TSTET 28 May 2024)\nبچوں میں حب الوطنی کو فروغ دینے کے لیے استاد کو درج ذیل طریقہ اختیار کرنا چاہیے۔ (TSTET 28 مئی 2024)",
    "options": [
      "Lecture method\nلیکچر کا طریقہ",
      "Story telling method\nکہانی سنانے کا طریقہ",
      "Dramatisation method\nڈرامائی تشکیل کا طریقہ",
      "Text book method\nدرسی کتاب کا طریقہ"
    ],
    "correctAnswer": 1,
    "explanation": "کہانی سنانا حب الوطنی جیسی اقدار کو پروان چڑھانے کے لیے ایک انتہائی موثر طریقہ ہے۔ قومی ہیروز، تاریخی واقعات، اور قوم کے لیے قربانیوں کے بارے میں داستانیں مضبوط جذبات کو ابھار سکتی ہیں اور فخر اور اپنائیت کا احساس پیدا کر سکتی ہیں جو اکثر لیکچرز یا درسی کتاب پڑھنے سے نہیں ہو سکتا۔"
  },
  {
    "id": 898,
    "question": "In the following which is NOT a merit of the project method (TSTET 28 May 2024)\nدرج ذیل میں سے کون سا پروجیکٹ طریقہ کا فائدہ نہیں ہے (TSTET 28 مئی 2024)",
    "options": [
      "Training in democratic way of living\nجمہوری طرز زندگی کی تربیت",
      "Development of self-confidence and self-discipline\nخود اعتمادی اور خود نظم و ضبط کی ترقی",
      "It is not possible to cover the syllabus within the limited time\nمحدود وقت میں نصاب کو مکمل کرنا ممکن نہیں ہے",
      "Dignity of labour is developed\nمحنت کی عظمت پیدا ہوتی ہے"
    ],
    "correctAnswer": 2,
    "explanation": "سوال یہ پوچھتا ہے کہ کون سا فائدہ نہیں ہے۔ جبکہ پروجیکٹ طریقہ جمہوری زندگی، خود اعتمادی، اور محنت کی عظمت کو فروغ دیتا ہے، اس کا اہم نقصان (نقص) یہ ہے کہ یہ بہت وقت طلب ہے۔ اس سے ایک مقررہ وقت کے اندر مقررہ نصاب کو مکمل کرنا مشکل ہو جاتا ہے، لہذا یہ بیان ایک نقصان کو بیان کرتا ہے، نہ کہ ایک فائدے کو۔"
  },
  {
    "id": 899,
    "question": "Among the following, who quoted that 'The field of social studies is a very good beginning to train the students in the art of living together' (TSTET 28 May 2024)\nدرج ذیل میں سے، کس نے یہ کہا کہ 'سماجی علوم کا شعبہ طلباء کو ایک ساتھ رہنے کے فن میں تربیت دینے کے لیے ایک بہت اچھی شروعات ہے' (TSTET 28 مئی 2024)",
    "options": [
      "Mudaliar Commission\nمدالیار کمیشن",
      "John U. Michaelis\nجان یو. مائیکلس",
      "Kothari Commission\nکوٹھاری کمیشن",
      "John V. Jarolimek\nجان وی. جارولیمیک"
    ],
    "correctAnswer": 0,
    "explanation": "یہ بیان سیکنڈری ایجوکیشن کمیشن (1952-53) نے دیا تھا، جسے مدالیار کمیشن کے نام سے جانا جاتا ہے۔ کمیشن نے سماجی مہارتوں کو فروغ دینے اور طلباء کو ہم آہنگ کمیونٹی زندگی کے لیے تیار کرنے میں سماجی علوم کے کردار پر زور دیا۔"
  },
  {
    "id": 900,
    "question": "The last step in chronological method is (TSTET 28 May 2024)\nتاریخی ترتیب کے طریقے میں آخری مرحلہ ہے (TSTET 28 مئی 2024)",
    "options": [
      "Identification of cause and effect relationship\nوجہ اور اثر کے تعلق کی شناخت",
      "Preparation of a time line chart\nٹائم لائن چارٹ کی تیاری",
      "Explanation about the events of particular period\nمخصوص دور کے واقعات کی وضاحت",
      "Evaluation of the events\nواقعات کا جائزہ"
    ],
    "correctAnswer": 3,
    "explanation": "تاریخی ترتیب کے طریقے میں واقعات کو ترتیب دینا، ان کی وضاحت کرنا، اور وجہ و اثر کے تعلقات کا تجزیہ کرنا شامل ہے۔ اس عمل میں سب سے آخری اور سب سے پیچیدہ مرحلہ واقعات کا جائزہ لینا ہے، جس میں ان کی اہمیت، نتائج، اور مجموعی اثرات کے بارے میں باخبر فیصلے کرنا شامل ہے۔"
  },
  {
    "id": 901,
    "question": "'X' is living in a city located on 0° longitudes. Whereas, 'Y' is living in a city located on 180° longitude. The time difference between 'X' and 'Y' is (TSTET 29 May 2024)\n'X' ایک شہر میں رہتا ہے جو 0° طول البلد پر واقع ہے۔ جبکہ 'Y' ایک شہر میں رہتا ہے جو 180° طول البلد پر واقع ہے۔ 'X' اور 'Y' کے درمیان وقت کا فرق ہے",
    "options": [
      "24 hours\n24 گھنٹے",
      "9 hours\n9 گھنٹے",
      "18 hours\n18 گھنٹے",
      "12 hours\n12 گھنٹے"
    ],
    "correctAnswer": 3,
    "explanation": "زمین 24 گھنٹوں میں 360° گھومتی ہے، جس کا مطلب ہے کہ یہ فی گھنٹہ 15° طول البلد طے کرتی ہے (360/24)۔ X (0°) اور Y (180°) کے درمیان طول البلد کا فرق 180° ہے۔ لہذا، وقت کا فرق 180° ÷ 15°/گھنٹہ = 12 گھنٹے کے طور پر شمار کیا جاتا ہے۔"
  },
  {
    "id": 902,
    "question": "From among the following, these sources provide direct knowledge about the interior of the earth (TSTET 29 May 2024)\nA) Deep Drilling Projects\nB) Volcanic Eruptions\nC) Temperature in the interior of the earth\nD) Atmospheric Pressure and Density of the material\nمندرجہ ذیل میں سے، کون سے ذرائع زمین کے اندرونی حصے کے بارے میں براہ راست معلومات فراہم کرتے ہیں (TSTET 29 May 2024)\nA) گہری کھدائی کے منصوبے\nB) آتش فشاں کا پھٹنا\nC) زمین کے اندرونی حصے کا درجہ حرارت\nD) ماحولیاتی دباؤ اور مواد کی کثافت",
    "options": [
      "A, B & C only",
      "A, B, C & D",
      "A & B only",
      "B & D only"
    ],
    "correctAnswer": 2,
    "explanation": "براہ راست ذرائع میں زمین کے اندر سے مواد کا جسمانی طور پر مشاہدہ کرنا شامل ہے۔ گہری کھدائی کے منصوبے (جیسے کولا سپر ڈیپ بوریہول) اور آتش فشاں کا پھٹنا (جو مینٹل سے میگما کو سطح پر لاتا ہے) براہ راست ذرائع ہیں۔ درجہ حرارت، دباؤ، اور کثافت بالواسطہ ذرائع ہیں، کیونکہ ان کا اندازہ اندرونی حصے کے براہ راست مشاہدے کے بجائے سائنسی پیمائش اور تجزیے سے لگایا جاتا ہے۔"
  },
  {
    "id": 903,
    "question": "On the earth, the greatest portion of the fresh water (69.56%) is in the form of (TSTET 29 May 2024)\nزمین پر، تازہ پانی کا سب سے بڑا حصہ (69.56%) کس شکل میں ہے",
    "options": [
      "Fresh ground waters\nتازہ زمینی پانی",
      "Water concentrated in lakes and reservoirs\nجھیلوں اور آبی ذخائر میں مرتکز پانی",
      "Water concentrated in rivers and lakes\nدریاؤں اور جھیلوں میں مرتکز پانی",
      "Ice and permanent snow cover in the Antarctica, the Arctic and in the mountain ranges\nانٹارکٹیکا، آرکٹک اور پہاڑی سلسلوں میں برف اور مستقل برفانی تہہ"
    ],
    "correctAnswer": 3,
    "explanation": "زمین کے تازہ پانی کی اکثریت، تقریباً 70%، گلیشیئرز اور برفانی تہوں میں جمی ہوئی ہے۔ یہ بنیادی طور پر انٹارکٹیکا اور گرین لینڈ میں واقع ہیں، جبکہ دنیا بھر کے پہاڑی سلسلوں میں کم مقدار میں موجود ہیں۔"
  },
  {
    "id": 904,
    "question": "The higher we go in troposphere, the lower layer of the atmosphere, the temperature (TSTET 29 May 2024)\nہم ٹروپوسفیئر، یعنی فضا کی نچلی تہہ میں جتنا اونچا جاتے ہیں، درجہ حرارت",
    "options": [
      "Increases\nبڑھتا ہے",
      "Remains constant\nمستقل رہتا ہے",
      "decreases\nکم ہوتا ہے",
      "Decreases then increases\nکم ہوتا ہے پھر بڑھتا ہے"
    ],
    "correctAnswer": 2,
    "explanation": "ٹروپوسفیئر میں، جو زمین کی سطح کے قریب ترین فضائی تہہ ہے، اونچائی میں اضافے کے ساتھ درجہ حرارت مسلسل کم ہوتا ہے۔ اس رجحان کو نارمل لیپس ریٹ کے نام سے جانا جاتا ہے، جہاں ہر 1000 میٹر کی بلندی پر درجہ حرارت عام طور پر تقریباً 6.5 ڈگری سیلسیس گر جاتا ہے۔"
  },
  {
    "id": 905,
    "question": "The Byson and Indus Gorges respectively are in (TSTET 29 May 2024)\nبائیسن اور سندھ گھاٹیاں بالترتیب کہاں واقع ہیں",
    "options": [
      "Andhra Pradesh and Jammu and Kashmir\nآندھرا پردیش اور جموں و کشمیر",
      "Andhra Pradesh and Himachal Pradesh\nآندھرا پردیش اور ہماچل پردیش",
      "Telangana and Jammu and Kashmir\nتلنگانہ اور جموں و کشمیر",
      "Odisha and Pakistan\nاڈیشہ اور پاکستان"
    ],
    "correctAnswer": 0,
    "explanation": "بائیسن گھاٹی، جسے پاپیکونڈالو گھاٹی بھی کہا جاتا ہے، آندھرا پردیش میں دریائے گوداوری سے بنی ایک خوبصورت وادی ہے۔ سندھ گھاٹی ایک بہت بڑی وادی ہے جو دریائے سندھ کے ذریعے جموں و کشمیر کے لداخ کے علاقے میں ہمالیہ کو کاٹتے ہوئے بنتی ہے۔"
  },
  {
    "id": 906,
    "question": "The low pressure belts on the earth are formed at (TSTET 29 May 2024)\nزمین پر کم دباؤ کی پٹیاں کہاں بنتی ہیں",
    "options": [
      "Equatorial and Sub-Polar Region\nخط استوائی اور ذیلی قطبی علاقہ",
      "Equatorial and Sub-Tropical Region\nخط استوائی اور ذیلی استوائی علاقہ",
      "Sub-Polar and Polar Region\nذیلی قطبی اور قطبی علاقہ",
      "Sub-Tropical and Polar Region\nذیلی استوائی اور قطبی علاقہ"
    ],
    "correctAnswer": 0,
    "explanation": "کم دباؤ کی پٹیاں وہاں بنتی ہیں جہاں ہوا اوپر اٹھتی ہے۔ یہ خط استوا (خط استوائی کم دباؤ) پر شدید شمسی حرارت کی وجہ سے ہوتا ہے جس سے ہوا پھیلتی اور اوپر اٹھتی ہے، اور ذیلی قطبی علاقوں میں (تقریباً 60° شمال اور جنوب) جہاں ٹھنڈی قطبی ہوا گرم معتدل ہوا سے ملتی ہے، جس سے گرم ہوا اوپر اٹھنے پر مجبور ہوتی ہے۔"
  },
  {
    "id": 907,
    "question": "In these states of India, Rice is a commercial crop (TSTET 29 May 2024)\nہندوستان کی ان ریاستوں میں، چاول ایک تجارتی فصل ہے",
    "options": [
      "Punjab and Haryana\nپنجاب اور ہریانہ",
      "Odisha and West Bengal\nاڈیشہ اور مغربی بنگال",
      "Andhra Pradesh and Telangana\nآندھرا پردیش اور تلنگانہ",
      "West Bengal and Andhra Pradesh\nمغربی بنگال اور آندھرا پردیش"
    ],
    "correctAnswer": 0,
    "explanation": "جبکہ چاول اڈیشہ اور مغربی بنگال جیسی ریاستوں میں ایک بنیادی گزربسر کی فصل ہے، یہ پنجاب اور ہریانہ میں بنیادی طور پر ایک تجارتی (یا نقدی) فصل کے طور پر کاشت کیا جاتا ہے۔ وسیع پیمانے پر آبپاشی اور سبز انقلاب کی وجہ سے، یہ ریاستیں قومی اور بین الاقوامی منڈیوں میں فروخت کے لیے چاول کی بڑی مقدار میں فاضل پیداوار کرتی ہیں۔"
  },
  {
    "id": 908,
    "question": "From among the following, the largest silk producing state in India is (TSTET 29 May 2024)\nمندرجہ ذیل میں سے، ہندوستان میں ریشم پیدا کرنے والی سب سے بڑی ریاست ہے",
    "options": [
      "Assam\nآسام",
      "Karnataka\nکرناٹک",
      "Andhra Pradesh\nآندھرا پردیش",
      "Jammu & Kashmir\nجموں و کشمیر"
    ],
    "correctAnswer": 1,
    "explanation": "کرناٹک ہندوستان میں خام ریشم کا سب سے بڑا پروڈیوسر ہے۔ یہ ریاست خاص طور پر شہتوت کے ریشم کی اعلیٰ پیداوار کے لیے مشہور ہے، جو ملک کی کل ریشم کی پیداوار میں ایک بڑا حصہ ڈالتی ہے۔"
  },
  {
    "id": 909,
    "question": "The famous Kashmir Valley lies in between (TSTET 29 May 2024)\nمشہور وادی کشمیر کس کے درمیان واقع ہے",
    "options": [
      "Dihang Valley and Pir Panjal Range\nدیہانگ وادی اور پیر پنجال سلسلہ",
      "Pir Panjal Range and Zaskar Range\nپیر پنجال سلسلہ اور زسکار سلسلہ",
      "The Mussorie Range and Dihang Valley\nمسوری سلسلہ اور دیہانگ وادی",
      "The Zaskar Range and The Mussorie Range\nزسکار سلسلہ اور مسوری سلسلہ"
    ],
    "correctAnswer": 1,
    "explanation": "وادی کشمیر ایک بین پہاڑی وادی ہے جو جنوب میں چھوٹے ہمالیہ کے پیر پنجال سلسلے اور شمال مشرق میں عظیم ہمالیہ کے زسکار سلسلے کے درمیان واقع ہے۔"
  },
  {
    "id": 910,
    "question": "These mountains are the reason for summer rains and monsoon type of climate in regions that are beyond the Western Ghats of India (TSTET 29 May 2024)\nیہ پہاڑ ہندوستان کے مغربی گھاٹوں سے پرے کے علاقوں میں موسم گرما کی بارشوں اور مون سون قسم کی آب و ہوا کی وجہ ہیں",
    "options": [
      "The Aravali Mountains\nاراولّی پہاڑ",
      "The Purvanchal Hills\nپوروانچل پہاڑیاں",
      "The Eastern Ghats\nمشرقی گھاٹ",
      "The Himalayan Mountains\nہمالیائی پہاڑ"
    ],
    "correctAnswer": 3,
    "explanation": "ہمالیائی پہاڑ ایک اہم موسمیاتی رکاوٹ کے طور پر کام کرتے ہیں۔ وہ نمی سے بھری جنوب مغربی مون سون ہواؤں کا راستہ روکتے ہیں، انہیں اوپر اٹھنے اور ہندوستان کے شمالی میدانوں میں بارش کی صورت میں اپنی نمی چھوڑنے پر مجبور کرتے ہیں۔ یہ ہندوستان کی مون سون آب و ہوا کے لیے بنیادی حیثیت رکھتا ہے۔"
  },
  {
    "id": 911,
    "question": "The positive growth rate of population is observed when (TSTET 29 May 2024)\nA) The birth rate is less than the death rate\nB) The birth rate and the death rate are the same\nC) The birth rate is more than the death rate\nآبادی کی مثبت شرح نمو کب دیکھی جاتی ہے (TSTET 29 May 2024)\nA) جب شرح پیدائش شرح اموات سے کم ہو\nB) جب شرح پیدائش اور شرح اموات برابر ہوں\nC) جب شرح پیدائش شرح اموات سے زیادہ ہو",
    "options": [
      "A & C only",
      "B & C only",
      "A, B & C",
      "C only"
    ],
    "correctAnswer": 3,
    "explanation": "آبادی کی مثبت شرح نمو، جسے قدرتی اضافہ بھی کہا جاتا ہے، اس وقت ہوتی ہے جب ایک مخصوص مدت کے دوران آبادی میں پیدائش کی تعداد اموات کی تعداد سے زیادہ ہو جاتی ہے۔ اگر شرح اموات زیادہ ہو تو نمو منفی ہوتی ہے، اور اگر وہ برابر ہوں تو اس کا نتیجہ صفر آبادی میں نمو ہوتا ہے۔"
  },
  {
    "id": 912,
    "question": "These three states of India are sharing the waters of Tungabhadra river (TSTET 29 May 2024)\nہندوستان کی یہ تین ریاستیں دریائے تنگبھدرا کا پانی بانٹ رہی ہیں",
    "options": [
      "Kerala, Karnataka and Tamil Nadu\nکیرالہ، کرناٹک اور تمل ناڈو",
      "Maharashtra, Karnataka and Andhra Pradesh\nمہاراشٹر، کرناٹک اور آندھرا پردیش",
      "Karnataka, Andhra Pradesh and Telangana\nکرناٹک، آندھرا پردیش اور تلنگانہ",
      "Karnataka, Tamil Nadu and Andhra Pradesh\nکرناٹک، تمل ناڈو اور آندھرا پردیش"
    ],
    "correctAnswer": 2,
    "explanation": "دریائے تنگبھدرا کرناٹک سے بہتا ہے اور پھر کرناٹک، آندھرا پردیش اور تلنگانہ کے درمیان سرحد بناتا ہے۔ تنگبھدرا ڈیم ان تینوں ریاستوں کا ایک مشترکہ منصوبہ ہے، جو اس کا پانی آبپاشی اور بجلی کی پیداوار کے لیے بانٹتی ہیں۔"
  },
  {
    "id": 913,
    "question": "These soils are known as 'Regur' Soils (TSTET 29 May 2024)\nان مٹیوں کو 'ریگڑ' مٹی کے نام سے جانا جاتا ہے",
    "options": [
      "Red Soils\nلال مٹیاں",
      "Black Soils\nکالی مٹیاں",
      "Alluvial Soils\nجلور مٹیاں",
      "Laterite Soils\nلیٹرائٹ مٹیاں"
    ],
    "correctAnswer": 1,
    "explanation": "کالی مٹی کو وسیع پیمانے پر 'ریگڑ مٹی' کے نام سے جانا جاتا ہے۔ یہ اپنی نمی برقرار رکھنے کی اعلی صلاحیت کے لیے مشہور ہیں اور کپاس کی کاشت کے لیے مثالی ہیں، اسی وجہ سے انہیں عام طور پر 'کالی کپاس کی مٹی' بھی کہا جاتا ہے۔"
  },
  {
    "id": 914,
    "question": "As the earth revolves around the sun, earth's axis remains tilted in the same direction throughout the year. It keep points to the (TSTET 29 May 2024)\nجیسے جیسے زمین سورج کے گرد گھومتی ہے، زمین کا محور سال بھر ایک ہی سمت میں جھکا رہتا ہے۔ یہ کس ستارے کی طرف اشارہ کرتا رہتا ہے",
    "options": [
      "Rigel Kent Star\nرجل قنطورس ستارہ",
      "Pole Star\nقطبی ستارہ",
      "Canopus star\nسہیل ستارہ",
      "Capella Star\nعیوق ستارہ"
    ],
    "correctAnswer": 1,
    "explanation": "محوری متوازیت نامی اصول کی وجہ سے، زمین کا محور سورج کے گرد چکر لگاتے ہوئے اپنا جھکاؤ اور سمت برقرار رکھتا ہے۔ محور کا شمالی سرا مسلسل پولارس کی طرف اشارہ کرتا ہے، جسے شمالی ستارہ یا قطبی ستارہ بھی کہا جاتا ہے۔"
  },
  {
    "id": 915,
    "question": "According to National Forest Policy of India (1988), to maintain environmental stability and ecological balance, the total geographical area under tree cover should be a minimum of (TSTET 29 May 2024)\nہندوستان کی قومی جنگلاتی پالیسی (1988) کے مطابق، ماحولیاتی استحکام اور ماحولیاتی توازن کو برقرار رکھنے کے لیے، درختوں کے احاطہ میں کل جغرافیائی رقبہ کم از کم کتنا ہونا چاہیے",
    "options": [
      "16.4%",
      "33.3%",
      "22.7%",
      "46.4%"
    ],
    "correctAnswer": 1,
    "explanation": "قومی جنگلاتی پالیسی 1988 یہ شرط عائد کرتی ہے کہ قومی ہدف یہ ہونا چاہئے کہ ماحولیاتی استحکام اور ماحولیاتی توازن کو یقینی بنانے کے لئے ملک کے کل زمینی رقبے کا کم از کم ایک تہائی (یا 33.3%) جنگلات یا درختوں کے احاطہ میں ہو۔"
  },
  {
    "id": 916,
    "question": "The following crop is also known as golden fibre (TSTET 29 May 2024)\nمندرجہ ذیل فصل کو سنہری ریشہ بھی کہا جاتا ہے",
    "options": [
      "Jute\nپٹ سن",
      "Silk\nریشم",
      "Groundnut\nمونگ پھلی",
      "Jowar\nجوار"
    ],
    "correctAnswer": 0,
    "explanation": "پٹ سن کو اس کی چمکدار، زرد بھوری شکل اور اس کی بے پناہ اقتصادی قدر کی وجہ سے 'سنہری ریشہ' کہا جاتا ہے۔ یہ ایک قدرتی ریشہ ہے جو بوری، ٹاٹ، اور گنی بیگ جیسی مصنوعات بنانے کے لیے استعمال ہوتا ہے۔"
  },
  {
    "id": 917,
    "question": "From among the following, identify the odd one (TSTET 29 May 2024)\nمندرجہ ذیل میں سے، مختلف چیز کی شناخت کریں",
    "options": [
      "Jute textile\nپٹ سن کی ٹیکسٹائل",
      "Sugar industry\nچینی کی صنعت",
      "Fertilizer Industry\nکھاد کی صنعت",
      "Cotton textile\nکپاس کی ٹیکسٹائل"
    ],
    "correctAnswer": 2,
    "explanation": "پٹ سن، چینی، اور کپاس کی صنعتیں سب زرعی بنیادوں پر قائم صنعتیں ہیں، جس کا مطلب ہے کہ وہ اپنے بنیادی خام مال کے طور پر زرعی مصنوعات پر عمل کرتی ہیں۔ کھاد کی صنعت ایک کیمیائی یا معدنی بنیاد پر قائم صنعت ہے، جو خام مال کے طور پر کیمیائی مرکبات اور معدنیات کا استعمال کرتی ہے۔"
  },
  {
    "id": 918,
    "question": "Identify the FALSE statement related to demand draft (TSTET 29 May 2024)\nڈیمانڈ ڈرافٹ سے متعلق غلط بیان کی نشاندہی کریں",
    "options": [
      "It may sometimes be returned due to insufficient funds by Banks\nیہ بعض اوقات بینکوں کی طرف سے ناکافی فنڈز کی وجہ سے واپس کیا جا سکتا ہے",
      "Bank collects some charges to issue the demand draft\nبینک ڈیمانڈ ڈرافٹ جاری کرنے کے لیے کچھ چارجز وصول کرتا ہے",
      "Demand draft is an optional money\nڈیمانڈ ڈرافٹ ایک اختیاری رقم ہے",
      "It is issued by any commercial bank\nیہ کسی بھی تجارتی بینک کی طرف سے جاری کیا جاتا ہے"
    ],
    "correctAnswer": 0,
    "explanation": "ڈیمانڈ ڈرافٹ (DD) ایک پری پیڈ قابل تبادلہ آلہ ہے۔ فنڈز بینک کی طرف سے خریدار سے DD جاری کرتے وقت وصول کیے جاتے ہیں۔ لہذا، اسے 'ناکافی فنڈز' کے لیے مسترد نہیں کیا جا سکتا، جو اسے ادائیگی کا ایک بہت محفوظ طریقہ بناتا ہے۔"
  },
  {
    "id": 919,
    "question": "Consider the following statements and find the correct answer from the given options (TSTET 29 May 2024)\nA) Mild inflation stimulates production as it increases profit margin of entrepreneurs\nB) High inflation hinders production\nمندرجہ ذیل بیانات پر غور کریں اور دیے گئے اختیارات میں سے صحیح جواب تلاش کریں (TSTET 29 May 2024)\nA) ہلکی افراط زر پیداوار کو متحرک کرتی ہے کیونکہ یہ کاروباریوں کے منافع کے مارجن کو بڑھاتی ہے\nB) زیادہ افراط زر پیداوار میں رکاوٹ بنتی ہے",
    "options": [
      "Only 'A' is true\nصرف 'A' سچ ہے",
      "Only 'B' is true\nصرف 'B' سچ ہے",
      "Both 'A' and 'B' are true\n'A' اور 'B' دونوں سچ ہیں",
      "Neither 'A' nor 'B' are true\nنہ 'A' اور نہ ہی 'B' سچ ہے"
    ],
    "correctAnswer": 2,
    "explanation": "دونوں بیانات درست ہیں۔ ایک ہلکی، رینگتی ہوئی افراط زر پروڈیوسروں کو زیادہ منافع کے مارجن کی وجہ سے سرمایہ کاری کرنے اور پیداوار بڑھانے کی ترغیب دے سکتی ہے۔ اس کے برعکس، زیادہ افراط زر (تیز رفتار یا ہائپر انفلیشن) اقتصادی غیر یقینی صورتحال پیدا کرتی ہے، قوت خرید کو کم کرتی ہے، اور منصوبہ بندی میں خلل ڈالتی ہے، اس طرح پیداوار اور اقتصادی ترقی میں رکاوٹ بنتی ہے۔"
  },
  {
    "id": 920,
    "question": "One of the following is NOT the measure of Human Development Index (TSTET 29 May 2024)\nمندرجہ ذیل میں سے ایک انسانی ترقی کے اشاریہ کا پیمانہ نہیں ہے",
    "options": [
      "Social inequality\nسماجی عدم مساوات",
      "Literacy\nخواندگی",
      "Infant mortality\nبچوں کی شرح اموات",
      "Life expectancy\nمتوقع عمر"
    ],
    "correctAnswer": 0,
    "explanation": "انسانی ترقی کا اشاریہ (HDI) تین کلیدی جہتوں کا استعمال کرتے ہوئے ترقی کی پیمائش کرتا ہے: صحت (پیدائش کے وقت متوقع عمر)، تعلیم (اسکولنگ کے اوسط اور متوقع سال)، اور معیار زندگی (فی کس GNI)۔ سماجی عدم مساوات معیاری HDI کا براہ راست جزو نہیں ہے، حالانکہ عدم مساوات سے ایڈجسٹ شدہ HDI (IHDI) ایک علیحدہ پیمائش کے طور پر موجود ہے۔"
  },
  {
    "id": 921,
    "question": "National institute of Nutrition is located at (TSTET 29 May 2024)\nنیشنل انسٹی ٹیوٹ آف نیوٹریشن کہاں واقع ہے",
    "options": [
      "Banglore\nبنگلور",
      "Kolkata\nکولکتہ",
      "Hyderabad\nحیدرآباد",
      "New Delhi\nنئی دہلی"
    ],
    "correctAnswer": 2,
    "explanation": "نیشنل انسٹی ٹیوٹ آف نیوٹریشن (NIN)، جو انڈین کونسل آف میڈیکل ریسرچ (ICMR) کے تحت ایک اہم تحقیقی ادارہ ہے، حیدرآباد، تلنگانہ میں واقع ہے۔"
  },
  {
    "id": 922,
    "question": "The aim of World Trade Organisation is to (TSTET 29 May 2024)\nعالمی تجارتی تنظیم کا مقصد ہے",
    "options": [
      "Liberalise international trade\nبین الاقوامی تجارت کو آزاد کرنا",
      "Bring economic equality in the world\nدنیا میں اقتصادی مساوات لانا",
      "Giving support to developing countries economically\nترقی پذیر ممالک کو اقتصادی طور پر مدد فراہم کرنا",
      "Provide better quality of life for under developed countries\nکم ترقی یافتہ ممالک کے لیے بہتر معیار زندگی فراہم کرنا"
    ],
    "correctAnswer": 0,
    "explanation": "عالمی تجارتی تنظیم (WTO) کا بنیادی مقصد ٹیرف اور تجارت کی دیگر رکاوٹوں کو کم کرنا ہے، اس طرح بین الاقوامی تجارت کو فروغ دینا اور آزاد کرنا ہے۔ یہ تجارتی معاہدوں پر گفت و شنید اور رکن ممالک کے درمیان تنازعات کو حل کرنے کے لیے ایک فورم کے طور پر کام کرتا ہے۔"
  },
  {
    "id": 923,
    "question": "Availability of food grains per person per day is equal to: (TSTET 29 May 2024)\nفی شخص فی دن غذائی اجناس کی دستیابی اس کے برابر ہے:",
    "options": [
      "(Availability of food grains for the year + Population) / 365",
      "Availability of food grains for the year + Population",
      "(Population + Availability of food grains for the year) / 365",
      "Population + Availability of food grains for the year"
    ],
    "correctAnswer": 0,
    "explanation": "نوٹ: فراہم کردہ تمام اختیارات ریاضی کے لحاظ سے غلط ہیں۔ فی شخص فی دن غذائی اجناس کی دستیابی کا حساب لگانے کا صحیح فارمولا یہ ہے: (سال کے لیے غذائی اجناس کی کل دستیابی ÷ کل آبادی) ÷ 365۔ امتحانی پرچے میں سوال ناقص معلوم ہوتا ہے کیونکہ کوئی بھی انتخاب صحیح حساب کی عکاسی نہیں کرتا۔"
  },
  {
    "id": 924,
    "question": "Hausa Fulani, Igbo and Yeruba are the tribes of this African country (TSTET 29 May 2024)\nہاؤسا فولانی، اِگبو اور یروبا اس افریقی ملک کے قبائل ہیں",
    "options": [
      "Congo\nکانگو",
      "Nigeria\nنائجیریا",
      "Sudan\nسوڈان",
      "South Africa\nجنوبی افریقہ"
    ],
    "correctAnswer": 1,
    "explanation": "ہاؤسا-فولانی، یوروبا، اور اِگبو نائجیریا کے تین سب سے بڑے اور نمایاں نسلی گروہ ہیں، جو ملک کی آبادی اور سیاست میں اہم کردار ادا کرتے ہیں۔"
  },
  {
    "id": 925,
    "question": "One among the following sector DOES NOT produce any tangible goods (TSTET 29 May 2024)\nمندرجہ ذیل شعبوں میں سے ایک کوئی ٹھوس سامان پیدا نہیں کرتا ہے",
    "options": [
      "Service sector\nخدمات کا شعبہ",
      "Primary sector\nبنیادی شعبہ",
      "Manufacturing sector\nمینوفیکچرنگ سیکٹر",
      "Secondary sector\nثانوی شعبہ"
    ],
    "correctAnswer": 0,
    "explanation": "معیشت کا خدمات کا شعبہ (یا تیسرا شعبہ) ٹھوس سامان کی بجائے خدمات کی پیداوار سے پہچانا جاتا ہے۔ مثالوں میں بینکنگ، انشورنس، تعلیم، صحت کی دیکھ بھال، اور نقل و حمل شامل ہیں۔ بنیادی اور ثانوی شعبے ٹھوس سامان جیسے فصلیں، معدنیات، اور تیار شدہ مصنوعات پیدا کرتے ہیں۔"
  },
  {
    "id": 926,
    "question": "'Dhamma' is the (TSTET 29 May 2024)\n'دھم' ہے",
    "options": [
      "Sanskrit word for the Prakrit term Dharma\nپراکرت اصطلاح 'دھرما' کے لیے سنسکرت کا لفظ",
      "Prakrit word for the Sanskrit term Dharma\nسنسکرت اصطلاح 'دھرما' کے لیے پراکرت کا لفظ",
      "Hindi word for the Sanskrit term Dharma\nسنسکرت اصطلاح 'دھرما' کے لیے ہندی کا لفظ",
      "Odissi word for the Sanskrit term Dharma\nسنسکرت اصطلاح 'دھرما' کے لیے اوڈیسی کا لفظ"
    ],
    "correctAnswer": 1,
    "explanation": "لفظ 'دھم' سنسکرت کے لفظ 'دھرما' کا پراکرت زبان میں مترادف ہے۔ شہنشاہ اشوک نے یہ اصطلاح اپنے فرمانوں میں استعمال کی، جو پراکرت میں لکھے گئے تھے، تاکہ وہ اپنی اخلاقی اور اخلاقی طرز عمل کی پالیسی کو فروغ دے سکیں۔"
  },
  {
    "id": 927,
    "question": "In Odisha, the language spoken by the Bondo tribals is called as (TSTET 29 May 2024)\nاڈیشہ میں، بونڈو قبائلیوں کی بولی جانے والی زبان کو کیا کہا جاتا ہے",
    "options": [
      "Remo\nریمو",
      "Chenchu\nچینچو",
      "Sora\nسورا",
      "Santhali\nسنتھالی"
    ],
    "correctAnswer": 0,
    "explanation": "بونڈو اڈیشہ کے ملکنگری ضلع کی پہاڑیوں میں رہنے والی ایک قبائلی برادری ہے۔ وہ اپنی زبان بولتے ہیں جسے ریمو کہا جاتا ہے، جو آسٹرو-ایشیائی زبان کے خاندان کی منڈا شاخ سے تعلق رکھتی ہے۔"
  },
  {
    "id": 928,
    "question": "Among the following, this Mahajanapadha had a Gana form of Government (TSTET 29 May 2024)\nمندرجہ ذیل میں سے، اس مہاجن پد میں 'گنا' طرز کی حکومت تھی",
    "options": [
      "Magadha\nمگدھ",
      "Asmaka\nاسمکا",
      "Gandhara\nگندھارا",
      "Vajji\nوجی"
    ],
    "correctAnswer": 3,
    "explanation": "جبکہ 16 مہاجن پدوں میں سے زیادہ تر بادشاہتیں تھیں، وجی ایک قابل ذکر استثناء تھا۔ یہ ایک 'گنا' یا 'سنگھا' تھا، جو ایک اولیگارکی یا جمہوریہ تھا، جہاں اقتدار ایک موروثی بادشاہ کے بجائے قبیلوں کی ایک کنفیڈریسی کے پاس تھا۔"
  },
  {
    "id": 929,
    "question": "The famous story about a young boy called Nachiketha is from a book called the (TSTET 29 May 2024)\nنچیکیتا نامی ایک نوجوان لڑکے کے بارے میں مشہور کہانی کس کتاب سے ہے",
    "options": [
      "Chandogya Upanishad\nچھاندوگیہ اپنشد",
      "Taitriya Upanishad\nتیتریہ اپنشد",
      "Aitareya Upanishad\nایتریہ اپنشد",
      "Kathapanishad\nکتھوپनिषद्"
    ],
    "correctAnswer": 3,
    "explanation": "لڑکے نچیکیتا اور ہندو موت کے دیوتا یم کے درمیان فلسفیانہ مکالمہ کتھا اپنشد کا مرکزی موضوع ہے، جسے کٹھوپनिषद् بھی کہا جاتا ہے۔ یہ سب سے اہم اور وسیع پیمانے پر مطالعہ کیے جانے والے اپنشدوں میں سے ایک ہے۔"
  },
  {
    "id": 930,
    "question": "The teachings of Buddha and his followers have been compiled in these collections called (TSTET 29 May 2024)\nبدھ اور ان کے پیروکاروں کی تعلیمات کو ان مجموعوں میں مرتب کیا گیا ہے جنہیں کہا جاتا ہے",
    "options": [
      "The Buddha Charita, the Sutta Pitaka and Raja tharangini\nبدھ چرت، سُت پٹک اور راج ترنگنی",
      "The Sutta Pitaka, the Abhidhamma Pitaka and Vinaya Pitaka\nسُت پٹک، ابھیدھم پٹک اور ونے پٹک",
      "Rajatharangini. Abhidhamma Pitaka and the Sutta Pitaka\nراج ترنگنی، ابھیدھم پٹک اور سُت پٹک",
      "the Jataka Stories, the Abhidhamma Pitaka and Vinaya Pitaka\nجاتک کہانیاں، ابھیدھم پٹک اور ونے پٹک"
    ],
    "correctAnswer": 1,
    "explanation": "ابتدائی بدھ مت کے مذہبی صحیفوں کو تری پٹک، یا 'تین ٹوکریاں' کے نام سے جانا جاتا ہے۔ یہ سُت پٹک (بدھ کے خطبات)، ونے پٹک (راہبانہ زندگی کے اصول)، اور ابھیدھم پٹک (فلسفیانہ اور نفسیاتی تجزیہ) پر مشتمل ہیں۔"
  },
  {
    "id": 931,
    "question": "In the American War of Independence, France helped the colonies against England because of this rivalry between Britain and France (TSTET 29 May 2024)\nامریکی جنگ آزادی میں، فرانس نے برطانیہ اور فرانس کے درمیان اس دشمنی کی وجہ سے انگلینڈ کے خلاف کالونیوں کی مدد کی",
    "options": [
      "in establishing colonial empire\nنوآبادیاتی سلطنت قائم کرنے میں",
      "In establishing democratic form of Government in United States of America\nریاستہائے متحدہ امریکہ میں جمہوری طرز حکومت قائم کرنے میں",
      "In order to gain political power in United States of America\nریاستہائے متحدہ امریکہ میں سیاسی طاقت حاصل کرنے کے لیے",
      "In establishing colonies in South America only\nصرف جنوبی امریکہ میں کالونیاں قائم کرنے میں"
    ],
    "correctAnswer": 0,
    "explanation": "امریکی کالونیوں کی حمایت کرنے کا فرانس کا فیصلہ بنیادی طور پر عالمی طاقت اور نوآبادیاتی غلبے کے لیے برطانیہ کے ساتھ اس کی دیرینہ جغرافیائی سیاسی دشمنی کی وجہ سے تھا۔ برطانیہ کو کمزور کر کے، فرانس نے سات سالہ جنگ میں اپنی شکست کا بدلہ لینے اور اپنی بین الاقوامی ساکھ کو دوبارہ حاصل کرنے کی کوشش کی۔"
  },
  {
    "id": 932,
    "question": "The religious reform movement which led to the rise of a new section of Christians called as protestants (TSTET 29 May 2024)\nوہ مذہبی اصلاحی تحریک جس نے پروٹسٹنٹ کہلانے والے عیسائیوں کے ایک نئے طبقے کو جنم دیا",
    "options": [
      "Renaissance\nنشاۃ ثانیہ",
      "Reformation\nاصلاحِ کلیسیا",
      "Counter Reformation\nاصلاحِ کلیسیا کے خلاف تحریک",
      "Political Reformation\nسیاسی اصلاح"
    ],
    "correctAnswer": 1,
    "explanation": "پروٹسٹنٹ اصلاحِ کلیسیا 16 ویں صدی کی ایک مذہبی، سیاسی اور ثقافتی تحریک تھی جس نے کیتھولک یورپ کو تقسیم کر دیا۔ اس نے پروٹسٹنٹ ازم کے قیام کا باعث بنا، جو عیسائیت کی ایک نئی شاخ تھی، جس میں مارٹن لوتھر اور جان کیلون جیسی شخصیات نے پوپ اور کیتھولک چرچ کے اختیار کو چیلنج کیا۔"
  },
  {
    "id": 933,
    "question": "From among the following, this person was appointed by the British East India Company to oversaw the entire administration in Hyderabad State (TSTET 29 May 2024)\nمندرجہ ذیل میں سے، اس شخص کو برطانوی ایسٹ انڈیا کمپنی نے ریاست حیدرآباد میں پوری انتظامیہ کی نگرانی کے لیے مقرر کیا تھا",
    "options": [
      "Collector\nکلکٹر",
      "Governor General\nگورنر جنرل",
      "Viceroy\nوائسرائے",
      "Resident\nریزیڈنٹ"
    ],
    "correctAnswer": 3,
    "explanation": "ذیلی اتحاد کی پالیسی کے تحت، برطانوی ایسٹ انڈیا کمپنی نے ہندوستانی شاہی ریاستوں کی عدالتوں میں ایک 'ریزیڈنٹ' تعینات کیا۔ ریزیڈنٹ ایک برطانوی اہلکار تھا جو کمپنی کی نمائندگی کرتا تھا اور ریاست کی انتظامیہ اور خارجہ پالیسی پر نمایاں اثر و رسوخ رکھتا تھا۔"
  },
  {
    "id": 934,
    "question": "During the first 20 years, the Indian National Congress was led by the leaders who were known as (TSTET 29 May 2024)\nپہلے 20 سالوں کے دوران، انڈین نیشنل کانگریس کی قیادت ان رہنماؤں نے کی جو کہلاتے تھے",
    "options": [
      "Extremist Nationalists\nانتہا پسند قوم پرست",
      "Gandhian Nationalists\nگاندھیائی قوم پرست",
      "Moderate nationalists\nاعتدال پسند قوم پرست",
      "Socialists and Economists\nسوشلسٹ اور ماہرین اقتصادیات"
    ],
    "correctAnswer": 2,
    "explanation": "انڈین نیشنل کانگریس کا ابتدائی مرحلہ (تقریباً 1885-1905) 'اعتدال پسند' کے نام سے جانے والے رہنماؤں کے زیر تسلط تھا۔ وہ آئینی احتجاج اور برطانوی حکمرانی کے ڈھانچے کے اندر بتدریج اصلاحات پر یقین رکھتے تھے، جس کے لیے وہ درخواستوں اور اپیلوں جیسے طریقے استعمال کرتے تھے۔"
  },
  {
    "id": 935,
    "question": "16th August, 1946 was announced as the 'Direct Action Day' by (TSTET 29 May 2024)\n16 اگست 1946 کو 'یوم راست اقدام' کا اعلان کس نے کیا تھا",
    "options": [
      "Indian National Congress\nانڈین نیشنل کانگریس",
      "Muslim League\nمسلم لیگ",
      "Cabinet Mission\nکابینہ مشن",
      "Congress Working Committee\nکانگریس ورکنگ کمیٹی"
    ],
    "correctAnswer": 1,
    "explanation": "محمد علی جناح کی قیادت میں مسلم لیگ نے کابینہ مشن کے ساتھ مذاکرات کی ناکامی کے بعد، پاکستان کے ایک علیحدہ مسلم قوم کے اپنے مطالبے کو زبردستی منوانے کے لیے 16 اگست 1946 کو 'یوم راست اقدام' کا اعلان کیا۔"
  },
  {
    "id": 936,
    "question": "The last and the most popular ruler of the Qutub Shahi Dynasty was (TSTET 29 May 2024)\nقطب شاہی خاندان کا آخری اور سب سے مقبول حکمران تھا",
    "options": [
      "Abul Hasan Tanashah\nابوالحسن تاناشاہ",
      "Abdullah Qutub Shah\nعبداللہ قطب شاہ",
      "Mohd. Qutub Shah\nمحمد قطب شاہ",
      "Mohd. Quli Qutub Shah\nمحمد قلی قطب شاہ"
    ],
    "correctAnswer": 0,
    "explanation": "ابوالحسن تاناشاہ قطب شاہی خاندان کا آٹھواں اور آخری حکمران تھا۔ وہ اپنی سیکولرازم اور فنون کی سرپرستی کے لیے ایک مقبول حکمران تھا، لیکن اس کا دور حکومت 1687 میں مغل شہنشاہ اورنگزیب کے ہاتھوں گولکنڈہ کی فتح کے ساتھ ختم ہوا۔"
  },
  {
    "id": 937,
    "question": "Identify the INCORRECT option regarding the provisions adapted from constitutions of different countries (TSTET 29 May 2024)\nمختلف ممالک کے آئین سے اپنائی گئی دفعات کے حوالے سے غلط آپشن کی نشاندہی کریں",
    "options": [
      "British Constitution - Parliamentary Form of Government\nبرطانوی آئین - پارلیمانی طرز حکومت",
      "French Constitution - Power of Judicial Review and independence of the judiciary\nفرانسیسی آئین - عدالتی نظرثانی کا اختیار اور عدلیہ کی آزادی",
      "Irish Constitution - Directive Principles of State Policy\nآئرش آئین - ریاستی پالیسی کے رہنما اصول",
      "United States Constitution - Charter of Fundamental Rights\nریاستہائے متحدہ کا آئین - بنیادی حقوق کا چارٹر"
    ],
    "correctAnswer": 1,
    "explanation": "ہندوستانی آئین میں 'عدالتی نظرثانی کا اختیار' اور 'عدلیہ کی آزادی' کے تصورات ریاستہائے متحدہ کے آئین سے لیے گئے تھے، نہ کہ فرانس سے۔ آزادی، مساوات، اور بھائی چارے کے نظریات فرانسیسی آئین سے اپنائے گئے تھے۔ دیگر جوڑے صحیح طور پر مماثل ہیں۔"
  },
  {
    "id": 938,
    "question": "'Right to property' was deleted from the list of Fundamental Rights by (TSTET 29 May 2024)\n'جائیداد کا حق' کو بنیادی حقوق کی فہرست سے کس ترمیم کے ذریعے حذف کیا گیا",
    "options": [
      "the 44th Amendment Act, 1976\n44 ویں ترمیمی ایکٹ، 1976",
      "the 44th Amendment Act, 1978\n44 ویں ترمیمی ایکٹ، 1978",
      "the 42nd Amendment Act, 1978\n42 ویں ترمیمی ایکٹ، 1978",
      "the 42nd Amendment Act, 1976\n42 ویں ترمیمی ایکٹ، 1976"
    ],
    "correctAnswer": 1,
    "explanation": "1978 کے 44 ویں ترمیمی ایکٹ نے جائیداد کے حق کو بنیادی حقوق کی فہرست سے (سابقہ آرٹیکل 31) ہٹا دیا اور اسے آرٹیکل 300-A کے تحت ایک آئینی/قانونی حق کے طور پر دوبارہ درجہ بندی کیا۔"
  },
  {
    "id": 939,
    "question": "This article of the Indian Constitution provides an independent Election Commission (TSTET 29 May 2024)\nہندوستانی آئین کا یہ آرٹیکل ایک آزاد الیکشن کمیشن فراہم کرتا ہے",
    "options": [
      "Article 334\nآرٹیکل 334",
      "Article 324\nآرٹیکل 324",
      "Article 314\nآرٹیکل 314",
      "Article 344\nآرٹیکل 344"
    ],
    "correctAnswer": 1,
    "explanation": "ہندوستانی آئین کا آرٹیکل 324 پارلیمنٹ، ریاستی مقننہ، اور صدر اور نائب صدر کے دفاتر کے انتخابات کی نگرانی، ہدایت، اور کنٹرول کے لیے ذمہ دار ایک آزاد الیکشن کمیشن کے قیام کی سہولت فراہم کرتا ہے۔"
  },
  {
    "id": 940,
    "question": "The maximum gap between two sessions of Parliament is (TSTET 29 May 2024)\nپارلیمنٹ کے دو اجلاسوں کے درمیان زیادہ سے زیادہ وقفہ ہے",
    "options": [
      "One year\nایک سال",
      "Six months\nچھ ماہ",
      "Three months\nتین ماہ",
      "Nine months\nنو ماہ"
    ],
    "correctAnswer": 1,
    "explanation": "آئین کے آرٹیکل 85 کے مطابق، پارلیمنٹ کے دو مسلسل اجلاسوں کے درمیان وقفہ چھ ماہ سے زیادہ نہیں ہو سکتا۔ اس کا مطلب ہے کہ پارلیمنٹ کا سال میں کم از کم دو بار اجلاس ہونا ضروری ہے۔"
  },
  {
    "id": 941,
    "question": "Identify the correct statement about Parliamentary System of Government (TSTET 29 May 2024)\nپارلیمانی نظام حکومت کے بارے میں صحیح بیان کی نشاندہی کریں",
    "options": [
      "The judiciary is responsible to the parliament\nعدلیہ پارلیمنٹ کے سامنے جوابدہ ہے",
      "The executive is responsible to the parliament\nانتظامیہ پارلیمنٹ کے سامنے جوابدہ ہے",
      "The parliament is responsible to the executive\nپارلیمنٹ انتظامیہ کے سامنے جوابدہ ہے",
      "The parliament is responsible to the judiciary\nپارلیمنٹ عدلیہ کے سامنے جوابدہ ہے"
    ],
    "correctAnswer": 1,
    "explanation": "پارلیمانی نظام کا ایک بنیادی اصول انتظامیہ کی مقننہ کے سامنے اجتماعی ذمہ داری ہے۔ وزراء کی کونسل (انتظامیہ) صرف اس وقت تک اقتدار میں رہتی ہے جب تک اسے پارلیمنٹ (مقننہ)، خاص طور پر ایوان زیریں کا اعتماد حاصل ہو۔"
  },
  {
    "id": 942,
    "question": "This amendment Act is the most comprehensive amendment of the Indian Constitution (TSTET 29 May 2024)\nیہ ترمیمی ایکٹ ہندوستانی آئین کی سب سے جامع ترمیم ہے",
    "options": [
      "86th amendment Act\n86 واں ترمیمی ایکٹ",
      "42nd amendment Act\n42 واں ترمیمی ایکٹ",
      "73rd amendment Act\n73 واں ترمیمی ایکٹ",
      "52nd amendment Act\n52 واں ترمیمی ایکٹ"
    ],
    "correctAnswer": 1,
    "explanation": "42 ویں ترمیمی ایکٹ، 1976 کو اکثر 'منی آئین' کہا جاتا ہے کیونکہ اس نے آئین میں بڑی تعداد میں اور اہم تبدیلیاں کیں، جن میں تمہید، بنیادی فرائض، اور ریاستی پالیسی کے رہنما اصول شامل ہیں۔"
  },
  {
    "id": 943,
    "question": "The following is in the concurrent list (TSTET 29 May 2024)\nمندرجہ ذیل ہم آہنگ فہرست میں ہے",
    "options": [
      "Defense\nدفاع",
      "Railways\nریلوے",
      "National Highways\nقومی شاہراہیں",
      "Education\nتعلیم"
    ],
    "correctAnswer": 3,
    "explanation": "ہم آہنگ فہرست میں وہ مضامین شامل ہیں جن پر مرکزی اور ریاستی دونوں حکومتیں قانون سازی کر سکتی ہیں۔ تعلیم کو 1976 کے 42 ویں ترمیمی ایکٹ کے ذریعے ریاستی فہرست سے ہم آہنگ فہرست میں منتقل کیا گیا تھا۔ دفاع، ریلوے، اور قومی شاہراہیں یونین کی فہرست میں ہیں۔"
  },
  {
    "id": 944,
    "question": "This article lays down the framework for the establishment of Panchayats at the village (TSTET 29 May 2024)\nیہ آرٹیکل گاؤں کی سطح پر پنچایتوں کے قیام کا فریم ورک فراہم کرتا ہے",
    "options": [
      "224",
      "243",
      "292",
      "221"
    ],
    "correctAnswer": 1,
    "explanation": "آئین کا حصہ IX، جو آرٹیکل 243 سے شروع ہوتا ہے، پنچایتی راج نظام کے لیے فریم ورک فراہم کرتا ہے۔ خاص طور پر، آرٹیکل 243B ریاستوں کے لیے گاؤں، درمیانی، اور ضلعی سطحوں پر پنچایتوں کا تین سطحی نظام قائم کرنا لازمی بناتا ہے۔"
  },
  {
    "id": 945,
    "question": "The following one is NOT an organ of the United Nations Organisation (TSTET 29 May 2024)\nمندرجہ ذیل میں سے ایک اقوام متحدہ کی تنظیم کا عضو نہیں ہے",
    "options": [
      "The World Trade Organization\nعالمی تجارتی تنظیم",
      "The Trusteeship Council\nٹرسٹی شپ کونسل",
      "The Economic and Social Council\nاقتصادی اور سماجی کونسل",
      "The International Court of Justice\nبین الاقوامی عدالت انصاف"
    ],
    "correctAnswer": 0,
    "explanation": "اقوام متحدہ کے چھ بنیادی اعضاء جنرل اسمبلی، سلامتی کونسل، اقتصادی و سماجی کونسل (ECOSOC)، ٹرسٹی شپ کونسل، بین الاقوامی عدالت انصاف، اور سیکرٹریٹ ہیں۔ عالمی تجارتی تنظیم (WTO) ایک علیحدہ بین الاقوامی ادارہ ہے اور اقوام متحدہ کی ایک خصوصی ایجنسی ہے، نہ کہ کوئی بنیادی عضو۔"
  },
  {
    "id": 946,
    "question": "The following one is NOT a feature of Directive Principles of State Policy (TSTET 29 May 2024)\nمندرجہ ذیل میں سے ایک ریاستی پالیسی کے رہنما اصولوں کی خصوصیت نہیں ہے",
    "options": [
      "They promote social, economic and political justice\nوہ سماجی، اقتصادی اور سیاسی انصاف کو فروغ دیتے ہیں",
      "They are directed towards the establishment of a welfare state\nوہ ایک فلاحی ریاست کے قیام کی طرف ہدایت کرتے ہیں",
      "They lay down the principles which should guide the government in framing laws and policies\nوہ ان اصولوں کو وضع کرتے ہیں جو حکومت کو قوانین اور پالیسیاں بنانے میں رہنمائی کریں",
      "They are guaranteed to the citizen given by constitution\nوہ آئین کی طرف سے شہریوں کو ضمانت دی گئی ہے"
    ],
    "correctAnswer": 3,
    "explanation": "بنیادی حقوق اور رہنما اصولوں کے درمیان ایک کلیدی فرق یہ ہے کہ مؤخر الذکر غیر عدالتی ہیں۔ اس کا مطلب ہے کہ وہ قانونی طور پر قابل نفاذ نہیں ہیں اور نہ ہی عدالتوں کی طرف سے ان کی ضمانت دی گئی ہے۔ وہ حکومت کے لیے اخلاقی اور سیاسی رہنما خطوط کے طور پر کام کرتے ہیں لیکن شہری انہیں حق کے طور پر دعویٰ نہیں کر سکتے۔"
  },
  {
    "id": 947,
    "question": "In the democracy, political equality is required to ensure the following (TSTET 29 May 2024)\nجمہوریت میں، مندرجہ ذیل کو یقینی بنانے کے لیے سیاسی مساوات کی ضرورت ہے",
    "options": [
      "Promotion of economic development and prosperity\nاقتصادی ترقی اور خوشحالی کا فروغ",
      "Every citizen has an equal right to vote and participate in decision-making\nہر شہری کو ووٹ دینے اور فیصلہ سازی میں حصہ لینے کا مساوی حق ہے",
      "Religious freedom for all citizens\nتمام شہریوں کے لیے مذہبی آزادی",
      "Freedom to choose employment and profession\nروزگار اور پیشہ منتخب کرنے کی آزادی"
    ],
    "correctAnswer": 1,
    "explanation": "سیاسی مساوات جمہوریت کا مرکز ہے، جو 'ایک شخص، ایک ووٹ، ایک قدر' کے اصول سے مجسم ہے۔ یہ یقینی بناتا ہے کہ ہر بالغ شہری، اپنے پس منظر سے قطع نظر، ووٹ دینے اور سیاسی فیصلہ سازی کے عمل میں حصہ لینے کا مساوی حق رکھتا ہے۔"
  },
  {
    "id": 948,
    "question": "The following country is NOT a member of commonwealth (TSTET 29 May 2024)\nمندرجہ ذیل ملک دولت مشترکہ کا رکن نہیں ہے",
    "options": [
      "Australia\nآسٹریلیا",
      "India\nہندوستان",
      "China\nچین",
      "New Zealand\nنیوزی لینڈ"
    ],
    "correctAnswer": 2,
    "explanation": "دولت مشترکہ کی اقوام ان ممالک کی ایک رضاکارانہ انجمن ہے جو زیادہ تر برطانوی سلطنت کے سابقہ علاقے ہیں۔ ہندوستان، آسٹریلیا، اور نیوزی لینڈ اس کے رکن ہیں۔ چین کبھی بھی برطانوی سلطنت کا حصہ نہیں تھا اور دولت مشترکہ کا رکن نہیں ہے۔"
  },
  {
    "id": 949,
    "question": "Which of the following statements are true related to features of social studies? (TSTET 29 May 2024)\nA) Social studies is a realistic course\nB) Social studies subject is a mixture rather than compound\nC) Social studies is a human study\nمندرجہ ذیل میں سے کون سے بیانات سماجی علوم کی خصوصیات سے متعلق درست ہیں؟ (TSTET 29 May 2024)\nA) سماجی علوم ایک حقیقت پسندانہ کورس ہے\nB) سماجی علوم کا مضمون مرکب کے بجائے ایک آمیزہ ہے\nC) سماجی علوم ایک انسانی مطالعہ ہے",
    "options": [
      "A & C only",
      "B & C only",
      "A & B only",
      "A, B & C"
    ],
    "correctAnswer": 0,
    "explanation": "بیانات A اور C درست ہیں۔ سماجی علوم ایک حقیقت پسندانہ کورس ہے کیونکہ یہ حقیقی زندگی کے انسانی تعاملات اور معاشرتی ڈھانچے سے متعلق ہے۔ یہ بنیادی طور پر ایک انسانی مطالعہ بھی ہے، جو لوگوں اور ان کے ماحول کے ساتھ ان کے تعلقات پر توجہ مرکوز کرتا ہے۔ بیان B پر بحث کی جاتی ہے، لیکن جدید تدریسیات سماجی علوم کو ایک مربوط میدان (ایک مرکب) کے طور پر دیکھتی ہے جو مختلف سماجی علوم سے علم کی ترکیب کرتا ہے، نہ کہ صرف ایک سادہ آمیزہ۔"
  },
  {
    "id": 950,
    "question": "The study of life and contributions of Swami Vivekananda leads to development of this value in students (TSTET 29 May 2024)\nسوامی ویویکانند کی زندگی اور خدمات کا مطالعہ طلباء میں اس قدر کی نشوونما کا باعث بنتا ہے",
    "options": [
      "Moral value\nاخلاقی قدر",
      "Vocational value\nپیشہ ورانہ قدر",
      "Cultural value\nثقافتی قدر",
      "Political value\nسیاسی قدر"
    ],
    "correctAnswer": 0,
    "explanation": "سوامی ویویکانند کی تعلیمات کردار سازی، بے لوث خدمت (سیوا)، طاقت، ہمت، اور عالمی بھائی چارے پر زور دیتی ہیں۔ ان کی زندگی اور کام کا مطالعہ بنیادی طور پر طلباء میں مضبوط اخلاقی اور اخلاقی اقدار پیدا کرنے کا مقصد رکھتا ہے۔"
  },
  {
    "id": 951,
    "question": "Match the following related to cognitive domain based on revised Bloom's Taxonomy (2001) (TSTET 29 May 2024)\nنظر ثانی شدہ بلوم کی درجہ بندی (2001) پر مبنی علمی ڈومین سے متعلق درج ذیل کو ملائیں\nA) Understanding\ti) Planning\nB) Remembering\tii) Implementation\nC) Applying\t\tiii) Classifying\n\t\t\tiv) Recalling",
    "options": [
      "A-i, B-iii, C-ii",
      "A-iv, B-i, C-ii",
      "A-iii, B-iv, C-ii",
      "A-iii, B-iv, C-i"
    ],
    "correctAnswer": 2,
    "explanation": "نظر ثانی شدہ بلوم کی درجہ بندی کے مطابق، 'یاد رکھنا' (Remembering) میں 'یاد کرنا' (Recalling) جیسی کارروائیاں شامل ہیں۔ 'سمجھنا' (Understanding) میں 'درجہ بندی کرنا' (Classifying) جیسی کارروائیاں شامل ہیں۔ 'اطلاق کرنا' (Applying) میں 'عمل درآمد' (Implementing) جیسی کارروائیاں شامل ہیں۔ لہذا، صحیح جوڑی A-iii, B-iv, C-ii ہے۔"
  },
  {
    "id": 952,
    "question": "NCF-2005 focused on these important aspects/elements for development of Social Science curriculum (TSTET 29 May 2024)\nNCF-2005 نے سماجی سائنس کے نصاب کی ترقی کے لیے ان اہم پہلوؤں/عناصر پر توجہ مرکوز کی",
    "options": [
      "Teacher efficiency, content load and local contents\nاساتذہ کی کارکردگی، مواد کا بوجھ اور مقامی مواد",
      "Content load, pluralities and local contents, Normative duties and inter-relationship among disciplines\nمواد کا بوجھ، کثرتیت اور مقامی مواد، معیاری فرائض اور مضامین کے درمیان باہمی تعلق",
      "Scientific outlook, school environment, content load and local content\nسائنسی نقطہ نظر، اسکول کا ماحول، مواد کا بوجھ اور مقامی مواد",
      "Content load, inter-relationship among disciplines, Social outlook and children's ability\nمواد کا بوجھ، مضامین کے درمیان باہمی تعلق، سماجی نقطہ نظر اور بچوں کی قابلیت"
    ],
    "correctAnswer": 1,
    "explanation": "قومی نصابی ڈھانچہ (NCF) 2005 نے سفارش کی کہ سماجی سائنس کے نصاب میں مواد کا بوجھ کم کیا جائے، متعدد نقطہ نظر (کثرتیت) کو اپنایا جائے، مقامی سیاق و سباق کو مربوط کیا جائے، سماجی انصاف جیسے معیاری مسائل کو حل کیا جائے، اور مختلف سماجی سائنس کے مضامین کے درمیان باہمی تعلقات کو اجاگر کیا جائے۔"
  },
  {
    "id": 953,
    "question": "Which of the following statement is NOT TRUE related merits of source method? (TSTET 29 May 2024)\nماخذ کے طریقہ کار کی خوبیوں سے متعلق مندرجہ ذیل میں سے کون سا بیان درست نہیں ہے؟",
    "options": [
      "The use of sources provide certain useful mental exercise\nماخذ کا استعمال کچھ مفید ذہنی مشق فراہم کرتا ہے",
      "The original sources serve as an effective means for creating a realistic type of atmosphere\nاصل ماخذ ایک حقیقت پسندانہ قسم کی فضا پیدا کرنے کے لیے ایک مؤثر ذریعہ کے طور پر کام کرتے ہیں",
      "Source method inhibits the pupil in research\nماخذ کا طریقہ کار طالب علم کو تحقیق میں روکتا ہے",
      "Source method can satisfy the curiosity among children on the question how do we know this\nماخذ کا طریقہ کار بچوں میں اس سوال پر تجسس کو پورا کر سکتا ہے کہ ہم یہ کیسے جانتے ہیں"
    ],
    "correctAnswer": 2,
    "explanation": "ماخذ کا طریقہ کار طلباء میں تحقیقی مہارتوں کو فروغ دینے اور ان کی حوصلہ افزائی کے لیے ڈیزائن کیا گیا ہے۔ بنیادی اور ثانوی ماخذ کے ساتھ مشغول ہو کر، طلباء سوال کرنا، تجزیہ کرنا، اور شواہد کی تشریح کرنا سیکھتے ہیں، جو تحقیق کی بنیاد ہے۔ لہذا، یہ بیان کہ یہ تحقیق کو روکتا ہے، غلط ہے۔"
  },
  {
    "id": 954,
    "question": "To teach the topic structure of Local bodies, this chart is most suitable (TSTET 29 May 2024)\nمقامی اداروں کی ساخت کا موضوع پڑھانے کے لیے، یہ چارٹ سب سے زیادہ موزوں ہے",
    "options": [
      "Classification chart\nدرجہ بندی کا چارٹ",
      "Flow chart\nفلو چارٹ",
      "Chronology chart\nتاریخی ترتیب کا چارٹ",
      "Tabulation chart\nجدول سازی کا چارٹ"
    ],
    "correctAnswer": 1,
    "explanation": "فلو چارٹ مقامی حکومتی اداروں (مثلاً، گرام پنچایت -> منڈل/بلاک -> ضلع پریشد) کی درجہ بندی کی ساخت اور باہمی تعلقات کی وضاحت کے لیے سب سے موزوں بصری امداد ہے۔ یہ واضح طور پر اتھارٹی کی سطحوں اور انتظامیہ کے بہاؤ کو ظاہر کرتا ہے۔"
  },
  {
    "id": 955,
    "question": "Judgements given by courts and the extracts of judgements printed in News papers respectively are this kind of sources (TSTET 29 May 2024)\nعدالتوں کے دیے گئے فیصلے اور اخبارات میں چھپے فیصلوں کے اقتباسات بالترتیب اس قسم کے ماخذ ہیں",
    "options": [
      "Both are primary sources\nدونوں بنیادی ماخذ ہیں",
      "Both are secondary sources\nدونوں ثانوی ماخذ ہیں",
      "Secondary source, primary source\nثانوی ماخذ، بنیادی ماخذ",
      "Primary source, secondary source\nبنیادی ماخذ، ثانوی ماخذ"
    ],
    "correctAnswer": 3,
    "explanation": "عدالت کی طرف سے دیا گیا سرکاری، اصل فیصلہ ایک بنیادی ماخذ ہے۔ اس فیصلے کا ایک اقتباس جو اخبار میں چھپتا ہے، ایک ثانوی ماخذ ہے کیونکہ اسے کسی تیسرے فریق (اخبار) نے منتخب، تشریح اور پیش کیا ہے، جو اسے اصل واقعہ سے ایک قدم دور کر دیتا ہے۔"
  },
  {
    "id": 956,
    "question": "In this step of period plan, the activities like greetings and topic declaration are taken up (TSTET 29 May 2024)\nپیریڈ پلان کے اس مرحلے میں، سلام اور موضوع کے اعلان جیسی سرگرمیاں کی جاتی ہیں",
    "options": [
      "Practice skills\nمہارتوں کی مشق",
      "Conceptual understanding - discussion\nتصوراتی تفہیم - بحث",
      "Introduction\nتعارف",
      "Read the content, identification of unknown term, concept\nمواد کو پڑھنا، نامعلوم اصطلاح، تصور کی شناخت"
    ],
    "correctAnswer": 2,
    "explanation": "'تعارف' ایک پیریڈ یا سبق کے منصوبے کا پہلا مرحلہ ہے۔ اس میں طلباء کی توجہ حاصل کرنے اور سیکھنے کے لیے ماحول بنانے کے لیے بنائی گئی سرگرمیاں شامل ہیں، جیسے کلاس کو سلام کرنا، پچھلے علم کا جائزہ لینا، اور دن کے موضوع اور مقاصد کو واضح طور پر بیان کرنا۔"
  },
  {
    "id": 957,
    "question": "Which of the following statement is NOT TRUE related to micro teaching? (TSTET 29 May 2024)\nA) Micro teaching is a training technique rather than teaching technique\nB) Micro teaching is relatively an innovation in the field of teacher education\nC) Micro teaching provides an opportunity to select more skills at a time to practice by the student-teachers\nمائیکرو ٹیچنگ سے متعلق مندرجہ ذیل میں سے کون سا بیان درست نہیں ہے؟\nA) مائیکرو ٹیچنگ تدریسی تکنیک کے بجائے ایک تربیتی تکنیک ہے\nB) مائیکرو ٹیچنگ اساتذہ کی تعلیم کے میدان میں نسبتاً ایک جدت ہے\nC) مائیکرو ٹیچنگ طالب علم-اساتذہ کو ایک وقت میں مشق کرنے کے لیے زیادہ مہارتیں منتخب کرنے کا موقع فراہم کرتی ہے",
    "options": [
      "A & B only",
      "A & C only",
      "B & C only",
      "C only"
    ],
    "correctAnswer": 3,
    "explanation": "بیان (C) درست نہیں ہے۔ مائیکرو ٹیچنگ کا بنیادی اصول ایک وقت میں ایک مخصوص تدریسی مہارت (مثلاً، سوال کرنا، وضاحت کرنا، تقویت دینا) کو الگ کرنا اور اس کی مشق کرنا ہے۔ اس کا مرکز ایک مختصر تدریسی مقابلے میں انفرادی مہارتوں میں مہارت حاصل کرنا ہے، نہ کہ بیک وقت متعدد مہارتوں کی مشق کرنا۔"
  },
  {
    "id": 958,
    "question": "This is one of the important source for studying about Kakatiya Kingdom (TSTET 29 May 2024)\nیہ کاکتیہ سلطنت کے بارے میں مطالعہ کرنے کا ایک اہم ماخذ ہے",
    "options": [
      "Siddeswara Charitra by Kase Sarvappa\nسدھیشورا چرترا از کیسے سروپا",
      "Nitisara by Prataparudra\nنیتی سارا از پرتاپرودر",
      "Panditaradhya Charitra by Palkuriki Somanatha\nپنڈتارادھیا چرترا از پالکوریکی سومناتھا",
      "Nrutya Ratnavali by Jayapa Senani\nنرتیہ رتناولی از جیاپا سینانی"
    ],
    "correctAnswer": 3,
    "explanation": "'نرتیہ رتناولی' جیاپا سینانی، جو کاکتیہ بادشاہ گنپتی دیو کے ماتحت ہاتھیوں کی فوج کے کمانڈر تھے، کی لکھی ہوئی رقص پر ایک اہم کتاب ہے۔ یہ کام ایک قیمتی تاریخی ماخذ بھی ہے کیونکہ اس کا تعارف کاکتیہ خاندان کی نسل اور تفصیلات فراہم کرتا ہے۔"
  },
  {
    "id": 959,
    "question": "Consider the following statements about Harappan Seals and find the correct one (TSTET 29 May 2024)\nA) Most of the seals are square in shape\nB) Steatite was mainly used in the manufacture of seals\nC) The purpose of the seal was mainly commercial\nہڑپائی مہروں کے بارے میں مندرجہ ذیل بیانات پر غور کریں اور درست بیان تلاش کریں\nA) زیادہ تر مہریں مربع شکل کی ہیں\nB) اسٹیٹائٹ بنیادی طور پر مہروں کی تیاری میں استعمال ہوتا تھا\nC) مہر کا مقصد بنیادی طور پر تجارتی تھا",
    "options": [
      "A, B & C",
      "B & C only",
      "A & B only",
      "A & C only"
    ],
    "correctAnswer": 0,
    "explanation": "تینوں بیانات درست ہیں۔ وادی سندھ کی تہذیب کی زیادہ تر مہریں مربع شکل کی ہیں، جو بنیادی طور پر اسٹیٹائٹ نامی نرم پتھر سے بنائی گئی تھیں، اور خیال کیا جاتا ہے کہ وہ تجارتی مقاصد کے لیے استعمال ہوتی تھیں، جیسے تجارت کے لیے سامان کی تصدیق کرنا۔"
  },
  {
    "id": 960,
    "question": "One of the following book is NOT written by Megasthenes (TSTET 29 May 2024)\nمندرجہ ذیل میں سے ایک کتاب میگاستھینز نے نہیں لکھی ہے",
    "options": [
      "Indica\nانڈیکا",
      "Periplus of the Erythraean Sea\nپیری پلس آف دی ایریتھرین سی",
      "On the races of India\nآن دی ریسز آف انڈیا",
      "The Indica\nدی انڈیکا"
    ],
    "correctAnswer": 1,
    "explanation": "میگاستھینز یونانی سفیر تھا جس نے موریائی ہندوستان کا احوال 'انڈیکا' لکھا تھا۔ 'پیری پلس آف دی ایریتھرین سی' پہلی صدی عیسوی کا ایک گریکو-رومن مخطوطہ ہے جو بحر ہند میں جہاز رانی اور تجارتی مواقع بیان کرتا ہے، لیکن اس کا مصنف گمنام ہے اور یہ میگاستھینز کے صدیوں بعد لکھا گیا تھا۔"
  },
  {
    "id": 961,
    "question": "The local time of two cities 'X' and Y is 5.30 pm in spite of their location in two different continents. Hence, they are said to be located (TSTET 29 May 2024)\nدو شہروں 'X' اور Y کا مقامی وقت شام 5.30 بجے ہے حالانکہ وہ دو مختلف براعظموں میں واقع ہیں۔ لہذا، کہا جاتا ہے کہ وہ واقع ہیں",
    "options": [
      "On the same latitude\nاسی عرض بلد پر",
      "On the same altitude\nاسی بلندی پر",
      "On the same longitude\nاسی طول بلد پر",
      "Neither on the same latitude nor on the same altitude\nنہ تو اسی عرض بلد پر اور نہ ہی اسی بلندی پر"
    ],
    "correctAnswer": 2,
    "explanation": "طول بلد وہ فرضی لکیریں ہیں جو قطب شمالی سے قطب جنوبی تک جاتی ہیں۔ ایک ہی طول بلد پر واقع تمام مقامات پر ایک ہی مقامی وقت ہوتا ہے، کیونکہ وہ ایک ہی وقت میں سورج کا سامنا ایک ہی زاویے سے کرتے ہیں۔"
  },
  {
    "id": 962,
    "question": "According to Geologists, the landforms like mountains, plains and plateaus are called as (TSTET 29 May 2024)\nماہرین ارضیات کے مطابق، پہاڑوں، میدانوں اور سطح مرتفع جیسی زمینی اشکال کو کہا جاتا ہے",
    "options": [
      "First order land forms\nپہلے درجے کی زمینی اشکال",
      "Second order land forms\nدوسرے درجے کی زمینی اشکال",
      "Third order land forms\nتیسرے درجے کی زمینی اشکال",
      "Intrusive land forms\nاندرونی زمینی اشکال"
    ],
    "correctAnswer": 1,
    "explanation": "ارضیات میں، زمینی اشکال کو درجے کے لحاظ سے درجہ بندی کیا جاتا ہے۔ پہلے درجے کی زمینی اشکال براعظم اور سمندری طاس ہیں۔ دوسرے درجے کی زمینی اشکال براعظموں پر موجود بڑی خصوصیات ہیں، جیسے پہاڑ، میدان، اور سطح مرتفع، جو بڑے پیمانے پر ٹیکٹونک قوتوں سے بنتی ہیں۔ تیسرے درجے کی زمینی اشکال کٹاؤ اور جمع ہونے سے بننے والی چھوٹی خصوصیات ہیں۔"
  },
  {
    "id": 963,
    "question": "The hydrological cycle is sometimes explained as RF=RO+ET Here, 'ET' refers to (TSTET 29 May 2024)\nآبی چکر کو بعض اوقات RF=RO+ET کے طور پر بیان کیا جاتا ہے۔ یہاں 'ET' سے مراد ہے",
    "options": [
      "Evaporation and Transportation\nتبخیر اور نقل و حمل",
      "Erosion and Transportation\nکٹاؤ اور نقل و حمل",
      "Evaporation -Transpiration\nتبخیر - عمل تبخیر",
      "Erosion and Transpiration\nکٹاؤ اور عمل تبخیر"
    ],
    "correctAnswer": 2,
    "explanation": "فارمولا RF = RO + ET پانی کے توازن کی مساوات کی نمائندگی کرتا ہے جہاں RF بارش ہے، RO بہاؤ ہے، اور ET کا مطلب ایواپوٹرانسپریشن (Evapotranspiration) ہے۔ ایواپوٹرانسپریشن زمین کی سطح سے پانی کے بخارات بننے اور پودوں سے پانی کے اخراج کا مشترکہ عمل ہے۔"
  },
  {
    "id": 964,
    "question": "One important feature of Stratosphere is (TSTET 29 May 2024)\nاسٹریٹوسفیئر کی ایک اہم خصوصیت ہے",
    "options": [
      "It contains electrically charged particles\nاس میں برقی طور پر چارج شدہ ذرات ہوتے ہیں",
      "The temperature increases with the decrease in altitude\nبلندی میں کمی کے ساتھ درجہ حرارت بڑھتا ہے",
      "It contains ozone layer\nاس میں اوزون کی تہہ ہوتی ہے",
      "Radio waves transmitted from the earth are reflected back to the earth\nزمین سے منتقل ہونے والی ریڈیو لہریں واپس زمین کی طرف منعکس ہوتی ہیں"
    ],
    "correctAnswer": 2,
    "explanation": "اسٹریٹوسفیئر، زمین کے ماحول کی دوسری بڑی تہہ، اوزون کی تہہ پر مشتمل ہونے کی وجہ سے قابل ذکر ہے۔ یہ تہہ سورج کی زیادہ تر نقصان دہ بالائے بنفشی (UV) شعاعوں کو جذب کرتی ہے، جس سے زمین پر زندگی کی حفاظت ہوتی ہے۔"
  },
  {
    "id": 965,
    "question": "'U' Shaped Valleys are formed due to the work of (TSTET 29 May 2024)\n'U' شکل کی وادیاں کس کے کام کی وجہ سے بنتی ہیں",
    "options": [
      "Water\nپانی",
      "Wind\nہوا",
      "Waves\nلہریں",
      "Glacier\nگلیشیر"
    ],
    "correctAnswer": 3,
    "explanation": "'U' شکل کی وادیاں گلیشیئر کے کٹاؤ سے بننے والی خصوصیت کی حامل زمینی شکلیں ہیں۔ جیسے جیسے گلیشیر ایک وادی سے گزرتے ہیں، وہ اطراف اور فرش کو کھودتے اور رگڑتے ہیں، جس سے وادی ایک مخصوص U-شکل میں چوڑی اور گہری ہو جاتی ہے۔ اس کے برعکس، دریا کا کٹاؤ عام طور پر 'V' شکل کی وادیاں بناتا ہے۔"
  },
  {
    "id": 966,
    "question": "The High Pressure Belts on the earth are at (TSTET 29 May 2024)\nزمین پر زیادہ دباؤ کی پٹیاں کہاں ہیں",
    "options": [
      "Equatorial and Sub-Polar Region\nخط استوائی اور ذیلی قطبی علاقہ",
      "Equatorial and Sub-Tropical Region\nخط استوائی اور ذیلی حاری علاقہ",
      "Sub-Polar and Polar Region\nذیلی قطبی اور قطبی علاقہ",
      "Sub-Tropical and Polar Region\nذیلی حاری اور قطبی علاقہ"
    ],
    "correctAnswer": 3,
    "explanation": "زمین پر بڑی دباؤ کی پٹیاں ہیں۔ زیادہ دباؤ والی پٹیاں ذیلی حاری علاقوں (تقریباً 30° شمال اور جنوب عرض بلد) اور قطبی علاقوں (تقریباً 90° شمال اور جنوب عرض بلد) میں پائی جاتی ہیں۔ یہ وہ علاقے ہیں جہاں ہوا عام طور پر نیچے اترتی ہے، جس سے زیادہ فضائی دباؤ پیدا ہوتا ہے۔"
  },
  {
    "id": 967,
    "question": "From among the following, the distinct feature of the Indian Agriculture is (TSTET 29 May 2024)\nمندرجہ ذیل میں سے، ہندوستانی زراعت کی مخصوص خصوصیت ہے",
    "options": [
      "Large land holdings\nبڑی زمینی ملکیت",
      "High Productivity\nاعلی پیداواریت",
      "Usage of New Technology\nنئی ٹیکنالوجی کا استعمال",
      "Presence of Small Land Holdings\nچھوٹی زمینی ملکیت کی موجودگی"
    ],
    "correctAnswer": 3,
    "explanation": "ہندوستانی زراعت کی ایک واضح خصوصیت چھوٹی اور بکھری ہوئی زمینی ملکیت کا رواج ہے۔ ہندوستان میں زیادہ تر کسان چھوٹے یا معمولی کسان ہیں، جو دو ہیکٹر سے کم کے پلاٹوں پر کاشت کرتے ہیں، جو مشینی کاشت اور بڑے پیمانے پر معیشتوں کے حصول میں چیلنجز پیش کرتا ہے۔"
  },
  {
    "id": 968,
    "question": "Naharkatiya- Moran Region. Bombay High and Cambay Basin are associated with this mineral of India (TSTET 29 May 2024)\nنہارکٹیا-موران علاقہ، بمبئی ہائی اور کھمبات بیسن ہندوستان کی اس معدنیات سے وابستہ ہیں",
    "options": [
      "Mica\nابرک",
      "Oil resources\nتیل کے وسائل",
      "Manganese\nمینگنیز",
      "Iron-Ore\nلوہے کی کچ دھات"
    ],
    "correctAnswer": 1,
    "explanation": "بمبئی ہائی (ممبئی کے ساحل سے دور)، کھمبات بیسن (گجرات)، اور نہارکٹیا-موران علاقہ (آسام) ہندوستان کے تین اہم ترین پیٹرولیم (تیل اور قدرتی گیس) پیدا کرنے والے علاقے ہیں۔"
  },
  {
    "id": 969,
    "question": "These Mountains are regionally known as Patkai, Naga, Manipuri, Khasi and Mizo hills (TSTET 29 May 2024)\nان پہاڑوں کو علاقائی طور پر پٹکائی، ناگا، منی پوری، کھاسی اور میزو پہاڑیوں کے نام سے جانا جاتا ہے",
    "options": [
      "The Greater Himalayas\nعظیم ہمالیہ",
      "The Lesser Himalayas\nچھوٹا ہمالیہ",
      "The Shiwalik Ranges\nشیوالک سلسلے",
      "The Purvanchal Mountains\nپوروانچل پہاڑ"
    ],
    "correctAnswer": 3,
    "explanation": "پوروانچل سلسلہ، یا مشرقی پہاڑ، شمال مشرقی ہندوستان میں ہمالیہ کی مشرقی توسیع ہے۔ یہ کئی چھوٹے پہاڑی سلسلوں پر مشتمل ہے، جن میں پٹکائی پہاڑیاں، ناگا پہاڑیاں، منی پور پہاڑیاں، اور میزو پہاڑیاں شامل ہیں۔"
  },
  {
    "id": 970,
    "question": "The pattern of the elements of weather and climate for a place can be shown using pictures called (TSTET 29 May 2024)\nکسی جگہ کے موسم اور آب و ہوا کے عناصر کے نمونے کو تصاویر کا استعمال کرتے ہوئے دکھایا جا سکتا ہے جنہیں کہا جاتا ہے",
    "options": [
      "Cartography\nنقشہ نگاری",
      "Geomorphology\nارضی شکلیات",
      "Barograph\nباروگراف",
      "Climatographs\nکلائمیٹوگراف"
    ],
    "correctAnswer": 3,
    "explanation": "کلائمیٹوگراف (یا کلائیموگراف) کسی مقام کی بنیادی آب و ہوا کی تصویری نمائندگی ہے۔ یہ عام طور پر دو متغیرات کو پلاٹ کرتا ہے: اوسط ماہانہ درجہ حرارت اور اوسط ماہانہ بارش، جو آب و ہوا کے نمونوں کا فوری بصری خلاصہ فراہم کرتا ہے۔"
  },
  {
    "id": 971,
    "question": "A population pyramid shows (TSTET 29 May 2024)\nایک آبادی کا اہرام دکھاتا ہے",
    "options": [
      "The number of males and females in different age groups in a country\nایک ملک میں مختلف عمر کے گروہوں میں مردوں اور عورتوں کی تعداد",
      "The number of persons living per unit area\nفی یونٹ رقبہ میں رہنے والے افراد کی تعداد",
      "The percentage of increase in population in a unit area\nایک یونٹ رقبہ میں آبادی میں اضافے کا فیصد",
      "The number of males and females between the age groups of 15-59 years only\nصرف 15-59 سال کی عمر کے گروہوں کے درمیان مردوں اور عورتوں کی تعداد"
    ],
    "correctAnswer": 0,
    "explanation": "آبادی کا اہرام ایک بار گراف ہے جو عمر اور جنس کے لحاظ سے آبادی کی تقسیم کو ظاہر کرتا ہے۔ یہ عام طور پر مخصوص عمر کے گروہوں میں مردوں اور عورتوں کی تعداد یا فیصد کو ظاہر کرتا ہے، جس سے ملک کی آبادیاتی ساخت کی واضح تصویر ملتی ہے۔"
  },
  {
    "id": 972,
    "question": "The river Indus flows in this direction through Tibet (TSTET 29 May 2024)\nدریائے سندھ تبت سے اس سمت میں بہتا ہے",
    "options": [
      "North-easterly\nشمال-مشرقی",
      "North-westerly\nشمال-مغربی",
      "South-Easterly\nجنوب-مشرقی",
      "South-westerly\nجنوب-مغربی"
    ],
    "correctAnswer": 1,
    "explanation": "دریائے سندھ تبت میں مانسروور جھیل کے قریب سے نکلتا ہے۔ اپنے منبع سے، یہ ہندوستان کے لداخ کے علاقے میں داخل ہونے سے پہلے تبتی سطح مرتفع سے شمال-مغربی سمت میں بہتا ہے۔"
  },
  {
    "id": 973,
    "question": "These soils swell and become sticky when wet and shrink when dried and during the dry season, these soils develop cracks (TSTET 29 May 2024)\nیہ مٹیاں گیلی ہونے پر پھول جاتی ہیں اور چپچپی ہو جاتی ہیں اور خشک ہونے پر سکڑ جاتی ہیں اور خشک موسم کے دوران، ان مٹیوں میں دراڑیں پڑ جاتی ہیں",
    "options": [
      "Red Soils\nسرخ مٹیاں",
      "Black Soils\nکالی مٹیاں",
      "Alluvial Soils\nاللوویل مٹیاں",
      "Laterite Soils\nلیٹرائٹ مٹیاں"
    ],
    "correctAnswer": 1,
    "explanation": "کالی مٹیاں، جنہیں ریگور مٹیاں بھی کہا جاتا ہے، مٹی کے معدنیات جیسے مونٹموریلونائٹ سے بھرپور ہوتی ہیں۔ یہ ترکیب ان میں پانی کو روکنے کی اعلی صلاحیت کا سبب بنتی ہے، جس کی وجہ سے گیلی ہونے پر سوجن اور خشک ہونے پر نمایاں سکڑاؤ اور دراڑیں پڑتی ہیں، یہ ایک خاصیت ہے جسے خود ہل چلانا (self-ploughing) کہا جاتا ہے۔"
  },
  {
    "id": 974,
    "question": "Panaji, the capital of Goa, experience moderate climate because of its location (TSTET 29 May 2024)\nگوا کا دارالحکومت، پنجی، اپنے محل وقوع کی وجہ سے معتدل آب و ہوا کا تجربہ کرتا ہے",
    "options": [
      "at higher elevation\nاونچائی پر",
      "very near to the north pole\nقطب شمالی کے بہت قریب",
      "very near to the sea shore\nسمندر کے کنارے کے بہت قریب",
      "in the Indo-Gangetic plain\nسندھ-گنگا کے میدان میں"
    ],
    "correctAnswer": 2,
    "explanation": "پنجی جیسے ساحلی مقامات سمندر کے اثر کی وجہ سے ایک معتدل یا سمندری آب و ہوا کا تجربہ کرتے ہیں۔ سمندر زمین کے مقابلے میں زیادہ آہستہ گرم اور ٹھنڈا ہوتا ہے، جو ساحلی علاقوں کے درجہ حرارت کو معتدل رکھتا ہے، گرمیوں میں شدید گرمی اور سردیوں میں شدید سردی کو روکتا ہے۔"
  },
  {
    "id": 975,
    "question": "Approximately, a massive super continent \"Pangaea\" have existed (TSTET 29 May 2024)\nتقریباً، ایک بہت بڑا براعظم \"پینجیا\" موجود تھا",
    "options": [
      "10 million years ago\n10 ملین سال پہلے",
      "100 million years ago\n100 ملین سال پہلے",
      "220 million years ago\n220 ملین سال پہلے",
      "150 million years ago\n150 ملین سال پہلے"
    ],
    "correctAnswer": 2,
    "explanation": "سائنسدانوں کا ماننا ہے کہ سپر براعظم پینجیا آخری پیلیوزوک اور ابتدائی میسوزوک ادوار کے دوران موجود تھا۔ یہ تقریباً 200 ملین سال پہلے ٹوٹنا شروع ہوا، لیکن اس کی تشکیل اور وجود کا زمانہ تقریباً 335 سے 175 ملین سال پہلے کا ہے، جس میں 220 ملین سال پہلے کا عرصہ اسی دور میں آتا ہے۔"
  },
  {
    "id": 976,
    "question": "The following is NOT the feature of 1991 industrial policy (TSTET 29 May 2024)\nمندرجہ ذیل 1991 کی صنعتی پالیسی کی خصوصیت نہیں ہے",
    "options": [
      "Revitalisation of the public sector\nپبلک سیکٹر کی بحالی",
      "Abolition of industrial license\nصنعتی لائسنس کا خاتمہ",
      "Free entry of foreign investment\nغیر ملکی سرمایہ کاری کا آزادانہ داخلہ",
      "Liberal industrial location policy\nلبرل صنعتی مقام کی پالیسی"
    ],
    "correctAnswer": 0,
    "explanation": "1991 کی نئی صنعتی پالیسی لبرلائزیشن، پرائیویٹائزیشن، اور گلوبلائزیشن (LPG) پر مرکوز تھی۔ اہم خصوصیات میں صنعتی لائسنسنگ کا خاتمہ (ڈی-لائسنسنگ)، غیر ملکی سرمایہ کاری کی حوصلہ افزائی، اور مقام کی پالیسیوں کو لبرل بنانا شامل تھا۔ اگرچہ اس نے پبلک سیکٹر کی اصلاحات پر توجہ دی، لیکن اس کا بنیادی زور پبلک سیکٹر کے کردار کو کم کرنے اور نجی انٹرپرائز کو فروغ دینے پر تھا، نہ کہ اس کی روایتی معنوں میں بحالی پر۔"
  },
  {
    "id": 977,
    "question": "Identify the FALSE statement related to 'Pradhan Mantri Jhan Dhan Yojana' (TSTET 29 May 2024)\n'پردھان منتری جن دھن یوجنا' سے متعلق غلط بیان کی نشاندہی کریں",
    "options": [
      "There is no Overdraft facility\nکوئی اوور ڈرافٹ کی سہولت نہیں ہے",
      "Rupay debit card is given\nروپے ڈیبٹ کارڈ دیا جاتا ہے",
      "It is launched in August, 2014\nیہ اگست 2014 میں شروع کی گئی تھی",
      "Account can be opened with zero balance\nکھاتہ صفر بیلنس کے ساتھ کھولا جا سکتا ہے"
    ],
    "correctAnswer": 0,
    "explanation": "یہ بیان غلط ہے۔ پردھان منتری جن دھن یوجنا (PMJDY)، جو اگست 2014 میں شروع کی گئی تھی، خاص طور پر اہل کھاتہ داروں کے لیے کچھ وقت تک کھاتے کے تسلی بخش آپریشن کے بعد 10,000 روپے تک کی اوور ڈرافٹ کی سہولت شامل ہے۔ صفر بیلنس کھاتے اور روپے ڈیبٹ کارڈ فراہم کرنا بھی اہم خصوصیات ہیں۔"
  },
  {
    "id": 978,
    "question": "Identify the FALSE statement related to GST (TSTET 29 May 2024)\nGST سے متعلق غلط بیان کی نشاندہی کریں",
    "options": [
      "Most of indirect taxes have been replaced with GST\nزیادہ تر بالواسطہ ٹیکسوں کو GST سے تبدیل کر دیا گیا ہے",
      "It is launched in 2014\nیہ 2014 میں شروع کیا گیا تھا",
      "It imposed taxation on both production and sales of goods and services\nاس نے سامان اور خدمات کی پیداوار اور فروخت دونوں پر ٹیکس لگایا",
      "Under GST, the goods and services carry the same tax across the country\nGST کے تحت، سامان اور خدمات پر پورے ملک میں ایک ہی ٹیکس لگتا ہے"
    ],
    "correctAnswer": 1,
    "explanation": "یہ بیان غلط ہے۔ گڈز اینڈ سروسز ٹیکس (GST) ہندوستان میں 1 جولائی 2017 کو شروع کیا گیا تھا۔ یہ ایک جامع بالواسطہ ٹیکس ہے جس نے بہت سے دوسرے بالواسطہ ٹیکسوں کی جگہ لے لی، جس سے ملک بھر میں سامان اور خدمات کے لیے ایک واحد ٹیکس نظام قائم ہوا۔"
  },
  {
    "id": 979,
    "question": "Which of the following is NOT related to Human Development Index (TSTET 29 May 2024)\nمندرجہ ذیل میں سے کون سا انسانی ترقی کے اشاریہ سے متعلق نہیں ہے",
    "options": [
      "Literacy rate is considered\nخواندگی کی شرح پر غور کیا جاتا ہے",
      "HDI Report is published by UNDP\nHDI رپورٹ UNDP کی طرف سے شائع کی جاتی ہے",
      "Health indicators are considered\nصحت کے اشارے پر غور کیا جاتا ہے",
      "Per capita income is not included\nفی کس آمدنی شامل نہیں ہے"
    ],
    "correctAnswer": 3,
    "explanation": "یہ بیان غلط ہے۔ انسانی ترقی کا اشاریہ (HDI)، جو UNDP کی طرف سے شائع کیا جاتا ہے، ایک جامع اشاریہ ہے جو تین اہم جہتوں پر مبنی ترقی کی پیمائش کرتا ہے: ایک لمبی اور صحت مند زندگی (متوقع عمر)، علم (اوسط اور متوقع تعلیمی سال)، اور ایک مہذب معیار زندگی۔ معیار زندگی کی پیمائش فی کس مجموعی قومی آمدنی (GNI) سے کی جاتی ہے۔"
  },
  {
    "id": 980,
    "question": "The major reason for low calorie intake among Indians is (TSTET 29 May 2024)\nہندوستانیوں میں کم کیلوری کی مقدار کی بڑی وجہ ہے",
    "options": [
      "Lack of purchasing power of people\nلوگوں کی قوت خرید کی کمی",
      "Less availability of food grains\nغذائی اجناس کی کم دستیابی",
      "Food grains are not grown in many areas\nبہت سے علاقوں میں غذائی اجناس نہیں اگائے جاتے",
      "People are not purchasing the food grains due to ignorance\nلوگ جہالت کی وجہ سے غذائی اجناس نہیں خرید رہے ہیں"
    ],
    "correctAnswer": 0,
    "explanation": "جبکہ ہندوستان غذائی اجناس کی پیداوار میں بڑی حد تک خود کفیل ہے، آبادی کا ایک اہم حصہ غذائی عدم تحفظ اور کم کیلوری کی مقدار کا شکار ہے۔ بنیادی وجہ اقتصادی عدم رسائی ہے؛ بہت سے لوگوں کے پاس مناسب مقدار میں غذائیت سے بھرپور خوراک خریدنے کے لیے ضروری قوت خرید کی کمی ہے۔"
  },
  {
    "id": 981,
    "question": "In India, globalisation is actively started after (TSTET 29 May 2024)\nہندوستان میں، عالمگیریت کا فعال طور پر آغاز کب ہوا",
    "options": [
      "42nd amendment of the Indian Constitution\nہندوستانی آئین کی 42ویں ترمیم",
      "1991 Economic reforms\n1991 کی اقتصادی اصلاحات",
      "1956 Industrial policy resolution\n1956 کی صنعتی پالیسی کی قرارداد",
      "After the first five-year plan period\nپہلے پانچ سالہ منصوبے کی مدت کے بعد"
    ],
    "correctAnswer": 1,
    "explanation": "ہندوستان میں عالمگیریت کا عمل 1991 کی اقتصادی اصلاحات کے ساتھ فعال طور پر شروع ہوا۔ ادائیگیوں کے توازن کے شدید بحران کا سامنا کرتے ہوئے، حکومت نے نئی اقتصادی پالیسی متعارف کرائی، جس نے ہندوستانی معیشت کو عالمی معیشت کے ساتھ مربوط کرنے کے لیے لبرلائزیشن، پرائیویٹائزیشن، اور گلوبلائزیشن (LPG) پر توجہ مرکوز کی۔"
  },
  {
    "id": 982,
    "question": "Among the poor families, the poorest are entitled to have: (TSTET 29 May 2024)\nغریب خاندانوں میں، غریب ترین خاندان کیا حاصل کرنے کے حقدار ہیں:",
    "options": [
      "35 kgs of food grains\n35 کلوگرام غذائی اجناس",
      "25 kgs of food grains\n25 کلوگرام غذائی اجناس",
      "15 kgs of food grains\n15 کلوگرام غذائی اجناس",
      "50 kgs of food grains\n50 کلوگرام غذائی اجناس"
    ],
    "correctAnswer": 0,
    "explanation": "انتودیا انا یوجنا (AAY) کے تحت، جو غریبوں میں غریب ترین افراد کے لیے ایک سرکاری اسکیم ہے، شناخت شدہ خاندان ہر ماہ فی خاندان 35 کلوگرام غذائی اجناس انتہائی سبسڈی والی قیمتوں پر حاصل کرنے کے حقدار ہیں۔ یہ اسکیم غربت کی لکیر سے نیچے (BPL) آبادی کے سب سے زیادہ کمزور طبقوں کو نشانہ بناتی ہے۔"
  },
  {
    "id": 983,
    "question": "'Silent spring' written by Rachel Carson was related to (TSTET 29 May 2024)\nریچل کارسن کی لکھی ہوئی 'سائلنٹ اسپرنگ' کس سے متعلق تھی",
    "options": [
      "Impact of Global Warming\nگلوبل وارمنگ کا اثر",
      "Impact of Globalisation\nعالمگیریت کا اثر",
      "Impact of DDT\nDDT کا اثر",
      "Impact of Green Revolution\nسبز انقلاب کا اثر"
    ],
    "correctAnswer": 2,
    "explanation": "ریچل کارسن کی 1962 کی যুগ ساز کتاب، 'سائلنٹ اسپرنگ' نے کیڑے مار ادویات، خاص طور پر DDT کے اندھا دھند استعمال سے ہونے والے منفی ماحولیاتی اثرات کو دستاویزی شکل دی۔ کتاب نے اس بات پر روشنی ڈالی کہ یہ کیمیکلز جنگلی حیات، خاص طور پر پرندوں کو کس طرح نقصان پہنچاتے ہیں، اور انسانی صحت کے لیے خطرہ ہیں، جس نے جدید ماحولیاتی تحریک کو جنم دیا۔"
  },
  {
    "id": 984,
    "question": "One among the following is NOT the part of service activity (TSTET 29 May 2024)\nمندرجہ ذیل میں سے ایک خدماتی سرگرمی کا حصہ نہیں ہے",
    "options": [
      "Tailoring\nدرزی کا کام",
      "Bookselling\nکتاب فروشی",
      "Banking\nبینکاری",
      "Auto driving\nآٹو ڈرائیونگ"
    ],
    "correctAnswer": 0,
    "explanation": "اقتصادی سرگرمیوں کو بنیادی (زراعت)، ثانوی (مینوفیکچرنگ)، اور ثالثی (خدمات) شعبوں میں تقسیم کیا گیا ہے۔ بینکاری، کتاب فروشی (خوردہ تجارت)، اور آٹو ڈرائیونگ (ٹرانسپورٹ) سب خدماتی سرگرمیاں ہیں۔ درزی کا کام، جس میں کپڑے (خام مال) کو لباس (تیار شدہ مصنوعات) میں تبدیل کرنا شامل ہے، ایک مینوفیکچرنگ سرگرمی سمجھا جاتا ہے، جو ثانوی شعبے کا حصہ ہے۔"
  },
  {
    "id": 985,
    "question": "The emperor Ashoka sent messangers to Syria. Egypt. Greece and Sri Lanka to spread the (TSTET 29 May 2024)\nشہنشاہ اشوک نے شام، مصر، یونان اور سری لنکا میں قاصد بھیجے تاکہ وہ پھیلا سکیں",
    "options": [
      "religion of Hinduism\nہندو مت کا مذہب",
      "concept of ahimsa\nاہنسا کا تصور",
      "idea of one religion and one God\nایک مذہب اور ایک خدا کا نظریہ",
      "ideas about dhamma\nدھم کے بارے میں نظریات"
    ],
    "correctAnswer": 3,
    "explanation": "کلنگا کی جنگ کے بعد، شہنشاہ اشوک نے بدھ مت قبول کیا اور اپنی کوششوں کو دھم (بدھ مت کی تعلیمات پر مبنی ایک اخلاقی ضابطہ) کے اصولوں کو پھیلانے کے لیے وقف کر دیا۔ اس نے شام، مصر، یونان اور سری لنکا جیسے ممالک میں امن، عدم تشدد اور سماجی ذمہ داری کے ان نظریات کی تبلیغ کے لیے سفیر اور مشنری بھیجے۔"
  },
  {
    "id": 986,
    "question": "These tribals live in the dense forests and hills of the Araku Valley in Vishakhapatnam and in the dense forests of Malkangiri in Odisha (TSTET 29 May 2024)\nیہ قبائلی وشاکھاپٹنم کی اراکو وادی کے گھنے جنگلات اور پہاڑیوں میں اور اڈیشہ کے ملکنگری کے گھنے جنگلات میں رہتے ہیں",
    "options": [
      "Gonds\nگونڈ",
      "Chenchus\nچینچو",
      "Bonda\nبونڈا",
      "Banjaris\nبنجارے"
    ],
    "correctAnswer": 2,
    "explanation": "بونڈا قبیلہ ایک خاص طور پر کمزور قبائلی گروہ (PVTG) ہے جو بنیادی طور پر جنوب مغربی اڈیشہ کے ملکنگری ضلع کے الگ تھلگ پہاڑی علاقوں میں رہتا ہے۔ جبکہ کچھ قبائلی برادریاں اراکو وادی میں پائی جاتی ہیں، بونڈا خاص طور پر مذکورہ ملکنگری علاقے سے وابستہ ہیں۔"
  },
  {
    "id": 987,
    "question": "In Gana form of Government existing in Vajji Mahajanapadha (TSTET 29 May 2024)\nوجی مہاجن پد میں موجود گن طرز کی حکومت میں",
    "options": [
      "There was only one ruler\nصرف ایک حکمران تھا",
      "There were a group of rulers instead of a single ruler\nایک حکمران کے بجائے حکمرانوں کا ایک گروہ تھا",
      "The grihapathis who owned the maximum land ruled the Mahajanapadha\nسب سے زیادہ زمین کے مالک گرہ پتی مہاجن پد پر حکومت کرتے تھے",
      "The performers of rituals ruled the Mahajanapadha\nرسومات ادا کرنے والے مہاجن پد پر حکومت کرتے تھے"
    ],
    "correctAnswer": 1,
    "explanation": "وجی مہاجن پد ایک 'گن-سنگھ' تھا، جو ایک اولیگارکک جمہوریہ تھا۔ ایک بادشاہ کی حکومت والی بادشاہتوں ('راجیہ') کے برعکس، گن-سنگھ میں اقتدار حکمرانوں کی ایک کونسل یا اسمبلی کے پاس تھا، جو اکثر نمایاں کشتری خاندانوں کے سربراہ ہوتے تھے، جو اجتماعی طور پر ریاست پر حکومت کرتے تھے۔"
  },
  {
    "id": 988,
    "question": "One among the following was NOT the famous Parivrajaka (TSTET 29 May 2024)\nمندرجہ ذیل میں سے ایک مشہور پریوراجک نہیں تھا",
    "options": [
      "Gautama Budha\nگوتم بدھ",
      "Vardhamana Mahavira\nوردھمان مہاویر",
      "Makhkhali Goshala\nمکھلی گوشال",
      "Adi Shankara Charya\nآدی شنکراچاریہ"
    ],
    "correctAnswer": 3,
    "explanation": "پریوراجک قدیم ہندوستان میں بدھ اور مہاویر کے زمانے (تقریباً چھٹی صدی قبل مسیح) میں گھومنے پھرنے والے سنیاسی یا اساتذہ تھے۔ گوتم بدھ، وردھمان مہاویر، اور مکھلی گوشال (آجیویکا مکتب کے بانی) نمایاں پریوراجک تھے۔ آدی شنکراچاریہ ایک فلسفی اور عالم دین تھے جو بہت بعد میں، تقریباً آٹھویں صدی عیسوی میں رہتے تھے۔"
  },
  {
    "id": 989,
    "question": "Gurunanak's teachings are now known as nam japna and kirt-karna and vand chakna, which underline the importance of (TSTET 29 May 2024)\nگرونانک کی تعلیمات اب نام جپنا، کرت کرنا اور وند چھکنا کے نام سے جانی جاتی ہیں، جو اس کی اہمیت کو اجاگر کرتی ہیں",
    "options": [
      "right belief, right path and meditation\nصحیح عقیدہ، صحیح راستہ اور مراقبہ",
      "right belief and worship, honest living and helping others\nصحیح عقیدہ اور عبادت، ایماندارانہ زندگی اور دوسروں کی مدد",
      "Contemplation, performance of yoga and worship of God\nغور و فکر، یوگا کی کارکردگی اور خدا کی عبادت",
      "Meditation, Yoga and Contemplation\nمراقبہ، یوگا اور غور و فکر"
    ],
    "correctAnswer": 1,
    "explanation": "گرونانک کی تعلیمات کے تین ستون ہیں: 'نام جپنا' (خدا کے نام پر غور کرنا، جو صحیح عقیدہ اور عبادت کی نمائندگی کرتا ہے)، 'کرت کرنی' (ایمانداری سے روزی کمانا)، اور 'وند چھکنا' (دوسروں کے ساتھ بانٹنا، جو دوسروں کی مدد کی نمائندگی کرتا ہے)۔ یہ اصول سکھ اخلاقیات کا مرکز ہیں۔"
  },
  {
    "id": 990,
    "question": "The theory that is based on the assumption that production and physical forces have an intimate relationship and the surplus value of products should go in favour of the working class (TSTET 29 May 2024)\nوہ نظریہ جو اس مفروضے پر مبنی ہے کہ پیداوار اور طبعی قوتوں کا گہرا تعلق ہے اور مصنوعات کی فاضل قدر محنت کش طبقے کے حق میں جانی چاہیے",
    "options": [
      "Socialism\nسوشلزم",
      "Marxism\nمارکسزم",
      "Communalism\nفرقہ پرستی",
      "Luddhism\nلڈزم"
    ],
    "correctAnswer": 1,
    "explanation": "یہ مارکسزم کے ایک بنیادی اصول کو بیان کرتا ہے۔ کارل مارکس کا فاضل قدر کا نظریہ یہ کہتا ہے کہ کسی مصنوعات کی قدر محنت کش طبقے (پرولتاریہ) کی محنت سے پیدا ہوتی ہے، لیکن فاضل قدر (منافع) کو سرمایہ دار (بورژوازی) غیر منصفانہ طور پر ہتھیا لیتے ہیں۔ مارکسزم ایک ایسے نظام کی وکالت کرتا ہے جہاں یہ فاضل قدر ان مزدوروں کو فائدہ پہنچائے جو اسے پیدا کرتے ہیں۔"
  },
  {
    "id": 991,
    "question": "This has been referred as the shift from an agrarian, handicraft, labour intensive economy into one dominated by machine manufacturers, factories and a free flow of capital (TSTET 29 May 2024)\nاسے زرعی، دستکاری، محنت پر مبنی معیشت سے مشین مینوفیکچررز، فیکٹریوں اور سرمائے کے آزاد بہاؤ پر غلبہ رکھنے والی معیشت میں تبدیلی کہا گیا ہے",
    "options": [
      "Agricultural revolution\nزرعی انقلاب",
      "White Revolution\nسفید انقلاب",
      "Blue Revolution\nنیلا انقلاب",
      "Industrial Revolution\nصنعتی انقلاب"
    ],
    "correctAnswer": 3,
    "explanation": "صنعتی انقلاب، جو 18ویں صدی کے آخر میں شروع ہوا، معیشتوں کی زراعت اور دستکاری پر مبنی ہونے سے صنعتی پیداوار، فیکٹریوں میں مشین مینوفیکچرنگ، اور سرمایہ دارانہ نظام کے عروج پر غلبہ پانے کی بنیادی منتقلی کی نشاندہی کرتا ہے۔"
  },
  {
    "id": 992,
    "question": "Muslim Sultans and Badshahs did not claim to be incarnation of God, but Persian court chronicles described the sultan as (TSTET 29 May 2024)\nمسلمان سلطان اور بادشاہ خدا کا اوتار ہونے کا دعویٰ نہیں کرتے تھے، لیکن فارسی درباری تاریخوں نے سلطان کو اس طرح بیان کیا ہے",
    "options": [
      "The Messenger of God\nخدا کا رسول",
      "The Shadow of God\nخدا کا سایہ",
      "The Servant of God\nخدا کا بندہ",
      "The Sun of God\nخدا کا سورج"
    ],
    "correctAnswer": 1,
    "explanation": "اسلامی سیاسی نظریے میں، خاص طور پر جیسا کہ فارسی درباروں جیسے دہلی سلطنت اور مغل سلطنت میں اپنایا گیا، حکمران کو اکثر 'ظل الٰہی' کہا جاتا تھا، جس کا ترجمہ 'زمین پر خدا کا سایہ' ہے۔ اس لقب نے خود الوہیت کا دعویٰ کیے بغیر حکمران کے اختیار کو الٰہی منظوری اور قانونی حیثیت عطا کی۔"
  },
  {
    "id": 993,
    "question": "One among the following was NOT the founding members of the Indian National Congress (TSTET 29 May 2024)\nمندرجہ ذیل میں سے ایک انڈین نیشنل کانگریس کے بانی اراکین میں سے نہیں تھا",
    "options": [
      "Dadabai Nauroji\nدادا بھائی نوروجی",
      "Badruddin Tyabji\nبدرالدین طیب جی",
      "Mahatma Gandhi\nمہاتما گاندھی",
      "Surendranath Banerjee\nسریندر ناتھ بنرجی"
    ],
    "correctAnswer": 2,
    "explanation": "انڈین نیشنل کانگریس کی بنیاد 1885 میں رکھی گئی تھی۔ دادا بھائی نوروجی، بدرالدین طیب جی، اور سریندر ناتھ بنرجی سبھی نمایاں ابتدائی رہنماؤں میں سے تھے اور اس کے بانی شخصیات میں شامل تھے۔ مہاتما گاندھی 1915 میں جنوبی افریقہ سے ہندوستان واپس آئے اور بہت بعد میں کانگریس میں ایک غالب شخصیت بنے۔"
  },
  {
    "id": 994,
    "question": "The initiator of Nationalism in Hyderabad State was (TSTET 29 May 2024)\nریاست حیدرآباد میں قوم پرستی کا آغاز کرنے والے تھے",
    "options": [
      "Mulla Abdul Qayyum\nملا عبدالقیوم",
      "Aghoranatha Chattopadhyay\nاگهورناتھ چٹوپادھیائے",
      "Nizam Mir Osman Ali Khan\nنظام میر عثمان علی خان",
      "Ravichettu Ranga Rao\nرویچیٹو رنگا راؤ"
    ],
    "correctAnswer": 1,
    "explanation": "ڈاکٹر اگهورناتھ چٹوپادھیائے، ایک سائنسدان اور نظام کالج کے پہلے پرنسپل، 19ویں صدی کے آخر میں حیدرآباد کی شاہی ریاست میں سیاسی اور قومی شعور بیدار کرنے میں ایک کلیدی شخصیت تھے۔ وہ جدید تعلیم اور سماجی اصلاحات کے حامی تھے اور انہیں اس خطے میں قوم پرستی کا علمبردار سمجھا جاتا ہے۔"
  },
  {
    "id": 995,
    "question": "The Qutub Shahi ruler who invited and honoured Kshetrayya, the famous padam writer to his court (TSTET 29 May 2024)\nوہ قطب شاہی حکمران جس نے مشہور پدم نگار کشیتریا کو اپنے دربار میں مدعو کیا اور عزت افزائی کی",
    "options": [
      "Abul Hasan Tanashah\nابوالحسن تاناشاہ",
      "Abdullah Qutub Shah\nعبداللہ قطب شاہ",
      "Mohd. Qutub Shah\nمحمد قطب شاہ",
      "Mohd. Quli Qutub Shah\nمحمد قلی قطب شاہ"
    ],
    "correctAnswer": 1,
    "explanation": "عبداللہ قطب شاہ، گولکنڈہ سلطنت کے ساتویں حکمران (دور حکومت 1626-1672)، فنون اور ادب، خاص طور پر تیلگو ادب کے عظیم سرپرست تھے۔ انہوں نے مشہور پدم کمپوزر کشیتریا کو اپنے دربار میں مدعو کیا اور موسیقی اور شاعری میں ان کی خدمات کے لیے انہیں عزت بخشی۔"
  },
  {
    "id": 996,
    "question": "In 1806 CE, this ruler of France conquered the small and independent kingdoms of Germany and formed Rhine Confederation (TSTET 29 May 2024)\n1806 عیسوی میں، فرانس کے اس حکمران نے جرمنی کی چھوٹی اور آزاد ریاستوں کو فتح کیا اور رائن کنفیڈریشن تشکیل دی",
    "options": [
      "Louis Phillippe\nلوئس فلپ",
      "Napolean Bonaparte\nنپولین بوناپارٹ",
      "Charles X\nچارلس دہم",
      "Louis XVIII\nلوئس ہجدہم"
    ],
    "correctAnswer": 1,
    "explanation": "1806 میں، آسٹرلٹز کی جنگ میں آسٹریا اور روس پر اپنی فتح کے بعد، نپولین بوناپارٹ نے جرمن ریاستوں کی تنظیم نو کی۔ اس نے مقدس رومی سلطنت کو تحلیل کیا اور رائن کی کنفیڈریشن قائم کی، جو پہلی فرانسیسی سلطنت کی ماتحت ریاستوں کی ایک کنفیڈریشن تھی، جس نے بہت سے جرمن علاقوں کو اپنے کنٹرول میں لے لیا۔"
  },
  {
    "id": 997,
    "question": "The provision of a federal system with a strong central government was adapted from this constitution (TSTET 29 May 2024)\nایک مضبوط مرکزی حکومت کے ساتھ وفاقی نظام کی فراہمی اس آئین سے اخذ کی گئی تھی",
    "options": [
      "Canadian Constitution\nکینیڈین آئین",
      "French Constitution\nفرانسیسی آئین",
      "Irish Constitution\nآئرش آئین",
      "United States Constitution\nریاستہائے متحدہ کا آئین"
    ],
    "correctAnswer": 0,
    "explanation": "ہندوستانی آئین کے بنانے والوں نے کینیڈین آئین سے ایک نیم وفاقی نظام کا تصور مستعار لیا، جس میں ریاستوں کے مقابلے میں ایک مضبوط مرکزی حکومت کی خصوصیت ہے۔ اس میں اختیارات کی تقسیم، مرکز کے پاس بقایا اختیارات، اور مرکز کی طرف سے ریاستی گورنروں کی تقرری شامل ہے۔"
  },
  {
    "id": 998,
    "question": "The Indian Constitution contains the Directive Principles of State Policy (DPSP) in (TSTET 29 May 2024)\nہندوستانی آئین میں ریاستی پالیسی کے رہنما اصول (DPSP) کس میں شامل ہیں",
    "options": [
      "Part IV. Articles 12-35\nحصہ چہارم۔ آرٹیکلز 12-35",
      "Part V. Articles 36-51\nحصہ پنجم۔ آرٹیکلز 36-51",
      "Part IV, Articles 36-51\nحصہ چہارم، آرٹیکلز 36-51",
      "Part III, Articles 36-51\nحصہ سوم، آرٹیکلز 36-51"
    ],
    "correctAnswer": 2,
    "explanation": "ریاستی پالیسی کے رہنما اصول (DPSP) ہندوستانی آئین کے حصہ چہارم میں، آرٹیکل 36 سے 51 تک درج ہیں۔ یہ اصول ریاست کے لیے حکمرانی میں عمل کرنے کے لیے رہنما اصول ہیں، حالانکہ وہ کسی بھی عدالت کے ذریعے قابل نفاذ نہیں ہیں۔"
  },
  {
    "id": 999,
    "question": "Election Commissioners are appointed by (TSTET 29 May 2024)\nالیکشن کمشنرز کی تقرری کون کرتا ہے",
    "options": [
      "the President of India on the resolution of the both the Houses of Parliament\nبھارت کے صدر، پارلیمنٹ کے دونوں ایوانوں کی قرارداد پر",
      "the President of India on the advice of the Council of Ministers and chief ministers of all the states\nبھارت کے صدر، وزراء کی کونسل اور تمام ریاستوں کے وزرائے اعلیٰ کے مشورے پر",
      "the President of India on the advice of the Central Council of Ministers, leader of opposition and the Chief Justice of India\nبھارت کے صدر، مرکزی وزراء کی کونسل، قائد حزب اختلاف اور بھارت کے چیف جسٹس کے مشورے پر",
      "the President of India on the advice of the Central Council of Ministers\nبھارت کے صدر، مرکزی وزراء کی کونسل کے مشورے پر"
    ],
    "correctAnswer": 3,
    "explanation": "آئین کے آرٹیکل 324 کے مطابق، چیف الیکشن کمشنر اور دیگر الیکشن کمشنرز کی تقرری بھارت کے صدر کرتے ہیں۔ روایت کے مطابق، یہ تقرری وزیر اعظم کی سربراہی میں مرکزی وزراء کی کونسل کے مشورے پر کی جاتی ہے۔"
  },
  {
    "id": 1000,
    "question": "Rajya Sabha can delay the Money Bill passed by the Lok Sabha for a period not exceeding (TSTET 29 May 2024)\nراجیہ سبھا لوک سبھا سے منظور شدہ منی بل کو کتنی مدت سے زیادہ تاخیر نہیں کر سکتی",
    "options": [
      "14 days\n14 دن",
      "30 days\n30 دن",
      "15 days\n15 دن",
      "10 days\n10 دن"
    ],
    "correctAnswer": 0,
    "explanation": "ہندوستانی آئین کے آرٹیکل 109 کے مطابق، منی بل صرف لوک سبھا میں پیش کیا جا سکتا ہے۔ لوک سبھا سے منظور ہونے کے بعد، اسے راجیہ سبھا کو اس کی سفارشات کے لیے بھیجا جاتا ہے۔ راجیہ سبھا منی بل کو مسترد یا اس میں ترمیم نہیں کر سکتی؛ وہ صرف سفارشات دے سکتی ہے اور اسے 14 دن کے اندر بل واپس کرنا ہوتا ہے۔"
  },
  {
    "id": 1001,
    "question": "The Judge of the Supreme Court can be removed by (TSTET 29 May 2024)\nسپریم کورٹ کے جج کو کس کے ذریعے ہٹایا جا سکتا ہے؟",
    "options": [
      "The President on the resolution passed with special majority in the both houses of parliament\nصدر، پارلیمنٹ کے دونوں ایوانوں میں خصوصی اکثریت سے منظور شدہ قرارداد پر",
      "The President on the recommendation of the cabinet minister\nصدر، کابینہ کے وزیر کی سفارش پر",
      "The President on his/her own discretion\nصدر، اپنی صوابدید پر",
      "Chief Justice of the Supreme Court\nسپریم کورٹ کے چیف جسٹس"
    ],
    "correctAnswer": 0,
    "explanation": "سپریم کورٹ کے جج کو ہٹانے کا طریقہ کار آئین کے آرٹیکل 124(4) میں تفصیل سے بیان کیا گیا ہے۔ ایک جج کو صدر کے حکم سے ہٹایا جا سکتا ہے، لیکن صرف اس وقت جب پارلیمنٹ کی طرف سے ایک قرارداد، جسے خصوصی اکثریت کی حمایت حاصل ہو، ثابت شدہ بدعنوانی یا نااہلی کی بنیاد پر ہٹانے کے لیے صدر کو پیش کی جائے۔"
  },
  {
    "id": 1002,
    "question": "The voting age was decreased from 21 years to 18 years for both Lok Sabha and Legislative Assemblies elections with this constitutional amendment (TSTET 29 May 2024)\nکس آئینی ترمیم کے ذریعے لوک سبھا اور قانون ساز اسمبلیوں کے انتخابات کے لیے ووٹ ڈالنے کی عمر 21 سال سے کم کر کے 18 سال کر دی گئی تھی؟",
    "options": [
      "73rd amendment Act\n73ویں ترمیمی ایکٹ",
      "44th Amendment Act\n44ویں ترمیمی ایکٹ",
      "61st amendment Act\n61ویں ترمیمی ایکٹ",
      "52nd amendment Act\n52ویں ترمیمی ایکٹ"
    ],
    "correctAnswer": 2,
    "explanation": "1988 کے 61ویں آئینی ترمیمی ایکٹ نے لوک سبھا اور ریاستوں کی قانون ساز اسمبلیوں کے انتخابات کے لیے ووٹ ڈالنے کی عمر 21 سال سے کم کر کے 18 سال کر دی۔ اس نے آئین کے آرٹیکل 326 میں ترمیم کی۔"
  },
  {
    "id": 1003,
    "question": "This constitution schedule deals with the official languages recognized by the Constitution of India (TSTET 29 May 2024)\nآئین کا یہ شیڈول ہندوستان کے آئین کے ذریعہ تسلیم شدہ سرکاری زبانوں سے متعلق ہے",
    "options": [
      "8th Schedule\n8واں شیڈول",
      "7th Schedule\n7واں شیڈول",
      "5th Schedule\n5واں شیڈول",
      "4th Schedule\n4واں شیڈول"
    ],
    "correctAnswer": 0,
    "explanation": "ہندوستان کے آئین کا آٹھواں شیڈول جمہوریہ ہند کی سرکاری زبانوں کی فہرست دیتا ہے۔ اب تک، یہ 22 زبانوں کو تسلیم کرتا ہے۔ ساتواں شیڈول یونین اور ریاستوں کے درمیان اختیارات کی تقسیم سے متعلق ہے۔"
  },
  {
    "id": 1004,
    "question": "Identify the INCORRECT statement about Local Government in India, (TSTET 29 May 2024)\nہندوستان میں مقامی حکومت کے بارے میں غلط بیان کی نشاندہی کریں",
    "options": [
      "Local bodies generate their revenue from property tax, water charges, license fees and other levies.\nمقامی ادارے اپنی آمدنی پراپرٹی ٹیکس، پانی کے چارجز، لائسنس فیس اور دیگر محصولات سے حاصل کرتے ہیں۔",
      "The State Election Commission is responsible for administering elections to the Local Self Government\nریاستی الیکشن کمیشن مقامی خود مختار حکومت کے انتخابات کے انعقاد کا ذمہ دار ہے۔",
      "Local Government bodies are autonomous bodies\nمقامی حکومتی ادارے خود مختار ادارے ہیں۔",
      "The term of the local body government is six years.\nمقامی ادارے کی حکومت کی مدت چھ سال ہے۔"
    ],
    "correctAnswer": 3,
    "explanation": "یہ بیان غلط ہے۔ 73ویں اور 74ویں آئینی ترمیمی ایکٹ کے مطابق، تمام مقامی حکومتی اداروں (دیہی اور شہری دونوں) کی مدت ان کی پہلی میٹنگ کی تاریخ سے پانچ سال مقرر ہے، نہ کہ چھ سال۔"
  },
  {
    "id": 1005,
    "question": "Pick the correct one about the constitution of Security Council of UNO (TSTET 29 May 2024)\nاقوام متحدہ کی سلامتی کونسل کی تشکیل کے بارے میں صحیح بیان منتخب کریں",
    "options": [
      "The Security Council is made up of fifteen member states, consisting of five permanent members and ten non-permanent members, elected for five-year term by the General Assembly\nسلامتی کونسل پندرہ رکن ممالک پر مشتمل ہے، جس میں پانچ مستقل اراکین اور دس غیر مستقل اراکین شامل ہیں، جنہیں جنرل اسمبلی پانچ سال کی مدت کے لیے منتخب کرتی ہے۔",
      "The Security Council is made up of ten member states, consisting of five permanent members and five non-permanent members elected for a two-year term by the General Assembly\nسلامتی کونسل دس رکن ممالک پر مشتمل ہے، جس میں پانچ مستقل اراکین اور پانچ غیر مستقل اراکین شامل ہیں جنہیں جنرل اسمبلی دو سال کی مدت کے لیے منتخب کرتی ہے۔",
      "The Security Council is made up of fifteen member states, consisting of five permanent members and ten non-permanent members, elected for a two-year term by the General Assembly\nسلامتی کونسل پندرہ رکن ممالک پر مشتمل ہے، جس میں پانچ مستقل اراکین اور دس غیر مستقل اراکین شامل ہیں، جنہیں جنرل اسمبلی دو سال کی مدت کے لیے منتخب کرتی ہے۔",
      "The Security Council is made up of twenty member states, consisting of five permanent members and fifteen non-permanent members elected for two-year term by the General Assembly\nسلامتی کونسل بیس رکن ممالک پر مشتمل ہے، جس میں پانچ مستقل اراکین اور پندرہ غیر مستقل اراکین شامل ہیں جنہیں جنرل اسمبلی دو سال کی مدت کے لیے منتخب کرتی ہے۔"
    ],
    "correctAnswer": 2,
    "explanation": "اقوام متحدہ کی سلامتی کونسل 15 اراکین پر مشتمل ہے۔ ان میں سے پانچ مستقل اراکین (P5) ہیں: چین، فرانس، روس، برطانیہ، اور امریکہ۔ باقی دس غیر مستقل اراکین ہیں جنہیں جنرل اسمبلی دو سال کی مدت کے لیے منتخب کرتی ہے۔"
  },
  {
    "id": 1006,
    "question": "The minimum population required for a city to become Municipal Corporation is (TSTET 29 May 2024)\nکسی شہر کو میونسپل کارپوریشن بننے کے لیے کم از کم کتنی آبادی درکار ہے؟",
    "options": [
      "more than 10 lakhs\n10 لاکھ سے زیادہ",
      "more than 3 lakhs\n3 لاکھ سے زیادہ",
      "more than 15 lakhs\n15 لاکھ سے زیادہ",
      "more than 1 lakh\n1 لاکھ سے زیادہ"
    ],
    "correctAnswer": 0,
    "explanation": "اگرچہ آبادی کا صحیح معیار ریاستی قانون سازی کی بنیاد پر ریاست سے ریاست میں تھوڑا مختلف ہو سکتا ہے، لیکن میونسپل کارپوریشن عام طور پر بڑے شہری علاقوں کے لیے قائم کی جاتی ہے، جن کی آبادی عموماً 10 لاکھ (1 ملین) سے زیادہ ہوتی ہے۔"
  },
  {
    "id": 1007,
    "question": "The words 'socialist' and 'secular' were made a part of the Preamble by (TSTET 29 May 2024)\n'سوشلسٹ' اور 'سیکولر' کے الفاظ کس ترمیم کے ذریعے تمہید کا حصہ بنائے گئے؟",
    "options": [
      "52nd amendment\n52ویں ترمیم",
      "46th amendment\n46ویں ترمیم",
      "44th amendment\n44ویں ترمیم",
      "42nd amendment\n42ویں ترمیم"
    ],
    "correctAnswer": 3,
    "explanation": "1976 کے 42ویں آئینی ترمیمی ایکٹ، جو ایمرجنسی کے دوران نافذ کیا گیا تھا، نے تمہید میں تین نئے الفاظ شامل کیے: 'سوشلسٹ'، 'سیکولر'، اور 'انٹیگریٹی'۔"
  },
  {
    "id": 1008,
    "question": "The following country is NOT a member of SAARC (TSTET 29 May 2024)\nدرج ذیل میں سے کون سا ملک سارک کا رکن نہیں ہے؟",
    "options": [
      "Thailand\nتھائی لینڈ",
      "Bhutan\nبھوٹان",
      "Pakistan\nپاکستان",
      "Maldives\nمالدیپ"
    ],
    "correctAnswer": 0,
    "explanation": "جنوبی ایشیائی علاقائی تعاون کی تنظیم (سارک) کے آٹھ رکن ممالک ہیں: افغانستان، بنگلہ دیش، بھوٹان، ہندوستان، مالدیپ، نیپال، پاکستان، اور سری لنکا۔ تھائی لینڈ آسیان (جنوب مشرقی ایشیائی ممالک کی تنظیم) کا رکن ہے، سارک کا نہیں۔"
  },
  {
    "id": 1009,
    "question": "The statement \"The social studies program is defined as the study of man and his interaction with his social and physical environment in the past, present and emerging future\" - was quoted by (TSTET 29 May 2024)\nیہ بیان \"سماجی علوم کے پروگرام کی تعریف انسان اور اس کے ماضی، حال اور ابھرتے ہوئے مستقبل میں اس کے سماجی اور طبعی ماحول کے ساتھ تعامل کے مطالعہ کے طور پر کی جاتی ہے\" - کس نے کہا تھا؟",
    "options": [
      "J.F Forester\nجے. ایف. فوریسٹر",
      "John U. Michaelis\nجان یو. مائیکلز",
      "E.B. Wesley\nای. بی. ویسلے",
      "James Hemmings\nجیمز ہیمنگز"
    ],
    "correctAnswer": 1,
    "explanation": "سماجی علوم کی یہ جامع تعریف، جو وقت کے ساتھ سماجی اور طبعی ماحول کے ساتھ انسانی تعامل کے مطالعہ پر زور دیتی ہے، مشہور امریکی ماہر تعلیم اور سماجی علوم کے نصاب کے مصنف جان یو. مائیکلز سے منسوب ہے۔"
  },
  {
    "id": 1010,
    "question": "The advantages of teaching social studies at school level are A) Social learning B) Competence in Tackling problems C) Training in Non-cooperation D) Development of the power of thinking and reasoning. Choose the correct one (TSTET 29 May 2024)\nاسکول کی سطح پر سماجی علوم پڑھانے کے فوائد یہ ہیں: A) سماجی تعلیم B) مسائل سے نمٹنے کی اہلیت C) عدم تعاون کی تربیت D) سوچنے اور استدلال کی طاقت کی نشوونما۔ صحیح انتخاب کریں",
    "options": [
      "A, B & C only\nصرف A, B & C",
      "A, B & D only\nصرف A, B & D",
      "A, C & D only\nصرف A, C & D",
      "A, B, C & D\nA, B, C & D"
    ],
    "correctAnswer": 1,
    "explanation": "سماجی علوم کی تعلیم کا مقصد سماجی تعلیم (معاشرے کو سمجھنا)، مسائل سے نمٹنے کی اہلیت پیدا کرنا، اور تنقیدی سوچ اور استدلال کی مہارتوں کو بڑھانا ہے۔ 'عدم تعاون کی تربیت' سماجی علوم کے اہداف کے خلاف ہے، جو تعاون اور شہری ذمہ داری کو فروغ دیتا ہے۔ لہذا، A، B، اور D صحیح فوائد ہیں۔"
  },
  {
    "id": 1011,
    "question": "The teaching method which is a combination of both inductive and deductive methods is (TSTET 29 May 2024)\nوہ تدریسی طریقہ جو استقرائی اور استخراجی دونوں طریقوں کا مجموعہ ہے",
    "options": [
      "Problem solving method\nمسئلہ حل کرنے کا طریقہ",
      "Project method\nپروجیکٹ کا طریقہ",
      "Analytical method\nتجزیاتی طریقہ",
      "Laboratory method\nلیبارٹری کا طریقہ"
    ],
    "correctAnswer": 2,
    "explanation": "تجزیاتی طریقہ میں کسی مسئلے کو اس کے اجزاء میں تقسیم کرنا اور پھر حل کی طرف بڑھنا شامل ہے۔ اس عمل میں اکثر استقرائی استدلال (عام خیال بنانے کے لیے حصوں کا مشاہدہ کرنا) اور استخراجی استدلال (عام اصولوں کو مخصوص حصوں پر لاگو کرنا) دونوں شامل ہوتے ہیں، جو اسے دونوں طریقوں کا امتزاج بناتا ہے۔"
  },
  {
    "id": 1012,
    "question": "The modern approach in teaching Social Studies is (TSTET 29 May 2024)\nسماجی علوم کی تدریس میں جدید نقطہ نظر ہے",
    "options": [
      "Student-centered approach\nطالب علم پر مبنی نقطہ نظر",
      "Teacher-centered approach\nاستاد پر مبنی نقطہ نظر",
      "Subject-centered approach\nمضمون پر مبنی نقطہ نظر",
      "Activity-centered approach\nسرگرمی پر مبنی نقطہ نظر"
    ],
    "correctAnswer": 0,
    "explanation": "سماجی علوم میں جدید تدریس طالب علم پر مبنی نقطہ نظر پر زور دیتی ہے۔ یہ نقطہ نظر سیکھنے والے کی فعال شمولیت، انفرادی ضروریات کو پورا کرنے، اور صرف استاد سے غیر فعال طور پر معلومات حاصل کرنے کے بجائے تنقیدی سوچ اور تحقیق جیسی مہارتوں کو فروغ دینے پر مرکوز ہے۔"
  },
  {
    "id": 1013,
    "question": "Social Science Exhibitions in schools can be organised at (TSTET 29 May 2024)\nاسکولوں میں سماجی سائنس کی نمائشیں منعقد کی جا سکتی ہیں",
    "options": [
      "School level\nاسکول کی سطح پر",
      "District level\nضلعی سطح پر",
      "State level\nریاستی سطح پر",
      "All the above\nمندرجہ بالا تمام"
    ],
    "correctAnswer": 3,
    "explanation": "سماجی سائنس کی نمائشیں ورسٹائل تعلیمی سرگرمیاں ہیں جنہیں مختلف سطحوں پر مؤثر طریقے سے منظم کیا جا سکتا ہے: ایک ہی اسکول کے اندر، ضلعی سطح پر اسکولوں کے درمیان مقابلے کے طور پر، یا ریاستی سطح پر ایک بڑے پروگرام کے طور پر، جس سے بتدریج وسیع تر شرکت کی اجازت ملتی ہے۔"
  },
  {
    "id": 1014,
    "question": "The first step in a project method is (TSTET 29 May 2024)\nپروجیکٹ کے طریقہ کار میں پہلا قدم ہے",
    "options": [
      "Execution of the project\nپروجیکٹ پر عمل درآمد",
      "Providing a situation\nایک صورتحال فراہم کرنا",
      "Planning\nمنصوبہ بندی",
      "Recording\nریکارڈنگ"
    ],
    "correctAnswer": 1,
    "explanation": "پروجیکٹ کا طریقہ، جسے ولیم ہرڈ کلپیٹرک نے تیار کیا، استاد کی طرف سے ایک ایسی 'صورتحال فراہم کرنے' سے شروع ہوتا ہے جو حقیقی، مسئلہ انگیز، اور طلباء کے لیے دلچسپ ہو۔ یہ ابتدائی قدم طلباء کی دلچسپی کو ابھارنے اور ایک ایسا سیاق و سباق فراہم کرنے کے لیے اہم ہے جس سے ایک بامقصد پروجیکٹ کا انتخاب اور منصوبہ بندی کی جا سکے۔"
  },
  {
    "id": 1015,
    "question": "'An Atlas is a collection of maps in a bound form'- in social studies teaching atlas is considered as (TSTET 29 May 2024)\n'اٹلس ایک جلد کی شکل میں نقشوں کا مجموعہ ہے' - سماجی علوم کی تدریس میں اٹلس کو سمجھا جاتا ہے",
    "options": [
      "Teaching device\nتدریسی آلہ",
      "Teaching aid\nتدریسی امداد",
      "Teaching skill\nتدریسی مہارت",
      "Teaching method\nتدریسی طریقہ"
    ],
    "correctAnswer": 1,
    "explanation": "تدریسی امداد کوئی بھی آلہ یا چیز ہے جسے استاد سیکھنے کو بہتر بنانے کے لیے استعمال کرتا ہے۔ ایک اٹلس، جو نقشوں کا مجموعہ ہے، ایک بصری امداد ہے جو طلباء کو جغرافیہ، مقامی تعلقات، اور مقامات کو سمجھنے میں مدد کرنے کے لیے استعمال ہوتی ہے، اس طرح یہ تدریسی امداد کی تعریف پر پورا اترتی ہے۔"
  },
  {
    "id": 1016,
    "question": "The following is NOT an advantage of Unit planning in Social studies (TSTET 29 May 2024)\nدرج ذیل میں سے کون سا سماجی علوم میں یونٹ کی منصوبہ بندی کا فائدہ نہیں ہے؟",
    "options": [
      "It helps the teacher to be more purposeful and organised.\nیہ استاد کو زیادہ بامقصد اور منظم بننے میں مدد کرتا ہے۔",
      "It develops interest among students\nیہ طلباء میں دلچسپی پیدا کرتا ہے۔",
      "It gives much scope for cramming\nیہ رٹنے کی بہت گنجائش دیتا ہے۔",
      "It ensures better learning experiences\nیہ بہتر سیکھنے کے تجربات کو یقینی بناتا ہے۔"
    ],
    "correctAnswer": 2,
    "explanation": "یونٹ کی منصوبہ بندی میں گہری سمجھ اور بامعنی تعلیم کو فروغ دینے کے لیے ایک مرکزی موضوع کے ارد گرد ہدایات کو منظم کرنا شامل ہے۔ یہ نقطہ نظر رٹہ لگانے یا 'رٹنے' کی حوصلہ شکنی کے لیے ڈیزائن کیا گیا ہے۔ لہذا، رٹنے کی گنجائش دینا کوئی فائدہ نہیں ہے؛ مؤثر یونٹ کی منصوبہ بندی کا مقصد اسے روکنا ہے۔"
  },
  {
    "id": 1017,
    "question": "The concept of 'Action Research' was introduced by (TSTET 29 May 2024)\n'ایکشن ریسرچ' کا تصور کس نے متعارف کرایا؟",
    "options": [
      "Kurt Lewin\nکرٹ لیون",
      "Stephen M. Corey\nاسٹیفن ایم. کوری",
      "J.S. Mill\nجے. ایس. مل",
      "J. W. Best\nجے. ڈبلیو. بیسٹ"
    ],
    "correctAnswer": 0,
    "explanation": "'ایکشن ریسرچ' کی اصطلاح کا سہرا سماجی ماہر نفسیات کرٹ لیون کو جاتا ہے، جنہوں نے اسے پہلی بار 1940 کی دہائی میں وضع کیا۔ انہوں نے اسے سماجی حالات میں عملی مسائل کو حل کرنے کے لیے منصوبہ بندی، عمل، مشاہدہ اور غور و فکر کے ایک چکری عمل کے طور پر تصور کیا۔ اسٹیفن ایم. کوری نے بعد میں اس تصور کو تعلیم پر لاگو کیا۔"
  },
  {
    "id": 1018,
    "question": "Good evaluation should possess these qualities: A) Validity B) Objectivity C) Unreliability D) Usability (TSTET 29 May 2024)\nایک اچھے جائزے میں یہ خصوصیات ہونی چاہئیں: A) جواز B) معروضیت C) عدم اعتباریت D) قابل استعمال ہونا",
    "options": [
      "A, B & D\nA, B & D",
      "A, B & C\nA, B & C",
      "A, C & D\nA, C & D",
      "B, C & D\nB, C & D"
    ],
    "correctAnswer": 0,
    "explanation": "ایک اچھے جائزے کے آلے کی کلیدی خصوصیات جواز (یہ وہی ناپتا ہے جو اسے ناپنا چاہیے)، معروضیت (اسکورنگ تعصب سے پاک ہے)، اعتباریت (یہ مستقل نتائج دیتا ہے)، اور قابل استعمال ہونا (اسے نافذ کرنا عملی ہے) ہیں۔ عدم اعتباریت ایک مطلوبہ خوبی کے برعکس ہے۔ لہذا، A، B، اور D صحیح خصوصیات ہیں۔"
  },
  {
    "id": 1019,
    "question": "The full form of CCE is (TSTET 29 May 2024)\nCCE کا مکمل نام ہے",
    "options": [
      "Continuous and Cumulative Evaluation\nمسلسل اور مجموعی جائزہ",
      "Continuous and Corporate Evaluation\nمسلسل اور کارپوریٹ جائزہ",
      "Comprehensive and Continuous Education\nجامع اور مسلسل تعلیم",
      "Continuous and Comprehensive Evaluation\nمسلسل اور جامع جائزہ"
    ],
    "correctAnswer": 3,
    "explanation": "CCE کا مطلب ہے 'مسلسل اور جامع جائزہ'۔ یہ ایک طالب علم کی ترقی کے تمام پہلوؤں کا احاطہ کرنے کے لیے اسکول پر مبنی جائزے کا ایک نظام تھا۔ 'مسلسل' سے مراد باقاعدہ جائزے ہیں، اور 'جامع' سے مراد تعلیمی (اکیڈمک) اور ہم نصابی (زندگی کی مہارتیں، رویے) دونوں شعبوں کا جائزہ ہے۔"
  },
  {
    "id": 1020,
    "question": "The founder of 'Problem Solving Method' is (TSTET 29 May 2024)\n'مسئلہ حل کرنے کے طریقے' کے بانی ہیں",
    "options": [
      "John Dewey\nجان ڈیوی",
      "John Adams\nجان ایڈمز",
      "Plato\nافلاطون",
      "Socrates\nسقراط"
    ],
    "correctAnswer": 0,
    "explanation": "تعلیم میں مسئلہ حل کرنے کا طریقہ امریکی فلسفی اور ماہر تعلیم جان ڈیوی سے مضبوطی سے وابستہ ہے۔ انہوں نے ایک ایسے سیکھنے کے عمل کی وکالت کی جو ایک حقیقی مسئلے سے شروع ہوتا ہے، جس کے بعد تحقیق، مفروضہ سازی، اور جانچ ہوتی ہے۔"
  },
  {
    "id": 1021,
    "question": "Identify the correct sequence of the given temperatures in the ascending order (12°C, -16°C, 29°C, 0°C, 4°C, 1°C, -1°C, -4°C, 16°C) (TSTET 24 May 2024)\nدیئے گئے درجہ حرارت کی صعودی ترتیب میں صحیح ترتیب کی نشاندہی کریں (12°C, -16°C, 29°C, 0°C, 4°C, 1°C, -1°C, -4°C, 16°C)",
    "options": [
      "0°C, -1°C, 1°C, -4°C, 4°C, 12°C, -16°C, 16°C, 29°C",
      "-16°C, -4°C, -1°C, 0°C, 1°C, 4°C, 12°C, 16°C, 29°C",
      "-1°C, 4°C, -4°C, -16°C, 0°C, 1°C, 12°C, 16°C, 29°C",
      "29°C, 16°C, 12°C, 4°C, 1°C, 0°C, -1°C, -4°C, -16°C"
    ],
    "correctAnswer": 1,
    "explanation": "صعودی ترتیب کا مطلب ہے اعداد کو سب سے چھوٹے سے سب سے بڑے تک ترتیب دینا۔ درجہ حرارت میں، منفی قدریں سب سے ٹھنڈی (سب سے چھوٹی) ہوتی ہیں۔ صحیح ترتیب سب سے زیادہ منفی قدر (-16°C) سے شروع ہوتی ہے اور سب سے بڑی مثبت قدر (29°C) کی طرف بڑھتی ہے۔"
  },
  {
    "id": 1022,
    "question": "When it is 2 pm at 'X' located at 45° Eastern longitude, the local time of a place 'Y' located at 45° Western Longitude is (TSTET 24 May 2024)\nجب 45° مشرقی طول البلد پر واقع 'X' پر دوپہر کے 2 بجے ہوں، تو 45° مغربی طول البلد پر واقع ایک مقام 'Y' کا مقامی وقت کیا ہوگا؟",
    "options": [
      "6.00 am\nصبح 6:00 بجے",
      "8.00 am\nصبح 8:00 بجے",
      "8.00 pm\nشام 8:00 بجے",
      "6.00 pm\nشام 6:00 بجے"
    ],
    "correctAnswer": 1,
    "explanation": "طول البلد میں کل فرق 45° مشرق + 45° مغرب = 90° ہے۔ زمین 1° 4 منٹ میں گھومتی ہے۔ لہذا، وقت کا فرق 90° × 4 منٹ/° = 360 منٹ ہے، جو کہ 6 گھنٹے ہے۔ چونکہ مقام 'Y' 'X' کے مغرب میں ہے، اس کا وقت پہلے ہوگا۔ لہذا، 2 بجے (14:00) میں سے 6 گھنٹے نکالنے پر صبح 8:00 بجے کا وقت ہوگا۔"
  },
  {
    "id": 1023,
    "question": "Identify the true statement among the following regarding the Internal Structure of the Earth (TSTET 24 May 2024)\nزمین کی اندرونی ساخت کے بارے میں درج ذیل میں سے صحیح بیان کی نشاندہی کریں",
    "options": [
      "The outer layer of the earth is known as Mantle\nزمین کی بیرونی تہہ کو مینٹل کہا جاتا ہے۔",
      "The crust is mainly composed of Gold and ferrous\nکرسٹ بنیادی طور پر سونے اور لوہے پر مشتمل ہے۔",
      "The density of the material in the mantle is more than the density of the material in the outer core\nمینٹل میں موجود مواد کی کثافت بیرونی کور میں موجود مواد کی کثافت سے زیادہ ہے۔",
      "The outer Core of the earth is composed of liquid metallic material like Nickel and Ferrous\nزمین کا بیرونی کور مائع دھاتی مواد جیسے نکل اور فیرس پر مشتمل ہے۔"
    ],
    "correctAnswer": 3,
    "explanation": "زمین کی اندرونی ساخت کرسٹ، مینٹل اور کور پر مشتمل ہے۔ بیرونی کور ایک مائع تہہ ہے جو بنیادی طور پر آئرن (فیرس) اور نکل پر مشتمل ہے۔ کرسٹ سب سے بیرونی تہہ ہے، اور گہرائی کے ساتھ کثافت بڑھتی ہے، جس سے بیرونی کور مینٹل سے زیادہ کثیف ہو جاتا ہے۔"
  },
  {
    "id": 1024,
    "question": "As per the Geologists, weathering, erosion, transportation and deposition are responsible for the formation of these landforms (TSTET 24 May 2024)\nماہرین ارضیات کے مطابق، موسم، کٹاؤ، نقل و حمل اور جمع ہونا ان زمینی شکلوں کی تشکیل کے لیے ذمہ دار ہیں",
    "options": [
      "The First order landforms\nپہلے درجے کی زمینی شکلیں",
      "The Second order landforms\nدوسرے درجے کی زمینی شکلیں",
      "The Third order landforms\nتیسرے درجے کی زمینی شکلیں",
      "The First and the Second order landforms\nپہلے اور دوسرے درجے کی زمینی شکلیں"
    ],
    "correctAnswer": 2,
    "explanation": "زمینی شکلوں کو تین درجوں میں تقسیم کیا گیا ہے۔ پہلے درجے میں براعظم اور سمندری طاس شامل ہیں۔ دوسرے درجے میں پہاڑ، سطح مرتفع اور میدان شامل ہیں۔ تیسرے درجے کی زمینی شکلیں بیرونی عوامل جیسے موسم اور کٹاؤ سے بنتی ہیں، جس کے نتیجے میں وادیاں، ڈیلٹا اور ریت کے ٹیلے جیسی خصوصیات پیدا ہوتی ہیں۔"
  },
  {
    "id": 1025,
    "question": "The Himalayan Mountains were formed by this process of (TSTET 24 May 2024)\nہمالیائی پہاڑ اس عمل سے بنے تھے",
    "options": [
      "The Eurasian Plate pushing into the Indian Ocean.\nیوریشین پلیٹ کا بحر ہند میں دھکیلنا۔",
      "The Indian plate pushing into the Eurasian Plate\nہندوستانی پلیٹ کا یوریشین پلیٹ میں دھکیلنا",
      "Rising up of Lava from the Mantle\nمینٹل سے لاوے کا ابھرنا",
      "Sea floor spreading\nسمندری فرش کا پھیلاؤ"
    ],
    "correctAnswer": 1,
    "explanation": "ہمالیہ نوجوان تہہ دار پہاڑ ہیں جو ہندوستانی ٹیکٹونک پلیٹ کے یوریشین ٹیکٹونک پلیٹ سے ٹکرانے سے بنے ہیں۔ اس براعظمی-براعظمی ٹکراؤ کی وجہ سے زمین تہہ در تہہ ہو گئی، جس سے یہ پہاڑی سلسلہ وجود میں آیا۔"
  },
  {
    "id": 1026,
    "question": "Match the local winds: A. Loo, B. Chinook, C. Mistral, D. Pampero with their descriptions: (i) Cold wind over France, (ii) Hot wind in USA/Canada, (iii) Cold wind in South America, (iv) Hot wind in North India (TSTET 24 May 2024)\nمقامی ہواؤں کو ان کی تفصیلات سے ملائیں: A. لو، B. چینوک، C. مسٹرل، D. پمپیرو: (i) فرانس پر سرد ہوا، (ii) امریکہ/کینیڈا میں گرم ہوا، (iii) جنوبی امریکہ میں سرد ہوا، (iv) شمالی ہندوستان میں گرم ہوا",
    "options": [
      "A-iv, B-i, C-ii, D-iii",
      "A-iv, B-iii, C-i, D-ii",
      "A-iv, B-ii, C-i, D-iii",
      "A-iv, B-iii, C-ii, D-i"
    ],
    "correctAnswer": 2,
    "explanation": "لو (A) شمالی ہندوستان میں ایک گرم، خشک موسم گرما کی ہوا ہے (iv)۔ چینوک (B) امریکہ اور کینیڈا میں راکی پہاڑوں کے لیورڈ سائیڈ پر ایک گرم، خشک ہوا ہے (ii)۔ مسٹرل (C) الپس سے فرانس کے اوپر ایک سرد، خشک ہوا ہے (i)۔ پمپیرو (D) جنوبی امریکہ کے پمپاس میں ایک سرد ہوا ہے (iii)۔"
  },
  {
    "id": 1027,
    "question": "These forests are found in the regions near the equator and close to the tropics (TSTET 24 May 2024)\nیہ جنگلات خط استوا کے قریب اور منطقہ حارہ کے قریب کے علاقوں میں پائے جاتے ہیں",
    "options": [
      "Tropical Deciduous forest\nگرم مرطوب پت جھڑی جنگلات",
      "Temperate Evergreen forests\nمعتدل سدا بہار جنگلات",
      "Tropical Evergreen Forests\nگرم مرطوب سدا بہار جنگلات",
      "Coniferous forests\nصنوبری جنگلات"
    ],
    "correctAnswer": 2,
    "explanation": "گرم مرطوب سدا بہار جنگلات، جنہیں برساتی جنگلات بھی کہا جاتا ہے، خط استوا کے قریب ان علاقوں میں واقع ہیں جہاں سال بھر زیادہ بارش اور زیادہ درجہ حرارت رہتا ہے۔ یہ آب و ہوا گھنے، کثیر سطحی جنگلات کی حمایت کرتی ہے جو سال بھر ہرے بھرے رہتے ہیں۔"
  },
  {
    "id": 1028,
    "question": "Identify the Equatorial Crop among the following (TSTET 24 May 2024)\nدرج ذیل میں سے استوائی فصل کی نشاندہی کریں",
    "options": [
      "Rubber\nربڑ",
      "Cotton\nکپاس",
      "Jute\nپٹ سن",
      "Tea\nچائے"
    ],
    "correctAnswer": 0,
    "explanation": "ربڑ ایک کلاسیکی استوائی فصل ہے کیونکہ اسے اگنے کے لیے گرم (25°C سے اوپر) اور مرطوب حالات کے ساتھ بھاری بارش (200 سینٹی میٹر سے زیادہ) کی ضرورت ہوتی ہے، جو استوائی پٹی کی آب و ہوا کی خصوصیات ہیں۔"
  },
  {
    "id": 1029,
    "question": "Industrial locations are concentrated at the most appropriate places where (TSTET 24 May 2024)\nصنعتی مقامات سب سے موزوں جگہوں پر مرکوز ہوتے ہیں جہاں",
    "options": [
      "All the factors of industrial location are either available or can be arranged at lower cost\nصنعتی مقام کے تمام عوامل یا تو دستیاب ہوں یا کم قیمت پر ترتیب دیے جا سکیں",
      "The raw materials for the particular industry are available in plenty only\nصرف اس خاص صنعت کے لیے خام مال وافر مقدار میں دستیاب ہو",
      "The cheap labour is available in plenty only\nصرف سستی مزدوری وافر مقدار میں دستیاب ہو",
      "The transport facilities are available for transporting goods conveniently only\nصرف سامان کی آسانی سے نقل و حمل کے لیے ٹرانسپورٹ کی سہولیات دستیاب ہوں"
    ],
    "correctAnswer": 0,
    "explanation": "کسی صنعت کے لیے مثالی مقام وہ ہے جو اخراجات کو کم سے کم کرے۔ اس میں خام مال، مزدور، بازار، سرمایہ اور نقل و حمل تک رسائی سمیت کئی عوامل شامل ہیں۔ بہترین مقام وہ ہے جہاں یہ عوامل سب سے زیادہ اقتصادی طور پر حاصل کیے جا سکیں۔"
  },
  {
    "id": 1030,
    "question": "Among the following, these states of India are sharing the boundary with Telangana State (TSTET 24 May 2024)\nدرج ذیل میں سے، ہندوستان کی یہ ریاستیں تلنگانہ ریاست کے ساتھ سرحد بانٹتی ہیں",
    "options": [
      "Andhra Pradesh, Karnataka, Maharashtra and Chhattisgarh\nآندھرا پردیش، کرناٹک، مہاراشٹر اور چھتیس گڑھ",
      "Andhra Pradesh, Tamil Nadu, Maharashtra, Odisha\nآندھرا پردیش، تمل ناڈو، مہاراشٹر، اڈیشہ",
      "Andhra Pradesh, Karnataka, Maharashtra, Chhattisgarh and Odisha\nآندھرا پردیش، کرناٹک، مہاراشٹر، چھتیس گڑھ اور اڈیشہ",
      "Andhra Pradesh, Karnataka, Maharashtra and Odisha\nآندھرا پردیش، کرناٹک، مہاراشٹر اور اڈیشہ"
    ],
    "correctAnswer": 0,
    "explanation": "تلنگانہ اپنی سرحدیں چار ریاستوں کے ساتھ بانٹتا ہے: شمال میں مہاراشٹر، شمال مشرق میں چھتیس گڑھ، مغرب میں کرناٹک، اور جنوب اور مشرق میں آندھرا پردیش۔"
  },
  {
    "id": 1031,
    "question": "This city of India has emerged as 'the Electronic capital of India' (TSTET 24 May 2024)\nہندوستان کا یہ شہر 'ہندوستان کا الیکٹرانک دارالحکومت' کے طور پر ابھرا ہے",
    "options": [
      "Hyderabad\nحیدرآباد",
      "Amritsar\nامرتسر",
      "Pune\nپونے",
      "Bangalore\nبنگلور"
    ],
    "correctAnswer": 3,
    "explanation": "بنگلور (بنگلورو) کو 'الیکٹرانک کیپٹل' اور 'ہندوستان کی سلیکون ویلی' کے نام سے جانا جاتا ہے کیونکہ یہ ملک میں انفارمیشن ٹیکنالوجی، سافٹ ویئر ڈویلپمنٹ، اور الیکٹرانکس انڈسٹری کا سب سے بڑا مرکز ہے۔"
  },
  {
    "id": 1032,
    "question": "'Solar Insolation' means (TSTET 24 May 2024)\n'شمسی انسولیشن' کا مطلب ہے",
    "options": [
      "The energy that is constantly emitted by the Sun\nوہ توانائی جو سورج سے مسلسل خارج ہوتی ہے",
      "The Solar Radiation received on the surface of the earth\nزمین کی سطح پر موصول ہونے والی شمسی تابکاری",
      "The angle at which the Sun's rays fall on the earth's surface\nوہ زاویہ جس پر سورج کی شعاعیں زمین کی سطح پر پڑتی ہیں",
      "The amount of Solar Energy radiated back into the atmosphere by the earth\nزمین کے ذریعے فضا میں واپس بھیجی جانے والی شمسی توانائی کی مقدار"
    ],
    "correctAnswer": 1,
    "explanation": "انسولیشن کا مطلب ہے 'آنے والی شمسی تابکاری'۔ یہ خاص طور پر سورج کی برقی مقناطیسی توانائی کی اس مقدار سے مراد ہے جو زمین کی سطح تک پہنچتی ہے۔ یہ آب و ہوا اور موسم کا تعین کرنے میں ایک اہم عنصر ہے۔"
  },
  {
    "id": 1033,
    "question": "The southernmost tip of the Peninsula Plateau is (TSTET 24 May 2024)\nجزیرہ نما سطح مرتفع کا سب سے جنوبی سرا ہے",
    "options": [
      "Malwa Plateau\nمالوا سطح مرتفع",
      "Aravali Mountains\nاراولی پہاڑ",
      "Chota Nagpur Plateau\nچھوٹا ناگپور سطح مرتفع",
      "Kanyakumari\nکنیاکماری"
    ],
    "correctAnswer": 3,
    "explanation": "ہندوستان کا جزیرہ نما سطح مرتفع ایک بڑا تکونی زمینی خطہ ہے۔ یہ جنوب کی طرف تنگ ہوتا جاتا ہے، اور اس کا سب سے جنوبی سرا کنیاکماری (کیپ کومورن) ہے، جو کہ ہندوستانی سرزمین کا بھی سب سے جنوبی نقطہ ہے۔"
  },
  {
    "id": 1034,
    "question": "Identify the working capital among the following (TSTET 24 May 2024)\nدرج ذیل میں سے ورکنگ کیپیٹل کی نشاندہی کریں",
    "options": [
      "Tools, machines and buildings\nاوزار، مشینیں اور عمارتیں",
      "The raw materials and money required\nخام مال اور درکار رقم",
      "Technology and enterprise\nٹیکنالوجی اور انٹرپرائز",
      "Planning and management\nمنصوبہ بندی اور انتظام"
    ],
    "correctAnswer": 1,
    "explanation": "معاشیات میں، ورکنگ کیپیٹل قلیل مدتی اثاثوں پر مشتمل ہوتا ہے جو پیداواری عمل میں استعمال ہوتے ہیں۔ اس میں خام مال اور روزمرہ کے کاموں کے لیے درکار نقد (رقم) شامل ہے۔ اوزار، مشینیں اور عمارتیں فکسڈ کیپیٹل سمجھی جاتی ہیں۔"
  },
  {
    "id": 1035,
    "question": "During these three months, the Tundra regions are almost dark (TSTET 24 May 2024)\nان تین مہینوں کے دوران، ٹنڈرا کے علاقے تقریباً تاریک رہتے ہیں",
    "options": [
      "May, June and July\nمئی، جون اور جولائی",
      "November, December and January\nنومبر، دسمبر اور جنوری",
      "March, April and May\nمارچ، اپریل اور مئی",
      "August, September and October\nاگست، ستمبر اور اکتوبر"
    ],
    "correctAnswer": 1,
    "explanation": "ٹنڈرا کے علاقے شمالی عرض البلد میں واقع ہیں۔ زمین کے محور کے جھکاؤ کی وجہ سے، شمالی نصف کرہ کے سردیوں کے مہینوں (نومبر، دسمبر، اور جنوری) کے دوران، ان علاقوں کو بہت کم یا کوئی سورج کی روشنی نہیں ملتی، اور وہ قطبی رات کے نام سے جانے والے رجحان کا تجربہ کرتے ہیں۔"
  },
  {
    "id": 1036,
    "question": "The amount of invisible water vapours present in the atmosphere is known as (TSTET 24 May 2024)\nفضا میں موجود غیر مرئی آبی بخارات کی مقدار کو کہا جاتا ہے",
    "options": [
      "Humidity\nنمی",
      "Condensation\nتکثیف",
      "Evaporation\nتبخیر",
      "Precipitation\nبارش"
    ],
    "correctAnswer": 0,
    "explanation": "نمی ہوا میں آبی بخارات کے ارتکاز کا پیمانہ ہے۔ یہ فضا کا ایک اہم جزو ہے اور موسم اور آب و ہوا میں اہم کردار ادا کرتا ہے۔"
  },
  {
    "id": 1037,
    "question": "From among the following Group, the countries bigger than India in size are (TSTET 24 May 2024)\nدرج ذیل گروپ میں سے، وہ ممالک جو رقبے میں ہندوستان سے بڑے ہیں",
    "options": [
      "Canada, Russia, Thailand and Brazil\nکینیڈا، روس، تھائی لینڈ اور برازیل",
      "Russia, United states of America, Indonesia, Brazil\nروس، ریاستہائے متحدہ امریکہ، انڈونیشیا، برازیل",
      "Australia, Canada, Brazil and United States of America\nآسٹریلیا، کینیڈا، برازیل اور ریاستہائے متحدہ امریکہ",
      "Australia, Brazil, China and Indonesia\nآسٹریلیا، برازیل، چین اور انڈونیشیا"
    ],
    "correctAnswer": 2,
    "explanation": "ہندوستان رقبے کے لحاظ سے 7واں سب سے بڑا ملک ہے۔ ہندوستان سے بڑے چھ ممالک روس، کینیڈا، چین، امریکہ، برازیل اور آسٹریلیا ہیں۔ اس آپشن میں موجود گروپ میں اس فہرست میں سے چار ممالک شامل ہیں۔"
  },
  {
    "id": 1038,
    "question": "In 1774 CE, the representatives from 12 American colonies met at this place to protest against the British and requested the King George III to restore their previous rights (TSTET 24 May 2024)\n1774 عیسوی میں، 12 امریکی کالونیوں کے نمائندوں نے اس جگہ پر انگریزوں کے خلاف احتجاج کرنے کے لیے ملاقات کی اور بادشاہ جارج سوم سے اپنے سابقہ حقوق بحال کرنے کی درخواست کی",
    "options": [
      "Georgia\nجارجیا",
      "Connecticut\nکنیٹیکٹ",
      "Philadelphia\nفلاڈیلفیا",
      "Massachusetts\nمیساچوسٹس"
    ],
    "correctAnswer": 2,
    "explanation": "پہلی کانٹینینٹل کانگریس 13 برطانوی امریکی کالونیوں میں سے 12 کے نمائندوں کا ایک اجلاس تھا جو 1774 میں پنسلوانیا کے فلاڈیلفیا میں کارپینٹرز ہال میں منعقد ہوا۔ انہوں نے برطانوی پارلیمنٹ کے منظور کردہ ناقابل برداشت قوانین کے جواب میں یہ اجلاس بلایا تھا۔"
  },
  {
    "id": 1039,
    "question": "The collection of taxes namely 'Tithes and Taille were associated with this Revolution (TSTET 24 May 2024)\n'ٹائیتھس اور ٹیل' نامی ٹیکسوں کی وصولی اس انقلاب سے وابستہ تھی",
    "options": [
      "The American War of Independence\nامریکی جنگ آزادی",
      "The French Revolution\nفرانسیسی انقلاب",
      "The Glorious Revolution\nشاندار انقلاب",
      "The Russian Revolution\nروسی انقلاب"
    ],
    "correctAnswer": 1,
    "explanation": "انقلاب سے پہلے فرانس میں، 'ٹائیتھ' چرچ کی طرف سے وصول کیا جانے والا ٹیکس تھا، اور 'ٹیل' بادشاہت کی طرف سے عام لوگوں پر لگایا جانے والا براہ راست ٹیکس تھا۔ تیسرے طبقے پر ان ٹیکسوں کا بوجھ فرانسیسی انقلاب کی ایک بڑی وجہ تھا۔"
  },
  {
    "id": 1040,
    "question": "The person who helped Akbar the Great in framing a vision of Governance around the idea of 'Sulh I Kul' (TSTET 24 May 2024)\nوہ شخص جس نے اکبر اعظم کو 'صلح کل' کے نظریے کے گرد حکمرانی کا ایک وژن تیار کرنے میں مدد کی",
    "options": [
      "Jahangir, Akbar's Son\nجہانگیر، اکبر کا بیٹا",
      "Tansen of Gwalior\nگوالیار کا تان سین",
      "Abdul Rahim Khan I\nعبدالرحیم خان اول",
      "Abul Fazal\nابوالفضل"
    ],
    "correctAnswer": 3,
    "explanation": "ابوالفضل، اکبر کے درباری مورخ اور دوست، نے شہنشاہ کی 'صلح کل' یا 'آفاقی امن' کی پالیسی کو واضح کرنے میں اہم کردار ادا کیا۔ اس پالیسی نے مغل سلطنت کے اندر مختلف مذہبی برادریوں کے درمیان رواداری اور ہم آہنگی کو فروغ دیا۔"
  },
  {
    "id": 1041,
    "question": "The seven tombs of the Qutub Shahi rulers marked a unique architectural style which was a mixture of (TSTET 24 May 2024)\nقطب شاہی حکمرانوں کے سات مقبرے ایک منفرد طرز تعمیر کی نشاندہی کرتے تھے جو اس کا مرکب تھا",
    "options": [
      "Persian and Hindu Style\nفارسی اور ہندو طرز",
      "Gandara and Hindu Style\nگندھارا اور ہندو طرز",
      "Indo-Sarcenic Style\nہند-ساراسینک طرز",
      "Indian rock-cut architecture Style\nہندوستانی چٹان کاٹ کر فن تعمیر کا طرز"
    ],
    "correctAnswer": 0,
    "explanation": "حیدرآباد میں قطب شاہی مقبروں کا فن تعمیر دکنی طرز کا ایک عمدہ نمونہ ہے، جو فارسی، پٹھان اور مقامی ہندو تعمیراتی روایات کے عناصر کو ملا کر ایک منفرد امتزاج پیدا کرتا ہے۔"
  },
  {
    "id": 1042,
    "question": "Rights of a person arrested under ordinary circumstances is laid down in the (TSTET 24 May 2024)\nعام حالات میں گرفتار کیے گئے شخص کے حقوق کس میں بیان کیے گئے ہیں؟",
    "options": [
      "Right to Equality\nمساوات کا حق",
      "Right to Life and Personal Liberty\nزندگی اور ذاتی آزادی کا حق",
      "Right to freedom of Speech and Expression\nتقریر اور اظہار کی آزادی کا حق",
      "Right to Constitutional remedies\nآئینی تدارک کا حق"
    ],
    "correctAnswer": 1,
    "explanation": "ہندوستانی آئین کا آرٹیکل 22 ایک گرفتار شدہ شخص کو مخصوص حقوق فراہم کرتا ہے، جیسے کہ گرفتاری کی وجوہات سے آگاہ ہونے کا حق اور وکیل سے مشورہ کرنے کا حق۔ یہ تحفظات آرٹیکل 21 کے تحت دی گئی زندگی اور ذاتی آزادی کے حق کے بنیادی پہلو ہیں۔"
  },
  {
    "id": 1043,
    "question": "Among the following, identify the INCORRECT statement regarding the Legislative Council of Telangana State (TSTET 24 May 2024)\nدرج ذیل میں سے، تلنگانہ ریاست کی قانون ساز کونسل کے بارے میں غلط بیان کی نشاندہی کریں",
    "options": [
      "3 members to the Legislative Council are elected from teachers\nقانون ساز کونسل کے 3 اراکین اساتذہ میں سے منتخب ہوتے ہیں۔",
      "3 members to the Legislative Council are elected from Graduates\nقانون ساز کونسل کے 3 اراکین گریجویٹس میں سے منتخب ہوتے ہیں۔",
      "16 members to the Legislative Council are elected by the members of the legislative Assembly\nقانون ساز کونسل کے 16 اراکین قانون ساز اسمبلی کے اراکین کے ذریعے منتخب ہوتے ہیں۔",
      "6 members to the Legislative Council are nominated by the Governor\nقانون ساز کونسل کے 6 اراکین گورنر کی طرف سے نامزد کیے جاتے ہیں۔"
    ],
    "correctAnswer": 2,
    "explanation": "تلنگانہ قانون ساز کونسل کے 40 اراکین ہیں۔ ایک تہائی اراکین (14) قانون ساز اسمبلی کے اراکین (ایم ایل اے) کے ذریعے منتخب ہوتے ہیں۔ لہذا، یہ بیان کہ 16 اراکین ایم ایل اے کے ذریعے منتخب ہوتے ہیں، غلط ہے۔"
  },
  {
    "id": 1044,
    "question": "Among the following, Identify the incorrect statement regarding the Unification of Germany (TSTET 24 May 2024)\nدرج ذیل میں سے، جرمنی کے اتحاد کے بارے میں غلط بیان کی نشاندہی کریں",
    "options": [
      "Till 19th century, Germany was divided into number of small kingdoms and they were the part of the Holy Roman Empire\n19ویں صدی تک، جرمنی کئی چھوٹی چھوٹی ریاستوں میں تقسیم تھا اور وہ مقدس رومی سلطنت کا حصہ تھے۔",
      "Rhine Confederation was formed with 39 kingdoms\nرائن کنفیڈریشن 39 ریاستوں کے ساتھ تشکیل دی گئی تھی۔",
      "A customs union called Zolloverein formulated some trade rules for free trade, economic cooperation in these kingdoms\nزولورین نامی ایک کسٹمز یونین نے ان ریاستوں میں آزاد تجارت، اقتصادی تعاون کے لیے کچھ تجارتی قوانین وضع کیے۔",
      "Ems telegram was associated with Austro-Prussian war of 1866\nایمس ٹیلیگرام 1866 کی آسٹریا-پرشیا جنگ سے وابستہ تھا"
    ],
    "correctAnswer": 3,
    "explanation": "1870 کا ایمس ٹیلیگرام ایک سفارتی واقعہ تھا جسے اوٹو وان بسمارک نے فرانس کو پرشیا کے خلاف جنگ کا اعلان کرنے پر اکسانے کے لیے استعمال کیا۔ اس سے فرانکو-پرشین جنگ (1870-1871) ہوئی، نہ کہ 1866 کی آسٹریا-پرشین جنگ۔ فرانکو-پرشین جنگ میں فتح نے جرمنی کا اتحاد مکمل کیا۔"
  },
  {
    "id": 1045,
    "question": "In most of the Spanish ruled countries, all the powers were vested in the hands of Supreme Council located at (TSTET 24 May 2024)\nزیادہ تر ہسپانوی حکومت والے ممالک میں، تمام اختیارات کہاں واقع سپریم کونسل کے ہاتھ میں تھے؟",
    "options": [
      "Berlin\nبرلن",
      "Lisbon\nلزبن",
      "Madrid\nمیڈرڈ",
      "Paris\nپیرس"
    ],
    "correctAnswer": 2,
    "explanation": "ہسپانوی نوآبادیاتی سلطنت کی انتظامیہ انتہائی مرکزی تھی۔ کونسل آف دی انڈیز (Consejo de Indias)، جو میڈرڈ میں واقع تھی، تمام نوآبادیاتی امور کے لیے ذمہ دار اعلیٰ ترین گورننگ باڈی تھی، جو اسپین کے بادشاہ کی جانب سے کام کرتی تھی۔"
  },
  {
    "id": 1046,
    "question": "According to this, no European power would be allowed to build the colonies in the American Continents and the United States will not interfere in the affairs of Europe or their colonies in other continents (TSTET 24 May 2024)\nاس کے مطابق، کسی بھی یورپی طاقت کو امریکی براعظموں میں نوآبادیاں بنانے کی اجازت نہیں ہوگی اور امریکہ یورپ یا دوسرے براعظموں میں ان کی نوآبادیوں کے معاملات میں مداخلت نہیں کرے گا",
    "options": [
      "Marshal Plan\nمارشل پلان",
      "Munroe Doctrine\nمنرو نظریہ",
      "New Deal Policy\nنیو ڈیل پالیسی",
      "Carter Doctrine\nکارٹر نظریہ"
    ],
    "correctAnswer": 1,
    "explanation": "منرو نظریہ، جسے 1823 میں امریکی صدر جیمز منرو نے پیش کیا تھا، نے مغربی نصف کرہ کو مزید یورپی نوآبادیات کے لیے ممنوع قرار دیا۔ اس میں یہ بھی کہا گیا کہ امریکہ یورپی ممالک کے داخلی معاملات میں مداخلت نہیں کرے گا۔"
  },
  {
    "id": 1047,
    "question": "The Chinese allowed the Europeans to conduct trade with China through this port (TSTET 24 May 2024)\nچینیوں نے یورپیوں کو اس بندرگاہ کے ذریعے چین کے ساتھ تجارت کرنے کی اجازت دی",
    "options": [
      "Port of Shantou\nشانتو کی بندرگاہ",
      "Port of Hong Kong\nہانگ کانگ کی بندرگاہ",
      "Port of Macao\nمکاؤ کی بندرگاہ",
      "Rocky harbor\nراکی ہاربر"
    ],
    "correctAnswer": 2,
    "explanation": "16ویں صدی کے آغاز میں، پرتگالیوں کو مکاؤ میں ایک تجارتی چوکی قائم کرنے کی اجازت دی گئی۔ ایک طویل عرصے تک، یہ چین اور یورپ کے درمیان تجارت کا اہم گیٹ وے تھا، اس سے بہت پہلے کہ دیگر بندرگاہیں غیر ملکی تجارت کے لیے کھولی گئیں۔"
  },
  {
    "id": 1048,
    "question": "Among the following, these adivasis lived in the forests of Odisha (TSTET 24 May 2024)\nدرج ذیل میں سے، یہ آدیواسی اڈیشہ کے جنگلات میں رہتے تھے",
    "options": [
      "Baiga and Muria\nبیگا اور موریا",
      "Koya Reddy's\nکویا ریڈی",
      "Saora Adivasis\nساؤرا آدیواسی",
      "Munda Adivasis\nمنڈا آدیواسی"
    ],
    "correctAnswer": 2,
    "explanation": "ساؤرا (یا سورا) ایک قدیم آدیواسی برادری ہے جو بنیادی طور پر مشرقی ہندوستان کی ریاست اڈیشہ کے پہاڑی جنگلاتی علاقوں میں آباد ہے۔ ان کی ایک منفرد ثقافت اور زبان ہے۔"
  },
  {
    "id": 1049,
    "question": "One among the following was NOT the cause for the first world war (TSTET 24 May 2024)\nدرج ذیل میں سے ایک پہلی جنگ عظیم کی وجہ نہیں تھی",
    "options": [
      "Militarism caused tension between countries and rivalry, as they struggled to outdo each other as the most powerful\nعسکریت پسندی نے ممالک کے درمیان تناؤ اور دشمنی پیدا کی، کیونکہ وہ سب سے زیادہ طاقتور بننے کے لیے ایک دوسرے سے سبقت لے جانے کی کوشش کر رہے تھے۔",
      "Imperialism was a motive of making countries stronger and more powerful, which led to tension between countries\nسامراجیت ممالک کو مضبوط اور زیادہ طاقتور بنانے کا ایک محرک تھا، جس کی وجہ سے ممالک کے درمیان تناؤ پیدا ہوا۔",
      "Alliances were mutual military agreements between nations, which led to tension and rivalry between countries\nاتحاد اقوام کے درمیان باہمی فوجی معاہدے تھے، جس کی وجہ سے ممالک کے درمیان تناؤ اور دشمنی پیدا ہوئی۔",
      "Sinking of American Commercial Ship by German troops\nجرمن فوجیوں کے ذریعے امریکی تجارتی جہاز کا ڈوبنا"
    ],
    "correctAnswer": 3,
    "explanation": "جرمن آبدوزوں کے ذریعے امریکی جہازوں کا ڈوبنا (جیسے 1915 میں لوسیتانیا) 1917 میں امریکہ کے پہلی جنگ عظیم میں داخل ہونے کے فیصلے کا ایک اہم عنصر تھا۔ تاہم، یہ جنگ کے دوران پیش آنے والا واقعہ تھا، نہ کہ 1914 میں اس کے شروع ہونے کی وجہ۔ اہم وجوہات عسکریت پسندی، اتحاد، سامراجیت، اور قوم پرستی تھیں۔"
  },
  {
    "id": 1050,
    "question": "In October, 1917, the Soviets under the leadership of this party seized power from the Provincial Government (TSTET 24 May 2024)\nاکتوبر 1917 میں، اس پارٹی کی قیادت میں سوویتوں نے صوبائی حکومت سے اقتدار چھین لیا",
    "options": [
      "Mensheviks\nمنشویک",
      "Bolsheviks\nبالشویک",
      "The king, Czar Nikolas II\nبادشاہ، زار نکولس دوم",
      "The Democratic party\nڈیموکریٹک پارٹی"
    ],
    "correctAnswer": 1,
    "explanation": "روس میں اکتوبر انقلاب کی قیادت ولادیمیر لینن اور بالشویک پارٹی نے کی۔ انہوں نے کامیابی سے صوبائی حکومت کا تختہ الٹ دیا، جو زار نکولس دوم کے دستبردار ہونے کے بعد اقتدار میں آئی تھی، اور سوویت حکومت قائم کی۔"
  },
  {
    "id": 1051,
    "question": "Adolf Hitler assigned the responsibility of economic recovery to this economist (TSTET 24 May 2024)\nایڈولف ہٹلر نے اقتصادی بحالی کی ذمہ داری اس ماہر معاشیات کو سونپی تھی",
    "options": [
      "Hjalmar Schacht\nہلمار شاخت",
      "Wilhelm Ropke\nولہیم روپکے",
      "Norbert Thorn\nنوربرٹ تھورن",
      "Alfred Muller Armack\nالفریڈ مولر آرماک"
    ],
    "correctAnswer": 0,
    "explanation": "ہلمار شاخت نے نازی جرمنی میں ریخس بینک کے صدر اور وزیر اقتصادیات کے طور پر خدمات انجام دیں۔ انہوں نے ان پالیسیوں کو نافذ کرنے میں اہم کردار ادا کیا جنہوں نے جرمن کرنسی کو مستحکم کیا اور دوبارہ اسلحہ سازی کے لیے فنڈز فراہم کیے، جس سے 1930 کی دہائی میں جرمنی کی اقتصادی بحالی ہوئی۔"
  },
  {
    "id": 1052,
    "question": "This person was appointed as the constitutional advisor of the Constitutional Drafting Committee and he later became the First Indian Judge in the International Court of Justice in 1950 (TSTET 24 May 2024)\nاس شخص کو آئینی مسودہ ساز کمیٹی کا آئینی مشیر مقرر کیا گیا تھا اور وہ بعد میں 1950 میں بین الاقوامی عدالت انصاف میں پہلے ہندوستانی جج بنے",
    "options": [
      "Md. Sadullah\nمحمد سعد اللہ",
      "B.L. Mittal\nبی. ایل. متل",
      "D.P. Khaitan\nڈی. پی. کھیتان",
      "Sir Benegal Narsing Rao\nسر بینیگل نرسنگ راؤ"
    ],
    "correctAnswer": 3,
    "explanation": "سر بینیگل نرسنگ راؤ (بی. این. راؤ) ایک ممتاز ہندوستانی قانون دان تھے جنہوں نے ہندوستان کی آئین ساز اسمبلی کے آئینی مشیر کے طور پر خدمات انجام دیں۔ ان کی مہارت آئین کا مسودہ تیار کرنے میں بہت اہم تھی۔ 1950 میں، وہ ہیگ میں بین الاقوامی عدالت انصاف کے جج منتخب ہوئے۔"
  },
  {
    "id": 1053,
    "question": "The term 'Tsunami' has been coined from the Japanese words 'tsu' and 'nami', which means (TSTET 24 May 2024)\n'سونامی' کی اصطلاح جاپانی الفاظ 'tsu' اور 'nami' سے نکلی ہے، جس کا مطلب ہے",
    "options": [
      "Port and Tide\nبندرگاہ اور لہر",
      "Harbour and waves\nبندرگاہ اور موجیں",
      "Port and Sea Waves\nبندرگاہ اور سمندری موجیں",
      "Port and ocean Current.\nبندرگاہ اور سمندری رو۔"
    ],
    "correctAnswer": 1,
    "explanation": "جاپانی لفظ 'سونامی'  دو الفاظ کا مرکب ہے: 'tsu' ، جس کا مطلب ہے بندرگاہ، اور 'nami' ، جس کا مطلب ہے موج۔ لہذا، لفظی ترجمہ 'بندرگاہ کی موج' ہے۔"
  },
  {
    "id": 1054,
    "question": "One among the folowing is NOT the function of World Trade organization (TSTET 24 May 2024)\nدرج ذیل میں سے ایک عالمی تجارتی تنظیم کا کام نہیں ہے",
    "options": [
      "It provides monetary support to the developing countries to enable them to conduct trade freely\nیہ ترقی پذیر ممالک کو مالی مدد فراہم کرتا ہے تاکہ وہ آزادانہ طور پر تجارت کر سکیں",
      "It seeks to resolve trade disputes\nیہ تجارتی تنازعات کو حل کرنے کی کوشش کرتا ہے",
      "It acts as a forum for multilateral trade negotiations\nیہ کثیرالجہتی تجارتی مذاکرات کے لیے ایک فورم کے طور پر کام کرتا ہے",
      "it ensures that trade flows as smoothly, predictably and freely as possible\nیہ یقینی بناتا ہے کہ تجارت ہر ممکن حد تک ہموار، قابل قیاس اور آزادانہ طور پر ہو"
    ],
    "correctAnswer": 0,
    "explanation": "عالمی تجارتی تنظیم (WTO) بین الاقوامی تجارت کے لیے قوانین طے کرتی ہے اور تنازعات کو حل کرنے میں مدد کرتی ہے۔ یہ ممالک کو مالی امداد یا مالی معاونت فراہم نہیں کرتی؛ یہ کام عالمی بینک اور بین الاقوامی مالیاتی فنڈ (IMF) جیسے اداروں کا ہے۔"
  }
]


export const socialPaper2UrduQuestions = rawSocialPaper2UrduData.map(
  (question, index) => {
    const options = question.options ?? [];
    const candidate = Number(question.correctAnswer);

    const normalizedCorrectAnswer =
      Number.isInteger(candidate) &&
      candidate >= 0 &&
      candidate < options.length
        ? candidate
        : 0;

    return {
      id: `URDU-SOC2-${index + 1}`,
      question: question.question ?? "",
      options,
      correctAnswer: normalizedCorrectAnswer,
      explanation: question.explanation ?? "",
    };
  },
);

export const convertSocialPaper2UrduToQuestionFormat = (
  questions: typeof socialPaper2UrduQuestions,
) => {
  return questions.map((question, index) => ({
    id: index + 1,
    question: question.question,
    options: question.options,
    correctAnswer: question.correctAnswer,
    explanation: question.explanation,
  }));
};
