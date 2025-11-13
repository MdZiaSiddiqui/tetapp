type SocialPaper2RawQuestion = {
  id: number | string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

const rawSocialPaper2Data: SocialPaper2RawQuestion[] = 
[
  {
    "id": 1,
    "question": "Usually, Contour lines are drawn in the map at these fixed intervals of height (TSTET 02 Jan 2025)",
    "options": [
      "100 metres, 200 metres and 300 metres",
      "50 metres, 200 metres and 500 metres",
      "20 metres, 50 metres and 100 metres",
      "100 metres, 500 metres and 1000 metres"
    ],
    "correctAnswer": 2,
    "explanation": "Contour lines connect points of equal elevation. The interval, or the vertical distance between lines, is kept constant. Common intervals on topographic maps are 20, 50, and 100 metres, depending on the map's scale and the terrain's steepness."
  },
  {
    "id": 2,
    "question": "These districts of Telangana state share their boundary with the state of Chattisgarh (TSTET 02 Jan 2025)",
    "options": [
      "Bhadradri Kothagudem and Jayashakar Bhoopalapally",
      "Bhadradri Kothagudem and Adilabad",
      "Komarum Bheem and Adilabad",
      "Manchiryal and Komarum Bheem"
    ],
    "correctAnswer": 0,
    "explanation": "Telangana's northeastern border is shared with Chhattisgarh. The districts that lie on this border are primarily Bhadradri Kothagudem and Mulugu (which was carved out of Jayashankar Bhupalpally)."
  },
  {
    "id": 3,
    "question": "Which of the following statement refers to Continental (Extreme) Climate'? (TSTET 02 Jan 2025)",
    "options": [
      "The places having no difference between the maximum and the minimum monthly average temperatures",
      "The places having less difference between the maximum and the minimum monthly average temperatures",
      "The places having great difference between the maximum and the minimum monthly average temperatures",
      "The places having negligible difference between the maximum and the minimum monthly average temperatures"
    ],
    "correctAnswer": 2,
    "explanation": "A continental climate is characterized by significant variations in temperature over the year. Locations far from the moderating influence of oceans experience very hot summers and very cold winters, leading to a large or 'great' difference between maximum and minimum temperatures."
  },
  {
    "id": 4,
    "question": "These parts of India receive annual rainfall over 400 cm. (TSTET 02 Jan 2025)",
    "options": [
      "The eastern part of Western Ghats",
      "North Eastern parts of India",
      "The Chota Nagpur Plateau region",
      "The Deccan Plateau region"
    ],
    "correctAnswer": 1,
    "explanation": "The North Eastern parts of India, particularly the windward side of the Khasi Hills in Meghalaya (e.g., Mawsynram, Cherrapunji), receive the heaviest rainfall in the country, often exceeding 400 cm annually, due to the monsoon winds from the Bay of Bengal."
  },
  {
    "id": 5,
    "question": "In this layer of the atmosphere, the temperature increases as there is an increase in altitude (TSTET 02 Jan 2025)",
    "options": [
      "Troposphere",
      "Stratosphere",
      "Mesosphere",
      "Stratosphere and Mesosphere"
    ],
    "correctAnswer": 1,
    "explanation": "In the Stratosphere, temperature increases with height. This 'temperature inversion' is caused by the absorption of the sun's ultraviolet (UV) radiation by the ozone layer, which is concentrated in this part of the atmosphere."
  },
  {
    "id": 6,
    "question": "These forests are commonly found in South East USA. South China and in South East Brazil (TSTET 02 Jan 2025)",
    "options": [
      "Tropical Deciduous Forests",
      "Tropical Evergreen Forests",
      "Temperate Deciduous Forests",
      "Temperate Evergreen Forests"
    ],
    "correctAnswer": 3,
    "explanation": "Temperate evergreen forests are found in mid-latitudinal coastal regions. The specified areas (South East USA, South China, South East Brazil) are typical locations for this forest type, characterized by warm summers, mild winters, and a mix of broad-leaf and coniferous trees."
  },
  {
    "id": 7,
    "question": "This type of farming depends upon monsoon rainfall, natural fertility of the soil and suitability of other environmental conditions to the crops grown (TSTET 02 Jan 2025)",
    "options": [
      "Intensive Subsistence Farming",
      "Simple Subsistence Farming",
      "Commercial Farming",
      "Extensive Agricultural Farming"
    ],
    "correctAnswer": 1,
    "explanation": "Simple (or primitive) subsistence farming is a traditional agricultural practice that relies entirely on natural factors like rainfall and soil fertility. It uses basic tools and family labor to grow food mainly for self-consumption."
  },
  {
    "id": 8,
    "question": "The distance between any two consecutive longitudes is approximately 111.32 km at the equator. The perimeter of the Earth at the equator is (TSTET 02 Jan 2025)",
    "options": [
      "40,075 Km",
      "41,470 km",
      "39,294 km",
      "12,896 km"
    ],
    "correctAnswer": 0,
    "explanation": "The Earth has 360 degrees of longitude. To calculate the equatorial circumference, multiply the distance of one degree by 360. So, 111.32 km/degree * 360 degrees = 40,075.2 km."
  },
  {
    "id": 9,
    "question": "Read the following sentences regarding 'Surface Waves'. A) The velocity of Surface waves changes as they travel through materials with different densities in the interior of the earth B) The denser the material, the higher the velocity of the 'surface waves' (TSTET 02 Jan 2025)",
    "options": [
      "Both A and B are incorrect",
      "A is correct and B is incorrect",
      "B is correct and A is incorrect",
      "Both A and B are correct"
    ],
    "correctAnswer": 0,
    "explanation": "Both statements are incorrect. Surface waves travel along the Earth's surface, not its interior, so statement A is false. The properties described in both statements apply to body waves (P-waves and S-waves), which do travel through the Earth's interior."
  },
  {
    "id": 10,
    "question": "The Geographical area of India and the percentage of the total Geographical area of India in the world is (TSTET 02 Jan 2025)",
    "options": [
      "32.8 million Sq. km and 2.4% of world's Geographical area",
      "328 million Sq. km and 3.4% of world's Geographical area",
      "3.28 million Sq.km and 2.4% of world's Geographical area",
      "0.328 million Sq. km and 2.4% of world's Geographical area"
    ],
    "correctAnswer": 2,
    "explanation": "India's total land area is approximately 3.28 million square kilometers. This makes up about 2.4% of the world's total land surface area, ranking it as the seventh-largest country globally."
  },
  {
    "id": 11,
    "question": "From among the following, identify the true statements regarding the Western Ghats. A) The height of Western Ghats progressively increases from north to south. B) Anaimudi and Dodda betta are the highest peaks of the Western Ghats. C) The Eastern Ghats are higher than the Western Ghats. D) The Rivers like Godavari, Krishna. Thungabhadra etc. are originated in the Western Ghats. (TSTET 02 Jan 2025)",
    "options": [
      "A & B only",
      "B & C only",
      "B & D only",
      "A, B & D only"
    ],
    "correctAnswer": 3,
    "explanation": "Statements A, B, and D are correct. The Western Ghats' elevation increases southwards (A). Anaimudi is the highest peak (B). Major peninsular rivers originate there (D). Statement C is incorrect; the Western Ghats are significantly higher and more continuous than the Eastern Ghats."
  },
  {
    "id": 12,
    "question": "Among the following Groups of countries, the countries which are grouped under 'Very High Human Development' as per Human Development Index Report, 2021 (TSTET 02 Jan 2025)",
    "options": [
      "Norway, Switzerland, United States of America",
      "China, Sri Lanka, India",
      "United States of America, Sri Lanka and Bhutan",
      "Switzerland, Sri Lanka and China"
    ],
    "correctAnswer": 0,
    "explanation": "According to the UNDP Human Development Report for 2021/22, countries like Norway, Switzerland, and the USA are consistently ranked in the 'Very High Human Development' category. India, China, and Sri Lanka fall into the 'High' or 'Medium' development categories."
  },
  {
    "id": 13,
    "question": "Between the latitudes 10° and 30° North and South of the equator, rainfall is heavier on the eastern coasts and decreases towards the west due to these winds (TSTET 02 Jan 2025)",
    "options": [
      "Westerlies",
      "Monsoon winds",
      "Trade Winds",
      "Polar Winds"
    ],
    "correctAnswer": 2,
    "explanation": "In the tropics, the Trade Winds blow from east to west. As they travel over warm oceans, they pick up moisture, causing heavy rainfall on the eastern coasts of continents. As they move inland towards the west, they lose moisture, and rainfall decreases."
  },
  {
    "id": 14,
    "question": "Which one of the following is the main cause of land degradation of soil in Punjab, Haryana and Western Uttar Pradesh? (TSTET 02 Jan 2025)",
    "options": [
      "Intensive cultivation",
      "Over irrigation",
      "Deforestation",
      "Overgrazing of animals"
    ],
    "correctAnswer": 1,
    "explanation": "In the agriculturally intensive regions of Punjab, Haryana, and Western U.P., over-irrigation from canals and tube wells has led to severe problems of waterlogging and soil salinization, which are major forms of land degradation."
  },
  {
    "id": 15,
    "question": "In China, all social classes opposing feudalism and imperialism were united on the basis of this theory (TSTET 02 Jan 2025)",
    "options": [
      "New Democracy",
      "Communism",
      "Revolution",
      "Land for all"
    ],
    "correctAnswer": 0,
    "explanation": "Mao Zedong's theory of 'New Democracy' proposed a coalition of all anti-imperialist and anti-feudal social classes—the proletariat, peasantry, petty bourgeoisie, and national bourgeoisie—to lead the revolution in China before transitioning to socialism."
  },
  {
    "id": 16,
    "question": "Adolf Hitler assigned the responsibility of economic recovery to Hjalmar Schacht in Germany. He aimed at (TSTET 02 Jan 2025)",
    "options": [
      "Heavy collection of taxes from the people",
      "Full production and full employment through a state funded work creation programme",
      "Privatisation of industries in the country",
      "Bringing a new variety of seeds in the field of agriculture to increase production"
    ],
    "correctAnswer": 1,
    "explanation": "To combat the Great Depression, Hjalmar Schacht, Hitler's economic minister, implemented policies focused on state-funded public works (like the Autobahn) and rearmament. The goal was to stimulate the economy and achieve full production and employment."
  },
  {
    "id": 17,
    "question": "To isolate France, this German Chancellor had made a secret alliance with Austria in 1879 and Italy and Austria in 1882 (TSTET 02 Jan 2025)",
    "options": [
      "Olaf Scholz",
      "Helmet Kohl",
      "Kurt George Kiesinger",
      "Otto Von Bismarck"
    ],
    "correctAnswer": 3,
    "explanation": "Otto von Bismarck's foreign policy centered on keeping France isolated after the Franco-Prussian War. He masterminded a series of alliances, including the Dual Alliance with Austria-Hungary (1879) and the Triple Alliance with Austria-Hungary and Italy (1882) to achieve this."
  },
  {
    "id": 18,
    "question": "Giuseppe Mazzini formed a secret society called 'Young Italy' to (TSTET 02 Jan 2025)",
    "options": [
      "To separate the Italian States and hand over to Bourbon Kings",
      "To unite Italy into an Italian Republic",
      "To defeat France and occupy the small independent German Kingdoms",
      "To drive out the Spanish rulers with the help and support of the local peasants"
    ],
    "correctAnswer": 1,
    "explanation": "Giuseppe Mazzini, a fervent nationalist, founded 'Young Italy' in 1831. Its goal was to promote the idea of a united, independent, and republican Italy by inspiring a popular uprising against foreign rule and the fragmented monarchies of the peninsula."
  },
  {
    "id": 19,
    "question": "Which of the following statement best describes the concept of 'Socialism'? (TSTET 02 Jan 2025)",
    "options": [
      "It calls for public and private ownership of Natural Resources",
      "It insists upon the equal distribution of Land among all the people",
      "It calls for public ownership rather than private control of property and natural resources",
      "It calls for the private ownership of the means of Production"
    ],
    "correctAnswer": 2,
    "explanation": "The fundamental tenet of socialism is the collective or public ownership and democratic control of the means of production (factories, land, resources). This contrasts with capitalism, which is based on private ownership and control."
  },
  {
    "id": 20,
    "question": "One among the following was not a member of 'Group of Ministers' formed in 2013 for the formation of Telangana? (TSTET 02 Jan 2025)",
    "options": [
      "Sushilkumar Shinde",
      "Rajnath Singh",
      "P. Chidambaram",
      "M. Veerappa Moily"
    ],
    "correctAnswer": 1,
    "explanation": "The Group of Ministers (GoM) was formed by the ruling UPA government. It included senior ministers like Shinde, Chidambaram, and Moily. Rajnath Singh was a senior leader of the opposition BJP at the time and was not part of this government-appointed committee."
  },
  {
    "id": 21,
    "question": "Among the following. identify the educational reform of Salar Jung (TSTET 02 Jan 2025)",
    "options": [
      "To promote traditional Islamic education",
      "To Introduce Western education system",
      "To provide education to common people",
      "To establish military training schools"
    ],
    "correctAnswer": 1,
    "explanation": "As the Prime Minister of Hyderabad State, Salar Jung I was a key modernizer. A major part of his reforms was the introduction of Western education, establishing institutions that taught English and modern subjects to create an efficient administrative class."
  },
  {
    "id": 22,
    "question": "The first president of the All-India Muslim League was (TSTET 02 Jan 2025)",
    "options": [
      "Agakhan",
      "Mohammad Ali Jinnah",
      "Nawab Khan",
      "Liaquat Ali Khan"
    ],
    "correctAnswer": 0,
    "explanation": "The All-India Muslim League was founded in 1906. Its first president was Sir Sultan Mahomed Shah, Aga Khan III, who was a prominent leader and played a pivotal role in the early political mobilization of Muslims in British India."
  },
  {
    "id": 23,
    "question": "In this theory. Dadabhai Naoroji expounded how the vast amount of wealth was taken away from India by the British (TSTET 02 Jan 2025)",
    "options": [
      "Drain Theory",
      "Demand Theory",
      "Supply Theory",
      "Economic Growth Theory"
    ],
    "correctAnswer": 0,
    "explanation": "In his book 'Poverty and Un-British Rule in India', Dadabhai Naoroji proposed the 'Drain Theory'. It argued that Britain was systematically draining wealth from India through exploitative economic policies, salaries, and pensions, which led to the impoverishment of India."
  },
  {
    "id": 24,
    "question": "The primary principle of establishing 'the Ramakrishna Mission' was (TSTET 02 Jan 2025)",
    "options": [
      "Promoting political independence to India",
      "Service to man is Service to God",
      "to propagate Hinduism with the slogan 'Go back to Veda'",
      "To undertake Religious conversions"
    ],
    "correctAnswer": 1,
    "explanation": "Founded by Swami Vivekananda, the Ramakrishna Mission's core ideology is based on the teachings of Sri Ramakrishna, emphasizing that serving humanity is a way to worship God. Its motto is 'Atmano Mokshartham Jagat Hitaya Cha' (For one's own salvation and for the welfare of the world)."
  },
  {
    "id": 25,
    "question": "Queen Victoria's 'Proclamation' of 1858 aimed at (TSTET 02 Jan 2025)",
    "options": [
      "Establishment of railways in India",
      "Establishment of schools for Indians",
      "The transition of power from East India Company rule to direct British rule",
      "Promotion of agriculture and reducing taxes"
    ],
    "correctAnswer": 2,
    "explanation": "Following the Revolt of 1857, the British government passed the Government of India Act 1858. Queen Victoria's Proclamation officially announced the end of the East India Company's rule and the transfer of India's governance directly to the British Crown."
  },
  {
    "id": 26,
    "question": "Which of the following territory was primarily controlled by the French East India Company in India? (TSTET 02 Jan 2025)",
    "options": [
      "Goa",
      "Bengal",
      "Pondicherry",
      "Chinsura"
    ],
    "correctAnswer": 2,
    "explanation": "Pondicherry (now Puducherry) was the capital and main settlement of French India. While they had other trading posts, Pondicherry served as the administrative headquarters for the French East India Company."
  },
  {
    "id": 27,
    "question": "The purpose of the Preamble of the Indian Constitution is (TSTET 02 Jan 2025)",
    "options": [
      "To outline the structure of the Government",
      "To state the objectives of the constitution",
      "To list out the fundamental Rights of the citizen",
      "To declare India as a welfare state"
    ],
    "correctAnswer": 1,
    "explanation": "The Preamble acts as an introduction and expresses the philosophy and fundamental values of the Constitution. It lays out the core objectives: to secure justice, liberty, equality, and fraternity for all citizens, and declares India a Sovereign, Socialist, Secular, and Democratic Republic."
  },
  {
    "id": 28,
    "question": "The principles 'Liberty, Equality and Fraternity' were adapted by the Indian Constitution from the constitution of this country (TSTET 02 Jan 2025)",
    "options": [
      "France",
      "England",
      "Ireland",
      "United States of America"
    ],
    "correctAnswer": 0,
    "explanation": "The ideals of liberty, equality, and fraternity, which are enshrined in the Preamble of the Indian Constitution, were borrowed from the French Revolution (1789-1799), whose motto was 'Liberté, égalité, fraternité'."
  },
  {
    "id": 29,
    "question": "In India, the Union Council of Ministers is responsible only to the (TSTET 02 Jan 2025)",
    "options": [
      "Lok Sabha and Rajya Sabha",
      "Lok Sabha",
      "Rajya Sabha",
      "Lok Sabha, Rajya Sabha and State Legislative Assemblies of all States and Union Territories"
    ],
    "correctAnswer": 1,
    "explanation": "Article 75(3) of the Constitution of India clearly states that 'The Council of Ministers shall be collectively responsible to the House of the People (Lok Sabha)'. This principle of collective responsibility is the bedrock of parliamentary democracy in India."
  },
  {
    "id": 30,
    "question": "Study the given statements and choose the correct statements. A) The chief administrative organ of the United Nations Organisation is the Secretariat. B) The Secretariat is headed by the Secretary General who is appointed for a term of five years by the General Assembly on the recommendations of the Security Council. C) The main function of the Secretariat is to execute the decisions of the main organs and the specialised agencies of the United Nations Organisation. (TSTET 02 Jan 2025)",
    "options": [
      "A, B & C",
      "B & C only",
      "A & C only",
      "A & B only"
    ],
    "correctAnswer": 0,
    "explanation": "All three statements are correct. The Secretariat is the UN's administrative arm (A), led by the Secretary-General appointed for a five-year term through a specific process involving the Security Council and General Assembly (B). Its main job is to implement the decisions and mandates of the UN's other principal organs (C)."
  },
  {
    "id": 31,
    "question": "The Directive Principles of the Indian Constitution Contain A) the goals and objectives that we as a society should adopt B) certain rights that individuals should enjoy apart from the Fundamental Rights C) certain policies that the government should adopt (TSTET 02 Jan 2025)",
    "options": [
      "A & B only",
      "A only",
      "A, B & C",
      "B & C only"
    ],
    "correctAnswer": 2,
    "explanation": "The Directive Principles of State Policy (DPSP) are a comprehensive set of guidelines. They include long-term societal goals (A), non-justiciable rights for individuals (B), and specific policies for the government to follow (C) in order to create a just and welfare-oriented state."
  },
  {
    "id": 32,
    "question": "Who is responsible for deciding any disputes or doubts that arise during the election process of the President of India? (TSTET 02 Jan 2025)",
    "options": [
      "The Union Council of Ministers",
      "The Election Commission of India",
      "The Supreme Court of India",
      "The Cabinet sub-committee"
    ],
    "correctAnswer": 2,
    "explanation": "According to Article 71(1) of the Constitution, all doubts and disputes arising in connection with the election of the President or Vice-President are inquired into and decided by the Supreme Court of India, and its decision is final. The provided options are incorrect; I have corrected the option based on constitutional provisions."
  },
  {
    "id": 33,
    "question": "Among the following, the states having bicameral legislatures (State Legislative Assembly and State Legislative Council) are (TSTET 02 Jan 2025)",
    "options": [
      "Madhya Pradesh, Telangana, Andhra Pradesh, Tamil Nadu",
      "Uttar Pradesh, Telangana, Andhra Pradesh, Bihar",
      "Tamil Nadu, Telangana, Andhra Pradesh, Chattisgarh",
      "Rajasthan, Telangana, Andhra Pradesh, Gujarat"
    ],
    "correctAnswer": 1,
    "explanation": "As of 2024, six Indian states have a bicameral legislature (two houses): Andhra Pradesh, Bihar, Karnataka, Maharashtra, Telangana, and Uttar Pradesh. The group in option 2 correctly lists four of these states."
  },
  {
    "id": 34,
    "question": "Judges of the Supreme Court can be removed by the President from their position only on the ground of (TSTET 02 Jan 2025)",
    "options": [
      "Proved misbehaviour or incapacity",
      "Showing discrimination in the workplace",
      "Improper interpretation of the Indian constitution",
      "Making unnecessary financial allegations against the government"
    ],
    "correctAnswer": 0,
    "explanation": "As per Article 124(4) of the Constitution, a judge of the Supreme Court can be removed only by an order of the President, passed after an address by Parliament, supported by a special majority of each House, on the ground of proved misbehaviour or incapacity."
  },
  {
    "id": 35,
    "question": "One among the following is NOT a Child Right as per UNO's Charter on Child Rights, 1989 (TSTET 02 Jan 2025)",
    "options": [
      "Right to use English as a medium of Instruction in all schools compulsorily",
      "Right to have good health and get medical care",
      "Right to get help when neglected and suffering",
      "Right to get protection from harmful medicines"
    ],
    "correctAnswer": 0,
    "explanation": "The UN Convention on the Rights of the Child advocates for a wide range of rights including health and protection. It does not mandate any specific language of instruction; rather, it encourages education in the child's own language where possible to promote cultural identity."
  },
  {
    "id": 36,
    "question": "Identify the true statement regarding 'the demand deposit' (TSTET 02 Jan 2025)",
    "options": [
      "A type of investment account with high returns",
      "A deposit that is only accessible through a bank's ATM",
      "A deposit that can be withdrawn on demand",
      "A long-term savings account with penalties for early withdrawal"
    ],
    "correctAnswer": 2,
    "explanation": "A demand deposit is a type of bank account, such as a checking or savings account, from which funds can be withdrawn at any time ('on demand') without any advance notice to the bank. They are highly liquid."
  },
  {
    "id": 37,
    "question": "From the following statements, identify the true statement regarding the role of Reserve Bank of India in the banking system (TSTET 02 Jan 2025)",
    "options": [
      "It supervises the banking system and issues guidelines",
      "It issues currency notes and coins directly to the public",
      "It provides loans to individual customers",
      "It manages the investments of private banks"
    ],
    "correctAnswer": 0,
    "explanation": "The Reserve Bank of India (RBI) is the country's central bank and regulatory body. A primary function is to supervise the functioning of commercial banks and financial institutions, setting guidelines to ensure stability and public confidence in the banking system."
  },
  {
    "id": 38,
    "question": "One of the following is NOT taken into consideration to measure Wholesale Price Index (WPI) (TSTET 02 Jan 2025)",
    "options": [
      "All capital goods",
      "All consumer goods",
      "a few selected consumer goods at the retail price",
      "All capital goods and consumer goods and changes in their wholesale rates"
    ],
    "correctAnswer": 2,
    "explanation": "The Wholesale Price Index (WPI) measures inflation at the level of goods traded between businesses, i.e., at the wholesale stage. It does not include the prices of services or the final retail prices paid by consumers, which are captured by the Consumer Price Index (CPI)."
  },
  {
    "id": 39,
    "question": "This was introduced by the Indian government in 2009 to track food inflation trends (TSTET 02 Jan 2025)",
    "options": [
      "Agricultural Price Index (API)",
      "Wholesale Price Index (WPI)",
      "Food Price Index (FPI)",
      "Consumer Price Index (CPI)"
    ],
    "correctAnswer": 2,
    "explanation": "To specifically monitor the sharp fluctuations in the prices of food items, the government introduced a separate Food Price Index (FPI). It helps in closely tracking food inflation and formulating timely policy interventions."
  },
  {
    "id": 40,
    "question": "According to the United Nations Development Programme, these people have migrated to countries such as USA, Canada, UK and other developed countries from India (TSTET 02 Jan 2025)",
    "options": [
      "Unskilled workers",
      "People with Technical skills and professional expertise",
      "Semi-skilled workers",
      "People in teaching profession"
    ],
    "correctAnswer": 1,
    "explanation": "Migration from India to developed Western countries is characterized by the movement of highly skilled professionals, including doctors, engineers, scientists, and IT specialists. This phenomenon is often termed 'brain drain'."
  },
  {
    "id": 41,
    "question": "The primary objective of the PM Jan Dhan Yojana is (TSTET 02 Jan 2025)",
    "options": [
      "To ensure every household has access to luxury goods",
      "To promote foreign investment in India",
      "To increase the number of ATMs in urban areas",
      "To achieve financial inclusion for poor households"
    ],
    "correctAnswer": 3,
    "explanation": "Pradhan Mantri Jan Dhan Yojana (PMJDY) is a national mission on financial inclusion. Its main aim is to ensure that all households, particularly those in the lower-income groups, have access to basic financial services like bank accounts, credit, insurance, and pensions."
  },
  {
    "id": 42,
    "question": "Among the following, identify the correct statement regarding 'Solar Insolation' in the month of March (TSTET 02 Jan 2025)",
    "options": [
      "The amount of Solar Insolation increases from the equator towards the poles",
      "The amount of Solar Insolation decreases from the equator towards the poles",
      "The amount of solar Insolation remains the same throughout the globe",
      "The amount of Solar Insolation is highest at the poles and the lowest at the tropic of Cancer"
    ],
    "correctAnswer": 1,
    "explanation": "Due to the Earth's curvature, the sun's rays are most direct at the equator and become more oblique towards the poles. This causes the amount of solar energy per unit area (insolation) to be highest near the equator and to decrease progressively towards the poles. This general pattern holds true in March."
  },
  {
    "id": 43,
    "question": "Which of the following is NOT the violation of Fundamental Right? (TSTET 02 Jan 2025)",
    "options": [
      "Employing the child below the age of 14 years in the factory",
      "Arresting the person and not informing the grounds for his arrest",
      "Restricting the person to reside and settle in any part of the territory of India",
      "Allowing the citizens to express their views in many ways such as through meetings, publications etc."
    ],
    "correctAnswer": 3,
    "explanation": "Allowing citizens to express their views is an exercise of the Fundamental Right to Freedom of Speech and Expression (Article 19). The other three options represent violations of fundamental rights: Right against Exploitation (Article 24), Right to Freedom and Personal Liberty (Article 22), and Right to Freedom of Movement (Article 19)."
  },
  {
    "id": 44,
    "question": "Among the following, identify the true statement regarding the service sector (TSTET 02 Jan 2025)",
    "options": [
      "It only includes jobs that produce tangible goods",
      "It does not include professionals like doctors and teachers",
      "It contributes to GDP through the income earned by its constituents",
      "It is the primary sector of the economy"
    ],
    "correctAnswer": 2,
    "explanation": "The service sector (or tertiary sector) consists of industries that provide services rather than tangible goods. The income generated by all these services—from banking and IT to healthcare and education—is a major contributor to a country's Gross Domestic Product (GDP)."
  },
  {
    "id": 45,
    "question": "This trend has been observed in developed countries over the past 50 years (TSTET 02 Jan 2025)",
    "options": [
      "A shift from industry to agriculture",
      "A shift from industry to the service sector",
      "No significant changes were observed",
      "A shift from the service sector to agriculture"
    ],
    "correctAnswer": 1,
    "explanation": "Over the last few decades, the economies of developed countries have undergone a structural shift. The relative importance of the manufacturing/industrial sector has declined, while the service sector (finance, healthcare, IT, etc.) has grown to become the largest contributor to GDP and employment."
  },
  {
    "id": 46,
    "question": "Among the following, identify the Important feature of GST in India (TSTET 02 Jan 2025)",
    "options": [
      "One tax for the whole country",
      "Rate of taxation is same to all the products",
      "Tax rates would differ across states",
      "All the goods are included in GST"
    ],
    "correctAnswer": 0,
    "explanation": "The core concept of the Goods and Services Tax (GST) in India is 'One Nation, One Tax'. It replaced a multitude of central and state taxes with a single, unified tax structure applicable across the country, creating a common national market."
  },
  {
    "id": 47,
    "question": "The primary focus of this UN Declaration is on 'Gender Equality and Empowerment of Women' is (TSTET 02 Jan 2025)",
    "options": [
      "The UN Declaration on Social Progress and Development, 1969",
      "Kyoto Protocol in Japan. 1997",
      "The Beijing Declaration and Programme of Action. 1995",
      "The IPCC 2015 Paris Summit"
    ],
    "correctAnswer": 2,
    "explanation": "The Beijing Declaration and Platform for Action, adopted at the 1995 Fourth World Conference on Women in Beijing, is a landmark document for advancing women's rights and gender equality worldwide. It outlines strategic objectives in 12 critical areas of concern."
  },
  {
    "id": 48,
    "question": "During winter in India, the cyclonic depressions coming from this sea called the Western Disturbances cause low to moderate rainfall over North India (TSTET 02 Jan 2025)",
    "options": [
      "Caspian Sea",
      "Arabian Sea",
      "Bay of Bengal",
      "Mediterranean Sea"
    ],
    "correctAnswer": 3,
    "explanation": "Western Disturbances are extratropical storms that originate over the Mediterranean Sea. They are carried eastward by subtropical westerly jet streams and bring crucial non-monsoonal precipitation (rain and snow) to Northwest India during the winter months."
  },
  {
    "id": 49,
    "question": "Choose the correct pairs among the following related to contributions of social scientists. A) Max weber Politics as a vocation B) Karl Marx - Socialist manifesto C) Amartya Sen - Economic and Social Justice (TSTET 02 Jan 2025)",
    "options": [
      "A, B & C",
      "A & B only",
      "A & C only",
      "B & C only"
    ],
    "correctAnswer": 2,
    "explanation": "A is correct ('Politics as a Vocation' is a famous essay by Weber). C is correct (Amartya Sen is renowned for his work on social justice and welfare economics). B is incorrect; Karl Marx co-authored the 'Communist Manifesto', not a 'Socialist Manifesto'."
  },
  {
    "id": 50,
    "question": "The computation involving the amount of production of essential food commodities, their purchase and sales etc., reveals the co-relation between these two subjects (TSTET 02 Jan 2025)",
    "options": [
      "Civics and Physical Science",
      "Economics and mathematics",
      "History and life science",
      "Geography and Arts"
    ],
    "correctAnswer": 1,
    "explanation": "Economics deals with the principles of production, consumption, purchase, and sale. Mathematics provides the tools for computation, data analysis, modeling, and quantification of these economic activities, showing a strong interrelationship."
  },
  {
    "id": 51,
    "question": "Identify the correct statement relating to Objectives and Aims among the following (TSTET 02 Jan 2025)",
    "options": [
      "Both are achievable in long term",
      "Both are achievable in short term",
      "Objectives are achievable in long term and aims are achievable in short term",
      "Objectives are achievable in short term and aims are achievable in long term"
    ],
    "correctAnswer": 3,
    "explanation": "In educational terminology, an 'aim' is a broad, long-term statement of intent. An 'objective' is a specific, measurable, short-term goal that contributes to achieving the broader aim. Therefore, objectives are short-term, and aims are long-term."
  },
  {
    "id": 52,
    "question": "The active verb Tabulate' is an example of remembering category in cognitive process dimension comes at this level of knowledge dimension (TSTET 02 Jan 2025)",
    "options": [
      "Procedural knowledge",
      "Factual knowledge",
      "Conceptual knowledge",
      "Metacognitive knowledge"
    ],
    "correctAnswer": 1,
    "explanation": "According to the revised Bloom's Taxonomy, 'tabulate' fits within the 'Remembering' cognitive process. It involves organizing and presenting specific pieces of information or data (facts) in a table format, which aligns with the 'Factual Knowledge' dimension."
  },
  {
    "id": 53,
    "question": "'Collect the pictures of leaders of Telangana Armed Struggle' is an activity aimed at achievement of this academic standard. (TSTET 02 Jan 2025)",
    "options": [
      "Conceptual understanding",
      "Information gathering Skills",
      "Mapping Skills",
      "Appreciation and sensitivity"
    ],
    "correctAnswer": 1,
    "explanation": "This activity requires students to search for, identify, select, and collect specific data (pictures) from various sources. This directly targets the development and practice of information gathering and organizational skills."
  },
  {
    "id": 54,
    "question": "National Curriculum Framework (NCF) 2005 focussed on the following elements regarding construction of social science curriculum. A) Content Load B) Global Content C) Normative duties D) Inter relationship among disciplines (TSTET 02 Jan 2025)",
    "options": [
      "A, B, C & D",
      "A, B & C only",
      "A, C & D only",
      "B, C & D only"
    ],
    "correctAnswer": 0,
    "explanation": "NCF 2005 recommended a holistic approach for social sciences, emphasizing: reducing content load (A), incorporating global perspectives (B), fostering critical thinking on normative issues like justice and equality (C), and encouraging interdisciplinary connections (D)."
  },
  {
    "id": 55,
    "question": "A teacher appointed shall maintain regularity and punctuality in attending school' it is mentioned in this section of Right to Education Act (RTE) - 2009 (TSTET 02 Jan 2025)",
    "options": [
      "Section - 22(1)",
      "Section - 23(1)",
      "Section - 24(1) (a)",
      "Section 29(2) (a)"
    ],
    "correctAnswer": 2,
    "explanation": "Section 24 of the RTE Act, 2009, details the duties of teachers. Specifically, clause (1)(a) of this section mandates that teachers must 'maintain regularity and punctuality in attending school'."
  },
  {
    "id": 56,
    "question": "Match the following related to theme specific maps. Part-A: A) Bethymetric maps, B) Ethnographical maps, C) Vegetation maps. Part-B: i) reveals distribution of different human races in the world, ii) reveal distribution of different crops, iii) reveal depth of a sea. (TSTET 02 Jan 2025)",
    "options": [
      "A-i; B-ii; C-iii",
      "A-ii; B-i; C-iii",
      "A-iii; B-i; C-ii",
      "A-iii; B-ii; C-i"
    ],
    "correctAnswer": 2,
    "explanation": "The correct pairings are: A) Bathymetric maps show the depth of a sea (iii). B) Ethnographical maps show the distribution of human races/ethnic groups (i). C) Vegetation maps show the distribution of plant life, including crops (ii)."
  },
  {
    "id": 57,
    "question": "The step that follows immediately the step 'Identifying the problem' - in problem solving method (TSTET 02 Jan 2025)",
    "options": [
      "Application of tested solution",
      "Planning the process to solve the problem",
      "Executing the planned process",
      "Evaluting the solution"
    ],
    "correctAnswer": 1,
    "explanation": "In the problem-solving method, once a problem has been clearly identified and defined, the immediate next step is to brainstorm and formulate a strategy or plan of action to address and ultimately solve the problem."
  },
  {
    "id": 58,
    "question": "In this phase of concept mapping students explain the concept they acquired after discussion and reveal new things learned in the shape of summary (TSTET 02 Jan 2025)",
    "options": [
      "Phase-IV: Closure",
      "Phase-II: Propositional phase",
      "Phase-I: Presentation of abstraction",
      "Phase-III: Application"
    ],
    "correctAnswer": 0,
    "explanation": "The 'Closure' phase of a lesson is designed to consolidate learning. It is when students are prompted to summarize key ideas, explain concepts in their own words, and reflect on what they have learned, ensuring the information is properly integrated."
  },
  {
    "id": 59,
    "question": "On invitation of a social science teacher, local farmers visited the school. explained and cleared the doubts of students about soil types, soil fertility, crops grown in a village. This activity is (TSTET 02 Jan 2025)",
    "options": [
      "Project learning",
      "Cooperative learning",
      "Bringing community to school",
      "Taking school to community"
    ],
    "correctAnswer": 2,
    "explanation": "This is an example of utilizing community resources in education. By inviting local experts (farmers) into the classroom to share their practical knowledge, the teacher is effectively 'bringing the community to the school' to provide an authentic learning experience."
  },
  {
    "id": 60,
    "question": "Choose the correct statements relating to Continuous and Comprehensive Evaluation (CCE). A) National Policy on Education 1986 recommended for CCE B) CCE was introduced in upper primary and secondary stages of schooling only C) CCE was introduced for qualitative improvement in the education system (TSTET 02 Jan 2025)",
    "options": [
      "A, B & C",
      "A & C only",
      "A & B only",
      "B & C only"
    ],
    "correctAnswer": 1,
    "explanation": "A is correct, as NPE 1986 first proposed CCE. C is correct, as its goal was qualitative improvement. B is incorrect because CCE was implemented under the RTE Act for the entire elementary stage (Classes I-VIII), not just upper primary and secondary."
  },
  {
    "id": 61,
    "question": "Among the following, the true statement regarding Contour Lines is (TSTET 02 Jan 2025)",
    "options": [
      "All the places on a Contour line will have the same height from the sea level",
      "Contour lines are not usually drawn at fixed intervals of height",
      "Wherever the Contour lines are drawn far apart, they represent steep slope",
      "On map, the hills and mountains are represented in V shape"
    ],
    "correctAnswer": 0,
    "explanation": "Contour lines are imaginary lines on a map that connect points of equal elevation above a reference point, which is typically mean sea level. This is their fundamental definition. When contour lines are far apart, they represent a gentle slope, not a steep one."
  },
  {
    "id": 62,
    "question": "The 'Angle of Incidence' refers to (TSTET 02 Jan 2025)",
    "options": [
      "The angle at which the Sun's rays reflect back to the atmosphere from the earth's surface",
      "The angle at which the amount of Solar energy is reflected back by the earth's atmosphere",
      "The angle at which the Sun's rays fall on the earth's surface",
      "The angle at which the amount of Solar energy is absorbed and reflected away by clouds"
    ],
    "correctAnswer": 2,
    "explanation": "The angle of incidence is the angle at which the sun's rays strike the Earth's surface. A higher angle (closer to 90°) means more direct and concentrated sunlight, leading to higher temperatures, while a lower angle means the sunlight is spread over a larger area, resulting in cooler temperatures."
  },
  {
    "id": 63,
    "question": "Generally, the \"Moderate Climate\" is observed at (TSTET 02 Jan 2025)",
    "options": [
      "Places located very near to the sea coast",
      "Places located very near to the equator and the interior parts of the continent",
      "Places located at higher altitudes and the interior parts of the continent",
      "Places located in the interior parts of the continent only"
    ],
    "correctAnswer": 0,
    "explanation": "Areas near large bodies of water, like sea coasts, experience a moderate climate. This is because water heats up and cools down more slowly than land. This moderating effect, known as the maritime effect, prevents extreme temperature fluctuations, leading to cooler summers and warmer winters compared to inland areas."
  },
  {
    "id": 64,
    "question": "This layer of the interior of the earth is the main source of Magma (TSTET 02 Jan 2025)",
    "options": [
      "Outer core",
      "Continental crust",
      "Oceanic Crust",
      "Mantle"
    ],
    "correctAnswer": 3,
    "explanation": "The mantle, specifically the upper part called the asthenosphere, is the primary source of magma. This layer is semi-molten, and due to immense heat and pressure, rock melts to form magma, which can then rise to the surface during volcanic eruptions."
  },
  {
    "id": 65,
    "question": "A farmer having 'a own shed in the village' comes under this factor of production (TSTET 02 Jan 2025)",
    "options": [
      "Land",
      "Labour",
      "Physical Capital",
      "Working Capital"
    ],
    "correctAnswer": 2,
    "explanation": "A shed is a physical asset used in the production process over a long period. In economics, such durable goods (tools, machinery, buildings) are classified as physical capital or fixed capital, which is a key factor of production."
  },
  {
    "id": 66,
    "question": "This law states that the Coriolis Force is responsible for deflecting winds towards right in the northern hemisphere and towards left in the southern hemisphere (TSTET 02 Jan 2025)",
    "options": [
      "Farrel's law",
      "Pascals Law",
      "Kepler's Law",
      "Newton's third Law"
    ],
    "correctAnswer": 0,
    "explanation": "Ferrel's Law describes the effect of the Coriolis force on moving objects, particularly winds and ocean currents. It states that due to the Earth's rotation, these movements are deflected to the right in the Northern Hemisphere and to the left in the Southern Hemisphere."
  },
  {
    "id": 67,
    "question": "'Trade Winds' are located in between these pressure belts (TSTET 02 Jan 2025)",
    "options": [
      "Sub-tropical High Pressure Belt and Sub-Polar Low Pressure Belt",
      "Equatorial Low Pressure Belt and Sub-tropical High Pressure Belt",
      "Polar High Pressure Belt and Sub-Polar Low Pressure Belt",
      "Sub-tropical High Pressure Belt and Polar High Pressure Belt"
    ],
    "correctAnswer": 1,
    "explanation": "Trade winds are prevailing easterly winds that flow from the subtropical high-pressure belts (around 30° N and S latitudes) towards the equatorial low-pressure belt (the Doldrums). They are a key component of the global atmospheric circulation system."
  },
  {
    "id": 68,
    "question": "The word 'Orogenic' is derived from the Greek word \"oros\", which means (TSTET 02 Jan 2025)",
    "options": [
      "Plateau",
      "Mountain",
      "Plain",
      "Floodplain"
    ],
    "correctAnswer": 1,
    "explanation": "The term 'orogenic' relates to the process of mountain formation (orogeny). It is derived from the Greek words 'oros' meaning mountain and 'genesis' meaning creation or origin."
  },
  {
    "id": 69,
    "question": "Hygrometer is an instrument used to measure the (TSTET 02 Jan 2025)",
    "options": [
      "The water vapour content in the air",
      "The specific gravity or density of liquids",
      "The direction of the wind",
      "The amount of rainfall in a specific area over a certain period of time"
    ],
    "correctAnswer": 0,
    "explanation": "A hygrometer is a meteorological instrument specifically designed to measure the amount of water vapor in the air, which is known as humidity."
  },
  {
    "id": 70,
    "question": "The West and South West margins of the continents have this type of forests (TSTET 02 Jan 2025)",
    "options": [
      "The Tropical Deciduous forests",
      "The Coniferous Forests",
      "Temperate Deciduous Forests",
      "The Mediterranean Vegetation"
    ],
    "correctAnswer": 3,
    "explanation": "Mediterranean vegetation is characteristic of regions with warm, dry summers and mild, wet winters. This climate type is typically found on the western and southwestern margins of continents between 30° and 45° latitude, such as the Mediterranean Basin and California."
  },
  {
    "id": 71,
    "question": "This plateau of India rides over the Indian Plate (TSTET 02 Jan 2025)",
    "options": [
      "Malwa Plateau",
      "Chota Nagpur Plateau",
      "Marwar Plateau",
      "Deccan Plateau"
    ],
    "correctAnswer": 3,
    "explanation": "The Deccan Plateau is a large plateau in western and southern India. It is a part of the Indian Plate, a major tectonic plate that was once part of the supercontinent Gondwana and has been moving northward for millions of years."
  },
  {
    "id": 72,
    "question": "From among the following, identify the densest planet (TSTET 02 Jan 2025)",
    "options": [
      "Jupiter",
      "Mars",
      "Mercury",
      "Earth"
    ],
    "correctAnswer": 3,
    "explanation": "Earth is the densest planet in our solar system, with an average density of about 5.51 grams per cubic centimeter. This high density is due to its large metallic core and compressed rocky mantle."
  },
  {
    "id": 73,
    "question": "These soils are developed on crystalline igneous rocks in areas of low rainfall in the eastern and southern parts of the Deccan Plateau (TSTET 02 Jan 2025)",
    "options": [
      "Black Soils",
      "Red Soils",
      "Laterite Soils",
      "Alluvial Soils"
    ],
    "correctAnswer": 1,
    "explanation": "Red soils are formed from the weathering of ancient crystalline and metamorphic rocks like granites. They develop their characteristic red color due to the high concentration of iron oxides and are typically found in regions with low rainfall, such as parts of the Deccan Plateau."
  },
  {
    "id": 74,
    "question": "Which of the following statements best describes the Sex Ratio? (TSTET 02 Jan 2025)",
    "options": [
      "The ratio between the number of males and females in different age groups",
      "The ratio between the number of males and females in the age group of 15 to 59 years",
      "The number of females per 1000 males in the population",
      "The number of males and females living in a unit area"
    ],
    "correctAnswer": 2,
    "explanation": "Sex ratio is a demographic indicator used to describe the balance between males and females in a population. In India, it is specifically defined as the number of females per 1000 males."
  },
  {
    "id": 75,
    "question": "The cultivation of this crop requires warm and moist frost free climate all through the year (TSTET 02 Jan 2025)",
    "options": [
      "Sugar Cane",
      "Jute",
      "Paddy",
      "Tea"
    ],
    "correctAnswer": 0,
    "explanation": "Sugarcane is a tropical and subtropical crop that requires a hot, humid, and frost-free climate for optimal growth throughout its long growing season. Frost can severely damage the cane and reduce its sucrose content."
  },
  {
    "id": 76,
    "question": "The main purpose of Kyoto Protocol, 1997 was (TSTET 02 Jan 2025)",
    "options": [
      "To protect the earth from global warming",
      "To ensure that all the nations in the world are not suffering from hunger",
      "To maintain peace and harmony in the world",
      "To bring cultural unity among all the nations of the world"
    ],
    "correctAnswer": 0,
    "explanation": "The Kyoto Protocol was an international treaty that committed state parties to reduce greenhouse gas emissions, based on the scientific consensus that global warming is occurring and that human-made CO2 emissions are driving it."
  },
  {
    "id": 77,
    "question": "The countries which were NOT invited to the Treaty of Versailles, 1919 at the end of the First World War by the victorious countries (TSTET 02 Jan 2025)",
    "options": [
      "Germany, Austria and Turkey",
      "Germany. France and Russia",
      "United States of America, France. Italy",
      "Italy. Germany and Turkey"
    ],
    "correctAnswer": 0,
    "explanation": "The Treaty of Versailles was a punitive treaty imposed on the defeated Central Powers. Germany and its allies, including Austria-Hungary and the Ottoman Empire (Turkey), were not invited to the negotiations and were forced to accept the terms dictated by the victorious Allied Powers."
  },
  {
    "id": 78,
    "question": "In February, 1917, due to this reason a provisional Government was established in Russia (TSTET 02 Jan 2025)",
    "options": [
      "Escaping of Czar Nicholas II leaving his throne",
      "Murder of Czar Nicholas II in the first world war",
      "Economic crisis",
      "Invasion of Russia by Germany"
    ],
    "correctAnswer": 0,
    "explanation": "The February Revolution of 1917 was triggered by widespread discontent from economic crises and war casualties. This led to mass protests and the abdication (giving up the throne) of Czar Nicholas II. In the subsequent power vacuum, a Provisional Government was formed."
  },
  {
    "id": 79,
    "question": "The South western portions of Nigeria are dominated by these tribes (TSTET 02 Jan 2025)",
    "options": [
      "Igbo tribes",
      "Hausa Fulani tribes",
      "Yoruba tribes",
      "Massey tribes"
    ],
    "correctAnswer": 2,
    "explanation": "Nigeria has three major ethnic groups. The Yoruba people are predominantly found in the southwestern part of the country. The Hausa-Fulani are concentrated in the north, and the Igbo are in the southeast."
  },
  {
    "id": 80,
    "question": "Which of the following best describes 'Pan Africanism'? (TSTET 02 Jan 2025)",
    "options": [
      "It is an idea which promotes the unity of all African people irrespective of country or tribe",
      "It is a concept which helps the people of Africa in developing agriculturally and industrially",
      "It developed the idea of a common Nigerian Nation and began to fight the British rule",
      "It is nothing but the policy of Divide and Rule"
    ],
    "correctAnswer": 0,
    "explanation": "Pan-Africanism is a worldwide political movement that aims to encourage and strengthen bonds of solidarity between all people of African descent. It advocates for the political, social, and economic unity of African nations."
  },
  {
    "id": 81,
    "question": "Komarrum Bhim started a guerilla struggle centered on this place (TSTET 02 Jan 2025)",
    "options": [
      "Jodeghat",
      "Sankepally",
      "Dammanapalli",
      "Koyyur"
    ],
    "correctAnswer": 0,
    "explanation": "Komaram Bheem, a tribal leader from the Gond community, led a rebellion against the Nizam of Hyderabad. His guerilla campaign for tribal rights was centered in the forests of Jodeghat in the Adilabad district of present-day Telangana."
  },
  {
    "id": 82,
    "question": "The Greek ambassador who was known for his detailed accounts of Indian society and culture during the Mauryan Empire (TSTET 02 Jan 2025)",
    "options": [
      "Herodotus",
      "Megasthenes",
      "Ptolemy",
      "Strabo"
    ],
    "correctAnswer": 1,
    "explanation": "Megasthenes was a Greek ambassador sent to the court of the Mauryan emperor Chandragupta. His work, \"Indica,\" is a valuable historical account of Mauryan India, providing detailed observations of its society, administration, and geography."
  },
  {
    "id": 83,
    "question": "The Nasik inscriptions are primarily associated with this historical figure (TSTET 02 Jan 2025)",
    "options": [
      "Ashoka",
      "Gautam Buddha",
      "Gautami Balashri",
      "Harshavardhana"
    ],
    "correctAnswer": 2,
    "explanation": "The Nasik cave inscriptions are associated with the Satavahana dynasty. A key inscription was issued by Gautami Balashri, the mother of the great Satavahana king Gautamiputra Satakarni, and it details her son's achievements and conquests."
  },
  {
    "id": 84,
    "question": "\"Manuscript\" is (TSTET 02 Jan 2025)",
    "options": [
      "A printed book",
      "A handwritten document",
      "A digital book",
      "A photographic image"
    ],
    "correctAnswer": 1,
    "explanation": "The term \"manuscript\" is derived from the Latin words 'manu' (by hand) and 'scriptus' (written). It refers to any document, book, or text written by hand before the invention of printing."
  },
  {
    "id": 85,
    "question": "In the context of historical studies, an \"inscription\" is (TSTET 02 Jan 2025)",
    "options": [
      "A type of written document created by historians",
      "A carved or written message on a Stone or a metal",
      "An oral tradition passed down through generations",
      "A fictional narrative created for entertainment"
    ],
    "correctAnswer": 1,
    "explanation": "Inscriptions are writings engraved on hard surfaces like stone, metal plates, or pillars. They are a crucial primary source for historians as they provide direct and durable evidence about past events, rulers, and societies."
  },
  {
    "id": 86,
    "question": "This system had contributed to the rise of \"Jotedars\" in Bengal (TSTET 02 Jan 2025)",
    "options": [
      "Zamindari system",
      "Ryotwari system",
      "Share cropping system",
      "Feudal system"
    ],
    "correctAnswer": 0,
    "explanation": "Under the Zamindari system (Permanent Settlement) in Bengal, the Zamindars often sublet their revenue collection rights. This created a class of wealthy peasants or intermediary landlords known as Jotedars, who controlled vast tracts of land and wielded considerable power in the villages."
  },
  {
    "id": 87,
    "question": "The three powers involved in the Battle of Buxar, 1764 were (TSTET 02 Jan 2025)",
    "options": [
      "British East India Company. Marathas, Mysore kings",
      "British East India Company, Nawab of Bengal, Mughal Emperor",
      "British East India Company, French East India Company, Dutch East India Company",
      "British East India Company. Sikhs. Portuguese"
    ],
    "correctAnswer": 1,
    "explanation": "The Battle of Buxar was fought between the forces of the British East India Company and the combined armies of Mir Qasim (the Nawab of Bengal), Shuja-ud-Daula (the Nawab of Awadh), and Shah Alam II (the Mughal Emperor)."
  },
  {
    "id": 88,
    "question": "The Chief Constitutional Advisor to the Indian Constitution Drafting Committee was (TSTET 02 Jan 2025)",
    "options": [
      "Granville Austin",
      "Benegal Narsing Rao",
      "TT Krishnamachary",
      "DP Khaitan"
    ],
    "correctAnswer": 1,
    "explanation": "Sir Benegal Narsing Rau (B.N. Rau) was a distinguished jurist who served as the Constitutional Advisor to the Constituent Assembly. He prepared the initial draft of the constitution on which the Drafting Committee, chaired by Dr. B.R. Ambedkar, worked."
  },
  {
    "id": 89,
    "question": "The President of India nominates 12 members to the Rajya Sabha who are eminent with knowledge of practical experience in these areas (TSTET 02 Jan 2025)",
    "options": [
      "Literature, Science, art and Social Service",
      "Economics, Psychology and Social Service",
      "Law, literature and Economics",
      "Science, Sports and Economics"
    ],
    "correctAnswer": 0,
    "explanation": "As per Article 80 of the Indian Constitution, the President can nominate 12 members to the Rajya Sabha (Council of States) from people who have special knowledge or practical experience in fields such as literature, science, art, and social service."
  },
  {
    "id": 90,
    "question": "Study the given statements and choose the correct answer: A) President's prior permission is required to present the Money Bills in the Indian Parliament. B) If there is no unanimity between two houses in passing the money bill, joint sitting of both the houses of the Parliament will be summoned by the President of India (TSTET 02 Jan 2025)",
    "options": [
      "Both 'A' and 'B' are correct",
      "'A' is correct and 'B' is incorrect",
      "Both 'A' and 'B' are incorrect",
      "'B' is correct and 'A' is incorrect"
    ],
    "correctAnswer": 1,
    "explanation": "Statement A is correct; a Money Bill can only be introduced in the Lok Sabha with the President's prior recommendation. Statement B is incorrect; there is no provision for a joint sitting for a Money Bill. The Rajya Sabha has limited powers and cannot reject or amend a Money Bill."
  },
  {
    "id": 91,
    "question": "Among the following, the primary purpose of Directive Principles of State Policy in India is (TSTET 02 Jan 2025)",
    "options": [
      "To provide fundamental rights to all individuals",
      "To guide the State in policy-making",
      "To define the structure of the government",
      "To establish a parliamentary system"
    ],
    "correctAnswer": 1,
    "explanation": "The Directive Principles of State Policy (DPSP) are guidelines for the central and state governments to keep in mind while framing laws and policies. They are not legally enforceable but aim to guide the state towards creating a social and economic democracy."
  },
  {
    "id": 92,
    "question": "In India, the President can extend the tenure of the Lok Sabha under special circumstances like national emergency for a period not exceeding one year at a time on the advice of the (TSTET 02 Jan 2025)",
    "options": [
      "Prime Minister",
      "Speaker of Lok Sabha",
      "Union Council of Ministers",
      "Chief Justice of India"
    ],
    "correctAnswer": 2,
    "explanation": "During a national emergency, the term of the Lok Sabha can be extended by a law of Parliament for one year at a time. This legislative action is undertaken by the government, which is led by the Prime Minister and the Union Council of Ministers, who advise the President."
  },
  {
    "id": 93,
    "question": "The National Human Rights Commission can conduct 'suo motu' investigations. What does 'suo motu' mean? (TSTET 02 Jan 2025)",
    "options": [
      "To investigate based on public complaints",
      "To investigate on its own initiative",
      "To investigate only court referrals",
      "To investigate after government approval"
    ],
    "correctAnswer": 1,
    "explanation": "'Suo motu' is a Latin legal term meaning \"on its own motion.\" It signifies that the National Human Rights Commission (NHRC) has the power to start an investigation into human rights violations on its own, without waiting for a formal complaint to be filed."
  },
  {
    "id": 94,
    "question": "The primary focus of the United Nations Beijing Declaration and Programme of Action, 1995 was (TSTET 02 Jan 2025)",
    "options": [
      "Economic development of Asian Countries",
      "Gender equality and empowerment of women",
      "Environmental protection",
      "Political Stability"
    ],
    "correctAnswer": 1,
    "explanation": "The Beijing Declaration and Platform for Action, adopted at the Fourth World Conference on Women in 1995, is a landmark global agenda for advancing the rights and empowerment of women and girls, focusing on achieving gender equality."
  },
  {
    "id": 95,
    "question": "One of the following is a child Right as per International Children's Charter proposed by UNO in 1989 (TSTET 02 Jan 2025)",
    "options": [
      "Right to leave the country as and when required even without the permission of the Government",
      "Right to live with parents as far as possible",
      "Right to contest in the school election",
      "Right to enter into contracts"
    ],
    "correctAnswer": 1,
    "explanation": "The UN Convention on the Rights of the Child (1989) establishes the rights of children. Article 9 of the Convention explicitly states that children have the right to live with their parents unless it is deemed incompatible with the child's best interests."
  },
  {
    "id": 96,
    "question": "Choose the correct characteristic feature of demand deposits (TSTET 02 Jan 2025)",
    "options": [
      "Demand deposits can only be accessed through physical bank branches",
      "Demand deposits need not require a minimum balance to be maintained",
      "Demand deposits are not insured by the government",
      "Demand deposits can be used for payments by cheque or electronic means"
    ],
    "correctAnswer": 3,
    "explanation": "Demand deposits are funds in bank accounts that can be withdrawn at any time without advance notice. A key feature is their liquidity, allowing them to be easily used for payments via cheques, debit cards, or electronic transfers."
  },
  {
    "id": 97,
    "question": "The banks keep only a small proportion of their deposits as cash to (TSTET 02 Jan 2025)",
    "options": [
      "avoid taxes",
      "invest in stocks",
      "pay depositors who withdraw money",
      "cover operational costs"
    ],
    "correctAnswer": 2,
    "explanation": "Banks operate on a fractional reserve system. They keep a small portion of total deposits as cash reserves to meet the daily withdrawal demands of depositors, and lend out the remaining amount to earn interest."
  },
  {
    "id": 98,
    "question": "What role do banks play between depositors and borrowers? (TSTET 02 Jan 2025)",
    "options": [
      "Banks act as financial advisors",
      "Banks manage government funds",
      "Banks mediate between those who have surplus funds and those in need of funds",
      "Banks serve only depositors"
    ],
    "correctAnswer": 2,
    "explanation": "Banks act as financial intermediaries. They collect surplus funds from savers (depositors) and channel these funds to individuals and businesses (borrowers) who need them for investment or consumption. This mediation is crucial for the economy."
  },
  {
    "id": 99,
    "question": "A 'Price Index' 100 represents (TSTET 02 Jan 2025)",
    "options": [
      "Prices have increased by 100%",
      "Prices are irrelevant to the base year",
      "Prices are at the average level of the base year",
      "Prices have decreased by 100%"
    ],
    "correctAnswer": 2,
    "explanation": "A price index measures price changes over time. The base year is the reference point, and its index value is always set to 100. Therefore, a price index of 100 for a subsequent year means that prices, on average, have not changed from the base year."
  },
  {
    "id": 100,
    "question": "Identify the true statement regarding \"the price indices\" (TSTET 02 Jan 2025)",
    "options": [
      "Price indices can only compare prices in one location",
      "Price indices show percentage of change in prices over time",
      "Price indices are only useful for consumer goods",
      "Price indices do not reflect changes in the economy"
    ],
    "correctAnswer": 1,
    "explanation": "The primary function of a price index is to track the change in the overall price level of a fixed basket of goods and services over time relative to a base period. It expresses this change as a percentage, indicating inflation or deflation."
  },
  {
    "id": 101,
    "question": "In India, the companies that run factories or businesses have to pay this type of tax on the profits of that company (TSTET 02 Jan 2025)",
    "options": [
      "Goods and Services Tax",
      "Corporate tax",
      "Capital Gains Tax",
      "Customs Duty"
    ],
    "correctAnswer": 1,
    "explanation": "Corporate tax is a direct tax levied on the net income or profit that corporate enterprises make from their businesses. It is a major source of revenue for the government."
  },
  {
    "id": 102,
    "question": "How did the early bankers in India like the Jagatseths and Shahs achieve banking system with their receipts? (TSTET 02 Jan 2025)",
    "options": [
      "They were the first to mint coins",
      "Their receipts were accepted throughout the country",
      "They regulated the value of gold",
      "They established the first national bank"
    ],
    "correctAnswer": 1,
    "explanation": "Indigenous bankers like the Jagatseths operated by issuing receipts (Hundis) for deposits. These Hundis were widely trusted and accepted as a medium of exchange for trade across the country, functioning much like modern cheques or bank drafts."
  },
  {
    "id": 103,
    "question": "The key feature of the Basic Savings Bank Deposit Account (BSBDA) is (TSTET 02 Jan 2025)",
    "options": [
      "It requires a minimum balance of at least Rs. 1,000",
      "It can have zero or very low minimum balance",
      "It allows unlimited withdrawals each month",
      "It is available only to individuals over 18 years"
    ],
    "correctAnswer": 1,
    "explanation": "The Basic Savings Bank Deposit Account (BSBDA) was introduced by the RBI to promote financial inclusion. Its main feature is that it does not require any minimum balance, making banking accessible to all sections of society, although it has some transactional limitations."
  },
  {
    "id": 104,
    "question": "A Small Account under simplified KYC norms is (TSTET 02 Jan 2025)",
    "options": [
      "An account exclusively meant for business transactions",
      "A Basic Savings Bank Deposit Account treated as a Small Account",
      "An account that requires extensive documentation",
      "An account with no withdrawal limits"
    ],
    "correctAnswer": 1,
    "explanation": "A 'Small Account' is a type of Basic Savings Bank Deposit Account (BSBDA) that can be opened with simplified Know Your Customer (KYC) norms, for individuals who may not have all the official documents required for a regular account, thereby promoting financial inclusion."
  },
  {
    "id": 105,
    "question": "The purpose of the National Food Security Act enacted in 2013 was (TSTET 02 Jan 2025)",
    "options": [
      "To promote organic farming",
      "To increase agricultural exports",
      "To regulate food prices",
      "To legalize people's Right to Food"
    ],
    "correctAnswer": 3,
    "explanation": "The National Food Security Act, 2013, aims to provide subsidized food grains to approximately two-thirds of India's population. It converts existing food security programs into legal entitlements, making the right to food a justiciable right."
  },
  {
    "id": 106,
    "question": "One of the following factors of production comes under 'Working Capital\" (TSTET 02 Jan 2025)",
    "options": [
      "Tools and machines",
      "Raw materials and money for production",
      "Land and natural resources",
      "Long-term investments"
    ],
    "correctAnswer": 1,
    "explanation": "Working capital refers to the assets that are used up or converted into cash in the production process. This includes raw materials and the money needed for day-to-day operational expenses. Tools and machines are considered fixed capital."
  },
  {
    "id": 107,
    "question": "Before the mid-20th century, production was primarily organized (TSTET 02 Jan 2025)",
    "options": [
      "Exclusively by multinational corporations",
      "Within individual countries",
      "Globally, with a focus on international trade",
      "Through informal local markets"
    ],
    "correctAnswer": 1,
    "explanation": "Prior to the rise of globalization and multinational corporations (MNCs) in the latter half of the 20th century, production activities were largely contained within national borders. While international trade existed, complex global supply chains were not the norm."
  },
  {
    "id": 108,
    "question": "GDP primarily measures (TSTET 02 Jan 2025)",
    "options": [
      "The income of all citizens in a country only",
      "The total number of goods produced in a country only",
      "The market value of all final goods and services produced",
      "The available number of service sector jobs only"
    ],
    "correctAnswer": 2,
    "explanation": "Gross Domestic Product (GDP) measures the monetary market value of all final goods and services produced within a country's borders during a specific time period. It serves as a comprehensive scorecard of a country's economic health."
  },
  {
    "id": 109,
    "question": "Match the following: A) Chanukya B) Amartya Sen C) Mother Theressa with their respective works/establishments. (TSTET 02 Jan 2025)",
    "options": [
      "A-i (Nirmal Hruday); B-ii (Communist League); C-iii (Arthashastra)",
      "A-iii (Arthashastra); B-ii (Communist League); C-iv (The ideal of Justice)",
      "A-iii (Arthashastra); B-iv (The ideal of Justice); C-ii (Communist League)",
      "A-iv (The ideal of Justice); B-iii (Arthashastra); C-i (Nirmal Hruday)"
    ],
    "correctAnswer": 2,
    "explanation": "The correct pairings are: Chanakya wrote the 'Arthashastra'. Amartya Sen wrote 'The Idea of Justice'. Mother Teresa founded Nirmal Hriday. The option provided in the exam has a typo, linking Mother Teresa to the wrong item, but correctly links Chanakya and Amartya Sen."
  },
  {
    "id": 110,
    "question": "To study the topic 'Climate', it is essential to know about the temperature, pressure of atmosphere; level of humidity and rainfall. For this, knowledge of this subject is required along with social science (TSTET 02 Jan 2025)",
    "options": [
      "Life Science",
      "Physical Science",
      "Physical Education",
      "Work Education"
    ],
    "correctAnswer": 1,
    "explanation": "The study of climate involves understanding physical phenomena such as temperature, atmospheric pressure, humidity, and precipitation. These are core concepts in physical science, particularly physics and physical geography, making its knowledge essential."
  },
  {
    "id": 111,
    "question": "Choose the correct statements among the following related to aims and objectives: A) Aims are general and objectives are specific. B) Aims are steps to achieve the objectives. C) The scope of aims is broad and the scope of objectives is limited (TSTET 02 Jan 2025)",
    "options": [
      "A & C only",
      "A & B only",
      "B & C only",
      "A, B & C"
    ],
    "correctAnswer": 0,
    "explanation": "In educational planning, aims are broad, long-term statements of purpose, while objectives are specific, measurable, short-term targets. Therefore, aims are general with a broad scope (A, C are correct), and objectives are the steps to achieve aims, not the reverse (making B incorrect)."
  },
  {
    "id": 112,
    "question": "The active verb 'Reflect' is an example for this level of knowledge dimension, which is in evaluating category of cognitive process dimension (TSTET 02 Jan 2025)",
    "options": [
      "Conceptual knowledge",
      "Procedural knowledge",
      "Factual knowledge",
      "Metacognitive knowledge"
    ],
    "correctAnswer": 3,
    "explanation": "In Bloom's revised taxonomy, 'Reflect' falls under the cognitive process of 'Evaluating'. This action requires metacognitive knowledge, which is the knowledge of one's own thinking processes. Reflecting on one's own learning and performance is a key aspect of metacognition."
  },
  {
    "id": 113,
    "question": "\"All are equal before law\" explain with the illustration: This is one of the activity to achieve this academic standard (TSTET 02 Jan 2025)",
    "options": [
      "Conceptual understanding",
      "Understanding and interpreting by reading the given text",
      "Information gathering Skills",
      "Appreciation and Sensitivity"
    ],
    "correctAnswer": 0,
    "explanation": "This academic task targets 'Conceptual Understanding'. It requires the student to demonstrate a deep understanding of the concept \"All are equal before law\" by explaining it and providing relevant examples, rather than just memorizing the phrase."
  },
  {
    "id": 114,
    "question": "This policy/curriculum frame work has suggested that instead of 'civics', the term 'political science' is to be used (TSTET 02 Jan 2025)",
    "options": [
      "National Policy on Education - 1986",
      "New Education Policy - 2020",
      "National curriculum framework 2000",
      "National Curriculum frame work - 2005"
    ],
    "correctAnswer": 3,
    "explanation": "The National Curriculum Framework (NCF) 2005 recommended a shift from 'Civics' to 'Political Science' to encourage a more dynamic study of power, political processes, and democratic principles, rather than just focusing on government structures."
  },
  {
    "id": 115,
    "question": "\"A teacher appointed shall complete entire curriculum with in the specified time\" - It is mentioned in this section of Right to Education (RTE) Act - 2009 (TSTET 02 Jan 2025)",
    "options": [
      "Section24 (1) (d)",
      "Section24 (1) (C)",
      "Section - 25 (1)",
      "Section29(2) (f)"
    ],
    "correctAnswer": 1,
    "explanation": "Section 24 of the Right of Children to Free and Compulsory Education (RTE) Act, 2009, outlines the duties of teachers. Specifically, Section 24(1)(c) mandates that a teacher shall \"complete entire curriculum within the specified time.\""
  },
  {
    "id": 116,
    "question": "'War equipments', and 'dictionary of geography are the examples of these sources respectively (TSTET 02 Jan 2025)",
    "options": [
      "Primary source, Secondary source",
      "Secondary source, Primary source",
      "Both are Primary sources",
      "Both are Secondary sources"
    ],
    "correctAnswer": 0,
    "explanation": "War equipment from a specific period is a physical artifact from the time being studied, making it a primary source. A dictionary of geography is a reference work that compiles and interprets information from other sources, making it a secondary source."
  },
  {
    "id": 117,
    "question": "Choose the correct statements among the following related to cooperative learning: A) Cooperative learning believes in group efforts and cooperation among learners. B) Cooperative learning encourages individual goals rather than group goals. C) Cooperative learning emphasises social learning (TSTET 02 Jan 2025)",
    "options": [
      "A. B & C",
      "A & B only",
      "B & C only",
      "A & C only"
    ],
    "correctAnswer": 3,
    "explanation": "Cooperative learning is based on group effort, cooperation, and social interaction (Statements A and C are correct). It emphasizes shared group goals and mutual accountability, not individual goals (making Statement B incorrect)."
  },
  {
    "id": 118,
    "question": "Choose the correct statements among the following related to concept mapping: A) A concept map visually illustrates the relationships between concepts and ideas. B) Concept maps are a way to develop logical thinking and study skills. C) Concept maps have cross links or relationships between concepts in different segments/domains. (TSTET 02 Jan 2025)",
    "options": [
      "A & B only",
      "B & C only",
      "A & C only",
      "A, B & C"
    ],
    "correctAnswer": 3,
    "explanation": "All three statements correctly describe concept mapping. It is a visual tool showing relationships between ideas (A), helps develop logical thinking (B), and uses cross-links to connect concepts across different domains (C)."
  },
  {
    "id": 119,
    "question": "Choose the correct statements among the following related to main objectives of Continuous Comprehensive Evaluation (CCE): A) To make evaluation an integral part of teaching learning process. B) To maintain desired standard of attainment. C) To provide scope for self-evaluation (TSTET 02 Jan 2025)",
    "options": [
      "A & B only",
      "B & C only",
      "A & C only",
      "A, B & C"
    ],
    "correctAnswer": 3,
    "explanation": "The objectives of CCE include integrating evaluation with the teaching-learning process (A), using feedback to improve and maintain standards of achievement (B), and empowering students to understand their own learning through self-evaluation (C)."
  },
  {
    "id": 120,
    "question": "A social science teacher organised cleanliness camp in a nearby village with school students. This activity relates to (TSTET 02 Jan 2025)",
    "options": [
      "Bringing community to school",
      "Taking the school to community",
      "Implementation of higher authorities order",
      "It is one of the duties of a teacher"
    ],
    "correctAnswer": 1,
    "explanation": "This activity is an example of community-based learning, effectively taking the school to the community. It extends the learning environment beyond the classroom, connecting academic concepts with real-world social responsibility."
  },
  {
    "id": 121,
    "question": "In India, while preparing maps we usually follow the conventions used by the (TSTET 05 Jan 2025)",
    "options": [
      "Indian Meteorological Department",
      "National Mineral Development Corporation",
      "Survey of India",
      "Indian Geomatics Research Institute"
    ],
    "correctAnswer": 2,
    "explanation": "The Survey of India is the national mapping agency of the country under the Department of Science & Technology. It is responsible for all topographical control, surveys, and mapping of India, and it sets the conventions and standards for maps produced in the country."
  },
  {
    "id": 122,
    "question": "The Sun's rays that reach the ground DO NOT heat the earth's surface uniformly, because of (TSTET 05 Jan 2025)",
    "options": [
      "The vertical fall of Sun's rays on the surface of the earth",
      "The reflection of solar energy by the earth's atmosphere",
      "The Curved nature of the earth's surface",
      "The fall of harmful ultra violet rays of the sun on the surface of the earth"
    ],
    "correctAnswer": 2,
    "explanation": "Due to the Earth's spherical shape, sunlight strikes the surface at different angles. At the equator, the rays are more direct, concentrating the heat. Towards the poles, the rays strike at an oblique angle, spreading the same amount of energy over a larger area, resulting in less intense heating."
  },
  {
    "id": 123,
    "question": "Coriolis effect is responsible for (TSTET 05 Jan 2025)",
    "options": [
      "Deflecting of winds towards right in the northern hemisphere and towards left in the southern hemisphere",
      "Deflecting of winds towards right in the southern hemisphere and towards left in the northern hemisphere",
      "Deflecting of winds towards right in the northern hemisphere and also towards right in the southern hemisphere",
      "Deflecting of winds towards left in the northern hemisphere and also towards left in the southern hemisphere"
    ],
    "correctAnswer": 0,
    "explanation": "The Coriolis effect, caused by the Earth's rotation, deflects moving objects (like wind currents) to the right in the Northern Hemisphere and to the left in the Southern Hemisphere. This is a fundamental principle in meteorology and oceanography."
  },
  {
    "id": 124,
    "question": "Identify the INCORRECT statement regarding 'Thar Desert' (TSTET 05 Jan 2025)",
    "options": [
      "The Thar Desert has an arid climate with very low vegetation",
      "Saraswathi is the only river flowing in this Desert",
      "It is located on the leeward side of the Aravalli Mountains",
      "Here, the Streams appear during rainy season and disappear soon after the end of the season"
    ],
    "correctAnswer": 1,
    "explanation": "The Luni river is the only significant river that flows through the Thar Desert. The Saraswati is a mythical or ancient river believed to have once flowed through the region but is no longer present. Therefore, the statement that Saraswathi is the only river is incorrect."
  },
  {
    "id": 125,
    "question": "Which of the following statement correctly describes the term 'Weather'? (TSTET 05 Jan 2025)",
    "options": [
      "It is a description of the condition of the atmosphere for small period of time",
      "It is a description of the atmospheric conditions prevailing in the world for a period of one year",
      "It is a description of the average atmospheric conditions for specific areas over a long period of time",
      "The atmospheric conditions that prevail over a long period of one hundred years and more"
    ],
    "correctAnswer": 0,
    "explanation": "Weather refers to the state of the atmosphere at a specific time and place, including factors like temperature, precipitation, and wind. It describes short-term conditions, whereas climate describes long-term atmospheric patterns."
  },
  {
    "id": 126,
    "question": "Fruits such as oranges, figs, olives and grapes are most commonly cultivated in these regions (TSTET 05 Jan 2025)",
    "options": [
      "Coniferous Forest region",
      "Mediterranean Vegetation Region",
      "Temperate Evergreen Forest Region",
      "Tropical Deciduous Forest Region"
    ],
    "correctAnswer": 1,
    "explanation": "The Mediterranean climate, characterized by hot, dry summers and mild, wet winters, is ideal for growing citrus fruits, olives, figs, and grapes. This type of agriculture is a hallmark of regions around the Mediterranean Sea."
  },
  {
    "id": 127,
    "question": "The Equator is NOT passing through one of the following countries (TSTET 05 Jan 2025)",
    "options": [
      "Democratic Republic of Congo",
      "Columbia",
      "Brazil",
      "Sri Lanka"
    ],
    "correctAnswer": 3,
    "explanation": "The Equator passes through 13 countries, including the Democratic Republic of Congo, Colombia, and Brazil. Sri Lanka is located entirely in the Northern Hemisphere, a few degrees north of the Equator."
  },
  {
    "id": 128,
    "question": "In terms of light years, the distance between the Earth and the Sun is (TSTET 05 Jan 2025)",
    "options": [
      "9.131 minutes",
      "7.232 minutes",
      "8.311 minutes",
      "4.124 minutes"
    ],
    "correctAnswer": 2,
    "explanation": "The question asks for the time it takes for light from the Sun to reach Earth. Given the average distance from the Sun to Earth, it takes sunlight approximately 8.3 minutes to travel this distance."
  },
  {
    "id": 129,
    "question": "Read the following statements and choose the correct answer (TSTET 05 Jan 2025)\nA) Volcanic eruptions and the Deep Ocean Drilling projects form an important source of direct information regarding the interior of the earth\nB) The seismic activity and the gravitation force of the earth form an indirect source of information regarding the interior of the earth",
    "options": [
      "Both A and B are correct",
      "A is correct and B is incorrect",
      "B is correct and A is incorrect",
      "Both A and B are incorrect"
    ],
    "correctAnswer": 0,
    "explanation": "Statement A is correct because volcanic lava and materials from deep drilling projects provide physical samples, making them direct sources. Statement B is also correct as seismic waves and gravitational force are analyzed to infer the properties of the Earth's interior without direct observation, making them indirect sources."
  },
  {
    "id": 130,
    "question": "The eastward extension of the Central Highlands is locally known as (TSTET 05 Jan 2025)",
    "options": [
      "Bundelkhand and Baghelkhand",
      "Chota Nagpur Plateau",
      "Malwa Plateau",
      "Karbi-Anglang Plateau"
    ],
    "correctAnswer": 0,
    "explanation": "The Central Highlands of India comprise the Malwa Plateau in the west. As they extend eastward, they are known as the Bundelkhand and Baghelkhand plateaus. Further east is the Chota Nagpur Plateau."
  },
  {
    "id": 131,
    "question": "The Indian Peninsular Plateau is a table land composed of these rocks (TSTET 05 Jan 2025)",
    "options": [
      "Sedimentary and Igneous rocks",
      "Sedimentary and Metamorphic rocks",
      "Sedimentary and Crystalline rocks",
      "Crystalline, Igneous and Metamorphic rocks"
    ],
    "correctAnswer": 3,
    "explanation": "The Peninsular Plateau is one of the oldest landmasses on Earth. It is primarily composed of old crystalline, igneous, and metamorphic rocks, resulting from ancient volcanic activity and subsequent geological transformations."
  },
  {
    "id": 132,
    "question": "Identify the INCORRECT statement regarding cotton crop (TSTET 05 Jan 2025)",
    "options": [
      "Cotton grows well in the drier parts with black soils in the Deccan Plateau",
      "Cotton requires high temperature, light rainfall or irrigation with 210 frost free days",
      "India is the largest producer of cotton in the world",
      "Cotton is a kharief crop and its duration is 6 to 8 months"
    ],
    "correctAnswer": 2,
    "explanation": "While India is one of the leading producers of cotton, it often competes with China for the top spot and is not consistently the single largest producer. All other statements about cotton cultivation in India are correct."
  },
  {
    "id": 133,
    "question": "In this phase of Agricultural Development in India, the Government of India introduced new kind of seeds to the Indian Soil which were invented in various agricultural institutions in India as well as other countries (TSTET 05 Jan 2025)",
    "options": [
      "First Phase",
      "Second Phase",
      "Third Phase",
      "Fourth Phase"
    ],
    "correctAnswer": 1,
    "explanation": "The second phase of agricultural development in India, which began in the mid-1960s, is known as the Green Revolution. This phase was characterized by the introduction of High-Yielding Variety (HYV) seeds, which significantly boosted food grain production."
  },
  {
    "id": 134,
    "question": "National Aluminium Company Limited (NALCO) is located in this state of India (TSTET 05 Jan 2025)",
    "options": [
      "Chattisgarh",
      "Jharkhand",
      "Odisha",
      "West Bengal"
    ],
    "correctAnswer": 2,
    "explanation": "National Aluminium Company Limited (NALCO) has its registered office and corporate headquarters in Bhubaneswar, Odisha. Its major operations, including bauxite mining and the alumina refinery, are also located in Odisha."
  },
  {
    "id": 135,
    "question": "These plains of India are protected from the cold winds of Central Asia during severe winter because of the Himalayan Mountains (TSTET 05 Jan 2025)",
    "options": [
      "The Sundarbans",
      "The Indo-Gangetic Plain",
      "The East Coast Plain",
      "The West Coast Plain"
    ],
    "correctAnswer": 1,
    "explanation": "The Himalayan mountain range acts as a massive climatic barrier, preventing frigid winds from Central Asia from blowing into the Indian subcontinent. This protects the vast Indo-Gangetic Plain from experiencing extremely cold winters."
  },
  {
    "id": 136,
    "question": "As per Human Development Report 2021. The Human Development Index of Sri Lanka was 0.782, then Sri Lanka was in this category of Human Development (TSTET 05 Jan 2025)",
    "options": [
      "Very High Human Development",
      "High Human Development",
      "Moderate Human Development",
      "Low Human Development"
    ],
    "correctAnswer": 1,
    "explanation": "According to the UNDP's Human Development Index (HDI) classification, an index value between 0.700 and 0.799 falls into the 'High Human Development' category. Therefore, Sri Lanka's HDI of 0.782 places it in this category."
  },
  {
    "id": 137,
    "question": "The Policy of Appeasement of Hitler was followed by these countries (TSTET 05 Jan 2025)",
    "options": [
      "Great Britain and France",
      "Russia and France",
      "China and Great Britain",
      "Great Britain and Russia"
    ],
    "correctAnswer": 0,
    "explanation": "In the 1930s, Britain and France adopted a policy of appeasement towards Nazi Germany, making political and material concessions to Hitler's demands in the hope of avoiding another major war. The Munich Agreement of 1938 is a prime example."
  },
  {
    "id": 138,
    "question": "In 1806 CE, this ruler of France conquered the small independent Kingdoms of Germany and formed the Rhine Confederation (TSTET 05 Jan 2025)",
    "options": [
      "Charles X",
      "Napoleon Bonaparte",
      "Napoleon III",
      "Louie XVIII"
    ],
    "correctAnswer": 1,
    "explanation": "In 1806, following his victory at the Battle of Austerlitz, Napoleon Bonaparte reorganized the German states and established the Confederation of the Rhine, a confederation of client states of the First French Empire."
  },
  {
    "id": 139,
    "question": "Which of the following statements rightly describes the \"Constitutional Monarchy?\" (TSTET 05 Jan 2025)",
    "options": [
      "The power of the king was not a divine right but it was granted by the Parliament",
      "The power of the king was hereditary. Hence, he can enjoy all the powers",
      "The king is elected by the people of the country, so he enjoys all rights",
      "The king who was appointed by the Parliament has an absolute power"
    ],
    "correctAnswer": 0,
    "explanation": "A constitutional monarchy is a form of government where a monarch acts as head of state within the parameters of a constitution. The monarch's powers are limited by law, and they do not hold absolute power or rule by divine right."
  },
  {
    "id": 140,
    "question": "By the middle of the 18th century, England and other European countries had established their colonies in this part of North America (TSTET 05 Jan 2025)",
    "options": [
      "Eastern Coast",
      "Western Coast",
      "North-western Part",
      "South-western Part"
    ],
    "correctAnswer": 0,
    "explanation": "The initial European colonization of North America, including the Thirteen Colonies of Great Britain, was concentrated along the Atlantic or Eastern Coast due to its proximity to Europe, making it accessible for settlement and trade."
  },
  {
    "id": 141,
    "question": "In 1861. the British developed this as their centre of administration, trade and education in Western Africa (TSTET 05 Jan 2025)",
    "options": [
      "Cape Town",
      "Lagos",
      "Free Town",
      "Accra"
    ],
    "correctAnswer": 1,
    "explanation": "The British annexed Lagos in 1861, making it a Crown Colony. It quickly became a crucial administrative and commercial hub for the British in West Africa due to its strategic port and growing economic importance."
  },
  {
    "id": 142,
    "question": "The primary purpose of \"Fa-Hieun's\" journey to India in the early 5th century was (TSTET 05 Jan 2025)",
    "options": [
      "To establish trade routes",
      "To study Buddhism and collect sacred texts",
      "To explore the geography of India",
      "To spread Chinese culture"
    ],
    "correctAnswer": 1,
    "explanation": "Fa-Hien (Faxian) was a Chinese Buddhist monk who traveled to India during the reign of Chandragupta II. His main objective was to acquire Buddhist scriptures (sutras) and visit sacred Buddhist sites."
  },
  {
    "id": 143,
    "question": "The Second Buddhist Council was held at (TSTET 05 Jan 2025)",
    "options": [
      "Rajgir",
      "Pataliputra",
      "Vaishali",
      "Sarnath"
    ],
    "correctAnswer": 2,
    "explanation": "The Second Buddhist Council was held at Vaishali, approximately 100 years after the Buddha's Parinirvana. It was convened to settle a dispute over monastic discipline (Vinaya) and resulted in the first major schism within the Sangha."
  },
  {
    "id": 144,
    "question": "The main purpose of establishing the Dutch East India Company in India was (TSTET 05 Jan 2025)",
    "options": [
      "To promote Christianity",
      "To trade in spices",
      "To Supply Guns",
      "To build military alliances"
    ],
    "correctAnswer": 1,
    "explanation": "The primary motive for the Dutch East India Company (VOC) was economic. They sought to control the lucrative trade in spices like pepper, cloves, and nutmeg from the East Indies, which were highly valued in Europe."
  },
  {
    "id": 145,
    "question": "Among the following, the famous fort associated with Shivaji Maharaj was (TSTET 05 Jan 2025)",
    "options": [
      "Kochi Fort",
      "Raigad Fort",
      "Agra Fort",
      "Gwalior Fort"
    ],
    "correctAnswer": 1,
    "explanation": "Raigad Fort was the capital of the Maratha Empire under Chhatrapati Shivaji Maharaj. He was coronated at this fort in 1674, and it served as the center of his administration."
  },
  {
    "id": 146,
    "question": "The major failure of Muhammad Bin Tughlaq's reign was (TSTET 05 Jan 2025)",
    "options": [
      "Undertaking military campaigns in South India",
      "The introduction of token currency",
      "Strengthening of the administrative system",
      "Not establishing diplomatic relations with neighbouring kingdoms"
    ],
    "correctAnswer": 1,
    "explanation": "Muhammad Bin Tughlaq's experiment with token currency is considered one of his most significant failures. He introduced brass and copper coins with the same value as silver coins, but widespread counterfeiting led to a collapse of the currency's value and severe economic disruption."
  },
  {
    "id": 147,
    "question": "The significant contribution of Raja Raja Chola I to temple architecture was the construction of (TSTET 05 Jan 2025)",
    "options": [
      "The Brihadeeswarar Temple",
      "The Meenakshi Temple",
      "The Lingaraja Temple",
      "The Shore Temple"
    ],
    "correctAnswer": 0,
    "explanation": "Raja Raja Chola I commissioned the Brihadeeswarar Temple in Thanjavur. Completed in 1010 CE, it is a masterpiece of Dravidian architecture and a UNESCO World Heritage Site."
  },
  {
    "id": 148,
    "question": "Directive Principles of State Policy' aim to promote (TSTET 05 Jan 2025)",
    "options": [
      "Political Freedom",
      "Social Justice",
      "Economic Growth",
      "Individual Rights"
    ],
    "correctAnswer": 1,
    "explanation": "The Directive Principles of State Policy (DPSP) in the Indian Constitution are guidelines for the government to create a just society. They aim to promote social and economic justice, welfare, and equality, essentially aiming to establish a welfare state."
  },
  {
    "id": 149,
    "question": "In India, one of the following can be amended with Special majority in both the houses of the parliament (TSTET 05 Jan 2025)",
    "options": [
      "Fundamental Rights incorporated in the Indian Constitution",
      "Election of the President and its manner",
      "Extent of the executive power of the Union and the States",
      "Provisions related to the Supreme Court and High courts, etc."
    ],
    "correctAnswer": 0,
    "explanation": "Amending the Fundamental Rights requires a special majority of the Parliament. The other options relate to the federal structure and require a special majority plus ratification by half of the state legislatures."
  },
  {
    "id": 150,
    "question": "The President of India proclaims the National Emergency on the written advice of (TSTET 05 Jan 2025)",
    "options": [
      "Prime Minister",
      "Chief Justice of India",
      "Union Council of Ministers",
      "National Investigation Agency and RAW"
    ],
    "correctAnswer": 2,
    "explanation": "The 44th Amendment Act of 1978 made it mandatory for the President to declare a National Emergency only after receiving a written recommendation from the Union Cabinet (which is the core of the Union Council of Ministers)."
  },
  {
    "id": 151,
    "question": "The primary goal of UNICEF is to (TSTET 05 Jan 2025)",
    "options": [
      "Promote gender equality",
      "Provide humanitarian assistance",
      "Support children's rights and welfare",
      "Combat climate change"
    ],
    "correctAnswer": 2,
    "explanation": "UNICEF stands for the United Nations Children's Fund. Its primary mission is to advocate for the protection of children's rights, help meet their basic needs, and expand their opportunities to reach their full potential."
  },
  {
    "id": 152,
    "question": "Read the following statements (TSTET 05 Jan 2025)\nA) The Union Council of Ministers must have membership in either house of the Parliament i.e. Lok Sabha or Rajya Sabha\nB) If the Union Council of Ministers are not members of the Parliament they should be elected or nominated to either of the two houses of the Parliament within one year from the date of assumption of their office",
    "options": [
      "Both 'A' and 'B' are correct",
      "Both 'A' and 'B' are incorrect",
      "'A' is correct and 'B' is incorrect",
      "'B' is correct and 'A' is incorrect"
    ],
    "correctAnswer": 2,
    "explanation": "Statement A is correct. A minister must be a member of either house of Parliament. However, Statement B is incorrect because a non-member can become a minister but must become a member within six months, not one year."
  },
  {
    "id": 153,
    "question": "One among the following is elected for a term of six years (TSTET 05 Jan 2025)",
    "options": [
      "Lok Sabha member",
      "Rajya sabha member",
      "Chairman of Rajya Sabha",
      "Speaker of Lok Sabha"
    ],
    "correctAnswer": 1,
    "explanation": "Members of the Rajya Sabha (Council of States) are elected for a six-year term, with one-third of the members retiring every two years. Members of the Lok Sabha have a five-year term."
  },
  {
    "id": 154,
    "question": "Identify the true statement regarding Bills (TSTET 05 Jan 2025)",
    "options": [
      "Money bills can be introduced in either house of the Parliament",
      "President's prior permission is required for introducing the ordinary bill in the Parliament",
      "Deputy Speaker of Rajya Sabha certifies whether the bill is a money bill or not before sending it to the President",
      "There will be a joint sitting of both the houses of Parliament, if the ordinary bill is not passed by the Lok Sabha and Rajya Sabha"
    ],
    "correctAnswer": 3,
    "explanation": "In case of a deadlock over an ordinary bill, the Constitution provides for a joint sitting of both houses to resolve the disagreement. Money Bills can only be introduced in the Lok Sabha, and the Speaker of the Lok Sabha certifies them."
  },
  {
    "id": 155,
    "question": "The landlord forced a 13-year old child to work in his cotton field without paying any wages or paying very low wages. It would be a violation of this Fundamental Right (TSTET 05 Jan 2025)",
    "options": [
      "Right to Equality",
      "Right to freedom",
      "Right against exploitation",
      "Right against Constitutional Remedies"
    ],
    "correctAnswer": 2,
    "explanation": "The Right against Exploitation (Articles 23 and 24) prohibits forced labor and child labor. Forcing a child to work without proper wages is a form of forced labor and violates this fundamental right."
  },
  {
    "id": 156,
    "question": "On 3rd February 2010. Sri Krishna Committee was appointed to (TSTET 05 Jan 2025)",
    "options": [
      "Look into the issue of Telangana",
      "Suggest measures to prevent sexual assault and abuse",
      "Bring about reforms in banking sector",
      "Suggest ways and means to eradicate poverty in India"
    ],
    "correctAnswer": 0,
    "explanation": "The Srikrishna Committee was appointed by the Government of India in 2010 to study the demand for a separate Telangana state and make recommendations on the matter."
  },
  {
    "id": 157,
    "question": "As per the central act. 'Act of Judicial Services Authority', these are NOT eligible for judicial assistance (TSTET 05 Jan 2025)",
    "options": [
      "Victims of domestic violence and caste enmity",
      "All the Citizens who belong to Backward Classes",
      "Victims of natural disasters",
      "Agricultural and Industrial labourers"
    ],
    "correctAnswer": 1,
    "explanation": "The Legal Services Authorities Act, 1987, does not automatically grant eligibility for free legal aid to all citizens belonging to Backward Classes; there is an income ceiling for this category, unlike for some other categories like SC/ST members or women."
  },
  {
    "id": 158,
    "question": "This organ of the UN is primarily responsible for deliberating and making recommendations on international issues (TSTET 05 Jan 2025)",
    "options": [
      "Security Council",
      "General Assembly",
      "International Court of Justice",
      "Secretariat"
    ],
    "correctAnswer": 1,
    "explanation": "The UN General Assembly is the main deliberative, policymaking, and representative organ of the UN. It provides a forum for multilateral discussion of the full spectrum of international issues and makes recommendations to member states."
  },
  {
    "id": 159,
    "question": "Identify the statement that accurately describes the term \"demand deposits\" (TSTET 05 Jan 2025)",
    "options": [
      "They can only be withdrawn in cash",
      "They function like currency notes",
      "They require a notice period for withdrawal of cash",
      "They are not accepted for payments"
    ],
    "correctAnswer": 1,
    "explanation": "Demand deposits (funds in current or savings accounts) can be withdrawn 'on demand' and used for payments via checks, debit cards, or electronic transfers, thus functioning as a medium of exchange similar to physical currency."
  },
  {
    "id": 160,
    "question": "In the following way, the banks manage to operate with a small amount of cash on hand only (TSTET 05 Jan 2025)",
    "options": [
      "By borrowing from other banks when required",
      "By accepting deposits only",
      "By predicting withdrawal patterns",
      "Expecting that only a few depositors withdraw cash in a day"
    ],
    "correctAnswer": 3,
    "explanation": "Banks operate on the principle of fractional reserve banking. They know from experience that on any given day, only a small fraction of depositors will withdraw cash, allowing them to lend out the majority of deposited funds while keeping a small reserve."
  },
  {
    "id": 161,
    "question": "One of the following is NOT the source of income for banks (TSTET 05 Jan 2025)",
    "options": [
      "Service charges for issuing demand drafts",
      "Interest charged on loans and account maintenance fees",
      "Government subsidies",
      "The interest paid by the Reserve Bank of India for deposits"
    ],
    "correctAnswer": 2,
    "explanation": "Banks primarily earn income from interest spreads and service fees. Government subsidies are financial aid given to specific sectors or individuals, not a primary or regular source of income for commercial banks."
  },
  {
    "id": 162,
    "question": "This type of Price Index' includes all goods, both capital and consumer (TSTET 05 Jan 2025)",
    "options": [
      "Consumer Price Index (CPI)",
      "Wholesale Price Index (WPI)",
      "Retail Price Index (RPI)",
      "Market Price Index (MPI)"
    ],
    "correctAnswer": 1,
    "explanation": "The Wholesale Price Index (WPI) measures the average change in prices of goods sold in bulk. Its basket is broad and includes raw materials, intermediate goods (capital goods), and finished goods, but excludes services."
  },
  {
    "id": 163,
    "question": "The role of goldsmiths in the early currency system was (TSTET 05 Jan 2025)",
    "options": [
      "They created coins for trade",
      "They provided a safe place for people to store their gold and silver coins",
      "They regulated the value of currency",
      "They were the first bankers in the world"
    ],
    "correctAnswer": 1,
    "explanation": "In the early stages of banking, goldsmiths used their secure vaults to store precious metals for merchants. They issued receipts for these deposits, which then began to circulate as an early form of paper money, representing the stored value."
  },
  {
    "id": 164,
    "question": "The number of withdrawals allowed in a month for a Basic Savings Bank Deposit Account holders including the amount withdrawn from ATMS (TSTET 05 Jan 2025)",
    "options": [
      "A maximum of four withdrawals are allowed",
      "Only two withdrawals are allowed",
      "Ten withdrawals are permitted",
      "Unlimited withdrawals are allowed"
    ],
    "correctAnswer": 0,
    "explanation": "As per RBI guidelines for Basic Savings Bank Deposit (BSBD) Accounts, holders are generally entitled to a maximum of four withdrawals in a month, including ATM withdrawals. This account is designed for financial inclusion with minimal charges."
  },
  {
    "id": 165,
    "question": "In the production process, one among the following does NOT come under \"Physical Capital\" (TSTET 05 Jan 2025)",
    "options": [
      "Simple tools like farmer's plough",
      "Sophisticated machines such as generators, turbines",
      "Buildings for installation of machinery and the place of work",
      "The Yarn used by the weavers"
    ],
    "correctAnswer": 3,
    "explanation": "Physical capital includes fixed capital (tools, machines, buildings) and working capital (raw materials). Yarn used by weavers is a raw material that is consumed in the production process, so it is considered working capital, not fixed physical capital."
  },
  {
    "id": 166,
    "question": "Which of the following statement best describes the term 'fertility rate'? (TSTET 05 Jan 2025)",
    "options": [
      "The total number of children that a woman can give birth",
      "The average number of children that are born to a woman over her lifetime",
      "The average number of children born in a specific place",
      "The total number of children born in a specific place in a year"
    ],
    "correctAnswer": 1,
    "explanation": "The Total Fertility Rate (TFR) is a demographic indicator representing the average number of children a woman would have during her reproductive years, assuming current age-specific fertility rates remain constant."
  },
  {
    "id": 167,
    "question": "Which of the following statements best describes the term \"Subsidies\"? (TSTET 05 Jan 2025)",
    "options": [
      "The amount paid by the government to reduce the cost of certain important goods to keep their prices low",
      "The amount paid by the government to increase the cost of certain important goods to keep their prices very high",
      "Government giving certain amount of money freely to purchase the basic goods by the poor",
      "The amount paid by the industrialists to the Government to keep the prices low"
    ],
    "correctAnswer": 0,
    "explanation": "A subsidy is a financial support from the government to a business or economic sector. This support helps to lower the price of a good or service for consumers below the market rate, making essential items more affordable."
  },
  {
    "id": 168,
    "question": "The Government employee paid a sum of Rs. 4.00.000 as tax to the Government based on his salary. The type of tax paid by the employee is (TSTET 05 Jan 2025)",
    "options": [
      "Professional Tax",
      "Corporate Tax",
      "Personal Income Tax",
      "GST"
    ],
    "correctAnswer": 2,
    "explanation": "Personal Income Tax is a direct tax levied on the income of an individual. As the tax is paid based on the employee's salary, it falls into this category."
  },
  {
    "id": 169,
    "question": "In a history class, a social science teacher is dealing with The Rule of Mughal Dynasty. Which of the following he can use for making his/her teaching easy (TSTET 05 Jan 2025)\nA) Tree chart\nB) Time chart\nC) Maps\nD) Video clippings from some movies or documentaries",
    "options": [
      "A & B only",
      "A & C only",
      "A, B, C, & D",
      "A, C & D only"
    ],
    "correctAnswer": 2,
    "explanation": "All the listed aids are effective. A tree chart can show lineage, a time chart shows chronology, maps show the empire's extent, and videos provide visual context. Using a combination of these tools creates a comprehensive and engaging learning experience."
  },
  {
    "id": 170,
    "question": "The most suitable method to teach topics like World Peace-India's Contribution', 'Political parties Manifestos and the Future of our country' is (TSTET 05 Jan 2025)",
    "options": [
      "Lecture method",
      "Lecture-cum-Demonstration method",
      "Problem solving method",
      "Discussion method"
    ],
    "correctAnswer": 3,
    "explanation": "These topics are complex and open to multiple perspectives. A discussion method encourages critical thinking, allows students to share and debate different viewpoints, and promotes active participation, which is more effective for such subjects than a one-way lecture."
  },
  {
    "id": 171,
    "question": "This level of knowledge is helpful to students to think actively about inter relations between concepts. (TSTET 05 Jan 2025)",
    "options": [
      "Metacognitive knowledge",
      "Procedural knowledge",
      "Factual knowledge",
      "Conceptual knowledge"
    ],
    "correctAnswer": 3,
    "explanation": "Conceptual knowledge is the understanding of principles, theories, and the relationships among them. It enables students to connect ideas and build a coherent understanding of a subject, going beyond knowing isolated facts."
  },
  {
    "id": 172,
    "question": "The document of Memorandum of Understandings (MoUs) made between the countries India and Russia recently, is an example for this type of sources (TSTET 05 Jan 2025)",
    "options": [
      "Primary source",
      "Tertiary source",
      "Secondary source",
      "Internal source"
    ],
    "correctAnswer": 0,
    "explanation": "A primary source provides direct or firsthand evidence. An official government document like an MoU is a primary source because it is the original document created at the time of the agreement, not an analysis of it."
  },
  {
    "id": 173,
    "question": "A student is able to make a list of 10 employed women, he/she knows personally in the locality. It is the learning indicator of this academic standard (TSTET 05 Jan 2025)",
    "options": [
      "Mapping Skills",
      "Information Skills",
      "Conceptual understanding",
      "Appreciation and sensitivity"
    ],
    "correctAnswer": 1,
    "explanation": "This task requires the student to gather, collect, and organize information from their immediate environment. This directly relates to information skills, which involve collecting data from various sources and presenting it in a structured format."
  },
  {
    "id": 174,
    "question": "To teach about social reformers, popular persons, the remarkable incidents that happened in their life and their life experiences etc., this historical method is suitable (TSTET 05 Jan 2025)",
    "options": [
      "Anecdotal method",
      "Biographical method",
      "Evolution method",
      "Social method"
    ],
    "correctAnswer": 1,
    "explanation": "The biographical method focuses on the life story of an individual to understand historical events and social context. It is the most direct and suitable method for teaching about the lives and contributions of specific people like social reformers."
  },
  {
    "id": 175,
    "question": "According to this section of Right to Education (RTE) Act 2009, \"No teacher shall engage himself or herself in private tuitions or private teaching activity\" (TSTET 05 Jan 2025)",
    "options": [
      "Section - 28",
      "Section - 26",
      "Section - 27",
      "Section - 30"
    ],
    "correctAnswer": 0,
    "explanation": "Section 28 of the Right of Children to Free and Compulsory Education (RTE) Act, 2009, explicitly prohibits teachers from engaging in private tuition. This is intended to ensure teachers focus on their school duties and prevent conflicts of interest."
  },
  {
    "id": 176,
    "question": "National Curriculum Framework (NCF)-2005 suggested that. at this school stage; in political science the focus should be on discussing the philosophical foundation that underlie the value frame work of the Indian constitution i.e.. indepth discussion of equality, liberty, justice, fraternity etc.. (TSTET 05 Jan 2025)",
    "options": [
      "Primary stage",
      "Upper Primary stage",
      "Secondary stage",
      "Higher Secondary stage"
    ],
    "correctAnswer": 3,
    "explanation": "NCF-2005 recommends that at the Higher Secondary stage (Classes XI-XII), political science should shift from just describing institutions to discussing the abstract ideas and philosophical underpinnings of the constitution for a deeper, more analytical understanding."
  },
  {
    "id": 177,
    "question": "A social science teacher asked her students to make some rules for their class to follow. These were written on a chart. All the students gave their consent to follow them. The chart was pasted in the class for reference. This activity can be an introductory activity for this topic (TSTET 05 Jan 2025)",
    "options": [
      "Diversity",
      "Democracy",
      "Resources",
      "Market"
    ],
    "correctAnswer": 1,
    "explanation": "This activity simulates a key aspect of democracy: the creation of rules by the people who are then governed by them, based on mutual consent. It serves as a practical introduction to the concepts of self-governance and social contracts."
  },
  {
    "id": 178,
    "question": "Organisation of excursions will mainly develop this kind of value among students (TSTET 05 Jan 2025)",
    "options": [
      "National value",
      "Disciplinary value",
      "Vocational value",
      "Recreational value"
    ],
    "correctAnswer": 3,
    "explanation": "While excursions can contribute to other values, their primary and most direct value is recreational. They provide a break from the routine classroom environment, offering enjoyment, relaxation, and a fun way to learn."
  },
  {
    "id": 179,
    "question": "Identify the tools of evaluation of scholastic area among the following (TSTET 05 Jan 2025)\nA) Slip tests\nB) Diagnostic test\nC) Projective test\nD) Assignments",
    "options": [
      "A, B & C only",
      "A, B & D only",
      "B, C & D only",
      "A, B, C & D"
    ],
    "correctAnswer": 1,
    "explanation": "Scholastic areas relate to academic subjects. Slip tests, diagnostic tests, and assignments are all standard tools for evaluating academic knowledge. Projective tests are psychological tools used to assess personality, which falls under the co-scholastic domain."
  },
  {
    "id": 180,
    "question": "In a Physical map of India to show the ever green forests, tropical deciduous forest these colours are used respectively (TSTET 05 Jan 2025)",
    "options": [
      "Both are with dark green colour",
      "Both are with light green colour",
      "Dark green, light green",
      "Light green, dark green"
    ],
    "correctAnswer": 2,
    "explanation": "According to thematic mapping conventions, different shades represent variations. Dense evergreen forests are typically shown in dark green, while the less dense tropical deciduous forests are represented by a lighter shade of green to visually distinguish between them."
  },
  {
    "id": 181,
    "question": "On topographic map, Contour Lines are most commonly used to (TSTET 11 Jan 2025)",
    "options": [
      "illustrate the type of soil",
      "find out the time of a place and distance between the two places",
      "illustrate the distribution of water and land on the surface of the earth",
      "illustrate the shape of the given landform or terrain"
    ],
    "correctAnswer": 3,
    "explanation": "Contour lines are lines on a map that connect points of equal elevation. By studying the pattern of these lines, one can visualize the three-dimensional shape of the land, including hills, valleys, and the steepness of slopes."
  },
  {
    "id": 182,
    "question": "These states of India DO NOT share their boundary with Telangana state (TSTET 11 Jan 2025)",
    "options": [
      "Chattisgarh and Orissa",
      "Madhya Pradesh and Maharashtra",
      "Orissa and Madhya Pradesh",
      "Chattisgarh and Madhya Pradesh"
    ],
    "correctAnswer": 2,
    "explanation": "Telangana shares its borders with Maharashtra to the north, Chhattisgarh to the east, Karnataka to the west, and Andhra Pradesh to the south and southeast. Odisha (Orissa) and Madhya Pradesh do not have a common border with Telangana."
  },
  {
    "id": 183,
    "question": "Which of the following best describes 'the solar insolation variation' across different latitudes? (TSTET 11 Jan 2025)",
    "options": [
      "It is uniform across all latitudes",
      "It is highest at the poles and decreases towards the equator",
      "It is highest at the equator and decreases towards the poles",
      "It is highest in between the Tropic of Cancer and the Arctic Circle"
    ],
    "correctAnswer": 2,
    "explanation": "Solar insolation is most intense at the equator where the sun's rays hit the Earth's surface at a direct, near-90-degree angle. As latitude increases towards the poles, the sun's rays strike the surface at a more oblique angle, spreading the same amount of energy over a larger area, which reduces its intensity."
  },
  {
    "id": 184,
    "question": "When condensation takes place at temperatures below freezing point, water vapour condenses directly into (TSTET 11 Jan 2025)",
    "options": [
      "Hail Stone",
      "Sleet",
      "Ice Crystals",
      "Snowfall"
    ],
    "correctAnswer": 2,
    "explanation": "The process where water vapor changes directly into a solid (ice) without becoming a liquid first is called deposition. This process forms ice crystals in the atmosphere, which are the fundamental components of snowflakes and frost."
  },
  {
    "id": 185,
    "question": "Which of the following statements correctly describe the term 'Climate'? (TSTET 11 Jan 2025)",
    "options": [
      "It is a description of the condition of the atmosphere of a place for small period of time",
      "It is a description of the atmospheric conditions prevailing in the world for a period of one year",
      "It is a description of the average atmospheric conditions for specific areas over a long period of time",
      "The atmospheric conditions that prevail at a given time of the year"
    ],
    "correctAnswer": 2,
    "explanation": "Climate refers to the long-term average of weather patterns in a particular region, typically calculated over a period of 30 years or more. It is distinct from weather, which describes short-term atmospheric conditions."
  },
  {
    "id": 186,
    "question": "The trees grown in these forests shed their leaves in the dry season to conserve water (TSTET 11 Jan 2025)",
    "options": [
      "Tropical Evergreen Forests",
      "Temperate Evergreen Forests",
      "Tropical Deciduous Forests",
      "Coniferous Forests"
    ],
    "correctAnswer": 2,
    "explanation": "Deciduous trees are those that shed their leaves seasonally. In tropical climates with distinct wet and dry seasons, trees in deciduous forests drop their leaves during the dry season to reduce water loss through transpiration."
  },
  {
    "id": 187,
    "question": "Among the following, this theory explains the origin of Universe (TSTET 11 Jan 2025)",
    "options": [
      "Continental Drift Theory",
      "Big Bang Theory",
      "Heliocentric theory",
      "Relativity theory"
    ],
    "correctAnswer": 1,
    "explanation": "The Big Bang Theory is the leading scientific explanation for how the universe began. It posits that the universe started from an initial state of extremely high density and temperature which has been expanding and cooling for approximately 13.8 billion years."
  },
  {
    "id": 188,
    "question": "Mercury, Venus, Earth and Mars are called inner planets as they lie between (TSTET 11 Jan 2025)",
    "options": [
      "The Sun and the Jupiter",
      "The Sun and the Neptune",
      "The Sun and the belt of Comets",
      "The Sun and the belt of Asteroids"
    ],
    "correctAnswer": 3,
    "explanation": "The solar system is broadly divided into the inner and outer planets by the asteroid belt, which is located between the orbits of Mars and Jupiter. The inner planets (Mercury, Venus, Earth, Mars) are those that orbit within this belt, closer to the Sun."
  },
  {
    "id": 189,
    "question": "Identify the true statement regarding the 'Crust of the Earth' (TSTET 11 Jan 2025)",
    "options": [
      "The density of oceanic crust is more than the density of the Mantle",
      "The thickness of oceanic crust is less than the continental crust",
      "The type of minerals found in the oceanic crust are nickel and ferrous",
      "The Crust is the main source of Magma"
    ],
    "correctAnswer": 1,
    "explanation": "The continental crust is significantly thicker (25-70 km) than the oceanic crust (5-10 km). However, the oceanic crust is denser. Magma originates primarily from the mantle, and the Earth's core is primarily nickel and iron (ferrous)."
  },
  {
    "id": 190,
    "question": "The correct sequence of the following countries in descending order as per their land area (TSTET 11 Jan 2025)",
    "options": [
      "Russia, China, India, Brazil and Australia",
      "Russia, Canada, the United States of America. India and Australia",
      "The United States of America, Canada, Brazil, India and Australia",
      "Russia, Canada, the United States of America, China and Brazil"
    ],
    "correctAnswer": 3,
    "explanation": "The top five countries by total area in descending order are Russia, Canada, China, the United States of America, and Brazil. This option correctly lists this sequence."
  },
  {
    "id": 191,
    "question": "Among the following, identify the plains of west coast (TSTET 11 Jan 2025)",
    "options": [
      "Konkan Coast, Kutch Coast and Malabar Coast",
      "Konkan Coast, Coromandal Coast, Kathiawar Coast",
      "Utkal Coast, Konkan Coast and Malabar Coast",
      "Utkal Coast, Coromandal Coast and Kathiawar Coast"
    ],
    "correctAnswer": 0,
    "explanation": "The west coast of India includes the Kutch and Kathiawar peninsulas in Gujarat, the Konkan Coast (Maharashtra, Goa, northern Karnataka), and the Malabar Coast (Kerala). The Coromandel and Utkal Coasts are on the eastern side of India."
  },
  {
    "id": 192,
    "question": "Among the following Groups of countries, the countries which are grouped under High Human Development Index as per Human Development Index Report, 2021 (TSTET 11 Jan 2025)",
    "options": [
      "Norway, Switzerland, United States of America",
      "China, Sri Lanka, Brazil",
      "United States of America, Sri Lanka, Bhutan",
      "Switzerland, Sri Lanka, China"
    ],
    "correctAnswer": 1,
    "explanation": "As per the 2021/2022 Human Development Report, China, Sri Lanka, and Brazil are all categorized in the 'High' human development category. Countries like Norway, Switzerland, and the USA are in the 'Very High' category."
  },
  {
    "id": 193,
    "question": "'Seri culture' means (TSTET 11 Jan 2025)",
    "options": [
      "Rearing of silk worms for the production of silk fibre",
      "The scientific method of rearing honey bees",
      "Rearing of fish for fish oil",
      "The scientific study of seeds and vegetables"
    ],
    "correctAnswer": 0,
    "explanation": "Sericulture is the agricultural practice of breeding and raising silkworms (the larvae of silk moths) to produce raw silk by harvesting their cocoons."
  },
  {
    "id": 194,
    "question": "Among the following, the Green House Gases are (TSTET 11 Jan 2025)",
    "options": [
      "Carbon di oxide, methane and water vapour",
      "Sulphuric acid, nitrogen and oxygen",
      "Carbon di oxide, nitrogen and oxygen",
      "Methane, sulphuric acid and oxygen"
    ],
    "correctAnswer": 0,
    "explanation": "Greenhouse gases are atmospheric gases that trap heat. The primary ones include carbon dioxide ($CO_2$), methane ($CH_4$), water vapor ($H_2O$), and nitrous oxide. Nitrogen and oxygen, which compose most of the atmosphere, are not significant greenhouse gases."
  },
  {
    "id": 195,
    "question": "Which of the following industry is located mainly along the banks of the river Hoogly? (TSTET 11 Jan 2025)",
    "options": [
      "Cotton Textile Industry",
      "Jute Textile Industry",
      "Silk Industry",
      "Aluminium Smelting Industry"
    ],
    "correctAnswer": 1,
    "explanation": "The Hooghly River basin in West Bengal is the traditional hub of the Indian jute industry. The proximity to jute-producing regions, abundant water for processing, and inexpensive water transport created an ideal environment for jute mills to flourish."
  },
  {
    "id": 196,
    "question": "Among the following places, the average monthly temperatures remain more or less same throughout the year (TSTET 11 Jan 2025)",
    "options": [
      "Hyderabad and Nagpur",
      "Visakhapatnam and Panaji",
      "Hyderabad and Panaji",
      "Darjeeling and Bhopal"
    ],
    "correctAnswer": 1,
    "explanation": "Coastal locations like Visakhapatnam and Panaji experience a maritime climate, where the proximity to the sea moderates temperatures, leading to a smaller temperature range throughout the year compared to inland locations like Hyderabad, Nagpur, and Bhopal."
  },
  {
    "id": 197,
    "question": "The main purpose of Adolf Hitler in bringing 'The Famous Enabling Act' on 3rd march, 1933 was (TSTET 11 Jan 2025)",
    "options": [
      "To establish democratic form of government in Germany",
      "To bring economic reforms in Germany by assigning the responsibility to Hjalmar Schacht",
      "To establish dictatorship in Germany",
      "To arrest and torture the political activists, trade unionists and people of minority communities especially Jews"
    ],
    "correctAnswer": 2,
    "explanation": "The Enabling Act of 1933 granted the German cabinet, and effectively Adolf Hitler, the authority to enact laws without the approval of the Reichstag (parliament). This act was the legal foundation that dismantled the Weimar Republic and established Hitler's dictatorship."
  },
  {
    "id": 198,
    "question": "On 20th June, 1789 CE, the representatives of Third Estate declared themselves as (TSTET 11 Jan 2025)",
    "options": [
      "National Assembly",
      "The representatives of King Louis XVIII",
      "Members of the Jacobian Club",
      "Directory"
    ],
    "correctAnswer": 0,
    "explanation": "During the Estates-General of 1789, the members of the Third Estate, feeling disenfranchised, declared themselves the National Assembly on June 17. On June 20, when they found themselves locked out of their usual meeting hall, they convened in a nearby tennis court and took the famous Tennis Court Oath, vowing not to separate until a constitution was established."
  },
  {
    "id": 199,
    "question": "In 1783, the Great Britain recognised the independence of thirteen American colonies by signing this treaty (TSTET 11 Jan 2025)",
    "options": [
      "Treaty of Vienna",
      "Treaty of Frankfort",
      "Treaty of Versailles",
      "Treaty of Paris"
    ],
    "correctAnswer": 3,
    "explanation": "The Treaty of Paris, signed on September 3, 1783, officially ended the American Revolutionary War. In this treaty, Great Britain formally recognized the independence of the United States."
  },
  {
    "id": 200,
    "question": "The Socialist thinker who advocated for public control of Property through Central Planning (TSTET 11 Jan 2025)",
    "options": [
      "Babeuf",
      "Saint Simon of France",
      "Simon Boliver",
      "Thomas Moore"
    ],
    "correctAnswer": 1,
    "explanation": "Henri de Saint-Simon was an early French utopian socialist who envisioned a society led by a council of scientists and industrialists. He argued for a centrally planned economy where property would be managed for the benefit of society as a whole, rather than for private profit."
  },
  {
    "id": 201,
    "question": "In between 1500 and 1800, most of Central and South America had come under the control of these European countries (TSTET 11 Jan 2025)",
    "options": [
      "France and Spain",
      "Spain and Portugal",
      "France and England",
      "Germany and Portugal"
    ],
    "correctAnswer": 1,
    "explanation": "Following the Age of Discovery, Spain and Portugal were the primary colonizers of the Americas. Spain conquered vast territories including Mexico, Central America, and western South America, while Portugal colonized Brazil, as established by the Treaty of Tordesillas."
  },
  {
    "id": 202,
    "question": "Which of the following Vedas is primarily focused on hymns and praises to deities? (TSTET 11 Jan 2025)",
    "options": [
      "Samaveda",
      "Yajurveda",
      "Atharvanaveda",
      "Rigveda"
    ],
    "correctAnswer": 3,
    "explanation": "The Rigveda, the oldest of the four Vedas, is an ancient collection of Sanskrit hymns (sūktas). It is primarily dedicated to praising and invoking various deities such as Agni, Indra, and Soma."
  },
  {
    "id": 203,
    "question": "The ancient kingdom \"Ashmaka\" was located in this part of India (TSTET 11 Jan 2025)",
    "options": [
      "Northern India",
      "Southern India",
      "Eastern India",
      "Western India"
    ],
    "correctAnswer": 1,
    "explanation": "The Ashmaka (or Assaka) was one of the sixteen Mahajanapadas of ancient India. It was the only one located south of the Vindhya mountains, situated along the banks of the Godavari River in the region of modern-day Telangana and Maharashtra."
  },
  {
    "id": 204,
    "question": "This Mughal emperor had captured Qutub Shahi ruler Abul Hasan Tana Shah (TSTET 11 Jan 2025)",
    "options": [
      "Shah Jahan",
      "Aurangzeb",
      "Akbar",
      "Jahangir"
    ],
    "correctAnswer": 1,
    "explanation": "In 1687, after a prolonged eight-month siege of the Golconda Fort, the Mughal emperor Aurangzeb defeated and imprisoned Abul Hasan Tana Shah, the last ruler of the Qutb Shahi dynasty, thereby annexing the kingdom to the Mughal Empire."
  },
  {
    "id": 205,
    "question": "On 9th December 2009, the leader who made an announcement regarding Telangana (TSTET 11 Jan 2025)",
    "options": [
      "Pranab Mukherjee",
      "P. Chidambaram",
      "Sonia Gandhi",
      "Jairam Ramesh"
    ],
    "correctAnswer": 1,
    "explanation": "On December 9, 2009, P. Chidambaram, the then Union Minister of Home Affairs, made a landmark announcement stating that the Government of India would initiate the process of forming a separate state of Telangana."
  },
  {
    "id": 206,
    "question": "Kuo-Min-Tang [KMT] followed the political Philosophy based on the idea of (TSTET 11 Jan 2025)",
    "options": [
      "Sun Yat-sen",
      "Chiang Kai-shek",
      "Mao Zedong",
      "Hu Jintao"
    ],
    "correctAnswer": 0,
    "explanation": "The Kuomintang (KMT), or the Chinese Nationalist Party, was founded by Sun Yat-sen. Its ideology is built upon his 'Three Principles of the People': Nationalism (Mínzú), Democracy (Mínquán), and the People's Livelihood (Mínshēng)."
  },
  {
    "id": 207,
    "question": "Parivrajakas typically led the life (TSTET 11 Jan 2025)",
    "options": [
      "In fixed settlements",
      "Wandering from village to village",
      "In asrams",
      "In the royal court"
    ],
    "correctAnswer": 1,
    "explanation": "Parivrajakas were wandering ascetics or religious mendicants in ancient India. They renounced fixed abodes and family life, traveling on foot from place to place to pursue spiritual knowledge and discourse."
  },
  {
    "id": 208,
    "question": "The primary objective of the Cripps Mission in India was (TSTET 11 Jan 2025)",
    "options": [
      "To negotiate peace with Japan",
      "To gain Indian support for the British war effort",
      "To promote Hindu-Muslim unity",
      "To grant India full independence"
    ],
    "correctAnswer": 1,
    "explanation": "The Cripps Mission was sent to India by the British government in March 1942, during World War II. Its main purpose was to secure the full cooperation and support of Indian leaders for the British war effort against the Axis powers."
  },
  {
    "id": 209,
    "question": "Among the following, identify the statutory body (TSTET 11 Jan 2025)",
    "options": [
      "National Human Rights Commission",
      "The Election Commission",
      "The Union Public Service Commission",
      "The Finance Commission"
    ],
    "correctAnswer": 0,
    "explanation": "A statutory body is created by an Act of Parliament. The National Human Rights Commission (NHRC) was established in 1993 under the Protection of Human Rights Act. The other bodies listed are Constitutional Bodies, as they are established directly by the Constitution of India."
  },
  {
    "id": 210,
    "question": "Among the following, identify the power of the President of India (TSTET 11 Jan 2025)",
    "options": [
      "Dissolves Rajya Sabha and State Legislative Councils",
      "Calls for a joint session of the Parliament",
      "Nominates 12 members to Lok Sabha",
      "Decides whether a bill is a Money bill or an Ordinary bill"
    ],
    "correctAnswer": 1,
    "explanation": "Under Article 108 of the Constitution, the President of India can summon a joint sitting of both Houses of Parliament to resolve a deadlock over a non-money bill. The decision on a money bill rests with the Speaker of the Lok Sabha."
  },
  {
    "id": 211,
    "question": "Ravi is forced to work as a bonded labour for several years for the amount his father had received from the landlord. It would be a violation of this fundamental Right (TSTET 11 Jan 2025)",
    "options": [
      "Right to Equality",
      "Right to freedom",
      "Right against exploitation",
      "Right against Constitutional Remedies"
    ],
    "correctAnswer": 2,
    "explanation": "Article 23 of the Indian Constitution prohibits traffic in human beings, 'begar' (forced labour), and any other form of forced labour. Bonded labour is a direct violation of this fundamental Right against Exploitation."
  },
  {
    "id": 212,
    "question": "During National Emergency all or any of the Fundamental rights can be suspended by the Indian president except (TSTET 11 Jan 2025)",
    "options": [
      "Article 20 and 21 of the Indian Constitution",
      "Article 21 of the Indian Constitution only",
      "Article 19 of the Indian Constitution only",
      "Articles 19-21 of the Indian Constitution"
    ],
    "correctAnswer": 0,
    "explanation": "As per the 44th Amendment Act, 1978, even during a national emergency, the fundamental rights guaranteed under Article 20 (protection in respect of conviction for offenses) and Article 21 (protection of life and personal liberty) cannot be suspended."
  },
  {
    "id": 213,
    "question": "Which of the following DOES NOT come under Violation of Human Rights? (TSTET 11 Jan 2025)",
    "options": [
      "Denial of Right to information",
      "Delay in investigating of crimes",
      "Discriminations against women in the family",
      "Not providing employment by the Government in the Government sector"
    ],
    "correctAnswer": 3,
    "explanation": "While the state has a responsibility to create employment opportunities, not being able to provide a government job to every citizen is not considered a violation of human rights. The other options involve denial of justice, information, and equality, which are recognized human rights violations."
  },
  {
    "id": 214,
    "question": "This amendment of the Indian Constitution inserted a list of Fundamental Duties of Citizens to the constitution (TSTET 11 Jan 2025)",
    "options": [
      "42nd amendment",
      "44th Amendment",
      "61st Amendment",
      "52nd Amendment"
    ],
    "correctAnswer": 0,
    "explanation": "The Fundamental Duties of citizens were added to the Constitution of India by the 42nd Amendment in 1976, upon the recommendations of the Swaran Singh Committee. They are contained in Article 51-A."
  },
  {
    "id": 215,
    "question": "This article of the Indian Constitution states that no person shall be deprived of his life or personal liberty except according to the procedure established by law (TSTET 11 Jan 2025)",
    "options": [
      "Article 19",
      "Article 21",
      "Article 22",
      "Article 23"
    ],
    "correctAnswer": 1,
    "explanation": "Article 21 of the Indian Constitution is a cornerstone of fundamental rights, guaranteeing the protection of life and personal liberty and stating that no person can be deprived of these rights except through a legally established procedure."
  },
  {
    "id": 216,
    "question": "The preamble of the Indian Constitution reflects (TSTET 11 Jan 2025)",
    "options": [
      "Fundamental Duties of a citizen",
      "The Aims, Philosophy and Objectives",
      "The Principles of Liberalism",
      "Individual Rights"
    ],
    "correctAnswer": 1,
    "explanation": "The Preamble serves as the introduction to the Constitution and embodies its basic philosophy and fundamental values. It outlines the source of authority, the nature of the Indian State, and the objectives of the Constitution, such as securing justice, liberty, equality, and fraternity."
  },
  {
    "id": 217,
    "question": "Among the following, identify the correct statement regarding the cash reserves of banks (TSTET 11 Jan 2025)",
    "options": [
      "Banks do not keep any cash",
      "Banks keep a small proportion deposits as cash",
      "Banks keep all deposits as cash",
      "Banks invest all deposits"
    ],
    "correctAnswer": 1,
    "explanation": "Under the system of fractional-reserve banking, commercial banks are required to hold only a fraction of their customer deposits as reserves (either as vault cash or deposits with the central bank). The remainder of the deposits is available for lending."
  },
  {
    "id": 218,
    "question": "The typical relationship between the interest rates on which banks charge on loans and the interest rates they offer on deposits (TSTET 11 Jan 2025)",
    "options": [
      "The rate of interest will be the same",
      "Banks pay high interest rates on deposits",
      "Banks charge low interest rates on loans",
      "Banks charge high interest rates on loans"
    ],
    "correctAnswer": 3,
    "explanation": "A bank's business model relies on the interest rate spread. They charge a higher rate of interest on loans given to borrowers than the rate they pay on deposits from savers. This margin covers their operating costs and generates profit."
  },
  {
    "id": 219,
    "question": "Among the following food items, the item that is NOT included in \"the Food Price Index (FPI)\" (TSTET 11 Jan 2025)",
    "options": [
      "Beverages",
      "Wheat",
      "Pulses",
      "Rice"
    ],
    "correctAnswer": 0,
    "explanation": "The FAO Food Price Index (FPI) tracks the international prices of a basket of key food commodities. It primarily includes cereals, vegetable oils, sugar, meat, and dairy products. Processed items like beverages (coffee, tea, etc.) are not typically part of this index."
  },
  {
    "id": 220,
    "question": "Besides the people who have low-incomes, who else will suffer most when the rate of inflation is very high (TSTET 11 Jan 2025)",
    "options": [
      "Only wealthy investors",
      "Individuals who do not own property",
      "The people who invest savings in unproductive assets",
      "Only government employees"
    ],
    "correctAnswer": 2,
    "explanation": "High inflation erodes the purchasing power of money. Individuals who hold their savings in cash or in unproductive assets (like gold kept at home or land that doesn't generate income) suffer because the real value of their savings decreases over time."
  },
  {
    "id": 221,
    "question": "In the following way, the goldsmiths contributed to the development of paper money (TSTET 11 Jan 2025)",
    "options": [
      "By charging fees for currency exchange",
      "By issuing receipts for stored coins, leading to a new system of paper money",
      "By minting coins that were widely accepted",
      "By creating a national bank"
    ],
    "correctAnswer": 1,
    "explanation": "Historically, people would deposit their valuable coins with goldsmiths for safekeeping, for which the goldsmith would issue a receipt. Over time, these receipts began to circulate as a medium of exchange, as they were easier and safer to carry than actual coins. This practice was a precursor to modern banknotes."
  },
  {
    "id": 222,
    "question": "Because of this reason, the traders in the earlier days preferred bank receipts over physical coins (TSTET 11 Jan 2025)",
    "options": [
      "Bank receipts were easier to carry",
      "Bank receipts were accepted only in certain regions",
      "Bank receipts could be easily exchanged for goods",
      "Bank receipts were more valuable than coins"
    ],
    "correctAnswer": 0,
    "explanation": "The primary advantage of bank receipts (early forms of paper money) for traders was their portability and security. Carrying large sums of heavy, bulky coins for trade was inconvenient and risky, whereas paper receipts were lightweight and easier to handle."
  },
  {
    "id": 223,
    "question": "One of the following benefits is provided to the account holders through the PM Jan Dhan Yojana (TSTET 11 Jan 2025)",
    "options": [
      "A Rupay debit card shall be issued, in the same way Rs. 1 lakh accident insurance shall be provided",
      "A credit card with a high credit limit shall be issued",
      "A monthly cash allowance is provided",
      "Free access to international money transfers"
    ],
    "correctAnswer": 0,
    "explanation": "The Pradhan Mantri Jan Dhan Yojana (PMJDY) is a national mission for financial inclusion. Its key features include providing a basic savings bank account, a RuPay debit card, and an inbuilt accident insurance cover for the account holder."
  },
  {
    "id": 224,
    "question": "The maximum amount of debits allowed in a Small Account in a month is (TSTET 11 Jan 2025)",
    "options": [
      "Rs. 5,000",
      "Rs. 10,000",
      "Rs. 20,000",
      "Rs. 15,000"
    ],
    "correctAnswer": 1,
    "explanation": "According to the Reserve Bank of India (RBI) guidelines, a 'Small Account' opened with simplified KYC norms has certain limitations, including that the total withdrawals and transfers in a single month cannot exceed ₹10,000."
  },
  {
    "id": 225,
    "question": "The primary focus of the Public Distribution System (PDS) in India is (TSTET 11 Jan 2025)",
    "options": [
      "Promoting agricultural exports",
      "Ensuring access to food grains",
      "Providing free meals to all",
      "Regulating food prices"
    ],
    "correctAnswer": 1,
    "explanation": "The Public Distribution System (PDS) is a food security system established by the Government of India. Its main objective is to distribute essential food grains like wheat and rice at subsidized prices to the poorer sections of society, thus ensuring food security."
  },
  {
    "id": 226,
    "question": "One of the following is NOT considered a requirement as a factor of production (TSTET 11 Jan 2025)",
    "options": [
      "Government regulations",
      "Capital including tools and machines",
      "Labour which includes skilled and unskilled",
      "Land and other natural resources"
    ],
    "correctAnswer": 0,
    "explanation": "The traditional factors of production in economics are Land, Labour, Capital, and Entrepreneurship. Government regulations are external conditions or the legal framework within which production takes place, not a factor of production itself."
  },
  {
    "id": 227,
    "question": "The significant outcome of the Arab Spring in 2010-11 was (TSTET 11 Jan 2025)",
    "options": [
      "It caused a decline in media influence",
      "It was primarily a cultural movement without political implications",
      "It resulted in the uprooting of dictators in several nations",
      "It led to the establishment of new trade agreements"
    ],
    "correctAnswer": 2,
    "explanation": "The Arab Spring was a series of pro-democracy uprisings that spread across several Arab nations. One of its most significant and immediate consequences was the overthrow of long-standing authoritarian rulers and dictators in countries like Tunisia, Egypt, and Libya."
  },
  {
    "id": 228,
    "question": "The share of agriculture in a country's GDP over a period of 43-years since independence (TSTET 11 Jan 2025)",
    "options": [
      "It has become the dominant sector",
      "It fell down drastically",
      "It remained constant",
      "It increased significantly"
    ],
    "correctAnswer": 1,
    "explanation": "As a country's economy develops, the share of the primary sector (agriculture) in the GDP typically declines while the shares of the secondary (industry) and tertiary (services) sectors increase. In India, since independence, the rapid growth of the services and industrial sectors has caused the percentage contribution of agriculture to the national GDP to fall drastically."
  },
  {
    "id": 229,
    "question": "Among the following identify the learning experience placed at fourth from base of the cone in the order of increasing abstractness in Edgar Dale's cone of experiences (TSTET 11 Jan 2025)",
    "options": [
      "Field Trips",
      "Demonstration",
      "Exhibits",
      "Dramatic participation"
    ],
    "correctAnswer": 0,
    "explanation": "Edgar Dale's Cone of Experience arranges learning from most concrete (base) to most abstract (top). The order from the base is: Direct Experiences, Contrived Experiences, Dramatic Participation, Demonstrations, Field Trips, Exhibits, etc. Among the choices, Dramatic Participation is most concrete, followed by Demonstration, then Field Trips. Based on the options provided and moving from concrete towards abstract, Field Trips would be positioned after Demonstrations and Dramatic Participation."
  },
  {
    "id": 230,
    "question": "As a social studies teacher which of the following would you include in the syllabus for teaching major challenges still prevailing in contemporary society in India. (TSTET 11 Jan 2025)",
    "options": [
      "A) Religiousness",
      "B) Discrimination among women",
      "C) Child Abuse",
      "D) Regionalism"
    ],
    "correctAnswer": 1,
    "explanation": "Discrimination against women (B), child abuse (C), and divisive regionalism (D) are all significant and widely recognized social challenges in modern India. 'Religiousness' (A), the state of being religious, is not in itself a social problem, unlike religious extremism or communalism."
  },
  {
    "id": 231,
    "question": "The essential terms and definitions relating to a topic in social studies relate to this objective (TSTET 11 Jan 2025)",
    "options": [
      "Skill",
      "Application",
      "Knowledge",
      "Appreciation"
    ],
    "correctAnswer": 2,
    "explanation": "In Bloom's Taxonomy of educational objectives, the 'Knowledge' level is the most fundamental. It involves the recall of facts, basic concepts, and answers, which includes knowing and remembering essential terms and their definitions."
  },
  {
    "id": 232,
    "question": "Among the following, which are INCORRECT statements regarding aims and objectives of social studies (TSTET 11 Jan 2025)",
    "options": [
      "A) Aims are the steps to achieve the objectives",
      "B) Objectives may not change as per the content",
      "C) Aims are general and long term achievable",
      "Correct answer: A & B only"
    ],
    "correctAnswer": 0,
    "explanation": "Statement (A) is incorrect because the relationship is reversed: objectives are specific, measurable steps to achieve broad, long-term aims. Statement (B) is incorrect because learning objectives are content-specific and must change with the topic. Statement (C) is correct. Therefore, the incorrect statements are A and B."
  },
  {
    "id": 233,
    "question": "The following Curriculum Framework of Teacher Education suggested giving priority for practicum, life skills and self and participatory learning in pre-service teacher education programmes. (TSTET 11 Jan 2025)",
    "options": [
      "NCF-2000",
      "NCFTE-2009",
      "NCF-1975",
      "NCF-1988"
    ],
    "correctAnswer": 1,
    "explanation": "The National Curriculum Framework for Teacher Education (NCFTE) 2009 specifically emphasized the need for teacher education programs to focus on hands-on practical experience (practicum), development of life skills, and fostering an environment of self-directed and participatory learning."
  },
  {
    "id": 234,
    "question": "Match the following List - A with List - B. A) Projected Aids, B) Two-dimensional Aids, C) Three-dimensional Aids, D) Activity Aids with i) Charts, ii) Dramatisations, iii) Films Strips, iv) Replicas (TSTET 11 Jan 2025)",
    "options": [
      "A-iv; B-i; C-ii; D-iii",
      "A-iv; B-iii; C-ii; D-i",
      "A-iii; B-i; C-iv; D-ii",
      "A-iii; B-iv; C-i; D-ii"
    ],
    "correctAnswer": 2,
    "explanation": "The correct matches are: A) Projected Aids match with iii) Film Strips, as they require projection. B) Two-dimensional Aids match with i) Charts, which are flat. C) Three-dimensional Aids match with iv) Replicas, which are models with depth. D) Activity Aids match with ii) Dramatisations, which involve active participation."
  },
  {
    "id": 235,
    "question": "Primary source among the following for knowing about India during medieval period (TSTET 11 Jan 2025)",
    "options": [
      "Text books",
      "Articles in National Journals",
      "Teacher Notes",
      "Inscriptions"
    ],
    "correctAnswer": 3,
    "explanation": "Primary sources are original materials from the time period being studied. Inscriptions, which are writings carved onto stone or metal, are a direct piece of evidence from the medieval period. Textbooks, articles, and notes are secondary sources created later by analyzing primary sources."
  },
  {
    "id": 236,
    "question": "Which of the following would you include for giving a project work on non-renewable resource for power generation? (TSTET 11 Jan 2025)",
    "options": [
      "Coal",
      "Biomass",
      "Solar",
      "Tidal"
    ],
    "correctAnswer": 0,
    "explanation": "Non-renewable resources are finite and are consumed much faster than they can be replaced by natural processes. Coal is a fossil fuel, a classic example of a non-renewable resource used extensively for power generation. Solar, biomass, and tidal are all forms of renewable energy."
  },
  {
    "id": 237,
    "question": "Identify the correct sequence of steps while teaching in 5E learning model. (TSTET 11 Jan 2025)",
    "options": [
      "Engage, Explain, Explore, Elaborate, Evaluation",
      "Explain, Explore, Engage, Elaborate, Evaluation",
      "Engage, Explore, Explain, Elaborate, Evaluation",
      "Explain, Engage, Explore, Elaborate, Evaluation"
    ],
    "correctAnswer": 2,
    "explanation": "The 5E model is an inquiry-based instructional model. The correct sequence is: Engage (capture student interest), Explore (students interact with the concept), Explain (students and teacher articulate the concept), Elaborate (students apply the concept to new situations), and Evaluate (assess understanding)."
  },
  {
    "id": 238,
    "question": "The total number of working days and total number of periods available for teaching-learning of social studies is reflected in this plan (TSTET 11 Jan 2025)",
    "options": [
      "Unit",
      "Year",
      "Period",
      "Micro"
    ],
    "correctAnswer": 1,
    "explanation": "A Year Plan (or Annual Plan) is a comprehensive instructional plan for the entire academic year. It involves breaking down the syllabus and allocating units and lessons across the total number of working days and teaching periods available."
  },
  {
    "id": 239,
    "question": "In Anderson, L.W. & Krathwol, D.R. two-dimensional classification of Educational Objectives, 'Invent' comes at the intersection of this knowledge and cognitive process dimensions respectively (TSTET 11 Jan 2025)",
    "options": [
      "Meta cognitive knowledge and Creating",
      "Factual knowledge and Remembering",
      "Conceptual knowledge and Understanding",
      "Procedural knowledge and Applying"
    ],
    "correctAnswer": 0,
    "explanation": "In Anderson and Krathwohl's revised taxonomy, 'Invent' is a key action verb associated with the highest cognitive process, 'Creating'. This creative process often relies on 'Metacognitive knowledge'—the awareness of one's own cognition and strategies—to generate new ideas or products."
  },
  {
    "id": 240,
    "question": "Match the following List - A with List - B. A) Conceptual understanding, B) Appreciation - Sensitivity, C) Information skills with i) 15%, ii) 40%, iii) 10% weightage in SA (TSTET 11 Jan 2025)",
    "options": [
      "A-ii: B-i; C-iii",
      "A-iii; B-i; C-ii",
      "A-i; B-ii; C-iii",
      "A-ii; B-iii; C-i"
    ],
    "correctAnswer": 3,
    "explanation": "Based on the standard weightage for academic standards in Social Studies for Summative Assessment (SA) in Telangana, the typical distribution is: A) Conceptual understanding - 40%; B) Appreciation and Sensitivity - 10%; C) Information skills - 15%. Therefore, the correct match is A-ii, B-iii, C-i."
  },
  {
    "id": 241,
    "question": "Which of the following statement correctly describes \"Solar Insolation\"? (TSTET 12 Jan 2025)",
    "options": [
      "The amount of solar radiation received on the surface of the Earth",
      "The amount of solar radiation absorbed by the water on the earth",
      "The total amount of solar energy reflected back from the surface of the earth",
      "The distribution of solar energy in the atmosphere"
    ],
    "correctAnswer": 0,
    "explanation": "Solar insolation, an abbreviation for 'incoming solar radiation', refers to the total amount of solar energy or radiation that reaches the Earth's surface. It is a fundamental driver of Earth's weather and climate systems."
  },
  {
    "id": 242,
    "question": "Out of the eight planets of our Solar System, identify the inner planets (TSTET 12 Jan 2025)",
    "options": [
      "Mercury, Saturn, Jupiter and Neptune",
      "Earth, Saturn, Jupiter and Neptune",
      "Mercury, Venus, Earth and Mars",
      "Venus, Saturn, Jupiter and Neptune"
    ],
    "correctAnswer": 2,
    "explanation": "The inner planets, also known as the terrestrial planets, are the four planets closest to the Sun. They are Mercury, Venus, Earth, and Mars. They are characterized by their solid, rocky compositions."
  },
  {
    "id": 243,
    "question": "The Himalayan rivers, after descending from the mountains deposit pebbles in a narrow belt of about 8 to 16 km in width lying parallel to the slopes of the Siwaliks. This nature of soil is known as (TSTET 12 Jan 2025)",
    "options": [
      "Khader",
      "Terai",
      "Bhabar",
      "Bhangar"
    ],
    "correctAnswer": 2,
    "explanation": "The Bhabar is a narrow, porous belt at the foothills of the Himalayas, particularly along the slopes of the Siwaliks. It is formed by rivers depositing coarse materials like pebbles and boulders, making it highly porous."
  },
  {
    "id": 244,
    "question": "The Deccan Plateau is (TSTET 12 Jan 2025)",
    "options": [
      "Higher in the west and slopes gently towards east",
      "Wider in the south and narrower in the north",
      "Higher in the east and slopes gently westwards",
      "Higher in the South and slopes gently northwards"
    ],
    "correctAnswer": 0,
    "explanation": "The general elevation of the Deccan Plateau is higher in the west due to the presence of the Western Ghats and it slopes gently eastwards towards the Bay of Bengal. This topography dictates the east-flowing direction of major peninsular rivers like the Godavari, Krishna, and Kaveri."
  },
  {
    "id": 245,
    "question": "The main purpose of Paris Summit, 2015 was (TSTET 12 Jan 2025)",
    "options": [
      "To eradicate poverty throughout the world",
      "To attain cent percent literacy in central Asia",
      "To ensure that the children enjoy the child rights",
      "To reduce greenhouse gas emissions"
    ],
    "correctAnswer": 3,
    "explanation": "The 2015 Paris Summit, also known as COP21, led to the landmark Paris Agreement. Its primary objective is to combat climate change by limiting global warming, which requires significant reductions in global greenhouse gas emissions."
  },
  {
    "id": 246,
    "question": "Locally, these mountain ranges are known as Mizo hills, Naga Hills, Manipur Hills and Patkai Hills (TSTET 12 Jan 2025)",
    "options": [
      "Punjab Himalayas",
      "Hindu Kush Mountain ranges",
      "Purvanchal Hills",
      "Kunlun Mountain Ranges"
    ],
    "correctAnswer": 2,
    "explanation": "The Purvanchal Range, or Eastern Mountains, is a sub-mountain range of the Himalayas in Northeast India. It comprises several local hill ranges, including the Patkai Hills, Naga Hills, Mizo Hills, and Manipur Hills."
  },
  {
    "id": 247,
    "question": "In India, over 97 per cent of coal reserves are found in this region (TSTET 12 Jan 2025)",
    "options": [
      "Damodar, Sone, Mahanadi and Godavari",
      "Indo Gangetic Plain region",
      "Assam, Gujarat and Mumbai High Region",
      "East and West Coast Plain Region and Sundarbans region"
    ],
    "correctAnswer": 0,
    "explanation": "The vast majority of India's coal reserves, particularly the Gondwana coalfields which account for over 97% of the total, are located in the river valleys of the Damodar, Sone, Mahanadi, and Godavari."
  },
  {
    "id": 248,
    "question": "It is due to Western Ghats, this part of the Deccan Plateau receive very less rainfall (TSTET 12 Jan 2025)",
    "options": [
      "The northern",
      "The Southern",
      "The Eastern",
      "The Central"
    ],
    "correctAnswer": 2,
    "explanation": "The Western Ghats create a rain shadow effect. They block the moisture-laden monsoon winds from the west, causing heavy rainfall on the windward (western) side and leaving the leeward (eastern) part of the Deccan Plateau dry with very little rainfall."
  },
  {
    "id": 249,
    "question": "The longitudinal Valleys lying in between these mountains are known as 'Duns' (TSTET 12 Jan 2025)",
    "options": [
      "Greater Himalayas and Lesser Himalayas",
      "Punjab Himalayas and Kumaon Himalayas",
      "Lesser Himalayas and Purvanchal Hills",
      "Lesser Himalayas and Siwalik ranges"
    ],
    "correctAnswer": 3,
    "explanation": "'Duns' are distinctive longitudinal valleys that are situated between the Lesser Himalayas (Himachal) and the outermost Himalayan range, the Siwaliks. Dehradun is a classic example of a Dun valley."
  },
  {
    "id": 250,
    "question": "The Tropic of Cancer is NOT passing through one of these states of India (TSTET 12 Jan 2025)",
    "options": [
      "Tripura",
      "Mizoram",
      "Manipur",
      "Rajasthan"
    ],
    "correctAnswer": 2,
    "explanation": "The Tropic of Cancer passes through eight Indian states: Gujarat, Rajasthan, Madhya Pradesh, Chhattisgarh, Jharkhand, West Bengal, Tripura, and Mizoram. It does not pass through Manipur."
  },
  {
    "id": 251,
    "question": "As per the Human Development Report, 2021, the Asian countries which are categorised under the Medium Human Development (TSTET 12 Jan 2025)",
    "options": [
      "Sri Lanka and China",
      "Japan and India",
      "India and Sri Lanka",
      "India and Bangladesh"
    ],
    "correctAnswer": 3,
    "explanation": "According to the 2021-22 Human Development Report, both India (rank 132) and Bangladesh (rank 129) were placed in the 'Medium human development' category. Sri Lanka and China were in the 'High' category, while Japan was in the 'Very High' category."
  },
  {
    "id": 252,
    "question": "The Oceanic Trenches namely the Challenger and Puertorico are in these oceans respectively (TSTET 12 Jan 2025)",
    "options": [
      "The Pacific Ocean and the Antarctic Ocean",
      "The Atlantic Ocean and the Indian Ocean",
      "The Pacific Ocean and the Atlantic Ocean",
      "The Pacific Ocean and the Indian Ocean"
    ],
    "correctAnswer": 2,
    "explanation": "The Challenger Deep, the deepest known point on Earth, is located in the Mariana Trench in the western Pacific Ocean. The Puerto Rico Trench is the deepest point in the Atlantic Ocean."
  },
  {
    "id": 253,
    "question": "In 1948, the Declaration of Human Rights was passed by the (TSTET 12 Jan 2025)",
    "options": [
      "UN Security Council",
      "UN General Assembly",
      "UNESCO",
      "International Court of Justice"
    ],
    "correctAnswer": 1,
    "explanation": "The Universal Declaration of Human Rights (UDHR) was a milestone document proclaimed by the United Nations General Assembly in Paris on December 10, 1948."
  },
  {
    "id": 254,
    "question": "The land boundary of India and the total length of the coastline of the mainland including Andaman & Nicobar Islands and Lakshadweep is (TSTET 12 Jan 2025)",
    "options": [
      "25,425 kms and 6,000 kms",
      "15,200 kms and 7,516 kms",
      "15,750 kms and 7,516 kms",
      "5,250 kms and 7,516 kms"
    ],
    "correctAnswer": 1,
    "explanation": "India has a total land boundary of approximately 15,200 km. The entire coastline, which includes the mainland as well as the island territories of Andaman & Nicobar and Lakshadweep, is 7,516.6 km."
  },
  {
    "id": 255,
    "question": "In India, these forests are found abundantly in the Himalayan Mountains (TSTET 12 Jan 2025)",
    "options": [
      "Tropical Deciduous forests",
      "Mediterranean Vegetation",
      "Temperate Deciduous forests",
      "Coniferous forests"
    ],
    "correctAnswer": 3,
    "explanation": "Coniferous forests, also called montane forests, are characteristic of the higher altitudes of the Himalayas. These forests are dominated by cone-bearing trees like pine, deodar, fir, and spruce that are adapted to cold climates."
  },
  {
    "id": 256,
    "question": "This tax is levied on the production of goods and sale of services (TSTET 12 Jan 2025)",
    "options": [
      "Corporate Tax",
      "Customs Duty",
      "Goods and Service Tax",
      "Octroi Tax"
    ],
    "correctAnswer": 2,
    "explanation": "The Goods and Services Tax (GST) is a comprehensive indirect tax levied on the supply of goods and services. It has replaced numerous other indirect taxes, including those on production (like excise duty) and the sale of services (like service tax)."
  },
  {
    "id": 257,
    "question": "The banks primarily use the majority of their deposits for (TSTET 12 Jan 2025)",
    "options": [
      "paying interest to depositors",
      "purchasing lands in real estate",
      "extending loans to the needy",
      "maintaining cash reserves"
    ],
    "correctAnswer": 2,
    "explanation": "The core function of a commercial bank is financial intermediation. They accept deposits from the public and use the majority of these funds to provide loans to individuals and businesses, thereby facilitating economic activity."
  },
  {
    "id": 258,
    "question": "Which of the following statements best describes the term the \"Price Index\"? (TSTET 12 Jan 2025)",
    "options": [
      "It compares the quality of different goods",
      "It predicts future prices of goods",
      "It determines the exact price of a single good",
      "It measures the overall change in prices of goods over time"
    ],
    "correctAnswer": 3,
    "explanation": "A price index is a statistical measure designed to help compare how the overall price level of a basket of goods and services changes over time. It is a key indicator of inflation."
  },
  {
    "id": 259,
    "question": "Which of the following statement correctly describes the phrase \"the Black Money\"? (TSTET 12 Jan 2025)",
    "options": [
      "Money earned through legal and illegal means",
      "Money deposited in foreign banks legally",
      "Money received from government welfare programs",
      "Money generated from illegal or income unreported"
    ],
    "correctAnswer": 3,
    "explanation": "\"Black money\" refers to funds that are not fully legitimate. This includes money generated from illegal activities or income that has been concealed from tax authorities and is therefore unreported."
  },
  {
    "id": 260,
    "question": "Which of the following districts of Telangana are located in the Lower Telangana Plateau? (TSTET 12 Jan 2025)",
    "options": [
      "Mahabubabad, Warangal, Khammam",
      "Vikarabad, Narayanpet, Rangareddy",
      "Medak, Sangareddy, Nizamabad",
      "Medak, Siddipet, Kamareddy"
    ],
    "correctAnswer": 0,
    "explanation": "The Telangana plateau is broadly divided into the higher western part and the lower eastern part. The districts of Mahabubabad, Warangal, and Khammam are situated in the eastern part, which corresponds to the Lower Telangana Plateau."
  },
  {
    "id": 261,
    "question": "Since independence, the share of Service Sector activities in GDP in India is (TSTET 12 Jan 2025)",
    "options": [
      "It has not changed",
      "It has decreased significantly",
      "It has become less important than agriculture",
      "There has been a tremendous increase"
    ],
    "correctAnswer": 3,
    "explanation": "Since India's independence, and especially after the economic reforms of the 1990s, the contribution of the service sector to the nation's Gross Domestic Product (GDP) has seen a tremendous increase. It is now the largest sector of the Indian economy."
  },
  {
    "id": 262,
    "question": "Identify the Non - ferrous metals from among the following (TSTET 12 Jan 2025)",
    "options": [
      "Bauxite, tin, Copper",
      "Manganese, Nickel, Cobalt",
      "Cobalt, Aluminium, Nickel",
      "Mica, Gold, Manganese"
    ],
    "correctAnswer": 0,
    "explanation": "Non-ferrous metals are those that do not contain iron in significant amounts. Bauxite (the ore for aluminum), tin, and copper are classic examples of non-ferrous metals. Manganese, nickel, and cobalt are ferrous metals."
  },
  {
    "id": 263,
    "question": "If the average price of goods in the base year is set at 100, then the Price Index of 125 indicates that (TSTET 12 Jan 2025)",
    "options": [
      "Prices have been doubled",
      "Prices have remained the same",
      "Prices have increased by 25%",
      "Prices have decreased by 25%"
    ],
    "correctAnswer": 2,
    "explanation": "A price index measures percentage change from a base period, which is set at an index value of 100. Therefore, an index value of 125 signifies a 25-point increase from the base of 100, which translates to a 25% increase in prices."
  },
  {
    "id": 264,
    "question": "Which of the following statement best describes the Phrase \"Mean years of Schooling\"? (TSTET 12 Jan 2025)",
    "options": [
      "The average number of completed years of education of a country's population aged 25 years and above",
      "The average number of school going children in the age group of 6 to 14 years",
      "The number of children in the age group of 6 to 14 years who have completed elementary school",
      "The average number of children who reached secondary school on completion of primary education"
    ],
    "correctAnswer": 0,
    "explanation": "The 'Mean Years of Schooling' is a specific social indicator used in the Human Development Index (HDI). It represents the average number of years of education received by people aged 25 and older in a country."
  },
  {
    "id": 265,
    "question": "\"Disguised unemployment\" means (TSTET 12 Jan 2025)",
    "options": [
      "Engaging less number of people than required",
      "Engaging more number of people than required",
      "Paying less than the actual amount",
      "Paying more than the actual amount"
    ],
    "correctAnswer": 1,
    "explanation": "Disguised unemployment occurs when more people are employed in a job than are actually needed. The marginal productivity of the surplus labor is zero, meaning that if some workers were removed, the total output would not decrease. It is common in the agricultural sector of developing countries."
  },
  {
    "id": 266,
    "question": "In India, this act provides penalties for preventing a person from entering a place of worship or from taking water from a tank or well (TSTET 12 Jan 2025)",
    "options": [
      "The protection of Civil Rights Act, 1955",
      "The Enabling Act, 1933",
      "The Protection of Human Rights Act, 1993",
      "The protection of Civil Rights Act, 1951"
    ],
    "correctAnswer": 0,
    "explanation": "The Protection of Civil Rights Act, 1955, aims to enforce the abolition of untouchability (as per Article 17 of the Constitution). It prescribes penalties for enforcing disabilities, such as preventing access to public places of worship, shops, and water sources."
  },
  {
    "id": 267,
    "question": "Identify the federal feature of the Indian Constitution from among the following (TSTET 12 Jan 2025)",
    "options": [
      "Representation of states in the upper chamber of Union Legislature",
      "Single integrated Judiciary",
      "Role of All India Services personnel in the Administration of states",
      "Governors acting as the agents of Union Government"
    ],
    "correctAnswer": 0,
    "explanation": "A key characteristic of a federal system is the representation of the constituent states in the central legislature. In India, the Rajya Sabha (Council of States) is the upper chamber where states are represented, upholding this federal principle. The other options are examples of unitary (non-federal) features."
  },
  {
    "id": 268,
    "question": "Among the following, the statement that correctly describes the term \"Universal Adult Franchise\" (TSTET 12 Jan 2025)",
    "options": [
      "Provision of the right to vote to all women without any discrimination only",
      "Provision of the right to vote to all the citizens irrespective of age limit",
      "Provision of the right to vote to all the citizens who attained the age of 18 years without any discrimination",
      "Provision of the right to vote only to educated citizens in the country without any discrimination"
    ],
    "correctAnswer": 2,
    "explanation": "Universal Adult Franchise means that all adult citizens, upon reaching a certain age (18 in India), have the right to vote in elections, without any discrimination based on caste, religion, race, sex, or economic status."
  },
  {
    "id": 269,
    "question": "As per the Immoral Trafficking (Prevention) Act, 1956 and the Amendment Act, 2006, the punishment for involving in Human Immoral Trafficking was (TSTET 12 Jan 2025)",
    "options": [
      "Seven-years rigorous imprisonment to life along with penalty",
      "Two- years rigorous imprisonment along with penalty of 1.0 lakh",
      "Five- years rigorous imprisonment to life along with penalty of 25.0 lakhs",
      "One- year rigorous imprisonment only"
    ],
    "correctAnswer": 0,
    "explanation": "The Immoral Trafficking (Prevention) Act, 1956, and its amendments prescribe severe punishments. For trafficking a person, the penalty includes rigorous imprisonment for a term of not less than seven years, which can be extended to life imprisonment, along with a significant fine."
  },
  {
    "id": 270,
    "question": "Which of the following activity comes under the violation of Fundamental Rights? (TSTET 12 Jan 2025)",
    "options": [
      "Arresting the person and informing the grounds for his arrest",
      "Allowing the person to reside and settle in any part of the territory of India",
      "Allowing the citizens to express their views in many ways such as through meetings, publications etc.",
      "Employing the child below the age of 14 years in the factory to work"
    ],
    "correctAnswer": 3,
    "explanation": "Article 24 of the Indian Constitution, which is part of the Fundamental Right against Exploitation, explicitly prohibits the employment of children below the age of 14 in factories, mines, or any other hazardous occupations. This is a direct violation of a child's fundamental rights."
  },
  {
    "id": 271,
    "question": "On 1st November, 1996 Telangana Vidroha Dinam was observed in Warangal by a group of intellectuals headed by (TSTET 12 Jan 2025)",
    "options": [
      "Prof. Kodandaram",
      "Prof. Jayashankar",
      "K. Chandrashekar Rao",
      "Marri Chenna Reddy"
    ],
    "correctAnswer": 1,
    "explanation": "Professor K. Jayashankar, a key ideologue of the separate Telangana movement, led a group of intellectuals in observing November 1st (the formation day of Andhra Pradesh) as 'Telangana Vidroha Dinam' or 'Telangana Betrayal Day' in Warangal in 1996 to protest the perceived injustices meted out to the region."
  },
  {
    "id": 272,
    "question": "Under this writ, the court orders a lower court to transfer a matter pending before it to the higher court (TSTET 12 Jan 2025)",
    "options": [
      "Habeas Corpus",
      "Mandamus",
      "Prohibition",
      "Certiorari"
    ],
    "correctAnswer": 3,
    "explanation": "The writ of Certiorari is issued by a superior court to a lower court or tribunal. It is used to quash an order already passed by an inferior court or to transfer a pending case from the inferior court to the superior court."
  },
  {
    "id": 273,
    "question": "As per this, 'it shall be the duty of every citizen of India to maintain the unity and integrity of India' (TSTET 12 Jan 2025)",
    "options": [
      "Directive Principle of the State Policy",
      "Fundamental Right",
      "Fundamental Duty",
      "Moral Right"
    ],
    "correctAnswer": 2,
    "explanation": "This statement is part of the Fundamental Duties listed in Article 51-A of the Indian Constitution. Specifically, Article 51-A(c) states that it is the duty of every citizen 'to uphold and protect the sovereignty, unity and integrity of India.'"
  },
  {
    "id": 274,
    "question": "The permanent seat of the United Nations Security Council held by this government has been given to China (TSTET 12 Jan 2025)",
    "options": [
      "Chiang Kai Shek Government",
      "Sun Yet Sen Government",
      "Mao Government",
      "Manchu Dynasty"
    ],
    "correctAnswer": 0,
    "explanation": "The Republic of China (ROC), under Chiang Kai-shek's government, was a founding member of the UN and held a permanent seat on the Security Council. In 1971, UN General Assembly Resolution 2758 transferred this seat to the People's Republic of China (PRC)."
  },
  {
    "id": 275,
    "question": "One of the following was the member of State's Reorganisation Commission, 1953 (TSTET 12 Jan 2025)",
    "options": [
      "Hriday Nath Kunzru",
      "Prof. Ranbir Singh",
      "Dr. Abusaleh Sharief",
      "Vinod K Duggal"
    ],
    "correctAnswer": 0,
    "explanation": "The States Reorganisation Commission, formed in 1953, consisted of three members: Fazal Ali as the chairman, and K. M. Panikkar and Hriday Nath Kunzru as the other two members."
  },
  {
    "id": 276,
    "question": "In India, the maximum number of ministers allowed in the Union Council of Ministers (TSTET 12 Jan 2025)",
    "options": [
      "20% of Lok Sabha members",
      "20% of the members of Lok Sabha and Rajya Sabha",
      "15% of Lok Sabha members",
      "15% of the members of Lok Sabha and Rajya Sabha"
    ],
    "correctAnswer": 2,
    "explanation": "The 91st Constitutional Amendment Act of 2003 stipulated that the total number of ministers, including the Prime Minister, in the Union Council of Ministers shall not exceed 15% of the total strength of the Lok Sabha."
  },
  {
    "id": 277,
    "question": "\"Amitraghata\" was the title of this Mauryan ruler (TSTET 12 Jan 2025)",
    "options": [
      "Chandragupta Maurya",
      "Ashoka",
      "Bindusara",
      "Samprati"
    ],
    "correctAnswer": 2,
    "explanation": "Bindusara, the son of Chandragupta Maurya and the second Mauryan emperor, was known by the title 'Amitraghata', which in Sanskrit means 'slayer of enemies'. Greek sources refer to him as Amitrochates."
  },
  {
    "id": 278,
    "question": "King Dangadeva constructed the Khandariya Mahadeva Temple which was dedicated to Lord Shiva belonged to this dynasty (TSTET 12 Jan 2025)",
    "options": [
      "Gupta Dynasty",
      "Chola Dynasty",
      "Pallava Dynasty",
      "Chandela Dynasty"
    ],
    "correctAnswer": 3,
    "explanation": "The Kandariya Mahadeva Temple, located at the Khajuraho complex, is a masterpiece of Indian temple architecture. It was built around 1030 AD by King Dhangadeva of the Chandela dynasty that ruled Central India."
  },
  {
    "id": 279,
    "question": "This Act of the British Government curbed fundamental Rights such as the freedom of expression and strengthened police powers (TSTET 12 Jan 2025)",
    "options": [
      "Rowlatt Act of 1919",
      "Ilbert Bill, 1883",
      "Govt of India Act, 1833",
      "Regulating Act of 1773"
    ],
    "correctAnswer": 0,
    "explanation": "The Rowlatt Act of 1919 gave the British colonial government extensive powers to suppress political activities. It allowed for the detention of political prisoners without trial for up to two years and severely restricted civil liberties, including the freedom of expression."
  },
  {
    "id": 280,
    "question": "Which of the following statement rightly describes the term \"Secularism\" (TSTET 12 Jan 2025)",
    "options": [
      "The state is one that does not confer any privilege or favour on any particular religion",
      "The state which accepts a particular religion as their state religion",
      "The state which does not allow any religion in their state",
      "The state which accepts all the religions as their state religions"
    ],
    "correctAnswer": 0,
    "explanation": "Secularism implies that the state should remain neutral in matters of religion. A secular state does not have an official religion, treats all religions equally, and does not grant any special privileges or favors to any particular faith."
  },
  {
    "id": 281,
    "question": "In Cave 15 of Ellora, the picture showing Vishnu as Narasimha, the Man Lion' was the work of this period (TSTET 12 Jan 2025)",
    "options": [
      "Pallavas",
      "Chahamanas",
      "Chalukyas",
      "Rashtrakutas"
    ],
    "correctAnswer": 3,
    "explanation": "Cave 15 at the Ellora Caves, also known as the Dashavatara Cave, dates back to the Rashtrakuta period. It contains remarkable sculptures from Hindu mythology, including a famous panel depicting Vishnu in his Narasimha (man-lion) avatar."
  },
  {
    "id": 282,
    "question": "In the European History, the thought of the Early Modern Period' was dominated by the idea of (TSTET 12 Jan 2025)",
    "options": [
      "Human freedom and equality",
      "Nationalism and religious patriotism",
      "Patriotism and struggle for freedom",
      "Development and unity of the nations"
    ],
    "correctAnswer": 0,
    "explanation": "The Early Modern Period in Europe, which included the Renaissance, Reformation, and the Enlightenment, saw a profound shift in thinking. The Enlightenment, in particular, championed ideas of reason, individualism, and natural rights, leading to a dominant focus on human freedom and equality."
  },
  {
    "id": 283,
    "question": "In the Declaration of American Independence, Thomas Jefferson declared that all the men are created equal and are endowed by the creator with certain rights which cannot be taken away. Those rights include (TSTET 12 Jan 2025)",
    "options": [
      "Right to life, Liberty and freedom of opinion",
      "Right to life, freedom of speech and equality before law",
      "Right to life, liberty and pursuit of happiness",
      "Right to life, pursuit of happiness and equality before law"
    ],
    "correctAnswer": 2,
    "explanation": "The famous line from the U.S. Declaration of Independence reads: \"We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.\""
  },
  {
    "id": 284,
    "question": "Ems telegram was associated with this war (TSTET 12 Jan 2025)",
    "options": [
      "Prussia's war with Denmark",
      "Austro-Prussian war",
      "Franco-Prussian war",
      "Battle of Waterloo, 1815"
    ],
    "correctAnswer": 2,
    "explanation": "The Ems Dispatch (or Ems Telegram) was a message edited by Prussian Minister Otto von Bismarck to provoke France. Its publication inflamed public opinion in Paris, leading Emperor Napoleon III to declare war on Prussia, thus starting the Franco-Prussian War of 1870-71."
  },
  {
    "id": 285,
    "question": "According to this 'no European power would be allowed to build colonies in the American Continents and US will not interfere in the affairs of European colonies in the other continents' (TSTET 12 Jan 2025)",
    "options": [
      "Marshall Law",
      "Monroe Doctrine",
      "The Eisenhower Doctrine",
      "The Truman Doctrine"
    ],
    "correctAnswer": 1,
    "explanation": "This policy is the cornerstone of the Monroe Doctrine, a U.S. foreign policy articulated by President James Monroe in 1823. It warned European powers against future colonization or interference in the Americas, and in return, the U.S. pledged to not interfere in European affairs."
  },
  {
    "id": 286,
    "question": "In 1869, king Leopold II of Belgium secretly sent this explorer to Congo region in Africa (TSTET 12 Jan 2025)",
    "options": [
      "Stanley",
      "Richard Burton",
      "David Livingston",
      "John Speke"
    ],
    "correctAnswer": 0,
    "explanation": "King Leopold II of Belgium hired the explorer Henry Morton Stanley to explore and establish his claim over the Congo region. This venture, disguised as a philanthropic mission, led to the establishment of the brutal Congo Free State under Leopold's personal rule."
  },
  {
    "id": 287,
    "question": "On 4th May, 1919, the people of china demonstrated in Beijing to protest against the decision of (TSTET 12 Jan 2025)",
    "options": [
      "'Sun Yet Sen' regarding the programme of Action",
      "Decision of Sun yet Sen regarding overthrowing of Manchu Dynasty",
      "Versailles Peace Conference",
      "The regional military powers called 'war lords'"
    ],
    "correctAnswer": 2,
    "explanation": "The May Fourth Movement was a student-led protest in Beijing against the Treaty of Versailles. The treaty transferred German concessions in Shandong province to Japan instead of returning them to China, which was seen as a betrayal by the Allied powers."
  },
  {
    "id": 288,
    "question": "Among the following, identify the correct statement regarding the 'Tennis Court Oath of 1789' in France (TSTET 12 Jan 2025)",
    "options": [
      "The representatives of Third Estate declared themselves as a National Assembly",
      "The king Louis XVI promised to declare France as a Republican State",
      "The king withdrew the special privileges enjoyed by the members of the First and Second Estate",
      "The King Louis XVI promised to draft a new constitution for France"
    ],
    "correctAnswer": 0,
    "explanation": "The Tennis Court Oath was a critical moment in the French Revolution. The members of the Third Estate, having declared themselves the National Assembly, took an oath not to disband until they had drafted a constitution for France. This act was a direct assertion of their power against the monarchy."
  },
  {
    "id": 289,
    "question": "By teaching social studies at secondary school level, the teacher can achieve these results A) Social learning B) Knowledge with experience C) Maladjustability and Rigidity D) Skills in selection E) Competence in tackling problems. Choose the correct answer: (TSTET 12 Jan 2025)",
    "options": [
      "A, B, C, D & E",
      "A, B, D & E only",
      "B, C, D & E only",
      "A, B, C & E only"
    ],
    "correctAnswer": 1,
    "explanation": "The goals of social studies education include fostering social learning (A), building knowledge through experience (B), developing skills in selecting information (D), and enhancing competence in problem-solving (E). Maladjustability and rigidity (C) are negative traits that education aims to counteract, not achieve."
  },
  {
    "id": 290,
    "question": "The essential teaching and learning material for a social studies teacher is (TSTET 12 Jan 2025)",
    "options": [
      "Calculator for solving problems",
      "Dictionary for knowing the meanings for hardwords",
      "Compass box for drawing for drawing lines on the black board",
      "Maps and Globe for teaching history and geography"
    ],
    "correctAnswer": 3,
    "explanation": "While other tools are useful, maps and globes are fundamental and indispensable materials for teaching social studies. They are essential for understanding geographical concepts, spatial relationships, and the historical context of events."
  },
  {
    "id": 291,
    "question": "Verifying the new hypothesis, drawing inferences and judging the adequacy or inadequacy of data collected for an issue are the specification of this teaching objective of social studies (TSTET 12 Jan 2025)",
    "options": [
      "Understanding",
      "Knowledge",
      "Application",
      "Appreciation"
    ],
    "correctAnswer": 2,
    "explanation": "These tasks require higher-order thinking skills that go beyond simply recalling (knowledge) or explaining (understanding). They involve using learned concepts and principles in new, concrete situations to solve problems or analyze data, which is the essence of the 'Application' level in educational objectives."
  },
  {
    "id": 292,
    "question": "By teaching the concepts like believing and respecting the Laws, paying taxes intime and working for social well being the social studies teacher can inculcate these value among students. (TSTET 12 Jan 2025)",
    "options": [
      "Moral values",
      "Vocational values",
      "Interpretative values",
      "Utilitarian values"
    ],
    "correctAnswer": 0,
    "explanation": "Respecting laws, paying taxes, and contributing to social welfare are core components of civic responsibility and ethical behavior within a society. These are broadly categorized as moral values, as they pertain to the principles of right conduct."
  },
  {
    "id": 293,
    "question": "NCF-2005, suggested to focus on the following aspects, while developing social studies curriculum. A) Plurality and local content B) Content load C) Scientific outlook D) Inter relationship among disciplines. Choose the correct answer: (TSTET 12 Jan 2025)",
    "options": [
      "B, C & D only",
      "A, C & D only",
      "A, B & C only",
      "A, B, C & D"
    ],
    "correctAnswer": 1,
    "explanation": "The National Curriculum Framework (NCF) 2005 advocated for including diverse perspectives and local content (A), fostering a scientific outlook (C), and highlighting interdisciplinary connections (D). A key principle was to *reduce* content load (B) to discourage rote learning and promote understanding."
  },
  {
    "id": 294,
    "question": "Among the following, which one DOES NOT help the social studies teacher to create the effective teaching - learning environment. (TSTET 12 Jan 2025)",
    "options": [
      "Going beyond the textbook",
      "Practicing the flexible evaluation methods",
      "Promoting mechanical learning",
      "Linking the text with daily life experiences"
    ],
    "correctAnswer": 2,
    "explanation": "An effective teaching environment encourages critical thinking and deep understanding. Promoting mechanical learning, which is rote memorization without comprehension, is contrary to this goal. The other options are all well-regarded practices for creating an engaging and effective learning atmosphere."
  },
  {
    "id": 295,
    "question": "Match the following List A with List - B. List-A (Community Resources) A) Historical Resource B) Cultural Resource C) Economic Resource D) Scientific Resource. List-B (Associations) i) Singareni Collaries ii) ISRO iii) Ajanta Caves iv) Tribal museum. Choose the correct answer: (TSTET 12 Jan 2025)",
    "options": [
      "A-iii; B-i; C-iv; D-ii",
      "A-iii; B-iv; C-i; D-ii",
      "A-iv; B-iii; C-i; D-ii",
      "A-iii; B-iv; C-ii; D-i"
    ],
    "correctAnswer": 1,
    "explanation": "The correct pairings are: A) Ajanta Caves are a Historical Resource (iii). B) A Tribal museum represents a Cultural Resource (iv). C) Singareni Collieries are a major Economic Resource (i). D) ISRO (Indian Space Research Organisation) is a premier Scientific Resource (ii)."
  },
  {
    "id": 296,
    "question": "To teach the concepts, i.e., earth rotation and revolution; shape and area of the earth; and eclipses; effectively the teacher should have competency in this geography (TSTET 12 Jan 2025)",
    "options": [
      "Mathematical Geography",
      "Economic Geography",
      "Political Geography",
      "Regional Geography"
    ],
    "correctAnswer": 0,
    "explanation": "Mathematical Geography is the branch that deals with the Earth's geometric characteristics, its movements in space (rotation, revolution), its relation to the sun, and the resulting phenomena like seasons, time zones, and eclipses. These topics are fundamentally based on astronomical and mathematical principles."
  },
  {
    "id": 297,
    "question": "The following approach provides scope for social studies teacher to teach the lessons in collaborative, participative and problem solving methods (TSTET 12 Jan 2025)",
    "options": [
      "Subject centric approach",
      "Teacher centric approach",
      "Behaviouristic approach",
      "Constructivistic approach"
    ],
    "correctAnswer": 3,
    "explanation": "The constructivist approach posits that learners actively construct knowledge rather than passively receiving it. This educational philosophy inherently supports methods like collaboration, participation, and problem-solving, where students engage actively with the material and each other to build understanding."
  },
  {
    "id": 298,
    "question": "Among the following, which one DOES NOT relates to the advantages of social studies laboratory (TSTET 12 Jan 2025)",
    "options": [
      "It creates interest in experiments and research among students",
      "Cultural and social values will develop among students",
      "Students will become indiscipline due to involvement in activities",
      "Valuable equipments will be kept in safety"
    ],
    "correctAnswer": 2,
    "explanation": "A social studies lab aims to provide a space for active, hands-on learning, which fosters interest, values, and responsible use of materials. The statement that students will become indisciplined is a potential negative outcome of poor classroom management, not an inherent advantage or purpose of the laboratory itself."
  },
  {
    "id": 299,
    "question": "Among the following, identify the characteristics of good evaluation tool. A) Utility B) Subjectivity C) Language clarity D) Practicability E) Diagnosticity. Choose the correct answer: (TSTET 12 Jan 2025)",
    "options": [
      "A, B, C, D & E",
      "A, B, C & D only",
      "B, C & D only",
      "A, C, D & E only"
    ],
    "correctAnswer": 3,
    "explanation": "An effective evaluation tool should have Utility (A), Language clarity (C), Practicability (D), and Diagnosticity (E). Subjectivity (B), where scoring relies on personal judgment, is a weakness; a good tool should strive for objectivity. Therefore, the best set of characteristics excludes subjectivity."
  },
  {
    "id": 300,
    "question": "In Telangana state, the summative assessment in social studies is being conducted based on these academic standards. A) Reflection on contemporary issues and questioning B) Experiments and field observation C) Conceptual understanding D) Appreciation and sensitivity. Choose the correct answer: (TSTET 12 Jan 2025)",
    "options": [
      "A, B & C only",
      "A, C & D only",
      "B, C & D only",
      "A, B, C & D"
    ],
    "correctAnswer": 1,
    "explanation": "The academic standards for Social Studies assessment in Telangana include Conceptual Understanding (C), Reflection on contemporary issues and questioning (A), and Appreciation and sensitivity (D). While field observation is an activity, 'Experiments and field observation' (B) is a specific academic standard typically used for Science, not Social Studies."
  },
  {
    "id": 301,
    "question": "Among the following, identify the statement that best describes the term \"Current Account Deposit\" (TSTET 12 Jan 2025)",
    "options": [
      "The money deposited in this account cannot be withdrawn from the bank as and when required",
      "There are no restrictions in the number of times to deposit or withdraw money from the bank in a day",
      "The rate of interest is higher for the amount deposited in this account",
      "The amount deposited in this account has to withdraw only through cheques"
    ],
    "correctAnswer": 1,
    "explanation": "A current account is a type of bank account primarily used by businesses for frequent transactions. Its key feature is the flexibility it offers, with no limits on the number of deposits or withdrawals that can be made in a day. Unlike savings accounts, they typically do not earn interest."
  },
  {
    "id": 302,
    "question": "One of the following is the function of \"Commercial Banks\" (TSTET 12 Jan 2025)",
    "options": [
      "Regulates Foreign Exchange Reserves",
      "Banker to Central and State Government",
      "Custodian of Foreign reserves",
      "Accept deposits from the public"
    ],
    "correctAnswer": 3,
    "explanation": "The fundamental role of commercial banks is to serve the public and businesses. Their primary functions include accepting deposits (such as savings, current, and fixed deposits) from the public and providing loans. The other options listed are the functions of a country's central bank (e.g., the Reserve Bank of India)."
  },
  {
    "id": 303,
    "question": "One of the following is NOT the measure of \"Human Development Index\" (TSTET 12 Jan 2025)",
    "options": [
      "Per Capita Income",
      "Mean Years of Schooling",
      "Life expectancy at birth",
      "Density of Population"
    ],
    "correctAnswer": 3,
    "explanation": "The Human Development Index (HDI) is a composite index measuring average achievement in three key dimensions of human development: a long and healthy life (life expectancy), being knowledgeable (education), and having a decent standard of living (per capita income). Population density is not a component of the HDI."
  },
  {
    "id": 304,
    "question": "Agriculture and related activities such as fishing, forestry, mining, quarrying where nature has a dominant role in the production process comes under this sector of the economy (TSTET 12 Jan 2025)",
    "options": [
      "Primary Sector",
      "Secondary Sector",
      "Tertiary Sector",
      "Quaternary Sector"
    ],
    "correctAnswer": 0,
    "explanation": "The primary sector involves the extraction and harvesting of natural resources directly from the Earth. It forms the foundation of the economy by providing raw materials for other sectors. This includes all forms of agriculture, fishing, forestry, and mining."
  },
  {
    "id": 305,
    "question": "Which of the following statement best describes the term Gross Domestic Product ? (TSTET 12 Jan 2025)",
    "options": [
      "The total value of final goods and services produced in the country during the period of five years",
      "The total value of capital goods produced in the country during the period of one year",
      "The value derived from total value of final goods and services produced in the country during the period of one year by dividing with the population of the country",
      "The total value of final goods and services produced in the country during the period of one year"
    ],
    "correctAnswer": 3,
    "explanation": "Gross Domestic Product (GDP) is the standard measure of the value added created through the production of goods and services in a country during a certain period. It represents the total monetary value of all finished goods and services produced within a country's borders in a specific time frame, typically a year."
  },
  {
    "id": 306,
    "question": "The information regarding this is an important social indicator to measure the extent of equality between men and women (TSTET 12 Jan 2025)",
    "options": [
      "Age structure",
      "Sex Ratio",
      "Fertility rate",
      "Density of Population"
    ],
    "correctAnswer": 1,
    "explanation": "The Sex Ratio, which is the number of females per 1000 males, is a critical social indicator used to measure the degree of gender equality in a society. A skewed ratio can indicate issues such as female feticide, gender-based discrimination, and disparities in healthcare and nutrition for women."
  },
  {
    "id": 307,
    "question": "One among the following was the term of Permanent settlement introduced by the British East India Company, 1793 (TSTET 12 Jan 2025)",
    "options": [
      "The power to collect the revenue was given as agreed upon in auction to the zamindars",
      "The power of collecting revenue was given to village heads",
      "The power to collect revenue was in the hands of the Government officials",
      "Giving the power of collecting revenue to the Land lords"
    ],
    "correctAnswer": 0,
    "explanation": "Under the Permanent Settlement introduced by Lord Cornwallis in 1793, the right to collect land revenue was auctioned to the highest bidders, who became the zamindars. These zamindars had to pay a fixed amount of revenue to the company, keeping any surplus for themselves. The revenue amount was fixed permanently."
  },
  {
    "id": 308,
    "question": "Which of the following statement best describes the phrase \"Sarf-e-khas\"? (TSTET 12 Jan 2025)",
    "options": [
      "The land owned by the zamindars",
      "The land that was directly under the Nizam as his personal jagir",
      "The land cultivated directly by the zamindars in their own lands",
      "The land of Zamindars given to tenants"
    ],
    "correctAnswer": 1,
    "explanation": "In the former Hyderabad State, \"Sarf-e-khas\" referred to the personal estate or Crown lands of the Nizam. The revenue generated from these lands was the private income of the ruler and was used for the maintenance of his palace and family."
  },
  {
    "id": 309,
    "question": "The Primary goal of sustainable development is (TSTET 12 Jan 2025)",
    "options": [
      "Economic growth without any concern for the development",
      "Ensuring that the current generation's needs are met without compromising the ability of future generations to meet their own needs",
      "Giving priority to the industrial development",
      "Reducing the population growth globally"
    ],
    "correctAnswer": 1,
    "explanation": "This is the most widely accepted definition of sustainable development, originating from the 1987 Brundtland Commission Report. It highlights the need to balance economic and social progress with environmental protection to ensure a viable future for subsequent generations."
  },
  {
    "id": 310,
    "question": "In these days, banks withhold approximately this percentage of their deposits in Cash (TSTET 12 Jan 2025)",
    "options": [
      "10%",
      "100%",
      "50%",
      "15%"
    ],
    "correctAnswer": 3,
    "explanation": "Under the system of fractional-reserve banking, commercial banks are required to keep only a fraction of their total deposits as cash reserves to meet daily withdrawal needs. In India, as per general economic examples, banks hold about 15% of their deposits as cash. The rest is used for lending and investment."
  },
  {
    "id": 311,
    "question": "This refers to an agreement in which the lender supplies the borrower with money, goods or services in return for the promise of future payment (TSTET 12 Jan 2025)",
    "options": [
      "Debit",
      "Credit",
      "Collateral",
      "Base rate"
    ],
    "correctAnswer": 1,
    "explanation": "Credit is the system that allows a borrower to receive funds, goods, or services from a lender with the understanding that the borrower will pay back the debt at a future date. It is a fundamental concept in finance and commerce."
  },
  {
    "id": 312,
    "question": "\"Inflation\" refers to (TSTET 12 Jan 2025)",
    "options": [
      "Continuous decline in prices of goods",
      "Continuous rise in prices of goods",
      "Neither increase nor decrease in prices of goods in long term",
      "Price increase with regard to luxury goods only"
    ],
    "correctAnswer": 1,
    "explanation": "Inflation is the rate at which the general level of prices for goods and services is rising, and consequently, the purchasing power of currency is falling. It is typically measured as an annual percentage increase."
  },
  {
    "id": 313,
    "question": "This inscription speaks Gauthami Putra Satakarni as 'King of Kings' and Kshaharata Vamsa Niravasesaka (Destroyer of Kshaharata family)' (TSTET 12 Jan 2025)",
    "options": [
      "The Nasik Inscription",
      "The Amaravathi Inscription",
      "The Nanaghat Inscription",
      "The Junagadh Rock Inscription"
    ],
    "correctAnswer": 0,
    "explanation": "The Nasik Prashasti, an inscription commissioned by Gautami Balasri, the mother of the Satavahana king Gautamiputra Satakarni, details his achievements. It glorifies him with titles such as 'Destroyer of the Kshaharata dynasty', highlighting his significant military victory over the Saka ruler Nahapana."
  },
  {
    "id": 314,
    "question": "In the first World War, the countries which participated on behalf of Austria were known as (TSTET 12 Jan 2025)",
    "options": [
      "Axis powers",
      "Allied Powers",
      "Central Powers",
      "Communist powers"
    ],
    "correctAnswer": 2,
    "explanation": "The Central Powers was a military alliance during World War I consisting of Germany, Austria-Hungary, the Ottoman Empire, and Bulgaria. They fought against the Allied Powers, which included countries like France, Britain, Russia, and later the USA. The term 'Axis powers' refers to the alliance in World War II."
  },
  {
    "id": 315,
    "question": "The people's Republic of China Government was established in 1949 based on the principles of \"New democracy\". The principle of New Democracy' was an association of (TSTET 12 Jan 2025)",
    "options": [
      "All social classes who opposed to landlordism and imperialism",
      "All the Chinese people who have supported Chinese Communist Party",
      "All the supporters of Mao Zedong who have supported to landlordism and imperialism",
      "All the people who believed in the idea of people's rule"
    ],
    "correctAnswer": 0,
    "explanation": "Mao Zedong's theory of 'New Democracy' proposed a coalition of four revolutionary social classes: the proletariat, the peasantry, the petty bourgeoisie, and the national bourgeoisie. This 'bloc of four classes' was to unite under the leadership of the Communist Party to overthrow imperialism and feudalism (landlordism)."
  },
  {
    "id": 316,
    "question": "In 1828, Raja Ram Mohan Roy founded the Brahma Samaj - an assembly of all those who believed in a \"Universal Religion\" is based on the principle of (TSTET 12 Jan 2025)",
    "options": [
      "Freedom and respect for women",
      "One Supreme God",
      "Social Service for national construction",
      "To revive a reformed Hindu religion"
    ],
    "correctAnswer": 1,
    "explanation": "The central tenet of the Brahmo Samaj was monotheism, the belief in one supreme, formless, and universal God. Raja Ram Mohan Roy advocated for a religion that was free from idol worship, polytheism, caste distinctions, and superstitious rituals, drawing inspiration from the Upanishads."
  },
  {
    "id": 317,
    "question": "One of the following is NOT the famous temple constructed by Jains (TSTET 12 Jan 2025)",
    "options": [
      "Dilwara Temple at Mount Abu",
      "Parshvanadha Temple at Khajuraho",
      "Jinanadhapura Basadi Temple near Sravanabelagola",
      "The Shwedagon Pagoda, Myanmar"
    ],
    "correctAnswer": 3,
    "explanation": "The Shwedagon Pagoda in Myanmar is a revered Buddhist stupa and the most sacred religious site for Buddhists in the country. The other three options—the Dilwara Temples, the Parshvanatha Temple, and the Jinanathapura Basadi—are all renowned examples of Jain temple architecture."
  },
  {
    "id": 318,
    "question": "In 1919, Mahatma Gandhi gave a call for Satyagraha against (TSTET 12 Jan 2025)",
    "options": [
      "Rowlatt Act",
      "Montague Chelmsford Reforms",
      "Local Movements in Champaran and Kheda",
      "The Ahmedabad Mill workers strike"
    ],
    "correctAnswer": 0,
    "explanation": "Mahatma Gandhi launched the Rowlatt Satyagraha in 1919 as a nationwide protest against the repressive Rowlatt Act. This Act authorized the British government to imprison any individual suspected of terrorist activities for up to two years without a trial, severely curtailing civil liberties."
  },
  {
    "id": 319,
    "question": "Thomas Monroe introduced the Ryotwari System in the Madras Presidency as per the orders of this Governor General in 1798 (TSTET 12 Jan 2025)",
    "options": [
      "Lord Wellesley",
      "Lord William Bentick",
      "Lord Dalhousie",
      "Lord Warren Hastings"
    ],
    "correctAnswer": 0,
    "explanation": "The Ryotwari System, where revenue was collected directly from the cultivators (ryots), was further developed and implemented by Thomas Munro. This occurred during the administration of Lord Wellesley, who was the Governor-General of India from 1798 to 1805. Munro later became the Governor of Madras and expanded the system."
  },
  {
    "id": 320,
    "question": "With this treaty, the Mughal emperor Shah Alam II granted the right to collect Diwani to English East India Company along with police and judicial powers (TSTET 12 Jan 2025)",
    "options": [
      "Treaty of Allahabad",
      "Treaty of Masulipatnam",
      "Treaty of Bassein",
      "Treaty of Lahore"
    ],
    "correctAnswer": 0,
    "explanation": "The Treaty of Allahabad was signed in 1765 after the Battle of Buxar. Through this treaty, the Mughal Emperor Shah Alam II granted the East India Company the Diwani rights—the right to collect revenue—from the provinces of Bengal, Bihar, and Orissa. This was a pivotal moment that marked the beginning of the Company's rule in India."
  },
  {
    "id": 321,
    "question": "At the end of the first world war, one of the following was NOT the follower of the fascist ideology (TSTET 12 Jan 2025)",
    "options": [
      "General Franco in Spain",
      "Benito Mussolini in Italy",
      "Adolf Hitler in Germany",
      "Stalin in Soviet Union"
    ],
    "correctAnswer": 3,
    "explanation": "Fascism is a far-right, authoritarian ideology championed by leaders like Mussolini, Hitler, and Franco. Joseph Stalin, the leader of the Soviet Union, was a proponent of Communism, a far-left ideology. Communism and Fascism were ideologically opposed and were major adversaries during World War II."
  },
  {
    "id": 322,
    "question": "The aim of this society was 'to secure social justice for the weaker sections of the society' (TSTET 12 Jan 2025)",
    "options": [
      "Satya Shodak Samaj",
      "Temple Entry Movement",
      "Arya Samaj",
      "Bahishkrit Hitakarini Sabha"
    ],
    "correctAnswer": 0,
    "explanation": "The Satya Shodak Samaj (Truth-Seekers' Society) was founded by social reformer Jyotirao Phule in 1873. Its main objective was to fight for the rights and social justice of the lower castes (Shudras and Atishudras) and liberate them from the exploitation and oppression of the Brahminical caste system."
  },
  {
    "id": 323,
    "question": "Identify the INCORRECT pair from among the following (TSTET 12 Jan 2025)",
    "options": [
      "Vidyanatha - Prataparudra yashobhushanam",
      "Palkuriki Somanatha - Basavapurana",
      "Jayapa Senani - Nritya Ratnavali",
      "Rudradeva - Panditharadhya charitra"
    ],
    "correctAnswer": 3,
    "explanation": "The work 'Panditaradhya Charitra' was written by the famous Telugu poet Palkuriki Somanatha, who also authored 'Basava Purana'. It was not written by Rudradeva, the Kakatiya ruler. All other pairs are correctly matched."
  },
  {
    "id": 324,
    "question": "Which of the following statement best describes the phrase \"Dogger Bank\"? (TSTET 12 Jan 2025)",
    "options": [
      "The part of the North Sea near Great Britain where the fish industry was developed",
      "The region between Pyrenees Mountains and Alps Mountains",
      "The parts of the sea enclosed by land on three sides",
      "The lands along the Mediterranean Sea"
    ],
    "correctAnswer": 0,
    "explanation": "Dogger Bank is a vast, shallow sandbank located in the North Sea, off the coast of Great Britain. Its shallow waters make it an exceptionally rich fishing ground, historically famous for its abundant stocks of cod and herring."
  },
  {
    "id": 325,
    "question": "'Foehn' the Hot Local Winds blow along the northern slopes of these mountain ranges (TSTET 12 Jan 2025)",
    "options": [
      "Alps Mountains",
      "Rocky Mountains",
      "Andes Mountains",
      "Himalayan Mountains"
    ],
    "correctAnswer": 0,
    "explanation": "A Foehn (or Föhn) is a type of warm, dry wind that descends on the leeward side of a mountain range. This phenomenon is characteristic of the Alps in Europe, where these winds blow down the northern slopes, causing rapid temperature increases."
  },
  {
    "id": 326,
    "question": "Savanna Grasslands are mostly grown in these regions (TSTET 12 Jan 2025)",
    "options": [
      "Mid latitudinal Regions",
      "Polar Regions",
      "Regions on either side of the Equator and extend to the tropics",
      "Regions located on Western margins of the continents"
    ],
    "correctAnswer": 2,
    "explanation": "Savanna biomes are typically found in tropical regions characterized by a distinct wet and dry season. Geographically, they are situated between the equatorial rainforests and the hot deserts, in the belts north and south of the equator extending towards the Tropics."
  },
  {
    "id": 327,
    "question": "Which of the following statement best describes the term \"Grid\"? (TSTET 12 Jan 2025)",
    "options": [
      "A network of latitudes and longitudes drawn on a globe",
      "An imaginary line that is drawn from the North Pole to the South Pole",
      "The regular path on which the earth goes around the Sun",
      "The regular path on which the Moon goes around the Earth"
    ],
    "correctAnswer": 0,
    "explanation": "A geographic grid is a system designed to pinpoint any location on Earth's surface. It consists of a network of imaginary lines: parallels of latitude that run east-west and meridians of longitude that run north-south. Their intersection allows for precise coordinate-based location."
  },
  {
    "id": 328,
    "question": "The reason for the recent earthquakes in Pakistan and Nepal is (TSTET 12 Jan 2025)",
    "options": [
      "The Eurosean Plate subduct the Indian Plate",
      "The Australian Plate subduct the Indian Plate",
      "The Indian Plate subduct the Eurosean Plate",
      "The Arabian Plate subduct the Eurosean Plate"
    ],
    "correctAnswer": 2,
    "explanation": "The entire Himalayan region, including Nepal and parts of Pakistan, is seismically active due to the ongoing collision between the Indian and Eurasian tectonic plates. The Indian Plate is continuously pushing northward and sliding (subducting) beneath the Eurasian Plate, building up immense geological stress that is released as earthquakes."
  },
  {
    "id": 329,
    "question": "Among the following, identify the statement that best describes the 'Intrusive Landforms' (TSTET 12 Jan 2025)",
    "options": [
      "Cooling of Lava under the surface without reaching the surface of the earth and becomes rocks",
      "Cooling of lava on the surface of the earth and becomes rocks",
      "Landforms formed as plains",
      "The landform formed due to internal pressure"
    ],
    "correctAnswer": 0,
    "explanation": "Intrusive (or plutonic) igneous landforms are created when magma cools and solidifies within the Earth's crust without erupting onto the surface. Examples include large formations like batholiths and laccoliths, as well as sheet-like structures like sills and dikes."
  },
  {
    "id": 330,
    "question": "The reason for having low pressure at the earth's surface around the equator is (TSTET 12 Jan 2025)",
    "options": [
      "Low temperature",
      "Moderate temperature",
      "High Rainfall",
      "High temperature"
    ],
    "correctAnswer": 3,
    "explanation": "The equatorial region receives intense and direct sunlight year-round, leading to consistently high temperatures. This heat warms the surface air, causing it to expand, become less dense, and rise. This upward movement of air creates a belt of low atmospheric pressure at the surface, known as the doldrums or the Intertropical Convergence Zone (ITCZ)."
  },
  {
    "id": 331,
    "question": "Arrange the following planets in descending order as per their densities (TSTET 12 Jan 2025)\nA) Earth\nB) Mars\nC) Mercury\nD) Venus",
    "options": [
      "A, B, C, D",
      "B, A, C, D",
      "A, C, D, B",
      "D, C, B, A"
    ],
    "correctAnswer": 2,
    "explanation": "The approximate densities of these terrestrial planets are: Earth (5.51 g/cm³), Mercury (5.43 g/cm³), Venus (5.24 g/cm³), and Mars (3.93 g/cm³). Therefore, the correct order from highest density to lowest is Earth, Mercury, Venus, Mars (A, C, D, B)."
  },
  {
    "id": 332,
    "question": "These earthquake waves move faster and are the first to arrive at the Surface (TSTET 12 Jan 2025)",
    "options": [
      "S waves",
      "Surface waves",
      "P Waves",
      "Both S Waves and Surface waves"
    ],
    "correctAnswer": 2,
    "explanation": "P-waves, or primary waves, are compressional seismic waves that travel the fastest through the Earth's interior. Due to their high velocity, they are the first seismic waves to be recorded by a seismograph following an earthquake."
  },
  {
    "id": 333,
    "question": "In India, wheat is the main food crop in (TSTET 12 Jan 2025)",
    "options": [
      "The plains of North and North eastern India",
      "Sundarbans delta region and North-eastern part of the country",
      "Deccan plateau Region",
      "North and North-western part of the country"
    ],
    "correctAnswer": 3,
    "explanation": "Wheat is a major rabi (winter) crop in India, and its cultivation is concentrated in the northern and north-western states. This region, including Punjab, Haryana, Uttar Pradesh, and Rajasthan, provides the ideal cool, dry climate required for wheat cultivation."
  },
  {
    "id": 334,
    "question": "In the North-West, India shares its land boundary with these countries (TSTET 12 Jan 2025)",
    "options": [
      "Pakistan and Afghanistan",
      "Myanmar and Bangladesh",
      "Nepal and Bhutan",
      "China and Afghanistan"
    ],
    "correctAnswer": 0,
    "explanation": "India's land border in the north-western region is shared with two countries: Pakistan to the direct west and a small portion with Afghanistan in the far north-west (in the region of Jammu and Kashmir)."
  },
  {
    "id": 335,
    "question": "The Aravali Mountains lie on the (TSTET 12 Jan 2025)",
    "options": [
      "Southern margins of the Peninsular Plateau",
      "Eastern and North eastern margins of the Peninsular Plateau",
      "Western and north western margins of the peninsular plateau",
      "Eastern and North eastern margins of the Gangetic Plains"
    ],
    "correctAnswer": 2,
    "explanation": "The Aravalli Range, one of the world's oldest mountain ranges, is located on the western and north-western edge of the Indian Peninsular Plateau. It stretches from Gujarat in the southwest to Delhi in the northeast, acting as a natural boundary."
  },
  {
    "id": 336,
    "question": "This river rises in the highlands of Chattisgarh and flows through Odisha and reach the Bay of Bengal (TSTET 12 Jan 2025)",
    "options": [
      "Narmada",
      "Tapi",
      "Mahanadi",
      "Godavari"
    ],
    "correctAnswer": 2,
    "explanation": "The Mahanadi River originates in the Sihawa range of hills in the highlands of Chhattisgarh. It flows eastward through the state of Odisha before forming a large delta and emptying into the Bay of Bengal."
  },
  {
    "id": 337,
    "question": "In this region, Sundari trees are found which provide durable hard timber (TSTET 12 Jan 2025)",
    "options": [
      "The island groups of Andaman & Nicobar",
      "The eastern slopes of the Western Ghats",
      "The Ganga and Brahmaputra Delta",
      "Semi-arid areas of Gujarat and Rajasthan"
    ],
    "correctAnswer": 2,
    "explanation": "The Ganga-Brahmaputra delta is home to the Sundarbans, the largest mangrove forest in the world. The forest is named after the predominant mangrove species found there, the Sundari tree (Heritiera fomes), which yields a strong, durable timber."
  },
  {
    "id": 338,
    "question": "The least populous state and Union territory of India are (TSTET 12 Jan 2025)",
    "options": [
      "Sikkim and Lakshadweep",
      "Mizoram and Andaman & Nicobar Islands",
      "Arunachala Pradesh and Ladakh",
      "Meghalaya and Pondicherry"
    ],
    "correctAnswer": 0,
    "explanation": "According to the Census of India 2011, the state with the smallest population is Sikkim, and the union territory with the smallest population is Lakshadweep."
  },
  {
    "id": 339,
    "question": "This schedule of the Indian constitution was incorporated into the Indian Constitution as per the First Amendment of the Indian Constitution (TSTET 12 Jan 2025)",
    "options": [
      "12th Schedule",
      "7th Schedule",
      "9th Schedule",
      "10th Schedule"
    ],
    "correctAnswer": 2,
    "explanation": "The Ninth Schedule was added to the Constitution by the First Amendment Act of 1951. Its purpose was to protect land reform and other laws placed within it from judicial review, thereby preventing them from being challenged on the grounds of violating fundamental rights."
  },
  {
    "id": 340,
    "question": "'Meira Paibi' in Meitei language literally can be translated as (TSTET 12 Jan 2025)",
    "options": [
      "The women torch bearers",
      "The women with anger",
      "The women wearing white dress and demanding peace",
      "The women with the feeling of regional consciousness for liberation of Manipur"
    ],
    "correctAnswer": 0,
    "explanation": "Meira Paibi is a prominent women's social movement in Manipur. The term, in the local Meitei language, literally translates to \"torch bearers,\" as the women activists often carry flaming torches during their protest marches at night. They are considered the guardians of civil society."
  },
  {
    "id": 341,
    "question": "Article 13 (1) of the Human Rights is about (TSTET 12 Jan 2025)",
    "options": [
      "Everyone has the right to life, liberty and security of person",
      "All are equal before the law",
      "No one shall be subjected to arbitrary arrest, detention or exile",
      "Everyone has the right to freedom of movement and residence within the borders of each state"
    ],
    "correctAnswer": 3,
    "explanation": "Article 13(1) of the Universal Declaration of Human Rights (UDHR) explicitly states, \"Everyone has the right to freedom of movement and residence within the borders of each State.\" This right is fundamental to personal liberty."
  },
  {
    "id": 342,
    "question": "The basis for the creation of the Election Commission of India (TSTET 12 Jan 2025)",
    "options": [
      "Representation of people's Act, 1950",
      "Indian Constitution",
      "Parliament Act, 1950",
      "Supreme Court judgement in 1976"
    ],
    "correctAnswer": 1,
    "explanation": "The Election Commission of India is a constitutional body established directly by the Constitution. Article 324 of the Indian Constitution provides for its creation, composition, and functions, vesting in it the power of superintendence, direction, and control of elections."
  },
  {
    "id": 343,
    "question": "Ensuring the ability of the earth to nurture life in all its diversity' was the aim of this movement (TSTET 12 Jan 2025)",
    "options": [
      "Greenpeace Movement",
      "Civil Rights Movement",
      "Silent Valley Movement",
      "Narmada Bachao Movement"
    ],
    "correctAnswer": 0,
    "explanation": "Greenpeace is an international environmental organization with the stated mission to \"ensure the ability of the Earth to nurture life in all its diversity.\" It campaigns on a wide range of global environmental issues through non-violent direct action and advocacy."
  },
  {
    "id": 344,
    "question": "The president of USSR who initiated a process of reform called Glasnost to bring greater freedom for the people (TSTET 12 Jan 2025)",
    "options": [
      "Mikhail Kalinin",
      "Nikolai Shvernik",
      "Kliment Voroshilov",
      "Michael Gorbachev"
    ],
    "correctAnswer": 3,
    "explanation": "Mikhail Gorbachev, the last leader of the Soviet Union, introduced the policy of 'Glasnost' (meaning 'openness') in the late 1980s. This policy was aimed at increasing transparency and freedom of information, allowing for greater public discussion and criticism of the government, a significant departure from previous Soviet policies."
  },
  {
    "id": 345,
    "question": "The aims and objectives of the Indian Constitution are incorporated in (TSTET 12 Jan 2025)",
    "options": [
      "Fundamental Rights",
      "Directive Principles of State Policy",
      "Preamble of the Indian Constitution",
      "Fundamental Duties of a Citizen"
    ],
    "correctAnswer": 2,
    "explanation": "The Preamble acts as the preface to the Indian Constitution, encapsulating its core philosophy, guiding principles, and objectives. It outlines the ideals of justice, liberty, equality, and fraternity that the Constitution seeks to achieve for its citizens."
  },
  {
    "id": 346,
    "question": "The Indian Parliament CAN NOT amend one of the following parts of the Indian Constitution by a simple majority (TSTET 12 Jan 2025)",
    "options": [
      "The formation of new states",
      "Changing the boundaries of states",
      "Rules regarding citizenship",
      "The matters related to Directive Principles of State Policy"
    ],
    "correctAnswer": 3,
    "explanation": "Amending the Directive Principles of State Policy (DPSP) requires a special majority under Article 368, which involves a majority of the total membership of each house and a two-thirds majority of members present and voting. In contrast, matters like state formation, boundary changes, and citizenship rules can be altered by a simple majority of Parliament."
  },
  {
    "id": 347,
    "question": "Who certifies whether the bill is a money bill or not before sending it to the President of India? (TSTET 12 Jan 2025)",
    "options": [
      "The Finance Minister",
      "The Parliamentary Affairs Minister",
      "The Speaker of Lok Sabha",
      "The Chairman of Rajya Sabha"
    ],
    "correctAnswer": 2,
    "explanation": "According to Article 110(3) of the Indian Constitution, the Speaker of the Lok Sabha has the final authority to decide if a bill is a Money Bill. The Speaker's certification is conclusive and cannot be challenged in a court of law or by either House of Parliament."
  },
  {
    "id": 348,
    "question": "The President can summon a joint sitting of both the houses of parliament, in case of (TSTET 12 Jan 2025)",
    "options": [
      "a deadlock between the two houses over the ordinary bill",
      "a deadlock between the two houses over the Money bill",
      "a deadlock between the two houses over the Money bill and the ordinary bill",
      "a bill is not reflecting the aims and aspirations of the common people of India"
    ],
    "correctAnswer": 0,
    "explanation": "Under Article 108 of the Constitution, a joint sitting can be called by the President to resolve a disagreement between the Lok Sabha and Rajya Sabha over an ordinary legislative bill. This provision does not apply to Money Bills or Constitutional Amendment Bills."
  },
  {
    "id": 349,
    "question": "The main objective of this evaluation is to find out the nature and cause of the persistent learning problems and to formulate a plan for seeking suitable remedial actions. (TSTET 12 Jan 2025)",
    "options": [
      "Formative evaluation",
      "Summative evaluation",
      "Diagnostic evaluation",
      "Prognostic evaluation"
    ],
    "correctAnswer": 2,
    "explanation": "Diagnostic evaluation is specifically designed to identify and understand the underlying causes of a student's learning difficulties. Its goal is to pinpoint specific areas of weakness to inform the development of targeted remedial instruction and support."
  },
  {
    "id": 350,
    "question": "Based on the following themes, the lessons in present class-VIII Social studies textbook of Telangana State are developed (TSTET 12 Jan 2025)\nA) Diversity on the earth\nB) Natural Realms of the Earth and Economy\nC) Culture and communication\nD) Religion and Society\nE) Political Systems and Governance",
    "options": [
      "A, B C & D only",
      "A, C, D & E only",
      "B, C, D & E only",
      "A, B C, D & E"
    ],
    "correctAnswer": 1,
    "explanation": "The Telangana State SCERT Social Studies textbooks are organized around key themes for each grade. For Class VIII, the major themes are: Diversity on the Earth; Production Exchange and Livelihoods; Political Systems and Governance; Social Organisation and Inequities; and Religion and Society. The options A, C, D, and E align with these official themes."
  },
  {
    "id": 351,
    "question": "Comparing to the other approaches, the following teaching learning approach provides more scope for experiential learning and to act the teacher as a facilitator (TSTET 12 Jan 2025)",
    "options": [
      "Teacher centric approach",
      "Subject centric approach",
      "Behaviouristic approach",
      "Constructivistic approach"
    ],
    "correctAnswer": 3,
    "explanation": "The constructivist approach posits that learners actively construct their own understanding and knowledge through experiences and interactions. In this model, the teacher's role is not to simply impart information but to facilitate the learning process by creating opportunities for exploration, inquiry, and experiential learning."
  },
  {
    "id": 352,
    "question": "The following teaching methods are more helpful to the social studies teacher to teach the concepts about, 'Social formation in Indian History'. (TSTET 12 Jan 2025)",
    "options": [
      "Anecdotal and Evolution methods",
      "Play way and Project methods",
      "Discussion and Problem solving methods",
      "Inductive and Deductive methods"
    ],
    "correctAnswer": 0,
    "explanation": "Understanding 'social formation' requires tracing changes over long periods. The evolution method is ideal for showing this historical development. The anecdotal method, using stories and specific examples, helps to illustrate these abstract evolutionary processes, making them more understandable and engaging for students."
  },
  {
    "id": 353,
    "question": "By teaching the biographics of social reformers, Freedom Fighters and Social Scientists; the teacher can inculcate these values among students (TSTET 12 Jan 2025)",
    "options": [
      "Aesthetic values",
      "Inspirative values",
      "Utilising Leisure time",
      "Vocational values"
    ],
    "correctAnswer": 1,
    "explanation": "The life stories of great historical figures are powerful tools for character education. They expose students to examples of courage, sacrifice, integrity, and social commitment. This exposure is meant to inspire students, encouraging them to develop positive values and a sense of purpose."
  },
  {
    "id": 354,
    "question": "Match the following List - A with List - B. (TSTET 12 Jan 2025)\nList-A (Social Scientists)\nA) Vishnu Gupta\nB) Amerthya Sen\nC) Columbus\nD) Max Weber\nList-B (Contributions)\ni) Politics as a vocation\nii) Economics\niii) Economics and Social Justice\niv) Villa-d-La-Navidad settlement",
    "options": [
      "A-ii; B-iv; C-i; D-iii",
      "A-iii; B-iv; C-i; D-ii",
      "A-iii; B-ii; C-iv; D-i",
      "A-ii; B-iii; C-iv; D-i"
    ],
    "correctAnswer": 3,
    "explanation": "The correct matches are: A) Vishnu Gupta (Chanakya) wrote 'Arthashastra,' an ancient text on statecraft and economic policy, often broadly termed 'Economics' (ii). B) Amartya Sen is a Nobel laureate whose work focuses on welfare economics and social justice (iii). C) Columbus established the short-lived settlement of La Navidad in Hispaniola (iv). D) Max Weber delivered a famous lecture titled 'Politics as a Vocation' (i)."
  },
  {
    "id": 355,
    "question": "Among the following, which are correct statements regarding the aims and objectives of social studies (TSTET 12 Jan 2025)\nA) Objectives are specific and short time achievable\nB) Aims are steps to achieve the objectives\nC) Aims are general and short time achievable\nD) Objectives have temporary values than aims",
    "options": [
      "A & D only",
      "A & C only",
      "B, C & D only",
      "B & C only"
    ],
    "correctAnswer": 0,
    "explanation": "In pedagogy, Aims are broad, long-term goals, whereas Objectives are specific, measurable, and achievable short-term targets. Therefore, statement A is correct as objectives are specific and achievable within a lesson or unit. Statement D is also correct because objectives are tied to immediate instructional goals, while aims represent broader, lasting values. Statements B and C incorrectly define the relationship and timeline of aims."
  },
  {
    "id": 356,
    "question": "A class - IX, student of Srikakulam district came to Dilsukhnagar (Hyderbad) first time; and reached his relatives home at Gachibowli (Hyderabad) with the help of route map of the city. It is reflecting the following ability of him. (TSTET 12 Jan 2025)",
    "options": [
      "Map drawing",
      "Map pointing",
      "Map reading",
      "Map making"
    ],
    "correctAnswer": 2,
    "explanation": "The student successfully used a pre-existing map to interpret symbols, understand routes, and navigate to a destination. This process of extracting and applying information from a map for a specific purpose is defined as map reading. It is a crucial geographical skill."
  },
  {
    "id": 357,
    "question": "This method helps more to the social studies teacher to inculcate real life learning experiences by teaching political science (TSTET 12 Jan 2025)",
    "options": [
      "Simulation method",
      "Lecture method",
      "Story telling method",
      "Lecture cum Demonstration method"
    ],
    "correctAnswer": 0,
    "explanation": "Simulation involves creating a model of a real-world situation to be experienced by learners. In political science, activities like a mock parliament, a model UN, or role-playing an election provide students with direct, hands-on experience of political processes, making learning more engaging and realistic than passive methods like lectures."
  },
  {
    "id": 358,
    "question": "A social studies teacher should acquire the ability of using the following technique for introducing a lesson (TSTET 12 Jan 2025)\nA) Story telling\nB) Experimentation\nC) Dramatisation\nD) Using Audio-Visual aids\nE) Narration",
    "options": [
      "A, B, D & E",
      "A, C, D & E only",
      "A, B, C, D & E",
      "B, C, D & E only"
    ],
    "correctAnswer": 1,
    "explanation": "Effective lesson introductions grab students' attention and set the stage for learning. Story telling, dramatization, using audio-visual aids, and narration are all excellent techniques for engaging students in a social studies context. Experimentation is a method primarily used in science and is not a typical technique for introducing a social studies topic."
  },
  {
    "id": 359,
    "question": "Match the following List A with List - B. (TSTET 12 Jan 2025)\nList -A (Teaching Aids)\nA) Projective aid\nB) Three dimensional aid\nC) Display aid\nD) Activity aid\nList -B (Examples)\ni) Field trip\nii) Slide\niii) Model\niv) Black board",
    "options": [
      "A-iii; B-ii; C-iv; D-i",
      "A-ii; B-iv; C-i; D-iii",
      "A-iii; B-iv; C-ii; D-i",
      "A-ii; B-iii; C-iv; D-i"
    ],
    "correctAnswer": 3,
    "explanation": "The correct matches are: A) A projective aid, like a slide, requires projection to be viewed (ii). B) A three-dimensional aid, like a model, has height, width, and depth (iii). C) A display aid, such as a blackboard, is used to present information visually (iv). D) An activity aid, like a field trip, involves active participation and direct experience (i)."
  },
  {
    "id": 360,
    "question": "Social studies teacher conducted plantation, clean and green programmes in the village with class-9 students. Here the teacher (TSTET 12 Jan 2025)",
    "options": [
      "Organised school camp",
      "Taken the school to community",
      "Bring the community to school",
      "Organised field trip"
    ],
    "correctAnswer": 1,
    "explanation": "By organizing community-based activities like plantation and cleanliness drives, the teacher is extending the educational process beyond the school's physical boundaries. This action connects classroom learning with real-world social responsibility, thereby 'taking the school to the community' and fostering a sense of civic engagement among students."
  },
{
    "id": 361,
    "question": "This layer of the atmosphere absorbs ultra violet radiation and shields life on the earth from intense, harmful form of energy (TSTET 28 June 2025)",
    "options": [
      "Troposphere",
      "Stratosphere",
      "Mesosphere",
      "Thermosphere"
    ],
    "correctAnswer": 1,
    "explanation": "The stratosphere contains the ozone layer, which is responsible for absorbing most of the Sun's harmful ultraviolet (UV) radiation, thereby protecting life on Earth."
  },
  {
    "id": 362,
    "question": "In 2002, this right became a part of the 'Right to Life' (TSTET 28 June 2025)",
    "options": [
      "Right to Primary Education",
      "Right to Work",
      "Right to Higher Education",
      "Right to form Associations"
    ],
    "correctAnswer": 0,
    "explanation": "Through the 86th Amendment Act of 2002, Article 21-A was inserted into the Constitution of India, making free and compulsory education for children aged 6 to 14 a Fundamental Right. The Supreme Court has interpreted this as an integral part of the Right to Life under Article 21."
  },
  {
    "id": 363,
    "question": "The famous valley of Kashmir, running over a distance of about 135 km in south-east to north-west direction, lies in between these ranges (TSTET 28 June 2025)",
    "options": [
      "The Hindu Kush Mountain Ranges and the Zaskar Range",
      "The Karakoram Mountain Range and the Kunlun Mountain Range",
      "The Pir Panjal Range and the Zaskar Range",
      "The Hindu Kush Mountain Ranges and the Pamir Knot"
    ],
    "correctAnswer": 2,
    "explanation": "The Kashmir Valley is an intermontane valley, or a basin, situated between the Pir Panjal Range to the south and west and the Great Himalayan range, which includes the Zaskar Range, to the north and east."
  },
  {
    "id": 364,
    "question": "The existence of southwest monsoon winds in India is due to (TSTET 28 June 2025)",
    "options": [
      "Earth's rotation",
      "Differential heating of the land and the sea",
      "Ocean currents",
      "Trade winds"
    ],
    "correctAnswer": 1,
    "explanation": "During summer, the Indian landmass heats up faster than the surrounding Indian Ocean. This creates a strong low-pressure area over the land and a high-pressure area over the sea, causing moisture-laden winds to blow from the sea to the land, which is known as the southwest monsoon."
  },
  {
    "id": 365,
    "question": "The Human Development Index Value of a Country 'X' is 0.976. Then, the country 'X' is considered to be in this group of economic development (TSTET 28 June 2025)",
    "options": [
      "High Human Development",
      "Very High Human Development",
      "Medium Human Development",
      "Low Human Development"
    ],
    "correctAnswer": 1,
    "explanation": "The United Nations Development Programme (UNDP) classifies countries with a Human Development Index (HDI) score of 0.800 and above as having 'Very High Human Development'. A score of 0.976 falls comfortably within this category."
  },
  {
    "id": 366,
    "question": "'A practice of growing two or more crops together on the same field in the same season', is known as (TSTET 28 June 2025)",
    "options": [
      "Mixed Farming",
      "Crop Rotation",
      "Multiple Cropping",
      "Inter Cropping"
    ],
    "correctAnswer": 3,
    "explanation": "Intercropping is the agricultural practice of cultivating two or more crops simultaneously in the same field. This method can increase biodiversity, yield, and provide protection against crop failure."
  },
  {
    "id": 367,
    "question": "In a country, the negative growth rate of population is observed when (TSTET 28 June 2025)",
    "options": [
      "The birth rate is more than the death rate",
      "The birth and death rate are equal",
      "The rate of migration is less than the rate of immigration",
      "The birth rate is less than the death rate"
    ],
    "correctAnswer": 3,
    "explanation": "A negative population growth rate, or population decline, occurs when the number of deaths (plus emigration) exceeds the number of births (plus immigration). The simplest scenario for this is when the death rate is higher than the birth rate."
  },
  {
    "id": 368,
    "question": "One of the following is NOT the Four Pillars of Human Development (TSTET 28 June 2025)",
    "options": [
      "Equity",
      "Sociability",
      "Sustainability",
      "Productivity"
    ],
    "correctAnswer": 1,
    "explanation": "The four essential pillars of the human development concept as defined by the UNDP are Equity, Sustainability, Productivity, and Empowerment. 'Sociability' is not one of these pillars."
  },
  {
    "id": 369,
    "question": "Identify an equatorial crop from among the following (TSTET 28 June 2025)",
    "options": [
      "Tea",
      "Rubber",
      "Coffee",
      "Sugar Cane"
    ],
    "correctAnswer": 1,
    "explanation": "The rubber tree is native to the Amazon basin and thrives in the hot, humid conditions found in equatorial regions, requiring high temperatures (above 25°C) and heavy rainfall (over 200 cm) consistently throughout the year."
  },
  {
    "id": 370,
    "question": "Which of the following refers to the Dogger Bank, now known as 'Dogger Land'? (TSTET 28 June 2025)",
    "options": [
      "A small portion of land from the sea in which the people of Holland have reclaimed",
      "The land that is reclaimed from the sea",
      "Part of the North Sea where fish industry is well developed",
      "Part of the sea where ship building Industry is well developed"
    ],
    "correctAnswer": 2,
    "explanation": "Dogger Bank is a large sandbank in a shallow area of the North Sea, renowned for being a highly productive fishing ground. Doggerland is the name for the now-submerged prehistoric landmass that connected Britain to mainland Europe, of which Dogger Bank is a remnant."
  },
  {
    "id": 371,
    "question": "One of the following is NOT the characteristic feature of Organised Sector (TSTET 28 June 2025)",
    "options": [
      "Small and Scattered Industrial Units",
      "Security of Employment",
      "Having fixed number of working hours",
      "Availability of overtime facility"
    ],
    "correctAnswer": 0,
    "explanation": "The organised sector consists of enterprises registered with the government, offering job security, fixed working hours, and benefits. 'Small and Scattered Industrial Units' are characteristic features of the unorganised sector, which operates largely outside of government regulation."
  },
  {
    "id": 372,
    "question": "This soil is formed from the weathering of igneous rocks (TSTET 28 June 2025)",
    "options": [
      "Alluvial Soil",
      "Black Soil",
      "Red Soil",
      "Sandy Soil"
    ],
    "correctAnswer": 1,
    "explanation": "Black soils, also known as Regur soils, are primarily formed from the weathering of Deccan lava traps, which are volcanic igneous rocks. They are clayey, retain moisture, and are ideal for cotton cultivation."
  },
  {
    "id": 373,
    "question": "Alfred Wegner who introduced the 'theory of Continental Drift' was a German (TSTET 28 June 2025)",
    "options": [
      "Astronomer and Geophysicist",
      "Meteorologist and Geophysicist",
      "Geophysicist and Mathematician",
      "Mathematician and Astronomer"
    ],
    "correctAnswer": 1,
    "explanation": "Alfred Wegener was a German scientist whose primary profession was meteorology. However, he is most famous for his contributions to geology and geophysics, particularly his groundbreaking theory of continental drift."
  },
  {
    "id": 374,
    "question": "Among the following, the flattest and the smoothest region of the world is (TSTET 28 June 2025)",
    "options": [
      "Continental Shelf",
      "Continental slope",
      "Deep Sea Plain",
      "Ocean Deep"
    ],
    "correctAnswer": 2,
    "explanation": "Deep Sea Plains, also called abyssal plains, are extensive, flat areas of the deep ocean floor. Covered by fine-grained sediments, they are considered the flattest and smoothest regions on the Earth's surface."
  },
  {
    "id": 375,
    "question": "Among the following treaties, the treaty that was signed in the year 1991 was (TSTET 28 June 2025)",
    "options": [
      "Strategic Arms Limitation Treaty (SALT)",
      "Strategic Arms Reduction Treaty-I (START-I)",
      "The Missile Technology Control Treaty",
      "Strategic Arms Reduction Treaty-II (START-II)"
    ],
    "correctAnswer": 1,
    "explanation": "The Strategic Arms Reduction Treaty (START I) was a bilateral treaty signed by the United States and the Soviet Union on July 31, 1991. It placed limits on the number of deployed strategic nuclear warheads and ballistic missiles."
  },
  {
    "id": 376,
    "question": "Among the following, the trade union formed under the influence of Mahatma Gandhi in Ahmedabad was (TSTET 28 June 2025)",
    "options": [
      "Mazdoor Mahajan",
      "Girni Kamgar",
      "the Indian National Trade Union Congress (INTUC)",
      "Bhartiya Mazdoor Sangh"
    ],
    "correctAnswer": 0,
    "explanation": "The Ahmedabad Textile Labour Association, popularly known as Majoor Mahajan Sangh, was established in 1920. It was founded on Gandhian principles of non-violence and trusteeship, following the successful Ahmedabad mill strike led by Gandhi in 1918."
  },
  {
    "id": 377,
    "question": "When Libya became independent from Italy in 1951 after a long struggle, Italy transferred power to (TSTET 28 June 2025)",
    "options": [
      "Muammar Gaddaffi",
      "King Idris",
      "A Revolutionary Command Council",
      "The Socialist Libyan Arab Republic"
    ],
    "correctAnswer": 1,
    "explanation": "On December 24, 1951, Libya gained independence from Italy after a period under UN stewardship. Power was formally transferred to King Idris I, who became the monarch of the newly established United Kingdom of Libya."
  },
  {
    "id": 378,
    "question": "In 1906, 'to spread awareness among Dalits by using popular folk arts Bhagya Reddy Varma started (TSTET 28 June 2025)",
    "options": [
      "Vocational Work Centre",
      "Jagan Mitra Mandali",
      "Telangana Praja Samithi",
      "Adi Hindu Jatiyonnati Sabha"
    ],
    "correctAnswer": 1,
    "explanation": "Bhagya Reddy Varma, a prominent social reformer, started the Jagan Mitra Mandali in 1906. The organization's goal was to educate and raise awareness among Dalit communities by using traditional folk arts like bhajans and Harikathas to convey messages of social reform."
  },
  {
    "id": 379,
    "question": "The origin of Burrakatha is associated with this movement (TSTET 28 June 2025)",
    "options": [
      "Young Bengal Movement",
      "Brahma Samaj Movement",
      "Prarthana Samaj Movement",
      "Veerashaiva Movement"
    ],
    "correctAnswer": 3,
    "explanation": "Burrakatha, a traditional storytelling performance art of Andhra Pradesh and Telangana, has its roots in the devotional songs and ballads of the Veerashaiva movement, which used such performances to propagate its religious and social philosophy."
  },
  {
    "id": 380,
    "question": "The Drafting Committee of the Indian Constitution consists of (TSTET 28 June 2025)",
    "options": [
      "The Chairman and the nine members",
      "The Chairman and the six members",
      "The Chairman and the eight members",
      "The Chairman, the Vice-Chairman and the seven members"
    ],
    "correctAnswer": 1,
    "explanation": "The Drafting Committee of the Constituent Assembly, chaired by Dr. B. R. Ambedkar, was composed of a total of seven members: a chairman and six other members. It was tasked with preparing a draft of the Constitution of India."
  },
  {
    "id": 381,
    "question": "Kondagattu Anjaneya Swamy Temple' is located in this district of Telangana (TSTET 28 June 2025)",
    "options": [
      "Jagityal",
      "Adilabad",
      "Medak",
      "Kamareddy"
    ],
    "correctAnswer": 0,
    "explanation": "The renowned Kondagattu Anjaneya Swamy Temple is a major pilgrimage site located on a hillock in the Muthyampet village of the Jagtial district in Telangana."
  },
  {
    "id": 382,
    "question": "According to the Indian Constitution, this does not enforce any particular religion on individuals nor take away the religious freedom of individuals (TSTET 28 June 2025)",
    "options": [
      "Socialist State",
      "Secular State",
      "Democratic State",
      "Theocratic State"
    ],
    "correctAnswer": 1,
    "explanation": "A Secular State maintains neutrality in matters of religion, neither promoting nor interfering with it. The Indian Constitution establishes a secular state, ensuring that there is no state religion and guaranteeing freedom of religion to all citizens."
  },
  {
    "id": 383,
    "question": "The Supreme Court Judgement on this case was considered as the second major event in the life of the Indian Constitution (TSTET 28 June 2025)",
    "options": [
      "A.K Gopalan Case",
      "Golaknadh Case",
      "Keshavananda Bharathi Case",
      "Shah Bano Begum Case"
    ],
    "correctAnswer": 2,
    "explanation": "The Kesavananda Bharati case of 1973 is a landmark judgement where the Supreme Court established the 'basic structure doctrine'. This doctrine limits the Parliament's power to amend the Constitution, stating that its fundamental features cannot be altered. This ruling is considered a cornerstone of Indian constitutional law."
  },
  {
    "id": 384,
    "question": "The International organisation that was started with a twin objective of 'ensuring lasting peace and human development' was (TSTET 28 June 2025)",
    "options": [
      "Non-Aligned Movement",
      "United Nations Organisation",
      "The International Monetary Fund",
      "SAARC"
    ],
    "correctAnswer": 1,
    "explanation": "The United Nations Organisation (UNO) was founded in 1945 after World War II. Its core objectives, as outlined in its Charter, are to maintain international peace and security and to achieve international cooperation in solving economic, social, cultural, or humanitarian problems."
  },
  {
    "id": 385,
    "question": "In 1990, L.K. Advani, the leader Bharatiya Janata Party led 'Rath Yatra' from (TSTET 28 June 2025)",
    "options": [
      "Kanyakumari",
      "Varanasi",
      "Somnath",
      "New Delhi"
    ],
    "correctAnswer": 2,
    "explanation": "The Ram Rath Yatra, led by BJP leader L.K. Advani, commenced in September 1990 from the historic Somnath temple in Gujarat. Its destination was Ayodhya, and it aimed to garner support for the construction of a Ram temple at the Babri Masjid site."
  },
  {
    "id": 386,
    "question": "As per the Article 324 (6) of the Indian Constitution, it utilizes the services of Central and State Government employees (TSTET 28 June 2025)",
    "options": [
      "The Central Finance Commission for economic survey",
      "The Election Commission for conduct of elections",
      "The Census Department for population Census",
      "The SC commission for caste census"
    ],
    "correctAnswer": 1,
    "explanation": "Article 324(6) of the Indian Constitution mandates that the President and State Governors must make available the necessary staff to the Election Commission upon request for the conduct of elections, allowing the commission to utilize government employees for this purpose."
  },
  {
    "id": 387,
    "question": "As per this article of the Indian Constitution, the President of India can dismiss the state Government and order the Governor of the state to take over the administration of the state with the advice of the Prime Minister (TSTET 28 June 2025)",
    "options": [
      "Article 224",
      "Article 280",
      "Article 356",
      "Article 352"
    ],
    "correctAnswer": 2,
    "explanation": "Article 356 allows for the imposition of President's Rule in a state if the President, on receipt of a report from the Governor or otherwise, is satisfied that a situation has arisen in which the government of the state cannot be carried on in accordance with the provisions of the Constitution."
  },
  {
    "id": 388,
    "question": "In the Lok Sabha Elections held in India in 1971, the Congress Party went to elections using this popular slogan (TSTET 28 June 2025)",
    "options": [
      "Garibi Hatao",
      "Sustainable Development",
      "Save Democracy",
      "Unity and Diversity"
    ],
    "correctAnswer": 0,
    "explanation": "The 'Garibi Hatao' (Remove Poverty) slogan was the cornerstone of Indira Gandhi's campaign for the 1971 Lok Sabha elections. It was a populist message that resonated widely with the poor and contributed significantly to her landslide victory."
  },
  {
    "id": 389,
    "question": "\"We are going to enter into a life of contradictions, in politics we will have equality and in social and economic life, we will have inequality\" said by (TSTET 28 June 2025)",
    "options": [
      "Dr BR Ambedkar",
      "Margaret W Fisher",
      "Joan V Bondurant",
      "Jawaharlal Nehru"
    ],
    "correctAnswer": 0,
    "explanation": "Dr. B.R. Ambedkar made this profound statement in his final address to the Constituent Assembly on November 25, 1949. He was cautioning about the inherent contradiction between the political equality granted by the 'one man, one vote' principle and the persistence of deep-rooted socio-economic inequalities in India."
  },
  {
    "id": 390,
    "question": "As per the \"Permanent Revenue settlement system\" these were given power to collect revenues (TSTET 28 June 2025)",
    "options": [
      "Tenants",
      "Peasants",
      "Village heads",
      "Zamindars"
    ],
    "correctAnswer": 3,
    "explanation": "The Permanent Settlement, introduced by Lord Cornwallis in 1793, recognized Zamindars as the proprietors of the land. They were tasked with collecting rent from the peasants and paying a fixed amount of revenue to the British East India Company."
  },
  {
    "id": 391,
    "question": "To put together a programme for uniting Italy into an Italian Republic, Guiseppe Garibaldi formed a secret society called (TSTET 28 June 2025)",
    "options": [
      "Black Shirts",
      "Blue Shirts",
      "Red Shirts",
      "White Shirts"
    ],
    "correctAnswer": 2,
    "explanation": "The followers of Giuseppe Garibaldi were known as Redshirts because of the color of their uniforms. These volunteer forces were crucial in the Italian unification, especially during the 1860 'Expedition of the Thousand' that conquered Sicily and Naples."
  },
  {
    "id": 392,
    "question": "The Worsley Canal, the First English Canal, was built by (TSTET 28 June 2025)",
    "options": [
      "James Brindley",
      "Stephenson",
      "John Medcalf",
      "Henry cart"
    ],
    "correctAnswer": 0,
    "explanation": "The Bridgewater Canal, which includes the section from the Worsley mines, is considered the first modern artificial canal in England. It was engineered by James Brindley for the Duke of Bridgewater to transport coal, and its success sparked the canal-building era in Britain."
  },
  {
    "id": 393,
    "question": "In 1991, the disbanding of USSR was announced by (TSTET 28 June 2025)",
    "options": [
      "Mikhail Gorbachev",
      "Nikita Khrushchev",
      "Leonid Brezhnev",
      "Boris Yeltsin"
    ],
    "correctAnswer": 3,
    "explanation": "The dissolution of the Soviet Union was effectively sealed by the Belovezha Accords on December 8, 1991, signed by Boris Yeltsin (President of Russia) and the leaders of Ukraine and Belarus. This declaration by the heads of the founding republics led to the final disbandment of the USSR."
  },
  {
    "id": 394,
    "question": "In the 16th century, a \"Seaborne Empire \"was established over the Indian Ocean by (TSTET 28 June 2025)",
    "options": [
      "Spain",
      "England",
      "Holland",
      "Portuguese"
    ],
    "correctAnswer": 3,
    "explanation": "In the 16th century, Portugal established the 'Estado da Índia', a formidable seaborne empire. Through superior naval technology and a network of fortified trading posts (feitorias), they controlled crucial maritime trade routes across the Indian Ocean."
  },
  {
    "id": 395,
    "question": "The Social Reformer who fought for Re-marriage of widows, 'Especially child widows' was (TSTET 28 June 2025)",
    "options": [
      "Raja Rammohan Roy",
      "Ishwar Chandra Vidyasagar",
      "Kandukuri Veereshalingam",
      "Bhagya Reddy Varma"
    ],
    "correctAnswer": 1,
    "explanation": "Ishwar Chandra Vidyasagar was a leading social reformer in 19th-century Bengal who vehemently campaigned for the rights of widows, particularly for their right to remarry. His tireless efforts led to the passage of the Hindu Widows' Remarriage Act in 1856."
  },
  {
    "id": 396,
    "question": "Mahatma Gandhi decided to launch this third major movement against the British rule after the failure of Cripps Mission (TSTET 28 June 2025)",
    "options": [
      "Ahmedabad Textile Workers Agitation",
      "Quit India Movement",
      "Civil Disobedience Movement",
      "Kaira Protest Movement"
    ],
    "correctAnswer": 1,
    "explanation": "The failure of the Cripps Mission in 1942, which did not offer complete independence, was a major catalyst for the Quit India Movement. In August 1942, Mahatma Gandhi launched this movement at the Bombay session of the All-India Congress Committee, demanding an end to British Rule in India."
  },
  {
    "id": 397,
    "question": "In March 1946, the British Cabinet sent a three-member mission team to New Delhi to examine (TSTET 28 June 2025)",
    "options": [
      "the demand of separate state made by the All India Muslim League and to suggest a suitable political framework for Indian freedom",
      "the possibility of dividing India into India and Pakistan",
      "the demand of All India Muslim League in keeping India united",
      "the demand of Indian National Congress to provide more seats to Muslims"
    ],
    "correctAnswer": 0,
    "explanation": "The 1946 Cabinet Mission was sent to India to help formulate a plan for the transfer of power. It had to address the conflicting demands of the Indian National Congress (for a united India) and the Muslim League (for a separate state of Pakistan), and its ultimate goal was to propose a constitutional framework for a free and united India."
  },
  {
    "id": 398,
    "question": "Among the following Asaf Jahi rulers, the rulers who would not get the title 'Nizam' from the Mughals were (TSTET 28 June 2025)",
    "options": [
      "Nazar Jung, Salabath Jung and Afzal Ud Daula",
      "Afzal Ud Daula and Salabath Jung",
      "Meer Mahboob Ali Khan and Muzaffar Jung",
      "Nazar Jung, Muzafar Jung and Salabath Jung"
    ],
    "correctAnswer": 3,
    "explanation": "After the death of the first Nizam, a period of instability ensued. His successors, Nasir Jung, Muzaffar Jung, and Salabat Jung, were involved in wars of succession with support from the French and British. During this chaotic period, they ruled without the formal sanction or the title of 'Nizam' from the Mughal Emperor."
  },
  {
    "id": 399,
    "question": "The Green Revolution was taken as a pilot project in seven districts of the country and was called as (TSTET 28 June 2025)",
    "options": [
      "Intensive Agriculture Development Programme",
      "High Yielding Variety Programme",
      "Intensive Agriculture Area Programme",
      "Integrated Agriculture Development Programme"
    ],
    "correctAnswer": 0,
    "explanation": "The Intensive Agricultural Development Programme (IADP), launched in 1960, is considered the forerunner to the Green Revolution in India. It was initiated as a pilot project in selected districts to demonstrate how a package of improved inputs and practices could rapidly increase agricultural production."
  },
  {
    "id": 400,
    "question": "Identify the true statement from the following related to National Income A) National Income is the total market value of all final goods and services produced annually in a country B) National income is the total income accrued to a country from various economic activities in a year's time (TSTET 28 June 2025)",
    "options": [
      "Only A is true",
      "Only B is true",
      "Both A and B are true",
      "Both A and B are not true"
    ],
    "correctAnswer": 2,
    "explanation": "Both statements provide valid definitions of National Income. Statement A defines it from the production (or output) perspective, representing the value of goods and services. Statement B defines it from the income perspective, representing the total earnings from those economic activities. In national accounting, these two measures should be equal."
  },
  {
    "id": 401,
    "question": "From among the following, identify the Primary Sector activities A) Gardening B) Bee Keeping C) Basket Weaving (Choose the correct answer) (TSTET 28 June 2025)",
    "options": [
      "Only A and B are true",
      "Only B and C are true",
      "Only C is true",
      "A, B and C are true"
    ],
    "correctAnswer": 0,
    "explanation": "The primary sector involves extracting raw materials directly from nature. Gardening (agriculture) and Bee Keeping (apiculture) fit this definition. Basket weaving, however, is a manufacturing activity where a raw material (like bamboo or cane) is processed into a finished good, placing it in the secondary sector."
  },
  {
    "id": 402,
    "question": "This type of farming is practiced in areas with High Population Density on land (TSTET 28 June 2025)",
    "options": [
      "Intensive Subsistence Farming",
      "Slash and burn method of farming",
      "Simple Subsistence farming",
      "Commercial Farming"
    ],
    "correctAnswer": 0,
    "explanation": "Intensive subsistence farming is characterized by the cultivation of small landholdings with high inputs of labor to generate high yields per unit of area. This form of agriculture is common in densely populated regions where land is scarce."
  },
  {
    "id": 403,
    "question": "Fixation of minimum support price for agricultural product is done by (TSTET 28 June 2025)",
    "options": [
      "State Ministry of Agriculture",
      "Market Committee",
      "Commission for Agriculture Costs and Prices",
      "Food Corporation of India"
    ],
    "correctAnswer": 2,
    "explanation": "The Government of India determines the Minimum Support Price (MSP) for major agricultural products each year based on the recommendations of the Commission for Agricultural Costs and Prices (CACP)."
  },
  {
    "id": 404,
    "question": "This sector was given more priority in industrial policy of 1991 in India (TSTET 28 June 2025)",
    "options": [
      "Public Sector",
      "Private Sector",
      "Cooperative Sector",
      "Joint Sector"
    ],
    "correctAnswer": 1,
    "explanation": "The New Industrial Policy of 1991 ushered in the era of Liberalization, Privatization, and Globalization (LPG). It significantly reduced the role of the public sector, abolished industrial licensing for most industries, and opened up the economy, thereby giving major priority to the growth and participation of the private sector."
  },
  {
    "id": 405,
    "question": "In the following stages of Paper Production, the length and thickness of the paper is set at this stage (TSTET 28 June 2025)",
    "options": [
      "Spreading the pulp",
      "Chipping",
      "Making the wood pulp",
      "Cutting"
    ],
    "correctAnswer": 0,
    "explanation": "In a paper mill, after the pulp is prepared, it is fed into a paper-making machine. At the 'wet end' of this machine, the pulp slurry is spread evenly onto a large screen. This is the stage where the continuous sheet of paper is formed, and its thickness (basis weight) and width are determined."
  },
  {
    "id": 406,
    "question": "One of the following is NOT the general function of Reserve Bank of India (TSTET 28 June 2025)",
    "options": [
      "Banker to the Government",
      "Custodian of foreign exchange",
      "Control of credit",
      "Inspection of the banks"
    ],
    "correctAnswer": 3,
    "explanation": "While inspection of banks is a crucial activity performed by the RBI, it falls under its broader function as the 'Regulator and Supervisor of the Financial System'. The other options—acting as banker to the government, managing foreign exchange, and controlling credit—are considered high-level, overarching general functions."
  },
  {
    "id": 407,
    "question": "The formal source of Credit from the following is (TSTET 28 June 2025)",
    "options": [
      "Traders",
      "Cooperative Societies",
      "Moneylenders",
      "Friends and relatives"
    ],
    "correctAnswer": 1,
    "explanation": "Formal sources of credit include banks and cooperative societies, which are regulated by the government and the Reserve Bank of India. Informal sources like moneylenders, traders, and relatives operate outside this formal regulatory framework."
  },
  {
    "id": 408,
    "question": "In India, National Income is calculated by (TSTET 28 June 2025)",
    "options": [
      "National statistical office",
      "Planning commission",
      "Ministry of Finance",
      "Reserve Bank of India"
    ],
    "correctAnswer": 0,
    "explanation": "The estimation of national income in India is carried out by the National Statistical Office (NSO), which is a wing of the Ministry of Statistics and Programme Implementation (MoSPI)."
  },
  {
    "id": 409,
    "question": "This is not related to the features of Social Studies (TSTET 28 June 2025)",
    "options": [
      "The study of human relations",
      "The study of modern problems",
      "The study of ancient times and has no relation with present life",
      "The study of the development of human society"
    ],
    "correctAnswer": 2,
    "explanation": "A core principle of Social Studies is to understand the connections between the past and the present. It studies history and human development to provide context for modern problems and human relations. The statement that it has no relation to present life is fundamentally incorrect."
  },
  {
    "id": 410,
    "question": "'Taxila' and 'Nalanda' are the best examples for this source of history (TSTET 28 June 2025)",
    "options": [
      "Archeological sources",
      "Literacy sources",
      "Secular Literature",
      "Religious Literature"
    ],
    "correctAnswer": 0,
    "explanation": "The ruins of the ancient university complexes at Taxila and Nalanda are archaeological sites. The excavated structures, artifacts, seals, and inscriptions are physical remains from the past, making them primary archaeological sources of history."
  },
  {
    "id": 411,
    "question": "This method develops the habit of self-study among students (TSTET 28 June 2025)",
    "options": [
      "Lecture method",
      "Project method",
      "Observation method",
      "Story telling method"
    ],
    "correctAnswer": 1,
    "explanation": "The project method is a student-centered pedagogy where learners explore a topic or problem in depth. This process requires students to take initiative, conduct research, and manage their work, thereby fostering independence and the habit of self-study."
  },
  {
    "id": 412,
    "question": "An important step in Project Method is (TSTET 28 June 2025)",
    "options": [
      "Choosing a Project",
      "Implementing a project",
      "Writing a report of a project",
      "Planning a project"
    ],
    "correctAnswer": 0,
    "explanation": "The first step in the project method, as outlined by W.H. Kilpatrick, is 'Providing a Situation' where the teacher creates an environment that encourages students to identify and 'Choose a Project'. This initial step is vital as it provides purpose and motivation for all subsequent stages."
  },
  {
    "id": 413,
    "question": "Among the following, the example of a 'three dimensional aid' is (TSTET 28 June 2025)",
    "options": [
      "Chart",
      "Model",
      "Map",
      "Picture"
    ],
    "correctAnswer": 1,
    "explanation": "Three-dimensional (3D) aids have length, width, and height. A model, such as a globe or a replica of a building, is a 3D representation. Charts, maps, and pictures are two-dimensional (2D) as they are flat."
  },
  {
    "id": 414,
    "question": "Among the following, the visual aid is (TSTET 28 June 2025)",
    "options": [
      "Tape recorder",
      "Radio",
      "Television",
      "Linguaphone"
    ],
    "correctAnswer": 2,
    "explanation": "Visual aids convey information through sight. A tape recorder, radio, and linguaphone are audio aids. Television is technically an audio-visual aid, but among the choices, it is the only one that includes a visual component."
  },
  {
    "id": 415,
    "question": "A lesson plan is a (TSTET 28 June 2025)",
    "options": [
      "Teacher's mental and emotional visualisation of the classroom experience",
      "A statement of achievements to be realized",
      "A record that is to be submitted to the head master",
      "A document to be submitted to the government for salary"
    ],
    "correctAnswer": 0,
    "explanation": "A lesson plan is a teacher's detailed guide for instruction. It goes beyond a simple document; it reflects the teacher's thoughtful planning and visualization of how the learning experience will unfold in the classroom, including objectives, activities, and assessments."
  },
  {
    "id": 416,
    "question": "The father of the 'Micro Teaching Method' is (TSTET 28 June 2025)",
    "options": [
      "B.S. Bloom",
      "Dwight W. Allen",
      "Skinner",
      "Pavlov"
    ],
    "correctAnswer": 1,
    "explanation": "Microteaching as a teacher training technique was pioneered at Stanford University in the early 1960s. Dr. Dwight W. Allen is credited as its main originator."
  },
  {
    "id": 417,
    "question": "This is not a part of Herbartian steps of lesson planning (TSTET 28 June 2025)",
    "options": [
      "Preparation",
      "Home work",
      "Presentation",
      "Comparison"
    ],
    "correctAnswer": 1,
    "explanation": "The formal Herbartian five-step system includes Preparation, Presentation, Association (Comparison), Generalization, and Application. 'Home work' is an activity assigned to students to complete outside the class and is not considered one of the core instructional steps of the lesson itself."
  },
  {
    "id": 418,
    "question": "Which one of the following is not considered as a tool for formative assessment? (TSTET 28 June 2025)",
    "options": [
      "Multiple choice questions",
      "Projects",
      "Oral questions",
      "Group work"
    ],
    "correctAnswer": 0,
    "explanation": "Formative assessment is 'assessment for learning' used to monitor progress and provide feedback. While MCQs can be used formatively, tools like projects, oral questions, and group work are more inherently suited for this purpose as they reveal students' thought processes. MCQs are very commonly used for summative assessment (assessment of learning)."
  },
  {
    "id": 419,
    "question": "Which is the first step in problem solving method? (TSTET 28 June 2025)",
    "options": [
      "Formulation of hypothesis",
      "Collection of data",
      "Creating the problem situation",
      "Analysis of data"
    ],
    "correctAnswer": 2,
    "explanation": "The problem-solving method begins with the teacher introducing a problem or creating a situation that presents a challenge to the students. This first step, 'Creating the problem situation' or 'Problem awareness', is essential for defining the task and motivating the learners."
  },
  {
    "id": 420,
    "question": "CCE means (TSTET 28 June 2025)",
    "options": [
      "Continuous and Comprehensive Examination",
      "Continuous and Comprehensive Evaluation",
      "Central and Comprehensive Examination",
      "Continuous and Central Evaluation"
    ],
    "correctAnswer": 1,
    "explanation": "CCE stands for Continuous and Comprehensive Evaluation. It's a system of school-based evaluation that covers all aspects of a student's development. 'Continuous' refers to regular assessments throughout the year, and 'Comprehensive' means it covers both scholastic (academic) and co-scholastic (skills, attitudes, values) areas."
  },
  {
    "id": 421,
    "question": "Identify the INCORRECT statement regarding the Indian Islands from among the following (TSTET 29 June 2025)",
    "options": [
      "Narkondam and Barren Islands are of Volcanic Origin",
      "The total Geographical area of Lakshadweep Islands is 32 Sq. Kms",
      "The Lakshadweep islands are famous for a great variety of flora and fauna",
      "The southernmost tip of India is found in Lakshadweep Island"
    ],
    "correctAnswer": 3,
    "explanation": "The southernmost tip of India is Indira Point, which is located in the Great Nicobar Island, part of the Andaman and Nicobar Islands. The other statements are correct: Barren Island is an active volcano, Lakshadweep's area is 32 sq km, and it is known for its rich biodiversity."
  },
  {
    "id": 422,
    "question": "At this place, the river Ganga which emerges from the mountains reaches on to the Plains (TSTET 29 June 2025)",
    "options": [
      "Alakananda",
      "Devaprayaga",
      "Allahabad",
      "Haridwar"
    ],
    "correctAnswer": 3,
    "explanation": "The Ganga river flows from the Himalayas and enters the Indo-Gangetic Plains for the first time at the pilgrimage city of Haridwar in Uttarakhand."
  },
  {
    "id": 423,
    "question": "Towards the end of the summer season, these help in the early ripening of mangoes and other plantation crops in Peninsular India (TSTET 29 June 2025)",
    "options": [
      "Trade Winds",
      "pre-monsoon showers",
      "North-East Monsoon Winds",
      "Western Disturbances"
    ],
    "correctAnswer": 1,
    "explanation": "Pre-monsoon showers, which occur before the main southwest monsoon, are locally known as 'Mango Showers' in states like Kerala and Karnataka because they are crucial for the ripening of mangoes."
  },
  {
    "id": 424,
    "question": "Infant mortality rate (IMR) refers to (TSTET 29 June 2025)",
    "options": [
      "the number of infant deaths, below the age of one year per 1,000 live births in a specific population and time period",
      "the number of infant deaths, below the age of one year per 100 live births in a specific population and time period",
      "the number of deaths, below the age of five years per 100 live births in a specific population and time period",
      "The number of deaths, below the age of two years per 1000 live births in a specific population and time period"
    ],
    "correctAnswer": 0,
    "explanation": "The Infant Mortality Rate (IMR) is a standard health indicator defined as the number of deaths of children under one year of age for every 1,000 live births during a specific period."
  },
  {
    "id": 425,
    "question": "This country in Africa is often referred to as the \"Land of Copper\" (TSTET 29 June 2025)",
    "options": [
      "Ghana",
      "Sudan",
      "Zambia",
      "Libya"
    ],
    "correctAnswer": 2,
    "explanation": "Zambia is renowned for its vast copper reserves and is a major global producer of the metal. Its economy is heavily reliant on copper mining, particularly in the Copperbelt Province, earning it the nickname 'Land of Copper'."
  },
  {
    "id": 426,
    "question": "Among the following, the layer that forms nearly 83% of the volume of the earth is (TSTET 29 June 2025)",
    "options": [
      "Continental Crust",
      "Oceanic Crust",
      "Mantle",
      "Core"
    ],
    "correctAnswer": 2,
    "explanation": "The Earth's mantle is the layer located between the crust and the outer core. It is the thickest layer and constitutes about 83% of the Earth's total volume."
  },
  {
    "id": 427,
    "question": "The Sarees made at this place are of unique design and colour which is quite distinct from other silk sarees. So, it is the first handloom cloth patented in India (TSTET 29 June 2025)",
    "options": [
      "Banaras Sarees",
      "Pochampally Sarees",
      "Gadwal Sarees",
      "Kothakota Sarees"
    ],
    "correctAnswer": 1,
    "explanation": "Pochampally Ikat from Telangana was the first traditional Indian craft to be granted Geographical Indication (GI) status in 2005. This protection is similar to a patent for products specific to a geographical location."
  },
  {
    "id": 428,
    "question": "Among the following Asian countries, the country which is ahead in every aspect such as per capita income, Life Expectancy at Birth, Mean Years of Schooling etc as per HDI report 2018 (TSTET 29 June 2025)",
    "options": [
      "India",
      "Sri Lanka",
      "Pakistan",
      "Bangladesh"
    ],
    "correctAnswer": 1,
    "explanation": "According to the 2018 Human Development Index (HDI) report published by the UNDP, Sri Lanka was ranked significantly higher (in the 'High' human development category) than India, Pakistan, and Bangladesh (all in the 'Medium' human development category)."
  },
  {
    "id": 429,
    "question": "Renewable Resource means (TSTET 29 June 2025)",
    "options": [
      "the resources that continue to exist despite being consumed",
      "The resource that cannot be readily replaced by natural means",
      "The resource that can be used in multiple ways",
      "The resource that cannot be used in any way for production"
    ],
    "correctAnswer": 0,
    "explanation": "A renewable resource is a natural resource which will replenish to replace the portion depleted by usage and consumption, either through natural reproduction or other recurring processes. Examples include solar energy, wind, and water."
  },
  {
    "id": 430,
    "question": "Identify the INCORRECT statement regarding 'Latitudes' (TSTET 29 June 2025)",
    "options": [
      "The word latitude is derived from the Latin word 'Latitudo' which means length",
      "Latitude values range from 0° to 90° North and 90° South",
      "Every latitude must be designated with direction 'N' for North and 'S' for South",
      "Equator is the largest among all the latitudes"
    ],
    "correctAnswer": 0,
    "explanation": "The Latin word 'Latitudo' means 'breadth' or 'width,' which accurately describes the horizontal lines of latitude. 'Length' corresponds to longitude. The other statements are all correct facts about latitudes."
  },
  {
    "id": 431,
    "question": "Submarine Canyons which were found in Continental slope were formed by the process of (TSTET 29 June 2025)",
    "options": [
      "Erosion of wind",
      "Waves",
      "Erosion of Glaciers and rivers",
      "Erosion of Wind and waves"
    ],
    "correctAnswer": 2,
    "explanation": "Submarine canyons are primarily formed by turbidity currents (underwater avalanches of sediment). However, many are also extensions of river systems that carved channels across the continental shelf during ice ages when sea levels were much lower."
  },
  {
    "id": 432,
    "question": "These forests grow in dry areas with little rainfall and high temperatures (TSTET 29 June 2025)",
    "options": [
      "Evergreen Forests",
      "Coniferous forests",
      "Thorny Forests",
      "Deciduous forests"
    ],
    "correctAnswer": 2,
    "explanation": "Thorny forests, or thorn scrubs, are characteristic of arid and semi-arid regions. The plants in these forests have adaptations like long roots, thorns, and small leaves to conserve water in conditions of low rainfall and high temperatures."
  },
  {
    "id": 433,
    "question": "The possibility of percolation of water into the soil is greater when (TSTET 29 June 2025)",
    "options": [
      "the flow of the rain water is checked by vegetation or bunds",
      "the river water is allowed to flow freely without any obstruction",
      "the surface rock is very hard",
      "the trees in the forests are cut down and allow the water to flow freely"
    ],
    "correctAnswer": 0,
    "explanation": "Percolation is the movement of water through soil. When the flow of surface runoff is slowed by vegetation or bunds, the water has more time to seep into the ground, thus increasing percolation and recharging groundwater."
  },
  {
    "id": 434,
    "question": "As per the regulations of the Indus Water Treaty-1960, India can use only 20% of the total water carried by the Indus River System and this water can be used for irrigation in these states of India (TSTET 29 June 2025)",
    "options": [
      "Punjab, Haryana and Rajasthan",
      "Punjab, Himachal Pradesh and Jammu and Kashmir",
      "Punjab. Haryana and Jammu and Kashmir",
      "Punjab, Haryana and Himachal Pradesh"
    ],
    "correctAnswer": 0,
    "explanation": "Under the Indus Waters Treaty, India has full rights over the waters of the three eastern rivers: Ravi, Beas, and Sutlej. The irrigation systems fed by these rivers primarily serve Punjab, Haryana, and Rajasthan."
  },
  {
    "id": 435,
    "question": "This formed the foundation for India's Democracy (TSTET 29 June 2025)",
    "options": [
      "The values set forth by the American Constitution",
      "The ideals like liberalism and authoritarianism",
      "The directive principles of State Policy adopted from Irish Constitution",
      "The Values that inspired and guided the Indian freedom struggle"
    ],
    "correctAnswer": 3,
    "explanation": "The core principles of Indian democracy, such as liberty, equality, fraternity, and justice, are derived from the values that energized the national movement for independence. These values are explicitly stated in the Preamble of the Constitution."
  },
  {
    "id": 436,
    "question": "In the Indian Constitution, these lay down some specific tasks before the Government of India such as Universalizing Literacy, protection of Environment etc. (TSTET 29 June 2025)",
    "options": [
      "Fundamental Rights of the Indian Constitution",
      "Fundamental Duties of a Citizen",
      "Directive Principles of a State Policy",
      "Human Rights"
    ],
    "correctAnswer": 2,
    "explanation": "The Directive Principles of State Policy (DPSP) are guidelines for the state to follow in governance. They include promoting education (Article 45), protecting the environment (Article 48A), and other social and economic goals."
  },
  {
    "id": 437,
    "question": "This independent institution supervises the expenditure of the Government in India (TSTET 29 June 2025)",
    "options": [
      "NITI Aayog",
      "Comptroller and Auditor General",
      "Finance Commission",
      "Attorney General"
    ],
    "correctAnswer": 1,
    "explanation": "The Comptroller and Auditor General (CAG) of India is the supreme audit institution. It is a constitutional body that audits all receipts and expenditures of the central and state governments to ensure financial accountability."
  },
  {
    "id": 438,
    "question": "In 2009, the Indian Parliament passed the \"Right of Children to free and compulsory Education Act\" in order to (TSTET 29 June 2025)",
    "options": [
      "Ensure that all children below the age of 14 years get quality education",
      "Ensure that all children living in the rural areas only get quality education only",
      "Ensure that all children below the age of 16 years get quality education",
      "Ensure that all Physically Handicapped Children only get quality education"
    ],
    "correctAnswer": 0,
    "explanation": "The Right to Education (RTE) Act, 2009, operationalized the fundamental right to education for all children in the age group of 6 to 14 years, making elementary education free and compulsory."
  },
  {
    "id": 439,
    "question": "If there are any differences between the two houses of the Parliament in passing an ordinary law, the final decision shall be taken in (TSTET 29 June 2025)",
    "options": [
      "The Lok Sabha only",
      "The Rajya Sabha only",
      "The state Legislative Assemblies",
      "The joint session of the Parliament"
    ],
    "correctAnswer": 3,
    "explanation": "To resolve a deadlock between the Lok Sabha and Rajya Sabha on an ordinary bill, Article 108 of the Constitution provides for a joint sitting of both houses, summoned by the President. The decision is then made by a majority vote."
  },
  {
    "id": 440,
    "question": "One of the following is NOT the aim of the 42nd Amendment of the Indian Constitution (TSTET 29 June 2025)",
    "options": [
      "Excluding the courts from election disputes",
      "Making education as a fundamental Right",
      "Making the judiciary subservient to Parliament",
      "Strengthening of Central Government when compared to the state Governments"
    ],
    "correctAnswer": 1,
    "explanation": "Making education a fundamental right was achieved through the 86th Amendment Act of 2002, which inserted Article 21A. The 42nd Amendment (1976) was known for strengthening the central government and attempting to establish parliamentary supremacy over the judiciary."
  },
  {
    "id": 441,
    "question": "The central Government has passed the Criminal Legal Amendment Act in 2013. This was also known as (TSTET 29 June 2025)",
    "options": [
      "Sharada Act",
      "Nirbhaya Act",
      "Disha Bill",
      "POCSO Act"
    ],
    "correctAnswer": 1,
    "explanation": "The Criminal Law (Amendment) Act, 2013, is popularly known as the Nirbhaya Act. It was enacted in response to the 2012 Delhi gang rape case to introduce stricter laws and punishments for crimes against women."
  },
  {
    "id": 442,
    "question": "The dance that was performed to worship lord Shiva aggressively in front of Nataraja idol at the Siva Temples to motivate the soldiers before going to wars (TSTET 29 June 2025)",
    "options": [
      "Dappu Nrityam",
      "Gussadi Nrityam",
      "Perini Nrityam",
      "Bharatanatyam"
    ],
    "correctAnswer": 2,
    "explanation": "Perini Sivatandavam, originating from Telangana during the Kakatiya dynasty, is a vigorous, masculine dance form. It was traditionally performed by warriors before going to battle to invoke the spirit of Lord Shiva."
  },
  {
    "id": 443,
    "question": "The Constitutional Advisor of the Drafting Committee of the Indian Constitution who became the first Indian Judge in the International Court of Justice was (TSTET 29 June 2025)",
    "options": [
      "Alladi Krishna Swamy Iyer",
      "B.L. Mitter",
      "K.M. Munshi",
      "Sir Benegal Narsingh Rao"
    ],
    "correctAnswer": 3,
    "explanation": "Sir B. N. Rau served as the Constitutional Advisor to the Constituent Assembly of India and played a key role in drafting the constitution. He later became a judge at the International Court of Justice (ICJ) from 1952 to 1953."
  },
  {
    "id": 444,
    "question": "Jyotiba Phule founded Satya Shodak Samaj to build a new society based on (TSTET 29 June 2025)",
    "options": [
      "Caste System",
      "Truth and Equality",
      "Equity and Social Justice",
      "Political Justice and Political Equality"
    ],
    "correctAnswer": 1,
    "explanation": "Jyotiba Phule established the Satyashodhak Samaj (Truth-Seekers' Society) in 1873 with the mission of liberating the lower castes from exploitation and oppression. Its core ideology was based on the principles of truth, equality, and rationalism."
  },
  {
    "id": 445,
    "question": "The Government of India appointed a Supreme Court judge B.P. Jeevan Reddy to look into the possibilities of (TSTET 29 June 2025)",
    "options": [
      "convincing the people of Manipur to remain in India",
      "revoking the AFSPA Act in north-eastern states",
      "preventing public disorder due to alcohol abuse",
      "maintaining law and order in the state"
    ],
    "correctAnswer": 1,
    "explanation": "In 2004, a committee headed by Justice B.P. Jeevan Reddy was appointed to review the Armed Forces (Special Powers) Act, 1958 (AFSPA), following widespread protests against its misuse, particularly in the northeastern states."
  },
  {
    "id": 446,
    "question": "As per this article of the Human Rights \"No one shall be subjected to arbitrary arrest, detention or exile\" (TSTET 29 June 2025)",
    "options": [
      "Article 3",
      "Article 5",
      "Article 9",
      "Article 13"
    ],
    "correctAnswer": 2,
    "explanation": "Article 9 of the Universal Declaration of Human Rights (UDHR) explicitly states, 'No one shall be subjected to arbitrary arrest, detention or exile.' It protects an individual's right to liberty and security."
  },
  {
    "id": 447,
    "question": "The Lion tailed macaque and many other species of insects and birds are unique in this place of India (TSTET 29 June 2025)",
    "options": [
      "Silent Valley in Western Ghats",
      "Damodar Valley",
      "Nallamala Forests of Andhra Pradesh",
      "Pench forests in Madhya Pradesh"
    ],
    "correctAnswer": 0,
    "explanation": "The Silent Valley National Park, located in the Nilgiri hills of the Western Ghats in Kerala, is a unique biodiversity hotspot. It is especially known for being the last viable habitat for the endangered lion-tailed macaque."
  },
  {
    "id": 448,
    "question": "In 1969, Monarchy was abolished in Libya and it had declared itself as (TSTET 29 June 2025)",
    "options": [
      "A Democratic Libyan Arab Republic",
      "A Communist Libyan Arab Republic",
      "The Socialist Libyan Arab Republic",
      "Libyan Arab Republic"
    ],
    "correctAnswer": 3,
    "explanation": "Following the military coup led by Muammar Gaddafi on September 1, 1969, which overthrew the monarchy of King Idris, the country was officially named the Libyan Arab Republic."
  },
  {
    "id": 449,
    "question": "Norman Ernest Borlaug, the father of Green Revolution belongs to this country (TSTET 29 June 2025)",
    "options": [
      "United States of America",
      "Sweden",
      "Norway",
      "Germany"
    ],
    "correctAnswer": 0,
    "explanation": "Norman Borlaug was an American agronomist who led initiatives worldwide that contributed to the extensive increases in agricultural production termed the Green Revolution. He was awarded the Nobel Peace Prize in 1970 for his work."
  },
  {
    "id": 450,
    "question": "This crop is used both as food and fodder (TSTET 29 June 2025)",
    "options": [
      "Pulses",
      "Sugarcane",
      "Oil Seeds",
      "Maize"
    ],
    "correctAnswer": 3,
    "explanation": "Maize (corn) is a versatile crop. The grain is consumed by humans and is also a primary component in livestock feed (fodder). The rest of the plant, like the stalks and leaves, is also used as animal fodder."
  },
  {
    "id": 451,
    "question": "At this stage of Paper Production, the small wood chips are sent to fibre line section (TSTET 29 June 2025)",
    "options": [
      "Spreading the pulp",
      "Chipping",
      "Making the wood pulp",
      "Cutting"
    ],
    "correctAnswer": 2,
    "explanation": "The process of converting wood chips into a mass of separated fibers is known as pulping. This is the stage of 'Making the wood pulp'. The chips are sent to a digester (part of the fiber line) where chemicals and heat break them down into pulp."
  },
  {
    "id": 452,
    "question": "In this sector of the Indian economy, more number of female employees are working (TSTET 29 June 2025)",
    "options": [
      "Agricultural Sector",
      "Industrial Sector",
      "Service Sector",
      "Quaternary Sector"
    ],
    "correctAnswer": 0,
    "explanation": "The agricultural sector is the largest employer of women in India. A very high percentage of India's female workforce is engaged in agriculture, including roles as cultivators and laborers."
  },
  {
    "id": 453,
    "question": "The overall impact of New Industrial Policy 1991 on the Indian Economy was (TSTET 29 June 2025)",
    "options": [
      "It led to rapid economic growth and liberalisation",
      "It had no significant impact",
      "It led to decline in economic growth",
      "It increased the government control over the economy"
    ],
    "correctAnswer": 0,
    "explanation": "The New Industrial Policy of 1991 was a key component of India's economic reforms. It dismantled the 'License Raj,' promoted privatization, and opened the economy to foreign investment, ushering in an era of liberalisation and higher economic growth."
  },
  {
    "id": 454,
    "question": "From the following options, identify the primary function of money (TSTET 29 June 2025)",
    "options": [
      "Medium of exchange only",
      "Measure of Value only",
      "Store of Value",
      "Medium of exchange and measure of Value"
    ],
    "correctAnswer": 3,
    "explanation": "Economists identify two primary functions of money: being a 'medium of exchange' to facilitate transactions and a 'measure of value' (or unit of account) to provide a common benchmark for pricing. Other functions like 'store of value' are considered secondary."
  },
  {
    "id": 455,
    "question": "Among the following, the amount deposited in this account is more convenient to the business people (TSTET 29 June 2025)",
    "options": [
      "Saving Deposits",
      "Current Deposits",
      "Term Deposits",
      "Recurring Deposits"
    ],
    "correctAnswer": 1,
    "explanation": "Current accounts (Current Deposits) are designed for businesses, traders, and entrepreneurs who need to make frequent transactions. They do not have limits on the number of transactions and offer overdraft facilities, which are essential for business operations."
  },
  {
    "id": 456,
    "question": "Whenever there is a price rise, the Reserve Bank of India which is an apex body for all the banks in India will A) Reduces the money circulation in the economy B) Asks the banks to lend less or allow depositors to withdraw less C) Controls the interest payments paid to depositors or received from the depositors'. Choose the correct option from the following (TSTET 29 June 2025)",
    "options": [
      "A, B and C are correct",
      "Only A and B are correct",
      "A, B and C are incorrect",
      "Only B and C are correct"
    ],
    "correctAnswer": 0,
    "explanation": "To combat inflation (price rise), the RBI employs contractionary monetary policy. This involves: (A) reducing money supply, (B) making it harder for banks to lend (e.g., by raising rates), and (C) controlling interest rates to discourage borrowing and spending. All three actions are valid tools."
  },
  {
    "id": 457,
    "question": "Every year, Human Development Report is published by (TSTET 29 June 2025)",
    "options": [
      "United Nations Development Programme (UNDP)",
      "World Bank",
      "International Monetary Fund (IMF)",
      "World Health Organization (WHO)"
    ],
    "correctAnswer": 0,
    "explanation": "The Human Development Report, which includes the well-known Human Development Index (HDI), is the flagship annual publication of the United Nations Development Programme (UNDP)."
  },
  {
    "id": 458,
    "question": "Which of the following is the correct time-lag for the financial year of India? (TSTET 29 June 2025)",
    "options": [
      "15th Mar to 14th March of the following year",
      "1st April to 1st March of the following year",
      "1st April to 31st March of the following year",
      "1st January to 31st December of the following year"
    ],
    "correctAnswer": 2,
    "explanation": "The official financial year, also known as the fiscal year, for the Government of India and for accounting purposes in the country runs from April 1st to March 31st of the subsequent calendar year."
  },
  {
    "id": 459,
    "question": "\"We have emerged from this war, the most powerful nation in the world—the most powerful nation, perhaps, in all history.\" Whose words were these? (TSTET 29 June 2025)",
    "options": [
      "Winston Churchill",
      "Harry Truman",
      "Woodrow Wilson",
      "F.D. Roosevelt"
    ],
    "correctAnswer": 1,
    "explanation": "This quote is from a radio address to the American people by U.S. President Harry S. Truman on August 9, 1945, after the use of atomic bombs on Japan, reflecting on America's dominant global position at the end of World War II."
  },
  {
    "id": 460,
    "question": "According to this Act, \"adult male labourers could not be made to work for more than 12 hours per day\" (TSTET 29 June 2025)",
    "options": [
      "Factory Act 1881",
      "Factory Act 1861",
      "Factory Act 1871",
      "Factory Act 1911"
    ],
    "correctAnswer": 3,
    "explanation": "The Indian Factory Act of 1911 was a key piece of labor legislation that introduced a significant reform by limiting the working hours for adult male workers in textile factories to a maximum of 12 hours per day."
  },
  {
    "id": 461,
    "question": "In 1867, Prarthana Samaj in Bombay was started by (TSTET 29 June 2025)",
    "options": [
      "Swamy Dayanand Saraswathi",
      "Ram Rammohan Roy",
      "R.G. Bhandarkar",
      "Swamy Vivekananda"
    ],
    "correctAnswer": 2,
    "explanation": "The Prarthana Samaj was founded by Atmaram Pandurang in 1867. However, it gained immense influence and strength with the joining of prominent social reformers like Mahadev Govind Ranade and the noted scholar R.G. Bhandarkar, who is a key figure associated with the Samaj."
  },
  {
    "id": 462,
    "question": "The Enabling Act which was passed on 3rd march, 1933 gave Adolf Hitler all powers to (TSTET 29 June 2025)",
    "options": [
      "rule Germany Democratically",
      "sideline Parliament and rule by his order",
      "establish proletarian form of Government in Germany",
      "conduct elections in Germany and rule by its order"
    ],
    "correctAnswer": 1,
    "explanation": "The Enabling Act of 1933 was a critical law that granted the German Cabinet, headed by Chancellor Adolf Hitler, the power to enact laws without the involvement of the Reichstag (Parliament). It effectively dismantled democratic processes and established the legal foundation for Hitler's dictatorship."
  },
  {
    "id": 463,
    "question": "Among the following, the industrialist that started the 'Assembly Line Method' of production to produce more cars quickly (TSTET 29 June 2025)",
    "options": [
      "Volkswagen",
      "General Motors",
      "Ford Motors",
      "Maruthi"
    ],
    "correctAnswer": 2,
    "explanation": "Henry Ford, founder of Ford Motors, is credited with pioneering the moving assembly line in 1913. This innovation revolutionized manufacturing by drastically reducing the time and cost required to produce automobiles like the Model T."
  },
  {
    "id": 464,
    "question": "On 8th March 1917, the women of this city of Russia took out a procession demanding 'Peace and Bread' (TSTET 29 June 2025)",
    "options": [
      "Moscow",
      "St. Petersburg",
      "Novosibirsk",
      "Chelyabinsk"
    ],
    "correctAnswer": 1,
    "explanation": "The February Revolution of 1917 began in St. Petersburg (then known as Petrograd). On March 8th (International Women's Day), thousands of women textile workers went on strike, marching for 'Peace and Bread', an event which ignited the wider revolution that led to the abdication of the Tsar."
  },
  {
    "id": 465,
    "question": "The invocation part of an inscription is Prashasti, which contains details about (TSTET 29 June 2025)",
    "options": [
      "The brahmins and their writings",
      "The ruling family, their predecessor, and the period to which they belong",
      "The distribution of land and the method of collection of taxes from the people",
      "People of that kingdom and their activities"
    ],
    "correctAnswer": 1,
    "explanation": "A Prashasti is a eulogistic inscription, common in Indian history, composed in praise of a ruler. It typically details the king's ancestry (predecessors), his personal achievements, his victories, and the timeline of his reign."
  },
  {
    "id": 481,
    "question": "The main land of India extends in between these latitudes (TSTET 29 June 2025)",
    "options": [
      "$8^{\\circ}4^{\\prime}$ N and $33^{\\circ}6^{\\prime}$ N latitudes",
      "$6^{\\circ}4^{\\prime}$ N and $33^{\\circ}6^{\\prime}$ N latitudes",
      "$8^{\\circ}4^{\\prime}$ N and $37^{\\circ}6^{\\prime}$ N latitudes",
      "$6^{\\circ}4^{\\prime}$ N and $37^{\\circ}6^{\\prime}$ N latitudes"
    ],
    "correctAnswer": 2,
    "explanation": "India's mainland extends from Kanyakumari in the south at $8^{\\circ}4^{\\prime}$ N latitude to the northernmost point in Kashmir at $37^{\\circ}6^{\\prime}$ N latitude. The latitude $6^{\\circ}4^{\\prime}$ N marks Indira Point, the southernmost tip of the Indian Union, which is not on the mainland."
  },
  {
    "id": 482,
    "question": "This sea coast remains mostly dry during the South-west monsoon season as it is in the rain shadow area of the Arabian sea branch and is parallel to the Bay of Bengal branch (TSTET 29 June 2025)",
    "options": [
      "Coromandel coast",
      "Canara Coast",
      "Konkan Coast",
      "Utkal Coast"
    ],
    "correctAnswer": 0,
    "explanation": "The Coromandel Coast, located on the southeastern coast of India, falls in the rain shadow region of the Western Ghats for the Arabian Sea branch of the monsoon. The Bay of Bengal branch flows parallel to this coast, leading to minimal rainfall during the southwest monsoon season."
  },
  {
    "id": 483,
    "question": "The river basin of this river covers Parts of Maharashtra. Madhya Pradesh, Odisha, Telangana and Andhra Pradesh (TSTET 29 June 2025)",
    "options": [
      "Krishna",
      "Narmada",
      "Godavari",
      "Mahanadi"
    ],
    "correctAnswer": 2,
    "explanation": "The Godavari River has the largest basin in peninsular India. It originates in Maharashtra and flows through Telangana, Andhra Pradesh, Chhattisgarh, and Odisha, with its tributaries also covering parts of Madhya Pradesh."
  },
  {
    "id": 484,
    "question": "Identify the statement that best describes 'mixed farming' among the following (TSTET 29 June 2025)",
    "options": [
      "Using of land for growing food and fodder crops and for rearing livestock",
      "Using of land for growing food crops only",
      "The land used for growing of only plantation crops",
      "The land used for growing fodder crops and rearing of cattle only"
    ],
    "correctAnswer": 0,
    "explanation": "Mixed farming is an agricultural system where a farmer conducts different agricultural practices together, such as the cultivation of crops and the rearing of livestock, on the same piece of land."
  },
  {
    "id": 485,
    "question": "These trees grow mostly on the sea coasts, on sandy beaches and marshy lands and on lands affected by tidal waves (TSTET 29 June 2025)",
    "options": [
      "Thorny forests",
      "Evergreen forests",
      "Coniferous forests",
      "Mangrove forests"
    ],
    "correctAnswer": 3,
    "explanation": "Mangrove forests are specialized coastal ecosystems characterized by salt-tolerant trees (halophytes) that thrive in intertidal zones, marshy lands, and areas influenced by tidal waves."
  },
  {
    "id": 486,
    "question": "In a country, the Positive growth of population is observed when (TSTET 29 June 2025)",
    "options": [
      "The birth rate is more than the death rate",
      "The birth and death rate are equal",
      "The rate of migration is more than that of immigration",
      "The birth rate is less than the death rate"
    ],
    "correctAnswer": 0,
    "explanation": "Positive population growth, often referred to as natural increase, occurs when the birth rate (number of births per 1,000 people per year) exceeds the death rate (number of deaths per 1,000 people per year)."
  },
  {
    "id": 487,
    "question": "One among the following statements best describes the term 'Soil' (TSTET 29 June 2025)",
    "options": [
      "The breaking up of exposed rocks",
      "The layer existing in between the crust and the mantle",
      "The thin layer of grainy substance covering the surface of the earth",
      "The liquid material under the surface of the earth"
    ],
    "correctAnswer": 2,
    "explanation": "Soil is the uppermost layer of the Earth's surface, composed of a mix of minerals, organic matter, water, and air. The description of a 'thin layer of grainy substance' is the most accurate general definition among the choices."
  },
  {
    "id": 488,
    "question": "The main mineral constituents of the Continental crust and the Oceanic Crust respectively are (TSTET 29 June 2025)",
    "options": [
      "Sial (silica and alumina) and sima (silica and magnesium)",
      "sial (silica and alumina) and nife (nickel and ferrous)",
      "nife (nickel and ferrous) and sima (silica and magnesium)",
      "sima (silica and magnesium) and sial (silica and alumina)"
    ],
    "correctAnswer": 0,
    "explanation": "The continental crust is primarily composed of lighter rocks rich in silica and aluminum, hence called 'Sial'. The denser oceanic crust is made of rocks rich in silica and magnesium, referred to as 'Sima'."
  },
  {
    "id": 489,
    "question": "These rocks are formed when the molten magma cools and becomes solid (TSTET 29 June 2025)",
    "options": [
      "Igneous Rocks",
      "Metamorphic rocks",
      "Sedimentary rocks",
      "Sedimentary and Metamorphic rocks"
    ],
    "correctAnswer": 0,
    "explanation": "Igneous rocks are formed from the cooling and solidification of molten rock material, either magma (below the surface) or lava (on the surface). The term 'igneous' is derived from the Latin word for fire."
  },
  {
    "id": 490,
    "question": "The term 'Horticulture' refers to (TSTET 29 June 2025)",
    "options": [
      "Cultivation of grapes only",
      "Growing vegetables, flowers and fruits for commercial use",
      "Commercial rearing of silkworms",
      "Breeding of fish in specially constructed tanks and ponds"
    ],
    "correctAnswer": 1,
    "explanation": "Horticulture is the branch of agriculture focused on the cultivation of plants, including fruits, vegetables, flowers, and ornamental plants, often for commercial purposes."
  },
  {
    "id": 491,
    "question": "Among the following, the latitude passing through North America is (TSTET 29 June 2025)",
    "options": [
      "Tropic of Capricorn",
      "Equator",
      "Tropic of Cancer",
      "Antarctic Circle"
    ],
    "correctAnswer": 2,
    "explanation": "The Tropic of Cancer ($23.5^{\\circ}$ N latitude) is the major line of latitude that passes through the continent of North America, specifically through Mexico and the Bahamas."
  },
  {
    "id": 492,
    "question": "From among the following. identify the Non-Metamorphic rock (TSTET 29 June 2025)",
    "options": [
      "Marble stone",
      "Limestone",
      "Schist",
      "Quartzite"
    ],
    "correctAnswer": 1,
    "explanation": "Limestone is a sedimentary rock. Marble, schist, and quartzite are all metamorphic rocks. Marble is formed from limestone, quartzite from sandstone, and schist from shale or mudstone under heat and pressure."
  },
  {
    "id": 493,
    "question": "At times the river overflows its banks, then (TSTET 29 June 2025)",
    "options": [
      "It deposits layers of fine soil and other materials along river banks",
      "The speed of the river increases and erodes the top most layer of the soil",
      "It deposits only the material carried by it",
      "It leads to the formation of Gorges"
    ],
    "correctAnswer": 0,
    "explanation": "When a river floods and overflows its banks, the water spreads out and slows down, causing it to deposit the sediment it carries. This process builds up fertile floodplains."
  },
  {
    "id": 494,
    "question": "Among the following, these winds blow continuously and regularly throughout the year in a particular direction (TSTET 29 June 2025)",
    "options": [
      "Trade Winds",
      "Monsoon winds",
      "Hot local Winds",
      "Cold Local Winds"
    ],
    "correctAnswer": 0,
    "explanation": "Trade winds are a type of planetary (or permanent) wind that blows consistently throughout the year in a specific direction near the equator. Monsoon and local winds are seasonal or periodic."
  },
  {
    "id": 495,
    "question": "In the First Phase of the Agricultural Development i.e. in between 1950-1965, India invested heavily on (TSTET 29 June 2025)",
    "options": [
      "usage of high yielding variety seeds",
      "Provision of markets for the farmer's produce",
      "Construction of irrigation projects and power projects",
      "Encouraging Drip Irrigation"
    ],
    "correctAnswer": 2,
    "explanation": "During the initial Five-Year Plans (1951-1965), India's primary focus was on building foundational infrastructure. This included major investments in large-scale irrigation and power projects to boost agricultural productivity."
  },
  {
    "id": 496,
    "question": "The members of the constituent Assembly were chosen through indirect election by the members of the Provincial Legislative Assemblies that had been established under the (TSTET 29 June 2025)",
    "options": [
      "Government of India Act. 1935",
      "Minto Morely reforms, 1909",
      "Montague Chelmsford Reforms, 1919",
      "The Indian Independence Act, 1947"
    ],
    "correctAnswer": 0,
    "explanation": "The elections for the Constituent Assembly were held in 1946. The members were elected by the members of the provincial legislative assemblies, which were functioning under the framework provided by the Government of India Act, 1935."
  },
  {
    "id": 497,
    "question": "In this form of Government system, only those in government get their authority from the people and have to answer to the people (TSTET 29 June 2025)",
    "options": [
      "Communist",
      "Democratic",
      "Marxist",
      "Dictatorial"
    ],
    "correctAnswer": 1,
    "explanation": "A core principle of democracy is popular sovereignty, where the government derives its power from the consent of the governed. Elected officials are accountable to the people they represent."
  },
  {
    "id": 498,
    "question": "One among the following is NOT the Fundamental Right of the Indian Citizen (TSTET 29 June 2025)",
    "options": [
      "Right to protection against arrest and detention in certain cases",
      "Right to equality of opportunity in public employment",
      "Right to form associations or unions",
      "Right to move to the courts to issue direction for enforcement of Directive Principles of State Policy"
    ],
    "correctAnswer": 3,
    "explanation": "Fundamental Rights (Part III of the Constitution) are legally enforceable (justiciable), while Directive Principles of State Policy (Part IV) are non-justiciable guidelines for the government. Citizens cannot move courts to enforce Directive Principles."
  },
  {
    "id": 499,
    "question": "From among the following, identify the SAARC summits hosted by India (TSTET 29 June 2025)",
    "options": [
      "2nd, 8th summits only",
      "2nd. 8th and 14th summits",
      "14th and 18th summits",
      "2nd and 5th summits"
    ],
    "correctAnswer": 1,
    "explanation": "India has hosted the SAARC (South Asian Association for Regional Cooperation) summit three times: the 2nd summit in Bengaluru (1986), the 8th summit in New Delhi (1995), and the 14th summit in New Delhi (2007)."
  },
  {
    "id": 500,
    "question": "The headquarters of Greenpeace Movement was located at (TSTET 29 June 2025)",
    "options": [
      "New York",
      "London",
      "Alaska",
      "Amsterdam"
    ],
    "correctAnswer": 3,
    "explanation": "Greenpeace is a global non-governmental environmental organization. Its international coordinating body, Greenpeace International, is headquartered in Amsterdam, Netherlands."
  },
  {
    "id": 501,
    "question": "Who preached the idea of 'One Jati, one God and one Religion for all'? (TSTET 29 June 2025)",
    "options": [
      "Arigey Ramaswamy",
      "Narayana Guru",
      "Dr. B.R. Ambedkar",
      "Bhagya Reddy Varma"
    ],
    "correctAnswer": 1,
    "explanation": "Sree Narayana Guru, a social reformer from Kerala, famously proclaimed 'Oru Jathi, Oru Matham, Oru Daivam Manushyanu,' which translates to 'One Caste, One Religion, One God for Humanity,' as a call against the caste system."
  },
  {
    "id": 502,
    "question": "The nuclear scientist who played a key role in leading the human rights movement in the USSR was (TSTET 29 June 2025)",
    "options": [
      "Alexander Solzhenitsyn",
      "Mikhael Gorbachev",
      "Andrei Sakharov",
      "Mikhail Mikhailovich"
    ],
    "correctAnswer": 2,
    "explanation": "Andrei Sakharov was a renowned Soviet nuclear physicist who became a leading dissident and advocate for human rights and civil liberties in the Soviet Union. He was awarded the Nobel Peace Prize in 1975 for his efforts."
  },
  {
    "id": 503,
    "question": "The United Nations Secretary General who persuaded India and Pakistan to agree to a ceasefire during Indo-Pak war in 1965 (TSTET 29 June 2025)",
    "options": [
      "Ban Ki-moon",
      "Boutros Boutros-Ghali",
      "U Thant",
      "Trygve Lie"
    ],
    "correctAnswer": 2,
    "explanation": "U Thant of Burma, the third UN Secretary-General, played a significant diplomatic role during the 1965 Indo-Pakistani War. His personal interventions and missions to the subcontinent were instrumental in achieving a ceasefire."
  },
  {
    "id": 504,
    "question": "India and China signed the Pancha Sheel pact on (TSTET 29 June 2025)",
    "options": [
      "29th April, 1954",
      "29th April, 1955",
      "15th September, 1961",
      "25th December. 1971"
    ],
    "correctAnswer": 0,
    "explanation": "The Panchsheel, or the Five Principles of Peaceful Coexistence, were formally stated in the 'Agreement on trade and intercourse between Tibet Region of China and India,' signed by the two countries on April 29, 1954."
  },
  {
    "id": 505,
    "question": "The main objective of NAM during the Cold War was (TSTET 29 June 2025)",
    "options": [
      "To align with the Soviet bloc",
      "To align with the Western bloc",
      "To remain neutral and promote peace",
      "To form a military alliance"
    ],
    "correctAnswer": 2,
    "explanation": "The Non-Aligned Movement (NAM) was formed by developing countries during the Cold War to avoid aligning with either the US-led Western Bloc or the Soviet-led Eastern Bloc. Its primary goal was to maintain neutrality and advocate for peace and cooperation."
  },
  {
    "id": 506,
    "question": "In 1968. Saddam Hussain came to power in Iraq with the twin slogans of Arab Nationalism and Socialism. By 'Socialism', they meant (TSTET 29 June 2025)",
    "options": [
      "Distribution of oil resources among all the people of Iraq",
      "Use of oil resources for the welfare of Religious institutions",
      "Nationalising and utilising the oil resources to spread Islamism",
      "Nationalisation of oil resources and the use of oil revenues by the state to fund welfare measures"
    ],
    "correctAnswer": 3,
    "explanation": "The Ba'athist ideology combined Arab nationalism with a form of socialism that, in practice, meant state control over key industries. In Iraq, this involved nationalizing the country's oil resources and using the revenue to fund state-run welfare and development programs."
  },
  {
    "id": 507,
    "question": "The conference which was held in 1955 paved the way for the Non-Aligned Movement (TSTET 29 June 2025)",
    "options": [
      "Bandung Conference",
      "North Atlantic Treaty Organisation",
      "Warsaw Pact",
      "United Nations Organisation"
    ],
    "correctAnswer": 0,
    "explanation": "The Asian-African Conference, held in Bandung, Indonesia, in 1955, brought together leaders of 29 newly independent nations. The principles of cooperation and anti-colonialism established at this conference laid the groundwork for the formal creation of the Non-Aligned Movement in 1961."
  },
  {
    "id": 508,
    "question": "Identify the correct statement regarding an Ordinary Bill on the central subjects in India (TSTET 29 June 2025)",
    "options": [
      "The ordinary bills are to be passed in the Lok Sabha only",
      "If there are any differences between the two houses of the Parliament in passing an ordinary bill, the final decision shall be taken in a joint session of the Parliament",
      "The Rajya Sabha is empowered with more powers regarding ordinary bills",
      "As Lok Sabha has more members, it is likely to have more powers regarding ordinary bills"
    ],
    "correctAnswer": 1,
    "explanation": "For an ordinary bill to become law, it must be passed by both the Lok Sabha and the Rajya Sabha. If there is a disagreement or deadlock, Article 108 of the Constitution allows for a joint sitting of both houses to resolve the issue through a majority vote."
  },
  {
    "id": 509,
    "question": "Which of the following is the best example of Globalization? (TSTET 29 June 2025)",
    "options": [
      "Exchange of goods across the national boundaries",
      "Exchange of goods and services across the national boundaries",
      "Exchange of goods, services and capital across the national boundaries",
      "Exchange of goods, services, capital and information across the national boundaries"
    ],
    "correctAnswer": 3,
    "explanation": "Globalization is a broad process of increasing interconnectedness. It includes the flow of goods, services, and capital, but its modern definition is most complete when it also includes the rapid, cross-border exchange of information, ideas, and culture."
  },
  {
    "id": 510,
    "question": "One of the following is NOT applicable for a worker who works in the Organized Sector (TSTET 29 June 2025)",
    "options": [
      "The worker gets a regular salary at the end of the month",
      "The worker is not paid for leave",
      "The worker gets medical allowances",
      "The worker gets an appointment letter stating the terms and conditions of work when he/she joins work"
    ],
    "correctAnswer": 1,
    "explanation": "The organized sector is defined by regular employment, job security, and benefits mandated by law. These benefits include paid leave (casual, sick, etc.). Not being paid for leave is a characteristic of the unorganized sector."
  },
  {
    "id": 511,
    "question": "Identify the INCORRECT statement from the following related to Public Distribution System (PDS) (TSTET 29 June 2025)",
    "options": [
      "The poorest families are issued Antyodaya Cards",
      "Poor are issued BPL (White) cards",
      "Antyodaya and BPL cards are one and the same",
      "Above Poverty Line families are issued Pink Cards"
    ],
    "correctAnswer": 2,
    "explanation": "Under the Targeted Public Distribution System (TPDS), Antyodaya Anna Yojana (AAY) is a specific scheme that targets the 'poorest of the poor' among the Below Poverty Line (BPL) families. They are a sub-category of BPL, not the same thing."
  },
  {
    "id": 512,
    "question": "The concept of Sustainability first appeared in the year (TSTET 29 June 2025)",
    "options": [
      "1992",
      "1978",
      "1980",
      "1987"
    ],
    "correctAnswer": 3,
    "explanation": "The concept of sustainable development was prominently defined and popularized in the 1987 report 'Our Common Future' by the Brundtland Commission of the United Nations."
  },
  {
    "id": 513,
    "question": "The amount received by the Government in the form of interest, fees and dividends is known as (TSTET 29 June 2025)",
    "options": [
      "Tax Revenue Receipts",
      "Non-Tax Revenue Receipts",
      "Capital Receipts",
      "Non-Tax Capital Revenue Receipts"
    ],
    "correctAnswer": 1,
    "explanation": "Government revenue is classified into tax and non-tax revenue. Non-Tax Revenue includes all government income from sources other than taxes, such as interest earned on loans, dividends from public sector units, fees, fines, and grants."
  },
  {
    "id": 514,
    "question": "This service can be used for high value transactions (TSTET 29 June 2025)",
    "options": [
      "USSD",
      "RTGS",
      "UPI",
      "IMPS"
    ],
    "correctAnswer": 1,
    "explanation": "Real-Time Gross Settlement (RTGS) is a fund transfer system designed for high-value transactions. The minimum amount to be remitted through RTGS is ₹2 lakh, with no upper limit."
  },
  {
    "id": 515,
    "question": "The World Trade Organization came into effect in (TSTET 29 June 2025)",
    "options": [
      "6th March, 1996",
      "8th April, 1994",
      "5th February, 1994",
      "1st January, 1995"
    ],
    "correctAnswer": 3,
    "explanation": "The World Trade Organization (WTO) was officially established on January 1, 1995, as the successor to the General Agreement on Tariffs and Trade (GATT), following the conclusion of the Uruguay Round of multilateral trade negotiations."
  },
  {
    "id": 516,
    "question": "In India, the money supply is regulated by (TSTET 29 June 2025)",
    "options": [
      "The Government of India",
      "Commercial Banks",
      "Ministry of Finance",
      "The Reserve Bank of India"
    ],
    "correctAnswer": 3,
    "explanation": "The Reserve Bank of India (RBI), as the country's central bank, is responsible for formulating and implementing monetary policy, which includes managing the money supply to control inflation and ensure price stability."
  },
  {
    "id": 517,
    "question": "One of the following organizes the procurement of food grains and sale of food grains through Public Distribution System (TSTET 29 June 2025)",
    "options": [
      "Commission for Agricultural Costs and Prices",
      "Food Corporation of India",
      "Local Market Committee",
      "Agricultural Department of the State"
    ],
    "correctAnswer": 1,
    "explanation": "The Food Corporation of India (FCI) is the nodal agency of the Government of India that procures food grains from farmers at Minimum Support Price (MSP), maintains buffer stocks, and distributes them to states for the Public Distribution System (PDS)."
  },
  {
    "id": 518,
    "question": "A Postwoman Selling Milk to the consumers fall under this sector of the economy (TSTET 29 June 2025)",
    "options": [
      "Agricultural Sector",
      "Service Sector",
      "Secondary Sector",
      "Quaternary Sector"
    ],
    "correctAnswer": 1,
    "explanation": "The activity of selling and delivering a product is a service. Therefore, it falls under the tertiary sector, also known as the service sector, which provides services to consumers and businesses."
  },
  {
    "id": 519,
    "question": "Thomas Munro devised the Ryotwari Settlement System in this part of India (TSTET 29 June 2025)",
    "options": [
      "North-Western part",
      "Northern India",
      "North-East state",
      "Southern and Western part"
    ],
    "correctAnswer": 3,
    "explanation": "The Ryotwari System, a land revenue system where the government collected taxes directly from the cultivators (ryots), was primarily introduced by Thomas Munro in parts of the Madras and Bombay Presidencies, covering Southern and Western India."
  },
  {
    "id": 520,
    "question": "Among the following, the Famous Scholar and Anthropologist who studied the tribes of Telangana (TSTET 29 June 2025)",
    "options": [
      "Furer Haimendorf",
      "Clifford Geertz",
      "Margaret Mead",
      "Irawati Karve"
    ],
    "correctAnswer": 0,
    "explanation": "Christoph von Fürer-Haimendorf was an Austrian anthropologist who conducted extensive ethnographic studies on various tribal communities in India, including the Gonds, Chenchus, and Konda Reddis of the Telangana region in the 1940s."
  },
  {
    "id": 521,
    "question": "The first ruler of Magadha Mahajanapada in the 6th century BC was (TSTET 29 June 2025)",
    "options": [
      "Brihadratha",
      "Bimbisara",
      "Jarasandha",
      "Maha Padma Nanda"
    ],
    "correctAnswer": 1,
    "explanation": "Bimbisara, belonging to the Haryanka dynasty, is widely considered the first important king of the Magadha empire. He ruled in the 6th century BCE and expanded his kingdom through conquest and strategic marriages."
  },
  {
    "id": 522,
    "question": "The treaty in which France gave Alsace and Lorraine to Germany in 1871 was (TSTET 29 June 2025)",
    "options": [
      "The treaty of Paris",
      "The Treaty of Versailles",
      "The Treaty of Trianon",
      "The Treaty of Frankfurt"
    ],
    "correctAnswer": 3,
    "explanation": "The Treaty of Frankfurt, signed on May 10, 1871, officially ended the Franco-Prussian War. Under its terms, a defeated France was forced to cede the territories of Alsace and most of Lorraine to the newly unified German Empire."
  },
  {
    "id": 523,
    "question": "As per the French Constitution, these rights were considered as natural and inalienable rights A) Right to life B) Right to freedom of Speech C) Right to freedom of opinion D) Right to equality before law. Choose the correct answer (TSTET 29 June 2025)",
    "options": [
      "A & B only",
      "C & D only",
      "A, B & D only",
      "A, B, C & D"
    ],
    "correctAnswer": 3,
    "explanation": "The 1789 Declaration of the Rights of Man and of the Citizen, a key document of the French Revolution, established several rights as natural and inalienable. These included liberty, property, security, freedom of speech and opinion, and equality of all citizens before the law, which inherently includes the right to life."
  },
  {
    "id": 524,
    "question": "This sculpture of Michelangelo depicts Mary holding the dead body of Christ (TSTET 29 June 2025)",
    "options": [
      "The Pieta",
      "Dying Slave",
      "Sistine Chapel ceiling",
      "Madonna of Bruges"
    ],
    "correctAnswer": 0,
    "explanation": "The Pietà is a masterpiece of Renaissance sculpture by Michelangelo. Housed in St. Peter's Basilica, it depicts the Virgin Mary cradling the body of Jesus after his crucifixion."
  },
  {
    "id": 525,
    "question": "The teachings of Buddha and his followers have been compiled in A) Sutta Pitaka B) Abhidhamma Pitaka C) Vinaya Pitaka D) Gnana Pitaka Choose the correct answer (TSTET 29 June 2025)",
    "options": [
      "A, C & D only",
      "A, B & C only",
      "A, B, C & D",
      "A & B only"
    ],
    "correctAnswer": 1,
    "explanation": "The sacred scriptures of early Buddhism are known as the Tripitaka ('Three Baskets'). They consist of the Sutta Pitaka (discourses of the Buddha), the Vinaya Pitaka (rules of monastic discipline), and the Abhidhamma Pitaka (philosophical texts). 'Gnana Pitaka' is not one of the three."
  },
  {
    "id": 526,
    "question": "In 1947, a large number of campaigns were organized to integrate Hyderabad State into Indian Union under the leadership of (TSTET 29 June 2025)",
    "options": [
      "Swami Ramananda Tirtha",
      "Makdum Moinuddin",
      "Ravi Narayana Reddy",
      "P.V. Narasimha Rao"
    ],
    "correctAnswer": 0,
    "explanation": "Swami Ramananda Tirtha was the pivotal leader of the Hyderabad State Congress and spearheaded the popular movement against the Nizam's rule, advocating for the integration of the princely state of Hyderabad into the newly independent Indian Union."
  },
  {
    "id": 527,
    "question": "The International Cricket Council (ICC) was shifted from London to (TSTET 24 May 2024)",
    "options": [
      "Qatar",
      "Sydney",
      "Dubai",
      "Mumbai"
    ],
    "correctAnswer": 2,
    "explanation": "The International Cricket Council (ICC) headquarters were located at Lord's in London from its founding in 1909 until 2005. In August 2005, the ICC relocated its main office to Dubai, United Arab Emirates."
  },
  {
    "id": 528,
    "question": "One among the following was NOT the women members of the Constituent Assembly (TSTET 24 May 2024)",
    "options": [
      "Sucheta Kriplani",
      "Sarojini Naidu",
      "Durgabai Deshmukh",
      "Annie Besant"
    ],
    "correctAnswer": 3,
    "explanation": "Sucheta Kripalani, Sarojini Naidu, and Durgabai Deshmukh were prominent members of the Constituent Assembly of India. Annie Besant, a key figure in the Indian freedom struggle, passed away in 1933 and thus was not part of the Assembly, which was formed in 1946."
  },
  {
    "id": 529,
    "question": "In India, the Government will not be run on the basis of any religion. Citizen will have complete freedom to follow any religion or no religion at all. It means (TSTET 24 May 2024)",
    "options": [
      "India is a Sovereign State",
      "India is a Socialist State",
      "India is a Republican State",
      "India is a Secular State"
    ],
    "correctAnswer": 3,
    "explanation": "This principle describes secularism, a core tenet of the Indian Constitution. A secular state does not have an official state religion and ensures that all citizens have the freedom to practice, profess, and propagate any religion of their choice, or none at all."
  },
  {
    "id": 530,
    "question": "If there are differences between the two houses of the Indian parliament in passing any ordinary law, then the final decision shall be taken in (TSTET 24 May 2024)",
    "options": [
      "The Lok Sabha Only",
      "The Rajya Sabha only",
      "The joint session of the Parliament",
      "The Cabinet meeting headed by the Prime Minister of India"
    ],
    "correctAnswer": 2,
    "explanation": "Article 108 of the Indian Constitution provides a mechanism to resolve a deadlock between the two Houses of Parliament over an ordinary bill. The President of India can summon a joint sitting of both the Lok Sabha and the Rajya Sabha, where the bill is passed by a simple majority."
  },
  {
    "id": 531,
    "question": "Swami Vivekananda set up the Ramakrishna Mission with these objectives (TSTET 24 May 2024)",
    "options": [
      "To make the people believe in one Supreme God and to revive a reformed Hindu Religion",
      "To make the people engage in Social Work and Social Service for International Reconstruction",
      "To revive a reformed Hindu Religion and to engage in Social Work and Social Service for national Construction",
      "To preach ahimsa and to revive a reformed Hindu Religion"
    ],
    "correctAnswer": 2,
    "explanation": "Swami Vivekananda founded the Ramakrishna Mission with the twin mottos of 'Atmano Mokshartham Jagat Hitaya Cha' (For one's own salvation and for the welfare of the world). It focused on spreading Vedanta philosophy and engaging in social service activities like disaster relief, education, and healthcare as a form of spiritual practice, contributing to national upliftment."
  },
  {
    "id": 532,
    "question": "The Muslim social reformer who started a journal Muallim - e - Niswan for writing women's issues (TSTET 24 May 2024)",
    "options": [
      "Mohib Hussain",
      "Abdul Quayyum",
      "Sir Syed Ahmed Khan",
      "Nazar Hussain"
    ],
    "correctAnswer": 0,
    "explanation": "Mohib Hussain, a social reformer from Hyderabad, was a strong advocate for women's education and rights in the late 19th century. In 1892, he founded the weekly journal 'Muallim-e-Niswan' (Teacher of Women) to champion this cause."
  },
  {
    "id": 533,
    "question": "It shall be the duty of every citizen to maintain 'the unity and Sovereignty of India', is a (TSTET 24 May 2024)",
    "options": [
      "Fundamental Right",
      "Fundamental Duty of a citizen",
      "Directive principles of State Policy",
      "Economic Right of a citizen of India"
    ],
    "correctAnswer": 1,
    "explanation": "This is a Fundamental Duty enshrined in Article 51A(c) of the Indian Constitution. It mandates every citizen 'to uphold and protect the sovereignty, unity and integrity of India'."
  },
  {
    "id": 534,
    "question": "By 15th August, 1947, these three princely states had not agreed to sign the 'Instrument of Accession' with India (TSTET 24 May 2024)",
    "options": [
      "Hyderabad, Kashmir and Jodhpur",
      "Kashmir, Mysore and Hyderabad",
      "Raipur, Kashmir and Hyderabad",
      "Hyderabad, Kashmir and Junagadh"
    ],
    "correctAnswer": 3,
    "explanation": "At the time of India's independence, most princely states joined India. However, the rulers of Hyderabad, Jammu and Kashmir, and Junagadh initially decided against accession, leading to subsequent political and military interventions to integrate them."
  },
  {
    "id": 535,
    "question": "The Election Commission of India is an (TSTET 24 May 2024)",
    "options": [
      "Quasi-judicial body",
      "Judicial body",
      "Autonomous Constitutional body",
      "Statutory body"
    ],
    "correctAnswer": 2,
    "explanation": "The Election Commission of India is established by Article 324 of the Constitution. It is an independent and autonomous body, free from executive control, to ensure free and fair elections, making it an autonomous constitutional body."
  },
  {
    "id": 536,
    "question": "From among the following, identify the country located in the Indian Ocean (TSTET 24 May 2024)",
    "options": [
      "Madagascar",
      "Taiwan",
      "Bermuda",
      "Jamaica"
    ],
    "correctAnswer": 0,
    "explanation": "Madagascar is a large island nation located off the southeastern coast of the African continent in the Indian Ocean. Taiwan is in the Pacific Ocean, while Bermuda and Jamaica are in the Atlantic Ocean."
  },
  {
    "id": 537,
    "question": "The rate of GST for Televisions is 18%. The maximum retail price of a TV is Rs 70800. The amount of Tax to be paid to the Government for purchasing TV is (TSTET 24 May 2024)",
    "options": [
      "Rs 12744",
      "Rs 10800",
      "Rs 9000",
      "Rs 11474"
    ],
    "correctAnswer": 1,
    "explanation": "The Maximum Retail Price (MRP) is inclusive of GST. Let the base price be P. Then P + (18% of P) = 70800, which means 1.18P = 70800. The base price P = 70800 / 1.18 = 60000. The GST amount is 18% of the base price: 0.18 × 60000 = Rs 10800."
  },
  {
    "id": 538,
    "question": "One among the following is NOT a Characteristic feature of Developing Countries (TSTET 24 May 2024)",
    "options": [
      "Having Low Per Capita Income",
      "the problem of Unemployment and underemployment is observed",
      "Presence of excessive dependence on agriculture",
      "Having Low growth rate of population"
    ],
    "correctAnswer": 3,
    "explanation": "Developing countries are typically characterized by low per capita income, high unemployment, and heavy reliance on agriculture. However, they often have high population growth rates. A low population growth rate is more characteristic of developed countries."
  },
  {
    "id": 539,
    "question": "Among the following, the rate of interest is higher on these deposits in India (TSTET 24 May 2024)",
    "options": [
      "Saving Deposits",
      "Current Deposits",
      "Fixed Deposits",
      "Recurring Deposits"
    ],
    "correctAnswer": 2,
    "explanation": "Generally, banks offer the highest interest rates on Fixed Deposits (FDs). This is because the depositor agrees to keep the money with the bank for a fixed tenure, providing the bank with stable funds for lending. Current accounts typically offer no interest."
  },
  {
    "id": 540,
    "question": "In India, the biggest commercial bank among the following is (TSTET 24 May 2024)",
    "options": [
      "Reserve Bank of India",
      "State bank of India",
      "Axis bank",
      "ICICI Bank"
    ],
    "correctAnswer": 1,
    "explanation": "The State Bank of India (SBI) is the largest public sector and commercial bank in India by assets, deposits, and number of branches. The Reserve Bank of India is the central bank, not a commercial bank."
  },
  {
    "id": 541,
    "question": "These Mountains form the Southern boundary of Europe (TSTET 30 June 2025)",
    "options": [
      "The Eural Mountains",
      "The Caucasian Mountains",
      "Pyrenees Mountains",
      "Carpathian Mountains"
    ],
    "correctAnswer": 1,
    "explanation": "The Caucasus Mountains, located between the Black Sea and the Caspian Sea, are geographically considered the natural boundary separating Eastern Europe and Western Asia, thus forming Europe's southern border in that region."
  },
  {
    "id": 542,
    "question": "Most of the rocks under the soil in Telangana Consists of Granite, which are (TSTET 30 June 2025)",
    "options": [
      "Loose and Pervious Rocks",
      "Hard and impervious Rocks",
      "Sedimentary Rocks",
      "Metamorphic Rocks"
    ],
    "correctAnswer": 1,
    "explanation": "Telangana is part of the Deccan Plateau, which is primarily composed of hard, crystalline igneous rocks like granite. Granite is known for being dense, hard, and impervious, meaning it does not allow water to pass through it easily."
  },
  {
    "id": 543,
    "question": "The Himalayan Mountains which stretch over the northern borders of India are of (TSTET 30 June 2025)",
    "options": [
      "Old Fold Mountains",
      "Residual Mountains",
      "Volcanic Mountains",
      "Young fold Mountains"
    ],
    "correctAnswer": 3,
    "explanation": "The Himalayas are classified as Young Fold Mountains because they were formed by the collision of the Indian and Eurasian tectonic plates, a process that began relatively recently in geological time. They are structurally folded and are still rising."
  },
  {
    "id": 544,
    "question": "Among the following, the river that originated in the Betul district of Madhya Pradesh and flows towards west (TSTET 30 June 2025)",
    "options": [
      "Narmada",
      "Saraswati",
      "Tapati",
      "Chambal"
    ],
    "correctAnswer": 2,
    "explanation": "The Tapti River (or Tapati) originates from the Multai reserve forest in the Betul district of Madhya Pradesh. It is one of the major peninsular rivers that flows westward through a rift valley, eventually draining into the Arabian Sea."
  },
  {
    "id": 545,
    "question": "This involves 'conversion of water vapour into droplets of water or crystals of ice' (TSTET 30 June 2025)",
    "options": [
      "Evaporation",
      "Transpirtation",
      "Humidity",
      "Condensation"
    ],
    "correctAnswer": 3,
    "explanation": "Condensation is the physical process where water vapor in the air changes into liquid water droplets or solid ice crystals upon cooling. This process is essential for the formation of clouds and dew."
  },
  {
    "id": 546,
    "question": "The winds that blow continuously and regularly above the world pressure belts are known as (TSTET 30 June 2025)",
    "options": [
      "Hot Local Winds",
      "Cold Local Winds",
      "Seasonal Winds",
      "Planetary Winds"
    ],
    "correctAnswer": 3,
    "explanation": "Planetary winds, also known as prevailing winds, are large-scale wind patterns that blow consistently over the globe throughout the year. They are driven by the Earth's rotation and differences in air pressure, and include the Trade winds, Westerlies, and Polar Easterlies."
  },
  {
    "id": 547,
    "question": "This type of forests are found in the regions very near to the equator and close to the tropics (TSTET 30 June 2025)",
    "options": [
      "Temperate Evergreen Forests",
      "Coniferous Forests",
      "Tropical Evergreen Forests",
      "Tropical Deciduous Forests"
    ],
    "correctAnswer": 2,
    "explanation": "Tropical Evergreen Forests, or rainforests, are found in the hot and humid regions near the equator and within the tropics. These areas receive heavy rainfall throughout the year, allowing for dense, multi-layered forests with a wide variety of plant and animal life."
  },
  {
    "id": 548,
    "question": "According to Kyoto Protocol, its aim of 'bringing down the release of Green House Gases to less than 5.2%' to be achieved between these years (TSTET 30 June 2025)",
    "options": [
      "1997 and 2008",
      "2008 and 2012",
      "1997 and 2005",
      "2013 and 2025"
    ],
    "correctAnswer": 1,
    "explanation": "The Kyoto Protocol's first commitment period was from 2008 to 2012. During this period, participating industrialized countries committed to reducing their collective greenhouse gas emissions by an average of 5.2% compared to 1990 levels."
  },
  {
    "id": 549,
    "question": "The main food crop in north and north-western part of India is (TSTET 30 June 2025)",
    "options": [
      "Paddy",
      "Maize",
      "Wheat",
      "Jowar"
    ],
    "correctAnswer": 2,
    "explanation": "Wheat is the primary staple food crop for the people in the northern and north-western states of India, such as Punjab, Haryana, Uttar Pradesh, and Rajasthan. It is a rabi crop that thrives in the cool winter and sunny spring of the region."
  },
  {
    "id": 550,
    "question": "In the third phase of Green Revolution i.e. 1990s to the present, the Indian farmers (TSTET 30 June 2025)",
    "options": [
      "have invested heavily on getting irrigation facilities to their farms",
      "began to use the High Yielding Variety Seeds",
      "have increased using Chemical fertilizers and machinery such as tractors",
      "have sold their produce to markets within the country and to the Government through the FCI"
    ],
    "correctAnswer": 3,
    "explanation": "The post-1990s phase of Indian agriculture is characterized by greater market integration. Due to increased production from the Green Revolution, farmers not only produced for self-consumption but also generated a marketable surplus, which was sold in open markets and to government procurement agencies like the Food Corporation of India (FCI)."
  },
  {
    "id": 551,
    "question": "In India. most of the Jute mills are located in West Bengal mainly along the banks of this river (TSTET 30 June 2025)",
    "options": [
      "Hugli",
      "Ganges",
      "Mahanadi",
      "Brahmaputra"
    ],
    "correctAnswer": 0,
    "explanation": "The majority of India's jute mills are located along the banks of the Hooghly (Hugli) River, a distributary of the Ganges. This region is ideal due to the proximity to raw jute producing areas, availability of water for processing, and access to the Kolkata port for transport."
  },
  {
    "id": 552,
    "question": "Which one of the following term is used to describe trade between two or more countries? (TSTET 30 June 2025)",
    "options": [
      "Local trade",
      "Mutual trade",
      "Internal trade",
      "International trade"
    ],
    "correctAnswer": 3,
    "explanation": "International trade is the exchange of goods, services, and capital across national borders. It is the form of commerce that occurs between two or more different countries."
  },
  {
    "id": 553,
    "question": "India is critically deficient in the reserve and production of this mineral (TSTET 30 June 2025)",
    "options": [
      "Bauxite",
      "Iron ore",
      "Manganese",
      "Copper"
    ],
    "correctAnswer": 3,
    "explanation": "India's reserves of copper are inadequate to meet its domestic demand, making the country a net importer of this essential industrial metal. While India has substantial reserves of iron ore, bauxite, and manganese, copper production lags significantly behind consumption."
  },
  {
    "id": 554,
    "question": "This organisation was established in 1960 for the development of the roads of strategic importance in the northern and north eastern border areas of India (TSTET 30 June 2025)",
    "options": [
      "National Highway Authority of India",
      "Border Roads Organisation",
      "Central Public Works Department",
      "The State Public Works Department"
    ],
    "correctAnswer": 1,
    "explanation": "The Border Roads Organisation (BRO) was formed in May 1960 with the specific purpose of developing and maintaining road networks in India's strategic border areas. It plays a crucial role in enhancing military mobility and promoting economic development in remote regions."
  },
  {
    "id": 555,
    "question": "In Manipur. Maira Paibi was originated as a movement to prevent (TSTET 30 June 2025)",
    "options": [
      "public disorder due to alcohol abuse in 1970s",
      "the army from entering into their region",
      "the terrorist groups from entering into their region",
      "the tribal people from entering into their region"
    ],
    "correctAnswer": 0,
    "explanation": "The Maira Paibi movement in Manipur, led by women, initially emerged in the late 1970s as a social reform campaign against alcoholism and drug abuse. Over time, its scope expanded to include protests against human rights violations and state atrocities."
  },
  {
    "id": 556,
    "question": "Among the following, the permanent members of the UN Security Council were (TSTET 30 June 2025)",
    "options": [
      "USA, UK, Russia, Germany and France",
      "USA, UK, Russia, China and UAE",
      "USA, UK, Russia, Canada and France",
      "USA, UK, Russia, China and France"
    ],
    "correctAnswer": 3,
    "explanation": "The five permanent members of the UN Security Council, often called the P5, are China, France, Russia, the United Kingdom, and the United States. These nations were the major Allied victors of World War II and hold veto power within the council."
  },
  {
    "id": 557,
    "question": "In 1992, India accepted the Policy of Liberalisation forcefully because of the following organisation (TSTET 30 June 2025)",
    "options": [
      "World Bank",
      "NABARD",
      "International Monetary Fund",
      "Asian Development Bank"
    ],
    "correctAnswer": 2,
    "explanation": "In 1991, India faced a severe balance of payments crisis, compelling it to seek a bailout from the International Monetary Fund (IMF). The IMF loan was conditional on India implementing structural economic reforms, including the liberalization of its economy."
  },
  {
    "id": 558,
    "question": "In India, the first coalition Government was formed under this Prime Minister (TSTET 30 June 2025)",
    "options": [
      "Atal Bihari Vajpayee",
      "Manmohan Singh",
      "Vishwanath Prathap Singh",
      "P.V. Narasimha Rao"
    ],
    "correctAnswer": 2,
    "explanation": "Among the given options, the National Front government led by V. P. Singh in 1989 marks the beginning of the prominent coalition era in Indian politics. It was a minority government formed by a coalition of parties, supported from the outside by both the BJP and the Left."
  },
  {
    "id": 559,
    "question": "This amendment Act of the Indian Constitution provides for disqualification of public representatives on the grounds of defection from one political party to another political party (TSTET 30 June 2025)",
    "options": [
      "61st Amendment Act",
      "52nd Amendment Act",
      "86th Amendment Act",
      "42nd Amendment Act"
    ],
    "correctAnswer": 1,
    "explanation": "The 52nd Amendment Act of 1985 added the Tenth Schedule to the Constitution, which is popularly known as the Anti-Defection Law. It specifies the grounds for the disqualification of elected members who defect from their political party."
  },
  {
    "id": 560,
    "question": "Among the following, the President of India who was elected to the office of President more than once (TSTET 30 June 2025)",
    "options": [
      "Sarvepally Radha Krishna",
      "Neelam Sanjeeva Reddy",
      "Zakir Hussain",
      "Dr. Rajendra Prasad"
    ],
    "correctAnswer": 3,
    "explanation": "Dr. Rajendra Prasad, the first President of India, is the only person to have held the office for two full terms, from 1950 to 1962."
  },
  {
    "id": 561,
    "question": "From among the following, these were borrowed from the Irish Constitution (TSTET 30 June 2025)",
    "options": [
      "Fundamental Rights",
      "Fundamental Duties of the Citizen of India",
      "Directive Principles of State Policy",
      "Preamble of the Indian Constitution"
    ],
    "correctAnswer": 2,
    "explanation": "The framers of the Indian Constitution drew inspiration from the Irish Constitution of 1937 for the concept of Directive Principles of State Policy (DPSP). These principles serve as guidelines for the state to promote social and economic justice."
  },
  {
    "id": 562,
    "question": "Which of the following writ is issued by the higher court to the lower court to transfer a case pending with the latter to itself (TSTET 30 June 2025)",
    "options": [
      "Habeas Corpus",
      "Mandamus",
      "Quo Warranto",
      "Certiorari"
    ],
    "correctAnswer": 3,
    "explanation": "The writ of Certiorari is issued by a superior court to a lower court or tribunal. It can be used to quash a decision of the lower court or to transfer a pending case to the superior court for its consideration."
  },
  {
    "id": 563,
    "question": "These Countries were deemed as the original members of the United Nations Organisation (TSTET 30 June 2025)",
    "options": [
      "The Five permanent members of the UN Security Council only",
      "The Allied powers who fought the Second World War only",
      "The Countries that signed the UN Charter at the San Francisco Conference on June 25, 1945",
      "The five big nations of the world in area only"
    ],
    "correctAnswer": 2,
    "explanation": "The original members of the UN are the 51 countries that participated in the San Francisco Conference in 1945 and signed the UN Charter, or had previously signed the 1942 Declaration by United Nations. They were the first to ratify the charter."
  },
  {
    "id": 564,
    "question": "As per the article 248 of the Indian Constitution, the Union Government is empowered to make laws on these subjects (TSTET 30 June 2025)",
    "options": [
      "Central Subjects",
      "Concurrent Subjects",
      "State Subjects",
      "Residual Subjects"
    ],
    "correctAnswer": 3,
    "explanation": "Article 248 of the Constitution of India vests the residuary powers of legislation with the Union Parliament. This means that Parliament has the exclusive power to make laws on any matter not listed in the State List or the Concurrent List."
  },
  {
    "id": 565,
    "question": "Across many countries, Greenpeace Movement has taken up the impact of (TSTET 30 June 2025)",
    "options": [
      "Food Crisis in Africa",
      "Climate Change",
      "Gender inequality",
      "Concentration of wealth in the hands of a few people"
    ],
    "correctAnswer": 1,
    "explanation": "Greenpeace is an international environmental organization that campaigns on a wide range of issues, with climate change being a central focus. They advocate for transitioning to renewable energy and protecting forests to combat global warming."
  },
  {
    "id": 566,
    "question": "In this war, the USA invented and used the Chemical weapons including Napalm Bombs (TSTET 30 June 2025)",
    "options": [
      "Vietnam War",
      "First World War",
      "Second World War",
      "The Afghan War"
    ],
    "correctAnswer": 0,
    "explanation": "During the Vietnam War, the U.S. military made extensive use of chemical weapons. This included incendiary weapons like napalm and chemical defoliants such as Agent Orange, which had devastating and long-lasting effects."
  },
  {
    "id": 567,
    "question": "In 1972, this agreement was signed between India and Pakisthan under the leadership of Zulfiker Ali Bhutto and Indira Gandhi (TSTET 30 June 2025)",
    "options": [
      "Tashkent Agreement",
      "Simla Agreement",
      "Indus Water Treaty",
      "Lahore Declaration"
    ],
    "correctAnswer": 1,
    "explanation": "The Simla Agreement was signed on July 2, 1972, in Shimla, India, by Indian Prime Minister Indira Gandhi and Pakistani President Zulfikar Ali Bhutto. The treaty was signed following the Bangladesh Liberation War in 1971."
  },
  {
    "id": 568,
    "question": "The Tenth Schedule of the Indian Constitution explains (TSTET 30 June 2025)",
    "options": [
      "About Panchayat raj and Nagarapalika systems",
      "About allocation of seats for each state of India in Rajya Sabha",
      "About the Administration and control of Scheduled areas and Scheduled tribes",
      "The grounds and procedures for disqualification of public representatives"
    ],
    "correctAnswer": 3,
    "explanation": "The Tenth Schedule of the Indian Constitution, also known as the Anti-Defection Law, lays down the process and grounds for disqualifying elected legislators who defect from one political party to another."
  },
  {
    "id": 569,
    "question": "One among the following example DOES NOT fall under Unorganised Sector (TSTET 30 June 2025)",
    "options": [
      "A farmer cultivating his land",
      "A daily wage labourer working for his contractor",
      "A doctor treating a patient in the Government hospital",
      "A handloom weaver working on a loom in her house"
    ],
    "correctAnswer": 2,
    "explanation": "A doctor in a government hospital is part of the organized sector. This sector is characterized by regular employment, fixed working hours, social security benefits like provident fund and medical leave, which are absent in the unorganized sector (e.g., daily wage labor, small-scale farming)."
  },
  {
    "id": 570,
    "question": "At present, this Sector contributes most to the Indian economy (TSTET 30 June 2025)",
    "options": [
      "Service Sector",
      "Agricultural Sector",
      "Manufacturing Sector",
      "Small Scale Industrial Sector"
    ],
    "correctAnswer": 0,
    "explanation": "The Service Sector, or tertiary sector, has the largest share in India's Gross Domestic Product (GDP). It includes a wide range of activities such as IT, finance, trade, hospitality, and communication, and has been the main driver of the country's economic growth."
  },
  {
    "id": 571,
    "question": "The Human Development Index of China in 2024 is 0.797. Then China falls under this category (TSTET 30 June 2025)",
    "options": [
      "Very High Human Development",
      "High Human Development",
      "Medium Human Development",
      "Low Human Development"
    ],
    "correctAnswer": 1,
    "explanation": "According to the United Nations Development Programme (UNDP) classification, countries with a Human Development Index (HDI) value between 0.700 and 0.799 are categorized as having 'High Human Development'. An HDI of 0.800 and above is 'Very High'."
  },
  {
    "id": 572,
    "question": "In Dairy Production, the farmer is having his own cattle shed in the village. Having cattle shed in the village comes under this factor of Production (TSTET 30 June 2025)",
    "options": [
      "Land",
      "Labour",
      "Physical Capital",
      "Working Capital"
    ],
    "correctAnswer": 0,
    "explanation": "In economics, 'Land' as a factor of production includes not just the ground but all natural resources. In this context, the village plot on which the cattle shed stands is considered part of the 'Land' factor."
  },
  {
    "id": 573,
    "question": "National Income is also called as (TSTET 30 June 2025)",
    "options": [
      "NNP at factor Cost",
      "GDP at Factor Cost",
      "NDP at Factor Cost",
      "NNP at Market Price"
    ],
    "correctAnswer": 0,
    "explanation": "National Income is defined as the Net National Product at Factor Cost (NNP at FC). It is the sum total of all incomes earned by the normal residents of a country in the form of wages, rent, interest, and profit in an accounting year."
  },
  {
    "id": 574,
    "question": "The multinational Companies enter the Global Market with the help of (TSTET 30 June 2025)",
    "options": [
      "UNESCO",
      "WTO",
      "UNO",
      "UNDP"
    ],
    "correctAnswer": 1,
    "explanation": "The World Trade Organization (WTO) facilitates global trade by setting and enforcing international trade rules. It helps create a more predictable and open global market, which is conducive for multinational companies to operate and expand their business across borders."
  },
  {
    "id": 575,
    "question": "Consider the following statements related to Consumer Price Index (CPI)\nA) Different CPIs are published by the Government of India\nB) The CPI is used to calculate the D.A. to be paid to the Government Employees\nC) The CPI measures only changes in prices of a few selected consumer goods at the retail price\nIdentify the true statements from the given options (TSTET 30 June 2025)",
    "options": [
      "Only A is true",
      "Only A and B are true",
      "A, B and C are true",
      "Only B is true"
    ],
    "correctAnswer": 2,
    "explanation": "All three statements are correct. A) India publishes several CPIs (e.g., for industrial workers, agricultural laborers). B) Dearness Allowance (D.A.) for government employees is linked to the CPI for Industrial Workers. C) CPI measures the average change in prices paid by consumers for a specific basket of goods and services."
  },
  {
    "id": 576,
    "question": "During the inflationary situation, the Government uses import and export policy to (TSTET 30 June 2025)",
    "options": [
      "regulate the prices of essential goods",
      "increase the prices of essential goods so as to help the farmers",
      "reduce imports to increase the prices of essential goods and help the rich people",
      "help the business people by increasing the prices of essential goods"
    ],
    "correctAnswer": 0,
    "explanation": "To combat inflation (rising prices), the government can adjust its trade policies. By increasing imports or restricting exports of essential goods, it can augment the domestic supply, which helps to stabilize or reduce prices and curb inflation."
  },
  {
    "id": 577,
    "question": "The prices of goods sold through Public Distribution System (PDS) are less than that of the market price, then the difference in price is borne by the (TSTET 30 June 2025)",
    "options": [
      "The Gram Panchayat",
      "Government",
      "supplier",
      "Cooperative Societies"
    ],
    "correctAnswer": 1,
    "explanation": "The difference between the market price and the subsidized price of goods sold through the PDS is known as a food subsidy. This subsidy is borne by the government to ensure food security and make essential commodities affordable for the poorer sections of society."
  },
  {
    "id": 578,
    "question": "Ravi wants to deposit certain amount of money in the bank to get maximum interest. Then, he has to deposit his amount in this account: (TSTET 30 June 2025)",
    "options": [
      "Savings Account",
      "Small Savings Deposit",
      "Current Deposit Account",
      "Fixed Deposit Account"
    ],
    "correctAnswer": 3,
    "explanation": "A Fixed Deposit (FD) account offers the highest interest rate among standard bank deposit options because the money is deposited for a fixed tenure, providing the bank with assured funds. Current accounts offer little to no interest, while savings accounts offer a lower interest rate than FDs."
  },
  {
    "id": 579,
    "question": "In British India, the Zamindari system was primarily implemented in (TSTET 30 June 2025)",
    "options": [
      "Bombay and Madras Presidencies",
      "Bengal, Bihar, and parts of Northern India",
      "Punjab and Sindh",
      "Travancore and Cochin"
    ],
    "correctAnswer": 1,
    "explanation": "The Zamindari System, also known as the Permanent Settlement, was introduced by Lord Cornwallis in 1793. It was first implemented in the Bengal Presidency, which included modern-day Bengal, Bihar, and parts of Uttar Pradesh and Odisha."
  },
  {
    "id": 580,
    "question": "Which one of the following statement best describes the 'Policy of Doctrine of Lapse'? (TSTET 30 June 2025)",
    "options": [
      "Any ruler without his heir, his kingdom would come under company's rule",
      "Any Indian ruler should accept Residents of the British East India Company",
      "The Indian ruler should maintain certain army for the sake of British East India Company",
      "The Indian ruler should accept the British East India Company to trade with India without any payment of Tax"
    ],
    "correctAnswer": 0,
    "explanation": "The Doctrine of Lapse was an annexation policy formulated by Lord Dalhousie. It stated that if the ruler of a princely state under British paramountcy died without a natural male heir, their kingdom would lapse, meaning it would be annexed by the British."
  },
  {
    "id": 581,
    "question": "'When we inflict sorrow on other living beings, we add to our load of sins'. Who taught this? (TSTET 30 June 2025)",
    "options": [
      "Vardhamana Mahaveera",
      "Gautama Buddha",
      "M. K. Gandhi",
      "Ajita Kesakambalin"
    ],
    "correctAnswer": 0,
    "explanation": "This teaching encapsulates the core principle of Ahimsa (non-violence) in Jainism, which was propagated by Vardhamana Mahavira. Jainism places the highest importance on not causing harm to any living creature, as doing so accumulates negative karma (sin)."
  },
  {
    "id": 582,
    "question": "'Agricultural transformation was not simply an economic issue but a political, social and economic transformation of rural sector', said by (TSTET 30 June 2025)",
    "options": [
      "Mahatma Gandhi",
      "Lal Bahadur Shastri",
      "Sardar Vallabhbhai Patel",
      "Jawaharlal Nehru"
    ],
    "correctAnswer": 3,
    "explanation": "Jawaharlal Nehru, as India's first Prime Minister, viewed agricultural reforms (like land reforms and community development projects) as integral to the complete socio-political and economic modernization of the nation, not just as a narrow economic activity."
  },
  {
    "id": 583,
    "question": "Among the following, the prominent Americans who actively campaigned for political equality and freedom of thought for all people (TSTET 30 June 2025)",
    "options": [
      "Tom Paine and Thomas Jefferson",
      "Woodrow Wilson and Thomas Jefferson",
      "Tom Paine and George Washington",
      "George Washington and Thomas Jefferson"
    ],
    "correctAnswer": 0,
    "explanation": "Thomas Paine's pamphlet 'Common Sense' and Thomas Jefferson's authorship of the Declaration of Independence were foundational to the American Revolution. Both men were influential proponents of Enlightenment ideals like natural rights, political equality, and individual liberty."
  },
  {
    "id": 584,
    "question": "The Unification of Italy was accomplished by Victor Emmanuel II with the occupation of (TSTET 30 June 2025)",
    "options": [
      "Two Sicilies",
      "Rome",
      "Papal State",
      "Lombardy"
    ],
    "correctAnswer": 1,
    "explanation": "The final act of Italian unification (the Risorgimento) occurred in 1870 with the capture of Rome. After French troops protecting the Pope withdrew, Italian forces took over the city, which then became the capital of a unified Italy under King Victor Emmanuel II."
  },
  {
    "id": 585,
    "question": "On 17th September 1948, this princely state of India was integrated into the Indian Union. (TSTET 30 June 2025)",
    "options": [
      "Hyderabad",
      "Baroda",
      "Jammu & Kashmir",
      "Junagadh"
    ],
    "correctAnswer": 0,
    "explanation": "The princely state of Hyderabad, ruled by the Nizam, was integrated into the Indian Union on September 17, 1948, following a military action known as 'Operation Polo'."
  },
  {
    "id": 586,
    "question": "This act of the British Parliament transferred the powers of the East India Company to the British Crown. (TSTET 30 June 2025)",
    "options": [
      "The Government of India Act, 1909",
      "The Government of India Act, 1919",
      "The Government of India Act, 1858",
      "The Indian Independence Act of 1947"
    ],
    "correctAnswer": 2,
    "explanation": "Following the Indian Rebellion of 1857, the British Parliament passed the Government of India Act 1858, which dissolved the East India Company and transferred its administrative powers, territories, and armed forces directly to the British Crown, initiating the period of direct British rule (the Raj)."
  },
  {
    "id": 587,
    "question": "In 1906, a group of Muslim landlords and Nawabs formed the All India Muslim League at (TSTET 30 June 2025)",
    "options": [
      "Karachi",
      "Mumbai",
      "Dhaka",
      "Khaimkarni"
    ],
    "correctAnswer": 2,
    "explanation": "The All-India Muslim League was founded on December 30, 1906, in Dhaka (now in Bangladesh), during the annual meeting of the All-India Muhammadan Educational Conference. The league was formed to protect the political rights and interests of Muslims in India."
  },
  {
    "id": 588,
    "question": "In 1941, USA Joined the Second World War because (TSTET 30 June 2025)",
    "options": [
      "Japan attacked the pearl harbor of USA",
      "German troops sunk the commercial ship, Lusitania of USA",
      "USA wanted to stop spreading of Communism",
      "Britain and France requested USA to join the war"
    ],
    "correctAnswer": 0,
    "explanation": "The United States officially entered World War II after the Imperial Japanese Navy launched a surprise attack on the U.S. naval base at Pearl Harbor, Hawaii, on December 7, 1941. The sinking of the Lusitania was a key event leading to U.S. entry into World War I, not World War II."
  },
  {
    "id": 589,
    "question": "By this policy/Commission recommendation, Continuous and Comprehensive Evaluation (CCE) was made mandatory to introduce in schools as an important step of examination reforms and for the qualitative improvement in the education system (TSTET 24 May 2024)",
    "options": [
      "National Policy on Education - 1968",
      "National Policy on Education - 1986",
      "Secondary Education Commission - 1952-53",
      "Indian Education Commission - 1964-66"
    ],
    "correctAnswer": 1,
    "explanation": "The National Policy on Education of 1986 strongly recommended examination reforms, including the introduction of Continuous and Comprehensive Evaluation (CCE) to assess all aspects of a student's development in a stress-free environment. This was later implemented through the Right to Education Act, 2009."
  },
  {
    "id": 590,
    "question": "Development of right type of behaviour and conduct; and skill of finding solutions to the social life/problems respectively are known as (TSTET 24 May 2024)",
    "options": [
      "Both are aims",
      "Both are objectives",
      "Objective, Aim",
      "Aim, Objective"
    ],
    "correctAnswer": 3,
    "explanation": "In educational terminology, an 'aim' is a broad, long-term goal (e.g., developing good behavior). An 'objective' is a specific, measurable, short-term outcome (e.g., acquiring a problem-solving skill). Thus, developing behavior is an aim, and the skill of finding solutions is an objective."
  },
  {
    "id": 591,
    "question": "Which of the following statements is NOT TRUE related to merits of spiral approach? (TSTET 24 May 2024)",
    "options": [
      "Content difficulty is according to the level of students",
      "Teaching is done based on the student's mental level",
      "Due to continuous repetition of content retention of concepts in students will be for long time",
      "Logical/Rational thinking will not be improved among students"
    ],
    "correctAnswer": 3,
    "explanation": "The spiral approach revisits topics at increasing levels of complexity. This reinforces learning, suits content to the student's level, and is specifically designed to deepen understanding and improve logical and rational thinking over time. Therefore, the statement that it does not improve logical thinking is false."
  },
  {
    "id": 592,
    "question": "To show the crops grown in a village for one year, this graph is most suitable (TSTET 24 May 2024)",
    "options": [
      "Pie-graph",
      "Time graph",
      "Bar graph",
      "Pictograph"
    ],
    "correctAnswer": 0,
    "explanation": "A pie graph (or pie chart) is ideal for displaying the proportion or percentage of different categories that make up a whole. In this case, the total crops grown represent the whole 'pie', and each type of crop represents a 'slice' or percentage of that total."
  },
  {
    "id": 593,
    "question": "One among the following is a dimension of social studies curriculum organisation (TSTET 24 May 2024)",
    "options": [
      "Vertical dimension and Concentric dimension.",
      "Horizontal dimension and Topical dimension.",
      "Continuity, sequence, integration.",
      "Spiral dimension and logical dimension."
    ],
    "correctAnswer": 2,
    "explanation": "Effective curriculum organization is based on three key principles: Continuity (revisiting key concepts), Sequence (arranging content in a logical, progressive order), and Integration (connecting knowledge across different subjects). These dimensions ensure a coherent learning experience."
  },
  {
    "id": 594,
    "question": "As per NCERT 'Any individual or organization systematically collecting information for a specific purpose' is called (TSTET 24 May 2024)",
    "options": [
      "Data",
      "Information",
      "Agency",
      "Universe"
    ],
    "correctAnswer": 2,
    "explanation": "In research and data collection, an 'agency' refers to any entity, whether an individual, a government body, or a private organization, that is responsible for the systematic gathering of information for a defined purpose."
  },
  {
    "id": 595,
    "question": "In social studies teaching, this is a kind of visual aid which creates illusion of depth through the use of pairs of photographs (TSTET 24 May 2024)",
    "options": [
      "Diorama",
      "Epidiascope",
      "Stereoscope",
      "Telescope"
    ],
    "correctAnswer": 2,
    "explanation": "A stereoscope is an optical device for viewing a pair of separate images, one for each eye, as a single three-dimensional image. By presenting two offset 2D photographs, it creates a convincing illusion of depth for the viewer."
  },
  {
    "id": 596,
    "question": "One of the following is NOT a quality of a good social studies text book (TSTET 24 May 2024)",
    "options": [
      "The content and language should be suitable for the age group of the children.",
      "It should have content bias.",
      "The style of presentation should be attractive and interesting.",
      "It should provide opportunities for learning by doing."
    ],
    "correctAnswer": 1,
    "explanation": "A fundamental quality of a good textbook is objectivity and impartiality. 'Content bias' means the material is presented from a prejudiced or one-sided perspective, which is a serious flaw in any educational resource."
  },
  {
    "id": 597,
    "question": "Identify the correct statement about 'Project method' (TSTET 24 May 2024)",
    "options": [
      "It is a Teacher-centered method.",
      "The teacher selects the project.",
      "It does not provide scope for co-operative learning.",
      "It helps for the practical application of the knowledge."
    ],
    "correctAnswer": 3,
    "explanation": "The project method is a student-centered pedagogy where students gain knowledge and skills by working for an extended period to investigate and respond to a complex question, problem, or challenge. Its core strength is allowing students to apply theoretical knowledge to real-world, practical tasks."
  },
  {
    "id": 598,
    "question": "A social studies teacher wants to teach the concept of 'Formation of clouds'. Identify the most suitable method among the following (TSTET 24 May 2024)",
    "options": [
      "Demonstration method",
      "Project method",
      "Lecture method",
      "Text Book method"
    ],
    "correctAnswer": 0,
    "explanation": "The formation of clouds involves processes like evaporation and condensation, which can be easily and effectively shown through a live demonstration in the classroom (e.g., boiling water and observing condensation on a cool surface). This makes the abstract scientific concept tangible and understandable for students."
  },
  {
    "id": 599,
    "question": "One of the following indicates 'what the student has learnt' (TSTET 24 May 2024)",
    "options": [
      "Academic Standard",
      "Teaching method",
      "Curriculum",
      "Text book"
    ],
    "correctAnswer": 0,
    "explanation": "Academic Standards are benchmarks that define the expected knowledge and skills students should acquire at each grade level. Measuring student performance against these standards is the primary way to determine what they have successfully learned."
  },
  {
    "id": 600,
    "question": "The ability to understand the importance of Public property and to protect them is a/an (TSTET 24 May 2024)",
    "options": [
      "Value",
      "Skill",
      "Academic standard",
      "Teaching objective"
    ],
    "correctAnswer": 0,
    "explanation": "Protecting public property is a reflection of civic responsibility and respect for the community. This is considered a 'value'—a principle or standard of behavior that an individual or society holds. It's a part of character education rather than a measurable skill or academic benchmark."
  },
{
    "id": 601,
    "question": "The Siwalik Mountain ranges run parallel to the Lesser Himalayas for a distance of about 2400 kms from (TSTET 30 June 2025)",
    "options": [
      "Hindu Kush Mountain Ranges to Brahmaputra Valley",
      "Potwar Plateau to Hindu Kush Mountain Ranges",
      "Potwar Plateau to Brahmaputra Valley",
      "Rivers Ghaggar to Teesta"
    ],
    "correctAnswer": 2,
    "explanation": "The Siwalik Range, also known as the Outer Himalayas, extends for about 2,400 km from the Potwar Plateau in the west to the Brahmaputra Valley in the east. They form the southernmost and geologically youngest east-west chain of the Himalayas."
  },
  {
    "id": 602,
    "question": "The words latitude and longitude are derived from the Greek words 'Latitudo' and 'Longitudo respectively, which means (TSTET 30 June 2025)",
    "options": [
      "Length and width",
      "revolving and rotating",
      "height and depth",
      "width and length"
    ],
    "correctAnswer": 3,
    "explanation": "The terms latitude and longitude originate from Latin. 'Latitudo' means width, referring to the horizontal or east-west lines, and 'longitudo' means length, referring to the vertical or north-south lines on a map."
  },
  {
    "id": 603,
    "question": "Identify the Statement that best describes the 'Inversion of temperature' (TSTET 30 June 2025)",
    "options": [
      "An increase in temperature with height",
      "A decrease in pressure with altitude",
      "A constant temperature at all heights",
      "A decrease in temperature with height"
    ],
    "correctAnswer": 0,
    "explanation": "Normally, in the troposphere, temperature decreases with an increase in altitude. A temperature inversion is a deviation from this normal pattern, where a layer of cooler air at the surface is overlain by a layer of warmer air, causing the temperature to increase with height."
  },
  {
    "id": 604,
    "question": "This Meteorologist and Geophysicist had hypothesised that the super continent of Pangaea broke up to form Laurasia and Gondwana Land (TSTET 30 June 2025)",
    "options": [
      "Alfred Wegner",
      "Marcia McNutt",
      "Harold Zaffreys",
      "Zhang Heng"
    ],
    "correctAnswer": 0,
    "explanation": "Alfred Wegener, a German meteorologist and geophysicist, first proposed the theory of continental drift in 1912. His hypothesis stated that the continents were once joined together in a single supercontinent called Pangaea, which later broke apart and drifted to their current positions."
  },
  {
    "id": 605,
    "question": "Submarine Canyons are observed in this region of the Ocean Floor (TSTET 30 June 2025)",
    "options": [
      "Continental Shelf",
      "Continental Slope",
      "Abyssal Plain",
      "Oceanic Deep"
    ],
    "correctAnswer": 1,
    "explanation": "Submarine canyons are steep-sided valleys that are primarily found incising the continental slope. They are formed by various processes, including erosion by turbidity currents."
  },
  {
    "id": 606,
    "question": "This Volcano is known as 'the light house of the Mediterranean Sea' (TSTET 30 June 2025)",
    "options": [
      "Mt. Pelee in West Indies",
      "Fujiyama in Japan",
      "Stromboli in Sicily",
      "Cotopaxi in Equador"
    ],
    "correctAnswer": 2,
    "explanation": "Stromboli, a volcano on an island north of Sicily, has been erupting almost continuously for centuries. Its frequent, mild explosions throw incandescent lava into the air, creating a visible glow at night, which has earned it the nickname 'Lighthouse of the Mediterranean'."
  },
  {
    "id": 607,
    "question": "In this part of India, Red Soils develop on crystalline and igneous rocks in the areas of low rainfall (TSTET 30 June 2025)",
    "options": [
      "Eastern and southern parts of the Deccan plateau",
      "Western and Southern parts of the Deccan Plateau",
      "Andaman and Nicobar island Region",
      "North western part of Indo Gangetic plain"
    ],
    "correctAnswer": 0,
    "explanation": "Red soils are typically formed from the weathering of ancient crystalline and metamorphic rocks like granites and gneisses. They are found in areas of low rainfall, particularly in the eastern and southern parts of the Deccan Plateau."
  },
  {
    "id": 608,
    "question": "As per the Directorate of Economics and Statistics, Ministry of Agriculture, 2017, the percentage of land under Net Sown Area is (TSTET 30 June 2025)",
    "options": [
      "18.11%",
      "45.5%",
      "23.3%",
      "54.5%"
    ],
    "correctAnswer": 1,
    "explanation": "According to the Land Use Statistics 2016-17 from the Directorate of Economics and Statistics, the Net Sown Area in India was 140.1 million hectares, which constituted 45.5% of the total reporting area for land utilization statistics."
  },
  {
    "id": 609,
    "question": "Among the following, the project constructed across the river Mahanadi is (TSTET 30 June 2025)",
    "options": [
      "Sardar Sarovar Project",
      "Rana Pratap Sagar Dam",
      "Hirakud Project",
      "Pravara Project"
    ],
    "correctAnswer": 2,
    "explanation": "The Hirakud Dam is built across the Mahanadi River, about 15 kilometers from Sambalpur in the state of Odisha in India. It is one of the first major multipurpose river valley projects started after India's independence."
  },
  {
    "id": 610,
    "question": "The Second largest producer of Paddy in the world is (TSTET 30 June 2025)",
    "options": [
      "China",
      "Pakistan",
      "Bangladesh",
      "India"
    ],
    "correctAnswer": 3,
    "explanation": "India is the world's second-largest producer of rice (paddy), following China. Rice is a staple food for a large portion of the Indian population and a major agricultural commodity."
  },
  {
    "id": 611,
    "question": "One among the following is NOT the form of Cloud (TSTET 30 June 2025)",
    "options": [
      "Cirrus",
      "Nimbus",
      "Sleet",
      "Stratus"
    ],
    "correctAnswer": 2,
    "explanation": "Sleet is a form of precipitation consisting of ice pellets, created when snowflakes melt and then refreeze before hitting the ground. Cirrus, Nimbus, and Stratus are all major types or forms of clouds."
  },
  {
    "id": 612,
    "question": "These forests are grown in the higher latitudes between 50°and 70° of the northern Hemisphere (TSTET 30 June 2025)",
    "options": [
      "Mediterranean Vegetation",
      "Coniferous forests",
      "Temperate Deciduous Forests",
      "Tropical Evergreen Forests"
    ],
    "correctAnswer": 1,
    "explanation": "Coniferous forests, also known as taiga or boreal forests, are found in the high latitudes of the Northern Hemisphere, typically between 50° and 70° North. These forests are characterized by cold winters and cone-bearing evergreen trees."
  },
  {
    "id": 613,
    "question": "Identify the Cold Current from among the following (TSTET 30 June 2025)",
    "options": [
      "West Australian Current",
      "Kuroshivo Current",
      "East Australian Current",
      "South Equatorial Current"
    ],
    "correctAnswer": 0,
    "explanation": "The West Australian Current is a cold surface current of the southern Indian Ocean, flowing northwards along the west coast of Australia. The other options listed are warm currents."
  },
  {
    "id": 614,
    "question": "The annual insolation received by the earth on 3rd January is slightly more than the amount received on 4th July, because (TSTET 30 June 2025)",
    "options": [
      "The earth is nearest to the Sun",
      "The earth is farthest from the Sun",
      "The earth is neither nearest nor farthest from the Sun",
      "The length of the day is more"
    ],
    "correctAnswer": 0,
    "explanation": "The Earth follows an elliptical orbit around the Sun. It reaches its closest point to the Sun, called perihelion, around January 3rd. Being closer to the Sun results in receiving slightly more solar radiation (insolation)."
  },
  {
    "id": 615,
    "question": "Ravi's weight is 80 Kgs and his height is 1.79 mts. Then, the BMI of Ravi is (TSTET 30 June 2025)",
    "options": [
      "44.69",
      "24.96",
      "12.48",
      "6.24"
    ],
    "correctAnswer": 1,
    "explanation": "Body Mass Index (BMI) is calculated as weight in kilograms divided by the square of height in meters. BMI = 80 / (1.79 * 1.79) = 80 / 3.2041 ≈ 24.96."
  },
  {
    "id": 616,
    "question": "Identify the correct statement regarding the distribution of workers among the different sectors of the economy as per the data given in 2017-18 (TSTET 30 June 2025)",
    "options": [
      "The workers in the Industrial and Service Sector are more than the Agricultural Sector",
      "The workers in Agricultural Sector are more than the Industrial and Service Sector",
      "The distribution of workers in three sectors is same",
      "The workers in service sector are less than the Industrial Sector"
    ],
    "correctAnswer": 1,
    "explanation": "According to the Economic Survey of India for 2017-18, the agricultural sector, while contributing less to GDP, still employed the largest share of the workforce (around 42-44%) compared to the industrial and service sectors."
  },
  {
    "id": 617,
    "question": "In the rural areas in India, the main demand for credit is for (TSTET 30 June 2025)",
    "options": [
      "Purchase of agricultural land",
      "Construction of houses",
      "Crop production",
      "Undertaking business activities"
    ],
    "correctAnswer": 2,
    "explanation": "In rural India, the primary economic activity is agriculture. Farmers often need credit at the beginning of the sowing season to buy essential inputs like seeds, fertilizers, and pesticides. This makes crop production the main reason for credit demand."
  },
  {
    "id": 618,
    "question": "In India, Aadhar Enabled Payment System (AEPS) is offered by (TSTET 30 June 2025)",
    "options": [
      "Ministry of Finance",
      "Reserve Bank of India",
      "National Payments Corporation of India",
      "Comptroller & Auditor General of India"
    ],
    "correctAnswer": 2,
    "explanation": "The Aadhaar Enabled Payment System (AEPS) is a payment service developed by the National Payments Corporation of India (NPCI). It allows bank customers to use Aadhaar as their identity to access their Aadhaar-enabled bank account."
  },
  {
    "id": 619,
    "question": "The employees working in the State and the Central Government offices get an additional payment called 'Dearness Allowance' or D.A. to (TSTET 30 June 2025)",
    "options": [
      "Increase their income so as to meet the increasing inflation",
      "Keep additional income in the hands of employees",
      "Increase the purchasing capacity of employees",
      "Make the employees rich"
    ],
    "correctAnswer": 0,
    "explanation": "Dearness Allowance (DA) is a cost of living adjustment allowance paid to government employees and pensioners in India. Its primary purpose is to mitigate the impact of inflation on their purchasing power."
  },
  {
    "id": 620,
    "question": "The range of Human Development Index Value is (TSTET 30 June 2025)",
    "options": [
      "1 to 100",
      "0 to 1",
      "-0.1 to 0.1",
      "1 to 1000"
    ],
    "correctAnswer": 1,
    "explanation": "The Human Development Index (HDI) is a composite statistic of life expectancy, education, and per capita income indicators. The value of the HDI for any country is calculated as a number between 0 and 1, where 1 represents the highest human development."
  },
  {
    "id": 621,
    "question": "Year 2000 is the base year. In 2001, the average prices of all goods have been increased by 10%, whereas in 2002 they have been increased by 15%. Then, the Price Index in 2002 is (TSTET 30 June 2025)",
    "options": [
      "125.75",
      "115.25",
      "126.5",
      "125.5"
    ],
    "correctAnswer": 2,
    "explanation": "The base year (2000) has an index of 100. In 2001, prices increased by 10%, so the index becomes 110. In 2002, prices increased by 15% over the 2001 level. So, the index for 2002 is 110 + (15% of 110) = 110 + 16.5 = 126.5."
  },
  {
    "id": 622,
    "question": "These are used to calculate the Dearness Allowance to be paid for Government Employees to revise legal wage rates (TSTET 30 June 2025)",
    "options": [
      "Wholesale Price Index",
      "Consumer Price Indices",
      "Retail Price Index",
      "Producers Price Index"
    ],
    "correctAnswer": 1,
    "explanation": "The Dearness Allowance (DA) for government employees is calculated based on the All-India Consumer Price Index for Industrial Workers (CPI-IW). The CPI reflects the price changes of goods and services consumed by households, making it the appropriate measure for adjusting wages against inflation."
  },
  {
    "id": 623,
    "question": "Removing barriers or restrictions set by Government is known as (TSTET 30 June 2025)",
    "options": [
      "Economic liberalisation",
      "Globalisation",
      "Privatisation",
      "Nationalisation"
    ],
    "correctAnswer": 0,
    "explanation": "Economic liberalization refers to the reduction or elimination of government regulations and restrictions on business and trade. This process aims to promote private sector participation and create a more open, market-based economy."
  },
  {
    "id": 624,
    "question": "During inflationary situation, the Reserve Bank of India reduces the money in circulation in the economy to (TSTET 30 June 2025)",
    "options": [
      "Increase the purchasing capacity of the people",
      "Make the money available only to the poor people",
      "Reduce the purchasing capacity of the people",
      "Discourage savings in the bank so as to keep more money in the hands of the poor people"
    ],
    "correctAnswer": 2,
    "explanation": "During inflation, the central bank (RBI) tightens the money supply (e.g., by increasing interest rates). This makes borrowing more expensive, which reduces overall money in circulation and thereby dampens aggregate demand and purchasing power, helping to control inflation."
  },
  {
    "id": 625,
    "question": "This Act/scheme mandates that it is the responsibility of the Government to provide manual work on demand and the wages to the workers and the capital needed are to be paid by the Government (TSTET 30 June 2025)",
    "options": [
      "National Food Security Act, 2013",
      "Pradhanamanthri Anna Yojana",
      "MGNREGA",
      "The Factories Act"
    ],
    "correctAnswer": 2,
    "explanation": "The Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA), passed in 2005, is a social security scheme that legally guarantees at least 100 days of wage employment in a financial year to every rural household whose adult members volunteer to do unskilled manual work."
  },
  {
    "id": 626,
    "question": "Gautham Buddha suggested the Ashtanga marga (Eight-fold path) for (TSTET 30 June 2025)",
    "options": [
      "Making the people aware of the four noble truths",
      "Making the people to know the original teachings of Buddha",
      "Elimination of human misery",
      "Attainment of salvation"
    ],
    "correctAnswer": 2,
    "explanation": "In Buddhism, the Eightfold Path (Ashtanga Marga) is the practical means prescribed by the Buddha to end suffering (Dukkha) and achieve self-awakening. It is the fourth of the Four Noble Truths and is seen as the way to eliminate human misery by eradicating desire and ignorance."
  },
  {
    "id": 627,
    "question": "One of the following books was NOT authored by Acharya Nagarjuna (TSTET 30 June 2025)",
    "options": [
      "Sunyavada",
      "Suhrullekha",
      "Madyamikakarika",
      "Deepavamsha"
    ],
    "correctAnswer": 3,
    "explanation": "Acharya Nagarjuna was a major Buddhist philosopher who wrote works like 'Mūlamadhyamakakārikā' (central to Madyamika) and 'Śūnyatāsaptati' (on Sunyavada/emptiness). 'Suhrullekha' is also attributed to him. The 'Dipavamsa' is an ancient chronicle of Sri Lanka, not authored by Nagarjuna."
  },
  {
    "id": 628,
    "question": "The construction of these two temples in Rajasthan is considered as the most notable contributions of the Jains to the domain of architecture (TSTET 30 June 2025)",
    "options": [
      "Dilwara Temple and Mount Abu",
      "Khajuraho and Dilwara Temple",
      "Mount Abu and Lakkundi Temple",
      "Dilwara Temple and Seth Hathisinghi Temple"
    ],
    "correctAnswer": 3,
    "explanation": "The Dilwara Temples near Mount Abu in Rajasthan are world-famous for their stunning use of marble and intricate carvings. The Seth Hathisinghi Temple, although located in Ahmedabad, Gujarat, is another prominent example of exquisite Jain temple architecture. The question pairs these two as notable Jain contributions."
  },
  {
    "id": 629,
    "question": "The primary objective of the Marshall Plan was (TSTET 30 June 2025)",
    "options": [
      "To spread communism in Europe",
      "To rebuild war-torn European economies",
      "To create a military alliance in Europe",
      "To colonize Eastern Europe"
    ],
    "correctAnswer": 1,
    "explanation": "The Marshall Plan, officially the European Recovery Program, was a U.S. initiative passed in 1948. Its main goal was to provide economic aid to help rebuild Western European economies after the end of World War II, partly to prevent the spread of communism."
  },
  {
    "id": 630,
    "question": "Among the following, the Harappan Civilisation Sites located in India were (TSTET 30 June 2025)",
    "options": [
      "Kalibangan, Chanudharo and Lothal",
      "Mohen Ja Daro, Shortugai and Sutkagendor",
      "Kalibangan, Ropar and Harappa",
      "Kalibangan, Ropar and Lothal"
    ],
    "correctAnswer": 3,
    "explanation": "Kalibangan is located in Rajasthan, Ropar (or Rupnagar) is in Punjab, and Lothal is in Gujarat. All three of these significant Harappan sites are located within the modern-day borders of India."
  },
  {
    "id": 631,
    "question": "As per the Chola Inscription, 'Pallichchhandam' refers to (TSTET 30 June 2025)",
    "options": [
      "Land donated to Jain Institutions",
      "Land gifted to Brahmins",
      "Land for the maintenance of a school",
      "Land gifted to temples"
    ],
    "correctAnswer": 0,
    "explanation": "Chola inscriptions describe various categories of land grants. 'Pallichchhandam' specifically refers to land that was donated for the support and maintenance of Jain institutions."
  },
  {
    "id": 632,
    "question": "The archaeologists are of the opinion that the city of Vijayanagara had four separate divisions. Among the four divisions the first division was (TSTET 30 June 2025)",
    "options": [
      "situated on rocky hills which was devoted to temples,",
      "situated on the valley where crops were raised using water from irrigation channels",
      "a royal centre in which royal palaces and residences of important nayaks were located",
      "Residences of ordinary people"
    ],
    "correctAnswer": 0,
    "explanation": "Archaeologists have divided the city of Vijayanagara into several zones. The first division is often referred to as the Sacred Centre, which was situated on the rocky granite hills along the Tungabhadra river and was predominantly occupied by temples and religious structures."
  },
  {
    "id": 633,
    "question": "'Mehrauli Iron Pillar' Inscription refers to the achievements of (TSTET 30 June 2025)",
    "options": [
      "Samudragupta",
      "Gautamiputra Satakarni",
      "Chandragupta II",
      "Ashoka"
    ],
    "correctAnswer": 2,
    "explanation": "The inscription on the Mehrauli Iron Pillar, located in the Qutub complex in Delhi, praises the valor of a king named 'Chandra', who is widely identified by historians as the Gupta emperor Chandragupta II Vikramaditya."
  },
  {
    "id": 634,
    "question": "In France, these philosophers wanted to create a society based on freedom and equal laws and opportunities for all (TSTET 30 June 2025)",
    "options": [
      "John Locke, Jean Jacques Rousseau",
      "Montesquieu and Aristotle",
      "John Locke and Karl Marx",
      "Noam Chomsky and Karl Marx"
    ],
    "correctAnswer": 0,
    "explanation": "The ideas of Enlightenment philosophers greatly influenced the French Revolution. John Locke advocated for natural rights, and Jean-Jacques Rousseau, in 'The Social Contract', championed a society based on a general will and equality."
  },
  {
    "id": 635,
    "question": "One of the main demand of women during French Revolution was that (TSTET 30 June 2025)",
    "options": [
      "the women should get the same political Rights as men",
      "all the women should be included in the list of Active Citizens",
      "Napolean Bonaparte should be made the King of France",
      "The power should be in the hands of third estate"
    ],
    "correctAnswer": 0,
    "explanation": "During the French Revolution, women were active participants but were denied political rights. One of their most significant demands was for political equality with men, including the right to vote and hold public office."
  },
  {
    "id": 636,
    "question": "As per this, no European power would be allowed to build colonies in the American Continents and the United States will not interfere in the affairs of Europe or colonies in other continents (TSTET 30 June 2025)",
    "options": [
      "Truman Doctrine",
      "Munroe Doctrine",
      "Marshall Plan",
      "Treaty of Paris"
    ],
    "correctAnswer": 1,
    "explanation": "The Monroe Doctrine was a United States foreign policy position articulated by President James Monroe in 1823. It stated that further efforts by European nations to colonize land or interfere with states in the Americas would be viewed as acts of aggression."
  },
  {
    "id": 637,
    "question": "Libya is located in this part of Africa Continent (TSTET 30 June 2025)",
    "options": [
      "North-Western",
      "Northern",
      "South-Eastern",
      "Central"
    ],
    "correctAnswer": 1,
    "explanation": "Libya is a country located in the Maghreb region of North Africa. It is bordered by the Mediterranean Sea to the north, making it a part of Northern Africa."
  },
  {
    "id": 638,
    "question": "One of the following is the provision of Right of Children in Free and Compulsory Education (RTE) Act, 2009 (TSTET 30 June 2025)",
    "options": [
      "The Curriculum and Evaluation procedures must be in conformity with the values enshrined in the constitution",
      "Every Child should be admitted into the school at the age of three",
      "Children can continue in the school even after 14 years of age for the completion of Secondary Education",
      "Child's name should be removed if the child fails in the class"
    ],
    "correctAnswer": 0,
    "explanation": "Section 29(2) of the RTE Act, 2009, states that the academic authority, while laying down the curriculum and evaluation procedure, shall take into consideration the conformity with the values enshrined in the Constitution."
  },
  {
    "id": 639,
    "question": "With this act, the minimum age of marriage for girls was raised to 14 years (TSTET 30 June 2025)",
    "options": [
      "The POCSO Act, 2012",
      "Sharada Act of 1929",
      "Child Marriages Act, 2006",
      "Criminal Legal Amendment Act, 2013"
    ],
    "correctAnswer": 1,
    "explanation": "The Child Marriage Restraint Act of 1929, popularly known as the Sarda Act (after its sponsor Harbilas Sarda), fixed the minimum age of marriage for girls at 14 years and for boys at 18 years."
  },
  {
    "id": 640,
    "question": "In 1953, the States Reorganization Commission was appointed under the chairmanship of Fazal Ali to address the issue of formation of states on the basis of (TSTET 30 June 2025)",
    "options": [
      "Caste",
      "Religions",
      "Language",
      "Culture"
    ],
    "correctAnswer": 2,
    "explanation": "Following widespread demand for the creation of states on a linguistic basis, the Government of India appointed the States Reorganisation Commission in 1953. The commission's primary mandate was to examine the reorganization of states based on language."
  },
  {
    "id": 641,
    "question": "The main objective of Operation Blue Star was (TSTET 30 June 2025)",
    "options": [
      "To conduct election in the newly formed states",
      "To clear the Golden Temple complex in Amritsar from Sikh militants",
      "To fight the Pakistan militants in Jammu & Kashmir",
      "Liberation of Bangladesh from Pakistan"
    ],
    "correctAnswer": 1,
    "explanation": "Operation Blue Star was a military operation carried out in June 1984 by the Indian Army. Its primary objective was to remove Sikh militant leader Jarnail Singh Bhindranwale and his armed followers from the Golden Temple complex in Amritsar."
  },
  {
    "id": 642,
    "question": "The major highlight of the National Emergency period in India was (TSTET 30 June 2025)",
    "options": [
      "42nd Amendment of the Indian Constitution",
      "Entry of Rajiv Gandhi into Indian Politics",
      "Enactment of Official Religious Act",
      "Formation of New states on the basis of linguistic principle"
    ],
    "correctAnswer": 0,
    "explanation": "The 42nd Amendment Act of 1976 was enacted during the National Emergency (1975-1977). It is one of the most controversial amendments, making widespread changes to the Constitution, including to the Preamble, and attempting to reduce the powers of the Supreme Court and High Courts."
  },
  {
    "id": 643,
    "question": "As per the provisions of Article 356 of the Indian Constitution, the president may dismiss the State Government and order the Governor to take over the administration of the State with the advice of (TSTET 30 June 2025)",
    "options": [
      "Chief Justice of India",
      "Home Minister",
      "The Prime Minister",
      "Chief Justice of High Court of that particular state"
    ],
    "correctAnswer": 2,
    "explanation": "The President of India acts on the aid and advice of the Council of Ministers, headed by the Prime Minister. The decision to impose President's Rule under Article 356 is an executive decision taken by the Union Cabinet, headed by the Prime Minister, and then recommended to the President."
  },
  {
    "id": 644,
    "question": "The two major ideological and political Camps emerged in the post Second world war period were (TSTET 30 June 2025)",
    "options": [
      "The Communist bloc and Non-aligned bloc",
      "The Democratic-Capitalist bloc and Non-aligned bloc",
      "The Communist bloc and the Democratic-Capitalist bloc",
      "Fascist bloc and The Democratic bloc"
    ],
    "correctAnswer": 2,
    "explanation": "After World War II, the world was largely divided into two major ideological and political blocs, leading to the Cold War. These were the Communist bloc, led by the Soviet Union, and the Democratic-Capitalist bloc, led by the United States."
  },
  {
    "id": 645,
    "question": "A war fought behind closed doors through propaganda and words without real physical combat as in traditional warfare. This is known as (TSTET 30 June 2025)",
    "options": [
      "Civil war",
      "Cold war",
      "Guerrilla war",
      "Nuclear war"
    ],
    "correctAnswer": 1,
    "explanation": "The term 'Cold War' describes a state of geopolitical tension between the United States and the Soviet Union and their allies. It was characterized by propaganda, espionage, and proxy wars, but without direct large-scale fighting between the two superpowers."
  },
  {
    "id": 646,
    "question": "CIA is the (TSTET 30 June 2025)",
    "options": [
      "The spy agency of United States of America",
      "The militant group of Russia",
      "A radical student group fought for their rights",
      "The space agency of United States of America"
    ],
    "correctAnswer": 0,
    "explanation": "The CIA, or Central Intelligence Agency, is the primary foreign intelligence and counterintelligence agency of the United States federal government. It is a civilian agency tasked with gathering, processing, and analyzing national security information from around the world."
  },
  {
    "id": 647,
    "question": "The primary aim of the Bandung Conference was to (TSTET 30 June 2025)",
    "options": [
      "Establish a new military alliance",
      "Promote Western democracy",
      "Promote Afro-Asian economic and cultural cooperation",
      "Expand colonial territories"
    ],
    "correctAnswer": 2,
    "explanation": "The Bandung Conference, held in 1955 in Indonesia, was a meeting of newly independent Asian and African states. A key goal was to promote economic and cultural cooperation among these nations and to oppose colonialism and neocolonialism."
  },
  {
    "id": 648,
    "question": "Which of the following is termed as Excess Rainfall? (TSTET 30 June 2025)",
    "options": [
      "+20 percent or more of the average rainfall",
      "+10 percent or more of the average rainfall",
      "+19 percent to -19 percent of the average rainfall",
      "-20 percent to -59 percent of the average rainfall"
    ],
    "correctAnswer": 0,
    "explanation": "The India Meteorological Department (IMD) classifies rainfall based on its departure from the long-period average. A rainfall season is categorized as 'Excess' when the rainfall is +20% or more of the average."
  },
  {
    "id": 649,
    "question": "One among the following does NOT come under cognitive domain (TSTET 30 June 2025)",
    "options": [
      "Remembering",
      "Drawing",
      "Understanding",
      "Evaluating"
    ],
    "correctAnswer": 1,
    "explanation": "According to Bloom's Taxonomy, the cognitive domain involves intellectual skills like remembering, understanding, and evaluating. Drawing is a physical skill that falls under the psychomotor domain."
  },
  {
    "id": 650,
    "question": "Identify the INCORRECT statement relating to aims & objectives (TSTET 30 June 2025)",
    "options": [
      "Objectives can be achieved in a short duration of time",
      "Aims are long term goals",
      "Objectives are broad and philosophical in nature",
      "Aims are general in nature"
    ],
    "correctAnswer": 2,
    "explanation": "In education, aims are broad, long-term, and philosophical statements. Objectives, on the other hand, are specific, measurable, and short-term outcomes. Therefore, the statement that objectives are broad and philosophical is incorrect."
  },
  {
    "id": 651,
    "question": "In a social studies lesson plan, the part that connects the pupil's previous knowledge with the new knowledge is (TSTET 30 June 2025)",
    "options": [
      "Presentation",
      "Introduction/Motivation",
      "Evaluation",
      "Recapitulation"
    ],
    "correctAnswer": 1,
    "explanation": "The introduction or motivation phase of a lesson plan is crucial for setting the stage for new learning. A key function of this part is to activate students' prior knowledge and create a link between what they already know and the new content."
  },
  {
    "id": 652,
    "question": "The curriculum that emphasizes on the development of democratic values and problem solving abilities among the students is (TSTET 30 June 2025)",
    "options": [
      "Spiral curriculum",
      "Concentric curriculum",
      "Core curriculum",
      "Integrated curriculum"
    ],
    "correctAnswer": 2,
    "explanation": "A core curriculum is a set of common courses required for all students. Its design often focuses on developing essential skills and knowledge for citizenship in a democratic society, including problem-solving and understanding democratic values."
  },
  {
    "id": 653,
    "question": "One among the following is NOT a characteristic of a good social studies text book (TSTET 30 June 2025)",
    "options": [
      "Use of simple and understandable language",
      "Use of many technical terms",
      "Illustrations in the form of pictures, maps & diagrams",
      "Logical and psychological sequence"
    ],
    "correctAnswer": 1,
    "explanation": "A good textbook should be accessible to its audience. Excessive use of technical jargon without clear explanations can make the content difficult to understand and hinder learning. Simplicity and clarity are key characteristics."
  },
  {
    "id": 654,
    "question": "One among the following does not come under 'Print Media' (TSTET 30 June 2025)",
    "options": [
      "News Paper",
      "Journals",
      "Encyclopaedias",
      "Educational T.V."
    ],
    "correctAnswer": 3,
    "explanation": "Print media refers to mass communication through printed publications like newspapers and journals. Educational television (T.V.) is a form of broadcast media, which uses electronic means to transmit information."
  },
  {
    "id": 655,
    "question": "One among the following is a Teacher Centred Method (TSTET 30 June 2025)",
    "options": [
      "Project Method",
      "Problem Solving Method",
      "Heuristic Method",
      "Lecture Method"
    ],
    "correctAnswer": 3,
    "explanation": "In a teacher-centered method, the teacher is the primary authority and source of knowledge. The lecture method is a classic example, where the teacher delivers information to a passive class. The other methods listed are student-centered."
  },
  {
    "id": 656,
    "question": "A teacher should give more importance to this while teaching history (TSTET 30 June 2025)",
    "options": [
      "Names of the kings and their reigns",
      "Dates of different wars and events",
      "Cause and Effect relationship",
      "Historical places"
    ],
    "correctAnswer": 2,
    "explanation": "Effective history teaching emphasizes understanding the 'why' behind events. Focusing on cause-and-effect relationships helps students develop historical thinking skills and understand the broader significance of events rather than just memorizing facts."
  },
  {
    "id": 657,
    "question": "The resource that helps the students to understand the concept of time sense in history is (TSTET 30 June 2025)",
    "options": [
      "Globe",
      "Map",
      "Time Line",
      "Charts"
    ],
    "correctAnswer": 2,
    "explanation": "A timeline is a graphic representation of a period of time, on which important events are marked in chronological order. It is an excellent tool for helping students visualize the sequence of historical events and develop a sense of historical time."
  },
  {
    "id": 658,
    "question": "The father of Evaluation is (TSTET 30 June 2025)",
    "options": [
      "J.P. Guilford",
      "B.S. Bloom",
      "J.S. Bruner",
      "Robert Mager"
    ],
    "correctAnswer": 1,
    "explanation": "Benjamin S. Bloom is regarded as a key figure in educational evaluation. His 'Taxonomy of Educational Objectives' provided a systematic framework for classifying learning objectives, laying the foundation for modern approaches to educational assessment."
  },
  {
    "id": 659,
    "question": "Choose the INCORRECT pair (TSTET 30 June 2025)",
    "options": [
      "Essay type questions - Subjectivity",
      "Objective type questions - Validity",
      "Short answer questions - Comprehensiveness",
      "Objective type questions - Reliability"
    ],
    "correctAnswer": 2,
    "explanation": "Short answer questions are not the best tool for measuring comprehensiveness (covering the entire content area). Objective tests can cover a wider range of content more efficiently. The pairing of short answers with comprehensiveness is the weakest link."
  },
  {
    "id": 660,
    "question": "Continuous and Comprehensive Evaluation (CCE) mainly aims at (TSTET 30 June 2025)",
    "options": [
      "To help the teacher to develop teaching strategy",
      "To help in the selection of students for higher education",
      "To help the students for their holistic development",
      "To assess the student at the end of the year"
    ],
    "correctAnswer": 2,
    "explanation": "The primary aim of Continuous and Comprehensive Evaluation (CCE) is to assess all aspects of a student's development throughout the year. This includes both scholastic (academic) and co-scholastic (life skills, attitudes, values) areas, promoting holistic development."
  },
  {
    "id": 661,
    "question": "Identify the correct sequence of the given temperatures in descending order (12°C, -16°C, 29°C, 0°C, 4°C, 1°C, -1°C, -4°C, 16°C) (TSTET 24 May 2024)",
    "options": [
      "0°C, -1°C, 1°C, -4°C, 4°C, 12°C, -16°C, 16°C, 29°C",
      "-16°C, -4°C, -1°C, 0°C, 1°C, 4°C, 12°C, 16°C, 29°C",
      "-1°C, -4°C, -16°C, 0°C, 1°C, 4°C, 12°C, 16°C, 29°C",
      "29°C, 16°C, 12°C, 4°C, 1°C, 0°C, -1°C, -4°C, -16°C"
    ],
    "correctAnswer": 3,
    "explanation": "Descending order means arranging numbers from the largest value to the smallest. For temperatures, the highest positive number is the largest, and the negative number with the largest absolute value is the smallest. The correct sequence is 29°C, 16°C, 12°C, 4°C, 1°C, 0°C, -1°C, -4°C, -16°C."
  },
  {
    "id": 662,
    "question": "The local time of 'X' located at 90° East Longitude, when it is 12 noon at Greenwich located at 0° longitudes is (TSTET 24 May 2024)",
    "options": [
      "6:00 p.m.",
      "6:00 a.m.",
      "3:00 p.m.",
      "3:00 a.m."
    ],
    "correctAnswer": 0,
    "explanation": "The Earth rotates 15° of longitude per hour. For every 15° east of the Prime Meridian (Greenwich), the time is one hour ahead. Since location 'X' is 90° East, the time difference is 90 / 15 = 6 hours. Therefore, the time at 'X' will be 6 hours ahead of Greenwich, making it 6:00 p.m. when it is 12 noon at Greenwich."
  },
  {
    "id": 663,
    "question": "The Byson Gorge is located in this state of India (TSTET 24 May 2024)",
    "options": [
      "Jammu and Kashmir",
      "Arunachala Pradesh",
      "Andhra Pradesh",
      "Gujarat"
    ],
    "correctAnswer": 2,
    "explanation": "The Bison Gorge is located on the Godavari River in Andhra Pradesh. It is a scenic part of the Papikondalu mountain range and Papikondalu National Park."
  },
  {
    "id": 664,
    "question": "Puerto Rica or Naves, one of the deepest trenches in the world, is located in this Ocean (TSTET 24 May 2024)",
    "options": [
      "The Indian Ocean",
      "The Arctic Ocean",
      "The Pacific Ocean",
      "The Atlantic Ocean"
    ],
    "correctAnswer": 3,
    "explanation": "The Puerto Rico Trench is the deepest point in the Atlantic Ocean. It is located on the boundary between the Caribbean Sea and the Atlantic Ocean."
  },
  {
    "id": 665,
    "question": "Actually, the winds move slightly to the right in the northern hemisphere and to the left in the southern hemisphere due to the impact of (TSTET 24 May 2024)",
    "options": [
      "Earth's Revolution around the Sun on its own axis",
      "Earth's Rotation on its own axis",
      "Revolution of the Moon around the Earth on its own axis",
      "Tilting of the Earth while rotating around itself"
    ],
    "correctAnswer": 1,
    "explanation": "This phenomenon is known as the Coriolis effect. It is an apparent deflection of moving objects (like wind and ocean currents) caused by the Earth's rotation on its axis. This effect causes objects to deflect to the right in the Northern Hemisphere and to the left in the Southern Hemisphere."
  },
  {
    "id": 666,
    "question": "Identify the mineral that is available in thin layers and is a non-conductor of electricity and heat (TSTET 24 May 2024)",
    "options": [
      "Copper",
      "Mica",
      "Manganese",
      "Aluminium"
    ],
    "correctAnswer": 1,
    "explanation": "Mica is a mineral known for its ability to be split into very thin, flexible sheets. It is an excellent electrical and thermal insulator, making it a valuable material in the electronics and electrical industries."
  },
  {
    "id": 667,
    "question": "These states of India are sharing the boundary with Bhutan (TSTET 24 May 2024)",
    "options": [
      "Sikkim, West Bengal, Arunachala Pradesh and Assam",
      "Bihar, Meghalaya, Arunachala Pradesh and Assam",
      "Meghalaya, West Bengal, Arunachala Pradesh and Sikkim",
      "West Bengal, Arunachala Pradesh, Sikkim and Manipur"
    ],
    "correctAnswer": 0,
    "explanation": "India shares its border with Bhutan along four states. From west to east, these states are Sikkim, West Bengal, Assam, and Arunachal Pradesh."
  },
  {
    "id": 668,
    "question": "One of the following is NOT the function of World Trade organization (TSTET 24 May 2024)",
    "options": [
      "It cooperates with the international institutions such as IMF and World bank",
      "It oversees International Trade policies",
      "It acts as a forum for multilateral trade negotiations",
      "It provides financial support to the developing and undeveloped countries of the world"
    ],
    "correctAnswer": 3,
    "explanation": "The World Trade Organization (WTO) sets the rules for international trade and helps resolve disputes. However, it does not provide direct financial support or loans to countries. Providing financial aid is the primary role of institutions like the World Bank and the International Monetary Fund (IMF)."
  },
  {
    "id": 669,
    "question": "Identify the Intermediary Goods among the following (TSTET 24 May 2024)",
    "options": [
      "Bricks and steel used in construction work",
      "Televisions used at home",
      "The coal used for cooking purpose",
      "Mobile Phones used by the individuals"
    ],
    "correctAnswer": 0,
    "explanation": "Intermediary goods are products used as inputs in the production of other goods. Bricks and steel are used to create a final product, such as a building. Televisions, mobile phones, and coal for home cooking are final goods, as they are used directly by the consumer."
  },
  {
    "id": 670,
    "question": "The valleys lying in between the lesser Himalayas and the Shiwaliks are called as (TSTET 24 May 2024)",
    "options": [
      "Gorges",
      "Flood Plains",
      "Canyons",
      "Duns"
    ],
    "correctAnswer": 3,
    "explanation": "Longitudinal valleys situated between the Lesser Himalayas (Himachal) and the Outer Himalayas (Shiwaliks) are known as 'Duns'. Famous examples include Dehradun, Kotli Dun, and Patli Dun."
  },
  {
    "id": 671,
    "question": "The only industry in India which is self-reliant and complete in the value chain i.e. from raw material to the highest value added products (TSTET 24 May 2024)",
    "options": [
      "Fertilizer Industry",
      "Chemical Industry",
      "Textile Industry",
      "Iron and Steel Industry"
    ],
    "correctAnswer": 2,
    "explanation": "The textile industry is considered self-reliant and complete in its value chain in India. It encompasses the entire production process, from growing raw fibers like cotton, through spinning, weaving, and processing, to manufacturing finished goods like garments."
  },
  {
    "id": 672,
    "question": "These forests are found in large parts of India, Northern Australia and in Central America (TSTET 24 May 2024)",
    "options": [
      "Tropical Deciduous forest",
      "Temperate Evergreen forests",
      "Tropical Evergreen Forests",
      "Coniferous forests"
    ],
    "correctAnswer": 0,
    "explanation": "Tropical Deciduous forests, also called monsoon forests, are found in regions with a pronounced dry season. Trees in these forests shed their leaves during this period. This biome is characteristic of large parts of India, as well as Northern Australia and Central America."
  },
  {
    "id": 673,
    "question": "This type of farming depends upon monsoon rainfall, natural fertility of the soil and sustainability of other environmental conditions to the crops grown (TSTET 24 May 2024)",
    "options": [
      "Intensive Subsistence farming",
      "Simple Subsistence farming",
      "Commercial farming",
      "Extensive farming"
    ],
    "correctAnswer": 1,
    "explanation": "Simple Subsistence farming (or primitive subsistence farming) is characterized by its reliance on natural conditions like monsoon rains and soil fertility, using simple tools and family labor to grow crops primarily for the family's own consumption."
  },
  {
    "id": 674,
    "question": "This mountain range forms the northern Edge of the Deccan Plateau (TSTET 24 May 2024)",
    "options": [
      "The Mahadev Range",
      "The Kaimur Range",
      "The Satpura Range",
      "The Aravali Range"
    ],
    "correctAnswer": 2,
    "explanation": "The Deccan Plateau is a large triangular plateau in southern India. The Satpura Range, along with the Vindhya Range, forms its northern boundary, acting as a broad base for the plateau."
  },
  {
    "id": 675,
    "question": "The two prime factors for the suitable location for establishing Aluminum smelting industry are (TSTET 24 May 2024)",
    "options": [
      "Availability of cheap labour and Regular supply of water resources",
      "Regular supply of electricity and an assured source of raw material",
      "Availability of cheap labour and an assured source of raw material",
      "Regular supply of water resources and availability of transport facilities"
    ],
    "correctAnswer": 1,
    "explanation": "Aluminum smelting is an extremely energy-intensive process that requires a vast and uninterrupted supply of electricity. Therefore, a cheap and reliable power source is the most critical factor. An assured supply of the raw material, bauxite, is the second key requirement."
  },
  {
    "id": 676,
    "question": "The Hot local winds that move down the Rocky Mountains in the USA-Canada and part of North America are (TSTET 24 May 2024)",
    "options": [
      "Simmon",
      "Yoma",
      "Mistral",
      "Chinnok"
    ],
    "correctAnswer": 3,
    "explanation": "The Chinook is a warm, dry wind that blows down the eastern side of the Rocky Mountains. It is known for causing rapid temperature increases and melting snow, earning it the nickname 'snow-eater'."
  },
  {
    "id": 677,
    "question": "One of the following is NOT required to construct Human Development Index (TSTET 24 May 2024)",
    "options": [
      "Life Expectancy at birth",
      "Education-Adult Literacy, combined Gross Enrolment Ratio",
      "Growth rate of Population",
      "Real GDP per Capita based on purchasing power"
    ],
    "correctAnswer": 2,
    "explanation": "The Human Development Index (HDI) measures development based on three dimensions: a long and healthy life (life expectancy), knowledge (education levels), and a decent standard of living (GNI per capita). Population growth rate is not a direct component of the HDI calculation."
  },
  {
    "id": 678,
    "question": "The king of England who believed that the absolute powers of the king were given by God, so the kings ruled the country by a Divine Right (TSTET 24 May 2024)",
    "options": [
      "Henry VII",
      "Edward VI",
      "James I",
      "James VI"
    ],
    "correctAnswer": 2,
    "explanation": "James I of England (who was also James VI of Scotland) was a strong proponent of the 'divine right of kings'. He argued that monarchs derived their authority directly from God and were not accountable to earthly authorities like Parliament."
  },
  {
    "id": 679,
    "question": "In 1789 CE, The Government of the United States of America adopted (TSTET 24 May 2024)",
    "options": [
      "A Democratic Constitution",
      "A Republican Constitution",
      "Monarchial form of Constitution",
      "Jacobian Constitution"
    ],
    "correctAnswer": 1,
    "explanation": "The U.S. Constitution, which went into effect in 1789, established a federal republic. A republic is a form of government in which the country is considered a 'public matter', not the private concern or property of the rulers, and where offices of state are not inherited. Thus, it is a Republican Constitution."
  },
  {
    "id": 680,
    "question": "To accomplish the unification of Germany, Bismarck got the first opportunity to rouse nationalist feelings among Prussians with opening of the issue of these places with Denmark (TSTET 24 May 2024)",
    "options": [
      "Hanover and Hassel-Cassel",
      "Bavaria, Baden and Wurttemberg",
      "Schleswig and Holstein",
      "City of Frankfurt and Holstein"
    ],
    "correctAnswer": 2,
    "explanation": "The Schleswig-Holstein Question, a complex dispute over the status of two duchies with a large German population under Danish rule, provided Otto von Bismarck with the pretext to wage war against Denmark in 1864. This successful war was the first of three wars he initiated to achieve German unification under Prussia."
  },
  {
    "id": 681,
    "question": "Among the following, Identify the preconditions required for industrialization A) The Concentration of wealth in the hands of those who want to invest money in production B) Availability of workers who were willing to work for low wages C) Requirement of large market to sell its products D) Requirement of cheap raw materials and efficient transport infrastructure (TSTET 24 May 2024)",
    "options": [
      "A & B only",
      "B & C only",
      "B, C & D only",
      "A, B, C & D"
    ],
    "correctAnswer": 3,
    "explanation": "All four listed factors are essential preconditions for industrialization. Capital investment (A), a large labor force (B), markets for finished goods (C), and access to raw materials and transportation (D) are all critical components that fueled the Industrial Revolution."
  },
  {
    "id": 682,
    "question": "Nizam Ul Mulk, the founder of the Asaf Jahi Dynasty, was the (TSTET 24 May 2024)",
    "options": [
      "Mansabdar under Mughal Rule",
      "The Subedar of the Deccan under the Mughal rule",
      "The Subedar of Bahamani rulers",
      "The Revenue Minister of Aurangajeb"
    ],
    "correctAnswer": 1,
    "explanation": "Nizam-ul-Mulk was a high-ranking noble and general in the Mughal Empire. He was appointed as the Subedar (governor) of the Deccan. Taking advantage of the weakening Mughal central authority, he established de facto independent rule and founded the Asaf Jahi dynasty, which ruled the state of Hyderabad."
  },
  {
    "id": 683,
    "question": "This Mughal emperor granted Robert Clive the right to rule Bengal (TSTET 24 May 2024)",
    "options": [
      "Bahadurshah I",
      "Jahandar Shah",
      "Shah Alam II",
      "Mohammed Azam Shah"
    ],
    "correctAnswer": 2,
    "explanation": "Following the Battle of Buxar (1764), the Mughal Emperor Shah Alam II signed the Treaty of Allahabad in 1765. In this treaty, he granted the Diwani—the right to collect revenue—of Bengal, Bihar, and Orissa to the British East India Company, which was represented by Robert Clive. This grant effectively gave the British administrative control over the region."
  },
  {
    "id": 684,
    "question": "The Central and South American countries are called 'Latin American Countries' since these languages are considered as off shoots of Latin (TSTET 24 May 2024)",
    "options": [
      "Spanish and Portuguese",
      "French and English",
      "German and Portuguese",
      "Spanish and German"
    ],
    "correctAnswer": 0,
    "explanation": "The term 'Latin America' refers to the parts of the Americas where Romance languages—languages that evolved from Latin—are spoken. The two predominant languages in the region are Spanish and Portuguese, brought by colonists from Spain and Portugal."
  },
  {
    "id": 685,
    "question": "An Inca site of worship, known as Machu Pichu, is in this country (TSTET 24 May 2024)",
    "options": [
      "Brasilia",
      "Peru",
      "Argentina",
      "Venezuela"
    ],
    "correctAnswer": 1,
    "explanation": "Machu Picchu is a famous 15th-century Inca citadel located in the Andes Mountains in Peru. It is one of the most significant archaeological sites in South America and a symbol of the Inca Empire."
  },
  {
    "id": 686,
    "question": "In the 16th century, these people had established a 'Seaborne Empire' over the Indian Ocean (TSTET 24 May 2024)",
    "options": [
      "Spanish",
      "English",
      "French",
      "Portuguese"
    ],
    "correctAnswer": 3,
    "explanation": "The Portuguese were pioneers in European maritime exploration. In the 16th century, they established a vast network of trading posts and naval bases across the Indian Ocean, creating a 'seaborne empire' (Estado da Índia) that controlled key trade routes."
  },
  {
    "id": 687,
    "question": "In between 1839-1842, the two Opium wars were fought between (TSTET 24 May 2024)",
    "options": [
      "China and France",
      "China and England",
      "India and China",
      "China and Japan"
    ],
    "correctAnswer": 1,
    "explanation": "The First Opium War (1839-1842) was fought between Qing dynasty China and Great Britain (England). The conflict arose from China's attempts to suppress the British-led opium trade. (Note: The question mentions 'two' wars, but the date range corresponds to the first war)."
  },
  {
    "id": 688,
    "question": "In this system of Government, the Government get their authority from the people and have to answer to the people (TSTET 24 May 2024)",
    "options": [
      "Constitutional Monarchy",
      "Republican Government",
      "Democratic Government",
      "Aristocratic Government"
    ],
    "correctAnswer": 2,
    "explanation": "The defining principle of a democratic government is popular sovereignty, meaning that the government's authority is derived from the consent of the governed. The government is accountable to the people, typically through regular, free, and fair elections."
  },
  {
    "id": 689,
    "question": "One of the following was NOT true regarding the effect of the Economic Depression -1929-39 (TSTET 24 May 2024)",
    "options": [
      "25% of Americans and 33% of other countries people were unemployed",
      "As factories were closed down and the trade was declined, cities became centers of decline",
      "The millions of farmers stopped cultivating the land as the prices for agricultural products were declined",
      "There was no impact of the Economic Depression on Germany"
    ],
    "correctAnswer": 3,
    "explanation": "The statement that Germany was unaffected is false. The Weimar Republic in Germany was severely impacted by the Great Depression, as American banks recalled their loans. The resulting economic collapse, hyperinflation, and massive unemployment created a climate of instability that was instrumental in the rise of Adolf Hitler and the Nazi Party."
  },
  {
    "id": 690,
    "question": "The lower house of the German Parliament is known as (TSTET 24 May 2024)",
    "options": [
      "Duma",
      "Reichstag",
      "Bundesrat",
      "National Assembly"
    ],
    "correctAnswer": 1,
    "explanation": "Historically, the lower house of the German parliament was the Reichstag. The modern-day lower house is called the Bundestag, but it convenes in the historic Reichstag building. The Bundesrat is the upper house, representing the federal states."
  },
  {
    "id": 691,
    "question": "The three principles of the programme of 'Sun Yet Sen' were Nationalism, Democracy and Socialism. Here, Socialism means (TSTET 24 May 2024)",
    "options": [
      "Overthrowing of Manchu dynasty and distribution of Government lands to the peasants",
      "Establishing a people's Government",
      "Controlling industries and land reforms to distribute land to the landless peasants",
      "Establishing a constitutional Monarchy in the country"
    ],
    "correctAnswer": 2,
    "explanation": "Sun Yat-sen's 'Three Principles of the People' included the principle of 'People's Livelihood' (Mínshēng), which is often translated as Socialism. This principle focused on ensuring economic equality through the regulation of capital and the equalization of land ownership, which involved land reforms to help peasants."
  },
  {
    "id": 692,
    "question": "The Indian Constitutional Drafting Committee consisted of (TSTET 24 May 2024)",
    "options": [
      "A Chairman, seven other members and Constitutional Advisor",
      "A Chairman, nine other members and Constitutional Advisor",
      "A Chairman, Six other members and Constitutional Advisor",
      "A Chairman, sixteen other members and Constitutional Advisor"
    ],
    "correctAnswer": 2,
    "explanation": "The Drafting Committee of the Indian Constituent Assembly was chaired by Dr. B.R. Ambedkar and consisted of six other members. The total strength of the committee was seven members (1 Chairman + 6 members). B.N. Rau was the Constitutional Advisor to the Assembly but was not a member of the committee itself."
  },
  {
    "id": 693,
    "question": "Among the following, identify the phases of Disaster Management A) Disaster Strike B) Emergency response and relief C) Rehabilitation and reconstruction D) Preparedness and Mitigation (TSTET 24 May 2024)",
    "options": [
      "A, B & C only",
      "B, C & D only",
      "A, B & D only",
      "A, B, C & D"
    ],
    "correctAnswer": 3,
    "explanation": "The comprehensive Disaster Management Cycle includes all four phases. It begins with pre-disaster actions like Preparedness and Mitigation (D), followed by the event itself (A), the immediate Emergency Response (B), and long-term recovery through Rehabilitation and Reconstruction (C)."
  },
  {
    "id": 694,
    "question": "'Doosra' and the 'reverse swing' were associated with this game (TSTET 24 May 2024)",
    "options": [
      "Kabaddi",
      "Football",
      "Cricket",
      "Hockey"
    ],
    "correctAnswer": 2,
    "explanation": "'Reverse swing' is a bowling technique in cricket where an old, worn ball swings in the opposite direction to conventional swing. The 'doosra' is a specific type of delivery bowled by an off-spin bowler that spins away from a right-handed batsman."
  },
  {
    "id": 695,
    "question": "The members of the Constituent Assembly were (TSTET 24 May 2024)",
    "options": [
      "Directly elected through adult franchise",
      "elected mainly by the members of the existing provincial legislatures",
      "Nominated by the Viceroy",
      "Representatives of the Princely States only"
    ],
    "correctAnswer": 1,
    "explanation": "The members of India's Constituent Assembly were not directly elected by the public. They were indirectly elected by the members of the provincial legislative assemblies that had been established in 1946. Representatives from the princely states were generally nominated by the rulers."
  },
  {
    "id": 696,
    "question": "India will have supreme right to take decisions on internal as well as external matters and make her own laws and no external power can make laws for India. This means that (TSTET 24 May 2024)",
    "options": [
      "India is a Socialist State",
      "India is a Democratic State",
      "India is a Sovereign State",
      "India is a secular State"
    ],
    "correctAnswer": 2,
    "explanation": "This statement defines the concept of sovereignty. A sovereign state is independent and has the ultimate authority over its territory and governance, free from external control or influence in both its domestic and foreign policies."
  },
  {
    "id": 697,
    "question": "Among the following, the Indian States having only one Lok Sabha seat are (TSTET 24 May 2024)",
    "options": [
      "Mizoram, Nagaland and Sikkim",
      "Manipur, Meghalaya and Sikkim",
      "Manipur, Meghalaya and Mizoram",
      "Tripura, Mizoram and Manipur"
    ],
    "correctAnswer": 0,
    "explanation": "Based on population size, several smaller states in India are allocated a single seat in the Lok Sabha (the lower house of Parliament). Among the given options, Mizoram, Nagaland, and Sikkim each have only one Lok Sabha constituency."
  },
  {
    "id": 698,
    "question": "The followers of Swami Dayananda Saraswathi set up the Dayanand Anglo Vedic School to (TSTET 24 May 2024)",
    "options": [
      "Revive a reformed Hindu Religion and to engage in Social Work and Social Service for national Construction",
      "Educate children in modern subjects and at the same time keep them in touch with their religion and culture",
      "Advocate the worship of one supreme God through simple rituals and recitation of Vedic mantras",
      "Educate the children to enable them understand simple rituals and recitation of Vedic mantras"
    ],
    "correctAnswer": 1,
    "explanation": "The Dayanand Anglo-Vedic (D.A.V.) movement aimed to create an educational system that balanced modern, Western knowledge (Anglo) with traditional Indian culture and Vedic principles (Vedic). The goal was to prepare students for the contemporary world while ensuring they remained connected to their cultural and religious heritage."
  },
  {
    "id": 699,
    "question": "The article 18 of the Indian Constitution talks about (TSTET 24 May 2024)",
    "options": [
      "Abolition of Untouchability",
      "Equal Protection of Law",
      "Abolition of Titles",
      "Equality of Opportunities"
    ],
    "correctAnswer": 2,
    "explanation": "Article 18, under the Right to Equality, deals with the Abolition of Titles. It prohibits the State from conferring titles (except for military and academic distinctions) and forbids citizens of India from accepting any title from a foreign state."
  },
  {
    "id": 700,
    "question": "The theme of the Road Safety Week, 2006 was (TSTET 24 May 2024)",
    "options": [
      "Our Aim, Zero Harm",
      "Sustainable Transport",
      "Sadak Suraksha jeevan Raksha",
      "Road Safety and no Accident"
    ],
    "correctAnswer": 3,
    "explanation": "The theme for the 17th National Road Safety Week observed in India in January 2006 was 'Road Safety and No Accident'. This theme was promoted to raise public awareness about traffic rules and reduce casualties on the roads."
  },
  {
    "id": 701,
    "question": "One among the following is NOT a form of trafficking (TSTET 24 May 2024)",
    "options": [
      "Forced prostitution",
      "involving children in begging for money and beating them to obey",
      "Removing body parts and doing business",
      "Threatening to harm or threatening to stop education"
    ],
    "correctAnswer": 3,
    "explanation": "Human trafficking involves recruitment, transportation, or harboring of persons by means of threat, force, or coercion for the purpose of exploitation. Forced prostitution, forced begging, and organ trafficking are recognized forms of exploitation. While threatening to stop education is a form of coercion, it is not in itself a form of trafficking unless it is used as a tool to force someone into labor or sexual exploitation."
  },
  {
    "id": 702,
    "question": "For the first time in the history of Election Commission, the election notification for these two constituencies had been cancelled in 2016 (TSTET 24 May 2024)",
    "options": [
      "Aravakurichi and Tanjavore",
      "Vellore and Tiruchirapalli",
      "Dindigul and Madurai",
      "Shiv Ganga and Tenkasi"
    ],
    "correctAnswer": 0,
    "explanation": "In May 2016, the Election Commission of India took the unprecedented step of rescinding the notification for elections in the Aravakurichi and Thanjavur (Tanjavore) constituencies of Tamil Nadu due to evidence of large-scale, systematic distribution of money to voters by candidates."
  },
  {
    "id": 703,
    "question": "The Rate of GST for Watches is 12%. The Maximum Retail Price of a Watch is Rs. 22400. The amount of tax to be paid to the Government for purchasing watch is (TSTET 24 May 2024)",
    "options": [
      "Rs. 20000",
      "Rs. 2000",
      "Rs. 2400",
      "Rs. 2600"
    ],
    "correctAnswer": 2,
    "explanation": "The MRP is inclusive of GST. Let the price before tax be 'P'. The equation is P + (12% of P) = 22400, which simplifies to 1.12 * P = 22400. Solving for P gives P = 20000. The GST amount is the difference between MRP and the pre-tax price: 22400 - 20000 = Rs. 2400."
  },
  {
    "id": 704,
    "question": "One among the following is not the characteristic feature of developing countries (TSTET 24 May 2024)",
    "options": [
      "Rapid Population Growth",
      "High standard of living",
      "Excessive dependence on agriculture",
      "Lack of infrastructural development"
    ],
    "correctAnswer": 1,
    "explanation": "Developing countries are typically characterized by features like high population growth, heavy reliance on agriculture, and inadequate infrastructure. A high standard of living, which implies high per capita income, quality healthcare, and education, is a hallmark of developed countries, not developing ones."
  },
  {
    "id": 705,
    "question": "Among the following, identify the tax imposed by the state Government (TSTET 24 May 2024)",
    "options": [
      "Personal Income Tax",
      "Goods and Service Tax",
      "Customs duty",
      "Land Revenue and Stamp Duty"
    ],
    "correctAnswer": 3,
    "explanation": "In India's federal tax structure, Personal Income Tax and Customs Duty are levied by the Central Government. GST is levied by both the center and states. Land Revenue and Stamp Duty on property transactions are taxes that fall under the exclusive jurisdiction of the state governments."
  },
  {
    "id": 706,
    "question": "The Indian Law Governing migration and employment of Indians abroad is (TSTET 24 May 2024)",
    "options": [
      "The enabling Act, 1933",
      "The emigration Act, 1983",
      "The emigration Act, 1921",
      "The immigration and Nationality Act, 1952"
    ],
    "correctAnswer": 1,
    "explanation": "The Emigration Act of 1983 is the key legislation in India that regulates the recruitment of Indian citizens for overseas employment. It aims to protect the rights and welfare of emigrant workers and prevent their exploitation."
  },
  {
    "id": 707,
    "question": "Among the following, the non-commercial bank is (TSTET 24 May 2024)",
    "options": [
      "The Reserve bank of India",
      "The State bank of India",
      "The Axis Bank",
      "The ICICI Bank"
    ],
    "correctAnswer": 0,
    "explanation": "The Reserve Bank of India (RBI) is the country's central bank. Unlike commercial banks like SBI, Axis, and ICICI, the RBI does not deal directly with the general public. Its functions are regulatory and include managing monetary policy, issuing currency, and being the banker to the government and other banks."
  },
  {
    "id": 708,
    "question": "In India, the rates of GST at present are (TSTET 24 May 2024)",
    "options": [
      "5%, 10%, 15% and 20%",
      "5%, 12%, 18% and 28%",
      "7%, 12%, 18% and 24%",
      "5%, 14%, 21% and 28%"
    ],
    "correctAnswer": 1,
    "explanation": "The Goods and Services Tax (GST) in India has a tiered structure with four primary rates for goods and services. These standard slabs are 5%, 12%, 18%, and 28%. Some items are exempt (0%), while gold is taxed at 3%."
  },
  {
    "id": 709,
    "question": "Now a days, all the farmers prefer cash crops to food crops. What problems does this lead to? This question aimed at achieving this academic standard (TSTET 24 May 2024)",
    "options": [
      "Conceptual understanding",
      "Reflection on contemporary issues and questioning",
      "Information skills",
      "Appreciation and sensitivity"
    ],
    "correctAnswer": 1,
    "explanation": "This question prompts students to analyze a current trend, think about its potential consequences (e.g., on food security, environment, economy), and raise questions. This goes beyond recalling facts and falls under the academic standard of reflecting on contemporary issues and questioning."
  },
  {
    "id": 710,
    "question": "Which of the following statement is NOT TRUE related to black board? (TSTET 24 May 2024)",
    "options": [
      "Black board acts as a mirror for the classroom work",
      "Students should not be involved for writing on Black board",
      "Black board can be used at anytime as per need",
      "Black board can also be used along with other aids"
    ],
    "correctAnswer": 1,
    "explanation": "A blackboard is a vital interactive tool in a classroom. Involving students by having them write or solve problems on the board is a valuable teaching strategy that promotes active learning and engagement. Therefore, the statement that students should not be involved is incorrect."
  },
  {
    "id": 711,
    "question": "Which of the following statement is NOT TRUE related to Inductive method? (TSTET 24 May 2024)",
    "options": [
      "In inductive method learning proceeds from particular to general",
      "Thinking ability, competencies and skills are developed in children by this method",
      "Scientific attitudes cannot be developed by this method",
      "Students retain the things they learned for longer time"
    ],
    "correctAnswer": 2,
    "explanation": "The inductive method, which involves moving from specific observations to broader generalizations, is the very basis of scientific inquiry. It fosters curiosity, observation skills, and critical thinking, which are core components of a scientific attitude. Thus, the statement that it cannot develop scientific attitudes is false."
  },
  {
    "id": 712,
    "question": "Which of the following statements are true related to map reading? A) Map reading is an art B) Any person can read maps C) Maps have their own language (TSTET 24 May 2024)",
    "options": [
      "A only",
      "A & C only",
      "A, B & C",
      "B only"
    ],
    "correctAnswer": 1,
    "explanation": "Statements A and C are true. Map reading requires skill and interpretation, making it an art (A). Maps communicate information through a standardized set of symbols, colors, and scales, which constitutes their own language (C). Statement B is false because map reading is a learned skill, not an innate ability."
  },
  {
    "id": 713,
    "question": "The main aim of teaching Social Studies at upper primary stage is (TSTET 24 May 2024)",
    "options": [
      "To describe the relationship between human beings and their social environment",
      "To describe the relationship between human beings and their physical environment",
      "To give knowledge about our Country and other parts of the world",
      "To develop rational thinking and problem solving skills among the students"
    ],
    "correctAnswer": 3,
    "explanation": "While all options are part of social studies education, the primary goal at the upper primary level is to cultivate higher-order thinking. This involves developing the ability to think critically and rationally about social issues and applying knowledge to solve problems, fostering informed and active citizenship."
  },
  {
    "id": 714,
    "question": "The Social Science laboratory for upper primary level students should be established (TSTET 24 May 2024)",
    "options": [
      "In a separate room",
      "In the corner of classroom",
      "In the corner of library",
      "In a separate room of the library"
    ],
    "correctAnswer": 0,
    "explanation": "To be effective, a social science laboratory needs adequate space to house various materials like maps, globes, models, charts, and audio-visual equipment, and to allow for student activities. A dedicated, separate room is the most suitable arrangement for this purpose."
  },
  {
    "id": 715,
    "question": "A good objective should (TSTET 24 May 2024)",
    "options": [
      "be comprehensive",
      "be specific",
      "be long",
      "be difficult"
    ],
    "correctAnswer": 1,
    "explanation": "In educational planning, a well-formulated objective must be specific and measurable. It should clearly and unambiguously state the expected learning outcome, allowing for a clear assessment of its achievement. This is often remembered by the SMART (Specific, Measurable, Achievable, Relevant, Time-bound) criteria."
  },
  {
    "id": 716,
    "question": "Which of the following is not the way of assessing the academic standard 'Information Skills'? (TSTET 24 May 2024)",
    "options": [
      "Observation of maps",
      "Drawing maps",
      "Reading maps",
      "Giving opinions on maps"
    ],
    "correctAnswer": 3,
    "explanation": "'Information Skills' relate to the ability to collect, organize, and present data. Observing, reading, and drawing maps are direct applications of these skills. 'Giving opinions' falls under a different academic standard, such as 'Appreciation and Sensitivity' or 'Reflection,' as it involves personal judgment and values."
  },
  {
    "id": 717,
    "question": "A teacher made the students to participate in a discussion on current events after explaining the lesson. This method is (TSTET 24 May 2024)",
    "options": [
      "Narration method",
      "Lecture-cum-discussion method",
      "Source method",
      "Observation method"
    ],
    "correctAnswer": 1,
    "explanation": "This approach combines two distinct teaching components: first, the teacher imparts information through explanation (the 'lecture' part), and second, the teacher facilitates student interaction and active participation (the 'discussion' part). This is the definition of the lecture-cum-discussion method."
  },
  {
    "id": 718,
    "question": "The following is a printed teaching aid (TSTET 24 May 2024)",
    "options": [
      "Chart",
      "Newspaper",
      "Globe",
      "Model"
    ],
    "correctAnswer": 1,
    "explanation": "A printed teaching aid is a resource that is mass-produced through printing. A newspaper fits this description perfectly. A chart is typically a visual display, while a globe and a model are three-dimensional representations, not printed media in the same sense."
  },
  {
    "id": 719,
    "question": "Among the following, one is a characteristic feature of a good test (TSTET 24 May 2024)",
    "options": [
      "Validity",
      "Difficulty",
      "Easy scoring",
      "Objectivity in scoring"
    ],
    "correctAnswer": 0,
    "explanation": "Key characteristics of a good assessment tool include validity, reliability, and objectivity. Validity is the most crucial; it refers to the extent to which a test accurately measures what it is designed to measure. Objectivity in scoring is also a desirable characteristic but is a component of overall reliability and fairness, whereas validity addresses the core purpose of the test."
  },
  {
    "id": 720,
    "question": "To evaluate the 'Appreciation and Sensitivity' academic standard, the following type of questions should be used (TSTET 24 May 2024)",
    "options": [
      "Open ended questions",
      "Multiple choice questions",
      "Matching questions",
      "Fill in the blank questions"
    ],
    "correctAnswer": 0,
    "explanation": "Appreciation and sensitivity involve subjective understanding, empathy, and personal values. These qualities cannot be adequately measured by closed-ended questions with a single correct answer (like MCQs or fill-in-the-blanks). Open-ended questions are required to allow students to express their nuanced thoughts, feelings, and justifications."
  },
  {
    "id": 721,
    "question": "Identify the correct sequence of the given temperatures in descending order (12°C, -16°C, 29°C, 0°C, 4°C, 1°C, -1°C, -4°C, 16°C). (TSTET 24 May 2024)",
    "options": [
      "0°C, -1°C, 1°C, -4°C, 4°C, 12°C, -16°C, 16°C, 29°C",
      "-16°C, -4°C, -1°C, 0°C, 1°C, 4°C, 12°C, 16°C, 29°C",
      "-1°C, -4°C, -16°C, 0°C, 1°C, 4°C, 12°C, 16°C, 29°C",
      "29°C, 16°C, 12°C, 4°C, 1°C, 0°C, -1°C, -4°C, -16°C"
    ],
    "correctAnswer": 3,
    "explanation": "Descending order means arranging numbers from the largest to the smallest. In the given set, positive numbers are larger than zero and negative numbers. The correct sequence from the highest temperature to the lowest is 29°C, 16°C, 12°C, 4°C, 1°C, 0°C, -1°C, -4°C, -16°C."
  },
  {
    "id": 722,
    "question": "The local time of 'X' located at 90° East Longitude, when it is 12 noon at Greenwich located at 0° longitudes is (TSTET 24 May 2024)",
    "options": [
      "6.00 p.m.",
      "6.00 a.m.",
      "3.00 p.m.",
      "3.00 a.m."
    ],
    "correctAnswer": 0,
    "explanation": "The Earth rotates 360° in 24 hours, meaning it covers 15° of longitude per hour. The time difference between Greenwich (0°) and location 'X' (90°E) is 90° / 15° per hour = 6 hours. Since 'X' is in the Eastern Hemisphere, its time is ahead of Greenwich Mean Time (GMT). Therefore, if it is 12:00 PM (noon) at Greenwich, it will be 6 hours later, or 6:00 PM, at location 'X'."
  },
  {
    "id": 723,
    "question": "The Byson Gorge is located in this state of India (TSTET 24 May 2024)",
    "options": [
      "Jammu and Kashmir",
      "Arunachala Pradesh",
      "Andhra Pradesh",
      "Gujarat"
    ],
    "correctAnswer": 2,
    "explanation": "The Bison Gorge, also known as the Papikondalu gorge, is a scenic gorge formed by the Godavari River as it flows through the Papikonda National Park. This prominent geographical feature is located in the state of Andhra Pradesh."
  },
  {
    "id": 724,
    "question": "Puerto Rica or Naves, one of the deepest trenches in the world, is located in this Ocean (TSTET 24 May 2024)",
    "options": [
      "The Indian Ocean",
      "The Arctic Ocean",
      "The Pacific Ocean",
      "The Atlantic Ocean"
    ],
    "correctAnswer": 3,
    "explanation": "The Puerto Rico Trench is the deepest part of the Atlantic Ocean and the eighth deepest trench in the world. It is located on the boundary between the Caribbean Sea and the Atlantic Ocean."
  },
  {
    "id": 725,
    "question": "Actually, the winds move slightly to the right in the northern hemisphere and to the left in the southern hemisphere due to the impact of (TSTET 24 May 2024)",
    "options": [
      "Earth's Revolution around the Sun on its own axis",
      "Earth's Rotation on its own axis",
      "Revolution of the Moon around the Earth on its own axis",
      "Tilting of the Earth while rotating around itself"
    ],
    "correctAnswer": 1,
    "explanation": "This phenomenon is known as the Coriolis effect. It is an apparent deflection of moving objects (like winds and ocean currents) when viewed from a rotating reference frame. The Earth's rotation on its axis causes this effect, deflecting objects to the right in the Northern Hemisphere and to the left in the Southern Hemisphere."
  },
  {
    "id": 726,
    "question": "Identify the mineral that is available in thin layers and is a non-conductor of electricity and heat (TSTET 24 May 2024)",
    "options": [
      "Copper",
      "Mica",
      "Manganese",
      "Aluminium"
    ],
    "correctAnswer": 1,
    "explanation": "Mica is a silicate mineral known for its ability to be split into thin, flexible layers or sheets (perfect basal cleavage). It is an excellent electrical and thermal insulator, which makes it highly valuable in the electronics and electrical industries."
  },
  {
    "id": 727,
    "question": "These states of India are sharing the boundary with Bhutan (TSTET 24 May 2024)",
    "options": [
      "Sikkim, West Bengal, Arunachala Pradesh and Assam",
      "Bihar, Meghalaya, Arunachala Pradesh and Assam",
      "Meghalaya, West Bengal, Arunachala Pradesh and Sikkim",
      "West Bengal, Arunachala Pradesh, Sikkim and Manipur"
    ],
    "correctAnswer": 0,
    "explanation": "India shares its border with Bhutan along four states. From west to east, these states are Sikkim, West Bengal, Assam, and Arunachal Pradesh."
  },
  {
    "id": 728,
    "question": "One of the following is NOT the function of World Trade organization (TSTET 24 May 2024)",
    "options": [
      "It cooperates with the international institutions such as IMF and World bank",
      "It oversees International Trade policies",
      "It acts as a forum for multilateral trade negotiations",
      "It provides financial support to the developing and undeveloped countries of the world"
    ],
    "correctAnswer": 3,
    "explanation": "The World Trade Organization (WTO) is primarily concerned with regulating international trade, settling disputes, and acting as a forum for trade negotiations. Providing direct financial support or loans to countries is the main function of financial institutions like the World Bank and the International Monetary Fund (IMF), not the WTO."
  },
  {
    "id": 729,
    "question": "Identify the Intermediary Goods among the following (TSTET 24 May 2024)",
    "options": [
      "Bricks and steel used in construction work",
      "Televisions used at home",
      "The coal used for cooking purpose",
      "Mobile Phones used by the individuals"
    ],
    "correctAnswer": 0,
    "explanation": "Intermediary goods, or intermediate goods, are products that are used in the production process to create a final product. In this case, bricks and steel are used to construct a building (the final product). Televisions, mobile phones, and coal for home use are final goods intended for direct consumption."
  },
  {
    "id": 730,
    "question": "The valleys lying in between the lesser Himalayas and the Shiwaliks are called as (TSTET 24 May 2024)",
    "options": [
      "Gorges",
      "Flood Plains",
      "Canyons",
      "Duns"
    ],
    "correctAnswer": 3,
    "explanation": "Duns are longitudinal valleys located between the Lesser Himalayas (or Himachal) and the Outer Himalayas (or Shiwaliks). These valleys are formed by the folding of the mountain ranges and are filled with alluvial deposits. Dehradun is a classic example of a Dun valley."
  },
  {
    "id": 731,
    "question": "The only industry in India which is self-reliant and complete in the value chain i.e. from raw material to the highest value added products (TSTET 24 May 2024)",
    "options": [
      "Fertilizer Industry",
      "Chemical Industry",
      "Textile Industry",
      "Iron and Steel Industry"
    ],
    "correctAnswer": 2,
    "explanation": "The textile industry is unique in India for being self-reliant and complete across its entire value chain. This spans from the production of raw materials like cotton, to processing activities like ginning, spinning, weaving, and dyeing, all the way to the creation of high-value finished products like garments."
  },
  {
    "id": 732,
    "question": "These forests are found in large parts of India, Northern Australia and in Central America (TSTET 24 May 2024)",
    "options": [
      "Tropical Deciduous forest",
      "Temperate Evergreen forests",
      "Tropical Evergreen Forests",
      "Coniferous forests"
    ],
    "correctAnswer": 0,
    "explanation": "Tropical deciduous forests, also known as monsoon forests, are characteristic of regions with a distinct dry season. The trees in these forests shed their leaves during the dry period to conserve moisture. This type of forest is widespread in large parts of India, Northern Australia, and Central America, all of which experience seasonal rainfall patterns."
  },
  {
    "id": 733,
    "question": "This type of farming depends upon monsoon rainfall, natural fertility of the soil and sustainability of other environmental conditions to the crops grown (TSTET 24 May 2024)",
    "options": [
      "Intensive Subsistence farming",
      "Simple Subsistence farming",
      "Commercial farming",
      "Extensive farming"
    ],
    "correctAnswer": 1,
    "explanation": "Simple subsistence farming, also called primitive subsistence agriculture, is practiced on small plots of land using traditional tools and family labor. It is highly dependent on natural conditions like monsoon rains and the inherent fertility of the soil, without the use of modern inputs like fertilizers or irrigation. The output is mostly consumed by the farmer's family."
  },
  {
    "id": 734,
    "question": "This mountain range forms the northern Edge of the Deccan Plateau (TSTET 24 May 2024)",
    "options": [
      "The Mahadev Range",
      "The Kaimur Range",
      "The Satpura Range",
      "The Aravali Range"
    ],
    "correctAnswer": 2,
    "explanation": "The Satpura Range in central India is a series of hills that runs east-west, south of the Vindhya Range. It forms the northern boundary or edge of the Deccan Plateau, separating it from the Indo-Gangetic Plain to the north."
  },
  {
    "id": 735,
    "question": "The two prime factors for the suitable location for establishing Aluminum smelting industry are (TSTET 24 May 2024)",
    "options": [
      "Availability of cheap labour and Regular supply of water resources",
      "Regular supply of electricity and an assured source of raw material",
      "Availability of cheap labour and an assured source of raw material",
      "Regular supply of water resources and availability of transport facilities"
    ],
    "correctAnswer": 1,
    "explanation": "Aluminum smelting is an extremely power-intensive process. Therefore, the single most important factor for locating a smelter is access to a regular and cheap supply of electricity. The second critical factor is proximity to an assured source of the raw material, bauxite, to keep transportation costs low."
  },
  {
    "id": 736,
    "question": "The Hot local winds that move down the Rocky Mountains in the USA-Canada and part of North America are (TSTET 24 May 2024)",
    "options": [
      "Simmon",
      "Yoma",
      "Mistral",
      "Chinnok"
    ],
    "correctAnswer": 3,
    "explanation": "The Chinook is a warm, dry, foehn-type wind that descends the eastern slopes of the Rocky Mountains in North America. These winds can cause rapid temperature increases in winter and are known as 'snow-eaters' because they can melt snow quickly."
  },
  {
    "id": 737,
    "question": "One of the following is NOT required to construct Human Development Index (TSTET 24 May 2024)",
    "options": [
      "Life Expectancy at birth",
      "Education-Adult Literacy, combined Gross Enrolment Ratio",
      "Growth rate of Population",
      "Real GDP per Capita based on purchasing power"
    ],
    "correctAnswer": 2,
    "explanation": "The Human Development Index (HDI) measures development based on three key dimensions: a long and healthy life (life expectancy), knowledge (education levels), and a decent standard of living (GNI per capita). The growth rate of the population is a demographic indicator but is not a direct component used in the calculation of the HDI score."
  },
  {
    "id": 738,
    "question": "The king of England who believed that the absolute powers of the king were given by God, so the kings ruled the country by a Divine Right (TSTET 24 May 2024)",
    "options": [
      "Henry VII",
      "Edward VI",
      "James I",
      "James VI"
    ],
    "correctAnswer": 2,
    "explanation": "James I of England (who was also James VI of Scotland) was a staunch advocate of the 'Divine Right of Kings'. He believed that monarchs derived their authority directly from God and were answerable only to God, not to their subjects or Parliament. This belief was a major source of conflict during his reign."
  },
  {
    "id": 739,
    "question": "In 1789 CE, The Government of the United States of America adopted (TSTET 24 May 2024)",
    "options": [
      "A Democratic Constitution",
      "A Republican Constitution",
      "Monarchial form of Constitution",
      "Jacobian Constitution"
    ],
    "correctAnswer": 1,
    "explanation": "In 1789, the United States Constitution became effective, establishing the nation's form of government. This document created a federal republic, a system where power is held by the people and their elected representatives, and which has an elected president rather than a monarch. Therefore, it is a Republican Constitution."
  },
  {
    "id": 740,
    "question": "To accomplish the unification of Germany, Bismarck got the first opportunity to rouse nationalist feelings among Prussians with opening of the issue of these places with Denmark (TSTET 24 May 2024)",
    "options": [
      "Hanover and Hassel-Cassel",
      "Bavaria, Baden and Wurttemberg",
      "Schleswig and Holstein",
      "City of Frankfurt and Holstein"
    ],
    "correctAnswer": 2,
    "explanation": "The 'Schleswig-Holstein Question' provided Otto von Bismarck with his first major opportunity in the process of German unification. In 1864, he led Prussia and Austria into war against Denmark over these two duchies. The decisive victory stirred strong German nationalist feelings and established Prussia as the leading German state."
  },
  {
    "id": 741,
    "question": "Among the following, Identify the preconditions required for industrialization\nA) The Concentration of wealth in the hands of those who want to invest money in production\nB) Availability of workers who were willing to work for low wages\nC) Requirement of large market to sell its products\nD) Requirement of cheap raw materials and efficient transport infrastructure (TSTET 24 May 2024)",
    "options": [
      "A & B only",
      "B & C only",
      "B, C & D only",
      "A, B, C & D"
    ],
    "correctAnswer": 3,
    "explanation": "All four listed factors are widely recognized as crucial preconditions for industrialization. It requires capital for investment (A), a labor force (B), markets for selling goods (C), and access to raw materials and transportation (D). The convergence of these conditions in 18th-century Britain helped spark the Industrial Revolution."
  },
  {
    "id": 742,
    "question": "Nizam Ul Mulk, the founder of the Asaf Jahi Dynasty, was the (TSTET 24 May 2024)",
    "options": [
      "Mansabdar under Mughal Rule",
      "The Subedar of the Deccan under the Mughal rule",
      "The Subedar of Bahamani rulers",
      "The Revenue Minister of Aurangajeb"
    ],
    "correctAnswer": 1,
    "explanation": "Mir Qamar-ud-din Khan Siddiqi, titled Nizam-ul-Mulk, was a high-ranking noble in the Mughal Empire. He was appointed as the Subedar (governor) of the Deccan province. He gradually consolidated his power and established the autonomous Asaf Jahi dynasty in 1724, making Hyderabad his capital and ruling the Deccan largely independently of the weakening Mughal authority in Delhi."
  },
  {
    "id": 743,
    "question": "This Mughal emperor granted Robert Clive the right to rule Bengal (TSTET 24 May 2024)",
    "options": [
      "Bahadurshah I",
      "Jahandar Shah",
      "Shah Alam II",
      "Mohammed Azam Shah"
    ],
    "correctAnswer": 2,
    "explanation": "After the decisive British victory at the Battle of Buxar in 1764, the Mughal Emperor Shah Alam II signed the Treaty of Allahabad in 1765. Through this treaty, he granted the Diwani—the right to collect taxes—of Bengal, Bihar, and Orissa to the British East India Company, represented by Robert Clive. This grant gave the company legal authority and marked a major step in the establishment of British rule in India."
  },
  {
    "id": 744,
    "question": "The Central and South American countries are called 'Latin American Countries since these languages are considered as off shoots of Latin (TSTET 24 May 2024)",
    "options": [
      "Spanish and Portuguese",
      "French and English",
      "German and Portuguese",
      "Spanish and German"
    ],
    "correctAnswer": 0,
    "explanation": "The term 'Latin America' refers to the regions in the Americas where Romance languages—languages that evolved from Latin—are predominantly spoken. The main languages of this region are Spanish and Portuguese, introduced by colonists from Spain and Portugal."
  },
  {
    "id": 745,
    "question": "An Inca site of worship, known as Machu Pichu, is in this country (TSTET 24 May 2024)",
    "options": [
      "Brasilia",
      "Peru",
      "Argentina",
      "Venezuela"
    ],
    "correctAnswer": 1,
    "explanation": "Machu Picchu is a 15th-century Inca citadel located in the Andes Mountains in Peru. It is one of the most famous archaeological sites in the world and a testament to the Inca Empire's architectural and astronomical skills."
  },
  {
    "id": 746,
    "question": "In the 16th century, these people had established a 'Seaborne Empire' over the Indian Ocean (TSTET 24 May 2024)",
    "options": [
      "Spanish",
      "English",
      "French",
      "Portuguese"
    ],
    "correctAnswer": 3,
    "explanation": "During the 16th century, the Portuguese were the first Europeans to establish a vast maritime trading empire in the Indian Ocean. Through their superior naval power and a network of fortified trading posts, they controlled key trade routes, particularly the lucrative spice trade, for about a century."
  },
  {
    "id": 747,
    "question": "In between 1839-1842, the two Opium wars were fought between (TSTET 24 May 2024)",
    "options": [
      "China and France",
      "China and England",
      "India and China",
      "China and Japan"
    ],
    "correctAnswer": 1,
    "explanation": "The First Opium War (1839–1842) was fought between Great Britain (England) and the Qing Dynasty of China. The conflict was triggered by China's campaign to stop the illegal opium trade conducted by British merchants. (Note: The question text incorrectly implies two wars in this period; the Second Opium War occurred later, from 1856 to 1860)."
  },
  {
    "id": 748,
    "question": "In this system of Government, the Government get their authority from the people and have to answer to the people (TSTET 24 May 2024)",
    "options": [
      "Constitutional Monarchy",
      "Republican Government",
      "Democratic Government",
      "Aristocratic Government"
    ],
    "correctAnswer": 2,
    "explanation": "The defining characteristic of a democratic government is that its authority is derived from the consent of the governed. This principle of popular sovereignty means that the government is accountable and answerable to the people, typically through regular, free, and fair elections."
  },
  {
    "id": 749,
    "question": "One of the following was NOT true regarding the effect of the Economic Depression -1929-39 (TSTET 24 May 2024)",
    "options": [
      "25% of Americans and 33% of other countries people were unemployed",
      "As factories were closed down and the trade was declined, cities became centers of decline",
      "The millions of farmers stopped cultivating the land as the prices for agricultural products were declined",
      "There was no impact of the Economic Depression on Germany"
    ],
    "correctAnswer": 3,
    "explanation": "Germany was one of the nations most devastated by the Great Depression. Its economy, heavily dependent on American loans for post-WWI recovery and reparations, collapsed when those loans were recalled. This led to hyperinflation, mass unemployment, and extreme political instability, which directly contributed to the rise of the Nazi Party."
  },
  {
    "id": 750,
    "question": "The lower house of the German Parliament is known as (TSTET 24 May 2024)",
    "options": [
      "Duma",
      "Reichstag",
      "Bundesrat",
      "National Assembly"
    ],
    "correctAnswer": 1,
    "explanation": "Historically, the main, lower house of the German Parliament was called the Reichstag. In the modern Federal Republic of Germany, it is known as the Bundestag. The Bundesrat is the upper house, representing the states. The Duma is the lower house of the Russian Parliament."
  },
  {
    "id": 751,
    "question": "The three principles of the programme of 'Sun Yet Sen' were Nationalism, Democracy and Socialism. Here, Socialism means (TSTET 24 May 2024)",
    "options": [
      "Overthrowing of Manchu dynasty and distribution of Government lands to the peasants",
      "Establishing a people's Government",
      "Controlling industries and land reforms to distribute land to the landless peasants",
      "Establishing a constitutional Monarchy in the country"
    ],
    "correctAnswer": 2,
    "explanation": "Sun Yat-sen's third principle, Minsheng, is often translated as 'People's Livelihood' or 'Socialism'. It focused on creating economic prosperity and equality. Its key components included the regulation of major industries by the state and the 'equalization of land rights', a program of land reform designed to ensure that farmers owned the land they tilled."
  },
  {
    "id": 752,
    "question": "The Indian Constitutional Drafting Committee consisted of (TSTET 24 May 2024)",
    "options": [
      "A Chairman, seven other members and Constitutional Advisor",
      "A Chairman, nine other members and Constitutional Advisor",
      "A Chairman, Six other members and Constitutional Advisor",
      "A Chairman, sixteen other members and Constitutional Advisor"
    ],
    "correctAnswer": 2,
    "explanation": "The Drafting Committee, chaired by Dr. B. R. Ambedkar, was composed of a total of seven members: a Chairman (Ambedkar) and six other members. Sir B.N. Rau served as the Constitutional Advisor to the Constituent Assembly, but he was not a member of the Drafting Committee itself."
  },
  {
    "id": 753,
    "question": "Among the following, identify the phases of Disaster Management\nA) Disaster Strike\nB) Emergency response and relief\nC) Rehabilitation and reconstruction\nD) Preparedness and Mitigation (TSTET 24 May 2024)",
    "options": [
      "A, B & C only",
      "B, C & D only",
      "A, B & D only",
      "A, B, C & D"
    ],
    "correctAnswer": 3,
    "explanation": "The comprehensive disaster management cycle includes all four listed elements. It begins with pre-disaster activities like Mitigation and Preparedness (D). This is followed by the event itself, the Disaster Strike (A). Immediately after, the Response phase (B) begins. The final, long-term phase involves Recovery, Rehabilitation, and Reconstruction (C), which then feeds back into mitigation to reduce future risks."
  },
  {
    "id": 754,
    "question": "'Doosra' and the 'reverse swing' were associated with this game (TSTET 24 May 2024)",
    "options": [
      "Kabaddi",
      "Football",
      "Cricket",
      "Hockey"
    ],
    "correctAnswer": 2,
    "explanation": "Both 'reverse swing' and the 'doosra' are specialized techniques used by bowlers in the sport of cricket. Reverse swing is a method of swinging an old, roughened ball in the opposite direction of conventional swing, while the doosra is a type of off-spin delivery that turns away from a right-handed batsman."
  },
  {
    "id": 755,
    "question": "The members of the Constituent Assembly were (TSTET 24 May 2024)",
    "options": [
      "Directly elected through adult franchise",
      "elected mainly by the members of the existing provincial legislatures",
      "Nominated by the Viceroy",
      "Representatives of the Princely States only"
    ],
    "correctAnswer": 1,
    "explanation": "The members of the Constituent Assembly were not directly elected by the people of India. They were elected indirectly by the members of the provincial legislative assemblies, which had been elected in 1946 on a limited franchise. Members from the princely states were generally nominated by the rulers of those states."
  },
  {
    "id": 756,
    "question": "India will have supreme right to take decisions on internal as well as external matters and make her own laws and no external power can make laws for India. This means that (TSTET 24 May 2024)",
    "options": [
      "India is a Socialist State",
      "India is a Democratic State",
      "India is a Sovereign State",
      "India is a secular State"
    ],
    "correctAnswer": 2,
    "explanation": "This statement defines the principle of sovereignty. A sovereign state is independent and not subject to the authority of any other country. It has the full right and power to govern itself, making its own laws and decisions on both internal and external matters without any external interference."
  },
  {
    "id": 757,
    "question": "Among the following, the Indian States having only one Lok Sabha seat are (TSTET 24 May 2024)",
    "options": [
      "Mizoram, Nagaland and Sikkim",
      "Manipur, Meghalaya and Sikkim",
      "Manipur, Meghalaya and Mizoram",
      "Tripura, Mizoram and Manipur"
    ],
    "correctAnswer": 0,
    "explanation": "Based on population size, several smaller states in India are allocated a single seat in the Lok Sabha (the lower house of Parliament). Among the given options, Mizoram, Nagaland, and Sikkim each have one Lok Sabha constituency. Manipur and Meghalaya each have two seats, and Tripura also has two seats."
  },
  {
    "id": 758,
    "question": "The followers of Swami Dayananda Saraswathi set up the Dayanand Anglo Vedic School to (TSTET 24 May 2024)",
    "options": [
      "Revive a reformed Hindu Religion and to engage in Social Work and Social Service for national Construction",
      "Educate children in modern subjects and at the same time keep them in touch with their religion and culture",
      "Advocate the worship of one supreme God through simple rituals and recitation of Vedic mantras",
      "Educate the children to enable them understand simple rituals and recitation of Vedic mantras"
    ],
    "correctAnswer": 1,
    "explanation": "The Dayanand Anglo-Vedic (D.A.V.) movement was founded to perpetuate the vision of Swami Dayananda. Its core educational philosophy was to create a blend of Western education (Anglo) and traditional Indian Vedic wisdom (Vedic). The goal was to provide students with modern, scientific knowledge while ensuring they remained grounded in their own culture and religious values."
  },
  {
    "id": 759,
    "question": "The article 18 of the Indian Constitution talks about (TSTET 24 May 2024)",
    "options": [
      "Abolition of Untouchability",
      "Equal Protection of Law",
      "Abolition of Titles",
      "Equality of Opportunities"
    ],
    "correctAnswer": 2,
    "explanation": "Article 18 of the Indian Constitution, part of the Right to Equality, deals with the 'Abolition of Titles'. It prohibits the State from conferring any titles (except military and academic distinctions) and prevents Indian citizens from accepting titles from foreign states, thereby promoting social equality."
  },
  {
    "id": 760,
    "question": "The theme of the Road Safety Week, 2006 was (TSTET 24 May 2024)",
    "options": [
      "Our Aim, Zero Harm",
      "Sustainable Transport",
      "Sadak Suraksha jeevan Raksha",
      "Road Safety and no Accident"
    ],
    "correctAnswer": 3,
    "explanation": "The theme for the National Road Safety Week observed in India in 2006 was 'Road Safety and no Accident'. The annual event aims to raise public awareness about traffic rules and reduce casualties due to road accidents."
  },
  {
    "id": 761,
    "question": "One among the following is NOT a form of trafficking (TSTET 24 May 2024)",
    "options": [
      "Forced prostitution",
      "involving children in begging for money and beating them to obey",
      "Removing body parts and doing business",
      "Threatening to harm or threatening to stop education"
    ],
    "correctAnswer": 3,
    "explanation": "Human trafficking involves the recruitment, transportation, or harboring of people through force, fraud, or coercion for the purpose of exploitation. Forced prostitution, forced begging, and organ harvesting are all forms of exploitation and thus forms of trafficking. While threatening harm or stopping education are methods of coercion used by traffickers, they are the means to the end, not the form of trafficking itself."
  },
  {
    "id": 762,
    "question": "For the first time in the history of Election Commission, the election notification for these two constituencies had been cancelled in 2016 (TSTET 24 May 2024)",
    "options": [
      "Arava Kurichi and Tanjavure",
      "Vellore and Tiruchirapalli",
      "Dindigul and Madurai",
      "Shiva Ganga and Tenkasi"
    ],
    "correctAnswer": 0,
    "explanation": "In a historic first, the Election Commission of India in May 2016 cancelled the elections in two Tamil Nadu assembly constituencies, Aravakurichi and Thanjavur (Tanjore), following evidence of large-scale, systematic distribution of money and gifts to bribe voters by candidates and political parties."
  },
  {
    "id": 763,
    "question": "The Rate of GST for Watches is 12%. The Maximum Retail Price of a Watch is Rs. 22400. The amount of tax to be paid to the Government for purchasing watch is (TSTET 24 May 2024)",
    "options": [
      "Rs. 2400",
      "Rs. 2688",
      "Rs. 2100",
      "Rs. 2500"
    ],
    "correctAnswer": 1,
    "explanation": "Assuming the Maximum Retail Price (MRP) of Rs. 22,400 is the base value on which GST is calculated, the tax amount would be 12% of this value. Calculation: Tax = Rs. 22,400 * (12/100) = Rs. 2,688. (Note: Typically, MRP is inclusive of all taxes, which would yield a tax amount of Rs. 2400. However, given the options, the question intends for the tax to be calculated on the stated MRP)."
  },
  {
    "id": 764,
    "question": "One among the following is not the characteristic feature of developing countries (TSTET 24 May 2024)",
    "options": [
      "Rapid Population Growth",
      "High standard of living",
      "Excessive dependence on agriculture",
      "Lack of infrastructural development"
    ],
    "correctAnswer": 1,
    "explanation": "A high standard of living is a characteristic feature of developed nations, not developing ones. Developing countries are typically characterized by features such as rapid population growth, heavy economic dependence on the primary sector (like agriculture), low per capita income, and underdeveloped infrastructure."
  },
  {
    "id": 765,
    "question": "Among the following, identify the tax imposed by the state Government (TSTET 24 May 2024)",
    "options": [
      "Personal Income Tax",
      "Goods and Service Tax",
      "Customs duty",
      "Land Revenue and Stamp Duty"
    ],
    "correctAnswer": 3,
    "explanation": "In India's federal system, taxation powers are divided. Personal Income Tax and Customs Duty are central government taxes. GST is collected by both the center and states. However, Land Revenue (tax on agricultural land) and Stamp Duty (tax on legal documents and property transactions) are taxes that are exclusively levied and collected by the state governments."
  },
  {
    "id": 766,
    "question": "The Indian Law Governing migration and employment of Indians abroad is (TSTET 24 May 2024)",
    "options": [
      "The enrolling Act, 1933",
      "The emigration Act, 1983",
      "The emigration Act, 1921",
      "The immigration and Nationality Act, 1952"
    ],
    "correctAnswer": 1,
    "explanation": "The Emigration Act, 1983 is the key legislation in India that regulates the process of emigration and the recruitment of Indian citizens for employment in other countries. Its primary objective is to protect and ensure the welfare of Indian workers abroad."
  },
  {
    "id": 767,
    "question": "Among the following, the non-commercial bank is (TSTET 24 May 2024)",
    "options": [
      "The Reserve bank of India",
      "The State bank of India",
      "The Axis Bank",
      "The ICICI Bank"
    ],
    "correctAnswer": 0,
    "explanation": "The Reserve Bank of India (RBI) is the country's central bank. Unlike commercial banks (like SBI, Axis, ICICI) which deal with the general public, the RBI's role is to regulate the banking system, manage currency, and act as a banker to the government and other banks. It is a regulatory body, not a commercial one."
  },
  {
    "id": 768,
    "question": "In India, the rates of GST at present are (TSTET 24 May 2024)",
    "options": [
      "5%, 10%, 15% and 20%",
      "5%, 12%, 18% and 28%",
      "7%, 12%, 18% and 24%",
      "5%, 14%, 21% and 28%"
    ],
    "correctAnswer": 1,
    "explanation": "India's Goods and Services Tax (GST) system has a tiered structure with four primary rates for goods and services. These standard slabs are 5%, 12%, 18%, and 28%. Additionally, there are special rates like 0% for essential items and 3% for gold."
  },
  {
    "id": 769,
    "question": "Now a days, all the farmers prefer cash crops to food crops. What problems does this lead to? This question aimed at achieving this academic standard (TSTET 24 May 2024)",
    "options": [
      "Conceptual understanding",
      "Reflection on contemporary issues and questioning",
      "Information skills",
      "Appreciation and sensitivity"
    ],
    "correctAnswer": 1,
    "explanation": "This question requires students to go beyond recalling facts. They must analyze a current societal trend (shift from food to cash crops), think critically about its potential negative consequences (e.g., on food security), and formulate an argument. This process directly aligns with the academic standard of reflecting on contemporary issues and questioning existing practices."
  },
  {
    "id": 770,
    "question": "Which of the following statement is NOT TRUE related to black board? (TSTET 24 May 2024)",
    "options": [
      "Black board acts as a mirror for the classroom work.",
      "Students should not be involved for writing on Black board",
      "Black board can be used at anytime as per need",
      "Black board can also be used along with other aids"
    ],
    "correctAnswer": 1,
    "explanation": "Effective and modern teaching practices emphasize active student participation. Involving students by having them write on the blackboard is a valuable technique for engagement, assessment, and collaborative learning. Therefore, the statement that students should be excluded from writing on the board is false and contrary to good pedagogy."
  },
  {
    "id": 771,
    "question": "Which of the following statement is NOT TRUE related to Inductive method? (TSTET 24 May 2024)",
    "options": [
      "In inductive method, learning proceeds from particular to general",
      "Thinking ability, competencies and skills are developed in children by this method",
      "Scientific attitudes cannot be developed by this method",
      "Students retain the things they learned for longer time"
    ],
    "correctAnswer": 2,
    "explanation": "The inductive method is fundamental to scientific inquiry. It involves making specific observations and then drawing broader generalizations or theories from them. This process of observation, analysis, and hypothesis formation naturally fosters key scientific attitudes like curiosity, objectivity, and a reliance on evidence. Therefore, the statement that it cannot develop scientific attitudes is false."
  },
  {
    "id": 772,
    "question": "Which of the following statements are true related to map reading?\nA) Map reading is an art\nB) Any person can read maps\nC) Maps have their own language\nChoose the correct answer (TSTET 24 May 2024)",
    "options": [
      "A, C only",
      "A only",
      "A, B & C",
      "A, B only"
    ],
    "correctAnswer": 0,
    "explanation": "Map reading is considered an art and a skill (A is true). Maps use a specific set of symbols, colors, and scales which form their own language (C is true). However, statement (B) is not necessarily true; reading and interpreting a map correctly requires learning and practice, it is not an innate ability that any person can do without training."
  },
  {
    "id": 773,
    "question": "This statement is NOT related to social studies (TSTET 24 May 2024)",
    "options": [
      "Social studies is the study of people in relation to each other and to their environment",
      "Social studies gives importance to memorization",
      "Social studies draws its subject matter from history, geography, civics, economics etc",
      "Social studies deals with human relations in many forms."
    ],
    "correctAnswer": 1,
    "explanation": "The primary goal of modern social studies education is to develop critical thinking, analytical skills, and an understanding of complex human relationships and societal structures. While some memorization of facts is necessary, the emphasis is on comprehension and application, not rote learning. Therefore, stating that it 'gives importance to memorization' misrepresents its core purpose."
  },
  {
    "id": 774,
    "question": "This is not a component of a lesson plan. (TSTET 24 May 2024)",
    "options": [
      "Time of the class",
      "Period number",
      "Date of the class",
      "Teacher’s signature"
    ],
    "correctAnswer": 3,
    "explanation": "A lesson plan is a teacher's guide for conducting a lesson. Its essential components include objectives, activities, materials, and logistical information like date, class, and period. A teacher's signature is for administrative purposes like verification or approval and is not a functional component needed to actually teach the lesson."
  },
  {
    "id": 775,
    "question": "This helps to acquire knowledge on their own by using various source materials. (TSTET 24 May 2024)",
    "options": [
      "Project Method",
      "Recitation method",
      "Question-Answer method",
      "Lecture method"
    ],
    "correctAnswer": 0,
    "explanation": "The project method is a student-centered approach where students investigate a topic over an extended period. This method inherently requires students to independently research and gather information from a variety of sources (books, internet, interviews) to complete their project, thereby promoting self-directed learning."
  },
  {
    "id": 776,
    "question": "This type of test items can not be used for diagnosis (TSTET 24 May 2024)",
    "options": [
      "Multiple choice",
      "Matching type",
      "Completion type",
      "Essay type"
    ],
    "correctAnswer": 1,
    "explanation": "Diagnostic tests aim to identify specific learning difficulties. Matching-type questions are effective for testing recognition of relationships between pairs of items but are generally poor for diagnosis. They don't reveal a student's thought process or the specific nature of their misunderstanding in the way that analyzing wrong choices in multiple-choice, analyzing a written response in an essay, or seeing the specific error in a completion-type question can."
  },
  {
    "id": 777,
    "question": "'To study about the life style of tribals in Adilabad district'. The most suitable teaching method is (TSTET 24 May 2024)",
    "options": [
      "Project Method",
      "Source Method",
      "Lecture Method",
      "Field trip Method"
    ],
    "correctAnswer": 3,
    "explanation": "To study the lifestyle of a community, the most effective and authentic method is a field trip (also known as the excursion method). It allows students to gain direct, first-hand experience and observe the people, their culture, and their environment in the actual setting, providing a much richer understanding than any classroom-based method could."
  },
  {
    "id": 778,
    "question": "This is not a quality of a good social studies text book. (TSTET 24 May 2024)",
    "options": [
      "Logical and psychological sequence of content",
      "Gives scope for discussions and debates",
      "Gives information through pictures and cartoons",
      "Gives importance for memorizing facts"
    ],
    "correctAnswer": 3,
    "explanation": "A high-quality social studies textbook should foster critical thinking, analysis, and understanding of concepts. Its main purpose is not to be a repository of facts for rote learning. Therefore, a textbook that gives primary importance to memorizing facts, rather than encouraging inquiry and interpretation, lacks a key quality of a good educational resource."
  },
  {
    "id": 779,
    "question": "The father of modern Chinese revolution is (TSTET 24 May 2024)",
    "options": [
      "Dr. Sun Yat Sen",
      "Mao Zedong",
      "Chiang Kai Shek",
      "Yuan Shikai"
    ],
    "correctAnswer": 0,
    "explanation": "Dr. Sun Yat-sen is revered as the 'Father of Modern China'. He was a revolutionary and political leader who played a crucial role in the overthrow of the Qing dynasty during the 1911 Revolution. He co-founded the Kuomintang (KMT) and served as the first provisional president of the Republic of China."
  },
  {
    "id": 780,
    "question": "In the year 1917, the peasants of Champaran were forced by the British to cultivate this crop. (TSTET 24 May 2024)",
    "options": [
      "Tea",
      "Cotton",
      "Indigo",
      "Opium"
    ],
    "correctAnswer": 2,
    "explanation": "The Champaran Satyagraha of 1917, led by Mahatma Gandhi, was a movement on behalf of the tenant farmers of Champaran, Bihar. They were forced by their British landlords to cultivate indigo on a portion of their land under the exploitative 'tinkathia' system, which caused them great hardship and financial loss."
  },
  {
    "id": 781,
    "question": "Ravi is travelling from New York to New Delhi. Hence, he (TSTET 28 May 2024)",
    "options": [
      "Loses 4 minutes of time as he crosses every longitude",
      "Gains 4 minutes of time as he crosses every longitude",
      "Neither gains nor loses the time as he crosses every longitude",
      "Gains 15 minutes of time as he crosses every longitude"
    ],
    "correctAnswer": 1,
    "explanation": "When traveling eastward from New York (Western Hemisphere) to New Delhi (Eastern Hemisphere), one moves towards earlier time zones. The Earth rotates from west to east, and for every degree of longitude crossed eastward, time is gained by 4 minutes. Therefore, Ravi will gain time as he travels."
  },
  {
    "id": 782,
    "question": "The lava which cools under the surface and becomes rocks even without reaching the surface of the earth, these rocks are called as (TSTET 28 May 2024)",
    "options": [
      "Intrusive rocks",
      "Extrusive rocks",
      "Sedimentary rocks",
      "Metamorphic rocks"
    ],
    "correctAnswer": 0,
    "explanation": "Intrusive igneous rocks, also known as plutonic rocks, are formed when magma cools and crystallizes slowly within the Earth's crust without reaching the surface. This slow cooling process allows for the formation of large crystals. Granite is a common example."
  },
  {
    "id": 783,
    "question": "The water concentrated here is most easily accessible for human needs and absolutely vital for the ecosystems (TSTET 28 May 2024)",
    "options": [
      "Ice and permanent snow cover in the Antarctica",
      "The permanent snow in the mountain ranges",
      "Fresh Ground Waters",
      "Water concentrated in lakes, reservoirs and in rivers"
    ],
    "correctAnswer": 3,
    "explanation": "Surface freshwater, found in lakes, reservoirs, and rivers, is the most accessible source of water for human consumption, agriculture, and industry. It also forms the basis of many vital aquatic ecosystems, even though it represents a very small fraction of the Earth's total water."
  },
  {
    "id": 784,
    "question": "From among the following, the layer of Heterosphere is (TSTET 28 May 2024)",
    "options": [
      "Troposphere",
      "Stratosphere",
      "Mesosphere",
      "Exosphere"
    ],
    "correctAnswer": 3,
    "explanation": "The Earth's atmosphere is divided into the Homosphere (up to about 80 km) and the Heterosphere (above 80 km). The Heterosphere includes the Thermosphere and the Exosphere. In this layer, gases are not well-mixed and are stratified by molecular weight. The Exosphere is the outermost layer."
  },
  {
    "id": 785,
    "question": "Read the following statements and answer the following A) A Canyon is characterised by steep side slopes. It is wider at its top than at the bottom. B) A Gorge is almost equal in width at its top as well as its bottom (TSTET 28 May 2024)",
    "options": [
      "Statement 'A 'is correct but 'B' is incorrect",
      "Statement 'A 'is incorrect but 'B' is correct",
      "Statement 'A 'and 'B' are correct",
      "Statement 'A 'and 'B' are incorrect"
    ],
    "correctAnswer": 2,
    "explanation": "Both statements correctly describe the respective landforms. A canyon is a deep valley with steep sides, typically wider at the top, often formed in arid regions. A gorge is also a deep, narrow valley, but its width is nearly uniform from top to bottom, often with very steep, rocky walls."
  },
  {
    "id": 786,
    "question": "Between the latitudes $40^{0}$ and $60^{0}$ N and S of the equator, the rainfall is heavy on the west coast and decreases towards the east due to (TSTET 28 May 2024)",
    "options": [
      "The Westerlies",
      "Trade winds",
      "Monsoon winds",
      "The Polar High Pressure Winds"
    ],
    "correctAnswer": 0,
    "explanation": "The Westerlies are prevailing winds that blow from west to east in the mid-latitudes ($30^{0}$ to $60^{0}$). They pick up moisture from the oceans and cause significant orographic precipitation on the western coasts of continents. As they move inland (eastward), they lose moisture, leading to decreased rainfall."
  },
  {
    "id": 787,
    "question": "This type of farming is labour intensive where high doses of biochemical inputs and irrigation are used for obtaining higher production (TSTET 28 May 2024)",
    "options": [
      "Simple subsistence farming",
      "Commercial farming",
      "Intensive subsistence farming",
      "Mixed farming"
    ],
    "correctAnswer": 2,
    "explanation": "Intensive subsistence farming is characterized by high inputs of labor, fertilizers, and water on a small plot of land to maximize yield per unit area. This method is common in densely populated regions where landholdings are small."
  },
  {
    "id": 788,
    "question": "The two main factors for the location of the Aluminium Smelting Industry are (TSTET 28 May 2024)",
    "options": [
      "Regular Supply of water and availability of cheap labour",
      "Regular supply of electricity and continuous availability of labour cheaply",
      "An assured source of raw material at minimum cost and regular supply of water",
      "Regular supply of electricity and an assured source of raw material at minimum cost"
    ],
    "correctAnswer": 3,
    "explanation": "Aluminum smelting is a highly power-intensive process, requiring a large and regular supply of electricity. Proximity to the source of raw material, bauxite, at a low cost is also critical to minimize transportation expenses and ensure the industry's economic viability."
  },
  {
    "id": 789,
    "question": "The Shiwalik Ranges run parallel to the lesser Himalayas for a distance of 2400 km from (TSTET 28 May 2024)",
    "options": [
      "Pir Panjal Range and Zaskar Range",
      "The Potwar Plateau and the Brahmaputra Valley",
      "Jammu & Kashmir and Nagaland",
      "Dehradun in Uttaranchal and Brahmaputra Valley"
    ],
    "correctAnswer": 1,
    "explanation": "The Shiwalik Range, the outermost foothills of the Himalayas, extends for about 2,400 km from the Potwar Plateau in Pakistan in the west to the Brahmaputra Valley in Arunachal Pradesh in the east, running parallel to the main Himalayan ranges."
  },
  {
    "id": 790,
    "question": "Identify the true statement from among the following (TSTET 28 May 2024)",
    "options": [
      "Shimla is cooler than Delhi and Panaji as it is located at higher altitude",
      "Shimla is hotter than Delhi and Panaji as it is located at higher altitude",
      "Shimla, Delhi and Panaji experience same temperatures even though they are located at different altitudes",
      "There is no impact of Altitude on temperature"
    ],
    "correctAnswer": 0,
    "explanation": "Temperature generally decreases with an increase in altitude, a phenomenon known as the normal lapse rate. Since Shimla is located at a much higher altitude (approx. 2276 m) than Delhi (approx. 280 m) and Panaji (at sea level), it experiences cooler temperatures throughout the year."
  },
  {
    "id": 791,
    "question": "This information is an important social indicator to measure the extent of equality between men and women in a society (TSTET 28 May 2024)",
    "options": [
      "Growth Rate of Population",
      "Literacy rate",
      "Fertility rate",
      "Sex Ratio"
    ],
    "correctAnswer": 3,
    "explanation": "The sex ratio, defined as the number of females per 1000 males, is a crucial indicator of gender balance. A skewed or declining sex ratio often points to social issues like female feticide, son preference, gender-based discrimination, and unequal access to resources for women."
  },
  {
    "id": 792,
    "question": "One of the following is NOT the characteristic feature of Peninsular rivers (TSTET 28 May 2024)",
    "options": [
      "they have fixed course",
      "meanders are absent",
      "largely non perennial",
      "largely perennial"
    ],
    "correctAnswer": 3,
    "explanation": "Peninsular rivers are mostly rain-fed and are not sourced from glaciers. Therefore, their flow is seasonal and dependent on monsoons, making them largely non-perennial (not flowing year-round). Being largely perennial is a characteristic of Himalayan rivers, not peninsular ones."
  },
  {
    "id": 793,
    "question": "In India, these soils cover about 45.6% of the total geographical area of the country (TSTET 28 May 2024)",
    "options": [
      "Red Soils",
      "Black Soils",
      "Alluvial Soils",
      "Laterite Soils"
    ],
    "correctAnswer": 2,
    "explanation": "Alluvial soils are the most widespread soils in India, covering nearly 46% of the total land area. They are found in the vast northern plains and river valleys and are formed by the deposition of silt, sand, and clay by rivers, making them highly fertile."
  },
  {
    "id": 794,
    "question": "On these two days, the Sun shine directly over the equator (TSTET 28 May 2024)",
    "options": [
      "June 21 and December 22",
      "March 21 and December 22",
      "June 21 and September 23",
      "March 21 and September 23"
    ],
    "correctAnswer": 3,
    "explanation": "The equinoxes occur around March 21 (vernal equinox) and September 23 (autumnal equinox). On these dates, the sun's rays are directly overhead at the equator, resulting in nearly equal day and night lengths across the globe."
  },
  {
    "id": 795,
    "question": "From among the following, the finest iron ore with a very high content of iron is (TSTET 28 May 2024)",
    "options": [
      "Magnetite",
      "Hematite",
      "Limotite",
      "Siderite"
    ],
    "correctAnswer": 0,
    "explanation": "Magnetite ($Fe_3O_4$) is considered the finest quality of iron ore, with an iron content of up to 72%. It also has excellent magnetic properties. Hematite is the most important industrial iron ore globally but has a slightly lower iron content than magnetite."
  },
  {
    "id": 796,
    "question": "Fixation of minimum support price is based on the recommendations of (TSTET 28 May 2024)",
    "options": [
      "Commission for agriculture costs and prices",
      "Food corporation of India",
      "Indian costs and works association",
      "Farmers Associations of India"
    ],
    "correctAnswer": 0,
    "explanation": "The Commission for Agricultural Costs and Prices (CACP) is the statutory body that recommends the Minimum Support Prices (MSPs) for various agricultural crops to the Government of India, which then makes the final decision."
  },
  {
    "id": 797,
    "question": "Arrange 'the stages of manufacturing paper in a proper sequence A) Making wood pulp B) Chipping C) Pressing, drying and rolling D) Spreading pulp E) Cutting the paper (TSTET 28 May 2024)",
    "options": [
      "A, E, C, D, B",
      "A, B, C, D, E",
      "B, C, D, E, A",
      "B, A, D, C, E"
    ],
    "correctAnswer": 3,
    "explanation": "The correct sequence for papermaking is: B) Chipping (cutting wood), A) Making wood pulp (creating fiber slurry), D) Spreading pulp (forming a sheet), C) Pressing, drying and rolling (removing water and smoothing), and E) Cutting the paper."
  },
  {
    "id": 798,
    "question": "IFSC and internet do not need for the following digital payments (TSTET 28 May 2024)",
    "options": [
      "RTGS",
      "NEFT",
      "USSD",
      "UPI"
    ],
    "correctAnswer": 2,
    "explanation": "Unstructured Supplementary Service Data (USSD) technology allows mobile banking transactions using a basic feature phone without an internet connection. Users dial a specific code (like *99#) to access services. RTGS, NEFT, and UPI generally require an internet connection."
  },
  {
    "id": 799,
    "question": "A change in the price is measured with the help of a statistical device referred as (TSTET 28 May 2024)",
    "options": [
      "Inflation",
      "Price index",
      "Margin price",
      "Growth"
    ],
    "correctAnswer": 1,
    "explanation": "A price index is a statistical measure that shows the average percentage change in prices of a basket of goods and services over time relative to a base period. It is the primary tool used to measure inflation."
  },
  {
    "id": 800,
    "question": "Inorder to obtain Gross Domestic Product, the following has to be subtracted from Gross National Product (TSTET 28 May 2024)",
    "options": [
      "Net income from abroad",
      "Depreciation",
      "Indirect taxes",
      "Subsidy"
    ],
    "correctAnswer": 0,
    "explanation": "The relationship is GNP = GDP + Net Factor Income from Abroad (NFIA). Therefore, to get GDP from GNP, one must subtract the Net Factor Income from Abroad (which is the income earned by residents from overseas minus income earned by non-residents domestically)."
  },
  {
    "id": 801,
    "question": "The following can be considered as chronic energy deficiency (TSTET 28 May 2024)",
    "options": [
      "$BMI\\le18.5$",
      "BMI between 18.5 and 25",
      "$BMI\\ge25$",
      "$BMI\\ge20$"
    ],
    "correctAnswer": 0,
    "explanation": "Body Mass Index (BMI) is a measure of body fat. According to the World Health Organization (WHO), a BMI less than or equal to 18.5 is classified as underweight, which is an indicator of chronic energy deficiency or malnutrition in adults."
  },
  {
    "id": 802,
    "question": "Removing of trade barriers or restrictions set by the government is known as (TSTET 28 May 2024)",
    "options": [
      "Globalisation",
      "Liberalisation",
      "Privatisation",
      "Socialization"
    ],
    "correctAnswer": 1,
    "explanation": "Liberalisation refers to the process of reducing or eliminating government controls and restrictions on economic activities. In the context of trade, this involves removing barriers such as tariffs, quotas, and import licenses to promote free trade."
  },
  {
    "id": 803,
    "question": "The main force behind Chipko movement was (TSTET 28 May 2024)",
    "options": [
      "Greenpeace organization",
      "Tribal people",
      "Village women",
      "Contractors"
    ],
    "correctAnswer": 2,
    "explanation": "The Chipko movement was a non-violent ecological movement primarily driven by rural women in the Garhwal Himalayas. They hugged trees (the literal meaning of 'chipko') to prevent them from being cut down, highlighting their dependence on forests for livelihood and sustenance."
  },
  {
    "id": 804,
    "question": "One among the following is NOT a service sector activity (TSTET 28 May 2024)",
    "options": [
      "Milk vending",
      "Mining extraction",
      "Garden watchmen",
      "Vegetable selling"
    ],
    "correctAnswer": 1,
    "explanation": "Economic activities are categorized into primary (extraction), secondary (manufacturing), and tertiary (services) sectors. Mining extraction involves the removal of natural resources from the earth, which is a primary sector activity. The other options are all tertiary sector activities."
  },
  {
    "id": 805,
    "question": "Magasthenes, an ambassador of a Greek King, was in the court of (TSTET 28 May 2024)",
    "options": [
      "Bimbisara",
      "Chandragupta Maurya",
      "Ashoka",
      "Bindusara"
    ],
    "correctAnswer": 1,
    "explanation": "Megasthenes was a Greek diplomat sent as an ambassador by Seleucus I Nicator to the court of Chandragupta Maurya in Pataliputra. His famous work, \"Indica,\" provides a valuable, though partly fragmented, account of Mauryan India."
  },
  {
    "id": 806,
    "question": "This inscription had provided the details of the way in which the Sabha was organised during Cholas (TSTET 28 May 2024)",
    "options": [
      "Uttaramerur Inscription",
      "Allahabad Inscription",
      "Junagadh Rock Inscription",
      "Nasik Inscription"
    ],
    "correctAnswer": 0,
    "explanation": "The Uttaramerur inscriptions from Tamil Nadu give detailed information about the system of village self-governance during the Chola dynasty. They describe the functioning of the 'Sabha' (village assembly), including the qualifications of members and the process of their election through a lot system."
  },
  {
    "id": 807,
    "question": "The Mahajanapadhas which were NOT in India at present (TSTET 28 May 2024)",
    "options": [
      "Magadha, Anga",
      "Vatsa, Kosala",
      "Kamboja, Gandhara",
      "Magadha. Asmaka"
    ],
    "correctAnswer": 2,
    "explanation": "The ancient Mahajanapadas of Kamboja and Gandhara were located in the northwestern part of the Indian subcontinent. Their territories correspond to modern-day Afghanistan and parts of Pakistan, placing them outside the current political boundaries of India."
  },
  {
    "id": 808,
    "question": "Shantamula and Virapurushadatta were the important kings of this dynasty (TSTET 28 May 2024)",
    "options": [
      "Chola Dynasty",
      "Mauryan Dynasty",
      "Satavahana Dynasty",
      "Ikashavaku Dynasty"
    ],
    "correctAnswer": 3,
    "explanation": "Vasisthiputra Chamtamula (Shantamula) was the founder of the Ikshvaku dynasty of Vijayapuri, who ruled in the eastern Deccan region after the Satavahanas. His son, Virapurushadatta, was another important ruler of this dynasty known for their patronage of Buddhism."
  },
  {
    "id": 809,
    "question": "On 6th April, 1930 Mahatma Gandhi reached Dandi and picked up a handful salt and broke the salt law as a symbol of (TSTET 28 May 2024)",
    "options": [
      "the Indian people's refusal to live under the British made laws and therefore under the British rule",
      "the Indian people's willingness to live under the British made laws and therefore under the British rule",
      "the Indian people's willingness to live under the British made laws with some modifications to self-rule",
      "the Indian people's willingness to live under the British made laws with the participation of the members of the INC in making laws"
    ],
    "correctAnswer": 0,
    "explanation": "The act of making salt at Dandi was a powerful symbol of civil disobedience during the freedom struggle. It represented a direct challenge to the authority of the British government and their unjust laws, signifying the Indian people's refusal to accept British rule."
  },
  {
    "id": 810,
    "question": "In 1789. the Government of the United States of America adopted a Republican Constitution. Which means (TSTET 28 May 2024)",
    "options": [
      "The United States would not be ruled by the kings but by the representatives elected by the people",
      "The United States would be ruled by the Kings with limited powers",
      "The United States would not be ruled by the kings but by the representatives nominated by the states",
      "The United States would not be ruled by the kings but by the representatives nominated by Kings"
    ],
    "correctAnswer": 0,
    "explanation": "A republican form of government is one where the head of state is not a monarch but an elected or nominated official, and sovereign power resides with the people. The U.S. Constitution established a system where representatives are elected by citizens to govern the country."
  },
  {
    "id": 811,
    "question": "In the 18th Century, the Second Estate of the French Society was 'Nobility', which includes (TSTET 28 May 2024)",
    "options": [
      "Clergy and Aristocratic Class",
      "Aristocratic and Bureaucratic Class",
      "Merchants and Bureaucratic Class",
      "Clergy and Bureaucratic Class"
    ],
    "correctAnswer": 1,
    "explanation": "In the Ancien Régime of France, the Second Estate consisted of the nobility. This included the hereditary aristocracy (including royalty) and high-ranking members of the bureaucracy and military who held noble titles. The clergy formed the First Estate, and everyone else the Third Estate."
  },
  {
    "id": 812,
    "question": "During Kakatiya period. Nayankara System was prevalent during the reign of (TSTET 28 May 2024)",
    "options": [
      "Ganapati Deva and Rudra Deva",
      "Mahadeva and Ganapati Deva",
      "Prolaraja I and Mahadeva",
      "Rudramadevi and Prataparudra II"
    ],
    "correctAnswer": 3,
    "explanation": "The Nayankara system, a feudal administrative practice where military chiefs (Nayakas) were granted land in return for military service, was fully developed and became a prominent feature of the Kakatiya administration during the later reigns of Rudramadevi and Prataparudra II."
  },
  {
    "id": 813,
    "question": "As per the enactment of this Act, any person who was suspected by the police of being a terrorist could be arrested and kept in prison without any trial (TSTET 28 May 2024)",
    "options": [
      "The Rowlett Act, 1919",
      "The Regulating Act, 1773",
      "The Charter Act, 1793",
      "The Minto-Morely Reforms, 1909"
    ],
    "correctAnswer": 0,
    "explanation": "The Anarchical and Revolutionary Crimes Act of 1919, widely known as the Rowlatt Act, gave the British government in India immense powers to repress political activities. It allowed for the detention of political prisoners without trial for up to two years, leading to widespread protests."
  },
  {
    "id": 814,
    "question": "In march 1946, the British Cabinet sent a three-member mission to new Delhi to examine the demand of (TSTET 28 May 2024)",
    "options": [
      "to suggest a suitable economic framework for the economic development of India",
      "to suggest the demand of Separate Pakistan and to suggest a suitable political framework for a free India",
      "to suggest the demand of separate Bangladesh",
      "to request the Indian National Congress to provide support for solving the issue of separate Pakistan"
    ],
    "correctAnswer": 1,
    "explanation": "The 1946 Cabinet Mission was sent to India to discuss the transfer of power. Its primary objectives were to examine the demand for a separate Pakistan made by the Muslim League and to propose a constitutional framework for a free India, with the hope of keeping it united."
  },
  {
    "id": 815,
    "question": "This was considered as the currency of the Hyderabad State (TSTET 28 May 2024)",
    "options": [
      "Besant",
      "Sri Ahita Gajakesari",
      "Osmania Sikka",
      "Dinars and Rupaka"
    ],
    "correctAnswer": 2,
    "explanation": "The Osmania Sikka was the official currency of the Hyderabad State, introduced during the reign of the last Nizam, Mir Osman Ali Khan. These coins and notes were part of the state's modern administrative and financial system."
  },
  {
    "id": 816,
    "question": "Britain was the first country to experience modern Industrialisation because of having A) Political Stability and Unified market B) growing towns in area and population C) good network of rivers and an indented coastline with sheltered bays for the movement of goods D) a very good financial system to establish and maintain big industrial enterprises (TSTET 28 May 2024)",
    "options": [
      "A & C only",
      "B & C only",
      "C & D only",
      "A, B, C & D"
    ],
    "correctAnswer": 3,
    "explanation": "All four factors were crucial for Britain's industrialization. Political stability, a unified national market, geographical advantages for transport, a growing urban population providing labor, and a sophisticated financial system for capital investment all combined to create the perfect conditions for the Industrial Revolution."
  },
  {
    "id": 817,
    "question": "Identify the correct statement (TSTET 28 May 2024)",
    "options": [
      "The Constitution was adopted by the Constituent Assembly (CA) on 26th November. 1949 and it came into force on 26th January, 1950.",
      "The Constitution was adopted by the Constituent Assembly (CA) on 26th November, 1949 and it came into force on 26th November, 1950.",
      "The Constitution was adopted by the Constituent Assembly (CA) on 26th January. 1949 and it came into force on 26th January, 1950.",
      "The Constitution was adopted by the Constituent Assembly (CA) on 26th January, 1949 and it came into force on 26th November, 1950."
    ],
    "correctAnswer": 0,
    "explanation": "The Constitution of India was officially adopted by the Constituent Assembly on November 26, 1949 (now celebrated as Constitution Day). It fully came into force on January 26, 1950, to commemorate the Purna Swaraj declaration of 1930, and this day is celebrated as Republic Day."
  },
  {
    "id": 818,
    "question": "The court orders that the arrested person should be presented before it. This writ is (TSTET 28 May 2024)",
    "options": [
      "Habeas corpus",
      "Mandamus",
      "Prohibition",
      "Quo Warranto"
    ],
    "correctAnswer": 0,
    "explanation": "Habeas corpus, a Latin term meaning \"to have the body,\" is a writ that requires a person under arrest to be brought before a court. It is a fundamental right that protects individuals from unlawful detention by allowing a court to determine the legality of the detention."
  },
  {
    "id": 819,
    "question": "Identify the correct statement about the Election Commissioners' tenure (TSTET 28 May 2024)",
    "options": [
      "Election Commissioners are appointed for a six-year term or continue till the age of 65, whichever is earlier.",
      "Election Commissioners are appointed for a five-year term or continue till the age of 65, whichever is earlier.",
      "Election Commissioners are appointed for a six-year term or continue till the age of 62, whichever is earlier.",
      "Election Commissioners are appointed for a five-year term or continue till the age of 62, whichever is earlier."
    ],
    "correctAnswer": 0,
    "explanation": "The Chief Election Commissioner (CEC) and other Election Commissioners (ECs) of India hold office for a tenure of six years or until they attain the age of 65 years, whichever is earlier. This fixed tenure ensures the independence and autonomy of the Election Commission."
  },
  {
    "id": 820,
    "question": "The restriction on the number of the members of the Council of Ministers shall not exceed (TSTET 28 May 2024)",
    "options": [
      "15 percent of the total strength of the Lok Sabha or Assembly",
      "10 percent of the total strength of the Lok Sabha or Assembly",
      "12 percent of the total strength of the Lok Sabha or Assembly",
      "20 percent of the total strength of the Lok Sabha or Assembly"
    ],
    "correctAnswer": 0,
    "explanation": "The 91st Constitutional Amendment Act, 2003, added Article 75(1A), which stipulates that the total number of ministers, including the Prime Minister in the Central Council of Ministers, shall not exceed 15 percent of the total strength of the Lok Sabha."
  },
  {
    "id": 821,
    "question": "Rajya Sabha is dissolved once in (TSTET 28 May 2024)",
    "options": [
      "6 years",
      "10 years",
      "5 years",
      "It is never dissolved"
    ],
    "correctAnswer": 3,
    "explanation": "The Rajya Sabha, or the Council of States, is a permanent body and is not subject to dissolution. One-third of its members retire every second year, and are replaced by newly elected members. Each member serves a term of six years."
  },
  {
    "id": 822,
    "question": "86th Constitutional amendment Act 2002 is about (TSTET 28 May 2024)",
    "options": [
      "The voting age was decreased from 21 to 18 for both Lok Sabha and Legislative Assemblies elections",
      "Panchayati Raj Institutions were given constitutional status",
      "The women's reservation bill which reserves one-third of all seats for women in Lok Sabha / State legislative assemblies",
      "Elementary Education was made a fundamental right-Free and Compulsory education to children between 6 and 14 years"
    ],
    "correctAnswer": 3,
    "explanation": "The 86th Amendment Act of 2002 inserted Article 21-A into the Constitution of India, making elementary education a Fundamental Right. It mandates the state to provide free and compulsory education to all children in the age group of six to fourteen years."
  },
  {
    "id": 823,
    "question": "The following is NOT in the State List under the constitution of India (TSTET 28 May 2024)",
    "options": [
      "Fisheries",
      "Insurance",
      "Police",
      "Agriculture"
    ],
    "correctAnswer": 1,
    "explanation": "The Seventh Schedule of the Indian Constitution divides subjects into the Union List, State List, and Concurrent List. Insurance (Entry 47) is a subject under the Union List, meaning only the Central Government can legislate on it. Police, Fisheries, and Agriculture fall under the State List."
  },
  {
    "id": 824,
    "question": "The following one is elected indirectly (TSTET 28 May 2024)",
    "options": [
      "Sarpanch of Grama Panchayath",
      "Councillor of the Municipality",
      "Chairperson of the Zilla Parishad",
      "Ward Member of Grama Panchayath"
    ],
    "correctAnswer": 2,
    "explanation": "The Chairperson of a Zilla Parishad is elected indirectly. The directly elected members of the Zilla Parishad elect the Chairperson from amongst themselves. Sarpanches, Ward Members, and Municipal Councillors are generally elected directly by the people."
  },
  {
    "id": 825,
    "question": "United Nations Day is celebrated on (TSTET 28 May 2024)",
    "options": [
      "11th December",
      "24th October",
      "24th November",
      "21st September"
    ],
    "correctAnswer": 1,
    "explanation": "United Nations Day is celebrated annually on October 24th. This day marks the anniversary of the entry into force of the UN Charter in 1945, which officially established the United Nations organization."
  },
  {
    "id": 826,
    "question": "Panchayati Raj system was first introduced in this state (TSTET 28 May 2024)",
    "options": [
      "Tamil Nadu",
      "Kerala",
      "Rajasthan",
      "Uttar Pradesh"
    ],
    "correctAnswer": 2,
    "explanation": "The modern Panchayati Raj system in India was first inaugurated by Prime Minister Jawaharlal Nehru on October 2, 1959, in Nagaur district of Rajasthan. This was based on the recommendations of the Balwant Rai Mehta Committee for democratic decentralization."
  },
  {
    "id": 827,
    "question": "This government has two or more levels (TSTET 28 May 2024)",
    "options": [
      "Federal Government",
      "Unitary Government",
      "Dictatorship Government",
      "Coalition Government"
    ],
    "correctAnswer": 0,
    "explanation": "A federal government is a system where power is constitutionally divided between a central national government and constituent political units (like states or provinces). This division of sovereignty inherently creates two or more levels of government."
  },
  {
    "id": 828,
    "question": "Permanent Secretariate of SAARC is located at (TSTET 28 May 2024)",
    "options": [
      "New Delhi, India",
      "Dhaka, Bangladesh",
      "Kathmandu, Nepal",
      "Colombo, Sri Lanka"
    ],
    "correctAnswer": 2,
    "explanation": "The permanent Secretariat of the South Asian Association for Regional Cooperation (SAARC) was established in Kathmandu, Nepal, on 16 January 1987. It serves as the administrative hub for the organization, coordinating and monitoring its activities."
  },
  {
    "id": 829,
    "question": "By teaching geography, the teacher can develop these skills among learners. A) Map B) Observational C) Field Study D) Time perspective (TSTET 28 May 2024)",
    "options": [
      "A, B & C only",
      "A, C & D only",
      "B, C & D only",
      "A, B, C & D"
    ],
    "correctAnswer": 3,
    "explanation": "Geography teaching develops all these skills. Map skills (A) are core to the subject. Observational (B) and Field Study (C) skills are crucial for understanding real-world environments. Time perspective (D) is vital for studying how physical and human landscapes evolve over time."
  },
  {
    "id": 830,
    "question": "Industries, Radio stations, Airports, Railways are belong to these resources (TSTET 28 May 2024)",
    "options": [
      "Natural",
      "Human made",
      "Printed",
      "Audiovisual"
    ],
    "correctAnswer": 1,
    "explanation": "These are all examples of infrastructure and technology created by humans. They are not found in nature but are built using natural resources and human ingenuity. Therefore, they are classified as human-made resources."
  },
  {
    "id": 831,
    "question": "Among the following strategies, which one is more useful to the teacher to explain the concept of 'Child labour and its consequences' - in the classroom (TSTET 28 May 2024)",
    "options": [
      "Lecture method",
      "Dramatization",
      "Questioning",
      "Story telling"
    ],
    "correctAnswer": 1,
    "explanation": "Dramatization is a highly effective strategy for sensitive topics like child labor. It allows students to engage emotionally, develop empathy by taking on roles, and understand the consequences from a human perspective, which is more impactful than passive methods like a lecture."
  },
  {
    "id": 832,
    "question": "This is the most suitable teaching aid to teach 'Rainfall' to the learners. (TSTET 28 May 2024)",
    "options": [
      "Rain Gauge",
      "Maps",
      "Globe",
      "Barometer"
    ],
    "correctAnswer": 0,
    "explanation": "A rain gauge is the specific instrument used to measure the amount of rainfall. Using the actual instrument or a model is the most direct and suitable teaching aid to explain how rainfall is measured, making the concept concrete and understandable for learners."
  },
  {
    "id": 833,
    "question": "The purpose of the 'Diagnostic test' in social studies is (TSTET 28 May 2024)",
    "options": [
      "to assess the previous knowledge of the students",
      "to know the intelligence of the student",
      "to know the learning difficulties or gaps of the students",
      "to give grades to the students"
    ],
    "correctAnswer": 2,
    "explanation": "A diagnostic test is specifically designed to identify a student's strengths and weaknesses in a particular area. Its main purpose is to pinpoint specific learning difficulties or gaps in understanding so that appropriate remedial instruction can be provided."
  },
  {
    "id": 834,
    "question": "The important source for writing a historical story for a particular period is (TSTET 28 May 2024)",
    "options": [
      "Archaeological Sources",
      "Literary Sources",
      "Oral Sources",
      "Inscriptions"
    ],
    "correctAnswer": 1,
    "explanation": "While all options are historical sources, literary sources (like chronicles, biographies, travelogues, and contemporary texts) provide the narrative, context, character details, and events necessary for writing a historical story. They offer insights into the society and perspectives of a period."
  },
  {
    "id": 835,
    "question": "These are the appropriate methods for teaching \"Democratic and Nationalist Movements\" (TSTET 28 May 2024)",
    "options": [
      "Activity and Project methods",
      "Discussion and Story telling methods",
      "Problem solving and Laboratory methods",
      "Source and Project methods"
    ],
    "correctAnswer": 3,
    "explanation": "The source method involves analyzing primary and secondary sources (documents, letters, photos), which is essential for understanding historical movements. The project method allows students to conduct in-depth research on these movements, promoting critical thinking and a deeper understanding of the complexities involved."
  },
  {
    "id": 836,
    "question": "To motivate students in the classroom learning a teacher should (TSTET 28 May 2024)",
    "options": [
      "create a conducive environment",
      "use appropriate TLM",
      "use various methods",
      "ask questions"
    ],
    "correctAnswer": 0,
    "explanation": "A conducive learning environment—one that is positive, supportive, safe, and engaging—is the foundational element for motivating students. While the other options are components of this environment, the overall atmosphere is the most critical factor in fostering intrinsic motivation to learn."
  },
  {
    "id": 837,
    "question": "Social studies teacher should have this knowledge for integrating social values among learners (TSTET 28 May 2024)",
    "options": [
      "Philosophical knowledge",
      "Psychological knowledge",
      "Historical knowledge",
      "Geographical knowledge"
    ],
    "correctAnswer": 0,
    "explanation": "Integrating social values like justice, equality, and liberty requires a teacher to have a foundational understanding of the philosophical principles that underpin these concepts. Philosophical knowledge helps the teacher frame discussions and guide students in developing a coherent moral and ethical framework."
  },
  {
    "id": 838,
    "question": "The founder of 'Problem Solving Method' is (TSTET 28 May 2024)",
    "options": [
      "Kilpatrick",
      "John Dewey",
      "Bruner",
      "Thorndike"
    ],
    "correctAnswer": 1,
    "explanation": "The problem-solving method in education is most closely associated with the American philosopher and educator John Dewey. He championed the idea of 'learning by doing' and advocated for educational experiences where students actively engage in solving real-world problems through inquiry."
  },
  {
    "id": 839,
    "question": "Which of the following is NOT a quality of a good social studies text book (TSTET 28 May 2024)",
    "options": [
      "It is written from examination point of view",
      "It should be helpful in developing creative thinking among students",
      "It should be child centric",
      "It has appropriate pictures, illustrations and maps"
    ],
    "correctAnswer": 0,
    "explanation": "A good textbook should aim to foster genuine understanding, critical thinking, and a love for the subject. A book written solely from an examination point of view often encourages rote memorization and fails to promote deeper learning, which is contrary to the goals of modern education."
  },
  {
    "id": 840,
    "question": "In social studies curriculum these are the two dimensions of scope are (TSTET 28 May 2024)",
    "options": [
      "Length, Breadth",
      "Horizontal, Vertical",
      "Easy, Difficult",
      "Simple, Complex"
    ],
    "correctAnswer": 1,
    "explanation": "In curriculum design, scope has two main dimensions. The vertical scope refers to the depth and progression of a concept across grade levels (e.g., from simple to complex). The horizontal scope refers to the breadth of topics covered within a single grade level, often integrating different disciplines."
  },
  {
    "id": 841,
    "question": "'Ravi' is travelling from New Delhi to New York, then 'Ravi' (TSTET 28 May 2024)",
    "options": [
      "Loses 4 minutes of time as he crosses every longitude",
      "Gains 4 minutes of time as he crosses every longitude",
      "Neither gains nor loses the time as he crosses every longitude",
      "Gains 15 minutes of time as he crosses every longitude"
    ],
    "correctAnswer": 0,
    "explanation": "When traveling westward (from New Delhi to New York), one moves against the Earth's rotation. The Earth rotates 360 degrees in 24 hours, which is equivalent to 1 degree of longitude every 4 minutes. Therefore, for each longitude crossed moving west, time is effectively lost relative to the starting meridian."
  },
  {
    "id": 842,
    "question": "The lava which pours on the surface of the earth and forms these rocks (TSTET 28 May 2024)",
    "options": [
      "Intrusive rocks",
      "Extrusive rocks",
      "Sedimentary rocks",
      "Metamorphic rocks"
    ],
    "correctAnswer": 1,
    "explanation": "Extrusive igneous rocks are formed from magma (lava) that erupts onto the Earth's surface and cools quickly. This rapid cooling process results in fine-grained rocks like basalt. Intrusive rocks, by contrast, cool slowly beneath the surface."
  },
  {
    "id": 843,
    "question": "This ocean or sea is sometimes considered as an extension of the Pacific Ocean the Atlantic Ocean and the Indian Ocean (TSTET 28 May 2024)",
    "options": [
      "Arctic Ocean",
      "Antarctic Ocean",
      "Mediterranean Sea",
      "Arabian Sea"
    ],
    "correctAnswer": 1,
    "explanation": "The Antarctic Ocean, also known as the Southern Ocean, surrounds Antarctica. It is the point where the cold waters flowing north from Antarctica meet the warmer waters of the three major oceans—Pacific, Atlantic, and Indian—and is thus often considered an extension of them."
  },
  {
    "id": 844,
    "question": "From among the following, this layer of the atmosphere contains about 75% of the total gaseous mass of atmosphere and practically all the moisture and dust particles (TSTET 28 May 2024)",
    "options": [
      "Troposphere",
      "Stratosphere",
      "Mesosphere",
      "Thermosphere"
    ],
    "correctAnswer": 0,
    "explanation": "The troposphere is the lowest layer of the Earth's atmosphere. It contains about 75% of the atmosphere's mass and nearly all of its water vapor and aerosols (dust particles). This is the layer where most weather phenomena occur."
  },
  {
    "id": 845,
    "question": "From among the following, these are NOT formed by the work of water (TSTET 28 May 2024)",
    "options": [
      "V Shaped Valleys",
      "Ox-bow lakes",
      "Gorges",
      "U Shaped Valleys"
    ],
    "correctAnswer": 3,
    "explanation": "U-shaped valleys are characteristic landforms created by glacial erosion. As massive glaciers move, they carve out the landscape, widening and deepening existing valleys into a distinct 'U' shape. V-shaped valleys, gorges, and ox-bow lakes are all formed by the action of rivers (water)."
  },
  {
    "id": 846,
    "question": "Between the latitudes $10^{0}$ and $30^{0}$ N and S of the equator, the rainfall is heavier on the eastern coasts and decreases towards the west due to (TSTET 28 May 2024)",
    "options": [
      "The Westerlies",
      "Trade winds",
      "Monsoon winds",
      "The Polar High Pressure Winds"
    ],
    "correctAnswer": 1,
    "explanation": "In these latitudes, the prevailing Trade Winds blow from east to west. They pick up moisture over the ocean and release it as precipitation on the eastern coasts of continents. As these winds travel westward over land, they lose moisture, leading to less rainfall in the western parts."
  },
  {
    "id": 847,
    "question": "In this type of farming, agriculture is practised on small patches of land with the help of primitive tools like hoe, dao, and digging sticks through family/ community labour (TSTET 28 May 2024)",
    "options": [
      "Simple Subsistence farming",
      "Commercial farming",
      "Intensive Subsistence farming",
      "Mixed farming"
    ],
    "correctAnswer": 0,
    "explanation": "Simple subsistence farming, often called shifting cultivation, involves clearing small plots of land and using basic tools for cultivation. The output is primarily consumed by the farmer's family or community, with little to no surplus for sale."
  },
  {
    "id": 848,
    "question": "A Very bulky, dark reddish coloured rock used as a raw-material in Aluminium smelters is (TSTET 28 May 2024)",
    "options": [
      "Iron ore",
      "Bauxite",
      "Coal",
      "Lime Stone"
    ],
    "correctAnswer": 1,
    "explanation": "Bauxite is the primary ore from which aluminum is extracted. It is a sedimentary rock with a high aluminum oxide content and is typically reddish-brown in color. It is the essential raw material for aluminum smelters."
  },
  {
    "id": 849,
    "question": "The famous Kashmir Valley is running over a distance of about 135 km in (TSTET 28 May 2024)",
    "options": [
      "North East to South East",
      "North-West to North-East",
      "South-West to North-West",
      "South-East to North-West"
    ],
    "correctAnswer": 3,
    "explanation": "The Kashmir Valley is an oval-shaped basin situated between the Pir Panjal Range and the Great Himalayan Range. Its geographical orientation runs longitudinally from the southeast to the northwest."
  },
  {
    "id": 850,
    "question": "These mountains act as barriers protecting the Great Plains of India from the cold winds of Central Asia during severe winter (TSTET 28 May 2024)",
    "options": [
      "The Aravali Mountains",
      "The Purvanchal Hills",
      "The Himalayan Mountains",
      "The Western Ghats"
    ],
    "correctAnswer": 2,
    "explanation": "The vast Himalayan range serves as a climatic divide. It blocks the path of frigid, dry winds blowing from Central Asia during winter, thereby protecting the Indian subcontinent from severe cold and maintaining a comparatively warmer climate in the Great Plains."
  },
  {
    "id": 851,
    "question": "From among the following, this DOES NOT lead to population change (TSTET 28 May 2024)",
    "options": [
      "Birth Rate",
      "Death Rate",
      "Internal migration",
      "External or International migration"
    ],
    "correctAnswer": 2,
    "explanation": "The total population of a country changes due to three factors: birth rate, death rate, and international migration (immigration and emigration). Internal migration is the movement of people within a country's borders; it changes the population distribution but does not alter the country's total population count."
  },
  {
    "id": 852,
    "question": "From among the following, the rivers originated in the western Ghats are (TSTET 28 May 2024)",
    "options": [
      "Narmada, Krishna and Godavari",
      "Krishna. Godavari and Thungabhadra",
      "Tapti, Narmada and Godavari",
      "Tapti. Narmada and Thungabhadra"
    ],
    "correctAnswer": 1,
    "explanation": "Major peninsular rivers like the Godavari, Krishna, and Kaveri, as well as the Thungabhadra (a major tributary of the Krishna), have their origins in the Western Ghats. The Narmada and Tapti rivers originate in Central India."
  },
  {
    "id": 853,
    "question": "These soils are generally rich in potash but poor in phosphorous (TSTET 28 May 2024)",
    "options": [
      "Red Soils",
      "Black Soils",
      "Alluvial Soils",
      "Laterite Soils"
    ],
    "correctAnswer": 2,
    "explanation": "Alluvial soils, found extensively in the river plains of India, are very fertile. They are characterized by an adequate proportion of potash and lime but are often deficient in phosphorus and nitrogen."
  },
  {
    "id": 854,
    "question": "The angle of incidence (TSTET 28 May 2024)",
    "options": [
      "increases in the north during the months of November and December and decreases in the months of May and June",
      "Decreases in the north during the months of November and December and increases in the months of May and June",
      "Neither increase nor decrease with the change of months, it remains constant",
      "increases in the north during the months of November and December and also increases in the months of May and June"
    ],
    "correctAnswer": 1,
    "explanation": "The angle of incidence is the angle at which sunlight strikes the Earth. In the Northern Hemisphere, this angle decreases during winter (November-December) as the sun is lower in the sky, and increases during summer (May-June) when the sun is more directly overhead."
  },
  {
    "id": 855,
    "question": "The river Godavari finally meets the Bay of Bengal at (TSTET 28 May 2024)",
    "options": [
      "Antarvedhi in East Godavari District",
      "Hamsaladeevi in Krishna District",
      "Poompuhar in Mayiladutturai District",
      "Kandukurthi in Nizamabad District"
    ],
    "correctAnswer": 0,
    "explanation": "The Godavari River forms a large delta before emptying into the Bay of Bengal. One of its main distributaries, the Vasishta Godavari, meets the sea at Antarvedi in the East Godavari district of Andhra Pradesh."
  },
  {
    "id": 856,
    "question": "At present, the Indian law governing migration and employment of Indians abroad (TSTET 28 May 2024)",
    "options": [
      "The Emigration Act, 1983",
      "The Emigration Act, 1859",
      "The Enabling Act, 1933",
      "The Emigration Act, 1971"
    ],
    "correctAnswer": 0,
    "explanation": "The Emigration Act, 1983 is the current Indian legislation that governs the emigration of Indian citizens for overseas employment. Its purpose is to regulate the process and protect the welfare of Indian workers abroad."
  },
  {
    "id": 857,
    "question": "In India, the first jute mill was established near to this city (TSTET 28 May 2024)",
    "options": [
      "Kolkata",
      "Mumbai",
      "Lucknow",
      "Surat"
    ],
    "correctAnswer": 0,
    "explanation": "The first jute mill in India was set up in 1855 at Rishra, located on the banks of the Hooghly River, which is very close to Kolkata (formerly Calcutta). The region was ideal due to its proximity to raw material sources and the port."
  },
  {
    "id": 858,
    "question": "This tax is levied at every stage of the production (TSTET 28 May 2024)",
    "options": [
      "Property Tax",
      "Sales tax",
      "Customs duty",
      "Value added tax"
    ],
    "correctAnswer": 3,
    "explanation": "Value Added Tax (VAT) is a multi-stage tax levied on the value added at each stage of production and distribution of goods and services. The final tax is borne by the consumer. (Note: In India, VAT has largely been subsumed by the Goods and Services Tax, GST, which also follows a similar principle)."
  },
  {
    "id": 859,
    "question": "Organised and unorganised employment is related to (TSTET 28 May 2024)",
    "options": [
      "Type of ownership",
      "Size of investment in industry",
      "Working condition of employees",
      "Type of industrial product"
    ],
    "correctAnswer": 2,
    "explanation": "The primary distinction between the organised and unorganised sectors lies in the working conditions and social security benefits available to employees. The organised sector provides job security, fixed working hours, and benefits like provident fund and paid leave, whereas the unorganised sector typically does not."
  },
  {
    "id": 860,
    "question": "Formula to find Body Mass Index is: (TSTET 28 May 2024)",
    "options": [
      "Weight in $Kgs/height\\times height(in~metres)$",
      "Weight x Weight (in Kgs)/ height x height (in metres)",
      "Weight in Kgs / height (in metres)",
      "height (in metres) / Weight in Kgs"
    ],
    "correctAnswer": 0,
    "explanation": "Body Mass Index (BMI) is calculated by dividing a person's weight in kilograms by the square of their height in meters. The formula is $BMI = \\text{weight (kg)} / [\\text{height (m)}]^2$."
  },
  {
    "id": 861,
    "question": "Which of the following are affected by the Globalisation? A) Nationality B) Culture C) Language D) Elections (TSTET 28 May 2024)",
    "options": [
      "A & D only",
      "B. C & D only",
      "A. B & C only",
      "A, B, C & D"
    ],
    "correctAnswer": 2,
    "explanation": "Globalization fosters interconnectedness, which profoundly affects culture (through media and exchange), language (spread of global languages), and notions of nationality (due to migration and global citizenship). The process of conducting domestic elections is a sovereign political function and is not directly shaped by globalization."
  },
  {
    "id": 862,
    "question": "One among the following is NOT a measure to provide food security in India (TSTET 28 May 2024)",
    "options": [
      "MNREGA",
      "PDS",
      "ICDS",
      "MDM"
    ],
    "correctAnswer": 0,
    "explanation": "The Public Distribution System (PDS), Integrated Child Development Services (ICDS), and Mid-Day Meal (MDM) scheme are direct interventions that provide food or subsidized rations. MNREGA (Mahatma Gandhi National Rural Employment Guarantee Act) is an employment scheme that enhances food security indirectly by increasing purchasing power, but it is not a direct food provision program."
  },
  {
    "id": 863,
    "question": "The environmental ability to observe and render harmless waste and pollution is called as (TSTET 28 May 2024)",
    "options": [
      "Sink function",
      "Environmental balance",
      "Biodiversity",
      "Sustainable development"
    ],
    "correctAnswer": 0,
    "explanation": "In environmental science, the 'sink function' refers to the capacity of the natural environment to absorb, assimilate, and render harmless the waste products and pollution generated by human activities. When this capacity is exceeded, environmental degradation occurs."
  },
  {
    "id": 864,
    "question": "As per 2017-18 in India, the major share of employment is in the following sector (TSTET 28 May 2024)",
    "options": [
      "Foreign sector",
      "Tertiary sector",
      "Industrial sector",
      "Agricultural sector"
    ],
    "correctAnswer": 3,
    "explanation": "Despite its declining contribution to the GDP, the agricultural sector has consistently been the largest employer in India. In the period of 2017-18, it continued to provide employment to the largest segment of the population."
  },
  {
    "id": 865,
    "question": "One among the following was NOT included in Kautilya's Arthasatra (TSTET 28 May 2024)",
    "options": [
      "How to conquer and rule kingdoms?",
      "How to protect themselves from conspiracies?",
      "How to tax different kinds of professions and gives information about various resources available in different parts of Indian subcontinent?",
      "How to give information regarding the inscriptions of Chandra Gupta Maurya?"
    ],
    "correctAnswer": 3,
    "explanation": "The Arthashastra is an ancient treatise on statecraft, economics, and military strategy attributed to Kautilya (Chanakya). It covers governance, taxation, and administration in detail. It does not, however, contain information about the inscriptions of Chandragupta Maurya, which are historical artifacts created during his reign, not a part of this prescriptive text on governance."
  },
  {
    "id": 866,
    "question": "Shankaracharya was an advocate of (TSTET 28 May 2024)",
    "options": [
      "The best means of attaining salvation was through intense devotion to Vishnu",
      "The doctrine of the oneness of the individual soul and the supreme God which is the ultimate reality",
      "The equality of all human beings and against Brahmanical ideas about caste",
      "Understanding the pain of others"
    ],
    "correctAnswer": 1,
    "explanation": "Adi Shankaracharya was the foremost proponent of the Advaita Vedanta school of philosophy. Its central tenet is non-dualism (Advaita), which holds that the individual soul (Atman) is identical to the ultimate, supreme reality (Brahman)."
  },
  {
    "id": 867,
    "question": "During the times of Mahajanapadas, Agriculture was managed by landowners called (TSTET 28 May 2024)",
    "options": [
      "Patlas",
      "Grihapathis",
      "Bhrutakas",
      "Dasas"
    ],
    "correctAnswer": 1,
    "explanation": "In the Mahajanapada period, wealthy landholders and heads of agricultural households who managed large farms were known as 'Grihapatis' (or Gahapatis). They were a significant class in the rural economy, often employing laborers (dasas and kammakaras)."
  },
  {
    "id": 868,
    "question": "Megalith literally means (TSTET 28 May 2024)",
    "options": [
      "A big structure made of Iron",
      "A big stone",
      "A burial site made of iron",
      "A tool made up of a big stone and mineral"
    ],
    "correctAnswer": 1,
    "explanation": "The word 'Megalith' is derived from two Greek words: 'megas' meaning great or big, and 'lithos' meaning stone. Megaliths are prehistoric structures or monuments constructed with large stones, commonly used as burial sites or commemorative markers."
  },
  {
    "id": 869,
    "question": "In Andhra Pradesh, a highlight of the non- cooperation movement was (TSTET 28 May 2024)",
    "options": [
      "Chirala Perala Movement",
      "Forest Satyagraha in Palnati Taluqua in Guntur District",
      "Movement by the Peasants of Pratapgarh in the United Province",
      "Quit India Satyagraha, Hyderabad"
    ],
    "correctAnswer": 1,
    "explanation": "As part of the nationwide Non-Cooperation Movement, the Forest Satyagraha in the Palnadu area of Guntur district was a major event in Andhra Pradesh. Local peasants defied the restrictive colonial forest laws by grazing their cattle in reserved forests without paying fees, directly challenging British authority."
  },
  {
    "id": 870,
    "question": "The Declaration of American Independence declared that all men are created equal and are endowed by the creator with certain rights which cannot be taken away. These rights include (TSTET 28 May 2024)",
    "options": [
      "The Right to Life, Right to Equality and Right to Freedom of Speech",
      "The Right to Life, Right to Liberty and Right to Expression",
      "Right to Education, Right to Survival and Right to Expression",
      "Right to life. Right to Liberty and Pursuit of happiness"
    ],
    "correctAnswer": 3,
    "explanation": "The United States Declaration of Independence famously articulates the concept of unalienable rights, stating that among these are 'Life, Liberty and the pursuit of Happiness.' This phrase is one of the most well-known in the document."
  },
  {
    "id": 871,
    "question": "The Constitution of France drafted in 1791 by the National Assembly began with (TSTET 28 May 2024)",
    "options": [
      "The Declaration of the Rights of man and citizen",
      "The Declaration of Rights of Woman",
      "Provisions pertaining to citizenship",
      "The Declaration of the Rights and Duties to be followed by the citizens"
    ],
    "correctAnswer": 0,
    "explanation": "The French Constitution of 1791, which established a constitutional monarchy, incorporated as its preamble the 'Declaration of the Rights of Man and of the Citizen.' This foundational document, first adopted in 1789, outlined the fundamental rights and principles of the new French society."
  },
  {
    "id": 872,
    "question": "Cave 15 of Ellora, showing Vishnu as Narasimha (the man lion) is a work of this period (TSTET 28 May 2024)",
    "options": [
      "Guptas",
      "Chalukyas",
      "Rashtrakutas",
      "Chahamanas"
    ],
    "correctAnswer": 2,
    "explanation": "Cave 15, the Dashavatara cave at Ellora, is a significant monument primarily attributed to the Rashtrakuta dynasty, particularly the reign of Dantidurga in the 8th century. The magnificent relief panel depicting Vishnu in his Narasimha (man-lion) avatar is a masterpiece of Rashtrakuta rock-cut art."
  },
  {
    "id": 873,
    "question": "This turned out to be the first all India struggle against the British Government although it was largely restricted to cities (TSTET 28 May 2024)",
    "options": [
      "Non Cooperation Movement",
      "Rowlatt Satyagraha",
      "Civil Disobedience Movement",
      "Quit India Movement"
    ],
    "correctAnswer": 1,
    "explanation": "The Rowlatt Satyagraha of 1919 was Mahatma Gandhi's first attempt at an all-India mass struggle. It was a response to the repressive Rowlatt Act and involved hartals (strikes) and protests across the country, which, while widespread, were most intense in urban centers."
  },
  {
    "id": 874,
    "question": "A three-member mission sent by the British Cabinet in 1946 consist of the following members (TSTET 28 May 2024)",
    "options": [
      "Straford Cripss. Pethick Lawrence and Alexander",
      "Lord Mountbatten, Pethick Lawrence, Straford Cripss",
      "Clement Atlee, Lord Mountbatten and Straford Cripss",
      "Clement Atlee. Alexander and Stafford Cripps"
    ],
    "correctAnswer": 0,
    "explanation": "The 1946 Cabinet Mission to India was composed of three British cabinet members: Lord Pethick-Lawrence, the Secretary of State for India; Sir Stafford Cripps, President of the Board of Trade; and A. V. Alexander, the First Lord of the Admiralty. Their purpose was to negotiate the transfer of power to India."
  },
  {
    "id": 875,
    "question": "From among the following, the Gold coin issued by the Kakatiyas was (TSTET 28 May 2024)",
    "options": [
      "Besant",
      "Sri Ahita Gajakesari",
      "Osmania Sikka",
      "Dinars and Rupaka"
    ],
    "correctAnswer": 1,
    "explanation": "The Kakatiya rulers issued coins with specific titles and symbols. The title 'Gajakesari' (lion to elephants, signifying a conqueror of enemy kings) was used by them, and gold coins bearing the legend 'Sri Ahita Gajakesari' have been attributed to their reign."
  },
  {
    "id": 876,
    "question": "From among the following, this family had brought a revolution in the metallurgical industry (TSTET 28 May 2024)",
    "options": [
      "Tata Family",
      "Birla Family",
      "Crupp's Family",
      "Abraham Darby Family"
    ],
    "correctAnswer": 3,
    "explanation": "The Darby family of Coalbrookdale, England, was instrumental in the Industrial Revolution. In 1709, Abraham Darby I successfully smelted iron ore using coke instead of charcoal, a breakthrough that enabled mass production of iron and fundamentally changed the metallurgical industry."
  },
  {
    "id": 877,
    "question": "Identify the correct statement (TSTET 28 May 2024)",
    "options": [
      "The Draft Constitution contains 395 Articles and 9 Schedules.",
      "The Draft Constitution contains 398 Articles and 8 Schedules.",
      "The Draft Constitution contains 392 Articles and 8 Schedules.",
      "The Draft Constitution contains 395 Articles and 8 Schedules."
    ],
    "correctAnswer": 3,
    "explanation": "When the Drafting Committee presented the Draft Constitution of India in February 1948, it consisted of 395 articles and 8 schedules. This framework formed the basis for the final constitution adopted on November 26, 1949."
  },
  {
    "id": 878,
    "question": "Dr. Ambedkar considered this right as 'heart and soul of the constitution'. (TSTET 28 May 2024)",
    "options": [
      "Right to freedom",
      "Right against exploitation",
      "Right to freedom of religion",
      "Right to constitutional remedies"
    ],
    "correctAnswer": 3,
    "explanation": "Dr. B.R. Ambedkar famously referred to Article 32, the Right to Constitutional Remedies, as the 'heart and soul' of the Indian Constitution. He emphasized that this right, which allows citizens to approach the Supreme Court for the enforcement of fundamental rights, is what makes all other rights meaningful and effective."
  },
  {
    "id": 879,
    "question": "The Chief Election Commissioner and Election Commissioners can be removed before the expiry of the term by (TSTET 28 May 2024)",
    "options": [
      "the President, if both Houses of Parliament make a recommendation with a simple majority.",
      "the Vice President, if both Houses of Parliament make a recommendation with a special majority.",
      "the speaker of the Lok Sabha, if both Houses of Parliament make a recommendation with a special majority.",
      "the President, if both Houses of Parliament make a recommendation with a special majority."
    ],
    "correctAnswer": 3,
    "explanation": "To ensure the independence of the Election Commission, the Chief Election Commissioner has security of tenure. He can only be removed from office through a process similar to that for a Supreme Court judge: an order by the President after an address by Parliament, supported by a special majority of each House."
  },
  {
    "id": 880,
    "question": "Which one of the following DOES NOT constitute the electoral college for electing the President of India (TSTET 28 May 2024)",
    "options": [
      "Elected members of Rajya Sabha",
      "Elected members of the Legislative Assembly of each State",
      "Elected members of the State Legislative Council",
      "Elected members of Lok Sabha"
    ],
    "correctAnswer": 2,
    "explanation": "The electoral college for the President's election comprises the elected members of the Lok Sabha, the Rajya Sabha, and the State Legislative Assemblies. Members of the State Legislative Councils (Vidhan Parishad) are not part of this electoral college."
  },
  {
    "id": 881,
    "question": "In which of the following can a non-member be the presiding officer (TSTET 28 May 2024)",
    "options": [
      "Lok Sabha",
      "State Assembly",
      "Rajya Sabha",
      "State Legislative Council"
    ],
    "correctAnswer": 2,
    "explanation": "The Vice President of India serves as the ex-officio Chairman of the Rajya Sabha. The Vice President, who is elected by members of both houses of Parliament, is not a member of the Rajya Sabha itself but presides over its proceedings."
  },
  {
    "id": 882,
    "question": "73rd constitutional amendment Act 1992 is about (TSTET 28 May 2024)",
    "options": [
      "Panchayati Raj Institutions were given Constitutional status",
      "Elementary Education was made a fundamental right-Free and compulsory education to children between 6 and 14 years",
      "The women's reservation bill which reserves one-third of all seats to women in Lok Sabha State legislative assemblies",
      "The voting age was decreased from 21 to 18 for both Lok Sabha and Legislative Assemblies elections"
    ],
    "correctAnswer": 0,
    "explanation": "The 73rd Constitutional Amendment Act of 1992 was a landmark legislation that granted constitutional status and protection to Panchayati Raj Institutions, establishing a three-tier system of local self-government in rural areas and aiming to strengthen grassroots democracy."
  },
  {
    "id": 883,
    "question": "Laws on the subjects mentioned under the Concurrent List will be made by (TSTET 28 May 2024)",
    "options": [
      "Only Central Government",
      "Only State Government",
      "Central Government and State Government",
      "Central Government, State Government and Local Bodies (Zilla Parishads)"
    ],
    "correctAnswer": 2,
    "explanation": "The Concurrent List contains subjects on which both the Central and State Governments can legislate. In case of any conflict or inconsistency between a central law and a state law on a concurrent subject, the central law will prevail."
  },
  {
    "id": 884,
    "question": "The minimum age required to be elected as a Sarpanch of Grama Panchayath is (TSTET 28 May 2024)",
    "options": [
      "21 years",
      "25 years",
      "18 years",
      "30 years"
    ],
    "correctAnswer": 0,
    "explanation": "As per Article 243F of the Indian Constitution, the minimum age for contesting elections to any level of the Panchayati Raj system, including the post of Sarpanch, is 21 years."
  },
  {
    "id": 885,
    "question": "World Human Right Day is Celebrated on (TSTET 28 May 2024)",
    "options": [
      "10th November",
      "10th October",
      "10th December",
      "10th September"
    ],
    "correctAnswer": 2,
    "explanation": "Human Rights Day is observed annually on December 10th. It marks the day in 1948 when the United Nations General Assembly adopted the Universal Declaration of Human Rights (UDHR), a milestone document proclaiming the inalienable rights of every human being."
  },
  {
    "id": 886,
    "question": "A German citizen staying in India cannot claim the following Right (TSTET 28 May 2024)",
    "options": [
      "Equality before law",
      "Protection of Life and personal liberty",
      "Freedom of religion",
      "Freedom of trade and profession"
    ],
    "correctAnswer": 3,
    "explanation": "In the Indian Constitution, some Fundamental Rights are available to all persons (citizens and foreigners), while others are exclusive to citizens. The right to freedom of trade and profession, guaranteed under Article 19(1)(g), is available only to citizens of India. Rights like equality before law (Art. 14) and protection of life (Art. 21) apply to all."
  },
  {
    "id": 887,
    "question": "The following is NOT a feature of a democratic government (TSTET 28 May 2024)",
    "options": [
      "Fundamental rights",
      "Free and fair elections",
      "Freedom of religion",
      "Centralized decision-making"
    ],
    "correctAnswer": 3,
    "explanation": "Key features of a democracy include protection of fundamental rights, rule of law, and free and fair elections. Centralized decision-making, where power is concentrated in a single authority without checks, balances, or public participation, is a characteristic of authoritarian or non-democratic systems."
  },
  {
    "id": 888,
    "question": "The headquarters of UNESCO is located in (TSTET 28 May 2024)",
    "options": [
      "Paris",
      "Geneva",
      "Rome",
      "New York"
    ],
    "correctAnswer": 0,
    "explanation": "The headquarters of the United Nations Educational, Scientific and Cultural Organization (UNESCO) is located in Paris, France."
  },
  {
    "id": 889,
    "question": "Among the following, identify the main features of social studies A) Social studies as a human study B) Social studies as an idealistic course C) The concept of social studies, excludes commitment to action D) Social studies is a broad and composite instructional area. (TSTET 28 May 2024)",
    "options": [
      "A, B, C & D",
      "A, B & D only",
      "B, C & D only",
      "A & D only"
    ],
    "correctAnswer": 3,
    "explanation": "Social studies is fundamentally the study of human beings and their interactions (A). It is also a broad, composite field integrating disciplines like history, geography, and civics (D). However, a key goal is to develop civic competence and encourage action, not exclude it (making C incorrect). It's also more practical than purely idealistic (making B less of a core feature)."
  },
  {
    "id": 890,
    "question": "Among the following, which is NOT CORRECT pair regarding educationists and their contributions (TSTET 28 May 2024)",
    "options": [
      "John Dewey - quoted that classroom is miniature of universe",
      "Benjamin Bloom - developed the lesson plan steps",
      "Kothari - suggested to establish common school system",
      "Killpatrick - Focussed on learning by doing"
    ],
    "correctAnswer": 1,
    "explanation": "Benjamin Bloom is renowned for his Taxonomy of Educational Objectives (Cognitive, Affective, Psychomotor domains), not for developing lesson plan steps. The systematic steps for lesson planning are most famously associated with Johann Friedrich Herbart (Herbartian steps). The other pairings are correct."
  },
  {
    "id": 891,
    "question": "Match the following List - A with List - B List - A (Disciplines) A) Geography B) History C) Economics D) Civics List - B (Aims of teaching) i) understanding the impact of culture on human evolution ii) appreciating role of UNO in promoting the world peace iii) Understanding the inter-dependency among countries iv) Understanding relation between demand and supply (TSTET 28 May 2024)",
    "options": [
      "A - ii, B - iii, C - iv, D - i",
      "A - iii, B - i, C - iv, D - ii",
      "A - iii, B - iv, C - i, D - ii",
      "A - iv, B - ii, C - iii, D - i"
    ],
    "correctAnswer": 1,
    "explanation": "The correct matches are: Geography teaches the inter-dependency among countries (A-iii). History helps understand the impact of culture on human evolution (B-i). Economics explains the relation between demand and supply (C-iv). Civics helps in appreciating the role of international bodies like the UNO (D-ii)."
  },
  {
    "id": 892,
    "question": "A class-9 student, actively participated in collecting different coins, stamps etc., and prepared albums, scrap books. It is reflecting the specifications of the following domain. (TSTET 28 May 2024)",
    "options": [
      "Psychomotor domain",
      "Cognitive domain",
      "Affective domain",
      "Social domain"
    ],
    "correctAnswer": 2,
    "explanation": "The student's voluntary participation and dedication in collecting and organizing stamps and coins indicate a personal interest, appreciation, and positive attitude towards the activity. These aspects—feelings, values, appreciation, and attitudes—are central to the Affective Domain of learning."
  },
  {
    "id": 893,
    "question": "The main function of the State Council for Educational Research and Training (SCERT) is (TSTET 28 May 2024)",
    "options": [
      "Development of Curriculum, Text Books",
      "Conducting Common Examinations at school Level",
      "Teacher Recruitment and transfers",
      "Providing Mid-Day meal to students"
    ],
    "correctAnswer": 0,
    "explanation": "SCERT is the apex academic body at the state level. Its primary responsibilities include designing and developing the school curriculum, syllabus, and textbooks, as well as conducting teacher training programs and educational research."
  },
  {
    "id": 894,
    "question": "Among the following, the learning resource that belongs to Graphic Aid is (TSTET 28 May 2024)",
    "options": [
      "Diagrams",
      "Models",
      "Flash Cards",
      "Objects"
    ],
    "correctAnswer": 0,
    "explanation": "Graphic aids are two-dimensional visual materials that communicate facts and ideas through drawings, lines, and symbols. Diagrams are a prime example of a graphic aid, representing information visually. Models and objects are three-dimensional, not graphic."
  },
  {
    "id": 895,
    "question": "Among the following, which statement is NOT CORRECT about evaluation. (TSTET 28 May 2024)",
    "options": [
      "Evaluation is a judgemental process",
      "Evaluation is a continuous process",
      "Evaluation is a part of teaching and learning",
      "Evaluation is a terminal process"
    ],
    "correctAnswer": 3,
    "explanation": "Modern pedagogy emphasizes that evaluation should be a continuous and integral part of the teaching-learning process (as in CCE - Continuous and Comprehensive Evaluation). It is not a terminal process that only occurs at the end of instruction, as its purpose includes diagnosing learning gaps and providing feedback for improvement."
  },
  {
    "id": 896,
    "question": "According to National Curriculum Framework - 2005, the main goal of Social Science is (TSTET 28 May 2024)",
    "options": [
      "To prepare the student as an ideal citizen",
      "To develop critical thinking among the students",
      "To provide the knowledge about the society and nation",
      "To create interest on social issues"
    ],
    "correctAnswer": 1,
    "explanation": "A central aim of teaching Social Science, as per NCF-2005, is to foster critical thinking and reflective abilities. This involves equipping students to question, analyze, and understand societal issues from multiple perspectives, rather than simply memorizing information."
  },
  {
    "id": 897,
    "question": "To develop patriotism among the children the teacher should adopt the following method. (TSTET 28 May 2024)",
    "options": [
      "Lecture method",
      "Story telling method",
      "Dramatisation method",
      "Text book method"
    ],
    "correctAnswer": 1,
    "explanation": "Storytelling is a highly effective method for instilling values like patriotism. Narratives about national heroes, historical events, and sacrifices for the nation can evoke strong emotions and inspire a sense of pride and belonging in a way that lectures or textbook reading often cannot."
  },
  {
    "id": 898,
    "question": "In the following which is NOT a merit of the project method (TSTET 28 May 2024)",
    "options": [
      "Training in democratic way of living",
      "Development of self-confidence and self-discipline",
      "It is not possible to cover the syllabus within the limited time",
      "Dignity of labour is developed"
    ],
    "correctAnswer": 2,
    "explanation": "The question asks for what is NOT a merit. While the project method promotes democratic living, self-confidence, and dignity of labor, its significant drawback (demerit) is that it is very time-consuming. This makes it difficult to cover the prescribed syllabus within a fixed timeframe, so this statement describes a demerit, not a merit."
  },
  {
    "id": 899,
    "question": "Among the following, who quoted that 'The field of social studies is a very good beginning to train the students in the art of living together' (TSTET 28 May 2024)",
    "options": [
      "Mudaliar Commission",
      "John U. Michaelis",
      "Kothari Commission",
      "John V. Jarolimek"
    ],
    "correctAnswer": 0,
    "explanation": "This statement was made by the Secondary Education Commission (1952-53), which is popularly known as the Mudaliar Commission. The commission emphasized the role of social studies in fostering social skills and preparing students for harmonious community living."
  },
  {
    "id": 900,
    "question": "The last step in chronological method is (TSTET 28 May 2024)",
    "options": [
      "Identification of cause and effect relationship",
      "Preparation of a time line chart",
      "Explanation about the events of particular period",
      "Evaluation of the events"
    ],
    "correctAnswer": 3,
    "explanation": "The chronological method involves arranging events in order, explaining them, and analyzing cause-and-effect relationships. The culminating and most complex step in this process is the evaluation of the events, which involves making informed judgments about their significance, consequences, and overall impact."
  },
  {
    "id": 901,
    "question": "'X' is living in a city located on 0° longitudes. Whereas, 'Y' is living in a city located on 180° longitude. The time difference between 'X' and 'Y' is (TSTET 29 May 2024)",
    "options": [
      "24 hours",
      "9 hours",
      "18 hours",
      "12 hours"
    ],
    "correctAnswer": 3,
    "explanation": "The Earth rotates 360° in 24 hours, which means it covers 15° of longitude per hour (360/24). The difference in longitude between X (0°) and Y (180°) is 180°. Therefore, the time difference is calculated as 180° ÷ 15°/hour = 12 hours."
  },
  {
    "id": 902,
    "question": "From among the following, these sources provide direct knowledge about the interior of the earth (TSTET 29 May 2024)\nA) Deep Drilling Projects\nB) Volcanic Eruptions\nC) Temperature in the interior of the earth\nD) Atmospheric Pressure and Density of the material",
    "options": [
      "A, B & C only",
      "A, B, C & D",
      "A & B only",
      "B & D only"
    ],
    "correctAnswer": 2,
    "explanation": "Direct sources involve physically observing materials from within the Earth. Deep drilling projects (like the Kola Superdeep Borehole) and volcanic eruptions (which bring magma from the mantle to the surface) are direct sources. Temperature, pressure, and density are indirect sources, as they are inferred through scientific measurements and analysis rather than direct observation of the interior."
  },
  {
    "id": 903,
    "question": "On the earth, the greatest portion of the fresh water (69.56%) is in the form of (TSTET 29 May 2024)",
    "options": [
      "Fresh ground waters",
      "Water concentrated in lakes and reservoirs",
      "Water concentrated in rivers and lakes",
      "Ice and permanent snow cover in the Antarctica, the Arctic and in the mountain ranges"
    ],
    "correctAnswer": 3,
    "explanation": "The vast majority of the Earth's freshwater, nearly 70%, is frozen in glaciers and ice caps. These are primarily located in Antarctica and Greenland, with smaller amounts in mountain ranges around the world."
  },
  {
    "id": 904,
    "question": "The higher we go in troposphere, the lower layer of the atmosphere, the temperature (TSTET 29 May 2024)",
    "options": [
      "Increases",
      "Remains constant",
      "decreases",
      "Decreases then increases"
    ],
    "correctAnswer": 2,
    "explanation": "In the troposphere, the atmospheric layer closest to Earth's surface, temperature consistently decreases with an increase in altitude. This phenomenon is known as the normal lapse rate, where the temperature typically drops by about 6.5° Celsius for every 1000 meters of elevation gained."
  },
  {
    "id": 905,
    "question": "The Byson and Indus Gorges respectively are in (TSTET 29 May 2024)",
    "options": [
      "Andhra Pradesh and Jammu and Kashmir",
      "Andhra Pradesh and Himachal Pradesh",
      "Telangana and Jammu and Kashmir",
      "Odisha and Pakistan"
    ],
    "correctAnswer": 0,
    "explanation": "The Byson Gorge, also known as the Papikondalu gorge, is a scenic canyon carved by the Godavari River in Andhra Pradesh. The Indus Gorge is a massive canyon formed by the Indus River as it cuts through the Himalayas in the Ladakh region of Jammu and Kashmir."
  },
  {
    "id": 906,
    "question": "The low pressure belts on the earth are formed at (TSTET 29 May 2024)",
    "options": [
      "Equatorial and Sub-Polar Region",
      "Equatorial and Sub-Tropical Region",
      "Sub-Polar and Polar Region",
      "Sub-Tropical and Polar Region"
    ],
    "correctAnswer": 0,
    "explanation": "Low-pressure belts occur where air rises. This happens at the Equator (Equatorial Low) due to intense solar heating causing air to expand and rise, and in the Sub-Polar regions (around 60° N and S) where colder polar air meets warmer temperate air, forcing the warmer air to rise."
  },
  {
    "id": 907,
    "question": "In these states of India, Rice is a commercial crop (TSTET 29 May 2024)",
    "options": [
      "Punjab and Haryana",
      "Odisha and West Bengal",
      "Andhra Pradesh and Telangana",
      "West Bengal and Andhra Pradesh"
    ],
    "correctAnswer": 0,
    "explanation": "While rice is a staple subsistence crop in states like Odisha and West Bengal, it is cultivated primarily as a commercial (or cash) crop in Punjab and Haryana. Due to extensive irrigation and the Green Revolution, these states produce large surpluses of rice for sale in national and international markets."
  },
  {
    "id": 908,
    "question": "From among the following, the largest silk producing state in India is (TSTET 29 May 2024)",
    "options": [
      "Assam",
      "Karnataka",
      "Andhra Pradesh",
      "Jammu & Kashmir"
    ],
    "correctAnswer": 1,
    "explanation": "Karnataka is the leading producer of raw silk in India. The state is particularly renowned for its high production of mulberry silk, contributing a major share to the country's total silk output."
  },
  {
    "id": 909,
    "question": "The famous Kashmir Valley lies in between (TSTET 29 May 2024)",
    "options": [
      "Dihang Valley and Pir Panjal Range",
      "Pir Panjal Range and Zaskar Range",
      "The Mussorie Range and Dihang Valley",
      "The Zaskar Range and The Mussorie Range"
    ],
    "correctAnswer": 1,
    "explanation": "The Kashmir Valley is an intermontane valley located between the Pir Panjal Range of the Lesser Himalayas to the south and the Zaskar Range of the Greater Himalayas to the northeast."
  },
  {
    "id": 910,
    "question": "These mountains are the reason for summer rains and monsoon type of climate in regions that are beyond the Western Ghats of India (TSTET 29 May 2024)",
    "options": [
      "The Aravali Mountains",
      "The Purvanchal Hills",
      "The Eastern Ghats",
      "The Himalayan Mountains"
    ],
    "correctAnswer": 3,
    "explanation": "The Himalayan Mountains act as a significant climatic barrier. They block the path of the moisture-laden southwest monsoon winds, forcing them to rise and shed their moisture as rainfall across the northern plains of India. This is fundamental to India's monsoon climate."
  },
  {
    "id": 911,
    "question": "The positive growth rate of population is observed when (TSTET 29 May 2024)\nA) The birth rate is less than the death rate\nB) The birth rate and the death rate are the same\nC) The birth rate is more than the death rate",
    "options": [
      "A & C only",
      "B & C only",
      "A, B & C",
      "C only"
    ],
    "correctAnswer": 3,
    "explanation": "A positive population growth rate, also known as natural increase, occurs when the number of births in a population exceeds the number of deaths over a specific period. If the death rate is higher, the growth is negative, and if they are equal, it results in zero population growth."
  },
  {
    "id": 912,
    "question": "These three states of India are sharing the waters of Tungabhadra river (TSTET 29 May 2024)",
    "options": [
      "Kerala, Karnataka and Tamil Nadu",
      "Maharashtra, Karnataka and Andhra Pradesh",
      "Karnataka, Andhra Pradesh and Telangana",
      "Karnataka, Tamil Nadu and Andhra Pradesh"
    ],
    "correctAnswer": 2,
    "explanation": "The Tungabhadra River flows through Karnataka and then forms a border between Karnataka, Andhra Pradesh, and Telangana. The Tungabhadra Dam is a joint project of these three states, which share its water for irrigation and power generation."
  },
  {
    "id": 913,
    "question": "These soils are known as 'Regur' Soils (TSTET 29 May 2024)",
    "options": [
      "Red Soils",
      "Black Soils",
      "Alluvial Soils",
      "Laterite Soils"
    ],
    "correctAnswer": 1,
    "explanation": "Black soils are widely known as 'Regur soils'. They are famous for their high moisture-retention capacity and are ideal for growing cotton, which is why they are also commonly referred to as 'black cotton soils'."
  },
  {
    "id": 914,
    "question": "As the earth revolves around the sun, earth's axis remains tilted in the same direction throughout the year. It keep points to the (TSTET 29 May 2024)",
    "options": [
      "Rigel Kent Star",
      "Pole Star",
      "Canopus star",
      "Capella Star"
    ],
    "correctAnswer": 1,
    "explanation": "Due to a principle called axial parallelism, the Earth's axis maintains its tilt and orientation as it orbits the Sun. The northern end of the axis consistently points towards Polaris, also known as the North Star or the Pole Star."
  },
  {
    "id": 915,
    "question": "According to National Forest Policy of India (1988), to maintain environmental stability and ecological balance, the total geographical area under tree cover should be a minimum of (TSTET 29 May 2024)",
    "options": [
      "16.4%",
      "33.3%",
      "22.7%",
      "46.4%"
    ],
    "correctAnswer": 1,
    "explanation": "The National Forest Policy of 1988 stipulates that the national goal should be to have a minimum of one-third (or 33.3%) of the total land area of the country under forest or tree cover to ensure environmental stability and ecological balance."
  },
  {
    "id": 916,
    "question": "The following crop is also known as golden fibre (TSTET 29 May 2024)",
    "options": [
      "Jute",
      "Silk",
      "Groundnut",
      "Jowar"
    ],
    "correctAnswer": 0,
    "explanation": "Jute is called the 'Golden Fibre' because of its shiny, yellowish-brown appearance and its immense economic value. It is a natural fiber used to make products like burlap, hessian, and gunny bags."
  },
  {
    "id": 917,
    "question": "From among the following, identify the odd one (TSTET 29 May 2024)",
    "options": [
      "Jute textile",
      "Sugar industry",
      "Fertilizer Industry",
      "Cotton textile"
    ],
    "correctAnswer": 2,
    "explanation": "The jute, sugar, and cotton industries are all agro-based industries, meaning they process agricultural products as their primary raw materials. The fertilizer industry is a chemical or mineral-based industry, using chemical compounds and minerals as raw materials."
  },
  {
    "id": 918,
    "question": "Identify the FALSE statement related to demand draft (TSTET 29 May 2024)",
    "options": [
      "It may sometimes be returned due to insufficient funds by Banks",
      "Bank collects some charges to issue the demand draft",
      "Demand draft is an optional money",
      "It is issued by any commercial bank"
    ],
    "correctAnswer": 0,
    "explanation": "A Demand Draft (DD) is a prepaid negotiable instrument. The funds are collected by the bank from the purchaser at the time of issuing the DD. Therefore, it cannot be dishonored for 'insufficient funds', making it a very secure payment method."
  },
  {
    "id": 919,
    "question": "Consider the following statements and find the correct answer from the given options (TSTET 29 May 2024)\nA) Mild inflation stimulates production as it increases profit margin of entrepreneurs\nB) High inflation hinders production",
    "options": [
      "Only 'A' is true",
      "Only 'B' is true",
      "Both 'A' and 'B' are true",
      "Neither 'A' nor 'B' are true"
    ],
    "correctAnswer": 2,
    "explanation": "Both statements are correct. A mild, creeping inflation can encourage producers to invest and increase production due to higher profit margins. Conversely, high inflation (galloping or hyperinflation) creates economic uncertainty, reduces purchasing power, and disrupts planning, thereby hindering production and economic growth."
  },
  {
    "id": 920,
    "question": "One of the following is NOT the measure of Human Development Index (TSTET 29 May 2024)",
    "options": [
      "Social inequality",
      "Literacy",
      "Infant mortality",
      "Life expectancy"
    ],
    "correctAnswer": 0,
    "explanation": "The Human Development Index (HDI) measures development using three key dimensions: health (Life expectancy at birth), education (mean and expected years of schooling), and standard of living (GNI per capita). Social inequality is not a direct component of the standard HDI, although an Inequality-adjusted HDI (IHDI) exists as a separate measure."
  },
  {
    "id": 921,
    "question": "National institute of Nutrition is located at (TSTET 29 May 2024)",
    "options": [
      "Banglore",
      "Kolkata",
      "Hyderabad",
      "New Delhi"
    ],
    "correctAnswer": 2,
    "explanation": "The National Institute of Nutrition (NIN), a premier research institute under the Indian Council of Medical Research (ICMR), is located in Hyderabad, Telangana."
  },
  {
    "id": 922,
    "question": "The aim of World Trade Organisation is to (TSTET 29 May 2024)",
    "options": [
      "Liberalise international trade",
      "Bring economic equality in the world",
      "Giving support to developing countries economically",
      "Provide better quality of life for under developed countries"
    ],
    "correctAnswer": 0,
    "explanation": "The primary objective of the World Trade Organization (WTO) is to reduce tariffs and other barriers to trade, thereby promoting and liberalizing international trade. It operates as a forum for negotiating trade agreements and resolving disputes among member countries."
  },
  {
    "id": 923,
    "question": "Availability of food grains per person per day is equal to: (TSTET 29 May 2024)",
    "options": [
      "(Availability of food grains for the year + Population) / 365",
      "Availability of food grains for the year + Population",
      "(Population + Availability of food grains for the year) / 365",
      "Population + Availability of food grains for the year"
    ],
    "correctAnswer": 0,
    "explanation": "Note: All the provided options are mathematically incorrect. The correct formula to calculate the availability of food grains per person per day is: (Total availability of food grains for the year ÷ Total population) ÷ 365. The question in the exam paper appears to be flawed as none of the choices reflect the correct calculation."
  },
  {
    "id": 924,
    "question": "Hausa Fulani, Igbo and Yeruba are the tribes of this African country (TSTET 29 May 2024)",
    "options": [
      "Congo",
      "Nigeria",
      "Sudan",
      "South Africa"
    ],
    "correctAnswer": 1,
    "explanation": "The Hausa-Fulani, Yoruba, and Igbo are the three largest and most prominent ethnic groups in Nigeria, playing a significant role in the country's demographics and politics."
  },
  {
    "id": 925,
    "question": "One among the following sector DOES NOT produce any tangible goods (TSTET 29 May 2024)",
    "options": [
      "Service sector",
      "Primary sector",
      "Manufacturing sector",
      "Secondary sector"
    ],
    "correctAnswer": 0,
    "explanation": "The service sector (or tertiary sector) of the economy is characterized by the production of services rather than tangible goods. Examples include banking, insurance, education, healthcare, and transportation. The primary and secondary sectors produce tangible goods like crops, minerals, and manufactured products."
  },
  {
    "id": 926,
    "question": "'Dhamma' is the (TSTET 29 May 2024)",
    "options": [
      "Sanskrit word for the Prakrit term Dharma",
      "Prakrit word for the Sanskrit term Dharma",
      "Hindi word for the Sanskrit term Dharma",
      "Odissi word for the Sanskrit term Dharma"
    ],
    "correctAnswer": 1,
    "explanation": "The word 'Dhamma' is the Prakrit language equivalent of the Sanskrit word 'Dharma'. Emperor Ashoka used this term in his edicts, which were written in Prakrit, to propagate his policy of ethical and moral conduct."
  },
  {
    "id": 927,
    "question": "In Odisha, the language spoken by the Bondo tribals is called as (TSTET 29 May 2024)",
    "options": [
      "Remo",
      "Chenchu",
      "Sora",
      "Santhali"
    ],
    "correctAnswer": 0,
    "explanation": "The Bondo are a tribal community residing in the hills of the Malkangiri district in Odisha. They speak their own language known as Remo, which belongs to the Munda branch of the Austroasiatic language family."
  },
  {
    "id": 928,
    "question": "Among the following, this Mahajanapadha had a Gana form of Government (TSTET 29 May 2024)",
    "options": [
      "Magadha",
      "Asmaka",
      "Gandhara",
      "Vajji"
    ],
    "correctAnswer": 3,
    "explanation": "While most of the 16 Mahajanapadas were monarchies, Vajji was a notable exception. It was a 'Gana' or 'Sangha', which was an oligarchy or a republic, where power was held by a confederacy of clans rather than a single hereditary king."
  },
  {
    "id": 929,
    "question": "The famous story about a young boy called Nachiketha is from a book called the (TSTET 29 May 2024)",
    "options": [
      "Chandogya Upanishad",
      "Taitriya Upanishad",
      "Aitareya Upanishad",
      "Kathapanishad"
    ],
    "correctAnswer": 3,
    "explanation": "The philosophical dialogue between the boy Nachiketa and Yama, the Hindu god of death, is the central theme of the Katha Upanishad, also known as the Kathopanishad. It is one of the most important and widely studied Upanishads."
  },
  {
    "id": 930,
    "question": "The teachings of Buddha and his followers have been compiled in these collections called (TSTET 29 May 2024)",
    "options": [
      "The Buddha Charita, the Sutta Pitaka and Raja tharangini",
      "The Sutta Pitaka, the Abhidhamma Pitaka and Vinaya Pitaka",
      "Rajatharangini. Abhidhamma Pitaka and the Sutta Pitaka",
      "the Jataka Stories, the Abhidhamma Pitaka and Vinaya Pitaka"
    ],
    "correctAnswer": 1,
    "explanation": "The canonical scriptures of early Buddhism are known as the Tripitaka, or 'Three Baskets'. These consist of the Sutta Pitaka (Buddha's discourses), the Vinaya Pitaka (rules for monastic life), and the Abhidhamma Pitaka (philosophical and psychological analysis)."
  },
  {
    "id": 931,
    "question": "In the American War of Independence, France helped the colonies against England because of this rivalry between Britain and France (TSTET 29 May 2024)",
    "options": [
      "in establishing colonial empire",
      "In establishing democratic form of Government in United States of America",
      "In order to gain political power in United States of America",
      "In establishing colonies in South America only"
    ],
    "correctAnswer": 0,
    "explanation": "France's decision to support the American colonies was primarily driven by its long-standing geopolitical rivalry with Great Britain for global power and colonial dominance. By weakening Britain, France sought to avenge its defeat in the Seven Years' War and regain its international prestige."
  },
  {
    "id": 932,
    "question": "The religious reform movement which led to the rise of a new section of Christians called as protestants (TSTET 29 May 2024)",
    "options": [
      "Renaissance",
      "Reformation",
      "Counter Reformation",
      "Political Reformation"
    ],
    "correctAnswer": 1,
    "explanation": "The Protestant Reformation was a 16th-century religious, political, and cultural movement that splintered Catholic Europe. It led to the establishment of Protestantism, a new branch of Christianity, with figures like Martin Luther and John Calvin challenging the authority of the Pope and the Catholic Church."
  },
  {
    "id": 933,
    "question": "From among the following, this person was appointed by the British East India Company to oversaw the entire administration in Hyderabad State (TSTET 29 May 2024)",
    "options": [
      "Collector",
      "Governor General",
      "Viceroy",
      "Resident"
    ],
    "correctAnswer": 3,
    "explanation": "Under the policy of Subsidiary Alliance, the British East India Company placed a 'Resident' in the courts of Indian princely states. The Resident was a British official who represented the Company and exerted significant influence over the state's administration and foreign policy."
  },
  {
    "id": 934,
    "question": "During the first 20 years, the Indian National Congress was led by the leaders who were known as (TSTET 29 May 2024)",
    "options": [
      "Extremist Nationalists",
      "Gandhian Nationalists",
      "Moderate nationalists",
      "Socialists and Economists"
    ],
    "correctAnswer": 2,
    "explanation": "The initial phase of the Indian National Congress (roughly 1885–1905) was dominated by leaders known as 'Moderates'. They believed in constitutional agitation and gradual reform within the framework of British rule, using methods like petitions and appeals."
  },
  {
    "id": 935,
    "question": "16th August, 1946 was announced as the 'Direct Action Day' by (TSTET 29 May 2024)",
    "options": [
      "Indian National Congress",
      "Muslim League",
      "Cabinet Mission",
      "Congress Working Committee"
    ],
    "correctAnswer": 1,
    "explanation": "The Muslim League, led by Muhammad Ali Jinnah, proclaimed August 16, 1946, as 'Direct Action Day' to forcefully assert its demand for a separate Muslim nation of Pakistan, following the breakdown of talks with the Cabinet Mission."
  },
  {
    "id": 936,
    "question": "The last and the most popular ruler of the Qutub Shahi Dynasty was (TSTET 29 May 2024)",
    "options": [
      "Abul Hasan Tanashah",
      "Abdullah Qutub Shah",
      "Mohd. Qutub Shah",
      "Mohd. Quli Qutub Shah"
    ],
    "correctAnswer": 0,
    "explanation": "Abul Hasan Tanishah was the eighth and final ruler of the Qutb Shahi dynasty. He was a popular ruler known for his secularism and patronage of arts, but his reign ended with the conquest of Golconda by the Mughal emperor Aurangzeb in 1687."
  },
  {
    "id": 937,
    "question": "Identify the INCORRECT option regarding the provisions adapted from constitutions of different countries (TSTET 29 May 2024)",
    "options": [
      "British Constitution - Parliamentary Form of Government",
      "French Constitution - Power of Judicial Review and independence of the judiciary",
      "Irish Constitution - Directive Principles of State Policy",
      "United States Constitution - Charter of Fundamental Rights"
    ],
    "correctAnswer": 1,
    "explanation": "The concepts of 'Power of Judicial Review' and 'independence of the judiciary' in the Indian Constitution were borrowed from the Constitution of the United States, not France. The ideals of liberty, equality, and fraternity were adopted from the French Constitution. The other pairs are correctly matched."
  },
  {
    "id": 938,
    "question": "'Right to property' was deleted from the list of Fundamental Rights by (TSTET 29 May 2024)",
    "options": [
      "the 44th Amendment Act, 1976",
      "the 44th Amendment Act, 1978",
      "the 42nd Amendment Act, 1978",
      "the 42nd Amendment Act, 1976"
    ],
    "correctAnswer": 1,
    "explanation": "The 44th Amendment Act of 1978 removed the Right to Property from the list of Fundamental Rights (formerly Article 31) and reclassified it as a constitutional/legal right under Article 300-A."
  },
  {
    "id": 939,
    "question": "This article of the Indian Constitution provides an independent Election Commission (TSTET 29 May 2024)",
    "options": [
      "Article 334",
      "Article 324",
      "Article 314",
      "Article 344"
    ],
    "correctAnswer": 1,
    "explanation": "Article 324 of the Indian Constitution provides for the establishment of an independent Election Commission responsible for the superintendence, direction, and control of elections to the Parliament, state legislatures, and the offices of the President and Vice-President."
  },
  {
    "id": 940,
    "question": "The maximum gap between two sessions of Parliament is (TSTET 29 May 2024)",
    "options": [
      "One year",
      "Six months",
      "Three months",
      "Nine months"
    ],
    "correctAnswer": 1,
    "explanation": "According to Article 85 of the Constitution, the interval between two consecutive sessions of the Parliament cannot be more than six months. This means Parliament must meet at least twice a year."
  },
  {
    "id": 941,
    "question": "Identify the correct statement about Parliamentary System of Government (TSTET 29 May 2024)",
    "options": [
      "The judiciary is responsible to the parliament",
      "The executive is responsible to the parliament",
      "The parliament is responsible to the executive",
      "The parliament is responsible to the judiciary"
    ],
    "correctAnswer": 1,
    "explanation": "A fundamental principle of a parliamentary system is the collective responsibility of the executive to the legislature. The Council of Ministers (the executive) remains in power only as long as it enjoys the confidence of the Parliament (the legislature), particularly the lower house."
  },
  {
    "id": 942,
    "question": "This amendment Act is the most comprehensive amendment of the Indian Constitution (TSTET 29 May 2024)",
    "options": [
      "86th amendment Act",
      "42nd amendment Act",
      "73rd amendment Act",
      "52nd amendment Act"
    ],
    "correctAnswer": 1,
    "explanation": "The 42nd Amendment Act, 1976, is often referred to as the 'Mini-Constitution' because of the large number and significance of the changes it made to the Constitution, including to the Preamble, Fundamental Duties, and Directive Principles."
  },
  {
    "id": 943,
    "question": "The following is in the concurrent list (TSTET 29 May 2024)",
    "options": [
      "Defense",
      "Railways",
      "National Highways",
      "Education"
    ],
    "correctAnswer": 3,
    "explanation": "The Concurrent List includes subjects on which both the Central and State governments can legislate. Education was transferred from the State List to the Concurrent List by the 42nd Amendment Act of 1976. Defense, Railways, and National Highways are on the Union List."
  },
  {
    "id": 944,
    "question": "This article lays down the framework for the establishment of Panchayats at the village (TSTET 29 May 2024)",
    "options": [
      "224",
      "243",
      "292",
      "221"
    ],
    "correctAnswer": 1,
    "explanation": "Part IX of the Constitution, beginning with Article 243, provides the framework for the Panchayati Raj system. Specifically, Article 243B makes it mandatory for states to establish a three-tier system of Panchayats at the village, intermediate, and district levels."
  },
  {
    "id": 945,
    "question": "The following one is NOT an organ of the United Nations Organisation (TSTET 29 May 2024)",
    "options": [
      "The World Trade Organization",
      "The Trusteeship Council",
      "The Economic and Social Council",
      "The International Court of Justice"
    ],
    "correctAnswer": 0,
    "explanation": "The six principal organs of the UN are the General Assembly, Security Council, Economic and Social Council (ECOSOC), Trusteeship Council, International Court of Justice, and the Secretariat. The World Trade Organization (WTO) is a separate international body and a specialized agency of the UN, not a principal organ."
  },
  {
    "id": 946,
    "question": "The following one is NOT a feature of Directive Principles of State Policy (TSTET 29 May 2024)",
    "options": [
      "They promote social, economic and political justice",
      "They are directed towards the establishment of a welfare state",
      "They lay down the principles which should guide the government in framing laws and policies",
      "They are guaranteed to the citizen given by constitution"
    ],
    "correctAnswer": 3,
    "explanation": "A key distinction between Fundamental Rights and Directive Principles is that the latter are non-justiciable. This means they are not legally enforceable or guaranteed by the courts. They serve as moral and political guidelines for the government but cannot be claimed as a matter of right by citizens."
  },
  {
    "id": 947,
    "question": "In the democracy, political equality is required to ensure the following (TSTET 29 May 2024)",
    "options": [
      "Promotion of economic development and prosperity",
      "Every citizen has an equal right to vote and participate in decision-making",
      "Religious freedom for all citizens",
      "Freedom to choose employment and profession"
    ],
    "correctAnswer": 1,
    "explanation": "Political equality is the core of democracy, embodied by the principle of 'one person, one vote, one value'. It ensures that every adult citizen, regardless of their background, has an equal right to vote and participate in the political decision-making process."
  },
  {
    "id": 948,
    "question": "The following country is NOT a member of commonwealth (TSTET 29 May 2024)",
    "options": [
      "Australia",
      "India",
      "China",
      "New Zealand"
    ],
    "correctAnswer": 2,
    "explanation": "The Commonwealth of Nations is a voluntary association of countries that are mostly former territories of the British Empire. India, Australia, and New Zealand are members. China was never a part of the British Empire and is not a member of the Commonwealth."
  },
  {
    "id": 949,
    "question": "Which of the following statements are true related to features of social studies? (TSTET 29 May 2024)\nA) Social studies is a realistic course\nB) Social studies subject is a mixture rather than compound\nC) Social studies is a human study",
    "options": [
      "A & C only",
      "B & C only",
      "A & B only",
      "A, B & C"
    ],
    "correctAnswer": 0,
    "explanation": "Statements A and C are true. Social Studies is a realistic course as it deals with real-life human interactions and societal structures. It is also fundamentally a human study, focusing on people and their relationships with their environment. Statement B is debated, but modern pedagogy views social studies as an integrated field (a compound) that synthesizes knowledge from various social sciences, rather than just a simple mixture."
  },
  {
    "id": 950,
    "question": "The study of life and contributions of Swami Vivekananda leads to development of this value in students (TSTET 29 May 2024)",
    "options": [
      "Moral value",
      "Vocational value",
      "Cultural value",
      "Political value"
    ],
    "correctAnswer": 0,
    "explanation": "Swami Vivekananda's teachings emphasize character-building, selfless service (Seva), strength, courage, and universal brotherhood. Studying his life and work is primarily aimed at instilling strong moral and ethical values in students."
  },
  {
    "id": 951,
    "question": "Match the following related to cognitive domain based on revised Bloom's Taxonomy (2001) (TSTET 29 May 2024)\nA) Understanding\ti) Planning\nB) Remembering\tii) Implementation\nC) Applying\t\tiii) Classifying\n\t\t\tiv) Recalling",
    "options": [
      "A-i, B-iii, C-ii",
      "A-iv, B-i, C-ii",
      "A-iii, B-iv, C-ii",
      "A-iii, B-iv, C-i"
    ],
    "correctAnswer": 2,
    "explanation": "According to the revised Bloom's Taxonomy, 'Remembering' includes actions like Recalling. 'Understanding' includes actions like Classifying. 'Applying' includes actions like Implementing. Therefore, the correct match is A-iii, B-iv, C-ii."
  },
  {
    "id": 952,
    "question": "NCF-2005 focused on these important aspects/elements for development of Social Science curriculum (TSTET 29 May 2024)",
    "options": [
      "Teacher efficiency, content load and local contents",
      "Content load, pluralities and local contents, Normative duties and inter-relationship among disciplines",
      "Scientific outlook, school environment, content load and local content",
      "Content load, inter-relationship among disciplines, Social outlook and children's ability"
    ],
    "correctAnswer": 1,
    "explanation": "The National Curriculum Framework (NCF) 2005 recommended that the Social Science curriculum should reduce content load, embrace multiple perspectives (pluralities), integrate local contexts, address normative issues like social justice, and highlight the inter-relationships between different social science disciplines."
  },
  {
    "id": 953,
    "question": "Which of the following statement is NOT TRUE related merits of source method? (TSTET 29 May 2024)",
    "options": [
      "The use of sources provide certain useful mental exercise",
      "The original sources serve as an effective means for creating a realistic type of atmosphere",
      "Source method inhibits the pupil in research",
      "Source method can satisfy the curiosity among children on the question how do we know this"
    ],
    "correctAnswer": 2,
    "explanation": "The source method is designed to promote and encourage research skills in students. By engaging with primary and secondary sources, students learn to question, analyze, and interpret evidence, which is the foundation of research. Therefore, the statement that it inhibits research is false."
  },
  {
    "id": 954,
    "question": "To teach the topic structure of Local bodies, this chart is most suitable (TSTET 29 May 2024)",
    "options": [
      "Classification chart",
      "Flow chart",
      "Chronology chart",
      "Tabulation chart"
    ],
    "correctAnswer": 1,
    "explanation": "A flow chart is the most suitable visual aid to explain the hierarchical structure and inter-relationships of local government bodies (e.g., Gram Panchayat -> Mandal/Block -> Zilla Parishad). It clearly shows the levels of authority and flow of administration."
  },
  {
    "id": 955,
    "question": "Judgements given by courts and the extracts of judgements printed in News papers respectively are this kind of sources (TSTET 29 May 2024)",
    "options": [
      "Both are primary sources",
      "Both are secondary sources",
      "Secondary source, primary source",
      "Primary source, secondary source"
    ],
    "correctAnswer": 3,
    "explanation": "The official, original judgment delivered by a court is a primary source. An extract from that judgment printed in a newspaper is a secondary source because it has been selected, interpreted, and presented by a third party (the newspaper), making it one step removed from the original event."
  },
  {
    "id": 956,
    "question": "In this step of period plan, the activities like greetings and topic declaration are taken up (TSTET 29 May 2024)",
    "options": [
      "Practice skills",
      "Conceptual understanding - discussion",
      "Introduction",
      "Read the content, identification of unknown term, concept"
    ],
    "correctAnswer": 2,
    "explanation": "The 'Introduction' is the first step of a period or lesson plan. It involves activities designed to gain students' attention and set the stage for learning, such as greeting the class, reviewing previous knowledge, and clearly stating the day's topic and objectives."
  },
  {
    "id": 957,
    "question": "Which of the following statement is NOT TRUE related to micro teaching? (TSTET 29 May 2024)\nA) Micro teaching is a training technique rather than teaching technique\nB) Micro teaching is relatively an innovation in the field of teacher education\nC) Micro teaching provides an opportunity to select more skills at a time to practice by the student-teachers",
    "options": [
      "A & B only",
      "A & C only",
      "B & C only",
      "C only"
    ],
    "correctAnswer": 3,
    "explanation": "Statement (C) is not true. The fundamental principle of micro-teaching is to isolate and practice one specific teaching skill at a time (e.g., questioning, explaining, reinforcement). The focus is on mastering individual skills in a scaled-down teaching encounter, not practicing multiple skills simultaneously."
  },
  {
    "id": 958,
    "question": "This is one of the important source for studying about Kakatiya Kingdom (TSTET 29 May 2024)",
    "options": [
      "Siddeswara Charitra by Kase Sarvappa",
      "Nitisara by Prataparudra",
      "Panditaradhya Charitra by Palkuriki Somanatha",
      "Nrutya Ratnavali by Jayapa Senani"
    ],
    "correctAnswer": 3,
    "explanation": "'Nrutya Ratnavali' is a significant text on dance written by Jayapa Senani, the commander of the elephant cavalry under Kakatiya king Ganapati Deva. The work is also a valuable historical source as its introduction provides a genealogy and details about the Kakatiya dynasty."
  },
  {
    "id": 959,
    "question": "Consider the following statements about Harappan Seals and find the correct one (TSTET 29 May 2024)\nA) Most of the seals are square in shape\nB) Steatite was mainly used in the manufacture of seals\nC) The purpose of the seal was mainly commercial",
    "options": [
      "A, B & C",
      "B & C only",
      "A & B only",
      "A & C only"
    ],
    "correctAnswer": 0,
    "explanation": "All three statements are correct. The majority of seals from the Indus Valley Civilization are square-shaped, were predominantly made from a soft stone called steatite, and are believed to have been used for commercial purposes, such as authenticating goods for trade."
  },
  {
    "id": 960,
    "question": "One of the following book is NOT written by Megasthenes (TSTET 29 May 2024)",
    "options": [
      "Indica",
      "Periplus of the Erythraean Sea",
      "On the races of India",
      "The Indica"
    ],
    "correctAnswer": 1,
    "explanation": "Megasthenes was the Greek ambassador who wrote 'Indica', an account of Mauryan India. 'Periplus of the Erythraean Sea' is a Greco-Roman manuscript from the 1st century CE that describes navigation and trading opportunities in the Indian Ocean, but its author is anonymous and it was written centuries after Megasthenes."
  },
  {
    "id": 961,
    "question": "The local time of two cities 'X' and Y is 5.30 pm in spite of their location in two different continents. Hence, they are said to be located (TSTET 29 May 2024)",
    "options": [
      "On the same latitude",
      "On the same altitude",
      "On the same longitude",
      "Neither on the same latitude nor on the same altitude"
    ],
    "correctAnswer": 2,
    "explanation": "Longitudes are imaginary lines that run from the North Pole to the South Pole. All places located on the same longitude experience the same local time, as they face the sun at the same angle simultaneously."
  },
  {
    "id": 962,
    "question": "According to Geologists, the landforms like mountains, plains and plateaus are called as (TSTET 29 May 2024)",
    "options": [
      "First order land forms",
      "Second order land forms",
      "Third order land forms",
      "Intrusive land forms"
    ],
    "correctAnswer": 1,
    "explanation": "In geology, landforms are classified by order. First-order landforms are the continents and ocean basins. Second-order landforms are the major features on continents, such as mountains, plains, and plateaus, which are formed by large-scale tectonic forces. Third-order landforms are smaller features created by erosion and deposition."
  },
  {
    "id": 963,
    "question": "The hydrological cycle is sometimes explained as RF=RO+ET Here, 'ET' refers to (TSTET 29 May 2024)",
    "options": [
      "Evaporation and Transportation",
      "Erosion and Transportation",
      "Evaporation -Transpiration",
      "Erosion and Transpiration"
    ],
    "correctAnswer": 2,
    "explanation": "The formula RF = RO + ET represents a water balance equation where RF is Rainfall, RO is Runoff, and ET stands for Evapotranspiration. Evapotranspiration is the combined process of water evaporating from the Earth's surface and transpiring from plants."
  },
  {
    "id": 964,
    "question": "One important feature of Stratosphere is (TSTET 29 May 2024)",
    "options": [
      "It contains electrically charged particles",
      "The temperature increases with the decrease in altitude",
      "It contains ozone layer",
      "Radio waves transmitted from the earth are reflected back to the earth"
    ],
    "correctAnswer": 2,
    "explanation": "The stratosphere, the second major layer of Earth's atmosphere, is notable for containing the ozone layer. This layer absorbs the majority of the Sun's harmful ultraviolet (UV) radiation, protecting life on Earth."
  },
  {
    "id": 965,
    "question": "'U' Shaped Valleys are formed due to the work of (TSTET 29 May 2024)",
    "options": [
      "Water",
      "Wind",
      "Waves",
      "Glacier"
    ],
    "correctAnswer": 3,
    "explanation": "'U'-shaped valleys are characteristic landforms created by glacial erosion. As glaciers move through a valley, they pluck and abrade the sides and floor, widening and deepening the valley into a distinctive U-shape. River erosion, by contrast, typically creates 'V'-shaped valleys."
  },
  {
    "id": 966,
    "question": "The High Pressure Belts on the earth are at (TSTET 29 May 2024)",
    "options": [
      "Equatorial and Sub-Polar Region",
      "Equatorial and Sub-Tropical Region",
      "Sub-Polar and Polar Region",
      "Sub-Tropical and Polar Region"
    ],
    "correctAnswer": 3,
    "explanation": "The Earth has major pressure belts. High-pressure belts are found in the Sub-Tropical regions (around 30° N and S latitude) and the Polar regions (around 90° N and S latitude). These are areas where air is generally descending, leading to high atmospheric pressure."
  },
  {
    "id": 967,
    "question": "From among the following, the distinct feature of the Indian Agriculture is (TSTET 29 May 2024)",
    "options": [
      "Large land holdings",
      "High Productivity",
      "Usage of New Technology",
      "Presence of Small Land Holdings"
    ],
    "correctAnswer": 3,
    "explanation": "A defining characteristic of Indian agriculture is the prevalence of small and fragmented land holdings. The majority of farmers in India are small or marginal farmers, cultivating plots of less than two hectares, which presents challenges for mechanization and achieving economies of scale."
  },
  {
    "id": 968,
    "question": "Naharkatiya- Moran Region. Bombay High and Cambay Basin are associated with this mineral of India (TSTET 29 May 2024)",
    "options": [
      "Mica",
      "Oil resources",
      "Manganese",
      "Iron-Ore"
    ],
    "correctAnswer": 1,
    "explanation": "Bombay High (offshore Mumbai), the Cambay Basin (Gujarat), and the Naharkatiya-Moran region (Assam) are three of India's most significant petroleum (oil and natural gas) producing areas."
  },
  {
    "id": 969,
    "question": "These Mountains are regionally known as Patkai, Naga, Manipuri, Khasi and Mizo hills (TSTET 29 May 2024)",
    "options": [
      "The Greater Himalayas",
      "The Lesser Himalayas",
      "The Shiwalik Ranges",
      "The Purvanchal Mountains"
    ],
    "correctAnswer": 3,
    "explanation": "The Purvanchal Range, or the Eastern Mountains, is the eastern extension of the Himalayas in Northeast India. It comprises several smaller hill ranges, including the Patkai Hills, Naga Hills, Manipur Hills, and Mizo Hills."
  },
  {
    "id": 970,
    "question": "The pattern of the elements of weather and climate for a place can be shown using pictures called (TSTET 29 May 2024)",
    "options": [
      "Cartography",
      "Geomorphology",
      "Barograph",
      "Climatographs"
    ],
    "correctAnswer": 3,
    "explanation": "A climatograph (or climograph) is a graphical representation of a location's basic climate. It typically plots two variables: average monthly temperature and average monthly precipitation, providing a quick visual summary of the climate patterns."
  },
  {
    "id": 971,
    "question": "A population pyramid shows (TSTET 29 May 2024)",
    "options": [
      "The number of males and females in different age groups in a country",
      "The number of persons living per unit area",
      "The percentage of increase in population in a unit area",
      "The number of males and females between the age groups of 15-59 years only"
    ],
    "correctAnswer": 0,
    "explanation": "A population pyramid is a bar graph that displays the distribution of a population by age and sex. It typically shows the number or percentage of males and females in specific age cohorts, giving a clear picture of a country's demographic structure."
  },
  {
    "id": 972,
    "question": "The river Indus flows in this direction through Tibet (TSTET 29 May 2024)",
    "options": [
      "North-easterly",
      "North-westerly",
      "South-Easterly",
      "South-westerly"
    ],
    "correctAnswer": 1,
    "explanation": "The Indus River originates near Lake Manasarovar in Tibet. From its source, it flows in a north-westerly direction through the Tibetan plateau before entering the Ladakh region of India."
  },
  {
    "id": 973,
    "question": "These soils swell and become sticky when wet and shrink when dried and during the dry season, these soils develop cracks (TSTET 29 May 2024)",
    "options": [
      "Red Soils",
      "Black Soils",
      "Alluvial Soils",
      "Laterite Soils"
    ],
    "correctAnswer": 1,
    "explanation": "Black soils, also known as regur soils, are rich in clay minerals like montmorillonite. This composition causes them to have high water-retention capacity, leading to swelling when wet and significant shrinkage and cracking when dry, a property known as self-ploughing."
  },
  {
    "id": 974,
    "question": "Panaji, the capital of Goa, experience moderate climate because of its location (TSTET 29 May 2024)",
    "options": [
      "at higher elevation",
      "very near to the north pole",
      "very near to the sea shore",
      "in the Indo-Gangetic plain"
    ],
    "correctAnswer": 2,
    "explanation": "Coastal locations like Panaji experience a moderate or maritime climate due to the influence of the sea. The sea heats up and cools down more slowly than land, which moderates the temperature of the coastal areas, preventing extreme heat in summer and extreme cold in winter."
  },
  {
    "id": 975,
    "question": "Approximately, a massive super continent \"Pangaea\" have existed (TSTET 29 May 2024)",
    "options": [
      "10 million years ago",
      "100 million years ago",
      "220 million years ago",
      "150 million years ago"
    ],
    "correctAnswer": 2,
    "explanation": "Scientists believe that the supercontinent Pangaea existed during the late Paleozoic and early Mesozoic eras. It began to break apart approximately 200 million years ago, but its formation and existence are dated to around 335 to 175 million years ago, with 220 million years ago falling within this period."
  },
  {
    "id": 976,
    "question": "The following is NOT the feature of 1991 industrial policy (TSTET 29 May 2024)",
    "options": [
      "Revitalisation of the public sector",
      "Abolition of industrial license",
      "Free entry of foreign investment",
      "Liberal industrial location policy"
    ],
    "correctAnswer": 0,
    "explanation": "The New Industrial Policy of 1991 focused on Liberalisation, Privatisation, and Globalisation (LPG). Key features included abolishing industrial licensing (de-licensing), encouraging foreign investment, and liberalising location policies. While it addressed public sector reforms, its main thrust was towards reducing the role of the public sector and promoting private enterprise, not its revitalisation in the traditional sense."
  },
  {
    "id": 977,
    "question": "Identify the FALSE statement related to 'Pradhan Mantri Jhan Dhan Yojana' (TSTET 29 May 2024)",
    "options": [
      "There is no Overdraft facility",
      "Rupay debit card is given",
      "It is launched in August, 2014",
      "Account can be opened with zero balance"
    ],
    "correctAnswer": 0,
    "explanation": "This statement is false. The Pradhan Mantri Jan Dhan Yojana (PMJDY), launched in August 2014, specifically includes an overdraft facility of up to ₹10,000 for eligible account holders after satisfactory operation of the account for some time. Providing zero-balance accounts and a RuPay debit card are also key features."
  },
  {
    "id": 978,
    "question": "Identify the FALSE statement related to GST (TSTET 29 May 2024)",
    "options": [
      "Most of indirect taxes have been replaced with GST",
      "It is launched in 2014",
      "It imposed taxation on both production and sales of goods and services",
      "Under GST, the goods and services carry the same tax across the country"
    ],
    "correctAnswer": 1,
    "explanation": "This statement is false. The Goods and Services Tax (GST) was launched in India on July 1, 2017. It is a comprehensive indirect tax that replaced many other indirect taxes, creating a single tax system across the country for goods and services."
  },
  {
    "id": 979,
    "question": "Which of the following is NOT related to Human Development Index (TSTET 29 May 2024)",
    "options": [
      "Literacy rate is considered",
      "HDI Report is published by UNDP",
      "Health indicators are considered",
      "Per capita income is not included"
    ],
    "correctAnswer": 3,
    "explanation": "This statement is false. The Human Development Index (HDI), published by the UNDP, is a composite index measuring development based on three key dimensions: a long and healthy life (life expectancy), knowledge (mean and expected years of schooling), and a decent standard of living. The standard of living is measured by Gross National Income (GNI) per capita."
  },
  {
    "id": 980,
    "question": "The major reason for low calorie intake among Indians is (TSTET 29 May 2024)",
    "options": [
      "Lack of purchasing power of people",
      "Less availability of food grains",
      "Food grains are not grown in many areas",
      "People are not purchasing the food grains due to ignorance"
    ],
    "correctAnswer": 0,
    "explanation": "While India is largely self-sufficient in food grain production, a significant portion of the population suffers from food insecurity and low calorie intake. The primary reason is economic inaccessibility; many people lack the necessary purchasing power to buy sufficient quantities of nutritious food."
  },
  {
    "id": 981,
    "question": "In India, globalisation is actively started after (TSTET 29 May 2024)",
    "options": [
      "42nd amendment of the Indian Constitution",
      "1991 Economic reforms",
      "1956 Industrial policy resolution",
      "After the first five-year plan period"
    ],
    "correctAnswer": 1,
    "explanation": "The process of globalisation in India was actively initiated with the economic reforms of 1991. Facing a severe balance of payments crisis, the government introduced the New Economic Policy, which focused on liberalisation, privatisation, and globalisation (LPG) to integrate the Indian economy with the global economy."
  },
  {
    "id": 982,
    "question": "Among the poor families, the poorest are entitled to have: (TSTET 29 May 2024)",
    "options": [
      "35 kgs of food grains",
      "25 kgs of food grains",
      "15 kgs of food grains",
      "50 kgs of food grains"
    ],
    "correctAnswer": 0,
    "explanation": "Under the Antyodaya Anna Yojana (AAY), a government scheme aimed at the poorest of the poor, identified families are entitled to receive 35 kg of food grains per family per month at highly subsidized prices. This scheme targets the most vulnerable sections within the Below Poverty Line (BPL) population."
  },
  {
    "id": 983,
    "question": "'Silent spring' written by Rachel Carson was related to (TSTET 29 May 2024)",
    "options": [
      "Impact of Global Warming",
      "Impact of Globalisation",
      "Impact of DDT",
      "Impact of Green Revolution"
    ],
    "correctAnswer": 2,
    "explanation": "Rachel Carson's groundbreaking 1962 book, \"Silent Spring,\" documented the adverse environmental effects caused by the indiscriminate use of pesticides, particularly DDT. The book highlighted how these chemicals harmed wildlife, especially birds, and posed a threat to human health, sparking the modern environmental movement."
  },
  {
    "id": 984,
    "question": "One among the following is NOT the part of service activity (TSTET 29 May 2024)",
    "options": [
      "Tailoring",
      "Bookselling",
      "Banking",
      "Auto driving"
    ],
    "correctAnswer": 0,
    "explanation": "Economic activities are categorized into primary (agriculture), secondary (manufacturing), and tertiary (services) sectors. Banking, bookselling (retail trade), and auto driving (transport) are all service activities. Tailoring, which involves converting fabric (raw material) into clothing (a finished product), is considered a manufacturing activity, part of the secondary sector."
  },
  {
    "id": 985,
    "question": "The emperor Ashoka sent messangers to Syria. Egypt. Greece and Sri Lanka to spread the (TSTET 29 May 2024)",
    "options": [
      "religion of Hinduism",
      "concept of ahimsa",
      "idea of one religion and one God",
      "ideas about dhamma"
    ],
    "correctAnswer": 3,
    "explanation": "After the Kalinga War, Emperor Ashoka embraced Buddhism and dedicated his efforts to spreading the principles of Dhamma (a moral and ethical code based on Buddhist teachings). He sent emissaries and missionaries, including to countries like Syria, Egypt, Greece, and Sri Lanka, to propagate these ideas of peace, non-violence, and social responsibility."
  },
  {
    "id": 986,
    "question": "These tribals live in the dense forests and hills of the Araku Valley in Vishakhapatnam and in the dense forests of Malkangiri in Odisha (TSTET 29 May 2024)",
    "options": [
      "Gonds",
      "Chenchus",
      "Bonda",
      "Banjaris"
    ],
    "correctAnswer": 2,
    "explanation": "The Bonda tribe is a Particularly Vulnerable Tribal Group (PVTG) residing primarily in the isolated hill regions of the Malkangiri district in southwestern Odisha. While some tribal communities are found in the Araku Valley, the Bonda are specifically associated with the Malkangiri region mentioned."
  },
  {
    "id": 987,
    "question": "In Gana form of Government existing in Vajji Mahajanapadha (TSTET 29 May 2024)",
    "options": [
      "There was only one ruler",
      "There were a group of rulers instead of a single ruler",
      "The grihapathis who owned the maximum land ruled the Mahajanapadha",
      "The performers of rituals ruled the Mahajanapadha"
    ],
    "correctAnswer": 1,
    "explanation": "The Vajji Mahajanapada was a 'Gana-sangha,' which was an oligarchic republic. Unlike monarchies ('rajya') ruled by a single king, power in a Gana-sangha was vested in a council or assembly of rulers, often heads of prominent Kshatriya families, who collectively governed the state."
  },
  {
    "id": 988,
    "question": "One among the following was NOT the famous Parivrajaka (TSTET 29 May 2024)",
    "options": [
      "Gautama Budha",
      "Vardhamana Mahavira",
      "Makhkhali Goshala",
      "Adi Shankara Charya"
    ],
    "correctAnswer": 3,
    "explanation": "Parivrajakas were wandering ascetics or teachers in ancient India during the time of Buddha and Mahavira (around the 6th century BCE). Gautama Buddha, Vardhamana Mahavira, and Makhkhali Goshala (founder of the Ajivika school) were prominent Parivrajakas. Adi Shankaracharya was a philosopher and theologian who lived much later, around the 8th century CE."
  },
  {
    "id": 989,
    "question": "Gurunanak's teachings are now known as nam japna and kirt-karna and vand chakna, which underline the importance of (TSTET 29 May 2024)",
    "options": [
      "right belief, right path and meditation",
      "right belief and worship, honest living and helping others",
      "Contemplation, performance of yoga and worship of God",
      "Meditation, Yoga and Contemplation"
    ],
    "correctAnswer": 1,
    "explanation": "The three pillars of Guru Nanak's teachings are: 'Naam Japna' (meditating on God's name, representing right belief and worship), 'Kirat Karni' (earning an honest living), and 'Vand Chakna' (sharing with others, representing helping others). These principles form the core of Sikh ethics."
  },
  {
    "id": 990,
    "question": "The theory that is based on the assumption that production and physical forces have an intimate relationship and the surplus value of products should go in favour of the working class (TSTET 29 May 2024)",
    "options": [
      "Socialism",
      "Marxism",
      "Communalism",
      "Luddhism"
    ],
    "correctAnswer": 1,
    "explanation": "This describes a core tenet of Marxism. Karl Marx's theory of surplus value posits that the value of a product is created by the labor of the working class (proletariat), but the surplus value (profit) is unjustly appropriated by the capitalists (bourgeoisie). Marxism advocates for a system where this surplus value benefits the workers who create it."
  },
  {
    "id": 991,
    "question": "This has been referred as the shift from an agrarian, handicraft, labour intensive economy into one dominated by machine manufacturers, factories and a free flow of capital (TSTET 29 May 2024)",
    "options": [
      "Agricultural revolution",
      "White Revolution",
      "Blue Revolution",
      "Industrial Revolution"
    ],
    "correctAnswer": 3,
    "explanation": "The Industrial Revolution, which began in the late 18th century, marks the fundamental transition of economies from being based on agriculture and handicrafts to being dominated by industrial production, machine manufacturing in factories, and the rise of a capitalist system."
  },
  {
    "id": 992,
    "question": "Muslim Sultans and Badshahs did not claim to be incarnation of God, but Persian court chronicles described the sultan as (TSTET 29 May 2024)",
    "options": [
      "The Messenger of God",
      "The Shadow of God",
      "The Servant of God",
      "The Sun of God"
    ],
    "correctAnswer": 1,
    "explanation": "In Islamic political theory, especially as adopted in Persianate courts like the Delhi Sultanate and the Mughal Empire, the ruler was often referred to as \"Zill-i-Ilahi,\" which translates to \"The Shadow of God on Earth.\" This title conferred divine sanction and legitimacy upon the ruler's authority without claiming divinity itself."
  },
  {
    "id": 993,
    "question": "One among the following was NOT the founding members of the Indian National Congress (TSTET 29 May 2024)",
    "options": [
      "Dadabai Nauroji",
      "Badruddin Tyabji",
      "Mahatma Gandhi",
      "Surendranath Banerjee"
    ],
    "correctAnswer": 2,
    "explanation": "The Indian National Congress was founded in 1885. Dadabhai Naoroji, Badruddin Tyabji, and Surendranath Banerjee were all prominent early leaders and among its founding figures. Mahatma Gandhi returned to India from South Africa in 1915 and became a dominant figure in the Congress much later."
  },
  {
    "id": 994,
    "question": "The initiator of Nationalism in Hyderabad State was (TSTET 29 May 2024)",
    "options": [
      "Mulla Abdul Qayyum",
      "Aghoranatha Chattopadhyay",
      "Nizam Mir Osman Ali Khan",
      "Ravichettu Ranga Rao"
    ],
    "correctAnswer": 1,
    "explanation": "Dr. Aghoranath Chattopadhyay, a scientist and the first principal of Nizam College, was a key figure in awakening political and national consciousness in the princely state of Hyderabad in the late 19th century. He was a proponent of modern education and social reform and is considered a pioneer of nationalism in the region."
  },
  {
    "id": 995,
    "question": "The Qutub Shahi ruler who invited and honoured Kshetrayya, the famous padam writer to his court (TSTET 29 May 2024)",
    "options": [
      "Abul Hasan Tanashah",
      "Abdullah Qutub Shah",
      "Mohd. Qutub Shah",
      "Mohd. Quli Qutub Shah"
    ],
    "correctAnswer": 1,
    "explanation": "Abdullah Qutub Shah, the seventh ruler of the Golconda Sultanate (reigned 1626–1672), was a great patron of arts and literature, particularly Telugu literature. He invited the renowned padam composer Kshetrayya to his court and honored him for his contributions to music and poetry."
  },
  {
    "id": 996,
    "question": "In 1806 CE, this ruler of France conquered the small and independent kingdoms of Germany and formed Rhine Confederation (TSTET 29 May 2024)",
    "options": [
      "Louis Phillippe",
      "Napolean Bonaparte",
      "Charles X",
      "Louis XVIII"
    ],
    "correctAnswer": 1,
    "explanation": "In 1806, after his victory over Austria and Russia at the Battle of Austerlitz, Napoleon Bonaparte reorganized the German states. He dissolved the Holy Roman Empire and established the Confederation of the Rhine, a confederation of client states of the First French Empire, which brought many German territories under his control."
  },
  {
    "id": 997,
    "question": "The provision of a federal system with a strong central government was adapted from this constitution (TSTET 29 May 2024)",
    "options": [
      "Canadian Constitution",
      "French Constitution",
      "Irish Constitution",
      "United States Constitution"
    ],
    "correctAnswer": 0,
    "explanation": "The framers of the Indian Constitution borrowed the concept of a quasi-federal system, which features a strong central government relative to the states, from the Canadian Constitution. This includes the distribution of powers, residuary powers with the Centre, and the appointment of State Governors by the Centre."
  },
  {
    "id": 998,
    "question": "The Indian Constitution contains the Directive Principles of State Policy (DPSP) in (TSTET 29 May 2024)",
    "options": [
      "Part IV. Articles 12-35",
      "Part V. Articles 36-51",
      "Part IV, Articles 36-51",
      "Part III, Articles 36-51"
    ],
    "correctAnswer": 2,
    "explanation": "The Directive Principles of State Policy (DPSP) are enumerated in Part IV of the Indian Constitution, spanning from Article 36 to Article 51. These principles are guidelines for the state to follow in governance, although they are not enforceable by any court."
  },
  {
    "id": 999,
    "question": "Election Commissioners are appointed by (TSTET 29 May 2024)",
    "options": [
      "the President of India on the resolution of the both the Houses of Parliament",
      "the President of India on the advice of the Council of Ministers and chief ministers of all the states",
      "the President of India on the advice of the Central Council of Ministers, leader of opposition and the Chief Justice of India",
      "the President of India on the advice of the Central Council of Ministers"
    ],
    "correctAnswer": 3,
    "explanation": "According to Article 324 of the Constitution, the Chief Election Commissioner and other Election Commissioners are appointed by the President of India. By convention, this appointment is made on the advice of the Union Council of Ministers headed by the Prime Minister."
  },
  {
    "id": 1000,
    "question": "Rajya Sabha can delay the Money Bill passed by the Lok Sabha for a period not exceeding (TSTET 29 May 2024)",
    "options": [
      "14 days",
      "30 days",
      "15 days",
      "10 days"
    ],
    "correctAnswer": 0,
    "explanation": "According to Article 109 of the Indian Constitution, a Money Bill can only be introduced in the Lok Sabha. After being passed by the Lok Sabha, it is sent to the Rajya Sabha for its recommendations. The Rajya Sabha cannot reject or amend a Money Bill; it can only make recommendations and must return the bill within 14 days."
  },
  {
    "id": 1001,
    "question": "The Judge of the Supreme Court can be removed by (TSTET 29 May 2024)",
    "options": [
      "The President on the resolution passed with special majority in the both houses of parliament",
      "The President on the recommendation of the cabinet minister",
      "The President on his/her own discretion",
      "Chief Justice of the Supreme Court"
    ],
    "correctAnswer": 0,
    "explanation": "The process for removing a Supreme Court Judge is detailed in Article 124(4) of the Constitution. A judge can be removed by an order of the President, but only after an address by Parliament, supported by a special majority, has been presented to the President for such removal on the ground of proved misbehaviour or incapacity."
  },
  {
    "id": 1002,
    "question": "The voting age was decreased from 21 years to 18 years for both Lok Sabha and Legislative Assemblies elections with this constitutional amendment (TSTET 29 May 2024)",
    "options": [
      "73rd amendment Act",
      "44th Amendment Act",
      "61st amendment Act",
      "52nd amendment Act"
    ],
    "correctAnswer": 2,
    "explanation": "The 61st Constitutional Amendment Act of 1988 lowered the voting age for elections to the Lok Sabha and the Legislative Assemblies of States from 21 years to 18 years. It amended Article 326 of the Constitution."
  },
  {
    "id": 1003,
    "question": "This constitution schedule deals with the official languages recognized by the Constitution of India (TSTET 29 May 2024)",
    "options": [
      "8th Schedule",
      "7th Schedule",
      "5th Schedule",
      "4th Schedule"
    ],
    "correctAnswer": 0,
    "explanation": "The Eighth Schedule to the Constitution of India lists the official languages of the Republic of India. As of now, it recognizes 22 languages. The Seventh Schedule deals with the division of powers between the Union and the States."
  },
  {
    "id": 1004,
    "question": "Identify the INCORRECT statement about Local Government in India, (TSTET 29 May 2024)",
    "options": [
      "Local bodies generate their revenue from property tax, water charges, license fees and other levies.",
      "The State Election Commission is responsible for administering elections to the Local Self Government",
      "Local Government bodies are autonomous bodies",
      "The term of the local body government is six years."
    ],
    "correctAnswer": 3,
    "explanation": "This statement is incorrect. According to the 73rd and 74th Constitutional Amendment Acts, the term of office for all local government bodies (both rural and urban) is fixed at five years from the date of their first meeting, not six years."
  },
  {
    "id": 1005,
    "question": "Pick the correct one about the constitution of Security Council of UNO (TSTET 29 May 2024)",
    "options": [
      "The Security Council is made up of fifteen member states, consisting of five permanent members and ten non-permanent members, elected for five-year term by the General Assembly",
      "The Security Council is made up of ten member states, consisting of five permanent members and five non-permanent members elected for a two-year term by the General Assembly",
      "The Security Council is made up of fifteen member states, consisting of five permanent members and ten non-permanent members, elected for a two-year term by the General Assembly",
      "The Security Council is made up of twenty member states, consisting of five permanent members and fifteen non-permanent members elected for two-year term by the General Assembly"
    ],
    "correctAnswer": 2,
    "explanation": "The United Nations Security Council is composed of 15 members. Five of these are permanent members (P5): China, France, Russia, the United Kingdom, and the United States. The other ten are non-permanent members elected by the General Assembly for a two-year term."
  },
  {
    "id": 1006,
    "question": "The minimum population required for a city to become Municipal Corporation is (TSTET 29 May 2024)",
    "options": [
      "more than 10 lakhs",
      "more than 3 lakhs",
      "more than 15 lakhs",
      "more than 1 lakh"
    ],
    "correctAnswer": 0,
    "explanation": "While the exact population criteria can vary slightly from state to state based on state legislation, a Municipal Corporation is generally established for large urban areas, typically with a population of more than 10 lakhs (1 million)."
  },
  {
    "id": 1007,
    "question": "The words 'socialist' and 'secular' were made a part of the Preamble by (TSTET 29 May 2024)",
    "options": [
      "52nd amendment",
      "46th amendment",
      "44th amendment",
      "42nd amendment"
    ],
    "correctAnswer": 3,
    "explanation": "The 42nd Constitutional Amendment Act of 1976, enacted during the Emergency, added three new words to the Preamble: 'Socialist', 'Secular', and 'Integrity'."
  },
  {
    "id": 1008,
    "question": "The following country is NOT a member of SAARC (TSTET 29 May 2024)",
    "options": [
      "Thailand",
      "Bhutan",
      "Pakistan",
      "Maldives"
    ],
    "correctAnswer": 0,
    "explanation": "The South Asian Association for Regional Cooperation (SAARC) has eight member states: Afghanistan, Bangladesh, Bhutan, India, Maldives, Nepal, Pakistan, and Sri Lanka. Thailand is a member of ASEAN (Association of Southeast Asian Nations), not SAARC."
  },
  {
    "id": 1009,
    "question": "The statement \"The social studies program is defined as the study of man and his interaction with his social and physical environment in the past, present and emerging future\" - was quoted by (TSTET 29 May 2024)",
    "options": [
      "J.F Forester",
      "John U. Michaelis",
      "E.B. Wesley",
      "James Hemmings"
    ],
    "correctAnswer": 1,
    "explanation": "This comprehensive definition of social studies, emphasizing the study of human interaction with the social and physical environment across time, is famously attributed to John U. Michaelis, a prominent American educator and author in the field of social studies curriculum."
  },
  {
    "id": 1010,
    "question": "The advantages of teaching social studies at school level are A) Social learning B) Competence in Tackling problems C) Training in Non-cooperation D) Development of the power of thinking and reasoning. Choose the correct one (TSTET 29 May 2024)",
    "options": [
      "A, B & C only",
      "A, B & D only",
      "A, C & D only",
      "A, B, C & D"
    ],
    "correctAnswer": 1,
    "explanation": "Teaching social studies aims to foster social learning (understanding society), develop competence in tackling problems, and enhance critical thinking and reasoning skills. 'Training in Non-cooperation' is contrary to the goals of social studies, which promotes cooperation and civic responsibility. Therefore, A, B, and D are the correct advantages."
  },
  {
    "id": 1011,
    "question": "The teaching method which is a combination of both inductive and deductive methods is (TSTET 29 May 2024)",
    "options": [
      "Problem solving method",
      "Project method",
      "Analytical method",
      "Laboratory method"
    ],
    "correctAnswer": 2,
    "explanation": "The analytical method involves breaking down a problem into its constituent parts and then proceeding to a solution. This process often combines inductive reasoning (observing parts to form a general idea) and deductive reasoning (applying general principles to the specific parts), making it a blend of both approaches."
  },
  {
    "id": 1012,
    "question": "The modern approach in teaching Social Studies is (TSTET 29 May 2024)",
    "options": [
      "Student-centered approach",
      "Teacher-centered approach",
      "Subject-centered approach",
      "Activity-centered approach"
    ],
    "correctAnswer": 0,
    "explanation": "Modern pedagogy in social studies emphasizes a student-centered approach. This approach focuses on the active involvement of the learner, catering to individual needs, and promoting skills like critical thinking and inquiry, rather than just passively receiving information from the teacher."
  },
  {
    "id": 1013,
    "question": "Social Science Exhibitions in schools can be organised at (TSTET 29 May 2024)",
    "options": [
      "School level",
      "District level",
      "State level",
      "All the above"
    ],
    "correctAnswer": 3,
    "explanation": "Social Science exhibitions are versatile educational activities that can be effectively organized at various levels: within a single school, as a competition among schools at the district level, or as a larger event at the state level, allowing for progressively wider participation."
  },
  {
    "id": 1014,
    "question": "The first step in a project method is (TSTET 29 May 2024)",
    "options": [
      "Execution of the project",
      "Providing a situation",
      "Planning",
      "Recording"
    ],
    "correctAnswer": 1,
    "explanation": "The project method, developed by William Heard Kilpatrick, begins with the teacher creating or \"providing a situation\" that is real, problematic, and interesting to the students. This initial step is crucial for sparking student interest and providing a context from which a purposeful project can be chosen and planned."
  },
  {
    "id": 1015,
    "question": "'An Atlas is a collection of maps in a bound form'- in social studies teaching atlas is considered as (TSTET 29 May 2024)",
    "options": [
      "Teaching device",
      "Teaching aid",
      "Teaching skill",
      "Teaching method"
    ],
    "correctAnswer": 1,
    "explanation": "A teaching aid is any tool or object used by a teacher to enhance learning. An atlas, being a collection of maps, is a visual aid used to help students understand geography, spatial relationships, and locations, thus fitting the definition of a teaching aid."
  },
  {
    "id": 1016,
    "question": "The following is NOT an advantage of Unit planning in Social studies (TSTET 29 May 2024)",
    "options": [
      "It helps the teacher to be more purposeful and organised.",
      "It develops interest among students",
      "It gives much scope for cramming",
      "It ensures better learning experiences"
    ],
    "correctAnswer": 2,
    "explanation": "Unit planning involves organizing instruction around a central theme to promote deep understanding and meaningful learning. This approach is designed to discourage rote memorization or \"cramming.\" Therefore, giving scope for cramming is not an advantage; effective unit planning aims to prevent it."
  },
  {
    "id": 1017,
    "question": "The concept of 'Action Research' was introduced by (TSTET 29 May 2024)",
    "options": [
      "Kurt Lewin",
      "Stephen M. Corey",
      "J.S. Mill",
      "J. W. Best"
    ],
    "correctAnswer": 0,
    "explanation": "The term \"action research\" is credited to Kurt Lewin, a social psychologist, who first coined it in the 1940s. He conceptualized it as a cyclical process of planning, acting, observing, and reflecting to solve practical problems in social situations. Stephen M. Corey later applied this concept to education."
  },
  {
    "id": 1018,
    "question": "Good evaluation should possess these qualities: A) Validity B) Objectivity C) Unreliability D) Usability (TSTET 29 May 2024)",
    "options": [
      "A, B & D",
      "A, B & C",
      "A, C & D",
      "B, C & D"
    ],
    "correctAnswer": 0,
    "explanation": "The key characteristics of a good evaluation tool are validity (it measures what it intends to measure), objectivity (scoring is free from bias), reliability (it yields consistent results), and usability (it is practical to administer). Unreliability is the opposite of a desirable quality. Therefore, A, B, and D are the correct qualities."
  },
  {
    "id": 1019,
    "question": "The full form of CCE is (TSTET 29 May 2024)",
    "options": [
      "Continuous and Cumulative Evaluation",
      "Continuous and Corporate Evaluation",
      "Comprehensive and Continuous Education",
      "Continuous and Comprehensive Evaluation"
    ],
    "correctAnswer": 3,
    "explanation": "CCE stands for Continuous and Comprehensive Evaluation. It was a system of school-based evaluation to cover all aspects of a student's development. 'Continuous' refers to regular assessments, and 'Comprehensive' implies the assessment of both scholastic (academic) and co-scholastic (life skills, attitudes) areas."
  },
  {
    "id": 1020,
    "question": "The founder of 'Problem Solving Method' is (TSTET 29 May 2024)",
    "options": [
      "John Dewey",
      "John Adams",
      "Plato",
      "Socrates"
    ],
    "correctAnswer": 0,
    "explanation": "The problem-solving method in education is strongly associated with the American philosopher and educator John Dewey. He advocated for a learning process that begins with a genuine problem, followed by inquiry, hypothesis formation, and testing."
  },
  {
    "id": 1021,
    "question": "Identify the correct sequence of the given temperatures in the ascending order (12°C, -16°C, 29°C, 0°C, 4°C, 1°C, -1°C, -4°C, 16°C) (TSTET 24 May 2024)",
    "options": [
      "0°C, -1°C, 1°C, -4°C, 4°C, 12°C, -16°C, 16°C, 29°C",
      "-16°C, -4°C, -1°C, 0°C, 1°C, 4°C, 12°C, 16°C, 29°C",
      "-1°C, 4°C, -4°C, -16°C, 0°C, 1°C, 12°C, 16°C, 29°C",
      "29°C, 16°C, 12°C, 4°C, 1°C, 0°C, -1°C, -4°C, -16°C"
    ],
    "correctAnswer": 1,
    "explanation": "Ascending order means arranging numbers from the smallest to the largest. In temperatures, negative values are the coldest (smallest). The correct order starts with the most negative value (-16°C) and proceeds towards the largest positive value (29°C)."
  },
  {
    "id": 1022,
    "question": "When it is 2 pm at 'X' located at 45° Eastern longitude, the local time of a place 'Y' located at 45° Western Longitude is (TSTET 24 May 2024)",
    "options": [
      "6.00 am",
      "8.00 am",
      "8.00 pm",
      "6.00 pm"
    ],
    "correctAnswer": 1,
    "explanation": "The total difference in longitude is 45° E + 45° W = 90°. The Earth rotates 1° in 4 minutes. So, the time difference is 90° × 4 minutes/° = 360 minutes, which is 6 hours. Since place 'Y' is to the west of 'X', its time is earlier. Therefore, 2 pm (14:00) minus 6 hours is 8:00 am."
  },
  {
    "id": 1023,
    "question": "Identify the true statement among the following regarding the Internal Structure of the Earth (TSTET 24 May 2024)",
    "options": [
      "The outer layer of the earth is known as Mantle",
      "The crust is mainly composed of Gold and ferrous",
      "The density of the material in the mantle is more than the density of the material in the outer core",
      "The outer Core of the earth is composed of liquid metallic material like Nickel and Ferrous"
    ],
    "correctAnswer": 3,
    "explanation": "The Earth's internal structure consists of the crust, mantle, and core. The outer core is a liquid layer composed mainly of iron (Ferrous) and nickel. The crust is the outermost layer, and density increases with depth, making the outer core denser than the mantle."
  },
  {
    "id": 1024,
    "question": "As per the Geologists, weathering, erosion, transportation and deposition are responsible for the formation of these landforms (TSTET 24 May 2024)",
    "options": [
      "The First order landforms",
      "The Second order landforms",
      "The Third order landforms",
      "The First and the Second order landforms"
    ],
    "correctAnswer": 2,
    "explanation": "Landforms are classified into three orders. First-order includes continents and ocean basins. Second-order includes mountains, plateaus, and plains. Third-order landforms are created by exogenic processes like weathering and erosion, resulting in features such as valleys, deltas, and sand dunes."
  },
  {
    "id": 1025,
    "question": "The Himalayan Mountains were formed by this process of (TSTET 24 May 2024)",
    "options": [
      "The Eurasian Plate pushing into the Indian Ocean.",
      "The Indian plate pushing into the Eurasian Plate",
      "Rising up of Lava from the Mantle",
      "Sea floor spreading"
    ],
    "correctAnswer": 1,
    "explanation": "The Himalayas are young fold mountains formed by the collision of the Indian tectonic plate with the Eurasian tectonic plate. This continental-continental collision caused the land to buckle and fold, creating the mountain range."
  },
  {
    "id": 1026,
    "question": "Match the local winds: A. Loo, B. Chinook, C. Mistral, D. Pampero with their descriptions: (i) Cold wind over France, (ii) Hot wind in USA/Canada, (iii) Cold wind in South America, (iv) Hot wind in North India (TSTET 24 May 2024)",
    "options": [
      "A-iv, B-i, C-ii, D-iii",
      "A-iv, B-iii, C-i, D-ii",
      "A-iv, B-ii, C-i, D-iii",
      "A-iv, B-iii, C-ii, D-i"
    ],
    "correctAnswer": 2,
    "explanation": "Loo (A) is a hot, dry summer wind in North India (iv). Chinook (B) is a warm, dry wind on the lee side of the Rocky Mountains in the USA and Canada (ii). Mistral (C) is a cold, dry wind from the Alps over France (i). Pampero (D) is a cold wind in the Pampas of South America (iii)."
  },
  {
    "id": 1027,
    "question": "These forests are found in the regions near the equator and close to the tropics (TSTET 24 May 2024)",
    "options": [
      "Tropical Deciduous forest",
      "Temperate Evergreen forests",
      "Tropical Evergreen Forests",
      "Coniferous forests"
    ],
    "correctAnswer": 2,
    "explanation": "Tropical Evergreen Forests, also called rainforests, are located in regions near the equator that receive high rainfall and have high temperatures throughout the year. This climate supports dense, multilayered forests that remain green year-round."
  },
  {
    "id": 1028,
    "question": "Identify the Equatorial Crop among the following (TSTET 24 May 2024)",
    "options": [
      "Rubber",
      "Cotton",
      "Jute",
      "Tea"
    ],
    "correctAnswer": 0,
    "explanation": "Rubber is a classic equatorial crop as it requires hot (above 25°C) and humid conditions with heavy rainfall (over 200 cm) to grow, which are characteristic of the climate in the equatorial belt."
  },
  {
    "id": 1029,
    "question": "Industrial locations are concentrated at the most appropriate places where (TSTET 24 May 2024)",
    "options": [
      "All the factors of industrial location are either available or can be arranged at lower cost",
      "The raw materials for the particular industry are available in plenty only",
      "The cheap labour is available in plenty only",
      "The transport facilities are available for transporting goods conveniently only"
    ],
    "correctAnswer": 0,
    "explanation": "The ideal location for an industry is one that minimizes costs. This involves a combination of factors, including access to raw materials, labor, markets, capital, and transport. The best location is where these factors can be obtained most economically."
  },
  {
    "id": 1030,
    "question": "Among the following, these states of India are sharing the boundary with Telangana State (TSTET 24 May 2024)",
    "options": [
      "Andhra Pradesh, Karnataka, Maharashtra and Chhattisgarh",
      "Andhra Pradesh, Tamil Nadu, Maharashtra, Odisha",
      "Andhra Pradesh, Karnataka, Maharashtra, Chhattisgarh and Odisha",
      "Andhra Pradesh, Karnataka, Maharashtra and Odisha"
    ],
    "correctAnswer": 0,
    "explanation": "Telangana shares its borders with four states: Maharashtra to the north, Chhattisgarh to the northeast, Karnataka to the west, and Andhra Pradesh to the south and east."
  },
  {
    "id": 1031,
    "question": "This city of India has emerged as 'the Electronic capital of India' (TSTET 24 May 2024)",
    "options": [
      "Hyderabad",
      "Amritsar",
      "Pune",
      "Bangalore"
    ],
    "correctAnswer": 3,
    "explanation": "Bangalore (Bengaluru) is known as the 'Electronic Capital' and 'Silicon Valley of India' due to its status as the leading hub for information technology, software development, and the electronics industry in the country."
  },
  {
    "id": 1032,
    "question": "'Solar Insolation' means (TSTET 24 May 2024)",
    "options": [
      "The energy that is constantly emitted by the Sun",
      "The Solar Radiation received on the surface of the earth",
      "The angle at which the Sun's rays fall on the earth's surface",
      "The amount of Solar Energy radiated back into the atmosphere by the earth"
    ],
    "correctAnswer": 1,
    "explanation": "Insolation stands for 'incoming solar radiation'. It specifically refers to the amount of the sun's electromagnetic energy that reaches the Earth's surface. It is a key factor in determining climate and weather."
  },
  {
    "id": 1033,
    "question": "The southernmost tip of the Peninsula Plateau is (TSTET 24 May 2024)",
    "options": [
      "Malwa Plateau",
      "Aravali Mountains",
      "Chota Nagpur Plateau",
      "Kanyakumari"
    ],
    "correctAnswer": 3,
    "explanation": "The Peninsular Plateau of India is a large triangular landmass. It tapers towards the south, and its southernmost tip is Kanyakumari (Cape Comorin), which is also the southernmost point of the Indian mainland."
  },
  {
    "id": 1034,
    "question": "Identify the working capital among the following (TSTET 24 May 2024)",
    "options": [
      "Tools, machines and buildings",
      "The raw materials and money required",
      "Technology and enterprise",
      "Planning and management"
    ],
    "correctAnswer": 1,
    "explanation": "In economics, working capital consists of short-term assets that are consumed in the production process. This includes raw materials and the cash (money) needed for day-to-day operations. Tools, machines, and buildings are considered fixed capital."
  },
  {
    "id": 1035,
    "question": "During these three months, the Tundra regions are almost dark (TSTET 24 May 2024)",
    "options": [
      "May, June and July",
      "November, December and January",
      "March, April and May",
      "August, September and October"
    ],
    "correctAnswer": 1,
    "explanation": "Tundra regions are located in high northern latitudes. Due to the tilt of the Earth's axis, during the winter months of the Northern Hemisphere (November, December, and January), these areas receive little to no sunlight, experiencing a phenomenon known as the polar night."
  },
  {
    "id": 1036,
    "question": "The amount of invisible water vapours present in the atmosphere is known as (TSTET 24 May 2024)",
    "options": [
      "Humidity",
      "Condensation",
      "Evaporation",
      "Precipitation"
    ],
    "correctAnswer": 0,
    "explanation": "Humidity is the measure of the concentration of water vapor in the air. It is an important component of the atmosphere and plays a crucial role in weather and climate."
  },
  {
    "id": 1037,
    "question": "From among the following Group, the countries bigger than India in size are (TSTET 24 May 2024)",
    "options": [
      "Canada, Russia, Thailand and Brazil",
      "Russia, United states of America, Indonesia, Brazil",
      "Australia, Canada, Brazil and United States of America",
      "Australia, Brazil, China and Indonesia"
    ],
    "correctAnswer": 2,
    "explanation": "India is the 7th largest country by area. The six countries larger than India are Russia, Canada, China, USA, Brazil, and Australia. The group in this option contains four countries from that list."
  },
  {
    "id": 1038,
    "question": "In 1774 CE, the representatives from 12 American colonies met at this place to protest against the British and requested the King George III to restore their previous rights (TSTET 24 May 2024)",
    "options": [
      "Georgia",
      "Connecticut",
      "Philadelphia",
      "Massachusetts"
    ],
    "correctAnswer": 2,
    "explanation": "The First Continental Congress was a meeting of delegates from 12 of the 13 British American colonies that met in 1774 at Carpenter's Hall in Philadelphia, Pennsylvania. They convened in response to the Intolerable Acts passed by the British Parliament."
  },
  {
    "id": 1039,
    "question": "The collection of taxes namely 'Tithes and Taille were associated with this Revolution (TSTET 24 May 2024)",
    "options": [
      "The American War of Independence",
      "The French Revolution",
      "The Glorious Revolution",
      "The Russian Revolution"
    ],
    "correctAnswer": 1,
    "explanation": "In pre-revolutionary France, the 'tithe' was a tax collected by the Church, and the 'taille' was a direct tax levied by the monarchy on the common people. The burden of these taxes on the Third Estate was a major cause of the French Revolution."
  },
  {
    "id": 1040,
    "question": "The person who helped Akbar the Great in framing a vision of Governance around the idea of 'Sulh I Kul' (TSTET 24 May 2024)",
    "options": [
      "Jahangir, Akbar's Son",
      "Tansen of Gwalior",
      "Abdul Rahim Khan I",
      "Abul Fazal"
    ],
    "correctAnswer": 3,
    "explanation": "Abul Fazl, Akbar's court historian and friend, was instrumental in articulating the emperor's policy of 'Sulh-i-Kul' or 'universal peace'. This policy promoted tolerance and harmony among different religious communities within the Mughal Empire."
  },
  {
    "id": 1041,
    "question": "The seven tombs of the Qutub Shahi rulers marked a unique architectural style which was a mixture of (TSTET 24 May 2024)",
    "options": [
      "Persian and Hindu Style",
      "Gandara and Hindu Style",
      "Indo-Sarcenic Style",
      "Indian rock-cut architecture Style"
    ],
    "correctAnswer": 0,
    "explanation": "The architecture of the Qutb Shahi tombs in Hyderabad is a fine example of the Deccani style, which blends elements from Persian, Pathan, and local Hindu architectural traditions, creating a unique synthesis."
  },
  {
    "id": 1042,
    "question": "Rights of a person arrested under ordinary circumstances is laid down in the (TSTET 24 May 2024)",
    "options": [
      "Right to Equality",
      "Right to Life and Personal Liberty",
      "Right to freedom of Speech and Expression",
      "Right to Constitutional remedies"
    ],
    "correctAnswer": 1,
    "explanation": "Article 22 of the Indian Constitution provides specific rights to an arrested person, such as the right to be informed of the grounds for arrest and the right to consult a lawyer. These protections are fundamental aspects of the Right to Life and Personal Liberty guaranteed under Article 21."
  },
  {
    "id": 1043,
    "question": "Among the following, identify the INCORRECT statement regarding the Legislative Council of Telangana State (TSTET 24 May 2024)",
    "options": [
      "3 members to the Legislative Council are elected from teachers",
      "3 members to the Legislative Council are elected from Graduates",
      "16 members to the Legislative Council are elected by the members of the legislative Assembly",
      "6 members to the Legislative Council are nominated by the Governor"
    ],
    "correctAnswer": 2,
    "explanation": "The Telangana Legislative Council has 40 members. One-third of the members (14) are elected by the Members of the Legislative Assembly (MLAs). Therefore, the statement that 16 members are elected by MLAs is incorrect."
  },
  {
    "id": 1044,
    "question": "Among the following, Identify the incorrect statement regarding the Unification of Germany (TSTET 24 May 2024)",
    "options": [
      "Till 19th century, Germany was divided into number of small kingdoms and they were the part of the Holy Roman Empire",
      "Rhine Confederation was formed with 39 kingdoms",
      "A customs union called Zolloverein formulated some trade rules for free trade, economic cooperation in these kingdoms",
      "Ems telegram was associated with Austro-Prussian war of 1866"
    ],
    "correctAnswer": 3,
    "explanation": "The Ems Telegram of 1870 was a diplomatic incident manipulated by Otto von Bismarck to provoke France into declaring war on Prussia. This led to the Franco-Prussian War (1870-1871), not the Austro-Prussian War of 1866. The victory in the Franco-Prussian War completed the unification of Germany."
  },
  {
    "id": 1045,
    "question": "In most of the Spanish ruled countries, all the powers were vested in the hands of Supreme Council located at (TSTET 24 May 2024)",
    "options": [
      "Berlin",
      "Lisbon",
      "Madrid",
      "Paris"
    ],
    "correctAnswer": 2,
    "explanation": "The administration of the Spanish colonial empire was highly centralized. The Council of the Indies (Consejo de Indias), located in Madrid, was the supreme governing body responsible for all colonial affairs, acting on behalf of the King of Spain."
  },
  {
    "id": 1046,
    "question": "According to this, no European power would be allowed to build the colonies in the American Continents and the United States will not interfere in the affairs of Europe or their colonies in other continents (TSTET 24 May 2024)",
    "options": [
      "Marshal Plan",
      "Munroe Doctrine",
      "New Deal Policy",
      "Carter Doctrine"
    ],
    "correctAnswer": 1,
    "explanation": "The Monroe Doctrine, articulated in 1823 by U.S. President James Monroe, declared the Western Hemisphere off-limits to further European colonization. It also stated that the U.S. would not interfere in the internal affairs of European nations."
  },
  {
    "id": 1047,
    "question": "The Chinese allowed the Europeans to conduct trade with China through this port (TSTET 24 May 2024)",
    "options": [
      "Port of Shantou",
      "Port of Hong Kong",
      "Port of Macao",
      "Rocky harbor"
    ],
    "correctAnswer": 2,
    "explanation": "Beginning in the 16th century, the Portuguese were permitted to establish a trading post in Macao. For a significant period, it was the main gateway for trade between China and Europe, long before other ports were opened to foreign trade."
  },
  {
    "id": 1048,
    "question": "Among the following, these adivasis lived in the forests of Odisha (TSTET 24 May 2024)",
    "options": [
      "Baiga and Muria",
      "Koya Reddy's",
      "Saora Adivasis",
      "Munda Adivasis"
    ],
    "correctAnswer": 2,
    "explanation": "The Saora (or Sora) are an ancient Adivasi community that predominantly inhabits the hilly forested regions of the state of Odisha in eastern India. They have a unique culture and language."
  },
  {
    "id": 1049,
    "question": "One among the following was NOT the cause for the first world war (TSTET 24 May 2024)",
    "options": [
      "Militarism caused tension between countries and rivalry, as they struggled to outdo each other as the most powerful",
      "Imperialism was a motive of making countries stronger and more powerful, which led to tension between countries",
      "Alliances were mutual military agreements between nations, which led to tension and rivalry between countries",
      "Sinking of American Commercial Ship by German troops"
    ],
    "correctAnswer": 3,
    "explanation": "The sinking of American ships by German submarines (like the Lusitania in 1915) was a key factor in the United States' decision to enter World War I in 1917. However, it was an event that occurred during the war, not a cause for its outbreak in 1914. The main causes were Militarism, Alliances, Imperialism, and Nationalism."
  },
  {
    "id": 1050,
    "question": "In October, 1917, the Soviets under the leadership of this party seized power from the Provincial Government (TSTET 24 May 2024)",
    "options": [
      "Mensheviks",
      "Bolsheviks",
      "The king, Czar Nikolas II",
      "The Democratic party"
    ],
    "correctAnswer": 1,
    "explanation": "The October Revolution in Russia was led by Vladimir Lenin and the Bolshevik Party. They successfully overthrew the Provisional Government, which had come to power after the abdication of Tsar Nicholas II, and established Soviet rule."
  },
  {
    "id": 1051,
    "question": "Adolf Hitler assigned the responsibility of economic recovery to this economist (TSTET 24 May 2024)",
    "options": [
      "Hjalmar Schacht",
      "Wilhelm Ropke",
      "Norbert Thorn",
      "Alfred Muller Armack"
    ],
    "correctAnswer": 0,
    "explanation": "Hjalmar Schacht served as the President of the Reichsbank and Minister of Economics in Nazi Germany. He played a crucial role in implementing policies that stabilized the German currency and funded rearmament, leading to Germany's economic recovery in the 1930s."
  },
  {
    "id": 1052,
    "question": "This person was appointed as the constitutional advisor of the Constitutional Drafting Committee and he later became the First Indian Judge in the International Court of Justice in 1950 (TSTET 24 May 2024)",
    "options": [
      "Md. Sadullah",
      "B.L. Mittal",
      "D.P. Khaitan",
      "Sir Benegal Narsing Rao"
    ],
    "correctAnswer": 3,
    "explanation": "Sir Benegal Narsing Rau (B.N. Rau) was a distinguished Indian jurist who served as the Constitutional Advisor to the Constituent Assembly of India. His expertise was vital in drafting the constitution. In 1950, he was elected as a judge of the International Court of Justice at The Hague."
  },
  {
    "id": 1053,
    "question": "The term 'Tsunami' has been coined from the Japanese words 'tsu' and 'nami', which means (TSTET 24 May 2024)",
    "options": [
      "Port and Tide",
      "Harbour and waves",
      "Port and Sea Waves",
      "Port and ocean Current."
    ],
    "correctAnswer": 1,
    "explanation": "The Japanese word 'tsunami' (津波) is a compound of two words: 'tsu' (津), meaning harbor, and 'nami' (波), meaning wave. Therefore, the literal translation is 'harbor wave'."
  },
    {
    "id": 1054,
    "question": "One among the folowing is NOT the function of World Trade organization (TSTET 24 May 2024)",
    "options": [
      "It provides monetary support to the developing countries to enable them to conduct trade freely",
      "It seeks to resolve trade disputes",
      "It acts as a forum for multilateral trade negotiations",
      "it ensures that trade flows as smoothly, predictably and freely as possible"
    ],
    "correctAnswer": 0,
    "explanation": "The World Trade Organization (WTO) sets the rules for international trade and helps resolve disputes. It does not provide financial aid or monetary support to countries; that is the function of institutions like the World Bank and the International Monetary Fund (IMF)."
  }
]

export const socialPaper2Questions = rawSocialPaper2Data.map((q, index) => ({
  id: `Q${index + 1}`,
  question: q.question,
  options: q.options,
  correctAnswer: q.correctAnswer,
  explanation: q.explanation,
}));


export const convertSocialPaper2ToQuestionFormat = (questions: typeof socialPaper2Questions) => {
  return questions.map((q, index) => ({
    id: index + 1,
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
  }));
};
