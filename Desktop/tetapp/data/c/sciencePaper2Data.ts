type SciencePaper2RawQuestion = {
  id: number | string;
  text: string;
  options: string[];
  correct: string;
  explanation: string;
};

const rawSciencePaper2Data: SciencePaper2RawQuestion[] = 
[
  {
    "id": "1",
    "text": "Asteroids are found in between the orbits of (TSTET 22 May 2024)",
    "options": [
      "Mars and Jupiter",
      "Earth and Mars",
      "Saturn and Jupiter",
      "Saturn and Uranus"
    ],
    "correct": "Mars and Jupiter",
    "explanation": "The main asteroid belt is a region in our Solar System located between the orbits of Mars and Jupiter. It contains millions of asteroids, which are rocky bodies that are much smaller than planets. This belt is where the vast majority of asteroids are found."
  },
  {
    "id": "2",
    "text": "To find out the relative density of an object, we usually compare its density with (TSTET 22 May 2024)",
    "options": [
      "Water density",
      "Object density",
      "Kerosine density",
      "Air density"
    ],
    "correct": "Water density",
    "explanation": "Relative density, also known as specific gravity, is a dimensionless quantity that is the ratio of the density of a substance to the density of a standard reference material. For liquids and solids, the standard reference is almost always pure water at its maximum density, which occurs at 4°C."
  },
  {
    "id": "3",
    "text": "Read the following statements and choose the correct answer. Statement I: When we reduce the angle between two plane mirrors, the number of images of the object between them increases. Statement II: In a rearview mirror, we get diminished image of the object. (TSTET 22 May 2024)",
    "options": [
      "Statement I is true, Statement II is false",
      "Statement I is false. Statement II is true",
      "Both Statement I and Statement II are true",
      "Both Statement I and Statement II are false"
    ],
    "correct": "Both Statement I and Statement II are true",
    "explanation": "Statement I is true because the number of images formed by two plane mirrors is calculated by the formula n = (360°/θ) - 1. As the angle (θ) decreases, the value of the fraction increases, resulting in more images. Statement II is also true because rearview mirrors are convex mirrors, which always produce a virtual, erect, and diminished (smaller) image. This design provides a wider field of view."
  },
  {
    "id": "4",
    "text": "A person travelled in a bus for 15 hours. Initial reading in the odometer was 1891 before starting the journey and after reaching the destination the reading shown as 2881. Then his average speed (TSTET 22 May 2024)",
    "options": [
      "266 Km/h",
      "313.5 Km/h",
      "33 Km/h",
      "66 Km/h"
    ],
    "correct": "66 Km/h",
    "explanation": "To find the average speed, first calculate the total distance traveled: Final Reading - Initial Reading = 2881 km - 1891 km = 990 km. Then, divide the total distance by the total time taken: Average Speed = Total Distance / Total Time = 990 km / 15 hours = 66 km/h."
  },
  {
    "id": "5",
    "text": "In an electric circuit, an MCB is to be connected in (TSTET 22 May 2024)",
    "options": [
      "Series only",
      "Parallel only",
      "Combination of Series and Parallel",
      "Neither Series nor Parallel"
    ],
    "correct": "Series only",
    "explanation": "An MCB (Miniature Circuit Breaker) is a safety device designed to interrupt the flow of electricity in case of an overload or short circuit. To protect the entire circuit, it must be connected in series with the live wire, so that when it trips, it breaks the connection for all appliances on that circuit."
  },
  {
    "id": "6",
    "text": "Blister copper is refined in this method (TSTET 22 May 2024)",
    "options": [
      "Distillation",
      "Poling",
      "Liquation",
      "Electrolytic refining"
    ],
    "correct": "Poling",
    "explanation": "Blister copper, which is about 98-99% pure, contains cuprous oxide ($Cu_2O$) as a major impurity. This impurity is removed by the process of poling. In this method, molten blister copper is stirred with logs of green wood. The hydrocarbons released from the wood reduce the cuprous oxide to pure copper."
  },
  {
    "id": "7",
    "text": "The machine used commercially for separating the cream from milk (TSTET 22 May 2024)",
    "options": [
      "Atwood machine",
      "Flotation machine",
      "Centrifuge",
      "Sieving machine"
    ],
    "correct": "Centrifuge",
    "explanation": "A centrifuge is used to separate cream from milk. This machine spins the milk at a very high speed. The principle of centrifugation separates components based on their density. Since cream (fat) is less dense than the rest of the milk, it collects in the center of the spinning container and can be easily removed."
  },
  {
    "id": "8",
    "text": "The 'p' in pH stands for (TSTET 22 May 2024)",
    "options": [
      "Pascal",
      "Pressure",
      "Potenz",
      "Pure"
    ],
    "correct": "Potenz",
    "explanation": "The 'p' in pH stands for the German word 'Potenz,' which translates to 'power' or 'potential.' The 'H' stands for the element hydrogen. Thus, pH is a measure of the 'potential of Hydrogen' and represents the concentration of hydrogen ions in a solution."
  },
  {
    "id": "9",
    "text": "$CuO_{(s)}+H_{2(g)}\\xrightarrow{Heat}Cu_{(s)}+H_{2}O_{(l)}$ is a/an (TSTET 22 May 2024)",
    "options": [
      "Oxidation reaction",
      "Reduction reaction",
      "Precipitation reaction",
      "Neutralization reaction"
    ],
    "correct": "Reduction reaction",
    "explanation": "This is a redox reaction where both reduction and oxidation occur. Copper(II) oxide ($CuO$) loses oxygen to become copper ($Cu$), so $CuO$ is reduced. Hydrogen ($H_2$) gains oxygen to become water ($H_2O$), so $H_2$ is oxidized. The question likely focuses on the transformation of the main reactant, copper oxide, which undergoes reduction."
  },
  {
    "id": "10",
    "text": "Which model proposed that 'The mass of the atom is considered to be uniformly distributed throughout the atom'? (TSTET 22 May 2024)",
    "options": [
      "Quantum mechanical model of atom",
      "Nuclear model of atom",
      "Planetary model of atom",
      "Plum pudding model of atom"
    ],
    "correct": "Plum pudding model of atom",
    "explanation": "J.J. Thomson's Plum Pudding Model (1904) was the first to suggest a specific internal structure for the atom. It proposed that the atom was a sphere of uniformly distributed positive charge, with negatively charged electrons embedded within it, like plums in a pudding. This model was later superseded by Rutherford's nuclear model."
  },
  {
    "id": "11",
    "text": "According to which principle 'No two electrons of the same atom can have all four quantum numbers the same' (TSTET 22 May 2024)",
    "options": [
      "Aufbau principle",
      "Pauli's Exclusion principle",
      "Hund's rule",
      "Quantum rule"
    ],
    "correct": "Pauli's Exclusion principle",
    "explanation": "The Pauli Exclusion Principle is a fundamental concept in quantum mechanics. It states that two or more identical fermions (particles like electrons) cannot occupy the same quantum state within a quantum system simultaneously. In the context of an atom, this means no two electrons can have the identical set of four quantum numbers (n, l, $m_l$, $m_s$)."
  },
  {
    "id": "12",
    "text": "1 Angstrom = (TSTET 22 May 2024)",
    "options": [
      "1 nm",
      "10 nm",
      "0.01 nm",
      "0.1 nm"
    ],
    "correct": "0.1 nm",
    "explanation": "An Angstrom (Å) is a unit of length equal to $10^{-10}$ meters. A nanometer (nm) is equal to $10^{-9}$ meters. Since a nanometer is ten times larger than an angstrom, it follows that 1 Å is equal to 0.1 nm."
  },
  {
    "id": "13",
    "text": "These cells are present in highest in number in blood (TSTET 22 May 2024)",
    "options": [
      "Erythrocytes",
      "Monocytes",
      "Granulocytes",
      "Lymphocytes"
    ],
    "correct": "Erythrocytes",
    "explanation": "Erythrocytes, or red blood cells (RBCs), are the most abundant type of cell in the blood. Their primary function is to transport oxygen. There are about 4 to 6 million RBCs per microliter of blood, far outnumbering all types of white blood cells (leukocytes like monocytes, granulocytes, and lymphocytes) combined."
  },
  {
    "id": "14",
    "text": "Identify the female sexual part of a flower (TSTET 22 May 2024)",
    "options": [
      "Stamen",
      "Pistil",
      "Anther",
      "Stigma"
    ],
    "correct": "Pistil",
    "explanation": "The pistil is the complete female reproductive organ of a flower. It typically consists of three parts: the stigma (receives pollen), the style (the stalk), and the ovary (contains ovules). The stamen is the male part, while the anther and stigma are individual components of the male and female parts, respectively."
  },
  {
    "id": "15",
    "text": "'Adam's apple' is formed due to elongation of (TSTET 22 May 2024)",
    "options": [
      "Thyroid gland",
      "Thyroid cartilage",
      "Vocal cords",
      "Epiglottis"
    ],
    "correct": "Thyroid cartilage",
    "explanation": "The Adam's apple is the lump or protrusion in the front of the neck that is formed by the angle of the thyroid cartilage surrounding the larynx (voice box). It becomes more prominent in males during puberty due to the influence of testosterone."
  },
  {
    "id": "16",
    "text": "The way how new species are formed is known as (TSTET 22 May 2024)",
    "options": [
      "Micro evolution",
      "Genetic mutation",
      "Speciation",
      "Natural selection"
    ],
    "correct": "Speciation",
    "explanation": "Speciation is the evolutionary process by which new biological species arise. It occurs when a group within a species separates from other members of its species and develops its own unique characteristics. Genetic mutation and natural selection are mechanisms that can drive this process, but 'speciation' is the specific term for the formation of a new species."
  },
  {
    "id": "17",
    "text": "In some plants, ovary in flowers directly develops into fruit without the process of fertilisation. This phenomenon is known as (TSTET 22 May 2024)",
    "options": [
      "Parthenogenesis",
      "Fission",
      "Regeneration",
      "Parthenocarpy"
    ],
    "correct": "Parthenocarpy",
    "explanation": "Parthenocarpy is the development of fruit without prior fertilization. This process results in seedless fruits. A classic example is the banana. Parthenogenesis, on the other hand, is a form of asexual reproduction where an embryo develops from an unfertilized egg, which is common in some insects and reptiles."
  },
  {
    "id": "18",
    "text": "For the growth and repair of our body, we need (TSTET 22 May 2024)",
    "options": [
      "Proteins",
      "Vitamins",
      "Carbohydrates",
      "Minerals"
    ],
    "correct": "Proteins",
    "explanation": "Proteins are essential macronutrients that function as the 'building blocks' of the body. They are crucial for building and repairing tissues, making enzymes and hormones, and supporting overall growth. While carbohydrates provide energy, and vitamins and minerals support various functions, proteins are primary for structural growth and repair."
  },
  {
    "id": "19",
    "text": "Identify the symptom of the deficiency disease 'Rickets' (TSTET 22 May 2024)",
    "options": [
      "Weak muscles and little energy to work",
      "Swelling of glands in neck",
      "Bones become soft and bent",
      "Bleeding gums and wounds take longer time to heal"
    ],
    "correct": "Bones become soft and bent",
    "explanation": "Rickets is a condition in children caused by a deficiency in vitamin D, calcium, or phosphate. This deficiency leads to weak and soft bones, which can result in skeletal deformities such as bowed legs and a curved spine. Bleeding gums are a sign of scurvy (vitamin C deficiency), and swelling of glands in the neck is a symptom of goiter (iodine deficiency)."
  },
  {
    "id": "20",
    "text": "This type of fluorosis occurs only in poorly nourished children whose diet is low in calcium (TSTET 22 May 2024)",
    "options": [
      "Dental Fluorosis",
      "Genu Valgum",
      "Neurological Fluorosis",
      "Skeletal Fluorosis"
    ],
    "correct": "Genu Valgum",
    "explanation": "Genu valgum, or 'knock-knees', is a severe manifestation of skeletal fluorosis, especially in regions with high fluoride levels in drinking water. It is particularly prevalent in children who are malnourished and have a low-calcium diet, as calcium deficiency exacerbates the harmful effects of excess fluoride on bone development."
  },
  {
    "id": "21",
    "text": "The number of mitotic divisions are required for formation of 128 daughter cells from a single mother cell (TSTET 22 May 2024)",
    "options": [
      "2",
      "64",
      "127",
      "7"
    ],
    "correct": "7",
    "explanation": "Mitosis results in one cell dividing into two identical daughter cells. The number of cells produced follows an exponential pattern: $2^n$, where 'n' is the number of divisions. To find the number of divisions needed to get 128 cells, we need to solve the equation $2^n = 128$. Since $2^7 = 128$, seven mitotic divisions are required."
  },
  {
    "id": "22",
    "text": "Japanese encephalitis is caused by (TSTET 22 May 2024)",
    "options": [
      "Mosquito bite",
      "Housefly",
      "Cockroach",
      "Amoeba"
    ],
    "correct": "Mosquito bite",
    "explanation": "Japanese encephalitis is a viral disease transmitted to humans through the bite of infected mosquitoes, primarily those of the Culex species. The virus circulates between mosquitoes and vertebrate hosts like pigs and wading birds, and humans can become infected when bitten by a carrier mosquito."
  },
  {
    "id": "23",
    "text": "The change of state from liquid to gas is called (TSTET 22 May 2024)",
    "options": [
      "Perspiration",
      "Respiration",
      "Evaporation",
      "Condensation"
    ],
    "correct": "Evaporation",
    "explanation": "Evaporation is the process where a liquid turns into a gas or vapor. This is a physical change of state. Condensation is the opposite process (gas to liquid). Respiration is a biological process for energy release, and perspiration is the excretion of sweat."
  },
  {
    "id": "24",
    "text": "The world's first synthetic microfiber was invented by the Toray Industries Scientist Dr. Miyoshi Okamoto in the year (TSTET 22 May 2024)",
    "options": [
      "1890",
      "1970",
      "1966",
      "1980"
    ],
    "correct": "1970",
    "explanation": "Dr. Miyoshi Okamoto, a scientist working at the Japanese company Toray Industries, is credited with inventing the first microfiber in 1970. His invention paved the way for the creation of materials like Ultrasuede."
  },
  {
    "id": "25",
    "text": "Among the following Indian scientists who described the methods of distillation, extraction, sublimation and the equipment required for them in his book 'Rasarnavam' (TSTET 22 May 2024)",
    "options": [
      "Nagarjuna",
      "Aryabhatta",
      "Bhaskaracharya",
      "J.C. Bose"
    ],
    "correct": "Nagarjuna",
    "explanation": "Nagarjuna was a prominent ancient Indian alchemist and metallurgist. His work, 'Rasarnavam', is a significant text that details various alchemical procedures, including methods like distillation, sublimation, and extraction, and also describes the different types of apparatus needed for these processes."
  },
  {
    "id": "26",
    "text": "The curriculum must carry significant and correct scientific information. This is (TSTET 22 May 2024)",
    "options": [
      "Cognitive validity",
      "Historical validity",
      "Content validity",
      "Environmental validity"
    ],
    "correct": "Content validity",
    "explanation": "Content validity ensures that a curriculum or test covers all relevant parts of the subject it aims to measure. The requirement for a curriculum to contain 'significant and correct scientific information' is a direct reflection of ensuring its content is valid, accurate, and comprehensive for the subject matter."
  },
  {
    "id": "27",
    "text": "Which of the following belongs to the academic standard 'Conceptual understanding' (TSTET 22 May 2024)",
    "options": [
      "Asking questions",
      "Explaining",
      "Hypothesizing",
      "Collecting information"
    ],
    "correct": "Explaining",
    "explanation": "Conceptual understanding refers to the ability to comprehend concepts, operations, and relations. The act of 'explaining' something in one's own words, providing examples, or classifying information demonstrates a deep level of conceptual understanding. The other options are more aligned with the process of scientific inquiry."
  },
  {
    "id": "28",
    "text": "Identify the wrongly paired teaching learning method and example (TSTET 22 May 2024)",
    "options": [
      "Inductive approach = Doctors wear stethoscope around their neck, Siraj is wearing a stethoscope around his neck, Siraj is a doctor",
      "Deductive approach = All gases are compressible, Hydrogen is a gas, Hydrogen is compressible",
      "Lecture cum demonstration = Explanation of the concept of conductivity of heat using a Bunsen burner",
      "Project method = Collect the leaves in your immediate environment and observe their features"
    ],
    "correct": "Inductive approach = Doctors wear stethoscope around their neck, Siraj is wearing a stethoscope around his neck, Siraj is a doctor",
    "explanation": "The example given for the inductive approach is incorrect. Inductive reasoning moves from specific observations to a general conclusion. The example provided is a form of flawed deductive reasoning (applying a general rule to a specific case). A correct inductive example would be observing many individual doctors wearing stethoscopes and then generalizing that 'doctors wear stethoscopes.' The other pairs correctly match the method with an appropriate example."
  },
  {
    "id": "29",
    "text": "The approach to curriculum in which the content of topic selected will be explained in detail in the same class (TSTET 22 May 2024)",
    "options": [
      "Concentric approach",
      "Topical approach",
      "Psychological approach",
      "Logical approach"
    ],
    "correct": "Topical approach",
    "explanation": "The topical approach organizes the curriculum around specific topics or themes. Each topic is studied in depth and completed as a distinct unit before moving to the next one. This is different from the concentric or spiral approach, where concepts are revisited at different grade levels with increasing complexity."
  },
  {
    "id": "30",
    "text": "Which one of the following is an audio-visual aid? (TSTET 22 May 2024)",
    "options": [
      "Radio",
      "Model",
      "Television",
      "Chart"
    ],
    "correct": "Television",
    "explanation": "An audio-visual aid is a teaching tool that utilizes both sight and sound to enhance learning. Television presents both moving images (visual) and sound (audio), making it a prime example of an audio-visual aid. A radio is only audio, while models and charts are purely visual aids."
  },
  {
    "id": "31",
    "text": "Which is NOT an application of artificial satellites among the following? (TSTET 22 May 2024)",
    "options": [
      "Remote sensing",
      "Weather forecasting",
      "Telecommunication",
      "Space Travel"
    ],
    "correct": "Space Travel",
    "explanation": "Artificial satellites are primarily used for applications like remote sensing (gathering data about the Earth from a distance), weather forecasting, and telecommunication (relaying signals for TV, internet, and phones). Space travel, which involves transporting humans or probes into space, is a different field of astronautics and is not a direct application or function of an artificial satellite, although satellites are used for communication during space missions."
  },
  {
    "id": "32",
    "text": "Bramah Press works based on the principle of (TSTET 22 May 2024)",
    "options": [
      "Archimedes",
      "Dalton",
      "Pascal",
      "Torecelli"
    ],
    "correct": "Pascal",
    "explanation": "The Bramah Press is a type of hydraulic press that operates on **Pascal's principle**. This principle states that a pressure change applied to an enclosed, incompressible fluid is transmitted undiminished to every portion of the fluid and the walls of the containing vessel. This allows a small force applied to a small piston to generate a much larger force on a larger piston."
  },
  {
    "id": "33",
    "text": "Among the following, the regions where the density as well as pressure are high are (TSTET 22 May 2024)",
    "options": [
      "Compressions",
      "Rarefactions",
      "Crests",
      "Troughs"
    ],
    "correct": "Compressions",
    "explanation": "In a longitudinal wave, such as a sound wave, a **compression** is a region where the particles of the medium are crowded together, resulting in high particle density and high pressure. A rarefaction is the opposite, a region of low density and pressure. Crests and troughs are features of transverse waves."
  },
  {
    "id": "34",
    "text": "Identify the Nuclear fusion reaction among the following. (TSTET 22 May 2024)",
    "options": [
      "${}_{1}^{2}H+\\frac{2}{1}H\\rightarrow{}_{2}^{3}He+{}_{0}^{1}n+energy$",
      "${}_{92}^{235}U+{}_{0}^{1}n\\rightarrow{}_{56}^{139}Ba+{}_{36}^{94}Ba+3{}_{0}^{1}n+energy$",
      "${}_{1}^{2}H+{}_{1}^{2}H\\rightarrow{}_{2}^{4}He$",
      "${}_{1}^{3}H+{}_{1}^{2}H\\rightarrow{}_{2}^{4}He+{}_{0}^{1}n+energy$"
    ],
    "correct": "${}_{1}^{3}H+{}_{1}^{2}H\\rightarrow{}_{2}^{4}He+{}_{0}^{1}n+energy$",
    "explanation": "**Nuclear fusion** is a process where two light atomic nuclei combine to form a single heavier nucleus, releasing a large amount of energy. The correct option shows two isotopes of hydrogen (Tritium, ${}_{1}^{3}H$, and Deuterium, ${}_{1}^{2}H$) fusing to form a helium nucleus (${}_{2}^{4}He$) and a neutron (${}_{0}^{1}n$). The reaction involving Uranium (${}_{92}^{235}U$) is an example of nuclear fission, where a heavy nucleus splits apart."
  },
  {
    "id": "35",
    "text": "Ohm's law is valid for which of the following? (TSTET 22 May 2024)",
    "options": [
      "metal conductors",
      "gaseous conductors",
      "semiconductors",
      "non-conductors"
    ],
    "correct": "metal conductors",
    "explanation": "Ohm's law, which states that voltage is directly proportional to current ($V=IR$) at a constant temperature, is primarily valid for ohmic materials. Most **metal conductors** behave as ohmic materials over a wide range of voltages and currents. Gaseous conductors and semiconductors are non-ohmic, meaning their resistance changes with voltage or current, so Ohm's law does not apply to them."
  },
  {
    "id": "36",
    "text": "During calcinations, (TSTET 22 May 2024)",
    "options": [
      "Oxide is converted to its carbonate",
      "Carbonate is converted to its oxide",
      "Carbonate is converted to its hydride",
      "Oxide is converted to its hydride"
    ],
    "correct": "Carbonate is converted to its oxide",
    "explanation": "**Calcination** is a metallurgical process of heating an ore to a high temperature in the absence of or with a limited supply of air. Its main purpose is to remove volatile impurities. For carbonate ores, calcination drives off carbon dioxide, converting the metal **carbonate into its corresponding metal oxide**. For example: $CaCO_3(s) \\rightarrow CaO(s) + CO_2(g)$."
  },
  {
    "id": "37",
    "text": "Identify the correct pair of thermo plastic and thermosetting plastic respectively (TSTET 22 May 2024)",
    "options": [
      "TV cabinet, Tooth brush handle",
      "Electric switch, piece of bucket",
      "Comb, Computer key board",
      "Coffee Mug, Meals plate"
    ],
    "correct": "Comb, Computer key board",
    "explanation": "The question asks for a pair of (thermoplastic, thermosetting plastic). **Thermoplastics** can be remelted and reshaped (e.g., a comb made of polypropylene). **Thermosetting plastics** cure into a permanent shape and cannot be remelted (e.g., bakelite in electric switches). While most keyboard plastics (like ABS) are thermoplastic, making this option somewhat ambiguous, the other options are clearly incorrect in their order. For example, an electric switch (thermosetting) and a bucket piece (thermoplastic) are in the reverse order."
  },
  {
    "id": "38",
    "text": "The lowest temperature at which a substance catches fire is called its (TSTET 22 May 2024)",
    "options": [
      "Initial temperature",
      "Ignition temperature",
      "Abnormal temperature",
      "Normal temperature"
    ],
    "correct": "Ignition temperature",
    "explanation": "The **ignition temperature** of a substance is the minimum temperature required to initiate or cause self-sustained combustion without an external source of ignition like a spark or flame. It is a critical property related to fire safety."
  },
  {
    "id": "39",
    "text": "An enzyme that causes the surface of an apple to change colour when it is cut (TSTET 22 May 2024)",
    "options": [
      "Hydrolase",
      "Isomerase",
      "Amylase",
      "Tyrosinase"
    ],
    "correct": "Tyrosinase",
    "explanation": "The browning of a cut apple is an enzymatic reaction. When the apple's cells are damaged, an enzyme called polyphenol oxidase (also known as **Tyrosinase**) is released. In the presence of oxygen, this enzyme oxidizes phenolic compounds in the apple tissue, leading to the formation of brown-colored pigments."
  },
  {
    "id": "40",
    "text": "Convert 20 g of Oxygen gas ($O_2$) into mole (TSTET 22 May 2024)",
    "options": [
      "1.25 moles",
      "0.625 moles",
      "0.75 moles",
      "0.375 moles"
    ],
    "correct": "0.625 moles",
    "explanation": "To convert mass to moles, we use the formula: Moles = Mass / Molar Mass. The atomic mass of Oxygen (O) is approximately 16 g/mol. Since oxygen gas is a diatomic molecule ($O_2$), its molar mass is $2 \\times 16 = 32$ g/mol. Therefore, the number of moles is $20 \\text{ g} / 32 \\text{ g/mol} = 0.625$ moles."
  },
  {
    "id": "41",
    "text": "Identify the correct statement among the following (TSTET 22 May 2024)",
    "options": [
      "Electro positivity decreases from left to right in groups.",
      "Non-metallic nature increases from top to bottom in groups.",
      "Metallic nature increases from top to bottom in groups.",
      "Electronegativity increases from left to right in groups."
    ],
    "correct": "Metallic nature increases from top to bottom in groups.",
    "explanation": "In the periodic table, as you move from top to bottom within a group, the number of electron shells increases. This increases the atomic radius and the shielding effect, making it easier for the atom to lose its outermost electron. This tendency to lose electrons is the definition of metallic character. Therefore, **metallic nature increases from top to bottom in groups**."
  },
  {
    "id": "42",
    "text": "The shape of $NH_3$ molecule is (TSTET 22 May 2024)",
    "options": [
      "Tetrahedral",
      "Linear",
      "Trigonal planar",
      "Trigonal pyramidal"
    ],
    "correct": "Trigonal pyramidal",
    "explanation": "In the ammonia ($NH_3$) molecule, the central Nitrogen atom forms three single bonds with three Hydrogen atoms and has one lone pair of electrons. According to VSEPR theory, the four electron pairs (3 bonding, 1 lone) create a tetrahedral electron geometry. However, the molecular shape is defined by the arrangement of atoms only. The lone pair repels the bonding pairs more strongly, pushing the hydrogen atoms down into a **trigonal pyramidal** shape."
  },
  {
    "id": "43",
    "text": "When a child is in mother's womb, RBC are formed in (TSTET 22 May 2024)",
    "options": [
      "Bone marrow of long bones",
      "Liver only",
      "Heart",
      "Liver and Spleen"
    ],
    "correct": "Liver and Spleen",
    "explanation": "In the fetus, the primary sites for hematopoiesis (the formation of blood cells, including red blood cells or RBCs) are the **liver and spleen**. The bone marrow gradually takes over this function later in fetal development and is the primary site of RBC production after birth."
  },
  {
    "id": "44",
    "text": "Seed dispersal of this plant / tree is NOT through wind (TSTET 22 May 2024)",
    "options": [
      "Guava",
      "Milkweed",
      "Dandelion",
      "Tridax"
    ],
    "correct": "Guava",
    "explanation": "**Guava** has a fleshy fruit with numerous seeds, which is adapted for dispersal by animals (zoochochory). Birds and mammals eat the fruit and excrete the seeds elsewhere. Milkweed, Dandelion, and Tridax all produce seeds with light, feathery structures (pappus) that are easily carried by the wind (anemochory)."
  },
  {
    "id": "45",
    "text": "Identify the endocrine gland from the following (TSTET 22 May 2024)",
    "options": [
      "Mammary glands",
      "Liver",
      "Adrenal gland",
      "Sebaceous glands"
    ],
    "correct": "Adrenal gland",
    "explanation": "**Endocrine glands** are ductless glands that secrete hormones directly into the bloodstream. The **adrenal gland** is a key endocrine gland. The other options are exocrine glands: Mammary glands (secrete milk), the Liver (secretes bile into ducts), and Sebaceous glands (secrete oil) all release their products through ducts."
  },
  {
    "id": "46",
    "text": "The tiny cellular bubble like structures in the ovaries of female reproductive system, where ova are developed (TSTET 22 May 2024)",
    "options": [
      "Fallopian tubes",
      "Graafian follicles",
      "Endometrium",
      "Oviduct"
    ],
    "correct": "Graafian follicles",
    "explanation": "**Graafian follicles** (or ovarian follicles) are the fundamental units of the female reproductive system. They are small, fluid-filled sacs located in the ovaries, and each one contains an immature egg (oocyte). As a follicle matures, the egg inside develops, and it is from a mature Graafian follicle that the egg is released during ovulation."
  },
  {
    "id": "47",
    "text": "The process of development of young organisms directly from unfertilized gamates is known as (TSTET 22 May 2024)",
    "options": [
      "Partheno Carpy",
      "Budding",
      "Regeneration",
      "Parthenogenesis"
    ],
    "correct": "Parthenogenesis",
    "explanation": "**Parthenogenesis** is a natural form of asexual reproduction in which an embryo develops from an unfertilized ovum (egg cell). This process occurs in some species of insects, reptiles, and fish. Parthenocarpy, in contrast, is the development of fruit without fertilization, leading to seedless fruits."
  },
  {
    "id": "48",
    "text": "Bone is a connective tissue. Two bones can also be connected to each other by another connective tissue called (TSTET 22 May 2024)",
    "options": [
      "Cartilage",
      "Ligament",
      "Muscles",
      "Plasma"
    ],
    "correct": "Ligament",
    "explanation": "A **ligament** is a tough, fibrous band of connective tissue that connects bone to bone, serving to hold structures together and keep them stable. Tendons connect muscle to bone, while cartilage provides cushioning between bones at the joints."
  },
  {
    "id": "49",
    "text": "The temperature maintained by our stomach is (TSTET 22 May 2024)",
    "options": [
      "37°C",
      "40°C",
      "30°C",
      "25°C"
    ],
    "correct": "37°C",
    "explanation": "The human body's core internal temperature is tightly regulated to be around **37°C (98.6°F)**. The stomach, being an internal organ, maintains this temperature, which is optimal for the functioning of its digestive enzymes, such as pepsin."
  },
  {
    "id": "50",
    "text": "Endemic Skeletal Fluorosis was identified in this district of Telangana (TSTET 22 May 2024)",
    "options": [
      "Warangal",
      "Hyderabad",
      "Nalgonda",
      "Adilabad"
    ],
    "correct": "Nalgonda",
    "explanation": "The **Nalgonda** district of Telangana was historically known for a severe public health crisis caused by high concentrations of fluoride in the drinking water. This led to a widespread prevalence of endemic skeletal fluorosis, a crippling disease affecting bones and teeth."
  },
  {
    "id": "51",
    "text": "During mitotic cell division, chromatids elongate, become invisible and replicate to become chromosomes during this phase (TSTET 22 May 2024)",
    "options": [
      "Telophase",
      "Anaphase",
      "Metaphase",
      "Prometaphase"
    ],
    "correct": "Telophase",
    "explanation": "This question combines processes from different phases. The elongation and de-condensation of chromosomes (making them less visible) happens during **Telophase**, as the new nuclei form. However, the replication of DNA to form sister chromatids occurs during the S phase of Interphase, which happens before mitosis begins. Among the given mitotic phases, Telophase is the one where chromosomes uncoil back into chromatin."
  },
  {
    "id": "52",
    "text": "An active immune system recruits many cells to the affected tissue to kill the disease-causing microbes. The recruitment process is called (TSTET 22 May 2024)",
    "options": [
      "Infection",
      "Employment",
      "Inflammation",
      "Manifestation"
    ],
    "correct": "Inflammation",
    "explanation": "**Inflammation** is the body's natural response to harmful stimuli, such as pathogens, damaged cells, or irritants. It is a protective process that involves the recruitment of immune cells and molecules to the affected area to eliminate the cause of injury, clear out dead cells, and initiate tissue repair."
  },
  {
    "id": "53",
    "text": "Ginger and Turmeric are modifications of (TSTET 22 May 2024)",
    "options": [
      "Stem",
      "Root",
      "Leaf",
      "Fruit"
    ],
    "correct": "Stem",
    "explanation": "Ginger and turmeric are rhizomes, which are modified underground **stems**. They grow horizontally and are characterized by the presence of nodes and internodes, from which shoots and roots can arise. They primarily function as storage organs for the plant."
  },
  {
    "id": "54",
    "text": "Fibrous root system is seen in this plant/tree (TSTET 22 May 2024)",
    "options": [
      "Peepal",
      "Wheat",
      "Banyan",
      "Cucumber"
    ],
    "correct": "Wheat",
    "explanation": "A fibrous root system, which consists of a dense network of thin, branching roots originating from the stem, is characteristic of monocotyledonous plants. **Wheat** is a monocot and thus has a fibrous root system. Peepal, Banyan, and Cucumber are dicots, which typically have a taproot system."
  },
  {
    "id": "55",
    "text": "Which of the following can be used to collect evidence of student learning progress and communicate it to their parents, community, and relevant authorities? (TSTET 22 May 2024)",
    "options": [
      "Learning indicators",
      "Learning experiences",
      "Learning outcomes",
      "Learning objectives"
    ],
    "correct": "Learning indicators",
    "explanation": "**Learning indicators** are specific, observable, and measurable checkpoints that demonstrate a student's progress towards a broader learning outcome. They provide concrete evidence of what a student knows or can do, making them an effective tool for tracking and communicating learning progress to various stakeholders, including parents."
  },
  {
    "id": "56",
    "text": "While writing the unit plan this information should be written under the heading of teacher's notes (TSTET 22 May 2024)",
    "options": [
      "Number of periods",
      "Reference books, Additional information",
      "Experiences while teaching the lesson",
      "Academic Standards to be achieved"
    ],
    "correct": "Reference books, Additional information",
    "explanation": "In a unit or lesson plan, the 'Teacher's Notes' section is typically reserved for supplementary details that aid the teacher. This includes things like **reference books** for deeper content knowledge, **additional information** or examples to provide, or reminders for classroom management. Core components like the number of periods and academic standards have their own dedicated sections, while experiences are a post-teaching reflection."
  },
  {
    "id": "57",
    "text": "Full Form of INSPIRE (TSTET 22 May 2024)",
    "options": [
      "Inspiration in Science Pursuit for Innovative Research",
      "Innovation in Science Project for Inspired Research",
      "Innovation in Science Pursuit for Inspired Research",
      "Inspiration in Science Project for Innovative Research"
    ],
    "correct": "Innovation in Science Pursuit for Inspired Research",
    "explanation": "INSPIRE is a flagship program of the Department of Science & Technology (DST), Government of India. The acronym stands for **'Innovation in Science Pursuit for Inspired Research'**. Its objective is to attract talented young students to the study of science and encourage careers in research."
  },
  {
    "id": "58",
    "text": "The behaviour of a student (who) follows the lab procedures in compliance to the lab manual relates to this objective (TSTET 22 May 2024)",
    "options": [
      "Receiving",
      "Knowledge",
      "Responding",
      "Analysis"
    ],
    "correct": "Responding",
    "explanation": "This question refers to the levels of the Affective Domain of learning, which deals with attitudes and values. **Responding** refers to the active participation of the learner. When a student willingly follows lab procedures and complies with rules, they are actively responding to the learning situation. This goes beyond simply being aware of the rules (Receiving)."
  },
  {
    "id": "59",
    "text": "The approach to curriculum in which topics will be organized in such a way that it finds a place in different classes of a course in a progressive manner (TSTET 22 May 2024)",
    "options": [
      "Typical approach",
      "Concentric approach",
      "Random approach",
      "Controlled approach"
    ],
    "correct": "Concentric approach",
    "explanation": "The **Concentric approach** (also known as a spiral curriculum) is a method of curriculum design where key concepts are revisited at various points throughout a student's education. Each time the concept is encountered, it is explored in greater depth and complexity, building upon prior knowledge in a progressive manner."
  },
  {
    "id": "60",
    "text": "Which one of the following in Edgar Dale's Cone of Experience is more abstract? (TSTET 22 May 2024)",
    "options": [
      "Demonstrations",
      "Verbal Symbols",
      "Dramatized experiences",
      "Direct purposeful experiences"
    ],
    "correct": "Verbal Symbols",
    "explanation": "Edgar Dale's Cone of Experience model arranges learning experiences from the most concrete (at the bottom) to the most abstract (at the top). The most abstract level consists of **Verbal Symbols** (i.e., reading or listening to words), as they are the furthest removed from tangible, real-world experiences. Direct purposeful experiences are the most concrete."
  },
  {
    "id": "61",
    "text": "Which of the following revolve around the Sun in highly elliptical orbits? (TSTET 21 May 2024)",
    "options": [
      "Comets",
      "Asteroids",
      "Meteorites",
      "Satellites"
    ],
    "correct": "Comets",
    "explanation": "Comets are celestial bodies made of ice, dust, and rock that orbit the Sun. Their orbits are typically highly elliptical (elongated circles), which causes them to travel from the outer solar system close to the Sun and then far away again. Asteroids generally have more circular orbits within the asteroid belt. Meteorites are fragments that land on Earth, and satellites orbit planets."
  },
  {
    "id": "62",
    "text": "The process of collecting rainwater is called as (TSTET 21 May 2024)",
    "options": [
      "Rainwater replenishing",
      "Catching Rainwater",
      "Rainwater harvesting",
      "Rainwater recharging"
    ],
    "correct": "Rainwater harvesting",
    "explanation": "Rainwater harvesting is the specific technical term for the systematic collection and storage of rainwater for future use, preventing it from running off. While 'catching rainwater' is descriptive, 'harvesting' is the correct terminology for the organized process."
  },
  {
    "id": "63",
    "text": "The part of human ear that converts sound vibrations into electrical signals is (TSTET 21 May 2024)",
    "options": [
      "Pinna",
      "Auditory canals",
      "Eardrum",
      "Cochlea"
    ],
    "correct": "Cochlea",
    "explanation": "The cochlea, a spiral-shaped cavity in the inner ear, contains specialized hair cells. These cells transduce the mechanical energy of sound vibrations, transmitted from the eardrum, into electrical nerve impulses that are then sent to the brain for interpretation."
  },
  {
    "id": "64",
    "text": "A simple solar cell is made up of sandwiching (TSTET 21 May 2024)",
    "options": [
      "Silicon boron layer and Silicon-arsenic layer",
      "Silicon sodium layer and Silicon-carbon layer",
      "Silicon gallium layer and Silicon-carbon layer",
      "Silicon magnesium layer and Silicon-sodium layer"
    ],
    "correct": "Silicon boron layer and Silicon-arsenic layer",
    "explanation": "A standard photovoltaic cell is a p-n junction. It's made by sandwiching two layers of doped silicon. Doping silicon with a Group 15 element like Arsenic creates n-type silicon (excess electrons). Doping with a Group 13 element like Boron creates p-type silicon (electron 'holes'). The junction between these two layers creates the electric field necessary for generating current."
  },
  {
    "id": "65",
    "text": "Three resistors R₁=6 Ω, R₂=X Ω, R₃=6 Ω, are connected in parallel in a circuit. If the resultant resistance in the circuit is 2 Ω. Then find the value of X. (TSTET 21 May 2024)",
    "options": [
      "10 Ω",
      "12 Ω",
      "6 Ω",
      "14 Ω"
    ],
    "correct": "6 Ω",
    "explanation": "For resistors in parallel, the reciprocal of the equivalent resistance ($R_{eq}$) is the sum of the reciprocals of individual resistances. The formula is $1/R_{eq} = 1/R₁ + 1/R₂ + 1/R₃$. Substituting the given values: $1/2 = 1/6 + 1/X + 1/6$. This simplifies to $1/2 = 2/6 + 1/X$, or $1/2 = 1/3 + 1/X$. Solving for $1/X$ gives $1/X = 1/2 - 1/3 = 1/6$. Therefore, $X = 6~Ω$."
  },
  {
    "id": "66",
    "text": "This furnace is generally used for roasting (TSTET 21 May 2024)",
    "options": [
      "Blast furnace",
      "Reverberatory furnace",
      "Electric furnace",
      "Retort furnace"
    ],
    "correct": "Reverberatory furnace",
    "explanation": "A reverberatory furnace is designed to heat materials without direct contact with the fuel. Heat is radiated from the roof onto the material. This setup is ideal for roasting, a metallurgical process that involves heating a sulfide ore in the presence of excess air to convert it into its oxide."
  },
  {
    "id": "67",
    "text": "The father of Plastic industry (TSTET 21 May 2024)",
    "options": [
      "Alexander Parkes",
      "Hermann Staudinger",
      "Dr.Leo Hendrik Bakeland",
      "John Dalton"
    ],
    "correct": "Dr.Leo Hendrik Bakeland",
    "explanation": "Dr. Leo Baekeland is widely regarded as the 'Father of the Plastics Industry' for his invention of Bakelite in 1907. Bakelite was the first fully synthetic plastic that was commercially successful, paving the way for the modern plastics industry. Hermann Staudinger is the 'father of polymer chemistry' for his theoretical work."
  },
  {
    "id": "68",
    "text": "The material used for making Vaseline (TSTET 21 May 2024)",
    "options": [
      "Paraffin wax",
      "Coal",
      "Coke",
      "Lubricating oil"
    ],
    "correct": "Paraffin wax",
    "explanation": "Vaseline is a brand name for petroleum jelly, which is a semi-solid mixture of hydrocarbons obtained from petroleum refining. Paraffin wax is a key component of this mixture, providing its characteristic texture and occlusive properties."
  },
  {
    "id": "69",
    "text": "Calculate the amount of Aluminium required to get 224 g of Iron. (Atomic masses of Al=27 U, Fe=56 U and O=16 U) (TSTET 21 May 2024)",
    "options": [
      "54 g",
      "27 g",
      "112 g",
      "108 g"
    ],
    "correct": "108 g",
    "explanation": "This refers to the thermite reaction: $Fe₂O₃ + 2Al → Al₂O₃ + 2Fe$. The stoichiometric ratio shows that 2 moles of Al produce 2 moles of Fe. Molar mass of Al is 27 g/mol and Fe is 56 g/mol. Thus, $2 \\times 27$ g (54 g) of Al produces $2 \\times 56$ g (112 g) of Fe. To find the mass of Al needed for 224 g of Fe, we set up a proportion: (Mass of Al) / (Mass of Fe) = $54 / 112$. So, Mass of Al = $(54 / 112) \\times 224 = 108$ g."
  },
  {
    "id": "70",
    "text": "The element which has the highest number of isotopes among the following (TSTET 21 May 2024)",
    "options": [
      "Sodium",
      "Cesium",
      "Hydrogen",
      "Carbon"
    ],
    "correct": "Cesium",
    "explanation": "Among the given choices, Cesium (Cs) has the highest number of known isotopes, with 40 identified isotopes ranging from Cs-112 to Cs-151, although only one (Cs-133) is stable. The other elements listed have significantly fewer known isotopes."
  },
  {
    "id": "71",
    "text": "The formula of Electronegativity as per Milliken (TSTET 21 May 2024)",
    "options": [
      "Electronegativity = (Ionisation energy - Electron affinity) / 2",
      "Electronegativity = (Ionisation energy + Electron affinity) / 2",
      "Electronegativity = (Ionisation energy + Electron affinity) / (Ionisation energy - Electron affinity)",
      "Electronegativity = (Ionisation energy - Electron affinity) / (Ionisation energy + Electron affinity)"
    ],
    "correct": "Electronegativity = (Ionisation energy + Electron affinity) / 2",
    "explanation": "Robert S. Mulliken defined electronegativity as the arithmetic mean of the ionization energy (IE) and the electron affinity (EA) of an atom. His formula is $\\chi = (IE + EA) / 2$, directly linking an atom's tendency to attract electrons to these two fundamental, measurable properties."
  },
  {
    "id": "72",
    "text": "No. of sigma(σ) and pi (π) bonds in N₂ (TSTET 21 May 2024)",
    "options": [
      "3, 1",
      "2, 1",
      "1, 3",
      "1, 2"
    ],
    "correct": "1, 2",
    "explanation": "The diatomic nitrogen molecule ($N₂$) is formed by a triple bond between the two nitrogen atoms ($N \\equiv N$). Any multiple bond consists of one sigma (σ) bond and the rest are pi (π) bonds. Therefore, a triple bond is composed of one σ bond and two π bonds."
  },
  {
    "id": "73",
    "text": "Read the following statements about Gregor Johann Mendel's experiment on inheritance after cross pollination of 2 pure breeds i.e.. one is yellow seed bearing pea plant and the other is green seed bearing peas plant... A) In F2 generation. 75% are yellow seed producing pea plants with yellow colour of seed being the dominant character B) Among 75% of yellow seed bearing pea plants of F2 generation, 50% plants produced homozygous/pure breed of yellow seeds and another 50% yellow seed bearing plants produced heterozygous pea plants. (TSTET 21 May 2024)",
    "options": [
      "A & B both are correct",
      "A & B both are incorrect",
      "A is correct B is incorrect",
      "A is incorrect B is correct"
    ],
    "correct": "A is correct B is incorrect",
    "explanation": "Statement A is correct. In a monohybrid cross, the F2 generation exhibits a 3:1 phenotypic ratio (dominant:recessive). Thus, 75% of plants will show the dominant yellow seed trait. Statement B is incorrect. The F2 genotypic ratio is 1 YY : 2 Yy : 1 yy. Among the yellow plants (YY and Yy), one-third are homozygous (YY) and two-thirds are heterozygous (Yy), not a 50%-50% split."
  },
  {
    "id": "74",
    "text": "Sensation is a complex pathway. It involves (TSTET 21 May 2024)",
    "options": [
      "Sense organs",
      "Sense organs and nerve impulses",
      "Sense organs, nerve impulses and brain",
      "Brain and nerve impulses"
    ],
    "correct": "Sense organs, nerve impulses and brain",
    "explanation": "Sensation is a complete process. It starts with a stimulus being detected by a sense organ, which then converts the stimulus into nerve impulses. These impulses travel to the brain, where they are processed and interpreted as a sensation. All three components—sense organs, nerve impulses, and the brain—are essential for the pathway to be complete."
  },
  {
    "id": "75",
    "text": "Abrupt appearance of vestigial organs in human beings is called (TSTET 21 May 2024)",
    "options": [
      "Embryological evidence",
      "Atavism",
      "Lamarkism",
      "Existentialism"
    ],
    "correct": "Atavism",
    "explanation": "Atavism is the reappearance of an ancestral trait that was lost during evolution. The sudden appearance of a trait that was present in distant ancestors but not recent ones (e.g., a human born with a tail) is a classic example of atavism."
  },
  {
    "id": "76",
    "text": "Identify stem modification from the following (TSTET 21 May 2024)",
    "options": [
      "Carrot",
      "Beetroot",
      "Raddish",
      "Ginger"
    ],
    "correct": "Ginger",
    "explanation": "Ginger is a rhizome, which is a modified underground stem that grows horizontally. It can be identified as a stem by the presence of nodes and internodes. Carrot, beetroot, and radish are all examples of modified taproots specialized for food storage."
  },
  {
    "id": 77,
    "text": "Seed germinate and plant roots grow in this horizon of soil (TSTET 21 May 2024)",
    "options": [
      "A Horizon",
      "B Horizon",
      "R Horizon",
      "C Horizon"
    ],
    "correct": "A Horizon",
    "explanation": "The A Horizon, or topsoil, is the uppermost layer of soil. It is rich in humus and minerals, making it the most fertile layer. Its composition is ideal for seed germination, and it is where most plant roots grow and absorb nutrients and water."
  },
  {
    "id": 78,
    "text": "Colonies where Algae and Fungi live together in a symbiotic relationship are known as (TSTET 21 May 2024)",
    "options": [
      "Lichen",
      "Coral reefs",
      "Symbiotes",
      "Mangroves"
    ],
    "correct": "Lichen",
    "explanation": "A lichen is a composite organism formed from the symbiotic relationship between algae (or cyanobacteria) and fungi. The fungus provides structure and moisture, while the algae perform photosynthesis. 'Symbiotes' is a general term, not specific to this pairing."
  },
  {
    "id": 79,
    "text": "When the composition of air or the state of balance in the environment is disturbed either by natural phenomena or by any human activity, then it is called (TSTET 21 May 2024)",
    "options": [
      "eruption",
      "pollution",
      "erosion",
      "dilution"
    ],
    "correct": "pollution",
    "explanation": "Pollution is defined as the introduction of contaminants into the natural environment that cause adverse change. This disturbance of the natural balance by the addition of harmful substances fits the definition perfectly."
  },
  {
    "id": 80,
    "text": "Which of the following is known as the cell's control room and is the largest and most distinct of all cell organelles? (TSTET 21 May 2024)",
    "options": [
      "Cell membrane",
      "Mitochondria",
      "Nucleus",
      "Cytoplasm"
    ],
    "correct": "Nucleus",
    "explanation": "The nucleus contains the cell's genetic material (DNA) and controls all of the cell's activities, earning it the name 'control room'. In eukaryotic cells, it is typically the largest and most easily identifiable organelle."
  },
  {
    "id": 81,
    "text": "The muscles in our body are attached to the skin and bone by (TSTET 21 May 2024)",
    "options": [
      "Adipose tissue",
      "Cartilage",
      "Ligament",
      "Areolar tissue"
    ],
    "correct": "Areolar tissue",
    "explanation": "Areolar tissue is a type of loose connective tissue that acts as a connecting and packing material throughout the body. It is found beneath the skin, attaching it to the underlying muscles. Note that muscles are attached to bones by tendons, and bones are attached to other bones by ligaments."
  },
  {
    "id": 82,
    "text": "The materials through which we can see objects, but not very clearly are said to be (TSTET 21 May 2024)",
    "options": [
      "translucent",
      "transparent",
      "opaque",
      "optical"
    ],
    "correct": "translucent",
    "explanation": "Translucent materials allow some light to pass through but scatter it, making objects on the other side appear blurry. Transparent materials allow clear vision, and opaque materials block all light."
  },
  {
    "id": 83,
    "text": "Mrigals and common Carps; Catlas; Rohus Arrange these from top to bottom based on their feeding zones (TSTET 21 May 2024)",
    "options": [
      "Mrigals and Common Carp, Catlas, Rohus",
      "Catlas, Rohus, Mrigals and Common Carps",
      "Rohus, Mrigals and Common Carps, Catlas",
      "Rohus, Catlas, Mrigals and Common Carps"
    ],
    "correct": "Catlas, Rohus, Mrigals and Common Carps",
    "explanation": "In composite fish culture, different fish species occupy different feeding zones to maximize resource use. Catlas are surface feeders. Rohus are column (middle) feeders. Mrigals and Common Carps are bottom feeders. Therefore, the correct arrangement from top to bottom is Catlas, Rohus, then Mrigals and Common Carps."
  },
  {
    "id": 84,
    "text": "Synapse, the functional regions of contact between two neurons are mainly found naturally: (TSTET 21 May 2024)",
    "options": [
      "in brain, in and around the spinal cord",
      "in brain only",
      "in spinal cord only",
      "around the spinal cord and near joints"
    ],
    "correct": "in brain, in and around the spinal cord",
    "explanation": "Synapses are the fundamental junctions for nerve impulse transmission. The brain and spinal cord, which constitute the Central Nervous System (CNS), are composed of dense networks of neurons. Consequently, synapses are found in vast numbers throughout the entire CNS, where information processing occurs."
  },
  {
    "id": 85,
    "text": "Which of the following is best suited for testing a hypothesis in science? (TSTET 21 May 2024)",
    "options": [
      "Observations",
      "Experimentation",
      "Group discussion",
      "Problem-solving"
    ],
    "correct": "Experimentation",
    "explanation": "The scientific method relies on testing hypotheses. Experimentation is the primary method for this, as it involves a controlled procedure designed to support or refute a hypothesis by manipulating variables and observing the outcomes. While observation helps in forming a hypothesis, experimentation is crucial for testing it."
  },
  {
    "id": 86,
    "text": "Blue-printed textbooks are the example of (TSTET 21 May 2024)",
    "options": [
      "Physical resources",
      "Printed resources",
      "Technical based resources",
      "Natural resources"
    ],
    "correct": "Technical based resources",
    "explanation": "A 'blueprint' in education is a technical plan that details the structure, content weightage, and learning objectives for a curriculum or assessment. A textbook designed based on this blueprint is therefore a product of a systematic, technical design process, making it a 'technical based resource' rather than just a generic 'printed resource'."
  },
  {
    "id": 87,
    "text": "The learning experiences in Edgar Dale's cone of learning experiences, while moving from bottom to top increase in (TSTET 21 May 2024)",
    "options": [
      "Abstractness",
      "Effectiveness",
      "Concreteness",
      "Directness"
    ],
    "correct": "Abstractness",
    "explanation": "Edgar Dale's Cone of Experience arranges learning activities in a hierarchy from most concrete to most abstract. The base of the cone consists of direct, purposeful experiences (concrete), while the top consists of verbal and visual symbols (abstract). Therefore, as one moves from the bottom to the top, the level of abstractness increases."
  },
  {
    "id": 88,
    "text": "Which phenomenon is responsible for the formation of a rainbow?",
    "options": [
      "Scattering and Reflection",
      "Diffraction and Interference",
      "Dispersion, Refraction, and Total Internal Reflection",
      "Polarization and Refraction"
    ],
    "correct": "Dispersion, Refraction, and Total Internal Reflection",
    "explanation": "A rainbow is an optical phenomenon caused by light interacting with water droplets (like rain or mist). It involves three main processes: light first refracts as it enters a water droplet, it then undergoes total internal reflection at the back of the droplet, and finally, it refracts again as it leaves the droplet. The initial refraction also causes dispersion, which separates the white light into its constituent colors."
  },
  {
    "id": 89,
    "text": "An aqueous solution turns red litmus paper blue. This solution is likely to contain which of the following?",
    "options": [
      "Hydrochloric acid (HCl)",
      "Sodium chloride (NaCl)",
      "Ammonium hydroxide ($NH_4OH$)",
      "Vinegar ($CH_3COOH$)"
    ],
    "correct": "Ammonium hydroxide ($NH_4OH$)",
    "explanation": "Litmus paper is an acid-base indicator. Red litmus paper turns blue in the presence of a base. Ammonium hydroxide is a weak base. Hydrochloric acid and vinegar are acids (would turn blue litmus red), and sodium chloride is a neutral salt (would cause no change)."
  },
  {
    "id": 90,
    "text": "The process by which plants release water vapor from their leaves into the atmosphere is called:",
    "options": [
      "Respiration",
      "Guttation",
      "Photosynthesis",
      "Transpiration"
    ],
    "correct": "Transpiration",
    "explanation": "Transpiration is the process of water movement through a plant and its evaporation from aerial parts, such as leaves, stems and flowers. Water is necessary for plants but only a small amount of water taken up by the roots is used for growth and metabolism. The remaining 97–99.5% is lost by transpiration."
  },
  {
    "id": 91,
    "text": "Identify the planet among the following which has ring system around it. (TSTET 21 May 2024)",
    "options": [
      "Jupiter",
      "Venus",
      "Mars",
      "Earth"
    ],
    "correct": "Jupiter",
    "explanation": "While Saturn is the most famous for its prominent rings, all four gas giants in our solar system (Jupiter, Saturn, Uranus, and Neptune) have ring systems. Jupiter's rings are very faint and composed mostly of dust. The terrestrial planets (Earth, Venus, Mars) do not have rings."
  },
  {
    "id": "92",
    "text": "Nalla valley Vana Samrakshana Samithi is located in this district. (TSTET 21 May 2024)",
    "options": [
      "Adilabad",
      "Khammam",
      "Medak",
      "Warangal"
    ],
    "correct": "Medak",
    "explanation": "The Nallavally Vana Samrakshana Samithi (Forest Protection Committee) is a community-based forest management initiative located in the Medak district of Telangana."
  },
  {
    "id": "93",
    "text": "Irrespective of the distance from the object to a mirror, the image always appears erect. Then the mirror is likely to be... (TSTET 21 May 2024)",
    "options": [
      "Only plane mirror",
      "Only concave mirror",
      "Only convex mirror",
      "Either plane mirror or convex mirror"
    ],
    "correct": "Either plane mirror or convex mirror",
    "explanation": "A plane mirror always forms a virtual and erect image. A convex mirror also always forms a virtual, erect, and diminished image, regardless of the object's position. A concave mirror, however, can form an inverted (real) image if the object is placed beyond its focal point. Therefore, a mirror that *always* produces an erect image must be either plane or convex."
  },
  {
    "id": "94",
    "text": "The value of universal gravitational constant \"G\" first experimentally calculated by... (TSTET 21 May 2024)",
    "options": [
      "Newton",
      "Henry Cavendish",
      "Dalton",
      "Aristotle"
    ],
    "correct": "Henry Cavendish",
    "explanation": "Although Isaac Newton formulated the law of universal gravitation ($F = G \\frac{m_1 m_2}{r^2}$), he did not experimentally determine the value of 'G'. In 1798, Henry Cavendish conducted a famous experiment using a torsion balance to measure the gravitational force between lead spheres, which allowed him to be the first to calculate a precise value for the gravitational constant."
  },
  {
    "id": "95",
    "text": "The commercial unit of electric energy is... (TSTET 21 May 2024)",
    "options": [
      "KW",
      "KWS",
      "KWh",
      "Joule-sec"
    ],
    "correct": "KWh",
    "explanation": "The commercial unit used by utility companies to measure electrical energy consumption is the kilowatt-hour (kWh). It represents the energy used by a 1-kilowatt (1000-watt) appliance running for one hour. KW (kilowatt) is a unit of power, not energy."
  },
  {
    "id": "96",
    "text": "Ores of which of the following metals occur in nature as sulphides? (TSTET 21 May 2024)",
    "options": [
      "Aluminium, Silver, Gold",
      "Manganese, Calcium, Sodium",
      "Magnesium, Silver, Iron",
      "Zinc, Mercury, Lead"
    ],
    "correct": "Zinc, Mercury, Lead",
    "explanation": "Moderately reactive and less reactive metals are often found in nature as sulphide ores. Key examples include Zinc as zinc blende (ZnS), Mercury as cinnabar (HgS), and Lead as galena (PbS). Highly reactive metals like Calcium and Sodium are found as chlorides or carbonates, while Aluminium is found primarily as an oxide (bauxite)."
  },
  {
    "id": "97",
    "text": "The synthetic fibre obtained from plant cellulose among the following is... (TSTET 21 May 2024)",
    "options": [
      "Rayon",
      "Nylon",
      "Jute",
      "Acrylic"
    ],
    "correct": "Rayon",
    "explanation": "Rayon is classified as a semi-synthetic fiber because it is made from a natural raw material, cellulose (typically from wood pulp), which undergoes a chemical process to be regenerated into a fiber. Nylon and acrylic are fully synthetic fibers derived from petroleum. Jute is a natural fiber."
  },
  {
    "id": "98",
    "text": "The standard used by the oil industry to measure the volume of Petroleum is \"X\" and one X is equal to \"Y\" litres. Then identify X and Y. (TSTET 21 May 2024)",
    "options": [
      "X = barrel; Y = 169",
      "X = gallon: Y = 159",
      "X = barrel; Y = 159",
      "X = gallon: Y = 169"
    ],
    "correct": "X = barrel; Y = 159",
    "explanation": "The international standard unit for measuring crude oil and petroleum products is the barrel. One oil barrel is defined as 42 US gallons, which is equivalent to approximately 159 litres."
  },
  {
    "id": "99",
    "text": "Identify 'X' in the following chemical reaction: $Na_{2}SO_{4} + BaCl_{2} \\rightarrow 'X' + NaCl$. (TSTET 21 May 2024)",
    "options": [
      "Barium chloride",
      "Barium sulphate",
      "Sodium chloride",
      "Sodium sulphate"
    ],
    "correct": "Barium sulphate",
    "explanation": "This reaction is a double displacement reaction where the cations and anions of the reactants switch places. Sodium sulphate ($Na_2SO_4$) reacts with barium chloride ($BaCl_2$) to produce barium sulphate ($BaSO_4$) and sodium chloride (NaCl). Barium sulphate is an insoluble white solid, so it precipitates out of the solution. The balanced equation is: $Na_2SO_4(aq) + BaCl_2(aq) \\rightarrow BaSO_4(s) + 2NaCl(aq)$."
  },
  {
    "id": "100",
    "text": "The difference of neutrons in Deuterium and Tritium is... (TSTET 21 May 2024)",
    "options": [
      "4",
      "3",
      "2",
      "1"
    ],
    "correct": "1",
    "explanation": "Deuterium ($^{2}_{1}H$) and Tritium ($^{3}_{1}H$) are isotopes of hydrogen. The number of neutrons is the mass number (superscript) minus the atomic number (subscript). For Deuterium, neutrons = 2 - 1 = 1. For Tritium, neutrons = 3 - 1 = 2. The difference in the number of neutrons is 2 - 1 = 1."
  },
  {
    "id": "101",
    "text": "The electronic configuration of an element Z is 2,8,2. Then it belongs to... (TSTET 21 May 2024)",
    "options": [
      "2nd Period",
      "2nd Group",
      "3rd Group",
      "6th Period"
    ],
    "correct": "2nd Group",
    "explanation": "The electronic configuration 2, 8, 2 means the element has 3 electron shells, so it belongs to the 3rd Period. The number of electrons in the outermost shell (valence electrons) determines the group. Since there are 2 valence electrons, the element belongs to the 2nd Group of the periodic table. This element is Magnesium (Mg)."
  },
  {
    "id": "102",
    "text": "An element X forms a fluoride $XF_{3}$. Then the valency of X is... (TSTET 21 May 2024)",
    "options": [
      "1",
      "2",
      "4",
      "3"
    ],
    "correct": "3",
    "explanation": "Fluorine (F) has a fixed valency of 1. In the compound $XF_3$, there are three fluorine atoms, contributing a total negative valency of 3 x (-1) = -3. To form a stable neutral compound, element X must have a positive valency to balance this charge. Therefore, the valency of X is +3."
  },
  {
    "id": "103",
    "text": "Read the following statements:\nA) Nature itself chooses or decides which organism should survive or perish in nature. This is the meaning of 'survival of the fittest'.\nB) In an organism, traits that are not useful to it will perish and the traits that are useful will be passed on to the next generations.\nChoose the correct option. (TSTET 21 May 2024)",
    "options": [
      "'A' is correct but 'B' does not explain 'A' exactly.",
      "'A' & 'B' both are correct but are unrelated to one another.",
      "'A' & 'B' both are correct and 'B' explains 'A' exactly.",
      "'A' is correct and 'B' is incorrect"
    ],
    "correct": "'A' & 'B' both are correct and 'B' explains 'A' exactly.",
    "explanation": "Statement A correctly describes the outcome of natural selection, often summarized by the phrase 'survival of the fittest'. Statement B describes the mechanism: organisms with advantageous traits are more likely to survive and pass those traits to their offspring. This differential survival and reproduction is the process that drives evolution. Therefore, both statements are correct, and B explains the process described in A."
  },
  {
    "id": "104",
    "text": "The process of destructing of disease causing micro-organisms in milk is called... (TSTET 21 May 2024)",
    "options": [
      "white revolution",
      "pasteurization",
      "animal husbandry",
      "adulteration of milk"
    ],
    "correct": "pasteurization",
    "explanation": "Pasteurization is a process invented by Louis Pasteur that involves heating a liquid (like milk) to a specific temperature for a defined period and then cooling it rapidly. This process kills or inactivates harmful, disease-causing microbes, making the product safer for consumption and improving its shelf life."
  },
  {
    "id": "105",
    "text": "We know that frog is an amphibian. When it goes deep into water it uses its special organs to breathe. These are called... (TSTET 21 May 2024)",
    "options": [
      "Spiracles",
      "Skin",
      "Gills",
      "Lungs"
    ],
    "correct": "Skin",
    "explanation": "Adult frogs have three ways to respire: through their lungs (pulmonary respiration), through the lining of their mouth (buccal respiration), and through their skin (cutaneous respiration). When underwater, they rely on cutaneous respiration, where oxygen from the water diffuses directly across their moist, permeable skin into a network of capillaries."
  },
  {
    "id": "106",
    "text": "These were well acquainted with bee keeping 4000 yrs. ago. (TSTET 21 May 2024)",
    "options": [
      "Russians",
      "Indians",
      "Italians",
      "Greeks"
    ],
    "correct": "Greeks",
    "explanation": "Beekeeping (apiculture) is an ancient practice. Historical records and archaeological evidence show that ancient civilizations, including the Egyptians and the Greeks, were keeping bees for honey and wax thousands of years ago. The Greek philosopher Aristotle wrote extensively about the biology of honey bees."
  },
  {
    "id": "107",
    "text": "The special defensive cells present in the outer layer of the body of coelenterates like corals are... (TSTET 21 May 2024)",
    "options": [
      "Mesoglea",
      "Cnidoblasts",
      "Interstitial cells",
      "Germ cells"
    ],
    "correct": "Cnidoblasts",
    "explanation": "The defining characteristic of the phylum Coelenterata (also known as Cnidaria) is the presence of specialized stinging cells called cnidoblasts (or cnidocytes). These cells contain an organelle called a nematocyst, which can be discharged to inject venom for capturing prey and for defense."
  },
  {
    "id": "108",
    "text": "In blood clotting process after an injury, thrombokinase acts on pro-thrombin and converts it into... (TSTET 21 May 2024)",
    "options": [
      "Thrombin",
      "Fibrin",
      "Fibrinogen",
      "Serum"
    ],
    "correct": "Thrombin",
    "explanation": "In the blood coagulation cascade, the enzyme thrombokinase (also known as Factor Xa or thromboplastin) is formed at the site of injury. This enzyme acts on an inactive plasma protein called prothrombin and converts it into its active form, thrombin. Thrombin then converts fibrinogen into fibrin to form the mesh of the clot."
  },
  {
    "id": "109",
    "text": "The biggest meltdown of Nuclear power reactor in the world occurred in... (TSTET 21 May 2024)",
    "options": [
      "Loir-et-Cher, France in 1980",
      "Fukushima, Japan in 1975",
      "Chernobyl, Soviet Union in 1986",
      "Cirus BARC in the outskirts of Bombay in 1961"
    ],
    "correct": "Chernobyl, Soviet Union in 1986",
    "explanation": "The Chernobyl disaster, which occurred on April 26, 1986, at the No. 4 reactor in the Chernobyl Nuclear Power Plant near Pripyat in the Soviet Union, is widely considered the most severe nuclear power plant accident in history. It resulted in a full reactor core meltdown and released massive amounts of radiation into the atmosphere."
  },
  {
    "id": "110",
    "text": "Water released from dams and projects during floods is measured in... (TSTET 21 May 2024)",
    "options": [
      "Barrels",
      "Cusecs",
      "Gallons",
      "Tonnes"
    ],
    "correct": "Cusecs",
    "explanation": "The rate of flow of water, especially in rivers or from dam outlets, is measured in 'cusecs'. This unit stands for 'cubic feet per second' and represents the volume of water passing a point per unit of time. The metric equivalent is 'cumecs' (cubic metres per second)."
  },
  {
    "id": "111",
    "text": "Plants use only 1% of water they absorb from soil to form carbohydrate. The remaining 99% is released into the atmosphere through... (TSTET 21 May 2024)",
    "options": [
      "respiration",
      "perspiration",
      "circulation",
      "transpiration"
    ],
    "correct": "transpiration",
    "explanation": "Transpiration is the process of water movement through a plant and its evaporation from aerial parts, such as leaves, stems, and flowers. While a very small fraction of the water absorbed by the roots is used for photosynthesis and growth, the vast majority (often over 97-99%) is lost to the atmosphere through transpiration."
  },
  {
    "id": "112",
    "text": "Identify from the following laws that was not propounded by Mendel in his laws of inheritance. (TSTET 21 May 2024)",
    "options": [
      "Inheritance of acquired characters",
      "Segregation",
      "Dominance",
      "Independent assortment"
    ],
    "correct": "Inheritance of acquired characters",
    "explanation": "Gregor Mendel's work established three main laws of inheritance: the Law of Dominance, the Law of Segregation, and the Law of Independent Assortment. The concept of 'Inheritance of acquired characters' was a central idea in the evolutionary theory proposed by Jean-Baptiste Lamarck, not Mendel."
  },
  {
    "id": "113",
    "text": "Identify the correct sequence of steps in scientific methods in finding solutions to problems. (TSTET 21 May 2024)",
    "options": [
      "Form a hypothesis, Plan an experiment, Conduct the experiment, Observe and ask a question, Draw conclusions and communicate results",
      "Observe and ask a question, plan an experiment, Form a hypothesis, Conduct the experiment, Draw conclusions and communicate results",
      "Plan an experiment, Conduct the experiment, Observe and ask a question, Form a hypothesis, Draw conclusions and communicate results",
      "Plan an experiment, Observe and ask a question, Conduct the experiment, Form a hypothesis, Draw conclusions and communicate results"
    ],
    "correct": "Observe and ask a question, plan an experiment, Form a hypothesis, Conduct the experiment, Draw conclusions and communicate results",
    "explanation": "The scientific method is a systematic process for inquiry. The typical sequence is: 1. Make an observation and ask a question about it. 2. Formulate a testable explanation or hypothesis. 3. Design and conduct an experiment to test the hypothesis. 4. Analyze the results and draw a conclusion. 5. Communicate the findings. While the chosen answer places 'plan an experiment' before 'form a hypothesis', it is the most logical sequence among the given options, starting correctly with observation and ending with conclusions."
  },
  {
    "id": "114",
    "text": "The body's only nerve cells that come in direct contact with the outside environment are in the... (TSTET 21 May 2024)",
    "options": [
      "eyes",
      "inner ear",
      "tongue",
      "nose"
    ],
    "correct": "nose",
    "explanation": "The olfactory receptor neurons, which are responsible for the sense of smell, are located in the olfactory epithelium within the nasal cavity. These are the only neurons in the human body that are directly exposed to the external environment, allowing them to detect odorant molecules in the air we breathe."
  },
  {
    "id": "115",
    "text": "Students will be able to classify elements based on atomic numbers and electron configuration. Which academic standard is this? (TSTET 21 May 2024)",
    "options": [
      "Conceptual understanding",
      "Experimentation and field investigation",
      "Application to daily life",
      "Asking questions and making hypotheses"
    ],
    "correct": "Conceptual understanding",
    "explanation": "This learning objective falls under 'Conceptual Understanding'. It requires students to grasp the fundamental concepts of atomic structure, the periodic law, and the principles that govern the arrangement of the periodic table. Classifying elements is a direct application of these core concepts rather than a simple memorization or a physical experiment."
  },
  {
    "id": "116",
    "text": "In a collaborative learning approach, make sure that the students in the group are... (TSTET 21 May 2024)",
    "options": [
      "Homogeneous",
      "Heterogeneous",
      "Similar",
      "Uniform"
    ],
    "correct": "Heterogeneous",
    "explanation": "Effective collaborative learning often relies on heterogeneous grouping. This means creating groups with a mix of students who have different ability levels, skills, backgrounds, and perspectives. This diversity allows students to learn from one another's strengths, support areas of weakness, and engage in richer problem-solving and discussion."
  },
  {
    "id": "117",
    "text": "To assess students' process skills, we use... (TSTET 21 May 2024)",
    "options": [
      "Grading",
      "Vogel's evaluation scale",
      "Bulletin or score board",
      "Rubrics"
    ],
    "correct": "Rubrics",
    "explanation": "Rubrics are an effective tool for assessing process skills (like experimentation, critical thinking, or collaboration). A rubric outlines specific criteria for performance and describes different levels of quality for each criterion. This allows a teacher to evaluate not just the final outcome of a task, but also the process the student followed to achieve it."
  },
  {
    "id": "118",
    "text": "The learning objective 'Students will be able to construct a model of a DNA molecule and explain its double helix structure.' is an example of which academic standard?",
    "options": [
      "Conceptual understanding",
      "Application to daily life",
      "Experimentation and field investigation",
      "Appreciation and aesthetic sense"
    ],
    "correct": "Conceptual understanding",
    "explanation": "This task requires students to understand and represent a core biological concept, the structure of DNA. Constructing a model and explaining its components demonstrates a deep grasp of the underlying theory, which is the essence of 'Conceptual understanding'."
  },
  {
    "id": "119",
    "text": "For a successful collaborative activity, it's best to form groups that include a variety of students with different academic strengths, learning styles, and backgrounds. This practice is known as forming... ",
    "options": [
      "Homogeneous groups",
      "Uniform groups",
      "Static groups",
      "Heterogeneous groups"
    ],
    "correct": "Heterogeneous groups",
    "explanation": "Heterogeneous grouping involves mixing students with diverse characteristics, such as varied academic abilities or skills. This approach promotes peer-to-peer teaching, diverse perspectives, and a more well-rounded learning experience for all group members."
  },
  {
    "id": "120",
    "text": "When assessing a student's ability to critically analyze a historical document, a teacher might use a tool that breaks down the assessment into specific criteria such as 'identifying the author's bias,' 'corroborating sources,' and 'evaluating the historical context.' This type of assessment tool is called a...",
    "options": [
      "Checklist",
      "Rating scale",
      "Rubric",
      "Scoreboard"
    ],
    "correct": "Rubric",
    "explanation": "A rubric is a comprehensive scoring guide that provides a detailed breakdown of the criteria for a specific task. It helps to systematically evaluate complex skills or processes by defining what constitutes different levels of performance for each criterion, such as 'Excellent,' 'Good,' or 'Needs Improvement'."
  },
  {
    "id": "121",
    "text": "Halley's comet will be visible again in the year (TSTET 20 May 2024)",
    "options": [
      "2026",
      "2052",
      "2062",
      "2076"
    ],
    "correct": "2062",
    "explanation": "Halley's Comet is a famous short-period comet that orbits the Sun approximately every 75-76 years. Its last appearance in the inner Solar System was in 1986. Adding the average orbital period to this date (1986 + 76 years) gives 2062 as the year of its next expected appearance."
  },
  {
    "id": "122",
    "text": "Unit of relative density is (TSTET 20 May 2024)",
    "options": [
      "it has no units",
      "$g/cm^{3}$",
      "$Kg/cm^{3}$",
      "$N/m^{2}$"
    ],
    "correct": "it has no units",
    "explanation": "Relative density is the ratio of the density of a substance to the density of a reference substance (usually water). Because it is a ratio of two quantities with the same units (e.g., $kg/m^3$ divided by $kg/m^3$), the units cancel out. Therefore, relative density is a dimensionless quantity and has no units."
  },
  {
    "id": "123",
    "text": "The number of images that can be formed if we make two holes in a pinhole camera (TSTET 20 May 2024)",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": "2",
    "explanation": "A pinhole camera functions based on the principle that light travels in straight lines. Each pinhole acts as an independent aperture, allowing light from the object to pass through and form a separate, inverted image on the screen. Therefore, making two holes in a pinhole camera will result in the formation of two distinct images."
  },
  {
    "id": "124",
    "text": "The value of universal gravitational constant (TSTET 20 May 2024)",
    "options": [
      "$G=6.67\\times10^{-13}N~m^{2}kg^{-2}$",
      "$G=6.67\\times10^{-11}N~m^{2}kg^{-2}$",
      "$G=6.67\\times10^{-14}N~m^{2}kg^{-2}$",
      "$G=6.67\\times10^{11}N~m^{2}kg^{-2}$"
    ],
    "correct": "$G=6.67\\times10^{-11}N~m^{2}kg^{-2}$",
    "explanation": "The universal gravitational constant, denoted by G, is a fundamental physical constant in Newton's law of universal gravitation. The internationally accepted value is approximately $6.674 \\times 10^{-11} N \cdot m^2/kg^2$. The option provided is the standard rounded value used in physics."
  },
  {
    "id": "125",
    "text": "Identify the INCORRECT statement among the following with respect to Kirchhoff's laws of electric circuit. (TSTET 20 May 2024)",
    "options": [
      "The potential difference across the resistor is taken as positive when we move along the direction of electric current through the resistor.",
      "Kirchhoff's Loop law is based on the conservation of energy.",
      "Kirchhoff's Junction law is based on the conservation of charge.",
      "The algebraic sum of the increases and decreases in potential difference across various components of a closed-circuit loop must be zero."
    ],
    "correct": "The potential difference across the resistor is taken as positive when we move along the direction of electric current through the resistor.",
    "explanation": "This statement is incorrect. According to the standard sign convention for applying Kirchhoff's Loop Law, when you trace a path across a resistor in the same direction as the current, it represents a potential *drop*, so the potential difference ($V=IR$) is taken as *negative*. A positive value is used when moving against the current."
  },
  {
    "id": "126",
    "text": "Froth flotation is useful for sulphide ores because (TSTET 20 May 2024)",
    "options": [
      "they have no wetting property",
      "the impurities get dried",
      "the impurities settle at the top",
      "ore can be separated by handpicking"
    ],
    "correct": "they have no wetting property",
    "explanation": "The froth flotation process separates minerals based on their differing abilities to be wetted by water. Sulphide ore particles are hydrophobic (water-repelling) and are preferentially wetted by pine oil. The gangue (impurities) is hydrophilic (water-attracting). When air is bubbled through the mixture, the oil-coated ore particles attach to the bubbles and rise to the surface in a froth, effectively separating them from the water-wetted impurities that sink."
  },
  {
    "id": "127",
    "text": "This is NOT formed by the physical mixing of two substances (TSTET 20 May 2024)",
    "options": [
      "Mixture",
      "Solvent",
      "Solute",
      "Compound"
    ],
    "correct": "Compound",
    "explanation": "A **compound** is formed through a chemical reaction where two or more elements combine in a fixed ratio, forming new chemical bonds and a new substance with different properties. A **mixture**, and its components like a **solute** and a **solvent**, are formed by the physical mixing of substances without any chemical change."
  },
  {
    "id": "128",
    "text": "In the chemical reaction $Na_{2}CO_{3}+10H_{2}O\\rightarrow Na_{2}CO_{3}.10H_{2}O,$ $Na_{2}CO_{3}.10H_{2}O$ is (TSTET 20 May 2024)",
    "options": [
      "Baking soda",
      "Soda ash",
      "Washing soda",
      "Sodium Carbonate"
    ],
    "correct": "Washing soda",
    "explanation": "The chemical formula $Na_{2}CO_{3}.10H_{2}O$ represents sodium carbonate decahydrate. This is the common chemical name for **washing soda**. Soda ash refers to the anhydrous (water-free) form, $Na_{2}CO_{3}$, while baking soda is sodium bicarbonate, $NaHCO_3$."
  },
  {
    "id": "129",
    "text": "The iron nail dipped in copper sulphate solution becomes brown. This is a (TSTET 20 May 2024)",
    "options": [
      "Chemical Combination reaction",
      "Decomposition reaction",
      "Displacement reaction",
      "Double displacement reaction"
    ],
    "correct": "Displacement reaction",
    "explanation": "This is a classic single **displacement reaction**. Iron is higher in the reactivity series than copper. Therefore, when an iron nail (Fe) is placed in a copper sulphate ($CuSO_4$) solution, the more reactive iron displaces the copper ions from the solution. The reaction is: $Fe(s) + CuSO_4(aq) \\rightarrow FeSO_4(aq) + Cu(s)$. The brown coating on the nail is the deposited solid copper."
  },
  {
    "id": "130",
    "text": "Chlorine isotopes occur in nature in two isotopic forms with masses 35 units and 37 units. The isotope with mass 35 is 75% and the isotope with mass 37 is 25% present in nature. Then the average atomic mass of the chlorine atom is (TSTET 20 May 2024)",
    "options": [
      "37.5 u",
      "50 u",
      "36 u",
      "35.5 u"
    ],
    "correct": "35.5 u",
    "explanation": "The average atomic mass is the weighted average of the masses of an element's isotopes based on their natural abundance. It is calculated as: (mass₁ × abundance₁) + (mass₂ × abundance₂). For chlorine, this is $(35 \\text{ u} \\times 0.75) + (37 \\text{ u} \\times 0.25) = 26.25 \\text{ u} + 9.25 \\text{ u} = 35.5 \\text{ u}$."
  },
  {
    "id": "131",
    "text": "Identify which is NOT a Dobereiner triad among the following (TSTET 20 May 2024)",
    "options": [
      "Li, Na, K",
      "Ca, Sr, Ba",
      "Cl, Br, I",
      "Mg, Cr, Fe"
    ],
    "correct": "Mg, Cr, Fe",
    "explanation": "Dobereiner's triads consisted of groups of three elements with similar properties, where the atomic weight of the middle element was roughly the average of the other two. (Li, Na, K), (Ca, Sr, Ba), and (Cl, Br, I) are all classic examples of these triads. The group (Mg, Cr, Fe) does not share similar chemical properties in this manner, nor does it follow the atomic weight rule."
  },
  {
    "id": "132",
    "text": "The hybridisation of $BF_{3}$ (TSTET 20 May 2024)",
    "options": [
      "sp",
      "$sp^{2}$",
      "$sp^{3}$",
      "There is no hybridisation"
    ],
    "correct": "$sp^{2}$",
    "explanation": "In Boron Trifluoride ($BF_3$), the central boron atom has three valence electrons. It forms single bonds with three fluorine atoms. To form three equivalent bonds, boron's one 2s orbital and two 2p orbitals hybridize to form three $sp^2$ orbitals. These orbitals arrange themselves in a trigonal planar geometry with 120° bond angles."
  },
  {
    "id": "133",
    "text": "The enteric nervous system enables us to 'feel' the inner world of our gut and its contents because of the presence of - (TSTET 20 May 2024)",
    "options": [
      "dendrites",
      "neuroglia",
      "Axons",
      "multitude of neurons"
    ],
    "correct": "multitude of neurons",
    "explanation": "The enteric nervous system (ENS) is often called the body's \"second brain\" because it is a vast, independent network made up of a **multitude of neurons** (hundreds of millions) embedded in the walls of the gut. This complex system governs the function of the gastrointestinal tract and provides the sensory information that allows us to perceive internal sensations like fullness or discomfort."
  },
  {
    "id": "134",
    "text": "Minamata disease which was first discovered in Minamata city of Japan was caused as a result of poisoning when the people ate shell fish which are bio accumulated with this toxic chemical (TSTET 20 May 2024)",
    "options": [
      "Cyanide",
      "Methyl Isocyanate",
      "Methyl Mercury",
      "Arsenic trioxide"
    ],
    "correct": "Methyl Mercury",
    "explanation": "Minamata disease is a severe neurological syndrome caused by mercury poisoning. It was identified in Minamata, Japan, in the 1950s after a local factory discharged industrial wastewater containing **methylmercury**. This toxic compound accumulated in the food chain, particularly in fish and shellfish, which were then consumed by the local population."
  },
  {
    "id": "135",
    "text": "Read the following statements. A) The arteries are the blood vessels with thick walls which originate from the heart and supply blood to various organs in the body. B) The two atria and the two ventricles are separated from each other by muscular partitions called valves. Choose the correct answer: (TSTET 20 May 2024)",
    "options": [
      "Both 'A' and 'B' are correct",
      "Both 'A' and 'B' are incorrect",
      "Only 'B' is correct",
      "'A' is correct, 'B' is incorrect"
    ],
    "correct": "'A' is correct, 'B' is incorrect",
    "explanation": "Statement 'A' is correct. Arteries are thick-walled vessels that carry blood away from the heart. Statement 'B' is incorrect. The muscular partitions that separate the chambers of the heart are called septa. Valves are the structures *between* the atria and ventricles, and at the exits of the ventricles, that prevent the backflow of blood; they are not the partitions themselves."
  },
  {
    "id": "136",
    "text": "The 'Climate' of a particular place is determined by considering the average weather patterns of that place (temperature, rainfall, humidity and wind speed) taken over for a 'long time'. The term 'long time' refers to (TSTET 20 May 2024)",
    "options": [
      "10 years",
      "25 years",
      "25 months",
      "50 years"
    ],
    "correct": "25 years",
    "explanation": "Climate refers to the long-term average of weather conditions in a specific region. To differentiate these long-term patterns from short-term weather fluctuations, data is typically averaged over an extended period. The standard period defined by the World Meteorological Organization is 30 years, but a period of **25 years** is also commonly used and considered a sufficient duration to define a climate."
  },
  {
    "id": "137",
    "text": "One of the following is NOT a process involved from obtaining wool to producing woollen fabric. (TSTET 20 May 2024)",
    "options": [
      "Stiffling",
      "Combing",
      "Shearing",
      "Rolling & twisting"
    ],
    "correct": "Stiffling",
    "explanation": "The key processes in wool production include **shearing** (removing fleece from sheep), **combing** (aligning fibers), and **rolling & twisting** (spinning yarn). **Stifling** is a process related to silk production (sericulture), where the pupa inside a silk cocoon is killed with heat or steam to prevent it from breaking the continuous silk filament when it hatches."
  },
  {
    "id": "138",
    "text": "The primary respiratory organs in cockroaches are (TSTET 20 May 2024)",
    "options": [
      "gills",
      "spiracles",
      "nostrils",
      "skin"
    ],
    "correct": "spiracles",
    "explanation": "Insects like cockroaches do not have lungs. They breathe through a network of tubes called the tracheal system. Air enters this system through external openings on the sides of the insect's body called **spiracles**. From the spiracles, the air travels through the tracheae to deliver oxygen directly to the cells."
  },
  {
    "id": "139",
    "text": "Male gamates/sperms are produced in this part of the male reproductive system (TSTET 20 May 2024)",
    "options": [
      "Seminal ducts",
      "Testes",
      "Penis",
      "Prostate gland"
    ],
    "correct": "Testes",
    "explanation": "The **testes** are the primary male reproductive glands (gonads). Their main function is spermatogenesis, the process of producing sperm (male gametes). The seminal ducts are for transport, the prostate gland produces fluid that mixes with sperm, and the penis is the copulatory organ."
  },
  {
    "id": "140",
    "text": "Diverse and specific species of flora/fauna that grow particutarly in a particular area are called __________ species of that area. (TSTET 20 May 2024)",
    "options": [
      "endangered",
      "extinct",
      "extant",
      "endemic"
    ],
    "correct": "endemic",
    "explanation": "**Endemic** species are plants and animals that are found exclusively in one specific geographic location and nowhere else in the world. Endangered species are at risk of becoming extinct. Extinct species no longer exist. Extant means still in existence."
  },
  {
    "id": "141",
    "text": "CFCs are released from ACs, refrigerators and aerosol sprays and cause depletion of Ozone layer resulting in Global warming. 'CFC' stands for (TSTET 20 May 2024)",
    "options": [
      "Chloro Ferrous Carbons",
      "Chloro Flouro Carbons",
      "Chloro Flouro Chemicals",
      "Chemical Fertilizer Companies"
    ],
    "correct": "Chloro Flouro Carbons",
    "explanation": "CFC stands for **Chlorofluorocarbons**. These are organic compounds containing carbon, chlorine, and fluorine. They are notorious for their role in depleting the Earth's ozone layer, which protects life from harmful ultraviolet radiation."
  },
  {
    "id": "142",
    "text": "Saprophytes-microbes that decompose dead organisims are (TSTET 20 May 2024)",
    "options": [
      "Autotrophs",
      "Embryotrophs",
      "Heterotrophs",
      "Saprotrophs"
    ],
    "correct": "Heterotrophs",
    "explanation": "Saprophytes (or saprotrophs) obtain nutrients by decomposing dead organic matter. Since they cannot produce their own food and rely on external organic sources, they are classified as **heterotrophs**. Autotrophs create their own food, typically through photosynthesis. Therefore, saprotrophism is a type of heterotrophic nutrition."
  },
  {
    "id": "143",
    "text": "Nitrogen cannot be used by plants and animals in its original form as present in the atmosphere. The atmospheric Nitrogen is hence converted into certain compounds which plants can take from soil. Which of the following bacteria help in this bio chemical process of conversion? (TSTET 20 May 2024)",
    "options": [
      "Lactobacillus",
      "Cyanobacteria",
      "Rhizobium",
      "Pathogenic bacteria"
    ],
    "correct": "Rhizobium",
    "explanation": "The process of converting unusable atmospheric nitrogen gas ($N_2$) into usable compounds like ammonia is known as nitrogen fixation. **Rhizobium** bacteria are famous for their symbiotic relationship with leguminous plants (e.g., peas, beans), living in their root nodules and fixing nitrogen for the plant to use."
  },
  {
    "id": "144",
    "text": "The only organ in our body that can float is (TSTET 20 May 2024)",
    "options": [
      "Stomach",
      "Lungs",
      "Kidney",
      "Brain"
    ],
    "correct": "Lungs",
    "explanation": "The **lungs** are the only human organs that can float on water. This is because even after a forceful exhalation, a certain amount of air, known as the residual volume, remains trapped within them. This residual air makes their overall density less than that of water."
  },
  {
    "id": "145",
    "text": "In problem solving approach, teacher is a (TSTET 20 May 2024)",
    "options": [
      "Learner",
      "Facilitator",
      "Researcher",
      "Explorer"
    ],
    "correct": "Facilitator",
    "explanation": "In a student-centered, problem-solving approach to teaching, the role of the teacher shifts from being a direct instructor to a **facilitator**. A facilitator guides the learning process, provides resources, and supports students as they explore the problem and construct their own understanding, rather than simply delivering information."
  },
  {
    "id": "146",
    "text": "Teaching and Learning process is socially related to (TSTET 20 May 2024)",
    "options": [
      "Classroom",
      "Behavior",
      "Society",
      "Home"
    ],
    "correct": "Classroom",
    "explanation": "While learning is influenced by society and home, the formal teaching and learning process is a social activity that is fundamentally centered within the **classroom** environment. The classroom is the specific social setting where planned interactions between teachers and students occur for the purpose of education."
  },
  {
    "id": "147",
    "text": "As per the recommendation of NCF-2005, at this level, students should be engaged in learning science as a composite discipline. (TSTET 20 May 2024)",
    "options": [
      "Primary level",
      "Upper primary level",
      "Secondary level",
      "Higher secondary level"
    ],
    "correct": "Secondary level",
    "explanation": "The National Curriculum Framework (NCF) 2005 recommends that at the **secondary level** (classes IX-X), science should be taught as a single integrated or composite subject, combining physics, chemistry, and biology. This is to help students appreciate the connections between different scientific fields before they specialize at the higher secondary level."
  },
  {
    "id": "148",
    "text": "In an experiment conducted to see the effect of intermittent fasting on weight reduction in men and women, intermittent fasting is (TSTET 20 May 2024)",
    "options": [
      "Dependent variable",
      "Intervening variable",
      "Independent variable",
      "Extraneous variable"
    ],
    "correct": "Independent variable",
    "explanation": "In an experiment, the **independent variable** is the condition that is manipulated or changed by the researcher (the cause). The **dependent variable** is the outcome that is measured to see the effect of that change (the effect). Here, 'intermittent fasting' is the factor being applied or changed, so it is the independent variable. 'Weight reduction' would be the dependent variable."
  },
  {
    "id": "149",
    "text": "The third step in the '5E's' instructional model for constructivism developed by Roger Bybee (TSTET 20 May 2024)",
    "options": [
      "Engage",
      "Explain",
      "Explore",
      "Evaluate"
    ],
    "correct": "Explain",
    "explanation": "The 5E Instructional Model follows a specific sequence: 1st is **Engage** (capture interest), 2nd is **Explore** (hands-on activities), 3rd is **Explain** (students and teacher articulate understanding and introduce formal terms), 4th is **Elaborate** (apply concepts), and 5th is **Evaluate** (assess learning)."
  },
  {
    "id": "150",
    "text": "When a test measures what it aims to measure it is said to be- (TSTET 20 May 2024)",
    "options": [
      "Reliable",
      "Objective",
      "Economical",
      "Valid"
    ],
    "correct": "Valid",
    "explanation": "**Validity** is the extent to which a test measures what it claims to measure. It is considered the most fundamental characteristic of a good test. **Reliability** refers to the consistency of results, while **objectivity** refers to the scoring being free from bias."
  },
  {
    "id": "151",
    "text": "As the comet approaches the sun, the length of the tail of the comet in size will (TSTET 20 May 2024)",
    "options": [
      "grow",
      "disappear",
      "remains same",
      "diminish"
    ],
    "correct": "grow",
    "explanation": "A comet is an icy body that releases gas and dust as it gets closer to the Sun. This process is called outgassing. The intense solar radiation and solar wind from the Sun heat the comet, causing more material to be ejected. This ejected material forms the comet's tail. The closer the comet is to the Sun, the stronger the solar effects, resulting in more outgassing and a longer, more visible tail. Therefore, the tail grows in size as it approaches the Sun."
  },
  {
    "id": "152",
    "text": "The net force acting on the Mercury at rest in the Barometer is (TSTET 20 May 2024)",
    "options": [
      "76 cm",
      "1 atm",
      "0",
      "24 cm"
    ],
    "correct": "0",
    "explanation": "According to Newton's First Law of Motion, an object remains at rest if the net force acting on it is zero. In a barometer, the column of mercury is stationary because the forces acting upon it are balanced. The downward force due to the weight of the mercury column is exactly counteracted by the upward force exerted by the atmospheric pressure on the mercury in the reservoir. Since these forces are equal and opposite, the net force is zero."
  },
  {
    "id": "153",
    "text": "The boiling point of water at standard atmospheric pressure (1 atm) and Latent heat of vapourization of water are respectively (TSTET 20 May 2024)",
    "options": [
      "373 K, 540 cal/gm",
      "0 K, 540 cal/gm",
      "273 K, 270 cal/gm",
      "0 K, 270 cal/gm"
    ],
    "correct": "373 K, 540 cal/gm",
    "explanation": "At standard atmospheric pressure (1 atm), water boils at 100° Celsius. To convert Celsius to Kelvin, the formula is K = °C + 273.15. Thus, 100°C is approximately 373 K. The latent heat of vaporization is the amount of heat energy required to change a unit mass of a substance from liquid to gas at its boiling point. For water, this value is approximately 540 calories per gram (cal/gm)."
  },
  {
    "id": "154",
    "text": "The surface area of an object is 40 m² and a force of 20 N is applied on it, then the resultant pressure is equal to (TSTET 20 May 2024)",
    "options": [
      "0.5 N/m²",
      "800 N/m²",
      "2 N/m²",
      "1 N/m²"
    ],
    "correct": "0.5 N/m²",
    "explanation": "Pressure is calculated by the formula: Pressure (P) = Force (F) / Area (A). Given the force is 20 Newtons (N) and the area is 40 square meters (m²), the calculation is P = 20 N / 40 m² = 0.5 N/m². The unit N/m² is also known as a Pascal (Pa)."
  },
  {
    "id": "155",
    "text": "The correct expression for the work done by the chemical force to move unit positive charge from negative terminal to positive terminal of the battery (TSTET 20 May 2024)",
    "options": [
      "ε = Fₑ(w/q)",
      "ε = Fₑ(q/d)",
      "ε = Fₑ(d/q)",
      "ε = Fₑ(q/d)"
    ],
    "correct": "ε = Fₑ(d/q)",
    "explanation": "The electromotive force (EMF, denoted by ε) of a battery is defined as the work done per unit charge. Work itself is the product of force and distance (W = F × d). Therefore, EMF can be expressed as the work done by the chemical force (F) over a distance (d) divided by the charge (q). The expression ε = Fₑ(d/q) correctly represents this relationship, where Fₑ stands for the chemical force moving the charge."
  },
  {
    "id": "156",
    "text": "In activity series, Metals are arranged in this order of their reactivity (TSTET 20 May 2024)",
    "options": [
      "Ascending order",
      "Descending order",
      "Small to Big",
      "There will be no specific order"
    ],
    "correct": "Descending order",
    "explanation": "The chemical activity series, or reactivity series, arranges metals based on their tendency to undergo chemical reactions. The metals are listed in descending order of reactivity, meaning the most reactive metal (like potassium) is at the top, and the least reactive metal (like gold) is at the bottom. This order helps in predicting the outcomes of displacement reactions."
  },
  {
    "id": "157",
    "text": "Identify the fibre made up of polymers among the following (TSTET 20 May 2024)",
    "options": [
      "Silk",
      "Jute",
      "Wool",
      "Nylon"
    ],
    "correct": "Nylon",
    "explanation": "All fibers are polymers, but the question distinguishes between natural and synthetic ones. Silk (a protein), Jute (cellulose), and Wool (a protein) are natural polymers. Nylon is a synthetic polymer, specifically a polyamide, created through an industrial chemical process called polymerization. In this context, Nylon is the intended answer representing a man-made polymer fiber."
  },
  {
    "id": "158",
    "text": "The formula of Bleaching powder (TSTET 20 May 2024)",
    "options": [
      "CaCl₂",
      "CaOCl₂",
      "CaCl₃",
      "Ca(OH)₂"
    ],
    "correct": "CaOCl₂",
    "explanation": "Bleaching powder is the common name for the chemical compound calcium oxychloride. Its chemical formula is CaOCl₂. It is produced by reacting chlorine gas with dry slaked lime (calcium hydroxide, Ca(OH)₂). CaCl₂ is calcium chloride."
  },
  {
    "id": "159",
    "text": "12 g of Carbon reacted with 32 g of Oxygen and formed 44 g of Carbon dioxide. This is a (TSTET 20 May 2024)",
    "options": [
      "Double displacement reaction",
      "Displacement reaction",
      "Decomposition reaction",
      "Chemical Combination reaction"
    ],
    "correct": "Chemical Combination reaction",
    "explanation": "A chemical combination reaction is a type of reaction where two or more reactants combine to form a single, more complex product. In this case, Carbon (C) and Oxygen (O₂) combine to form one product, Carbon dioxide (CO₂). The reaction is represented as C + O₂ → CO₂. The masses given also demonstrate the Law of Conservation of Mass (12g + 32g = 44g)."
  },
  {
    "id": "160",
    "text": "Among the isotopes of an element, these differ in number (TSTET 20 May 2024)",
    "options": [
      "Proton",
      "Electron",
      "Neutron",
      "Positron"
    ],
    "correct": "Neutron",
    "explanation": "Isotopes are variants of a particular chemical element which differ in neutron number, although all isotopes of a given element have the same number of protons in each atom. The number of protons defines the element's atomic number. The difference in the number of neutrons results in a different mass number for each isotope."
  },
  {
    "id": "161",
    "text": "Electronic configuration of the Chromium (TSTET 20 May 2024)",
    "options": [
      "1s²2s²2p⁶3s²3p⁶4s¹3d⁶",
      "1s²2s²2p⁶3s²3p⁶4s²3d⁵",
      "1s²2s²2p⁶3s²3p⁶4s²3d⁴",
      "1s²2s²2p⁶3s²3p⁶4s¹3d⁵"
    ],
    "correct": "1s²2s²2p⁶3s²3p⁶4s¹3d⁵",
    "explanation": "Chromium (Cr), with atomic number 24, is an exception to the standard Aufbau principle for filling electron orbitals. To achieve greater stability, atoms prefer half-filled or fully-filled subshells. Instead of the expected configuration of [Ar] 4s²3d⁴, one electron moves from the 4s orbital to the 3d orbital. This creates a half-filled 4s orbital (4s¹) and a half-filled 3d orbital (3d⁵), which is a more stable state. Thus, the correct configuration is 1s²2s²2p⁶3s²3p⁶4s¹3d⁵."
  },
  {
    "id": "162",
    "text": "Bond length of H-N in NH₃ (TSTET 20 May 2024)",
    "options": [
      "0.96 Å",
      "1.01 Å",
      "1.10 Å",
      "1.27 Å"
    ],
    "correct": "1.01 Å",
    "explanation": "The bond length is the average distance between the nuclei of two bonded atoms. For the ammonia molecule (NH₃), the experimentally determined average length of the nitrogen-hydrogen (N-H) single bond is approximately 1.017 Ångströms (Å) or 101.7 picometers. The closest value among the options is 1.01 Å."
  },
  {
    "id": "163",
    "text": "Using excess of fertilizers in order to get more quantity of crop turns the soil (TSTET 20 May 2024)",
    "options": [
      "fertile",
      "acidic or alkaline",
      "weak",
      "loose"
    ],
    "correct": "acidic or alkaline",
    "explanation": "The overuse of chemical fertilizers can lead to a significant change in the soil's pH balance. Depending on the chemical composition of the fertilizer, the soil can become excessively acidic or alkaline. This imbalance can harm beneficial soil microorganisms, hinder nutrient uptake by plants, and lead to soil degradation, ultimately reducing its long-term fertility."
  },
  {
    "id": "164",
    "text": "The usually seen infections in crops/plants in the form of white, black, yellow, brown spots or fluffy/powdery coating on leaves are caused by (TSTET 20 May 2024)",
    "options": [
      "fungus",
      "virus",
      "bacteria",
      "pollution"
    ],
    "correct": "fungus",
    "explanation": "The described symptoms—colored spots and powdery or fluffy coatings on leaves—are classic signs of fungal diseases in plants. For instance, powdery mildew creates a white, powdery layer on leaves, while various rusts and blights cause spots of different colors. While bacteria and viruses also cause plant diseases, these specific visual manifestations are most characteristic of fungal pathogens."
  },
  {
    "id": "165",
    "text": "The first material that was experimented upon by Edison, to be used as filament in electric bulb was: (TSTET 20 May 2024)",
    "options": [
      "Copper",
      "Lead",
      "Tungsten",
      "Platinum"
    ],
    "correct": "Platinum",
    "explanation": "In his quest for a long-lasting incandescent light bulb, Thomas Edison and his team tested a vast number of materials for the filament. Among the very first materials they experimented with was platinum. It had a suitably high melting point but proved to be too expensive and not durable enough for a commercially viable product. Edison later found success with carbonized bamboo fiber, long before tungsten became the industry standard."
  },
  {
    "id": "166",
    "text": "Changing of milk into curd is due to the development of this bacteria (TSTET 20 May 2024)",
    "options": [
      "E-Coli",
      "Lacto Bacillus",
      "Pseudomonas maltophillia",
      "Clostridium Khyveri"
    ],
    "correct": "Lacto Bacillus",
    "explanation": "The transformation of milk into curd is a fermentation process carried out by Lactic Acid Bacteria (LAB). The primary bacterium responsible for this is from the genus *Lactobacillus*. These bacteria consume the lactose (sugar) in milk and convert it into lactic acid. The acid causes the milk protein (casein) to coagulate, resulting in the thick texture of curd."
  },
  {
    "id": "167",
    "text": "\"Most of the today's life forms had variations that were accumulated over years to allow them survive better\". This was said by Charles Darwin in his book (TSTET 20 May 2024)",
    "options": [
      "Journal of the voyage",
      "The Decent of Man and the Selection in Relation to Sex",
      "The origin of species",
      "The Expression of the Emotions in Man and Animals"
    ],
    "correct": "The origin of species",
    "explanation": "This statement encapsulates the central idea of evolution by natural selection. Charles Darwin laid out this revolutionary theory in his landmark 1859 book, 'On the Origin of Species'. The book proposed that the diversity of life arose from a common descent through a branching pattern of evolution, driven by the mechanism of natural selection, where variations that aid survival are passed on and accumulate over generations."
  },
  {
    "id": "168",
    "text": "Tissue that is responsible for transportation of water and salts from the roots is (TSTET 20 May 2024)",
    "options": [
      "Xylem",
      "Phloem",
      "Meristematic tissue",
      "Dermal tissue"
    ],
    "correct": "Xylem",
    "explanation": "Xylem is one of the two types of transport tissue in vascular plants. Its primary function is to transport water and dissolved minerals from the roots to the rest of the plant. It also provides physical support. Phloem, the other transport tissue, moves sugars made during photosynthesis from the leaves to other parts of the plant."
  },
  {
    "id": "169",
    "text": "One of the following is NOT a characteristic feature of striated muscles. (TSTET 20 May 2024)",
    "options": [
      "They are unbranched",
      "They have uninucleated cytoplasm",
      "They are Long",
      "They are cylindrical"
    ],
    "correct": "They have uninucleated cytoplasm",
    "explanation": "Striated muscles, also known as skeletal muscles, are long, cylindrical, and unbranched fibers. A key characteristic that distinguishes them is that they are multinucleated, meaning each muscle cell (fiber) contains multiple nuclei. Therefore, the statement that they are uninucleated (having a single nucleus) is incorrect."
  },
  {
    "id": "170",
    "text": "There are thousands of paddy varieties available throughout the world. Oryza Glaberrima variety is cultivated in (TSTET 20 May 2024)",
    "options": [
      "China",
      "Africa",
      "India",
      "Indonesia"
    ],
    "correct": "Africa",
    "explanation": "The two major cultivated rice species are *Oryza sativa* (Asian rice) and *Oryza glaberrima* (African rice). As its common name implies, *Oryza glaberrima* was first domesticated and is primarily cultivated in West Africa. *Oryza sativa* is the species grown throughout Asia and the rest of the world."
  },
  {
    "id": "171",
    "text": "The vein which join the anterior end of the right side of the heart and which collects blood from the anterior parts of the body (head and neck) is (TSTET 20 May 2024)",
    "options": [
      "Septa",
      "Inferior Venacava",
      "Superior Venacava",
      "Aorta"
    ],
    "correct": "Superior Venacava",
    "explanation": "The Superior Vena Cava is a large vein responsible for returning deoxygenated blood from the upper half of the body (head, neck, upper limbs, and chest) to the right atrium of the heart. The Inferior Vena Cava performs the same function for the lower half of the body. The aorta is the main artery that carries oxygenated blood away from the heart."
  },
  {
    "id": "172",
    "text": "The names for cropping seasons, 'Kharif' and 'Rabi' are derived from this language (TSTET 20 May 2024)",
    "options": [
      "Urdu",
      "Arabic",
      "Mandarin",
      "Japanese"
    ],
    "correct": "Arabic",
    "explanation": "The terms 'Kharif' and 'Rabi', used to define the monsoon and winter cropping seasons in the Indian subcontinent, originate from the Arabic language. In Arabic, 'Kharif' translates to 'autumn' and 'Rabi' translates to 'spring', reflecting the harvest seasons for these crops."
  },
  {
    "id": "173",
    "text": "Whenever pollen grains enter our body, they cause allergy due to the presence of these substances (TSTET 20 May 2024)",
    "options": [
      "Magnesium",
      "Carbohydrates",
      "Sulphur",
      "Nitrogenous substances"
    ],
    "correct": "Nitrogenous substances",
    "explanation": "Pollen allergies are triggered by specific allergens present on or within the pollen grain. These allergens are typically proteins or glycoproteins. Proteins are complex molecules made of amino acids, and a key element in amino acids is nitrogen. Therefore, these allergens are classified as nitrogenous substances."
  },
  {
    "id": "174",
    "text": "In 1857, Gregor Johann Mendel started working on the problem of how variations were passed from one generation to the other in-- (TSTET 20 May 2024)",
    "options": [
      "a university",
      "the monastery garden",
      "his personal laboratory",
      "a space lab"
    ],
    "correct": "the monastery garden",
    "explanation": "Gregor Mendel, an Augustinian friar, conducted his pioneering experiments on heredity and genetics between 1856 and 1863. He performed his meticulous work by cross-breeding pea plants in the garden of the St. Thomas's Abbey (monastery) in Brno, now part of the Czech Republic."
  },
  {
    "id": "175",
    "text": "A student will be able to say that \"we wear white, loose cotton clothes in summer\". It is related to (TSTET 20 May 2024)",
    "options": [
      "Application",
      "Knowledge",
      "Analysis",
      "Evaluation"
    ],
    "correct": "Application",
    "explanation": "This question refers to Bloom's taxonomy of educational objectives. The student is not simply recalling a fact (Knowledge), but is using learned scientific principles (e.g., about heat reflection, absorption, and air circulation) to address a practical, real-world situation. This use of abstract concepts in concrete situations is characteristic of the 'Application' level of learning."
  },
  {
    "id": "176",
    "text": "The most appropriate teaching method to teach \"Verify the formula for finding the focal length of a lens\" (TSTET 20 May 2024)",
    "options": [
      "Inductive method",
      "Deductive method",
      "Heuristic method",
      "Lecture method"
    ],
    "correct": "Deductive method",
    "explanation": "The deductive method involves reasoning from general principles to specific instances. In this scenario, the student is provided with the lens formula (a general principle) and is asked to perform an experiment to confirm that it works for a specific lens (a specific instance). This process of 'verification' is a classic example of deductive teaching and learning. The inductive method would involve collecting data first and then deriving the formula."
  },
  {
    "id": "177",
    "text": "Learning the lesson, 'natural resources' inculcates the following value in the students (TSTET 20 May 2024)",
    "options": [
      "Types of renewable resources",
      "Types of non-renewable resources",
      "Use of resources",
      "Conservation of resources"
    ],
    "correct": "Conservation of resources",
    "explanation": "While the lesson would cover factual knowledge like the types and uses of resources, the core educational *value* it aims to instill is the importance of using resources responsibly and preserving them. This ethical principle of stewardship and wise management for the future is best described as the value of conservation."
  },
  {
    "id": "178",
    "text": "Identify the example for controlled experiment from the following (TSTET 20 May 2024)",
    "options": [
      "Do all liquids boil at the same temperature?",
      "What are the common features of insects?",
      "Effect of COVID pandemic on social development of children",
      "Does pesticide insecticide help in increased production of rice?"
    ],
    "correct": "Does pesticide insecticide help in increased production of rice?",
    "explanation": "A controlled experiment is designed to test a specific hypothesis by manipulating an independent variable while keeping all other variables constant. The question about pesticides and rice production can be set up as a controlled experiment: two identical plots of rice are grown, one with pesticide (experimental group) and one without (control group). The other options are either comparative questions, descriptive inquiries, or observational studies, which do not fit the criteria of a controlled experiment."
  },
  {
    "id": "179",
    "text": "Which of the following statements relating to comparison of micro teaching and traditional teaching is correct? (TSTET 20 May 2024)",
    "options": [
      "Traditional teaching is a complex activity, micro teaching is relatively simple",
      "In traditional teaching the normal class size is 5 to 10 students, in micro teaching it is 30 to 40 students",
      "In traditional teaching the duration of the period is 45 to 50 minutes, in micro teaching it is 05 to 10 minutes",
      "In traditional teaching class is conducted in laboratory situation, in micro teaching it is uncontrolled class room situation"
    ],
    "correct": "Traditional teaching is a complex activity, micro teaching is relatively simple",
    "explanation": "Micro-teaching is a teacher training technique that simplifies the normal teaching process. Traditional classroom teaching is complex, requiring the management of a full-length lesson, a large group of students, and multiple teaching skills simultaneously. Micro-teaching scales down these elements—focusing on a single skill, with a small group of peers, for a short duration—making it a simpler, more focused activity designed for practice and feedback."
  },
  {
    "id": "180",
    "text": "While working in a lab if by mistake a person inhales chlorine fumes, the person should be made to smell (TSTET 20 May 2024)",
    "options": [
      "Ethanol",
      "Ammonia",
      "Sodium carbonate",
      "Acetone"
    ],
    "correct": "Ammonia",
    "explanation": "This is a traditional first-aid measure. Chlorine gas (Cl₂) is acidic and reacts with moisture in the lungs to form hydrochloric acid (HCl). Ammonia (NH₃) is a weak base. Inhaling dilute ammonia vapor can help neutralize the acid formed in the respiratory tract, forming harmless ammonium chloride (NH₄Cl), thus mitigating the damage. Modern safety protocols emphasize immediate removal to fresh air and seeking medical attention."
  },
  {
    "id": 181,
    "text": "The period of revolution of the planet Venus is (approximately) (TSTET 01 June 2024)",
    "options": [
      "88 days",
      "225 days",
      "687 days",
      "12 years"
    ],
    "correct": "225 days",
    "explanation": "The period of revolution is the time a planet takes to complete one orbit around the Sun. For Venus, this period is approximately 224.7 Earth days, which rounds to 225 days. 88 days is the orbital period for Mercury, 687 days is for Mars, and approximately 12 years is for Jupiter."
  },
  {
    "id": 182,
    "text": "To find out the density of any liquid, we use (TSTET 01 June 2024)",
    "options": [
      "Hydrometer",
      "Barometer",
      "Odometer",
      "Hygrometer"
    ],
    "correct": "Hydrometer",
    "explanation": "A hydrometer is an instrument used to measure the specific gravity (or relative density) of liquids. A barometer measures atmospheric pressure, an odometer measures distance traveled, and a hygrometer measures humidity."
  },
  {
    "id": 183,
    "text": "The focal length of a lens suggested to a person with Hypermetropia is 75 cm. Find the distance of near point. (TSTET 01 June 2024)",
    "options": [
      "-37.5 cm",
      "37.5 cm",
      "18.75 cm",
      "-18.75 cm"
    ],
    "correct": "37.5 cm",
    "explanation": "For a hypermetropic eye, the lens creates an image of a nearby object (at the normal near point, u = -25 cm) at the person's actual near point (v). Using the lens formula $1/f = 1/v - 1/u$:  Given f = +75 cm (convex lens for hypermetropia) and u = -25 cm.  $1/75 = 1/v - 1/(-25) \\implies 1/75 = 1/v + 1/25 \\implies 1/v = 1/75 - 3/75 = -2/75$. Therefore, $v = -37.5$ cm. The distance of the near point is 37.5 cm."
  },
  {
    "id": 184,
    "text": "Identify the INCORRECT statement among the following. (TSTET 01 June 2024)",
    "options": [
      "Newton's first law of motion apply to a single body.",
      "Newton's second law of motion apply to a single body.",
      "Newton's third law of motion apply to a single body.",
      "Newton's third law of motion applies to an interaction between the two bodies."
    ],
    "correct": "Newton's third law of motion apply to a single body.",
    "explanation": "Newton's third law states that for every action, there is an equal and opposite reaction. This law fundamentally describes the interaction between two bodies; forces always occur in pairs. Therefore, it cannot be applied to a single, isolated body. The first and second laws, however, describe the motion of a single body under the influence of forces."
  },
  {
    "id": 185,
    "text": "In series connection of resistors, which of the following remains constant in the circuit? (TSTET 01 June 2024)",
    "options": [
      "Power",
      "Current",
      "Electro motive force",
      "Voltage"
    ],
    "correct": "Current",
    "explanation": "In a series circuit, the components are connected end-to-end, forming a single path. Because there is only one path for the charge to flow, the electric current is the same at every point in the circuit and through every component. Voltage, however, is divided among the components."
  },
  {
    "id": 186,
    "text": "Identify the correct pair of ore and its metal among the following (TSTET 01 June 2024)",
    "options": [
      "Epsom salt: Mg",
      "Cinnabar: Zn",
      "Haematite: Mn",
      "Rock salt: Ca"
    ],
    "correct": "Epsom salt: Mg",
    "explanation": "Epsom salt is hydrated magnesium sulfate ($MgSO_4 \cdot 7H_2O$), which is a source of Magnesium (Mg). The other pairs are incorrect: Cinnabar ($HgS$) is an ore of Mercury (Hg), Haematite ($Fe_2O_3$) is an ore of Iron (Fe), and Rock salt ($NaCl$) is an ore of Sodium (Na)."
  },
  {
    "id": 187,
    "text": "Identify the values of 'X' and 'Y' in the following chemical reaction. $Na_{2}CO_{3}+\\underline{X}HCl\\rightarrow\\underline{Y}NaCl+H_{2}O+CO_{2}$ (TSTET 01 June 2024)",
    "options": [
      "X=1, Y=1",
      "X=2, Y=1",
      "X=1, Y=2",
      "X=2, Y=2"
    ],
    "correct": "X=2, Y=2",
    "explanation": "To balance the chemical equation: On the reactant side, there are 2 Na atoms. To balance this, Y on the product side must be 2, giving 2 NaCl. Now there are 2 Cl atoms on the product side, so X on the reactant side must be 2 to make 2 HCl. The balanced equation is $Na_{2}CO_{3}+2HCl\\rightarrow 2NaCl+H_{2}O+CO_{2}$."
  },
  {
    "id": 188,
    "text": "The rate of diffusion of gases is (TSTET 01 June 2024)",
    "options": [
      "higher than that of liquids or solids",
      "lower than that of liquids or solids",
      "higher than that of liquids and lower than that of solids",
      "lower than that of liquids and higher than that of solids"
    ],
    "correct": "higher than that of liquids or solids",
    "explanation": "Diffusion is the movement of particles from a region of higher concentration to lower concentration. In gases, particles are far apart and move randomly and rapidly, leading to a very high rate of diffusion. In liquids, particles are closer and move more slowly, resulting in slower diffusion. In solids, particles are fixed in a lattice, making diffusion extremely slow. Thus, gases diffuse the fastest."
  },
  {
    "id": 189,
    "text": "Rancidity is a/an (TSTET 01 June 2024)",
    "options": [
      "Precipitation reaction",
      "Reduction reaction",
      "Oxidation reaction",
      "Neutralization reaction"
    ],
    "correct": "Oxidation reaction",
    "explanation": "Rancidity is the chemical decomposition of fats, oils, and other lipids. It occurs when these substances are exposed to air (oxygen), light, or moisture, causing them to undergo oxidation. This process results in undesirable odors and flavors."
  },
  {
    "id": 190,
    "text": "Atomicity of Sulphur (TSTET 01 June 2024)",
    "options": [
      "Monoatomic",
      "Diatomic",
      "Triatomic",
      "Octatomic"
    ],
    "correct": "Octatomic",
    "explanation": "Atomicity is the number of atoms in a molecule of an element. The most stable allotrope of sulfur is a crowned-ring structure consisting of 8 sulfur atoms. Its molecular formula is $S_8$, making it octatomic."
  },
  {
    "id": 191,
    "text": "The maximum value of 'l' for n=5 (TSTET 01 June 2024)",
    "options": [
      "3",
      "6",
      "4",
      "11"
    ],
    "correct": "4",
    "explanation": "In quantum numbers, 'n' is the principal quantum number and 'l' is the azimuthal quantum number. The value of 'l' depends on 'n' and can range from 0 to (n-1). For n=5, the possible values for 'l' are 0, 1, 2, 3, and 4. The maximum value is therefore 4."
  },
  {
    "id": 192,
    "text": "How many electrons do Group III A elements lose to form stable ions? (TSTET 01 June 2024)",
    "options": [
      "5",
      "2",
      "1",
      "3"
    ],
    "correct": "3",
    "explanation": "Group III A (or Group 13) elements, such as Aluminum (Al), have three valence electrons in their outermost shell. To achieve a stable electron configuration similar to the preceding noble gas, they tend to lose these three electrons, forming a cation with a +3 charge (e.g., $Al^{3+}$)."
  },
  {
    "id": 193,
    "text": "These blood cells move like amoeba to attack and destroy by engulfing the foreign materials inside them and are called scavengers (TSTET 01 June 2024)",
    "options": [
      "Erythrocytes",
      "Monocytes",
      "Lymphocytes",
      "Eosinophils"
    ],
    "correct": "Monocytes",
    "explanation": "Monocytes are a type of white blood cell that are phagocytic, meaning they can ingest foreign particles, pathogens, and dead cells. They move using amoeboid movement and are often called the 'scavengers' of the body. Erythrocytes are red blood cells, and Lymphocytes are involved in the specific immune response."
  },
  {
    "id": 194,
    "text": "Identify the most forgetful animal (TSTET 01 June 2024)",
    "options": [
      "Mouse",
      "Cat",
      "Rabbit",
      "Squirrel"
    ],
    "correct": "Squirrel",
    "explanation": "Squirrels are famously known for their habit of caching (burying) nuts for winter. However, they fail to recover a significant portion of these nuts, effectively 'forgetting' where they buried them. This behavior plays a vital role in forest regeneration as the forgotten nuts sprout into new trees."
  },
  {
    "id": 195,
    "text": "Amoeba keeps on changing its shape by protruding out its body. These projections that help in its locomotion are called (TSTET 01 June 2024)",
    "options": [
      "Pseudopodia",
      "Tentacles",
      "Fins",
      "Cilia"
    ],
    "correct": "Pseudopodia",
    "explanation": "Amoeba moves and feeds using pseudopodia, which means 'false feet'. These are temporary, cytoplasm-filled extensions of the cell body that can be projected and retracted. Tentacles, fins, and cilia are specialized structures for movement found in other, more complex organisms."
  },
  {
    "id": 196,
    "text": "Nimbin, an alkaloid which is used as an Antiseptic is produced in the seeds, bark and leaves of (TSTET 01 June 2024)",
    "options": [
      "Cinchona officinalis",
      "Papaver somniferum",
      "Azadirachta indica",
      "Datura stramonium"
    ],
    "correct": "Azadirachta indica",
    "explanation": "Azadirachta indica is the botanical name for the Neem tree. It is well-known for producing a variety of compounds with medicinal properties, including Nimbin, which has antiseptic, anti-inflammatory, and other beneficial effects. Cinchona produces quinine, Papaver somniferum produces opium, and Datura produces tropane alkaloids."
  },
  {
    "id": 197,
    "text": "The type of reproductive process seen in Hydra is (TSTET 01 June 2024)",
    "options": [
      "Regeneration",
      "Fission",
      "Fragmentation",
      "Budding"
    ],
    "correct": "Budding",
    "explanation": "Hydra reproduces asexually primarily through budding. In this process, a new individual develops from an outgrowth or bud on the parent's body. The bud grows, develops tentacles and a mouth, and then detaches to live independently. While Hydra also has strong regenerative capabilities, budding is its characteristic mode of reproduction."
  },
  {
    "id": 198,
    "text": "One of the following does not belong to classification of cell types suggested by Woese (TSTET 01 June 2024)",
    "options": [
      "Monera",
      "the Archaea",
      "the Bacteria",
      "the Eukarya"
    ],
    "correct": "Monera",
    "explanation": "Carl Woese proposed the three-domain system of classification: Bacteria, Archaea, and Eukarya. This system replaced the older five-kingdom model. Monera was a kingdom in the five-kingdom system that contained all prokaryotes. Woese's research showed that prokaryotes were divisible into two distinct domains (Bacteria and Archaea), making the kingdom Monera obsolete in his classification."
  },
  {
    "id": 199,
    "text": "This vitamin helps bones and skin in remaining healthy (TSTET 01 June 2024)",
    "options": [
      "Vitamin D",
      "Vitamin A",
      "Vitamin K",
      "Vitamin B"
    ],
    "correct": "Vitamin D",
    "explanation": "Vitamin D plays a critical role in bone health by promoting the absorption of calcium and phosphorus, essential minerals for bone mineralization. Its deficiency can lead to conditions like rickets. While other vitamins also support skin and bone health, Vitamin D is the most directly linked to maintaining strong bones."
  },
  {
    "id": 200,
    "text": "The largest single mass of granite in the world is found in (TSTET 01 June 2024)",
    "options": [
      "Australia",
      "China",
      "Bhutan",
      "USA"
    ],
    "correct": "USA",
    "explanation": "El Capitan, located in Yosemite National Park, California, USA, is widely considered to be the largest exposed granite monolith in the world. It is a single, continuous block of granite, making it a famous landmark for climbers and geologists."
  },
  {
    "id": 201,
    "text": "These are the longest cells in human body (TSTET 01 June 2024)",
    "options": [
      "Nerve cells",
      "Bone cells",
      "Muscle cells",
      "Blood cells"
    ],
    "correct": "Nerve cells",
    "explanation": "Nerve cells, or neurons, are the longest cells in the human body. The axon of a single neuron, such as one in the sciatic nerve, can extend from the base of the spine down to the toes, reaching a length of over a meter."
  },
  {
    "id": 202,
    "text": "One of the following is not a natural indicator (TSTET 01 June 2024)",
    "options": [
      "China rose",
      "Turmeric",
      "Phenolphthalein",
      "Litmus"
    ],
    "correct": "Phenolphthalein",
    "explanation": "Phenolphthalein is a synthetic, or man-made, chemical compound used as an acid-base indicator. The other options—China rose (hibiscus), turmeric, and litmus (from lichens)—are all derived from natural sources."
  },
  {
    "id": 203,
    "text": "The first person to explain the process of fermentation (TSTET 01 June 2024)",
    "options": [
      "John Dalton",
      "Louis Pasteur",
      "Alexander Fleming",
      "Dmitri Mendeleev"
    ],
    "correct": "Louis Pasteur",
    "explanation": "Louis Pasteur, through his experiments in the 1850s, demonstrated that fermentation is a biological process caused by living microorganisms like yeast, not a simple chemical reaction as was previously believed. This discovery was foundational to the field of microbiology."
  },
  {
    "id": 204,
    "text": "Choose the incorrect pair from the following. (TSTET 01 June 2024)",
    "options": [
      "Producers - Grass",
      "Primary consumers - Deer",
      "Secondary consumers - Fox",
      "Tertiary consumers - Rabbit"
    ],
    "correct": "Tertiary consumers - Rabbit",
    "explanation": "This question refers to trophic levels. A rabbit is a herbivore that eats producers (like grass), making it a primary consumer. A tertiary consumer is an animal that feeds on secondary consumers. Therefore, the pair 'Tertiary consumers - Rabbit' is incorrect."
  },
  {
    "id": 205,
    "text": "To develop the habit of observation, identification, classification etc., the best method to teach Science is (TSTET 01 June 2024)",
    "options": [
      "Lecture method",
      "Laboratory method",
      "Lecture cum demonstration method",
      "Historical method"
    ],
    "correct": "Laboratory method",
    "explanation": "The laboratory method is a hands-on approach where students actively engage in experiments and activities. This direct experience is essential for developing key scientific process skills such as making careful observations, identifying variables and substances, and classifying organisms or data based on observed characteristics."
  },
  {
    "id": 206,
    "text": "The following is not a characteristic of a good test (TSTET 01 June 2024)",
    "options": [
      "Validity",
      "Reliability",
      "Objectivity",
      "Subjectivity"
    ],
    "correct": "Subjectivity",
    "explanation": "Validity (measures what it's supposed to), Reliability (gives consistent results), and Objectivity (scoring is not influenced by bias) are all characteristics of a good test. Subjectivity, where scoring depends on the scorer's personal judgment or opinion, is the opposite of objectivity and is considered a flaw in assessment design as it can lead to unfair and inconsistent results."
  },
  {
    "id": 207,
    "text": "The first step in Herbartian steps of lesson planning is (TSTET 01 June 2024)",
    "options": [
      "Preparation",
      "Presentation",
      "Association",
      "Generalization"
    ],
    "correct": "Preparation",
    "explanation": "The Herbartian model of lesson planning consists of five steps. The very first step is Preparation (or Introduction), where the teacher prepares the students for new knowledge by linking it to their previous experiences and arousing their curiosity about the topic."
  },
  {
    "id": 208,
    "text": "Providing freedom to the students to ask questions and take part in discussions. This quality refers to a (TSTET 01 June 2024)",
    "options": [
      "good science textbook",
      "good science teacher",
      "good science curriculum",
      "good science laboratory"
    ],
    "correct": "good science teacher",
    "explanation": "Fostering an open, inquiry-based classroom environment where students feel safe and encouraged to ask questions and participate actively in discussions is a key attribute of a good science teacher. This pedagogical skill promotes critical thinking and deeper understanding."
  },
  {
    "id": 209,
    "text": "Learning science through investigation is (TSTET 01 June 2024)",
    "options": [
      "Heuristic method",
      "Project method",
      "Demonstration method",
      "Assignment method"
    ],
    "correct": "Heuristic method",
    "explanation": "The Heuristic method is a problem-solving approach where students learn by discovering things for themselves through investigation. The term 'heuristic' originates from a Greek word meaning 'to find' or 'to discover'. The teacher acts as a guide, encouraging students to find answers to problems on their own."
  },
  {
    "id": 210,
    "text": "The component of a science kit which is used to make simple electric circuits is (TSTET 01 June 2024)",
    "options": [
      "Connecting wires",
      "Copper Sulphate",
      "Iron filings",
      "Magnesium ribbon"
    ],
    "correct": "Connecting wires",
    "explanation": "To construct a simple electric circuit, a conductive path is needed to connect a power source (like a battery) to a load (like a bulb). Connecting wires provide this path for the electric current to flow. The other items are used for different experiments: Copper Sulphate for electrolysis, Iron filings for magnetism, and Magnesium ribbon for chemical reactions."
  },
  {
    "id": 211,
    "text": "Choose the correct pair of short term crop. (TSTET 2017)",
    "options": [
      "Jowar-Green gram.",
      "Green gram-Black gram.",
      "Black gram-Red gram.",
      "Red gram-Jowar."
    ],
    "correct": "Green gram-Black gram.",
    "explanation": "Short-term or short-duration crops are those that have a very short life cycle and are ready for harvest within a few months. Both Green gram (Moong dal) and Black gram (Urad dal) are pulses that typically mature in 60-90 days. In contrast, Red gram (Pigeon pea/Toor dal) and Jowar (Sorghum) are long-duration crops that take significantly longer to mature."
  },
  {
    "id": 212,
    "text": "Identify the odd disease based on the group of causative agent. (TSTET 2017)",
    "options": [
      "Typhoid",
      "Cholera",
      "Tuberculosis",
      "Swine-flu"
    ],
    "correct": "Swine-flu",
    "explanation": "The basis for grouping is the type of pathogen causing the disease. Typhoid (caused by Salmonella typhi), Cholera (caused by Vibrio cholerae), and Tuberculosis (caused by Mycobacterium tuberculosis) are all bacterial diseases. Swine flu, however, is a viral disease caused by the H1N1 influenza virus. Therefore, Swine flu is the odd one out."
  },
  {
    "id": 213,
    "text": "These are called microscopic policeman. (TSTET 2017)",
    "options": [
      "Erythrocytes",
      "Blood platelets",
      "Neutrophils",
      "Monocytes"
    ],
    "correct": "Neutrophils",
    "explanation": "Neutrophils are a type of white blood cell that act as the immune system's first line of defense. They perform phagocytosis, which means they engulf and destroy invading microorganisms like bacteria. This protective, combative role has earned them the nickname 'microscopic policemen' of the body. Erythrocytes carry oxygen, and platelets help in clotting."
  },
  {
    "id": 214,
    "text": "Animal with sharp incisors..... (TSTET 2017)",
    "options": [
      "Lion",
      "Rat",
      "Cat",
      "Dog"
    ],
    "correct": "Rat",
    "explanation": "Incisors are the front teeth used for cutting and gnawing. Rodents, such as rats, are characterized by their pair of large, sharp, continuously growing incisors that are specialized for gnawing through hard materials. Carnivores like lions, cats, and dogs have more prominent canines for tearing flesh, while their incisors are comparatively smaller."
  },
  {
    "id": 215,
    "text": "Find the incorrect statement. (TSTET 2017)",
    "options": [
      "Abiotic and biotic factors are structural components of ecosystem.",
      "Detritus food chain starts from litter.",
      "'Aphids' occupy \"2nd trophic level\" in the food chain.",
      "Herbivores occupy first trophic level in a food chain."
    ],
    "correct": "Herbivores occupy first trophic level in a food chain.",
    "explanation": "This statement is incorrect. Trophic levels describe the position an organism occupies in a food chain. The first trophic level is always occupied by producers (plants, algae) that make their own food. Herbivores are primary consumers because they feed on producers, so they occupy the second trophic level."
  },
  {
    "id": 216,
    "text": "The cell-organelle which helps in manufacturing of lipids.... (TSTET 2017)",
    "options": [
      "Golgi complex",
      "Chloroplast",
      "Smooth endoplasmic Reticulum.",
      "Mitochondrion"
    ],
    "correct": "Smooth endoplasmic Reticulum.",
    "explanation": "The Smooth Endoplasmic Reticulum (SER) is a network of membranes inside a cell whose functions include the synthesis of lipids, steroid hormones, and the detoxification of harmful metabolic byproducts. The Golgi complex modifies and packages proteins, chloroplasts perform photosynthesis, and mitochondria are responsible for cellular respiration."
  },
  {
    "id": 217,
    "text": "The stage in mitosis in which chromosomes are aligned at the equatorial plane of the cell. (TSTET 2017)",
    "options": [
      "Prophase",
      "Metaphase",
      "Anaphase",
      "Telophase"
    ],
    "correct": "Metaphase",
    "explanation": "During Metaphase, the second stage of mitosis, the spindle fibers attach to the centromeres of the chromosomes, which then align themselves along the metaphase plate, an imaginary line that is equidistant from the two poles of the cell. This alignment ensures that each new daughter cell receives an identical set of chromosomes."
  },
  {
    "id": 218,
    "text": "'Edema' is related with this system. (TSTET 2017)",
    "options": [
      "Digestive system",
      "Respiratory system",
      "Nervous system",
      "Lymphatic system"
    ],
    "correct": "Lymphatic system",
    "explanation": "Edema is swelling caused by excess fluid trapped in the body's tissues. The lymphatic system's primary function is to collect this excess interstitial fluid (lymph) and return it to the bloodstream. When the lymphatic system is damaged or blocked, it cannot drain the fluid properly, leading to its accumulation and causing edema."
  },
  {
    "id": 219,
    "text": "Water reaches top of the tall trees due to the phenomenon .... (TSTET 2017)",
    "options": [
      "Transpiration",
      "Respiration",
      "Photosynthesis",
      "Guttation"
    ],
    "correct": "Transpiration",
    "explanation": "The primary driving force for the upward movement of water in tall trees is the transpirational pull. Transpiration is the evaporation of water from the surfaces of leaves. This process creates a negative pressure or tension in the xylem vessels, which pulls the continuous column of water up from the roots. This mechanism is known as the cohesion-tension theory."
  },
  {
    "id": 220,
    "text": "Match the animals with their excretory products and choose the correct answer. I. Urea (A) Freshwater fish II. Uric acid (B) Frog III. Ammonia (C) Snake (TSTET 2017)",
    "options": [
      "I-B, II-C, III-A",
      "I-A, II-C, III-B",
      "I-B, II-A, III-C",
      "I-A, II-B, III-C"
    ],
    "correct": "I-B, II-C, III-A",
    "explanation": "The main nitrogenous waste product depends on the animal's habitat and water availability.\n- (III) Ammonia is highly toxic but water-soluble, so it is excreted by aquatic animals like (A) Freshwater fish.\n- (I) Urea is less toxic and requires some water for excretion, typical for terrestrial animals and amphibians like (B) Frogs.\n- (II) Uric acid requires very little water and is excreted as a paste, which is an adaptation for water conservation in reptiles like (C) Snakes.\nTherefore, the correct match is Urea-Frog (I-B), Uric acid-Snake (II-C), and Ammonia-Freshwater fish (III-A)."
  },
  {
    "id": 221,
    "text": "This is a modified stem. (TSTET 2017)",
    "options": [
      "Carrot",
      "Radish",
      "Potato",
      "Sweet potato"
    ],
    "correct": "Potato",
    "explanation": "A potato is a stem tuber, which is a modified underground stem that stores food. The 'eyes' of a potato are nodes with buds that can sprout new stems. In contrast, carrots and radishes are modified taproots, and a sweet potato is a modified tuberous root."
  },
  {
    "id": 222,
    "text": "Smooth muscles are found in (TSTET 2017)",
    "options": [
      "Arm",
      "Leg",
      "Heart",
      "Alimentary canal"
    ],
    "correct": "Alimentary canal",
    "explanation": "Smooth muscles are involuntary muscles found in the walls of internal hollow organs. The alimentary canal (digestive tract) contains smooth muscle that contracts rhythmically (peristalsis) to move food along. Arm and leg muscles are voluntary skeletal muscles. The heart is composed of a specialized involuntary muscle called cardiac muscle."
  },
  {
    "id": 223,
    "text": "Find the time period of the wave, whose frequency is 400 Hz. (TSTET 2017)",
    "options": [
      "0.0033 s",
      "0.0011 s",
      "0.0025 s",
      "0.0044 s"
    ],
    "correct": "0.0025 s",
    "explanation": "The time period (T) of a wave is the reciprocal of its frequency (f). The relationship is given by the formula T = 1/f. Given the frequency f = 400 Hz, the time period is T = 1 / 400 = 0.0025 seconds."
  },
  {
    "id": 224,
    "text": "Which of the following friction has self adjusting force? (TSTET 2017)",
    "options": [
      "Fluid friction",
      "Static friction",
      "Sliding friction",
      "Rolling friction"
    ],
    "correct": "Static friction",
    "explanation": "Static friction is the force that opposes the initiation of motion between two surfaces in contact. It is a self-adjusting force because its magnitude is exactly equal and opposite to the applied force, up to a maximum limit (the limiting friction). If the applied force increases, the static friction also increases to keep the object at rest, until the applied force exceeds the maximum static friction."
  },
  {
    "id": 225,
    "text": "The minimum distance from real object to a real image in a concave mirror is (TSTET 2017)",
    "options": [
      "f",
      "2f",
      "f/2",
      "0"
    ],
    "correct": "0",
    "explanation": "For a concave mirror, the minimum distance between a real object and its real image occurs when the object is placed at the center of curvature (C). At this specific point (which is at a distance of 2f from the mirror), the mirror forms a real, inverted image of the same size at the very same location (C). Therefore, the distance between the object and the image is zero."
  },
  {
    "id": 226,
    "text": "We feel warm after finishing our bath under the shower on a hot day, is due to .... (TSTET 2017)",
    "options": [
      "Humidity",
      "Condensation",
      "Evaporation",
      "Freezing"
    ],
    "correct": "Condensation",
    "explanation": "Condensation is the process where water vapor turns into liquid water, and it is an exothermic process, meaning it releases heat (latent heat of vaporization). On a hot, humid day, the air contains a lot of water vapor. After a shower, your skin and the water on it might be slightly cooler than the surrounding air. This can cause the water vapor in the air to condense on your skin, releasing heat and making you feel warm."
  },
  {
    "id": 227,
    "text": "The lens which can form real and virtual images in air, is (TSTET 2017)",
    "options": [
      "Plano concave",
      "Plano convex",
      "Bi concave",
      "Bi convex"
    ],
    "correct": "Bi convex",
    "explanation": "A converging lens, such as a bi-convex or plano-convex lens, is capable of forming both real and virtual images. It forms a real, inverted image when the object is placed outside the focal length. It forms a virtual, erect, and magnified image when the object is placed within the focal length. Diverging lenses (concave) can only form virtual images."
  },
  {
    "id": 228,
    "text": "Find the length of the conductor which is moving with a speed of 10 m/s in the direction perpendicular to the direction of magnetic field of induction 0.6T, if it induces an emf of 6V between the ends of the conductor. (TSTET 2017)",
    "options": [
      "0.6 m",
      "6 m",
      "1 m",
      "1.2 m"
    ],
    "correct": "1 m",
    "explanation": "The induced electromotive force (emf, ε) in a conductor of length L moving with velocity v perpendicular to a magnetic field B is given by the formula for motional emf: ε = B * L * v. We need to find the length L. Rearranging the formula gives L = ε / (B * v). Plugging in the given values: L = 6 V / (0.6 T * 10 m/s) = 6 / 6 = 1 meter."
  },
  {
    "id": 229,
    "text": "The boiling point of Argon is (TSTET 2017)",
    "options": [
      "-183°C",
      "-186°C",
      "-196°C",
      "-193°C"
    ],
    "correct": "-186°C",
    "explanation": "This is a factual question about the physical properties of noble gases. The boiling point of Argon (Ar) is -185.8°C, which is rounded to -186°C. For comparison, the boiling point of Oxygen is -183°C and that of Nitrogen is -196°C."
  },
  {
    "id": 230,
    "text": "Power supply to our home from the electric pole will be interrupted due to formation of the metal oxide layer on the electric wire. The metal oxide is... (TSTET 2017)",
    "options": [
      "Electric wire breaks up.",
      "Electric wire damages.",
      "Works as electrical insulator.",
      "None of these."
    ],
    "correct": "Works as electrical insulator.",
    "explanation": "The question asks for the property of the metal oxide layer that causes the interruption. Most metal oxides, such as aluminum oxide which forms on overhead power lines, are poor conductors of electricity. This oxide layer acts as an electrical insulator, increasing the resistance at connection points and impeding the flow of current, which can interrupt the power supply."
  },
  {
    "id": 231,
    "text": "Arrange the following in the increasing order of their pH value. (a) gastric fluid (b) milk of Magnesia (c) blood (d) lemon juice (TSTET 2017)",
    "options": [
      "a, b, d, c",
      "a, d, b, c",
      "a, c, b, d",
      "a, d, c, b"
    ],
    "correct": "a, d, c, b",
    "explanation": "Increasing order of pH means arranging from most acidic (lowest pH) to most alkaline (highest pH). The approximate pH values are:\n- (a) Gastric fluid: pH ~ 1.5-3.5\n- (d) Lemon juice: pH ~ 2-3\n- (c) Blood: pH ~ 7.4\n- (b) Milk of Magnesia: pH ~ 10.5\nTherefore, the correct increasing order of pH is gastric fluid, lemon juice, blood, and finally milk of Magnesia (a, d, c, b)."
  },
  {
    "id": 232,
    "text": "In the electro magnetic spectrum, which of the following rays have more wavelength, is .... (TSTET 2017)",
    "options": [
      "Gamma-rays",
      "IR-rays",
      "X-rays",
      "Radio-waves"
    ],
    "correct": "Radio-waves",
    "explanation": "The electromagnetic spectrum is ordered by wavelength. In order of increasing wavelength, the sequence is: Gamma rays, X-rays, Ultraviolet, Visible light, Infrared (IR), Microwaves, Radio waves. Of the options provided, Radio waves have the longest (more) wavelength and lowest frequency."
  },
  {
    "id": 233,
    "text": "Element with atomic number 15 and mass number 31 is present in (TSTET 2017)",
    "options": [
      "Group 15 and Period 4",
      "Group 15 and Period 3",
      "Group 5 and Period 3",
      "Group 5 and Period 4"
    ],
    "correct": "Group 15 and Period 3",
    "explanation": "The atomic number 15 corresponds to the element Phosphorus (P). Its electron configuration is 1s² 2s² 2p⁶ 3s² 3p³.\n- The Period is determined by the highest principal energy level (n), which is 3. So, it is in Period 3.\n- Since the last electron enters the p-orbital, it is a p-block element. The Group number for p-block elements is 10 + (number of valence electrons). Phosphorus has 5 valence electrons (2 in 3s and 3 in 3p). Thus, the group is 10 + 5 = 15."
  },
  {
    "id": 234,
    "text": "We get Silver metal (Ag) in the form of precipitation by the reaction of dicyanoargentate ions with this powder, is (TSTET 2017)",
    "options": [
      "Aluminium dust",
      "Copper dust",
      "Magnesium dust",
      "Zinc dust"
    ],
    "correct": "Zinc dust",
    "explanation": "This question describes a key step in the cyanide process (hydrometallurgy) for extracting silver. Silver is leached from its ore using a cyanide solution to form a soluble complex, dicyanoargentate(I) ($[Ag(CN)₂]⁻$). To recover the silver, a more electropositive (more reactive) metal is added to displace it. Zinc is commonly used for this precipitation reaction: $2[Ag(CN)₂]⁻(aq) + Zn(s) → [Zn(CN)₄]²⁻(aq) + 2Ag(s)$."
  },
  {
    "id": 235,
    "text": "Formative evaluation is done .... (TSTET 2017)",
    "options": [
      "Before starting the instruction.",
      "During the process of instruction.",
      "After the completion of the term.",
      "Before admission into a course."
    ],
    "correct": "During the process of instruction.",
    "explanation": "Formative evaluation, or assessment for learning, is an ongoing process that occurs throughout a course or unit. Its purpose is to monitor student learning and provide continuous feedback to both students and teachers to improve the teaching and learning process. In contrast, summative evaluation occurs at the end of an instructional period to assess what has been learned."
  },
  {
    "id": 236,
    "text": "Incorrect statement with regards to Audio-visual aids. (TSTET 2017)",
    "options": [
      "They motivate the students.",
      "They are not accordance with the principle of concrete to abstract.",
      "They speed up learning.",
      "They help in presenting which can not be seen with un-aided eye."
    ],
    "correct": "They are not accordance with the principle of concrete to abstract.",
    "explanation": "This statement is incorrect. A key pedagogical advantage of audio-visual aids is that they align perfectly with the principle of teaching from concrete to abstract. They provide concrete, real-world examples (like videos, images, and models) that make abstract concepts easier for students to understand and internalize. The other three statements are correct benefits of using AV aids."
  },
  {
    "id": 237,
    "text": "This is not a suitable role for a science teacher. (TSTET 2017)",
    "options": [
      "Facilitator",
      "Financer",
      "Manager",
      "Counsellor"
    ],
    "correct": "Financer",
    "explanation": "A modern science teacher plays many roles: a facilitator of learning, a manager of the classroom and lab activities, and a counsellor who guides students. However, acting as a 'Financer'—providing personal funds for educational activities—is not a professional role or expectation of a teacher. School resources are managed through official channels."
  },
  {
    "id": 238,
    "text": "When a student stopped using plastic covers after listening to the lesson 'Synthetic fibres and plastics', the objective achieved is..... (TSTET 2017)",
    "options": [
      "Responding",
      "Valuing",
      "Characterisation",
      "Organisation"
    ],
    "correct": "Characterisation",
    "explanation": "This question relates to the levels of the Affective Domain. 'Characterisation' is the highest level, where a value becomes an integral part of an individual's personality and consistently guides their behavior. The student's action of completely stopping the use of plastic bags indicates that the value of environmental consciousness has been internalized and is now part of their character, influencing their daily life."
  },
  {
    "id": 239,
    "text": "We can not say exactly that construction of knowledge taken place in the situation. (TSTET 2017)",
    "options": [
      "If the student reported the concept taught by the teacher, either in the class or in the examination, without any mistakes.",
      "If the student invents new things by applying his previous experience.",
      "If the student defined the concepts by discussing in peer group and with his previous experience.",
      "If the student applied the learned concepts in new situations."
    ],
    "correct": "If the student reported the concept taught by the teacher, either in the class or in the examination, without any mistakes.",
    "explanation": "Construction of knowledge (constructivism) is an active process of creating meaning from experiences. Applying concepts, inventing, and discussing to define are all active processes that demonstrate understanding. However, simply reporting or reciting a concept without mistakes is a sign of rote memorization, which can occur without any real understanding or knowledge construction."
  },
  {
    "id": 240,
    "text": "Which of the following statement is not correct relating to science kits ? (TSTET 2017)",
    "options": [
      "These kits act like small laboratories.",
      "These kits are useful in schools where there are no laboratories.",
      "These kits are designed to carry anywhere easily.",
      "These kits are designed for teachers."
    ],
    "correct": "These kits are designed for teachers.",
    "explanation": "This statement is incorrect. While teachers guide their use, science kits are fundamentally designed for students. Their purpose is to provide students with hands-on materials to conduct experiments and engage in active learning, making them student-centric tools. The other statements are all correct features of science kits: they are like portable mini-labs, especially useful for schools lacking full lab facilities."
  },
  {
    "id": 241,
    "text": "The force to be applied by a mechanic on a hydraulic piston of 4 sq cm cross-sectional area to lift an 8-ton truck on the other piston of 2 sq m cross-sectional area of a hydraulic jack is... (TSTET 2016)",
    "options": [
      "8 kg wt",
      "1.6 kg wt",
      "3.3 kg wt",
      "32 kg wt"
    ],
    "correct": "1.6 kg wt",
    "explanation": "This problem is an application of Pascal's principle, which states that pressure applied to an enclosed fluid is transmitted undiminished to every portion of the fluid and the walls of the containing vessel. For a hydraulic jack, this means the pressure on the small piston ($P_1$) equals the pressure on the large piston ($P_2$). The formula is $F_1/A_1 = F_2/A_2$. Here, $F_2$ is the weight of the truck (8 tons = 8000 kg), $A_2$ is the area of the large piston (2 $m^2$), and $A_1$ is the area of the small piston (4 $cm^2$ = 0.0004 $m^2$). Rearranging the formula to find the force to be applied ($F_1$): $F_1 = F_2 \times (A_1 / A_2) = 8000 \text{ kg} \times (0.0004 m^2 / 2 m^2) = 8000 \times 0.0002 = 1.6$ kg wt."
  },
  {
    "id": 242,
    "text": "The reason for the withdrawal of planetary status to Pluto in the 26th general assembly of the IAU is... (TSTET 2016)",
    "options": [
      "it is a dark, cold, dwarf and distant celestial object",
      "it has an orbit resembling that of a comet",
      "NASA observations proved that it is not a planet",
      "it crosses other planetary orbit"
    ],
    "correct": "it crosses other planetary orbit",
    "explanation": "In 2006, the International Astronomical Union (IAU) defined a 'planet' as a celestial body that (a) is in orbit around the Sun, (b) has sufficient mass for its self-gravity to overcome rigid body forces so that it assumes a hydrostatic equilibrium (nearly round) shape, and (c) has 'cleared the neighborhood' around its orbit. Pluto meets the first two criteria but fails the third because its highly elliptical orbit crosses the orbit of Neptune, meaning it has not cleared its orbital path of other large objects."
  },
  {
    "id": 243,
    "text": "The superiority of a concave mirror over a plane mirror, convex mirror, or a concave lens is... (TSTET 2016)",
    "options": [
      "it can form an image of any characteristic like erect-invert; virtual-real; magnified-diminished",
      "unlike others, only a concave mirror can form a clear focused image on the screen",
      "it is widely used more than others in day-to-day life situations",
      "for any position of the object, it forms an image on the screen"
    ],
    "correct": "it can form an image of any characteristic like erect-invert; virtual-real; magnified-diminished",
    "explanation": "A concave mirror is uniquely versatile. Depending on the object's position relative to the focus and center of curvature, it can form real and inverted images (that can be magnified, diminished, or the same size) as well as a virtual, erect, and magnified image. In contrast, a convex mirror and a concave lens always form virtual, erect, and diminished images, while a plane mirror always forms a virtual, erect, and same-sized image. This ability to produce a wide range of image types is its key advantage."
  },
  {
    "id": 244,
    "text": "If A is aluminium; B is brass; C is copper; G is glass; and K is kerosene, the correct ascending order of their specific heats in cal/g°C is... (TSTET 2016)",
    "options": [
      "B, C, G, A, K",
      "G, A, C, K, B",
      "C, B, A, G, K",
      "A, B, C, G, K"
    ],
    "correct": "B, C, G, A, K",
    "explanation": "Specific heat is the amount of heat required to raise the temperature of one gram of a substance by one degree Celsius. The approximate specific heat values in cal/g°C are: Brass (B) ≈ 0.091, Copper (C) ≈ 0.092, Glass (G) ≈ 0.20, Aluminium (A) ≈ 0.215, and Kerosene (K) ≈ 0.50. Arranging these from the smallest to the largest value gives the ascending order: Brass, Copper, Glass, Aluminium, Kerosene (B, C, G, A, K)."
  },
  {
    "id": 245,
    "text": "The odd term of the following, while describing the term amplitude, is... (TSTET 2016)",
    "options": [
      "density",
      "pressure",
      "loudness",
      "displacement"
    ],
    "correct": "loudness",
    "explanation": "Amplitude is a physical measure of a wave's intensity. It can be described as the maximum displacement from the equilibrium position. For sound waves, it is also described as the maximum change in pressure or density. Loudness, however, is the subjective human perception of sound intensity (amplitude). While loudness is directly related to amplitude (a higher amplitude is perceived as louder), it is a perceptual quality, not a direct physical measure used to define amplitude itself, making it the odd one out."
  },
  {
    "id": 246,
    "text": "The power of a cyclist having 40 kg weight, while he raises the velocity of his 40 kg weight bicycle from 3 m/sec to 5 m/sec in 8 seconds is... (TSTET 2016)",
    "options": [
      "5.12 k watts",
      "640 watts",
      "80 watts",
      "170 joules"
    ],
    "correct": "80 watts",
    "explanation": "Power is the rate at which work is done (Work/Time). The work done to change the velocity of an object is equal to its change in kinetic energy ($\Delta KE$). First, find the total mass: $m = m_{cyclist} + m_{bicycle} = 40 \text{ kg} + 40 \text{ kg} = 80 \text{ kg}$. Next, calculate the change in kinetic energy: $\Delta KE = \frac{1}{2}m v_f^2 - \frac{1}{2}m v_i^2 = \frac{1}{2}(80)(5^2 - 3^2) = 40(25 - 9) = 40(16) = 640$ Joules. This is the work done. Finally, calculate the power: $P = \text{Work} / \text{Time} = 640 \text{ J} / 8 \text{ s} = 80$ Watts."
  },
  {
    "id": 247,
    "text": "The force acting on a 5 m long conductor when 2 A electric current flows through it and a 4T magnetic field is observed at a 30° angle with the conductor is... (TSTET 2016)",
    "options": [
      "2.5 N",
      "20 N",
      "5 N",
      "1.6 N"
    ],
    "correct": "20 N",
    "explanation": "The magnetic force on a straight current-carrying conductor in a uniform magnetic field is given by the formula $F = B \cdot I \cdot L \cdot \sin(\theta)$, where B is the magnetic field strength, I is the current, L is the length of the conductor, and $\theta$ is the angle between the current direction and the magnetic field. Plugging in the given values: $F = (4 \text{ T}) \times (2 \text{ A}) \times (5 \text{ m}) \times \sin(30°)$. Since $\sin(30°) = 0.5$, the calculation is $F = 4 \times 2 \times 5 \times 0.5 = 40 \times 0.5 = 20$ N."
  },
  {
    "id": 248,
    "text": "If the pOH of an aqueous hypochlorous acid is calculated as 8.64, the pH value of that solution is... (TSTET 2016)",
    "options": [
      "6.36",
      "6.36 moles",
      "5.46×10⁻¹⁴ ions",
      "5.36"
    ],
    "correct": "5.36",
    "explanation": "The relationship between pH and pOH in an aqueous solution at 25°C is given by the simple formula: $pH + pOH = 14$. To find the pH, you can rearrange the formula to $pH = 14 - pOH$. Given that the pOH is 8.64, the calculation is $pH = 14 - 8.64 = 5.36$. Since hypochlorous acid is an acid, a pH value below 7 is expected."
  },
  {
    "id": 249,
    "text": "The quantity of carbon dioxide evolved during complete combustion of 23 gm of ethanol is... (TSTET 2016)",
    "options": [
      "88 g",
      "22.4 lit",
      "44.8 lit",
      "3 moles"
    ],
    "correct": "88 g",
    "explanation": "Note: There is an error in the question as printed; it should state 46 g of ethanol for the official answer to be correct. The balanced equation for the combustion of ethanol is $C_2H_5OH + 3O_2 \rightarrow 2CO_2 + 3H_2O$. The molar mass of ethanol ($C_2H_5OH$) is 46 g/mol, and the molar mass of carbon dioxide ($CO_2$) is 44 g/mol. According to the equation, 1 mole (46 g) of ethanol produces 2 moles of $CO_2$. The mass of 2 moles of $CO_2$ is $2 \times 44 = 88$ g. The official answer key indicates 88 g is correct, implying the question intended to use 46 g of ethanol."
  },
  {
    "id": 250,
    "text": "The maximum number of all orbitals in the 4th orbit of an atom are... (TSTET 2016)",
    "options": [
      "16",
      "32",
      "7",
      "14"
    ],
    "correct": "16",
    "explanation": "The principal energy level (orbit) is denoted by 'n'. For the 4th orbit, n=4. The total number of orbitals in any given energy level 'n' is calculated by the formula $n^2$. Therefore, for n=4, the number of orbitals is $4^2 = 16$. These are distributed among the sublevels as follows: one 4s orbital, three 4p orbitals, five 4d orbitals, and seven 4f orbitals ($1+3+5+7=16$). The number 32 represents the maximum number of electrons ($2n^2$) in that orbit."
  },
  {
    "id": 251,
    "text": "The element that cannot be fit in a Dobereiner triad among the following is... (TSTET 2016)",
    "options": [
      "Mn",
      "Co",
      "Cr",
      "Fe"
    ],
    "correct": "Mn",
    "explanation": "This question is somewhat ambiguous. Dobereiner's triads are groups of three elements with similar properties, where the atomic mass of the central element is the average of the other two. The most famous triad involving these elements is the 'iron triad' (Fe, Co, Ni), grouped due to very similar chemical properties, though they do not strictly follow the atomic mass rule. Vertically in the periodic table, Fe, Cr, and Co can also be placed in triads with the elements below them (e.g., Cr, Mo, W). Manganese (Mn) is often considered distinct from its neighbors due to its unique and wide range of oxidation states and is not typically grouped in a simple horizontal triad in introductory chemistry, making it the most likely intended answer."
  },
  {
    "id": 252,
    "text": "The terms gangue, slag, and flux are related to... (TSTET 2016)",
    "options": [
      "roasting",
      "smelting",
      "calcination",
      "poling"
    ],
    "correct": "smelting",
    "explanation": "These terms are central to the process of **smelting** in metallurgy. **Gangue** is the unwanted rocky impurity mixed with an ore. **Flux** is a chemical substance added during smelting to combine with the gangue. The product of the reaction between flux and gangue is a molten, fusible substance called **slag**. The slag is less dense than the molten metal and floats on top, allowing for easy separation."
  },
  {
    "id": 253,
    "text": "Among the following, which makes us recognize the importance and conservation of biodiversity is... (TSTET 2016)",
    "options": [
      "Biology",
      "Physics",
      "Geology",
      "Chemistry"
    ],
    "correct": "Biology",
    "explanation": "Biodiversity refers to the variety of life on Earth. The scientific discipline that studies life and living organisms, their interactions, and their ecosystems is **Biology**. Sub-fields within biology, such as ecology and conservation biology, specifically focus on understanding the importance of biodiversity and developing strategies for its conservation."
  },
  {
    "id": 254,
    "text": "The largest cell is... (TSTET 2016)",
    "options": [
      "a nerve cell",
      "the egg of an Ostrich",
      "a dermal cell",
      "a cell of an elephant"
    ],
    "correct": "the egg of an Ostrich",
    "explanation": "The largest single cell, by both volume and weight, is the unfertilized egg of an ostrich. It can be about 15 cm long and weigh up to 1.4 kg. While a nerve cell can be the longest cell in the body, it is not the largest in terms of overall volume. The size of an organism like an elephant is due to a vast number of cells, not the large size of its individual cells."
  },
  {
    "id": 255,
    "text": "In the following statements, the FALSE one is... (TSTET 2016)",
    "options": [
      "The size of the organism depends on the shape of the cells in it.",
      "The size of the organism does not depend on the shape of the cells in it.",
      "The size of the cell is related to its function.",
      "The size of the organism depends on the number of cells in it."
    ],
    "correct": "The size of the organism depends on the shape of the cells in it.",
    "explanation": "The overall size of a multicellular organism is determined by the total number of its cells, not their individual shape or size. For example, an elephant is larger than a mouse because it has trillions more cells, even though their individual cells are roughly the same size. Cell shape and size are related to the cell's specific function (e.g., long nerve cells for transmission, biconcave red blood cells for transport). Therefore, the statement that an organism's size depends on the shape of its cells is false."
  },
  {
    "id": 256,
    "text": "An example of a short night duration plant is... (TSTET 2016)",
    "options": [
      "Maize",
      "Cotton",
      "Soyabean",
      "Wheat"
    ],
    "correct": "Wheat",
    "explanation": "A 'short night duration plant' is another term for a Long-Day Plant (LDP). These plants require a photoperiod of light that is longer than a certain critical length to induce flowering. Among the given options, **Wheat** is a classic example of a long-day plant. Cotton and Soyabean are short-day plants (requiring long nights to flower), and Maize is generally considered a day-neutral plant, meaning its flowering is not primarily dependent on day length."
  },
  {
    "id": 257,
    "text": "The correctly matched one in the following is... (TSTET 2016)",
    "options": [
      "Taproot - parallel venation",
      "Taproot - reticulate venation",
      "Fibrous roots - reticulate venation",
      "Fibrous roots - dicot"
    ],
    "correct": "Taproot - reticulate venation",
    "explanation": "There are general correlations between the root system, leaf venation, and plant type (monocot or dicot). Dicotyledonous plants (dicots) typically have a main **taproot** system and leaves with **reticulate** (net-like) venation. Monocotyledonous plants (monocots) usually have a **fibrous root** system and leaves with **parallel** venation. Therefore, the correct match is 'Taproot - reticulate venation'."
  },
  {
    "id": 258,
    "text": "Bone and muscle are joined together with... (TSTET 2016)",
    "options": [
      "tendons",
      "ligament",
      "joint",
      "cartilage"
    ],
    "correct": "tendons",
    "explanation": "**Tendons** are tough, flexible cords of fibrous connective tissue that connect **muscles to bones**. **Ligaments**, on the other hand, are similar tissues that connect **bone to bone** to form and stabilize joints. Cartilage is the smooth, protective tissue covering the ends of bones within a joint."
  },
  {
    "id": 259,
    "text": "Match the following. 1) Aquaculture A) Honeybee; 2) Apiculture B) Silkworm; 3) Sericulture C) Fish (TSTET 2016)",
    "options": [
      "A-3, B-1, C-2",
      "A-3, B-2, C-1",
      "A-2, B-3, C-1",
      "A-1, B-2, C-3"
    ],
    "correct": "A-2, B-3, C-1",
    "explanation": "The correct pairings are based on the definitions of these practices: **Apiculture** (2) is the scientific method of rearing honeybees (A). **Sericulture** (3) is the process of cultivating silkworms (B) and extracting silk from them. **Aquaculture** (1) is the farming of aquatic organisms, including fish (C). Therefore, the correct match is A-2, B-3, C-1."
  },
  {
    "id": 260,
    "text": "Conversion of milk to curd is due to... (TSTET 2016)",
    "options": [
      "fungi",
      "virus",
      "protozoa",
      "bacteria"
    ],
    "correct": "bacteria",
    "explanation": "The transformation of milk into curd is a fermentation process carried out by Lactic Acid Bacteria (LAB), most notably from the *Lactobacillus* genus. These beneficial **bacteria** consume the lactose (sugar) in milk and convert it into lactic acid. The acid causes the milk protein (casein) to coagulate, or curdle, thickening the milk into curd (yogurt)."
  },
  {
    "id": 261,
    "text": "The roots of the plant that have the 'Rhizobium' bacteria is... (TSTET 2016)",
    "options": [
      "curry leaf",
      "beans",
      "banyan",
      "mango"
    ],
    "correct": "beans",
    "explanation": "*Rhizobium* bacteria are famous for their ability to fix atmospheric nitrogen. They do this in a symbiotic relationship with leguminous plants (members of the pea family). The bacteria live in nodules on the plant's roots. Of the options provided, **beans** are a leguminous plant and host *Rhizobium* bacteria. The other plants are not legumes."
  },
  {
    "id": 262,
    "text": "Match the following. A) Producers 1) Protozoans; B) Consumers 2) Blue green algae; C) Decomposers 3) Fungi (TSTET 2016)",
    "options": [
      "A-2, B-3, C-1",
      "A-3, B-2, C-1",
      "A-1, B-3, C-2",
      "A-2, B-1, C-3"
    ],
    "correct": "A-2, B-1, C-3",
    "explanation": "In an ecosystem: **Producers** (A) create their own food, usually via photosynthesis. **Blue-green algae** (cyanobacteria) (2) are photosynthetic producers. **Consumers** (B) obtain energy by eating other organisms. **Protozoans** (1) are single-celled heterotrophs that consume other organisms. **Decomposers** (C) break down dead organic matter. **Fungi** (3) are primary decomposers. Thus, the correct match is A-2, B-1, C-3."
  },
  {
    "id": 263,
    "text": "The correct food chain is... (TSTET 2016)",
    "options": [
      "Insects -> Plants -> Rabbit -> Deer",
      "Rabbit -> Plants -> Deer -> Fox",
      "Carrot -> Rabbit -> Cow -> Tiger",
      "Small insects -> Frog -> Snake -> Peacock"
    ],
    "correct": "Small insects -> Frog -> Snake -> Peacock",
    "explanation": "A food chain illustrates the flow of energy in an ecosystem, starting from a producer to consumers. Options 1 and 2 are incorrect because they don't start with a producer. Option 3 is incorrect because a cow is a herbivore and does not eat rabbits. Option 4 represents a plausible flow of energy: Small insects (which eat plants) are eaten by a frog, which is eaten by a snake, which is then eaten by a peacock. This shows a correct sequence of primary, secondary, tertiary, and quaternary consumers."
  },
  {
    "id": 264,
    "text": "'Natural selection,' the famous theory of evolution, was proposed by... (TSTET 2016)",
    "options": [
      "Jean Baptiste Lamarck",
      "August Weismann",
      "Charles Darwin",
      "Mendel"
    ],
    "correct": "Charles Darwin",
    "explanation": "The theory of evolution by **natural selection** is the cornerstone of modern biology and was famously proposed by **Charles Darwin** in his groundbreaking 1859 book, 'On the Origin of Species.' The theory posits that organisms with heritable traits better suited to their environment tend to survive and reproduce more, leading to the gradual evolution of populations over time."
  },
  {
    "id": 265,
    "text": "The scientist who discovered that lightning consists of electricity is... (TSTET 2016)",
    "options": [
      "Benjamin Franklin",
      "Galvani",
      "Andre Ampere",
      "Georg Ohm"
    ],
    "correct": "Benjamin Franklin",
    "explanation": "**Benjamin Franklin** famously demonstrated the electrical nature of lightning with his kite experiment in 1752. By flying a kite in a thunderstorm, he collected electrical charge from the storm clouds into a Leyden jar, proving that lightning is a massive electrostatic discharge."
  },
  {
    "id": 266,
    "text": "The academic standard that does not belong to science according to new science textbooks is... (TSTET 2016)",
    "options": [
      "Asking questions",
      "Experimentation",
      "Communication through model making",
      "Manipulation"
    ],
    "correct": "Manipulation",
    "explanation": "Modern science education emphasizes a set of core practices or 'academic standards.' 'Asking questions,' 'Experimentation' (or planning and carrying out investigations), and 'Communication through model making' are all key, well-defined scientific process skills. 'Manipulation,' while a part of conducting experiments (e.g., manipulating variables or equipment), is not typically listed as a distinct, high-level academic standard itself. It is a more general term for a psychomotor skill, making it the least fitting option in a list of core scientific practices."
  },
  {
    "id": 267,
    "text": "The three-dimensional teaching aid among the following is... (TSTET 2016)",
    "options": [
      "television",
      "computer",
      "blackboard",
      "specimen"
    ],
    "correct": "specimen",
    "explanation": "Teaching aids can be classified by their dimensionality. A three-dimensional (3D) aid has length, width, and depth. A **specimen** (like a rock, a preserved insect, or a plant sample) is a real object and is therefore 3D. A blackboard is a two-dimensional (2D) surface. Television and computer screens are also 2D displays, even when they show images that create an illusion of depth."
  },
  {
    "id": 268,
    "text": "A teacher, \"washed the wound with plenty of water and then covered the wound with a cotton dipped in silver nitrate solution\" as first aid for an accident that occurred in a laboratory. The type of accident is... (TSTET 2016)",
    "options": [
      "burns from phosphorous",
      "burns from alkalies",
      "burns from acids",
      "acid in eye"
    ],
    "correct": "burns from phosphorous",
    "explanation": "The first aid procedure described is specific for burns caused by white phosphorus. After thoroughly washing with water, a solution of silver nitrate is applied. The silver nitrate reacts with any remaining phosphorus particles to form a stable, non-flammable coating of silver phosphide, thus preventing the phosphorus from reigniting in the air and causing further damage. First aid for acid or alkali burns involves washing and then neutralization with a weak base or acid, respectively."
  },
  {
    "id": 269,
    "text": "Learning about the different food habits of birds during a field visit to a bird sanctuary is this type of learning. (TSTET 2016)",
    "options": [
      "Learning by doing",
      "Learning by observation",
      "Learning through peer group",
      "Learning by reading"
    ],
    "correct": "Learning by observation",
    "explanation": "A field visit to a sanctuary where students watch birds in their natural habitat to understand their behaviors (like feeding) is a prime example of **learning by observation**. Students are acquiring knowledge by directly watching and noticing details in a real-world setting. While other types of learning might also occur, the core activity described is observational."
  },
  {
    "id": 270,
    "text": "Which of the following is NOT a purpose of formative evaluation? (TSTET 2016)",
    "options": [
      "To decide the rank of the student in a class.",
      "To make necessary changes in teaching strategies.",
      "To get feedback about a student's learning at different stages of teaching.",
      "To improve the quality of the teaching-learning process."
    ],
    "correct": "To decide the rank of the student in a class.",
    "explanation": "**Formative evaluation** is assessment *for* learning, conducted during the instructional process to monitor student progress and provide feedback. Its purposes include improving teaching strategies and enhancing student learning. In contrast, **summative evaluation** is assessment *of* learning, conducted at the end of a unit to measure what has been learned. Deciding grades and ranking students are typical purposes of summative evaluation, not formative."
  },
  {
    "id": 271,
    "text": "Pressure is a: (TSTET 24 June 2025)",
    "options": [
      "Vector quantity",
      "Scalar quantity",
      "Unit of temperature",
      "Fundamental quantity"
    ],
    "correct": "Scalar quantity",
    "explanation": "Pressure is defined as force per unit area ($P = F/A$). Although force is a vector, pressure is a scalar quantity because it acts equally in all directions at a point. It has magnitude but no specific direction. Pressure is a derived quantity, not a fundamental one, and its unit is the Pascal (Pa), not a unit of temperature."
  },
  {
    "id": 272,
    "text": "Among the following, which constellation is NOT visible from Telangana, India? (TSTET 24 June 2025)",
    "options": [
      "Orion",
      "Crux",
      "Saptharshi",
      "Leo"
    ],
    "correct": "Crux",
    "explanation": "Telangana is in the Northern Hemisphere. The Crux constellation, also known as the Southern Cross, is a prominent constellation in the Southern Hemisphere. It is generally not visible from locations in the Northern Hemisphere like Telangana. Orion, Saptharshi (part of Ursa Major), and Leo are all visible from India at different times of the year."
  },
  {
    "id": 273,
    "text": "The refractive index of the material \"sapphire\" is (TSTET 24 June 2025)",
    "options": [
      "1.33",
      "1.52",
      "1.77",
      "2.42"
    ],
    "correct": "1.77",
    "explanation": "The refractive index measures how much light bends when entering a material. The approximate refractive index for sapphire is 1.77. For reference, 1.33 is the refractive index of water, 1.52 is for crown glass, and 2.42 is for diamond."
  },
  {
    "id": 274,
    "text": "Identify from the following, the correct set that contains the four quantities which play an important role in describing the nature of a sound wave (TSTET 24 June 2025)",
    "options": [
      "Frequency, wavelength, amplitude, and speed",
      "Frequency, temperature, amplitude, and pitch",
      "Intensity, colour, speed, and wavelength",
      "Amplitude, intensity, colour, and pitch"
    ],
    "correct": "Frequency, wavelength, amplitude, and speed",
    "explanation": "The fundamental properties that describe a wave are its frequency (determines pitch), wavelength (distance between crests), amplitude (determines loudness/intensity), and speed (how fast it travels). The other options include irrelevant terms like 'colour' (for light waves) or perceptual/environmental factors like 'pitch' and 'temperature'."
  },
  {
    "id": 275,
    "text": "If 1 L of water is heated for a certain time and its temperature rises by 2°C, then if 2 L of water is heated for the same amount of time with the same heat source, how much would its temperature rise (assuming no heat loss)? (TSTET 24 June 2025)",
    "options": [
      "1°C",
      "2°C",
      "4°C",
      "0.5°C"
    ],
    "correct": "1°C",
    "explanation": "The heat supplied (Q) is related to mass (m), specific heat capacity (c), and temperature change (ΔT) by $Q = mcΔT$. Since the heat source and time are the same, the total heat (Q) supplied is constant. When the mass of water is doubled (from 1 L to 2 L), the temperature rise must be halved to keep the product 'mcΔT' constant. Therefore, the temperature rise will be 2°C / 2 = 1°C."
  },
  {
    "id": 276,
    "text": "Two people push a car for 4 seconds with a combined net force of 400 N. What is the impulse provided to the car? (In newton seconds) (TSTET 24 June 2025)",
    "options": [
      "100",
      "400",
      "800",
      "1600"
    ],
    "correct": "1600",
    "explanation": "Impulse is the product of the net force applied to an object and the time interval over which the force is applied. The formula is Impulse = Force × Time. Given Force = 400 N and Time = 4 s, the impulse is $400 \\times 4 = 1600$ N·s."
  },
  {
    "id": 277,
    "text": "A wire of length 0.5 m carrying a current of 4 A is placed perpendicular to a uniform magnetic field. If the force acting on the wire is 2 N, what is the magnetic flux density of the field (in Tesla)? (TSTET 24 June 2025)",
    "options": [
      "0.5",
      "1.0",
      "2.0",
      "4.0"
    ],
    "correct": "1.0",
    "explanation": "The force (F) on a current-carrying wire in a magnetic field (B) is given by $F = BIL\\sin{\\theta}$. Since the wire is perpendicular to the field, $\\theta = 90°$ and $\\sin{90°} = 1$. The formula simplifies to $F = BIL$. Rearranging to solve for B (magnetic flux density), we get $B = F / (IL)$. Plugging in the values: $B = 2 N / (4 A \\times 0.5 m) = 2 / 2 = 1.0$ T."
  },
  {
    "id": 278,
    "text": "Read the following statements and choose the correct answer. Statement I: In a series connection of resistors, the current I is constant. Statement II: In a parallel connection of resistors, the voltage V is constant. (TSTET 24 June 2025)",
    "options": [
      "Only Statement I is correct",
      "Only Statement II is correct",
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect"
    ],
    "correct": "Both Statement I and Statement II are correct",
    "explanation": "Statement I is correct because in a series circuit, there's only one path for the current to flow, so it remains the same through all components. Statement II is correct because components in a parallel circuit are connected across the same two points, meaning the voltage drop across each component is identical."
  },
  {
    "id": 279,
    "text": "One among the following scientists DID NOT work on Atomic theory (TSTET 24 June 2025)",
    "options": [
      "John Dalton",
      "J.J. Thomson",
      "Isaac Newton",
      "Niels Bohr"
    ],
    "correct": "Isaac Newton",
    "explanation": "John Dalton, J.J. Thomson, and Niels Bohr are all key figures in the development of modern atomic theory. Isaac Newton, a classical physicist, is famous for his laws of motion and universal gravitation; his work predated and did not directly concern the structure of the atom."
  },
  {
    "id": 280,
    "text": "Common salt (NaCl) is NOT a direct raw material for the following material (TSTET 24 June 2025)",
    "options": [
      "Caustic soda",
      "Bleaching powder",
      "Baking soda",
      "Gypsum"
    ],
    "correct": "Gypsum",
    "explanation": "Caustic soda (NaOH), bleaching powder ($CaOCl_2$), and baking soda ($NaHCO_3$) are all manufactured using common salt (NaCl) or its byproducts (like chlorine) in industrial processes. Gypsum ($CaSO_4 \\cdot 2H_2O$) is a naturally occurring mineral and is not produced from NaCl."
  },
  {
    "id": 281,
    "text": "According to the latest IUPAC recommendations, the unit 'amu' has been replaced by 'u' which stands for (TSTET 24 June 2025)",
    "options": [
      "Unified mass unit",
      "Unmeasured atomic unit",
      "Universal molecular unit",
      "Unique matter unit"
    ],
    "correct": "Unified mass unit",
    "explanation": "The IUPAC replaced the older 'amu' (atomic mass unit) with 'u' to represent the 'Unified atomic mass unit'. It is defined as one-twelfth of the mass of a neutral carbon-12 atom in its ground state. The term 'unified' was chosen to standardize the definition."
  },
  {
    "id": 282,
    "text": "The tendency of an atom to lose electrons to form Cations, or gain electrons to form Anions depends on several factors. Choose one from the following which is NOT such a factor. (TSTET 24 June 2025)",
    "options": [
      "Atomic size",
      "Ionization potential",
      "Electron affinity",
      "Number of neutrons"
    ],
    "correct": "Number of neutrons",
    "explanation": "An atom's chemical behavior, including ion formation, is governed by its electron configuration. Factors like atomic size, ionization potential (energy to remove an electron), and electron affinity (energy change when gaining an electron) are crucial. The number of neutrons determines the isotope of an element but, being neutral and in the nucleus, does not directly influence chemical bonding or ion formation."
  },
  {
    "id": 283,
    "text": "Read the following Assertion 'A' and Reason 'R' regarding photosynthesis. A) The colored substances in leaves like Chlorophyll, Phycobilins and Carotenoids take part in photosynthesis. R) Carotenoids and Phycobilins aid in the process of photosynthesis by passing on the energy of sunlight trapped by them to Chlorophyll. Choose the correct answer: (TSTET 24 June 2025)",
    "options": [
      "'A' & 'R' are correct but, 'R' is not a correct explanation to 'A'.",
      "'A' & 'R' are correct and 'R' is a correct explanation to 'A'.",
      "'A' is correct & 'R' is incorrect.",
      "'A' is incorrect & 'R' is correct."
    ],
    "correct": "'A' & 'R' are correct and 'R' is a correct explanation to 'A'.",
    "explanation": "Assertion (A) is correct; chlorophylls, carotenoids, and phycobilins are all photosynthetic pigments. Reason (R) is also correct; carotenoids and phycobilins are accessory pigments that absorb light energy at different wavelengths and transfer that energy to chlorophyll, thus broadening the spectrum of light used for photosynthesis. R correctly explains the role of the accessory pigments mentioned in A."
  },
  {
    "id": 284,
    "text": "Identify from the following, which is NOT a characteristic feature of Monera (TSTET 24 June 2025)",
    "options": [
      "Cells have a membrane bound nucleus",
      "Single-celled organisms",
      "Move with the help of locomotor organs, like flagella, cilia or hair like structures",
      "Reproduce by splitting into two"
    ],
    "correct": "Cells have a membrane bound nucleus",
    "explanation": "The kingdom Monera consists of prokaryotic organisms (like bacteria). The defining feature of prokaryotes is the absence of a membrane-bound nucleus and other membrane-bound organelles. The other options are characteristic of monerans: they are unicellular, many have flagella for movement, and they typically reproduce by binary fission (splitting in two)."
  },
  {
    "id": 285,
    "text": "The fibre is used in boat building (TSTET 24 June 2025)",
    "options": [
      "Rexene",
      "Acrylonitrile",
      "Lunett",
      "Cialit"
    ],
    "correct": "Cialit",
    "explanation": "This question is flawed due to a likely mistranslation from the original language, which asked about wood (correct answer: Teak). None of the provided English options are standard fibers for structural boat building. Rexene is artificial leather for seats, and acrylonitrile is a chemical precursor. 'Lunett' and 'Cialit' are not common terms. Assuming 'Cialit' is the intended answer, it might be an obscure trade name for a composite material used in marine applications, but the question is not scientifically sound as presented in English."
  },
  {
    "id": 286,
    "text": "Arrange the following stages of safe drinking water supply in a correct sequence: A) Chlorination B) Overhead tank C) Aeration D) Tank/Pond/River E) Filtration F) Taps. Choose the correct answer: (TSTET 24 June 2025)",
    "options": [
      "D -> C -> E -> A -> B -> F",
      "D -> F -> A -> B -> E -> F",
      "A -> B -> C -> D -> E -> F",
      "D -> A -> B -> C -> F -> E"
    ],
    "correct": "D -> C -> E -> A -> B -> F",
    "explanation": "The standard sequence for municipal water treatment and supply is: D) Collection from a source (river/pond), C) Aeration (to remove gases/odors), E) Filtration (to remove particles), A) Chlorination (disinfection to kill microbes), B) Storage in an overhead tank (to provide pressure), and finally F) Distribution through taps."
  },
  {
    "id": 287,
    "text": "Which of the following statement/s is/are correct? A) When the diaphragm contracts, the volume of the chest cavity is increased. B) When the diaphragm contracts, the volume of the chest cavity is decreased. C) When the diaphragm relaxes, the volume of the chest cavity is decreased. D) When the diaphragm relaxes, the volume of the chest cavity is increased. Choose the correct answer: (TSTET 24 June 2025)",
    "options": [
      "A only",
      "A & D only",
      "A & C only",
      "B & D only"
    ],
    "correct": "A & C only",
    "explanation": "During inhalation, the diaphragm contracts and moves down, which increases the volume of the chest cavity (Statement A is correct). During exhalation, the diaphragm relaxes and moves up to its dome shape, which decreases the volume of the chest cavity (Statement C is correct). Statements B and D are incorrect."
  },
  {
    "id": 288,
    "text": "The constriction or dilation of the pupil of the eye is controlled by the: (TSTET 24 June 2025)",
    "options": [
      "Retina",
      "Cornea",
      "Iris",
      "Lens"
    ],
    "correct": "Iris",
    "explanation": "The iris is the colored, muscular part of the eye that surrounds the pupil. It controls the size of the pupil, regulating the amount of light that enters the eye. It constricts the pupil in bright light and dilates it in dim light."
  },
  {
    "id": 289,
    "text": "The pH of human blood is approximately: (TSTET 24 June 2025)",
    "options": [
      "6.4",
      "7.0",
      "7.4",
      "8.0"
    ],
    "correct": "7.4",
    "explanation": "Human blood is slightly alkaline (basic). Its pH is tightly maintained in a narrow range of 7.35 to 7.45. A value of 7.4 is the typical average. A pH of 7 is neutral, and below 7 is acidic."
  },
  {
    "id": 290,
    "text": "One among the following is NOT an air-borne disease: (TSTET 24 June 2025)",
    "options": [
      "Common Cold",
      "Tuberculosis",
      "Cholera",
      "COVID-19"
    ],
    "correct": "Cholera",
    "explanation": "Air-borne diseases spread through pathogens in the air, such as the common cold, tuberculosis, and COVID-19. Cholera is a classic water-borne disease, caused by bacteria ingested through contaminated food or water."
  },
  {
    "id": 291,
    "text": "Grafting is a horticultural technique that involves: (TSTET 24 June 2025)",
    "options": [
      "Growing plants from seeds",
      "Joining parts of two plants to make them grow as one",
      "Cultivating plants in a nutrient solution without soil",
      "Producing new plants from a single parent cell"
    ],
    "correct": "Joining parts of two plants to make them grow as one",
    "explanation": "Grafting is a method of asexual propagation where the upper part (scion) of one plant is attached to the root system (rootstock) of another. The two parts grow together into a single plant, combining the desired characteristics of both."
  },
  {
    "id": 292,
    "text": "The 'Father of the Green Revolution' in India is: (TSTET 24 June 2025)",
    "options": [
      "Verghese Kurien",
      "M. S. Swaminathan",
      "Homi J. Bhabha",
      "Jagadish Chandra Bose"
    ],
    "correct": "M. S. Swaminathan",
    "explanation": "M. S. Swaminathan, an Indian geneticist, is renowned as the 'Father of the Green Revolution in India'. His work in developing and introducing high-yielding varieties of wheat and rice in the 1960s was instrumental in making India self-sufficient in food grains."
  },
  {
    "id": 293,
    "text": "Which of the following is/are aim(s) of teaching science at the upper primary stage? (TSTET 24 June 2025)",
    "options": [
      "To develop scientific temper and curiosity",
      "To understand facts and principles of science",
      "To relate science education to the environment and everyday life",
      "All of the above"
    ],
    "correct": "All of the above",
    "explanation": "Effective science education at the upper primary level aims to be holistic. It seeks to cultivate a scientific mindset (temper and curiosity), impart foundational knowledge (facts and principles), and ensure that learning is relevant by connecting it to the students' own lives and environment."
  },
  {
    "id": 294,
    "text": "Which of the following statements is INCORRECT regarding the nature of science teaching? (TSTET 24 June 2025)",
    "options": [
      "It should encourage inquiry and questioning",
      "It should promote hands-on activities and experimentation",
      "Science should be taught as a collection of isolated facts and definitions to be memorized",
      "It should develop problem-solving skills"
    ],
    "correct": "Science should be taught as a collection of isolated facts and definitions to be memorized",
    "explanation": "This statement is incorrect as it describes an outdated method of rote learning. Modern science education emphasizes that science is a dynamic process of inquiry, experimentation, and problem-solving, not just a static collection of facts to be memorized."
  },
  {
    "id": 295,
    "text": "Which one of the following does NOT describe a good science curriculum? (TSTET 24 June 2025)",
    "options": [
      "It should be child-centric and activity-based",
      "It should be relevant to the local and global context",
      "It should be teacher-centric and rigid",
      "It should be flexible and allow for the inclusion of new scientific developments"
    ],
    "correct": "It should be teacher-centric and rigid",
    "explanation": "A good curriculum should be designed around the needs and cognitive development of the learner (child-centric), not be rigidly dictated by the teacher. It must also be flexible to adapt to different learning styles and incorporate new knowledge, making a teacher-centric and rigid approach undesirable."
  },
  {
    "id": 296,
    "text": "Which of the following is NOT an audio-visual aid? (TSTET 24 June 2025)",
    "options": [
      "Television",
      "Film projector",
      "Computer with multimedia",
      "Radio"
    ],
    "correct": "Radio",
    "explanation": "Audio-visual aids appeal to both sight and hearing. Television, films, and multimedia computers are examples of audio-visual aids. A radio is only an audio aid, as it provides sound but no visual component."
  },
  {
    "id": 297,
    "text": "Which of the following is a feature of the Project Method of teaching science? (TSTET 24 June 2025)",
    "options": [
      "It provides a real-life problem or purpose",
      "Students plan and execute the activity",
      "Learning is cooperative and experience-based",
      "All of the above"
    ],
    "correct": "All of the above",
    "explanation": "The Project Method is characterized by being purposeful and rooted in real-life contexts. It is student-driven, requiring learners to plan and carry out their tasks. It also promotes collaborative learning through hands-on, direct experiences. All the listed options are key features of this method."
  },
  {
    "id": 298,
    "text": "What is the main purpose of Continuous and Comprehensive Evaluation (CCE) in science? (TSTET 24 June 2025)",
    "options": [
      "To rank students based on their performance",
      "To assess only the cognitive aspects of learning",
      "To reduce the stress of examinations on students",
      "To assess every aspect of the child during their presence at school"
    ],
    "correct": "To assess every aspect of the child during their presence at school",
    "explanation": "The core principle of CCE is its comprehensive nature. It aims to assess the holistic development of a student, covering scholastic (cognitive) and co-scholastic (affective, psychomotor) aspects. The evaluation is continuous throughout the academic year, not just a one-time exam."
  },
  {
    "id": 299,
    "text": "Which of the following is NOT a characteristic of a good science textbook? (TSTET 24 June 2025)",
    "options": [
      "The language used is simple, clear, and appropriate for the age level",
      "It includes plenty of diagrams, illustrations, and activities",
      "Contains only theoretical concepts without practical applications or examples",
      "The content is accurate, up-to-date, and free from bias"
    ],
    "correct": "Contains only theoretical concepts without practical applications or examples",
    "explanation": "A good science textbook must bridge theory and practice. It should connect abstract scientific concepts to real-world examples, practical applications, and hands-on activities to make learning meaningful and engaging. A book with only theory is considered ineffective."
  },
  {
    "id": 300,
    "text": "The teaching method which emphasizes 'learning by doing' and involves students in hands-on activities to discover scientific principles is the: (TSTET 24 June 2025)",
    "options": [
      "Lecture method",
      "Laboratory method",
      "Textbook method",
      "Demonstration method"
    ],
    "correct": "Laboratory method",
    "explanation": "The Laboratory method is fundamentally based on the principle of 'learning by doing'. It allows students to actively engage in experiments, manipulate equipment, observe phenomena firsthand, and draw their own conclusions, which is the most effective way to understand scientific principles."
  },
  {
    "id": "301",
    "text": "Only liquids exhibit surface tension because (TSTET 19 June 2025)",
    "options": [
      "liquids have no fixed volume",
      "gases have strong intermolecular forces",
      "liquids have high density",
      "gases do not have free surfaces"
    ],
    "correct": "gases do not have free surfaces",
    "explanation": "Surface tension is a property of the surface of a liquid that results from the cohesion of its molecules. This property allows the liquid to resist an external force. It occurs at the interface between a liquid and another medium (like air). Liquids have a distinct, free surface where this tension manifests. Gases, however, expand to completely fill their container and do not possess a free surface. Therefore, they cannot exhibit surface tension."
  },
  {
    "id": "302",
    "text": "In Telangana State, the Great Bear (Saptharishi) is (TSTET 19 June 2025)",
    "options": [
      "visible in North direction",
      "visible in South direction",
      "visible in Equatorial region",
      "visible in Antarctic Circle"
    ],
    "correct": "visible in North direction",
    "explanation": "The Great Bear, also known as Ursa Major or Saptharishi, is a prominent constellation in the northern celestial hemisphere. Since Telangana, India, is located in the Earth's Northern Hemisphere, observers there will see this constellation in the northern part of the sky. It is not visible from the Antarctic Circle."
  },
  {
    "id": "303",
    "text": "The typical angle between any two mirrors used in a classic kaleidoscope is (in degrees) (TSTET 19 June 2025)",
    "options": [
      "60",
      "45",
      "30",
      "90"
    ],
    "correct": "60",
    "explanation": "A standard kaleidoscope is constructed using three rectangular mirrors placed together to form a triangular prism. The angle between any two of these adjacent mirrors is 60 degrees. This specific angle creates multiple reflections that result in symmetrical, hexagonal patterns, which are characteristic of a kaleidoscope's view."
  },
  {
    "id": "304",
    "text": "Tuning fork is invented by (TSTET 19 June 2025)",
    "options": [
      "Alexander Graham Bell",
      "John Tyndall",
      "Thomas Alva Edison",
      "John Shore"
    ],
    "correct": "John Shore",
    "explanation": "The tuning fork was invented in 1711 by John Shore, an English musician and trumpeter. He created it as a pitch standard to tune his instruments, particularly the lute. The other individuals are famous for different inventions: Alexander Graham Bell (telephone), Thomas Alva Edison (practical light bulb, phonograph), and John Tyndall (work on atmospheric physics)."
  },
  {
    "id": "305",
    "text": "Identify the correct explanation related to heat and temperature. (TSTET 19 June 2025)",
    "options": [
      "Heat determines the direction of temperature flow, while temperature is the energy in motion.",
      "Temperature is the total energy of a system, while heat is a measure of how cold it is.",
      "Temperature determines the direction of heat (energy) flow, whereas heat is the energy that flows.",
      "Heat and temperature are the same physical quantities expressed in different units."
    ],
    "correct": "Temperature determines the direction of heat (energy) flow, whereas heat is the energy that flows.",
    "explanation": "Temperature is a measure of the average kinetic energy of the particles in a substance and indicates its degree of hotness. Heat is the form of energy that is transferred from a region of higher temperature to a region of lower temperature. Therefore, the difference in temperature dictates the direction of heat transfer."
  },
  {
    "id": "306",
    "text": "The motion of a body is said to be uniform when (TSTET 19 June 2025)",
    "options": [
      "its velocity is constant throughout the motion.",
      "its speed increases uniformly with time.",
      "it covers more distance in less time.",
      "its acceleration is increasing at a constant rate."
    ],
    "correct": "its velocity is constant throughout the motion.",
    "explanation": "Uniform motion specifically refers to motion with a constant velocity. Velocity is a vector quantity, meaning it has both magnitude (speed) and direction. For motion to be uniform, neither the speed nor the direction can change. This also implies that the acceleration is zero. The other options describe various forms of non-uniform or accelerated motion."
  },
  {
    "id": "307",
    "text": "Identify the true statement about a magnetic field from the following. (TSTET 19 June 2025)",
    "options": [
      "It exists only in two dimensions.",
      "It is confined to the surface of the magnet.",
      "It is a three-dimensional region around a magnet.",
      "It exists only between the poles of a magnet."
    ],
    "correct": "It is a three-dimensional region around a magnet.",
    "explanation": "A magnetic field is the region around a magnetic material or a moving electric charge within which the force of magnetism acts. This field is not a flat plane; it extends in all directions in space, making it a three-dimensional (3D) region. The field lines are used to represent this 3D field on a 2D surface."
  },
  {
    "id": "308",
    "text": "If the current passing through a human body is 10 mA, then the effect may be: (TSTET 19 June 2025)",
    "options": [
      "Can be felt",
      "Causes involuntary muscle contractions",
      "Is painful",
      "Causes loss of muscle control"
    ],
    "correct": "Causes involuntary muscle contractions",
    "explanation": "At a current of 10 milliamperes (mA), a human can experience painful shock and begin to lose voluntary muscle control. This current level is often near the 'let-go' threshold, where the involuntary muscle contractions are strong enough to prevent a person from releasing their grip on the electrical source. While the shock can be felt and is painful, the most defining characteristic at this level is the onset of involuntary muscle contractions."
  },
  {
    "id": "309",
    "text": "Precipitate is a/an: (TSTET 19 June 2025)",
    "options": [
      "A homogeneous mixture where one substance is dissolved in another",
      "A gaseous product released during a chemical reaction",
      "An insoluble substance formed in a chemical reaction",
      "A liquid that remains after evaporation"
    ],
    "correct": "An insoluble substance formed in a chemical reaction",
    "explanation": "In chemistry, a precipitate is an insoluble solid that forms from a solution during a chemical reaction. This often occurs when two soluble compounds react to form an insoluble product, which then separates from the liquid solution. For example, mixing solutions of silver nitrate and sodium chloride produces a white precipitate of insoluble silver chloride."
  },
  {
    "id": "310",
    "text": "The material used in non-stick cookware is: (TSTET 19 June 2025)",
    "options": [
      "Polyethylene",
      "PTFE (Polytetrafluoroethylene)",
      "PVC (Polyvinyl chloride)",
      "Bakelite"
    ],
    "correct": "PTFE (Polytetrafluoroethylene)",
    "explanation": "Polytetrafluoroethylene (PTFE), widely known by the brand name Teflon, is used as a coating for non-stick cookware. Its very low coefficient of friction prevents food from sticking to the surface. Polyethylene is used for plastic bags, PVC for pipes, and Bakelite is a thermosetting plastic used for electrical insulators and handles."
  },
  {
    "id": "311",
    "text": "Identify the material which DOES NOT form a flame among the following: (TSTET 19 June 2025)",
    "options": [
      "Wax Candle",
      "Magnesium",
      "Wick of kerosene stove",
      "Charcoal"
    ],
    "correct": "Charcoal",
    "explanation": "A flame is produced when a substance vaporizes during combustion. Wax from a candle and kerosene from a wick both vaporize when heated and burn with a flame. Magnesium metal also burns with a very bright flame. Charcoal, which is primarily carbon, does not vaporize. It undergoes surface combustion, glowing red hot (incandescence) but without producing a distinct flame."
  },
  {
    "id": "312",
    "text": "Match the following scientists with their respective laws and choose the correct answer (TSTET 19 June 2025)",
    "options": [
      "A-ii, B-i, C-iv, D-iii",
      "A-ii, B-iv, C-i, D-iii",
      "A-iii, B-ii, C-i, D-iv",
      "A-iv, B-i, C-iii, D-ii"
    ],
    "correct": "A-ii, B-iv, C-i, D-iii",
    "explanation": "The correct pairings are: A) John Dobereiner proposed the Law of Triads (ii). B) John Newland proposed the Law of Octaves (iv). C) Dimitri Mendeleev formulated the Periodic Law and created the first widely recognized periodic table (i). D) Henry Moseley established the Modern Periodic Law based on atomic numbers (iii)."
  },
  {
    "id": "313",
    "text": "Match the following (TSTET 19 June 2025)",
    "options": [
      "A-ii; B-iv; C-i; D-iii",
      "A-ii; B-i; C-iv; D-iii",
      "A-ii; B-iv; C-iii; D-i",
      "A-iv; B-i; C-ii; D-iii"
    ],
    "correct": "A-ii; B-iv; C-i; D-iii",
    "explanation": "The correct pairings are: A) Prokaryotic cells are characteristic of the Kingdom Monera (ii). B) A Pseudo coelom (false body cavity) is found in Nematodes (iv). C) The water vascular system is a unique feature of Echinoderms (i). D) An open circulatory system is found in Arthropods (iii)."
  },
  {
    "id": "314",
    "text": "Two chambered Heart is found in this organism (TSTET 19 June 2025)",
    "options": [
      "Crocodile",
      "Frog",
      "Pigeon",
      "Fish"
    ],
    "correct": "Fish",
    "explanation": "Fish have a simple circulatory system with a two-chambered heart, consisting of one atrium and one ventricle. Frogs (amphibians) have a three-chambered heart. Pigeons (birds) have a four-chambered heart. Crocodiles are an exception among reptiles, also having a four-chambered heart."
  },
  {
    "id": "315",
    "text": "Identify the correct pair of similar group of organisms belongs to same kingdom (TSTET 19 June 2025)",
    "options": [
      "Chlamydomonas and Aspergillus",
      "Amoeba and Vorticella",
      "Oedogonium and cyclops",
      "Spirogyra and Rhizopus"
    ],
    "correct": "Amoeba and Vorticella",
    "explanation": "Amoeba and Vorticella are both single-celled eukaryotic organisms that belong to the Kingdom Protista. The other pairs belong to different kingdoms: Chlamydomonas (Protista) and Aspergillus (Fungi); Oedogonium (Protista) and Cyclops (Animalia); Spirogyra (Protista) and Rhizopus (Fungi)."
  },
  {
    "id": "316",
    "text": "The disease which spreads through polluted water and food is (TSTET 19 June 2025)",
    "options": [
      "Tuberculosis and polio",
      "Smallpox and swine flue",
      "Cholera and Typhoid",
      "Measles and mumps"
    ],
    "correct": "Cholera and Typhoid",
    "explanation": "Both Cholera and Typhoid are bacterial infections primarily transmitted through the fecal-oral route, which means they spread by consuming food or water contaminated with the feces of an infected person. The other diseases listed are primarily spread through respiratory droplets (Tuberculosis, Smallpox, Swine flu, Measles, Mumps)."
  },
  {
    "id": "317",
    "text": "The plants or animals species of particular area/region/country is called (TSTET 19 June 2025)",
    "options": [
      "Endemic species",
      "Endangered species",
      "Extinct species",
      "Invasive Alien species"
    ],
    "correct": "Endemic species",
    "explanation": "Endemic species are those that are uniquely found in a specific geographical area and nowhere else in the world. Endangered species are at high risk of extinction. Extinct species no longer exist. Invasive alien species are non-native species that negatively affect their new environment."
  },
  {
    "id": "318",
    "text": "The 'recyclers' in Ecosystem are (TSTET 19 June 2025)",
    "options": [
      "Primary consumers",
      "Producers",
      "Decomposers",
      "Carnivores"
    ],
    "correct": "Decomposers",
    "explanation": "Decomposers, such as bacteria and fungi, play a crucial role as the 'recyclers' in an ecosystem. They break down dead organic material (like dead plants and animals) into simpler inorganic substances, returning essential nutrients to the soil and water. These nutrients are then used by producers (plants) to grow, thus completing the nutrient cycle."
  },
  {
    "id": "319",
    "text": "Which of the following is NOT a pesticide? (TSTET 19 June 2025)",
    "options": [
      "Benzene Hexachloride",
      "Dichloro diphenyl trichloro ethane",
      "Endosulfan",
      "2-4 Dichloro phenoxy acetic acid"
    ],
    "correct": "2-4 Dichloro phenoxy acetic acid",
    "explanation": "This question makes a distinction between different types of pesticides. A pesticide is a broad term for any substance used to kill or control pests. Benzene Hexachloride (BHC), DDT, and Endosulfan are all insecticides (kill insects). 2,4-Dichlorophenoxyacetic acid (2,4-D) is a herbicide (kills weeds/plants). In the context of the options provided, the question likely uses 'pesticide' in the narrower sense of 'insecticide', making the herbicide the odd one out. However, it's important to note that herbicides are technically a category of pesticides."
  },
  {
    "id": "320",
    "text": "Identify the essential parts of flower (TSTET 19 June 2025)",
    "options": [
      "Calyx and corolla",
      "Stamen and pistil",
      "Thalamus and pedicel",
      "Seed and ovary"
    ],
    "correct": "Stamen and pistil",
    "explanation": "The essential parts of a flower are its reproductive organs, which are necessary for producing seeds. These are the stamen (the male reproductive part) and the pistil (also called the carpel, the female reproductive part). The calyx (sepals) and corolla (petals) are accessory parts that protect the flower and attract pollinators but are not directly involved in reproduction."
  },
  {
    "id": "321",
    "text": "Which of the following is a modified underground stem? (TSTET 19 June 2025)",
    "options": [
      "Sweet potato",
      "Carrot",
      "Radish",
      "Potato"
    ],
    "correct": "Potato",
    "explanation": "A potato is a modified underground stem known as a tuber, which functions as a food storage organ. The 'eyes' on a potato are nodes with buds that can sprout into new stems and leaves. In contrast, sweet potato, carrot, and radish are all modified storage roots, not stems."
  },
  {
    "id": "322",
    "text": "The number of daughter cells formed from a single parent cell after meiotic division (TSTET 19 June 2025)",
    "options": [
      "Two",
      "Four",
      "Eight",
      "Sixteen"
    ],
    "correct": "Four",
    "explanation": "Meiosis is a two-step cell division process (Meiosis I and Meiosis II) that results in four daughter cells, each with half the number of chromosomes of the parent cell. This process is essential for sexual reproduction and produces gametes (sperm and egg cells). Mitosis, on the other hand, produces two identical daughter cells."
  },
  {
    "id": "323",
    "text": "Match the following (TSTET 19 June 2025)",
    "options": [
      "A-ii, B-iv, C-i, D-iii",
      "A-ii, B-i, C-iii, D-iv",
      "A-i, B-ii, C-iv, D-iii",
      "A-iv, B-i, C-iii, D-ii"
    ],
    "correct": "A-ii, B-iv, C-i, D-iii",
    "explanation": "The correct pairings are: A) Ronald Ross discovered the transmission of Malaria (ii) by mosquitoes. B) Robert Hooke first observed and named the Cell (iv). C) Robert Brown discovered the Nucleus (i) within the cell. D) Alexander Fleming discovered Penicillin (iii), the first antibiotic."
  },
  {
    "id": "324",
    "text": "Identify the process that is NOT related/involved in obtaining wool from sheep to produce fabric. (TSTET 19 June 2025)",
    "options": [
      "Shearing",
      "Scouring",
      "Stifling",
      "Bleaching"
    ],
    "correct": "Stifling",
    "explanation": "The production of wool involves shearing (cutting the fleece), scouring (washing), sorting, and processing like carding and spinning. Bleaching can also be part of the process. Stifling, however, is a step in silk production (sericulture), where the silk cocoons are boiled or steamed to kill the pupa inside. It is not related to wool processing."
  },
  {
    "id": "325",
    "text": "Einstein stated, \"In nature everywhere we come across pre-established harmonies\". This reflects which value of science? (TSTET 19 June 2025)",
    "options": [
      "Aesthetic value",
      "Cultural value",
      "Disciplinary value",
      "Moral value"
    ],
    "correct": "Aesthetic value",
    "explanation": "Einstein's quote expresses an appreciation for the order, elegance, and underlying beauty of the laws of the universe. This sense of wonder and appreciation for the 'harmony' in nature relates to the aesthetic value of science—finding beauty in scientific principles and the natural world they describe."
  },
  {
    "id": "326",
    "text": "Which of the following examples best illustrates Project Method? (TSTET 19 June 2025)",
    "options": [
      "Students prepare a chart on pollution after reading the textbook",
      "Students take part in a teacher-led discussion on environmental issues",
      "Students follow a step-by-step lab manual to test water samples for impurities",
      "Students collaboratively design and build a model of a sustainable city to address real-life environmental challenges"
    ],
    "correct": "Students collaboratively design and build a model of a sustainable city to address real-life environmental challenges",
    "explanation": "The Project Method is a student-centered approach where learning is done through a practical, real-world project. The key elements are collaboration, problem-solving, and creating a tangible outcome. Designing and building a model city to solve environmental challenges is a perfect example of this method. The other options are more traditional, passive, or teacher-directed activities."
  },
  {
    "id": "327",
    "text": "Among the following, identify which is NOT a rating scale? (TSTET 19 June 2025)",
    "options": [
      "Descriptive Scale",
      "Multiple Choice Scale",
      "Graphic Scale",
      "Numerical Scale"
    ],
    "correct": "Multiple Choice Scale",
    "explanation": "Rating scales are assessment tools used to measure a characteristic or attitude on a continuum. Common types include numerical scales (e.g., 1-5), graphic scales (a line between two extremes), and descriptive scales (each point is described in words). 'Multiple Choice' refers to a question format with several predefined answers, which is a different type of assessment tool and not a rating scale."
  },
  {
    "id": "328",
    "text": "A student in his primary school has learnt different forms of life like animals and plants exist on earth. In his secondary level class based on this knowledge, he learns about more varieties of plants and animals when he studies about classification of life forms. According to Piaget, this is (TSTET 19 June 2025)",
    "options": [
      "Assimilation",
      "Schema",
      "Accommodation",
      "Equilibrium"
    ],
    "correct": "Assimilation",
    "explanation": "According to Piaget's theory, assimilation is the cognitive process of fitting new information into existing mental schemas. The student already has a schema for 'living things.' Learning about classification adds more detail and examples to this existing schema without fundamentally changing it. Accommodation would be required if the new information contradicted the old schema (e.g., learning about organisms that don't fit neatly into 'plant' or 'animal')."
  },
  {
    "id": "329",
    "text": "In class VII, a science teacher, divided her students into groups and asked them to dissect a flower and identify various parts in it and helps them learn about different parts of a flower. The teacher adopted this approach of teaching science. (TSTET 19 June 2025)",
    "options": [
      "Teacher-centered approach",
      "Subject-centered approach",
      "Constructivist approach",
      "Problem solving approach"
    ],
    "correct": "Constructivist approach",
    "explanation": "The constructivist approach emphasizes that learners actively construct their own knowledge and understanding through hands-on experiences. By having students dissect the flower themselves in groups, the teacher is acting as a facilitator, allowing students to learn by doing and discovering the parts of the flower through their own exploration. This is a classic example of active, student-centered, constructivist learning."
  },
  {
    "id": "330",
    "text": "Which of the following is NOT a guiding principle suggested by NCF 2005 for Curriculum Development? (TSTET 19 June 2025)",
    "options": [
      "Connecting knowledge to life outside the school.",
      "Ensuring that learning is shifted away from rote methods.",
      "Making examination more flexible and integrated into classroom life.",
      "Encouraging subject-based approach instead of an integrated approach."
    ],
    "correct": "Encouraging subject-based approach instead of an integrated approach.",
    "explanation": "The National Curriculum Framework (NCF) 2005 advocates for reducing the burden of rigid subject boundaries and promoting a more integrated, interdisciplinary approach to learning. The first three options are core guiding principles of NCF 2005. The fourth option directly contradicts the NCF's emphasis on breaking down the silos between different subjects to make learning more holistic and relevant."
  },
  {
    "id": "331",
    "text": "The statement \"External pressure applied to an enclosed volume of fluid is transmitted equally in all directions throughout the fluid volume\" refers to this principle (TSTET 18 June 2025)",
    "options": [
      "Archimedes Principle",
      "Pascal's Principle",
      "Bernoulli's Principle",
      "Newton's Law"
    ],
    "correct": "Pascal's Principle",
    "explanation": "This statement is the definition of Pascal's Principle. This principle is the basis for hydraulic systems like hydraulic lifts and brakes, where a small force applied to a small area generates a much larger force over a larger area. Archimedes' principle relates to buoyancy, Bernoulli's principle relates fluid velocity to pressure, and Newton's Laws describe motion."
  },
  {
    "id": "332",
    "text": "The brightest planet in the solar system is (TSTET 18 June 2025)",
    "options": [
      "Mercury",
      "Venus",
      "Mars",
      "Jupiter"
    ],
    "correct": "Venus",
    "explanation": "Venus is the brightest planet in our solar system because its thick atmosphere, composed mainly of carbon dioxide with clouds of sulfuric acid, is highly reflective of sunlight. This high albedo makes it appear very bright when viewed from Earth, often being the first 'star' visible after sunset or before sunrise."
  },
  {
    "id": "333",
    "text": "The volume of oxygen required to burn 40g of Hydrogen at STP (in Litres) is (TSTET 18 June 2025)",
    "options": [
      "22.4",
      "11.2",
      "224",
      "4.48"
    ],
    "correct": "224",
    "explanation": "The balanced chemical equation for the combustion of hydrogen is $2H_2 + O_2 \\rightarrow 2H_2O$. First, calculate the moles of Hydrogen ($H_2$): Molar mass of $H_2$ is approx. 2 g/mol. So, 40g of $H_2$ is $40g / 2g/mol = 20$ moles. According to the reaction stoichiometry, 2 moles of $H_2$ react with 1 mole of $O_2$. Therefore, 20 moles of $H_2$ will react with 10 moles of $O_2$. At Standard Temperature and Pressure (STP), 1 mole of any ideal gas occupies 22.4 Litres. Thus, the volume of 10 moles of $O_2$ is $10 \\times 22.4 L = 224$ Litres."
  },
  {
    "id": "334",
    "text": "Electron configuration of Chromium is (TSTET 18 June 2025)",
    "options": [
      "$1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^4$",
      "$1s^2 2s^2 2p^6 3s^2 3p^6 4s^1 3d^5$",
      "$1s^2 2s^2 2p^6 3s^2 3p^6 4s^1 3d^{10}$",
      "$1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^9$"
    ],
    "correct": "$1s^2 2s^2 2p^6 3s^2 3p^6 4s^1 3d^5$",
    "explanation": "Chromium (Cr, atomic number 24) is an exception to the Aufbau principle. To achieve greater stability through a half-filled d-orbital, one electron from the 4s orbital promotes to the 3d orbital. This results in the configuration $[Ar] 4s^1 3d^5$ instead of the expected $[Ar] 4s^2 3d^4$. A half-filled subshell ($d^5$) is more stable and has lower energy than a partially filled one ($d^4$)."
  },
  {
    "id": "335",
    "text": "Read the following statements and choose the correct option. A) Atomic radii increase in groups. B) Stable configuration influences ionization energy. C) Metals are electronegative elements. (TSTET 18 June 2025)",
    "options": [
      "all A, B, C are true",
      "only A, B are true",
      "only A, C are true",
      "only B, C are true"
    ],
    "correct": "only A, B are true",
    "explanation": "Statement A is true: As you move down a group, a new electron shell is added, increasing the distance from the nucleus to the outermost electrons and thus increasing the atomic radius. Statement B is true: Elements with stable electron configurations (like noble gases) have very high ionization energies because it requires a lot of energy to remove an electron. Statement C is false: Metals are electropositive; they tend to lose electrons to form positive ions. Non-metals are generally electronegative."
  },
  {
    "id": "336",
    "text": "Match the metal with its extraction process A) Na i) Reduction B) Fe ii) Displacement C) Hg iii) Electrolysis D) Ag iv) Heating in air (TSTET 18 June 2025)",
    "options": [
      "A-iii, B-i, C-iv, D-ii",
      "A-iii, B-ii, C-iv, D-i",
      "A-iii, B-iv, C-ii, D-i",
      "A-iii, B-i, C-ii, D-iv"
    ],
    "correct": "A-iii, B-i, C-iv, D-ii",
    "explanation": "A) Na (Sodium) is a highly reactive metal extracted by the electrolysis of its molten chloride. B) Fe (Iron) is extracted from its ore by reduction with carbon in a blast furnace. C) Hg (Mercury) is extracted from cinnabar (HgS) by roasting (heating in air). D) Ag (Silver) is extracted from its ore solution via displacement using a more reactive metal like Zinc (in the cyanide process)."
  },
  {
    "id": "337",
    "text": "Atomicity of Sucrose molecule is (TSTET 18 June 2025)",
    "options": [
      "45",
      "24",
      "21",
      "46"
    ],
    "correct": "45",
    "explanation": "Atomicity is the total number of atoms in a single molecule. The chemical formula for sucrose is $C_{12}H_{22}O_{11}$. To find its atomicity, we sum the number of atoms of each element: 12 (Carbon) + 22 (Hydrogen) + 11 (Oxygen) = 45."
  },
  {
    "id": "338",
    "text": "Identify the FALSE statement (TSTET 18 June 2025)",
    "options": [
      "Normal force is a contact force.",
      "Friction opposes the movement.",
      "Pressure does not depend on area of the body.",
      "Force is measured in Newtons."
    ],
    "correct": "Pressure does not depend on area of the body.",
    "explanation": "The statement 'Pressure does not depend on area of the body' is false. Pressure is defined as Force per unit Area ($P = F/A$). Therefore, pressure is inversely proportional to the area over which the force is distributed. A smaller area results in higher pressure for the same amount of force."
  },
  {
    "id": "339",
    "text": "The right choice of connection to make a bulb glow brighter (TSTET 18 June 2025)",
    "options": [
      "Connecting electric cells in series",
      "Connecting electric cells in parallel",
      "Connecting electric bulbs in series",
      "Connecting electric bulbs in parallel"
    ],
    "correct": "Connecting electric cells in series",
    "explanation": "To make a bulb glow brighter, you must increase the voltage across it. When electric cells (batteries) are connected in series, their individual voltages add up, resulting in a higher total voltage for the circuit. This increased voltage drives more current through the bulb ($P = V^2/R$), causing it to glow more brightly."
  },
  {
    "id": "340",
    "text": "The disease NOT caused by untreated water (TSTET 18 June 2025)",
    "options": [
      "Diarrhoea",
      "Malaria",
      "Typhoid",
      "Covid"
    ],
    "correct": "Covid",
    "explanation": "Diarrhoea and Typhoid are classic water-borne diseases caused by consuming contaminated water. Malaria is a vector-borne disease, spread by mosquitoes that breed in stagnant water, but it's not contracted by drinking the water. COVID-19 is a respiratory disease caused by the SARS-CoV-2 virus, which spreads primarily through airborne droplets and has no direct causal link to untreated water."
  },
  {
    "id": "341",
    "text": "Total internal reflection occurs because: (TSTET 18 June 2025)",
    "options": [
      "Light slows down when it passes from a denser to a rarer medium",
      "Light bends towards the normal when passing from a rarer to a denser medium",
      "The angle of incidence exceeds the critical angle when light tries to move from a denser to a rarer medium",
      "Light splits into its constituent colours when passing through a prism"
    ],
    "correct": "The angle of incidence exceeds the critical angle when light tries to move from a denser to a rarer medium",
    "explanation": "Total Internal Reflection (TIR) is a phenomenon that requires two conditions: 1) Light must be traveling from a denser optical medium to a rarer one. 2) The angle of incidence in the denser medium must be greater than the critical angle for that pair of media. When these conditions are met, light is completely reflected back into the denser medium."
  },
  {
    "id": "342",
    "text": "Identify which of the following is true (TSTET 18 June 2025)",
    "options": [
      "Every non-metal has bright surface.",
      "Metals and non-metals are used in fire works.",
      "Every metal has crystalline form.",
      "Every metal can be made into sheets."
    ],
    "correct": "Metals and non-metals are used in fire works.",
    "explanation": "This is the true statement. Fireworks use metals like magnesium, aluminum, and copper salts for bright sparks and colors, and non-metals like sulfur and carbon (as fuel/oxidizers in gunpowder). The other statements are false: most non-metals are dull (iodine is an exception); mercury is a liquid metal without a crystalline form at room temperature; and mercury is not malleable (cannot be made into sheets)."
  },
  {
    "id": "343",
    "text": "Identify the plant that is having 'Haustoria' from the following (TSTET 18 June 2025)",
    "options": [
      "Nepenthes",
      "Mushrooms",
      "Legumes",
      "Cuscuta"
    ],
    "correct": "Cuscuta",
    "explanation": "Haustoria are specialized root-like structures that parasitic plants use to penetrate a host plant's tissues to absorb water and nutrients. Cuscuta (dodder) is a parasitic plant that uses haustoria. Nepenthes is an insectivorous plant, Mushrooms are saprophytic fungi, and Legumes have root nodules for nitrogen fixation."
  },
  {
    "id": "344",
    "text": "Identify the cell organelles that are found in both plant and animal cells (TSTET 18 June 2025)",
    "options": [
      "Plastids",
      "Cell wall",
      "Centrioles",
      "Endoplasmic reticulum"
    ],
    "correct": "Endoplasmic reticulum",
    "explanation": "The Endoplasmic Reticulum (ER) is a network of membranes found in all eukaryotic cells, including both plants and animals. Plastids (e.g., chloroplasts) and the cell wall are characteristic of plant cells. Centrioles are typically found in animal cells but not in higher plant cells."
  },
  {
    "id": "345",
    "text": "Identify the structure of human skelton that associates the legs and the trunk (TSTET 18 June 2025)",
    "options": [
      "Pelvic girdle",
      "Pectoral girdle",
      "Backbone",
      "Clavicle"
    ],
    "correct": "Pelvic girdle",
    "explanation": "The pelvic girdle (or hip girdle) is the bony structure that connects the axial skeleton (the trunk, including the backbone) to the lower limbs (the legs). The pectoral girdle connects the upper limbs (arms). The clavicle is part of the pectoral girdle. The question paper noted a discrepancy (a typo 'Petric'), so full marks were awarded, but 'Pelvic girdle' is the correct answer."
  },
  {
    "id": "346",
    "text": "One of the following is NOT the common function of leaves in plants. (TSTET 18 June 2025)",
    "options": [
      "Transpiration",
      "Gaseous exchange",
      "Reproduction",
      "Photosynthesis"
    ],
    "correct": "Reproduction",
    "explanation": "The primary functions of leaves are photosynthesis, transpiration, and gaseous exchange. While some plants like Bryophyllum can reproduce vegetatively through leaves, it is not a common or primary function for the majority of plants. The flower is the typical reproductive organ."
  },
  {
    "id": "347",
    "text": "Identify the process of killing silk moth cocoons by exposing them to steam or hot air from the following (TSTET 18 June 2025)",
    "options": [
      "Scouring",
      "Stifling",
      "Shearing",
      "Carding"
    ],
    "correct": "Stifling",
    "explanation": "Stifling is the process in sericulture where silk moth cocoons are exposed to steam or hot air. This kills the pupa inside without damaging the continuous silk filament. If the pupa matures, the emerging moth would break the cocoon, ruining the silk thread. Scouring, shearing, and carding are processes associated with wool production."
  },
  {
    "id": "348",
    "text": "Identify the plant that stores food materials in its root (TSTET 18 June 2025)",
    "options": [
      "Sweet potato",
      "Potato",
      "Turmeric",
      "Ginger"
    ],
    "correct": "Sweet potato",
    "explanation": "A sweet potato is a modified, swollen storage root (a tuberous root). It stores food reserves in its root system. In contrast, a potato is a modified stem (a tuber), while turmeric and ginger are also modified stems (rhizomes)."
  },
  {
    "id": "349",
    "text": "Identify the correct sentence (TSTET 18 June 2025)",
    "options": [
      "Cartilage is a type of muscle tissue.",
      "Ligament is a type of epithelial tissue.",
      "Bone is a type of connective tissue.",
      "Fibroblasts are a type of nervous tissue."
    ],
    "correct": "Bone is a type of connective tissue.",
    "explanation": "This statement is correct. Bone is a rigid, specialized connective tissue that forms the body's skeleton. The other statements are incorrect: Cartilage and ligaments are also types of connective tissue, not muscle or epithelial tissue. Fibroblasts are cells found within connective tissue, not nervous tissue."
  },
  {
    "id": "350",
    "text": "Identify the INCORRECT pair (TSTET 18 June 2025)",
    "options": [
      "Vorticella - Protozoan",
      "Spirulina - Microarthropod",
      "Euglena - Algae",
      "Yeast - Bacterium"
    ],
    "correct": "Spirulina - Microarthropod",
    "explanation": "This pair is incorrect. Spirulina is a type of cyanobacterium (blue-green algae). A microarthropod is a tiny animal like a mite. The pair 'Yeast - Bacterium' is also incorrect as yeast is a fungus. However, Spirulina is fundamentally different from a microarthropod, making it a distinctly incorrect pairing."
  },
  {
    "id": "351",
    "text": "Which of the following hormone is NOT secreted by pituitary gland? (TSTET 18 June 2025)",
    "options": [
      "Follicle stimulating hormone",
      "Growth hormone",
      "Luteinizing hormone",
      "Progesterone"
    ],
    "correct": "Progesterone",
    "explanation": "Progesterone is a steroid hormone produced mainly by the corpus luteum in the ovary and by the placenta during pregnancy. The pituitary gland is a master gland that secretes many hormones, including Follicle-Stimulating Hormone (FSH), Growth Hormone (GH), and Luteinizing Hormone (LH), but it does not secrete progesterone."
  },
  {
    "id": "352",
    "text": "Identify the secondary pollutant from the following (TSTET 18 June 2025)",
    "options": [
      "PAN",
      "CFC",
      "CO2",
      "SO2"
    ],
    "correct": "PAN",
    "explanation": "Secondary pollutants are formed in the atmosphere through chemical reactions of primary pollutants. Peroxyacetyl nitrate (PAN) is a key component of photochemical smog and is a secondary pollutant formed from the reaction of nitrogen oxides and volatile organic compounds in the presence of sunlight. Carbon dioxide ($CO_2$), sulfur dioxide ($SO_2$), and chlorofluorocarbons (CFCs) are primary pollutants emitted directly from sources."
  },
  {
    "id": "353",
    "text": "Which of the following is called as 'global grain'? (TSTET 18 June 2025)",
    "options": [
      "Maize",
      "Wheat",
      "Rice",
      "Jowar"
    ],
    "correct": "Rice",
    "explanation": "Rice is often called the 'global grain' because it is the staple food for over half of the world's population, making it critical to global food security and nutrition. Its cultivation spans diverse climates and cultures across the globe."
  },
  {
    "id": "354",
    "text": "The scientist who discovered the role of sunlight in photosynthesis was (TSTET 18 June 2025)",
    "options": [
      "Joseph Priestley",
      "Jan Ingenhousz",
      "Stephen Hales",
      "Van Helmont"
    ],
    "correct": "Jan Ingenhousz",
    "explanation": "While Joseph Priestley discovered oxygen, it was Jan Ingenhousz who demonstrated that sunlight was essential for plants to produce this oxygen. His experiments showed that this process only happened in the green parts of the plant and only when they were exposed to light."
  },
  {
    "id": "355",
    "text": "Shouryam, a Class X student, carefully assembles a simple electric circuit using a battery, wires, switch, and bulb, ensuring it functions correctly and neatly. Identify the domain and the level demonstrated by the student. (TSTET 18 June 2025)",
    "options": [
      "Affective domain - Application",
      "Affective domain - Organization",
      "Psychomotor domain - Articulation",
      "Psychomotor domain - Imitation level"
    ],
    "correct": "Psychomotor domain - Articulation",
    "explanation": "The task of assembling a circuit involves physical skills, placing it in the Psychomotor domain. The student is performing a complex act accurately and efficiently ('functions correctly and neatly'), which corresponds to the 'Articulation' level. This level involves combining multiple skills in a coordinated and fluent manner, going beyond simple 'Imitation'."
  },
  {
    "id": "356",
    "text": "Which of the following is NOT an approach of the historical method? (TSTET 18 June 2025)",
    "options": [
      "Anecdotal approach",
      "Biographical approach",
      "Documentary Approach",
      "Experimental approach"
    ],
    "correct": "Experimental approach",
    "explanation": "The historical method of teaching science uses the history of scientific discoveries, biographies of scientists, anecdotes, and analysis of historical documents to teach concepts. The experimental approach, which involves conducting controlled experiments to test hypotheses, is a fundamental method of scientific inquiry itself, not a component of the historical teaching method."
  },
  {
    "id": "357",
    "text": "In which year was the National Innovation Foundation (NIF) established in India? (TSTET 18 June 2025)",
    "options": [
      "1995",
      "2000",
      "2005",
      "2010"
    ],
    "correct": "2000",
    "explanation": "The National Innovation Foundation (NIF) - India was established in March 2000 by the Department of Science and Technology (DST), Government of India. Its purpose is to provide institutional support for scouting, spawning, sustaining, and scaling up grassroots innovations from the unaided sector."
  },
  {
    "id": "358",
    "text": "This value of teaching science deals with developing a spirit of inquiry, respect for truth, and fostering an unbiased, objective approach. (TSTET 18 June 2025)",
    "options": [
      "Intellectual value",
      "Vocational value",
      "Aesthetic value",
      "Moral value"
    ],
    "correct": "Intellectual value",
    "explanation": "Intellectual values in science education focus on developing the scientific temper. This includes fostering curiosity, critical thinking, logical reasoning, open-mindedness, objectivity, and a commitment to evidence-based conclusions. It encourages an honest and unbiased search for truth."
  },
  {
    "id": "359",
    "text": "Identify the type of evaluation that is conducted at the end of a unit or course to certify the level of student achievement. (TSTET 18 June 2025)",
    "options": [
      "Formative evaluation",
      "Diagnostic evaluation",
      "Summative evaluation",
      "Placement evaluation"
    ],
    "correct": "Summative evaluation",
    "explanation": "Summative evaluation is conducted at the conclusion of an instructional period (e.g., end of a chapter, semester, or year). Its purpose is to assess the final learning outcome and assign a grade or certify mastery. It 'sums up' the learning that has occurred, contrasting with formative evaluation which is ongoing and aims to improve learning."
  },
  {
    "id": "360",
    "text": "An ideal science kit should NOT be: (TSTET 18 June 2025)",
    "options": [
      "Cost-effective and durable",
      "Relevant to the curriculum",
      "Overly complex and difficult to use",
      "Safe for students to handle"
    ],
    "correct": "Overly complex and difficult to use",
    "explanation": "A good science kit is a teaching aid designed to facilitate learning. For it to be effective, it must be user-friendly for both teachers and students. If a kit is overly complex, it can become a barrier to understanding rather than a tool for exploration. Safety, durability, cost-effectiveness, and curriculum relevance are all desirable qualities."
  },
  {
    "id": "361",
    "text": "1 Torr is equal to (in Pascals). (TSTET 19 June 2025)",
    "options": [
      "76",
      "760",
      "133",
      "101325"
    ],
    "correct": "133",
    "explanation": "One standard atmosphere (atm) is the pressure that supports a column of mercury 760 mm high. This pressure is defined as 760 Torr. One standard atmosphere is also equal to 101,325 Pascals (Pa). Therefore, to find the value of 1 Torr in Pascals, we divide the pressure in Pascals by the pressure in Torr: $1 \\text{ Torr} = \\frac{101325 \\text{ Pa}}{760 \\text{ Torr}} \\approx 133.32 \\text{ Pa}$. The closest integer value is 133."
  },
  {
    "id": "362",
    "text": "A hybrid solar eclipse is nothing but... (TSTET 19 June 2025)",
    "options": [
      "An eclipse that is partly lunar and partly solar",
      "A solar eclipse that changes from an annular to a total one",
      "A solar eclipse that occurs at night",
      "An eclipse visible from both the North and South Poles"
    ],
    "correct": "A solar eclipse that changes from an annular to a total one",
    "explanation": "A hybrid solar eclipse is a rare astronomical event where the eclipse appears as annular from some points on Earth and total from others. This occurs when the Moon's distance from Earth is such that the tip of its umbral shadow is very close to the Earth's surface. Due to the Earth's curvature, the eclipse can shift between annular (when the Moon appears smaller than the Sun, leaving a 'ring of fire') and total (when the Moon completely blocks the Sun)."
  },
  {
    "id": "363",
    "text": "The correct relationship between the speed of light in a vacuum and its speed in other transparent media is... (TSTET 19 June 2025)",
    "options": [
      "Light travels faster in transparent media than in a vacuum",
      "Light travels at the same speed in both transparent media and vacuum",
      "Light cannot travel through transparent media",
      "Light travels slower in transparent media than in a vacuum"
    ],
    "correct": "Light travels slower in transparent media than in a vacuum",
    "explanation": "The speed of light is at its maximum in a vacuum, approximately $299,792,458$ meters per second. When light passes through any transparent medium (like water, glass, or air), it interacts with the atoms of the medium, which causes it to slow down. The ratio of the speed of light in a vacuum to its speed in a given medium is called the refractive index of that medium, and it is always greater than 1."
  },
  {
    "id": "364",
    "text": "Compressions and rarefactions in a sound wave travel in: (TSTET 19 June 2025)",
    "options": [
      "the same direction",
      "opposite directions",
      "perpendicular directions",
      "random directions"
    ],
    "correct": "the same direction",
    "explanation": "Sound waves are longitudinal waves, meaning the vibrations of the particles of the medium are parallel to the direction of energy propagation. The wave moves through the medium as a series of compressions (regions of high pressure) and rarefactions (regions of low pressure). Both the compressions and rarefactions propagate outwards from the source in the same direction."
  },
  {
    "id": "365",
    "text": "Read the following statements and choose the correct answer. Statement I : Condensation is a warming process. Statement II : The phase change from gas to liquid is called Condensation. (TSTET 19 June 2025)",
    "options": [
      "Both statement I and statement II are correct",
      "Statement I is correct, but Statement II is incorrect",
      "Statement I is incorrect, but Statement II is correct",
      "Both statement I and statement II are incorrect"
    ],
    "correct": "Both statement I and statement II are correct",
    "explanation": "Statement II correctly defines condensation as the phase transition from a gaseous state to a liquid state. Statement I is also correct because for a gas to condense, it must release energy in the form of latent heat of vaporization. This release of heat energy warms the surroundings, making condensation an exothermic or warming process."
  },
  {
    "id": "366",
    "text": "The force exerted by the earth on a ball is 16 N. Then the force on the earth by the ball is (in Newtons). (TSTET 19 June 2025)",
    "options": [
      "32",
      "16",
      "8",
      "0"
    ],
    "correct": "16",
    "explanation": "This question is an application of Newton's Third Law of Motion, which states that for every action, there is an equal and opposite reaction. The 'action' is the Earth's gravitational force on the ball (16 N). The 'reaction' is the ball's gravitational force on the Earth. According to the law, these two forces must be equal in magnitude and opposite in direction. Therefore, the force exerted by the ball on the Earth is also 16 N."
  },
  {
    "id": "367",
    "text": "What does the tangent, drawn to a magnetic field line at any point represent? (TSTET 19 June 2025)",
    "options": [
      "The strength of the magnetic field",
      "The shape of the magnet",
      "The distance between magnetic poles",
      "The direction of the magnetic field at that point"
    ],
    "correct": "The direction of the magnetic field at that point",
    "explanation": "Magnetic field lines are visual tools used to represent magnetic fields. By convention, the tangent drawn at any point on a magnetic field line indicates the direction of the magnetic force that a north magnetic pole would experience if placed at that point. Thus, the tangent gives the direction of the magnetic field vector at that specific location."
  },
  {
    "id": "368",
    "text": "In a circuit, a 12 V battery is connected in series with three resistors of values 2 Ω, 3 Ω, and 1 Ω. Using Kirchhoff's Voltage Law, calculate the current flowing through the circuit. (in Amperes) (TSTET 19 June 2025)",
    "options": [
      "0.5",
      "1",
      "2",
      "6"
    ],
    "correct": "2",
    "explanation": "First, calculate the total equivalent resistance ($R_{eq}$) for resistors in series: $R_{eq} = R_1 + R_2 + R_3$. So, $R_{eq} = 2 \\, \\Omega + 3 \\, \\Omega + 1 \\, \\Omega = 6 \\, \\Omega$. According to Ohm's Law (which is a simplified form of Kirchhoff's laws for this circuit), the current ($I$) is the voltage ($V$) divided by the total resistance: $I = \\frac{V}{R_{eq}} = \\frac{12 \\, \\text{V}}{6 \\, \\Omega} = 2 \\, \\text{A}$."
  },
  {
    "id": "369",
    "text": "The provided data, showing identical weight percentages for elements in both natural and synthetic samples of a compound, illustrates which law of chemistry? (TSTET 19 June 2025)",
    "options": [
      "Law of Conservation of Mass",
      "Law of Definite Proportions",
      "Law of Multiple Proportions",
      "Avogadro's Law"
    ],
    "correct": "Law of Definite Proportions",
    "explanation": "The Law of Definite Proportions (or the Law of Constant Composition) states that a given chemical compound always contains its component elements in a fixed ratio by mass, regardless of its source or method of preparation. Since the weight percentages of copper, carbon, and oxygen are the same in both the natural and synthetic samples, the data directly demonstrates this law."
  },
  {
    "id": "370",
    "text": "Read the following statements and choose the correct answer. Statement I : Bases which are soluble in water are called alkalis. Statement II: All bases do not dissolve in water. (TSTET 19 June 2025)",
    "options": [
      "Both statement I and statement II are correct",
      "Statement I is correct, but Statement II is incorrect",
      "Statement I is incorrect, but Statement II is correct",
      "Both statement I and statement II are incorrect"
    ],
    "correct": "Both statement I and statement II are correct",
    "explanation": "Statement I provides the correct definition of an alkali: it is a subset of bases that are soluble in water (e.g., NaOH, KOH). Statement II is also true because many bases are insoluble or only sparingly soluble in water (e.g., $Cu(OH)_2$, $Fe(OH)_3$). Therefore, while all alkalis are bases, not all bases are alkalis."
  },
  {
    "id": "371",
    "text": "One formula unit of $MgBr_2$ consists of: (TSTET 19 June 2025)",
    "options": [
      "One $Mg^+$ ion and one $Br^-$ ion",
      "One $Mg^{2+}$ ion and one $Br^-$ ion",
      "One $Mg^{2+}$ ion and two $Br^-$ ions",
      "One $Mg^+$ ion and two $Br^{2-}$ ions"
    ],
    "correct": "One $Mg^{2+}$ ion and two $Br^-$ ions",
    "explanation": "Magnesium ($Mg$) is an alkaline earth metal in Group 2, so it loses two electrons to form a stable cation with a +2 charge ($Mg^{2+}$). Bromine ($Br$) is a halogen in Group 17, so it gains one electron to form a stable anion with a -1 charge ($Br^-$). To create an electrically neutral compound, one magnesium ion ($+2$) must combine with two bromide ions ($2 \\times -1$). Thus, the formula unit is $MgBr_2$."
  },
  {
    "id": "372",
    "text": "In a sodium chloride (NaCl) crystal, each $Na^+$ ion is surrounded by 6 $Cl^-$ ions, and each $Cl^-$ ion is surrounded by 6 $Na^+$ ions. What does this arrangement indicate about the structure of NaCl? (TSTET 19 June 2025)",
    "options": [
      "NaCl has a body-centered cubic structure",
      "Each ion in NaCl is tetrahedrally coordinated",
      "Each $Na^+$ ion forms covalent bonds with $Cl^-$ ions",
      "NaCl has a face-centered cubic structure with 6:6 coordination"
    ],
    "correct": "NaCl has a face-centered cubic structure with 6:6 coordination",
    "explanation": "The crystal structure described is the rock salt structure. In this structure, the ions are arranged in an interpenetrating face-centered cubic (FCC) lattice. The coordination number is the number of nearest neighbors of an ion. The fact that each $Na^+$ is surrounded by 6 $Cl^-$ and each $Cl^-$ is surrounded by 6 $Na^+$ means it has a 6:6 coordination geometry, which is characteristic of this structure."
  },
  {
    "id": "373",
    "text": "Read the following statements about Protochordates: A) Protochordates are Marine animals. B) Protochordates show a new feature of body design namely Notochord. C) Proper Notochord is present at all the stages of life or for entire length of the body of Protochordates. Choose the correct answer. (TSTET 19 June 2025)",
    "options": [
      "Only A & C are correct",
      "Only B & C are correct",
      "Only A is correct",
      "Only A & B are correct"
    ],
    "correct": "Only A & B are correct",
    "explanation": "Statement A is correct; protochordates are exclusively found in marine environments. Statement B is also correct; the defining characteristic of chordates, including protochordates, is the presence of a notochord at some stage in their life cycle. Statement C is incorrect because the notochord may be present only during the larval stage (as in Urochordata) or may not extend the full length of the body. Therefore, only statements A and B are correct."
  },
  {
    "id": "374",
    "text": "According to C. B. Van Niel, during Photosynthesis, for the formation of each molecule of carbohydrate, the required number of molecules of carbon and water respectively are: (TSTET 19 June 2025)",
    "options": [
      "1 & 2",
      "2 & 2",
      "4 & 2",
      "2 & 1"
    ],
    "correct": "1 & 2",
    "explanation": "C. B. Van Niel formulated the general equation for photosynthesis as $CO_2 + 2H_2A \\rightarrow [CH_2O] + H_2O + 2A$, where $[CH_2O]$ represents a unit of carbohydrate and $H_2A$ is the hydrogen donor (which is water, $H_2O$, in plants). This equation shows that to produce one unit of carbohydrate ($[CH_2O]$), one molecule of carbon dioxide ($CO_2$) and two molecules of the hydrogen donor ($H_2O$) are required. Thus, the ratio of carbon to water molecules is 1:2."
  },
  {
    "id": "375",
    "text": "Match the following Phyla with their Excretory organ/system: a) Nematoda i) Meta nephridia, b) Mollusca ii) Flame cells, c) Protozoa iii) Renette cells, d) Platyhelminthes iv) Simple diffusion. (TSTET 19 June 2025)",
    "options": [
      "a-iii, b-ii, c-iv, d-i",
      "a-i, b-iv, c-iii, d-ii",
      "a-iii, b-i, c-iv, d-ii",
      "a-iv, b-iii, c-ii, d-i"
    ],
    "correct": "a-iii, b-i, c-iv, d-ii",
    "explanation": "The correct pairings are: a) Nematoda use Renette cells for excretion (a-iii). b) Mollusca have metanephridia (organs analogous to kidneys) for excretion (b-i). c) Protozoa, as single-celled organisms, excrete wastes via simple diffusion across their body surface (c-iv). d) Platyhelminthes (flatworms) use a network of flame cells (protonephridia) for excretion (d-ii)."
  },
  {
    "id": "376",
    "text": "Identify from the following, the one that is NOT due to hormones. (TSTET 19 June 2025)",
    "options": [
      "Physical changes during adolescence",
      "Breaking down of starches in the food eaten",
      "Control on the levels of sugar, salts and calcium in blood",
      "Formation of sperm"
    ],
    "correct": "Breaking down of starches in the food eaten",
    "explanation": "The breakdown (digestion) of starches into simpler sugars is a chemical process facilitated by enzymes, primarily amylase in saliva and pancreatic juice. Hormones like testosterone and estrogen cause adolescent changes, hormones like insulin and glucagon control blood sugar, and hormones like FSH and testosterone are essential for sperm formation. Digestion, however, is enzymatic."
  },
  {
    "id": "377",
    "text": "In plant cells, which of the following was earlier believed to be inactive but, now is considered to be one of the most significant parts of the cell which continuously exchanges information with other cells during growth and development? (TSTET 19 June 2025)",
    "options": [
      "Cytoplasm",
      "Mitochondria",
      "Cell wall",
      "Plasma membrane"
    ],
    "correct": "Cell wall",
    "explanation": "Historically, the plant cell wall was viewed as a passive, non-living structural layer for support and protection. Modern research has shown it is a dynamic and metabolically active component. It plays crucial roles in cell-to-cell communication (through plasmodesmata), defense against pathogens, and the regulation of cell growth and morphology, making it a significant and active part of the cell."
  },
  {
    "id": "378",
    "text": "The 'second brain' in our body is spread throughout our... (TSTET 19 June 2025)",
    "options": [
      "Circulatory system",
      "Digestive system",
      "Excretory system",
      "Skin"
    ],
    "correct": "Digestive system",
    "explanation": "The digestive system is often called the 'second brain' because of the Enteric Nervous System (ENS). The ENS is a complex network of over 100 million neurons lining the gastrointestinal tract from the esophagus to the rectum. It can function independently to control digestion and also communicates with the central nervous system, influencing mood and overall well-being."
  },
  {
    "id": "379",
    "text": "Read the following statements. A) Asexual reproduction occurs only in plants. B) In Yeast, reproduction happens by budding. Choose the correct answer. (TSTET 19 June 2025)",
    "options": [
      "A is correct and B is incorrect.",
      "Both 'A' & 'B' are correct.",
      "Both A & B are incorrect.",
      "'A' is incorrect and B is correct."
    ],
    "correct": "'A' is incorrect and B is correct.",
    "explanation": "Statement A is incorrect because asexual reproduction is found across many kingdoms of life, including animals (e.g., Hydra, starfish), fungi (e.g., yeast, molds), and protists (e.g., Amoeba), not just in plants. Statement B is correct; yeast, a unicellular fungus, commonly reproduces asexually through a process called budding, where a new individual grows as an outgrowth from the parent."
  },
  {
    "id": "380",
    "text": "Identify the organic matter present in the soil. (TSTET 19 June 2025)",
    "options": [
      "Humus",
      "Peat",
      "Regolith",
      "Bedrock"
    ],
    "correct": "Humus",
    "explanation": "Humus is the dark, stable, organic component of soil, formed by the decomposition of plant and animal residues by microorganisms. It is crucial for soil fertility, structure, and water retention. Regolith is the layer of loose rock and soil covering the solid bedrock. Peat is an accumulation of partially decayed organic matter, but humus is the specific term for the organic fraction integrated within the soil."
  },
  {
    "id": "381",
    "text": "How does the sperm break through the egg cell membrane? (TSTET 19 June 2025)",
    "options": [
      "by tearing a hole in the membrane",
      "by biting through the membrane",
      "by squeezing through the gaps in the membrane",
      "by dissolving the membrane with chemicals / enzymes released"
    ],
    "correct": "by dissolving the membrane with chemicals / enzymes released",
    "explanation": "The tip of the sperm's head contains a structure called the acrosome, which is packed with digestive enzymes. Upon reaching the egg, the acrosome releases these enzymes (like hyaluronidase and proteases). These enzymes break down the outer protective layers of the egg (the zona pellucida), allowing the sperm to penetrate and fuse with the egg's plasma membrane to achieve fertilization."
  },
  {
    "id": "382",
    "text": "The only cells in our body, which do not have the ability of regeneration are... (TSTET 19 June 2025)",
    "options": [
      "Blood cells",
      "Bone cells",
      "Nerve cells",
      "Stem cells"
    ],
    "correct": "Nerve cells",
    "explanation": "Mature nerve cells (neurons) in the central nervous system are highly specialized and are generally considered post-mitotic, meaning they have lost the ability to divide and replicate. While there is some evidence of limited neurogenesis in specific brain areas, widespread regeneration after injury does not occur. In contrast, blood cells are constantly replaced, bone cells can repair fractures, and stem cells are defined by their regenerative capacity."
  },
  {
    "id": "383",
    "text": "Disease causing micro-organisms are called... (TSTET 19 June 2025)",
    "options": [
      "Antigens",
      "Pathogens",
      "Vectors",
      "Agents"
    ],
    "correct": "Pathogens",
    "explanation": "A pathogen is the specific biological term for any organism that can cause disease. This includes certain types of bacteria, viruses, fungi, and parasites. An antigen is a molecule that triggers an immune response. A vector is an organism that transmits a pathogen (e.g., a mosquito carrying the malaria parasite)."
  },
  {
    "id": "384",
    "text": "Read the following statements. A) Some animals chew food very quickly and swallow and store it in a part of their stomach. After some time they get the swallowed food back into mouth and chew it again. This is called Rumination. B) Cow, Camel are ruminating animals. Choose the correct answer. (TSTET 19 June 2025)",
    "options": [
      "Both 'A' & 'B' are correct",
      "'A' is correct and B is incorrect",
      "'A' is incorrect and B is correct",
      "Both 'A' & 'B' are incorrect"
    ],
    "correct": "Both 'A' & 'B' are correct",
    "explanation": "Statement A correctly describes rumination, the process where herbivores regurgitate partially digested food (cud) and chew it again to further break it down. Statement B is also correct; cows and camels are well-known examples of ruminant animals that employ this digestive strategy to extract nutrients from tough plant matter."
  },
  {
    "id": "385",
    "text": "Among the following Indian scientists who gave an accurate approximation for π? (TSTET 19 June 2025)",
    "options": [
      "Aryabhata",
      "C V Raman",
      "Homi Bhabha",
      "Jagadish Chandra Bose"
    ],
    "correct": "Aryabhata",
    "explanation": "Aryabhata, a renowned mathematician-astronomer from classical India (c. 476–550 CE), provided one of the earliest and most accurate approximations for π. In his treatise, the Aryabhatiya, he calculated the value as 3.1416, which is remarkably close to the true value. C.V. Raman, Homi Bhabha, and J.C. Bose were famous physicists and biologists of the 20th century."
  },
  {
    "id": "386",
    "text": "Students apply their new knowledge and perform a new related experiment that extends their learning beyond the initial learning. It represents this step in the 5E learning model. (TSTET 19 June 2025)",
    "options": [
      "Exploring",
      "Elaborating",
      "Engaging",
      "Evaluating"
    ],
    "correct": "Elaborating",
    "explanation": "The 5E instructional model consists of five phases: Engage, Explore, Explain, Elaborate, and Evaluate. The 'Elaborate' phase challenges students to apply their understanding in a new context. Performing a new, related experiment to extend their knowledge beyond the original lesson is a classic example of the elaboration stage."
  },
  {
    "id": "387",
    "text": "Which of the following questions is more subjective in nature? (TSTET 19 June 2025)",
    "options": [
      "What is the SI unit of mass?",
      "State Ohm's Law.",
      "What are the laws of reflection of light?",
      "How is loneliness perceived by different people?"
    ],
    "correct": "How is loneliness perceived by different people?",
    "explanation": "A subjective question is one that relies on personal opinions, feelings, and interpretations rather than a single, verifiable fact. The first three questions are objective; they have definite, factual answers (kilogram, V=IR, etc.). The perception of loneliness is inherently subjective, varying greatly from person to person based on their experiences and psychology."
  },
  {
    "id": "388",
    "text": "Read the following Assertion and Reason. Assertion (A): Science experiences paradigm shifts. Reason (R): Existing scientific theories and laws may be discarded in light of new evidence. Choose the correct option. (TSTET 19 June 2025)",
    "options": [
      "Both (A) and (R) are true but (R) is not correct reasoning for (A).",
      "(A) is true but (R) is false.",
      "(A) is false but (R) is true.",
      "Both (A) and (R) are true and (R) gives correct reasoning for (A)."
    ],
    "correct": "Both (A) and (R) are true and (R) gives correct reasoning for (A).",
    "explanation": "A 'paradigm shift' (Assertion A) is a fundamental change in the basic concepts of a scientific discipline. This happens precisely because science is self-correcting; as new evidence emerges that contradicts existing models, those models may be revised or discarded entirely (Reason R). Therefore, the fact that scientific theories are tentative and can be overturned by new evidence is the very reason why paradigm shifts occur."
  },
  {
    "id": "389",
    "text": "A teacher asks students to investigate the causes, symptoms, and preventive methods for a new disease spreading in their village. Which of the following methods best suits this context? A) Lecture method B) Project method C) Problem-solving method. (TSTET 19 June 2025)",
    "options": [
      "A only",
      "B only",
      "A and B only",
      "B and C only"
    ],
    "correct": "B and C only",
    "explanation": "This task is a real-world, multifaceted problem that requires active investigation, data gathering, analysis, and synthesis of a solution (preventive methods). The Lecture method (A) is too passive. The Project method (B) is ideal as it allows students to conduct in-depth research over time and produce a comprehensive report. The Problem-solving method (C) is also perfectly suited as the core task is to understand and propose solutions to a problem. Both B and C are highly effective, student-centered approaches for this scenario."
  },
  {
    "id": "390",
    "text": "Radioactive decay is a first-order process. What does this imply about the half-life of a radioactive isotope?",
    "options": [
      "The half-life decreases as the sample decays.",
      "The half-life is constant and independent of the initial amount of the isotope.",
      "The half-life increases as the sample decays.",
      "The half-life is directly proportional to the temperature of the sample."
    ],
    "correct": "The half-life is constant and independent of the initial amount of the isotope.",
    "explanation": "For a first-order reaction like radioactive decay, the half-life ($t_{1/2}$) is the time required for half of the radioactive nuclei in a sample to decay. This time is constant and depends only on the decay constant of the isotope, not on how much of the substance you start with or external conditions like temperature or pressure."
  },
  {
    "id": "391",
    "text": "Among the following, an application of Bernoulli's principle is (TSTET 18 June 2025)",
    "options": [
      "Lift on an airplane wing",
      "Formation of rainbows",
      "Reflection of light in mirrors",
      "Formation of shadows"
    ],
    "correct": "Lift on an airplane wing",
    "explanation": "Bernoulli's principle states that for a fluid in motion, an increase in speed results in a decrease in pressure. An airplane wing (airfoil) is designed so that air travels faster over its curved upper surface than its flatter lower surface. This speed difference creates lower pressure above the wing and higher pressure below it, generating an upward force known as lift. The other options are related to optics: rainbows are formed by dispersion of light, reflection in mirrors follows the laws of reflection, and shadows are formed by blocking light."
  },
  {
    "id": "392",
    "text": "The latitude of Medak, Telangana state is (rounded off to whole number) (TSTET 18 June 2025)",
    "options": [
      "17°N",
      "18° N",
      "20° N",
      "21° N"
    ],
    "correct": "18° N",
    "explanation": "The precise latitude of Medak district in Telangana is approximately 18.04° North. When this value is rounded off to the nearest whole number, it becomes 18° N."
  },
  {
    "id": "393",
    "text": "The sum of the angle of incidence and the angle of reflection of the incident light at a mirror in a periscope is (TSTET 18 June 2025)",
    "options": [
      "half the angle of incidence",
      "equal to the angle of reflection",
      "equal to the angle of incidence",
      "twice the angle of incidence"
    ],
    "correct": "twice the angle of incidence",
    "explanation": "According to the law of reflection, the angle of incidence is always equal to the angle of reflection ($∠i = ∠r$). The question asks for the sum of these two angles ($∠i + ∠r$). Since they are equal, the sum can be expressed as ($∠i + ∠i$), which simplifies to 2 × ∠i, or twice the angle of incidence."
  },
  {
    "id": "394",
    "text": "The relationship between loudness and amplitude of a sound wave is (TSTET 18 June 2025)",
    "options": [
      "Loudness is inversely proportional to amplitude",
      "Loudness is directly proportional to amplitude",
      "Loudness is independent of amplitude",
      "Loudness is inversely proportional to the square of amplitude"
    ],
    "correct": "Loudness is directly proportional to amplitude",
    "explanation": "Loudness of a sound is determined by its amplitude. A larger amplitude corresponds to a louder sound, and a smaller amplitude corresponds to a quieter sound. While the physical intensity of a sound wave is proportional to the square of the amplitude ($I ∝ A^2$), in a general sense, loudness increases as amplitude increases. Therefore, among the given choices, direct proportionality is the best description of the relationship."
  },
  {
    "id": "395",
    "text": "The temperature measured in the Kelvin scale is called (TSTET 18 June 2025)",
    "options": [
      "Absolute temperature",
      "Relative temperature",
      "Standard temperature",
      "Thermal temperature"
    ],
    "correct": "Absolute temperature",
    "explanation": "The Kelvin scale is an absolute thermodynamic temperature scale. Its zero point, 0 K, represents absolute zero, the theoretical temperature at which all molecular motion ceases. Because it starts from this absolute minimum, any temperature measured on the Kelvin scale is referred to as an absolute temperature."
  },
  {
    "id": "396",
    "text": "The direction of the centripetal force is always: (TSTET 18 June 2025)",
    "options": [
      "Tangent to the circular path",
      "Away from the center of the circle",
      "Towards the center of the circle",
      "Along the direction of the velocity"
    ],
    "correct": "Towards the center of the circle",
    "explanation": "Centripetal force is the force that keeps an object moving in a circular path. This force is always directed perpendicular to the object's velocity (which is tangential to the path) and points inward, towards the center of the circle. This continuous inward pull is what causes the object to change direction and follow a curve."
  },
  {
    "id": "397",
    "text": "To protect a horseshoe magnet and preserve its magnetic strength, you should always: (TSTET 18 June 2025)",
    "options": [
      "Wrap it in plastic",
      "Store it with a soft iron bar across its poles",
      "Expose it to heat regularly",
      "Hang it from a string"
    ],
    "correct": "Store it with a soft iron bar across its poles",
    "explanation": "A soft iron bar, known as a keeper, is placed across the poles of a magnet during storage. The keeper creates a closed loop for the magnetic field lines, preventing the magnetic domains within the magnet from becoming disoriented. This minimizes self-demagnetization and helps preserve the magnet's strength over time."
  },
  {
    "id": "398",
    "text": "In an experiment, resistors made from the same material with resistances of 0.5 Ω, 2 Ω, 4 Ω, and 8 Ω are tested. It is observed that the ratio V/I (voltage/current) is not constant across these resistors. Based on this observation, the material used in the experiment is: (TSTET 18 June 2025)",
    "options": [
      "Iron",
      "Copper",
      "Tungsten",
      "Germanium"
    ],
    "correct": "Germanium",
    "explanation": "Ohm's law states that for ohmic conductors (like most metals under constant temperature), the ratio of voltage to current (V/I), which is resistance, is constant. Materials that do not follow this rule are called non-ohmic. Semiconductors, such as Germanium, are non-ohmic; their resistance changes with voltage and temperature. Since the V/I ratio was not constant, the material is a non-ohmic conductor like Germanium."
  },
  {
    "id": "399",
    "text": "Bleaching of coloured objects using moist chlorine is an example of: (TSTET 18 June 2025)",
    "options": [
      "Oxidation reaction",
      "Reduction reaction",
      "Neutralization reaction",
      "Precipitation reaction"
    ],
    "correct": "Oxidation reaction",
    "explanation": "The bleaching action of moist chlorine is due to oxidation. Chlorine reacts with water to form hypochlorous acid ($HClO$), which is unstable and breaks down to release nascent oxygen ($[O]$). This highly reactive nascent oxygen oxidizes the colored substances, breaking down their chemical bonds and rendering them colorless."
  },
  {
    "id": "400",
    "text": "We use PET for making bottles. PET is a very familiar form of: (TSTET 18 June 2025)",
    "options": [
      "Natural rubber",
      "Thermosetting plastic",
      "Polyester",
      "Fiber glass"
    ],
    "correct": "Polyester",
    "explanation": "PET stands for Polyethylene Terephthalate. It is a thermoplastic polymer that belongs to the polyester family of compounds. Its chemical structure contains ester functional groups, defining it as a polyester. It is widely used for making beverage bottles, food containers, and synthetic fibers."
  },
  {
    "id": "401",
    "text": "Sodium metal is preserved in: (TSTET 18 June 2025)",
    "options": [
      "Water",
      "Ethanol",
      "Vinegar",
      "Kerosene"
    ],
    "correct": "Kerosene",
    "explanation": "Sodium is a highly reactive alkali metal that reacts violently with both the oxygen and moisture present in the air. It also reacts explosively with water. To prevent these reactions and store it safely, it is immersed in a non-reactive liquid like kerosene, which acts as a barrier to air and water."
  },
  {
    "id": "402",
    "text": "Identify the INCORRECT statement from the following (TSTET 18 June 2025)",
    "options": [
      "Lanthanoids range from Lanthanum (La) to Lutetium (Lu).",
      "Actinoids range from Actinium (Ac) to Lawrencium (Lr).",
      "The third group of the periodic table starts with Carbon(C) and ends with Lead (Pb).",
      "The 4th period of the periodic table starts with Potassium (K) and ends with Krypton (Kr)."
    ],
    "correct": "The third group of the periodic table starts with Carbon(C) and ends with Lead (Pb).",
    "explanation": "This statement is incorrect. Group 14 (not Group 3) of the periodic table is the carbon group, which starts with Carbon (C) and ends with Lead (Pb). Group 3 contains Scandium (Sc), Yttrium (Y), and the lanthanide and actinide series. The other statements are correct."
  },
  {
    "id": "403",
    "text": "Which of the following plant tissues is made up of different types of cells? (TSTET 18 June 2025)",
    "options": [
      "Parenchyma and collenchyma",
      "Xylem and phloem",
      "Collenchyma and sclerenchyma",
      "Parenchyma and sclerenchyma"
    ],
    "correct": "Xylem and phloem",
    "explanation": "Plant tissues composed of multiple cell types are known as complex tissues. Xylem and phloem are the primary complex tissues in plants. Xylem is made of tracheids, vessels, xylem parenchyma, and xylem fibers. Phloem is made of sieve tubes, companion cells, phloem parenchyma, and phloem fibers. In contrast, parenchyma, collenchyma, and sclerenchyma are simple tissues, as each is composed of only one type of cell."
  },
  {
    "id": "404",
    "text": "Energy producing catabolic life process is (TSTET 18 June 2025)",
    "options": [
      "Photosynthesis",
      "Reproduction",
      "Excretion",
      "Respiration"
    ],
    "correct": "Respiration",
    "explanation": "Catabolic processes involve the breakdown of complex molecules into simpler ones, releasing energy. Cellular respiration is the primary catabolic process in most organisms, where glucose and other food molecules are broken down to produce ATP (adenosine triphosphate), the main energy currency of the cell. Photosynthesis is an anabolic (building-up) process that consumes energy."
  },
  {
    "id": "405",
    "text": "Identify the correct pair of glands from the following (TSTET 18 June 2025)",
    "options": [
      "Pituitary gland and Gastric glands",
      "Prostrate gland and Cowper's gland",
      "Adrenal gland and Salivary gland",
      "Prostrate gland and Thyroid gland"
    ],
    "correct": "Prostrate gland and Cowper's gland",
    "explanation": "The prostate gland and Cowper's glands (also known as bulbourethral glands) are both accessory glands of the male reproductive system. They work together to produce seminal fluid. The other pairs incorrectly combine glands from different systems (e.g., endocrine like pituitary/adrenal/thyroid and exocrine/digestive like gastric/salivary)."
  },
  {
    "id": "406",
    "text": "Which of the following Bacterium is called as Bio pesticide (TSTET 18 June 2025)",
    "options": [
      "Clostridium botulinum",
      "Lactobacillus",
      "Bacillus thuringiensis",
      "Rhizobium"
    ],
    "correct": "Bacillus thuringiensis",
    "explanation": "Bacillus thuringiensis (Bt) is a bacterium that naturally produces protein crystals that are toxic to certain insect larvae. It is widely used in agriculture as a biological pesticide because it targets specific pests (like caterpillars) while being harmless to humans, birds, and most beneficial insects."
  },
  {
    "id": "407",
    "text": "Identify the autotrophic of a food chain from the following (TSTET 18 June 2025)",
    "options": [
      "Producers",
      "Primary consumers",
      "Secondary consumers",
      "Tertiary consumers"
    ],
    "correct": "Producers",
    "explanation": "Autotrophs are organisms capable of producing their own food from inorganic substances, typically using light energy (photosynthesis). In any food chain, these organisms are known as producers and form the first trophic level. Plants, algae, and some bacteria are producers. All types of consumers are heterotrophs, meaning they must ingest other organisms to obtain energy."
  },
  {
    "id": "408",
    "text": "Identify exhaustible natural resource from the following (TSTET 18 June 2025)",
    "options": [
      "Water",
      "Wind",
      "Minerals",
      "Solar energy"
    ],
    "correct": "Minerals",
    "explanation": "Exhaustible, or non-renewable, resources are those that exist in a finite quantity and cannot be replenished within a human timescale. Minerals, such as iron ore, copper, and bauxite, are mined from the Earth and are finite. In contrast, solar energy, wind, and water (replenished through the water cycle) are considered inexhaustible or renewable resources."
  },
  {
    "id": "409",
    "text": "\"Pellagra\" is the disease related to which part of the body? (TSTET 18 June 2025)",
    "options": [
      "Skin",
      "Eyes",
      "Liver",
      "Kidney"
    ],
    "correct": "Skin",
    "explanation": "Pellagra is a systemic disease caused by a severe deficiency of niacin (vitamin B3). It classically presents with a combination of symptoms known as the '3 Ds': Dermatitis (a severe skin rash, especially in sun-exposed areas), Diarrhea, and Dementia. Therefore, the skin is a primary and highly visible part of the body affected by the disease."
  },
  {
    "id": "410",
    "text": "Which macro nutrient is essential for the arise of new leaves and flowers in plant? (TSTET 18 June 2025)",
    "options": [
      "Phosphorous",
      "Potassium",
      "Nitrogen",
      "Boron"
    ],
    "correct": "Nitrogen",
    "explanation": "Nitrogen is a primary macronutrient crucial for plant growth. It is a fundamental component of chlorophyll (essential for photosynthesis) and amino acids (the building blocks of proteins). As such, nitrogen is most strongly associated with promoting vigorous vegetative growth, including the development of stems and new leaves. While phosphorus is key for flowering and rooting, nitrogen provides the foundation for the plant's overall structure and foliage."
  },
  {
    "id": "411",
    "text": "Ozone molecules constantly get formed and destroyed in which layer of the atmosphere? (TSTET 18 June 2025)",
    "options": [
      "Mesosphere",
      "Troposphere",
      "Stratosphere",
      "Thermosphere"
    ],
    "correct": "Stratosphere",
    "explanation": "The ozone layer is primarily found in the stratosphere. In this layer, a natural cycle known as the Chapman cycle occurs: high-energy ultraviolet (UV) radiation from the sun breaks apart oxygen molecules ($O_2$) into individual oxygen atoms ($O$). These atoms then combine with other oxygen molecules to form ozone ($O_3$). Simultaneously, ozone is also destroyed by UV radiation, creating a dynamic balance that absorbs the majority of harmful UV rays."
  },
  {
    "id": "412",
    "text": "The disease 'Kala-Azar' is caused by (TSTET 18 June 2025)",
    "options": [
      "Bacteria",
      "Virus",
      "Worms",
      "Protozoan"
    ],
    "correct": "Protozoan",
    "explanation": "Kala-azar, also known as visceral leishmaniasis, is a parasitic disease caused by a protozoan from the Leishmania genus. The parasite is transmitted to humans through the bites of infected female sandflies. It is not caused by bacteria, viruses, or worms."
  },
  {
    "id": "413",
    "text": "Match the following (TSTET 18 June 2025)\nA) Palaeontology I) diseases\nB) Ecology II) Fossils\nC) Microbiology III) Environment\nD) Pathology IV) Micro organisms",
    "options": [
      "A-ii, B-iii, C-iv, D-i",
      "A-ii, B-iv, C-iii, D-i",
      "A-iii, B-i, C-ii, D-iv",
      "A-i, B-ii, C-iv, D-iii"
    ],
    "correct": "A-ii, B-iii, C-iv, D-i",
    "explanation": "The correct matches are:\n- Palaeontology (A) is the scientific study of life of the geologic past that involves the analysis of plant and animal fossils (ii).\n- Ecology (B) is the branch of biology that deals with the relations of organisms to one another and to their physical environment (iii).\n- Microbiology (C) is the study of microscopic organisms (iv), such as bacteria, viruses, and fungi.\n- Pathology (D) is the study of the causes and effects of diseases (i)."
  },
  {
    "id": "414",
    "text": "Identify the plant that produces new plant from the modified roots (TSTET 18 June 2025)",
    "options": [
      "Potato",
      "Dahlia",
      "Bryophyllum",
      "Gladioli"
    ],
    "correct": "Dahlia",
    "explanation": "Dahlia propagates through tuberous roots, which are modified roots that store food and possess adventitious buds. These buds can sprout and grow into new plants. In contrast, a potato is a modified stem (tuber), Bryophyllum propagates from buds on its leaves, and Gladiolus grows from a corm, which is a modified underground stem."
  },
  {
    "id": "415",
    "text": "A student of class IX noticed that a metal rod expands when heated and contracts when cooled. He concluded that temperature affects the length of metals. Which learning objective is this related to? (TSTET 18 June 2025)",
    "options": [
      "Knowledge",
      "Understanding",
      "Application",
      "Skill"
    ],
    "correct": "Understanding",
    "explanation": "This scenario goes beyond simple recall of facts (Knowledge). The student observed a phenomenon and was able to interpret it to form a general conclusion or principle. This process of explaining, interpreting, and summarizing observations to establish a relationship falls under the cognitive domain of Understanding."
  },
  {
    "id": "416",
    "text": "Which of the following teaching methods is LEAST aligned with the scientific method used in science teaching? (TSTET 18 June 2025)",
    "options": [
      "Inductive method",
      "Laboratory method",
      "Inquiry-based method",
      "Deductive method"
    ],
    "correct": "Deductive method",
    "explanation": "The scientific method is fundamentally an inductive and inquiry-based process. It begins with specific observations and experiments (laboratory method) to form broader generalizations and theories (inductive method). The deductive method, however, starts with a general principle or rule and applies it to specific instances. While valid for instruction, it is the reverse of the scientific discovery process and is therefore the least aligned with it."
  },
  {
    "id": "417",
    "text": "Achievement tests are generally classified as, A) Teacher made tests, B) Standardized tests. Choose the correct answer. (TSTET 18 June 2025)",
    "options": [
      "Both A & B",
      "Neither A nor B",
      "A only",
      "B only"
    ],
    "correct": "Both A & B",
    "explanation": "Achievement tests, which measure acquired knowledge or skill, are broadly categorized into two types. Teacher-made tests are created by instructors for their specific class. Standardized tests are developed by experts and are administered and scored in a consistent, or 'standard,' manner, often for large-scale assessment. Both are common classifications."
  },
  {
    "id": "418",
    "text": "In this Assessment, the performance of the other students is NOT important in the interpretation of the performance of a particular student (TSTET 18 June 2025)",
    "options": [
      "Norm-referenced Assessment",
      "Criterion-referenced Assessment",
      "Relative Grading Assessment",
      "Placement Assessment"
    ],
    "correct": "Criterion-referenced Assessment",
    "explanation": "In a criterion-referenced assessment, a student's performance is measured against a fixed set of predetermined criteria or learning standards. The goal is to determine whether the student has mastered a specific skill or concept, regardless of how other students perform. In contrast, a norm-referenced assessment compares a student's performance to that of a representative group of other students."
  },
  {
    "id": "419",
    "text": "Which of the following is a question for higher order critical thinking in biology? (TSTET 18 June 2025)",
    "options": [
      "What are the respiratory organs in cockroach?",
      "Where does the photosynthesis take place in plants?",
      "Where do the fats get digested in humans?",
      "How do you relate the study of ecology to the global challenges of climate change and biodiversity loss?"
    ],
    "correct": "How do you relate the study of ecology to the global challenges of climate change and biodiversity loss?",
    "explanation": "Higher-order thinking involves analysis, synthesis, and evaluation. The first three questions are lower-order, requiring only the recall of specific facts. The last question requires students to synthesize their knowledge of ecology and apply it to complex, real-world problems. They must analyze relationships and evaluate the connections between a scientific field and global challenges, which is a hallmark of critical thinking."
  },
  {
    "id": "420",
    "text": "A biology teacher in class IX is dealing with life forms and various classifications of life forms done by scientists. Which of the following best supports her teaching? A) Drawing pictures of various plants and animals on black-board, B) Concept map and Concept web, C) Specimens and models. Choose the correct answer. (TSTET 18 June 2025)",
    "options": [
      "A only",
      "B only",
      "A and B only",
      "All A, B, and C"
    ],
    "correct": "All A, B, and C",
    "explanation": "An effective teaching strategy for a complex topic like biological classification would utilize multiple tools. Concept maps and webs (B) are excellent for showing hierarchical relationships. Specimens and models (C) provide concrete, hands-on examples of the organisms being classified. Drawing pictures on the blackboard (A) can help to emphasize key features and simplify complex structures. A combination of all three methods would provide the most comprehensive and supportive learning experience."
  },
  {
    "id": 421,
    "text": "Identify the correct statement among the following. (TSTET 30 June 2025)",
    "options": [
      "The force of buoyancy is the reason for an immersed body to appear light.",
      "Relative density has units to measure.",
      "Heavier body floats.",
      "Hydraulic jack is an application of Bernoulli's principle."
    ],
    "correct": "The force of buoyancy is the reason for an immersed body to appear light.",
    "explanation": "According to Archimedes' principle, an upward buoyant force is exerted on a body immersed in a fluid. This force is equal to the weight of the fluid that the body displaces. This upward force counteracts the downward force of gravity, making the object appear lighter. The other options are incorrect: Relative density is a ratio of densities, so it is a unitless quantity. Denser (heavier for their volume) bodies sink, not float. A hydraulic jack works based on Pascal's principle, not Bernoulli's principle."
  },
  {
    "id": 422,
    "text": "Identify the 'correct quantum number set' for the outer most electron in Na. (TSTET 30 June 2025)",
    "options": [
      "n=3, l=0, m_l=0, m_s=+1/2",
      "n=2, l=1, m_l=-1, m_s=+1/2",
      "n=2, l=1, m_l=1, m_s=+1/2",
      "n=3, l=1, m_l=0, m_s=+1/2"
    ],
    "correct": "n=3, l=0, m_l=0, m_s=+1/2",
    "explanation": "The atomic number of Sodium (Na) is 11. Its electron configuration is $1s^2 2s^2 2p^6 3s^1$. The outermost electron is in the 3s orbital. For this electron: The principal quantum number (n) corresponds to the shell number, which is 3. The azimuthal quantum number (l) for an s-orbital is 0. The magnetic quantum number ($m_l$) can only be 0 when l=0. The spin quantum number ($m_s$) can be either +1/2 or -1/2. Therefore, the set n=3, l=0, $m_l=0$, $m_s=+1/2$ is a correct representation."
  },
  {
    "id": 423,
    "text": "A FALSE statement about refraction of light is. (TSTET 30 June 2025)",
    "options": [
      "Velocity of light is more in rarer medium.",
      "Angle of incidence/refraction more in rarer medium.",
      "Velocity of light is less in denser medium.",
      "Angle of incidence/refraction is less in rarer medium."
    ],
    "correct": "Angle of incidence/refraction is less in rarer medium.",
    "explanation": "According to Snell's Law, when light travels between two media, the angle it makes with the normal is always greater in the medium with the lower refractive index (the rarer medium). Therefore, the statement that the angle of incidence/refraction is less in the rarer medium is false. The angle is always larger in the rarer medium."
  },
  {
    "id": 424,
    "text": "The true statement from the following. (TSTET 30 June 2025)",
    "options": [
      "The loudness of normal conversation is about 20dB.",
      "The shrillness of sound is amplitude.",
      "Vocal cords close when we speak.",
      "Sound can travel in vacuum."
    ],
    "correct": "Vocal cords close when we speak.",
    "explanation": "To produce speech sounds, air from the lungs is passed through the larynx, causing the vocal cords (vocal folds) to come together and vibrate. This vibration modulates the airflow to produce sound. The other statements are incorrect: Normal conversation is about 60 dB. The shrillness (pitch) of a sound is determined by its frequency, while amplitude determines its loudness. Sound is a mechanical wave and requires a medium to travel; it cannot propagate in a vacuum."
  },
  {
    "id": 425,
    "text": "VSEPR Theory mainly fails to explain. (TSTET 30 June 2025)",
    "options": [
      "Space occupied by electron pair",
      "Bond angle",
      "Strength of bond",
      "Molecular shape"
    ],
    "correct": "Strength of bond",
    "explanation": "The Valence Shell Electron Pair Repulsion (VSEPR) theory is a model used to predict the 3D geometry of molecules based on minimizing the electrostatic repulsion between valence electron pairs. While it is effective at predicting molecular shape and approximating bond angles, it provides no information about bond energies or bond strength."
  },
  {
    "id": 426,
    "text": "The force of attraction between any two universal objects is INDEPENDENT of. (TSTET 30 June 2025)",
    "options": [
      "Distance between objects",
      "Mass of objects",
      "Universal Gravitation constant",
      "Orientation of objects"
    ],
    "correct": "Orientation of objects",
    "explanation": "Newton's Law of Universal Gravitation, $F = G \\frac{m_1 m_2}{r^2}$, states that the gravitational force depends on the masses of the two objects ($m_1$, $m_2$), the distance between their centers of mass ($r$), and the universal gravitational constant ($G$). The law assumes point masses or spherically symmetric bodies, making the force independent of the objects' orientation."
  },
  {
    "id": 427,
    "text": "A 60W bulb consumes 'x' J of energy when connected to an electric source of 120V. The amount of energy consumed by the same bulb when connected to source of 240V is. (TSTET 30 June 2025)",
    "options": [
      "2x J",
      "x/2 J",
      "4x J",
      "x² J"
    ],
    "correct": "4x J",
    "explanation": "The resistance (R) of the bulb is constant. Using the power formula $P = V^2/R$, we find the resistance: $R = V^2/P = (120)^2 / 60 = 14400 / 60 = 240 \\Omega$. Now, calculate the new power ($P'$) when connected to 240V: $P' = (240)^2 / 240 = 240W$. Since the original power was 60W, the new power is 4 times greater ($240W / 60W = 4$). As Energy = Power × time, if the time is the same, the new energy consumed will be 4 times the original energy, which is 4x J."
  },
  {
    "id": 428,
    "text": "A coin is kept under a glass slab of refractive index 1.52. It appears to be shifted vertically by 0.7cm. Then the thickness of the glass slab is. (TSTET 30 June 2025)",
    "options": [
      "2.0 cm",
      "1.5 cm",
      "2.5 cm",
      "1.0 cm"
    ],
    "correct": "2.0 cm",
    "explanation": "The formula for vertical shift (s) is given by $s = t \\left(1 - \\frac{1}{n}\\right)$, where t is the real thickness and n is the refractive index. We are given s = 0.7 cm and n = 1.52. Rearranging the formula to solve for t: $t = \\frac{s}{\\left(1 - \\frac{1}{n}\\right)} = \\frac{0.7}{\\left(1 - \\frac{1}{1.52}\\right)} = \\frac{0.7}{\\left(\\frac{1.52 - 1}{1.52}\\right)} = \\frac{0.7 \\times 1.52}{0.52} \\approx 2.046$ cm. The closest answer is 2.0 cm."
  },
  {
    "id": 429,
    "text": "Match the following. (TSTET 30 June 2025)\nSet I: A) Nylon, B) Rayon, C) Acrylic, D) Polyester\nSet II: i) Wrinkle free, ii) Diapers, iii) Fishing net, iv) Carpet",
    "options": [
      "A-iii, B-ii, C-iv, D-i",
      "A-iii, B-ii, C-i, D-iv",
      "A-iii, B-iv, C-i, D-ii",
      "A-ii, B-i, C-iv, D-iii"
    ],
    "correct": "A-iii, B-ii, C-iv, D-i",
    "explanation": "Matching the polymers with their common applications or properties: A) Nylon is known for its high strength and water resistance, making it ideal for fishing nets. B) Rayon is highly absorbent, a property useful in diapers. C) Acrylic is a synthetic fiber that is a common substitute for wool in carpets. D) Polyester is widely known for its property of being wrinkle-free, making it popular for clothing."
  },
  {
    "id": 430,
    "text": "The true statement among the following. (TSTET 30 June 2025)",
    "options": [
      "Smelting carried out in Reverberatory furnace.",
      "Roasting carried out in absence of air.",
      "CaO is obtained by adopting Calcination.",
      "Distillation is a method of purification of high boiling metals."
    ],
    "correct": "Smelting carried out in Reverberatory furnace.",
    "explanation": "Smelting is a metallurgical process to extract metal from its ore, and it is often carried out in a reverberatory furnace or a blast furnace. The other statements are incorrect: Roasting is heating an ore in the presence of excess air. While CaO can be obtained by calcination (of CaCO3), the statement is less universally true than the first. Distillation is a purification method used for metals with low boiling points, like zinc and mercury, not high boiling points."
  },
  {
    "id": 431,
    "text": "The substance, which is NOT treated as an electric conductor among the following. (TSTET 30 June 2025)",
    "options": [
      "Mercury",
      "Bismuth",
      "Graphite",
      "Sodium"
    ],
    "correct": "Bismuth",
    "explanation": "Mercury, graphite, and sodium are all good electrical conductors. Bismuth, although a metal, is a poor conductor of electricity. It has a very high electrical resistivity for a metal and is sometimes classified as a semimetal. Among the given choices, it is the poorest conductor."
  },
  {
    "id": 432,
    "text": "The coefficient of O₂ in the balanced chemical equation of burning Propane. (TSTET 30 June 2025)",
    "options": [
      "1",
      "5",
      "3",
      "4"
    ],
    "correct": "5",
    "explanation": "The combustion of propane ($C_3H_8$) involves reacting it with oxygen ($O_2$) to produce carbon dioxide ($CO_2$) and water ($H_2O$). The unbalanced equation is $C_3H_8 + O_2 \\rightarrow CO_2 + H_2O$. To balance it, we get: $C_3H_8 + 5O_2 \\rightarrow 3CO_2 + 4H_2O$. Thus, the stoichiometric coefficient for oxygen ($O_2$) is 5."
  },
  {
    "id": 433,
    "text": "In plants, this part of a flower develops into a fruit after fertilization. (TSTET 30 June 2025)",
    "options": [
      "Embryo",
      "Embryo Sac",
      "Ovary",
      "Ovule"
    ],
    "correct": "Ovary",
    "explanation": "In flowering plants, after successful fertilization, the ovary matures and develops into the fruit. The ovules contained within the ovary develop into seeds. The fruit's primary role is to protect the seeds and aid in their dispersal."
  },
  {
    "id": 434,
    "text": "Identify the cell organelles that are found in both Prokaryotic and Eukaryotic cells. (TSTET 30 June 2025)",
    "options": [
      "Ribosomes",
      "Mitochondria",
      "Plastids",
      "Endoplasmic Reticulum"
    ],
    "correct": "Ribosomes",
    "explanation": "Ribosomes are the sites of protein synthesis and are essential for all forms of life. They are found in both prokaryotic and eukaryotic cells. Mitochondria, plastids, and the endoplasmic reticulum are membrane-bound organelles that are characteristic of eukaryotic cells and are absent in prokaryotic cells."
  },
  {
    "id": 435,
    "text": "Fixed joints are present in this part of human body. (TSTET 30 June 2025)",
    "options": [
      "Pectoral girdle",
      "Pelvic girdle",
      "Skull",
      "Backbone"
    ],
    "correct": "Skull",
    "explanation": "Fixed joints, or synarthroses, are immovable joints where bones are fused together. The best example in the human body is the sutures between the bones of the skull (cranium), which protect the brain. The other options involve bones connected by joints that allow for some degree of movement."
  },
  {
    "id": 436,
    "text": "Read the following sentences and identify the correct answer. A) The plants with tap root system have leaves with parallel venation. B) The plants with fibrous roots have leaves with reticulate venation. (TSTET 30 June 2025)",
    "options": [
      "Sentence-A is correct, Sentence-B is incorrect",
      "Sentence-A is incorrect, Sentence-B is correct",
      "Both the sentences are correct",
      "Both the sentences are incorrect"
    ],
    "correct": "Both the sentences are incorrect",
    "explanation": "In botany, there is a general correlation between root type and leaf venation. Plants with a taproot system (common in dicots) typically have leaves with reticulate (net-like) venation. Conversely, plants with a fibrous root system (common in monocots) usually have leaves with parallel venation. Both statements given in the question describe the opposite, incorrect pairing."
  },
  {
    "id": 437,
    "text": "Identify the process of cutting the Woolen fleece of a sheep from the following. (TSTET 30 June 2025)",
    "options": [
      "Scouring",
      "Shearing",
      "Stifling",
      "Sorting"
    ],
    "correct": "Shearing",
    "explanation": "Shearing is the specific term for the process of cutting off a sheep's fleece. Scouring refers to washing the wool, and sorting is the process of grading the wool by quality."
  },
  {
    "id": 438,
    "text": "Identify the plant that stores food materials in stem. (TSTET 30 June 2025)",
    "options": [
      "Potato",
      "Sweet potato",
      "Carrot",
      "Radish"
    ],
    "correct": "Potato",
    "explanation": "A potato is a tuber, which is a type of modified underground stem that stores starch as food for the plant. In contrast, sweet potatoes, carrots, and radishes are all modified roots (taproots) that store food."
  },
  {
    "id": 439,
    "text": "Identify the phyla that are known for having an open circulatory system. A) Annelida B) Arthropoda C) Mollusca D) Echinodermata (TSTET 30 June 2025)",
    "options": [
      "A & B only",
      "B & C only",
      "A & D only",
      "A, B & D only"
    ],
    "correct": "B & C only",
    "explanation": "Arthropods (e.g., insects, spiders) and most Molluscs (e.g., snails, clams) have an open circulatory system, where blood (hemolymph) is not always contained within vessels and flows freely in the body cavity. Annelids (e.g., earthworms) have a closed circulatory system. Echinoderms have a unique water vascular system."
  },
  {
    "id": 440,
    "text": "Diatom is a/an. (TSTET 30 June 2025)",
    "options": [
      "Protozoan",
      "Fungus",
      "Bacterium",
      "Alga"
    ],
    "correct": "Alga",
    "explanation": "Diatoms are a major group of unicellular photosynthetic algae found in oceans, waterways, and soils. They are a type of phytoplankton characterized by their unique cell walls made of silica called frustules."
  },
  {
    "id": 441,
    "text": "Identify the hormone that is secreted in both male and female humans. (TSTET 30 June 2025)",
    "options": [
      "Follicle-stimulating hormone",
      "Testosterone",
      "Oestrogen",
      "Progesterone"
    ],
    "correct": "Follicle-stimulating hormone",
    "explanation": "Follicle-stimulating hormone (FSH) is a gonadotropin synthesized and secreted by the pituitary gland in both males and females. It plays a crucial role in regulating reproductive processes. In females, it stimulates the maturation of ovarian follicles, while in males, it is essential for spermatogenesis (sperm production). Testosterone, estrogen, and progesterone are sex hormones primarily associated with males or females, though they exist in small amounts in the opposite sex."
  },
  {
    "id": 442,
    "text": "Which of the following gas in the normal atmosphere is in much smaller quantities? (TSTET 30 June 2025)",
    "options": [
      "Ar",
      "O₂",
      "CO₂",
      "N₂"
    ],
    "correct": "CO₂",
    "explanation": "The composition of Earth's atmosphere is approximately 78% Nitrogen (N₂), 21% Oxygen (O₂), and 0.93% Argon (Ar). Carbon dioxide (CO₂) is a trace gas, making up only about 0.04% of the atmosphere. Therefore, of the options provided, CO₂ is present in the smallest quantity."
  },
  {
    "id": 443,
    "text": "Which of the following animal is listed in endangered list? (TSTET 30 June 2025)",
    "options": [
      "Asiatic lion",
      "Kangaroo",
      "Desert fox",
      "Pigeon"
    ],
    "correct": "Asiatic lion",
    "explanation": "The Asiatic lion (Panthera leo leo) is listed as an endangered species on the IUCN Red List. Its population is restricted to a single location in India's Gir National Park. The other animals listed are generally considered species of 'Least Concern' and are not endangered."
  },
  {
    "id": 444,
    "text": "Tracheal Respiratory system is present in this organism. (TSTET 30 June 2025)",
    "options": [
      "Fish",
      "Frog",
      "Earthworm",
      "Cockroach"
    ],
    "correct": "Cockroach",
    "explanation": "Insects, such as the cockroach, have a tracheal system for respiration. This is a network of air-filled tubes (tracheae) that open to the outside through pores called spiracles and deliver oxygen directly to the body tissues. Fish use gills, adult frogs use lungs and their skin, and earthworms respire through their moist skin."
  },
  {
    "id": 445,
    "text": "Ravi, a Physical Science teacher, applied alcohol on a student's hand and asked him to observe and describe the sensation. He repeated the process with spirit and petrol. The student reported a cooling effect each time. Based on this, identify what teaching method the teacher is using. (TSTET 30 June 2025)",
    "options": [
      "Deductive method",
      "Inductive method",
      "Lecture method",
      "Heuristic method"
    ],
    "correct": "Inductive method",
    "explanation": "The teacher is using the inductive method. This pedagogical approach involves presenting specific examples or observations (cooling effect of alcohol, spirit, and petrol) and guiding students to form a general conclusion or principle from them (volatile liquids cause cooling due to evaporation). This is the opposite of the deductive method, which starts with a general rule and applies it to specific cases."
  },
  {
    "id": 446,
    "text": "Which of the following learning experiences is NOT categorized in Edgar Dale's cone of experience? (TSTET 30 June 2025)",
    "options": [
      "Direct purposeful experience",
      "Contrived experience",
      "Dramatized experience",
      "Vicarious experience"
    ],
    "correct": "Vicarious experience",
    "explanation": "Edgar Dale's Cone of Experience is a model that classifies learning experiences into different levels based on their concreteness. 'Direct purposeful experience', 'Contrived experience', and 'Dramatized experience' are specific, distinct levels on the cone. 'Vicarious experience' is a broad psychological term for learning indirectly through others, which covers several levels of the cone (like watching a demonstration or a movie) but is not a specific category itself within Dale's framework."
  },
  {
    "id": 447,
    "text": "During a laboratory experiment, a student accidentally splashes sodium hydroxide solution into his eye. As a science teacher, which of the following would you choose to wash the eye as the most appropriate first-aid treatment for this eye injury? (TSTET 30 June 2025)",
    "options": [
      "A large amount of water",
      "A dilute solution of boric acid",
      "A dilute solution of sodium bicarbonate",
      "A dilute solution of Acetic acid"
    ],
    "correct": "A large amount of water",
    "explanation": "The immediate and most critical first aid for a chemical splash in the eye, especially with a corrosive base like sodium hydroxide, is to flush the eye with a large, continuous stream of clean water for at least 15-20 minutes. This dilutes and removes the chemical. Attempting to neutralize a strong base with a weak acid in the eye is dangerous as the heat from the neutralization reaction can cause further thermal burns."
  },
  {
    "id": 448,
    "text": "Which of the following statement is TRUE regarding the scientific method? (TSTET 30 June 2025)",
    "options": [
      "Hypotheses can be proved",
      "The scientific method is a linear process",
      "Observation is the first step in the scientific method",
      "Conclusions are final and cannot be revised"
    ],
    "correct": "Observation is the first step in the scientific method",
    "explanation": "The scientific method is a systematic process for inquiry that typically begins with an observation of a phenomenon in the natural world, which leads to a question. The other statements are false. Hypotheses can be strongly supported but are never considered definitively 'proven' in science. The process is iterative and cyclical, not strictly linear. Scientific conclusions are always considered tentative and are subject to revision based on new evidence."
  },
  {
    "id": 449,
    "text": "A science teacher wants to assess students' ability to design an experiment to test a hypothesis. Which of the following assessment methods would be most appropriate? (TSTET 30 June 2025)",
    "options": [
      "Multiple-choice test",
      "Essay question",
      "Performance task",
      "True/False quiz"
    ],
    "correct": "Performance task",
    "explanation": "To assess a student's ability to perform a complex skill like designing an experiment, a performance task is the most suitable method. This requires the student to actually create an experimental design, demonstrating their understanding of variables, controls, and procedures. Multiple-choice and true/false questions test recall of facts, while an essay can describe the process but doesn't show the practical application of the skill."
  },
  {
    "id": 450,
    "text": "The main purpose of a science fair project is to. (TSTET 30 June 2025)",
    "options": [
      "Win a prize",
      "Demonstrate a known scientific principle",
      "Engage in the process of scientific inquiry",
      "Build a visually appealing display"
    ],
    "correct": "Engage in the process of scientific inquiry",
    "explanation": "The primary educational objective of a science fair is to provide students with a hands-on opportunity to engage in the process of scientific inquiry. This involves identifying a problem, formulating a hypothesis, designing and conducting an experiment, analyzing data, and communicating results. While the other options can be components of a project, they are secondary to the core goal of experiencing the scientific method."
  },
  {
    "id": 451,
    "text": "Ramesh, a student of class IX, knows the mass and volume of an object. Which of the following quantities can he calculate? (TSTET 11 Jan 2025)",
    "options": [
      "Density of the object",
      "Kinetic energy of the object",
      "Acceleration of the object",
      "Pressure exerted by the object on the ground"
    ],
    "correct": "Density of the object",
    "explanation": "Density is a physical property defined as mass per unit volume. The formula for density ($ \rho $) is $ \rho = \frac{m}{V} $, where 'm' is mass and 'V' is volume. Since Ramesh knows both mass and volume, he can directly calculate the object's density. To calculate kinetic energy ($ KE = \frac{1}{2}mv^2 $), velocity is required. To calculate acceleration, a change in velocity over time is needed. To calculate pressure, the force exerted and the area over which it is applied are required."
  },
  {
    "id": 452,
    "text": "If the position of the Moon is at \"1\" in the lunar cycle (assuming \"1\" refers to a specific phase or position of the Moon), which of the following is true? (TSTET 11 Jan 2025)",
    "options": [
      "The Moon is in the new moon phase of Lunar month, where it is positioned between the Earth and the Sun.",
      "The Moon is in the full moon phase of the Lunar month, where it is opposite to the Sun and the Earth between them.",
      "The Moon is in the first quarter phase of the Lunar month, where half of the Moon's visible surface is illuminated.",
      "The Moon is in its last quarter phase of the Lunar month, where half of its visible surface is illuminated, but the light comes from the opposite side compared to the first quarter."
    ],
    "correct": "The Moon is in the new moon phase of Lunar month, where it is positioned between the Earth and the Sun.",
    "explanation": "The lunar cycle typically begins with the New Moon phase. During the New Moon, the Moon is located on the same side of the Earth as the Sun. Its illuminated side is facing away from the Earth, so it is not visible in the night sky. This alignment places the Moon between the Earth and the Sun."
  },
  {
    "id": 453,
    "text": "A ray of light strikes a plane mirror at an angle of $30^{\\circ}$ with respect to the normal. If the angle of incidence is increased to $45^{\\circ}$ which of the following statements is correct regarding the reflected ray? (TSTET 11 Jan 2025)",
    "options": [
      "The reflected ray will move away from the normal and its angle of reflection will remain at $30^{\\circ}$.",
      "The reflected ray will move closer to the normal and its angle of reflection will increase.",
      "The reflected ray will move closer to the normal and its angle of reflection will always be half the angle of incidence.",
      "The reflected ray will move away from the normal and its angle of reflection will be equal to the angle of incidence."
    ],
    "correct": "The reflected ray will move away from the normal and its angle of reflection will be equal to the angle of incidence.",
    "explanation": "The Law of Reflection states two principles: 1) The incident ray, the reflected ray, and the normal to the surface all lie in the same plane. 2) The angle of incidence ($ \theta_i $) is equal to the angle of reflection ($ \theta_r $). Therefore, if the angle of incidence is increased to $45^{\\circ}$, the angle of reflection must also become $45^{\\circ}$. An increase in the angle means the ray moves further away from the normal."
  },
  {
    "id": 454,
    "text": "Read the following statements and choose the correct answer. Statement I: A vibrating body produces sound by creating disturbance in the surrounding medium (air, water, etc.). Statement II: Normal sounds typically consist of mixed frequencies, because they involve multiple vibrations occurring simultaneously. (TSTET 11 Jan 2025)",
    "options": [
      "Statement I is correct; Statement II is incorrect.",
      "Statement I is incorrect; Statement II is correct.",
      "Both Statement I and Statement II are correct and related.",
      "Both Statement I and Statement II are incorrect and not related."
    ],
    "correct": "Both Statement I and Statement II are correct and related.",
    "explanation": "Statement I accurately describes how sound is produced; it is a mechanical wave created by vibrations that propagate through a medium. Statement II is also correct; most real-world sounds are complex and composed of a fundamental frequency along with multiple overtones (harmonics), resulting from complex vibrations. The statements are related because the complex vibrations (multiple frequencies) mentioned in II are what create the disturbances in the medium described in I."
  },
  {
    "id": 455,
    "text": "A car travels from rest with a constant acceleration 'a' for 20 seconds. What is the average speed of the car if the car moves along a straight road? (TSTET 11 Jan 2025)",
    "options": [
      "$ \frac{10}{a} $",
      "10a",
      "20a",
      "$ \frac{20}{a} $"
    ],
    "correct": "10a",
    "explanation": "For an object moving with constant acceleration, the average speed can be calculated as the average of the initial and final speeds. The initial speed ($u$) is 0 since the car starts from rest. The final speed ($v$) after time 't' is given by the equation of motion $v = u + at$. Here, $v = 0 + a(20) = 20a$. The average speed is $ \frac{u+v}{2} = \frac{0 + 20a}{2} = 10a $."
  },
  {
    "id": 456,
    "text": "Among the following, which is true about the Earth's magnetic field? (TSTET 11 Jan 2025)",
    "options": [
      "The magnetic field lines run parallel to the equator.",
      "The magnetic north pole is the same as the geographic north pole.",
      "The magnetic field is the strongest at the magnetic poles.",
      "The Earth's magnetic field has no effect on compasses."
    ],
    "correct": "The magnetic field is the strongest at the magnetic poles.",
    "explanation": "The Earth acts like a large bar magnet. Its magnetic field lines emerge from the southern hemisphere and re-enter in the northern hemisphere. These field lines are most concentrated at the magnetic poles, which is where the magnetic field strength is at its maximum. The magnetic poles do not coincide with the geographic poles, and compasses work by aligning with this magnetic field."
  },
  {
    "id": 457,
    "text": "Three resistors, each of resistance X Ω, are connected in both series and parallel. If the resulting total resistance in both configurations is the same, what is the value of X? (TSTET 11 Jan 2025)",
    "options": [
      "0 Ω",
      "1 Ω",
      "3 Ω",
      "9 Ω"
    ],
    "correct": "0 Ω",
    "explanation": "When three resistors of resistance X are connected in series, the total resistance is $R_{series} = X + X + X = 3X$. When connected in parallel, the total resistance $R_{parallel}$ is given by $ \frac{1}{R_{parallel}} = \frac{1}{X} + \frac{1}{X} + \frac{1}{X} = \frac{3}{X} $, so $R_{parallel} = \frac{X}{3}$. If the two configurations have the same resistance, then $R_{series} = R_{parallel}$, which means $3X = \frac{X}{3}$. This simplifies to $9X = X$, or $8X = 0$. The only possible solution for this equation is $X = 0~\Omega$."
  },
  {
    "id": 458,
    "text": "Raju, a Physical Science teacher, wants to demonstrate the liberation of hydrogen gas experiment in his laboratory. However, Hydrochloric acid is not available. Which of the following substances can he use as an alternative to produce hydrogen gas by reacting with Zinc? (TSTET 11 Jan 2025)",
    "options": [
      "Potassium permanganate",
      "Calcium sulphate",
      "Hydrogen peroxide",
      "Sodium hydroxide"
    ],
    "correct": "Sodium hydroxide",
    "explanation": "Zinc is an amphoteric metal, meaning it reacts with both strong acids and strong bases to produce hydrogen gas. While it commonly reacts with acids like HCl, it will also react with a strong base like sodium hydroxide (NaOH) to produce sodium zincate and hydrogen gas. The chemical equation is: $Zn + 2NaOH \\rightarrow Na_2ZnO_2 + H_2$."
  },
  {
    "id": 459,
    "text": "One mole of a substance is defined as the amount of the substance that contains as many particles (atoms, molecules, or ions... etc) or entities that are equal to the atoms present in exactly 12 grams of the carbon ($^{12}C$) isotope. The number of particles present in one mole of any substance is: (TSTET 11 Jan 2025)",
    "options": [
      "$1.622 \times 10^{-32}$",
      "$6.022 \times 10^{32}$",
      "$6.022 \times 10^{23}$",
      "$6.022 \times 10^{-23}$"
    ],
    "correct": "$6.022 \times 10^{23}$",
    "explanation": "This specific number is a fundamental constant in chemistry known as Avogadro's constant or Avogadro's number ($N_A$). It represents the number of constituent particles (such as atoms, molecules, or ions) per mole of a substance. The accepted value is approximately $6.022 \times 10^{23}$ mol$^{-1}$."
  },
  {
    "id": 460,
    "text": "The number of elements in Newland's Periodic Table was: (TSTET 11 Jan 2025)",
    "options": [
      "50",
      "56",
      "60",
      "64"
    ],
    "correct": "56",
    "explanation": "In 1866, John Newlands proposed his Law of Octaves. He arranged the 56 elements known at that time in order of increasing atomic weight and observed that every eighth element exhibited similar properties. His table began with hydrogen and ended with thorium, encompassing a total of 56 elements."
  },
  {
    "id": 461,
    "text": "Two lenses with powers of 4D and 6D are placed in contact. Then calculate the total power of the lens system. (TSTET 11 Jan 2025)",
    "options": [
      "2D",
      "10D",
      "2.4D",
      "12D"
    ],
    "correct": "10D",
    "explanation": "When thin lenses are placed in contact with each other, the power of the combination is the algebraic sum of the individual powers. The formula is $P_{total} = P_1 + P_2$. Given $P_1 = 4$ D and $P_2 = 6$ D, the total power is $P_{total} = 4\text{D} + 6\text{D} = 10\text{D}$."
  },
  {
    "id": 462,
    "text": "In the electrolytic refining of copper, which of the following metals is NOT typically found at the bottom of the anode as 'anode mud'? (TSTET 11 Jan 2025)",
    "options": [
      "Silver",
      "Gold",
      "Platinum",
      "Magnesium"
    ],
    "correct": "Magnesium",
    "explanation": "During the electrolytic refining of copper, the impure copper anode dissolves. Less reactive metal impurities like silver, gold, and platinum do not dissolve and settle at the bottom, forming anode mud. More reactive metals, such as magnesium, are more easily oxidized than copper. They will dissolve into the electrolyte solution along with the copper but will not be deposited onto the pure copper cathode because they are more difficult to reduce than copper ions."
  },
  {
    "id": 463,
    "text": "The onion peel cell can be differentiated from the cheek cell by the presence of (TSTET 11 Jan 2025)",
    "options": [
      "Cell membrane",
      "Cytoplasm",
      "Nucleus",
      "Cell wall"
    ],
    "correct": "Cell wall",
    "explanation": "An onion peel cell is a plant cell, while a human cheek cell is an animal cell. The most distinct structural difference between plant and animal cells is the presence of a rigid cell wall outside the cell membrane in plant cells. This cell wall, made of cellulose, provides structural support. Animal cells lack a cell wall. Both cell types possess a cell membrane, cytoplasm, and a nucleus."
  },
  {
    "id": 464,
    "text": "The 'S' shaped nucleus is found in the following cells of WBC (TSTET 11 Jan 2025)",
    "options": [
      "Neutrophils",
      "Eosinophils",
      "Basophils",
      "Lymphocytes"
    ],
    "correct": "Basophils",
    "explanation": "Basophils, a type of white blood cell (WBC), are characterized by a bilobed or often indistinct S-shaped nucleus, which is typically obscured by large, coarse, dark-purple staining granules in the cytoplasm. In contrast, neutrophils have a multi-lobed nucleus, eosinophils have a bilobed nucleus (like headphones), and lymphocytes have a large, round nucleus."
  },
  {
    "id": 465,
    "text": "The leakage of which gas from the factory resulted in the Bhopal gas tragedy (TSTET 11 Jan 2025)",
    "options": [
      "Chlorofluorocarbons",
      "Methyl Isocyanate",
      "Compressed Natural gas",
      "Hydrogen Sulphide"
    ],
    "correct": "Methyl Isocyanate",
    "explanation": "The Bhopal gas tragedy, which occurred in December 1984, was a catastrophic industrial disaster caused by the accidental release of over 40 tons of highly toxic Methyl Isocyanate (MIC) gas from a pesticide plant owned by Union Carbide India Limited."
  },
  {
    "id": 466,
    "text": "Identify the primary consumer in the following food chain. Grass → Grasshopper → Frog→ Snake → Eagle (TSTET 11 Jan 2025)",
    "options": [
      "Grasshopper",
      "Snake",
      "Frog",
      "Eagle"
    ],
    "correct": "Grasshopper",
    "explanation": "In a food chain, organisms are classified by their trophic level. Producers (like grass) create their own food. Primary consumers are herbivores that feed on producers. In this chain, the grasshopper eats the grass, making it the primary consumer. The frog is the secondary consumer, the snake is the tertiary consumer, and the eagle is the quaternary consumer."
  },
  {
    "id": 467,
    "text": "Match the following: A) Testes, B) Adrenal gland, C) Pituitary gland, D) Ovaries with their hormones i) Progesterone, ii) Follicle Stimulating Hormone, iii) Testosterone, iv) Adrenalin. (TSTET 11 Jan 2025)",
    "options": [
      "A-iii; B-iv; C-ii; D-i",
      "A-i; B-iii; C-iv; D-ii",
      "A-iii; B-iv; C-i; D-ii",
      "A-iii; B-i; C-ii; D-iv"
    ],
    "correct": "A-iii; B-iv; C-ii; D-i",
    "explanation": "Matching the endocrine glands with the hormones they produce: (A) Testes produce the male hormone (iii) Testosterone. (B) The Adrenal gland produces (iv) Adrenalin, the 'fight-or-flight' hormone. (C) The Pituitary gland produces many hormones, including (ii) Follicle Stimulating Hormone (FSH). (D) Ovaries produce female hormones like (i) Progesterone. Thus, the correct combination is A-iii, B-iv, C-ii, D-i."
  },
  {
    "id": 468,
    "text": "The sleeping sickness is caused by (TSTET 11 Jan 2025)",
    "options": [
      "Bacterium",
      "Virus",
      "Protozoan",
      "Fungus"
    ],
    "correct": "Protozoan",
    "explanation": "African trypanosomiasis, commonly known as sleeping sickness, is a parasitic disease caused by a protozoan from the genus *Trypanosoma*. The parasite is transmitted to humans through the bite of an infected tsetse fly."
  },
  {
    "id": 469,
    "text": "Identify the pair of microorganisms that belong to different groups. (TSTET 11 Jan 2025)",
    "options": [
      "Chlamydomonas, Oedogonium",
      "Penicillium, Aspergillus",
      "Spirulina, Vorticella",
      "Cyclops, Daphnia"
    ],
    "correct": "Spirulina, Vorticella",
    "explanation": "Analyzing the pairs: 'Chlamydomonas' and 'Oedogonium' are both green algae. 'Penicillium' and 'Aspergillus' are both types of fungi. 'Cyclops' and 'Daphnia' are both small crustaceans. 'Spirulina' is a type of cyanobacteria (prokaryote), whereas 'Vorticella' is a protozoan (eukaryote). Therefore, Spirulina and Vorticella belong to different major biological groups."
  },
  {
    "id": 470,
    "text": "The male sexual parts of the flower are (TSTET 11 Jan 2025)",
    "options": [
      "Thalamus, Calyx, Corolla",
      "Style, Stigma, Ovary",
      "Calyx, Thalamus, Ovule",
      "Filament, anther, pollen grains"
    ],
    "correct": "Filament, anther, pollen grains",
    "explanation": "The male reproductive organ of a flower is the stamen. The stamen is composed of two main parts: the anther, which produces pollen grains (the male gametes), and the filament, which is the stalk that supports the anther. The style, stigma, and ovary constitute the pistil, the female part. The other options list non-reproductive parts of the flower."
  },
  {
    "id": 471,
    "text": "Which of the following are NOT insectivorous plants? A) Drosera B) Agaricus C) Utricularia D) Cuscuta (TSTET 11 Jan 2025)",
    "options": [
      "A & B only",
      "A & C only",
      "C & D only",
      "B & D only"
    ],
    "correct": "B & D only",
    "explanation": "Insectivorous plants trap insects to supplement their nutrition. Drosera (sundew) and Utricularia (bladderwort) are examples of insectivorous plants. Agaricus is a mushroom, which is a fungus and a decomposer (saprophyte). Cuscuta (dodder) is a parasitic plant that derives its nutrients from a host plant. Therefore, Agaricus (B) and Cuscuta (D) are not insectivorous."
  },
  {
    "id": 472,
    "text": "Identify a pair of diseases in plants which are caused by fungi. (TSTET 11 Jan 2025)",
    "options": [
      "Smut disease and Red rot disease",
      "Tobacco Mosaic disease and Tikka disease",
      "Smut disease and Tobacco Mosaic disease",
      "Red Rot disease and Citrus Canker disease"
    ],
    "correct": "Smut disease and Red rot disease",
    "explanation": "Smut disease, affecting cereals like corn, is caused by various species of fungi. Red rot disease, common in sugarcane, is also caused by a fungus (*Colletotrichum falcatum*). In the other options, Tobacco Mosaic disease is caused by a virus, and Citrus Canker is caused by a bacterium, making those pairs incorrect."
  },
  {
    "id": 473,
    "text": "Bird 'Kiwi' is an example for (TSTET 11 Jan 2025)",
    "options": [
      "Extinct species",
      "Endemic species",
      "Endangered species",
      "Invasive Alien species"
    ],
    "correct": "Endemic species",
    "explanation": "Endemic species are plants or animals that exist only in one specific geographic location. The kiwi is a flightless bird native to and found only in New Zealand, making it a perfect example of an endemic species. While some kiwi species are also classified as endangered, their most defining characteristic in this context is their geographic exclusivity."
  },
  {
    "id": 474,
    "text": "Apiculture is related to (TSTET 11 Jan 2025)",
    "options": [
      "Rearing of Fishes",
      "Rearing of Honeybees",
      "Rearing of Silk moths",
      "Rearing of Birds"
    ],
    "correct": "Rearing of Honeybees",
    "explanation": "Apiculture, also known as beekeeping, is the practice of maintaining bee colonies, usually in man-made hives. Beekeepers manage bees to collect their products like honey, beeswax, and royal jelly, and also for the purpose of pollinating crops. 'Pisciculture' is the rearing of fishes, and 'Sericulture' is the rearing of silk moths."
  },
  {
    "id": 475,
    "text": "Ravi taught the lesson \"Simple Electric Circuits\" to his class 6 students. A student in that class repaired a \"circuit board\" at home. Which step in the 5E learning model does it emphasize? (TSTET 11 Jan 2025)",
    "options": [
      "Engage",
      "Explore",
      "Explain",
      "Elaborate"
    ],
    "correct": "Elaborate",
    "explanation": "The 5E learning model consists of Engage, Explore, Explain, Elaborate, and Evaluate. The 'Elaborate' phase encourages learners to apply their newfound knowledge to new or different situations. By repairing a circuit board, the student is extending the concepts learned about simple circuits in the classroom to a new, practical, real-world application. This act of applying and extending understanding is the core of the Elaborate stage."
  },
  {
    "id": 476,
    "text": "Among the following methods, which method is typically NOT used for assessing student progress? (TSTET 11 Jan 2025)",
    "options": [
      "Summative Assessment",
      "Formative Assessment",
      "Social Media Activity",
      "Portfolio"
    ],
    "correct": "Social Media Activity",
    "explanation": "Summative assessment (e.g., final exams), formative assessment (e.g., quizzes, observations), and portfolios (collections of a student's work) are all standard and recognized methods for evaluating student learning and progress in an educational context. Social media activity is not a formal, reliable, or valid method for assessing academic progress."
  },
  {
    "id": 477,
    "text": "Which is NOT in the steps of period plan in science subject in Telangana state? (TSTET 11 Jan 2025)",
    "options": [
      "Mind mapping",
      "Initiative",
      "Reading-Recognising Keywords",
      "Demonstration-Discussion"
    ],
    "correct": "Initiative",
    "explanation": "The standard structure for a period plan in Telangana schools often includes specific pedagogical steps such as 'Mind mapping' to activate prior knowledge, 'Reading-Recognising Keywords' for comprehension, and activities like 'Demonstration-Discussion' for conceptual understanding. 'Initiative' is a desirable student trait or a general learning objective, but it is not a formal, prescribed step within the period plan template itself."
  },
  {
    "id": 478,
    "text": "Before introducing Continuous Comprehensive Evaluation (CCE), one of the following was considered as a major cause for the increase in dropout rates in schools? (TSTET 11 Jan 2025)",
    "options": [
      "Subject centred Curriculum",
      "Grading System",
      "Practice of Pass-Fail System",
      "Maintenance of Student Portfolios"
    ],
    "correct": "Practice of Pass-Fail System",
    "explanation": "One of the key motivations for introducing CCE was to move away from a system heavily reliant on a single final examination that resulted in a strict pass-fail outcome. The pressure and fear of failing this single exam, and the consequence of having to repeat an entire academic year, were identified as significant contributors to student stress and high dropout rates. CCE aimed to reduce this pressure through continuous, varied, and holistic evaluation."
  },
  {
    "id": 479,
    "text": "One of the following is NOT a feature of Micro Teaching: (TSTET 11 Jan 2025)",
    "options": [
      "It gives a real teaching experience to the trainee teachers.",
      "It is a group training device.",
      "All the aspects of classroom teaching are scaled down.",
      "It provides a good feedback for trainees' performance."
    ],
    "correct": "It is a group training device.",
    "explanation": "Micro-teaching is a teacher training technique that focuses on developing specific teaching skills. It is an individual training device where one teacher-trainee practices a skill by teaching a small group of students for a short period. The other options are core features: it's a real teaching experience, it's scaled down in terms of class size, time, and content, and its main purpose is to provide immediate and focused feedback."
  },
  {
    "id": 480,
    "text": "In a secondary level Biological science classroom, a teacher is explaining the digestive system in cockroach through demonstration by dissecting a cockroach. According to Edgar Dale's cone of experiences, which of the following sources the teacher is using in this context? A) Enactive B) Iconic C) Symbolic (TSTET 11 Jan 2025)",
    "options": [
      "A only",
      "B only",
      "A & B only",
      "A & C only"
    ],
    "correct": "A only",
    "explanation": "Edgar Dale's Cone of Experience classifies learning from most concrete to most abstract. The 'Enactive' stage at the base represents direct, purposeful, hands-on experiences ('learning by doing'). This includes direct experiences, contrived experiences, and dramatized experiences. A live demonstration involving the dissection of a real specimen is a direct, real-time, purposeful experience. Even for the observing students, it is the most concrete form of learning available in this context, far more so than watching a video (Iconic) or reading text (Symbolic). Therefore, it falls under the Enactive category."
  },
    {
    "id": 481,
    "text": "The method of teaching that makes the students to look at knowledge as a whole is (APTET 2011)",
    "options": [
      "Project method",
      "Lecture method",
      "Demonstration method",
      "Discussion method"
    ],
    "correct": "Lecture method",
    "explanation": "While modern pedagogy often associates holistic learning with methods like the Project Method, the key for this question indicates the Lecture Method. The rationale could be that a well-organized lecture can provide a comprehensive, structured overview of a topic, presenting the knowledge as a coherent whole or a complete framework before breaking it down into smaller components."
  },
  {
    "id": "482",
    "text": "Identify the correct sequence of processes in the water cycle. (TSTET 20 Jan 2025)",
    "options": [
      "Evaporation - Precipitation - Collection - Condensation",
      "Evaporation - Condensation - Precipitation - Collection",
      "Condensation - Evaporation - Precipitation - Collection",
      "Precipitation - Evaporation - Collection - Condensation"
    ],
    "correct": "Evaporation - Condensation - Precipitation - Collection",
    "explanation": "The water cycle follows a specific sequence:\n1.  **Evaporation:** The sun heats water in rivers, lakes, and oceans, turning it into vapor or steam, which rises into the air.\n2.  **Condensation:** The water vapor in the air cools down and changes back into liquid, forming clouds.\n3.  **Precipitation:** When so much water has condensed that the air cannot hold it anymore, it falls back to the Earth in the form of rain, hail, or snow.\n4.  **Collection:** The water that falls back to Earth is collected in oceans, lakes, and rivers, or soaks into the ground, starting the cycle over again."
  },
  {
    "id": "483",
    "text": "Identify the inner planet which has highest natural satellites among the following. (TSTET 20 Jan 2025)",
    "options": [
      "Mercury",
      "Venus",
      "Earth",
      "Mars"
    ],
    "correct": "Mars",
    "explanation": "The inner planets are Mercury, Venus, Earth, and Mars.The number of natural satellites for each is as follows:\n* **Mercury:** 0 satellites.\n* **Venus:** 0 satellites.\n* **Earth:** 1 satellite (the Moon).\n* **Mars:** 2 satellites (Phobos and Deimos).\nTherefore, Mars has the highest number of natural satellites among the inner planets."
  },
  {
    "id": "484",
    "text": "Match the following material medium with its refractive index. (TSTET 20 Jan 2025)",
    "options": [
      "A-iv, B-ii, C-i, D-iii",
      "A-i, B-iv, C-iii, D-ii",
      "A-ii, B-iii, C-iv, D-i",
      "A-iii, B-i, C-iv, D-ii"
    ],
    "correct": "A-iii, B-i, C-iv, D-ii",
    "explanation": "The approximate refractive indices for the given materials are:\n* **A) Turpentine Oil:** 1.47\n* **B) Benzene:** 1.50\n* **C) Diamond:** 2.42\n* **D) Carbon disulphide:** 1.63\nThe correct matching is therefore A-iii, B-i, C-iv, D-ii."
  },
  {
    "id": "485",
    "text": "A kaleidoscope primarily rely on this property to create symmetrical patterns. (TSTET 20 Jan 2025)",
    "options": [
      "Diffraction of light",
      "Refraction of light",
      "Multiple reflections of light",
      "Absorption of light"
    ],
    "correct": "Multiple reflections of light",
    "explanation": "A kaleidoscope consists of two or more mirrors placed at an angle to each other inside a tube. When you look through one end, the objects at the other end (like colored beads) are reflected by the mirrors multiple times. This process of **multiple reflections** creates the beautiful, symmetrical patterns that change as the tube is rotated."
  },
  {
    "id": "486",
    "text": "An object of mass 5 kg is at a certain height 'h' above the ground. If the Potential energy of the object is 147J, find the height 'h' at which the object is with respect to the ground (in meters). (take g = 9.8 m/s²). (TSTET 20 Jan 2025)",
    "options": [
      "3",
      "2.94",
      "30",
      "29.4"
    ],
    "correct": "3",
    "explanation": "The formula for gravitational potential energy (PE) is $PE = m \\times g \\times h$, where 'm' is mass, 'g' is the acceleration due to gravity, and 'h' is the height.\nGiven:\nPE = 147 J\nm = 5 kg\ng = 9.8 m/s²\nTo find 'h', we rearrange the formula: $h = \\frac{PE}{m \\times g}$\n$h = \\frac{147}{5 \\times 9.8} = \\frac{147}{49} = 3$ meters."
  },
  {
    "id": "487",
    "text": "To measure the potential difference across two points in a circuit, the voltmeter is connected in: (TSTET 20 Jan 2025)",
    "options": [
      "Series only",
      "Parallel only",
      "Neither series nor parallel",
      "Either series or parallel"
    ],
    "correct": "Parallel only",
    "explanation": "A voltmeter is used to measure the potential difference (voltage) between two points in a circuit. To do this correctly, it must be connected in **parallel** to the component across which the voltage is being measured. An ideal voltmeter has very high internal resistance so that it draws negligible current from the main circuit, thus not altering the potential difference it is intended to measure."
  },
  {
    "id": "488",
    "text": "Electroplating is primarily based on the... (TSTET 20 Jan 2025)",
    "options": [
      "Chemical effect of current",
      "Magnetic effect of current",
      "Thermal effect of current",
      "Electrostatic effect of current"
    ],
    "correct": "Chemical effect of current",
    "explanation": "Electroplating is the process of coating one metal onto another using electrolysis. This process relies on the **chemical effect of electric current**, where passing a current through a conductive solution (electrolyte) causes chemical reactions. In electroplating, metal ions from the solution are deposited onto the object to be coated."
  },
  {
    "id": "489",
    "text": "Petroleum is obtained in the Earth's crust from the following rocks. (TSTET 20 Jan 2025)",
    "options": [
      "Granite rocks",
      "Impervious rocks",
      "Igneous rocks",
      "Metamorphic rocks"
    ],
    "correct": "Impervious rocks",
    "explanation": "Petroleum is formed from ancient organic matter and is found in porous sedimentary rocks (reservoir rocks). However, for it to accumulate in commercially viable quantities, it must be trapped. This trapping is done by a layer of **impervious (non-porous) rock**, also known as a cap rock, which prevents the oil and gas from escaping. Therefore, petroleum is obtained from reservoirs located beneath these impervious rock layers."
  },
  {
    "id": 490,
    "text": "An ancient, convenient and inexpensive method of teaching that is suitable for teaching almost all the subjects of school curriculum is (APTET 2011)",
    "options": [
      "Lecture method",
      "Demonstration method",
      "Source method",
      "Story-telling method"
    ],
    "correct": "Lecture method",
    "explanation": "The lecture method is a traditional and enduring teaching technique. It is considered highly convenient and inexpensive because it requires few resources beyond a teacher's expertise and can be delivered to large audiences. Its versatility allows it to be adapted for teaching foundational knowledge in almost any subject within the school curriculum, making it a practical and widely used method."
  },
  {
    "id": "491",
    "text": "The correct expansion of the acronym VSEPRT is. (TSTET 20 Jan 2025)",
    "options": [
      "Valence Shell Electron Pair Replace Theory",
      "Valence Subatomic Electron Pair Repulsion Theory",
      "Valence Shell Electron Pair Repulsion Theory",
      "Voltage Shell Electron Pair Repulsion Theory"
    ],
    "correct": "Valence Shell Electron Pair Repulsion Theory",
    "explanation": "The acronym VSEPRT stands for **Valence Shell Electron Pair Repulsion Theory**. It is a model used in chemistry to predict the 3D geometry of molecules based on the idea that pairs of electrons in the valence (outermost) shell of a central atom will repel each other and arrange themselves to be as far apart as possible."
  },
  {
    "id": "492",
    "text": "Identify \"X\" in the chemical reaction $Al_2(SO_4)_3 + 3 Ca(OH)_2 \\rightarrow 2\"X\" + 3 CaSO_4$. (TSTET 20 Jan 2025)",
    "options": [
      "AlSO₄",
      "Al₂(OH)₃",
      "Al₂O₃",
      "Al(OH)₃"
    ],
    "correct": "Al(OH)₃",
    "explanation": "This is a double displacement reaction where the cations and anions of the reactants switch partners. Aluminum ($Al^{3+}$) from $Al_2(SO_4)_3$ combines with the hydroxide ($OH^-$) from $Ca(OH)_2$. Since aluminum has a +3 charge and hydroxide has a -1 charge, the resulting compound is aluminum hydroxide, with the formula **Al(OH)₃**. The balanced equation is $Al_2(SO_4)_3 + 3 Ca(OH)_2 \\rightarrow 2 Al(OH)_3 + 3 CaSO_4$."
  },
  {
    "id": "493",
    "text": "Amber colour of urine is due to. (TSTET 20 Jan 2025)",
    "options": [
      "Urochrome",
      "Biliverdin",
      "Bilirubin",
      "Chlorides"
    ],
    "correct": "Urochrome",
    "explanation": "The typical yellow or amber color of urine is caused by a pigment called **urochrome**, also known as urobilin. This pigment is a metabolic byproduct from the breakdown of hemoglobin, the oxygen-carrying protein in red blood cells."
  },
  {
    "id": "494",
    "text": "Cuscuta develops special roots which penetrate into the tissues of the host plant and absorbs food materials from it. These special roots are called... (TSTET 20 Jan 2025)",
    "options": [
      "hooks",
      "aerial roots",
      "haustoria",
      "clinging roots"
    ],
    "correct": "haustoria",
    "explanation": "Cuscuta (also known as dodder) is a parasitic plant. It uses specialized, root-like structures called **haustoria** to penetrate the vascular tissues (xylem and phloem) of a host plant. Through these haustoria, the Cuscuta draws water and nutrients directly from the host."
  },
  {
    "id": "495",
    "text": "One of the following is NOT a micro-arthropod. (TSTET 20 Jan 2025)",
    "options": [
      "Cyclops",
      "Scabies mite",
      "Daphnia",
      "Chlamydomonas"
    ],
    "correct": "Chlamydomonas",
    "explanation": "A micro-arthropod is a very small member of the phylum Arthropoda.\n* **Cyclops** and **Daphnia** are small crustaceans.\n* The **Scabies mite** is a tiny arachnid.\nAll three are micro-arthropods. **Chlamydomonas**, however, is a genus of single-celled green algae, belonging to the Kingdom Protista. It is not an animal and therefore not an arthropod."
  },
  {
    "id": "496",
    "text": "Arrange the following Taxonomical Categories in correct ascending order. (TSTET 20 Jan 2025)",
    "options": [
      "D, C, B, E, F, A, G",
      "D, G, E, C, B, F, A",
      "G, D, F, A, B, E, C",
      "E, F, G, A, B, C, D"
    ],
    "correct": "D, G, E, C, B, F, A",
    "explanation": "The standard biological taxonomic hierarchy in ascending order (from the most specific to the most general rank) is: Species, Genus, Family, Order, Class, Phylum, Kingdom. Matching this sequence with the given letters:\n* **D)** Species\n* **G)** Genus\n* **E)** Family\n* **C)** Order\n* **B)** Class\n* **F)** Phylum\n* **A)** Kingdom\nThe correct sequence is D, G, E, C, B, F, A."
  },
  {
    "id": "497",
    "text": "This layer of skin is made up of elastic connective tissue and contains Sweat glands and Sebaceous glands. (TSTET 20 Jan 2025)",
    "options": [
      "Malpighian layer",
      "Middle granular layer",
      "Stratum corneum",
      "Dermis"
    ],
    "correct": "Dermis",
    "explanation": "The skin consists of two main layers: the outer epidermis and the inner dermis. The epidermis is composed of epithelial cells and has several sub-layers (including the Malpighian layer, granular layer, and stratum corneum) but lacks glands and connective tissue. The **dermis**, located beneath the epidermis, is made of elastic connective tissue and contains structures like blood vessels, nerves, hair follicles, sweat glands, and sebaceous (oil) glands."
  },
  {
    "id": "498",
    "text": "In this year the Government of India declared the Kolleru lake as Bird Sanctuary. (TSTET 20 Jan 2025)",
    "options": [
      "1988",
      "1997",
      "1999",
      "1989"
    ],
    "correct": "1999",
    "explanation": "The Government of India declared Kolleru Lake, a large freshwater lake in Andhra Pradesh, as a wildlife sanctuary in November **1999** under the Wildlife Protection Act of 1972. It was also designated as a wetland of international importance in 2002 under the Ramsar Convention."
  },
 {
    "id": "499",
    "text": "Read the following Assersion and Reason: A: When the cells divide mitotically, the daughter cells always have the same number of chromosomes. R: Mitosis takes place in all body cells which retains the same number of chromosomes and before this mitotic division, the chromosomes are replicated in a parent cell. (TSTET 20 Jan 2025)",
    "options": [
      "A is correct and R is incorrect.",
      "Both A and R are correct but R is not the correct explanation of A.",
      "A is incorrect and R is correct.",
      "Both A and R are correct and R is the correct explanation of A."
    ],
    "correct": "Both A and R are correct and R is the correct explanation of A.",
    "explanation": "The assertion (A) is a correct definition of the outcome of mitosis. The reason (R) is also correct because it describes the mechanism that ensures this outcome: the DNA (chromosomes) is duplicated during the interphase before mitosis begins, so that each daughter cell can receive a full, identical set. Therefore, R is the correct explanation for A."
  },
  {
    "id": "500",
    "text": "The colour of blood in snails is. (TSTET 20 Jan 2025)",
    "options": [
      "blue",
      "red",
      "green",
      "white"
    ],
    "correct": "blue",
    "explanation": "The blood of snails (and many other molluscs and arthropods) is **blue** when oxygenated. This is because their blood, called hemolymph, contains a copper-based protein called hemocyanin to transport oxygen, unlike the iron-based hemoglobin in vertebrates which makes blood red. When deoxygenated, hemocyanin is colorless."
  },
  {
    "id": "501",
    "text": "Which of the following DOES NOT live in the Abyssal oceanic zone? (TSTET 20 Jan 2025)",
    "options": [
      "Angler fish",
      "Brittle star",
      "Tripod fish",
      "Plankton"
    ],
    "correct": "Plankton",
    "explanation": "The abyssal zone is the deep part of the ocean (below 4,000 meters) where there is no sunlight. Angler fish, brittle stars, and tripod fish are all adapted to life in this dark, high-pressure environment. **Plankton**, particularly phytoplankton, are microscopic organisms that rely on photosynthesis for energy. Since photosynthesis requires sunlight, they are found in the upper, sunlit layers of the ocean (the photic zone), not the abyssal zone."
  },
  {
    "id": "502",
    "text": "Montreal protocol is related to. (TSTET 20 Jan 2025)",
    "options": [
      "Protection of ozone layer",
      "Global warming (Green house effect)",
      "Protecting fresh water lakes from pollution",
      "Bio-diversity conservation"
    ],
    "correct": "Protection of ozone layer",
    "explanation": "The Montreal Protocol is a landmark international treaty, signed in 1987, designed specifically for the **protection of the ozone layer**. Its primary goal is to phase out the production and consumption of substances, such as chlorofluorocarbons (CFCs), that are responsible for depleting the stratospheric ozone layer."
  },
  {
    "id": "505",
    "text": "Ramana, an 8th-grade student, changed his opinion on a certain topic after receiving new information. This reflects his... (TSTET 20 Jan 2025)",
    "options": [
      "Scientific enquiry",
      "Scientific attitude",
      "Scientific interest",
      "Scientific appreciation"
    ],
    "correct": "Scientific attitude",
    "explanation": "A **scientific attitude** is characterized by traits such as open-mindedness, objectivity, curiosity, and a willingness to revise or change one's conclusions when presented with new, credible evidence. Ramana's action of changing his opinion based on new information is a perfect example of demonstrating a scientific attitude."
  },
  {
    "id": "506",
    "text": "Among the following, which best describes the \"Demonstration Method\" in science Teaching methods? (TSTET 20 Jan 2025)",
    "options": [
      "Students actively engage in hands-on experiments without teacher involvement.",
      "Students watch videos on scientific phenomena and discuss them in groups.",
      "Students conduct experiments individually and report their findings.",
      "The teacher performs an experiment and explains the process and results to students."
    ],
    "correct": "The teacher performs an experiment and explains the process and results to students.",
    "explanation": "The Demonstration Method is a teacher-centered approach. In this method, the **teacher performs an experiment or activity in front of the class to illustrate a scientific principle or concept**. The students' role is primarily to observe the demonstration and listen to the teacher's explanation of the process and outcomes."
  },
  {
    "id": "507",
    "text": "Among the following, this is NOT a characteristic of a good science textbook according to Vogel. (TSTET 20 Jan 2025)",
    "options": [
      "Using complex terminology and vocabulary",
      "Clear and simple language",
      "Logical and systematic presentation of concepts",
      "Engaging illustrations and examples"
    ],
    "correct": "Using complex terminology and vocabulary",
    "explanation": "According to pedagogical principles, a good textbook should be accessible and understandable to the learner. Therefore, it should use clear and simple language, have a logical presentation, and include engaging visuals. **Using complex terminology and vocabulary** that is beyond the students' level of comprehension is a characteristic of a poorly designed textbook, not a good one, as it creates a barrier to learning."
  },
  {
    "id": "508",
    "text": "\"A Unit is as large a block of related subject matter as can be over-viewed by the learner.\" The above definition of UNIT was given by. (TSTET 20 Jan 2025)",
    "options": [
      "Preston",
      "Morrison",
      "John Fredrik Herbert",
      "Wisely"
    ],
    "correct": "Preston",
    "explanation": "This specific definition, which emphasizes the cognitive scope of a unit from the learner's perspective, is widely attributed to **Preston**. His work was significant in the development of the unit method of planning instruction in the curriculum."
  },
  {
    "id": "509",
    "text": "This step of the lesson plan includes revisiting the concepts that are learnt during the teaching session and helps in review of the lesson as well as evaluation of the knowledge and understanding gained by the learners. (TSTET 20 Jan 2025)",
    "options": [
      "Presentation",
      "Follow-up activity",
      "Introduction",
      "Recapitulation"
    ],
    "correct": "Recapitulation",
    "explanation": "**Recapitulation** is the step at the end of a lesson where the teacher summarizes the key points and concepts that were taught. Its purpose is to reinforce learning, consolidate the information for students, and provide a quick way for the teacher to assess whether the learning objectives have been met."
  },
  {
    "id": "510",
    "text": "One of the following is NOT a merit of Deductive Approach. (TSTET 20 Jan 2025)",
    "options": [
      "It saves time",
      "It encourages memorisation of facts",
      "It simplifies teacher's work",
      "It is an effective way of teaching difficult topics"
    ],
    "correct": "It encourages memorisation of facts",
    "explanation": "The deductive approach (from general rule to specific example) has several merits, including saving time and simplifying the teacher's work. However, one of its main criticisms or **demerits** is that it can **encourage rote memorisation of facts** and rules without fostering a deeper conceptual understanding. Students may learn to apply a formula without knowing why it works. Therefore, encouraging memorization is not considered a merit of this approach in modern pedagogy."
  },
  {
    "id": "511",
    "text": "An anemometer measures this property of the air/wind. (TSTET 20 Jan 2025)",
    "options": [
      "humidity",
      "speed and direction",
      "heat conduction",
      "pollution"
    ],
    "correct": "speed and direction",
    "explanation": "An anemometer is a meteorological instrument used for measuring wind speed. Some versions can also determine wind direction. Humidity is measured with a hygrometer, heat conduction relates to thermal energy transfer, and pollution levels are measured with specific gas or particulate sensors."
  },
  {
    "id": "512",
    "text": "The first outer planet in solar system counted from the Sun (TSTET 20 Jan 2025)",
    "options": [
      "Mars",
      "Mercury",
      "Saturn",
      "Jupiter"
    ],
    "correct": "Jupiter",
    "explanation": "The planets are ordered from the Sun as Mercury, Venus, Earth, Mars (the inner planets), followed by the asteroid belt, and then Jupiter, Saturn, Uranus, and Neptune (the outer planets). Therefore, Jupiter is the first outer planet."
  },
  {
    "id": "513",
    "text": "Identify the correct set of vision defects (myopia and hypermetropia), along with the type of lens used for their correction. (TSTET 20 Jan 2025)",
    "options": [
      "Myopia Plano Convex lens",
      "Hypermetropia- Plano Concave lens",
      "Myopia- Concave lens",
      "Hypermetropia- Concave lens"
    ],
    "correct": "Myopia- Concave lens",
    "explanation": "Myopia, or nearsightedness, occurs when the eye focuses images in front of the retina instead of on the retina. This is corrected using a diverging (concave) lens. Hypermetropia, or farsightedness, is corrected using a converging (convex) lens. Therefore, the pairing of Myopia with a Concave lens is correct."
  },
  {
    "id": "514",
    "text": "Identify the correct statement from the following about sound waves. (TSTET 20 Jan 2025)",
    "options": [
      "Sound waves are longitudinal waves and mechanical waves.",
      "Sound waves are transverse waves and do not require a medium to travel.",
      "Sound waves are electromagnetic waves and can travel through a vacuum.",
      "Sound waves are longitudinal waves but do not require a medium to travel."
    ],
    "correct": "Sound waves are longitudinal waves and mechanical waves.",
    "explanation": "Sound waves are mechanical waves, which means they need a medium (solid, liquid, or gas) to travel and cannot propagate through a vacuum. They are also longitudinal waves because the vibrations of the particles of the medium are parallel to the direction of energy transport."
  },
  {
    "id": "515",
    "text": "If an object is in non-uniform motion, it means that: (TSTET 20 Jan 2025)",
    "options": [
      "Its speed is constant but direction changes.",
      "Its velocity remains constant.",
      "Its speed is changing with time.",
      "It moves in a straight line."
    ],
    "correct": "Its speed is changing with time.",
    "explanation": "Non-uniform motion occurs when an object's velocity changes over time. Velocity is a vector with both magnitude (speed) and direction. A change in speed, a change in direction, or both, results in non-uniform motion (acceleration). Among the choices, a changing speed is a definitive characteristic of non-uniform motion. While constant speed with changing direction (Option 1) is also non-uniform motion, changing speed (Option 3) is a more general and direct answer."
  },
  {
    "id": "516",
    "text": "How many 220 Ω resistors (connected in parallel) are required to carry 5A current on a 220 V line? (TSTET 20 Jan 2025)",
    "options": [
      "1",
      "2",
      "5",
      "10"
    ],
    "correct": "5",
    "explanation": "First, calculate the total equivalent resistance ($R_{eq}$) required using Ohm's Law ($V = IR$). $R_{eq} = V / I = 220V / 5A = 44Ω$. When 'n' identical resistors (R) are connected in parallel, the formula for equivalent resistance is $R_{eq} = R / n$. Plugging in the values: $44Ω = 220Ω / n$. Solving for n gives $n = 220 / 44 = 5$. Thus, 5 resistors are needed."
  },
  {
    "id": "517",
    "text": "Tincture of iodine is a mixture of iodine and (TSTET 20 Jan 2025)",
    "options": [
      "Ethanol",
      "Water",
      "Acetone",
      "Glycerine"
    ],
    "correct": "Ethanol",
    "explanation": "Tincture of iodine is an antiseptic solution. It consists of iodine (the solute) dissolved in a solvent, which is typically a mixture of ethanol and water. Ethanol is the primary solvent component."
  },
  {
    "id": "518",
    "text": "Among the following. the inert gas having the lowest atomic number is (TSTET 20 Jan 2025)",
    "options": [
      "Xenon",
      "Neon",
      "Crypton",
      "Radon"
    ],
    "correct": "Neon",
    "explanation": "The atomic numbers of the given inert gases are: Neon (Ne) = 10, Krypton (Kr) = 36, Xenon (Xe) = 54, and Radon (Rn) = 86. Among these options, Neon has the lowest atomic number."
  },
  {
    "id": "519",
    "text": "Visible light wave with maximum wavelength corresponds to the colour (TSTET 20 Jan 2025)",
    "options": [
      "violet",
      "blue",
      "green",
      "red"
    ],
    "correct": "red",
    "explanation": "The spectrum of visible light, arranged in order of increasing wavelength, is represented by the acronym VIBGYOR (Violet, Indigo, Blue, Green, Yellow, Orange, Red). Red light has the longest wavelength, while violet light has the shortest."
  },
  {
    "id": "520",
    "text": "The acid found in the body of ants is (TSTET 20 Jan 2025)",
    "options": [
      "acetic acid",
      "formic acid",
      "citric acid",
      "phosphoric acid"
    ],
    "correct": "formic acid",
    "explanation": "Ants, particularly when they bite or sting, inject formic acid (systematically named methanoic acid). The name 'formic' is derived from 'formica', the Latin word for ant. It is this acid that causes the pain and irritation."
  },
  {
    "id": "521",
    "text": "You are a chemist working in a laboratory to purify gold. You need to select a suitable solution that can dissolve gold. Which of the following solutions should you choose? (TSTET 20 Jan 2025)",
    "options": [
      "Aqua regia",
      "Blue vitriol",
      "Concentrated ammonia",
      "Caustic soda"
    ],
    "correct": "Aqua regia",
    "explanation": "Gold is a noble metal, meaning it is very resistant to corrosion and acid attack. It does not dissolve in single acids. However, it dissolves in aqua regia, a highly corrosive mixture of concentrated nitric acid and hydrochloric acid, typically in a 1:3 volume ratio."
  },
  {
    "id": "522",
    "text": "Among the following, identify the non-polar solvent commonly used to dissolve non-polar substances like oils and grease. (TSTET 20 Jan 2025)",
    "options": [
      "Water",
      "Ethanol",
      "Acetone",
      "Hexane"
    ],
    "correct": "Hexane",
    "explanation": "The chemical principle 'like dissolves like' means that non-polar substances dissolve best in non-polar solvents. Oils and grease are non-polar. Water, ethanol, and acetone are polar solvents. Hexane ($C_6H_{14}$) is a non-polar hydrocarbon, making it an effective solvent for oils and grease."
  },
  {
    "id": "523",
    "text": "One among the following is NOT an adaptation to temperature in plants. (TSTET 20 Jan 2025)",
    "options": [
      "Plants shedding leaves in temperate zones before the winter starts.",
      "Water salinity tolerance in Hydrilla.",
      "Thorny leaves in Xerophytic plants.",
      "Ability to grow in low light intensity"
    ],
    "correct": "Water salinity tolerance in Hydrilla.",
    "explanation": "An adaptation to temperature is a trait that helps a plant survive in specific thermal conditions. Shedding leaves is an adaptation to cold winters. Thorny leaves can help dissipate heat in deserts. However, tolerance to water salinity is an adaptation to the chemical composition (salt content) of the environment, not its temperature."
  },
  {
    "id": "524",
    "text": "This type of papillae are located at the back of the tongue and the tastebuds around these are thought to be responsible for the identification of bitterness. (TSTET 20 Jan 2025)",
    "options": [
      "Foliate papillae",
      "Fungiform papillae",
      "Filiform papillae",
      "Circumvallate papillae"
    ],
    "correct": "Circumvallate papillae",
    "explanation": "The circumvallate papillae are large, dome-shaped structures arranged in a V-formation at the back of the tongue. They are surrounded by a trench and contain numerous taste buds, and are particularly sensitive to bitter tastes."
  },
  {
    "id": "525",
    "text": "When the kidneys stop working completely, our body is filled with extra water and waste products. this condition is known as (TSTET 20 Jan 2025)",
    "options": [
      "Umami",
      "Uremic syndrome",
      "Uremia",
      "Urinary tract infection"
    ],
    "correct": "Uremia",
    "explanation": "Uremia is the condition characterized by a high level of urea and other waste products in the blood, which occurs when the kidneys are unable to filter them out. This is a hallmark of kidney failure. Uremic syndrome refers to the suite of symptoms resulting from uremia. Umami is a taste, and a UTI is an infection."
  },
  {
    "id": "526",
    "text": "Match the following: A) Laminaria, B) Selaginella, C) Ginkgo, D) Sphagnum. With: i) Gymnosperms, ii) Bryophytes, iii) Algae, iv) Pteridophytes. (TSTET 20 Jan 2025)",
    "options": [
      "Aiv; Biii; C-ii; Di",
      "A-iii; Biv; C-i; D-ii",
      "Aii; Biv; C-i; D - iii",
      "Aiii; Bii; Ci; Div"
    ],
    "correct": "A-iii; Biv; C-i; D-ii",
    "explanation": "The correct biological classifications are: Laminaria is a type of brown algae (Algae). Selaginella is a spike moss, which belongs to the Pteridophytes. Ginkgo is a gymnosperm. Sphagnum is a type of peat moss, which is a Bryophyte. Therefore, the correct matching is A-iii, B-iv, C-i, D-ii."
  },
  {
    "id": "527",
    "text": "These blood cells secrete Histamine, Serotonin. Heparin, etc., and are involved in inflamatory reactions (TSTET 20 Jan 2025)",
    "options": [
      "Basophils",
      "Eosnophils",
      "Erythrocytes",
      "Neutrophils"
    ],
    "correct": "Basophils",
    "explanation": "Basophils are a type of white blood cell (granulocyte) that play a key role in inflammatory and allergic reactions. Their granules contain and release chemicals like histamine (a vasodilator), serotonin, and heparin (an anticoagulant)."
  },
  {
    "id": "528",
    "text": "Bacterial and Fungal enzymes degrade detritus into simpler inorganic substances. This process is called (TSTET 20 Jan 2025)",
    "options": [
      "Humification",
      "Leaching",
      "Magnification",
      "Catabolism"
    ],
    "correct": "Catabolism",
    "explanation": "In the process of decomposition, catabolism is the step where decomposer organisms (like bacteria and fungi) break down complex organic matter (detritus) into simpler inorganic substances through enzymatic action. Humification is the formation of humus, and leaching is the movement of nutrients through soil."
  },
  {
    "id": "529",
    "text": "In the process of human reproduction, this is formed around 12 weeks of pregnancy and becomes an important structure for nourishment of the embryo (TSTET 20 Jan 2025)",
    "options": [
      "Yolk sac",
      "Amnion",
      "Placenta",
      "Allantotis"
    ],
    "correct": "Placenta",
    "explanation": "The placenta is a vital organ that develops during pregnancy, attaching to the wall of the uterus. By about 12 weeks (the end of the first trimester), it is fully formed and takes over the function of providing nutrients and oxygen to the fetus and removing waste products."
  },
  {
    "id": "530",
    "text": "Which of the following part of human brain coordinates reflexes like swallowing, coughing, sneezing and vomiting? (TSTET 20 Jan 2025)",
    "options": [
      "Cerebellum",
      "Medulla oblongata",
      "Mid-brain",
      "Diencephalon"
    ],
    "correct": "Medulla oblongata",
    "explanation": "The medulla oblongata, located in the brainstem, controls several vital autonomic functions, including breathing, heart rate, and blood pressure. It also serves as the center for several reflexes like vomiting, coughing, sneezing, and swallowing."
  },
  {
    "id": "531",
    "text": "Read the following Assersion and Reason: A: When the cells divide mitotically, the daughter cells always have the same number of chromosomes. R: Mitosis takes place in all body cells which retains the same number of chromosomes and before this mitotic division, the chromosomes are replicated in a parent cell. (TSTET 20 Jan 2025)",
    "options": [
      "A is correct and R is incorrect.",
      "Both A and R are correct but R is not the correct explanation of A.",
      "A is incorrect and R is correct.",
      "Both A and R are correct and R is the correct explanation of A."
    ],
    "correct": "Both A and R are correct and R is the correct explanation of A.",
    "explanation": "The assertion (A) is a correct definition of the outcome of mitosis. The reason (R) is also correct because it describes the mechanism that ensures this outcome: the DNA (chromosomes) is duplicated during the interphase before mitosis begins, so that each daughter cell can receive a full, identical set. Therefore, R is the correct explanation for A."
  },
  {
    "id": "532",
    "text": "Which of the following are parasites? A) Yeast B) Mushrooms C) Cuscuta D) Leeches (TSTET 20 Jan 2025)",
    "options": [
      "A & C only",
      "B & D only",
      "C & D only",
      "A & D only"
    ],
    "correct": "C & D only",
    "explanation": "A parasite lives on or in a host organism, causing it harm. Yeast and mushrooms are saprophytes (they feed on dead organic matter). Cuscuta (dodder) is a parasitic plant that gets nutrients from a host plant. Leeches are parasitic annelids that feed on the blood of their hosts. Therefore, Cuscuta and leeches are the parasites."
  },
  {
    "id": "533",
    "text": "What does a food chain always start with? (TSTET 20 Jan 2025)",
    "options": [
      "A herbivore",
      "The producer",
      "A carnivore",
      "Either a herbivore or producer"
    ],
    "correct": "The producer",
    "explanation": "A food chain illustrates the flow of energy in an ecosystem. This flow always begins with producers—organisms like plants or algae that create their own food, usually through photosynthesis. All other organisms in the food chain depend on the energy captured by producers."
  },
  {
    "id": "534",
    "text": "When heavy pressure is applied on salt solution which is separated from fresh water with semi permeable membrane, the water moves from salt solution to fresh water leaving the salt behind. Identify from the following the process involved in this (TSTET 20 Jan 2025)",
    "options": [
      "Reverse osmosis",
      "Diffusion",
      "Osmosis",
      "Exosmosis"
    ],
    "correct": "Reverse osmosis",
    "explanation": "Osmosis is the natural flow of water from a less concentrated solution to a more concentrated solution across a semipermeable membrane. Reverse osmosis applies external pressure to the more concentrated side (salt solution) to overcome the osmotic pressure and force water to move in the opposite direction, leaving the salt behind. This is a common method for water purification."
  },
  {
    "id": "535",
    "text": "Identify the correct statement among the following (TSTET 20 Jan 2025)",
    "options": [
      "Constructivist approach shifts emphasis from teaching to learning.",
      "Constructivist approach shifts emphasis from learning to teaching.",
      "Constructivist approach shifts emphasis from active learning to passive listening.",
      "Constructivist approach shifts emphasis from teaching to listening."
    ],
    "correct": "Constructivist approach shifts emphasis from teaching to learning.",
    "explanation": "Constructivism is a learning theory where learners actively build their own knowledge rather than passively receiving information. This paradigm shifts the educational focus from the teacher's act of delivering content (teaching) to the student's process of constructing meaning (learning). The teacher becomes a facilitator of learning."
  },
  {
    "id": "536",
    "text": "The correct hierarchical sequence of terms used in science (TSTET 20 Jan 2025)",
    "options": [
      "Terms Concepts- Facts Theories",
      "Facts Terms Concepts Theories",
      "Terms Facts Concepts Theories",
      "Facts Concepts Theories-Terms"
    ],
    "correct": "Terms Facts Concepts Theories",
    "explanation": "Scientific knowledge is built hierarchically. It starts with basic 'Terms' (vocabulary). These are used to describe 'Facts' (verifiable observations). Multiple facts are generalized to form 'Concepts' (abstract ideas). A well-substantiated explanation that incorporates many facts and concepts is a 'Theory'."
  },
  {
    "id": "537",
    "text": "Among the following, identify the best example of \"Task-based assessment\" of students: (TSTET 20 Jan 2025)",
    "options": [
      "A written test where students answer multiple-choice questions",
      "A project where students design and present a model of a solar system",
      "A quiz that tests students' knowledge of vocabulary",
      "A project where teachers create a model of a renewable energy sources"
    ],
    "correct": "A project where students design and present a model of a solar system",
    "explanation": "Task-based assessment measures a student's ability to apply knowledge and skills to complete a complex, authentic task. Designing and presenting a model requires research, application of concepts, creativity, and communication skills, which goes far beyond simple knowledge recall tested by quizzes or multiple-choice questions. It assesses the process and the product created by the student."
  },
  {
    "id": "538",
    "text": "Hunter's Score Card and Vogel's Spot Check Evaluation Scale are associated with (TSTET 20 Jan 2025)",
    "options": [
      "Evaluation of students' learning",
      "Evaluation of Textbook",
      "Evaluation of Curriculum",
      "Evaluation of Teaching"
    ],
    "correct": "Evaluation of Textbook",
    "explanation": "Hunter's Score Card and Vogel's Spot Check Evaluation Scale are standardized tools used in the field of education for the systematic evaluation of textbooks. They provide criteria to judge a textbook's content, organization, language, illustrations, and physical characteristics to determine its suitability for a course."
  },
  {
    "id": "539",
    "text": "Students visiting a bread factory to know the ingredients used in making bread. the chemical reaction during the process of making bread, etc., comes under this stage of learning in 5E learning model of the Constructivist approach. (TSTET 20 Jan 2025)",
    "options": [
      "Elaborate",
      "Explain",
      "Evaluate",
      "Explore"
    ],
    "correct": "Explore",
    "explanation": "The 5E instructional model (Engage, Explore, Explain, Elaborate, Evaluate) places hands-on activities at its core. The 'Explore' stage is where students are given opportunities to actively investigate a concept through activities like experiments or field trips. Visiting a factory to observe a process firsthand is a quintessential exploration activity, allowing students to gather data and experiences before formal explanation."
  },
  {
    "id": "540",
    "text": "Which of the following can be considered as the most suitable rationale for team teaching? (TSTET 20 Jan 2025)",
    "options": [
      "It is an effective strategy for large sized classes.",
      "It is helpful in increasing student participation.",
      "It makes the task of assessment easier.",
      "It benefits the students with diverse expertise."
    ],
    "correct": "It benefits the students with diverse expertise.",
    "explanation": "Team teaching involves multiple instructors collaborating to teach a single group of students. Its primary advantage is that it exposes students to a wider range of knowledge, skills, teaching styles, and perspectives than a single teacher could provide. This access to diverse expertise from the teaching team is the most significant benefit for student learning."
  },
  {
    "id": "541",
    "text": "You have 5 litres of milk and 5 litres of water. If the density of milk is 1030 kg/m³ and the density of water is 1000 kg/m³. Calculate the effective density of the mixture. (TSTET 19 Jan 2025)",
    "options": [
      "2030 kg/m³",
      "1015 kg/m³",
      "10150 kg/m³",
      "20300 kg/m³"
    ],
    "correct": "1015 kg/m³",
    "explanation": "The effective density of a mixture of liquids (assuming no change in volume upon mixing) is the total mass divided by the total volume. Since the volumes of milk and water are equal, the effective density is simply the average of their individual densities. Effective Density = (Density of milk + Density of water) / 2 = (1030 kg/m³ + 1000 kg/m³) / 2 = 2030 / 2 = 1015 kg/m³."
  },
  {
    "id": "542",
    "text": "NASA, America, started the mission \"Mars Science Laboratory\" on (TSTET 19 Jan 2025)",
    "options": [
      "26th November, 2011",
      "26th November, 2012",
      "26th November, 2013",
      "26th November, 2014"
    ],
    "correct": "26th November, 2011",
    "explanation": "The Mars Science Laboratory (MSL) mission, which successfully deployed the Curiosity rover on Mars, was launched by NASA from Cape Canaveral Air Force Station on November 26, 2011. The rover landed on Mars on August 6, 2012."
  },
  {
    "id": "543",
    "text": "A light ray passes from medium 1 to medium 2. The refractive index of medium 1 is n₁=1.50, and the angle of incidence is θ₁=30°. The angle of refraction in medium 2 is θ₂=45°. Then the approximate refractive index of medium 2 (n₂) is (TSTET 19 Jan 2025)",
    "options": [
      "n₂=1.32",
      "n₂=1.50",
      "n₂=1.06",
      "n₂=2.06"
    ],
    "correct": "n₂=1.06",
    "explanation": "According to Snell's Law of refraction, the relationship between the angles and refractive indices is given by the formula n₁sin(θ₁) = n₂sin(θ₂). Plugging in the given values: 1.50 × sin(30°) = n₂ × sin(45°). We know that sin(30°) = 0.5 and sin(45°) ≈ 0.707. So, the equation becomes 1.50 × 0.5 = n₂ × 0.707. This simplifies to 0.75 = 0.707n₂. Solving for n₂, we get n₂ = 0.75 / 0.707 ≈ 1.06."
  },
  {
    "id": "544",
    "text": "1 terahertz (THz) is equal to: (TSTET 19 Jan 2025)",
    "options": [
      "1 lakh hertz",
      "1 million hertz",
      "1 billion hertz",
      "1 trillion hertz"
    ],
    "correct": "1 trillion hertz",
    "explanation": "The prefix \"tera-\" (T) in the International System of Units (SI) represents a factor of 10¹², which is equivalent to one trillion. Therefore, 1 terahertz (THz) is equal to 1,000,000,000,000 hertz, or 1 trillion hertz."
  },
  {
    "id": "545",
    "text": "If 500g of water at 200°C temperature and 250g of water at 100°C temperature are mixed, the resulting temperature of the mixture is approximately (TSTET 19 Jan 2025)",
    "options": [
      "150°C",
      "167°C",
      "175°C",
      "180°C"
    ],
    "correct": "167°C",
    "explanation": "Using the principle of calorimetry (Heat Lost = Heat Gained), the formula is m₁c(T₁ - T_f) = m₂c(T_f - T₂). Here, m₁=500g, T₁=200°C, m₂=250g, and T₂=100°C. The specific heat capacity 'c' is the same for both samples and cancels out. The equation is 500(200 - T_f) = 250(T_f - 100). Dividing by 250 gives 2(200 - T_f) = (T_f - 100), which simplifies to 400 - 2T_f = T_f - 100. Solving for the final temperature T_f, we get 3T_f = 500, so T_f ≈ 166.67°C, which is approximately 167°C. (Note: Liquid water cannot exist at 200°C at standard pressure, but the calculation is based on the numbers provided)."
  },
  {
    "id": "546",
    "text": "An object weighs 42 N on the surface of the Moon. What would be its weight on the surface of the Earth? (TSTET 19 Jan 2025)",
    "options": [
      "252 N",
      "126 N",
      "7 N",
      "14 N"
    ],
    "correct": "252 N",
    "explanation": "The gravitational acceleration on Earth's surface is approximately six times stronger than on the Moon's surface. Weight is the product of mass and gravitational acceleration (W = mg). Therefore, an object's weight on Earth will be about six times its weight on the Moon. Weight on Earth = Weight on Moon × 6 = 42 N × 6 = 252 N."
  },
  {
    "id": "547",
    "text": "The rule used to determine the direction of the induced current in a conductor moving through a magnetic field (TSTET 19 Jan 2025)",
    "options": [
      "Fleming's Left-hand rule",
      "Kirchhoff Junction Law",
      "Lenz's Law",
      "Faraday's Law of Magnetic Induction"
    ],
    "correct": "Lenz's Law",
    "explanation": "The direction of an induced electric current is determined by Lenz's Law, which states that the induced current will flow in a direction that opposes the change in magnetic flux that produced it. Fleming's Right-Hand Rule is a practical application of this principle. Fleming's Left-Hand Rule is incorrect as it is used to determine the direction of the force on a current-carrying conductor (motor principle), not the direction of an induced current (generator principle)."
  },
  {
    "id": "548",
    "text": "In case of Metals, the factors that influence the resistance of a conductor (TSTET 19 Jan 2025)",
    "options": [
      "A) The length of the conductor",
      "B) The cross sectional area of the conductor",
      "C) The material of the conductor",
      "A, B & C"
    ],
    "correct": "A, B & C",
    "explanation": "The electrical resistance (R) of a metallic conductor is determined by the formula R = ρ(L/A). Resistance is directly proportional to the conductor's length (L) and its material's resistivity (ρ), and it is inversely proportional to its cross-sectional area (A). Therefore, all three factors—length, cross-sectional area, and the material—influence resistance."
  },
  {
    "id": "549",
    "text": "Among the following, the chemical that is commonly found in the head of a matchstick and also serves as an oxidizing agent to ignite the matchstick (TSTET 19 Jan 2025)",
    "options": [
      "Sulphur",
      "Potassium Chlorate",
      "Antimony Sulphide",
      "Red Phosphorus"
    ],
    "correct": "Potassium Chlorate",
    "explanation": "The head of a safety match contains an oxidizing agent, which is typically potassium chlorate (KClO₃). It also contains a fuel, like sulfur or antimony sulfide. When the match is struck, friction generates heat, and the potassium chlorate decomposes to release oxygen, which causes the fuel to ignite rapidly. Red phosphorus is located on the striking surface of the matchbox, not on the match head itself."
  },
  {
    "id": "550",
    "text": "In a skeleton chemical equation, these need NOT be mentioned (TSTET 19 Jan 2025)",
    "options": [
      "Reactants",
      "Products",
      "Physical states of substances",
      "The molecular formulas"
    ],
    "correct": "Physical states of substances",
    "explanation": "A skeleton chemical equation is an unbalanced equation that shows the correct chemical formulas for the reactants and products. While it must correctly identify the substances involved (reactants and products) using their formulas, it does not necessarily need to be balanced or include the physical states (solid, liquid, gas, or aqueous) of those substances. Indicating physical states is a feature of a more complete, balanced equation."
  },
  {
    "id": "551",
    "text": "The metals in the middle of the reactivity series are typically NOT found in Earth's crust in the form of: (TSTET 19 Jan 2025)",
    "options": [
      "Pure metal",
      "Metal sulphides",
      "Metal chlorides",
      "Metal carbonates"
    ],
    "correct": "Pure metal",
    "explanation": "Metals in the middle of the reactivity series, like iron, zinc, and lead, are moderately reactive. This reactivity causes them to readily combine with other elements, so they are found in the Earth's crust as compounds such as oxides, sulphides, and carbonates. They are too reactive to exist naturally in their uncombined, pure metallic state. Only very unreactive metals like gold and platinum are found as pure metals."
  },
  {
    "id": "552",
    "text": "The maximum number of electrons that can be accommodated in the orbits of a neutral carbon atom (TSTET 19 Jan 2025)",
    "options": [
      "12",
      "10",
      "8",
      "6"
    ],
    "correct": "6",
    "explanation": "The question asks for the total number of electrons in a neutral carbon atom. The atomic number of carbon is 6, which means its nucleus contains 6 protons. For an atom to be electrically neutral, the number of electrons must equal the number of protons. Therefore, a neutral carbon atom has 6 electrons."
  },
  {
    "id": "553",
    "text": "Identify the correct sentences about plant cell. A) Cell membrane is present but cell wall is absent in plant cell B) In plant cell both cell membrane and cell wall are present C) In plant cell, cell wall is made up of lipids and proteins D) In plant cell, cell wall is made up of cellulose (TSTET 19 Jan 2025)",
    "options": [
      "A & B only",
      "B & C only",
      "C & D only",
      "B & D only"
    ],
    "correct": "B & D only",
    "explanation": "Plant cells are characterized by having both an inner cell membrane and a rigid outer cell wall (Statement B is correct, A is incorrect). This cell wall provides structural support and is primarily composed of cellulose, a complex carbohydrate (Statement D is correct, C is incorrect). Therefore, the correct statements are B and D."
  },
  {
    "id": "554",
    "text": "Among the following cells which cells are NOT having regeneration capacity? (TSTET 19 Jan 2025)",
    "options": [
      "Blood cells",
      "Nerve cells",
      "Muscle cells",
      "Epithelial cells"
    ],
    "correct": "Nerve cells",
    "explanation": "Most mature neurons (nerve cells), especially in the central nervous system, are post-mitotic, meaning they lose their ability to divide and replicate. Consequently, they have very limited to no capacity for regeneration if they are damaged or destroyed. In contrast, epithelial cells and blood cells regenerate rapidly, and muscle cells have a limited regenerative ability."
  },
  {
    "id": "555",
    "text": "The most important pollutants that cause ozone layer depletion from the following (TSTET 19 Jan 2025)",
    "options": [
      "Oxides of Nitrogen",
      "Chlorofluorocarbons",
      "Oxides of sulphur",
      "Hydrocarbons"
    ],
    "correct": "Chlorofluorocarbons",
    "explanation": "The primary cause of the depletion of the stratospheric ozone layer is a group of synthetic chemicals known as chlorofluorocarbons (CFCs). When released into the atmosphere, they rise to the stratosphere where ultraviolet radiation breaks them down, releasing chlorine atoms. These chlorine atoms act as catalysts in a chemical reaction that destroys ozone molecules."
  },
  {
    "id": "556",
    "text": "What will happen if all the Herbivores in an ecosystem disappear? (TSTET 19 Jan 2025)",
    "options": [
      "The number of omnivores may increase",
      "The number of carnivores may increase",
      "The number of producers may increase",
      "There may not be any change in the food chain of ecosystem"
    ],
    "correct": "The number of producers may increase",
    "explanation": "Herbivores are primary consumers that feed on producers (plants). If all herbivores were removed from an ecosystem, the carnivores and omnivores that prey on them would lose their food source, causing their populations to decline. Conversely, the producers (plants) would no longer be eaten by herbivores, leading to a significant increase in their population, at least until limited by other resources."
  },
  {
    "id": "557",
    "text": "The hormone responsible for the development of secondary sexual characters in female is (TSTET 19 Jan 2025)",
    "options": [
      "Adrenalin",
      "Testosterone",
      "Estrogen",
      "Glucagon"
    ],
    "correct": "Estrogen",
    "explanation": "Estrogen is the primary female sex hormone. It is responsible for the development and regulation of the female reproductive system and the emergence of secondary sexual characteristics during puberty, such as breast development, widening of the hips, and regulation of the menstrual cycle. Testosterone is the primary male sex hormone."
  },
  {
    "id": "558",
    "text": "Match the following: A) Smut disease, B) Red Rot disease, C) Citrus canker disease, D) Tikka disease with i) Lemon fruit, ii) Ground nut, iii) Sugarcane, iv) Wheat (TSTET 19 Jan 2025)",
    "options": [
      "A-iv; B-iii; C-i; D-ii",
      "A-iv; B-i; C-ii; D-iii",
      "A-iii; B-iv; C-ii; D-i",
      "A-iii; B-iv; C-i; D-ii"
    ],
    "correct": "A-iv; B-iii; C-i; D-ii",
    "explanation": "The correct pairings of plant diseases and their host plants are: A) Smut disease commonly affects cereal grains like Wheat. B) Red Rot is a major fungal disease of Sugarcane. C) Citrus canker is a bacterial disease affecting citrus plants like Lemon. D) Tikka disease is a common fungal disease of the Ground nut (peanut) plant."
  },
  {
    "id": "559",
    "text": "Which part of Radish stores food materials? (TSTET 19 Jan 2025)",
    "options": [
      "Root",
      "Leaf",
      "Stem",
      "Flower"
    ],
    "correct": "Root",
    "explanation": "The radish plant has a modified taproot. The swollen, fleshy, edible part of the radish is the root, which is specialized for storing food (primarily carbohydrates) for the plant. This stored energy is used later for growth and reproduction."
  },
  {
    "id": "560",
    "text": "Identify the plants that grow in nitrogen deficient soil (TSTET 19 Jan 2025)",
    "options": [
      "Insectivorous plants",
      "Saprophytes",
      "Parasitic plants",
      "Chemo Autotrophs"
    ],
    "correct": "Insectivorous plants",
    "explanation": "Insectivorous (or carnivorous) plants, such as the Venus flytrap and pitcher plant, have adapted to thrive in nutrient-poor environments, particularly soils that are deficient in nitrogen. They supplement their nutrition by trapping and digesting insects and other small arthropods, from which they absorb essential nitrogen and other minerals."
  },
  {
    "id": "561",
    "text": "Identify the pair of diseases that are caused by protozoan and bacterium (TSTET 19 Jan 2025)",
    "options": [
      "Dengue - Chickungunya",
      "Diptheria - Whooping cough",
      "Malaria - Typhoid",
      "Cholera - Typhoid"
    ],
    "correct": "Malaria - Typhoid",
    "explanation": "The question requires a pair where the first disease is caused by a protozoan and the second by a bacterium. Malaria is caused by the protozoan parasite *Plasmodium*. Typhoid fever is caused by the bacterium *Salmonella Typhi*. This pair fits the criteria. Dengue and Chikungunya are viral. Diphtheria, whooping cough, and cholera are all bacterial."
  },
  {
    "id": "562",
    "text": "Identify the plant with incomplete flowers (TSTET 19 Jan 2025)",
    "options": [
      "Hibiscus",
      "Datura",
      "Ipomoea",
      "Cucumber"
    ],
    "correct": "Cucumber",
    "explanation": "A complete flower has all four main parts: sepals, petals, stamens (male), and a pistil (female). An incomplete flower is missing one or more of these. Cucumber plants produce unisexual flowers—separate male flowers (lacking a pistil) and female flowers (lacking stamens). Since both flower types are missing a key reproductive part, they are classified as incomplete flowers. Hibiscus, Datura, and Ipomoea typically have complete flowers."
  },
  {
    "id": "563",
    "text": "Identify the gland that secretes both enzymes and hormones from the following (TSTET 19 Jan 2025)",
    "options": [
      "Liver",
      "Adrenal gland",
      "Pituitary gland",
      "Pancreatic gland"
    ],
    "correct": "Pancreatic gland",
    "explanation": "A gland that secretes both enzymes and hormones is called a heterocrine or mixed gland. The Pancreas functions as both an exocrine gland, secreting digestive enzymes (like trypsin and amylase) into the small intestine, and an endocrine gland, secreting hormones (like insulin and glucagon) directly into the bloodstream."
  },
  {
    "id": "564",
    "text": "Identify the correct pair in which both the animals exhibit cutaneous respiration (TSTET 19 Jan 2025)",
    "options": [
      "Earthworm, Frog",
      "Grasshopper, Cockroach",
      "Fish, Cockroach",
      "Crocodile, Snake"
    ],
    "correct": "Earthworm, Frog",
    "explanation": "Cutaneous respiration is the process of gas exchange through the skin. An earthworm breathes exclusively through its moist skin. A frog, being an amphibian, breathes through its lungs on land but also relies heavily on gas exchange through its moist skin, especially when in water. Insects like grasshoppers and cockroaches use tracheae, fish use gills, and reptiles like crocodiles and snakes use lungs."
  },
  {
    "id": "565",
    "text": "To help students grasp the concept of density, a teacher Venkat asks them to design their own experiments using various liquids and objects. Which aspect of the heuristic method is this exemplifying? (TSTET 19 Jan 2025)",
    "options": [
      "Following strict guidelines to obtain results.",
      "Encouraging creativity and independent problem-solving.",
      "Preparing Instruction cards only.",
      "Using only theoretical explanations without trial and error methods."
    ],
    "correct": "Encouraging creativity and independent problem-solving.",
    "explanation": "The heuristic method, or discovery method, is a teaching approach where students learn by doing and finding out things for themselves. By asking students to design their own experiments, the teacher is shifting the focus from rote learning to active participation, which encourages creative thinking, fosters curiosity, and develops independent problem-solving skills."
  },
  {
    "id": "566",
    "text": "Organizing a science fair in a school is generally considered as a (TSTET 19 Jan 2025)",
    "options": [
      "Class room Activity",
      "Curricular Activity",
      "Co-curricular Activity",
      "Extracurricular Activity"
    ],
    "correct": "Co-curricular Activity",
    "explanation": "Co-curricular activities are activities that complement the academic curriculum. A science fair directly relates to the science curriculum by allowing students to apply concepts learned in class to practical projects. However, it extends beyond regular classroom work, making it a co-curricular activity that enriches the educational experience, rather than a strictly curricular one."
  },
  {
    "id": "567",
    "text": "APJ Abdul Kalam worked at this space research agency which later was renamed as Indian Space Research Organization (ISRO). (TSTET 19 Jan 2025)",
    "options": [
      "Indian National Committee for Space Research",
      "Indian Constitution for Space Research",
      "Indian Organisation for Space Research",
      "Indian Space Research Programme"
    ],
    "correct": "Indian National Committee for Space Research",
    "explanation": "The precursor to the Indian Space Research Organisation (ISRO) was the Indian National Committee for Space Research (INCOSPAR), established in 1962 by the Government of India under Dr. Vikram Sarabhai. A.P.J. Abdul Kalam began his career at INCOSPAR. INCOSPAR was superseded and grew into ISRO in 1969."
  },
  {
    "id": "568",
    "text": "A Biology teacher of class 9 made her students into groups and asked each group to gather some flowers available in their surroundings and bring to the class... she asked each group to observe the features of the flowers they picked and write in a table whether it falls under the category of Complete flowers or Incomplete flowers. This activity aims at achieving which or the following Learning indicator? (TSTET 19 Jan 2025)",
    "options": [
      "Communication Skill",
      "Inquiry",
      "Classification and Experimentation",
      "Formulation of hypothesis"
    ],
    "correct": "Classification and Experimentation",
    "explanation": "The core of this activity involves students observing specific features of flowers (a hands-on experimental or observational task) and then using these features to group or sort the flowers into two distinct categories: complete or incomplete. This process of sorting objects based on shared characteristics is the definition of classification. Therefore, the activity is primarily aimed at the learning indicator of classification."
  },
  {
    "id": "569",
    "text": "One of the following is NOT a stage in Experiential learning according to Kolb and Fry. (TSTET 19 Jan 2025)",
    "options": [
      "Concrete Operational stage",
      "Abstract Conceptualisation",
      "Reflective Observation",
      "Active Experimentation"
    ],
    "correct": "Concrete Operational stage",
    "explanation": "David Kolb's experiential learning cycle consists of four distinct stages: Concrete Experience, Reflective Observation, Abstract Conceptualization, and Active Experimentation. The 'Concrete Operational stage' is not part of Kolb's theory; instead, it is one of the four stages in Jean Piaget's theory of cognitive development in children."
  },
  {
    "id": "570",
    "text": "\"Science is an interconnected series of concepts and conceptual schemes that have developed as a result of experimentation and observation and are fruitful of further experimentation and observation\". This was the definition of 'Science' by (TSTET 19 Jan 2025)",
    "options": [
      "Einstein",
      "A. W. Green",
      "Karl Pearson",
      "James B. Conant"
    ],
    "correct": "James B. Conant",
    "explanation": "This specific definition, which portrays science as a dynamic and evolving process built upon a foundation of concepts derived from observation and experimentation, is attributed to James B. Conant. He was a prominent chemist, President of Harvard University, and a key figure in science education who emphasized understanding the 'tactics and strategy of science'."
  },
  {
    "id": 571,
    "text": "A large ship floats on the surface of the ocean. If the temperature of the sea water decreases, causing its density to increase, what happens to the ship's position in the water? (TSTET 19 Jan 2025)",
    "options": [
      "The ship will float higher in the water.",
      "The ship will float lower in the water.",
      "The ship will sink more into the water.",
      "There will be no change in the ship's position."
    ],
    "correct": "The ship will float higher in the water.",
    "explanation": "According to Archimedes' principle, the buoyant force on a floating object is equal to its weight. This buoyant force is also equal to the weight of the fluid displaced ($F_b = \\rho_{\\text{fluid}} \\times V_{\\text{displaced}} \\times g$). When the water temperature decreases, its density ($\\rho_{\\text{fluid}}$) increases. Since the ship's weight and thus the required buoyant force remain constant, the volume of water displaced ($V_{\\text{displaced}}$) must decrease. This means less of the ship is submerged, causing it to float higher."
  },
  {
    "id": 572,
    "text": "The diameter of the Uranus when compared with the diameter of the Earth is approximately: (TSTET 19 Jan 2025)",
    "options": [
      "0.95 times",
      "9.50 times",
      "4.00 times",
      "6.00 times"
    ],
    "correct": "4.00 times",
    "explanation": "The equatorial diameter of Earth is approximately 12,756 km. The equatorial diameter of Uranus is approximately 51,118 km. To find the comparison, we divide Uranus's diameter by Earth's diameter: $51,118 \\div 12,756 \\approx 4.007$. Therefore, the diameter of Uranus is approximately 4 times that of Earth."
  },
  {
    "id": 573,
    "text": "A pendulum in a clock oscillates 160 times in 4 seconds. Then the frequency and time period of the pendulum are: (TSTET 19 Jan 2025)",
    "options": [
      "Frequency = 10 Hz, Time Period = 0.1 seconds",
      "Frequency = 40 Hz, Time Period = 0.025 seconds",
      "Frequency = 50 Hz, Time Period = 0.02 seconds",
      "Frequency = 160 Hz, Time Period = 0.00625 seconds"
    ],
    "correct": "Frequency = 40 Hz, Time Period = 0.025 seconds",
    "explanation": "Frequency (f) is the number of oscillations per unit time. So, $f = \\frac{\\text{Number of oscillations}}{\\text{Time taken}} = \\frac{160}{4 \\text{ s}} = 40 \\text{ Hz}$. The time period (T) is the time taken for one oscillation, which is the reciprocal of the frequency ($T = 1/f$). So, $T = \\frac{1}{40 \\text{ Hz}} = 0.025 \\text{ s}$."
  },
  {
    "id": 575,
    "text": "Identify the correct pairs of the processes with their temperature effects. (TSTET 19 Jan 2025)",
    "options": [
      "Condensation - Cooling process, Evaporation - Warming process",
      "Condensation - Cooling process, Evaporation Cooling process",
      "Condensation - Warming process, Evaporation Warming process",
      "Condensation - Warming process, Evaporation - Cooling process"
    ],
    "correct": "Condensation - Warming process, Evaporation - Cooling process",
    "explanation": "Evaporation is a cooling process because the most energetic molecules escape the liquid, lowering the average kinetic energy and temperature of the remaining liquid. Condensation is the opposite; when a gas turns into a liquid, it releases latent heat of vaporization into the surroundings, which has a warming effect."
  },
  {
    "id": 576,
    "text": "If the line through the centre of gravity falls outside the base of an object, the object will be: (TSTET 19 Jan 2025)",
    "options": [
      "Stable",
      "Unstable",
      "In neutral equilibrium",
      "In balanced position"
    ],
    "correct": "Unstable",
    "explanation": "For an object to be in stable equilibrium, a vertical line drawn from its center of gravity must fall within its base of support. If this line falls outside the base, the force of gravity will create a torque that causes the object to topple over. This condition defines an unstable equilibrium."
  },
  {
    "id": 577,
    "text": "The magnetic effect of electric current is used in medical field. In the medical field, the term MRI refers to: (TSTET 19 Jan 2025)",
    "options": [
      "Main Resonance Infrastructure",
      "Magnetic Regenerated Imaging",
      "Magnetic Resonance Imaging",
      "Magnetic Related Imaging"
    ],
    "correct": "Magnetic Resonance Imaging",
    "explanation": "MRI stands for Magnetic Resonance Imaging. It is a non-invasive medical imaging technique that uses strong magnetic fields and radio waves to create detailed images of the organs and tissues inside the body."
  },
  {
    "id": 578,
    "text": "The commercial unit of electrical energy (1 kWh) is equivalent to: (TSTET 19 Jan 2025)",
    "options": [
      "360 J",
      "1,000 J",
      "3,60,000 J",
      "36,00,000 J"
    ],
    "correct": "36,00,000 J",
    "explanation": "A kilowatt-hour (kWh) is a unit of energy. It is calculated as power (in kilowatts) multiplied by time (in hours). 1 kW = 1000 Watts (or 1000 Joules/second) and 1 hour = 3600 seconds. Therefore, $1 \\text{ kWh} = 1000 \\text{ J/s} \\times 3600 \\text{ s} = 3,600,000 \\text{ J}$."
  },
  {
    "id": 579,
    "text": "The process of forming a thick oxide layer of Aluminium is called: (TSTET 19 Jan 2025)",
    "options": [
      "Cathodising",
      "Anodising",
      "Coating",
      "Heating"
    ],
    "correct": "Anodising",
    "explanation": "Anodising is an electrochemical process that converts the metal surface into a decorative, durable, corrosion-resistant, anodic oxide finish. In this process, the aluminum part is made the anode in an electrolytic cell, causing a thick, protective layer of aluminum oxide to form."
  },
  {
    "id": 580,
    "text": "When a small amount of copper oxide (CuO) is added to dilute hydrochloric acid (HCl), the colour of the product formed is: (TSTET 19 Jan 2025)",
    "options": [
      "Red",
      "Colourless",
      "Yellow",
      "Blue-green"
    ],
    "correct": "Blue-green",
    "explanation": "Copper(II) oxide (a black solid) reacts with hydrochloric acid in a neutralization reaction to form copper(II) chloride ($CuCl_2$) and water. The chemical equation is $CuO(s) + 2HCl(aq) \\rightarrow CuCl_2(aq) + H_2O(l)$. The resulting aqueous solution of copper(II) chloride has a distinct blue-green color."
  },
  {
    "id": 581,
    "text": "The correct set of chemicals used in the manufacturing of polyesters is: (TSTET 19 Jan 2025)",
    "options": [
      "Acetic acid, Butanol, and Glycerol",
      "Methanol, Acetone, and Glycerol",
      "Terephthalic acid, Dimethyl ether, and Dihydric alcohol",
      "Sodium hydroxide, Ethylene glycol, and Terephthalic acid"
    ],
    "correct": "Terephthalic acid, Dimethyl ether, and Dihydric alcohol",
    "explanation": "Polyesters are polymers formed by the condensation reaction between a dicarboxylic acid and a diol (a dihydric alcohol). The most common polyester, PET, is made from terephthalic acid and ethylene glycol (a dihydric alcohol). Option 3 contains the correct types of monomers: 'Terephthalic acid' (a dicarboxylic acid) and 'Dihydric alcohol' (the general class for the diol). The inclusion of 'Dimethyl ether' is likely an error in the question, but this option remains the best fit."
  },
  {
    "id": 582,
    "text": "The alloy of copper and zinc is known as: (TSTET 19 Jan 2025)",
    "options": [
      "brass",
      "steel",
      "solder",
      "bronze"
    ],
    "correct": "brass",
    "explanation": "Brass is an alloy made primarily of copper and zinc. Bronze is an alloy consisting primarily of copper, commonly with about 12–12.5% tin. Steel is an alloy of iron and carbon. Solder is a fusible metal alloy used to join less fusible metal pieces."
  },
  {
    "id": 583,
    "text": "Identify the ecosystem in which 'Fennec Fox' is present: (TSTET 19 Jan 2025)",
    "options": [
      "Mangrove Ecosystem",
      "Forest Ecosystem",
      "Grassland Ecosystem",
      "Desert Ecosystem"
    ],
    "correct": "Desert Ecosystem",
    "explanation": "The fennec fox is a small fox species native to the deserts of North Africa and the Arabian Peninsula. Its physical characteristics, such as oversized ears to dissipate heat and fur-covered paws for protection from hot sand, are specific adaptations for survival in a hot desert ecosystem."
  },
  {
    "id": 584,
    "text": "Identify the INCORRECT pair from the following: (TSTET 19 Jan 2025)",
    "options": [
      "Ascorbic acid - Scurvy",
      "Cyanocobalamin - Pernicious anaemia",
      "Pyridoxine - Glossitis",
      "Phylloquinone - problems related to blood clotting"
    ],
    "correct": "Pyridoxine - Glossitis",
    "explanation": "Ascorbic acid (Vitamin C) deficiency causes scurvy. Cyanocobalamin (Vitamin B12) deficiency causes pernicious anaemia. Phylloquinone (Vitamin K) is vital for blood clotting. While a deficiency in Pyridoxine (Vitamin B6) can cause glossitis (inflammation of the tongue), glossitis is a more prominent and classic symptom specifically associated with Riboflavin (Vitamin B2) deficiency. Thus, this pairing is considered the least accurate or incorrect one in this context."
  },
  {
    "id": 585,
    "text": "Identify the plant tissue that stores food from the following: (TSTET 19 Jan 2025)",
    "options": [
      "Ground tissue",
      "Dermal tissue",
      "Vascular tissue",
      "Meristematic tissue"
    ],
    "correct": "Ground tissue",
    "explanation": "Ground tissue in plants has several functions, including photosynthesis, support, and storage. The parenchyma cells, a major component of ground tissue, are specialized for storing food in the form of starch, lipids, and proteins. Dermal tissue provides protection, vascular tissue handles transport, and meristematic tissue is responsible for growth."
  },
  {
    "id": 586,
    "text": "Identify the INCORRECT order of blood flow in humans from the following: (TSTET 19 Jan 2025)",
    "options": [
      "Right ventricle → semilunar valve → lungs → pulmonary vein → left atrium",
      "Lungs → pulmonary vein → left atrium → tricuspid valve → left ventricle",
      "Body parts → inferior and superior vena cova → right atrium → tricuspid valve → right ventricle",
      "Left atrium → tricuspid valve → left ventricle → systemic valve → aorta"
    ],
    "correct": "Lungs → pulmonary vein → left atrium → tricuspid valve → left ventricle",
    "explanation": "This option incorrectly describes the path of blood flow on the left side of the heart. Blood flows from the left atrium into the left ventricle by passing through the mitral valve (also known as the bicuspid valve), not the tricuspid valve. The tricuspid valve is located on the right side of the heart, between the right atrium and the right ventricle."
  },
  {
    "id": 587,
    "text": "Identify the type of pollution that can be controlled by installing Electrostatic precipitators: (TSTET 19 Jan 2025)",
    "options": [
      "Air pollution",
      "Water pollution",
      "Soil pollution",
      "Noise pollution"
    ],
    "correct": "Air pollution",
    "explanation": "An electrostatic precipitator (ESP) is a device used to remove particulate matter from the air. It works by using an electric charge to remove impurities from a gas stream, like the exhaust from industrial smokestacks. Therefore, it is a key technology for controlling air pollution."
  },
  {
    "id": 588,
    "text": "Identify the common form of vegetative propagation that is used to obtain a plant with desirable characters from the following: (TSTET 19 Jan 2025)",
    "options": [
      "Cutting",
      "Layering",
      "Grafting",
      "Stolon formation"
    ],
    "correct": "Grafting",
    "explanation": "Grafting is a horticultural technique specifically used to combine the desirable traits of two different plants. A scion (a bud or shoot) from a plant with desirable features (like good fruit) is joined to the rootstock of another plant with other desirable features (like disease resistance or hardiness). This allows for the creation of a single plant with the best characteristics of both."
  },
  {
    "id": 589,
    "text": "Identify the disease caused by bacteria in humans from the following: (TSTET 19 Jan 2025)",
    "options": [
      "Japanese Encephalitis",
      "Chikungunya",
      "Malaria",
      "Cholera"
    ],
    "correct": "Cholera",
    "explanation": "Cholera is an infectious disease caused by the bacterium *Vibrio cholerae*. Japanese Encephalitis and Chikungunya are viral diseases, and Malaria is caused by a protozoan parasite of the genus *Plasmodium*."
  },
  {
    "id": 590,
    "text": "Which of the following in human eye helps to detect colours? (TSTET 19 Jan 2025)",
    "options": [
      "Iris",
      "Cones",
      "Rods",
      "Blind spot"
    ],
    "correct": "Cones",
    "explanation": "The retina of the eye has two types of photoreceptor cells. Rods are responsible for vision in low light conditions but cannot detect color. Cones function in bright light and are responsible for color vision. The iris controls the pupil size, and the blind spot has no photoreceptors."
  },
  {
    "id": 591,
    "text": "Identify the renewable resource from the following: (TSTET 19 Jan 2025)",
    "options": [
      "Minerals",
      "Coal",
      "Forest",
      "Natural gas"
    ],
    "correct": "Forest",
    "explanation": "A renewable resource can be replenished naturally within a human lifespan. Forests are renewable because new trees can be grown to replace those that are cut down. Coal, natural gas, and minerals are non-renewable resources because they are formed over millions of years and cannot be replaced once consumed."
  },
  {
    "id": 592,
    "text": "Which one of the following is NOT a connective tissue? (TSTET 19 Jan 2025)",
    "options": [
      "Cartilage",
      "Ligament",
      "Blood",
      "Non-striated muscle"
    ],
    "correct": "Non-striated muscle",
    "explanation": "Cartilage, ligaments, and blood are all specialized forms of connective tissue, which functions to support, connect, and protect other tissues and organs. Non-striated muscle, also known as smooth muscle, is a type of muscle tissue, which is responsible for contraction and movement."
  },
  {
    "id": 593,
    "text": "Which one of the following is NOT an example for feedback mechanism? (TSTET 19 Jan 2025)",
    "options": [
      "As the baby sucks, more prolactin is produced which enhances milk production",
      "When the glucose level in blood rises above the normal level, one type of cells in pancreas respond by producing more amount of insulin.",
      "Running in fear when chased by a dog, increases the rate of heart beat",
      "After entering a dark room, after some time slowly objects in the room can be seen"
    ],
    "correct": "Running in fear when chased by a dog, increases the rate of heart beat",
    "explanation": "A feedback mechanism is a biological loop where the output regulates the input, often for homeostasis. Milk production (positive feedback), insulin secretion (negative feedback), and eye adaptation to darkness are all feedback mechanisms. The increased heart rate from being chased is a direct 'fight-or-flight' response to an external stimulus, not a self-regulating loop."
  },
  {
    "id": 594,
    "text": "Identify the organelle present only in animal cell: (TSTET 19 Jan 2025)",
    "options": [
      "Centrosomes",
      "Cell wall",
      "Golgi complex",
      "Ribosomes"
    ],
    "correct": "Centrosomes",
    "explanation": "Centrosomes, which play a critical role in cell division, are found in animal cells but are absent in plant cells. The cell wall is characteristic of plant cells but absent in animal cells. Both Golgi complex and ribosomes are found in both animal and plant cells."
  },
  {
    "id": 595,
    "text": "In a team teaching scenario, two teachers collaborate to teach a science unit on \"Metals and Non metals\". One teacher focuses on the theoretical aspects, while the other conducts hands-on experiments. This approach is an example for: (TSTET 19 Jan 2025)",
    "options": [
      "Lecture-based teaching",
      "Collaborative learning",
      "Dual instruction method",
      "Independent study"
    ],
    "correct": "Dual instruction method",
    "explanation": "This scenario is a form of team teaching where two teachers deliver instruction simultaneously with different but complementary methods (theory and practical). This is best described as a dual instruction or parallel instruction method. 'Collaborative learning' typically refers to students working together, not the teaching strategy."
  },
  {
    "id": 596,
    "text": "After learning the lesson 'Classification of Elements' the students are able to classify the given elements as s, p, d and f block elements. Thus the teacher achieved which of the following objectives? (TSTET 19 Jan 2025)",
    "options": [
      "Skill",
      "Knowledge",
      "Imitation",
      "Precision"
    ],
    "correct": "Knowledge",
    "explanation": "According to Bloom's Taxonomy, the ability to 'classify' items based on learned criteria falls under the cognitive domain, specifically at the level of 'Understanding' or 'Comprehension'. This entire domain is broadly referred to as achieving 'Knowledge' objectives. 'Skill', 'Imitation', and 'Precision' are typically associated with the psychomotor domain, which involves physical actions."
  },
  {
    "id": 597,
    "text": "'Making Sundial by students in the laboratory' represents this level in Edgar Dale's cone of experience: (TSTET 19 Jan 2025)",
    "options": [
      "Verbal symbols",
      "Exhibits",
      "Visual symbols",
      "Direct purposeful experiences"
    ],
    "correct": "Direct purposeful experiences",
    "explanation": "Edgar Dale's Cone of Experience arranges learning experiences from the most abstract (verbal symbols) at the top to the most concrete at the bottom. The act of actually making and doing something, such as building a sundial, represents the most effective form of learning, which is categorized as 'Direct, purposeful experiences' at the base of the cone."
  },
  {
    "id": 598,
    "text": "A biology teacher finds that her students are unable to understand some topics. She further wants to know why they are unable to understand those topics. She prepares an assessment tool for the purpose. The assessment done in this context is: (TSTET 19 Jan 2025)",
    "options": [
      "Summative assessment",
      "Placement assessment",
      "Diagnostic assessment",
      "Norm-referenced assessment"
    ],
    "correct": "Diagnostic assessment",
    "explanation": "The primary purpose of the assessment is to identify the specific reasons for learning difficulties ('why they are unable to understand'). This is the definition of diagnostic assessment, which aims to diagnose learning gaps and misconceptions to inform targeted teaching and remediation. Summative assessment evaluates learning at the end of a unit."
  },
  {
    "id": 599,
    "text": "Assertion: Children with special educational needs (SEN) should be provided education in special schools meant for them. Reason : The International Conference on Special Needs Education held at Salamanca-Spain in 1994 had stated that the children with special needs learn effectively when they are included in the mainstream schools... (TSTET 19 Jan 2025)",
    "options": [
      "Both A and R are true but R is not the correct explanation of A.",
      "Both A and R are true and R is the correct explanation of A.",
      "A is true and R is false.",
      "A is false and R is true."
    ],
    "correct": "A is false and R is true.",
    "explanation": "The Assertion (A) promotes a segregated model of education, which is an outdated view. The Reason (R) correctly describes the outcome of the 1994 Salamanca Conference, which was a landmark event promoting inclusive education—the idea that children with special needs should be educated in mainstream schools. Therefore, the assertion is false, and the reason is a true historical statement that contradicts the assertion."
  },
  {
    "id": 600,
    "text": "Why do you think all aquatic animals are not cold blooded? Questions like this can be asked to students who are in this stage of cognitive development according to Piaget. (TSTET 19 Jan 2025)",
    "options": [
      "Sensory motor stage",
      "Preoperational stage",
      "Concrete Operational stage",
      "Formal Operational stage"
    ],
    "correct": "Formal Operational stage",
    "explanation": "This question requires abstract reasoning, hypothetical thinking, and the ability to consider exceptions to a general rule (e.g., aquatic mammals like whales and dolphins are warm-blooded). These cognitive abilities are characteristic of Piaget's Formal Operational stage, which typically develops during adolescence (around age 12 and up). Earlier stages are limited to more concrete and direct reasoning."
  },
  {
    "id": "601",
    "text": "Assume that Raju has an area of 225 cm² on his head. The force due to the air in a column of atmospheric height is nearly equal to the force of gravity on an object of mass 225 kg. Then the approximate pressure exerted on Raju's head by the atmosphere is (take g = 10 m/s²). (TSTET 11 Jan 2025)",
    "options": [
      "100 Pa",
      "1000 Pa",
      "10,000 Pa",
      "1,00,000 Pa"
    ],
    "correct": "1,00,000 Pa",
    "explanation": "Pressure is defined as force per unit area (P = F/A). First, calculate the force exerted, which is given as equal to the force of gravity on a 225 kg mass. Using F = mg, the force is 225 kg × 10 m/s² = 2250 N. Next, convert the area from cm² to m²: 225 cm² = 225 × (10⁻² m)² = 225 × 10⁻⁴ m² = 0.0225 m². Finally, calculate the pressure: P = 2250 N / 0.0225 m² = 100,000 Pa."
  },
  {
    "id": "602",
    "text": "The Cassiopeia constellation is visible from Telangana during this season. (TSTET 11 Jan 2025)",
    "options": [
      "Summer",
      "Rainy season",
      "Winter",
      "Greeshma"
    ],
    "correct": "Winter",
    "explanation": "Cassiopeia is a prominent constellation in the northern sky. In the Northern Hemisphere, it is best viewed during autumn and winter. From a location like Telangana, India, it would be most visible and high in the sky during the winter months."
  },
  {
    "id": "603",
    "text": "Consider the following two statements about lenses placed in contact: Statement I: The resultant power of the lenses placed in contact is given by the algebraic sum of the individual powers. Statement II: The resultant focal length of the lenses placed in contact is given by the algebraic sum of the individual focal lengths. Choose the correct answer. (TSTET 11 Jan 2025)",
    "options": [
      "Statement I is true Statement II is false.",
      "Statement I is false; Statement II is true.",
      "Both Statement I and Statement II are true.",
      "Both Statement I and Statement II are false."
    ],
    "correct": "Statement I is true Statement II is false.",
    "explanation": "When thin lenses are placed in contact, their powers add up algebraically (P_net = P₁ + P₂ + ...). So, Statement I is true. However, for the resultant focal length, the reciprocals add up (1/f_net = 1/f₁ + 1/f₂ + ...). The focal lengths themselves do not add up directly. Therefore, Statement II is false."
  },
  {
    "id": "604",
    "text": "Ramesh, an 8th class student, is trying to produce sound but is unable to do so. The most appropriate reason could be: (TSTET 11 Jan 2025)",
    "options": [
      "The object is kept in water, which prevents sound production.",
      "The object is not vibrating.",
      "Sound can only be produced by objects moving at high speeds.",
      "Sound can travel through a vacuum."
    ],
    "correct": "The object is not vibrating.",
    "explanation": "Sound is fundamentally produced by vibrations. For an object to generate sound waves, it must vibrate, causing the surrounding medium (like air or water) to vibrate as well. If the object is not vibrating, no sound will be produced. The other options are incorrect: sound can be produced and travels well in water; high speed is not a requirement for sound production; and sound cannot travel through a vacuum."
  },
  {
    "id": "605",
    "text": "In view of the value of specific heat of Ice', choose the correct answer. A) In SI System of units - 2100 J/kg-K. B) In CGS system of units - 0.50 cal/g-°C. (TSTET 11 Jan 2025)",
    "options": [
      "Both A and B are true",
      "Both A and B are false",
      "A is true: B is false",
      "A is false B is true"
    ],
    "correct": "Both A and B are true",
    "explanation": "The specific heat capacity of ice is approximately 2100 J/kg-K in the SI system. In the CGS system, its value is approximately 0.5 cal/g-°C. Both statements A and B correctly state the accepted values for the specific heat of ice in their respective unit systems."
  },
  {
    "id": "606",
    "text": "A scenario that is most likely to produce the least amount of friction. (TSTET 11 Jan 2025)",
    "options": [
      "A rubber tire skidding on ice.",
      "A heavy box sliding across a rough concrete floor.",
      "A smooth metal ball rolling on a steel surface.",
      "A stationary object on a rough surface before it begins to move."
    ],
    "correct": "A smooth metal ball rolling on a steel surface.",
    "explanation": "This scenario involves rolling friction between two smooth, hard surfaces (metal on steel), which is generally much lower than sliding friction or static friction. Skidding on ice (option 1) has low sliding friction, but rolling friction is typically even lower. Sliding a heavy box on rough concrete (option 2) involves high sliding friction. A stationary object (option 4) is subject to static friction, which is the highest form of friction."
  },
  {
    "id": "607",
    "text": "Calculate the force (in Newtons) acting on a current-carrying wire in a magnetic field, where the magnetic field strength is 0.5 T, the current is 2 A, the length of the wire is 1 m, and the angle between the direction of current and magnetic field is 45°. (TSTET 11 Jan 2025)",
    "options": [
      "1/√2",
      "√3/2",
      "1/2",
      "1"
    ],
    "correct": "1/√2",
    "explanation": "The force on a current-carrying conductor in a magnetic field is calculated using the formula F = BILsinθ, where B is the magnetic field strength, I is the current, L is the length of the wire, and θ is the angle between the current and the magnetic field. Plugging in the given values: F = (0.5 T) × (2 A) × (1 m) × sin(45°). Since sin(45°) = 1/√2, the force is F = 1 × (1/√2) = 1/√2 N."
  },
  {
    "id": "608",
    "text": "For an electric iron that consumes 1 kW of electrical power when operated at 220 V, which of the following fuse ratings is most desirable? (TSTET 11 Jan 2025)",
    "options": [
      "1 A",
      "2 A",
      "3 A",
      "5 A"
    ],
    "correct": "5 A",
    "explanation": "To find the required fuse rating, first calculate the current drawn by the electric iron using the formula Power (P) = Voltage (V) × Current (I), so I = P/V. The power is 1 kW (1000 W) and the voltage is 220 V. The current is I = 1000 W / 220 V ≈ 4.54 A. A fuse rating should be just above the normal operating current of the appliance. The closest standard fuse rating above 4.54 A is 5 A."
  },
  {
    "id": "609",
    "text": "Full form of PCRA is. (TSTET 11 Jan 2025)",
    "options": [
      "Petroleum Conservation Research Association",
      "Petroleum Consumable Research Association",
      "Pure Chemistry Research Association",
      "Physics and Chemistry Royal Association"
    ],
    "correct": "Petroleum Conservation Research Association",
    "explanation": "PCRA stands for Petroleum Conservation Research Association. It is an organization in India under the Ministry of Petroleum & Natural Gas, dedicated to promoting energy efficiency and conservation in various sectors."
  },
  {
    "id": "610",
    "text": "The chemical reaction used in black and white photography from the following. (TSTET 11 Jan 2025)",
    "options": [
      "Oxidation of silver halides to silver oxide in the dark.",
      "Reduction of silver halides to metallic silver in the presence of light.",
      "Decomposition of hydrogen peroxide into oxygen and water.",
      "Reduction of hydrogen ions to form hydrogen gas."
    ],
    "correct": "Reduction of silver halides to metallic silver in the presence of light.",
    "explanation": "Black and white photography is based on the light-sensitivity of silver halide compounds (like AgBr). When light strikes the photographic film, the silver halide undergoes a photochemical decomposition. In this reaction, silver ions (Ag⁺) are reduced to tiny particles of metallic silver (Ag), which form the dark parts of the image."
  },
  {
    "id": "611",
    "text": "Atomic properties considered to prepare the long form of periodic table. A) Atomic mass of elements. B) Atomic number of elements. C) Electron configuration of elements. (TSTET 11 Jan 2025)",
    "options": [
      "A, B & C",
      "C only",
      "B & C only",
      "B only"
    ],
    "correct": "B & C only",
    "explanation": "The modern (long form) periodic table is primarily arranged in order of increasing atomic number (B). This arrangement naturally groups elements with similar properties, which is a direct result of their similar valence electron configurations (C). While atomic mass (A) was used in earlier periodic tables, it is the atomic number that is the fundamental organizing principle of the modern table."
  },
  {
    "id": "612",
    "text": "Among the following, identify the ore(s) which is (are) correctly matched with its chemical formula and choose the correct answer. A) Galena - Fe₂O₃. B) Bauxite - Al₂O₃·2H₂O. C) Chalcopyrite - ZnS. D) Chromite - CuFeS₂. (TSTET 11 Jan 2025)",
    "options": [
      "B and C only",
      "B and D only",
      "A only",
      "B only"
    ],
    "correct": "B only",
    "explanation": "Let's check each pair: A) Galena is lead(II) sulfide (PbS), while Fe₂O₃ is hematite. This is incorrect. B) Bauxite is the primary ore of aluminum and is correctly represented by the hydrated aluminum oxide formula Al₂O₃·2H₂O. This is correct. C) Chalcopyrite is copper iron sulfide (CuFeS₂), while ZnS is sphalerite. This is incorrect. D) Chromite is iron chromium oxide (FeCr₂O₄), while CuFeS₂ is chalcopyrite. This is incorrect. Therefore, only B is correctly matched."
  },
  {
    "id": "613",
    "text": "Identify the tissue that connects bones with Muscles. (TSTET 11 Jan 2025)",
    "options": [
      "Tendon",
      "Ligament",
      "Smooth muscle",
      "Fibroblast"
    ],
    "correct": "Tendon",
    "explanation": "Tendons are tough, flexible bands of fibrous connective tissue that connect muscle to bone. Ligaments are similar tissues but connect bone to bone to form joints."
  },
  {
    "id": "614",
    "text": "Who was the scientist to discover Penicillin antibiotic? (TSTET 11 Jan 2025)",
    "options": [
      "Antonie Van Leeuwenhoek",
      "Robert Hooke",
      "Robert Brown",
      "Alexander Fleming"
    ],
    "correct": "Alexander Fleming",
    "explanation": "Sir Alexander Fleming discovered penicillin, the world's first broadly effective antibiotic, in 1928. His discovery revolutionized medicine. Antonie van Leeuwenhoek is known for his work on microscopy, Robert Hooke for coining the term 'cell', and Robert Brown for discovering the cell nucleus."
  },
  {
    "id": "615",
    "text": "Identify among the following the correct pair in which both the White Blood Cells are agranulocytic. (TSTET 11 Jan 2025)",
    "options": [
      "Lymphocytes; Basophils",
      "Lymphocytes: Monocytes",
      "Monocytes: Neutrophils",
      "Neutrophils; Basophils"
    ],
    "correct": "Lymphocytes: Monocytes",
    "explanation": "White blood cells (leukocytes) are categorized into granulocytes (containing granules) and agranulocytes (lacking granules). The granulocytes are neutrophils, basophils, and eosinophils. The agranulocytes are lymphocytes and monocytes. Therefore, the correct pair is lymphocytes and monocytes."
  },
  {
    "id": "616",
    "text": "Identify the protozoan from the following. (TSTET 11 Jan 2025)",
    "options": [
      "Cyclops",
      "Vorticella",
      "Ceratium",
      "Aspergillus"
    ],
    "correct": "Vorticella",
    "explanation": "Vorticella is a genus of bell-shaped, single-celled organisms known as ciliates, which are a major group of protozoa. Cyclops is a crustacean, Ceratium is a type of algae (dinoflagellate), and Aspergillus is a fungus."
  },
  {
    "id": "617",
    "text": "Which of the following stores food materials in the Stem? (TSTET 11 Jan 2025)",
    "options": [
      "Carrot",
      "Sweet potato",
      "Radish",
      "Garlic"
    ],
    "correct": "Garlic",
    "explanation": "Garlic is a modified stem known as a bulb, which is an underground stem with fleshy leaves that store food. Carrot, sweet potato, and radish are all examples of modified roots (taproot or tuberous root) that serve as storage organs."
  },
  {
    "id": "618",
    "text": "Identify the Parasitic plant from the following. (TSTET 11 Jan 2025)",
    "options": [
      "Nepenthes",
      "Cuscuta",
      "Drosera",
      "Agaricus"
    ],
    "correct": "Cuscuta",
    "explanation": "Cuscuta (also known as dodder) is a parasitic plant. It lacks significant amounts of chlorophyll and obtains its nutrients by attaching to a host plant with specialized structures called haustoria. Nepenthes and Drosera are carnivorous plants, while Agaricus is a saprophytic fungus."
  },
  {
    "id": "619",
    "text": "Identify the Renewable energy resource from the following. (TSTET 11 Jan 2025)",
    "options": [
      "Coal",
      "Natural gas",
      "Solar power",
      "Minerals"
    ],
    "correct": "Solar power",
    "explanation": "Renewable energy resources are those that are replenished naturally over a short period. Solar power, derived from the sun's radiation, is a prime example of a renewable resource. Coal, natural gas, and minerals are non-renewable resources as they are finite and take millions of years to form."
  },
  {
    "id": "620",
    "text": "Which of the following hormone is NOT secreted by pituitary gland? (TSTET 11 Jan 2025)",
    "options": [
      "Growth Hormone",
      "Progesterone",
      "Follicle Stimulating Hormone",
      "Luteinizing Hormone"
    ],
    "correct": "Progesterone",
    "explanation": "Progesterone is a steroid hormone primarily secreted by the corpus luteum in the ovary and by the placenta during pregnancy. The pituitary gland is responsible for secreting Growth Hormone (GH), Follicle-Stimulating Hormone (FSH), and Luteinizing Hormone (LH), but not progesterone."
  },
  {
    "id": "621",
    "text": "Which of the following disease is NOT caused by bacteria? (TSTET 11 Jan 2025)",
    "options": [
      "Typhoid",
      "Diphtheria",
      "Malaria",
      "Tuberculosis"
    ],
    "correct": "Malaria",
    "explanation": "Malaria is caused by a protozoan parasite of the genus Plasmodium, which is transmitted through the bites of infected mosquitoes. Typhoid (caused by Salmonella typhi), Diphtheria (caused by Corynebacterium diphtheriae), and Tuberculosis (caused by Mycobacterium tuberculosis) are all bacterial diseases."
  },
  {
    "id": "622",
    "text": "Identify the part of cell that is present in both Eukaryotic and prokaryotic cells from the following. (TSTET 11 Jan 2025)",
    "options": [
      "Endoplasmic Reticulum",
      "Mitochondrion",
      "Nucleus",
      "Plasmamembrane"
    ],
    "correct": "Plasmamembrane",
    "explanation": "Both prokaryotic and eukaryotic cells possess a plasma membrane (cell membrane), cytoplasm, ribosomes, and DNA. However, prokaryotic cells lack a true nucleus and other membrane-bound organelles like the endoplasmic reticulum and mitochondria, which are characteristic features of eukaryotic cells."
  },
  {
    "id": "623",
    "text": "Identify among the following the correct pair in which both are algae. (TSTET 11 Jan 2025)",
    "options": [
      "Spirulina: Oedogonium",
      "Ceratium; Daphnia",
      "Chlamydomonas; Paramoecium",
      "Aspergillus; Diatom"
    ],
    "correct": "Spirulina: Oedogonium",
    "explanation": "Spirulina is a type of cyanobacteria, often called blue-green algae. Oedogonium is a genus of filamentous green algae. In the other pairs, Daphnia is a crustacean, Paramoecium is a protozoan, and Aspergillus is a fungus, making them incorrect."
  },
  {
    "id": "624",
    "text": "Identify the endemic animal from the following. (TSTET 11 Jan 2025)",
    "options": [
      "Lion",
      "Wild cat",
      "Kangaroo",
      "Rhinoceros"
    ],
    "correct": "Kangaroo",
    "explanation": "Endemic species are those found exclusively in a specific geographic area. Kangaroos are marsupials that are endemic to the continent of Australia. While certain subspecies of lions, wild cats, and rhinos might be restricted to specific regions, the species as a whole are found in wider areas."
  },
  {
    "id": "625",
    "text": "Which of the following is a key characteristic of the project method? (TSTET 11 Jan 2025)",
    "options": [
      "Teacher-centered instruction",
      "Collaborative learning",
      "Rote learning",
      "Traditional assessments"
    ],
    "correct": "Collaborative learning",
    "explanation": "The project method is a student-centered approach where learning is acquired through hands-on, inquiry-based projects. A key feature is that students often work together in groups, sharing ideas, dividing tasks, and learning from one another. This makes collaborative learning a central characteristic of the method."
  },
  {
    "id": "626",
    "text": "Keeping in view of learning indicators, read the following statements and choose the correct statements. Statement I: Learning indicators are used to determine students learning by collecting, analysing, and interpreting evidence. Statement II: Learning indicators are used to provide feedback to children on their performance. (TSTET 11 Jan 2025)",
    "options": [
      "Both Statement I and Statement II are true.",
      "Both Statement I and Statement II are false.",
      "Statement I is false and Statement II is true.",
      "Statement I is true and Statement II is false."
    ],
    "correct": "Both Statement I and Statement II are true.",
    "explanation": "Learning indicators are specific benchmarks of what students are expected to know and be able to do. They serve a dual purpose: they guide assessment by providing clear criteria for collecting and interpreting evidence of learning (Statement I), and they enable teachers to give specific, meaningful feedback to students about their progress towards these benchmarks (Statement II)."
  },
  {
    "id": "627",
    "text": "A science teacher uses a learning management system (LMS) to assign a virtual lab activity to students. Identify the benefit of using the LMS for this purpose. (TSTET 11 Jan 2025)",
    "options": [
      "It limits student interaction.",
      "It allows for real-time feedback and assessment.",
      "It complicates access to resources.",
      "It focuses solely on theory."
    ],
    "correct": "It allows for real-time feedback and assessment.",
    "explanation": "A significant benefit of a Learning Management System (LMS) is its capacity for automation. For virtual labs, an LMS can automatically track student progress, grade their work based on predefined rubrics, and provide immediate feedback. This allows both students and teachers to see performance in real-time, facilitating timely intervention and understanding."
  },
  {
    "id": "628",
    "text": "After the observation of various plant cells and animal cells under microscope, a biology teacher in class IX divided her students into groups and asked them to discuss within the groups, the features of the cells they observed to arrive at the conclusion. She also asked them to present their opinions in front of the whole class. The process of Constructivist Learning Situation the learners are engaged in as given in the NCF-2005. (TSTET 11 Jan 2025)",
    "options": [
      "Observation",
      "Making multiple interpretations",
      "Cognitive apprenticeship",
      "Analysis"
    ],
    "correct": "Making multiple interpretations",
    "explanation": "In this constructivist scenario, students move beyond the initial step of observation. By discussing their findings in groups and presenting them to the class, they are actively interpreting the data they collected. Different groups might have slightly different observations or conclusions, leading to the development and sharing of multiple interpretations. This collaborative process helps them construct a deeper, more robust understanding of the differences between plant and animal cells."
  },
  {
    "id": "629",
    "text": "Identify the basic process skill from the following: (TSTET 11 Jan 2025)",
    "options": [
      "Hypothesising",
      "Experimenting",
      "Observation",
      "Identifying variables"
    ],
    "correct": "Observation",
    "explanation": "Science process skills are categorized into basic and integrated skills. Basic skills are foundational and include observing, inferring, measuring, communicating, and classifying. Integrated skills are more complex and build upon the basic ones; they include identifying variables, hypothesizing, and experimenting. Therefore, observation is a basic process skill."
  },
  {
    "id": "630",
    "text": "Identify the INCORRECT statement with regard to the Assessment of Learning of the children with special educational needs (SEN). (TSTET 11 Jan 2025)",
    "options": [
      "To assess these students individually, a team has to be formed after discussing with parents, students and experts.",
      "Individual profile and the individualised educational programme of these students also are considered in the assessment of these children.",
      "The previous performances of these students also have to be considered.",
      "A chance of Re-evaluation shouldn't be provided to them."
    ],
    "correct": "A chance of Re-evaluation shouldn't be provided to them.",
    "explanation": "Effective and fair assessment practices for children with special educational needs (SEN) must be flexible and accommodating. Denying the chance for re-evaluation is an incorrect and inequitable practice. Re-evaluation allows students to demonstrate their learning under different circumstances and is a key component of providing support. The other three statements describe appropriate and necessary considerations for assessing SEN students."
  },
  {
    "id": "631",
    "text": "Consider the following with respect to impurities of water contamination. Choose the correct answer. (TSTET 5 Jan 2025)\nA) Organic impurities Nitrates, Phosphates\nB) Inorganic impurities: Urea, Oil",
    "options": [
      "Both pairs A & B are correct",
      "Both pairs A & B are incorrect",
      "Pair A is correct; Pair B is incorrect",
      "Pair A is incorrect; Pair B is correct"
    ],
    "correct": "Both pairs A & B are incorrect",
    "explanation": "The pairings are incorrect. Organic impurities are derived from living organisms and their waste, which includes substances like urea and oil. Inorganic impurities are of mineral origin, such as nitrates, phosphates, and heavy metals. The question incorrectly swaps these examples. Therefore, both statements A and B present incorrect pairings."
  },
  {
    "id": "632",
    "text": "The planet often called a morning or evening star is (TSTET 5 Jan 2025)",
    "options": [
      "Venus",
      "Mars",
      "Jupiter",
      "Saturn"
    ],
    "correct": "Venus",
    "explanation": "Venus is called the morning or evening star because its orbit is inside Earth's. This makes it visible from Earth only for a few hours before sunrise (as the morning star) or after sunset (as the evening star). Its thick clouds reflect sunlight well, making it appear as a very bright, star-like object."
  },
  {
    "id": "633",
    "text": "Due to atmospheric refraction, the Sun is visible before the actual sunrise and after the actual sunset. The additional time the Sun remains visible due to atmospheric refraction is (TSTET 5 Jan 2025)",
    "options": [
      "Before sunrise: 2 minutes After sunset: 2 minutes",
      "Before sunrise: 4 minutes. After sunset: 4 minutes",
      "Before sunrise: 8 minutes, After sunset: 8 minutes",
      "Before sunrise: 10 minutes. After sunset: 10 minutes"
    ],
    "correct": "Before sunrise: 2 minutes After sunset: 2 minutes",
    "explanation": "Atmospheric refraction is the bending of light as it passes through Earth's atmosphere. This phenomenon makes the Sun appear above the horizon when it is physically just below it. This effect advances the sunrise by about 2 minutes and delays the sunset by about 2 minutes, effectively lengthening the day by a total of approximately 4 minutes."
  },
  {
    "id": "634",
    "text": "The phenomena caused by multiple reflections of sound waves in an enclosed space is: (TSTET 5 Jan 2025)",
    "options": [
      "Echo",
      "Absorption",
      "Refraction",
      "Reverberation"
    ],
    "correct": "Reverberation",
    "explanation": "Reverberation is the persistence of sound in a particular space after the original sound is produced. It is caused by a large number of sound reflections building up and then decaying as the sound is absorbed by the surfaces of objects in the space. An echo is a single, distinct reflection of sound, while reverberation is a multitude of overlapping reflections."
  },
  {
    "id": "635",
    "text": "Among the following, identify the substance that expands on freezing: (TSTET 5 Jan 2025)",
    "options": [
      "Iron",
      "Mercury",
      "Water",
      "Lead"
    ],
    "correct": "Water",
    "explanation": "Water exhibits an anomalous property where it expands upon freezing. As water cools below 4°C, its hydrogen bonds arrange into a crystalline lattice structure (ice) that occupies more volume than liquid water. This makes ice less dense than water, which is why it floats. Most other substances, including metals like iron and lead, contract when they freeze."
  },
  {
    "id": "636",
    "text": "An 80 kg object is acted upon by a constant force of 480 N. Then the acceleration of the object is (TSTET 5 Jan 2025)",
    "options": [
      "1/6 m/s²",
      "6 m/s²",
      "6/10 m/s²",
      "10/6 m/s²"
    ],
    "correct": "6 m/s²",
    "explanation": "According to Newton's second law of motion, the relationship between force (F), mass (m), and acceleration (a) is given by the formula $F = m \\times a$. To find the acceleration, we can rearrange the formula to $a = F / m$. Given F = 480 N and m = 80 kg, the acceleration is $a = 480 / 80 = 6$ m/s²."
  },
  {
    "id": "637",
    "text": "The standard frequency of the AC electric power supply in Telangana is: (TSTET 5 Jan 2025)",
    "options": [
      "40 Hz",
      "50 Hz",
      "60 Hz",
      "60 V"
    ],
    "correct": "50 Hz",
    "explanation": "The standard for AC (Alternating Current) electrical frequency in India, including the state of Telangana, is 50 Hertz (Hz). This standard is shared by most countries in Europe, Asia, and Africa. North America primarily uses 60 Hz. The option '60 V' refers to voltage, which is a different electrical property."
  },
  {
    "id": "638",
    "text": "An electric appliance is connected to a 110V generator. If the current is 2A, calculate the power of that appliance. (in Watts) (TSTET 5 Jan 2025)",
    "options": [
      "55",
      "110",
      "220",
      "330"
    ],
    "correct": "220",
    "explanation": "The electric power (P) in watts is calculated by multiplying the voltage (V) in volts by the current (I) in amperes. The formula is $P = V \\times I$. In this case, V = 110V and I = 2A. Therefore, the power is $P = 110 \\times 2 = 220$ Watts."
  },
  {
    "id": "639",
    "text": "Substances W, X, Y, and Z have pH values of 1, 13, 7, and 10 respectively. Then the strongest base from the following is (TSTET 5 Jan 2025)",
    "options": [
      "Z",
      "W",
      "Y",
      "X"
    ],
    "correct": "X",
    "explanation": "The pH scale measures how acidic or basic a substance is. A pH of 7 is neutral (Y). Values below 7 indicate acidity, and values above 7 indicate basicity (alkalinity). The higher the pH value above 7, the stronger the base. Substance X has a pH of 13, the highest value provided, making it the strongest base. W (pH 1) is a strong acid, and Z (pH 10) is a weaker base compared to X."
  },
  {
    "id": "640",
    "text": "Lead nitrate $(Pb(NO₃)₂)$ is mixed with potassium iodide (KI). The colour and the name of the precipitate formed are (TSTET 5 Jan 2025)",
    "options": [
      "The precipitate is white, and it is lead iodide (PbI₂).",
      "The precipitate is green, and it is potassium iodide (KI).",
      "The precipitate is yellow, and it is lead iodide (PbI₂).",
      "The precipitate is red, and it is potassium nitrate (KNO₃)."
    ],
    "correct": "The precipitate is yellow, and it is lead iodide (PbI₂).",
    "explanation": "When aqueous solutions of lead nitrate and potassium iodide are mixed, a double displacement reaction occurs: $Pb(NO₃)₂(aq) + 2KI(aq) \\rightarrow PbI₂(s) + 2KNO₃(aq)$. This reaction forms lead iodide ($PbI₂$), which is an insoluble solid and precipitates out of the solution. Lead iodide is known for its characteristic bright yellow color."
  },
  {
    "id": "641",
    "text": "The isotope of carbon used in 'Radio Carbon Dating' is: (TSTET 5 Jan 2025)",
    "options": [
      "¹²C",
      "¹³C",
      "¹⁵C",
      "¹⁴C"
    ],
    "correct": "¹⁴C",
    "explanation": "Radiocarbon dating uses the radioactive isotope of carbon, Carbon-14 (${}^{14}C$), to determine the age of organic materials. Living organisms absorb ${}^{14}C$ from the atmosphere. After death, this absorption stops, and the ${}^{14}C$ begins to decay at a known rate (its half-life). By measuring the remaining ${}^{14}C$, scientists can calculate the time that has passed since death. ${}^{12}C$ is the most common, stable isotope of carbon."
  },
  {
    "id": "642",
    "text": "Read the following statements and choose the correct answer. (TSTET 5 Jan 2025)\nStatement I: Alloying is a very good method of improving the properties of a metal.\nStatement II: An alloy is a homogeneous mixture of two or more metals, or a metal and a non-metal.",
    "options": [
      "Both Statement I and Statement II are correct.",
      "Statement I is correct, but Statement II is incorrect.",
      "Statement I is incorrect, but Statement II is correct.",
      "Both Statement I and Statement II are incorrect."
    ],
    "correct": "Both Statement I and Statement II are correct.",
    "explanation": "Both statements are factually correct. Statement II provides a precise definition of an alloy. Statement I is true because alloying can enhance desirable properties of a metal, such as increasing its strength, hardness, or resistance to corrosion (e.g., stainless steel is an alloy of iron, chromium, and carbon that resists rust)."
  },
  {
    "id": "643",
    "text": "Identify the tissue that connects bones together, especially in joints. (TSTET 5 Jan 2025)",
    "options": [
      "Smooth muscle",
      "Fibroblast",
      "Tendon",
      "Ligament"
    ],
    "correct": "Ligament",
    "explanation": "Ligaments are tough, fibrous bands of connective tissue that connect one bone to another, providing stability to joints. In contrast, tendons are connective tissues that attach muscle to bone. Smooth muscle is a type of muscle tissue, and a fibroblast is a type of cell that produces connective tissue."
  },
  {
    "id": "644",
    "text": "Who was the first scientist to discover and describe microorganisms such as protists and bacteria? (TSTET 5 Jan 2025)",
    "options": [
      "Robert Brown",
      "Robert Hooke",
      "Antonie Van Leeuwenhoek",
      "Alexander Fleming"
    ],
    "correct": "Antonie Van Leeuwenhoek",
    "explanation": "Antonie van Leeuwenhoek, a Dutch scientist from the 17th century, is widely regarded as the 'Father of Microbiology.' Using his handcrafted microscopes, he was the first person to observe and document single-celled organisms, which he called 'animalcules,' including bacteria and protists."
  },
  {
    "id": "645",
    "text": "Which of the following are NOT granulocytic White Blood Cells? (TSTET 5 Jan 2025)",
    "options": [
      "Lymphocytes",
      "Basophils",
      "Neutrophils",
      "Eosinophils"
    ],
    "correct": "Lymphocytes",
    "explanation": "White blood cells (leukocytes) are classified into two groups based on the presence of granules in their cytoplasm. Granulocytes (containing granules) include neutrophils, eosinophils, and basophils. Agranulocytes (lacking granules) include lymphocytes and monocytes. Therefore, lymphocytes are not granulocytes."
  },
  {
    "id": "646",
    "text": "Identify the protozoan from the following. (TSTET 5 Jan 2025)",
    "options": [
      "Cyclops",
      "Vorticella",
      "Ceratium",
      "Aspergillus"
    ],
    "correct": "Vorticella",
    "explanation": "Vorticella is a genus of bell-shaped, single-celled eukaryotes known as ciliates, which belong to the kingdom Protista and are classified as protozoans. Cyclops is a crustacean, Ceratium is a type of algae (dinoflagellate), and Aspergillus is a genus of fungus."
  },
  {
    "id": "647",
    "text": "Which of the following stores food materials in the root? (TSTET 5 Jan 2025)",
    "options": [
      "Turmeric",
      "Ginger",
      "Radish",
      "Garlic"
    ],
    "correct": "Radish",
    "explanation": "A radish is a modified taproot that becomes fleshy and swollen to store food. The other options are modified stems or leaves. Ginger and turmeric are rhizomes (underground stems), and garlic is a bulb (a short stem with fleshy leaves that function as food storage organs)."
  },
  {
    "id": "648",
    "text": "Identify the Saprophyte from the following. (TSTET 5 Jan 2025)",
    "options": [
      "Nepenthes",
      "Cuscuta",
      "Drosera",
      "Agaricus"
    ],
    "correct": "Agaricus",
    "explanation": "A saprophyte is an organism that obtains its nutrients from dead and decaying organic matter. Agaricus, the common mushroom, is a classic example of a saprophytic fungus. Cuscuta is a parasitic plant, while Nepenthes and Drosera are carnivorous plants that supplement their nutrition by trapping insects."
  },
  {
    "id": "649",
    "text": "Identify the pair in which both the organisms show External fertilization. (TSTET 5 Jan 2025)",
    "options": [
      "Frog & Cockroach",
      "Frog & Fish",
      "Fish & Earthworm",
      "Cockroach & Earthworm"
    ],
    "correct": "Frog & Fish",
    "explanation": "External fertilization occurs when sperm fertilizes an egg outside the female's body, a process that typically happens in aquatic environments. Both frogs (amphibians) and most bony fish release their gametes into the water for fertilization. Cockroaches (insects) and earthworms (annelids) undergo internal fertilization."
  },
  {
    "id": "650",
    "text": "The percentage of Argon in the atmosphere is about (TSTET 5 Jan 2025)",
    "options": [
      "0.93%",
      "0.04%",
      "20.95%",
      "78.08%"
    ],
    "correct": "0.93%",
    "explanation": "Earth's atmosphere is composed of several gases. The most abundant is Nitrogen (approx. 78.08%), followed by Oxygen (approx. 20.95%). Argon is the third most abundant gas, making up about 0.93% of the atmosphere. Carbon dioxide accounts for approximately 0.04%."
  },
  {
    "id": "651",
    "text": "Which of the following diseases is NOT caused by a protozoan pathogen? (TSTET 5 Jan 2025)",
    "options": [
      "Kala-azar",
      "Filariasis",
      "Malaria",
      "Sleeping sickness"
    ],
    "correct": "Filariasis",
    "explanation": "Filariasis is caused by parasitic roundworms (helminths) of the Filarioidea type, not by a protozoan. The other diseases are caused by protozoans: Malaria by Plasmodium, Sleeping sickness by Trypanosoma, and Kala-azar by Leishmania."
  },
  {
    "id": "652",
    "text": "Identify the cell organelle present in both prokaryotic and eukaryotic cells. (TSTET 5 Jan 2025)",
    "options": [
      "Endoplasmic Reticulum",
      "Mitochondrion",
      "Ribosomes",
      "Nucleus"
    ],
    "correct": "Ribosomes",
    "explanation": "Ribosomes are the sites of protein synthesis and are found in all forms of life, including both prokaryotic and eukaryotic cells. Prokaryotic cells are simpler and lack a nucleus and other membrane-bound organelles like mitochondria and the endoplasmic reticulum, which are present in eukaryotic cells."
  },
  {
    "id": "653",
    "text": "Identify the primary air pollutants that cause acid rain. (TSTET 5 Jan 2025)",
    "options": [
      "SO₂ & CFC",
      "CO₂ & CFC",
      "CFC PAN",
      "SO₂ & NO₂"
    ],
    "correct": "SO₂ & NO₂",
    "explanation": "Acid rain is mainly caused by the atmospheric reaction of primary pollutants, specifically sulfur dioxide ($SO_2$) and nitrogen oxides ($NO_2$), with water and oxygen. These reactions form sulfuric acid and nitric acid, which then fall to the earth as acid rain. CFCs are primarily responsible for ozone depletion."
  },
  {
    "id": "654",
    "text": "The second trophic level in a food chain is always occupied by these (TSTET 5 Jan 2025)",
    "options": [
      "Producers",
      "Herbivores",
      "Omnivores",
      "Carnivores"
    ],
    "correct": "Herbivores",
    "explanation": "Trophic levels describe the position an organism occupies in a food chain. The first level consists of producers (plants). The second trophic level is composed of primary consumers, which are herbivores that feed on the producers. Carnivores and omnivores occupy the third and higher trophic levels."
  },
  {
    "id": "655",
    "text": "The lecture method can be made more effective by: (TSTET 5 Jan 2025)",
    "options": [
      "Increasing the lecture time",
      "Incorporating group discussions and activities",
      "Avoiding visual teaching aids",
      "Relying solely on textbooks"
    ],
    "correct": "Incorporating group discussions and activities",
    "explanation": "A traditional lecture can be a passive learning experience. To make it more effective and engaging, it's crucial to incorporate interactive elements. Group discussions and activities encourage active participation, critical thinking, and collaborative learning, which leads to better understanding and retention of information."
  },
  {
    "id": "656",
    "text": "\"Assessment of Learning\" is assessment relating to (TSTET 5 Jan 2025)",
    "options": [
      "Understanding level of students only",
      "Individual learning styles of students",
      "Student engagement during the learning process",
      "Final performance of students"
    ],
    "correct": "Final performance of students",
    "explanation": "\"Assessment of Learning\" refers to summative assessment, which evaluates student learning at the end of an instructional unit or course. Its primary purpose is to measure the final performance or achievement of students against set standards, often for the purpose of grading and reporting."
  },
  {
    "id": "657",
    "text": "In Telangana science text books questions are given under this heading at the end of the lesson (TSTET 5 Jan 2025)",
    "options": [
      "What we have learnt?",
      "Improve your learning",
      "Exercises",
      "Test items"
    ],
    "correct": "Improve your learning",
    "explanation": "Following the State Curriculum Framework (SCF) guidelines, textbooks in Telangana, including those for science, feature a section at the end of each lesson titled 'Improve your learning'. This section contains questions, activities, and projects designed to reinforce and extend the concepts taught in the lesson."
  },
  {
    "id": "658",
    "text": "Development of vaccines in the medical field is related to this value of teaching Biological Sciences. (TSTET 5 Jan 2025)",
    "options": [
      "Aesthetic value",
      "Inspirational value.",
      "Disciplinary value.",
      "Value of Basis for Better living."
    ],
    "correct": "Value of Basis for Better living.",
    "explanation": "The creation and application of vaccines directly contribute to preventing diseases, improving public health, and enhancing the quality and length of human life. This exemplifies the utilitarian or practical value of biology, as it provides a scientific foundation for a healthier and better life."
  },
  {
    "id": "659",
    "text": "A student of class 8 is reading an article on controlling environmental pollution in a Science magazine and is noting down important points from it. This is related to the following domain and aspect. (TSTET 5 Jan 2025)",
    "options": [
      "Cognitive domain - Application.",
      "Affective domain - responding.",
      "Psychomotor domain - imitation.",
      "Cognitive domain - receiving."
    ],
    "correct": "Affective domain - responding.",
    "explanation": "The affective domain deals with emotions, interests, attitudes, and values. The student's action of not just reading but actively 'noting down important points' shows more than passive reception of information. It indicates an active participation and willingness to respond to the topic, which aligns with the 'responding' level of the affective domain."
  },
  {
    "id": "660",
    "text": "Identify from the following, the features of Fill in the blanks type of questions: (TSTET 5 Jan 2025)\nA) These questions always begin with blank.\nB) One or more key words are to be missed in this type of questions.\nC) These questions are useful in testing the memory of the students.",
    "options": [
      "A & B only",
      "A & C only",
      "B & C only",
      "A, B & C only"
    ],
    "correct": "B & C only",
    "explanation": "Statement A is incorrect, as the blank can be placed anywhere within a sentence. Statement B is a core feature; the purpose is to omit a key word or phrase for the student to recall. Statement C is also correct; fill-in-the-blank questions are a common tool for assessing recall of factual information and terminology, thus testing a student's memory."
  },
  {
    "id": "661",
    "text": "The constant temperature at which a liquid substance gets converted into gaseous state is called (APTET 2011)",
    "options": [
      "freezing point.",
      "lower fixed point.",
      "boiling point.",
      "melting point."
    ],
    "correct": "boiling point.",
    "explanation": "The boiling point is the specific temperature at which the vapor pressure of a liquid equals the pressure surrounding the liquid, and the liquid changes into a vapor. The freezing point is when a liquid turns into a solid. The melting point is the temperature at which a solid becomes a liquid. The lower fixed point on a temperature scale is typically the freezing point of water."
  },
  {
    "id": "662",
    "text": "Raju could hear the echo of his clap from a hill in front of him after 3 seconds of his clapping. The distance between him and the hill, assuming the velocity of sound in air to be 320 m/sec is..... (APTET 2011)",
    "options": [
      "480 m",
      "960 m",
      "320 m",
      "3 m"
    ],
    "correct": "480 m",
    "explanation": "An echo is the reflection of sound. The total time taken for the sound to travel to the hill and return is 3 seconds. The total distance traveled by the sound is calculated as Distance = Velocity × Time. Total distance = 320 m/s × 3 s = 960 m. This total distance is a round trip. The distance between Raju and the hill is half of this total distance. Therefore, Distance to the hill = 960 m / 2 = 480 m."
  },
  {
    "id": "663",
    "text": "Consider 3 magnets A, B, C are one of the poles of each of the magnets. A, B get attracted and A, C get repelled. Then the following statement is true (APTET 2011)",
    "options": [
      "A, C are like and B, C are like.",
      "A, B are unlike and B, C are unlike.",
      "A, B are unlike and B, C are like.",
      "A, B are like and B, C are unlike."
    ],
    "correct": "A, B are unlike and B, C are unlike.",
    "explanation": "According to the laws of magnetism, like poles repel each other, and unlike poles attract each other. Since A and C repel, they must be like poles (e.g., both North). Since A and B attract, they must be unlike poles (e.g., if A is North, B must be South). If A and C are like poles (both North) and B is an unlike pole to A (South), then B and C must also be unlike poles (South and North). Therefore, A and B are unlike, and B and C are unlike."
  },
  {
    "id": "664",
    "text": "The molecular formula for Ammonium Phosphate is (APTET 2011)",
    "options": [
      "NH₃PO₃",
      "NH₃(PO₄)₂",
      "(NH₄)₃PO₄",
      "NH₄PO₃"
    ],
    "correct": "(NH₄)₃PO₄",
    "explanation": "To write the chemical formula, we need to balance the charges of the ions. The ammonium ion is $NH_4^+$ (charge of +1). The phosphate ion is $PO_4^{3-}$ (charge of -3). To create a neutral compound, three +1 ammonium ions are needed to balance the single -3 phosphate ion. Thus, the correct formula is $(NH₄)₃PO₄$."
  },

  {
    "id": "665",
    "text": "The apparatus used to transfer a fixed volume of liquid from the source accurately to another container is (APTET 2011)",
    "options": [
      "Pipette",
      "Measuring jar",
      "Measuring flask",
      "Burette"
    ],
    "correct": "Pipette",
    "explanation": "A pipette is a laboratory instrument calibrated to deliver a precise, fixed volume of liquid. A measuring jar (or graduated cylinder) is used for approximate volume measurements. A measuring flask (or volumetric flask) is designed to accurately *contain* a specific volume, not transfer it. A burette is used to dispense variable but precise volumes of liquid, commonly used in titrations."
  },
  {
    "id": "666",
    "text": "In a Bramah press other things remaining constant if the cross-section of large piston is doubled, then the thrust on it (APTET 2011)",
    "options": [
      "is raised by 4 times.",
      "will remain the same.",
      "is halved.",
      "is doubled."
    ],
    "correct": "is doubled.",
    "explanation": "A Bramah press works on Pascal's principle, which states that pressure is transmitted equally throughout an enclosed fluid ($P_1 = P_2$). Since Pressure = Force / Area, we have $F_1/A_1 = F_2/A_2$. The thrust (force) on the large piston is $F_2 = F_1 \times (A_2/A_1)$. If the area of the large piston ($A_2$) is doubled, the new thrust will be $F_1 \times (2A_2/A_1)$, which is twice the original thrust ($F_2$). Therefore, the thrust is doubled."
  },
  {
    "id": "667",
    "text": "'m' gms of Carbon reacts completely with 'n' gms of Oxygen to produce Carbon dioxide. The mass of Oxygen required to react with 'm' gms of Carbon completely and produce Carbon-monoxide is.. (APTET 2011)",
    "options": [
      "n/2 gms",
      "m gms",
      "n gms",
      "m/2 gms"
    ],
    "correct": "n/2 gms",
    "explanation": "The reactions are: 1) For Carbon Dioxide: C + O₂ → CO₂. 2) For Carbon Monoxide: 2C + O₂ → 2CO, which means C + ½O₂ → CO. To produce carbon monoxide (CO), one atom of carbon reacts with one atom of oxygen. To produce carbon dioxide (CO₂), one atom of carbon reacts with two atoms of oxygen. Therefore, for the same mass ('m' gms) of carbon, producing carbon monoxide requires exactly half the mass of oxygen needed to produce carbon dioxide. If 'n' gms of oxygen are needed for CO₂, then n/2 gms are needed for CO."
  },
  {
    "id": "668",
    "text": "The gas liberated on heating Zinc Carbonate is (APTET 2011)",
    "options": [
      "H₂",
      "O₂",
      "CO₂",
      "CO"
    ],
    "correct": "CO₂",
    "explanation": "Heating metal carbonates leads to thermal decomposition. Zinc Carbonate ($ZnCO_3$) decomposes upon heating to produce Zinc Oxide ($ZnO$) and Carbon Dioxide ($CO_2$) gas. The balanced chemical equation is: $ZnCO_3(s) → ZnO(s) + CO_2(g)$."
  },
  {
    "id": "669",
    "text": "The first artificial satellite launched by India is ...... (APTET 2011)",
    "options": [
      "Bhaskara",
      "APPLE",
      "Arya Bhatta",
      "Rohini"
    ],
    "correct": "Arya Bhatta",
    "explanation": "Aryabhata was India's first satellite. It was launched on April 19, 1975, by the Soviet Union. It was named after the prominent Indian astronomer and mathematician of the 5th century. Bhaskara, APPLE, and Rohini were subsequent Indian satellites."
  },
  {
    "id": "670",
    "text": "The emblem of a T.V. channel is displayed at the left hand top corner of the screen. When Raju is seeing the image of the T.V. in a mirror the emblem appears at (APTET 2011)",
    "options": [
      "left hand bottom corner.",
      "right hand top corner.",
      "left hand top corner.",
      "right hand bottom corner."
    ],
    "correct": "right hand top corner.",
    "explanation": "A plane mirror produces an image that is laterally inverted, meaning left and right are reversed. However, there is no top-to-bottom inversion. Therefore, an object in the top-left corner of the original screen will appear in the top-right corner of its mirror image."
  },
  {
    "id": "671",
    "text": "The shape of the body which is always in stable equilibrium, irrespective of the position it is placed, is (APTET 2011)",
    "options": [
      "Cube",
      "Cone",
      "Cylinder",
      "Sphere"
    ],
    "correct": "Cube",
    "explanation": "This question is ambiguously worded. A sphere is always in neutral equilibrium, not stable. A cone is stable only on its base. A cube, when placed on any of its flat faces, is in stable equilibrium because tilting it raises its center of gravity, and it will return to its original position when released. The phrase 'irrespective of the position' likely refers to any of its multiple, identical, stable resting faces, making it the best answer among the choices, despite the flawed phrasing."
  },
  {
    "id": "672",
    "text": "Electrochemical effect is used in ... (APTET 2011)",
    "options": [
      "Telegraph",
      "Electric motors",
      "Electric stove",
      "Purification of metals"
    ],
    "correct": "Purification of metals",
    "explanation": "The electrochemical effect involves using an electric current to drive a chemical reaction (electrolysis). This principle is applied in the purification of metals through a process called electrorefining. In contrast, telegraphs and electric motors operate on the magnetic effect of current, while an electric stove utilizes the heating effect of current."
  },
  {
    "id": "673",
    "text": "One of the following is not the correct pair (APTET 2011)",
    "options": [
      "Chlorophyll - Conversion of energy.",
      "Chromoplast - Colourless.",
      "Young tomatoes - Leucoplast.",
      "Green chilli - Chloroplast."
    ],
    "correct": "Chromoplast - Colourless.",
    "explanation": "This pair is incorrect. Chromoplasts are plastids that contain carotenoid pigments, giving flowers and fruits their yellow, orange, or red colors; they are not colorless. Leucoplasts are the colorless plastids. The other pairs are correct: Chlorophyll is vital for converting light energy into chemical energy. Young, unripe tomatoes contain leucoplasts before they develop color. Green chillies are green due to the presence of chloroplasts."
  },
  {
    "id": "674",
    "text": "A plant has bisexual flowers. You want to cross pollinate those flowers. You have to ..... (APTET 2011)",
    "options": [
      "remove both Androecium and Gynoecium.",
      "remove Calyx.",
      "remove Corolla.",
      "remove either Gynoecium or Androecium."
    ],
    "correct": "remove either Gynoecium or Androecium.",
    "explanation": "To ensure cross-pollination and prevent self-pollination in a bisexual flower (which has both male and female parts), one set of reproductive organs must be removed. Typically, the male part (Androecium, which produces pollen) is removed in a process called emasculation, leaving the female part (Gynoecium) to be pollinated by another flower. Therefore, removing the Androecium is the necessary step."
  },
  {
    "id": "675",
    "text": "Alternation of generation is seen in the life history of (APTET 2011)",
    "options": [
      "Frog",
      "Selaginella",
      "Chlamydomonas",
      "Mosquito"
    ],
    "correct": "Selaginella",
    "explanation": "Alternation of generations is a life cycle pattern where an organism alternates between a multicellular haploid (gametophyte) stage and a multicellular diploid (sporophyte) stage. This is characteristic of all land plants. Selaginella, being a pteridophyte (fern ally), clearly exhibits this life cycle. Animals like frogs and mosquitoes undergo metamorphosis, not alternation of generations. The alga Chlamydomonas does not have a multicellular diploid stage."
  },
  {
    "id": "676",
    "text": "The evidences of extinct animals left on earth that are useful in 'Evolution of life' are (APTET 2011)",
    "options": [
      "Bones",
      "Foot prints",
      "Fossils",
      "Fuels"
    ],
    "correct": "Fossils",
    "explanation": "Fossils are the preserved remains, impressions, or traces of organisms from past geological ages. They are the most comprehensive category of evidence for evolution, providing a direct record of extinct life forms and showing evolutionary changes over time. While bones and footprints can be specific types of fossils, the term 'fossils' encompasses all such evidence."
  },
  {
    "id": "677",
    "text": "Medicine for dog bite was discovered by ......... (APTET 2011)",
    "options": [
      "Edward Jenner",
      "Louis Pasteur",
      "Robert Koch",
      "Alexander Fleming"
    ],
    "correct": "Louis Pasteur",
    "explanation": "This question refers to the prevention of rabies, a deadly virus transmitted through the bite of an infected animal, like a dog. Louis Pasteur developed the first effective vaccine against rabies in 1885. Edward Jenner is credited with the smallpox vaccine, Robert Koch with identifying the causes of tuberculosis and cholera, and Alexander Fleming with discovering penicillin."
  },
  {
    "id": "678",
    "text": "Suppose a student of 8th class complains that he has ear-ache, fever and pain in opening mouth. As a biology teacher, you identify the disease as (APTET 2011)",
    "options": [
      "Pertusis",
      "Rubella",
      "Mumps",
      "Malaria"
    ],
    "correct": "Mumps",
    "explanation": "The combination of fever, ear-ache, and pain when opening the mouth strongly indicates mumps. Mumps is a viral infection that causes painful swelling of the parotid salivary glands, located near the ears. This swelling leads to the characteristic pain and difficulty in opening the mouth. Pertussis is whooping cough, Rubella is German measles, and Malaria involves cycles of high fever and chills."
  },
  {
    "id": "679",
    "text": "Identify the right food chain. (APTET 2011)",
    "options": [
      "Calotes -> Eagle -> Snake.",
      "Carnivores -> Herbivores -> Plants.",
      "Plants -> Insects -> Calotes.",
      "Plants -> Goat -> Insects."
    ],
    "correct": "Plants -> Insects -> Calotes.",
    "explanation": "A food chain shows the flow of energy from one organism to another. It must start with a producer (plant), followed by a primary consumer (herbivore) and a secondary consumer (carnivore). Option 3 correctly depicts this: Plants are producers, insects eat plants (primary consumers), and Calotes (a lizard) eats insects (secondary consumer)."
  },
  {
    "id": "680",
    "text": "The order of stages in tissue culture is (APTET 2011)",
    "options": [
      "Explant, Callus, Plant, New Plant.",
      "Callus, Plant, New Plant, Explant.",
      "Plant, Explant, Callus, New Plant.",
      "New Plant, Plant, Callus, Explant."
    ],
    "correct": "Plant, Explant, Callus, New Plant.",
    "explanation": "This option describes the complete chronological sequence of events. You start with a source **Plant**, from which a piece of tissue called an **Explant** is taken. This explant is cultured on a medium to form an undifferentiated mass of cells called a **Callus**. The callus is then induced to differentiate and grow into a **New Plant**."
  },
  {
    "id": "681",
    "text": "In the balanced diet pyramid, as we go up from the base, the fourth place is occupied by (APTET 2011)",
    "options": [
      "Vitamins",
      "Proteins",
      "Fibre",
      "Minerals"
    ],
    "correct": "Vitamins",
    "explanation": "This question is based on a specific or non-standard food pyramid model, as it contradicts the common model where the fourth (top) level is occupied by fats and sugars. In the standard pyramid, carbohydrates are at the base (1st), followed by fruits and vegetables (vitamins/minerals) (2nd), and proteins (3rd). Based on the provided answer key, 'Vitamins' is considered the correct answer for the fourth position."
  },
  {
    "id": "682",
    "text": "The human dental formula is .... (APTET 2011)",
    "options": [
      "1/1, 2/2, 3/3, 2/2",
      "2/2, 1/1, 2/2, 3/3",
      "2/2, 2/2, 3/3, 3/3",
      "1/1, 3/3, 2/2, 2/2"
    ],
    "correct": "2/2, 1/1, 2/2, 3/3",
    "explanation": "The dental formula represents the number of each type of tooth in one half of an jaw (upper/lower). The order is Incisors (I), Canines (C), Premolars (P), Molars (M). For an adult human, the formula is I:2/2, C:1/1, P:2/2, M:3/3. This means on one side, there are 2 incisors, 1 canine, 2 premolars, and 3 molars in both the upper and lower jaw."
  },
  {
    "id": "683",
    "text": "A scientist has selected single celled organisms that can live even in acidic medium like HCl for his experiment. They belong to the Kingdom (APTET 2011)",
    "options": [
      "Animalia",
      "Plantae",
      "Monera",
      "Protista"
    ],
    "correct": "Monera",
    "explanation": "The kingdom Monera consists of prokaryotic organisms like bacteria and archaea. Many archaea are extremophiles, meaning they can survive in extreme environments. Organisms that thrive in highly acidic conditions are called acidophiles, and they belong to this kingdom. Animalia and Plantae are multicellular kingdoms, and Protista consists of eukaryotes that are generally less tolerant of such extreme conditions."
  },
  {
    "id": "684",
    "text": "Most of the disease spreading animals without notochord belong to phylum (APTET 2011)",
    "options": [
      "Arthropoda",
      "Protozoa",
      "Nematyhelminthes",
      "Mammalia"
    ],
    "correct": "Arthropoda",
    "explanation": "The question asks for the phylum of invertebrates (animals without a notochord) that are common disease vectors. The phylum Arthropoda includes insects (mosquitoes, flies) and arachnids (ticks), which are the most significant vectors for spreading diseases like malaria, dengue, Lyme disease, etc. Protozoa and Nematyhelminthes contain many pathogens themselves but are not typically the animal vectors. Mammalia are vertebrates."
  },
  {
    "id": "685",
    "text": "This provides quantitative as well as qualitative description of the outcomes of teaching-learning process. (APTET 2011)",
    "options": [
      "Testing",
      "Measurement",
      "Evaluation",
      "Examination"
    ],
    "correct": "Evaluation",
    "explanation": "In educational terminology, evaluation is the broadest concept. It is a systematic process that includes both quantitative (numerical) data obtained from measurement (like test scores) and qualitative (descriptive) data (like observations or portfolio reviews) to judge the overall value or worth of a learning process. Testing and examination are tools for measurement, which is just one part of evaluation."
  },
  {
    "id": "686",
    "text": "In Bloom's Taxonomy of Educational Objectives, the specification 'Translation' belongs to the objective (APTET 2011)",
    "options": [
      "Application",
      "Analysis",
      "Synthesis",
      "Comprehension"
    ],
    "correct": "Comprehension",
    "explanation": "In Bloom's original taxonomy, Comprehension is the ability to grasp the meaning of material. This level includes behaviors like translating material from one form to another (e.g., words to numbers), interpreting material (explaining or summarizing), and estimating future trends (extrapolation). Therefore, 'Translation' is a key specification within the Comprehension objective."
  },
  {
    "id": "687",
    "text": "The information that need not be given in a laboratory instruction card is (APTET 2011)",
    "options": [
      "who has to do the experiment.",
      "the purpose of the equipment.",
      "the method to be adopted.",
      "precautions to be observed."
    ],
    "correct": "who has to do the experiment.",
    "explanation": "A laboratory instruction card is a guide for the procedure itself and is meant to be used by any student performing the experiment. It should always include the purpose (or aim), the method (procedure), and safety precautions. It does not need to specify the name of the individual student assigned to the task."
  },
  {
    "id": "688",
    "text": "In Edger Dale's cone of experiences, the learning experiences are arranged in the order of (taking the start point from the base of the cone) (APTET 2011)",
    "options": [
      "decreasing abstractness.",
      "increasing abstractness.",
      "increasing expenditure.",
      "increasing concreteness."
    ],
    "correct": "increasing abstractness.",
    "explanation": "Edgar Dale's Cone of Experience arranges learning activities in a hierarchy based on their concreteness. The base of the cone consists of the most concrete experiences (e.g., direct, purposeful doing). As one moves up the cone toward the tip, the experiences become progressively more abstract, culminating in verbal symbols (reading) at the pinnacle. Therefore, starting from the base and moving up, the order shows increasing abstractness."
  },
  {
    "id": "689",
    "text": "The method of teaching that makes the students to look at knowledge as a whole is (APTET 2011)",
    "options": [
      "Project method",
      "Lecture method",
      "Demonstration method",
      "Discussion method"
    ],
    "correct": "Lecture method",
    "explanation": "While modern pedagogy often associates holistic learning with methods like the Project Method, the key for this question indicates the Lecture Method. The rationale could be that a well-organized lecture can provide a comprehensive, structured overview of a topic, presenting the knowledge as a coherent whole or a complete framework before breaking it down into smaller components."
  },
  {
    "id": "690",
    "text": "An ancient, convenient and inexpensive method of teaching that is suitable for teaching almost all the subjects of school curriculum is (APTET 2011)",
    "options": [
      "Lecture method",
      "Demonstration method",
      "Source method",
      "Story-telling method"
    ],
    "correct": "Lecture method",
    "explanation": "The lecture method is a traditional and enduring teaching technique. It is considered highly convenient and inexpensive because it requires few resources beyond a teacher's expertise and can be delivered to large audiences. Its versatility allows it to be adapted for teaching foundational knowledge in almost any subject within the school curriculum, making it a practical and widely used method."
  }
]


export const sciencePaper2Questions = rawSciencePaper2Data.map((q, index) => {
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


export const convertSciencePaper2ToQuestionFormat = (questions: typeof sciencePaper2Questions) => {
  return questions.map((q, index) => ({
    id: index + 1,
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
  }));
};
