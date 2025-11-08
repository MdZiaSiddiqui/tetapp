type EnglishPaper1RawQuestion = {
  id: number | string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

const rawEnglishPaper1Data: EnglishPaper1RawQuestion[] = 
[
  {
    "id": 1,
    "question": "My work will require ______ a lot of concentration. Choose the suitable word to complete the sentence. (TSTET 08 Jan 2025)",
    "options": [
      "quiete",
      "quit",
      "quiet",
      "quite"
    ],
    "correctAnswer": 3,
    "explanation": "The sentence requires an adverb to modify 'a lot of concentration'. 'Quite' is an adverb meaning 'to a considerable extent' or 'very', which fits the context perfectly. 'Quiet' is an adjective meaning silent. 'Quit' is a verb meaning to stop. 'Quiete' is not a word."
  },
  {
    "id": 2,
    "question": "Wisdom is the gift ______ heaven. Choose the correct option to complete the sentence. (TSTET 08 Jan 2025)",
    "options": [
      "of",
      "on",
      "for",
      "in"
    ],
    "correctAnswer": 0,
    "explanation": "The preposition 'of' is used here to indicate origin or source. The sentence means that wisdom is a gift that originates from heaven. 'Gift of heaven' is the correct and standard English phrase. The other prepositions do not fit this meaning."
  },
  {
    "id": 3,
    "question": "Words that are spelt and pronounced the same but have different meanings are called ______. (TSTET 08 Jan 2025)",
    "options": [
      "Antonyms",
      "Homophones",
      "Homonyms",
      "Synonyms"
    ],
    "correctAnswer": 2,
    "explanation": "The definition provided matches that of 'homonyms'. For example, 'bat' (a flying mammal) and 'bat' (sports equipment) are spelled and pronounced the same but have different meanings. 'Homophones' sound the same but are spelled differently (e.g., 'their' and 'there'). 'Antonyms' have opposite meanings, and 'Synonyms' have similar meanings."
  },
  {
    "id": 4,
    "question": "Mr. Ramesh said to his students, \"Will you like to go outdoors for physical training?\" Choose the most appropriate indirect speech. (TSTET 08 Jan 2025)",
    "options": [
      "Mr. Ramesh asked his students if they have been liked to go outdoors for physical training.",
      "Mr. Ramesh asked his students if they would liked to go outdoors for physical training.",
      "Mr. Ramesh asked his students if would they like to go outdoors for physical training.",
      "Mr. Ramesh asked his students if they would like to go outdoors for physical training."
    ],
    "correctAnswer": 3,
    "explanation": "To convert this question to indirect speech: 1. The reporting verb 'said to' changes to 'asked'. 2. The conjunction 'if' is used. 3. The modal verb 'will' changes to 'would'. 4. The sentence structure becomes assertive (subject + verb), so 'you would like' becomes 'they would like'. Option 4 correctly applies all these rules."
  },
  {
    "id": 5,
    "question": "The pens that ______. Please don't misplace them or lend them to someone else. Choose the correct option to complete the sentence. (TSTET 08 Jan 2025)",
    "options": [
      "I gives to you is mine",
      "I give to you is mine",
      "I gave you are mine",
      "I gave you is mine"
    ],
    "correctAnswer": 2,
    "explanation": "The subject of the main clause is 'The pens', which is plural. Therefore, the verb must also be plural: 'are mine'. The clause 'that I gave you' describes the pens, with the action of giving happening in the past, making 'gave' the correct verb. Combining these, the correct sentence is 'The pens that I gave you are mine.'"
  },
  {
    "id": 6,
    "question": "A good captain should be ready to ______ criticism when the team underperforms. Choose the most appropriate word to complete the sentence. (TSTET 08 Jan 2025)",
    "options": [
      "share",
      "face",
      "hold",
      "give"
    ],
    "correctAnswer": 1,
    "explanation": "The context implies that the captain must accept and deal with negative comments. The idiom 'face criticism' perfectly captures this meaning. 'Share criticism' would mean distributing it, 'hold criticism' is not a standard phrase, and 'give criticism' is the opposite of receiving it."
  },
  {
    "id": 7,
    "question": "We have finalised the site for our new school building. Pick the correct passive form of the sentence. (TSTET 08 Jan 2025)",
    "options": [
      "The site for our new school building has been finalised by us.",
      "The site for our new school building had been finalised by us.",
      "The site for our new school building have been finalised by us.",
      "The site for our new school building is finalised by us."
    ],
    "correctAnswer": 0,
    "explanation": "The original sentence is in the Present Perfect tense ('have finalised'). To change it to the passive voice, the object ('The site for our new school building') becomes the new subject. The passive verb for Present Perfect is 'has/have + been + past participle'. Since the new subject ('The site') is singular, the correct form is 'has been finalised'."
  },
  {
    "id": 8,
    "question": "Choose the INCORRECTLY spelt word from the given options. (TSTET 08 Jan 2025)",
    "options": [
      "elaboration",
      "emigration",
      "enumaration",
      "exaggeration"
    ],
    "correctAnswer": 2,
    "explanation": "The word 'enumaration' is misspelled. The correct spelling is 'enumeration', which means the action of listing things one by one. The other options are all spelled correctly."
  },
  {
    "id": 9,
    "question": "______ you come here, you will repent it. Choose the correct option from the following to complete the sentence. (TSTET 08 Jan 2025)",
    "options": [
      "In spite of",
      "But",
      "If",
      "Or"
    ],
    "correctAnswer": 2,
    "explanation": "The sentence structure is a first conditional, used to describe a real possibility in the future (If + simple present, ... will + base verb). The word 'If' correctly introduces the condition ('you come here') that will lead to the consequence ('you will repent it')."
  },
  {
    "id": 10,
    "question": "Identify the part with an error in the given sentence. The teacher told Rekha that she were (A) very disappointed (B) with her work. (C) (TSTET 08 Jan 2025)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctAnswer": 0,
    "explanation": "The error is in subject-verb agreement in part (A). The subject 'she' is singular. In the past tense, the verb that agrees with a third-person singular subject is 'was'. The verb 'were' is used for plural subjects or in the subjunctive mood, which is not applicable here. The sentence should be '...that she was...'"
  },
  {
    "id": 11,
    "question": "Identify the sentence with INCORRECT use of article. (TSTET 08 Jan 2025)",
    "options": [
      "Twelve inches make a foot.",
      "A cow is an useful animal.",
      "He earns sixty thousand rupees a year.",
      "It is quite an interesting story."
    ],
    "correctAnswer": 1,
    "explanation": "The use of 'a' or 'an' is determined by the initial sound of the next word. The word 'useful' begins with a consonant 'y' sound (/ˈjuːsfʊl/), even though the first letter is a vowel. Therefore, the correct article is 'a,' not 'an'. The sentence should read, 'A cow is a useful animal.'"
  },
  {
    "id": 12,
    "question": "My brother and ______ are planning a trip from Hyderabad to Laknavaram. Choose the correct option to complete the sentence. (TSTET 08 Jan 2025)",
    "options": [
      "I",
      "we",
      "myself",
      "me"
    ],
    "correctAnswer": 0,
    "explanation": "The pronoun is part of the compound subject ('My brother and ___') of the verb 'are planning'. Therefore, a subject pronoun ('I') is required. 'Me' is an object pronoun, and 'myself' is a reflexive pronoun. A simple way to check is to remove the other part of the subject: 'I am planning a trip' is correct, whereas 'Me am planning a trip' is not."
  },
  {
    "id": 13,
    "question": "Varshini wanted to ______ the new dress. Fill in the blank with appropriate option. (TSTET 08 Jan 2025)",
    "options": [
      "try in",
      "try over",
      "try off",
      "try out"
    ],
    "correctAnswer": 3,
    "explanation": "The phrasal verb 'try out' means to test something to see how well it works or if you like it. While 'try on' is more common for clothing, 'try out' is the only option provided that fits the context of testing a new item."
  },
  {
    "id": 14,
    "question": "He brings her so much happiness. The word 'happiness' is a/an ______. (TSTET 08 Jan 2025)",
    "options": [
      "pronoun",
      "adjective",
      "noun",
      "adverb"
    ],
    "correctAnswer": 2,
    "explanation": "'Happiness' is the name of an emotion or a state of being. Words that name people, places, things, or ideas are nouns. In this sentence, 'happiness' is an abstract noun functioning as the direct object of the verb 'brings'."
  },
  {
    "id": 15,
    "question": "The book focuses on the pernicious effects of slavery. The meaning for the word 'pernicious' is ______. (TSTET 08 Jan 2025)",
    "options": [
      "adverse",
      "advantageous",
      "advance",
      "benevolent"
    ],
    "correctAnswer": 0,
    "explanation": "'Pernicious' means having a harmful effect, often in a subtle or gradual way. 'Adverse' also means harmful or unfavorable, making it the best synonym provided. 'Advantageous' (beneficial) and 'benevolent' (kindly) are antonyms."
  },
  {
    "id": 16,
    "question": "They have failed assessment of the advantages of establishing start-ups. The phrase 'assessment of' will be replaced by ______. (TSTET 08 Jan 2025)",
    "options": [
      "in assessment",
      "assess",
      "assessing to",
      "to assess"
    ],
    "correctAnswer": 3,
    "explanation": "The verb 'failed' is typically followed by a to-infinitive (to + verb) to indicate the action that was not successfully completed. The correct grammatical structure is 'failed to assess'. The other options are grammatically incorrect."
  },
  {
    "id": 17,
    "question": "Identify the silent consonant letter in the word 'bridge'. (TSTET 08 Jan 2025)",
    "options": [
      "b",
      "r",
      "d",
      "g"
    ],
    "correctAnswer": 2,
    "explanation": "In the pronunciation of 'bridge' (/brɪdʒ/), the letter 'd' is not sounded individually. It is part of the 'dg' combination that represents the /dʒ/ sound (like the 'j' in 'jam'). Because it doesn't have its own separate sound, it is considered silent."
  },
  {
    "id": 18,
    "question": "A caravan of ______. Fill in the blank with appropriate option. (TSTET 08 Jan 2025)",
    "options": [
      "cows",
      "camels",
      "horses",
      "donkeys"
    ],
    "correctAnswer": 1,
    "explanation": "'Caravan' is the specific collective noun used for a group of camels, especially when traveling together across a desert. The correct collective noun for cows is a 'herd'."
  },
  {
    "id": 19,
    "question": "Choose the meaningful sentence. (TSTET 08 Jan 2025)",
    "options": [
      "Better than a thousand days of diligent is one day with study a great teacher.",
      "Better than a thousand days is one day with of diligent study a great teacher.",
      "Better than a thousand days of diligent study is one day with a great teacher.",
      "Better than a thousand days a great teacher of diligent study is one day with."
    ],
    "correctAnswer": 2,
    "explanation": "This question tests correct sentence structure. Option 3 presents a well-formed and coherent sentence that makes a logical comparison. The other options have misplaced words and phrases, making them grammatically incorrect and nonsensical."
  },
  {
    "id": 20,
    "question": "Questions relevant to the context and responses. This is an indicator of the following discourse ______. (TSTET 08 Jan 2025)",
    "options": [
      "Narration",
      "Speech",
      "Interview",
      "Description"
    ],
    "correctAnswer": 2,
    "explanation": "An interview is characterized by a question-and-answer format where questions are directly related to a specific context, and the responses are expected to be relevant. This description is a core feature of an interview. 'Narration' is storytelling, and a 'Speech' is a formal talk."
  },
  {
    "id": 21,
    "question": "In this approach, words and their meanings are less important. (TSTET 08 Jan 2025)",
    "options": [
      "The Situational Approach",
      "The Communicative Approach",
      "The Structural Approach",
      "The Constructivist Approach"
    ],
    "correctAnswer": 2,
    "explanation": "The Structural Approach to language teaching focuses on mastering grammatical patterns and sentence structures. The primary belief is that once the structure is learned, vocabulary can be fitted into it. Therefore, in this approach, the grammatical structure is considered more important than the meaning of individual words."
  },
  {
    "id": 22,
    "question": "'Writing Brochures' is an example of ______. (TSTET 08 Jan 2025)",
    "options": [
      "persuasive writing.",
      "expository writing.",
      "descriptive writing.",
      "narrative writing."
    ],
    "correctAnswer": 0,
    "explanation": "A brochure is designed to convince the reader to take a specific action, such as buying a product, visiting a destination, or supporting a cause. This makes it a prime example of persuasive writing, which aims to influence the reader's thoughts or actions."
  },
  {
    "id": 23,
    "question": "The following one is NOT a subskill of Speaking. (TSTET 08 Jan 2025)",
    "options": [
      "Conveying ideas effectively and convincingly.",
      "Expressing attitudinal meaning through variation in pitch, pitch range and pause.",
      "Articulating stress patterns within words.",
      "Retrieving information stated in the passage."
    ],
    "correctAnswer": 3,
    "explanation": "Options 1, 2, and 3 are all integral components of effective speaking, related to fluency, prosody (intonation), and pronunciation. Option 4, 'Retrieving information stated in the passage,' is a fundamental skill of reading comprehension, not speaking."
  },
  {
    "id": 24,
    "question": "Teacher walks in the class and says, 'I am walking' and asks, 'What is the meaning of the word 'walk'?' This technique of teaching is known as ______. (TSTET 08 Jan 2025)",
    "options": [
      "Action Association",
      "Material Association",
      "Picture Association",
      "Mother tongue Association"
    ],
    "correctAnswer": 0,
    "explanation": "This teaching technique involves demonstrating the meaning of a word (a verb, in this case) by performing the corresponding action. The teacher physically walks to show what 'walking' means. This directly links the word to the action, hence it is called Action Association."
  },
  {
    "id": 25,
    "question": "Among the following, identify the authentic material. (TSTET 08 Jan 2025)",
    "options": [
      "Workbook",
      "Teacher notes",
      "Newspaper articles",
      "Textbook"
    ],
    "correctAnswer": 2,
    "explanation": "Authentic materials in language teaching are materials that were not created for educational purposes but for a real-world audience (i.e., native speakers). Newspaper articles are written for the general public, not specifically for language learners. In contrast, textbooks, workbooks, and teacher notes are all pedagogical materials designed for teaching."
  },
  {
    "id": 26,
    "question": "The Corporation will build a new bridge across the river Musi. Choose the appropriate transformation of the given sentence. (TSTET 09 Jan 2025)",
    "options": [
      "A new bridge along with the river Musi will be built by the Corporation.",
      "A new bridge across the river Musi was be built by the Corporation.",
      "A new bridge across the river Musi will built by the Corporation.",
      "A new bridge across the river Musi will be built by the Corporation."
    ],
    "correctAnswer": 3,
    "explanation": "The original sentence is in the Active Voice (Future Simple Tense: S + will + V1 + O). To convert it to the Passive Voice, the structure is: O + will be + V3 + by + S. The object 'A new bridge across the river Musi' becomes the subject, 'will build' changes to 'will be built', and the subject 'The Corporation' becomes the object of the preposition 'by'. Option 4 correctly follows this structure."
  },
  {
    "id": 27,
    "question": "Identify the part that contains an error in the sentence.\nHe didn't (A) / know nothing (B) / about the event. (C) / No error (D) (TSTET 09 Jan 2025)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctAnswer": 1,
    "explanation": "The sentence contains a double negative ('didn't' and 'nothing'), which is grammatically incorrect in standard English. To correct the sentence, one of the negatives must be changed. It should be either 'He didn't know anything about the event' or 'He knew nothing about the event'. The error lies in part (B)."
  },
  {
    "id": 28,
    "question": "She is now looking ______ a job. Choose the correct option to fill in the blank. (TSTET 09 Jan 2025)",
    "options": [
      "after",
      "about",
      "into",
      "for"
    ],
    "correctAnswer": 3,
    "explanation": "The phrasal verb 'to look for' means to search or seek. In the context of the sentence, the person is searching for a job. 'Look after' means to take care of, and 'look into' means to investigate. 'For' is the correct preposition."
  },
  {
    "id": 29,
    "question": "Ritesh said to me, \"Where will you go tomorrow?\" Identify the appropriate reported form of the given sentence. (TSTET 09 Jan 2025)",
    "options": [
      "Ritesh asked me where I will go tomorrow.",
      "Ritesh asked me where I would go the next day.",
      "Ritesh asked me where I would gone the next day.",
      "Ritesh asked me where I would go the previous day."
    ],
    "correctAnswer": 1,
    "explanation": "When converting a direct question to reported speech: the reporting verb 'said to' changes to 'asked'; the tense shifts from future simple ('will go') to its past form ('would go'); the pronoun 'you' changes to 'I'; and the time adverb 'tomorrow' changes to 'the next day'. Option 2 correctly applies all these rules."
  },
  {
    "id": 30,
    "question": "The king was forced to ______ a new constitution. Complete the sentence with the correct option. (TSTET 09 Jan 2025)",
    "options": [
      "adopt",
      "adept",
      "adapt",
      "allot"
    ],
    "correctAnswer": 0,
    "explanation": "'Adopt' means to formally accept or begin to use something. 'Adept' means skilled. 'Adapt' means to adjust to new conditions. In the context of a constitution, the correct verb is 'adopt'."
  },
  {
    "id": 31,
    "question": "Vikas has a propensity for getting into debt. Choose the meaning of the word 'propensity'. (TSTET 09 Jan 2025)",
    "options": [
      "aptitude",
      "aversion",
      "tendency",
      "ineptness"
    ],
    "correctAnswer": 2,
    "explanation": "The word 'propensity' refers to a natural inclination or tendency to behave in a particular way. Therefore, 'tendency' is a direct synonym. 'Aptitude' is ability, 'aversion' is dislike, and 'ineptness' is lack of skill."
  },
  {
    "id": 32,
    "question": "A person who can use the right and left hands equally well is known as ______. (TSTET 09 Jan 2025)",
    "options": [
      "ambivert",
      "ambidextrous",
      "dual hander",
      "ambitious"
    ],
    "correctAnswer": 1,
    "explanation": "'Ambidextrous' is the specific term for someone who is able to use both hands with equal ease and skill. The prefix 'ambi-' means 'both'."
  },
  {
    "id": 33,
    "question": "Action movies are a dime a dozen these days. The meaning of the idiomatic expression 'a dime a dozen' is ______. (TSTET 09 Jan 2025)",
    "options": [
      "rare.",
      "unique.",
      "unusual.",
      "common."
    ],
    "correctAnswer": 3,
    "explanation": "The idiom 'a dime a dozen' means that something is very common, easily obtained, and therefore of little value. 'Common' is the correct meaning."
  },
  {
    "id": 34,
    "question": "Choose the incorrectly spelt word. (TSTET 09 Jan 2025)",
    "options": [
      "Embarassment",
      "Accommodation",
      "Intelligent",
      "Acquaintance"
    ],
    "correctAnswer": 0,
    "explanation": "The correct spelling is 'Embarrassment', with a double 'r' and a double 's'. The word in the first option is missing the second 'r'."
  },
  {
    "id": 35,
    "question": "She worked hard and ______ all her obstacles through her will power. Choose the correct option to complete the sentence. (TSTET 09 Jan 2025)",
    "options": [
      "overcoming",
      "overcomes",
      "overcame",
      "comes over"
    ],
    "correctAnswer": 2,
    "explanation": "The sentence requires parallel structure. The first verb, 'worked', is in the simple past tense. Therefore, the second verb connected by 'and' should also be in the simple past tense, which is 'overcame'."
  },
  {
    "id": 36,
    "question": "Children are innate poets. Choose the meaning of the word 'innate'. (TSTET 09 Jan 2025)",
    "options": [
      "adventitious",
      "coincidental",
      "excellent",
      "natural"
    ],
    "correctAnswer": 3,
    "explanation": "The word 'innate' means inborn or existing from birth. 'Natural' is the closest synonym among the options, referring to a quality that someone is born with rather than one that is learned."
  },
  {
    "id": 37,
    "question": "Pick the correct sentence. (TSTET 09 Jan 2025)",
    "options": [
      "I can plays the violin very well.",
      "The teacher gave us a lot of homework.",
      "I didn't went to the concert.",
      "The books is on the table."
    ],
    "correctAnswer": 1,
    "explanation": "Option 2 is the only grammatically correct sentence. Option 1 is incorrect because the modal verb 'can' must be followed by the base form of the verb ('play'). Option 3 is incorrect as 'didn't' should be followed by the base form ('go'). Option 4 has a subject-verb agreement error; the plural subject 'books' requires the plural verb 'are'."
  },
  {
    "id": 38,
    "question": "Food was getting ______ during the drought. Fill in the blank with the appropriate option. (TSTET 09 Jan 2025)",
    "options": [
      "scarce",
      "abundant",
      "prolific",
      "ample"
    ],
    "correctAnswer": 0,
    "explanation": "A 'drought' leads to shortages. 'Scarce' means insufficient or in short supply, which accurately describes the availability of food during a drought. The other options mean plentiful."
  },
  {
    "id": 39,
    "question": "There is no tangible evidence to support her claim. Choose the opposite meaning of the word 'tangible'. (TSTET 09 Jan 2025)",
    "options": [
      "visible",
      "substantial",
      "inconsiderable",
      "vital"
    ],
    "correctAnswer": 2,
    "explanation": "'Tangible' means real, definite, or substantial. The opposite would be something insubstantial. 'Inconsiderable' means too small or unimportant to be considered, implying a lack of substance. It is the best antonym among the given choices."
  },
  {
    "id": 40,
    "question": "Identify the silent letter in the word 'Autumn'. (TSTET 09 Jan 2025)",
    "options": [
      "A",
      "t",
      "u",
      "n"
    ],
    "correctAnswer": 3,
    "explanation": "In the word 'Autumn' (pronounced /ˈɔːtəm/), the final letter 'n' is not pronounced. It is a common English spelling pattern where 'n' is silent after 'm' at the end of a word (e.g., hymn, column)."
  },
  {
    "id": 41,
    "question": "I met ______ European in the university yesterday. Choose the correct option. (TSTET 09 Jan 2025)",
    "options": [
      "an European",
      "a European",
      "an the European",
      "the European"
    ],
    "correctAnswer": 1,
    "explanation": "The use of 'a' or 'an' is determined by the initial sound of the following word. 'European' starts with a 'y' sound (/j/), which is a consonant sound, not a vowel sound. Therefore, the correct article is 'a'."
  },
  {
    "id": 42,
    "question": "It was Sunday, and we ______ to go out. Choose the appropriate option to complete the sentence. (TSTET 09 Jan 2025)",
    "options": [
      "plans",
      "has been planning",
      "planned",
      "will planned"
    ],
    "correctAnswer": 2,
    "explanation": "The first clause 'It was Sunday' establishes a past tense context. To maintain tense consistency, the verb in the second clause should also be in the simple past tense. The simple past form is 'planned'."
  },
  {
    "id": 43,
    "question": "Choose the meaningful sentence. (TSTET 09 Jan 2025)",
    "options": [
      "It is possible capital from outside for under developed economies to modernise themselves with very little.",
      "It is possible under developed economies to modernise for themselves with very little capital from outside.",
      "It is possible for under developed modernise themselves with very little capital from economies to outside.",
      "It is possible for under developed economies to modernise themselves with very little capital from outside."
    ],
    "correctAnswer": 3,
    "explanation": "Option 4 arranges the phrases in a logical and grammatically correct sequence to form a coherent sentence. The other options are jumbled and do not make sense."
  },
  {
    "id": 44,
    "question": "Identify the plural form among the following. (TSTET 09 Jan 2025)",
    "options": [
      "chick",
      "appendix",
      "alumni",
      "goose"
    ],
    "correctAnswer": 2,
    "explanation": "'Alumni' is the Latin plural of 'alumnus' (a male graduate) and is used for a group of graduates. 'Chick' (plural: chicks), 'appendix' (plural: appendices), and 'goose' (plural: geese) are singular forms."
  },
  {
    "id": 45,
    "question": "The following is a tool of formative assessment in English at Primary School level in Telangana State Board. (TSTET 09 Jan 2025)",
    "options": [
      "Generating questions",
      "Project work",
      "Recitation",
      "Review"
    ],
    "correctAnswer": 1,
    "explanation": "Formative assessment is an ongoing process that monitors learning. Project work is an excellent tool for this, as it allows teachers to assess various skills over time and provide continuous feedback. It is a key component of formative assessment in many modern curricula."
  },
  {
    "id": 46,
    "question": "A child on attaining 5 years of age is identified as a linguistic adult. A 'linguistic adult' means ______. (TSTET 09 Jan 2025)",
    "options": [
      "the child who is able to read and write on its own.",
      "the child who is able to express most of its needs orally without having to resort to crying.",
      "the child who is able to express most of its needs in written without having to resort to crying.",
      "the child who is able to read and write with the support of an adult."
    ],
    "correctAnswer": 1,
    "explanation": "In developmental linguistics, 'linguistic adult' refers to the stage where a child has acquired the fundamental grammar and vocabulary of their native language to communicate their needs effectively through speech, moving beyond pre-linguistic communication like crying. It primarily concerns oral proficiency, not literacy."
  },
  {
    "id": 47,
    "question": "Identify the Post-Reading activity in an English classroom teaching. (TSTET 09 Jan 2025)",
    "options": [
      "Individual Reading by the learners",
      "Interaction on Face sheet",
      "Discourse writing",
      "Collaborative Reading by the learners"
    ],
    "correctAnswer": 2,
    "explanation": "Classroom reading activities are structured in three phases: pre-reading, while-reading, and post-reading. 'Discourse writing' (e.g., summaries, character analysis, reviews) is a quintessential post-reading activity, as it requires students to reflect upon and respond to the text after they have finished reading it."
  },
  {
    "id": 48,
    "question": "The following method of teaching is known as 'Natural Method'. (TSTET 09 Jan 2025)",
    "options": [
      "Grammar Translation Method",
      "Direct Method",
      "Bilingual Method",
      "Structural Approach Method"
    ],
    "correctAnswer": 1,
    "explanation": "The Direct Method is also known as the 'Natural Method' because it aims to teach a second language in the same way a person learns their first language – naturally. It focuses on oral communication, forbids the use of the mother tongue in the classroom, and teaches grammar inductively."
  },
  {
    "id": 49,
    "question": "Identify the example of reading for pleasure. (TSTET 09 Jan 2025)",
    "options": [
      "Journals",
      "Research documents",
      "Instruction manuals",
      "Magazines"
    ],
    "correctAnswer": 3,
    "explanation": "Reading for pleasure (or extensive reading) is done for enjoyment without a specific academic or functional goal. While journals, research papers, and manuals are read for information (intensive reading), magazines are typically designed for entertainment and general interest, making them a common choice for pleasure reading."
  },
  {
    "id": 50,
    "question": "These words facilitate in locating the words in a dictionary. (TSTET 09 Jan 2025)",
    "options": [
      "Entry Words",
      "Source Words",
      "Guide Words",
      "Direction Words"
    ],
    "correctAnswer": 2,
    "explanation": "'Guide words' are the words printed at the top of a dictionary page that indicate the first and last entry words on that page. They serve as guides to help users find their desired word more quickly."
  },
  {
    "id": 51,
    "question": "Martin Luther King. Jr. started the American civil rights movement. Identify the correct option which best expresses in the given sentences. (TSTET 10 Jan 2025)",
    "options": [
      "The American civil rights movement was started by Martin Luther King Jr.",
      "The American civil rights movement has been started by Martin Luther King, Jr.",
      "The American civil rights movement was been started by Martin Luther King. Jr.",
      "The American civil rights movement started by Martin Luther King, Jr."
    ],
    "correctAnswer": 0,
    "explanation": "The original sentence is in the Active Voice and Simple Past tense ('started'). To change it to the Passive Voice, the structure is: Object + was/were + past participle (V3) + by + Subject. The object is 'The American civil rights movement', the past participle of 'start' is 'started', and the subject is 'Martin Luther King Jr.'. Therefore, the correct passive sentence is 'The American civil rights movement was started by Martin Luther King Jr.'."
  },
  {
    "id": 52,
    "question": "I have already ______ breakfast. Choose the correct option to complete. (TSTET 10 Jan 2025)",
    "options": [
      "eating",
      "eats",
      "eaten",
      "eat"
    ],
    "correctAnswer": 2,
    "explanation": "The sentence uses the Present Perfect tense, indicated by 'have already'. The structure for the Present Perfect tense is 'have/has + past participle (V3)'. The past participle of the verb 'eat' is 'eaten'."
  },
  {
    "id": 53,
    "question": "Choose the option with INCORRECT use of article. (TSTET 10 Jan 2025)",
    "options": [
      "She made an hourly visit to check on the patients.",
      "He bought an umbrella to protect himself from the heavy rain.",
      "He is reading an interesting book about history",
      "She dreams of attending an university in the United States."
    ],
    "correctAnswer": 3,
    "explanation": "The use of the article 'a' or 'an' depends on the sound of the following word, not its spelling. The word 'university' begins with a 'y' sound (/juːnɪˈvɜːrsəti/), which is a consonant sound. Therefore, the correct article to use is 'a', not 'an'. The other options are correct: 'an hourly' (h is silent), 'an umbrella' (starts with a vowel sound), and 'an interesting' (starts with a vowel sound)."
  },
  {
    "id": 54,
    "question": "The noise in the kitchen ______ me up. Choose the best option to complete the sentence. (TSTET 10 Jan 2025)",
    "options": [
      "woke",
      "awake",
      "awaken",
      "waking"
    ],
    "correctAnswer": 0,
    "explanation": "The sentence describes a completed action in the past. The correct phrasal verb is 'wake up'. The simple past tense of 'wake' is 'woke'. So, 'woke me up' is the correct phrase to complete the sentence."
  },
  {
    "id": 55,
    "question": "Identify the grammatically correct sentence. (TSTET 10 Jan 2025)",
    "options": [
      "He comes here daily, does he?",
      "I used to write stories, didn't I?",
      "Everything is settled, is it?",
      "No one can speak Telugu, can't they?"
    ],
    "correctAnswer": 1,
    "explanation": "A question tag is a short question at the end of a statement. If the statement is positive, the tag is usually negative, and vice versa. Option 2 is correct because for 'used to', the standard question tag is 'didn't'. Options 1, 3, and 4 are incorrect: 'He comes...' should be followed by 'doesn't he?', 'Everything is settled...' by 'isn't it?', and the negative statement 'No one can...' should be followed by a positive tag 'can they?'."
  },
  {
    "id": 56,
    "question": "There is a temple built ______ the bank of the river. Choose the most appropriate option to complete the sentence. (TSTET 10 Jan 2025)",
    "options": [
      "on",
      "through",
      "with",
      "above"
    ],
    "correctAnswer": 0,
    "explanation": "The correct preposition to indicate location on a surface or alongside a line (like a river bank or coast) is 'on'. Therefore, 'on the bank of the river' is the correct phrase."
  },
  {
    "id": 57,
    "question": "Pick the INCORRECTLY spelt word. (TSTET 10 Jan 2025)",
    "options": [
      "absorption",
      "alianation",
      "annexation",
      "annotation"
    ],
    "correctAnswer": 1,
    "explanation": "The word 'alianation' is spelled incorrectly. The correct spelling is 'alienation', which means the state of being isolated or estranged."
  },
  {
    "id": 58,
    "question": "The cricket match was ______ due to rain. Choose the correct option to complete the sentence. (TSTET 10 Jan 2025)",
    "options": [
      "called up",
      "called for",
      "called out",
      "called off"
    ],
    "correctAnswer": 3,
    "explanation": "This question tests knowledge of phrasal verbs. 'Called off' means to cancel an event. 'Called up' means to telephone or to conscript into the army. 'Called for' means required or demanded. 'Called out' means to shout or to ask someone to come to an emergency. In the context of a match being affected by rain, 'called off' (cancelled) is the correct choice."
  },
  {
    "id": 59,
    "question": "He spilled the beans during the interview. Identify the meaning of the idiomatic expression 'spilled the beans'. (TSTET 10 Jan 2025)",
    "options": [
      "spoken lies",
      "accidentally knocked over a cup of beans",
      "revealed a secret",
      "made a mistake"
    ],
    "correctAnswer": 2,
    "explanation": "The idiom 'to spill the beans' means to disclose a secret or reveal something prematurely, often unintentionally."
  },
  {
    "id": 60,
    "question": "Choose the meaningful sentence. (TSTET 10 Jan 2025)",
    "options": [
      "Proverbs are all rich in meaning and offer valuable life lessons about patience, determination, and making wise choices.",
      "Proverbs are about patience. determination, all rich in meaning and offer valuable life lessons and making choices wise.",
      "Proverbs are all in meaning, making rich wise choices about patience. determination and offer valuable life lessons.",
      "Proverbs are about patience, determination, and offer valuable life lessons and making wise choices all rich in meaning."
    ],
    "correctAnswer": 0,
    "explanation": "This question tests sentence structure and coherence. Option 1 is the only sentence that is grammatically correct and logically arranged. The other options have jumbled phrases and incorrect punctuation, making them confusing and meaningless."
  },
  {
    "id": 61,
    "question": "The ______ of the sunset over the ocean was absolutely stunning. Choose the correct option to complete the sentence. (TSTET 10 Jan 2025)",
    "options": [
      "cite",
      "site",
      "sight",
      "sate"
    ],
    "correctAnswer": 2,
    "explanation": "This question tests homophones. 'Cite' means to quote. 'Site' means a location. 'Sight' means something that is seen, a view. The sentence is describing the beautiful view of the sunset, so 'sight' is the correct word."
  },
  {
    "id": 62,
    "question": "I am sending a copy of the agreement for your perusal. Identify the antonym for the word 'perusal'. (TSTET 10 Jan 2025)",
    "options": [
      "Review",
      "Scrutiny",
      "Consideration",
      "Disregard"
    ],
    "correctAnswer": 3,
    "explanation": "'Perusal' means a careful reading or examination. 'Review', 'Scrutiny', and 'Consideration' are synonyms. The antonym, or opposite, would be to ignore or pay no attention to it. 'Disregard' is the most suitable antonym."
  },
  {
    "id": 63,
    "question": "'Where were you last Sunday?' said the father to his son. The sentence can be reported as: (TSTET 10 Jan 2025)",
    "options": [
      "The father asked his son where he had been in the last Sunday.",
      "The father asked his son where he had been the previous Sunday.",
      "The father asked his son where had he been the Sunday before.",
      "The father told his son where he had been to the last Sunday."
    ],
    "correctAnswer": 1,
    "explanation": "When converting a direct question to reported (indirect) speech, the verb tense shifts back (Simple Past 'were' becomes Past Perfect 'had been'), the question form changes to a statement form (word order 'he had been' not 'had he been'), and time indicators change ('last Sunday' becomes 'the previous Sunday' or 'the Sunday before'). Option 2 correctly applies all these rules."
  },
  {
    "id": 64,
    "question": "This movie is the ______ of all. Choose the correct option to complete the sentence. (TSTET 10 Jan 2025)",
    "options": [
      "most entertaining",
      "much entertaining",
      "more entertaining",
      "entertaining"
    ],
    "correctAnswer": 0,
    "explanation": "The phrase 'the ______ of all' indicates that the superlative degree of the adjective is required. For a long adjective like 'entertaining', the superlative is formed by adding 'most' before it. Therefore, 'most entertaining' is the correct form."
  },
  {
    "id": 65,
    "question": "The person ______ I was speaking to is my relative. Choose the correct option. (TSTET 10 Jan 2025)",
    "options": [
      "which",
      "whose",
      "whom",
      "whatsoever"
    ],
    "correctAnswer": 2,
    "explanation": "The relative pronoun needed here is the object of the preposition 'to'. 'Whom' is the objective case pronoun used for people. 'Who' is subjective, 'whose' is possessive, and 'which' is for things. The correct sentence would be 'The person to whom I was speaking...' or 'The person whom I was speaking to...'."
  },
  {
    "id": 66,
    "question": "Identify the silent letter in the word 'ballet'. (TSTET 10 Jan 2025)",
    "options": [
      "b",
      "a",
      "e",
      "t"
    ],
    "correctAnswer": 3,
    "explanation": "In the English pronunciation of the word 'ballet' (borrowed from French), the final 't' is silent. The word is pronounced as /ˈbæleɪ/."
  },
  {
    "id": 67,
    "question": "Identify the singular word from the following. (TSTET 10 Jan 2025)",
    "options": [
      "Feet",
      "News",
      "Bacteria",
      "Mice"
    ],
    "correctAnswer": 1,
    "explanation": "'Feet' is the plural of 'foot'. 'Bacteria' is the plural of 'bacterium'. 'Mice' is the plural of 'mouse'. 'News' is an uncountable noun that, despite ending in 's', is treated as singular (e.g., 'The news is on at 6')."
  },
  {
    "id": 68,
    "question": "Identify the grammatically correct sentence. (TSTET 10 Jan 2025)",
    "options": [
      "We haven't no time to waste.",
      "I have seen her yesterday.",
      "He and I went to the school.",
      "I am more taller than you."
    ],
    "correctAnswer": 2,
    "explanation": "Option 1 has a double negative ('haven't no'). Option 2 incorrectly uses the Present Perfect ('have seen') with a specific past time indicator ('yesterday'); it should be Simple Past ('I saw'). Option 4 uses a double comparative ('more taller'); it should just be 'taller'. Option 3 is grammatically correct with the proper pronoun order ('He and I') and verb tense."
  },
  {
    "id": 69,
    "question": "Can you help me with this project? This sentence is a/an ______. (TSTET 10 Jan 2025)",
    "options": [
      "interrogative.",
      "declarative.",
      "imperative.",
      "exclamatory."
    ],
    "correctAnswer": 0,
    "explanation": "A sentence that asks a question and ends with a question mark is an interrogative sentence. A declarative sentence makes a statement, an imperative sentence gives a command, and an exclamatory sentence expresses strong emotion."
  },
  {
    "id": 70,
    "question": "The best known advocate of the spiral curriculum is ______. (TSTET 10 Jan 2025)",
    "options": [
      "Will Smith",
      "Harry Giles",
      "Jerome Bruner",
      "Stanley Haughton"
    ],
    "correctAnswer": 2,
    "explanation": "The concept of the spiral curriculum, where key concepts are presented repeatedly throughout the curriculum but with deepening layers of complexity, is most famously associated with the American psychologist and educational theorist Jerome Bruner."
  },
  {
    "id": 71,
    "question": "Arrange the stages of producing syllabus in a sequence.\nA) Learner description and needs\nB) Evaluating the course and learners\nC) Formulation of objectives\nD) Suggesting teaching strategies\nE) Deciding on course contents\nChoose the correct option. (TSTET 10 Jan 2025)",
    "options": [
      "A, C, E, D, B",
      "A, E, C, D, B",
      "A, D, E, C, B",
      "A, C, B, D, E"
    ],
    "correctAnswer": 0,
    "explanation": "The logical sequence for syllabus design is: First, identify the learners and their needs (A). Based on these needs, formulate the learning objectives (C). Then, decide on the course content that will help achieve these objectives (E). Next, suggest appropriate teaching strategies to deliver the content (D). Finally, evaluate the effectiveness of the course and the learners' progress (B)."
  },
  {
    "id": 72,
    "question": "The benefit of including pictures in a language textbook is ______. (TSTET 10 Jan 2025)",
    "options": [
      "They make learning less interactive.",
      "They are only source of entertainment.",
      "They make learning more engaging and contextualize language.",
      "They distract the learners from the text."
    ],
    "correctAnswer": 2,
    "explanation": "Pictures and illustrations in textbooks serve a pedagogical purpose. They make the content more appealing and engaging, help to clarify meaning, provide context for the language being learned, and can stimulate discussion, thereby aiding comprehension and retention."
  },
  {
    "id": 73,
    "question": "The teaching method introduced by Michel West was known as ______. (TSTET 10 Jan 2025)",
    "options": [
      "The Speaking Method",
      "The Word Method",
      "The Writing Method",
      "The Reading Method"
    ],
    "correctAnswer": 3,
    "explanation": "Michael West's 'New Method', developed in the early 20th century, prioritized the development of reading skills in a foreign language as the most practical and achievable goal for many learners. It is therefore also known as The Reading Method."
  },
  {
    "id": 74,
    "question": "Improving fluency in speaking can be achieved by ______. (TSTET 10 Jan 2025)",
    "options": [
      "practicing speaking with a strong voice.",
      "focusing primarily on grammatical correctness.",
      "making use of more complex vocabulary.",
      "speaking naturally, without the fear of making mistakes."
    ],
    "correctAnswer": 3,
    "explanation": "Fluency is the ability to speak smoothly and continuously. While accuracy is also important, an over-emphasis on correctness can make a speaker hesitant. Fluency is best developed through practice in a low-anxiety environment where the focus is on communication and expressing oneself naturally, even if it involves making some errors."
  },
  {
    "id": 75,
    "question": "Pick the method of teaching a foreign language in which the teacher asks the students to do something in the foreign language, and they must react with a body movement or action. (TSTET 10 Jan 2025)",
    "options": [
      "Total Practical Response",
      "Total Physical Reaction",
      "Total Physical Response",
      "Target Physical Response"
    ],
    "correctAnswer": 2,
    "explanation": "This describes the 'Total Physical Response' (TPR) method, developed by James Asher. It is based on the coordination of language and physical movement. In TPR, instructors give commands to students in the target language, and students respond with whole-body actions."
  },
  {
    "id": 76,
    "question": "Sameer never minds ______ the deserving persons. Choose the correct option to complete the sentence. (TSTET 18 Jan 2025)",
    "options": [
      "helping",
      "in helping",
      "helps",
      "to help"
    ],
    "correctAnswer": 0,
    "explanation": "The verb 'mind' is a catenative verb that is always followed by a gerund (the -ing form of a verb). Therefore, 'helping' is the grammatically correct choice to complete the sentence."
  },
  {
    "id": 77,
    "question": "Vishal is very sensitive. He always shows sympathy for people who are suffering. He is ______. Choose the correct option to complete the sentence. (TSTET 18 Jan 2025)",
    "options": [
      "meticulous",
      "compassionate",
      "placid",
      "extrovert"
    ],
    "correctAnswer": 1,
    "explanation": "The sentence describes Vishal as someone who shows sympathy for suffering people. The word 'compassionate' means feeling or showing sympathy and concern for others, which perfectly fits the description. 'Meticulous' means very careful and precise. 'Placid' means calm and peaceful. 'Extrovert' means an outgoing, sociable person."
  },
  {
    "id": 78,
    "question": "Identify the error part of the sentence.\nThe students (A) / along with the teacher (B) / was (C) / laughing at the joke. (D)\n(TSTET 18 Jan 2025)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctAnswer": 2,
    "explanation": "According to the rule of subject-verb agreement, when a subject is joined by phrases like 'along with', 'as well as', or 'in addition to', the verb must agree with the main subject. In this sentence, the main subject is 'The students' (plural). Therefore, the singular verb 'was' should be the plural verb 'were'. The error is in part (C)."
  },
  {
    "id": 79,
    "question": "Choose the grammatically correct sentence. (TSTET 18 Jan 2025)",
    "options": [
      "The childrens are the future of a nation.",
      "India has large reserve of the iron ore.",
      "The world is the happiest place.",
      "Tagore was the great poet."
    ],
    "correctAnswer": 2,
    "explanation": "Sentence 1 is incorrect because the plural of 'child' is 'children', not 'childrens'. Sentence 2 is incorrect; it should be 'India has large reserves of iron ore'. Sentence 4 is incorrect; it should be 'Tagore was a great poet'. Sentence 3, 'The world is the happiest place,' is grammatically correct, properly using the superlative form with the definite article 'the'."
  },
  {
    "id": 80,
    "question": "He presented a gift to her. Change the sentence into passive voice. (TSTET 18 Jan 2025)",
    "options": [
      "A gift is presented to him by her.",
      "A gift will be presented to her by him.",
      "A gift has been present to her by him.",
      "A gift was presented to her by him."
    ],
    "correctAnswer": 3,
    "explanation": "The original sentence is in the simple past tense (verb: presented). To change it to the passive voice, the object ('a gift') becomes the subject. The passive verb form for the simple past tense is 'was/were + past participle'. Thus, 'presented' becomes 'was presented'. The original subject ('He') becomes the object of the preposition 'by' ('by him'). Therefore, the correct passive form is 'A gift was presented to her by him.'"
  },
  {
    "id": 81,
    "question": "He walked slowly back to the kitchen. The word 'slowly' is an ______. (TSTET 18 Jan 2025)",
    "options": [
      "Adverb of Time",
      "Adverb of Manner",
      "Adverb of Reason",
      "Adverb of Quality"
    ],
    "correctAnswer": 1,
    "explanation": "The word 'slowly' describes the manner in which the action (walked) was performed. Adverbs that answer the question 'How?' are known as adverbs of manner. Therefore, 'slowly' is an Adverb of Manner."
  },
  {
    "id": 82,
    "question": "Choose the meaningful sentence. (TSTET 18 Jan 2025)",
    "options": [
      "The beautiful thing about learning is that no one can take it away from you.",
      "The beautiful thing it about learning is that no one can it take away from you.",
      "The beautiful thing that about learning is no one can take it away from you.",
      "The beautiful thing about can learning is that no one take it away from you."
    ],
    "correctAnswer": 0,
    "explanation": "Option 1 is the only sentence with the correct grammatical structure and word order. The other options contain errors: Option 2 incorrectly adds 'it' twice. Option 3 incorrectly uses 'that' and omits a necessary conjunction. Option 4 incorrectly inserts 'can' before 'learning'."
  },
  {
    "id": 83,
    "question": "The bus was late ______ thirty minutes. Choose the correct option to complete the sentence. (TSTET 18 Jan 2025)",
    "options": [
      "from",
      "in",
      "by",
      "with"
    ],
    "correctAnswer": 2,
    "explanation": "The preposition 'by' is used to indicate the margin or amount of something. In this context, it specifies the duration for which the bus was late. 'Late by thirty minutes' is the correct and standard expression."
  },
  {
    "id": 84,
    "question": "Old habits die ______. Choose the correct option to complete the sentence. (TSTET 18 Jan 2025)",
    "options": [
      "much hardly",
      "hard",
      "too hard",
      "hardly"
    ],
    "correctAnswer": 1,
    "explanation": "'Old habits die hard' is an established English idiom meaning that it is difficult to change long-standing behaviors. In this phrase, 'hard' functions as an adverb meaning 'with difficulty'. 'Hardly' means 'almost not at all' and would alter the intended meaning."
  },
  {
    "id": 85,
    "question": "The boy said to me, 'Please give me something to eat.' Change the sentence into reported speech. (TSTET 18 Jan 2025)",
    "options": [
      "The boy requested me to give me something to eat.",
      "The boy requested me to give him something to be eaten.",
      "The boy requests me to give him something to eat.",
      "The boy requested me to give him something to eat."
    ],
    "correctAnswer": 3,
    "explanation": "In converting a polite request to reported speech, the reporting verb 'said to' changes to 'requested'. The direct speech is replaced by an infinitive ('to' + verb). The first-person pronoun 'me' changes to the third-person pronoun 'him' to refer to 'the boy'. Since the reporting verb 'said' is in the past tense, the transformed verb should also be in the past ('requested')."
  },
  {
    "id": 86,
    "question": "The person who walks in sleep is called a ______. (TSTET 18 Jan 2025)",
    "options": [
      "credulous",
      "somniloquist",
      "connoisseur",
      "somnambulist"
    ],
    "correctAnswer": 3,
    "explanation": "The word 'somnambulist' is derived from the Latin words 'somnus' (sleep) and 'ambulare' (to walk), and it specifically refers to a sleepwalker. A 'somniloquist' is someone who talks in their sleep."
  },
  {
    "id": 87,
    "question": "You cannot question the officer's veracity. The word 'veracity' means ______. (TSTET 18 Jan 2025)",
    "options": [
      "honesty.",
      "hard work.",
      "deception.",
      "dedication."
    ],
    "correctAnswer": 0,
    "explanation": "The word 'veracity' means truthfulness, accuracy, or conformity to facts. Among the given options, 'honesty' is the closest synonym. 'Deception' is its antonym."
  },
  {
    "id": 88,
    "question": "The two men had become steadfast friends. Choose the correct antonym for the word 'steadfast'. (TSTET 18 Jan 2025)",
    "options": [
      "devoted",
      "stable",
      "unreliable",
      "dutiful"
    ],
    "correctAnswer": 2,
    "explanation": "'Steadfast' means resolutely or dutifully firm and unwavering. The opposite of being firm and loyal is being 'unreliable'. 'Devoted', 'stable', and 'dutiful' are all synonyms or related in meaning to steadfast."
  },
  {
    "id": 89,
    "question": "Rakesh is so much concerned about helping others instead of feathering his own nest. Choose the meaning of the idiomatic expression 'feathering his own nest'. (TSTET 18 Jan 2025)",
    "options": [
      "decorating his own house",
      "caring for all selflessly",
      "helping others to become rich",
      "making himself rich"
    ],
    "correctAnswer": 3,
    "explanation": "The idiom 'to feather one's own nest' means to enrich oneself, often by taking advantage of a position or opportunity in a selfish or dishonest way. The sentence structure contrasts this selfish act with the selfless act of 'helping others'."
  },
  {
    "id": 90,
    "question": "Choose the correctly spelt word. (TSTET 18 Jan 2025)",
    "options": [
      "circumstanses",
      "defendent",
      "consiegnment"
    ],
    "correctAnswer": -1,
    "explanation": "This question is flawed as presented in the source document, which only provides three options, all of which are misspelled. The correct spellings are 'circumstances', 'defendant', and 'consignment'. A fourth, correctly spelled option appears to be missing from the test paper."
  },
  {
    "id": 91,
    "question": "The ______ falls on the middle syllable. Choose the correct option to complete the sentence. (TSTET 18 Jan 2025)",
    "options": [
      "assent",
      "ascent",
      "accent",
      "actant"
    ],
    "correctAnswer": 2,
    "explanation": "In phonetics, 'accent' refers to the stress or emphasis placed on a particular syllable in a word. The other words are not relevant to this context. 'Assent' means agreement, and 'ascent' means the act of climbing up."
  },
  {
    "id": 92,
    "question": "Identify the word without silent letter. (TSTET 18 Jan 2025)",
    "options": [
      "crescent",
      "panorama",
      "Wednesday",
      "breathe"
    ],
    "correctAnswer": 1,
    "explanation": "In 'crescent', the 'c' is silent. In 'Wednesday', the 'd' is silent. In 'breathe', the final 'e' is silent (it serves to lengthen the preceding vowel sound). In the word 'panorama' (pa-no-ra-ma), all letters are pronounced, so it contains no silent letters."
  },
  {
    "id": 93,
    "question": "Choose the option that contains correct plural form. (TSTET 18 Jan 2025)",
    "options": [
      "Commanders-in-chief",
      "Commanders-in-chiefs",
      "Commander-in-chiefs",
      "Commander-in-chief"
    ],
    "correctAnswer": 0,
    "explanation": "For compound nouns formed with a noun followed by a prepositional phrase, the plural is typically formed by adding 's' to the principal noun. In 'commander-in-chief', the principal noun is 'commander'. Therefore, the correct plural form is 'Commanders-in-chief'."
  },
  {
    "id": 94,
    "question": "The Indus Valley Civilization is one of the oldest civilizations in the world. Choose the correct transformation of the sentence. (TSTET 18 Jan 2025)",
    "options": [
      "The Indus Valley Civilization is older to many other civilizations in the world.",
      "Most other civilizations in the world are as old as Indus Valley Civilization.",
      "The Indus Valley Civilization is old than most other civilizations in the world.",
      "The Indus Valley Civilization is older than most other civilizations in the world."
    ],
    "correctAnswer": 3,
    "explanation": "The original sentence uses the superlative degree ('one of the oldest'). To transform it to the comparative degree, the correct structure is 'Subject + verb + comparative adjective (older) + than most other + plural noun'. Option 4 correctly follows this pattern and maintains the original meaning that while it is extremely old, it is not necessarily the single oldest."
  },
  {
    "id": 95,
    "question": "English subject was introduced as a Second Language from 1st Class in Telangana Board Schools from this Academic Year. (TSTET 18 Jan 2025)",
    "options": [
      "2014-15",
      "2012-13",
      "2015-16",
      "2011-12"
    ],
    "correctAnswer": 0,
    "explanation": "After the formation of the state of Telangana in June 2014, the government implemented several educational reforms. The introduction of English as a second language from Class 1 in government schools was a key initiative that began in the first academic year post-formation, which was 2014-15."
  },
  {
    "id": 96,
    "question": "A 'General Service List of English Words' is ______. (TSTET 18 Jan 2025)",
    "options": [
      "the simplest words of English extracted from a corpus of written text.",
      "the most frequent words of English extracted from a corpus of written text.",
      "the most frequent words of English extracted from a corpus of oral conversations.",
      "the most rarely used words of English extracted from a corpus of written text."
    ],
    "correctAnswer": 1,
    "explanation": "The General Service List (GSL), developed by Michael West, is a list of approximately 2,000 English words selected based on their high frequency of use in a large corpus of written materials. The principle is that these words provide the most 'service' or utility for language learners."
  },
  {
    "id": 97,
    "question": "The Regional Institute of English South India is located in ______. (TSTET 18 Jan 2025)",
    "options": [
      "Hyderabad",
      "Chennai",
      "Vishakhapatnam",
      "Bengaluru"
    ],
    "correctAnswer": 3,
    "explanation": "The Regional Institute of English, South India (RIESI) is an autonomous body established by the Government of India to improve English language education in the southern states. Its campus is located in Jnanabharathi, Bengaluru (Bangalore), Karnataka."
  },
  {
    "id": 98,
    "question": "In English language teaching the S-O-S approach refers to ______. (TSTET 18 Jan 2025)",
    "options": [
      "The Simple-Oral-Situational approach",
      "The Situational-Oral-Situational approach",
      "The Structural-Oral-Situational approach",
      "The Structural-Oral-Spiral approach"
    ],
    "correctAnswer": 2,
    "explanation": "The S-O-S approach is a well-known methodology in English Language Teaching (ELT) that stands for the Structural-Oral-Situational approach. It emphasizes teaching language patterns and grammar (Structural) through listening and speaking (Oral) within a meaningful context (Situational)."
  },
  {
    "id": 99,
    "question": "Pick the correct statement about Continuous Comprehensive Evaluation (CCE). (TSTET 18 Jan 2025)",
    "options": [
      "It is a state-level assessment",
      "It is a school-based assessment",
      "It is a national level assessment",
      "It is a competitive assessment"
    ],
    "correctAnswer": 1,
    "explanation": "A fundamental feature of Continuous and Comprehensive Evaluation (CCE) is that it is a school-based system of assessment. It is conducted by the students' own teachers over the entire academic session, covering both scholastic and co-scholastic aspects, as opposed to a centralized state or national-level examination."
  },
  {
    "id": 100,
    "question": "'Mechanics' of language in speaking skills does NOT include the following. (TSTET 18 Jan 2025)",
    "options": [
      "pronunciation",
      "grammar",
      "spelling",
      "vocabulary"
    ],
    "correctAnswer": 2,
    "explanation": "The 'mechanics' of speaking refer to the foundational components needed to produce intelligible speech. These include pronunciation (how sounds are articulated), grammar (how sentences are structured), and vocabulary (the choice of words). Spelling relates to the written representation of language and is therefore a mechanic of writing, not speaking."
  },
  {
    "id": 101,
    "question": "Choose the correct sentence. (TSTET 8 Jan 2025)",
    "options": [
      "Rakesh is a sincere boy nevertheless his teachers appreciate him.",
      "Rakesh is a sincere boy but even his teachers appreciate him.",
      "Rakesh is a sincere boy how even his teachers appreciate him.",
      "Rakesh is a sincere boy so his teachers appreciate him."
    ],
    "correctAnswer": 3,
    "explanation": "The sentence describes a cause-and-effect relationship. Rakesh being sincere is the cause, and his teachers appreciating him is the effect. The conjunction 'so' correctly expresses this relationship of result or consequence. The other conjunctions ('nevertheless', 'but') show contrast, which is inappropriate here."
  },
  {
    "id": 102,
    "question": "William Shakespeare was greater than ______ English writer. Choose the correct option to complete the sentence. (TSTET 8 Jan 2025)",
    "options": [
      "all the other",
      "the other",
      "any other",
      "all other"
    ],
    "correctAnswer": 2,
    "explanation": "When comparing one member of a group (William Shakespeare) with all other members of the same group (English writers), the phrase 'any other' is used to correctly exclude the subject from the group it is being compared to. This ensures a logical comparison."
  },
  {
    "id": 103,
    "question": "Identify the part that contains an error in the sentence.\nI won't pay (A)/ it unless (B)/ he send me (C)/ the bill again. (D) (TSTET 8 Jan 2025)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctAnswer": 2,
    "explanation": "The error is in part (C). The subject 'he' is a third-person singular pronoun. In the simple present tense, the verb must agree with the subject, so 'send' should be 'sends'. The correct sentence is 'I won't pay it unless he sends me the bill again.'"
  },
  {
    "id": 104,
    "question": "Everyone was ______ tears at the climax of 'Balagam' movie. Choose the correct option to complete the sentence. (TSTET 8 Jan 2025)",
    "options": [
      "moved to",
      "moved in",
      "moved off",
      "moved for"
    ],
    "correctAnswer": 0,
    "explanation": "The phrasal verb 'moved to tears' means to be so emotionally affected by something that you begin to cry. This fits the context of watching an emotional movie climax perfectly. The other options do not form a correct or meaningful phrasal verb in this context."
  },
  {
    "id": 105,
    "question": "The company rejected their competitor's ______ for a buyout. Choose the correct option to complete the sentence. (TSTET 8 Jan 2025)",
    "options": [
      "propagation",
      "preservation",
      "preposition",
      "proposition"
    ],
    "correctAnswer": 3,
    "explanation": "A 'proposition' is a formal offer or suggestion, such as an offer to buy out a company. 'Propagation' means spreading or promoting. 'Preservation' means keeping something safe. 'Preposition' is a grammatical term. 'Proposition' is the only word that makes sense in this business context."
  },
  {
    "id": 106,
    "question": "I'm going to hit the sack. I'm exhausted. Pick the meaning for the idiom 'to hit the sack'. (TSTET 8 Jan 2025)",
    "options": [
      "to play a sport",
      "to have a snack",
      "to go to sleep",
      "to hit something physically"
    ],
    "correctAnswer": 2,
    "explanation": "The idiom 'to hit the sack' (or 'hit the hay') is an informal expression that means to go to bed or go to sleep. The context clue 'I'm exhausted' further supports this meaning."
  },
  {
    "id": 107,
    "question": "Choose the correctly spelt word. (TSTET 8 Jan 2025)",
    "options": [
      "susceptable",
      "sucseptible",
      "suscepteble",
      "susceptible"
    ],
    "correctAnswer": 3,
    "explanation": "The correct spelling of the word, which means likely to be influenced or harmed by a particular thing, is 'susceptible'."
  },
  {
    "id": 108,
    "question": "Let's do that, ______? Choose the correct option to complete the sentence. (TSTET 8 Jan 2025)",
    "options": [
      "shall we",
      "should we",
      "will we",
      "could we"
    ],
    "correctAnswer": 0,
    "explanation": "For suggestions that start with 'Let's' (Let us), the standard question tag is 'shall we?'. This is a fixed grammatical rule for forming question tags with such imperative sentences."
  },
  {
    "id": 109,
    "question": "Classical music is worth ______. Fill in the blank with the appropriate option. (TSTET 8 Jan 2025)",
    "options": [
      "to listen to",
      "to listen",
      "to listening to",
      "listening to"
    ],
    "correctAnswer": 3,
    "explanation": "The structure 'worth + gerund (verb-ing)' is used to say that something is enjoyable or useful. Therefore, 'worth listening to' is the grammatically correct form. The preposition 'to' is required as part of the phrasal verb 'listen to'."
  },
  {
    "id": 110,
    "question": "The headmaster was addressing the students. The sentence can also be expressed as: (TSTET 8 Jan 2025)",
    "options": [
      "The students had been addressed by the headmaster.",
      "The students have been addressed by the headmaster.",
      "The students were being addressed by the headmaster.",
      "The students was being addressed by the headmaster."
    ],
    "correctAnswer": 2,
    "explanation": "The original sentence is in the Past Continuous tense (was addressing). To change it to the passive voice, the structure 'was/were + being + past participle' is used. Since 'The students' is a plural subject, the correct passive form is 'were being addressed by the headmaster'."
  },
  {
    "id": 111,
    "question": "The class teacher said to Ravi, \"I want to meet your parents\". Identify the reported form of the given sentence. (TSTET 8 Jan 2025)",
    "options": [
      "The class teacher told Ravi that she want to meet his parents.",
      "The class teacher told Ravi that she wanted to meet his parents.",
      "The class teacher told Ravi that she will want to meet their parents.",
      "The class teacher told Ravi that she had wanted to meet his parents."
    ],
    "correctAnswer": 1,
    "explanation": "In reported speech, 'said to' changes to 'told'. The present tense verb 'want' changes to its corresponding past tense 'wanted'. The pronoun 'I' changes to 'she' (referring to the teacher), and 'your' changes to 'his' (referring to Ravi)."
  },
  {
    "id": 112,
    "question": "A big meal always makes me feel lethargic and sleepy. Choose the antonym for the word 'lethargic'. (TSTET 8 Jan 2025)",
    "options": [
      "vivacious",
      "dull",
      "torpid",
      "sluggish"
    ],
    "correctAnswer": 0,
    "explanation": "'Lethargic' means lacking energy or sluggish. An antonym is a word with the opposite meaning. 'Vivacious' means attractively lively and animated. 'Dull', 'torpid', and 'sluggish' are synonyms of lethargic."
  },
  {
    "id": 113,
    "question": "In a formal letter, 'Yours sincerely' is (TSTET 8 Jan 2025)",
    "options": [
      "the communication",
      "the salutation",
      "the subscription",
      "the superscription"
    ],
    "correctAnswer": 2,
    "explanation": "In formal letter writing, the closing part, such as 'Yours sincerely' or 'Yours faithfully', is known as the 'subscription' or complimentary close. The 'salutation' is the greeting (e.g., Dear Sir). The 'superscription' is the address on the envelope."
  },
  {
    "id": 114,
    "question": "A person, especially a young one, with exceptional abilities. Choose the option that can be substituted for the given sentence. (TSTET 8 Jan 2025)",
    "options": [
      "wizard",
      "intellectual",
      "creative",
      "prodigy"
    ],
    "correctAnswer": 3,
    "explanation": "A 'prodigy' is a young person with exceptional qualities or abilities. A 'wizard' is a man with magical powers. An 'intellectual' is a person who engages in critical study, thought, and reflection. 'Creative' is an adjective describing someone with imagination."
  },
  {
    "id": 115,
    "question": "I want Suneel to be the in charge of the office ______ I get back from vacation. Choose the correct option to fill in the blank. (TSTET 8 Jan 2025)",
    "options": [
      "so that",
      "until",
      "while",
      "but"
    ],
    "correctAnswer": 2,
    "explanation": "The sentence expresses a duration of time. 'While' means during the time that something is happening. Suneel will be in charge during the period the speaker is on vacation. 'Until' implies a point in time, and 'so that' indicates purpose, which don't fit as well. 'But' indicates contrast."
  },
  {
    "id": 116,
    "question": "Arrange the parts of sentence in sequence.\n(P) Since the world has\n(Q) there has been an increase\n(R) in the number of species\n(S) become industrialized,\n(T) or are nearing extinction.\n(U) that have either become extinct\nChoose the correct option (TSTET 8 Jan 2025)",
    "options": [
      "P, S, R, U, Q, T",
      "P, S, Q, U, R, T",
      "P, S, U, R, Q, T",
      "P, S, Q, R, U, T"
    ],
    "correctAnswer": 3,
    "explanation": "The logical sequence to form a coherent sentence is: (P) 'Since the world has' is followed by (S) 'become industrialized,'. This clause gives the reason. The main clause follows: (Q) 'there has been an increase' (R) 'in the number of species' (U) 'that have either become extinct' (T) 'or are nearing extinction.' The correct order is P, S, Q, R, U, T."
  },
  {
    "id": 117,
    "question": "A list of the books and articles that have been used by someone when writing a particular book or article is called (TSTET 8 Jan 2025)",
    "options": [
      "Bibliography.",
      "Index.",
      "Catalogue.",
      "Appendix."
    ],
    "correctAnswer": 0,
    "explanation": "A 'Bibliography' is a list of all the sources you have consulted in preparing your work, usually found at the end of a book or article. An 'Index' is an alphabetical list of names and topics with references to the pages on which they are mentioned. An 'Appendix' contains supplementary material at the end of a book."
  },
  {
    "id": 118,
    "question": "The moon landing is a ______ in space exploration. Choose the correct option to fill in the blank. (TSTET 8 Jan 2025)",
    "options": [
      "null",
      "casual",
      "landmark",
      "insignificant"
    ],
    "correctAnswer": 2,
    "explanation": "A 'landmark' is an event or discovery marking an important stage or turning point in something. The moon landing was a major, significant event in the history of space exploration. The other words ('null', 'casual', 'insignificant') have opposite or irrelevant meanings."
  },
  {
    "id": 119,
    "question": "In this word, 'b' is NOT a silent letter (TSTET 8 Jan 2025)",
    "options": [
      "thumb",
      "debate",
      "lamb",
      "subtle"
    ],
    "correctAnswer": 1,
    "explanation": "In 'thumb', 'lamb', and 'subtle', the letter 'b' is silent and not pronounced. In the word 'debate', the 'b' is pronounced as part of the second syllable. Therefore, it is not a silent letter in 'debate'."
  },
  {
    "id": 120,
    "question": "A teacher uses lessons from Social and Science to teach English. This approach is known as (TSTET 8 Jan 2025)",
    "options": [
      "Language for all subjects.",
      "Curriculum across language.",
      "Language across curriculum.",
      "Language within the curriculum."
    ],
    "correctAnswer": 2,
    "explanation": "Language Across the Curriculum (LAC) is an approach that emphasizes the role of language in all subject areas. It involves using content from other subjects (like Social Studies and Science) to teach language skills (like English), recognizing that language development is the responsibility of all teachers."
  },
  {
    "id": 121,
    "question": "The required activities or tasks of the test are appropriate for the measurement and evaluation'. This validity of a test is called (TSTET 8 Jan 2025)",
    "options": [
      "Face validity",
      "Construct validity",
      "Operational validity",
      "Factoral validity"
    ],
    "correctAnswer": 0,
    "explanation": "Face validity refers to the extent to which a test appears to measure what it is intended to measure, from the perspective of the test takers. It's about whether the test 'looks like' it's a valid measure of the concept. The statement describes this superficial appropriateness of the test's activities."
  },
  {
    "id": 122,
    "question": "In the beginning of the lesson, learners come out with their perception of a picture, a quotation or a poem. This is a learning outcome of the following teaching component (TSTET 8 Jan 2025)",
    "options": [
      "Reading",
      "Face sheet",
      "Vocabulary",
      "Grammar"
    ],
    "correctAnswer": 1,
    "explanation": "A 'Face sheet' in a lesson plan is the introductory part. It often includes activities like showing a picture, a quote, or a short poem to activate prior knowledge, generate interest, and set the context for the lesson. Having learners share their perceptions is a typical face sheet activity."
  },
  {
    "id": 123,
    "question": "Language acquisition is a (TSTET 8 Jan 2025)",
    "options": [
      "conscious process.",
      "formal process.",
      "artificial process.",
      "unconscious process."
    ],
    "correctAnswer": 3,
    "explanation": "Language acquisition is the natural, subconscious process of learning a language, typically one's first language, through immersion and interaction without formal instruction. This contrasts with language learning, which is a conscious, formal, and deliberate process."
  },
  {
    "id": 124,
    "question": "Identify the oral discourse among the following. (TSTET 8 Jan 2025)",
    "options": [
      "essay",
      "profile",
      "compeering",
      "letter"
    ],
    "correctAnswer": 2,
    "explanation": "Oral discourse refers to spoken communication. 'Compeering' (also known as hosting or being an emcee) is the act of introducing performers or speakers at an event, which is an oral activity. 'Essay', 'profile', and 'letter' are forms of written discourse."
  },
  {
    "id": 125,
    "question": "Identify the example for 'Survival purpose of reading'. (TSTET 8 Jan 2025)",
    "options": [
      "Novels",
      "Textbooks",
      "Property documents",
      "Advertisements"
    ],
    "correctAnswer": 3,
    "explanation": "Reading for a 'survival purpose' refers to reading essential information needed for daily life, safety, or legal matters. Reading advertisements is crucial for navigating consumer society, understanding offers, and being aware of warnings, which directly relates to everyday survival and functioning. Novels are for pleasure, textbooks for learning, and property documents are important but read infrequently."
  },
  {
    "id": 126,
    "question": "Choose the correct sentence. (TSTET 10 Jan 2025)",
    "options": [
      "At last, an justice has been done to the accused.",
      "It is a uniform policy.",
      "In this way, the game came to a end.",
      "This is an young boy whom I saw yesterday."
    ],
    "correctAnswer": 1,
    "explanation": "The use of articles 'a' or 'an' depends on the sound of the following word, not the letter. The word 'uniform' begins with a 'y' sound (a consonant sound), so the correct article is 'a'. In the other options: 'justice' starts with a consonant sound ('j') so it should be 'a justice'; 'end' starts with a vowel sound so it should be 'an end'; 'young' starts with a consonant sound ('y') so it should be 'a young boy'."
  },
  {
    "id": 127,
    "question": "Identify the correctly punctuated sentence. (TSTET 10 Jan 2025)",
    "options": [
      "My brother, who lives in Chennai, is a professor.",
      "My brother who lives in Chennai, is a professor.",
      "My brother, who lives in Chennai is a professor.",
      "My brother who lives, in Chennai, is a professor."
    ],
    "correctAnswer": 0,
    "explanation": "The phrase 'who lives in Chennai' is a non-restrictive clause, meaning it provides additional, non-essential information. Such clauses must be set off by commas on both ends. The first option correctly places a comma before 'who' and after 'Chennai'."
  },
  {
    "id": 128,
    "question": "Identify the sentence with redundancy. (TSTET 10 Jan 2025)",
    "options": [
      "The committee made a unanimous decision.",
      "She returned to her hometown after five years.",
      "The new employee is a recent graduate from university.",
      "Lift your left leg and right hand both at the same time."
    ],
    "correctAnswer": 3,
    "explanation": "Redundancy means using words that are unnecessary. In the last sentence, the word 'both' and the phrase 'at the same time' convey the same meaning of simultaneity. Using both is redundant. The sentence would be correct as 'Lift your left leg and right hand both' or 'Lift your left leg and right hand at the same time'."
  },
  {
    "id": 129,
    "question": "Choose the INCORRECTLY spelt word. (TSTET 10 Jan 2025)",
    "options": [
      "amalgamation",
      "anticipation",
      "aukwardness",
      "amusement"
    ],
    "correctAnswer": 2,
    "explanation": "The word 'aukwardness' is spelled incorrectly. The correct spelling is 'awkwardness'. The other words are all spelled correctly."
  },
  {
    "id": 130,
    "question": "The manager said there was plenty of skepticism about the idea. Identify the meaning of the word 'skepticism'. (TSTET 10 Jan 2025)",
    "options": [
      "acceptance",
      "doubt",
      "interest",
      "curiosity"
    ],
    "correctAnswer": 1,
    "explanation": "Skepticism refers to a skeptical attitude or doubt as to the truth of something. Therefore, 'doubt' is the correct meaning."
  },
  {
    "id": 131,
    "question": "I don't know why I chose that one; it was a completely arbitrary decision. Identify the opposite meaning of the word 'arbitrary'. (TSTET 10 Jan 2025)",
    "options": [
      "random",
      "rational",
      "willful",
      "erratic"
    ],
    "correctAnswer": 1,
    "explanation": "The word 'arbitrary' means based on random choice or personal whim, without any reason or system. The opposite of this is 'rational', which means based on logic or reason."
  },
  {
    "id": 132,
    "question": "Identify the word in plural form. (TSTET 10 Jan 2025)",
    "options": [
      "cactus",
      "nucleus",
      "criteria",
      "thesis"
    ],
    "correctAnswer": 2,
    "explanation": "'Criteria' is the plural form of the singular noun 'criterion'. The other words are singular: the plural of 'cactus' is 'cacti' or 'cactuses', the plural of 'nucleus' is 'nuclei', and the plural of 'thesis' is 'theses'."
  },
  {
    "id": 133,
    "question": "Identify the error part of the sentence.\nThe teacher instructed (A) / the students (B) / to attentive (C) / in the class. (D)\n(TSTET 10 Jan 2025)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctAnswer": 3,
    "explanation": "The error is in part D, which contains the phrase 'to attentive'. 'Attentive' is an adjective. The structure requires a verb after 'to'. The correct phrase should be 'to be attentive'. Therefore, the error is located in the segment containing this phrase."
  },
  {
    "id": 134,
    "question": "The grandparents were excited about seeing the grandson, ______? Choose the correct option to complete the sentence. (TSTET 10 Jan 2025)",
    "options": [
      "weren't they",
      "were they",
      "didn't they",
      "are they"
    ],
    "correctAnswer": 0,
    "explanation": "This is a question tag. The main statement 'The grandparents were excited' is positive, so the tag must be negative. The verb in the statement is 'were', so the tag uses the same verb. The correct tag is 'weren't they?'."
  },
  {
    "id": 135,
    "question": "New plants have been planted in the garden by the gardener. This sentence can also be expressed as: (TSTET 10 Jan 2025)",
    "options": [
      "The gardener has planted new plants in the garden.",
      "The gardener plant new plants in the garden.",
      "The gardener have planted new plants in the garden.",
      "New plants have planted in the garden by the gardener."
    ],
    "correctAnswer": 0,
    "explanation": "The original sentence is in the passive voice (Present Perfect Tense). To change it to the active voice, the doer of the action ('the gardener') becomes the subject. The verb form changes from 'have been planted' to 'has planted' to agree with the singular subject 'The gardener'."
  },
  {
    "id": 136,
    "question": "The quick brown fox jumped over the lazy dog. The word 'over' is a/an ______. (TSTET 10 Jan 2025)",
    "options": [
      "pronoun",
      "preposition",
      "conjunction",
      "interjection"
    ],
    "correctAnswer": 1,
    "explanation": "The word 'over' shows the relationship between the verb 'jumped' and the noun 'dog'. It indicates position and direction, which is the function of a preposition."
  },
  {
    "id": 137,
    "question": "The new software is catching on like wildfire across the globe. Identify the meaning of the expression 'like wildfire.' (TSTET 10 Jan 2025)",
    "options": [
      "uncontrollable fire",
      "Spreading gradually",
      "quickly in a way that cannot be controlled",
      "in a controlled manner"
    ],
    "correctAnswer": 2,
    "explanation": "The idiom 'to spread like wildfire' means to spread or become popular very quickly and uncontrollably. It refers to the speed and reach of something's proliferation."
  },
  {
    "id": 138,
    "question": "Rearrange the following in a correct sequence to form a meaningful sentence:\nP) upkeep of the stockpile\nQ) is being spent on the\nR) of the deadlier weapons\nS) Much of the money\nT) which has the power\nU) of destroying everything.\n(TSTET 10 Jan 2025)",
    "options": [
      "S, Q, P, R, T, U",
      "S, T, Q, R, P, U",
      "S, Q, R, P, T, U",
      "S, Q, U, R, P, T"
    ],
    "correctAnswer": 0,
    "explanation": "The logical sequence is: S ('Much of the money') introduces the subject. Q ('is being spent on the') provides the verb phrase. P ('upkeep of the stockpile') is the object of the preposition 'on'. R ('of the deadlier weapons') specifies which stockpile. T and U ('which has the power of destroying everything') form a clause that describes the weapons. The correct order is S, Q, P, R, T, U."
  },
  {
    "id": 139,
    "question": "The Amazon Rainforest is one of the largest tropical rainforests in the world. Choose the correct transformation of the sentence to comparative sentence. (TSTET 10 Jan 2025)",
    "options": [
      "The Amazon Rainforest is larger than the most other tropical rainforests in the world.",
      "Most tropical rainforests in the world is as large as the Amazon Rainforest.",
      "The Amazon Rainforest is largest to most tropical rainforests in the world.",
      "The Amazon Rainforest is more larger than more tropical rainforests in the world."
    ],
    "correctAnswer": 0,
    "explanation": "The original sentence is in the superlative degree ('one of the largest'). When converting to the comparative degree, the structure 'larger than most other...' is used to convey that while it is larger than the majority, there may be a few that are comparable. Option 1 correctly uses the comparative adjective 'larger' and the standard structure 'than most other'."
  },
  {
    "id": 140,
    "question": "She said to him, \"Can you help me with my homework?\" Choose the correct reported form of the given sentence. (TSTET 10 Jan 2025)",
    "options": [
      "She asked him if he can help her with her homework.",
      "She asked him if he could help her with her homework.",
      "She said to him if he could helps her with her homework",
      "She asked him if can he help her with her homework."
    ],
    "correctAnswer": 1,
    "explanation": "In reported speech, a direct question becomes an indirect question. 'Said to' changes to 'asked'. The conjunction 'if' or 'whether' is used. The modal verb 'can' changes to its past form 'could'. The pronouns change accordingly ('me' to 'her', 'my' to 'her'). The word order changes from a question to a statement (subject before verb: 'he could')."
  },
  {
    "id": 141,
    "question": "A person who studies insects is called ______. (TSTET 10 Jan 2025)",
    "options": [
      "entomologist.",
      "ornithologist.",
      "geologist.",
      "anthropologist."
    ],
    "correctAnswer": 0,
    "explanation": "An entomologist is a scientist who studies insects. An ornithologist studies birds, a geologist studies the Earth's physical structure, and an anthropologist studies human societies and their development."
  },
  {
    "id": 142,
    "question": "Annapurna is very organized and pays great attention to detail. She always ensures that everything is in order. She is ______. Choose the correct option to complete the sentence. (TSTET 10 Jan 2025)",
    "options": [
      "impetuous",
      "meticulous",
      "impulsive",
      "indifferent"
    ],
    "correctAnswer": 1,
    "explanation": "The word 'meticulous' means showing great attention to detail; very careful and precise. This perfectly describes Annapurna's character as presented in the sentence. 'Impetuous' and 'impulsive' mean acting rashly, and 'indifferent' means having no interest or concern."
  },
  {
    "id": 143,
    "question": "He is passionate ______ playing the piano. Choose the appropriate word to complete the sentence. (TSTET 10 Jan 2025)",
    "options": [
      "in",
      "for",
      "about",
      "to"
    ],
    "correctAnswer": 2,
    "explanation": "The adjective 'passionate' is correctly followed by the preposition 'about' when referring to a strong interest or enthusiasm for something. The correct phrasing is 'passionate about something'."
  },
  {
    "id": 144,
    "question": "Identify the correct sentence: (TSTET 10 Jan 2025)",
    "options": [
      "The initial risk and the most difficult that we need to take is to become honest.",
      "The initial and the most difficult need to take risk that we to become is honest.",
      "The most difficult initial and the risk that we need to take is to become honest.",
      "The initial and the most difficult risk that we need to take is to become honest."
    ],
    "correctAnswer": 3,
    "explanation": "The correct sentence structure places the adjectives ('initial' and 'most difficult') before the noun ('risk') they modify. The rest of the sentence 'that we need to take is to become honest' correctly functions as a clause describing the risk. Option 4 arranges all parts of the sentence in a grammatically correct and logical order."
  },
  {
    "id": 145,
    "question": "One among the following is NOT a true statement about language learning. (TSTET 10 Jan 2025)",
    "options": [
      "Children learn through the mistakes and errors they make.",
      "Learning takes place in a holistic manner, thus an integrated approach to learning is better.",
      "Children learn easily through authentic material like bus ticket, chocolate wrapper, etc.",
      "Language is better learned through formal instruction than acquisition."
    ],
    "correctAnswer": 3,
    "explanation": "Modern language pedagogy emphasizes that language acquisition (a natural, subconscious process of picking up a language through exposure) is often more effective for fluency than formal instruction (the conscious learning of grammar rules). The other three statements are widely accepted principles of language learning: errors are part of the process, an integrated approach is effective, and authentic materials are valuable learning tools."
  },
  {
    "id": 146,
    "question": "This discourse contains the life and activities of a person, place of residence, education, occupation, and other important details. (TSTET 10 Jan 2025)",
    "options": [
      "Biographical Sketch",
      "Essay",
      "Story",
      "Conversation"
    ],
    "correctAnswer": 0,
    "explanation": "A biographical sketch is a brief written account of a person's life, detailing key aspects such as their background, education, work, and significant achievements. This matches the description provided in the question."
  },
  {
    "id": 147,
    "question": "Identify the main character in the narrative of class I textbook of Telangana Board. (TSTET 10 Jan 2025)",
    "options": [
      "Bittu",
      "Kamala",
      "Ammu",
      "Chintu"
    ],
    "correctAnswer": 3,
    "explanation": "Based on the curriculum and content of the Telangana State Board Class I English textbook, the main recurring character central to the narratives is Chintu."
  },
  {
    "id": 148,
    "question": "Multilingualism in teaching is to be considered as ______. (TSTET 10 Jan 2025)",
    "options": [
      "a challenge.",
      "a problem.",
      "an obstacle.",
      "a resource."
    ],
    "correctAnswer": 3,
    "explanation": "Contemporary educational philosophy, as reflected in policies like the NCF 2005 and NEP 2020, views multilingualism as a resource. It is seen as a tool that can enhance cognitive flexibility, promote inclusivity, and enrich the learning environment for all students, rather than being a problem or an obstacle."
  },
  {
    "id": 149,
    "question": "Dyslexia is primarily difficulty in ______. (TSTET 10 Jan 2025)",
    "options": [
      "comprehending spoken language.",
      "reading.",
      "omission of grammatical markers.",
      "forming words."
    ],
    "correctAnswer": 1,
    "explanation": "Dyslexia is a specific learning disability characterized by difficulties with accurate and fluent word recognition, poor spelling, and decoding abilities. These challenges stem from a deficit in the phonological component of language, making reading the primary area of difficulty."
  },
  {
    "id": 150,
    "question": "Among the following, identify the challenge faced when teaching language at the primary level. (TSTET 10 Jan 2025)",
    "options": [
      "Attaining equal language proficiency levels among students",
      "Knowledge of grammar rules",
      "Availability of textbook",
      "Access to dictionary"
    ],
    "correctAnswer": 0,
    "explanation": "A significant challenge for teachers at the primary level is the diverse range of language proficiency among students in a single classroom. Children come from different backgrounds with varying levels of exposure to the target language. Managing this heterogeneity and trying to bring all students to a comparable level of proficiency is a major pedagogical challenge. The other options are resources or learning objectives, not inherent challenges."
  },
  {
    "id": 151,
    "question": "A summary of a written work is called (TSTET 18 Jan 2025)",
    "options": [
      "epitome.",
      "epistle.",
      "epilogue.",
      "epitaph."
    ],
    "correctAnswer": 0,
    "explanation": "An epitome is a perfect example or a summary of a written work. An epistle is a formal letter. An epilogue is a concluding part added to a literary work. An epitaph is an inscription on a tombstone."
  },
  {
    "id": 152,
    "question": "Choose the correct sentence. (TSTET 18 Jan 2025)",
    "options": [
      "The famous Dr. Vijay is only physician our village.",
      "The famous Dr. Vijay is a only physician in our village",
      "The famous Dr. Vijay is the only physician in our village.",
      "The famous Dr. Vijay is an only physician in our village."
    ],
    "correctAnswer": 2,
    "explanation": "The definite article 'the' is used before 'only' when it specifies that someone or something is unique or singular in a particular context. Here, 'the only physician' correctly indicates that he is the sole physician in the village."
  },
  {
    "id": 153,
    "question": "He enjoys reading books and watching movies in his free time. Here the word 'and' is a/an (TSTET 18 Jan 2025)",
    "options": [
      "pronoun",
      "preposition",
      "conjunction",
      "interjection"
    ],
    "correctAnswer": 2,
    "explanation": "'And' is a coordinating conjunction used to connect words, phrases, or clauses of equal grammatical rank. In this sentence, it connects the two phrases 'reading books' and 'watching movies'."
  },
  {
    "id": 154,
    "question": "Identify the sentence that contains redundancy (TSTET 18 Jan 2025)",
    "options": [
      "I saw four different refrigerators in the showroom.",
      "I saw four kinds of refrigerators in the showroom.",
      "I saw four distinct refrigerators in the showroom.",
      "I saw four different kinds of refrigerators in the showroom."
    ],
    "correctAnswer": 3,
    "explanation": "Redundancy is the use of unnecessary words. 'Different' and 'kinds of' both imply variety. Using them together ('different kinds') is repetitive and therefore redundant. The other sentences correctly use one term or the other to express the idea."
  },
  {
    "id": 155,
    "question": "The Charminar has been visited by many tourists. This sentence can also be expressed as: (TSTET 18 Jan 2025)",
    "options": [
      "A number of tourist had been visited the Charminar.",
      "Many tourists have visited the Charminar.",
      "Many tourists have being visited the Charminar.",
      "Many tourists has visited the Charminar."
    ],
    "correctAnswer": 1,
    "explanation": "The original sentence is in the passive voice (Present Perfect Tense). The correct active voice equivalent is 'Many tourists have visited the Charminar.' Option 2 correctly uses the plural subject 'Many tourists' with the plural verb 'have' and the correct verb form 'visited'."
  },
  {
    "id": 156,
    "question": "When Manu Bakher won the medal, she ______ speak for a moment. Choose the correct option to complete the sentence. (TSTET 18 Jan 2025)",
    "options": [
      "couldn't",
      "shouldn't",
      "mustn't",
      "weren't"
    ],
    "correctAnswer": 0,
    "explanation": "'Couldn't' (could not) is a modal verb used to express inability in the past. The context implies that due to emotion, she was unable to speak, making 'couldn't' the most appropriate choice."
  },
  {
    "id": 157,
    "question": "She was asleep, ______? Choose the correct option to complete the sentence. (TSTET 18 Jan 2025)",
    "options": [
      "did she",
      "wasn't she",
      "was she",
      "didn't she"
    ],
    "correctAnswer": 1,
    "explanation": "This sentence requires a question tag. A positive statement ('She was asleep') is followed by a negative tag. The tag uses the same auxiliary verb as the statement ('was'), so the correct tag is 'wasn't she?'."
  },
  {
    "id": 158,
    "question": "Identify the error part of the sentence that has an error.\nThe students of the school (A) would be send (B) to the museum (C) on a study tour. (D)\n(TSTET 18 Jan 2025)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctAnswer": 1,
    "explanation": "The error is in part (B). The sentence is in the passive voice. The structure for a passive modal is 'modal verb + be + past participle'. The past participle of 'send' is 'sent'. Therefore, the correct phrase should be 'would be sent'."
  },
  {
    "id": 159,
    "question": "Your diet has an ______ on your weight. Choose the correct option to complete the sentence. (TSTET 18 Jan 2025)",
    "options": [
      "affect",
      "effort",
      "afflict",
      "effect"
    ],
    "correctAnswer": 3,
    "explanation": "The correct word is 'effect', which is a noun meaning an influence or result. 'Affect' is a verb meaning to influence. The sentence requires a noun following the article 'an'."
  },
  {
    "id": 160,
    "question": "Identify the word in plural. (TSTET 18 Jan 2025)",
    "options": [
      "medium",
      "syllabus",
      "oases",
      "mouse"
    ],
    "correctAnswer": 2,
    "explanation": "'Oases' is the plural form of the singular noun 'oasis'. The plurals of the other words are 'media' (for medium), 'syllabi/syllabuses' (for syllabus), and 'mice' (for mouse)."
  },
  {
    "id": 161,
    "question": "Identify the correct sentence. (TSTET 18 Jan 2025)",
    "options": [
      "You must study the two first chapters of the book.",
      "He is senior than me.",
      "His shirt is cheaper than you.",
      "I found this book most interesting."
    ],
    "correctAnswer": 3,
    "explanation": "Option 4 is grammatically correct. Option 1 has incorrect word order; it should be 'the first two chapters'. Option 2 is incorrect; 'senior' is followed by 'to', not 'than' ('senior to me'). Option 3 makes a faulty comparison between 'shirt' and 'you'; it should be 'cheaper than your shirt' or 'cheaper than yours'."
  },
  {
    "id": 162,
    "question": "They were the ancient people who ______ hunting and gathering. Choose the correct option to complete the sentence. (TSTET 18 Jan 2025)",
    "options": [
      "lived by",
      "lived in",
      "lived to",
      "lived at"
    ],
    "correctAnswer": 0,
    "explanation": "The phrasal verb 'live by' means to follow a particular belief or to survive by a certain means. In this context, it correctly means they survived by means of hunting and gathering."
  },
  {
    "id": 163,
    "question": "The company is growing by leaps and bounds this year. Identify the meaning of the expression 'leaps and bounds'. (TSTET 18 Jan 2025)",
    "options": [
      "steadily",
      "slowly",
      "gradually",
      "very quickly"
    ],
    "correctAnswer": 3,
    "explanation": "The idiom 'by leaps and bounds' means to grow or progress very quickly and rapidly."
  },
  {
    "id": 164,
    "question": "The Political reform was enacted through a haphazard process of compromise and confusion. Identify the antonym for the word 'haphazard'. (TSTET 18 Jan 2025)",
    "options": [
      "erratic",
      "systematic",
      "casual",
      "sporadic"
    ],
    "correctAnswer": 1,
    "explanation": "'Haphazard' means lacking any obvious principle of organization or plan. Its direct opposite (antonym) is 'systematic', which means done according to a fixed plan or system. The other options are synonyms or have similar meanings."
  },
  {
    "id": 165,
    "question": "Choose the INCORRECTLY spelt word. (TSTET 18 Jan 2025)",
    "options": [
      "indolant",
      "impudent",
      "incessant",
      "insolent"
    ],
    "correctAnswer": 0,
    "explanation": "The correct spelling of the word is 'indolent', which means lazy. 'Indolant' is an incorrect spelling. 'Impudent', 'incessant', and 'insolent' are all spelled correctly."
  },
  {
    "id": 166,
    "question": "With acerbic wit, the author also makes a larger point. Identify the meaning of the word 'acerbic'. (TSTET 18 Jan 2025)",
    "options": [
      "polite",
      "gracious",
      "satirical",
      "gentle"
    ],
    "correctAnswer": 2,
    "explanation": "'Acerbic' describes something that is sharp, direct, and critical, often in a clever or witty way. Among the choices, 'satirical' (using irony, sarcasm, or ridicule to expose or criticize) is the closest in meaning. The other options are antonyms."
  },
  {
    "id": 167,
    "question": "The old man said to her, \"May you live long!\" Choose the option that best expresses the reported form of the given sentence. (TSTET 18 Jan 2025)",
    "options": [
      "The old man wishing her that she might be living long.",
      "The old man wished her that she may lives long.",
      "The old man wished her that she might live long.",
      "The old man wishes her that she might live long."
    ],
    "correctAnswer": 2,
    "explanation": "In reported speech, optative sentences (expressing a wish or prayer) use a reporting verb like 'wished' or 'prayed'. The verb 'said' is in the past, so the reporting verb becomes 'wished'. 'May' changes to its past form, 'might'. Therefore, the correct reported sentence is 'The old man wished her that she might live long'."
  },
  {
    "id": 168,
    "question": "Identify the meaningful sentence. (TSTET 18 Jan 2025)",
    "options": [
      "Education is the future to the passport, for tomorrow belongs to those who prepare for it today.",
      "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
      "Education is the passport to the future. for today belongs to those who prepare for it tomorrow.",
      "Education is the passport to the tomorrow. for future belongs to those who prepare for it today."
    ],
    "correctAnswer": 1,
    "explanation": "This is a well-known quote. The correct and logical arrangement of words is that education acts as a 'passport' (a means of access) to 'the future'. The reasoning is that 'tomorrow' (the future) is for those who get ready 'today' (the present)."
  },
  {
    "id": 169,
    "question": "Arrange the following in the correct order to make it a meaningful sentence.\nP) One of the most important\nQ) in which great works continue\nR) the power of art is the way\nS) to exert their influence through the ages.\nT) things to notice about\n(TSTET 18 Jan 2025)",
    "options": [
      "P. R. Q. T. S",
      "P. Q. R. T. S",
      "P. R. T. Q. S",
      "P. T. R. Q. S"
    ],
    "correctAnswer": 3,
    "explanation": "The correct sequence forms the sentence: 'One of the most important (P) things to notice about (T) the power of art is the way (R) in which great works continue (Q) to exert their influence through the ages (S).' This order creates a grammatically correct and coherent statement."
  },
  {
    "id": 170,
    "question": "The following should be avoided when preparing teaching and learning material for primary level English learners (TSTET 18 Jan 2025)",
    "options": [
      "visuals, colours, and illustrations",
      "Activities, games and puzzles",
      "complexity aligned to the age and cognitive abilities",
      "stereo types or biased content"
    ],
    "correctAnswer": 3,
    "explanation": "Educational materials should be inclusive, respectful, and fair. Stereotypes and biased content must be avoided as they can reinforce negative prejudices and are educationally unsound. Visuals, games, and age-appropriate content are all recommended practices for teaching young learners."
  },
  {
    "id": 171,
    "question": "A child with receptive language disorder may have trouble in (TSTET 18 Jan 2025)",
    "options": [
      "telling stories.",
      "understanding gestures.",
      "singing songs.",
      "naming objects."
    ],
    "correctAnswer": 1,
    "explanation": "Receptive language refers to the ability to understand information. This includes comprehending spoken words, written text, and non-verbal cues like gestures. A receptive language disorder would impair this ability. Telling stories, singing, and naming objects are examples of expressive language (the ability to produce language)."
  },
  {
    "id": 172,
    "question": "'Language Acquisition' means that children acquire language through (TSTET 18 Jan 2025)",
    "options": [
      "grammatical rules.",
      "conscious process.",
      "natural, subconscious process.",
      "formal instruction."
    ],
    "correctAnswer": 2,
    "explanation": "Language acquisition is the process of learning a language naturally and subconsciously through immersion and interaction, much like how a child learns their first language. It is distinct from language learning, which is a conscious process involving formal instruction and the study of grammar rules."
  },
  {
    "id": 173,
    "question": "The objective of teaching English for class I and II, the learners will be able to (TSTET 18 Jan 2025)",
    "options": [
      "talk about themselves, members of the family and the people in their surroundings.",
      "read and understand different types of texts.",
      "develop structure consciousness both at the sentence and literary levels.",
      "analyse the reading material from various aspect and personalize the text."
    ],
    "correctAnswer": 0,
    "explanation": "For very young learners in Classes I and II, the primary goal is to develop basic oral communication skills related to their immediate world. This includes talking about themselves, their family, and their surroundings. The other options describe more complex skills taught in later grades."
  },
  {
    "id": 174,
    "question": "In language, 'Graphic reading' means (TSTET 18 Jan 2025)",
    "options": [
      "reading a word and sensing its meaning with the knowledge of the alphabet.",
      "reading a word and sensing its meaning without even knowing the alphabet.",
      "reading texts and sensing their meaning with teacher's help.",
      "reading a word and by hearting its spellings."
    ],
    "correctAnswer": 1,
    "explanation": "Graphic reading, also known as logographic reading, is an early reading stage where a child recognizes familiar words as whole pictures or logos (e.g., recognizing a brand name sign). They identify the word by its overall visual shape without necessarily decoding the individual letters."
  },
  {
    "id": 175,
    "question": "Intensive reading is a reading strategy that involves reading a text for (TSTET 18 Jan 2025)",
    "options": [
      "fluency.",
      "someone else.",
      "pleasure.",
      "detailed information."
    ],
    "correctAnswer": 3,
    "explanation": "Intensive reading involves reading a short text carefully for a deep and precise understanding. The goal is to extract specific details and understand complex vocabulary and grammatical structures. In contrast, extensive reading is reading longer texts for general understanding and pleasure."
  },
  {
    "id": 176,
    "question": "'This is an interesting story'. To get the opposite of the word 'interesting', we use the prefix (APTET 2011)",
    "options": [
      "un-",
      "dis-",
      "im-",
      "in-"
    ],
    "correctAnswer": 0,
    "explanation": "The prefix 'un-' is commonly used to create the antonym (opposite) of many adjectives in English. The correct opposite of 'interesting' is 'uninteresting'. While 'disinteresting' exists, it means 'causing a loss of interest' rather than simply 'not interesting'. The prefixes 'im-' and 'in-' are not used with the word 'interesting'."
  },
  {
    "id": 177,
    "question": "'Devi looked at the moon.' The phrase 'look at' means (APTET 2011)",
    "options": [
      "to see",
      "to examine",
      "to investigate",
      "to take care of"
    ],
    "correctAnswer": 0,
    "explanation": "The phrasal verb 'look at' means to direct one's eyes towards something in order to see it. While 'examine' and 'investigate' might involve looking, the most direct and common meaning in this context is simply 'to see'. The phrase for 'to take care of' is 'look after'."
  },
  {
    "id": 178,
    "question": "'Helen is the most beautiful woman in the world'. The comparative form of the given sentence is (APTET 2011)",
    "options": [
      "Helen is more beautiful than many other women in the world.",
      "Helen is more beautiful than most other women in the world.",
      "Helen is more beautiful than very few women in the world.",
      "Helen is more beautiful than any other woman in the world."
    ],
    "correctAnswer": 3,
    "explanation": "To change a superlative degree sentence that implies uniqueness (like 'the most') into a comparative degree, the structure 'more... than any other + [singular noun]' is used. The original sentence states that no other woman is as beautiful as Helen. The comparative form 'more beautiful than any other woman' correctly preserves this meaning."
  },
  {
    "id": 179,
    "question": "'Raju plays cricket. He plays chess also'. The given sentences can be combined and expressed as (APTET 2011)",
    "options": [
      "Raju doesn't play either cricket or chess.",
      "Raju plays cricket but not chess.",
      "Raju plays chess but not cricket.",
      "Raju plays not only cricket but also chess."
    ],
    "correctAnswer": 3,
    "explanation": "The correlative conjunction 'not only... but also...' is used to connect and emphasize two pieces of information about the same subject. Since Raju participates in both activities, this structure is the most effective way to combine the two sentences into a single, cohesive statement."
  },
  {
    "id": 180,
    "question": "Find the correct sentence that contains the words 'birds, distances, fly, long, migrating.' (APTET 2011)",
    "options": [
      "Migrating birds fly distances long.",
      "Birds fly long migrating distances.",
      "Migrating birds fly long distances.",
      "Birds fly migrating long distances."
    ],
    "correctAnswer": 2,
    "explanation": "The standard English sentence structure is Subject-Verb-Object. Here, 'Migrating birds' is the subject (with 'migrating' as an adjective describing 'birds'), 'fly' is the verb, and 'long distances' is the object phrase (with 'long' as an adjective describing 'distances'). Option 3 correctly follows this grammatical order."
  },
  {
    "id": 181,
    "question": "Identify the correctly spelt word. (APTET 2011)",
    "options": [
      "champyen",
      "champian",
      "champien",
      "champion"
    ],
    "correctAnswer": 3,
    "explanation": "The correct spelling for a person who has won a competition is 'champion'. The other options are common phonetic misspellings of the word."
  },
  {
    "id": 182,
    "question": "\"I should be here ........ the stroke of five,\" Venu said. Choose the correct preposition to fill in the given blank. (APTET 2011)",
    "options": [
      "by",
      "in",
      "at",
      "on"
    ],
    "correctAnswer": 2,
    "explanation": "The preposition 'at' is used to specify an exact point in time. 'At the stroke of five' means precisely at 5 o'clock. 'By' would mean 'no later than', 'in' is used for periods of time (e.g., in June), and 'on' is used for specific days (e.g., on Friday)."
  },
  {
    "id": 183,
    "question": "'My father ........ (drink) tea everyday'. Choose the correct form of the verb given in the brackets to fill in the given blank. (APTET 2011)",
    "options": [
      "is drinking",
      "drink",
      "drinks",
      "drank"
    ],
    "correctAnswer": 2,
    "explanation": "The adverb 'everyday' indicates a habitual action, which requires the simple present tense. For a third-person singular subject ('My father'), the simple present tense verb form ends with an '-s'. Therefore, 'drinks' is the correct verb form."
  },
  {
    "id": 184,
    "question": "'Madhavi is very hospitable'. It means that Madhavi is (APTET 2011)",
    "options": [
      "bedridden",
      "in a hospital",
      "friendly",
      "fearful"
    ],
    "correctAnswer": 2,
    "explanation": "The adjective 'hospitable' describes someone who is friendly, welcoming, and generous towards guests or visitors. While it shares a Latin root with 'hospital', its meaning relates to hospitality and social warmth, not medical care."
  },
  {
    "id": 185,
    "question": "'I am very lucky, .....?' Select the appropriate question tag to be used in the given blank. (APTET 2011)",
    "options": [
      "amn't I",
      "aren't I",
      "am I",
      "isn't it"
    ],
    "correctAnswer": 1,
    "explanation": "Question tags are formed using an auxiliary verb. The main statement 'I am' is positive, so the tag must be negative. While 'amn't I' might seem logical, it is not used in standard English. The conventional and grammatically correct negative tag for 'I am' is 'aren't I?'."
  },
  {
    "id": 186,
    "question": "'My sister has ........ (paint) the wall.' Choose the correct form of the verb given in the brackets to fill in the given blank. (APTET 2011)",
    "options": [
      "painting",
      "paint",
      "paints",
      "painted"
    ],
    "correctAnswer": 3,
    "explanation": "This sentence uses the present perfect tense, indicated by the auxiliary verb 'has'. The structure of the present perfect tense is 'has/have' + the past participle of the main verb. The past participle of 'paint' is 'painted'."
  },
  {
    "id": 187,
    "question": "'Dolphins look like fish, ...... they are not fish.' Choose the correct word to fill in the given blank. (APTET 2011)",
    "options": [
      "but",
      "and",
      "or",
      "then"
    ],
    "correctAnswer": 0,
    "explanation": "The conjunction 'but' is used to connect two contrasting ideas. The first clause states an appearance ('look like fish'), while the second clause states a contradictory fact ('they are not fish'). 'But' is the appropriate conjunction to show this contrast."
  },
  {
    "id": 188,
    "question": "'Lalitha used to take a slate to school'. It means that (APTET 2011)",
    "options": [
      "Lalitha has been taking a slate to school.",
      "Lalitha doesn't take a slate to school now.",
      "Lalitha takes a slate to school.",
      "Lalitha is taking a slate to school."
    ],
    "correctAnswer": 1,
    "explanation": "The phrase 'used to' describes a past habit or state that is no longer true in the present. The sentence implies that taking a slate was something Lalitha did regularly in the past, but she does not do it anymore."
  },
  {
    "id": 189,
    "question": "In writing a letter, an appropriate way of writing subscription is (APTET 2011)",
    "options": [
      "yours sincerely,",
      "Yours sincerely,",
      "Yours Sincerely,",
      "yours Sincerely,"
    ],
    "correctAnswer": 1,
    "explanation": "In a letter's complimentary close (also called subscription), the standard convention is to capitalize only the first word. Therefore, 'Yours sincerely,' is the correct format. A comma always follows the closing."
  },
  {
    "id": 190,
    "question": "Sheela said, \"I am learning Russian language.\" The reported form of the given sentence is (APTET 2011)",
    "options": [
      "Sheela said that she learnt Russian language.",
      "Sheela said that she was learning Russian language.",
      "Sheela said that she is learning Russian language.",
      "Sheela said that she has been learning Russian language."
    ],
    "correctAnswer": 1,
    "explanation": "When converting direct speech to reported speech, the verb tense typically shifts back one step. The present continuous tense ('am learning') in the direct speech becomes the past continuous tense ('was learning') in reported speech. The pronoun 'I' also changes to 'she' to agree with the subject 'Sheela'."
  },
  {
    "id": 191,
    "question": "In the passage 'Birds (81) different - shaped feet...', which word fits in blank (81)? (APTET 2011)",
    "options": [
      "are",
      "has",
      "had",
      "have"
    ],
    "correctAnswer": 3,
    "explanation": "The subject of the sentence is 'Birds', which is plural. To maintain subject-verb agreement in the simple present tense, the plural verb form 'have' is required. 'Has' is singular, 'are' doesn't fit grammatically, and 'had' would change the tense to the past."
  },
  {
    "id": 192,
    "question": "In the passage '...that perch (82) branches have toes...', which word fits in blank (82)? (APTET 2011)",
    "options": [
      "on",
      "in",
      "under",
      "above"
    ],
    "correctAnswer": 0,
    "explanation": "The preposition 'on' is used to indicate position on a surface. Birds perch 'on' the surface of branches. The other prepositions are not suitable for describing this action."
  },
  {
    "id": 193,
    "question": "In the passage '...the bird (83) fall off...', which word fits in blank (83)? (APTET 2011)",
    "options": [
      "hasn't",
      "didn't",
      "doesn't",
      "haven't"
    ],
    "correctAnswer": 2,
    "explanation": "The subject is 'the bird' (third-person singular), and the context describes a general fact, requiring the simple present tense. The correct negative auxiliary verb for a singular subject in the simple present is 'doesn't' (a contraction of 'does not')."
  },
  {
    "id": 194,
    "question": "In the passage '...to help them (84) in the water.', which word fits in blank (84)? (APTET 2011)",
    "options": [
      "swum",
      "swim",
      "swims",
      "swam"
    ],
    "correctAnswer": 1,
    "explanation": "After the verb 'help' followed by an object ('them'), the base form of the next verb (the infinitive without 'to') is used. The base form of the verb is 'swim'. 'Swum' is the past participle, 'swims' is the third-person present, and 'swam' is the past tense."
  },
  {
    "id": 195,
    "question": "In an Overhead projector a teacher makes use of (APTET 2011)",
    "options": [
      "3D objects.",
      "Transparencies.",
      "Power-point CDs.",
      "Puppets."
    ],
    "correctAnswer": 1,
    "explanation": "An overhead projector (OHP) is a piece of equipment designed to project images from transparencies, which are sheets of clear plastic film, onto a screen. It cannot project 3D objects, CDs, or puppets."
  },
  {
    "id": 196,
    "question": "'India is a multilingual country. English continued as a language of administration, judiciary and medium of instruction in the universities.' This aspect implies that (APTET 2011)",
    "options": [
      "English is a link language in India.",
      "English is a library language.",
      "English is a language of opportunity.",
      "English is an International language."
    ],
    "correctAnswer": 0,
    "explanation": "Given its use in administration, judiciary, and higher education across different linguistic states, English serves to connect people who speak different native languages. This role defines it as a 'link language' within the Indian context. While the other options are also true of English, 'link language' is the most direct conclusion from the provided text."
  },
  {
    "id": 197,
    "question": "Change of stress from the first syllable to the second as in, 'CONduct - conDUCT', changes the word (APTET 2011)",
    "options": [
      "from Adjective to Noun.",
      "from Verb to Noun.",
      "from Noun to Verb.",
      "from Noun to Adjective."
    ],
    "correctAnswer": 2,
    "explanation": "In English, many two-syllable words function as both nouns and verbs. The distinction is often made by shifting the stress. When stressed on the first syllable ('CON-duct'), it is a noun meaning 'behavior'. When stressed on the second syllable ('con-DUCT'), it is a verb meaning 'to lead or manage'. Thus, the shift changes the word class from Noun to Verb."
  },
  {
    "id": 198,
    "question": "Searching for specific information in a dictionary, or a telephone directory is an example for (APTET 2011)",
    "options": [
      "Extensive reading",
      "Scanning",
      "Skimming",
      "Reading aloud"
    ],
    "correctAnswer": 1,
    "explanation": "Scanning is a reading technique where the reader moves their eyes quickly across a text to find a specific piece of information, such as a name, date, or definition. This is exactly what one does with a dictionary or directory. Skimming is reading quickly for a general idea, and extensive reading is reading for pleasure."
  },
  {
    "id": 199,
    "question": "The teacher makes use of prefixes and suffixes to teach (APTET 2011)",
    "options": [
      "Word meaning.",
      "Sentence formation.",
      "Word formation.",
      "Sentence meaning."
    ],
    "correctAnswer": 2,
    "explanation": "Prefixes (morphemes added to the beginning of a word) and suffixes (added to the end) are the building blocks used to create new words from existing root words. This entire process is known as word formation. For example, from the root 'form', we can create 'formation', 'reform', 'deform', etc."
  },
  {
    "id": 200,
    "question": "'The teacher gives the meanings of difficult words in the pupil's mother tongue.' This is a principle involved in (APTET 2011)",
    "options": [
      "The Reading Method of Dr. West.",
      "The Grammar-translation Method.",
      "The Direct Method.",
      "The Bilingual Method."
    ],
    "correctAnswer": 3,
    "explanation": "The Bilingual Method, proposed by C.J. Dodson, is characterized by the judicious use of the students' mother tongue to clarify the meaning of new words or grammatical structures in the target language. This contrasts with the Direct Method, which forbids mother tongue use, and the Grammar-Translation method, which focuses on translating entire passages rather than just clarifying vocabulary."
  },
  {
    "id": 201,
    "question": "To make the past perfect tense, we use this helping verb. (APTET 2012)",
    "options": [
      "have",
      "had",
      "has",
      "having"
    ],
    "correctAnswer": 1,
    "explanation": "The past perfect tense describes an action that was completed before another action in the past. It is formed using the auxiliary verb 'had' followed by the past participle of the main verb. For example, 'She had finished her work before the guests arrived.'"
  },
  {
    "id": 202,
    "question": "The opposite of 'equality' is... (APTET 2012)",
    "options": [
      "unequality",
      "disequality",
      "nonequality",
      "inequality"
    ],
    "correctAnswer": 3,
    "explanation": "The correct prefix to form the antonym (opposite) of 'equality' is 'in-'. 'Inequality' refers to the state of not being equal, especially in status, rights, or opportunities. The other prefixes are incorrect."
  },
  {
    "id": 203,
    "question": "Identify the correctly spelt word. (APTET 2012)",
    "options": [
      "accomodation",
      "accommodation",
      "acommodation",
      "accommodetion"
    ],
    "correctAnswer": 1,
    "explanation": "The correct spelling is 'accommodation', with a double 'c' and a double 'm'. It refers to a room, group of rooms, or building in which someone may live or stay."
  },
  {
    "id": 204,
    "question": "Choose the correct word to fill in the blank in the sentence. We went ______ the market last Sunday. (APTET 2012)",
    "options": [
      "up",
      "onto",
      "to",
      "off"
    ],
    "correctAnswer": 2,
    "explanation": "The preposition 'to' is used to indicate movement toward a destination. In this sentence, it correctly shows that the direction of travel was towards 'the market'."
  },
  {
    "id": 205,
    "question": "Choose the correct phrase to fill in the blank in the sentence. They ______ living here since 1999. (APTET 2012)",
    "options": [
      "have been",
      "has been",
      "are being",
      "have being"
    ],
    "correctAnswer": 0,
    "explanation": "The phrase 'since 1999' indicates an action that started in the past and is still continuing. This requires the present perfect continuous tense. The structure is 'has/have been' + the present participle (-ing form of the verb). For the plural subject 'They', the correct form is 'have been'."
  },
  {
    "id": 206,
    "question": "Identify the 'positive degree' of the sentence. Raju is taller than Amar. (APTET 2012)",
    "options": [
      "Amar is not tall as Raju.",
      "Amar is not so tall as Raju.",
      "Amar can be tall like Raju.",
      "Amar is as tall as Raju."
    ],
    "correctAnswer": 1,
    "explanation": "The original sentence is in the comparative degree ('taller than'). To transform it into the positive degree while retaining the meaning, we use the structure 'not as/so ... as'. The sentence 'Amar is not so tall as Raju' correctly conveys that Raju is the taller of the two."
  },
  {
    "id": 207,
    "question": "Identify the correct 'question tag' for the statement. Your brother is a teacher, ... (APTET 2012)",
    "options": [
      "is he",
      "isn't it?",
      "isnt he.",
      "isn't he?"
    ],
    "correctAnswer": 3,
    "explanation": "A question tag is a short question at the end of a statement. The rule is: a positive statement is followed by a negative tag, and a negative statement by a positive tag. The statement 'Your brother is a teacher' is positive, so it needs a negative tag. The subject 'Your brother' is replaced by the pronoun 'he'. Thus, the correct tag is 'isn't he?'."
  },
  {
    "id": 208,
    "question": "What is the meaning of the word underlined in the sentence? The water *glittered* in the sunlight. (APTET 2012)",
    "options": [
      "shone",
      "shine",
      "shown",
      "shining"
    ],
    "correctAnswer": 0,
    "explanation": "The word 'glittered' means to shine with a bright, shimmering, reflected light. 'Shone', the past tense of 'shine', is the closest synonym among the given options."
  },
  {
    "id": 209,
    "question": "If you combine the following two sentences, a) She likes English. b) She likes Mathematics. You will get: (APTET 2012)",
    "options": [
      "She not only likes English, but also Mathematics.",
      "She likes not only English, but also Mathematics.",
      "Not only English but also she likes Mathematics.",
      "She likes English and not only Mathematics."
    ],
    "correctAnswer": 1,
    "explanation": "The correlative conjunction 'not only... but also' is used to connect and emphasize two words or phrases at the same position. The correct structure places 'not only' and 'but also' directly before the parallel items being connected (in this case, 'English' and 'Mathematics')."
  },
  {
    "id": 210,
    "question": "The 'reported' form of the sentence, The teacher said to the pupils, \"Listen.\" is... (APTET 2012)",
    "options": [
      "The teacher said the pupils to listen.",
      "The teacher told the pupils listen.",
      "The teacher asked the pupils to listen.",
      "The teacher suggested the pupils to listen."
    ],
    "correctAnswer": 2,
    "explanation": "The original sentence is an imperative (a command or request). In reported speech, an imperative is changed by using a reporting verb (like asked, told, ordered) followed by an object and the infinitive form of the verb ('to' + verb). 'The teacher asked the pupils to listen' is the grammatically correct reported form."
  },
  {
    "id": 211,
    "question": "Identify the question to get the answer. Yes. We go there every year. (APTET 2012)",
    "options": [
      "Did you been to Ooty?",
      "Have been to Ooty ever?",
      "Did you go to Ooty never?",
      "Have you ever been to Ooty?"
    ],
    "correctAnswer": 3,
    "explanation": "The answer 'Yes. We go there every year' suggests a repeated action based on a past experience. The question 'Have you ever been to Ooty?' uses the present perfect tense to ask about a life experience, which is the most appropriate prompt for the given answer. The other options are grammatically incorrect."
  },
  {
    "id": 212,
    "question": "In a letter to an officer, the 'subscription' is... (APTET 2012)",
    "options": [
      "Yours sincerely,",
      "yours faithfully.",
      "Yours faithfully,",
      "Yours' faithfully,"
    ],
    "correctAnswer": 2,
    "explanation": "In formal letter writing, 'Yours faithfully,' is the conventional closing (subscription) when the letter begins with 'Dear Sir/Madam'. 'Yours' should be capitalized and should not have an apostrophe. A comma follows the phrase."
  },
  {
    "id": 213,
    "question": "Identify the correct sentence that contains all the words in the box. [sun, clouds, makes, the, the, us, for] (APTET 2012)",
    "options": [
      "The sun makes us for the clouds.",
      "The sun makes the clouds for us.",
      "The clouds makes the sun for us.",
      "The sun clouds makes for us."
    ],
    "correctAnswer": 1,
    "explanation": "By arranging the jumbled words, the only grammatically and logically coherent sentence is 'The sun makes the clouds for us.' Option 3 has a subject-verb agreement error ('clouds makes')."
  },
  {
    "id": 214,
    "question": "Read the four parts of a sentence. They are marked A, B, C and D. A) because it was interesting B) interested in the book C) that he could not put it down D) he was so. The correct sequence of the parts is: (APTET 2012)",
    "options": [
      "D, B, C, A",
      "B, C, A, D",
      "A, C, B, D",
      "D, C, A, B"
    ],
    "correctAnswer": 0,
    "explanation": "The sentence uses the 'so... that' structure to show cause and effect. The logical order is: D) 'he was so' + B) 'interested in the book' + C) 'that he could not put it down' + A) 'because it was interesting'. This forms the complete, logical sentence: 'He was so interested in the book that he could not put it down because it was interesting.'"
  },
  {
    "id": 215,
    "question": "According to Ruskin, books can be divided into... (APTET 2012)",
    "options": [
      "some categories",
      "three categories",
      "four categories",
      "two categories"
    ],
    "correctAnswer": 3,
    "explanation": "The first sentence of the passage explicitly states: \"John Ruskin says, 'All books are divisible into two classes, the books of the hour and the books of all time.'\" Therefore, books are divided into two categories or classes."
  },
  {
    "id": 216,
    "question": "According to this passage, ... (APTET 2012)",
    "options": [
      "some books are read and forgotten",
      "very few books are read but forgotten",
      "most of the books are read but forgotten",
      "no book is read and forgotten"
    ],
    "correctAnswer": 0,
    "explanation": "The passage states, \"...some books are read by 95% of people for some years and then they are virtually forgotten.\" This directly supports the idea that some books are read and then forgotten."
  },
  {
    "id": 217,
    "question": "According to this passage, ... (APTET 2012)",
    "options": [
      "a majority of people read classics",
      "every reader reads classics",
      "more than half of the readers read classics",
      "a small percentage of people read classics"
    ],
    "correctAnswer": 3,
    "explanation": "The passage mentions that despite changing tastes, \"5% of people continue to read 'classics'.\" Five percent represents a small percentage of people."
  },
  {
    "id": 218,
    "question": "The writer of this passage compares books to... (APTET 2012)",
    "options": [
      "friends",
      "classics",
      "time",
      "detectives"
    ],
    "correctAnswer": 0,
    "explanation": "The passage makes a direct comparison, stating, \"Books are good companions and good counsellors. They are like good friends.\""
  },
  {
    "id": 219,
    "question": "The writer of this passage says that books can make us... (APTET 2012)",
    "options": [
      "feel sad",
      "feel better",
      "feel dejected",
      "feel serious"
    ],
    "correctAnswer": 1,
    "explanation": "The passage explains that books \"walk in to console you\" and \"offer the best solace.\" Both 'console' and 'solace' mean to provide comfort during a time of distress, which helps a person to feel better."
  },
  {
    "id": 220,
    "question": "Language games can consolidate the pupils' skills of... (APTET 2012)",
    "options": [
      "listening and speaking only",
      "speaking and reading only",
      "reading and writing only",
      "listening, speaking, reading and writing"
    ],
    "correctAnswer": 3,
    "explanation": "Language games are a versatile pedagogical tool. They can be designed to reinforce and consolidate all four fundamental language skills: listening (e.g., following instructions), speaking (e.g., role-play), reading (e.g., matching games), and writing (e.g., creating stories)."
  },
  {
    "id": 221,
    "question": "We teach a supplementary reader for... (APTET 2012)",
    "options": [
      "learning pronunciation",
      "learning syntax",
      "extensive reading",
      "intensive reading"
    ],
    "correctAnswer": 2,
    "explanation": "A supplementary reader is used to encourage reading for pleasure, fluency, and general understanding, rather than for detailed study. This practice is known as extensive reading. Intensive reading, conversely, involves the close and detailed analysis of a short text, usually from a coursebook."
  },
  {
    "id": 222,
    "question": "Read the question in the box given below: [Choose the correct word to fill in the blank. Ravi goes to school ........ bicycle. a) by c) with b) on d) over] The above test item tests the... (APTET 2012)",
    "options": [
      "lexical item",
      "knowledge",
      "skill",
      "speech"
    ],
    "correctAnswer": 0,
    "explanation": "This question tests the student's knowledge of the correct preposition ('by') to use with a mode of transport ('bicycle'). This is a test of a specific lexical item and its correct usage (collocation) within a grammatical structure."
  },
  {
    "id": 223,
    "question": "At schools, teachers conduct unit tests, terminal exams and annual exams to ensure... (APTET 2012)",
    "options": [
      "continuous and comprehensive evaluation",
      "summative evaluation",
      "diagnostic evaluation",
      "formative evaluation"
    ],
    "correctAnswer": 1,
    "explanation": "Summative evaluation is assessment of learning. It is conducted at the end of an instructional period (like a unit, term, or year) to measure what students have learned and to assign grades. Unit tests, terminal exams, and annual exams are all examples of summative evaluation."
  },
  {
    "id": 224,
    "question": "In microteaching, the sequence of events is: (APTET 2012)",
    "options": [
      "Teacher trainees improve their spoken English.",
      "They prepare a microlesson plan, teach, get the feedback, replan and reteach.",
      "They teach, get the feedback, prepare a microlesson and reteach.",
      "They prepare a microlesson plan and improve their teaching."
    ],
    "correctAnswer": 1,
    "explanation": "The standard microteaching cycle is a systematic process for skill development. It follows the sequence: Plan -> Teach -> Feedback -> Re-plan -> Re-teach -> Re-feedback. The second option accurately describes this core cycle."
  },
  {
    "id": 225,
    "question": "One of the basic elements of spoken English is fluency. Fluency is the ability of a speaker... (APTET 2012)",
    "options": [
      "to pause at the right place while speaking",
      "to speak fast",
      "to speak as fast as he can",
      "to speak as slowly as he can"
    ],
    "correctAnswer": 0,
    "explanation": "Fluency is not simply about speed but about the smoothness and flow of speech. A key aspect of this is prosody, which includes rhythm, stress, intonation, and pausing. Pausing at appropriate moments (e.g., at the end of a thought or phrase) makes speech more natural and easier for the listener to understand."
  },
  {
    "id": 226,
    "question": "Complete the sentence with the correct option: Hi! I am Renu. Well, I (66) ______ as the fourth child in a family of seven. (TSTET 2017)",
    "options": [
      "grew on",
      "grew away",
      "grew out",
      "grew up"
    ],
    "correctAnswer": 3,
    "explanation": "The correct phrasal verb to use when talking about the process of changing from a child to an adult is 'grew up'. The other options are incorrect: 'grew on' means to become more liked over time, 'grew away' is not a standard phrasal verb, and 'grew out' means to become too big for something (like clothes)."
  },
  {
    "id": 227,
    "question": "Complete the sentence with the correct option: It was fun. I never (67) ______ to look for friends to play with... (TSTET 2017)",
    "options": [
      "had",
      "have",
      "liked",
      "has"
    ],
    "correctAnswer": 0,
    "explanation": "The phrase 'had to' indicates a necessity or obligation in the past. The sentence means 'It was never necessary for me to look for friends.' The verb 'had' agrees with the past tense context of the passage. 'Have' and 'has' are present tense, and 'liked' does not fit the grammatical structure 'liked to look for friends'."
  },
  {
    "id": 228,
    "question": "Complete the sentence with the correct option: ...food was not in plenty because my father's (68) ______ income wasn't anything much. (TSTET 2017)",
    "options": [
      "grand",
      "sole",
      "joint",
      "huge"
    ],
    "correctAnswer": 1,
    "explanation": "The word 'sole' means 'one and only' or 'single'. This fits the context that the father's was the only income for the family, explaining why money was tight. 'Grand' and 'huge' contradict the idea that the income 'wasn't anything much'. 'Joint' implies an income shared with someone else, which doesn't fit the singular 'father's income'."
  },
  {
    "id": 229,
    "question": "Complete the sentence with the correct option: Well, that taught me how to share and be happy with (69) ______ we had. (TSTET 2017)",
    "options": [
      "very little",
      "little",
      "a little",
      "the little"
    ],
    "correctAnswer": 3,
    "explanation": "The correct phrase is 'the little'. It means 'the small amount that'. 'The little we had' refers to the specific, though small, quantity of things they possessed. 'Little' would mean almost nothing, and 'a little' is more general and doesn't refer to the entirety of what they possessed."
  },
  {
    "id": 230,
    "question": "Complete the sentence with the correct option: The best part of it was that we all learned to eat (70) ______ that came our way. (TSTET 2017)",
    "options": [
      "everything",
      "something",
      "anything",
      "nothing"
    ],
    "correctAnswer": 0,
    "explanation": "'Everything' is the most suitable word here, meaning all things or whatever food was available. It implies acceptance of all kinds of food without being picky. 'Something' is too vague, 'anything' is typically used in questions or negative sentences, and 'nothing' has the opposite meaning."
  },
  {
    "id": 231,
    "question": "Match the conversation openers (i, ii, iii, iv) with their respective responses (a, b, c, d). \n(i) How's it going? \n(ii) Lovely weather! \n(iii) I'll be in touch. \n(iv) It's been very interesting talking to you. \n\n(a) Same here. \n(b) Great. \n(c) Bye for now. \n(d) Yes, it is. \n(TSTET 2017)",
    "options": [
      "b, c, d, a",
      "b, d, c, a",
      "a, d, c, b",
      "c, a, d, b"
    ],
    "correctAnswer": 1,
    "explanation": "The correct pairings are: \n(i) 'How's it going?' is a casual greeting, to which 'Great.' (b) is a common reply. \n(ii) 'Lovely weather!' is a statement of observation, to which 'Yes, it is.' (d) is a statement of agreement. \n(iii) 'I'll be in touch.' is a way of saying goodbye, and 'Bye for now.' (c) is a suitable response. \n(iv) 'It's been very interesting talking to you.' is a polite closing remark, and 'Same here.' (a) is a reciprocal reply. \nTherefore, the correct sequence is b, d, c, a."
  },
  {
    "id": 232,
    "question": "The underlined part in one word is pronounced in the same way as the letter 's' in 'measure'. Find it out. (TSTET 2017)",
    "options": [
      "accent",
      "dozing",
      "garrage",
      "passion"
    ],
    "correctAnswer": 2,
    "explanation": "The 's' in 'measure' has the /ʒ/ sound. Let's analyze the options: \n- 'accent' has the /s/ sound. \n- 'dozing' has the /z/ sound. \n- 'garrage' (a common misspelling of garage) has the /ʒ/ sound. \n- 'passion' has the /ʃ/ (sh) sound. \nThus, 'garrage' contains the same sound."
  },
  {
    "id": 233,
    "question": "Identify the verb in passive voice in the following passage: 'We unlocked the door and entered our apartment. We were shocked to find the whole place in disarray.' (TSTET 2017)",
    "options": [
      "find",
      "unlocked",
      "entered",
      "shocked"
    ],
    "correctAnswer": 3,
    "explanation": "The passive voice is formed with the verb 'to be' + past participle. In the sentence 'We were shocked', 'were' is a form of 'to be' and 'shocked' is the past participle. The subject 'We' is receiving the action of being shocked. 'Unlocked' and 'entered' are in the active voice. 'Find' is an infinitive."
  },
  {
    "id": 234,
    "question": "I saw him crossing the bridge. The structure of the underlined part of the sentence is... (TSTET 2017)",
    "options": [
      "Subject + Verb + Pronoun + Present Participle.",
      "Subject + Verb + Noun + Gerund.",
      "Subject + Verb + Pronoun + Infinitive.",
      "Subject + Verb + Noun + Past Participle."
    ],
    "correctAnswer": 0,
    "explanation": "The sentence structure is: 'I' (Subject) + 'saw' (Verb) + 'him' (Pronoun/Object) + 'crossing' (Present Participle). 'Crossing' acts as a participle here, describing what the object ('him') was doing. It is not a gerund, which functions as a noun."
  },
  {
    "id": 235,
    "question": "There is no coffee. Would you like a cup of tea instead? Identify the part of speech of the underlined word. (TSTET 2017)",
    "options": [
      "preposition",
      "conjunction",
      "adjective",
      "adverb"
    ],
    "correctAnswer": 3,
    "explanation": "In this sentence, 'instead' is an adverb. It modifies the verb phrase 'would like' and means 'as an alternative'. It answers the question 'how?' or 'in what manner?' one might have the tea (as an alternative to coffee)."
  },
  {
    "id": 236,
    "question": "You make a face... (TSTET 2017)",
    "options": [
      "When you deliberately ignore them.",
      "When you want to control your laughter.",
      "When you are not pleased about something.",
      "When you accept it in a straightforward way."
    ],
    "correctAnswer": 2,
    "explanation": "The idiom 'to make a face' means to create a facial expression that shows dislike, disgust, or displeasure. Therefore, it is used when you are not pleased about something."
  },
  {
    "id": 237,
    "question": "Those who have learnt English use terms like 'thank you' and 'sorry' more often than others who have not learnt English. It means that... (TSTET 2017)",
    "options": [
      "Language is arbitrary.",
      "Language exhibits redundancy.",
      "Language is creative.",
      "Language transmits culture."
    ],
    "correctAnswer": 3,
    "explanation": "The use of specific social expressions like 'thank you' and 'sorry' is a cultural norm. When people learn a language, they also learn the cultural conventions associated with it. This example demonstrates that language is a primary vehicle for transmitting culture."
  },
  {
    "id": 238,
    "question": "Using gestures, expressions and actions is one of the techniques used to teach... (TSTET 2017)",
    "options": [
      "Grammar",
      "Spelling",
      "Vocabulary",
      "Pronunciation"
    ],
    "correctAnswer": 2,
    "explanation": "Physical actions, gestures, and expressions are highly effective for teaching vocabulary, especially to beginners. This technique, often part of methods like Total Physical Response (TPR), helps learners associate words (like verbs or concrete nouns) with their meanings in a memorable, physical way."
  },
  {
    "id": 239,
    "question": "Capital letters are not used... (TSTET 2017)",
    "options": [
      "to begin each fresh line of poetry.",
      "to begin a sentence.",
      "to begin all adjectives, which describe God.",
      "to write the pronoun 'I' and the interjection 'O'."
    ],
    "correctAnswer": 2,
    "explanation": "Capital letters are used to begin sentences, for the pronoun 'I', and often at the start of lines in poetry. However, there is no rule stating that all adjectives describing God must be capitalized. While nouns and pronouns referring to God (God, He, Him) are often capitalized, related adjectives (e.g., divine, almighty) are not, unless they start a sentence."
  },
  {
    "id": 240,
    "question": "One among the following is not the suffix of Adjectives. Identify it. (TSTET 2017)",
    "options": [
      "-ful",
      "-less",
      "-some",
      "-hood"
    ],
    "correctAnswer": 3,
    "explanation": "The suffixes '-ful' (e.g., beautiful), '-less' (e.g., careless), and '-some' (e.g., awesome) are used to form adjectives. The suffix '-hood' (e.g., childhood, brotherhood) is used to form abstract nouns, not adjectives."
  },
  {
    "id": 241,
    "question": "No other democracy in the world is ______. Choose the right option to complete the sentence. (TSTET 2017)",
    "options": [
      "larger than India.",
      "the largest in India.",
      "not so large as India.",
      "as large as India."
    ],
    "correctAnswer": 0,
    "explanation": "The sentence structure 'No other...' is used to express a superlative idea using a comparative form. The statement implies that India is the largest democracy. 'No other democracy in the world is larger than India' correctly conveys this meaning. 'as large as India' would also be grammatically correct, but 'larger than' is a more direct and common comparative structure in this context."
  },
  {
    "id": 242,
    "question": "One among the following does not describe part of our body. Find it out. (TSTET 2017)",
    "options": [
      "plump",
      "curly",
      "wrinkled",
      "trendy"
    ],
    "correctAnswer": 3,
    "explanation": "'Plump' can describe a body shape, 'curly' can describe hair, and 'wrinkled' can describe skin. 'Trendy' means fashionable or modern and describes a style or a person's adherence to fashion, not a physical part of the body itself."
  },
  {
    "id": 243,
    "question": "The exchanges of a conversation between two people are given below in a jumbled order. Identify their right order to make a meaningful conversation. \n(a) Not too well. \n(b) I'm beginning to hate my job. \n(c) Hi George! How have you been? \n(d) How come? What's the matter? \n(e) I thought you quite liked it. \n(TSTET 2017)",
    "options": [
      "c, a, d, b, e",
      "c, d, a, e, b",
      "b, c, e, a, d",
      "d, b, c, e, a"
    ],
    "correctAnswer": 0,
    "explanation": "The logical sequence of a conversation is: \n1. Greeting: (c) Hi George! How have you been? \n2. Response to greeting: (a) Not too well. \n3. Inquiry for more details: (d) How come? What's the matter? \n4. Explanation: (b) I'm beginning to hate my job. \n5. Reaction/follow-up: (e) I thought you quite liked it. \nThis creates the coherent order: c, a, d, b, e."
  },
  {
    "id": 244,
    "question": "Identify the correct question for the reply, 'No, they have to finance their own studies.' (TSTET 2017)",
    "options": [
      "Do they finance your studies?",
      "Do students in your country get a grant?",
      "Do you get credits for your exams?",
      "Do you get a grant for your studies?"
    ],
    "correctAnswer": 1,
    "explanation": "The reply is 'No, they...', indicating the question should be about 'they' (a third-person plural subject, like students). The reply is about financing studies, specifically denying that they get outside funding (like a grant). Option (2) 'Do students in your country get a grant?' fits perfectly as it asks about students ('they') and receiving a grant, to which the given answer is a direct and logical response."
  },
  {
    "id": 245,
    "question": "Read the sentences (a), (b), (c) and (d). Out of them, only two are grammatically correct. Identify them. \n(a) I am seeing the doctor at 10 O' clock. \n(b) I was wondering if you had two single rooms. \n(c) I am looking forward to seeing you again. \n(d) I am liking this music. \n(TSTET 2017)",
    "options": [
      "(b) and (d)",
      "(a) and (b)",
      "(a) and (d)",
      "(b) and (c)"
    ],
    "correctAnswer": 3,
    "explanation": "Let's analyze the sentences: \n(a) Correct. The present continuous is used for fixed future arrangements. \n(b) Correct. 'I was wondering' is a common and polite way to make a request or inquiry. \n(c) Correct. 'Look forward to' is a phrasal verb followed by a gerund ('seeing'). \n(d) Incorrect. 'Like' is a stative verb and is generally not used in the continuous form. It should be 'I like this music.' \nSince the question states only two are correct (even though a, b, and c are all standard English), and the options require choosing a pair, we must select from the available correct pairs. Both (a) & (b) and (b) & (c) are pairs of correct sentences. Given the options, and that such questions can be flawed, (b) and (c) is a very strong pair of standard, idiomatic expressions."
  },
  {
    "id": 246,
    "question": "The British ______ is sailing from Southampton early this morning. Identify the appropriate word to fill in the blank. (TSTET 2017)",
    "options": [
      "fleet",
      "herd",
      "fleece",
      "flock"
    ],
    "correctAnswer": 0,
    "explanation": "The correct collective noun for a group of ships is 'fleet'. A 'herd' is for animals like cattle, a 'flock' is for sheep or birds, and 'fleece' is the wool of a sheep."
  },
  {
    "id": 247,
    "question": "The file / folder with a collection of learner's work assembled over a period of time is... (TSTET 2017)",
    "options": [
      "a Journal",
      "a Portfolio",
      "a Bigbook",
      "a Diary"
    ],
    "correctAnswer": 1,
    "explanation": "A 'Portfolio' is a purposeful collection of a student's work that demonstrates their efforts, progress, and achievements over time. This matches the description perfectly. A journal or diary is for personal reflection, and a bigbook is a teaching tool."
  },
  {
    "id": 248,
    "question": "The correct choice or option among the alternatives in a Multiple Choice Question is called... (TSTET 2017)",
    "options": [
      "Key",
      "Stem",
      "Option",
      "Distractor"
    ],
    "correctAnswer": 0,
    "explanation": "In the terminology of test construction, the 'Stem' is the question part, the 'Options' are all the choices, the incorrect options are 'Distractors', and the correct option is called the 'Key'."
  },
  {
    "id": 249,
    "question": "One of the tools of Formative Assessment is... (TSTET 2017)",
    "options": [
      "Conventions of writing.",
      "Reading comprehension.",
      "Project work.",
      "Grammar."
    ],
    "correctAnswer": 2,
    "explanation": "Formative assessment is used to monitor student learning and provide ongoing feedback during the learning process. 'Project work' is an excellent formative assessment tool because it allows the teacher to observe, guide, and assess the student's process and understanding over time, not just the final product. The other options are subjects or skills to be assessed, not assessment tools themselves."
  },
  {
    "id": 250,
    "question": "One of the features of Diary writing is... (TSTET 2017)",
    "options": [
      "maintaining proper layout of the text.",
      "design and graphics.",
      "use of polite language.",
      "use of language appropriate to mood."
    ],
    "correctAnswer": 3,
    "explanation": "A diary is a personal record of one's thoughts, feelings, and experiences. A key feature is its reflective and personal nature. Therefore, the language used is typically informal and expressive, changing to reflect the writer's mood and emotions. Formal layouts, politeness, and graphics are not primary characteristics."
  },
  {
    "id": 251,
    "question": "Choose the suitable option that explains the underlined expression. The police left no stone unturned to trace the culprit. (TSTET 2023)",
    "options": [
      "used all available means.",
      "did everything.",
      "interrogated every one.",
      "faced all the challenges."
    ],
    "correctAnswer": 0,
    "explanation": "The idiom 'leave no stone unturned' means to do everything possible to achieve a goal or find something. In this context, it signifies that the police tried every possible method to find the culprit. Therefore, 'used all available means' is the most accurate explanation."
  },
  {
    "id": 252,
    "question": "Suresh is usually calm, .......... today he appears rather disturbed. Choose the suitable word to complete the sentence. (TSTET 2023)",
    "options": [
      "also",
      "but",
      "so",
      "despite"
    ],
    "correctAnswer": 1,
    "explanation": "The sentence presents a contrast between how Suresh usually is (calm) and how he appears today (disturbed). The conjunction 'but' is used to connect two contrasting ideas. The other options do not fit the context: 'also' adds information, 'so' indicates a result, and 'despite' is a preposition requiring a different sentence structure."
  },
  {
    "id": 253,
    "question": "Choose the suitable option to complete the sentence. Education is an instrument .......... imparts knowledge and, .......... indirectly controls power. (TSTET 2023)",
    "options": [
      "what, but",
      "who, since",
      "which, therefore",
      "what, therefore"
    ],
    "correctAnswer": 2,
    "explanation": "The first blank needs a relative pronoun to refer to 'instrument'. 'Which' is the correct pronoun for things. The second part of the sentence shows a consequence or result of imparting knowledge. 'Therefore' is the appropriate adverb to indicate this cause-and-effect relationship."
  },
  {
    "id": 254,
    "question": "Choose the suitable subscription for an informal letter. (TSTET 2023)",
    "options": [
      "Yours faithfully",
      "Yours affectionately",
      "Yours obediently",
      "Yours sincerely"
    ],
    "correctAnswer": 1,
    "explanation": "Informal letters are written to friends, family, and close acquaintances. The closing subscription should reflect this personal and warm relationship. 'Yours affectionately' is a suitable closing for an informal letter. 'Yours faithfully', 'Yours obediently', and 'Yours sincerely' are used in formal or business letters."
  },
  {
    "id": 255,
    "question": "Many laws that were passed in various countries over the years now seem ludicrous. The underlined word means: (TSTET 2023)",
    "options": [
      "undeniable",
      "demeaning",
      "obsolete",
      "ridiculous"
    ],
    "correctAnswer": 3,
    "explanation": "The word 'ludicrous' means something is so foolish, unreasonable, or out of place that it is amusing. The best synonym among the choices is 'ridiculous'."
  },
  {
    "id": 256,
    "question": "Based on the passage, the term 'carat' is associated with: (TSTET 2023)",
    "options": [
      "reflection",
      "weight",
      "brightness",
      "cut"
    ],
    "correctAnswer": 1,
    "explanation": "The provided reading passage states, 'The size of a diamond is measured by carat weight.' This directly links the term 'carat' to the 'weight' of the diamond."
  },
  {
    "id": 257,
    "question": "According to the passage, the clarity of a diamond is not affected by: (TSTET 2023)",
    "options": [
      "colourlessness",
      "inner flaws",
      "carbon spots",
      "blemishes"
    ],
    "correctAnswer": 0,
    "explanation": "The passage defines clarity as being 'measured in terms of lack of carbon spots, inner flaws and surface marks or blemishes.' Colour, and therefore 'colourlessness', is mentioned as a separate feature of a diamond's value."
  },
  {
    "id": 258,
    "question": "The word 'reflection' in the passage refers to: (TSTET 2023)",
    "options": [
      "The process in which light causes clarity.",
      "The process by which light is sent back.",
      "The process in which light bends.",
      "The process in which light is separated into different colours."
    ],
    "correctAnswer": 1,
    "explanation": "The general scientific definition of reflection is the throwing back of light from a surface. The passage mentions that a diamond 'reflects internally many times,' which aligns with the concept of light being sent back or bounced inside the stone."
  },
  {
    "id": 259,
    "question": "'These are invisible to the common human eye...' In this sentence from the passage, the underlined word refers to: (TSTET 2023)",
    "options": [
      "Carbon spots, inner flaws and blemishes",
      "Carbon spots and inner flaws.",
      "Carbon spots, inner flaws and cuts.",
      "Carbon spots and cuts."
    ],
    "correctAnswer": 0,
    "explanation": "The sentence immediately preceding the one in question is: 'The clarity of a diamond is measured in terms of lack of carbon spots, inner flaws and surface marks or blemishes.' The pronoun 'These' refers to all the items mentioned in the previous sentence: carbon spots, inner flaws, and blemishes."
  },
  {
    "id": 260,
    "question": "We didn't meet him for many years. The underlined part has to be replaced by: (TSTET 2023)",
    "options": [
      "will not have met",
      "haven't met",
      "hasn't met",
      "hadn't met"
    ],
    "correctAnswer": 1,
    "explanation": "The phrase 'for many years' indicates a period of time that continues up to the present. The present perfect tense is used for such situations. The correct form is 'have not met' or the contraction 'haven't met'. 'Didn't meet' (simple past) would be used for a specific point in the past."
  },
  {
    "id": 261,
    "question": "There is no need to rake up an old dispute. The underlined expression means: (TSTET 2023)",
    "options": [
      "Return",
      "Forget",
      "Forgive",
      "Revive"
    ],
    "correctAnswer": 3,
    "explanation": "The phrasal verb 'to rake up' means to mention or remind people of something unpleasant from the past that they would rather forget. Therefore, 'revive' is the closest in meaning."
  },
  {
    "id": 262,
    "question": "His courage won him honour. The underlined word is a/an: (TSTET 2023)",
    "options": [
      "Quantifier",
      "Adverb",
      "Adjective",
      "Noun"
    ],
    "correctAnswer": 3,
    "explanation": "In the sentence, 'honour' is the direct object of the verb 'won'. It is the name of a quality or concept, making it an abstract noun."
  },
  {
    "id": 263,
    "question": "Calligraphy is a .......... style of handwriting often used for formal greetings, announcements and invitations. Choose the suitable word to complete the sentence. (TSTET 2023)",
    "options": [
      "legible",
      "decoding",
      "decorative",
      "authentic"
    ],
    "correctAnswer": 2,
    "explanation": "Calligraphy is the art of producing beautiful handwriting. It is inherently artistic and ornamental. 'Decorative' best describes this quality. 'Legible' means readable, which is a trait of calligraphy but not its defining characteristic. 'Decoding' and 'authentic' are irrelevant."
  },
  {
    "id": 264,
    "question": "The house was .......... when the owner was on holiday. Choose the correct option to complete the sentence. (TSTET 2023)",
    "options": [
      "broken up",
      "broken off",
      "broken into",
      "broken down"
    ],
    "correctAnswer": 2,
    "explanation": "The context suggests that someone illegally entered the house. The phrasal verb 'to break into' means to enter a building or car by force. The other options have different meanings: 'broken up' (ended a relationship), 'broken off' (ended an engagement), 'broken down' (stopped working)."
  },
  {
    "id": 265,
    "question": "What makes these holes? The sentence can be written as: (TSTET 2023)",
    "options": [
      "What these holes are made by?",
      "What are these holes made?",
      "What these holes are made?",
      "What are these holes made by?"
    ],
    "correctAnswer": 3,
    "explanation": "This is a conversion from active to passive voice. The object of the active sentence ('these holes') becomes the subject of the passive sentence. The question structure 'Wh-word + auxiliary verb + subject + main verb...?' must be maintained. So, 'What + are + these holes + made by?' is the correct passive form."
  },
  {
    "id": 266,
    "question": "'The children had better go to bed early,' Maya said. The sentence can be written as: (TSTET 2023)",
    "options": [
      "Maya said that the children should be better go to bed early.",
      "Maya said that the children had better to go to bed early.",
      "Maya said that the children had better go to bed early.",
      "Maya said that the children should better go to bed early."
    ],
    "correctAnswer": 2,
    "explanation": "When reporting a sentence with the modal expression 'had better', the structure does not change in indirect speech. The word 'that' is added, but 'had better' remains the same. The infinitive that follows ('go') does not take 'to'."
  },
  {
    "id": 267,
    "question": "Very few cities in India are as big as Hyderabad. This sentence can be written as: (TSTET 2023)",
    "options": [
      "Hyderabad is the biggest city in India.",
      "No other city is as big as Hyderabad.",
      "Hyderabad is bigger than most other cities in India.",
      "Hyderabad is not the biggest city in India."
    ],
    "correctAnswer": 2,
    "explanation": "The original sentence is in the positive degree of comparison. It implies that Hyderabad is one of the biggest cities, but not necessarily the single biggest. The comparative degree form that conveys the same meaning is 'Hyderabad is bigger than most other cities in India.' Option 1 ('the biggest') would be the superlative form for 'No other city... is as big as Hyderabad'."
  },
  {
    "id": 268,
    "question": "Don't worry if I have been late tonight. The underlined part has to be replaced by: (TSTET 2023)",
    "options": [
      "when I'll be",
      "if I am",
      "if I'll be",
      "when I'm"
    ],
    "correctAnswer": 1,
    "explanation": "This is a first conditional sentence, which talks about a real possibility in the future. The structure is 'if + simple present, ... will + base verb'. The 'if' clause must use the simple present tense ('if I am'), not the present perfect or future tense."
  },
  {
    "id": 269,
    "question": "Don't be late, ..........? Choose the suitable question tag. (TSTET 2023)",
    "options": [
      "shall you.",
      "won't you.",
      "will you.",
      "do you."
    ],
    "correctAnswer": 2,
    "explanation": "The main clause 'Don't be late' is a negative imperative (a command or request). The standard question tag for imperatives (both positive and negative) is 'will you?'. It is used to make the command sound more like a polite request."
  },
  {
    "id": 270,
    "question": "Pick the correct statement about CCE in the Telangana state board. (TSTET 2023)",
    "options": [
      "In an academic year, formative assessment is conducted four times and summative assessment is conducted three times.",
      "In an academic year, formative assessment is conducted four times and summative assessment is conducted two times.",
      "In an academic year, formative assessment is conducted two times and summative assessment is conducted two times.",
      "In an academic year, formative assessment is conducted four times and summative assessment is conducted one time."
    ],
    "correctAnswer": 1,
    "explanation": "According to the Continuous and Comprehensive Evaluation (CCE) pattern implemented by the Telangana State Board of Secondary Education, the academic year is structured with four Formative Assessments (FAs) and two Summative Assessments (SAs)."
  },
  {
    "id": 271,
    "question": "This question helps in identifying the interpreting ideas, drawing inferences. (TSTET 2023)",
    "options": [
      "Multiple choice question.",
      "Short answer question.",
      "Essay type question.",
      "Very short answer question."
    ],
    "correctAnswer": 2,
    "explanation": "Interpreting ideas and drawing inferences are higher-order thinking skills. Essay type questions are most effective for assessing these skills as they require students to analyze, synthesize, and evaluate information in a detailed, structured response, rather than just recalling facts."
  },
  {
    "id": 272,
    "question": "'Comprehensible input is the crucial and necessary ingredient for the acquisition of language'. This is associated with: (TSTET 2023)",
    "options": [
      "Stephen Krashen",
      "Jean Piaget",
      "Pavlov",
      "Vygotsky"
    ],
    "correctAnswer": 0,
    "explanation": "This statement is the core of the Input Hypothesis, one of the five main hypotheses in Stephen Krashen's theory of second-language acquisition. Krashen posits that learners acquire language by understanding input that is slightly beyond their current level of competence (i+1)."
  },
  {
    "id": 273,
    "question": "Note taking is associated with: (TSTET 2023)",
    "options": [
      "writing and reading",
      "reading",
      "speaking",
      "listening"
    ],
    "correctAnswer": 3,
    "explanation": "Note-taking is the practice of recording information from different sources. While it involves the skill of writing, it is most commonly performed while engaging in receptive skills like listening (e.g., to a lecture) or reading (e.g., from a textbook). Among the given options, listening is a primary activity that necessitates note-taking to retain key information."
  },
  {
    "id": 274,
    "question": "This listening refers to the enjoyment and pleasure. (TSTET 2023)",
    "options": [
      "Appreciative listening.",
      "Critical listening.",
      "Focused listening.",
      "Gist listening."
    ],
    "correctAnswer": 0,
    "explanation": "Appreciative listening is the type of listening where the primary purpose is to enjoy or appreciate what is being heard, such as music, a story, or a poem. It is done for pleasure and entertainment rather than for analyzing or extracting specific information."
  },
  {
    "id": 275,
    "question": "Arrange the stages of producing a syllabus. \nA. Suggesting teaching strategies.\nB. Evaluating the course and learners.\nC. Formulation of objectives.\nD. Learner description and needs.\nE. Deciding on course contents. (TSTET 2023)",
    "options": [
      "A, B, D, C, E",
      "D, A, B, Е, С",
      "D, C, E, A, B",
      "B, A, C, D, E"
    ],
    "correctAnswer": 2,
    "explanation": "Syllabus design follows a logical, systematic process:\n1. **D. Learner description and needs:** First, identify who the learners are and what they need to learn.\n2. **C. Formulation of objectives:** Based on the needs analysis, set clear learning goals and objectives.\n3. **E. Deciding on course contents:** Select the topics, materials, and content that will help achieve the objectives.\n4. **A. Suggesting teaching strategies:** Plan the methods and activities for delivering the content.\n5. **B. Evaluating the course and learners:** Finally, determine how learning will be assessed and the course's effectiveness evaluated.\nTherefore, the correct sequence is D, C, E, A, B."
  },
  {
    "id": 276,
    "question": "India adopted the policy ______ non-alignment in order to steer clear through the cold war. Choose the suitable word to complete the sentence. (TSTET 02 June 2024)",
    "options": [
      "of",
      "to",
      "for",
      "with"
    ],
    "correctAnswer": 0,
    "explanation": "The correct preposition to use here is 'of'. The standard phrase is 'the policy of something,' indicating possession or the nature of the policy. In this context, it correctly forms the phrase 'the policy of non-alignment'."
  },
  {
    "id": 277,
    "question": "Identify the grammatically correct sentence. (TSTET 02 June 2024)",
    "options": [
      "How did the program went off?",
      "How did the program go off?",
      "How did the program gone off?",
      "How did the program going off?"
    ],
    "correctAnswer": 1,
    "explanation": "When forming a question with the auxiliary verb 'did', the main verb must be in its base form (the first form of the verb). 'Go' is the base form. 'Went' is the past tense, 'gone' is the past participle, and 'going' is the present participle. Therefore, 'How did the program go off?' is the correct structure."
  },
  {
    "id": 278,
    "question": "One should love ______ parents. Choose the suitable option to complete the sentence. (TSTET 02 June 2024)",
    "options": [
      "their",
      "our",
      "one's",
      "his"
    ],
    "correctAnswer": 2,
    "explanation": "When the indefinite pronoun 'one' is used as the subject of a sentence, the corresponding possessive adjective is 'one's'. The sentence must maintain pronoun consistency. Thus, 'One should love one's parents' is the correct form."
  },
  {
    "id": 279,
    "question": "We ______ for the guest, when you arrived yesterday. Choose the suitable answer. (TSTET 02 June 2024)",
    "options": [
      "waiting",
      "were waiting",
      "has waited",
      "are waiting"
    ],
    "correctAnswer": 1,
    "explanation": "This sentence describes a past action ('waiting') that was in progress when another action ('arrived') occurred. This structure requires the past continuous tense for the ongoing action. The subject 'We' is plural, so the correct verb form is 'were waiting'."
  },
  {
    "id": 280,
    "question": "The office is open ______ Monday and Saturday. Choose the suitable word to complete the sentence. (TSTET 02 June 2024)",
    "options": [
      "between",
      "from",
      "over",
      "to"
    ],
    "correctAnswer": 0,
    "explanation": "The preposition 'between' is used to indicate the interval connecting two points, people, or things. The construction 'between... and...' is correctly used here to define the period from Monday to Saturday."
  },
  {
    "id": 281,
    "question": "The foreign delegate has spoken ______. Choose the appropriate word to complete the sentence. (TSTET 02 June 2024)",
    "options": [
      "frank",
      "openly",
      "open",
      "fair"
    ],
    "correctAnswer": 1,
    "explanation": "The verb 'spoken' needs to be modified by an adverb that describes how the action was performed. 'Openly' is the adverb. 'Frank', 'open', and 'fair' are adjectives and cannot modify a verb in this way."
  },
  {
    "id": 282,
    "question": "She ______ her homework just now. Choose the suitable answer. (TSTET 02 June 2024)",
    "options": [
      "completed",
      "has completed",
      "have completed",
      "had completed"
    ],
    "correctAnswer": 1,
    "explanation": "The time marker 'just now' indicates a very recent past action with relevance to the present, which calls for the present perfect tense. The structure for the third-person singular subject 'She' is 'has + past participle (V3)'. Therefore, 'has completed' is correct."
  },
  {
    "id": 283,
    "question": "Choose the correctly spelt word from the given options. (TSTET 02 June 2024)",
    "options": [
      "occasionaly",
      "ocassionally",
      "occasionally",
      "occassionally"
    ],
    "correctAnswer": 2,
    "explanation": "The correct spelling of the word is 'occasionally'. It is often misspelled, but the correct form has a double 'c', a single 's', and a double 'l'."
  },
  {
    "id": 284,
    "question": "Let's go to the market, ______? Choose the correct question tag. (TSTET 02 June 2024)",
    "options": [
      "shan't we?",
      "don't we?",
      "do we?",
      "shall we?"
    ],
    "correctAnswer": 3,
    "explanation": "For imperative sentences that start with 'Let's' (Let us), which are suggestions or proposals, the standard and correct question tag is 'shall we?'."
  },
  {
    "id": 285,
    "question": "Identify the part with an error in the given sentence.\nThe boys (A) plays (B) in the ground (C) every day (D). (TSTET 02 June 2024)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctAnswer": 1,
    "explanation": "The error is in part (B). The subject of the sentence is 'The boys', which is plural. According to the rule of subject-verb agreement, a plural subject requires a plural verb. The verb 'plays' is singular; the correct plural form is 'play'."
  },
  {
    "id": 286,
    "question": "The price of the ______ oil is increasing these days. Choose the appropriate option to fill the blank. (TSTET 02 June 2024)",
    "options": [
      "edible",
      "indelible",
      "audible",
      "discernible"
    ],
    "correctAnswer": 0,
    "explanation": "'Edible' means fit or suitable to be eaten. This is the correct word to describe oil used for cooking or consumption. 'Indelible' means cannot be removed, 'audible' means can be heard, and 'discernible' means can be perceived."
  },
  {
    "id": 287,
    "question": "She ______ dance since 2015. Identify the verb form to complete the sentence. (TSTET 02 June 2024)",
    "options": [
      "learnt",
      "is learning",
      "was learning",
      "has been learning"
    ],
    "correctAnswer": 3,
    "explanation": "The use of 'since 2015' indicates an action that began in the past and continues up to the present moment. This requires the present perfect continuous tense. The correct structure for the subject 'She' is 'has been + present participle (-ing)'."
  },
  {
    "id": 288,
    "question": "Identify the subscription which is NOT appropriate for an informal letter. (TSTET 02 June 2024)",
    "options": [
      "Yours lovingly",
      "Yours affectionately",
      "Yours sincerely",
      "With lovely"
    ],
    "correctAnswer": 2,
    "explanation": "'Yours sincerely' is a standard closing for formal letters, particularly in British English, used when you know the recipient's name. 'Yours lovingly' and 'Yours affectionately' are used for informal letters to friends and family. 'With lovely' is grammatically incorrect."
  },
  {
    "id": 289,
    "question": "His father is ______ professor. Choose the appropriate answer. (TSTET 02 June 2024)",
    "options": [
      "an university",
      "a university",
      "the university",
      "university"
    ],
    "correctAnswer": 1,
    "explanation": "The choice of the indefinite article ('a' or 'an') depends on the sound of the word that follows. The word 'university' begins with a 'y' sound (/juːnɪˈvɜːrsəti/), which is a consonant sound, even though the first letter 'u' is a vowel. Therefore, the correct article is 'a'."
  },
  {
    "id": 290,
    "question": "The artist frequently visits the art gallery. Choose the antonym for the word 'frequently'. (TSTET 02 June 2024)",
    "options": [
      "daily",
      "always",
      "regularly",
      "seldom"
    ],
    "correctAnswer": 3,
    "explanation": "'Frequently' means often. The antonym, or the word with the opposite meaning, is 'seldom', which means rarely or not often. 'Daily', 'always', and 'regularly' are related to high frequency and are not antonyms."
  },
  {
    "id": 291,
    "question": "Choose the correctly combined sentence.\nA: Radha was ill.\nB: She could attend the meeting. (TSTET 02 June 2024)",
    "options": [
      "As Radha was ill, she attended the meeting.",
      "Radha was ill so she attended the meeting.",
      "In spite of her illness. Radha didn't attend the meeting.",
      "Though Radha was ill. she attended the meeting"
    ],
    "correctAnswer": 3,
    "explanation": "The two sentences express a contrast: being ill should prevent attendance, but she attended anyway. The conjunction 'Though' is used to introduce a subordinate clause that expresses a concession or contrast. The other options use incorrect conjunctions for this context ('As', 'so') or incorrectly negate the second sentence."
  },
  {
    "id": 292,
    "question": "The astronaut said, \"It's a small step for a man but a giant leap for mankind.\" Choose the synonym for the word \"giant\". (TSTET 02 June 2024)",
    "options": [
      "small",
      "tiny",
      "big",
      "dwarf"
    ],
    "correctAnswer": 2,
    "explanation": "A 'synonym' is a word with the same or a similar meaning. 'Giant' means of a very large size. 'Big' is a direct synonym. 'Small', 'tiny', and 'dwarf' are antonyms (words with opposite meanings)."
  },
  {
    "id": 293,
    "question": "Identify the silent consonant letter in the word 'hustle'. (TSTET 02 June 2024)",
    "options": [
      "h",
      "t",
      "s",
      "l"
    ],
    "correctAnswer": 1,
    "explanation": "In the word 'hustle' (pronounced /ˈhʌsəl/), the letter 't' is not pronounced. It is a silent letter, which is common in English words ending with '-stle', such as 'castle' and 'whistle'."
  },
  {
    "id": 294,
    "question": "The ______ of wolves started hunting the dear. Choose the appropriate word to complete the sentence. (TSTET 02 June 2024)",
    "options": [
      "flock",
      "pack",
      "troop",
      "pride"
    ],
    "correctAnswer": 1,
    "explanation": "A 'collective noun' is a word used to represent a group of individuals. The correct collective noun for a group of wolves is a 'pack'. A 'flock' is for sheep or birds, a 'troop' is for monkeys, and a 'pride' is for lions."
  },
  {
    "id": 295,
    "question": "Children sit in groups and share within the group their reading experience. This reading is ______. (TSTET 02 June 2024)",
    "options": [
      "Individual reading.",
      "Solo reading.",
      "Isolated reading.",
      "Collaborative reading."
    ],
    "correctAnswer": 3,
    "explanation": "The activity described involves students working together ('sit in groups') and interacting ('share... their reading experience'). This is a clear example of 'collaborative reading', where learning is a social and cooperative process. The other options describe reading alone."
  },
  {
    "id": 296,
    "question": "This assessment provides feedback to students during the learning process. (TSTET 02 June 2024)",
    "options": [
      "Summative Assessment",
      "Formative Assessment",
      "Term end Assessment",
      "Year end Assessment"
    ],
    "correctAnswer": 1,
    "explanation": "'Formative assessment' is the process of monitoring student learning to provide ongoing feedback. It occurs during the instructional process to help teachers and students identify strengths and weaknesses. In contrast, 'summative assessment' evaluates learning at the end of an instructional period."
  },
  {
    "id": 297,
    "question": "The following is NOT a part of lesson plan (TSTET 02 June 2024)",
    "options": [
      "Number of periods required and activities",
      "Teaching and Learning Materials",
      "Expected outcomes from the lesson",
      "Students grades and marks"
    ],
    "correctAnswer": 3,
    "explanation": "A lesson plan is a forward-looking document that outlines the objectives, activities, materials, and procedures for a lesson before it is taught. 'Students grades and marks' are a record of performance gathered after the lesson and subsequent assessment have taken place. They are a result of the lesson, not a component of the plan itself."
  },
  {
    "id": 298,
    "question": "In Aural-oral skills: oral skill is pertaining to (TSTET 02 June 2024)",
    "options": [
      "Speaking.",
      "Reading.",
      "Writing.",
      "Guessing."
    ],
    "correctAnswer": 0,
    "explanation": "The term 'aural-oral' refers to the skills of listening and speaking. 'Aural' relates to the ear or the sense of hearing (listening), while 'oral' relates to the mouth (speaking). Therefore, the oral skill is speaking."
  },
  {
    "id": 299,
    "question": "Pick the best classroom practice for developing speaking skill of the learners. (TSTET 02 June 2024)",
    "options": [
      "Following the teacher's loud reading and repeating after him/her",
      "Participating in the role plays, debates and discussions",
      "Memorising the poems and rhymes",
      "Reading the stories along with the teacher"
    ],
    "correctAnswer": 1,
    "explanation": "Speaking skills are best developed through active, communicative practice. 'Participating in role plays, debates and discussions' provides students with authentic opportunities to use language, express opinions, and interact with others. The other options are more passive or focus on receptive skills rather than productive speaking skills."
  },
  {
    "id": 300,
    "question": "MOOC stands for (TSTET 02 June 2024)",
    "options": [
      "Massive Open Online Course.",
      "Massive Open Offline Course.",
      "Massive Open Online Content.",
      "Massive Offer Online Course."
    ],
    "correctAnswer": 0,
    "explanation": "MOOC is an acronym that stands for 'Massive Open Online Course'. It refers to an online course aimed at unlimited participation and open access via the web."
  },
  {
    "id": 301,
    "question": "Science and technology is now considered ______ be the instruments of all comforts and prosperity. Choose the correct preposition. (TSTET 02 June 2024)",
    "options": [
      "of",
      "for",
      "to",
      "by"
    ],
    "correctAnswer": 2,
    "explanation": "The phrase 'considered to be' is a standard and correct grammatical construction used to mean 'regarded as' or 'thought of as'. The other prepositions do not fit this idiomatic expression."
  },
  {
    "id": 302,
    "question": "The ticket collector ______ the passenger, 'Please show me your ticket.' Choose the correct option. (TSTET 02 June 2024)",
    "options": [
      "told to",
      "asked to",
      "asked for",
      "asked"
    ],
    "correctAnswer": 3,
    "explanation": "When reporting a direct request, the verb 'asked' is the most appropriate choice. 'Told to' implies a command, 'asked to' would require a different sentence structure (e.g., 'asked the passenger to show...'), and 'asked for' is used to request an object (e.g., 'asked for the ticket')."
  },
  {
    "id": 303,
    "question": "Osmium is ______ of all known metals. Choose the correct option. (TSTET 02 June 2024)",
    "options": [
      "a heaviest",
      "the heaviest",
      "an heaviest",
      "heaviest"
    ],
    "correctAnswer": 1,
    "explanation": "The sentence uses the superlative form of the adjective, 'heaviest,' to compare osmium to all other metals. Superlative adjectives are preceded by the definite article 'the'."
  },
  {
    "id": 304,
    "question": "Rajneesh is a friend of ______. Identify the appropriate pronoun. (TSTET 02 June 2024)",
    "options": [
      "mine",
      "my",
      "myself",
      "me"
    ],
    "correctAnswer": 0,
    "explanation": "The phrase 'a friend of mine' is a standard English expression known as a double possessive. 'Mine' is a possessive pronoun that means 'my friend' in this context. Using 'my' would be grammatically incorrect ('a friend of my')."
  },
  {
    "id": 305,
    "question": "They ______ in New York for the past ten years. (TSTET 02 June 2024)",
    "options": [
      "are staying",
      "had being staying",
      "have been staying",
      "has been staying"
    ],
    "correctAnswer": 2,
    "explanation": "The phrase 'for the past ten years' indicates an action that started in the past and is still continuing in the present. The present perfect continuous tense ('have been staying') is used to describe such ongoing actions. The plural subject 'They' requires 'have'."
  },
  {
    "id": 306,
    "question": "The CEO of the company has put in his papers. The expression 'put in his papers' means: (TSTET 02 June 2024)",
    "options": [
      "applied for the post.",
      "resigned from the post.",
      "assumed the charge of the post.",
      "been transferred to other post."
    ],
    "correctAnswer": 1,
    "explanation": "The idiom 'to put in one's papers' means to formally submit one's resignation from a job or position."
  },
  {
    "id": 307,
    "question": "The president has presided ______ the meeting. Choose the correct option to complete the following sentence. (TSTET 02 June 2024)",
    "options": [
      "over",
      "by",
      "from",
      "of"
    ],
    "correctAnswer": 0,
    "explanation": "The verb 'preside' is always followed by the preposition 'over' when referring to being in charge of a formal meeting or gathering. 'Preside over' is the correct phrasal verb."
  },
  {
    "id": 308,
    "question": "Choose the correctly spelt word from the given options. (TSTET 02 June 2024)",
    "options": [
      "secratary",
      "secretery",
      "secretry",
      "secretary"
    ],
    "correctAnswer": 3,
    "explanation": "The correct spelling for a person employed in an office to assist with correspondence, keep records, and carry out administrative tasks is 'secretary'."
  },
  {
    "id": 309,
    "question": "The boy seldom went to college last year, ______? Choose the correct question tag to complete the sentence. (TSTET 02 June 2024)",
    "options": [
      "didn't he?",
      "doesn't he?",
      "did he?",
      "does he?"
    ],
    "correctAnswer": 2,
    "explanation": "The word 'seldom' is a negative adverb, which makes the main statement negative. A negative statement requires a positive question tag. Since the verb is in the past tense ('went'), the auxiliary verb in the tag must be 'did'. Therefore, the correct tag is 'did he?'."
  },
  {
    "id": 310,
    "question": "If she had worked hard, she ______ in her career. Choose the suitable option. (TSTET 02 June 2024)",
    "options": [
      "would succeed",
      "would have succeeded",
      "succeed",
      "will be succeeding"
    ],
    "correctAnswer": 1,
    "explanation": "This sentence is a Type 3 conditional, used for unreal past conditions. The correct structure is: If + past perfect (had worked), ...would have + past participle (would have succeeded)."
  },
  {
    "id": 311,
    "question": "Identify the correct verb form to complete the sentence. A: When will you reach there? B: I ______ tomorrow. (TSTET 02 June 2024)",
    "options": [
      "reaching",
      "reaches",
      "would reached",
      "will reach"
    ],
    "correctAnswer": 3,
    "explanation": "The question is asked in the simple future tense ('When will you reach...?'). The response should also be in the simple future tense to indicate an action that will happen at a future time ('tomorrow'). 'I will reach' is the correct form."
  },
  {
    "id": 312,
    "question": "Identify the correct subscription in formal letter writing. (TSTET 02 June 2024)",
    "options": [
      "Yours lovingly",
      "Yours affectionately",
      "Yours friendly",
      "Yours sincerely"
    ],
    "correctAnswer": 3,
    "explanation": "'Yours sincerely' is the standard and correct closing (subscription) for a formal letter, particularly when the recipient's name is known. 'Yours lovingly' and 'Yours affectionately' are for informal letters, and 'Yours friendly' is grammatically incorrect."
  },
  {
    "id": 313,
    "question": "Who is ______ of the college? Choose the correct answer. (TSTET 02 June 2024)",
    "options": [
      "a principal",
      "an principal",
      "the principal",
      "principal"
    ],
    "correctAnswer": 2,
    "explanation": "The definite article 'the' is used because 'principal' refers to a specific, unique position within a particular college. There is only one principal of the college."
  },
  {
    "id": 314,
    "question": "There is a tiny hole in the wall. Choose the opposite word for the word 'tiny.' (TSTET 02 June 2024)",
    "options": [
      "giant",
      "small",
      "minute",
      "negligible"
    ],
    "correctAnswer": 0,
    "explanation": "The word 'tiny' means extremely small. The opposite is 'giant,' which means extremely large. 'Small,' 'minute,' and 'negligible' are all synonyms or related in meaning to 'tiny'."
  },
  {
    "id": 315,
    "question": "Choose the sentence which is different in meaning. (TSTET 02 June 2024)",
    "options": [
      "No other city in India is as big as Mumbai.",
      "Mumbai is the biggest city in India.",
      "Mumbai is one of the biggest cities in India.",
      "Mumbai is bigger than any other city in India."
    ],
    "correctAnswer": 2,
    "explanation": "The first, second, and fourth sentences all mean that Mumbai is the single largest city in India. The third sentence, 'Mumbai is one of the biggest cities in India,' implies that there are other cities of a similar large size, making it different in meaning."
  },
  {
    "id": 316,
    "question": "The Government felicitated the athletes for their commendable achievement. Choose the synonym for the word 'commendable.' (TSTET 02 June 2024)",
    "options": [
      "admirable",
      "meagre",
      "insignificant",
      "worthless"
    ],
    "correctAnswer": 0,
    "explanation": "'Commendable' means deserving praise and approval. 'Admirable' also means arousing respect and approval, making it the correct synonym. The other options are antonyms."
  },
  {
    "id": 317,
    "question": "Identify the silent consonant letter in the word 'honorary'. (TSTET 02 June 2024)",
    "options": [
      "h",
      "n",
      "r",
      "y"
    ],
    "correctAnswer": 0,
    "explanation": "In the word 'honorary,' the initial letter 'h' is not pronounced. The word begins with a vowel sound, which is why it is preceded by the article 'an' (e.g., 'an honorary degree')."
  },
  {
    "id": 318,
    "question": "Choose the appropriate word to complete the sentence. A: Whose pen is this? B: This pen is ______. (TSTET 02 June 2024)",
    "options": [
      "her",
      "herself",
      "hers",
      "she's"
    ],
    "correctAnswer": 2,
    "explanation": "'Hers' is a possessive pronoun that stands alone to indicate ownership (it means 'her pen'). 'Her' is a possessive adjective and must be followed by a noun (her pen). 'Herself' is a reflexive pronoun, and 'she's' is a contraction of 'she is'."
  },
  {
    "id": 319,
    "question": "Choose the grammatically correct sentence. (TSTET 02 June 2024)",
    "options": [
      "I bought an electronic gadget whom was working well.",
      "I bought an electronic gadget which was working well.",
      "I bought an electronic gadget who was working well.",
      "I bought an electronic gadget whose was working well"
    ],
    "correctAnswer": 1,
    "explanation": "The relative pronoun 'which' is used to refer to inanimate objects or animals ('an electronic gadget'). 'Who' and 'whom' are used for people, and 'whose' indicates possession."
  },
  {
    "id": 320,
    "question": "The interaction on 'Face sheet' given at the beginning of the lesson in the Primary English Textbook of Telangana State Board' is a (TSTET 02 June 2024)",
    "options": [
      "Post-reading activity.",
      "Pre-reading activity.",
      "While reading activity.",
      "Home reading activity."
    ],
    "correctAnswer": 1,
    "explanation": "An activity at the beginning of a lesson, like a 'face sheet,' is designed to activate students' prior knowledge, generate interest, and prepare them for the main topic. This type of task is known as a pre-reading activity."
  },
  {
    "id": 321,
    "question": "'Use capital letters, full stop (.), comma (.), question mark (?), wherever necessary and rewrite the following sentences.' This question comes under (TSTET 02 June 2024)",
    "options": [
      "Conventions of Writing.",
      "Creative Writing.",
      "Reading comprehension.",
      "Vocabulary."
    ],
    "correctAnswer": 0,
    "explanation": "The task assesses a student's knowledge and application of standard rules like punctuation and capitalization. These established rules of written language are known as the 'conventions of writing'."
  },
  {
    "id": 322,
    "question": "A comprehensive test that provides feedback to teachers and students on their strengths and weaknesses is (TSTET 02 June 2024)",
    "options": [
      "Diagnostic Tests.",
      "Proficiency Tests.",
      "Achievement Tests.",
      "Placement Tests."
    ],
    "correctAnswer": 0,
    "explanation": "The main purpose of a diagnostic test is to identify, or 'diagnose,' specific areas of difficulty or strength for a learner. This allows the teacher to provide targeted support."
  },
  {
    "id": 323,
    "question": "Identify an activity for developing listening skill. (TSTET 02 June 2024)",
    "options": [
      "News on the radio",
      "Poster",
      "Advertisement board",
      "Brochure"
    ],
    "correctAnswer": 0,
    "explanation": "Listening to 'news on the radio' is an auditory task that requires one to process spoken information, thereby directly developing listening skills. The other options are visual media that are used to develop reading skills."
  },
  {
    "id": 324,
    "question": "Which of the following is a continuous evaluation? (TSTET 02 June 2024)",
    "options": [
      "term end evaluation",
      "formative evaluation",
      "summative evaluation",
      "periodic evaluation"
    ],
    "correctAnswer": 1,
    "explanation": "Formative evaluation is an ongoing process that occurs during the learning process to monitor understanding and provide continuous feedback. Summative and term-end evaluations happen at the end of a learning period to measure overall achievement."
  },
  {
    "id": 325,
    "question": "The following is a national digital open educational resources platform. (TSTET 02 June 2024)",
    "options": [
      "NISHTHA",
      "DIKSHA",
      "SAKSHAM",
      "NMMS"
    ],
    "correctAnswer": 1,
    "explanation": "DIKSHA (Digital Infrastructure for Knowledge Sharing) is a national platform initiated by the Ministry of Education, India, which serves as a repository of open educational resources for teachers and students across the country."
  },
  {
    "id": 326,
    "question": "Physiotherapy can ______ some types of pain. Complete the sentence with correct option. (TSTET 30 May 2024)",
    "options": [
      "lesson",
      "lessen",
      "lesser",
      "lessee"
    ],
    "correctAnswer": 1,
    "explanation": "The sentence requires a verb that means 'to reduce' or 'make less severe.' 'Lessen' is the correct verb. 'Lesson' is a noun (a period of teaching). 'Lesser' is an adjective (smaller in amount or importance). 'Lessee' is a noun (a person who holds the lease of a property)."
  },
  {
    "id": 327,
    "question": "I assumed that you were an extrovert. Choose the antonym for the word 'extrovert.' (TSTET 30 May 2024)",
    "options": [
      "boaster",
      "social",
      "introvert",
      "vocal"
    ],
    "correctAnswer": 2,
    "explanation": "An 'extrovert' is an outgoing, sociable person. The direct antonym is 'introvert,' which describes a shy, reticent person. 'Boaster' means someone who brags. 'Social' is a quality often associated with extroverts. 'Vocal' means expressing opinions freely."
  },
  {
    "id": 328,
    "question": "Identify the part that contains an error in the sentence.\nThe police detective (A) careful (B) collected the samples (C) for DNA testing. (D) (TSTET 30 May 2024)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctAnswer": 1,
    "explanation": "The verb 'collected' needs to be modified by an adverb, not an adjective. The adjective 'careful' (part B) should be the adverb 'carefully' to describe how the detective collected the samples. The correct sentence is 'The police detective carefully collected the samples...'"
  },
  {
    "id": 329,
    "question": "'Don't say a word.' This sentence indicates ______. (TSTET 30 May 2024)",
    "options": [
      "Command.",
      "Request.",
      "Question.",
      "Seeking permission."
    ],
    "correctAnswer": 0,
    "explanation": "This is an imperative sentence that gives a direct order or instruction. It is therefore a command. It is not phrased as a polite request (e.g., 'Please don't say a word'), a question, or a request for permission."
  },
  {
    "id": 330,
    "question": "Pick the grammatically INCORRECT sentence. (TSTET 30 May 2024)",
    "options": [
      "The children are excited to see an elephant at the zoo.",
      "Elephants needs extensively land areas to survival.",
      "The largest living land animal is the African Elephant.",
      "Elephants are among the most intelligent animals."
    ],
    "correctAnswer": 1,
    "explanation": "This sentence has multiple errors. 'Elephants' is plural, so the verb should be 'need' (not 'needs'). The adverb 'extensively' should be the adjective 'extensive' to modify 'land areas'. The noun 'survival' should be the infinitive verb 'to survive'. The correct sentence is: 'Elephants need extensive land areas to survive.'"
  },
  {
    "id": 331,
    "question": "Choose the option that best expresses the meaning of the idiom 'To Bell the Cat'. (TSTET 30 May 2024)",
    "options": [
      "To chase a cat",
      "To have a comfort",
      "To play with a cat",
      "To face a risk"
    ],
    "correctAnswer": 3,
    "explanation": "The idiom 'to bell the cat' originates from a fable where mice discuss putting a bell on a cat to warn of its approach. It refers to undertaking a dangerous or impossible task for the benefit of a group, which means to face a risk."
  },
  {
    "id": 332,
    "question": "Choose the correctly spelt word. (TSTET 30 May 2024)",
    "options": [
      "Accelerate",
      "Acselerate",
      "Accelarate",
      "Accilerate"
    ],
    "correctAnswer": 0,
    "explanation": "The correct spelling is 'Accelerate,' with a double 'c' and the '-elerate' suffix. The other options are common misspellings."
  },
  {
    "id": 333,
    "question": "Thieves ______ the house in the middle of the night. Choose the correct option to complete the sentence. (TSTET 30 May 2024)",
    "options": [
      "break up",
      "broke out",
      "broke into",
      "broke down"
    ],
    "correctAnswer": 2,
    "explanation": "The phrasal verb 'broke into' means to enter a building illegally, usually by force. 'Break up' means to end a relationship. 'Broke out' means to start suddenly (like a fire). 'Broke down' means to stop functioning. 'Broke into' is the only option that fits the context."
  },
  {
    "id": 334,
    "question": "We know ______ he was honest. Fill in the blank with the appropriate option. (TSTET 30 May 2024)",
    "options": [
      "this",
      "that",
      "than",
      "about"
    ],
    "correctAnswer": 1,
    "explanation": "The word 'that' is used here as a conjunction to introduce a subordinate clause ('he was honest') that functions as the object of the verb 'know'."
  },
  {
    "id": 335,
    "question": "Negligence causes many serious accidents. Select the passive voice sentence. (TSTET 30 May 2024)",
    "options": [
      "Many serious accidents are caused by negligence.",
      "Many accidents serious are caused by negligence.",
      "Many serious accidents are causes by negligence.",
      "Many serious are accidents caused by negligence."
    ],
    "correctAnswer": 0,
    "explanation": "To change the active sentence to passive, the object ('many serious accidents') becomes the new subject. The verb changes to 'to be' + past participle ('are caused'). The original subject ('Negligence') becomes the object of the preposition 'by'. Option 1 follows this structure correctly."
  },
  {
    "id": 336,
    "question": "Which of the following is an interrogative sentence? (TSTET 30 May 2024)",
    "options": [
      "Parents are responsible for the safety of their children.",
      "The Minister will hold a press conference tomorrow.",
      "Do you like reading books or watching movies?",
      "I wanted to practice speaking French with native speakers."
    ],
    "correctAnswer": 2,
    "explanation": "An interrogative sentence asks a question and ends with a question mark. Option 3 begins with an auxiliary verb ('Do') and ends with a question mark, making it the only interrogative sentence. The others are declarative statements."
  },
  {
    "id": 337,
    "question": "Many ______ had been prepared for the festival. Fill in the blank with the correct option. (TSTET 30 May 2024)",
    "options": [
      "sweet dish",
      "sweets dishes",
      "sweets dish",
      "sweet dishes"
    ],
    "correctAnswer": 3,
    "explanation": "The quantifier 'Many' requires a plural noun. 'Dish' is a countable noun, and its plural form is 'dishes'. 'Sweet' acts as an adjective modifying 'dishes'. Therefore, the correct phrase is 'sweet dishes'."
  },
  {
    "id": 338,
    "question": "youre my friend very best friend\nChoose the correctly punctuated sentence. (TSTET 30 May 2024)",
    "options": [
      "You're, my friend very Best friend.",
      "You're my friend, very best friend.",
      "You're my, Friend very best friend.",
      "You're my friend. Very best friend"
    ],
    "correctAnswer": 1,
    "explanation": "'Youre' must be written as 'You're' (a contraction for 'you are'). The phrase 'very best friend' is an appositive that renames 'my friend' and should be set off by a comma. Option 2 uses the correct punctuation."
  },
  {
    "id": 339,
    "question": "Give the gift to ______ comes first. Fill in the blank with the correct option. (TSTET 30 May 2024)",
    "options": [
      "whatever",
      "whomever",
      "whoever",
      "whichever"
    ],
    "correctAnswer": 2,
    "explanation": "The blank requires the subject of the verb 'comes'. 'Whoever' is a subject pronoun. 'Whomever' is an object pronoun. Since the person 'comes first,' 'whoever' is the correct choice to act as the subject of the clause."
  },
  {
    "id": 340,
    "question": "A handwriting that cannot be read (TSTET 30 May 2024)",
    "options": [
      "Inedible",
      "Illegible",
      "Illusion",
      "Illegal"
    ],
    "correctAnswer": 1,
    "explanation": "'Illegible' means not clear enough to be read. 'Inedible' means not fit for eating. 'Illusion' is a deceptive appearance. 'Illegal' means contrary to law."
  },
  {
    "id": 341,
    "question": "He said, 'I am writing stories.' Select the sentence in indirect speech. (TSTET 30 May 2024)",
    "options": [
      "He said that he writes stories.",
      "He said that he had writing stories.",
      "He said that I was writing stories.",
      "He said that he was writing stories."
    ],
    "correctAnswer": 3,
    "explanation": "When converting to indirect speech, the pronoun 'I' changes to 'he'. Since the reporting verb 'said' is in the past, the present continuous tense ('am writing') changes to the past continuous tense ('was writing')."
  },
  {
    "id": 342,
    "question": "Identify the correct sentence. (TSTET 30 May 2024)",
    "options": [
      "My mother wants me to turn the TV off and have dinner.",
      "Police are looking to in connections between two the crimes.",
      "We need to come with up a solution.",
      "Nothing comes us between."
    ],
    "correctAnswer": 0,
    "explanation": "Option 1 is grammatically correct. Option 2 has incorrect word order; it should be 'looking into connections...'. Option 3 incorrectly splits the phrasal verb 'come up with'. Option 4 has incorrect word order; it should be 'Nothing comes between us'."
  },
  {
    "id": 343,
    "question": "Arrange the following in order to form a meaningful sentence.\nA) After the Second World War,\nB) to prevent the conflicts of war\nC) to build the institutions\nD) the leaders of western world tried\n (TSTET 30 May 2024)",
    "options": [
      "A, B, C, D",
      "A, D, B, C",
      "A, D, C, B",
      "A, B, D, C"
    ],
    "correctAnswer": 2,
    "explanation": "The logical sequence is: (A) Sets the time frame, (D) introduces the subject and verb, (C) states what they tried to do, and (B) explains the purpose. The complete sentence is: 'After the Second World War, the leaders of western world tried to build the institutions to prevent the conflicts of war.'"
  },
  {
    "id": 344,
    "question": "Medical science has ______ almost everything except death. Pick the suitable option to fill in the blank. (TSTET 30 May 2024)",
    "options": [
      "surrendered",
      "give up",
      "conquered",
      "conceded"
    ],
    "correctAnswer": 2,
    "explanation": "'Conquered' is used metaphorically to mean overcoming a problem or fear. In this context, it means medical science has overcome most diseases. 'Surrendered' and 'give up' mean to stop resisting. 'Conceded' means to admit something is true."
  },
  {
    "id": 345,
    "question": "This is a component in each unit of primary English textbook of Telangana State Board for the self assessment of the students on the unit they read. (TSTET 30 May 2024)",
    "options": [
      "How well did I understand this unit?",
      "How much did I remember from this unit?",
      "How well my teacher taught this unit?",
      "How can I improve my learning?"
    ],
    "correctAnswer": 0,
    "explanation": "This question refers to a specific feature of the Telangana State Board curriculum. The self-assessment section in these textbooks is typically titled 'How well did I understand this unit?' to promote student reflection on their learning and comprehension."
  },
  {
    "id": 346,
    "question": "The following is NOT a feature of 'Language Acquisition.' (TSTET 30 May 2024)",
    "options": [
      "Natural process",
      "Meaningful interaction",
      "Conscious process",
      "Focus on communication"
    ],
    "correctAnswer": 2,
    "explanation": "Language acquisition is the subconscious and natural process of learning a language through immersion and interaction, much like a child learning their first language. In contrast, language learning is a 'conscious process' that involves formal instruction and rules. Therefore, 'conscious process' is a feature of learning, not acquisition."
  },
  {
    "id": 347,
    "question": "'Universal Grammar' is associated with ______. (TSTET 30 May 2024)",
    "options": [
      "Pavlov",
      "Skinner",
      "Chomsky",
      "Piaget"
    ],
    "correctAnswer": 2,
    "explanation": "The theory of Universal Grammar was proposed by the linguist Noam Chomsky. It posits that the ability to learn grammar is innate and hard-wired into the human brain. Pavlov and Skinner are associated with behaviorism, while Piaget is known for his theory of cognitive development."
  },
  {
    "id": 348,
    "question": "The main advantage of reading aloud is that ______. (TSTET 30 May 2024)",
    "options": [
      "it helps the readers to maintain calm in the classroom.",
      "it enables readers to think while reading.",
      "it is a faster way of reading.",
      "it improves pronunciation and articulation."
    ],
    "correctAnswer": 3,
    "explanation": "Reading aloud provides direct practice in vocalizing words, which is essential for improving pronunciation (saying words correctly) and articulation (speaking clearly). Silent reading is generally faster and more conducive to deep thinking and comprehension."
  },
  {
    "id": 349,
    "question": "In India, English was first introduced in education during this Governor-General's rule ______. (TSTET 30 May 2024)",
    "options": [
      "Lord Canning",
      "Lord Dalhousie",
      "Warren Hastings",
      "Lord William Bentinck"
    ],
    "correctAnswer": 3,
    "explanation": "Lord William Bentinck was the Governor-General of India when the English Education Act of 1835 was passed. This act, based on Thomas Babington Macaulay's 'Minute on Indian Education,' made English the medium of instruction in higher education in India."
  },
  {
    "id": 350,
    "question": "The following is least important while choosing the children literature. (TSTET 30 May 2024)",
    "options": [
      "font size of the text",
      "reputation of the writer",
      "age of the children",
      "appropriate themes"
    ],
    "correctAnswer": 1,
    "explanation": "While a writer's reputation can be an indicator of quality, it is the least important factor compared to child-centric criteria. The age of the children, the appropriateness of the themes, and readability (including font size) directly impact a child's engagement and comprehension. A famous author could write something unsuitable for a specific age group."
  },
  {
    "id": 351,
    "question": "Everyone understands mother tongue. Select the sentence in passive voice. (TSTET 30 May 2024)",
    "options": [
      "Mother tongue has been understood by everyone.",
      "Mother tongue had understood by everyone.",
      "Mother tongue was understood by everyone.",
      "Mother tongue is understood by everyone."
    ],
    "correctAnswer": 3,
    "explanation": "The original sentence, 'Everyone understands mother tongue,' is in the simple present tense. To change it to passive voice, the structure is: Object + is/am/are + past participle (V3) + by + Subject. Therefore, 'Mother tongue' (object) + 'is' + 'understood' (past participle of understand) + 'by everyone' (subject) is the correct passive form."
  },
  {
    "id": 352,
    "question": "Identify the part that contains an error in the sentence.\nRamesh was unhappy (A) / that he would no (B) / attend the (C) / birthday party (D). (TSTET 30 May 2024)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctAnswer": 1,
    "explanation": "The error is in part (B). The word 'no' is used incorrectly to negate the verb 'attend'. The correct word to use is the adverb 'not'. The sentence should read, 'Ramesh was unhappy that he would not attend the birthday party.'"
  },
  {
    "id": 353,
    "question": "This is not a punctuation mark. (TSTET 30 May 2024)",
    "options": [
      "Full Stop",
      "Comma",
      "Hash tag",
      "Colon"
    ],
    "correctAnswer": 2,
    "explanation": "A full stop (.), a comma (,), and a colon (:) are all standard punctuation marks used to structure sentences. A hash tag (#) is a symbol used primarily on social media and in computing to categorize content; it is not a traditional grammatical punctuation mark."
  },
  {
    "id": 354,
    "question": "An economic crisis may have tremendous consequences for our global security. Pick the meaning of the word 'tremendous'. (TSTET 30 May 2024)",
    "options": [
      "enormous",
      "modest",
      "insignificant",
      "slight"
    ],
    "correctAnswer": 0,
    "explanation": "The word 'tremendous' means very great in amount, scale, or intensity. 'Enormous' is a direct synonym. The other options, 'modest', 'insignificant', and 'slight', are antonyms, meaning small or unimportant."
  },
  {
    "id": 355,
    "question": "The phone ______. Can you answer it, please? Complete the sentence with correct option. (TSTET 30 May 2024)",
    "options": [
      "rang",
      "rings",
      "is ringing",
      "ring"
    ],
    "correctAnswer": 2,
    "explanation": "The question 'Can you answer it, please?' implies that the action is happening at the moment of speaking. The present continuous tense ('is ringing') is used to describe an action that is currently in progress."
  },
  {
    "id": 356,
    "question": "The Japanese have acted calmly and deliberately. Choose the opposite meaning of the word 'deliberately'. (TSTET 30 May 2024)",
    "options": [
      "purposefully",
      "consciously",
      "intentionally",
      "casually"
    ],
    "correctAnswer": 3,
    "explanation": "'Deliberately' means done on purpose and with careful thought. 'Purposefully', 'consciously', and 'intentionally' are all synonyms. The opposite is to do something without much thought or planning, which is best described by 'casually'."
  },
  {
    "id": 357,
    "question": "It will be easier to read if you ______ the lights. Choose the correct option to complete the sentence. (TSTET 30 May 2024)",
    "options": [
      "switch over",
      "switch on",
      "switch out",
      "switch off"
    ],
    "correctAnswer": 1,
    "explanation": "To make reading easier, more light is needed. The phrasal verb 'switch on' means to activate or start a device, such as lights. 'Switch off' means to deactivate. 'Switch over' means to change from one thing to another."
  },
  {
    "id": 358,
    "question": "Choose the option that best expresses the meaning of the idiom 'Eat like a bird'. (TSTET 30 May 2024)",
    "options": [
      "Eat very little",
      "Eat a lot",
      "Eat fast",
      "Eat slowly"
    ],
    "correctAnswer": 0,
    "explanation": "The idiom 'eat like a bird' is a common expression that means to eat a very small amount of food, as birds are perceived to peck at their food and eat tiny portions."
  },
  {
    "id": 359,
    "question": "Choose the incorrectly spelt word. (TSTET 30 May 2024)",
    "options": [
      "dialect",
      "vernacular",
      "tongue",
      "utteranse"
    ],
    "correctAnswer": 3,
    "explanation": "The correct spelling of the word is 'utterance'. The other words, 'dialect', 'vernacular', and 'tongue', are all spelled correctly."
  },
  {
    "id": 360,
    "question": "Arrange the following in order to form a meaningful sentence.\nA) Swami said that\nB) fought with the tiger\nC) a very strong and grown-up\nD) person might have\n(TSTET 30 May 2024)",
    "options": [
      "A, B, D, C",
      "A, D, C, B",
      "A, C, D, B",
      "A, B, C, D"
    ],
    "correctAnswer": 2,
    "explanation": "The sentence starts with the reporting clause 'Swami said that' (A). This is followed by the subject of the reported speech, 'a very strong and grown-up' (C) 'person' (part of D). The modal verb phrase 'might have' (part of D) comes next, followed by the main verb phrase 'fought with the tiger' (B). This forms the logical sentence: 'Swami said that a very strong and grown-up person might have fought with the tiger.'"
  },
  {
    "id": 361,
    "question": "The wound took time to ______. Fill in the blank with the appropriate word. (TSTET 30 May 2024)",
    "options": [
      "hail",
      "heal",
      "heel",
      "hael"
    ],
    "correctAnswer": 1,
    "explanation": "These words are homophones (sound alike but have different meanings). 'Heal' means to become healthy again, which is the correct word for a wound. 'Heel' is the back of the foot. 'Hail' refers to frozen rain or a type of greeting. 'Hael' is not a word."
  },
  {
    "id": 362,
    "question": "Pick the correct sentence. (TSTET 30 May 2024)",
    "options": [
      "We are for sorry your loss.",
      "The caterpillar turns itself into a butterfly.",
      "The store is open midnight until.",
      "We eat in morning the breakfast."
    ],
    "correctAnswer": 1,
    "explanation": "The second sentence is grammatically correct. The first sentence should be 'We are sorry for your loss.' The third sentence has incorrect word order; it should be 'The store is open until midnight.' The fourth sentence also has incorrect word order; it should be 'We eat breakfast in the morning.'"
  },
  {
    "id": 363,
    "question": "I did not go to work today ______ I was not keeping well. Fill in the blank with the appropriate option. (TSTET 30 May 2024)",
    "options": [
      "because",
      "until",
      "though",
      "but"
    ],
    "correctAnswer": 0,
    "explanation": "The second part of the sentence explains the reason for the first part. The subordinating conjunction 'because' is used to introduce a cause or reason. 'I was not keeping well' is the reason 'I did not go to work today.'"
  },
  {
    "id": 364,
    "question": "Ravi ______ to work tomorrow. Fill in the blank with the correct option. (TSTET 30 May 2024)",
    "options": [
      "will be going",
      "will going",
      "was going",
      "gone"
    ],
    "correctAnswer": 0,
    "explanation": "The word 'tomorrow' indicates a future action. The future continuous tense ('will be going') is used to describe an action that will be in progress at a time in the future. 'Will going' is grammatically incorrect, 'was going' is past tense, and 'gone' is a past participle."
  },
  {
    "id": 365,
    "question": "The teacher said, 'You have to get up early.' Select the sentence in indirect speech. (TSTET 30 May 2024)",
    "options": [
      "The teacher told me that I had to got up early.",
      "The teacher asks me that I have to get ups early.",
      "The teacher suggested me to get up early.",
      "The teacher tells me that you have to get up before."
    ],
    "correctAnswer": 2,
    "explanation": "When converting a sentence of advice or a command to indirect speech, verbs like 'suggested', 'advised', or 'ordered' can be used. 'The teacher suggested me to get up early' correctly conveys the meaning. Option 1 is incorrect because of 'got up' (should be 'get up'). Options 2 and 4 use the wrong tense for the reporting verb ('asks', 'tells')."
  },
  {
    "id": 366,
    "question": "if you don't stop that immediately im going to complain to the police. Choose the correctly punctuated sentence. (TSTET 30 May 2024)",
    "options": [
      "If you don't stop, that immediately. I'm going to complain to the police.",
      "If you, don't stop that, immediately I'm going to complain to the police.",
      "If you don't stop that immediately, I'm going to complain to the police.",
      "If you don't, stop that immediately I'm going to complain, to the police."
    ],
    "correctAnswer": 2,
    "explanation": "The sentence should begin with a capital letter. The clause 'If you don't stop that immediately' is a dependent clause, and when it comes before the main clause, it must be followed by a comma. The contraction 'I'm' requires an apostrophe. Option 3 correctly applies all these punctuation rules."
  },
  {
    "id": 367,
    "question": "A person who seeks to promote the welfare of others, especially by donating money to good causes. (TSTET 30 May 2024)",
    "options": [
      "Beneficiary",
      "Philanthropist",
      "buyer",
      "Inheritor"
    ],
    "correctAnswer": 1,
    "explanation": "A 'philanthropist' is someone who makes charitable donations intended to increase human well-being. A 'beneficiary' is a person who receives benefits. A 'buyer' purchases goods. An 'inheritor' receives property or money after someone's death."
  },
  {
    "id": 368,
    "question": "He has been reading ______ 3 o'clock. (TSTET 30 May 2024)",
    "options": [
      "since",
      "for",
      "from",
      "at"
    ],
    "correctAnswer": 0,
    "explanation": "The present perfect continuous tense ('has been reading') is used to describe an action that started in the past and is still ongoing. 'Since' is used to indicate the specific point in time when the action began (e.g., 3 o'clock). 'For' is used to indicate a duration of time (e.g., three hours)."
  },
  {
    "id": 369,
    "question": "Identify the word which is in correct plural form. (TSTET 30 May 2024)",
    "options": [
      "Potatoes",
      "Photoes",
      "Knifes",
      "Foots"
    ],
    "correctAnswer": 0,
    "explanation": "The correct plural form of 'potato' is 'potatoes'. The plural of 'photo' is 'photos'. The plural of 'knife' is 'knives'. The plural of 'foot' is 'feet'."
  },
  {
    "id": 370,
    "question": "Which of the following is NOT a salient feature of Communicative Language Teaching? (TSTET 30 May 2024)",
    "options": [
      "Pair work",
      "Group work",
      "Classroom interaction",
      "Drilling"
    ],
    "correctAnswer": 3,
    "explanation": "Communicative Language Teaching (CLT) focuses on authentic communication and interaction. Therefore, pair work, group work, and classroom interaction are key features. 'Drilling', which involves repetitive mechanical practice of language patterns, is characteristic of older methods like the Audiolingual Method and is not a central feature of CLT."
  },
  {
    "id": 371,
    "question": "Language can be taught in a better way, if ______. (TSTET 30 May 2024)",
    "options": [
      "Students talk time is less in the classroom.",
      "Students talk time is more in the classroom.",
      "Teacher's talk time is more in the classroom.",
      "Teacher's and students' talk time is limited in the classroom."
    ],
    "correctAnswer": 1,
    "explanation": "Modern language pedagogy emphasizes a student-centered approach. For effective language acquisition, students need ample opportunities to practice using the language. Therefore, maximizing Student Talk Time (STT) while minimizing Teacher Talk Time (TTT) is considered a best practice."
  },
  {
    "id": 372,
    "question": "The platform that enables instructors to organize and distribute course materials in a digital format is called ______. (TSTET 30 May 2024)",
    "options": [
      "Learning Management System",
      "Learning Machine System",
      "Learning Model System",
      "Learning Mechanics System"
    ],
    "correctAnswer": 0,
    "explanation": "A Learning Management System (LMS) is a software application designed to administer, document, track, report, and deliver educational courses or training programs. It's the standard term for a platform that hosts digital learning materials."
  },
  {
    "id": 373,
    "question": "Pick the objective of teaching English at Elementary level. (TSTET 30 May 2024)",
    "options": [
      "Make students to follow the instructions given in the target language.",
      "Make the learners to read novels only.",
      "Make students to follow the foreign English literature.",
      "Make the students practice writing reviews and articles."
    ],
    "correctAnswer": 0,
    "explanation": "At the elementary level, a primary and fundamental objective is to help students acquire basic communicative competence. This includes the ability to understand and respond to simple instructions in English. The other options are too advanced for this level and focus on specialized skills rather than foundational ones."
  },
  {
    "id": 374,
    "question": "The following is NOT a feature of primary level English textbook. (TSTET 30 May 2024)",
    "options": [
      "Age-appropriate material",
      "Interesting and attractive content",
      "More text without pictures and images",
      "More focus on oral activities"
    ],
    "correctAnswer": 2,
    "explanation": "Textbooks for primary school children should be visually engaging to hold their attention and aid comprehension. Therefore, they typically feature many pictures, illustrations, and images. A textbook with a lot of text and few visuals would be inappropriate and ineffective for young learners."
  },
  {
    "id": 375,
    "question": "A student of class 3 says 'I have some big big chocolates.' This is because of ______. (TSTET 30 May 2024)",
    "options": [
      "mother tongue influence.",
      "foreign language influence.",
      "learning disability.",
      "teacher's English language influence."
    ],
    "correctAnswer": 0,
    "explanation": "This grammatical error is a classic example of language transfer, also known as mother tongue influence (MTI). In many Indian languages, adjectives are repeated for emphasis (reduplication). The student is applying a grammatical rule from their first language to English, where emphasis is typically shown with adverbs like 'very' (e.g., 'very big chocolates')."
  },
  {
    "id": 376,
    "question": "The voyage with spiritual purpose is called (TSTET 31 May 2024)",
    "options": [
      "excursion",
      "expedition",
      "trip",
      "pilgrimage"
    ],
    "correctAnswer": 3,
    "explanation": "A 'pilgrimage' is a journey, especially a long one, made to some sacred place as an act of religious devotion. An 'excursion' is a short journey for pleasure. An 'expedition' is a journey undertaken for a particular purpose, such as exploration or research. A 'trip' is a general term for a journey or excursion."
  },
  {
    "id": 377,
    "question": "Identify the part that contains an error in the sentence.\nThe shopkeeper / placed an old chair / under the middle / of the shop.\n(A)                (B)                 (C)                (D)\n(TSTET 31 May 2024)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctAnswer": 2,
    "explanation": "The error is in part (C). The phrase 'under the middle' is grammatically incorrect and awkward. The correct prepositional phrase should be 'in the middle' to indicate the chair's location within the shop."
  },
  {
    "id": 378,
    "question": "Students are stressed because of their exams. They should have a session with a ______. (TSTET 31 May 2024)",
    "options": [
      "Physiotherapist",
      "Psychiatrist",
      "Psychologist",
      "Paediatrician"
    ],
    "correctAnswer": 2,
    "explanation": "A 'Psychologist' specializes in the study of mind and behavior and helps people with mental health issues like stress through counseling and therapy. A 'Physiotherapist' treats physical injuries, a 'Psychiatrist' is a medical doctor who can prescribe medication for mental illness, and a 'Paediatrician' is a children's doctor."
  },
  {
    "id": 379,
    "question": "'I feel like I am on cloud nine.' Pick the meaning of the idiom 'on cloud nine'. (TSTET 31 May 2024)",
    "options": [
      "Severe mental or physical pain or suffering.",
      "An unpleasant sensation caused by physical illness or injury.",
      "A long and severe recession in an economy or market.",
      "A feeling of great pleasure and happiness."
    ],
    "correctAnswer": 3,
    "explanation": "The idiom 'on cloud nine' means to be in a state of extreme happiness, elation, or euphoria. It expresses a feeling of great joy and contentment."
  },
  {
    "id": 380,
    "question": "Rama has ______ of rupees but still she ______ peace. Choose the correct option to complete the sentence. (TSTET 31 May 2024)",
    "options": [
      "lacks, lakhs",
      "lakhs, lacks",
      "lakhs, locks",
      "locks, lacks"
    ],
    "correctAnswer": 1,
    "explanation": "The correct words are 'lakhs' and 'lacks'. 'Lakhs' refers to a unit of one hundred thousand, indicating a large amount of money. 'Lacks' means to be without something. The sentence means Rama has a lot of money but is without peace."
  },
  {
    "id": 381,
    "question": "Pick the wrongly spelt word. (TSTET 31 May 2024)",
    "options": [
      "jubilation",
      "animasion",
      "gratification",
      "elevation"
    ],
    "correctAnswer": 1,
    "explanation": "The word 'animasion' is spelled incorrectly. The correct spelling is 'animation'. The other words, 'jubilation', 'gratification', and 'elevation', are all spelled correctly."
  },
  {
    "id": 382,
    "question": "He blamed their electoral rout on the party MLAs' neglect of their constituencies. Choose the opposite meaning of the word 'neglect'. (TSTET 31 May 2024)",
    "options": [
      "relax",
      "attention",
      "laxity",
      "oversight"
    ],
    "correctAnswer": 1,
    "explanation": "'Neglect' means to fail to give proper care or attention to something. The direct antonym (opposite) is 'attention', which means taking notice of or caring for something."
  },
  {
    "id": 383,
    "question": "The children were very well ______. Choose the correct option to complete the sentence. (TSTET 31 May 2024)",
    "options": [
      "bring in",
      "gave up",
      "brought out",
      "brought up"
    ],
    "correctAnswer": 3,
    "explanation": "The phrasal verb 'bring up' means to care for a child until they are an adult. The past participle 'brought up' is required for the passive voice structure 'were... brought up'."
  },
  {
    "id": 384,
    "question": "Listen! Somebody ______ at the door. Choose the correct option to complete the sentence. (TSTET 31 May 2024)",
    "options": [
      "is knocking",
      "knocks",
      "is knocks",
      "was knock"
    ],
    "correctAnswer": 0,
    "explanation": "The command 'Listen!' indicates that the action is happening at the moment of speaking. Therefore, the present continuous tense ('is knocking') is the correct form to use to describe an ongoing action."
  },
  {
    "id": 385,
    "question": "Arrange the following in order to form a meaningful sentence.\nA) The intellectuals of India\nB) in the development\nC) of our country\nD) have played a crucial role\n(TSTET 31 May 2024)",
    "options": [
      "A, B, D, C",
      "A, D, B, C",
      "A, D, C, B",
      "A, B, C, D"
    ],
    "correctAnswer": 1,
    "explanation": "The logical order to form a coherent sentence is: Subject (A: The intellectuals of India) + Verb phrase (D: have played a crucial role) + Prepositional phrase (B: in the development) + modifying phrase (C: of our country). The complete sentence is: 'The intellectuals of India have played a crucial role in the development of our country.'"
  },
  {
    "id": 386,
    "question": "Most of his ______ was spent working in agriculture research. Fill in the blank with the appropriate word. (TSTET 31 May 2024)",
    "options": [
      "career",
      "courtier",
      "carrier",
      "courier"
    ],
    "correctAnswer": 0,
    "explanation": "A 'career' refers to an occupation undertaken for a significant period of a person's life. This fits the context of spending time working in research. The other words have different meanings: a 'courtier' is an attendant at a royal court, a 'carrier' transports goods, and a 'courier' delivers messages."
  },
  {
    "id": 387,
    "question": "Pick the correct sentence. (TSTET 31 May 2024)",
    "options": [
      "This is the book that everyone is talking about.",
      "Raghav cooking likes and loves eating.",
      "Sam is my friend close.",
      "The time on arrived flight."
    ],
    "correctAnswer": 0,
    "explanation": "The first sentence is grammatically correct and logically structured. The other sentences contain word order errors. They should be corrected as: 'Raghav likes cooking and loves eating.', 'Sam is my close friend.', and 'The flight arrived on time.'"
  },
  {
    "id": 388,
    "question": "I've never thought about it ______. Fill in the blank with the appropriate option. (TSTET 31 May 2024)",
    "options": [
      "so that",
      "because",
      "though",
      "before"
    ],
    "correctAnswer": 3,
    "explanation": "The word 'before' functions as an adverb of time here, meaning 'before now' or 'in the past'. The sentence implies the speaker has not considered the matter at any point prior to the present moment. The other options are conjunctions that do not fit the grammatical context."
  },
  {
    "id": 389,
    "question": "The ______ of the hour was some fast action on the part of the doctors. Fill in the blank with the correct option. (TSTET 31 May 2024)",
    "options": [
      "needing",
      "need",
      "needs",
      "needed"
    ],
    "correctAnswer": 1,
    "explanation": "'The need of the hour' is a standard idiom that means the most important requirement at a particular time. In this phrase, 'need' is used as a singular noun."
  },
  {
    "id": 390,
    "question": "Rani said, 'I am a teacher.' Select the sentence in indirect speech. (TSTET 31 May 2024)",
    "options": [
      "Rani said that I am a teacher.",
      "Rani saying that her was a teacher.",
      "Rani said that she was a teacher.",
      "Rani saying that she was a teacher."
    ],
    "correctAnswer": 2,
    "explanation": "To convert this sentence to indirect (reported) speech, the pronoun 'I' changes to 'she' to refer to Rani, and the verb 'am' (present tense) changes to 'was' (past tense) because the reporting verb 'said' is in the past."
  },
  {
    "id": 391,
    "question": "my favourite book is swami and friends what is yours. Choose the correctly punctuated sentence. (TSTET 31 May 2024)",
    "options": [
      "My favourite book is Swami and Friends. What is yours?",
      "My favourite book is Swami and Friends What is yours.",
      "My favourite Book is Swami and Friends, What is yours?",
      "My favourite book is Swami and Friends. what is yours!"
    ],
    "correctAnswer": 0,
    "explanation": "Correct punctuation requires: 1) Capitalization at the beginning of the sentence ('My'). 2) Capitalization of proper nouns in the book title ('Swami and Friends'). 3) A period to end the first complete sentence. 4) Capitalization for the beginning of the new sentence ('What') and a question mark at the end because it is a question."
  },
  {
    "id": 392,
    "question": "A room in a public building where outdoor clothes or luggage may be left. (TSTET 31 May 2024)",
    "options": [
      "Clockroom",
      "Cloakroom",
      "Lockroom",
      "Closeroom"
    ],
    "correctAnswer": 1,
    "explanation": "A 'cloakroom' is the correct term for a room where visitors can leave their coats, bags, and other belongings temporarily. The other options are common misspellings or incorrect words."
  },
  {
    "id": 393,
    "question": "The stone came rolling ______ the hill. Fill in the blank with the correct option. (TSTET 31 May 2024)",
    "options": [
      "with",
      "about",
      "into",
      "down"
    ],
    "correctAnswer": 3,
    "explanation": "The preposition 'down' indicates movement from a higher to a lower place. This correctly describes the action of a stone rolling from the top of a hill towards the bottom."
  },
  {
    "id": 394,
    "question": "Identify the word used both for singular and plural form. (TSTET 31 May 2024)",
    "options": [
      "cat",
      "goat",
      "sheep",
      "dog"
    ],
    "correctAnswer": 2,
    "explanation": "'Sheep' is an irregular noun; its singular and plural forms are the same (e.g., one sheep, many sheep). The plural forms of the other nouns are 'cats', 'goats', and 'dogs'."
  },
  {
    "id": 395,
    "question": "The following theme suits best to primary level students. (TSTET 31 May 2024)",
    "options": [
      "Science and Technology",
      "The world-India's neighbourhood",
      "Art and Culture",
      "Self, family, home, friends and pets"
    ],
    "correctAnswer": 3,
    "explanation": "For young learners at the primary level, educational content is most effective when it is connected to their immediate environment and personal experiences. The theme 'Self, family, home, friends and pets' is concrete and relatable for them, unlike the more abstract concepts in the other options."
  },
  {
    "id": 396,
    "question": "'Passive vocabulary' refers to the words that learners ______. (TSTET 31 May 2024)",
    "options": [
      "understand but use in speaking only.",
      "understand and use in real life contexts.",
      "understand but don't use regularly.",
      "understand and use frequently."
    ],
    "correctAnswer": 2,
    "explanation": "Passive vocabulary consists of words a person can recognize and understand when reading or listening but does not use spontaneously in their own speech or writing. Active vocabulary, in contrast, refers to words used frequently and confidently."
  },
  {
    "id": 397,
    "question": "The knowledge and skills you want students to acquire by the end of the course or after completing a particular unit or assignment are called ______. (TSTET 31 May 2024)",
    "options": [
      "Learning Skills",
      "Learning Curves",
      "Learning Modules",
      "Learning Outcomes"
    ],
    "correctAnswer": 3,
    "explanation": "'Learning Outcomes' are clear statements of what a learner is expected to know, understand, or be able to do as a result of a learning experience. They are specific, measurable, and define the goals of a lesson or course."
  },
  {
    "id": 398,
    "question": "Which of the following is an individual activity? (TSTET 31 May 2024)",
    "options": [
      "Diary entry",
      "Debate",
      "Role play",
      "Group discussion"
    ],
    "correctAnswer": 0,
    "explanation": "A 'Diary entry' is a personal and reflective form of writing done individually. 'Debate', 'Role play', and 'Group discussion' are all collaborative activities that inherently require interaction and participation with other people."
  },
  {
    "id": 399,
    "question": "Continuous and Comprehensive Evaluation (CCE) is a ______. (TSTET 31 May 2024)",
    "options": [
      "school-based evaluation",
      "state-based evaluation",
      "board-based evaluation",
      "region-based evaluation"
    ],
    "correctAnswer": 0,
    "explanation": "CCE is a 'school-based evaluation' system, meaning it is conducted by the students' own teachers within the school environment. It aims to evaluate all aspects of a student's development on a continuous basis throughout the academic year, rather than through a single, external examination."
  },
  {
    "id": 400,
    "question": "'Have you completed your homework?'. This is a/an ______. (TSTET 31 May 2024)",
    "options": [
      "Reflective question",
      "Multiple choice question",
      "Open ended question",
      "Close-ended question"
    ],
    "correctAnswer": 3,
    "explanation": "This is a 'close-ended question' because it is designed to elicit a short, specific response, typically 'yes' or 'no'. An open-ended question would require a more detailed, explanatory answer (e.g., 'What did you find most challenging about the homework?')."
  },
  {
    "id": 401,
    "question": "They ______ sweets after the lunch. Complete the sentence with correct option. (TSTET 31 May 2024)",
    "options": [
      "offered",
      "awarded",
      "granted",
      "conferred"
    ],
    "correctAnswer": 0,
    "explanation": "The word 'offered' means to present or give something for someone to accept or reject. It is the most suitable verb for the context of providing sweets. 'Awarded' is used for prizes, 'granted' for permission or requests, and 'conferred' for honors or degrees."
  },
  {
    "id": 402,
    "question": "The curriculum was flexible. Choose the opposite meaning of the word 'flexible'. (TSTET 31 May 2024)",
    "options": [
      "comfortable",
      "rigid",
      "agreeable",
      "convincible"
    ],
    "correctAnswer": 1,
    "explanation": "The word 'flexible' means capable of bending easily without breaking or being easily modified. The direct antonym is 'rigid', which means unable to bend or be forced out of shape; not flexible."
  },
  {
    "id": 403,
    "question": "Identify the part that contains an error in the sentence. Failures(A) is the stepping(B) stones(C) to success.(D) (TSTET 31 May 2024)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctAnswer": 1,
    "explanation": "This sentence has a subject-verb agreement error. The subject 'Failures' is plural, while the verb 'is' is singular. The correct verb should be 'are' to agree with the plural subject. The error lies in part B which contains the verb 'is'. *Note: The provided answer key marks 'A' as the correct option, which is incorrect. The clear grammatical error is the verb in part B.*"
  },
  {
    "id": 404,
    "question": "The meeting was ______ because of the strike. Choose the correct option to complete the sentence. (TSTET 31 May 2024)",
    "options": [
      "calls off",
      "calling off",
      "call off",
      "called off"
    ],
    "correctAnswer": 3,
    "explanation": "The sentence is in the passive voice (was + verb). It requires the past participle form of the verb. The phrasal verb 'call off' means to cancel. Its past participle is 'called off'. Therefore, 'was called off' is the grammatically correct structure."
  },
  {
    "id": 405,
    "question": "Choose the option that best expresses the meaning of the idiom 'neck and neck'. (TSTET 31 May 2024)",
    "options": [
      "holding the necks",
      "having tough competition",
      "one-sided",
      "fight with necks"
    ],
    "correctAnswer": 1,
    "explanation": "The idiom 'neck and neck' is used to describe a situation where competitors in a race or contest are level or extremely close to each other. It signifies a very tough competition."
  },
  {
    "id": 406,
    "question": "Choose the wrongly spelt word. (TSTET 31 May 2024)",
    "options": [
      "independent",
      "expensive",
      "agitetion",
      "humble"
    ],
    "correctAnswer": 2,
    "explanation": "The word 'agitetion' is misspelled. The correct spelling is 'agitation'. The other words are spelled correctly."
  },
  {
    "id": 407,
    "question": "Where there is a will ______. Complete the saying with correct option. (TSTET 31 May 2024)",
    "options": [
      "their is a way",
      "there is a way",
      "there is a will",
      "their is a wish"
    ],
    "correctAnswer": 1,
    "explanation": "The complete proverb is 'Where there is a will, there is a way.' This means that if someone is sufficiently determined to do something, they will find a way of doing it. Option 2 uses the correct word 'there' and completes the saying accurately."
  },
  {
    "id": 408,
    "question": "Pratap said, 'Brother, please pass the glass.' Select the sentence in indirect speech. (TSTET 31 May 2024)",
    "options": [
      "Pratap requested his brother to pass the glass.",
      "Pratap said his brother pass the glass.",
      "Pratap request his brother to passed the glass.",
      "Pratap ask brother to pass the glass."
    ],
    "correctAnswer": 0,
    "explanation": "When changing a polite request (indicated by 'please') from direct to indirect speech, the reporting verb 'said' becomes 'requested'. The imperative verb 'pass' changes to its infinitive form 'to pass'. Option 1 correctly reflects these changes."
  },
  {
    "id": 409,
    "question": "Education ______ discipline is useless. Fill in the blank with the appropriate option. (TSTET 31 May 2024)",
    "options": [
      "through",
      "within",
      "with",
      "without"
    ],
    "correctAnswer": 3,
    "explanation": "The sentence aims to convey that the absence of discipline makes education useless. The preposition 'without' correctly indicates this absence or lack, making it the most logical choice to complete the meaning."
  },
  {
    "id": 410,
    "question": "Deepika was reading a book. Select the sentence in passive voice. (TSTET 31 May 2024)",
    "options": [
      "A book is reading by Deepika.",
      "A book is read by Deepika.",
      "A book was being read by Deepika.",
      "Deepika was read by a book."
    ],
    "correctAnswer": 2,
    "explanation": "The original sentence is in the Past Continuous tense (subject + was + verb-ing + object). To convert it to the passive voice, the structure is: Object + was/were + being + past participle + by + Subject. Applying this, 'A book' (object) + 'was' + 'being' + 'read' (past participle) + 'by Deepika' (subject) is the correct form."
  },
  {
    "id": 411,
    "question": "Pick the correct sentence. (TSTET 31 May 2024)",
    "options": [
      "Nature is best the teacher.",
      "We enjoy dinner together.",
      "We went the to cinema.",
      "Always the speak truth."
    ],
    "correctAnswer": 1,
    "explanation": "The sentence 'We enjoy dinner together' is grammatically correct. Option 1 should be 'Nature is the best teacher.' Option 3 should be 'We went to the cinema.' Option 4 should be 'Always speak the truth.'"
  },
  {
    "id": 412,
    "question": "I know ______ good you are. Fill in the blank with the correct option. (TSTET 31 May 2024)",
    "options": [
      "how",
      "it",
      "this",
      "what"
    ],
    "correctAnswer": 0,
    "explanation": "The adverb 'how' is used to express the extent or degree of a quality. The sentence 'I know how good you are' means 'I know the extent of your goodness.' The other options do not fit the grammatical structure or meaning."
  },
  {
    "id": 413,
    "question": "Our school has a ______ playground. Fill in the blank with the appropriate option. (TSTET 31 May 2024)",
    "options": [
      "longest",
      "lane",
      "length",
      "large"
    ],
    "correctAnswer": 3,
    "explanation": "An adjective is needed to describe the noun 'playground'. 'Large' is an adjective meaning of considerable size, which fits perfectly. 'Longest' is superlative and requires a different context. 'Lane' and 'length' are nouns."
  },
  {
    "id": 414,
    "question": "Choose the correctly punctuated sentence. (TSTET 31 May 2024)",
    "options": [
      "He was always, happy energetic and positive.",
      "He was always happy, energetic and positive.",
      "He was always happy, energetic, positive.",
      "He was always happy and energetic and positive."
    ],
    "correctAnswer": 1,
    "explanation": "When listing three or more items in a series, commas are used to separate them. In this list of adjectives ('happy', 'energetic', 'positive'), a comma is needed between the first and second items. Option 2 correctly places the comma after 'happy'."
  },
  {
    "id": 415,
    "question": "There are ______ chapters in this book. Pick the suitable word to fill in the blank. (TSTET 31 May 2024)",
    "options": [
      "many",
      "much",
      "lower",
      "most"
    ],
    "correctAnswer": 0,
    "explanation": "'Chapters' is a plural, countable noun. The determiner 'many' is used with countable nouns to refer to a large quantity. 'Much' is used for uncountable nouns. 'Lower' and 'most' are unsuitable in this context."
  },
  {
    "id": 416,
    "question": "What a lovely bouquet of flowers! This sentence is a/an ______. (TSTET 31 May 2024)",
    "options": [
      "Imperative Sentence.",
      "Interrogative Sentence.",
      "Exclamatory Sentence.",
      "Declarative Sentence."
    ],
    "correctAnswer": 2,
    "explanation": "An exclamatory sentence expresses strong feeling or emotion and ends with an exclamation mark (!). This sentence shows admiration and ends with '!', making it an exclamatory sentence."
  },
  {
    "id": 417,
    "question": "Pick the correct sentence. (TSTET 31 May 2024)",
    "options": [
      "The weather was to hot for us to go out.",
      "The weather was too hot for us to go out.",
      "The weather was to hot for us too go out.",
      "The weather was hot for us too go out."
    ],
    "correctAnswer": 1,
    "explanation": "This sentence requires the 'too... to...' structure to indicate that an excess of a quality (heat) prevented an action (going out). 'Too' is an adverb meaning 'excessively', and 'to' is a preposition used before the verb. Option 2 uses both words correctly."
  },
  {
    "id": 418,
    "question": "The police ______ on illicit drug traffic. Pick the suitable word to fill in the blank. (TSTET 31 May 2024)",
    "options": [
      "cracked down",
      "cracked out",
      "cracked in",
      "cracked on"
    ],
    "correctAnswer": 0,
    "explanation": "The phrasal verb 'crack down on' means to take severe measures against illegal activity. This is the most appropriate phrasal verb to describe police taking action against drug trafficking."
  },
  {
    "id": 419,
    "question": "Countries are always issuing stamps to ______ important events. Fill in the blank with the correct option. (TSTET 31 May 2024)",
    "options": [
      "celebrate",
      "celebrated",
      "celebrates",
      "celebration"
    ],
    "correctAnswer": 0,
    "explanation": "The infinitive marker 'to' is used to show purpose and must be followed by the base form of the verb. 'Celebrate' is the base form. The other options are different forms of the verb or a noun, which are grammatically incorrect here."
  },
  {
    "id": 420,
    "question": "Reading a word and sensing its meaning without even knowing the alphabet is known as ______. (TSTET 31 May 2024)",
    "options": [
      "Casual reading",
      "Critical reading",
      "Graphic reading",
      "Skim reading"
    ],
    "correctAnswer": 2,
    "explanation": "This describes logographic or sight-word reading, where words are recognized as whole units or pictures rather than by sounding out letters. Among the choices, 'Graphic reading' is the best fit, as it implies processing the word as a single visual graphic."
  },
  {
    "id": 421,
    "question": "Auditory learners prefer to receive ideas and information by ______. (TSTET 31 May 2024)",
    "options": [
      "hearing or listening them.",
      "looking at visuals.",
      "reading them.",
      "writing them."
    ],
    "correctAnswer": 0,
    "explanation": "By definition, the term 'auditory' is related to the sense of hearing. Auditory learners, therefore, learn most effectively by listening to information, such as in lectures, discussions, and audio recordings."
  },
  {
    "id": 422,
    "question": "The test where the students are provided with a passage that has certain words missing from it is a ______. (TSTET 31 May 2024)",
    "options": [
      "Matching test",
      "Cloze test",
      "Multiple Choice Question Test",
      "As Directed Test"
    ],
    "correctAnswer": 1,
    "explanation": "A Cloze test is an exercise or assessment consisting of a portion of text with certain words removed, where the participant is asked to replace the missing words. It is used to measure reading comprehension and vocabulary."
  },
  {
    "id": 423,
    "question": "Choose the option NOT related to the sub-skills of writing skill. (TSTET 31 May 2024)",
    "options": [
      "editing and revisiting",
      "punctuation",
      "guess the meaning of unfamiliar words",
      "handwriting"
    ],
    "correctAnswer": 2,
    "explanation": "'Guessing the meaning of unfamiliar words' is a sub-skill of reading, where one uses context clues to understand new vocabulary. The other options—editing, punctuation, and handwriting—are all directly related to the process and mechanics of writing."
  },
  {
    "id": 424,
    "question": "Evaluation of learners during the instructional process is called ______. (TSTET 31 May 2024)",
    "options": [
      "term end evaluation.",
      "formative evaluation.",
      "summative evaluation.",
      "annual evaluation."
    ],
    "correctAnswer": 1,
    "explanation": "Formative evaluation is the assessment that occurs 'during' the process of learning. Its goal is to monitor student progress and provide ongoing feedback to both students and teachers to improve learning. Summative, term-end, and annual evaluations are conducted at the end of an instructional unit to assess final outcomes."
  },
  {
    "id": 425,
    "question": "'In your opinion, how can we eradicate poverty in India?' The question is an example of a/an ______. (TSTET 31 May 2024)",
    "options": [
      "\"Yes\" or \"No\" question.",
      "Open ended question.",
      "Objective type question.",
      "Factual question."
    ],
    "correctAnswer": 1,
    "explanation": "An open-ended question is designed to encourage a full, meaningful answer using the subject's own knowledge and feelings, rather than a simple one-word answer. This question asks for an opinion and a complex solution, which requires a detailed response, making it an open-ended question."
  },
  {
    "id": 426,
    "question": "We had ______ many apples to carry. Complete the sentence with correct option. (TSTET 01 June 2024)",
    "options": [
      "too",
      "to",
      "two",
      "ton"
    ],
    "correctAnswer": 0,
    "explanation": "The correct word is 'too', which is an adverb meaning 'excessively' or 'more than is desirable'. The sentence implies that the number of apples was excessive, making them difficult to carry. 'To' is a preposition, 'two' is the number 2, and 'ton' is a unit of weight."
  },
  {
    "id": 427,
    "question": "We can reject the unscientific and unethical nature of customs and traditions. Choose the opposite meaning of the word 'reject'. (TSTET 01 June 2024)",
    "options": [
      "oppose",
      "disown",
      "challenge",
      "accept"
    ],
    "correctAnswer": 3,
    "explanation": "The word 'reject' means to dismiss or refuse to accept something. The opposite, or antonym, is 'accept', which means to consent to receive or agree to something. The other options, 'oppose', 'disown', and 'challenge', are similar in meaning to 'reject'."
  },
  {
    "id": 428,
    "question": "Identify the part that contains an error in the sentence. (A) Most of the / (B) house / (C) in the village / (D) are very well planned. (TSTET 01 June 2024)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctAnswer": 1,
    "explanation": "The error is in part (B). The phrase 'Most of the' should be followed by a plural noun. Therefore, the singular noun 'house' is incorrect and should be the plural 'houses'. The verb 'are' in part (D) correctly agrees with the plural subject 'Most of the houses'."
  },
  {
    "id": 429,
    "question": "We should ______ to the next item on the list. Choose the correct option to complete the sentence. (TSTET 01 June 2024)",
    "options": [
      "move on",
      "move to",
      "move of",
      "move by"
    ],
    "correctAnswer": 0,
    "explanation": "The correct option is the phrasal verb 'move on', which means to proceed or continue to the next thing. This fits the context of progressing through a list. 'Move to' requires a specific destination, while 'move of' and 'move by' are grammatically incorrect in this context."
  },
  {
    "id": 430,
    "question": "Choose the option that best expresses the meaning of the idiom 'Call it a day'. (TSTET 01 June 2024)",
    "options": [
      "Celebrate the day.",
      "Get out of control.",
      "My patience has run out.",
      "Stop working on something."
    ],
    "correctAnswer": 3,
    "explanation": "The idiom 'call it a day' means to decide to stop an activity, especially work, for the rest of the day. It signifies the end of a task or work period."
  },
  {
    "id": 431,
    "question": "Choose the correctly spelt word. (TSTET 01 June 2024)",
    "options": [
      "acknowledjment",
      "akcnowledgment",
      "acknowledgement",
      "acknowledgmint"
    ],
    "correctAnswer": 2,
    "explanation": "The correct spelling of the word is 'acknowledgement'. The other options contain common spelling errors such as a missing 'e', incorrect starting letters, or an incorrect suffix."
  },
  {
    "id": 432,
    "question": "The Marina Beach is ______ beach in India. Choose the correct option to complete the sentence. (TSTET 01 June 2024)",
    "options": [
      "a longest",
      "an longest",
      "longest",
      "the longest"
    ],
    "correctAnswer": 3,
    "explanation": "This sentence uses a superlative adjective ('longest') to indicate that the beach is longer than any other in India. Superlative adjectives are preceded by the definite article 'the'. Therefore, 'the longest' is the correct choice."
  },
  {
    "id": 433,
    "question": "We should ______ how to say 'No' without hurting others. Fill in the blank with the appropriate word. (TSTET 01 June 2024)",
    "options": [
      "now",
      "know",
      "no",
      "knew"
    ],
    "correctAnswer": 1,
    "explanation": "The sentence requires the base form of the verb 'know', which means 'to have understanding or awareness of'. 'Now' is an adverb of time, 'no' is a negator, and 'knew' is the past tense. The context requires the present tense verb 'know'."
  },
  {
    "id": 434,
    "question": "Pick the correct sentence. (TSTET 01 June 2024)",
    "options": [
      "It is an beautiful flower.",
      "My mother was a teacher.",
      "Children need an lot of sleep.",
      "I need a umbrella."
    ],
    "correctAnswer": 1,
    "explanation": "The sentence 'My mother was a teacher' is grammatically correct. The other sentences use the articles 'a' and 'an' incorrectly. 'A' is used before words starting with a consonant sound ('a beautiful flower', 'a lot'), and 'an' is used before words starting with a vowel sound ('an umbrella')."
  },
  {
    "id": 435,
    "question": "The violin is being played by Radhika. Select the active voice sentence. (TSTET 01 June 2024)",
    "options": [
      "Radhika playing the violin.",
      "Radhika has been playing the violin.",
      "Radhika is playing the violin.",
      "Radhika was playing the violin."
    ],
    "correctAnswer": 2,
    "explanation": "The given sentence is in the present continuous passive voice ('is being played'). To convert it to the active voice, the subject 'Radhika' performs the action. The corresponding active tense is the present continuous ('is playing'). Therefore, 'Radhika is playing the violin' is the correct active sentence."
  },
  {
    "id": 436,
    "question": "Shravan said, 'I want this mobile phone.' Choose the sentence in indirect speech. (TSTET 01 June 2024)",
    "options": [
      "Shravan said that he wanted that mobile phone.",
      "Shravan said that I wanted that mobile phone.",
      "Shravan said that he has wanted that mobile phone.",
      "Shravan said that he had wanted that mobile phone."
    ],
    "correctAnswer": 0,
    "explanation": "When converting from direct to indirect speech: the reporting verb 'said' remains, the simple present tense 'want' changes to the simple past 'wanted', the pronoun 'I' changes to 'he' to reflect the speaker (Shravan), and the demonstrative 'this' changes to 'that'."
  },
  {
    "id": 437,
    "question": "This is the same lorry ______ ran into the roadside shop yesterday. Fill in the blank with the appropriate option. (TSTET 01 June 2024)",
    "options": [
      "what",
      "that",
      "this",
      "who"
    ],
    "correctAnswer": 1,
    "explanation": "The relative pronoun 'that' is used to introduce a defining clause for things (lorry). The phrase 'the same' is almost always followed by 'that'. 'Who' is used for people, and 'what' is not used as a relative pronoun in this structure."
  },
  {
    "id": 438,
    "question": "My friend prefers coffee ______ tea. Fill in the blank with the appropriate option. (TSTET 01 June 2024)",
    "options": [
      "from",
      "than",
      "to",
      "between"
    ],
    "correctAnswer": 2,
    "explanation": "The verb 'prefer' is followed by the preposition 'to' when comparing two nouns or activities. The correct construction is 'prefer X to Y'. Using 'than' is a common grammatical error."
  },
  {
    "id": 439,
    "question": "Choose the correctly punctuated sentence. (TSTET 01 June 2024)",
    "options": [
      "The weather this Winter, has been windy, wet, and unpredictable.",
      "The weather, This winter has been windy, wet, and unpredictable.",
      "The weather this winter has been, windy, wet, and, Unpredictable.",
      "The weather this winter has been windy, wet and unpredictable."
    ],
    "correctAnswer": 3,
    "explanation": "The fourth sentence is the most correctly and cleanly punctuated. It lists three adjectives ('windy, wet and unpredictable') describing the weather. The other options contain unnecessary commas that break the sentence's flow or incorrect capitalization."
  },
  {
    "id": 440,
    "question": "Whatever he says has so ______ truth. Pick the suitable word to fill in the blank. (TSTET 01 June 2024)",
    "options": [
      "more",
      "much",
      "many",
      "most"
    ],
    "correctAnswer": 1,
    "explanation": "'Truth' is an uncountable noun. 'Much' is used to quantify uncountable nouns, whereas 'many' is used for countable nouns. The phrase 'so much' is used here for emphasis."
  },
  {
    "id": 441,
    "question": "The train was thirty minutes ______. Fill in the blank with correct option. (TSTET 01 June 2024)",
    "options": [
      "lately",
      "latter",
      "late",
      "latest"
    ],
    "correctAnswer": 2,
    "explanation": "The correct word is 'late', which functions as an adverb here, meaning 'after the expected or usual time'. 'Lately' means 'recently'. 'Latter' refers to the second of two items. 'Latest' means the most recent."
  },
  {
    "id": 442,
    "question": "The work must be finished ______ Friday. Pick the suitable option to fill in the blank. (TSTET 01 June 2024)",
    "options": [
      "by",
      "from",
      "bye",
      "in"
    ],
    "correctAnswer": 0,
    "explanation": "The preposition 'by' is used to indicate a deadline, meaning 'on or before' a specific time or day. 'From' indicates a starting point. 'Bye' is an interjection. 'In' is used for a period of time, not a deadline."
  },
  {
    "id": 443,
    "question": "This art craft is ______ by the students. Pick the suitable option to fill in the blank. (TSTET 01 June 2024)",
    "options": [
      "made",
      "make",
      "makes",
      "making"
    ],
    "correctAnswer": 0,
    "explanation": "This sentence is in the passive voice. The structure for the present simple passive is 'is/am/are + past participle'. The past participle of the verb 'make' is 'made'."
  },
  {
    "id": 444,
    "question": "'Is it okay if I use your computer for a minute?' This sentence indicates ______. (TSTET 01 June 2024)",
    "options": [
      "granting permission.",
      "ordering.",
      "asking for permission.",
      "refusing permission."
    ],
    "correctAnswer": 2,
    "explanation": "The question 'Is it okay if I...?' is a polite and common way to ask for someone's permission to do something. It is a request, not a command or a statement granting or refusing permission."
  },
  {
    "id": 445,
    "question": "'My English World' is the title of ______. (TSTET 01 June 2024)",
    "options": [
      "English handbook for teachers.",
      "Programme designed for the children.",
      "English text books of primary level.",
      "English online course for the teachers."
    ],
    "correctAnswer": 2,
    "explanation": "'My English World' is the series title for the English language textbooks prescribed by the Telangana State curriculum for primary school classes (1 to 5)."
  },
  {
    "id": 446,
    "question": "'LAD' stands for ______. (TSTET 01 June 2024)",
    "options": [
      "Language Acquisition Device.",
      "Learning Acquisition Device.",
      "Language Auto correction Device.",
      "Last Accuracy Device."
    ],
    "correctAnswer": 0,
    "explanation": "LAD stands for Language Acquisition Device. It is a theoretical concept proposed by linguist Noam Chomsky, suggesting that humans have an innate mental capacity that enables them to acquire and produce language."
  },
  {
    "id": 447,
    "question": "Identify a discourse and assign a task to construct it. This task is part of ______. (TSTET 01 June 2024)",
    "options": [
      "Silent Reading.",
      "Pre-Reading.",
      "Post-Reading.",
      "Extensive Reading."
    ],
    "correctAnswer": 2,
    "explanation": "Post-reading activities are tasks performed after reading a text to check comprehension, reflect on the content, or apply the information learned. Assigning a task to construct a new discourse (like a summary, a letter, or a dialogue) based on the reading is a classic post-reading activity."
  },
  {
    "id": 448,
    "question": "The following is a feature of 'Student Centred Learning.' (TSTET 01 June 2024)",
    "options": [
      "Teacher is not a co-learner along with students.",
      "Student learns in isolation, not in groups.",
      "Student's participation in all the learning activities will be encouraged.",
      "Assessment is done only by teachers."
    ],
    "correctAnswer": 2,
    "explanation": "A key feature of student-centered learning is the active participation of students. This approach emphasizes student engagement, collaboration, and autonomy in the learning process. The other options describe aspects of a traditional, teacher-centered model."
  },
  {
    "id": 449,
    "question": "The following is known as 'Magnacarta' of Indian education during British rule. (TSTET 01 June 2024)",
    "options": [
      "Hunter Commission",
      "Wood's Despatch",
      "Sadler Commission",
      "Raleigh Commission"
    ],
    "correctAnswer": 1,
    "explanation": "Wood's Despatch of 1854 is widely known as the 'Magna Carta of English Education in India'. It was a comprehensive dispatch that laid the foundation for a structured education system from primary to university level across the country."
  },
  {
    "id": 450,
    "question": "The following is NOT a tool of formative assessment in English at Primary School level in Telangana State Board. (TSTET 01 June 2024)",
    "options": [
      "Observation",
      "Project work",
      "Slip test",
      "Experiments"
    ],
    "correctAnswer": 3,
    "explanation": "Formative assessment in English in the Telangana State Board includes tools like observation, project work, written tasks, and slip tests to monitor student progress. 'Experiments' are a tool of assessment typically used in science subjects, not in English language learning."
  },
  {
    "id": 451,
    "question": "The Atacama Desert in Chile is the driest non-polar desert in the world. Some weather stations in the desert have never received rain. Despite the extreme conditions, the desert is home to a variety of specially adapted plants and animals. \n\nWhat is a surprising characteristic of the Atacama Desert?",
    "options": [
      "It is the coldest desert in the world.",
      "It is home to a rich diversity of life despite its dryness.",
      "It receives heavy rainfall annually.",
      "It is located in the polar region."
    ],
    "correctAnswer": 1,
    "explanation": "The passage highlights that despite being the driest non-polar desert, the Atacama is home to a variety of life, which is a surprising contrast to its extreme environment."
  },
  {
    "id": 452,
    "question": "The 1943 Bengal famine, which killed an estimated 3 million people, was not caused by a drought but by the British government's policies. Wartime inflation, speculative buying, and official denial of the famine's existence were key contributing factors. The British administration prioritized military and industrial needs over feeding the starving population. \n\nAccording to the passage, what was the primary cause of the Bengal famine of 1943?",
    "options": [
      "A severe and prolonged drought.",
      "A massive cyclone that destroyed crops.",
      "British government policies and administrative failures.",
      "A widespread pest infestation."
    ],
    "correctAnswer": 2,
    "explanation": "The passage explicitly states that the famine was not caused by drought but by British policies, including wartime inflation and speculative buying."
  },
  {
    "id": 453,
    "question": "Cats have a specialized reflective layer behind their retinas called the tapetum lucidum. This layer reflects light back through the retina, allowing the cat to see better in low light conditions. It's also what causes their eyes to shine in the dark when a light is shone on them. \n\nWhat is the function of the tapetum lucidum in a cat's eye?",
    "options": [
      "To produce light in the dark.",
      "To change the color of the cat's eyes.",
      "To enhance vision in low light by reflecting light.",
      "To protect the eye from bright light."
    ],
    "correctAnswer": 2,
    "explanation": "The passage explains that the tapetum lucidum reflects light back through the retina, which enhances a cat's ability to see in low-light conditions."
  },
  {
    "id": 454,
    "question": "The 'Great Red Spot' on Jupiter is a massive, long-lasting storm, wider than the entire planet Earth. It has been observed for at least 350 years. The storm's crimson color is thought to be a result of complex organic molecules, red phosphorus, or a sulfur compound, but its exact composition is still unknown. \n\nWhat is the Great Red Spot on Jupiter?",
    "options": [
      "A large volcanic eruption.",
      "A giant, long-lasting storm.",
      "A massive, solid red island.",
      "A reflection of a red moon."
    ],
    "correctAnswer": 1,
    "explanation": "The passage clearly identifies the Great Red Spot as a 'massive, long-lasting storm' on Jupiter that is wider than Earth."
  },
  {
    "id": 455,
    "question": "The first computer mouse, invented by Douglas Engelbart in 1964, was made of wood. It had only one button and was designed to be used with a graphical user interface (GUI). The device was part of a larger project to augment human intellect. \n\nWhat was the original computer mouse made of?",
    "options": [
      "Plastic",
      "Metal",
      "Wood",
      "Rubber"
    ],
    "correctAnswer": 2,
    "explanation": "The passage states that the first computer mouse, invented in 1964 by Douglas Engelbart, was made of wood."
  },
  {
    "id": 456,
    "question": "Semiconductors are not perfect conductors of electricity, nor are they perfect insulators. They are somewhere in between, and their conductivity can be controlled. This property is what makes them so useful in electronics. Silicon is the most common material used to make semiconductors. \n\nWhat is the key property of semiconductors that makes them useful in electronics?",
    "options": [
      "They are perfect conductors of electricity.",
      "They are perfect insulators.",
      "Their electrical conductivity can be controlled.",
      "They are made of a rare and expensive material."
    ],
    "correctAnswer": 2,
    "explanation": "The passage explains that the ability to control the conductivity of semiconductors is the key property that makes them essential for electronic devices."
  },
  {
    "id": 457,
    "question": "The term 'bug' in computer science was popularized when a real moth was found trapped in a relay of the Harvard Mark II computer in 1947. The operators taped the moth to the logbook and labeled it as the 'first actual case of bug being found'. However, the term 'bug' was used by engineers before this to describe a problem in a machine. \n\nWhat event popularized the term 'bug' in computer science?",
    "options": [
      "A software error in the first video game.",
      "The discovery of a moth in a computer relay.",
      "A speech by a famous computer scientist.",
      "A popular science fiction movie."
    ],
    "correctAnswer": 1,
    "explanation": "The passage describes how the discovery of a moth in the Harvard Mark II computer in 1947 popularized the term 'bug' in the context of computing."
  },
  {
    "id": 458,
    "question": "The philosophical concept of 'solipsism' is the idea that only one's own mind is sure to exist. A solipsist believes that the external world and other minds cannot be known and might not exist outside of their own mind. It is a skeptical hypothesis that is difficult to refute. \n\nWhat is the central idea of solipsism?",
    "options": [
      "The belief in multiple gods.",
      "The idea that only one's own mind is certain to exist.",
      "The theory that the universe is a computer simulation.",
      "The belief that all knowledge comes from experience."
    ],
    "correctAnswer": 1,
    "explanation": "The passage defines solipsism as the philosophical idea that one can only be certain of the existence of one's own mind."
  },
  {
    "id": 459,
    "question": "The 2G spectrum allocation scam in India, which came to light in 2008, involved the undercharging of mobile telephony operators for frequency allocation licenses. The Comptroller and Auditor General of India (CAG) estimated a loss of up to \$39 billion to the national exchequer. Several politicians and corporate executives were implicated in the scandal. \n\nWhat was the 2G spectrum scam in India about?",
    "options": [
      "The illegal sale of military equipment.",
      "The undercharging of telecom operators for licenses.",
      "A massive tax evasion scheme by a large corporation.",
      "The construction of substandard infrastructure projects."
    ],
    "correctAnswer": 1,
    "explanation": "The passage explains that the 2G scam was about the undercharging of mobile operators for spectrum allocation licenses, leading to a huge loss for the government."
  },
  {
    "id": 460,
    "question": "Octopuses have three hearts. Two hearts pump blood through the gills, while the third circulates blood to the rest of the body. Interestingly, the third heart stops beating when the octopus swims, which is why they prefer to crawl rather than swim. \n\nWhy do octopuses prefer crawling to swimming?",
    "options": [
      "They are poor swimmers.",
      "Their third heart stops beating when they swim.",
      "They are afraid of predators in the open water.",
      "Crawling is faster than swimming for them."
    ],
    "correctAnswer": 1,
    "explanation": "The passage states that an octopus's third heart stops beating when it swims, which is the reason they prefer to crawl."
  },
  {
    "id": 461,
    "question": "The 'Divide and Rule' policy was a key strategy of the British in India. They exploited the religious and social differences between Hindus and Muslims to maintain control over the country. This policy sowed the seeds of communalism, which eventually led to the partition of India in 1947. \n\nWhat was the main purpose of the British 'Divide and Rule' policy in India?",
    "options": [
      "To promote unity among different communities.",
      "To encourage economic development in India.",
      "To maintain control by exploiting social and religious divisions.",
      "To introduce a new system of education."
    ],
    "correctAnswer": 2,
    "explanation": "The passage clearly states that the 'Divide and Rule' policy was a strategy to maintain British control by exploiting differences between communities."
  },
  {
    "id": 462,
    "question": "A cat's purr is not just a sign of happiness. Cats also purr when they are injured or in pain. The frequency of a cat's purr (25-150 Hz) is in a range that can promote bone healing and reduce pain. This suggests that purring may have a therapeutic function. \n\nBesides happiness, when else do cats purr?",
    "options": [
      "Only when they are sleeping.",
      "When they are hungry.",
      "When they are injured or in pain.",
      "When they are angry."
    ],
    "correctAnswer": 2,
    "explanation": "The passage explains that cats also purr when they are in pain or injured, and that the frequency of the purr may have healing properties."
  },
  {
    "id": 463,
    "question": "Neutron stars are the incredibly dense remnants of massive stars that have exploded as supernovae. A teaspoon of neutron star material would weigh about 6 billion tons. They are so dense that their gravity is about 2 billion times stronger than Earth's. \n\nWhat is a key characteristic of neutron stars?",
    "options": [
      "They are very large and bright.",
      "They are incredibly dense and have strong gravity.",
      "They are made of gas and dust.",
      "They are the coldest objects in the universe."
    ],
    "correctAnswer": 1,
    "explanation": "The passage emphasizes the extreme density and strong gravity of neutron stars, with a teaspoon of their material weighing billions of tons."
  },
  {
    "id": 464,
    "question": "The QWERTY keyboard layout, which is the most common keyboard layout today, was designed in the 1870s to prevent typewriter jams. The keys were arranged to slow down typing speed by placing common letter pairs far apart. This was to prevent the mechanical arms of the typewriter from clashing. \n\nWhy was the QWERTY keyboard layout designed?",
    "options": [
      "To make typing as fast as possible.",
      "To be as ergonomic as possible.",
      "To prevent typewriter jams by slowing down typing.",
      "To make the keyboard look more aesthetically pleasing."
    ],
    "correctAnswer": 2,
    "explanation": "The passage states that the QWERTY layout was intentionally designed to slow down typing speed to prevent the mechanical arms of early typewriters from jamming."
  },
  {
    "id": 465,
    "question": "Moore's Law is an observation made by Gordon Moore in 1965 that the number of transistors on a microchip doubles about every two years, while the cost of computers is halved. This has been a driving force of technological and social change, and has led to the proliferation of affordable and powerful computers. \n\nWhat does Moore's Law describe?",
    "options": [
      "The rate at which new programming languages are created.",
      "The doubling of transistors on a microchip every two years.",
      "The speed at which the internet is growing.",
      "The number of new gadgets released each year."
    ],
    "correctAnswer": 1,
    "explanation": "The passage defines Moore's Law as the observation that the number of transistors on a microchip doubles approximately every two years."
  },
  {
    "id": 466,
    "question": "The Turing Test, proposed by Alan Turing in 1950, is a test of a machine's ability to exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human. If a human evaluator cannot reliably tell the machine from the human, the machine is said to have passed the test. \n\nWhat does the Turing Test assess?",
    "options": [
      "A machine's processing speed.",
      "A machine's ability to exhibit human-like intelligence.",
      "A machine's ability to perform complex calculations.",
      "A machine's ability to create art."
    ],
    "correctAnswer": 1,
    "explanation": "The passage explains that the Turing Test is designed to assess whether a machine can exhibit intelligent behavior that is indistinguishable from a human's."
  },
  {
    "id": 467,
    "question": "The 'Ship of Theseus' is a thought experiment in philosophy that raises the question of whether an object that has had all of its components replaced remains fundamentally the same object. If the ship's planks are replaced one by one, is it still the same ship? This paradox explores the concept of identity over time. \n\nWhat philosophical question does the 'Ship of Theseus' thought experiment explore?",
    "options": [
      "The nature of consciousness.",
      "The problem of evil.",
      "The concept of identity over time.",
      "The meaning of life."
    ],
    "correctAnswer": 2,
    "explanation": "The passage describes the 'Ship of Theseus' as a thought experiment that questions whether an object remains the same if all its parts are replaced, thus exploring the concept of identity."
  },
  {
    "id": 468,
    "question": "The Commonwealth Games (CWG) scam of 2010 in India involved large-scale corruption and mismanagement in the organization of the event. The estimated cost of the games ballooned to 18 times the original budget. Several high-ranking officials were accused of criminal conspiracy, cheating, and forgery. \n\nWhat was the main issue in the 2010 Commonwealth Games scam?",
    "options": [
      "The poor performance of Indian athletes.",
      "The lack of public interest in the games.",
      "Widespread corruption and financial mismanagement.",
      "The cancellation of several sporting events."
    ],
    "correctAnswer": 2,
    "explanation": "The passage highlights that the CWG scam was characterized by massive corruption and mismanagement, with the budget escalating dramatically and officials facing serious charges."
  },
  {
    "id": 469,
    "question": "The 'placebo effect' is a phenomenon where a person experiences real improvements in their condition after receiving a 'placebo' treatment, which is a substance or procedure with no therapeutic effect. The person's belief in the treatment is what triggers the positive response. This effect is a testament to the powerful connection between the mind and body. \n\nWhat is the placebo effect?",
    "options": [
      "A new type of medicine with no side effects.",
      "A real physiological response to a fake treatment.",
      "A type of therapy that uses hypnosis.",
      "A common side effect of many medications."
    ],
    "correctAnswer": 1,
    "explanation": "The passage defines the placebo effect as a real improvement in a person's condition caused by their belief in a treatment that has no actual therapeutic properties."
  },
  {
    "id": 470,
    "question": "The 'Permanent Settlement' of 1793, introduced by the British in Bengal, fixed the land revenue that zamindars (landlords) had to pay to the government in perpetuity. While it was intended to create a stable revenue source, it led to the exploitation of peasants by the zamindars and impoverished the agricultural class. \n\nWhat was a major negative consequence of the Permanent Settlement of 1793?",
    "options": [
      "It led to a decrease in agricultural production.",
      "It caused a war between the British and the zamindars.",
      "It led to the exploitation and impoverishment of peasants.",
      "It resulted in a loss of revenue for the British government."
    ],
    "correctAnswer": 2,
    "explanation": "The passage explains that a major negative outcome of the Permanent Settlement was the exploitation of peasants by the zamindars, which led to their impoverishment."
  },
  {
    "id": 471,
    "question": "Cats have a 'righting reflex' that allows them to almost always land on their feet when they fall. They use their eyes and inner ear to determine up from down, and then twist their flexible backbone to reorient themselves. Their low body-to-weight ratio also helps them to slow their descent. \n\nWhat is the 'righting reflex' in cats?",
    "options": [
      "Their ability to see in the dark.",
      "Their instinct to always return home.",
      "Their ability to land on their feet when they fall.",
      "Their tendency to sleep for long hours."
    ],
    "correctAnswer": 2,
    "explanation": "The passage defines the 'righting reflex' as the cat's innate ability to orient itself during a fall and land on its feet."
  },
  {
    "id": 472,
    "question": "The 'Wow! signal' was a strong narrowband radio signal detected by Jerry Ehman in 1977 while he was working on a SETI project. The signal was so unusual and strong that Ehman circled it on the computer printout and wrote 'Wow!' next to it. The source of the signal remains unexplained and is a subject of interest for those searching for extraterrestrial intelligence. \n\nWhat was the 'Wow! signal'?",
    "options": [
      "A signal from a lost satellite.",
      "A strong, unexplained radio signal from space.",
      "A secret message from a spy agency.",
      "A natural phenomenon caused by a solar flare."
    ],
    "correctAnswer": 1,
    "explanation": "The passage describes the 'Wow! signal' as a strong and unusual radio signal from space, detected in 1977, whose origin is still unknown."
  },
  {
    "id": 473,
    "question": "The first webcam was invented at the University of Cambridge in 1991 to monitor a coffee pot. The researchers in the computer lab wanted to see if the coffee pot was empty without having to walk down the hallway. The camera was connected to the local network so everyone could check the coffee status from their desks. \n\nWhat was the original purpose of the first webcam?",
    "options": [
      "For video conferencing.",
      "To monitor a coffee pot.",
      "For security surveillance.",
      "For online streaming of live events."
    ],
    "correctAnswer": 1,
    "explanation": "The passage states that the first webcam was created to allow researchers to remotely check the status of a coffee pot in their lab."
  },
  {
    "id": 474,
    "question": "A 'fab' or fabrication plant is a factory where semiconductors are manufactured. The manufacturing process is incredibly complex and takes place in a 'cleanroom', which is an environment with a very low level of environmental pollutants such as dust, airborne microbes, and chemical vapors. A single speck of dust can ruin a microchip. \n\nWhat is a 'cleanroom' in a semiconductor fab?",
    "options": [
      "A room where the final products are cleaned and polished.",
      "A highly controlled environment with very low levels of pollutants.",
      "A storage room for the raw materials used in manufacturing.",
      "A laboratory where new semiconductor designs are tested."
    ],
    "correctAnswer": 1,
    "explanation": "The passage defines a 'cleanroom' as a highly controlled environment within a fab designed to be free of contaminants that could damage the sensitive microchips during production."
  },
  {
    "id": 475,
    "question": "Deep Blue was a chess-playing computer developed by IBM. In 1997, it defeated the reigning world chess champion, Garry Kasparov, in a six-game match. This was a landmark moment in the history of artificial intelligence, as it was the first time a computer had beaten a world champion in a match under standard tournament rules. \n\nWhat was the significance of Deep Blue's victory over Garry Kasparov?",
    "options": [
      "It proved that computers are more creative than humans.",
      "It was the first time a computer beat a world chess champion in a match.",
      "It led to the end of human chess tournaments.",
      "It showed that computers can feel emotions."
    ],
    "correctAnswer": 1,
    "explanation": "The passage highlights the significance of Deep Blue's victory as the first time a computer defeated a reigning world chess champion in a formal match, marking a milestone for AI."
  },
  {
    "id": 476,
    "question": "Plato's 'Allegory of the Cave' is a famous philosophical metaphor that describes a group of prisoners who have lived their entire lives chained in a cave, facing a blank wall. They see shadows on the wall projected from objects passing in front of a fire behind them. These shadows are the prisoners' reality. The allegory explores the nature of reality, knowledge, and enlightenment. \n\nIn Plato's 'Allegory of the Cave', what do the prisoners perceive as reality?",
    "options": [
      "The fire behind them.",
      "The objects passing in front of the fire.",
      "The shadows on the wall.",
      "The other prisoners in the cave."
    ],
    "correctAnswer": 2,
    "explanation": "The passage explains that in the allegory, the prisoners' reality is limited to the shadows they see on the wall, as they have never experienced anything else."
  },
  {
    "id": 477,
    "question": "The 'Fodder Scam' in Bihar, India, in the 1990s, involved the fraudulent withdrawal of large sums of money from the government treasury in the name of purchasing livestock feed that was never actually bought. The scam was estimated to be worth around \$130 million and implicated several high-profile politicians. \n\nWhat was the 'Fodder Scam' about?",
    "options": [
      "The illegal export of cattle from India.",
      "The sale of contaminated animal feed to farmers.",
      "The fraudulent withdrawal of government funds for non-existent animal feed.",
      "A scheme to provide subsidized fodder to poor farmers that was mismanaged."
    ],
    "correctAnswer": 2,
    "explanation": "The passage describes the Fodder Scam as a case of massive fraud where government money was siphoned off using fake bills for animal fodder that was never purchased."
  },
  {
    "id": 478,
    "question": "The mantis shrimp has the most complex eyes in the animal kingdom. They can see polarized light and have 16 types of photoreceptor cells, compared to the three types that humans have. This allows them to perceive a world of color and light that is unimaginable to us. \n\nWhat is remarkable about the mantis shrimp's eyes?",
    "options": [
      "They are the largest eyes of any animal.",
      "They can shoot lasers to stun their prey.",
      "They have the most complex visual system in the animal kingdom.",
      "They can see into the future."
    ],
    "correctAnswer": 2,
    "explanation": "The passage highlights the complexity of the mantis shrimp's eyes, noting their ability to see polarized light and their 16 types of photoreceptors, far more than humans."
  },
  {
    "id": 479,
    "question": "The Jallianwala Bagh massacre of 1919 in Amritsar, India, was a turning point in the Indian independence movement. British troops, under the command of Colonel Reginald Dyer, fired on a large, peaceful crowd of unarmed Indians, killing hundreds. The brutality of the act shocked the nation and galvanized the freedom struggle. \n\nWhat was the significance of the Jallianwala Bagh massacre?",
    "options": [
      "It led to a peaceful resolution between the British and Indian leaders.",
      "It was a major victory for the British army in India.",
      "It was a brutal act that intensified the Indian independence movement.",
      "It resulted in the immediate withdrawal of the British from India."
    ],
    "correctAnswer": 2,
    "explanation": "The passage explains that the Jallianwala Bagh massacre was a pivotal event that fueled the Indian independence movement due to its extreme brutality against unarmed civilians."
  },
  {
    "id": 480,
    "question": "The collective noun for a group of cats is a 'clowder'. Other, less common terms include a 'glaring' or a 'pounce'. These terms are rarely used in everyday conversation, but are interesting tidbits of the English language. \n\nWhat is the collective noun for a group of cats?",
    "options": [
      "A pack",
      "A herd",
      "A clowder",
      "A flock"
    ],
    "correctAnswer": 2,
    "explanation": "The passage states that the correct collective noun for a group of cats is a 'clowder'."
  },
  {
    "id": 481,
    "question": "The 'Pioneer anomaly' was the observed deviation in the trajectories of the Pioneer 10 and 11 spacecraft as they journeyed out of the solar system. For many years, the cause of this slight but persistent deceleration was a mystery. It was eventually attributed to the anisotropic emission of thermal radiation from the spacecraft themselves. \n\nWhat was the cause of the 'Pioneer anomaly'?",
    "options": [
      "The gravitational pull of an unknown planet.",
      "A flaw in the spacecraft's navigation system.",
      "The uneven emission of heat from the spacecraft.",
      "The influence of dark matter."
    ],
    "correctAnswer": 2,
    "explanation": "The passage explains that the Pioneer anomaly was ultimately caused by the uneven radiation of heat from the spacecraft, which created a tiny but constant force."
  },
  {
    "id": 482,
    "question": "The term 'spam' for unsolicited email comes from a 1970 Monty Python sketch. In the sketch, a cafe serves every dish with Spam, and a group of Vikings sings a song about Spam, drowning out all other conversation. The repetitive and unavoidable nature of the singing was likened to the unwanted emails that flood our inboxes. \n\nWhere does the term 'spam' for unwanted email come from?",
    "options": [
      "A brand of canned meat.",
      "A computer virus from the 1980s.",
      "A Monty Python sketch about a cafe that serves a lot of Spam.",
      "An acronym for 'short, pointless, and annoying mail'."
    ],
    "correctAnswer": 2,
    "explanation": "The passage traces the origin of the term 'spam' to a Monty Python sketch where the word 'Spam' is repeated endlessly, mirroring the nature of unsolicited emails."
  },
  {
    "id": 483,
    "question": "Silicon Valley, the hub of the tech industry, gets its name from the high concentration of companies involved in the production of silicon-based integrated circuits. The 'silicon' refers to the primary material used in semiconductors, and 'valley' refers to the Santa Clara Valley in Northern California where it is located. \n\nWhy is Silicon Valley called 'Silicon Valley'?",
    "options": [
      "Because it is located in a valley with large silicon deposits.",
      "It is named after a famous tech entrepreneur named Silicon.",
      "It refers to the many companies there that make silicon-based semiconductors.",
      "It is a marketing term with no real meaning."
    ],
    "correctAnswer": 2,
    "explanation": "The passage explains that the name 'Silicon Valley' comes from the large number of companies in the Santa Clara Valley that manufacture silicon-based semiconductors."
  },
  {
    "id": 484,
    "question": "The 'Chinese Room' argument, proposed by philosopher John Searle, is a thought experiment that challenges the idea that a computer running a program can have a 'mind' or 'understanding'. Searle argues that even if a computer can pass the Turing Test, it is simply manipulating symbols without any real comprehension. \n\nWhat is the main point of the 'Chinese Room' argument?",
    "options": [
      "That computers will soon be more intelligent than humans.",
      "That a computer can have a mind if it is programmed correctly.",
      "That symbol manipulation is not the same as understanding.",
      "That the Turing Test is a perfect measure of machine intelligence."
    ],
    "correctAnswer": 2,
    "explanation": "The passage states that the 'Chinese Room' argument contends that a computer can manipulate symbols according to rules without genuinely understanding them, thus questioning the notion of machine consciousness."
  },
  {
    "id": 485,
    "question": "The 'Hawala' system is an informal and ancient method of transferring money without any physical money actually moving. It relies on a network of brokers, or 'hawaladars', who operate on a system of trust. Due to its anonymity and lack of regulation, it is often used for money laundering and terrorist financing. \n\nWhat is the 'Hawala' system?",
    "options": [
      "A modern digital currency like Bitcoin.",
      "A formal banking system regulated by the government.",
      "An informal money transfer system based on trust.",
      "A type of stock market investment."
    ],
    "correctAnswer": 2,
    "explanation": "The passage defines the Hawala system as an informal method of transferring money that operates on trust and without the physical movement of cash."
  },
  {
    "id": 486,
    "question": "The 'bombardier beetle' has a unique defense mechanism. When threatened, it sprays a boiling, noxious chemical liquid from the tip of its abdomen. The beetle produces two separate chemicals that are mixed together at the moment of ejection, creating a powerful and hot spray that can deter predators. \n\nHow does the bombardier beetle defend itself?",
    "options": [
      "By camouflaging itself to blend in with its surroundings.",
      "By playing dead to trick its predators.",
      "By spraying a boiling, noxious chemical liquid.",
      "By biting its attacker with powerful jaws."
    ],
    "correctAnswer": 2,
    "explanation": "The passage describes the bombardier beetle's defense mechanism as the ability to spray a hot and toxic chemical liquid at its predators."
  },
  {
    "id": 487,
    "question": "The 'Drain of Wealth' theory, proposed by Indian nationalist Dadabhai Naoroji, argued that the British were systematically draining India's resources and wealth for their own benefit. This economic exploitation was a key factor in the impoverishment of India during the colonial period. Naoroji's work was instrumental in shaping the Indian nationalist movement. \n\nWhat was the 'Drain of Wealth' theory?",
    "options": [
      "A theory that India's climate was causing a decline in its resources.",
      "The idea that the British were systematically exploiting India's wealth.",
      "A plan by the British to invest heavily in India's infrastructure.",
      "The belief that India's social customs were hindering its economic growth."
    ],
    "correctAnswer": 1,
    "explanation": "The passage explains that the 'Drain of Wealth' theory was the argument that the British were draining India's economic resources for their own benefit."
  },
  {
    "id": 488,
    "question": "It is a common misconception that cats are nocturnal. They are actually crepuscular, which means they are most active at dawn and dusk. This is because their prey, such as rodents and birds, are also most active during these times. \n\nWhen are cats most active?",
    "options": [
      "During the day (diurnal).",
      "During the night (nocturnal).",
      "At dawn and dusk (crepuscular).",
      "They are equally active throughout the day and night."
    ],
    "correctAnswer": 2,
    "explanation": "The passage clarifies that cats are not nocturnal but crepuscular, meaning their peak activity occurs at dawn and dusk."
  },
  {
    "id": 489,
    "question": "The 'Fermi Paradox' is the apparent contradiction between the high probability of the existence of extraterrestrial civilizations and the lack of evidence for, or contact with, such civilizations. The paradox raises the question: 'If there are so many aliens, where are they?' \n\nWhat is the 'Fermi Paradox'?",
    "options": [
      "A mathematical proof that aliens do not exist.",
      "The contradiction between the high probability of alien life and the lack of evidence.",
      "A theory that aliens are secretly living among us.",
      "A plan to establish contact with extraterrestrial civilizations."
    ],
    "correctAnswer": 1,
    "explanation": "The passage defines the Fermi Paradox as the conflict between the high likelihood of extraterrestrial life and the absence of any observational evidence for it."
  },
  {
    "id": 490,
    "question": "The first video game, 'Tennis for Two', was created in 1958 by physicist William Higinbotham. It was played on an oscilloscope and was a precursor to the popular game 'Pong'. The game was created as an exhibit to liven up a visitor's day at the Brookhaven National Laboratory. \n\nWhat was the first video game?",
    "options": [
      "Pac-Man",
      "Space Invaders",
      "Tennis for Two",
      "Pong"
    ],
    "correctAnswer": 2,
    "explanation": "The passage identifies 'Tennis for Two', created in 1958, as the first video game, which was played on an oscilloscope."
  },
  {
    "id": 491,
    "question": "Doping in semiconductors is the process of intentionally introducing impurities into an extremely pure semiconductor to change its electrical properties. The type of impurity added determines whether the semiconductor becomes 'n-type' (with an excess of electrons) or 'p-type' (with a deficiency of electrons). \n\nWhat is the purpose of 'doping' in semiconductors?",
    "options": [
      "To make the semiconductor stronger and more durable.",
      "To change its color for aesthetic purposes.",
      "To alter its electrical properties.",
      "To clean the semiconductor of any existing impurities."
    ],
    "correctAnswer": 2,
    "explanation": "The passage explains that doping is the process of adding impurities to a semiconductor to intentionally change its electrical properties."
  },
  {
    "id": 492,
    "question": "The 'Uncanny Valley' is a hypothesis in the field of robotics and computer animation. It suggests that when humanoid robots look and act almost, but not exactly, like actual human beings, it causes a response of revulsion among human observers. The 'valley' refers to the dip in a graph of the comfort level of humans versus the human-likeness of the robot. \n\nWhat is the 'Uncanny Valley'?",
    "options": [
      "A place where robots are manufactured.",
      "A feeling of revulsion towards robots that are almost, but not perfectly, human-like.",
      "A theory that robots will one day take over the world.",
      "A type of software used to create realistic computer animations."
    ],
    "correctAnswer": 1,
    "explanation": "The passage defines the 'Uncanny Valley' as the feeling of unease or revulsion that people experience when encountering robots or animations that are very close to, but not quite, human-like."
  },
  {
    "id": 493,
    "question": "The 'Veil of Ignorance' is a thought experiment proposed by philosopher John Rawls. It suggests that we should imagine ourselves in a position where we do not know our own social status, class, race, gender, or abilities. From this 'original position' behind the veil of ignorance, we can then determine the principles of justice that are fair to all. \n\nWhat is the purpose of the 'Veil of Ignorance' thought experiment?",
    "options": [
      "To argue that all people are inherently selfish.",
      "To determine fair principles of justice by removing personal biases.",
      "To prove that there is no such thing as free will.",
      "To justify the existing social and economic inequalities."
    ],
    "correctAnswer": 1,
    "explanation": "The passage explains that the 'Veil of Ignorance' is a thought experiment designed to help us determine fair principles of justice by imagining a scenario where we are unaware of our own personal circumstances."
  },
  {
    "id": 494,
    "question": "The 'Adarsh Housing Society Scam' in Mumbai, India, involved the illegal construction of a high-rise building on land that was meant for war widows and veterans. The apartments were then allotted to politicians, bureaucrats, and military officials at below-market rates. The scam exposed the nexus between politicians, military officials, and the real estate mafia. \n\nWhat was the 'Adarsh Housing Society Scam' about?",
    "options": [
      "The collapse of a poorly constructed building.",
      "The illegal construction of a building on land meant for war widows.",
      "A scheme to provide affordable housing to the poor that was mismanaged.",
      "The sale of government land to private developers at a very low price."
    ],
    "correctAnswer": 1,
    "explanation": "The passage describes the Adarsh scam as the illegal construction of a building on land reserved for war widows and the fraudulent allotment of apartments to influential people."
  },
  {
    "id": 495,
    "question": "The 'tardigrade', also known as the 'water bear', is one of the most resilient animals on Earth. These microscopic creatures can survive extreme conditions, including extreme temperatures, pressures, radiation, and even the vacuum of space. They do this by entering a state of suspended animation called cryptobiosis. \n\nWhat is a tardigrade?",
    "options": [
      "A type of bear that lives in the water.",
      "A microscopic and extremely resilient animal.",
      "A newly discovered species of fish.",
      "A mythical creature from ancient folklore."
    ],
    "correctAnswer": 1,
    "explanation": "The passage introduces the tardigrade, or 'water bear', as a microscopic animal known for its incredible resilience and ability to survive in extreme environments."
  },
  {
    "id": 496,
    "question": "The 'Indigo Revolt' of 1859 in Bengal was a peasant uprising against the British planters who forced them to grow indigo instead of food crops. The planters used coercion and exploitation to maximize their profits. The revolt was a significant event in the history of the Indian freedom struggle and was one of the first successful peasant movements against the British. \n\nWhat was the 'Indigo Revolt'?",
    "options": [
      "A revolt by British soldiers against their officers.",
      "A peasant uprising against the forced cultivation of indigo.",
      "A protest against the high taxes imposed by the British.",
      "A religious movement that turned into a violent conflict."
    ],
    "correctAnswer": 1,
    "explanation": "The passage explains that the Indigo Revolt was a peasant uprising in Bengal against the oppressive system of forced indigo cultivation by British planters."
  },
  {
    "id": 497,
    "question": "Cats have a vomeronasal organ, or Jacobson's organ, located in the roof of their mouth. This organ allows them to 'taste' scents in the air. When a cat exhibits the 'Flehmen response'—curling back its upper lip and baring its teeth—it is drawing air into the Jacobson's organ to get a better sense of a particular smell. \n\nWhat is the 'Flehmen response' in cats?",
    "options": [
      "A sign of aggression towards other cats.",
      "A way of tasting scents in the air using a special organ.",
      "A type of meow that indicates hunger.",
      "A defensive posture to make themselves look bigger."
    ],
    "correctAnswer": 1,
    "explanation": "The passage describes the Flehmen response as the action of a cat drawing air into its Jacobson's organ to better analyze a scent."
  },
  {
    "id": 498,
    "question": "The 'Oort Cloud' is a theoretical spherical cloud of icy objects that is believed to surround the sun at a vast distance. It is thought to be the origin of most of the long-period comets that we see. The Oort Cloud has never been directly observed, but its existence is inferred from the orbits of comets. \n\nWhat is the 'Oort Cloud'?",
    "options": [
      "A giant storm on Jupiter.",
      "A theoretical cloud of icy objects surrounding the solar system.",
      "A newly discovered galaxy.",
      "A nebula where stars are born."
    ],
    "correctAnswer": 1,
    "explanation": "The passage defines the Oort Cloud as a theoretical and unobserved spherical cloud of icy bodies that is believed to be the source of long-period comets."
  },
  {
    "id": 499,
    "question": "The first computer bug was a real moth. In 1947, operators of the Harvard Mark II computer found a moth trapped in a relay, causing the machine to malfunction. They taped the moth to their logbook and jokingly referred to it as the 'first actual case of bug being found.' The term 'bug' had been used by engineers before to describe a problem, but this event popularized its use in computing. \n\nWhat was the first computer 'bug'?",
    "options": [
      "A software glitch that caused a system crash.",
      "A virus that spread through the early internet.",
      "A real moth that got stuck in a computer relay.",
      "A design flaw in the first microprocessor."
    ],
    "correctAnswer": 2,
    "explanation": "The passage recounts the famous story of the first computer 'bug' being an actual moth that caused a malfunction in the Harvard Mark II computer."
  },
  {
    "id": 500,
    "question": "A 'wafer' in the context of semiconductors is a thin slice of semiconductor material, such as silicon, upon which microcircuits are fabricated. The wafer is then cut into many small pieces, each of which is an individual integrated circuit or 'chip'. \n\nWhat is a 'wafer' in semiconductor manufacturing?",
    "options": [
      "A type of software used to design microchips.",
      "The final packaged microchip that is sold to consumers.",
      "A thin slice of semiconductor material used to make integrated circuits.",
      "A tool used to test the quality of microchips."
    ],
    "correctAnswer": 2,
    "explanation": "The passage defines a wafer as a thin slice of semiconductor material that serves as the base for creating multiple integrated circuits."
  }
]
  

export const englishPaper1Questions = rawEnglishPaper1Data.map((q, index) => ({
  id: `Q${index + 1}`,
  question: q.question,
  options: q.options,
  correctAnswer: q.correctAnswer,
  explanation: q.explanation,
}));


export const convertEnglishPaper1ToQuestionFormat = (questions: typeof englishPaper1Questions) => {
  return questions.map((q, index) => ({
    id: index + 1,
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
  }));
};
