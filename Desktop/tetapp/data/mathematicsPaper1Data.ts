type MathsPaper1RawQuestion = {
  id: number | string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

const rawMathematicsPaper1Data: MathsPaper1RawQuestion[] = 
  [
  {
    "id": 1,
    "question": "Which of the following is a non-terminating recurring decimal? (TSTET 08 Jan 2025)",
    "options": [
      "$\\frac{5}{8}$",
      "$\\frac{3}{7}$",
      "$\\frac{14}{35}$",
      "$\\frac{13}{16}$"
    ],
    "correctAnswer": 1,
    "explanation": "A rational number can be expressed as a terminating decimal if and only if the prime factorization of its denominator (in the simplest form) contains no primes other than 2 and 5.\n\n* **Option 1: $\\frac{5}{8}$**\nThe denominator is $8 = 2^3$. Since the only prime factor is 2, this is a terminating decimal (0.625).\n* **Option 2: $\\frac{3}{7}$**\nThe denominator is 7. Since the prime factor is other than 2 or 5, this is a non-terminating recurring decimal (0.428571...).\n* **Option 3: $\\frac{14}{35}$**\nFirst, simplify the fraction: $\\frac{14}{35} = \\frac{2}{5}$. The denominator is 5. This is a terminating decimal (0.4).\n* **Option 4: $\\frac{13}{16}$**\nThe denominator is $16 = 2^4$. Since the only prime factor is 2, this is a terminating decimal (0.8125)."
  },
  {
    "id": 2,
    "question": "If $3600=2^{x} \\times 3^{y} \\times 5^{z}$ then $\\frac{xy+yz+zx}{x+y+2z}$ = (TSTET 08 Jan 2025)",
    "options": [
      "3",
      "1",
      "2",
      "4"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: **Find the prime factorization of 3600.**\n$3600 = 36 \\times 100$\n$= (6 \\times 6) \\times (10 \\times 10)$\n$= (2 \\times 3 \\times 2 \\times 3) \\times (2 \\times 5 \\times 2 \\times 5)$\nCounting the prime factors, we get: $3600 = 2^4 \\times 3^2 \\times 5^2$.\n\n Step 2: **Compare the factorization with the given equation.**\nGiven $3600 = 2^x \\times 3^y \\times 5^z$, we can determine that:\n$x = 4$, $y = 2$, $z = 2$.\n\n Step 3: **Substitute the values of x, y, and z into the expression.**\nExpression: $\\frac{xy+yz+zx}{x+y+2z}$\nNumerator: $xy+yz+zx = (4)(2) + (2)(2) + (2)(4) = 8 + 4 + 8 = 20$.\nDenominator: $x+y+2z = 4 + 2 + 2(2) = 4 + 2 + 4 = 10$.\n\n Step 4: **Calculate the final value.**\n$\\frac{20}{10} = 2$."
  },
  {
    "id": 3,
    "question": "Five years ago sum of the ages of Anitha and Sunitha is 42 years. Anitha is elder than Sunitha by 4 years. The ratio of present ages of Anitha and Sunitha is (TSTET 08 Jan 2025)",
    "options": [
      "6:5",
      "8:7",
      "4:3",
      "7:6"
    ],
    "correctAnswer": 3,
    "explanation": " Step 1: **Find the sum of their present ages.**\nFive years ago, the sum of their ages was 42. To find the sum of their present ages, we must add 5 years for each person:\nSum of present ages = $42 + 5 (Anitha) + 5 (Sunitha) = 42 + 10 = 52$ years.\n\n  Step 2: **Set up equations for their present ages.**\nLet Anitha's present age be 'A' and Sunitha's present age be 'S'.\nEquation 1: $A + S = 52$\nEquation 2: $A = S + 4$ (Anitha is 4 years elder)\n\n  Step 3: **Solve the equations.**\nSubstitute Equation 2 into Equation 1:\n$(S + 4) + S = 52$\n$2S + 4 = 52$\n$2S = 48$\n$S = 24$ years (Sunitha's present age)\n\nNow find Anitha's age:\n$A = S + 4 = 24 + 4 = 28$ years (Anitha's present age)\n\n  Step 4: **Find the ratio of their present ages.**\nRatio = Anitha : Sunitha = 28 : 24\nSimplify the ratio by dividing both numbers by their greatest common divisor, which is 4:\nRatio = $\\frac{28}{4} : \\frac{24}{4} = 7 : 6$."
  },
  {
    "id": 4,
    "question": "If cost of $5\\frac{1}{4}$ dozens of apples is ₹1386, then the cost of 9 apples is (TSTET 08 Jan 2025)",
    "options": [
      "₹198",
      "₹225",
      "₹156",
      "₹204"
    ],
    "correctAnswer": 0,
    "explanation": " Step 1: **Calculate the total number of apples.**\nOne dozen = 12 items.\n$5\\frac{1}{4}$ dozens = $\\frac{21}{4}$ dozens.\nTotal number of apples = $\\frac{21}{4} \\times 12 = 21 \\times 3 = 63$ apples.\n\n Step 2: **Calculate the cost of one apple.**\nThe cost of 63 apples is ₹1386.\nCost per apple = $\\frac{1386}{63}$.\n$1386 \\div 63 = 22$. So, the cost of one apple is ₹22.\n\n Step 3: **Calculate the cost of 9 apples.**\nCost of 9 apples = $9 \\times$ Cost per apple = $9 \\times 22 = ₹198$."
  },
  {
    "id": 5,
    "question": "$\\frac{(0.2)^{2}+(0.3)^{2}+(0.4)^{2}}{(0.5)^{2}} =$ (TSTET 08 Jan 2025)",
    "options": [
      "1.60",
      "1.24",
      "1.16",
      "1.08"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: **Calculate the values of the squares.**\nNumerator:\n$(0.2)^2 = 0.04$\n$(0.3)^2 = 0.09$\n$(0.4)^2 = 0.16$\n\nDenominator:\n$(0.5)^2 = 0.25$\n\n Step 2: **Sum the values in the numerator.**\n$0.04 + 0.09 + 0.16 = 0.29$\n\n Step 3: **Perform the division.**\nThe expression becomes $\\frac{0.29}{0.25}$.\nTo simplify, multiply the numerator and denominator by 100:\n$\\frac{0.29 \\times 100}{0.25 \\times 100} = \\frac{29}{25}$.\n$29 \\div 25 = 1.16$."
  },
  {
    "id": 6,
    "question": "Which of the following is correct? (TSTET 08 Jan 2025)",
    "options": [
      "$\\frac{5}{6}+1=1$",
      "$2+\\frac{3}{4}=2.75$",
      "$4\\frac{5}{6}=\\frac{34}{6}$",
      "$3-1\\frac{1}{2}=\\frac{3}{4}$"
    ],
    "correctAnswer": 1,
    "explanation": "Let's evaluate each option:\n\n* **Option 1:** $\\frac{5}{6}+1 = \\frac{5}{6}+\\frac{6}{6} = \\frac{11}{6}$. This is not equal to 1. **Incorrect.**\n* **Option 2:** $2+\\frac{3}{4} = 2+0.75 = 2.75$. This is **Correct.**\n* **Option 3:** $4\\frac{5}{6} = \\frac{(4 \\times 6)+5}{6} = \\frac{24+5}{6} = \\frac{29}{6}$. This is not equal to $\\frac{34}{6}$. **Incorrect.**\n* **Option 4:** $3-1\\frac{1}{2} = 3 - \\frac{3}{2} = \\frac{6}{2} - \\frac{3}{2} = \\frac{3}{2}$. This is not equal to $\\frac{3}{4}$. **Incorrect.**"
  },
  {
    "id": 7,
    "question": "Avani purchased a watch for ₹600 and sold it to Vikas at a gain of $6\\frac{1}{2}\\%$. Vikas sold it to Ashok at a gain of 15%. The amount paid by Ashok is (TSTET 08 Jan 2025)",
    "options": [
      "₹734.85",
      "₹746.40",
      "₹736.36",
      "₹739.63"
    ],
    "correctAnswer": 0,
    "explanation": " Step 1: **Calculate the price Vikas paid to Avani.**\nAvani's cost price = ₹600.\nAvani's gain = $6\\frac{1}{2}\\% = 6.5\\% = 0.065$.\nGain amount = $600 \\times 0.065 = ₹39$.\nPrice for Vikas = Avani's cost + Avani's gain = $600 + 39 = ₹639$.\n\n Step 2: **Calculate the price Ashok paid to Vikas.**\nVikas's cost price = ₹639.\nVikas's gain = 15% = 0.15.\nGain amount = $639 \\times 0.15 = ₹95.85$.\nPrice for Ashok = Vikas's cost + Vikas's gain = $639 + 95.85 = ₹734.85$."
  },
  {
    "id": 8,
    "question": "Which of the following measures CANNOT form a triangle? (TSTET 08 Jan 2025)",
    "options": [
      "7cm, 8cm, 9cm",
      "8cm, 8cm, 8cm",
      "6cm, 8cm, 10cm",
      "3cm, 6cm, 3cm"
    ],
    "correctAnswer": 3,
    "explanation": "The **Triangle Inequality Theorem** states that the sum of the lengths of any two sides of a triangle must be greater than the length of the third side.\n\n* **Option 1 (7, 8, 9):**\n    $7+8 > 9$ (15 > 9) True.\n    $7+9 > 8$ (16 > 8) True.\n    $8+9 > 7$ (17 > 7) True. Can form a triangle.\n* **Option 2 (8, 8, 8):**\n    $8+8 > 8$ (16 > 8) True. Can form an equilateral triangle.\n* **Option 3 (6, 8, 10):**\n    $6+8 > 10$ (14 > 10) True.\n    $6+10 > 8$ (16 > 8) True.\n    $8+10 > 6$ (18 > 6) True. Can form a right-angled triangle.\n* **Option 4 (3, 6, 3):**\n    $3+3 > 6$ (6 > 6) **False.** The sum is equal, not greater. These lengths cannot form a triangle; they would form a straight line segment."
  },
  {
    "id": 9,
    "question": "In a triangle, the height is double the base and its area is 576 sq.cm. Then, its height (in cm) is (TSTET 08 Jan 2025)",
    "options": [
      "36",
      "24",
      "48",
      "26"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: **Set up the variables and equations.**\nLet the base be 'b' and the height be 'h'.\nGiven: $h = 2b$\nArea of a triangle = $\\frac{1}{2} \\times b \\times h$\nGiven Area = 576 sq.cm.\n\n Step 2: **Solve for the base 'b'.**\nSubstitute $h = 2b$ into the area formula:\n$576 = \\frac{1}{2} \\times b \\times (2b)$\n$576 = b^2$\n$b = \\sqrt{576}$\n$b = 24$ cm.\n\n Step 3: **Calculate the height 'h'.**\n$h = 2b = 2 \\times 24 = 48$ cm."
  },
  {
    "id": 10,
    "question": "What does the height of the longest bar in the bar graph give? (TSTET 08 Jan 2025)",
    "options": [
      "Median",
      "Mean",
      "Mode",
      "Range"
    ],
    "correctAnswer": 2,
    "explanation": "In a bar graph, the vertical axis typically represents the frequency (or count) of each category shown on the horizontal axis.\n* **Mean** is the average of the data.\n* **Median** is the middle value when data is sorted.\n* **Mode** is the value that occurs most frequently in the data set.\n* **Range** is the difference between the highest and lowest values.\n\nThe longest bar corresponds to the highest frequency. Therefore, the category represented by the longest bar is the **mode** of the data."
  },
  {
    "id": 11,
    "question": "The predecessor of whole number 0 is (TSTET 08 Jan 2025)",
    "options": [
      "1",
      "-1",
      "0",
      "no predecessor"
    ],
    "correctAnswer": 3,
    "explanation": "The set of **whole numbers** is {0, 1, 2, 3, ...}. It does not include negative numbers.\nThe predecessor of a number is the number that comes immediately before it. Mathematically, the predecessor of 0 is $0 - 1 = -1$. However, -1 is an integer but not a whole number. Since the question specifically asks for the predecessor within the set of whole numbers, 0 is the smallest whole number and thus has **no predecessor** in that set."
  },
  {
    "id": 12,
    "question": "The perimeters of a rectangle and a square are same. If the length and breadth of the rectangle are 32 cm and 28 cm respectively. Then, the area of the square is greater than area of the rectangle by (in sq. cm) (TSTET 08 Jan 2025)",
    "options": [
      "4",
      "32",
      "16",
      "8"
    ],
    "correctAnswer": 0,
    "explanation": " Step 1: **Calculate the perimeter of the rectangle.**\nPerimeter = $2 \\times (length + breadth)$\nPerimeter = $2 \\times (32 + 28) = 2 \\times 60 = 120$ cm.\n\n Step 2: **Find the side and area of the square.**\nSince the perimeters are the same, the perimeter of the square is also 120 cm.\nSide of square = $\\frac{Perimeter}{4} = \\frac{120}{4} = 30$ cm.\nArea of square = $side^2 = 30^2 = 900$ sq. cm.\n\n Step 3: **Calculate the area of the rectangle.**\nArea of rectangle = $length \\times breadth = 32 \\times 28 = 896$ sq. cm.\n\n Step 4: **Find the difference in areas.**\nDifference = Area of square - Area of rectangle\nDifference = $900 - 896 = 4$ sq. cm."
  },
  {
    "id": 13,
    "question": "Number of lines of symmetry in a regular pentagon is (TSTET 08 Jan 2025)",
    "options": [
      "4",
      "6",
      "7",
      "5"
    ],
    "correctAnswer": 3,
    "explanation": "A line of symmetry is a line that divides a figure into two identical halves that are mirror images of each other. For any regular polygon (a polygon with all sides equal and all angles equal), the number of lines of symmetry is equal to the number of its sides. Since a regular pentagon has **5** sides, it has **5** lines of symmetry. Each line of symmetry connects a vertex to the midpoint of the opposite side."
  },
  {
    "id": 14,
    "question": "In the number 6?5?4, find the digit at ? place so that the difference between its place value is 5940. (TSTET 08 Jan 2025)",
    "options": [
      "7",
      "6",
      "8",
      "5"
    ],
    "correctAnswer": 1,
    "explanation": "Let the unknown digit be 'x'. The number can be written as 6x5x4.\n\n Step 1: **Identify the place values of the unknown digit.**\nThe first 'x' is in the thousands place, so its place value is $1000 \\times x$.\nThe second 'x' is in the tens place, so its place value is $10 \\times x$.\n\n Step 2: **Set up an equation for the difference.**\nThe difference between the place values is given as 5940.\n$1000x - 10x = 5940$\n\n Step 3: **Solve for x.**\n$990x = 5940$\n$x = \\frac{5940}{990}$\n$x = \\frac{594}{99}$\n$x = 6$.\n\nThe required digit is 6."
  },
  {
    "id": 15,
    "question": "A hotel requires 7 litres of edible oil per day. If cost of one litre oil is ₹100, the cost of oil required by hotel for 31 days is (TSTET 08 Jan 2025)",
    "options": [
      "₹31000",
      "₹14700",
      "₹21700",
      "₹28700"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: **Calculate the total amount of oil needed.**\nOil per day = 7 litres.\nNumber of days = 31.\nTotal oil required = $7 \\text{ litres/day} \\times 31 \\text{ days} = 217$ litres.\n\n Step 2: **Calculate the total cost.**\nCost per litre = ₹100.\nTotal cost = Total oil required $\\times$ Cost per litre\nTotal cost = $217 \\times 100 = ₹21,700$."
  },
  {
    "id": 16,
    "question": "The runs scored in a cricket match by 11 players is 60, 15, 120, 50, 48, 4, 56, 100, 80, 8, 15. The median of this data is (TSTET 08 Jan 2025)",
    "options": [
      "4",
      "48",
      "50",
      "15"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: **Arrange the data in ascending order.**\nTo find the median, the data set must be sorted from smallest to largest.\n4, 8, 15, 15, 48, 50, 56, 60, 80, 100, 120.\n\n Step 2: **Find the middle value.**\nThere are n = 11 data points (an odd number).\nThe median is the value at the $(\\frac{n+1}{2})^{th}$ position.\nPosition = $(\\frac{11+1}{2}) = \\frac{12}{2} = 6^{th}$ position.\n\n Step 3: **Identify the number at the 6th position.**\nIn the sorted list, the 6th number is 48.\nTherefore, the median of the data is 48."
  },
  {
    "id": 17,
    "question": "Which result of the following will give a whole number? (TSTET 08 Jan 2025)",
    "options": [
      "$\\frac{15}{16}-\\frac{3}{4}$",
      "$\\frac{2}{5}\\div1$",
      "$\\frac{11}{12}+(\\frac{1}{2}\\times\\frac{5}{6})$",
      "$\\frac{15}{17}\\times(2^{0}-1)$"
    ],
    "correctAnswer": 3,
    "explanation": "Whole numbers are {0, 1, 2, 3, ...}. Let's evaluate each option:\n\n* **Option 1:** $\\frac{15}{16}-\\frac{3}{4} = \\frac{15}{16}-\\frac{12}{16} = \\frac{3}{16}$. Not a whole number.\n* **Option 2:** $\\frac{2}{5}\\div1 = \\frac{2}{5}$. Not a whole number.\n* **Option 3:** $\\frac{11}{12}+(\\frac{1}{2}\\times\\frac{5}{6}) = \\frac{11}{12}+\\frac{5}{12} = \\frac{16}{12} = \\frac{4}{3}$. Not a whole number.\n* **Option 4:** $\\frac{15}{17}\\times(2^{0}-1) = \\frac{15}{17}\\times(1-1) = \\frac{15}{17}\\times 0 = 0$. Zero **is** a whole number."
  },
  {
    "id": 18,
    "question": "If the radius and height of cylinder are r and h respectively, then volume of the cylinder (in cubic units) is (TSTET 08 Jan 2025)",
    "options": [
      "$\\pi r^{2}h$",
      "$\\pi r^{2}h^{2}$",
      "$\\frac{1}{2}\\pi r^{2}h$",
      "$\\frac{1}{3}\\pi r^{2}h$"
    ],
    "correctAnswer": 0,
    "explanation": "The volume of a cylinder is calculated by multiplying the area of its circular base by its height.\n* The radius of the circular base is 'r'.\n* The area of the circular base is $A = \\pi r^2$.\n* The height of the cylinder is 'h'.\n* Volume (V) = Area of base $\\times$ Height\n* $V = (\\pi r^2) \\times h = \\pi r^2h$."
  },
  {
    "id": 19,
    "question": "If a number is multiplied by 8 and subtracted 16 from the product gives six times the number itself. Then the number is (TSTET 08 Jan 2025)",
    "options": [
      "9",
      "8",
      "6",
      "7"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: **Translate the problem into an algebraic equation.**\nLet the number be 'x'.\n* 'a number is multiplied by 8': $8x$\n* 'subtracted 16 from the product': $8x - 16$\n* 'gives six times the number itself': $= 6x$\nSo, the equation is: $8x - 16 = 6x$.\n\n Step 2: **Solve the equation for x.**\nSubtract 6x from both sides:\n$8x - 6x - 16 = 0$\n$2x - 16 = 0$\nAdd 16 to both sides:\n$2x = 16$\nDivide by 2:\n$x = 8$.\nTherefore, the number is 8."
  },
  {
    "id": 20,
    "question": "If the supplementary angle of an angle is equal to itself, then the angle is (TSTET 08 Jan 2025)",
    "options": [
      "acute angle",
      "straight angle",
      "obtuse angle",
      "right angle"
    ],
    "correctAnswer": 3,
    "explanation": "Supplementary angles are two angles whose sum is 180°.\nLet the angle be 'x'.\nThe problem states that its supplementary angle is also 'x'.\nTherefore, we can set up the equation:\n$x + x = 180^{\\circ}$\n$2x = 180^{\\circ}$\n$x = \\frac{180^{\\circ}}{2}$\n$x = 90^{\\circ}$\nAn angle that measures 90° is called a **right angle**."
  },
  {
    "id": 21,
    "question": "The number of prime numbers between 51 and 90 are (TSTET 08 Jan 2025)",
    "options": [
      "10",
      "7",
      "9",
      "8"
    ],
    "correctAnswer": 2,
    "explanation": "A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. Let's list the prime numbers in the given range:\n* Between 51 and 60: **53, 59**\n* Between 61 and 70: **61, 67**\n* Between 71 and 80: **71, 73, 79**\n* Between 81 and 90: **83, 89**\n\nCounting the numbers in the list: 53, 59, 61, 67, 71, 73, 79, 83, 89.\nThere are a total of **9** prime numbers between 51 and 90.\n\n"
  },
  {
    "id": 22,
    "question": "The number of vertices in triangular prism are (TSTET 08 Jan 2025)",
    "options": [
      "4",
      "6",
      "9",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "A triangular prism is a three-dimensional shape with two identical and parallel triangular bases, and three rectangular faces connecting the corresponding sides of the bases.\nA vertex is a corner where edges meet.\n* The top triangular base has 3 vertices.\n* The bottom triangular base has 3 vertices.\nTotal number of vertices = $3 + 3 = 6$."
  },
  {
    "id": 23,
    "question": "The number of points on a straight line are (TSTET 08 Jan 2025)",
    "options": [
      "one",
      "zero",
      "two",
      "infinite"
    ],
    "correctAnswer": 3,
    "explanation": "By definition in geometry, a straight line is a collection of points that extends endlessly in two opposite directions. Between any two points on a line, another point can always be found. This means a line is composed of an **infinite** number of points."
  },
  {
    "id": 24,
    "question": "The number of even divisors of 100 are (TSTET 08 Jan 2025)",
    "options": [
      "5",
      "8",
      "7",
      "6"
    ],
    "correctAnswer": 3,
    "explanation": " Step 1: **Find all the divisors of 100.**\nThe divisors (or factors) of 100 are the numbers that divide it evenly.\nDivisors: 1, 2, 4, 5, 10, 20, 25, 50, 100.\n\n Step 2: **Identify the even divisors from the list.**\nAn even number is any integer that is exactly divisible by 2.\nEven divisors: 2, 4, 10, 20, 50, 100.\n\n Step 3: **Count the even divisors.**\nThere are **6** even divisors.\n\n**Alternate Method (using prime factorization):**\nPrime factorization of 100 is $2^2 \\times 5^2$. A divisor is even if it has at least one factor of 2. The powers of 2 can be $2^1$ or $2^2$ (2 choices). The powers of 5 can be $5^0, 5^1,$ or $5^2$ (3 choices). Total even divisors = $2 \\times 3 = 6$."
  },
  {
    "id": 25,
    "question": "The academic standard that can be assessed through the problem \"Show 5/2 on number line\" is: (TSTET 08 Jan 2025)",
    "options": [
      "Problem solving",
      "Reasoning proof",
      "Communication",
      "Representation - visualisation"
    ],
    "correctAnswer": 3,
    "explanation": "This task requires the student to translate an abstract mathematical concept (the fraction 5/2) into a concrete, visual form (a point on a number line). This process is the core of the academic standard of **Representation and Visualisation**. The student must represent the number system as a line and visualize the position of 2.5 relative to other integers. While it involves some problem-solving, the primary skill assessed is representation."
  },
  {
    "id": 26,
    "question": "The teaching learning material that is most suitable to explain the concept of \"place value\" among the following is: (TSTET 08 Jan 2025)",
    "options": [
      "Fractions Disc",
      "Currency notes of 1 rupee, 10 rupees, 100 rupees",
      "Number chart",
      "Geo board"
    ],
    "correctAnswer": 1,
    "explanation": "**Currency notes** are highly effective for teaching place value because they provide a concrete and relatable model. Students can physically see and manipulate the items to understand that ten 1-rupee notes are equivalent to one 10-rupee note, and ten 10-rupee notes are equivalent to one 100-rupee note. This directly illustrates the base-10 system and the value of a digit based on its position (ones, tens, hundreds)."
  },
  {
    "id": 27,
    "question": "Identify the objectives of teaching mathematics at primary level among the following.\nA) Introducing Mathematical Language and Symbols\nB) Inculcating interest in mathematics among students\nC) Developing creativity in students\nD) Introducing basic concepts of Algebra\n (TSTET 08 Jan 2025)",
    "options": [
      "A, B & C only",
      "A, C & D only",
      "A, B & D only",
      "A, B, C, D"
    ],
    "correctAnswer": 0,
    "explanation": "At the primary level, the focus is on building a strong foundation and a positive attitude.\n* **A) Introducing Mathematical Language and Symbols:** This is essential (e.g., teaching +, -, ×, ÷, =).\n* **B) Inculcating interest:** Creating enjoyment and curiosity is crucial for future learning.\n* **C) Developing creativity:** Encouraging multiple ways to think about and solve problems is a key goal.\n* **D) Introducing basic concepts of Algebra:** Formal algebra, with its abstract concepts and variables, is generally introduced at the upper-primary or middle school level, not at the primary stage.\nTherefore, the appropriate objectives for the primary level are A, B, and C."
  },
  {
    "id": 28,
    "question": "Identify the statements that are related to formative evaluation among the following.\nA) Assessment will be conducted for learning.\nB) Gives feedback to teacher on learning of students.\nC) Conducted as part of teaching learning process.\nD) Used for awarding grades to students at the end of the year.\n (TSTET 08 Jan 2025)",
    "options": [
      "A, B & C only",
      "A, C & D only",
      "B, C & D only",
      "A, B, C & D"
    ],
    "correctAnswer": 0,
    "explanation": "**Formative evaluation** is an ongoing assessment process that monitors learning and provides feedback to improve instruction and student understanding. It is 'assessment **for** learning'.\n* **A, B, and C** all describe key aspects of formative evaluation: it's for learning, provides feedback, and is integrated into the teaching process.\n**Summative evaluation** is an assessment that evaluates student learning at the end of an instructional period. It is 'assessment **of** learning'.\n* **D** describes summative evaluation, as its purpose is to assign a final grade.\nTherefore, the statements related to formative evaluation are A, B, and C."
  },
  {
    "id": 29,
    "question": "Observe the following pairs related to \"Mathematicians and their contributions\":\nA) Aryabhatta: Developed tables related to 'sine'\nB) Bhaskara II: Discovered π=3.1255\nC) Bramhagupta: Authored the book \"DATA\"\nD) Euclid: Developed theories & postulates related to geometry\n (TSTET 08 Jan 2025)",
    "options": [
      "A, B & C only",
      "B, C & D only",
      "A, B & D only",
      "A, C & D only"
    ],
    "correctAnswer": 2,
    "explanation": "Let's analyze each pair:\n* **A) Aryabhatta:** Correct. He made significant contributions to trigonometry, including creating early sine tables.\n* **B) Bhaskara II:** Correct. He worked on approximations of π and made vast contributions to mathematics. The value is one such historical approximation.\n* **C) Brahmagupta:** Incorrect. The book \"Data\" was written by the Greek mathematician **Euclid**. Brahmagupta's major work was the \"Brāhmasphuṭasiddhānta\".\n* **D) Euclid:** Correct. Known as the 'Father of Geometry', his work \"Elements\" laid the foundation for geometry with its definitions, postulates, and theorems.\nTherefore, the correct pairs are A, B, and D."
  },
  {
    "id": "31",
    "question": "The sum and difference of LCM and HCF of two numbers are 48 and 36 respectively. The product of the two numbers is (TSTET 09 Jan 2025)",
    "options": [
      "236",
      "252",
      "272",
      "264"
    ],
    "correctAnswer": 1,
    "explanation": "Let the LCM be L and the HCF be H.\n\n Step 1: Set up the equations based on the given information.\nEquation 1: $L + H = 48$\nEquation 2: $L - H = 36$\n\n Step 2: Solve the system of linear equations to find the values of L and H.\nAdd Equation 1 and Equation 2:\n$(L + H) + (L - H) = 48 + 36$\n$2L = 84$\n$L = 42$\n\nSubstitute the value of L back into Equation 1:\n$42 + H = 48$\n$H = 48 - 42$\n$H = 6$\n\n Step 3: Use the property that the product of two numbers is equal to the product of their LCM and HCF.\nProduct of the two numbers = $L \\times H$\nProduct = $42 \\times 6 = 252$."
  },
  {
    "id": "32",
    "question": "The product of face values of 5 and 6 in the number 2856.34 is (TSTET 09 Jan 2025)",
    "options": [
      "30",
      "10",
      "300",
      "100"
    ],
    "correctAnswer": 0,
    "explanation": "The 'face value' of a digit in a number is the value of the digit itself, regardless of its position in the number.\n\n Step 1: Identify the face value of the digit 5 in the number 2856.34.\nThe face value of 5 is 5.\n\n Step 2: Identify the face value of the digit 6 in the number 2856.34.\nThe face value of 6 is 6.\n\n Step 3: Calculate the product of these face values.\nProduct = $5 \\times 6 = 30$."
  },
  {
    "id": "33",
    "question": "A tank can hold 500 litres of water. At present, it is only 40% full. The number of litres of more water required to fill up to 60% of the tank is (TSTET 09 Jan 2025)",
    "options": [
      "10",
      "20",
      "100",
      "300"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: Calculate the amount of water currently in the tank.\nCurrent water = 40% of 500 litres = $\\frac{40}{100} \\times 500 = 200$ litres.\n\n Step 2: Calculate the target amount of water in the tank.\nTarget water = 60% of 500 litres = $\\frac{60}{100} \\times 500 = 300$ litres.\n\n Step 3: Find the difference between the target amount and the current amount.\nWater required = Target water - Current water = $300 - 200 = 100$ litres.\n\nAlternatively:\nThe required increase in water is $60\\% - 40\\% = 20\\%$.\nWater required = 20% of 500 litres = $\\frac{20}{100} \\times 500 = 100$ litres."
  },
  {
    "id": "34",
    "question": "The mean age of 10 persons is 56 years. If the total age of 8 persons of them is 472 years, then the mean age of the remaining two persons (in years) is (TSTET 09 Jan 2025)",
    "options": [
      "55",
      "52.5",
      "88",
      "44"
    ],
    "correctAnswer": 3,
    "explanation": " Step 1: Calculate the total age of all 10 persons.\nTotal age of 10 persons = Mean age $\\times$ Number of persons = $56 \\times 10 = 560$ years.\n\n Step 2: Find the total age of the remaining two persons.\nGiven the total age of 8 persons is 472 years.\nTotal age of remaining 2 persons = Total age of 10 persons - Total age of 8 persons = $560 - 472 = 88$ years.\n\n Step 3: Calculate the mean age of the remaining two persons.\nMean age = Total age of remaining persons / Number of remaining persons = $\\frac{88}{2} = 44$ years."
  },
  {
    "id": "35",
    "question": "The perimeter of a square and a rectangle are equal. If the perimeter of that square is 36cm and breadth of the rectangle is 7cm, then the area of that rectangle (in sq. cm) is (TSTET 09 Jan 2025)",
    "options": [
      "55",
      "88",
      "77",
      "66"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: Use the given information about the square.\nPerimeter of square = 36 cm.\n\n Step 2: Determine the perimeter of the rectangle.\nGiven that the perimeters are equal, the perimeter of the rectangle is also 36 cm.\n\n Step 3: Find the length of the rectangle.\nThe formula for the perimeter of a rectangle is $P = 2(l + b)$, where 'l' is the length and 'b' is the breadth.\nGiven: P = 36 cm and b = 7 cm.\n$36 = 2(l + 7)$\n$18 = l + 7$\n$l = 18 - 7 = 11$ cm.\n\n Step 4: Calculate the area of the rectangle.\nThe formula for the area of a rectangle is $A = l \\times b$.\n$A = 11 \\times 7 = 77$ sq. cm."
  },
  {
    "id": "36",
    "question": "$3\\frac{1}{3} \\div 1\\frac{4}{6} = $ (TSTET 09 Jan 2025)",
    "options": [
      "$\\frac{5}{6}$",
      "2",
      "$4\\frac{5}{6}$",
      "3"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: Convert the mixed fractions into improper fractions.\n$3\\frac{1}{3} = \\frac{(3 \\times 3) + 1}{3} = \\frac{10}{3}$\n$1\\frac{4}{6} = 1\\frac{2}{3} = \\frac{(1 \\times 3) + 2}{3} = \\frac{5}{3}$\n\n Step 2: Perform the division. To divide by a fraction, multiply by its reciprocal.\n$\\frac{10}{3} \\div \\frac{5}{3} = \\frac{10}{3} \\times \\frac{3}{5}$\n\n Step 3: Simplify the expression by canceling common factors.\n$\\frac{10 \\times 3}{3 \\times 5} = \\frac{10}{5} = 2$."
  },
  {
    "id": "37",
    "question": "The equation among the following is (TSTET 09 Jan 2025)",
    "options": [
      "$p-4 < 15$",
      "$3x > 15$",
      "$z = 5$",
      "$7x+1 < 4y-3$"
    ],
    "correctAnswer": 2,
    "explanation": "An **equation** is a mathematical statement that asserts the equality of two expressions. It is characterized by the presence of an equals sign (=).\nAn **inequality** is a statement that compares two expressions that are not equal, using symbols like < (less than), > (greater than), ≤ (less than or equal to), or ≥ (greater than or equal to).\n\n- Option 1, $p-4 < 15$, is an inequality.\n- Option 2, $3x > 15$, is an inequality.\n- Option 3, $z=5$, is an equation because it uses an equals sign.\n- Option 4, $7x+1 < 4y-3$, is an inequality."
  },
  {
    "id": "38",
    "question": "Padma purchased a biscuit packet on 22nd February 2013. It is mentioned on the biscuit packet that it should be consumed within 180 days from the manufacturing date i.e., 31.08.2012. Then, the date by which the biscuit packet is to be consumed is (TSTET 09 Jan 2025)",
    "options": [
      "28.02.2012",
      "21.08.2013",
      "04.03.2013",
      "27.02.2013"
    ],
    "correctAnswer": 3,
    "explanation": "To find the expiry date, we need to add 180 days to the manufacturing date (31st August 2012).\n\n Step 1: Count the remaining days in August 2012.\nAugust has 31 days. Remaining days = $31 - 31 = 0$.\n\n Step 2: Add the number of days in the subsequent months until we reach 180.\n- September 2012: 30 days (Total: 30)\n- October 2012: 31 days (Total: 30+31 = 61)\n- November 2012: 30 days (Total: 61+30 = 91)\n- December 2012: 31 days (Total: 91+31 = 122)\n- January 2013: 31 days (Total: 122+31 = 153)\n\n Step 3: Calculate the remaining days needed to reach 180.\nRemaining days = $180 - 153 = 27$ days.\n\n Step 4: These 27 days will fall in the next month, which is February 2013.\nTherefore, the expiry date is the 27th of February 2013."
  },
  {
    "id": "39",
    "question": "If $(\\frac{x^{2}-x-20}{x+4})=0$, $(x\\ne-4)$ then $x=$ (TSTET 09 Jan 2025)",
    "options": [
      "-5",
      "4",
      "-2",
      "5"
    ],
    "correctAnswer": 3,
    "explanation": "For a fractional expression to be equal to zero, the numerator must be zero, and the denominator must be non-zero.\n\n Step 1: Set the numerator equal to zero.\n$x^{2}-x-20 = 0$\n\n Step 2: Solve the quadratic equation. We can solve this by factoring. We are looking for two numbers that multiply to -20 and add up to -1. These numbers are -5 and +4.\n$(x-5)(x+4) = 0$\n\n Step 3: Find the possible values for x.\nThis gives two possible solutions: $x-5=0$ or $x+4=0$.\nSo, $x=5$ or $x=-4$.\n\n Step 4: Apply the given condition.\nThe problem states that $x \\ne -4$. Therefore, we must discard the solution $x=-4$.\n\nThe only valid solution is $x=5$."
  },
  {
    "id": "40",
    "question": "If one number among the following is divided by 11, 12 and 15, every time it leaves a remainder 3, then that number is (TSTET 09 Jan 2025)",
    "options": [
      "2646",
      "1323",
      "1980",
      "1559"
    ],
    "correctAnswer": 1,
    "explanation": "A number that leaves a remainder of 3 when divided by 11, 12, and 15 must be of the form $N = k \\times \\text{LCM}(11, 12, 15) + 3$, where k is an integer.\n\n Step 1: Find the LCM (Least Common Multiple) of 11, 12, and 15.\nPrime factorization:\n$11 = 11$\n$12 = 2^2 \\times 3$\n$15 = 3 \\times 5$\nLCM = $2^2 \\times 3 \\times 5 \\times 11 = 4 \\times 3 \\times 5 \\times 11 = 660$.\n\n Step 2: The number N must be in the form $660k + 3$.\nWe can test values of k or check the options.\nLet's check the options by subtracting 3 and seeing if the result is divisible by 660.\n- $1323 - 3 = 1320$. Is 1320 divisible by 660? Yes, $1320 = 2 \\times 660$.\n\nSo, 1323 is the correct number. It fits the form for k=2."
  },
  {
    "id": "41",
    "question": "In the year 2022, the price of a Gas Stove was ₹4480. In the year 2023, that stove price is ₹5152. What is the percentage of increase in the price of the Gas Stove per annum? (TSTET 09 Jan 2025)",
    "options": [
      "15",
      "10",
      "25",
      "20"
    ],
    "correctAnswer": 0,
    "explanation": "The formula for percentage increase is: $\\frac{\\text{New Value} - \\text{Original Value}}{\\text{Original Value}} \\times 100$.\n\n Step 1: Find the increase in price.\nIncrease = New Price - Original Price = $5152 - 4480 = 672$.\n\n Step 2: Calculate the percentage increase.\nPercentage Increase = $\\frac{\\text{Increase}}{\\text{Original Price}} \\times 100$\nPercentage Increase = $\\frac{672}{4480} \\times 100$\n\n Step 3: Simplify the fraction.\n$\\frac{672}{4480} = \\frac{672 \\div 672}{4480 \\div 672} = \\frac{1}{6.66...}$ which is not easy. Let's simplify differently.\n$\\frac{672}{4480} = \\frac{67.2}{448}$. We can see $10\\%$ of 4480 is 448. $5\\%$ is 224. $448+224 = 672$. So the increase is $15\\%$.\nCalculation: $\\frac{672}{4480} = 0.15$.\n\nPercentage Increase = $0.15 \\times 100 = 15\\%$."
  },
  {
    "id": "42",
    "question": "The complementary angle of the supplementary angle of an angle is 54°. What is the measure of that angle? (TSTET 09 Jan 2025)",
    "options": [
      "54°",
      "144°",
      "36°",
      "126°"
    ],
    "correctAnswer": 1,
    "explanation": "Let the unknown angle be 'x'.\n\n Step 1: Find the supplementary angle of x.\nSupplementary angles add up to 180°. So, the supplementary angle is $(180 - x)$.\n\n Step 2: Find the complementary angle of the result from  Step 1.\nComplementary angles add up to 90°. The complementary angle of $(180 - x)$ is $90 - (180 - x)$.\n\n Step 3: Set this expression equal to the given value, 54°.\n$90 - (180 - x) = 54$\n\n Step 4: Solve the equation for x.\n$90 - 180 + x = 54$\n$-90 + x = 54$\n$x = 54 + 90$\n$x = 144°$."
  },
  {
    "id": "43",
    "question": "In a rose garden, 15 rose plants have 15 flowers each. If Vani plucked 1/5th part of them and decorated her room. The remaining rose flowers in the garden is (TSTET 09 Jan 2025)",
    "options": [
      "200",
      "45",
      "180",
      "90"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: Calculate the total number of flowers in the garden.\nTotal flowers = Number of plants $\\times$ Flowers per plant = $15 \\times 15 = 225$.\n\n Step 2: Calculate the number of flowers Vani plucked.\nFlowers plucked = $\\frac{1}{5}$ of total flowers = $\\frac{1}{5} \\times 225 = 45$.\n\n Step 3: Calculate the number of flowers remaining in the garden.\nRemaining flowers = Total flowers - Flowers plucked = $225 - 45 = 180$.\n\nAlternatively:\nIf $\\frac{1}{5}$ of the flowers were plucked, then $1 - \\frac{1}{5} = \\frac{4}{5}$ of the flowers remain.\nRemaining flowers = $\\frac{4}{5} \\times 225 = 4 \\times 45 = 180$."
  },
  {
    "id": "44",
    "question": "When the number of the faces of a cuboid is subtracted from the sum of its vertices and edges, the value is (TSTET 09 Jan 2025)",
    "options": [
      "10",
      "12",
      "8",
      "14"
    ],
    "correctAnswer": 3,
    "explanation": "For any cuboid, we have the following properties:\n- Number of Vertices (V) = 8\n- Number of Edges (E) = 12\n- Number of Faces (F) = 6\n\nThe question asks for the value of the expression: (Sum of vertices and edges) - (Number of faces).\nExpression = $(V + E) - F$\n\nSubstitute the values:\nExpression = $(8 + 12) - 6$\nExpression = $20 - 6 = 14$."
  },
  {
    "id": "45",
    "question": "How many weeks and days are there in a leap year? (TSTET 09 Jan 2025)",
    "options": [
      "53 weeks and 3 days",
      "52 weeks and 3 days",
      "53 weeks and 2 days",
      "52 weeks and 2 days"
    ],
    "correctAnswer": 3,
    "explanation": " Step 1: Know the number of days in a leap year.\nA leap year has 366 days.\n\n Step 2: Know the number of days in a week.\nThere are 7 days in a week.\n\n Step 3: Divide the total number of days by the number of days in a week to find the number of weeks and remaining days.\n$366 \\div 7$\nThe quotient gives the number of full weeks, and the remainder gives the extra days.\n$366 = (52 \\times 7) + 2$\n$366 = 364 + 2$\n\nTherefore, a leap year has 52 weeks and 2 days."
  },
  {
    "id": "46",
    "question": "The mode of the numbers 9, 6, 4, 6, 3, 4, 3, 1, 5, 2, 1, 3 is: (TSTET 09 Jan 2025)",
    "options": [
      "4",
      "6",
      "3",
      "1"
    ],
    "correctAnswer": 2,
    "explanation": "The mode of a set of data is the value that appears most frequently.\n\n Step 1: List the numbers in the data set.\n{9, 6, 4, 6, 3, 4, 3, 1, 5, 2, 1, 3}\n\n Step 2: Count the frequency of each number.\n- 1 appears 2 times\n- 2 appears 1 time\n- 3 appears 3 times\n- 4 appears 2 times\n- 5 appears 1 time\n- 6 appears 2 times\n- 9 appears 1 time\n\n Step 3: Identify the number with the highest frequency.\nThe number 3 appears most often (3 times). Therefore, the mode is 3."
  },
  {
    "id": "47",
    "question": "The rational number that lies between $\\frac{5}{9}$ and $\\frac{6}{7}$ from the following is (TSTET 09 Jan 2025)",
    "options": [
      "$\\frac{15}{16}$",
      "$\\frac{2}{5}$",
      "$\\frac{13}{16}$",
      "$\\frac{15}{17}$"
    ],
    "correctAnswer": 2,
    "explanation": "To compare the fractions, it's easiest to convert them to decimals.\n\n Step 1: Convert the boundary fractions to decimals.\n$\\frac{5}{9} = 5 \\div 9 \\approx 0.555...$\n$\\frac{6}{7} = 6 \\div 7 \\approx 0.857...$\nWe are looking for a number between 0.555 and 0.857.\n\n Step 2: Convert the options to decimals.\n- $\\frac{15}{16} = 15 \\div 16 = 0.9375$ (This is greater than 0.857)\n- $\\frac{2}{5} = 2 \\div 5 = 0.4$ (This is less than 0.555)\n- $\\frac{13}{16} = 13 \\div 16 = 0.8125$ (This is between 0.555 and 0.857)\n- $\\frac{15}{17} = 15 \\div 17 \\approx 0.882...$ (This is greater than 0.857)\n\nThe only option that falls within the required range is $\\frac{13}{16}$."
  },
  {
    "id": "48",
    "question": "The number of cubes with edge 3cm that can be made from a cuboid of dimensions $15cm \\times 12cm \\times 9cm$ are (TSTET 09 Jan 2025)",
    "options": [
      "48",
      "24",
      "28",
      "60"
    ],
    "correctAnswer": 3,
    "explanation": "To find the number of smaller cubes that can fit into a larger cuboid, we divide the volume of the cuboid by the volume of one cube.\n\n Step 1: Calculate the volume of the cuboid.\nVolume of cuboid = length $\\times$ width $\\times$ height\nVolume = $15 \\text{ cm} \\times 12 \\text{ cm} \\times 9 \\text{ cm} = 1620 \\text{ cm}^3$.\n\n Step 2: Calculate the volume of one small cube.\nVolume of cube = edge$^3$\nVolume = $(3 \\text{ cm})^3 = 27 \\text{ cm}^3$.\n\n Step 3: Divide the volume of the cuboid by the volume of the cube.\nNumber of cubes = $\\frac{\\text{Volume of cuboid}}{\\text{Volume of cube}} = \\frac{1620}{27} = 60$.\n\nAlternatively, calculate how many cubes fit along each dimension:\nAlong 15 cm side: $15 / 3 = 5$ cubes\nAlong 12 cm side: $12 / 3 = 4$ cubes\nAlong 9 cm side: $9 / 3 = 3$ cubes\nTotal number of cubes = $5 \\times 4 \\times 3 = 60$."
  },
  {
    "id": "49",
    "question": "The difference between 8563 and the number obtained by reversing its digits is (TSTET 09 Jan 2025)",
    "options": [
      "4905",
      "5115",
      "4995",
      "5015"
    ],
    "correctAnswer": 0,
    "explanation": " Step 1: Identify the original number.\nOriginal number = 8563.\n\n Step 2: Find the number obtained by reversing the digits.\nReversed number = 3658.\n\n Step 3: Calculate the difference between the two numbers.\nDifference = $8563 - 3658$\n   8563\n-  3658\n-------\n   4905\n\nThe difference is 4905."
  },
  {
    "id": "50",
    "question": "The number of $\\frac{1}{16}$ in $\\frac{1}{2}$ is (TSTET 09 Jan 2025)",
    "options": [
      "4",
      "8",
      "16",
      "2"
    ],
    "correctAnswer": 1,
    "explanation": "This question asks 'How many times does $\\frac{1}{16}$ go into $\\frac{1}{2}$?', which is a division problem.\n\nWe need to calculate: $\\frac{1}{2} \\div \\frac{1}{16}$\n\nTo divide by a fraction, you multiply by its reciprocal.\nThe reciprocal of $\\frac{1}{16}$ is $\\frac{16}{1}$.\n\nSo, the calculation becomes: $\\frac{1}{2} \\times \\frac{16}{1} = \\frac{16}{2} = 8$."
  },
  {
    "id": "51",
    "question": "If $\\sqrt{x}=28$, then $\\sqrt{\\frac{25x}{49}} =$ (TSTET 09 Jan 2025)",
    "options": [
      "$20\\sqrt{7}$",
      "$\\frac{5}{7}$",
      "20",
      "14"
    ],
    "correctAnswer": 2,
    "explanation": "There are two ways to solve this problem.\n\nMethod 1: Substitute $\\sqrt{x}$ directly.\n Step 1: Rewrite the expression using the properties of square roots.\n$\\sqrt{\\frac{25x}{49}} = \\frac{\\sqrt{25} \\times \\sqrt{x}}{\\sqrt{49}}$\n\n Step 2: Substitute the known values.\nWe know $\\sqrt{25} = 5$, $\\sqrt{49} = 7$, and it is given that $\\sqrt{x} = 28$.\n$\\frac{5 \\times 28}{7}$\n\n Step 3: Simplify the expression.\n$5 \\times (\\frac{28}{7}) = 5 \\times 4 = 20$.\n\nMethod 2: First find x.\n Step 1: Solve for x.\nGiven $\\sqrt{x} = 28$. Square both sides: $x = 28^2 = 784$.\n\n Step 2: Substitute x into the expression.\n$\\sqrt{\\frac{25 \\times 784}{49}}$\n\n Step 3: Simplify.\n$\\sqrt{25 \\times (\\frac{784}{49})} = \\sqrt{25 \\times 16} = \\sqrt{400} = 20$."
  },
  {
    "id": "52",
    "question": "Which of the following is NOT twin primes? (TSTET 09 Jan 2025)",
    "options": [
      "(41, 43)",
      "(29, 31)",
      "(87, 89)",
      "(101, 103)"
    ],
    "correctAnswer": 2,
    "explanation": "**Twin primes** are a pair of prime numbers that have a difference of 2.\n\n Step 1: Analyze each pair.\n- **(41, 43):** Both 41 and 43 are prime numbers. Their difference is $43 - 41 = 2$. This is a twin prime pair.\n- **(29, 31):** Both 29 and 31 are prime numbers. Their difference is $31 - 29 = 2$. This is a twin prime pair.\n- **(87, 89):** We need to check if both numbers are prime. For 87, the sum of its digits is $8 + 7 = 15$, which is divisible by 3. Therefore, 87 is divisible by 3 ($87 = 3 \\times 29$) and is not a prime number. Since one of the numbers is not prime, this is not a twin prime pair.\n- **(101, 103):** Both 101 and 103 are prime numbers. Their difference is $103 - 101 = 2$. This is a twin prime pair.\n\nTherefore, the pair (87, 89) is NOT a twin prime pair."
  },
  {
    "id": "53",
    "question": "Write the following numbers in ascending order: 9.0901, 9.9001, 9.0991, 0.9991, 9.9991 (TSTET 09 Jan 2025)",
    "options": [
      "0.9991, 9.0991, 9.0901, 9.9001, 9.9991",
      "0.9991, 9.0901, 9.0991, 9.9001, 9.9991",
      "9.9991, 9.0901, 9.0991, 9.9001, 0.9991",
      "9.9001, 0.9991, 9.0901, 9.0991, 9.9991"
    ],
    "correctAnswer": 1,
    "explanation": "**Ascending order** means arranging numbers from smallest to largest.\n\n Step 1: Compare the integer parts of the numbers. The number 0.9991 has an integer part of 0, while all others have an integer part of 9. So, 0.9991 is the smallest.\n\n Step 2: Compare the remaining numbers: {9.0901, 9.9001, 9.0991, 9.9991}. Look at the first decimal place.\n- Two numbers have '0' in the first decimal place: 9.0901 and 9.0991. Comparing their second decimal place, they are both '9'. Comparing their third decimal place, '0' in 9.0901 is smaller than '9' in 9.0991. So, $9.0901 < 9.0991$.\n- Two numbers have '9' in the first decimal place: 9.9001 and 9.9991. Comparing their second decimal place, '0' in 9.9001 is smaller than '9' in 9.9991. So, $9.9001 < 9.9991$.\n\n Step 3: Combine all comparisons to form the final order.\n$0.9991 < 9.0901 < 9.0991 < 9.9001 < 9.9991$."
  },
  {
    "id": "54",
    "question": "$957^2 - 643^2 =$ (TSTET 09 Jan 2025)",
    "options": [
      "502400",
      "98596",
      "522400",
      "198596"
    ],
    "correctAnswer": 0,
    "explanation": "This problem uses the algebraic identity for the difference of squares: $a^2 - b^2 = (a+b)(a-b)$.\n\n Step 1: Identify 'a' and 'b'.\nLet $a = 957$ and $b = 643$.\n\n Step 2: Calculate $(a+b)$.\n$a+b = 957 + 643 = 1600$.\n\n Step 3: Calculate $(a-b)$.\n$a-b = 957 - 643 = 314$.\n\n Step 4: Multiply the results from  Step 2 and  Step 3.\n$(a+b)(a-b) = 1600 \\times 314$\n$1600 \\times 314 = 16 \\times 100 \\times 314 = 16 \\times 31400$\n$16 \\times 314 = 5024$\nSo, the result is $502400$."
  },
  {
    "id": "55",
    "question": "\"The reason why flowers and leaves in nature are beautiful because of their symmetrical form.\" This statement reflects that the nature of mathematics is: (TSTET 09 Jan 2025)",
    "options": [
      "Content based on sequential order",
      "Accuracy",
      "Aesthetic feature",
      "Verification nature"
    ],
    "correctAnswer": 2,
    "explanation": "The statement connects a mathematical concept, **symmetry**, with the concept of **beauty** found in nature. This appreciation for pattern, order, and form is related to aesthetics.\n- **Aesthetic feature:** Mathematics is often seen as having its own beauty, finding elegance in proofs and patterns. The link between symmetry and beauty is a classic example of the aesthetic value of mathematics.\n- The other options are less relevant. While accuracy and sequential order are parts of mathematics, this statement specifically highlights the connection to beauty, which is an aesthetic consideration."
  },
  {
    "id": "56",
    "question": "If the process of solving a problem proceeds from conclusion to given data, then the teaching method is: (TSTET 09 Jan 2025)",
    "options": [
      "Inductive method",
      "Analytic method",
      "Synthetic method",
      "Laboratory method"
    ],
    "correctAnswer": 1,
    "explanation": "- **Analytic method:** This method starts with what is to be found or proved (the conclusion) and works backward,  Step-by- Step, to connect it to the given information (the data). It is a process of breaking down the problem from unknown to known.\n- **Synthetic method:** This is the reverse of the analytic method. It starts with the known data and proceeds logically to the unknown conclusion.\n- **Inductive method:** This method involves observing specific examples and deriving a general rule or conclusion.\n\nSince the described process is moving from the conclusion to the data, it is the **Analytic method**."
  },
  {
    "id": "57",
    "question": "Annual examination is an example of this evaluation: (TSTET 09 Jan 2025)",
    "options": [
      "Diagnostic evaluation",
      "Comprehensive evaluation",
      "Formative evaluation",
      "Summative evaluation"
    ],
    "correctAnswer": 3,
    "explanation": "Types of evaluation serve different purposes:\n- **Summative evaluation:** This is conducted at the end of a course or instructional period (like a semester or year) to assess the overall achievement and learning outcomes. It 'sums up' the learning. Annual examinations are a prime example.\n- **Formative evaluation:** This is an ongoing assessment during the learning process to monitor progress and provide feedback for improvement. Examples include quizzes, homework, and class discussions.\n- **Diagnostic evaluation:** This is used before instruction begins to identify students' pre-existing knowledge, skills, and misconceptions.\n\nAn annual exam's primary purpose is to provide a final summary of learning, making it a **Summative evaluation**."
  },
  {
    "id": "58",
    "question": "Among the following, identify which is/are NOT a role/s of a good mathematics teacher in classroom teaching:\nA) Acting as a facilitator for students' learning\nB) Allowing students to question critically, express freely and interact\nC) Giving priority to drilling only\nD) Being confined to textbooks alone (TSTET 09 Jan 2025)",
    "options": [
      "A & C only",
      "B, C & D only",
      "C & D only",
      "A, B, C & D"
    ],
    "correctAnswer": 2,
    "explanation": "Let's evaluate each statement in the context of modern teaching practices:\n- **A) Acting as a facilitator:** This is a key role of a good teacher, guiding students in their own learning process rather than just delivering information. This is a positive role.\n- **B) Allowing students to question critically...:** This promotes an engaging and effective learning environment. This is a positive role.\n- **C) Giving priority to drilling only:** While practice is important, focusing *only* on drilling and memorization neglects conceptual understanding and problem-solving skills. This is NOT the role of a good teacher.\n- **D) Being confined to textbooks alone:** A good teacher uses a variety of resources, real-world examples, and activities to enrich learning beyond the textbook. This is NOT the role of a good teacher.\n\nTherefore, the practices that are NOT roles of a good teacher are C and D."
  },
  {
    "id": "59",
    "question": "The syllabus related to 'fractions' which is earmarked for primary level is decided to be taught in Class 5 only, then this type of curriculum construction is: (TSTET 09 Jan 2025)",
    "options": [
      "Topical method",
      "Concentric method",
      "Spiral method",
      "Interdisciplinary method"
    ],
    "correctAnswer": 0,
    "explanation": "Different curriculum organization methods:\n- **Topical method:** A topic is taught in its entirety within a single grade level. Once completed, it is not revisited. The scenario described, where 'fractions' are taught completely in Class 5 only, is a perfect example of this.\n- **Spiral/Concentric method:** A topic is introduced at a simple level in an early grade and then revisited in subsequent grades with increasing depth and complexity. This is a more common approach for foundational topics like fractions.\n\nSince the entire topic is covered in one go in a single class, it is the **Topical method**."
  },
  {
    "id": "60",
    "question": "The  Step that involves 'testing previous knowledge' in period plan writing is: (TSTET 09 Jan 2025)",
    "options": [
      "Introductory activities",
      "Developmental activities",
      "Culminating activities",
      "Supervisory activities"
    ],
    "correctAnswer": 0,
    "explanation": "A standard lesson plan structure includes several phases:\n- **Introductory activities (Introduction/Anticipatory Set):** This is the beginning of the lesson. Its purpose is to capture students' interest, state the learning objectives, and activate their prior knowledge on the topic. Asking questions to test previous knowledge is a crucial part of this stage to build a bridge to the new content.\n- **Developmental activities (Instruction/Body):** This is the main part of the lesson where new concepts are taught, explained, and practiced.\n- **Culminating activities (Conclusion/Closure):** This phase is at the end of the lesson to summarize key points, check for understanding, and wrap up the topic.\n\nTherefore, testing previous knowledge belongs to the **Introductory activities**."
  },
  {
    "id": "61",
    "question": "By selling a book for ₹ 551, a shopkeeper gains 16%. To gain 20%, the selling price of the book should be (TSTET 10 Jan 2025)",
    "options": [
      "₹ 560",
      "₹ 565",
      "₹ 568",
      "₹ 570"
    ],
    "correctAnswer": 3,
    "explanation": "This problem involves calculating the cost price from a given selling price and profit percentage, and then finding a new selling price for a different profit percentage.\n\n** Step 1: Find the Cost Price (CP).**\nThe formula relating Selling Price (SP), Cost Price (CP), and Gain Percentage is: SP = CP × (1 + Gain % / 100).\nGiven: SP = ₹ 551, Gain % = 16%.\n₹ 551 = CP × (1 + 16 / 100)\n₹ 551 = CP × (116 / 100)\nCP = (₹ 551 × 100) / 116\nCP = ₹ 475\n\n** Step 2: Calculate the new Selling Price (SP) for a 20% gain.**\nNow use the calculated CP to find the new SP with a 20% gain.\nNew SP = CP × (1 + New Gain % / 100)\nNew SP = ₹ 475 × (1 + 20 / 100)\nNew SP = ₹ 475 × (120 / 100)\nNew SP = ₹ 475 × 1.2\nNew SP = ₹ 570\n\nTherefore, to gain 20%, the book should be sold for ₹ 570."
  },
  {
    "id": "62",
    "question": "Match the following. (TSTET 10 Jan 2025)\n**List-1**\nA) Complete angle\nB) Reflex angle\nC) Obtuse angle\nD) Straight angle\n**List-2**\ni) between 180° and 360°\nii) 180°\niii) 360°\niv) between 90° and 180°",
    "options": [
      "A-iv; B-ii; C-iii; D-i",
      "A-iii; B-i; C-iv; D-ii",
      "A-ii; B-iv; C-i; D-iii",
      "A-i; B-iii; C-ii; D-iv"
    ],
    "correctAnswer": 1,
    "explanation": "This question tests the definitions of different types of angles.\n\n** Step 1: Define each angle in List-1.**\n* **A) Complete angle:** An angle that measures exactly 360°.\n* **B) Reflex angle:** An angle that measures more than 180° but less than 360°.\n* **C) Obtuse angle:** An angle that measures more than 90° but less than 180°.\n* **D) Straight angle:** An angle that measures exactly 180°.\n\n** Step 2: Match the definitions with the descriptions in List-2.**\n* A) Complete angle (360°) matches with **(iii) 360°**.\n* B) Reflex angle (between 180° and 360°) matches with **(i) between 180° and 360°**.\n* C) Obtuse angle (between 90° and 180°) matches with **(iv) between 90° and 180°**.\n* D) Straight angle (180°) matches with **(ii) 180°**.\n\n** Step 3: Combine the matches.**\nThe correct combination is A-iii, B-i, C-iv, D-ii."
  },
  {
    "id": "63",
    "question": "Choose the correct statement/s related to integers from the following. (TSTET 10 Jan 2025)\nA) Every negative integer is less than zero.\nB) The average low temperature in Ladakh during December is 14°C below 0° C represents a negative integer.\nC) -12 is on the right side of -10 on the number line.",
    "options": [
      "A & B only",
      "B & C only",
      "A, B & C",
      "A & C only"
    ],
    "correctAnswer": 0,
    "explanation": "This question requires evaluating the truthfulness of three statements about integers.\n\n** Step 1: Analyze Statement A.**\n'Every negative integer is less than zero.' On a number line, all negative integers (..., -3, -2, -1) are located to the left of zero. Numbers to the left are always smaller. Thus, **Statement A is correct**.\n\n** Step 2: Analyze Statement B.**\n'The average low temperature in Ladakh during December is 14°C below 0° C represents a negative integer.' A value that is 'below zero' is represented by a negative number. Therefore, 14°C below 0°C is written as -14°C, which is a negative integer. Thus, **Statement B is correct**.\n\n** Step 3: Analyze Statement C.**\n'-12 is on the right side of -10 on the number line.' On a number line, as you move to the right, numbers increase in value. Since -12 is less than -10, it is located to the left of -10, not the right. Thus, **Statement C is incorrect**.\n\n** Step 4: Conclude.**\nOnly statements A and B are correct."
  },
  {
    "id": "64",
    "question": "The degree of the algebraic expression $5xy^{3}+6x^{5}+3x^{3}y^{3}$ is 'p', then $p^{(p-2)}$= (TSTET 10 Jan 2025)",
    "options": [
      "1296",
      "125",
      "16",
      "3"
    ],
    "correctAnswer": 0,
    "explanation": "The problem has two parts: first, find the degree of the polynomial, and second, evaluate an expression using that degree.\n\n** Step 1: Find the degree of the algebraic expression.**\nThe degree of a term is the sum of the exponents of its variables. The degree of the entire expression is the highest degree among all its terms.\n* Degree of the term $5xy^{3}$ is $1 + 3 = 4$.\n* Degree of the term $6x^{5}$ is $5$.\n* Degree of the term $3x^{3}y^{3}$ is $3 + 3 = 6$.\nThe highest degree is 6. So, the degree of the expression 'p' is 6.\n\n** Step 2: Evaluate the expression $p^{(p-2)}$**.\nSubstitute the value of p = 6 into the expression.\n$p^{(p-2)} = 6^{(6-2)} = 6^{4}$\n\n** Step 3: Calculate $6^{4}$.**\n$6^{4} = 6 \\times 6 \\times 6 \\times 6 = 36 \\times 36 = 1296$.\n\nThus, the value is 1296."
  },
  {
    "id": "65",
    "question": "A number is decreased by 15% becomes 782, then the number is (TSTET 10 Jan 2025)",
    "options": [
      "920",
      "680",
      "690",
      "930"
    ],
    "correctAnswer": 0,
    "explanation": "This is a problem about percentages. We need to find the original number when a percentage decrease and the final value are known.\n\n** Step 1: Set up the equation.**\nLet the original number be 'x'.\nWhen the number is decreased by 15%, the remaining percentage is 100% - 15% = 85%.\nSo, 85% of the original number is 782.\nThis can be written as: $0.85 \\times x = 782$ or $\\frac{85}{100} \\times x = 782$.\n\n** Step 2: Solve for x.**\n$x = \\frac{782}{0.85}$\nTo make the calculation easier, we can write:\n$x = \\frac{782 \\times 100}{85}$\nDivide 782 and 85 by their common factor, 17 (since $85 = 5 \\times 17$ and $782/17 = 46$).\n$x = \\frac{46 \\times 100}{5}$\n$x = 46 \\times 20$\n$x = 920$\n\nTherefore, the original number is 920."
  },
  {
    "id": "66",
    "question": "The father of Indian statistics is (TSTET 10 Jan 2025)",
    "options": [
      "Euclid",
      "Srinivasa Ramanujan",
      "P.C. Mahalanobis",
      "D.R. Kaprekar"
    ],
    "correctAnswer": 2,
    "explanation": "This is a general knowledge question related to the history of mathematics in India.\n\n* **Euclid** is known as the 'father of geometry' and was a Greek mathematician.\n* **Srinivasa Ramanujan** was a brilliant Indian mathematician known for his contributions to number theory.\n* **Prasanta Chandra Mahalanobis** was an Indian scientist and statistician who founded the Indian Statistical Institute (ISI). He is widely regarded as the 'father of modern statistics in India' for his significant contributions to the field and for establishing statistical infrastructure in the country.\n* **D.R. Kaprekar** was an Indian recreational mathematician known for properties of numbers like the Kaprekar constant.\n\nTherefore, the correct answer is P.C. Mahalanobis."
  },
  {
    "id": "67",
    "question": "The number of different rectangles can be drawn with a perimeter of 36cm with integral sides is (TSTET 10 Jan 2025)",
    "options": [
      "6",
      "9",
      "8",
      "7"
    ],
    "correctAnswer": 1,
    "explanation": "This problem asks for the number of unique pairs of integers (for length and width) that can form a rectangle with a given perimeter.\n\n** Step 1: Use the perimeter formula.**\nThe formula for the perimeter of a rectangle is P = 2(l + w), where 'l' is the length and 'w' is the width.\nGiven P = 36 cm.\n36 = 2(l + w)\n\n** Step 2: Simplify the equation.**\nDivide both sides by 2:\nl + w = 18\n\n** Step 3: Find all possible pairs of positive integers (l, w) that sum to 18.**\nTo avoid duplicates (since a 17x1 rectangle is the same as a 1x17 rectangle), we can assume l ≥ w.\n* If w = 1, l = 17\n* If w = 2, l = 16\n* If w = 3, l = 15\n* If w = 4, l = 14\n* If w = 5, l = 13\n* If w = 6, l = 12\n* If w = 7, l = 11\n* If w = 8, l = 10\n* If w = 9, l = 9 (This is a square, which is a special type of rectangle)\nIf we continue with w = 10, l would be 8, which is a pair we already have.\n\n** Step 4: Count the unique pairs.**\nThere are a total of 9 unique pairs of integers for the sides. Therefore, 9 different rectangles can be drawn."
  },
  {
    "id": "68",
    "question": "The rate (simple interest) per annum with which the principal triples in 8 years is (TSTET 10 Jan 2025)",
    "options": [
      "25%",
      "50%",
      "$12\\frac{1}{2}\\%$",
      "$37\\frac{1}{2}\\%$"
    ],
    "correctAnswer": 0,
    "explanation": "This problem involves finding the rate of simple interest when the principal, time, and the final amount are related.\n\n** Step 1: Define the variables.**\nLet the Principal (P) be 'x'.\nLet the Rate of interest be 'R' % per annum.\nGiven Time (T) = 8 years.\n\n** Step 2: Determine the Simple Interest (SI).**\nThe principal 'triples', which means the final Amount (A) becomes 3x.\nThe Simple Interest (SI) is the difference between the Amount and the Principal.\nSI = A - P = 3x - x = 2x.\n\n** Step 3: Use the Simple Interest formula.**\nThe formula is SI = (P × R × T) / 100.\nSubstitute the values:\n$2x = (x \\times R \\times 8) / 100$\n\n** Step 4: Solve for R.**\nWe can cancel 'x' from both sides (assuming x is not zero).\n$2 = (R \\times 8) / 100$\n$200 = 8R$\n$R = 200 / 8$\n$R = 25$\n\nThe rate is 25% per annum."
  },
  {
    "id": "69",
    "question": "Choose the correct statement/s related to symmetry from the following. (TSTET 10 Jan 2025)\nA) In a regular polygon, the number of axes of symmetry is equal to the number of sides.\nB) The possible number of lines of symmetry for an isosceles triangle is 2.",
    "options": [
      "Both the statements A and B are correct.",
      "Statement A is incorrect and Statement B is correct.",
      "Statement A is correct and Statement B is incorrect.",
      "Both the statements A and B are incorrect."
    ],
    "correctAnswer": 2,
    "explanation": "This question tests knowledge of lines of symmetry in geometric shapes.\n\n** Step 1: Evaluate Statement A.**\n'In a regular polygon, the number of axes of symmetry is equal to the number of sides.'\nA regular polygon has all sides equal and all angles equal. Examples include an equilateral triangle (3 sides, 3 lines of symmetry), a square (4 sides, 4 lines of symmetry), and a regular pentagon (5 sides, 5 lines of symmetry). This property holds true for all regular polygons. **Therefore, Statement A is correct.**\n\n** Step 2: Evaluate Statement B.**\n'The possible number of lines of symmetry for an isosceles triangle is 2.'\nAn isosceles triangle has two equal sides. It has exactly one line of symmetry, which is the altitude from the vertex angle between the two equal sides to the base. A triangle can have 0 (scalene), 1 (isosceles), or 3 (equilateral) lines of symmetry, but it can never have exactly 2. **Therefore, Statement B is incorrect.**\n\n** Step 3: Conclude.**\nStatement A is correct, and Statement B is incorrect."
  },
  {
    "id": "70",
    "question": "The number of Edges, Faces and vertices of a pentagonal pyramid respectively are (TSTET 10 Jan 2025)",
    "options": [
      "8, 5, 5",
      "10, 6, 6",
      "6, 10, 6",
      "5, 8, 5"
    ],
    "correctAnswer": 1,
    "explanation": "This question asks for the properties of a 3D shape, a pentagonal pyramid.\n\nA pentagonal pyramid consists of:\n* A base that is a pentagon (a 5-sided polygon).\n* Five triangular faces that connect the edges of the base to a single point called the apex.\n\n** Step 1: Count the Faces (F).**\nThere is 1 pentagonal base and 5 triangular side faces.\nTotal Faces = 1 + 5 = 6.\n\n** Step 2: Count the Vertices (V).**\nThere are 5 vertices on the pentagonal base and 1 vertex at the apex.\nTotal Vertices = 5 + 1 = 6.\n\n** Step 3: Count the Edges (E).**\nThere are 5 edges forming the pentagonal base and 5 edges connecting the base vertices to the apex.\nTotal Edges = 5 + 5 = 10.\n\n** Step 4: Arrange the numbers in the requested order.**\nThe question asks for Edges, Faces, and Vertices, respectively.\nThe correct order is 10, 6, 6.\n\n(Check with Euler's formula: V - E + F = 6 - 10 + 6 = 2. The values are correct.)"
  },
  {
    "id": "71",
    "question": "If $x \\ne 0$ then $\\frac{x^{2}-25}{x^{2}+3x-10}$= (TSTET 10 Jan 2025)",
    "options": [
      "$\\frac{x-5}{x-2}$",
      "$\\frac{x-5}{x+2}$",
      "$\\frac{x-5}{x+5}$",
      "$\\frac{x+5}{x-2}$"
    ],
    "correctAnswer": 0,
    "explanation": "To simplify this rational expression, we need to factor both the numerator and the denominator and then cancel out any common factors.\n\n** Step 1: Factor the numerator, $x^{2}-25$.**\nThis is a difference of squares, which factors as $(a-b)(a+b)$.\nSo, $x^{2}-25 = (x-5)(x+5)$.\n\n** Step 2: Factor the denominator, $x^{2}+3x-10$.**\nWe need to find two numbers that multiply to -10 and add up to +3. These numbers are +5 and -2.\nSo, $x^{2}+3x-10 = (x+5)(x-2)$.\n\n** Step 3: Rewrite the expression and simplify.**\nThe expression becomes $\\frac{(x-5)(x+5)}{(x+5)(x-2)}$.\n\n** Step 4: Cancel the common factor.**\nThe common factor in the numerator and denominator is $(x+5)$. Canceling this out, we are left with:\n$\\frac{x-5}{x-2}$\n(This is valid for all x where the original denominator is not zero, i.e., $x \\ne -5$ and $x \\ne 2$. The given condition $x \\ne 0$ is also satisfied)."
  },
  {
    "id": "72",
    "question": "The difference between the greatest and smallest five digit numbers formed with the digits 6, 0, 8, 3 and 5 is (TSTET 10 Jan 2025)",
    "options": [
      "82962",
      "55935",
      "55962",
      "82935"
    ],
    "correctAnswer": 2,
    "explanation": "This problem involves arranging given digits to form the largest and smallest possible 5-digit numbers, and then finding their difference.\n\n** Step 1: Find the greatest 5-digit number.**\nTo form the greatest number, arrange the given digits (6, 0, 8, 3, 5) in descending order.\nDescending order: 8, 6, 5, 3, 0.\nGreatest number = 86530.\n\n** Step 2: Find the smallest 5-digit number.**\nTo form the smallest number, arrange the digits in ascending order: 0, 3, 5, 6, 8.\nHowever, a 5-digit number cannot start with 0. So, we must place the smallest non-zero digit (which is 3) in the first position, and then place 0. The remaining digits are arranged in ascending order.\nSmallest number = 30568.\n\n** Step 3: Calculate the difference.**\nDifference = Greatest Number - Smallest Number\nDifference = 86530 - 30568\nDifference = 55962.\n\nThus, the difference is 55962."
  },
  {
    "id": "73",
    "question": "If $\\frac{1.5x+12}{1.6x+8}=\\frac{5}{4}$, then $x$= (TSTET 10 Jan 2025)",
    "options": [
      "0.4",
      "0.2",
      "2",
      "4"
    ],
    "correctAnswer": 3,
    "explanation": "To solve for 'x' in this equation, we can use the method of cross-multiplication.\n\n** Step 1: Cross-multiply.**\nGiven the equation $\\frac{1.5x+12}{1.6x+8}=\\frac{5}{4}$.\nCross-multiplying gives:\n$4 \\times (1.5x + 12) = 5 \\times (1.6x + 8)$\n\n** Step 2: Distribute and expand both sides.**\n$4(1.5x) + 4(12) = 5(1.6x) + 5(8)$\n$6x + 48 = 8x + 40$\n\n** Step 3: Isolate the variable 'x'.**\nTo get all the 'x' terms on one side, subtract 6x from both sides:\n$48 = 8x - 6x + 40$\n$48 = 2x + 40$\nNow, subtract 40 from both sides to isolate the term with x:\n$48 - 40 = 2x$\n$8 = 2x$\n\n** Step 4: Solve for x.**\nDivide both sides by 2:\n$x = \\frac{8}{2}$\n$x = 4$\n\nTherefore, the value of x is 4."
  },
  {
    "id": "74",
    "question": "The floor of a building is 3.936sq.m. of area which is covered with tiles. The tiles are in rhombus shaped with each of its diagonals are 16cm and 24cm in length. then the number of required tiles to cover the floor is (TSTET 10 Jan 2025)",
    "options": [
      "205",
      "103",
      "410",
      "510"
    ],
    "correctAnswer": 0,
    "explanation": "This problem requires calculating the area of a single tile and the total area of the floor in the same units to find the number of tiles needed.\n\n** Step 1: Calculate the area of one tile.**\nThe tiles are rhombus-shaped. The area of a rhombus is given by the formula: Area = $\\frac{1}{2} \\times d_1 \\times d_2$, where $d_1$ and $d_2$ are the lengths of the diagonals.\nGiven: $d_1 = 16$ cm, $d_2 = 24$ cm.\nArea of one tile = $\\frac{1}{2} \\times 16 \\text{ cm} \\times 24 \\text{ cm} = 8 \\times 24 = 192$ sq.cm.\n\n** Step 2: Convert the total floor area to the same unit (sq.cm.).**\nThe total area of the floor is 3.936 sq.m.\nWe know that 1 meter = 100 cm, so 1 sq.m = $100 \\text{ cm} \\times 100 \\text{ cm} = 10000$ sq.cm.\nTotal floor area = $3.936 \\times 10000$ sq.cm = 39360 sq.cm.\n\n** Step 3: Calculate the number of tiles required.**\nNumber of tiles = Total Floor Area / Area of One Tile\nNumber of tiles = $\\frac{39360 \\text{ sq.cm}}{192 \\text{ sq.cm}}$\nNumber of tiles = 205.\n\nTherefore, 205 tiles are required to cover the floor."
  },
  {
    "id": "75",
    "question": "With which of the following lengths, a triangle CANNOT be formed. (TSTET 10 Jan 2025)",
    "options": [
      "6cm, 7cm, 8cm",
      "6cm, 6cm, 6cm",
      "3cm, 4cm, 5cm",
      "4cm, 8cm, 4cm"
    ],
    "correctAnswer": 3,
    "explanation": "This question tests the Triangle Inequality Theorem, which states that the sum of the lengths of any two sides of a triangle must be greater than the length of the third side.\n\nLet the sides be a, b, and c. The conditions are:\n1. a + b > c\n2. a + c > b\n3. b + c > a\n\nLet's check each option:\n\n* **Option 1: 6cm, 7cm, 8cm**\n    6 + 7 = 13 > 8 (True)\n    6 + 8 = 14 > 7 (True)\n    7 + 8 = 15 > 6 (True)\n    A triangle **can** be formed.\n\n* **Option 2: 6cm, 6cm, 6cm** (Equilateral triangle)\n    6 + 6 = 12 > 6 (True)\n    A triangle **can** be formed.\n\n* **Option 3: 3cm, 4cm, 5cm** (Right-angled triangle)\n    3 + 4 = 7 > 5 (True)\n    3 + 5 = 8 > 4 (True)\n    4 + 5 = 9 > 3 (True)\n    A triangle **can** be formed.\n\n* **Option 4: 4cm, 8cm, 4cm**\n    Let's check the sum of the two smaller sides against the largest side.\n    4 + 4 = 8. This is **not greater** than the third side, 8.\n    Since 4 + 4 is not strictly greater than 8, the Triangle Inequality Theorem is violated. A triangle **cannot** be formed. The three sides would form a flat line segment."
  },
  {
    "id": "76",
    "question": "The area of a circle is 38.5sq.cm., then the circumference of its semi-circle (in cm.) is (Use $\\pi=\\frac{22}{7}$) (TSTET 10 Jan 2025)",
    "options": [
      "11",
      "18",
      "22",
      "29"
    ],
    "correctAnswer": 1,
    "explanation": "The problem has two parts: first find the radius from the area, then calculate the perimeter (circumference) of the semi-circle.\n\n** Step 1: Find the radius (r) of the circle.**\nThe formula for the area of a circle is A = $\\pi r^2$.\nGiven: A = 38.5 sq.cm, $\\pi = \\frac{22}{7}$.\n$38.5 = \\frac{22}{7} \\times r^2$\n$r^2 = \\frac{38.5 \\times 7}{22}$\n$r^2 = \\frac{269.5}{22} = 12.25$\n$r = \\sqrt{12.25} = 3.5$ cm.\n\n** Step 2: Calculate the circumference of the semi-circle.**\nThe circumference (or perimeter) of a semi-circle is the sum of the curved part (half the circle's circumference) and the straight diameter.\nCircumference of semi-circle = $(\\pi r) + (2r)$.\nSubstitute r = 3.5 cm and $\\pi = \\frac{22}{7}$:\nCircumference = $(\\frac{22}{7} \\times 3.5) + (2 \\times 3.5)$\nCircumference = $(22 \\times 0.5) + 7$\nCircumference = $11 + 7$\nCircumference = 18 cm.\n\nTherefore, the circumference of the semi-circle is 18 cm."
  },
  {
    "id": "77",
    "question": "The number of possible distinct sets of three positive integers with a mean of 7, a median of 8 and no mode is (TSTET 10 Jan 2025)",
    "options": [
      "5",
      "4",
      "3",
      "2"
    ],
    "correctAnswer": 1,
    "explanation": "This problem requires finding sets of three integers that satisfy three conditions: mean, median, and no mode.\n\n** Step 1: Use the median information.**\nLet the three distinct positive integers be a, b, and c, arranged in ascending order ($a < b < c$).\nThe median of three numbers is the middle number. So, **b = 8**.\nThe set is {a, 8, c}.\n\n** Step 2: Use the mean information.**\nThe mean is the sum of the numbers divided by the count. The mean is 7.\n$\\frac{a + 8 + c}{3} = 7$\n$a + 8 + c = 21$\n$a + c = 13$\n\n** Step 3: Use the 'no mode' and ordering information.**\n'No mode' means all three numbers must be different. So, $a \\ne 8$ and $c \\ne 8$.\nWe also know from the ordering that $a < b < c$, which means **a < 8** and **c > 8**.\n\n** Step 4: Find integer pairs (a, c) that satisfy the conditions.**\nWe need to find pairs of integers (a, c) such that $a + c = 13$, with $a < 8$ and $c > 8$.\nLet's list the possibilities for 'a' (since a must be a positive integer and less than 8):\n* If a = 1, then c = 13 - 1 = 12. The set is {1, 8, 12}. This works (1 < 8 < 12).\n* If a = 2, then c = 13 - 2 = 11. The set is {2, 8, 11}. This works (2 < 8 < 11).\n* If a = 3, then c = 13 - 3 = 10. The set is {3, 8, 10}. This works (3 < 8 < 10).\n* If a = 4, then c = 13 - 4 = 9. The set is {4, 8, 9}. This works (4 < 8 < 9).\n* If a = 5, then c = 13 - 5 = 8. This is not valid because c must be greater than 8 and all numbers must be distinct.\n* If a = 6, then c = 13 - 6 = 7. This is not valid because $a < c$ is not true (6 is not less than 7), and more importantly, the condition $a < 8 < c$ is violated.\n\n** Step 5: Count the valid sets.**\nThere are 4 possible distinct sets. They are {1, 8, 12}, {2, 8, 11}, {3, 8, 10}, and {4, 8, 9}."
  },
  {
    "id": "78",
    "question": "Choose a correct statement from the following. (TSTET 10 Jan 2025)",
    "options": [
      "$9^{3}>7^{4}$",
      "$4^{3}>3^{4}$",
      "$12^{2}<5^{3}$",
      "$2^{8}>6^{3}$"
    ],
    "correctAnswer": 3,
    "explanation": "To solve this, we need to calculate the value of each side of the inequality in every option and check if the statement is true.\n\n* **Option 1: $9^{3} > 7^{4}$**\n    $9^{3} = 9 \\times 9 \\times 9 = 729$.\n    $7^{4} = 7 \\times 7 \\times 7 \\times 7 = 49 \\times 49 = 2401$.\n    Is $729 > 2401$? **False**.\n\n* **Option 2: $4^{3} > 3^{4}$**\n    $4^{3} = 4 \\times 4 \\times 4 = 64$.\n    $3^{4} = 3 \\times 3 \\times 3 \\times 3 = 81$.\n    Is $64 > 81$? **False**.\n\n* **Option 3: $12^{2} < 5^{3}$**\n    $12^{2} = 144$.\n    $5^{3} = 5 \\times 5 \\times 5 = 125$.\n    Is $144 < 125$? **False**.\n\n* **Option 4: $2^{8} > 6^{3}$**\n    $2^{8} = 256$.\n    $6^{3} = 6 \\times 6 \\times 6 = 216$.\n    Is $256 > 216$? **True**.\n\nTherefore, the only correct statement is $2^{8} > 6^{3}$."
  },
  {
    "id": "79",
    "question": "Choose the quadrilateral/s from the following which can be constructed when measurements of two diagonals are given (TSTET 10 Jan 2025)\nA) Rhombus\nB) Rectangle\nC) Square",
    "options": [
      "B only",
      "A & C only",
      "A & B only",
      "A only"
    ],
    "correctAnswer": 1,
    "explanation": "This question tests the properties required to uniquely construct a quadrilateral. Generally, 5 independent measurements are needed.\n\n** Step 1: Analyze Rhombus (A).**\nThe diagonals of a rhombus have two key properties: they bisect each other, and they are perpendicular. If you are given the lengths of the two diagonals (e.g., d1 and d2), you can construct a unique rhombus. You draw the first diagonal, find its midpoint, draw a perpendicular line through the midpoint, and mark lengths of d2/2 on either side. These four endpoints define the rhombus. So, **a rhombus can be constructed.**\n\n** Step 2: Analyze Rectangle (B).**\nThe diagonals of a rectangle are equal and bisect each other. However, the angle at which they intersect is not fixed (it can be any angle except 180 or 0 degrees). Knowing only the length of the two (equal) diagonals is not sufficient information to determine the side lengths, and thus you can construct infinitely many different rectangles with the same diagonal length. So, **a rectangle cannot be uniquely constructed.**\n\n** Step 3: Analyze Square (C).**\nA square has all the properties of a rhombus and a rectangle. Its diagonals are equal, perpendicular, and bisect each other. Giving the length of the two (equal) diagonals is sufficient information to construct it, just like a rhombus. So, **a square can be constructed.**\n\n** Step 4: Conclude.**\nBoth the Rhombus (A) and the Square (C) can be uniquely constructed with the lengths of their two diagonals."
  },
  {
    "id": "80",
    "question": "A tank is in the shape of a cuboid is 3m 50 cm long, 2m 80cm wide and 1m 60cm height, then the capacity of the tank (in litres) is (TSTET 10 Jan 2025)",
    "options": [
      "1568",
      "156800",
      "15680",
      "15.68"
    ],
    "correctAnswer": 2,
    "explanation": "This problem requires calculating the volume of a cuboid and then converting that volume to capacity in litres.\n\n** Step 1: Convert all dimensions to a single unit.**\nIt's easiest to work with meters first, then convert the final volume.\n* Length (l) = 3 m 50 cm = 3.5 m\n* Width (w) = 2 m 80 cm = 2.8 m\n* Height (h) = 1 m 60 cm = 1.6 m\n\n** Step 2: Calculate the volume of the cuboid.**\nThe formula for the volume of a cuboid is V = l × w × h.\nV = 3.5 m × 2.8 m × 1.6 m\nV = 9.8 m² × 1.6 m\nV = 15.68 m³ (cubic meters)\n\n** Step 3: Convert the volume to capacity in litres.**\nThe conversion factor is: 1 cubic meter = 1000 litres.\nCapacity = Volume in m³ × 1000\nCapacity = 15.68 × 1000\nCapacity = 15680 litres.\n\nTherefore, the capacity of the tank is 15680 litres."
  },
  {
    "id": "81",
    "question": "$\\sqrt{81225}$= (TSTET 10 Jan 2025)",
    "options": [
      "265",
      "275",
      "295",
      "285"
    ],
    "correctAnswer": 3,
    "explanation": "We need to find the square root of 81225. We can use estimation or the long division method.\n\n**Method 1: Estimation**\n* ** Step 1.1: Look at the last digit.** The number ends in 5, so its square root must end in 5. This limits our options to 265, 275, 295, or 285.\n* ** Step 1.2: Estimate the magnitude.** Look at the number without the last two digits: 812. Find the squares of numbers ending in 0 that are close to 81225.\n    * $200^2 = 40000$\n    * $300^2 = 90000$\n    The number 81225 is between 40000 and 90000, so the root is between 200 and 300.\n* ** Step 1.3: Refine the estimate.**\n    * Let's check a middle value like 250: $250^2 = 62500$ (too low).\n    * Let's check 280 and 290: $280^2 = 78400$ and $290^2 = 84100$. Our number 81225 is between these two squares.\n    * Since the root must end in 5, the only possibility in this range is 285. Let's verify: $285^2 = (280+5)^2 = 280^2 + 2(280)(5) + 5^2 = 78400 + 2800 + 25 = 81225$.\n\n**Method 2: Long Division**\n* Pair the digits from the right: 8 12 25.\n* Find the largest square less than or equal to 8 (which is 4, from 2²). Write 2 as the divisor and quotient.\n* Subtract 4 from 8, get 4. Bring down the next pair, 12. New dividend is 412.\n* Double the quotient (2), get 4. Find a digit 'x' such that 4x × x is close to 412. $48 \\times 8 = 384$. So, x=8.\n* Write 8 in the quotient (now 28) and subtract 384 from 412, leaving 28. Bring down the next pair, 25. New dividend is 2825.\n* Double the quotient (28), get 56. Find a digit 'y' such that 56y × y = 2825. Since it ends in 5, y must be 5. $565 \\times 5 = 2825$.\n* The final quotient is 285.\n\nTherefore, the square root of 81225 is 285."
  },
  {
    "id": "82",
    "question": "The LCM and HCF of two numbers are 55440 and 165. If one number is 2640, then the other number is (TSTET 10 Jan 2025)",
    "options": [
      "3265",
      "3365",
      "3465",
      "3165"
    ],
    "correctAnswer": 2,
    "explanation": "This problem uses the fundamental relationship between two numbers and their LCM (Least Common Multiple) and HCF (Highest Common Factor).\n\n** Step 1: State the formula.**\nThe product of two numbers is equal to the product of their LCM and HCF.\nLet the two numbers be 'a' and 'b'.\n$a \\times b = LCM(a, b) \\times HCF(a, b)$\n\n** Step 2: Substitute the given values.**\nGiven:\n* LCM = 55440\n* HCF = 165\n* One number (let's say 'a') = 2640\n* We need to find the other number ('b').\n\n$2640 \\times b = 55440 \\times 165$\n\n** Step 3: Solve for 'b'.**\n$b = \\frac{55440 \\times 165}{2640}$\nWe can simplify the fraction. First, cancel the zero:\n$b = \\frac{5544 \\times 165}{264}$\nNow, divide 5544 by 264:\n$5544 \\div 264 = 21$\nSo, the equation simplifies to:\n$b = 21 \\times 165$\n\n** Step 4: Calculate the final product.**\n$b = 3465$\n\nTherefore, the other number is 3465."
  },
  {
    "id": "83",
    "question": "$3\\frac{1}{2}+4\\frac{2}{3}+5\\frac{3}{4}$= (TSTET 10 Jan 2025)",
    "options": [
      "$13\\frac{11}{12}$",
      "$13\\frac{1}{12}$",
      "$12\\frac{11}{13}$",
      "$11\\frac{12}{13}$"
    ],
    "correctAnswer": 0,
    "explanation": "To add mixed numbers, we can add the whole number parts and the fractional parts separately.\n\n** Step 1: Add the whole number parts.**\n$3 + 4 + 5 = 12$\n\n** Step 2: Add the fractional parts.**\nWe need to add $\\frac{1}{2} + \\frac{2}{3} + \\frac{3}{4}$.\nTo do this, find the least common denominator (LCD) of 2, 3, and 4. The LCD is 12.\n\n** Step 3: Convert each fraction to an equivalent fraction with a denominator of 12.**\n* $\\frac{1}{2} = \\frac{1 \\times 6}{2 \\times 6} = \\frac{6}{12}$\n* $\\frac{2}{3} = \\frac{2 \\times 4}{3 \\times 4} = \\frac{8}{12}$\n* $\\frac{3}{4} = \\frac{3 \\times 3}{4 \\times 3} = \\frac{9}{12}$\n\n** Step 4: Add the new fractions.**\n$\\frac{6}{12} + \\frac{8}{12} + \\frac{9}{12} = \\frac{6 + 8 + 9}{12} = \\frac{23}{12}$\n\n** Step 5: Convert the improper fraction back to a mixed number.**\n$\\frac{23}{12} = 1$ with a remainder of $11$, so it is $1\\frac{11}{12}$.\n\n** Step 6: Combine the sum of the whole numbers and the sum of the fractions.**\nTotal Sum = (Sum of whole parts) + (Sum of fractional parts)\nTotal Sum = $12 + 1\\frac{11}{12} = 13\\frac{11}{12}$.\n\nTherefore, the final answer is $13\\frac{11}{12}$."
  },
  {
    "id": "84",
    "question": "One-eighth of a number exceeds its one-eleventh by 69, then the number is (TSTET 10 Jan 2025)",
    "options": [
      "1848",
      "1936",
      "2024",
      "2112"
    ],
    "correctAnswer": 2,
    "explanation": "This problem can be solved by setting up an algebraic equation from the given information.\n\n** Step 1: Translate the words into an equation.**\nLet the number be 'x'.\n* 'One-eighth of a number' is $\\frac{1}{8}x$ or $\\frac{x}{8}$.\n* 'One-eleventh of a number' is $\\frac{1}{11}x$ or $\\frac{x}{11}$.\n* 'exceeds... by 69' means the difference between the two quantities is 69.\nSo, the equation is: $\\frac{x}{8} - \\frac{x}{11} = 69$.\n\n** Step 2: Solve the equation for x.**\nTo subtract the fractions, find a common denominator for 8 and 11, which is $8 \\times 11 = 88$.\n$\\frac{11x}{88} - \\frac{8x}{88} = 69$\n$\\frac{11x - 8x}{88} = 69$\n$\\frac{3x}{88} = 69$\n\n** Step 3: Isolate x.**\nMultiply both sides by 88:\n$3x = 69 \\times 88$\nDivide both sides by 3:\n$x = \\frac{69 \\times 88}{3}$\n$x = 23 \\times 88$\n\n** Step 4: Calculate the final value.**\n$x = 2024$\n\nTherefore, the number is 2024."
  },
  {
    "id": "85",
    "question": "Stock market details given in mathematical quantities implies this value of mathematics (TSTET 10 Jan 2025)",
    "options": [
      "Preparatory",
      "Information",
      "Cultural",
      "Moral"
    ],
    "correctAnswer": 1,
    "explanation": "This question relates to the different values or purposes of teaching mathematics. Let's analyze the options:\n* **Preparatory Value:** Mathematics as a preparation for higher studies or technical fields.\n* **Information Value:** Mathematics used to convey precise, quantitative data and information about the world.\n* **Cultural Value:** Mathematics as a part of human culture, history, and intellectual heritage.\n* **Moral Value:** Mathematics teaching values like honesty, reasoning, and objectivity.\n\nStock market details (e.g., stock prices, percentage changes, indices like the S&P 500) use numbers, graphs, and statistics to provide clear, quantitative **information** about the economy and financial markets. This allows people to understand complex trends and make informed decisions. Therefore, this is a prime example of the informational value of mathematics."
  },
  {
    "id": "86",
    "question": "For learning mathematics, concepts will be arranged sequentially in the form of ladder, this arrangement reflects the following principle. (TSTET 10 Jan 2025)",
    "options": [
      "Continuity",
      "Analogy",
      "Association",
      "Imitation"
    ],
    "correctAnswer": 0,
    "explanation": "This pedagogical question describes a core feature of the mathematics curriculum.\n\n* Mathematics is a hierarchical and logical subject. Concepts build upon one another in a specific sequence. For example, a student must understand counting before addition, addition before multiplication, and arithmetic before algebra.\n* This  Step-by- Step, sequential arrangement, where each new concept depends on the mastery of previous ones, is best described as the principle of **Continuity**.\n* Learning progresses in an unbroken, logical order, moving from simple ideas to more complex ones, much like climbing the rungs of a ladder. The other principles are less relevant:\n    * **Analogy:** Learning by comparison.\n    * **Association:** Connecting new ideas to existing ones.\n    * **Imitation:** Learning by copying.\nWhile these can be teaching techniques, the structural arrangement of the curriculum itself reflects continuity."
  },
  {
    "id": "87",
    "question": "The reason for children lagging in Geometry is: (TSTET 10 Jan 2025)\nA) Lack of spatial visualization\nB) Poor in abstract thinking\nC) Poor in language skills\nD) Lack of numerical skills",
    "options": [
      "A & B only",
      "B only",
      "D only",
      "B & D only"
    ],
    "correctAnswer": 0,
    "explanation": "This question asks for the primary reasons for difficulty in learning geometry.\n\n* **A) Lack of spatial visualization:** Geometry inherently deals with shapes, figures, and their properties in space. The ability to mentally visualize, rotate, and manipulate these shapes is crucial for understanding concepts like area, volume, and geometric transformations. A deficit in this skill is a major barrier to learning geometry. This is a very strong reason.\n\n* **B) Poor in abstract thinking:** While some geometry is concrete, much of it (especially at higher levels) involves abstract concepts like points, lines, planes, theorems, and logical proofs. Students need to move from concrete shapes to abstract properties and relationships. Difficulty with abstract reasoning makes it hard to grasp the logical structure of geometry. This is also a very strong reason.\n\n* **C) Poor in language skills:** Language is important for understanding definitions and word problems, but it is not typically considered the most fundamental reason for difficulty in geometry itself.\n\n* **D) Lack of numerical skills:** While some calculations are needed (e.g., finding area), geometry is less reliant on complex numerical computation than arithmetic or algebra. The primary challenge is usually in reasoning and visualization, not calculation.\n\nTherefore, the most direct and significant reasons for children lagging in geometry are the lack of spatial visualization (A) and poor abstract thinking (B)."
  },
  {
    "id": "88",
    "question": "'Multi level teaching' means (TSTET 10 Jan 2025)",
    "options": [
      "Teaching different classes at the same time.",
      "Common teaching in the class although it has children with different abilities.",
      "Teaching the children with different abilities taking into consideration of their abilities.",
      "Whole class teaching"
    ],
    "correctAnswer": 2,
    "explanation": "This question asks for the definition of the pedagogical approach 'multi-level teaching'.\n\n* **Multi-level teaching** (also known as differentiated instruction) is a classroom strategy designed to address the needs of students with a wide range of abilities, learning styles, and backgrounds within a single classroom.\n* It rejects a 'one-size-fits-all' approach. Instead of delivering a single lesson to the whole class (Option 2 and 4), the teacher plans activities, content, and assessments at multiple levels of difficulty and complexity.\n* The core idea is to ensure that every student is appropriately challenged and can achieve learning goals, regardless of their starting point. This perfectly matches **Option 3: Teaching the children with different abilities taking into consideration of their abilities.**\n* Option 1, teaching different classes (e.g., 3rd and 4th grade) simultaneously, is referred to as a multi-grade classroom, which is a related but distinct concept."
  },
  {
    "id": "89",
    "question": "As per the period plan prescribed by the SCERT for mathematics teaching, the aim of solving of model problems is: (TSTET 10 Jan 2025)",
    "options": [
      "To explain the problem solved by the teacher once again to the students.",
      "To make the students to solve similar problem taught by teacher.",
      "To explain the  Steps involved in the problem given in the textbook as an example.",
      "To read and tell the problem."
    ],
    "correctAnswer": 1,
    "explanation": "This question pertains to the structure of a typical mathematics lesson plan.\nA standard lesson sequence often follows these  Steps:\n1.  **Introduction:** Introduce the new concept.\n2.  **Demonstration/Example:** The teacher explains the concept and solves an example problem on the board.\n3.  **Guided Practice/Model Problem:** The teacher provides a problem very similar to the example for students to solve, often with teacher guidance. This  Step checks for immediate understanding and allows students to apply the new skill.\n4.  **Independent Practice:** Students solve more problems on their own.\n\nThe 'solving of model problems' fits into the guided practice phase ( Step 3). Its purpose is to have students actively engage with the material and try to solve a problem that is similar to the one just taught by the teacher. This helps solidify the learning before they move to more complex tasks. Therefore, **Option 2** is the correct aim."
  },
  {
    "id": "90",
    "question": "Which of the following is most suitable for teaching the concept of fractions to the children? (TSTET 10 Jan 2025)",
    "options": [
      "Geo Board",
      "Cubical Rods",
      "Number charts",
      "Domino cards"
    ],
    "correctAnswer": 1,
    "explanation": "This question asks for the best teaching aid (manipulative) for introducing the concept of fractions.\n\n* **Geo Board:** This is a board with pegs where rubber bands are used to create shapes. It is excellent for teaching geometry concepts like area, perimeter, and properties of polygons. While it can be used to model area-based fractions (e.g., dividing a square into halves), it's not its primary or most effective use for introducing the concept.\n\n* **Cubical Rods (like Cuisenaire Rods):** These are colored rods of varying lengths, where each length is a multiple of the shortest rod. They are extremely effective for teaching fractions because they provide a concrete, linear model. Students can physically see that two 'red' rods are equal in length to one 'purple' rod, thus visualizing the concept of a half. They can explore various part-whole relationships, making them a very suitable tool.\n\n* **Number charts:** These are grids of numbers (e.g., a 100 chart) used for teaching counting, number patterns, and place value for whole numbers.\n\n* **Domino cards:** These are used for developing number sense, counting, and subitizing (instantly recognizing small quantities), primarily for whole numbers.\n\nAmong the choices, **Cubical Rods** are the most suitable and specifically designed manipulative for introducing and exploring the fundamental concepts of fractions."
  },
  {
    "id": 91,
    "question": "The present ages of Rani and Sunitha are in the ratio 7:5. Twelve years ago their ages were in the ratio 5:3. Then, the present ages of Rani and Sunitha (in years) respectively are (TSTET 18 Jan 2025)",
    "options": [
      "30, 18",
      "42, 30",
      "84, 60",
      "35, 15"
    ],
    "correctAnswer": 1,
    "explanation": "Let the present ages of Rani and Sunitha be 7x and 5x, respectively.\n\n Step 1: Express their ages twelve years ago.\nRani's age twelve years ago = 7x - 12\nSunitha's age twelve years ago = 5x - 12\n\n Step 2: Set up the equation based on the ratio given for twelve years ago.\n$\\frac{7x - 12}{5x - 12} = \\frac{5}{3}$\n\n Step 3: Solve the equation for x.\nCross-multiply: $3(7x - 12) = 5(5x - 12)$\n$21x - 36 = 25x - 60$\n$60 - 36 = 25x - 21x$\n$24 = 4x$\n$x = 6$\n\n Step 4: Calculate their present ages.\nRani's present age = $7x = 7 \\times 6 = 42$ years.\nSunitha's present age = $5x = 5 \\times 6 = 30$ years.\nTherefore, their present ages are 42 and 30."
  },
  {
    "id": 92,
    "question": "If 3 tables and 2 chairs cost ₹800; 5 tables and 4 chairs cost ₹1400, then, the cost of 4 tables and 8 chairs is (TSTET 18 Jan 2025)",
    "options": [
      "₹1200",
      "₹1400",
      "₹1800",
      "₹1600"
    ],
    "correctAnswer": 3,
    "explanation": "Let T be the cost of one table and C be the cost of one chair.\n\n Step 1: Formulate the system of linear equations from the given information.\nEquation 1: $3T + 2C = 800$\nEquation 2: $5T + 4C = 1400$\n\n Step 2: Solve the system of equations. Multiply Equation 1 by 2 to eliminate C.\n$2 \\times (3T + 2C) = 2 \\times 800$\nNew Equation 1: $6T + 4C = 1600$\n\n Step 3: Subtract Equation 2 from the new Equation 1.\n$(6T + 4C) - (5T + 4C) = 1600 - 1400$\n$T = 200$\nSo, the cost of one table is ₹200.\n\n Step 4: Substitute the value of T back into the original Equation 1 to find C.\n$3(200) + 2C = 800$\n$600 + 2C = 800$\n$2C = 200$\n$C = 100$\nSo, the cost of one chair is ₹100.\n\n Step 5: Calculate the cost of 4 tables and 8 chairs.\nCost = $4T + 8C = 4(200) + 8(100) = 800 + 800 = 1600$.\nThe total cost is ₹1600."
  },
  {
    "id": 93,
    "question": "In which of the following divisions, the remainder will be more than the remainder you get when you divide 3169 by 15? (TSTET 18 Jan 2025)",
    "options": [
      "$3170 \\div 16$",
      "$3154 \\div 14$",
      "$3191 \\div 18$",
      "$3165 \\div 17$"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: Find the remainder when 3169 is divided by 15.\n$3169 = 15 \\times 211 + 4$. The remainder is 4.\n\n Step 2: Find the remainder for each option and compare it with 4.\nOption 1: $3170 \\div 16$. $3170 = 16 \\times 198 + 2$. The remainder is 2. (2 is not > 4)\nOption 2: $3154 \\div 14$. $3154 = 14 \\times 225 + 4$. The remainder is 4. (4 is not > 4)\nOption 3: $3191 \\div 18$. $3191 = 18 \\times 177 + 5$. The remainder is 5. (5 is > 4)\nOption 4: $3165 \\div 17$. $3165 = 17 \\times 186 + 3$. The remainder is 3. (3 is not > 4)\n\nThe division $3191 \\div 18$ gives a remainder of 5, which is greater than 4."
  },
  {
    "id": 94,
    "question": "$160000 = $ (TSTET 18 Jan 2025)",
    "options": [
      "$(0.2)^{4} \\times 10^{8}$",
      "$(0.2)^{3} \\times 20^{4}$",
      "$2^{4} \\times 10^{5}$",
      "$(2^{4})^{2} \\times 10^{4}$"
    ],
    "correctAnswer": 0,
    "explanation": "The target value is 160,000.\nLet's evaluate each option:\n\nOption 1: $(0.2)^{4} \\times 10^{8} = (\\frac{2}{10})^{4} \\times 10^{8} = \\frac{16}{10000} \\times 10^{8} = 16 \\times 10^{-4} \\times 10^{8} = 16 \\times 10^{4} = 160,000$. This is correct.\n\nOption 2: $(0.2)^{3} \\times 20^{4} = 0.008 \\times 160000 = 1280$. This is incorrect.\n\nOption 3: $2^{4} \\times 10^{5} = 16 \\times 100000 = 1,600,000$. This is incorrect.\n\nOption 4: $(2^{4})^{2} \\times 10^{4} = 16^{2} \\times 10^{4} = 256 \\times 10000 = 2,560,000$. This is incorrect."
  },
  {
    "id": 95,
    "question": "$12\\frac{1}{2}\\%$ of what sum of money is equal to 30% of ₹180? (TSTET 18 Jan 2025)",
    "options": [
      "₹450",
      "₹540",
      "₹432",
      "₹524"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: Calculate the value of 30% of ₹180.\nValue = $0.30 \\times 180 = 54$. So, we are looking for a sum where 12.5% of it is ₹54.\n\n Step 2: Let the unknown sum of money be 'x'. Set up the equation.\n$12\\frac{1}{2}\\% = 12.5\\% = 0.125$.\nThe equation is: $0.125 \\times x = 54$.\n\n Step 3: Solve for x.\n$x = \\frac{54}{0.125}$\nTo simplify, we can write 0.125 as $\\frac{1}{8}$.\n$x = 54 \\div \\frac{1}{8} = 54 \\times 8$\n$x = 432$.\nThe required sum of money is ₹432."
  },
  {
    "id": 96,
    "question": "Product of period and periodicity of $0.2\\overline{34}$ is (TSTET 18 Jan 2025)",
    "options": [
      "468",
      "68",
      "702",
      "46"
    ],
    "correctAnswer": 1,
    "explanation": "For the repeating decimal $0.2\\overline{34}$:\n\n Step 1: Identify the period.\nThe period is the sequence of digits that repeats. In this case, the repeating digits are '34'. So, the period is 34.\n\n Step 2: Identify the periodicity.\nThe periodicity is the number of digits in the period. The period '34' has 2 digits. So, the periodicity is 2.\n\n Step 3: Calculate the product of the period and periodicity.\nProduct = Period × Periodicity = $34 \\times 2 = 68$."
  },
  {
    "id": 97,
    "question": "Ramanujan Number among the following is (TSTET 18 Jan 2025)",
    "options": [
      "6174",
      "1709",
      "6147",
      "1729"
    ],
    "correctAnswer": 3,
    "explanation": "This is a knowledge-based question. The Hardy-Ramanujan number, often called the Ramanujan number, is 1729. It is the smallest natural number that can be expressed as the sum of two different positive cubes in two different ways.\n\n$1729 = 1^3 + 12^3$\n$1729 = 9^3 + 10^3$"
  },
  {
    "id": 98,
    "question": "1 Kilo Litre = (TSTET 18 Jan 2025)",
    "options": [
      "$10^{2}m^{3}$",
      "$10^{5}cm^{3}$",
      "$10^{6}cm^{3}$",
      "$10^{3}m^{3}$"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: Understand the base units.\n1 Kilo Litre (kL) = 1000 Litres (L).\n\n Step 2: Relate Litres to cubic measurements.\n1 Litre (L) = 1000 cubic centimeters ($cm^3$).\n1000 Litres (L) = 1 cubic meter ($m^3$).\n\n Step 3: Perform the conversion.\nUsing the relation between L and $cm^3$:\n$1 \\text{ kL} = 1000 \\text{ L} = 1000 \\times 1000 \\text{ cm}^3 = 1,000,000 \\text{ cm}^3 = 10^6 \\text{ cm}^3$.\n\n Step 4: Check the options.\nOption 1: $10^2 m^3 = 100 m^3$. Incorrect.\nOption 2: $10^5 cm^3 = 100,000 cm^3$. Incorrect.\nOption 3: $10^6 cm^3$. Correct.\nOption 4: $10^3 m^3 = 1000 m^3$. Incorrect."
  },
  {
    "id": 99,
    "question": "If $169 \\times 36 = 6084$, then $60.84 \\div 16.9 = $ (TSTET 18 Jan 2025)",
    "options": [
      "3.6",
      "36",
      "0.36",
      "360"
    ],
    "correctAnswer": 0,
    "explanation": " Step 1: Start with the given equation.\n$169 \\times 36 = 6084$. This can be rewritten as $\\frac{6084}{169} = 36$.\n\n Step 2: Manipulate the expression to be solved.\n$60.84 \\div 16.9 = \\frac{60.84}{16.9}$\n\n Step 3: Remove the decimals by multiplying the numerator and denominator by appropriate powers of 10.\n$\\frac{60.84 \\times 100}{16.9 \\times 100} = \\frac{6084}{1690}$\n\n Step 4: Use the known relationship from  Step 1.\n$\\frac{6084}{1690} = \\frac{6084}{169 \\times 10} = \\frac{1}{10} \\times (\\frac{6084}{169})$\nSince $\\frac{6084}{169} = 36$, the expression becomes:\n$\\frac{1}{10} \\times 36 = 3.6$."
  },
  {
    "id": 100,
    "question": "$a(b-c)+b(c-a)+c(a-b) = $ (TSTET 18 Jan 2025)",
    "options": [
      "1",
      "0",
      "$ab+bc+ca$",
      "abc"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: Expand each term in the expression using the distributive property.\n$a(b-c) = ab - ac$\n$b(c-a) = bc - ba$ (which is $bc - ab$)\n$c(a-b) = ca - cb$ (which is $ac - bc$)\n\n Step 2: Add the expanded terms together.\n$(ab - ac) + (bc - ab) + (ac - bc)$\n\n Step 3: Group the like terms.\n$(ab - ab) + (bc - bc) + (-ac + ac)$\n\n Step 4: Simplify the expression.\n$0 + 0 + 0 = 0$."
  },
  {
    "id": 101,
    "question": "The largest two digit prime number is (TSTET 18 Jan 2025)",
    "options": [
      "93",
      "95",
      "91",
      "97"
    ],
    "correctAnswer": 3,
    "explanation": "A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.\nWe need to check the largest numbers first.\n\n- 99 is divisible by 3, 9, 11.\n- 98 is divisible by 2.\n- **97**: Check for divisibility by primes up to $\\sqrt{97} \\approx 9.8$. We check 2, 3, 5, 7. It is not divisible by any of them. Thus, 97 is a prime number.\n\nLet's check the given options:\n- 93 is divisible by 3 (since 9+3=12).\n- 95 is divisible by 5.\n- 91 is divisible by 7 ($7 \\times 13 = 91$).\n- 97 is prime.\nTherefore, 97 is the largest two-digit prime number."
  },
  {
    "id": 102,
    "question": "How many numbers between 1 and 43 which are exactly divisible by 3 but not by 9? (TSTET 18 Jan 2025)",
    "options": [
      "12",
      "14",
      "10",
      "11"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: List all the numbers between 1 and 43 that are divisible by 3.\nThese are the multiples of 3: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42. There are 14 such numbers.\n\n Step 2: From the list above, identify the numbers that are also divisible by 9.\nThese are the multiples of 9: 9, 18, 27, 36. There are 4 such numbers.\n\n Step 3: To find the numbers divisible by 3 but NOT by 9, we remove the numbers from  Step 2 from the list in  Step 1.\nTotal numbers divisible by 3 (14) - Total numbers divisible by 9 (4) = 10.\n\nThe numbers are: 3, 6, 12, 15, 21, 24, 30, 33, 39, 42. There are 10 such numbers."
  },
  {
    "id": 103,
    "question": "Ramya wrote first 110 natural numbers. How many times does she wrote zero? (TSTET 18 Jan 2025)",
    "options": [
      "10",
      "21",
      "20",
      "11"
    ],
    "correctAnswer": 1,
    "explanation": "We need to count the occurrences of the digit '0' in the numbers from 1 to 110.\n\n Step 1: Count zeros in the units place.\n10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110. The digit '0' appears in the units place 11 times.\n\n Step 2: Count zeros in the tens place.\n100, 101, 102, 103, 104, 105, 106, 107, 108, 109. The digit '0' appears in the tens place 10 times.\n\n Step 3: Sum the counts from all places.\nTotal count = (Zeros in units place) + (Zeros in tens place)\nTotal count = 11 + 10 = 21.\nShe wrote the digit zero 21 times."
  },
  {
    "id": 104,
    "question": "An athlete won 10 events out of total number of games. If the win percentage of the athlete is 40, then total number of games is (TSTET 18 Jan 2025)",
    "options": [
      "100",
      "50",
      "20",
      "25"
    ],
    "correctAnswer": 3,
    "explanation": "Let 'T' be the total number of games.\n\n Step 1: Set up the equation based on the given information.\nWe are given that 40% of the total games equals the number of wins, which is 10.\n$40\\% \\text{ of } T = 10$\n\n Step 2: Convert the percentage to a decimal or fraction and solve for T.\n$0.40 \\times T = 10$\n$T = \\frac{10}{0.40}$\n$T = \\frac{1000}{40}$\n$T = 25$\n\nThe total number of games is 25."
  },
  {
    "id": 105,
    "question": "Decimal form of $989 \\frac{29}{10000}$ is (TSTET 18 Jan 2025)",
    "options": [
      "9.8929",
      "989.0029",
      "989.00029",
      "98.90029"
    ],
    "correctAnswer": 1,
    "explanation": "The given number is a mixed fraction, which means it is the sum of a whole number and a proper fraction.\n\n Step 1: Separate the whole number and the fraction.\nThe number is $989 + \\frac{29}{10000}$.\n\n Step 2: Convert the fraction part to its decimal form.\nTo divide 29 by 10000, move the decimal point four places to the left.\n$\\frac{29}{10000} = 0.0029$.\n\n Step 3: Add the whole number and the decimal part.\n$989 + 0.0029 = 989.0029$.\nTherefore, the decimal form is 989.0029."
  },
  {
    "id": 106,
    "question": "Sum of 7 hours 35 minutes, 6 hours 40 minutes and 2 hours 50 minutes is (TSTET 18 Jan 2025)",
    "options": [
      "17 hours 05 minutes",
      "16 hours 55 minutes",
      "17 hours 45 minutes",
      "16 hours 15 minutes"
    ],
    "correctAnswer": 0,
    "explanation": " Step 1: Add the hours and minutes separately.\nSum of hours = $7 + 6 + 2 = 15$ hours.\nSum of minutes = $35 + 40 + 50 = 125$ minutes.\n\n Step 2: Convert the total minutes into hours and minutes.\nSince 60 minutes = 1 hour, we divide 125 by 60.\n$125 \\text{ minutes} = 2 \\times 60 \\text{ minutes} + 5 \\text{ minutes} = 2 \\text{ hours and } 5 \\text{ minutes}$.\n\n Step 3: Add the result from  Step 2 to the sum of hours from  Step 1.\nTotal time = 15 hours + 2 hours 5 minutes = 17 hours 5 minutes."
  },
  {
    "id": 107,
    "question": "Sum of which of the following two fractions is highest? $A=\\frac{2}{7}$ $B=\\frac{5}{9}$ $C=\\frac{1}{5}$ $D=\\frac{3}{11}$ (TSTET 18 Jan 2025)",
    "options": [
      "$B \\& D$",
      "$A \\& B$",
      "$B \\& C$",
      "$A \\& D$"
    ],
    "correctAnswer": 1,
    "explanation": "To find the highest sum, we should first identify the largest fractions by converting them to decimals for easy comparison.\n\n Step 1: Convert fractions to decimals.\n$A = \\frac{2}{7} \\approx 0.286$\n$B = \\frac{5}{9} \\approx 0.556$\n$C = \\frac{1}{5} = 0.200$\n$D = \\frac{3}{11} \\approx 0.273$\n\n Step 2: Identify the two largest fractions.\nBy comparing the decimal values, the largest fraction is B (0.556) and the second largest is A (0.286).\nThe sum of the two largest fractions will be the highest.\n\n Step 3: Calculate the sum for the combination of the two largest fractions (A & B).\n$A + B = \\frac{2}{7} + \\frac{5}{9} = \\frac{18 + 35}{63} = \\frac{53}{63} \\approx 0.841$.\n\nFor completeness, checking other options would yield smaller sums. For example, B + D (the next likely candidate) is $\\frac{5}{9} + \\frac{3}{11} = \\frac{55+27}{99} = \\frac{82}{99} \\approx 0.828$, which is less than A + B."
  },
  {
    "id": 108,
    "question": "$(-0.75)+\\{(-0.5 \\times 2\\frac{2}{5}) \\div \\frac{2}{5}\\} = $ (TSTET 18 Jan 2025)",
    "options": [
      "$2\\frac{3}{4}$",
      "2.25",
      "-3.75",
      "-2.25"
    ],
    "correctAnswer": 2,
    "explanation": "Follow the order of operations (BODMAS/PEMDAS).\n\n Step 1: Solve the expression inside the curly braces first. Convert the mixed number and decimals to fractions.\n$2\\frac{2}{5} = \\frac{12}{5}$\n$-0.5 = -\\frac{1}{2}$\n\n Step 2: Perform the multiplication inside the braces.\n$-\\frac{1}{2} \\times \\frac{12}{5} = -\\frac{12}{10} = -\\frac{6}{5}$\n\n Step 3: Perform the division inside the braces.\n$(-\\frac{6}{5}) \\div \\frac{2}{5} = -\\frac{6}{5} \\times \\frac{5}{2} = -\\frac{6}{2} = -3$\n\n Step 4: Perform the final addition.\n$(-0.75) + (-3) = -0.75 - 3 = -3.75$."
  },
  {
    "id": 109,
    "question": "If the sum of the edges of a cube is 48cm, then the total surface area of the cube (in sq. cm) is (TSTET 18 Jan 2025)",
    "options": [
      "27",
      "16",
      "64",
      "96"
    ],
    "correctAnswer": 3,
    "explanation": " Step 1: Find the length of one edge of the cube.\nA cube has 12 equal edges. Let the length of one edge be 'a'.\nSum of edges = $12 \\times a = 48$ cm.\n$a = \\frac{48}{12} = 4$ cm.\n\n Step 2: Calculate the total surface area (TSA) of the cube.\nThe formula for the TSA of a cube is $6a^2$.\nTSA = $6 \\times (4)^2 = 6 \\times 16 = 96$ sq. cm."
  },
  {
    "id": 110,
    "question": "To construct a unique quadrilateral, the number of independent measurements required are (TSTET 18 Jan 2025)",
    "options": [
      "6",
      "4",
      "5",
      "3"
    ],
    "correctAnswer": 2,
    "explanation": "This is a fundamental concept in geometry. To construct a unique quadrilateral, we need 5 independent measurements. For example, knowing four sides is not enough, as the shape can be flexed (like a rhombus). An additional measurement, such as a diagonal or an angle, is required to fix its shape.\nCommon combinations for a unique quadrilateral include:\n- Four sides and one diagonal.\n- Three sides and two included angles."
  },
  {
    "id": 111,
    "question": "If the side of a square is 4cm. then product of its diagonals length (in sq. cm) is (TSTET 18 Jan 2025)",
    "options": [
      "16",
      "64",
      "8",
      "32"
    ],
    "correctAnswer": 3,
    "explanation": " Step 1: Find the length of one diagonal of the square.\nLet the side of the square be 'a' = 4 cm. Let the diagonal be 'd'.\nThe formula for the diagonal of a square is $d = a\\sqrt{2}$.\n$d = 4\\sqrt{2}$ cm.\n\n Step 2: Find the product of the lengths of the diagonals.\nA square has two diagonals of equal length.\nProduct = $d \\times d = (4\\sqrt{2}) \\times (4\\sqrt{2}) = 16 \\times (\\sqrt{2})^2 = 16 \\times 2 = 32$.\n\nAlternatively, the area of a square is also given by $\\frac{1}{2}d^2$. Since the area is $a^2 = 4^2 = 16$, we have $16 = \\frac{1}{2}d^2$, which gives $d^2 = 32$. The product of the diagonals is $d \\times d = d^2$, so the product is 32."
  },
  {
    "id": 112,
    "question": "The sides of a triangle are 7cm, 24cm and 25cm. Its area (in sq. cm) is (TSTET 18 Jan 2025)",
    "options": [
      "84",
      "49",
      "96",
      "72"
    ],
    "correctAnswer": 0,
    "explanation": " Step 1: Check if the triangle is a right-angled triangle using the converse of the Pythagorean theorem.\nThe sides are a=7, b=24, and c=25.\n$a^2 + b^2 = 7^2 + 24^2 = 49 + 576 = 625$.\n$c^2 = 25^2 = 625$.\nSince $a^2 + b^2 = c^2$, the triangle is a right-angled triangle, and the two shorter sides (7cm and 24cm) are its base and height.\n\n Step 2: Calculate the area of the right-angled triangle.\nThe formula for the area is $\\frac{1}{2} \\times \\text{base} \\times \\text{height}$.\nArea = $\\frac{1}{2} \\times 7 \\times 24 = 7 \\times 12 = 84$ sq. cm."
  },
  {
    "id": 113,
    "question": "A student secured 144 marks in an exam and passed with 48% marks. Total marks of the exam is (TSTET 18 Jan 2025)",
    "options": [
      "200",
      "300",
      "500",
      "400"
    ],
    "correctAnswer": 1,
    "explanation": "Let the total marks of the exam be 'T'.\n\n Step 1: Set up the equation from the given information.\nWe are told that 48% of the total marks is equal to 144.\n$48\\% \\text{ of } T = 144$\n\n Step 2: Convert the percentage to a decimal and solve for T.\n$0.48 \\times T = 144$\n$T = \\frac{144}{0.48}$\n$T = \\frac{14400}{48}$\n$T = 300$\n\nThe total marks for the exam is 300."
  },
  {
    "id": 114,
    "question": "The LCM and HCF of two numbers are 552 and 3 respectively. If the one-third of one number is 23, then the other number is (TSTET 18 Jan 2025)",
    "options": [
      "72",
      "36",
      "24",
      "28"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: Find the first number.\nLet the first number be 'A'. We are given that one-third of this number is 23.\n$\\frac{1}{3} \\times A = 23$\n$A = 23 \\times 3 = 69$.\n\n Step 2: Use the property relating LCM, HCF, and the two numbers.\nThe property is: $\\text{Product of two numbers} = \\text{LCM} \\times \\text{HCF}$.\nLet the other number be 'B'.\n$A \\times B = \\text{LCM} \\times \\text{HCF}$\n$69 \\times B = 552 \\times 3$\n\n Step 3: Solve for the other number, 'B'.\n$69 \\times B = 1656$\n$B = \\frac{1656}{69}$\n$B = 24$\n\nThe other number is 24."
  },
  {
    "id": 115,
    "question": "A student solves the equation $5x+9=24$ and confirms that the answer is correct by substituting the value of x. This reflects the nature of mathematics is: (TSTET 18 Jan 2025)",
    "options": [
      "Speed",
      "Content based on sequential order",
      "Aesthetic feature",
      "Verification nature"
    ],
    "correctAnswer": 3,
    "explanation": "First, the student solves the equation: $5x + 9 = 24 \\implies 5x = 15 \\implies x = 3$. Then, the student substitutes $x=3$ back into the original equation: $5(3) + 9 = 15 + 9 = 24$. This confirms the left side equals the right side. This process of checking a solution by substitution demonstrates the **verification nature** of mathematics, where results and conclusions can be tested and confirmed for their correctness."
  },
  {
    "id": 116,
    "question": "To teach the addition of like fractions, first give some examples and then generalize that \"to add like fractions, add the numerators and keep the denominator the same,\" then the teaching method is: (TSTET 18 Jan 2025)",
    "options": [
      "Synthetic method",
      "Laboratory method",
      "Inductive method",
      "Deductive method"
    ],
    "correctAnswer": 2,
    "explanation": "The teaching method described starts with specific examples and moves towards a general rule or principle. This is the definition of the **Inductive method**. The deductive method is the opposite; it starts with a general rule and then applies it to specific examples. The synthetic method involves combining known facts to discover new ones, and the laboratory method involves hands-on activities."
  },
  {
    "id": 117,
    "question": "\"An examination administered in mathematics of a class at the end of 6 months\", is an example of this evaluation: (TSTET 18 Jan 2025)",
    "options": [
      "Formative evaluation",
      "Summative evaluation",
      "Diagnostic evaluation",
      "Comprehensive evaluation"
    ],
    "correctAnswer": 1,
    "explanation": "Evaluations are categorized based on their purpose and timing.\n- **Formative evaluation** is ongoing assessment during the learning process to monitor student progress.\n- **Summative evaluation** occurs at the end of an instructional period (like a unit, term, or semester) to assess the final learning outcome.\n- **Diagnostic evaluation** is used to identify specific learning difficulties.\nAn exam at the end of a 6-month period is designed to 'sum up' the learning over that time, making it a classic example of **Summative evaluation**."
  },
  {
    "id": 118,
    "question": "Among the following, identify which is/are NOT a roles of a good mathematics teacher in classroom teaching:\nA) Ignoring individual differences in teaching and learning\nB) Making students solve problems after providing understanding of the concepts only\nC) Being confined to textbooks alone\nD) Teaching the present concepts based on the pre-concepts (TSTET 18 Jan 2025)",
    "options": [
      "A & C only",
      "B, C & D only",
      "C & D only",
      "A, B, C & D"
    ],
    "correctAnswer": 0,
    "explanation": "Let's analyze the roles:\n- **A) Ignoring individual differences:** This is poor teaching practice. A good teacher should acknowledge and cater to individual differences. So, this is **NOT** a role of a good teacher.\n- **B) Ensuring conceptual understanding before problem-solving:** This is a fundamental principle of good teaching. This **IS** a role.\n- **C) Being confined to textbooks alone:** A good teacher uses a variety of resources and methods, not just the textbook. So, this is **NOT** a role of a good teacher.\n- **D) Building on prior knowledge:** Connecting new concepts to previous ones is essential for effective learning. This **IS** a role.\nThe statements that are NOT roles of a good teacher are A and C."
  },
  {
    "id": 119,
    "question": "Read the following statements related to a mathematics textbook.\nStatement-I: Mathematics textbook is a reliable teaching tool.\nStatement-II: A good mathematics textbook develops self-learning habits among students.\nChoose the correct answer: (TSTET 18 Jan 2025)",
    "options": [
      "Both the statements are true.",
      "Both the statements are false.",
      "Statement-I is true and Statement-II is false.",
      "Statement-I is false and Statement-II is true."
    ],
    "correctAnswer": 0,
    "explanation": "Statement-I: A well-written, curriculum-aligned textbook is a primary and reliable tool for a teacher to structure lessons and ensure content coverage. This statement is true.\n\nStatement-II: A good textbook with clear explanations, worked examples, and practice exercises enables students to review concepts and practice on their own, thereby fostering self-learning habits. This statement is also true.\n\nSince both statements are correct, the correct option is 'Both the statements are true.'"
  },
  {
    "id": 120,
    "question": "One of the following is NOT relevant to unit plan (TSTET 18 Jan 2025)",
    "options": [
      "The unit can be completed within the stipulated time",
      "The teaching objectives of that unit can be achieved",
      "All the mathematics teaching and learning materials required for an academic year can be collected",
      "The topics of a unit can be taught in a sequence"
    ],
    "correctAnswer": 2,
    "explanation": "A unit plan is a detailed plan for teaching a specific unit or chapter. Let's analyze the options in this context:\n- **Option 1:** Planning the time frame is a key part of a unit plan.\n- **Option 2:** Defining and achieving teaching objectives is the main purpose of a unit plan.\n- **Option 3:** Collecting materials for an entire **academic year** is part of a broader yearly plan or curriculum plan, not a single unit plan. A unit plan would only cover the materials needed for that specific unit.\n- **Option 4:** Sequencing topics within the unit is essential for a logical flow of instruction.\nTherefore, the statement about collecting materials for the entire academic year is NOT relevant to a specific unit plan."
  },
  {
    "id": 121,
    "question": "The Greek Mathematician who gave easy method to find prime numbers from 1 to 100 without actually checking the factors of the number is (TSTET 08 Jan 2025)",
    "options": [
      "Kaprekar",
      "Archimedes",
      "Eratosthenes",
      "Euclid"
    ],
    "correctAnswer": 2,
    "explanation": "The method described is known as the **Sieve of Eratosthenes**. It's an efficient algorithm for finding all prime numbers up to a specified integer. It works by iteratively marking as composite (i.e., not prime) the multiples of each prime, starting with the first prime number, 2. This method was created by the ancient Greek mathematician **Eratosthenes**."
  },
  {
    "id": 122,
    "question": "The square root of the difference between the numbers 7654 and 6133 is: (TSTET 08 Jan 2025)",
    "options": [
      "31",
      "39",
      "41",
      "29"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: Find the difference between the two numbers.\n$7654 - 6133 = 1521$\n\n  Step 2: Calculate the square root of the difference.\n$\\sqrt{1521}$\n\n Step 3: To find the square root, we can estimate. We know that $30^2 = 900$ and $40^2 = 1600$. Since 1521 is closer to 1600, the root will be closer to 40. The last digit is 1, so the root must end in 1 or 9. Let's test 39.\n$39 \\times 39 = 1521$\nTherefore, the square root is 39."
  },
  {
    "id": 123,
    "question": "The perimeter (in cm) of a rectangular shape having $4\\frac{1}{3}$ cm long and $3\\frac{1}{2}$ cm wide is (TSTET 08 Jan 2025)",
    "options": [
      "$7\\frac{1}{6}$",
      "$15\\frac{1}{3}$",
      "$15\\frac{2}{3}$",
      "$7\\frac{5}{6}$"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: The formula for the perimeter of a rectangle is $P = 2 \\times (length + width)$.\n\n Step 2: Convert the mixed fractions for length and width into improper fractions.\nLength (l) = $4\\frac{1}{3} = \\frac{(4 \\times 3) + 1}{3} = \\frac{13}{3}$ cm.\nWidth (w) = $3\\frac{1}{2} = \\frac{(3 \\times 2) + 1}{2} = \\frac{7}{2}$ cm.\n\n Step 3: Add the length and width. Find a common denominator, which is 6.\n$l + w = \\frac{13}{3} + \\frac{7}{2} = \\frac{13 \\times 2}{6} + \\frac{7 \\times 3}{6} = \\frac{26 + 21}{6} = \\frac{47}{6}$ cm.\n\n Step 4: Multiply the sum by 2 to find the perimeter.\n$P = 2 \\times \\frac{47}{6} = \\frac{47}{3}$ cm.\n\n Step 5: Convert the improper fraction back to a mixed number.\n$47 \\div 3 = 15$ with a remainder of 2. So, $P = 15\\frac{2}{3}$ cm."
  },
  {
    "id": 124,
    "question": "15:29 hours in 24 hour clock is expressed in 12 hour clock as (TSTET 08 Jan 2025)",
    "options": [
      "3:29 pm",
      "5:29 am",
      "3:29 am",
      "5:29 pm"
    ],
    "correctAnswer": 0,
    "explanation": "To convert time from a 24-hour clock to a 12-hour clock:\n1. If the hour is between 00 and 11, it remains the same, and 'am' is added.\n2. If the hour is 12, it remains 12, and 'pm' is added.\n3. If the hour is 13 or more, subtract 12 from the hour, and 'pm' is added.\n\nIn this case, the hour is 15. Since it is greater than 12, we subtract 12:\n$15 - 12 = 3$.\nThe minutes remain the same. We add 'pm'.\nSo, 15:29 becomes 3:29 pm."
  },
  {
    "id": 125,
    "question": "Which of the following statements is INCORRECT regarding properties of integers? (TSTET 08 Jan 2025)",
    "options": [
      "Integers satisfy closure property under addition",
      "Integers satisfy the associative property under addition",
      "Integers satisfy closure property under multiplication",
      "Integers satisfy commutative property under subtraction"
    ],
    "correctAnswer": 3,
    "explanation": "Let's analyze each property for integers (a, b, c):\n1.  **Closure under addition**: $a + b$ is always an integer. This is true.\n2.  **Associative under addition**: $(a + b) + c = a + (b + c)$. This is true.\n3.  **Closure under multiplication**: $a \\times b$ is always an integer. This is true.\n4.  **Commutative under subtraction**: $a - b = b - a$. This is false. For example, if $a=5$ and $b=2$, then $5 - 2 = 3$, but $2 - 5 = -3$. Since $3 \\neq -3$, subtraction is not commutative for integers."
  },
  {
    "id": 126,
    "question": "Which of the following figure has more lines of symmetry? (TSTET 08 Jan 2025)",
    "options": [
      "An isosceles triangle",
      "A scalene triangle",
      "An equilateral triangle",
      "A rectangle"
    ],
    "correctAnswer": 2,
    "explanation": "Let's count the lines of symmetry for each shape:\n- **An isosceles triangle**: Has **1** line of symmetry, which bisects the angle between the two equal sides.\n- **A scalene triangle**: Has **0** lines of symmetry, as all sides and angles are different.\n- **An equilateral triangle**: Has **3** lines of symmetry, one from each vertex to the midpoint of the opposite side.\n- **A rectangle**: Has **2** lines of symmetry, one horizontal and one vertical, passing through the center.\n\nComparing the numbers (1, 0, 3, 2), the equilateral triangle has the most lines of symmetry."
  },
  {
    "id": 127,
    "question": "An equilateral triangle is formed by using a wire. The same wire is used to form a square. Thus, if the length of side of equilateral triangle is 5cm more than the length of side of square, then the length of the wire used to form them (in cm) is (TSTET 08 Jan 2025)",
    "options": [
      "55",
      "72",
      "65",
      "60"
    ],
    "correctAnswer": 3,
    "explanation": " Step 1: Define variables. Let 's' be the side length of the square and 't' be the side length of the equilateral triangle.\n\n Step 2: Set up equations based on the problem statement.\nWe are given: $t = s + 5$.\nThe length of the wire is the perimeter. Since the same wire is used, the perimeters are equal.\nPerimeter of square = $4s$.\nPerimeter of equilateral triangle = $3t$.\nSo, $4s = 3t$.\n\n Step 3: Solve the system of equations. Substitute the first equation into the second one.\n$4s = 3(s + 5)$\n$4s = 3s + 15$\n$4s - 3s = 15$\n$s = 15$ cm.\n\n Step 4: Calculate the length of the wire using the perimeter of the square.\nLength of wire = $4s = 4 \\times 15 = 60$ cm."
  },
  {
    "id": 128,
    "question": "If 1296 is expressed as $2^{m} \\times 3^{n}$ then the value of $m \\times n$ is (TSTET 08 Jan 2025)",
    "options": [
      "8",
      "16",
      "24",
      "18"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: Find the prime factorization of 1296.\n$1296 \\div 2 = 648$\n$648 \\div 2 = 324$\n$324 \\div 2 = 162$\n$162 \\div 2 = 81$\n$81 \\div 3 = 27$\n$27 \\div 3 = 9$\n$9 \\div 3 = 3$\n$3 \\div 3 = 1$\nThe prime factorization is $2 \\times 2 \\times 2 \\times 2 \\times 3 \\times 3 \\times 3 \\times 3 = 2^4 \\times 3^4$.\n\n Step 2: Compare the result with the given expression $2^m \\times 3^n$.\nWe can see that $m=4$ and $n=4$.\n\n Step 3: Calculate the value of $m \\times n$.\n$m \\times n = 4 \\times 4 = 16$."
  },
  {
    "id": 129,
    "question": "Which of the following number can be written as n(n+2)(n+4), where n is a natural number? (TSTET 08 Jan 2025)",
    "options": [
      "194",
      "215",
      "49",
      "105"
    ],
    "correctAnswer": 3,
    "explanation": "We need to check which of the options can be represented as a product of three natural numbers where the second number is 2 greater than the first, and the third is 4 greater than the first. Let's test some values for n:\n- If n = 1: $1 \\times (1+2) \\times (1+4) = 1 \\times 3 \\times 5 = 15$\n- If n = 2: $2 \\times (2+2) \\times (2+4) = 2 \\times 4 \\times 6 = 48$\n- If n = 3: $3 \\times (3+2) \\times (3+4) = 3 \\times 5 \\times 7 = 105$\nThis matches one of the options. Therefore, 105 can be written in the given form with n=3."
  },
  {
    "id": 130,
    "question": "$(64)^{\\frac{1}{2}} = $ (TSTET 08 Jan 2025)",
    "options": [
      "4",
      "8",
      "1/4",
      "1/8"
    ],
    "correctAnswer": 1,
    "explanation": "A number raised to the power of $\\frac{1}{2}$ is equivalent to finding its square root. Therefore, we need to find the square root of 64.\n$(64)^{\\frac{1}{2}} = \\sqrt{64} = 8$."
  },
  {
    "id": 131,
    "question": "The smallest fraction among the following is (TSTET 08 Jan 2025)",
    "options": [
      "$\\frac{5}{8}$",
      "$\\frac{5}{11}$",
      "$\\frac{5}{9}$",
      "$\\frac{5}{10}$"
    ],
    "correctAnswer": 1,
    "explanation": "When comparing fractions that have the same numerator, the fraction with the largest denominator will have the smallest value. This is because the whole is being divided into more pieces, making each piece smaller.\nIn this set of fractions ($\\frac{5}{8}, \\frac{5}{11}, \\frac{5}{9}, \\frac{5}{10}$), the numerator is always 5. The denominators are 8, 11, 9, and 10. The largest denominator is 11. Therefore, $\\frac{5}{11}$ is the smallest fraction."
  },
  {
    "id": 132,
    "question": "The prime number among the following is (TSTET 08 Jan 2025)",
    "options": [
      "109",
      "105",
      "111",
      "119"
    ],
    "correctAnswer": 0,
    "explanation": "A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. Let's check each option:\n- **105**: Ends in 5, so it is divisible by 5. Not prime.\n- **111**: The sum of its digits is $1+1+1=3$, which is divisible by 3. So, 111 is divisible by 3 ($111 = 3 \\times 37$). Not prime.\n- **119**: This can be divided by 7 ($119 = 7 \\times 17$). Not prime.\n- **109**: It is not divisible by 2, 3, 5, or 7. To be sure, we only need to check for prime factors up to the square root of 109 (which is slightly more than 10). Since it's not divisible by 2, 3, 5, or 7, it is a prime number."
  },
  {
    "id": 133,
    "question": "The number of millimetres in a Kilometre is (TSTET 08 Jan 2025)",
    "options": [
      "$10^5$",
      "$10^4$",
      "$10^6$",
      "$10^7$"
    ],
    "correctAnswer": 2,
    "explanation": "Let's convert kilometres to millimetres  Step by  Step:\n1.  There are 1,000 metres in 1 kilometre ($1 \\text{ km} = 1000 \\text{ m}$).\n2.  There are 1,000 millimetres in 1 metre ($1 \\text{ m} = 1000 \\text{ mm}$).\n\nTo find the number of millimetres in a kilometre, we multiply these values:\nNumber of mm in 1 km = (metres in a km) $\\times$ (mm in a m)\n$= 1000 \\times 1000 = 1,000,000$.\n\nIn exponential form, 1,000,000 is written as $10^6$."
  },
  {
    "id": 134,
    "question": "$(0.06 \\times 6 \\times 3.1) + (0.7 \\times 13) = $ (TSTET 08 Jan 2025)",
    "options": [
      "10.0216",
      "10.216",
      "11.216",
      "11.0216"
    ],
    "correctAnswer": 1,
    "explanation": "We follow the order of operations (PEMDAS/BODMAS). First, we calculate the expressions inside the parentheses.\n\n Step 1: Calculate the first parenthesis.\n$0.06 \\times 6 = 0.36$\n$0.36 \\times 3.1 = 1.116$\n\n Step 2: Calculate the second parenthesis.\n$0.7 \\times 13 = 9.1$\n\n Step 3: Add the results from the two parentheses.\n$1.116 + 9.1 = 10.216$"
  },
  {
    "id": 135,
    "question": "The product of remainders obtained on dividing 9898 by 11 and 8486 by 12 is (TSTET 08 Jan 2025)",
    "options": [
      "22",
      "16",
      "24",
      "18"
    ],
    "correctAnswer": 3,
    "explanation": " Step 1: Find the remainder when 9898 is divided by 11.\n$9898 \\div 11$\n$98 \\div 11 = 8$ with remainder 10. Bring down 9 to get 109.\n$109 \\div 11 = 9$ with remainder 10. Bring down 8 to get 108.\n$108 \\div 11 = 9$ with remainder 9.\nSo, the first remainder is **9**.\n\n Step 2: Find the remainder when 8486 is divided by 12.\n$8486 \\div 12$\n$84 \\div 12 = 7$ with remainder 0. Bring down 8 to get 8.\n$8 \\div 12 = 0$ with remainder 8. Bring down 6 to get 86.\n$86 \\div 12 = 7$ with remainder 2.\nSo, the second remainder is **2**.\n\n Step 3: Calculate the product of the two remainders.\nProduct = $9 \\times 2 = 18$."
  },
  {
    "id": 136,
    "question": "A lorry can carry 90 quintals of weight. The number of rice bags weighing 50kg each can be carried by that lorry is (TSTET 08 Jan 2025)",
    "options": [
      "45",
      "180",
      "18",
      "450"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: Convert the total carrying capacity of the lorry from quintals to kilograms.\nWe know that 1 quintal = 100 kg.\nTotal capacity = $90 \\text{ quintals} \\times 100 \\text{ kg/quintal} = 9000$ kg.\n\n Step 2: Divide the total capacity by the weight of a single rice bag to find the number of bags.\nWeight of one bag = 50 kg.\nNumber of bags = $\\frac{\\text{Total capacity}}{\\text{Weight of one bag}} = \\frac{9000 \\text{ kg}}{50 \\text{ kg}} = 180$.\n\nThe lorry can carry 180 rice bags."
  },
  {
    "id": 137,
    "question": "Two intersecting lines are perpendicular if the angle between them is (TSTET 08 Jan 2025)",
    "options": [
      "$90^{\\circ}$",
      "$0^{\\circ}$",
      "$180^{\\circ}$",
      "$45^{\\circ}$"
    ],
    "correctAnswer": 0,
    "explanation": "By definition, two lines, rays, or line segments are said to be **perpendicular** to each other if they intersect at a right angle. A right angle measures exactly **$90^{\\circ}$**."
  },
  {
    "id": 138,
    "question": "If a car travels 25 km in 20 minutes with constant speed, then the speed of the car (in km/hr) is (TSTET 08 Jan 2025)",
    "options": [
      "60",
      "90",
      "75",
      "48"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: The formula for speed is Speed = Distance / Time. The question asks for the speed in km/hr, so we must convert the time from minutes to hours.\n\n Step 2: Convert 20 minutes to hours.\nThere are 60 minutes in an hour, so:\nTime in hours = $\\frac{20}{60} = \\frac{1}{3}$ hours.\n\n Step 3: Calculate the speed.\nDistance = 25 km\nTime = $\\frac{1}{3}$ hr\nSpeed = $\\frac{25 \\text{ km}}{1/3 \\text{ hr}} = 25 \\times 3 = 75$ km/hr."
  },
  {
    "id": 139,
    "question": "The number of vertices in a square pyramid is (TSTET 08 Jan 2025)",
    "options": [
      "5",
      "8",
      "6",
      "4"
    ],
    "correctAnswer": 0,
    "explanation": "A square pyramid is a three-dimensional shape with a square base and four triangular faces that meet at a single point above the base, called the apex.\n- The square base has **4** vertices (corners).\n- The apex is **1** vertex.\nTotal number of vertices = 4 (from the base) + 1 (the apex) = **5**."
  },
  {
    "id": 140,
    "question": "18 thousands + 18 hundreds + 18 ones = (TSTET 08 Jan 2025)",
    "options": [
      "181818",
      "19098",
      "19818",
      "190818"
    ],
    "correctAnswer": 2,
    "explanation": "Let's break down the expression and calculate each part:\n- 18 thousands = $18 \\times 1,000 = 18,000$\n- 18 hundreds = $18 \\times 100 = 1,800$\n- 18 ones = $18 \\times 1 = 18$\n\nNow, add these values together:\n$18,000 + 1,800 + 18 = 19,818$."
  },
  {
    "id": 141,
    "question": "If 234234234 is divided by 234, the quotient is (TSTET 08 Jan 2025)",
    "options": [
      "10101",
      "1001001",
      "111",
      "100010001"
    ],
    "correctAnswer": 1,
    "explanation": "This division can be solved by recognizing a pattern or by performing long division.\n\n**Pattern Method:**\nWhen a three-digit number 'abc' is repeated to form 'abcabc', dividing by 'abc' gives 1001. For 'abcabcabc' divided by 'abc', the result is 1001001.\nIn this case, 234 is repeated three times. So, $234234234 \\div 234 = 1001001$.\n\n**Long Division Method:**\n- $234 \\div 234 = 1$\n- Bring down 2. $2 \\div 234 = 0$\n- Bring down 3. $23 \\div 234 = 0$\n- Bring down 4. $234 \\div 234 = 1$\n- Bring down 2. $2 \\div 234 = 0$\n- Bring down 3. $23 \\div 234 = 0$\n- Bring down 4. $234 \\div 234 = 1$\nThe quotient is 1001001."
  },
  {
    "id": 142,
    "question": "The ages of Gagan, Waseem and Philips are 9, 8 and 12 respectively. The sum of their ages will give Anand's age. Suman is 4 years older than Anand. What will be the age of Suman after 4 years? (TSTET 08 Jan 2025)",
    "options": [
      "37",
      "49",
      "33",
      "45"
    ],
    "correctAnswer": 0,
    "explanation": " Step 1: Calculate Anand's current age by summing the ages of the other three.\nAnand's age = $9 + 8 + 12 = 29$ years.\n\n Step 2: Calculate Suman's current age. Suman is 4 years older than Anand.\nSuman's current age = $29 + 4 = 33$ years.\n\n Step 3: Calculate Suman's age after 4 years.\nSuman's age in 4 years = Suman's current age + 4\n$= 33 + 4 = 37$ years."
  },
  {
    "id": 143,
    "question": "The length and breadth of a cuboid is 12 cm and 9 cm respectively. If the total surface area of the cuboid is 636 sq.cm, then the height of the cuboid (in cm) is (TSTET 08 Jan 2025)",
    "options": [
      "15",
      "12",
      "10",
      "18"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: The formula for the Total Surface Area (TSA) of a cuboid is $TSA = 2(lb + bh + hl)$, where l=length, b=breadth, and h=height.\n\n Step 2: Substitute the given values into the formula.\nGiven: $l = 12$ cm, $b = 9$ cm, $TSA = 636$ sq.cm.\n$636 = 2((12 \\times 9) + (9 \\times h) + (h \\times 12))$\n\n Step 3: Simplify and solve for h.\n$636 = 2(108 + 9h + 12h)$\n$636 = 2(108 + 21h)$\nDivide both sides by 2:\n$318 = 108 + 21h$\nSubtract 108 from both sides:\n$318 - 108 = 21h$\n$210 = 21h$\nDivide by 21:\n$h = \\frac{210}{21} = 10$ cm."
  },
  {
    "id": 144,
    "question": "The mean of 15 observations is 24. If the mean of the first 8 observations is 22 and that of the last 8 observations is 26, then the 8th observation is (TSTET 08 Jan 2025)",
    "options": [
      "23",
      "24",
      "22",
      "26"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: Calculate the sum of all 15 observations.\nSum = Mean $\\times$ Number of observations = $24 \\times 15 = 360$.\n\n Step 2: Calculate the sum of the first 8 observations.\nSum of first 8 = $22 \\times 8 = 176$.\n\n Step 3: Calculate the sum of the last 8 observations.\nSum of last 8 = $26 \\times 8 = 208$.\n\n Step 4: The 8th observation is included in both the 'first 8' and 'last 8' groups. If we add the sum of the first 8 and the sum of the last 8, we get the sum of all 15 observations plus an extra count of the 8th observation.\n(Sum of first 8) + (Sum of last 8) = (Sum of all 15) + (8th observation)\n$176 + 208 = 360 + (8th \\text{ observation})$\n$384 = 360 + (8th \\text{ observation})$\n8th observation = $384 - 360 = 24$."
  },
  {
    "id": 145,
    "question": "One among the following is NOT related to mathematization at primary level (TSTET 08 Jan 2025)",
    "options": [
      "Estimating distance between home & school",
      "Expressing daily life problems in mathematical language",
      "Solving problems mechanically",
      "Drawing diagrams using appropriate scale as per the given data"
    ],
    "correctAnswer": 2,
    "explanation": "**Mathematization** is the process of thinking about and representing real-world situations using mathematical concepts and language. It emphasizes understanding, reasoning, and application. The first, second, and fourth options all involve applying mathematical thinking to real-world contexts. **'Solving problems mechanically'** refers to rote learning and applying algorithms without understanding, which is the opposite of the goal of mathematization."
  },
  {
    "id": 146,
    "question": "The academic standard can be assessed through the problem \"In a quadrilateral, the angles are $x^{\\circ}$, $(x+10^{\\circ})$, $(x+20^{\\circ})$, $(x+30^{\\circ})$. Find the angles.\", is: (TSTET 08 Jan 2025)",
    "options": [
      "Problem solving",
      "Reasons & proofs",
      "Communication",
      "Representation - Visualisation"
    ],
    "correctAnswer": 0,
    "explanation": "This task requires the student to apply a known geometric property (sum of angles in a quadrilateral is $360^{\\circ}$) to a novel situation, set up an algebraic equation, solve it, and then use the solution to find the value of each angle. This entire process—from understanding the problem to finding a final solution—is a key indicator of the **Problem Solving** academic standard. It involves more than just reasoning or communication; it's about the entire process of tackling and solving the problem."
  },
  {
    "id": 147,
    "question": "The teaching material that is most suitable to explain the concept of \"2-D geometrical shapes\" among the following is: (TSTET 08 Jan 2025)",
    "options": [
      "Geo board",
      "Abacus",
      "Dominos",
      "Napier Strips"
    ],
    "correctAnswer": 0,
    "explanation": "Let's review the purpose of each tool:\n- **Geo board**: A board with a grid of pegs, around which rubber bands can be stretched to form and explore various 2-D geometric shapes and their properties (like perimeter and area).\n- **Abacus**: A counting frame used for arithmetic operations like addition, subtraction, multiplication, and division.\n- **Dominos**: Tiles used for games involving number recognition, counting, and matching.\n- **Napier's Strips**: A manual calculating device used for multiplication and division.\n\nClearly, the **Geo board** is the most suitable tool for teaching and exploring 2-D geometrical shapes."
  },
  {
    "id": 148,
    "question": "Identify the statements that are related to summative evaluation among the following: A) Used to know what extent the set objectives are achieved after completion of the course B) Assessment for learning C) Used to give grades to students. Choose the correct answer: (TSTET 08 Jan 2025)",
    "options": [
      "A, B & C",
      "A & C only",
      "A & B only",
      "B & C only"
    ],
    "correctAnswer": 1,
    "explanation": "**Summative evaluation** is the assessment *of* learning, which typically happens at the end of an instructional period (e.g., a unit, semester, or course) to measure what students have learned.\n- **Statement A** is a core purpose of summative evaluation: to determine if learning objectives have been met after the course is finished.\n- **Statement B**, 'Assessment *for* learning', is the definition of **formative assessment**, which occurs *during* the learning process to provide feedback and guide instruction.\n- **Statement C** is a primary outcome of summative evaluation: to assign grades, certify achievement, and report to stakeholders.\nTherefore, the statements related to summative evaluation are A and C."
  },
  {
    "id": 149,
    "question": "A student of class II solved $28+15$ as 313. Which of the following has to be re taught to overcome this lapse in learning? A) Addition of one digit by one digit B) Concept of re-grouping C) Place values D) Concept of repeated addition. Choose the correct answer: (TSTET 08 Jan 2025)",
    "options": [
      "A & B only",
      "B & C only",
      "C & D only",
      "A & D only"
    ],
    "correctAnswer": 1,
    "explanation": "The student's error is not in single-digit addition ($8+5=13$ and $2+1=3$ are correct calculations in isolation). The error is in how these results are combined. The student treated each column separately and simply placed the results side-by-side ($3 | 13$), resulting in 313. This reveals two fundamental misunderstandings:\n\n1.  **C) Place values**: The student does not understand that the '1' in the sum '13' represents one ten, not just a digit to be placed in the hundreds column.\n2.  **B) Concept of re-grouping (carrying over)**: The student failed to carry the '1' (ten) from the ones column sum (13) over to the tens column to be added with 2 and 1.\n\nTherefore, the concepts of **Place values** and **Re-grouping** must be retaught."
  },
  {
    "id": 150,
    "question": "The area of a triangle is $220~cm^{2}$, its height is 11 cm. Find its base. The method which is most suitable to solve this problem in the following is: (TSTET 08 Jan 2025)",
    "options": [
      "Analytic method",
      "Project method",
      "Inductive method",
      "Deductive method"
    ],
    "correctAnswer": 0,
    "explanation": "Let's consider the methods:\n- **Deductive method**: Moves from a general rule to a specific example. (e.g., Using the formula $A = \\frac{1}{2}bh$ with given b and h to find A).\n- **Inductive method**: Moves from specific examples to form a general rule.\n- **Analytic method**: Starts with the unknown (what is to be found) and works backward to the known information (what is given). It breaks the problem down into simpler parts.\n\nIn this problem, we start with the unknown, the base (b). We know the formula $A = \\frac{1}{2}bh$. We substitute the known values ($A=220$, $h=11$) to create an equation and solve for the unknown 'b'. This process of starting from the required result and breaking it down using known principles is the **Analytic method**."
  },
  {
    "id": 151,
    "question": "A shopkeeper sold a TV for ₹90000 and gained one-fourth of its cost price. then the cost price of the TV is (TSTET 10 Jan 2025)",
    "options": [
      "₹74000",
      "₹72000",
      "₹75000",
      "₹72250"
    ],
    "correctAnswer": 1,
    "explanation": "Let the Cost Price (CP) of the TV be 'x'.\n\n Step 1: Express the gain in terms of the cost price.\nThe shopkeeper gained one-fourth of the cost price.\nGain = $\\frac{1}{4} \\times CP = \\frac{x}{4}$\n\n Step 2: Use the formula for Selling Price (SP).\nSP = Cost Price + Gain\nSP = $x + \\frac{x}{4}$\n\n Step 3: Combine the terms to find the SP in terms of x.\nSP = $\\frac{4x + x}{4} = \\frac{5x}{4}$\n\n Step 4: Equate this to the given selling price and solve for x.\nWe are given that SP = ₹90,000.\n$\\frac{5x}{4} = 90000$\n$5x = 90000 \\times 4$\n$5x = 360000$\n$x = \\frac{360000}{5}$\n$x = 72000$\n\nTherefore, the cost price of the TV is ₹72,000."
  },
  {
    "id": 152,
    "question": "Read the following statements related to circles. A) A circle has only one centre and one diameter. B) The region enclosed by an arc and two radii joining the centre to the end points of an arc is called a sector of the circle. C) Diameter is also a chord. Choose the correct answer. (TSTET 10 Jan 2025)",
    "options": [
      "B & C only",
      "A & C only",
      "A & B only",
      "A, B & C"
    ],
    "correctAnswer": 0,
    "explanation": "Let's analyze each statement:\n\n* **Statement A: A circle has only one centre and one diameter.**\n    This statement is **incorrect**. While a circle does have only one center, it has an infinite number of diameters (lines passing through the center connecting two points on the circle's edge).\n\n* **Statement B: The region enclosed by an arc and two radii joining the centre to the end points of an arc is called a sector of the circle.**\n    This statement is **correct**. This is the definition of a sector of a circle.\n\n* **Statement C: Diameter is also a chord.**\n    This statement is **correct**. A chord is any line segment connecting two points on a circle's circumference. The diameter is the longest possible chord of a circle.\n\nTherefore, only statements B and C are correct."
  },
  {
    "id": 153,
    "question": "The compound interest on ₹7500 for 2 years at 10% per annum compounded annually is (TSTET 10 Jan 2025)",
    "options": [
      "₹9075",
      "₹1575",
      "₹1500",
      "₹9000"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: Identify the given values.\nPrincipal (P) = ₹7500\nRate of Interest (R) = 10% per annum\nTime (n) = 2 years\n\n Step 2: Use the formula for the amount (A) with compound interest.\n$A = P(1 + \\frac{R}{100})^n$\n\n Step 3: Substitute the values into the formula.\n$A = 7500(1 + \\frac{10}{100})^2$\n$A = 7500(1 + 0.1)^2$\n$A = 7500(1.1)^2$\n$A = 7500 \\times 1.21$\n$A = 9075$\nSo, the total amount after 2 years is ₹9075.\n\n Step 4: Calculate the Compound Interest (CI).\nCI = Amount (A) - Principal (P)\nCI = ₹9075 - ₹7500\nCI = ₹1575\n\nThus, the compound interest is ₹1575."
  },
  {
    "id": 154,
    "question": "The perimeters of a square and a rectangle are equal. If the length and breadth of the rectangle are in the ratio 5: 4 and the side of a square is 45cm., then which of them has greater area and by how much? (TSTET 10 Jan 2025)",
    "options": [
      "Square has greater area by 25 cm²",
      "Rectangle has greater area by 25 cm²",
      "Square has greater area by 1025 cm²",
      "Rectangle has greater area by 1025 cm²"
    ],
    "correctAnswer": 0,
    "explanation": " Step 1: Calculate the perimeter and area of the square.\nSide of the square (s) = 45 cm\nPerimeter of the square = $4 \\times s = 4 \\times 45 = 180$ cm\nArea of the square = $s^2 = 45^2 = 2025$ cm²\n\n Step 2: Find the dimensions of the rectangle.\nPerimeter of the rectangle = Perimeter of the square = 180 cm\nLet the length (l) and breadth (b) of the rectangle be 5x and 4x, respectively.\nPerimeter of rectangle = $2(l+b) = 2(5x + 4x) = 2(9x) = 18x$\nGiven, $18x = 180$, so $x = 10$.\nLength (l) = $5x = 5 \\times 10 = 50$ cm\nBreadth (b) = $4x = 4 \\times 10 = 40$ cm\n\n Step 3: Calculate the area of the rectangle.\nArea of the rectangle = $l \\times b = 50 \\times 40 = 2000$ cm²\n\n Step 4: Compare the areas.\nArea of square = 2025 cm²\nArea of rectangle = 2000 cm²\nThe square has a greater area.\nDifference = $2025 - 2000 = 25$ cm²\n\nTherefore, the square has a greater area by 25 cm²."
  },
  {
    "id": 155,
    "question": "Read the following statements related to fractions. A) In an improper fraction, the numerator is less than the denominator. B) A fraction is said to be in the standard form if its numerator and the denominator are co-primes. Choose the correct answer. (TSTET 10 Jan 2025)",
    "options": [
      "Both the statements A and B are correct.",
      "Both the statements A and B are incorrect.",
      "Statement A is correct and Statement B is incorrect.",
      "Statement A is incorrect and Statement B is correct."
    ],
    "correctAnswer": 3,
    "explanation": "Let's analyze each statement:\n\n* **Statement A: In an improper fraction, the numerator is less than the denominator.**\n    This statement is **incorrect**. An improper fraction is a fraction where the numerator (the top number) is greater than or equal to the denominator (the bottom number). For example, $\\frac{5}{4}$ is an improper fraction. A fraction where the numerator is less than the denominator is called a proper fraction.\n\n* **Statement B: A fraction is said to be in the standard form if its numerator and the denominator are co-primes.**\n    This statement is **correct**. The standard form (or simplest form) of a fraction is when the numerator and denominator have no common factors other than 1. This is the definition of co-prime numbers.\n\nTherefore, Statement A is incorrect and Statement B is correct."
  },
  {
    "id": 156,
    "question": "A bus travels a certain distance in 8 hours at a speed of 45 kmph, then by how much its speed (in kmph) is to be increased so that it takes only 6 hours to cover the same distance is (TSTET 10 Jan 2025)",
    "options": [
      "20",
      "5",
      "10",
      "15"
    ],
    "correctAnswer": 3,
    "explanation": " Step 1: Calculate the total distance traveled by the bus.\nDistance = Speed × Time\nDistance = 45 kmph × 8 hours\nDistance = 360 km\n\n Step 2: Calculate the new speed required to cover the same distance in 6 hours.\nNew Speed = $\\frac{Distance}{New~Time}$\nNew Speed = $\\frac{360~km}{6~hours}$\nNew Speed = 60 kmph\n\n Step 3: Calculate the required increase in speed.\nIncrease in Speed = New Speed - Original Speed\nIncrease in Speed = 60 kmph - 45 kmph\nIncrease in Speed = 15 kmph\n\nSo, the speed needs to be increased by 15 kmph."
  },
  {
    "id": 157,
    "question": "If $x \\neq 0$ and $x \\neq -1$ then $\\frac{50x^{7}-50x^{3}}{(5x+5)(2x^{2}+2)}=$ (TSTET 10 Jan 2025)",
    "options": [
      "$50x^{3}(x-1)$",
      "$50x^{3}(x+1)$",
      "$5x^{3}(x-1)$",
      "$5x^{3}(x+1)$"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: Factor the numerator.\n$50x^7 - 50x^3 = 50x^3(x^4 - 1)$\nUsing the difference of squares formula ($a^2-b^2 = (a-b)(a+b)$), we can factor $(x^4 - 1)$ further.\n$x^4 - 1 = (x^2)^2 - 1^2 = (x^2-1)(x^2+1)$\n$(x^2-1)$ is also a difference of squares: $(x-1)(x+1)$.\nSo, the numerator is $50x^3(x-1)(x+1)(x^2+1)$.\n\n Step 2: Factor the denominator.\n$(5x+5) = 5(x+1)$\n$(2x^2+2) = 2(x^2+1)$\nSo, the denominator is $5(x+1) \\times 2(x^2+1) = 10(x+1)(x^2+1)$.\n\n Step 3: Write the full expression and simplify.\nExpression = $\\frac{50x^3(x-1)(x+1)(x^2+1)}{10(x+1)(x^2+1)}$\n\n Step 4: Cancel the common terms.\nCancel '10' from '50' to get '5'.\nCancel the term '(x+1)' from the numerator and denominator.\nCancel the term '(x^2+1)' from the numerator and denominator.\n\nAfter cancellation, we are left with: $5x^3(x-1)$."
  },
  {
    "id": 158,
    "question": "The letter which have both vertical and horizontal lines of symmetry is (TSTET 10 Jan 2025)",
    "options": [
      "H",
      "M",
      "V",
      "S"
    ],
    "correctAnswer": 0,
    "explanation": "Let's analyze the lines of symmetry for each letter:\n\n* **H**: This letter has a vertical line of symmetry down the middle and a horizontal line of symmetry through the crossbar. Thus, it has both.\n* **M**: This letter has only a vertical line of symmetry.\n* **V**: This letter has only a vertical line of symmetry.\n* **S**: This letter has no lines of symmetry, but it does have point symmetry (rotational symmetry of 180°).\n\nTherefore, the letter 'H' is the one with both vertical and horizontal lines of symmetry."
  },
  {
    "id": 159,
    "question": "If $(81)^{-1/4} \\times 3^n = 36$ and $n \\in \\mathbb{N}$ then $n =$ (TSTET 10 Jan 2025)",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "correctAnswer": 2,
    "explanation": "Note: The question as stated is mathematically incorrect and has no natural number solution for 'n'. The following explanation identifies the error.\n\n Step 1: Simplify the term $(81)^{-1/4}$.\nThe number 81 can be expressed as $3^4$.\nSo, $(81)^{-1/4} = (3^4)^{-1/4}$.\nUsing the exponent rule $(a^m)^n = a^{m \\times n}$, we get:\n$3^{4 \\times (-1/4)} = 3^{-1} = \\frac{1}{3}$.\n\n Step 2: Substitute this value back into the original equation.\n$(\\frac{1}{3}) \\times 3^n = 36$.\n\n Step 3: Solve for n.\n$3^n = 36 \\times 3$\n$3^n = 108$.\n\nThere is no integer 'n' for which $3^n$ equals 108 ($3^4=81$ and $3^5=243$). This indicates a probable typo in the question's value of '36'. However, based on the provided answer key, the intended answer is 7, which would imply $3^{7-1}=3^6=729$ on the left side, not 36. The question is flawed."
  },
  {
    "id": 160,
    "question": "If $\\frac{3x+5}{5x+7}=\\frac{3x-5}{5x-3}$ then $x=$ (TSTET 10 Jan 2025)",
    "options": [
      "-1",
      "1",
      "-2",
      "2"
    ],
    "correctAnswer": 0,
    "explanation": "There are two main methods to solve this equation.\n\n**Method 1: Cross-Multiplication**\n\n Step 1: Cross-multiply the terms.\n$(3x+5)(5x-3) = (3x-5)(5x+7)$\n\n Step 2: Expand both sides of the equation.\n$15x^2 - 9x + 25x - 15 = 15x^2 + 21x - 25x - 35$\n\n Step 3: Simplify both sides.\n$15x^2 + 16x - 15 = 15x^2 - 4x - 35$\n\n Step 4: Solve for x.\nSubtract $15x^2$ from both sides: $16x - 15 = -4x - 35$\nAdd $4x$ to both sides: $20x - 15 = -35$\nAdd 15 to both sides: $20x = -20$\nDivide by 20: $x = -1$\n\n**Method 2: Using Componendo and Dividendo**\n\n Step 1: Rearrange the equation to group similar terms.\n$\\frac{3x+5}{3x-5} = \\frac{5x+7}{5x-3}$\n\n Step 2: Apply the Componendo and Dividendo rule, which states that if $\\frac{a}{b} = \\frac{c}{d}$, then $\\frac{a+b}{a-b} = \\frac{c+d}{c-d}$.\n$\\frac{(3x+5)+(3x-5)}{(3x+5)-(3x-5)} = \\frac{(5x+7)+(5x-3)}{(5x+7)-(5x-3)}$\n\n Step 3: Simplify the numerators and denominators.\n$\\frac{6x}{10} = \\frac{10x+4}{10}$\n\n Step 4: Solve for x.\n$6x = 10x+4$\n$-4 = 4x$\n$x = -1$"
  },
  {
    "id": 161,
    "question": "Read the following statements related to Indian system and International system of numeration. A) 10 lakhs = 1 million B) 10 crores = 1 billion. Choose the correct answer. (TSTET 10 Jan 2025)",
    "options": [
      "Both the statements A and B are incorrect.",
      "Both the statements A and B are correct.",
      "Statement A is incorrect and Statement B is correct.",
      "Statement A is correct and Statement B is incorrect."
    ],
    "correctAnswer": 3,
    "explanation": "Let's analyze each statement by converting them to standard numerical form.\n\n* **Statement A: 10 lakhs = 1 million**\n    * In the Indian system, 1 Lakh = 1,00,000. So, 10 Lakhs = 10,00,000.\n    * In the International system, 1 Million = 1,000,000.\n    * Since 10,00,000 = 1,000,000, **Statement A is correct**.\n\n* **Statement B: 10 crores = 1 billion**\n    * In the Indian system, 1 Crore = 1,00,00,000. So, 10 Crores = 10,00,00,000 (100 million).\n    * In the International system, 1 Billion = 1,000,000,000 (which is 100 crores).\n    * Therefore, 10 crores is not equal to 1 billion. **Statement B is incorrect**.\n\nThus, Statement A is correct and Statement B is incorrect."
  },
  {
    "id": 162,
    "question": "Choose the INCORRECT statement related to properties of integers. (TSTET 10 Jan 2025)",
    "options": [
      "Integers does not satisfy commutative property under subtraction.",
      "'1' is the multiplicative identity of integers.",
      "Integers excluding zero are closed under division.",
      "'0' is the additive identity of integers."
    ],
    "correctAnswer": 2,
    "explanation": "Let's evaluate each statement:\n\n1.  **Integers does not satisfy commutative property under subtraction.** This is **correct**. The commutative property means $a - b = b - a$. For integers, this is not true (e.g., $5 - 2 = 3$ but $2 - 5 = -3$).\n\n2.  **'1' is the multiplicative identity of integers.** This is **correct**. The multiplicative identity is a number which, when multiplied by any element 'a', yields 'a'. For any integer 'a', $a \\times 1 = a$.\n\n3.  **Integers excluding zero are closed under division.** This is **incorrect**. The closure property means that performing an operation on two members of a set results in another member of the same set. If we divide two integers, the result is not always an integer. For example, $3 \\div 2 = 1.5$, which is not an integer. Therefore, integers are not closed under division.\n\n4.  **'0' is the additive identity of integers.** This is **correct**. The additive identity is a number which, when added to any element 'a', yields 'a'. For any integer 'a', $a + 0 = a$.\n\nThe question asks for the INCORRECT statement, which is statement 3."
  },
  {
    "id": 163,
    "question": "If the angles of a triangle are in the ratio 2: 3: 5. then the triangle formed is (TSTET 10 Jan 2025)",
    "options": [
      "an acute angled triangle",
      "an equilateral triangle",
      "a right angled triangle",
      "an isosceles triangle"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: Represent the angles using the given ratio.\nLet the angles of the triangle be $2x$, $3x$, and $5x$.\n\n Step 2: Use the property that the sum of angles in a triangle is 180°.\n$2x + 3x + 5x = 180^{\\circ}$\n$10x = 180^{\\circ}$\n$x = \\frac{180^{\\circ}}{10}$\n$x = 18^{\\circ}$\n\n Step 3: Calculate the measure of each angle.\nFirst angle = $2x = 2 \\times 18^{\\circ} = 36^{\\circ}$\nSecond angle = $3x = 3 \\times 18^{\\circ} = 54^{\\circ}$\nThird angle = $5x = 5 \\times 18^{\\circ} = 90^{\\circ}$\n\n Step 4: Classify the triangle based on its angles.\nA triangle with one angle equal to 90° is called a right-angled triangle. Since the angles are all different, it is also a scalene triangle, but the classification based on angles is 'right-angled'."
  },
  {
    "id": 164,
    "question": "The area of a circle inscribed in a square is 1386 sq.cm., then the area of the square (in sq.cm.) is (Use $\\pi=\\frac{22}{7}$) (TSTET 10 Jan 2025)",
    "options": [
      "441",
      "1764",
      "168",
      "3969"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: Find the radius (r) of the inscribed circle.\nThe formula for the area of a circle is $A = \\pi r^2$.\nGiven, Area = 1386 sq.cm. and $\\pi = \\frac{22}{7}$.\n$1386 = \\frac{22}{7} \\times r^2$\n$r^2 = \\frac{1386 \\times 7}{22}$\n$r^2 = 63 \\times 7$\n$r^2 = 441$\n$r = \\sqrt{441} = 21$ cm\n\n Step 2: Relate the circle's radius to the square's side length.\nFor a circle inscribed in a square, the diameter of the circle is equal to the side length of the square.\nDiameter (d) = $2 \\times r = 2 \\times 21 = 42$ cm\nSide of the square (s) = Diameter = 42 cm\n\n Step 3: Calculate the area of the square.\nThe formula for the area of a square is $A = s^2$.\nArea of the square = $42^2 = 1764$ sq.cm.\n\nTherefore, the area of the square is 1764 sq.cm."
  },
  {
    "id": 165,
    "question": "The wheel of a car makes 150 rotations to cover 39.6 km., then the radius of the wheel (in meters) is (Use $\\pi=\\frac{22}{7}$) (TSTET 10 Jan 2025)",
    "options": [
      "42",
      "21",
      "84",
      "11"
    ],
    "correctAnswer": 0,
    "explanation": " Step 1: Convert the total distance to meters.\nTotal distance = 39.6 km\nSince 1 km = 1000 m, Total distance = $39.6 \\times 1000 = 39600$ meters.\n\n Step 2: Calculate the distance covered in one rotation.\nOne rotation of the wheel covers a distance equal to its circumference.\nDistance per rotation (Circumference) = $\\frac{Total~Distance}{Number~of~Rotations}$\nCircumference = $\\frac{39600}{150} = \\frac{3960}{15} = 264$ meters.\n\n Step 3: Use the circumference formula to find the radius (r).\nThe formula for circumference is $C = 2 \\pi r$.\n$264 = 2 \\times \\frac{22}{7} \\times r$\n$264 = \\frac{44}{7} \\times r$\n$r = \\frac{264 \\times 7}{44}$\nTo simplify, divide 264 by 44. Since $44 \\times 6 = 264$, the fraction simplifies.\n$r = 6 \\times 7$\n$r = 42$ meters.\n\nThe radius of the wheel is 42 meters."
  },
  {
    "id": 166,
    "question": "The mean of the integers between 30 and 60 which are divisible by 3 is (TSTET 10 Jan 2025)",
    "options": [
      "44.25",
      "47",
      "43.5",
      "45"
    ],
    "correctAnswer": 3,
    "explanation": " Step 1: Identify the integers between 30 and 60 that are divisible by 3.\nThese are the multiples of 3 starting from the one just after 30 and ending with the one just before 60.\nThe list is: 33, 36, 39, 42, 45, 48, 51, 54, 57.\n\n Step 2: Calculate the mean (average).\nSince these numbers form an arithmetic progression (a sequence where the difference between consecutive terms is constant), the mean is simply the average of the first and the last term.\nFirst term = 33\nLast term = 57\nMean = $\\frac{First~term + Last~term}{2}$\nMean = $\\frac{33 + 57}{2} = \\frac{90}{2} = 45$.\n\nAlternatively, you can sum all the numbers and divide by the count.\nSum = $33 + 36 + 39 + 42 + 45 + 48 + 51 + 54 + 57 = 405$\nNumber of terms = 9\nMean = $\\frac{405}{9} = 45$."
  },
  {
    "id": 167,
    "question": "The median of perfect squares between 1 and 100 is (TSTET 10 Jan 2025)",
    "options": [
      "25",
      "30.5",
      "36",
      "42.5"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: List all the perfect squares between 1 and 100.\n'Between 1 and 100' means we exclude 1 (which is $1^2$) and 100 (which is $10^2$).\nThe perfect squares are:\n$2^2 = 4$\n$3^2 = 9$\n$4^2 = 16$\n$5^2 = 25$\n$6^2 = 36$\n$7^2 = 49$\n$8^2 = 64$\n$9^2 = 81$\n\n Step 2: Arrange the numbers in ascending order.\nThe list is already in order: 4, 9, 16, 25, 36, 49, 64, 81.\n\n Step 3: Find the median.\nThe number of data points (n) is 8, which is an even number.\nFor an even number of data points, the median is the average of the two middle values. The middle values are the $(\\frac{n}{2})^{th}$ and $(\\frac{n}{2} + 1)^{th}$ terms.\nHere, that is the $(\\frac{8}{2})^{th} = 4^{th}$ term and the $(4+1)^{th} = 5^{th}$ term.\nThe 4th term is 25.\nThe 5th term is 36.\nMedian = $\\frac{25 + 36}{2} = \\frac{61}{2} = 30.5$."
  },
  {
    "id": 168,
    "question": "Choose an INCORRECT statement related to quadrilaterals. (TSTET 10 Jan 2025)",
    "options": [
      "Every diagonal in a parallelogram divides it into two congruent triangles.",
      "A parallelogram in which each angle is 90° is a rectangle.",
      "A rectangle has diagonals of equal length.",
      "A parallelogram in which two adjacent sides are equal is a square."
    ],
    "correctAnswer": 3,
    "explanation": "Let's analyze each statement about quadrilaterals:\n\n1.  **Every diagonal in a parallelogram divides it into two congruent triangles.** This is a fundamental property of a parallelogram. This statement is **correct**.\n\n2.  **A parallelogram in which each angle is 90° is a rectangle.** This is the definition of a rectangle. This statement is **correct**.\n\n3.  **A rectangle has diagonals of equal length.** This is a key property of a rectangle. This statement is **correct**.\n\n4.  **A parallelogram in which two adjacent sides are equal is a square.** This statement is **incorrect**. A parallelogram with equal adjacent sides is a **rhombus**. For a rhombus to be a square, it must also have all its angles equal to 90°.\n\nSince the question asks for the incorrect statement, the answer is the fourth option."
  },
  {
    "id": 169,
    "question": "In $\\triangle ABC$, $\\angle A=30^{\\circ}$, $\\angle B=90^{\\circ}$, $AC=15cm$, $AB=9cm$ and in $\\triangle XYZ$, $\\angle Y=60^{\\circ}$, $\\angle Z=30^{\\circ}$, $XY=12cm$, $XZ=9cm$. Then, choose a correct relation between $\\triangle ABC$ and $\\triangle XYZ$ from the following. (TSTET 10 Jan 2025)",
    "options": [
      "$\\triangle ABC \\cong \\triangle ZXY$ by RHS congruence rule.",
      "$\\triangle ABC \\cong \\triangle XYZ$ by RHS congruence rule.",
      "$\\triangle ABC$ and $\\triangle ZXY$ are not congruent triangles.",
      "Area of $\\triangle ABC$ and area of $\\triangle XYZ$ are not equal."
    ],
    "correctAnswer": 0,
    "explanation": "Note: The given dimensions for $\\triangle ABC$ are inconsistent ($cos(30^{\\circ})$ should be $\\sqrt{3}/2$, but the sides give $9/15 = 3/5$). We will proceed by using the given angles and the valid dimensions of $\\triangle XYZ$ to check for congruence.\n\n Step 1: Find all angles for both triangles.\n* For $\\triangle ABC$: $\\angle A = 30^{\\circ}$, $\\angle B = 90^{\\circ}$, so $\\angle C = 180^{\\circ} - 90^{\\circ} - 30^{\\circ} = 60^{\\circ}$.\n* For $\\triangle XYZ$: $\\angle Y = 60^{\\circ}$, $\\angle Z = 30^{\\circ}$, so $\\angle X = 180^{\\circ} - 60^{\\circ} - 30^{\\circ} = 90^{\\circ}$.\n\n Step 2: Compare the angles and sides by establishing a correspondence between vertices.\nLet's test the correspondence $\\triangle ABC \\leftrightarrow \\triangle ZXY$.\n* Angles:\n    * $\\angle A = 30^{\\circ}$ and $\\angle Z = 30^{\\circ}$. (Match)\n    * $\\angle B = 90^{\\circ}$ and $\\angle X = 90^{\\circ}$. (Match)\n    * $\\angle C = 60^{\\circ}$ and $\\angle Y = 60^{\\circ}$. (Match)\nSince all corresponding angles are equal, the triangles are similar. Now let's check for congruence using sides.\n\n Step 3: Check corresponding sides for the RHS (Right angle-Hypotenuse-Side) congruence rule.\n* **R** (Right angle): $\\angle B = \\angle X = 90^{\\circ}$. (Match)\n* **H** (Hypotenuse): The side opposite the right angle. In $\\triangle ABC$, it's AC. In $\\triangle ZXY$, it's ZY. We need to find ZY in $\\triangle XYZ$. Using Pythagoras' theorem: $ZY^2 = XZ^2 + XY^2 = 9^2 + 12^2 = 81 + 144 = 225$. So, $ZY = 15$ cm. Given $AC = 15$ cm. The hypotenuses are equal. (Match)\n* **S** (Side): One other corresponding side. Let's check the side corresponding to AB, which is ZX. Given $AB = 9$ cm and $XZ = 9$ cm. The sides are equal. (Match)\n\nSince the Right angle, Hypotenuse, and one Side match for the correspondence $\\triangle ABC \\cong \\triangle ZXY$, the triangles are congruent by the RHS rule."
  },
  {
    "id": 170,
    "question": "The greatest five digit number which is divisible by each of the numbers 15, 28 and 35 is (TSTET 10 Jan 2025)",
    "options": [
      "99990",
      "99900",
      "99960",
      "99600"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: Find the Least Common Multiple (LCM) of 15, 28, and 35.\nFirst, find the prime factorization of each number:\n* $15 = 3 \\times 5$\n* $28 = 2^2 \\times 7$\n* $35 = 5 \\times 7$\nTo find the LCM, take the highest power of each prime factor present in the numbers.\nLCM = $2^2 \\times 3 \\times 5 \\times 7 = 4 \\times 3 \\times 5 \\times 7 = 420$.\nAny number divisible by 15, 28, and 35 must be a multiple of their LCM, 420.\n\n Step 2: Find the greatest 5-digit number.\nThe greatest 5-digit number is 99,999.\n\n Step 3: Divide the greatest 5-digit number by the LCM to find the remainder.\n$99999 \\div 420$\n$99999 = (420 \\times 238) + 39$\nThe quotient is 238 and the remainder is 39.\n\n Step 4: Subtract the remainder from the greatest 5-digit number.\nTo find the largest 5-digit number that is perfectly divisible by 420, we subtract the remainder from 99,999.\nRequired Number = $99999 - 39 = 99960$.\n\nThus, 99960 is the greatest five-digit number divisible by 15, 28, and 35."
  },
  {
    "id": 171,
    "question": "Read the following statements related to properties of square numbers. A) The square of an even numbers are even and square of an odd numbers are odd. B) The maximum number of digits in squaring a three-digit number is five. Choose the correct answer. (TSTET 10 Jan 2025)",
    "options": [
      "Both the statements A and B are incorrect.",
      "Statement A is correct and Statement B is incorrect.",
      "Statement A is incorrect and Statement B is correct.",
      "Both the statements A and B are correct."
    ],
    "correctAnswer": 1,
    "explanation": "Let's analyze each statement:\n\n* **Statement A: The square of an even numbers are even and square of an odd numbers are odd.**\n    * An even number can be written as 2n. Its square is $(2n)^2 = 4n^2$, which is always a multiple of 4 and therefore even.\n    * An odd number can be written as 2n+1. Its square is $(2n+1)^2 = 4n^2 + 4n + 1 = 2(2n^2 + 2n) + 1$, which is always odd.\n    * So, **Statement A is correct**.\n\n* **Statement B: The maximum number of digits in squaring a three-digit number is five.**\n    * Let's test the boundaries. The smallest three-digit number is 100. $100^2 = 10,000$, which has 5 digits.\n    * The largest three-digit number is 999. $999^2 = 998,001$, which has 6 digits.\n    * Since the square of a three-digit number can have 6 digits, the statement that the maximum is five is **incorrect**.\n\nTherefore, Statement A is correct and Statement B is incorrect."
  },
  {
    "id": 172,
    "question": "If three cubes each of edge 5cm are joined face to face to form a cuboid, then the total surface area of the resulting cuboid (in sq.cm.) is (TSTET 10 Jan 2025)",
    "options": [
      "750",
      "150",
      "1350",
      "350"
    ],
    "correctAnswer": 3,
    "explanation": " Step 1: Determine the dimensions of the new cuboid.\nWhen three cubes of edge 5 cm are joined end to end, they form a new cuboid. The length of this new cuboid will be the sum of the lengths of the three cubes, while the width and height will remain the same as the edge of a single cube.\n* Length (l) = 5 cm + 5 cm + 5 cm = 15 cm\n* Width (w) = 5 cm\n* Height (h) = 5 cm\n\n Step 2: Use the formula for the Total Surface Area (TSA) of a cuboid.\nTSA = $2 \\times (lw + wh + hl)$\n\n Step 3: Substitute the dimensions into the formula.\nTSA = $2 \\times ((15 \\times 5) + (5 \\times 5) + (5 \\times 15))$\nTSA = $2 \\times (75 + 25 + 75)$\nTSA = $2 \\times (175)$\nTSA = 350 sq.cm.\n\nTherefore, the total surface area of the resulting cuboid is 350 sq.cm."
  },
  {
    "id": 174,
    "question": "Arrange the following numbers in descending order. $\\frac{-2}{3}, \\frac{6}{7}, \\frac{-5}{9}, \\frac{3}{5}$ (TSTET 10 Jan 2025)",
    "options": [
      "$\\frac{3}{5}, \\frac{6}{7}, \\frac{-2}{3}, \\frac{-5}{9}$",
      "$\\frac{6}{7}, \\frac{3}{5}, \\frac{-5}{9}, \\frac{-2}{3}$",
      "$\\frac{3}{5}, \\frac{6}{7}, \\frac{-5}{9}, \\frac{-2}{3}$",
      "$\\frac{6}{7}, \\frac{3}{5}, \\frac{-2}{3}, \\frac{-5}{9}$"
    ],
    "correctAnswer": 1,
    "explanation": "To arrange the fractions in descending order (from largest to smallest), it's easiest to convert them to decimals.\n\n Step 1: Convert each fraction to a decimal.\n* $\\frac{-2}{3} = -0.666...$\n* $\\frac{6}{7} \\approx 0.857$\n* $\\frac{-5}{9} = -0.555...$\n* $\\frac{3}{5} = 0.6$\n\n Step 2: List the decimal values.\nThe values are: -0.666..., 0.857, -0.555..., 0.6\n\n Step 3: Arrange the decimals in descending order.\nStart with the largest positive number and move towards the smallest (most negative) number.\n$0.857 > 0.6 > -0.555... > -0.666...$\n\n Step 4: Replace the decimals with their original fraction forms.\n$\\frac{6}{7} > \\frac{3}{5} > \\frac{-5}{9} > \\frac{-2}{3}$\n\nThe correct descending order is $\\frac{6}{7}, \\frac{3}{5}, \\frac{-5}{9}, \\frac{-2}{3}$."
  },
  {
    "id": 175,
    "question": "A student who does not know the concept of 'subtraction cannot understand the concept of 'division'. This shows the nature of mathematics is: (TSTET 10 Jan 2025)",
    "options": [
      "Speed",
      "Accuracy",
      "Content based on sequential order",
      "Verification nature"
    ],
    "correctAnswer": 2,
    "explanation": "The statement illustrates the hierarchical and logical structure of mathematics. Concepts in mathematics are built upon one another in a specific sequence. Division is often introduced as repeated subtraction (e.g., $12 \\div 3$ is asking how many times you can subtract 3 from 12). Therefore, a firm grasp of subtraction is a prerequisite for understanding division. This demonstrates that mathematics is a subject where content is based on a **sequential order**."
  },
  {
    "id": 176,
    "question": "Students learned the addition of like fractions by using the cut-out paper shapes. Then the teaching method used here is: (TSTET 10 Jan 2025)",
    "options": [
      "Laboratory method",
      "Analytic method",
      "Synthetic method",
      "Deductive method"
    ],
    "correctAnswer": 0,
    "explanation": "The method described involves using physical, hands-on materials (cut-out paper shapes) to explore and understand a mathematical concept. This approach, which emphasizes learning by doing, experimentation, and using concrete aids, is characteristic of the **Laboratory method**. It allows students to discover principles for themselves rather than just being told them (as in a lecture method)."
  },
  {
    "id": 177,
    "question": "An evaluation to determine how much students have learned immediately after teaching the concept of 'ratio' is: (TSTET 10 Jan 2025)",
    "options": [
      "Summative evaluation",
      "Formative evaluation",
      "Prognastic evaluation",
      "Diagnostic evaluation"
    ],
    "correctAnswer": 1,
    "explanation": "The type of evaluation is determined by its purpose and timing.\n* **Formative evaluation:** This is conducted *during* the learning process to monitor student understanding and provide ongoing feedback. An assessment done 'immediately after teaching' a concept serves to inform the teacher about the effectiveness of the lesson and to identify areas where students might need more help. This perfectly fits the description.\n* **Summative evaluation:** This occurs at the *end* of a learning period (like a final exam) to assess overall mastery.\n* **Diagnostic evaluation:** This is used to identify pre-existing knowledge or specific learning difficulties, often *before* instruction begins.\n* **Prognostic evaluation:** This aims to predict future performance.\n\nTherefore, this is a **formative evaluation**."
  },
  {
    "id": 178,
    "question": "Identify the role/s of a good mathematics teacher in classroom among the following: A) Teaching the present concepts based on the pre-concepts B) Making students solve problems in the exercises without providing understanding of the concepts C) Teaching according to individual differences D) Providing the teaching and learning activities from concrete to abstract. Choose the correct answer: (TSTET 10 Jan 2025)",
    "options": [
      "A & C only",
      "B, C & D only",
      "A, C & D only",
      "A, B, C & D"
    ],
    "correctAnswer": 2,
    "explanation": "Let's evaluate each statement:\n\n* **A) Teaching the present concepts based on the pre-concepts:** This is a core principle of effective teaching. New knowledge should always be linked to prior learning. This is a **correct** role.\n* **B) Making students solve problems in the exercises without providing understanding of the concepts:** This promotes rote memorization and is the opposite of good teaching practice. Understanding must come before procedural practice. This is an **incorrect** role.\n* **C) Teaching according to individual differences:** Recognizing that students learn at different paces and in different ways (differentiated instruction) is the mark of a good teacher. This is a **correct** role.\n* **D) Providing the teaching and learning activities from concrete to abstract:** This is a well-established pedagogical principle (e.g., Bruner's theory) that helps students build a solid conceptual foundation by starting with physical objects before moving to symbolic representations. This is a **correct** role.\n\nTherefore, the correct roles are A, C, and D."
  },
  {
    "id": 179,
    "question": "Read the following statements related to a mathematics textbook. Statement-I: A mathematics textbook is meant to be followed by teachers only. Statement-II: A good mathematics textbook helps develop teachers' teaching abilities. Choose the correct answer: (TSTET 10 Jan 2025)",
    "options": [
      "Both the statements are true.",
      "Both the statements are false.",
      "Statement-I is true and Statement-II is false.",
      "Statement-I is false and Statement-II is true."
    ],
    "correctAnswer": 3,
    "explanation": "Let's analyze the statements:\n\n* **Statement-I: A mathematics textbook is meant to be followed by teachers only.** This is **false**. Textbooks are primary learning resources for students. While teachers use them extensively for planning and instruction, they are not exclusively for teacher use.\n\n* **Statement-II: A good mathematics textbook helps develop teachers' teaching abilities.** This is **true**. A well-structured textbook provides a logical sequence of topics, clear explanations, varied examples, and practice problems. It can serve as a valuable guide for teachers, helping them to structure their lessons effectively and improve their instructional strategies.\n\nTherefore, Statement-I is false and Statement-II is true."
  },
  {
    "id": 180,
    "question": "Point to be kept in mind while preparing the year plan among the following is: (TSTET 10 Jan 2025)",
    "options": [
      "Number of earned leaves of teachers",
      "Number of school working days",
      " Steps to be followed in period plan",
      " Steps to be followed in unit plan"
    ],
    "correctAnswer": 1,
    "explanation": "A year plan (or annual plan) is a long-term plan that outlines how the entire curriculum will be covered over the course of the academic year. To create a realistic and effective year plan, the most critical piece of information is the total time available for instruction.\n\n* **Number of school working days:** This directly determines the timeframe for planning. A teacher needs to know how many days are available for teaching, revision, activities, and assessments to allocate the syllabus appropriately.\n* The other options are incorrect because:\n    * `Number of earned leaves` is an individual administrative matter, not a basis for curriculum planning.\n    * ` Steps in a period plan` and ` Steps in a unit plan` are details related to short-term (daily and chapter-wise) planning, which are components within the larger year plan, not the primary consideration for creating it."
  },
  {
    "id": 181,
    "question": "Read the statements related to Indian system and International system of numeration. A) 99838445-Nine crore ninety eight lakhs thirty eight thousand four hundred forty five in Indian system of numeration. B) 99838445-Ninety nine million eight hundred thirty eight thousand four hundred forty five in International system of numeration. Choose the correct answer. (TSTET 18 Jan 2025)",
    "options": [
      "Both the statements A and B are incorrect.",
      "Statement A is correct and Statement B is incorrect.",
      "Statement A is incorrect and Statement B is correct.",
      "Both the statements A and B are correct."
    ],
    "correctAnswer": 3,
    "explanation": " Step 1: Analyze Statement A according to the Indian system of numeration.\nThe number 99838445 is written with commas as 9,98,38,445. Reading this gives 'Nine crore, ninety-eight lakh, thirty-eight thousand, four hundred forty-five'. Statement A is correct.\n\n Step 2: Analyze Statement B according to the International system of numeration.\nThe number 99838445 is written with commas as 99,838,445. Reading this gives 'Ninety-nine million, eight hundred thirty-eight thousand, four hundred forty-five'. Statement B is correct.\n\n Step 3: Conclude the result.\nSince both statements A and B are correct, the correct option is 4."
  },
  {
    "id": 182,
    "question": "One kilometer is equal to how many millimeters? (TSTET 18 Jan 2025)",
    "options": [
      "$10^{6}$",
      "$10^{5}$",
      "$10^{4}$",
      "$10^{3}$"
    ],
    "correctAnswer": 0,
    "explanation": " Step 1: Convert kilometers to meters.\n1 kilometer (km) = 1,000 meters (m) = $10^3$ m.\n\n Step 2: Convert meters to millimeters.\n1 meter (m) = 1,000 millimeters (mm) = $10^3$ mm.\n\n Step 3: Combine the conversions.\n1 km = (1000 m) $\\times$ (1000 mm/m) = 1,000,000 mm.\nIn exponential form, this is $10^6$ mm."
  },
  {
    "id": 183,
    "question": "Choose an INCORRECT statement related to prime numbers from the following. (TSTET 18 Jan 2025)",
    "options": [
      "17 and 71 are prime numbers.",
      "There are three prime numbers between 80 and 100.",
      "18 and 42 is a pair of co-primes.",
      "The greatest two-digit prime number is 97."
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: Evaluate each statement.\n1. 17 and 71 are only divisible by 1 and themselves. This statement is correct.\n2. The prime numbers between 80 and 100 are 83, 89, and 97. There are three of them. This statement is correct.\n3. Two numbers are co-prime if their greatest common divisor (GCD) is 1. The factors of 18 are (1, 2, 3, 6, 9, 18) and the factors of 42 are (1, 2, 3, 6, 7, 14, 21, 42). The GCD is 6. Since the GCD is not 1, they are not co-primes. This statement is incorrect.\n4. 97 is a prime number, and it is the largest two-digit prime. This statement is correct.\n\n Step 2: Identify the incorrect statement.\nThe statement '18 and 42 is a pair of co-primes' is incorrect."
  },
  {
    "id": 185,
    "question": "Rational numbers are NOT closed under which operation? (TSTET 18 Jan 2025)",
    "options": [
      "Addition",
      "Subtraction",
      "Multiplication",
      "Division"
    ],
    "correctAnswer": 3,
    "explanation": "The closure property means that when you perform an operation on two numbers from a set, the result is also in that set.\n- Addition, Subtraction, and Multiplication of any two rational numbers always result in another rational number.\n- Division of two rational numbers is not always a rational number because division by zero is undefined. For example, if you divide the rational number 5 by the rational number 0, the result is not defined and therefore not a rational number. Thus, the set of rational numbers is not closed under division."
  },
  {
    "id": 186,
    "question": "$(8\\times2\\frac{1}{7})+(16\\times1\\frac{3}{5})=$ (TSTET 18 Jan 2025)",
    "options": [
      "$42\\frac{26}{35}$",
      "$42\\frac{7}{35}$",
      "$42\\frac{201}{35}$",
      "$42\\frac{6}{5}$"
    ],
    "correctAnswer": 0,
    "explanation": " Step 1: Convert mixed numbers to improper fractions.\n$2\\frac{1}{7} = \\frac{15}{7}$\n$1\\frac{3}{5} = \\frac{8}{5}$\n\n Step 2: Perform the multiplications.\nFirst part: $8 \\times \\frac{15}{7} = \\frac{120}{7}$\nSecond part: $16 \\times \\frac{8}{5} = \\frac{128}{5}$\n\n Step 3: Add the results.\n$\\frac{120}{7} + \\frac{128}{5}$\nFind a common denominator (35):\n$\\frac{120 \\times 5}{35} + \\frac{128 \\times 7}{35} = \\frac{600}{35} + \\frac{896}{35} = \\frac{1496}{35}$\n\n Step 4: Convert the improper fraction back to a mixed number.\n$1496 \\div 35 = 42$ with a remainder of 26. So, the result is $42\\frac{26}{35}$."
  },
  {
    "id": 187,
    "question": "The period and periodicity of a number 271.919191.... are 'p' and 'q' respectively, then the value of $p^q$ is (TSTET 18 Jan 2025)",
    "options": [
      "9191",
      "1828",
      "8281",
      "1919"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: Identify the period (p).\nThe period is the block of digits that repeats after the decimal point. In 271.919191..., the repeating block is '91'. So, $p = 91$.\n\n Step 2: Identify the periodicity (q).\nThe periodicity is the number of digits in the period. The period '91' has 2 digits. So, $q = 2$.\n\n Step 3: Calculate $p^q$.\nWe need to calculate $91^2$.\n$91^2 = 91 \\times 91 = 8281$."
  },
  {
    "id": 188,
    "question": "In an exam Rahul, Anuj and Ishika got marks in the ratio 6: 5: 7. If Anuj got 60 marks, then the marks scored by Ishika is (TSTET 18 Jan 2025)",
    "options": [
      "72",
      "84",
      "78",
      "66"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: Set up the relationship.\nThe ratio of marks is Rahul : Anuj : Ishika = 6 : 5 : 7. Let the common multiplier be 'x'. Their marks are 6x, 5x, and 7x.\n\n Step 2: Find the value of 'x' using Anuj's marks.\nAnuj's marks correspond to the ratio part '5', so $5x = 60$.\n$x = \\frac{60}{5} = 12$.\n\n Step 3: Calculate Ishika's marks.\nIshika's marks correspond to the ratio part '7'. So, her marks are 7x.\nIshika's marks = $7 \\times 12 = 84$."
  },
  {
    "id": 189,
    "question": "In 4 years, ₹5600 amount to ₹7560 at a certain rate of simple interest, then the time taken (in years) for ₹8000 to amount ₹11500 at the same rate of simple interest is (TSTET 18 Jan 2025)",
    "options": [
      "5",
      "6",
      "$4\\frac{2}{3}$",
      "$5\\frac{1}{3}$"
    ],
    "correctAnswer": 0,
    "explanation": " Step 1: Find the rate of interest (R).\nPrincipal ($P_1$) = ₹5600, Amount ($A_1$) = ₹7560, Time ($T_1$) = 4 years.\nSimple Interest ($SI_1$) = $A_1 - P_1 = 7560 - 5600 = ₹1960$.\nUsing the formula $SI = \\frac{P \\times T \\times R}{100}$:\n$1960 = \\frac{5600 \\times 4 \\times R}{100} \\implies R = \\frac{1960 \\times 100}{5600 \\times 4} = 8.75\\%$.\n\n Step 2: Find the time taken ($T_2$) for the second case.\nPrincipal ($P_2$) = ₹8000, Amount ($A_2$) = ₹11500.\nSimple Interest ($SI_2$) = $A_2 - P_2 = 11500 - 8000 = ₹3500$.\nThe rate R is the same, 8.75%.\nUsing the formula $T = \\frac{SI \\times 100}{P \\times R}$:\n$T_2 = \\frac{3500 \\times 100}{8000 \\times 8.75} = \\frac{350000}{70000} = 5$ years."
  },
  {
    "id": 190,
    "question": "If $3^{-2}=\\frac{1}{3^{m}}$ and $(2^{3})^{8}=2^{6n}(m,n\\in\\mathbb{N})$ then the value of $m^n - n^m$ is (TSTET 18 Jan 2025)",
    "options": [
      "1/32",
      "0",
      "32",
      "15/4"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: Solve for m.\nGiven $3^{-2}=\\frac{1}{3^{m}}$.\nBy the rule of negative exponents, $3^{-2} = \\frac{1}{3^2}$.\nComparing $\\frac{1}{3^2}$ with $\\frac{1}{3^m}$, we get $m = 2$.\n\n Step 2: Solve for n.\nGiven $(2^{3})^{8}=2^{6n}$.\nBy the power of a power rule, $(2^3)^8 = 2^{3 \\times 8} = 2^{24}$.\nSo, $2^{24} = 2^{6n}$.\nEquating the exponents: $24 = 6n \\implies n = 4$.\n\n Step 3: Calculate $m^n - n^m$.\nSubstitute $m=2$ and $n=4$: $2^4 - 4^2 = 16 - 16 = 0$."
  },
  {
    "id": 191,
    "question": "One of the exterior angles of a triangle is $95^{\\circ}$ and the interior opposite angles are in the ratio 7:12. then the angles of a triangle are (TSTET 18 Jan 2025)",
    "options": [
      "$45^{\\circ}, 75^{\\circ}, 60^{\\circ}$",
      "$25^{\\circ}, 70^{\\circ}, 85^{\\circ}$",
      "$35^{\\circ}, 60^{\\circ}, 85^{\\circ}$",
      "$40^{\\circ}, 85^{\\circ}, 55^{\\circ}$"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: Use the Exterior Angle Theorem.\nThe exterior angle of a triangle is equal to the sum of its two interior opposite angles.\nLet the interior opposite angles be 7x and 12x.\n$7x + 12x = 95^{\\circ}$.\n\n Step 2: Solve for x.\n$19x = 95^{\\circ} \\implies x = \\frac{95}{19} = 5$.\n\n Step 3: Find the two interior angles.\nFirst angle = $7x = 7 \\times 5 = 35^{\\circ}$.\nSecond angle = $12x = 12 \\times 5 = 60^{\\circ}$.\n\n Step 4: Find the third angle of the triangle.\nThe sum of angles in a triangle is $180^{\\circ}$.\nThird angle = $180^{\\circ} - (35^{\\circ} + 60^{\\circ}) = 180^{\\circ} - 95^{\\circ} = 85^{\\circ}$.\nThe angles are $35^{\\circ}, 60^{\\circ}, 85^{\\circ}$."
  },
  {
    "id": 192,
    "question": "If Aruna and Padma together can do a piece of work in 20 days, while Padma alone can finish it in 60 days, then the number of days Aruna alone can finish that work is (TSTET 18 Jan 2025)",
    "options": [
      "25",
      "20",
      "40",
      "30"
    ],
    "correctAnswer": 3,
    "explanation": " Step 1: Express the work rates.\nRate is the fraction of work done per day.\n(Aruna + Padma)'s rate = 1/20 of the work per day.\nPadma's rate = 1/60 of the work per day.\n\n Step 2: Find Aruna's rate.\nAruna's rate = (Aruna + Padma)'s rate - Padma's rate.\nAruna's rate = $\\frac{1}{20} - \\frac{1}{60}$.\n\n Step 3: Calculate the value.\nTo subtract, find a common denominator (60).\nAruna's rate = $\\frac{3}{60} - \\frac{1}{60} = \\frac{2}{60} = \\frac{1}{30}$.\n\n Step 4: Determine the time taken by Aruna.\nIf Aruna's rate is 1/30 of the work per day, she will take 30 days to complete the work alone."
  },
  {
    "id": 193,
    "question": "Choose an INCORRECT statement related to measures of central tendency. (TSTET 18 Jan 2025)",
    "options": [
      "The arithmetic mean always lies between the highest and lowest observations of the data.",
      "Median does not depend on number of observations.",
      "Mode depends neither on number of observations nor values of all observations.",
      "If each observation in a data set is repeated equal number of times then the data set has no mode."
    ],
    "correctAnswer": 1,
    "explanation": "Let's analyze the statements:\n1. Mean: The average of a dataset must fall within its range (between the minimum and maximum values). This is correct.\n2. Median: The median is the middle value. Its position is found using the number of observations (n). For odd n, it's the $((n+1)/2)^{th}$ value; for even n, it's the average of the $(n/2)^{th}$ and $(n/2+1)^{th}$ values. Thus, the median heavily depends on the number of observations. This statement is **incorrect**.\n3. Mode: The mode is the most frequent value. It is determined by frequency, not the total count or all the values. This is correct.\n4. No Mode: If all values occur with the same frequency, no single value is the 'most' frequent. Hence, the dataset has no mode. This is correct."
  },
  {
    "id": 194,
    "question": "Arpita scored 88 marks in 3 subjects. 76 marks in 1 subject and 82 marks in 2 subjects, then the average marks scored by Arpita is (TSTET 18 Jan 2025)",
    "options": [
      "84",
      "82",
      "88",
      "76"
    ],
    "correctAnswer": 0,
    "explanation": " Step 1: Calculate the total sum of marks.\n- From 3 subjects: $3 \\times 88 = 264$\n- From 1 subject: $1 \\times 76 = 76$\n- From 2 subjects: $2 \\times 82 = 164$\n- Total Marks = $264 + 76 + 164 = 504$.\n\n Step 2: Calculate the total number of subjects.\n- Total Subjects = $3 + 1 + 2 = 6$.\n\n Step 3: Calculate the average.\n- Average = Total Marks / Total Subjects = $504 / 6 = 84$."
  },
  {
    "id": 195,
    "question": "Choose the correct statement related to lines of symmetry from the following. (TSTET 18 Jan 2025)",
    "options": [
      "A parallelogram has two lines of symmetry.",
      "A rectangle has four lines of symmetry.",
      "An isosceles triangle has one line of symmetry.",
      "A rhombus has four lines of symmetry."
    ],
    "correctAnswer": 2,
    "explanation": "Let's evaluate each shape:\n- A general parallelogram has 0 lines of symmetry (it has rotational symmetry).\n- A rectangle has 2 lines of symmetry.\n- An isosceles triangle (which is not equilateral) has 1 line of symmetry.\n- A rhombus has 2 lines of symmetry (its diagonals).\nTherefore, the only correct statement is 'An isosceles triangle has one line of symmetry'."
  },
  {
    "id": 196,
    "question": "A dishwasher is sold for ₹45000 at a loss of 20%, to gain 15% it should be sold at a price of (TSTET 18 Jan 2025)",
    "options": [
      "₹56250",
      "₹64687.50",
      "₹57500.25",
      "₹64450"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: Find the Cost Price (CP).\nThe item was sold at a 20% loss, meaning the selling price (₹45,000) is 80% of the cost price.\n$CP \\times (1 - 0.20) = 45000 \\implies CP \\times 0.8 = 45000$.\n$CP = \\frac{45000}{0.8} = ₹56,250$.\n\n Step 2: Calculate the new Selling Price (SP) for a 15% gain.\nNew SP = $CP \\times (1 + 0.15) = 56250 \\times 1.15$.\nNew SP = ₹64,687.50."
  },
  {
    "id": 197,
    "question": "Water is filled into a cuboidal reservoir at the rate of 50 litres per minute. If the volume of reservoir is $378~m^{3}$ then the number of hours it will take to fill the reservoir is (TSTET 18 Jan 2025)",
    "options": [
      "80",
      "26",
      "126",
      "105"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: Convert the reservoir's volume to litres.\nWe know that $1~m^3 = 1000$ litres.\nVolume = $378~m^3 = 378 \\times 1000 = 378,000$ litres.\n\n Step 2: Calculate the total time in minutes.\nTime = Total Volume / Rate = $\\frac{378000 \\text{ litres}}{50 \\text{ litres/minute}} = 7560$ minutes.\n\n Step 3: Convert minutes to hours.\nTime in hours = $\\frac{7560 \\text{ minutes}}{60 \\text{ minutes/hour}} = 126$ hours."
  },
  {
    "id": 198,
    "question": "Read the following situations where principle of similarity is used. A) Engineers draw elevation plans, similar to the building to be constructed. B) To estimate the heights of the objects located far away. Choose the correct answer (TSTET 18 Jan 2025)",
    "options": [
      "Both the statements A and B are correct",
      "Only Statement A is correct",
      "Only Statement B is correct",
      "Both the statements A and B are incorrect"
    ],
    "correctAnswer": 0,
    "explanation": "Both statements describe practical applications of geometric similarity.\n- A) Engineering and architectural plans are scale models, which are mathematically similar to the actual structures.\n- B) The height of distant objects (like a tree or building) is often calculated by using similar triangles formed by shadows or by using surveying instruments that rely on principles of similar triangles.\nSince both statements are true, the correct answer is that both A and B are correct."
  },
  {
    "id": 200,
    "question": "In a clock, the length of the hour hand is 14cm, then the area (in sq. cm) covered by hour hand in 6 hours is ($Use~\\pi=\\frac{22}{7}$) (TSTET 18 Jan 2025)",
    "options": [
      "77",
      "616",
      "154",
      "308"
    ],
    "correctAnswer": 3,
    "explanation": " Step 1: Determine the angle swept by the hour hand.\nAn hour hand completes a full circle ($360^{\\circ}$) in 12 hours. In 6 hours, it sweeps half a circle, which is $\\frac{6}{12} \\times 360^{\\circ} = 180^{\\circ}$.\n\n Step 2: Calculate the area of the sector formed.\nThe area covered is a semi-circle. The formula for the area of a sector is $(\\frac{\\theta}{360}) \\times \\pi r^2$.\nRadius (r) = 14 cm.\nArea = $(\\frac{180}{360}) \\times \\frac{22}{7} \\times 14^2 = \\frac{1}{2} \\times \\frac{22}{7} \\times 196$.\nArea = $11 \\times \\frac{196}{7} = 11 \\times 28 = 308$ sq. cm."
  },
  {
    "id": 201,
    "question": "Choose a pair of regular polyhedron 3D objects from the following. (TSTET 18 Jan 2025)",
    "options": [
      "Cube and Triangular pyramid",
      "Cube and Cuboid",
      "Square pyramid and Triangular pyramid",
      "Cuboid and Square pyramid"
    ],
    "correctAnswer": 0,
    "explanation": "A regular polyhedron (or Platonic Solid) is a 3D shape where all faces are identical regular polygons, and the same number of faces meet at each vertex.\n- A **Cube** has 6 identical square faces, so it is a regular polyhedron.\n- A **Triangular pyramid** with all 4 faces as identical equilateral triangles is a regular tetrahedron, which is also a regular polyhedron.\n- A Cuboid has rectangular faces, and a Square pyramid has non-identical faces, so they are not regular polyhedrons. Therefore, the correct pair is 'Cube and Triangular pyramid' (assuming the latter refers to a regular tetrahedron)."
  },
  {
    "id": 202,
    "question": "Read the following statements related to construction of quadrilaterals. A) A unique parallelogram can be constructed when measurements of two adjacent sides and an included angle are given. B) A unique rectangle can be constructed when measurements of one side and diagonal are given. C) A unique rhombus can be constructed when measurements of two diagonals are given. Choose the correct answer. (TSTET 18 Jan 2025)",
    "options": [
      "B & C only",
      "A & B only",
      "A, B & C",
      "A & C only"
    ],
    "correctAnswer": 2,
    "explanation": "Let's analyze the statements:\nA) **Parallelogram:** Knowing two adjacent sides and the included angle (SAS) defines a unique triangle. Since opposite sides are equal and parallel, the entire parallelogram is uniquely determined. Correct.\nB) **Rectangle:** Knowing one side and the diagonal defines a right-angled triangle (since all angles in a rectangle are 90°). This uniquely determines the adjacent side, and thus the whole rectangle. Correct.\nC) **Rhombus:** The diagonals of a rhombus bisect each other at right angles. Knowing their lengths is sufficient to uniquely construct the rhombus. Correct.\nSince all three statements are correct, the answer is A, B & C."
  },
  {
    "id": 203,
    "question": "$45ab(a^{2}-8a+12)\\div3b(a-6)=$ (TSTET 18 Jan 2025)",
    "options": [
      "$15a(a-3)$",
      "$15a(a+2)$",
      "$15(a-2)$",
      "$15a(a-2)$"
    ],
    "correctAnswer": 3,
    "explanation": " Step 1: Write the expression as a fraction.\n$\\frac{45ab(a^2 - 8a + 12)}{3b(a-6)}$\n\n Step 2: Factor the quadratic term $a^2 - 8a + 12$.\nWe need two numbers that multiply to 12 and add to -8. The numbers are -2 and -6. So, the factored form is $(a-2)(a-6)$.\n\n Step 3: Substitute and simplify.\n$\\frac{45ab(a-2)(a-6)}{3b(a-6)}$\n\n Step 4: Cancel common terms.\n- $\\frac{45}{3} = 15$\n- $\\frac{b}{b} = 1$\n- $\\frac{(a-6)}{(a-6)} = 1$\n\nThe remaining terms are $15, a,$ and $(a-2)$. The result is $15a(a-2)$."
  },
  {
    "id": 204,
    "question": "In a trapezium ABCD, AB||CD and area of the trapezium is $540cm^{2}$. The distance between the parallel sides AB and CD is 6cm and the parallel sides AB and CD are in the ratio 1: 2 respectively, then the length of the side CD (in cm) is (TSTET 18 Jan 2025)",
    "options": [
      "60",
      "120",
      "30",
      "180"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: Use the formula for the area of a trapezium: Area = $\\frac{1}{2} \\times (\\text{sum of parallel sides}) \\times \\text{height}$.\n\n Step 2: Define the parallel sides based on the ratio.\nLet the sides be AB = x and CD = 2x. The height (h) is 6 cm.\n\n Step 3: Substitute the values into the formula.\n$540 = \\frac{1}{2} \\times (x + 2x) \\times 6$\n$540 = \\frac{1}{2} \\times (3x) \\times 6$\n$540 = 3x \\times 3$\n$540 = 9x$\n\n Step 4: Solve for x.\n$x = \\frac{540}{9} = 60$ cm.\n\n Step 5: Find the length of CD.\nThe question asks for the length of CD, which is 2x. CD = $2 \\times 60 = 120$ cm."
  },
  {
    "id": 205,
    "question": "Why does a math teacher use real-life examples as teaching resources? (TSTET 18 Jan 2025)",
    "options": [
      "To reduce students' engagement in problem-solving.",
      "To focus only on the theoretical aspects of math.",
      "To simplify abstract mathematical concepts.",
      "To avoid critical thinking about math problems."
    ],
    "correctAnswer": 2,
    "explanation": "Using real-life examples is a pedagogical technique to make learning more effective. Abstract mathematical ideas can be challenging for students to understand. By connecting them to familiar, real-world situations (like shopping, cooking, or sports), teachers can make the concepts more concrete, relatable, and easier to grasp. This helps bridge the gap between abstract theory and practical understanding, thus simplifying the concepts."
  },
  {
    "id": 206,
    "question": "This is an example of a formative assessment tool in the planning of mathematics teaching: (TSTET 18 Jan 2025)",
    "options": [
      "A final exam administered at an academic level",
      "A diagnostic test administered in math learning",
      "Mathematical quizzes administered in the classroom",
      "A standardized test administered at an academic level"
    ],
    "correctAnswer": 2,
    "explanation": "Formative assessment is used during the learning process to monitor student understanding and provide ongoing feedback. Classroom quizzes serve this purpose perfectly. They help teachers gauge comprehension of recent topics and adjust instruction accordingly. In contrast, final exams and standardized tests are summative assessments (evaluating learning at the end), and diagnostic tests are typically used before instruction begins."
  },
  {
    "id": 207,
    "question": "Mathematics is considered deductive reasoning because: (TSTET 18 Jan 2025)",
    "options": [
      "It focuses only on practical applications.",
      "It derives specific results from generalized principles.",
      "It is based on observations and experiments.",
      "It is based on trial and error methods."
    ],
    "correctAnswer": 1,
    "explanation": "Deductive reasoning works from the general to the specific. In mathematics, we start with general truths like axioms, postulates, and established theorems (generalized principles). From these, we use logical  Steps to arrive at a specific conclusion or to prove a new, specific result. This process of logical deduction is the foundation of mathematical proof and reasoning."
  },
  {
    "id": 208,
    "question": "Which of the following is NOT an educational standard that mathematics learners should achieve? (TSTET 18 Jan 2025)",
    "options": [
      "Competitiveness",
      "Problem-solving",
      "Visualization",
      "Connection"
    ],
    "correctAnswer": 0,
    "explanation": "Modern mathematics education standards emphasize deep conceptual understanding and skill development. Problem-solving, visualization (representing concepts graphically), and making connections (between different math topics and to the real world) are all core standards. Competitiveness, however, is not a pedagogical goal. The focus is on collaboration and individual mastery of the material, not on ranking students against each other."
  },
  {
    "id": 209,
    "question": "The sequential order of Herbartian  Steps in writing a lesson plan: (TSTET 18 Jan 2025)",
    "options": [
      "Preparation, Presentation, Generalization, Association. Application and Recapitulation.",
      "Preparation. Presentation, Association. Application, Generalization, and Recapitulation.",
      "Preparation, Association, Generalization, Application, Presentation, and Recapitulation.",
      "Preparation. Presentation, Association, Generalization. Application, and Recapitulation."
    ],
    "correctAnswer": 3,
    "explanation": "The Herbartian approach to lesson planning follows a specific, logical sequence to structure learning. The correct order is:\n1.  **Preparation:** Activating prior knowledge.\n2.  **Presentation:** Introducing new material.\n3.  **Association:** Connecting the new material to the old.\n4.  **Generalization:** Forming a rule or principle.\n5.  **Application:** Using the new knowledge in a practical way.\n6.  **Recapitulation:** Reviewing the lesson. Option 4 correctly lists this sequence."
  },
  {
    "id": 210,
    "question": "Identify self-learning material for students: A) Geo-board B) Fraction Disc C) Damino cards. Choose the correct answer: (TSTET 18 Jan 2025)",
    "options": [
      "A & B only",
      "B & C only",
      "A & C only",
      "A, B & C"
    ],
    "correctAnswer": 3,
    "explanation": "All three items listed are effective manipulatives or tools for self-directed learning in mathematics.\n- **Geo-board:** Allows students to independently explore geometric shapes, area, and perimeter.\n- **Fraction Disc:** Helps students visualize and experiment with fractions, equivalencies, and operations in a hands-on manner.\n- **Domino Cards:** Can be used for a variety of self-learning activities, including counting, matching, addition, and number recognition.\nSince all three are suitable for self-learning, the correct answer is A, B & C."
  },
  {
    "id": 211,
    "question": "If $\\sqrt{5}=2.236$, then the value of $\\frac{100}{\\sqrt{125}}$ is (APTET 2011)",
    "options": [
      "6.482",
      "12.642",
      "8.944",
      "10.534"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: Simplify the denominator, $\\sqrt{125}$.\n$\\sqrt{125} = \\sqrt{25 \\times 5} = \\sqrt{25} \\times \\sqrt{5} = 5\\sqrt{5}$.\n\n Step 2: Substitute this back into the expression.\n$\\frac{100}{\\sqrt{125}} = \\frac{100}{5\\sqrt{5}} = \\frac{20}{\\sqrt{5}}$.\n\n Step 3: Rationalize the denominator by multiplying the numerator and denominator by $\\sqrt{5}$.\n$\\frac{20}{\\sqrt{5}} \\times \\frac{\\sqrt{5}}{\\sqrt{5}} = \\frac{20\\sqrt{5}}{5} = 4\\sqrt{5}$.\n\n Step 4: Substitute the given value of $\\sqrt{5} = 2.236$.\nValue = $4 \\times 2.236 = 8.944$."
  },
  {
    "id": 212,
    "question": "A car travelled 4 km less than twice the distance travelled by a bus in 1 hour. If the car travelled 28 km in 1 hour, the distance travelled by the bus in km is (APTET 2011)",
    "options": [
      "17",
      "14",
      "15",
      "16"
    ],
    "correctAnswer": 3,
    "explanation": " Step 1: Let 'b' be the distance travelled by the bus in km.\n\n Step 2: According to the problem, the distance travelled by the car is '4 km less than twice the distance travelled by the bus'. We can write this as an equation:\nDistance of car = $2b - 4$.\n\n Step 3: We are given that the distance travelled by the car is 28 km. So, we can set up the equation:\n$2b - 4 = 28$.\n\n Step 4: Solve the equation for 'b'.\nAdd 4 to both sides: $2b = 28 + 4 \\Rightarrow 2b = 32$.\nDivide by 2: $b = \\frac{32}{2} \\Rightarrow b = 16$.\n\nThus, the distance travelled by the bus is 16 km."
  },
  {
    "id": 213,
    "question": "In the following, the set of points that lie on the X-axis is (APTET 2011)",
    "options": [
      "{(-1,0), (2, 0)}",
      "{(1,1), (2,3)}",
      "{(-1,1), (-3,2)}",
      "{(0,-1), (0,2)}"
    ],
    "correctAnswer": 0,
    "explanation": "A point lies on the X-axis if and only if its y-coordinate is 0. A point is represented as (x, y).\n\n Step 1: Examine option (1) {(-1,0), (2, 0)}.\nFor the point (-1, 0), the y-coordinate is 0.\nFor the point (2, 0), the y-coordinate is 0.\nBoth points lie on the X-axis.\n\n Step 2: Examine the other options for completeness.\nOption (2): The y-coordinates are 1 and 3.\nOption (3): The y-coordinates are 1 and 2.\nOption (4): The x-coordinates are 0, meaning these points lie on the Y-axis.\n\nTherefore, the correct set is {(-1,0), (2, 0)}."
  },
  {
    "id": 214,
    "question": "If $x+y=5$, $xy=12$, then the value of $x^{3}+y^{3}$ is (APTET 2011)",
    "options": [
      "-55",
      "62",
      "42",
      "72"
    ],
    "correctAnswer": 0,
    "explanation": " Step 1: Use the algebraic identity for the sum of cubes: $x^3 + y^3 = (x+y)(x^2 - xy + y^2)$.\n\n Step 2: We can rewrite the identity using the square of a sum: $x^3 + y^3 = (x+y)((x+y)^2 - 3xy)$.\n\n Step 3: Substitute the given values, $x+y=5$ and $xy=12$, into this formula.\n$x^3 + y^3 = (5)((5)^2 - 3(12))$.\n\n Step 4: Calculate the result.\n$x^3 + y^3 = 5(25 - 36)$.\n$x^3 + y^3 = 5(-11)$.\n$x^3 + y^3 = -55$."
  },
  {
    "id": 215,
    "question": "The number that should be multiplied with $(-4)^{-2}$ to get a product of $100^{-1}$ is (APTET 2011)",
    "options": [
      "$\\frac{25}{4}$",
      "$\\frac{-4}{5}$",
      "$\\frac{5}{4}$",
      "$\\frac{4}{25}$"
    ],
    "correctAnswer": 3,
    "explanation": " Step 1: Let the unknown number be 'N'. The problem can be written as an equation:\n$N \\times (-4)^{-2} = 100^{-1}$.\n\n Step 2: Use the rule of negative exponents, $a^{-n} = \\frac{1}{a^n}$, to simplify the terms.\n$(-4)^{-2} = \\frac{1}{(-4)^2} = \\frac{1}{16}$.\n$100^{-1} = \\frac{1}{100}$.\n\n Step 3: Substitute these values back into the equation.\n$N \\times \\frac{1}{16} = \\frac{1}{100}$.\n\n Step 4: Solve for N by multiplying both sides by 16.\n$N = \\frac{1}{100} \\times 16 = \\frac{16}{100}$.\n\n Step 5: Simplify the fraction.\n$N = \\frac{16 \\div 4}{100 \\div 4} = \\frac{4}{25}$."
  },
  {
    "id": 216,
    "question": "The G.C.D. of two numbers is 21 and the first 3 quotients obtained in the division are 1, 4, 5. The numbers are (APTET 2011)",
    "options": [
      "6239, 7684",
      "441, 546",
      "1632, 1088",
      "1728, 1632"
    ],
    "correctAnswer": 1,
    "explanation": "This problem requires working backward through the Euclidean algorithm for finding the G.C.D.\nLet the two numbers be 'a' and 'b' with a > b. Let the remainders be $r_1, r_2, ...$\n\n Step 1: The division process is as follows:\n$a = 1 \\times b + r_1$ (Quotient is 1)\n$b = 4 \\times r_1 + r_2$ (Quotient is 4)\n$r_1 = 5 \\times r_2 + r_3$ (Quotient is 5)\n\n Step 2: The G.C.D. is the last non-zero remainder. Since there are 3 quotients, the process ends here, meaning $r_3 = 0$. The G.C.D. is $r_2$. We are given G.C.D. = 21, so $r_2 = 21$.\n\n Step 3: Work backward to find $r_1$, b, and a.\nFrom $r_1 = 5 \\times r_2 + 0$, we get $r_1 = 5 \\times 21 = 105$.\n\n Step 4: Substitute $r_1$ and $r_2$ to find 'b'.\nFrom $b = 4 \\times r_1 + r_2$, we get $b = 4 \\times 105 + 21 = 420 + 21 = 441$.\n\n Step 5: Substitute 'b' and $r_1$ to find 'a'.\nFrom $a = 1 \\times b + r_1$, we get $a = 1 \\times 441 + 105 = 546$.\n\nSo, the two numbers are 441 and 546."
  },
  {
    "id": 218,
    "question": "If $4x-\\frac{1}{2x}=6$, then $16x^{2}+\\frac{1}{4x^{2}}$ is (APTET 2011)",
    "options": [
      "60",
      "20",
      "30",
      "40"
    ],
    "correctAnswer": 3,
    "explanation": " Step 1: Start with the given equation:\n$4x - \\frac{1}{2x} = 6$.\n\n Step 2: Square both sides of the equation.\n$(4x - \\frac{1}{2x})^2 = 6^2$.\n\n Step 3: Expand the left side using the algebraic identity $(a-b)^2 = a^2 - 2ab + b^2$. Here, $a=4x$ and $b=\\frac{1}{2x}$.\n$(4x)^2 - 2(4x)(\\frac{1}{2x}) + (\\frac{1}{2x})^2 = 36$.\n\n Step 4: Simplify the expanded expression.\n$16x^2 - \\frac{8x}{2x} + \\frac{1}{4x^2} = 36$.\n$16x^2 - 4 + \\frac{1}{4x^2} = 36$.\n\n Step 5: Isolate the term we need to find, $16x^2 + \\frac{1}{4x^2}$, by adding 4 to both sides.\n$16x^2 + \\frac{1}{4x^2} = 36 + 4 = 40$."
  },
  {
    "id": 219,
    "question": "There is a square with side 150 m. There is a rectangle whose perimeter is equal to the perimeter of this square. If its length is 180m, then the ratio of their areas is (APTET 2011)",
    "options": [
      "7:9",
      "12:13",
      "25:24",
      "3:8"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: Calculate the properties of the square.\nSide of square = 150 m.\nPerimeter of square = $4 \\times \\text{side} = 4 \\times 150 = 600$ m.\nArea of square = $\\text{side}^2 = 150^2 = 22500$ sq. m.\n\n Step 2: Calculate the properties of the rectangle.\nPerimeter of rectangle = Perimeter of square = 600 m.\nLength of rectangle (l) = 180 m.\nThe formula for the perimeter of a rectangle is $2(l+b)$.\n$600 = 2(180 + b)$.\n$300 = 180 + b$.\nBreadth (b) = $300 - 180 = 120$ m.\nArea of rectangle = $l \\times b = 180 \\times 120 = 21600$ sq. m.\n\n Step 3: Find the ratio of the area of the square to the area of the rectangle.\nRatio = Area of square : Area of rectangle\nRatio = $22500 : 21600$.\n\n Step 4: Simplify the ratio.\nDivide both sides by 100: $225 : 216$.\nDivide both sides by their greatest common divisor, which is 9:\n$\\frac{225}{9} : \\frac{216}{9} \\implies 25 : 24$."
  },
  {
    "id": 220,
    "question": "In a Pie diagram, the degree of any component part is (APTET 2011)",
    "options": [
      "$\\frac{\\text{Total value}}{360^\\circ} \\times \\text{Component value}$",
      "$\\frac{\\text{Total value}}{\\text{Component value}} \\times 360^\\circ$",
      "$\\frac{\\text{Component value}}{360^\\circ} \\times \\text{Total value}$",
      "$\\frac{\\text{Component value}}{\\text{Total value}} \\times 360^\\circ$"
    ],
    "correctAnswer": 3,
    "explanation": "A pie diagram (or pie chart) represents a whole quantity, which corresponds to a full circle of 360 degrees. Each component part is represented as a sector of the circle.\n\nThe angle of the sector for a particular component is proportional to the value of that component relative to the total value.\n\n Step 1: Find the fraction of the whole that the component represents. This is calculated as: $\\frac{\\text{Component value}}{\\text{Total value}}$.\n\n Step 2: To find the corresponding angle in degrees, multiply this fraction by the total degrees in a circle, which is 360°.\n\nTherefore, the formula is: Angle = $\\frac{\\text{Component value}}{\\text{Total value}} \\times 360^\\circ$."
  },
  {
    "id": 222,
    "question": "Four carrom board strikers, each of radius 7 cm, are so arranged that each striker touches at least two other strikers. The area of the empty space between the strikers is (in sq. cm.) (APTET 2011)",
    "options": [
      "3.5",
      "42",
      "21",
      "10.5"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: Visualize the arrangement. The four circular strikers are placed touching each other. Their centers will form a square.\n\n Step 2: Determine the side length of this square. The distance between the centers of two touching circles is the sum of their radii, which is $r+r = 2r$. Since the radius (r) is 7 cm, the side length of the square is $2 \\times 7 = 14$ cm.\n\n Step 3: Calculate the area of the square formed by the centers.\nArea of square = $\\text{side}^2 = 14^2 = 196$ sq. cm.\n\n Step 4: The empty space in the middle is the area of this square minus the area of the parts of the circles that are inside the square. Inside the square, there is one quarter of each of the four circles. Together, these four quarter-circles make up one full circle.\n\n Step 5: Calculate the area of one full striker (circle).\nArea of circle = $\\pi r^2 = \\frac{22}{7} \\times 7^2 = \\frac{22}{7} \\times 49 = 22 \\times 7 = 154$ sq. cm.\n\n Step 6: Subtract the area of the circle from the area of the square to find the area of the empty space.\nArea of empty space = Area of square - Area of circle = $196 - 154 = 42$ sq. cm."
  },
  {
    "id": 223,
    "question": "In a class there are 96 girls. Due to rain 12 of them did not attend the school. The percentage of girls attended is (APTET 2011)",
    "options": [
      "58.7",
      "85.7",
      "87.5",
      "78.5"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: Find the number of girls who attended the school.\nTotal girls = 96.\nAbsent girls = 12.\nAttended girls = Total girls - Absent girls = $96 - 12 = 84$.\n\n Step 2: Calculate the percentage of girls who attended.\nThe formula for percentage is $(\\frac{\\text{Part}}{\\text{Total}}) \\times 100$.\nPercentage attended = $(\\frac{\\text{Number of girls attended}}{\\text{Total number of girls}}) \\times 100$.\n\n Step 3: Substitute the values and calculate.\nPercentage attended = $(\\frac{84}{96}) \\times 100$.\n\n Step 4: Simplify the fraction $\\frac{84}{96}$. Both numbers are divisible by 12.\n$\\frac{84 \\div 12}{96 \\div 12} = \\frac{7}{8}$.\n\n Step 5: Convert the fraction to a percentage.\nPercentage attended = $\\frac{7}{8} \\times 100 = 0.875 \\times 100 = 87.5\\%$."
  },
  {
    "id": 224,
    "question": "Mahasamudramu is a number in which 1 is followed by these many number of zeros. (APTET 2011)",
    "options": [
      "52",
      "58",
      "56",
      "54"
    ],
    "correctAnswer": 0,
    "explanation": "This question refers to the ancient Indian system of naming large numbers. In this system, 'Mahasamudramu' is the name for the number represented by 1 followed by 54 zeros. However, the key indicates 52. Let's refer to other similar naming systems. In the Valmiki Ramayana, Koti is $10^7$, Shanku is $10^{12}$, Maha Shanku is $10^{17}$, and so on. In this specific system, Samudra is often $10^{14}$, Maha Samudra is $10^{19}$. There are multiple ancient systems with variations. A commonly cited list for powers of 10 includes Mahaugham as $10^{53}$. Given the options, it is likely the question refers to a specific system where the value is $10^{52}$ or $10^{54}$, and there may be a discrepancy between different sources or the question key. The most readily available sources point to numbers around this magnitude, with some variations. Based on the provided key being '1' (52), we select that, but acknowledge other sources may differ."
  },
  {
    "id": 225,
    "question": "The $\\frac{p}{q}$ form of $0.3\\overline{45}$ is (APTET 2011)",
    "options": [
      "$\\frac{27}{55}$",
      "$\\frac{19}{55}$",
      "$\\frac{345}{1000}$",
      "$\\frac{21}{200}$"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: Let $x$ be equal to the repeating decimal.\n$x = 0.3454545...$\n\n Step 2: Multiply $x$ by a power of 10 to move the decimal point just before the repeating part.\n$10x = 3.454545...$  (Equation 1)\n\n Step 3: Multiply $x$ by another power of 10 to move the decimal point after the first cycle of the repeating part.\n$1000x = 345.454545...$ (Equation 2)\n\n Step 4: Subtract Equation 1 from Equation 2 to eliminate the repeating part.\n$1000x - 10x = 345.454545... - 3.454545...$\n$990x = 342$.\n\n Step 5: Solve for $x$.\n$x = \\frac{342}{990}$.\n\n Step 6: Simplify the fraction. Both numerator and denominator are divisible by 18.\n$x = \\frac{342 \\div 18}{990 \\div 18} = \\frac{19}{55}$."
  },
  {
    "id": 226,
    "question": "Certain amount of money is divided between Anil and Sunil in the ratio $2\\frac{4}{7}:3\\frac{3}{4}$. If Sunil gets Rs. 187 more, then Anil's share in Rupees is (APTET 2011)",
    "options": [
      "408",
      "595",
      "346",
      "625"
    ],
    "correctAnswer": 0,
    "explanation": " Step 1: Convert the mixed fraction ratio into a simple fraction ratio.\nAnil : Sunil = $2\\frac{4}{7} : 3\\frac{3}{4} = \\frac{18}{7} : \\frac{15}{4}$.\n\n Step 2: Convert the fraction ratio into an integer ratio by multiplying by the least common multiple (LCM) of the denominators (7 and 4), which is 28.\nAnil : Sunil = $(\\frac{18}{7} \\times 28) : (\\frac{15}{4} \\times 28) = (18 \\times 4) : (15 \\times 7) = 72 : 105$.\n\n Step 3: Simplify the integer ratio by dividing by the greatest common divisor (GCD), which is 3.\nAnil : Sunil = $\\frac{72}{3} : \\frac{105}{3} = 24 : 35$.\n\n Step 4: Let the shares be $24x$ for Anil and $35x$ for Sunil. The difference in their shares is given as Rs. 187.\n$35x - 24x = 187$.\n$11x = 187$.\n\n Step 5: Solve for x.\n$x = \\frac{187}{11} = 17$.\n\n Step 6: Calculate Anil's share.\nAnil's share = $24x = 24 \\times 17 = 408$.\n\nAnil's share is Rs. 408."
  },
  {
    "id": 227,
    "question": "The sum of two fractions is $4\\frac{2}{3}$. If one of them is $3\\frac{1}{2}$, then the other fraction is (APTET 2011)",
    "options": [
      "$4\\frac{1}{5}$",
      "$2\\frac{1}{4}$",
      "$3\\frac{1}{2}$",
      "$1\\frac{1}{6}$"
    ],
    "correctAnswer": 3,
    "explanation": " Step 1: Let the unknown fraction be 'F'. The problem states:\n$3\\frac{1}{2} + F = 4\\frac{2}{3}$.\n\n Step 2: To find F, subtract $3\\frac{1}{2}$ from $4\\frac{2}{3}$.\n$F = 4\\frac{2}{3} - 3\\frac{1}{2}$.\n\n Step 3: Convert the mixed fractions to improper fractions.\n$4\\frac{2}{3} = \\frac{(4 \\times 3) + 2}{3} = \\frac{14}{3}$.\n$3\\frac{1}{2} = \\frac{(3 \\times 2) + 1}{2} = \\frac{7}{2}$.\n\n Step 4: Perform the subtraction.\n$F = \\frac{14}{3} - \\frac{7}{2}$.\n\n Step 5: Find a common denominator, which is 6.\n$F = \\frac{14 \\times 2}{3 \\times 2} - \\frac{7 \\times 3}{2 \\times 3} = \\frac{28}{6} - \\frac{21}{6} = \\frac{28-21}{6} = \\frac{7}{6}$.\n\n Step 6: Convert the improper fraction back to a mixed fraction.\n$F = \\frac{7}{6} = 1\\frac{1}{6}$."
  },
  {
    "id": 228,
    "question": "Three angles of a 7 sided polygon are $132^{\\circ}$ each and the remaining four angles are equal. The value of each equal angle in degrees is (APTET 2011)",
    "options": [
      "142",
      "160",
      "126",
      "135"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: Find the sum of the interior angles of a 7-sided polygon (a heptagon).\nThe formula for the sum of interior angles of an n-sided polygon is $(n-2) \\times 180^\\circ$.\nFor n=7, the sum is $(7-2) \\times 180^\\circ = 5 \\times 180^\\circ = 900^\\circ$.\n\n Step 2: Calculate the sum of the three known angles.\nEach of these angles is $132^\\circ$. Their sum is $3 \\times 132^\\circ = 396^\\circ$.\n\n Step 3: Find the sum of the remaining four equal angles.\nSum of remaining angles = Total sum - Sum of known angles\nSum of remaining angles = $900^\\circ - 396^\\circ = 504^\\circ$.\n\n Step 4: Since the remaining four angles are equal, divide their sum by 4 to find the measure of each angle.\nValue of each equal angle = $\\frac{504^\\circ}{4} = 126^\\circ$."
  },
  {
    "id": 229,
    "question": "A student secured 122 marks in a test but his score is 13 marks less than the pass mark. If the minimum pass percentage is 36%, the maximum marks of the test are (APTET 2011)",
    "options": [
      "475",
      "375",
      "275",
      "325"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: Determine the passing marks.\nThe student's score is 122, which is 13 marks less than the pass mark.\nPass Marks = Student's score + 13 = $122 + 13 = 135$.\n\n Step 2: Relate the passing marks to the pass percentage.\nWe are given that the minimum pass percentage is 36%.\nSo, 36% of the maximum marks is equal to 135.\n\n Step 3: Let 'M' be the maximum marks. Set up the equation:\n$36\\% \\times M = 135$.\n$0.36 \\times M = 135$.\n\n Step 4: Solve for M.\n$M = \\frac{135}{0.36} = \\frac{13500}{36}$.\n$M = \\frac{1500}{4} = 375$.\n\nThe maximum marks of the test are 375."
  },
  {
    "id": 230,
    "question": "From a circular sheet of paper a strip of 7 cm wide is removed all along its border. If the area of this strip is 2310 sq.cms., the percentage of the area of the strip removed approximately is (APTET 2011)",
    "options": [
      "16.25",
      "20.56",
      "14.88",
      "23.44"
    ],
    "correctAnswer": 3,
    "explanation": " Step 1: Let R be the radius of the original circular sheet and r be the radius of the inner circle after removing the strip. The area of the removed strip (an annulus) is given.\nWidth of strip = $R - r = 7$ cm.\nArea of strip = $\\pi R^2 - \\pi r^2 = \\pi(R^2 - r^2) = \\pi(R-r)(R+r)$.\n\n Step 2: Use the given area to find the radii.\n$2310 = \\pi(7)(R+r)$.\n$2310 = \\frac{22}{7} \\times 7 \\times (R+r)$.\n$2310 = 22(R+r)$.\n$R+r = \\frac{2310}{22} = 105$.\n\n Step 3: Solve the system of linear equations:\n1) $R + r = 105$\n2) $R - r = 7$\nAdding the two equations: $2R = 112 \\implies R = 56$ cm.\nSubstituting R back: $56 + r = 105 \\implies r = 49$ cm.\n\n Step 4: Calculate the area of the original circular sheet.\nArea_original = $\\pi R^2 = \\frac{22}{7} \\times 56^2 = \\frac{22}{7} \\times 3136 = 22 \\times 448 = 9856$ sq. cm.\n\n Step 5: Calculate the percentage of the area removed.\nPercentage = $(\\frac{\\text{Area of strip}}{\\text{Area of original}}) \\times 100 = (\\frac{2310}{9856}) \\times 100$.\nPercentage $\\approx 0.23437 \\times 100 \\approx 23.44\\%$."
  },
  {
    "id": 231,
    "question": "The area of an equilateral triangle is $144\\sqrt{3}$ sq. cms. The height of the triangle is (APTET 2011)",
    "options": [
      "$12\\sqrt{3}$",
      "$25\\sqrt{3}$",
      "$6\\sqrt{3}$",
      "$16\\sqrt{3}$"
    ],
    "correctAnswer": 0,
    "explanation": " Step 1: Recall the formula for the area of an equilateral triangle with side 'a'.\nArea = $\\frac{\\sqrt{3}}{4}a^2$.\n\n Step 2: Use the given area to find the side length 'a'.\n$144\\sqrt{3} = \\frac{\\sqrt{3}}{4}a^2$.\nDivide both sides by $\\sqrt{3}$: $144 = \\frac{a^2}{4}$.\nMultiply both sides by 4: $a^2 = 144 \\times 4 = 576$.\nTake the square root: $a = \\sqrt{576} = 24$ cm.\n\n Step 3: Recall the formula for the height 'h' of an equilateral triangle with side 'a'.\nHeight (h) = $\\frac{\\sqrt{3}}{2}a$.\n\n Step 4: Substitute the value of 'a' to find the height.\n$h = \\frac{\\sqrt{3}}{2} \\times 24 = 12\\sqrt{3}$ cm."
  },
  {
    "id": 232,
    "question": "The perpendicular drawn from any one of the vertices of a triangle to its opposite side is (APTET 2011)",
    "options": [
      "Centroid",
      "Median",
      "Altitude",
      "Chord"
    ],
    "correctAnswer": 2,
    "explanation": "This question asks for the definition of a specific line segment in a triangle.\n- An **Altitude** is a line segment drawn from a vertex of a triangle perpendicular to the opposite side (or the line containing the opposite side).\n- A **Median** is a line segment drawn from a vertex to the midpoint of the opposite side.\n- A **Centroid** is the point where the three medians of a triangle intersect.\n- A **Chord** is a line segment connecting two points on a circle, not a term typically used for triangles in this context.\n\nThe correct definition is Altitude."
  },
  {
    "id": 233,
    "question": "The lateral surface area of a cuboid whose length, breadth and height are 6 m, 5 m and 3 m respectively is (APTET 2011)",
    "options": [
      "66 sq. m.",
      "166 sq. m.",
      "1660 sq. m.",
      "990 sq. m."
    ],
    "correctAnswer": 0,
    "explanation": " Step 1: Recall the formula for the Lateral Surface Area (LSA) of a cuboid.\nThe LSA is the area of the four side faces (excluding the top and bottom bases). The formula is:\nLSA = $2 \\times (\\text{length} + \\text{breadth}) \\times \\text{height}$ or LSA = $2h(l+b)$.\n\n Step 2: Identify the given values:\nLength (l) = 6 m\nBreadth (b) = 5 m\nHeight (h) = 3 m\n\n Step 3: Substitute these values into the formula.\nLSA = $2 \\times 3 \\times (6 + 5)$.\n\n Step 4: Calculate the result.\nLSA = $6 \\times (11) = 66$ sq. m."
  },
  {
    "id": 234,
    "question": "Factors for $(8x^{6}-9x^{3}+1)$ are (APTET 2011)",
    "options": [
      "$(x^{2}-x+1)(4x^{2}-2x+1)$",
      "$(x-1)(x^{2}+x+1)(2x-1)(4x^{2}+2x+1)$",
      "$(x^{2}+x+1)(4x^{2}+2x+1)$",
      "$(x+1)(x^{2}+x+1)(2x+1)(4x^{2}+2x+1)$"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: Let $y = x^3$. The expression can be rewritten as a quadratic in terms of y:\n$8y^2 - 9y + 1$.\n\n Step 2: Factor the quadratic expression.\n$8y^2 - 8y - y + 1 = 8y(y-1) - 1(y-1) = (8y-1)(y-1)$.\n\n Step 3: Substitute $y = x^3$ back into the factored form.\n$(8x^3 - 1)(x^3 - 1)$.\n\n Step 4: Apply the difference of cubes formula, $a^3 - b^3 = (a-b)(a^2+ab+b^2)$, to both factors.\nFor the first factor, $(8x^3 - 1) = (2x)^3 - 1^3$:\n$(2x-1)((2x)^2 + (2x)(1) + 1^2) = (2x-1)(4x^2+2x+1)$.\n\nFor the second factor, $(x^3 - 1)$:\n$(x-1)(x^2 + x(1) + 1^2) = (x-1)(x^2+x+1)$.\n\n Step 5: Combine all the factors.\nThe complete factorization is $(x-1)(x^2+x+1)(2x-1)(4x^2+2x+1)$."
  },
  {
    "id": 235,
    "question": "In the given numbers, Ramanujan's number is (APTET 2011)",
    "options": [
      "1729",
      "1719",
      "1709",
      "1739"
    ],
    "correctAnswer": 0,
    "explanation": "Ramanujan's number, also known as the Hardy-Ramanujan number, is 1729. It is famous for being the smallest natural number that can be expressed as the sum of two different positive integer cubes in two distinct ways.\n\n1. $1^3 + 12^3 = 1 + 1728 = 1729$\n2. $9^3 + 10^3 = 729 + 1000 = 1729$"
  },
  {
    "id": 236,
    "question": "'Learning by doing' is the concept of the following (APTET 2011)",
    "options": [
      "Laboratory method",
      "Demonstration method",
      "Analytical method",
      "Lecture method"
    ],
    "correctAnswer": 0,
    "explanation": "The phrase 'Learning by doing' is a key principle in education that emphasizes active student participation and hands-on experience.\n- **Laboratory method**: This method is centered on students performing experiments, manipulating materials, and discovering concepts for themselves, which is the epitome of 'learning by doing'.\n- **Demonstration method**: The teacher shows how something is done, and students primarily observe.\n- **Analytical method**: This involves breaking down a problem into simpler parts, a more cognitive than psychomotor process.\n- **Lecture method**: This is a passive learning method where students listen to the teacher.\nThe Laboratory method is the most direct application of the 'learning by doing' concept."
  },
  {
    "id": 237,
    "question": "\"Characteristic of simplicity\" relates to the following (APTET 2011)",
    "options": [
      "Moral value",
      "Practical value",
      "Cultural value",
      "Disciplinary value"
    ],
    "correctAnswer": 3,
    "explanation": "In the context of the values of teaching mathematics, different characteristics are associated with different values.\n- **Practical value** relates to the usefulness of mathematics in daily life.\n- **Cultural value** relates to mathematics as a part of human culture and heritage.\n- **Moral value** relates to developing honesty and truthfulness through the logical nature of math.\n- **Disciplinary value** relates to the training of the mind to think logically, systematically, and with precision. The 'characteristic of simplicity' in mathematics—its elegance, clarity, and logical purity—is considered to contribute significantly to mental training and discipline. It teaches the learner to appreciate straightforward and clear reasoning, thus fostering disciplinary value."
  },
  {
    "id": 238,
    "question": "The evaluation card which assesses the standard of the text book is (APTET 2011)",
    "options": [
      "Sampson's score card",
      "Hunter's score card",
      "Anderson's score card",
      "Peterson's score card"
    ],
    "correctAnswer": 1,
    "explanation": "This is a knowledge-based question from the field of educational evaluation and curriculum development. **Hunter's score card** is a well-known tool specifically designed for the systematic evaluation of textbooks based on a variety of criteria, such as content, organization, instructional aids, and physical features."
  },
  {
    "id": 239,
    "question": "The objective that comes under cognitive domain is (APTET 2011)",
    "options": [
      "Imitation",
      "Application",
      "Organisation",
      "Manipulation"
    ],
    "correctAnswer": 1,
    "explanation": "Bloom's Taxonomy classifies educational objectives into three domains: Cognitive, Affective, and Psychomotor.\n- **Cognitive Domain**: Deals with intellectual skills and knowledge (knowing). Its levels include Knowledge, Comprehension, Application, Analysis, Synthesis, and Evaluation.\n- **Affective Domain**: Deals with emotions, attitudes, and values (feeling). Its levels include Receiving, Responding, Valuing, Organisation, and Characterization.\n- **Psychomotor Domain**: Deals with physical skills and movement (doing). Its levels include Perception, Set, Guided Response, Mechanism, Complex Overt Response, Adaptation, and Origination. Imitation and Manipulation are part of this domain.\n\nFrom the given options:\n- **Application** is a level within the Cognitive domain.\n- **Organisation** is a level within the Affective domain.\n- **Imitation** and **Manipulation** are levels within the Psychomotor domain."
  },
  {
    "id": 240,
    "question": "One of the following is not the characteristic of gifted children (APTET 2011)",
    "options": [
      "Have broad attention.",
      "Frequently asks profound questions.",
      "Learning centres around the text books.",
      "Prefers to think on higher levels of abstraction."
    ],
    "correctAnswer": 2,
    "explanation": "This question asks to identify the trait that is NOT typical of gifted children.\n1.  **Have broad attention**: Gifted children often have a wide range of interests and can focus intensely on them. This is a characteristic.\n2.  **Frequently asks profound questions**: Their curiosity and advanced cognitive abilities lead them to ask deep, probing questions that go beyond the surface level. This is a characteristic.\n3.  **Learning centres around the text books**: This is NOT a characteristic. Gifted children are known for their ability and desire to learn beyond the prescribed curriculum and textbook. They seek out additional resources and explore topics in greater depth independently.\n4.  **Prefers to think on higher levels of abstraction**: Gifted children grasp abstract concepts earlier and more easily than their peers and enjoy thinking in abstract terms. This is a characteristic."
  },
  {
    "id": 211,
    "question": "There are three sectors in a pie-diagram. If the angles of two sectors are 80° and 140°, then the angle of the third sector is (APTET 2012)",
    "options": [
      "220°",
      "60°",
      "140°",
      "80°"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: Understand that a pie diagram is a circle, and the total angle at the center of a circle is 360°.\n\n Step 2: Add the angles of the two given sectors.\nSum of given angles = 80° + 140° = 220°.\n\n Step 3: To find the angle of the third sector, subtract the sum of the other two angles from the total angle of the circle.\nAngle of the third sector = Total angle - Sum of given angles\nAngle of the third sector = 360° - 220° = 140°."
  },
  {
    "id": 212,
    "question": "A cricket ball's cost is Rs. 36 and the cost of a cricket bat is 12 ½ times that of the cost of the cricket ball. The cost of the cricket bat (in rupees) is (APTET 2012)",
    "options": [
      "450",
      "350",
      "550",
      "650"
    ],
    "correctAnswer": 0,
    "explanation": " Step 1: Identify the given values.\nCost of the cricket ball = Rs. 36.\nThe bat's cost is 12 ½ times the ball's cost.\n\n Step 2: Convert the mixed fraction 12 ½ to a decimal or an improper fraction.\nAs a decimal: 12 ½ = 12.5\n\n Step 3: Calculate the cost of the cricket bat by multiplying the ball's cost by 12.5.\nCost of the cricket bat = 36 × 12.5\nCost of the cricket bat = 450.\n\nThus, the cost of the cricket bat is Rs. 450."
  },
  {
    "id": 213,
    "question": "The value of $(1 - \\frac{1}{3^2})(1 - \\frac{1}{4^2})(1 - \\frac{1}{5^2})...(1 - \\frac{1}{100^2})$ is (APTET 2012)",
    "options": [
      "$\\frac{101}{150}$",
      "$\\frac{7}{150}$",
      "$\\frac{9}{200}$",
      "$\\frac{3}{100}$"
    ],
    "correctAnswer": 0,
    "explanation": " Step 1: Simplify the general term $(1 - \\frac{1}{n^2})$ using the difference of squares formula, $a^2 - b^2 = (a-b)(a+b)$.\n$(1 - \\frac{1}{n^2}) = \\frac{n^2-1}{n^2} = \\frac{(n-1)(n+1)}{n \\cdot n}$.\n\n Step 2: Write out the product using this simplified form.\nThe product is $[\frac{(3-1)(3+1)}{3 \\cdot 3}] \\times [\frac{(4-1)(4+1)}{4 \\cdot 4}] \\times ... \\times [\frac{(100-1)(100+1)}{100 \\cdot 100}]$.\nThis equals $[\frac{2 \\cdot 4}{3 \\cdot 3}] \\times [\frac{3 \\cdot 5}{4 \\cdot 4}] \\times [\frac{4 \\cdot 6}{5 \\cdot 5}] \\times ... \\times [\frac{99 \\cdot 101}{100 \\cdot 100}]$.\n\n Step 3: Rearrange the terms to see the cancellation (this is a telescoping product).\nThe product can be written as:\n$(\\frac{2}{3} \\cdot \\frac{3}{4} \\cdot \\frac{4}{5} \\cdot ... \\cdot \\frac{99}{100}) \\times (\\frac{4}{3} \\cdot \\frac{5}{4} \\cdot \\frac{6}{5} \\cdot ... \\cdot \\frac{101}{100})$.\n\n Step 4: Cancel the terms in each group.\nIn the first group, all terms cancel out except for the first numerator (2) and the last denominator (100), leaving $\\frac{2}{100}$.\nIn the second group, all terms cancel out except for the last numerator (101) and the first denominator (3), leaving $\\frac{101}{3}$.\n\n Step 5: Multiply the results from the two groups.\nResult = $\\frac{2}{100} \\times \\frac{101}{3} = \\frac{202}{300} = \\frac{101}{150}$."
  },
  {
    "id": 214,
    "question": "In a ∆ABC, if ∠A = 90° and ∠B = 2∠C, then ∠C is (APTET 2012)",
    "options": [
      "15°",
      "30°",
      "45°",
      "90°"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: Recall the angle sum property of a triangle, which states that the sum of the interior angles of a triangle is always 180°.\n∠A + ∠B + ∠C = 180°.\n\n Step 2: Substitute the given values into the equation.\nGiven: ∠A = 90° and ∠B = 2∠C.\n90° + (2∠C) + ∠C = 180°.\n\n Step 3: Combine the terms with ∠C.\n90° + 3∠C = 180°.\n\n Step 4: Solve for ∠C.\n3∠C = 180° - 90°\n3∠C = 90°\n∠C = 90° / 3\n∠C = 30°."
  },
  {
    "id": 215,
    "question": "The present age of a father is 42 years and of his son is 12 years. The ratio of age of the father to his son 2 years ago was (APTET 2012)",
    "options": [
      "7:2",
      "4:1",
      "2:7",
      "1:4"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: Find the ages of the father and the son 2 years ago.\nFather's age 2 years ago = Present age - 2 = 42 - 2 = 40 years.\nSon's age 2 years ago = Present age - 2 = 12 - 2 = 10 years.\n\n Step 2: Form the ratio of their ages from 2 years ago.\nRatio = Father's age : Son's age\nRatio = 40 : 10.\n\n Step 3: Simplify the ratio by dividing both numbers by their greatest common divisor, which is 10.\nRatio = 40/10 : 10/10\nRatio = 4 : 1."
  },
  {
    "id": 216,
    "question": "If 2 m. 60 cm cloth is required for one shirt, then the cloth required for 7 shirts is (APTET 2012)",
    "options": [
      "14 m. 80 cms",
      "18 m. 20 cms",
      "15 m. 20 cms",
      "16 m. 80 cms"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: Convert the required cloth for one shirt into a single unit (centimeters) for easier calculation. Since 1 meter = 100 centimeters.\n2 m 60 cm = (2 × 100) cm + 60 cm = 200 cm + 60 cm = 260 cm.\n\n Step 2: Calculate the total cloth required for 7 shirts.\nTotal cloth = Cloth per shirt × Number of shirts\nTotal cloth = 260 cm × 7 = 1820 cm.\n\n Step 3: Convert the total length back into meters and centimeters.\n1820 cm = 1800 cm + 20 cm = (1800 / 100) m + 20 cm = 18 m + 20 cm.\nSo, 18 m 20 cm of cloth is required."
  },
  {
    "id": 217,
    "question": "The value of $\\sqrt{1.44 \\times 6.25}$ is (APTET 2012)",
    "options": [
      "2",
      "1",
      "4",
      "3"
    ],
    "correctAnswer": 3,
    "explanation": " Step 1: Use the property of square roots, $\\sqrt{a \\times b} = \\sqrt{a} \\times \\sqrt{b}$.\n$\\sqrt{1.44 \\times 6.25} = \\sqrt{1.44} \\times \\sqrt{6.25}$.\n\n Step 2: Calculate the square root of each number separately.\nWe know that $12^2 = 144$, so $\\sqrt{1.44} = 1.2$.\nWe know that $25^2 = 625$, so $\\sqrt{6.25} = 2.5$.\n\n Step 3: Multiply the results.\nValue = 1.2 × 2.5 = 3.0.\n\nAlternatively:\n Step 1: Convert decimals to fractions.\n$1.44 = \\frac{144}{100}$ and $6.25 = \\frac{625}{100}$.\n\n Step 2: Substitute the fractions into the square root.\n$\\sqrt{\\frac{144}{100} \\times \\frac{625}{100}} = \\frac{\\sqrt{144} \\times \\sqrt{625}}{\\sqrt{100 \\times 100}} = \\frac{12 \\times 25}{100}$.\n\n Step 3: Calculate the final value.\n$\\frac{300}{100} = 3$."
  },
  {
    "id": 218,
    "question": "If x, y, z are any three rational numbers and if x > y and y > z, then x > z. This property is known as (APTET 2012)",
    "options": [
      "Law of Tricotomy",
      "Transitive Property",
      "Associative Property",
      "Closure Property"
    ],
    "correctAnswer": 1,
    "explanation": "The property described is the Transitive Property of Inequality.\n\n* **Transitive Property:** If a relation holds between a first element and a second, and between the second element and a third, it also holds between the first and third elements. For inequality, this is stated as: If x > y and y > z, then x > z.\n* **Law of Trichotomy:** For any two real numbers a and b, exactly one of the following is true: a < b, a = b, or a > b.\n* **Associative Property:** This applies to operations like addition and multiplication, stating that grouping does not affect the result, e.g., (a + b) + c = a + (b + c).\n* **Closure Property:** This states that an operation on members of a set always produces a member of the same set, e.g., the sum of two rational numbers is always a rational number."
  },
  {
    "id": 219,
    "question": "A school has 560 students. If the number of girls is $14\\frac{2}{7}\\%$ of the number of boys, then the number of girls in the school is (APTET 2012)",
    "options": [
      "320",
      "80",
      "70",
      "490"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: Convert the percentage to a fraction.\n$14\\frac{2}{7}\\% = \\frac{14 \\times 7 + 2}{7}\\% = \\frac{98+2}{7}\\% = \\frac{100}{7}\\%$.\nTo convert a percentage to a fraction, divide by 100: $\\frac{100}{7} \\div 100 = \\frac{100}{7} \\times \\frac{1}{100} = \\frac{1}{7}$.\n\n Step 2: Set up equations based on the problem statement.\nLet G be the number of girls and B be the number of boys.\nTotal students: G + B = 560.\nRelation between girls and boys: G = $\\frac{1}{7} \\times B$.\n\n Step 3: Solve the system of equations. Substitute the expression for G into the total students equation.\n$(\\frac{1}{7}B) + B = 560$.\n\n Step 4: Solve for B.\n$\\frac{8}{7}B = 560$.\n$B = 560 \\times \\frac{7}{8} = 70 \\times 7 = 490$.\nThere are 490 boys.\n\n Step 5: Calculate the number of girls.\nG = 560 - B = 560 - 490 = 70.\nAlternatively, G = $\\frac{1}{7}B = \\frac{1}{7}(490) = 70$.\nThus, the number of girls in the school is 70."
  },
  {
    "id": 220,
    "question": "If a clock shows 8 o'clock, then the angle between the two hands is (APTET 2012)",
    "options": [
      "240°",
      "120°",
      "145°",
      "125°"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: Understand the positions of the clock hands at 8 o'clock.\nThe minute hand is pointing at 12.\nThe hour hand is pointing exactly at 8.\n\n Step 2: Calculate the angle between each number on the clock face.\nA clock face is a full circle (360°) divided into 12 hours.\nThe angle between consecutive numbers is 360° / 12 = 30°.\n\n Step 3: Calculate the angle between the hands.\nThe separation between the number 8 and the number 12 is 4 hour-marks (from 8 to 9, 9 to 10, 10 to 11, and 11 to 12).\nThe angle is the number of hour-marks multiplied by the angle per mark: 4 × 30° = 120°.\n\nNote: There are two angles between the hands, a smaller angle (reflex angle) and a larger one. The larger angle is 360° - 120° = 240°. Unless specified otherwise, the question asks for the smaller angle."
  },
  {
    "id": 221,
    "question": "To represent equal numerical values, same type of diagrams are used in (APTET 2012)",
    "options": [
      "bar diagrams",
      "pie diagrams",
      "sectors",
      "pictographs"
    ],
    "correctAnswer": 3,
    "explanation": "The type of chart that uses pictures or symbols of the same type to represent a specific quantity of data is a pictograph.\n\n* **Pictographs:** Use icons or pictures to represent data. Each picture stands for a certain number of items. This method is visually appealing and easy to understand, especially for simple data.\n* **Bar Diagrams:** Use rectangular bars of varying lengths to represent different values.\n* **Pie Diagrams:** Use sectors (slices) of a circle to show the proportion of each category.\n* **Sectors:** These are parts of a pie diagram, not a type of diagram on their own."
  },
  {
    "id": 222,
    "question": "There are some bags, where 21 bags are kept in each room. If the bags are kept in 16's and 20's per room, 4 bags are left out. The total number of bags that are there in all is (APTET 2012)",
    "options": [
      "48",
      "80",
      "84",
      "76"
    ],
    "correctAnswer": 2,
    "explanation": "Let N be the total number of bags.\n\n Step 1: Translate the conditions into mathematical statements.\nCondition A: When kept 21 per room, there is no remainder. This means N is a multiple of 21.\nCondition B: When divided by 16, the remainder is 4. This means N = 16k + 4 for some integer k.\nCondition C: When divided by 20, the remainder is 4. This means N = 20m + 4 for some integer m.\n\n Step 2: Combine Conditions B and C.\nFrom B and C, we know that (N - 4) is a multiple of both 16 and 20. Therefore, (N - 4) must be a multiple of the Least Common Multiple (LCM) of 16 and 20.\n\n Step 3: Find the LCM of 16 and 20.\nPrime factorization of 16 = $2^4$.\nPrime factorization of 20 = $2^2 \\times 5$.\nLCM(16, 20) = $2^4 \\times 5 = 16 \\times 5 = 80$.\nSo, (N - 4) is a multiple of 80. (N - 4) can be 80, 160, 240, etc.\nThis means N can be 84, 164, 244, etc.\n\n Step 4: Use Condition A to find the correct value of N.\nWe need to find a number from the list (84, 164, 244, ...) that is also a multiple of 21.\nLet's check the first number, 84.\nIs 84 a multiple of 21? Yes, 84 = 21 × 4.\n\nSince 84 satisfies all three conditions and is present in the options, it is the correct answer."
  },
  {
    "id": 223,
    "question": "The value of $\\frac{9}{-17} \\times (\\frac{3}{7} - \\frac{4}{5})$ is (APTET 2012)",
    "options": [
      "$\\frac{-117}{595}$",
      "$\\frac{117}{595}$",
      "$\\frac{595}{117}$",
      "$\\frac{-595}{117}$"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: First, solve the expression inside the parentheses. To subtract the fractions, find a common denominator, which is 7 × 5 = 35.\n$(\\frac{3}{7} - \\frac{4}{5}) = (\\frac{3 \\times 5}{7 \\times 5} - \\frac{4 \\times 7}{5 \\times 7}) = \\frac{15 - 28}{35} = \\frac{-13}{35}$.\n\n Step 2: Now, multiply this result by the first fraction.\nThe expression becomes $\\frac{9}{-17} \\times \\frac{-13}{35}$.\n\n Step 3: Perform the multiplication. A negative number multiplied by a negative number results in a positive number.\n$\\frac{-9}{17} \\times \\frac{-13}{35} = \\frac{9 \\times 13}{17 \\times 35}$.\n\n Step 4: Calculate the final product.\n$9 \\times 13 = 117$.\n$17 \\times 35 = 595$.\nThe result is $\\frac{117}{595}$."
  },
  {
    "id": 224,
    "question": "The ratio between Rs. 2 and 60 paise is (APTET 2012)",
    "options": [
      "1:30",
      "30:1",
      "10:3",
      "3:10"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: To find the ratio between two quantities, they must be in the same unit.\n\n Step 2: Convert one of the quantities to match the unit of the other. Let's convert Rupees to paise. We know that 1 Rupee = 100 paise.\nRs. 2 = 2 × 100 paise = 200 paise.\n\n Step 3: Now form the ratio with both quantities in paise.\nRatio = 200 paise : 60 paise.\n\n Step 4: Simplify the ratio by dividing both numbers by their greatest common divisor. The GCF of 200 and 60 is 20.\nRatio = $\\frac{200}{20} : \\frac{60}{20}$.\nRatio = 10 : 3."
  },
  {
    "id": 225,
    "question": "If one angle is the average of the other two angles and the difference between the greatest and least angles is 60°, then the formed triangle is called (APTET 2012)",
    "options": [
      "an isosceles triangle",
      "an equilateral triangle",
      "a right angled triangle",
      "a right angled isosceles triangle"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: Let the three angles of the triangle be A, B, and C, such that A ≤ B ≤ C. The sum of the angles is A + B + C = 180°.\n\n Step 2: Use the first condition: One angle is the average of the other two. This implies that the middle angle, B, is the average of A and C.\nB = (A + C) / 2, which gives 2B = A + C.\n\n Step 3: Substitute 2B for A + C in the sum of angles equation.\n(A + C) + B = 180°\n2B + B = 180°\n3B = 180°\nB = 60°.\nSo, one of the angles is 60°.\n\n Step 4: Use the second condition: The difference between the greatest and least angles is 60°.\nC - A = 60°.\n\n Step 5: We have a system of two equations:\n1) A + C = 2B = 2(60°) = 120°\n2) C - A = 60°\n\n Step 6: Solve the system. Add the two equations to eliminate A.\n(A + C) + (C - A) = 120° + 60°\n2C = 180°\nC = 90°.\n\n Step 7: Find A by substituting C = 90° into A + C = 120°.\nA + 90° = 120°\nA = 30°.\n\n Step 8: The angles of the triangle are 30°, 60°, and 90°. A triangle with one angle equal to 90° is a right-angled triangle."
  },
  {
    "id": 226,
    "question": "The difference between the largest 6 digit number and the smallest 5 digit number is (APTET 2012)",
    "options": [
      "999998",
      "888888",
      "988888",
      "989999"
    ],
    "correctAnswer": 3,
    "explanation": " Step 1: Identify the largest 6-digit number. The largest digit is 9. To make the largest number, all digits should be 9. So, the largest 6-digit number is 999,999.\n\n Step 2: Identify the smallest 5-digit number. The first digit cannot be 0. The smallest non-zero digit is 1. The remaining digits should be the smallest possible, which is 0. So, the smallest 5-digit number is 10,000.\n\n Step 3: Calculate the difference between these two numbers.\nDifference = 999,999 - 10,000 = 989,999."
  },
  {
    "id": 227,
    "question": "The summer vacation was declared for all the schools from April 24th. If the vacation is for 49 days, then the schools reopen on (APTET 2012)",
    "options": [
      "June 11th",
      "June 12th",
      "June 10th",
      "June 13th"
    ],
    "correctAnswer": 3,
    "explanation": " Step 1: Calculate the number of vacation days in April. The vacation starts *from* April 24th, so the 24th is the last working day. The vacation begins on April 25th. The number of days in April is 30.\nNumber of vacation days in April = 30 - 24 = 6 days (April 25, 26, 27, 28, 29, 30).\n\n Step 2: Calculate the remaining vacation days.\nRemaining days = Total vacation days - Days in April = 49 - 6 = 43 days.\n\n Step 3: Account for the month of May. The number of days in May is 31. All of these are vacation days.\nRemaining days after May = 43 - 31 = 12 days.\n\n Step 4: These 12 remaining vacation days will fall in June. They will be from June 1st to June 12th.\n\n Step 5: The vacation ends on the 49th day, which is June 12th. The school will reopen on the day immediately following the end of the vacation.\nReopening date = June 12th + 1 day = June 13th."
  },
  {
    "id": 228,
    "question": "If two-thirds, half and one-seventh of a number is added to itself, the result is 37. Then the number is (APTET 2012)",
    "options": [
      "$14\\frac{2}{97}$",
      "$16\\frac{2}{97}$",
      "$18\\frac{2}{97}$",
      "$15\\frac{1}{97}$"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: Let the unknown number be 'x'.\n\n Step 2: Formulate the equation based on the problem statement.\nThe number itself (x) plus two-thirds of the number ($\\frac{2}{3}x$), plus half of the number ($\\frac{1}{2}x$), plus one-seventh of the number ($\\frac{1}{7}x$) equals 37.\nEquation: $x + \\frac{2}{3}x + \\frac{1}{2}x + \\frac{1}{7}x = 37$.\n\n Step 3: Factor out 'x' and add the fractions.\n$x(1 + \\frac{2}{3} + \\frac{1}{2} + \\frac{1}{7}) = 37$.\nTo add the fractions, find a common denominator for 3, 2, and 7. The LCM is 42.\n$x(\\frac{42}{42} + \\frac{28}{42} + \\frac{21}{42} + \\frac{6}{42}) = 37$.\n$x(\\frac{42 + 28 + 21 + 6}{42}) = 37$.\n$x(\\frac{97}{42}) = 37$.\n\n Step 4: Solve for 'x'.\n$x = 37 \\times \\frac{42}{97} = \\frac{1554}{97}$.\n\n Step 5: Convert the improper fraction to a mixed number.\nDivide 1554 by 97.\n1554 ÷ 97 = 16 with a remainder of 2. (16 × 97 = 1552; 1554 - 1552 = 2).\nSo, $x = 16\\frac{2}{97}$."
  },
  {
    "id": 229,
    "question": "The value of a vehicle depreciates every year by 5%. If the present value of the vehicle is Rs. 50,000, then its value after two years (in rupees) is (APTET 2012)",
    "options": [
      "45,125",
      "47,500",
      "52,500",
      "54,875"
    ],
    "correctAnswer": 0,
    "explanation": "This can be solved using the formula for compound depreciation: $V = P(1 - \\frac{r}{100})^n$, where V is the final value, P is the principal amount, r is the rate of depreciation, and n is the number of years.\n\nMethod 1: Using the formula\n Step 1: Identify the given values.\nP = 50,000, r = 5%, n = 2.\n\n Step 2: Substitute the values into the formula.\n$V = 50000(1 - \\frac{5}{100})^2 = 50000(1 - 0.05)^2 = 50000(0.95)^2$.\n\n Step 3: Calculate the final value.\n$V = 50000(0.9025) = 45,125$.\n\nMethod 2:  Step-by- Step calculation\n Step 1: Calculate the value after the first year.\nDepreciation in year 1 = 5% of 50,000 = 0.05 × 50,000 = 2,500.\nValue after year 1 = 50,000 - 2,500 = Rs. 47,500.\n\n Step 2: Calculate the value after the second year. The depreciation is now calculated on the new value.\nDepreciation in year 2 = 5% of 47,500 = 0.05 × 47,500 = 2,375.\nValue after year 2 = 47,500 - 2,375 = Rs. 45,125."
  },
  {
    "id": 230,
    "question": "The center and end points of an arc of a circle are collinear. The arc is called as (APTET 2012)",
    "options": [
      "diameter",
      "chord",
      "major arc",
      "semicircle"
    ],
    "correctAnswer": 3,
    "explanation": " Step 1: Visualize the condition. Collinear means that the points lie on the same straight line.\nThe points are: the center of the circle, and the two endpoints of an arc.\n\n Step 2: If these three points are on the same line, the line segment connecting the two endpoints of the arc must pass through the center.\n\n Step 3: A line segment that connects two points on a circle and passes through the center is defined as the diameter of the circle.\n\n Step 4: The arc whose endpoints are the ends of a diameter is defined as a semicircle. A semicircle is exactly half of the circle's circumference.\n\nTherefore, the arc is a semicircle."
  },
  {
    "id": 231,
    "question": "If $\\frac{b}{a}=2$ and $\\frac{c}{b}=3$, then the value of $\\frac{a+b}{b+c}$ is (APTET 2012)",
    "options": [
      "$\\frac{3}{4}$",
      "$\\frac{2}{3}$",
      "$\\frac{3}{8}$",
      "$\\frac{3}{2}$"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: Express variables a and c in terms of b using the given equations.\nFrom $\\frac{b}{a}=2$, we can write $a = \\frac{b}{2}$.\nFrom $\\frac{c}{b}=3$, we can write $c = 3b$.\n\n Step 2: Substitute these expressions for a and c into the target expression $\\frac{a+b}{b+c}$.\nExpression = $\\frac{(\\frac{b}{2}) + b}{b + (3b)}$.\n\n Step 3: Simplify the numerator and the denominator.\nNumerator: $\\frac{b}{2} + b = \\frac{b}{2} + \\frac{2b}{2} = \\frac{3b}{2}$.\nDenominator: $b + 3b = 4b$.\n\n Step 4: Combine the simplified numerator and denominator.\nExpression = $\\frac{\\frac{3b}{2}}{4b} = \\frac{3b}{2} \\div 4b = \\frac{3b}{2} \\times \\frac{1}{4b}$.\n\n Step 5: Cancel the common term 'b' and calculate the final result.\nExpression = $\\frac{3}{2 \\times 4} = \\frac{3}{8}$."
  },
  {
    "id": 232,
    "question": "The cost of 4 dozen papers is Rs. 24. The cost of 1 score of papers (in rupees) is (APTET 2012)",
    "options": [
      "40",
      "20",
      "10",
      "42"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: Define the quantities.\n1 dozen = 12 items.\n1 score = 20 items.\n\n Step 2: Calculate the total number of papers for which the cost is given.\nNumber of papers = 4 dozen = 4 × 12 = 48 papers.\n\n Step 3: Calculate the cost of a single paper.\nCost of 48 papers = Rs. 24.\nCost per paper = Total cost / Number of papers = Rs. 24 / 48 = Rs. 0.50.\n\n Step 4: Calculate the cost of 1 score (20 papers).\nCost of 1 score = Cost per paper × Number of papers in a score\nCost of 1 score = Rs. 0.50 × 20 = Rs. 10."
  },
  {
    "id": 233,
    "question": "The perimeter of a semicircle is 36 cms. Its diameter (in centimeters) is (APTET 2012)",
    "options": [
      "7",
      "14",
      "22",
      "28"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: Understand the formula for the perimeter of a semicircle. The perimeter consists of two parts: the curved arc (half the circumference of a full circle) and the straight diameter.\nPerimeter = ($\\frac{1}{2} \\times$ Circumference) + Diameter.\nPerimeter = ($\\frac{1}{2} \\times \\pi d$) + d, where 'd' is the diameter.\n\n Step 2: Factor out 'd' from the formula.\nPerimeter = $d (\\frac{\\pi}{2} + 1)$.\n\n Step 3: Substitute the given perimeter and the value of $\\pi$ (use $\\pi = \\frac{22}{7}$).\n$36 = d (\\frac{22/7}{2} + 1) = d (\\frac{11}{7} + 1)$.\n\n Step 4: Simplify the expression in the parenthesis.\n$36 = d (\\frac{11}{7} + \\frac{7}{7}) = d (\\frac{18}{7})$.\n\n Step 5: Solve for the diameter 'd'.\n$d = 36 \\times \\frac{7}{18}$.\n$d = 2 \\times 7 = 14$.\n\nThe diameter is 14 cm."
  },
  {
    "id": 234,
    "question": "The value of 0.2727... + 0.7373... is (APTET 2012)",
    "options": [
      "1.001",
      "1.01",
      "1.0202...",
      "1.0101..."
    ],
    "correctAnswer": 3,
    "explanation": "There are two common methods to solve this.\n\nMethod 1: Direct Addition\nAlign the decimal points and add the numbers column by column.\n  0.272727...\n+ 0.737373...\n--------------\n  1.010101...\n\nMethod 2: Converting to Fractions\n Step 1: Convert the first repeating decimal to a fraction.\nLet x = 0.2727...\n100x = 27.2727...\nSubtracting the first equation from the second: 99x = 27, so $x = \\frac{27}{99}$.\n\n Step 2: Convert the second repeating decimal to a fraction.\nLet y = 0.7373...\n100y = 73.7373...\nSubtracting the first equation from the second: 99y = 73, so $y = \\frac{73}{99}$.\n\n Step 3: Add the fractions.\n$x + y = \\frac{27}{99} + \\frac{73}{99} = \\frac{27 + 73}{99} = \\frac{100}{99}$.\n\n Step 4: Convert the resulting fraction back to a decimal.\n$\\frac{100}{99} = 1\\frac{1}{99}$.\nWe know that $\\frac{1}{99} = 0.0101...$\nTherefore, $1\\frac{1}{99} = 1.0101...$"
  },
  {
    "id": 235,
    "question": "The author of 'Pancha Siddhantika' is (APTET 2012)",
    "options": [
      "Aryabhatta",
      "Varahamihira",
      "Bhaskaracharya",
      "Brahmagupta"
    ],
    "correctAnswer": 1,
    "explanation": "The 'Pancha Siddhantika' is a significant work on mathematical astronomy that summarizes five earlier astronomical treatises. It was written by the ancient Indian astronomer and mathematician Varahamihira in the 6th century.\n\n* **Varahamihira:** Author of Pancha Siddhantika and Brihat Samhita.\n* **Aryabhatta:** Known for his work Aryabhatiya, which includes advancements in algebra, arithmetic, and trigonometry.\n* **Bhaskaracharya:** A 12th-century mathematician, author of Siddhanta Shiromani.\n* **Brahmagupta:** A 7th-century mathematician, known for Brahmasphutasiddhanta, which introduced key concepts including the number zero."
  },
  {
    "id": 236,
    "question": "The terminal competency to be achieved in Geometry at the primary stage is (APTET 2012)",
    "options": [
      "to understand the types of triangles",
      "to draw a circle when radius is given",
      "to draw an angle equal to the given angle",
      "to express the concept of a circle and technical words associated with it"
    ],
    "correctAnswer": 3,
    "explanation": "At the primary stage, the focus of geometry education is on developing foundational concepts and vocabulary rather than complex construction skills. A 'terminal competency' refers to the ultimate goal or a broad, encompassing skill.\n\n* Options (2) and (3) describe specific construction skills using tools, which are typically introduced at the upper primary or middle school level.\n* Option (1) is a valid competency but is a subset of a broader understanding of shapes.\n* Option (4) represents a comprehensive, conceptual goal. It involves not just recognizing a circle but also understanding what it is and being able to use associated vocabulary (like center, edge, round), which is a key terminal competency for the primary level."
  },
  {
    "id": 237,
    "question": "Students are asked to find the various characteristics of a rectangle by using a geometric box. The teaching method adopted is the (APTET 2012)",
    "options": [
      "playway method",
      "problem solving method",
      "Heuristic method",
      "project method"
    ],
    "correctAnswer": 2,
    "explanation": "The method described involves students actively investigating and discovering properties for themselves. This aligns best with the Heuristic method.\n\n* **Heuristic Method:** This is a discovery-based or inquiry-based method where the student is put in the position of an independent discoverer. The teacher guides the students to find answers to problems on their own. Using tools to find characteristics is a classic example of this.\n* **Playway Method:** Learning is done through activities and games.\n* **Problem Solving Method:** Focuses on finding a solution to a specific, well-defined problem.\n* **Project Method:** Involves a long-term, in-depth investigation of a real-world topic or problem."
  },
  {
    "id": 238,
    "question": "In the lesson plan presently being prepared in schools, the aspect to be indicated after content analysis is (APTET 2012)",
    "options": [
      "teaching learning activities",
      "competencies to be achieved",
      "teaching learning material",
      "evaluation"
    ],
    "correctAnswer": 1,
    "explanation": "The logical sequence in lesson planning is as follows:\n\n1.  **Content Analysis:** The teacher first analyzes the topic or content to be taught.\n2.  **Competencies to be Achieved (Learning Objectives):** Based on the content, the teacher defines what the students should know or be able to do by the end of the lesson. These are the learning goals or objectives.\n3.  **Teaching-Learning Activities:** The teacher then plans the specific activities (like lecture, group work, experiment) that will help students achieve the stated competencies.\n4.  **Teaching-Learning Material:** The teacher identifies the resources and materials needed for the planned activities.\n5.  **Evaluation:** Finally, the teacher plans how to assess whether the students have achieved the competencies.\n\nTherefore, the aspect that comes immediately after content analysis is defining the competencies to be achieved."
  },
  {
    "id": 239,
    "question": "Student verifies the outcome when two fractions are multiplied. This specification belongs to the objective of (APTET 2012)",
    "options": [
      "understanding",
      "knowledge",
      "application",
      "skill"
    ],
    "correctAnswer": 2,
    "explanation": "This question relates to the domains of learning (like Bloom's Taxonomy). 'Verifying an outcome' goes beyond simply recalling a fact or procedure.\n\n* **Knowledge:** Involves recalling information, such as stating the rule for multiplying fractions.\n* **Understanding:** Involves explaining or interpreting information, such as explaining why the rule for multiplying fractions works.\n* **Application:** Involves using a concept or procedure in a concrete situation. When a student multiplies two fractions to get a result and then verifies it (perhaps by using a diagram or an inverse operation), they are applying their knowledge of the procedure. The act of carrying out the multiplication and checking it is a direct application of learned rules.\n* **Skill:** This refers to the proficiency in carrying out the procedure. While application involves skill, 'Application' is the specific objective category in this educational context."
  },
  {
    "id": 240,
    "question": "To evaluate a text book as per the Hunter's score card, the content is to be assessed for... points. (APTET 2012)",
    "options": [
      "50",
      "250",
      "100",
      "300"
    ],
    "correctAnswer": 3,
    "explanation": "Hunter's Score Card is a tool used for the evaluation of textbooks. It assigns points to different aspects of a textbook to provide a quantitative assessment. While the exact point distribution can vary slightly in different adaptations, a widely referenced version of the scorecard allots a total of 1000 points. In this framework, the 'Content' or 'Subject Matter' is given the highest weightage. The standard distribution often allocates 300 points to the content, which includes aspects like accuracy, relevance, and organization of the subject matter."
  },
  {
    "id": 241,
    "question": "The smallest number that must be added to 321727, so that the resultant exactly divisible by 3 is .... (TSTET 2017)",
    "options": [
      "3",
      "1",
      "2",
      "4"
    ],
    "correctAnswer": 2,
    "explanation": "To determine the divisibility of a number by 3, we sum its digits. If the sum is divisible by 3, the number itself is divisible by 3.\n\n Step 1: Sum the digits of the given number, 321727.\nSum = $3 + 2 + 1 + 7 + 2 + 7 = 22$.\n\n Step 2: Find the next multiple of 3 that is greater than the sum.\nThe next multiple of 3 after 22 is 24.\n\n Step 3: Calculate the difference to find the number that needs to be added.\nNumber to add = $24 - 22 = 2$.\n\nBy adding 2 to 321727, we get 321729. The sum of its digits is $3+2+1+7+2+9 = 24$, which is divisible by 3."
  },
  {
    "id": 242,
    "question": "Number of Integers lie between $(35)^{2}$ and $(36)^{2}$ (TSTET 2017)",
    "options": [
      "74",
      "68",
      "72",
      "70"
    ],
    "correctAnswer": 3,
    "explanation": "A general rule states that the number of integers between $n^2$ and $(n+1)^2$ is $2n$.\n\n Step 1: Identify 'n' from the given problem.\nHere, $n = 35$.\n\n Step 2: Apply the formula $2n$.\nNumber of integers = $2 \\times 35 = 70$.\n\nAlternatively:\n$(36)^2 = 1296$\n$(35)^2 = 1225$\nThe number of integers between them is $(1296 - 1225) - 1 = 71 - 1 = 70$."
  },
  {
    "id": 243,
    "question": "Which of the following is not a pythagorean triple. (TSTET 2017)",
    "options": [
      "6, 8, 12",
      "5, 12, 13",
      "6, 8, 10",
      "7, 24, 25"
    ],
    "correctAnswer": 0,
    "explanation": "A set of three positive integers (a, b, c) is a Pythagorean triple if it satisfies the equation $a^2 + b^2 = c^2$, where c is the largest number.\n\n Step 1: Check each option.\n- **For (6, 8, 12):** $6^2 + 8^2 = 36 + 64 = 100$. But, $12^2 = 144$. Since $100 \\neq 144$, this is not a Pythagorean triple.\n- **For (5, 12, 13):** $5^2 + 12^2 = 25 + 144 = 169$. And, $13^2 = 169$. This is a Pythagorean triple.\n- **For (6, 8, 10):** $6^2 + 8^2 = 36 + 64 = 100$. And, $10^2 = 100$. This is a Pythagorean triple.\n- **For (7, 24, 25):** $7^2 + 24^2 = 49 + 576 = 625$. And, $25^2 = 625$. This is a Pythagorean triple."
  },
  {
    "id": 244,
    "question": "A glass rod of length 32.75 cm is broken, into three pieces. If the length of two pieces are 7.05 cm and 12.325 cm., then the length of the third piece is (in cm) (TSTET 2017)",
    "options": [
      "13.635",
      "13.475",
      "13.365",
      "13.375"
    ],
    "correctAnswer": 3,
    "explanation": " Step 1: Find the combined length of the two known pieces.\nSum of lengths = $7.05 + 12.325 = 19.375$ cm.\n\n Step 2: Subtract the combined length from the total length of the rod to find the length of the third piece.\nLength of the third piece = Total length - Sum of lengths\nLength = $32.75 - 19.375 = 13.375$ cm."
  },
  {
    "id": 245,
    "question": "$|124-\\{(48\\div6+4\\times3-(-6))\\}|=$ (TSTET 2017)",
    "options": [
      "368/3",
      "112",
      "98",
      "122"
    ],
    "correctAnswer": 2,
    "explanation": "We need to solve the expression using the BODMAS rule (Brackets, Orders, Division, Multiplication, Addition, Subtraction).\n\n Step 1: Solve the expression inside the curly braces `{}`.\n$(48 \\div 6 + 4 \\times 3 - (-6))$\n\n Step 2: Perform division and multiplication first.\n$48 \\div 6 = 8$\n$4 \\times 3 = 12$\nThe expression becomes: $(8 + 12 - (-6))$\n\n Step 3: Perform addition and subtraction.\n$8 + 12 + 6 = 26$.\n\n Step 4: Substitute the result back into the main expression.\n$|124 - 26| = |98| = 98$."
  },
  {
    "id": 246,
    "question": "After 12 years, Devasena's age will become four times that of her present age, then her present age is (in years) (TSTET 2017)",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "explanation": "Let Devasena's present age be 'x' years.\n\n Step 1: Formulate the equation based on the given information.\nHer age after 12 years will be $x + 12$.\nFour times her present age is $4x$.\nAccording to the problem, $x + 12 = 4x$.\n\n Step 2: Solve the equation for x.\n$12 = 4x - x$\n$12 = 3x$\n$x = \\frac{12}{3}$\n$x = 4$.\n\nDevasena's present age is 4 years."
  },
  {
    "id": 247,
    "question": "If a pie-chart is drawn for the following data, then the angle of sector representing mathematics is ....\nSubject: Telugu, English, Mathematics, Science, Social\nMarks: 17, 20, 18, 16, 19\n(TSTET 2017)",
    "options": [
      "76°",
      "80°",
      "72°",
      "68°"
    ],
    "correctAnswer": 2,
    "explanation": "The angle of a sector in a pie chart is calculated by the formula: Angle = (Value of the component / Total value) * 360°.\n\n Step 1: Calculate the total marks.\nTotal Marks = $17 + 20 + 18 + 16 + 19 = 90$.\n\n Step 2: Identify the marks for Mathematics.\nMarks in Mathematics = 18.\n\n Step 3: Calculate the angle for the Mathematics sector.\nAngle = $(\\frac{18}{90}) \\times 360^{\\circ}$\nAngle = $(\\frac{1}{5}) \\times 360^{\\circ} = 72^{\\circ}$."
  },
  {
    "id": 248,
    "question": "The parallel sides of a trapezium are in the ratio of 2:5 and the distance between parallel sides is 10 cm. If the area of trapezium is 350 $cm^{2}$, then the lengths of parallel sides are (in cm) .... (TSTET 2017)",
    "options": [
      "12, 60",
      "10, 25",
      "20, 50",
      "15, 75"
    ],
    "correctAnswer": 2,
    "explanation": "The formula for the area of a trapezium is: Area = $\\frac{1}{2} \\times (\\text{sum of parallel sides}) \\times (\\text{height})$.\n\n Step 1: Let the lengths of the parallel sides be $2x$ and $5x$.\nThe height (h) is given as 10 cm, and the Area is 350 $cm^2$.\n\n Step 2: Substitute the values into the formula.\n$350 = \\frac{1}{2} \\times (2x + 5x) \\times 10$\n\n Step 3: Solve for x.\n$350 = 5 \\times (7x)$\n$350 = 35x$\n$x = \\frac{350}{35} = 10$.\n\n Step 4: Calculate the lengths of the parallel sides.\nFirst side = $2x = 2 \\times 10 = 20$ cm.\nSecond side = $5x = 5 \\times 10 = 50$ cm."
  },
  {
    "id": 249,
    "question": "If each edge of a cube is doubled, then its volume becomes..... (TSTET 2017)",
    "options": [
      "1/8 times",
      "4 times",
      "16 times",
      "8 times"
    ],
    "correctAnswer": 3,
    "explanation": "The formula for the volume of a cube is $V = a^3$, where 'a' is the length of an edge.\n\n Step 1: Define the original volume.\nLet the original edge be 'a'. The original volume is $V_{1} = a^3$.\n\n Step 2: Define the new edge and calculate the new volume.\nThe new edge is doubled, so it becomes '2a'.\nThe new volume is $V_{2} = (2a)^3 = 8a^3$.\n\n Step 3: Compare the new volume with the original volume.\n$V_{2} = 8 \\times (a^3) = 8 \\times V_{1}$.\nThe volume becomes 8 times the original volume."
  },
  {
    "id": 250,
    "question": "If the perimeter of an equilateral triangle is 24 cm, then its altitude is (in cm) (TSTET 2017)",
    "options": [
      "24√3",
      "3√3",
      "16√3",
      "4√3"
    ],
    "correctAnswer": 3,
    "explanation": " Step 1: Find the length of a side of the equilateral triangle.\nPerimeter = $3 \\times$ side.\n$24 = 3 \\times$ side.\nSide (a) = $\\frac{24}{3} = 8$ cm.\n\n Step 2: Use the formula for the altitude (h) of an equilateral triangle.\nAltitude (h) = $\\frac{\\sqrt{3}}{2} \\times a$.\n\n Step 3: Substitute the side length into the formula.\nh = $\\frac{\\sqrt{3}}{2} \\times 8 = 4\\sqrt{3}$ cm."
  },
  {
    "id": 251,
    "question": "The size of the class of the classes 10-19; 20-29; 30-39; ... (TSTET 2017)",
    "options": [
      "10.5",
      "10.0",
      "9.0",
      "9.5"
    ],
    "correctAnswer": 1,
    "explanation": "The given classes (10-19, 20-29) are in the inclusive form. The class size, or class interval, is the difference between the upper and lower boundaries of any class, or the difference between two consecutive lower or upper limits.\n\nMethod 1: Using consecutive lower limits.\nClass size = Lower limit of second class - Lower limit of first class\nClass size = $20 - 10 = 10$.\n\nMethod 2: Using boundaries (for inclusive classes).\nLower Boundary = Lower Limit - 0.5 = $10 - 0.5 = 9.5$\nUpper Boundary = Upper Limit + 0.5 = $19 + 0.5 = 19.5$\nClass Size = Upper Boundary - Lower Boundary = $19.5 - 9.5 = 10$."
  },
  {
    "id": 252,
    "question": "The part of the home work left, when Pranava finished $\\frac{5}{12}$ part of his home work on saturday and $\\frac{1}{4}$ part on sunday is ..... (TSTET 2017)",
    "options": [
      "5/12",
      "1/3",
      "1/4",
      "1/12"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: Calculate the total fraction of homework completed.\nTotal work done = Work on Saturday + Work on Sunday\nTotal work done = $\\frac{5}{12} + \\frac{1}{4}$.\n\n Step 2: Find a common denominator to add the fractions. The least common multiple of 12 and 4 is 12.\n$\\frac{1}{4} = \\frac{1 \\times 3}{4 \\times 3} = \\frac{3}{12}$.\nTotal work done = $\\frac{5}{12} + \\frac{3}{12} = \\frac{8}{12}$.\n\n Step 3: Simplify the fraction of work done.\n$\\frac{8}{12} = \\frac{2}{3}$.\n\n Step 4: Calculate the remaining part of the homework. Let the total work be 1.\nWork left = $1 - \\text{Total work done} = 1 - \\frac{2}{3} = \\frac{3-2}{3} = \\frac{1}{3}$."
  },
  {
    "id": 253,
    "question": "The largest of the fractions, $\\frac{5}{7}$, $\\frac{3}{5}$, $\\frac{9}{14}$ and $\\frac{8}{15}$ is..... (TSTET 2017)",
    "options": [
      "5/7",
      "3/5",
      "9/14",
      "8/15"
    ],
    "correctAnswer": 0,
    "explanation": "To compare the fractions, it is easiest to convert them into decimal form.\n\n Step 1: Convert each fraction to a decimal.\n- $\\frac{5}{7} \\approx 0.714$\n- $\\frac{3}{5} = 0.600$\n- $\\frac{9}{14} \\approx 0.642$\n- $\\frac{8}{15} \\approx 0.533$\n\n Step 2: Compare the decimal values.\n$0.714 > 0.642 > 0.600 > 0.533$.\n\nThe largest decimal is 0.714, which corresponds to the fraction $\\frac{5}{7}$."
  },
  {
    "id": 254,
    "question": "In $\\triangle ABC$, if $\\angle A=60^{\\circ}$ and $\\angle B=\\angle C$. then triangle ABC is (TSTET 2017)",
    "options": [
      "Obtuse angled",
      "Scalene",
      "Right angled",
      "Equilateral"
    ],
    "correctAnswer": 3,
    "explanation": "The sum of the angles in any triangle is always 180°.\n\n Step 1: Use the sum of angles property.\n$\\angle A + \\angle B + \\angle C = 180^{\\circ}$.\n\n Step 2: Substitute the given values.\nWe are given $\\angle A = 60^{\\circ}$ and $\\angle B = \\angle C$.\n$60^{\\circ} + \\angle B + \\angle B = 180^{\\circ}$.\n\n Step 3: Solve for $\\angle B$.\n$2\\angle B = 180^{\\circ} - 60^{\\circ}$\n$2\\angle B = 120^{\\circ}$\n$\\angle B = 60^{\\circ}$.\n\n Step 4: Determine $\\angle C$.\nSince $\\angle B = \\angle C$, then $\\angle C = 60^{\\circ}$.\n\nSince all three angles are 60°, the triangle is an equilateral triangle."
  },
  {
    "id": 255,
    "question": "The length of a Rectangle is 3 cm more than its breadth. If its perimeter is 30 cm, then its length is (in cm) ..... (TSTET 2017)",
    "options": [
      "3",
      "10",
      "9",
      "6"
    ],
    "correctAnswer": 2,
    "explanation": "The formula for the perimeter of a rectangle is $P = 2(l + b)$, where 'l' is the length and 'b' is the breadth.\n\n Step 1: Set up equations based on the given information.\nLet the breadth be 'b'.\nThe length 'l' is 3 cm more than the breadth, so $l = b + 3$.\nThe perimeter P = 30 cm.\n\n Step 2: Substitute the expressions for l and P into the perimeter formula.\n$30 = 2((b + 3) + b)$.\n\n Step 3: Solve for the breadth 'b'.\n$30 = 2(2b + 3)$\n$15 = 2b + 3$\n$12 = 2b$\n$b = 6$ cm.\n\n Step 4: Calculate the length 'l'.\n$l = b + 3 = 6 + 3 = 9$ cm."
  },
  {
    "id": 256,
    "question": "On subtracting $3x^{2}+5x+3$ from $7x^{3}+6x-9$ (TSTET 2017)",
    "options": [
      "$7x^{3}-3x^{2}+x-12$",
      "$-7x^{3}-3x^{2}+x+12$",
      "$-7x^{3}+3x^{2}-x+12$",
      "$7x^{3}+3x^{2}-x-12$"
    ],
    "correctAnswer": 0,
    "explanation": "The problem asks to compute $(7x^{3}+6x-9) - (3x^{2}+5x+3)$.\n\n Step 1: Distribute the negative sign to each term in the second polynomial.\n$7x^{3}+6x-9 - 3x^{2} - 5x - 3$.\n\n Step 2: Group the like terms together.\n$7x^{3} - 3x^{2} + (6x - 5x) + (-9 - 3)$.\n\n Step 3: Combine the like terms.\n$7x^{3} - 3x^{2} + x - 12$."
  },
  {
    "id": 257,
    "question": "In a triangle, one of the exterior angles is 84°. If its interior opposite angles are in the ratio of 1: 2, then the angles of the triangle are (TSTET 2017)",
    "options": [
      "40°, 80°, 60°",
      "30°, 60°, 90°",
      "24°, 48°, 108°",
      "28°, 56°, 96°"
    ],
    "correctAnswer": 3,
    "explanation": "The exterior angle of a triangle is equal to the sum of its two interior opposite angles.\n\n Step 1: Set up an equation for the interior opposite angles.\nLet the angles be $x$ and $2x$.\nTheir sum is equal to the exterior angle, 84°.\n$x + 2x = 84^{\\circ}$.\n\n Step 2: Solve for x.\n$3x = 84^{\\circ}$\n$x = 28^{\\circ}$.\n\n Step 3: Find the two interior opposite angles.\nThe first angle is $x = 28^{\\circ}$.\nThe second angle is $2x = 2 \\times 28^{\\circ} = 56^{\\circ}$.\n\n Step 4: Find the third angle of the triangle.\nThe third angle is supplementary to the exterior angle.\nThird angle = $180^{\\circ} - 84^{\\circ} = 96^{\\circ}$.\n\nThe angles of the triangle are 28°, 56°, and 96°."
  },
  {
    "id": 258,
    "question": "If PQRS is a parallelogram then, $\\angle P-\\angle R=.........$ (TSTET 2017)",
    "options": [
      "60°",
      "90°",
      "0°",
      "45°"
    ],
    "correctAnswer": 2,
    "explanation": "One of the fundamental properties of a parallelogram is that its opposite angles are equal in measure.\n\n Step 1: Identify the opposite angles.\nIn parallelogram PQRS, $\\angle P$ and $\\angle R$ are opposite angles.\n\n Step 2: Apply the property.\nTherefore, $\\angle P = \\angle R$.\n\n Step 3: Calculate the difference.\n$\\angle P - \\angle R = \\angle P - \\angle P = 0^{\\circ}$."
  },
  {
    "id": 259,
    "question": "If 21% of a certain number is 63, then the number is (TSTET 2017)",
    "options": [
      "350",
      "300",
      "250",
      "200"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: Translate the statement into a mathematical equation.\nLet the number be 'x'.\n'21% of x' can be written as $\\frac{21}{100} \\times x$.\nSo, the equation is $\\frac{21}{100} \\times x = 63$.\n\n Step 2: Solve the equation for x.\n$x = 63 \\times \\frac{100}{21}$\n$x = 3 \\times 100$\n$x = 300$."
  },
  {
    "id": 260,
    "question": "In a school, there are 3 teachers to 45 students. If 300 more students are enrolled, then the number of additional teachers required in the school to maintain the same ratio. (TSTET 2017)",
    "options": [
      "20",
      "30",
      "25",
      "23"
    ],
    "correctAnswer": 0,
    "explanation": " Step 1: Determine the teacher-to-student ratio.\nThe ratio is 3 teachers for 45 students. We can find the number of students per teacher.\nStudents per teacher = $\\frac{45}{3} = 15$.\nSo, the ratio is 1 teacher for every 15 students.\n\n Step 2: Calculate the number of additional teachers needed for the new students.\nNumber of new students = 300.\nAdditional teachers needed = $\\frac{\\text{Number of new students}}{\\text{Students per teacher}}$\nAdditional teachers needed = $\\frac{300}{15} = 20$."
  },
  {
    "id": 261,
    "question": "The present population of a city is 157464. If the population increased by 8% annually then the population of the city 3 years ago was.... (TSTET 2017)",
    "options": [
      "1,25,000",
      "1,00,000",
      "1,20,000",
      "1,15,000"
    ],
    "correctAnswer": 0,
    "explanation": "We can use the formula for compound growth: $A = P(1 + \\frac{R}{100})^n$, where A is the final amount, P is the principal amount, R is the rate, and n is the time.\n\n Step 1: Identify the given values.\nPresent population (A) = 157464\nRate of increase (R) = 8%\nTime (n) = 3 years\nPopulation 3 years ago (P) = ?\n\n Step 2: Substitute the values into the formula.\n$157464 = P(1 + \\frac{8}{100})^3$\n$157464 = P(1 + \\frac{2}{25})^3$\n$157464 = P(\\frac{27}{25})^3$\n$157464 = P \\times \\frac{19683}{15625}$\n\n Step 3: Solve for P.\n$P = \\frac{157464 \\times 15625}{19683}$\n$P = 8 \\times 15625$\n$P = 125,000$."
  },
  {
    "id": 262,
    "question": "The scale of map is given as 1:250000. Two cities are 6 cm apart on the map. Then the actual distance between them is ..... (TSTET 2017)",
    "options": [
      "25 km",
      "15 km",
      "10 km",
      "6 km"
    ],
    "correctAnswer": 1,
    "explanation": "The scale 1:250,000 means that 1 unit of distance on the map represents 250,000 of the same units in reality.\n\n Step 1: Calculate the actual distance in centimeters.\nActual distance (cm) = Map distance (cm) $\\times$ Scale factor\nActual distance (cm) = $6 \\times 250,000 = 1,500,000$ cm.\n\n Step 2: Convert the distance from centimeters to kilometers.\nWe know that 1 km = 1000 m and 1 m = 100 cm.\nTherefore, 1 km = $1000 \\times 100 = 100,000$ cm.\nActual distance (km) = $\\frac{1,500,000}{100,000} = 15$ km."
  },
  {
    "id": 263,
    "question": "If the mean of the observations $x_{1}, x_{2}, x_{3},.......x_{10}$ is 30, then the mean of $x_{1}+2, x_{2}+4, x_{3}+6,.........x_{10}+20$ is ...... (TSTET 2017)",
    "options": [
      "42",
      "39",
      "40",
      "41"
    ],
    "correctAnswer": 3,
    "explanation": "A property of the mean states that the new mean is the old mean plus the mean of the numbers added to each observation.\n\n Step 1: Find the mean of the numbers added to the observations.\nThe numbers added are 2, 4, 6, ..., 20. This is an arithmetic progression with 10 terms.\nThe sum of this progression is $S = \\frac{n}{2}(a + l) = \\frac{10}{2}(2 + 20) = 5(22) = 110$.\nThe mean of these added numbers is $\\frac{\\text{Sum}}{\\text{Count}} = \\frac{110}{10} = 11$.\n\n Step 2: Calculate the new mean.\nNew Mean = Old Mean + Mean of added numbers\nNew Mean = $30 + 11 = 41$."
  },
  {
    "id": 264,
    "question": "The area of rectangular plot is 1875 sq. m. If its length is 3 times its breadth, then the perimeter of plot is (in metres) (TSTET 2017)",
    "options": [
      "200",
      "100",
      "1000",
      "625"
    ],
    "correctAnswer": 0,
    "explanation": " Step 1: Set up equations for the dimensions and area.\nLet the breadth be 'b' meters.\nLet the length 'l' be $3b$ meters.\nArea = length $\\times$ breadth = $l \\times b = 1875$.\n\n Step 2: Solve for the dimensions.\n$(3b) \\times b = 1875$\n$3b^2 = 1875$\n$b^2 = \\frac{1875}{3} = 625$\n$b = \\sqrt{625} = 25$ meters.\nLength $l = 3b = 3 \\times 25 = 75$ meters.\n\n Step 3: Calculate the perimeter.\nPerimeter = $2(l + b)$\nPerimeter = $2(75 + 25) = 2(100) = 200$ meters."
  },
  {
    "id": 265,
    "question": "A student generalizes that \"If the last digit of a number is 0, 2, 4, 6, or 8, then that number is divisible by 2\", the Academic standard attained by the student falls under (TSTET 2017)",
    "options": [
      "Reasoning - proof",
      "Problem solving",
      "Communication",
      "Representation-visualisation"
    ],
    "correctAnswer": 0,
    "explanation": "The student has identified a pattern from specific examples and formulated a general rule (the divisibility rule for 2). This process of moving from specific observations to a general conclusion and justifying it is a form of logical reasoning. By stating a clear rule that can be applied universally, the student is demonstrating the academic standard of 'Reasoning and Proof'."
  },
  {
    "id": 266,
    "question": "According to the Piaget's cognitive development, the stage in which the learner understands the law of conservation is (TSTET 2017)",
    "options": [
      "Sensory- motor stage",
      "Formal operational stage",
      "Concrete operational stage",
      "Pre-operational stage"
    ],
    "correctAnswer": 2,
    "explanation": "The law of conservation is the understanding that a quantity remains the same despite changes in its appearance or container shape. According to Jean Piaget's theory, this cognitive ability develops during the **Concrete Operational Stage**, which typically occurs from ages 7 to 11. In this stage, children's thinking becomes more logical and organized."
  },
  {
    "id": 267,
    "question": "The teaching method which helps in proving geometrical theorems with reasoning is .... (TSTET 2017)",
    "options": [
      "Deductive method",
      "Project method",
      "Analysis method",
      "Inductive method"
    ],
    "correctAnswer": 2,
    "explanation": "The **Analysis method** is a process of reasoning that starts from what is to be proved (the conclusion) and works backward,  Step by  Step, to the given data or known axioms (the hypothesis). This 'working backward' approach is extremely useful for discovering the logical  Steps needed to construct a proof for a geometrical theorem. While the final proof is written deductively (from hypothesis to conclusion), the discovery process often relies on analysis."
  },
  {
    "id": 268,
    "question": "$a\\div b=c \\implies c\\times b=a, \\forall a, b, c\\in N$ then the type of concepts involved in this is .... (TSTET 2017)",
    "options": [
      "Concrete concepts",
      "Conjunctive concepts",
      "Disjunctive concepts",
      "Relational concepts"
    ],
    "correctAnswer": 3,
    "explanation": "This statement does not define a single concept but rather illustrates the connection between two different concepts: division and multiplication. It shows that they are inverse operations. Concepts that are defined by the relationship between other attributes or concepts are known as **Relational concepts**. Here, the meaning of division is established through its relationship with multiplication."
  },
  {
    "id": 269,
    "question": "The most appropriate teaching material used by the teacher in teaching of 'decimal fractions' to the student is (TSTET 2017)",
    "options": [
      "Bulliten Board",
      "Fraction disc",
      "Grid paper",
      "Black Board"
    ],
    "correctAnswer": 2,
    "explanation": "**Grid paper**, particularly a 10x10 grid, is a highly effective visual aid for teaching decimal fractions. The entire grid can represent one whole unit. A single row or column (10 small squares) can represent one-tenth (0.1), and a single small square can represent one-hundredth (0.01). This provides a concrete model that helps students understand the concept of decimal place value and perform operations like addition and subtraction visually."
  },
  {
    "id": 270,
    "question": "The concepts of mathematics are in hierarchical order. If a student does not have the basic concepts, then the corrective measure to be taken up by the teacher to make the student move forward in learning is .... (TSTET 2017)",
    "options": [
      "To prepare special learning material.",
      "To diagnose the learning difficulties.",
      "To teach along with other students.",
      "To diagnose and take up remedial teaching."
    ],
    "correctAnswer": 3,
    "explanation": "Because mathematical knowledge is cumulative, a missing foundational concept will prevent a student from understanding more advanced topics. The most effective approach is a two- Step corrective measure: first, the teacher must **diagnose** the specific gaps in the student's understanding. Then, based on that diagnosis, the teacher must provide targeted instruction, known as **remedial teaching**, to help the student master the prerequisite skills before moving on with the rest of the class."
  },
  {
    "id": "271",
    "question": "Maximum day time temperatures of a city in a week are recorded as 25°C, 28°C, 27°C, 31°C, 29°C, 28°C and 28°C. Then, the average temperature of the week in that city is: (TSTET 2023)",
    "options": [
      "25°C",
      "26°C",
      "28°C",
      "24°C"
    ],
    "correctAnswer": 2,
    "explanation": "To find the average temperature, we need to calculate the sum of all the temperatures and then divide by the number of days (which is 7).\n\n Step 1: Sum the temperatures.\nSum = 25 + 28 + 27 + 31 + 29 + 28 + 28 = 196°C\n\n Step 2: Divide the sum by the number of days.\nAverage = Sum / Number of days\nAverage = 196 / 7 = 28°C\n\nTherefore, the average temperature of the week is 28°C."
  },
  {
    "id": "272",
    "question": "If we add 5 to twice a number, we get 51. Then, the number is: (TSTET 2023)",
    "options": [
      "46",
      "28",
      "23",
      "24"
    ],
    "correctAnswer": 2,
    "explanation": "Let the unknown number be 'x'.\n\n Step 1: Translate the problem into a mathematical equation.\n'Twice a number' can be written as 2x.\n'Add 5 to twice a number' can be written as 2x + 5.\n'we get 51' means the expression is equal to 51.\nSo, the equation is: 2x + 5 = 51\n\n Step 2: Solve the equation for x.\nSubtract 5 from both sides: 2x = 51 - 5\n2x = 46\nDivide by 2: x = 46 / 2\nx = 23\n\nTherefore, the number is 23."
  },
  {
    "id": "273",
    "question": "The number with which 3⁻⁵ should be multiplied so that the product becomes 729 is: (TSTET 2023)",
    "options": [
      "3⁶",
      "3⁹",
      "3⁵",
      "3¹¹"
    ],
    "correctAnswer": 3,
    "explanation": "Let the unknown number be 'x'.\n\n Step 1: Set up the equation based on the problem statement.\n$3^{-5} \\times x = 729$\n\n Step 2: Express 729 as a power of 3.\n$729 = 3 \\times 243 = 3 \\times 3 \\times 81 = 3 \\times 3 \\times 3 \\times 27 = 3 \\times 3 \\times 3 \\times 3 \\times 9 = 3 \\times 3 \\times 3 \\times 3 \\times 3 \\times 3 = 3^6$\n\n Step 3: Substitute this back into the equation.\n$3^{-5} \\times x = 3^6$\n\n Step 4: Solve for x using the laws of exponents.\n$x = \\frac{3^6}{3^{-5}}$\nUsing the rule $\\frac{a^m}{a^n} = a^{m-n}$, we get:\n$x = 3^{6 - (-5)} = 3^{6+5} = 3^{11}$\n\nTherefore, the number is $3^{11}$."
  },
  {
    "id": "274",
    "question": "0.56 = ...... (TSTET 2023)",
    "options": [
      "14/50",
      "14/25",
      "1/56",
      "1/14"
    ],
    "correctAnswer": 1,
    "explanation": "To convert a decimal to a fraction, we write the decimal number as the numerator and its place value as the denominator.\n\n Step 1: Write the decimal as a fraction.\n0.56 has two decimal places, so the denominator will be 100.\n$0.56 = \\frac{56}{100}$\n\n Step 2: Simplify the fraction.\nFind the greatest common divisor (GCD) of 56 and 100. The GCD is 4.\nDivide both the numerator and the denominator by 4:\n$\\frac{56 \\div 4}{100 \\div 4} = \\frac{14}{25}$\n\nTherefore, 0.56 is equal to 14/25."
  },
  {
    "id": "275",
    "question": "In a proportion 2:8 = 6:x. Then, the value of x is: (TSTET 2023)",
    "options": [
      "48",
      "16",
      "24",
      "12"
    ],
    "correctAnswer": 2,
    "explanation": "In a proportion, the product of the means is equal to the product of the extremes.\n\n Step 1: Identify the means and extremes in the proportion a:b = c:d.\nThe extremes are 'a' and 'd'. The means are 'b' and 'c'.\nIn 2:8 = 6:x, the extremes are 2 and x, and the means are 8 and 6.\n\n Step 2: Set the product of the means equal to the product of the extremes.\nProduct of extremes = Product of means\n$2 \\times x = 8 \\times 6$\n\n Step 3: Solve for x.\n$2x = 48$\n$x = \\frac{48}{2}$\n$x = 24$\n\nTherefore, the value of x is 24."
  },
  {
    "id": "276",
    "question": "The number of vertices in a kaleidoscope is: (TSTET 2023)",
    "options": [
      "6",
      "4",
      "8",
      "12"
    ],
    "correctAnswer": 2,
    "explanation": "A standard kaleidoscope is constructed using three mirrors to form a triangular prism. A triangular prism has 6 vertices. However, this is not the intended answer based on common test question patterns where the outer casing, often a cuboid, is considered.\n\nLet's consider the geometry of common shapes:\n- A triangular prism has 6 vertices, 9 edges, and 5 faces.\n- A cuboid (like a box) has 8 vertices, 12 edges, and 6 faces.\n\nGiven the options and the frequent ambiguity in such questions, the question likely refers to a simplified model of a kaleidoscope housed in a cuboid-shaped casing. A cuboid has 8 vertices. The Telugu version of the question asks for 'edges' ('అంచుల'), which for a cuboid would be 12 (also an option), indicating a discrepancy in translation. Assuming the English question is to be followed and it refers to a cuboid model, the answer is 8."
  },
  {
    "id": "278",
    "question": "The LCM of two numbers is 16 and their product is 3888. Their HCF is: (TSTET 2023)",
    "options": [
      "48",
      "98",
      "243",
      "164"
    ],
    "correctAnswer": 2,
    "explanation": "We use the fundamental relationship between the Highest Common Factor (HCF) and the Lowest Common Multiple (LCM) of two numbers.\n\n Step 1: State the formula.\nThe product of two numbers is equal to the product of their HCF and LCM.\nProduct of numbers = HCF × LCM\n\n Step 2: Substitute the given values into the formula.\nGiven: Product = 3888, LCM = 16.\n3888 = HCF × 16\n\n Step 3: Solve for HCF.\nDivide the product by the LCM:\nHCF = 3888 / 16\nHCF = 243\n\nTherefore, their HCF is 243."
  },
  {
    "id": "280",
    "question": "The percentage increase in the area of a square, if its side is doubled, is: (TSTET 2023)",
    "options": [
      "300%",
      "150%",
      "200%",
      "400%"
    ],
    "correctAnswer": 0,
    "explanation": "Let the original side of the square be 'a'.\n\n Step 1: Calculate the original area.\nOriginal Area = side × side = $a^2$\n\n Step 2: Calculate the new side and new area.\nThe side is doubled, so the new side = 2a.\nNew Area = (2a) × (2a) = $4a^2$\n\n Step 3: Calculate the increase in area.\nIncrease = New Area - Original Area = $4a^2 - a^2 = 3a^2$\n\n Step 4: Calculate the percentage increase.\nPercentage Increase = (Increase / Original Area) × 100\nPercentage Increase = ($3a^2 / a^2$) × 100 = 3 × 100 = 300%\n\nTherefore, the percentage increase in the area is 300%."
  },
  {
    "id": "281",
    "question": "A cloth merchant bought a roll of cotton cloth of length 120m. He sold 49m 96cm of the cloth. The cloth left in the roll is: (TSTET 2023)",
    "options": [
      "60m 04cm",
      "60m 96cm",
      "70m 04cm",
      "80m 96cm"
    ],
    "correctAnswer": 2,
    "explanation": "We need to subtract the length of the sold cloth from the total length of the roll.\n\n Step 1: Set up the subtraction.\nTotal length = 120 m 00 cm\nSold length = 49 m 96 cm\n\n Step 2: Perform the subtraction, borrowing where necessary. Since we cannot subtract 96 cm from 00 cm, we borrow 1 meter (which is 100 cm) from the meters column.\n120 m becomes 119 m.\n00 cm becomes 100 cm.\nThe problem is now: 119 m 100 cm - 49 m 96 cm.\n\n Step 3: Subtract the centimeters and then the meters.\nCentimeters: 100 cm - 96 cm = 4 cm\nMeters: 119 m - 49 m = 70 m\n\nThe cloth left is 70 m 04 cm."
  },
  {
    "id": "282",
    "question": "Which of the following is a FALSE statement relating to data handling? (TSTET 2023)",
    "options": [
      "The central angle of each sector in a pie chart is inversely proportional to the quantity that it represents.",
      "The numerical entries in the data are called observations.",
      "The arithmetic mean always lies between the highest and lowest observations of the data.",
      "Bimodal data contains two modes."
    ],
    "correctAnswer": 0,
    "explanation": "Let's analyze each statement:\n\n1.  **The central angle of each sector in a pie chart is inversely proportional to the quantity that it represents.** This is **FALSE**. The central angle is *directly* proportional to the quantity. A larger quantity will have a larger sector and thus a larger central angle.\n2.  **The numerical entries in the data are called observations.** This is **TRUE**. Each piece of numerical information collected is an observation.\n3.  **The arithmetic mean always lies between the highest and lowest observations of the data.** This is **TRUE**. The mean is a measure of central tendency and cannot be smaller than the smallest value or larger than the largest value.\n4.  **Bimodal data contains two modes.** This is **TRUE**. The mode is the most frequently occurring value. Bimodal means there are two such values."
  },
  {
    "id": "283",
    "question": "Which of the following statement is FALSE? (TSTET 2023)",
    "options": [
      "All rhombuses are kites.",
      "All rhombuses are parallelograms.",
      "All squares are rhombuses and also rectangles.",
      "All kites are rhombuses."
    ],
    "correctAnswer": 3,
    "explanation": "Let's analyze the properties of these quadrilaterals:\n\n1.  **All rhombuses are kites.** This is **TRUE**. A kite is a quadrilateral with two pairs of equal-length sides that are adjacent to each other. A rhombus has all four sides equal, which satisfies this condition.\n2.  **All rhombuses are parallelograms.** This is **TRUE**. A rhombus has two pairs of parallel sides, which is the definition of a parallelogram.\n3.  **All squares are rhombuses and also rectangles.** This is **TRUE**. A square has all the properties of a rhombus (four equal sides) and a rectangle (four right angles).\n4.  **All kites are rhombuses.** This is **FALSE**. A kite can have two pairs of adjacent equal sides without all four sides being equal. A rhombus requires all four sides to be equal. Therefore, not every kite is a rhombus."
  },
  {
    "id": "284",
    "question": "The two equal sides of an isosceles triangle are 5cm each and the other side is 4cm. Then, half of the perimeter (in cm) of the triangle is: (TSTET 2023)",
    "options": [
      "4.5",
      "7",
      "14",
      "9"
    ],
    "correctAnswer": 1,
    "explanation": "The perimeter of a polygon is the sum of the lengths of all its sides.\n\n Step 1: Calculate the perimeter of the isosceles triangle.\nThe sides are 5 cm, 5 cm, and 4 cm.\nPerimeter = 5 + 5 + 4 = 14 cm.\n\n Step 2: Calculate half of the perimeter.\nHalf of the perimeter = Perimeter / 2\nHalf of the perimeter = 14 / 2 = 7 cm.\n\nTherefore, half of the perimeter is 7 cm."
  },
  {
    "id": "286",
    "question": "40% of a number is 600. Then, the number is: (TSTET 2023)",
    "options": [
      "1400",
      "1200",
      "1500",
      "1600"
    ],
    "correctAnswer": 2,
    "explanation": "Let the unknown number be 'x'.\n\n Step 1: Translate the statement into a mathematical equation.\n'40% of a number' can be written as $\\frac{40}{100} \\times x$ or $0.40x$.\nSo, the equation is: $0.40x = 600$.\n\n Step 2: Solve for x.\nDivide both sides by 0.40:\n$x = \\frac{600}{0.40}$\n\n Step 3: To simplify the division, multiply the numerator and denominator by 10.\n$x = \\frac{6000}{4}$\n$x = 1500$\n\nTherefore, the number is 1500."
  },
  {
    "id": "287",
    "question": "Which of the following is a Pythagorean triplet? (TSTET 2023)",
    "options": [
      "10, 24, 25",
      "15, 37, 39",
      "12, 48, 50",
      "9, 12, 15"
    ],
    "correctAnswer": 3,
    "explanation": "A Pythagorean triplet consists of three positive integers a, b, and c, such that $a^2 + b^2 = c^2$. We need to check each option.\n\n1.  **10, 24, 25:**\n    $10^2 + 24^2 = 100 + 576 = 676$.\n    $25^2 = 625$. Since $676 \\neq 625$, this is not a triplet.\n2.  **15, 37, 39:**\n    $15^2 + 37^2 = 225 + 1369 = 1594$.\n    $39^2 = 1521$. Since $1594 \\neq 1521$, this is not a triplet.\n3.  **12, 48, 50:**\n    $12^2 + 48^2 = 144 + 2304 = 2448$.\n    $50^2 = 2500$. Since $2448 \\neq 2500$, this is not a triplet.\n4.  **9, 12, 15:**\n    $9^2 + 12^2 = 81 + 144 = 225$.\n    $15^2 = 225$. Since $225 = 225$, this **is** a Pythagorean triplet."
  },
  {
    "id": "288",
    "question": "Descending order of 9.631, 9.694, 9.109 and 9.504 is: (TSTET 2023)",
    "options": [
      "9.694, 9.631, 9.109, 9.504",
      "9.694, 9.631, 9.504, 9.109",
      "9.504, 9.694, 9.631, 9.109",
      "9.109, 9.504, 9.631, 9.694"
    ],
    "correctAnswer": 1,
    "explanation": "Descending order means arranging the numbers from the largest to the smallest.\n\n Step 1: Compare the whole number part. All numbers have '9' as the whole number part, so we compare the decimal parts.\n\n Step 2: Compare the tenths place. We have .6, .6, .1, and .5. The largest are the two with .6. The next is .5, and the smallest is .1.\nSo, 9.109 is the smallest number.\n\n Step 3: Compare the numbers with the same tenths place (9.631 and 9.694). We look at the hundredths place: 3 vs 9. Since 9 is greater than 3, 9.694 is greater than 9.631.\n\n Step 4: Arrange the numbers in order from largest to smallest.\nLargest: 9.694\nNext: 9.631\nNext: 9.504\nSmallest: 9.109\n\nThe correct descending order is 9.694, 9.631, 9.504, 9.109."
  },
  {
    "id": "289",
    "question": "One angle of ΔABC is 50° and other two angles are equal. Then, the measure of each equal angle is: (TSTET 2023)",
    "options": [
      "50°",
      "65°",
      "40°",
      "130°"
    ],
    "correctAnswer": 1,
    "explanation": "The sum of the angles in any triangle is always 180°.\n\n Step 1: Set up the equation.\nLet the measure of each of the two equal angles be 'x'.\nThe three angles are 50°, x, and x.\nTheir sum is 180°.\nSo, $50 + x + x = 180$.\n\n Step 2: Solve the equation for x.\n$50 + 2x = 180$\nSubtract 50 from both sides:\n$2x = 180 - 50$\n$2x = 130$\nDivide by 2:\n$x = 130 / 2$\n$x = 65°$\n\nTherefore, the measure of each equal angle is 65°."
  },
  {
    "id": "290",
    "question": "√576 - 2³ = ..... (TSTET 2023)",
    "options": [
      "18",
      "24",
      "16",
      "32"
    ],
    "correctAnswer": 2,
    "explanation": "We need to evaluate the expression by calculating the square root and the cube first.\n\n Step 1: Calculate the square root of 576.\n$\sqrt{576} = 24$ (since $24 \\times 24 = 576$).\n\n Step 2: Calculate 2³.\n$2^3 = 2 \\times 2 \\times 2 = 8$.\n\n Step 3: Substitute the values back into the expression and subtract.\n$24 - 8 = 16$.\n\nTherefore, the value of the expression is 16."
  },
  {
    "id": "291",
    "question": "Suresh studies from 8:15pm to 9:30pm. Total time he studies (in minutes) is: (TSTET 2023)",
    "options": [
      "45",
      "105",
      "90",
      "75"
    ],
    "correctAnswer": 3,
    "explanation": "To find the total duration, we subtract the start time from the end time.\n\nMethod 1: Direct Subtraction\nEnd time: 9 hours 30 minutes\nStart time: 8 hours 15 minutes\nSubtracting gives: (9-8) hours and (30-15) minutes = 1 hour and 15 minutes.\nConvert to minutes: 1 hour = 60 minutes. So, 60 minutes + 15 minutes = 75 minutes.\n\nMethod 2: Counting up\nFrom 8:15 pm to 9:15 pm is exactly 1 hour (60 minutes).\nFrom 9:15 pm to 9:30 pm is an additional 15 minutes.\nTotal time = 60 + 15 = 75 minutes."
  },
  {
    "id": "292",
    "question": "At what rate per annum will a principle triple in 20 years? (TSTET 2023)",
    "options": [
      "10%",
      "20%",
      "12.5%",
      "16%"
    ],
    "correctAnswer": 0,
    "explanation": "This is a simple interest problem.\nLet the Principal (P) be P.\n\n Step 1: Determine the Amount and Interest.\nThe principal triples, so the final Amount (A) will be 3P.\nThe Simple Interest (I) earned is the Amount minus the Principal.\nI = A - P = 3P - P = 2P.\n\n Step 2: Use the Simple Interest formula.\nThe formula is $I = \\frac{P \\times T \\times R}{100}$, where T is time and R is the rate.\nGiven: I = 2P, T = 20 years.\n\n Step 3: Substitute the values and solve for R.\n$2P = \\frac{P \\times 20 \\times R}{100}$\nWe can cancel P from both sides:\n$2 = \\frac{20 \\times R}{100}$\n$2 = \\frac{R}{5}$\nMultiply both sides by 5:\n$R = 2 \\times 5 = 10$\n\nTherefore, the rate per annum is 10%."
  },
  {
    "id": "293",
    "question": "A triangle with no line of symmetry is: (TSTET 2023)",
    "options": [
      "isosceles right triangle",
      "equilateral triangle",
      "isosceles triangle",
      "scalene triangle"
    ],
    "correctAnswer": 3,
    "explanation": "A line of symmetry is a line that divides a shape into two identical halves that are mirror images of each other.\n\n- **Isosceles triangle:** Has at least two equal sides and two equal angles. It has **one** line of symmetry that bisects the angle between the equal sides.\n- **Isosceles right triangle:** A special case of an isosceles triangle. It also has **one** line of symmetry.\n- **Equilateral triangle:** Has all three sides equal and all three angles equal. It has **three** lines of symmetry.\n- **Scalene triangle:** Has all three sides of different lengths and all three angles of different measures. It has **no** lines of symmetry.\n\nTherefore, a triangle with no line of symmetry is a scalene triangle."
  },
  {
    "id": "294",
    "question": "If a laddu weighs 50g, the number of laddus in 1 kg is: (TSTET 2023)",
    "options": [
      "15",
      "20",
      "10",
      "25"
    ],
    "correctAnswer": 1,
    "explanation": "We need to find how many 50g units are in 1 kg.\n\n Step 1: Convert kilograms to grams.\nWe know that 1 kg = 1000 g.\n\n Step 2: Divide the total weight in grams by the weight of one laddu.\nNumber of laddus = Total weight / Weight of one laddu\nNumber of laddus = 1000 g / 50 g\n\n Step 3: Calculate the result.\nNumber of laddus = 20.\n\nTherefore, there are 20 laddus in 1 kg."
  },
  {
    "id": "295",
    "question": "Match the following mathematics Resources and Activities: A. Mathematics Library, B. Mathematics Laboratory, C. Mathematical Box, D. Mathematics Club with i. Showing by cutting and pasting paper that corresponding and alternate angles are equal, ii. Preparing students for competitive examinations in Mathematics, iii. Studying mathematics dictionaries, iv. Taking anywhere and doing mathematical activities. (TSTET 2023)",
    "options": [
      "A-iv, B-ii, C-i, D-iii",
      "A-iii, B-ii, C-iv, D-i",
      "A-ii, B-iii, C-i, D-iv",
      "A-iii, B-i, C-iv, D-ii"
    ],
    "correctAnswer": 3,
    "explanation": "Let's match each resource with its most appropriate activity:\n\n-   **A. Mathematics Library:** A library is a place for reference and study. Studying reference books like **(iii) mathematics dictionaries** is a primary library activity.\n-   **B. Mathematics Laboratory:** A lab is for hands-on, practical activities. **(i) Showing by cutting and pasting paper that... angles are equal** is a perfect example of a lab activity to visualize a geometric proof.\n-   **C. Mathematical Box:** A mathematical box (or geometry box) contains portable tools (ruler, compass, protractor). It is designed for **(iv) Taking anywhere and doing mathematical activities** like drawing and measuring.\n-   **D. Mathematics Club:** A club brings together students with a shared interest to engage in enrichment activities beyond the regular curriculum, such as **(ii) Preparing students for competitive examinations in Mathematics**.\n\nTherefore, the correct matching is A-iii, B-i, C-iv, D-ii."
  },
  {
    "id": "296",
    "question": "Read the following statements: Statement I: The assessment is flexible and it can be modified as needed. Statement II: The evaluation will be static, whereby the results will be in the form of a pass. Choose the correct answer: (TSTET 2023)",
    "options": [
      "Both the statements are false.",
      "Statement I is true and Statement II is false.",
      "Statement I is false and Statement II is true.",
      "Both the statements are true."
    ],
    "correctAnswer": 3,
    "explanation": "Let's analyze the pedagogical terms 'assessment' and 'evaluation'.\n\n- **Assessment** (especially formative assessment) is an ongoing process used to monitor student learning and provide feedback. It is diagnostic and process-oriented. Therefore, **Statement I is TRUE** because assessment is meant to be flexible and adaptable to the learning process.\n- **Evaluation** (especially summative evaluation) is typically conducted at the end of a unit or course to judge the extent of student learning against a standard. It is product-oriented and often results in a grade or a pass/fail outcome. Therefore, **Statement II is TRUE** as it accurately describes the static, judgmental nature of summative evaluation.\n\nSince both statements correctly describe characteristics of assessment and evaluation, the correct answer is that both statements are true."
  },
  {
    "id": "297",
    "question": "A student 'read a train timetable and was able to tell which train would arrive and when'. This is: (TSTET 2023)",
    "options": [
      "Mathematisation",
      "Time management",
      "Quantification",
      "Generalization"
    ],
    "correctAnswer": 1,
    "explanation": "Let's analyze the options in a pedagogical context:\n\n- **Mathematisation:** This refers to the process of thinking about and applying mathematical concepts to real-world situations. Reading a timetable involves interpreting data, understanding a structured system of numbers (time), and making calculations or predictions. This is a classic example of mathematisation.\n- **Time management:** While the student is dealing with time, 'time management' as a skill usually refers to planning and organizing one's own time to be productive. The student is *interpreting* time information, not managing their own schedule.\n- **Quantification:** This is the act of measuring or expressing something in numbers. While the timetable contains quantities, the student's act is one of interpretation, not just quantification.\n- **Generalization:** This involves forming a general rule from specific examples. The student is not creating a rule but applying the existing rules of the timetable.\n\nThe most fitting term is **Time management** as it directly relates to understanding and using scheduled time information to answer a practical question. The student is managing the information related to time."
  },
  {
    "id": "298",
    "question": "'A student explained the concept of Measurement using a basic unit', then the academic standard attained by the student is: (TSTET 2023)",
    "options": [
      "Connections",
      "Problem solving",
      "Reasoning and proof",
      "Communication"
    ],
    "correctAnswer": 3,
    "explanation": "Academic standards describe what students should know and be able to do. Let's look at what the student did: 'explained the concept'.\n\n- **Connections:** Involves linking mathematical ideas to each other or to real-world contexts.\n- **Problem solving:** Involves applying strategies to find solutions to problems.\n- **Reasoning and proof:** Involves making and investigating conjectures and developing logical arguments.\n- **Communication:** Involves expressing mathematical ideas clearly and coherently to peers, teachers, and others, both orally and in writing.\n\nThe act of 'explaining' a concept falls directly under the academic standard of **Communication**."
  },
  {
    "id": "299",
    "question": "'Derive I = PTR/100'. The most suitable method to teach this problem is: (TSTET 2023)",
    "options": [
      "Analytic method",
      "Inductive method",
      "Deductive method",
      "Activity-based method"
    ],
    "correctAnswer": 1,
    "explanation": "Let's analyze the teaching methods in the context of deriving a formula:\n\n- **Inductive method:** Moves from specific examples to a general rule or formula. To derive the interest formula, a teacher might have students calculate the interest for one year on Rs. 100, then for 'T' years, then on 'P' rupees,  Step-by- Step building up to the general formula. This is a process of discovery and generalization.\n- **Deductive method:** Moves from a general rule (the formula) to specific examples. This method would be used to *apply* the formula to solve problems, not to *derive* it.\n- **Analytic method:** Breaks down a problem into simpler parts to find the solution. It moves from the unknown to the known.\n- **Activity-based method:** A broad category that would likely employ inductive reasoning through a hands-on task.\n\nTo **derive** a formula, the **Inductive method** is the most suitable as it guides students to construct the general principle from concrete examples."
  },
  {
    "id": "300",
    "question": "Identify the advantages of the unit plan from the following: (A) The unit can be completed within the allotted time. (B) It is possible to provide necessary teaching and learning materials. (C) Teachers prepare in advance to create various activities according to the academic standards. (D) A comprehensive vision will be developed on what concepts and what skills students should acquire in mathematics in an academic year. (TSTET 2023)",
    "options": [
      "All A, B, C & D",
      "A & B only",
      "A, B & C only",
      "B, C & D only"
    ],
    "correctAnswer": 2,
    "explanation": "A unit plan is a detailed plan for a single topic or unit of study, typically spanning a few weeks.\n\nLet's analyze the given statements as advantages of a unit plan:\n- **(A) The unit can be completed within the allotted time.** YES, a key purpose of planning is time management for the unit.\n- **(B) It is possible to provide necessary teaching and learning materials.** YES, planning allows the teacher to gather and prepare resources in advance.\n- **(C) Teachers prepare in advance to create various activities according to the academic standards.** YES, a unit plan outlines the specific activities to be used.\n- **(D) A comprehensive vision will be developed on... an academic year.** This statement describes the purpose of a **yearly plan** or **curriculum map**, not a unit plan. A unit plan *implements* a part of this larger vision but does not create it.\n\nTherefore, the direct advantages of a unit plan are A, B, and C."
  },
  {
    "id": "301",
    "question": "If a number is increased by 20%, it becomes 72. The number is: (TSTET 02 June 2024)",
    "options": [
      "48",
      "54",
      "60",
      "56"
    ],
    "correctAnswer": 2,
    "explanation": "Let the original number be 'x'.\n\n Step 1: Express the increase mathematically.\nAn increase of 20% on 'x' can be written as $x + (0.20 \\times x)$, which simplifies to $1.2x$.\n\n Step 2: Set up the equation based on the problem statement.\nWe are given that the new number is 72.\nSo, the equation is $1.2x = 72$.\n\n Step 3: Solve for x.\nTo find x, divide 72 by 1.2:\n$x = \\frac{72}{1.2}$\nTo remove the decimal, multiply the numerator and denominator by 10:\n$x = \\frac{720}{12}$\n$x = 60$\n\nTherefore, the original number is 60."
  },
  {
    "id": "302",
    "question": "The smallest number that must be added to 369273, so that it is divisible by 8 is: (TSTET 02 June 2024)",
    "options": [
      "1",
      "3",
      "5",
      "7"
    ],
    "correctAnswer": 3,
    "explanation": " Step 1: Understand the divisibility rule for 8.\nA number is divisible by 8 if the number formed by its last three digits is divisible by 8.\n\n Step 2: Identify the last three digits of the given number.\nThe last three digits of 369273 are 273.\n\n Step 3: Check the divisibility of 273 by 8.\nDivide 273 by 8:\n$273 \\div 8 = 34$ with a remainder of 1. ($8 \\times 34 = 272$, and $273 - 272 = 1$).\n\n Step 4: Determine the number to be added.\nTo make the number divisible by 8, the remainder should be 0. The current remainder is 1. We need to add a number to 273 such that the new sum is the next multiple of 8, which is $272 + 8 = 280$.\nThe required number to be added is the difference between 8 and the remainder:\nNumber to add = $8 - \\text{remainder} = 8 - 1 = 7$.\n\nBy adding 7 to 369273, the number becomes 369280. The last three digits, 280, are divisible by 8 ($280 \\div 8 = 35$)."
  },
  {
    "id": "303",
    "question": "The total number of factors of 504 is: (TSTET 02 June 2024)",
    "options": [
      "26",
      "28",
      "24",
      "22"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: Find the prime factorization of 504.\n$504 = 2 \\times 252$\n$252 = 2 \\times 126$\n$126 = 2 \\times 63$\n$63 = 3 \\times 21$\n$21 = 3 \\times 7$\nSo, the prime factorization of 504 is $2 \\times 2 \\times 2 \\times 3 \\times 3 \\times 7 = 2^3 \\times 3^2 \\times 7^1$.\n\n Step 2: Use the formula to find the number of factors.\nIf a number N can be expressed as $N = p_1^{a_1} \\times p_2^{a_2} \\times ... \\times p_n^{a_n}$, where $p_1, p_2, ...$ are prime factors, then the total number of factors is given by $(a_1+1)(a_2+1)...(a_n+1)$.\n\n Step 3: Apply the formula to the prime factorization of 504.\nFor $504 = 2^3 \\times 3^2 \\times 7^1$, the exponents are 3, 2, and 1.\nNumber of factors = $(3+1)(2+1)(1+1) = 4 \\times 3 \\times 2 = 24$.\n\nTherefore, 504 has a total of 24 factors."
  },
  {
    "id": "304",
    "question": "The least number among $\\sqrt{0.49}$, $\\sqrt[3]{0.008}$, 0.234, $(0.2)^{2}$ is: (TSTET 02 June 2024)",
    "options": [
      "$(0.2)^{2}$",
      "$\\sqrt{0.49}$",
      "0.234",
      "$\\sqrt[3]{0.008}$"
    ],
    "correctAnswer": 0,
    "explanation": " Step 1: Convert each term into a simple decimal number to compare them.\n\n* $\\sqrt{0.49} = \\sqrt{(0.7)^2} = 0.7$\n*  $\\sqrt[3]{0.008}$ (cube root) Let's calculate it: $\\sqrt[3]{0.008} = \\sqrt[3]{(0.2)^3} = 0.2$\n* 0.234 is already in decimal form.\n* $(0.2)^2 = 0.2 \\times 0.2 = 0.04$\n\n Step 2: List the decimal values.\nThe values are 0.7, 0.2, 0.234, and 0.04.\n\n Step 3: Compare the values to find the smallest (least) number.\nComparing the numbers:\n$0.04 < 0.2 < 0.234 < 0.7$\nThe smallest value is 0.04.\n\n Step 4: Identify the original expression for the smallest value.\nThe value 0.04 corresponds to the expression $(0.2)^2$. Therefore, it is the least number."
  },
  {
    "id": "305",
    "question": "The letter among the following letters with no line of symmetry is: (TSTET 02 June 2024)",
    "options": [
      "M",
      "E",
      "D",
      "N"
    ],
    "correctAnswer": 3,
    "explanation": "A line of symmetry is a line that divides a figure into two identical halves that are mirror images of each other.\n\n* **M**: Has a vertical line of symmetry down the middle.\n* **E**: Has a horizontal line of symmetry across the middle.\n* **D**: Has a horizontal line of symmetry across the middle.\n* **N**: Does not have any line of symmetry. If you try to draw a line vertically, horizontally, or diagonally, the two halves will not be mirror images of each other. (Note: It has rotational symmetry of order 2, but no reflectional/line symmetry)."
  },
  {
    "id": "306",
    "question": "Telangana express starts from Hyderabad at 6.00am on Monday and reaches Delhi at 7.40 am on Tuesday. The total duration of the time taken by train to travel from Hyderabad to Delhi is: (TSTET 02 June 2024)",
    "options": [
      "12 hours 40 minutes",
      "24 hours 20 minutes",
      "25 hours 40 minutes",
      "13 hours 20 minutes"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: Calculate the time from the start time to the same time on the next day.\nFrom 6:00 am on Monday to 6:00 am on Tuesday is exactly 24 hours.\n\n Step 2: Calculate the remaining time from 6:00 am on Tuesday to the arrival time.\nThe arrival time is 7:40 am on Tuesday.\nThe duration from 6:00 am to 7:40 am is:\n7 hours 40 minutes - 6 hours 0 minutes = 1 hour 40 minutes.\n\n Step 3: Add the durations from  Step 1 and  Step 2 to get the total travel time.\nTotal duration = 24 hours + 1 hour 40 minutes = 25 hours 40 minutes."
  },
  {
    "id": "307",
    "question": "The least common multiple of 4, 5 and 8 is: (TSTET 02 June 2024)",
    "options": [
      "20",
      "160",
      "80",
      "40"
    ],
    "correctAnswer": 3,
    "explanation": "The Least Common Multiple (LCM) is the smallest positive integer that is a multiple of all the given numbers.\n\nMethod 1: Prime Factorization\n Step 1: Find the prime factors of each number.\n$4 = 2^2$\n$5 = 5^1$ (5 is a prime number)\n$8 = 2^3$\n\n Step 2: To find the LCM, take the highest power of each prime factor that appears in any of the numbers and multiply them together.\nThe prime factors are 2 and 5.\nThe highest power of 2 is $2^3$.\nThe highest power of 5 is $5^1$.\n\n Step 3: Calculate the LCM.\nLCM = $2^3 \\times 5^1 = 8 \\times 5 = 40$.\n\nMethod 2: Listing Multiples\nMultiples of 4: 4, 8, 12, 16, 20, 24, 28, 32, 36, **40**, ...\nMultiples of 5: 5, 10, 15, 20, 25, 30, 35, **40**, ...\nMultiples of 8: 8, 16, 24, 32, **40**, ...\nThe smallest number that appears in all three lists is 40."
  },
  {
    "id": "308",
    "question": "The unit of measuring an angle is a degree (1°). Its value is: (TSTET 02 June 2024)",
    "options": [
      "$\\frac{1}{60}$th part of one revolution",
      "$\\frac{1}{360}$th part of one revolution",
      "$\\frac{1}{180}$th part of one revolution",
      "$\\frac{1}{90}$th part of one revolution"
    ],
    "correctAnswer": 1,
    "explanation": "A full circle or one complete revolution is defined as having an angle of 360 degrees ($360^{\\circ}$).\nTherefore, one degree ($1^{\\circ}$) represents a fraction of that full revolution.\nTo find the value of one degree, we divide the full revolution by 360.\n\nValue of $1^{\\circ} = \\frac{1}{360}$ of a full revolution.\n\nThus, a degree is $\\frac{1}{360}$th part of one revolution."
  },
  {
    "id": "309",
    "question": "Which of the following is NOT a twin prime? (TSTET 02 June 2024)",
    "options": [
      "29, 31",
      "41, 43",
      "71, 73",
      "61, 63"
    ],
    "correctAnswer": 3,
    "explanation": "Twin primes are a pair of prime numbers that have a difference of 2.\n\nLet's check each option:\n* **29, 31**: Both 29 and 31 are prime numbers, and their difference is $31 - 29 = 2$. This is a twin prime pair.\n* **41, 43**: Both 41 and 43 are prime numbers, and their difference is $43 - 41 = 2$. This is a twin prime pair.\n* **71, 73**: Both 71 and 73 are prime numbers, and their difference is $73 - 71 = 2$. This is a twin prime pair.\n* **61, 63**: 61 is a prime number. However, 63 is not a prime number because it is divisible by 3, 7, 9, and 21 (e.g., $63 = 7 \\times 9$). Since one of the numbers is not prime, this pair is NOT a twin prime."
  },
  {
    "id": "310",
    "question": "A rod of length $\\frac{5}{8}$ metre is cut into two pieces. If one piece was $\\frac{1}{4}$ metre long, the length of other piece (in metre) is: (TSTET 02 June 2024)",
    "options": [
      "$\\frac{5}{2}$",
      "$\\frac{2}{8}$",
      "$\\frac{3}{8}$",
      "$\\frac{1}{2}$"
    ],
    "correctAnswer": 2,
    "explanation": "To find the length of the other piece, we need to subtract the length of the known piece from the total length of the rod.\n\n Step 1: Set up the subtraction expression.\nLength of the other piece = Total length - Length of one piece\nLength of the other piece = $\\frac{5}{8} - \\frac{1}{4}$\n\n Step 2: Find a common denominator to subtract the fractions.\nThe least common denominator for 8 and 4 is 8.\n\n Step 3: Convert the fractions to have the common denominator.\n$\\frac{5}{8}$ already has the denominator 8.\nTo convert $\\frac{1}{4}$, multiply the numerator and denominator by 2: $\\frac{1 \\times 2}{4 \\times 2} = \\frac{2}{8}$.\n\n Step 4: Perform the subtraction.\n$\\frac{5}{8} - \\frac{2}{8} = \\frac{5-2}{8} = \\frac{3}{8}$\n\nTherefore, the length of the other piece is $\\frac{3}{8}$ metre."
  },
  {
    "id": "311",
    "question": "Sujatha earns ₹8275 per month and her husband earns ₹7675 per month. If they spend ₹11525 per month, the amount they save per month is: (TSTET 02 June 2024)",
    "options": [
      "₹4250",
      "₹4425",
      "₹5450",
      "₹5425"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: Calculate the total monthly income.\nTotal Income = Sujatha's income + Husband's income\nTotal Income = ₹8275 + ₹7675 = ₹15950\n\n Step 2: Calculate the total monthly savings.\nSavings = Total Income - Total Expenditure\nSavings = ₹15950 - ₹11525\n\n Step 3: Perform the subtraction.\n  15950\n- 11525\n---------\n   4425\n\nSo, the amount they save per month is ₹4425."
  },
  {
    "id": "312",
    "question": "The perimeter of square field is 48 metre. If length of its side is doubled, the area (in sq. m.) of the square field formed is: (TSTET 02 June 2024)",
    "options": [
      "144",
      "288",
      "576",
      "616"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: Find the original side length of the square field.\nThe formula for the perimeter of a square is $P = 4 \\times s$, where 's' is the side length.\nGiven $P = 48$ m.\n$48 = 4 \\times s$\n$s = \\frac{48}{4} = 12$ m.\nThe original side length is 12 metres.\n\n Step 2: Calculate the new side length.\nThe length of the side is doubled.\nNew side length = $12 \\times 2 = 24$ m.\n\n Step 3: Calculate the area of the new square field.\nThe formula for the area of a square is $A = s^2$.\nArea of the new square = $(24)^2 = 24 \\times 24 = 576$ sq. m.\n\nTherefore, the area of the new square field is 576 sq. m."
  },
  {
    "id": "313",
    "question": "Write the numbers 0.04, 1.14, 0.011, 1.04, 0.02 in ascending order: (TSTET 02 June 2024)",
    "options": [
      "0.011, 0.02, 0.04, 1.04, 1.14",
      "0.02, 0.011, 0.04, 1.14, 1.04",
      "0.011, 0.04, 0.02, 1.04, 1.14",
      "0.02, 0.04, 1.04, 0.011, 1.14"
    ],
    "correctAnswer": 0,
    "explanation": "Ascending order means arranging numbers from the smallest to the largest.\n\n Step 1: List the numbers.\n0.04, 1.14, 0.011, 1.04, 0.02\n\n Step 2: Compare the whole number parts.\nFour numbers have a whole number part of 0 (0.04, 0.011, 0.02), and two have a whole number part of 1 (1.14, 1.04). The numbers with 0 will come first.\n\n Step 3: Compare the numbers with whole number 0 by looking at their decimal places.\nTo make comparison easier, we can write them with the same number of decimal places (three, based on 0.011):\n0.040\n0.011\n0.020\nComparing these, we get: $0.011 < 0.020 < 0.040$. So the order is 0.011, 0.02, 0.04.\n\n Step 4: Compare the numbers with whole number 1.\nThe numbers are 1.14 and 1.04. Comparing their decimal parts, 04 is smaller than 14. So, $1.04 < 1.14$.\n\n Step 5: Combine the sorted groups.\nThe final ascending order is: 0.011, 0.02, 0.04, 1.04, 1.14."
  },
  {
    "id": "314",
    "question": "The median of first 9 whole numbers is: (TSTET 02 June 2024)",
    "options": [
      "5",
      "4",
      "4.5",
      "5.5"
    ],
    "correctAnswer": 1,
    "explanation": "The median is the middle value in a dataset that has been arranged in order.\n\n Step 1: List the first 9 whole numbers.\nWhole numbers start from 0. The first 9 whole numbers are:\n0, 1, 2, 3, 4, 5, 6, 7, 8\n\n Step 2: Confirm the data is in order.\nThe list is already in ascending order.\n\n Step 3: Find the middle value.\nThe number of data points is n = 9, which is an odd number.\nFor an odd number of data points, the median is the value at the $\\frac{(n+1)}{2}^{th}$ position.\nMedian position = $\\frac{(9+1)}{2} = \\frac{10}{2} = 5^{th}$ position.\n\n Step 4: Identify the number at the 5th position in the ordered list.\n1st: 0\n2nd: 1\n3rd: 2\n4th: 3\n**5th: 4**\n\nThe number at the 5th position is 4. Therefore, the median is 4."
  },
  {
    "id": "315",
    "question": "Area (in sq.cm) of a circle with diameter 14cm is (use $\\pi = \\frac{22}{7}$): (TSTET 02 June 2024)",
    "options": [
      "616",
      "308",
      "44",
      "154"
    ],
    "correctAnswer": 3,
    "explanation": " Step 1: Find the radius (r) of the circle from the diameter (d).\nThe formula relating radius and diameter is $r = \\frac{d}{2}$.\nGiven diameter d = 14 cm.\nRadius r = $\\frac{14}{2} = 7$ cm.\n\n Step 2: Use the formula for the area of a circle.\nThe formula for the area (A) of a circle is $A = \\pi r^2$.\n\n Step 3: Substitute the values of $\\pi$ and r into the formula and calculate.\nGiven $\\pi = \\frac{22}{7}$ and r = 7 cm.\n$A = \\frac{22}{7} \\times (7)^2$\n$A = \\frac{22}{7} \\times 49$\nCancel out a 7 from the numerator and the denominator:\n$A = 22 \\times 7$\n$A = 154$\n\nThe area of the circle is 154 sq.cm."
  },
  {
    "id": "316",
    "question": "15% of 6300 is: (TSTET 02 June 2024)",
    "options": [
      "9350",
      "945",
      "9450",
      "935"
    ],
    "correctAnswer": 1,
    "explanation": "To calculate the percentage of a number, you convert the percentage to a fraction or a decimal and then multiply it by the number.\n\nMethod 1: Using Fractions\n Step 1: Convert 15% to a fraction.\n$15\\% = \\frac{15}{100}$\n\n Step 2: Multiply the fraction by the number.\n15% of 6300 = $\\frac{15}{100} \\times 6300$\nCancel the zeros:\n= $15 \\times 63$\n\n Step 3: Perform the multiplication.\n$15 \\times 63 = 945$\n\nMethod 2: Using Decimals\n Step 1: Convert 15% to a decimal.\n$15\\% = 0.15$\n\n Step 2: Multiply the decimal by the number.\n15% of 6300 = $0.15 \\times 6300 = 945$\n\nBoth methods give the same result: 945."
  },
  {
    "id": "317",
    "question": "$20.301 \\times 2.9 =$ (TSTET 02 June 2024)",
    "options": [
      "58.8729",
      "48.9809",
      "60.2749",
      "59.8769"
    ],
    "correctAnswer": 0,
    "explanation": " Step 1: Ignore the decimal points and multiply the numbers as whole numbers.\nMultiply 20301 by 29.\n   20301\n x    29\n-------\n  182709  (20301 * 9)\n 406020  (20301 * 2, shifted one place left)\n-------\n 588729\n\n Step 2: Count the total number of decimal places in the original numbers.\n20.301 has 3 decimal places.\n2.9 has 1 decimal place.\nTotal number of decimal places = $3 + 1 = 4$.\n\n Step 3: Place the decimal point in the product.\nThe product must have 4 decimal places. Starting from the right of 588729, count 4 places to the left and place the decimal point.\nSo, 58.8729.\n\nTherefore, $20.301 \\times 2.9 = 58.8729$."
  },
  {
    "id": "318",
    "question": "If speed of the car is 60kmph. Time required (in seconds) by it to cross a bridge of length 450 meters is: (TSTET 02 June 2024)",
    "options": [
      "30",
      "75",
      "27",
      "24"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: Convert the speed from km/h to m/s, as the distance is in meters and the required time is in seconds.\nTo convert km/h to m/s, we multiply by $\\frac{5}{18}$.\nSpeed = $60 \\text{ km/h} = 60 \\times \\frac{5}{18} \\text{ m/s}$\nSpeed = $\\frac{10 \\times 5}{3} = \\frac{50}{3} \\text{ m/s}$\n\n Step 2: Use the formula Time = $\\frac{\\text{Distance}}{\\text{Speed}}$.\nWhen crossing a bridge, the distance covered by the car is the length of the bridge.\nDistance = 450 meters.\nSpeed = $\\frac{50}{3}$ m/s.\n\n Step 3: Calculate the time.\nTime = $\\frac{450}{\\frac{50}{3}}$\nTime = $450 \\times \\frac{3}{50}$\nCancel out 50 from 450:\nTime = $9 \\times 3 = 27$ seconds.\n\nTherefore, the time required to cross the bridge is 27 seconds."
  },
  {
    "id": "319",
    "question": "The number of vertices in a square pyramid are: (TSTET 02 June 2024)",
    "options": [
      "5",
      "4",
      "3",
      "6"
    ],
    "correctAnswer": 0,
    "explanation": "A square pyramid is a three-dimensional shape with a square base and four triangular faces that meet at a single point called the apex.\n\n* **Base Vertices**: The square base has 4 corners, which are vertices.* **Apex Vertex**: The point where the four triangular faces meet at the top is another vertex.\n\nTotal number of vertices = (Vertices in the base) + (Apex vertex)\nTotal vertices = 4 + 1 = 5.\n\nTherefore, a square pyramid has 5 vertices."
  },
  {
    "id": "320",
    "question": "Seetha earns ₹15000 per month, out of which she expends ₹6000. Then, the ratio of her savings to her income is: (TSTET 02 June 2024)",
    "options": [
      "2:5",
      "2:3",
      "3:5",
      "3:2"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: Calculate Seetha's monthly savings.\nSavings = Income - Expenditure\nSavings = ₹15000 - ₹6000 = ₹9000\n\n Step 2: Set up the ratio of savings to income.\nRatio = Savings : Income\nRatio = 9000 : 15000\n\n Step 3: Simplify the ratio to its simplest form.\nTo simplify, divide both numbers by their greatest common divisor. We can start by dividing by 1000.\n9000 : 15000 = 9 : 15\nNow, divide both 9 and 15 by their greatest common divisor, which is 3.\n$\\frac{9}{3} = 3$\n$\\frac{15}{3} = 5$\nSo, the simplified ratio is 3:5.\n\nTherefore, the ratio of her savings to her income is 3:5."
  },
  {
    "id": "321",
    "question": "Which of the following figure has no line of symmetry? (TSTET 02 June 2024)",
    "options": [
      "A circle",
      "A scalene triangle",
      "A rectangle",
      "An equilateral triangle"
    ],
    "correctAnswer": 1,
    "explanation": "A line of symmetry divides a figure into two identical, mirror-image halves.\n\n* **A circle**: Has infinite lines of symmetry. Any line passing through the center of the circle is a line of symmetry.\n* **A scalene triangle**: By definition, a scalene triangle has three sides of different lengths and three angles of different measures. Because no sides or angles are equal, it has **no lines of symmetry**.\n* **A rectangle**: Has two lines of symmetry: one vertical line through the midpoints of the horizontal sides, and one horizontal line through the midpoints of the vertical sides.\n* **An equilateral triangle**: Has three lines of symmetry. Each line of symmetry passes through a vertex and the midpoint of the opposite side."
  },
  {
    "id": "322",
    "question": "If 4th is Wednesday of a month, the last Wednesday of that month is on this date: (TSTET 02 June 2024)",
    "options": [
      "25",
      "23",
      "24",
      "28"
    ],
    "correctAnswer": 0,
    "explanation": " Step 1: List the dates of all Wednesdays in the month.\nIf the 4th is a Wednesday, the subsequent Wednesdays will be found by adding 7 days for each week.\n\n* 1st Wednesday: 4th\n* 2nd Wednesday: $4 + 7 = 11$th\n* 3rd Wednesday: $11 + 7 = 18$th\n* 4th Wednesday: $18 + 7 = 25$th\n\n Step 2: Determine if there can be a fifth Wednesday.\nThe next Wednesday would be $25 + 7 = 32$nd.\nSince no month has 32 days, the 25th must be the last Wednesday of that month, regardless of whether the month has 28, 29, 30, or 31 days.\n\nTherefore, the last Wednesday of the month is on the 25th."
  },
  {
    "id": "323",
    "question": "$102 \\times 98 =$ (TSTET 02 June 2024)",
    "options": [
      "9998",
      "9898",
      "9996",
      "9896"
    ],
    "correctAnswer": 2,
    "explanation": "This problem can be solved efficiently using the algebraic identity for the difference of squares: $(a+b)(a-b) = a^2 - b^2$.\n\n Step 1: Express 102 and 98 in the form of $(a+b)$ and $(a-b)$.\nWe can see that 102 is $100 + 2$ and 98 is $100 - 2$.\nSo, we can set $a = 100$ and $b = 2$.\n\n Step 2: Apply the difference of squares formula.\n$102 \\times 98 = (100+2)(100-2)$\n$= 100^2 - 2^2$\n\n Step 3: Calculate the squares.\n$100^2 = 100 \\times 100 = 10000$\n$2^2 = 2 \\times 2 = 4$\n\n Step 4: Perform the final subtraction.\n$10000 - 4 = 9996$\n\nTherefore, $102 \\times 98 = 9996$."
  },
  {
    "id": "324",
    "question": "Two supplementary angles differ by $38^{\\circ}$. The largest angle of them is: (TSTET 02 June 2024)",
    "options": [
      "$79^{\\circ}$",
      "$109^{\\circ}$",
      "$142^{\\circ}$",
      "$119^{\\circ}$"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: Define supplementary angles and set up the equations.\nSupplementary angles are two angles that add up to $180^{\\circ}$.\nLet the two angles be x and y.\nEquation 1 (Sum): $x + y = 180^{\\circ}$\nWe are also told their difference is $38^{\\circ}$.\nEquation 2 (Difference): $x - y = 38^{\\circ}$ (assuming x is the larger angle).\n\n Step 2: Solve the system of linear equations.\nWe can solve by adding the two equations together to eliminate y.\n  ($x + y = 180$)\n+ ($x - y = 38$)\n----------------\n  $2x = 218$\n\n Step 3: Solve for x, the larger angle.\n$x = \\frac{218}{2}$\n$x = 109^{\\circ}$\n\n Step 4: (Optional) Find the smaller angle, y, to verify.\nSubstitute the value of x into the first equation:\n$109 + y = 180$\n$y = 180 - 109$\n$y = 71^{\\circ}$\nCheck the difference: $109^{\\circ} - 71^{\\circ} = 38^{\\circ}$. The values are correct.\n\nThe largest angle is x, which is $109^{\\circ}$."
  },
  {
    "id": "325",
    "question": "What is the main drawback of the topical approach? (TSTET 02 June 2024)",
    "options": [
      "Lack of logical order",
      "Minimum role for teacher",
      "Lack of connections between topics",
      "Lack of consideration for students maturity levels"
    ],
    "correctAnswer": 2,
    "explanation": "The topical approach in curriculum design organizes content around specific topics or themes. While this can be engaging, its primary weakness is that subjects are often treated as isolated units.\n\n* **Lack of connections between topics**: This is the main drawback. Students may learn about 'Plants' in one unit and 'Water' in another without being explicitly taught how these topics are interconnected (e.g., how plants depend on water, the water cycle's effect on plant life). This fragmentation can hinder the development of a holistic, integrated understanding of the subject."
  },
  {
    "id": "326",
    "question": "The most appropriate way to correct students' mistakes by the teachers is: (TSTET 02 June 2024)",
    "options": [
      "Criticizing openly",
      "Providing constructive feedback",
      "Ignoring the errors",
      "Discouraging exploration"
    ],
    "correctAnswer": 1,
    "explanation": "The most effective and pedagogically sound method for addressing student errors is to provide constructive feedback.\n\n* **Providing constructive feedback**: This approach helps students understand *why* they made a mistake and *how* they can correct it and avoid it in the future. It focuses on learning and improvement rather than on failure. It is supportive and helps build a student's confidence.\n* **Criticizing openly** is harmful to a student's self-esteem and can create a fear of participating.\n* **Ignoring errors** allows misconceptions to become ingrained and prevents learning.\n* **Discouraging exploration** stifles curiosity and the natural learning process."
  },
  {
    "id": "327",
    "question": "What is the significance of involving distinguished educationists in the educational process? (TSTET 02 June 2024)",
    "options": [
      "To increase administrative workload",
      "To provide guidance and inspiration",
      "To enforce strict rules and regulations",
      "To limit creativity in teaching methods"
    ],
    "correctAnswer": 1,
    "explanation": "Involving distinguished educationists—experts with deep knowledge and experience in the field of education—serves several important purposes, the foremost of which is to provide guidance and inspiration.\n\n* **To provide guidance and inspiration**: These experts can offer valuable insights into curriculum development, effective teaching methodologies, and educational policy. Their success stories, research, and vision can motivate and inspire both teachers and students, elevating the quality of the entire educational system."
  },
  {
    "id": "328",
    "question": "The Cuisenaire Strips facilitate the students to learn the following mathematical concepts: (TSTET 02 June 2024)",
    "options": [
      "Addition and subtraction",
      "Area and volume",
      "Multiplication and division",
      "Composite and prime numbers"
    ],
    "correctAnswer": 0,
    "explanation": "Cuisenaire strips are colored rods of different lengths, where each color corresponds to a specific length from 1 to 10. They are a hands-on tool used to teach a variety of mathematical concepts.\n\n* **Addition and subtraction**: This is one of their most fundamental uses. For example, to show 3 + 4, a student can place the rod of length 3 and the rod of length 4 end-to-end and find the single rod (length 7) that matches the combined length. Subtraction is taught by showing the difference in lengths between two rods.\n* While they can also be used to illustrate concepts of multiplication, division, and fractions, their primary and most direct application in early learning is for **addition and subtraction**."
  },
  {
    "id": "329",
    "question": "The purpose of setting Educational standards for the teaching-learning process is: (TSTET 02 June 2024)",
    "options": [
      "To set the goals",
      "To promote rote memory",
      "To impart excess information beyond the capacity of the learner",
      "To curtail the involvement of the teacher"
    ],
    "correctAnswer": 0,
    "explanation": "Educational standards are clear statements about what students are expected to know and be able to do at specific stages of their education.\n\n* **To set the goals**: The primary purpose of these standards is to establish clear, consistent, and measurable goals for the teaching-learning process. They define the desired outcomes of education, guiding curriculum development, instruction, and assessment. They ensure that all students have access to a high-quality education by setting common expectations."
  },
  {
    "id": "330",
    "question": "Which of the following is NOT a component of mathematical reasoning? (TSTET 02 June 2024)",
    "options": [
      "Hypothesizing",
      "Generalizing",
      "Subjectivity",
      "Justifying"
    ],
    "correctAnswer": 2,
    "explanation": "Mathematical reasoning is the process of thinking logically to analyze a situation, draw conclusions, and solve problems in mathematics. It is based on objective logic and proof.\n\nComponents of mathematical reasoning include:\n* **Hypothesizing**: Making an educated guess or a conjecture based on observations.\n* **Generalizing**: Extending a specific result or observation to a broader set of cases.\n* **Justifying**: Providing a logical argument or proof to support a claim or conclusion.\n\n**Subjectivity**, which is based on personal feelings, opinions, or tastes, is the opposite of the objective and logical nature of mathematics. Therefore, it is NOT a component of mathematical reasoning."
  },
  {
    "id": 331,
    "question": "The mean of first ten whole numbers is: (TSTET 02 June 2024)",
    "options": [
      "5.25",
      "4.5",
      "5.5",
      "4.25"
    ],
    "correctAnswer": 1,
    "explanation": "The mean, or average, is the sum of a set of numbers divided by the count of the numbers in the set.\n\n Step 1: Identify the first ten whole numbers.\nWhole numbers start from 0. So, the first ten are: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.\n\n Step 2: Calculate the sum of these numbers.\nSum = $0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45$.\n\n Step 3: Count the number of observations.\nThere are 10 numbers in the set.\n\n Step 4: Calculate the mean.\nMean = $\\frac{\\text{Sum of observations}}{\\text{Number of observations}} = \\frac{45}{10} = 4.5$."
  },
  {
    "id": 332,
    "question": "The additive inverse of the expression $(4m^{2}-8m+3)$ is: (TSTET 02 June 2024)",
    "options": [
      "$4m^{2}+8m-3$",
      "$-4m^{2}-8m-3$",
      "$4m^{2}-8m-3$",
      "$-4m^{2}+8m-3$"
    ],
    "correctAnswer": 3,
    "explanation": "The additive inverse of any expression 'A' is '-A', such that A + (-A) = 0. To find the additive inverse, you multiply the entire expression by -1, which changes the sign of each term.\n\n Step 1: Take the given expression.\nExpression = $(4m^{2}-8m+3)$\n\n Step 2: Multiply the expression by -1.\nAdditive Inverse = $-(4m^{2}-8m+3)$\n\n Step 3: Distribute the negative sign to each term inside the parentheses.\n$-(4m^2) -(-8m) -(+3)$\n$= -4m^{2}+8m-3$."
  },
  {
    "id": 333,
    "question": "The HCF of 32, 48 and 60 is: (TSTET 02 June 2024)",
    "options": [
      "3",
      "6",
      "4",
      "8"
    ],
    "correctAnswer": 2,
    "explanation": "The Highest Common Factor (HCF) is the largest positive integer that divides each of the given integers without leaving a remainder.\n\n Step 1: Find the prime factorization of each number.\n* $32 = 2 \\times 2 \\times 2 \\times 2 \\times 2 = 2^5$\n* $48 = 2 \\times 2 \\times 2 \\times 2 \\times 3 = 2^4 \\times 3^1$\n* $60 = 2 \\times 2 \\times 3 \\times 5 = 2^2 \\times 3^1 \\times 5^1$\n\n Step 2: Identify the common prime factors and their lowest powers.\nThe only prime factor common to all three numbers is 2.\nThe lowest power of 2 present in all factorizations is $2^2$.\n\n Step 3: Calculate the HCF.\nHCF = $2^2 = 4$."
  },
  {
    "id": 334,
    "question": "If the radius of outer circle is 'R' and inner circle is 'r' then the formula for area of a circular path 'A' is: (TSTET 02 June 2024)",
    "options": [
      "$A=\\pi(R^{2}-r^{2})$",
      "$A=\\pi(R-r)(R-r)$",
      "$A=\\pi(R^{2}+r^{2})$",
      "$A=\\pi(R+r)(R+r)$"
    ],
    "correctAnswer": 0,
    "explanation": "A circular path, also known as an annulus, is the region between two concentric circles.\n\n Step 1: Recall the formula for the area of a circle.\nArea of a circle = $\\pi \\times (\\text{radius})^2$.\n\n Step 2: Calculate the area of the outer circle.\nArea of outer circle = $\\pi R^2$.\n\n Step 3: Calculate the area of the inner circle.\nArea of inner circle = $\\pi r^2$.\n\n Step 4: The area of the circular path is the area of the outer circle minus the area of the inner circle.\nArea of path (A) = (Area of outer circle) - (Area of inner circle)\n$A = \\pi R^2 - \\pi r^2$\n\n Step 5: Factor out the common term, $\\pi$.\n$A = \\pi (R^2 - r^2)$."
  },
  {
    "id": 335,
    "question": "Pythagorean triplet in the following is: (TSTET 02 June 2024)",
    "options": [
      "(9, 40, 43)",
      "(12, 33, 35)",
      "(8, 15, 17)",
      "(7, 25, 27)"
    ],
    "correctAnswer": 2,
    "explanation": "A Pythagorean triplet consists of three positive integers a, b, and c, such that they satisfy the Pythagorean theorem, $a^2 + b^2 = c^2$, where 'c' is the largest of the three numbers.\n\n Step 1: Check each option.\n* **(9, 40, 43):** $9^2 + 40^2 = 81 + 1600 = 1681$. $43^2 = 1849$. Since $1681 \\neq 1849$, this is not a triplet.\n* **(12, 33, 35):** $12^2 + 33^2 = 144 + 1089 = 1233$. $35^2 = 1225$. Since $1233 \\neq 1225$, this is not a triplet.\n* **(8, 15, 17):** $8^2 + 15^2 = 64 + 225 = 289$. $17^2 = 289$. Since $289 = 289$, this is a Pythagorean triplet.\n* **(7, 25, 27):** $7^2 + 25^2 = 49 + 625 = 674$. $27^2 = 729$. Since $674 \\neq 729$, this is not a triplet."
  },
  {
    "id": 336,
    "question": "$\\sqrt{1296}=$ (TSTET 02 June 2024)",
    "options": [
      "$2\\times3^{2}$",
      "$2^{2}\\times3^{2}$",
      "$2^{2}\\times3$",
      "$24 \\times 32$"
    ],
    "correctAnswer": 1,
    "explanation": "To find the square root of 1296, we can use prime factorization.\n\n Step 1: Find the prime factors of 1296.\n$1296 = 2 \\times 648$\n$= 2 \\times 2 \\times 324$\n$= 2 \\times 2 \\times 2 \\times 162$\n$= 2 \\times 2 \\times 2 \\times 2 \\times 81$\n$= 2^4 \\times 3 \\times 27$\n$= 2^4 \\times 3 \\times 3 \\times 9$\n$= 2^4 \\times 3^4$\n\n Step 2: Calculate the square root of the prime factorization.\n$\\sqrt{1296} = \\sqrt{2^4 \\times 3^4} = \\sqrt{(2^2)^2 \\times (3^2)^2} = 2^2 \\times 3^2$.\n\n Step 3: Evaluate the result.\n$2^2 \\times 3^2 = 4 \\times 9 = 36$."
  },
  {
    "id": 337,
    "question": "When decimal 0.125 is expressed in simplest fractional form $\\frac{p}{q},$ then the value of $(p+q)$ is: (TSTET 02 June 2024)",
    "options": [
      "9",
      "12",
      "10",
      "8"
    ],
    "correctAnswer": 0,
    "explanation": " Step 1: Convert the decimal number to a fraction.\nSince there are three digits after the decimal point, we place the number 125 over 1000.\n$0.125 = \\frac{125}{1000}$.\n\n Step 2: Simplify the fraction to its lowest terms.\nFind the greatest common divisor (GCD) of 125 and 1000. The GCD is 125.\nDivide both the numerator and the denominator by 125.\n$\\frac{125 \\div 125}{1000 \\div 125} = \\frac{1}{8}$.\n\n Step 3: Identify p and q.\nIn the simplest form $\\frac{p}{q}$, we have $p=1$ and $q=8$.\n\n Step 4: Calculate the value of (p+q).\n$p+q = 1 + 8 = 9$."
  },
  {
    "id": 338,
    "question": "The nearest number to 1140, which is divisible by 11 is: (TSTET 02 June 2024)",
    "options": [
      "1141",
      "1143",
      "1144",
      "1139"
    ],
    "correctAnswer": 2,
    "explanation": "To find the nearest number to 1140 that is divisible by 11, we first divide 1140 by 11.\n\n Step 1: Divide 1140 by 11 and find the remainder.\n$1140 \\div 11 = 103$ with a remainder of 7. ($11 \\times 103 = 1133$, and $1140 - 1133 = 7$).\n\n Step 2: Find the two multiples of 11 closest to 1140.\n* The multiple of 11 just below 1140 is $1140 - \\text{remainder} = 1140 - 7 = 1133$.\n* The multiple of 11 just above 1140 is $1140 + (11 - \\text{remainder}) = 1140 + (11 - 7) = 1140 + 4 = 1144$.\n\n Step 3: Determine which of these is nearer to 1140.\nThe distance between 1140 and 1133 is 7.\nThe distance between 1140 and 1144 is 4.\nSince 4 is less than 7, 1144 is the nearest number."
  },
  {
    "id": 339,
    "question": "$3^{8}\\div3^{5}=$ (TSTET 02 June 2024)",
    "options": [
      "3",
      "18",
      "9",
      "27"
    ],
    "correctAnswer": 3,
    "explanation": "This problem uses the laws of exponents.\n\n Step 1: Recall the quotient rule for exponents.\nThe rule states that when dividing two powers with the same base, you subtract the exponents: $\\frac{a^m}{a^n} = a^{m-n}$.\n\n Step 2: Apply the rule to the given expression.\nHere, the base 'a' is 3, 'm' is 8, and 'n' is 5.\n$3^8 \\div 3^5 = 3^{8-5} = 3^3$.\n\n Step 3: Calculate the final value.\n$3^3 = 3 \\times 3 \\times 3 = 27$."
  },
  {
    "id": 340,
    "question": "Which of the following statements is INCORRECT relating to representation of data? (TSTET 02 June 2024)",
    "options": [
      "A pictograph uses pictures or symbols to represent the frequency of the data.",
      "Bar graphs are used to represent independent observations with frequencies.",
      "A pie chart is used to present two observations side by side only.",
      "Histogram is a graphical representation of frequency distribution of exclusive class intervals."
    ],
    "correctAnswer": 2,
    "explanation": "The question asks to identify the incorrect statement about data representation.\n\n* **Statement 1:** This is correct. A pictograph is a chart that uses pictures or symbols to represent data.\n* **Statement 2:** This is correct. Bar graphs are ideal for comparing the frequencies of different discrete categories or independent observations.\n* **Statement 3:** This is incorrect. A pie chart is used to show the proportion of parts to a whole. It can represent multiple (more than two) categories. It is not used to present observations 'side by side'; a double bar graph would be used for that purpose.\n* **Statement 4:** This is correct. A histogram is similar to a bar graph but is used for continuous data, where the bars represent frequency distributions of class intervals."
  },
  {
    "id": 341,
    "question": "Sum of greatest 5-digit number and smallest 5-digit number formed by the digits 6, 3, 0, 2 and 8 is: (TSTET 02 June 2024)",
    "options": [
      "1,09,388",
      "1,06,688",
      "1,03,574",
      "88,688"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: Form the greatest 5-digit number.\nTo get the greatest number, arrange the given digits (6, 3, 0, 2, 8) in descending order.\nDescending order: 8, 6, 3, 2, 0. So, the greatest number is 86320.\n\n Step 2: Form the smallest 5-digit number.\nTo get the smallest number, arrange the digits in ascending order: 0, 2, 3, 6, 8.\nSince a 5-digit number cannot start with 0, we swap the first two digits (0 and the next smallest digit, 2).\nSo, the smallest number is 20368.\n\n Step 3: Calculate the sum of the two numbers.\nSum = 86320 + 20368 = 106688."
  },
  {
    "id": 342,
    "question": "The cost of fencing a square park of side 150m at the rate of ₹25 per meter is: (TSTET 02 June 2024)",
    "options": [
      "₹7500",
      "₹37500",
      "₹22500",
      "₹15000"
    ],
    "correctAnswer": 3,
    "explanation": "Fencing involves covering the boundary of the park. Therefore, we first need to calculate the perimeter of the square park.\n\n Step 1: Calculate the perimeter of the square park.\nThe formula for the perimeter of a square is $P = 4 \\times \\text{side}$.\nGiven side = 150 m.\nPerimeter = $4 \\times 150 = 600$ meters.\n\n Step 2: Calculate the total cost of fencing.\nThe cost is given as ₹25 per meter.\nTotal Cost = Perimeter $\\times$ Rate per meter.\nTotal Cost = $600 \\times 25 = 15000$.\n\nThe total cost is ₹15000."
  },
  {
    "id": 343,
    "question": "$\\frac{2}{3}-\\frac{3}{5}=$ (TSTET 02 June 2024)",
    "options": [
      "$\\frac{1}{15}$",
      "$\\frac{1}{2}$",
      "$\\frac{6}{15}$",
      "$-_\\frac{1}{2}$"
    ],
    "correctAnswer": 0,
    "explanation": "To subtract fractions, they must have a common denominator.\n\n Step 1: Find the Least Common Multiple (LCM) of the denominators (3 and 5).\nThe LCM of 3 and 5 is 15.\n\n Step 2: Convert each fraction to an equivalent fraction with the denominator 15.\n* For $\\frac{2}{3}$, multiply the numerator and denominator by 5: $\\frac{2 \\times 5}{3 \\times 5} = \\frac{10}{15}$.\n* For $\\frac{3}{5}$, multiply the numerator and denominator by 3: $\\frac{3 \\times 3}{5 \\times 3} = \\frac{9}{15}$.\n\n Step 3: Perform the subtraction with the new fractions.\n$\\frac{10}{15} - \\frac{9}{15} = \\frac{10 - 9}{15} = \\frac{1}{15}$."
  },
  {
    "id": 344,
    "question": "An angle with measure more than a right angle and less than a straight angle is: (TSTET 02 June 2024)",
    "options": [
      "Acute angle",
      "Obtuse angle",
      "Reflex angle",
      "Zero angle"
    ],
    "correctAnswer": 1,
    "explanation": "Let's define the angles mentioned:\n* A right angle measures exactly $90^{\\circ}$.\n* A straight angle measures exactly $180^{\\circ}$.\n* An **acute angle** measures less than $90^{\\circ}$.\n* An **obtuse angle** measures more than $90^{\\circ}$ but less than $180^{\\circ}$.\n* A **reflex angle** measures more than $180^{\\circ}$ but less than $360^{\\circ}$.\n* A **zero angle** measures $0^{\\circ}$.\n\nThe question asks for an angle that is more than a right angle ($> 90^{\\circ}$) and less than a straight angle ($< 180^{\\circ}$). This is the definition of an obtuse angle."
  },
  {
    "id": 345,
    "question": "The median of one digit natural numbers is: (TSTET 02 June 2024)",
    "options": [
      "4.5",
      "6",
      "5",
      "5.5"
    ],
    "correctAnswer": 2,
    "explanation": "The median is the middle value of a dataset when it is arranged in ascending or descending order.\n\n Step 1: List the one-digit natural numbers.\nNatural numbers are the counting numbers (1, 2, 3, ...). The one-digit natural numbers are:\n1, 2, 3, 4, 5, 6, 7, 8, 9.\n\n Step 2: The list is already in ascending order.\n\n Step 3: Find the middle value.\nThere are 9 numbers in the dataset (an odd number). The middle position is the $\\frac{(n+1)}{2}^{th}$ term, where n=9.\nMiddle position = $\\frac{(9+1)}{2} = \\frac{10}{2} = 5^{th}$ term.\n\n Step 4: Identify the number at the 5th position.\nIn the list {1, 2, 3, 4, **5**, 6, 7, 8, 9}, the 5th number is 5.\nTherefore, the median is 5."
  },
  {
    "id": 346,
    "question": "If $3p+15=4p+10$ then the value of p is: (TSTET 02 June 2024)",
    "options": [
      "$\\frac{25}{7}$",
      "5",
      "-5",
      "$-_\\frac{25}{7}$"
    ],
    "correctAnswer": 1,
    "explanation": "To solve for 'p', we need to isolate the variable 'p' on one side of the equation.\n\n Step 1: Start with the given equation.\n$3p + 15 = 4p + 10$\n\n Step 2: Move the terms with 'p' to one side. It's often easier to keep the coefficient of 'p' positive, so we'll subtract 3p from both sides.\n$15 = (4p - 3p) + 10$\n$15 = p + 10$\n\n Step 3: Move the constant terms to the other side. Subtract 10 from both sides.\n$15 - 10 = p$\n$5 = p$\n\nThus, the value of p is 5."
  },
  {
    "id": 347,
    "question": "Swati takes a loan of ₹6000 at 10% rate of interest. The interest she has to pay at the end of the year is: (TSTET 02 June 2024)",
    "options": [
      "₹720",
      "₹660",
      "₹550",
      "₹600"
    ],
    "correctAnswer": 3,
    "explanation": "This is a simple interest calculation. The formula for Simple Interest (SI) is:\n$SI = \\frac{P \\times R \\times T}{100}$\nWhere:\n* P = Principal amount (the loan amount)\n* R = Rate of interest per year\n* T = Time period in years\n\n Step 1: Identify the given values.\n* P = ₹6000\n* R = 10%\n* T = 1 year\n\n Step 2: Substitute these values into the formula.\n$SI = \\frac{6000 \\times 10 \\times 1}{100}$\n\n Step 3: Calculate the interest.\n$SI = \\frac{60000}{100} = 600$\n\nThe interest to be paid is ₹600."
  },
  {
    "id": 348,
    "question": "$18\\div\\frac{3}{4}=$ (TSTET 02 June 2024)",
    "options": [
      "13.5",
      "24",
      "16",
      "$\\frac{1}{24}$"
    ],
    "correctAnswer": 1,
    "explanation": "Dividing by a fraction is equivalent to multiplying by its reciprocal (the fraction flipped upside down).\n\n Step 1: Find the reciprocal of the divisor, $\\frac{3}{4}$.\nThe reciprocal of $\\frac{3}{4}$ is $\\frac{4}{3}$.\n\n Step 2: Change the division operation to multiplication using the reciprocal.\n$18 \\div \\frac{3}{4} = 18 \\times \\frac{4}{3}$\n\n Step 3: Perform the multiplication.\n$18 \\times \\frac{4}{3} = \\frac{18 \\times 4}{3}$\nWe can simplify before multiplying: divide 18 by 3.\n$= (18 \\div 3) \\times 4$\n$= 6 \\times 4$\n$= 24$."
  },
  {
    "id": 349,
    "question": "Supplementary angles among the following is: (TSTET 02 June 2024)",
    "options": [
      "$35^{\\circ}, 135^{\\circ}$",
      "$15^{\\circ}, 75^{\\circ}$",
      "$115^{\\circ}, 65^{\\circ}$",
      "$95^{\\circ}, 65^{\\circ}$"
    ],
    "correctAnswer": 2,
    "explanation": "Two angles are defined as supplementary if their sum is exactly $180^{\\circ}$.\n\n Step 1: Check the sum of each pair of angles.\n* **Pair 1:** $35^{\\circ} + 135^{\\circ} = 170^{\\circ}$. This is not equal to $180^{\\circ}$.\n* **Pair 2:** $15^{\\circ} + 75^{\\circ} = 90^{\\circ}$. These are complementary angles, not supplementary.\n* **Pair 3:** $115^{\\circ} + 65^{\\circ} = 180^{\\circ}$. This sum is exactly $180^{\\circ}$, so these angles are supplementary.\n* **Pair 4:** $95^{\\circ} + 65^{\\circ} = 160^{\\circ}$. This is not equal to $180^{\\circ}$."
  },
  {
    "id": 350,
    "question": "Degree of the term $9x^{2}y^{2}z^{2}$ is: (TSTET 02 June 2024)",
    "options": [
      "2",
      "8",
      "4",
      "6"
    ],
    "correctAnswer": 3,
    "explanation": "The degree of a monomial (a single algebraic term) is the sum of the exponents of all its variables.\n\n Step 1: Identify the variables and their exponents in the term $9x^{2}y^{2}z^{2}$.\n* The exponent of variable 'x' is 2.\n* The exponent of variable 'y' is 2.\n* The exponent of variable 'z' is 2.\n\n Step 2: Add the exponents together.\nDegree = (exponent of x) + (exponent of y) + (exponent of z)\nDegree = $2 + 2 + 2 = 6$.\n\nThe number 9 is a coefficient and does not affect the degree of the term."
  },
  {
    "id": 351,
    "question": "If the angles of a triangle are in the ratio 1:4:5, then the triangle is: (TSTET 02 June 2024)",
    "options": [
      "A right-angled triangle",
      "An acute-angled triangle",
      "An obtuse-angled triangle",
      "An equal-angled triangle"
    ],
    "correctAnswer": 0,
    "explanation": "The sum of the angles in any triangle is always $180^{\\circ}$.\n\n Step 1: Represent the angles using the given ratio.\nLet the angles be $1x$, $4x$, and $5x$.\n\n Step 2: Set up an equation for the sum of the angles.\n$1x + 4x + 5x = 180^{\\circ}$\n$10x = 180^{\\circ}$\n\n Step 3: Solve for x.\n$x = \\frac{180^{\\circ}}{10} = 18^{\\circ}$\n\n Step 4: Calculate the measure of each angle.\n* First angle = $1x = 1 \\times 18^{\\circ} = 18^{\\circ}$\n* Second angle = $4x = 4 \\times 18^{\\circ} = 72^{\\circ}$\n* Third angle = $5x = 5 \\times 18^{\\circ} = 90^{\\circ}$\n\n Step 5: Classify the triangle based on its angles.\nSince one of the angles is exactly $90^{\\circ}$, the triangle is a right-angled triangle."
  },
  {
    "id": 352,
    "question": "When a Robin bird flies, it flaps its wings 23 times in ten seconds. The number of times it flaps its wings in one and half minute is: (TSTET 02 June 2024)",
    "options": [
      "2070",
      "138",
      "207",
      "1380"
    ],
    "correctAnswer": 2,
    "explanation": "This is a rate problem that can be solved using proportions.\n\n Step 1: Convert the time from minutes to seconds.\nOne and a half minutes = 1.5 minutes.\nSince there are 60 seconds in a minute, the total time is:\nTime = $1.5 \\times 60 = 90$ seconds.\n\n Step 2: Set up a proportion.\nLet 'x' be the number of flaps in 90 seconds. The rate of flaps is constant.\n$\\frac{\\text{flaps}}{\\text{seconds}} = \\frac{23}{10} = \\frac{x}{90}$\n\n Step 3: Solve for x.\nTo find x, we can cross-multiply or simply find the scaling factor.\nScaling factor from 10 seconds to 90 seconds is $90 \\div 10 = 9$.\nMultiply the number of flaps by this scaling factor:\n$x = 23 \\times 9 = 207$.\n\nThe bird flaps its wings 207 times in 90 seconds."
  },
  {
    "id": 353,
    "question": "In a triangle, the height is double of its base and its area is 484 sq.cm. The length of its height (in cm) is: (TSTET 02 June 2024)",
    "options": [
      "22",
      "44",
      "34",
      "28"
    ],
    "correctAnswer": 1,
    "explanation": "The formula for the area of a triangle is $A = \\frac{1}{2} \\times \\text{base} \\times \\text{height}$.\n\n Step 1: Set up equations based on the problem statement.\nLet 'b' be the base and 'h' be the height.\n* Area (A) = 484\n* Height is double the base: $h = 2b$. This implies that $b = \\frac{h}{2}$.\n\n Step 2: Substitute the known values and relationships into the area formula.\n$484 = \\frac{1}{2} \\times b \\times h$\nSubstitute $b = \\frac{h}{2}$ into the formula to have an equation only in terms of 'h'.\n$484 = \\frac{1}{2} \\times (\\frac{h}{2}) \\times h$\n$484 = \\frac{h^2}{4}$\n\n Step 3: Solve for 'h'.\nMultiply both sides by 4:\n$h^2 = 484 \\times 4$\n$h^2 = 1936$\nTake the square root of both sides:\n$h = \\sqrt{1936} = 44$.\n\nThe length of the height is 44 cm."
  },
  {
    "id": 354,
    "question": "$(105)^{2}-(95)^{2}=$ (TSTET 02 June 2024)",
    "options": [
      "100",
      "200",
      "1000",
      "2000"
    ],
    "correctAnswer": 3,
    "explanation": "This expression is in the form of a difference of squares, which can be solved using the algebraic identity: $a^2 - b^2 = (a+b)(a-b)$. This is much faster than squaring each number individually.\n\n Step 1: Identify 'a' and 'b' from the expression.\n* $a = 105$\n* $b = 95$\n\n Step 2: Apply the identity.\n$(105)^2 - (95)^2 = (105 + 95) \\times (105 - 95)$\n\n Step 3: Perform the calculations inside the parentheses.\n* $105 + 95 = 200$\n* $105 - 95 = 10$\n\n Step 4: Multiply the results.\n$200 \\times 10 = 2000$."
  },
  {
    "id": 355,
    "question": "This is the main advantage of the spiral approach: (TSTET 02 June 2024)",
    "options": [
      "Allows coverage of a topic at once.",
      "Provides deep unique opportunities to gain mastery over the topic.",
      "Allows for easy organization of curriculum materials.",
      "Gives opportunities for revision of content."
    ],
    "correctAnswer": 3,
    "explanation": "A spiral approach in curriculum design involves revisiting topics at increasing levels of complexity over time.\n\n* **Option 1:** This describes a 'block' or 'mastery' approach, which is the opposite of the spiral approach.\n* **Option 2:** While gaining mastery is the ultimate goal of any curriculum, the unique mechanism of the spiral approach is not just providing deep opportunities, but how it does so.\n* **Option 3:** Organization might be a benefit, but it is not the primary pedagogical advantage.\n* **Option 4:** This is the core principle and main advantage of the spiral approach. By repeatedly encountering a topic, students can reinforce and build upon their prior learning. This built-in revision helps solidify knowledge and connect it to new concepts, leading to deeper understanding."
  },
  {
    "id": 356,
    "question": "How can math teachers eliminate students' misunderstandings of mathematical concepts? (TSTET 02 June 2024)",
    "options": [
      "By encouraging to rote memorize the definitions and formulae.",
      "By clarifying the doubts with proper explanations.",
      "By ignoring misconceptions.",
      "By discouraging questioning."
    ],
    "correctAnswer": 1,
    "explanation": "This question addresses effective teaching strategies for correcting student errors.\n\n* **Option 1:** Rote memorization can lead to procedural knowledge without conceptual understanding, which often causes or masks misunderstandings.\n* **Option 2:** This is the most effective pedagogical approach. Identifying a student's doubt or misconception and providing a clear, targeted explanation helps them correct their thinking and build a more robust understanding.\n* **Option 3:** Ignoring misconceptions is detrimental, as they can become more entrenched and hinder future learning.\n* **Option 4:** Discouraging questions prevents teachers from discovering misunderstandings and creates a classroom environment that is not conducive to learning."
  },
  {
    "id": 357,
    "question": "Which method involves hands-on experience and a learning environment through discovery? (TSTET 02 June 2024)",
    "options": [
      "Deductive Method",
      "Synthetic Method",
      "Lecture method",
      "Laboratory Method"
    ],
    "correctAnswer": 3,
    "explanation": "Let's analyze the teaching methods:\n* **Deductive Method:** Moves from general principles to specific examples. It is often teacher-led and less focused on discovery.\n* **Synthetic Method:** Involves combining known facts to derive new ones. It is a logical process but not inherently 'hands-on'.\n* **Lecture method:** A passive learning method where the teacher delivers information to students. It lacks hands-on experience.\n* **Laboratory Method:** A student-centered method where learning occurs through direct experience, experimentation, and observation. It is fundamentally based on 'hands-on' activities and promotes 'learning by doing' and discovery."
  },
  {
    "id": 358,
    "question": "Mathematics teachers can teach geometrical shapes and symmetry more appropriately through these man-made structures during a field trip: (TSTET 02 June 2024)",
    "options": [
      "Amusement parks",
      "Movie workshops",
      "Beach spots",
      "Historical Monuments"
    ],
    "correctAnswer": 3,
    "explanation": "The goal is to find a real-world setting rich in clear examples of geometric shapes and symmetry.\n* Amusement parks, movie workshops, and beach spots are generally not designed with a primary focus on clear, repeating geometric patterns suitable for teaching.\n* **Historical Monuments**, such as temples, palaces, forts, and cathedrals, are often prime examples of architecture incorporating deliberate and clear use of geometry and symmetry. They feature shapes like circles, arches, squares, and triangles, as well as symmetrical designs in their floor plans, facades, and decorations, making them an excellent resource for a field trip."
  },
  {
    "id": 359,
    "question": "What was the main purpose of Anderson and Krathwohl hoped for in preparing the revised Bloom's taxonomy? (TSTET 02 June 2024)",
    "options": [
      "Making learning objectives unmeasurable.",
      "Overlooking the learning objectives.",
      "Improving clarity and applicability on learning objectives.",
      "Changing the domains of Bloom's taxonomy."
    ],
    "correctAnswer": 2,
    "explanation": "Anderson and Krathwohl's revision of Bloom's Taxonomy (2001) was intended to make it a more practical tool for educators.\n\n* The main changes included changing the cognitive levels from nouns to verbs (e.g., 'Knowledge' became 'Remembering') to emphasize actions, and adding a separate dimension for types of knowledge (Factual, Conceptual, Procedural, Metacognitive).\n* The primary purpose behind these changes was to make the taxonomy easier for teachers to use when writing clear, measurable learning objectives and aligning them with instruction and assessment. Therefore, the main purpose was **improving the clarity and applicability of learning objectives**."
  },
  {
    "id": 360,
    "question": "What should teachers do with the teaching materials before teaching a unit? (TSTET 02 June 2024)",
    "options": [
      "Dump them in insecure place.",
      "Keep them in unorganized form.",
      "Prepare them in advance and keep them in handy.",
      "Procuring the teaching materials irrelevant to the unit."
    ],
    "correctAnswer": 2,
    "explanation": "This question assesses fundamental principles of lesson preparation.\n\n* Options 1, 2, and 4 describe poor and ineffective teaching practices. Storing materials insecurely, keeping them unorganized, or using irrelevant materials would disrupt and undermine the lesson.\n* **Option 3** describes a core component of effective teaching. Preparing all necessary teaching aids and materials before the lesson begins and having them organized and easily accessible ('handy') ensures that the lesson can proceed smoothly without interruptions, maximizing learning time and effectiveness."
  },
  {
    "id": 361,
    "question": "Ramesh went to school at 7:15 in the morning. He came back to home at 1:05 in the afternoon. The total time spent (in minutes) by Ramesh from going to School and till returning home is: (TSTET 30 May 2024)",
    "options": [
      "370",
      "380",
      "350",
      "360"
    ],
    "correctAnswer": 2,
    "explanation": "To find the total time spent in minutes, we calculate the duration between the start and end times.\n\n Step 1: Calculate the time from 7:15 AM to 12:00 PM (noon).\nDuration = 12 hours 00 minutes - 7 hours 15 minutes = 4 hours 45 minutes.\n\n Step 2: Calculate the time from 12:00 PM to 1:05 PM.\nDuration = 1 hour 5 minutes.\n\n Step 3: Add the two durations together.\nTotal duration = (4 hours 45 minutes) + (1 hour 5 minutes) = 5 hours 50 minutes.\n\n Step 4: Convert the total duration into minutes.\nSince 1 hour = 60 minutes, 5 hours = 5 × 60 = 300 minutes.\nTotal minutes = 300 minutes + 50 minutes = 350 minutes."
  },
  {
    "id": 362,
    "question": "The difference of the largest and smallest prime numbers between 50 and 90 is: (TSTET 30 May 2024)",
    "options": [
      "38",
      "36",
      "41",
      "37"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: List all the prime numbers between 50 and 90.\nA prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.\nThe prime numbers are: 53, 59, 61, 67, 71, 73, 79, 83, 89.\n\n Step 2: Identify the smallest and largest prime numbers from the list.\nSmallest prime number = 53.\nLargest prime number = 89.\n\n Step 3: Calculate the difference between the largest and smallest prime numbers.\nDifference = 89 - 53 = 36."
  },
  {
    "id": 363,
    "question": "Equivalent number of 10 crores in International system is: (TSTET 30 May 2024)",
    "options": [
      "100 million",
      "1 million",
      "10 million",
      "1 billion"
    ],
    "correctAnswer": 0,
    "explanation": " Step 1: Write '10 crores' in numerical form according to the Indian numbering system.\n10 crores = 10,00,00,000.\n\n Step 2: Represent this number in the International numbering system, where commas are placed after every three digits from the right.\n100,000,000.\n\n Step 3: Read the number according to the International place value chart.\n- The first group of three zeros is the 'hundreds' place.\n- The second group of three zeros is the 'thousands' place.\n- The next group is the 'millions' place.\nSo, 100,000,000 is read as **one hundred million**."
  },
  {
    "id": 364,
    "question": "Two numbers are in the ratio 3:5. If the sum of these two numbers is 136, the smaller number among them is: (TSTET 30 May 2024)",
    "options": [
      "54",
      "51",
      "53",
      "56"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: Represent the two numbers using the given ratio.\nLet the numbers be 3x and 5x.\n\n Step 2: Set up an equation based on their sum.\nGiven that the sum of the numbers is 136:\n3x + 5x = 136\n\n Step 3: Solve for x.\n8x = 136\nx = $\\frac{136}{8}$\nx = 17\n\n Step 4: Find the two numbers.\nFirst number = 3x = 3 × 17 = 51.\nSecond number = 5x = 5 × 17 = 85.\n\n Step 5: Identify the smaller number.\nThe smaller number is 51."
  },
  {
    "id": 365,
    "question": "Principal Ranjani bought a ribbon of length 27m 30cm. If she gives each girl a ribbon of length 30cm, the number of girls for which she can distribute the ribbon is: (TSTET 30 May 2024)",
    "options": [
      "90",
      "901",
      "90.1",
      "91"
    ],
    "correctAnswer": 3,
    "explanation": " Step 1: Convert the total length of the ribbon into a single unit (centimeters).\nGiven length = 27 m 30 cm.\nSince 1 meter = 100 centimeters, 27 m = 27 × 100 = 2700 cm.\nTotal length = 2700 cm + 30 cm = 2730 cm.\n\n Step 2: Divide the total length of the ribbon by the length of the piece given to each girl.\nLength per girl = 30 cm.\nNumber of girls = $\\frac{\\text{Total length}}{\\text{Length per girl}} = \\frac{2730}{30}$\n\n Step 3: Perform the division.\n$\\frac{2730}{30} = \\frac{273}{3} = 91$.\nSo, she can distribute the ribbon to 91 girls."
  },
  {
    "id": 366,
    "question": "The number of possible three-digit numbers using digits 4, 6 and 9 by taking each digit only once is: (TSTET 30 May 2024)",
    "options": [
      "9",
      "12",
      "6",
      "3"
    ],
    "correctAnswer": 2,
    "explanation": "This is a permutation problem as the order of digits matters.\n\n Step 1: Identify the number of available digits and the number of places to fill.\nWe have 3 distinct digits (4, 6, 9) to form a three-digit number.\n\n Step 2: Calculate the number of permutations.\nThe number of ways to arrange 'n' distinct objects is n! (n factorial).\nHere, n = 3.\nNumber of possible numbers = 3! = 3 × 2 × 1 = 6.\n\nAlternatively, we can list them out:\n469, 496, 649, 694, 946, 964.\nThere are 6 possible numbers."
  },
  {
    "id": 367,
    "question": "$\\frac{1}{3}-\\frac{2}{5}=$ (TSTET 30 May 2024)",
    "options": [
      "$\\frac{-1}{15}$",
      "$\\frac{4}{30}$",
      "$\\frac{1}{15}$",
      "$\\frac{-3}{15}$"
    ],
    "correctAnswer": 0,
    "explanation": " Step 1: Find the least common denominator (LCD) for the fractions.\nThe denominators are 3 and 5. The least common multiple (LCM) of 3 and 5 is 15.\n\n Step 2: Convert each fraction to an equivalent fraction with the denominator 15.\n$\\frac{1}{3} = \\frac{1 \\times 5}{3 \\times 5} = \\frac{5}{15}$\n$\\frac{2}{5} = \\frac{2 \\times 3}{5 \\times 3} = \\frac{6}{15}$\n\n Step 3: Subtract the new fractions.\n$\\frac{5}{15} - \\frac{6}{15} = \\frac{5 - 6}{15} = \\frac{-1}{15}$."
  },
  {
    "id": 368,
    "question": "Which of the following number is divisible by 8? (TSTET 30 May 2024)",
    "options": [
      "83828",
      "89484",
      "81824",
      "82108"
    ],
    "correctAnswer": 2,
    "explanation": "A number is divisible by 8 if the number formed by its last three digits (hundreds, tens, and units) is divisible by 8.\n\n Step 1: Check each option.\n- For 83828, the last three digits are 828. $828 \\div 8 = 103.5$. Not divisible.\n- For 89484, the last three digits are 484. $484 \\div 8 = 60.5$. Not divisible.\n- For 81824, the last three digits are 824. $824 \\div 8 = 103$. Divisible.\n- For 82108, the last three digits are 108. $108 \\div 8 = 13.5$. Not divisible.\n\nTherefore, 81824 is the only number divisible by 8."
  },
  {
    "id": 369,
    "question": "Kaprekar's constant in the following is: (TSTET 30 May 2024)",
    "options": [
      "1279",
      "6174",
      "1729",
      "6714"
    ],
    "correctAnswer": 1,
    "explanation": "Kaprekar's constant is the number 6174. It is famous for a mathematical routine:\n1. Take any four-digit number that has at least two different digits.\n2. Arrange the digits in descending and then in ascending order to get two four-digit numbers.\n3. Subtract the smaller number from the bigger number.\n4. Repeat the process. The process will eventually reach 6174, which is the constant."
  },
  {
    "id": 370,
    "question": "Which of the following number is NOT a perfect square number? (TSTET 30 May 2024)",
    "options": [
      "3969",
      "1369",
      "1521",
      "2301"
    ],
    "correctAnswer": 3,
    "explanation": "A perfect square is an integer that is the square of another integer.\n\nMethod 1: Check the square roots.\n- $\\sqrt{3969} = 63$ (since $60^2=3600$ and it ends in 9, try 63 or 67). So, 3969 is a perfect square.\n- $\\sqrt{1369} = 37$ (since $30^2=900$ and it ends in 9, try 33 or 37). So, 1369 is a perfect square.\n- $\\sqrt{1521} = 39$ (since $30^2=900$ and it ends in 1, try 31 or 39). So, 1521 is a perfect square.\n- $\\sqrt{2301}$ is not an integer (since $40^2=1600$ and $50^2=2500$, it would have to be between 40 and 50; $47^2=2209$ and $48^2=2304$). So, 2301 is not a perfect square.\n\nMethod 2: Digital Root.\nThe digital root of a perfect square must be 1, 4, 7, or 9.\n- 3969: 3+9+6+9 = 27 -> 2+7 = 9. (Possible)\n- 1369: 1+3+6+9 = 19 -> 1+9 = 10 -> 1. (Possible)\n- 1521: 1+5+2+1 = 9. (Possible)\n- 2301: 2+3+0+1 = 6. (Not possible)\nSince the digital root of 2301 is 6, it cannot be a perfect square."
  },
  {
    "id": 371,
    "question": "Number of grams in 1 Quintal is: (TSTET 30 May 2024)",
    "options": [
      "10000",
      "100000",
      "1000",
      "1000000"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: Relate Quintal to kilograms.\n1 Quintal = 100 kilograms (kg).\n\n Step 2: Relate kilograms to grams.\n1 kilogram = 1000 grams (g).\n\n Step 3: Combine the conversions.\n1 Quintal = 100 kg × (1000 g / 1 kg) = 100,000 grams."
  },
  {
    "id": 372,
    "question": "Ravi fills 5 litres of petrol in his car for every 3 days. The number of litres of petrol filled by him in the month of September is: (TSTET 30 May 2024)",
    "options": [
      "50",
      "150",
      "90",
      "51.6"
    ],
    "correctAnswer": 0,
    "explanation": " Step 1: Determine the number of days in September.\nThe month of September has 30 days.\n\n Step 2: Calculate how many times Ravi will fill petrol in the month.\nHe fills petrol every 3 days. So, the number of times he fills up is:\nNumber of times = $\\frac{\\text{Total days in the month}}{\\text{Interval in days}} = \\frac{30}{3} = 10$ times.\n\n Step 3: Calculate the total amount of petrol filled.\nHe fills 5 litres each time.\nTotal petrol = Number of times × Litres per fill = 10 × 5 = 50 litres."
  },
  {
    "id": 373,
    "question": "If $a=-3$, then the value of $a(a-3)-8$ is (TSTET 30 May 2024)",
    "options": [
      "26",
      "-8",
      "-26",
      "10"
    ],
    "correctAnswer": 3,
    "explanation": " Step 1: Substitute the value of 'a' into the expression.\nGiven expression: $a(a-3)-8$\nSubstitute $a = -3$: $(-3)((-3)-3)-8$\n\n Step 2: Simplify the expression inside the parentheses.\n$(-3) - 3 = -6$\n\n Step 3: Perform the multiplication.\nThe expression becomes: $(-3)(-6) - 8$\n$(-3) \\times (-6) = 18$\n\n Step 4: Perform the final subtraction.\nThe expression becomes: $18 - 8$\n$18 - 8 = 10$."
  },
  {
    "id": 374,
    "question": "No. of plane surfaces of a cylinder are: (TSTET 30 May 2024)",
    "options": [
      "0",
      "2",
      "3",
      "1"
    ],
    "correctAnswer": 1,
    "explanation": "A cylinder is a 3D geometric shape composed of:\n1. A flat, circular base on the bottom (a plane surface).\n2. A flat, circular top parallel to the base (a plane surface).\n3. A curved surface connecting the two circular bases.\nTherefore, a cylinder has exactly 2 plane surfaces."
  },
  {
    "id": 375,
    "question": "Perimeter (in cm) of a rectangle with measurement 12cm x 15cm is: (TSTET 30 May 2024)",
    "options": [
      "27",
      "60",
      "54",
      "180"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: Identify the length and width of the rectangle.\nLet length (l) = 15 cm and width (w) = 12 cm.\n\n Step 2: Use the formula for the perimeter of a rectangle.\nPerimeter (P) = $2 \\times (l + w)$\n\n Step 3: Substitute the given values and calculate.\nP = $2 \\times (15 + 12)$\nP = $2 \\times (27)$\nP = 54 cm."
  },
  {
    "id": 376,
    "question": "The mode of the numbers 3, 5, 4, 6, 5, 4, 2, 6, 1, 3, 2, 1, 4 is: (TSTET 30 May 2024)",
    "options": [
      "4",
      "1",
      "2",
      "3"
    ],
    "correctAnswer": 0,
    "explanation": "The mode is the value that appears most frequently in a data set.\n\n Step 1: Count the frequency of each number in the given set: 3, 5, 4, 6, 5, 4, 2, 6, 1, 3, 2, 1, 4.\n- Frequency of 1: 2 times\n- Frequency of 2: 2 times\n- Frequency of 3: 2 times\n- Frequency of 4: 3 times\n- Frequency of 5: 2 times\n- Frequency of 6: 2 times\n\n Step 2: Identify the number with the highest frequency.\nThe number 4 appears 3 times, which is more than any other number.\nTherefore, the mode is 4."
  },
  {
    "id": 377,
    "question": "The average of first 25 natural numbers is: (TSTET 30 May 2024)",
    "options": [
      "12.5",
      "12",
      "13.5",
      "13"
    ],
    "correctAnswer": 3,
    "explanation": "The first 25 natural numbers are 1, 2, 3, ..., 25.\n\nMethod 1: Sum and Divide\n Step 1: Find the sum of the first 'n' natural numbers using the formula Sum = $\\frac{n(n+1)}{2}$.\nHere n = 25. Sum = $\\frac{25(25+1)}{2} = \\frac{25 \\times 26}{2} = 25 \\times 13 = 325$.\n Step 2: Calculate the average.\nAverage = $\\frac{\\text{Sum of numbers}}{\\text{Count of numbers}} = \\frac{325}{25} = 13$.\n\nMethod 2: Average of First and Last Term\nFor a set of numbers in an arithmetic progression, the average is the average of the first and the last term.\nAverage = $\\frac{\\text{First Term} + \\text{Last Term}}{2} = \\frac{1 + 25}{2} = \\frac{26}{2} = 13$."
  },
  {
    "id": 378,
    "question": "Euler's formula for a polyhedron is: (TSTET 30 May 2024)",
    "options": [
      "$F-E=2-V$",
      "$F-2=V-E$",
      "$F+V=E-2$",
      "$F+E=V-2$"
    ],
    "correctAnswer": 0,
    "explanation": "Euler's formula for any convex polyhedron states a relationship between the number of Faces (F), Vertices (V), and Edges (E).\n\n Step 1: State the standard Euler's formula.\nThe formula is: $F + V - E = 2$.\n\n Step 2: Check which of the given options is equivalent to the standard formula.\n- Option 1: $F - E = 2 - V$. If we add V to both sides, we get $F + V - E = 2$. This is correct.\n- Option 2: $F - 2 = V - E$. Rearranging gives $F + E - V = 2$. This is incorrect.\n- Option 3: $F + V = E - 2$. Rearranging gives $F + V - E = -2$. This is incorrect.\n- Option 4: $F + E = V - 2$. Rearranging gives $F - V + E = -2$. This is incorrect."
  },
  {
    "id": 379,
    "question": "In a milk packet of 2 litre, 500ml of water is present. Then, the ratio of water to milk in the milk packet is: (TSTET 30 May 2024)",
    "options": [
      "2:5",
      "1:3",
      "1:4",
      "2:1"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: Convert all volumes to the same unit (millilitres).\nTotal volume of the packet = 2 litres = 2 × 1000 ml = 2000 ml.\nVolume of water = 500 ml.\n\n Step 2: Calculate the volume of pure milk.\nVolume of milk = Total volume - Volume of water\nVolume of milk = 2000 ml - 500 ml = 1500 ml.\n\n Step 3: Find the ratio of water to milk.\nRatio = (Volume of water) : (Volume of milk)\nRatio = 500 : 1500\n\n Step 4: Simplify the ratio by dividing both parts by their greatest common divisor (500).\nRatio = $\\frac{500}{500} : \\frac{1500}{500} = 1 : 3$."
  },
  {
    "id": 380,
    "question": "Equivalent fraction of 0.125 is: (TSTET 30 May 2024)",
    "options": [
      "$\\frac{3}{8}$",
      "$\\frac{5}{4}$",
      "$\\frac{1}{4}$",
      "$\\frac{1}{8}$"
    ],
    "correctAnswer": 3,
    "explanation": " Step 1: Convert the decimal to a fraction by placing it over its place value.\nThe decimal 0.125 has three decimal places, so its place value is thousandths.\n$0.125 = \\frac{125}{1000}$.\n\n Step 2: Simplify the fraction.\nFind the greatest common divisor (GCD) of the numerator (125) and the denominator (1000). The GCD is 125.\nDivide both the numerator and the denominator by 125:\n$\\frac{125 \\div 125}{1000 \\div 125} = \\frac{1}{8}$."
  },
  {
    "id": 381,
    "question": "$\\frac{2^{5}\\times5^{5}}{10^{5}}=$ (TSTET 30 May 2024)",
    "options": [
      "0",
      "1",
      "10",
      "5"
    ],
    "correctAnswer": 1,
    "explanation": "Method 1: Using Exponent Rules\n Step 1: Apply the exponent rule $(a^n \\times b^n) = (a \\times b)^n$ to the numerator.\n$2^5 \\times 5^5 = (2 \\times 5)^5 = 10^5$.\n\n Step 2: Substitute this back into the original expression.\n$\\frac{10^5}{10^5}$.\n\n Step 3: Simplify. Any non-zero number divided by itself is 1.\n$\\frac{10^5}{10^5} = 1$.\n\nMethod 2: Direct Calculation\n Step 1: Calculate the values of the numerator and denominator.\n$2^5 = 32$.\n$5^5 = 3125$.\n$10^5 = 100000$.\nNumerator = $32 \\times 3125 = 100000$.\n Step 2: Perform the division.\n$\\frac{100000}{100000} = 1$."
  },
  {
    "id": 382,
    "question": "Number of sides in a Hexagon is: (TSTET 30 May 2024)",
    "options": [
      "6",
      "5",
      "7",
      "12"
    ],
    "correctAnswer": 0,
    "explanation": "A hexagon is a polygon defined by the number of its sides. The prefix 'hexa-' is derived from the Greek word for 'six'. Therefore, a hexagon is a polygon with 6 sides and 6 vertices."
  },
  {
    "id": 383,
    "question": "The number of lines of symmetry in a rhombus is: (TSTET 30 May 2024)",
    "options": [
      "4",
      "3",
      "2",
      "1"
    ],
    "correctAnswer": 2,
    "explanation": "A line of symmetry is a line that divides a shape into two identical halves that are mirror images of each other. For a rhombus:\n- All four sides are equal in length.\n- Opposite angles are equal.\n- The diagonals bisect each other at right angles.\nThe two lines of symmetry in a rhombus are its two diagonals. If you fold the rhombus along either diagonal, the two halves will perfectly overlap. Therefore, a rhombus has 2 lines of symmetry (unless it is a square, which has 4)."
  },
  {
    "id": 384,
    "question": "A 36cm long wire is used to form a square. Then, the area (in sq.cm) of the square is: (TSTET 30 May 2024)",
    "options": [
      "18",
      "81",
      "48",
      "64"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: Relate the length of the wire to the perimeter of the square.\nThe total length of the wire will be the perimeter of the square formed.\nPerimeter (P) = 36 cm.\n\n Step 2: Calculate the side length of the square.\nThe formula for the perimeter of a square is P = 4s, where 's' is the side length.\n36 = 4s\ns = $\\frac{36}{4} = 9$ cm.\n\n Step 3: Calculate the area of the square.\nThe formula for the area of a square is A = $s^2$.\nA = $9^2 = 81$ sq.cm."
  },
  {
    "id": 385,
    "question": "\"A student used basic concepts of triangles in construction of a triangle with given measures\", then the academic standard attained by the student is: (TSTET 30 May 2024)",
    "options": [
      "Problem solving",
      "Reasoning and proof",
      "Communication",
      "Connections"
    ],
    "correctAnswer": 0,
    "explanation": "The academic standards in mathematics assess different cognitive skills. Constructing a triangle with given measures requires the student to apply their knowledge of geometric concepts and procedures to successfully complete a specific task. This application of knowledge to find a solution to a given problem directly aligns with the academic standard of **Problem solving**."
  },
  {
    "id": 386,
    "question": "Identify the contexts in which the Inductive method can be used among the following:\nA) To evolve the formula\nB) To make rules\nC) To theorize\nD) When importance is given for solving the problem by using formulae\nChoose the correct answer: (TSTET 30 May 2024)",
    "options": [
      "A & B only",
      "A, B & C only",
      "B, C & D only",
      "A, B, C & D"
    ],
    "correctAnswer": 1,
    "explanation": "The **Inductive method** involves reasoning from specific examples or observations to arrive at a general conclusion or rule.\n- A) **To evolve the formula**: Observing patterns in specific cases (e.g., area of several rectangles) to derive a general formula is an inductive process.\n- B) **To make rules**: Formulating a general rule (e.g., divisibility rules) after examining multiple examples is an inductive process.\n- C) **To theorize**: Developing a general theory from specific observations is the essence of inductive reasoning.\n- D) **Solving the problem by using formulae**: This describes the **Deductive method**, where a general rule (formula) is applied to specific cases.\nTherefore, the inductive method is used in contexts A, B, and C."
  },
  {
    "id": 387,
    "question": "Read the following pairs related to \"mathematics teaching learning material and activities that can be done with them\".\nA) Pegboard: Multiplication and division can be taught.\nB) Grid paper: Fractions and percentages can be taught.\nC) Geoboard: Can show repeated subtraction is division.\nD) Abacus: Place values can be taught.\nChoose the correct pairs / answer: (TSTET 30 May 2024)",
    "options": [
      "A & C only",
      "A, B & D only",
      "B, C & D only",
      "A, B, C & D"
    ],
    "correctAnswer": 1,
    "explanation": "- A) **Pegboard**: Correct. Pegboards can form arrays to visually represent multiplication (e.g., 3 rows of 4 pegs for 3x4) and division.\n- B) **Grid paper**: Correct. Shading parts of a grid is a common way to teach fractions and percentages.\n- C) **Geoboard**: Incorrect. A geoboard is used for exploring geometric shapes, area, and perimeter. It is not a suitable tool for demonstrating repeated subtraction.\n- D) **Abacus**: Correct. An abacus is a primary tool for teaching place value and performing arithmetic.\nThus, the correct pairs are A, B, and D."
  },
  {
    "id": 388,
    "question": "Arrange the following items in the  Step \"developmental activities\" of the traditional period plan in a sequential order:\nA) Related teaching and learning activities\nB) Content presentation\nC) Generalisation\nD) Content development\nChoose the correct answer: (TSTET 30 May 2024)",
    "options": [
      "B, A, D, C",
      "B, A, C, D",
      "C, B, A, D",
      "A, B, D, C"
    ],
    "correctAnswer": 0,
    "explanation": "The logical flow of developmental activities in a traditional lesson plan is as follows:\n1. **B) Content presentation**: The teacher introduces the new topic or concept.\n2. **A) Related teaching and learning activities**: The teacher engages students in activities like solving examples or demonstrations to explain the concept.\n3. **D) Content development**: Through these activities, the understanding of the content is deepened and expanded.\n4. **C) Generalisation**: The lesson concludes with summarizing the key learnings into a general rule, formula, or principle.\nThe correct sequence is B, A, D, C."
  },
  {
    "id": 389,
    "question": "The teacher gave a problem $4\\frac{2}{5}+\\frac{3}{7}=?$ to determine how many and to what extent the students understood the concept of 'L.C.M.'. Then this type of evaluation is: (TSTET 30 May 2024)",
    "options": [
      "Comprehensive evaluation",
      "Summative evaluation",
      "Diagnostic evaluation",
      "Prognostic evaluation"
    ],
    "correctAnswer": 2,
    "explanation": "**Diagnostic evaluation** is used to identify specific strengths and weaknesses of students regarding a particular skill or concept. In this case, the teacher is not just assessing the final answer but is specifically trying to diagnose the students' understanding of a prerequisite concept (L.C.M.) which is crucial for solving the problem. This helps the teacher to provide targeted remedial instruction."
  },
  {
    "id": 390,
    "question": "Read the following statements related to practices of a mathematics teacher as a facilitator of constructivist learning:\nA) Learners should be encouraged to repeat what the teacher says in the classroom.\nB) The teacher should provide opportunities for learners to express themselves freely.\nChoose the correct answer: (TSTET 30 May 2024)",
    "options": [
      "A and B are true",
      "A and B are false",
      "A is false and B is true",
      "A is true and B is false"
    ],
    "correctAnswer": 2,
    "explanation": "In a **constructivist learning** environment, students actively build their own knowledge rather than passively receiving it.\n- **Statement A**: Encouraging learners to repeat what the teacher says is a feature of rote learning and a teacher-centered, traditional approach. It is contrary to constructivist principles. So, A is false.\n- **Statement B**: A key role of a teacher in a constructivist classroom is to be a facilitator who creates an environment where students can explore, discover, and express their ideas and understanding freely. So, B is true."
  },
  {
    "id": "391",
    "question": "Arrange the following numbers in descending order: 8.003, 8.012, 8.033, 8.025 (TSTET 30 May 2024)",
    "options": [
      "8.003, 8.025, 8.033, 8.012",
      "8.033, 8.012, 8.025, 8.003",
      "8.033, 8.025, 8.012, 8.003",
      "8.012, 8.025, 8.003, 8.033"
    ],
    "correctAnswer": 2,
    "explanation": "To arrange the numbers in descending order, we need to list them from the largest to the smallest.\n\n Step 1: Compare the given numbers: 8.003, 8.012, 8.033, 8.025.\n\n Step 2: Since the whole number part (8) is the same for all numbers, we compare the decimal parts.\n\n Step 3: The decimal parts are .033, .025, .012, and .003.\n\n Step 4: Comparing these values, we find that 0.033 is the largest, followed by 0.025, then 0.012, and finally 0.003 is the smallest.\n\n Step 5: Therefore, the descending order of the numbers is 8.033, 8.025, 8.012, 8.003."
  },
  {
    "id": "392",
    "question": "Part of 50ml in 1 Litre is: (TSTET 30 May 2024)",
    "options": [
      "$\\frac{1}{50}$",
      "$\\frac{1}{20}$",
      "$\\frac{1}{40}$",
      "$\\frac{1}{15}$"
    ],
    "correctAnswer": 1,
    "explanation": "To find the part, we need to express both quantities in the same unit and form a fraction.\n\n Step 1: Convert Litres to milliliters. We know that 1 Litre = 1000 ml.\n\n Step 2: Create a fraction of the part (50 ml) over the whole (1000 ml).\nFraction = $\\frac{50}{1000}$\n\n Step 3: Simplify the fraction.\n$\\frac{50}{1000} = \\frac{5}{100} = \\frac{1}{20}$\n\nThus, 50 ml is $\\frac{1}{20}$ of 1 Litre."
  },
  {
    "id": "393",
    "question": "The place value of 0 in 2038 is: (TSTET 30 May 2024)",
    "options": [
      "1000",
      "20",
      "100",
      "0"
    ],
    "correctAnswer": 3,
    "explanation": "The place value of a digit in a number is the digit itself multiplied by its positional value.\n\n Step 1: Identify the position of the digit '0' in the number 2038. Starting from the right: 8 is in the units place, 3 is in the tens place, and 0 is in the hundreds place.\n\n Step 2: The positional value of the hundreds place is 100.\n\n Step 3: Calculate the place value of the digit 0.\nPlace Value = Digit × Positional Value\nPlace Value = $0 \\times 100 = 0$ "
  },
  {
    "id": "394",
    "question": "If April 1st of a year is Friday, third Monday of that month falls on: (TSTET 30 May 2024)",
    "options": [
      "18",
      "20",
      "22",
      "19"
    ],
    "correctAnswer": 0,
    "explanation": "We need to find the date of the third Monday in April, given that April 1st is a Friday.\n\n Step 1: Find the date of the first Monday.\n- April 1st is Friday.\n- April 2nd is Saturday.\n- April 3rd is Sunday.\n- April 4th is the first Monday.\n\n Step 2: Find the date of the second Monday by adding 7 days to the first Monday.\n- Second Monday = April 4 + 7 days = April 11th.\n\n Step 3: Find the date of the third Monday by adding 7 days to the second Monday.\n- Third Monday = April 11 + 7 days = April 18th."
  },
  {
    "id": "395",
    "question": "The number of seconds in a half an hour is: (TSTET 30 May 2024)",
    "options": [
      "30",
      "1800",
      "60",
      "900"
    ],
    "correctAnswer": 1,
    "explanation": "We need to convert half an hour into seconds.\n\n Step 1: Convert hours to minutes. There are 60 minutes in 1 hour, so half an hour is:\n$0.5 \\text{ hours} \\times 60 \\frac{\\text{minutes}}{\\text{hour}} = 30 \\text{ minutes}$\n\n Step 2: Convert minutes to seconds. There are 60 seconds in 1 minute, so:\n$30 \\text{ minutes} \\times 60 \\frac{\\text{seconds}}{\\text{minute}} = 1800 \\text{ seconds}$\n\nTherefore, there are 1800 seconds in half an hour."
  },
  {
    "id": "396",
    "question": "If $\\frac{1}{2}$ kg coffee powder cost ₹80, the cost of $2\\frac{1}{5}$ kg coffee powder is: (TSTET 30 May 2024)",
    "options": [
      "₹200",
      "₹320",
      "₹176",
      "₹352"
    ],
    "correctAnswer": 3,
    "explanation": "This is a problem of direct proportion.\n\n Step 1: Find the cost of 1 kg of coffee powder.\nGiven that the cost of $\\frac{1}{2}$ kg is ₹80.\nCost of 1 kg = $₹80 \\times 2 = ₹160$.\n\n Step 2: Convert the mixed fraction $2\\frac{1}{5}$ kg to an improper fraction.\n$2\\frac{1}{5} = \\frac{(2 \\times 5) + 1}{5} = \\frac{11}{5}$ kg.\n\n Step 3: Calculate the cost for $\\frac{11}{5}$ kg.\nTotal Cost = Cost per kg × Quantity\nTotal Cost = $160 \\times \\frac{11}{5}$\nTotal Cost = $32 \\times 11 = ₹352$."
  },
  {
    "id": "397",
    "question": "If the median of m, 2m, 3m is 12, then the mean of the data is: (TSTET 30 May 2024)",
    "options": [
      "24",
      "18",
      "12",
      "6"
    ],
    "correctAnswer": 2,
    "explanation": "The problem requires us to first find the value of 'm' using the median and then calculate the mean.\n\n Step 1: Find the value of 'm'.\nThe data set is m, 2m, 3m. Assuming m > 0, the data is already in ascending order.\nThe median is the middle value of an ordered dataset. Here, the middle value is 2m.\nGiven that the median is 12, we have: $2m = 12$, which gives $m = 6$.\n\n Step 2: Determine the data values.\nSubstituting m = 6, the data points are: 6, $2 \\times 6$, $3 \\times 6$, which are 6, 12, 18.\n\n Step 3: Calculate the mean of the data.\nMean = $\\frac{\\text{Sum of observations}}{\\text{Number of observations}}$\nMean = $\\frac{6 + 12 + 18}{3} = \\frac{36}{3} = 12$."
  },
  {
    "id": "398",
    "question": "Which of the following number is divisible by 2, but not by 4? (TSTET 30 May 2024)",
    "options": [
      "1808",
      "9482",
      "1824",
      "2176"
    ],
    "correctAnswer": 1,
    "explanation": "We need to check the divisibility rules for 2 and 4 for each option.\n- **Divisibility rule for 2:** The number must end in an even digit (0, 2, 4, 6, 8).\n- **Divisibility rule for 4:** The number formed by the last two digits must be divisible by 4.\n\nLet's check each option:\n1.  **1808:** It ends in 8 (even), so it's divisible by 2. The last two digits are '08', which is divisible by 4. So, 1808 is divisible by both 2 and 4.\n2.  **9482:** It ends in 2 (even), so it's divisible by 2. The last two digits are '82'. Since $82 \\div 4 = 20.5$, 82 is not divisible by 4. Therefore, 9482 is divisible by 2 but not by 4.\n3.  **1824:** It ends in 4 (even), so it's divisible by 2. The last two digits are '24', which is divisible by 4. So, 1824 is divisible by both 2 and 4.\n4.  **2176:** It ends in 6 (even), so it's divisible by 2. The last two digits are '76', which is divisible by 4 ($76 \\div 4 = 19$). So, 2176 is divisible by both 2 and 4."
  },
  {
    "id": "399",
    "question": "Number of centimetres in 1 Kilometer is: (TSTET 30 May 2024)",
    "options": [
      "1,00,000",
      "100",
      "10,000",
      "1,000"
    ],
    "correctAnswer": 0,
    "explanation": "This requires converting kilometers to centimetres.\n\n Step 1: Convert kilometers (km) to meters (m).\nWe know that 1 kilometer = 1,000 meters.\n\n Step 2: Convert meters (m) to centimetres (cm).\nWe know that 1 meter = 100 centimetres.\n\n Step 3: Combine the conversions.\n$1 \\text{ km} = 1000 \\text{ m} = 1000 \\times 100 \\text{ cm} = 100,000 \\text{ cm}$.\n\nTherefore, there are 100,000 centimetres in 1 kilometer."
  },
  {
    "id": "400",
    "question": "The smallest whole number in the following is: (TSTET 30 May 2024)",
    "options": [
      "-1",
      "1",
      "0",
      "$\\frac{-1}{2}$"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: Define whole numbers.\nWhole numbers are the set of non-negative integers. The set is represented as {0, 1, 2, 3, ...}.\n\n Step 2: Analyze the given options.\n- -1 is a negative integer, not a whole number.\n- 1 is a whole number.\n- 0 is a whole number.\n- $\\frac{-1}{2}$ is a negative rational number, not a whole number.\n\n Step 3: Identify the smallest whole number among the valid options.\nThe whole numbers from the options are 0 and 1. The smallest of these is 0."
  },
  {
    "id": "401",
    "question": "The numbers which have exactly two factors is called as: (TSTET 30 May 2024)",
    "options": [
      "even numbers",
      "odd numbers",
      "composite numbers",
      "prime numbers"
    ],
    "correctAnswer": 3,
    "explanation": "This question asks for the definition of a specific type of number.\n\n- **Even numbers** are integers divisible by 2.\n- **Odd numbers** are integers not divisible by 2.\n- **Composite numbers** are positive integers that have more than two factors. For example, 4 has factors 1, 2, and 4.\n- **Prime numbers** are natural numbers greater than 1 that have exactly two distinct positive factors: 1 and the number itself. For example, 7 has factors 1 and 7 only.\n\nTherefore, the correct answer is **prime numbers**."
  },
  {
    "id": "402",
    "question": "The book \"The Elements\" was written by: (TSTET 30 May 2024)",
    "options": [
      "Aristotle",
      "Euclid",
      "Pythagoras",
      "Aryabhatta"
    ],
    "correctAnswer": 1,
    "explanation": "This is a question about the history of mathematics.\n\n**Euclid**, a Greek mathematician often referred to as the 'father of geometry', wrote \"The Elements\". This mathematical treatise consists of 13 books and is one of the most influential works in the history of mathematics, serving as the main textbook for teaching mathematics (especially geometry) from the time of its publication until the late 19th or early 20th century."
  },
  {
    "id": "403",
    "question": "Area (in sq. m.) of a square with the side $2\\frac{1}{2}$ m is: (TSTET 30 May 2024)",
    "options": [
      "$6\\frac{1}{4}$",
      "$4\\frac{1}{2}$",
      "$6\\frac{1}{2}$",
      "$4\\frac{1}{4}$"
    ],
    "correctAnswer": 0,
    "explanation": "The formula for the area of a square is Area = side × side = $side^2$.\n\n Step 1: Convert the mixed fraction side length to an improper fraction.\nSide = $2\\frac{1}{2} = \\frac{(2 \\times 2) + 1}{2} = \\frac{5}{2}$ m.\n\n Step 2: Calculate the area using the formula.\nArea = $(\\frac{5}{2})^2 = \\frac{5^2}{2^2} = \\frac{25}{4}$ sq. m.\n\n Step 3: Convert the improper fraction back to a mixed fraction.\n$25 \\div 4 = 6$ with a remainder of 1. So, $\\frac{25}{4} = 6\\frac{1}{4}$ sq. m."
  },
  {
    "id": "404",
    "question": "A point X on a line segment PQ of length 16cm divides it in the ratio 3:5. Then, the length (in cm) of PX is: (TSTET 30 May 2024)",
    "options": [
      "4.8",
      "6",
      "6.4",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "The line segment PQ is divided into two parts, PX and XQ, in the ratio 3:5.\n\n Step 1: Find the total number of parts in the ratio.\nTotal parts = $3 + 5 = 8$.\n\n Step 2: The total length of the segment PQ is 16 cm, which corresponds to these 8 parts.\n\n Step 3: Calculate the length of one part.\nLength of 1 part = $\\frac{\\text{Total Length}}{\\text{Total Parts}} = \\frac{16}{8} = 2$ cm.\n\n Step 4: The length of PX corresponds to 3 parts of the ratio.\nLength of PX = $3 \\text{ parts} \\times 2 \\frac{\\text{cm}}{\\text{part}} = 6$ cm."
  },
  {
    "id": "405",
    "question": "A car moving at a constant speed covers a distance of 110km in 2 hours. Then the time taken (in hours) by that car to cover a distance of 495km with the same speed is: (TSTET 30 May 2024)",
    "options": [
      "4.5",
      "6",
      "7.5",
      "9"
    ],
    "correctAnswer": 3,
    "explanation": "This is a two- Step problem involving speed, distance, and time.\n\n Step 1: Calculate the speed of the car.\nThe formula for speed is Speed = $\\frac{\\text{Distance}}{\\text{Time}}$.\nSpeed = $\\frac{110 \\text{ km}}{2 \\text{ hours}} = 55$ km/h.\n\n Step 2: Calculate the time taken to cover the new distance at the same speed.\nThe formula for time is Time = $\\frac{\\text{Distance}}{\\text{Speed}}$.\nTime = $\\frac{495 \\text{ km}}{55 \\text{ km/h}} = 9$ hours."
  },
  {
    "id": "406",
    "question": "No. of sides of an Octagon is: (TSTET 30 May 2024)",
    "options": [
      "4",
      "8",
      "6",
      "9"
    ],
    "correctAnswer": 1,
    "explanation": "The name of a polygon often indicates the number of its sides, based on Greek prefixes.\n\n- The prefix 'octo-' means eight.\n- An **octagon** is a polygon with **8 sides**.\n\nFor reference:\n- A polygon with 4 sides is a quadrilateral.\n- A polygon with 6 sides is a hexagon.\n- A polygon with 9 sides is a nonagon."
  },
  {
    "id": "407",
    "question": "The median of first 5 multiples of 6 is: (TSTET 30 May 2024)",
    "options": [
      "16",
      "15",
      "18",
      "14"
    ],
    "correctAnswer": 2,
    "explanation": "The median is the middle value in a dataset that has been arranged in order.\n\n Step 1: List the first 5 multiples of 6.\n$6 \\times 1 = 6$\n$6 \\times 2 = 12$\n$6 \\times 3 = 18$\n$6 \\times 4 = 24$\n$6 \\times 5 = 30$\nThe dataset is {6, 12, 18, 24, 30}.\n\n Step 2: The dataset is already in ascending order.\n\n Step 3: Identify the middle value. Since there are 5 values (an odd number), the median is the middle one, which is the 3rd value.\nThe middle value is 18."
  },
  {
    "id": "408",
    "question": "The 8th term of the sequence 1, 4, 9, 16, 25...... is: (TSTET 30 May 2024)",
    "options": [
      "64",
      "49",
      "81",
      "36"
    ],
    "correctAnswer": 0,
    "explanation": "First, we need to identify the pattern of the sequence.\n\n Step 1: Analyze the terms.\n- 1st term: 1 = $1^2$\n- 2nd term: 4 = $2^2$\n- 3rd term: 9 = $3^2$\n- 4th term: 16 = $4^2$\n- 5th term: 25 = $5^2$\n\n Step 2: Formulate the general rule.\nThe pattern shows that the nth term of the sequence is $n^2$.\n\n Step 3: Calculate the 8th term using the rule.\nFor the 8th term, n = 8.\n8th term = $8^2 = 64$."
  },
  {
    "id": "409",
    "question": "Equivalent decimal of $\\frac{3}{8}$ is: (TSTET 30 May 2024)",
    "options": [
      "0.275",
      "0.325",
      "0.225",
      "0.375"
    ],
    "correctAnswer": 3,
    "explanation": "To find the decimal equivalent of a fraction, we divide the numerator by the denominator.\n\n Step 1: Set up the division: $3 \\div 8$.\n\n Step 2: Perform the long division.\n- Since 8 is larger than 3, we add a decimal point and a zero: $3.0 \\div 8$.\n- $30 \\div 8 = 3$ with a remainder of 6. So, the first decimal digit is 3. (Result: 0.3...)\n- Bring down another zero: $60 \\div 8 = 7$ with a remainder of 4. So, the second decimal digit is 7. (Result: 0.37...)\n- Bring down another zero: $40 \\div 8 = 5$ with a remainder of 0. So, the third decimal digit is 5. (Result: 0.375)\n\nThe division terminates, and the result is 0.375."
  },
  {
    "id": "410",
    "question": "If Raju spends ₹8 each day, the money spend by him in November is: (TSTET 30 May 2024)",
    "options": [
      "₹248",
      "₹180",
      "₹240",
      "₹210"
    ],
    "correctAnswer": 2,
    "explanation": "To find the total amount spent, we need to multiply the daily expenditure by the number of days in the month.\n\n Step 1: Identify the number of days in November. The month of November has 30 days.\n\n Step 2: Identify the daily expenditure. Raju spends ₹8 per day.\n\n Step 3: Calculate the total expenditure.\nTotal Spend = Daily Spend × Number of Days\nTotal Spend = $₹8 \\times 30 = ₹240$."
  },
  {
    "id": "411",
    "question": "Identify the FALSE statement among the following: (TSTET 30 May 2024)",
    "options": [
      "$-5 < 8$",
      "$-99 > -100$",
      "$0 < 5$",
      "$-10 > +10$"
    ],
    "correctAnswer": 3,
    "explanation": "We need to evaluate the truth of each inequality.\n\n1.  **-5 < 8**: This is **TRUE**. Any negative number is less than any positive number.\n2.  **-99 > -100**: This is **TRUE**. On a number line, -99 is to the right of -100, making it the greater number.\n3.  **0 < 5**: This is **TRUE**. Zero is less than five.\n4.  **-10 > +10**: This is **FALSE**. A negative number can never be greater than a positive number. -10 is to the left of +10 on the number line."
  },
  {
    "id": "412",
    "question": "Equation among the following is: (TSTET 30 May 2024)",
    "options": [
      "$p-3=5$",
      "$m+5<8$",
      "$-1+a>6$",
      "$4+5 \\ne 7$"
    ],
    "correctAnswer": 0,
    "explanation": "Let's define what an equation is and analyze the options.\n\nAn **equation** is a mathematical statement that asserts the equality of two expressions. It is characterized by the use of an equals sign (=).\n\n- **$p-3=5$**: This statement uses an equals sign (=) to show that the expression 'p-3' is equal to '5'. This is an equation.\n- **$m+5<8$**: This uses a 'less than' sign (<). It is an inequality.\n- **$-1+a>6$**: This uses a 'greater than' sign (>). It is an inequality.\n- **$4+5 \\ne 7$**: This uses a 'not equal to' sign ($≠$). It is an inequality.\n\nTherefore, the only equation among the options is $p-3=5$."
  },
  {
    "id": "413",
    "question": "The place value of underlined digit in 6.08 is: (TSTET 30 May 2024)",
    "options": [
      "$\\frac{8}{50}$",
      "$\\frac{8}{100}$",
      "$\\frac{8}{10}$",
      "$\\frac{8}{1000}$"
    ],
    "correctAnswer": 1,
    "explanation": "The underlined digit is 8 in the number 6.08.\n\n Step 1: Identify the position of the digit relative to the decimal point.\n- The first digit to the right of the decimal point is the tenths place (0).\n- The second digit to the right is the hundredths place (8).\n\n Step 2: The positional value of the hundredths place is $\\frac{1}{100}$.\n\n Step 3: The place value of the digit is the digit multiplied by its positional value.\nPlace Value of 8 = $8 \\times \\frac{1}{100} = \\frac{8}{100}$."
  },
  {
    "id": "414",
    "question": "A 44cm long wire is used to form a circle. Then, the area (in sq.cm) of the circle is (use $\\pi=\\frac{22}{7}$): (TSTET 30 May 2024)",
    "options": [
      "22",
      "72",
      "154",
      "144"
    ],
    "correctAnswer": 2,
    "explanation": "The length of the wire will be the circumference of the circle.\n\n Step 1: Find the radius (r) of the circle using the circumference formula, $C = 2\\pi r$.\nGiven: Circumference (C) = 44 cm and $\\pi = \\frac{22}{7}$.\n$44 = 2 \\times \\frac{22}{7} \\times r$\n$44 = \\frac{44}{7} \\times r$\nTo find r, we rearrange the formula: $r = \\frac{44 \\times 7}{44} = 7$ cm.\n\n Step 2: Calculate the area of the circle using the area formula, $A = \\pi r^2$.\n$A = \\frac{22}{7} \\times (7)^2$\n$A = \\frac{22}{7} \\times 49$\n$A = 22 \\times 7 = 154$ sq.cm."
  },
  {
    "id": "415",
    "question": "\"A student formulated the general principles of ratio and proportions\", then the academic standard attained by the student is: (TSTET 30 May 2024)",
    "options": [
      "Problem solving",
      "Reasoning and proof",
      "Communication",
      "Connections"
    ],
    "correctAnswer": 1,
    "explanation": "Let's analyze the activity in relation to the academic standards.\n\n- **Problem solving:** Involves finding a solution to a specific, given problem.\n- **Reasoning and proof:** Involves logical thinking, making conjectures, providing justifications, and generalizing from patterns to formulate rules or principles. Formulating general principles is a higher-order thinking skill that falls squarely under this standard.\n- **Communication:** Involves expressing mathematical ideas clearly, whether orally, in writing, or using symbols.\n- **Connections:** Involves linking mathematical concepts to each other and to real-world situations.\n\nThe act of 'formulating general principles' from observations or examples is the process of generalization, which is a key component of mathematical **Reasoning and proof**."
  },
  {
    "id": "416",
    "question": "Identify the contexts in which the Deductive method can be used among the following:\nA) To make rules\nB) To derive one formula from another formula\nC) To prove one theorem based on another theorem\nD) When importance is given for solving the problem by using formulae\nChoose the correct answer: (TSTET 30 May 2024)",
    "options": [
      "A & B only",
      "A, B & C only",
      "B, C & D only",
      "A, B, C & D"
    ],
    "correctAnswer": 2,
    "explanation": "The **Deductive method** of teaching involves reasoning from a general principle to a specific instance (General → Specific).\nLet's analyze the options:\n\n- **A) To make rules:** This is characteristic of the **Inductive method**, where one observes specific examples to formulate a general rule (Specific → General). So, A is incorrect.\n- **B) To derive one formula from another formula:** This is deductive. It uses existing general principles (formulae) to logically arrive at another general principle.\n- **C) To prove one theorem based on another theorem:** This is a classic example of deductive reasoning, where established general truths (theorems) are used to prove new ones.\n- **D) When importance is given for solving the problem by using formulae:** This is deductive. It involves applying a general rule (the formula) to a specific problem.\n\nTherefore, the contexts where the deductive method is used are B, C, and D."
  },
  {
    "id": "417",
    "question": "Read the following pairs related to \"mathematics teaching learning material and activities that can be done with them\".\nA) Geoboard: Place values can be taught.\nB) Grid paper: Fractions and percentages can be taught.\nC) Napier strips: Larger multiplications can be done.\nD) Abacus: Addition and subtraction of decimals can be taught.\nChoose the correct pairs / answer: (TSTET 30 May 2024)",
    "options": [
      "A & C only",
      "A, B & D only",
      "B, C & D only",
      "A, B, C & D"
    ],
    "correctAnswer": 2,
    "explanation": "Let's evaluate the correctness of each pair:\n\n- **A) Geoboard: Place values can be taught.** This is **INCORRECT**. A geoboard is used to teach geometric concepts like shapes, perimeter, and area, not place value.\n- **B) Grid paper: Fractions and percentages can be taught.** This is **CORRECT**. Shading parts of a 10x10 grid is a very effective visual method for teaching fractions, decimals, and percentages.\n- **C) Napier strips: Larger multiplications can be done.** This is **CORRECT**. Napier's strips (or bones) are a mechanical tool invented by John Napier for simplifying the multiplication of large numbers.\n- **D) Abacus: Addition and subtraction of decimals can be taught.** This is **CORRECT**. While a standard abacus is used for whole numbers, it can be adapted to represent decimals by designating a specific rod as the units place, with rods to its right representing tenths, hundredths, etc.\n\nTherefore, the correct pairs are B, C, and D."
  },
  {
    "id": "418",
    "question": "Arrange the following items in the \"culminating activities  Step\" of the traditional period plan in a sequential order:\nA) Review\nB) Supervisory study\nC) Evaluation\nChoose the correct answer: (TSTET 30 May 2024)",
    "options": [
      "B, A, C",
      "C, A, B",
      "C, B, A",
      "A, B, C"
    ],
    "correctAnswer": 3,
    "explanation": "The culminating activities at the end of a lesson plan follow a logical sequence to reinforce and assess learning.\n\n1.  **A) Review:** The teacher first summarizes or recapitulates the main points of the lesson to ensure the concepts are fresh in the students' minds.\n2.  **B) Supervisory study:** Following the review, students are typically given practice problems or tasks to apply the new knowledge. The teacher supervises this work, providing individual help where needed.\n3.  **C) Evaluation:** This is the final  Step to assess whether the learning objectives have been met. It can include checking the classwork, asking questions, or giving a short quiz. It is often followed by the assignment of homework.\n\nTherefore, the correct sequential order is A, B, C."
  },
  {
    "id": "419",
    "question": "While teaching addition of fractions, the teacher has given the problem \"Solve $\\frac{2}{3}+\\frac{3}{5}$\" to know how well the students have learned. This type of evaluation is: (TSTET 30 May 2024)",
    "options": [
      "Formative evaluation",
      "Summative evaluation",
      "Comprehensive evaluation",
      "Prognostic evaluation"
    ],
    "correctAnswer": 0,
    "explanation": "Let's define the types of evaluation:\n\n- **Formative evaluation:** This is 'assessment *for* learning'. It is conducted *during* the instructional process to monitor student learning, provide ongoing feedback, and guide the teacher's instruction. The question given by the teacher fits this description perfectly as it's designed to check understanding while the topic is being taught.\n- **Summative evaluation:** This is 'assessment *of* learning'. It occurs at the *end* of an instructional unit (e.g., end-of-chapter test, final exam) to evaluate student mastery of the material.\n- **Prognostic evaluation:** This predicts future performance.\n- **Comprehensive evaluation:** Refers to an evaluation that covers all aspects of development.\n\nSince the assessment is happening *while teaching* to check progress, it is a **formative evaluation**."
  },
  {
    "id": "420",
    "question": "Read the following statements related with the role of the mathematics teacher as a facilitator in constructivist learning:\nA) In the teaching and learning process, learners should be given tasks to construct knowledge by themselves.\nB) Teaching should be limited to mathematics textbooks only.\nChoose the correct answer: (TSTET 30 May 2024)",
    "options": [
      "A and B are true.",
      "A and B are false.",
      "A is false and B is true.",
      "A is true and B is false."
    ],
    "correctAnswer": 3,
    "explanation": "In a **constructivist learning** environment, the teacher acts as a facilitator, guiding students to actively build or 'construct' their own understanding.\n\n- **Statement A:** \"...learners should be given tasks to construct knowledge by themselves.\" This is the core principle of constructivism. The learner is an active participant, not a passive recipient of information. Thus, **Statement A is true**.\n\n- **Statement B:** \"Teaching should be limited to mathematics textbooks only.\" This contradicts the constructivist approach. A facilitator encourages the use of various resources, real-world problems, and hands-on activities to help students build a rich, connected understanding. Over-reliance on a single textbook is a feature of a more traditional, teacher-centered approach. Thus, **Statement B is false**.\n\nTherefore, the correct choice is that A is true and B is false."
  },
  {
    "id": "421",
    "question": "If $(x+y)=8$ and $xy=7$, then the value of $(x-y)$ is: (TSTET 31 May 2024)",
    "options": [
      "48",
      "4",
      "6",
      "56"
    ],
    "correctAnswer": 2,
    "explanation": "To find the value of $(x-y)$, we can use the algebraic identity that relates $(x-y)^2$, $(x+y)^2$, and $xy$.\n\n Step 1: Use the identity $(x-y)^2 = (x+y)^2 - 4xy$.\n\n Step 2: Substitute the given values into the identity.\nGiven: $(x+y) = 8$ and $xy = 7$.\n$(x-y)^2 = (8)^2 - 4(7)$\n\n Step 3: Simplify the expression.\n$(x-y)^2 = 64 - 28$\n$(x-y)^2 = 36$\n\n Step 4: Take the square root of both sides to find $(x-y)$.\n$(x-y) = \\sqrt{36}$\n$(x-y) = 6$"
  },
  {
    "id": "422",
    "question": "The difference between the number 9673 and the number formed by changing the place of 7 into thousands place and 9 into tens place of 9673 is: (TSTET 31 May 2024)",
    "options": [
      "2022",
      "1980",
      "2020",
      "1920"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: Identify the original number.\nOriginal number = 9673.\n\n Step 2: Form the new number based on the given changes.\nThe question implies swapping the digits in the thousands place (9) and the tens place (7), while the other digits (6 and 3) remain in their positions.\nOriginal: 9(thousands), 6(hundreds), 7(tens), 3(ones).\nNew: 7(thousands), 6(hundreds), 9(tens), 3(ones).\nThe new number is 7693.\n\n Step 3: Calculate the difference between the original and the new number.\nDifference = $9673 - 7693 = 1980$."
  },
  {
    "id": "423",
    "question": "Which of the following number is divisible by 9? (TSTET 31 May 2024)",
    "options": [
      "65051",
      "35948",
      "27801",
      "10401"
    ],
    "correctAnswer": 2,
    "explanation": "A number is divisible by 9 if the sum of its digits is divisible by 9.\n\n Step 1: Check each option by summing its digits.\n- Option 1 (65051): $6 + 5 + 0 + 5 + 1 = 17$. (17 is not divisible by 9)\n- Option 2 (35948): $3 + 5 + 9 + 4 + 8 = 29$. (29 is not divisible by 9)\n- Option 3 (27801): $2 + 7 + 8 + 0 + 1 = 18$. (18 is divisible by 9)\n- Option 4 (10401): $1 + 0 + 4 + 0 + 1 = 6$. (6 is not divisible by 9)\n\nTherefore, 27801 is the only number divisible by 9."
  },
  {
    "id": "424",
    "question": "The number of minutes in 10 days is equal to number of seconds in how many hours? (TSTET 31 May 2024)",
    "options": [
      "4",
      "3.5",
      "4.5",
      "3"
    ],
    "correctAnswer": 0,
    "explanation": " Step 1: Calculate the total number of minutes in 10 days.\nNumber of minutes = (Number of days) × (Hours per day) × (Minutes per hour)\nNumber of minutes = $10 \\times 24 \\times 60 = 14400$ minutes.\n\n Step 2: Calculate the number of seconds in one hour.\nNumber of seconds = (Minutes per hour) × (Seconds per minute)\nNumber of seconds = $60 \\times 60 = 3600$ seconds.\n\n Step 3: Find how many hours have a number of seconds equal to the number of minutes in 10 days.\nRequired hours = $\\frac{\\text{Total minutes in 10 days}}{\\text{Seconds in one hour}}$\nRequired hours = $\\frac{14400}{3600} = 4$ hours."
  },
  {
    "id": "425",
    "question": "A farmer has sheep and cows in the ratio 7:5. If he has 120 cows, then the number of sheep he has is: (TSTET 31 May 2024)",
    "options": [
      "168",
      "120",
      "144",
      "192"
    ],
    "correctAnswer": 0,
    "explanation": " Step 1: Set up the proportion based on the given ratio.\nThe ratio of sheep to cows is 7:5. This can be written as: $\\frac{\\text{Sheep}}{\\text{Cows}} = \\frac{7}{5}$.\n\n Step 2: Let 'S' be the number of sheep. Substitute the known values into the proportion.\nWe are given that the number of cows is 120.\n$\\frac{S}{120} = \\frac{7}{5}$\n\n Step 3: Solve for 'S'.\nMultiply both sides by 120:\n$S = \\frac{7}{5} \\times 120$\n$S = 7 \\times 24$\n$S = 168$\n\nThe farmer has 168 sheep."
  },
  {
    "id": "426",
    "question": "The number of lines of symmetry in a square is: (TSTET 31 May 2024)",
    "options": [
      "2",
      "3",
      "4",
      "1"
    ],
    "correctAnswer": 2,
    "explanation": "A line of symmetry is a line that divides a figure into two identical, mirror-image halves.\n\nA square has four lines of symmetry:\n1.  One **vertical** line passing through the midpoint of the top and bottom sides.\n2.  One **horizontal** line passing through the midpoint of the left and right sides.\n3.  Two **diagonal** lines connecting opposite vertices.\n\nTotal lines of symmetry = 1 (vertical) + 1 (horizontal) + 2 (diagonal) = 4."
  },
  {
    "id": "427",
    "question": "The LCM of even prime number and least positive composite number is: (TSTET 31 May 2024)",
    "options": [
      "2",
      "1",
      "3",
      "4"
    ],
    "correctAnswer": 3,
    "explanation": " Step 1: Identify the even prime number.\nA prime number is a number greater than 1 with only two factors: 1 and itself. The only even prime number is 2.\n\n Step 2: Identify the least positive composite number.\nA composite number is a positive integer with more than two factors. The first few composite numbers are 4, 6, 8, 9... The least positive composite number is 4.\n\n Step 3: Find the LCM (Least Common Multiple) of 2 and 4.\nThe multiples of 2 are: 2, **4**, 6, 8, ...\nThe multiples of 4 are: **4**, 8, 12, ...\nThe smallest number that is a multiple of both is 4."
  },
  {
    "id": "428",
    "question": "In ∆ABC, $AB=BC$ and $\\angle B=70^{\\circ}$ Then, $\\angle A=$ (TSTET 31 May 2024)",
    "options": [
      "80°",
      "55°",
      "110°",
      "45°"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: Identify the properties of the triangle.\nSince two sides are equal ($AB = BC$), the triangle is an isosceles triangle.\n\n Step 2: Apply the property of isosceles triangles.\nIn an isosceles triangle, the angles opposite the equal sides are also equal. Therefore, $\\angle A = \\angle C$.\n\n Step 3: Apply the angle sum property of a triangle.\nThe sum of all angles in a triangle is always 180°.\n$\\angle A + \\angle B + \\angle C = 180^{\\circ}$\n\n Step 4: Substitute the known values and solve for $\\angle A$.\n$\\angle A + 70^{\\circ} + \\angle A = 180^{\\circ}$ (since $\\angle C = \\angle A$)\n$2\\angle A + 70^{\\circ} = 180^{\\circ}$\n$2\\angle A = 180^{\\circ} - 70^{\\circ}$\n$2\\angle A = 110^{\\circ}$\n$\\angle A = \\frac{110^{\\circ}}{2} = 55^{\\circ}$."
  },
  {
    "id": "429",
    "question": "Value of $\\sqrt{225}\\times3^{-1}$ is: (TSTET 31 May 2024)",
    "options": [
      "3",
      "45",
      "15",
      "5"
    ],
    "correctAnswer": 3,
    "explanation": " Step 1: Evaluate the square root.\nThe square root of 225 is 15, since $15 \\times 15 = 225$.\nSo, $\\sqrt{225} = 15$.\n\n Step 2: Evaluate the term with the negative exponent.\nThe rule for negative exponents is $a^{-n} = \\frac{1}{a^n}$.\nSo, $3^{-1} = \\frac{1}{3^1} = \\frac{1}{3}$.\n\n Step 3: Multiply the results from  Step 1 and  Step 2.\nValue = $15 \\times \\frac{1}{3} = \\frac{15}{3} = 5$."
  },
  {
    "id": "430",
    "question": "If 5th November 2023 is Sunday, what will be the day on 5th November 2024? (TSTET 31 May 2024)",
    "options": [
      "Saturday",
      "Monday",
      "Tuesday",
      "Sunday"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: Determine if the year 2024 is a leap year.\nA year is a leap year if it is divisible by 4. Since 2024 is divisible by 4 ($2024 \\div 4 = 506$), it is a leap year. This means it has 366 days, and February 2024 has 29 days.\n\n Step 2: Calculate the number of odd days.\nThe period from 5th Nov 2023 to 5th Nov 2024 includes Feb 29, 2024, so the total duration is 366 days. To find the odd days, we find the remainder when 366 is divided by 7.\n$366 \\div 7 = 52$ with a remainder of 2. So, there are 2 odd days.\n\n Step 3: Calculate the day.\nThe day on 5th November 2024 will be 2 days after the day on 5th November 2023.\nDay = Sunday + 2 days = Tuesday."
  },
  {
    "id": "431",
    "question": "If the cost of a dozen apples is ₹80, then the cost of 9 apples is: (TSTET 31 May 2024)",
    "options": [
      "₹100",
      "₹60",
      "₹40",
      "₹50"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: Find the cost of one apple.\nA dozen contains 12 items. So, 12 apples cost ₹80.\nCost of one apple = $\\frac{\\text{Total Cost}}{\\text{Number of Apples}} = \\frac{₹80}{12}$.\n\n Step 2: Calculate the cost of 9 apples.\nCost of 9 apples = (Cost of one apple) × 9\nCost of 9 apples = $\\frac{80}{12} \\times 9$\n\n Step 3: Simplify the calculation.\nCost of 9 apples = $\\frac{80 \\times 9}{12} = \\frac{720}{12} = ₹60$."
  },
  {
    "id": "432",
    "question": "The area of a rectangular field is 1350sq.m. and its length is $1\\frac{1}{2}$ times its breadth. The perimeter (in m.) of this rectangular field is: (TSTET 31 May 2024)",
    "options": [
      "90",
      "180",
      "150",
      "120"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: Define variables and set up equations.\nLet the breadth of the rectangle be 'b' meters.\nLet the length of the rectangle be 'l' meters.\nGiven: Length is $1\\frac{1}{2}$ times the breadth, so $l = 1.5 \\times b$.\nGiven: Area = $l \\times b = 1350$ sq.m.\n\n Step 2: Solve for the dimensions (breadth and length).\nSubstitute the expression for 'l' into the area formula:\n$(1.5b) \\times b = 1350$\n$1.5b^2 = 1350$\n$b^2 = \\frac{1350}{1.5} = 900$\n$b = \\sqrt{900} = 30$ meters.\nNow, find the length: $l = 1.5 \\times 30 = 45$ meters.\n\n Step 3: Calculate the perimeter.\nThe formula for the perimeter of a rectangle is $P = 2(l + b)$.\n$P = 2(45 + 30)$\n$P = 2(75)$\n$P = 150$ meters."
  },
  {
    "id": "433",
    "question": "Archana drinks 500ml of juice every day. Thus, the juice she drinks in a week (in litres) is: (TSTET 31 May 2024)",
    "options": [
      "3.500",
      "350.00",
      "35.00",
      "3500"
    ],
    "correctAnswer": 0,
    "explanation": " Step 1: Calculate the total amount of juice consumed in a week in milliliters (ml).\nDaily consumption = 500 ml.\nNumber of days in a week = 7.\nTotal consumption in ml = $500 \\text{ ml/day} \\times 7 \\text{ days} = 3500$ ml.\n\n Step 2: Convert the total volume from milliliters (ml) to litres (L).\nWe know that 1 litre = 1000 ml.\nTotal consumption in litres = $\\frac{3500 \\text{ ml}}{1000 \\text{ ml/L}} = 3.5$ L.\n\nThe value 3.500 is numerically equal to 3.5."
  },
  {
    "id": "434",
    "question": "The median of first 9 composite numbers is: (TSTET 31 May 2024)",
    "options": [
      "9.5",
      "10",
      "11.5",
      "11"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: List the first 9 composite numbers in order.\nA composite number is a positive integer that has at least one divisor other than 1 and itself. The list starts with 4.\nThe first 9 composite numbers are: 4, 6, 8, 9, 10, 12, 14, 15, 16.\n\n Step 2: Find the median.\nThe median is the middle value of an ordered data set. Since there are 9 numbers (an odd count), the median is the single middle number.\nThe position of the median is the $(\\frac{n+1}{2})^{th}$ term, where n=9.\nPosition = $(\\frac{9+1}{2})^{th} = 5^{th}$ term.\n\n Step 3: Identify the 5th term in the list.\nThe 5th number in the ordered list (4, 6, 8, 9, **10**, 12, 14, 15, 16) is 10.\nTherefore, the median is 10."
  },
  {
    "id": "435",
    "question": "$\\frac{2}{7}-\\frac{1}{5}=$ (TSTET 31 May 2024)",
    "options": [
      "$\\frac{1}{7}$",
      "$\\frac{1}{35}$",
      "$\\frac{1}{2}$",
      "$\\frac{3}{35}$"
    ],
    "correctAnswer": 3,
    "explanation": " Step 1: Find the least common denominator (LCD) of the two fractions.\nThe denominators are 7 and 5. The LCD is their product, $7 \\times 5 = 35$.\n\n Step 2: Convert each fraction to an equivalent fraction with the denominator 35.\n$\\frac{2}{7} = \\frac{2 \\times 5}{7 \\times 5} = \\frac{10}{35}$\n$\\frac{1}{5} = \\frac{1 \\times 7}{5 \\times 7} = \\frac{7}{35}$\n\n Step 3: Perform the subtraction using the new fractions.\n$\\frac{10}{35} - \\frac{7}{35} = \\frac{10 - 7}{35} = \\frac{3}{35}$."
  },
  {
    "id": "436",
    "question": "Ashok is 8 years older than Raju. Raju is 48 months younger than Vijay. If Vijay's age is taken as 'x', then age of Ashok (in years) is: (TSTET 31 May 2024)",
    "options": [
      "$8-(x+4)$",
      "$8+(x-4)$",
      "$8+(x-48)$",
      "$(x+48)$"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: Express all ages in years.\nVijay's age = x years.\n\n Step 2: Express Raju's age in terms of x.\nRaju is 48 months younger than Vijay. First, convert 48 months to years:\n$48 \\text{ months} \\div 12 \\text{ months/year} = 4$ years.\nSo, Raju's age = (Vijay's age) - 4 years = $(x - 4)$ years.\n\n Step 3: Express Ashok's age in terms of x.\nAshok is 8 years older than Raju.\nAshok's age = (Raju's age) + 8 years.\nSubstitute the expression for Raju's age from  Step 2:\nAshok's age = $(x - 4) + 8$.\nThis expression can also be written as $8 + (x - 4)$."
  },
  {
    "id": "437",
    "question": "$24.01-4.1+1.98=$ (TSTET 31 May 2024)",
    "options": [
      "21.89",
      "22.98",
      "21.109",
      "25.99"
    ],
    "correctAnswer": 0,
    "explanation": "Following the order of operations (left to right for addition and subtraction):\n\n Step 1: Perform the subtraction $24.01 - 4.1$.\nTo subtract decimals, align the decimal points:\n  24.01\n-  4.10\n-------\n  19.91\n\n Step 2: Perform the addition $19.91 + 1.98$.\nAlign the decimal points:\n  19.91\n+  1.98\n-------\n  21.89"
  },
  {
    "id": "438",
    "question": "If the length of a train is 250 meters and it crosses a pole in 10 seconds, then the speed of the train $(in~km/hr)$ is: (TSTET 31 May 2024)",
    "options": [
      "60",
      "75",
      "90",
      "48"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: Calculate the speed in meters per second (m/s).\nWhen a train crosses a pole, the distance covered is equal to the length of the train.\nSpeed = $\\frac{\\text{Distance}}{\\text{Time}} = \\frac{250 \\text{ meters}}{10 \\text{ seconds}} = 25$ m/s.\n\n Step 2: Convert the speed from m/s to kilometers per hour (km/hr).\nThe conversion factor is $\\frac{18}{5}$.\nSpeed in km/hr = (Speed in m/s) $\\times \\frac{18}{5}$\nSpeed in km/hr = $25 \\times \\frac{18}{5} = 5 \\times 18 = 90$ km/hr."
  },
  {
    "id": "439",
    "question": "The number of edges in a tetrahedron are: (TSTET 31 May 2024)",
    "options": [
      "6",
      "8",
      "12",
      "4"
    ],
    "correctAnswer": 0,
    "explanation": "A tetrahedron is a polyhedron composed of four triangular faces, also known as a triangular pyramid.\n\n- **Vertices (Corners):** It has 4 vertices (3 at the base and 1 at the apex).\n- **Faces (Surfaces):** It has 4 triangular faces (1 base and 3 sides).\n- **Edges (Lines):** It has 3 edges forming the triangular base and 3 more edges connecting the base vertices to the apex. Total edges = $3 + 3 = 6$."
  },
  {
    "id": "440",
    "question": "The total number of factors of the number 196 is: (TSTET 31 May 2024)",
    "options": [
      "6",
      "12",
      "9",
      "16"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: Find the prime factorization of 196.\n$196 = 2 \\times 98$\n$98 = 2 \\times 49$\n$49 = 7 \\times 7$\nSo, the prime factorization of 196 is $2^2 \\times 7^2$.\n\n Step 2: Use the exponents to find the number of factors.\nIf a number's prime factorization is $p_1^{a_1} \\times p_2^{a_2} \\times ...$, the total number of factors is $(a_1 + 1) \\times (a_2 + 1) \\times ...$\nFor $196 = 2^2 \\times 7^2$, the exponents are 2 and 2.\nNumber of factors = $(2+1) \\times (2+1) = 3 \\times 3 = 9$."
  },
  {
    "id": "441",
    "question": "Which of the following statement is NOT correct regarding Perimeter and Areas? (TSTET 31 May 2024)",
    "options": [
      "The perimeter of a regular polygon is equal to the product of the number of its sides and the lengths of the sides.",
      "The amount of surface enclosed by a closed figure is called its perimeter.",
      "The area of a square is more than the area of any other rectangle having the same perimeter.",
      "Perimeter of a regular hexagon = 6 x length of any side"
    ],
    "correctAnswer": 1,
    "explanation": "Let's analyze each statement:\n1.  **Correct:** The perimeter of a regular polygon (where all sides are equal) with 'n' sides of length 's' is indeed $n \\times s$.\n2.  **Incorrect:** The amount of surface enclosed by a closed figure is its **area**. The **perimeter** is the total length of the boundary of the figure.\n3.  **Correct:** For a fixed perimeter, a square encloses the maximum possible area among all rectangles.\n4.  **Correct:** A regular hexagon has 6 equal sides. Its perimeter is 6 times the length of one side.\n\nThe question asks for the statement that is NOT correct, which is the second one."
  },
  {
    "id": "442",
    "question": "A rainfall of 0.448cm was recorded in 14 hours, the average amount of rain per hour (in cm) is: (TSTET 31 May 2024)",
    "options": [
      "0.032",
      "0.32",
      "0.0032",
      "3.20"
    ],
    "correctAnswer": 0,
    "explanation": "To find the average rainfall per hour, we divide the total rainfall by the total time.\n\n Step 1: Set up the division.\nAverage rain per hour = $\\frac{\\text{Total Rainfall}}{\\text{Total Hours}} = \\frac{0.448 \\text{ cm}}{14 \\text{ hours}}$\n\n Step 2: Perform the calculation.\n$0.448 \\div 14 = 0.032$\n\nSo, the average amount of rain per hour is 0.032 cm."
  },
  {
    "id": "443",
    "question": "On subtracting $5a^{2}-4ab+8b^{2}$ from $5a^{2}-8ab-4b^{2}$, we get: (TSTET 31 May 2024)",
    "options": [
      "$10a^{2}-12ab+4b^{2}$",
      "$5a^{2}-4ab-2b^{2}$",
      "$-4ab-12b^{2}$",
      "$5a^{2}-8ab+4b^{2}$"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: Set up the subtraction expression.\nThe expression is $(5a^{2}-8ab-4b^{2}) - (5a^{2}-4ab+8b^{2})$.\n\n Step 2: Distribute the negative sign to the second polynomial.\nThis changes the sign of each term inside the second parenthesis:\n$5a^{2}-8ab-4b^{2} - 5a^{2} + 4ab - 8b^{2}$\n\n Step 3: Group and combine like terms.\n- For $a^2$ terms: $5a^2 - 5a^2 = 0$\n- For $ab$ terms: $-8ab + 4ab = -4ab$\n- For $b^2$ terms: $-4b^2 - 8b^2 = -12b^2$\n\n Step 4: Combine the results.\nThe final simplified expression is $-4ab - 12b^2$."
  },
  {
    "id": "444",
    "question": "Pictorial representation of data using symbols is known as: (TSTET 31 May 2024)",
    "options": [
      "Bar graph",
      "Pictograph",
      "Histogram",
      "Pie chart"
    ],
    "correctAnswer": 1,
    "explanation": "- **Pictograph:** Uses pictures or symbols to represent data. This matches the description.\n- **Bar graph:** Uses rectangular bars to represent data values.\n- **Histogram:** A specific type of bar graph used for frequency distributions of continuous data.\n- **Pie chart:** A circular chart divided into slices to show proportions.\n\nThe correct term for a pictorial representation of data using symbols is a pictograph."
  },
  {
    "id": "445",
    "question": "Identify the aspect/s which reflect/s the intellectual attributes of the Nature of Mathematics among the following: A) Number Concept B) Rational thought C) Concept of Geometrical Shapes D) Problem solving skills (TSTET 31 May 2024)",
    "options": [
      "A only",
      "B only",
      "A & B only",
      "B & D only"
    ],
    "correctAnswer": 3,
    "explanation": "The question asks for 'intellectual attributes', which relate to thinking processes and higher-order skills rather than specific content.\n\n- A) Number Concept and C) Concept of Geometrical Shapes are foundational **content areas** of mathematics.\n- B) **Rational thought** (logical and deductive reasoning) is a core intellectual process central to mathematics.\n- D) **Problem-solving skills** are a key application of mathematical thinking and represent a high-level intellectual attribute.\n\nTherefore, rational thought (B) and problem-solving skills (D) best represent the intellectual attributes of mathematics."
  },
  {
    "id": "446",
    "question": "The statement that reflects the cultural value of Mathematics of the following is: (TSTET 31 May 2024)",
    "options": [
      "Use of mathematical concepts in daily life situations",
      "Use of inductive and deductive reasoning to prove the mathematical statements",
      "Exploring the history of the Mathematics",
      "Quest for truth and intellectual honesty"
    ],
    "correctAnswer": 2,
    "explanation": "The values of mathematics can be categorized:\n- **Utilitarian Value:** Using math in daily life (Option 1).\n- **Disciplinary Value:** Developing reasoning and logical thinking (Option 2).\n- **Moral Value:** Fostering honesty and the search for truth (Option 4).\n- **Cultural Value:** Understanding the role and development of mathematics across different civilizations and its contribution to human culture and heritage. **Exploring the history of mathematics** (Option 3) directly relates to its cultural value by examining how various cultures contributed to and were shaped by mathematical advancements."
  },
  {
    "id": "447",
    "question": "If a learner tries to solve the problem in a different method rather than the method taught in the classroom, then this act falls under the following Instructional objective: (TSTET 31 May 2024)",
    "options": [
      "Knowledge",
      "Application",
      "Understanding",
      "Skill"
    ],
    "correctAnswer": 1,
    "explanation": "Based on Bloom's Taxonomy of educational objectives:\n- **Knowledge:** Recalling facts (e.g., stating a formula).\n- **Understanding:** Explaining a concept in one's own words.\n- **Application:** Using learned knowledge in new or different situations. Solving a problem with a novel or alternative method is a prime example of application, as the student is not just repeating a procedure but applying underlying principles to a new approach.\n- **Skill:** Performing a task with precision and accuracy.\n\nDevising a new method demonstrates the ability to apply concepts, making 'Application' the most suitable objective."
  },
  {
    "id": "448",
    "question": "The formula of an area of the rectangle is derived by exploring its relationship between the area and its dimensions i.e. length and breadth by studying rectangles with different dimensions, then the method of teaching adopted is said to be: (TSTET 31 May 2024)",
    "options": [
      "Inductive",
      "Deductive",
      "Analytic",
      "Synthetic"
    ],
    "correctAnswer": 0,
    "explanation": "- **Inductive Method:** Moves from specific examples to a general rule. The scenario describes studying several specific rectangles to derive the general formula for area. This is the inductive method.\n- **Deductive Method:** Moves from a general rule to specific examples. For example, starting with the formula and then calculating the area of specific rectangles.\n- **Analytic Method:** Breaks a problem down into simpler parts to find a solution.\n- **Synthetic Method:** Combines known information to build a solution.\n\nThe described teaching approach is inductive."
  },
  {
    "id": "449",
    "question": "A student of class VI is asked to represent the value 10.5 through a number line to assess his/her knowledge on the concept of decimal fractions, then this question falls under the following academic standard: (TSTET 31 May 2024)",
    "options": [
      "Problem Solving",
      "Reasoning and Proof",
      "Representation",
      "Connection"
    ],
    "correctAnswer": 2,
    "explanation": "Academic standards in mathematics describe what students should know and be able to do.\n- **Problem Solving:** Applying strategies to solve non-routine problems.\n- **Reasoning and Proof:** Developing logical arguments and justifications.\n- **Representation:** Using various forms (like graphs, diagrams, symbols, or number lines) to organize, record, and communicate mathematical ideas. Asking a student to show 10.5 on a number line is a direct assessment of their ability to represent a numerical value in a graphical form.\n- **Connection:** Making links between different mathematical concepts or to real-world situations."
  },
  {
    "id": "450",
    "question": "As per the Herbartian  Steps of a lesson plan, if a teacher connects the concepts that are to be taught with the pre-concepts the learner has, then this  Step is known as: (TSTET 31 May 2024)",
    "options": [
      "Association",
      "Recapitulation",
      "Application",
      "Generalization"
    ],
    "correctAnswer": 0,
    "explanation": "The Herbartian five- Step method for lesson planning includes:\n1.  **Preparation:** Activating prior knowledge to prepare students for the new lesson.\n2.  **Presentation:** Introducing the new content.\n3.  **Association:** Explicitly connecting the new information with the students' existing knowledge (pre-concepts). This  Step involves comparison and finding relationships.\n4.  **Generalization:** Forming a general rule or principle from the learned material.\n5.  **Application:** Using the newly acquired knowledge to solve problems.\n\nThe act of connecting new concepts with pre-concepts is the **Association**  Step."
  },
  {
    "id": 451,
    "question": "A certain freezing process requires the room temperature to be lowered from $48^{\\circ}C$ at the rate of $6^{\\circ}C$ every hour. The room temperature after 9 hours of starting the process is: (TSTET 31 May 2024)",
    "options": [
      "$6^{\\circ}C$",
      "$0^{\\circ}C$",
      "$-6^{\\circ}C$",
      "$-12^{\\circ}C$"
    ],
    "correctAnswer": 2,
    "explanation": "This problem requires calculating the final temperature after a consistent decrease over a period of time.\n\n** Step 1: Calculate the total temperature decrease.**\nThe temperature decreases at a rate of $6^{\\circ}C$ per hour. Over 9 hours, the total decrease is:\nTotal Decrease = Rate of Decrease × Time\nTotal Decrease = $6^{\\circ}C/hour \\times 9 hours = 54^{\\circ}C$\n\n** Step 2: Calculate the final temperature.**\nSubtract the total decrease from the initial temperature to find the final temperature.\nFinal Temperature = Initial Temperature - Total Decrease\nFinal Temperature = $48^{\\circ}C - 54^{\\circ}C = -6^{\\circ}C$"
  },
  {
    "id": 452,
    "question": "Ravi's family consumed 2kg 100g sugar in first two weeks of June, 2023. The total weight (in kg) of the sugar required for Ravi's family for that month is: (TSTET 31 May 2024)",
    "options": [
      "4Kg 200g",
      "4Kg 500g",
      "4Kg 400g",
      "4Kg 300g"
    ],
    "correctAnswer": 1,
    "explanation": "This is a problem of proportions, assuming a constant rate of sugar consumption.\n\n** Step 1: Identify the time periods and consumption.**\n- The month is June, which has 30 days.\n- The given period is the first two weeks, which is $2 \\times 7 = 14$ days.\n- Consumption in 14 days = 2 kg 100 g = 2.1 kg.\n\n** Step 2: Calculate the daily rate of consumption.**\nDaily Consumption = Total Consumption / Number of Days\nDaily Consumption = $\\frac{2.1 \\text{ kg}}{14 \\text{ days}} = 0.15$ kg/day.\n\n** Step 3: Calculate the total consumption for the entire month (30 days).**\nTotal Monthly Consumption = Daily Consumption × Total Days in Month\nTotal Monthly Consumption = $0.15 \\text{ kg/day} \\times 30 \\text{ days} = 4.5$ kg.\n\n** Step 4: Convert the result to kg and g.**\n4.5 kg is equal to **4 kg and 500 g**."
  },
  {
    "id": 453,
    "question": "Which of the following number is NOT divisible by 6? (TSTET 31 May 2024)",
    "options": [
      "65058",
      "35946",
      "27702",
      "10804"
    ],
    "correctAnswer": 3,
    "explanation": "A number is divisible by 6 if it meets two conditions: it must be divisible by 2 and it must be divisible by 3.\n\n- **Divisibility by 2:** The number must be an even number (its last digit is 0, 2, 4, 6, or 8).\n- **Divisibility by 3:** The sum of its digits must be divisible by 3.\n\nLet's check each option:\n1.  **65058:** It's even (ends in 8). The sum of digits is $6+5+0+5+8=24$. Since 24 is divisible by 3, 65058 is divisible by 6.\n2.  **35946:** It's even (ends in 6). The sum of digits is $3+5+9+4+6=27$. Since 27 is divisible by 3, 35946 is divisible by 6.\n3.  **27702:** It's even (ends in 2). The sum of digits is $2+7+7+0+2=18$. Since 18 is divisible by 3, 27702 is divisible by 6.\n4.  **10804:** It's even (ends in 4), so it's divisible by 2. The sum of digits is $1+0+8+0+4=13$. Since 13 is **not** divisible by 3, 10804 is **not** divisible by 6."
  },
  {
    "id": 454,
    "question": "Length of a side of a regular polygon is 2.5cm. If it's perimeter is 22.5cm. Then, the number of sides of that polygon is: (TSTET 31 May 2024)",
    "options": [
      "9",
      "8",
      "11",
      "7"
    ],
    "correctAnswer": 0,
    "explanation": "The perimeter of a regular polygon is the sum of the lengths of all its equal sides.\n\n**Formula:** Perimeter = Number of sides × Length of one side.\n\n** Step 1: Rearrange the formula to solve for the number of sides.**\nNumber of sides = Perimeter / Length of one side\n\n** Step 2: Substitute the given values.**\nGiven: Perimeter = 22.5 cm and Length of one side = 2.5 cm.\nNumber of sides = $\\frac{22.5}{2.5}$\n\n** Step 3: Calculate the result.**\nNumber of sides = $\\frac{225}{25} = 9$\n\nThe polygon has 9 sides."
  },
  {
    "id": 455,
    "question": "The number of minutes in a day is: (TSTET 31 May 2024)",
    "options": [
      "86400",
      "1440",
      "3600",
      "720"
    ],
    "correctAnswer": 1,
    "explanation": "To find the total number of minutes in a day, we need to convert days to hours and then hours to minutes.\n\n** Step 1: Convert days to hours.**\nThere are 24 hours in 1 day.\n\n** Step 2: Convert hours to minutes.**\nThere are 60 minutes in 1 hour.\n\n** Step 3: Multiply the number of hours in a day by the number of minutes in an hour.**\nTotal minutes = 24 hours/day × 60 minutes/hour = 1440 minutes.\n\nTherefore, there are **1440** minutes in a day."
  },
  {
    "id": 456,
    "question": "Which of the following alphabet has more than one line of symmetry? (TSTET 31 May 2024)",
    "options": [
      "D",
      "W",
      "H",
      "A"
    ],
    "correctAnswer": 2,
    "explanation": "A line of symmetry is a line that divides a figure into two identical, mirror-image halves.\n\n-   **D:** Has one horizontal line of symmetry.\n-   **W:** Has one vertical line of symmetry.\n-   **H:** Has two lines of symmetry: one horizontal line and one vertical line.\n-   **A:** Has one vertical line of symmetry.\n\nTherefore, the letter **H** has more than one line of symmetry."
  },
  {
    "id": 457,
    "question": "HCF of least two-digit odd prime number and greatest four-digit number is: (TSTET 31 May 2024)",
    "options": [
      "9",
      "3",
      "99",
      "11"
    ],
    "correctAnswer": 3,
    "explanation": "This problem requires finding the Highest Common Factor (HCF) of two specific numbers.\n\n** Step 1: Identify the first number.**\nThe least (smallest) two-digit odd prime number. Prime numbers are only divisible by 1 and themselves. The two-digit numbers start at 10. The first two-digit prime is 11, which is also odd.\nSo, the first number is **11**.\n\n** Step 2: Identify the second number.**\nThe greatest (largest) four-digit number is **9999**.\n\n** Step 3: Find the HCF of 11 and 9999.**\nSince 11 is a prime number, its only factors are 1 and 11. The HCF of 11 and any other number can only be 1 or 11.\nWe need to check if 9999 is divisible by 11.\n$9999 \\div 11 = 909$.\nSince 9999 is divisible by 11, the highest common factor is **11**."
  },
  {
    "id": 458,
    "question": "A piece of wire is 18 cm. long is used to form an equilateral triangle. Then, the length (in cm) of each side of that equilateral triangle is: (TSTET 31 May 2024)",
    "options": [
      "8",
      "6",
      "4",
      "9"
    ],
    "correctAnswer": 1,
    "explanation": "An equilateral triangle has three sides of equal length. The total length of the wire will be the perimeter of the triangle.\n\n** Step 1: Understand the relationship between the wire and the triangle.**\nPerimeter of triangle = Length of wire = 18 cm.\n\n** Step 2: Use the formula for the perimeter of an equilateral triangle.**\nPerimeter = 3 × Length of one side\n\n** Step 3: Solve for the length of one side.**\nLength of one side = Perimeter / 3\nLength of one side = 18 cm / 3 = 6 cm."
  },
  {
    "id": 459,
    "question": "$\\sqrt{3^{-4}} \\times 3^{4} = $ (TSTET 31 May 2024)",
    "options": [
      "1",
      "3",
      "0",
      "9"
    ],
    "correctAnswer": 3,
    "explanation": "This problem involves simplifying an expression with exponents.\n\n** Step 1: Simplify the square root term.**\nThe square root of a number is the same as raising it to the power of $\\frac{1}{2}$.\n$\\sqrt{3^{-4}} = (3^{-4})^{\\frac{1}{2}}$\nUsing the power of a power rule $(a^m)^n = a^{mn}$:\n$(3^{-4})^{\\frac{1}{2}} = 3^{-4 \\times \\frac{1}{2}} = 3^{-2}$\n\n** Step 2: Combine the terms.**\nThe expression now is $3^{-2} \\times 3^{4}$.\nUsing the product of powers rule $a^m \\times a^n = a^{m+n}$:\n$3^{-2 + 4} = 3^{2}$\n\n** Step 3: Calculate the final value.**\n$3^2 = 9$."
  },
  {
    "id": 460,
    "question": "The present age of Sudha's mother is two and half times that of Sudha. After five years the sum of their ages will be 45 years. Thus, Sudha's present age (in years) is (TSTET 31 May 2024)",
    "options": [
      "5",
      "12.5",
      "10",
      "15"
    ],
    "correctAnswer": 2,
    "explanation": "This is an age-related word problem that can be solved using algebra.\n\n** Step 1: Define variables for the present ages.**\nLet Sudha's present age be S.\nHer mother's present age (M) is two and a half times S, so $M = 2.5S$.\n\n** Step 2: Express their ages after five years.**\nAfter 5 years, Sudha's age will be $S+5$.\nAfter 5 years, her mother's age will be $M+5$, which is $2.5S+5$.\n\n** Step 3: Set up an equation based on the sum of their future ages.**\nThe sum of their ages after five years is 45.\n$(S+5) + (2.5S+5) = 45$\n\n** Step 4: Solve the equation for S.**\nCombine like terms: $3.5S + 10 = 45$\nSubtract 10 from both sides: $3.5S = 35$\nDivide by 3.5: $S = \\frac{35}{3.5} = 10$.\n\nSudha's present age is **10 years**."
  },
  {
    "id": 461,
    "question": "100 million can be expressed in Indian system as: (TSTET 31 May 2024)",
    "options": [
      "1,00,00,000",
      "10,00,00,000",
      "10,00,000",
      "1,00,00,00,000"
    ],
    "correctAnswer": 1,
    "explanation": "This question requires converting from the International numbering system to the Indian numbering system.\n\n**International System:**\n- 1 million = 1,000,000\n- 100 million = 100 × 1,000,000 = 100,000,000\n\n**Indian System:**\n- 1 Lakh = 1,00,000\n- 1 Crore = 100 Lakhs = 1,00,00,000\n- 10 Crore = 10 × 1,00,00,000 = 10,00,00,000\n\nComparing the two systems, 100,000,000 (100 million) is equal to **10,00,00,000 (Ten Crore)**."
  },
  {
    "id": 462,
    "question": "A square and a parallelogram have the same area. If a side of the square is 30m and the height of the parallelogram is 45m, then the base (in m) of the parallelogram is: (TSTET 31 May 2024)",
    "options": [
      "15",
      "30",
      "20",
      "40"
    ],
    "correctAnswer": 2,
    "explanation": "The problem states that the areas of the two shapes are equal. We can use this fact to find the missing dimension.\n\n** Step 1: Calculate the area of the square.**\nArea of a square = side × side\nArea = $30 \\text{ m} \\times 30 \\text{ m} = 900 \\text{ m}^2$.\n\n** Step 2: Use the area to find the base of the parallelogram.**\nSince the areas are equal, the area of the parallelogram is also $900 \\text{ m}^2$.\nArea of a parallelogram = base × height\n\n** Step 3: Solve for the base.**\n$900 \\text{ m}^2$ = base × 45 m\nbase = $\\frac{900 \\text{ m}^2}{45 \\text{ m}} = 20$ m.\n\nThe base of the parallelogram is **20 m**."
  },
  {
    "id": 463,
    "question": "Rajesh has 12 litres of milk in his coffee shop. For making one cup of coffee, 75ml of milk is required. The number of cups of coffee can be made with the available milk by Rajesh is: (TSTET 31 May 2024)",
    "options": [
      "160",
      "140",
      "180",
      "120"
    ],
    "correctAnswer": 0,
    "explanation": "To solve this, we need to divide the total amount of milk by the amount of milk needed for one cup, ensuring both quantities are in the same unit.\n\n** Step 1: Convert total milk to milliliters (ml).**\n1 litre = 1000 ml\nTotal milk = 12 litres = $12 \\times 1000 = 12000$ ml.\n\n** Step 2: Calculate the number of cups.**\nNumber of cups = Total milk / Milk per cup\nNumber of cups = $\\frac{12000 \\text{ ml}}{75 \\text{ ml/cup}}$\n\n** Step 3: Perform the division.**\nNumber of cups = 160.\n\nRajesh can make **160** cups of coffee."
  },
  {
    "id": 464,
    "question": "The mean of first 5 two digit prime numbers is: (TSTET 31 May 2024)",
    "options": [
      "12.2",
      "16.6",
      "13.4",
      "14.8"
    ],
    "correctAnswer": 1,
    "explanation": "The mean (or average) is calculated by summing the values and dividing by the count of values.\n\n** Step 1: List the first 5 two-digit prime numbers.**\nA prime number is a number greater than 1 that has only two factors: 1 and itself. The two-digit numbers start at 10.\nThe first five two-digit primes are: **11, 13, 17, 19, 23**.\n\n** Step 2: Calculate the sum of these numbers.**\nSum = $11 + 13 + 17 + 19 + 23 = 83$.\n\n** Step 3: Calculate the mean.**\nMean = Sum of values / Count of values\nMean = $\\frac{83}{5} = 16.6$."
  },
  {
    "id": 465,
    "question": "The ratio of 120 minutes to 300 seconds is: (TSTET 31 May 2024)",
    "options": [
      "12:1",
      "24:5",
      "2:5",
      "24:1"
    ],
    "correctAnswer": 3,
    "explanation": "To find the ratio between two quantities, they must be expressed in the same unit.\n\n** Step 1: Convert minutes to seconds.**\nThere are 60 seconds in 1 minute.\n120 minutes = $120 \\times 60 = 7200$ seconds.\n\n** Step 2: Express the ratio.**\nThe ratio is 7200 seconds to 300 seconds, which is written as 7200 : 300.\n\n** Step 3: Simplify the ratio.**\nDivide both sides by their greatest common divisor. We can start by dividing by 100.\n$7200 : 300 \\rightarrow 72 : 3$\nNow, divide both sides by 3.\n$72 : 3 \\rightarrow 24 : 1$\n\n*"
  },
  {
    "id": 466,
    "question": "If an exterior angle of a triangle is 120° and one of the interior opposite angle is 70°, the other interior opposite angle is: (TSTET 31 May 2024)",
    "options": [
      "$60^{\\circ}$",
      "$50^{\\circ}$",
      "$55^{\\circ}$",
      "$70^{\\circ}$"
    ],
    "correctAnswer": 1,
    "explanation": "This problem uses the Exterior Angle Theorem of a triangle.\n\n**Exterior Angle Theorem:** The measure of an exterior angle of a triangle is equal to the sum of the measures of its two remote interior angles (the interior angles that are not adjacent to it).\n\n** Step 1: Set up the equation based on the theorem.**\nLet the other interior opposite angle be 'x'.\nExterior Angle = Sum of Interior Opposite Angles\n$120^{\\circ} = 70^{\\circ} + x$\n\n** Step 2: Solve for x.**\nSubtract $70^{\\circ}$ from both sides of the equation:\n$x = 120^{\\circ} - 70^{\\circ}$\n$x = 50^{\\circ}$\n\nThe other interior opposite angle is **50°**."
  },
  {
    "id": 467,
    "question": "$18.21 - 2.01 + 3.69 - 1.49 = $ (TSTET 31 May 2024)",
    "options": [
      "18.40",
      "18.49",
      "19.69",
      "19.20"
    ],
    "correctAnswer": 0,
    "explanation": "To solve this arithmetic problem, we can perform the operations in order from left to right, or group the positive and negative numbers.\n\n**Method 1: Order of Operations**\n1.  Start with the first subtraction: $18.21 - 2.01 = 16.20$\n2.  Next, perform the addition: $16.20 + 3.69 = 19.89$\n3.  Finally, perform the last subtraction: $19.89 - 1.49 = 18.40$\n\n**Method 2: Grouping**\n1.  Group the positive numbers and the negative numbers: $(18.21 + 3.69) - (2.01 + 1.49)$\n2.  Sum the positive numbers: $18.21 + 3.69 = 21.90$\n3.  Sum the negative numbers: $2.01 + 1.49 = 3.50$\n4.  Subtract the sums: $21.90 - 3.50 = 18.40$\n\nBoth methods give the result **18.40**."
  },
  {
    "id": 468,
    "question": "If a pipe can fill a tank of 40l capacity in 5 hours. Then, the time required (in hours) to fill the tank of 68l capacity with the same pipe is: (TSTET 31 May 2024)",
    "options": [
      "9",
      "$7\\frac{1}{2}$",
      "$8\\frac{1}{2}$",
      "$8\\frac{1}{4}$"
    ],
    "correctAnswer": 2,
    "explanation": "This is a rate problem. We first need to find the filling rate of the pipe.\n\n** Step 1: Calculate the filling rate of the pipe.**\nRate = Volume / Time\nRate = $\\frac{40 \\text{ litres}}{5 \\text{ hours}} = 8$ litres per hour.\n\n** Step 2: Calculate the time needed to fill the larger tank.**\nTime = Volume / Rate\nTime = $\\frac{68 \\text{ litres}}{8 \\text{ litres/hour}} = 8.5$ hours.\n\n** Step 3: Convert the decimal to a fraction.**\n8.5 hours is the same as **$8\\frac{1}{2}$** hours."
  },
  {
    "id": 469,
    "question": "The number of rectangular faces in a kaleidoscope is: (TSTET 31 May 2024)",
    "options": [
      "3",
      "2",
      "5",
      "4"
    ],
    "correctAnswer": 0,
    "explanation": "A traditional kaleidoscope's internal structure consists of mirrors arranged to create reflective patterns. These mirrors are typically rectangular in shape.\n\n-   The most common design for a kaleidoscope uses **three** long, rectangular mirrors.\n-   These three mirrors are placed together to form a triangular prism, with their reflective surfaces facing inward.\n-   It is the reflection between these three rectangular faces that creates the symmetrical patterns.\n\nTherefore, a kaleidoscope has **3** rectangular faces (the mirrors)."
  },
  {
    "id": 470,
    "question": "Degree of constant term in the trinomial $7x^{2}+9x+10$ is: (TSTET 31 May 2024)",
    "options": [
      "$x^{2}$",
      "1",
      "0",
      "3"
    ],
    "correctAnswer": 2,
    "explanation": "Let's analyze the components of the trinomial and the definition of 'degree'.\n\n-   **Trinomial:** $7x^{2}+9x+10$\n-   **Terms:** The terms are $7x^2$, $9x$, and $10$.\n-   **Constant Term:** The term without a variable is the constant term, which is **10**.\n-   **Degree of a Term:** The degree of a term is the exponent of its variable. A constant term like 10 can be thought of as $10x^0$, because any non-zero number raised to the power of 0 is 1 (i.e., $10 \\times 1 = 10$).\n\nTherefore, the exponent of the variable in the constant term is 0, which means the degree of the constant term is **0**."
  },
  {
    "id": 471,
    "question": "When $x=-2$ and $y=1$ the value of $x^{2}-2y+2$ is: (TSTET 31 May 2024)",
    "options": [
      "-4",
      "4",
      "-2",
      "2"
    ],
    "correctAnswer": 1,
    "explanation": "To find the value of the expression, we substitute the given values for the variables x and y.\n\n**Expression:** $x^{2}-2y+2$\n\n** Step 1: Substitute the values.**\nGiven $x = -2$ and $y = 1$.\n$(-2)^{2} - 2(1) + 2$\n\n** Step 2: Evaluate the exponent.**\n$(-2)^2 = (-2) \\times (-2) = 4$\n\n** Step 3: Perform the multiplication.**\n$2(1) = 2$\n\n** Step 4: Rewrite the expression and solve.**\n$4 - 2 + 2$\n$= 2 + 2$\n$= 4$\n\nThe value of the expression is **4**."
  },
  {
    "id": 472,
    "question": "Which of the following statements is NOT correct? (TSTET 31 May 2024)",
    "options": [
      "-7 is on the left side of -5 on the number line.",
      "zero is a positive integer.",
      "6 is on the right side of zero on the number line.",
      "1 is an integer which lies between -2 and 2."
    ],
    "correctAnswer": 1,
    "explanation": "Let's evaluate the truthfulness of each statement.\n\n1.  **-7 is on the left side of -5 on the number line.** On a number line, values decrease as you move to the left. Since -7 is less than -5, this statement is **correct**.\n2.  **zero is a positive integer.** Integers can be positive (1, 2, 3...), negative (-1, -2, -3...), or zero. Zero is considered neutral—it is neither positive nor negative. Therefore, this statement is **NOT correct**.\n3.  **6 is on the right side of zero on the number line.** Positive numbers are located to the right of zero on a standard number line. This statement is **correct**.\n4.  **1 is an integer which lies between -2 and 2.** The integers between -2 and 2 are -1, 0, and 1. This statement is **correct**.\n\nThe question asks for the statement that is NOT correct."
  },
  {
    "id": 473,
    "question": "$2\\frac{1}{5} + 3\\frac{3}{7} = $ (TSTET 31 May 2024)",
    "options": [
      "$5\\frac{12}{35}$",
      "$5\\frac{11}{35}$",
      "$5\\frac{4}{35}$",
      "$5\\frac{22}{35}$"
    ],
    "correctAnswer": 3,
    "explanation": "To add mixed numbers, we can add the whole number parts and the fractional parts separately.\n\n** Step 1: Add the whole numbers.**\n$2 + 3 = 5$\n\n** Step 2: Add the fractions.**\n$\\frac{1}{5} + \\frac{3}{7}$\nTo add these, we need a common denominator. The least common multiple of 5 and 7 is 35.\nConvert each fraction to an equivalent fraction with a denominator of 35:\n$\\frac{1}{5} = \\frac{1 \\times 7}{5 \\times 7} = \\frac{7}{35}$\n$\\frac{3}{7} = \\frac{3 \\times 5}{7 \\times 5} = \\frac{15}{35}$\nNow, add the new fractions:\n$\\frac{7}{35} + \\frac{15}{35} = \\frac{7+15}{35} = \\frac{22}{35}$\n\n** Step 3: Combine the whole number and the fraction.**\nThe final answer is $5 + \\frac{22}{35} = 5\\frac{22}{35}$."
  },
  {
    "id": 474,
    "question": "If each edge of a cube is tripled, the number of times its surface area increases by: (TSTET 31 May 2024)",
    "options": [
      "9",
      "4",
      "6",
      "8"
    ],
    "correctAnswer": 0,
    "explanation": "Let's compare the surface area of the original cube to the new cube.\n\n** Step 1: Define the original cube's properties.**\nLet the edge length of the original cube be 'a'.\nThe formula for the total surface area of a cube is $6a^2$.\nOriginal Surface Area = $6a^2$.\n\n** Step 2: Define the new cube's properties.**\nThe edge is tripled, so the new edge length is '3a'.\nNew Surface Area = $6 \\times (\\text{new edge})^2 = 6 \\times (3a)^2$.\n\n** Step 3: Calculate the new surface area.**\nNew Surface Area = $6 \\times (9a^2) = 54a^2$.\n\n** Step 4: Find the ratio of the new area to the old area.**\nIncrease Factor = $\\frac{\\text{New Surface Area}}{\\text{Original Surface Area}} = \\frac{54a^2}{6a^2} = 9$.\n\nThe surface area increases by **9 times**."
  },
  {
    "id": 475,
    "question": "Identify the aspect/s which do/es not help the students to get mastery over in solving the problems given in the textbook among the following:\nA) Understanding of concepts related to the problem and followed by practice of problems given in the exercise.\nB) Making students to practice only the solved example problems given in the textbook\nC) Solving every problem given in the form of exercises in the textbook by the teacher followed by his/her explanation\nD) Just routinely solving the problems by following the  Steps involved in it without understanding the mathematical concepts\n(TSTET 31 May 2024)",
    "options": [
      "A & B only",
      "A. B & C only",
      "B. C & D only",
      "C & D only"
    ],
    "correctAnswer": 2,
    "explanation": "The question asks to identify practices that are ineffective for achieving mastery in mathematical problem-solving.\n\n-   **A) Understanding concepts and practicing:** This is the ideal method for learning and achieving mastery. It helps students build a strong foundation. So, this **helps**.\n-   **B) Practicing only solved examples:** This encourages rote learning and does not develop independent problem-solving skills needed for unseen problems. This **does not help**.\n-   **C) Teacher solving every problem:** This makes students passive observers rather than active learners. They do not get the necessary practice to build confidence and skills. This **does not help**.\n-   **D) Routinely solving without understanding:** This is mechanical application of formulas without conceptual clarity, which fails when problems are presented differently. This **does not help**.\n\nThe aspects that do not help students achieve mastery are B, C, and D."
  },
  {
    "id": 476,
    "question": "The best method to evaluate the answer scripts with objectivity is: (TSTET 31 May 2024)",
    "options": [
      "Assessing answer scripts based on principles of evaluation.",
      "Giving complete freedom to the evaluator to evaluate the answer scripts in his/her own way.",
      "Re-evaluating the answer scripts by the same evaluator.",
      "Doing student wise and question wise analysis of marks."
    ],
    "correctAnswer": 0,
    "explanation": "Objectivity in evaluation means scoring is fair, consistent, and free from the personal bias of the person marking.\n\n1.  **Assessing based on principles of evaluation:** This implies using a standardized scoring rubric or a detailed answer key. It ensures that every script is judged by the same criteria, which is the cornerstone of objectivity. This is the best method.\n2.  **Giving complete freedom to the evaluator:** This is the definition of subjective evaluation. It allows personal biases and inconsistent standards to influence the scores.\n3.  **Re-evaluating by the same evaluator:** This may not remove the original bias. Independent evaluation by a second person would be better, but still not as good as a principled approach from the start.\n4.  **Student and question wise analysis:** This is an analysis of the results *after* the evaluation has been completed. It is not a method of evaluation itself."
  },
  {
    "id": 477,
    "question": "If a learner evinces more interest in knowing more about mathematics by involving himself/herself in various mathematical cocurricular activities, then we can say that the learner: (TSTET 31 May 2024)",
    "options": [
      "Is more conformed to the syllabus and classroom teaching.",
      "Has a positive attitude towards mathematics.",
      "Has good computational skills",
      "Has good intellectual skills"
    ],
    "correctAnswer": 1,
    "explanation": "The learner's behavior of voluntarily participating in activities beyond the required curriculum is a strong indicator of their disposition towards the subject.\n\n-   This behavior directly reflects a genuine interest and enjoyment of mathematics, which is best described as a **positive attitude**.\n-   The learner is going beyond the syllabus, so option 1 is incorrect.\n-   While the learner might have good computational or intellectual skills (options 3 and 4), these are abilities, not attitudes. Their actions of seeking out extra activities are a direct manifestation of their positive feelings and mindset towards the subject."
  },
  {
    "id": 478,
    "question": "The feature that DOES NOT apply to the mathematics curriculum built on the spiral approach in the following is: (TSTET 31 May 2024)",
    "options": [
      "The content is fragmented into smaller units and will be introduced as per the learner's age, maturity level and abilities.",
      "Scope is given for revisiting topics that were learned in the preceding class.",
      "The difficulty level and complexity level of content will increase as one moves from one class to the next higher class.",
      "A specific topic is introduced in one particular class and finishes in the same class."
    ],
    "correctAnswer": 3,
    "explanation": "The spiral approach is a curriculum design strategy with specific characteristics.\n\n-   **Features of a Spiral Curriculum:**\n    -   Topics are revisited repeatedly throughout the curriculum (Option 2).\n    -   Each time a topic is revisited, its complexity and depth increase (Option 3).\n    -   Content is introduced in smaller, age-appropriate units (Option 1).\n\n-   **What DOES NOT apply:**\n    -   Option 4 describes a 'topic' or 'mastery' approach, where a subject is taught in its entirety in one block and is not revisited later. This is the direct opposite of the spiral approach.\n\nTherefore, the statement that a topic is introduced and finished in the same class does not apply to a spiral curriculum."
  },
  {
    "id": 479,
    "question": "The most appropriate method of teaching to make learners how to approach word problems for solving which involves complexity is: (TSTET 31 May 2024)",
    "options": [
      "Inductive",
      "Analytic",
      "Laboratory",
      "Deductive"
    ],
    "correctAnswer": 1,
    "explanation": "Let's consider the best method for tackling complex problems.\n\n-   **Analytic Method:** This method proceeds from the unknown to the known. It starts by assuming the solution is true and works backward  Step-by- Step to connect it to the given data. This process of breaking down a complex problem into simpler parts is highly effective for teaching problem-solving strategies, as it helps students understand the logical pathway to a solution.\n-   **Inductive Method:** Moves from specific examples to a general rule. Useful for discovering formulas, but less so for solving a complex problem itself.\n-   **Deductive Method:** Moves from a general rule to a specific case. Useful for applying a known formula, but doesn't teach the process of 'how' to approach a complex, unfamiliar problem.\n-   **Laboratory Method:** Involves hands-on learning, which may not be suitable for all types of word problems.\n\nFor teaching the *approach* to complex word problems, the **Analytic** method is most appropriate."
  },
  {
    "id": 480,
    "question": "Identify the preliminary work that the teacher has to do before embarking on teaching new topics in mathematics among the following:\nA) A thought on the learning outcomes to be attained by the learners during the transaction of a lesson.\nB) Listing of pre-concepts required for the learner to introduce the required topic.\nC) Mapping of relevant Teaching learning resources.\nD) Fair idea on teaching strategies, approaches and methods to be deployed for teaching the topic.\nE) Thought on general goals of Education.\n(TSTET 31 May 2024)",
    "options": [
      "A, B C & D only",
      "A, C, D & E only",
      "B. C, D & E only",
      "A, B D & E only"
    ],
    "correctAnswer": 0,
    "explanation": "This question asks about the essential components of lesson planning before teaching a new topic.\n\n-   **A) Learning Outcomes:** Defining what students should be able to do after the lesson is a crucial first  Step.\n-   **B) Pre-concepts:** Identifying the prior knowledge students need is essential to build upon their existing understanding.\n-   **C) Teaching Resources:** Planning which materials (like models, charts, technology) will be used is a key part of preparation.\n-   **D) Teaching Strategies:** Deciding on the instructional methods (e.g., lecture, group work, discovery) is fundamental to the plan.\n-   **E) General goals of Education:** These are very broad, long-term aims of the entire educational system. While a teacher's philosophy is guided by them, they are not a specific preliminary task for planning a single lesson on a new topic. The other four points are direct, immediate planning  Steps.\n\nTherefore, the most relevant preliminary tasks are A, B, C, and D."
  },
  {
    "id": "481",
    "question": "Ramana started watching cricket match at 9.30am in the morning. He watched TV for 220 minutes. He stopped watching TV at (TSTET 01 June 2024)",
    "options": [
      "1.50pm",
      "12.10pm",
      "1.10pm",
      "12.50pm"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: Convert the total watching time from minutes to hours and minutes.\nThere are 60 minutes in an hour.\n220 minutes = (3 × 60 minutes) + 40 minutes = 3 hours and 40 minutes.\n\n Step 2: Add this duration to the start time.\nStart time = 9:30 am.\n\n Step 3: Add the hours first.\n9:30 am + 3 hours = 12:30 pm.\n\n Step 4: Add the remaining minutes.\n12:30 pm + 40 minutes = 1:10 pm.\n\nTherefore, Ramana stopped watching TV at **1:10 pm**."
  },
  {
    "id": "482",
    "question": "The number of three digit numbers having the same digit in the units and hundreds place is: (TSTET 01 June 2024)",
    "options": [
      "9",
      "90",
      "180",
      "60"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: A three-digit number has three places: Hundreds, Tens, and Units.\n\n Step 2: The digit in the hundreds place cannot be 0. So, there are 9 possible choices for the hundreds place (1, 2, 3, 4, 5, 6, 7, 8, 9).\n\n Step 3: According to the condition, the digit in the units place must be the same as the digit in the hundreds place. So, once the hundreds digit is chosen, the units digit is fixed. There is only 1 choice for the units place for each choice of the hundreds place.\n\n Step 4: The digit in the tens place can be any digit from 0 to 9. So, there are 10 possible choices for the tens place.\n\n Step 5: To find the total number of such numbers, we multiply the number of choices for each place.\nTotal numbers = (Choices for Hundreds) × (Choices for Tens) × (Choices for Units)\nTotal numbers = 9 × 10 × 1 = **90**."
  },
  {
    "id": "483",
    "question": "Difference of the greatest and smallest five digit numbers formed by digits 3, 0, 5, 2, 8 is (TSTET 01 June 2024)",
    "options": [
      "64962",
      "65038",
      "65972",
      "64038"
    ],
    "correctAnswer": 0,
    "explanation": " Step 1: Identify the given digits: 0, 2, 3, 5, 8.\n\n Step 2: Form the greatest five-digit number by arranging the digits in descending order.\nGreatest number = 85320.\n\n Step 3: Form the smallest five-digit number by arranging the digits in ascending order. Since a five-digit number cannot start with 0, place the next smallest digit (2) first, followed by 0, and then the rest of the digits in ascending order.\nSmallest number = 20358.\n\n Step 4: Calculate the difference between the greatest and smallest numbers.\nDifference = 85320 - 20358 = **64962**."
  },
  {
    "id": "484",
    "question": "Ravi's age is 9 years. His father's age is thrice his age. The ratio of Ravi's age to his father's age after 3 years is (TSTET 01 June 2024)",
    "options": [
      "3:1",
      "1:3",
      "1:2",
      "1:2.5"
    ],
    "correctAnswer": 3,
    "explanation": " Step 1: Calculate the current ages.\nRavi's current age = 9 years.\nFather's current age = 3 × Ravi's age = 3 × 9 = 27 years.\n\n Step 2: Calculate their ages after 3 years.\nRavi's age after 3 years = 9 + 3 = 12 years.\nFather's age after 3 years = 27 + 3 = 30 years.\n\n Step 3: Find the ratio of Ravi's age to his father's age after 3 years.\nRatio = Ravi's future age : Father's future age = 12 : 30.\n\n Step 4: Simplify the ratio by dividing both numbers by their greatest common divisor, which is 6.\n12 ÷ 6 = 2\n30 ÷ 6 = 5\nThe simplified ratio is 2:5.\n\n Step 5: Convert the ratio to the format 1:x by dividing the second term by the first term.\nx = 5 ÷ 2 = 2.5\nThe ratio is **1:2.5**."
  },
  {
    "id": "485",
    "question": "Satish wants to plant trees to cover his square field completely, then the number of plants required are (TSTET 01 June 2024)",
    "options": [
      "360",
      "289",
      "198",
      "464"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: The problem implies that the trees will be planted in a square grid to cover the square field.\n\n Step 2: For the trees to form a square grid (e.g., n rows and n columns), the total number of trees must be a perfect square ($n \\times n = n^2$).\n\n Step 3: Check the given options to see which one is a perfect square.\n- 360 is not a perfect square.\n- 289 is a perfect square because $17 \\times 17 = 289$.\n- 198 is not a perfect square.\n- 464 is not a perfect square.\n\n Step 4: The only option that is a perfect square is **289**. This would correspond to a 17x17 arrangement of plants."
  },
  {
    "id": "486",
    "question": "Leap year among the following is (TSTET 01 June 2024)",
    "options": [
      "2022",
      "2042",
      "2012",
      "2002"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: A leap year is a year that is evenly divisible by 4. For century years, they must be divisible by 400. None of the options are century years.\n\n Step 2: To check if a number is divisible by 4, we only need to check if the number formed by its last two digits is divisible by 4.\n\n Step 3: Check each option:\n- 2022: The last two digits are 22. 22 is not divisible by 4. Not a leap year.\n- 2042: The last two digits are 42. 42 is not divisible by 4. Not a leap year.\n- 2012: The last two digits are 12. 12 is divisible by 4 (12 ÷ 4 = 3). **This is a leap year**.\n- 2002: The last two digits are 02. 2 is not divisible by 4. Not a leap year."
  },
  {
    "id": "487",
    "question": "The next number in the series 4, 8, 24, 96, ...... is (TSTET 01 June 2024)",
    "options": [
      "144",
      "288",
      "192",
      "480"
    ],
    "correctAnswer": 3,
    "explanation": " Step 1: Analyze the relationship between consecutive terms in the series.\nSeries: 4, 8, 24, 96, ...\n\n Step 2: Find the pattern.\n- From 4 to 8: $8 \\div 4 = 2$. So, $4 \\times 2 = 8$.\n- From 8 to 24: $24 \\div 8 = 3$. So, $8 \\times 3 = 24$.\n- From 24 to 96: $96 \\div 24 = 4$. So, $24 \\times 4 = 96$.\n\n Step 3: The pattern is that each term is multiplied by a sequentially increasing integer (×2, ×3, ×4, ...).\n\n Step 4: To find the next term, multiply the last term (96) by the next integer in the sequence, which is 5.\nNext term = $96 \\times 5 = 480$.\n\nTherefore, the next number in the series is **480**."
  },
  {
    "id": "488",
    "question": "The difference between place value of 3 in numbers 43.26 and 4.03 is (TSTET 01 June 2024)",
    "options": [
      "2.97",
      "3.23",
      "297",
      "323"
    ],
    "correctAnswer": 0,
    "explanation": " Step 1: Determine the place value of 3 in the first number, 43.26.\nThe digit 3 is in the units place, so its value is $3 \\times 1 = 3$.\n\n Step 2: Determine the place value of 3 in the second number, 4.03.\nThe digit 3 is in the hundredths place, so its value is $3 \\times 0.01 = 0.03$.\n\n Step 3: Calculate the difference between the two place values.\nDifference = (Place value in 43.26) - (Place value in 4.03)\nDifference = $3 - 0.03 = 2.97$.\n\nTherefore, the difference is **2.97**."
  },
  {
    "id": "489",
    "question": "The HCF of 8, 56 and 60 is (TSTET 01 June 2024)",
    "options": [
      "8",
      "4",
      "6",
      "7"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: HCF stands for Highest Common Factor, which is the largest number that divides all the given numbers without a remainder.\n\n Step 2: Find the prime factorization of each number.\n- $8 = 2 \\times 2 \\times 2 = 2^3$\n- $56 = 8 \\times 7 = 2 \\times 2 \\times 2 \\times 7 = 2^3 \\times 7$\n- $60 = 6 \\times 10 = 2 \\times 3 \\times 2 \\times 5 = 2^2 \\times 3 \\times 5$\n\n Step 3: To find the HCF, identify the common prime factors and take the lowest power of each.\nThe only common prime factor is 2. The lowest power of 2 among the factorizations is $2^2$.\n\n Step 4: Calculate the HCF.\nHCF = $2^2 = 4$.\n\nTherefore, the HCF of 8, 56, and 60 is **4**."
  },
  {
    "id": "490",
    "question": "Which of the following numbers will not divide 312792 exactly? (TSTET 01 June 2024)",
    "options": [
      "6",
      "3",
      "9",
      "2"
    ],
    "correctAnswer": 2,
    "explanation": "We will use divisibility rules to check each option for the number 312792.\n\n Step 1: **Divisibility by 2**\nA number is divisible by 2 if its last digit is even. The last digit of 312792 is 2, which is even. So, 312792 is divisible by 2.\n\n Step 2: **Divisibility by 3**\nA number is divisible by 3 if the sum of its digits is divisible by 3. Sum of digits = $3 + 1 + 2 + 7 + 9 + 2 = 24$. Since 24 is divisible by 3 ($24 \\div 3 = 8$), the number 312792 is divisible by 3.\n\n Step 3: **Divisibility by 6**\nA number is divisible by 6 if it is divisible by both 2 and 3. Since 312792 is divisible by both, it is also divisible by 6.\n\n Step 4: **Divisibility by 9**\nA number is divisible by 9 if the sum of its digits is divisible by 9. The sum of the digits is 24. Since 24 is not divisible by 9, the number 312792 is **not divisible by 9**.\n\nTherefore, 9 is the number that will not divide 312792 exactly."
  },
  {
    "id": "491",
    "question": "Anil's school is 670 meters from his house. One day he left home and walked 215 meters. Then he realized that he had forgotten his science notebook. He went back to home, collected the notebook and went back to school. The distance travelled (in meters) by Anil on that day for going to school altogether is (TSTET 01 June 2024)",
    "options": [
      "885",
      "430",
      "1315",
      "1100"
    ],
    "correctAnswer": 3,
    "explanation": "Let's break down Anil's journey into three parts:\n\n Step 1: Anil walks from home towards school.\nDistance = 215 meters.\n\n Step 2: Anil walks back home from that point to get his notebook.\nDistance = 215 meters.\n\n Step 3: Anil walks from home all the way to school.\nDistance = 670 meters.\n\n Step 4: Calculate the total distance travelled.\nTotal Distance = (Part 1) + (Part 2) + (Part 3)\nTotal Distance = 215 m + 215 m + 670 m\nTotal Distance = 430 m + 670 m = **1100 meters**."
  },
  {
    "id": "492",
    "question": "It is a four-digit number. The digit in thousands place is largest single digit. The digit in the ones place is smallest natural number. Sum of even prime and smallest odd prime is in the hundreds place and even prime number is in tens place. The number is (TSTET 01 June 2024)",
    "options": [
      "9320",
      "8530",
      "9521",
      "9251"
    ],
    "correctAnswer": 2,
    "explanation": "Let's determine the digit for each place value based on the given clues.\n\n- **Thousands place**: The largest single digit is 9.\n- **Units place**: The smallest natural number is 1. (Natural numbers are {1, 2, 3, ...}).\n- **Tens place**: The only even prime number is 2.\n- **Hundreds place**: This is the sum of the even prime (2) and the smallest odd prime. The prime numbers start with {2, 3, 5, ...}. The smallest odd prime is 3. So, the hundreds digit is $2 + 3 = 5$.\n\nAssembling the number from the digits:\n- Thousands: 9\n- Hundreds: 5\n- Tens: 2\n- Units: 1\n\nThe number is **9521**."
  },
  {
    "id": "493",
    "question": "10000kg expressed in quintal as: (TSTET 01 June 2024)",
    "options": [
      "100",
      "10",
      "1000",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": " Step 1: Know the conversion factor between kilograms (kg) and quintals.\n1 quintal = 100 kg.\n\n Step 2: To convert kilograms to quintals, divide the mass in kilograms by 100.\nNumber of quintals = $\\frac{10000 \\text{ kg}}{100 \\text{ kg/quintal}}$\n\n Step 3: Perform the division.\nNumber of quintals = **100**."
  },
  {
    "id": "494",
    "question": "100 liters of milk is packed into 250 ml packets. The number of packets made is: (TSTET 01 June 2024)",
    "options": [
      "4",
      "400",
      "40",
      "25"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: Convert the total volume of milk into the same unit as the packets (milliliters, ml).\nThe conversion factor is 1 liter = 1000 ml.\nTotal volume = $100 \\text{ liters} \\times 1000 \\text{ ml/liter} = 100,000 \\text{ ml}$.\n\n Step 2: Divide the total volume of milk by the volume of a single packet to find the number of packets.\nVolume of one packet = 250 ml.\nNumber of packets = $\\frac{\\text{Total volume}}{\\text{Volume per packet}} = \\frac{100,000 \\text{ ml}}{250 \\text{ ml}}$\n\n Step 3: Perform the division.\nNumber of packets = **400**."
  },
  {
    "id": "495",
    "question": "The number of factors of 18 are: (TSTET 01 June 2024)",
    "options": [
      "4",
      "2",
      "8",
      "6"
    ],
    "correctAnswer": 3,
    "explanation": " Step 1: A factor is a number that divides another number evenly, with no remainder.\n\n Step 2: List all the numbers that divide 18.\nIt's helpful to find them in pairs:\n- $1 \\times 18 = 18$ (Factors are 1, 18)\n- $2 \\times 9 = 18$ (Factors are 2, 9)\n- $3 \\times 6 = 18$ (Factors are 3, 6)\n\n Step 3: Combine the list of factors in ascending order.\nThe factors of 18 are {1, 2, 3, 6, 9, 18}.\n\n Step 4: Count the total number of factors.\nThere are **6** factors."
  },
  {
    "id": "496",
    "question": "The product of two fractions is 6. If one of them is $5\\frac{2}{3}$ the other fraction is (TSTET 01 June 2024)",
    "options": [
      "$1\\frac{9}{10}$",
      "$2\\frac{5}{18}$",
      "$1\\frac{1}{17}$",
      "$2\\frac{3}{17}$"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: Let the unknown fraction be 'x'. The problem states that $x \\times 5\\frac{2}{3} = 6$.\n\n Step 2: Convert the mixed fraction $5\\frac{2}{3}$ into an improper fraction.\n$5\\frac{2}{3} = \\frac{(5 \\times 3) + 2}{3} = \\frac{15 + 2}{3} = \\frac{17}{3}$.\n\n Step 3: Rewrite the equation with the improper fraction.\n$x \\times \\frac{17}{3} = 6$.\n\n Step 4: To solve for x, divide 6 by $\\frac{17}{3}$.\n$x = 6 \\div \\frac{17}{3}$.\n\n Step 5: To divide by a fraction, multiply by its reciprocal.\n$x = 6 \\times \\frac{3}{17} = \\frac{18}{17}$.\n\n Step 6: Convert the improper fraction $\\frac{18}{17}$ back to a mixed number.\n$18 \\div 17 = 1$ with a remainder of 1.\nSo, $x = \\mathbf{1\\frac{1}{17}}$."
  },
  {
    "id": "497",
    "question": "An angle more than $0^{\\circ}$ and less than $90^{\\circ}$ is called as (TSTET 01 June 2024)",
    "options": [
      "Obtuse angle",
      "Acute angle",
      "Right angle",
      "Reflex angle"
    ],
    "correctAnswer": 1,
    "explanation": "The definitions for types of angles are as follows:\n- **Acute angle**: An angle that measures greater than $0^{\\circ}$ and less than $90^{\\circ}$.\n- **Right angle**: An angle that measures exactly $90^{\\circ}$.\n- **Obtuse angle**: An angle that measures greater than $90^{\\circ}$ and less than $180^{\\circ}$.\n- **Reflex angle**: An angle that measures greater than $180^{\\circ}$ and less than $360^{\\circ}$.\n\nThe question describes an **acute angle**."
  },
  {
    "id": "498",
    "question": "$\\sqrt{324}=$ (TSTET 01 June 2024)",
    "options": [
      "18",
      "12",
      "16",
      "14"
    ],
    "correctAnswer": 0,
    "explanation": " Step 1: The symbol $\\sqrt{}$ asks for the square root of a number. We need to find a number that, when multiplied by itself, equals 324.\n\n Step 2: We can test the given options.\n- $12 \\times 12 = 144$\n- $14 \\times 14 = 196$\n- $16 \\times 16 = 256$\n- $18 \\times 18 = 324$\n\n Step 3: The calculation shows that $18^2 = 324$. Therefore, the square root of 324 is **18**."
  },
  {
    "id": "499",
    "question": "5% of 60 is (TSTET 01 June 2024)",
    "options": [
      "12",
      "30",
      "3",
      "6"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: 'Percent' means 'out of one hundred'. So, 5% can be written as the fraction $\\frac{5}{100}$.\n\n Step 2: The word 'of' in mathematics indicates multiplication.\n\n Step 3: The expression '5% of 60' can be calculated as:\n$\\frac{5}{100} \\times 60$\n\n Step 4: Perform the calculation.\n$\\frac{5 \\times 60}{100} = \\frac{300}{100} = 3$.\n\nAlternatively, convert 5% to a decimal (0.05) and multiply:\n$0.05 \\times 60 = 3$.\n\nSo, 5% of 60 is **3**."
  },
  {
    "id": "500",
    "question": "The angles of a triangle are in the ratio 3:4:5. The largest angle of this triangle is (TSTET 01 June 2024)",
    "options": [
      "$60^{\\circ}$",
      "$45^{\\circ}$",
      "$90^{\\circ}$",
      "$75^{\\circ}$"
    ],
    "correctAnswer": 3,
    "explanation": " Step 1: The sum of the interior angles of any triangle is always $180^{\\circ}$.\n\n Step 2: The angles are in the ratio 3:4:5. Let the angles be represented as $3x$, $4x$, and $5x$.\n\n Step 3: Set up an equation where the sum of these angles equals $180^{\\circ}$.\n$3x + 4x + 5x = 180^{\\circ}$\n\n Step 4: Solve the equation for x.\n$12x = 180^{\\circ}$\n$x = \\frac{180}{12} = 15^{\\circ}$\n\n Step 5: Calculate the measure of each angle.\n- Angle 1: $3x = 3 \\times 15 = 45^{\\circ}$\n- Angle 2: $4x = 4 \\times 15 = 60^{\\circ}$\n- Angle 3 (Largest): $5x = 5 \\times 15 = 75^{\\circ}$\n\nThe largest angle of the triangle is **75°**."
  },
  {
    "id": "501",
    "question": "A speed 20 m/sec is expressed in km/hr as: (TSTET 01 June 2024)",
    "options": [
      "72",
      "48",
      "54",
      "60"
    ],
    "correctAnswer": 0,
    "explanation": " Step 1: To convert speed from meters per second (m/s) to kilometers per hour (km/hr), we use a conversion factor.\n\n Step 2: Derive the conversion factor:\n- 1 kilometer = 1000 meters\n- 1 hour = 3600 seconds\n- Therefore, 1 m/s = $\\frac{1/1000 \\text{ km}}{1/3600 \\text{ hr}} = \\frac{3600}{1000} \\text{ km/hr} = \\frac{18}{5} \\text{ km/hr}$.\n\n Step 3: Multiply the speed in m/s by this conversion factor.\nSpeed in km/hr = $20 \\text{ m/s} \\times \\frac{18}{5}$\n\n Step 4: Perform the calculation.\nSpeed = $(20 \\div 5) \\times 18 = 4 \\times 18 = 72$.\n\nSo, 20 m/sec is equal to **72 km/hr**."
  },
  {
    "id": "502",
    "question": "The value of p, if $0.5p=0.065$ is (TSTET 01 June 2024)",
    "options": [
      "13",
      "0.013",
      "0.13",
      "1.3"
    ],
    "correctAnswer": 2,
    "explanation": " Step 1: We are given the equation $0.5p = 0.065$.\n\n Step 2: To isolate 'p', we need to divide both sides of the equation by 0.5.\n$p = \\frac{0.065}{0.5}$\n\n Step 3: To simplify the division, we can multiply both the numerator and the denominator by 10 to make the divisor a whole number.\n$p = \\frac{0.065 \\times 10}{0.5 \\times 10} = \\frac{0.65}{5}$\n\n Step 4: Perform the division.\n$p = 0.13$\n\nTherefore, the value of p is **0.13**."
  },
  {
    "id": "503",
    "question": "The total surface area of a cube is 54 sq.cm. Then, the measure of its each edge (in cm) is: (TSTET 01 June 2024)",
    "options": [
      "2.2",
      "3",
      "4",
      "2.4"
    ],
    "correctAnswer": 1,
    "explanation": " Step 1: A cube has 6 identical square faces.\n\n Step 2: The formula for the total surface area (TSA) of a cube is $TSA = 6a^2$, where 'a' is the length of one edge.\n\n Step 3: We are given that TSA = 54 sq.cm. Substitute this value into the formula.\n$54 = 6a^2$\n\n Step 4: Solve for $a^2$ by dividing both sides by 6.\n$a^2 = \\frac{54}{6}$\n$a^2 = 9$\n\n Step 5: Solve for 'a' by taking the square root of both sides.\n$a = \\sqrt{9}$\n$a = 3$\n\nTherefore, the measure of each edge is **3 cm**."
  },
  {
    "id": "504",
    "question": "The arithmetic mean for first five composite numbers is: (TSTET 01 June 2024)",
    "options": [
      "7.2",
      "7.4",
      "6.5",
      "6.2"
    ],
    "correctAnswer": 0,
    "explanation": " Step 1: Identify the first five composite numbers. A composite number is a natural number greater than 1 that has more than two factors (it is not a prime number).\n- The first composite number is 4.\n- The second is 6.\n- The third is 8.\n- The fourth is 9.\n- The fifth is 10.\nThe set of numbers is {4, 6, 8, 9, 10}.\n\n Step 2: Calculate the sum of these numbers.\nSum = $4 + 6 + 8 + 9 + 10 = 37$.\n\n Step 3: The arithmetic mean is the sum of the numbers divided by the count of the numbers.\nMean = $\\frac{\\text{Sum}}{\\text{Count}} = \\frac{37}{5} = 7.4$.\n\n"
  },
  {
    "id": "505",
    "question": "A student applied the knowledge of ratio and proportion in understanding the concepts of time & work and time & distance, then the academic standard attained by the student is: (TSTET 01 June 2024)",
    "options": [
      "Problem solving",
      "Reasoning and proof",
      "Communication",
      "Connections"
    ],
    "correctAnswer": 3,
    "explanation": "The academic standards in mathematics education are designed to assess different facets of mathematical thinking. In this scenario:\n\n- The student is using a concept from one area of mathematics (Ratio and Proportion).\n- They are applying this concept to solve problems in different contexts (Time & Work, Time & Distance).\n\nThis act of linking different mathematical ideas and applying them across various contexts is the core of the academic standard known as **Connections**. It shows the student's ability to see mathematics as an integrated whole rather than a collection of separate topics."
  },
  {
    "id": "506",
    "question": "Arrange the following  Steps of the project method in a sequential order. A) Planning the project B) Creating situation C) Reporting the project D) Explaining the objectives E) Executing the project (TSTET 01 June 2024)",
    "options": [
      "A, D, B, C, E",
      "B, D, A, E, C",
      "B, A, E, C, D",
      "A, E, D, B, C"
    ],
    "correctAnswer": 1,
    "explanation": "The project method in teaching follows a logical sequence of  Steps to ensure effective learning. The correct order is:\n\n1.  **B) Creating situation**: The teacher introduces a real-life problem or situation to engage students and provide a purpose for the project.\n2.  **D) Explaining the objectives**: The goals and expected outcomes of the project are clearly defined and chosen by the students with the teacher's guidance.\n3.  **A) Planning the project**: Students devise a detailed plan to carry out the project, outlining the methods, resources, and timeline.\n4.  **E) Executing the project**: Students actively work on the project, collecting data, experimenting, and constructing something based on their plan.\n5.  **C) Reporting the project**: Students present their work, findings, and experiences. This  Step also involves evaluation and reflection on the entire process.\n\nTherefore, the correct sequence is **B, D, A, E, C**."
  },
  {
    "id": "507",
    "question": "Match the following concepts to be taught with most suitable teaching learning material: A. Percentages, B. Types of triangles, C. Number of edges of basic shapes, D. Decimal numbers. TLM: i. Solid geometrical shapes, ii. Grid paper, iii. Abacus, iv. Geoboard. (TSTET 01 June 2024)",
    "options": [
      "A-iii, B-i, C-iv, D-ii",
      "A-ii, B-iv, C-i, D-iii",
      "A-iii, B-iv, C-ii, D-i",
      "A-iv, B-iii, C-i, D-ii"
    ],
    "correctAnswer": 1,
    "explanation": "The most suitable Teaching Learning Material (TLM) for each concept is:\n\n- **A. Percentages**: **ii. Grid paper** (specifically a 10x10 grid with 100 squares) is an excellent visual tool for representing percentages as parts of a whole.\n- **B. Types of triangles**: **iv. Geoboard** allows students to easily construct and manipulate various types of triangles (isosceles, scalene, right-angled, etc.) using rubber bands.\n- **C. Number of edges of basic shapes**: **i. Solid geometrical shapes** (like cubes, prisms, pyramids) are physical objects that students can hold to count their edges, faces, and vertices directly.\n- **D. Decimal numbers**: **iii. Abacus** is a tool used for representing place value. It can be adapted to show tenths and hundredths, which is fundamental to understanding decimals.\n\nThus, the correct matching is **A-ii, B-iv, C-i, D-iii**."
  },
  {
    "id": "508",
    "question": "Identify the advantages of the unit plan among the following: A) The unit can be completed within the allotted time. B) All the topics in the unit can be taught sequentially. C) We can know which unit is to be taught in which month. D) The teaching and learning materials required for the unit can be provided. (TSTET 01 June 2024)",
    "options": [
      "C & D only",
      "A, B & C only",
      "A, B & D only",
      "A, B, C & D"
    ],
    "correctAnswer": 2,
    "explanation": "Let's analyze the statements in the context of a **unit plan**.\n\n- **A) The unit can be completed within the allotted time.** True. A unit plan helps in time management by allocating periods for each topic within the unit.\n- **B) All the topics in the unit can be taught sequentially.** True. A key purpose of a unit plan is to organize the content into a logical, sequential flow.\n- **C) We can know which unit is to be taught in which month.** False. This is the function of a **yearly plan** or an academic calendar, which provides a broader overview of the entire syllabus, not the detailed plan for a single unit.\n- **D) The teaching and learning materials required for the unit can be provided.** True. A unit plan specifies the necessary resources and TLM for each lesson, enabling better preparation.\n\nTherefore, the advantages of a unit plan are **A, B, and D only**."
  },
  {
    "id": "509",
    "question": "Read the following statements related to evaluation in mathematics. Statement-I: Assessment for learning and assessment of learning are involved in continuous comprehensive evaluation. Statement-II: Continuous comprehensive evaluation involves formative assessment and summative assessment. (TSTET 01 June 2024)",
    "options": [
      "Statement-I is false and Statement-II is true.",
      "Statement-I is true and Statement-II is false.",
      "Both the statements are false.",
      "Both the statements are true."
    ],
    "correctAnswer": 3,
    "explanation": "- **Statement-I Analysis**: Continuous Comprehensive Evaluation (CCE) is a holistic approach to evaluation. 'Assessment for learning' refers to ongoing, diagnostic assessments used to improve teaching (like formative assessment). 'Assessment of learning' refers to evaluations that measure what has been learned at the end of a period (like summative assessment). CCE includes both. Thus, **Statement-I is true**.\n\n- **Statement-II Analysis**: CCE is structurally composed of two main types of assessment: Formative Assessment (FA), which is conducted throughout the learning process, and Summative Assessment (SA), which is conducted at the end of a term or unit. Thus, **Statement-II is true**.\n\nSince both statements accurately describe key components of Continuous Comprehensive Evaluation, the correct answer is that **both statements are true**."
  },
  {
    "id": "510",
    "question": "If a topic is divided into several parts and spread in different classes as per the difficulty level of the content, then the approach adopted in mathematics curriculum is: (TSTET 01 June 2024)",
    "options": [
      "Topical approach",
      "Concentric approach",
      "Inter disciplinary approach",
      "Teacher centred approach"
    ],
    "correctAnswer": 1,
    "explanation": "The curriculum design described is the **Concentric approach**, also known as the spiral curriculum.\n\n- **Concentric Approach**: In this model, basic concepts of a topic are taught in an earlier grade. The same topic is then revisited in subsequent grades, each time with increasing depth and complexity. This allows students to build upon their prior knowledge in a structured way. This perfectly matches the question's description.\n- **Topical Approach**: A topic is taught in its entirety in one block before moving to the next.\n- **Interdisciplinary Approach**: Integrates concepts and methods from different subjects.\n- **Teacher-centred Approach**: A teaching methodology, not a curriculum design principle."
  }
]



export const mathematicsPaper1Questions = rawMathematicsPaper1Data.map((q, index) => ({
  id: `Q${index + 1}`,
  question: q.question,
  options: q.options,
  correctAnswer: q.correctAnswer,
  explanation: q.explanation,
}));


export const convertMathematicsPaper1ToQuestionFormat = (questions: typeof mathematicsPaper1Questions) => {
  return questions.map((q, index) => ({
    id: index + 1,
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
  }));
};

