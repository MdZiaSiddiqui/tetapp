type SciencePaper2UrduRawQuestion = {
  id: number | string;
  text: string;
  options: string[];
  correct: string;
  explanation: string;
};

const rawSciencePaper2UrduData: SciencePaper2UrduRawQuestion[] =
[
  {
    "id": "1",
    "text": "Asteroids are found in between the orbits of (TSTET 22 May 2024)\nسیارچے کن سیاروں کے مداروں کے درمیان پائے جاتے ہیں؟",
    "options": [
      "Mars and Jupiter\nمریخ اور مشتری",
      "Earth and Mars\nزمین اور مریخ",
      "Saturn and Jupiter\nزحل اور مشتری",
      "Saturn and Uranus\nزحل اور یورینس"
    ],
    "correct": "Mars and Jupiter",
    "explanation": "مرکزی سیارچوں کی پٹی ہمارے نظام شمسی کا ایک خطہ ہے جو مریخ اور مشتری کے مداروں کے درمیان واقع ہے۔ اس میں لاکھوں سیارچے ہیں، جو چٹانی اجسام ہیں اور سیاروں سے بہت چھوٹے ہوتے ہیں۔ یہ پٹی وہ جگہ ہے جہاں سیارچوں کی بڑی اکثریت پائی جاتی ہے۔"
  },
  {
    "id": "2",
    "text": "To find out the relative density of an object, we usually compare its density with (TSTET 22 May 2024)\nکسی شے کی اضافی کثافت معلوم کرنے کے لیے، ہم عام طور پر اس کی کثافت کا موازنہ کس سے کرتے ہیں؟",
    "options": [
      "Water density\nپانی کی کثافت",
      "Object density\nشے کی کثافت",
      "Kerosine density\nمٹی کے تیل کی کثافت",
      "Air density\nہوا کی کثافت"
    ],
    "correct": "Water density",
    "explanation": "اضافی کثافت، جسے مخصوص کشش ثقل بھی کہا جاتا ہے، ایک بے جہت مقدار ہے جو کسی مادے کی کثافت اور ایک معیاری حوالے کے مادے کی کثافت کا تناسب ہے۔ مائعات اور ٹھوس اشیاء کے لیے، معیاری حوالہ تقریباً ہمیشہ خالص پانی ہوتا ہے جو اپنی زیادہ سے زیادہ کثافت پر ہو، جو 4 ڈگری سینٹی گریڈ پر ہوتی ہے۔"
  },
  {
    "id": "3",
    "text": "Read the following statements and choose the correct answer. Statement I: When we reduce the angle between two plane mirrors, the number of images of the object between them increases. Statement II: In a rearview mirror, we get diminished image of the object. (TSTET 22 May 2024)\nمندرجہ ذیل بیانات کو پڑھیں اور صحیح جواب کا انتخاب کریں۔ بیان I: جب ہم دو مستوی آئینوں کے درمیان زاویہ کو کم کرتے ہیں، تو ان کے درمیان موجود شے کی تصاویر کی تعداد بڑھ جاتی ہے۔ بیان II: پچھلا منظر دیکھنے والے آئینے میں، ہمیں شے کی چھوٹی تصویر ملتی ہے۔",
    "options": [
      "Statement I is true, Statement II is false\nبیان I صحیح ہے، بیان II غلط ہے",
      "Statement I is false. Statement II is true\nبیان I غلط ہے، بیان II صحیح ہے",
      "Both Statement I and Statement II are true\nبیان I اور بیان II دونوں صحیح ہیں",
      "Both Statement I and Statement II are false\nبیان I اور بیان II دونوں غلط ہیں"
    ],
    "correct": "Both Statement I and Statement II are true",
    "explanation": "بیان I صحیح ہے کیونکہ دو مستوی آئینوں سے بننے والی تصاویر کی تعداد فارمولہ n = (360°/θ) - 1 سے معلوم کی جاتی ہے۔ جیسے جیسے زاویہ (θ) کم ہوتا ہے، کسر کی قدر بڑھ جاتی ہے، جس کے نتیجے میں زیادہ تصاویر بنتی ہیں۔ بیان II بھی صحیح ہے کیونکہ پچھلا منظر دیکھنے والے آئینے محدب آئینے ہوتے ہیں، جو ہمیشہ ایک مجازی، سیدھی، اور چھوٹی (diminished) تصویر بناتے ہیں۔ یہ ڈیزائن دیکھنے کا ایک وسیع میدان فراہم کرتا ہے۔"
  },
  {
    "id": "4",
    "text": "A person travelled in a bus for 15 hours. Initial reading in the odometer was 1891 before starting the journey and after reaching the destination the reading shown as 2881. Then his average speed (TSTET 22 May 2024)\nایک شخص نے بس میں 15 گھنٹے سفر کیا۔ سفر شروع کرنے سے پہلے اوڈومیٹر میں ابتدائی ریڈنگ 1891 تھی اور منزل پر پہنچنے کے بعد ریڈنگ 2881 دکھائی گئی۔ تو اس کی اوسط رفتار کیا تھی؟",
    "options": [
      "266 Km/h",
      "313.5 Km/h",
      "33 Km/h",
      "66 Km/h"
    ],
    "correct": "66 Km/h",
    "explanation": "اوسط رفتار معلوم کرنے کے لیے، پہلے طے شدہ کل فاصلہ شمار کریں: آخری ریڈنگ - ابتدائی ریڈنگ = 2881 کلومیٹر - 1891 کلومیٹر = 990 کلومیٹر۔ پھر، کل فاصلے کو کل وقت سے تقسیم کریں: اوسط رفتار = کل فاصلہ / کل وقت = 990 کلومیٹر / 15 گھنٹے = 66 کلومیٹر فی گھنٹہ۔"
  },
  {
    "id": "5",
    "text": "In an electric circuit, an MCB is to be connected in (TSTET 22 May 2024)\nایک برقی سرکٹ میں، MCB کو کس طرح جوڑا جانا چاہیے؟",
    "options": [
      "Series only\nصرف سیریز میں",
      "Parallel only\nصرف متوازی",
      "Combination of Series and Parallel\nسیریز اور متوازی کا امتزاج",
      "Neither Series nor Parallel\nنہ سیریز نہ متوازی"
    ],
    "correct": "Series only",
    "explanation": "MCB (مینیچر سرکٹ بریکر) ایک حفاظتی آلہ ہے جو اوورلوڈ یا شارٹ سرکٹ کی صورت میں بجلی کے بہاؤ کو منقطع کرنے کے لیے ڈیزائن کیا گیا ہے۔ پورے سرکٹ کی حفاظت کے لیے، اسے لائیو تار کے ساتھ سیریز میں جوڑا جانا چاہیے، تاکہ جب یہ ٹرپ کرے، تو یہ اس سرکٹ پر موجود تمام آلات کا کنکشن توڑ دے۔"
  },
  {
    "id": "6",
    "text": "Blister copper is refined in this method (TSTET 22 May 2024)\nچھالے دار تانبے کو اس طریقے سے صاف کیا جاتا ہے۔",
    "options": [
      "Distillation\nکَشیدگی",
      "Poling\nپولنگ",
      "Liquation\nپگھلا کر الگ کرنا",
      "Electrolytic refining\nالیکٹرولیٹک ریفائننگ"
    ],
    "correct": "Poling",
    "explanation": "چھالے دار تانبا، جو تقریباً 98-99% خالص ہوتا ہے، اس میں کیوپرس آکسائیڈ ($Cu_2O$) ایک بڑی ناخالصیت کے طور پر موجود ہوتا ہے۔ اس ناخالصیت کو پولنگ کے عمل سے دور کیا جاتا ہے۔ اس طریقے میں، پگھلے ہوئے چھالے دار تانبے کو سبز لکڑی کے کندوں سے ہلایا جاتا ہے۔ لکڑی سے خارج ہونے والے ہائیڈروکاربن کیوپرس آکسائیڈ کو کم کرکے خالص تانبے میں تبدیل کر دیتے ہیں۔"
  },
  {
    "id": "7",
    "text": "The machine used commercially for separating the cream from milk (TSTET 22 May 2024)\nدودھ سے کریم الگ کرنے کے لیے تجارتی طور پر استعمال ہونے والی مشین کونسی ہے؟",
    "options": [
      "Atwood machine\nایٹ ووڈ مشین",
      "Flotation machine\nفلوٹیشن مشین",
      "Centrifuge\nسینٹری فیوج",
      "Sieving machine\nچھاننے والی مشین"
    ],
    "correct": "Centrifuge",
    "explanation": "دودھ سے کریم الگ کرنے کے لیے سینٹری فیوج کا استعمال کیا جاتا ہے۔ یہ مشین دودھ کو بہت تیز رفتاری سے گھماتی ہے۔ سینٹرفیوگیشن کا اصول اجزاء کو ان کی کثافت کی بنیاد پر الگ کرتا ہے۔ چونکہ کریم (چربی) باقی دودھ سے کم کثیف ہوتی ہے، یہ گھومنے والے برتن کے مرکز میں جمع ہو جاتی ہے اور اسے آسانی سے نکالا جا سکتا ہے۔"
  },
  {
    "id": "8",
    "text": "The 'p' in pH stands for (TSTET 22 May 2024)\npH میں 'p' کا کیا مطلب ہے؟",
    "options": [
      "Pascal\nپاسکل",
      "Pressure\nدباؤ",
      "Potenz\nپوٹینز",
      "Pure\nخالص"
    ],
    "correct": "Potenz",
    "explanation": "pH میں 'p' جرمن لفظ 'Potenz' کے لیے ہے، جس کا ترجمہ 'طاقت' یا 'صلاحیت' ہے۔ 'H' ہائیڈروجن عنصر کے لیے ہے۔ اس طرح، pH 'ہائیڈروجن کی صلاحیت' کا پیمانہ ہے اور یہ محلول میں ہائیڈروجن آئنوں کے ارتکاز کی نمائندگی کرتا ہے۔"
  },
  {
    "id": "9",
    "text": "$CuO_{(s)}+H_{2(g)}\\xrightarrow{Heat}Cu_{(s)}+H_{2}O_{(l)}$ is a/an (TSTET 22 May 2024)\n$CuO_{(s)}+H_{2(g)}\\xrightarrow{Heat}Cu_{(s)}+H_{2}O_{(l)}$ کونسا تعامل ہے؟",
    "options": [
      "Oxidation reaction\nآکسیڈیشن تعامل",
      "Reduction reaction\nتخفیف تعامل",
      "Precipitation reaction\nترسیب تعامل",
      "Neutralization reaction\nتعدیلی تعامل"
    ],
    "correct": "Reduction reaction",
    "explanation": "یہ ایک ریڈوکس تعامل ہے جہاں تخفیف اور آکسیڈیشن دونوں ہوتے ہیں۔ کاپر(II) آکسائیڈ ($CuO$) آکسیجن کھو کر تانبا ($Cu$) بن جاتا ہے، لہذا $CuO$ کی تخفیف ہوتی ہے۔ ہائیڈروجن ($H_2$) آکسیجن حاصل کرکے پانی ($H_2O$) بن جاتا ہے، لہذا $H_2$ کی آکسیڈیشن ہوتی ہے۔ سوال ممکنہ طور پر مرکزی عامل، کاپر آکسائیڈ کی تبدیلی پر مرکوز ہے، جس کی تخفیف ہوتی ہے۔"
  },
  {
    "id": "10",
    "text": "Which model proposed that 'The mass of the atom is considered to be uniformly distributed throughout the atom'? (TSTET 22 May 2024)\nکس ماڈل نے یہ تجویز دی کہ 'ایٹم کی کمیت کو پورے ایٹم میں یکساں طور پر تقسیم سمجھا جاتا ہے'؟",
    "options": [
      "Quantum mechanical model of atom\nایٹم کا کوانٹم مکینیکل ماڈل",
      "Nuclear model of atom\nایٹم کا نیوکلیائی ماڈل",
      "Planetary model of atom\nایٹم کا سیاراتی ماڈل",
      "Plum pudding model of atom\nایٹم کا پلم پڈنگ ماڈل"
    ],
    "correct": "Plum pudding model of atom",
    "explanation": "جے. جے. تھامسن کا پلم پڈنگ ماڈل (1904) پہلا ماڈل تھا جس نے ایٹم کے لیے ایک مخصوص اندرونی ساخت تجویز کی۔ اس نے تجویز دی کہ ایٹم یکساں طور پر تقسیم شدہ مثبت چارج کا ایک کرہ ہے، جس میں منفی چارج والے الیکٹران اس میں دھنسے ہوئے ہیں، جیسے پڈنگ میں آلو بخارے۔ یہ ماڈل بعد میں ردرفورڈ کے نیوکلیائی ماڈل سے تبدیل کر دیا گیا۔"
  },
  {
    "id": "11",
    "text": "According to which principle 'No two electrons of the same atom can have all four quantum numbers the same' (TSTET 22 May 2024)\nکس اصول کے مطابق 'ایک ہی ایٹم کے دو الیکٹران کے چاروں کوانٹم نمبر ایک جیسے نہیں ہو سکتے'؟",
    "options": [
      "Aufbau principle\nآفباؤ اصول",
      "Pauli's Exclusion principle\nپاولی کا استثنائی اصول",
      "Hund's rule\nہنڈ کا اصول",
      "Quantum rule\nکوانٹم اصول"
    ],
    "correct": "Pauli's Exclusion principle",
    "explanation": "پاولی کا استثنائی اصول کوانٹم میکینکس کا ایک بنیادی تصور ہے۔ یہ بیان کرتا ہے کہ دو یا دو سے زیادہ ایک جیسے فرمیون (جیسے الیکٹران) بیک وقت ایک کوانٹم سسٹم کے اندر ایک ہی کوانٹم حالت پر قابض نہیں ہو سکتے۔ ایک ایٹم کے تناظر میں، اس کا مطلب ہے کہ کسی بھی دو الیکٹران کے چار کوانٹم نمبروں (n, l, $m_l$, $m_s$) کا سیٹ ایک جیسا نہیں ہو سکتا۔"
  },
  {
    "id": "12",
    "text": "1 Angstrom = (TSTET 22 May 2024)\n1 اینگسٹروم = ؟",
    "options": [
      "1 nm",
      "10 nm",
      "0.01 nm",
      "0.1 nm"
    ],
    "correct": "0.1 nm",
    "explanation": "اینگسٹروم (Å) لمبائی کی ایک اکائی ہے جو $10^{-10}$ میٹر کے برابر ہے۔ ایک نینو میٹر (nm) $10^{-9}$ میٹر کے برابر ہے۔ چونکہ ایک نینو میٹر ایک اینگسٹروم سے دس گنا بڑا ہوتا ہے، اس لیے یہ نتیجہ نکلتا ہے کہ 1 Å برابر 0.1 nm ہے۔"
  },
  {
    "id": "13",
    "text": "These cells are present in highest in number in blood (TSTET 22 May 2024)\nخون میں سب سے زیادہ تعداد میں کون سے خلیے موجود ہوتے ہیں؟",
    "options": [
      "Erythrocytes\nاریتھروسائٹس",
      "Monocytes\nمونوسائٹس",
      "Granulocytes\nگرینولوسائٹس",
      "Lymphocytes\nلمفوسائٹس"
    ],
    "correct": "Erythrocytes",
    "explanation": "اریتھروسائٹس، یا سرخ خون کے خلیات (RBCs)، خون میں سب سے زیادہ پائے جانے والے خلیے ہیں۔ ان کا بنیادی کام آکسیجن کی نقل و حمل ہے۔ خون کے ہر مائیکرو لیٹر میں تقریباً 4 سے 6 ملین RBCs ہوتے ہیں، جو سفید خون کے تمام خلیات (جیسے مونوسائٹس، گرینولوسائٹس، اور لمفوسائٹس) کی مشترکہ تعداد سے کہیں زیادہ ہیں۔"
  },
  {
    "id": "14",
    "text": "Identify the female sexual part of a flower (TSTET 22 May 2024)\nپھول کے مادہ جنسی حصے کی نشاندہی کریں۔",
    "options": [
      "Stamen\nاسٹیمن",
      "Pistil\nپسٹل",
      "Anther\nاینتھر",
      "Stigma\nاسٹگما"
    ],
    "correct": "Pistil",
    "explanation": "پسٹل پھول کا مکمل مادہ تولیدی عضو ہے۔ یہ عام طور پر تین حصوں پر مشتمل ہوتا ہے: اسٹگما (جو پولن حاصل کرتا ہے)، اسٹائل (ڈنٹھل)، اور بیضہ دانی (جس میں بیضے ہوتے ہیں)۔ اسٹیمن نر حصہ ہے، جبکہ اینتھر اور اسٹگما بالترتیب نر اور مادہ حصوں کے انفرادی اجزاء ہیں۔"
  },
  {
    "id": "15",
    "text": "'Adam's apple' is formed due to elongation of (TSTET 22 May 2024)\n'ایڈمز ایپل' کس چیز کے بڑھنے کی وجہ سے بنتا ہے؟",
    "options": [
      "Thyroid gland\nتھائیرائیڈ غدود",
      "Thyroid cartilage\nتھائیرائیڈ کارٹلیج",
      "Vocal cords\nصوتی ڈوریاں",
      "Epiglottis\nایپیگلوٹس"
    ],
    "correct": "Thyroid cartilage",
    "explanation": "ایڈمز ایپل گردن کے سامنے کا وہ ابھار ہے جو لیرنکس (صوتی خانہ) کو گھیرے ہوئے تھائیرائیڈ کارٹلیج کے زاویے سے بنتا ہے۔ بلوغت کے دوران ٹیسٹوسٹیرون کے اثر کی وجہ سے یہ مردوں میں زیادہ نمایاں ہو جاتا ہے۔"
  },
  {
    "id": "16",
    "text": "The way how new species are formed is known as (TSTET 22 May 2024)\nنئی انواع کے بننے کے طریقے کو کیا کہا جاتا ہے؟",
    "options": [
      "Micro evolution\nمائیکرو ارتقاء",
      "Genetic mutation\nجینیاتی تغیر",
      "Speciation\nانواع بندی",
      "Natural selection\nقدرتی انتخاب"
    ],
    "correct": "Speciation",
    "explanation": "انواع بندی (Speciation) وہ ارتقائی عمل ہے جس کے ذریعے نئی حیاتیاتی انواع وجود میں آتی ہیں۔ یہ اس وقت ہوتا ہے جب کسی نوع کے اندر ایک گروہ اپنی نوع کے دوسرے اراکین سے الگ ہو جاتا ہے اور اپنی منفرد خصوصیات تیار کرتا ہے۔ جینیاتی تغیر اور قدرتی انتخاب وہ میکانزم ہیں جو اس عمل کو آگے بڑھا سکتے ہیں، لیکن 'انواع بندی' نئی نوع کی تشکیل کے لیے مخصوص اصطلاح ہے۔"
  },
  {
    "id": "17",
    "text": "In some plants, ovary in flowers directly develops into fruit without the process of fertilisation. This phenomenon is known as (TSTET 22 May 2024)\nکچھ پودوں میں، پھولوں میں بیضہ دانی بغیر بارآوری کے عمل کے براہ راست پھل میں تبدیل ہو جاتی ہے۔ اس مظہر کو کیا کہا جاتا ہے؟",
    "options": [
      "Parthenogenesis\nپارتھینوجینیسس",
      "Fission\nفِشن",
      "Regeneration\nتجدید",
      "Parthenocarpy\nپارتھینوکارپی"
    ],
    "correct": "Parthenocarpy",
    "explanation": "پارتھینوکارپی بغیر بارآوری کے پھل کی نشوونما ہے۔ اس عمل کے نتیجے میں بے بیج پھل بنتے ہیں۔ اس کی ایک کلاسیکی مثال کیلا ہے۔ دوسری طرف، پارتھینوجینیسس غیر جنسی تولید کی ایک شکل ہے جہاں ایک جنین غیر بارآور انڈے سے تیار ہوتا ہے، جو کچھ کیڑوں اور رینگنے والے جانوروں میں عام ہے۔"
  },
  {
    "id": "18",
    "text": "For the growth and repair of our body, we need (TSTET 22 May 2024)\nہمارے جسم کی نشوونما اور مرمت کے لیے ہمیں کس چیز کی ضرورت ہوتی ہے؟",
    "options": [
      "Proteins\nپروٹین",
      "Vitamins\nوٹامن",
      "Carbohydrates\nکاربوہائیڈریٹس",
      "Minerals\nمعدنیات"
    ],
    "correct": "Proteins",
    "explanation": "پروٹین ضروری میکرو نیوٹرینٹس ہیں جو جسم کے 'تعمیری بلاکس' کے طور پر کام کرتے ہیں۔ وہ بافتوں کی تعمیر اور مرمت، انزائمز اور ہارمونز بنانے، اور مجموعی نشوونما کی حمایت کے لیے انتہائی اہم ہیں۔ جبکہ کاربوہائیڈریٹس توانائی فراہم کرتے ہیں، اور وٹامنز اور معدنیات مختلف افعال کی حمایت کرتے ہیں، پروٹین ساختی نشوونما اور مرمت کے لیے بنیادی ہیں۔"
  },
  {
    "id": "19",
    "text": "Identify the symptom of the deficiency disease 'Rickets' (TSTET 22 May 2024)\nکمی کی بیماری 'رکٹس' کی علامت کی نشاندہی کریں۔",
    "options": [
      "Weak muscles and little energy to work\nکمزور پٹھے اور کام کرنے کے لیے کم توانائی",
      "Swelling of glands in neck\nگردن میں غدود کی سوجن",
      "Bones become soft and bent\nہڈیاں نرم اور مڑی ہوئی ہو جاتی ہیں",
      "Bleeding gums and wounds take longer time to heal\nمسوڑھوں سے خون بہنا اور زخموں کا دیر سے بھرنا"
    ],
    "correct": "Bones become soft and bent",
    "explanation": "رکٹس بچوں میں ہونے والی ایک حالت ہے جو وٹامن ڈی، کیلشیم، یا فاسفیٹ کی کمی کی وجہ سے ہوتی ہے۔ اس کمی کی وجہ سے ہڈیاں کمزور اور نرم ہو جاتی ہیں، جس کے نتیجے میں ہڈیوں کی خرابی ہو سکتی ہے جیسے کہ جھکی ہوئی ٹانگیں اور مڑی ہوئی ریڑھ کی ہڈی۔ مسوڑھوں سے خون بہنا اسکروی (وٹامن سی کی کمی) کی علامت ہے، اور گردن میں غدود کی سوجن گلہڑ (آیوڈین کی کمی) کی علامت ہے۔"
  },
  {
    "id": "20",
    "text": "This type of fluorosis occurs only in poorly nourished children whose diet is low in calcium (TSTET 22 May 2024)\nاس قسم کا فلوروسس صرف ان کمزور غذائیت والے بچوں میں ہوتا ہے جن کی خوراک میں کیلشیم کی کمی ہو۔",
    "options": [
      "Dental Fluorosis\nدانتوں کا فلوروسس",
      "Genu Valgum\nجینو ویلگم",
      "Neurological Fluorosis\nعصبی فلوروسس",
      "Skeletal Fluorosis\nہڈیوں کا فلوروسس"
    ],
    "correct": "Genu Valgum",
    "explanation": "جینو ویلگم، یا 'knock-knees'، ہڈیوں کے فلوروسس کا ایک شدید مظہر ہے، خاص طور پر ان علاقوں میں جہاں پینے کے پانی میں فلورائیڈ کی سطح زیادہ ہوتی ہے۔ یہ خاص طور پر ان بچوں میں زیادہ پایا جاتا ہے جو غذائیت کی کمی کا شکار ہیں اور جن کی خوراک میں کیلشیم کم ہے، کیونکہ کیلشیم کی کمی ہڈیوں کی نشوونما پر اضافی فلورائیڈ کے نقصان دہ اثرات کو بڑھا دیتی ہے۔"
  },
  {
    "id": "21",
    "text": "The number of mitotic divisions are required for formation of 128 daughter cells from a single mother cell (TSTET 22 May 2024)\nایک واحد مادر خلیے سے 128 دختر خلیے بنانے کے لیے کتنے مائٹوٹک تقسیم کی ضرورت ہوتی ہے؟",
    "options": [
      "2",
      "64",
      "127",
      "7"
    ],
    "correct": "7",
    "explanation": "مائٹوسس کے نتیجے میں ایک خلیہ دو یکساں دختر خلیوں میں تقسیم ہوتا ہے۔ پیدا ہونے والے خلیوں کی تعداد ایک ایکسپونینشل پیٹرن کی پیروی کرتی ہے: $2^n$، جہاں 'n' تقسیم کی تعداد ہے۔ 128 خلیے حاصل کرنے کے لیے درکار تقسیم کی تعداد معلوم کرنے کے لیے، ہمیں مساوات $2^n = 128$ کو حل کرنے کی ضرورت ہے۔ چونکہ $2^7 = 128$ ہے، اس لیے سات مائٹوٹک تقسیم کی ضرورت ہے۔"
  },
  {
    "id": "22",
    "text": "Japanese encephalitis is caused by (TSTET 22 May 2024)\nجاپانی انسیفلائٹس کس وجہ سے ہوتا ہے؟",
    "options": [
      "Mosquito bite\nمچھر کا کاٹنا",
      "Housefly\nگھریلو مکھی",
      "Cockroach\nلال بیگ",
      "Amoeba\nامیبا"
    ],
    "correct": "Mosquito bite",
    "explanation": "جاپانی انسیفلائٹس ایک وائرل بیماری ہے جو انسانوں میں متاثرہ مچھروں، خاص طور پر کیولیکس نسل کے مچھروں کے کاٹنے سے پھیلتی ہے۔ یہ وائرس مچھروں اور ریڑھ کی ہڈی والے میزبانوں جیسے سور اور آبی پرندوں کے درمیان گردش کرتا ہے، اور انسان کسی کیریئر مچھر کے کاٹنے سے متاثر ہو سکتا ہے۔"
  },
  {
    "id": "23",
    "text": "The change of state from liquid to gas is called (TSTET 22 May 2024)\nمائع سے گیس میں حالت کی تبدیلی کو کیا کہتے ہیں؟",
    "options": [
      "Perspiration\nپسینہ آنا",
      "Respiration\nتنفس",
      "Evaporation\nعمل تبخیر",
      "Condensation\nعمل تکثیف"
    ],
    "correct": "Evaporation",
    "explanation": "عمل تبخیر وہ عمل ہے جس میں مائع گیس یا بخارات میں تبدیل ہو جاتا ہے۔ یہ حالت کی ایک طبعی تبدیلی ہے۔ عمل تکثیف اس کا الٹ عمل ہے (گیس سے مائع)۔ تنفس توانائی کے اخراج کے لیے ایک حیاتیاتی عمل ہے، اور پسینہ آنا پسینے کا اخراج ہے۔"
  },
  {
    "id": "24",
    "text": "The world's first synthetic microfiber was invented by the Toray Industries Scientist Dr. Miyoshi Okamoto in the year (TSTET 22 May 2024)\nدنیا کا پہلا مصنوعی مائیکرو فائبر ٹورے انڈسٹریز کے سائنسدان ڈاکٹر میوشی اوکاموٹو نے کس سال ایجاد کیا تھا؟",
    "options": [
      "1890",
      "1970",
      "1966",
      "1980"
    ],
    "correct": "1970",
    "explanation": "جاپانی کمپنی ٹورے انڈسٹریز میں کام کرنے والے سائنسدان ڈاکٹر میوشی اوکاموٹو کو 1970 میں پہلا مائیکرو فائبر ایجاد کرنے کا سہرا دیا جاتا ہے۔ ان کی ایجاد نے الٹرا سویڈ جیسے مواد کی تخلیق کی راہ ہموار کی۔"
  },
  {
    "id": "25",
    "text": "Among the following Indian scientists who described the methods of distillation, extraction, sublimation and the equipment required for them in his book 'Rasarnavam' (TSTET 22 May 2024)\nمندرجہ ذیل بھارتی سائنسدانوں میں سے کس نے اپنی کتاب 'رسارنوم' میں کشید، استخراج، تصعید کے طریقوں اور ان کے لیے درکار آلات کی وضاحت کی؟",
    "options": [
      "Nagarjuna\nناگ ارجن",
      "Aryabhatta\nآریہ بھٹ",
      "Bhaskaracharya\nبھاسکراچاریہ",
      "J.C. Bose\nجے سی بوس"
    ],
    "correct": "Nagarjuna",
    "explanation": "ناگ ارجن ایک ممتاز قدیم ہندوستانی کیمیا دان اور دھات کار تھے۔ ان کا کام 'رسارنوم' ایک اہم متن ہے جس میں مختلف کیمیائی طریقہ کار کی تفصیلات ہیں، بشمول کشید، تصعید، اور استخراج جیسے طریقے، اور ان عملوں کے لیے درکار مختلف قسم کے آلات کی بھی وضاحت کی گئی ہے۔"
  },
  {
    "id": "26",
    "text": "The curriculum must carry significant and correct scientific information. This is (TSTET 22 May 2024)\nنصاب میں اہم اور درست سائنسی معلومات ہونی چاہئیں۔ یہ کیا ہے؟",
    "options": [
      "Cognitive validity\nعلمی جواز",
      "Historical validity\nتاریخی جواز",
      "Content validity\nمواد کا جواز",
      "Environmental validity\nماحولیاتی جواز"
    ],
    "correct": "Content validity",
    "explanation": "مواد کا جواز اس بات کو یقینی بناتا ہے کہ نصاب یا امتحان اس مضمون کے تمام متعلقہ حصوں کا احاطہ کرتا ہے جس کی پیمائش کرنا اس کا مقصد ہے۔ نصاب کے لیے 'اہم اور درست سائنسی معلومات' پر مشتمل ہونے کی ضرورت اس بات کو یقینی بنانے کا براہ راست عکاس ہے کہ اس کا مواد مضمون کے لیے درست، صحیح اور جامع ہے۔"
  },
  {
    "id": "27",
    "text": "Which of the following belongs to the academic standard 'Conceptual understanding' (TSTET 22 May 2024)\nمندرجہ ذیل میں سے کون سا تعلیمی معیار 'تصوراتی تفہیم' سے تعلق رکھتا ہے؟",
    "options": [
      "Asking questions\nسوالات پوچھنا",
      "Explaining\nوضاحت کرنا",
      "Hypothesizing\nمفروضہ قائم کرنا",
      "Collecting information\nمعلومات جمع کرنا"
    ],
    "correct": "Explaining",
    "explanation": "تصوراتی تفہیم سے مراد تصورات، کارروائیوں اور تعلقات کو سمجھنے کی صلاحیت ہے۔ کسی چیز کو اپنے الفاظ میں 'وضاحت کرنا'، مثالیں فراہم کرنا، یا معلومات کی درجہ بندی کرنا، تصوراتی تفہیم کی گہری سطح کو ظاہر کرتا ہے۔ دیگر اختیارات سائنسی تحقیق کے عمل سے زیادہ مطابقت رکھتے ہیں۔"
  },
  {
    "id": "28",
    "text": "Identify the wrongly paired teaching learning method and example (TSTET 22 May 2024)\nغلط جوڑے گئے تدریسی سیکھنے کے طریقہ اور مثال کی نشاندہی کریں۔",
    "options": [
      "Inductive approach = Doctors wear stethoscope around their neck, Siraj is wearing a stethoscope around his neck, Siraj is a doctor\nاستقرائی نقطہ نظر = ڈاکٹر اپنی گردن کے گرد سٹیتھوسکوپ پہنتے ہیں، سراج اپنی گردن کے گرد سٹیتھوسکوپ پہنے ہوئے ہے، سراج ایک ڈاکٹر ہے",
      "Deductive approach = All gases are compressible, Hydrogen is a gas, Hydrogen is compressible\nاستخراجی نقطہ نظر = تمام گیسیں دبائی جا سکتی ہیں، ہائیڈروجن ایک گیس ہے، ہائیڈروجن دبائی جا سکتی ہے",
      "Lecture cum demonstration = Explanation of the concept of conductivity of heat using a Bunsen burner\nلیکچر کم ڈیمانسٹریشن = بنسن برنر کا استعمال کرتے ہوئے حرارت کی ترسیل کے تصور کی وضاحت",
      "Project method = Collect the leaves in your immediate environment and observe their features\nپروجیکٹ کا طریقہ = اپنے فوری ماحول سے پتے جمع کریں اور ان کی خصوصیات کا مشاہدہ کریں"
    ],
    "correct": "Inductive approach = Doctors wear stethoscope around their neck, Siraj is wearing a stethoscope around his neck, Siraj is a doctor",
    "explanation": "استقرائی نقطہ نظر کے لیے دی گئی مثال غلط ہے۔ استقرائی استدلال مخصوص مشاہدات سے ایک عمومی نتیجے کی طرف بڑھتا ہے۔ فراہم کردہ مثال ناقص استخراجی استدلال کی ایک شکل ہے (ایک عمومی اصول کو ایک مخصوص معاملے پر لاگو کرنا)۔ ایک صحیح استقرائی مثال یہ ہوگی کہ بہت سے انفرادی ڈاکٹروں کو سٹیتھوسکوپ پہنے ہوئے دیکھا جائے اور پھر یہ نتیجہ اخذ کیا جائے کہ 'ڈاکٹر سٹیتھوسکوپ پہنتے ہیں'۔ دوسرے جوڑے طریقہ کار کو مناسب مثال کے ساتھ صحیح طور پر ملاتے ہیں۔"
  },
  {
    "id": "29",
    "text": "The approach to curriculum in which the content of topic selected will be explained in detail in the same class (TSTET 22 May 2024)\nنصاب کا وہ نقطہ نظر جس میں منتخب کردہ موضوع کے مواد کی تفصیل اسی کلاس میں بیان کی جائے گی۔",
    "options": [
      "Concentric approach\nمرکوز نقطہ نظر",
      "Topical approach\nموضوعاتی نقطہ نظر",
      "Psychological approach\nنفسیاتی نقطہ نظر",
      "Logical approach\nمنطقی نقطہ نظر"
    ],
    "correct": "Topical approach",
    "explanation": "موضوعاتی نقطہ نظر نصاب کو مخصوص موضوعات یا تھیمز کے ارد گرد منظم کرتا ہے۔ ہر موضوع کا گہرائی سے مطالعہ کیا جاتا ہے اور اگلے موضوع پر جانے سے پہلے اسے ایک الگ اکائی کے طور پر مکمل کیا جاتا ہے۔ یہ مرکوز یا سرپل نقطہ نظر سے مختلف ہے، جہاں تصورات کو مختلف گریڈ کی سطحوں پر بڑھتی ہوئی پیچیدگی کے ساتھ دوبارہ دیکھا جاتا ہے۔"
  },
  {
    "id": "30",
    "text": "Which one of the following is an audio-visual aid? (TSTET 22 May 2024)\nمندرجہ ذیل میں سے کون سا ایک سمعی و بصری امدادی ذریعہ ہے؟",
    "options": [
      "Radio\nریڈیو",
      "Model\nماڈل",
      "Television\nٹیلی ویژن",
      "Chart\nچارٹ"
    ],
    "correct": "Television",
    "explanation": "ایک سمعی و بصری امدادی ذریعہ ایک تدریسی آلہ ہے جو سیکھنے کو بڑھانے کے لیے بصارت اور سماعت دونوں کا استعمال کرتا ہے۔ ٹیلی ویژن متحرک تصاویر (بصری) اور آواز (سمعی) دونوں پیش کرتا ہے، جو اسے سمعی و بصری امداد کی ایک بہترین مثال بناتا ہے۔ ریڈیو صرف سمعی ہے، جبکہ ماڈل اور چارٹ خالصتاً بصری امدادی ذرائع ہیں۔"
  },
  {
    "id": "31",
    "text": "Which is NOT an application of artificial satellites among the following? (TSTET 22 May 2024)\nمندرجہ ذیل میں سے کون سا مصنوعی سیاروں کا اطلاق نہیں ہے؟",
    "options": [
      "Remote sensing\nریموٹ سینسنگ",
      "Weather forecasting\nموسم کی پیشین گوئی",
      "Telecommunication\nٹیلی کمیونیکیشن",
      "Space Travel\nخلائی سفر"
    ],
    "correct": "Space Travel",
    "explanation": "مصنوعی سیارے بنیادی طور پر ریموٹ سینسنگ (دور سے زمین کے بارے میں ڈیٹا اکٹھا کرنا)، موسم کی پیشین گوئی، اور ٹیلی کمیونیکیشن (ٹی وی، انٹرنیٹ اور فون کے لیے سگنل ریلے کرنا) جیسے اطلاقات کے لیے استعمال ہوتے ہیں۔ خلائی سفر، جس میں انسانوں یا تحقیقات کو خلا میں لے جانا شامل ہے، فلکیات کا ایک مختلف شعبہ ہے اور یہ مصنوعی سیارے کا براہ راست اطلاق یا کام نہیں ہے، حالانکہ خلائی مشنوں کے دوران مواصلات کے لیے سیاروں کا استعمال کیا جاتا ہے۔"
  },
  {
    "id": "32",
    "text": "Bramah Press works based on the principle of (TSTET 22 May 2024)\nبرامہ پریس کس کے اصول پر کام کرتا ہے؟",
    "options": [
      "Archimedes\nارشمیدس",
      "Dalton\nڈالٹن",
      "Pascal\nپاسکل",
      "Torecelli\nٹوریسیلی"
    ],
    "correct": "Pascal",
    "explanation": "برامہ پریس ایک قسم کا ہائیڈرولک پریس ہے جو **پاسکل کے اصول** پر کام کرتا ہے۔ یہ اصول بیان کرتا ہے کہ ایک بند، ناقابل دباؤ مائع پر لگائی جانے والی دباؤ کی تبدیلی مائع کے ہر حصے اور برتن کی دیواروں پر بغیر کسی کمی کے منتقل ہوتی ہے۔ یہ ایک چھوٹے پسٹن پر لگائی گئی چھوٹی قوت کو ایک بڑے پسٹن پر بہت بڑی قوت پیدا کرنے کی اجازت دیتا ہے۔"
  },
  {
    "id": "33",
    "text": "Among the following, the regions where the density as well as pressure are high are (TSTET 22 May 2024)\nمندرجہ ذیل میں سے، وہ علاقے کون سے ہیں جہاں کثافت اور دباؤ دونوں زیادہ ہوتے ہیں؟",
    "options": [
      "Compressions\nدباؤ",
      "Rarefactions\nتخفیف",
      "Crests\nفراز",
      "Troughs\nنشیب"
    ],
    "correct": "Compressions",
    "explanation": "ایک طولی لہر میں، جیسے کہ آواز کی لہر، ایک **دباؤ** (compression) وہ علاقہ ہے جہاں واسطے کے ذرات ایک ساتھ جمع ہوتے ہیں، جس کے نتیجے میں ذرات کی کثافت اور دباؤ زیادہ ہوتا ہے۔ ایک تخفیف (rarefaction) اس کا الٹ ہے، یعنی کم کثافت اور کم دباؤ کا علاقہ۔ فراز (crests) اور نشیب (troughs) عرضی لہروں کی خصوصیات ہیں۔"
  },
  {
    "id": "34",
    "text": "Identify the Nuclear fusion reaction among the following. (TSTET 22 May 2024)\nمندرجہ ذیل میں سے نیوکلیئر فیوژن کے تعامل کی نشاندہی کریں۔",
    "options": [
      "${}_{1}^{2}H+\\frac{2}{1}H\\rightarrow{}_{2}^{3}He+{}_{0}^{1}n+energy$",
      "${}_{92}^{235}U+{}_{0}^{1}n\\rightarrow{}_{56}^{139}Ba+{}_{36}^{94}Ba+3{}_{0}^{1}n+energy$",
      "${}_{1}^{2}H+{}_{1}^{2}H\\rightarrow{}_{2}^{4}He$",
      "${}_{1}^{3}H+{}_{1}^{2}H\\rightarrow{}_{2}^{4}He+{}_{0}^{1}n+energy$"
    ],
    "correct": "${}_{1}^{3}H+{}_{1}^{2}H\\rightarrow{}_{2}^{4}He+{}_{0}^{1}n+energy$",
    "explanation": "**نیوکلیئر فیوژن** ایک ایسا عمل ہے جہاں دو ہلکے جوہری مرکزے مل کر ایک بھاری مرکزہ بناتے ہیں، جس سے بڑی مقدار میں توانائی خارج ہوتی ہے۔ صحیح آپشن ہائیڈروجن کے دو آئسوٹوپس (ٹریٹیم ${}_{1}^{3}H$، اور ڈیوٹیریم ${}_{1}^{2}H$) کو دکھاتا ہے جو فیوز ہو کر ایک ہیلیم نیوکلئس (${}_{2}^{4}He$) اور ایک نیوٹران (${}_{0}^{1}n$) بناتے ہیں۔ یورینیم (${}_{92}^{235}U$) پر مشتمل تعامل نیوکلیئر فیشن کی ایک مثال ہے، جہاں ایک بھاری مرکزہ ٹوٹ جاتا ہے۔"
  },
  {
    "id": "35",
    "text": "Ohm's law is valid for which of the following? (TSTET 22 May 2024)\nاوہم کا قانون مندرجہ ذیل میں سے کس کے لیے درست ہے؟",
    "options": [
      "metal conductors\nدھاتی موصل",
      "gaseous conductors\nگیسی موصل",
      "semiconductors\nنیم موصل",
      "non-conductors\nغیر موصل"
    ],
    "correct": "metal conductors",
    "explanation": "اوہم کا قانون، جو یہ بتاتا ہے کہ وولٹیج مستقل درجہ حرارت پر کرنٹ کے براہ راست متناسب ہے ($V=IR$)، بنیادی طور پر اوہمک مواد کے لیے درست ہے۔ زیادہ تر **دھاتی موصل** وولٹیج اور کرنٹ کی ایک وسیع رینج پر اوہمک مواد کے طور پر برتاؤ کرتے ہیں۔ گیسی موصل اور نیم موصل غیر اوہمک ہیں، جس کا مطلب ہے کہ ان کی مزاحمت وولٹیج یا کرنٹ کے ساتھ بدل جاتی ہے، لہذا اوہم کا قانون ان پر لاگو نہیں ہوتا ہے۔"
  },
  {
    "id": "36",
    "text": "During calcinations, (TSTET 22 May 2024)\nکیلسی نیشن کے دوران،",
    "options": [
      "Oxide is converted to its carbonate\nآکسائیڈ اپنے کاربونیٹ میں تبدیل ہو جاتا ہے",
      "Carbonate is converted to its oxide\nکاربونیٹ اپنے آکسائیڈ میں تبدیل ہو جاتا ہے",
      "Carbonate is converted to its hydride\nکاربونیٹ اپنے ہائیڈرائڈ میں تبدیل ہو جاتا ہے",
      "Oxide is converted to its hydride\nآکسائیڈ اپنے ہائیڈرائڈ میں تبدیل ہو جاتا ہے"
    ],
    "correct": "Carbonate is converted to its oxide",
    "explanation": "**کیلسی نیشن** ایک دھات کاری کا عمل ہے جس میں کچ دھات کو ہوا کی عدم موجودگی یا محدود فراہمی میں اعلی درجہ حرارت پر گرم کیا جاتا ہے۔ اس کا بنیادی مقصد اتار چڑھاؤ والی ناخالصیتوں کو دور کرنا ہے۔ کاربونیٹ کچ دھاتوں کے لیے، کیلسی نیشن کاربن ڈائی آکسائیڈ کو باہر نکال دیتا ہے، جس سے دھاتی **کاربونیٹ اپنے متعلقہ دھاتی آکسائیڈ میں تبدیل ہو جاتا ہے**۔ مثال کے طور پر: $CaCO_3(s) \\rightarrow CaO(s) + CO_2(g)$۔"
  },
]


export const sciencePaper2UrduQuestions = rawSciencePaper2UrduData.map((question, index) => {
  const options = question.options ?? [];
  const normalizedCorrect = (question.correct ?? "").trim();
  const normalizedCorrectFirstLine = normalizedCorrect.split("\n")[0]?.trim() ?? "";

  const normalizedCorrectAnswer = options.findIndex((option) => {
    const trimmed = option?.trim() ?? "";
    if (!trimmed) {
      return false;
    }

    if (trimmed === normalizedCorrect) {
      return true;
    }

    const optionFirstLine = trimmed.split("\n")[0]?.trim() ?? "";
    if (!optionFirstLine) {
      return false;
    }

    return (
      optionFirstLine === normalizedCorrect ||
      optionFirstLine === normalizedCorrectFirstLine ||
      trimmed === normalizedCorrectFirstLine
    );
  });

  return {
    id: `URDU-SCI2-${index + 1}`,
    question: question.text ?? "",
    options,
    correctAnswer: normalizedCorrectAnswer >= 0 ? normalizedCorrectAnswer : 0,
    explanation: question.explanation ?? "",
  };
});


export const convertSciencePaper2UrduToQuestionFormat = (
  questions: typeof sciencePaper2UrduQuestions,
) => {
  return questions.map((question, index) => ({
    id: index + 1,
    question: question.question,
    options: question.options,
    correctAnswer: question.correctAnswer,
    explanation: question.explanation,
  }));
};