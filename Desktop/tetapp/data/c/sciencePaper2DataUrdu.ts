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
  {
    "id": "37",
    "text": "Identify the correct pair of thermo plastic and thermosetting plastic respectively (TSTET 22 May 2024)\nبالترتیب تھرمو پلاسٹک اور تھرموسیٹنگ پلاسٹک کی صحیح جوڑی کی شناخت کریں۔",
    "options": [
      "TV cabinet, Tooth brush handle\nٹی وی کیبنٹ، ٹوتھ برش کا ہینڈل",
      "Electric switch, piece of bucket\nالیکٹرک سوئچ، بالٹی کا ٹکڑا",
      "Comb, Computer key board\nکنگھی، کمپیوٹر کی بورڈ",
      "Coffee Mug, Meals plate\nکافی مگ، کھانے کی پلیٹ"
    ],
    "correct": "Comb, Computer key board",
    "explanation": "سوال میں (تھرمو پلاسٹک، تھرموسیٹنگ پلاسٹک) کی جوڑی پوچھی گئی ہے۔ **تھرمو پلاسٹک** کو دوبارہ پگھلایا اور نئی شکل دی جا سکتی ہے (مثلاً، پولی پروپیلین سے بنی کنگھی)۔ **تھرموسیٹنگ پلاسٹک** ایک مستقل شکل میں سخت ہو جاتے ہیں اور انہیں دوبارہ پگھلایا نہیں جا سکتا (مثلاً، الیکٹرک سوئچ میں بیکلائٹ)۔ اگرچہ زیادہ تر کی بورڈ پلاسٹک (جیسے ABS) تھرمو پلاسٹک ہوتے ہیں، جس سے یہ آپشن قدرے مبہم ہو جاتا ہے، لیکن دیگر آپشنز کی ترتیب واضح طور پر غلط ہے۔ مثال کے طور پر، ایک الیکٹرک سوئچ (تھرموسیٹنگ) اور بالٹی کا ٹکڑا (تھرمو پلاسٹک) الٹی ترتیب میں ہیں۔"
  },
  {
    "id": "38",
    "text": "The lowest temperature at which a substance catches fire is called its (TSTET 22 May 2024)\nوہ کم سے کم درجہ حرارت جس پر کوئی مادہ آگ پکڑتا ہے، اسے کیا کہتے ہیں؟",
    "options": [
      "Initial temperature\nابتدائی درجہ حرارت",
      "Ignition temperature\nاشتعال کا درجہ حرارت",
      "Abnormal temperature\nغیر معمولی درجہ حرارت",
      "Normal temperature\nمعمول کا درجہ حرارت"
    ],
    "correct": "Ignition temperature",
    "explanation": "کسی مادہ کا **اشتعال کا درجہ حرارت** وہ کم سے کم درجہ حرارت ہے جو کسی بیرونی ذریعے جیسے چنگاری یا شعلے کے بغیر خود بخود دہن شروع کرنے یا اسے برقرار رکھنے کے لیے درکار ہوتا ہے۔ یہ آگ کی حفاظت سے متعلق ایک اہم خاصیت ہے۔"
  },
  {
    "id": "39",
    "text": "An enzyme that causes the surface of an apple to change colour when it is cut (TSTET 22 May 2024)\nایک انزائم جو سیب کو کاٹنے پر اس کی سطح کا رنگ بدلنے کا سبب بنتا ہے۔",
    "options": [
      "Hydrolase\nہائیڈرولیس",
      "Isomerase\nآئیسومیریس",
      "Amylase\nایمائلیز",
      "Tyrosinase\nٹائروسینیز"
    ],
    "correct": "Tyrosinase",
    "explanation": "کٹے ہوئے سیب کا بھورا ہونا ایک انزیمیٹک ردعمل ہے۔ جب سیب کے خلیات کو نقصان پہنچتا ہے، تو پولی فینول آکسیڈیز (جسے **ٹائروسینیز** بھی کہا جاتا ہے) نامی ایک انزائم خارج ہوتا ہے۔ آکسیجن کی موجودگی میں، یہ انزائم سیب کے بافتوں میں موجود فینولک مرکبات کو آکسیڈائز کرتا ہے، جس سے بھورے رنگ کے روغن بنتے ہیں۔ یہ ردعمل فینولک مرکب جیسے کیٹیکول کو کوئینون میں تبدیل کرتا ہے، جو بھورے رنگ کا سبب بنتا ہے۔"
  },
  {
    "id": "40",
    "text": "Convert 20 g of Oxygen gas (O₂) into mole (TSTET 22 May 2024)\n20 گرام آکسیجن گیس (O₂) کو مول میں تبدیل کریں۔",
    "options": [
      "1.25 moles",
      "0.625 moles",
      "0.75 moles",
      "0.375 moles"
    ],
    "correct": "0.625 moles",
    "explanation": "کمیت کو مول میں تبدیل کرنے کے لیے، ہم فارمولا استعمال کرتے ہیں: مول = کمیت / مولر کمیت۔ آکسیجن (O) کا ایٹمی ماس تقریباً 16 گرام/مول ہے۔ چونکہ آکسیجن گیس ایک ڈائی ایٹامک مالیکیول (O₂) ہے، اس کا مولر ماس $2 \\times 16 = 32$ گرام/مول ہے۔ لہذا، مول کی تعداد $20 \\text{ g} / 32 \\text{ g/mol} = 0.625$ مول ہے۔"
  },
  {
    "id": "41",
    "text": "Identify the correct statement among the following (TSTET 22 May 2024)\nمندرجہ ذیل میں سے صحیح بیان کی شناخت کریں۔",
    "options": [
      "Electro positivity decreases from left to right in groups.\nگروپوں میں بائیں سے دائیں جانے پر الیکٹرو پازیٹیویٹی کم ہوتی ہے۔",
      "Non-metallic nature increases from top to bottom in groups.\nگروپوں میں اوپر سے نیچے جانے پر غیر دھاتی خصوصیت بڑھتی ہے۔",
      "Metallic nature increases from top to bottom in groups.\nگروپوں میں اوپر سے نیچے جانے پر دھاتی خصوصیت بڑھتی ہے۔",
      "Electronegativity increases from left to right in groups.\nگروپوں میں بائیں سے دائیں جانے پر الیکٹرو نیگیٹیویٹی بڑھتی ہے۔"
    ],
    "correct": "Metallic nature increases from top to bottom in groups.",
    "explanation": "دوری جدول میں، جب آپ کسی گروپ کے اندر اوپر سے نیچے کی طرف جاتے ہیں، تو الیکٹران شیلز کی تعداد بڑھ جاتی ہے۔ اس سے ایٹمی رداس اور شیلڈنگ اثر بڑھتا ہے، جس سے ایٹم کے لیے اپنے سب سے باہری الیکٹران کو کھونا آسان ہو جاتا ہے۔ الیکٹران کھونے کا یہ رجحان دھاتی کردار کی تعریف ہے۔ لہذا، **گروپوں میں اوپر سے نیچے کی طرف دھاتی خصوصیت بڑھتی ہے**۔"
  },
  {
    "id": "42",
    "text": "The shape of NH₃ molecule is (TSTET 22 May 2024)\nNH₃ مالیکیول کی شکل کیا ہے؟",
    "options": [
      "Tetrahedral\nٹیٹراہیڈرل",
      "Linear\nلکیری",
      "Trigonal planar\nٹرائیگونل پلینر",
      "Trigonal pyramidal\nٹرائیگونل پیرامڈل"
    ],
    "correct": "Trigonal pyramidal",
    "explanation": "امونیا (NH₃) کے مالیکیول میں، مرکزی نائٹروجن ایٹم تین ہائیڈروجن ایٹموں کے ساتھ تین سنگل بانڈ بناتا ہے اور اس کے پاس الیکٹران کا ایک لون پیئر ہوتا ہے۔ VSEPR تھیوری کے مطابق، چار الیکٹران جوڑے (3 بانڈنگ، 1 لون) ایک ٹیٹراہیڈرل الیکٹران جیومیٹری بناتے ہیں۔ تاہم، مالیکیولر شکل صرف ایٹموں کی ترتیب سے بیان ہوتی ہے۔ لون پیئر بانڈنگ جوڑوں کو زیادہ مضبوطی سے دھکیلتا ہے، جس سے ہائیڈروجن ایٹم نیچے کی طرف **ٹرائیگونل پیرامڈل** شکل میں آجاتے ہیں۔"
  },
  {
    "id": "43",
    "text": "When a child is in mother's womb, RBC are formed in (TSTET 22 May 2024)\nجب بچہ ماں کے پیٹ میں ہوتا ہے تو آر بی سی کہاں بنتے ہیں؟",
    "options": [
      "Bone marrow of long bones\nلمبی ہڈیوں کا گودا",
      "Liver only\nصرف جگر",
      "Heart\nدل",
      "Liver and Spleen\nجگر اور تلی"
    ],
    "correct": "Liver and Spleen",
    "explanation": "جنین میں، ہیموٹوپوائسز (خون کے خلیات کی تشکیل، بشمول سرخ خون کے خلیات یا آر بی سی) کے بنیادی مقامات **جگر اور تلی** ہیں۔ ہڈیوں کا گودا آہستہ آہستہ جنین کی نشوونما کے بعد کے مراحل میں اس کام کو سنبھال لیتا ہے اور پیدائش کے بعد آر بی سی کی پیداوار کا بنیادی مقام ہوتا ہے۔"
  },
  {
    "id": "44",
    "text": "Seed dispersal of this plant / tree is NOT through wind (TSTET 22 May 2024)\nاس پودے/درخت کے بیجوں کا پھیلاؤ ہوا کے ذریعے نہیں ہوتا ہے۔",
    "options": [
      "Guava\nامرود",
      "Milkweed\nآک",
      "Dandelion\nڈینڈیلین",
      "Tridax\nٹرائیڈیکس"
    ],
    "correct": "Guava",
    "explanation": "**امرود** کا پھل گودے دار ہوتا ہے جس میں بہت سے بیج ہوتے ہیں، جو جانوروں کے ذریعے پھیلنے (zoochochory) کے لیے موزوں ہے۔ پرندے اور ممالیہ پھل کھاتے ہیں اور بیجوں کو کہیں اور خارج کر دیتے ہیں۔ آک، ڈینڈیلین، اور ٹرائیڈیکس سبھی ہلکے، پنکھوں جیسے ساخت (پیپس) والے بیج پیدا کرتے ہیں جو ہوا (anemochory) کے ذریعے آسانی سے لے جائے جاتے ہیں۔"
  },
  {
    "id": "45",
    "text": "Identify the endocrine gland from the following (TSTET 22 May 2024)\nمندرجہ ذیل میں سے اینڈوکرائن غدود کی شناخت کریں۔",
    "options": [
      "Mammary glands\nچھاتی کے غدود",
      "Liver\nجگر",
      "Adrenal gland\nایڈرینل غدود",
      "Sebaceous glands\nسیبیسیئس غدود"
    ],
    "correct": "Adrenal gland",
    "explanation": "**اینڈوکرائن غدود** بے نالی غدود ہوتے ہیں جو ہارمونز کو براہ راست خون کے دھارے میں خارج کرتے ہیں۔ **ایڈرینل غدود** ایک اہم اینڈوکرائن غدود ہے۔ دیگر آپشنز ایکزروکرائن غدود ہیں: چھاتی کے غدود (دودھ خارج کرتے ہیں)، جگر (پت کو نالیوں میں خارج کرتا ہے)، اور سیبیسیئس غدود (تیل خارج کرتے ہیں) سبھی اپنی مصنوعات کو نالیوں کے ذریعے خارج کرتے ہیں۔"
  },
  {
    "id": "46",
    "text": "The tiny cellular bubble like structures in the ovaries of female reproductive system, where ova are developed (TSTET 22 May 2024)\nمادہ تولیدی نظام کے بیضہ دانی میں چھوٹے خلیاتی بلبلے جیسی ساختیں، جہاں بیضے تیار ہوتے ہیں۔",
    "options": [
      "Fallopian tubes\nفیلوپین ٹیوبز",
      "Graafian follicles\nگرافین فولیکلز",
      "Endometrium\nاینڈومیٹریم",
      "Oviduct\nاوویڈکٹ"
    ],
    "correct": "Graafian follicles",
    "explanation": "**گرافین فولیکلز** (یا بیضہ دانی کے فولیکلز) مادہ تولیدی نظام کی بنیادی اکائیاں ہیں۔ یہ بیضہ دانی میں واقع چھوٹی، سیال سے بھری تھیلیاں ہیں، اور ہر ایک میں ایک ناپختہ انڈا (oocyte) ہوتا ہے۔ جیسے جیسے ایک فولیکل پختہ ہوتا ہے، اندر کا انڈا تیار ہوتا ہے، اور یہ ایک پختہ گرافین فولیکل سے ہی ہوتا ہے کہ انڈا بیضہ ریزی کے دوران خارج ہوتا ہے۔"
  },
  {
    "id": "47",
    "text": "The process of development of young organisms directly from unfertilized gamates is known as (TSTET 22 May 2024)\nغیر بارآور گیمیٹس سے براہ راست نوجوان جانداروں کی نشوونما کے عمل کو کیا کہا جاتا ہے؟",
    "options": [
      "Partheno Carpy\nپارتھینو کارپی",
      "Budding\nبڈنگ",
      "Regeneration\nریجنریشن",
      "Parthenogenesis\nپارتھینوجینیسس"
    ],
    "correct": "Parthenogenesis",
    "explanation": "**پارتھینوجینیسس** غیر جنسی تولید کی ایک قدرتی شکل ہے جس میں ایک جنین غیر بارآور بیضہ (انڈے کے خلیے) سے تیار ہوتا ہے۔ یہ عمل کیڑوں، رینگنے والے جانوروں اور مچھلیوں کی کچھ اقسام میں ہوتا ہے۔ اس کے برعکس، پارتھینو کارپی بغیر بارآوری کے پھل کی نشوونما ہے، جس کے نتیجے میں بے بیج پھل بنتے ہیں۔"
  },
  {
    "id": "48",
    "text": "Bone is a connective tissue. Two bones can also be connected to each other by another connective tissue called (TSTET 22 May 2024)\nہڈی ایک جوڑنے والی بافت ہے۔ دو ہڈیاں ایک دوسرے سے ایک اور جوڑنے والی بافت کے ذریعے بھی جڑی ہو سکتی ہیں جسے کہتے ہیں۔",
    "options": [
      "Cartilage\nکارٹلیج",
      "Ligament\nلگامنٹ",
      "Muscles\nپٹھے",
      "Plasma\nپلازما"
    ],
    "correct": "Ligament",
    "explanation": "ایک **لگامنٹ** جوڑنے والی بافت کا ایک سخت، ریشے دار بینڈ ہے جو ہڈی کو ہڈی سے جوڑتا ہے، جو ڈھانچے کو ایک ساتھ رکھنے اور انہیں مستحکم رکھنے کا کام کرتا ہے۔ ٹینڈن پٹھوں کو ہڈی سے جوڑتے ہیں، جبکہ کارٹلیج جوڑوں پر ہڈیوں کے درمیان کشن فراہم کرتا ہے۔"
  },
  {
    "id": "49",
    "text": "The temperature maintained by our stomach is (TSTET 22 May 2024)\nہمارے معدے کا درجہ حرارت کتنا ہوتا ہے؟",
    "options": [
      "37°C",
      "40°C",
      "30°C",
      "25°C"
    ],
    "correct": "37°C",
    "explanation": "انسانی جسم کا اندرونی بنیادی درجہ حرارت سختی سے تقریباً **37°C (98.6°F)** پر کنٹرول کیا جاتا ہے۔ معدہ، ایک اندرونی عضو ہونے کے ناطے، اس درجہ حرارت کو برقرار رکھتا ہے، جو اس کے ہاضمے کے انزائمز، جیسے پیپسن، کے کام کے لیے بہترین ہے۔"
  },
  {
    "id": "50",
    "text": "Endemic Skeletal Fluorosis was identified in this district of Telangana (TSTET 22 May 2024)\nتلنگانہ کے اس ضلع میں مقامی ہڈیوں کے فلوروسس کی شناخت کی گئی تھی۔",
    "options": [
      "Warangal\nوارنگل",
      "Hyderabad\nحیدرآباد",
      "Nalgonda\nنلگنڈہ",
      "Adilabad\nعادل آباد"
    ],
    "correct": "Nalgonda",
    "explanation": "تلنگانہ کا **نلگنڈہ** ضلع تاریخی طور پر پینے کے پانی میں فلورائیڈ کی زیادہ مقدار کی وجہ سے ایک شدید صحت عامہ کے بحران کے لیے جانا جاتا تھا۔ اس کی وجہ سے مقامی ہڈیوں کے فلوروسس کا وسیع پھیلاؤ ہوا، جو ہڈیوں اور دانتوں کو متاثر کرنے والی ایک معذور کرنے والی بیماری ہے۔"
  },
  {
    "id": "51",
    "text": "During mitotic cell division, chromatids elongate, become invisible and replicate to become chromosomes during this phase (TSTET 22 May 2024)\nمائٹوٹک سیل ڈویژن کے دوران، کرومیٹڈز لمبے ہوتے ہیں، غیر مرئی ہو جاتے ہیں اور اس مرحلے کے دوران کروموسوم بننے کے لیے نقل کرتے ہیں۔",
    "options": [
      "Telophase\nٹیلوفیز",
      "Anaphase\nاینافیز",
      "Metaphase\nمیٹا فیز",
      "Prometaphase\nپرومیٹافیز"
    ],
    "correct": "Telophase",
    "explanation": "یہ سوال مختلف مراحل کے عمل کو یکجا کرتا ہے۔ کروموسوم کا لمبا ہونا اور ڈی-کنڈینسیشن (انہیں کم نظر آنا) **ٹیلوفیز** کے دوران ہوتا ہے، جب نئے نیوکلیائی بنتے ہیں۔ تاہم، ڈی این اے کی نقل سے سسٹر کرومیٹڈز بننا انٹرفیز کے ایس فیز کے دوران ہوتا ہے، جو مائٹوسس شروع ہونے سے پہلے ہوتا ہے۔ دیے گئے مائٹوٹک مراحل میں، ٹیلوفیز وہ ہے جہاں کروموسوم واپس کرومیٹن میں کھل جاتے ہیں۔"
  },
  {
    "id": "52",
    "text": "An active immune system recruits many cells to the affected tissue to kill the disease-causing microbes. The recruitment process is called (TSTET 22 May 2024)\nایک فعال مدافعتی نظام بیماری پیدا کرنے والے جرثوموں کو مارنے کے لیے متاثرہ بافتوں میں بہت سے خلیات کو بھرتی کرتا ہے۔ بھرتی کے اس عمل کو کیا کہتے ہیں؟",
    "options": [
      "Infection\nانفیکشن",
      "Employment\nملازمت",
      "Inflammation\nسوزش",
      "Manifestation\nظہور"
    ],
    "correct": "Inflammation",
    "explanation": "**سوزش** جسم کا نقصان دہ محرکات، جیسے پیتھوجینز، خراب خلیات، یا جلن پیدا کرنے والے مادوں کے خلاف قدرتی ردعمل ہے۔ یہ ایک حفاظتی عمل ہے جس میں مدافعتی خلیات اور مالیکیولز کو متاثرہ علاقے میں بھرتی کرنا شامل ہے تاکہ چوٹ کی وجہ کو ختم کیا جا سکے، مردہ خلیات کو صاف کیا جا سکے، اور بافتوں کی مرمت شروع کی جا سکے۔"
  },
  {
    "id": "53",
    "text": "Ginger and Turmeric are modifications of (TSTET 22 May 2024)\nادرک اور ہلدی کس کی تبدیل شدہ شکلیں ہیں؟",
    "options": [
      "Stem\nتنا",
      "Root\nجڑ",
      "Leaf\nپتہ",
      "Fruit\nپھل"
    ],
    "correct": "Stem",
    "explanation": "ادرک اور ہلدی رائزوم ہیں، جو تبدیل شدہ زیر زمین **تنے** ہیں۔ یہ افقی طور پر بڑھتے ہیں اور ان کی خصوصیت نوڈس اور انٹرنوڈس کی موجودگی ہے، جہاں سے ٹہنیاں اور جڑیں نکل سکتی ہیں۔ یہ بنیادی طور پر پودے کے لیے ذخیرہ کرنے والے اعضاء کے طور پر کام کرتے ہیں۔"
  },
  {
    "id": "54",
    "text": "Fibrous root system is seen in this plant/tree (TSTET 22 May 2024)\nریشے دار جڑوں کا نظام اس پودے/درخت میں دیکھا جاتا ہے۔",
    "options": [
      "Peepal\nپیپل",
      "Wheat\nگندم",
      "Banyan\nبرگد",
      "Cucumber\nکھیرا"
    ],
    "correct": "Wheat",
    "explanation": "ریشے دار جڑوں کا نظام، جو تنے سے نکلنے والی پتلی، شاخ دار جڑوں کے گھنے نیٹ ورک پر مشتمل ہوتا ہے، مونوکوٹیلیڈونس پودوں کی خصوصیت ہے۔ **گندم** ایک مونوکوٹ ہے اور اس طرح اس کا ریشے دار جڑوں کا نظام ہوتا ہے۔ پیپل، برگد، اور کھیرا ڈائیکاٹس ہیں، جن میں عام طور پر ٹیپروٹ نظام ہوتا ہے۔"
  },
  {
    "id": "55",
    "text": "Which of the following can be used to collect evidence of student learning progress and communicate it to their parents, community, and relevant authorities? (TSTET 22 May 2024)\nمندرجہ ذیل میں سے کون سا طالب علم کی سیکھنے کی پیشرفت کا ثبوت جمع کرنے اور اسے ان کے والدین، برادری اور متعلقہ حکام تک پہنچانے کے لیے استعمال کیا جا سکتا ہے؟",
    "options": [
      "Learning indicators\nسیکھنے کے اشارے",
      "Learning experiences\nسیکھنے کے تجربات",
      "Learning outcomes\nسیکھنے کے نتائج",
      "Learning objectives\nسیکھنے کے مقاصد"
    ],
    "correct": "Learning indicators",
    "explanation": "**سیکھنے کے اشارے** مخصوص، قابل مشاہدہ، اور قابل پیمائش چوکیاں ہیں جو ایک وسیع سیکھنے کے نتیجے کی طرف طالب علم کی پیشرفت کو ظاہر کرتی ہیں۔ وہ اس بات کا ٹھوس ثبوت فراہم کرتے ہیں کہ ایک طالب علم کیا جانتا ہے یا کر سکتا ہے، جو انہیں والدین سمیت مختلف اسٹیک ہولڈرز کو سیکھنے کی پیشرفت کو ٹریک کرنے اور بات چیت کرنے کے لیے ایک مؤثر ذریعہ بناتا ہے۔"
  },
  {
    "id": "56",
    "text": "While writing the unit plan this information should be written under the heading of teacher's notes (TSTET 22 May 2024)\nیونٹ پلان لکھتے وقت یہ معلومات استاد کے نوٹس کے عنوان کے تحت لکھی جانی چاہیے۔",
    "options": [
      "Number of periods\nپیریڈز کی تعداد",
      "Reference books, Additional information\nحوالہ جاتی کتابیں، اضافی معلومات",
      "Experiences while teaching the lesson\nسبق پڑھاتے وقت کے تجربات",
      "Academic Standards to be achieved\nحاصل کیے جانے والے تعلیمی معیارات"
    ],
    "correct": "Reference books, Additional information",
    "explanation": "ایک یونٹ یا سبق کے منصوبے میں، 'استاد کے نوٹس' کا سیکشن عام طور پر ان اضافی تفصیلات کے لیے مخصوص ہوتا ہے جو استاد کی مدد کرتی ہیں۔ اس میں **حوالہ جاتی کتابیں**، گہرے مواد کے علم کے لیے، **اضافی معلومات** یا فراہم کرنے کے لیے مثالیں، یا کلاس روم کے انتظام کے لیے یاد دہانیاں شامل ہیں۔ بنیادی اجزاء جیسے پیریڈز کی تعداد اور تعلیمی معیارات کے اپنے مخصوص حصے ہوتے ہیں، جبکہ تجربات تدریس کے بعد کی عکاسی ہوتے ہیں۔"
  },
  {
    "id": "57",
    "text": "Full Form of INSPIRE (TSTET 22 May 2024)\nINSPIRE کا مکمل نام کیا ہے؟",
    "options": [
      "Inspiration in Science Pursuit for Innovative Research",
      "Innovation in Science Project for Inspired Research",
      "Innovation in Science Pursuit for Inspired Research",
      "Inspiration in Science Project for Innovative Research"
    ],
    "correct": "Innovation in Science Pursuit for Inspired Research",
    "explanation": "INSPIRE حکومت ہند کے محکمہ سائنس اور ٹیکنالوجی (DST) کا ایک فلیگ شپ پروگرام ہے۔ اس کا مخفف **'Innovation in Science Pursuit for Inspired Research'** ہے۔ اس کا مقصد باصلاحیت نوجوان طلباء کو سائنس کے مطالعہ کی طرف راغب کرنا اور تحقیق میں کیریئر کی حوصلہ افزائی کرنا ہے۔"
  },
  {
    "id": "58",
    "text": "The behaviour of a student (who) follows the lab procedures in compliance to the lab manual relates to this objective (TSTET 22 May 2024)\nایک طالب علم کا رویہ (جو) لیب مینوئل کی تعمیل میں لیب کے طریقہ کار پر عمل کرتا ہے، اس مقصد سے متعلق ہے۔",
    "options": [
      "Receiving\nوصول کرنا",
      "Knowledge\nعلم",
      "Responding\nجواب دینا",
      "Analysis\nتجزیہ"
    ],
    "correct": "Responding",
    "explanation": "یہ سوال سیکھنے کے افیکٹیو ڈومین کی سطحوں سے متعلق ہے، جو رویوں اور اقدار سے متعلق ہے۔ **جواب دینا** سیکھنے والے کی فعال شرکت سے مراد ہے۔ جب کوئی طالب علم رضاکارانہ طور پر لیب کے طریقہ کار پر عمل کرتا ہے اور قواعد کی تعمیل کرتا ہے، تو وہ سیکھنے کی صورتحال پر فعال طور پر جواب دے رہا ہوتا ہے۔ یہ صرف قواعد سے آگاہ ہونے (وصول کرنا) سے آگے ہے۔"
  },
  {
    "id": "59",
    "text": "The approach to curriculum in which topics will be organized in such a way that it finds a place in different classes of a course in a progressive manner (TSTET 22 May 2024)\nنصاب کا وہ طریقہ جس میں موضوعات کو اس طرح منظم کیا جائے گا کہ وہ ایک کورس کی مختلف کلاسوں میں ترقی پسند طریقے سے جگہ پائے۔",
    "options": [
      "Typical approach\nعام طریقہ",
      "Concentric approach\nمتحد المرکز طریقہ",
      "Random approach\nبے ترتیب طریقہ",
      "Controlled approach\nکنٹرول شدہ طریقہ"
    ],
    "correct": "Concentric approach",
    "explanation": "**متحد المرکز طریقہ** (جسے سرپل نصاب بھی کہا جاتا ہے) نصاب کے ڈیزائن کا ایک طریقہ ہے جہاں کلیدی تصورات کو ایک طالب علم کی تعلیم کے دوران مختلف مقامات پر دوبارہ دیکھا جاتا ہے۔ ہر بار جب تصور کا سامنا ہوتا ہے، تو اسے زیادہ گہرائی اور پیچیدگی میں تلاش کیا جاتا ہے، جو ترقی پسند طریقے سے پہلے کے علم پر استوار ہوتا ہے۔"
  },
  {
    "id": "60",
    "text": "Which one of the following in Edgar Dale's Cone of Experience is more abstract? (TSTET 22 May 2024)\nایڈگر ڈیل کے کون آف ایکسپیریئنس میں مندرجہ ذیل میں سے کون سا زیادہ تجریدی ہے؟",
    "options": [
      "Demonstrations\nمظاہرے",
      "Verbal Symbols\nزبانی علامات",
      "Dramatized experiences\nڈرامائی تجربات",
      "Direct purposeful experiences\nبراہ راست بامقصد تجربات"
    ],
    "correct": "Verbal Symbols",
    "explanation": "ایڈگر ڈیل کا کون آف ایکسپیریئنس ماڈل سیکھنے کے تجربات کو سب سے ٹھوس (نیچے) سے سب سے زیادہ تجریدی (اوپر) تک ترتیب دیتا ہے۔ سب سے زیادہ تجریدی سطح **زبانی علامات** (یعنی الفاظ کو پڑھنا یا سننا) پر مشتمل ہے، کیونکہ وہ ٹھوس، حقیقی دنیا کے تجربات سے سب سے زیادہ دور ہیں۔ براہ راست بامقصد تجربات سب سے زیادہ ٹھوس ہیں۔"
  },
  {
    "id": "61",
    "text": "Which of the following revolve around the Sun in highly elliptical orbits? (TSTET 21 May 2024)\nمندرجہ ذیل میں سے کون سورج کے گرد انتہائی بیضوی مداروں میں گھومتا ہے؟",
    "options": [
      "Comets\nدُمدار تارے",
      "Asteroids\nسیارچے",
      "Meteorites\nشہابیے",
      "Satellites\nسیٹلائٹس"
    ],
    "correct": "Comets",
    "explanation": "دُمدار تارے برف، دھول اور چٹان سے بنے آسمانی اجسام ہیں جو سورج کے گرد چکر لگاتے ہیں۔ ان کے مدار عام طور پر انتہائی بیضوی (لمبے دائرے) ہوتے ہیں، جس کی وجہ سے وہ بیرونی نظام شمسی سے سورج کے قریب اور پھر بہت دور کا سفر کرتے ہیں۔ سیارچوں کے مدار عام طور پر سیارچوں کی پٹی کے اندر زیادہ گول ہوتے ہیں۔ شہابیے وہ ٹکڑے ہیں جو زمین پر گرتے ہیں، اور سیٹلائٹس سیاروں کے گرد چکر لگاتے ہیں۔"
  },
  {
    "id": "62",
    "text": "The process of collecting rainwater is called as (TSTET 21 May 2024)\nبارش کا پانی جمع کرنے کے عمل کو کیا کہتے ہیں؟",
    "options": [
      "Rainwater replenishing\nبارش کے پانی کی بھرپائی",
      "Catching Rainwater\nبارش کا پانی پکڑنا",
      "Rainwater harvesting\nبارش کے پانی کی ذخیرہ اندوزی",
      "Rainwater recharging\nبارش کے پانی کا ریچارج"
    ],
    "correct": "Rainwater harvesting",
    "explanation": "بارش کے پانی کی ذخیرہ اندوزی (Rainwater harvesting) بارش کے پانی کو مستقبل میں استعمال کے لیے منظم طریقے سے جمع کرنے اور ذخیرہ کرنے کا مخصوص تکنیکی اصطلاح ہے، جو اسے بہہ جانے سے روکتی ہے۔ اگرچہ 'بارش کا پانی پکڑنا' وضاحتی ہے، لیکن 'ذخیرہ اندوزی' منظم عمل کے لیے صحیح اصطلاح ہے۔"
  },
  {
    "id": "63",
    "text": "The part of human ear that converts sound vibrations into electrical signals is (TSTET 21 May 2024)\nانسانی کان کا وہ حصہ جو آواز کی تھرتھراہٹ کو برقی سگنلز میں تبدیل کرتا ہے۔",
    "options": [
      "Pinna\nپنا",
      "Auditory canals\nسماعی نالیاں",
      "Eardrum\nکان کا پردہ",
      "Cochlea\nکوکلیا"
    ],
    "correct": "Cochlea",
    "explanation": "کوکلیا، اندرونی کان میں ایک سرپل شکل کی گہا، میں خصوصی بال کے خلیات ہوتے ہیں۔ یہ خلیات کان کے پردے سے منتقل ہونے والی آواز کی تھرتھراہٹ کی مکینیکل توانائی کو برقی اعصابی تحریکوں میں تبدیل کرتے ہیں جو پھر تشریح کے لیے دماغ کو بھیجی جاتی ہیں۔"
  },
  {
    "id": "64",
    "text": "A simple solar cell is made up of sandwiching (TSTET 21 May 2024)\nایک سادہ سولر سیل کس چیز کی سینڈوچنگ سے بنتا ہے؟",
    "options": [
      "Silicon boron layer and Silicon-arsenic layer\nسلیکان بوران کی تہہ اور سلیکان-آرسینک کی تہہ",
      "Silicon sodium layer and Silicon-carbon layer\nسلیکان سوڈیم کی تہہ اور سلیکان-کاربن کی تہہ",
      "Silicon gallium layer and Silicon-carbon layer\nسلیکان گیلیم کی تہہ اور سلیکان-کاربن کی تہہ",
      "Silicon magnesium layer and Silicon-sodium layer\nسلیکان میگنیشیم کی تہہ اور سلیکان-سوڈیم کی تہہ"
    ],
    "correct": "Silicon boron layer and Silicon-arsenic layer",
    "explanation": "ایک معیاری فوٹو وولٹک سیل ایک p-n جنکشن ہے۔ یہ ڈوپڈ سلیکان کی دو تہوں کو سینڈوچ کرکے بنایا جاتا ہے۔ سلیکان کو گروپ 15 کے عنصر جیسے آرسینک کے ساتھ ڈوپ کرنے سے n-قسم کا سلیکان (اضافی الیکٹران) بنتا ہے۔ گروپ 13 کے عنصر جیسے بوران کے ساتھ ڈوپ کرنے سے p-قسم کا سلیکان (الیکٹران 'سوراخ') بنتا ہے۔ ان دو تہوں کے درمیان جنکشن کرنٹ پیدا کرنے کے لیے ضروری برقی میدان بناتا ہے۔"
  },
  {
    "id": "65",
    "text": "Three resistors R₁=6 Ω, R₂=X Ω, R₃=6 Ω, are connected in parallel in a circuit. If the resultant resistance in the circuit is 2 Ω. Then find the value of X. (TSTET 21 May 2024)\nتین رزسٹرز R₁=6 Ω، R₂=X Ω، R₃=6 Ω، ایک سرکٹ میں متوازی طور پر جڑے ہوئے ہیں۔ اگر سرکٹ میں نتیجہ خیز مزاحمت 2 Ω ہے۔ تو X کی قدر معلوم کریں۔",
    "options": [
      "10 Ω",
      "12 Ω",
      "6 Ω",
      "14 Ω"
    ],
    "correct": "6 Ω",
    "explanation": "متوازی رزسٹرز کے لیے، مساوی مزاحمت ($R_{eq}$) کا معکوس انفرادی مزاحمتوں کے معکوس کا مجموعہ ہوتا ہے۔ فارمولا ہے $1/R_{eq} = 1/R₁ + 1/R₂ + 1/R₃$۔ دی گئی قدروں کو رکھنے پر: $1/2 = 1/6 + 1/X + 1/6$۔ یہ آسان ہو کر $1/2 = 2/6 + 1/X$، یا $1/2 = 1/3 + 1/X$ بن جاتا ہے۔ $1/X$ کے لیے حل کرنے پر $1/X = 1/2 - 1/3 = 1/6$ ملتا ہے۔ لہذا، $X = 6~Ω$۔"
  },
  {
    "id": "66",
    "text": "This furnace is generally used for roasting (TSTET 21 May 2024)\nیہ بھٹی عام طور پر بھوننے (روسٹنگ) کے لیے استعمال ہوتی ہے۔",
    "options": [
      "Blast furnace\nبلاسٹ فرنس",
      "Reverberatory furnace\nریوربریٹری فرنس",
      "Electric furnace\nالیکٹرک فرنس",
      "Retort furnace\nریٹارٹ فرنس"
    ],
    "correct": "Reverberatory furnace",
    "explanation": "ایک ریوربریٹری فرنس مواد کو ایندھن کے ساتھ براہ راست رابطے کے بغیر گرم کرنے کے لیے ڈیزائن کی گئی ہے۔ گرمی چھت سے مواد پر منعکس ہوتی ہے۔ یہ سیٹ اپ بھوننے (روسٹنگ) کے لیے مثالی ہے، جو ایک دھات کاری کا عمل ہے جس میں سلفائیڈ کچ دھات کو اضافی ہوا کی موجودگی میں گرم کرکے اس کے آکسائیڈ میں تبدیل کیا جاتا ہے۔"
  },
  {
    "id": "67",
    "text": "The father of Plastic industry (TSTET 21 May 2024)\nپلاسٹک انڈسٹری کا باپ کسے کہا جاتا ہے؟",
    "options": [
      "Alexander Parkes\nالیگزینڈر پارکس",
      "Hermann Staudinger\nہرمن اسٹاؤڈنگر",
      "Dr.Leo Hendrik Bakeland\nڈاکٹر لیو ہینڈرک بیکلینڈ",
      "John Dalton\nجان ڈالٹن"
    ],
    "correct": "Dr.Leo Hendrik Bakeland",
    "explanation": "ڈاکٹر لیو بیکلینڈ کو 1907 میں بیکلائٹ کی ایجاد کی وجہ سے وسیع پیمانے پر 'پلاسٹک انڈسٹری کا باپ' مانا جاتا ہے۔ بیکلائٹ پہلا مکمل طور پر مصنوعی پلاسٹک تھا جو تجارتی طور پر کامیاب ہوا، جس نے جدید پلاسٹک انڈسٹری کی راہ ہموار کی۔ ہرمن اسٹاؤڈنگر اپنے نظریاتی کام کی وجہ سے 'پولیمر کیمسٹری کے باپ' ہیں۔ بیکلائٹ فینول اور فارملڈیہائڈ کے پولیمرائزیشن سے بنتا ہے۔"
  },
  {
    "id": "68",
    "text": "The material used for making Vaseline (TSTET 21 May 2024)\nویسلین بنانے کے لیے کون سا مواد استعمال ہوتا ہے؟",
    "options": [
      "Paraffin wax\nپیرافین ویکس",
      "Coal\nکوئلہ",
      "Coke\nکوک",
      "Lubricating oil\nلبریکیٹنگ آئل"
    ],
    "correct": "Paraffin wax",
    "explanation": "ویسلین پیٹرولیم جیلی کا ایک برانڈ نام ہے، جو پیٹرولیم ریفائننگ سے حاصل ہونے والے ہائیڈرو کاربنز کا نیم ٹھوس مرکب ہے۔ پیرافین ویکس اس مرکب کا ایک اہم جزو ہے، جو اسے اس کی خصوصیت کی ساخت اور حفاظتی خصوصیات فراہم کرتا ہے۔"
  },
  {
    "id": "69",
    "text": "Calculate the amount of Aluminium required to get 224 g of Iron. (Atomic masses of Al=27 U, Fe=56 U and O=16 U) (TSTET 21 May 2024)\n224 گرام آئرن حاصل کرنے کے لیے درکار ایلومینیم کی مقدار کا حساب لگائیں۔ (ایٹمی ماس: Al=27 U, Fe=56 U, O=16 U)",
    "options": [
      "54 g",
      "27 g",
      "112 g",
      "108 g"
    ],
    "correct": "108 g",
    "explanation": "یہ تھرمائٹ ردعمل سے متعلق ہے: Fe₂O₃ + 2Al ⟶ Al₂O₃ + 2Fe۔ سٹوکیومیٹرک تناسب سے ظاہر ہوتا ہے کہ 2 مول Al سے 2 مول Fe پیدا ہوتے ہیں۔ Al کا مولر ماس 27 گرام/مول ہے اور Fe کا 56 گرام/مول ہے۔ اس طرح، $2 \\times 27$ گرام (54 گرام) Al سے $2 \\times 56$ گرام (112 گرام) Fe پیدا ہوتا ہے۔ 224 گرام Fe کے لیے درکار Al کی کمیت معلوم کرنے کے لیے، ہم ایک تناسب قائم کرتے ہیں: (Al کی کمیت) / (Fe کی کمیت) = $54 / 112$۔ لہذا، Al کی کمیت = $(54 / 112) \\times 224 = 108$ گرام۔"
  },
  {
    "id": "70",
    "text": "The element which has the highest number of isotopes among the following (TSTET 21 May 2024)\nمندرجہ ذیل میں سے کس عنصر کے آئسوٹوپس کی تعداد سب سے زیادہ ہے؟",
    "options": [
      "Sodium\nسوڈیم",
      "Cesium\nسیزیم",
      "Hydrogen\nہائیڈروجن",
      "Carbon\nکاربن"
    ],
    "correct": "Cesium",
    "explanation": "دیے گئے انتخاب میں سے، سیزیم (Cs) کے معلوم آئسوٹوپس کی تعداد سب سے زیادہ ہے، جس کے 40 آئسوٹوپس کی شناخت کی گئی ہے جو Cs-112 سے Cs-151 تک ہیں، اگرچہ صرف ایک (Cs-133) مستحکم ہے۔ درج دیگر عناصر کے معلوم آئسوٹوپس کی تعداد نمایاں طور پر کم ہے۔"
  },
  {
    "id": "71",
    "text": "The formula of Electronegativity as per Milliken (TSTET 21 May 2024)\nملیکن کے مطابق الیکٹرو نیگیٹیویٹی کا فارمولا کیا ہے؟",
    "options": [
      "Electronegativity = (Ionisation energy - Electron affinity) / 2\nالیکٹرو نیگیٹیویٹی = (آئنائزیشن توانائی - الیکٹران ایفینیٹی) / 2",
      "Electronegativity = (Ionisation energy + Electron affinity) / 2\nالیکٹرو نیگیٹیویٹی = (آئنائزیشن توانائی + الیکٹران ایفینیٹی) / 2",
      "Electronegativity = (Ionisation energy + Electron affinity) / (Ionisation energy - Electron affinity)\nالیکٹرو نیگیٹیویٹی = (آئنائزیشن توانائی + الیکٹران ایفینیٹی) / (آئنائزیشن توانائی - الیکٹران ایفینیٹی)",
      "Electronegativity = (Ionisation energy - Electron affinity) / (Ionisation energy + Electron affinity)\nالیکٹرو نیگیٹیویٹی = (آئنائزیشن توانائی - الیکٹران ایفینیٹی) / (آئنائزیشن توانائی + الیکٹران ایفینیٹی)"
    ],
    "correct": "Electronegativity = (Ionisation energy + Electron affinity) / 2",
    "explanation": "رابرٹ ایس ملیکن نے الیکٹرو نیگیٹیویٹی کو کسی ایٹم کی آئنائزیشن توانائی (IE) اور الیکٹران ایفینیٹی (EA) کے حسابی اوسط کے طور پر بیان کیا۔ اس کا فارمولا $\\chi = (IE + EA) / 2$ ہے، جو کسی ایٹم کے الیکٹران کو اپنی طرف متوجہ کرنے کے رجحان کو ان دو بنیادی، قابل پیمائش خصوصیات سے براہ راست جوڑتا ہے۔"
  },
  {
    "id": "72",
    "text": "No. of sigma(σ) and pi (π) bonds in N₂ (TSTET 21 May 2024)\nN₂ میں سگما (σ) اور پائی (π) بانڈز کی تعداد کتنی ہے؟",
    "options": [
      "3, 1",
      "2, 1",
      "1, 3",
      "1, 2"
    ],
    "correct": "1, 2",
    "explanation": "ڈائی ایٹامک نائٹروجن مالیکیول (N₂) دو نائٹروجن ایٹموں (N≡N) کے درمیان ٹرپل بانڈ سے بنتا ہے۔ کوئی بھی ملٹیپل بانڈ ایک سگما (σ) بانڈ اور باقی پائی (π) بانڈز پر مشتمل ہوتا ہے۔ لہذا، ایک ٹرپل بانڈ ایک σ بانڈ اور دو π بانڈز پر مشتمل ہوتا ہے۔"
  },
  {
    "id": "73",
    "text": "Read the following statements about Gregor Johann Mendel's experiment on inheritance after cross pollination of 2 pure breeds i.e.. one is yellow seed bearing pea plant and the other is green seed bearing peas plant... A) In F2 generation. 75% are yellow seed producing pea plants with yellow colour of seed being the dominant character B) Among 75% of yellow seed bearing pea plants of F2 generation, 50% plants produced homozygous/pure breed of yellow seeds and another 50% yellow seed bearing plants produced heterozygous pea plants. (TSTET 21 May 2024)\nگریگر جوہان مینڈل کے وراثت پر تجربے کے بارے میں مندرجہ ذیل بیانات پڑھیں جو 2 خالص نسلوں یعنی ایک پیلے بیج والے مٹر کے پودے اور دوسرے سبز بیج والے مٹر کے پودے کے درمیان کراس پولینیشن کے بعد کیا گیا... A) F2 نسل میں 75% پیلے بیج پیدا کرنے والے مٹر کے پودے ہیں جن میں بیج کا پیلا رنگ غالب کردار ہے۔ B) F2 نسل کے 75% پیلے بیج والے مٹر کے پودوں میں سے، 50% پودوں نے ہوموزائگس/خالص نسل کے پیلے بیج پیدا کیے اور باقی 50% پیلے بیج والے پودوں نے ہیٹروزائگس مٹر کے پودے پیدا کیے۔",
    "options": [
      "A & B both are correct\nA اور B دونوں درست ہیں۔",
      "A & B both are incorrect\nA اور B دونوں غلط ہیں۔",
      "A is correct B is incorrect\nA درست ہے B غلط ہے۔",
      "A is incorrect B is correct\nA غلط ہے B درست ہے۔"
    ],
    "correct": "A is correct B is incorrect",
    "explanation": "بیان A درست ہے۔ ایک مونوہائبرڈ کراس میں، F2 نسل 3:1 کا فینوٹائپک تناسب (غالب:مغلوب) ظاہر کرتی ہے۔ اس طرح، 75% پودے غالب پیلے بیج کی خصوصیت دکھائیں گے۔ بیان B غلط ہے۔ F2 جینوٹائپک تناسب 1 YY : 2 Yy : 1 yy ہے۔ پیلے پودوں (YY اور Yy) میں، ایک تہائی ہوموزائگس (YY) ہیں اور دو تہائی ہیٹروزائگس (Yy) ہیں، نہ کہ 50%-50% کی تقسیم۔"
  },
  {
    "id": "74",
    "text": "Sensation is a complex pathway. It involves (TSTET 21 May 2024)\nاحساس ایک پیچیدہ راستہ ہے۔ اس میں شامل ہیں۔",
    "options": [
      "Sense organs\nحسی اعضاء",
      "Sense organs and nerve impulses\nحسی اعضاء اور اعصابی تحریکیں",
      "Sense organs, nerve impulses and brain\nحسی اعضاء، اعصابی تحریکیں اور دماغ",
      "Brain and nerve impulses\nدماغ اور اعصابی تحریکیں"
    ],
    "correct": "Sense organs, nerve impulses and brain",
    "explanation": "احساس ایک مکمل عمل ہے۔ یہ ایک محرک سے شروع ہوتا ہے جسے ایک حسی عضو محسوس کرتا ہے، جو پھر محرک کو اعصابی تحریکوں میں تبدیل کرتا ہے۔ یہ تحریکیں دماغ تک جاتی ہیں، جہاں ان پر عملدرآمد ہوتا ہے اور انہیں احساس کے طور پر سمجھا جاتا ہے۔ تینوں اجزاء — حسی اعضاء، اعصابی تحریکیں، اور دماغ — اس راستے کو مکمل کرنے کے لیے ضروری ہیں۔"
  },
  {
    "id": "75",
    "text": "Abrupt appearance of vestigial organs in human beings is called (TSTET 21 May 2024)\nانسانوں میں ویسٹیجیئل اعضاء کا اچانک ظاہر ہونا کیا کہلاتا ہے؟",
    "options": [
      "Embryological evidence\nجنیناتی ثبوت",
      "Atavism\nایٹاوزم",
      "Lamarkism\nلامارکزم",
      "Existentialism\nوجودیت"
    ],
    "correct": "Atavism",
    "explanation": "ایٹاوزم ایک آبائی خصوصیت کا دوبارہ ظاہر ہونا ہے جو ارتقاء کے دوران ختم ہو گئی تھی۔ کسی ایسی خصوصیت کا اچانک ظاہر ہونا جو دور دراز کے آباؤ اجداد میں موجود تھی لیکن حالیہ آباؤ اجداد میں نہیں (مثلاً، دم کے ساتھ پیدا ہونے والا انسان) ایٹاوزم کی ایک کلاسک مثال ہے۔"
  },
  {
    "id": "76",
    "text": "Identify stem modification from the following (TSTET 21 May 2024)\nمندرجہ ذیل میں سے تنے کی ترمیم کی شناخت کریں۔",
    "options": [
      "Carrot\nگاجر",
      "Beetroot\nچقندر",
      "Raddish\nمولی",
      "Ginger\nادرک"
    ],
    "correct": "Ginger",
    "explanation": "ادرک ایک رائزوم ہے، جو ایک تبدیل شدہ زیر زمین تنا ہے جو افقی طور پر بڑھتا ہے۔ اسے نوڈس اور انٹرنوڈس کی موجودگی سے تنے کے طور پر پہچانا جا سکتا ہے۔ گاجر، چقندر، اور مولی سبھی خوراک ذخیرہ کرنے کے لیے مخصوص تبدیل شدہ ٹیپروٹس کی مثالیں ہیں۔"
  },
  {
    "id": 77,
    "text": "Seed germinate and plant roots grow in this horizon of soil (TSTET 21 May 2024)\nبیج اگتے ہیں اور پودوں کی جڑیں مٹی کے اس افق میں بڑھتی ہیں۔",
    "options": [
      "A Horizon\nA افق",
      "B Horizon\nB افق",
      "R Horizon\nR افق",
      "C Horizon\nC افق"
    ],
    "correct": "A Horizon",
    "explanation": "A افق، یا ٹاپ سوائل، مٹی کی سب سے اوپری تہہ ہے۔ یہ ہیومس اور معدنیات سے بھرپور ہوتی ہے، جو اسے سب سے زرخیز تہہ بناتی ہے۔ اس کی ترکیب بیج کے اگنے کے لیے مثالی ہے، اور یہ وہ جگہ ہے جہاں زیادہ تر پودوں کی جڑیں بڑھتی ہیں اور غذائی اجزاء اور پانی جذب کرتی ہیں۔"
  },
  {
    "id": 78,
    "text": "Colonies where Algae and Fungi live together in a symbiotic relationship are known as (TSTET 21 May 2024)\nوہ کالونیاں جہاں الجی اور فنجائی ایک ساتھ ایک علامتی تعلق میں رہتے ہیں، انہیں کیا کہا جاتا ہے؟",
    "options": [
      "Lichen\nلائیکن",
      "Coral reefs\nمرجانی چٹانیں",
      "Symbiotes\nسیمبیوٹس",
      "Mangroves\nمینگرووز"
    ],
    "correct": "Lichen",
    "explanation": "لائیکن ایک مرکب جاندار ہے جو الجی (یا سائانوبیکٹیریا) اور فنجائی کے درمیان علامتی تعلق سے بنتا ہے۔ فنگس ساخت اور نمی فراہم کرتی ہے، جبکہ الجی ضیائی تالیف کرتی ہے۔ 'سیمبیوٹس' ایک عام اصطلاح ہے، جو اس جوڑی کے لیے مخصوص نہیں ہے۔"
  },
  {
    "id": 79,
    "text": "When the composition of air or the state of balance in the environment is disturbed either by natural phenomena or by any human activity, then it is called (TSTET 21 May 2024)\nجب ہوا کی ترکیب یا ماحول میں توازن کی حالت قدرتی مظاہر یا کسی انسانی سرگرمی سے بگڑ جاتی ہے، تو اسے کیا کہتے ہیں؟",
    "options": [
      "eruption\nپھٹنا",
      "pollution\nآلودگی",
      "erosion\nکٹاؤ",
      "dilution\nتخفیف"
    ],
    "correct": "pollution",
    "explanation": "آلودگی کی تعریف قدرتی ماحول میں آلودگی پھیلانے والے مادوں کے تعارف کے طور پر کی جاتی ہے جو منفی تبدیلی کا سبب بنتے ہیں۔ نقصان دہ مادوں کے اضافے سے قدرتی توازن کا یہ بگاڑ تعریف پر بالکل پورا اترتا ہے۔"
  },
  {
    "id": 80,
    "text": "Which of the following is known as the cell's control room and is the largest and most distinct of all cell organelles? (TSTET 21 May 2024)\nمندرجہ ذیل میں سے کون سا سیل کا کنٹرول روم کہلاتا ہے اور تمام سیل آرگنیلز میں سب سے بڑا اور سب سے ممتاز ہے؟",
    "options": [
      "Cell membrane\nسیل جھلی",
      "Mitochondria\nمائٹوکونڈریا",
      "Nucleus\nنیوکلیس",
      "Cytoplasm\nسائٹوپلازم"
    ],
    "correct": "Nucleus",
    "explanation": "نیوکلیس میں سیل کا جینیاتی مواد (DNA) ہوتا ہے اور یہ سیل کی تمام سرگرمیوں کو کنٹرول کرتا ہے، جس کی وجہ سے اسے 'کنٹرول روم' کا نام دیا گیا ہے۔ یوکرائیوٹک خلیوں میں، یہ عام طور پر سب سے بڑا اور سب سے آسانی سے پہچانا جانے والا آرگنیل ہے۔"
  },
  {
    "id": 81,
    "text": "The muscles in our body are attached to the skin and bone by (TSTET 21 May 2024)\nہمارے جسم میں پٹھے جلد اور ہڈی سے کس کے ذریعے جڑے ہوتے ہیں؟",
    "options": [
      "Adipose tissue\nایڈیپوز ٹشو",
      "Cartilage\nکارٹلیج",
      "Ligament\nلگامنٹ",
      "Areolar tissue\nایریولر ٹشو"
    ],
    "correct": "Areolar tissue",
    "explanation": "ایریولر ٹشو ایک قسم کا ڈھیلا جوڑنے والا ٹشو ہے جو پورے جسم میں جوڑنے اور پیکنگ کے مواد کے طور پر کام کرتا ہے۔ یہ جلد کے نیچے پایا جاتا ہے، اسے نیچے کے پٹھوں سے جوڑتا ہے۔ یاد رہے کہ پٹھے ہڈیوں سے ٹینڈنز کے ذریعے جڑے ہوتے ہیں، اور ہڈیاں دوسری ہڈیوں سے لگامنٹس کے ذریعے جڑی ہوتی ہیں۔"
  },
  {
    "id": 82,
    "text": "The materials through which we can see objects, but not very clearly are said to be (TSTET 21 May 2024)\nوہ مواد جن کے ذریعے ہم اشیاء کو دیکھ سکتے ہیں، لیکن بہت واضح طور پر نہیں، انہیں کیا کہا جاتا ہے؟",
    "options": [
      "translucent\nنیم شفاف",
      "transparent\nشفاف",
      "opaque\nغیر شفاف",
      "optical\nبصری"
    ],
    "correct": "translucent",
    "explanation": "نیم شفاف مواد کچھ روشنی کو گزرنے دیتے ہیں لیکن اسے بکھیر دیتے ہیں، جس سے دوسری طرف کی اشیاء دھندلی نظر آتی ہیں۔ شفاف مواد واضح بصارت کی اجازت دیتے ہیں، اور غیر شفاف مواد تمام روشنی کو روک دیتے ہیں۔"
  },
  {
    "id": 83,
    "text": "Mrigals and common Carps; Catlas; Rohus Arrange these from top to bottom based on their feeding zones (TSTET 21 May 2024)\nمریگال اور کامن کارپ؛ کٹلا؛ روہو۔ ان کو ان کے کھانے کے علاقوں کی بنیاد پر اوپر سے نیچے تک ترتیب دیں۔",
    "options": [
      "Mrigals and Common Carp, Catlas, Rohus\nمریگال اور کامن کارپ، کٹلا، روہو",
      "Catlas, Rohus, Mrigals and Common Carps\nکٹلا، روہو، مریگال اور کامن کارپ",
      "Rohus, Mrigals and Common Carps, Catlas\nروہو، مریگال اور کامن کارپ، کٹلا",
      "Rohus, Catlas, Mrigals and Common Carps\nروہو، کٹلا، مریگال اور کامن کارپ"
    ],
    "correct": "Catlas, Rohus, Mrigals and Common Carps",
    "explanation": "مرکب مچھلی کی کاشت میں، مختلف مچھلیوں کی اقسام وسائل کے استعمال کو زیادہ سے زیادہ کرنے کے لیے مختلف کھانے کے علاقوں پر قابض ہوتی ہیں۔ کٹلا سطح پر کھانے والی مچھلیاں ہیں۔ روہو کالم (درمیانی) فیڈر ہیں۔ مریگال اور کامن کارپ نیچے کھانے والی مچھلیاں ہیں۔ لہذا، اوپر سے نیچے تک صحیح ترتیب کٹلا، روہو، پھر مریگال اور کامن کارپ ہے۔"
  },
  {
    "id": 84,
    "text": "Synapse, the functional regions of contact between two neurons are mainly found naturally: (TSTET 21 May 2024)\nسائنیپس، دو نیورانوں کے درمیان رابطے کے فعال علاقے، قدرتی طور پر بنیادی طور پر کہاں پائے جاتے ہیں؟",
    "options": [
      "in brain, in and around the spinal cord\nدماغ میں، اور ریڑھ کی ہڈی کے اندر اور ارد گرد",
      "in brain only\nصرف دماغ میں",
      "in spinal cord only\nصرف ریڑھ کی ہڈی میں",
      "around the spinal cord and near joints\nریڑھ کی ہڈی کے ارد گرد اور جوڑوں کے قریب"
    ],
    "correct": "in brain, in and around the spinal cord",
    "explanation": "سائنیپس اعصابی تحریک کی ترسیل کے لیے بنیادی جنکشن ہیں۔ دماغ اور ریڑھ کی ہڈی، جو مرکزی اعصابی نظام (CNS) کو تشکیل دیتے ہیں، نیوران کے گھنے نیٹ ورکس پر مشتمل ہوتے ہیں۔ نتیجتاً، سائنیپس پورے CNS میں بڑی تعداد میں پائے جاتے ہیں، جہاں معلومات کی پروسیسنگ ہوتی ہے۔"
  },
  {
    "id": 85,
    "text": "Which of the following is best suited for testing a hypothesis in science? (TSTET 21 May 2024)\nسائنس میں کسی مفروضے کی جانچ کے لیے مندرجہ ذیل میں سے کون سا بہترین موزوں ہے؟",
    "options": [
      "Observations\nمشاہدات",
      "Experimentation\nتجربہ کاری",
      "Group discussion\nگروہی بحث",
      "Problem-solving\nمسئلہ حل کرنا"
    ],
    "correct": "Experimentation",
    "explanation": "سائنسی طریقہ کار مفروضوں کی جانچ پر انحصار کرتا ہے۔ تجربہ کاری اس کے لیے بنیادی طریقہ ہے، کیونکہ اس میں ایک کنٹرول شدہ طریقہ کار شامل ہے جو متغیرات کو جوڑ توڑ کر اور نتائج کا مشاہدہ کرکے کسی مفروضے کی حمایت یا تردید کرنے کے لیے ڈیزائن کیا گیا ہے۔ جبکہ مشاہدہ ایک مفروضہ بنانے میں مدد کرتا ہے، تجربہ کاری اس کی جانچ کے لیے اہم ہے۔"
  },
  {
    "id": 86,
    "text": "Blue-printed textbooks are the example of (TSTET 21 May 2024)\nبلیو پرنٹ شدہ نصابی کتب کس کی مثال ہیں؟",
    "options": [
      "Physical resources\nطبعی وسائل",
      "Printed resources\nمطبوعہ وسائل",
      "Technical based resources\nتکنیکی بنیاد پر وسائل",
      "Natural resources\nقدرتی وسائل"
    ],
    "correct": "Technical based resources",
    "explanation": "تعلیم میں 'بلیو پرنٹ' ایک تکنیکی منصوبہ ہے جو نصاب یا تشخیص کے لیے ساخت، مواد کے وزن، اور سیکھنے کے مقاصد کی تفصیلات بیان کرتا ہے۔ اس بلیو پرنٹ کی بنیاد پر ڈیزائن کی گئی نصابی کتاب اس لیے ایک منظم، تکنیکی ڈیزائن کے عمل کی پیداوار ہے، جو اسے صرف ایک عام 'مطبوعہ وسیلہ' کے بجائے 'تکنیکی بنیاد پر وسیلہ' بناتی ہے۔"
  },
  {
    "id": 87,
    "text": "The learning experiences in Edgar Dale's cone of learning experiences, while moving from bottom to top increase in (TSTET 21 May 2024)\nایڈگر ڈیل کے سیکھنے کے تجربات کے کون میں، نیچے سے اوپر کی طرف بڑھتے ہوئے سیکھنے کے تجربات میں کیا اضافہ ہوتا ہے؟",
    "options": [
      "Abstractness\nتخیل",
      "Effectiveness\nمؤثریت",
      "Concreteness\nٹھوس پن",
      "Directness\nبراہ راست پن"
    ],
    "correct": "Abstractness",
    "explanation": "ایڈگر ڈیل کا کون آف ایکسپیرینس سیکھنے کی سرگرمیوں کو سب سے ٹھوس سے سب سے زیادہ تجریدی درجہ بندی میں ترتیب دیتا ہے۔ کون کی بنیاد براہ راست، بامقصد تجربات (ٹھوس) پر مشتمل ہے، جبکہ چوٹی زبانی اور بصری علامات (تجریدی) پر مشتمل ہے۔ لہذا، جیسے جیسے کوئی نیچے سے اوپر کی طرف بڑھتا ہے، تجریدیت کی سطح بڑھ جاتی ہے۔"
  },
  {
    "id": 88,
    "text": "Which phenomenon is responsible for the formation of a rainbow?\nقوس قزح کی تشکیل کے لیے کون سا رجحان ذمہ دار ہے؟",
    "options": [
      "Scattering and Reflection\nبکھراؤ اور انعکاس",
      "Diffraction and Interference\nانعطاف اور مداخلت",
      "Dispersion, Refraction, and Total Internal Reflection\nانتشار، انکسار، اور مکمل داخلی انعکاس",
      "Polarization and Refraction\nپولرائزیشن اور انکسار"
    ],
    "correct": "Dispersion, Refraction, and Total Internal Reflection",
    "explanation": "قوس قزح ایک بصری رجحان ہے جو پانی کی بوندوں (جیسے بارش یا دھند) کے ساتھ روشنی کے تعامل کی وجہ سے ہوتا ہے۔ اس میں تین اہم عمل شامل ہیں: روشنی پہلے پانی کی بوند میں داخل ہوتے وقت انکسار کرتی ہے، پھر یہ بوند کے پچھلے حصے میں مکمل داخلی انعکاس سے گزرتی ہے، اور آخر میں، یہ پانی کی بوند سے نکلتے وقت دوبارہ انکسار کرتی ہے۔ ابتدائی انکسار انتشار کا سبب بھی بنتا ہے، جو سفید روشنی کو اس کے جزوی رنگوں میں الگ کرتا ہے۔"
  },
  {
    "id": 89,
    "text": "An aqueous solution turns red litmus paper blue. This solution is likely to contain which of the following?\nایک آبی محلول سرخ لٹمس پیپر کو نیلا کر دیتا ہے۔ اس محلول میں ممکنہ طور پر مندرجہ ذیل میں سے کیا شامل ہے؟",
    "options": [
      "Hydrochloric acid (HCl)\nہائیڈروکلورک ایسڈ (HCl)",
      "Sodium chloride (NaCl)\nسوڈیم کلورائیڈ (NaCl)",
      "Ammonium hydroxide (NH₄OH)\nامونیم ہائیڈرو آکسائیڈ (NH₄OH)",
      "Vinegar (CH₃COOH)\nسرکہ (CH₃COOH)"
    ],
    "correct": "Ammonium hydroxide ($NH_4OH$)",
    "explanation": "لٹمس پیپر ایک تیزاب-اساس اشارے ہے۔ سرخ لٹمس پیپر ایک اساس کی موجودگی میں نیلا ہو جاتا ہے۔ امونیم ہائیڈرو آکسائیڈ ایک کمزور اساس ہے۔ ہائیڈروکلورک ایسڈ اور سرکہ تیزاب ہیں (نیلے لٹمس کو سرخ کر دیں گے)، اور سوڈیم کلورائیڈ ایک غیر جانبدار نمک ہے (کوئی تبدیلی نہیں کرے گا)۔"
  },
  {
    "id": 90,
    "text": "The process by which plants release water vapor from their leaves into the atmosphere is called:\nوہ عمل جس کے ذریعے پودے اپنے پتوں سے پانی کے بخارات فضا میں خارج کرتے ہیں، کیا کہلاتا ہے؟",
    "options": [
      "Respiration\nتنفس",
      "Guttation\nگٹیشن",
      "Photosynthesis\nضیائی تالیف",
      "Transpiration\nعمل تبخیر"
    ],
    "correct": "Transpiration",
    "explanation": "عمل تبخیر پودے کے ذریعے پانی کی حرکت اور اس کے ہوائی حصوں، جیسے پتے، تنے اور پھولوں سے بخارات بننے کا عمل ہے۔ پانی پودوں کے لیے ضروری ہے لیکن جڑوں کے ذریعے جذب کیے گئے پانی کی صرف تھوڑی سی مقدار نشوونما اور میٹابولزم کے لیے استعمال ہوتی ہے۔ باقی 97-99.5% عمل تبخیر کے ذریعے ضائع ہو جاتا ہے۔"
  },
  {
    "id": 91,
    "text": "Identify the planet among the following which has ring system around it. (TSTET 21 May 2024)\nمندرجہ ذیل میں سے اس سیارے کی شناخت کریں جس کے گرد حلقوں کا نظام ہے۔",
    "options": [
      "Jupiter\nمشتری",
      "Venus\nزہرہ",
      "Mars\nمریخ",
      "Earth\nزمین"
    ],
    "correct": "Jupiter",
    "explanation": "جبکہ زحل اپنے نمایاں حلقوں کے لیے سب سے زیادہ مشہور ہے، ہمارے نظام شمسی کے تمام چار گیس جنات (مشتری، زحل، یورینس، اور نیپچون) کے گرد حلقوں کے نظام ہیں۔ مشتری کے حلقے بہت مدھم ہیں اور زیادہ تر دھول پر مشتمل ہیں۔ زمینی سیاروں (زمین، زہرہ، مریخ) کے گرد حلقے نہیں ہیں۔"
  },
  {
    "id": "92",
    "text": "Nalla valley Vana Samrakshana Samithi is located in this district. (TSTET 21 May 2024)\nنلہ وادی وانا سم رکشا سمیتی اس ضلع میں واقع ہے۔",
    "options": [
      "Adilabad\nعادل آباد",
      "Khammam\nکھمم",
      "Medak\nمیدک",
      "Warangal\nوارنگل"
    ],
    "correct": "Medak",
    "explanation": "نلہ ولی وانا سم رکشا سمیتی (جنگلاتی تحفظ کمیٹی) ایک کمیونٹی پر مبنی جنگلاتی انتظام کا اقدام ہے جو تلنگانہ کے میدک ضلع میں واقع ہے۔"
  },
  {
    "id": "93",
    "text": "Irrespective of the distance from the object to a mirror, the image always appears erect. Then the mirror is likely to be... (TSTET 21 May 2024)\nآئینے سے چیز کے فاصلے سے قطع نظر، تصویر ہمیشہ سیدھی دکھائی دیتی ہے۔ تو آئینہ ممکنہ طور پر... ہو سکتا ہے۔",
    "options": [
      "Only plane mirror\nصرف ہموار آئینہ",
      "Only concave mirror\nصرف مقعر آئینہ",
      "Only convex mirror\nصرف محدب آئینہ",
      "Either plane mirror or convex mirror\nیا تو ہموار آئینہ یا محدب آئینہ"
    ],
    "correct": "Either plane mirror or convex mirror",
    "explanation": "ایک ہموار آئینہ ہمیشہ ایک مجازی اور سیدھی تصویر بناتا ہے۔ ایک محدب آئینہ بھی ہمیشہ ایک مجازی، سیدھی، اور چھوٹی تصویر بناتا ہے، چاہے چیز کی پوزیشن کچھ بھی ہو۔ تاہم، ایک مقعر آئینہ ایک الٹی (حقیقی) تصویر بنا سکتا ہے اگر چیز اس کے فوکل پوائنٹ سے آگے رکھی جائے۔ لہذا، ایک آئینہ جو *ہمیشہ* ایک سیدھی تصویر بناتا ہے وہ یا تو ہموار ہونا چاہیے یا محدب۔"
  },
  {
    "id": "94",
    "text": "The value of universal gravitational constant \"G\" first experimentally calculated by... (TSTET 21 May 2024)\nعالمگیر کشش ثقل کے مستقل \"G\" کی قدر سب سے پہلے تجرباتی طور پر کس نے شمار کی؟",
    "options": [
      "Newton\nنیوٹن",
      "Henry Cavendish\nہنری کیونڈش",
      "Dalton\nڈالٹن",
      "Aristotle\nارسطو"
    ],
    "correct": "Henry Cavendish",
    "explanation": "اگرچہ آئزک نیوٹن نے عالمگیر کشش ثقل کا قانون (F = G (m₁m₂/r²)) وضع کیا، لیکن اس نے تجرباتی طور پر 'G' کی قدر کا تعین نہیں کیا۔ 1798 میں، ہنری کیونڈش نے سیسہ کے گولوں کے درمیان کشش ثقل کی قوت کی پیمائش کے لیے ایک ٹورشن بیلنس کا استعمال کرتے ہوئے ایک مشہور تجربہ کیا، جس نے اسے کشش ثقل کے مستقل کے لیے ایک درست قدر کا حساب لگانے والا پہلا شخص بننے کی اجازت دی۔"
  },
  {
    "id": "95",
    "text": "The commercial unit of electric energy is... (TSTET 21 May 2024)\nبرقی توانائی کی تجارتی اکائی ہے...",
    "options": [
      "KW",
      "KWS",
      "KWh",
      "Joule-sec"
    ],
    "correct": "KWh",
    "explanation": "بجلی کی کھپت کی پیمائش کے لیے یوٹیلیٹی کمپنیوں کی طرف سے استعمال ہونے والی تجارتی اکائی کلو واٹ گھنٹہ (kWh) ہے۔ یہ ایک کلو واٹ (1000 واٹ) کے آلے کے ذریعے ایک گھنٹے تک چلنے والی توانائی کی نمائندگی کرتا ہے۔ KW (کلو واٹ) طاقت کی اکائی ہے، توانائی کی نہیں۔"
  },
  {
    "id": "96",
    "text": "Ores of which of the following metals occur in nature as sulphides? (TSTET 21 May 2024)\nمندرجہ ذیل میں سے کن دھاتوں کی کچ دھاتیں فطرت میں سلفائیڈ کے طور پر پائی جاتی ہیں؟",
    "options": [
      "Aluminium, Silver, Gold\nایلومینیم، چاندی، سونا",
      "Manganese, Calcium, Sodium\nمینگنیز، کیلشیم، سوڈیم",
      "Magnesium, Silver, Iron\nمیگنیشیم، چاندی، لوہا",
      "Zinc, Mercury, Lead\nزنک، پارا، سیسہ"
    ],
    "correct": "Zinc, Mercury, Lead",
    "explanation": "معتدل طور پر رد عمل والی اور کم رد عمل والی دھاتیں اکثر فطرت میں سلفائیڈ کچ دھاتوں کے طور پر پائی جاتی ہیں۔ اہم مثالوں میں زنک بلینڈ (ZnS) کے طور پر زنک، سینابر (HgS) کے طور پر پارا، اور گیلینا (PbS) کے طور پر سیسہ شامل ہیں۔ کیلشیم اور سوڈیم جیسی انتہائی رد عمل والی دھاتیں کلورائیڈ یا کاربونیٹ کے طور پر پائی جاتی ہیں، جبکہ ایلومینیم بنیادی طور پر ایک آکسائیڈ (باکسائٹ) کے طور پر پایا جاتا ہے۔"
  },
  {
    "id": "97",
    "text": "The synthetic fibre obtained from plant cellulose among the following is... (TSTET 21 May 2024)\nمندرجہ ذیل میں سے پودوں کے سیلولوز سے حاصل کردہ مصنوعی ریشہ ہے...",
    "options": [
      "Rayon\nریون",
      "Nylon\nنائلون",
      "Jute\nپٹ سن",
      "Acrylic\nایکریلک"
    ],
    "correct": "Rayon",
    "explanation": "ریون کو نیم مصنوعی ریشہ کے طور پر درجہ بندی کیا جاتا ہے کیونکہ یہ قدرتی خام مال، سیلولوز (عام طور پر لکڑی کے گودے سے) سے بنایا جاتا ہے، جو ایک کیمیائی عمل سے گزر کر ایک ریشہ میں دوبارہ پیدا ہوتا ہے۔ نائیلون اور ایکریلک مکمل طور پر مصنوعی ریشے ہیں جو پیٹرولیم سے حاصل کیے جاتے ہیں۔ پٹ سن ایک قدرتی ریشہ ہے۔"
  },
  {
    "id": "98",
    "text": "The standard used by the oil industry to measure the volume of Petroleum is \"X\" and one X is equal to \"Y\" litres. Then identify X and Y. (TSTET 21 May 2024)\nتیل کی صنعت کی طرف سے پیٹرولیم کے حجم کی پیمائش کے لیے استعمال ہونے والا معیار \"X\" ہے اور ایک X \"Y\" لیٹر کے برابر ہے۔ تو X اور Y کی شناخت کریں۔",
    "options": [
      "X = barrel; Y = 169\nX = بیرل؛ Y = 169",
      "X = gallon: Y = 159\nX = گیلن: Y = 159",
      "X = barrel; Y = 159\nX = بیرل؛ Y = 159",
      "X = gallon: Y = 169\nX = گیلن: Y = 169"
    ],
    "correct": "X = barrel; Y = 159",
    "explanation": "خام تیل اور پیٹرولیم مصنوعات کی پیمائش کے لیے بین الاقوامی معیاری اکائی بیرل ہے۔ ایک تیل بیرل کو 42 امریکی گیلن کے طور پر بیان کیا گیا ہے، جو تقریباً 159 لیٹر کے برابر ہے۔"
  },
  {
    "id": "99",
    "text": "Identify 'X' in the following chemical reaction: Na₂SO₄ + BaCl₂ ⟶ 'X' + NaCl. (TSTET 21 May 2024)\nمندرجہ ذیل کیمیائی تعامل میں 'X' کی شناخت کریں: Na₂SO₄ + BaCl₂ ⟶ 'X' + NaCl۔",
    "options": [
      "Barium chloride\nبیریم کلورائیڈ",
      "Barium sulphate\nبیریم سلفیٹ",
      "Sodium chloride\nسوڈیم کلورائیڈ",
      "Sodium sulphate\nسوڈیم سلفیٹ"
    ],
    "correct": "Barium sulphate",
    "explanation": "یہ تعامل ایک دوہرا ہٹاؤ کا تعامل ہے جہاں ری ایکٹنٹس کے کیٹائنز اور اینائنز اپنی جگہیں بدل لیتے ہیں۔ سوڈیم سلفیٹ (Na₂SO₄) بیریم کلورائیڈ (BaCl₂) کے ساتھ تعامل کرکے بیریم سلفیٹ (BaSO₄) اور سوڈیم کلورائیڈ (NaCl) بناتا ہے۔ بیریم سلفیٹ ایک ناقابل حل سفید ٹھوس ہے، لہذا یہ محلول سے باہر نکل جاتا ہے۔ متوازن مساوات یہ ہے: Na₂SO₄(aq) + BaCl₂(aq) ⟶ BaSO₄(s) + 2NaCl(aq)۔"
  },
  {
    "id": "100",
    "text": "The difference of neutrons in Deuterium and Tritium is... (TSTET 21 May 2024)\nڈیوٹیریم اور ٹریٹیم میں نیوٹران کا فرق ہے...",
    "options": [
      "4",
      "3",
      "2",
      "1"
    ],
    "correct": "1",
    "explanation": "ڈیوٹیریم (²₁H) اور ٹریٹیم (³₁H) ہائیڈروجن کے آئسوٹوپس ہیں۔ نیوٹران کی تعداد ماس نمبر (سپر اسکرپٹ) میں سے ایٹمی نمبر (سب اسکرپٹ) کو گھٹانے سے حاصل ہوتی ہے۔ ڈیوٹیریم کے لیے، نیوٹران = 2 - 1 = 1۔ ٹریٹیم کے لیے، نیوٹران = 3 - 1 = 2۔ نیوٹران کی تعداد میں فرق 2 - 1 = 1 ہے۔"
  },
  {
    "id": "101",
    "text": "The electronic configuration of an element Z is 2,8,2. Then it belongs to... (TSTET 21 May 2024)\nایک عنصر Z کی الیکٹرانک ترتیب 2,8,2 ہے۔ تو یہ تعلق رکھتا ہے...",
    "options": [
      "2nd Period\nدوسرا پیریڈ",
      "2nd Group\nدوسرا گروپ",
      "3rd Group\nتیسرا گروپ",
      "6th Period\nچھٹا پیریڈ"
    ],
    "correct": "2nd Group",
    "explanation": "الیکٹرانک ترتیب 2، 8، 2 کا مطلب ہے کہ عنصر میں 3 الیکٹران شیل ہیں، لہذا یہ تیسرے پیریڈ سے تعلق رکھتا ہے۔ بیرونی ترین شیل میں الیکٹران کی تعداد (ویلنس الیکٹران) گروپ کا تعین کرتی ہے۔ چونکہ 2 ویلنس الیکٹران ہیں، عنصر دوسرے گروپ سے تعلق رکھتا ہے۔ یہ عنصر میگنیشیم (Mg) ہے۔"
  },
  {
    "id": "102",
    "text": "An element X forms a fluoride XF₃. Then the valency of X is... (TSTET 21 May 2024)\nایک عنصر X ایک فلورائیڈ XF₃ بناتا ہے۔ تو X کی ویلنسی ہے...",
    "options": [
      "1",
      "2",
      "4",
      "3"
    ],
    "correct": "3",
    "explanation": "فلورین (F) کی ایک مقررہ ویلنسی 1 ہے۔ مرکب XF₃ میں، تین فلورین ایٹم ہیں، جو کل منفی ویلنسی 3 x (-1) = -3 کا حصہ ڈالتے ہیں۔ ایک مستحکم غیر جانبدار مرکب بنانے کے لیے، عنصر X کو اس چارج کو متوازن کرنے کے لیے ایک مثبت ویلنسی ہونی چاہیے۔ لہذا، X کی ویلنسی +3 ہے۔"
  },
  {
    "id": "103",
    "text": "Read the following statements:\nA) Nature itself chooses or decides which organism should survive or perish in nature. This is the meaning of 'survival of the fittest'.\nB) In an organism, traits that are not useful to it will perish and the traits that are useful will be passed on to the next generations.\nChoose the correct option. (TSTET 21 May 2024)\nمندرجہ ذیل بیانات پڑھیں:\nA) فطرت خود انتخاب کرتی ہے یا فیصلہ کرتی ہے کہ کون سا جاندار فطرت میں زندہ رہے گا یا ختم ہو جائے گا۔ یہ 'موزوں ترین کی بقا' کا مطلب ہے۔\nB) ایک جاندار میں، وہ خصلتیں جو اس کے لیے مفید نہیں ہیں ختم ہو جائیں گی اور جو خصلتیں مفید ہیں وہ اگلی نسلوں کو منتقل ہو جائیں گی۔\nصحیح آپشن کا انتخاب کریں۔",
    "options": [
      "'A' is correct but 'B' does not explain 'A' exactly.\n'A' درست ہے لیکن 'B' 'A' کی صحیح وضاحت نہیں کرتا۔",
      "'A' & 'B' both are correct but are unrelated to one another.\n'A' اور 'B' دونوں درست ہیں لیکن ایک دوسرے سے غیر متعلق ہیں۔",
      "'A' & 'B' both are correct and 'B' explains 'A' exactly.\n'A' اور 'B' دونوں درست ہیں اور 'B' 'A' کی صحیح وضاحت کرتا ہے۔",
      "'A' is correct and 'B' is incorrect\n'A' درست ہے اور 'B' غلط ہے"
    ],
    "correct": "'A' & 'B' both are correct and 'B' explains 'A' exactly.",
    "explanation": "بیان A قدرتی انتخاب کے نتیجے کو صحیح طور پر بیان کرتا ہے، جسے اکثر 'موزوں ترین کی بقا' کے جملے سے خلاصہ کیا جاتا ہے۔ بیان B میکانزم کی وضاحت کرتا ہے: فائدہ مند خصلتوں والے جانداروں کے زندہ رہنے اور ان خصلتوں کو اپنی اولاد میں منتقل کرنے کا زیادہ امکان ہوتا ہے۔ یہ امتیازی بقا اور تولید وہ عمل ہے جو ارتقاء کو چلاتا ہے۔ لہذا، دونوں بیانات درست ہیں، اور B بیان A میں بیان کردہ عمل کی وضاحت کرتا ہے۔"
  },
  {
    "id": "104",
    "text": "The process of destructing of disease causing micro-organisms in milk is called... (TSTET 21 May 2024)\nدودھ میں بیماری پیدا کرنے والے सूक्ष्म जीवों کو नष्ट کرنے کا عمل کہلاتا ہے...",
    "options": [
      "white revolution\nسفید انقلاب",
      "pasteurization\nپاسچرائزیشن",
      "animal husbandry\nجانوروں کی افزائش",
      "adulteration of milk\nدودھ میں ملاوٹ"
    ],
    "correct": "pasteurization",
    "explanation": "پاسچرائزیشن لوئس پاسچر کی ایجاد کردہ ایک عمل ہے جس میں ایک مائع (جیسے دودھ) کو ایک مخصوص درجہ حرارت پر ایک مقررہ مدت کے لیے گرم کیا جاتا ہے اور پھر اسے تیزی سے ٹھنڈا کیا جاتا ہے۔ یہ عمل نقصان دہ، بیماری پیدا کرنے والے جرثوموں کو مارتا یا غیر فعال کرتا ہے، جس سے مصنوعات کو استعمال کے لیے محفوظ بنایا جاتا ہے اور اس کی شیلف لائف کو بہتر بنایا جاتا ہے۔"
  },
  {
    "id": "105",
    "text": "We know that frog is an amphibian. When it goes deep into water it uses its special organs to breathe. These are called... (TSTET 21 May 2024)\nہم جانتے ہیں کہ مینڈک ایک ایمفیبین ہے۔ جب یہ پانی کی گہرائی میں جاتا ہے تو یہ سانس لینے کے لیے اپنے خاص اعضاء کا استعمال کرتا ہے۔ انہیں کہا جاتا ہے...",
    "options": [
      "Spiracles\nاسپائریکلز",
      "Skin\nجلد",
      "Gills\nگلپھڑے",
      "Lungs\nپھیپھڑے"
    ],
    "correct": "Skin",
    "explanation": "بالغ مینڈکوں کے پاس سانس لینے کے تین طریقے ہیں: اپنے پھیپھڑوں کے ذریعے (پلمونری تنفس)، اپنے منہ کی استر کے ذریعے (بکل تنفس)، اور اپنی جلد کے ذریعے (کیوٹینیئس تنفس)۔ جب پانی کے اندر ہوتے ہیں، تو وہ کیوٹینیئس تنفس پر انحصار کرتے ہیں، جہاں پانی سے آکسیجن براہ راست ان کی نم، پارگمی جلد کے پار کیپلیروں کے ایک نیٹ ورک میں پھیل جاتی ہے۔"
  },
  {
    "id": "106",
    "text": "These were well acquainted with bee keeping 4000 yrs. ago. (TSTET 21 May 2024)\nیہ 4000 سال پہلے شہد کی مکھیوں کی پالنا سے اچھی طرح واقف تھے۔",
    "options": [
      "Russians\nروسی",
      "Indians\nہندوستانی",
      "Italians\nاطالوی",
      "Greeks\nیونانی"
    ],
    "correct": "Greeks",
    "explanation": "شہد کی مکھیوں کی پالنا (ایپیکلچر) ایک قدیم عمل ہے۔ تاریخی ریکارڈ اور آثار قدیمہ کے شواہد سے پتہ چلتا ہے کہ مصریوں اور یونانیوں سمیت قدیم تہذیبیں ہزاروں سال پہلے شہد اور موم کے لیے شہد کی مکھیاں پال رہی تھیں۔ یونانی فلسفی ارسطو نے شہد کی مکھیوں کی حیاتیات کے بارے میں بڑے پیمانے پر لکھا۔"
  },
  {
    "id": "107",
    "text": "The special defensive cells present in the outer layer of the body of coelenterates like corals are... (TSTET 21 May 2024)\nمرجان جیسے coelenterates کے جسم کی بیرونی تہہ میں موجود خاص دفاعی خلیے ہیں...",
    "options": [
      "Mesoglea\nمیسوگلیا",
      "Cnidoblasts\nنائڈوبلاسٹس",
      "Interstitial cells\nانٹرسٹیشل خلیے",
      "Germ cells\nجراثیمی خلیے"
    ],
    "correct": "Cnidoblasts",
    "explanation": "فائلم Coelenterata (جسے Cnidaria بھی کہا جاتا ہے) کی امتیازی خصوصیت خاص ڈنک مارنے والے خلیوں کی موجودگی ہے جنہیں نائڈوبلاسٹس (یا نائڈوسائٹس) کہا جاتا ہے۔ ان خلیوں میں ایک آرگنیل ہوتا ہے جسے نیماٹوسسٹ کہتے ہیں، جسے شکار کو پکڑنے اور دفاع کے لیے زہر داخل کرنے کے لیے خارج کیا جا سکتا ہے۔"
  },
  {
    "id": "108",
    "text": "In blood clotting process after an injury, thrombokinase acts on pro-thrombin and converts it into... (TSTET 21 May 2024)\nچوٹ لگنے کے بعد خون کے جمنے کے عمل میں، تھرومبوکائنیز پرو-تھرومبن پر عمل کرتا ہے اور اسے ... میں تبدیل کرتا ہے۔",
    "options": [
      "Thrombin\nتھرومبن",
      "Fibrin\nفائبرن",
      "Fibrinogen\nفائبرینوجن",
      "Serum\nسیرم"
    ],
    "correct": "Thrombin",
    "explanation": "خون کے جمنے کے سلسلے میں، انزائم تھرومبوکائنیز (جسے فیکٹر Xa یا تھرومبوپلاسٹن بھی کہا جاتا ہے) چوٹ کی جگہ پر بنتا ہے۔ یہ انزائم پرو-تھرومبن نامی ایک غیر فعال پلازما پروٹین پر عمل کرتا ہے اور اسے اس کی فعال شکل، تھرومبن میں تبدیل کرتا ہے۔ پھر تھرومبن فائبرینوجن کو فائبرن میں تبدیل کرکے کلاٹ کا جال بناتا ہے۔"
  },
  {
    "id": "109",
    "text": "The biggest meltdown of Nuclear power reactor in the world occurred in... (TSTET 21 May 2024)\nدنیا میں نیوکلیئر پاور ری ایکٹر کا سب سے بڑا پگھلاؤ ... میں ہوا تھا۔",
    "options": [
      "Loir-et-Cher, France in 1980\nلوئر-ایٹ-شیر، فرانس 1980 میں",
      "Fukushima, Japan in 1975\nفوکوشیما، جاپان 1975 میں",
      "Chernobyl, Soviet Union in 1986\nچرنوبل، سوویت یونین 1986 میں",
      "Cirus BARC in the outskirts of Bombay in 1961\nسائرس بارک بمبئی کے مضافات میں 1961 میں"
    ],
    "correct": "Chernobyl, Soviet Union in 1986",
    "explanation": "چرنوبل کی تباہی، جو 26 اپریل 1986 کو سوویت یونین کے پریپیات کے قریب چرنوبل نیوکلیئر پاور پلانٹ کے نمبر 4 ری ایکٹر میں ہوئی، بڑے پیمانے پر تاریخ کا سب سے شدید نیوکلیئر پاور پلانٹ حادثہ سمجھا جاتا ہے۔ اس کے نتیجے میں ری ایکٹر کور مکمل طور پر پگھل گیا اور فضا میں بڑی مقدار میں تابکاری خارج ہوئی۔"
  },
  {
    "id": "110",
    "text": "Water released from dams and projects during floods is measured in... (TSTET 21 May 2024)\nسیلاب کے دوران ڈیموں اور منصوبوں سے خارج ہونے والے پانی کی پیمائش ... میں کی جاتی ہے۔",
    "options": [
      "Barrels\nبیرل",
      "Cusecs\nکیوسک",
      "Gallons\nگیلن",
      "Tonnes\nٹن"
    ],
    "correct": "Cusecs",
    "explanation": "پانی کے بہاؤ کی شرح، خاص طور پر دریاؤں میں یا ڈیم کے آؤٹ لیٹس سے، 'کیوسک' میں ماپی جاتی ہے۔ یہ اکائی 'کیوبک فٹ فی سیکنڈ' کے لیے ہے اور فی یونٹ وقت میں ایک نقطہ سے گزرنے والے پانی کے حجم کی نمائندگی کرتی ہے۔ میٹرک مساوی 'کیومیکس' (کیوبک میٹر فی سیکنڈ) ہے۔"
  },
  {
    "id": "111",
    "text": "Plants use only 1% of water they absorb from soil to form carbohydrate. The remaining 99% is released into the atmosphere through... (TSTET 21 May 2024)\nپودے مٹی سے جذب کیے گئے پانی کا صرف 1% کاربوہائیڈریٹ بنانے کے لیے استعمال کرتے ہیں۔ باقی 99% فضا میں ... کے ذریعے خارج ہوتا ہے۔",
    "options": [
      "respiration\nتنفس",
      "perspiration\nپسینہ",
      "circulation\nگردش",
      "transpiration\nعمل تبخیر"
    ],
    "correct": "transpiration",
    "explanation": "عمل تبخیر پودے کے ذریعے پانی کی حرکت اور اس کے ہوائی حصوں، جیسے پتے، تنے اور پھولوں سے بخارات بننے کا عمل ہے۔ جبکہ جڑوں سے جذب کیے گئے پانی کا ایک بہت چھوٹا حصہ فوٹو سنتھیسس اور نشوونما کے لیے استعمال ہوتا ہے، زیادہ تر حصہ (اکثر 97-99% سے زیادہ) عمل تبخیر کے ذریعے فضا میں ضائع ہو جاتا ہے۔"
  },
  {
    "id": "112",
    "text": "Identify from the following laws that was not propounded by Mendel in his laws of inheritance. (TSTET 21 May 2024)\nمندرجہ ذیل قوانین میں سے اس قانون کی شناخت کریں جو مینڈل نے اپنے وراثت کے قوانین میں پیش نہیں کیا تھا۔",
    "options": [
      "Inheritance of acquired characters\nحاصل کردہ کرداروں کی وراثت",
      "Segregation\nعلیحدگی",
      "Dominance\nغلبہ",
      "Independent assortment\nآزادانہ ترتیب"
    ],
    "correct": "Inheritance of acquired characters",
    "explanation": "گریگور مینڈل کے کام نے وراثت کے تین اہم قوانین قائم کیے: غلبہ کا قانون، علیحدگی کا قانون، اور آزادانہ ترتیب کا قانون۔ 'حاصل کردہ کرداروں کی وراثت' کا تصور جین-بپٹسٹ لامارک کی طرف سے پیش کردہ ارتقائی نظریہ میں ایک مرکزی خیال تھا، مینڈل کا نہیں۔"
  },
  {
    "id": "113",
    "text": "Identify the correct sequence of steps in scientific methods in finding solutions to problems. (TSTET 21 May 2024)\nمسائل کے حل تلاش کرنے میں سائنسی طریقوں کے مراحل کی صحیح ترتیب کی شناخت کریں۔",
    "options": [
      "Form a hypothesis, Plan an experiment, Conduct the experiment, Observe and ask a question, Draw conclusions and communicate results\nایک مفروضہ بنائیں، ایک تجربہ کی منصوبہ بندی کریں، تجربہ کریں، مشاہدہ کریں اور سوال پوچھیں، نتائج اخذ کریں اور نتائج سے آگاہ کریں",
      "Observe and ask a question, plan an experiment, Form a hypothesis, Conduct the experiment, Draw conclusions and communicate results\nمشاہدہ کریں اور سوال پوچھیں، ایک تجربہ کی منصوبہ بندی کریں، ایک مفروضہ بنائیں، تجربہ کریں، نتائج اخذ کریں اور نتائج سے آگاہ کریں",
      "Plan an experiment, Conduct the experiment, Observe and ask a question, Form a hypothesis, Draw conclusions and communicate results\nایک تجربہ کی منصوبہ بندی کریں، تجربہ کریں، مشاہدہ کریں اور سوال پوچھیں، ایک مفروضہ بنائیں، نتائج اخذ کریں اور نتائج سے آگاہ کریں",
      "Plan an experiment, Observe and ask a question, Conduct the experiment, Form a hypothesis, Draw conclusions and communicate results\nایک تجربہ کی منصوبہ بندی کریں، مشاہدہ کریں اور سوال پوچھیں، تجربہ کریں، ایک مفروضہ بنائیں، نتائج اخذ کریں اور نتائج سے آگاہ کریں"
    ],
    "correct": "Observe and ask a question, plan an experiment, Form a hypothesis, Conduct the experiment, Draw conclusions and communicate results",
    "explanation": "سائنسی طریقہ کار تحقیق کے لیے ایک منظم عمل ہے۔ عام ترتیب یہ ہے: 1. ایک مشاہدہ کریں اور اس کے بارے میں ایک سوال پوچھیں۔ 2. ایک قابلِ آزمائش وضاحت یا مفروضہ وضع کریں۔ 3. مفروضے کو جانچنے کے لیے ایک تجربہ ڈیزائن اور منعقد کریں۔ 4. نتائج کا تجزیہ کریں اور ایک نتیجہ اخذ کریں۔ 5. نتائج سے آگاہ کریں۔ جبکہ منتخب کردہ جواب 'ایک تجربہ کی منصوبہ بندی کریں' کو 'ایک مفروضہ بنائیں' سے پہلے رکھتا ہے، یہ دیے گئے اختیارات میں سب سے زیادہ منطقی ترتیب ہے، جو مشاہدے سے صحیح طور پر شروع ہوتی ہے اور نتائج پر ختم ہوتی ہے۔"
  },
  {
    "id": "114",
    "text": "The body's only nerve cells that come in direct contact with the outside environment are in the... (TSTET 21 May 2024)\nجسم کے واحد اعصابی خلیے جو بیرونی ماحول سے براہ راست رابطے میں آتے ہیں ... میں ہیں۔",
    "options": [
      "eyes\nآنکھیں",
      "inner ear\nاندرونی کان",
      "tongue\nزبان",
      "nose\nناک"
    ],
    "correct": "nose",
    "explanation": "اولفیکٹری ریسیپٹر نیوران، جو سونگھنے کی حس کے ذمہ دار ہیں، ناک کی گہا کے اندر اولفیکٹری اپیتھیلیم میں واقع ہیں۔ یہ انسانی جسم کے واحد نیوران ہیں جو براہ راست بیرونی ماحول کے سامنے آتے ہیں، جس سے وہ اس ہوا میں بدبو کے مالیکیولز کا پتہ لگا سکتے ہیں جس میں ہم سانس لیتے ہیں۔"
  },
  {
    "id": "115",
    "text": "Students will be able to classify elements based on atomic numbers and electron configuration. Which academic standard is this? (TSTET 21 May 2024)\nطلباء ایٹمی نمبروں اور الیکٹران کی ترتیب کی بنیاد پر عناصر کی درجہ بندی کر سکیں گے۔ یہ کون سا تعلیمی معیار ہے؟",
    "options": [
      "Conceptual understanding\nتصوراتی تفہیم",
      "Experimentation and field investigation\nتجربہ اور میدانی تحقیقات",
      "Application to daily life\nروزمرہ کی زندگی پر اطلاق",
      "Asking questions and making hypotheses\nسوالات پوچھنا اور مفروضے بنانا"
    ],
    "correct": "Conceptual understanding",
    "explanation": "یہ سیکھنے کا مقصد 'تصوراتی تفہیم' کے تحت آتا ہے۔ اس کے لیے طلباء کو ایٹمی ساخت، دوری قانون، اور ان اصولوں کو سمجھنے کی ضرورت ہوتی ہے جو دوری جدول کی ترتیب کو کنٹرول کرتے ہیں۔ عناصر کی درجہ بندی ان بنیادی تصورات کا براہ راست اطلاق ہے بجائے اس کے کہ یہ محض یادداشت یا جسمانی تجربہ ہو۔"
  },
  {
    "id": "116",
    "text": "In a collaborative learning approach, make sure that the students in the group are... (TSTET 21 May 2024)\nایک باہمی تعاون پر مبنی سیکھنے کے نقطہ نظر میں، اس بات کو یقینی بنائیں کہ گروپ میں طلباء ... ہوں۔",
    "options": [
      "Homogeneous\nیکساں",
      "Heterogeneous\nمتنوع",
      "Similar\nملتے جلتے",
      "Uniform\nیکساں"
    ],
    "correct": "Heterogeneous",
    "explanation": "مؤثر باہمی تعاون پر مبنی سیکھنے کا انحصار اکثر متنوع گروپ بندی پر ہوتا ہے۔ اس کا مطلب ہے کہ مختلف قابلیت کی سطحوں، مہارتوں، پس منظر، اور نقطہ نظر والے طلباء کے مرکب کے ساتھ گروپ بنانا۔ یہ تنوع طلباء کو ایک دوسرے کی طاقتوں سے سیکھنے، کمزوری کے شعبوں کی حمایت کرنے، اور زیادہ بھرپور مسئلہ حل کرنے اور بحث میں مشغول ہونے کی اجازت دیتا ہے۔"
  },
  {
    "id": "117",
    "text": "To assess students' process skills, we use... (TSTET 21 May 2024)\nطلباء کی عمل کی مہارتوں کا جائزہ لینے کے لیے، ہم ... کا استعمال کرتے ہیں۔",
    "options": [
      "Grading\nدرجہ بندی",
      "Vogel's evaluation scale\nووگل کا تشخیصی پیمانہ",
      "Bulletin or score board\nبلیٹن یا اسکور بورڈ",
      "Rubrics\nروبرکس"
    ],
    "correct": "Rubrics",
    "explanation": "روبرکس عمل کی مہارتوں (جیسے تجربہ، تنقیدی سوچ، یا تعاون) کا جائزہ لینے کے لیے ایک مؤثر ذریعہ ہیں۔ ایک روبرک کارکردگی کے لیے مخصوص معیار کا خاکہ پیش کرتا ہے اور ہر معیار کے لیے معیار کی مختلف سطحوں کو بیان کرتا ہے۔ یہ ایک استاد کو نہ صرف کسی کام کے حتمی نتیجے کا جائزہ لینے کی اجازت دیتا ہے، بلکہ اس عمل کا بھی جائزہ لیتا ہے جس پر طالب علم نے اسے حاصل کرنے کے لیے عمل کیا۔"
  },
  {
    "id": "118",
    "text": "The learning objective 'Students will be able to construct a model of a DNA molecule and explain its double helix structure.' is an example of which academic standard?\nسیکھنے کا مقصد 'طلباء ڈی این اے مالیکیول کا ایک ماڈل بنانے اور اس کی ڈبل ہیلکس ساخت کی وضاحت کرنے کے قابل ہوں گے' کس تعلیمی معیار کی مثال ہے؟",
    "options": [
      "Conceptual understanding\nتصوراتی تفہیم",
      "Application to daily life\nروزمرہ کی زندگی پر اطلاق",
      "Experimentation and field investigation\nتجربہ اور میدانی تحقیقات",
      "Appreciation and aesthetic sense\nقدردانی اور جمالیاتی حس"
    ],
    "correct": "Conceptual understanding",
    "explanation": "اس کام کے لیے طلباء کو ایک بنیادی حیاتیاتی تصور، ڈی این اے کی ساخت، کو سمجھنے اور اس کی نمائندگی کرنے کی ضرورت ہے۔ ایک ماڈل بنانا اور اس کے اجزاء کی وضاحت کرنا بنیادی نظریہ کی گہری گرفت کا مظاہرہ کرتا ہے، جو 'تصوراتی تفہیم' کا جوہر ہے۔"
  },
  {
    "id": "119",
    "text": "For a successful collaborative activity, it's best to form groups that include a variety of students with different academic strengths, learning styles, and backgrounds. This practice is known as forming... \nایک کامیاب باہمی سرگرمی کے لیے، ایسے گروپس بنانا بہترین ہے جن میں مختلف تعلیمی طاقتوں، سیکھنے کے انداز، اور پس منظر کے مختلف طلباء شامل ہوں۔ اس عمل کو ... کی تشکیل کہا جاتا ہے۔",
    "options": [
      "Homogeneous groups\nیکساں گروپس",
      "Uniform groups\nیکساں گروپس",
      "Static groups\nجامد گروپس",
      "Heterogeneous groups\nمتنوع گروپس"
    ],
    "correct": "Heterogeneous groups",
    "explanation": "متنوع گروپ بندی میں مختلف خصوصیات، جیسے مختلف تعلیمی قابلیت یا مہارتوں والے طلباء کو ملانا شامل ہے۔ یہ نقطہ نظر ہم مرتبہ سے ہم مرتبہ تدریس، متنوع نقطہ نظر، اور تمام گروپ ممبران کے لیے ایک زیادہ جامع سیکھنے کا تجربہ فروغ دیتا ہے۔"
  },
  {
    "id": "120",
    "text": "When assessing a student's ability to critically analyze a historical document, a teacher might use a tool that breaks down the assessment into specific criteria such as 'identifying the author's bias,' 'corroborating sources,' and 'evaluating the historical context.' This type of assessment tool is called a...\nکسی طالب علم کی تاریخی دستاویز کا تنقیدی تجزیہ کرنے کی صلاحیت کا جائزہ لیتے وقت، ایک استاد ایک ایسا آلہ استعمال کر سکتا ہے جو جائزے کو مخصوص معیارات میں تقسیم کرتا ہے جیسے 'مصنف کے تعصب کی نشاندہی کرنا،' 'ذرائع کی تصدیق کرنا،' اور 'تاریخی تناظر کا جائزہ لینا۔' اس قسم کے تشخیصی آلے کو ... کہا جاتا ہے۔",
    "options": [
      "Checklist\nچیک لسٹ",
      "Rating scale\nدرجہ بندی کا پیمانہ",
      "Rubric\nروبرک",
      "Scoreboard\nاسکور بورڈ"
    ],
    "correct": "Rubric",
    "explanation": "ایک روبرک ایک جامع اسکورنگ گائیڈ ہے جو کسی مخصوص کام کے لیے معیارات کی تفصیلی تفصیل فراہم کرتا ہے۔ یہ ہر معیار کے لیے کارکردگی کی مختلف سطحوں کی وضاحت کرکے پیچیدہ مہارتوں یا عمل کا منظم طریقے سے جائزہ لینے میں مدد کرتا ہے، جیسے 'بہترین،' 'اچھا،' یا 'بہتری کی ضرورت ہے'۔"
  },
  {
    "id": "121",
    "text": "Halley's comet will be visible again in the year (TSTET 20 May 2024)\nہیلی کا دمدار ستارہ دوبارہ کس سال نظر آئے گا؟",
    "options": [
      "2026",
      "2052",
      "2062",
      "2076"
    ],
    "correct": "2062",
    "explanation": "ہیلی کا دمدار ستارہ ایک مشہور مختصر مدت کا دمدار ستارہ ہے جو تقریباً ہر 75-76 سال بعد سورج کے گرد چکر لگاتا ہے۔ اس کا آخری بار اندرونی نظام شمسی میں ظہور 1986 میں ہوا تھا۔ اس تاریخ میں اوسط مداری مدت (1986 + 76 سال) جمع کرنے سے اس کے اگلے متوقع ظہور کا سال 2062 حاصل ہوتا ہے۔"
  },
  {
    "id": "122",
    "text": "Unit of relative density is (TSTET 20 May 2024)\nاضافی کثافت کی اکائی ہے",
    "options": [
      "it has no units\nاس کی کوئی اکائی نہیں ہے",
      "$g/cm^{3}$",
      "$Kg/cm^{3}$",
      "$N/m^{2}$"
    ],
    "correct": "it has no units",
    "explanation": "اضافی کثافت کسی مادہ کی کثافت اور ایک حوالہ جاتی مادہ (عام طور پر پانی) کی کثافت کا تناسب ہے۔ چونکہ یہ ایک جیسی اکائیوں والی دو مقداروں کا تناسب ہے (مثال کے طور پر، $kg/m^3$ کو $kg/m^3$ سے تقسیم کیا جاتا ہے)، اس لیے اکائیاں منسوخ ہو جاتی ہیں۔ لہذا، اضافی کثافت ایک بے جہت مقدار ہے اور اس کی کوئی اکائی نہیں ہوتی۔"
  },
  {
    "id": "123",
    "text": "The number of images that can be formed if we make two holes in a pinhole camera (TSTET 20 May 2024)\nاگر ہم پن ہول کیمرے میں دو سوراخ کریں تو بننے والی تصویروں کی تعداد",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": "2",
    "explanation": "پن ہول کیمرہ اس اصول پر کام کرتا ہے کہ روشنی سیدھی لکیروں میں سفر کرتی ہے۔ ہر پن ہول ایک آزاد سوراخ کے طور پر کام کرتا ہے، جو چیز سے روشنی کو گزرنے دیتا ہے اور اسکرین پر ایک الگ، الٹی تصویر بناتا ہے۔ لہذا، پن ہول کیمرے میں دو سوراخ کرنے کے نتیجے میں دو الگ الگ تصویریں بنیں گی۔"
  },
  {
    "id": "124",
    "text": "The value of universal gravitational constant (TSTET 20 May 2024)\nآفاقی ثقلی مستقل کی قدر",
    "options": [
      "$G=6.67\\times10^{-13}N~m^{2}kg^{-2}$",
      "$G=6.67\\times10^{-11}N~m^{2}kg^{-2}$",
      "$G=6.67\\times10^{-14}N~m^{2}kg^{-2}$",
      "$G=6.67\\times10^{11}N~m^{2}kg^{-2}$"
    ],
    "correct": "$G=6.67\\times10^{-11}N~m^{2}kg^{-2}$",
    "explanation": "آفاقی ثقلی مستقل، جسے G سے ظاہر کیا جاتا ہے، نیوٹن کے آفاقی کشش ثقل کے قانون میں ایک بنیادی طبعی مستقل ہے۔ بین الاقوامی طور پر قبول شدہ قدر تقریباً $6.674 \\times 10^{-11} N \cdot m^2/kg^2$ ہے۔ فراہم کردہ آپشن طبیعیات میں استعمال ہونے والی معیاری گول قدر ہے۔"
  },
  {
    "id": "125",
    "text": "Identify the INCORRECT statement among the following with respect to Kirchhoff's laws of electric circuit. (TSTET 20 May 2024)\nکرچوف کے برقی سرکٹ کے قوانین کے حوالے سے مندرجہ ذیل میں سے غلط بیان کی نشاندہی کریں۔",
    "options": [
      "The potential difference across the resistor is taken as positive when we move along the direction of electric current through the resistor.\nرزسٹر کے پار پوٹینشل فرق کو مثبت لیا جاتا ہے جب ہم رزسٹر کے ذریعے برقی رو کی سمت میں حرکت کرتے ہیں۔",
      "Kirchhoff's Loop law is based on the conservation of energy.\nکرچوف کا لوپ قانون توانائی کے تحفظ پر مبنی ہے۔",
      "Kirchhoff's Junction law is based on the conservation of charge.\nکرچوف کا جنکشن قانون چارج کے تحفظ پر مبنی ہے۔",
      "The algebraic sum of the increases and decreases in potential difference across various components of a closed-circuit loop must be zero.\nایک بند سرکٹ لوپ کے مختلف اجزاء کے پار پوٹینشل فرق میں اضافے اور کمی کا الجبری مجموعہ صفر ہونا چاہیے۔"
    ],
    "correct": "The potential difference across the resistor is taken as positive when we move along the direction of electric current through the resistor.",
    "explanation": "یہ بیان غلط ہے۔ کرچوف کے لوپ قانون کو لاگو کرنے کے لیے معیاری علامتی کنونشن کے مطابق، جب آپ کرنٹ کی سمت میں ایک رزسٹر کے پار راستہ ٹریس کرتے ہیں، تو یہ پوٹینشل میں *کمی* کی نمائندگی کرتا ہے، لہذا پوٹینشل فرق ($V=IR$) *منفی* لیا جاتا ہے۔ کرنٹ کے خلاف حرکت کرتے وقت ایک مثبت قدر استعمال کی جاتی ہے۔"
  },
  {
    "id": "126",
    "text": "Froth flotation is useful for sulphide ores because (TSTET 20 May 2024)\nجھاگ فلوٹیشن سلفائیڈ کچ دھاتوں کے لیے مفید ہے کیونکہ",
    "options": [
      "they have no wetting property\nان میں گیلا ہونے کی خاصیت نہیں ہوتی",
      "the impurities get dried\nناخالصیاں خشک ہو جاتی ہیں",
      "the impurities settle at the top\nناخالصیاں اوپر جم جاتی ہیں",
      "ore can be separated by handpicking\nکچ دھات کو ہاتھ سے چن کر الگ کیا جا سکتا ہے"
    ],
    "correct": "they have no wetting property",
    "explanation": "جھاگ فلوٹیشن کا عمل معدنیات کو پانی سے گیلا ہونے کی ان کی مختلف صلاحیتوں کی بنیاد پر الگ کرتا ہے۔ سلفائیڈ کچ دھات کے ذرات ہائیڈروفوبک (پانی کو دور کرنے والے) ہوتے ہیں اور انہیں ترجیحی طور پر پائن آئل سے گیلا کیا جاتا ہے۔ گینگو (ناخالصیاں) ہائیڈرو فیلک (پانی کو متوجہ کرنے والی) ہوتی ہیں۔ جب آمیزے میں سے ہوا کے بلبلے گزارے جاتے ہیں، تو تیل سے لیپے ہوئے کچ دھات کے ذرات بلبلوں سے جڑ جاتے ہیں اور جھاگ کی صورت میں سطح پر آجاتے ہیں، جو انہیں مؤثر طریقے سے پانی سے گیلی ہونے والی ناخالصیوں سے الگ کر دیتے ہیں جو نیچے بیٹھ جاتی ہیں۔"
  },
  {
    "id": "127",
    "text": "This is NOT formed by the physical mixing of two substances (TSTET 20 May 2024)\nیہ دو مادوں کے طبعی ملاپ سے نہیں بنتا",
    "options": [
      "Mixture\nآمیزہ",
      "Solvent\nمحلل",
      "Solute\nمنحل",
      "Compound\nمرکب"
    ],
    "correct": "Compound",
    "explanation": "ایک **مرکب** کیمیائی تعامل کے ذریعے بنتا ہے جس میں دو یا زیادہ عناصر ایک مقررہ تناسب میں ملتے ہیں، نئے کیمیائی بانڈ بناتے ہیں اور مختلف خصوصیات کے ساتھ ایک نیا مادہ تشکیل دیتے ہیں۔ ایک **آمیزہ**، اور اس کے اجزاء جیسے **منحل** اور **محلل**، بغیر کسی کیمیائی تبدیلی کے مادوں کے طبعی ملاپ سے بنتے ہیں۔"
  },
  {
    "id": "128",
    "text": "In the chemical reaction $Na_{2}CO_{3}+10H_{2}O\\rightarrow Na_{2}CO_{3}.10H_{2}O,$ $Na_{2}CO_{3}.10H_{2}O$ is (TSTET 20 May 2024)\nکیمیائی تعامل $Na_{2}CO_{3}+10H_{2}O\\rightarrow Na_{2}CO_{3}.10H_{2}O$ میں، $Na_{2}CO_{3}.10H_{2}O$ ہے",
    "options": [
      "Baking soda\nبیکنگ سوڈا",
      "Soda ash\nسوڈا ایش",
      "Washing soda\nواشنگ سوڈا",
      "Sodium Carbonate\nسوڈیم کاربونیٹ"
    ],
    "correct": "Washing soda",
    "explanation": "کیمیائی فارمولا $Na_{2}CO_{3}.10H_{2}O$ سوڈیم کاربونیٹ ڈیکاہائیڈریٹ کی نمائندگی کرتا ہے۔ یہ **واشنگ سوڈا** کا عام کیمیائی نام ہے۔ سوڈا ایش بے آب (پانی کے بغیر) شکل، $Na_{2}CO_{3}$ کو کہتے ہیں، جبکہ بیکنگ سوڈا سوڈیم بائی کاربونیٹ، $NaHCO_3$ ہے۔"
  },
  {
    "id": "129",
    "text": "The iron nail dipped in copper sulphate solution becomes brown. This is a (TSTET 20 May 2024)\nکاپر سلفیٹ کے محلول میں ڈوبی ہوئی لوہے کی کیل بھوری ہو جاتی ہے۔ یہ ایک ہے",
    "options": [
      "Chemical Combination reaction\nکیمیائی ترکیبی تعامل",
      "Decomposition reaction\nتحلیلی تعامل",
      "Displacement reaction\nہٹاؤ کا تعامل",
      "Double displacement reaction\nدوہرا ہٹاؤ کا تعامل"
    ],
    "correct": "Displacement reaction",
    "explanation": "یہ ایک کلاسک واحد **ہٹاؤ کا تعامل** ہے۔ لوہا تعاملی سلسلے میں تانبے سے زیادہ فعال ہے۔ لہذا، جب لوہے کی کیل (Fe) کو کاپر سلفیٹ ($CuSO_4$) کے محلول میں رکھا جاتا ہے، تو زیادہ فعال لوہا محلول سے تانبے کے آئنوں کو ہٹا دیتا ہے۔ تعامل یہ ہے: $Fe(s) + CuSO_4(aq) \\rightarrow FeSO_4(aq) + Cu(s)$۔ کیل پر بھوری تہہ جمع شدہ ٹھوس تانبا ہے۔"
  },
  {
    "id": "130",
    "text": "Chlorine isotopes occur in nature in two isotopic forms with masses 35 units and 37 units. The isotope with mass 35 is 75% and the isotope with mass 37 is 25% present in nature. Then the average atomic mass of the chlorine atom is (TSTET 20 May 2024)\nکلورین کے آئسوٹوپس فطرت میں دو آئسوٹوپک شکلوں میں پائے جاتے ہیں جن کی کمیت 35 یونٹ اور 37 یونٹ ہوتی ہے۔ 35 کمیت والا آئسوٹوپ 75% اور 37 کمیت والا آئسوٹوپ 25% فطرت میں موجود ہے۔ تب کلورین ایٹم کی اوسط جوہری کمیت ہے",
    "options": [
      "37.5 u",
      "50 u",
      "36 u",
      "35.5 u"
    ],
    "correct": "35.5 u",
    "explanation": "اوسط جوہری کمیت کسی عنصر کے آئسوٹوپس کی کمیتوں کا ان کی قدرتی فراوانی کی بنیاد پر وزنی اوسط ہے۔ اس کا حساب اس طرح کیا جاتا ہے: (کمیت₁ × فراوانی₁) + (کمیت₂ × فراوانی₂)۔ کلورین کے لیے، یہ ہے $(35 \\text{ u} \\times 0.75) + (37 \\text{ u} \\times 0.25) = 26.25 \\text{ u} + 9.25 \\text{ u} = 35.5 \\text{ u}$۔"
  },
  {
    "id": "131",
    "text": "Identify which is NOT a Dobereiner triad among the following (TSTET 20 May 2024)\nمندرجہ ذیل میں سے پہچانیں کہ کون سا ڈوبیرینر کا سہ تائی نہیں ہے",
    "options": [
      "Li, Na, K",
      "Ca, Sr, Ba",
      "Cl, Br, I",
      "Mg, Cr, Fe"
    ],
    "correct": "Mg, Cr, Fe",
    "explanation": "ڈوبیرینر کے سہ تائی تین عناصر کے گروہوں پر مشتمل تھے جن کی خصوصیات ملتی جلتی تھیں، جہاں درمیانی عنصر کا جوہری وزن تقریباً دوسرے دو کے اوسط کے برابر تھا۔ (Li, Na, K)، (Ca, Sr, Ba)، اور (Cl, Br, I) ان سہ تائیوں کی کلاسک مثالیں ہیں۔ گروپ (Mg, Cr, Fe) اس طرح کی ملتی جلتی کیمیائی خصوصیات کا اشتراک نہیں کرتا، اور نہ ہی یہ جوہری وزن کے اصول پر عمل کرتا ہے۔"
  },
  {
    "id": "132",
    "text": "The hybridisation of $BF_{3}$ (TSTET 20 May 2024)\n$BF_{3}$ کی ہائبرڈائزیشن",
    "options": [
      "sp",
      "$sp^{2}$",
      "$sp^{3}$",
      "There is no hybridisation\nکوئی ہائبرڈائزیشن نہیں ہے"
    ],
    "correct": "$sp^{2}$",
    "explanation": "بورون ٹرائی فلورائیڈ ($BF_3$) میں، مرکزی بورون ایٹم میں تین ویلنس الیکٹران ہوتے ہیں۔ یہ تین فلورین ایٹموں کے ساتھ سنگل بانڈ بناتا ہے۔ تین مساوی بانڈ بنانے کے لیے، بورون کا ایک 2s آربیٹل اور دو 2p آربیٹلز ہائبرڈائز ہو کر تین $sp^2$ آربیٹلز بناتے ہیں۔ یہ آربیٹلز خود کو 120° بانڈ اینگل کے ساتھ ایک مثلثی مسطح جیومیٹری میں ترتیب دیتے ہیں۔"
  },
  {
    "id": "133",
    "text": "The enteric nervous system enables us to 'feel' the inner world of our gut and its contents because of the presence of - (TSTET 20 May 2024)\nآنتوں کا اعصابی نظام ہمیں اپنی آنتوں کی اندرونی دنیا اور اس کے مواد کو 'محسوس' کرنے کے قابل بناتا ہے جس کی موجودگی کی وجہ سے -",
    "options": [
      "dendrites\nڈینڈرائٹس",
      "neuroglia\nنیوروگلیا",
      "Axons\nایکسونز",
      "multitude of neurons\nنیورونز کی کثرت"
    ],
    "correct": "multitude of neurons",
    "explanation": "آنتوں کے اعصابی نظام (ENS) کو اکثر جسم کا \"دوسرا دماغ\" کہا جاتا ہے کیونکہ یہ **نیورونز کی ایک بڑی تعداد** (کروڑوں) پر مشتمل ایک وسیع، آزاد نیٹ ورک ہے جو آنتوں کی دیواروں میں پیوست ہوتا ہے۔ یہ پیچیدہ نظام معدے کی نالی کے کام کو کنٹرول کرتا ہے اور حسی معلومات فراہم کرتا ہے جو ہمیں پیٹ بھرنے یا تکلیف جیسے اندرونی احساسات کو سمجھنے کی اجازت دیتا ہے۔"
  },
  {
    "id": "134",
    "text": "Minamata disease which was first discovered in Minamata city of Japan was caused as a result of poisoning when the people ate shell fish which are bio accumulated with this toxic chemical (TSTET 20 May 2024)\nمیناماتا بیماری، جو سب سے پہلے جاپان کے میناماتا شہر میں دریافت ہوئی، زہر خورانی کے نتیجے میں ہوئی جب لوگوں نے ایسی شیل فش کھائی جس میں یہ زہریلا کیمیکل حیاتیاتی طور پر جمع ہو گیا تھا",
    "options": [
      "Cyanide\nسائینائیڈ",
      "Methyl Isocyanate\nمیتھائل آئسو سائینیٹ",
      "Methyl Mercury\nمیتھائل مرکری",
      "Arsenic trioxide\nآرسینک ٹرائی آکسائیڈ"
    ],
    "correct": "Methyl Mercury",
    "explanation": "میناماتا بیماری ایک شدید اعصابی سنڈروم ہے جو پارے کے زہر سے ہوتا ہے۔ اس کی شناخت 1950 کی دہائی میں جاپان کے میناماتا میں ہوئی جب ایک مقامی فیکٹری نے صنعتی گندا پانی خارج کیا جس میں **میتھائل مرکری** شامل تھا۔ یہ زہریلا مرکب فوڈ چین میں، خاص طور پر مچھلیوں اور شیل فش میں جمع ہو گیا، جسے پھر مقامی آبادی نے کھایا۔"
  },
  {
    "id": "135",
    "text": "Read the following statements. A) The arteries are the blood vessels with thick walls which originate from the heart and supply blood to various organs in the body. B) The two atria and the two ventricles are separated from each other by muscular partitions called valves. Choose the correct answer: (TSTET 20 May 2024)\nمندرجہ ذیل بیانات کو پڑھیں۔ A) شریانیں موٹی دیواروں والی خون کی نالیاں ہیں جو دل سے نکلتی ہیں اور جسم کے مختلف اعضاء کو خون فراہم کرتی ہیں۔ B) دو ایٹریا اور دو وینٹریکلز ایک دوسرے سے پٹھوں کے پردوں سے الگ ہوتے ہیں جنہیں والوز کہتے ہیں۔ صحیح جواب کا انتخاب کریں:",
    "options": [
      "Both 'A' and 'B' are correct\n'A' اور 'B' دونوں صحیح ہیں",
      "Both 'A' and 'B' are incorrect\n'A' اور 'B' دونوں غلط ہیں",
      "Only 'B' is correct\nصرف 'B' صحیح ہے",
      "'A' is correct, 'B' is incorrect\n'A' صحیح ہے، 'B' غلط ہے"
    ],
    "correct": "'A' is correct, 'B' is incorrect",
    "explanation": "بیان 'A' صحیح ہے۔ شریانیں موٹی دیواروں والی نالیاں ہیں جو خون کو دل سے دور لے جاتی ہیں۔ بیان 'B' غلط ہے۔ دل کے خانوں کو الگ کرنے والے پٹھوں کے پردوں کو سیپٹا (septa) کہتے ہیں۔ والوز ایٹریا اور وینٹریکلز کے *درمیان* اور وینٹریکلز کے خارجی راستوں پر موجود ساختیں ہیں، جو خون کے پچھلے بہاؤ کو روکتی ہیں؛ وہ خود پردے نہیں ہیں۔"
  },
  {
    "id": "136",
    "text": "The 'Climate' of a particular place is determined by considering the average weather patterns of that place (temperature, rainfall, humidity and wind speed) taken over for a 'long time'. The term 'long time' refers to (TSTET 20 May 2024)\nکسی خاص جگہ کی 'آب و ہوا' کا تعین اس جگہ کے اوسط موسمی نمونوں (درجہ حرارت، بارش، نمی اور ہوا کی رفتار) پر غور کرکے کیا جاتا ہے جو ایک 'طویل عرصے' کے لیے لیے جاتے ہیں۔ 'طویل عرصہ' کی اصطلاح سے مراد ہے",
    "options": [
      "10 years\n10 سال",
      "25 years\n25 سال",
      "25 months\n25 مہینے",
      "50 years\n50 سال"
    ],
    "correct": "25 years",
    "explanation": "آب و ہوا سے مراد کسی مخصوص خطے میں موسمی حالات کا طویل مدتی اوسط ہے۔ ان طویل مدتی نمونوں کو قلیل مدتی موسمی اتار چڑھاؤ سے ممتاز کرنے کے لیے، ڈیٹا کو عام طور پر ایک طویل مدت کے لیے اوسط کیا جاتا ہے۔ عالمی موسمیاتی تنظیم کی طرف سے بیان کردہ معیاری مدت 30 سال ہے، لیکن **25 سال** کی مدت بھی عام طور پر استعمال کی جاتی ہے اور اسے آب و ہوا کی تعریف کے لیے کافی مدت سمجھا جاتا ہے۔"
  },
  {
    "id": "137",
    "text": "One of the following is NOT a process involved from obtaining wool to producing woollen fabric. (TSTET 20 May 2024)\nمندرجہ ذیل میں سے ایک اون حاصل کرنے سے لے کر اونی کپڑا بنانے تک کے عمل میں شامل نہیں ہے۔",
    "options": [
      "Stiffling\nسٹفلنگ",
      "Combing\nکنگھی کرنا",
      "Shearing\nاون کترائی",
      "Rolling & twisting\nرولنگ اور بٹائی"
    ],
    "correct": "Stiffling",
    "explanation": "اون کی پیداوار کے اہم عمل میں **اون کترائی** (بھیڑوں سے اون اتارنا)، **کنگھی کرنا** (ریشوں کو سیدھا کرنا)، اور **رولنگ اور بٹائی** (سوت کاتنا) شامل ہیں۔ **سٹفلنگ** ریشم کی پیداوار (ریشم کی کاشت) سے متعلق ایک عمل ہے، جہاں ریشم کے کوکون کے اندر موجود پیوپا کو گرمی یا بھاپ سے مار دیا جاتا ہے تاکہ اسے نکلتے وقت مسلسل ریشمی دھاگے کو توڑنے سے روکا جا سکے۔"
  },
  {
    "id": "138",
    "text": "The primary respiratory organs in cockroaches are (TSTET 20 May 2024)\nلال بیگ میں بنیادی تنفسی اعضاء ہیں",
    "options": [
      "gills\nگلپھڑے",
      "spiracles\nسپائراکلس",
      "nostrils\nنتھنے",
      "skin\nجلد"
    ],
    "correct": "spiracles",
    "explanation": "لال بیگ جیسے کیڑوں میں پھیپھڑے نہیں ہوتے ہیں۔ وہ ٹریچیل سسٹم کہلانے والی ٹیوبوں کے ایک نیٹ ورک کے ذریعے سانس لیتے ہیں۔ ہوا اس نظام میں کیڑے کے جسم کے اطراف میں موجود بیرونی سوراخوں کے ذریعے داخل ہوتی ہے جنہیں **سپائراکلس** کہتے ہیں۔ سپائراکلس سے، ہوا ٹریچیا کے ذریعے سفر کرتی ہے تاکہ آکسیجن براہ راست خلیوں تک پہنچا سکے۔"
  },
  {
    "id": "139",
    "text": "Male gamates/sperms are produced in this part of the male reproductive system (TSTET 20 May 2024)\nنر گیمیٹس/اسپرمز مردانہ تولیدی نظام کے اس حصے میں پیدا ہوتے ہیں",
    "options": [
      "Seminal ducts\nسیمینل ڈکٹس",
      "Testes\nخصیے",
      "Penis\nعضو تناسل",
      "Prostate gland\nپروسٹیٹ غدود"
    ],
    "correct": "Testes",
    "explanation": "**خصیے** بنیادی مردانہ تولیدی غدود (گونڈز) ہیں۔ ان کا بنیادی کام اسپرمیٹوجینیسس ہے، جو اسپرم (نر گیمیٹس) پیدا کرنے کا عمل ہے۔ سیمینل ڈکٹس نقل و حمل کے لیے ہیں، پروسٹیٹ غدود مائع پیدا کرتا ہے جو اسپرم کے ساتھ مل جاتا ہے، اور عضو تناسل ملاپ کا عضو ہے۔"
  },
  {
    "id": "140",
    "text": "Diverse and specific species of flora/fauna that grow particutarly in a particular area are called __________ species of that area. (TSTET 20 May 2024)\nنباتات/حیوانات کی متنوع اور مخصوص انواع جو خاص طور پر کسی خاص علاقے میں اگتی ہیں، اس علاقے کی __________ انواع کہلاتی ہیں۔",
    "options": [
      "endangered\nخطرے سے دوچار",
      "extinct\nناپید",
      "extant\nموجودہ",
      "endemic\nمقامی"
    ],
    "correct": "endemic",
    "explanation": "**مقامی** انواع وہ پودے اور جانور ہیں جو خصوصی طور پر ایک مخصوص جغرافیائی مقام پر پائے جاتے ہیں اور دنیا میں کہیں اور نہیں پائے جاتے۔ خطرے سے دوچار انواع کے ناپید ہونے کا خطرہ ہوتا ہے۔ ناپید انواع اب موجود نہیں ہیں۔ موجودہ کا مطلب ہے اب بھی وجود میں ہیں۔"
  },
  {
    "id": "141",
    "text": "CFCs are released from ACs, refrigerators and aerosol sprays and cause depletion of Ozone layer resulting in Global warming. 'CFC' stands for (TSTET 20 May 2024)\nCFCs ACs، ریفریجریٹرز اور ایروسول اسپرے سے خارج ہوتی ہیں اور اوزون کی تہہ کی کمی کا باعث بنتی ہیں جس کے نتیجے میں گلوبل وارمنگ ہوتی ہے۔ 'CFC' کا مطلب ہے",
    "options": [
      "Chloro Ferrous Carbons\nکلورو فیرس کاربنز",
      "Chloro Flouro Carbons\nکلورو فلورو کاربنز",
      "Chloro Flouro Chemicals\nکلورو فلورو کیمیکلز",
      "Chemical Fertilizer Companies\nکیمیکل فرٹیلائزر کمپنیاں"
    ],
    "correct": "Chloro Flouro Carbons",
    "explanation": "CFC کا مطلب **کلورو فلورو کاربنز** ہے۔ یہ کاربن، کلورین اور فلورین پر مشتمل نامیاتی مرکبات ہیں۔ یہ زمین کی اوزون کی تہہ کو ختم کرنے میں اپنے کردار کے لیے بدنام ہیں، جو زندگی کو نقصان دہ بالائے بنفشی شعاعوں سے بچاتی ہے۔"
  },
  {
    "id": "142",
    "text": "Saprophytes-microbes that decompose dead organisims are (TSTET 20 May 2024)\nسیپروفائٹس-مائیکروبس جو مردہ جانداروں کو تحلیل کرتے ہیں، ہیں",
    "options": [
      "Autotrophs\nآٹوٹروفس",
      "Embryotrophs\nایمبریوٹروفس",
      "Heterotrophs\nہیٹروٹروفس",
      "Saprotrophs\nسیپروٹروفس"
    ],
    "correct": "Heterotrophs",
    "explanation": "سیپروفائٹس (یا سیپروٹروفس) مردہ نامیاتی مادے کو تحلیل کرکے غذائی اجزاء حاصل کرتے ہیں۔ چونکہ وہ اپنی خوراک خود پیدا نہیں کرسکتے اور بیرونی نامیاتی ذرائع پر انحصار کرتے ہیں، اس لیے انہیں **ہیٹروٹروفس** کے طور پر درجہ بندی کیا جاتا ہے۔ آٹوٹروفس اپنی خوراک خود بناتے ہیں، عام طور پر ضیائی تالیف کے ذریعے۔ لہذا، سیپروٹروفزم ہیٹروٹروفک غذائیت کی ایک قسم ہے۔"
  },
  {
    "id": "143",
    "text": "Nitrogen cannot be used by plants and animals in its original form as present in the atmosphere. The atmospheric Nitrogen is hence converted into certain compounds which plants can take from soil. Which of the following bacteria help in this bio chemical process of conversion? (TSTET 20 May 2024)\nنائٹروجن کو پودے اور جانور اس کی اصل شکل میں استعمال نہیں کر سکتے جیسا کہ یہ فضا میں موجود ہے۔ لہذا، فضائی نائٹروجن کو کچھ مرکبات میں تبدیل کیا جاتا ہے جنہیں پودے مٹی سے لے سکتے ہیں۔ مندرجہ ذیل میں سے کون سے بیکٹیریا اس تبدیلی کے حیاتیاتی کیمیائی عمل میں مدد کرتے ہیں؟",
    "options": [
      "Lactobacillus\nلیکٹوبیسیلس",
      "Cyanobacteria\nسائنو بیکٹیریا",
      "Rhizobium\nرائزوبیم",
      "Pathogenic bacteria\nپیتھوجینک بیکٹیریا"
    ],
    "correct": "Rhizobium",
    "explanation": "نا قابل استعمال فضائی نائٹروجن گیس ($N_2$) کو امونیا جیسے قابل استعمال مرکبات میں تبدیل کرنے کے عمل کو نائٹروجن فکسیشن کہا جاتا ہے۔ **رائزوبیم** بیکٹیریا پھلی دار پودوں (مثلاً مٹر، پھلیاں) کے ساتھ اپنے ہم زیستی تعلقات کے لیے مشہور ہیں، جو ان کی جڑوں کی گانٹھوں میں رہتے ہیں اور پودے کے استعمال کے لیے نائٹروجن کو فکس کرتے ہیں۔"
  },
  {
    "id": "144",
    "text": "The only organ in our body that can float is (TSTET 20 May 2024)\nہمارے جسم کا واحد عضو جو تیر سکتا ہے",
    "options": [
      "Stomach\nمعدہ",
      "Lungs\nپھیپھڑے",
      "Kidney\nگردہ",
      "Brain\nدماغ"
    ],
    "correct": "Lungs",
    "explanation": "**پھیپھڑے** واحد انسانی اعضاء ہیں جو پانی پر تیر سکتے ہیں۔ اس کی وجہ یہ ہے کہ زبردستی سانس چھوڑنے کے بعد بھی، ہوا کی ایک خاص مقدار، جسے بقایا حجم کہا جاتا ہے، ان کے اندر پھنسی رہتی ہے۔ یہ بقایا ہوا ان کی مجموعی کثافت کو پانی سے کم کر دیتی ہے۔"
  },
  {
    "id": "145",
    "text": "In problem solving approach, teacher is a (TSTET 20 May 2024)\nمسئلہ حل کرنے کے نقطہ نظر میں، استاد ایک ہے",
    "options": [
      "Learner\nسیکھنے والا",
      "Facilitator\nسہولت کار",
      "Researcher\nمحقق",
      "Explorer\nکھوجی"
    ],
    "correct": "Facilitator",
    "explanation": "تدریس کے طالب علم پر مرکوز، مسئلہ حل کرنے کے نقطہ نظر میں، استاد کا کردار براہ راست ہدایت کار ہونے سے بدل کر ایک **سہولت کار** کا ہو جاتا ہے۔ ایک سہولت کار سیکھنے کے عمل کی رہنمائی کرتا ہے، وسائل فراہم کرتا ہے، اور طلباء کی مدد کرتا ہے جب وہ مسئلے کو کھوجتے ہیں اور اپنی سمجھ خود بناتے ہیں، بجائے اس کے کہ صرف معلومات فراہم کریں۔"
  },
  {
    "id": "146",
    "text": "Teaching and Learning process is socially related to (TSTET 20 May 2024)\nتدریس اور سیکھنے کا عمل سماجی طور پر اس سے متعلق ہے",
    "options": [
      "Classroom\nکمرہ جماعت",
      "Behavior\nرویہ",
      "Society\nمعاشرہ",
      "Home\nگھر"
    ],
    "correct": "Classroom",
    "explanation": "اگرچہ سیکھنے کا عمل معاشرے اور گھر سے متاثر ہوتا ہے، لیکن رسمی تدریس اور سیکھنے کا عمل ایک سماجی سرگرمی ہے جو بنیادی طور پر **کمرہ جماعت** کے ماحول میں مرکوز ہوتی ہے۔ کمرہ جماعت وہ مخصوص سماجی ماحول ہے جہاں تعلیم کے مقصد کے لیے اساتذہ اور طلباء کے درمیان منصوبہ بند تعاملات ہوتے ہیں۔"
  },
  {
    "id": "147",
    "text": "As per the recommendation of NCF-2005, at this level, students should be engaged in learning science as a composite discipline. (TSTET 20 May 2024)\nNCF-2005 کی سفارش کے مطابق، اس سطح پر، طلباء کو سائنس کو ایک جامع مضمون کے طور پر سیکھنے میں مشغول ہونا چاہئے۔",
    "options": [
      "Primary level\nپرائمری سطح",
      "Upper primary level\nاپر پرائمری سطح",
      "Secondary level\nثانوی سطح",
      "Higher secondary level\nاعلیٰ ثانوی سطح"
    ],
    "correct": "Secondary level",
    "explanation": "قومی نصابی ڈھانچہ (NCF) 2005 سفارش کرتا ہے کہ **ثانوی سطح** (کلاس IX-X) پر، سائنس کو ایک واحد مربوط یا جامع مضمون کے طور پر پڑھایا جانا چاہئے، جس میں طبیعیات، کیمیا اور حیاتیات کو ملایا جائے۔ یہ طلباء کو اعلیٰ ثانوی سطح پر مہارت حاصل کرنے سے پہلے مختلف سائنسی شعبوں کے درمیان روابط کو سمجھنے میں مدد کرنے کے لیے ہے۔"
  },
  {
    "id": "148",
    "text": "In an experiment conducted to see the effect of intermittent fasting on weight reduction in men and women, intermittent fasting is (TSTET 20 May 2024)\nمردوں اور عورتوں میں وزن میں کمی پر وقفے وقفے سے فاقہ کشی کے اثرات کو دیکھنے کے لیے کیے گئے ایک تجربے میں، وقفے وقفے سے فاقہ کشی ہے",
    "options": [
      "Dependent variable\nمنحصر متغیر",
      "Intervening variable\nمداخلتی متغیر",
      "Independent variable\nآزاد متغیر",
      "Extraneous variable\nبیرونی متغیر"
    ],
    "correct": "Independent variable",
    "explanation": "ایک تجربے میں، **آزاد متغیر** وہ حالت ہے جسے محقق (وجہ) کے ذریعے تبدیل یا ہیرا پھیری کی جاتی ہے۔ **منحصر متغیر** وہ نتیجہ ہے جس کی پیمائش اس تبدیلی کے اثر (اثر) کو دیکھنے کے لیے کی جاتی ہے۔ یہاں، 'وقفے وقفے سے فاقہ کشی' وہ عنصر ہے جسے لاگو یا تبدیل کیا جا رہا ہے، لہذا یہ آزاد متغیر ہے۔ 'وزن میں کمی' منحصر متغیر ہوگا۔"
  },
  {
    "id": "149",
    "text": "The third step in the '5E's' instructional model for constructivism developed by Roger Bybee (TSTET 20 May 2024)\nراجر بائبی کے تیار کردہ تعمیری ازم کے لیے '5E's' تدریسی ماڈل میں تیسرا مرحلہ",
    "options": [
      "Engage\nمشغول کریں",
      "Explain\nوضاحت کریں",
      "Explore\nدریافت کریں",
      "Evaluate\nجانچیں"
    ],
    "correct": "Explain",
    "explanation": "5E تدریسی ماڈل ایک مخصوص ترتیب کی پیروی کرتا ہے: پہلا ہے **مشغول کرنا** (دلچسپی پیدا کرنا)، دوسرا ہے **دریافت کرنا** (عملی سرگرمیاں)، تیسرا ہے **وضاحت کرنا** (طلباء اور استاد تفہیم کو بیان کرتے ہیں اور رسمی اصطلاحات متعارف کراتے ہیں)، چوتھا ہے **تفصیل بیان کرنا** (تصورات کا اطلاق)، اور پانچواں ہے **جانچنا** (سیکھنے کا اندازہ لگانا)۔"
  },
  {
    "id": "150",
    "text": "When a test measures what it aims to measure it is said to be- (TSTET 20 May 2024)\nجب کوئی ٹیسٹ اس چیز کی پیمائش کرتا ہے جس کی پیمائش کا اس کا مقصد ہے تو اسے کہا جاتا ہے-",
    "options": [
      "Reliable\nقابل اعتماد",
      "Objective\nمعروضی",
      "Economical\nکفایتی",
      "Valid\nمستند"
    ],
    "correct": "Valid",
    "explanation": "**استناد** وہ حد ہے جس تک ایک ٹیسٹ اس چیز کی پیمائش کرتا ہے جس کی پیمائش کا وہ دعویٰ کرتا ہے۔ اسے ایک اچھے ٹیسٹ کی سب سے بنیادی خصوصیت سمجھا جاتا ہے۔ **اعتبار** سے مراد نتائج کا مستقل ہونا ہے، جبکہ **معروضیت** سے مراد اسکورنگ کا تعصب سے پاک ہونا ہے۔"
  },
  {
    "id": "151",
    "text": "As the comet approaches the sun, the length of the tail of the comet in size will (TSTET 20 May 2024)\nجیسے ہی دمدار ستارہ سورج کے قریب آتا ہے، دمدار ستارے کی دم کی لمبائی سائز میں",
    "options": [
      "grow\nبڑھے گی",
      "disappear\nغائب ہو جائے گی",
      "remains same\nویسی ہی رہے گی",
      "diminish\nکم ہو جائے گی"
    ],
    "correct": "grow",
    "explanation": "دمدار ستارہ ایک برفیلا جسم ہے جو سورج کے قریب آنے پر گیس اور دھول خارج کرتا ہے۔ اس عمل کو آؤٹ گیسنگ کہتے ہیں۔ سورج سے آنے والی شدید شمسی تابکاری اور شمسی ہوا دمدار ستارے کو گرم کرتی ہے، جس سے زیادہ مواد خارج ہوتا ہے۔ یہ خارج شدہ مواد دمدار ستارے کی دم بناتا ہے۔ دمدار ستارہ سورج کے جتنا قریب ہوتا ہے، شمسی اثرات اتنے ہی مضبوط ہوتے ہیں، جس کے نتیجے میں زیادہ آؤٹ گیسنگ اور ایک لمبی، زیادہ نظر آنے والی دم بنتی ہے۔ لہذا، سورج کے قریب آتے ہی دم کا سائز بڑھ جاتا ہے۔"
  },
  {
    "id": "152",
    "text": "The net force acting on the Mercury at rest in the Barometer is (TSTET 20 May 2024)\nبیرومیٹر میں ساکن پارے پر عمل کرنے والی خالص قوت ہے",
    "options": [
      "76 cm",
      "1 atm",
      "0",
      "24 cm"
    ],
    "correct": "0",
    "explanation": "نیوٹن کے حرکت کے پہلے قانون کے مطابق، کوئی چیز اس وقت تک ساکن رہتی ہے جب تک اس پر عمل کرنے والی خالص قوت صفر ہو۔ بیرومیٹر میں، پارے کا کالم ساکن ہوتا ہے کیونکہ اس پر عمل کرنے والی قوتیں متوازن ہوتی ہیں۔ پارے کے کالم کے وزن کی وجہ سے نیچے کی طرف لگنے والی قوت کو ذخیرے میں موجود پارے پر فضائی دباؤ کی طرف سے لگائی جانے والی اوپر کی قوت سے بالکل متوازن کیا جاتا ہے۔ چونکہ یہ قوتیں برابر اور مخالف ہیں، اس لیے خالص قوت صفر ہے۔"
  },
  {
    "id": "153",
    "text": "The boiling point of water at standard atmospheric pressure (1 atm) and Latent heat of vapourization of water are respectively (TSTET 20 May 2024)\nمعیاری فضائی دباؤ (1 atm) پر پانی کا نقطہ ابال اور پانی کی تبخیر کی مخفی حرارت بالترتیب ہیں",
    "options": [
      "373 K, 540 cal/gm",
      "0 K, 540 cal/gm",
      "273 K, 270 cal/gm",
      "0 K, 270 cal/gm"
    ],
    "correct": "373 K, 540 cal/gm",
    "explanation": "معیاری فضائی دباؤ (1 atm) پر، پانی 100° سیلسیس پر ابلتا ہے۔ سیلسیس کو کیلون میں تبدیل کرنے کے لیے، فارمولا ہے K = °C + 273.15۔ اس طرح، 100°C تقریباً 373 K ہے۔ تبخیر کی مخفی حرارت حرارتی توانائی کی وہ مقدار ہے جو کسی مادہ کی اکائی کمیت کو اس کے نقطہ ابال پر مائع سے گیس میں تبدیل کرنے کے لیے درکار ہوتی ہے۔ پانی کے لیے، یہ قدر تقریباً 540 کیلوری فی گرام (cal/gm) ہے۔"
  },
  {
    "id": "154",
    "text": "The surface area of an object is 40 m² and a force of 20 N is applied on it, then the resultant pressure is equal to (TSTET 20 May 2024)\nایک شے کا سطحی رقبہ 40 m² ہے اور اس پر 20 N کی قوت لگائی گئی ہے، تو نتیجہ خیز دباؤ برابر ہے",
    "options": [
      "0.5 N/m²",
      "800 N/m²",
      "2 N/m²",
      "1 N/m²"
    ],
    "correct": "0.5 N/m²",
    "explanation": "دباؤ کا حساب فارمولے سے کیا جاتا ہے: دباؤ (P) = قوت (F) / رقبہ (A)۔ دی گئی قوت 20 نیوٹن (N) ہے اور رقبہ 40 مربع میٹر (m²) ہے، حساب یہ ہے P = 20 N / 40 m² = 0.5 N/m²۔ اکائی N/m² کو پاسکل (Pa) بھی کہا جاتا ہے۔"
  },
  {
    "id": "155",
    "text": "The correct expression for the work done by the chemical force to move unit positive charge from negative terminal to positive terminal of the battery (TSTET 20 May 2024)\nبیٹری کے منفی ٹرمینل سے مثبت ٹرمینل تک اکائی مثبت چارج کو منتقل کرنے کے لیے کیمیائی قوت کے ذریعے کیے گئے کام کا صحیح اظہار ہے",
    "options": [
      "ε = Fₑ(w/q)",
      "ε = Fₑ(q/d)",
      "ε = Fₑ(d/q)",
      "ε = Fₑ(q/d)"
    ],
    "correct": "ε = Fₑ(d/q)",
    "explanation": "بیٹری کی الیکٹروموٹیو فورس (EMF، جسے ε سے ظاہر کیا جاتا ہے) کی تعریف فی اکائی چارج کیے گئے کام کے طور پر کی جاتی ہے۔ کام خود قوت اور فاصلے کا حاصل ضرب ہے (W = F × d)۔ لہذا، EMF کو کیمیائی قوت (F) کے ذریعے ایک فاصلے (d) پر کیے گئے کام کو چارج (q) سے تقسیم کرکے ظاہر کیا جاسکتا ہے۔ اظہار ε = Fₑ(d/q) اس تعلق کو صحیح طور پر ظاہر کرتا ہے، جہاں Fₑ چارج کو حرکت دینے والی کیمیائی قوت کی نمائندگی کرتا ہے۔"
  },
  {
    "id": "156",
    "text": "In activity series, Metals are arranged in this order of their reactivity (TSTET 20 May 2024)\nسرگرمی کے سلسلے میں، دھاتوں کو ان کی تعاملیت کی اس ترتیب میں ترتیب دیا گیا ہے",
    "options": [
      "Ascending order\nصعودی ترتیب",
      "Descending order\nنزولی ترتیب",
      "Small to Big\nچھوٹے سے بڑا",
      "There will be no specific order\nکوئی خاص ترتیب نہیں ہوگی"
    ],
    "correct": "Descending order",
    "explanation": "کیمیائی سرگرمی کا سلسلہ، یا تعاملی سلسلہ، دھاتوں کو کیمیائی تعاملات سے گزرنے کے ان کے رجحان کی بنیاد پر ترتیب دیتا ہے۔ دھاتوں کو تعاملیت کی نزولی ترتیب میں درج کیا گیا ہے، جس کا مطلب ہے کہ سب سے زیادہ تعامل والی دھات (جیسے پوٹاشیم) سب سے اوپر ہے، اور سب سے کم تعامل والی دھات (جیسے سونا) سب سے نیچے ہے۔ یہ ترتیب ہٹاؤ کے تعاملات کے نتائج کی پیش گوئی کرنے میں مدد کرتی ہے۔"
  },
  {
    "id": "157",
    "text": "Identify the fibre made up of polymers among the following (TSTET 20 May 2024)\nمندرجہ ذیل میں سے پولیمر سے بنے فائبر کی شناخت کریں",
    "options": [
      "Silk\nریشم",
      "Jute\nپٹ سن",
      "Wool\nاون",
      "Nylon\nنائلون"
    ],
    "correct": "Nylon",
    "explanation": "تمام فائبر پولیمر ہیں، لیکن سوال قدرتی اور مصنوعی کے درمیان فرق کرتا ہے۔ ریشم (ایک پروٹین)، پٹ سن (سیلولوز)، اور اون (ایک پروٹین) قدرتی پولیمر ہیں۔ نائلون ایک مصنوعی پولیمر ہے، خاص طور پر ایک پولیامائڈ، جو پولیمرائزیشن نامی ایک صنعتی کیمیائی عمل کے ذریعے بنایا گیا ہے۔ اس تناظر میں، نائلون مطلوبہ جواب ہے جو انسان کے بنائے ہوئے پولیمر فائبر کی نمائندگی کرتا ہے۔"
  },
  {
    "id": "158",
    "text": "The formula of Bleaching powder (TSTET 20 May 2024)\nبلیچنگ پاؤڈر کا فارمولا",
    "options": [
      "CaCl₂",
      "CaOCl₂",
      "CaCl₃",
      "Ca(OH)₂"
    ],
    "correct": "CaOCl₂",
    "explanation": "بلیچنگ پاؤڈر کیمیائی مرکب کیلشیم آکسی کلورائیڈ کا عام نام ہے۔ اس کا کیمیائی فارمولا CaOCl₂ ہے۔ یہ کلورین گیس کو خشک بجھے ہوئے چونے (کیلشیم ہائیڈرو آکسائیڈ، Ca(OH)₂) کے ساتھ تعامل کرکے تیار کیا جاتا ہے۔ CaCl₂ کیلشیم کلورائیڈ ہے۔"
  },
  {
    "id": "159",
    "text": "12 g of Carbon reacted with 32 g of Oxygen and formed 44 g of Carbon dioxide. This is a (TSTET 20 May 2024)\n12 گرام کاربن نے 32 گرام آکسیجن کے ساتھ تعامل کیا اور 44 گرام کاربن ڈائی آکسائیڈ بنائی۔ یہ ایک ہے",
    "options": [
      "Double displacement reaction\nدوہرا ہٹاؤ کا تعامل",
      "Displacement reaction\nہٹاؤ کا تعامل",
      "Decomposition reaction\nتحلیلی تعامل",
      "Chemical Combination reaction\nکیمیائی ترکیبی تعامل"
    ],
    "correct": "Chemical Combination reaction",
    "explanation": "کیمیائی ترکیبی تعامل ایک قسم کا تعامل ہے جہاں دو یا زیادہ تعامل کنندگان مل کر ایک واحد، زیادہ پیچیدہ پیداوار بناتے ہیں۔ اس معاملے میں، کاربن (C) اور آکسیجن (O₂) مل کر ایک پیداوار، کاربن ڈائی آکسائیڈ (CO₂) بناتے ہیں۔ تعامل کو C + O₂ → CO₂ کے طور پر ظاہر کیا جاتا ہے۔ دی گئی کمیتیں بھی کمیت کے تحفظ کے قانون کا مظاہرہ کرتی ہیں (12g + 32g = 44g)۔"
  },
  {
    "id": "160",
    "text": "Among the isotopes of an element, these differ in number (TSTET 20 May 2024)\nایک عنصر کے آئسوٹوپس کے درمیان، یہ تعداد میں مختلف ہوتے ہیں",
    "options": [
      "Proton\nپروٹون",
      "Electron\nالیکٹران",
      "Neutron\nنیوٹران",
      "Positron\nپوزیٹران"
    ],
    "correct": "Neutron",
    "explanation": "آئسوٹوپس کسی خاص کیمیائی عنصر کی مختلف شکلیں ہیں جو نیوٹران کی تعداد میں مختلف ہوتی ہیں، حالانکہ کسی دیے گئے عنصر کے تمام آئسوٹوپس کے ہر ایٹم میں پروٹون کی تعداد یکساں ہوتی ہے۔ پروٹون کی تعداد عنصر کا جوہری نمبر متعین کرتی ہے۔ نیوٹران کی تعداد میں فرق ہر آئسوٹوپ کے لیے ایک مختلف کمیت نمبر کا باعث بنتا ہے۔"
  },
  {
    "id": "161",
    "text": "Electronic configuration of the Chromium (TSTET 20 May 2024)\nکرومیم کی الیکٹرانک ترتیب",
    "options": [
      "1s²2s²2p⁶3s²3p⁶4s¹3d⁶",
      "1s²2s²2p⁶3s²3p⁶4s²3d⁵",
      "1s²2s²2p⁶3s²3p⁶4s²3d⁴",
      "1s²2s²2p⁶3s²3p⁶4s¹3d⁵"
    ],
    "correct": "1s²2s²2p⁶3s²3p⁶4s¹3d⁵",
    "explanation": "کرومیم (Cr)، جس کا ایٹمی نمبر 24 ہے، الیکٹران آربیٹلز کو بھرنے کے لیے معیاری اوفباؤ اصول سے مستثنیٰ ہے۔ زیادہ استحکام حاصل کرنے کے لیے، ایٹم آدھے بھرے یا مکمل طور پر بھرے سب شیلز کو ترجیح دیتے ہیں۔ متوقع ترتیب [Ar] 4s²3d⁴ کے بجائے، ایک الیکٹران 4s آربیٹل سے 3d آربیٹل میں منتقل ہو جاتا ہے۔ یہ ایک آدھا بھرا ہوا 4s آربیٹل (4s¹) اور ایک آدھا بھرا ہوا 3d آربیٹل (3d⁵) بناتا ہے، جو کہ زیادہ مستحکم حالت ہے۔ اس طرح، صحیح ترتیب 1s²2s²2p⁶3s²3p⁶4s¹3d⁵ ہے۔"
  },
  {
    "id": "162",
    "text": "Bond length of H-N in NH₃ (TSTET 20 May 2024)\nNH₃ میں H-N کی بانڈ لمبائی",
    "options": [
      "0.96 Å",
      "1.01 Å",
      "1.10 Å",
      "1.27 Å"
    ],
    "correct": "1.01 Å",
    "explanation": "بانڈ کی لمبائی دو جڑے ہوئے ایٹموں کے مرکزوں کے درمیان اوسط فاصلہ ہے۔ امونیا مالیکیول (NH₃) کے لیے، نائٹروجن-ہائیڈروجن (N-H) سنگل بانڈ کی تجرباتی طور پر طے شدہ اوسط لمبائی تقریباً 1.017 Ångströms (Å) یا 101.7 پیکو میٹر ہے۔ آپشنز میں سب سے قریب ترین قدر 1.01 Å ہے۔"
  },
  {
    "id": "163",
    "text": "Using excess of fertilizers in order to get more quantity of crop turns the soil (TSTET 20 May 2024)\nفصل کی زیادہ مقدار حاصل کرنے کے لیے کھادوں کا زیادہ استعمال مٹی کو بنا دیتا ہے",
    "options": [
      "fertile\nزرخیز",
      "acidic or alkaline\nتیزابی یا الکلائن",
      "weak\nکمزور",
      "loose\nڈھیلی"
    ],
    "correct": "acidic or alkaline",
    "explanation": "کیمیائی کھادوں کے زیادہ استعمال سے مٹی کے pH توازن میں نمایاں تبدیلی آسکتی ہے۔ کھاد کی کیمیائی ساخت کے لحاظ سے، مٹی بہت زیادہ تیزابی یا الکلائن ہو سکتی ہے۔ یہ عدم توازن فائدہ مند مٹی کے सूक्ष्मजीवوں کو نقصان پہنچا سکتا ہے، پودوں کے ذریعے غذائی اجزاء کے جذب میں رکاوٹ بن سکتا ہے، اور مٹی کے انحطاط کا باعث بن سکتا ہے، جس سے بالآخر اس کی طویل مدتی زرخیزی کم ہو جاتی ہے۔"
  },
  {
    "id": "164",
    "text": "The usually seen infections in crops/plants in the form of white, black, yellow, brown spots or fluffy/powdery coating on leaves are caused by (TSTET 20 May 2024)\nفصلوں/پودوں میں عام طور پر دیکھے جانے والے انفیکشن جو سفید، سیاہ، پیلے، بھورے دھبوں یا پتوں پر پھولی ہوئی/پاؤڈر جیسی تہہ کی شکل میں ہوتے ہیں، اس کی وجہ سے ہوتے ہیں",
    "options": [
      "fungus\nفنگس",
      "virus\nوائرس",
      "bacteria\nبیکٹیریا",
      "pollution\nآلودگی"
    ],
    "correct": "fungus",
    "explanation": "بیان کردہ علامات—رنگین دھبے اور پتوں پر پاؤڈر جیسی یا پھولی ہوئی تہہ—پودوں میں فنگل بیماریوں کی کلاسک علامات ہیں۔ مثال کے طور پر، پاؤڈری پھپھوندی پتوں پر ایک سفید، پاؤڈر جیسی تہہ بناتی ہے، جبکہ مختلف زنگ اور جھلساؤ مختلف رنگوں کے دھبوں کا سبب بنتے ہیں۔ اگرچہ بیکٹیریا اور وائرس بھی پودوں کی بیماریوں کا سبب بنتے ہیں، لیکن یہ مخصوص بصری مظاہر فنگل پیتھوجینز کی سب سے زیادہ خصوصیت ہیں۔"
  },
  {
    "id": "165",
    "text": "The first material that was experimented upon by Edison, to be used as filament in electric bulb was: (TSTET 20 May 2024)\nوہ پہلا مواد جس پر ایڈیسن نے بجلی کے بلب میں فلامنٹ کے طور پر استعمال کرنے کے لیے تجربہ کیا تھا، وہ تھا:",
    "options": [
      "Copper\nتانبا",
      "Lead\nسیسہ",
      "Tungsten\nٹنگسٹن",
      "Platinum\nپلاٹینم"
    ],
    "correct": "Platinum",
    "explanation": "ایک دیرپا انکینڈیسنٹ لائٹ بلب کی تلاش میں، تھامس ایڈیسن اور ان کی ٹیم نے فلامنٹ کے لیے بہت سے مواد کا تجربہ کیا۔ جن پہلے مواد پر انہوں نے تجربہ کیا ان میں سے ایک پلاٹینم تھا۔ اس کا پگھلنے کا نقطہ مناسب طور پر زیادہ تھا لیکن یہ تجارتی طور پر قابل عمل مصنوعات کے لیے بہت مہنگا اور کافی پائیدار ثابت نہیں ہوا۔ ایڈیسن نے بعد میں کاربنائزڈ بانس فائبر کے ساتھ کامیابی حاصل کی، ٹنگسٹن کے صنعتی معیار بننے سے بہت پہلے۔"
  },
  {
    "id": "166",
    "text": "Changing of milk into curd is due to the development of this bacteria (TSTET 20 May 2024)\nدودھ کا دہی میں تبدیل ہونا اس بیکٹیریا کی نشوونما کی وجہ سے ہوتا ہے",
    "options": [
      "E-Coli\nای کولی",
      "Lacto Bacillus\nلیکٹو بیسیلس",
      "Pseudomonas maltophillia\nسیوڈوموناس مالٹوفیلیا",
      "Clostridium Khyveri\nکلوسٹریڈیم کھائیویری"
    ],
    "correct": "Lacto Bacillus",
    "explanation": "دودھ کا دہی میں تبدیل ہونا ایک فرمینٹیشن کا عمل ہے جو لیکٹک ایسڈ بیکٹیریا (LAB) کے ذریعے انجام دیا جاتا ہے۔ اس کے لیے بنیادی طور پر ذمہ دار بیکٹیریا *Lactobacillus* جینس سے ہے۔ یہ بیکٹیریا دودھ میں موجود لیکٹوز (چینی) کو کھاتے ہیں اور اسے لیکٹک ایسڈ میں تبدیل کرتے ہیں۔ تیزاب دودھ کے پروٹین (کیسین) کو جمنے کا سبب بنتا ہے، جس کے نتیجے میں دہی کی گاڑھی ساخت ہوتی ہے۔"
  },
  {
    "id": "167",
    "text": "\"Most of the today's life forms had variations that were accumulated over years to allow them survive better\". This was said by Charles Darwin in his book (TSTET 20 May 2024)\n\"آج کی زیادہ تر زندگی کی شکلوں میں تغیرات تھے جو سالوں میں جمع ہوئے تاکہ انہیں بہتر طور پر زندہ رہنے دیا جا سکے\"۔ یہ بات چارلس ڈارون نے اپنی کتاب میں کہی تھی",
    "options": [
      "Journal of the voyage\nسفر کا جرنل",
      "The Decent of Man and the Selection in Relation to Sex\nانسان کا زوال اور جنس کے حوالے سے انتخاب",
      "The origin of species\nانواع کا origen",
      "The Expression of the Emotions in Man and Animals\nانسان اور جانوروں میں جذبات کا اظہار"
    ],
    "correct": "The origin of species",
    "explanation": "یہ بیان قدرتی انتخاب کے ذریعے ارتقاء کے مرکزی خیال کو سمیٹتا ہے۔ چارلس ڈارون نے یہ انقلابی نظریہ اپنی تاریخی 1859 کی کتاب 'On the Origin of Species' میں پیش کیا۔ کتاب نے تجویز کیا کہ زندگی کا تنوع ارتقاء کے ایک شاخ دار نمونے کے ذریعے مشترکہ نزول سے پیدا ہوا، جو قدرتی انتخاب کے میکانزم کے ذریعے کارفرما ہے، جہاں بقا میں مدد کرنے والے تغیرات نسلوں تک منتقل ہوتے اور جمع ہوتے ہیں۔"
  },
  {
    "id": "168",
    "text": "Tissue that is responsible for transportation of water and salts from the roots is (TSTET 20 May 2024)\nجڑوں سے پانی اور نمکیات کی نقل و حمل کے لیے ذمہ دار ٹشو ہے",
    "options": [
      "Xylem\nزائلم",
      "Phloem\nفلوئم",
      "Meristematic tissue\nمیرسٹیمیٹک ٹشو",
      "Dermal tissue\nڈرمل ٹشو"
    ],
    "correct": "Xylem",
    "explanation": "زائلم ویسکولر پودوں میں دو قسم کے ٹرانسپورٹ ٹشوز میں سے ایک ہے۔ اس کا بنیادی کام جڑوں سے پانی اور تحلیل شدہ معدنیات کو پودے کے باقی حصوں تک پہنچانا ہے۔ یہ جسمانی مدد بھی فراہم کرتا ہے۔ فلوئم، دوسرا ٹرانسپورٹ ٹشو، فوٹو سنتھیسس کے دوران بننے والی شکر کو پتوں سے پودے کے دوسرے حصوں میں منتقل کرتا ہے۔"
  },
  {
    "id": "169",
    "text": "One of the following is NOT a characteristic feature of striated muscles. (TSTET 20 May 2024)\nمندرجہ ذیل میں سے ایک دھاری دار پٹھوں کی خصوصیت نہیں ہے۔",
    "options": [
      "They are unbranched\nوہ غیر شاخ دار ہوتے ہیں",
      "They have uninucleated cytoplasm\nان میں یک نیوکلیئس والا سائٹوپلازم ہوتا ہے",
      "They are Long\nوہ لمبے ہوتے ہیں",
      "They are cylindrical\nوہ بیلناکار ہوتے ہیں"
    ],
    "correct": "They have uninucleated cytoplasm",
    "explanation": "دھاری دار پٹھے، جنہیں کنکال کے پٹھے بھی کہا جاتا ہے، لمبے، بیلناکار اور غیر شاخ دار ریشے ہوتے ہیں۔ ایک اہم خصوصیت جو انہیں ممتاز کرتی ہے وہ یہ ہے کہ وہ کثیر نیوکلیئس والے ہوتے ہیں، یعنی ہر پٹھوں کے خلیے (ریشے) میں متعدد نیوکلیئس ہوتے ہیں۔ لہذا، یہ بیان کہ وہ یک نیوکلیئس والے ہیں (ایک نیوکلیئس رکھتے ہیں) غلط ہے۔"
  },
  {
    "id": "170",
    "text": "There are thousands of paddy varieties available throughout the world. Oryza Glaberrima variety is cultivated in (TSTET 20 May 2024)\nدنیا بھر میں دھان کی ہزاروں اقسام دستیاب ہیں۔ اورائزا گلیبریما قسم کی کاشت کی جاتی ہے",
    "options": [
      "China\nچین",
      "Africa\nافریقہ",
      "India\nبھارت",
      "Indonesia\nانڈونیشیا"
    ],
    "correct": "Africa",
    "explanation": "چاول کی دو بڑی کاشت کی جانے والی اقسام *Oryza sativa* (ایشیائی چاول) اور *Oryza glaberrima* (افریقی چاول) ہیں۔ جیسا کہ اس کے عام نام سے ظاہر ہوتا ہے، *Oryza glaberrima* کو سب سے پہلے مغربی افریقہ میں پالا گیا اور بنیادی طور پر وہیں کاشت کیا جاتا ہے۔ *Oryza sativa* وہ قسم ہے جو پورے ایشیا اور باقی دنیا میں اگائی جاتی ہے۔"
  },
  {
    "id": "171",
    "text": "The vein which join the anterior end of the right side of the heart and which collects blood from the anterior parts of the body (head and neck) is (TSTET 20 May 2024)\nوہ رگ جو دل کے دائیں جانب کے اگلے سرے سے جڑتی ہے اور جو جسم کے اگلے حصوں (سر اور گردن) سے خون جمع کرتی ہے، وہ ہے",
    "options": [
      "Septa\nسیپٹا",
      "Inferior Venacava\nانفیریئر وینا کاوا",
      "Superior Venacava\nسپیریئر وینا کاوا",
      "Aorta\nشہ رگ"
    ],
    "correct": "Superior Venacava",
    "explanation": "سپیریئر وینا کاوا ایک بڑی رگ ہے جو جسم کے اوپری نصف حصے (سر، گردن، اوپری اعضاء، اور سینے) سے آکسیجن کے بغیر خون کو دل کے دائیں ایٹریم میں واپس لانے کی ذمہ دار ہے۔ انفیریئر وینا کاوا جسم کے نچلے نصف حصے کے لیے یہی کام انجام دیتی ہے۔ شہ رگ (Aorta) وہ اہم شریان ہے جو آکسیجن والا خون دل سے دور لے جاتی ہے۔"
  },
  {
    "id": "172",
    "text": "The names for cropping seasons, 'Kharif' and 'Rabi' are derived from this language (TSTET 20 May 2024)\nفصلوں کے موسموں کے نام 'خریف' اور 'ربیع' اس زبان سے ماخوذ ہیں",
    "options": [
      "Urdu\nاردو",
      "Arabic\nعربی",
      "Mandarin\nمینڈارن",
      "Japanese\nجاپانی"
    ],
    "correct": "Arabic",
    "explanation": "برصغیر پاک و ہند میں مون سون اور موسم سرما کی فصلوں کے موسموں کی تعریف کے لیے استعمال ہونے والی اصطلاحات 'خریف' اور 'ربیع' عربی زبان سے نکلی ہیں۔ عربی میں، 'خریف' کا ترجمہ 'خزاں' اور 'ربیع' کا ترجمہ 'بہار' ہے، جو ان فصلوں کی کٹائی کے موسموں کی عکاسی کرتا ہے۔"
  },
  {
    "id": "173",
    "text": "Whenever pollen grains enter our body, they cause allergy due to the presence of these substances (TSTET 20 May 2024)\nجب بھی پولن کے دانے ہمارے جسم میں داخل ہوتے ہیں، تو وہ ان مادوں کی موجودگی کی وجہ سے الرجی کا سبب بنتے ہیں",
    "options": [
      "Magnesium\nمیگنیشیم",
      "Carbohydrates\nکاربوہائیڈریٹس",
      "Sulphur\nگندھک",
      "Nitrogenous substances\nنائٹروجنی مادے"
    ],
    "correct": "Nitrogenous substances",
    "explanation": "پولن الرجی پولن کے دانے پر یا اس کے اندر موجود مخصوص الرجین کی وجہ سے ہوتی ہے۔ یہ الرجین عام طور پر پروٹین یا گلائکوپروٹین ہوتے ہیں۔ پروٹین امینو ایسڈ سے بنے پیچیدہ مالیکیول ہیں، اور امینو ایسڈ میں ایک اہم عنصر نائٹروجن ہے۔ لہذا، ان الرجین کو نائٹروجنی مادوں کے طور پر درجہ بندی کیا جاتا ہے۔"
  },
  {
    "id": "174",
    "text": "In 1857, Gregor Johann Mendel started working on the problem of how variations were passed from one generation to the other in-- (TSTET 20 May 2024)\n1857 میں، گریگور جوہان مینڈل نے اس مسئلے پر کام شروع کیا کہ کس طرح تغیرات ایک نسل سے دوسری نسل میں منتقل ہوتے ہیں--",
    "options": [
      "a university\nایک یونیورسٹی",
      "the monastery garden\nخانقاہ کے باغ",
      "his personal laboratory\nاپنی ذاتی لیبارٹری",
      "a space lab\nایک خلائی لیب"
    ],
    "correct": "the monastery garden",
    "explanation": "گریگور مینڈل، جو ایک آگسٹینی راہب تھے، نے 1856 اور 1863 کے درمیان وراثت اور جینیات پر اپنے اہم تجربات کیے۔ انہوں نے یہ محتاط کام برنو، جو اب جمہوریہ چیک کا حصہ ہے، میں سینٹ تھامس ایبی (خانقاہ) کے باغ میں مٹر کے پودوں کی کراس بریڈنگ کرکے انجام دیا۔"
  },
  {
    "id": "175",
    "text": "A student will be able to say that \"we wear white, loose cotton clothes in summer\". It is related to (TSTET 20 May 2024)\nایک طالب علم یہ کہنے کے قابل ہو گا کہ \"ہم گرمیوں میں سفید، ڈھیلے سوتی کپڑے پہنتے ہیں\"۔ اس کا تعلق ہے",
    "options": [
      "Application\nاطلاق",
      "Knowledge\nعلم",
      "Analysis\nتجزیہ",
      "Evaluation\nتشخیص"
    ],
    "correct": "Application",
    "explanation": "یہ سوال بلوم کی تعلیمی مقاصد کی درجہ بندی کا حوالہ دیتا ہے۔ طالب علم محض ایک حقیقت کو یاد نہیں کر رہا ہے (علم)، بلکہ وہ ایک عملی، حقیقی دنیا کی صورتحال سے نمٹنے کے لیے سیکھے ہوئے سائنسی اصولوں (مثلاً، حرارت کی عکاسی، جذب، اور ہوا کی گردش کے بارے میں) کا استعمال کر رہا ہے۔ ٹھوس حالات میں تجریدی تصورات کا یہ استعمال سیکھنے کی 'اطلاق' کی سطح کی خصوصیت ہے۔"
  },
  {
    "id": "176",
    "text": "The most appropriate teaching method to teach \"Verify the formula for finding the focal length of a lens\" (TSTET 20 May 2024)\n\"لینس کی فوکل لمبائی معلوم کرنے کے فارمولے کی تصدیق کریں\" کو پڑھانے کا سب سے مناسب تدریسی طریقہ",
    "options": [
      "Inductive method\nاستقرائی طریقہ",
      "Deductive method\nاستخراجی طریقہ",
      "Heuristic method\nہیورسٹک طریقہ",
      "Lecture method\nلیکچر کا طریقہ"
    ],
    "correct": "Deductive method",
    "explanation": "استخراجی طریقہ میں عمومی اصولوں سے مخصوص مثالوں کی طرف استدلال کرنا شامل ہے۔ اس منظر نامے میں، طالب علم کو لینس کا فارمولا (ایک عمومی اصول) فراہم کیا جاتا ہے اور اس سے یہ تصدیق کرنے کے لیے ایک تجربہ کرنے کو کہا جاتا ہے کہ یہ ایک مخصوص لینس (ایک مخصوص مثال) کے لیے کام کرتا ہے۔ 'تصدیق' کا یہ عمل استخراجی تدریس اور سیکھنے کی ایک کلاسک مثال ہے۔ استقرائی طریقہ میں پہلے ڈیٹا اکٹھا کرنا اور پھر فارمولا اخذ کرنا شامل ہوگا۔"
  },
  {
    "id": "177",
    "text": "Learning the lesson, 'natural resources' inculcates the following value in the students (TSTET 20 May 2024)\nسبق 'قدرتی وسائل' سیکھنا طلباء میں درج ذیل قدر پیدا کرتا ہے",
    "options": [
      "Types of renewable resources\nقابل تجدید وسائل کی اقسام",
      "Types of non-renewable resources\nناقابل تجدید وسائل کی اقسام",
      "Use of resources\nوسائل کا استعمال",
      "Conservation of resources\nوسائل کا تحفظ"
    ],
    "correct": "Conservation of resources",
    "explanation": "جبکہ سبق میں وسائل کی اقسام اور استعمال جیسی حقائق پر مبنی معلومات شامل ہوں گی، لیکن اس کا بنیادی تعلیمی *مقصد* یہ ہے کہ وسائل کو ذمہ داری سے استعمال کرنے اور انہیں محفوظ رکھنے کی اہمیت کو دل میں بٹھایا جائے۔ مستقبل کے لیے ذمہ داری اور دانشمندانہ انتظام کا یہ اخلاقی اصول تحفظ کی قدر کے طور پر بہترین طور پر بیان کیا گیا ہے۔"
  },
  {
    "id": "178",
    "text": "Identify the example for controlled experiment from the following (TSTET 20 May 2024)\nمندرجہ ذیل میں سے کنٹرول شدہ تجربے کی مثال کی نشاندہی کریں",
    "options": [
      "Do all liquids boil at the same temperature?\nکیا تمام مائعات ایک ہی درجہ حرارت پر ابلتے ہیں؟",
      "What are the common features of insects?\nکیڑوں کی مشترکہ خصوصیات کیا ہیں؟",
      "Effect of COVID pandemic on social development of children\nبچوں کی سماجی ترقی پر کوویڈ وبائی مرض کا اثر",
      "Does pesticide insecticide help in increased production of rice?\nکیا کیڑے مار دوا چاول کی پیداوار میں اضافے میں مدد کرتی ہے؟"
    ],
    "correct": "Does pesticide insecticide help in increased production of rice?",
    "explanation": "ایک کنٹرول شدہ تجربہ ایک مخصوص مفروضے کی جانچ کے لیے ڈیزائن کیا جاتا ہے جس میں ایک آزاد متغیر کو تبدیل کیا جاتا ہے جبکہ دیگر تمام متغیرات کو مستقل رکھا جاتا ہے۔ کیڑے مار ادویات اور چاول کی پیداوار کے بارے میں سوال کو ایک کنٹرول شدہ تجربے کے طور پر ترتیب دیا جا سکتا ہے: چاول کے دو ایک جیسے پلاٹ اگائے جاتے ہیں، ایک کیڑے مار دوا کے ساتھ (تجرباتی گروپ) اور ایک بغیر (کنٹرول گروپ)۔ دیگر آپشنز یا تو تقابلی سوالات، وضاحتی تحقیقات، یا مشاہداتی مطالعے ہیں، جو ایک کنٹرول شدہ تجربے کے معیار پر پورا نہیں اترتے ہیں۔"
  },
  {
    "id": "179",
    "text": "Which of the following statements relating to comparison of micro teaching and traditional teaching is correct? (TSTET 20 May 2024)\nمائیکرو ٹیچنگ اور روایتی تدریس کے موازنہ سے متعلق مندرجہ ذیل میں سے کون سا بیان درست ہے؟",
    "options": [
      "Traditional teaching is a complex activity, micro teaching is relatively simple\nروایتی تدریس ایک پیچیدہ سرگرمی ہے، مائیکرو ٹیچنگ نسبتاً آسان ہے",
      "In traditional teaching the normal class size is 5 to 10 students, in micro teaching it is 30 to 40 students\nروایتی تدریس میں عام کلاس کا سائز 5 سے 10 طلباء ہوتا ہے، مائیکرو ٹیچنگ میں یہ 30 سے 40 طلباء ہوتا ہے",
      "In traditional teaching the duration of the period is 45 to 50 minutes, in micro teaching it is 05 to 10 minutes\nروایتی تدریس میں پیریڈ کا دورانیہ 45 سے 50 منٹ ہوتا ہے، مائیکرو ٹیچنگ میں یہ 05 سے 10 منٹ ہوتا ہے",
      "In traditional teaching class is conducted in laboratory situation, in micro teaching it is uncontrolled class room situation\nروایتی تدریس میں کلاس لیبارٹری کی صورتحال میں منعقد کی جاتی ہے، مائیکرو ٹیچنگ میں یہ بے قابو کلاس روم کی صورتحال ہوتی ہے"
    ],
    "correct": "Traditional teaching is a complex activity, micro teaching is relatively simple",
    "explanation": "مائیکرو ٹیچنگ اساتذہ کی تربیت کی ایک تکنیک ہے جو عام تدریسی عمل کو آسان بناتی ہے۔ روایتی کلاس روم کی تدریس پیچیدہ ہوتی ہے، جس میں ایک مکمل سبق، طلباء کے ایک بڑے گروپ، اور بیک وقت متعدد تدریسی مہارتوں کا انتظام درکار ہوتا ہے۔ مائیکرو ٹیچنگ ان عناصر کو کم کرتی ہے—ایک ہی مہارت پر توجہ مرکوز کرتی ہے، ہم عمروں کے ایک چھوٹے گروپ کے ساتھ، ایک مختصر مدت کے لیے—جس سے یہ ایک آسان، زیادہ مرکوز سرگرمی بن جاتی ہے جو مشق اور رائے کے لیے ڈیزائن کی گئی ہے۔"
  },
  {
    "id": "180",
    "text": "While working in a lab if by mistake a person inhales chlorine fumes, the person should be made to smell (TSTET 20 May 2024)\nلیب میں کام کرتے ہوئے اگر کوئی شخص غلطی سے کلورین کے دھوئیں میں سانس لے لے تو اسے سونگھنا چاہیے",
    "options": [
      "Ethanol\nایتھنول",
      "Ammonia\nامونیا",
      "Sodium carbonate\nسوڈیم کاربونیٹ",
      "Acetone\nایسیٹون"
    ],
    "correct": "Ammonia",
    "explanation": "یہ ایک روایتی ابتدائی طبی امداد کا اقدام ہے۔ کلورین گیس (Cl₂) تیزابی ہے اور پھیپھڑوں میں نمی کے ساتھ رد عمل ظاہر کرکے ہائیڈروکلورک ایسڈ (HCl) بناتی ہے۔ امونیا (NH₃) ایک کمزور اساس ہے۔ پتلے امونیا کے بخارات میں سانس لینے سے سانس کی نالی میں بننے والے تیزاب کو بے اثر کرنے میں مدد مل سکتی ہے، جس سے بے ضرر امونیم کلورائیڈ (NH₄Cl) بنتا ہے، اس طرح نقصان کم ہوتا ہے۔ جدید حفاظتی پروٹوکول تازہ ہوا میں فوری منتقلی اور طبی امداد حاصل کرنے پر زور دیتے ہیں۔"
  },
  {
    "id": 181,
    "text": "The period of revolution of the planet Venus is (approximately) (TSTET 01 June 2024)\nسیارہ زہرہ کے انقلاب کی مدت (تقریباً) ہے",
    "options": [
      "88 days\n88 دن",
      "225 days\n225 دن",
      "687 days\n687 دن",
      "12 years\n12 سال"
    ],
    "correct": "225 days",
    "explanation": "انقلاب کی مدت وہ وقت ہے جو ایک سیارہ سورج کے گرد ایک چکر مکمل کرنے میں لیتا ہے۔ زہرہ کے لیے، یہ مدت تقریباً 224.7 زمینی دن ہے، جو 225 دن بنتی ہے۔ 88 دن عطارد کی مداری مدت ہے، 687 دن مریخ کے لیے ہے، اور تقریباً 12 سال مشتری کے لیے ہے۔"
  },
  {
    "id": 182,
    "text": "To find out the density of any liquid, we use (TSTET 01 June 2024)\nکسی بھی مائع کی کثافت معلوم کرنے کے لیے، ہم استعمال کرتے ہیں",
    "options": [
      "Hydrometer\nہائیڈرو میٹر",
      "Barometer\nبیرومیٹر",
      "Odometer\nاوڈومیٹر",
      "Hygrometer\nہائیگرومیٹر"
    ],
    "correct": "Hydrometer",
    "explanation": "ہائیڈرو میٹر ایک آلہ ہے جو مائعات کی مخصوص کشش ثقل (یا نسبتی کثافت) کی پیمائش کے لیے استعمال ہوتا ہے۔ بیرومیٹر ماحولیاتی دباؤ کی پیمائش کرتا ہے، اوڈومیٹر طے شدہ فاصلے کی پیمائش کرتا ہے، اور ہائیگرومیٹر نمی کی پیمائش کرتا ہے۔"
  },
  {
    "id": 183,
    "text": "The focal length of a lens suggested to a person with Hypermetropia is 75 cm. Find the distance of near point. (TSTET 01 June 2024)\nہائپر میٹروپیا والے شخص کو تجویز کردہ لینس کی فوکل لمبائی 75 سینٹی میٹر ہے۔ قریب ترین نقطہ کا فاصلہ معلوم کریں۔",
    "options": [
      "-37.5 cm",
      "37.5 cm",
      "18.75 cm",
      "-18.75 cm"
    ],
    "correct": "37.5 cm",
    "explanation": "ہائپر میٹروپک آنکھ کے لیے، لینس قریبی چیز (عام قریب ترین نقطہ، u = -25 سینٹی میٹر) کی تصویر شخص کے اصل قریب ترین نقطہ (v) پر بناتا ہے۔ لینس فارمولا $1/f = 1/v - 1/u$ استعمال کرتے ہوئے: دیا گیا ہے f = +75 سینٹی میٹر (ہائپر میٹروپیا کے لیے محدب لینس) اور u = -25 سینٹی میٹر۔ $1/75 = 1/v - 1/(-25) \\implies 1/75 = 1/v + 1/25 \\implies 1/v = 1/75 - 3/75 = -2/75$۔ لہذا، $v = -37.5$ سینٹی میٹر۔ قریب ترین نقطہ کا فاصلہ 37.5 سینٹی میٹر ہے۔"
  },
  {
    "id": 184,
    "text": "Identify the INCORRECT statement among the following. (TSTET 01 June 2024)\nمندرجہ ذیل میں سے غلط بیان کی نشاندہی کریں۔",
    "options": [
      "Newton's first law of motion apply to a single body.\nنیوٹن کا حرکت کا پہلا قانون ایک ہی جسم پر لاگو ہوتا ہے۔",
      "Newton's second law of motion apply to a single body.\nنیوٹن کا حرکت کا دوسرا قانون ایک ہی جسم پر لاگو ہوتا ہے۔",
      "Newton's third law of motion apply to a single body.\nنیوٹن کا حرکت کا تیسرا قانون ایک ہی جسم پر لاگو ہوتا ہے۔",
      "Newton's third law of motion applies to an interaction between the two bodies.\nنیوٹن کا حرکت کا تیسرا قانون دو جسموں کے درمیان تعامل پر لاگو ہوتا ہے۔"
    ],
    "correct": "Newton's third law of motion apply to a single body.",
    "explanation": "نیوٹن کا تیسرا قانون کہتا ہے کہ ہر عمل کے لیے ایک مساوی اور مخالف ردعمل ہوتا ہے۔ یہ قانون بنیادی طور پر دو جسموں کے درمیان تعامل کو بیان کرتا ہے؛ قوتیں ہمیشہ جوڑوں میں ہوتی ہیں۔ لہذا، یہ ایک واحد، الگ تھلگ جسم پر لاگو نہیں کیا جا سکتا۔ پہلے اور دوسرے قوانین، تاہم، قوتوں کے زیر اثر ایک ہی جسم کی حرکت کو بیان کرتے ہیں۔"
  },
  {
    "id": 185,
    "text": "In series connection of resistors, which of the following remains constant in the circuit? (TSTET 01 June 2024)\nرزسٹرز کے سیریز کنکشن میں، مندرجہ ذیل میں سے کون سی چیز سرکٹ میں مستقل رہتی ہے؟",
    "options": [
      "Power\nطاقت",
      "Current\nکرنٹ",
      "Electro motive force\nالیکٹرو موٹیو فورس",
      "Voltage\nوولٹیج"
    ],
    "correct": "Current",
    "explanation": "ایک سیریز سرکٹ میں، اجزاء سرے سے سرے تک جڑے ہوتے ہیں، جو ایک ہی راستہ بناتے ہیں۔ چونکہ چارج کے بہاؤ کے لیے صرف ایک ہی راستہ ہوتا ہے، اس لیے برقی کرنٹ سرکٹ کے ہر نقطہ پر اور ہر جزو کے ذریعے ایک جیسا ہوتا ہے۔ تاہم، وولٹیج اجزاء کے درمیان تقسیم ہو جاتا ہے۔"
  },
  {
    "id": 186,
    "text": "Identify the correct pair of ore and its metal among the following (TSTET 01 June 2024)\nمندرجہ ذیل میں سے دھات اور اس کی کچ دھات کی صحیح جوڑی کی شناخت کریں",
    "options": [
      "Epsom salt: Mg\nایپسم سالٹ: Mg",
      "Cinnabar: Zn\nسنابار: Zn",
      "Haematite: Mn\nہیمیٹائٹ: Mn",
      "Rock salt: Ca\nراک سالٹ: Ca"
    ],
    "correct": "Epsom salt: Mg",
    "explanation": "ایپسم سالٹ ہائیڈریٹڈ میگنیشیم سلفیٹ ($MgSO_4 \\cdot 7H_2O$) ہے، جو میگنیشیم (Mg) کا ایک ذریعہ ہے۔ دیگر جوڑیاں غلط ہیں: سنابار ($HgS$) مرکری (Hg) کی کچ دھات ہے، ہیمیٹائٹ ($Fe_2O_3$) آئرن (Fe) کی کچ دھات ہے، اور راک سالٹ ($NaCl$) سوڈیم (Na) کی کچ دھات ہے۔"
  },
  {
    "id": 187,
    "text": "Identify the values of 'X' and 'Y' in the following chemical reaction. $Na_{2}CO_{3}+\\underline{X}HCl\\rightarrow\\underline{Y}NaCl+H_{2}O+CO_{2}$ (TSTET 01 June 2024)\nمندرجہ ذیل کیمیائی تعامل میں 'X' اور 'Y' کی قدریں شناخت کریں۔ $Na_{2}CO_{3}+\\underline{X}HCl\\rightarrow\\underline{Y}NaCl+H_{2}O+CO_{2}$",
    "options": [
      "X=1, Y=1",
      "X=2, Y=1",
      "X=1, Y=2",
      "X=2, Y=2"
    ],
    "correct": "X=2, Y=2",
    "explanation": "کیمیائی مساوات کو متوازن کرنے کے لیے: ری ایکٹنٹ کی طرف، 2 Na ایٹم ہیں۔ اسے متوازن کرنے کے لیے، پروڈکٹ کی طرف Y کا 2 ہونا ضروری ہے، جس سے 2 NaCl بنتا ہے۔ اب پروڈکٹ کی طرف 2 Cl ایٹم ہیں، لہذا ری ایکٹنٹ کی طرف X کا 2 ہونا ضروری ہے تاکہ 2 HCl بن سکے۔ متوازن مساوات $Na_{2}CO_{3}+2HCl\\rightarrow 2NaCl+H_{2}O+CO_{2}$ ہے۔"
  },
  {
    "id": 188,
    "text": "The rate of diffusion of gases is (TSTET 01 June 2024)\nگیسوں کے پھیلاؤ کی شرح ہے",
    "options": [
      "higher than that of liquids or solids\nمائعات یا ٹھوس سے زیادہ",
      "lower than that of liquids or solids\nمائعات یا ٹھوس سے کم",
      "higher than that of liquids and lower than that of solids\nمائعات سے زیادہ اور ٹھوس سے کم",
      "lower than that of liquids and higher than that of solids\nمائعات سے کم اور ٹھوس سے زیادہ"
    ],
    "correct": "higher than that of liquids or solids",
    "explanation": "پھیلاؤ ذرات کی حرکت ہے جو زیادہ ارتکاز والے علاقے سے کم ارتکاز والے علاقے کی طرف ہوتی ہے۔ گیسوں میں، ذرات بہت دور ہوتے ہیں اور بے ترتیب اور تیزی سے حرکت کرتے ہیں، جس سے پھیلاؤ کی شرح بہت زیادہ ہوتی ہے۔ مائعات میں، ذرات قریب ہوتے ہیں اور زیادہ آہستہ حرکت کرتے ہیں، جس کے نتیجے میں پھیلاؤ سست ہوتا ہے۔ ٹھوس میں، ذرات ایک جالی میں جڑے ہوتے ہیں، جس سے پھیلاؤ انتہائی سست ہو جاتا ہے۔ اس طرح، گیسیں سب سے تیزی سے پھیلتی ہیں۔"
  },
  {
    "id": 189,
    "text": "Rancidity is a/an (TSTET 01 June 2024)\nرینسیڈیٹی ایک/ایک ہے",
    "options": [
      "Precipitation reaction\nپریسیپیٹیشن رد عمل",
      "Reduction reaction\nتخفیف کا رد عمل",
      "Oxidation reaction\nآکسیڈیشن رد عمل",
      "Neutralization reaction\nبے اثری کا رد عمل"
    ],
    "correct": "Oxidation reaction",
    "explanation": "رینسیڈیٹی چکنائی، تیل اور دیگر لپڈز کی کیمیائی تحلیل ہے۔ یہ اس وقت ہوتا ہے جب یہ مادے ہوا (آکسیجن)، روشنی یا نمی کے سامنے آتے ہیں، جس کی وجہ سے وہ آکسیڈیشن سے گزرتے ہیں۔ اس عمل کے نتیجے میں ناپسندیدہ بدبو اور ذائقے پیدا ہوتے ہیں۔"
  },
  {
    "id": 190,
    "text": "Atomicity of Sulphur (TSTET 01 June 2024)\nسلفر کی ایٹومیسٹی",
    "options": [
      "Monoatomic\nمونو ایٹامک",
      "Diatomic\nڈائی ایٹامک",
      "Triatomic\nٹرائی ایٹامک",
      "Octatomic\nآکٹا ایٹامک"
    ],
    "correct": "Octatomic",
    "explanation": "ایٹومیسٹی کسی عنصر کے مالیکیول میں ایٹموں کی تعداد ہے۔ سلفر کا سب سے مستحکم ایلوٹروپ ایک تاج کی شکل کا حلقہ ہے جو 8 سلفر ایٹموں پر مشتمل ہے۔ اس کا مالیکیولر فارمولا $S_8$ ہے، جو اسے آکٹا ایٹامک بناتا ہے۔"
  },
  {
    "id": 191,
    "text": "The maximum value of 'l' for n=5 (TSTET 01 June 2024)\nn=5 کے لیے 'l' کی زیادہ سے زیادہ قدر",
    "options": [
      "3",
      "6",
      "4",
      "11"
    ],
    "correct": "4",
    "explanation": "کوانٹم نمبرز میں، 'n' پرنسپل کوانٹم نمبر ہے اور 'l' ایزیموتھل کوانٹم نمبر ہے۔ 'l' کی قدر 'n' پر منحصر ہے اور 0 سے (n-1) تک ہو سکتی ہے۔ n=5 کے لیے، 'l' کی ممکنہ قدریں 0، 1، 2، 3، اور 4 ہیں۔ لہذا، زیادہ سے زیادہ قدر 4 ہے۔"
  },
  {
    "id": 192,
    "text": "How many electrons do Group III A elements lose to form stable ions? (TSTET 01 June 2024)\nگروپ III A کے عناصر مستحکم آئن بنانے کے لیے کتنے الیکٹران کھوتے ہیں؟",
    "options": [
      "5",
      "2",
      "1",
      "3"
    ],
    "correct": "3",
    "explanation": "گروپ III A (یا گروپ 13) کے عناصر، جیسے ایلومینیم (Al)، اپنے بیرونی ترین شیل میں تین ویلنس الیکٹران رکھتے ہیں۔ پچھلی نوبل گیس کی طرح ایک مستحکم الیکٹران ترتیب حاصل کرنے کے لیے، وہ ان تین الیکٹرانوں کو کھو دیتے ہیں، جس سے +3 چارج والا کیٹائن (مثلاً، $Al^{3+}$) بنتا ہے۔"
  },
  {
    "id": 193,
    "text": "These blood cells move like amoeba to attack and destroy by engulfing the foreign materials inside them and are called scavengers (TSTET 01 June 2024)\nیہ خون کے خلیے امیبا کی طرح حرکت کرتے ہیں تاکہ ان کے اندر موجود غیر ملکی مواد کو نگل کر حملہ کریں اور تباہ کریں اور انہیں صفائی کرنے والے کہا جاتا ہے",
    "options": [
      "Erythrocytes\nاریتھروسائٹس",
      "Monocytes\nمونوسائٹس",
      "Lymphocytes\nلیمفوسائٹس",
      "Eosinophils\nایسینوفلز"
    ],
    "correct": "Monocytes",
    "explanation": "مونوسائٹس سفید خون کے خلیوں کی ایک قسم ہیں جو فاگوسائٹک ہیں، یعنی وہ غیر ملکی ذرات، پیتھوجینز اور مردہ خلیوں کو نگل سکتے ہیں۔ وہ امیبا جیسی حرکت کا استعمال کرتے ہوئے حرکت کرتے ہیں اور اکثر انہیں جسم کے 'صفائی کرنے والے' کہا جاتا ہے۔ اریتھروسائٹس سرخ خون کے خلیے ہیں، اور لیمفوسائٹس مخصوص مدافعتی ردعمل میں شامل ہوتے ہیں۔"
  },
  {
    "id": 194,
    "text": "Identify the most forgetful animal (TSTET 01 June 2024)\nسب سے زیادہ بھولنے والے جانور کی شناخت کریں",
    "options": [
      "Mouse\nچوہا",
      "Cat\nبلی",
      "Rabbit\nخرگوش",
      "Squirrel\nگلہری"
    ],
    "correct": "Squirrel",
    "explanation": "گلہریاں سردیوں کے لیے گری دار میوے چھپانے (دفن کرنے) کی اپنی عادت کے لیے مشہور ہیں۔ تاہم، وہ ان گری دار میووں کا ایک اہم حصہ بازیافت کرنے میں ناکام رہتی ہیں، مؤثر طریقے سے 'بھول' جاتی ہیں کہ انہوں نے انہیں کہاں دفن کیا تھا۔ یہ رویہ جنگلات کی تخلیق نو میں ایک اہم کردار ادا کرتا ہے کیونکہ بھولی ہوئی گری دار میوے نئے درختوں میں اگتے ہیں۔"
  },
  {
    "id": 195,
    "text": "Amoeba keeps on changing its shape by protruding out its body. These projections that help in its locomotion are called (TSTET 01 June 2024)\nامیبا اپنے جسم کو باہر نکال کر اپنی شکل بدلتا رہتا ہے۔ یہ ابھار جو اس کی حرکت میں مدد کرتے ہیں کہلاتے ہیں",
    "options": [
      "Pseudopodia\nسیوڈوپوڈیا",
      "Tentacles\nٹینٹیکلز",
      "Fins\nپنکھ",
      "Cilia\nسیلیا"
    ],
    "correct": "Pseudopodia",
    "explanation": "امیبا سیوڈوپوڈیا کا استعمال کرتے ہوئے حرکت کرتا اور کھاتا ہے، جس کا مطلب ہے 'جھوٹے پاؤں'۔ یہ خلیے کے جسم کے عارضی، سائٹوپلازم سے بھرے ہوئے پھیلاؤ ہیں جنہیں باہر نکالا اور واپس لیا جا سکتا ہے۔ ٹینٹیکلز، پنکھ، اور سیلیا دوسرے، زیادہ پیچیدہ جانداروں میں حرکت کے لیے مخصوص ڈھانچے ہیں۔"
  },
  {
    "id": 196,
    "text": "Nimbin, an alkaloid which is used as an Antiseptic is produced in the seeds, bark and leaves of (TSTET 01 June 2024)\nنمبن، ایک الکلائڈ جو اینٹی سیپٹک کے طور پر استعمال ہوتا ہے، اس کے بیجوں، چھال اور پتوں میں پیدا ہوتا ہے",
    "options": [
      "Cinchona officinalis\nسنکونا آفیسینیلس",
      "Papaver somniferum\nپاپاور سومنیفرم",
      "Azadirachta indica\nازادیراچتا انڈیکا",
      "Datura stramonium\nداتورا اسٹرامونیم"
    ],
    "correct": "Azadirachta indica",
    "explanation": "ازادیراچتا انڈیکا نیم کے درخت کا نباتاتی نام ہے۔ یہ طبی خصوصیات والے مختلف مرکبات پیدا کرنے کے لیے مشہور ہے، بشمول نمبن، جس میں اینٹی سیپٹک، اینٹی انفلامیٹری، اور دیگر فائدہ مند اثرات ہوتے ہیں۔ سنکونا کوئینین پیدا کرتا ہے، پاپاور سومنیفرم افیون پیدا کرتا ہے، اور داتورا ٹروپین الکلائڈز پیدا کرتا ہے۔"
  },
  {
    "id": 197,
    "text": "The type of reproductive process seen in Hydra is (TSTET 01 June 2024)\nہائیڈرا میں دیکھا جانے والا تولیدی عمل کی قسم ہے",
    "options": [
      "Regeneration\nتجدید",
      "Fission\nفشن",
      "Fragmentation\nفرگمنٹیشن",
      "Budding\nبڈنگ"
    ],
    "correct": "Budding",
    "explanation": "ہائیڈرا بنیادی طور پر بڈنگ کے ذریعے غیر جنسی تولید کرتا ہے۔ اس عمل میں، ایک نیا فرد والدین کے جسم پر ایک ابھار یا بڈ سے تیار ہوتا ہے۔ بڈ بڑھتا ہے، ٹینٹیکلز اور منہ تیار کرتا ہے، اور پھر آزادانہ طور پر رہنے کے لیے الگ ہو جاتا ہے۔ جبکہ ہائیڈرا میں مضبوط تجدیدی صلاحیتیں بھی ہوتی ہیں، بڈنگ اس کی تولید کی خصوصیت ہے۔"
  },
  {
    "id": 198,
    "text": "One of the following does not belong to classification of cell types suggested by Woese (TSTET 01 June 2024)\nمندرجہ ذیل میں سے ایک ووز کی طرف سے تجویز کردہ خلیوں کی اقسام کی درجہ بندی سے تعلق نہیں رکھتا",
    "options": [
      "Monera\nمونیرا",
      "the Archaea\nآرکیا",
      "the Bacteria\nبیکٹیریا",
      "the Eukarya\nیوکیریا"
    ],
    "correct": "Monera",
    "explanation": "کارل ووز نے درجہ بندی کا تین ڈومین والا نظام تجویز کیا: بیکٹیریا، آرکیا، اور یوکیریا۔ اس نظام نے پرانے پانچ سلطنتوں والے ماڈل کی جگہ لے لی۔ مونیرا پانچ سلطنتوں والے نظام میں ایک سلطنت تھی جس میں تمام پروکیریوٹس شامل تھے۔ ووز کی تحقیق سے پتہ چلا کہ پروکیریوٹس دو الگ الگ ڈومینز (بیکٹیریا اور آرکیا) میں تقسیم تھے، جس سے مونیرا کی سلطنت اس کی درجہ بندی میں فرسودہ ہو گئی۔"
  },
  {
    "id": 199,
    "text": "This vitamin helps bones and skin in remaining healthy (TSTET 01 June 2024)\nیہ وٹامن ہڈیوں اور جلد کو صحت مند رکھنے میں مدد کرتا ہے",
    "options": [
      "Vitamin D\nوٹامن ڈی",
      "Vitamin A\nوٹامن اے",
      "Vitamin K\nوٹامن کے",
      "Vitamin B\nوٹامن بی"
    ],
    "correct": "Vitamin D",
    "explanation": "وٹامن ڈی کیلشیم اور فاسفورس کے جذب کو فروغ دے کر ہڈیوں کی صحت میں ایک اہم کردار ادا کرتا ہے، جو ہڈیوں کی معدنیات کے لیے ضروری معدنیات ہیں۔ اس کی کمی سے رکٹس جیسی بیماریاں ہو سکتی ہیں۔ جبکہ دیگر وٹامنز بھی جلد اور ہڈیوں کی صحت کی حمایت کرتے ہیں، وٹامن ڈی مضبوط ہڈیوں کو برقرار رکھنے کے لیے سب سے زیادہ براہ راست منسلک ہے۔"
  },
  {
    "id": 200,
    "text": "The largest single mass of granite in the world is found in (TSTET 01 June 2024)\nدنیا میں گرینائٹ کا سب سے بڑا واحد تودہ پایا جاتا ہے",
    "options": [
      "Australia\nآسٹریلیا",
      "China\nچین",
      "Bhutan\nبھوٹان",
      "USA\nامریکہ"
    ],
    "correct": "USA",
    "explanation": "ایل کیپٹن، جو یوسیمیٹی نیشنل پارک، کیلیفورنیا، امریکہ میں واقع ہے، کو وسیع پیمانے پر دنیا کا سب سے بڑا بے نقاب گرینائٹ مونولیتھ سمجھا جاتا ہے۔ یہ گرینائٹ کا ایک واحد، مسلسل بلاک ہے، جو اسے کوہ پیماؤں اور ماہرین ارضیات کے لیے ایک مشہور تاریخی نشان بناتا ہے۔"
  },
  {
    "id": 201,
    "text": "These are the longest cells in human body (TSTET 01 June 2024)\nیہ انسانی جسم کے سب سے لمبے خلیے ہیں",
    "options": [
      "Nerve cells\nعصبی خلیے",
      "Bone cells\nہڈیوں کے خلیے",
      "Muscle cells\nعضلاتی خلیے",
      "Blood cells\nخون کے خلیے"
    ],
    "correct": "Nerve cells",
    "explanation": "عصبی خلیے، یا نیورونز، انسانی جسم کے سب سے لمبے خلیے ہیں۔ ایک واحد نیورون کا ایکسون، جیسے کہ سیائیٹک نرو میں پایا جانے والا، ریڑھ کی ہڈی کے نچلے حصے سے لے کر پیر کی انگلیوں تک پھیل سکتا ہے، جس کی لمبائی ایک میٹر سے زیادہ ہو سکتی ہے۔"
  },
  {
    "id": 202,
    "text": "One of the following is not a natural indicator (TSTET 01 June 2024)\nمندرجہ ذیل میں سے ایک قدرتی اشارہ نہیں ہے",
    "options": [
      "China rose\nچائنا روز",
      "Turmeric\nہلدی",
      "Phenolphthalein\nفینولفتھالین",
      "Litmus\nلٹمس"
    ],
    "correct": "Phenolphthalein",
    "explanation": "فینولفتھالین ایک مصنوعی، یا انسان کا بنایا ہوا، کیمیائی مرکب ہے جو تیزاب-اساس اشارے کے طور پر استعمال ہوتا ہے۔ دیگر اختیارات — چائنا روز (گڑہل)، ہلدی، اور لٹمس (لائکین سے حاصل کردہ) — سب قدرتی ذرائع سے حاصل کیے جاتے ہیں۔"
  },
  {
    "id": 203,
    "text": "The first person to explain the process of fermentation (TSTET 01 June 2024)\nتخمیر (fermentation) کے عمل کی وضاحت کرنے والا پہلا شخص",
    "options": [
      "John Dalton\nجان ڈالٹن",
      "Louis Pasteur\nلوئس پاسچر",
      "Alexander Fleming\nالیگزینڈر فلیمنگ",
      "Dmitri Mendeleev\nدمتری مینڈیلیف"
    ],
    "correct": "Louis Pasteur",
    "explanation": "لوئس پاسچر نے 1850 کی دہائی میں اپنے تجربات کے ذریعے یہ ثابت کیا کہ تخمیر ایک حیاتیاتی عمل ہے جو زندہ خردبینی جانداروں جیسے خمیر کی وجہ سے ہوتا ہے، نہ کہ ایک سادہ کیمیائی رد عمل جیسا کہ پہلے مانا جاتا تھا۔ یہ دریافت مائکرو بایولوجی کے شعبے کے لیے بنیادی حیثیت رکھتی تھی۔"
  },
  {
    "id": 204,
    "text": "Choose the incorrect pair from the following. (TSTET 01 June 2024)\nمندرجہ ذیل میں سے غلط جوڑے کا انتخاب کریں۔",
    "options": [
      "Producers - Grass\nپیدا کنندگان - گھاس",
      "Primary consumers - Deer\nبنیادی صارفین - ہرن",
      "Secondary consumers - Fox\nثانوی صارفین - لومڑی",
      "Tertiary consumers - Rabbit\nثالثی صارفین - خرگوش"
    ],
    "correct": "Tertiary consumers - Rabbit",
    "explanation": "یہ سوال ٹرافک سطحوں (trophic levels) سے متعلق ہے۔ ایک خرگوش ایک سبزی خور ہے جو پیدا کنندگان (جیسے گھاس) کو کھاتا ہے، جو اسے ایک بنیادی صارف بناتا ہے۔ ایک ثالثی صارف وہ جانور ہے جو ثانوی صارفین کو کھاتا ہے۔ لہذا، 'ثالثی صارفین - خرگوش' کا جوڑا غلط ہے۔"
  },
  {
    "id": 205,
    "text": "To develop the habit of observation, identification, classification etc., the best method to teach Science is (TSTET 01 June 2024)\nمشاہدے، شناخت، درجہ بندی وغیرہ کی عادت کو فروغ دینے کے لیے، سائنس پڑھانے کا بہترین طریقہ ہے",
    "options": [
      "Lecture method\nلیکچر کا طریقہ",
      "Laboratory method\nلیبارٹری کا طریقہ",
      "Lecture cum demonstration method\nلیکچر مع مظاہرے کا طریقہ",
      "Historical method\nتاریخی طریقہ"
    ],
    "correct": "Laboratory method",
    "explanation": "لیبارٹری کا طریقہ ایک عملی طریقہ ہے جہاں طلباء فعال طور پر تجربات اور سرگرمیوں میں مشغول ہوتے ہیں۔ یہ براہ راست تجربہ اہم سائنسی عمل کی مہارتوں کو فروغ دینے کے لیے ضروری ہے جیسے محتاط مشاہدات کرنا، متغیرات اور مادوں کی شناخت کرنا، اور دیکھی گئی خصوصیات کی بنیاد پر جانداروں یا ڈیٹا کی درجہ بندی کرنا۔"
  },
  {
    "id": 206,
    "text": "The following is not a characteristic of a good test (TSTET 01 June 2024)\nمندرجہ ذیل میں سے ایک اچھے ٹیسٹ کی خصوصیت نہیں ہے",
    "options": [
      "Validity\nمعتبریت",
      "Reliability\nقابل اعتمادی",
      "Objectivity\nمعروضیت",
      "Subjectivity\nموضوعیت"
    ],
    "correct": "Subjectivity",
    "explanation": "معتبریت (جو جانچنا مقصود ہو وہی جانچے)، قابل اعتمادی (مستقل نتائج دے)، اور معروضیت (نمبر دینے میں تعصب کا اثر نہ ہو) سب ایک اچھے ٹیسٹ کی خصوصیات ہیں۔ موضوعیت، جہاں نمبر دینا اسکورر کی ذاتی رائے پر منحصر ہوتا ہے، معروضیت کے برعکس ہے اور اسے جانچ کے ڈیزائن میں ایک خامی سمجھا جاتا ہے کیونکہ یہ غیر منصفانہ اور غیر مستقل نتائج کا باعث بن سکتی ہے۔"
  },
  {
    "id": 207,
    "text": "The first step in Herbartian steps of lesson planning is (TSTET 01 June 2024)\nسبق کی منصوبہ بندی کے ہربرٹین مراحل میں پہلا مرحلہ ہے",
    "options": [
      "Preparation\nتیاری",
      "Presentation\nپیشکش",
      "Association\nوابستگی",
      "Generalization\nعمومیت"
    ],
    "correct": "Preparation",
    "explanation": "سبق کی منصوبہ بندی کا ہربرٹین ماڈل پانچ مراحل پر مشتمل ہے۔ سب سے پہلا مرحلہ تیاری (یا تعارف) ہے، جہاں استاد طلباء کو نئے علم کے لیے ان کے پچھلے تجربات سے جوڑ کر اور موضوع کے بارے میں ان کا تجسس بیدار کر کے تیار کرتا ہے۔"
  },
  {
    "id": 208,
    "text": "Providing freedom to the students to ask questions and take part in discussions. This quality refers to a (TSTET 01 June 2024)\nطلباء کو سوالات پوچھنے اور مباحثوں میں حصہ لینے کی آزادی فراہم کرنا۔ یہ خوبی ایک ۔۔۔۔۔ کی طرف اشارہ کرتی ہے۔",
    "options": [
      "good science textbook\nاچھی سائنس کی نصابی کتاب",
      "good science teacher\nاچھا سائنس کا استاد",
      "good science curriculum\nاچھا سائنس کا نصاب",
      "good science laboratory\nاچھی سائنس لیبارٹری"
    ],
    "correct": "good science teacher",
    "explanation": "ایک کھلا، تحقیقات پر مبنی کلاس روم کا ماحول فراہم کرنا جہاں طلباء سوالات پوچھنے اور مباحثوں میں فعال طور پر حصہ لینے میں محفوظ اور حوصلہ افزائی محسوس کریں، ایک اچھے سائنس کے استاد کی کلیدی خصوصیت ہے۔ یہ تدریسی مہارت تنقیدی سوچ اور گہری سمجھ کو فروغ دیتی ہے۔"
  },
  {
    "id": 209,
    "text": "Learning science through investigation is (TSTET 01 June 2024)\nتحقیق کے ذریعے سائنس سیکھنا ہے",
    "options": [
      "Heuristic method\nہیورسٹک طریقہ",
      "Project method\nپروجیکٹ کا طریقہ",
      "Demonstration method\nمظاہرے کا طریقہ",
      "Assignment method\nاسائنمنٹ کا طریقہ"
    ],
    "correct": "Heuristic method",
    "explanation": "ہیورسٹک طریقہ ایک مسئلہ حل کرنے کا طریقہ ہے جہاں طلباء خود تحقیق کے ذریعے چیزیں دریافت کرکے سیکھتے ہیں۔ 'ہیورسٹک' کی اصطلاح یونانی لفظ سے نکلی ہے جس کا مطلب ہے 'تلاش کرنا' یا 'دریافت کرنا'۔ استاد ایک رہنما کے طور پر کام کرتا ہے، طلباء کو خود مسائل کے جوابات تلاش کرنے کی ترغیب دیتا ہے۔"
  },
  {
    "id": 210,
    "text": "The component of a science kit which is used to make simple electric circuits is (TSTET 01 June 2024)\nسائنس کٹ کا وہ جزو جو سادہ برقی سرکٹ بنانے کے لیے استعمال ہوتا ہے",
    "options": [
      "Connecting wires\nجوڑنے والے تار",
      "Copper Sulphate\nکاپر سلفیٹ",
      "Iron filings\nلوہے کا برادہ",
      "Magnesium ribbon\nمیگنیشیم ربن"
    ],
    "correct": "Connecting wires",
    "explanation": "ایک سادہ برقی سرکٹ بنانے کے لیے، بجلی کے منبع (جیسے بیٹری) کو ایک لوڈ (جیسے بلب) سے جوڑنے کے لیے ایک موصل راستے کی ضرورت ہوتی ہے۔ جوڑنے والے تار برقی رو کو بہنے کے لیے یہ راستہ فراہم کرتے ہیں۔ دیگر اشیاء مختلف تجربات کے لیے استعمال ہوتی ہیں: کاپر سلفیٹ برق پاشیدگی کے لیے، لوہے کا برادہ مقناطیسیت کے لیے، اور میگنیشیم ربن کیمیائی تعاملات کے لیے۔"
  },
  {
    "id": 211,
    "text": "Choose the correct pair of short term crop. (TSTET 2017)\nکم مدتی فصل کی صحیح جوڑی کا انتخاب کریں۔",
    "options": [
      "Jowar-Green gram.\nجوار-مونگ",
      "Green gram-Black gram.\nمونگ-ماش",
      "Black gram-Red gram.\nماش-ارہر",
      "Red gram-Jowar.\nارہر-جوار"
    ],
    "correct": "Green gram-Black gram.",
    "explanation": "کم مدتی یا قلیل مدتی فصلیں وہ ہوتی ہیں جن کا زندگی کا دورانیہ بہت کم ہوتا ہے اور وہ چند مہینوں میں کٹائی کے لیے تیار ہو جاتی ہیں۔ مونگ اور ماش دونوں دالیں ہیں جو عام طور پر 60-90 دنوں میں پک جاتی ہیں۔ اس کے برعکس، ارہر (تور دال) اور جوار طویل مدتی فصلیں ہیں جن کو پکنے میں کافی زیادہ وقت لگتا ہے۔"
  },
  {
    "id": 212,
    "text": "Identify the odd disease based on the group of causative agent. (TSTET 2017)\nسبب بننے والے ایجنٹ کے گروہ کی بنیاد پر مختلف بیماری کی شناخت کریں۔",
    "options": [
      "Typhoid\nٹائیفائیڈ",
      "Cholera\nہیضہ",
      "Tuberculosis\nتپ دق",
      "Swine-flu\nسوائن فلو"
    ],
    "correct": "Swine-flu",
    "explanation": "گروہ بندی کی بنیاد بیماری پیدا کرنے والے پیتھوجین کی قسم ہے۔ ٹائیفائیڈ (سالمونیلا ٹائفی کی وجہ سے)، ہیضہ (وبریو کولیری کی وجہ سے)، اور تپ دق (مائکوبیکٹیریم ٹیوبرکلوسس کی وجہ سے) سب بیکٹیریل بیماریاں ہیں۔ تاہم، سوائن فلو ایک وائرل بیماری ہے جو H1N1 انفلوئنزا وائرس کی وجہ سے ہوتی ہے۔ لہذا، سوائن فلو اس گروہ سے الگ ہے۔"
  },
  {
    "id": 213,
    "text": "These are called microscopic policeman. (TSTET 2017)\nانہیں خوردبینی پولیس مین کہا جاتا ہے۔",
    "options": [
      "Erythrocytes\nاریتھروسائٹس",
      "Blood platelets\nخون کے پلیٹلیٹس",
      "Neutrophils\nنیوٹروفیلز",
      "Monocytes\nمونوسائٹس"
    ],
    "correct": "Neutrophils",
    "explanation": "نیوٹروفیلز خون کے سفید خلیوں کی ایک قسم ہیں جو مدافعتی نظام کی پہلی دفاعی لائن کے طور پر کام کرتے ہیں۔ وہ فیگوسائٹوسس انجام دیتے ہیں، جس کا مطلب ہے کہ وہ حملہ آور خردبینی جانداروں جیسے بیکٹیریا کو نگل کر تباہ کر دیتے ہیں۔ اس حفاظتی، جنگجو کردار نے انہیں جسم کے 'خوردبینی پولیس مین' کا لقب دیا ہے۔ اریتھروسائٹس آکسیجن لے جاتے ہیں، اور پلیٹلیٹس خون جمنے میں مدد کرتے ہیں۔"
  },
  {
    "id": 214,
    "text": "Animal with sharp incisors..... (TSTET 2017)\nتیز انسائزرز (incisors) والا جانور.....",
    "options": [
      "Lion\nشیر",
      "Rat\nچوہا",
      "Cat\nبلی",
      "Dog\nکتا"
    ],
    "correct": "Rat",
    "explanation": "انسائزرز سامنے کے دانت ہوتے ہیں جو کاٹنے اور کترنے کے لیے استعمال ہوتے ہیں۔ کترنے والے جانور، جیسے چوہے، اپنے بڑے، تیز، اور مسلسل بڑھنے والے انسائزرز کے جوڑے کی وجہ سے پہچانے جاتے ہیں جو سخت مواد کو کترنے کے لیے مخصوص ہوتے ہیں۔ شیر، بلی، اور کتے جیسے گوشت خور جانوروں میں گوشت پھاڑنے کے لیے زیادہ نمایاں کینائنز (canines) ہوتے ہیں، جبکہ ان کے انسائزرز نسبتاً چھوٹے ہوتے ہیں۔"
  },
  {
    "id": 215,
    "text": "Find the incorrect statement. (TSTET 2017)\nغلط بیان تلاش کریں۔",
    "options": [
      "Abiotic and biotic factors are structural components of ecosystem.\nغیر حیاتی اور حیاتی عوامل ماحولیاتی نظام کے ساختی اجزاء ہیں۔",
      "Detritus food chain starts from litter.\nڈیٹرائٹس فوڈ چین کچرے سے شروع ہوتی ہے۔",
      "'Aphids' occupy \"2nd trophic level\" in the food chain.\n'ایفڈز' غذائی زنجیر میں \"دوسری ٹرافک سطح\" پر قابض ہیں۔",
      "Herbivores occupy first trophic level in a food chain.\nسبزی خور غذائی زنجیر میں پہلی ٹرافک سطح پر قابض ہوتے ہیں۔"
    ],
    "correct": "Herbivores occupy first trophic level in a food chain.",
    "explanation": "یہ بیان غلط ہے۔ ٹرافک سطحیں اس پوزیشن کو بیان کرتی ہیں جو ایک جاندار غذائی زنجیر میں رکھتا ہے۔ پہلی ٹرافک سطح پر ہمیشہ پیدا کنندگان (پودے، الجی) ہوتے ہیں جو اپنی خوراک خود بناتے ہیں۔ سبزی خور بنیادی صارفین ہوتے ہیں کیونکہ وہ پیدا کنندگان کو کھاتے ہیں، لہذا وہ دوسری ٹرافک سطح پر قابض ہوتے ہیں۔"
  },
  {
    "id": 216,
    "text": "The cell-organelle which helps in manufacturing of lipids.... (TSTET 2017)\nخلیے کا وہ آرگنیل جو لپڈز (lipids) بنانے میں مدد کرتا ہے....",
    "options": [
      "Golgi complex\nگولجی کمپلیکس",
      "Chloroplast\nکلوروپلاسٹ",
      "Smooth endoplasmic Reticulum.\nہموار اینڈوپلازمک ریٹیکولم",
      "Mitochondrion\nمائٹوکونڈرین"
    ],
    "correct": "Smooth endoplasmic Reticulum.",
    "explanation": "ہموار اینڈوپلازمک ریٹیکولم (SER) ایک خلیے کے اندر جھلیوں کا ایک نیٹ ورک ہے جس کے افعال میں لپڈز، سٹیرایڈ ہارمونز کی ترکیب، اور نقصان دہ میٹابولک ضمنی مصنوعات کی سم ربائی شامل ہے۔ گولجی کمپلیکس پروٹین میں ترمیم اور پیکجنگ کرتا ہے، کلوروپلاسٹ ضیائی تالیف انجام دیتے ہیں، اور مائٹوکونڈرین خلوی تنفس کے ذمہ دار ہیں۔"
  },
  {
    "id": 217,
    "text": "The stage in mitosis in which chromosomes are aligned at the equatorial plane of the cell. (TSTET 2017)\nمائٹوسس (mitosis) کا وہ مرحلہ جس میں کروموسوم خلیے کے استوائی جہاز پر قطار میں ہوتے ہیں۔",
    "options": [
      "Prophase\nپروفیز",
      "Metaphase\nمیٹا فیز",
      "Anaphase\nاینافیز",
      "Telophase\nٹیلوفیز"
    ],
    "correct": "Metaphase",
    "explanation": "میٹا فیز کے دوران، جو مائٹوسس کا دوسرا مرحلہ ہے، سپنڈل فائبرز کروموسوم کے سینٹرومیرز سے جڑ جاتے ہیں، جو پھر خود کو میٹا فیز پلیٹ کے ساتھ سیدھ میں کر لیتے ہیں، ایک خیالی لکیر جو خلیے کے دو قطبوں سے مساوی فاصلے پر ہوتی ہے۔ یہ سیدھ اس بات کو یقینی بناتی ہے کہ ہر نئے بننے والے بیٹی خلیے کو کروموسوم کا ایک جیسا سیٹ ملے۔"
  },
  {
    "id": 218,
    "text": "'Edema' is related with this system. (TSTET 2017)\n'اڈیما' (Edema) اس نظام سے متعلق ہے۔",
    "options": [
      "Digestive system\nنظام ہضم",
      "Respiratory system\nنظام تنفس",
      "Nervous system\nعصبی نظام",
      "Lymphatic system\nلمفیٹک نظام"
    ],
    "correct": "Lymphatic system",
    "explanation": "اڈیما جسم کے ٹشوز میں اضافی سیال پھنس جانے کی وجہ سے ہونے والی سوجن ہے۔ لمفیٹک نظام کا بنیادی کام اس اضافی انٹرسٹیشیل سیال (لمف) کو جمع کرنا اور اسے خون کے دھارے میں واپس کرنا ہے۔ جب لمفیٹک نظام کو نقصان پہنچتا ہے یا وہ مسدود ہو جاتا ہے، تو یہ سیال کو صحیح طریقے سے نہیں نکال پاتا، جس کی وجہ سے یہ جمع ہو جاتا ہے اور اڈیما کا سبب بنتا ہے۔"
  },
  {
    "id": 219,
    "text": "Water reaches top of the tall trees due to the phenomenon .... (TSTET 2017)\nپانی اونچے درختوں کی چوٹی تک اس مظہر کی وجہ سے پہنچتا ہے ....",
    "options": [
      "Transpiration\nٹرانسپریشن",
      "Respiration\nتنفس",
      "Photosynthesis\nضیائی تالیف",
      "Guttation\nگٹیشن"
    ],
    "correct": "Transpiration",
    "explanation": "اونچے درختوں میں پانی کی اوپر کی طرف حرکت کے لیے بنیادی محرک قوت ٹرانسپریشنل کھنچاؤ ہے۔ ٹرانسپریشن پتوں کی سطحوں سے پانی کے بخارات بننے کا عمل ہے۔ یہ عمل زائلم کی نالیوں میں ایک منفی دباؤ یا تناؤ پیدا کرتا ہے، جو پانی کے مسلسل کالم کو جڑوں سے اوپر کی طرف کھینچتا ہے۔ اس میکانزم کو کوہیژن-ٹینشن تھیوری کے نام سے جانا جاتا ہے۔"
  },
  {
    "id": 220,
    "text": "Match the animals with their excretory products and choose the correct answer. I. Urea (A) Freshwater fish II. Uric acid (B) Frog III. Ammonia (C) Snake (TSTET 2017)\nجانوروں کو ان کے اخراجی مصنوعات کے ساتھ ملائیں اور صحیح جواب کا انتخاب کریں۔ I. یوریا (A) میٹھے پانی کی مچھلی II. یورک ایسڈ (B) مینڈک III. امونیا (C) سانپ",
    "options": [
      "I-B, II-C, III-A",
      "I-A, II-C, III-B",
      "I-B, II-A, III-C",
      "I-A, II-B, III-C"
    ],
    "correct": "I-B, II-C, III-A",
    "explanation": "بنیادی نائٹروجنی فضلہ جانور کے مسکن اور پانی کی دستیابی پر منحصر ہے۔ \n- (III) امونیا انتہائی زہریلا لیکن پانی میں حل پذیر ہے، لہذا اسے آبی جانور جیسے (A) میٹھے پانی کی مچھلی خارج کرتی ہے۔ \n- (I) یوریا کم زہریلا ہے اور اس کے اخراج کے لیے کچھ پانی کی ضرورت ہوتی ہے، جو خشکی کے جانوروں اور جل تھلیوں جیسے (B) مینڈکوں کے لیے عام ہے۔ \n- (II) یورک ایسڈ کو بہت کم پانی کی ضرورت ہوتی ہے اور اسے ایک پیسٹ کے طور پر خارج کیا جاتا ہے، جو رینگنے والے جانوروں جیسے (C) سانپوں میں پانی کے تحفظ کے لیے ایک موافقت ہے۔ \nلہذا، صحیح جوڑی ہے یوریا-مینڈک (I-B)، یورک ایسڈ-سانپ (II-C)، اور امونیا-میٹھے پانی کی مچھلی (III-A)۔"
  },
  {
    "id": 221,
    "text": "This is a modified stem. (TSTET 2017)\nیہ ایک تبدیل شدہ تنا ہے۔",
    "options": [
      "Carrot\nگاجر",
      "Radish\nمولی",
      "Potato\nآلو",
      "Sweet potato\nشکرقندی"
    ],
    "correct": "Potato",
    "explanation": "آلو ایک تنے کا ٹیوبر (stem tuber) ہے، جو ایک تبدیل شدہ زیر زمین تنا ہے جو خوراک ذخیرہ کرتا ہے۔ آلو کی 'آنکھیں' گانٹھیں (nodes) ہوتی ہیں جن میں کلیاں ہوتی ہیں جو نئے تنے اگا سکتی ہیں۔ اس کے برعکس، گاجر اور مولی تبدیل شدہ موسل جڑیں (taproots) ہیں، اور شکرقندی ایک تبدیل شدہ ٹیوبرس جڑ (tuberous root) ہے۔"
  },
  {
    "id": 222,
    "text": "Smooth muscles are found in (TSTET 2017)\nہموار عضلات پائے جاتے ہیں",
    "options": [
      "Arm\nبازو",
      "Leg\nٹانگ",
      "Heart\nدل",
      "Alimentary canal\nغذائی نالی"
    ],
    "correct": "Alimentary canal",
    "explanation": "ہموار عضلات غیر ارادی عضلات ہیں جو اندرونی کھوکھلے اعضاء کی دیواروں میں پائے جاتے ہیں۔ غذائی نالی (ہاضمے کی نالی) میں ہموار عضلات ہوتے ہیں جو تال کے ساتھ سکڑتے ہیں (پیرسٹالسس) تاکہ خوراک کو آگے بڑھایا جا سکے۔ بازو اور ٹانگ کے عضلات ارادی ڈھانچے کے عضلات ہیں۔ دل ایک خاص غیر ارادی عضلے پر مشتمل ہوتا ہے جسے قلبی عضلہ (cardiac muscle) کہتے ہیں۔"
  },
  {
    "id": 223,
    "text": "Find the time period of the wave, whose frequency is 400 Hz. (TSTET 2017)\nاس لہر کا ٹائم پیریڈ معلوم کریں، جس کی فریکوئنسی 400 ہرٹز ہے۔",
    "options": [
      "0.0033 s",
      "0.0011 s",
      "0.0025 s",
      "0.0044 s"
    ],
    "correct": "0.0025 s",
    "explanation": "ایک لہر کا ٹائم پیریڈ (T) اس کی فریکوئنسی (f) کا معکوس ہوتا ہے۔ ان کا تعلق فارمولے $T = 1/f$ سے دیا جاتا ہے۔ دی گئی فریکوئنسی f = 400 Hz ہے، لہذا ٹائم پیریڈ $T = 1 / 400 = 0.0025$ سیکنڈ ہے۔"
  },
  {
    "id": 224,
    "text": "Which of the following friction has self adjusting force? (TSTET 2017)\nمندرجہ ذیل میں سے کس رگڑ میں خود کو ایڈجسٹ کرنے والی قوت ہوتی ہے؟",
    "options": [
      "Fluid friction\nمائع رگڑ",
      "Static friction\nساکن رگڑ",
      "Sliding friction\nپھسلنے والی رگڑ",
      "Rolling friction\nگھومنے والی رگڑ"
    ],
    "correct": "Static friction",
    "explanation": "ساکن رگڑ وہ قوت ہے جو دو آپس میں جڑی سطحوں کے درمیان حرکت کے آغاز کی مخالفت کرتی ہے۔ یہ ایک خود کو ایڈجسٹ کرنے والی قوت ہے کیونکہ اس کی مقدار لگائی گئی قوت کے بالکل برابر اور مخالف ہوتی ہے، ایک زیادہ سے زیادہ حد (حدی رگڑ) تک۔ اگر لگائی گئی قوت بڑھتی ہے، تو ساکن رگڑ بھی بڑھ جاتی ہے تاکہ شے کو ساکن رکھا جا سکے، جب تک کہ لگائی گئی قوت زیادہ سے زیادہ ساکن رگڑ سے تجاوز نہ کر جائے۔"
  },
  {
    "id": 225,
    "text": "The minimum distance from real object to a real image in a concave mirror is (TSTET 2017)\nمقعر آئینے میں حقیقی شے سے حقیقی شبیہ کا کم سے کم فاصلہ ہے",
    "options": [
      "f",
      "2f",
      "f/2",
      "0"
    ],
    "correct": "0",
    "explanation": "ایک مقعر آئینے کے لیے، ایک حقیقی شے اور اس کی حقیقی شبیہ کے درمیان کم سے کم فاصلہ اس وقت ہوتا ہے جب شے کو مرکزِ انحنا (C) پر رکھا جاتا ہے۔ اس مخصوص نقطہ پر (جو آئینے سے 2f کے فاصلے پر ہے)، آئینہ اسی مقام (C) پر اسی سائز کی ایک حقیقی، الٹی شبیہ بناتا ہے۔ لہذا، شے اور شبیہ کے درمیان فاصلہ صفر ہے۔"
  },
  {
    "id": 226,
    "text": "We feel warm after finishing our bath under the shower on a hot day, is due to .... (TSTET 2017)\nگرم دن میں شاور کے نیچے نہانے کے بعد ہم گرمی محسوس کرتے ہیں، اس کی وجہ ہے ....",
    "options": [
      "Humidity\nنمی",
      "Condensation\nتکثیف",
      "Evaporation\nتبخیر",
      "Freezing\nانجماد"
    ],
    "correct": "Condensation",
    "explanation": "تکثیف وہ عمل ہے جس میں آبی بخارات مائع پانی میں تبدیل ہو جاتے ہیں، اور یہ ایک حرارت زا عمل ہے، یعنی یہ حرارت (تبخیر کی مخفی حرارت) خارج کرتا ہے۔ ایک گرم، مرطوب دن میں، ہوا میں بہت زیادہ آبی بخارات ہوتے ہیں۔ شاور کے بعد، آپ کی جلد اور اس پر موجود پانی آس پاس کی ہوا سے قدرے ٹھنڈا ہو سکتا ہے۔ یہ ہوا میں موجود آبی بخارات کو آپ کی جلد پر منجمد ہونے کا سبب بن سکتا ہے، جس سے حرارت خارج ہوتی ہے اور آپ کو گرمی محسوس ہوتی ہے۔"
  },
  {
    "id": 227,
    "text": "The lens which can form real and virtual images in air, is (TSTET 2017)\nوہ عدسہ جو ہوا میں حقیقی اور مجازی دونوں شبیہیں بنا سکتا ہے، ہے",
    "options": [
      "Plano concave\nپلانو مقعر",
      "Plano convex\nپلانو محدب",
      "Bi concave\nدوہرا مقعر",
      "Bi convex\nدوہرا محدب"
    ],
    "correct": "Bi convex",
    "explanation": "ایک مقارب عدسہ، جیسے کہ دوہرا محدب یا پلانو محدب عدسہ، حقیقی اور مجازی دونوں طرح کی شبیہیں بنانے کی صلاحیت رکھتا ہے۔ یہ ایک حقیقی، الٹی شبیہ بناتا ہے جب شے کو فوکل لمبائی سے باہر رکھا جاتا ہے۔ یہ ایک مجازی، سیدھی، اور بڑی شبیہ بناتا ہے جب شے کو فوکل لمبائی کے اندر رکھا جاتا ہے۔ مباعد عدسے (مقعر) صرف مجازی شبیہیں بنا سکتے ہیں۔"
  },
  {
    "id": 228,
    "text": "Find the length of the conductor which is moving with a speed of 10 m/s in the direction perpendicular to the direction of magnetic field of induction 0.6T, if it induces an emf of 6V between the ends of the conductor. (TSTET 2017)\nاس موصل کی لمبائی معلوم کریں جو 10 میٹر فی سیکنڈ کی رفتار سے 0.6 ٹیسلا کی مقناطیسی فیلڈ کی سمت کے عمودی سمت میں حرکت کر رہا ہے، اگر یہ موصل کے سروں کے درمیان 6 وولٹ کا ای ایم ایف پیدا کرتا ہے۔",
    "options": [
      "0.6 m",
      "6 m",
      "1 m",
      "1.2 m"
    ],
    "correct": "1 m",
    "explanation": "ایک موصل جس کی لمبائی L ہے اور جو مقناطیسی فیلڈ B کے عمودی سمت میں v کی رفتار سے حرکت کر رہا ہے، میں پیدا ہونے والی الیکٹرو موٹیو فورس (emf, ε) حرکی ای ایم ایف کے فارمولے سے دی جاتی ہے: $ε = B * L * v$۔ ہمیں لمبائی L معلوم کرنی ہے۔ فارمولے کو دوبارہ ترتیب دینے سے $L = ε / (B * v)$ حاصل ہوتا ہے۔ دی گئی قدروں کو ڈالنے پر: $L = 6 V / (0.6 T * 10 m/s) = 6 / 6 = 1$ میٹر۔"
  },
  {
    "id": 229,
    "text": "The boiling point of Argon is (TSTET 2017)\nآرگون کا نقطہ ابال ہے",
    "options": [
      "-183°C",
      "-186°C",
      "-196°C",
      "-193°C"
    ],
    "correct": "-186°C",
    "explanation": "یہ نوبل گیسوں کی طبیعی خصوصیات کے بارے میں ایک حقائق پر مبنی سوال ہے۔ آرگون (Ar) کا نقطہ ابال -185.8°C ہے، جسے -186°C تک گول کیا جاتا ہے۔ مقابلے کے لیے، آکسیجن کا نقطہ ابال -183°C اور نائٹروجن کا -196°C ہے۔"
  },
  {
    "id": 230,
    "text": "Power supply to our home from the electric pole will be interrupted due to formation of the metal oxide layer on the electric wire. The metal oxide is... (TSTET 2017)\nبجلی کے کھمبے سے ہمارے گھر کو بجلی کی فراہمی برقی تار پر دھاتی آکسائیڈ کی تہہ بننے کی وجہ سے منقطع ہو جائے گی۔ دھاتی آکسائیڈ...",
    "options": [
      "Electric wire breaks up.\nبرقی تار ٹوٹ جاتی ہے۔",
      "Electric wire damages.\nبرقی تار کو نقصان پہنچتا ہے۔",
      "Works as electrical insulator.\nبرقی انسولیٹر کے طور پر کام کرتی ہے۔",
      "None of these.\nان میں سے کوئی نہیں"
    ],
    "correct": "Works as electrical insulator.",
    "explanation": "سوال دھاتی آکسائیڈ کی اس تہہ کی خاصیت کے بارے میں پوچھ رہا ہے جو رکاوٹ کا سبب بنتی ہے۔ زیادہ تر دھاتی آکسائیڈ، جیسے ایلومینیم آکسائیڈ جو اوور ہیڈ پاور لائنوں پر بنتا ہے، بجلی کے ناقص موصل ہوتے ہیں۔ یہ آکسائیڈ کی تہہ ایک برقی انسولیٹر کے طور پر کام کرتی ہے، جو کنکشن پوائنٹس پر مزاحمت کو بڑھاتی ہے اور کرنٹ کے بہاؤ میں رکاوٹ ڈالتی ہے، جس سے بجلی کی فراہمی منقطع ہو سکتی ہے۔"
  },
  {
    "id": 231,
    "text": "Arrange the following in the increasing order of their pH value. (a) gastric fluid (b) milk of Magnesia (c) blood (d) lemon juice (TSTET 2017)\nمندرجہ ذیل کو ان کی pH قدر کی بڑھتی ہوئی ترتیب میں ترتیب دیں۔ (a) معدے کا رس (b) ملک آف میگنیشیا (c) خون (d) لیموں کا رس",
    "options": [
      "a, b, d, c",
      "a, d, b, c",
      "a, c, b, d",
      "a, d, c, b"
    ],
    "correct": "a, d, c, b",
    "explanation": "pH کی بڑھتی ہوئی ترتیب کا مطلب ہے سب سے زیادہ تیزابی (سب سے کم pH) سے سب سے زیادہ اساسی (سب سے زیادہ pH) کی طرف ترتیب دینا۔ تخمینی pH قدریں یہ ہیں: \n- (a) معدے کا رس: pH ~ 1.5-3.5\n- (d) لیموں کا رس: pH ~ 2-3\n- (c) خون: pH ~ 7.4\n- (b) ملک آف میگنیشیا: pH ~ 10.5\nلہذا، pH کی درست بڑھتی ہوئی ترتیب ہے معدے کا رس، لیموں کا رس، خون، اور آخر میں ملک آف میگنیشیا (a, d, c, b)۔"
  },
  {
    "id": 232,
    "text": "In the electro magnetic spectrum, which of the following rays have more wavelength, is .... (TSTET 2017)\nبرقی مقناطیسی طیف میں، مندرجہ ذیل میں سے کس شعاع کی طول موج زیادہ ہوتی ہے، ....",
    "options": [
      "Gamma-rays\nگاما شعاعیں",
      "IR-rays\nانفراریڈ شعاعیں",
      "X-rays\nایکس رے",
      "Radio-waves\nریڈیو لہریں"
    ],
    "correct": "Radio-waves",
    "explanation": "برقی مقناطیسی طیف کو طول موج کے مطابق ترتیب دیا جاتا ہے۔ بڑھتی ہوئی طول موج کی ترتیب میں، یہ سلسلہ ہے: گاما شعاعیں، ایکس رے، بالائے بنفشی، مرئی روشنی، انفراریڈ (IR)، مائیکرو ویوز، ریڈیو لہریں۔ فراہم کردہ اختیارات میں سے، ریڈیو لہروں کی طول موج سب سے لمبی (زیادہ) اور فریکوئنسی سب سے کم ہوتی ہے۔"
  },
  {
    "id": 233,
    "text": "Element with atomic number 15 and mass number 31 is present in (TSTET 2017)\nایٹمی نمبر 15 اور کمیت نمبر 31 والا عنصر موجود ہے",
    "options": [
      "Group 15 and Period 4\nگروپ 15 اور پیریڈ 4",
      "Group 15 and Period 3\nگروپ 15 اور پیریڈ 3",
      "Group 5 and Period 3\nگروپ 5 اور پیریڈ 3",
      "Group 5 and Period 4\nگروپ 5 اور پیریڈ 4"
    ],
    "correct": "Group 15 and Period 3",
    "explanation": "ایٹمی نمبر 15 فاسفورس (P) عنصر سے مطابقت رکھتا ہے۔ اس کی الیکٹرانک تشکیل 1s² 2s² 2p⁶ 3s² 3p³ ہے۔ \n- پیریڈ کا تعین سب سے زیادہ پرنسپل انرجی لیول (n) سے ہوتا ہے، جو کہ 3 ہے۔ لہذا، یہ پیریڈ 3 میں ہے۔ \n- چونکہ آخری الیکٹران p-آربیٹل میں داخل ہوتا ہے، یہ ایک p-بلاک عنصر ہے۔ p-بلاک عناصر کے لیے گروپ نمبر 10 + (ویلنس الیکٹرانوں کی تعداد) ہے۔ فاسفورس میں 5 ویلنس الیکٹران ہیں (2 3s میں اور 3 3p میں)۔ اس طرح، گروپ 10 + 5 = 15 ہے۔"
  },
  {
    "id": 234,
    "text": "We get Silver metal (Ag) in the form of precipitation by the reaction of dicyanoargentate ions with this powder, is (TSTET 2017)\nہم ڈائی سائنوارجنٹیٹ آئنوں کے اس پاؤڈر کے ساتھ تعامل سے چاندی کی دھات (Ag) کو تہہ نشینی کی شکل میں حاصل کرتے ہیں، وہ ہے",
    "options": [
      "Aluminium dust\nایلومینیم کی دھول",
      "Copper dust\nتانبے کی دھول",
      "Magnesium dust\nمیگنیشیم کی دھول",
      "Zinc dust\nزنک کی دھول"
    ],
    "correct": "Zinc dust",
    "explanation": "یہ سوال چاندی نکالنے کے لیے سائینائیڈ کے عمل (ہائیڈرومیٹلرجی) میں ایک اہم قدم بیان کرتا ہے۔ چاندی کو اس کی کچ دھات سے سائینائیڈ محلول کا استعمال کرتے ہوئے ایک حل پذیر کمپلیکس، ڈائی سائنوارجنٹیٹ(I) ($[Ag(CN)₂]⁻$) بنانے کے لیے نکالا جاتا ہے۔ چاندی کو بازیافت کرنے کے لیے، ایک زیادہ الیکٹرو پازیٹو (زیادہ تعامل پذیر) دھات شامل کی جاتی ہے تاکہ اسے بے دخل کیا جا سکے۔ زنک عام طور پر اس تہہ نشینی کے رد عمل کے لیے استعمال ہوتا ہے: $2[Ag(CN)₂]⁻(aq) + Zn(s) → [Zn(CN)₄]²⁻(aq) + 2Ag(s)$۔"
  },
  {
    "id": 235,
    "text": "Formative evaluation is done .... (TSTET 2017)\nتشکیلی تشخیص کی جاتی ہے ....",
    "options": [
      "Before starting the instruction.\nہدایات شروع کرنے سے پہلے۔",
      "During the process of instruction.\nہدایات کے عمل کے دوران۔",
      "After the completion of the term.\nمدت کی تکمیل کے بعد۔",
      "Before admission into a course.\nایک کورس میں داخلے سے پہلے۔"
    ],
    "correct": "During the process of instruction.",
    "explanation": "تشکیلی تشخیص، یا سیکھنے کے لیے تشخیص، ایک جاری عمل ہے جو ایک کورس یا یونٹ کے دوران ہوتا ہے۔ اس کا مقصد طالب علم کی سیکھائی کی نگرانی کرنا اور طلباء اور اساتذہ دونوں کو تدریسی اور سیکھنے کے عمل کو بہتر بنانے کے لیے مسلسل رائے فراہم کرنا ہے۔ اس کے برعکس، مجموعی تشخیص ایک تدریسی مدت کے اختتام پر ہوتی ہے تاکہ یہ جانچا جا سکے کہ کیا سیکھا گیا ہے۔"
  },
  {
    "id": 236,
    "text": "Incorrect statement with regards to Audio-visual aids. (TSTET 2017)\nسمعی و بصری امدادی اشیاء کے حوالے سے غلط بیان۔",
    "options": [
      "They motivate the students.\nوہ طلباء کو ترغیب دیتی ہیں۔",
      "They are not accordance with the principle of concrete to abstract.\nوہ ٹھوس سے مجرد کے اصول کے مطابق نہیں ہیں۔",
      "They speed up learning.\nوہ سیکھنے کی رفتار کو تیز کرتی ہیں۔",
      "They help in presenting which can not be seen with un-aided eye.\nوہ ایسی چیزیں پیش کرنے میں مدد کرتی ہیں جو بغیر امداد کے آنکھ سے نہیں دیکھی جا سکتیں۔"
    ],
    "correct": "They are not accordance with the principle of concrete to abstract.",
    "explanation": "یہ بیان غلط ہے۔ سمعی و بصری امدادی اشیاء کا ایک کلیدی تدریسی فائدہ یہ ہے کہ وہ ٹھوس سے مجرد کی طرف پڑھانے کے اصول کے ساتھ بالکل ہم آہنگ ہیں۔ وہ ٹھوس، حقیقی دنیا کی مثالیں (جیسے ویڈیوز، تصاویر، اور ماڈلز) فراہم کرتی ہیں جو مجرد تصورات کو طلباء کے لیے سمجھنا اور اپنانا آسان بناتی ہیں۔ دیگر تین بیانات سمعی و بصری امدادی اشیاء کے استعمال کے درست فوائد ہیں۔"
  },
  {
    "id": 237,
    "text": "This is not a suitable role for a science teacher. (TSTET 2017)\nیہ سائنس کے استاد کے لیے مناسب کردار نہیں ہے۔",
    "options": [
      "Facilitator\nسہولت کار",
      "Financer\nمالی معاون",
      "Manager\nمینیجر",
      "Counsellor\nمشیر"
    ],
    "correct": "Financer",
    "explanation": "ایک جدید سائنس کا استاد بہت سے کردار ادا کرتا ہے: سیکھنے کا سہولت کار، کلاس روم اور لیب کی سرگرمیوں کا مینیجر، اور ایک مشیر جو طلباء کی رہنمائی کرتا ہے۔ تاہم، 'مالی معاون' کے طور پر کام کرنا — تعلیمی سرگرمیوں کے لیے ذاتی فنڈز فراہم کرنا — ایک استاد کا پیشہ ورانہ کردار یا توقع نہیں ہے۔ اسکول کے وسائل سرکاری چینلز کے ذریعے منظم کیے جاتے ہیں۔"
  },
  {
    "id": 238,
    "text": "When a student stopped using plastic covers after listening to the lesson 'Synthetic fibres and plastics', the objective achieved is..... (TSTET 2017)\nجب ایک طالب علم نے 'مصنوعی ریشے اور پلاسٹک' کا سبق سننے کے بعد پلاسٹک کے لفافے استعمال کرنا چھوڑ دیے، تو حاصل کردہ مقصد ہے.....",
    "options": [
      "Responding\nردعمل ظاہر کرنا",
      "Valuing\nقدر کرنا",
      "Characterisation\nکردار سازی",
      "Organisation\nتنظیم"
    ],
    "correct": "Characterisation",
    "explanation": "یہ سوال عاطفی ڈومین (Affective Domain) کی سطحوں سے متعلق ہے۔ 'کردار سازی' سب سے اونچی سطح ہے، جہاں ایک قدر فرد کی شخصیت کا ایک لازمی حصہ بن جاتی ہے اور مسلسل اس کے رویے کی رہنمائی کرتی ہے۔ طالب علم کا پلاسٹک کے تھیلے استعمال کرنا مکمل طور پر چھوڑ دینے کا عمل اس بات کی نشاندہی کرتا ہے کہ ماحولیاتی شعور کی قدر کو اندرونی طور پر اپنا لیا گیا ہے اور اب یہ اس کے کردار کا حصہ ہے، جو اس کی روزمرہ کی زندگی کو متاثر کر رہا ہے۔"
  },
  {
    "id": 239,
    "text": "We can not say exactly that construction of knowledge taken place in the situation. (TSTET 2017)\nہم یقینی طور پر نہیں کہہ سکتے کہ اس صورت حال میں علم کی تعمیر ہوئی ہے۔",
    "options": [
      "If the student reported the concept taught by the teacher, either in the class or in the examination, without any mistakes.\nاگر طالب علم نے استاد کے پڑھائے ہوئے تصور کو، چاہے کلاس میں ہو یا امتحان میں، بغیر کسی غلطی کے بیان کر دیا۔",
      "If the student invents new things by applying his previous experience.\nاگر طالب علم اپنے پچھلے تجربے کو استعمال کرتے ہوئے نئی چیزیں ایجاد کرتا ہے۔",
      "If the student defined the concepts by discussing in peer group and with his previous experience.\nاگر طالب علم نے ہم مرتبہ گروپ میں اور اپنے پچھلے تجربے سے بحث کرکے تصورات کی تعریف کی۔",
      "If the student applied the learned concepts in new situations.\nاگر طالب علم نے سیکھے ہوئے تصورات کو نئی صورتحال میں لاگو کیا۔"
    ],
    "correct": "If the student reported the concept taught by the teacher, either in the class or in the examination, without any mistakes.",
    "explanation": "علم کی تعمیر (تعمیراتی نظریہ) تجربات سے معنی پیدا کرنے کا ایک فعال عمل ہے۔ تصورات کا اطلاق، ایجاد، اور تعریف کے لیے بحث کرنا سبھی فعال عمل ہیں جو فہم و ادراک کو ظاہر کرتے ہیں۔ تاہم، بغیر کسی غلطی کے کسی تصور کو محض بیان کرنا یا رٹنا، رٹنے کی یادداشت کی علامت ہے، جو بغیر کسی حقیقی سمجھ یا علم کی تعمیر کے ہو سکتی ہے۔"
  },
  {
    "id": 240,
    "text": "Which of the following statement is not correct relating to science kits ? (TSTET 2017)\nسائنس کٹس سے متعلق مندرجہ ذیل میں سے کون سا بیان درست نہیں ہے؟",
    "options": [
      "These kits act like small laboratories.\nیہ کٹس چھوٹی لیبارٹریوں کی طرح کام کرتی ہیں۔",
      "These kits are useful in schools where there are no laboratories.\nیہ کٹس ان اسکولوں میں مفید ہیں جہاں لیبارٹری نہیں ہیں۔",
      "These kits are designed to carry anywhere easily.\nیہ کٹس آسانی سے کہیں بھی لے جانے کے لیے ڈیزائن کی گئی ہیں۔",
      "These kits are designed for teachers.\nیہ کٹس اساتذہ کے لیے ڈیزائن کی گئی ہیں۔"
    ],
    "correct": "These kits are designed for teachers.",
    "explanation": "یہ بیان غلط ہے۔ جب کہ اساتذہ ان کے استعمال میں رہنمائی کرتے ہیں، سائنس کٹس بنیادی طور پر طلباء کے لیے ڈیزائن کی گئی ہیں۔ ان کا مقصد طلباء کو تجربات کرنے اور فعال سیکھنے میں مشغول ہونے کے لیے عملی مواد فراہم کرنا ہے، جو انہیں طالب علم پر مرکوز اوزار بناتا ہے۔ دیگر بیانات سب سائنس کٹس کی درست خصوصیات ہیں: وہ پورٹیبل منی لیبز کی طرح ہیں، خاص طور پر ان اسکولوں کے لیے مفید ہیں جہاں مکمل لیب کی سہولیات کی کمی ہے۔"
  },
  {
    "id": 241,
    "text": "The force to be applied by a mechanic on a hydraulic piston of 4 sq cm cross-sectional area to lift an 8-ton truck on the other piston of 2 sq m cross-sectional area of a hydraulic jack is... (TSTET 2016)\nایک مکینک کو 4 مربع سینٹی میٹر کراس سیکشنل رقبے والے ہائیڈرولک پسٹن پر کتنی قوت لگانی پڑے گی تاکہ ایک ہائیڈرولک جیک کے 2 مربع میٹر کراس سیکشنل رقبے والے دوسرے پسٹن پر 8 ٹن کے ٹرک کو اٹھایا جا سکے...",
    "options": [
      "8 kg wt",
      "1.6 kg wt",
      "3.3 kg wt",
      "32 kg wt"
    ],
    "correct": "1.6 kg wt",
    "explanation": "یہ مسئلہ پاسکل کے اصول کا اطلاق ہے، جو کہتا ہے کہ ایک بند سیال پر لگایا جانے والا دباؤ سیال کے ہر حصے اور برتن کی دیواروں تک بغیر کسی کمی کے منتقل ہوتا ہے۔ ایک ہائیڈرولک جیک کے لیے، اس کا مطلب ہے کہ چھوٹے پسٹن پر دباؤ ($P_1$) بڑے پسٹن پر دباؤ ($P_2$) کے برابر ہے۔ فارمولا $F_1/A_1 = F_2/A_2$ ہے۔ یہاں، $F_2$ ٹرک کا وزن ہے (8 ٹن = 8000 کلوگرام)، $A_2$ بڑے پسٹن کا رقبہ ہے (2 مربع میٹر)، اور $A_1$ چھوٹے پسٹن کا رقبہ ہے (4 مربع سینٹی میٹر = 0.0004 مربع میٹر)۔ لگائی جانے والی قوت ($F_1$) کو معلوم کرنے کے لیے فارمولے کو دوبارہ ترتیب دینے پر: $F_1 = F_2 \\times (A_1 / A_2) = 8000 \\text{ kg} \\times (0.0004 m^2 / 2 m^2) = 8000 \\times 0.0002 = 1.6$ کلوگرام وزن۔"
  },
  {
    "id": 242,
    "text": "The reason for the withdrawal of planetary status to Pluto in the 26th general assembly of the IAU is... (TSTET 2016)\nIAU کی 26 ویں جنرل اسمبلی میں پلوٹو سے سیارے کا درجہ واپس لینے کی وجہ یہ ہے...",
    "options": [
      "it is a dark, cold, dwarf and distant celestial object\nیہ ایک تاریک، سرد، بونا اور دور دراز فلکی جسم ہے",
      "it has an orbit resembling that of a comet\nاس کا مدار ایک دم دار ستارے سے ملتا جلتا ہے",
      "NASA observations proved that it is not a planet\nناسا کے مشاہدات نے ثابت کیا کہ یہ ایک سیارہ نہیں ہے",
      "it crosses other planetary orbit\nیہ دوسرے سیاروں کے مدار کو عبور کرتا ہے"
    ],
    "correct": "it crosses other planetary orbit",
    "explanation": "2006 میں، بین الاقوامی فلکیاتی یونین (IAU) نے 'سیارے' کی تعریف ایک ایسے فلکی جسم کے طور پر کی جو (الف) سورج کے گرد مدار میں ہو، (ب) اس کی خود کی کشش ثقل اتنی ہو کہ وہ سخت جسم کی قوتوں پر قابو پا کر ایک ہائیڈروسٹیٹک توازن (تقریباً گول) کی شکل اختیار کر لے، اور (ج) اپنے مدار کے ارد گرد کے 'علاقے کو صاف' کر چکا ہو۔ پلوٹو پہلے دو معیارات پر پورا اترتا ہے لیکن تیسرے میں ناکام ہو جاتا ہے کیونکہ اس کا انتہائی بیضوی مدار نیپچون کے مدار کو عبور کرتا ہے، جس کا مطلب ہے کہ اس نے اپنے مداری راستے کو دیگر بڑے اجسام سے صاف نہیں کیا ہے۔"
  },
  {
    "id": 243,
    "text": "The superiority of a concave mirror over a plane mirror, convex mirror, or a concave lens is... (TSTET 2016)\nایک مقعر آئینے کی مستوی آئینے، محدب آئینے، یا مقعر عدسے پر برتری یہ ہے...",
    "options": [
      "it can form an image of any characteristic like erect-invert; virtual-real; magnified-diminished\nیہ کسی بھی خصوصیت کی شبیہ بنا سکتا ہے جیسے سیدھی-الٹی؛ مجازی-حقیقی؛ بڑی-چھوٹی",
      "unlike others, only a concave mirror can form a clear focused image on the screen\nدوسروں کے برعکس، صرف ایک مقعر آئینہ ہی اسکرین پر ایک واضح مرکوز شبیہ بنا سکتا ہے",
      "it is widely used more than others in day-to-day life situations\nیہ روزمرہ کی زندگی کے حالات میں دوسروں سے زیادہ وسیع پیمانے پر استعمال ہوتا ہے",
      "for any position of the object, it forms an image on the screen\nشے کی کسی بھی پوزیشن کے لیے، یہ اسکرین پر ایک شبیہ بناتا ہے"
    ],
    "correct": "it can form an image of any characteristic like erect-invert; virtual-real; magnified-diminished",
    "explanation": "ایک مقعر آئینہ منفرد طور پر ورسٹائل ہے۔ شے کی فوکس اور مرکزِ انحنا کے نسبت پوزیشن پر منحصر ہے، یہ حقیقی اور الٹی شبیہیں (جو بڑی، چھوٹی، یا ایک ہی سائز کی ہو سکتی ہیں) کے ساتھ ساتھ ایک مجازی، سیدھی، اور بڑی شبیہ بھی بنا سکتا ہے۔ اس کے برعکس، ایک محدب آئینہ اور ایک مقعر عدسہ ہمیشہ مجازی، سیدھی، اور چھوٹی شبیہیں بناتے ہیں، جبکہ ایک مستوی آئینہ ہمیشہ ایک مجازی، سیدھی، اور ایک ہی سائز کی شبیہ بناتا ہے۔ شبیہ کی وسیع اقسام پیدا کرنے کی یہ صلاحیت اس کا کلیدی فائدہ ہے۔"
  },
  {
    "id": 244,
    "text": "If A is aluminium; B is brass; C is copper; G is glass; and K is kerosene, the correct ascending order of their specific heats in cal/g°C is... (TSTET 2016)\nاگر A ایلومینیم ہے؛ B پیتل ہے؛ C تانبا ہے؛ G شیشہ ہے؛ اور K مٹی کا تیل ہے، تو ان کی مخصوص حرارتوں کی درست صعودی ترتیب cal/g°C میں ہے...",
    "options": [
      "B, C, G, A, K",
      "G, A, C, K, B",
      "C, B, A, G, K",
      "A, B, C, G, K"
    ],
    "correct": "B, C, G, A, K",
    "explanation": "مخصوص حرارت کسی مادے کے ایک گرام کا درجہ حرارت ایک ڈگری سیلسیس بڑھانے کے لیے درکار حرارت کی مقدار ہے۔ cal/g°C میں تخمینی مخصوص حرارت کی قدریں یہ ہیں: پیتل (B) ≈ 0.091، تانبا (C) ≈ 0.092، شیشہ (G) ≈ 0.20، ایلومینیم (A) ≈ 0.215، اور مٹی کا تیل (K) ≈ 0.50۔ ان کو سب سے چھوٹی سے سب سے بڑی قدر تک ترتیب دینے سے صعودی ترتیب حاصل ہوتی ہے: پیتل، تانبا، شیشہ، ایلومینیم، مٹی کا تیل (B, C, G, A, K)۔"
  },
  {
    "id": 245,
    "text": "The odd term of the following, while describing the term amplitude, is... (TSTET 2016)\nایمپلی ٹیوڈ کی اصطلاح بیان کرتے ہوئے، مندرجہ ذیل میں سے غیر متعلقہ اصطلاح ہے...",
    "options": [
      "density\nکثافت",
      "pressure\nدباؤ",
      "loudness\nآواز کی بلندی",
      "displacement\nہٹاؤ"
    ],
    "correct": "loudness",
    "explanation": "ایمپلی ٹیوڈ ایک لہر کی شدت کا ایک طبیعی پیمانہ ہے۔ اسے توازن کی پوزیشن سے زیادہ سے زیادہ ہٹاؤ کے طور پر بیان کیا جا سکتا ہے۔ آواز کی لہروں کے لیے، اسے دباؤ یا کثافت میں زیادہ سے زیادہ تبدیلی کے طور پر بھی بیان کیا جاتا ہے۔ تاہم، آواز کی بلندی (loudness) آواز کی شدت (ایمپلی ٹیوڈ) کا موضوعی انسانی تاثر ہے۔ اگرچہ آواز کی بلندی براہ راست ایمپلی ٹیوڈ سے متعلق ہے (ایک زیادہ ایمپلی ٹیوڈ کو زیادہ بلند سمجھا جاتا ہے)، یہ ایک ادراکی معیار ہے، نہ کہ ایک براہ راست طبیعی پیمانہ جو خود ایمپلی ٹیوڈ کی تعریف کے لیے استعمال ہوتا ہے، جو اسے غیر متعلقہ بناتا ہے۔"
  },
  {
    "id": 246,
    "text": "The power of a cyclist having 40 kg weight, while he raises the velocity of his 40 kg weight bicycle from 3 m/sec to 5 m/sec in 8 seconds is... (TSTET 2016)\n40 کلوگرام وزن والے سائیکل سوار کی طاقت کیا ہوگی، جب وہ اپنی 40 کلوگرام وزنی سائیکل کی رفتار کو 8 سیکنڈ میں 3 میٹر فی سیکنڈ سے 5 میٹر فی سیکنڈ تک بڑھاتا ہے...",
    "options": [
      "5.12 k watts",
      "640 watts",
      "80 watts",
      "170 joules"
    ],
    "correct": "80 watts",
    "explanation": "طاقت وہ شرح ہے جس پر کام کیا جاتا ہے (کام/وقت)۔ کسی شے کی رفتار کو تبدیل کرنے کے لیے کیا گیا کام اس کی حرکی توانائی میں تبدیلی ($\Delta KE$) کے برابر ہے۔ سب سے پہلے، کل کمیت معلوم کریں: $m = m_{\\text{cyclist}} + m_{\\text{bicycle}} = 40 \\text{ kg} + 40 \\text{ kg} = 80 \\text{ kg}$۔ اگلا، حرکی توانائی میں تبدیلی کا حساب لگائیں: $\\Delta KE = \\frac{1}{2}m v_f^2 - \\frac{1}{2}m v_i^2 = \\frac{1}{2}(80)(5^2 - 3^2) = 40(25 - 9) = 40(16) = 640$ جولز۔ یہ کیا گیا کام ہے۔ آخر میں، طاقت کا حساب لگائیں: $P = \\text{کام} / \\text{وقت} = 640 \\text{ J} / 8 \\text{ s} = 80$ واٹ۔"
  },
  {
    "id": 247,
    "text": "The force acting on a 5 m long conductor when 2 A electric current flows through it and a 4T magnetic field is observed at a 30° angle with the conductor is... (TSTET 2016)\n5 میٹر لمبے موصل پر عمل کرنے والی قوت کیا ہوگی جب اس میں سے 2 ایمپیئر برقی رو گزرتی ہے اور 4 ٹیسلا کی مقناطیسی فیلڈ موصل کے ساتھ 30° کا زاویہ بناتی ہے...",
    "options": [
      "2.5 N",
      "20 N",
      "5 N",
      "1.6 N"
    ],
    "correct": "20 N",
    "explanation": "ایک یکساں مقناطیسی فیلڈ میں ایک سیدھے کرنٹ بردار موصل پر مقناطیسی قوت فارمولے $F = B \\cdot I \\cdot L \\cdot \\sin(\\theta)$ سے دی جاتی ہے، جہاں B مقناطیسی فیلڈ کی طاقت ہے، I کرنٹ ہے، L موصل کی لمبائی ہے، اور $\\theta$ کرنٹ کی سمت اور مقناطیسی فیلڈ کے درمیان زاویہ ہے۔ دی گئی قدروں کو ڈالنے پر: $F = (4 \\text{ T}) \\times (2 \\text{ A}) \\times (5 \\text{ m}) \\times \\sin(30°)$۔ چونکہ $\\sin(30°) = 0.5$ ہے، حساب کتاب یہ ہے: $F = 4 \\times 2 \\times 5 \\times 0.5 = 40 \\times 0.5 = 20$ نیوٹن۔"
  },
  {
    "id": 248,
    "text": "If the pOH of an aqueous hypochlorous acid is calculated as 8.64, the pH value of that solution is... (TSTET 2016)\nاگر ایک آبی ہائپوکلورس ایسڈ کا pOH 8.64 شمار کیا جاتا ہے، تو اس محلول کی pH قدر ہے...",
    "options": [
      "6.36",
      "6.36 moles",
      "5.46×10⁻¹⁴ ions",
      "5.36"
    ],
    "correct": "5.36",
    "explanation": "25°C پر ایک آبی محلول میں pH اور pOH کے درمیان تعلق سادہ فارمولے سے دیا جاتا ہے: $pH + pOH = 14$۔ pH معلوم کرنے کے لیے، آپ فارمولے کو $pH = 14 - pOH$ میں دوبارہ ترتیب دے سکتے ہیں۔ یہ دیکھتے ہوئے کہ pOH 8.64 ہے، حساب کتاب $pH = 14 - 8.64 = 5.36$ ہے۔ چونکہ ہائپوکلورس ایسڈ ایک تیزاب ہے، 7 سے کم pH قدر کی توقع کی جاتی ہے۔"
  },
  {
    "id": 249,
    "text": "The quantity of carbon dioxide evolved during complete combustion of 23 gm of ethanol is... (TSTET 2016)\n23 گرام ایتھنول کے مکمل احتراق کے دوران خارج ہونے والی کاربن ڈائی آکسائیڈ کی مقدار ہے...",
    "options": [
      "88 g",
      "22.4 lit",
      "44.8 lit",
      "3 moles"
    ],
    "correct": "88 g",
    "explanation": "نوٹ: چھپے ہوئے سوال میں ایک غلطی ہے؛ سرکاری جواب کے درست ہونے کے لیے اسے 46 گرام ایتھنول بیان کرنا چاہیے۔ ایتھنول کے احتراق کے لیے متوازن مساوات $C_2H_5OH + 3O_2 \\rightarrow 2CO_2 + 3H_2O$ ہے۔ ایتھنول ($C_2H_5OH$) کی مولر کمیت 46 گرام فی مول ہے، اور کاربن ڈائی آکسائیڈ ($CO_2$) کی مولر کمیت 44 گرام فی مول ہے۔ مساوات کے مطابق، 1 مول (46 گرام) ایتھنول 2 مول $CO_2$ پیدا کرتا ہے۔ 2 مول $CO_2$ کی کمیت $2 \\times 44 = 88$ گرام ہے۔ سرکاری جوابی کلید یہ بتاتی ہے کہ 88 گرام درست ہے، جس کا مطلب ہے کہ سوال کا ارادہ 46 گرام ایتھنول استعمال کرنے کا تھا۔"
  },
  {
    "id": 250,
    "text": "The maximum number of all orbitals in the 4th orbit of an atom are... (TSTET 2016)\nایک ایٹم کے چوتھے مدار میں تمام آربیٹلز کی زیادہ سے زیادہ تعداد ہے...",
    "options": [
      "16",
      "32",
      "7",
      "14"
    ],
    "correct": "16",
    "explanation": "پرنسپل انرجی لیول (مدار) کو 'n' سے ظاہر کیا جاتا ہے۔ چوتھے مدار کے لیے، n=4۔ کسی بھی دی گئی انرجی لیول 'n' میں آربیٹلز کی کل تعداد فارمولے $n^2$ سے شمار کی جاتی ہے۔ لہذا، n=4 کے لیے، آربیٹلز کی تعداد $4^2 = 16$ ہے۔ یہ سب لیولز میں اس طرح تقسیم ہیں: ایک 4s آربیٹل، تین 4p آربیٹلز، پانچ 4d آربیٹلز، اور سات 4f آربیٹلز ($1+3+5+7=16$)۔ عدد 32 اس مدار میں الیکٹرانوں کی زیادہ سے زیادہ تعداد ($2n^2$) کی نمائندگی کرتا ہے۔"
  },
  {
    "id": 251,
    "text": "The element that cannot be fit in a Dobereiner triad among the following is... (TSTET 2016)\nمندرجہ ذیل میں سے کون سا عنصر ڈوبیرینر کی تکڑی میں فٹ نہیں ہو سکتا؟",
    "options": [
      "Mn",
      "Co",
      "Cr",
      "Fe"
    ],
    "correct": "Mn",
    "explanation": "یہ سوال کسی حد تک مبہم ہے۔ ڈوبیرینر کی تکڑیاں ایک جیسی خصوصیات والے تین عناصر کے گروہ ہیں، جہاں درمیانی عنصر کا جوہری وزن دوسرے دو کا اوسط ہوتا ہے۔ ان عناصر پر مشتمل سب سے مشہور تکڑی 'آئرن ٹرائیڈ' (Fe, Co, Ni) ہے، جسے بہت ملتی جلتی کیمیائی خصوصیات کی وجہ سے گروپ کیا گیا ہے، حالانکہ وہ جوہری وزن کے اصول پر سختی سے عمل نہیں کرتے ہیں۔ متواتر جدول میں عمودی طور پر، Fe، Cr، اور Co کو بھی ان کے نیچے کے عناصر کے ساتھ تکڑیوں میں رکھا جا سکتا ہے (مثلاً، Cr، Mo، W)۔ مینگنیز (Mn) کو اکثر اس کے منفرد اور وسیع تکسیدی حالتوں کی وجہ سے اس کے پڑوسیوں سے الگ سمجھا جاتا ہے اور عام طور پر ابتدائی کیمسٹری میں ایک سادہ افقی تکڑی میں گروپ نہیں کیا جاتا، جس کی وجہ سے یہ سب سے زیادہ ممکنہ جواب ہے۔"
  },
  {
    "id": 252,
    "text": "The terms gangue, slag, and flux are related to... (TSTET 2016)\nاصطلاحات گینگ، سلیگ، اور فلکس کا تعلق کس سے ہے...؟",
    "options": [
      "roasting\nروسٹنگ",
      "smelting\nسمیلٹنگ",
      "calcination\nکلسینیشن",
      "poling\nپولنگ"
    ],
    "correct": "smelting",
    "explanation": "یہ اصطلاحات دھات کاری میں **سمیلٹنگ** کے عمل کے لیے مرکزی حیثیت رکھتی ہیں۔ **گینگ** کچ دھات کے ساتھ ملی ہوئی ناپسندیدہ پتھریلی ناخالصی ہے۔ **فلکس** ایک کیمیائی مادہ ہے جو سمیلٹنگ کے دوران گینگ کے ساتھ ملانے کے لیے شامل کیا جاتا ہے۔ فلکس اور گینگ کے درمیان تعامل کی پیداوار ایک پگھلا ہوا، فیوز ایبل مادہ ہے جسے **سلیگ** کہتے ہیں۔ سلیگ پگھلی ہوئی دھات سے کم کثیف ہوتا ہے اور اوپر تیرتا ہے، جس سے آسانی سے علیحدگی ممکن ہو جاتی ہے۔"
  },
  {
    "id": 253,
    "text": "Among the following, which makes us recognize the importance and conservation of biodiversity is... (TSTET 2016)\nمندرجہ ذیل میں سے، کون ہمیں حیاتیاتی تنوع کی اہمیت اور تحفظ کو پہچاننے پر مجبور کرتا ہے؟",
    "options": [
      "Biology\nحیاتیات",
      "Physics\nطبیعیات",
      "Geology\nارضیات",
      "Chemistry\nکیمیا"
    ],
    "correct": "Biology",
    "explanation": "حیاتیاتی تنوع سے مراد زمین پر زندگی کی اقسام ہیں۔ وہ سائنسی شعبہ جو زندگی اور جانداروں، ان کے تعاملات، اور ان کے ماحولیاتی نظام کا مطالعہ کرتا ہے وہ **حیاتیات** ہے۔ حیاتیات کے ذیلی شعبے، جیسے کہ ماحولیات اور تحفظ حیاتیات، خاص طور پر حیاتیاتی تنوع کی اہمیت کو سمجھنے اور اس کے تحفظ کے لیے حکمت عملی تیار کرنے پر توجہ مرکوز کرتے ہیں۔"
  },
  {
    "id": 254,
    "text": "The largest cell is... (TSTET 2016)\nسب سے بڑا خلیہ کونسا ہے...؟",
    "options": [
      "a nerve cell\nایک عصبی خلیہ",
      "the egg of an Ostrich\nشتر مرغ کا انڈا",
      "a dermal cell\nایک جلدی خلیہ",
      "a cell of an elephant\nہاتھی کا ایک خلیہ"
    ],
    "correct": "the egg of an Ostrich",
    "explanation": "حجم اور وزن دونوں کے لحاظ سے سب سے بڑا واحد خلیہ شتر مرغ کا غیر فرٹیلائزڈ انڈا ہے۔ یہ تقریباً 15 سینٹی میٹر لمبا اور 1.4 کلوگرام تک وزنی ہو سکتا ہے۔ جبکہ ایک عصبی خلیہ جسم کا سب سے لمبا خلیہ ہو سکتا ہے، لیکن مجموعی حجم کے لحاظ سے یہ سب سے بڑا نہیں ہے۔ ہاتھی جیسے جاندار کا سائز اس کے انفرادی خلیوں کے بڑے سائز کی وجہ سے نہیں بلکہ خلیوں کی بہت بڑی تعداد کی وجہ سے ہوتا ہے۔"
  },
  {
    "id": 255,
    "text": "In the following statements, the FALSE one is... (TSTET 2016)\nمندرجہ ذیل بیانات میں سے، غلط بیان کونسا ہے...؟",
    "options": [
      "The size of the organism depends on the shape of the cells in it.\nجاندار کا سائز اس میں موجود خلیوں کی شکل پر منحصر ہوتا ہے۔",
      "The size of the organism does not depend on the shape of the cells in it.\nجاندار کا سائز اس میں موجود خلیوں کی شکل پر منحصر نہیں ہوتا ہے۔",
      "The size of the cell is related to its function.\nخلیے کا سائز اس کے کام سے متعلق ہوتا ہے۔",
      "The size of the organism depends on the number of cells in it.\nجاندار کا سائز اس میں موجود خلیوں کی تعداد پر منحصر ہوتا ہے۔"
    ],
    "correct": "The size of the organism depends on the shape of the cells in it.",
    "explanation": "ایک کثیر خلوی جاندار کا مجموعی سائز اس کے خلیوں کی کل تعداد سے طے ہوتا ہے، نہ کہ ان کی انفرادی شکل یا سائز سے۔ مثال کے طور پر، ایک ہاتھی چوہے سے بڑا ہوتا ہے کیونکہ اس میں کھربوں زیادہ خلیے ہوتے ہیں، حالانکہ ان کے انفرادی خلیوں کا سائز تقریباً ایک جیسا ہوتا ہے۔ خلیے کی شکل اور سائز خلیے کے مخصوص کام سے متعلق ہوتے ہیں (مثلاً، ترسیل کے لیے لمبے عصبی خلیے، نقل و حمل کے لیے دو مقعر سرخ خون کے خلیے)۔ لہذا، یہ بیان کہ جاندار کا سائز اس کے خلیوں کی شکل پر منحصر ہوتا ہے، غلط ہے۔"
  },
  {
    "id": 256,
    "text": "An example of a short night duration plant is... (TSTET 2016)\nکم دورانیے کی رات والے پودے کی ایک مثال ہے...",
    "options": [
      "Maize\nمکئی",
      "Cotton\nکپاس",
      "Soyabean\nسویابین",
      "Wheat\nگندم"
    ],
    "correct": "Wheat",
    "explanation": "'کم دورانیے کی رات والا پودا' ایک اور اصطلاح ہے 'لمبے دن والے پودے' (Long-Day Plant) کے لیے۔ ان پودوں کو پھول لانے کے لیے ایک خاص اہم لمبائی سے زیادہ روشنی کی فوٹو پیریڈ کی ضرورت ہوتی ہے۔ دی گئی مثالوں میں سے، **گندم** لمبے دن والے پودے کی ایک کلاسیکی مثال ہے۔ کپاس اور سویابین چھوٹے دن والے پودے ہیں (پھول لانے کے لیے لمبی راتوں کی ضرورت ہوتی ہے)، اور مکئی کو عام طور پر دن کے غیر جانبدار پودے کے طور پر سمجھا جاتا ہے، جس کا مطلب ہے کہ اس کا پھول لانا بنیادی طور پر دن کی لمبائی پر منحصر نہیں ہے۔"
  },
  {
    "id": 257,
    "text": "The correctly matched one in the following is... (TSTET 2016)\nمندرجہ ذیل میں سے صحیح جوڑا کونسا ہے...؟",
    "options": [
      "Taproot - parallel venation\nموسلی جڑ - متوازی وینییشن",
      "Taproot - reticulate venation\nموسلی جڑ - جالی دار وینییشن",
      "Fibrous roots - reticulate venation\nریشہ دار جڑیں - جالی دار وینییشن",
      "Fibrous roots - dicot\nریشہ دار جڑیں - دو دالہ"
    ],
    "correct": "Taproot - reticulate venation",
    "explanation": "جڑ کے نظام، پتی کی وینییشن، اور پودے کی قسم (یک دالہ یا دو دالہ) کے درمیان عمومی تعلقات ہیں۔ دو دالہ پودوں میں عام طور پر ایک مرکزی **موسلی جڑ** کا نظام اور **جالی دار** (نیٹ جیسی) وینییشن والے پتے ہوتے ہیں۔ یک دالہ پودوں میں عام طور پر **ریشہ دار جڑ** کا نظام اور **متوازی** وینییشن والے پتے ہوتے ہیں۔ لہذا، صحیح جوڑا 'موسلی جڑ - جالی دار وینییشن' ہے۔"
  },
  {
    "id": 258,
    "text": "Bone and muscle are joined together with... (TSTET 2016)\nہڈی اور پٹھے ایک ساتھ کس سے جڑے ہوتے ہیں...؟",
    "options": [
      "tendons\nٹینڈن",
      "ligament\nلگامنٹ",
      "joint\nجوڑ",
      "cartilage\nکری ہڈی"
    ],
    "correct": "tendons",
    "explanation": "**ٹینڈن** ریشے دار جوڑنے والے ٹشو کی سخت، لچکدار ڈوریاں ہیں جو **پٹھوں کو ہڈیوں** سے جوڑتی ہیں۔ دوسری طرف، **لگامنٹ** اسی طرح کے ٹشوز ہیں جو **ہڈی کو ہڈی** سے جوڑتے ہیں تاکہ جوڑ بن سکیں اور مستحکم ہوں۔ کری ہڈی جوڑ کے اندر ہڈیوں کے سروں کو ڈھانپنے والا ہموار، حفاظتی ٹشو ہے۔"
  },
  {
    "id": 259,
    "text": "Match the following. 1) Aquaculture A) Honeybee; 2) Apiculture B) Silkworm; 3) Sericulture C) Fish (TSTET 2016)\nدرج ذیل کو ملائیں۔ 1) آبی زراعت A) شہد کی مکھی؛ 2) شہد کی مکھیوں کی پرورش B) ریشم کا کیڑا؛ 3) ریشم کی کاشت C) مچھلی",
    "options": [
      "A-3, B-1, C-2",
      "A-3, B-2, C-1",
      "A-2, B-3, C-1",
      "A-1, B-2, C-3"
    ],
    "correct": "A-2, B-3, C-1",
    "explanation": "صحیح جوڑے ان طریقوں کی تعریفوں پر مبنی ہیں: **شہد کی مکھیوں کی پرورش** (Apiculture) (2) شہد کی مکھیوں (A) کو پالنے کا سائنسی طریقہ ہے۔ **ریشم کی کاشت** (Sericulture) (3) ریشم کے کیڑوں (B) کی کاشت اور ان سے ریشم نکالنے کا عمل ہے۔ **آبی زراعت** (Aquaculture) (1) آبی جانداروں کی کاشت ہے، جس میں مچھلی (C) بھی شامل ہے۔ لہذا، صحیح جوڑا A-2, B-3, C-1 ہے۔"
  },
  {
    "id": 260,
    "text": "Conversion of milk to curd is due to... (TSTET 2016)\nدودھ کا دہی میں تبدیل ہونا کس کی وجہ سے ہوتا ہے...؟",
    "options": [
      "fungi\nفنجائی",
      "virus\nوائرس",
      "protozoa\nپروٹوزوا",
      "bacteria\nبیکٹیریا"
    ],
    "correct": "bacteria",
    "explanation": "دودھ کا دہی میں تبدیل ہونا ایک فرمینٹیشن کا عمل ہے جو لیکٹک ایسڈ بیکٹیریا (LAB) کے ذریعے انجام دیا جاتا ہے، خاص طور پر *Lactobacillus* جینس سے۔ یہ فائدہ مند **بیکٹیریا** دودھ میں موجود لیکٹوز (شکر) کو استعمال کرتے ہیں اور اسے لیکٹک ایسڈ میں تبدیل کر دیتے ہیں۔ تیزاب دودھ کی پروٹین (کیسین) کو جمانے کا سبب بنتا ہے، جس سے دودھ گاڑھا ہو کر دہی بن جاتا ہے۔"
  },
  {
    "id": 261,
    "text": "The roots of the plant that have the 'Rhizobium' bacteria is... (TSTET 2016)\nجس پودے کی جڑوں میں 'رائزوبیم' بیکٹیریا ہوتے ہیں وہ ہے...",
    "options": [
      "curry leaf\nکڑی پتہ",
      "beans\nپھلیاں",
      "banyan\nبرگد",
      "mango\nآم"
    ],
    "correct": "beans",
    "explanation": "*رائزوبیم* بیکٹیریا فضائی نائٹروجن کو فکس کرنے کی اپنی صلاحیت کے لیے مشہور ہیں۔ وہ یہ کام پھلی دار پودوں (مٹر کے خاندان کے اراکین) کے ساتھ ایک علامتی تعلق میں کرتے ہیں۔ بیکٹیریا پودے کی جڑوں پر گٹھلیوں میں رہتے ہیں۔ فراہم کردہ اختیارات میں سے، **پھلیاں** ایک پھلی دار پودا ہے اور *رائزوبیم* بیکٹیریا کی میزبانی کرتی ہے۔ دوسرے پودے پھلی دار نہیں ہیں۔"
  },
  {
    "id": 262,
    "text": "Match the following. A) Producers 1) Protozoans; B) Consumers 2) Blue green algae; C) Decomposers 3) Fungi (TSTET 2016)\nدرج ذیل کو ملائیں۔ A) پیدا کنندگان 1) پروٹوزوا؛ B) صارفین 2) نیلی سبز کائی؛ C) تحلیل کنندگان 3) فنجائی",
    "options": [
      "A-2, B-3, C-1",
      "A-3, B-2, C-1",
      "A-1, B-3, C-2",
      "A-2, B-1, C-3"
    ],
    "correct": "A-2, B-1, C-3",
    "explanation": "ایک ماحولیاتی نظام میں: **پیدا کنندگان** (A) اپنی خوراک خود بناتے ہیں، عام طور پر ضیائی تالیف کے ذریعے۔ **نیلی سبز کائی** (سیانوبیکٹیریا) (2) ضیائی تالیف کرنے والے پیدا کنندگان ہیں۔ **صارفین** (B) دوسرے جانداروں کو کھا کر توانائی حاصل کرتے ہیں۔ **پروٹوزوا** (1) یک خلوی ہیٹروٹروفس ہیں جو دوسرے جانداروں کو کھاتے ہیں۔ **تحلیل کنندگان** (C) مردہ نامیاتی مادے کو توڑتے ہیں۔ **فنجائی** (3) بنیادی تحلیل کنندگان ہیں۔ اس طرح، صحیح جوڑا A-2, B-1, C-3 ہے۔"
  },
  {
    "id": 263,
    "text": "The correct food chain is... (TSTET 2016)\nصحیح غذائی زنجیر کونسی ہے...؟",
    "options": [
      "Insects -> Plants -> Rabbit -> Deer\nکیڑے -> پودے -> خرگوش -> ہرن",
      "Rabbit -> Plants -> Deer -> Fox\nخرگوش -> پودے -> ہرن -> لومڑی",
      "Carrot -> Rabbit -> Cow -> Tiger\nگاجر -> خرگوش -> گائے -> شیر",
      "Small insects -> Frog -> Snake -> Peacock\nچھوٹے کیڑے -> مینڈک -> سانپ -> مور"
    ],
    "correct": "Small insects -> Frog -> Snake -> Peacock",
    "explanation": "ایک غذائی زنجیر ماحولیاتی نظام میں توانائی کے بہاؤ کو ظاہر کرتی ہے، جو ایک پیدا کنندہ سے شروع ہو کر صارفین تک جاتی ہے۔ آپشن 1 اور 2 غلط ہیں کیونکہ وہ پیدا کنندہ سے شروع نہیں ہوتے۔ آپشن 3 غلط ہے کیونکہ گائے ایک سبزی خور ہے اور خرگوش نہیں کھاتی۔ آپشن 4 توانائی کے ایک قابل فہم بہاؤ کی نمائندگی کرتا ہے: چھوٹے کیڑے (جو پودے کھاتے ہیں) مینڈک کھاتا ہے، جسے سانپ کھاتا ہے، جسے پھر مور کھاتا ہے۔ یہ ایک بنیادی، ثانوی، ثالثی، اور چہارم صارفین کی صحیح ترتیب کو ظاہر کرتا ہے۔"
  },
  {
    "id": 264,
    "text": "'Natural selection,' the famous theory of evolution, was proposed by... (TSTET 2016)\n'قدرتی انتخاب'، ارتقاء کا مشہور نظریہ، کس نے پیش کیا تھا...؟",
    "options": [
      "Jean Baptiste Lamarck\nجین بپٹسٹ لیمارک",
      "August Weismann\nآگسٹ ویزمین",
      "Charles Darwin\nچارلس ڈارون",
      "Mendel\nمینڈل"
    ],
    "correct": "Charles Darwin",
    "explanation": "**قدرتی انتخاب** کے ذریعے ارتقاء کا نظریہ جدید حیاتیات کا سنگ بنیاد ہے اور اسے **چارلس ڈارون** نے اپنی 1859 کی যুগ ساز کتاب 'On the Origin of Species' میں پیش کیا تھا۔ یہ نظریہ پیش کرتا ہے کہ وہ جاندار جن میں وراثتی خصلتیں اپنے ماحول کے لیے بہتر ہوتی ہیں، وہ زیادہ زندہ رہتے ہیں اور نسل پیدا کرتے ہیں، جس سے وقت کے ساتھ ساتھ آبادیوں کا بتدریج ارتقاء ہوتا ہے۔"
  },
  {
    "id": 265,
    "text": "The scientist who discovered that lightning consists of electricity is... (TSTET 2016)\nوہ سائنسدان جس نے دریافت کیا کہ آسمانی بجلی بجلی پر مشتمل ہوتی ہے، وہ ہے...",
    "options": [
      "Benjamin Franklin\nبینجمن فرینکلن",
      "Galvani\nگیلوانی",
      "Andre Ampere\nآندرے ایمپیئر",
      "Georg Ohm\nجورج اوہم"
    ],
    "correct": "Benjamin Franklin",
    "explanation": "**بینجمن فرینکلن** نے 1752 میں اپنے مشہور پتنگ کے تجربے سے آسمانی بجلی کی برقی نوعیت کا مظاہرہ کیا۔ گرج چمک کے طوفان میں پتنگ اڑا کر، اس نے طوفانی بادلوں سے برقی چارج کو لیڈن جار میں جمع کیا، جس سے ثابت ہوا کہ آسمانی بجلی ایک بہت بڑا الیکٹرو اسٹاٹک ڈسچارج ہے۔"
  },
  {
    "id": 266,
    "text": "The academic standard that does not belong to science according to new science textbooks is... (TSTET 2016)\nنئی سائنس کی نصابی کتب کے مطابق جو تعلیمی معیار سائنس سے تعلق نہیں رکھتا وہ ہے...",
    "options": [
      "Asking questions\nسوالات پوچھنا",
      "Experimentation\nتجربہ کرنا",
      "Communication through model making\nماڈل سازی کے ذریعے مواصلات",
      "Manipulation\nہیرا پھیری"
    ],
    "correct": "Manipulation",
    "explanation": "جدید سائنس کی تعلیم بنیادی طریقوں یا 'تعلیمی معیارات' کے ایک سیٹ پر زور دیتی ہے۔ 'سوالات پوچھنا'، 'تجربہ کرنا' (یا تحقیقات کی منصوبہ بندی اور ان پر عمل درآمد)، اور 'ماڈل سازی کے ذریعے مواصلات' سبھی کلیدی، اچھی طرح سے بیان کردہ سائنسی عمل کی مہارتیں ہیں۔ 'ہیرا پھیری'، جبکہ تجربات کرنے کا ایک حصہ ہے (مثلاً، متغیرات یا آلات میں ہیرا پھیری)، عام طور پر خود ایک الگ، اعلیٰ سطحی تعلیمی معیار کے طور پر درج نہیں ہے۔ یہ ایک نفسیاتی مہارت کے لیے ایک زیادہ عمومی اصطلاح ہے، جو اسے بنیادی سائنسی طریقوں کی فہرست میں سب سے کم موزوں آپشن بناتی ہے۔"
  },
  {
    "id": 267,
    "text": "The three-dimensional teaching aid among the following is... (TSTET 2016)\nمندرجہ ذیل میں سے تین جہتی تدریسی امداد کونسی ہے...؟",
    "options": [
      "television\nٹیلی ویژن",
      "computer\nکمپیوٹر",
      "blackboard\nبلیک بورڈ",
      "specimen\nنمونہ"
    ],
    "correct": "specimen",
    "explanation": "تدریسی امداد کو ان کی جہت کے لحاظ سے درجہ بندی کیا جا سکتا ہے۔ ایک تین جہتی (3D) امداد میں لمبائی، چوڑائی اور گہرائی ہوتی ہے۔ ایک **نمونہ** (جیسے ایک چٹان، ایک محفوظ کیڑا، یا پودے کا نمونہ) ایک حقیقی چیز ہے اور اس لیے 3D ہے۔ بلیک بورڈ ایک دو جہتی (2D) سطح ہے۔ ٹیلی ویژن اور کمپیوٹر اسکرینیں بھی 2D ڈسپلے ہیں، یہاں تک کہ جب وہ ایسی تصاویر دکھاتے ہیں جو گہرائی کا بھرم پیدا کرتی ہیں۔"
  },
  {
    "id": 268,
    "text": "A teacher, \"washed the wound with plenty of water and then covered the wound with a cotton dipped in silver nitrate solution\" as first aid for an accident that occurred in a laboratory. The type of accident is... (TSTET 2016)\nایک استاد نے لیبارٹری میں پیش آنے والے ایک حادثے کے لیے ابتدائی طبی امداد کے طور پر \"زخم کو کافی پانی سے دھویا اور پھر زخم کو سلور نائٹریٹ کے محلول میں ڈوبی ہوئی روئی سے ڈھانپ دیا\"۔ حادثے کی قسم ہے...",
    "options": [
      "burns from phosphorous\nفاسفورس سے جلنا",
      "burns from alkalies\nالکلی سے جلنا",
      "burns from acids\nتیزاب سے جلنا",
      "acid in eye\nآنکھ میں تیزاب"
    ],
    "correct": "burns from phosphorous",
    "explanation": "بیان کردہ ابتدائی طبی امداد کا طریقہ کار سفید فاسفورس کی وجہ سے جلنے کے لیے مخصوص ہے۔ پانی سے اچھی طرح دھونے کے بعد، سلور نائٹریٹ کا محلول لگایا جاتا ہے۔ سلور نائٹریٹ باقی فاسفورس کے ذرات کے ساتھ رد عمل ظاہر کر کے سلور فاسفائیڈ کی ایک مستحکم، غیر آتش گیر کوٹنگ بناتا ہے، اس طرح فاسفورس کو ہوا میں دوبارہ بھڑکنے اور مزید نقصان پہنچانے سے روکتا ہے۔ تیزاب یا الکلی سے جلنے کی ابتدائی طبی امداد میں دھونا اور پھر بالترتیب کمزور بیس یا تیزاب سے بے اثر کرنا شامل ہے۔"
  },
  {
    "id": 269,
    "text": "Learning about the different food habits of birds during a field visit to a bird sanctuary is this type of learning. (TSTET 2016)\nپرندوں کی پناہ گاہ کے فیلڈ وزٹ کے دوران پرندوں کی مختلف غذائی عادات کے بارے میں جاننا اس قسم کا سیکھنا ہے۔",
    "options": [
      "Learning by doing\nکر کے سیکھنا",
      "Learning by observation\nمشاہدے سے سیکھنا",
      "Learning through peer group\nہم مرتبہ گروپ کے ذریعے سیکھنا",
      "Learning by reading\nپڑھ کر سیکھنا"
    ],
    "correct": "Learning by observation",
    "explanation": "ایک پناہ گاہ کا فیلڈ وزٹ جہاں طلباء پرندوں کو ان کے قدرتی مسکن میں ان کے طرز عمل (جیسے کھانا کھلانا) کو سمجھنے کے لیے دیکھتے ہیں، یہ **مشاہدے سے سیکھنے** کی ایک بہترین مثال ہے۔ طلباء حقیقی دنیا کی ترتیب میں براہ راست دیکھ کر اور تفصیلات کو نوٹ کر کے علم حاصل کر رہے ہیں۔ جبکہ دیگر قسم کی تعلیم بھی ہو سکتی ہے، بیان کردہ بنیادی سرگرمی مشاہداتی ہے۔"
  },
  {
    "id": 270,
    "text": "Which of the following is NOT a purpose of formative evaluation? (TSTET 2016)\nمندرجہ ذیل میں سے کون سا تشکیلی تشخیص کا مقصد نہیں ہے؟",
    "options": [
      "To decide the rank of the student in a class.\nکلاس میں طالب علم کا درجہ طے کرنا۔",
      "To make necessary changes in teaching strategies.\nتدریسی حکمت عملیوں میں ضروری تبدیلیاں کرنا۔",
      "To get feedback about a student's learning at different stages of teaching.\nتدریس کے مختلف مراحل میں طالب علم کی تعلیم کے بارے میں رائے حاصل کرنا۔",
      "To improve the quality of the teaching-learning process.\nتدریسی-سیکھنے کے عمل کے معیار کو بہتر بنانا۔"
    ],
    "correct": "To decide the rank of the student in a class.",
    "explanation": "**تشکیلی تشخیص** سیکھنے *کے لیے* تشخیص ہے، جو تدریسی عمل کے دوران طالب علم کی پیشرفت کی نگرانی اور رائے فراہم کرنے کے لیے کی جاتی ہے۔ اس کے مقاصد میں تدریسی حکمت عملیوں کو بہتر بنانا اور طالب علم کی تعلیم کو بڑھانا شامل ہے۔ اس کے برعکس، **خلاصہ تشخیص** سیکھنے *کی* تشخیص ہے، جو ایک یونٹ کے آخر میں کی جاتی ہے تاکہ یہ معلوم کیا جا سکے کہ کیا سیکھا گیا ہے۔ گریڈ اور طلباء کی درجہ بندی کا فیصلہ کرنا خلاصہ تشخیص کے عام مقاصد ہیں، تشکیلی تشخیص کے نہیں۔"
  },
  {
    "id": 271,
    "text": "Pressure is a: (TSTET 24 June 2025)\nدباؤ ایک ہے:",
    "options": [
      "Vector quantity\nسمتی مقدار",
      "Scalar quantity\nعددی مقدار",
      "Unit of temperature\nدرجہ حرارت کی اکائی",
      "Fundamental quantity\nبنیادی مقدار"
    ],
    "correct": "Scalar quantity",
    "explanation": "دباؤ کی تعریف فی اکائی رقبہ قوت ($P = F/A$) کے طور پر کی جاتی ہے۔ اگرچہ قوت ایک سمتی مقدار ہے، دباؤ ایک عددی مقدار ہے کیونکہ یہ ایک نقطہ پر تمام سمتوں میں یکساں طور پر عمل کرتا ہے۔ اس کی مقدار ہے لیکن کوئی مخصوص سمت نہیں۔ دباؤ ایک ماخوذ مقدار ہے، بنیادی نہیں، اور اس کی اکائی پاسکل (Pa) ہے، نہ کہ درجہ حرارت کی اکائی۔"
  },
  {
    "id": 272,
    "text": "Among the following, which constellation is NOT visible from Telangana, India? (TSTET 24 June 2025)\nمندرجہ ذیل میں سے، کون سا برج تلنگانہ، ہندوستان سے نظر نہیں آتا؟",
    "options": [
      "Orion\nاورین (شکاری)",
      "Crux\nصلیب جنوبی",
      "Saptharshi\nدب اکبر",
      "Leo\nاسد"
    ],
    "correct": "Crux",
    "explanation": "تلنگانہ شمالی نصف کرہ میں ہے۔ برج صلیب جنوبی، جسے سدرن کراس بھی کہا جاتا ہے، جنوبی نصف کرہ کا ایک نمایاں برج ہے۔ یہ عام طور پر تلنگانہ جیسے شمالی نصف کرہ کے مقامات سے نظر نہیں آتا۔ اورین (شکاری)، سپت رشی (دب اکبر کا حصہ)، اور لیو (اسد) سبھی ہندوستان سے سال کے مختلف اوقات میں نظر آتے ہیں۔"
  },
  {
    "id": 273,
    "text": "The refractive index of the material \"sapphire\" is (TSTET 24 June 2025)\nمادہ \"نیلم\" کا انعطافی اشاریہ ہے",
    "options": [
      "1.33",
      "1.52",
      "1.77",
      "2.42"
    ],
    "correct": "1.77",
    "explanation": "انعطافی اشاریہ یہ پیمائش کرتا ہے کہ کسی مادے میں داخل ہوتے وقت روشنی کتنی مڑتی ہے۔ نیلم کا تخمینی انعطافی اشاریہ 1.77 ہے۔ حوالہ کے لیے، 1.33 پانی کا، 1.52 کراؤن گلاس کا، اور 2.42 ہیرے کا انعطافی اشاریہ ہے۔"
  },
  {
    "id": 274,
    "text": "Identify from the following, the correct set that contains the four quantities which play an important role in describing the nature of a sound wave (TSTET 24 June 2025)\nمندرجہ ذیل میں سے، اس صحیح سیٹ کی شناخت کریں جس میں وہ چار مقداریں ہیں جو آواز کی لہر کی نوعیت کو بیان کرنے میں اہم کردار ادا کرتی ہیں",
    "options": [
      "Frequency, wavelength, amplitude, and speed\nتعدد، طول موج، حیطہ، اور رفتار",
      "Frequency, temperature, amplitude, and pitch\nتعدد، درجہ حرارت، حیطہ، اور پچ",
      "Intensity, colour, speed, and wavelength\nشدت، رنگ، رفتار، اور طول موج",
      "Amplitude, intensity, colour, and pitch\nحیطہ، شدت، رنگ، اور پچ"
    ],
    "correct": "Frequency, wavelength, amplitude, and speed",
    "explanation": "وہ بنیادی خصوصیات جو ایک لہر کو بیان کرتی ہیں وہ اس کا تعدد (پچ کا تعین کرتا ہے)، طول موج (چوٹیوں کے درمیان فاصلہ)، حیطہ (بلندی/شدت کا تعین کرتا ہے)، اور رفتار (یہ کتنی تیزی سے سفر کرتی ہے) ہیں۔ دیگر اختیارات میں غیر متعلقہ اصطلاحات جیسے 'رنگ' (روشنی کی لہروں کے لیے) یا ادراکی/ماحولیاتی عوامل جیسے 'پچ' اور 'درجہ حرارت' شامل ہیں۔"
  },
  {
    "id": 275,
    "text": "If 1 L of water is heated for a certain time and its temperature rises by 2°C, then if 2 L of water is heated for the same amount of time with the same heat source, how much would its temperature rise (assuming no heat loss)? (TSTET 24 June 2025)\nاگر 1 لیٹر پانی کو ایک مخصوص وقت کے لیے گرم کیا جائے اور اس کا درجہ حرارت 2°C بڑھ جائے، تو اگر 2 لیٹر پانی کو اسی حرارتی منبع سے اتنے ہی وقت کے لیے گرم کیا جائے، تو اس کا درجہ حرارت کتنا بڑھے گا (یہ فرض کرتے ہوئے کہ حرارت کا کوئی نقصان نہیں ہوتا)؟",
    "options": [
      "1°C",
      "2°C",
      "4°C",
      "0.5°C"
    ],
    "correct": "1°C",
    "explanation": "فراہم کردہ حرارت (Q) کا تعلق کمیت (m)، مخصوص حرارتی گنجائش (c)، اور درجہ حرارت کی تبدیلی (ΔT) سے $Q = mcΔT$ کے ذریعے ہے۔ چونکہ حرارتی منبع اور وقت ایک ہی ہیں، فراہم کردہ کل حرارت (Q) مستقل ہے۔ جب پانی کی کمیت دوگنی ہو جاتی ہے (1 لیٹر سے 2 لیٹر)، تو 'mcΔT' کی پیداوار کو مستقل رکھنے کے لیے درجہ حرارت میں اضافہ آدھا ہونا چاہیے۔ لہذا، درجہ حرارت میں اضافہ 2°C / 2 = 1°C ہوگا۔"
  },
  {
    "id": 276,
    "text": "Two people push a car for 4 seconds with a combined net force of 400 N. What is the impulse provided to the car? (In newton seconds) (TSTET 24 June 2025)\nدو لوگ ایک کار کو 4 سیکنڈ کے لیے 400 نیوٹن کی مشترکہ خالص قوت سے دھکیلتے ہیں۔ کار کو فراہم کردہ امپلس کیا ہے؟ (نیوٹن سیکنڈ میں)",
    "options": [
      "100",
      "400",
      "800",
      "1600"
    ],
    "correct": "1600",
    "explanation": "امپلس کسی چیز پر لگائی گئی خالص قوت اور اس وقت کے وقفے کا حاصل ضرب ہے جس پر قوت لگائی جاتی ہے۔ فارمولا ہے امپلس = قوت × وقت۔ دی گئی قوت = 400 نیوٹن اور وقت = 4 سیکنڈ، امپلس $400 \\times 4 = 1600$ N·s ہے۔"
  },
  {
    "id": 277,
    "text": "A wire of length 0.5 m carrying a current of 4 A is placed perpendicular to a uniform magnetic field. If the force acting on the wire is 2 N, what is the magnetic flux density of the field (in Tesla)? (TSTET 24 June 2025)\n0.5 میٹر لمبی تار جس میں 4 ایمپیئر کرنٹ ہے، ایک یکساں مقناطیسی میدان کے عموداً رکھی گئی ہے۔ اگر تار پر لگنے والی قوت 2 نیوٹن ہے، تو میدان کی مقناطیسی فلکس کثافت کیا ہے (ٹیسلا میں)؟",
    "options": [
      "0.5",
      "1.0",
      "2.0",
      "4.0"
    ],
    "correct": "1.0",
    "explanation": "مقناطیسی میدان (B) میں کرنٹ لے جانے والی تار پر قوت (F) $F = BIL\\sin{\\theta}$ کے ذریعے دی جاتی ہے۔ چونکہ تار میدان کے عموداً ہے، اس لیے $\\theta = 90°$ اور $\\sin{90°} = 1$۔ فارمولا آسان ہو کر $F = BIL$ بن جاتا ہے۔ B (مقناطیسی فلکس کثافت) کو حل کرنے کے لیے دوبارہ ترتیب دینے پر، ہمیں $B = F / (IL)$ ملتا ہے۔ اقدار کو پلگ ان کرنے پر: $B = 2 N / (4 A \\times 0.5 m) = 2 / 2 = 1.0$ T۔"
  },
  {
    "id": 278,
    "text": "Read the following statements and choose the correct answer. Statement I: In a series connection of resistors, the current I is constant. Statement II: In a parallel connection of resistors, the voltage V is constant. (TSTET 24 June 2025)\nمندرجہ ذیل بیانات کو پڑھیں اور صحیح جواب کا انتخاب کریں۔ بیان I: رزسٹروں کے سلسلہ وار جوڑ میں، کرنٹ I مستقل رہتا ہے۔ بیان II: رزسٹروں کے متوازی جوڑ میں، وولٹیج V مستقل رہتا ہے۔",
    "options": [
      "Only Statement I is correct\nصرف بیان I صحیح ہے",
      "Only Statement II is correct\nصرف بیان II صحیح ہے",
      "Both Statement I and Statement II are correct\nبیان I اور بیان II دونوں صحیح ہیں",
      "Both Statement I and Statement II are incorrect\nبیان I اور بیان II دونوں غلط ہیں"
    ],
    "correct": "Both Statement I and Statement II are correct",
    "explanation": "بیان I صحیح ہے کیونکہ ایک سلسلہ وار سرکٹ میں، کرنٹ کے بہاؤ کے لیے صرف ایک راستہ ہوتا ہے، لہذا یہ تمام اجزاء میں یکساں رہتا ہے۔ بیان II صحیح ہے کیونکہ ایک متوازی سرکٹ میں اجزاء ایک ہی دو نکات کے درمیان جڑے ہوتے ہیں، جس کا مطلب ہے کہ ہر جزو کے پار وولٹیج ڈراپ یکساں ہوتا ہے۔"
  },
  {
    "id": 279,
    "text": "One among the following scientists DID NOT work on Atomic theory (TSTET 24 June 2025)\nمندرجہ ذیل سائنسدانوں میں سے ایک نے جوہری نظریہ پر کام نہیں کیا",
    "options": [
      "John Dalton\nجان ڈالٹن",
      "J.J. Thomson\nجے جے تھامسن",
      "Isaac Newton\nاسحاق نیوٹن",
      "Niels Bohr\nنیلز بوہر"
    ],
    "correct": "Isaac Newton",
    "explanation": "جان ڈالٹن، جے جے تھامسن، اور نیلز بوہر سبھی جدید جوہری نظریہ کی ترقی میں کلیدی شخصیات ہیں۔ اسحاق نیوٹن، ایک کلاسیکی طبیعیات دان، اپنی حرکت اور عالمی کشش ثقل کے قوانین کے لیے مشہور ہیں؛ ان کا کام ایٹم کی ساخت سے پہلے کا تھا اور اس کا براہ راست تعلق نہیں تھا۔"
  },
  {
    "id": 280,
    "text": "Common salt (NaCl) is NOT a direct raw material for the following material (TSTET 24 June 2025)\nعام نمک (NaCl) مندرجہ ذیل میں سے کس مواد کے لیے براہ راست خام مال نہیں ہے؟",
    "options": [
      "Caustic soda\nکاسٹک سوڈا",
      "Bleaching powder\nبلیچنگ پاؤڈر",
      "Baking soda\nبیکنگ سوڈا",
      "Gypsum\nجپسم"
    ],
    "correct": "Gypsum",
    "explanation": "کاسٹک سوڈا (NaOH)، بلیچنگ پاؤڈر (CaOCl₂)، اور بیکنگ سوڈا (NaHCO₃) سبھی صنعتی عمل میں عام نمک (NaCl) یا اس کی ضمنی مصنوعات (جیسے کلورین) کا استعمال کرکے تیار کیے جاتے ہیں۔ جپسم (CaSO₄·2H₂O) قدرتی طور پر پایا جانے والا معدنیات ہے اور NaCl سے پیدا نہیں ہوتا ہے۔"
  },
  {
    "id": 281,
    "text": "According to the latest IUPAC recommendations, the unit 'amu' has been replaced by 'u' which stands for (TSTET 24 June 2025)\nتازہ ترین IUPAC سفارشات کے مطابق، اکائی 'amu' کو 'u' سے تبدیل کر دیا گیا ہے جس کا مطلب ہے",
    "options": [
      "Unified mass unit\nمتحد کمیت اکائی",
      "Unmeasured atomic unit\nغیر پیمائشی جوہری اکائی",
      "Universal molecular unit\nآفاقی سالماتی اکائی",
      "Unique matter unit\nمنفرد مادہ اکائی"
    ],
    "correct": "Unified mass unit",
    "explanation": "IUPAC نے پرانی 'amu' (جوہری کمیت اکائی) کو 'u' سے تبدیل کر دیا تاکہ 'متحد جوہری کمیت اکائی' کی نمائندگی کی جا سکے۔ اس کی تعریف ایک غیر جانبدار کاربن-12 ایٹم کی اس کی زمینی حالت میں کمیت کے بارہویں حصے کے طور پر کی گئی ہے۔ 'متحد' کی اصطلاح تعریف کو معیاری بنانے کے لیے منتخب کی گئی تھی۔"
  },
  {
    "id": 282,
    "text": "The tendency of an atom to lose electrons to form Cations, or gain electrons to form Anions depends on several factors. Choose one from the following which is NOT such a factor. (TSTET 24 June 2025)\nایک ایٹم کا کیٹائن بنانے کے لیے الیکٹران کھونے، یا اینائن بنانے کے لیے الیکٹران حاصل کرنے کا رجحان کئی عوامل پر منحصر ہے۔ مندرجہ ذیل میں سے ایک کا انتخاب کریں جو ایسا عنصر نہیں ہے۔",
    "options": [
      "Atomic size\nجوہری سائز",
      "Ionization potential\nآئنائزیشن پوٹینشل",
      "Electron affinity\nالیکٹران وابستگی",
      "Number of neutrons\nنیوٹران کی تعداد"
    ],
    "correct": "Number of neutrons",
    "explanation": "ایک ایٹم کا کیمیائی رویہ، بشمول آئن کی تشکیل، اس کی الیکٹران ترتیب سے چلتا ہے۔ جوہری سائز، آئنائزیشن پوٹینشل (ایک الیکٹران کو ہٹانے کے لیے توانائی)، اور الیکٹران وابستگی (الیکٹران حاصل کرتے وقت توانائی کی تبدیلی) جیسے عوامل اہم ہیں۔ نیوٹران کی تعداد ایک عنصر کے آئسوٹوپ کا تعین کرتی ہے لیکن، غیر جانبدار ہونے اور نیوکلئس میں ہونے کی وجہ سے، کیمیائی بانڈنگ یا آئن کی تشکیل پر براہ راست اثر انداز نہیں ہوتی۔"
  },
  {
    "id": 283,
    "text": "Read the following Assertion 'A' and Reason 'R' regarding photosynthesis. A) The colored substances in leaves like Chlorophyll, Phycobilins and Carotenoids take part in photosynthesis. R) Carotenoids and Phycobilins aid in the process of photosynthesis by passing on the energy of sunlight trapped by them to Chlorophyll. Choose the correct answer: (TSTET 24 June 2025)\nضیائی تالیف کے بارے میں مندرجہ ذیل دعویٰ 'A' اور وجہ 'R' کو پڑھیں۔ A) پتوں میں رنگین مادے جیسے کلوروفل، فائکوبلینز اور کیروٹینائڈز ضیائی تالیف میں حصہ لیتے ہیں۔ R) کیروٹینائڈز اور فائکوبلینز ضیائی تالیف کے عمل میں مدد کرتے ہیں، اپنے ذریعے پھنسائی گئی سورج کی روشنی کی توانائی کو کلوروفل تک پہنچا کر۔ صحیح جواب کا انتخاب کریں:",
    "options": [
      "'A' & 'R' are correct but, 'R' is not a correct explanation to 'A'.\n'A' اور 'R' صحیح ہیں لیکن 'R' 'A' کی صحیح وضاحت نہیں ہے۔",
      "'A' & 'R' are correct and 'R' is a correct explanation to 'A'.\n'A' اور 'R' صحیح ہیں اور 'R' 'A' کی صحیح وضاحت ہے۔",
      "'A' is correct & 'R' is incorrect.\n'A' صحیح ہے اور 'R' غلط ہے۔",
      "'A' is incorrect & 'R' is correct.\n'A' غلط ہے اور 'R' صحیح ہے۔"
    ],
    "correct": "'A' & 'R' are correct and 'R' is a correct explanation to 'A'.",
    "explanation": "دعویٰ (A) صحیح ہے؛ کلوروفل، کیروٹینائڈز، اور فائکوبلینز سبھی ضیائی تالیف کے روغن ہیں۔ وجہ (R) بھی صحیح ہے؛ کیروٹینائڈز اور فائکوبلینز اضافی روغن ہیں جو مختلف طول موجوں پر روشنی کی توانائی کو جذب کرتے ہیں اور اس توانائی کو کلوروفل میں منتقل کرتے ہیں، اس طرح ضیائی تالیف کے لیے استعمال ہونے والی روشنی کے سپیکٹرم کو وسیع کرتے ہیں۔ R، A میں مذکور اضافی روغن کے کردار کی صحیح وضاحت کرتا ہے۔"
  },
  {
    "id": 284,
    "text": "Identify from the following, which is NOT a characteristic feature of Monera (TSTET 24 June 2025)\nمندرجہ ذیل میں سے شناخت کریں، جو مونیرا کی خصوصیت نہیں ہے",
    "options": [
      "Cells have a membrane bound nucleus\nخلیوں میں جھلی سے بندھا ہوا نیوکلئس ہوتا ہے۔",
      "Single-celled organisms\nیک خلوی جاندار",
      "Move with the help of locomotor organs, like flagella, cilia or hair like structures\nحرکتی اعضاء کی مدد سے حرکت کرتے ہیں، جیسے فلیجیلا، سیلیا یا بالوں جیسی ساختیں۔",
      "Reproduce by splitting into two\nدو حصوں میں تقسیم ہو کر تولید کرتے ہیں۔"
    ],
    "correct": "Cells have a membrane bound nucleus",
    "explanation": "مونیرا کی سلطنت پروکیریوٹک جانداروں (جیسے بیکٹیریا) پر مشتمل ہے۔ پروکیریوٹس کی تعریفی خصوصیت جھلی سے بندھے ہوئے نیوکلئس اور دیگر جھلی سے بندھے ہوئے عضویوں کی عدم موجودگی ہے۔ دیگر اختیارات مونیرا کی خصوصیات ہیں: وہ یک خلوی ہیں، بہت سے میں حرکت کے لیے فلیجیلا ہوتے ہیں، اور وہ عام طور پر بائنری فیشن (دو میں تقسیم) کے ذریعے تولید کرتے ہیں۔"
  },
  {
    "id": 285,
    "text": "The fibre is used in boat building (TSTET 24 June 2025)\nیہ ریشہ کشتی سازی میں استعمال ہوتا ہے۔",
    "options": [
      "Rexene\nریکسین",
      "Acrylonitrile\nایکریلونائٹرائل",
      "Lunett\nلونیٹ",
      "Cialit\nسیالٹ"
    ],
    "correct": "Cialit",
    "explanation": "یہ سوال اصل زبان سے ممکنہ غلط ترجمہ کی وجہ سے ناقص ہے، جس میں لکڑی کے بارے میں پوچھا گیا تھا (صحیح جواب: ساگوان)۔ فراہم کردہ انگریزی اختیارات میں سے کوئی بھی ساختی کشتی سازی کے لیے معیاری ریشے نہیں ہیں۔ ریکسین نشستوں کے لیے مصنوعی چمڑا ہے، اور ایکریلونائٹرائل ایک کیمیائی پیش خیمہ ہے۔ 'لونیٹ' اور 'سیالٹ' عام اصطلاحات نہیں ہیں۔ یہ فرض کرتے ہوئے کہ 'سیالٹ' مطلوبہ جواب ہے، یہ سمندری ایپلی کیشنز میں استعمال ہونے والے ایک مرکب مواد کا کوئی غیر معروف تجارتی نام ہو سکتا ہے، لیکن سوال انگریزی میں پیش کردہ کے مطابق سائنسی طور پر درست نہیں ہے۔"
  },
  {
    "id": 286,
    "text": "Arrange the following stages of safe drinking water supply in a correct sequence: A) Chlorination B) Overhead tank C) Aeration D) Tank/Pond/River E) Filtration F) Taps. Choose the correct answer: (TSTET 24 June 2025)\nپینے کے صاف پانی کی فراہمی کے مندرجہ ذیل مراحل کو صحیح ترتیب میں ترتیب دیں: A) کلورینیشن B) اوور ہیڈ ٹینک C) ہوا دینا D) ٹینک/تالاب/دریا E) فلٹریشن F) نلکے۔ صحیح جواب کا انتخاب کریں:",
    "options": [
      "D -> C -> E -> A -> B -> F",
      "D -> F -> A -> B -> E -> F",
      "A -> B -> C -> D -> E -> F",
      "D -> A -> B -> C -> F -> E"
    ],
    "correct": "D -> C -> E -> A -> B -> F",
    "explanation": "میونسپل واٹر ٹریٹمنٹ اور سپلائی کی معیاری ترتیب یہ ہے: D) کسی ذریعہ (دریا/تالاب) سے جمع کرنا، C) ہوا دینا (گیسوں/بدبو کو دور کرنے کے لیے)، E) فلٹریشن (ذرات کو دور کرنے کے لیے)، A) کلورینیشن (جرثوموں کو مارنے کے لیے جراثیم کشی)، B) اوور ہیڈ ٹینک میں ذخیرہ کرنا (دباؤ فراہم کرنے کے لیے)، اور آخر میں F) نلکوں کے ذریعے تقسیم۔"
  },
  {
    "id": 287,
    "text": "Which of the following statement/s is/are correct? A) When the diaphragm contracts, the volume of the chest cavity is increased. B) When the diaphragm contracts, the volume of the chest cavity is decreased. C) When the diaphragm relaxes, the volume of the chest cavity is decreased. D) When the diaphragm relaxes, the volume of the chest cavity is increased. Choose the correct answer: (TSTET 24 June 2025)\nمندرجہ ذیل میں سے کون سا بیان/بیانات صحیح ہے/ہیں؟ A) جب ڈایافرام سکڑتا ہے، تو سینے کی گہا کا حجم بڑھ جاتا ہے۔ B) جب ڈایافرام سکڑتا ہے، تو سینے کی گہا کا حجم کم ہو جاتا ہے۔ C) جب ڈایافرام آرام کرتا ہے، تو سینے کی گہا کا حجم کم ہو جاتا ہے۔ D) جب ڈایافرام آرام کرتا ہے، تو سینے کی گہا کا حجم بڑھ جاتا ہے۔ صحیح جواب کا انتخاب کریں:",
    "options": [
      "A only\nصرف A",
      "A & D only\nصرف A اور D",
      "A & C only\nصرف A اور C",
      "B & D only\nصرف B اور D"
    ],
    "correct": "A & C only",
    "explanation": "سانس لینے کے دوران، ڈایافرام سکڑتا ہے اور نیچے کی طرف حرکت کرتا ہے، جس سے سینے کی گہا کا حجم بڑھ جاتا ہے (بیان A صحیح ہے)۔ سانس چھوڑنے کے دوران، ڈایافرام آرام کرتا ہے اور اپنی گنبد نما شکل میں اوپر کی طرف حرکت کرتا ہے، جس سے سینے کی گہا کا حجم کم ہو جاتا ہے (بیان C صحیح ہے)۔ بیانات B اور D غلط ہیں۔"
  },
  {
    "id": 288,
    "text": "The constriction or dilation of the pupil of the eye is controlled by the: (TSTET 24 June 2025)\nآنکھ کی پتلی کا سکڑنا یا پھیلنا کس کے ذریعے کنٹرول کیا جاتا ہے:",
    "options": [
      "Retina\nریٹنا",
      "Cornea\nقرنیہ",
      "Iris\nآئرس",
      "Lens\nعدسہ"
    ],
    "correct": "Iris",
    "explanation": "آئرس آنکھ کا رنگین، عضلاتی حصہ ہے جو پتلی کو گھیرے ہوئے ہے۔ یہ پتلی کے سائز کو کنٹرول کرتا ہے، آنکھ میں داخل ہونے والی روشنی کی مقدار کو منظم کرتا ہے۔ یہ تیز روشنی میں پتلی کو سکیڑتا ہے اور مدھم روشنی میں اسے پھیلاتا ہے۔"
  },
  {
    "id": 289,
    "text": "The pH of human blood is approximately: (TSTET 24 June 2025)\nانسانی خون کا پی ایچ تقریباً ہے:",
    "options": [
      "6.4",
      "7.0",
      "7.4",
      "8.0"
    ],
    "correct": "7.4",
    "explanation": "انسانی خون قدرے الکلائن (اساسی) ہوتا ہے۔ اس کا پی ایچ 7.35 سے 7.45 کی تنگ رینج میں سختی سے برقرار رکھا جاتا ہے۔ 7.4 کی قدر عام اوسط ہے۔ 7 کا پی ایچ غیر جانبدار ہے، اور 7 سے نیچے تیزابی ہے۔"
  },
  {
    "id": 290,
    "text": "One among the following is NOT an air-borne disease: (TSTET 24 June 2025)\nمندرجہ ذیل میں سے ایک ہوا سے پیدا ہونے والی بیماری نہیں ہے:",
    "options": [
      "Common Cold\nعام سردی",
      "Tuberculosis\nتپ دق",
      "Cholera\nہیضہ",
      "COVID-19\nکوویڈ-19"
    ],
    "correct": "Cholera",
    "explanation": "ہوا سے پیدا ہونے والی بیماریاں ہوا میں موجود پیتھوجینز کے ذریعے پھیلتی ہیں، جیسے عام سردی، تپ دق، اور کوویڈ-19۔ ہیضہ ایک کلاسیکی پانی سے پیدا ہونے والی بیماری ہے، جو آلودہ خوراک یا پانی کے ذریعے نگلنے والے بیکٹیریا کی وجہ سے ہوتی ہے۔"
  },
  {
    "id": 291,
    "text": "Grafting is a horticultural technique that involves: (TSTET 24 June 2025)\nپیوند کاری ایک باغبانی کی تکنیک ہے جس میں شامل ہے:",
    "options": [
      "Growing plants from seeds\nبیجوں سے پودے اگانا",
      "Joining parts of two plants to make them grow as one\nدو پودوں کے حصوں کو جوڑ کر انہیں ایک کے طور پر اگانا",
      "Cultivating plants in a nutrient solution without soil\nمٹی کے بغیر غذائی محلول میں پودوں کی کاشت",
      "Producing new plants from a single parent cell\nایک ہی والدین کے خلیے سے نئے پودے پیدا کرنا"
    ],
    "correct": "Joining parts of two plants to make them grow as one",
    "explanation": "پیوند کاری غیر جنسی تولید کا ایک طریقہ ہے جہاں ایک پودے کا اوپری حصہ (سائن) دوسرے پودے کے جڑ کے نظام (روٹ اسٹاک) سے منسلک ہوتا ہے۔ دونوں حصے ایک ساتھ بڑھ کر ایک ہی پودا بن جاتے ہیں، جس میں دونوں کی مطلوبہ خصوصیات کو ملایا جاتا ہے۔"
  },
  {
    "id": 292,
    "text": "The 'Father of the Green Revolution' in India is: (TSTET 24 June 2025)\nہندوستان میں 'سبز انقلاب کا باپ' ہے:",
    "options": [
      "Verghese Kurien\nورگیز کورین",
      "M. S. Swaminathan\nایم ایس سوامی ناتھن",
      "Homi J. Bhabha\nہومی جے بھابھا",
      "Jagadish Chandra Bose\nجگدیش چندر بوس"
    ],
    "correct": "M. S. Swaminathan",
    "explanation": "ایم ایس سوامی ناتھن، ایک ہندوستانی جینیات دان، 'ہندوستان میں سبز انقلاب کے باپ' کے طور پر مشہور ہیں۔ 1960 کی دہائی میں گندم اور چاول کی زیادہ پیداوار دینے والی اقسام کو تیار کرنے اور متعارف کرانے میں ان کے کام نے ہندوستان کو اناج میں خود کفیل بنانے میں اہم کردار ادا کیا۔"
  },
  {
    "id": 293,
    "text": "Which of the following is/are aim(s) of teaching science at the upper primary stage? (TSTET 24 June 2025)\nبالائی پرائمری سطح پر سائنس پڑھانے کا/کے مقصد/مقاصد مندرجہ ذیل میں سے کون سا/سے ہیں؟",
    "options": [
      "To develop scientific temper and curiosity\nسائنسی مزاج اور تجسس پیدا کرنا",
      "To understand facts and principles of science\nسائنس کے حقائق اور اصولوں کو سمجھنا",
      "To relate science education to the environment and everyday life\nسائنس کی تعلیم کو ماحول اور روزمرہ کی زندگی سے جوڑنا",
      "All of the above\nمندرجہ بالا تمام"
    ],
    "correct": "All of the above",
    "explanation": "بالائی پرائمری سطح پر موثر سائنس کی تعلیم کا مقصد جامع ہونا ہے۔ اس کا مقصد سائنسی ذہنیت (مزاج اور تجسس) پیدا کرنا، بنیادی علم (حقائق اور اصول) فراہم کرنا، اور یہ یقینی بنانا ہے کہ تعلیم کو طلباء کی اپنی زندگیوں اور ماحول سے جوڑ کر متعلقہ بنایا جائے۔"
  },
  {
    "id": 294,
    "text": "Which of the following statements is INCORRECT regarding the nature of science teaching? (TSTET 24 June 2025)\nسائنس کی تدریس کی نوعیت کے بارے میں مندرجہ ذیل میں سے کون سا بیان غلط ہے؟",
    "options": [
      "It should encourage inquiry and questioning\nاسے تحقیق اور سوالات کی حوصلہ افزائی کرنی چاہیے",
      "It should promote hands-on activities and experimentation\nاسے عملی سرگرمیوں اور تجربات کو فروغ دینا چاہیے",
      "Science should be taught as a collection of isolated facts and definitions to be memorized\nسائنس کو یاد کرنے کے لیے الگ تھلگ حقائق اور تعریفوں کے مجموعے کے طور پر پڑھایا جانا چاہیے",
      "It should develop problem-solving skills\nاسے مسئلہ حل کرنے کی مہارتیں تیار کرنی چاہئیں"
    ],
    "correct": "Science should be taught as a collection of isolated facts and definitions to be memorized",
    "explanation": "یہ بیان غلط ہے کیونکہ یہ رٹنے کے پرانے طریقے کو بیان کرتا ہے۔ جدید سائنس کی تعلیم اس بات پر زور دیتی ہے کہ سائنس تحقیق، تجربات، اور مسئلہ حل کرنے کا ایک متحرک عمل ہے، نہ کہ صرف یاد کرنے کے لیے حقائق کا ایک جامد مجموعہ۔"
  },
  {
    "id": 295,
    "text": "Which one of the following does NOT describe a good science curriculum? (TSTET 24 June 2025)\nمندرجہ ذیل میں سے کون ایک اچھے سائنس نصاب کو بیان نہیں کرتا؟",
    "options": [
      "It should be child-centric and activity-based\nاسے بچہ پر مبنی اور سرگرمی پر مبنی ہونا چاہیے",
      "It should be relevant to the local and global context\nاسے مقامی اور عالمی تناظر سے متعلق ہونا چاہیے",
      "It should be teacher-centric and rigid\nاسے استاد پر مبنی اور سخت ہونا چاہیے",
      "It should be flexible and allow for the inclusion of new scientific developments\nاسے لچکدار ہونا چاہیے اور نئی سائنسی پیشرفتوں کو شامل کرنے کی اجازت دینی چاہیے"
    ],
    "correct": "It should be teacher-centric and rigid",
    "explanation": "ایک اچھا نصاب سیکھنے والے کی ضروریات اور علمی ترقی کے ارد گرد ڈیزائن کیا جانا چاہیے (بچہ پر مبنی)، نہ کہ استاد کے ذریعے سختی سے حکم دیا جائے۔ اسے مختلف سیکھنے کے انداز کو اپنانے اور نئے علم کو شامل کرنے کے لیے بھی لچکدار ہونا چاہیے، جو استاد پر مبنی اور سخت نقطہ نظر کو ناپسندیدہ بناتا ہے۔"
  },
  {
    "id": 296,
    "text": "Which of the following is NOT an audio-visual aid? (TSTET 24 June 2025)\nمندرجہ ذیل میں سے کون سی سمعی و بصری امداد نہیں ہے؟",
    "options": [
      "Television\nٹیلی ویژن",
      "Film projector\nفلم پروجیکٹر",
      "Computer with multimedia\nملٹی میڈیا کے ساتھ کمپیوٹر",
      "Radio\nریڈیو"
    ],
    "correct": "Radio",
    "explanation": "سمعی و بصری امداد بینائی اور سماعت دونوں کو اپیل کرتی ہیں۔ ٹیلی ویژن، فلمیں، اور ملٹی میڈیا کمپیوٹر سمعی و بصری امداد کی مثالیں ہیں۔ ریڈیو صرف ایک سمعی امداد ہے، کیونکہ یہ آواز فراہم کرتا ہے لیکن کوئی بصری جزو نہیں۔"
  },
  {
    "id": 297,
    "text": "Which of the following is a feature of the Project Method of teaching science? (TSTET 24 June 2025)\nمندرجہ ذیل میں سے کون سا سائنس پڑھانے کے پروجیکٹ طریقہ کی خصوصیت ہے؟",
    "options": [
      "It provides a real-life problem or purpose\nیہ ایک حقیقی زندگی کا مسئلہ یا مقصد فراہم کرتا ہے۔",
      "Students plan and execute the activity\nطلباء سرگرمی کی منصوبہ بندی اور اس پر عمل درآمد کرتے ہیں۔",
      "Learning is cooperative and experience-based\nسیکھنا باہمی تعاون اور تجربے پر مبنی ہے۔",
      "All of the above\nمندرجہ بالا تمام"
    ],
    "correct": "All of the above",
    "explanation": "پروجیکٹ طریقہ کی خصوصیت یہ ہے کہ یہ بامقصد اور حقیقی زندگی کے سیاق و سباق پر مبنی ہے۔ یہ طالب علم پر مبنی ہے، جس میں سیکھنے والوں کو اپنے کاموں کی منصوبہ بندی اور ان پر عمل درآمد کرنے کی ضرورت ہوتی ہے۔ یہ عملی، براہ راست تجربات کے ذریعے باہمی تعاون سے سیکھنے کو بھی فروغ دیتا ہے۔ تمام درج کردہ اختیارات اس طریقہ کی کلیدی خصوصیات ہیں۔"
  },
  {
    "id": 298,
    "text": "What is the main purpose of Continuous and Comprehensive Evaluation (CCE) in science? (TSTET 24 June 2025)\nسائنس میں مسلسل اور جامع تشخیص (CCE) کا بنیادی مقصد کیا ہے؟",
    "options": [
      "To rank students based on their performance\nطلباء کو ان کی کارکردگی کی بنیاد پر درجہ بندی کرنا",
      "To assess only the cognitive aspects of learning\nصرف سیکھنے کے علمی پہلوؤں کا جائزہ لینا",
      "To reduce the stress of examinations on students\nطلباء پر امتحانات کے دباؤ کو کم کرنا",
      "To assess every aspect of the child during their presence at school\nاسکول میں موجودگی کے دوران بچے کے ہر پہلو کا جائزہ لینا"
    ],
    "correct": "To assess every aspect of the child during their presence at school",
    "explanation": "CCE کا بنیادی اصول اس کی جامع نوعیت ہے۔ اس کا مقصد ایک طالب علم کی مجموعی ترقی کا جائزہ لینا ہے، جس میں تعلیمی (علمی) اور شریک تعلیمی (جذباتی، نفسیاتی) پہلوؤں کا احاطہ کیا گیا ہے۔ تشخیص تعلیمی سال بھر مسلسل ہوتی ہے، نہ کہ صرف ایک بار کا امتحان۔"
  },
  {
    "id": 299,
    "text": "Which of the following is NOT a characteristic of a good science textbook? (TSTET 24 June 2025)\nمندرجہ ذیل میں سے کون سی ایک اچھی سائنس کی نصابی کتاب کی خصوصیت نہیں ہے؟",
    "options": [
      "The language used is simple, clear, and appropriate for the age level\nاستعمال کی گئی زبان سادہ، واضح اور عمر کی سطح کے لیے موزوں ہے",
      "It includes plenty of diagrams, illustrations, and activities\nاس میں بہت سارے خاکے، تصاویر، اور سرگرمیاں شامل ہیں",
      "Contains only theoretical concepts without practical applications or examples\nعملی ایپلی کیشنز یا مثالوں کے بغیر صرف نظریاتی تصورات پر مشتمل ہے",
      "The content is accurate, up-to-date, and free from bias\nمواد درست، تازہ ترین، اور تعصب سے پاک ہے"
    ],
    "correct": "Contains only theoretical concepts without practical applications or examples",
    "explanation": "ایک اچھی سائنس کی نصابی کتاب کو نظریہ اور عمل کے درمیان پل کا کام کرنا چاہیے۔ اسے تجریدی سائنسی تصورات کو حقیقی دنیا کی مثالوں، عملی ایپلی کیشنز، اور عملی سرگرمیوں سے جوڑنا چاہیے تاکہ سیکھنے کو بامعنی اور دلچسپ بنایا جا سکے۔ صرف نظریہ پر مشتمل کتاب کو غیر موثر سمجھا جاتا ہے۔"
  },
  {
    "id": 300,
    "text": "The teaching method which emphasizes 'learning by doing' and involves students in hands-on activities to discover scientific principles is the: (TSTET 24 June 2025)\nوہ تدریسی طریقہ جو 'کر کے سیکھنے' پر زور دیتا ہے اور طلباء کو سائنسی اصولوں کو دریافت کرنے کے لیے عملی سرگرمیوں میں شامل کرتا ہے، وہ ہے:",
    "options": [
      "Lecture method\nلیکچر کا طریقہ",
      "Laboratory method\nلیبارٹری کا طریقہ",
      "Textbook method\nنصابی کتاب کا طریقہ",
      "Demonstration method\nمظاہرے کا طریقہ"
    ],
    "correct": "Laboratory method",
    "explanation": "لیبارٹری کا طریقہ بنیادی طور پر 'کر کے سیکھنے' کے اصول پر مبنی ہے۔ یہ طلباء کو فعال طور پر تجربات میں مشغول ہونے، آلات میں ہیرا پھیری کرنے، مظاہر کا براہ راست مشاہدہ کرنے، اور اپنے نتائج اخذ کرنے کی اجازت دیتا ہے، جو سائنسی اصولوں کو سمجھنے کا سب سے موثر طریقہ ہے۔"
  },
  {
    "id": "301",
    "text": "Only liquids exhibit surface tension because (TSTET 19 June 2025)\nصرف مائعات ہی سطحی تناؤ کا مظاہرہ کرتے ہیں کیونکہ",
    "options": [
      "liquids have no fixed volume\nمائعات کا کوئی مقررہ حجم نہیں ہوتا",
      "gases have strong intermolecular forces\nگیسوں میں مضبوط بین سالماتی قوتیں ہوتی ہیں",
      "liquids have high density\nمائعات کی کثافت زیادہ ہوتی ہے",
      "gases do not have free surfaces\nگیسوں کی آزاد سطحیں نہیں ہوتیں"
    ],
    "correct": "gases do not have free surfaces",
    "explanation": "سطحی تناؤ کسی مائع کی سطح کی ایک خصوصیت ہے جو اس کے مالیکیولز کے باہمی ربط کا نتیجہ ہے۔ یہ خصوصیت مائع کو بیرونی قوت کے خلاف مزاحمت کرنے کی اجازت دیتی ہے۔ یہ ایک مائع اور دوسرے واسطے (جیسے ہوا) کے درمیان انٹرفیس پر ہوتا ہے۔ مائعات کی ایک الگ، آزاد سطح ہوتی ہے جہاں یہ تناؤ ظاہر ہوتا ہے۔ تاہم، گیسیں اپنے کنٹینر کو مکمل طور پر بھرنے کے لیے پھیل جاتی ہیں اور ان کی کوئی آزاد سطح نہیں ہوتی۔ اس لیے، وہ سطحی تناؤ کا مظاہرہ نہیں کر سکتیں۔"
  },
  {
    "id": "302",
    "text": "In Telangana State, the Great Bear (Saptharishi) is (TSTET 19 June 2025)\nریاست تلنگانہ میں، دب اکبر (سپت رشی) ہوتا ہے",
    "options": [
      "visible in North direction\nشمالی سمت میں نظر آتا ہے",
      "visible in South direction\nجنوبی سمت میں نظر آتا ہے",
      "visible in Equatorial region\nخط استوا کے علاقے میں نظر آتا ہے",
      "visible in Antarctic Circle\nقطب جنوبی کے دائرے میں نظر آتا ہے"
    ],
    "correct": "visible in North direction",
    "explanation": "دب اکبر، جسے ارسا میجر یا سپت رشی بھی کہا جاتا ہے، شمالی آسمانی نصف کرہ میں ایک نمایاں برج ہے۔ چونکہ تلنگانہ، ہندوستان، زمین کے شمالی نصف کرہ میں واقع ہے، اس لیے وہاں کے مبصرین اس برج کو آسمان کے شمالی حصے میں دیکھیں گے۔ یہ قطب جنوبی کے دائرے سے نظر نہیں آتا۔"
  },
  {
    "id": "303",
    "text": "The typical angle between any two mirrors used in a classic kaleidoscope is (in degrees) (TSTET 19 June 2025)\nایک کلاسک کیلیڈوسکوپ میں استعمال ہونے والے کسی بھی دو آئینوں کے درمیان عام زاویہ (ڈگری میں) ہوتا ہے",
    "options": [
      "60",
      "45",
      "30",
      "90"
    ],
    "correct": "60",
    "explanation": "ایک معیاری کیلیڈوسکوپ تین مستطیل آئینوں کا استعمال کرتے ہوئے بنایا جاتا ہے جنہیں ایک ساتھ رکھ کر ایک تکونی پرزم بنایا جاتا ہے۔ ان میں سے کسی بھی دو ملحقہ آئینوں کے درمیان زاویہ 60 ڈگری ہوتا ہے۔ یہ مخصوص زاویہ متعدد انعکاسات پیدا کرتا ہے جس کے نتیجے میں متناسب، مسدس نمونے بنتے ہیں، جو کیلیڈوسکوپ کے نظارے کی خصوصیت ہیں۔"
  },
  {
    "id": "304",
    "text": "Tuning fork is invented by (TSTET 19 June 2025)\nٹیوننگ فورک کا موجد کون ہے؟",
    "options": [
      "Alexander Graham Bell\nالیگزینڈر گراہم بیل",
      "John Tyndall\nجان ٹنڈل",
      "Thomas Alva Edison\nتھامس الوا ایڈیسن",
      "John Shore\nجان شور"
    ],
    "correct": "John Shore",
    "explanation": "ٹیوننگ فورک 1711 میں ایک انگریز موسیقار اور ٹرمپیٹر جان شور نے ایجاد کیا تھا۔ اس نے اسے اپنے آلات، خاص طور پر بربط کو ٹیون کرنے کے لیے ایک پچ معیار کے طور پر بنایا تھا۔ دیگر افراد مختلف ایجادات کے لیے مشہور ہیں: الیگزینڈر گراہم بیل (ٹیلی فون)، تھامس الوا ایڈیسن (عملی لائٹ بلب، فونوگراف)، اور جان ٹنڈل (ماحولیاتی طبیعیات پر کام)۔"
  },
  {
    "id": "305",
    "text": "Identify the correct explanation related to heat and temperature. (TSTET 19 June 2025)\nحرارت اور درجہ حرارت سے متعلق صحیح وضاحت کی نشاندہی کریں۔",
    "options": [
      "Heat determines the direction of temperature flow, while temperature is the energy in motion.\nحرارت درجہ حرارت کے بہاؤ کی سمت کا تعین کرتی ہے، جبکہ درجہ حرارت حرکت میں توانائی ہے۔",
      "Temperature is the total energy of a system, while heat is a measure of how cold it is.\nدرجہ حرارت ایک نظام کی کل توانائی ہے، جبکہ حرارت اس بات کا پیمانہ ہے کہ وہ کتنا ٹھنڈا ہے۔",
      "Temperature determines the direction of heat (energy) flow, whereas heat is the energy that flows.\nدرجہ حرارت حرارت (توانائی) کے بہاؤ کی سمت کا تعین کرتا ہے، جبکہ حرارت وہ توانائی ہے جو بہتی ہے۔",
      "Heat and temperature are the same physical quantities expressed in different units.\nحرارت اور درجہ حرارت ایک ہی طبعی مقداریں ہیں جن کا اظہار مختلف اکائیوں میں کیا جاتا ہے۔"
    ],
    "correct": "Temperature determines the direction of heat (energy) flow, whereas heat is the energy that flows.",
    "explanation": "درجہ حرارت کسی مادے میں ذرات کی اوسط حرکی توانائی کا ایک پیمانہ ہے اور اس کی گرمی کی ڈگری کی نشاندہی کرتا ہے۔ حرارت توانائی کی وہ شکل ہے جو زیادہ درجہ حرارت والے علاقے سے کم درجہ حرارت والے علاقے میں منتقل ہوتی ہے۔ لہذا، درجہ حرارت میں فرق حرارت کی منتقلی کی سمت کا تعین کرتا ہے۔"
  },
  {
    "id": "306",
    "text": "The motion of a body is said to be uniform when (TSTET 19 June 2025)\nکسی جسم کی حرکت کو یکساں کہا جاتا ہے جب",
    "options": [
      "its velocity is constant throughout the motion.\nاس کی رفتار پوری حرکت کے دوران مستقل رہتی ہے۔",
      "its speed increases uniformly with time.\nاس کی رفتار وقت کے ساتھ یکساں طور پر بڑھتی ہے۔",
      "it covers more distance in less time.\nیہ کم وقت میں زیادہ فاصلہ طے کرتا ہے۔",
      "its acceleration is increasing at a constant rate.\nاس کا اسراع مستقل شرح سے بڑھ رہا ہے۔"
    ],
    "correct": "its velocity is constant throughout the motion.",
    "explanation": "یکساں حرکت خاص طور پر مستقل رفتار (velocity) کے ساتھ حرکت سے مراد ہے۔ رفتار ایک سمتی مقدار ہے، یعنی اس کی مقدار (speed) اور سمت دونوں ہوتی ہیں۔ حرکت کے یکساں ہونے کے لیے، نہ تو رفتار اور نہ ہی سمت بدل سکتی ہے۔ اس کا مطلب یہ بھی ہے کہ اسراع صفر ہے۔ دیگر اختیارات غیر یکساں یا اسراعی حرکت کی مختلف شکلوں کو بیان کرتے ہیں۔"
  },
  {
    "id": "307",
    "text": "Identify the true statement about a magnetic field from the following. (TSTET 19 June 2025)\nمندرجہ ذیل میں سے مقناطیسی میدان کے بارے میں صحیح بیان کی نشاندہی کریں۔",
    "options": [
      "It exists only in two dimensions.\nیہ صرف دو جہتوں میں موجود ہے۔",
      "It is confined to the surface of the magnet.\nیہ مقناطیس کی سطح تک محدود ہے۔",
      "It is a three-dimensional region around a magnet.\nیہ مقناطیس کے ارد گرد ایک سہ جہتی خطہ ہے۔",
      "It exists only between the poles of a magnet.\nیہ صرف مقناطیس کے قطبین کے درمیان موجود ہے۔"
    ],
    "correct": "It is a three-dimensional region around a magnet.",
    "explanation": "مقناطیسی میدان ایک مقناطیسی مواد یا حرکت پذیر برقی چارج کے ارد گرد کا وہ خطہ ہے جس کے اندر مقناطیسیت کی قوت عمل کرتی ہے۔ یہ میدان کوئی چپٹی سطح نہیں ہے؛ یہ خلا میں تمام سمتوں میں پھیلا ہوا ہے، جو اسے ایک سہ جہتی (3D) خطہ بناتا ہے۔ فیلڈ لائنز کا استعمال اس 3D فیلڈ کو 2D سطح پر ظاہر کرنے کے لیے کیا جاتا ہے۔"
  },
  {
    "id": "308",
    "text": "If the current passing through a human body is 10 mA, then the effect may be: (TSTET 19 June 2025)\nاگر انسانی جسم سے گزرنے والا کرنٹ 10 ایم اے ہو تو اس کا اثر ہو سکتا ہے:",
    "options": [
      "Can be felt\nمحسوس کیا جا سکتا ہے",
      "Causes involuntary muscle contractions\nغیر ارادی پٹھوں کے سکڑاؤ کا سبب بنتا ہے",
      "Is painful\nتکلیف دہ ہوتا ہے",
      "Causes loss of muscle control\nپٹھوں پر کنٹرول کھونے کا سبب بنتا ہے"
    ],
    "correct": "Causes involuntary muscle contractions",
    "explanation": "10 ملی ایمپیئر (mA) کے کرنٹ پر، ایک انسان کو تکلیف دہ جھٹکا لگ سکتا ہے اور وہ رضاکارانہ پٹھوں پر کنٹرول کھونا شروع کر سکتا ہے۔ کرنٹ کی یہ سطح اکثر 'لیٹ-گو' حد کے قریب ہوتی ہے، جہاں غیر ارادی پٹھوں کا سکڑاؤ اتنا مضبوط ہوتا ہے کہ وہ شخص برقی ذریعہ سے اپنی گرفت نہیں چھوڑ سکتا۔ اگرچہ جھٹکا محسوس کیا جا سکتا ہے اور تکلیف دہ ہوتا ہے، لیکن اس سطح پر سب سے نمایاں خصوصیت غیر ارادی پٹھوں کے سکڑاؤ کا آغاز ہے۔"
  },
  {
    "id": "309",
    "text": "Precipitate is a/an: (TSTET 19 June 2025)\nرسوب (Precipitate) ایک ہے:",
    "options": [
      "A homogeneous mixture where one substance is dissolved in another\nایک یکساں آمیزہ جہاں ایک مادہ دوسرے میں حل ہوتا ہے",
      "A gaseous product released during a chemical reaction\nکیمیائی تعامل کے دوران خارج ہونے والی گیسی پیداوار",
      "An insoluble substance formed in a chemical reaction\nکیمیائی تعامل میں بننے والا ایک ناقابل حل مادہ",
      "A liquid that remains after evaporation\nایک مائع جو بخارات بننے کے بعد باقی رہ جاتا ہے"
    ],
    "correct": "An insoluble substance formed in a chemical reaction",
    "explanation": "کیمیا میں، رسوب ایک ناقابل حل ٹھوس مادہ ہے جو کیمیائی تعامل کے دوران محلول سے بنتا ہے۔ یہ اکثر اس وقت ہوتا ہے جب دو حل پذیر مرکبات تعامل کرکے ایک ناقابل حل پیداوار بناتے ہیں، جو پھر مائع محلول سے الگ ہوجاتا ہے۔ مثال کے طور پر، سلور نائٹریٹ اور سوڈیم کلورائیڈ کے محلول کو ملانے سے ناقابل حل سلور کلورائیڈ کا سفید رسوب پیدا ہوتا ہے۔"
  },
  {
    "id": "310",
    "text": "The material used in non-stick cookware is: (TSTET 19 June 2025)\nنان اسٹک برتنوں میں استعمال ہونے والا مواد ہے:",
    "options": [
      "Polyethylene\nپولی تھیلین",
      "PTFE (Polytetrafluoroethylene)\nپی ٹی ایف ای (پولی ٹیٹرا فلورو ایتھیلین)",
      "PVC (Polyvinyl chloride)\nپی وی سی (پولی وینائل کلورائیڈ)",
      "Bakelite\nبیکالائٹ"
    ],
    "correct": "PTFE (Polytetrafluoroethylene)",
    "explanation": "پولی ٹیٹرا فلورو ایتھیلین (PTFE)، جو بڑے پیمانے پر ٹفلون کے برانڈ نام سے جانا جاتا ہے، نان اسٹک برتنوں کے لیے کوٹنگ کے طور پر استعمال ہوتا ہے۔ اس کا بہت کم رگڑ کا گتانک کھانے کو سطح پر چپکنے سے روکتا ہے۔ پولی تھیلین پلاسٹک کے تھیلوں کے لیے، پی وی سی پائپوں کے لیے، اور بیکالائٹ ایک تھرموسیٹنگ پلاسٹک ہے جو برقی انسولیٹرز اور ہینڈلز کے لیے استعمال ہوتا ہے۔"
  },
  {
    "id": "311",
    "text": "Identify the material which DOES NOT form a flame among the following: (TSTET 19 June 2025)\nمندرجہ ذیل میں سے اس مواد کی نشاندہی کریں جو شعلہ نہیں بناتا:",
    "options": [
      "Wax Candle\nموم بتی",
      "Magnesium\nمیگنیشیم",
      "Wick of kerosene stove\nمٹی کے تیل کے چولہے کی بتی",
      "Charcoal\nچارکول"
    ],
    "correct": "Charcoal",
    "explanation": "شعلہ اس وقت پیدا ہوتا ہے جب کوئی مادہ دہن کے دوران بخارات میں تبدیل ہوتا ہے۔ موم بتی کا موم اور مٹی کے تیل کی بتی سے مٹی کا تیل دونوں گرم ہونے پر بخارات بنتے ہیں اور شعلے کے ساتھ جلتے ہیں۔ میگنیشیم دھات بھی بہت روشن شعلے کے ساتھ جلتی ہے۔ چارکول، جو بنیادی طور پر کاربن ہے، بخارات نہیں بنتا۔ یہ سطحی دہن سے گزرتا ہے، سرخ گرم ہو کر چمکتا ہے (incandescence) لیکن ایک الگ شعلہ پیدا کیے بغیر۔"
  },
  {
    "id": "312",
    "text": "Match the following scientists with their respective laws and choose the correct answer (TSTET 19 June 2025)\nمندرجہ ذیل سائنسدانوں کو ان کے متعلقہ قوانین کے ساتھ جوڑیں اور صحیح جواب کا انتخاب کریں۔",
    "options": [
      "A-ii, B-i, C-iv, D-iii",
      "A-ii, B-iv, C-i, D-iii",
      "A-iii, B-ii, C-i, D-iv",
      "A-iv, B-i, C-iii, D-ii"
    ],
    "correct": "A-ii, B-iv, C-i, D-iii",
    "explanation": "صحیح جوڑیاں ہیں: A) جان ڈوبیرینر نے تثلیث کا قانون (ii) پیش کیا۔ B) جان نیولینڈز نے مثمن کا قانون (iv) پیش کیا۔ C) دیمتری مینڈیلیف نے دوری قانون وضع کیا اور پہلا وسیع پیمانے پر تسلیم شدہ دوری جدول (i) بنایا۔ D) ہنری موزلے نے جوہری نمبروں کی بنیاد پر جدید دوری قانون (iii) قائم کیا۔"
  },
  {
    "id": "313",
    "text": "Match the following (TSTET 19 June 2025)\nمندرجہ ذیل کو جوڑیں",
    "options": [
      "A-ii; B-iv; C-i; D-iii",
      "A-ii; B-i; C-iv; D-iii",
      "A-ii; B-iv; C-iii; D-i",
      "A-iv; B-i; C-ii; D-iii"
    ],
    "correct": "A-ii; B-iv; C-i; D-iii",
    "explanation": "صحیح جوڑیاں ہیں: A) پروکاریوٹک خلیے کنگڈم مونیرا (ii) کی خصوصیت ہیں۔ B) ایک سیوڈو سیلم (جھوٹا جسمانی خلا) نیماٹوڈز (iv) میں پایا جاتا ہے۔ C) پانی کا عروقی نظام ایکینوڈرمز (i) کی ایک منفرد خصوصیت ہے۔ D) ایک کھلا گردشی نظام آرتھروپوڈز (iii) میں پایا جاتا ہے۔"
  },
  {
    "id": "314",
    "text": "Two chambered Heart is found in this organism (TSTET 19 June 2025)\nدو خانوں والا دل اس جاندار میں پایا جاتا ہے",
    "options": [
      "Crocodile\nمگرمچھ",
      "Frog\nمینڈک",
      "Pigeon\nکبوتر",
      "Fish\nمچھلی"
    ],
    "correct": "Fish",
    "explanation": "مچھلیوں میں دو خانوں والے دل کے ساتھ ایک سادہ گردشی نظام ہوتا ہے، جو ایک ایٹریم اور ایک وینٹریکل پر مشتمل ہوتا ہے۔ مینڈک (جل تھلیوں) کا دل تین خانوں والا ہوتا ہے۔ کبوتر (پرندوں) کا دل چار خانوں والا ہوتا ہے۔ مگرمچھ رینگنے والے جانوروں میں ایک استثناء ہیں، ان کا بھی چار خانوں والا دل ہوتا ہے۔"
  },
  {
    "id": "315",
    "text": "Identify the correct pair of similar group of organisms belongs to same kingdom (TSTET 19 June 2025)\nجانداروں کے مماثل گروہ کی صحیح جوڑی کی نشاندہی کریں جو ایک ہی کنگڈم سے تعلق رکھتی ہے",
    "options": [
      "Chlamydomonas and Aspergillus\nکلیمائڈوموناس اور ایسپرجیلس",
      "Amoeba and Vorticella\nامیبا اور وورٹیسیلا",
      "Oedogonium and cyclops\nاوڈوگونیم اور سائکلپس",
      "Spirogyra and Rhizopus\nسپائروگائرا اور رائزوپس"
    ],
    "correct": "Amoeba and Vorticella",
    "explanation": "امیبا اور وورٹیسیلا دونوں یک خلوی یوکرائیوٹک جاندار ہیں جو کنگڈم پروٹسٹا سے تعلق رکھتے ہیں۔ دیگر جوڑیاں مختلف کنگڈمز سے تعلق رکھتی ہیں: کلیمائڈوموناس (پروٹسٹا) اور ایسپرجیلس (فنجائی)؛ اوڈوگونیم (پروٹسٹا) اور سائکلپس (اینیملیا)؛ سپائروگائرا (پروٹسٹا) اور رائزوپس (فنجائی)۔"
  },
  {
    "id": "316",
    "text": "The disease which spreads through polluted water and food is (TSTET 19 June 2025)\nوہ بیماری جو آلودہ پانی اور خوراک سے پھیلتی ہے",
    "options": [
      "Tuberculosis and polio\nتپ دق اور پولیو",
      "Smallpox and swine flue\nچیچک اور سوائن فلو",
      "Cholera and Typhoid\nہیضہ اور ٹائیفائیڈ",
      "Measles and mumps\nخسرہ اور کن پیڑے"
    ],
    "correct": "Cholera and Typhoid",
    "explanation": "ہیضہ اور ٹائیفائیڈ دونوں بیکٹیریل انفیکشن ہیں جو بنیادی طور پر فیکل-اورل راستے سے منتقل ہوتے ہیں، جس کا مطلب ہے کہ وہ کسی متاثرہ شخص کے فضلے سے آلودہ خوراک یا پانی استعمال کرنے سے پھیلتے ہیں۔ فہرست میں دی گئی دیگر بیماریاں بنیادی طور پر سانس کے قطروں سے پھیلتی ہیں (تپ دق، چیچک، سوائن فلو، خسرہ، کن پیڑے۔"
  },
  {
    "id": "317",
    "text": "The plants or animals species of particular area/region/country is called (TSTET 19 June 2025)\nکسی خاص علاقے/خطے/ملک کے پودوں یا جانوروں کی انواع کو کہا جاتا ہے",
    "options": [
      "Endemic species\nمقامی انواع",
      "Endangered species\nخطرے سے دوچار انواع",
      "Extinct species\nناپید انواع",
      "Invasive Alien species\nحملہ آور اجنبی انواع"
    ],
    "correct": "Endemic species",
    "explanation": "مقامی انواع وہ ہیں جو منفرد طور پر ایک مخصوص جغرافیائی علاقے میں پائی جاتی ہیں اور دنیا میں کہیں اور نہیں ہیں۔ خطرے سے دوچار انواع کے ناپید ہونے کا شدید خطرہ ہوتا ہے۔ ناپید انواع اب موجود نہیں ہیں۔ حملہ آور اجنبی انواع غیر مقامی انواع ہیں جو اپنے نئے ماحول پر منفی اثر ڈالتی ہیں۔"
  },
  {
    "id": "318",
    "text": "The 'recyclers' in Ecosystem are (TSTET 19 June 2025)\nماحولیاتی نظام میں 'ری سائیکلرز' ہیں",
    "options": [
      "Primary consumers\nابتدائی صارفین",
      "Producers\nپیدا کنندگان",
      "Decomposers\nتجزیہ کار",
      "Carnivores\nگوشت خور"
    ],
    "correct": "Decomposers",
    "explanation": "تجزیہ کار، جیسے بیکٹیریا اور فنجائی، ایک ماحولیاتی نظام میں 'ری سائیکلرز' کے طور پر ایک اہم کردار ادا کرتے ہیں۔ وہ مردہ نامیاتی مواد (جیسے مردہ پودے اور جانور) کو سادہ غیر نامیاتی مادوں میں توڑ دیتے ہیں، اور ضروری غذائی اجزاء کو مٹی اور پانی میں واپس کرتے ہیں۔ پھر یہ غذائی اجزاء پیدا کنندگان (پودوں) کے ذریعے نشوونما کے لیے استعمال ہوتے ہیں، اس طرح غذائی اجزاء کا چکر مکمل ہوتا ہے۔"
  },
  {
    "id": "319",
    "text": "Which of the following is NOT a pesticide? (TSTET 19 June 2025)\nمندرجہ ذیل میں سے کون سا کیڑے مار دوا نہیں ہے؟",
    "options": [
      "Benzene Hexachloride\nبینزین ہیکسا کلورائیڈ",
      "Dichloro diphenyl trichloro ethane\nڈائی کلورو ڈائی فینائل ٹرائی کلورو ایتھین",
      "Endosulfan\nاینڈوسلفان",
      "2-4 Dichloro phenoxy acetic acid\n2-4 ڈائی کلورو فینوکسی ایسٹک ایسڈ"
    ],
    "correct": "2-4 Dichloro phenoxy acetic acid",
    "explanation": "یہ سوال مختلف قسم کے کیڑے مار ادویات کے درمیان فرق کرتا ہے۔ کیڑے مار دوا ایک وسیع اصطلاح ہے جو کسی بھی مادے کے لیے استعمال ہوتی ہے جو کیڑوں کو مارنے یا کنٹرول کرنے کے لیے استعمال ہوتی ہے۔ بینزین ہیکسا کلورائیڈ (BHC)، DDT، اور اینڈوسلفان سبھی کیڑے مار ادویات (insecticides) ہیں (کیڑوں کو مارتے ہیں)۔ 2,4-ڈائی کلورو فینوکسی ایسٹک ایسڈ (2,4-D) ایک جڑی بوٹی مار دوا (herbicide) ہے (جڑی بوٹیوں/پودوں کو مارتی ہے)۔ فراہم کردہ اختیارات کے تناظر میں، سوال شاید 'کیڑے مار دوا' کو 'کیڑے مار' کے تنگ معنی میں استعمال کر رہا ہے، جس سے جڑی بوٹی مار دوا مختلف ہے۔ تاہم، یہ نوٹ کرنا ضروری ہے کہ جڑی بوٹی مار ادویات تکنیکی طور پر کیڑے مار ادویات کا ایک زمرہ ہیں۔"
  },
  {
    "id": "320",
    "text": "Identify the essential parts of flower (TSTET 19 June 2025)\nپھول کے ضروری حصوں کی نشاندہی کریں۔",
    "options": [
      "Calyx and corolla\nکاسہ گل اور تاج گل",
      "Stamen and pistil\nاسٹیمن اور پسٹل",
      "Thalamus and pedicel\nتھالامس اور پیڈیسل",
      "Seed and ovary\nبیج اور بیضہ دانی"
    ],
    "correct": "Stamen and pistil",
    "explanation": "پھول کے ضروری حصے اس کے تولیدی اعضاء ہیں، جو بیج پیدا کرنے کے لیے ضروری ہیں۔ یہ اسٹیمن (نر تولیدی حصہ) اور پسٹل (جسے کارپل بھی کہا جاتا ہے، مادہ تولیدی حصہ) ہیں۔ کاسہ گل (سیپلز) اور تاج گل (پیٹلز) اضافی حصے ہیں جو پھول کی حفاظت کرتے ہیں اور پولینیٹرز کو اپنی طرف متوجہ کرتے ہیں لیکن تولید میں براہ راست ملوث نہیں ہیں۔"
  },
  {
    "id": "321",
    "text": "Which of the following is a modified underground stem? (TSTET 19 June 2025)\nمندرجہ ذیل میں سے کون سا ایک تبدیل شدہ زیر زمین تنا ہے؟",
    "options": [
      "Sweet potato\nشکرقندی",
      "Carrot\nگاجر",
      "Radish\nمولی",
      "Potato\nآلو"
    ],
    "correct": "Potato",
    "explanation": "آلو ایک تبدیل شدہ زیر زمین تنا ہے جسے ٹیوبر کہا جاتا ہے، جو خوراک ذخیرہ کرنے والے عضو کے طور پر کام کرتا ہے۔ آلو پر 'آنکھیں' کلیوں کے ساتھ نوڈز ہیں جو نئے تنوں اور پتوں میں اگ سکتی ہیں۔ اس کے برعکس، شکرقندی، گاجر، اور مولی سبھی تبدیل شدہ ذخیرہ کرنے والی جڑیں ہیں، تنے نہیں۔"
  },
  {
    "id": "322",
    "text": "The number of daughter cells formed from a single parent cell after meiotic division (TSTET 19 June 2025)\nمیوٹک تقسیم کے بعد ایک واحد پیرنٹ سیل سے بننے والے ڈاٹر سیلز کی تعداد",
    "options": [
      "Two\nدو",
      "Four\nچار",
      "Eight\nآٹھ",
      "Sixteen\nسولہ"
    ],
    "correct": "Four",
    "explanation": "میوسس ایک دو قدمی خلیے کی تقسیم کا عمل ہے (میوسس I اور میوسس II) جس کے نتیجے میں چار ڈاٹر سیلز بنتے ہیں، ہر ایک میں پیرنٹ سیل کے کروموسوم کی تعداد نصف ہوتی ہے۔ یہ عمل جنسی تولید کے لیے ضروری ہے اور گیمیٹس (سپرم اور انڈے کے خلیے) پیدا کرتا ہے۔ دوسری طرف، مائٹوسس دو ایک جیسے ڈاٹر سیلز پیدا کرتا ہے۔"
  },
  {
    "id": "323",
    "text": "Match the following (TSTET 19 June 2025)\nمندرجہ ذیل کو جوڑیں",
    "options": [
      "A-ii, B-iv, C-i, D-iii",
      "A-ii, B-i, C-iii, D-iv",
      "A-i, B-ii, C-iv, D-iii",
      "A-iv, B-i, C-iii, D-ii"
    ],
    "correct": "A-ii, B-iv, C-i, D-iii",
    "explanation": "صحیح جوڑیاں ہیں: A) رونالڈ راس نے مچھروں کے ذریعے ملیریا کی منتقلی (ii) دریافت کی۔ B) رابرٹ ہک نے سب سے پہلے خلیہ (iv) کا مشاہدہ کیا اور اسے نام دیا۔ C) رابرٹ براؤن نے خلیہ کے اندر نیوکلئس (i) دریافت کیا۔ D) الیگزینڈر فلیمنگ نے پینسلین (iii) دریافت کی، جو پہلی اینٹی بائیوٹک تھی۔"
  },
  {
    "id": "324",
    "text": "Identify the process that is NOT related/involved in obtaining wool from sheep to produce fabric. (TSTET 19 June 2025)\nاس عمل کی نشاندہی کریں جو بھیڑوں سے کپڑا بنانے کے لیے اون حاصل کرنے سے متعلق/شامل نہیں ہے۔",
    "options": [
      "Shearing\nشیئرنگ (اون کترنا)",
      "Scouring\nاسکورنگ (دھلائی)",
      "Stifling\nاسٹفلنگ (دم گھوٹنا)",
      "Bleaching\nبلیچنگ (رنگ کاٹنا)"
    ],
    "correct": "Stifling",
    "explanation": "اون کی پیداوار میں شیئرنگ (اون کترنا)، اسکورنگ (دھونا)، چھانٹنا، اور کارڈنگ اور کتائی جیسے عمل شامل ہیں۔ بلیچنگ بھی اس عمل کا حصہ ہو سکتا ہے۔ تاہم، اسٹفلنگ ریشم کی پیداوار (سیریکلچر) کا ایک مرحلہ ہے، جہاں ریشم کے کوکون کو ابالا یا بھاپ دی جاتی ہے تاکہ اندر کے پیوپا کو مارا جا سکے۔ اس کا اون کی پروسیسنگ سے کوئی تعلق نہیں ہے۔"
  },
  {
    "id": "325",
    "text": "Einstein stated, \"In nature everywhere we come across pre-established harmonies\". This reflects which value of science? (TSTET 19 June 2025)\nآئن سٹائن نے کہا، \"فطرت میں ہر جگہ ہمیں پہلے سے قائم ہم آہنگی ملتی ہے\"۔ یہ سائنس کی کس قدر کی عکاسی کرتا ہے؟",
    "options": [
      "Aesthetic value\nجمالیاتی قدر",
      "Cultural value\nثقافتی قدر",
      "Disciplinary value\nنظم و ضبط کی قدر",
      "Moral value\nاخلاقی قدر"
    ],
    "correct": "Aesthetic value",
    "explanation": "آئن سٹائن کا قول کائنات کے قوانین کی ترتیب، خوبصورتی اور بنیادی حسن کی تعریف کا اظہار کرتا ہے۔ فطرت میں 'ہم آہنگی' کے لیے یہ حیرت اور تعریف کا احساس سائنس کی جمالیاتی قدر سے متعلق ہے—سائنسی اصولوں اور جس قدرتی دنیا کو وہ بیان کرتے ہیں اس میں خوبصورتی تلاش کرنا۔"
  },
  {
    "id": "326",
    "text": "Which of the following examples best illustrates Project Method? (TSTET 19 June 2025)\nمندرجہ ذیل میں سے کون سی مثال پروجیکٹ میتھڈ کی بہترین وضاحت کرتی ہے؟",
    "options": [
      "Students prepare a chart on pollution after reading the textbook\nطلباء درسی کتاب پڑھنے کے بعد آلودگی پر ایک چارٹ تیار کرتے ہیں",
      "Students take part in a teacher-led discussion on environmental issues\nطلباء ماحولیاتی مسائل پر استاد کی زیر قیادت بحث میں حصہ لیتے ہیں",
      "Students follow a step-by-step lab manual to test water samples for impurities\nطلباء پانی کے نمونوں میں نجاست کی جانچ کے لیے قدم بہ قدم لیب مینول پر عمل کرتے ہیں",
      "Students collaboratively design and build a model of a sustainable city to address real-life environmental challenges\nطلباء حقیقی زندگی کے ماحولیاتی چیلنجوں سے نمٹنے کے لیے باہمی تعاون سے ایک پائیدار شہر کا ماڈل ڈیزائن اور تعمیر کرتے ہیں"
    ],
    "correct": "Students collaboratively design and build a model of a sustainable city to address real-life environmental challenges",
    "explanation": "پروجیکٹ میتھڈ ایک طالب علم پر مرکوز طریقہ ہے جہاں سیکھنا ایک عملی، حقیقی دنیا کے پروجیکٹ کے ذریعے کیا جاتا ہے۔ کلیدی عناصر تعاون، مسئلہ حل کرنا، اور ایک ٹھوس نتیجہ پیدا کرنا ہیں۔ ماحولیاتی چیلنجوں کو حل کرنے کے لیے ایک شہر کا ماڈل ڈیزائن اور تعمیر کرنا اس طریقہ کی ایک بہترین مثال ہے۔ دیگر اختیارات زیادہ روایتی، غیر فعال، یا استاد کی ہدایت پر مبنی سرگرمیاں ہیں۔"
  },
  {
    "id": "327",
    "text": "Among the following, identify which is NOT a rating scale? (TSTET 19 June 2025)\nمندرجہ ذیل میں سے، شناخت کریں کہ کون سا ریٹنگ اسکیل نہیں ہے؟",
    "options": [
      "Descriptive Scale\nتفصیلی پیمانہ",
      "Multiple Choice Scale\nمتعدد انتخابی پیمانہ",
      "Graphic Scale\nگرافک پیمانہ",
      "Numerical Scale\nعددی پیمانہ"
    ],
    "correct": "Multiple Choice Scale",
    "explanation": "ریٹنگ اسکیلز تشخیصی اوزار ہیں جو کسی خصوصیت یا رویے کو ایک تسلسل پر ماپنے کے لیے استعمال ہوتے ہیں۔ عام اقسام میں عددی پیمانے (مثلاً 1-5)، گرافک پیمانے (دو انتہاؤں کے درمیان ایک لکیر)، اور تفصیلی پیمانے (ہر نقطہ کو الفاظ میں بیان کیا جاتا ہے) شامل ہیں۔ 'متعدد انتخاب' کئی پہلے سے طے شدہ جوابات کے ساتھ سوال کی شکل سے مراد ہے، جو ایک مختلف قسم کا تشخیصی آلہ ہے نہ کہ ریٹنگ اسکیل۔"
  },
  {
    "id": "328",
    "text": "A student in his primary school has learnt different forms of life like animals and plants exist on earth. In his secondary level class based on this knowledge, he learns about more varieties of plants and animals when he studies about classification of life forms. According to Piaget, this is (TSTET 19 June 2025)\nایک طالب علم نے اپنے پرائمری اسکول میں سیکھا ہے کہ زمین پر جانوروں اور پودوں جیسی زندگی کی مختلف شکلیں موجود ہیں۔ اپنے ثانوی سطح کی کلاس میں اس علم کی بنیاد پر، وہ زندگی کی شکلوں کی درجہ بندی کے بارے میں پڑھتے ہوئے پودوں اور جانوروں کی مزید اقسام کے بارے میں سیکھتا ہے۔ پیاجے کے مطابق، یہ ہے",
    "options": [
      "Assimilation\nانجذاب (Assimilation)",
      "Schema\nاسکیما (Schema)",
      "Accommodation\nمطابقت (Accommodation)",
      "Equilibrium\nتوازن (Equilibrium)"
    ],
    "correct": "Assimilation",
    "explanation": "پیاجے کے نظریے کے مطابق، انجذاب (assimilation) نئی معلومات کو موجودہ ذہنی اسکیما میں فٹ کرنے کا علمی عمل ہے۔ طالب علم کے پاس پہلے سے ہی 'جاندار چیزوں' کے لیے ایک اسکیما موجود ہے۔ درجہ بندی کے بارے میں سیکھنا اس موجودہ اسکیما میں مزید تفصیلات اور مثالیں شامل کرتا ہے بغیر اسے بنیادی طور پر تبدیل کیے۔ مطابقت (accommodation) کی ضرورت اس وقت ہوتی جب نئی معلومات پرانے اسکیما سے متصادم ہوتیں (مثال کے طور پر، ایسے جانداروں کے بارے میں سیکھنا جو 'پودے' یا 'جانور' میں آسانی سے فٹ نہیں ہوتے)۔"
  },
  {
    "id": "329",
    "text": "In class VII, a science teacher, divided her students into groups and asked them to dissect a flower and identify various parts in it and helps them learn about different parts of a flower. The teacher adopted this approach of teaching science. (TSTET 19 June 2025)\nساتویں جماعت میں، ایک سائنس ٹیچر نے اپنے طلباء کو گروہوں میں تقسیم کیا اور ان سے ایک پھول کا تشریح کرنے اور اس کے مختلف حصوں کی شناخت کرنے کو کہا اور انہیں پھول کے مختلف حصوں کے بارے میں سیکھنے میں مدد کی۔ ٹیچر نے سائنس پڑھانے کا یہ طریقہ اپنایا۔",
    "options": [
      "Teacher-centered approach\nاستاد پر مرکوز طریقہ",
      "Subject-centered approach\nمضمون پر مرکوز طریقہ",
      "Constructivist approach\nتعمیراتی طریقہ",
      "Problem solving approach\nمسئلہ حل کرنے کا طریقہ"
    ],
    "correct": "Constructivist approach",
    "explanation": "تعمیراتی طریقہ اس بات پر زور دیتا ہے کہ سیکھنے والے عملی تجربات کے ذریعے فعال طور پر اپنے علم اور سمجھ کو خود تعمیر کرتے ہیں۔ طلباء کو گروہوں میں خود پھول کی تشریح کرنے دے کر، استاد ایک سہولت کار کے طور پر کام کر رہا ہے، جو طلباء کو کر کے سیکھنے اور اپنی تلاش کے ذریعے پھول کے حصوں کو دریافت کرنے کی اجازت دیتا ہے۔ یہ فعال، طالب علم پر مرکوز، تعمیراتی سیکھنے کی ایک کلاسک مثال ہے۔"
  },
  {
    "id": "330",
    "text": "Which of the following is NOT a guiding principle suggested by NCF 2005 for Curriculum Development? (TSTET 19 June 2025)\nمندرجہ ذیل میں سے کون سا نصاب کی ترقی کے لیے NCF 2005 کی طرف سے تجویز کردہ رہنما اصول نہیں ہے؟",
    "options": [
      "Connecting knowledge to life outside the school.\nعلم کو اسکول سے باہر کی زندگی سے جوڑنا۔",
      "Ensuring that learning is shifted away from rote methods.\nاس بات کو یقینی بنانا کہ سیکھنے کو رٹنے کے طریقوں سے دور کیا جائے۔",
      "Making examination more flexible and integrated into classroom life.\nامتحان کو زیادہ لچکدار اور کلاس روم کی زندگی میں مربوط بنانا۔",
      "Encouraging subject-based approach instead of an integrated approach.\nمربوط طریقہ کے بجائے مضمون پر مبنی طریقہ کی حوصلہ افزائی کرنا۔"
    ],
    "correct": "Encouraging subject-based approach instead of an integrated approach.",
    "explanation": "قومی نصابی فریم ورک (NCF) 2005 سخت مضامین کی حدود کے بوجھ کو کم کرنے اور سیکھنے کے لیے ایک زیادہ مربوط، بین الضابطہ نقطہ نظر کو فروغ دینے کی وکالت کرتا ہے۔ پہلے تین اختیارات NCF 2005 کے بنیادی رہنما اصول ہیں۔ چوتھا اختیار براہ راست NCF کے اس زور سے متصادم ہے جو مختلف مضامین کے درمیان رکاوٹوں کو توڑنے پر ہے تاکہ سیکھنے کو زیادہ جامع اور متعلقہ بنایا جا سکے۔"
  },
  {
    "id": "331",
    "text": "The statement \"External pressure applied to an enclosed volume of fluid is transmitted equally in all directions throughout the fluid volume\" refers to this principle (TSTET 18 June 2025)\nبیان \"ایک بند حجم کے سیال پر لگایا جانے والا بیرونی دباؤ سیال کے پورے حجم میں تمام سمتوں میں یکساں طور پر منتقل ہوتا ہے\" اس اصول سے مراد ہے",
    "options": [
      "Archimedes Principle\nارشمیدس کا اصول",
      "Pascal's Principle\nپاسکل کا اصول",
      "Bernoulli's Principle\nبرنولی کا اصول",
      "Newton's Law\nنیوٹن کا قانون"
    ],
    "correct": "Pascal's Principle",
    "explanation": "یہ بیان پاسکل کے اصول کی تعریف ہے۔ یہ اصول ہائیڈرولک سسٹمز جیسے ہائیڈرولک لفٹس اور بریکس کی بنیاد ہے، جہاں ایک چھوٹے سے رقبے پر لگائی گئی ایک چھوٹی قوت ایک بڑے رقبے پر بہت بڑی قوت پیدا کرتی ہے۔ ارشمیدس کا اصول اچھال سے متعلق ہے، برنولی کا اصول سیال کی رفتار کو دباؤ سے جوڑتا ہے، اور نیوٹن کے قوانین حرکت کو بیان کرتے ہیں۔"
  },
  {
    "id": "332",
    "text": "The brightest planet in the solar system is (TSTET 18 June 2025)\nنظام شمسی کا سب سے روشن سیارہ ہے",
    "options": [
      "Mercury\nعطارد",
      "Venus\nزہرہ",
      "Mars\nمریخ",
      "Jupiter\nمشتری"
    ],
    "correct": "Venus",
    "explanation": "زہرہ ہمارے نظام شمسی کا سب سے روشن سیارہ ہے کیونکہ اس کا گھنا ماحول، جو بنیادی طور پر کاربن ڈائی آکسائیڈ اور سلفیورک ایسڈ کے بادلوں پر مشتمل ہے، سورج کی روشنی کا بہت زیادہ عکاس ہے۔ یہ اعلی البیڈو اسے زمین سے دیکھنے پر بہت روشن بناتا ہے، اکثر غروب آفتاب کے بعد یا طلوع آفتاب سے پہلے نظر آنے والا پہلا 'ستارہ' ہوتا ہے۔"
  },
  {
    "id": "333",
    "text": "The volume of oxygen required to burn 40g of Hydrogen at STP (in Litres) is (TSTET 18 June 2025)\nایس ٹی پی پر 40 گرام ہائیڈروجن کو جلانے کے لیے درکار آکسیجن کا حجم (لیٹر میں) ہے",
    "options": [
      "22.4",
      "11.2",
      "224",
      "4.48"
    ],
    "correct": "224",
    "explanation": "ہائیڈروجن کے دہن کے لیے متوازن کیمیائی مساوات $2H_2 + O_2 \\rightarrow 2H_2O$ ہے۔ سب سے پہلے، ہائیڈروجن ($H_2$) کے مولز کا حساب لگائیں: $H_2$ کا مولر ماس تقریباً 2 گرام فی مول ہے۔ لہذا، 40 گرام $H_2$ $40g / 2g/mol = 20$ مولز ہے۔ تعامل کی اسٹوکیومیٹری کے مطابق، 2 مول $H_2$ 1 مول $O_2$ کے ساتھ تعامل کرتے ہیں۔ لہذا، 20 مول $H_2$ 10 مول $O_2$ کے ساتھ تعامل کریں گے۔ معیاری درجہ حرارت اور دباؤ (STP) پر، کسی بھی مثالی گیس کا 1 مول 22.4 لیٹر جگہ گھیرتا ہے۔ اس طرح، 10 مول $O_2$ کا حجم $10 \\times 22.4 L = 224$ لیٹر ہے۔"
  },
  {
    "id": "334",
    "text": "Electron configuration of Chromium is (TSTET 18 June 2025)\nکرومیم کی الیکٹران تشکیل ہے",
    "options": [
      "$1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^4$",
      "$1s^2 2s^2 2p^6 3s^2 3p^6 4s^1 3d^5$",
      "$1s^2 2s^2 2p^6 3s^2 3p^6 4s^1 3d^{10}$",
      "$1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^9$"
    ],
    "correct": "$1s^2 2s^2 2p^6 3s^2 3p^6 4s^1 3d^5$",
    "explanation": "کرومیم (Cr، جوہری نمبر 24) اوفباؤ اصول سے مستثنیٰ ہے۔ نصف بھرے ڈی-آربیٹل کے ذریعے زیادہ استحکام حاصل کرنے کے لیے، 4s آربیٹل سے ایک الیکٹران 3d آربیٹل میں فروغ پاتا ہے۔ اس کے نتیجے میں متوقع $[Ar] 4s^2 3d^4$ کے بجائے $[Ar] 4s^1 3d^5$ کی تشکیل ہوتی ہے۔ ایک نصف بھرا سب شیل ($d^5$) جزوی طور پر بھرے ($d^4$) سے زیادہ مستحکم اور کم توانائی والا ہوتا ہے۔"
  },
  {
    "id": "335",
    "text": "Read the following statements and choose the correct option. A) Atomic radii increase in groups. B) Stable configuration influences ionization energy. C) Metals are electronegative elements. (TSTET 18 June 2025)\nمندرجہ ذیل بیانات کو پڑھیں اور صحیح آپشن کا انتخاب کریں۔ A) جوہری نصف قطر گروہوں میں بڑھتا ہے۔ B) مستحکم تشکیل آئنائزیشن توانائی کو متاثر کرتی ہے۔ C) دھاتیں برقی منفی عناصر ہیں۔",
    "options": [
      "all A, B, C are true\nتمام A, B, C سچ ہیں",
      "only A, B are true\nصرف A, B سچ ہیں",
      "only A, C are true\nصرف A, C سچ ہیں",
      "only B, C are true\nصرف B, C سچ ہیں"
    ],
    "correct": "only A, B are true",
    "explanation": "بیان A سچ ہے: جب آپ ایک گروپ میں نیچے جاتے ہیں تو، ایک نیا الیکٹران شیل شامل ہوتا ہے، جس سے نیوکلئس سے بیرونی ترین الیکٹرانوں کا فاصلہ بڑھ جاتا ہے اور اس طرح جوہری نصف قطر بڑھ جاتا ہے۔ بیان B سچ ہے: مستحکم الیکٹران تشکیلات والے عناصر (جیسے نوبل گیسیں) کی آئنائزیشن توانائی بہت زیادہ ہوتی ہے کیونکہ ایک الیکٹران کو ہٹانے کے لیے بہت زیادہ توانائی درکار ہوتی ہے۔ بیان C جھوٹا ہے: دھاتیں برقی مثبت ہوتی ہیں؛ وہ مثبت آئن بنانے کے لیے الیکٹران کھونے کا رجحان رکھتی ہیں۔ غیر دھاتیں عام طور پر برقی منفی ہوتی ہیں۔"
  },
  {
    "id": "336",
    "text": "Match the metal with its extraction process A) Na i) Reduction B) Fe ii) Displacement C) Hg iii) Electrolysis D) Ag iv) Heating in air (TSTET 18 June 2025)\nدھات کو اس کے استخراجی عمل سے جوڑیں A) Na i) تخفیف B) Fe ii) ہٹاؤ C) Hg iii) برق پاشیدگی D) Ag iv) ہوا میں گرم کرنا",
    "options": [
      "A-iii, B-i, C-iv, D-ii",
      "A-iii, B-ii, C-iv, D-i",
      "A-iii, B-iv, C-ii, D-i",
      "A-iii, B-i, C-ii, D-iv"
    ],
    "correct": "A-iii, B-i, C-iv, D-ii",
    "explanation": "A) سوڈیم (Na) ایک انتہائی تعامل پذیر دھات ہے جو اس کے پگھلے ہوئے کلورائیڈ کی برق پاشیدگی سے نکالی جاتی ہے۔ B) لوہا (Fe) اس کی کچ دھات سے بلاسٹ فرنس میں کاربن کے ساتھ تخفیف کے ذریعے نکالا جاتا ہے۔ C) پارا (Hg) سینابار (HgS) سے بھون کر (ہوا میں گرم کرکے) نکالا جاتا ہے۔ D) چاندی (Ag) اس کی کچ دھات کے محلول سے زنک جیسی زیادہ تعامل پذیر دھات کا استعمال کرتے ہوئے ہٹاؤ کے ذریعے نکالی جاتی ہے (سائینائیڈ کے عمل میں)۔"
  },
  {
    "id": "337",
    "text": "Atomicity of Sucrose molecule is (TSTET 18 June 2025)\nسوکروز کے مالیکیول کی جوہری حیثیت (Atomicity) ہے",
    "options": [
      "45",
      "24",
      "21",
      "46"
    ],
    "correct": "45",
    "explanation": "ایٹومیسٹی ایک واحد مالیکیول میں ایٹموں کی کل تعداد ہے۔ سوکروز کا کیمیائی فارمولا $C_{12}H_{22}O_{11}$ ہے۔ اس کی ایٹومیسٹی معلوم کرنے کے لیے، ہم ہر عنصر کے ایٹموں کی تعداد کو جمع کرتے ہیں: 12 (کاربن) + 22 (ہائیڈروجن) + 11 (آکسیجن) = 45۔"
  },
  {
    "id": "338",
    "text": "Identify the FALSE statement (TSTET 18 June 2025)\nغلط بیان کی نشاندہی کریں۔",
    "options": [
      "Normal force is a contact force.\nعمودی قوت ایک تماسی قوت ہے۔",
      "Friction opposes the movement.\nرگڑ حرکت کی مخالفت کرتی ہے۔",
      "Pressure does not depend on area of the body.\nدباؤ جسم کے رقبے پر منحصر نہیں ہوتا۔",
      "Force is measured in Newtons.\nقوت کو نیوٹن میں ماپا جاتا ہے۔"
    ],
    "correct": "Pressure does not depend on area of the body.",
    "explanation": "بیان 'دباؤ جسم کے رقبے پر منحصر نہیں ہوتا' غلط ہے۔ دباؤ کی تعریف قوت فی اکائی رقبہ ($P = F/A$) کے طور پر کی جاتی ہے۔ لہذا، دباؤ اس رقبے کے معکوس متناسب ہے جس پر قوت تقسیم ہوتی ہے۔ ایک چھوٹا رقبہ اسی مقدار کی قوت کے لیے زیادہ دباؤ کا باعث بنتا ہے۔"
  },
  {
    "id": "339",
    "text": "The right choice of connection to make a bulb glow brighter (TSTET 18 June 2025)\nبلب کو زیادہ روشن کرنے کے لیے کنکشن کا صحیح انتخاب",
    "options": [
      "Connecting electric cells in series\nبجلی کے سیلوں کو سلسلہ وار جوڑنا",
      "Connecting electric cells in parallel\nبجلی کے سیلوں کو متوازی جوڑنا",
      "Connecting electric bulbs in series\nبجلی کے بلبوں کو سلسلہ وار جوڑنا",
      "Connecting electric bulbs in parallel\nبجلی کے بلبوں کو متوازی جوڑنا"
    ],
    "correct": "Connecting electric cells in series",
    "explanation": "بلب کو زیادہ روشن کرنے کے لیے، آپ کو اس کے پار وولٹیج بڑھانا ہوگا۔ جب بجلی کے سیل (بیٹریاں) سلسلہ وار جڑے ہوتے ہیں، تو ان کے انفرادی وولٹیج جمع ہوجاتے ہیں، جس کے نتیجے میں سرکٹ کے لیے کل وولٹیج زیادہ ہوتا ہے۔ یہ بڑھا ہوا وولٹیج بلب کے ذریعے زیادہ کرنٹ چلاتا ہے ($P = V^2/R$)، جس سے وہ زیادہ چمکتا ہے۔"
  },
  {
    "id": "340",
    "text": "The disease NOT caused by untreated water (TSTET 18 June 2025)\nوہ بیماری جو غیر صاف شدہ پانی کی وجہ سے نہیں ہوتی",
    "options": [
      "Diarrhoea\nاسہال",
      "Malaria\nملیریا",
      "Typhoid\nٹائیفائیڈ",
      "Covid\nکووڈ"
    ],
    "correct": "Covid",
    "explanation": "اسہال اور ٹائیفائیڈ کلاسک پانی سے پیدا ہونے والی بیماریاں ہیں جو آلودہ پانی پینے سے ہوتی ہیں۔ ملیریا ایک ویکٹر سے پیدا ہونے والی بیماری ہے، جو مچھروں سے پھیلتی ہے جو ٹھہرے ہوئے پانی میں افزائش پاتے ہیں، لیکن یہ پانی پینے سے نہیں ہوتی۔ کووڈ-19 ایک سانس کی بیماری ہے جو SARS-CoV-2 وائرس کی وجہ سے ہوتی ہے، جو بنیادی طور پر ہوا میں موجود قطروں سے پھیلتی ہے اور اس کا غیر صاف شدہ پانی سے کوئی براہ راست تعلق نہیں ہے۔"
  },
  {
    "id": "341",
    "text": "Total internal reflection occurs because: (TSTET 18 June 2025)\nکل داخلی انعکاس اس وجہ سے ہوتا ہے:",
    "options": [
      "Light slows down when it passes from a denser to a rarer medium\nروشنی جب کثیف سے لطیف واسطے میں گزرتی ہے تو سست ہوجاتی ہے",
      "Light bends towards the normal when passing from a rarer to a denser medium\nروشنی جب لطیف سے کثیف واسطے میں گزرتی ہے تو عمود کی طرف مڑ جاتی ہے",
      "The angle of incidence exceeds the critical angle when light tries to move from a denser to a rarer medium\nجب روشنی کثیف سے لطیف واسطے میں جانے کی کوشش کرتی ہے تو زاویہ وقوع نازک زاویے سے بڑھ جاتا ہے",
      "Light splits into its constituent colours when passing through a prism\nروشنی جب پرزم سے گزرتی ہے تو اپنے اجزائے ترکیبی رنگوں میں تقسیم ہوجاتی ہے"
    ],
    "correct": "The angle of incidence exceeds the critical angle when light tries to move from a denser to a rarer medium",
    "explanation": "کل داخلی انعکاس (TIR) ایک ایسا مظہر ہے جس کے لیے دو شرائط کی ضرورت ہوتی ہے: 1) روشنی کو ایک کثیف بصری واسطے سے ایک لطیف واسطے کی طرف سفر کرنا چاہیے۔ 2) کثیف واسطے میں زاویہ وقوع اس جوڑے کے واسطوں کے لیے نازک زاویے سے زیادہ ہونا چاہیے۔ جب یہ شرائط پوری ہوتی ہیں، تو روشنی مکمل طور پر کثیف واسطے میں واپس منعکس ہوجاتی ہے۔"
  },
  {
    "id": "342",
    "text": "Identify which of the following is true (TSTET 18 June 2025)\nنشاندہی کریں کہ مندرجہ ذیل میں سے کون سا سچ ہے",
    "options": [
      "Every non-metal has bright surface.\nہر غیر دھات کی سطح چمکدار ہوتی ہے۔",
      "Metals and non-metals are used in fire works.\nدھاتیں اور غیر دھاتیں آتش بازی میں استعمال ہوتی ہیں۔",
      "Every metal has crystalline form.\nہر دھات کی قلمی شکل ہوتی ہے۔",
      "Every metal can be made into sheets.\nہر دھات کو چادروں میں بنایا جاسکتا ہے۔"
    ],
    "correct": "Metals and non-metals are used in fire works.",
    "explanation": "یہ بیان سچ ہے۔ آتش بازی میں دھاتیں جیسے میگنیشیم، ایلومینیم، اور تانبے کے نمکیات روشن چنگاریوں اور رنگوں کے لیے استعمال ہوتی ہیں، اور غیر دھاتیں جیسے گندھک اور کاربن (بارود میں ایندھن/آکسیڈائزر کے طور پر) استعمال ہوتی ہیں۔ دیگر بیانات جھوٹے ہیں: زیادہ تر غیر دھاتیں بے رونق ہوتی ہیں (آیوڈین ایک استثناء ہے)؛ پارا کمرے کے درجہ حرارت پر قلمی شکل کے بغیر ایک مائع دھات ہے؛ اور پارا ورق پزیر نہیں ہے (چادروں میں نہیں بنایا جاسکتا)۔"
  },
  {
    "id": "343",
    "text": "Identify the plant that is having 'Haustoria' from the following (TSTET 18 June 2025)\nمندرجہ ذیل میں سے 'ہاسٹوریا' رکھنے والے پودے کی نشاندہی کریں۔",
    "options": [
      "Nepenthes\nنیپینتھیس",
      "Mushrooms\nکھمبیاں",
      "Legumes\nپھلیاں",
      "Cuscuta\nکسکوٹا"
    ],
    "correct": "Cuscuta",
    "explanation": "ہاسٹوریا خاص جڑ نما ساختیں ہیں جنہیں طفیلی پودے میزبان پودے کے بافتوں میں داخل ہونے کے لیے استعمال کرتے ہیں تاکہ پانی اور غذائی اجزاء جذب کر سکیں۔ کسکوٹا (امر بیل) ایک طفیلی پودا ہے جو ہاسٹوریا کا استعمال کرتا ہے۔ نیپینتھیس ایک حشرہ خور پودا ہے، کھمبیاں سیپروفائٹک فنجائی ہیں، اور پھلیوں میں نائٹروجن فکسیشن کے لیے جڑوں کی گانٹھیں ہوتی ہیں۔"
  },
  {
    "id": "344",
    "text": "Identify the cell organelles that are found in both plant and animal cells (TSTET 18 June 2025)\nان خلیاتی عضویوں کی نشاندہی کریں جو پودوں اور جانوروں دونوں کے خلیوں میں پائے جاتے ہیں",
    "options": [
      "Plastids\nپلاسٹڈز",
      "Cell wall\nخلیے کی دیوار",
      "Centrioles\nسینٹریولز",
      "Endoplasmic reticulum\nاینڈوپلازمک ریٹیکولم"
    ],
    "correct": "Endoplasmic reticulum",
    "explanation": "اینڈوپلازمک ریٹیکولم (ER) جھلیوں کا ایک نیٹ ورک ہے جو تمام یوکرائیوٹک خلیوں میں پایا جاتا ہے، بشمول پودوں اور جانوروں دونوں کے۔ پلاسٹڈز (مثلاً کلوروپلاسٹ) اور خلیے کی دیوار پودوں کے خلیوں کی خصوصیت ہیں۔ سینٹریولز عام طور پر جانوروں کے خلیوں میں پائے جاتے ہیں لیکن اعلیٰ پودوں کے خلیوں میں نہیں۔"
  },
  {
    "id": "345",
    "text": "Identify the structure of human skelton that associates the legs and the trunk (TSTET 18 June 2025)\nانسانی ڈھانچے کی اس ساخت کی نشاندہی کریں جو ٹانگوں اور دھڑ کو جوڑتی ہے",
    "options": [
      "Pelvic girdle\nپیلوک گرڈل (کولہے کی ہڈی)",
      "Pectoral girdle\nپیکٹورل گرڈل (کندھے کی ہڈی)",
      "Backbone\nریڑھ کی ہڈی",
      "Clavicle\nکالر کی ہڈی"
    ],
    "correct": "Pelvic girdle",
    "explanation": "پیلوک گرڈل (یا کولہے کی ہڈی) ہڈیوں کا وہ ڈھانچہ ہے جو محوری ڈھانچے (دھڑ، بشمول ریڑھ کی ہڈی) کو نچلے اعضاء (ٹانگوں) سے جوڑتا ہے۔ پیکٹورل گرڈل اوپری اعضاء (بازوؤں) کو جوڑتا ہے۔ کالر کی ہڈی پیکٹورل گرڈل کا حصہ ہے۔ سوالیہ پرچے میں ایک تضاد (ایک ٹائپو 'Petric') نوٹ کیا گیا تھا، لہذا پورے نمبر دیے گئے، لیکن 'پیلوک گرڈل' صحیح جواب ہے۔"
  },
  {
    "id": "346",
    "text": "One of the following is NOT the common function of leaves in plants. (TSTET 18 June 2025)\nمندرجہ ذیل میں سے ایک پودوں میں پتوں کا عام کام نہیں ہے۔",
    "options": [
      "Transpiration\nعمل تبخیر",
      "Gaseous exchange\nگیسوں کا تبادلہ",
      "Reproduction\nتولید",
      "Photosynthesis\nضیائی تالیف"
    ],
    "correct": "Reproduction",
    "explanation": "پتوں کے بنیادی کام ضیائی تالیف، عمل تبخیر، اور گیسوں کا تبادلہ ہیں۔ اگرچہ کچھ پودے جیسے برائیوفیلم پتوں کے ذریعے نباتاتی طور پر تولید کر سکتے ہیں، لیکن یہ زیادہ تر پودوں کے لیے عام یا بنیادی کام نہیں ہے۔ پھول عام تولیدی عضو ہے۔"
  },
  {
    "id": "347",
    "text": "Identify the process of killing silk moth cocoons by exposing them to steam or hot air from the following (TSTET 18 June 2025)\nمندرجہ ذیل میں سے ریشم کے کیڑے کے کوکون کو بھاپ یا گرم ہوا میں رکھ کر مارنے کے عمل کی نشاندہی کریں۔",
    "options": [
      "Scouring\nاسکورنگ",
      "Stifling\nاسٹفلنگ",
      "Shearing\nشیئرنگ",
      "Carding\nکارڈنگ"
    ],
    "correct": "Stifling",
    "explanation": "اسٹفلنگ سیریکلچر کا وہ عمل ہے جہاں ریشم کے کیڑے کے کوکون کو بھاپ یا گرم ہوا میں رکھا جاتا ہے۔ یہ مسلسل ریشم کے دھاگے کو نقصان پہنچائے بغیر اندر کے پیوپا کو مار دیتا ہے۔ اگر پیوپا بالغ ہو جائے تو نکلنے والا کیڑا کوکون کو توڑ دے گا، جس سے ریشم کا دھاگہ خراب ہو جائے گا۔ اسکورنگ، شیئرنگ، اور کارڈنگ اون کی پیداوار سے وابستہ عمل ہیں۔"
  },
  {
    "id": "348",
    "text": "Identify the plant that stores food materials in its root (TSTET 18 June 2025)\nاس پودے کی نشاندہی کریں جو اپنی جڑ میں خوراک کا مواد ذخیرہ کرتا ہے",
    "options": [
      "Sweet potato\nشکرقندی",
      "Potato\nآلو",
      "Turmeric\nہلدی",
      "Ginger\nادرک"
    ],
    "correct": "Sweet potato",
    "explanation": "شکرقندی ایک تبدیل شدہ، سوجی ہوئی ذخیرہ کرنے والی جڑ ہے (ایک ٹیوبرس جڑ)۔ یہ اپنے جڑ کے نظام میں خوراک کے ذخائر کو ذخیرہ کرتی ہے۔ اس کے برعکس، آلو ایک تبدیل شدہ تنا (ایک ٹیوبر) ہے، جبکہ ہلدی اور ادرک بھی تبدیل شدہ تنے (رائزوم) ہیں۔"
  },
  {
    "id": "349",
    "text": "Identify the correct sentence (TSTET 18 June 2025)\nصحیح جملے کی نشاندہی کریں۔",
    "options": [
      "Cartilage is a type of muscle tissue.\nکرکری ہڈی پٹھوں کے بافت کی ایک قسم ہے۔",
      "Ligament is a type of epithelial tissue.\nلگامنٹ اپیتھیلیل بافت کی ایک قسم ہے۔",
      "Bone is a type of connective tissue.\nہڈی جوڑنے والے بافت کی ایک قسم ہے۔",
      "Fibroblasts are a type of nervous tissue.\nفائبروبلاسٹ اعصابی بافت کی ایک قسم ہیں۔"
    ],
    "correct": "Bone is a type of connective tissue.",
    "explanation": "یہ بیان صحیح ہے۔ ہڈی ایک سخت، خصوصی جوڑنے والا بافت ہے جو جسم کا ڈھانچہ بناتی ہے۔ دیگر بیانات غلط ہیں: کرکری ہڈی اور لگامنٹ بھی جوڑنے والے بافت کی اقسام ہیں، نہ کہ پٹھوں یا اپیتھیلیل بافت کی۔ فائبروبلاسٹ جوڑنے والے بافت میں پائے جانے والے خلیے ہیں، نہ کہ اعصابی بافت۔"
  },
  {
    "id": "350",
    "text": "Identify the INCORRECT pair (TSTET 18 June 2025)\nغلط جوڑی کی نشاندہی کریں۔",
    "options": [
      "Vorticella - Protozoan\nوورٹیسیلا - پروٹوزوآن",
      "Spirulina - Microarthropod\nاسپیرولینا - مائیکروآرتھروپوڈ",
      "Euglena - Algae\nیوگلینا - الجی",
      "Yeast - Bacterium\nخمیر - بیکٹیریم"
    ],
    "correct": "Spirulina - Microarthropod",
    "explanation": "یہ جوڑی غلط ہے۔ اسپیرولینا ایک قسم کا سائنو بیکٹیریم (نیلی سبز الجی) ہے۔ مائیکروآرتھروپوڈ ایک چھوٹا جانور ہے جیسے مائٹ۔ 'خمیر - بیکٹیریم' کی جوڑی بھی غلط ہے کیونکہ خمیر ایک فنگس ہے۔ تاہم، اسپیرولینا ایک مائیکروآرتھروپوڈ سے بنیادی طور پر مختلف ہے، جو اسے ایک واضح طور پر غلط جوڑی بناتا ہے۔"
  },
  {
    "id": "351",
    "text": "Which of the following hormone is NOT secreted by pituitary gland? (TSTET 18 June 2025)\nمندرجہ ذیل میں سے کون سا ہارمون پٹیوٹری غدود سے خارج نہیں ہوتا ہے؟",
    "options": [
      "Follicle stimulating hormone\nفولیکل اسٹیومولیٹنگ ہارمون",
      "Growth hormone\nگروتھ ہارمون",
      "Luteinizing hormone\nلیوٹینائزنگ ہارمون",
      "Progesterone\nپروجیسٹرون"
    ],
    "correct": "Progesterone",
    "explanation": "پروجیسٹرون ایک اسٹیرائڈ ہارمون ہے جو بنیادی طور پر بیضہ دانی میں کارپس لیوٹیم اور حمل کے دوران نال سے پیدا ہوتا ہے۔ پٹیوٹری غدود ایک ماسٹر غدود ہے جو بہت سے ہارمونز خارج کرتا ہے، بشمول فولیکل-اسٹیومولیٹنگ ہارمون (FSH)، گروتھ ہارمون (GH)، اور لیوٹینائزنگ ہارمون (LH)، لیکن یہ پروجیسٹرون خارج نہیں کرتا ہے۔"
  },
  {
    "id": "352",
    "text": "Identify the secondary pollutant from the following (TSTET 18 June 2025)\nمندرجہ ذیل میں سے ثانوی آلودگی کی نشاندہی کریں",
    "options": [
      "PAN",
      "CFC",
      "CO2",
      "SO2"
    ],
    "correct": "PAN",
    "explanation": "ثانوی آلودگی والے مادے فضا میں بنیادی آلودگی والے مادوں کے کیمیائی تعاملات کے ذریعے بنتے ہیں۔ پیروکسی ایسٹل نائٹریٹ (PAN) فوٹو کیمیکل اسموگ کا ایک اہم جزو ہے اور یہ ایک ثانوی آلودگی والا مادہ ہے جو سورج کی روشنی کی موجودگی میں نائٹروجن آکسائڈز اور غیر مستحکم نامیاتی مرکبات کے تعامل سے بنتا ہے۔ کاربن ڈائی آکسائیڈ ($CO_2$)، سلفر ڈائی آکسائیڈ ($SO_2$)، اور کلورو فلورو کاربن (CFCs) بنیادی آلودگی والے مادے ہیں جو براہ راست ذرائع سے خارج ہوتے ہیں۔"
  },
  {
    "id": "353",
    "text": "Which of the following is called as 'global grain'? (TSTET 18 June 2025)\nمندرجہ ذیل میں سے کسے 'عالمی اناج' کہا جاتا ہے؟",
    "options": [
      "Maize\nمکئی",
      "Wheat\nگیہوں",
      "Rice\nچاول",
      "Jowar\nجوار"
    ],
    "correct": "Rice",
    "explanation": "چاول کو اکثر 'عالمی اناج' کہا جاتا ہے کیونکہ یہ دنیا کی نصف سے زیادہ آبادی کی بنیادی خوراک ہے، جو اسے عالمی غذائی تحفظ اور غذائیت کے لیے اہم بناتا ہے۔ اس کی کاشت دنیا بھر میں متنوع آب و ہوا اور ثقافتوں پر محیط ہے۔"
  },
  {
    "id": "354",
    "text": "The scientist who discovered the role of sunlight in photosynthesis was (TSTET 18 June 2025)\nوہ سائنسدان جس نے ضیائی تالیف میں سورج کی روشنی کا کردار دریافت کیا تھا",
    "options": [
      "Joseph Priestley\nجوزف پریسٹلی",
      "Jan Ingenhousz\nجان انجنہاؤس",
      "Stephen Hales\nاسٹیفن ہیلس",
      "Van Helmont\nوان ہیلمونٹ"
    ],
    "correct": "Jan Ingenhousz",
    "explanation": "جبکہ جوزف پریسٹلی نے آکسیجن دریافت کی، یہ جان انجنہاؤس تھے جنہوں نے یہ ثابت کیا کہ پودوں کو یہ آکسیجن پیدا کرنے کے لیے سورج کی روشنی ضروری ہے۔ ان کے تجربات سے یہ ظاہر ہوا کہ یہ عمل صرف پودے کے سبز حصوں میں ہوتا ہے اور صرف اس وقت جب وہ روشنی کے سامنے ہوں۔"
  },
  {
    "id": "355",
    "text": "Shouryam, a Class X student, carefully assembles a simple electric circuit using a battery, wires, switch, and bulb, ensuring it functions correctly and neatly. Identify the domain and the level demonstrated by the student. (TSTET 18 June 2025)\nشوریام، دسویں جماعت کا ایک طالب علم، احتیاط سے بیٹری، تار، سوئچ، اور بلب کا استعمال کرتے ہوئے ایک سادہ برقی سرکٹ جوڑتا ہے، اس بات کو یقینی بناتا ہے کہ یہ صحیح طریقے سے اور صفائی سے کام کرے۔ طالب علم کے ذریعہ ظاہر کردہ ڈومین اور سطح کی شناخت کریں۔",
    "options": [
      "Affective domain - Application\nجذباتی ڈومین - اطلاق",
      "Affective domain - Organization\nجذباتی ڈومین - تنظیم",
      "Psychomotor domain - Articulation\nسائیکوموٹر ڈومین - آرٹیکلیشن",
      "Psychomotor domain - Imitation level\nسائیکوموٹر ڈومین - تقلید کی سطح"
    ],
    "correct": "Psychomotor domain - Articulation",
    "explanation": "سرکٹ جوڑنے کے کام میں جسمانی مہارتیں شامل ہیں، جو اسے سائیکوموٹر ڈومین میں رکھتی ہیں۔ طالب علم ایک پیچیدہ عمل کو درستگی اور مؤثر طریقے سے انجام دے رہا ہے ('صحیح طریقے سے اور صفائی سے کام کرتا ہے')، جو 'آرٹیکلیشن' کی سطح سے مطابقت رکھتا ہے۔ اس سطح میں متعدد مہارتوں کو ایک مربوط اور رواں انداز میں جوڑنا شامل ہے، جو سادہ 'تقلید' سے آگے ہے۔"
  },
  {
    "id": "356",
    "text": "Which of the following is NOT an approach of the historical method? (TSTET 18 June 2025)\nمندرجہ ذیل میں سے کون سا تاریخی طریقہ کار کا نقطہ نظر نہیں ہے؟",
    "options": [
      "Anecdotal approach\nقصہ گوئی کا نقطہ نظر",
      "Biographical approach\nسوانحی نقطہ نظر",
      "Documentary Approach\nدستاویزی نقطہ نظر",
      "Experimental approach\nتجرباتی نقطہ نظر"
    ],
    "correct": "Experimental approach",
    "explanation": "سائنس کی تدریس کا تاریخی طریقہ تصورات کو سکھانے کے لیے سائنسی دریافتوں کی تاریخ، سائنسدانوں کی سوانح عمری، قصے، اور تاریخی دستاویزات کا تجزیہ استعمال کرتا ہے۔ تجرباتی نقطہ نظر، جس میں مفروضوں کی جانچ کے لیے کنٹرول شدہ تجربات کرنا شامل ہے، خود سائنسی تحقیق کا ایک بنیادی طریقہ ہے، نہ کہ تاریخی تدریسی طریقہ کا جزو۔"
  },
  {
    "id": "357",
    "text": "In which year was the National Innovation Foundation (NIF) established in India? (TSTET 18 June 2025)\nبھارت میں نیشنل انوویشن فاؤنڈیشن (NIF) کس سال قائم کی گئی تھی؟",
    "options": [
      "1995",
      "2000",
      "2005",
      "2010"
    ],
    "correct": "2000",
    "explanation": "نیشنل انوویشن فاؤنڈیشن (NIF) - انڈیا مارچ 2000 میں محکمہ سائنس و ٹیکنالوجی (DST)، حکومت ہند کے ذریعہ قائم کی گئی تھی۔ اس کا مقصد غیر امدادی شعبے سے نچلی سطح کی اختراعات کی کھوج، پیداوار، پائیداری اور توسیع کے لیے ادارہ جاتی مدد فراہم کرنا ہے۔"
  },
  {
    "id": "358",
    "text": "This value of teaching science deals with developing a spirit of inquiry, respect for truth, and fostering an unbiased, objective approach. (TSTET 18 June 2025)\nسائنس کی تدریس کی یہ قدر تحقیق کے جذبے کو فروغ دینے، سچائی کا احترام کرنے، اور ایک غیر جانبدار، معروضی نقطہ نظر کو پروان چڑھانے سے متعلق ہے۔",
    "options": [
      "Intellectual value\nفکری قدر",
      "Vocational value\nپیشہ ورانہ قدر",
      "Aesthetic value\nجمالیاتی قدر",
      "Moral value\nاخلاقی قدر"
    ],
    "correct": "Intellectual value",
    "explanation": "سائنس کی تعلیم میں فکری اقدار سائنسی مزاج کو فروغ دینے پر توجہ مرکوز کرتی ہیں۔ اس میں تجسس، تنقیدی سوچ، منطقی استدلال، کھلے ذہن، معروضیت، اور ثبوت پر مبنی نتائج کے عزم کو فروغ دینا شامل ہے۔ یہ سچائی کی ایماندارانہ اور غیر جانبدارانہ تلاش کی حوصلہ افزائی کرتا ہے۔"
  },
  {
    "id": "359",
    "text": "Identify the type of evaluation that is conducted at the end of a unit or course to certify the level of student achievement. (TSTET 18 June 2025)\nاس قسم کی تشخیص کی نشاندہی کریں جو کسی یونٹ یا کورس کے اختتام پر طالب علم کی کامیابی کی سطح کی تصدیق کے لیے کی جاتی ہے۔",
    "options": [
      "Formative evaluation\nتشکیلی تشخیص",
      "Diagnostic evaluation\nتشخیصی تشخیص",
      "Summative evaluation\nخلاصہ تشخیص",
      "Placement evaluation\nپلیسمنٹ تشخیص"
    ],
    "correct": "Summative evaluation",
    "explanation": "خلاصہ تشخیص ایک تدریسی مدت (مثلاً، ایک باب، سمسٹر، یا سال کے اختتام) کے اختتام پر کی جاتی ہے۔ اس کا مقصد حتمی سیکھنے کے نتائج کا جائزہ لینا اور گریڈ تفویض کرنا یا مہارت کی تصدیق کرنا ہے۔ یہ اس سیکھنے کا 'خلاصہ' کرتا ہے جو ہوچکی ہے، جو تشکیلی تشخیص کے برعکس ہے جو جاری ہے اور سیکھنے کو بہتر بنانے کا مقصد رکھتی ہے۔"
  },
  {
    "id": "360",
    "text": "An ideal science kit should NOT be: (TSTET 18 June 2025)\nایک مثالی سائنس کٹ کو نہیں ہونا چاہئے:",
    "options": [
      "Cost-effective and durable\nکم قیمت اور پائیدار",
      "Relevant to the curriculum\nنصاب سے متعلق",
      "Overly complex and difficult to use\nحد سے زیادہ پیچیدہ اور استعمال میں مشکل",
      "Safe for students to handle\nطلباء کے لیے سنبھالنے میں محفوظ"
    ],
    "correct": "Overly complex and difficult to use",
    "explanation": "ایک اچھی سائنس کٹ ایک تدریسی امداد ہے جو سیکھنے میں سہولت فراہم کرنے کے لیے ڈیزائن کی گئی ہے۔ اس کے مؤثر ہونے کے لیے، اسے اساتذہ اور طلباء دونوں کے لیے استعمال میں آسان ہونا چاہیے۔ اگر کوئی کٹ حد سے زیادہ پیچیدہ ہے، تو یہ تلاش کا ایک آلہ بننے کے بجائے سمجھنے میں رکاوٹ بن سکتی ہے۔ حفاظت، پائیداری، کم لاگت اور نصاب سے مطابقت سبھی مطلوبہ خصوصیات ہیں۔"
  },
  {
    "id": "361",
    "text": "1 Torr is equal to (in Pascals). (TSTET 19 June 2025)\n1 ٹار (پاسکل میں) کس کے برابر ہے؟",
    "options": [
      "76",
      "760",
      "133",
      "101325"
    ],
    "correct": "133",
    "explanation": "ایک معیاری فضا (atm) وہ دباؤ ہے جو 760 ملی میٹر اونچے پارے کے کالم کو سہارا دیتا ہے۔ اس دباؤ کو 760 ٹار کے طور پر بیان کیا گیا ہے۔ ایک معیاری فضا 101,325 پاسکل (Pa) کے برابر بھی ہے۔ لہذا، 1 ٹار کی قیمت پاسکل میں معلوم کرنے کے لیے، ہم پاسکل میں دباؤ کو ٹار میں دباؤ سے تقسیم کرتے ہیں: $1 \\text{ Torr} = \\frac{101325 \\text{ Pa}}{760 \\text{ Torr}} \\approx 133.32 \\text{ Pa}$۔ قریب ترین صحیح عدد 133 ہے۔"
  },
  {
    "id": "362",
    "text": "A hybrid solar eclipse is nothing but... (TSTET 19 June 2025)\nایک ہائبرڈ سورج گرہن کچھ اور نہیں بلکہ...",
    "options": [
      "An eclipse that is partly lunar and partly solar\nایک گرہن جو جزوی طور پر چاند اور جزوی طور پر سورج کا ہے",
      "A solar eclipse that changes from an annular to a total one\nایک سورج گرہن جو حلقہ دار سے مکمل میں تبدیل ہوتا ہے",
      "A solar eclipse that occurs at night\nایک سورج گرہن جو رات کو ہوتا ہے",
      "An eclipse visible from both the North and South Poles\nایک گرہن جو شمالی اور جنوبی دونوں قطبوں سے نظر آتا ہے"
    ],
    "correct": "A solar eclipse that changes from an annular to a total one",
    "explanation": "ایک ہائبرڈ سورج گرہن ایک نایاب فلکیاتی واقعہ ہے جہاں گرہن زمین کے کچھ مقامات سے حلقہ دار اور دوسروں سے مکمل نظر آتا ہے۔ یہ اس وقت ہوتا ہے جب چاند کا زمین سے فاصلہ ایسا ہو کہ اس کے امبرل سائے کا سرا زمین کی سطح کے بہت قریب ہو۔ زمین کی گولائی کی وجہ سے، گرہن حلقہ دار (جب چاند سورج سے چھوٹا نظر آتا ہے، 'آگ کا حلقہ' چھوڑتا ہے) اور مکمل (جب چاند سورج کو مکمل طور پر ڈھانپ لیتا ہے) کے درمیان تبدیل ہو سکتا ہے۔"
  },
  {
    "id": "363",
    "text": "The correct relationship between the speed of light in a vacuum and its speed in other transparent media is... (TSTET 19 June 2025)\nخلا میں روشنی کی رفتار اور دیگر شفاف واسطوں میں اس کی رفتار کے درمیان صحیح تعلق یہ ہے کہ...",
    "options": [
      "Light travels faster in transparent media than in a vacuum\nروشنی شفاف واسطوں میں خلا سے زیادہ تیزی سے سفر کرتی ہے",
      "Light travels at the same speed in both transparent media and vacuum\nروشنی شفاف واسطوں اور خلا دونوں میں ایک ہی رفتار سے سفر کرتی ہے",
      "Light cannot travel through transparent media\nروشنی شفاف واسطوں سے نہیں گزر سکتی",
      "Light travels slower in transparent media than in a vacuum\nروشنی شفاف واسطوں میں خلا سے زیادہ آہستہ سفر کرتی ہے"
    ],
    "correct": "Light travels slower in transparent media than in a vacuum",
    "explanation": "روشنی کی رفتار خلا میں سب سے زیادہ ہوتی ہے، تقریباً $299,792,458$ میٹر فی سیکنڈ۔ جب روشنی کسی شفاف واسطے (جیسے پانی، شیشہ، یا ہوا) سے گزرتی ہے، تو یہ واسطے کے ایٹموں کے ساتھ تعامل کرتی ہے، جس کی وجہ سے یہ سست ہو جاتی ہے۔ خلا میں روشنی کی رفتار اور کسی دیے گئے واسطے میں اس کی رفتار کے تناسب کو اس واسطے کا انعطافی اشاریہ کہا جاتا ہے، اور یہ ہمیشہ 1 سے زیادہ ہوتا ہے۔"
  },
  {
    "id": "364",
    "text": "Compressions and rarefactions in a sound wave travel in: (TSTET 19 June 2025)\nصوتی لہر میں دباؤ اور پھیلاؤ سفر کرتے ہیں:",
    "options": [
      "the same direction\nایک ہی سمت میں",
      "opposite directions\nمخالف سمتوں میں",
      "perpendicular directions\nعمودی سمتوں میں",
      "random directions\nبے ترتیب سمتوں میں"
    ],
    "correct": "the same direction",
    "explanation": "صوتی لہریں طولی لہریں ہوتی ہیں، یعنی واسطے کے ذرات کی تھرتھراہٹ توانائی کے پھیلاؤ کی سمت کے متوازی ہوتی ہے۔ لہر واسطے میں دباؤ (زیادہ دباؤ والے علاقے) اور پھیلاؤ (کم دباؤ والے علاقے) کی ایک سیریز کے طور پر حرکت کرتی ہے۔ دباؤ اور پھیلاؤ دونوں ماخذ سے باہر کی طرف ایک ہی سمت میں پھیلتے ہیں۔"
  },
  {
    "id": "365",
    "text": "Read the following statements and choose the correct answer. Statement I : Condensation is a warming process. Statement II : The phase change from gas to liquid is called Condensation. (TSTET 19 June 2025)\nمندرجہ ذیل بیانات کو پڑھیں اور صحیح جواب منتخب کریں۔ بیان ۱: تکثیف ایک گرم کرنے والا عمل ہے۔ بیان ۲: گیس سے مائع میں حالت کی تبدیلی کو تکثیف کہتے ہیں۔",
    "options": [
      "Both statement I and statement II are correct\nبیان ۱ اور بیان ۲ دونوں صحیح ہیں",
      "Statement I is correct, but Statement II is incorrect\nبیان ۱ صحیح ہے، لیکن بیان ۲ غلط ہے",
      "Statement I is incorrect, but Statement II is correct\nبیان ۱ غلط ہے، لیکن بیان ۲ صحیح ہے",
      "Both statement I and statement II are incorrect\nبیان ۱ اور بیان ۲ دونوں غلط ہیں"
    ],
    "correct": "Both statement I and statement II are correct",
    "explanation": "بیان II تکثیف کی صحیح تعریف فراہم کرتا ہے کہ یہ گیسی حالت سے مائع حالت میں مرحلے کی منتقلی ہے۔ بیان I بھی صحیح ہے کیونکہ گیس کو گاڑھا ہونے کے لیے، اسے بخارات کی مخفی حرارت کی شکل میں توانائی خارج کرنی پڑتی ہے۔ حرارت کی توانائی کا یہ اخراج اردگرد کو گرم کرتا ہے، جس سے تکثیف ایک حرارت زا یا گرم کرنے والا عمل بن جاتا ہے۔"
  },
  {
    "id": "366",
    "text": "The force exerted by the earth on a ball is 16 N. Then the force on the earth by the ball is (in Newtons). (TSTET 19 June 2025)\nایک گیند پر زمین کی طرف سے لگائی گئی قوت 16 نیوٹن ہے۔ تو گیند کی طرف سے زمین پر لگائی گئی قوت (نیوٹن میں) ہوگی۔",
    "options": [
      "32",
      "16",
      "8",
      "0"
    ],
    "correct": "16",
    "explanation": "یہ سوال نیوٹن کے حرکت کے تیسرے قانون کا اطلاق ہے، جو کہتا ہے کہ ہر عمل کے لیے ایک مساوی اور مخالف ردعمل ہوتا ہے۔ 'عمل' گیند پر زمین کی کشش ثقل کی قوت (16 N) ہے۔ 'ردعمل' زمین پر گیند کی کشش ثقل کی قوت ہے۔ قانون کے مطابق، یہ دونوں قوتیں مقدار میں برابر اور سمت میں مخالف ہونی چاہئیں۔ لہذا، گیند کی طرف سے زمین پر لگائی گئی قوت بھی 16 N ہے۔"
  },
  {
    "id": "367",
    "text": "What does the tangent, drawn to a magnetic field line at any point represent? (TSTET 19 June 2025)\nکسی بھی نقطہ پر مقناطیسی فیلڈ لائن پر کھینچا گیا مماس کیا ظاہر کرتا ہے؟",
    "options": [
      "The strength of the magnetic field\nمقناطیسی فیلڈ کی طاقت",
      "The shape of the magnet\nمقناطیس کی شکل",
      "The distance between magnetic poles\nمقناطیسی قطبوں کے درمیان فاصلہ",
      "The direction of the magnetic field at that point\nاس نقطہ پر مقناطیسی فیلڈ کی سمت"
    ],
    "correct": "The direction of the magnetic field at that point",
    "explanation": "مقناطیسی فیلڈ لائنز مقناطیسی فیلڈز کی نمائندگی کے لیے استعمال ہونے والے بصری اوزار ہیں۔ روایت کے مطابق، مقناطیسی فیلڈ لائن پر کسی بھی نقطہ پر کھینچا گیا مماس اس مقناطیسی قوت کی سمت کی نشاندہی کرتا ہے جو ایک شمالی مقناطیسی قطب اس نقطہ پر رکھے جانے پر محسوس کرے گا۔ اس طرح، مماس اس مخصوص مقام پر مقناطیسی فیلڈ ویکٹر کی سمت دیتا ہے۔"
  },
  {
    "id": "368",
    "text": "In a circuit, a 12 V battery is connected in series with three resistors of values 2 Ω, 3 Ω, and 1 Ω. Using Kirchhoff's Voltage Law, calculate the current flowing through the circuit. (in Amperes) (TSTET 19 June 2025)\nایک سرکٹ میں، ایک 12 V کی بیٹری کو 2 Ω، 3 Ω، اور 1 Ω کی قدروں والے تین رزسٹرز کے ساتھ سیریز میں جوڑا گیا ہے۔ کرچوف کے وولٹیج قانون کا استعمال کرتے ہوئے، سرکٹ میں بہنے والے کرنٹ کا حساب لگائیں۔ (ایمپیئر میں)",
    "options": [
      "0.5",
      "1",
      "2",
      "6"
    ],
    "correct": "2",
    "explanation": "سب سے پہلے، سیریز میں رزسٹرز کے لیے کل مساوی مزاحمت ($R_{eq}$) کا حساب لگائیں: $R_{eq} = R_1 + R_2 + R_3$۔ لہذا، $R_{eq} = 2 \\, \\Omega + 3 \\, \\Omega + 1 \\, \\Omega = 6 \\, \\Omega$۔ اوہم کے قانون کے مطابق (جو اس سرکٹ کے لیے کرچوف کے قوانین کی ایک سادہ شکل ہے)، کرنٹ ($I$) وولٹیج ($V$) کو کل مزاحمت سے تقسیم کرنے کے برابر ہے: $I = \\frac{V}{R_{eq}} = \\frac{12 \\, \\text{V}}{6 \\, \\Omega} = 2 \\, \\text{A}$۔"
  },
  {
    "id": "369",
    "text": "The provided data, showing identical weight percentages for elements in both natural and synthetic samples of a compound, illustrates which law of chemistry? (TSTET 19 June 2025)\nفراہم کردہ ڈیٹا، جو ایک مرکب کے قدرتی اور مصنوعی دونوں نمونوں میں عناصر کے لیے یکساں وزنی فیصد دکھاتا ہے، کیمسٹری کے کس قانون کی وضاحت کرتا ہے؟",
    "options": [
      "Law of Conservation of Mass\nکمیت کے تحفظ کا قانون",
      "Law of Definite Proportions\nمتعین تناسب کا قانون",
      "Law of Multiple Proportions\nمتعدد تناسب کا قانون",
      "Avogadro's Law\nایوگاڈرو کا قانون"
    ],
    "correct": "Law of Definite Proportions",
    "explanation": "متعین تناسب کا قانون (یا مستقل ترکیب کا قانون) یہ بتاتا ہے کہ ایک دیا گیا کیمیائی مرکب ہمیشہ اپنے اجزاء کے عناصر کو کمیت کے لحاظ سے ایک مقررہ تناسب میں رکھتا ہے، چاہے اس کا ماخذ یا تیاری کا طریقہ کچھ بھی ہو۔ چونکہ قدرتی اور مصنوعی دونوں نمونوں میں تانبے، کاربن اور آکسیجن کے وزنی فیصد ایک جیسے ہیں، اس لیے ڈیٹا براہ راست اس قانون کو ظاہر کرتا ہے۔"
  },
  {
    "id": "370",
    "text": "Read the following statements and choose the correct answer. Statement I : Bases which are soluble in water are called alkalis. Statement II: All bases do not dissolve in water. (TSTET 19 June 2025)\nمندرجہ ذیل بیانات کو پڑھیں اور صحیح جواب منتخب کریں۔ بیان ۱: وہ اساس جو پانی میں حل پذیر ہوں الکلی کہلاتے ہیں۔ بیان ۲: تمام اساس پانی میں حل نہیں ہوتے۔",
    "options": [
      "Both statement I and statement II are correct\nبیان ۱ اور بیان ۲ دونوں صحیح ہیں",
      "Statement I is correct, but Statement II is incorrect\nبیان ۱ صحیح ہے، لیکن بیان ۲ غلط ہے",
      "Statement I is incorrect, but Statement II is correct\nبیان ۱ غلط ہے، لیکن بیان ۲ صحیح ہے",
      "Both statement I and statement II are incorrect\nبیان ۱ اور بیان ۲ دونوں غلط ہیں"
    ],
    "correct": "Both statement I and statement II are correct",
    "explanation": "بیان I الکلی کی صحیح تعریف فراہم کرتا ہے: یہ اساسوں کا ایک ذیلی سیٹ ہے جو پانی میں حل پذیر ہیں (مثلاً، NaOH, KOH)۔ بیان II بھی سچ ہے کیونکہ بہت سے اساس پانی میں ناقابل حل یا صرف جزوی طور پر حل پذیر ہیں (مثلاً، $Cu(OH)_2$, $Fe(OH)_3$)۔ لہذا، جبکہ تمام الکلی اساس ہیں، تمام اساس الکلی نہیں ہیں۔"
  },
  {
    "id": "371",
    "text": "One formula unit of $MgBr_2$ consists of: (TSTET 19 June 2025)\n$MgBr_2$ کا ایک فارمولا یونٹ مشتمل ہوتا ہے:",
    "options": [
      "One $Mg^+$ ion and one $Br^-$ ion\nایک $Mg^+$ آئن اور ایک $Br^-$ آئن",
      "One $Mg^{2+}$ ion and one $Br^-$ ion\nایک $Mg^{2+}$ آئن اور ایک $Br^-$ آئن",
      "One $Mg^{2+}$ ion and two $Br^-$ ions\nایک $Mg^{2+}$ آئن اور دو $Br^-$ آئن",
      "One $Mg^+$ ion and two $Br^{2-}$ ions\nایک $Mg^+$ آئن اور دو $Br^{2-}$ آئن"
    ],
    "correct": "One $Mg^{2+}$ ion and two $Br^-$ ions",
    "explanation": "میگنیشیم ($Mg$) گروپ 2 میں ایک الکلائن ارتھ دھات ہے، لہذا یہ دو الیکٹران کھو کر +2 چارج ($Mg^{2+}$) کے ساتھ ایک مستحکم کیٹ آئن بناتا ہے۔ برومین ($Br$) گروپ 17 میں ایک ہیلوجن ہے، لہذا یہ ایک الیکٹران حاصل کر کے -1 چارج ($Br^-$) کے ساتھ ایک مستحکم این آئن بناتا ہے۔ ایک برقی طور پر غیر جانبدار مرکب بنانے کے لیے، ایک میگنیشیم آئن (+2) کو دو برومائیڈ آئنوں ($2 \\times -1$) کے ساتھ ملنا چاہیے۔ اس طرح، فارمولا یونٹ $MgBr_2$ ہے۔"
  },
  {
    "id": "372",
    "text": "In a sodium chloride (NaCl) crystal, each $Na^+$ ion is surrounded by 6 $Cl^-$ ions, and each $Cl^-$ ion is surrounded by 6 $Na^+$ ions. What does this arrangement indicate about the structure of NaCl? (TSTET 19 June 2025)\nسوڈیم کلورائیڈ (NaCl) کے کرسٹل میں، ہر $Na^+$ آئن 6 $Cl^-$ آئنوں سے گھرا ہوتا ہے، اور ہر $Cl^-$ آئن 6 $Na^+$ آئنوں سے گھرا ہوتا ہے۔ یہ ترتیب NaCl کی ساخت کے بارے میں کیا بتاتی ہے؟",
    "options": [
      "NaCl has a body-centered cubic structure\nNaCl کی ساخت باڈی سینٹرڈ کیوبک ہے",
      "Each ion in NaCl is tetrahedrally coordinated\nNaCl میں ہر آئن ٹیٹراہیڈرلی مربوط ہے",
      "Each $Na^+$ ion forms covalent bonds with $Cl^-$ ions\nہر $Na^+$ آئن $Cl^-$ آئنوں کے ساتھ کوویلنٹ بانڈ بناتا ہے",
      "NaCl has a face-centered cubic structure with 6:6 coordination\nNaCl کی ساخت 6:6 کوآرڈینیشن کے ساتھ فیس سینٹرڈ کیوبک ہے"
    ],
    "correct": "NaCl has a face-centered cubic structure with 6:6 coordination",
    "explanation": "بیان کردہ کرسٹل کی ساخت چٹانی نمک کی ساخت ہے۔ اس ساخت میں، آئن ایک دوسرے میں داخل ہونے والے فیس سینٹرڈ کیوبک (FCC) جالی میں ترتیب دیے گئے ہیں۔ کوآرڈینیشن نمبر ایک آئن کے قریبی پڑوسیوں کی تعداد ہے۔ یہ حقیقت کہ ہر $Na^+$ 6 $Cl^-$ سے گھرا ہوا ہے اور ہر $Cl^-$ 6 $Na^+$ سے گھرا ہوا ہے، اس کا مطلب ہے کہ اس کی 6:6 کوآرڈینیشن جیومیٹری ہے، جو اس ساخت کی خصوصیت ہے۔"
  },
  {
    "id": "373",
    "text": "Read the following statements about Protochordates: A) Protochordates are Marine animals. B) Protochordates show a new feature of body design namely Notochord. C) Proper Notochord is present at all the stages of life or for entire length of the body of Protochordates. Choose the correct answer. (TSTET 19 June 2025)\nپروٹوکورڈیٹس کے بارے میں مندرجہ ذیل بیانات کو پڑھیں: الف) پروٹوکورڈیٹس سمندری جانور ہیں۔ ب) پروٹوکورڈیٹس جسمانی ڈیزائن کی ایک نئی خصوصیت دکھاتے ہیں جسے نوٹوکورڈ کہتے ہیں۔ ج) مناسب نوٹوکورڈ زندگی کے تمام مراحل میں یا پروٹوکورڈیٹس کے جسم کی پوری لمبائی میں موجود ہوتا ہے۔ صحیح جواب منتخب کریں۔",
    "options": [
      "Only A & C are correct\nصرف الف اور ج صحیح ہیں",
      "Only B & C are correct\nصرف ب اور ج صحیح ہیں",
      "Only A is correct\nصرف الف صحیح ہے",
      "Only A & B are correct\nصرف الف اور ب صحیح ہیں"
    ],
    "correct": "Only A & B are correct",
    "explanation": "بیان الف صحیح ہے؛ پروٹوکورڈیٹس خصوصی طور پر سمندری ماحول میں پائے جاتے ہیں۔ بیان ب بھی صحیح ہے؛ کورڈیٹس کی تعریفی خصوصیت، بشمول پروٹوکورڈیٹس، ان کی زندگی کے کسی نہ کسی مرحلے میں نوٹوکورڈ کی موجودگی ہے۔ بیان ج غلط ہے کیونکہ نوٹوکورڈ صرف لاروا کے مرحلے میں موجود ہو سکتا ہے (جیسا کہ یوروکورڈیٹا میں) یا جسم کی پوری لمبائی تک نہیں پھیل سکتا۔ لہذا، صرف بیانات الف اور ب صحیح ہیں۔"
  },
  {
    "id": "374",
    "text": "According to C. B. Van Niel, during Photosynthesis, for the formation of each molecule of carbohydrate, the required number of molecules of carbon and water respectively are: (TSTET 19 June 2025)\nسی. بی. وان نیل کے مطابق، ضیائی تالیف کے دوران، کاربوہائیڈریٹ کے ہر مالیکیول کی تشکیل کے لیے، بالترتیب کاربن اور پانی کے مالیکیولز کی مطلوبہ تعداد یہ ہے:",
    "options": [
      "1 & 2",
      "2 & 2",
      "4 & 2",
      "2 & 1"
    ],
    "correct": "1 & 2",
    "explanation": "سی. بی. وان نیل نے ضیائی تالیف کی عمومی مساوات کو اس طرح وضع کیا: $CO_2 + 2H_2A \\rightarrow [CH_2O] + H_2O + 2A$، جہاں $[CH_2O]$ کاربوہائیڈریٹ کی ایک اکائی کی نمائندگی کرتا ہے اور $H_2A$ ہائیڈروجن ڈونر ہے (جو پودوں میں پانی، $H_2O$ ہے)۔ یہ مساوات ظاہر کرتی ہے کہ کاربوہائیڈریٹ کی ایک اکائی ($[CH_2O]$) پیدا کرنے کے لیے، کاربن ڈائی آکسائیڈ ($CO_2$) کا ایک مالیکیول اور ہائیڈروجن ڈونر ($H_2O$) کے دو مالیکیولز درکار ہوتے ہیں۔ اس طرح، کاربن اور پانی کے مالیکیولز کا تناسب 1:2 ہے۔"
  },
  {
    "id": "375",
    "text": "Match the following Phyla with their Excretory organ/system: a) Nematoda i) Meta nephridia, b) Mollusca ii) Flame cells, c) Protozoa iii) Renette cells, d) Platyhelminthes iv) Simple diffusion. (TSTET 19 June 2025)\nمندرجہ ذیل فائیلا کو ان کے اخراجی عضو/نظام سے ملائیں: الف) نمیٹوڈا 1) میٹا نیفریڈیا، ب) مولسکا 2) فلیم سیلز، ج) پروٹوزوا 3) رینیٹ سیلز، د) پلیٹی ہیلمنتھیس 4) سادہ پھیلاؤ۔",
    "options": [
      "a-iii, b-ii, c-iv, d-i\nالف-iii، ب-ii، ج-iv، د-i",
      "a-i, b-iv, c-iii, d-ii\nالف-i، ب-iv، ج-iii، د-ii",
      "a-iii, b-i, c-iv, d-ii\nالف-iii، ب-i، ج-iv، د-ii",
      "a-iv, b-iii, c-ii, d-i\nالف-iv، ب-iii، ج-ii، د-i"
    ],
    "correct": "a-iii, b-i, c-iv, d-ii",
    "explanation": "درست جوڑے یہ ہیں: الف) نمیٹوڈا اخراج کے لیے رینیٹ سیلز کا استعمال کرتے ہیں (الف-iii)۔ ب) مولسکا میں اخراج کے لیے میٹا نیفریڈیا (گردوں سے مشابہ اعضاء) ہوتے ہیں (ب-i)۔ ج) پروٹوزوا، یک خلوی جاندار ہونے کے ناطے، اپنی جسمانی سطح کے پار سادہ پھیلاؤ کے ذریعے فضلہ خارج کرتے ہیں (ج-iv)۔ د) پلیٹی ہیلمنتھیس (چپٹے کیڑے) اخراج کے لیے فلیم سیلز (پروٹونیفریڈیا) کا ایک نیٹ ورک استعمال کرتے ہیں (د-ii)۔"
  },
  {
    "id": "376",
    "text": "Identify from the following, the one that is NOT due to hormones. (TSTET 19 June 2025)\nمندرجہ ذیل میں سے اس کی نشاندہی کریں جو ہارمونز کی وجہ سے نہیں ہوتا ہے۔",
    "options": [
      "Physical changes during adolescence\nبلوغت کے دوران جسمانی تبدیلیاں",
      "Breaking down of starches in the food eaten\nکھائی گئی خوراک میں نشاستے کا ٹوٹنا",
      "Control on the levels of sugar, salts and calcium in blood\nخون میں شکر، نمکیات اور کیلشیم کی سطح پر کنٹرول",
      "Formation of sperm\nنطفہ کی تشکیل"
    ],
    "correct": "Breaking down of starches in the food eaten",
    "explanation": "نشاستے کا سادہ شکر میں ٹوٹنا (ہاضمہ) ایک کیمیائی عمل ہے جس میں خامروں، بنیادی طور پر لعاب اور لبلبے کے رس میں موجود ایمائیلیز، سہولت فراہم کرتے ہیں۔ ٹیسٹوسٹیرون اور ایسٹروجن جیسے ہارمونز بلوغت کی تبدیلیوں کا سبب بنتے ہیں، انسولین اور گلوکاگون جیسے ہارمونز خون میں شکر کو کنٹرول کرتے ہیں، اور FSH اور ٹیسٹوسٹیرون جیسے ہارمونز نطفہ کی تشکیل کے لیے ضروری ہیں۔ تاہم، ہاضمہ انزیمیٹک ہوتا ہے۔"
  },
  {
    "id": "377",
    "text": "In plant cells, which of the following was earlier believed to be inactive but, now is considered to be one of the most significant parts of the cell which continuously exchanges information with other cells during growth and development? (TSTET 19 June 2025)\nپودوں کے خلیوں میں، مندرجہ ذیل میں سے کون سا حصہ پہلے غیر فعال سمجھا جاتا تھا، لیکن اب اسے خلیے کے سب سے اہم حصوں میں سے ایک سمجھا جاتا ہے جو نشوونما اور ترقی کے دوران دوسرے خلیوں کے ساتھ مسلسل معلومات کا تبادلہ کرتا ہے؟",
    "options": [
      "Cytoplasm\nسائٹوپلازم",
      "Mitochondria\nمائٹوکونڈریا",
      "Cell wall\nخلیے کی دیوار",
      "Plasma membrane\nپلازما جھلی"
    ],
    "correct": "Cell wall",
    "explanation": "تاریخی طور پر، پودے کی خلیے کی دیوار کو سہارے اور حفاظت کے لیے ایک غیر فعال، بے جان ساختی تہہ کے طور پر دیکھا جاتا تھا۔ جدید تحقیق نے دکھایا ہے کہ یہ ایک متحرک اور میٹابولک طور پر فعال جزو ہے۔ یہ خلیے سے خلیے کے مواصلات (پلازموڈیسمیٹا کے ذریعے)، پیتھوجینز کے خلاف دفاع، اور خلیے کی نشوونما اور شکلیات کے ضابطے میں اہم کردار ادا کرتی ہے، جو اسے خلیے کا ایک اہم اور فعال حصہ بناتی ہے۔"
  },
  {
    "id": "378",
    "text": "The 'second brain' in our body is spread throughout our... (TSTET 19 June 2025)\nہمارے جسم میں 'دوسرا دماغ' ہمارے ... میں پھیلا ہوا ہے۔",
    "options": [
      "Circulatory system\nدوران خون کا نظام",
      "Digestive system\nنظام انہضام",
      "Excretory system\nنظام اخراج",
      "Skin\nجلد"
    ],
    "correct": "Digestive system",
    "explanation": "نظام انہضام کو اکثر 'دوسرا دماغ' کہا جاتا ہے کیونکہ اس میں اینٹرک نروس سسٹم (ENS) ہوتا ہے۔ ENS 100 ملین سے زیادہ نیورونز کا ایک پیچیدہ نیٹ ورک ہے جو غذائی نالی سے لے کر مقعد تک معدے کی نالی میں پھیلا ہوا ہے۔ یہ ہاضمے کو کنٹرول کرنے کے لیے آزادانہ طور پر کام کر سکتا ہے اور مرکزی اعصابی نظام کے ساتھ بھی رابطہ کرتا ہے، جس سے مزاج اور مجموعی صحت پر اثر پڑتا ہے۔"
  },
  {
    "id": "379",
    "text": "Read the following statements. A) Asexual reproduction occurs only in plants. B) In Yeast, reproduction happens by budding. Choose the correct answer. (TSTET 19 June 2025)\nمندرجہ ذیل بیانات کو پڑھیں۔ الف) غیر جنسی تولید صرف پودوں میں ہوتی ہے۔ ب) خمیر میں، تولید بڈنگ کے ذریعے ہوتی ہے۔ صحیح جواب منتخب کریں۔",
    "options": [
      "A is correct and B is incorrect.\nالف صحیح ہے اور ب غلط ہے۔",
      "Both 'A' & 'B' are correct.\n'الف' اور 'ب' دونوں صحیح ہیں۔",
      "Both A & B are incorrect.\nالف اور ب دونوں غلط ہیں۔",
      "'A' is incorrect and B is correct.\n'الف' غلط ہے اور ب صحیح ہے۔"
    ],
    "correct": "'A' is incorrect and B is correct.",
    "explanation": "بیان الف غلط ہے کیونکہ غیر جنسی تولید زندگی کی بہت سی سلطنتوں میں پائی جاتی ہے، بشمول جانور (مثلاً، ہائیڈرا، اسٹار فش)، فنجائی (مثلاً، خمیر، پھپھوندی)، اور پروٹسٹ (مثلاً، امیبا)، نہ کہ صرف پودوں میں۔ بیان ب صحیح ہے؛ خمیر، ایک یک خلوی فنگس، عام طور پر بڈنگ نامی عمل کے ذریعے غیر جنسی طور پر تولید کرتا ہے، جس میں ایک نیا فرد والدین سے ایک ابھار کے طور پر بڑھتا ہے۔"
  },
  {
    "id": "380",
    "text": "Identify the organic matter present in the soil. (TSTET 19 June 2025)\nمٹی میں موجود نامیاتی مادے کی نشاندہی کریں۔",
    "options": [
      "Humus\nہیومس",
      "Peat\nپیٹ",
      "Regolith\nریگولتھ",
      "Bedrock\nبیڈراک"
    ],
    "correct": "Humus",
    "explanation": "ہیومس مٹی کا گہرا، مستحکم، نامیاتی جزو ہے، جو مائکروجنزموں کے ذریعے پودوں اور جانوروں کی باقیات کے سڑنے سے بنتا ہے۔ یہ مٹی کی زرخیزی، ساخت اور پانی کو برقرار رکھنے کے لیے بہت اہم ہے۔ ریگولتھ ٹھوس بیڈراک کو ڈھانپنے والی ڈھیلی چٹان اور مٹی کی تہہ ہے۔ پیٹ جزوی طور پر سڑے ہوئے نامیاتی مادے کا ایک جمع ہونا ہے، لیکن ہیومس مٹی میں مربوط نامیاتی حصے کے لیے مخصوص اصطلاح ہے۔"
  },
  {
    "id": "381",
    "text": "How does the sperm break through the egg cell membrane? (TSTET 19 June 2025)\nنطفہ انڈے کے خلیے کی جھلی کو کیسے توڑتا ہے؟",
    "options": [
      "by tearing a hole in the membrane\nجھلی میں سوراخ کر کے",
      "by biting through the membrane\nجھلی کو کاٹ کر",
      "by squeezing through the gaps in the membrane\nجھلی میں موجود خلا سے نچوڑ کر",
      "by dissolving the membrane with chemicals / enzymes released\nخارج ہونے والے کیمیکلز / خامروں سے جھلی کو تحلیل کر کے"
    ],
    "correct": "by dissolving the membrane with chemicals / enzymes released",
    "explanation": "نطفے کے سرے کی نوک پر ایکرو سوم نامی ایک ساخت ہوتی ہے، جو ہاضم خامروں سے بھری ہوتی ہے۔ انڈے تک پہنچنے پر، ایکروسوم یہ خامرے (جیسے ہائیالورونیڈیز اور پروٹیز) خارج کرتا ہے۔ یہ خامرے انڈے کی بیرونی حفاظتی تہوں (زونا پیلوسیڈا) کو توڑ دیتے ہیں، جس سے نطفہ انڈے کی پلازما جھلی میں داخل ہو کر اس کے ساتھ مل جاتا ہے تاکہ فرٹیلائزیشن ہو سکے۔"
  },
  {
    "id": "382",
    "text": "The only cells in our body, which do not have the ability of regeneration are... (TSTET 19 June 2025)\nہمارے جسم کے وہ واحد خلیے، جن میں دوبارہ پیدا ہونے کی صلاحیت نہیں ہوتی، وہ ہیں...",
    "options": [
      "Blood cells\nخون کے خلیے",
      "Bone cells\nہڈی کے خلیے",
      "Nerve cells\nعصبی خلیے",
      "Stem cells\nاسٹیم سیلز"
    ],
    "correct": "Nerve cells",
    "explanation": "مرکزی اعصابی نظام میں پختہ عصبی خلیے (نیورونز) بہت زیادہ ماہر ہوتے ہیں اور عام طور پر پوسٹ مائیٹوٹک سمجھے جاتے ہیں، جس کا مطلب ہے کہ انہوں نے تقسیم اور نقل کرنے کی صلاحیت کھو دی ہے۔ جبکہ مخصوص دماغی علاقوں میں محدود نیوروجینیسیس کے کچھ ثبوت موجود ہیں، چوٹ کے بعد وسیع پیمانے پر دوبارہ پیدا ہونا نہیں ہوتا۔ اس کے برعکس، خون کے خلیے مسلسل تبدیل ہوتے رہتے ہیں، ہڈی کے خلیے فریکچر کی مرمت کر سکتے ہیں، اور اسٹیم سیلز اپنی دوبارہ پیدا ہونے کی صلاحیت سے پہچانے جاتے ہیں۔"
  },
  {
    "id": "383",
    "text": "Disease causing micro-organisms are called... (TSTET 19 June 2025)\nبیماری پیدا کرنے والے خوردبینی جاندار کہلاتے ہیں...",
    "options": [
      "Antigens\nاینٹی جنز",
      "Pathogens\nپیتھوجینز",
      "Vectors\nویکٹرز",
      "Agents\nایجنٹس"
    ],
    "correct": "Pathogens",
    "explanation": "پیتھوجن کسی بھی جاندار کے لیے مخصوص حیاتیاتی اصطلاح ہے جو بیماری کا سبب بن سکتا ہے۔ اس میں بعض قسم کے بیکٹیریا، وائرس، فنجائی اور پرجیوی شامل ہیں۔ اینٹی جن ایک مالیکیول ہے جو مدافعتی ردعمل کو متحرک کرتا ہے۔ ویکٹر ایک جاندار ہے جو پیتھوجن منتقل کرتا ہے (مثلاً، ملیریا کے پرجیوی کو لے جانے والا مچھر)۔"
  },
  {
    "id": "384",
    "text": "Read the following statements. A) Some animals chew food very quickly and swallow and store it in a part of their stomach. After some time they get the swallowed food back into mouth and chew it again. This is called Rumination. B) Cow, Camel are ruminating animals. Choose the correct answer. (TSTET 19 June 2025)\nمندرجہ ذیل بیانات کو پڑھیں۔ الف) کچھ جانور بہت تیزی سے کھانا چباتے ہیں اور اسے نگل کر اپنے معدے کے ایک حصے میں جمع کر لیتے ہیں۔ کچھ دیر بعد وہ نگلی ہوئی خوراک کو واپس منہ میں لاتے ہیں اور اسے دوبارہ چباتے ہیں۔ اسے جگالی کرنا کہتے ہیں۔ ب) گائے، اونٹ جگالی کرنے والے جانور ہیں۔ صحیح جواب منتخب کریں۔",
    "options": [
      "Both 'A' & 'B' are correct\n'الف' اور 'ب' دونوں صحیح ہیں",
      "'A' is correct and B is incorrect\n'الف' صحیح ہے اور ب غلط ہے",
      "'A' is incorrect and B is correct\n'الف' غلط ہے اور ب صحیح ہے",
      "Both 'A' & 'B' are incorrect\n'الف' اور 'ب' دونوں غلط ہیں"
    ],
    "correct": "Both 'A' & 'B' are correct",
    "explanation": "بیان الف جگالی کے عمل کو صحیح طور پر بیان کرتا ہے، جہاں سبزی خور جانور جزوی طور پر ہضم شدہ خوراک (کڈ) کو دوبارہ منہ میں لاتے ہیں اور اسے مزید توڑنے کے لیے دوبارہ چباتے ہیں۔ بیان ب بھی صحیح ہے؛ گائے اور اونٹ جگالی کرنے والے جانوروں کی مشہور مثالیں ہیں جو سخت پودوں سے غذائی اجزاء نکالنے کے لیے یہ ہاضمے کی حکمت عملی استعمال کرتے ہیں۔"
  },
  {
    "id": "385",
    "text": "Among the following Indian scientists who gave an accurate approximation for π? (TSTET 19 June 2025)\nمندرجہ ذیل بھارتی سائنسدانوں میں سے کس نے π کے لیے ایک درست تخمینہ دیا تھا؟",
    "options": [
      "Aryabhata\nآریہ بھٹ",
      "C V Raman\nسی وی رمن",
      "Homi Bhabha\nہومی بھابھا",
      "Jagadish Chandra Bose\nجگدیش چندر بوس"
    ],
    "correct": "Aryabhata",
    "explanation": "آریہ بھٹ، کلاسیکی ہندوستان کے ایک مشہور ریاضی دان-ماہر فلکیات (تقریباً 476-550 عیسوی)، نے π کے لیے ابتدائی اور سب سے درست تخمینوں میں سے ایک فراہم کیا۔ اپنے مقالے، آریہ بھٹیہ میں، انہوں نے اس کی قیمت 3.1416 شمار کی، جو حقیقی قیمت کے قابل ذکر حد تک قریب ہے۔ سی وی رمن، ہومی بھابھا، اور جے سی بوس 20ویں صدی کے مشہور طبیعیات دان اور ماہر حیاتیات تھے۔"
  },
  {
    "id": "386",
    "text": "Students apply their new knowledge and perform a new related experiment that extends their learning beyond the initial learning. It represents this step in the 5E learning model. (TSTET 19 June 2025)\nطلباء اپنے نئے علم کا اطلاق کرتے ہیں اور ایک نیا متعلقہ تجربہ کرتے ہیں جو ان کی سیکھنے کو ابتدائی سیکھنے سے آگے بڑھاتا ہے۔ یہ 5E لرننگ ماڈل میں اس مرحلے کی نمائندگی کرتا ہے۔",
    "options": [
      "Exploring\nتلاش کرنا",
      "Elaborating\nتفصیل بیان کرنا",
      "Engaging\nمشغول کرنا",
      "Evaluating\nجانچنا"
    ],
    "correct": "Elaborating",
    "explanation": "5E تدریسی ماڈل پانچ مراحل پر مشتمل ہے: مشغول کرنا، تلاش کرنا، وضاحت کرنا، تفصیل بیان کرنا، اور جانچنا۔ 'تفصیل بیان کرنا' کا مرحلہ طلباء کو چیلنج کرتا ہے کہ وہ اپنی سمجھ کو ایک نئے تناظر میں لاگو کریں۔ اپنے علم کو اصل سبق سے آگے بڑھانے کے لیے ایک نیا، متعلقہ تجربہ کرنا تفصیل بیان کرنے کے مرحلے کی ایک کلاسیکی مثال ہے۔"
  },
  {
    "id": "387",
    "text": "Which of the following questions is more subjective in nature? (TSTET 19 June 2025)\nمندرجہ ذیل میں سے کون سا سوال فطرت میں زیادہ موضوعی ہے؟",
    "options": [
      "What is the SI unit of mass?\nکمیت کی SI اکائی کیا ہے؟",
      "State Ohm's Law.\nاوہم کا قانون بیان کریں۔",
      "What are the laws of reflection of light?\nروشنی کے انعکاس کے قوانین کیا ہیں؟",
      "How is loneliness perceived by different people?\nمختلف لوگوں کے ذریعہ تنہائی کو کیسے سمجھا جاتا ہے؟"
    ],
    "correct": "How is loneliness perceived by different people?",
    "explanation": "ایک موضوعی سوال وہ ہوتا ہے جو ایک واحد، قابل تصدیق حقیقت کے بجائے ذاتی آراء، احساسات اور تشریحات پر انحصار کرتا ہے۔ پہلے تین سوالات معروضی ہیں؛ ان کے قطعی، حقائق پر مبنی جوابات ہیں (کلوگرام، V=IR، وغیرہ)۔ تنہائی کا تصور فطری طور پر موضوعی ہے، جو شخص سے شخص ان کے تجربات اور نفسیات کی بنیاد پر بہت مختلف ہوتا ہے۔"
  },
  {
    "id": "388",
    "text": "Read the following Assertion and Reason. Assertion (A): Science experiences paradigm shifts. Reason (R): Existing scientific theories and laws may be discarded in light of new evidence. Choose the correct option. (TSTET 19 June 2025)\nمندرجہ ذیل دعویٰ اور وجہ کو پڑھیں۔ دعویٰ (A): سائنس پیراڈائم شفٹ کا تجربہ کرتی ہے۔ وجہ (R): موجودہ سائنسی نظریات اور قوانین کو نئے شواہد کی روشنی میں مسترد کیا جا سکتا ہے۔ صحیح آپشن کا انتخاب کریں۔",
    "options": [
      "Both (A) and (R) are true but (R) is not correct reasoning for (A).\n(A) اور (R) دونوں سچ ہیں لیکن (R) (A) کے لیے صحیح استدلال نہیں ہے۔",
      "(A) is true but (R) is false.\n(A) سچ ہے لیکن (R) جھوٹ ہے۔",
      "(A) is false but (R) is true.\n(A) جھوٹ ہے لیکن (R) سچ ہے۔",
      "Both (A) and (R) are true and (R) gives correct reasoning for (A).\n(A) اور (R) دونوں سچ ہیں اور (R) (A) کے لیے صحیح استدلال پیش کرتا ہے۔"
    ],
    "correct": "Both (A) and (R) are true and (R) gives correct reasoning for (A).",
    "explanation": "ایک 'پیراڈائم شفٹ' (دعویٰ A) ایک سائنسی نظم و ضبط کے بنیادی تصورات میں ایک بنیادی تبدیلی ہے۔ یہ ٹھیک اسی لیے ہوتا ہے کیونکہ سائنس خود کو درست کرتی ہے؛ جیسے جیسے نئے شواہد سامنے آتے ہیں جو موجودہ ماڈلز سے متصادم ہوتے ہیں، ان ماڈلز پر نظر ثانی کی جا سکتی ہے یا انہیں مکمل طور پر مسترد کیا جا سکتا ہے (وجہ R)۔ لہذا، یہ حقیقت کہ سائنسی نظریات عارضی ہیں اور نئے شواہد سے الٹائے جا سکتے ہیں، یہی وجہ ہے کہ پیراڈائم شفٹ ہوتے ہیں۔"
  },
  {
    "id": "389",
    "text": "A teacher asks students to investigate the causes, symptoms, and preventive methods for a new disease spreading in their village. Which of the following methods best suits this context? A) Lecture method B) Project method C) Problem-solving method. (TSTET 19 June 2025)\nایک استاد طلباء سے اپنے گاؤں میں پھیلنے والی ایک نئی بیماری کی وجوہات، علامات اور حفاظتی طریقوں کی تحقیقات کرنے کو کہتا ہے۔ مندرجہ ذیل میں سے کون سا طریقہ اس تناظر میں سب سے زیادہ موزوں ہے؟ الف) لیکچر کا طریقہ ب) پروجیکٹ کا طریقہ ج) مسئلہ حل کرنے کا طریقہ۔",
    "options": [
      "A only\nصرف الف",
      "B only\nصرف ب",
      "A and B only\nصرف الف اور ب",
      "B and C only\nصرف ب اور ج"
    ],
    "correct": "B and C only",
    "explanation": "یہ کام ایک حقیقی دنیا کا، کثیر جہتی مسئلہ ہے جس کے لیے فعال تحقیقات، ڈیٹا اکٹھا کرنے، تجزیہ اور حل (حفاظتی طریقے) کی ترکیب کی ضرورت ہے۔ لیکچر کا طریقہ (الف) بہت غیر فعال ہے۔ پروجیکٹ کا طریقہ (ب) مثالی ہے کیونکہ یہ طلباء کو وقت کے ساتھ گہرائی سے تحقیق کرنے اور ایک جامع رپورٹ تیار کرنے کی اجازت دیتا ہے۔ مسئلہ حل کرنے کا طریقہ (ج) بھی بالکل موزوں ہے کیونکہ بنیادی کام کسی مسئلے کو سمجھنا اور اس کے حل تجویز کرنا ہے۔ اس منظر نامے کے لیے ب اور ج دونوں انتہائی مؤثر، طالب علم پر مبنی طریقے ہیں۔"
  },
  {
    "id": "390",
    "text": "Radioactive decay is a first-order process. What does this imply about the half-life of a radioactive isotope?\nتابکار زوال ایک پہلے درجے کا عمل ہے۔ اس کا ایک تابکار آاسوٹوپ کی نصف زندگی کے بارے میں کیا مطلب ہے؟",
    "options": [
      "The half-life decreases as the sample decays.\nنمونے کے زوال کے ساتھ نصف زندگی کم ہوتی جاتی ہے۔",
      "The half-life is constant and independent of the initial amount of the isotope.\nنصف زندگی مستقل ہے اور آاسوٹوپ کی ابتدائی مقدار سے آزاد ہے۔",
      "The half-life increases as the sample decays.\nنمونے کے زوال کے ساتھ نصف زندگی بڑھتی جاتی ہے۔",
      "The half-life is directly proportional to the temperature of the sample.\nنصف زندگی نمونے کے درجہ حرارت کے براہ راست متناسب ہے۔"
    ],
    "correct": "The half-life is constant and independent of the initial amount of the isotope.",
    "explanation": "ایک پہلے درجے کے ردعمل جیسے تابکار زوال کے لیے، نصف زندگی ($t_{1/2}$) وہ وقت ہے جو کسی نمونے میں نصف تابکار مرکزوں کے زوال کے لیے درکار ہوتا ہے۔ یہ وقت مستقل ہوتا ہے اور صرف آاسوٹوپ کے زوال کے مستقل پر منحصر ہوتا ہے، نہ کہ اس بات پر کہ آپ کتنی مقدار سے شروع کرتے ہیں یا بیرونی حالات جیسے درجہ حرارت یا دباؤ پر۔"
  },
  {
    "id": "391",
    "text": "Among the following, an application of Bernoulli's principle is (TSTET 18 June 2025)\nمندرجہ ذیل میں سے، برنولی کے اصول کا ایک اطلاق ہے",
    "options": [
      "Lift on an airplane wing\nہوائی جہاز کے پر پر اٹھاؤ",
      "Formation of rainbows\nقوس قزح کی تشکیل",
      "Reflection of light in mirrors\nآئینوں میں روشنی کا انعکاس",
      "Formation of shadows\nسایوں کی تشکیل"
    ],
    "correct": "Lift on an airplane wing",
    "explanation": "برنولی کا اصول یہ بتاتا ہے کہ حرکت میں مائع کے لیے، رفتار میں اضافہ دباؤ میں کمی کا باعث بنتا ہے۔ ہوائی جہاز کا پر (ایئرفوئل) اس طرح ڈیزائن کیا گیا ہے کہ ہوا اس کی خمیدہ اوپری سطح پر اس کی چپٹی نچلی سطح سے زیادہ تیزی سے سفر کرتی ہے۔ رفتار کا یہ فرق پر کے اوپر کم دباؤ اور اس کے نیچے زیادہ دباؤ پیدا کرتا ہے، جس سے ایک اوپر کی طرف قوت پیدا ہوتی ہے جسے لفٹ کہتے ہیں۔ دیگر آپشنز بصریات سے متعلق ہیں: قوس قزح روشنی کے انتشار سے بنتی ہے، آئینوں میں انعکاس انعکاس کے قوانین کی پیروی کرتا ہے، اور سائے روشنی کو روکنے سے بنتے ہیں۔"
  },
  {
    "id": "392",
    "text": "The latitude of Medak, Telangana state is (rounded off to whole number) (TSTET 18 June 2025)\nمیدک، تلنگانہ ریاست کا عرض بلد ہے (قریب ترین مکمل عدد تک گول کیا گیا)",
    "options": [
      "17°N\n°17 شمال",
      "18° N\n°18 شمال",
      "20° N\n°20 شمال",
      "21° N\n°21 شمال"
    ],
    "correct": "18° N",
    "explanation": "تلنگانہ کے میدک ضلع کا درست عرض بلد تقریباً 18.04° شمال ہے۔ جب اس قدر کو قریب ترین مکمل عدد تک گول کیا جاتا ہے، تو یہ 18° شمال بن جاتا ہے۔"
  },
  {
    "id": "393",
    "text": "The sum of the angle of incidence and the angle of reflection of the incident light at a mirror in a periscope is (TSTET 18 June 2025)\nایک پیری اسکوپ میں آئینے پر واقع ہونے والی روشنی کے زاویہ وقوع اور زاویہ انعکاس کا مجموعہ ہے",
    "options": [
      "half the angle of incidence\nزاویہ وقوع کا نصف",
      "equal to the angle of reflection\nزاویہ انعکاس کے برابر",
      "equal to the angle of incidence\nزاویہ وقوع کے برابر",
      "twice the angle of incidence\nزاویہ وقوع کا دوگنا"
    ],
    "correct": "twice the angle of incidence",
    "explanation": "انعکاس کے قانون کے مطابق، زاویہ وقوع ہمیشہ زاویہ انعکاس کے برابر ہوتا ہے ($∠i = ∠r$)۔ سوال ان دونوں زاویوں کے مجموعے ($∠i + ∠r$) کے بارے میں پوچھتا ہے۔ چونکہ وہ برابر ہیں، اس مجموعے کو ($∠i + ∠i$) کے طور پر ظاہر کیا جا سکتا ہے، جو 2 × ∠i، یا زاویہ وقوع کے دوگنے تک سادہ ہو جاتا ہے۔"
  },
  {
    "id": "394",
    "text": "The relationship between loudness and amplitude of a sound wave is (TSTET 18 June 2025)\nآواز کی لہر کی بلندی اور طول و عرض کے درمیان تعلق ہے",
    "options": [
      "Loudness is inversely proportional to amplitude\nبلندی طول و عرض کے بالعکس متناسب ہے",
      "Loudness is directly proportional to amplitude\nبلندی طول و عرض کے براہ راست متناسب ہے",
      "Loudness is independent of amplitude\nبلندی طول و عرض سے آزاد ہے",
      "Loudness is inversely proportional to the square of amplitude\nبلندی طول و عرض کے مربع کے بالعکس متناسب ہے"
    ],
    "correct": "Loudness is directly proportional to amplitude",
    "explanation": "آواز کی بلندی کا تعین اس کے طول و عرض سے ہوتا ہے۔ ایک بڑا طول و عرض ایک بلند آواز سے مطابقت رکھتا ہے، اور ایک چھوٹا طول و عرض ایک پرسکون آواز سے مطابقت رکھتا ہے۔ جبکہ ایک صوتی لہر کی طبعی شدت طول و عرض کے مربع کے متناسب ہوتی ہے ($I ∝ A^2$)، عام معنوں میں، طول و عرض کے بڑھنے سے بلندی بڑھتی ہے۔ لہذا، دیے گئے انتخاب میں سے، براہ راست تناسب اس تعلق کی بہترین وضاحت ہے۔"
  },
  {
    "id": "395",
    "text": "The temperature measured in the Kelvin scale is called (TSTET 18 June 2025)\nکیلون پیمانے پر ماپا جانے والا درجہ حرارت کہلاتا ہے",
    "options": [
      "Absolute temperature\nمطلق درجہ حرارت",
      "Relative temperature\nنسبتی درجہ حرارت",
      "Standard temperature\nمعیاری درجہ حرارت",
      "Thermal temperature\nحرارتی درجہ حرارت"
    ],
    "correct": "Absolute temperature",
    "explanation": "کیلون پیمانہ ایک مطلق تھرموڈینامک درجہ حرارت کا پیمانہ ہے۔ اس کا صفر نقطہ، 0 K، مطلق صفر کی نمائندگی کرتا ہے، وہ نظریاتی درجہ حرارت جس پر تمام سالماتی حرکت رک جاتی ہے۔ چونکہ یہ اس مطلق کم از کم سے شروع ہوتا ہے، کیلون پیمانے پر ماپا جانے والا کوئی بھی درجہ حرارت مطلق درجہ حرارت کہلاتا ہے۔"
  },
  {
    "id": "396",
    "text": "The direction of the centripetal force is always: (TSTET 18 June 2025)\nمرکز مائل قوت کی سمت ہمیشہ ہوتی ہے:",
    "options": [
      "Tangent to the circular path\nگول راستے پر مماس",
      "Away from the center of the circle\nدائرے کے مرکز سے دور",
      "Towards the center of the circle\nدائرے کے مرکز کی طرف",
      "Along the direction of the velocity\nرفتار کی سمت میں"
    ],
    "correct": "Towards the center of the circle",
    "explanation": "مرکز مائل قوت وہ قوت ہے جو کسی شے کو گول راستے پر حرکت میں رکھتی ہے۔ یہ قوت ہمیشہ شے کی رفتار (جو راستے پر مماس ہوتی ہے) کے عمودی ہوتی ہے اور اندر کی طرف، دائرے کے مرکز کی طرف اشارہ کرتی ہے۔ یہ مسلسل اندرونی کھچاؤ ہی ہے جو شے کو سمت بدلنے اور ایک خم پر چلنے کا سبب بنتا ہے۔"
  },
  {
    "id": "397",
    "text": "To protect a horseshoe magnet and preserve its magnetic strength, you should always: (TSTET 18 June 2025)\nایک نعل نما مقناطیس کی حفاظت اور اس کی مقناطیسی طاقت کو محفوظ رکھنے کے لیے، آپ کو ہمیشہ چاہئے:",
    "options": [
      "Wrap it in plastic\nاسے پلاسٹک میں لپیٹیں",
      "Store it with a soft iron bar across its poles\nاسے اس کے قطبوں پر ایک نرم لوہے کی بار کے ساتھ ذخیرہ کریں",
      "Expose it to heat regularly\nاسے باقاعدگی سے گرمی میں رکھیں",
      "Hang it from a string\nاسے ایک دھاگے سے لٹکائیں"
    ],
    "correct": "Store it with a soft iron bar across its poles",
    "explanation": "ایک نرم لوہے کی بار، جسے کیپر کہا جاتا ہے، ذخیرہ کرنے کے دوران مقناطیس کے قطبوں پر رکھا جاتا ہے۔ کیپر مقناطیسی فیلڈ لائنوں کے لیے ایک بند لوپ بناتا ہے، جو مقناطیس کے اندر مقناطیسی ڈومینز کو بے ترتیب ہونے سے روکتا ہے۔ یہ خود سے ڈی میگنیٹائزیشن کو کم کرتا ہے اور وقت کے ساتھ مقناطیس کی طاقت کو محفوظ رکھنے میں مدد کرتا ہے۔"
  },
  {
    "id": "398",
    "text": "In an experiment, resistors made from the same material with resistances of 0.5 Ω, 2 Ω, 4 Ω, and 8 Ω are tested. It is observed that the ratio V/I (voltage/current) is not constant across these resistors. Based on this observation, the material used in the experiment is: (TSTET 18 June 2025)\nایک تجربے میں، ایک ہی مواد سے بنے رزسٹرز جن کی مزاحمت 0.5 Ω، 2 Ω، 4 Ω، اور 8 Ω ہے، کی جانچ کی جاتی ہے۔ یہ مشاہدہ کیا گیا ہے کہ ان رزسٹرز میں V/I (وولٹیج/کرنٹ) کا تناسب مستقل نہیں ہے۔ اس مشاہدے کی بنیاد پر، تجربے میں استعمال ہونے والا مواد ہے:",
    "options": [
      "Iron\nلوہا",
      "Copper\nتانبا",
      "Tungsten\nٹنگسٹن",
      "Germanium\nجرمینیم"
    ],
    "correct": "Germanium",
    "explanation": "اوہم کا قانون کہتا ہے کہ اوہمک کنڈکٹرز (جیسے زیادہ تر دھاتیں مستقل درجہ حرارت پر) کے لیے، وولٹیج اور کرنٹ (V/I) کا تناسب، جو کہ مزاحمت ہے، مستقل ہوتا ہے۔ وہ مواد جو اس اصول کی پیروی نہیں کرتے، غیر اوہمک کہلاتے ہیں۔ سیمی کنڈکٹرز، جیسے جرمینیم، غیر اوہمک ہوتے ہیں؛ ان کی مزاحمت وولٹیج اور درجہ حرارت کے ساتھ بدلتی ہے۔ چونکہ V/I کا تناسب مستقل نہیں تھا، اس لیے مواد جرمینیم جیسا ایک غیر اوہمک کنڈکٹر ہے۔"
  },
  {
    "id": "399",
    "text": "Bleaching of coloured objects using moist chlorine is an example of: (TSTET 18 June 2025)\nنم کلورین کا استعمال کرتے ہوئے رنگین اشیاء کی بلیچنگ ایک مثال ہے:",
    "options": [
      "Oxidation reaction\nتکسیدی تعامل",
      "Reduction reaction\nتخفیفی تعامل",
      "Neutralization reaction\nتعدیلی تعامل",
      "Precipitation reaction\nرسوبی تعامل"
    ],
    "correct": "Oxidation reaction",
    "explanation": "نم کلورین کی بلیچنگ کی کارروائی تکسید کی وجہ سے ہوتی ہے۔ کلورین پانی کے ساتھ تعامل کر کے ہائپوکلورس ایسڈ ($HClO$) بناتی ہے، جو غیر مستحکم ہوتا ہے اور ٹوٹ کر نوزائیدہ آکسیجن ($[O]$) خارج کرتا ہے۔ یہ انتہائی رد عمل والی نوزائیدہ آکسیجن رنگین مادوں کو تکسید کرتی ہے، ان کے کیمیائی بانڈز کو توڑتی ہے اور انہیں بے رنگ کر دیتی ہے۔"
  },
  {
    "id": "400",
    "text": "We use PET for making bottles. PET is a very familiar form of: (TSTET 18 June 2025)\nہم بوتلیں بنانے کے لیے PET کا استعمال کرتے ہیں۔ PET ایک بہت مانوس شکل ہے:",
    "options": [
      "Natural rubber\nقدرتی ربڑ",
      "Thermosetting plastic\nتھرموسیٹنگ پلاسٹک",
      "Polyester\nپالئیےسٹر",
      "Fiber glass\nفائبر گلاس"
    ],
    "correct": "Polyester",
    "explanation": "PET کا مطلب پولی تھیلین ٹیریفتھالیٹ ہے۔ یہ ایک تھرمو پلاسٹک پولیمر ہے جو مرکبات کے پالئیےسٹر خاندان سے تعلق رکھتا ہے۔ اس کی کیمیائی ساخت میں ایسٹر فنکشنل گروپس ہوتے ہیں، جو اسے پالئیےسٹر کے طور پر بیان کرتے ہیں۔ یہ مشروبات کی بوتلیں، کھانے کے کنٹینرز اور مصنوعی ریشے بنانے کے لیے بڑے پیمانے پر استعمال ہوتا ہے۔"
  },
  {
    "id": "401",
    "text": "Sodium metal is preserved in: (TSTET 18 June 2025)\nسوڈیم دھات کو کس میں محفوظ کیا جاتا ہے؟",
    "options": [
      "Water\nپانی",
      "Ethanol\nایتھنول",
      "Vinegar\nسرکہ",
      "Kerosene\nمٹی کا تیل"
    ],
    "correct": "Kerosene",
    "explanation": "سوڈیم ایک انتہائی رد عمل والی الکلی دھات ہے جو ہوا میں موجود آکسیجن اور نمی دونوں کے ساتھ پرتشدد رد عمل ظاہر کرتی ہے۔ یہ پانی کے ساتھ بھی دھماکہ خیز انداز میں رد عمل ظاہر کرتی ہے۔ ان رد عمل کو روکنے اور اسے محفوظ طریقے سے ذخیرہ کرنے کے لیے، اسے مٹی کے تیل جیسے غیر رد عمل والے مائع میں ڈبو دیا جاتا ہے، جو ہوا اور پانی کے لیے ایک رکاوٹ کا کام کرتا ہے۔"
  },
  {
    "id": "402",
    "text": "Identify the INCORRECT statement from the following (TSTET 18 June 2025)\nمندرجہ ذیل میں سے غلط بیان کی نشاندہی کریں۔",
    "options": [
      "Lanthanoids range from Lanthanum (La) to Lutetium (Lu).\nلینتھانائیڈز لینتھینم (La) سے لوٹیٹیم (Lu) تک ہوتے ہیں۔",
      "Actinoids range from Actinium (Ac) to Lawrencium (Lr).\nایکٹینائڈز ایکٹینیم (Ac) سے لارنسیم (Lr) تک ہوتے ہیں۔",
      "The third group of the periodic table starts with Carbon(C) and ends with Lead (Pb).\nدوری جدول کا تیسرا گروپ کاربن (C) سے شروع ہوتا ہے اور سیسہ (Pb) پر ختم ہوتا ہے۔",
      "The 4th period of the periodic table starts with Potassium (K) and ends with Krypton (Kr).\nدوری جدول کا چوتھا دور پوٹاشیم (K) سے شروع ہوتا ہے اور کرپٹن (Kr) پر ختم ہوتا ہے۔"
    ],
    "correct": "The third group of the periodic table starts with Carbon(C) and ends with Lead (Pb).",
    "explanation": "یہ بیان غلط ہے۔ دوری جدول کا گروپ 14 (گروپ 3 نہیں) کاربن گروپ ہے، جو کاربن (C) سے شروع ہوتا ہے اور سیسہ (Pb) پر ختم ہوتا ہے۔ گروپ 3 میں اسکینڈیم (Sc)، یٹریئم (Y)، اور لینتھانائیڈ اور ایکٹینائڈ سیریز شامل ہیں۔ دیگر بیانات درست ہیں۔"
  },
  {
    "id": "403",
    "text": "Which of the following plant tissues is made up of different types of cells? (TSTET 18 June 2025)\nمندرجہ ذیل میں سے کون سا پودوں کا ٹشو مختلف قسم کے خلیوں سے بنا ہے؟",
    "options": [
      "Parenchyma and collenchyma\nپیرنکائما اور کولنکائما",
      "Xylem and phloem\nزائلم اور فلوئم",
      "Collenchyma and sclerenchyma\nکولنکائما اور اسکلیرنکائما",
      "Parenchyma and sclerenchyma\nپیرنکائما اور اسکلیرنکائما"
    ],
    "correct": "Xylem and phloem",
    "explanation": "متعدد خلیوں کی اقسام پر مشتمل پودوں کے ٹشوز کو پیچیدہ ٹشوز کہا جاتا ہے۔ زائلم اور فلوئم پودوں میں بنیادی پیچیدہ ٹشوز ہیں۔ زائلم ٹریچیڈز، ویسلز، زائلم پیرنکائما، اور زائلم فائبرز سے بنا ہوتا ہے۔ فلوئم سیو ٹیوبز، کمپینین سیلز، فلوئم پیرنکائما، اور فلوئم فائبرز سے بنا ہوتا ہے۔ اس کے برعکس، پیرنکائما، کولنکائما، اور اسکلیرنکائما سادہ ٹشوز ہیں، کیونکہ ہر ایک صرف ایک قسم کے خلیے پر مشتمل ہوتا ہے۔"
  },
  {
    "id": "404",
    "text": "Energy producing catabolic life process is (TSTET 18 June 2025)\nتوانائی پیدا کرنے والا کیٹابولک زندگی کا عمل ہے۔",
    "options": [
      "Photosynthesis\nضیائی تالیف",
      "Reproduction\nتولید",
      "Excretion\nاخراج",
      "Respiration\nتنفس"
    ],
    "correct": "Respiration",
    "explanation": "کیٹابولک عمل میں پیچیدہ مالیکیولز کو سادہ مالیکیولز میں توڑنا شامل ہے، جس سے توانائی خارج ہوتی ہے۔ سیلولر تنفس زیادہ تر جانداروں میں بنیادی کیٹابولک عمل ہے، جہاں گلوکوز اور دیگر غذائی مالیکیولز کو توڑ کر اے ٹی پی (ایڈینوسین ٹرائی فاسفیٹ) پیدا کیا جاتا ہے، جو سیل کی اہم توانائی کی کرنسی ہے۔ ضیائی تالیف ایک اینابولک (تعمیری) عمل ہے جو توانائی استعمال کرتا ہے۔"
  },
  {
    "id": "405",
    "text": "Identify the correct pair of glands from the following (TSTET 18 June 2025)\nمندرجہ ذیل میں سے غدود کی صحیح جوڑی کی نشاندہی کریں۔",
    "options": [
      "Pituitary gland and Gastric glands\nپٹیوٹری غدود اور معدے کے غدود",
      "Prostrate gland and Cowper's gland\nپروسٹیٹ غدود اور کاؤپر کا غدود",
      "Adrenal gland and Salivary gland\nایڈرینل غدود اور تھوک کے غدود",
      "Prostrate gland and Thyroid gland\nپروسٹیٹ غدود اور تھائرائڈ غدود"
    ],
    "correct": "Prostrate gland and Cowper's gland",
    "explanation": "پروسٹیٹ غدود اور کاؤپر کے غدود (جنہیں بلبوریتھرل غدود بھی کہا جاتا ہے) دونوں مردانہ تولیدی نظام کے اضافی غدود ہیں۔ وہ مل کر سیمینل فلوئیڈ پیدا کرنے کا کام کرتے ہیں۔ دیگر جوڑوں میں مختلف نظاموں کے غدود کو غلط طریقے سے ملایا گیا ہے (مثلاً، اینڈوکرائن جیسے پٹیوٹری/ایڈرینل/تھائرائڈ اور ایکسوکرائن/ہاضمے جیسے معدے/تھوک)۔"
  },
  {
    "id": "406",
    "text": "Which of the following Bacterium is called as Bio pesticide (TSTET 18 June 2025)\nمندرجہ ذیل میں سے کون سا بیکٹیریم بائیو پیسٹیسائڈ کہلاتا ہے؟",
    "options": [
      "Clostridium botulinum\nکلوسٹریڈیم بوٹولینم",
      "Lactobacillus\nلیکٹوبیسلس",
      "Bacillus thuringiensis\nبیسیلس تھورنجینسس",
      "Rhizobium\nرائزوبیم"
    ],
    "correct": "Bacillus thuringiensis",
    "explanation": "بیسیلس تھورنجینسس (بی ٹی) ایک بیکٹیریم ہے جو قدرتی طور پر پروٹین کرسٹل پیدا کرتا ہے جو بعض کیڑوں کے لاروا کے لیے زہریلے ہوتے ہیں۔ اسے زراعت میں حیاتیاتی کیڑے مار دوا کے طور پر وسیع پیمانے پر استعمال کیا جاتا ہے کیونکہ یہ مخصوص کیڑوں (جیسے کیٹرپلر) کو نشانہ بناتا ہے جبکہ انسانوں، پرندوں اور زیادہ تر فائدہ مند کیڑوں کے لیے بے ضرر ہوتا ہے۔"
  },
  {
    "id": "407",
    "text": "Identify the autotrophic of a food chain from the following (TSTET 18 June 2025)\nمندرجہ ذیل میں سے فوڈ چین کے خود کفیل جاندار کی نشاندہی کریں۔",
    "options": [
      "Producers\nپیدا کنندگان",
      "Primary consumers\nبنیادی صارفین",
      "Secondary consumers\nثانوی صارفین",
      "Tertiary consumers\nثالثی صارفین"
    ],
    "correct": "Producers",
    "explanation": "خود کفیل (آٹوٹراف) وہ جاندار ہیں جو غیر نامیاتی مادوں سے اپنی خوراک خود پیدا کرنے کی صلاحیت رکھتے ہیں، عام طور پر روشنی کی توانائی (ضیائی تالیف) کا استعمال کرتے ہوئے۔ کسی بھی فوڈ چین میں، ان جانداروں کو پیدا کنندگان (پروڈیوسرز) کہا جاتا ہے اور وہ پہلی ٹرافک سطح بناتے ہیں۔ پودے، الجی، اور کچھ بیکٹیریا پیدا کنندگان ہیں۔ تمام قسم کے صارفین ہیٹروٹراف ہیں، جس کا مطلب ہے کہ انہیں توانائی حاصل کرنے کے لیے دوسرے جانداروں کو کھانا پڑتا ہے۔"
  },
  {
    "id": "408",
    "text": "Identify exhaustible natural resource from the following (TSTET 18 June 2025)\nمندرجہ ذیل میں سے ختم ہونے والے قدرتی وسائل کی نشاندہی کریں۔",
    "options": [
      "Water\nپانی",
      "Wind\nہوا",
      "Minerals\nمعدنیات",
      "Solar energy\nشمسی توانائی"
    ],
    "correct": "Minerals",
    "explanation": "ختم ہونے والے، یا ناقابل تجدید، وسائل وہ ہیں جو ایک محدود مقدار میں موجود ہیں اور انسانی وقت کے پیمانے پر دوبارہ بھرے نہیں جا سکتے۔ معدنیات، جیسے لوہے کی کچ دھات، تانبا، اور باکسائٹ، زمین سے نکالی جاتی ہیں اور محدود ہیں۔ اس کے برعکس، شمسی توانائی، ہوا، اور پانی (جو آبی چکر کے ذریعے دوبارہ بھر جاتا ہے) کو ناقابلِ خاتمہ یا قابلِ تجدید وسائل سمجھا جاتا ہے۔"
  },
  {
    "id": "409",
    "text": "\"Pellagra\" is the disease related to which part of the body? (TSTET 18 June 2025)\n\"پیلاگرا\" بیماری جسم کے کس حصے سے متعلق ہے؟",
    "options": [
      "Skin\nجلد",
      "Eyes\nآنکھیں",
      "Liver\nجگر",
      "Kidney\nگردہ"
    ],
    "correct": "Skin",
    "explanation": "پیلاگرا ایک نظامی بیماری ہے جو نیاسین (وٹامن B3) کی شدید کمی کی وجہ سے ہوتی ہے۔ یہ کلاسیکی طور پر '3 Ds' کے نام سے مشہور علامات کے امتزاج کے ساتھ ظاہر ہوتی ہے: ڈرماٹائٹس (جلد پر شدید خارش، خاص طور پر دھوپ میں رہنے والے علاقوں میں)، ڈائریا، اور ڈیمنشیا۔ لہذا، جلد جسم کا ایک بنیادی اور انتہائی نمایاں حصہ ہے جو اس بیماری سے متاثر ہوتا ہے۔"
  },
  {
    "id": "410",
    "text": "Which macro nutrient is essential for the arise of new leaves and flowers in plant? (TSTET 18 June 2025)\nپودے میں نئے پتوں اور پھولوں کے نکلنے کے لیے کون سا میکرو نیوٹرینٹ ضروری ہے؟",
    "options": [
      "Phosphorous\nفاسفورس",
      "Potassium\nپوٹاشیم",
      "Nitrogen\nنائٹروجن",
      "Boron\nبوران"
    ],
    "correct": "Nitrogen",
    "explanation": "نائٹروجن ایک بنیادی میکرو نیوٹرینٹ ہے جو پودوں کی نشوونما کے لیے بہت ضروری ہے۔ یہ کلوروفل (ضیائی تالیف کے لیے ضروری) اور امینو ایسڈز (پروٹین کے بنیادی اجزاء) کا ایک بنیادی جزو ہے۔ اس طرح، نائٹروجن سب سے زیادہ بھرپور نباتاتی نشوونما کو فروغ دینے سے وابستہ ہے، بشمول تنوں اور نئے پتوں کی ترقی۔ جبکہ فاسفورس پھولوں اور جڑوں کے لیے کلیدی حیثیت رکھتا ہے، نائٹروجن پودے کی مجموعی ساخت اور پودوں کی بنیاد فراہم کرتا ہے۔"
  },
  {
    "id": "411",
    "text": "Ozone molecules constantly get formed and destroyed in which layer of the atmosphere? (TSTET 18 June 2025)\nاوزون کے مالیکیول فضا کی کس تہہ میں مسلسل بنتے اور تباہ ہوتے رہتے ہیں؟",
    "options": [
      "Mesosphere\nمیزوسفیئر",
      "Troposphere\nٹروپوسفیئر",
      "Stratosphere\nاسٹریٹوسفیئر",
      "Thermosphere\nتھرموسفیئر"
    ],
    "correct": "Stratosphere",
    "explanation": "اوزون کی تہہ بنیادی طور پر اسٹریٹوسفیئر میں پائی جاتی ہے۔ اس تہہ میں، ایک قدرتی چکر جسے چیپ مین سائیکل کہا جاتا ہے، واقع ہوتا ہے: سورج سے آنے والی اعلی توانائی والی بالائے بنفشی (یو وی) تابکاری آکسیجن مالیکیولز (O₂) کو انفرادی آکسیجن ایٹموں (O) میں توڑ دیتی ہے۔ یہ ایٹم پھر دوسرے آکسیجن مالیکیولز کے ساتھ مل کر اوزون (O₃) بناتے ہیں۔ اس کے ساتھ ساتھ، اوزون یو وی تابکاری سے بھی تباہ ہوتی ہے، جس سے ایک متحرک توازن پیدا ہوتا ہے جو زیادہ تر نقصان دہ یو وی شعاعوں کو جذب کرتا ہے۔"
  },
  {
    "id": "412",
    "text": "The disease 'Kala-Azar' is caused by (TSTET 18 June 2025)\n'کالا آزار' بیماری کس وجہ سے ہوتی ہے؟",
    "options": [
      "Bacteria\nبیکٹیریا",
      "Virus\nوائرس",
      "Worms\nکیڑے",
      "Protozoan\nپروٹوزوا"
    ],
    "correct": "Protozoan",
    "explanation": "کالا آزار، جسے وسرل لیشمینیاسس بھی کہا جاتا ہے، ایک پرجیوی بیماری ہے جو لیشمینیا جینس کے پروٹوزوا کی وجہ سے ہوتی ہے۔ یہ پرجیوی متاثرہ مادہ سینڈ فلائی کے کاٹنے سے انسانوں میں منتقل ہوتا ہے۔ یہ بیکٹیریا، وائرس یا کیڑوں کی وجہ سے نہیں ہوتا ہے۔"
  },
  {
    "id": "413",
    "text": "Match the following (TSTET 18 June 2025)\nA) Palaeontology I) diseases\nB) Ecology II) Fossils\nC) Microbiology III) Environment\nD) Pathology IV) Micro organisms\n\nمندرجہ ذیل کو ملائیں\nالف) پیلیونٹولوجی - اول) بیماریاں\nب) ایکولوجی - دوم) فوسلز\nج) مائیکروبیالوجی - سوم) ماحول\nد) پیتھالوجی - چہارم) خوردبینی جاندار",
    "options": [
      "A-ii, B-iii, C-iv, D-i",
      "A-ii, B-iv, C-iii, D-i",
      "A-iii, B-i, C-ii, D-iv",
      "A-i, B-ii, C-iv, D-iii"
    ],
    "correct": "A-ii, B-iii, C-iv, D-i",
    "explanation": "صحیح ملاپ یہ ہیں:\n- پیلیونٹولوجی (الف) ارضیاتی ماضی کی زندگی کا سائنسی مطالعہ ہے جس میں پودوں اور جانوروں کے فوسلز (دوم) کا تجزیہ شامل ہے۔\n- ایکولوجی (ب) حیاتیات کی وہ شاخ ہے جو جانداروں کے ایک دوسرے اور ان کے طبعی ماحول (سوم) سے تعلقات سے متعلق ہے۔\n- مائیکروبیالوجی (ج) خوردبینی جانداروں (چهارم) کا مطالعہ ہے، جیسے بیکٹیریا، وائرس اور فنجائی۔\n- پیتھالوجی (د) بیماریوں (اول) کے اسباب اور اثرات کا مطالعہ ہے۔"
  },
  {
    "id": "414",
    "text": "Identify the plant that produces new plant from the modified roots (TSTET 18 June 2025)\nاس پودے کی نشاندہی کریں جو تبدیل شدہ جڑوں سے نیا پودا پیدا کرتا ہے۔",
    "options": [
      "Potato\nآلو",
      "Dahlia\nڈاہلیا",
      "Bryophyllum\nبرائیوفائلم",
      "Gladioli\nگلیڈیولی"
    ],
    "correct": "Dahlia",
    "explanation": "ڈاہلیا ٹیوبرس جڑوں کے ذریعے پھیلتا ہے، جو تبدیل شدہ جڑیں ہیں جو خوراک ذخیرہ کرتی ہیں اور ان میں ایڈوینٹیشیئس کلیاں ہوتی ہیں۔ یہ کلیاں پھوٹ کر نئے پودوں میں تبدیل ہو سکتی ہیں۔ اس کے برعکس، آلو ایک تبدیل شدہ تنا (ٹیوبر) ہے، برائیوفائلم اپنے پتوں پر موجود کلیوں سے پھیلتا ہے، اور گلیڈیولس کورم سے اگتا ہے، جو ایک تبدیل شدہ زیر زمین تنا ہے۔"
  },
  {
    "id": "415",
    "text": "A student of class IX noticed that a metal rod expands when heated and contracts when cooled. He concluded that temperature affects the length of metals. Which learning objective is this related to? (TSTET 18 June 2025)\nنویں جماعت کے ایک طالب علم نے دیکھا کہ دھات کی ایک سلاخ گرم کرنے پر پھیلتی ہے اور ٹھنڈا کرنے پر سکڑتی ہے۔ اس نے نتیجہ اخذ کیا کہ درجہ حرارت دھاتوں کی لمبائی پر اثر انداز ہوتا ہے۔ یہ کس تعلیمی مقصد سے متعلق ہے؟",
    "options": [
      "Knowledge\nعلم",
      "Understanding\nتفہیم",
      "Application\nاطلاق",
      "Skill\nمہارت"
    ],
    "correct": "Understanding",
    "explanation": "یہ منظرنامہ حقائق کی سادہ یادداشت (علم) سے بالاتر ہے۔ طالب علم نے ایک مظہر کا مشاہدہ کیا اور ایک عمومی نتیجہ یا اصول بنانے کے لیے اس کی تشریح کرنے میں کامیاب رہا۔ تعلق قائم کرنے کے لیے مشاہدات کی وضاحت، تشریح اور خلاصہ کرنے کا یہ عمل تفہیم کے علمی ڈومین کے تحت آتا ہے۔"
  },
  {
    "id": "416",
    "text": "Which of the following teaching methods is LEAST aligned with the scientific method used in science teaching? (TSTET 18 June 2025)\nمندرجہ ذیل میں سے کون سا تدریسی طریقہ سائنس کی تدریس میں استعمال ہونے والے سائنسی طریقہ کار سے کم سے کم مطابقت رکھتا ہے؟",
    "options": [
      "Inductive method\nاستقرائی طریقہ",
      "Laboratory method\nلیبارٹری کا طریقہ",
      "Inquiry-based method\nتحقیقاتی طریقہ",
      "Deductive method\nاستخراجی طریقہ"
    ],
    "correct": "Deductive method",
    "explanation": "سائنسی طریقہ کار بنیادی طور پر ایک استقرائی اور تحقیقات پر مبنی عمل ہے۔ یہ وسیع تر عمومیتوں اور نظریات (استقرائی طریقہ) کی تشکیل کے لیے مخصوص مشاہدات اور تجربات (لیبارٹری کا طریقہ) سے شروع ہوتا ہے۔ استخراجی طریقہ، تاہم، ایک عمومی اصول یا قاعدے سے شروع ہوتا ہے اور اسے مخصوص مثالوں پر لاگو کرتا ہے۔ اگرچہ یہ ہدایت کے لیے موزوں ہے، لیکن یہ سائنسی دریافت کے عمل کے برعکس ہے اور اس لیے اس سے کم سے کم مطابقت رکھتا ہے۔"
  },
  {
    "id": "417",
    "text": "Achievement tests are generally classified as, A) Teacher made tests, B) Standardized tests. Choose the correct answer. (TSTET 18 June 2025)\nکامیابی کے ٹیسٹ عام طور پر درجہ بندی کیے جاتے ہیں، الف) استاد کے بنائے ہوئے ٹیسٹ، ب) معیاری ٹیسٹ۔ صحیح جواب کا انتخاب کریں۔",
    "options": [
      "Both A & B\nالف اور ب دونوں",
      "Neither A nor B\nنہ الف اور نہ ب",
      "A only\nصرف الف",
      "B only\nصرف ب"
    ],
    "correct": "Both A & B",
    "explanation": "کامیابی کے ٹیسٹ، جو حاصل کردہ علم یا مہارت کی پیمائش کرتے ہیں، کو وسیع پیمانے پر دو اقسام میں درجہ بندی کیا جاتا ہے۔ استاد کے بنائے ہوئے ٹیسٹ اساتذہ اپنی مخصوص کلاس کے لیے بناتے ہیں۔ معیاری ٹیسٹ ماہرین تیار کرتے ہیں اور انہیں مستقل، یا 'معیاری' طریقے سے منظم اور اسکور کیا جاتا ہے، اکثر بڑے پیمانے پر تشخیص کے لیے۔ دونوں عام درجہ بندیاں ہیں۔"
  },
  {
    "id": "418",
    "text": "In this Assessment, the performance of the other students is NOT important in the interpretation of the performance of a particular student (TSTET 18 June 2025)\nاس تشخیص میں، کسی خاص طالب علم کی کارکردگی کی تشریح میں دوسرے طلباء کی کارکردگی اہم نہیں ہوتی۔",
    "options": [
      "Norm-referenced Assessment\nمعیار پر مبنی تشخیص",
      "Criterion-referenced Assessment\nکسوٹی پر مبنی تشخیص",
      "Relative Grading Assessment\nنسبتی درجہ بندی کی تشخیص",
      "Placement Assessment\nپلیسمنٹ کی تشخیص"
    ],
    "correct": "Criterion-referenced Assessment",
    "explanation": "کسوٹی پر مبنی تشخیص میں، ایک طالب علم کی کارکردگی کو پہلے سے طے شدہ معیار یا سیکھنے کے معیارات کے ایک مقررہ سیٹ کے خلاف ماپا جاتا ہے۔ اس کا مقصد یہ تعین کرنا ہے کہ آیا طالب علم نے کسی مخصوص مہارت یا تصور میں مہارت حاصل کی ہے، چاہے دوسرے طلباء کی کارکردگی کیسی بھی ہو۔ اس کے برعکس، معیار پر مبنی تشخیص ایک طالب علم کی کارکردگی کا دوسرے طلباء کے نمائندہ گروپ کی کارکردگی سے موازنہ کرتی ہے۔"
  },
  {
    "id": "419",
    "text": "Which of the following is a question for higher order critical thinking in biology? (TSTET 18 June 2025)\nمندرجہ ذیل میں سے کون سا حیاتیات میں اعلیٰ سطحی تنقیدی سوچ کے لیے ایک سوال ہے؟",
    "options": [
      "What are the respiratory organs in cockroach?\nکاکروچ میں تنفسی اعضاء کیا ہیں؟",
      "Where does the photosynthesis take place in plants?\nپودوں میں ضیائی تالیف کہاں ہوتی ہے؟",
      "Where do the fats get digested in humans?\nانسانوں میں چربی کہاں ہضم ہوتی ہے؟",
      "How do you relate the study of ecology to the global challenges of climate change and biodiversity loss?\nآپ ماحولیات کے مطالعہ کو موسمیاتی تبدیلی اور حیاتیاتی تنوع کے نقصان کے عالمی چیلنجوں سے کیسے جوڑتے ہیں؟"
    ],
    "correct": "How do you relate the study of ecology to the global challenges of climate change and biodiversity loss?",
    "explanation": "اعلیٰ سطحی سوچ میں تجزیہ، ترکیب اور تشخیص شامل ہے۔ پہلے تین سوالات نچلی سطح کے ہیں، جن کے لیے صرف مخصوص حقائق کو یاد کرنے کی ضرورت ہوتی ہے۔ آخری سوال طلباء سے اپنے ماحولیات کے علم کی ترکیب کرنے اور اسے پیچیدہ، حقیقی دنیا کے مسائل پر لاگو کرنے کا تقاضا کرتا ہے۔ انہیں ایک سائنسی شعبے اور عالمی چیلنجوں کے درمیان تعلقات کا تجزیہ اور روابط کا جائزہ لینا ہوگا، جو تنقیدی سوچ کی ایک پہچان ہے۔"
  },
  {
    "id": "420",
    "text": "A biology teacher in class IX is dealing with life forms and various classifications of life forms done by scientists. Which of the following best supports her teaching? A) Drawing pictures of various plants and animals on black-board, B) Concept map and Concept web, C) Specimens and models. Choose the correct answer. (TSTET 18 June 2025)\nنویں جماعت میں حیاتیات کی ایک استاد زندگی کی شکلوں اور سائنسدانوں کی طرف سے کی گئی زندگی کی شکلوں کی مختلف درجہ بندیوں سے نمٹ رہی ہے۔ مندرجہ ذیل میں سے کون سا اس کی تدریس کی بہترین حمایت کرتا ہے؟ الف) بلیک بورڈ پر مختلف پودوں اور جانوروں کی تصاویر بنانا، ب) تصور کا نقشہ اور تصور کا ویب، ج) نمونے اور ماڈل۔ صحیح جواب کا انتخاب کریں۔",
    "options": [
      "A only\nصرف الف",
      "B only\nصرف ب",
      "A and B only\nصرف الف اور ب",
      "All A, B, and C\nتمام الف، ب، اور ج"
    ],
    "correct": "All A, B, and C",
    "explanation": "حیاتیاتی درجہ بندی جیسے پیچیدہ موضوع کے لیے ایک موثر تدریسی حکمت عملی متعدد آلات کا استعمال کرے گی۔ تصور کے نقشے اور ویب (ب) درجہ بندی کے تعلقات کو ظاہر کرنے کے لیے بہترین ہیں۔ نمونے اور ماڈل (ج) درجہ بندی کیے جانے والے جانداروں کی ٹھوس، عملی مثالیں فراہم کرتے ہیں۔ بلیک بورڈ پر تصاویر بنانا (الف) اہم خصوصیات پر زور دینے اور پیچیدہ ڈھانچوں کو آسان بنانے میں مدد کر سکتا ہے۔ تینوں طریقوں کا مجموعہ سب سے زیادہ جامع اور معاون سیکھنے کا تجربہ فراہم کرے گا۔"
  },
  {
    "id": 421,
    "text": "Identify the correct statement among the following. (TSTET 30 June 2025)\nمندرجہ ذیل میں سے صحیح بیان کی نشاندہی کریں۔",
    "options": [
      "The force of buoyancy is the reason for an immersed body to appear light.\nاچھال کی قوت ڈوبے ہوئے جسم کے ہلکے دکھائی دینے کی وجہ ہے۔",
      "Relative density has units to measure.\nنسبتی کثافت کی پیمائش کے لیے اکائیاں ہوتی ہیں۔",
      "Heavier body floats.\nبھاری جسم تیرتا ہے۔",
      "Hydraulic jack is an application of Bernoulli's principle.\nہائیڈرولک جیک برنولی کے اصول کا اطلاق ہے۔"
    ],
    "correct": "The force of buoyancy is the reason for an immersed body to appear light.",
    "explanation": "ارشمیدس کے اصول کے مطابق، کسی مائع میں ڈوبے ہوئے جسم پر اوپر کی طرف اچھال کی قوت لگتی ہے۔ یہ قوت اس مائع کے وزن کے برابر ہوتی ہے جسے جسم ہٹاتا ہے۔ یہ اوپر کی قوت کشش ثقل کی نیچے کی قوت کا مقابلہ کرتی ہے، جس سے شے ہلکی دکھائی دیتی ہے۔ دیگر اختیارات غلط ہیں: نسبتی کثافت کثافتوں کا تناسب ہے، لہذا یہ ایک بے اکائی مقدار ہے۔ زیادہ کثافت والے (اپنے حجم کے لحاظ سے بھاری) جسم ڈوب جاتے ہیں، تیرتے نہیں ہیں۔ ہائیڈرولک جیک پاسکل کے اصول پر کام کرتا ہے، برنولی کے اصول پر نہیں۔"
  },
  {
    "id": 422,
    "text": "Identify the 'correct quantum number set' for the outer most electron in Na. (TSTET 30 June 2025)\nسوڈیم (Na) میں سب سے بیرونی الیکٹران کے لیے 'درست کوانٹم نمبر سیٹ' کی نشاندہی کریں۔",
    "options": [
      "n=3, l=0, m_l=0, m_s=+1/2",
      "n=2, l=1, m_l=-1, m_s=+1/2",
      "n=2, l=1, m_l=1, m_s=+1/2",
      "n=3, l=1, m_l=0, m_s=+1/2"
    ],
    "correct": "n=3, l=0, m_l=0, m_s=+1/2",
    "explanation": "سوڈیم (Na) کا ایٹمی نمبر 11 ہے۔ اس کی الیکٹرانک ترتیب 1s² 2s² 2p⁶ 3s¹ ہے۔ سب سے بیرونی الیکٹران 3s آربیٹل میں ہے۔ اس الیکٹران کے لیے: پرنسپل کوانٹم نمبر (n) شیل نمبر سے مطابقت رکھتا ہے، جو 3 ہے۔ ایک s-آربیٹل کے لیے ایزیموتھل کوانٹم نمبر (l) 0 ہے۔ میگنیٹک کوانٹم نمبر (mₗ) صرف 0 ہو سکتا ہے جب l=0 ہو۔ اسپن کوانٹم نمبر (mₛ) +1/2 یا -1/2 ہو سکتا ہے۔ لہذا، سیٹ n=3, l=0, mₗ=0, mₛ=+1/2 ایک درست نمائندگی ہے۔"
  },
  {
    "id": 423,
    "text": "A FALSE statement about refraction of light is. (TSTET 30 June 2025)\nروشنی کے انعطاف کے بارے میں ایک غلط بیان ہے۔",
    "options": [
      "Velocity of light is more in rarer medium.\nہلکے واسطے میں روشنی کی رفتار زیادہ ہوتی ہے۔",
      "Angle of incidence/refraction more in rarer medium.\nہلکے واسطے میں وقوع/انعطاف کا زاویہ زیادہ ہوتا ہے۔",
      "Velocity of light is less in denser medium.\nکثیف واسطے میں روشنی کی رفتار کم ہوتی ہے۔",
      "Angle of incidence/refraction is less in rarer medium.\nہلکے واسطے میں وقوع/انعطاف کا زاویہ کم ہوتا ہے۔"
    ],
    "correct": "Angle of incidence/refraction is less in rarer medium.",
    "explanation": "سنیل کے قانون کے مطابق، جب روشنی دو واسطوں کے درمیان سفر کرتی ہے، تو وہ زاویہ جو وہ عمود کے ساتھ بناتی ہے، ہمیشہ اس واسطے میں بڑا ہوتا ہے جس کا انعطافی اشاریہ کم ہوتا ہے (ہلکا واسطہ)۔ لہذا، یہ بیان کہ ہلکے واسطے میں وقوع/انعطاف کا زاویہ کم ہوتا ہے، غلط ہے۔ زاویہ ہمیشہ ہلکے واسطے میں بڑا ہوتا ہے۔"
  },
  {
    "id": 424,
    "text": "The true statement from the following. (TSTET 30 June 2025)\nمندرجہ ذیل میں سے سچا بیان ہے۔",
    "options": [
      "The loudness of normal conversation is about 20dB.\nعام گفتگو کی بلندی تقریباً 20dB ہوتی ہے۔",
      "The shrillness of sound is amplitude.\nآواز کی تیزی ایمپلی ٹیوڈ ہے۔",
      "Vocal cords close when we speak.\nجب ہم بولتے ہیں تو صوتی ڈوریں بند ہو جاتی ہیں۔",
      "Sound can travel in vacuum.\nآواز خلا میں سفر کر سکتی ہے۔"
    ],
    "correct": "Vocal cords close when we speak.",
    "explanation": "تقریری آوازیں پیدا کرنے کے لیے، پھیپھڑوں سے ہوا کو لیرنکس سے گزارا جاتا ہے، جس کی وجہ سے صوتی ڈوریں (ووکل فولڈز) ایک ساتھ آتی ہیں اور تھرتھراتی ہیں۔ یہ تھرتھراہٹ آواز پیدا کرنے کے لیے ہوا کے بہاؤ کو ماڈیول کرتی ہے۔ دیگر بیانات غلط ہیں: عام گفتگو تقریباً 60 dB ہوتی ہے۔ آواز کی تیزی (پچ) اس کی فریکوئنسی سے طے ہوتی ہے، جبکہ ایمپلی ٹیوڈ اس کی بلندی کا تعین کرتا ہے۔ آواز ایک میکانیکی لہر ہے اور اسے سفر کرنے کے لیے ایک واسطے کی ضرورت ہوتی ہے۔ یہ خلا میں نہیں پھیل سکتی۔"
  },
  {
    "id": 425,
    "text": "VSEPR Theory mainly fails to explain. (TSTET 30 June 2025)\nVSEPR تھیوری بنیادی طور پر وضاحت کرنے میں ناکام رہتی ہے۔",
    "options": [
      "Space occupied by electron pair\nالیکٹران جوڑے کے ذریعے گھیری ہوئی جگہ",
      "Bond angle\nبانڈ کا زاویہ",
      "Strength of bond\nبانڈ کی مضبوطی",
      "Molecular shape\nسالماتی شکل"
    ],
    "correct": "Strength of bond",
    "explanation": "ویلنس شیل الیکٹران پیئر ریپلشن (VSEPR) تھیوری ایک ماڈل ہے جو ویلنس الیکٹران جوڑوں کے درمیان الیکٹرو اسٹاٹک ریپلشن کو کم کرکے مالیکیولز کی 3D جیومیٹری کی پیش گوئی کرنے کے لیے استعمال ہوتا ہے۔ اگرچہ یہ مالیکیولی شکل کی پیش گوئی کرنے اور بانڈ زاویوں کا تخمینہ لگانے میں موثر ہے، لیکن یہ بانڈ کی توانائیوں یا بانڈ کی مضبوطی کے بارے میں کوئی معلومات فراہم نہیں کرتا ہے۔"
  },
  {
    "id": 426,
    "text": "The force of attraction between any two universal objects is INDEPENDENT of. (TSTET 30 June 2025)\nکسی بھی دو کائناتی اشیاء کے درمیان کشش کی قوت کس سے آزاد ہوتی ہے؟",
    "options": [
      "Distance between objects\nاشیاء کے درمیان فاصلہ",
      "Mass of objects\nاشیاء کی کمیت",
      "Universal Gravitation constant\nآفاقی کشش ثقل کا مستقل",
      "Orientation of objects\nاشیاء کی سمت بندی"
    ],
    "correct": "Orientation of objects",
    "explanation": "نیوٹن کا آفاقی کشش ثقل کا قانون، $F = G \\frac{m_1 m_2}{r^2}$، بتاتا ہے کہ کشش ثقل کی قوت دو اشیاء کی کمیتوں ($m_1$, $m_2$)، ان کے مراکز کمیت کے درمیان فاصلے ($r$)، اور آفاقی کشش ثقل کے مستقل ($G$) پر منحصر ہے۔ یہ قانون نقطہ کمیتوں یا کروی طور پر متناسب اجسام کو فرض کرتا ہے، جس سے قوت اشیاء کی سمت بندی سے آزاد ہو جاتی ہے۔"
  },
  {
    "id": 427,
    "text": "A 60W bulb consumes 'x' J of energy when connected to an electric source of 120V. The amount of energy consumed by the same bulb when connected to source of 240V is. (TSTET 30 June 2025)\nایک 60W کا بلب 120V کے برقی منبع سے منسلک ہونے پر 'x' J توانائی استعمال کرتا ہے۔ اسی بلب کو 240V کے منبع سے منسلک کرنے پر استعمال ہونے والی توانائی کی مقدار کیا ہے؟",
    "options": [
      "2x J",
      "x/2 J",
      "4x J",
      "x² J"
    ],
    "correct": "4x J",
    "explanation": "بلب کی مزاحمت (R) مستقل ہے۔ پاور فارمولہ $P = V^2/R$ کا استعمال کرتے ہوئے، ہم مزاحمت معلوم کرتے ہیں: $R = V^2/P = (120)^2 / 60 = 14400 / 60 = 240 \\Omega$۔ اب، 240V سے منسلک ہونے پر نئی پاور ($P'$) کا حساب لگائیں: $P' = (240)^2 / 240 = 240W$۔ چونکہ اصل پاور 60W تھی، نئی پاور 4 گنا زیادہ ہے ($240W / 60W = 4$)۔ چونکہ توانائی = پاور × وقت، اگر وقت وہی ہے، تو استعمال ہونے والی نئی توانائی اصل توانائی کا 4 گنا ہوگی، جو کہ 4x J ہے۔"
  },
  {
    "id": 428,
    "text": "A coin is kept under a glass slab of refractive index 1.52. It appears to be shifted vertically by 0.7cm. Then the thickness of the glass slab is. (TSTET 30 June 2025)\nایک سکہ 1.52 کے انعطافی اشاریہ والے شیشے کے سلیب کے نیچے رکھا گیا ہے۔ یہ عمودی طور پر 0.7 سینٹی میٹر منتقل ہوا دکھائی دیتا ہے۔ تو شیشے کے سلیب کی موٹائی کیا ہے؟",
    "options": [
      "2.0 cm",
      "1.5 cm",
      "2.5 cm",
      "1.0 cm"
    ],
    "correct": "2.0 cm",
    "explanation": "عمودی منتقلی (s) کا فارمولا $s = t \\left(1 - \\frac{1}{n}\\right)$ ہے، جہاں t حقیقی موٹائی ہے اور n انعطافی اشاریہ ہے۔ ہمیں s = 0.7 سینٹی میٹر اور n = 1.52 دیا گیا ہے۔ t کے لیے فارمولے کو دوبارہ ترتیب دینے پر: $t = \\frac{s}{\\left(1 - \\frac{1}{n}\\right)} = \\frac{0.7}{\\left(1 - \\frac{1}{1.52}\\right)} = \\frac{0.7}{\\left(\\frac{1.52 - 1}{1.52}\\right)} = \\frac{0.7 \\times 1.52}{0.52} \\approx 2.046$ سینٹی میٹر۔ قریب ترین جواب 2.0 سینٹی میٹر ہے۔"
  },
  {
    "id": 429,
    "text": "Match the following. (TSTET 30 June 2025)\nSet I: A) Nylon, B) Rayon, C) Acrylic, D) Polyester\nSet II: i) Wrinkle free, ii) Diapers, iii) Fishing net, iv) Carpet\n\nمندرجہ ذیل کو ملائیں۔\nسیٹ اول: الف) نائیلون، ب) ریون، ج) ایکریلک، د) پالئیےسٹر\nسیٹ دوم: i) شکنوں سے پاک، ii) ڈائپرز، iii) مچھلی پکڑنے کا جال، iv) قالین",
    "options": [
      "A-iii, B-ii, C-iv, D-i",
      "A-iii, B-ii, C-i, D-iv",
      "A-iii, B-iv, C-i, D-ii",
      "A-ii, B-i, C-iv, D-iii"
    ],
    "correct": "A-iii, B-ii, C-iv, D-i",
    "explanation": "پولیمرز کو ان کی عام ایپلی کیشنز یا خصوصیات کے ساتھ ملانا: الف) نائیلون اپنی اعلی طاقت اور پانی کی مزاحمت کے لیے جانا جاتا ہے، جو اسے مچھلی پکڑنے کے جالوں کے لیے مثالی بناتا ہے۔ ب) ریون انتہائی جاذب ہے، یہ خاصیت ڈائپرز میں مفید ہے۔ ج) ایکریلک ایک مصنوعی ریشہ ہے جو قالینوں میں اون کا عام متبادل ہے۔ د) پالئیےسٹر اپنی شکنوں سے پاک ہونے کی خاصیت کی وجہ سے وسیع پیمانے پر جانا جاتا ہے، جو اسے کپڑوں کے لیے مقبول بناتا ہے۔"
  },
  {
    "id": 430,
    "text": "The true statement among the following. (TSTET 30 June 2025)\nمندرجہ ذیل میں سے سچا بیان ہے۔",
    "options": [
      "Smelting carried out in Reverberatory furnace.\nپگھلانے کا عمل ریوربریٹری بھٹی میں کیا جاتا ہے۔",
      "Roasting carried out in absence of air.\nبھوننے کا عمل ہوا کی عدم موجودگی میں کیا جاتا ہے۔",
      "CaO is obtained by adopting Calcination.\nCaO کیلسی نیشن کو اپنا کر حاصل کیا جاتا ہے۔",
      "Distillation is a method of purification of high boiling metals.\nکشید کاری زیادہ ابلتے ہوئے دھاتوں کی تطہیر کا ایک طریقہ ہے۔"
    ],
    "correct": "Smelting carried out in Reverberatory furnace.",
    "explanation": "پگھلانا (Smelting) ایک دھات کاری کا عمل ہے جو دھات کو اس کی کچ دھات سے نکالنے کے لیے کیا جاتا ہے، اور یہ اکثر ریوربریٹری بھٹی یا بلاسٹ فرنس میں کیا جاتا ہے۔ دیگر بیانات غلط ہیں: بھوننا (Roasting) کچ دھات کو اضافی ہوا کی موجودگی میں گرم کرنا ہے۔ اگرچہ CaO کو کیلسی نیشن (CaCO3 کی) کے ذریعے حاصل کیا جا سکتا ہے، لیکن یہ بیان پہلے بیان سے کم عالمی طور پر سچ ہے۔ کشید کاری (Distillation) کم ابلتے ہوئے دھاتوں، جیسے زنک اور مرکری، کے لیے استعمال ہونے والا تطہیر کا طریقہ ہے، نہ کہ زیادہ ابلتے ہوئے دھاتوں کے لیے۔"
  },
  {
    "id": 431,
    "text": "The substance, which is NOT treated as an electric conductor among the following. (TSTET 30 June 2025)\nوہ مادہ، جسے مندرجہ ذیل میں سے برقی موصل نہیں سمجھا جاتا۔",
    "options": [
      "Mercury\nپارہ",
      "Bismuth\nبسمتھ",
      "Graphite\nگریفائٹ",
      "Sodium\nسوڈیم"
    ],
    "correct": "Bismuth",
    "explanation": "پارہ، گریفائٹ، اور سوڈیم سبھی اچھے برقی موصل ہیں۔ بسمتھ، اگرچہ ایک دھات ہے، بجلی کا ایک ناقص موصل ہے۔ اس کی دھات کے لیے بہت زیادہ برقی مزاحمت ہے اور اسے کبھی کبھی نیم دھات کے طور پر درجہ بندی کیا جاتا ہے۔ دیے گئے انتخاب میں سے، یہ سب سے ناقص موصل ہے۔"
  },
  {
    "id": 432,
    "text": "The coefficient of O₂ in the balanced chemical equation of burning Propane. (TSTET 30 June 2025)\nپروپین کے جلنے کی متوازن کیمیائی مساوات میں O₂ کا عددی سر کیا ہے؟",
    "options": [
      "1",
      "5",
      "3",
      "4"
    ],
    "correct": "5",
    "explanation": "پروپین (C₃H₈) کے دہن میں اسے آکسیجن (O₂) کے ساتھ رد عمل میں لانا شامل ہے تاکہ کاربن ڈائی آکسائیڈ (CO₂) اور پانی (H₂O) پیدا ہو۔ غیر متوازن مساوات C₃H₈ + O₂ ⟶ CO₂ + H₂O ہے۔ اسے متوازن کرنے کے لیے، ہم حاصل کرتے ہیں: C₃H₈ + 5O₂ ⟶ 3CO₂ + 4H₂O۔ اس طرح، آکسیجن (O₂) کے لیے سٹوکیومیٹرک عددی سر 5 ہے۔"
  },
  {
    "id": 433,
    "text": "In plants, this part of a flower develops into a fruit after fertilization. (TSTET 30 June 2025)\nپودوں میں، پھول کا یہ حصہ فرٹیلائزیشن کے بعد پھل میں تبدیل ہو جاتا ہے۔",
    "options": [
      "Embryo\nجنین",
      "Embryo Sac\nجنین کی تھیلی",
      "Ovary\nبیضہ دانی",
      "Ovule\nبیضہ"
    ],
    "correct": "Ovary",
    "explanation": "پھولدار پودوں میں، کامیاب فرٹیلائزیشن کے بعد، بیضہ دانی پختہ ہو کر پھل میں تبدیل ہو جاتی ہے۔ بیضہ دانی کے اندر موجود بیضے بیجوں میں تبدیل ہو جاتے ہیں۔ پھل کا بنیادی کردار بیجوں کی حفاظت کرنا اور ان کے پھیلاؤ میں مدد کرنا ہے۔"
  },
  {
    "id": 434,
    "text": "Identify the cell organelles that are found in both Prokaryotic and Eukaryotic cells. (TSTET 30 June 2025)\nان خلیاتی عضویوں کی نشاندہی کریں جو پروکاریوٹک اور یوکاریوٹک دونوں خلیوں میں پائے جاتے ہیں۔",
    "options": [
      "Ribosomes\nرائبوسومز",
      "Mitochondria\nمائٹوکونڈریا",
      "Plastids\nپلاسٹڈز",
      "Endoplasmic Reticulum\nاینڈوپلازمک ریٹیکولم"
    ],
    "correct": "Ribosomes",
    "explanation": "رائبوسومز پروٹین کی ترکیب کی جگہیں ہیں اور زندگی کی تمام شکلوں کے لیے ضروری ہیں۔ یہ پروکاریوٹک اور یوکاریوٹک دونوں خلیوں میں پائے جاتے ہیں۔ مائٹوکونڈریا، پلاسٹڈز، اور اینڈوپلازمک ریٹیکولم جھلی سے منسلک عضویے ہیں جو یوکاریوٹک خلیوں کی خصوصیت ہیں اور پروکاریوٹک خلیوں میں غائب ہوتے ہیں۔"
  },
  {
    "id": 435,
    "text": "Fixed joints are present in this part of human body. (TSTET 30 June 2025)\nانسانی جسم کے اس حصے میں غیر متحرک جوڑ موجود ہوتے ہیں۔",
    "options": [
      "Pectoral girdle\nپیکٹورل گرڈل",
      "Pelvic girdle\nپیلوس گرڈل",
      "Skull\nکھوپڑی",
      "Backbone\nریڑھ کی ہڈی"
    ],
    "correct": "Skull",
    "explanation": "غیر متحرک جوڑ، یا سنارتھروسس، غیر متحرک جوڑ ہیں جہاں ہڈیاں ایک ساتھ جڑی ہوتی ہیں۔ انسانی جسم میں اس کی بہترین مثال کھوپڑی (کرینیم) کی ہڈیوں کے درمیان سیون ہیں، جو دماغ کی حفاظت کرتی ہیں۔ دیگر اختیارات میں ایسی ہڈیاں شامل ہیں جو جوڑوں کے ذریعے جڑی ہوتی ہیں جو کچھ حد تک حرکت کی اجازت دیتی ہیں۔"
  },
  {
    "id": 436,
    "text": "Read the following sentences and identify the correct answer. A) The plants with tap root system have leaves with parallel venation. B) The plants with fibrous roots have leaves with reticulate venation. (TSTET 30 June 2025)\nمندرجہ ذیل جملے پڑھیں اور صحیح جواب کی نشاندہی کریں۔ الف) ٹیپ روٹ سسٹم والے پودوں کے پتوں میں متوازی وینیشن ہوتی ہے۔ ب) ریشہ دار جڑوں والے پودوں کے پتوں میں جالی دار وینیشن ہوتی ہے۔",
    "options": [
      "Sentence-A is correct, Sentence-B is incorrect\nجملہ-الف صحیح ہے، جملہ-ب غلط ہے",
      "Sentence-A is incorrect, Sentence-B is correct\nجملہ-الف غلط ہے، جملہ-ب صحیح ہے",
      "Both the sentences are correct\nدونوں جملے صحیح ہیں",
      "Both the sentences are incorrect\nدونوں جملے غلط ہیں"
    ],
    "correct": "Both the sentences are incorrect",
    "explanation": "نباتیات میں، جڑ کی قسم اور پتیوں کی وینیشن کے درمیان ایک عمومی تعلق ہے۔ ٹیپ روٹ سسٹم والے پودوں (جو ڈائیکاٹس میں عام ہیں) میں عام طور پر جالی دار (نیٹ کی طرح) وینیشن والے پتے ہوتے ہیں۔ اس کے برعکس، ریشہ دار جڑوں والے پودوں (جو مونوکاٹس میں عام ہیں) میں عام طور پر متوازی وینیشن والے پتے ہوتے ہیں۔ سوال میں دیے گئے دونوں بیانات مخالف، غلط جوڑی کو بیان کرتے ہیں۔"
  },
  {
    "id": 437,
    "text": "Identify the process of cutting the Woolen fleece of a sheep from the following. (TSTET 30 June 2025)\nمندرجہ ذیل میں سے بھیڑ کی اونی اون کاٹنے کے عمل کی نشاندہی کریں۔",
    "options": [
      "Scouring\nدھلائی",
      "Shearing\nاون کترائی",
      "Stifling\nدم گھٹنا",
      "Sorting\nچھانٹی"
    ],
    "correct": "Shearing",
    "explanation": "اون کترائی (Shearing) بھیڑ کی اون کاٹنے کے عمل کے لیے مخصوص اصطلاح ہے۔ دھلائی (Scouring) اون کو دھونے کو کہتے ہیں، اور چھانٹی (Sorting) اون کو معیار کے مطابق درجہ بندی کرنے کا عمل ہے۔"
  },
  {
    "id": 438,
    "text": "Identify the plant that stores food materials in stem. (TSTET 30 June 2025)\nاس پودے کی نشاندہی کریں جو تنے میں غذائی مواد ذخیرہ کرتا ہے۔",
    "options": [
      "Potato\nآلو",
      "Sweet potato\nشکرقندی",
      "Carrot\nگاجر",
      "Radish\nمولی"
    ],
    "correct": "Potato",
    "explanation": "آلو ایک ٹیوبر ہے، جو ایک قسم کا تبدیل شدہ زیر زمین تنا ہے جو پودے کے لیے خوراک کے طور پر نشاستہ ذخیرہ کرتا ہے۔ اس کے برعکس، شکرقندی، گاجر اور مولی سب تبدیل شدہ جڑیں (ٹیپ روٹس) ہیں جو خوراک ذخیرہ کرتی ہیں۔"
  },
  {
    "id": 439,
    "text": "Identify the phyla that are known for having an open circulatory system. A) Annelida B) Arthropoda C) Mollusca D) Echinodermata (TSTET 30 June 2025)\nان فائلا کی نشاندہی کریں جو کھلے گردشی نظام کے لیے جانے جاتے ہیں۔ الف) اینیلیڈا ب) آرتھروپوڈا ج) مولسکا د) ایکائینوڈرمیٹا",
    "options": [
      "A & B only\nصرف الف اور ب",
      "B & C only\nصرف ب اور ج",
      "A & D only\nصرف الف اور د",
      "A, B & D only\nصرف الف، ب اور د"
    ],
    "correct": "B & C only",
    "explanation": "آرتھروپوڈز (مثلاً، کیڑے، مکڑیاں) اور زیادہ تر مولسکس (مثلاً، گھونگھے، کلیم) میں کھلا گردشی نظام ہوتا ہے، جہاں خون (ہیمولمف) ہمیشہ نالیوں میں بند نہیں ہوتا اور جسم کی گہا میں آزادانہ طور پر بہتا ہے۔ اینیلیڈز (مثلاً، کینچوے) میں بند گردشی نظام ہوتا ہے۔ ایکائینوڈرمز میں ایک منفرد آبی واسکولر نظام ہوتا ہے۔"
  },
  {
    "id": 440,
    "text": "Diatom is a/an. (TSTET 30 June 2025)\nڈائیٹم ایک ہے۔",
    "options": [
      "Protozoan\nپروٹوزوا",
      "Fungus\nفنگس",
      "Bacterium\nبیکٹیریم",
      "Alga\nالگا"
    ],
    "correct": "Alga",
    "explanation": "ڈائیٹمز یک خلوی ضیائی تالیفی الجی کا ایک بڑا گروپ ہیں جو سمندروں، آبی گزرگاہوں اور مٹی میں پائے جاتے ہیں۔ یہ فائٹوپلانکٹن کی ایک قسم ہیں جن کی خصوصیت ان کی منفرد خلیاتی دیواریں ہیں جو سلیکا سے بنی ہوتی ہیں جنہیں فرسٹیولز کہتے ہیں۔"
  },
  {
    "id": 441,
    "text": "Identify the hormone that is secreted in both male and female humans. (TSTET 30 June 2025)\nاس ہارمون کی شناخت کریں جو مرد اور عورت دونوں انسانوں میں خارج ہوتا ہے۔",
    "options": [
      "Follicle-stimulating hormone\nفولیکل-اسٹیمولیٹنگ ہارمون",
      "Testosterone\nٹیسٹوسٹیرون",
      "Oestrogen\nایسٹروجن",
      "Progesterone\nپروجیسٹرون"
    ],
    "correct": "Follicle-stimulating hormone",
    "explanation": "فولیکل-اسٹیمولیٹنگ ہارمون (FSH) ایک گوناڈوٹروپن ہے جو مرد اور عورت دونوں میں پٹیوٹری غدود کے ذریعے ترکیب اور خارج کیا جاتا ہے۔ یہ تولیدی عمل کو منظم کرنے میں ایک اہم کردار ادا کرتا ہے۔ خواتین میں، یہ بیضہ دانی کے فولیکلز کی پختگی کو متحرک کرتا ہے، جبکہ مردوں میں، یہ اسپرمیٹوجینیسیس (اسپرم کی پیداوار) کے لیے ضروری ہے۔ ٹیسٹوسٹیرون، ایسٹروجن، اور پروجیسٹرون جنسی ہارمونز ہیں جو بنیادی طور پر مردوں یا عورتوں سے وابستہ ہیں، حالانکہ یہ مخالف جنس میں بھی کم مقدار میں موجود ہوتے ہیں۔"
  },
  {
    "id": 442,
    "text": "Which of the following gas in the normal atmosphere is in much smaller quantities? (TSTET 30 June 2025)\nعام ماحول میں مندرجہ ذیل میں سے کون سی گیس بہت کم مقدار میں ہے؟",
    "options": [
      "Ar",
      "O₂",
      "CO₂",
      "N₂"
    ],
    "correct": "CO₂",
    "explanation": "زمین کے ماحول کی ترکیب تقریباً 78% نائٹروجن (N₂)، 21% آکسیجن (O₂)، اور 0.93% آرگن (Ar) پر مشتمل ہے۔ کاربن ڈائی آکسائیڈ (CO₂) ایک ٹریس گیس ہے، جو ماحول کا صرف 0.04% حصہ بناتی ہے۔ لہذا، فراہم کردہ اختیارات میں سے، CO₂ سب سے کم مقدار میں موجود ہے۔"
  },
  {
    "id": 443,
    "text": "Which of the following animal is listed in endangered list? (TSTET 30 June 2025)\nمندرجہ ذیل میں سے کون سا جانور خطرے سے دوچار فہرست میں شامل ہے؟",
    "options": [
      "Asiatic lion\nایشیائی شیر",
      "Kangaroo\nکینگرو",
      "Desert fox\nصحرائی لومڑی",
      "Pigeon\nکبوتر"
    ],
    "correct": "Asiatic lion",
    "explanation": "ایشیائی شیر (Panthera leo leo) IUCN کی سرخ فہرست میں خطرے سے دوچار نوع کے طور پر درج ہے۔ اس کی آبادی ہندوستان کے گیر نیشنل پارک میں ایک ہی مقام تک محدود ہے۔ دیگر درج جانوروں کو عام طور پر 'کم تشویش' والی انواع سمجھا جاتا ہے اور وہ خطرے سے دوچار نہیں ہیں۔"
  },
  {
    "id": 444,
    "text": "Tracheal Respiratory system is present in this organism. (TSTET 30 June 2025)\nاس جاندار میں ٹریکیل تنفسی نظام موجود ہے۔",
    "options": [
      "Fish\nمچھلی",
      "Frog\nمینڈک",
      "Earthworm\nکेंचुआ",
      "Cockroach\nلال بیگ"
    ],
    "correct": "Cockroach",
    "explanation": "کیڑے مکوڑے، جیسے کہ لال بیگ، میں سانس لینے کے لیے ایک ٹریکیل نظام ہوتا ہے۔ یہ ہوا سے بھری نالیوں (tracheae) کا ایک نیٹ ورک ہے جو باہر کی طرف اسپیراکلز نامی سوراخوں کے ذریعے کھلتا ہے اور براہ راست جسم کے بافتوں تک آکسیجن پہنچاتا ہے۔ مچھلیاں گلپھڑے استعمال کرتی ہیں، بالغ مینڈک پھیپھڑے اور اپنی جلد کا استعمال کرتے ہیں، اور کینچوے اپنی نم جلد کے ذریعے سانس لیتے ہیں۔"
  },
  {
    "id": 445,
    "text": "Ravi, a Physical Science teacher, applied alcohol on a student's hand and asked him to observe and describe the sensation. He repeated the process with spirit and petrol. The student reported a cooling effect each time. Based on this, identify what teaching method the teacher is using. (TSTET 30 June 2025)\nروی، ایک فزیکل سائنس کے استاد نے، ایک طالب علم کے ہاتھ پر الکحل لگائی اور اسے اس احساس کا مشاہدہ کرنے اور بیان کرنے کو کہا۔ اس نے یہی عمل اسپرٹ اور پیٹرول کے ساتھ دہرایا۔ طالب علم نے ہر بار ٹھنڈک کے اثر کی اطلاع دی۔ اس کی بنیاد پر، شناخت کریں کہ استاد کون سا تدریسی طریقہ استعمال کر رہا ہے۔",
    "options": [
      "Deductive method\nاستخراجی طریقہ",
      "Inductive method\nاستقرائی طریقہ",
      "Lecture method\nلیکچر کا طریقہ",
      "Heuristic method\nہیورسٹک طریقہ"
    ],
    "correct": "Inductive method",
    "explanation": "استاد استقرائی طریقہ استعمال کر رہا ہے۔ اس تدریسی نقطہ نظر میں مخصوص مثالیں یا مشاہدات پیش کرنا (الکحل، اسپرٹ اور پیٹرول کا ٹھنڈک کا اثر) اور طلباء کو ان سے ایک عمومی نتیجہ یا اصول اخذ کرنے کی رہنمائی کرنا شامل ہے (غیر مستحکم مائعات بخارات کی وجہ سے ٹھنڈک کا سبب بنتے ہیں)۔ یہ استخراجی طریقہ کے برعکس ہے، جو ایک عمومی اصول سے شروع ہوتا ہے اور اسے مخصوص معاملات پر لاگو کرتا ہے۔"
  },
  {
    "id": 446,
    "text": "Which of the following learning experiences is NOT categorized in Edgar Dale's cone of experience? (TSTET 30 June 2025)\nایڈگر ڈیل کے تجربے کے کون میں مندرجہ ذیل میں سے کون سا سیکھنے کا تجربہ درجہ بند نہیں ہے؟",
    "options": [
      "Direct purposeful experience\nبراہ راست بامقصد تجربہ",
      "Contrived experience\nمنصوبہ بند تجربہ",
      "Dramatized experience\nڈرامائی تجربہ",
      "Vicarious experience\nبالواسطہ تجربہ"
    ],
    "correct": "Vicarious experience",
    "explanation": "ایڈگر ڈیل کا کون آف ایکسپریئنس ایک ماڈل ہے جو سیکھنے کے تجربات کو ان کی ٹھوسیت کی بنیاد پر مختلف سطحوں میں درجہ بندی کرتا ہے۔ 'براہ راست بامقصد تجربہ'، 'منصوبہ بند تجربہ'، اور 'ڈرامائی تجربہ' کون پر مخصوص، الگ سطحیں ہیں۔ 'بالواسطہ تجربہ' دوسروں کے ذریعے بالواسطہ سیکھنے کے لیے ایک وسیع نفسیاتی اصطلاح ہے، جو کون کی کئی سطحوں کا احاطہ کرتی ہے (جیسے مظاہرہ یا فلم دیکھنا) لیکن یہ ڈیل کے فریم ورک کے اندر خود ایک مخصوص زمرہ نہیں ہے۔"
  },
  {
    "id": 447,
    "text": "During a laboratory experiment, a student accidentally splashes sodium hydroxide solution into his eye. As a science teacher, which of the following would you choose to wash the eye as the most appropriate first-aid treatment for this eye injury? (TSTET 30 June 2025)\nلیبارٹری کے ایک تجربے کے دوران، ایک طالب علم غلطی سے اپنی آنکھ میں سوڈیم ہائیڈرو آکسائیڈ کا محلول چھڑک لیتا ہے۔ ایک سائنس ٹیچر کے طور پر، آپ آنکھ کی اس چوٹ کے لیے سب سے مناسب ابتدائی طبی امداد کے طور پر آنکھ دھونے کے لیے مندرجہ ذیل میں سے کس کا انتخاب کریں گے؟",
    "options": [
      "A large amount of water\nپانی کی بڑی مقدار",
      "A dilute solution of boric acid\nبورک ایسڈ کا ہلکا محلول",
      "A dilute solution of sodium bicarbonate\nسوڈیم بائی کاربونیٹ کا ہلکا محلول",
      "A dilute solution of Acetic acid\nایسیٹک ایسڈ کا ہلکا محلول"
    ],
    "correct": "A large amount of water",
    "explanation": "آنکھ میں کیمیائی چھینٹے، خاص طور پر سوڈیم ہائیڈرو آکسائیڈ جیسے corrosive بیس کے ساتھ، کے لیے فوری اور سب سے اہم ابتدائی طبی امداد یہ ہے کہ آنکھ کو کم از کم 15-20 منٹ تک صاف پانی کی ایک بڑی، مسلسل دھار سے دھویا جائے۔ یہ کیمیکل کو پتلا کرتا ہے اور ہٹا دیتا ہے۔ آنکھ میں ایک مضبوط بیس کو کمزور تیزاب سے بے اثر کرنے کی کوشش کرنا خطرناک ہے کیونکہ نیوٹرلائزیشن کے رد عمل سے پیدا ہونے والی حرارت مزید تھرمل جلن کا سبب بن سکتی ہے۔"
  },
  {
    "id": 448,
    "text": "Which of the following statement is TRUE regarding the scientific method? (TSTET 30 June 2025)\nسائنسی طریقہ کار کے بارے میں مندرجہ ذیل میں سے کون سا بیان درست ہے؟",
    "options": [
      "Hypotheses can be proved\nمفروضے ثابت کیے جا سکتے ہیں",
      "The scientific method is a linear process\nسائنسی طریقہ ایک خطی عمل ہے",
      "Observation is the first step in the scientific method\nمشاہدہ سائنسی طریقہ کار کا پہلا قدم ہے",
      "Conclusions are final and cannot be revised\nنتائج حتمی ہیں اور ان پر نظر ثانی نہیں کی جا سکتی"
    ],
    "correct": "Observation is the first step in the scientific method",
    "explanation": "سائنسی طریقہ کار تحقیق کے لیے ایک منظم عمل ہے جو عام طور پر قدرتی دنیا میں کسی مظہر کے مشاہدے سے شروع ہوتا ہے، جس سے ایک سوال پیدا ہوتا ہے۔ دوسرے بیانات غلط ہیں۔ مفروضوں کی بھرپور حمایت کی جا سکتی ہے لیکن سائنس میں انہیں کبھی بھی حتمی طور پر 'ثابت شدہ' نہیں سمجھا جاتا۔ یہ عمل سخت خطی ہونے کے بجائے تکراری اور چکری ہے۔ سائنسی نتائج کو ہمیشہ عارضی سمجھا جاتا ہے اور نئے شواہد کی بنیاد پر ان پر نظر ثانی کی جا سکتی ہے۔"
  },
  {
    "id": 449,
    "text": "A science teacher wants to assess students' ability to design an experiment to test a hypothesis. Which of the following assessment methods would be most appropriate? (TSTET 30 June 2025)\nایک سائنس ٹیچر طلباء کی ایک مفروضے کی جانچ کے لیے تجربہ ڈیزائن کرنے کی صلاحیت کا اندازہ لگانا چاہتا ہے۔ مندرجہ ذیل میں سے کون سا تشخیصی طریقہ سب سے مناسب ہوگا؟",
    "options": [
      "Multiple-choice test\nکثیر الانتخابی ٹیسٹ",
      "Essay question\nمضمون کا سوال",
      "Performance task\nکارکردگی کا کام",
      "True/False quiz\nصحیح/غلط کوئز"
    ],
    "correct": "Performance task",
    "explanation": "ایک طالب علم کی پیچیدہ مہارت جیسے تجربہ ڈیزائن کرنے کی صلاحیت کا اندازہ لگانے کے لیے، کارکردگی کا کام سب سے موزوں طریقہ ہے۔ اس کے لیے طالب علم کو حقیقت میں ایک تجرباتی ڈیزائن بنانا ہوتا ہے، جس سے متغیرات، کنٹرولز اور طریقہ کار کے بارے میں اس کی سمجھ کا مظاہرہ ہوتا ہے۔ کثیر الانتخابی اور صحیح/غلط سوالات حقائق کو یاد کرنے کی جانچ کرتے ہیں، جبکہ ایک مضمون اس عمل کو بیان کر سکتا ہے لیکن مہارت کے عملی اطلاق کو نہیں دکھاتا۔"
  },
  {
    "id": 450,
    "text": "The main purpose of a science fair project is to. (TSTET 30 June 2025)\nسائنس میلے کے منصوبے کا بنیادی مقصد یہ ہے۔",
    "options": [
      "Win a prize\nانعام جیتنا",
      "Demonstrate a known scientific principle\nایک معروف سائنسی اصول کا مظاہرہ کرنا",
      "Engage in the process of scientific inquiry\nسائنسی تحقیق کے عمل میں مشغول ہونا",
      "Build a visually appealing display\nایک بصری طور پر دلکش ڈسپلے بنانا"
    ],
    "correct": "Engage in the process of scientific inquiry",
    "explanation": "سائنس میلے کا بنیادی تعلیمی مقصد طلباء کو سائنسی تحقیق کے عمل میں مشغول ہونے کا عملی موقع فراہم کرنا ہے۔ اس میں ایک مسئلے کی نشاندہی کرنا، ایک مفروضہ تشکیل دینا، ایک تجربہ ڈیزائن کرنا اور اسے انجام دینا، ڈیٹا کا تجزیہ کرنا، اور نتائج سے آگاہ کرنا شامل ہے۔ جبکہ دیگر اختیارات ایک پروجیکٹ کے اجزاء ہو سکتے ہیں، وہ سائنسی طریقہ کار کا تجربہ کرنے کے بنیادی مقصد کے ثانوی ہیں۔"
  },
  {
    "id": 451,
    "text": "Ramesh, a student of class IX, knows the mass and volume of an object. Which of the following quantities can he calculate? (TSTET 11 Jan 2025)\nرمیش، نویں جماعت کا ایک طالب علم، ایک چیز کی کمیت اور حجم جانتا ہے۔ وہ مندرجہ ذیل میں سے کون سی مقدار کا حساب لگا سکتا ہے؟",
    "options": [
      "Density of the object\nچیز کی کثافت",
      "Kinetic energy of the object\nچیز کی حرکی توانائی",
      "Acceleration of the object\nچیز کا اسراع",
      "Pressure exerted by the object on the ground\nچیز کی طرف سے زمین پر ڈالا جانے والا دباؤ"
    ],
    "correct": "Density of the object",
    "explanation": "کثافت ایک طبعی خاصیت ہے جس کی تعریف فی اکائی حجم کمیت کے طور پر کی جاتی ہے۔ کثافت ($ \rho $) کا فارمولا $ \rho = \frac{m}{V} $ ہے، جہاں 'm' کمیت ہے اور 'V' حجم ہے۔ چونکہ رمیش کمیت اور حجم دونوں جانتا ہے، وہ براہ راست چیز کی کثافت کا حساب لگا سکتا ہے۔ حرکی توانائی ($ KE = \frac{1}{2}mv^2 $) کا حساب لگانے کے لیے، رفتار کی ضرورت ہوتی ہے۔ اسراع کا حساب لگانے کے لیے، وقت کے ساتھ رفتار میں تبدیلی کی ضرورت ہوتی ہے۔ دباؤ کا حساب لگانے کے لیے، لگائی گئی قوت اور اس رقبے کی ضرورت ہوتی ہے جس پر یہ لاگو ہوتی ہے۔"
  },
  {
    "id": 452,
    "text": "If the position of the Moon is at \"1\" in the lunar cycle (assuming \"1\" refers to a specific phase or position of the Moon), which of the following is true? (TSTET 11 Jan 2025)\nاگر چاند کی پوزیشن قمری چکر میں \"1\" پر ہے (یہ فرض کرتے ہوئے کہ \"1\" چاند کے ایک مخصوص مرحلے یا پوزیشن کی طرف اشارہ کرتا ہے)، تو مندرجہ ذیل میں سے کون سا درست ہے؟",
    "options": [
      "The Moon is in the new moon phase of Lunar month, where it is positioned between the Earth and the Sun.\nچاند قمری مہینے کے نئے چاند کے مرحلے میں ہے، جہاں یہ زمین اور سورج کے درمیان واقع ہے۔",
      "The Moon is in the full moon phase of the Lunar month, where it is opposite to the Sun and the Earth between them.\nچاند قمری مہینے کے پورے چاند کے مرحلے میں ہے، جہاں یہ سورج کے مخالف ہے اور زمین ان کے درمیان ہے۔",
      "The Moon is in the first quarter phase of the Lunar month, where half of the Moon's visible surface is illuminated.\nچاند قمری مہینے کے پہلے چوتھائی مرحلے میں ہے، جہاں چاند کی نظر آنے والی سطح کا نصف حصہ روشن ہوتا ہے۔",
      "The Moon is in its last quarter phase of the Lunar month, where half of its visible surface is illuminated, but the light comes from the opposite side compared to the first quarter.\nچاند قمری مہینے کے آخری چوتھائی مرحلے میں ہے، جہاں اس کی نظر آنے والی سطح کا نصف حصہ روشن ہوتا ہے، لیکن روشنی پہلی چوتھائی کے مقابلے میں مخالف سمت سے آتی ہے۔"
    ],
    "correct": "The Moon is in the new moon phase of Lunar month, where it is positioned between the Earth and the Sun.",
    "explanation": "قمری چکر عام طور پر نئے چاند کے مرحلے سے شروع ہوتا ہے۔ نئے چاند کے دوران، چاند زمین کے اسی طرف واقع ہوتا ہے جس طرف سورج ہوتا ہے۔ اس کا روشن حصہ زمین سے دور ہوتا ہے، اس لیے یہ رات کے آسمان میں نظر نہیں آتا۔ یہ ترتیب چاند کو زمین اور سورج کے درمیان رکھتی ہے۔"
  },
  {
    "id": 453,
    "text": "A ray of light strikes a plane mirror at an angle of $30^{\\circ}$ with respect to the normal. If the angle of incidence is increased to $45^{\\circ}$ which of the following statements is correct regarding the reflected ray? (TSTET 11 Jan 2025)\nروشنی کی ایک شعاع ایک ہموار آئینے پر نارمل کے حوالے سے $30^{\\circ}$ کے زاویے پر ٹکراتی ہے۔ اگر زاویہ وقوع کو $45^{\\circ}$ تک بڑھا دیا جائے تو منعکس شعاع کے بارے میں مندرجہ ذیل میں سے کون سا بیان درست ہے؟",
    "options": [
      "The reflected ray will move away from the normal and its angle of reflection will remain at $30^{\\circ}$.\nمنعکس شعاع نارمل سے دور ہو جائے گی اور اس کا زاویہ انعکاس $30^{\\circ}$ پر رہے گا۔",
      "The reflected ray will move closer to the normal and its angle of reflection will increase.\nمنعکس شعاع نارمل کے قریب آ جائے گی اور اس کا زاویہ انعکاس بڑھ جائے گا۔",
      "The reflected ray will move closer to the normal and its angle of reflection will always be half the angle of incidence.\nمنعکس شعاع نارمل کے قریب آ جائے گی اور اس کا زاویہ انعکاس ہمیشہ زاویہ وقوع کا نصف ہوگا۔",
      "The reflected ray will move away from the normal and its angle of reflection will be equal to the angle of incidence.\nمنعکس شعاع نارمل سے دور ہو جائے گی اور اس کا زاویہ انعکاس زاویہ وقوع کے برابر ہوگا۔"
    ],
    "correct": "The reflected ray will move away from the normal and its angle of reflection will be equal to the angle of incidence.",
    "explanation": "انعکاس کا قانون دو اصول بیان کرتا ہے: 1) واقع شعاع، منعکس شعاع، اور سطح کا نارمل سب ایک ہی مستوی میں ہوتے ہیں۔ 2) زاویہ وقوع ($ \theta_i $) زاویہ انعکاس ($ \theta_r $) کے برابر ہوتا ہے۔ لہذا، اگر زاویہ وقوع کو $45^{\\circ}$ تک بڑھا دیا جائے، تو زاویہ انعکاس بھی $45^{\\circ}$ ہو جانا چاہیے۔ زاویے میں اضافے کا مطلب ہے کہ شعاع نارمل سے مزید دور ہو جاتی ہے۔"
  },
  {
    "id": 454,
    "text": "Read the following statements and choose the correct answer. Statement I: A vibrating body produces sound by creating disturbance in the surrounding medium (air, water, etc.). Statement II: Normal sounds typically consist of mixed frequencies, because they involve multiple vibrations occurring simultaneously. (TSTET 11 Jan 2025)\nمندرجہ ذیل بیانات کو پڑھیں اور صحیح جواب منتخب کریں۔ بیان I: ایک تھرتھراتا ہوا جسم اردگرد کے واسطے (ہوا، پانی، وغیرہ) میں خلل پیدا کرکے آواز پیدا کرتا ہے۔ بیان II: عام آوازیں عام طور پر مخلوط تعدد پر مشتمل ہوتی ہیں، کیونکہ ان میں بیک وقت متعدد تھرتھراہٹیں شامل ہوتی ہیں۔",
    "options": [
      "Statement I is correct; Statement II is incorrect.\nبیان I درست ہے؛ بیان II غلط ہے۔",
      "Statement I is incorrect; Statement II is correct.\nبیان I غلط ہے؛ بیان II درست ہے۔",
      "Both Statement I and Statement II are correct and related.\nبیان I اور بیان II دونوں درست اور متعلقہ ہیں۔",
      "Both Statement I and Statement II are incorrect and not related.\nبیان I اور بیان II دونوں غلط اور غیر متعلقہ ہیں۔"
    ],
    "correct": "Both Statement I and Statement II are correct and related.",
    "explanation": "بیان I درست طور پر بیان کرتا ہے کہ آواز کیسے پیدا ہوتی ہے؛ یہ ایک میکانیکی لہر ہے جو تھرتھراہٹ سے پیدا ہوتی ہے جو ایک واسطے کے ذریعے پھیلتی ہے۔ بیان II بھی درست ہے؛ زیادہ تر حقیقی دنیا کی آوازیں پیچیدہ ہوتی ہیں اور ایک بنیادی تعدد کے ساتھ ساتھ متعدد اوورٹونز (ہارمونکس) پر مشتمل ہوتی ہیں، جو پیچیدہ تھرتھراہٹ کے نتیجے میں ہوتی ہیں۔ بیانات آپس میں متعلقہ ہیں کیونکہ II میں مذکور پیچیدہ تھرتھراہٹ (متعدد تعدد) ہی وہ ہیں جو I میں بیان کردہ واسطے میں خلل پیدا کرتی ہیں۔"
  },
  {
    "id": 455,
    "text": "A car travels from rest with a constant acceleration 'a' for 20 seconds. What is the average speed of the car if the car moves along a straight road? (TSTET 11 Jan 2025)\nایک کار سکون کی حالت سے مستقل اسراع 'a' کے ساتھ 20 سیکنڈ تک سفر کرتی ہے۔ اگر کار سیدھی سڑک پر حرکت کرتی ہے تو کار کی اوسط رفتار کیا ہے؟",
    "options": [
      "$ \frac{10}{a} $",
      "10a",
      "20a",
      "$ \frac{20}{a} $"
    ],
    "correct": "10a",
    "explanation": "مستقل اسراع کے ساتھ حرکت کرنے والی چیز کے لیے، اوسط رفتار کا حساب ابتدائی اور حتمی رفتار کے اوسط کے طور پر کیا جا سکتا ہے۔ ابتدائی رفتار ($u$) 0 ہے کیونکہ کار سکون کی حالت سے شروع ہوتی ہے۔ وقت 't' کے بعد حتمی رفتار ($v$) حرکت کی مساوات $v = u + at$ سے دی جاتی ہے۔ یہاں، $v = 0 + a(20) = 20a$ ہے۔ اوسط رفتار $ \frac{u+v}{2} = \frac{0 + 20a}{2} = 10a $ ہے۔"
  },
  {
    "id": 456,
    "text": "Among the following, which is true about the Earth's magnetic field? (TSTET 11 Jan 2025)\nمندرجہ ذیل میں سے، زمین کے مقناطیسی میدان کے بارے میں کیا سچ ہے؟",
    "options": [
      "The magnetic field lines run parallel to the equator.\nمقناطیسی میدان کی لکیریں خط استوا کے متوازی چلتی ہیں۔",
      "The magnetic north pole is the same as the geographic north pole.\nمقناطیسی شمالی قطب جغرافیائی شمالی قطب جیسا ہی ہے۔",
      "The magnetic field is the strongest at the magnetic poles.\nمقناطیسی میدان مقناطیسی قطبوں پر سب سے زیادہ مضبوط ہوتا ہے۔",
      "The Earth's magnetic field has no effect on compasses.\nزمین کے مقناطیسی میدان کا کمپاس پر کوئی اثر نہیں ہوتا۔"
    ],
    "correct": "The magnetic field is the strongest at the magnetic poles.",
    "explanation": "زمین ایک بڑے بار میگنیٹ کی طرح کام کرتی ہے۔ اس کی مقناطیسی میدان کی لکیریں جنوبی نصف کرہ سے نکلتی ہیں اور شمالی نصف کرہ میں دوبارہ داخل ہوتی ہیں۔ یہ میدانی لکیریں مقناطیسی قطبوں پر سب سے زیادہ مرتکز ہوتی ہیں، جہاں مقناطیسی میدان کی طاقت اپنی زیادہ سے زیادہ ہوتی ہے۔ مقناطیسی قطب جغرافیائی قطبوں کے ساتھ موافق نہیں ہوتے، اور کمپاس اس مقناطیسی میدان کے ساتھ سیدھ میں آ کر کام کرتے ہیں۔"
  },
  {
    "id": 457,
    "text": "Three resistors, each of resistance X Ω, are connected in both series and parallel. If the resulting total resistance in both configurations is the same, what is the value of X? (TSTET 11 Jan 2025)\nتین رزسٹر، ہر ایک کی مزاحمت X Ω ہے، کو سلسلہ وار اور متوازی دونوں طرح سے جوڑا گیا ہے۔ اگر دونوں ترتیبوں میں نتیجے میں کل مزاحمت ایک جیسی ہے، تو X کی قیمت کیا ہے؟",
    "options": [
      "0 Ω",
      "1 Ω",
      "3 Ω",
      "9 Ω"
    ],
    "correct": "0 Ω",
    "explanation": "جب X مزاحمت کے تین رزسٹروں کو سلسلہ وار جوڑا جاتا ہے، تو کل مزاحمت $R_{series} = X + X + X = 3X$ ہوتی ہے۔ جب متوازی جوڑا جاتا ہے، تو کل مزاحمت $R_{parallel}$ اس طرح دی جاتی ہے $ \frac{1}{R_{parallel}} = \frac{1}{X} + \frac{1}{X} + \frac{1}{X} = \frac{3}{X} $، لہذا $R_{parallel} = \frac{X}{3}$۔ اگر دونوں ترتیبوں کی مزاحمت ایک جیسی ہے، تو $R_{series} = R_{parallel}$، جس کا مطلب ہے $3X = \frac{X}{3}$۔ یہ $9X = X$ یا $8X = 0$ تک آسان ہو جاتا ہے۔ اس مساوات کا واحد ممکنہ حل $X = 0~\Omega$ ہے۔"
  },
  {
    "id": 458,
    "text": "Raju, a Physical Science teacher, wants to demonstrate the liberation of hydrogen gas experiment in his laboratory. However, Hydrochloric acid is not available. Which of the following substances can he use as an alternative to produce hydrogen gas by reacting with Zinc? (TSTET 11 Jan 2025)\nراجو، ایک فزیکل سائنس کا استاد، اپنی لیبارٹری میں ہائیڈروجن گیس کے اخراج کا تجربہ دکھانا چاہتا ہے۔ تاہم، ہائیڈروکلورک ایسڈ دستیاب نہیں ہے۔ زنک کے ساتھ رد عمل کے ذریعے ہائیڈروجن گیس پیدا کرنے کے لیے وہ مندرجہ ذیل میں سے کون سا مادہ متبادل کے طور پر استعمال کر سکتا ہے؟",
    "options": [
      "Potassium permanganate\nپوٹاشیم پرمینگنیٹ",
      "Calcium sulphate\nکیلشیم سلفیٹ",
      "Hydrogen peroxide\nہائیڈروجن پیرو آکسائیڈ",
      "Sodium hydroxide\nسوڈیم ہائیڈرو آکسائیڈ"
    ],
    "correct": "Sodium hydroxide",
    "explanation": "زنک ایک ایمفوٹیرک دھات ہے، جس کا مطلب ہے کہ یہ ہائیڈروجن گیس پیدا کرنے کے لیے مضبوط تیزاب اور مضبوط اساس دونوں کے ساتھ رد عمل ظاہر کرتا ہے۔ جبکہ یہ عام طور پر HCl جیسے تیزاب کے ساتھ رد عمل ظاہر کرتا ہے، یہ سوڈیم ہائیڈرو آکسائیڈ (NaOH) جیسے مضبوط اساس کے ساتھ بھی رد عمل ظاہر کرکے سوڈیم زنکیٹ اور ہائیڈروجن گیس پیدا کرے گا۔ کیمیائی مساوات یہ ہے: $Zn + 2NaOH \\rightarrow Na_2ZnO_2 + H_2$۔"
  },
  {
    "id": 459,
    "text": "One mole of a substance is defined as the amount of the substance that contains as many particles (atoms, molecules, or ions... etc) or entities that are equal to the atoms present in exactly 12 grams of the carbon ($^{12}C$) isotope. The number of particles present in one mole of any substance is: (TSTET 11 Jan 2025)\nایک مادہ کے ایک مول کی تعریف اس مادہ کی مقدار کے طور پر کی جاتی ہے جس میں اتنے ہی ذرات (ایٹم، مالیکیول، یا آئن... وغیرہ) یا اکائیاں ہوتی ہیں جو کاربن ($^{12}C$) آئسوٹوپ کے بالکل 12 گرام میں موجود ایٹموں کے برابر ہوتی ہیں۔ کسی بھی مادہ کے ایک مول میں موجود ذرات کی تعداد ہے:",
    "options": [
      "$1.622 \times 10^{-32}$",
      "$6.022 \times 10^{32}$",
      "$6.022 \times 10^{23}$",
      "$6.022 \times 10^{-23}$"
    ],
    "correct": "$6.022 \times 10^{23}$",
    "explanation": "یہ مخصوص عدد کیمیا میں ایک بنیادی مستقل ہے جسے ایوگاڈرو کا مستقل یا ایوگاڈرو کا عدد ($N_A$) کہا جاتا ہے۔ یہ کسی مادہ کے فی مول میں موجود اجزائے ترکیبی ذرات (جیسے ایٹم، مالیکیول، یا آئن) کی تعداد کی نمائندگی کرتا ہے۔ قبول شدہ قیمت تقریباً $6.022 \times 10^{23}$ mol$^{-1}$ ہے۔"
  },
  {
    "id": 460,
    "text": "The number of elements in Newland's Periodic Table was: (TSTET 11 Jan 2025)\nنیولینڈ کے دوری جدول میں عناصر کی تعداد تھی:",
    "options": [
      "50",
      "56",
      "60",
      "64"
    ],
    "correct": "56",
    "explanation": "1866 میں، جان نیولینڈ نے اپنا قانونِ ہشتک (Law of Octaves) پیش کیا۔ اس نے اس وقت کے معلوم 56 عناصر کو بڑھتے ہوئے جوہری وزن کی ترتیب میں ترتیب دیا اور مشاہدہ کیا کہ ہر آٹھواں عنصر اسی طرح کی خصوصیات کا مظاہرہ کرتا ہے۔ اس کا جدول ہائیڈروجن سے شروع ہوا اور تھوریم پر ختم ہوا، جس میں کل 56 عناصر شامل تھے۔"
  },
  {
    "id": 461,
    "text": "Two lenses with powers of 4D and 6D are placed in contact. Then calculate the total power of the lens system. (TSTET 11 Jan 2025)\n4D اور 6D کی طاقت والے دو عدسے ایک دوسرے کے ساتھ رکھے گئے ہیں۔ پھر عدسے کے نظام کی کل طاقت کا حساب لگائیں۔",
    "options": [
      "2D",
      "10D",
      "2.4D",
      "12D"
    ],
    "correct": "10D",
    "explanation": "جب پتلے عدسوں کو ایک دوسرے کے ساتھ رکھا جاتا ہے، تو امتزاج کی طاقت انفرادی طاقتوں کا الجبری مجموعہ ہوتی ہے۔ فارمولا $P_{total} = P_1 + P_2$ ہے۔ دیا گیا ہے کہ $P_1 = 4$ D اور $P_2 = 6$ D، کل طاقت $P_{total} = 4\text{D} + 6\text{D} = 10\text{D}$ ہے۔"
  },
  {
    "id": 462,
    "text": "In the electrolytic refining of copper, which of the following metals is NOT typically found at the bottom of the anode as 'anode mud'? (TSTET 11 Jan 2025)\nتانبے کی برق پاشیدگی سے صفائی میں، مندرجہ ذیل میں سے کون سی دھات عام طور پر انوڈ کے نیچے 'انوڈ مڈ' کے طور پر نہیں پائی جاتی ہے؟",
    "options": [
      "Silver\nچاندی",
      "Gold\nسونا",
      "Platinum\nپلاٹینم",
      "Magnesium\nمیگنیشیم"
    ],
    "correct": "Magnesium",
    "explanation": "تانبے کی برق پاشیدگی سے صفائی کے دوران، ناخالص تانبے کا انوڈ گھل جاتا ہے۔ کم تعامل پذیر دھاتی نجاستیں جیسے چاندی، سونا، اور پلاٹینم نہیں گھلتی ہیں اور نیچے بیٹھ جاتی ہیں، جس سے انوڈ مڈ بنتا ہے۔ زیادہ تعامل پذیر دھاتیں، جیسے میگنیشیم، تانبے سے زیادہ آسانی سے آکسائڈائز ہو جاتی ہیں۔ وہ تانبے کے ساتھ الیکٹرولائٹ محلول میں گھل جائیں گی لیکن خالص تانبے کے کیتھوڈ پر جمع نہیں ہوں گی کیونکہ انہیں تانبے کے آئنوں کے مقابلے میں کم کرنا زیادہ مشکل ہوتا ہے۔"
  },
  {
    "id": 463,
    "text": "The onion peel cell can be differentiated from the cheek cell by the presence of (TSTET 11 Jan 2025)\nپیاز کے چھلکے کے خلیے کو گال کے خلیے سے اس کی موجودگی کی وجہ سے مختلف کیا جا سکتا ہے۔",
    "options": [
      "Cell membrane\nخلیے کی جھلی",
      "Cytoplasm\nسائٹوپلازم",
      "Nucleus\nمرکزہ",
      "Cell wall\nخلیے کی دیوار"
    ],
    "correct": "Cell wall",
    "explanation": "پیاز کے چھلکے کا خلیہ ایک پودے کا خلیہ ہے، جبکہ انسانی گال کا خلیہ ایک جانور کا خلیہ ہے۔ پودے اور جانور کے خلیوں کے درمیان سب سے واضح ساختی فرق پودوں کے خلیوں میں خلیے کی جھلی کے باہر ایک سخت خلیے کی دیوار کی موجودگی ہے۔ یہ خلیے کی دیوار، جو سیلولوز سے بنی ہوتی ہے، ساختی مدد فراہم کرتی ہے۔ جانوروں کے خلیوں میں خلیے کی دیوار نہیں ہوتی۔ دونوں قسم کے خلیوں میں خلیے کی جھلی، سائٹوپلازم، اور ایک مرکزہ ہوتا ہے۔"
  },
  {
    "id": 464,
    "text": "The 'S' shaped nucleus is found in the following cells of WBC (TSTET 11 Jan 2025)\n'S' شکل کا مرکزہ WBC کے مندرجہ ذیل خلیوں میں پایا جاتا ہے۔",
    "options": [
      "Neutrophils\nنیوٹروفیلز",
      "Eosinophils\nایسینوفلز",
      "Basophils\nبیسوفیلز",
      "Lymphocytes\nلیمفوسائٹس"
    ],
    "correct": "Basophils",
    "explanation": "بیسوفیلز، جو کہ سفید خون کے خلیوں (WBC) کی ایک قسم ہے، کی خصوصیت ایک دو لوب والے یا اکثر غیر واضح S-شکل کے مرکزے سے ہوتی ہے، جو عام طور پر سائٹوپلازم میں بڑے، موٹے، گہرے-جامنی رنگ کے دھبوں والے دانے داروں سے چھپا ہوتا ہے۔ اس کے برعکس، نیوٹروفیلز میں ایک کثیر لوب والا مرکزہ ہوتا ہے، ایسینوفلز میں ایک دو لوب والا مرکزہ ہوتا ہے (ہیڈ فون کی طرح)، اور لیمفوسائٹس میں ایک بڑا، گول مرکزہ ہوتا ہے۔"
  },
  {
    "id": 465,
    "text": "The leakage of which gas from the factory resulted in the Bhopal gas tragedy (TSTET 11 Jan 2025)\nفیکٹری سے کس گیس کے اخراج کے نتیجے میں بھوپال گیس کا سانحہ پیش آیا؟",
    "options": [
      "Chlorofluorocarbons\nکلورو فلورو کاربنز",
      "Methyl Isocyanate\nمیتھائل آئسو سائینیٹ",
      "Compressed Natural gas\nکمپریسڈ نیچرل گیس",
      "Hydrogen Sulphide\nہائیڈروجن سلفائیڈ"
    ],
    "correct": "Methyl Isocyanate",
    "explanation": "بھوپال گیس کا سانحہ، جو دسمبر 1984 میں پیش آیا، ایک تباہ کن صنعتی آفت تھی جو یونین کاربائیڈ انڈیا لمیٹڈ کی ملکیت والے کیڑے مار دوا کے پلانٹ سے 40 ٹن سے زیادہ انتہائی زہریلی میتھائل آئسو سائینیٹ (MIC) گیس کے حادثاتی اخراج کی وجہ سے ہوئی تھی۔"
  },
  {
    "id": 466,
    "text": "Identify the primary consumer in the following food chain. Grass → Grasshopper → Frog→ Snake → Eagle (TSTET 11 Jan 2025)\nمندرجہ ذیل غذائی زنجیر میں بنیادی صارف کی شناخت کریں۔ گھاس → ٹڈا → مینڈک → سانپ → عقاب",
    "options": [
      "Grasshopper\nٹڈا",
      "Snake\nسانپ",
      "Frog\nمینڈک",
      "Eagle\nعقاب"
    ],
    "correct": "Grasshopper",
    "explanation": "ایک غذائی زنجیر میں، جانداروں کو ان کی ٹرافک سطح کے لحاظ سے درجہ بندی کیا جاتا ہے۔ پروڈیوسر (جیسے گھاس) اپنی خوراک خود بناتے ہیں۔ بنیادی صارف سبزی خور ہوتے ہیں جو پروڈیوسرز کو کھاتے ہیں۔ اس زنجیر میں، ٹڈا گھاس کھاتا ہے، جو اسے بنیادی صارف بناتا ہے۔ مینڈک ثانوی صارف ہے، سانپ ثالثی صارف ہے، اور عقاب چوتھا صارف ہے۔"
  },
  {
    "id": 467,
    "text": "Match the following: A) Testes, B) Adrenal gland, C) Pituitary gland, D) Ovaries with their hormones i) Progesterone, ii) Follicle Stimulating Hormone, iii) Testosterone, iv) Adrenalin. (TSTET 11 Jan 2025)\nمندرجہ ذیل کو ملائیں: A) خصیے، B) ایڈرینل غدود، C) پٹیوٹری غدود، D) بیضہ دانیاں ان کے ہارمونز کے ساتھ i) پروجیسٹرون، ii) فولیکل اسٹیمولیٹنگ ہارمون، iii) ٹیسٹوسٹیرون، iv) ایڈرینالین۔",
    "options": [
      "A-iii; B-iv; C-ii; D-i",
      "A-i; B-iii; C-iv; D-ii",
      "A-iii; B-iv; C-i; D-ii",
      "A-iii; B-i; C-ii; D-iv"
    ],
    "correct": "A-iii; B-iv; C-ii; D-i",
    "explanation": "اینڈوکرائن غدود کو ان کے پیدا کردہ ہارمونز سے ملانا: (A) خصیے مردانہ ہارمون (iii) ٹیسٹوسٹیرون پیدا کرتے ہیں۔ (B) ایڈرینل غدود (iv) ایڈرینالین پیدا کرتا ہے، جو 'لڑو یا بھاگو' ہارمون ہے۔ (C) پٹیوٹری غدود بہت سے ہارمونز پیدا کرتا ہے، بشمول (ii) فولیکل اسٹیمولیٹنگ ہارمون (FSH)۔ (D) بیضہ دانیاں زنانہ ہارمونز جیسے (i) پروجیسٹرون پیدا کرتی ہیں۔ اس طرح، صحیح امتزاج A-iii، B-iv، C-ii، D-i ہے۔"
  },
  {
    "id": 468,
    "text": "The sleeping sickness is caused by (TSTET 11 Jan 2025)\nنیند کی بیماری اس کی وجہ سے ہوتی ہے۔",
    "options": [
      "Bacterium\nبیکٹیریم",
      "Virus\nوائرس",
      "Protozoan\nپروٹوزوآن",
      "Fungus\nفنگس"
    ],
    "correct": "Protozoan",
    "explanation": "افریقی ٹریپانوسومیاسس، جسے عام طور پر نیند کی بیماری کہا جاتا ہے، ایک پرجیوی بیماری ہے جو *ٹریپانوسوما* جینس کے ایک پروٹوزوآن کی وجہ سے ہوتی ہے۔ یہ پرجیوی ایک متاثرہ ٹسی ٹسی مکھی کے کاٹنے سے انسانوں میں منتقل ہوتا ہے۔"
  },
  {
    "id": 469,
    "text": "Identify the pair of microorganisms that belong to different groups. (TSTET 11 Jan 2025)\nان خردبینی جانداروں کے جوڑے کی شناخت کریں جو مختلف گروہوں سے تعلق رکھتے ہیں۔",
    "options": [
      "Chlamydomonas, Oedogonium\nکلیمائیڈوموناس، اوڈوگونیم",
      "Penicillium, Aspergillus\nپینیسیلیم، ایسپرجیلس",
      "Spirulina, Vorticella\nاسپیرولینا، ورٹیسیلا",
      "Cyclops, Daphnia\nسائکلپس، ڈیفنیا"
    ],
    "correct": "Spirulina, Vorticella",
    "explanation": "جوڑوں کا تجزیہ: 'کلیمائیڈوموناس' اور 'اوڈوگونیم' دونوں سبز طحالب ہیں۔ 'پینیسیلیم' اور 'ایسپرجیلس' دونوں فنگس کی اقسام ہیں۔ 'سائکلپس' اور 'ڈیفنیا' دونوں چھوٹے کرسٹیشین ہیں۔ 'اسپیرولینا' ایک قسم کا سائینو بیکٹیریا (پروکیریوٹ) ہے، جبکہ 'ورٹیسیلا' ایک پروٹوزوآن (یوکیریوٹ) ہے۔ لہذا، اسپیرولینا اور ورٹیسیلا مختلف بڑے حیاتیاتی گروہوں سے تعلق رکھتے ہیں۔"
  },
  {
    "id": 470,
    "text": "The male sexual parts of the flower are (TSTET 11 Jan 2025)\nپھول کے نر جنسی حصے ہیں۔",
    "options": [
      "Thalamus, Calyx, Corolla\nتھیلیمس، کیلیکس، کرولا",
      "Style, Stigma, Ovary\nاسٹائل، اسٹگما، اووری",
      "Calyx, Thalamus, Ovule\nکیلیکس، تھیلیمس، اویول",
      "Filament, anther, pollen grains\nفلامنٹ، اینتھر، پولن گرینز"
    ],
    "correct": "Filament, anther, pollen grains",
    "explanation": "پھول کا نر تولیدی عضو اسٹیمن ہے۔ اسٹیمن دو اہم حصوں پر مشتمل ہوتا ہے: اینتھر، جو پولن گرینز (نر گیمیٹس) پیدا کرتا ہے، اور فلامنٹ، جو وہ ڈنٹھل ہے جو اینتھر کو سہارا دیتا ہے۔ اسٹائل، اسٹگما، اور اووری مل کر پسٹل بناتے ہیں، جو مادہ حصہ ہے۔ دیگر اختیارات میں پھول کے غیر تولیدی حصے درج ہیں۔"
  },
  {
    "id": 471,
    "text": "Which of the following are NOT insectivorous plants? A) Drosera B) Agaricus C) Utricularia D) Cuscuta (TSTET 11 Jan 2025)\nمندرجہ ذیل میں سے کون سے کیڑے خور پودے نہیں ہیں؟ A) ڈروسیرا B) ایگیریکس C) یوٹری کولیریا D) کسکوٹا",
    "options": [
      "A & B only",
      "A & C only",
      "C & D only",
      "B & D only"
    ],
    "correct": "B & D only",
    "explanation": "کیڑے خور پودے اپنی غذائیت کو پورا کرنے کے لیے کیڑوں کو پھانستے ہیں۔ ڈروسیرا (سنڈیو) اور یوٹری کولیریا (بلیڈر ورٹ) کیڑے خور پودوں کی مثالیں ہیں۔ ایگیریکس ایک مشروم ہے، جو ایک فنگس اور ایک ڈی کمپوزر (سیپروفائٹ) ہے۔ کسکوٹا (ڈوڈر) ایک پرجیوی پودا ہے جو اپنی غذائیت ایک میزبان پودے سے حاصل کرتا ہے۔ لہذا، ایگیریکس (B) اور کسکوٹا (D) کیڑے خور نہیں ہیں۔"
  },
  {
    "id": 472,
    "text": "Identify a pair of diseases in plants which are caused by fungi. (TSTET 11 Jan 2025)\nپودوں میں بیماریوں کے ایک جوڑے کی شناخت کریں جو فنگس کی وجہ سے ہوتی ہیں۔",
    "options": [
      "Smut disease and Red rot disease\nاسمیٹ بیماری اور ریڈ روٹ بیماری",
      "Tobacco Mosaic disease and Tikka disease\nتمباکو موزیک بیماری اور ٹکا بیماری",
      "Smut disease and Tobacco Mosaic disease\nاسمیٹ بیماری اور تمباکو موزیک بیماری",
      "Red Rot disease and Citrus Canker disease\nریڈ روٹ بیماری اور سٹرس کینکر بیماری"
    ],
    "correct": "Smut disease and Red rot disease",
    "explanation": "اسمیٹ بیماری، جو مکئی جیسے اناج کو متاثر کرتی ہے، فنگس کی مختلف اقسام کی وجہ سے ہوتی ہے۔ ریڈ روٹ بیماری، جو گنے میں عام ہے، بھی ایک فنگس (*Colletotrichum falcatum*) کی وجہ سے ہوتی ہے۔ دیگر اختیارات میں، تمباکو موزیک بیماری ایک وائرس کی وجہ سے ہوتی ہے، اور سٹرس کینکر ایک بیکٹیریا کی وجہ سے ہوتا ہے، جو ان جوڑوں کو غلط بناتا ہے۔"
  },
  {
    "id": 473,
    "text": "Bird 'Kiwi' is an example for (TSTET 11 Jan 2025)\nپرندہ 'کیوی' اس کی ایک مثال ہے۔",
    "options": [
      "Extinct species\nناپید انواع",
      "Endemic species\nمقامی انواع",
      "Endangered species\nخطرے سے دوچار انواع",
      "Invasive Alien species\nحملہ آور اجنبی انواع"
    ],
    "correct": "Endemic species",
    "explanation": "مقامی انواع وہ پودے یا جانور ہیں جو صرف ایک مخصوص جغرافیائی مقام پر موجود ہوتے ہیں۔ کیوی ایک پرواز سے محروم پرندہ ہے جو نیوزی لینڈ کا مقامی ہے اور صرف وہیں پایا جاتا ہے، جو اسے مقامی نوع کی ایک بہترین مثال بناتا ہے۔ جبکہ کیوی کی کچھ انواع کو خطرے سے دوچار بھی درجہ بندی کیا گیا ہے، اس تناظر میں ان کی سب سے واضح خصوصیت ان کی جغرافیائی خصوصیت ہے۔"
  },
  {
    "id": 474,
    "text": "Apiculture is related to (TSTET 11 Jan 2025)\nشہد کی مکھیوں کی پرورش کا تعلق اس سے ہے۔",
    "options": [
      "Rearing of Fishes\nمچھلیوں کی پرورش",
      "Rearing of Honeybees\nشہد کی مکھیوں کی پرورش",
      "Rearing of Silk moths\nریشم کے کیڑوں کی پرورش",
      "Rearing of Birds\nپرندوں کی پرورش"
    ],
    "correct": "Rearing of Honeybees",
    "explanation": "ایپیکلچر، جسے شہد کی مکھیوں کی پرورش بھی کہا جاتا ہے، شہد کی مکھیوں کی کالونیوں کو برقرار رکھنے کا عمل ہے، عام طور پر انسانوں کے بنائے ہوئے چھتوں میں۔ شہد کی مکھیاں پالنے والے شہد، موم، اور رائل جیلی جیسی مصنوعات جمع کرنے کے لیے اور فصلوں کی پولینیشن کے مقصد سے مکھیوں کا انتظام کرتے ہیں۔ 'پسیکلچر' مچھلیوں کی پرورش ہے، اور 'سیریکلچر' ریشم کے کیڑوں کی پرورش ہے۔"
  },
  {
    "id": 475,
    "text": "Ravi taught the lesson \"Simple Electric Circuits\" to his class 6 students. A student in that class repaired a \"circuit board\" at home. Which step in the 5E learning model does it emphasize? (TSTET 11 Jan 2025)\nروی نے اپنی چھٹی جماعت کے طلباء کو \"سادہ برقی سرکٹس\" کا سبق پڑھایا۔ اس کلاس کے ایک طالب علم نے گھر پر ایک \"سرکٹ بورڈ\" کی مرمت کی۔ 5E لرننگ ماڈل میں یہ کس قدم پر زور دیتا ہے؟",
    "options": [
      "Engage\nمشغول کرنا",
      "Explore\nدریافت کرنا",
      "Explain\nوضاحت کرنا",
      "Elaborate\nتفصیل سے بیان کرنا"
    ],
    "correct": "Elaborate",
    "explanation": "5E لرننگ ماڈل مشغول کرنا، دریافت کرنا، وضاحت کرنا، تفصیل سے بیان کرنا، اور جائزہ لینا پر مشتمل ہے۔ 'تفصیل سے بیان کرنا' کا مرحلہ سیکھنے والوں کو اپنے نئے حاصل کردہ علم کو نئی یا مختلف صورتحالوں پر لاگو کرنے کی ترغیب دیتا ہے۔ ایک سرکٹ بورڈ کی مرمت کرکے، طالب علم کلاس روم میں سادہ سرکٹس کے بارے میں سیکھے گئے تصورات کو ایک نئی، عملی، حقیقی دنیا کی ایپلی کیشن تک بڑھا رہا ہے۔ سمجھ کو لاگو کرنے اور بڑھانے کا یہ عمل 'تفصیل سے بیان کرنا' کے مرحلے کا مرکز ہے۔"
  },
  {
    "id": 476,
    "text": "Among the following methods, which method is typically NOT used for assessing student progress? (TSTET 11 Jan 2025)\nمندرجہ ذیل طریقوں میں سے، کون سا طریقہ عام طور پر طالب علم کی ترقی کا جائزہ لینے کے لیے استعمال نہیں کیا جاتا ہے؟",
    "options": [
      "Summative Assessment\nخلاصہ تشخیص",
      "Formative Assessment\nتشکیلی تشخیص",
      "Social Media Activity\nسوشل میڈیا سرگرمی",
      "Portfolio\nپورٹ فولیو"
    ],
    "correct": "Social Media Activity",
    "explanation": "خلاصہ تشخیص (مثلاً، حتمی امتحانات)، تشکیلی تشخیص (مثلاً، کوئز، مشاہدات)، اور پورٹ فولیو (طالب علم کے کام کا مجموعہ) سبھی تعلیمی تناظر میں طالب علم کی سیکھنے اور ترقی کا اندازہ لگانے کے لیے معیاری اور تسلیم شدہ طریقے ہیں۔ سوشل میڈیا سرگرمی تعلیمی ترقی کا جائزہ لینے کے لیے کوئی رسمی، قابل اعتماد، یا درست طریقہ نہیں ہے۔"
  },
  {
    "id": 477,
    "text": "Which is NOT in the steps of period plan in science subject in Telangana state? (TSTET 11 Jan 2025)\nتلنگانہ ریاست میں سائنس مضمون میں پیریڈ پلان کے مراحل میں کون سا شامل نہیں ہے؟",
    "options": [
      "Mind mapping\nذہنی نقشہ سازی",
      "Initiative\nپہل قدمی",
      "Reading-Recognising Keywords\nپڑھنا-کلیدی الفاظ کی پہچان",
      "Demonstration-Discussion\nمظاہرہ-بحث"
    ],
    "correct": "Initiative",
    "explanation": "تلنگانہ کے اسکولوں میں پیریڈ پلان کی معیاری ساخت میں اکثر مخصوص تدریسی اقدامات شامل ہوتے ہیں جیسے سابقہ علم کو فعال کرنے کے لیے 'ذہنی نقشہ سازی'، فہم کے لیے 'پڑھنا-کلیدی الفاظ کی پہچان'، اور تصوراتی تفہیم کے لیے 'مظاہرہ-بحث' جیسی سرگرمیاں۔ 'پہل قدمی' ایک مطلوبہ طالب علم کی خصوصیت یا ایک عمومی سیکھنے کا مقصد ہے، لیکن یہ خود پیریڈ پلان کے ٹیمپلیٹ کے اندر ایک رسمی، مقررہ قدم نہیں ہے۔"
  },
  {
    "id": 478,
    "text": "Before introducing Continuous Comprehensive Evaluation (CCE), one of the following was considered as a major cause for the increase in dropout rates in schools? (TSTET 11 Jan 2025)\nمسلسل جامع تشخیص (CCE) کو متعارف کرانے سے پہلے، مندرجہ ذیل میں سے کس کو اسکولوں میں ڈراپ آؤٹ کی شرح میں اضافے کی ایک بڑی وجہ سمجھا جاتا تھا؟",
    "options": [
      "Subject centred Curriculum\nمضمون پر مبنی نصاب",
      "Grading System\nگریڈنگ کا نظام",
      "Practice of Pass-Fail System\nپاس-فیل نظام کا عمل",
      "Maintenance of Student Portfolios\nطلباء کے پورٹ فولیو کی دیکھ بھال"
    ],
    "correct": "Practice of Pass-Fail System",
    "explanation": "CCE کو متعارف کرانے کی ایک اہم وجہ ایک ایسے نظام سے دور ہونا تھا جو ایک ہی حتمی امتحان پر بہت زیادہ انحصار کرتا تھا جس کے نتیجے میں سخت پاس-فیل کا نتیجہ نکلتا تھا۔ اس ایک امتحان میں ناکام ہونے کے دباؤ اور خوف، اور پورے تعلیمی سال کو دہرانے کے نتیجے کو، طالب علموں کے تناؤ اور زیادہ ڈراپ آؤٹ کی شرحوں میں اہم کردار ادا کرنے والے عوامل کے طور پر شناخت کیا گیا تھا۔ CCE کا مقصد مسلسل، متنوع، اور جامع تشخیص کے ذریعے اس دباؤ کو کم کرنا تھا۔"
  },
  {
    "id": 479,
    "text": "One of the following is NOT a feature of Micro Teaching: (TSTET 11 Jan 2025)\nمندرجہ ذیل میں سے ایک مائیکرو ٹیچنگ کی خصوصیت نہیں ہے:",
    "options": [
      "It gives a real teaching experience to the trainee teachers.\nیہ ٹرینی اساتذہ کو حقیقی تدریس کا تجربہ فراہم کرتا ہے۔",
      "It is a group training device.\nیہ ایک گروپ ٹریننگ ڈیوائس ہے۔",
      "All the aspects of classroom teaching are scaled down.\nکلاس روم کی تدریس کے تمام پہلوؤں کو کم کر دیا جاتا ہے۔",
      "It provides a good feedback for trainees' performance.\nیہ ٹرینیوں کی کارکردگی کے لیے اچھی رائے فراہم کرتا ہے۔"
    ],
    "correct": "It is a group training device.",
    "explanation": "مائیکرو ٹیچنگ ایک استاد کی تربیت کی تکنیک ہے جو مخصوص تدریسی مہارتوں کو فروغ دینے پر توجہ مرکوز کرتی ہے۔ یہ ایک انفرادی تربیتی آلہ ہے جہاں ایک استاد-ٹرینی ایک مختصر مدت کے لیے طلباء کے ایک چھوٹے سے گروپ کو پڑھا کر ایک مہارت کی مشق کرتا ہے۔ دیگر اختیارات بنیادی خصوصیات ہیں: یہ ایک حقیقی تدریسی تجربہ ہے، یہ کلاس کے سائز، وقت، اور مواد کے لحاظ سے کم کیا جاتا ہے، اور اس کا بنیادی مقصد فوری اور مرکوز رائے فراہم کرنا ہے۔"
  },
  {
    "id": 480,
    "text": "In a secondary level Biological science classroom, a teacher is explaining the digestive system in cockroach through demonstration by dissecting a cockroach. According to Edgar Dale's cone of experiences, which of the following sources the teacher is using in this context? A) Enactive B) Iconic C) Symbolic (TSTET 11 Jan 2025)\nایک ثانوی سطح کے حیاتیاتی سائنس کے کلاس روم میں، ایک استاد ایک لال بیگ کی چیر پھاڑ کے ذریعے مظاہرہ کرکے لال بیگ میں نظام انہضام کی وضاحت کر رہا ہے۔ ایڈگر ڈیل کے تجربات کے کون کے مطابق، اس تناظر میں استاد مندرجہ ذیل میں سے کون سا ذریعہ استعمال کر رہا ہے؟ A) عملی B) علامتی C) رمزی",
    "options": [
      "A only\nصرف A",
      "B only\nصرف B",
      "A & B only\nصرف A اور B",
      "A & C only\nصرف A اور C"
    ],
    "correct": "A only",
    "explanation": "ایڈگر ڈیل کا کون آف ایکسپریئنس سیکھنے کو سب سے ٹھوس سے سب سے تجریدی تک درجہ بندی کرتا ہے۔ بنیاد پر 'اینیکٹیو' (عملی) مرحلہ براہ راست، بامقصد، عملی تجربات ('کر کے سیکھنا') کی نمائندگی کرتا ہے۔ اس میں براہ راست تجربات، منصوبہ بند تجربات، اور ڈرامائی تجربات شامل ہیں۔ ایک حقیقی نمونے کی چیر پھاڑ پر مشتمل ایک زندہ مظاہرہ ایک براہ راست، حقیقی وقت کا، بامقصد تجربہ ہے۔ یہاں تک کہ مشاہدہ کرنے والے طلباء کے لیے بھی، یہ اس تناظر میں دستیاب سیکھنے کی سب سے ٹھوس شکل ہے، جو ایک ویڈیو دیکھنے (آئیکونک/علامتی) یا متن پڑھنے (سمبولک/رمزی) سے کہیں زیادہ ہے۔ لہذا، یہ اینیکٹیو (عملی) زمرے میں آتا ہے۔"
  },
  {
    "id": 481,
    "text": "The method of teaching that makes the students to look at knowledge as a whole is (APTET 2011)\nوہ تدریسی طریقہ جو طلباء کو علم کو بحیثیت مجموعی دیکھنے پر مجبور کرتا ہے (APTET 2011)",
    "options": [
      "Project method\nپروجیکٹ کا طریقہ",
      "Lecture method\nلیکچر کا طریقہ",
      "Demonstration method\nمظاہرے کا طریقہ",
      "Discussion method\nبحث کا طریقہ"
    ],
    "correct": "Lecture method",
    "explanation": "جبکہ جدید تدریسیات اکثر جامع تعلیم کو پروجیکٹ میتھڈ جیسے طریقوں سے جوڑتی ہے، اس سوال کی کلید لیکچر میتھڈ کی نشاندہی کرتی ہے۔ اس کی وجہ یہ ہو سکتی ہے کہ ایک اچھی طرح سے منظم لیکچر کسی موضوع کا ایک جامع، منظم جائزہ فراہم کر سکتا ہے، جس میں علم کو چھوٹے اجزاء میں توڑنے سے پہلے ایک مربوط کل یا ایک مکمل ڈھانچے کے طور پر پیش کیا جاتا ہے۔"
  },
  {
    "id": "482",
    "text": "Identify the correct sequence of processes in the water cycle. (TSTET 20 Jan 2025)\nآبی چکر میں عمل کی صحیح ترتیب کی نشاندہی کریں۔ (TSTET 20 Jan 2025)",
    "options": [
      "Evaporation - Precipitation - Collection - Condensation\nتبخیر - بارش - اجتماع - تکثیف",
      "Evaporation - Condensation - Precipitation - Collection\nتبخیر - تکثیف - بارش - اجتماع",
      "Condensation - Evaporation - Precipitation - Collection\nتکثیف - تبخیر - بارش - اجتماع",
      "Precipitation - Evaporation - Collection - Condensation\nبارش - تبخیر - اجتماع - تکثیف"
    ],
    "correct": "Evaporation - Condensation - Precipitation - Collection",
    "explanation": "آبی چکر ایک مخصوص ترتیب پر عمل کرتا ہے: \n1.  **تبخیر:** سورج دریاؤں، جھیلوں اور سمندروں میں پانی کو گرم کرتا ہے، اسے بخارات یا بھاپ میں بدل دیتا ہے، جو ہوا میں بلند ہوتی ہے۔ \n2.  **تکثیف:** ہوا میں موجود آبی بخارات ٹھنڈے ہو کر دوبارہ مائع میں تبدیل ہو جاتے ہیں، جس سے بادل بنتے ہیں۔ \n3.  **بارش:** جب اتنا پانی گاڑھا ہو جاتا ہے کہ ہوا اسے مزید نہیں روک سکتی، تو یہ بارش، اولے یا برف کی صورت میں زمین پر واپس گرتا ہے۔ \n4.  **اجتماع:** زمین پر واپس گرنے والا پانی سمندروں، جھیلوں اور دریاؤں میں جمع ہو جاتا ہے، یا زمین میں جذب ہو جاتا ہے، جس سے یہ چکر دوبارہ شروع ہو جاتا ہے۔"
  },
  {
    "id": "483",
    "text": "Identify the inner planet which has highest natural satellites among the following. (TSTET 20 Jan 2025)\nاندرونی سیاروں میں سے اس سیارے کی نشاندہی کریں جس کے قدرتی سیٹلائٹس کی تعداد سب سے زیادہ ہے۔ (TSTET 20 Jan 2025)",
    "options": [
      "Mercury\nعطارد",
      "Venus\nزہرہ",
      "Earth\nزمین",
      "Mars\nمریخ"
    ],
    "correct": "Mars",
    "explanation": "اندرونی سیارے عطارد، زہرہ، زمین اور مریخ ہیں۔ ہر ایک کے قدرتی سیٹلائٹس کی تعداد درج ذیل ہے:\n* **عطارد:** 0 سیٹلائٹس۔ \n* **زہرہ:** 0 سیٹلائٹس۔ \n* **زمین:** 1 سیٹلائٹ (چاند)۔ \n* **مریخ:** 2 سیٹلائٹس (فوبوس اور ڈیموس)۔ \nلہذا، اندرونی سیاروں میں مریخ کے قدرتی سیٹلائٹس کی تعداد سب سے زیادہ ہے۔"
  },
  {
    "id": "484",
    "text": "Match the following material medium with its refractive index. (TSTET 20 Jan 2025)\nمندرجہ ذیل مادی واسطوں کو ان کے انعطافی اشاریہ (refractive index) کے ساتھ ملائیں۔ (TSTET 20 Jan 2025)",
    "options": [
      "A-iv, B-ii, C-i, D-iii",
      "A-i, B-iv, C-iii, D-ii",
      "A-ii, B-iii, C-iv, D-i",
      "A-iii, B-i, C-iv, D-ii"
    ],
    "correct": "A-iii, B-i, C-iv, D-ii",
    "explanation": "دیے گئے مواد کے لیے تخمینی انعطافی اشاریے یہ ہیں:\n* **A) تارپین کا تیل:** 1.47 \n* **B) بینزین:** 1.50 \n* **C) ہیرا:** 2.42 \n* **D) کاربن ڈائی سلفائیڈ:** 1.63 \nلہذا صحیح جوڑی A-iii, B-i, C-iv, D-ii ہے۔"
  },
  {
    "id": "485",
    "text": "A kaleidoscope primarily rely on this property to create symmetrical patterns. (TSTET 20 Jan 2025)\nایک کیلیڈوسکوپ بنیادی طور پر اس خاصیت پر انحصار کرتا ہے تاکہ متناسب نمونے بنائے۔ (TSTET 20 Jan 2025)",
    "options": [
      "Diffraction of light\nروشنی کا انحراف",
      "Refraction of light\nروشنی کا انعطاف",
      "Multiple reflections of light\nروشنی کے متعدد انعکاس",
      "Absorption of light\nروشنی کا جذب"
    ],
    "correct": "Multiple reflections of light",
    "explanation": "ایک کیلیڈوسکوپ دو یا دو سے زیادہ آئینوں پر مشتمل ہوتا ہے جو ایک ٹیوب کے اندر ایک دوسرے سے ایک زاویے پر رکھے جاتے ہیں۔ جب آپ ایک سرے سے دیکھتے ہیں، تو دوسرے سرے پر موجود اشیاء (جیسے رنگین موتی) آئینوں سے کئی بار منعکس ہوتی ہیں۔ **متعدد انعکاس** کا یہ عمل خوبصورت، متناسب نمونے بناتا ہے جو ٹیوب کو گھمانے پر بدلتے رہتے ہیں۔"
  },
  {
    "id": "486",
    "text": "An object of mass 5 kg is at a certain height 'h' above the ground. If the Potential energy of the object is 147J, find the height 'h' at which the object is with respect to the ground (in meters). (take g = 9.8 m/s²). (TSTET 20 Jan 2025)\n5 کلوگرام کمیت کا ایک جسم زمین سے ایک خاص اونچائی 'h' پر ہے۔ اگر جسم کی مخفی توانائی (Potential energy) 147J ہے، تو زمین کے لحاظ سے اس اونچائی 'h' کو معلوم کریں (میٹرز میں)۔ (g = 9.8 m/s² لیں)۔ (TSTET 20 Jan 2025)",
    "options": [
      "3",
      "2.94",
      "30",
      "29.4"
    ],
    "correct": "3",
    "explanation": "کشش ثقل کی مخفی توانائی (PE) کا فارمولا $PE = m \\times g \\times h$ ہے، جہاں 'm' کمیت، 'g' کشش ثقل کی وجہ سے اسراع، اور 'h' اونچائی ہے۔\nدیا گیا ہے: \nPE = 147 J \nm = 5 kg \ng = 9.8 m/s² \n'h' کو معلوم کرنے کے لیے، ہم فارمولے کو دوبارہ ترتیب دیتے ہیں: $h = \\frac{PE}{m \\times g}$\n$h = \\frac{147}{5 \\times 9.8} = \\frac{147}{49} = 3$ میٹرز۔"
  },
  {
    "id": "487",
    "text": "To measure the potential difference across two points in a circuit, the voltmeter is connected in: (TSTET 20 Jan 2025)\nایک سرکٹ میں دو نکات کے درمیان پوٹینشل فرق کی پیمائش کے لیے، وولٹ میٹر کو کس طرح جوڑا جاتا ہے: (TSTET 20 Jan 2025)",
    "options": [
      "Series only\nصرف سلسلہ وار",
      "Parallel only\nصرف متوازی",
      "Neither series nor parallel\nنہ سلسلہ وار نہ متوازی",
      "Either series or parallel\nیا تو سلسلہ وار یا متوازی"
    ],
    "correct": "Parallel only",
    "explanation": "وولٹ میٹر کا استعمال سرکٹ میں دو نکات کے درمیان پوٹینشل فرق (وولٹیج) کی پیمائش کے لیے کیا جاتا ہے۔ اسے صحیح طریقے سے کرنے کے لیے، اسے اس جزو کے **متوازی** جوڑا جانا چاہیے جس کے وولٹیج کی پیمائش کی جا رہی ہے۔ ایک مثالی وولٹ میٹر کی اندرونی مزاحمت بہت زیادہ ہوتی ہے تاکہ یہ مرکزی سرکٹ سے نہ ہونے کے برابر کرنٹ کھینچے، اس طرح اس پوٹینشل فرق کو تبدیل نہیں کرتا جس کی پیمائش کا ارادہ ہے۔"
  },
  {
    "id": "488",
    "text": "Electroplating is primarily based on the... (TSTET 20 Jan 2025)\nبرقی ملمع کاری بنیادی طور پر کس پر مبنی ہے... (TSTET 20 Jan 2025)",
    "options": [
      "Chemical effect of current\nکرنٹ کا کیمیائی اثر",
      "Magnetic effect of current\nکرنٹ کا مقناطیسی اثر",
      "Thermal effect of current\nکرنٹ کا حرارتی اثر",
      "Electrostatic effect of current\nکرنٹ کا برق سکونی اثر"
    ],
    "correct": "Chemical effect of current",
    "explanation": "برقی ملمع کاری (Electroplating) الیکٹرولائسس کا استعمال کرتے ہوئے ایک دھات پر دوسری دھات کی تہہ چڑھانے کا عمل ہے۔ یہ عمل **برقی رو کے کیمیائی اثر** پر انحصار کرتا ہے، جہاں ایک موصل محلول (الیکٹرولائٹ) سے کرنٹ گزارنے سے کیمیائی تعاملات ہوتے ہیں۔ برقی ملمع کاری میں، محلول سے دھاتی آئن اس شے پر جمع ہو جاتے ہیں جس پر تہہ چڑھانی ہوتی ہے۔"
  },
  {
    "id": "489",
    "text": "Petroleum is obtained in the Earth's crust from the following rocks. (TSTET 20 Jan 2025)\nپٹرولیم زمین کی پرت میں مندرجہ ذیل چٹانوں سے حاصل کیا جاتا ہے۔ (TSTET 20 Jan 2025)",
    "options": [
      "Granite rocks\nگرینائٹ چٹانیں",
      "Impervious rocks\nغیر مسامی چٹانیں",
      "Igneous rocks\nآتشی چٹانیں",
      "Metamorphic rocks\nتبدیل شدہ چٹانیں"
    ],
    "correct": "Impervious rocks",
    "explanation": "پٹرولیم قدیم نامیاتی مادے سے بنتا ہے اور مسامی تلچھٹ چٹانوں (ذخیرہ کرنے والی چٹانوں) میں پایا جاتا ہے۔ تاہم، تجارتی طور پر قابل عمل مقدار میں جمع ہونے کے لیے، اسے پھنسنا ضروری ہے۔ یہ پھنساؤ **غیر مسامی (impervious) چٹان** کی ایک تہہ کے ذریعے ہوتا ہے، جسے کیپ راک بھی کہا جاتا ہے، جو تیل اور گیس کو فرار ہونے سے روکتی ہے۔ لہذا، پٹرولیم ان غیر مسامی چٹانوں کی تہوں کے نیچے واقع ذخائر سے حاصل کیا جاتا ہے۔"
  },
  {
    "id": 490,
    "text": "An ancient, convenient and inexpensive method of teaching that is suitable for teaching almost all the subjects of school curriculum is (APTET 2011)\nتدریس کا ایک قدیم، آسان اور سستا طریقہ جو اسکول کے نصاب کے تقریباً تمام مضامین پڑھانے کے لیے موزوں ہے (APTET 2011)",
    "options": [
      "Lecture method\nلیکچر کا طریقہ",
      "Demonstration method\nمظاہرے کا طریقہ",
      "Source method\nماخذ کا طریقہ",
      "Story-telling method\nکہانی سنانے کا طریقہ"
    ],
    "correct": "Lecture method",
    "explanation": "لیکچر کا طریقہ ایک روایتی اور پائیدار تدریسی تکنیک ہے۔ اسے انتہائی آسان اور سستا سمجھا جاتا ہے کیونکہ اس کے لیے استاد کی مہارت کے علاوہ بہت کم وسائل کی ضرورت ہوتی ہے اور اسے بڑے سامعین تک پہنچایا جا سکتا ہے۔ اس کی ہمہ گیریت اسے اسکول کے نصاب میں تقریباً کسی بھی مضمون میں بنیادی علم سکھانے کے لیے ڈھالنے کی اجازت دیتی ہے، جو اسے ایک عملی اور وسیع پیمانے پر استعمال ہونے والا طریقہ بناتی ہے۔"
  },
  {
    "id": "491",
    "text": "The correct expansion of the acronym VSEPRT is. (TSTET 20 Jan 2025)\nمخفف VSEPRT کی صحیح توسیع ہے۔ (TSTET 20 Jan 2025)",
    "options": [
      "Valence Shell Electron Pair Replace Theory\nویلنس شیل الیکٹران پیئر ریپلیس تھیوری",
      "Valence Subatomic Electron Pair Repulsion Theory\nویلنس سب ایٹامک الیکٹران پیئر ریپلشن تھیوری",
      "Valence Shell Electron Pair Repulsion Theory\nویلنس شیل الیکٹران پیئر ریپلشن تھیوری",
      "Voltage Shell Electron Pair Repulsion Theory\nوولٹیج شیل الیکٹران پیئر ریپلشن تھیوری"
    ],
    "correct": "Valence Shell Electron Pair Repulsion Theory",
    "explanation": "مخفف VSEPRT کا مطلب **Valence Shell Electron Pair Repulsion Theory** ہے۔ یہ کیمیا میں استعمال ہونے والا ایک ماڈل ہے جو سالموں کی 3D جیومیٹری کی پیش گوئی اس خیال کی بنیاد پر کرتا ہے کہ مرکزی ایٹم کے ویلنس (سب سے بیرونی) شیل میں الیکٹران کے جوڑے ایک دوسرے کو دفع کریں گے اور خود کو زیادہ سے زیادہ دور رکھنے کا اہتمام کریں گے۔"
  },
  {
    "id": "492",
    "text": "Identify \"X\" in the chemical reaction $Al_2(SO_4)_3 + 3 Ca(OH)_2 \\rightarrow 2\"X\" + 3 CaSO_4$. (TSTET 20 Jan 2025)\nکیمیائی تعامل $Al_2(SO_4)_3 + 3 Ca(OH)_2 \\rightarrow 2\"X\" + 3 CaSO_4$ میں \"X\" کی نشاندہی کریں۔ (TSTET 20 Jan 2025)",
    "options": [
      "AlSO₄",
      "Al₂(OH)₃",
      "Al₂O₃",
      "Al(OH)₃"
    ],
    "correct": "Al(OH)₃",
    "explanation": "یہ ایک دوہرا ہٹاؤ (double displacement) کا تعامل ہے جہاں تعامل کرنے والے مادوں کے کیٹائنز اور اینائنز اپنے ساتھیوں کو تبدیل کرتے ہیں۔ $Al_2(SO_4)_3$ سے ایلومینیم ($Al^{3+}$) $Ca(OH)_2$ سے ہائیڈرو آکسائیڈ ($OH^-$) کے ساتھ مل جاتا ہے۔ چونکہ ایلومینیم پر +3 چارج اور ہائیڈرو آکسائیڈ پر -1 چارج ہوتا ہے، اس لیے نتیجے میں بننے والا مرکب ایلومینیم ہائیڈرو آکسائیڈ ہے، جس کا فارمولا **Al(OH)₃** ہے۔ متوازن مساوات $Al_2(SO_4)_3 + 3 Ca(OH)_2 \\rightarrow 2 Al(OH)_3 + 3 CaSO_4$ ہے۔"
  },
  {
    "id": "493",
    "text": "Amber colour of urine is due to. (TSTET 20 Jan 2025)\nپیشاب کا عنبری رنگ کس وجہ سے ہوتا ہے۔ (TSTET 20 Jan 2025)",
    "options": [
      "Urochrome\nیوروکروم",
      "Biliverdin\nبلیورڈن",
      "Bilirubin\nبلیروبن",
      "Chlorides\nکلورائیڈز"
    ],
    "correct": "Urochrome",
    "explanation": "پیشاب کا عام پیلا یا عنبری رنگ **یوروکروم** نامی ایک رنگت کی وجہ سے ہوتا ہے، جسے یوربلن بھی کہا جاتا ہے۔ یہ رنگت ہیموگلوبن کے ٹوٹنے سے بننے والی ایک میٹابولک ضمنی پیداوار ہے، جو خون کے سرخ خلیوں میں آکسیجن لے جانے والا پروٹین ہے۔"
  },
  {
    "id": "494",
    "text": "Cuscuta develops special roots which penetrate into the tissues of the host plant and absorbs food materials from it. These special roots are called... (TSTET 20 Jan 2025)\nکسکوٹا (امر بیل) خاص جڑیں تیار کرتا ہے جو میزبان پودے کے بافتوں میں داخل ہو کر اس سے غذائی مواد جذب کرتی ہیں۔ ان خاص جڑوں کو کہتے ہیں... (TSTET 20 Jan 2025)",
    "options": [
      "hooks\nہکس",
      "aerial roots\nہوائی جڑیں",
      "haustoria\nہاسٹوریا",
      "clinging roots\nچپکنے والی جڑیں"
    ],
    "correct": "haustoria",
    "explanation": "کسکوٹا (جسے ڈوڈر یا امر بیل بھی کہا جاتا ہے) ایک طفیلی پودا ہے۔ یہ **ہاسٹوریا** نامی خاص، جڑ نما ساختوں کا استعمال کرتا ہے تاکہ میزبان پودے کے وعائی بافتوں (زائلم اور فلوئم) میں داخل ہو سکے۔ ان ہاسٹوریا کے ذریعے، کسکوٹا براہ راست میزبان سے پانی اور غذائی اجزاء حاصل کرتا ہے۔"
  },
  {
    "id": "495",
    "text": "One of the following is NOT a micro-arthropod. (TSTET 20 Jan 2025)\nمندرجہ ذیل میں سے ایک مائیکرو آرتھروپوڈ نہیں ہے۔ (TSTET 20 Jan 2025)",
    "options": [
      "Cyclops\nسائکلپس",
      "Scabies mite\nخارش کا کیڑا",
      "Daphnia\nڈیفنیا",
      "Chlamydomonas\nکلیمائڈوموناس"
    ],
    "correct": "Chlamydomonas",
    "explanation": "مائیکرو آرتھروپوڈ فائلم آرتھروپوڈا کا ایک بہت چھوٹا رکن ہے۔ \n* **سائکلپس** اور **ڈیفنیا** چھوٹے کرسٹیشین ہیں۔ \n* **خارش کا کیڑا** ایک چھوٹا ارکنیڈ ہے۔ \nیہ تینوں مائیکرو آرتھروپوڈ ہیں۔ تاہم، **کلیمائڈوموناس** یک خلوی سبز الجی کی ایک جنس ہے، جس کا تعلق کنگڈم پروٹسٹا سے ہے۔ یہ جانور نہیں ہے اور اس لیے آرتھروپوڈ بھی نہیں ہے۔"
  },
  {
    "id": "496",
    "text": "Arrange the following Taxonomical Categories in correct ascending order. (TSTET 20 Jan 2025)\nمندرجہ ذیل ٹیکسونومیکل زمروں کو صحیح صعودی ترتیب میں ترتیب دیں۔ (TSTET 20 Jan 2025)",
    "options": [
      "D, C, B, E, F, A, G",
      "D, G, E, C, B, F, A",
      "G, D, F, A, B, E, C",
      "E, F, G, A, B, C, D"
    ],
    "correct": "D, G, E, C, B, F, A",
    "explanation": "معیاری حیاتیاتی درجہ بندی کا صعودی ترتیب (سب سے مخصوص سے سب سے عام رینک تک) یہ ہے: نوع، جنس، خاندان، طبقہ، جماعت، فائلم، مملکت۔ اس ترتیب کو دیے گئے حروف سے ملانے پر:\n* **D)** نوع (Species) \n* **G)** جنس (Genus) \n* **E)** خاندان (Family) \n* **C)** طبقہ (Order) \n* **B)** جماعت (Class) \n* **F)** فائلم (Phylum) \n* **A)** مملکت (Kingdom) \nصحیح ترتیب D, G, E, C, B, F, A ہے۔"
  },
  {
    "id": "497",
    "text": "This layer of skin is made up of elastic connective tissue and contains Sweat glands and Sebaceous glands. (TSTET 20 Jan 2025)\nجلد کی یہ تہہ لچکدار جوڑنے والے بافتوں سے بنی ہوتی ہے اور اس میں پسینے کے غدود اور روغنی غدود ہوتے ہیں۔ (TSTET 20 Jan 2025)",
    "options": [
      "Malpighian layer\nمیلپیگین تہہ",
      "Middle granular layer\nدرمیانی دانے دار تہہ",
      "Stratum corneum\nاسٹریٹم کورنیم",
      "Dermis\nڈرمس"
    ],
    "correct": "Dermis",
    "explanation": "جلد دو اہم تہوں پر مشتمل ہوتی ہے: بیرونی ایپی ڈرمس اور اندرونی ڈرمس۔ ایپی ڈرمس اپیتھیلیل خلیوں پر مشتمل ہوتی ہے اور اس کی کئی ذیلی تہیں ہوتی ہیں (بشمول میلپیگین تہہ، دانے دار تہہ، اور اسٹریٹم کورنیم) لیکن اس میں غدود اور جوڑنے والے بافتے نہیں ہوتے۔ **ڈرمس**، جو ایپی ڈرمس کے نیچے واقع ہے، لچکدار جوڑنے والے بافتوں سے بنی ہوتی ہے اور اس میں خون کی نالیاں، اعصاب، بالوں کے follicles، پسینے کے غدود، اور روغنی (تیل) غدود جیسی ساختیں ہوتی ہیں۔"
  },
  {
    "id": "498",
    "text": "In this year the Government of India declared the Kolleru lake as Bird Sanctuary. (TSTET 20 Jan 2025)\nاس سال حکومت ہند نے کولیرو جھیل کو پرندوں کی پناہ گاہ قرار دیا۔ (TSTET 20 Jan 2025)",
    "options": [
      "1988",
      "1997",
      "1999",
      "1989"
    ],
    "correct": "1999",
    "explanation": "حکومت ہند نے آندھرا پردیش میں میٹھے پانی کی ایک بڑی جھیل کولیرو جھیل کو نومبر **1999** میں وائلڈ لائف پروٹیکشن ایکٹ 1972 کے تحت جنگلی حیات کی پناہ گاہ قرار دیا۔ اسے 2002 میں رامسر کنونشن کے تحت بین الاقوامی اہمیت کی حامل آب گاہ بھی قرار دیا گیا تھا۔"
  },
  {
    "id": "499",
    "text": "Read the following Assersion and Reason: A: When the cells divide mitotically, the daughter cells always have the same number of chromosomes. R: Mitosis takes place in all body cells which retains the same number of chromosomes and before this mitotic division, the chromosomes are replicated in a parent cell. (TSTET 20 Jan 2025)\nمندرجہ ذیل دعویٰ اور وجہ کو پڑھیں: A: جب خلیے مائٹوسس کے ذریعے تقسیم ہوتے ہیں، تو بیٹی خلیوں میں ہمیشہ کروموسوم کی تعداد یکساں ہوتی ہے۔ R: مائٹوسس جسم کے تمام خلیوں میں ہوتا ہے جو کروموسوم کی ایک ہی تعداد کو برقرار رکھتا ہے اور اس مائٹوٹک تقسیم سے پہلے، کروموسوم بنیادی خلیے میں نقل کیے جاتے ہیں۔ (TSTET 20 Jan 2025)",
    "options": [
      "A is correct and R is incorrect.\nA صحیح ہے اور R غلط ہے۔",
      "Both A and R are correct but R is not the correct explanation of A.\nA اور R دونوں صحیح ہیں لیکن R, A کی صحیح وضاحت نہیں ہے۔",
      "A is incorrect and R is correct.\nA غلط ہے اور R صحیح ہے۔",
      "Both A and R are correct and R is the correct explanation of A.\nA اور R دونوں صحیح ہیں اور R, A کی صحیح وضاحت ہے۔"
    ],
    "correct": "Both A and R are correct and R is the correct explanation of A.",
    "explanation": "دعویٰ (A) مائٹوسس کے نتیجے کی صحیح تعریف ہے۔ وجہ (R) بھی صحیح ہے کیونکہ یہ اس میکانزم کو بیان کرتی ہے جو اس نتیجے کو یقینی بناتا ہے: ڈی این اے (کروموسوم) مائٹوسس شروع ہونے سے پہلے انٹرفیس کے دوران نقل کیا جاتا ہے، تاکہ ہر بیٹی خلیہ ایک مکمل، یکساں سیٹ حاصل کر سکے۔ لہذا، R, A کی صحیح وضاحت ہے۔"
  },
  {
    "id": "500",
    "text": "The colour of blood in snails is. (TSTET 20 Jan 2025)\nگھونگوں میں خون کا رنگ ہوتا ہے۔ (TSTET 20 Jan 2025)",
    "options": [
      "blue\nنیلا",
      "red\nسرخ",
      "green\nسبز",
      "white\nسفید"
    ],
    "correct": "blue",
    "explanation": "گھونگوں (اور بہت سے دوسرے مولسکس اور آرتھروپوڈز) کا خون آکسیجن ملنے پر **نیلا** ہوتا ہے۔ اس کی وجہ یہ ہے کہ ان کا خون، جسے ہیمولیمف کہا جاتا ہے، میں آکسیجن کی نقل و حمل کے لیے ہیموسیانن نامی تانبے پر مبنی پروٹین ہوتا ہے، جبکہ ریڑھ کی ہڈی والے جانوروں میں لوہے پر مبنی ہیموگلوبن ہوتا ہے جو خون کو سرخ بناتا ہے۔ جب آکسیجن سے محروم ہو جاتا ہے تو ہیموسیانن بے رنگ ہوتا ہے۔"
  },
  {
    "id": "501",
    "text": "Which of the following DOES NOT live in the Abyssal oceanic zone? (TSTET 20 Jan 2025)\nمندرجہ ذیل میں سے کون ابیسل سمندری زون میں نہیں رہتا؟ (TSTET 20 Jan 2025)",
    "options": [
      "Angler fish\nاینگلر مچھلی",
      "Brittle star\nبرٹل اسٹار",
      "Tripod fish\nٹرائی پوڈ مچھلی",
      "Plankton\nپلینکٹن"
    ],
    "correct": "Plankton",
    "explanation": "ابیسل زون سمندر کا گہرا حصہ ہے (4,000 میٹر سے نیچے) جہاں سورج کی روشنی نہیں ہوتی۔ اینگلر مچھلی، برٹل اسٹار، اور ٹرائی پوڈ مچھلی سب اس تاریک، زیادہ دباؤ والے ماحول میں زندگی کے لیے موافق ہیں۔ **پلینکٹن**، خاص طور پر فائٹوپلینکٹن، خوردبینی جاندار ہیں جو توانائی کے لیے ضیائی تالیف پر انحصار کرتے ہیں۔ چونکہ ضیائی تالیف کے لیے سورج کی روشنی کی ضرورت ہوتی ہے، اس لیے وہ سمندر کی اوپری، روشن تہوں (فوٹک زون) میں پائے جاتے ہیں، ابیسل زون میں نہیں۔"
  },
  {
    "id": "502",
    "text": "Montreal protocol is related to. (TSTET 20 Jan 2025)\nمونٹریال پروٹوکول کا تعلق کس سے ہے۔ (TSTET 20 Jan 2025)",
    "options": [
      "Protection of ozone layer\nاوزون کی تہہ کا تحفظ",
      "Global warming (Green house effect)\nگلوبل وارمنگ (گرین ہاؤس اثر)",
      "Protecting fresh water lakes from pollution\nمیٹھے پانی کی جھیلوں کو آلودگی سے بچانا",
      "Bio-diversity conservation\nحیاتیاتی تنوع کا تحفظ"
    ],
    "correct": "Protection of ozone layer",
    "explanation": "مونٹریال پروٹوکول ایک تاریخی بین الاقوامی معاہدہ ہے، جس پر 1987 میں دستخط ہوئے، جو خاص طور پر **اوزون کی تہہ کے تحفظ** کے لیے بنایا گیا تھا۔ اس کا بنیادی مقصد ان مادوں، جیسے کلورو فلورو کاربن (CFCs)، کی پیداوار اور استعمال کو مرحلہ وار ختم کرنا ہے جو اسٹراٹاسفیرک اوزون کی تہہ کو ختم کرنے کے ذمہ دار ہیں۔"
  },
  {
    "id": "505",
    "text": "Ramana, an 8th-grade student, changed his opinion on a certain topic after receiving new information. This reflects his... (TSTET 20 Jan 2025)\nآٹھویں جماعت کے طالب علم رمنا نے نئی معلومات ملنے کے بعد ایک خاص موضوع پر اپنی رائے بدل دی۔ یہ اس کی عکاسی کرتا ہے... (TSTET 20 Jan 2025)",
    "options": [
      "Scientific enquiry\nسائنسی تفتیش",
      "Scientific attitude\nسائنسی رویہ",
      "Scientific interest\nسائنسی دلچسپی",
      "Scientific appreciation\nسائنسی قدردانی"
    ],
    "correct": "Scientific attitude",
    "explanation": "**سائنسی رویہ** کی خصوصیات میں کھلے ذہن، معروضیت، تجسس، اور نئے، معتبر شواہد پیش کیے جانے پر اپنے نتائج پر نظر ثانی کرنے یا انہیں تبدیل کرنے کی آمادگی شامل ہے۔ رمنا کا نئی معلومات کی بنیاد پر اپنی رائے تبدیل کرنے کا عمل سائنسی رویہ ظاہر کرنے کی ایک بہترین مثال ہے۔"
  },
  {
    "id": "506",
    "text": "Among the following, which best describes the \"Demonstration Method\" in science Teaching methods? (TSTET 20 Jan 2025)\nسائنس کے تدریسی طریقوں میں، مندرجہ ذیل میں سے کون \"مظاہرے کے طریقے\" کی بہترین وضاحت کرتا ہے؟ (TSTET 20 Jan 2025)",
    "options": [
      "Students actively engage in hands-on experiments without teacher involvement.\nطلباء استاد کی شمولیت کے بغیر عملی تجربات میں فعال طور پر مشغول ہوتے ہیں۔",
      "Students watch videos on scientific phenomena and discuss them in groups.\nطلباء سائنسی مظاہر پر ویڈیوز دیکھتے ہیں اور ان پر گروپس میں بحث کرتے ہیں۔",
      "Students conduct experiments individually and report their findings.\nطلباء انفرادی طور پر تجربات کرتے ہیں اور اپنے نتائج کی اطلاع دیتے ہیں۔",
      "The teacher performs an experiment and explains the process and results to students.\nاستاد ایک تجربہ کرتا ہے اور طلباء کو عمل اور نتائج کی وضاحت کرتا ہے۔"
    ],
    "correct": "The teacher performs an experiment and explains the process and results to students.",
    "explanation": "مظاہرے کا طریقہ استاد پر مرکوز ایک نقطہ نظر ہے۔ اس طریقے میں، **استاد ایک سائنسی اصول یا تصور کی وضاحت کے لیے کلاس کے سامنے ایک تجربہ یا سرگرمی کرتا ہے**۔ طلباء کا کردار بنیادی طور پر مظاہرے کا مشاہدہ کرنا اور استاد کی عمل اور نتائج کی وضاحت سننا ہوتا ہے۔"
  },
  {
    "id": "507",
    "text": "Among the following, this is NOT a characteristic of a good science textbook according to Vogel. (TSTET 20 Jan 2025)\nووگل کے مطابق، مندرجہ ذیل میں سے یہ ایک اچھی سائنس کی درسی کتاب کی خصوصیت نہیں ہے۔ (TSTET 20 Jan 2025)",
    "options": [
      "Using complex terminology and vocabulary\nپیچیدہ اصطلاحات اور الفاظ کا استعمال",
      "Clear and simple language\nواضح اور سادہ زبان",
      "Logical and systematic presentation of concepts\nتصورات کی منطقی اور منظم پیشکش",
      "Engaging illustrations and examples\nدلچسپ تصاویر اور مثالیں"
    ],
    "correct": "Using complex terminology and vocabulary",
    "explanation": "تدریسی اصولوں کے مطابق، ایک اچھی درسی کتاب سیکھنے والے کے لیے قابل رسائی اور قابل فہم ہونی چاہیے۔ لہذا، اسے واضح اور سادہ زبان استعمال کرنی چاہیے، منطقی پیشکش ہونی چاہیے، اور دلچسپ بصری مواد شامل ہونا چاہیے۔ **پیچیدہ اصطلاحات اور الفاظ کا استعمال** جو طلباء کی فہم کی سطح سے باہر ہو، ایک ناقص ڈیزائن شدہ درسی کتاب کی خصوصیت ہے، اچھی کتاب کی نہیں، کیونکہ یہ سیکھنے میں رکاوٹ پیدا کرتی ہے۔"
  },
  {
    "id": "508",
    "text": "\"A Unit is as large a block of related subject matter as can be over-viewed by the learner.\" The above definition of UNIT was given by. (TSTET 20 Jan 2025)\n\"ایک یونٹ متعلقہ مضمون کے مواد کا اتنا بڑا بلاک ہے جتنا کہ سیکھنے والا اس کا جائزہ لے سکتا ہے۔\" یونٹ کی مندرجہ بالا تعریف کس نے دی تھی۔ (TSTET 20 Jan 2025)",
    "options": [
      "Preston\nپریسٹن",
      "Morrison\nموریسن",
      "John Fredrik Herbert\nجان فریڈرک ہربرٹ",
      "Wisely\nوائزلی"
    ],
    "correct": "Preston",
    "explanation": "یہ مخصوص تعریف، جو سیکھنے والے کے نقطہ نظر سے ایک یونٹ کے علمی دائرہ کار پر زور دیتی ہے، وسیع پیمانے پر **پریسٹن** سے منسوب ہے۔ ان کا کام نصاب میں تدریس کی منصوبہ بندی کے یونٹ طریقہ کی ترقی میں اہم تھا۔"
  },
  {
    "id": "509",
    "text": "This step of the lesson plan includes revisiting the concepts that are learnt during the teaching session and helps in review of the lesson as well as evaluation of the knowledge and understanding gained by the learners. (TSTET 20 Jan 2025)\nسبق کے منصوبے کے اس مرحلے میں تدریسی سیشن کے دوران سیکھے گئے تصورات پر نظر ثانی شامل ہے اور یہ سبق کے جائزے کے ساتھ ساتھ سیکھنے والوں کے حاصل کردہ علم اور فہم کی تشخیص میں بھی مدد کرتا ہے۔ (TSTET 20 Jan 2025)",
    "options": [
      "Presentation\nپیشکش",
      "Follow-up activity\nفالو اپ سرگرمی",
      "Introduction\nتعارف",
      "Recapitulation\nاعادہ"
    ],
    "correct": "Recapitulation",
    "explanation": "**اعادہ** سبق کے اختتام پر وہ مرحلہ ہے جہاں استاد پڑھائے گئے اہم نکات اور تصورات کا خلاصہ کرتا ہے۔ اس کا مقصد سیکھنے کو تقویت دینا، طلباء کے لیے معلومات کو مستحکم کرنا، اور استاد کو یہ جانچنے کا ایک فوری طریقہ فراہم کرنا ہے کہ آیا سیکھنے کے مقاصد حاصل ہوئے ہیں یا نہیں۔"
  },
  {
    "id": "510",
    "text": "One of the following is NOT a merit of Deductive Approach. (TSTET 20 Jan 2025)\nمندرجہ ذیل میں سے ایک استخراجی نقطہ نظر (Deductive Approach) کی خوبی نہیں ہے۔ (TSTET 20 Jan 2025)",
    "options": [
      "It saves time\nیہ وقت بچاتا ہے",
      "It encourages memorisation of facts\nیہ حقائق کو یاد کرنے کی حوصلہ افزائی کرتا ہے",
      "It simplifies teacher's work\nیہ استاد کے کام کو آسان بناتا ہے",
      "It is an effective way of teaching difficult topics\nیہ مشکل موضوعات کو پڑھانے کا ایک مؤثر طریقہ ہے"
    ],
    "correct": "It encourages memorisation of facts",
    "explanation": "استخراجی نقطہ نظر (عام اصول سے مخصوص مثال تک) کے کئی فوائد ہیں، جن میں وقت کی بچت اور استاد کے کام کو آسان بنانا شامل ہے۔ تاہم، اس کی اہم تنقیدوں یا **خامیوں** میں سے ایک یہ ہے کہ یہ گہری تصوراتی سمجھ کو فروغ دیے بغیر **حقائق کو رٹنے کی حوصلہ افزائی** کر سکتا ہے۔ طلباء کسی فارمولے کو یہ جانے بغیر لاگو کرنا سیکھ سکتے ہیں کہ یہ کیوں کام کرتا ہے۔ لہذا، جدید تدریسیات میں یادداشت کی حوصلہ افزائی کو اس نقطہ نظر کی خوبی نہیں سمجھا جاتا۔"
  },
  {
    "id": "511",
    "text": "An anemometer measures this property of the air/wind. (TSTET 20 Jan 2025)\nایک انیمومیٹر ہوا/آندھی کی اس خاصیت کی پیمائش کرتا ہے۔ (TSTET 20 Jan 2025)",
    "options": [
      "humidity\nنمی",
      "speed and direction\nرفتار اور سمت",
      "heat conduction\nحرارت کی ترسیل",
      "pollution\nآلودگی"
    ],
    "correct": "speed and direction",
    "explanation": "انیمومیٹر ایک موسمیاتی آلہ ہے جو ہوا کی رفتار کی پیمائش کے لیے استعمال ہوتا ہے۔ کچھ ورژن ہوا کی سمت کا بھی تعین کر سکتے ہیں۔ نمی کی پیمائش ہائیگرومیٹر سے کی جاتی ہے، حرارت کی ترسیل کا تعلق حرارتی توانائی کی منتقلی سے ہے، اور آلودگی کی سطح مخصوص گیس یا ذراتی سینسر سے ماپی جاتی ہے۔"
  },
  {
    "id": "512",
    "text": "The first outer planet in solar system counted from the Sun (TSTET 20 Jan 2025)\nنظام شمسی میں سورج سے شمار کیا جانے والا پہلا بیرونی سیارہ (TSTET 20 Jan 2025)",
    "options": [
      "Mars\nمریخ",
      "Mercury\nعطارد",
      "Saturn\nزحل",
      "Jupiter\nمشتری"
    ],
    "correct": "Jupiter",
    "explanation": "سیاروں کی ترتیب سورج سے اس طرح ہے: عطارد، زہرہ، زمین، مریخ (اندرونی سیارے)، اس کے بعد سیارچوں کی پٹی، اور پھر مشتری، زحل، یورینس، اور نیپچون (بیرونی سیارے)۔ لہذا، مشتری پہلا بیرونی سیارہ ہے۔"
  },
  {
    "id": "513",
    "text": "Identify the correct set of vision defects (myopia and hypermetropia), along with the type of lens used for their correction. (TSTET 20 Jan 2025)\nنظر کے نقائص (مایوپیا اور ہائپر میٹروپیا) کے صحیح سیٹ کی نشاندہی کریں، ساتھ ہی ان کی اصلاح کے لیے استعمال ہونے والے عدسے کی قسم بھی بتائیں۔ (TSTET 20 Jan 2025)",
    "options": [
      "Myopia Plano Convex lens\nمایوپیا - پلانو محدب عدسہ",
      "Hypermetropia- Plano Concave lens\nہائپر میٹروپیا - پلانو مقعر عدسہ",
      "Myopia- Concave lens\nمایوپیا - مقعر عدسہ",
      "Hypermetropia- Concave lens\nہائپر میٹروپیا - مقعر عدسہ"
    ],
    "correct": "Myopia- Concave lens",
    "explanation": "مایوپیا، یا قریب نظری، اس وقت ہوتی ہے جب آنکھ ریٹنا پر تصویر بنانے کے بجائے ریٹنا کے سامنے تصویر مرکوز کرتی ہے۔ اس کی اصلاح ایک منتشر کرنے والے (مقعر) عدسے کا استعمال کرتے ہوئے کی جاتی ہے۔ ہائپر میٹروپیا، یا بعید نظری، کی اصلاح ایک مرتکز کرنے والے (محدب) عدسے کا استعمال کرتے ہوئے کی جاتی ہے۔ لہذا، مایوپیا کو مقعر عدسے کے ساتھ جوڑنا درست ہے۔"
  },
  {
    "id": "514",
    "text": "Identify the correct statement from the following about sound waves. (TSTET 20 Jan 2025)\nآواز کی لہروں کے بارے میں مندرجہ ذیل میں سے صحیح بیان کی نشاندہی کریں۔ (TSTET 20 Jan 2025)",
    "options": [
      "Sound waves are longitudinal waves and mechanical waves.\nآواز کی لہریں طولی لہریں اور میکانیکی لہریں ہیں۔",
      "Sound waves are transverse waves and do not require a medium to travel.\nآواز کی لہریں عرضی لہریں ہیں اور انہیں سفر کے لیے کسی واسطے کی ضرورت نہیں ہوتی۔",
      "Sound waves are electromagnetic waves and can travel through a vacuum.\nآواز کی لہریں برقی مقناطیسی لہریں ہیں اور خلا میں سفر کر سکتی ہیں۔",
      "Sound waves are longitudinal waves but do not require a medium to travel.\nآواز کی لہریں طولی لہریں ہیں لیکن انہیں سفر کے لیے کسی واسطے کی ضرورت نہیں ہوتی۔"
    ],
    "correct": "Sound waves are longitudinal waves and mechanical waves.",
    "explanation": "آواز کی لہریں میکانیکی لہریں ہیں، جس کا مطلب ہے کہ انہیں سفر کرنے کے لیے ایک واسطے (ٹھوس، مائع، یا گیس) کی ضرورت ہوتی ہے اور وہ خلا میں نہیں پھیل سکتیں۔ وہ طولی لہریں بھی ہیں کیونکہ واسطے کے ذرات کی تھرتھراہٹ توانائی کی نقل و حمل کی سمت کے متوازی ہوتی ہے۔"
  },
  {
    "id": "515",
    "text": "If an object is in non-uniform motion, it means that: (TSTET 20 Jan 2025)\nاگر کوئی جسم غیر یکساں حرکت میں ہے، تو اس کا مطلب ہے کہ: (TSTET 20 Jan 2025)",
    "options": [
      "Its speed is constant but direction changes.\nاس کی رفتار مستقل ہے لیکن سمت بدلتی ہے۔",
      "Its velocity remains constant.\nاس کی ولاسٹی مستقل رہتی ہے۔",
      "Its speed is changing with time.\nاس کی رفتار وقت کے ساتھ بدل رہی ہے۔",
      "It moves in a straight line.\nیہ ایک سیدھی لکیر میں حرکت کرتا ہے۔"
    ],
    "correct": "Its speed is changing with time.",
    "explanation": "غیر یکساں حرکت اس وقت ہوتی ہے جب کسی جسم کی ولاسٹی وقت کے ساتھ بدلتی ہے۔ ولاسٹی ایک ویکٹر ہے جس میں مقدار (رفتار) اور سمت دونوں ہوتی ہیں۔ رفتار میں تبدیلی، سمت میں تبدیلی، یا دونوں، غیر یکساں حرکت (اسراع) کا باعث بنتی ہے۔ انتخابوں میں سے، بدلتی ہوئی رفتار غیر یکساں حرکت کی ایک قطعی خصوصیت ہے۔ جبکہ مستقل رفتار کے ساتھ بدلتی ہوئی سمت (آپشن 1) بھی غیر یکساں حرکت ہے، بدلتی ہوئی رفتار (آپشن 3) ایک زیادہ عمومی اور براہ راست جواب ہے۔"
  },
  {
    "id": "516",
    "text": "How many 220 Ω resistors (connected in parallel) are required to carry 5A current on a 220 V line? (TSTET 20 Jan 2025)\n220 V لائن پر 5A کرنٹ لے جانے کے لیے کتنے 220 Ω کے رزسٹرز (متوازی جڑے ہوئے) درکار ہیں؟ (TSTET 20 Jan 2025)",
    "options": [
      "1",
      "2",
      "5",
      "10"
    ],
    "correct": "5",
    "explanation": "سب سے پہلے، اوہم کے قانون ($V = IR$) کا استعمال کرتے ہوئے درکار کل مساوی مزاحمت ($R_{eq}$) کا حساب لگائیں۔ $R_{eq} = V / I = 220V / 5A = 44Ω$۔ جب 'n' یکساں رزسٹرز (R) متوازی جڑے ہوں، تو مساوی مزاحمت کا فارمولا $R_{eq} = R / n$ ہوتا ہے۔ قدریں ڈالنے پر: $44Ω = 220Ω / n$۔ n کے لیے حل کرنے پر $n = 220 / 44 = 5$ آتا ہے۔ اس طرح، 5 رزسٹرز کی ضرورت ہے۔"
  },
  {
    "id": "517",
    "text": "Tincture of iodine is a mixture of iodine and (TSTET 20 Jan 2025)\nآئیوڈین کا ٹنکچر آئیوڈین اور کس کا مرکب ہے (TSTET 20 Jan 2025)",
    "options": [
      "Ethanol\nایتھنول",
      "Water\nپانی",
      "Acetone\nایسیٹون",
      "Glycerine\nگلیسرین"
    ],
    "correct": "Ethanol",
    "explanation": "آئیوڈین کا ٹنکچر ایک جراثیم کش محلول ہے۔ یہ آئیوڈین (حل پذیر) پر مشتمل ہوتا ہے جو ایک محلل میں حل ہوتا ہے، جو عام طور پر ایتھنول اور پانی کا مرکب ہوتا ہے۔ ایتھنول بنیادی محلل جزو ہے۔"
  },
  {
    "id": "518",
    "text": "Among the following. the inert gas having the lowest atomic number is (TSTET 20 Jan 2025)\nمندرجہ ذیل میں سے، سب سے کم ایٹمی نمبر والی غیر عامل گیس ہے (TSTET 20 Jan 2025)",
    "options": [
      "Xenon\nزینون",
      "Neon\nنیون",
      "Crypton\nکرپٹون",
      "Radon\nریڈون"
    ],
    "correct": "Neon",
    "explanation": "دی گئی غیر عامل گیسوں کے ایٹمی نمبر یہ ہیں: نیون (Ne) = 10، کرپٹون (Kr) = 36، زینون (Xe) = 54، اور ریڈون (Rn) = 86۔ ان اختیارات میں سے، نیون کا ایٹمی نمبر سب سے کم ہے۔"
  },
  {
    "id": "519",
    "text": "Visible light wave with maximum wavelength corresponds to the colour (TSTET 20 Jan 2025)\nزیادہ سے زیادہ طول موج والی نظر آنے والی روشنی کی لہر کس رنگ سے مطابقت رکھتی ہے (TSTET 20 Jan 2025)",
    "options": [
      "violet\nبنفشی",
      "blue\nنیلا",
      "green\nسبز",
      "red\nسرخ"
    ],
    "correct": "red",
    "explanation": "نظر آنے والی روشنی کا طیف، بڑھتی ہوئی طول موج کی ترتیب میں، مخفف VIBGYOR (بنفشی، نیل، نیلا، سبز، پیلا، نارنجی، سرخ) سے ظاہر ہوتا ہے۔ سرخ روشنی کی طول موج سب سے لمبی ہوتی ہے، جبکہ بنفشی روشنی کی سب سے چھوٹی ہوتی ہے۔"
  },
  {
    "id": "520",
    "text": "The acid found in the body of ants is (TSTET 20 Jan 2025)\nچیونٹیوں کے جسم میں پایا جانے والا تیزاب ہے (TSTET 20 Jan 2025)",
    "options": [
      "acetic acid\nایسیٹک ایسڈ",
      "formic acid\nفارمک ایسڈ",
      "citric acid\nسٹرک ایسڈ",
      "phosphoric acid\nفاسفورک ایسڈ"
    ],
    "correct": "formic acid",
    "explanation": "چیونٹیاں، خاص طور پر جب وہ کاٹتی یا ڈنک مارتی ہیں، تو فارمک ایسڈ (منظم طور پر میتھانوک ایسڈ کہا جاتا ہے) داخل کرتی ہیں۔ 'فارمک' کا نام 'فارمیکا' سے ماخوذ ہے، جو چیونٹی کے لیے لاطینی لفظ ہے۔ یہی تیزاب درد اور جلن کا سبب بنتا ہے۔"
  },
  {
    "id": "521",
    "text": "You are a chemist working in a laboratory to purify gold. You need to select a suitable solution that can dissolve gold. Which of the following solutions should you choose? (TSTET 20 Jan 2025)\nآپ ایک کیمیا دان ہیں جو سونے کو خالص کرنے کے لیے لیبارٹری میں کام کر رہے ہیں۔ آپ کو ایک ایسا محلول منتخب کرنے کی ضرورت ہے جو سونے کو تحلیل کر سکے۔ مندرجہ ذیل میں سے آپ کو کون سا محلول منتخب کرنا چاہیے؟",
    "options": [
      "Aqua regia\nآکوا ریجیا",
      "Blue vitriol\nنیلا تھوتھا",
      "Concentrated ammonia\nمرتکز امونیا",
      "Caustic soda\nکاسٹک سوڈا"
    ],
    "correct": "Aqua regia",
    "explanation": "سونا ایک عمدہ دھات ہے، جس کا مطلب ہے کہ یہ زنگ اور تیزاب کے حملے کے خلاف بہت مزاحم ہے۔ یہ ایک تیزاب میں تحلیل نہیں ہوتا۔ تاہم، یہ آکوا ریجیا میں تحلیل ہو جاتا ہے، جو مرتکز نائٹرک ایسڈ اور ہائیڈروکلورک ایسڈ کا ایک انتہائی corrosive مرکب ہے، عام طور پر 1:3 کے حجم کے تناسب میں۔"
  },
  {
    "id": "522",
    "text": "Among the following, identify the non-polar solvent commonly used to dissolve non-polar substances like oils and grease. (TSTET 20 Jan 2025)\nمندرجہ ذیل میں سے، اس غیر قطبی سالوینٹ کی نشاندہی کریں جو عام طور پر غیر قطبی مادوں جیسے تیل اور چکنائی کو تحلیل کرنے کے لیے استعمال ہوتا ہے۔",
    "options": [
      "Water\nپانی",
      "Ethanol\nایتھنول",
      "Acetone\nایسیٹون",
      "Hexane\nہیکسین"
    ],
    "correct": "Hexane",
    "explanation": "کیمیائی اصول 'جیسا ویسے کو تحلیل کرتا ہے' کا مطلب ہے کہ غیر قطبی مادے غیر قطبی سالوینٹس میں بہترین تحلیل ہوتے ہیں۔ تیل اور چکنائی غیر قطبی ہیں۔ پانی، ایتھنول اور ایسیٹون قطبی سالوینٹس ہیں۔ ہیکسین (C₆H₁₄) ایک غیر قطبی ہائیڈرو کاربن ہے، جو اسے تیل اور چکنائی کے لیے ایک مؤثر سالوینٹ بناتا ہے۔"
  },
  {
    "id": "523",
    "text": "One among the following is NOT an adaptation to temperature in plants. (TSTET 20 Jan 2025)\nمندرجہ ذیل میں سے ایک پودوں میں درجہ حرارت کے مطابق موافقت نہیں ہے۔",
    "options": [
      "Plants shedding leaves in temperate zones before the winter starts.\nمعتدل علاقوں میں سردیوں کے شروع ہونے سے پہلے پودوں کا پتے جھاڑنا۔",
      "Water salinity tolerance in Hydrilla.\nہائیڈریلا میں پانی کی نمکیات کو برداشت کرنا۔",
      "Thorny leaves in Xerophytic plants.\nزیروفائٹک پودوں میں کانٹے دار پتے۔",
      "Ability to grow in low light intensity\nکم روشنی کی شدت میں بڑھنے کی صلاحیت"
    ],
    "correct": "Water salinity tolerance in Hydrilla.",
    "explanation": "درجہ حرارت کے مطابق موافقت ایک ایسی خصوصیت ہے جو پودے کو مخصوص حرارتی حالات میں زندہ رہنے میں مدد دیتی ہے۔ پتے جھاڑنا سردیوں کے لیے ایک موافقت ہے۔ کانٹے دار پتے صحراؤں میں گرمی کو ختم کرنے میں مدد کرسکتے ہیں۔ تاہم، پانی کی نمکیات کو برداشت کرنا ماحول کی کیمیائی ساخت (نمک کا مواد) کے مطابق ہے، نہ کہ اس کے درجہ حرارت کے۔"
  },
  {
    "id": "524",
    "text": "This type of papillae are located at the back of the tongue and the tastebuds around these are thought to be responsible for the identification of bitterness. (TSTET 20 Jan 2025)\nاس قسم کے پیپلی زبان کے پچھلے حصے میں واقع ہوتے ہیں اور ان کے ارد گرد موجود ذائقہ کی کلیاں کڑواہٹ کی شناخت کے لیے ذمہ دار سمجھی جاتی ہیں۔",
    "options": [
      "Foliate papillae\nفولیئٹ پیپلی",
      "Fungiform papillae\nفنگیفارم پیپلی",
      "Filiform papillae\nفلیفارم پیپلی",
      "Circumvallate papillae\nسرکومویلیٹ پیپلی"
    ],
    "correct": "Circumvallate papillae",
    "explanation": "سرکومویلیٹ پیپلی بڑے، گنبد نما ڈھانچے ہیں جو زبان کے پچھلے حصے میں V کی شکل میں ترتیب دیے گئے ہیں۔ یہ ایک خندق سے گھرے ہوتے ہیں اور ان میں متعدد ذائقہ کی کلیاں ہوتی ہیں، اور یہ خاص طور پر کڑوے ذائقوں کے لیے حساس ہوتے ہیں۔"
  },
  {
    "id": "525",
    "text": "When the kidneys stop working completely, our body is filled with extra water and waste products. this condition is known as (TSTET 20 Jan 2025)\nجب گردے مکمل طور پر کام کرنا چھوڑ دیتے ہیں، تو ہمارا جسم اضافی پانی اور فضلہ جات سے بھر جاتا ہے۔ اس حالت کو کیا کہا جاتا ہے؟",
    "options": [
      "Umami\nامامِی",
      "Uremic syndrome\nیوریمک سنڈروم",
      "Uremia\nیوریمیا",
      "Urinary tract infection\nپیشاب کی نالی کا انفیکشن"
    ],
    "correct": "Uremia",
    "explanation": "یوریمیا ایک ایسی حالت ہے جس میں خون میں یوریا اور دیگر فضلہ جات کی سطح بلند ہو جاتی ہے، جو اس وقت ہوتی ہے جب گردے انہیں فلٹر کرنے سے قاصر ہو جاتے ہیں۔ یہ گردے کی ناکامی کی ایک اہم علامت ہے۔ یوریمک سنڈروم یوریمیا کے نتیجے میں پیدا ہونے والی علامات کے مجموعے کو کہتے ہیں۔ امامِی ایک ذائقہ ہے، اور یو ٹی آئی ایک انفیکشن ہے۔"
  },
  {
    "id": "526",
    "text": "Match the following: A) Laminaria, B) Selaginella, C) Ginkgo, D) Sphagnum. With: i) Gymnosperms, ii) Bryophytes, iii) Algae, iv) Pteridophytes. (TSTET 20 Jan 2025)\nمندرجہ ذیل کو ملائیں: A) لیمینیریا، B) سیلاجینیلا، C) جنکگو، D) اسفگنم۔ کے ساتھ: i) جمنوسپرمز، ii) برائیوفائٹس، iii) الجی، iv) ٹیریڈوفائٹس۔",
    "options": [
      "Aiv; Biii; C-ii; Di",
      "A-iii; Biv; C-i; D-ii",
      "Aii; Biv; C-i; D - iii",
      "Aiii; Bii; Ci; Div"
    ],
    "correct": "A-iii; Biv; C-i; D-ii",
    "explanation": "صحیح حیاتیاتی درجہ بندی یہ ہے: لیمینیریا بھوری الجی (Algae) کی ایک قسم ہے۔ سیلاجینیلا ایک اسپائک ماس ہے، جس کا تعلق ٹیریڈوفائٹس (Pteridophytes) سے ہے۔ جنکگو ایک جمنوسپرم (Gymnosperm) ہے۔ اسفگنم ایک قسم کا پیٹ ماس ہے، جو ایک برائیوفائٹ (Bryophyte) ہے۔ لہذا، صحیح ملاپ A-iii، B-iv، C-i، D-ii ہے۔"
  },
  {
    "id": "527",
    "text": "These blood cells secrete Histamine, Serotonin. Heparin, etc., and are involved in inflamatory reactions (TSTET 20 Jan 2025)\nیہ خون کے خلیے ہسٹامین، سیروٹونن، ہیپرین وغیرہ خارج کرتے ہیں اور سوزشی رد عمل میں شامل ہوتے ہیں۔",
    "options": [
      "Basophils\nبیسوفلز",
      "Eosnophils\nایسینوفلز",
      "Erythrocytes\nاریتھروسائٹس",
      "Neutrophils\nنیوٹروفلز"
    ],
    "correct": "Basophils",
    "explanation": "بیسوفلز سفید خون کے خلیوں (گرینولوسائٹ) کی ایک قسم ہیں جو سوزشی اور الرجک رد عمل میں کلیدی کردار ادا کرتے ہیں۔ ان کے گرینولز میں ہسٹامین (ایک ویسوڈیلیٹر)، سیروٹونن، اور ہیپرین (ایک اینٹی کوگولنٹ) جیسے کیمیکلز ہوتے ہیں اور وہ انہیں خارج کرتے ہیں۔"
  },
  {
    "id": "528",
    "text": "Bacterial and Fungal enzymes degrade detritus into simpler inorganic substances. This process is called (TSTET 20 Jan 2025)\nبیکٹیریا اور فنگس کے انزائمز ڈیٹرٹس کو سادہ غیر نامیاتی مادوں میں توڑ دیتے ہیں۔ اس عمل کو کیا کہا جاتا ہے؟",
    "options": [
      "Humification\nہیومیفیکیشن",
      "Leaching\nلیچنگ",
      "Magnification\nمیگنیفیکیشن",
      "Catabolism\nکیٹابولزم"
    ],
    "correct": "Catabolism",
    "explanation": "گلنے سڑنے کے عمل میں، کیٹابولزم وہ مرحلہ ہے جہاں گلانے والے جاندار (جیسے بیکٹیریا اور فنگس) پیچیدہ نامیاتی مادے (ڈیٹرٹس) کو انزیمیٹک عمل کے ذریعے سادہ غیر نامیاتی مادوں میں توڑ دیتے ہیں۔ ہیومیفیکیشن ہیومس کی تشکیل ہے، اور لیچنگ مٹی کے ذریعے غذائی اجزاء کی حرکت ہے۔"
  },
  {
    "id": "529",
    "text": "In the process of human reproduction, this is formed around 12 weeks of pregnancy and becomes an important structure for nourishment of the embryo (TSTET 20 Jan 2025)\nانسانی تولید کے عمل میں، یہ حمل کے تقریباً 12 ہفتوں میں بنتا ہے اور جنین کی پرورش کے لیے ایک اہم ڈھانچہ بن جاتا ہے۔",
    "options": [
      "Yolk sac\nیوک سیک",
      "Amnion\nایمنیون",
      "Placenta\nپلاسینٹا",
      "Allantotis\nایلنٹوس"
    ],
    "correct": "Placenta",
    "explanation": "پلاسینٹا ایک اہم عضو ہے جو حمل کے دوران تیار ہوتا ہے، اور بچہ دانی کی دیوار سے جڑ جاتا ہے۔ تقریباً 12 ہفتوں (پہلے سہ ماہی کے آخر) تک، یہ مکمل طور پر بن جاتا ہے اور جنین کو غذائی اجزاء اور آکسیجن فراہم کرنے اور فضلہ جات کو ہٹانے کا کام سنبھال لیتا ہے۔"
  },
  {
    "id": "530",
    "text": "Which of the following part of human brain coordinates reflexes like swallowing, coughing, sneezing and vomiting? (TSTET 20 Jan 2025)\nانسانی دماغ کا مندرجہ ذیل میں سے کون سا حصہ نگلنے، کھانسنے، چھینکنے اور قے کرنے جیسے اضطراری افعال کو مربوط کرتا ہے؟",
    "options": [
      "Cerebellum\nسیریبلم",
      "Medulla oblongata\nمیڈولا اوبلونگاٹا",
      "Mid-brain\nدرمیانی دماغ",
      "Diencephalon\nڈائنسفلون"
    ],
    "correct": "Medulla oblongata",
    "explanation": "میڈولا اوبلونگاٹا، جو دماغی تنے میں واقع ہے، کئی اہم خودکار افعال کو کنٹرول کرتا ہے، بشمول سانس لینے، دل کی دھڑکن، اور بلڈ پریشر۔ یہ قے، کھانسی، چھینک اور نگلنے جیسے کئی اضطراری افعال کے مرکز کے طور پر بھی کام کرتا ہے۔"
  },
  {
    "id": "531",
    "text": "Read the following Assersion and Reason: A: When the cells divide mitotically, the daughter cells always have the same number of chromosomes. R: Mitosis takes place in all body cells which retains the same number of chromosomes and before this mitotic division, the chromosomes are replicated in a parent cell. (TSTET 20 Jan 2025)\nمندرجہ ذیل دعویٰ اور وجہ کو پڑھیں: A: جب خلیے مائٹوٹک طور پر تقسیم ہوتے ہیں، تو بیٹی خلیوں میں ہمیشہ کروموسوم کی تعداد یکساں ہوتی ہے۔ R: مائٹوسس جسم کے تمام خلیوں میں ہوتا ہے جو کروموسوم کی ایک ہی تعداد کو برقرار رکھتا ہے اور اس مائٹوٹک تقسیم سے پہلے، کروموسوم پیرنٹ سیل میں نقل کیے جاتے ہیں۔",
    "options": [
      "A is correct and R is incorrect.\nA صحیح ہے اور R غلط ہے۔",
      "Both A and R are correct but R is not the correct explanation of A.\nA اور R دونوں صحیح ہیں لیکن R, A کی صحیح وضاحت نہیں ہے۔",
      "A is incorrect and R is correct.\nA غلط ہے اور R صحیح ہے۔",
      "Both A and R are correct and R is the correct explanation of A.\nA اور R دونوں صحیح ہیں اور R, A کی صحیح وضاحت ہے۔"
    ],
    "correct": "Both A and R are correct and R is the correct explanation of A.",
    "explanation": "دعویٰ (A) مائٹوسس کے نتیجے کی صحیح تعریف ہے۔ وجہ (R) بھی درست ہے کیونکہ یہ اس میکانزم کو بیان کرتی ہے جو اس نتیجے کو یقینی بناتا ہے: ڈی این اے (کروموسوم) مائٹوسس شروع ہونے سے پہلے انٹرفیس کے دوران نقل کیا جاتا ہے، تاکہ ہر بیٹی خلیہ ایک مکمل، یکساں سیٹ حاصل کر سکے۔ لہذا، R, A کی صحیح وضاحت ہے۔"
  },
  {
    "id": "532",
    "text": "Which of the following are parasites? A) Yeast B) Mushrooms C) Cuscuta D) Leeches (TSTET 20 Jan 2025)\nمندرجہ ذیل میں سے کون سے طفیلی ہیں؟ A) خمیر B) کھمبیاں C) کسکوٹا D) جونکیں",
    "options": [
      "A & C only\nصرف A اور C",
      "B & D only\nصرف B اور D",
      "C & D only\nصرف C اور D",
      "A & D only\nصرف A اور D"
    ],
    "correct": "C & D only",
    "explanation": "ایک طفیلی میزبان جاندار پر یا اس کے اندر رہتا ہے، جس سے اسے نقصان پہنچتا ہے۔ خمیر اور کھمبیاں سیپروفائٹس ہیں (وہ مردہ نامیاتی مادے پر گزارا کرتے ہیں)۔ کسکوٹا (امر بیل) ایک طفیلی پودا ہے جو میزبان پودے سے غذائی اجزاء حاصل کرتا ہے۔ جونکیں طفیلی اینیلیڈز ہیں جو اپنے میزبانوں کے خون پر گزارا کرتی ہیں۔ لہذا، کسکوٹا اور جونکیں طفیلی ہیں۔"
  },
  {
    "id": "533",
    "text": "What does a food chain always start with? (TSTET 20 Jan 2025)\nغذائی زنجیر ہمیشہ کس سے شروع ہوتی ہے؟",
    "options": [
      "A herbivore\nایک سبزی خور",
      "The producer\nپیدا کرنے والا",
      "A carnivore\nایک گوشت خور",
      "Either a herbivore or producer\nیا تو ایک سبزی خور یا پیدا کرنے والا"
    ],
    "correct": "The producer",
    "explanation": "ایک غذائی زنجیر ایک ماحولیاتی نظام میں توانائی کے بہاؤ کو ظاہر کرتی ہے۔ یہ بہاؤ ہمیشہ پیدا کرنے والوں سے شروع ہوتا ہے—جیسے پودے یا الجی جو اپنی خوراک خود بناتے ہیں، عام طور پر ضیائی تالیف کے ذریعے۔ غذائی زنجیر میں دیگر تمام جاندار پیدا کرنے والوں کے ذریعے حاصل کی گئی توانائی پر انحصار کرتے ہیں۔"
  },
  {
    "id": "534",
    "text": "When heavy pressure is applied on salt solution which is separated from fresh water with semi permeable membrane, the water moves from salt solution to fresh water leaving the salt behind. Identify from the following the process involved in this (TSTET 20 Jan 2025)\nجب نمکین محلول پر بھاری دباؤ ڈالا جاتا ہے جو تازہ پانی سے نیم پارگمی جھلی کے ذریعے الگ کیا جاتا ہے، تو پانی نمکین محلول سے تازہ پانی کی طرف جاتا ہے اور نمک پیچھے رہ جاتا ہے۔ مندرجہ ذیل میں سے اس میں شامل عمل کی نشاندہی کریں۔",
    "options": [
      "Reverse osmosis\nمعکوس عمل نفوذ",
      "Diffusion\nنفوذ",
      "Osmosis\nعمل نفوذ",
      "Exosmosis\nبیرونی عمل نفوذ"
    ],
    "correct": "Reverse osmosis",
    "explanation": "عمل نفوذ پانی کا قدرتی بہاؤ ہے جو ایک کم مرتکز محلول سے زیادہ مرتکز محلول کی طرف نیم پارگمی جھلی کے ذریعے ہوتا ہے۔ معکوس عمل نفوذ میں زیادہ مرتکز جانب (نمکین محلول) پر بیرونی دباؤ ڈالا جاتا ہے تاکہ عمل نفوذ کے دباؤ پر قابو پایا جا سکے اور پانی کو مخالف سمت میں حرکت کرنے پر مجبور کیا جا سکے، جس سے نمک پیچھے رہ جاتا ہے۔ یہ پانی صاف کرنے کا ایک عام طریقہ ہے۔"
  },
  {
    "id": "535",
    "text": "Identify the correct statement among the following (TSTET 20 Jan 2025)\nمندرجہ ذیل میں سے صحیح بیان کی نشاندہی کریں۔",
    "options": [
      "Constructivist approach shifts emphasis from teaching to learning.\nتعمیراتی نقطہ نظر زور کو تدریس سے سیکھنے کی طرف منتقل کرتا ہے۔",
      "Constructivist approach shifts emphasis from learning to teaching.\nتعمیراتی نقطہ نظر زور کو سیکھنے سے تدریس کی طرف منتقل کرتا ہے۔",
      "Constructivist approach shifts emphasis from active learning to passive listening.\nتعمیراتی نقطہ نظر زور کو فعال سیکھنے سے غیر فعال سننے کی طرف منتقل کرتا ہے۔",
      "Constructivist approach shifts emphasis from teaching to listening.\nتعمیراتی نقطہ نظر زور کو تدریس سے سننے کی طرف منتقل کرتا ہے۔"
    ],
    "correct": "Constructivist approach shifts emphasis from teaching to learning.",
    "explanation": "تعمیراتی نظریہ ایک سیکھنے کا نظریہ ہے جہاں سیکھنے والے غیر فعال طور پر معلومات حاصل کرنے کے بجائے فعال طور پر اپنا علم خود بناتے ہیں۔ یہ نمونہ تعلیمی توجہ کو استاد کے مواد فراہم کرنے (تدریس) سے طالب علم کے معنی کی تعمیر کے عمل (سیکھنے) کی طرف منتقل کرتا ہے۔ استاد سیکھنے کا سہولت کار بن جاتا ہے۔"
  },
  {
    "id": "536",
    "text": "The correct hierarchical sequence of terms used in science (TSTET 20 Jan 2025)\nسائنس میں استعمال ہونے والی اصطلاحات کا صحیح درجہ بندی کا سلسلہ",
    "options": [
      "Terms Concepts- Facts Theories\nاصطلاحات - تصورات - حقائق - نظریات",
      "Facts Terms Concepts Theories\nحقائق - اصطلاحات - تصورات - نظریات",
      "Terms Facts Concepts Theories\nاصطلاحات - حقائق - تصورات - نظریات",
      "Facts Concepts Theories-Terms\nحقائق - تصورات - نظریات - اصطلاحات"
    ],
    "correct": "Terms Facts Concepts Theories",
    "explanation": "سائنسی علم درجہ بندی کے مطابق بنایا جاتا ہے۔ یہ بنیادی 'اصطلاحات' (الفاظ) سے شروع ہوتا ہے۔ یہ 'حقائق' (قابل تصدیق مشاہدات) کو بیان کرنے کے لیے استعمال ہوتے ہیں۔ متعدد حقائق کو 'تصورات' (تجریدی خیالات) بنانے کے لیے عام کیا جاتا ہے۔ ایک اچھی طرح سے ثابت شدہ وضاحت جو بہت سے حقائق اور تصورات کو شامل کرتی ہے، ایک 'نظریہ' ہے۔"
  },
  {
    "id": "537",
    "text": "Among the following, identify the best example of \"Task-based assessment\" of students: (TSTET 20 Jan 2025)\nمندرجہ ذیل میں سے، طلباء کی \"ٹاسک پر مبنی تشخیص\" کی بہترین مثال کی نشاندہی کریں:",
    "options": [
      "A written test where students answer multiple-choice questions\nایک تحریری امتحان جہاں طلباء کثیر الانتخابی سوالات کے جوابات دیتے ہیں",
      "A project where students design and present a model of a solar system\nایک پروجیکٹ جہاں طلباء نظام شمسی کا ایک ماڈل ڈیزائن اور پیش کرتے ہیں",
      "A quiz that tests students' knowledge of vocabulary\nایک کوئز جو طلباء کے الفاظ کے علم کی جانچ کرتا ہے",
      "A project where teachers create a model of a renewable energy sources\nایک پروجیکٹ جہاں اساتذہ قابل تجدید توانائی کے ذرائع کا ایک ماڈل بناتے ہیں"
    ],
    "correct": "A project where students design and present a model of a solar system",
    "explanation": "ٹاسک پر مبنی تشخیص ایک طالب علم کی علم اور مہارتوں کو ایک پیچیدہ، مستند کام کو مکمل کرنے کی صلاحیت کی پیمائش کرتی ہے۔ ایک ماڈل کو ڈیزائن اور پیش کرنے کے لیے تحقیق، تصورات کا اطلاق، تخلیقی صلاحیت اور مواصلاتی مہارتوں کی ضرورت ہوتی ہے، جو کوئز یا کثیر الانتخابی سوالات کے ذریعے جانچے جانے والے سادہ علم کی یادداشت سے کہیں زیادہ ہے۔ یہ طالب علم کے بنائے ہوئے عمل اور مصنوعات کا جائزہ لیتا ہے۔"
  },
  {
    "id": "538",
    "text": "Hunter's Score Card and Vogel's Spot Check Evaluation Scale are associated with (TSTET 20 Jan 2025)\nہنٹر کا اسکور کارڈ اور ووگل کا اسپاٹ چیک ایویلیوایشن اسکیل کس سے وابستہ ہیں؟",
    "options": [
      "Evaluation of students' learning\nطلباء کی سیکھنے کی تشخیص",
      "Evaluation of Textbook\nدرسی کتاب کی تشخیص",
      "Evaluation of Curriculum\nنصاب کی تشخیص",
      "Evaluation of Teaching\nتدریس کی تشخیص"
    ],
    "correct": "Evaluation of Textbook",
    "explanation": "ہنٹر کا اسکور کارڈ اور ووگل کا اسپاٹ چیک ایویلیوایشن اسکیل تعلیم کے میدان میں درسی کتب کی منظم تشخیص کے لیے استعمال ہونے والے معیاری اوزار ہیں۔ یہ کسی درسی کتاب کے مواد، تنظیم، زبان، تصاویر، اور جسمانی خصوصیات کا فیصلہ کرنے کے لیے معیار فراہم کرتے ہیں تاکہ کسی کورس کے لیے اس کی مناسبت کا تعین کیا جا سکے۔"
  },
  {
    "id": "539",
    "text": "Students visiting a bread factory to know the ingredients used in making bread. the chemical reaction during the process of making bread, etc., comes under this stage of learning in 5E learning model of the Constructivist approach. (TSTET 20 Jan 2025)\nطلباء روٹی بنانے میں استعمال ہونے والے اجزاء، روٹی بنانے کے عمل کے دوران کیمیائی رد عمل وغیرہ جاننے کے لیے بریڈ فیکٹری کا دورہ کرتے ہیں۔ یہ تعمیری نقطہ نظر کے 5E لرننگ ماڈل میں سیکھنے کے کس مرحلے کے تحت آتا ہے؟",
    "options": [
      "Elaborate\nتفصیل",
      "Explain\nوضاحت",
      "Evaluate\nجانچ",
      "Explore\nدریافت"
    ],
    "correct": "Explore",
    "explanation": "5E تدریسی ماڈل (Engage, Explore, Explain, Elaborate, Evaluate) عملی سرگرمیوں کو اپنے مرکز میں رکھتا ہے۔ 'دریافت' کا مرحلہ وہ ہے جہاں طلباء کو سرگرمیوں جیسے تجربات یا فیلڈ ٹرپس کے ذریعے کسی تصور کی فعال طور پر تحقیقات کرنے کے مواقع دیے جاتے ہیں۔ کسی عمل کا براہ راست مشاہدہ کرنے کے لیے فیکٹری کا دورہ کرنا ایک بہترین دریافت کی سرگرمی ہے، جو طلباء کو باقاعدہ وضاحت سے پہلے ڈیٹا اور تجربات اکٹھا کرنے کی اجازت دیتی ہے۔"
  },
  {
    "id": "540",
    "text": "Which of the following can be considered as the most suitable rationale for team teaching? (TSTET 20 Jan 2025)\nمندرجہ ذیل میں سے کسے ٹیم ٹیچنگ کے لیے سب سے موزوں دلیل سمجھا جا سکتا ہے؟",
    "options": [
      "It is an effective strategy for large sized classes.\nیہ بڑی کلاسوں کے لیے ایک مؤثر حکمت عملی ہے۔",
      "It is helpful in increasing student participation.\nیہ طلباء کی شرکت کو بڑھانے میں مددگار ہے۔",
      "It makes the task of assessment easier.\nیہ تشخیص کے کام کو آسان بناتا ہے۔",
      "It benefits the students with diverse expertise.\nیہ متنوع مہارتوں والے طلباء کو فائدہ پہنچاتا ہے۔"
    ],
    "correct": "It benefits the students with diverse expertise.",
    "explanation": "ٹیم ٹیچنگ میں متعدد اساتذہ شامل ہوتے ہیں جو طلباء کے ایک ہی گروپ کو پڑھانے کے لیے تعاون کرتے ہیں۔ اس کا بنیادی فائدہ یہ ہے کہ یہ طلباء کو علم، مہارت، تدریسی انداز اور نقطہ نظر کی ایک وسیع رینج سے روشناس کراتا ہے جو ایک واحد استاد فراہم نہیں کر سکتا۔ تدریسی ٹیم سے متنوع مہارتوں تک یہ رسائی طلباء کی سیکھنے کے لیے سب سے اہم فائدہ ہے۔"
  },
  {
    "id": "541",
    "text": "You have 5 litres of milk and 5 litres of water. If the density of milk is 1030 kg/m³ and the density of water is 1000 kg/m³. Calculate the effective density of the mixture. (TSTET 19 Jan 2025)\nآپ کے پاس 5 لیٹر دودھ اور 5 لیٹر پانی ہے۔ اگر دودھ کی کثافت 1030 kg/m³ اور پانی کی کثافت 1000 kg/m³ ہے۔ مرکب کی مؤثر کثافت کا حساب لگائیں۔",
    "options": [
      "2030 kg/m³",
      "1015 kg/m³",
      "10150 kg/m³",
      "20300 kg/m³"
    ],
    "correct": "1015 kg/m³",
    "explanation": "مائعات کے مرکب کی مؤثر کثافت (یہ فرض کرتے ہوئے کہ ملانے پر حجم میں کوئی تبدیلی نہیں ہوتی) کل کمیت کو کل حجم سے تقسیم کرنے پر حاصل ہوتی ہے۔ چونکہ دودھ اور پانی کا حجم برابر ہے، مؤثر کثافت صرف ان کی انفرادی کثافتوں کا اوسط ہے۔ مؤثر کثافت = (دودھ کی کثافت + پانی کی کثافت) / 2 = (1030 kg/m³ + 1000 kg/m³) / 2 = 2030 / 2 = 1015 kg/m³۔"
  },
  {
    "id": "542",
    "text": "NASA, America, started the mission \"Mars Science Laboratory\" on (TSTET 19 Jan 2025)\nامریکہ کی ناسا نے \"مارس سائنس لیبارٹری\" مشن کا آغاز کب کیا؟",
    "options": [
      "26th November, 2011",
      "26th November, 2012",
      "26th November, 2013",
      "26th November, 2014"
    ],
    "correct": "26th November, 2011",
    "explanation": "مارس سائنس لیبارٹری (MSL) مشن، جس نے کامیابی کے ساتھ کیوریوسٹی روور کو مریخ پر تعینات کیا، ناسا نے 26 نومبر 2011 کو کیپ کیناویرل ایئر فورس اسٹیشن سے لانچ کیا تھا۔ روور 6 اگست 2012 کو مریخ پر اترا۔"
  },
  {
    "id": "543",
    "text": "A light ray passes from medium 1 to medium 2. The refractive index of medium 1 is n₁=1.50, and the angle of incidence is θ₁=30°. The angle of refraction in medium 2 is θ₂=45°. Then the approximate refractive index of medium 2 (n₂) is (TSTET 19 Jan 2025)\nایک روشنی کی شعاع میڈیم 1 سے میڈیم 2 میں گزرتی ہے۔ میڈیم 1 کا انعطافی اشاریہ n₁=1.50 ہے، اور زاویہ وقوع θ₁=30° ہے۔ میڈیم 2 میں زاویہ انعطاف θ₂=45° ہے۔ تو میڈیم 2 کا تخمینی انعطافی اشاریہ (n₂) کیا ہے؟",
    "options": [
      "n₂=1.32",
      "n₂=1.50",
      "n₂=1.06",
      "n₂=2.06"
    ],
    "correct": "n₂=1.06",
    "explanation": "سنیل کے قانونِ انعطاف کے مطابق، زاویوں اور انعطافی اشاریوں کے درمیان تعلق فارمولے n₁sin(θ₁) = n₂sin(θ₂) سے دیا جاتا ہے۔ دی گئی قدروں کو رکھنے پر: 1.50 × sin(30°) = n₂ × sin(45°)۔ ہم جانتے ہیں کہ sin(30°) = 0.5 اور sin(45°) ≈ 0.707۔ تو، مساوات 1.50 × 0.5 = n₂ × 0.707 بن جاتی ہے۔ یہ 0.75 = 0.707n₂ تک آسان ہو جاتی ہے۔ n₂ کے لیے حل کرنے پر، ہم n₂ = 0.75 / 0.707 ≈ 1.06 حاصل کرتے ہیں۔"
  },
  {
    "id": "544",
    "text": "1 terahertz (THz) is equal to: (TSTET 19 Jan 2025)\n1 ٹیرا ہرٹز (THz) کس کے برابر ہے؟",
    "options": [
      "1 lakh hertz\n1 لاکھ ہرٹز",
      "1 million hertz\n1 ملین ہرٹز",
      "1 billion hertz\n1 بلین ہرٹز",
      "1 trillion hertz\n1 ٹریلین ہرٹز"
    ],
    "correct": "1 trillion hertz",
    "explanation": "بین الاقوامی نظام اکائیات (SI) میں سابقہ \"ٹیرا-\" (T) 10¹² کے عنصر کی نمائندگی کرتا ہے، جو ایک ٹریلین کے برابر ہے۔ لہذا، 1 ٹیرا ہرٹز (THz) 1,000,000,000,000 ہرٹز، یا 1 ٹریلین ہرٹز کے برابر ہے۔"
  },
  {
    "id": "545",
    "text": "If 500g of water at 200°C temperature and 250g of water at 100°C temperature are mixed, the resulting temperature of the mixture is approximately (TSTET 19 Jan 2025)\nاگر 200°C درجہ حرارت پر 500 گرام پانی اور 100°C درجہ حرارت پر 250 گرام پانی کو ملایا جائے، تو مرکب کا نتیجہ خیز درجہ حرارت تقریباً کتنا ہوگا؟",
    "options": [
      "150°C",
      "167°C",
      "175°C",
      "180°C"
    ],
    "correct": "167°C",
    "explanation": "حرارت پیمائی کے اصول (حرارت کا نقصان = حرارت کا حصول) کا استعمال کرتے ہوئے، فارمولا m₁c(T₁ - T_f) = m₂c(T_f - T₂) ہے۔ یہاں، m₁=500g، T₁=200°C، m₂=250g، اور T₂=100°C۔ مخصوص حرارتی صلاحیت 'c' دونوں نمونوں کے لیے یکساں ہے اور منسوخ ہو جاتی ہے۔ مساوات 500(200 - T_f) = 250(T_f - 100) ہے۔ 250 سے تقسیم کرنے پر 2(200 - T_f) = (T_f - 100) ملتا ہے، جو 400 - 2T_f = T_f - 100 تک آسان ہو جاتا ہے۔ حتمی درجہ حرارت T_f کے لیے حل کرنے پر، ہمیں 3T_f = 500 ملتا ہے، لہذا T_f ≈ 166.67°C، جو تقریباً 167°C ہے۔ (نوٹ: مائع پانی معیاری دباؤ پر 200°C پر موجود نہیں ہو سکتا، لیکن حساب فراہم کردہ اعداد و شمار پر مبنی ہے)۔"
  },
  {
    "id": "546",
    "text": "An object weighs 42 N on the surface of the Moon. What would be its weight on the surface of the Earth? (TSTET 19 Jan 2025)\nایک چیز کا وزن چاند کی سطح پر 42 نیوٹن ہے۔ زمین کی سطح پر اس کا وزن کیا ہوگا؟",
    "options": [
      "252 N",
      "126 N",
      "7 N",
      "14 N"
    ],
    "correct": "252 N",
    "explanation": "زمین کی سطح پر کشش ثقل چاند کی سطح سے تقریباً چھ گنا زیادہ مضبوط ہے۔ وزن کمیت اور کشش ثقل کا حاصل ضرب ہے (W = mg)۔ لہذا، زمین پر کسی چیز کا وزن چاند پر اس کے وزن سے تقریباً چھ گنا زیادہ ہوگا۔ زمین پر وزن = چاند پر وزن × 6 = 42 N × 6 = 252 N۔"
  },
  {
    "id": "547",
    "text": "The rule used to determine the direction of the induced current in a conductor moving through a magnetic field (TSTET 19 Jan 2025)\nمقناطیسی میدان سے گزرنے والے موصل میں پیدا ہونے والی کرنٹ کی سمت کا تعین کرنے کے لیے استعمال ہونے والا اصول",
    "options": [
      "Fleming's Left-hand rule\nفلیمنگ کا بائیں ہاتھ کا اصول",
      "Kirchhoff Junction Law\nکرچوف کا جنکشن قانون",
      "Lenz's Law\nلینز کا قانون",
      "Faraday's Law of Magnetic Induction\nفیراڈے کا مقناطیسی تحریض کا قانون"
    ],
    "correct": "Lenz's Law",
    "explanation": "پیدا ہونے والی برقی رو کی سمت کا تعین لینز کے قانون سے کیا جاتا ہے، جو یہ بتاتا ہے کہ پیدا ہونے والی رو اس سمت میں بہے گی جو مقناطیسی بہاؤ میں اس تبدیلی کی مخالفت کرے گی جس نے اسے پیدا کیا ہے۔ فلیمنگ کا دائیں ہاتھ کا اصول اس اصول کا عملی اطلاق ہے۔ فلیمنگ کا بائیں ہاتھ کا اصول غلط ہے کیونکہ یہ کرنٹ لے جانے والے موصل پر لگنے والی قوت کی سمت کا تعین کرنے کے لیے استعمال ہوتا ہے (موٹر کا اصول)، نہ کہ پیدا ہونے والی رو کی سمت (جنریٹر کا اصول)۔"
  },
  {
    "id": "548",
    "text": "In case of Metals, the factors that influence the resistance of a conductor (TSTET 19 Jan 2025)\nدھاتوں کی صورت میں، وہ عوامل جو موصل کی مزاحمت کو متاثر کرتے ہیں",
    "options": [
      "A) The length of the conductor\nA) موصل کی لمبائی",
      "B) The cross sectional area of the conductor\nB) موصل کا کراس سیکشنل رقبہ",
      "C) The material of the conductor\nC) موصل کا مواد",
      "A, B & C"
    ],
    "correct": "A, B & C",
    "explanation": "دھاتی موصل کی برقی مزاحمت (R) کا تعین فارمولے R = ρ(L/A) سے کیا جاتا ہے۔ مزاحمت موصل کی لمبائی (L) اور اس کے مواد کی مزاحمتیت (ρ) کے براہ راست متناسب ہے، اور یہ اس کے کراس سیکشنل رقبہ (A) کے معکوس متناسب ہے۔ لہذا، تینوں عوامل—لمبائی، کراس سیکشنل رقبہ، اور مواد—مزاحمت کو متاثر کرتے ہیں۔"
  },
  {
    "id": "549",
    "text": "Among the following, the chemical that is commonly found in the head of a matchstick and also serves as an oxidizing agent to ignite the matchstick (TSTET 19 Jan 2025)\nمندرجہ ذیل میں سے، وہ کیمیکل جو عام طور پر ماچس کی تیلی کے سرے پر پایا جاتا ہے اور ماچس کو جلانے کے لیے آکسیڈائزنگ ایجنٹ کے طور پر بھی کام کرتا ہے۔",
    "options": [
      "Sulphur\nگندھک",
      "Potassium Chlorate\nپوٹاشیم کلوریٹ",
      "Antimony Sulphide\nاینٹیمنی سلفائیڈ",
      "Red Phosphorus\nسرخ فاسفورس"
    ],
    "correct": "Potassium Chlorate",
    "explanation": "سیفٹی ماچس کے سرے میں ایک آکسیڈائزنگ ایجنٹ ہوتا ہے، جو عام طور پر پوٹاشیم کلوریٹ (KClO₃) ہوتا ہے۔ اس میں ایک ایندھن بھی ہوتا ہے، جیسے گندھک یا اینٹیمنی سلفائیڈ۔ جب ماچس کو رگڑا جاتا ہے، تو رگڑ سے حرارت پیدا ہوتی ہے، اور پوٹاشیم کلوریٹ آکسیجن خارج کرنے کے لیے ٹوٹ جاتا ہے، جس سے ایندھن تیزی سے جلنے لگتا ہے۔ سرخ فاسفورس ماچس کے ڈبے کی رگڑنے والی سطح پر ہوتا ہے، نہ کہ ماچس کے سرے پر۔"
  },
  {
    "id": "550",
    "text": "In a skeleton chemical equation, these need NOT be mentioned (TSTET 19 Jan 2025)\nایک ڈھانچہ جاتی کیمیائی مساوات میں، ان کا ذکر کرنا ضروری نہیں ہے۔",
    "options": [
      "Reactants\nتعامل کنندگان",
      "Products\nمصنوعات",
      "Physical states of substances\nمادوں کی طبعی حالتیں",
      "The molecular formulas\nمالیکیولی فارمولے"
    ],
    "correct": "Physical states of substances",
    "explanation": "ایک ڈھانچہ جاتی کیمیائی مساوات ایک غیر متوازن مساوات ہے جو تعامل کنندگان اور مصنوعات کے لیے صحیح کیمیائی فارمولے دکھاتی ہے۔ اگرچہ اسے شامل مادوں (تعامل کنندگان اور مصنوعات) کی ان کے فارمولوں کا استعمال کرتے ہوئے صحیح طور پر شناخت کرنی چاہیے، لیکن اسے متوازن ہونے یا ان مادوں کی طبعی حالتوں (ٹھوس، مائع، گیس، یا آبی) کو شامل کرنے کی ضرورت نہیں ہے۔ طبعی حالتوں کی نشاندہی ایک زیادہ مکمل، متوازن مساوات کی خصوصیت ہے۔"
  },
  {
    "id": "551",
    "text": "The metals in the middle of the reactivity series are typically NOT found in Earth's crust in the form of: (TSTET 19 Jan 2025)\nتعاملی سلسلے کے وسط میں موجود دھاتیں عام طور پر زمین کی پرت میں کس شکل میں نہیں پائی جاتیں؟",
    "options": [
      "Pure metal\nخالص دھات",
      "Metal sulphides\nدھاتی سلفائیڈز",
      "Metal chlorides\nدھاتی کلورائیڈز",
      "Metal carbonates\nدھاتی کاربونیٹس"
    ],
    "correct": "Pure metal",
    "explanation": "تعاملی سلسلے کے وسط میں موجود دھاتیں، جیسے لوہا، زنک، اور سیسہ، معتدل طور پر تعامل پذیر ہیں۔ یہ تعامل پذیری انہیں دوسرے عناصر کے ساتھ آسانی سے ملنے کا سبب بنتی ہے، لہذا وہ زمین کی پرت میں آکسائیڈز، سلفائیڈز، اور کاربونیٹس جیسے مرکبات کے طور پر پائے جاتے ہیں۔ وہ اپنی غیر مرکب، خالص دھاتی حالت میں قدرتی طور پر موجود رہنے کے لیے بہت زیادہ تعامل پذیر ہیں۔ صرف بہت کم تعامل پذیر دھاتیں جیسے سونا اور پلاٹینم خالص دھاتوں کے طور پر پائی جاتی ہیں۔"
  },
  {
    "id": "552",
    "text": "The maximum number of electrons that can be accommodated in the orbits of a neutral carbon atom (TSTET 19 Jan 2025)\nایک غیر جانبدار کاربن ایٹم کے مدار میں زیادہ سے زیادہ کتنے الیکٹران سما سکتے ہیں؟",
    "options": [
      "12",
      "10",
      "8",
      "6"
    ],
    "correct": "6",
    "explanation": "سوال ایک غیر جانبدار کاربن ایٹم میں الیکٹرانوں کی کل تعداد کے بارے میں پوچھ رہا ہے۔ کاربن کا ایٹمی نمبر 6 ہے، جس کا مطلب ہے کہ اس کے مرکزے میں 6 پروٹون ہوتے ہیں۔ کسی ایٹم کے برقی طور پر غیر جانبدار ہونے کے لیے، الیکٹرانوں کی تعداد پروٹون کی تعداد کے برابر ہونی چاہیے۔ لہذا، ایک غیر جانبدار کاربن ایٹم میں 6 الیکٹران ہوتے ہیں۔"
  },
  {
    "id": "553",
    "text": "Identify the correct sentences about plant cell. A) Cell membrane is present but cell wall is absent in plant cell B) In plant cell both cell membrane and cell wall are present C) In plant cell, cell wall is made up of lipids and proteins D) In plant cell, cell wall is made up of cellulose (TSTET 19 Jan 2025)\nپودے کے خلیے کے بارے میں صحیح جملوں کی نشاندہی کریں۔ A) پودے کے خلیے میں سیل جھلی موجود ہے لیکن سیل وال غیر حاضر ہے۔ B) پودے کے خلیے میں سیل جھلی اور سیل وال دونوں موجود ہیں۔ C) پودے کے خلیے میں، سیل وال لپڈز اور پروٹین سے بنی ہے۔ D) پودے کے خلیے میں، سیل وال سیلولوز سے بنی ہے۔",
    "options": [
      "A & B only\nصرف A اور B",
      "B & C only\nصرف B اور C",
      "C & D only\nصرف C اور D",
      "B & D only\nصرف B اور D"
    ],
    "correct": "B & D only",
    "explanation": "پودوں کے خلیوں کی خصوصیت یہ ہے کہ ان میں ایک اندرونی خلیے کی جھلی اور ایک سخت بیرونی خلیے کی دیوار دونوں ہوتی ہیں (بیان B درست ہے، A غلط ہے)۔ یہ خلیے کی دیوار ساختی مدد فراہم کرتی ہے اور بنیادی طور پر سیلولوز، ایک پیچیدہ کاربوہائیڈریٹ پر مشتمل ہوتی ہے (بیان D درست ہے، C غلط ہے)۔ لہذا، صحیح بیانات B اور D ہیں۔"
  },
  {
    "id": "554",
    "text": "Among the following cells which cells are NOT having regeneration capacity? (TSTET 19 Jan 2025)\nمندرجہ ذیل خلیوں میں سے کون سے خلیوں میں دوبارہ پیدا ہونے کی صلاحیت نہیں ہوتی؟",
    "options": [
      "Blood cells\nخون کے خلیے",
      "Nerve cells\nعصبی خلیے",
      "Muscle cells\nپٹھوں کے خلیے",
      "Epithelial cells\nایپیتھیلیل خلیے"
    ],
    "correct": "Nerve cells",
    "explanation": "زیادہ تر بالغ نیورونز (عصبی خلیے)، خاص طور پر مرکزی اعصابی نظام میں، مابعد مائٹوٹک ہوتے ہیں، جس کا مطلب ہے کہ وہ تقسیم اور نقل کی اپنی صلاحیت کھو دیتے ہیں۔ نتیجتاً، اگر وہ خراب یا تباہ ہو جائیں تو ان میں دوبارہ پیدا ہونے کی صلاحیت بہت محدود یا بالکل نہیں ہوتی۔ اس کے برعکس، ایپیتھیلیل خلیے اور خون کے خلیے تیزی سے دوبارہ پیدا ہوتے ہیں، اور پٹھوں کے خلیوں میں محدود دوبارہ پیدا ہونے کی صلاحیت ہوتی ہے۔"
  },
  {
    "id": "555",
    "text": "The most important pollutants that cause ozone layer depletion from the following (TSTET 19 Jan 2025)\nمندرجہ ذیل میں سے اوزون کی تہہ کی کمی کا سبب بننے والے سب سے اہم آلودگی پھیلانے والے عناصر",
    "options": [
      "Oxides of Nitrogen\nنائٹروجن کے آکسائیڈز",
      "Chlorofluorocarbons\nکلوروفلوروکاربنز",
      "Oxides of sulphur\nسلفر کے آکسائیڈز",
      "Hydrocarbons\nہائیڈروکاربنز"
    ],
    "correct": "Chlorofluorocarbons",
    "explanation": "اسٹریٹوسفیرک اوزون کی تہہ کی کمی کی بنیادی وجہ کلوروفلوروکاربنز (CFCs) کے نام سے جانے والے مصنوعی کیمیکلز کا ایک گروپ ہے۔ جب وہ فضا میں خارج ہوتے ہیں، تو وہ اسٹریٹوسفیئر تک پہنچتے ہیں جہاں بالائے بنفشی شعاعیں انہیں توڑ دیتی ہیں، جس سے کلورین کے ایٹم خارج ہوتے ہیں۔ یہ کلورین کے ایٹم ایک کیمیائی رد عمل میں عمل انگیز کے طور پر کام کرتے ہیں جو اوزون کے مالیکیولز کو تباہ کر دیتا ہے۔"
  },
  {
    "id": "556",
    "text": "What will happen if all the Herbivores in an ecosystem disappear? (TSTET 19 Jan 2025)\nاگر ایک ماحولیاتی نظام میں تمام سبزی خور غائب ہو جائیں تو کیا ہوگا؟",
    "options": [
      "The number of omnivores may increase\nہمہ خوروں کی تعداد بڑھ سکتی ہے",
      "The number of carnivores may increase\nگوشت خوروں کی تعداد بڑھ سکتی ہے",
      "The number of producers may increase\nپیدا کرنے والوں کی تعداد بڑھ سکتی ہے",
      "There may not be any change in the food chain of ecosystem\nماحولیاتی نظام کی غذائی زنجیر میں کوئی تبدیلی نہیں ہو سکتی"
    ],
    "correct": "The number of producers may increase",
    "explanation": "سبزی خور بنیادی صارفین ہیں جو پیدا کرنے والوں (پودوں) کو کھاتے ہیں۔ اگر تمام سبزی خوروں کو ایک ماحولیاتی نظام سے ہٹا دیا جائے، تو ان کا شکار کرنے والے گوشت خور اور ہمہ خور اپنی خوراک کا ذریعہ کھو دیں گے، جس سے ان کی آبادی میں کمی آئے گی۔ اس کے برعکس، پیدا کرنے والے (پودے) سبزی خوروں کے ذریعے نہیں کھائے جائیں گے، جس سے ان کی آبادی میں نمایاں اضافہ ہوگا، کم از کم جب تک کہ دوسرے وسائل سے محدود نہ ہو جائیں۔"
  },
  {
    "id": "557",
    "text": "The hormone responsible for the development of secondary sexual characters in female is (TSTET 19 Jan 2025)\nخواتین میں ثانوی جنسی خصوصیات کی نشوونما کے لیے ذمہ دار ہارمون کون سا ہے؟",
    "options": [
      "Adrenalin\nایڈرینالین",
      "Testosterone\nٹیسٹوسٹیرون",
      "Estrogen\nایسٹروجن",
      "Glucagon\nگلوکاگون"
    ],
    "correct": "Estrogen",
    "explanation": "ایسٹروجن بنیادی خاتون جنسی ہارمون ہے۔ یہ خاتون تولیدی نظام کی نشوونما اور ضابطے اور بلوغت کے دوران ثانوی جنسی خصوصیات کے ابھرنے کے لیے ذمہ دار ہے، جیسے چھاتی کی نشوونما، کولہوں کا چوڑا ہونا، اور ماہواری کا ضابطہ۔ ٹیسٹوسٹیرون بنیادی مرد جنسی ہارمون ہے۔"
  },
  {
    "id": "558",
    "text": "Match the following: A) Smut disease, B) Red Rot disease, C) Citrus canker disease, D) Tikka disease with i) Lemon fruit, ii) Ground nut, iii) Sugarcane, iv) Wheat (TSTET 19 Jan 2025)\nمندرجہ ذیل کو ملائیں: A) اسمٹ بیماری، B) ریڈ روٹ بیماری، C) سٹرس کینکر بیماری، D) ٹکا بیماری کے ساتھ i) لیموں کا پھل، ii) مونگ پھلی، iii) گنا، iv) گندم",
    "options": [
      "A-iv; B-iii; C-i; D-ii",
      "A-iv; B-i; C-ii; D-iii",
      "A-iii; B-iv; C-ii; D-i",
      "A-iii; B-iv; C-i; D-ii"
    ],
    "correct": "A-iv; B-iii; C-i; D-ii",
    "explanation": "پودوں کی بیماریوں اور ان کے میزبان پودوں کا صحیح جوڑا یہ ہے: A) اسمٹ بیماری عام طور پر گندم جیسے اناج کو متاثر کرتی ہے۔ B) ریڈ روٹ گنے کی ایک بڑی فنگل بیماری ہے۔ C) سٹرس کینکر ایک بیکٹیریل بیماری ہے جو لیموں جیسے سٹرس پودوں کو متاثر کرتی ہے۔ D) ٹکا بیماری مونگ پھلی کے پودے کی ایک عام فنگل بیماری ہے۔"
  },
  {
    "id": "559",
    "text": "Which part of Radish stores food materials? (TSTET 19 Jan 2025)\nمولی کا کون سا حصہ غذائی مواد ذخیرہ کرتا ہے؟",
    "options": [
      "Root\nجڑ",
      "Leaf\nپتا",
      "Stem\nتنا",
      "Flower\nپھول"
    ],
    "correct": "Root",
    "explanation": "مولی کے پودے میں ایک ترمیم شدہ ٹیپروٹ ہوتی ہے۔ مولی کا سوجا ہوا، گوشت دار، کھانے کے قابل حصہ جڑ ہے، جو پودے کے لیے خوراک (بنیادی طور پر کاربوہائیڈریٹ) ذخیرہ کرنے کے لیے مخصوص ہے۔ یہ ذخیرہ شدہ توانائی بعد میں نشوونما اور تولید کے لیے استعمال ہوتی ہے۔"
  },
  {
    "id": "560",
    "text": "Identify the plants that grow in nitrogen deficient soil (TSTET 19 Jan 2025)\nان پودوں کی نشاندہی کریں جو نائٹروجن کی کمی والی مٹی میں اگتے ہیں۔",
    "options": [
      "Insectivorous plants\nحشرہ خور پودے",
      "Saprophytes\nسیپروفائٹس",
      "Parasitic plants\nطفیلہ پودے",
      "Chemo Autotrophs\nکیمو آٹوٹروفس"
    ],
    "correct": "Insectivorous plants",
    "explanation": "حشرہ خور (یا گوشت خور) پودے، جیسے وینس فلائی ٹریپ اور پچر پلانٹ، غذائی اجزاء کی کمی والے ماحول، خاص طور پر نائٹروجن کی کمی والی مٹی میں پھلنے پھولنے کے لیے ڈھل چکے ہیں۔ وہ کیڑوں اور دیگر چھوٹے آرتھروپوڈز کو پھنسا کر اور ہضم کرکے اپنی غذائیت کو پورا کرتے ہیں، جن سے وہ ضروری نائٹروجن اور دیگر معدنیات جذب کرتے ہیں۔"
  },
  {
    "id": "561",
    "text": "Identify the pair of diseases that are caused by protozoan and bacterium (TSTET 19 Jan 2025)\nبیماریوں کے اس جوڑے کی شناخت کریں جو پروٹوزووا اور بیکٹیریم کی وجہ سے ہوتی ہیں۔",
    "options": [
      "Dengue - Chickungunya\nڈینگی - چکن گونیا",
      "Diptheria - Whooping cough\nخناق - کالی کھانسی",
      "Malaria - Typhoid\nملیریا - ٹائیفائیڈ",
      "Cholera - Typhoid\nہیضہ - ٹائیفائیڈ"
    ],
    "correct": "Malaria - Typhoid",
    "explanation": "سوال میں ایک ایسے جوڑے کی ضرورت ہے جس میں پہلی بیماری پروٹوزووا اور دوسری بیماری بیکٹیریا کی وجہ سے ہوتی ہو۔ ملیریا پروٹوزووا پرجیوی *پلازموڈیم* کی وجہ سے ہوتا ہے۔ ٹائیفائیڈ بخار بیکٹیریا *سالمونیلا ٹائفی* کی وجہ سے ہوتا ہے۔ یہ جوڑا معیار پر پورا اترتا ہے۔ ڈینگی اور چکن گونیا وائرل ہیں۔ خناق، کالی کھانسی، اور ہیضہ سب بیکٹیریل ہیں۔"
  },
  {
    "id": "562",
    "text": "Identify the plant with incomplete flowers (TSTET 19 Jan 2025)\nنامکمل پھولوں والے پودے کی شناخت کریں۔",
    "options": [
      "Hibiscus\nگڑہل",
      "Datura\nدھتورہ",
      "Ipomoea\nایپومیا",
      "Cucumber\nکھیرا"
    ],
    "correct": "Cucumber",
    "explanation": "ایک مکمل پھول میں چاروں اہم حصے ہوتے ہیں: سیپلز، پیٹلز، اسٹیمنز (نر)، اور پسٹل (مادہ)۔ ایک نامکمل پھول میں ان میں سے ایک یا زیادہ حصے غائب ہوتے ہیں۔ کھیرے کے پودے یک جنسی پھول پیدا کرتے ہیں — الگ الگ نر پھول (جن میں پسٹل نہیں ہوتا) اور مادہ پھول (جن میں اسٹیمنز نہیں ہوتے)۔ چونکہ دونوں قسم کے پھولوں میں ایک اہم تولیدی حصہ غائب ہوتا ہے، اس لیے انہیں نامکمل پھولوں کے طور پر درجہ بند کیا جاتا ہے۔ گڑہل، دھتورہ، اور ایپومیا میں عام طور پر مکمل پھول ہوتے ہیں۔"
  },
  {
    "id": "563",
    "text": "Identify the gland that secretes both enzymes and hormones from the following (TSTET 19 Jan 2025)\nمندرجہ ذیل میں سے اس غدود کی شناخت کریں جو خامروں اور ہارمونز دونوں کو خارج کرتا ہے۔",
    "options": [
      "Liver\nجگر",
      "Adrenal gland\nایڈرینل غدود",
      "Pituitary gland\nپٹیوٹری غدود",
      "Pancreatic gland\nلبلبے کا غدود"
    ],
    "correct": "Pancreatic gland",
    "explanation": "ایک غدود جو خامروں اور ہارمونز دونوں کو خارج کرتا ہے اسے ہیٹروکرائن یا مخلوط غدود کہا جاتا ہے۔ لبلبہ ایک ایکسوکرائن غدود کے طور پر کام کرتا ہے، جو ہاضمے کے خامروں (جیسے ٹرپسن اور امائلیز) کو چھوٹی آنت میں خارج کرتا ہے، اور ایک اینڈوکرائن غدود کے طور پر، جو ہارمونز (جیسے انسولین اور گلوکاگون) کو براہ راست خون کے دھارے میں خارج کرتا ہے۔"
  },
  {
    "id": "564",
    "text": "Identify the correct pair in which both the animals exhibit cutaneous respiration (TSTET 19 Jan 2025)\nصحیح جوڑے کی شناخت کریں جس میں دونوں جانور جلد کے ذریعے سانس لیتے ہیں۔",
    "options": [
      "Earthworm, Frog\nکेंचुआ, مینڈک",
      "Grasshopper, Cockroach\nٹڈا، کاکروچ",
      "Fish, Cockroach\nمچھلی، کاکروچ",
      "Crocodile, Snake\nمگرمچھ، سانپ"
    ],
    "correct": "Earthworm, Frog",
    "explanation": "جلدی تنفس جلد کے ذریعے گیسوں کے تبادلے کا عمل ہے۔ کेंचुआ صرف اپنی نم جلد کے ذریعے سانس لیتا ہے۔ مینڈک، ایک جل تھلی ہونے کے ناطے، زمین پر اپنے پھیپھڑوں سے سانس لیتا ہے لیکن اپنی نم جلد کے ذریعے گیسوں کے تبادلے پر بھی بہت زیادہ انحصار کرتا ہے، خاص طور پر جب پانی میں ہو۔ ٹڈے اور کاکروچ جیسے کیڑے ٹریچیا کا استعمال کرتے ہیں، مچھلیاں گلپھڑوں کا، اور مگرمچھ اور سانپ جیسے رینگنے والے جانور پھیپھڑوں کا استعمال کرتے ہیں۔"
  },
  {
    "id": "565",
    "text": "To help students grasp the concept of density, a teacher Venkat asks them to design their own experiments using various liquids and objects. Which aspect of the heuristic method is this exemplifying? (TSTET 19 Jan 2025)\nکثافت کے تصور کو سمجھانے کے لیے، ایک استاد وینکٹ طلباء سے مختلف مائعات اور اشیاء کا استعمال کرتے ہوئے اپنے تجربات ڈیزائن کرنے کو کہتا ہے۔ یہ دریافت کے طریقہ کار کے کس پہلو کی مثال ہے؟",
    "options": [
      "Following strict guidelines to obtain results.\nنتائج حاصل کرنے کے لیے سخت ہدایات پر عمل کرنا۔",
      "Encouraging creativity and independent problem-solving.\nتخلیقی صلاحیتوں اور آزادانہ مسئلہ حل کرنے کی حوصلہ افزائی کرنا۔",
      "Preparing Instruction cards only.\nصرف ہدایاتی کارڈ تیار کرنا۔",
      "Using only theoretical explanations without trial and error methods.\nآزمائش اور غلطی کے طریقوں کے بغیر صرف نظریاتی وضاحتوں کا استعمال کرنا۔"
    ],
    "correct": "Encouraging creativity and independent problem-solving.",
    "explanation": "دریافت کا طریقہ، یا ہیورسٹک طریقہ، ایک تدریسی نقطہ نظر ہے جہاں طلباء خود کر کے اور چیزیں دریافت کر کے سیکھتے ہیں۔ طلباء سے اپنے تجربات خود ڈیزائن کرنے کا کہہ کر، استاد توجہ رٹنے کی بجائے فعال شرکت کی طرف منتقل کر رہا ہے، جو تخلیقی سوچ کی حوصلہ افزائی کرتا ہے، تجسس کو فروغ دیتا ہے، اور آزادانہ مسئلہ حل کرنے کی مہارتوں کو فروغ دیتا ہے۔"
  },
  {
    "id": "566",
    "text": "Organizing a science fair in a school is generally considered as a (TSTET 19 Jan 2025)\nاسکول میں سائنس میلے کا انعقاد عام طور پر سمجھا جاتا ہے ایک:",
    "options": [
      "Class room Activity\nکلاس روم کی سرگرمی",
      "Curricular Activity\nنصابی سرگرمی",
      "Co-curricular Activity\nہم نصابی سرگرمی",
      "Extracurricular Activity\nغیر نصابی سرگرمی"
    ],
    "correct": "Co-curricular Activity",
    "explanation": "ہم نصابی سرگرمیاں وہ سرگرمیاں ہیں جو تعلیمی نصاب کی تکمیل کرتی ہیں۔ سائنس میلہ براہ راست سائنس کے نصاب سے متعلق ہے کیونکہ یہ طلباء کو کلاس میں سیکھے گئے تصورات کو عملی منصوبوں پر لاگو کرنے کی اجازت دیتا ہے۔ تاہم، یہ باقاعدہ کلاس روم کے کام سے آگے بڑھتا ہے، جو اسے ایک ہم نصابی سرگرمی بناتا ہے جو تعلیمی تجربے کو مزید تقویت بخشتا ہے، نہ کہ سختی سے نصابی سرگرمی۔"
  },
  {
    "id": "567",
    "text": "APJ Abdul Kalam worked at this space research agency which later was renamed as Indian Space Research Organization (ISRO). (TSTET 19 Jan 2025)\nاے پی جے عبدالکلام نے اس خلائی تحقیقی ادارے میں کام کیا جسے بعد میں انڈین اسپیس ریسرچ آرگنائزیشن (اسرو) کا نام دیا گیا۔",
    "options": [
      "Indian National Committee for Space Research\nانڈین نیشنل کمیٹی فار اسپیس ریسرچ",
      "Indian Constitution for Space Research\nانڈین کانسٹیٹیوشن فار اسپیس ریسرچ",
      "Indian Organisation for Space Research\nانڈین آرگنائزیشن فار اسپیس ریسرچ",
      "Indian Space Research Programme\nانڈین اسپیس ریسرچ پروگرام"
    ],
    "correct": "Indian National Committee for Space Research",
    "explanation": "انڈین اسپیس ریسرچ آرگنائزیشن (اسرو) کا پیشرو انڈین نیشنل کمیٹی فار اسپیس ریسرچ (INCOSPAR) تھا، جسے 1962 میں حکومت ہند نے ڈاکٹر وکرم سارا بھائی کے تحت قائم کیا تھا۔ اے پی جے عبدالکلام نے اپنے کیریئر کا آغاز INCOSPAR سے کیا۔ 1969 میں INCOSPAR کو اسرو میں تبدیل کر دیا گیا۔"
  },
  {
    "id": "568",
    "text": "A Biology teacher of class 9 made her students into groups and asked each group to gather some flowers available in their surroundings and bring to the class... she asked each group to observe the features of the flowers they picked and write in a table whether it falls under the category of Complete flowers or Incomplete flowers. This activity aims at achieving which or the following Learning indicator? (TSTET 19 Jan 2025)\nنویں جماعت کی حیاتیات کی ایک ٹیچر نے اپنے طلباء کو گروہوں میں تقسیم کیا اور ہر گروپ سے کہا کہ وہ اپنے اردگرد دستیاب کچھ پھول اکٹھے کرکے کلاس میں لائیں... اس نے ہر گروپ سے کہا کہ وہ اپنے چنے ہوئے پھولوں کی خصوصیات کا مشاہدہ کریں اور ایک جدول میں لکھیں کہ آیا یہ مکمل پھولوں یا نامکمل پھولوں کے زمرے میں آتے ہیں۔ اس سرگرمی کا مقصد مندرجہ ذیل میں سے کون سا سیکھنے کا اشارہ حاصل کرنا ہے؟",
    "options": [
      "Communication Skill\nمواصلات کی مہارت",
      "Inquiry\nتحقیق",
      "Classification and Experimentation\nدرجہ بندی اور تجربہ",
      "Formulation of hypothesis\nمفروضے کی تشکیل"
    ],
    "correct": "Classification and Experimentation",
    "explanation": "اس سرگرمی کا بنیادی مقصد یہ ہے کہ طلباء پھولوں کی مخصوص خصوصیات کا مشاہدہ کریں (ایک عملی تجرباتی یا مشاہداتی کام) اور پھر ان خصوصیات کا استعمال کرتے ہوئے پھولوں کو دو الگ الگ زمروں میں تقسیم کریں: مکمل یا نامکمل۔ مشترکہ خصوصیات کی بنیاد پر اشیاء کو ترتیب دینے کا یہ عمل درجہ بندی کی تعریف ہے۔ لہذا، یہ سرگرمی بنیادی طور پر درجہ بندی کے سیکھنے کے اشارے پر مرکوز ہے۔"
  },
  {
    "id": "569",
    "text": "One of the following is NOT a stage in Experiential learning according to Kolb and Fry. (TSTET 19 Jan 2025)\nکولب اور فرائی کے مطابق مندرجہ ذیل میں سے ایک تجرباتی سیکھنے کا مرحلہ نہیں ہے۔",
    "options": [
      "Concrete Operational stage\nٹھوس عملی مرحلہ",
      "Abstract Conceptualisation\nتجریدی تصور",
      "Reflective Observation\nعکاس مشاہدہ",
      "Active Experimentation\nفعال تجربہ"
    ],
    "correct": "Concrete Operational stage",
    "explanation": "ڈیوڈ کولب کا تجرباتی سیکھنے کا چکر چار الگ الگ مراحل پر مشتمل ہے: ٹھوس تجربہ، عکاس مشاہدہ، تجریدی تصور، اور فعال تجربہ۔ 'ٹھوس عملی مرحلہ' کولب کے نظریے کا حصہ نہیں ہے؛ بلکہ یہ بچوں میں علمی ترقی کے جین پیاجے کے نظریے کے چار مراحل میں سے ایک ہے۔"
  },
  {
    "id": "570",
    "text": "\"Science is an interconnected series of concepts and conceptual schemes that have developed as a result of experimentation and observation and are fruitful of further experimentation and observation\". This was the definition of 'Science' by (TSTET 19 Jan 2025)\n\"سائنس تصورات اور تصوراتی اسکیموں کا ایک باہم مربوط سلسلہ ہے جو تجربات اور مشاہدات کے نتیجے میں تیار ہوا ہے اور مزید تجربات اور مشاہدات کے لیے نتیجہ خیز ہے\"۔ یہ 'سائنس' کی تعریف کس نے کی؟",
    "options": [
      "Einstein\nآئن سٹائن",
      "A. W. Green\nاے. ڈبلیو. گرین",
      "Karl Pearson\nکارل پیئرسن",
      "James B. Conant\nجیمز بی. کونینٹ"
    ],
    "correct": "James B. Conant",
    "explanation": "یہ مخصوص تعریف، جو سائنس کو ایک متحرک اور ارتقا پذیر عمل کے طور پر پیش کرتی ہے جو مشاہدے اور تجربے سے حاصل کردہ تصورات کی بنیاد پر استوار ہے، جیمز بی. کونینٹ سے منسوب ہے۔ وہ ایک ممتاز کیمیا دان، ہارورڈ یونیورسٹی کے صدر، اور سائنس کی تعلیم میں ایک اہم شخصیت تھے جنہوں نے 'سائنس کی حکمت عملی اور تدبیر' کو سمجھنے پر زور دیا۔"
  },
  {
    "id": 571,
    "text": "A large ship floats on the surface of the ocean. If the temperature of the sea water decreases, causing its density to increase, what happens to the ship's position in the water? (TSTET 19 Jan 2025)\nایک بڑا جہاز سمندر کی سطح پر تیرتا ہے۔ اگر سمندری پانی کا درجہ حرارت کم ہو جائے، جس سے اس کی کثافت بڑھ جائے، تو پانی میں جہاز کی پوزیشن پر کیا اثر پڑے گا؟",
    "options": [
      "The ship will float higher in the water.\nجہاز پانی میں اونچا تیرے گا۔",
      "The ship will float lower in the water.\nجہاز پانی میں نیچا تیرے گا۔",
      "The ship will sink more into the water.\nجہاز پانی میں مزید ڈوب جائے گا۔",
      "There will be no change in the ship's position.\nجہاز کی پوزیشن میں کوئی تبدیلی نہیں آئے گی۔"
    ],
    "correct": "The ship will float higher in the water.",
    "explanation": "ارشمیدس کے اصول کے مطابق، تیرتی ہوئی چیز پر اچھال کی قوت اس کے وزن کے برابر ہوتی ہے۔ یہ اچھال کی قوت ہٹائے گئے سیال کے وزن کے بھی برابر ہے ($F_b = \\rho_{\\text{fluid}} \\times V_{\\text{displaced}} \\times g$)۔ جب پانی کا درجہ حرارت کم ہوتا ہے تو اس کی کثافت ($\\rho_{\\text{fluid}}$) بڑھ جاتی ہے۔ چونکہ جہاز کا وزن اور اس کے لیے درکار اچھال کی قوت مستقل رہتی ہے، اس لیے ہٹائے گئے پانی کا حجم ($V_{\\text{displaced}}$) کم ہونا چاہیے۔ اس کا مطلب ہے کہ جہاز کا کم حصہ ڈوبا ہوا ہے، جس کی وجہ سے وہ اونچا تیرتا ہے۔"
  },
  {
    "id": 572,
    "text": "The diameter of the Uranus when compared with the diameter of the Earth is approximately: (TSTET 19 Jan 2025)\nیورینس کا قطر زمین کے قطر کے مقابلے میں تقریباً کتنا ہے؟",
    "options": [
      "0.95 times\n0.95 گنا",
      "9.50 times\n9.50 گنا",
      "4.00 times\n4.00 گنا",
      "6.00 times\n6.00 گنا"
    ],
    "correct": "4.00 times",
    "explanation": "زمین کا استوائی قطر تقریباً 12,756 کلومیٹر ہے۔ یورینس کا استوائی قطر تقریباً 51,118 کلومیٹر ہے۔ موازنہ کرنے کے لیے، ہم یورینس کے قطر کو زمین کے قطر سے تقسیم کرتے ہیں: $51,118 \\div 12,756 \\approx 4.007$۔ لہذا، یورینس کا قطر زمین کے قطر سے تقریباً 4 گنا زیادہ ہے۔"
  },
  {
    "id": 573,
    "text": "A pendulum in a clock oscillates 160 times in 4 seconds. Then the frequency and time period of the pendulum are: (TSTET 19 Jan 2025)\nایک گھڑی میں پنڈولم 4 سیکنڈ میں 160 بار جھولتا ہے۔ تو پنڈولم کی فریکوئنسی اور ٹائم پیریڈ کیا ہیں؟",
    "options": [
      "Frequency = 10 Hz, Time Period = 0.1 seconds\nفریکوئنسی = 10 ہرٹز، ٹائم پیریڈ = 0.1 سیکنڈ",
      "Frequency = 40 Hz, Time Period = 0.025 seconds\nفریکوئنسی = 40 ہرٹز، ٹائم پیریڈ = 0.025 سیکنڈ",
      "Frequency = 50 Hz, Time Period = 0.02 seconds\nفریکوئنسی = 50 ہرٹز، ٹائم پیریڈ = 0.02 سیکنڈ",
      "Frequency = 160 Hz, Time Period = 0.00625 seconds\nفریکوئنسی = 160 ہرٹز، ٹائم پیریڈ = 0.00625 سیکنڈ"
    ],
    "correct": "Frequency = 40 Hz, Time Period = 0.025 seconds",
    "explanation": "فریکوئنسی (f) فی یونٹ وقت میں جھولوں کی تعداد ہے۔ لہذا، $f = \\frac{\\text{جھولوں کی تعداد}}{\\text{لیا گیا وقت}} = \\frac{160}{4 \\text{ سیکنڈ}} = 40 \\text{ ہرٹز}$۔ ٹائم پیریڈ (T) ایک جھولے کے لیے لیا گیا وقت ہے، جو فریکوئنسی کا معکوس ہے ($T = 1/f$)۔ لہذا، $T = \\frac{1}{40 \\text{ ہرٹز}} = 0.025 \\text{ سیکنڈ}$۔"
  },
  {
    "id": 575,
    "text": "Identify the correct pairs of the processes with their temperature effects. (TSTET 19 Jan 2025)\nان کے درجہ حرارت کے اثرات کے ساتھ عمل کے صحیح جوڑوں کی شناخت کریں۔",
    "options": [
      "Condensation - Cooling process, Evaporation - Warming process\nتکثیف - ٹھنڈک کا عمل، تبخیر - گرمی کا عمل",
      "Condensation - Cooling process, Evaporation Cooling process\nتکثیف - ٹھنڈک کا عمل، تبخیر ٹھنڈک کا عمل",
      "Condensation - Warming process, Evaporation Warming process\nتکثیف - گرمی کا عمل، تبخیر گرمی کا عمل",
      "Condensation - Warming process, Evaporation - Cooling process\nتکثیف - گرمی کا عمل، تبخیر - ٹھنڈک کا عمل"
    ],
    "correct": "Condensation - Warming process, Evaporation - Cooling process",
    "explanation": "تبخیر ایک ٹھنڈک کا عمل ہے کیونکہ سب سے زیادہ توانائی والے مالیکیولز مائع سے نکل جاتے ہیں، جس سے باقی مائع کی اوسط حرکی توانائی اور درجہ حرارت کم ہو جاتا ہے۔ تکثیف اس کے برعکس ہے؛ جب گیس مائع میں بدل جاتی ہے، تو یہ تبخیر کی مخفی حرارت کو ماحول میں خارج کرتی ہے، جس کا گرمی کا اثر ہوتا ہے۔"
  },
  {
    "id": 576,
    "text": "If the line through the centre of gravity falls outside the base of an object, the object will be: (TSTET 19 Jan 2025)\nاگر کشش ثقل کے مرکز سے گزرنے والی لکیر کسی شے کی بنیاد سے باہر گرتی ہے تو وہ شے ہوگی:",
    "options": [
      "Stable\nمستحکم",
      "Unstable\nغیر مستحکم",
      "In neutral equilibrium\nغیر جانبدار توازن میں",
      "In balanced position\nمتوازن پوزیشن میں"
    ],
    "correct": "Unstable",
    "explanation": "کسی شے کے مستحکم توازن میں رہنے کے لیے، اس کے مرکز ثقل سے کھینچی گئی عمودی لکیر کو اس کی سپورٹ کی بنیاد کے اندر گرنا چاہیے۔ اگر یہ لکیر بنیاد سے باہر گرتی ہے، تو کشش ثقل کی قوت ایک ٹارک پیدا کرے گی جو شے کو الٹنے کا سبب بنے گی۔ یہ حالت ایک غیر مستحکم توازن کی تعریف کرتی ہے۔"
  },
  {
    "id": 577,
    "text": "The magnetic effect of electric current is used in medical field. In the medical field, the term MRI refers to: (TSTET 19 Jan 2025)\nبرقی رو کا مقناطیسی اثر طبی میدان میں استعمال ہوتا ہے۔ طبی میدان میں، اصطلاح ایم آر آئی سے مراد ہے:",
    "options": [
      "Main Resonance Infrastructure\nمین ریزوننس انفراسٹرکچر",
      "Magnetic Regenerated Imaging\nمیگنیٹک ریجنریٹڈ امیجنگ",
      "Magnetic Resonance Imaging\nمیگنیٹک ریزوننس امیجنگ",
      "Magnetic Related Imaging\nمیگنیٹک ریلیٹڈ امیجنگ"
    ],
    "correct": "Magnetic Resonance Imaging",
    "explanation": "ایم آر آئی کا مطلب میگنیٹک ریزوننس امیجنگ ہے۔ یہ ایک غیر حملہ آور طبی امیجنگ تکنیک ہے جو جسم کے اندر اعضاء اور بافتوں کی تفصیلی تصاویر بنانے کے لیے مضبوط مقناطیسی فیلڈز اور ریڈیو لہروں کا استعمال کرتی ہے۔"
  },
  {
    "id": 578,
    "text": "The commercial unit of electrical energy (1 kWh) is equivalent to: (TSTET 19 Jan 2025)\nبرقی توانائی کی تجارتی اکائی (1 kWh) کس کے برابر ہے:",
    "options": [
      "360 J",
      "1,000 J",
      "3,60,000 J",
      "36,00,000 J"
    ],
    "correct": "36,00,000 J",
    "explanation": "کلو واٹ آور (kWh) توانائی کی ایک اکائی ہے۔ اس کا حساب طاقت (کلو واٹ میں) کو وقت (گھنٹوں میں) سے ضرب دے کر کیا جاتا ہے۔ 1 کلو واٹ = 1000 واٹ (یا 1000 جول/سیکنڈ) اور 1 گھنٹہ = 3600 سیکنڈ۔ لہذا، $1 \\text{ kWh} = 1000 \\text{ J/s} \\times 3600 \\text{ s} = 3,600,000 \\text{ J}$۔"
  },
  {
    "id": 579,
    "text": "The process of forming a thick oxide layer of Aluminium is called: (TSTET 19 Jan 2025)\nایلومینیم کی ایک موٹی آکسائیڈ تہہ بنانے کے عمل کو کہتے ہیں:",
    "options": [
      "Cathodising\nکیتھوڈائزنگ",
      "Anodising\nاینوڈائزنگ",
      "Coating\nکوٹنگ",
      "Heating\nحرارت دینا"
    ],
    "correct": "Anodising",
    "explanation": "اینوڈائزنگ ایک الیکٹرو کیمیکل عمل ہے جو دھات کی سطح کو ایک آرائشی، پائیدار، سنکنرن مزاحم، اینوڈک آکسائیڈ فنش میں تبدیل کرتا ہے۔ اس عمل میں، ایلومینیم کے حصے کو ایک الیکٹرولائٹک سیل میں اینوڈ بنایا جاتا ہے، جس کی وجہ سے ایلومینیم آکسائیڈ کی ایک موٹی، حفاظتی تہہ بن جاتی ہے۔"
  },
  {
    "id": 580,
    "text": "When a small amount of copper oxide (CuO) is added to dilute hydrochloric acid (HCl), the colour of the product formed is: (TSTET 19 Jan 2025)\nجب تھوڑی مقدار میں کاپر آکسائیڈ (CuO) کو ہلکے ہائیڈروکلورک ایسڈ (HCl) میں شامل کیا جاتا ہے، تو بننے والی مصنوعات کا رنگ ہوتا ہے:",
    "options": [
      "Red\nسرخ",
      "Colourless\nبے رنگ",
      "Yellow\nپیلا",
      "Blue-green\nنیلا-سبز"
    ],
    "correct": "Blue-green",
    "explanation": "کاپر (II) آکسائیڈ (ایک سیاہ ٹھوس) ہائیڈروکلورک ایسڈ کے ساتھ نیوٹرلائزیشن کے رد عمل میں کاپر (II) کلورائیڈ ($CuCl_2$) اور پانی بناتا ہے۔ کیمیائی مساوات یہ ہے: $CuO(s) + 2HCl(aq) \\rightarrow CuCl_2(aq) + H_2O(l)$۔ کاپر (II) کلورائیڈ کا آبی محلول ایک مخصوص نیلے-سبز رنگ کا ہوتا ہے۔"
  },
  {
    "id": 581,
    "text": "The correct set of chemicals used in the manufacturing of polyesters is: (TSTET 19 Jan 2025)\nپولیسٹر کی تیاری میں استعمال ہونے والے کیمیکلز کا صحیح سیٹ ہے:",
    "options": [
      "Acetic acid, Butanol, and Glycerol\nایسیٹک ایسڈ، بیوٹانول، اور گلیسرول",
      "Methanol, Acetone, and Glycerol\nمیتھانول، ایسیٹون، اور گلیسرول",
      "Terephthalic acid, Dimethyl ether, and Dihydric alcohol\nٹیریفتھالک ایسڈ، ڈائی میتھائل ایتھر، اور ڈائی ہائیڈرک الکوحل",
      "Sodium hydroxide, Ethylene glycol, and Terephthalic acid\nسوڈیم ہائیڈرو آکسائیڈ، ایتھیلین گلائکول، اور ٹیریفتھالک ایسڈ"
    ],
    "correct": "Terephthalic acid, Dimethyl ether, and Dihydric alcohol",
    "explanation": "پولیسٹر وہ پولیمر ہیں جو ڈائی کاربو آکسیلک ایسڈ اور ڈائیول (ڈائی ہائیڈرک الکوحل) کے درمیان کنڈینسیشن کے رد عمل سے بنتے ہیں۔ سب سے عام پولیسٹر، PET، ٹیریفتھالک ایسڈ اور ایتھیلین گلائکول (ایک ڈائی ہائیڈرک الکوحل) سے بنتا ہے۔ آپشن 3 میں مونومر کی صحیح اقسام شامل ہیں: 'ٹیریفتھالک ایسڈ' (ایک ڈائی کاربو آکسیلک ایسڈ) اور 'ڈائی ہائیڈرک الکوحل' (ڈائیول کی عمومی کلاس)۔ 'ڈائی میتھائل ایتھر' کا شامل ہونا سوال میں ممکنہ طور پر ایک غلطی ہے، لیکن یہ آپشن بہترین انتخاب ہے۔"
  },
  {
    "id": 582,
    "text": "The alloy of copper and zinc is known as: (TSTET 19 Jan 2025)\nتانبے اور زنک کے مرکب کو کہا جاتا ہے:",
    "options": [
      "brass\nپیتل",
      "steel\nاسٹیل",
      "solder\nسولڈر",
      "bronze\nکانسی"
    ],
    "correct": "brass",
    "explanation": "پیتل ایک مرکب ہے جو بنیادی طور پر تانبے اور زنک سے بنتا ہے۔ کانسی ایک مرکب ہے جو بنیادی طور پر تانبے پر مشتمل ہوتا ہے، عام طور پر تقریباً 12-12.5% ٹن کے ساتھ۔ اسٹیل لوہے اور کاربن کا ایک مرکب ہے۔ سولڈر ایک پگھلنے والا دھاتی مرکب ہے جو کم پگھلنے والے دھاتی ٹکڑوں کو جوڑنے کے لیے استعمال ہوتا ہے۔"
  },
  {
    "id": 583,
    "text": "Identify the ecosystem in which 'Fennec Fox' is present: (TSTET 19 Jan 2025)\nاس ماحولیاتی نظام کی شناخت کریں جس میں 'فینیک فاکس' موجود ہے:",
    "options": [
      "Mangrove Ecosystem\nمینگروو ایکو سسٹم",
      "Forest Ecosystem\nجنگلاتی ماحولیاتی نظام",
      "Grassland Ecosystem\nگھاس کا میدان ماحولیاتی نظام",
      "Desert Ecosystem\nصحرا کا ماحولیاتی نظام"
    ],
    "correct": "Desert Ecosystem",
    "explanation": "فینیک فاکس ایک چھوٹی لومڑی کی نسل ہے جو شمالی افریقہ اور جزیرہ نما عرب کے صحراؤں میں پائی جاتی ہے۔ اس کی جسمانی خصوصیات، جیسے گرمی کو ختم کرنے کے لیے بڑے کان اور گرم ریت سے بچاؤ کے لیے بالوں سے ڈھکے ہوئے پنجے، گرم صحرائی ماحولیاتی نظام میں بقا کے لیے مخصوص موافقت ہیں۔"
  },
  {
    "id": 584,
    "text": "Identify the INCORRECT pair from the following: (TSTET 19 Jan 2025)\nمندرجہ ذیل میں سے غلط جوڑے کی شناخت کریں:",
    "options": [
      "Ascorbic acid - Scurvy\nایسکوربک ایسڈ - اسکروی",
      "Cyanocobalamin - Pernicious anaemia\nسیانوکوبالامین - پرنیشیئس انیمیا",
      "Pyridoxine - Glossitis\nپائریڈوکسین - گلوسائٹس",
      "Phylloquinone - problems related to blood clotting\nفائیلوکوئنون - خون کے جمنے سے متعلق مسائل"
    ],
    "correct": "Pyridoxine - Glossitis",
    "explanation": "ایسکوربک ایسڈ (وٹامن سی) کی کمی سے اسکروی ہوتی ہے۔ سیانوکوبالامین (وٹامن بی 12) کی کمی سے پرنیشیئس انیمیا ہوتا ہے۔ فائیلوکوئنون (وٹامن کے) خون کے جمنے کے لیے بہت ضروری ہے۔ اگرچہ پائریڈوکسین (وٹامن بی 6) کی کمی سے گلوسائٹس (زبان کی سوزش) ہو سکتا ہے، لیکن گلوسائٹس خاص طور پر رائبو فلاوین (وٹامن بی 2) کی کمی سے وابستہ ایک زیادہ نمایاں اور کلاسک علامت ہے۔ اس طرح، اس جوڑے کو اس تناظر میں سب سے کم درست یا غلط سمجھا جاتا ہے۔"
  },
  {
    "id": 585,
    "text": "Identify the plant tissue that stores food from the following: (TSTET 19 Jan 2025)\nمندرجہ ذیل میں سے پودے کے اس ٹشو کی شناخت کریں جو خوراک ذخیرہ کرتا ہے:",
    "options": [
      "Ground tissue\nگراؤنڈ ٹشو",
      "Dermal tissue\nڈرمل ٹشو",
      "Vascular tissue\nویسکولر ٹشو",
      "Meristematic tissue\nمیرسٹیمیٹک ٹشو"
    ],
    "correct": "Ground tissue",
    "explanation": "پودوں میں گراؤنڈ ٹشو کے کئی کام ہوتے ہیں، جن میں فوٹو سنتھیسس، سپورٹ، اور ذخیرہ شامل ہیں۔ پیرنکائما خلیات، جو گراؤنڈ ٹشو کا ایک بڑا جزو ہیں، نشاستے، لپڈز، اور پروٹین کی شکل میں خوراک ذخیرہ کرنے کے لیے مخصوص ہیں۔ ڈرمل ٹشو تحفظ فراہم کرتا ہے، ویسکولر ٹشو نقل و حمل کو سنبھالتا ہے، اور میرسٹیمیٹک ٹشو نمو کے لیے ذمہ دار ہے۔"
  },
  {
    "id": 586,
    "text": "Identify the INCORRECT order of blood flow in humans from the following: (TSTET 19 Jan 2025)\nمندرجہ ذیل میں سے انسانوں میں خون کے بہاؤ کی غلط ترتیب کی شناخت کریں:",
    "options": [
      "Right ventricle → semilunar valve → lungs → pulmonary vein → left atrium\nدایاں وینٹریکل → سیمیلیونر والو → پھیپھڑے → پلمونری وین → بایاں ایٹریم",
      "Lungs → pulmonary vein → left atrium → tricuspid valve → left ventricle\nپھیپھڑے → پلمونری وین → بایاں ایٹریم → ٹرائیکسپڈ والو → بایاں وینٹریکل",
      "Body parts → inferior and superior vena cova → right atrium → tricuspid valve → right ventricle\nجسم کے حصے → انفیرئیر اور سپیریئر وینا کاوا → دایاں ایٹریم → ٹرائیکسپڈ والو → دایاں وینٹریکل",
      "Left atrium → tricuspid valve → left ventricle → systemic valve → aorta\nبایاں ایٹریم → ٹرائیکسپڈ والو → بایاں وینٹریکل → سسٹیمک والو → شہ رگ"
    ],
    "correct": "Lungs → pulmonary vein → left atrium → tricuspid valve → left ventricle",
    "explanation": "یہ آپشن دل کے بائیں جانب خون کے بہاؤ کے راستے کو غلط طریقے سے بیان کرتا ہے۔ خون بائیں ایٹریم سے بائیں وینٹریکل میں مائٹرل والو (جسے بائیکسپڈ والو بھی کہا جاتا ہے) سے گزر کر بہتا ہے، نہ کہ ٹرائیکسپڈ والو سے۔ ٹرائیکسپڈ والو دل کے دائیں جانب، دائیں ایٹریم اور دائیں وینٹریکل کے درمیان واقع ہوتا ہے۔"
  },
  {
    "id": 587,
    "text": "Identify the type of pollution that can be controlled by installing Electrostatic precipitators: (TSTET 19 Jan 2025)\nالیکٹرو اسٹیٹک پریسیپیٹیٹر نصب کرکے کس قسم کی آلودگی پر قابو پایا جاسکتا ہے، اس کی شناخت کریں:",
    "options": [
      "Air pollution\nفضائی آلودگی",
      "Water pollution\nآبی آلودگی",
      "Soil pollution\nزمینی آلودگی",
      "Noise pollution\nشور کی آلودگی"
    ],
    "correct": "Air pollution",
    "explanation": "الیکٹرو اسٹیٹک پریسیپیٹیٹر (ESP) ایک آلہ ہے جو ہوا سے ذرات کو ہٹانے کے لیے استعمال ہوتا ہے۔ یہ گیس کے دھارے، جیسے صنعتی دھواں کی چمنیوں سے نکلنے والے اخراج، سے نجاست کو دور کرنے کے لیے برقی چارج کا استعمال کرکے کام کرتا ہے۔ لہذا، یہ فضائی آلودگی پر قابو پانے کے لیے ایک کلیدی ٹیکنالوجی ہے۔"
  },
  {
    "id": 588,
    "text": "Identify the common form of vegetative propagation that is used to obtain a plant with desirable characters from the following: (TSTET 19 Jan 2025)\nنباتاتی تولید کی اس عام شکل کی شناخت کریں جو مندرجہ ذیل میں سے مطلوبہ خصوصیات والے پودے حاصل کرنے کے لیے استعمال ہوتی ہے:",
    "options": [
      "Cutting\nکٹنگ",
      "Layering\nلیئرنگ",
      "Grafting\nگرافٹنگ",
      "Stolon formation\nسٹولن کی تشکیل"
    ],
    "correct": "Grafting",
    "explanation": "گرافٹنگ ایک باغبانی کی تکنیک ہے جو خاص طور پر دو مختلف پودوں کی مطلوبہ خصوصیات کو یکجا کرنے کے لیے استعمال ہوتی ہے۔ ایک پودے سے جس میں مطلوبہ خصوصیات ہوں (جیسے اچھا پھل) سے ایک سائن (ایک کلی یا شاخ) کو دوسرے پودے کی جڑ سے جوڑا جاتا ہے جس میں دیگر مطلوبہ خصوصیات ہوں (جیسے بیماری کے خلاف مزاحمت یا سختی)۔ یہ دونوں کی بہترین خصوصیات کے ساتھ ایک ہی پودا بنانے کی اجازت دیتا ہے۔"
  },
  {
    "id": 589,
    "text": "Identify the disease caused by bacteria in humans from the following: (TSTET 19 Jan 2025)\nمندرجہ ذیل میں سے انسانوں میں بیکٹیریا کی وجہ سے ہونے والی بیماری کی شناخت کریں:",
    "options": [
      "Japanese Encephalitis\nجاپانی انسیفلائٹس",
      "Chikungunya\nچکن گونیا",
      "Malaria\nملیریا",
      "Cholera\nہیضہ"
    ],
    "correct": "Cholera",
    "explanation": "ہیضہ ایک متعدی بیماری ہے جو بیکٹیریا *ویبریو کولیری* کی وجہ سے ہوتی ہے۔ جاپانی انسیفلائٹس اور چکن گونیا وائرل بیماریاں ہیں، اور ملیریا *پلازموڈیم* جینس کے پروٹوزووا پرجیوی کی وجہ سے ہوتا ہے۔"
  },
  {
    "id": 590,
    "text": "Which of the following in human eye helps to detect colours? (TSTET 19 Jan 2025)\nانسانی آنکھ میں مندرجہ ذیل میں سے کون سا رنگوں کا پتہ لگانے میں مدد کرتا ہے؟",
    "options": [
      "Iris\nآئرس",
      "Cones\nکونز",
      "Rods\nراڈز",
      "Blind spot\nبلائنڈ اسپاٹ"
    ],
    "correct": "Cones",
    "explanation": "آنکھ کے ریٹنا میں دو قسم کے فوٹو ریسیپٹر خلیات ہوتے ہیں۔ راڈز کم روشنی کی حالت میں بینائی کے لیے ذمہ دار ہیں لیکن رنگ کا پتہ نہیں لگا سکتے۔ کونز روشن روشنی میں کام کرتے ہیں اور رنگین بینائی کے لیے ذمہ دار ہیں۔ آئرس پُتلی کے سائز کو کنٹرول کرتا ہے، اور بلائنڈ اسپاٹ میں کوئی فوٹو ریسیپٹر نہیں ہوتا ہے۔"
  },
  {
    "id": 591,
    "text": "Identify the renewable resource from the following: (TSTET 19 Jan 2025)\nمندرجہ ذیل میں سے قابل تجدید وسائل کی شناخت کریں:",
    "options": [
      "Minerals\nمعدنیات",
      "Coal\nکوئلہ",
      "Forest\nجنگل",
      "Natural gas\nقدرتی گیس"
    ],
    "correct": "Forest",
    "explanation": "ایک قابل تجدید وسیلہ انسانی زندگی کے اندر قدرتی طور پر دوبارہ بھرا جا سکتا ہے۔ جنگلات قابل تجدید ہیں کیونکہ کاٹے گئے درختوں کی جگہ نئے درخت اگائے جا سکتے ہیں۔ کوئلہ، قدرتی گیس اور معدنیات ناقابل تجدید وسائل ہیں کیونکہ یہ لاکھوں سالوں میں بنتے ہیں اور ایک بار استعمال ہونے کے بعد انہیں تبدیل نہیں کیا جا سکتا۔"
  },
  {
    "id": 592,
    "text": "Which one of the following is NOT a connective tissue? (TSTET 19 Jan 2025)\nمندرجہ ذیل میں سے کون سا ایک جوڑنے والا ٹشو نہیں ہے؟",
    "options": [
      "Cartilage\nکارٹلیج",
      "Ligament\nلگامنٹ",
      "Blood\nخون",
      "Non-striated muscle\nغیر دھاری دار پٹھے"
    ],
    "correct": "Non-striated muscle",
    "explanation": "کارٹلیج، لگامنٹس، اور خون سبھی جوڑنے والے ٹشو کی خصوصی شکلیں ہیں، جو دوسرے ٹشوز اور اعضاء کو سہارا دینے، جوڑنے اور حفاظت کرنے کا کام کرتی ہیں۔ غیر دھاری دار پٹھے، جنہیں ہموار پٹھے بھی کہا جاتا ہے، پٹھوں کے ٹشو کی ایک قسم ہے، جو سکڑنے اور حرکت کے لیے ذمہ دار ہے۔"
  },
  {
    "id": 593,
    "text": "Which one of the following is NOT an example for feedback mechanism? (TSTET 19 Jan 2025)\nمندرجہ ذیل میں سے کون سا فیڈ بیک میکانزم کی مثال نہیں ہے؟",
    "options": [
      "As the baby sucks, more prolactin is produced which enhances milk production\nجیسے ہی بچہ چوستا ہے، زیادہ پرولیکٹن پیدا ہوتا ہے جو دودھ کی پیداوار کو بڑھاتا ہے۔",
      "When the glucose level in blood rises above the normal level, one type of cells in pancreas respond by producing more amount of insulin.\nجب خون میں گلوکوز کی سطح معمول سے بڑھ جاتی ہے، تو لبلبے میں ایک قسم کے خلیے زیادہ مقدار میں انسولین پیدا کرکے جواب دیتے ہیں۔",
      "Running in fear when chased by a dog, increases the rate of heart beat\nکتے کے پیچھا کرنے پر خوف سے بھاگنے سے دل کی دھڑکن بڑھ جاتی ہے۔",
      "After entering a dark room, after some time slowly objects in the room can be seen\nایک تاریک کمرے میں داخل ہونے کے بعد، کچھ دیر بعد کمرے میں موجود اشیاء آہستہ آہستہ نظر آنے لگتی ہیں۔"
    ],
    "correct": "Running in fear when chased by a dog, increases the rate of heart beat",
    "explanation": "فیڈ بیک میکانزم ایک حیاتیاتی لوپ ہے جہاں آؤٹ پٹ ان پٹ کو کنٹرول کرتا ہے، اکثر ہومیوسٹاسس کے لیے۔ دودھ کی پیداوار (مثبت فیڈ بیک)، انسولین کا اخراج (منفی فیڈ بیک)، اور آنکھوں کا اندھیرے سے مطابقت پیدا کرنا سب فیڈ بیک میکانزم ہیں۔ پیچھا کیے جانے پر دل کی دھڑکن کا بڑھنا ایک بیرونی محرک کا براہ راست 'لڑو یا بھاگو' کا ردعمل ہے، نہ کہ خود کو منظم کرنے والا لوپ۔"
  },
  {
    "id": 594,
    "text": "Identify the organelle present only in animal cell: (TSTET 19 Jan 2025)\nاس آرگنیل کی شناخت کریں جو صرف جانوروں کے خلیے میں موجود ہے:",
    "options": [
      "Centrosomes\nسینٹروسومز",
      "Cell wall\nخلیے کی دیوار",
      "Golgi complex\nگولگی کمپلیکس",
      "Ribosomes\nرائبوسومز"
    ],
    "correct": "Centrosomes",
    "explanation": "سینٹروسومز، جو خلیے کی تقسیم میں اہم کردار ادا کرتے ہیں، جانوروں کے خلیوں میں پائے جاتے ہیں لیکن پودوں کے خلیوں میں غائب ہوتے ہیں۔ خلیے کی دیوار پودوں کے خلیوں کی خصوصیت ہے لیکن جانوروں کے خلیوں میں غائب ہوتی ہے۔ گولگی کمپلیکس اور رائبوسومز دونوں جانوروں اور پودوں کے خلیوں میں پائے جاتے ہیں۔"
  },
  {
    "id": 595,
    "text": "In a team teaching scenario, two teachers collaborate to teach a science unit on \"Metals and Non metals\". One teacher focuses on the theoretical aspects, while the other conducts hands-on experiments. This approach is an example for: (TSTET 19 Jan 2025)\nٹیم ٹیچنگ کے منظر نامے میں، دو اساتذہ \"دھاتیں اور غیر دھاتیں\" پر ایک سائنس یونٹ پڑھانے کے لیے تعاون کرتے ہیں۔ ایک استاد نظریاتی پہلوؤں پر توجہ مرکوز کرتا ہے، جبکہ دوسرا عملی تجربات کرتا ہے۔ یہ نقطہ نظر کس کی ایک مثال ہے:",
    "options": [
      "Lecture-based teaching\nلیکچر پر مبنی تدریس",
      "Collaborative learning\nباہمی تعاون سے سیکھنا",
      "Dual instruction method\nدوہری ہدایاتی طریقہ",
      "Independent study\nآزاد مطالعہ"
    ],
    "correct": "Dual instruction method",
    "explanation": "یہ منظر نامہ ٹیم ٹیچنگ کی ایک شکل ہے جہاں دو اساتذہ بیک وقت مختلف لیکن تکمیلی طریقوں (نظریہ اور عملی) سے ہدایات دیتے ہیں۔ اسے بہترین طور پر دوہری ہدایاتی یا متوازی ہدایاتی طریقہ کے طور پر بیان کیا جا سکتا ہے۔ 'باہمی تعاون سے سیکھنا' عام طور پر طلباء کے مل کر کام کرنے سے مراد ہے، نہ کہ تدریسی حکمت عملی سے۔"
  },
  {
    "id": 596,
    "text": "After learning the lesson 'Classification of Elements' the students are able to classify the given elements as s, p, d and f block elements. Thus the teacher achieved which of the following objectives? (TSTET 19 Jan 2025)\n'عناصر کی درجہ بندی' کا سبق سیکھنے کے بعد، طلباء دیے گئے عناصر کو s, p, d اور f بلاک عناصر کے طور پر درجہ بندی کرنے کے قابل ہو جاتے ہیں۔ اس طرح استاد نے مندرجہ ذیل میں سے کون سا مقصد حاصل کیا؟",
    "options": [
      "Skill\nمہارت",
      "Knowledge\nعلم",
      "Imitation\nتقلید",
      "Precision\nدرستگی"
    ],
    "correct": "Knowledge",
    "explanation": "بلوم کی درجہ بندی کے مطابق، سیکھے ہوئے معیارات کی بنیاد پر اشیاء کو 'درجہ بندی' کرنے کی صلاحیت علمی ڈومین کے تحت آتی ہے، خاص طور پر 'سمجھ' یا 'ادراک' کی سطح پر۔ اس پورے ڈومین کو وسیع پیمانے پر 'علم' کے مقاصد حاصل کرنا کہا جاتا ہے۔ 'مہارت'، 'تقلید'، اور 'درستگی' عام طور پر سائیکوموٹر ڈومین سے وابستہ ہیں، جس میں جسمانی اعمال شامل ہیں۔"
  },
  {
    "id": 597,
    "text": "'Making Sundial by students in the laboratory' represents this level in Edgar Dale's cone of experience: (TSTET 19 Jan 2025)\n'لیبارٹری میں طلباء کے ذریعے دھوپ گھڑی بنانا' ایڈگر ڈیل کے تجربے کے کون میں اس سطح کی نمائندگی کرتا ہے:",
    "options": [
      "Verbal symbols\nزبانی علامات",
      "Exhibits\nنمائشیں",
      "Visual symbols\nبصری علامات",
      "Direct purposeful experiences\nبراہ راست بامقصد تجربات"
    ],
    "correct": "Direct purposeful experiences",
    "explanation": "ایڈگر ڈیل کا تجربے کا کون سیکھنے کے تجربات کو سب سے زیادہ تجریدی (زبانی علامات) سے اوپر اور سب سے زیادہ ٹھوس سے نیچے تک ترتیب دیتا ہے۔ حقیقت میں کچھ بنانے اور کرنے کا عمل، جیسے دھوپ گھڑی بنانا، سیکھنے کی سب سے مؤثر شکل کی نمائندگی کرتا ہے، جسے کون کی بنیاد پر 'براہ راست، بامقصد تجربات' کے طور پر درجہ بند کیا گیا ہے۔"
  },
  {
    "id": 598,
    "text": "A biology teacher finds that her students are unable to understand some topics. She further wants to know why they are unable to understand those topics. She prepares an assessment tool for the purpose. The assessment done in this context is: (TSTET 19 Jan 2025)\nایک حیاتیات کی ٹیچر کو معلوم ہوتا ہے کہ اس کے طلباء کچھ موضوعات کو سمجھنے سے قاصر ہیں۔ وہ مزید جاننا چاہتی ہے کہ وہ ان موضوعات کو کیوں نہیں سمجھ پا رہے ہیں۔ وہ اس مقصد کے لیے ایک تشخیصی آلہ تیار کرتی ہے۔ اس تناظر میں کی گئی تشخیص ہے:",
    "options": [
      "Summative assessment\nخلاصہ تشخیص",
      "Placement assessment\nپلیسمنٹ تشخیص",
      "Diagnostic assessment\nتشخیصی تشخیص",
      "Norm-referenced assessment\nمعیار پر مبنی تشخیص"
    ],
    "correct": "Diagnostic assessment",
    "explanation": "تشخیص کا بنیادی مقصد سیکھنے میں دشواریوں کی مخصوص وجوہات کی نشاندہی کرنا ہے ('وہ کیوں سمجھنے سے قاصر ہیں')۔ یہ تشخیصی تشخیص کی تعریف ہے، جس کا مقصد سیکھنے کے خلاء اور غلط فہمیوں کی تشخیص کرنا ہے تاکہ ہدفی تدریس اور تدارک کی اطلاع دی جا سکے۔ خلاصہ تشخیص ایک یونٹ کے آخر میں سیکھنے کا جائزہ لیتی ہے۔"
  },
  {
    "id": 599,
    "text": "Assertion: Children with special educational needs (SEN) should be provided education in special schools meant for them. Reason : The International Conference on Special Needs Education held at Salamanca-Spain in 1994 had stated that the children with special needs learn effectively when they are included in the mainstream schools... (TSTET 19 Jan 2025)\nدعویٰ: خصوصی تعلیمی ضروریات (SEN) والے بچوں کو ان کے لیے بنائے گئے خصوصی اسکولوں میں تعلیم فراہم کی جانی چاہیے۔ وجہ: 1994 میں سلامانکا-اسپین میں منعقدہ خصوصی ضروریات کی تعلیم پر بین الاقوامی کانفرنس میں کہا گیا تھا کہ خصوصی ضروریات والے بچے اس وقت مؤثر طریقے سے سیکھتے ہیں جب انہیں مرکزی دھارے کے اسکولوں میں شامل کیا جاتا ہے۔",
    "options": [
      "Both A and R are true but R is not the correct explanation of A.\nA اور R دونوں سچ ہیں لیکن R, A کی صحیح وضاحت نہیں ہے۔",
      "Both A and R are true and R is the correct explanation of A.\nA اور R دونوں سچ ہیں اور R, A کی صحیح وضاحت ہے۔",
      "A is true and R is false.\nA سچ ہے اور R غلط ہے۔",
      "A is false and R is true.\nA غلط ہے اور R سچ ہے۔"
    ],
    "correct": "A is false and R is true.",
    "explanation": "دعویٰ (A) تعلیم کے ایک الگ تھلگ ماڈل کو فروغ دیتا ہے، جو ایک پرانا نظریہ ہے۔ وجہ (R) 1994 کی سلامانکا کانفرنس کے نتیجے کو صحیح طور پر بیان کرتی ہے، جو جامع تعلیم کو فروغ دینے والا ایک تاریخی واقعہ تھا—یہ خیال کہ خصوصی ضروریات والے بچوں کو مرکزی دھارے کے اسکولوں میں تعلیم دی جانی چاہیے۔ لہذا، دعویٰ غلط ہے، اور وجہ ایک سچا تاریخی بیان ہے جو دعوے کی تردید کرتا ہے۔"
  },
  {
    "id": 600,
    "text": "Why do you think all aquatic animals are not cold blooded? Questions like this can be asked to students who are in this stage of cognitive development according to Piaget. (TSTET 19 Jan 2025)\nآپ کے خیال میں تمام آبی جانور سرد خون والے کیوں نہیں ہوتے؟ اس طرح کے سوالات ان طلباء سے پوچھے جا سکتے ہیں جو پیاجے کے مطابق علمی نشوونما کے اس مرحلے میں ہیں۔",
    "options": [
      "Sensory motor stage\nحسی حرکی مرحلہ",
      "Preoperational stage\nقبل از عملی مرحلہ",
      "Concrete Operational stage\nٹھوس عملی مرحلہ",
      "Formal Operational stage\nرسمی عملی مرحلہ"
    ],
    "correct": "Formal Operational stage",
    "explanation": "اس سوال کے لیے تجریدی استدلال، فرضی سوچ، اور ایک عمومی اصول کے استثناء پر غور کرنے کی صلاحیت کی ضرورت ہے (مثلاً، وہیل اور ڈولفن جیسے آبی ممالیہ گرم خون والے ہیں)۔ یہ علمی صلاحیتیں پیاجے کے رسمی عملی مرحلے کی خصوصیت ہیں، جو عام طور پر جوانی کے دوران (تقریباً 12 سال اور اس سے اوپر) تیار ہوتی ہیں۔ پہلے کے مراحل زیادہ ٹھوس اور براہ راست استدلال تک محدود ہیں۔"
  },
  {
    "id": "601",
    "text": "Assume that Raju has an area of 225 cm² on his head. The force due to the air in a column of atmospheric height is nearly equal to the force of gravity on an object of mass 225 kg. Then the approximate pressure exerted on Raju's head by the atmosphere is (take g = 10 m/s²). (TSTET 11 Jan 2025)\nفرض کریں کہ راجو کے سر کا رقبہ 225 مربع سینٹی میٹر ہے۔ فضائی بلندی کے کالم میں ہوا کی وجہ سے لگنے والی قوت تقریباً 225 کلوگرام کمیت کی شے پر کشش ثقل کی قوت کے برابر ہے۔ تو راجو کے سر پر فضا کی طرف سے لگایا جانے والا تخمینی دباؤ کیا ہوگا؟ (g = 10 m/s² لیں)۔",
    "options": [
      "100 Pa",
      "1000 Pa",
      "10,000 Pa",
      "1,00,000 Pa"
    ],
    "correct": "1,00,000 Pa",
    "explanation": "دباؤ کی تعریف فی اکائی رقبہ پر لگنے والی قوت کے طور پر کی جاتی ہے (P = F/A)۔ سب سے پہلے، لگائی گئی قوت کا حساب لگائیں، جو 225 کلوگرام کمیت پر کشش ثقل کی قوت کے برابر دی گئی ہے۔ F = mg کا استعمال کرتے ہوئے، قوت 225 kg × 10 m/s² = 2250 N ہے۔ اس کے بعد، رقبہ کو cm² سے m² میں تبدیل کریں: 225 cm² = 225 × (10⁻² m)² = 225 × 10⁻⁴ m² = 0.0225 m²۔ آخر میں، دباؤ کا حساب لگائیں: P = 2250 N / 0.0225 m² = 100,000 Pa۔"
  },
  {
    "id": "602",
    "text": "The Cassiopeia constellation is visible from Telangana during this season. (TSTET 11 Jan 2025)\nذات الکرسی (Cassiopeia) کا جھرمٹ تلنگانہ سے اس موسم میں نظر آتا ہے۔",
    "options": [
      "Summer\nگرمی",
      "Rainy season\nبرسات کا موسم",
      "Winter\nسردی",
      "Greeshma\nگریشما"
    ],
    "correct": "Winter",
    "explanation": "ذات الکرسی شمالی آسمان کا ایک نمایاں جھرمٹ ہے۔ شمالی نصف کرہ میں، اسے خزاں اور سردیوں کے دوران بہترین طور پر دیکھا جا سکتا ہے۔ تلنگانہ، ہندوستان جیسے مقام سے، یہ سردیوں کے مہینوں میں سب سے زیادہ نمایاں اور آسمان میں بلند ہوگا۔"
  },
  {
    "id": "603",
    "text": "Consider the following two statements about lenses placed in contact: Statement I: The resultant power of the lenses placed in contact is given by the algebraic sum of the individual powers. Statement II: The resultant focal length of the lenses placed in contact is given by the algebraic sum of the individual focal lengths. Choose the correct answer. (TSTET 11 Jan 2025)\nایک دوسرے سے جڑے ہوئے عدسوں کے بارے میں مندرجہ ذیل دو بیانات پر غور کریں: بیان I: ایک دوسرے سے جڑے ہوئے عدسوں کی مجموعی طاقت انفرادی طاقتوں کے الجبری مجموعہ کے برابر ہوتی ہے۔ بیان II: ایک دوسرے سے جڑے ہوئے عدسوں کی مجموعی فوکل لمبائی انفرادی فوکل لمبائیوں کے الجبری مجموعہ کے برابر ہوتی ہے۔ صحیح جواب کا انتخاب کریں۔",
    "options": [
      "Statement I is true Statement II is false.\nبیان I صحیح ہے؛ بیان II غلط ہے۔",
      "Statement I is false; Statement II is true.\nبیان I غلط ہے؛ بیان II صحیح ہے۔",
      "Both Statement I and Statement II are true.\nبیان I اور بیان II دونوں صحیح ہیں۔",
      "Both Statement I and Statement II are false.\nبیان I اور بیان II دونوں غلط ہیں۔"
    ],
    "correct": "Statement I is true Statement II is false.",
    "explanation": "جب باریک عدسوں کو ایک دوسرے سے جوڑ کر رکھا جاتا ہے، تو ان کی طاقتیں الجبری طور پر جمع ہو جاتی ہیں (P_net = P₁ + P₂ + ...)۔ اس لیے، بیان I صحیح ہے۔ تاہم، مجموعی فوکل لمبائی کے لیے، معکوسات جمع ہوتے ہیں (1/f_net = 1/f₁ + 1/f₂ + ...)۔ فوکل لمبائیاں خود براہ راست جمع نہیں ہوتیں۔ اس لیے، بیان II غلط ہے۔"
  },
  {
    "id": "604",
    "text": "Ramesh, an 8th class student, is trying to produce sound but is unable to do so. The most appropriate reason could be: (TSTET 11 Jan 2025)\nرمیش، آٹھویں جماعت کا ایک طالب علم، آواز پیدا کرنے کی کوشش کر رہا ہے لیکن ایسا کرنے سے قاصر ہے۔ اس کی سب سے مناسب وجہ ہو سکتی ہے:",
    "options": [
      "The object is kept in water, which prevents sound production.\nشے کو پانی میں رکھا گیا ہے، جو آواز کی پیداوار کو روکتا ہے۔",
      "The object is not vibrating.\nشے میں ارتعاش نہیں ہو رہا ہے۔",
      "Sound can only be produced by objects moving at high speeds.\nآواز صرف تیز رفتاری سے حرکت کرنے والی اشیاء سے پیدا ہو سکتی ہے۔",
      "Sound can travel through a vacuum.\nآواز خلا میں سفر کر سکتی ہے۔"
    ],
    "correct": "The object is not vibrating.",
    "explanation": "آواز بنیادی طور پر ارتعاش سے پیدا ہوتی ہے۔ کسی شے کے لیے صوتی لہریں پیدا کرنے کے لیے، اس کا ارتعاش کرنا ضروری ہے، جس سے آس پاس کا واسطہ (جیسے ہوا یا پانی) بھی مرتعش ہوتا ہے۔ اگر شے میں ارتعاش نہیں ہو رہا ہے، تو کوئی آواز پیدا نہیں ہوگی۔ دیگر اختیارات غلط ہیں: آواز پانی میں پیدا ہو سکتی ہے اور اچھی طرح سفر کرتی ہے؛ آواز کی پیداوار کے لیے تیز رفتاری کی ضرورت نہیں ہے؛ اور آواز خلا میں سفر نہیں کر سکتی۔"
  },
  {
    "id": "605",
    "text": "In view of the value of specific heat of Ice', choose the correct answer. A) In SI System of units - 2100 J/kg-K. B) In CGS system of units - 0.50 cal/g-°C. (TSTET 11 Jan 2025)\n'برف کی حرارتِ مخصوصہ' کی قدر کے پیش نظر، صحیح جواب کا انتخاب کریں۔ A) اکائیوں کے SI نظام میں - 2100 J/kg-K۔ B) اکائیوں کے CGS نظام میں - 0.50 cal/g-°C۔",
    "options": [
      "Both A and B are true\nA اور B دونوں صحیح ہیں",
      "Both A and B are false\nA اور B دونوں غلط ہیں",
      "A is true: B is false\nA صحیح ہے: B غلط ہے",
      "A is false B is true\nA غلط ہے: B صحیح ہے"
    ],
    "correct": "Both A and B are true",
    "explanation": "برف کی حرارتِ مخصوصہ کی صلاحیت SI نظام میں تقریباً 2100 J/kg-K ہے۔ CGS نظام میں، اس کی قدر تقریباً 0.5 cal/g-°C ہے۔ دونوں بیانات A اور B اپنے متعلقہ اکائی کے نظاموں میں برف کی حرارتِ مخصوصہ کی تسلیم شدہ قدروں کو صحیح طور پر بیان کرتے ہیں۔"
  },
  {
    "id": "606",
    "text": "A scenario that is most likely to produce the least amount of friction. (TSTET 11 Jan 2025)\nایک ایسا منظر نامہ جس میں رگڑ کی سب سے کم مقدار پیدا ہونے کا امکان ہے۔",
    "options": [
      "A rubber tire skidding on ice.\nبرف پر پھسلتا ہوا ربڑ کا ٹائر۔",
      "A heavy box sliding across a rough concrete floor.\nایک کھردری کنکریٹ کے فرش پر پھسلتا ہوا بھاری باکس۔",
      "A smooth metal ball rolling on a steel surface.\nاسٹیل کی سطح پر لڑھکتی ہوئی ایک ہموار دھاتی گیند۔",
      "A stationary object on a rough surface before it begins to move.\nحرکت شروع کرنے سے پہلے کھردری سطح پر ایک ساکن شے۔"
    ],
    "correct": "A smooth metal ball rolling on a steel surface.",
    "explanation": "اس منظر نامے میں دو ہموار، سخت سطحوں (دھات پر اسٹیل) کے درمیان لڑھکنے والی رگڑ شامل ہے، جو عام طور پر پھسلنے والی رگڑ یا سکونی رگڑ سے بہت کم ہوتی ہے۔ برف پر پھسلنے (آپشن 1) میں پھسلنے والی رگڑ کم ہوتی ہے، لیکن لڑھکنے والی رگڑ عام طور پر اس سے بھی کم ہوتی ہے۔ کھردری کنکریٹ پر بھاری باکس کو پھسلانے (آپشن 2) میں زیادہ پھسلنے والی رگڑ شامل ہوتی ہے۔ ایک ساکن شے (آپشن 4) سکونی رگڑ کے تابع ہوتی ہے، جو رگڑ کی سب سے زیادہ قسم ہے۔"
  },
  {
    "id": "607",
    "text": "Calculate the force (in Newtons) acting on a current-carrying wire in a magnetic field, where the magnetic field strength is 0.5 T, the current is 2 A, the length of the wire is 1 m, and the angle between the direction of current and magnetic field is 45°. (TSTET 11 Jan 2025)\nایک مقناطیسی میدان میں کرنٹ بردار تار پر عمل کرنے والی قوت (نیوٹن میں) کا حساب لگائیں، جہاں مقناطیسی میدان کی طاقت 0.5 T، کرنٹ 2 A، تار کی لمبائی 1 m، اور کرنٹ اور مقناطیسی میدان کی سمت کے درمیان زاویہ 45° ہے۔",
    "options": [
      "1/√2",
      "√3/2",
      "1/2",
      "1"
    ],
    "correct": "1/√2",
    "explanation": "مقناطیسی میدان میں کرنٹ بردار موصل پر قوت کا حساب فارمولے F = BILsinθ کا استعمال کرتے ہوئے کیا جاتا ہے، جہاں B مقناطیسی میدان کی طاقت، I کرنٹ، L تار کی لمبائی، اور θ کرنٹ اور مقناطیسی میدان کے درمیان زاویہ ہے۔ دی گئی قدروں کو درج کرنے پر: F = (0.5 T) × (2 A) × (1 m) × sin(45°)۔ چونکہ sin(45°) = 1/√2 ہے، اس لیے قوت F = 1 × (1/√2) = 1/√2 N ہے۔"
  },
  {
    "id": "608",
    "text": "For an electric iron that consumes 1 kW of electrical power when operated at 220 V, which of the following fuse ratings is most desirable? (TSTET 11 Jan 2025)\nایک برقی استری کے لیے جو 220 V پر چلنے پر 1 kW برقی توانائی استعمال کرتی ہے، مندرجہ ذیل میں سے کون سی فیوز ریٹنگ سب سے زیادہ موزوں ہے؟",
    "options": [
      "1 A",
      "2 A",
      "3 A",
      "5 A"
    ],
    "correct": "5 A",
    "explanation": "مطلوبہ فیوز ریٹنگ معلوم کرنے کے لیے، سب سے پہلے فارمولہ Power (P) = Voltage (V) × Current (I) کا استعمال کرتے ہوئے برقی استری کے ذریعے کھینچے جانے والے کرنٹ کا حساب لگائیں، لہذا I = P/V۔ پاور 1 کلو واٹ (1000 واٹ) ہے اور وولٹیج 220 وولٹ ہے۔ کرنٹ I = 1000 W / 220 V ≈ 4.54 A ہے۔ فیوز کی ریٹنگ آلے کے عام آپریٹنگ کرنٹ سے تھوڑی زیادہ ہونی چاہیے۔ 4.54 A سے اوپر کی قریب ترین معیاری فیوز ریٹنگ 5 A ہے۔"
  },
  {
    "id": "609",
    "text": "Full form of PCRA is. (TSTET 11 Jan 2025)\nPCRA کا مکمل نام ہے۔",
    "options": [
      "Petroleum Conservation Research Association\nپیٹرولیم کنزرویشن ریسرچ ایسوسی ایشن",
      "Petroleum Consumable Research Association\nپیٹرولیم کنزیومیبل ریسرچ ایسوسی ایشن",
      "Pure Chemistry Research Association\nپیور کیمسٹری ریسرچ ایسوسی ایشن",
      "Physics and Chemistry Royal Association\nفزکس اینڈ کیمسٹری رائل ایسوسی ایشن"
    ],
    "correct": "Petroleum Conservation Research Association",
    "explanation": "PCRA کا مطلب پیٹرولیم کنزرویشن ریسرچ ایسوسی ایشن ہے۔ یہ ہندوستان میں پیٹرولیم اور قدرتی گیس کی وزارت کے تحت ایک تنظیم ہے، جو مختلف شعبوں میں توانائی کی بچت اور تحفظ کو فروغ دینے کے لیے وقف ہے۔"
  },
  {
    "id": "610",
    "text": "The chemical reaction used in black and white photography from the following. (TSTET 11 Jan 2025)\nسیاہ اور سفید فوٹوگرافی میں استعمال ہونے والا کیمیائی تعامل مندرجہ ذیل میں سے ہے۔",
    "options": [
      "Oxidation of silver halides to silver oxide in the dark.\nاندھیرے میں سلور ہیلائڈز کا سلور آکسائڈ میں تکسید۔",
      "Reduction of silver halides to metallic silver in the presence of light.\nروشنی کی موجودگی میں سلور ہیلائڈز کی دھاتی سلور میں تخفیف۔",
      "Decomposition of hydrogen peroxide into oxygen and water.\nہائیڈروجن پیرو آکسائڈ کا آکسیجن اور پانی میں تحلیل۔",
      "Reduction of hydrogen ions to form hydrogen gas.\nہائیڈروجن آئنوں کی تخفیف سے ہائیڈروجن گیس کا بننا۔"
    ],
    "correct": "Reduction of silver halides to metallic silver in the presence of light.",
    "explanation": "سیاہ اور سفید فوٹو گرافی سلور ہیلائڈ مرکبات (جیسے AgBr) کی روشنی کی حساسیت پر مبنی ہے۔ جب روشنی فوٹو گرافی فلم سے ٹکراتی ہے تو سلور ہیلائڈ ایک فوٹو کیمیکل تحلیل سے گزرتا ہے۔ اس تعامل میں، سلور آئن (Ag⁺) دھاتی سلور (Ag) کے چھوٹے ذرات میں تخفیف ہو جاتے ہیں، جو تصویر کے سیاہ حصے بناتے ہیں۔"
  },
  {
    "id": "611",
    "text": "Atomic properties considered to prepare the long form of periodic table. A) Atomic mass of elements. B) Atomic number of elements. C) Electron configuration of elements. (TSTET 11 Jan 2025)\nدوری جدول کی طویل شکل تیار کرنے کے لیے کن جوہری خصوصیات پر غور کیا گیا؟ A) عناصر کی جوہری کمیت۔ B) عناصر کا جوہری نمبر۔ C) عناصر کی الیکٹران تشکیل۔",
    "options": [
      "A, B & C",
      "C only\nصرف C",
      "B & C only\nصرف B اور C",
      "B only\nصرف B"
    ],
    "correct": "B & C only",
    "explanation": "جدید (طویل شکل) دوری جدول بنیادی طور پر بڑھتے ہوئے جوہری نمبر (B) کی ترتیب میں ترتیب دیا گیا ہے۔ یہ ترتیب قدرتی طور پر ایک جیسی خصوصیات والے عناصر کو گروہوں میں تقسیم کرتی ہے، جو ان کی ایک جیسی ویلنس الیکٹران تشکیل (C) کا براہ راست نتیجہ ہے۔ جبکہ جوہری کمیت (A) پہلے کے دوری جدولوں میں استعمال ہوتی تھی، جدید جدول کا بنیادی تنظیمی اصول جوہری نمبر ہے۔"
  },
  {
    "id": "612",
    "text": "Among the following, identify the ore(s) which is (are) correctly matched with its chemical formula and choose the correct answer. A) Galena - Fe₂O₃. B) Bauxite - Al₂O₃·2H₂O. C) Chalcopyrite - ZnS. D) Chromite - CuFeS₂. (TSTET 11 Jan 2025)\nمندرجہ ذیل میں سے، اس دھات (دھاتوں) کی نشاندہی کریں جو اپنے کیمیائی فارمولے کے ساتھ صحیح طور پر مماثل ہے اور صحیح جواب کا انتخاب کریں۔ A) گیلینا - Fe₂O₃۔ B) باکسائٹ - Al₂O₃·2H₂O۔ C) چالکوپائرائٹ - ZnS۔ D) کرومائٹ - CuFeS₂۔",
    "options": [
      "B and C only\nصرف B اور C",
      "B and D only\nصرف B اور D",
      "A only\nصرف A",
      "B only\nصرف B"
    ],
    "correct": "B only",
    "explanation": "آئیے ہر جوڑے کو چیک کریں: A) گیلینا لیڈ (II) سلفائیڈ (PbS) ہے، جبکہ Fe₂O₃ ہیماٹائٹ ہے۔ یہ غلط ہے۔ B) باکسائٹ ایلومینیم کی بنیادی دھات ہے اور اسے ہائیڈریٹڈ ایلومینیم آکسائیڈ فارمولا Al₂O₃·2H₂O سے صحیح طور پر ظاہر کیا گیا ہے۔ یہ صحیح ہے۔ C) چالکوپائرائٹ کاپر آئرن سلفائیڈ (CuFeS₂) ہے، جبکہ ZnS اسفیلرائٹ ہے۔ یہ غلط ہے۔ D) کرومائٹ آئرن کرومیم آکسائیڈ (FeCr₂O₄) ہے، جبکہ CuFeS₂ چالکوپائرائٹ ہے۔ یہ غلط ہے۔ لہذا، صرف B صحیح طور پر مماثل ہے۔"
  },
  {
    "id": "613",
    "text": "Identify the tissue that connects bones with Muscles. (TSTET 11 Jan 2025)\nاس نسیج کی نشاندہی کریں جو ہڈیوں کو پٹھوں سے جوڑتی ہے۔",
    "options": [
      "Tendon\nعضلاتی ریشہ (Tendon)",
      "Ligament\nرباط (Ligament)",
      "Smooth muscle\nہموار پٹھا",
      "Fibroblast\nریشہ ساز خلیہ (Fibroblast)"
    ],
    "correct": "Tendon",
    "explanation": "ٹینڈنز (Tendons) ریشے دار جوڑنے والے نسیج کے سخت، لچکدار بینڈ ہوتے ہیں جو پٹھوں کو ہڈی سے جوڑتے ہیں۔ لیگامنٹس (Ligaments) اسی طرح کے نسیج ہوتے ہیں لیکن جوڑ بنانے کے لیے ہڈی کو ہڈی سے جوڑتے ہیں۔"
  },
  {
    "id": "614",
    "text": "Who was the scientist to discover Penicillin antibiotic? (TSTET 11 Jan 2025)\nپینسلین اینٹی بائیوٹک دریافت کرنے والا سائنسدان کون تھا؟",
    "options": [
      "Antonie Van Leeuwenhoek\nاینٹونی وان لیووین ہوک",
      "Robert Hooke\nرابرٹ ہک",
      "Robert Brown\nرابرٹ براؤن",
      "Alexander Fleming\nالیگزینڈر فلیمنگ"
    ],
    "correct": "Alexander Fleming",
    "explanation": "سر الیگزینڈر فلیمنگ نے 1928 میں پینسلین دریافت کی، جو دنیا کی پہلی وسیع پیمانے پر موثر اینٹی بائیوٹک تھی۔ ان کی دریافت نے طب میں انقلاب برپا کر دیا۔ اینٹونی وان لیووین ہوک مائیکروسکوپی پر اپنے کام کے لیے، رابرٹ ہک 'سیل' کی اصطلاح وضع کرنے کے لیے، اور رابرٹ براؤن سیل نیوکلئس کی دریافت کے لیے جانے جاتے ہیں۔"
  },
  {
    "id": "615",
    "text": "Identify among the following the correct pair in which both the White Blood Cells are agranulocytic. (TSTET 11 Jan 2025)\nمندرجہ ذیل میں سے اس صحیح جوڑے کی نشاندہی کریں جس میں خون کے دونوں سفید خلیے غیر دانے دار (agranulocytic) ہیں۔",
    "options": [
      "Lymphocytes; Basophils\nلمفوسائٹس؛ بیسوفلس",
      "Lymphocytes: Monocytes\nلمفوسائٹس: مونوسائٹس",
      "Monocytes: Neutrophils\nمونوسائٹس: نیوٹروفلس",
      "Neutrophils; Basophils\nنیوٹروفلس؛ بیسوفلس"
    ],
    "correct": "Lymphocytes: Monocytes",
    "explanation": "خون کے سفید خلیوں (leukocytes) کو دانے دار (granulocytes) اور غیر دانے دار (agranulocytes) میں تقسیم کیا گیا ہے۔ دانے دار خلیے نیوٹروفلس، بیسوفلس، اور ایوسینوفلس ہیں۔ غیر دانے دار خلیے لمفوسائٹس اور مونوسائٹس ہیں۔ لہذا، صحیح جوڑا لمفوسائٹس اور مونوسائٹس ہے۔"
  },
  {
    "id": "616",
    "text": "Identify the protozoan from the following. (TSTET 11 Jan 2025)\nمندرجہ ذیل میں سے پروٹوزوا کی نشاندہی کریں۔",
    "options": [
      "Cyclops\nسائکلپس",
      "Vorticella\nوورٹیسیلا",
      "Ceratium\nسیریٹیم",
      "Aspergillus\nایسپرجلس"
    ],
    "correct": "Vorticella",
    "explanation": "وورٹیسیلا گھنٹی کی شکل کے، یک خلوی جانداروں کی ایک قسم ہے جسے سیلیٹس کہا جاتا ہے، جو پروٹوزوا کا ایک بڑا گروہ ہے۔ سائکلپس ایک کرسٹیشین ہے، سیریٹیم ایک قسم کی کائی (ڈائنوفلیجیلیٹ) ہے، اور ایسپرجلس ایک فنگس ہے۔"
  },
  {
    "id": "617",
    "text": "Which of the following stores food materials in the Stem? (TSTET 11 Jan 2025)\nمندرجہ ذیل میں سے کون تنے میں خوراک کا مواد ذخیرہ کرتا ہے؟",
    "options": [
      "Carrot\nگاجر",
      "Sweet potato\nشکرقندی",
      "Radish\nمولی",
      "Garlic\nلہسن"
    ],
    "correct": "Garlic",
    "explanation": "لہسن ایک تبدیل شدہ تنا ہے جسے بلب کہا جاتا ہے، جو ایک زیر زمین تنا ہے جس میں گوشت دار پتے ہوتے ہیں جو خوراک ذخیرہ کرتے ہیں۔ گاجر، شکرقندی، اور مولی سب تبدیل شدہ جڑوں (ٹیپ روٹ یا ٹیوبرس روٹ) کی مثالیں ہیں جو ذخیرہ کرنے والے اعضاء کے طور پر کام کرتی ہیں۔"
  },
  {
    "id": "618",
    "text": "Identify the Parasitic plant from the following. (TSTET 11 Jan 2025)\nمندرجہ ذیل میں سے طفیلی پودے کی نشاندہی کریں۔",
    "options": [
      "Nepenthes\nنیپینتھیس",
      "Cuscuta\nکسکوٹا (امر بیل)",
      "Drosera\nڈروسیرا",
      "Agaricus\nایگیریکس"
    ],
    "correct": "Cuscuta",
    "explanation": "کسکوٹا (جسے امر بیل بھی کہا جاتا ہے) ایک طفیلی پودا ہے۔ اس میں کلوروفل کی نمایاں مقدار کی کمی ہوتی ہے اور یہ اپنی غذائی اجزاء کو ایک میزبان پودے سے ہاسٹوریا نامی خصوصی ساختوں کے ساتھ منسلک کرکے حاصل کرتا ہے۔ نیپینتھیس اور ڈروسیرا گوشت خور پودے ہیں، جبکہ ایگیریکس ایک سیپروفائٹک فنگس ہے۔"
  },
  {
    "id": "619",
    "text": "Identify the Renewable energy resource from the following. (TSTET 11 Jan 2025)\nمندرجہ ذیل میں سے قابل تجدید توانائی کے وسیلے کی نشاندہی کریں۔",
    "options": [
      "Coal\nکوئلہ",
      "Natural gas\nقدرتی گیس",
      "Solar power\nشمسی توانائی",
      "Minerals\nمعدنیات"
    ],
    "correct": "Solar power",
    "explanation": "قابل تجدید توانائی کے وسائل وہ ہیں جو قدرتی طور پر تھوڑے عرصے میں دوبارہ بھر جاتے ہیں۔ شمسی توانائی، جو سورج کی شعاعوں سے حاصل ہوتی ہے، قابل تجدید وسائل کی ایک بہترین مثال ہے۔ کوئلہ، قدرتی گیس، اور معدنیات ناقابل تجدید وسائل ہیں کیونکہ وہ محدود ہیں اور بننے میں لاکھوں سال لگتے ہیں۔"
  },
  {
    "id": "620",
    "text": "Which of the following hormone is NOT secreted by pituitary gland? (TSTET 11 Jan 2025)\nمندرجہ ذیل میں سے کون سا ہارمون پٹیوٹری غدود سے خارج نہیں ہوتا ہے؟",
    "options": [
      "Growth Hormone\nنشوونما کا ہارمون",
      "Progesterone\nپروجیسٹرون",
      "Follicle Stimulating Hormone\nفولیکل اسٹیومولیٹنگ ہارمون",
      "Luteinizing Hormone\nلیوٹینائزنگ ہارمون"
    ],
    "correct": "Progesterone",
    "explanation": "پروجیسٹرون ایک اسٹیرائڈ ہارمون ہے جو بنیادی طور پر بیضہ دانی میں کارپس لیوٹیم اور حمل کے دوران آنول سے خارج ہوتا ہے۔ پٹیوٹری غدود نشوونما کا ہارمون (GH)، فولیکل اسٹیومولیٹنگ ہارمون (FSH)، اور لیوٹینائزنگ ہارمون (LH) خارج کرنے کا ذمہ دار ہے، لیکن پروجیسٹرون نہیں۔"
  },
  {
    "id": "621",
    "text": "Which of the following disease is NOT caused by bacteria? (TSTET 11 Jan 2025)\nمندرجہ ذیل میں سے کون سی بیماری بیکٹیریا کی وجہ سے نہیں ہوتی ہے؟",
    "options": [
      "Typhoid\nٹائیفائیڈ",
      "Diphtheria\nخناق",
      "Malaria\nملیریا",
      "Tuberculosis\nتپ دق"
    ],
    "correct": "Malaria",
    "explanation": "ملیریا پلازموڈیم جینس کے ایک پروٹوزوا طفیلی کی وجہ سے ہوتا ہے، جو متاثرہ مچھروں کے کاٹنے سے پھیلتا ہے۔ ٹائیفائیڈ (سالمونیلا ٹائفی کی وجہ سے)، خناق (کورینی بیکٹیریم ڈیفتھیریا کی وجہ سے)، اور تپ دق (مائیکوبیکٹیریم ٹیوبرکلوسس کی وجہ سے) سب بیکٹیریائی بیماریاں ہیں۔"
  },
  {
    "id": "622",
    "text": "Identify the part of cell that is present in both Eukaryotic and prokaryotic cells from the following. (TSTET 11 Jan 2025)\nمندرجہ ذیل میں سے خلیے کے اس حصے کی نشاندہی کریں جو یوکرائیوٹک اور پروکرائیوٹک دونوں خلیوں میں موجود ہے۔",
    "options": [
      "Endoplasmic Reticulum\nاینڈوپلازمک ریٹیکولم",
      "Mitochondrion\nمائٹوکونڈرین",
      "Nucleus\nمرکزہ",
      "Plasmamembrane\nپلازما جھلی"
    ],
    "correct": "Plasmamembrane",
    "explanation": "پروکرائیوٹک اور یوکرائیوٹک دونوں خلیوں میں پلازما جھلی (خلیے کی جھلی)، سائٹوپلازم، رائبوسومز، اور ڈی این اے ہوتے ہیں۔ تاہم، پروکرائیوٹک خلیوں میں حقیقی مرکزہ اور دیگر جھلی سے منسلک عضویے جیسے اینڈوپلازمک ریٹیکولم اور مائٹوکونڈریا نہیں ہوتے، جو یوکرائیوٹک خلیوں کی خصوصیات ہیں۔"
  },
  {
    "id": "623",
    "text": "Identify among the following the correct pair in which both are algae. (TSTET 11 Jan 2025)\nمندرجہ ذیل میں سے اس صحیح جوڑے کی نشاندہی کریں جس میں دونوں کائی (algae) ہیں۔",
    "options": [
      "Spirulina: Oedogonium\nاسپیرولینا: اوڈوگونیم",
      "Ceratium; Daphnia\nسیریٹیم؛ ڈیفنیا",
      "Chlamydomonas; Paramoecium\nکلیمائڈوموناس؛ پیرامیشیم",
      "Aspergillus; Diatom\nایسپرجلس؛ ڈائیٹم"
    ],
    "correct": "Spirulina: Oedogonium",
    "explanation": "اسپیرولینا ایک قسم کا سائنو بیکٹیریا ہے، جسے اکثر نیلی سبز کائی کہا جاتا ہے۔ اوڈوگونیم ریشے دار سبز کائی کی ایک قسم ہے۔ دیگر جوڑوں میں، ڈیفنیا ایک کرسٹیشین ہے، پیرامیشیم ایک پروٹوزوا ہے، اور ایسپرجلس ایک فنگس ہے، جو انہیں غلط بناتے ہیں۔"
  },
  {
    "id": "624",
    "text": "Identify the endemic animal from the following. (TSTET 11 Jan 2025)\nمندرجہ ذیل میں سے مقامی (endemic) جانور کی نشاندہی کریں۔",
    "options": [
      "Lion\nشیر",
      "Wild cat\nجنگلی بلی",
      "Kangaroo\nکینگرو",
      "Rhinoceros\nگینڈا"
    ],
    "correct": "Kangaroo",
    "explanation": "مقامی انواع وہ ہیں جو خصوصی طور پر ایک مخصوص جغرافیائی علاقے میں پائی جاتی ہیں۔ کینگرو مارسوپیلز ہیں جو آسٹریلیا کے براعظم کے مقامی ہیں۔ جبکہ شیروں، جنگلی بلیوں، اور گینڈوں کی کچھ ذیلی انواع مخصوص علاقوں تک محدود ہو سکتی ہیں، لیکن بحیثیت مجموعی یہ انواع وسیع علاقوں میں پائی جاتی ہیں۔"
  },
  {
    "id": "625",
    "text": "Which of the following is a key characteristic of the project method? (TSTET 11 Jan 2025)\nمندرجہ ذیل میں سے کون سی پروجیکٹ طریقہ کار کی ایک اہم خصوصیت ہے؟",
    "options": [
      "Teacher-centered instruction\nاستاد پر مرکوز ہدایات",
      "Collaborative learning\nاشتراکی تعلیم",
      "Rote learning\nرٹا لگانا",
      "Traditional assessments\nروایتی جائزے"
    ],
    "correct": "Collaborative learning",
    "explanation": "پروجیکٹ کا طریقہ ایک طالب علم پر مرکوز نقطہ نظر ہے جہاں سیکھنا عملی، تحقیقات پر مبنی منصوبوں کے ذریعے حاصل کیا جاتا ہے۔ ایک اہم خصوصیت یہ ہے کہ طلباء اکثر گروہوں میں مل کر کام کرتے ہیں، خیالات کا اشتراک کرتے ہیں، کاموں کو تقسیم کرتے ہیں، اور ایک دوسرے سے سیکھتے ہیں۔ یہ اشتراکی تعلیم کو اس طریقہ کار کی ایک مرکزی خصوصیت بناتا ہے۔"
  },
  {
    "id": "626",
    "text": "Keeping in view of learning indicators, read the following statements and choose the correct statements. Statement I: Learning indicators are used to determine students learning by collecting, analysing, and interpreting evidence. Statement II: Learning indicators are used to provide feedback to children on their performance. (TSTET 11 Jan 2025)\nسیکھنے کے اشاریوں کو مدنظر رکھتے ہوئے، مندرجہ ذیل بیانات کو پڑھیں اور صحیح بیانات کا انتخاب کریں۔ بیان I: سیکھنے کے اشارے شواہد کو جمع، تجزیہ، اور تشریح کرکے طلباء کی سیکھنے کا تعین کرنے کے لیے استعمال ہوتے ہیں۔ بیان II: سیکھنے کے اشارے بچوں کو ان کی کارکردگی پر رائے فراہم کرنے کے لیے استعمال ہوتے ہیں۔",
    "options": [
      "Both Statement I and Statement II are true.\nبیان I اور بیان II دونوں صحیح ہیں۔",
      "Both Statement I and Statement II are false.\nبیان I اور بیان II دونوں غلط ہیں۔",
      "Statement I is false and Statement II is true.\nبیان I غلط ہے اور بیان II صحیح ہے۔",
      "Statement I is true and Statement II is false.\nبیان I صحیح ہے اور بیان II غلط ہے۔"
    ],
    "correct": "Both Statement I and Statement II are true.",
    "explanation": "سیکھنے کے اشارے اس بات کے مخصوص معیارات ہیں کہ طلباء سے کیا جاننے اور کرنے کی توقع کی جاتی ہے۔ وہ دوہرے مقصد کو پورا کرتے ہیں: وہ سیکھنے کے شواہد کو جمع کرنے اور ان کی تشریح کے لیے واضح معیار فراہم کرکے جائزے کی رہنمائی کرتے ہیں (بیان I)، اور وہ اساتذہ کو ان معیارات کی طرف اپنی پیشرفت کے بارے میں طلباء کو مخصوص، بامعنی رائے دینے کے قابل بناتے ہیں (بیان II)۔"
  },
  {
    "id": "627",
    "text": "A science teacher uses a learning management system (LMS) to assign a virtual lab activity to students. Identify the benefit of using the LMS for this purpose. (TSTET 11 Jan 2025)\nایک سائنس ٹیچر طلباء کو ورچوئل لیب کی سرگرمی تفویض کرنے کے لیے لرننگ مینجمنٹ سسٹم (LMS) کا استعمال کرتا ہے۔ اس مقصد کے لیے LMS استعمال کرنے کے فائدے کی نشاندہی کریں۔",
    "options": [
      "It limits student interaction.\nیہ طلباء کے تعامل کو محدود کرتا ہے۔",
      "It allows for real-time feedback and assessment.\nیہ حقیقی وقت میں رائے اور جائزے کی اجازت دیتا ہے۔",
      "It complicates access to resources.\nیہ وسائل تک رسائی کو پیچیدہ بناتا ہے۔",
      "It focuses solely on theory.\nیہ صرف نظریہ پر توجہ مرکوز کرتا ہے۔"
    ],
    "correct": "It allows for real-time feedback and assessment.",
    "explanation": "لرننگ مینجمنٹ سسٹم (LMS) کا ایک اہم فائدہ اس کی آٹومیشن کی صلاحیت ہے۔ ورچوئل لیبز کے لیے، ایک LMS خود بخود طالب علم کی پیشرفت کو ٹریک کر سکتا ہے، پہلے سے طے شدہ روبرکس کی بنیاد پر ان کے کام کو گریڈ دے سکتا ہے، اور فوری رائے فراہم کر سکتا ہے۔ اس سے طلباء اور اساتذہ دونوں کو حقیقی وقت میں کارکردگی دیکھنے کی اجازت ملتی ہے، جس سے بروقت مداخلت اور تفہیم میں آسانی ہوتی ہے۔"
  },
  {
    "id": "628",
    "text": "After the observation of various plant cells and animal cells under microscope, a biology teacher in class IX divided her students into groups and asked them to discuss within the groups, the features of the cells they observed to arrive at the conclusion. She also asked them to present their opinions in front of the whole class. The process of Constructivist Learning Situation the learners are engaged in as given in the NCF-2005. (TSTET 11 Jan 2025)\nمائیکروسکوپ کے نیچے مختلف پودوں اور جانوروں کے خلیوں کا مشاہدہ کرنے کے بعد، نویں جماعت کی ایک بیالوجی ٹیچر نے اپنے طلباء کو گروہوں میں تقسیم کیا اور ان سے کہا کہ وہ گروہوں کے اندر ان خلیوں کی خصوصیات پر تبادلہ خیال کریں جن کا انہوں نے مشاہدہ کیا تھا تاکہ وہ کسی نتیجے پر پہنچ سکیں۔ اس نے ان سے پوری کلاس کے سامنے اپنی رائے پیش کرنے کو بھی کہا۔ NCF-2005 میں دیے گئے تعمیری سیکھنے کے حالات کا وہ عمل جس میں سیکھنے والے مصروف ہیں۔",
    "options": [
      "Observation\nمشاہدہ",
      "Making multiple interpretations\nمتعدد تشریحات کرنا",
      "Cognitive apprenticeship\nعلمی شاگردی",
      "Analysis\nتجزیہ"
    ],
    "correct": "Making multiple interpretations",
    "explanation": "اس تعمیری منظر نامے میں، طلباء مشاہدے کے ابتدائی مرحلے سے آگے بڑھتے ہیں۔ گروہوں میں اپنے نتائج پر تبادلہ خیال کرکے اور انہیں کلاس کے سامنے پیش کرکے، وہ اپنے جمع کردہ ڈیٹا کی فعال طور پر تشریح کر رہے ہیں۔ مختلف گروہوں کے قدرے مختلف مشاہدات یا نتائج ہو سکتے ہیں، جس سے متعدد تشریحات کی ترقی اور اشتراک ہوتا ہے۔ یہ اشتراکی عمل انہیں پودوں اور جانوروں کے خلیوں کے درمیان فرق کی گہری، زیادہ مضبوط سمجھ پیدا کرنے میں مدد کرتا ہے۔"
  },
  {
    "id": "629",
    "text": "Identify the basic process skill from the following: (TSTET 11 Jan 2025)\nمندرجہ ذیل میں سے بنیادی عملی مہارت کی نشاندہی کریں:",
    "options": [
      "Hypothesising\nمفروضہ سازی",
      "Experimenting\nتجربہ کرنا",
      "Observation\nمشاہدہ",
      "Identifying variables\nمتغیرات کی شناخت"
    ],
    "correct": "Observation",
    "explanation": "سائنس کی عملی مہارتوں کو بنیادی اور مربوط مہارتوں میں درجہ بندی کیا گیا ہے۔ بنیادی مہارتیں بنیاد ہیں اور ان میں مشاہدہ، استدلال، پیمائش، ابلاغ، اور درجہ بندی شامل ہیں۔ مربوط مہارتیں زیادہ پیچیدہ ہیں اور بنیادی مہارتوں پر استوار ہوتی ہیں؛ ان میں متغیرات کی شناخت، مفروضہ سازی، اور تجربہ کرنا شامل ہیں۔ لہذا، مشاہدہ ایک بنیادی عملی مہارت ہے۔"
  },
  {
    "id": "630",
    "text": "Identify the INCORRECT statement with regard to the Assessment of Learning of the children with special educational needs (SEN). (TSTET 11 Jan 2025)\nخصوصی تعلیمی ضروریات (SEN) والے بچوں کی سیکھنے کے جائزے کے حوالے سے غلط بیان کی نشاندہی کریں۔",
    "options": [
      "To assess these students individually, a team has to be formed after discussing with parents, students and experts.\nان طلباء کا انفرادی طور پر جائزہ لینے کے لیے، والدین، طلباء اور ماہرین سے بات چیت کے بعد ایک ٹیم تشکیل دی جانی چاہیے۔",
      "Individual profile and the individualised educational programme of these students also are considered in the assessment of these children.\nان بچوں کے جائزے میں ان طلباء کی انفرادی پروفائل اور انفرادی تعلیمی پروگرام کو بھی مدنظر رکھا جاتا ہے۔",
      "The previous performances of these students also have to be considered.\nان طلباء کی پچھلی کارکردگیوں کو بھی مدنظر رکھنا ہوگا۔",
      "A chance of Re-evaluation shouldn't be provided to them.\nانہیں دوبارہ جانچ کا موقع فراہم نہیں کیا جانا چاہیے۔"
    ],
    "correct": "A chance of Re-evaluation shouldn't be provided to them.",
    "explanation": "خصوصی تعلیمی ضروریات (SEN) والے بچوں کے لیے موثر اور منصفانہ جائزے کے طریقوں کو لچکدار اور موافق ہونا چاہیے۔ دوبارہ جانچ کے موقع سے انکار کرنا ایک غلط اور غیر منصفانہ عمل ہے۔ دوبارہ جانچ طلباء کو مختلف حالات میں اپنی سیکھنے کا مظاہرہ کرنے کی اجازت دیتی ہے اور یہ مدد فراہم کرنے کا ایک کلیدی جزو ہے۔ دیگر تین بیانات SEN طلباء کا جائزہ لینے کے لیے مناسب اور ضروری تحفظات بیان کرتے ہیں۔"
  },
  {
    "id": "631",
    "text": "Consider the following with respect to impurities of water contamination. Choose the correct answer. (TSTET 5 Jan 2025)\nA) Organic impurities Nitrates, Phosphates\nB) Inorganic impurities: Urea, Oil\nپانی کی آلودگی کی نجاستوں کے حوالے سے مندرجہ ذیل پر غور کریں۔ صحیح جواب کا انتخاب کریں۔\nA) نامیاتی نجاستیں: نائٹریٹس، فاسفیٹس\nB) غیر نامیاتی نجاستیں: یوریا، تیل",
    "options": [
      "Both pairs A & B are correct\nدونوں جوڑے A اور B صحیح ہیں",
      "Both pairs A & B are incorrect\nدونوں جوڑے A اور B غلط ہیں",
      "Pair A is correct; Pair B is incorrect\nجوڑا A صحیح ہے؛ جوڑا B غلط ہے",
      "Pair A is incorrect; Pair B is correct\nجوڑا A غلط ہے؛ جوڑا B صحیح ہے"
    ],
    "correct": "Both pairs A & B are incorrect",
    "explanation": "یہ جوڑے غلط ہیں۔ نامیاتی نجاستیں جانداروں اور ان کے فضلے سے حاصل ہوتی ہیں، جن میں یوریا اور تیل جیسے مادے شامل ہیں۔ غیر نامیاتی نجاستیں معدنی اصل کی ہوتی ہیں، جیسے نائٹریٹس، فاسفیٹس، اور بھاری دھاتیں۔ سوال میں ان مثالوں کو غلط طریقے سے تبدیل کیا گیا ہے۔ لہذا، دونوں بیانات A اور B غلط جوڑے پیش کرتے ہیں۔"
  },
  {
    "id": "632",
    "text": "The planet often called a morning or evening star is (TSTET 5 Jan 2025)\nوہ سیارہ جسے اکثر صبح یا شام کا ستارہ کہا جاتا ہے",
    "options": [
      "Venus\nزہرہ",
      "Mars\nمریخ",
      "Jupiter\nمشتری",
      "Saturn\nزحل"
    ],
    "correct": "Venus",
    "explanation": "زہرہ کو صبح یا شام کا ستارہ کہا جاتا ہے کیونکہ اس کا مدار زمین کے مدار کے اندر ہے۔ اس کی وجہ سے یہ زمین سے صرف طلوع آفتاب سے چند گھنٹے پہلے (صبح کے ستارے کے طور پر) یا غروب آفتاب کے بعد (شام کے ستارے کے طور پر) نظر آتا ہے۔ اس کے گھنے بادل سورج کی روشنی کو اچھی طرح سے منعکس کرتے ہیں، جس کی وجہ سے یہ ایک بہت روشن، ستارے جیسی شے کے طور پر ظاہر ہوتا ہے۔"
  },
  {
    "id": "633",
    "text": "Due to atmospheric refraction, the Sun is visible before the actual sunrise and after the actual sunset. The additional time the Sun remains visible due to atmospheric refraction is (TSTET 5 Jan 2025)\nفضائی انحراف کی وجہ سے، سورج حقیقی طلوع آفتاب سے پہلے اور حقیقی غروب آفتاب کے بعد نظر آتا ہے۔ فضائی انحراف کی وجہ سے سورج کے نظر آنے کا اضافی وقت ہے",
    "options": [
      "Before sunrise: 2 minutes After sunset: 2 minutes\nطلوع آفتاب سے پہلے: 2 منٹ غروب آفتاب کے بعد: 2 منٹ",
      "Before sunrise: 4 minutes. After sunset: 4 minutes\nطلوع آفتاب سے پہلے: 4 منٹ غروب آفتاب کے بعد: 4 منٹ",
      "Before sunrise: 8 minutes, After sunset: 8 minutes\nطلوع آفتاب سے پہلے: 8 منٹ غروب آفتاب کے بعد: 8 منٹ",
      "Before sunrise: 10 minutes. After sunset: 10 minutes\nطلوع آفتاب سے پہلے: 10 منٹ غروب آفتاب کے بعد: 10 منٹ"
    ],
    "correct": "Before sunrise: 2 minutes After sunset: 2 minutes",
    "explanation": "فضائی انحراف روشنی کا مڑنا ہے جب وہ زمین کی فضا سے گزرتی ہے۔ یہ مظہر سورج کو افق سے اوپر دکھاتا ہے جبکہ وہ جسمانی طور پر اس سے تھوڑا نیچے ہوتا ہے۔ یہ اثر طلوع آفتاب کو تقریباً 2 منٹ پہلے اور غروب آفتاب کو تقریباً 2 منٹ تاخیر سے کرتا ہے، جس سے دن کی لمبائی میں مجموعی طور پر تقریباً 4 منٹ کا اضافہ ہوتا ہے۔"
  },
  {
    "id": "634",
    "text": "The phenomena caused by multiple reflections of sound waves in an enclosed space is: (TSTET 5 Jan 2025)\nایک بند جگہ میں صوتی لہروں کے متعدد انعکاس کی وجہ سے پیدا ہونے والا مظہر ہے:",
    "options": [
      "Echo\nگونج",
      "Absorption\nجذب",
      "Refraction\nانحراف",
      "Reverberation\nگونج کا تسلسل (Reverberation)"
    ],
    "correct": "Reverberation",
    "explanation": "گونج کا تسلسل (Reverberation) کسی خاص جگہ پر اصل آواز پیدا ہونے کے بعد آواز کا باقی رہنا ہے۔ یہ بہت ساری صوتی لہروں کے انعکاس کے جمع ہونے اور پھر جگہ میں موجود اشیاء کی سطحوں سے آواز کے جذب ہونے پر کم ہونے کی وجہ سے ہوتا ہے۔ ایکو (Echo) آواز کا ایک واحد، واضح انعکاس ہے، جبکہ ریوربریشن بہت سے ایک دوسرے پر چڑھتے ہوئے انعکاسات کا مجموعہ ہے۔"
  },
  {
    "id": "635",
    "text": "Among the following, identify the substance that expands on freezing: (TSTET 5 Jan 2025)\nمندرجہ ذیل میں سے، اس مادے کی نشاندہی کریں جو جمنے پر پھیلتا ہے:",
    "options": [
      "Iron\nلوہا",
      "Mercury\nپارہ",
      "Water\nپانی",
      "Lead\nسیسہ"
    ],
    "correct": "Water",
    "explanation": "پانی ایک غیر معمولی خاصیت کا مظاہرہ کرتا ہے جہاں یہ جمنے پر پھیلتا ہے۔ جب پانی 4°C سے نیچے ٹھنڈا ہوتا ہے، تو اس کے ہائیڈروجن بانڈز ایک بلوری جالی دار ساخت (برف) میں ترتیب پاتے ہیں جو مائع پانی سے زیادہ حجم گھیرتی ہے۔ یہ برف کو پانی سے کم کثیف بناتا ہے، یہی وجہ ہے کہ یہ تیرتی ہے۔ زیادہ تر دیگر مادے، بشمول لوہا اور سیسہ جیسی دھاتیں، جمنے پر سکڑ جاتی ہیں۔"
  },
  {
    "id": "636",
    "text": "An 80 kg object is acted upon by a constant force of 480 N. Then the acceleration of the object is (TSTET 5 Jan 2025)\nایک 80 کلوگرام کی شے پر 480 N کی مستقل قوت عمل کرتی ہے۔ تو اس شے کا اسراع ہے",
    "options": [
      "1/6 m/s²",
      "6 m/s²",
      "6/10 m/s²",
      "10/6 m/s²"
    ],
    "correct": "6 m/s²",
    "explanation": "نیوٹن کے حرکت کے دوسرے قانون کے مطابق، قوت (F)، کمیت (m)، اور اسراع (a) کے درمیان تعلق فارمولے $F = m \\times a$ سے دیا جاتا ہے۔ اسراع معلوم کرنے کے لیے، ہم فارمولے کو $a = F / m$ میں ترتیب دے سکتے ہیں۔ دیا گیا ہے F = 480 N اور m = 80 kg، اسراع $a = 480 / 80 = 6$ m/s² ہے۔"
  },
  {
    "id": "637",
    "text": "The standard frequency of the AC electric power supply in Telangana is: (TSTET 5 Jan 2025)\nتلنگانہ میں AC برقی پاور سپلائی کی معیاری فریکوئنسی ہے:",
    "options": [
      "40 Hz",
      "50 Hz",
      "60 Hz",
      "60 V"
    ],
    "correct": "50 Hz",
    "explanation": "ہندوستان میں، بشمول ریاست تلنگانہ، AC (آلٹرنیٹنگ کرنٹ) برقی فریکوئنسی کا معیار 50 ہرٹز (Hz) ہے۔ یہ معیار یورپ، ایشیا، اور افریقہ کے بیشتر ممالک میں مشترک ہے۔ شمالی امریکہ بنیادی طور پر 60 Hz استعمال کرتا ہے۔ آپشن '60 V' وولٹیج کی طرف اشارہ کرتا ہے، جو ایک مختلف برقی خاصیت ہے۔"
  },
  {
    "id": "638",
    "text": "An electric appliance is connected to a 110V generator. If the current is 2A, calculate the power of that appliance. (in Watts) (TSTET 5 Jan 2025)\nایک برقی آلہ 110V کے جنریٹر سے منسلک ہے۔ اگر کرنٹ 2A ہے، تو اس آلے کی پاور (واٹ میں) کا حساب لگائیں۔",
    "options": [
      "55",
      "110",
      "220",
      "330"
    ],
    "correct": "220",
    "explanation": "برقی پاور (P) واٹ میں وولٹیج (V) وولٹ میں اور کرنٹ (I) ایمپیئر میں ضرب دے کر شمار کی جاتی ہے۔ فارمولہ $P = V \\times I$ ہے۔ اس معاملے میں، V = 110V اور I = 2A ہے۔ لہذا، پاور $P = 110 \\times 2 = 220$ واٹ ہے۔"
  },
  {
    "id": "639",
    "text": "Substances W, X, Y, and Z have pH values of 1, 13, 7, and 10 respectively. Then the strongest base from the following is (TSTET 5 Jan 2025)\nمادوں W, X, Y, اور Z کی pH قدریں بالترتیب 1, 13, 7, اور 10 ہیں۔ تو مندرجہ ذیل میں سے سب سے مضبوط اساس ہے",
    "options": [
      "Z",
      "W",
      "Y",
      "X"
    ],
    "correct": "X",
    "explanation": "pH پیمانہ یہ ماپتا ہے کہ کوئی مادہ کتنا تیزابی یا اساسی ہے۔ pH 7 معتدل (Y) ہوتا ہے۔ 7 سے کم قدریں تیزابیت کی نشاندہی کرتی ہیں، اور 7 سے زیادہ قدریں اساسیت (alkalinity) کی نشاندہی کرتی ہیں۔ 7 سے جتنی زیادہ pH قدر ہوگی، اساس اتنا ہی مضبوط ہوگا۔ مادہ X کی pH 13 ہے، جو فراہم کردہ سب سے زیادہ قدر ہے، جو اسے سب سے مضبوط اساس بناتی ہے۔ W (pH 1) ایک مضبوط تیزاب ہے، اور Z (pH 10) X کے مقابلے میں ایک کمزور اساس ہے۔"
  },
  {
    "id": "640",
    "text": "Lead nitrate $(Pb(NO₃)₂)$ is mixed with potassium iodide (KI). The colour and the name of the precipitate formed are (TSTET 5 Jan 2025)\nلیڈ نائٹریٹ $(Pb(NO₃)₂)$ کو پوٹاشیم آئوڈائڈ (KI) کے ساتھ ملایا جاتا ہے۔ بننے والے رسوب کا رنگ اور نام کیا ہے",
    "options": [
      "The precipitate is white, and it is lead iodide (PbI₂).\nرسوب سفید ہے، اور یہ لیڈ آئوڈائڈ (PbI₂) ہے۔",
      "The precipitate is green, and it is potassium iodide (KI).\nرسوب سبز ہے، اور یہ پوٹاشیم آئوڈائڈ (KI) ہے۔",
      "The precipitate is yellow, and it is lead iodide (PbI₂).\nرسوب پیلا ہے، اور یہ لیڈ آئوڈائڈ (PbI₂) ہے۔",
      "The precipitate is red, and it is potassium nitrate (KNO₃).\nرسوب سرخ ہے، اور یہ پوٹاشیم نائٹریٹ (KNO₃) ہے۔"
    ],
    "correct": "The precipitate is yellow, and it is lead iodide (PbI₂).",
    "explanation": "جب لیڈ نائٹریٹ اور پوٹاشیم آئوڈائڈ کے آبی محلول کو ملایا جاتا ہے، تو ایک دوہرا ہٹاؤ کا تعامل ہوتا ہے: $Pb(NO₃)₂(aq) + 2KI(aq) \\rightarrow PbI₂(s) + 2KNO₃(aq)$۔ یہ تعامل لیڈ آئوڈائڈ ($PbI₂$) بناتا ہے، جو ایک غیر حل پذیر ٹھوس ہے اور محلول سے رسوب بن جاتا ہے۔ لیڈ آئوڈائڈ اپنے مخصوص چمکدار پیلے رنگ کے لیے جانا جاتا ہے۔"
  },
  {
    "id": "641",
    "text": "The isotope of carbon used in 'Radio Carbon Dating' is: (TSTET 5 Jan 2025)\n'ریڈیو کاربن ڈیٹنگ' میں استعمال ہونے والا کاربن کا آئسوٹوپ ہے:",
    "options": [
      "¹²C",
      "¹³C",
      "¹⁵C",
      "¹⁴C"
    ],
    "correct": "¹⁴C",
    "explanation": "ریڈیو کاربن ڈیٹنگ میں کاربن کے تابکار آئسوٹوپ، کاربن-14 (¹⁴C)، کا استعمال نامیاتی مواد کی عمر کا تعین کرنے کے لیے کیا جاتا ہے۔ زندہ جاندار فضا سے ¹⁴C جذب کرتے ہیں۔ موت کے بعد، یہ جذب رک جاتا ہے، اور ¹⁴C ایک معلوم شرح (اس کی نصف زندگی) پر زوال پذیر ہونا شروع ہو جاتا ہے۔ باقی ماندہ ¹⁴C کی پیمائش کرکے، سائنسدان موت کے بعد گزرے ہوئے وقت کا حساب لگا سکتے ہیں۔ ¹²C کاربن کا سب سے عام، مستحکم آئسوٹوپ ہے۔"
  },
  {
    "id": "642",
    "text": "Read the following statements and choose the correct answer. (TSTET 5 Jan 2025)\nStatement I: Alloying is a very good method of improving the properties of a metal.\nStatement II: An alloy is a homogeneous mixture of two or more metals, or a metal and a non-metal.\n\nمندرجہ ذیل بیانات کو پڑھیں اور صحیح جواب کا انتخاب کریں۔\nبیان I: الائینگ دھات کی خصوصیات کو بہتر بنانے کا ایک بہت اچھا طریقہ ہے۔\nبیان II: الائے دو یا دو سے زیادہ دھاتوں، یا ایک دھات اور ایک غیر دھات کا یکساں آمیزہ ہے۔",
    "options": [
      "Both Statement I and Statement II are correct.\nبیان I اور بیان II دونوں درست ہیں۔",
      "Statement I is correct, but Statement II is incorrect.\nبیان I درست ہے، لیکن بیان II غلط ہے۔",
      "Statement I is incorrect, but Statement II is correct.\nبیان I غلط ہے، لیکن بیان II درست ہے۔",
      "Both Statement I and Statement II are incorrect.\nبیان I اور بیان II دونوں غلط ہیں۔"
    ],
    "correct": "Both Statement I and Statement II are correct.",
    "explanation": "دونوں بیانات حقائق پر مبنی ہیں۔ بیان II ایک الائے کی درست تعریف فراہم کرتا ہے۔ بیان I درست ہے کیونکہ الائینگ کسی دھات کی مطلوبہ خصوصیات کو بڑھا سکتی ہے، جیسے اس کی مضبوطی، سختی، یا زنگ کے خلاف مزاحمت (مثال کے طور پر، سٹین لیس سٹیل لوہے، کرومیم، اور کاربن کا ایک الائے ہے جو زنگ کے خلاف مزاحمت کرتا ہے)۔"
  },
  {
    "id": "643",
    "text": "Identify the tissue that connects bones together, especially in joints. (TSTET 5 Jan 2025)\nاس ٹشو کی شناخت کریں جو ہڈیوں کو ایک ساتھ جوڑتا ہے، خاص طور پر جوڑوں میں۔",
    "options": [
      "Smooth muscle\nہموار پٹھا",
      "Fibroblast\nفائبروبلاسٹ",
      "Tendon\nٹینڈن",
      "Ligament\nلگامنٹ"
    ],
    "correct": "Ligament",
    "explanation": "لگامنٹس مربوط ٹشو کے سخت، ریشے دار بینڈ ہوتے ہیں جو ایک ہڈی کو دوسری ہڈی سے جوڑتے ہیں، جو جوڑوں کو استحکام فراہم کرتے ہیں۔ اس کے برعکس، ٹینڈن مربوط ٹشو ہوتے ہیں جو پٹھوں کو ہڈی سے جوڑتے ہیں۔ ہموار پٹھا ایک قسم کا پٹھوں کا ٹشو ہے، اور فائبروبلاسٹ ایک قسم کا خلیہ ہے جو مربوط ٹشو پیدا کرتا ہے۔"
  },
  {
    "id": "644",
    "text": "Who was the first scientist to discover and describe microorganisms such as protists and bacteria? (TSTET 5 Jan 2025)\nپروٹسٹ اور بیکٹیریا جیسے مائیکرو آرگنزم کو دریافت اور بیان کرنے والا پہلا سائنسدان کون تھا؟",
    "options": [
      "Robert Brown",
      "Robert Hooke",
      "Antonie Van Leeuwenhoek",
      "Alexander Fleming"
    ],
    "correct": "Antonie Van Leeuwenhoek",
    "explanation": "اینٹونی وین لیوین ہوک، 17ویں صدی کے ایک ڈچ سائنسدان، کو وسیع پیمانے پر 'مائیکروبائیولوجی کا باپ' سمجھا جاتا ہے۔ اپنی ہاتھ سے بنی خوردبینوں کا استعمال کرتے ہوئے، وہ یک خلوی جانداروں کا مشاہدہ اور دستاویز کرنے والے پہلے شخص تھے، جنہیں انہوں نے 'اینیملکیولز' کہا، جن میں بیکٹیریا اور پروٹسٹ شامل تھے۔"
  },
  {
    "id": "645",
    "text": "Which of the following are NOT granulocytic White Blood Cells? (TSTET 5 Jan 2025)\nمندرجہ ذیل میں سے کون سے گرینولوسائٹک سفید خون کے خلیات نہیں ہیں؟",
    "options": [
      "Lymphocytes\nلمفوسائٹس",
      "Basophils\nبیسوفلز",
      "Neutrophils\nنیوٹروفلز",
      "Eosinophils\nایسینوفلز"
    ],
    "correct": "Lymphocytes",
    "explanation": "سفید خون کے خلیات (لیوکوائٹس) کو ان کے سائٹوپلازم میں دانے داروں کی موجودگی کی بنیاد پر دو گروپوں میں تقسیم کیا گیا ہے۔ گرینولوسائٹس (دانے داروں پر مشتمل) میں نیوٹروفلز، ایسینوفلز، اور بیسوفلز شامل ہیں۔ اگرینولوسائٹس (دانے داروں کی کمی) میں لمفوسائٹس اور مونوسائٹس شامل ہیں۔ لہذا، لمفوسائٹس گرینولوسائٹس نہیں ہیں۔"
  },
  {
    "id": "646",
    "text": "Identify the protozoan from the following. (TSTET 5 Jan 2025)\nمندرجہ ذیل میں سے پروٹوزوآن کی شناخت کریں۔",
    "options": [
      "Cyclops",
      "Vorticella",
      "Ceratium",
      "Aspergillus"
    ],
    "correct": "Vorticella",
    "explanation": "وورٹی سیلا گھنٹی کی شکل کے، یک خلوی یوکرائٹس کی ایک نسل ہے جسے سلیئٹس کہا جاتا ہے، جو پروٹسٹا کی بادشاہی سے تعلق رکھتے ہیں اور انہیں پروٹوزوآن کے طور پر درجہ بندی کیا جاتا ہے۔ سائکلپس ایک کرسٹیشین ہے، سیریٹیم ایک قسم کی الجی (ڈائنوفلیجلیٹ) ہے، اور ایسپرجیلس فنگس کی ایک نسل ہے۔"
  },
  {
    "id": "647",
    "text": "Which of the following stores food materials in the root? (TSTET 5 Jan 2025)\nمندرجہ ذیل میں سے کون جڑ میں غذائی مواد ذخیرہ کرتا ہے؟",
    "options": [
      "Turmeric\nہلدی",
      "Ginger\nادرک",
      "Radish\nمولی",
      "Garlic\nلہسن"
    ],
    "correct": "Radish",
    "explanation": "مولی ایک تبدیل شدہ ٹیپ روٹ ہے جو خوراک ذخیرہ کرنے کے لیے گوشت دار اور سوجی ہوئی ہو جاتی ہے۔ دیگر اختیارات تبدیل شدہ تنے یا پتے ہیں۔ ادرک اور ہلدی رائزوم (زیر زمین تنے) ہیں، اور لہسن ایک بلب ہے (ایک چھوٹا تنا جس میں گوشت دار پتے ہوتے ہیں جو خوراک ذخیرہ کرنے والے اعضاء کے طور پر کام کرتے ہیں)۔"
  },
  {
    "id": "648",
    "text": "Identify the Saprophyte from the following. (TSTET 5 Jan 2025)\nمندرجہ ذیل میں سے سیپروفائٹ کی شناخت کریں۔",
    "options": [
      "Nepenthes",
      "Cuscuta",
      "Drosera",
      "Agaricus"
    ],
    "correct": "Agaricus",
    "explanation": "سیپروفائٹ ایک ایسا جاندار ہے جو اپنی غذائیت مردہ اور سڑنے والے نامیاتی مادے سے حاصل کرتا ہے۔ ایگیریکس، عام مشروم، سیپروفائٹک فنگس کی ایک کلاسیکی مثال ہے۔ کسکوٹا ایک پرجیوی پودا ہے، جبکہ نیپینتھیس اور ڈروسیرا گوشت خور پودے ہیں جو کیڑوں کو پھنسا کر اپنی غذائیت کو پورا کرتے ہیں۔"
  },
  {
    "id": "649",
    "text": "Identify the pair in which both the organisms show External fertilization. (TSTET 5 Jan 2025)\nاس جوڑے کی شناخت کریں جس میں دونوں جاندار بیرونی فرٹیلائزیشن ظاہر کرتے ہیں۔",
    "options": [
      "Frog & Cockroach\nمینڈک اور کاکروچ",
      "Frog & Fish\nمینڈک اور مچھلی",
      "Fish & Earthworm\nمچھلی اور کیچوا",
      "Cockroach & Earthworm\nکاکروچ اور کیچوا"
    ],
    "correct": "Frog & Fish",
    "explanation": "بیرونی فرٹیلائزیشن اس وقت ہوتی ہے جب سپرم مادہ کے جسم سے باہر انڈے کو فرٹیلائز کرتا ہے، یہ عمل عام طور پر آبی ماحول میں ہوتا ہے۔ مینڈک (ایمفیبین) اور زیادہ تر ہڈیوں والی مچھلیاں دونوں اپنے گیمیٹس کو فرٹیلائزیشن کے لیے پانی میں چھوڑتی ہیں۔ کاکروچ (کیڑے) اور کیچوے (اینیلڈ) اندرونی فرٹیلائزیشن سے گزرتے ہیں۔"
  },
  {
    "id": "650",
    "text": "The percentage of Argon in the atmosphere is about (TSTET 5 Jan 2025)\nفضا میں آرگن کا فیصد تقریباً ہے",
    "options": [
      "0.93%",
      "0.04%",
      "20.95%",
      "78.08%"
    ],
    "correct": "0.93%",
    "explanation": "زمین کی فضا کئی گیسوں پر مشتمل ہے۔ سب سے زیادہ وافر نائٹروجن (تقریباً %78.08) ہے، اس کے بعد آکسیجن (تقریباً %20.95) ہے۔ آرگن تیسری سب سے زیادہ وافر گیس ہے، جو فضا کا تقریباً %0.93 بناتی ہے۔ کاربن ڈائی آکسائیڈ تقریباً %0.04 ہے۔"
  },
  {
    "id": "651",
    "text": "Which of the following diseases is NOT caused by a protozoan pathogen? (TSTET 5 Jan 2025)\nمندرجہ ذیل میں سے کون سی بیماری پروٹوزوآن پیتھوجین کی وجہ سے نہیں ہوتی ہے؟",
    "options": [
      "Kala-azar\nکالا آزار",
      "Filariasis\nفیلاریاسس",
      "Malaria\nملیریا",
      "Sleeping sickness\nنیند کی بیماری"
    ],
    "correct": "Filariasis",
    "explanation": "فیلاریاسس پرجیوی گول کیڑوں (ہیلمینتھس) کی قسم فیلاریوڈیا کی وجہ سے ہوتا ہے، نہ کہ پروٹوزوآن کی وجہ سے۔ دیگر بیماریاں پروٹوزوآن کی وجہ سے ہوتی ہیں: ملیریا پلازموڈیم کی وجہ سے، نیند کی بیماری ٹرپینوسوما کی وجہ سے، اور کالا آزار لیشمانیا کی وجہ سے۔"
  },
  {
    "id": "652",
    "text": "Identify the cell organelle present in both prokaryotic and eukaryotic cells. (TSTET 5 Jan 2025)\nپروکاریوٹک اور یوکاریوٹک دونوں خلیوں میں موجود سیل آرگنیل کی شناخت کریں۔",
    "options": [
      "Endoplasmic Reticulum\nاینڈوپلازمک ریٹیکولم",
      "Mitochondrion\nمائٹوکونڈرین",
      "Ribosomes\nرائبوسومز",
      "Nucleus\nنیوکلیس"
    ],
    "correct": "Ribosomes",
    "explanation": "رائبوسومز پروٹین کی ترکیب کی جگہیں ہیں اور زندگی کی تمام شکلوں میں پائے جاتے ہیں، بشمول پروکاریوٹک اور یوکاریوٹک دونوں خلیات۔ پروکاریوٹک خلیات آسان ہوتے ہیں اور ان میں نیوکلیس اور دیگر جھلی سے بندھے ہوئے آرگنیلز جیسے مائٹوکونڈریا اور اینڈوپلازمک ریٹیکولم کی کمی ہوتی ہے، جو یوکاریوٹک خلیوں میں موجود ہوتے ہیں۔"
  },
  {
    "id": "653",
    "text": "Identify the primary air pollutants that cause acid rain. (TSTET 5 Jan 2025)\nتیزابی بارش کا سبب بننے والے بنیادی فضائی آلودگیوں کی شناخت کریں۔",
    "options": [
      "SO₂ & CFC",
      "CO₂ & CFC",
      "CFC PAN",
      "SO₂ & NO₂"
    ],
    "correct": "SO₂ & NO₂",
    "explanation": "تیزابی بارش بنیادی طور پر بنیادی آلودگیوں، خاص طور پر سلفر ڈائی آکسائیڈ ($SO_2$) اور نائٹروجن آکسائڈز ($NO_2$)، کے پانی اور آکسیجن کے ساتھ ماحولیاتی تعامل کی وجہ سے ہوتی ہے۔ یہ تعامل سلفیورک ایسڈ اور نائٹرک ایسڈ بناتے ہیں، جو پھر زمین پر تیزابی بارش کے طور پر گرتے ہیں۔ CFCs بنیادی طور پر اوزون کی کمی کے ذمہ دار ہیں۔"
  },
  {
    "id": "654",
    "text": "The second trophic level in a food chain is always occupied by these (TSTET 5 Jan 2025)\nغذائی زنجیر میں دوسری ٹرافک سطح ہمیشہ ان کے قبضے میں ہوتی ہے",
    "options": [
      "Producers\nپیدا کار",
      "Herbivores\nسبزی خور",
      "Omnivores\nہمہ خور",
      "Carnivores\nگوشت خور"
    ],
    "correct": "Herbivores",
    "explanation": "ٹرافک سطحیں اس پوزیشن کو بیان کرتی ہیں جو ایک جاندار غذائی زنجیر میں رکھتا ہے۔ پہلی سطح پیدا کاروں (پودوں) پر مشتمل ہوتی ہے۔ دوسری ٹرافک سطح بنیادی صارفین پر مشتمل ہوتی ہے، جو سبزی خور ہیں جو پیدا کاروں کو کھاتے ہیں۔ گوشت خور اور ہمہ خور تیسری اور اعلیٰ ٹرافک سطحوں پر قابض ہوتے ہیں۔"
  },
  {
    "id": "655",
    "text": "The lecture method can be made more effective by: (TSTET 5 Jan 2025)\nلیکچر کے طریقہ کار کو مزید مؤثر بنایا جا سکتا ہے:",
    "options": [
      "Increasing the lecture time\nلیکچر کا وقت بڑھا کر",
      "Incorporating group discussions and activities\nگروپ مباحثوں اور سرگرمیوں کو شامل کرکے",
      "Avoiding visual teaching aids\nبصری تدریسی امداد سے گریز کرکے",
      "Relying solely on textbooks\nصرف نصابی کتب پر انحصار کرکے"
    ],
    "correct": "Incorporating group discussions and activities",
    "explanation": "ایک روایتی لیکچر ایک غیر فعال سیکھنے کا تجربہ ہو سکتا ہے۔ اسے مزید مؤثر اور دلچسپ بنانے کے لیے، انٹرایکٹو عناصر کو شامل کرنا بہت ضروری ہے۔ گروپ مباحثے اور سرگرمیاں فعال شرکت، تنقیدی سوچ، اور باہمی تعاون سے سیکھنے کی حوصلہ افزائی کرتی ہیں، جس سے معلومات کی بہتر تفہیم اور برقرار رکھنے میں مدد ملتی ہے۔"
  },
  {
    "id": "656",
    "text": "\"Assessment of Learning\" is assessment relating to (TSTET 5 Jan 2025)\n\"سیکھنے کا جائزہ\" اس سے متعلق جائزہ ہے",
    "options": [
      "Understanding level of students only\nصرف طلباء کی سمجھ کی سطح",
      "Individual learning styles of students\nطلباء کے انفرادی سیکھنے کے انداز",
      "Student engagement during the learning process\nسیکھنے کے عمل کے دوران طلباء کی مصروفیت",
      "Final performance of students\nطلباء کی حتمی کارکردگی"
    ],
    "correct": "Final performance of students",
    "explanation": "\"سیکھنے کا جائزہ\" کا مطلب مجموعی جائزہ ہے، جو ایک تدریسی یونٹ یا کورس کے اختتام پر طلباء کی سیکھنے کا اندازہ کرتا ہے۔ اس کا بنیادی مقصد مقررہ معیارات کے خلاف طلباء کی حتمی کارکردگی یا کامیابی کی پیمائش کرنا ہے، جو اکثر درجہ بندی اور رپورٹنگ کے مقصد کے لیے ہوتا ہے۔"
  },
  {
    "id": "657",
    "text": "In Telangana science text books questions are given under this heading at the end of the lesson (TSTET 5 Jan 2025)\nتلنگانہ کی سائنس کی نصابی کتب میں سبق کے آخر میں اس عنوان کے تحت سوالات دیے گئے ہیں",
    "options": [
      "What we have learnt?\nہم نے کیا سیکھا؟",
      "Improve your learning\nاپنی تعلیم کو بہتر بنائیں",
      "Exercises\nمشقیں",
      "Test items\nٹیسٹ آئٹمز"
    ],
    "correct": "Improve your learning",
    "explanation": "ریاستی نصابی فریم ورک (SCF) کے رہنما خطوط کے مطابق، تلنگانہ کی نصابی کتب، بشمول سائنس کی کتب، ہر سبق کے آخر میں 'اپنی تعلیم کو بہتر بنائیں' کے عنوان سے ایک سیکشن رکھتی ہیں۔ اس سیکشن میں سوالات، سرگرمیاں، اور پروجیکٹس شامل ہیں جو سبق میں پڑھائے گئے تصورات کو تقویت دینے اور بڑھانے کے لیے ڈیزائن کیے گئے ہیں۔"
  },
  {
    "id": "658",
    "text": "Development of vaccines in the medical field is related to this value of teaching Biological Sciences. (TSTET 5 Jan 2025)\nطبی میدان میں ویکسین کی ترقی حیاتیاتی علوم کی تدریس کی اس قدر سے متعلق ہے۔",
    "options": [
      "Aesthetic value\nجمالیاتی قدر",
      "Inspirational value.\nتحریکی قدر",
      "Disciplinary value.\nنظم و ضبط کی قدر",
      "Value of Basis for Better living.\nبہتر زندگی کی بنیاد کی قدر"
    ],
    "correct": "Value of Basis for Better living.",
    "explanation": "ویکسین کی تخلیق اور اطلاق براہ راست بیماریوں سے بچنے، صحت عامہ کو بہتر بنانے، اور انسانی زندگی کے معیار اور طوالت کو بڑھانے میں معاون ہے۔ یہ حیاتیات کی افادی یا عملی قدر کی مثال دیتا ہے، کیونکہ یہ ایک صحت مند اور بہتر زندگی کے لیے سائنسی بنیاد فراہم کرتا ہے۔"
  },
  {
    "id": "659",
    "text": "A student of class 8 is reading an article on controlling environmental pollution in a Science magazine and is noting down important points from it. This is related to the following domain and aspect. (TSTET 5 Jan 2025)\nآٹھویں جماعت کا ایک طالب علم سائنس میگزین میں ماحولیاتی آلودگی پر قابو پانے کے بارے میں ایک مضمون پڑھ رہا ہے اور اس میں سے اہم نکات نوٹ کر رہا ہے۔ اس کا تعلق مندرجہ ذیل ڈومین اور پہلو سے ہے۔",
    "options": [
      "Cognitive domain - Application.\nعلمی ڈومین - اطلاق۔",
      "Affective domain - responding.\nجذباتی ڈومین - جواب دینا۔",
      "Psychomotor domain - imitation.\nسائیکوموٹر ڈومین - تقلید۔",
      "Cognitive domain - receiving.\nعلمی ڈومین - وصول کرنا۔"
    ],
    "correct": "Affective domain - responding.",
    "explanation": "جذباتی ڈومین جذبات، دلچسپیوں، رویوں، اور اقدار سے متعلق ہے۔ طالب علم کا صرف پڑھنا ہی نہیں بلکہ فعال طور پر 'اہم نکات نوٹ کرنا' معلومات کے غیر فعال استقبال سے زیادہ ظاہر کرتا ہے۔ یہ موضوع پر فعال شرکت اور جواب دینے کی رضامندی کی نشاندہی کرتا ہے، جو جذباتی ڈومین کی 'جواب دینے' کی سطح سے مطابقت رکھتا ہے۔"
  },
  {
    "id": "660",
    "text": "Identify from the following, the features of Fill in the blanks type of questions: (TSTET 5 Jan 2025)\nA) These questions always begin with blank.\nB) One or more key words are to be missed in this type of questions.\nC) These questions are useful in testing the memory of the students.\n\nمندرجہ ذیل میں سے خالی جگہ پر کریں قسم کے سوالات کی خصوصیات کی شناخت کریں:\nA) یہ سوالات ہمیشہ خالی جگہ سے شروع ہوتے ہیں۔\nB) اس قسم کے سوالات میں ایک یا زیادہ کلیدی الفاظ کو چھوڑ دیا جاتا ہے۔\nC) یہ سوالات طلباء کی یادداشت کو جانچنے میں مفید ہیں۔",
    "options": [
      "A & B only\nصرف A اور B",
      "A & C only\nصرف A اور C",
      "B & C only\nصرف B اور C",
      "A, B & C only\nصرف A، B اور C"
    ],
    "correct": "B & C only",
    "explanation": "بیان A غلط ہے، کیونکہ خالی جگہ کو جملے میں کہیں بھی رکھا جا سکتا ہے۔ بیان B ایک بنیادی خصوصیت ہے؛ مقصد یہ ہے کہ طالب علم کو یاد کرنے کے لیے ایک کلیدی لفظ یا فقرہ چھوڑ دیا جائے۔ بیان C بھی درست ہے؛ خالی جگہ پر کریں سوالات حقائق پر مبنی معلومات اور اصطلاحات کی یادداشت کا اندازہ لگانے کے لیے ایک عام ذریعہ ہیں، اس طرح طالب علم کی یادداشت کی جانچ ہوتی ہے۔"
  },
  {
    "id": "661",
    "text": "The constant temperature at which a liquid substance gets converted into gaseous state is called (APTET 2011)\nوہ مستقل درجہ حرارت جس پر کوئی مائع مادہ گیسی حالت میں تبدیل ہو جاتا ہے، کہلاتا ہے",
    "options": [
      "freezing point.\nنقطہ انجماد۔",
      "lower fixed point.\nنچلا مقررہ نقطہ۔",
      "boiling point.\nنقطہ ابال۔",
      "melting point.\nنقطہ پگھلاؤ۔"
    ],
    "correct": "boiling point.",
    "explanation": "نقطہ ابال وہ مخصوص درجہ حرارت ہے جس پر مائع کا بخاراتی دباؤ مائع کے ارد گرد کے دباؤ کے برابر ہو جاتا ہے، اور مائع بخارات میں تبدیل ہو جاتا ہے۔ نقطہ انجماد وہ ہے جب مائع ٹھوس میں بدل جاتا ہے۔ نقطہ پگھلاؤ وہ درجہ حرارت ہے جس پر ٹھوس مائع بن جاتا ہے۔ درجہ حرارت کے پیمانے پر نچلا مقررہ نقطہ عام طور پر پانی کا نقطہ انجماد ہوتا ہے۔"
  },
  {
    "id": "662",
    "text": "Raju could hear the echo of his clap from a hill in front of him after 3 seconds of his clapping. The distance between him and the hill, assuming the velocity of sound in air to be 320 m/sec is..... (APTET 2011)\nراجو اپنی تالی بجانے کے 3 سیکنڈ بعد اپنے سامنے ایک پہاڑی سے اپنی تالی کی گونج سن سکتا تھا۔ اس کے اور پہاڑی کے درمیان کا فاصلہ، یہ مانتے ہوئے کہ ہوا میں آواز کی رفتار 320 میٹر فی سیکنڈ ہے، ..... ہے",
    "options": [
      "480 m",
      "960 m",
      "320 m",
      "3 m"
    ],
    "correct": "480 m",
    "explanation": "گونج آواز کا انعکاس ہے۔ آواز کو پہاڑی تک جانے اور واپس آنے میں کل 3 سیکنڈ لگتے ہیں۔ آواز کے ذریعے طے کیا گیا کل فاصلہ اس طرح شمار کیا جاتا ہے: فاصلہ = رفتار × وقت۔ کل فاصلہ = 320 میٹر فی سیکنڈ × 3 سیکنڈ = 960 میٹر۔ یہ کل فاصلہ ایک راؤنڈ ٹرپ ہے۔ راجو اور پہاڑی کے درمیان کا فاصلہ اس کل فاصلے کا نصف ہے۔ لہذا، پہاڑی کا فاصلہ = 960 میٹر / 2 = 480 میٹر۔"
  },
  {
    "id": "663",
    "text": "Consider 3 magnets A, B, C are one of the poles of each of the magnets. A, B get attracted and A, C get repelled. Then the following statement is true (APTET 2011)\nفرض کریں 3 مقناطیس A، B، C ہر مقناطیس کے قطبوں میں سے ایک ہیں۔ A، B ایک دوسرے کو کھینچتے ہیں اور A، C ایک دوسرے کو دھکیلتے ہیں۔ تو مندرجہ ذیل بیان درست ہے",
    "options": [
      "A, C are like and B, C are like.\nA, C ایک جیسے ہیں اور B, C ایک جیسے ہیں۔",
      "A, B are unlike and B, C are unlike.\nA, B مختلف ہیں اور B, C مختلف ہیں۔",
      "A, B are unlike and B, C are like.\nA, B مختلف ہیں اور B, C ایک جیسے ہیں۔",
      "A, B are like and B, C are unlike.\nA, B ایک جیسے ہیں اور B, C مختلف ہیں۔"
    ],
    "correct": "A, B are unlike and B, C are unlike.",
    "explanation": "مقناطیسیت کے قوانین کے مطابق، ایک جیسے قطب ایک دوسرے کو دھکیلتے ہیں، اور مختلف قطب ایک دوسرے کو کھینچتے ہیں۔ چونکہ A اور C ایک دوسرے کو دھکیلتے ہیں، اس لیے وہ ایک جیسے قطب ہونے چاہئیں (مثال کے طور پر، دونوں شمالی)۔ چونکہ A اور B ایک دوسرے کو کھینچتے ہیں، اس لیے وہ مختلف قطب ہونے چاہئیں (مثال کے طور پر، اگر A شمالی ہے، تو B جنوبی ہونا چاہیے)۔ اگر A اور C ایک جیسے قطب ہیں (دونوں شمالی) اور B، A کا مخالف قطب ہے (جنوبی)، تو B اور C بھی مختلف قطب ہونے چاہئیں (جنوبی اور شمالی)۔ لہذا، A اور B مختلف ہیں، اور B اور C بھی مختلف ہیں۔"
  },
  {
    "id": "664",
    "text": "The molecular formula for Ammonium Phosphate is (APTET 2011)\nامونیم فاسفیٹ کا سالماتی فارمولا ہے",
    "options": [
      "NH₃PO₃",
      "NH₃(PO₄)₂",
      "(NH₄)₃PO₄",
      "NH₄PO₃"
    ],
    "correct": "(NH₄)₃PO₄",
    "explanation": "کیمیائی فارمولا لکھنے کے لیے، ہمیں آئنوں کے چارجز کو متوازن کرنے کی ضرورت ہے۔ امونیم آئن $NH_4^+$ (چارج +1) ہے۔ فاسفیٹ آئن $PO_4^{3-}$ (چارج -3) ہے۔ ایک غیر جانبدار مرکب بنانے کے لیے، ایک -3 فاسفیٹ آئن کو متوازن کرنے کے لیے تین +1 امونیم آئنوں کی ضرورت ہوتی ہے۔ اس طرح، صحیح فارمولا $(NH₄)₃PO₄$ ہے۔"
  },
  {
    "id": "665",
    "text": "The apparatus used to transfer a fixed volume of liquid from the source accurately to another container is (APTET 2011)\nایک مقررہ حجم کے مائع کو منبع سے دوسرے کنٹینر میں درست طریقے سے منتقل کرنے کے لیے استعمال ہونے والا آلہ ہے",
    "options": [
      "Pipette\nپپیٹ",
      "Measuring jar\nپیمائشی جار",
      "Measuring flask\nپیمائشی فلاسک",
      "Burette\nبیورٹ"
    ],
    "correct": "Pipette",
    "explanation": "پپیٹ ایک لیبارٹری کا آلہ ہے جو مائع کی ایک درست، مقررہ حجم کی فراہمی کے لیے کیلیبریٹ کیا جاتا ہے۔ پیمائشی جار (یا گریجویٹڈ سلنڈر) تخمینی حجم کی پیمائش کے لیے استعمال ہوتا ہے۔ پیمائشی فلاسک (یا والیومیٹرک فلاسک) ایک مخصوص حجم کو درست طریقے سے *رکھنے* کے لیے ڈیزائن کیا گیا ہے، نہ کہ اسے منتقل کرنے کے لیے۔ بیورٹ مائع کے متغیر لیکن درست حجم کو تقسیم کرنے کے لیے استعمال ہوتا ہے، جو عام طور پر ٹائٹریشن میں استعمال ہوتا ہے۔"
  },
  {
    "id": "666",
    "text": "In a Bramah press other things remaining constant if the cross-section of large piston is doubled, then the thrust on it (APTET 2011)\nایک برامہ پریس میں اگر باقی چیزیں مستقل رہیں اور بڑے پسٹن کا کراس سیکشن دوگنا کر دیا جائے، تو اس پر لگنے والی قوت",
    "options": [
      "is raised by 4 times.\n4 گنا بڑھ جاتی ہے۔",
      "will remain the same.\nوہی رہے گی۔",
      "is halved.\nآدھی ہو جاتی ہے۔",
      "is doubled.\nدوگنی ہو جاتی ہے۔"
    ],
    "correct": "is doubled.",
    "explanation": "برامہ پریس پاسکل کے اصول پر کام کرتا ہے، جو کہتا ہے کہ دباؤ ایک بند مائع میں یکساں طور پر منتقل ہوتا ہے ($P_1 = P_2$)۔ چونکہ دباؤ = قوت / رقبہ، ہمارے پاس $F_1/A_1 = F_2/A_2$ ہے۔ بڑے پسٹن پر قوت (thrust) $F_2 = F_1 \times (A_2/A_1)$ ہے۔ اگر بڑے پسٹن کا رقبہ ($A_2$) دوگنا کر دیا جائے، تو نئی قوت $F_1 \times (2A_2/A_1)$ ہوگی، جو اصل قوت ($F_2$) سے دوگنی ہے۔ لہذا، قوت دوگنی ہو جاتی ہے۔"
  },
  {
    "id": "667",
    "text": "'m' gms of Carbon reacts completely with 'n' gms of Oxygen to produce Carbon dioxide. The mass of Oxygen required to react with 'm' gms of Carbon completely and produce Carbon-monoxide is.. (APTET 2011)\n'm' گرام کاربن 'n' گرام آکسیجن کے ساتھ مکمل طور پر تعامل کرکے کاربن ڈائی آکسائیڈ بناتا ہے۔ 'm' گرام کاربن کے ساتھ مکمل طور پر تعامل کرکے کاربن مونو آکسائیڈ بنانے کے لیے درکار آکسیجن کی کمیت ہے..",
    "options": [
      "n/2 gms",
      "m gms",
      "n gms",
      "m/2 gms"
    ],
    "correct": "n/2 gms",
    "explanation": "تعاملات یہ ہیں: 1) کاربن ڈائی آکسائیڈ کے لیے: C + O₂ → CO₂۔ 2) کاربن مونو آکسائیڈ کے لیے: 2C + O₂ → 2CO، جس کا مطلب ہے C + ½O₂ → CO۔ کاربن مونو آکسائیڈ (CO) بنانے کے لیے، کاربن کا ایک ایٹم آکسیجن کے ایک ایٹم کے ساتھ تعامل کرتا ہے۔ کاربن ڈائی آکسائیڈ (CO₂) بنانے کے لیے، کاربن کا ایک ایٹم آکسیجن کے دو ایٹموں کے ساتھ تعامل کرتا ہے۔ لہذا، کاربن کی اسی کمیت ('m' گرام) کے لیے، کاربن مونو آکسائیڈ بنانے کے لیے کاربن ڈائی آکسائیڈ بنانے کے لیے درکار آکسیجن کی کمیت کا بالکل نصف درکار ہوتا ہے۔ اگر CO₂ کے لیے 'n' گرام آکسیجن درکار ہے، تو CO کے لیے n/2 گرام درکار ہوں گے۔"
  },
  {
    "id": "668",
    "text": "The gas liberated on heating Zinc Carbonate is (APTET 2011)\nزنک کاربونیٹ کو گرم کرنے پر خارج ہونے والی گیس ہے",
    "options": [
      "H₂",
      "O₂",
      "CO₂",
      "CO"
    ],
    "correct": "CO₂",
    "explanation": "دھاتی کاربونیٹس کو گرم کرنے سے تھرمل ڈیکمپوزیشن ہوتی ہے۔ زنک کاربونیٹ ($ZnCO_3$) گرم کرنے پر زنک آکسائیڈ ($ZnO$) اور کاربن ڈائی آکسائیڈ ($CO_2$) گیس میں ٹوٹ جاتا ہے۔ متوازن کیمیائی مساوات یہ ہے: $ZnCO_3(s) → ZnO(s) + CO_2(g)$۔"
  },
  {
    "id": "669",
    "text": "The first artificial satellite launched by India is ...... (APTET 2011)\nبھارت کی طرف سے لانچ کیا گیا پہلا مصنوعی سیارہ ...... ہے",
    "options": [
      "Bhaskara",
      "APPLE",
      "Arya Bhatta",
      "Rohini"
    ],
    "correct": "Arya Bhatta",
    "explanation": "آریہ بھٹ بھارت کا پہلا سیارہ تھا۔ اسے 19 اپریل 1975 کو سوویت یونین نے لانچ کیا تھا۔ اس کا نام 5ویں صدی کے ممتاز بھارتی ماہر فلکیات اور ریاضی دان کے نام پر رکھا گیا تھا۔ بھاسکر، ایپل، اور روہنی بعد کے بھارتی سیارے تھے۔"
  },
  {
    "id": "670",
    "text": "The emblem of a T.V. channel is displayed at the left hand top corner of the screen. When Raju is seeing the image of the T.V. in a mirror the emblem appears at (APTET 2011)\nایک ٹی وی چینل کا نشان اسکرین کے بائیں ہاتھ کے اوپری کونے میں دکھایا جاتا ہے۔ جب راجو آئینے میں ٹی وی کی تصویر دیکھ رہا ہے تو نشان ظاہر ہوتا ہے",
    "options": [
      "left hand bottom corner.\nبائیں ہاتھ کے نچلے کونے میں۔",
      "right hand top corner.\nدائیں ہاتھ کے اوپری کونے میں۔",
      "left hand top corner.\nبائیں ہاتھ کے اوپری کونے میں۔",
      "right hand bottom corner.\nدائیں ہاتھ کے نچلے کونے میں۔"
    ],
    "correct": "right hand top corner.",
    "explanation": "ایک ہموار آئینہ ایک ایسی تصویر بناتا ہے جو اطراف سے الٹی ہوتی ہے، یعنی بائیں اور دائیں الٹ جاتے ہیں۔ تاہم، اوپر سے نیچے کوئی الٹ نہیں ہوتا۔ لہذا، اصل اسکرین کے اوپری بائیں کونے میں ایک چیز اس کے آئینے کی تصویر کے اوپری دائیں کونے میں ظاہر ہوگی۔"
  },
  {
    "id": "671",
    "text": "The shape of the body which is always in stable equilibrium, irrespective of the position it is placed, is (APTET 2011)\nاس جسم کی شکل جو ہمیشہ مستحکم توازن میں ہوتی ہے، چاہے اسے کسی بھی پوزیشن میں رکھا جائے، ہے",
    "options": [
      "Cube\nمکعب",
      "Cone\nمخروط",
      "Cylinder\nسلنڈر",
      "Sphere\nکرہ"
    ],
    "correct": "Cube",
    "explanation": "یہ سوال مبہم طور پر بیان کیا گیا ہے۔ ایک کرہ ہمیشہ غیر جانبدار توازن میں ہوتا ہے، مستحکم نہیں۔ ایک مخروط صرف اپنی بنیاد پر مستحکم ہوتا ہے۔ ایک مکعب، جب اس کے کسی بھی ہموار چہرے پر رکھا جاتا ہے، تو مستحکم توازن میں ہوتا ہے کیونکہ اسے جھکانے سے اس کا مرکز ثقل بلند ہوتا ہے، اور جب اسے چھوڑا جاتا ہے تو یہ اپنی اصل پوزیشن پر واپس آ جاتا ہے۔ 'کسی بھی پوزیشن سے قطع نظر' کا جملہ ممکنہ طور پر اس کے متعدد، یکساں، مستحکم آرام دہ چہروں سے مراد ہے، جو اسے ناقص جملے کے باوجود انتخاب میں بہترین جواب بناتا ہے۔"
  },
  {
    "id": "672",
    "text": "Electrochemical effect is used in ... (APTET 2011)\nالیکٹرو کیمیکل اثر ... میں استعمال ہوتا ہے",
    "options": [
      "Telegraph\nٹیلی گراف",
      "Electric motors\nبرقی موٹریں",
      "Electric stove\nبرقی چولہا",
      "Purification of metals\nدھاتوں کی صفائی"
    ],
    "correct": "Purification of metals",
    "explanation": "الیکٹرو کیمیکل اثر میں کیمیائی رد عمل (الیکٹرولیسس) کو چلانے کے لیے برقی کرنٹ کا استعمال شامل ہے۔ یہ اصول دھاتوں کی صفائی میں الیکٹرو ریفائننگ نامی عمل کے ذریعے لاگو ہوتا ہے۔ اس کے برعکس، ٹیلی گراف اور برقی موٹریں کرنٹ کے مقناطیسی اثر پر کام کرتی ہیں، جبکہ برقی چولہا کرنٹ کے حرارتی اثر کو استعمال کرتا ہے۔"
  },
  {
    "id": "673",
    "text": "One of the following is not the correct pair (APTET 2011)\nمندرجہ ذیل میں سے ایک صحیح جوڑا نہیں ہے",
    "options": [
      "Chlorophyll - Conversion of energy.\nکلوروفل - توانائی کی تبدیلی۔",
      "Chromoplast - Colourless.\nکرومپلاسٹ - بے رنگ۔",
      "Young tomatoes - Leucoplast.\nنوجوان ٹماٹر - لیوکوپلاسٹ۔",
      "Green chilli - Chloroplast.\nہری مرچ - کلوروپلاسٹ۔"
    ],
    "correct": "Chromoplast - Colourless.",
    "explanation": "یہ جوڑا غلط ہے۔ کرومپلاسٹ پلاسٹڈ ہیں جن میں کیروٹینائڈ پگمنٹس ہوتے ہیں، جو پھولوں اور پھلوں کو ان کے پیلے، نارنجی، یا سرخ رنگ دیتے ہیں؛ وہ بے رنگ نہیں ہوتے۔ لیوکوپلاسٹ بے رنگ پلاسٹڈ ہیں۔ دوسرے جوڑے صحیح ہیں: کلوروفل روشنی کی توانائی کو کیمیائی توانائی میں تبدیل کرنے کے لیے اہم ہے۔ نوجوان، کچے ٹماٹروں میں رنگ پیدا ہونے سے پہلے لیوکوپلاسٹ ہوتے ہیں۔ ہری مرچیں کلوروپلاسٹ کی موجودگی کی وجہ سے سبز ہوتی ہیں۔"
  },
  {
    "id": "674",
    "text": "A plant has bisexual flowers. You want to cross pollinate those flowers. You have to ..... (APTET 2011)\nایک پودے میں دو جنسی پھول ہوتے ہیں۔ آپ ان پھولوں کی کراس پولینیشن کرنا چاہتے ہیں۔ آپ کو ..... کرنا ہوگا",
    "options": [
      "remove both Androecium and Gynoecium.\nاینڈروشیم اور گائنوشیم دونوں کو ہٹا دیں۔",
      "remove Calyx.\nکیلکس کو ہٹا دیں۔",
      "remove Corolla.\nکرولا کو ہٹا دیں۔",
      "remove either Gynoecium or Androecium.\nیا تو گائنوشیم یا اینڈروشیم کو ہٹا دیں۔"
    ],
    "correct": "remove either Gynoecium or Androecium.",
    "explanation": "دو جنسی پھول (جس میں نر اور مادہ دونوں حصے ہوتے ہیں) میں خود پولینیشن کو روکنے اور کراس پولینیشن کو یقینی بنانے کے لیے، تولیدی اعضاء کے ایک سیٹ کو ہٹانا ضروری ہے۔ عام طور پر، نر حصہ (اینڈروشیم، جو پولن پیدا کرتا ہے) کو ایماسکیولیشن نامی عمل میں ہٹا دیا جاتا ہے، جس سے مادہ حصہ (گائنوشیم) کو دوسرے پھول سے پولینیٹ ہونے کے لیے چھوڑ دیا جاتا ہے۔ لہذا، اینڈروشیم کو ہٹانا ضروری قدم ہے۔"
  },
  {
    "id": "675",
    "text": "Alternation of generation is seen in the life history of (APTET 2011)\nنسلوں کا ادل بدل ... کی زندگی کی تاریخ میں دیکھا جاتا ہے",
    "options": [
      "Frog\nمینڈک",
      "Selaginella\nسیلاجنیلا",
      "Chlamydomonas\nکلیمائڈوموناس",
      "Mosquito\nمچھر"
    ],
    "correct": "Selaginella",
    "explanation": "نسلوں کا ادل بدل ایک زندگی کے چکر کا نمونہ ہے جہاں ایک جاندار ایک کثیر خلوی ہیپلوئڈ (گیمیٹوفائٹ) مرحلے اور ایک کثیر خلوی ڈپلوئڈ (اسپوروفائٹ) مرحلے کے درمیان بدلتا رہتا ہے۔ یہ تمام زمینی پودوں کی خصوصیت ہے۔ سیلاجنیلا، ایک ٹیریڈوفائٹ (فرن کا اتحادی) ہونے کے ناطے، واضح طور پر اس زندگی کے چکر کو ظاہر کرتا ہے۔ مینڈک اور مچھر جیسے جانور میٹامورفوسس سے گزرتے ہیں، نہ کہ نسلوں کے ادل بدل سے۔ الجی کلیمائڈوموناس میں کثیر خلوی ڈپلوئڈ مرحلہ نہیں ہوتا ہے۔"
  },
  {
    "id": "676",
    "text": "The evidences of extinct animals left on earth that are useful in 'Evolution of life' are (APTET 2011)\nزمین پر باقی رہ جانے والے ناپید جانوروں کے ثبوت جو 'زندگی کے ارتقاء' میں مفید ہیں، ہیں",
    "options": [
      "Bones\nہڈیاں",
      "Foot prints\nپاؤں کے نشانات",
      "Fossils\nفوسلز",
      "Fuels\nایندھن"
    ],
    "correct": "Fossils",
    "explanation": "فوسلز ماضی کے ارضیاتی ادوار کے جانداروں کی محفوظ باقیات، نقوش، یا نشانات ہیں۔ وہ ارتقاء کے لیے ثبوت کی سب سے جامع قسم ہیں، جو ناپید زندگی کی شکلوں کا براہ راست ریکارڈ فراہم کرتے ہیں اور وقت کے ساتھ ارتقائی تبدیلیوں کو ظاہر کرتے ہیں۔ جبکہ ہڈیاں اور پاؤں کے نشانات فوسلز کی مخصوص اقسام ہو سکتے ہیں، 'فوسلز' کی اصطلاح ایسے تمام ثبوتوں پر محیط ہے۔"
  },
  {
    "id": "677",
    "text": "Medicine for dog bite was discovered by ......... (APTET 2011)\nکتے کے کاٹنے کی دوا ......... نے دریافت کی تھی",
    "options": [
      "Edward Jenner",
      "Louis Pasteur",
      "Robert Koch",
      "Alexander Fleming"
    ],
    "correct": "Louis Pasteur",
    "explanation": "یہ سوال ریبیز کی روک تھام سے متعلق ہے، جو ایک مہلک وائرس ہے جو ایک متاثرہ جانور، جیسے کتے، کے کاٹنے سے منتقل ہوتا ہے۔ لوئس پاسچر نے 1885 میں ریبیز کے خلاف پہلی مؤثر ویکسین تیار کی۔ ایڈورڈ جینر کو چیچک کی ویکسین کا سہرا دیا جاتا ہے، رابرٹ کوچ کو تپ دق اور ہیضے کی وجوہات کی نشاندہی کرنے کا، اور الیگزینڈر فلیمنگ کو پینسلین کی دریافت کا۔"
  },
  {
    "id": "678",
    "text": "Suppose a student of 8th class complains that he has ear-ache, fever and pain in opening mouth. As a biology teacher, you identify the disease as (APTET 2011)\nفرض کریں آٹھویں جماعت کا ایک طالب علم شکایت کرتا ہے کہ اسے کان میں درد، بخار اور منہ کھولنے میں تکلیف ہے۔ ایک حیاتیات کے استاد کے طور پر، آپ اس بیماری کی شناخت اس طرح کرتے ہیں",
    "options": [
      "Pertusis\nپرٹیوسس",
      "Rubella\nروبیلا",
      "Mumps\nگلسوئے",
      "Malaria\nملیریا"
    ],
    "correct": "Mumps",
    "explanation": "بخار، کان میں درد، اور منہ کھولنے پر درد کا مجموعہ گلسوؤں کی مضبوطی سے نشاندہی کرتا ہے۔ گلسوئے ایک وائرل انفیکشن ہے جو کانوں کے قریب واقع پیروٹڈ لعابی غدود کی تکلیف دہ سوجن کا سبب بنتا ہے۔ یہ سوجن خصوصیت کی تکلیف اور منہ کھولنے میں دشواری کا باعث بنتی ہے۔ پرٹیوسس کالی کھانسی ہے، روبیلا جرمن خسرہ ہے، اور ملیریا میں تیز بخار اور سردی کے چکر شامل ہیں۔"
  },
  {
    "id": "680",
    "text": "The order of stages in tissue culture is (APTET 2011)\nٹشو کلچر میں مراحل کی ترتیب ہے",
    "options": [
      "Explant, Callus, Plant, New Plant.\nایکسپلانٹ، کیلس، پودا، نیا پودا۔",
      "Callus, Plant, New Plant, Explant.\nکیلس، پودا، نیا پودا، ایکسپلانٹ۔",
      "Plant, Explant, Callus, New Plant.\nپودا، ایکسپلانٹ، کیلس، نیا پودا۔",
      "New Plant, Plant, Callus, Explant.\nنیا پودا، پودا، کیلس، ایکسپلانٹ۔"
    ],
    "correct": "Plant, Explant, Callus, New Plant.",
    "explanation": "یہ آپشن واقعات کی مکمل تاریخی ترتیب کو بیان کرتا ہے۔ آپ ایک ماخذ **پودے** سے شروع کرتے ہیں، جس سے ٹشو کا ایک ٹکڑا جسے **ایکسپلانٹ** کہا جاتا ہے، لیا جاتا ہے۔ اس ایکسپلانٹ کو ایک میڈیم پر کلچر کیا جاتا ہے تاکہ خلیوں کا ایک غیر تفریق شدہ ماس جسے **کیلس** کہا جاتا ہے، بن سکے۔ پھر کیلس کو تفریق اور ایک **نئے پودے** میں بڑھنے کے لیے اکسایا جاتا ہے۔"
  },
  {
    "id": "681",
    "text": "In the balanced diet pyramid, as we go up from the base, the fourth place is occupied by (APTET 2011)\nمتوازن غذا کے اہرام میں، جب ہم بنیاد سے اوپر جاتے ہیں، تو چوتھا مقام کس کا ہوتا ہے؟",
    "options": [
      "Vitamins\nوٹامنز",
      "Proteins\nپروٹینز",
      "Fibre\nفائبر",
      "Minerals\nمعدنیات"
    ],
    "correct": "Vitamins",
    "explanation": "یہ سوال ایک مخصوص یا غیر معیاری فوڈ پیرامڈ ماڈل پر مبنی ہے، کیونکہ یہ عام ماڈل سے متصادم ہے جہاں چوتھی (سب سے اوپر کی) سطح پر چکنائی اور شکر ہوتی ہے۔ معیاری پیرامڈ میں، کاربوہائیڈریٹ بنیاد پر (پہلی)، اس کے بعد پھل اور سبزیاں (وٹامنز/معدنیات) (دوسری)، اور پروٹین (تیسری) ہوتی ہیں۔ فراہم کردہ جوابی کلید کی بنیاد پر، 'وٹامنز' کو چوتھے مقام کے لیے درست جواب سمجھا جاتا ہے۔"
  },
  {
    "id": "682",
    "text": "The human dental formula is .... (APTET 2011)\nانسانی دانتوں کا فارمولا .... ہے",
    "options": [
      "1/1, 2/2, 3/3, 2/2",
      "2/2, 1/1, 2/2, 3/3",
      "2/2, 2/2, 3/3, 3/3",
      "1/1, 3/3, 2/2, 2/2"
    ],
    "correct": "2/2, 1/1, 2/2, 3/3",
    "explanation": "دانتوں کا فارمولا جبڑے کے ایک نصف حصے (اوپری/نچلے) میں ہر قسم کے دانتوں کی تعداد کو ظاہر کرتا ہے۔ ترتیب یہ ہے: قواطع (Incisors - I)، انیاب (Canines - C)، ضواحک (Premolars - P)، طواحن (Molars - M)۔ ایک بالغ انسان کے لیے، فارمولا I:2/2, C:1/1, P:2/2, M:3/3 ہے۔ اس کا مطلب ہے کہ ایک طرف، اوپری اور نچلے دونوں جبڑوں میں 2 قواطع، 1 ناب، 2 ضواحک، اور 3 طواحن ہوتے ہیں۔"
  },
  {
    "id": "683",
    "text": "A scientist has selected single celled organisms that can live even in acidic medium like HCl for his experiment. They belong to the Kingdom (APTET 2011)\nایک سائنسدان نے اپنے تجربے کے لیے یک خلوی جانداروں کا انتخاب کیا ہے جو HCl جیسے تیزابی ماحول میں بھی زندہ رہ سکتے ہیں۔ ان کا تعلق کس مملکت سے ہے؟",
    "options": [
      "Animalia\nاینیملیا",
      "Plantae\nپلانٹی",
      "Monera\nمونیرا",
      "Protista\nپروٹسٹا"
    ],
    "correct": "Monera",
    "explanation": "مملکت مونیرا پروکیریوٹک جانداروں جیسے بیکٹیریا اور آرکیا پر مشتمل ہے۔ بہت سے آرکیا ایکسٹریموفائلز (extremophiles) ہوتے ہیں، یعنی وہ انتہائی سخت ماحول میں زندہ رہ سکتے ہیں۔ وہ جاندار جو انتہائی تیزابی حالات میں پروان چڑھتے ہیں انہیں ایسڈوفائلز (acidophiles) کہا جاتا ہے، اور ان کا تعلق اسی مملکت سے ہے۔ اینیملیا اور پلانٹی کثیر خلوی مملکتیں ہیں، اور پروٹسٹا یوکیریوٹس پر مشتمل ہے جو عام طور پر ایسے سخت حالات کو کم برداشت کرتے ہیں۔"
  },
  {
    "id": "684",
    "text": "Most of the disease spreading animals without notochord belong to phylum (APTET 2011)\nبغیر نوٹورڈ کے زیادہ تر بیماری پھیلانے والے جانور کس فائلم سے تعلق رکھتے ہیں؟",
    "options": [
      "Arthropoda\nآرتھروپوڈا",
      "Protozoa\nپروٹوزوا",
      "Nematyhelminthes\nنیماٹی ہیلمنتھیس",
      "Mammalia\nممالیہ"
    ],
    "correct": "Arthropoda",
    "explanation": "سوال میں غیر فقاریہ (بغیر نوٹورڈ کے جانور) کے اس فائلم کے بارے میں پوچھا گیا ہے جو بیماری کے عام ویکٹر (پھیلانے والے) ہیں۔ فائلم آرتھروپوڈا میں حشرات (مچھر، مکھیاں) اور عنکبیات (ٹکس) شامل ہیں، جو ملیریا، ڈینگی، لائم بیماری وغیرہ جیسی بیماریوں کو پھیلانے کے لیے سب سے اہم ویکٹر ہیں۔ پروٹوزوا اور نیماٹی ہیلمنتھیس میں خود بہت سے پیتھوجینز ہوتے ہیں لیکن وہ عام طور پر حیوانی ویکٹر نہیں ہوتے۔ ممالیہ فقاریہ ہیں۔"
  },
  {
    "id": "685",
    "text": "This provides quantitative as well as qualitative description of the outcomes of teaching-learning process. (APTET 2011)\nیہ تدریسی-تعلیمی عمل کے نتائج کی مقداری اور معیاری دونوں طرح کی تفصیل فراہم کرتا ہے۔",
    "options": [
      "Testing\nجانچ",
      "Measurement\nپیمائش",
      "Evaluation\nتشخیص",
      "Examination\nامتحان"
    ],
    "correct": "Evaluation",
    "explanation": "تعلیمی اصطلاحات میں، تشخیص سب سے وسیع تصور ہے۔ یہ ایک منظم عمل ہے جس میں سیکھنے کے عمل کی مجموعی قدر یا اہمیت کا فیصلہ کرنے کے لیے مقداری (عددی) ڈیٹا جو پیمائش سے حاصل ہوتا ہے (جیسے ٹیسٹ کے اسکور) اور معیاری (تفصیلی) ڈیٹا (جیسے مشاہدات یا پورٹ فولیو کا جائزہ) دونوں شامل ہوتے ہیں۔ جانچ اور امتحان پیمائش کے اوزار ہیں، جو تشخیص کا صرف ایک حصہ ہے۔"
  },
  {
    "id": "686",
    "text": "In Bloom's Taxonomy of Educational Objectives, the specification 'Translation' belongs to the objective (APTET 2011)\nبلوم کی تعلیمی مقاصد کی درجہ بندی میں، 'ترجمہ' کی تخصیص کس مقصد سے تعلق رکھتی ہے؟",
    "options": [
      "Application\nاطلاق",
      "Analysis\nتجزیہ",
      "Synthesis\nترکیب",
      "Comprehension\nتفہیم"
    ],
    "correct": "Comprehension",
    "explanation": "بلوم کی اصل درجہ بندی میں، تفہیم مواد کے معنی کو سمجھنے کی صلاحیت ہے۔ اس سطح میں ایسے طرز عمل شامل ہیں جیسے مواد کو ایک شکل سے دوسری شکل میں ترجمہ کرنا (مثلاً، الفاظ سے اعداد میں)، مواد کی تشریح کرنا (وضاحت کرنا یا خلاصہ کرنا)، اور مستقبل کے رجحانات کا اندازہ لگانا (ایکسٹراپولیشن)۔ لہٰذا، 'ترجمہ' تفہیم کے مقصد کے اندر ایک کلیدی تخصیص ہے۔"
  },
  {
    "id": "687",
    "text": "The information that need not be given in a laboratory instruction card is (APTET 2011)\nوہ معلومات جو لیبارٹری کے ہدایت نامے میں دینے کی ضرورت نہیں ہے، وہ ہے",
    "options": [
      "who has to do the experiment.\nتجربہ کس کو کرنا ہے۔",
      "the purpose of the equipment.\nسامان کا مقصد۔",
      "the method to be adopted.\nاختیار کیا جانے والا طریقہ۔",
      "precautions to be observed.\nاحتیاطی تدابیر جن پر عمل کیا جانا ہے۔"
    ],
    "correct": "who has to do the experiment.",
    "explanation": "لیبارٹری کا ہدایت نامہ خود طریقہ کار کے لیے ایک رہنما ہے اور اس کا مقصد تجربہ کرنے والے کسی بھی طالب علم کے استعمال کے لیے ہوتا ہے۔ اس میں ہمیشہ مقصد (یا ہدف)، طریقہ کار، اور حفاظتی احتیاطی تدابیر شامل ہونی چاہئیں۔ اس میں اس کام کے لیے تفویض کردہ انفرادی طالب علم کا نام بتانے کی ضرورت نہیں ہوتی۔"
  },
  {
    "id": "688",
    "text": "In Edger Dale's cone of experiences, the learning experiences are arranged in the order of (taking the start point from the base of the cone) (APTET 2011)\nایڈگر ڈیل کے تجربات کے مخروط میں، سیکھنے کے تجربات کو کس ترتیب میں ترتیب دیا گیا ہے (مخروط کی بنیاد سے شروع کرتے ہوئے)؟",
    "options": [
      "decreasing abstractness.\nتجریدیت میں کمی۔",
      "increasing abstractness.\nتجریدیت میں اضافہ۔",
      "increasing expenditure.\nاخراجات میں اضافہ۔",
      "increasing concreteness.\nٹھوس پن میں اضافہ۔"
    ],
    "correct": "increasing abstractness.",
    "explanation": "ایڈگر ڈیل کا تجربات کا مخروط سیکھنے کی سرگرمیوں کو ان کے ٹھوس پن کی بنیاد پر ایک درجہ بندی میں ترتیب دیتا ہے۔ مخروط کی بنیاد سب سے ٹھوس تجربات پر مشتمل ہوتی ہے (مثلاً، براہ راست، بامقصد کام کرنا)۔ جیسے جیسے کوئی مخروط میں اوپر کی طرف بڑھتا ہے، تجربات بتدریج زیادہ تجریدی ہوتے جاتے ہیں، جو چوٹی پر زبانی علامات (پڑھنے) پر ختم ہوتے ہیں۔ لہٰذا، بنیاد سے شروع ہو کر اوپر کی طرف جاتے ہوئے، ترتیب میں تجریدیت میں اضافہ ہوتا ہے۔"
  },
  {
    "id": "689",
    "text": "The method of teaching that makes the students to look at knowledge as a whole is (APTET 2011)\nوہ تدریسی طریقہ جو طلباء کو علم کو بحیثیت مجموعی دیکھنے پر مجبور کرتا ہے، وہ ہے",
    "options": [
      "Project method\nپروجیکٹ کا طریقہ",
      "Lecture method\nلیکچر کا طریقہ",
      "Demonstration method\nمظاہرے کا طریقہ",
      "Discussion method\nبحث کا طریقہ"
    ],
    "correct": "Lecture method",
    "explanation": "اگرچہ جدید تدریسیات اکثر جامع تعلیم کو پروجیکٹ میتھڈ جیسے طریقوں سے جوڑتی ہے، لیکن اس سوال کی کلید لیکچر میتھڈ کی نشاندہی کرتی ہے۔ اس کی وجہ یہ ہو سکتی ہے کہ ایک اچھی طرح سے منظم لیکچر کسی موضوع کا ایک جامع، منظم جائزہ فراہم کر سکتا ہے، اور علم کو چھوٹے اجزاء میں توڑنے سے پہلے اسے ایک مربوط کل یا مکمل فریم ورک کے طور پر پیش کر سکتا ہے۔"
  },
  {
    "id": "690",
    "text": "An ancient, convenient and inexpensive method of teaching that is suitable for teaching almost all the subjects of school curriculum is (APTET 2011)\nایک قدیم، آسان اور سستا تدریسی طریقہ جو اسکول کے نصاب کے تقریباً تمام مضامین پڑھانے کے لیے موزوں ہے، وہ ہے",
    "options": [
      "Lecture method\nلیکچر کا طریقہ",
      "Demonstration method\nمظاہرے کا طریقہ",
      "Source method\nماخذ کا طریقہ",
      "Story-telling method\nکہانی سنانے کا طریقہ"
    ],
    "correct": "Lecture method",
    "explanation": "لیکچر کا طریقہ ایک روایتی اور پائیدار تدریسی تکنیک ہے۔ اسے انتہائی آسان اور سستا سمجھا جاتا ہے کیونکہ اس کے لیے استاد کی مہارت کے علاوہ بہت کم وسائل درکار ہوتے ہیں اور اسے بڑے سامعین تک پہنچایا جا سکتا ہے۔ اس کی ہمہ گیریت اسے اسکول کے نصاب میں تقریباً کسی بھی مضمون میں بنیادی علم سکھانے کے لیے ڈھالنے کی اجازت دیتی ہے، جو اسے ایک عملی اور وسیع پیمانے پر استعمال ہونے والا طریقہ بناتی ہے۔"
  }
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