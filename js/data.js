const BRANCHES = {
  CD: {
    code: "CD",
    name: "Computer Science & Engineering (Data Science)",
    shortName: "CSE (Data Science)",
    icon: "DS",
    description: "From foundational sciences to advanced AI, Big Data, and real-world project work.",
    yearLabels: [
      "Foundations: Mathematics, Physics, Programming Basics",
      "Core CS & DS: Data Structures, OOP, DBMS, OS",
      "Advanced DS: Big Data, ML, Networks, Data Visualization",
      "Specialization, Electives, Internship & Major Project"
    ]
  },
  CC: {
    code: "CC",
    name: "Computer Science & Engineering (Cyber Security)",
    shortName: "CSE (Cyber Security)",
    icon: "CS",
    description: "From foundational sciences to Applied Cryptography, Forensics, and Security Operations.",
    yearLabels: [
      "Foundations: Mathematics, Physics, Programming Basics",
      "Core CS & Security: Data Structures, Networks, DBMS, OS",
      "Advanced Security: Cryptography, Forensics, ML, Ethical Hacking",
      "Specialization, Electives, Internship & Major Project"
    ]
  },
  CS: {
    code: "CS",
    name: "Computer Science and Engineering",
    shortName: "CSE",
    icon: "CS",
    description: "Core Computer Science covering Algorithms, Systems, Networks, ML, and Cyber Security.",
    yearLabels: [
      "Foundations: Mathematics, Physics, Programming Basics",
      "Core CS: Data Structures, Theory, DBMS, OS",
      "Advanced CS: Networks, Algorithms, ML, Compiler Design",
      "Specialization, Electives, Internship & Major Project"
    ]
  }
};

const CURRICULUM = {
  CD: {
    "Semester 1": {
      credits: "25-26",
      courses: [
        {code:"GAMAT101",name:"Mathematics for Information Science-1",type:"BSC",credits:3},
        {code:"GAPHT121",name:"Physics / Chemistry for Info Science",type:"BSC",credits:4},
        {code:"GMEST103",name:"Engineering Graphics & Computer Aided Drawing",type:"ESC",credits:3},
        {code:"GXEST104",name:"Intro to Electrical & Electronics Engineering",type:"ESC",credits:4},
        {code:"UCEST105",name:"Algorithmic Thinking with Python",type:"ESC",credits:4},
        {code:"GYESL106",name:"Basic EEE Workshop",type:"ESC",credits:1},
        {code:"UCHWT127",name:"Health & Wellness / Life Skills",type:"HMC",credits:1},
        {code:"UCSEM129",name:"Digital 101 (NASSCOM MOOC)",type:"SEC",credits:1},
      ]
    },
    "Semester 2": {
      credits: "27-28",
      courses: [
        {code:"GAMAT201",name:"Mathematics for Information Science-2",type:"BSC",credits:3},
        {code:"GXEST203",name:"Foundations of Computing: Hardware to Web Design",type:"ESC",credits:3},
        {code:"GYEST204",name:"Programming in C",type:"ESC",credits:4},
        {code:"PCCST205",name:"Discrete Mathematics",type:"PC",credits:4},
        {code:"UCEST206",name:"Engineering Entrepreneurship & IPR",type:"ESC",credits:3},
        {code:"GXESL208",name:"IT Workshop",type:"ESC",credits:1},
        {code:"UCHUT128",name:"Life Skills & Professional Communication",type:"HMC",credits:1},
      ]
    },
    "Semester 3": {
      credits: "27-31",
      courses: [
        {code:"GAMAT301",name:"Mathematics for Information Science-3",type:"BSC",credits:3},
        {code:"PCCST302",name:"Theory of Computation",type:"PC",credits:4},
        {code:"PCCST303",name:"Data Structures & Algorithms",type:"PC",credits:4},
        {code:"PBCST304",name:"Object Oriented Programming [PBL]",type:"PBL",credits:4},
        {code:"GAEST305",name:"Digital Electronics & Logic Design",type:"ESC",credits:4},
        {code:"UCHUT346",name:"Economics for Engineers / Engineering Ethics",type:"HMC",credits:2},
        {code:"PCCSL307",name:"Data Structures Lab",type:"PCL",credits:2},
        {code:"PCCDL308",name:"Python & Statistical Modeling Lab",type:"PCL",credits:2},
      ]
    },
    "Semester 4": {
      credits: "26-30",
      courses: [
        {code:"GAMAT401",name:"Mathematics for Information Science-4",type:"BSC",credits:3},
        {code:"PCCST402",name:"Database Management Systems",type:"PC",credits:4},
        {code:"PCCST403",name:"Operating Systems",type:"PC",credits:4},
        {code:"PBCST404",name:"Computer Organization & Architecture [PBL]",type:"PBL",credits:4},
        {code:"PECDT41N",name:"Programme Elective-1",type:"PE",credits:3},
        {code:"UCHUT346",name:"Engineering Ethics / Economics for Engineers",type:"HMC",credits:2},
        {code:"PCCSL407",name:"Operating Systems Lab",type:"PCL",credits:2},
        {code:"PCCSL408",name:"DBMS Lab",type:"PCL",credits:2},
      ]
    },
    "Semester 5": {
      credits: "23-27",
      courses: [
        {code:"PCCST501",name:"Computer Networks",type:"PC",credits:4},
        {code:"PCCST502",name:"Design & Analysis of Algorithms",type:"PC",credits:4},
        {code:"PCCDT503",name:"Data Analytics",type:"PC",credits:3},
        {code:"PBCDT504",name:"Big Data Processing [PBL]",type:"PBL",credits:4},
        {code:"PECDT52N",name:"Programme Elective-2",type:"PE",credits:3},
        {code:"UCHUM506",name:"Constitution of India (MOOC)",type:"HMC",credits:1},
        {code:"PCCSL507",name:"Computer Networks Lab",type:"PCL",credits:2},
        {code:"PCCDL508",name:"Data Analytics Lab",type:"PCL",credits:2},
      ]
    },
    "Semester 6": {
      credits: "23-28",
      courses: [
        {code:"PCCST601",name:"Compiler Design",type:"PC",credits:4},
        {code:"PCCDT602",name:"Machine Learning",type:"PC",credits:3},
        {code:"PECDT63N",name:"Programme Elective-3",type:"PE",credits:3},
        {code:"PBCDT604",name:"Data Visualization & Programming with R [PBL]",type:"PBL",credits:4},
        {code:"GAEST605",name:"Design Thinking & Product Development",type:"ESC",credits:2},
        {code:"OECDT61N",name:"Open Elective / Industry Linked Elective-1",type:"OE",credits:3},
        {code:"PCCDL607",name:"Big Data Processing Lab",type:"PCL",credits:2},
        {code:"PCCDP608",name:"Mini Project: Socially Relevant Project",type:"PWS",credits:2},
      ]
    },
    "Semester 7": {
      credits: "17-20",
      courses: [
        {code:"PECDT74N",name:"Programme Elective-4",type:"PE",credits:3},
        {code:"PECDT75N",name:"Programme Elective-5",type:"PE",credits:3},
        {code:"OECDT72N",name:"Open Elective / Industry Linked Elective-2",type:"OE",credits:3},
        {code:"UEHUT704",name:"HMC Elective (Project Management / Foreign Language)",type:"HMC",credits:2},
        {code:"PCCDS705",name:"Seminar",type:"PWS",credits:2},
        {code:"PCCDP706",name:"Major Project / Full-Semester Internship",type:"PWS",credits:4},
      ]
    },
    "Semester 8": {
      credits: "11",
      courses: [
        {code:"PECDT86N",name:"Programme Elective-6",type:"PE",credits:3},
        {code:"OECDT83N",name:"Open Elective / Industry Linked Elective-3",type:"OE",credits:3},
        {code:"UEHUT803",name:"Organizational Behavior & Business Communication",type:"HMC",credits:1},
        {code:"PCCDP806",name:"Major Project / Internship / Research Project",type:"PWS",credits:4},
      ]
    }
  },
  CC: {
    "Semester 1": {
      credits: "25-26",
      courses: [
        {code:"GAMAT101",name:"Mathematics for Information Science-1",type:"BSC",credits:3},
        {code:"GAPHT121",name:"Physics / Chemistry for Info Science",type:"BSC",credits:4},
        {code:"GMEST103",name:"Engineering Graphics & Computer Aided Drawing",type:"ESC",credits:3},
        {code:"GXEST104",name:"Intro to Electrical & Electronics Engineering",type:"ESC",credits:4},
        {code:"UCEST105",name:"Algorithmic Thinking with Python",type:"ESC",credits:4},
        {code:"GXESL106",name:"Basic EEE Workshop",type:"ESC",credits:1},
        {code:"UCHWT127",name:"Health & Wellness / Life Skills",type:"HMC",credits:1},
        {code:"UCSEM129",name:"Digital 101 (NASSCOM MOOC)",type:"SEC",credits:1},
      ]
    },
    "Semester 2": {
      credits: "27-28",
      courses: [
        {code:"GAMAT201",name:"Mathematics for Information Science-2",type:"BSC",credits:3},
        {code:"GXEST203",name:"Foundations of Computing: Hardware to Web Design",type:"ESC",credits:3},
        {code:"GXEST204",name:"Programming in C",type:"ESC",credits:4},
        {code:"PCCST205",name:"Discrete Mathematics",type:"PC",credits:4},
        {code:"UCEST206",name:"Engineering Entrepreneurship & IPR",type:"ESC",credits:3},
        {code:"GXESL208",name:"IT Workshop",type:"ESC",credits:1},
        {code:"UCHUT128",name:"Life Skills & Professional Communication",type:"HMC",credits:1},
      ]
    },
    "Semester 3": {
      credits: "27-31",
      courses: [
        {code:"GAMAT301",name:"Mathematics for Information Science-3",type:"BSC",credits:3},
        {code:"PCCST302",name:"Theory of Computation",type:"PC",credits:4},
        {code:"PCCST303",name:"Data Structures & Algorithms",type:"PC",credits:4},
        {code:"PBCCT304",name:"Basic Concepts in Computer Networks [PBL]",type:"PBL",credits:4},
        {code:"GAEST305",name:"Digital Electronics & Logic Design",type:"ESC",credits:4},
        {code:"UCHUT346",name:"Economics for Engineers / Engineering Ethics",type:"HMC",credits:2},
        {code:"PCCSL307",name:"Data Structures Lab",type:"PCL",credits:2},
        {code:"PCCCL308",name:"Shell Scripting & Network Admin using Linux",type:"PCL",credits:2},
      ]
    },
    "Semester 4": {
      credits: "26-30",
      courses: [
        {code:"GAMAT401",name:"Mathematics for Information Science-4",type:"BSC",credits:3},
        {code:"PCCST402",name:"Database Management Systems",type:"PC",credits:4},
        {code:"PCCST403",name:"Operating Systems",type:"PC",credits:4},
        {code:"PBCST404",name:"Computer Organization & Architecture [PBL]",type:"PBL",credits:4},
        {code:"PECCT41N",name:"Programme Elective-1",type:"PE",credits:3},
        {code:"UCHUT346",name:"Engineering Ethics / Economics for Engineers",type:"HMC",credits:2},
        {code:"PCCSL407",name:"Operating Systems Lab",type:"PCL",credits:2},
        {code:"PCCSL408",name:"DBMS Lab",type:"PCL",credits:2},
      ]
    },
    "Semester 5": {
      credits: "23-27",
      courses: [
        {code:"PCCCT501",name:"Applied Cryptography",type:"PC",credits:4},
        {code:"PCCCT502",name:"Network and System Security",type:"PC",credits:4},
        {code:"PCCST503",name:"Machine Learning",type:"PC",credits:3},
        {code:"PBCST504",name:"Microcontrollers [PBL]",type:"PBL",credits:4},
        {code:"PECCT52N",name:"Programme Elective-2",type:"PE",credits:3},
        {code:"UCHUM506",name:"Constitution of India (MOOC)",type:"HMC",credits:1},
        {code:"PCCCL507",name:"Cryptography Lab",type:"PCL",credits:2},
        {code:"PCCCL508",name:"Network & System Security Lab",type:"PCL",credits:2},
      ]
    },
    "Semester 6": {
      credits: "23-28",
      courses: [
        {code:"PCCST601",name:"Compiler Design",type:"PC",credits:4},
        {code:"PCCCT602",name:"Cyber Forensics",type:"PC",credits:3},
        {code:"PECCT63N",name:"Programme Elective-3",type:"PE",credits:3},
        {code:"PBCCT604",name:"Ethical Hacking and IoT Security [PBL]",type:"PBL",credits:4},
        {code:"GAEST605",name:"Design Thinking & Product Development",type:"ESC",credits:2},
        {code:"OECST61N",name:"Open Elective / Industry Linked Elective-1",type:"OE",credits:3},
        {code:"PCCCL607",name:"Cyber Forensic Lab",type:"PCL",credits:2},
        {code:"PCCSP608",name:"Mini Project: Socially Relevant Project",type:"PWS",credits:2},
      ]
    },
    "Semester 7": {
      credits: "17-20",
      courses: [
        {code:"PECCT74N",name:"Programme Elective-4",type:"PE",credits:3},
        {code:"PECCT75N",name:"Programme Elective-5",type:"PE",credits:3},
        {code:"OECST72N",name:"Open Elective / Industry Linked Elective-2",type:"OE",credits:3},
        {code:"UEHUT704",name:"HMC Elective (Project Management / Foreign Language)",type:"HMC",credits:2},
        {code:"PCCCS705",name:"Seminar",type:"PWS",credits:2},
        {code:"PCCSP706",name:"Major Project / Full-Semester Internship",type:"PWS",credits:4},
      ]
    },
    "Semester 8": {
      credits: "11",
      courses: [
        {code:"PECCT86N",name:"Programme Elective-6",type:"PE",credits:3},
        {code:"OECST83N",name:"Open Elective / Industry Linked Elective-3",type:"OE",credits:3},
        {code:"UEHUT803",name:"Organizational Behavior & Business Communication",type:"HMC",credits:1},
        {code:"PCCSP806",name:"Major Project / Internship / Research Project",type:"PWS",credits:4},
      ]
    }
  },
  CS: {
    "Semester 1": {
      credits: "25-26",
      courses: [
        {code:"GAMAT101",name:"Mathematics for Information Science-1",type:"BSC",credits:3},
        {code:"GAPHT121",name:"Physics / Chemistry for Info Science",type:"BSC",credits:4},
        {code:"GMEST103",name:"Engineering Graphics & Computer Aided Drawing",type:"ESC",credits:3},
        {code:"GXEST104",name:"Intro to Electrical & Electronics Engineering",type:"ESC",credits:4},
        {code:"UCEST105",name:"Algorithmic Thinking with Python",type:"ESC",credits:4},
        {code:"GXESL106",name:"Basic EEE Workshop",type:"ESC",credits:1},
        {code:"UCHWT127",name:"Health & Wellness / Life Skills",type:"HMC",credits:1},
        {code:"UCSEM129",name:"Digital 101 (NASSCOM MOOC)",type:"SEC",credits:1},
      ]
    },
    "Semester 2": {
      credits: "27-28",
      courses: [
        {code:"GAMAT201",name:"Mathematics for Information Science-2",type:"BSC",credits:3},
        {code:"GXEST203",name:"Foundations of Computing: Hardware to Web Design",type:"ESC",credits:3},
        {code:"GXEST204",name:"Programming in C",type:"ESC",credits:4},
        {code:"PCCST205",name:"Discrete Mathematics",type:"PC",credits:4},
        {code:"UCEST206",name:"Engineering Entrepreneurship & IPR",type:"ESC",credits:3},
        {code:"GXESL208",name:"IT Workshop",type:"ESC",credits:1},
        {code:"UCHUT128",name:"Life Skills & Professional Communication",type:"HMC",credits:1},
      ]
    },
    "Semester 3": {
      credits: "27-31",
      courses: [
        {code:"GAMAT301",name:"Mathematics for Information Science-3",type:"BSC",credits:3},
        {code:"PCCST302",name:"Theory of Computation",type:"PC",credits:4},
        {code:"PCCST303",name:"Data Structures & Algorithms",type:"PC",credits:4},
        {code:"PBCST304",name:"Object Oriented Programming [PBL]",type:"PBL",credits:4},
        {code:"GAEST305",name:"Digital Electronics & Logic Design",type:"ESC",credits:4},
        {code:"UCHUT346",name:"Economics for Engineers / Engineering Ethics",type:"HMC",credits:2},
        {code:"PCCSL307",name:"Data Structures Lab",type:"PCL",credits:2},
        {code:"PCCSL308",name:"Digital Lab",type:"PCL",credits:2},
      ]
    },
    "Semester 4": {
      credits: "26-30",
      courses: [
        {code:"GAMAT401",name:"Mathematics for Information Science-4",type:"BSC",credits:3},
        {code:"PCCST402",name:"Database Management Systems",type:"PC",credits:4},
        {code:"PCCST403",name:"Operating Systems",type:"PC",credits:4},
        {code:"PBCST404",name:"Computer Organization & Architecture [PBL]",type:"PBL",credits:4},
        {code:"PECST41N",name:"Programme Elective-1",type:"PE",credits:3},
        {code:"UCHUT346",name:"Engineering Ethics / Economics for Engineers",type:"HMC",credits:2},
        {code:"PCCSL407",name:"Operating Systems Lab",type:"PCL",credits:2},
        {code:"PCCSL408",name:"DBMS Lab",type:"PCL",credits:2},
      ]
    },
    "Semester 5": {
      credits: "23-27",
      courses: [
        {code:"PCCST501",name:"Computer Networks",type:"PC",credits:4},
        {code:"PCCST502",name:"Design & Analysis of Algorithms",type:"PC",credits:4},
        {code:"PCCST503",name:"Machine Learning",type:"PC",credits:3},
        {code:"PBCST504",name:"Microcontrollers [PBL]",type:"PBL",credits:4},
        {code:"PECST52N",name:"Programme Elective-2",type:"PE",credits:3},
        {code:"UCHUM506",name:"Constitution of India (MOOC)",type:"HMC",credits:1},
        {code:"PCCSL507",name:"Networks Lab",type:"PCL",credits:2},
        {code:"PCCSL508",name:"Machine Learning Lab",type:"PCL",credits:2},
      ]
    },
    "Semester 6": {
      credits: "23-28",
      courses: [
        {code:"PCCST601",name:"Compiler Design",type:"PC",credits:4},
        {code:"PCCST602",name:"Advanced Computing Systems",type:"PC",credits:3},
        {code:"PECST63N",name:"Programme Elective-3",type:"PE",credits:3},
        {code:"PBCST604",name:"Fundamentals of Cyber Security [PBL]",type:"PBL",credits:4},
        {code:"GAEST605",name:"Design Thinking & Product Development",type:"ESC",credits:2},
        {code:"OECST61N",name:"Open Elective / Industry Linked Elective-1",type:"OE",credits:3},
        {code:"PCCSL607",name:"Systems Lab",type:"PCL",credits:2},
        {code:"PCCSP608",name:"Mini Project: Socially Relevant Project",type:"PWS",credits:2},
      ]
    },
    "Semester 7": {
      credits: "17-20",
      courses: [
        {code:"PECST74N",name:"Programme Elective-4",type:"PE",credits:3},
        {code:"PECST75N",name:"Programme Elective-5",type:"PE",credits:3},
        {code:"OECST72N",name:"Open Elective / Industry Linked Elective-2",type:"OE",credits:3},
        {code:"UEHUT704",name:"HMC Elective (Project Management / Foreign Language)",type:"HMC",credits:2},
        {code:"PCCSS705",name:"Seminar",type:"PWS",credits:2},
        {code:"PCCSP706",name:"Major Project / Full-Semester Internship",type:"PWS",credits:4},
      ]
    },
    "Semester 8": {
      credits: "11",
      courses: [
        {code:"PECST86N",name:"Programme Elective-6",type:"PE",credits:3},
        {code:"OECST83N",name:"Open Elective / Industry Linked Elective-3",type:"OE",credits:3},
        {code:"UEHUT803",name:"Organizational Behavior & Business Communication",type:"HMC",credits:1},
        {code:"PCCSP806",name:"Major Project / Internship / Research Project",type:"PWS",credits:4},
      ]
    }
  }
};

const ELECTIVES = {
  CD: {
    "PE-1 (S4)": {courses:[
      {code:"PECST411",name:"Software Engineering"},{code:"PECDT412",name:"Foundations of Security in Computing"},
      {code:"PECST413",name:"Functional Programming"},{code:"PECST416",name:"Signals and Systems"},
      {code:"PECST417",name:"Soft Computing"},{code:"PEADT418",name:"Microcontrollers"},
      {code:"PEADT415",name:"Foundations of Pattern Recognition"},{code:"PECST495",name:"Advanced Data Structures"},
    ]},
    "PE-2 (S5)": {courses:[
      {code:"PECST521",name:"Software Project Management"},{code:"PECST522",name:"Artificial Intelligence"},
      {code:"PECDT523",name:"Data Privacy and Security"},{code:"PECST524",name:"Data Compression"},
      {code:"PEADT526",name:"Computational Biology"},{code:"PECST527",name:"Computer Graphics & Multimedia"},
      {code:"PECST528",name:"Advanced Computer Architectures"},{code:"PECST525",name:"Data Mining"},
      {code:"PECST595",name:"Advanced Graph Algorithms"},
    ]},
    "PE-3 (S6)": {courses:[
      {code:"PECST631",name:"Software Testing"},{code:"PECDT632",name:"Data Warehousing"},
      {code:"PECDT633",name:"Basics of Robotics & Automation"},{code:"PECDT634",name:"Cloud Computing"},
      {code:"PECST636",name:"Digital Image Processing"},{code:"PECST639",name:"Randomized Algorithms"},
      {code:"PECDT635",name:"Web Mining"},{code:"PECDT695",name:"Deep Learning"},
    ]},
    "PE-4 (S7)": {courses:[
      {code:"PECDT741",name:"Recommendation Systems"},{code:"PECDT742",name:"Financial Data Science"},
      {code:"PECDT743",name:"Foundations of Computer Vision"},{code:"PECST742",name:"Web Programming"},
      {code:"PECST743",name:"Bioinformatics"},{code:"PECST747",name:"Blockchain & Cryptocurrencies"},
      {code:"PECDT745",name:"Information Retrieval"},{code:"PECDT795",name:"Advanced Database Systems"},
    ]},
    "PE-5 (S7)": {courses:[
      {code:"PECDT751",name:"Graph Databases and Analysis"},{code:"PECDT752",name:"Introduction to IoT"},
      {code:"PECDT753",name:"Mobile Applications"},{code:"PECST752",name:"Responsible AI"},
      {code:"PECST754",name:"Digital Forensics"},{code:"PECST757",name:"High Performance Computing"},
      {code:"PECST759",name:"Parallel Algorithms"},{code:"PECDT755",name:"Reinforcement Learning"},
    ]},
    "PE-6 (S8)": {courses:[
      {code:"PECDT861",name:"Time Series Modeling & Analysis"},{code:"PECDT862",name:"Healthcare Data Analytics"},
      {code:"PECDT863",name:"Social Network Analysis"},{code:"PECST862",name:"Natural Language Processing"},
      {code:"PECST866",name:"Speech & Audio Processing"},{code:"PECST867",name:"Storage Systems"},
      {code:"PECST868",name:"Prompt Engineering"},{code:"PECST865",name:"Next Generation Interaction Design"},
    ]},
    "OE-1 (S6)": {courses:[
      {code:"OECST611",name:"Data Structures"},{code:"OECST612",name:"Data Communication"},
      {code:"OECST613",name:"Foundations of Cryptography"},{code:"OECST614",name:"Machine Learning for Engineers"},
      {code:"OECST615",name:"Object Oriented Programming"},
    ]},
    "OE-2 (S7)": {courses:[
      {code:"OECST721",name:"Cyber Security"},{code:"OECST722",name:"Cloud Computing"},
      {code:"OECST723",name:"Software Engineering"},{code:"OECST724",name:"Computer Networks"},
      {code:"OECST725",name:"Mobile Application Development"},
    ]},
    "OE-3 (S8)": {courses:[
      {code:"OECST831",name:"Introduction to Algorithms"},{code:"OECST832",name:"Web Programming"},
      {code:"OECST833",name:"Software Testing"},{code:"OECST834",name:"Internet of Things"},
      {code:"OECST835",name:"Computer Graphics"},
    ]},
  },
  CC: {
    "PE-1 (S4)": {courses:[
      {code:"PECCT411",name:"Intro to Parallel and Distributed Programming"},
      {code:"PECCT412",name:"Introduction to Block Chain Technologies"},
      {code:"PECCT413",name:"Introduction to AI and ML"},
      {code:"PECCT414",name:"Fundamentals of Industrial Control System Security"},
      {code:"PECST495",name:"Advanced Data Structures"},
    ]},
    "PE-2 (S5)": {courses:[
      {code:"PECCT521",name:"Network Fundamentals for Cloud"},
      {code:"PECCT522",name:"Block Chain and Crypto Currency"},
      {code:"PECCT523",name:"AI in Cyber Security"},
      {code:"PECCT524",name:"Advanced Industrial Cyber Security"},
      {code:"PECST521",name:"Software Project Management"},
      {code:"PECST525",name:"Data Mining"},
    ]},
    "PE-3 (S6)": {courses:[
      {code:"PECCT631",name:"Cloud Infrastructure and Systems"},
      {code:"PECCT632",name:"Cryptographic Algorithms in Blockchain"},
      {code:"PECCT633",name:"AI and ML in Cyber Security Defense"},
      {code:"PECCT634",name:"OT Threat Prevention"},
      {code:"PECCT635",name:"Biometric Security"},
    ]},
    "PE-4 (S7)": {courses:[
      {code:"PECCT741",name:"Malware Forensics"},
      {code:"PECCT742",name:"Intrusion Detection and Prevention Systems"},
      {code:"PECCT743",name:"Big Data Security"},
      {code:"PECCT746",name:"Security Operations Analysis"},
      {code:"PECST745",name:"Computer Vision"},
    ]},
    "PE-5 (S7)": {courses:[
      {code:"PECCT751",name:"Data & Computer Communication"},
      {code:"PECCT752",name:"Social and Ethical Issues of the Internet"},
      {code:"PECCT753",name:"Information Security in Public and Private Sectors"},
      {code:"PECCT754",name:"Engineering of Trustworthy Secure Systems"},
      {code:"PECCT755",name:"Cyber Threat Intelligence"},
    ]},
    "PE-6 (S8)": {courses:[
      {code:"PECCT861",name:"IPR and Cyber Law"},
      {code:"PECCT862",name:"Security in Wireless Networks"},
      {code:"PECCT863",name:"Secure Mobile Application Development"},
      {code:"PECCT864",name:"Network Forensics"},
      {code:"PECCT866",name:"Windows and Linux Forensics"},
      {code:"PECST865",name:"Next Generation Interaction Design"},
    ]},
    "OE-1 (S6)": {courses:[
      {code:"OECST611",name:"Data Structures"},{code:"OECST612",name:"Data Communication"},
      {code:"OECST613",name:"Foundations of Cryptography"},{code:"OECST614",name:"Machine Learning for Engineers"},
      {code:"OECST615",name:"Object Oriented Programming"},
    ]},
    "OE-2 (S7)": {courses:[
      {code:"OECST721",name:"Cyber Security"},{code:"OECST722",name:"Cloud Computing"},
      {code:"OECST723",name:"Software Engineering"},{code:"OECST724",name:"Computer Networks"},
      {code:"OECST725",name:"Mobile Application Development"},
    ]},
    "OE-3 (S8)": {courses:[
      {code:"OECST831",name:"Introduction to Algorithms"},{code:"OECST832",name:"Web Programming"},
      {code:"OECST833",name:"Software Testing"},{code:"OECST834",name:"Internet of Things"},
      {code:"OECST835",name:"Computer Graphics"},
    ]},
  },
  CS: {
    "PE-1 (S4)": {courses:[
      {code:"PECST411",name:"Software Engineering"},{code:"PECST412",name:"Pattern Recognition"},
      {code:"PECST413",name:"Functional Programming"},{code:"PECST414",name:"Coding Theory"},
      {code:"PECST416",name:"Signals And Systems"},{code:"PECST417",name:"Soft Computing"},
      {code:"PECST418",name:"Computational Geometry"},{code:"PECST419",name:"Cyber Ethics, Privacy, And Legal Issues"},
      {code:"PECST415",name:"VLSI Design"},{code:"PECST495",name:"Advanced Data Structures"},
    ]},
    "PE-2 (S5)": {courses:[
      {code:"PECST521",name:"Software Project Management"},{code:"PECST522",name:"Artificial Intelligence"},
      {code:"PECST523",name:"Data Analytics"},{code:"PECST524",name:"Data Compression"},
      {code:"PECST526",name:"Digital Signal Processing"},{code:"PECST527",name:"Computer Graphics & Multimedia"},
      {code:"PECST528",name:"Advanced Computer Architectures"},
      {code:"PECST525",name:"Data Mining"},{code:"PECST595",name:"Advanced Graph Algorithms"},
    ]},
    "PE-3 (S6)": {courses:[
      {code:"PECST631",name:"Software Testing"},{code:"PECST632",name:"Deep Learning"},
      {code:"PECST633",name:"Wireless & Mobile Computing"},{code:"PECST634",name:"Advanced Database Systems"},
      {code:"PECST636",name:"Digital Image Processing"},{code:"PECST637",name:"Fundamentals of Cryptography"},
      {code:"PECST638",name:"Quantum Computing"},{code:"PECST639",name:"Randomized Algorithms"},
      {code:"PECST635",name:"Cloud Computing"},{code:"PECST695",name:"Mobile Application Development"},
    ]},
    "PE-4 (S7)": {courses:[
      {code:"PECST741",name:"Formal Methods in Software Engineering"},{code:"PECST742",name:"Web Programming"},
      {code:"PECST743",name:"Bioinformatics"},{code:"PECST744",name:"Information Security"},
      {code:"PECST746",name:"Embedded Systems"},{code:"PECST747",name:"Blockchain and Cryptocurrencies"},
      {code:"PECST748",name:"Realtime Systems"},{code:"PECST749",name:"Approximation Algorithms"},
      {code:"PECST745",name:"Computer Vision"},{code:"PECST795",name:"Topics in Theoretical Computer Science"},
    ]},
    "PE-5 (S7)": {courses:[
      {code:"PECST751",name:"Advanced Computer Networks"},{code:"PECST752",name:"Responsible AI"},
      {code:"PECST753",name:"Fuzzy Systems"},{code:"PECST754",name:"Digital Forensics"},
      {code:"PECST756",name:"Game Theory and Mechanism Design"},{code:"PECST757",name:"High Performance Computing"},
      {code:"PECST758",name:"Programming Languages"},{code:"PECST759",name:"Parallel Algorithms"},
      {code:"PECST755",name:"Internet of Things"},{code:"PECST785",name:"Algorithms For Data Science"},
    ]},
    "PE-6 (S8)": {courses:[
      {code:"PECST861",name:"Software Architectures"},{code:"PECST862",name:"Natural Language Processing"},
      {code:"PECST863",name:"Topics in Security"},{code:"PECST864",name:"Computational Complexity"},
      {code:"PECST866",name:"Speech and Audio Processing"},{code:"PECST867",name:"Storage Systems"},
      {code:"PECST868",name:"Prompt Engineering"},{code:"PECST869",name:"Computational Number Theory"},
      {code:"PECST865",name:"Next Generation Interaction Design"},
    ]},
    "OE-1 (S6)": {courses:[
      {code:"OECST611",name:"Data Structures"},{code:"OECST612",name:"Data Communication"},
      {code:"OECST613",name:"Foundations of Cryptography"},{code:"OECST614",name:"Machine Learning for Engineers"},
      {code:"OECST615",name:"Object Oriented Programming"},
    ]},
    "OE-2 (S7)": {courses:[
      {code:"OECST721",name:"Cyber Security"},{code:"OECST722",name:"Cloud Computing"},
      {code:"OECST723",name:"Software Engineering"},{code:"OECST724",name:"Computer Networks"},
      {code:"OECST725",name:"Mobile Application Development"},
    ]},
    "OE-3 (S8)": {courses:[
      {code:"OECST831",name:"Introduction to Algorithms"},{code:"OECST832",name:"Web Programming"},
      {code:"OECST833",name:"Software Testing"},{code:"OECST834",name:"Internet of Things"},
      {code:"OECST835",name:"Computer Graphics"},
    ]},
  }
};

const CREDIT_STRUCTURE = [
  {label:"Humanities & Social Sciences (HMC)",credits:9,color:"var(--hmc-border)",desc:"Life Skills, Economics, Ethics, Org Behavior, HMC Elective"},
  {label:"Basic Science Courses (BSC)",credits:20,color:"var(--bsc-border)",desc:"Math 1-4, Physics/Chemistry for Info Science"},
  {label:"Engineering Science Courses (ESC)",credits:29,color:"var(--esc-border)",desc:"Python, C, Graphics, EEE, Design Thinking, Computing Foundations"},
  {label:"Programme Core Theory (PC)",credits:52,color:"var(--pc-border)",desc:"Core theory courses + 7 Core Labs across S2-S6"},
  {label:"Project-Based Learning (PBL)",credits:16,color:"var(--pbl-border)",desc:"4 PBL courses across S3-S6"},
  {label:"Programme Electives (PE)",credits:18,color:"var(--pe-border)",desc:"6 elective slots across S4-S8"},
  {label:"Open / Industry Electives (OE/ILE)",credits:9,color:"var(--oe-border)",desc:"3 open electives from other departments (S6-S8)"},
  {label:"Project, Internship & Seminar (PWS)",credits:12,color:"var(--pws-border)",desc:"Mini Project, Seminar, Major Project/Internship (S6-S8)"},
  {label:"Health & Wellness (HWP)",credits:1,color:"var(--hmc-border)",desc:"Health and Wellness program"},
  {label:"Skill Enhancement (SEC)",credits:1,color:"var(--sec-border)",desc:"Digital 101 (NASSCOM MOOC)"},
  {label:"Mandatory Student Activities (MSA)",credits:3,color:"var(--color-primary)",desc:"NSS/NCC/NSO, Arts/Sports, Clubs, Internships, Papers, Skilling"},
];

const TYPE_COLOR_MAP = {
  BSC:"bsc",ESC:"esc",PC:"pc",PBL:"pbl",PE:"pe",HMC:"hmc",OE:"oe",PWS:"pws",PCL:"pcl",SEC:"sec"
};

const ALL_SUBJECT_AREAS = [
  "Mathematics","Physics","Chemistry","Python Programming","C Programming",
  "Data Structures & Algorithms","Theory of Computation","Discrete Mathematics",
  "Object Oriented Programming","Digital Electronics","Database Management Systems",
  "Operating Systems","Computer Organization","Computer Networks","Design & Analysis of Algorithms",
  "Machine Learning","Data Analytics","Big Data","Compiler Design","Data Visualization",
  "Applied Cryptography","Network Security","Cyber Forensics","Ethical Hacking",
  "Artificial Intelligence","Deep Learning","Cloud Computing","IoT","Blockchain",
  "Software Engineering","Web Programming","Mobile Applications","NLP",
  "Computer Vision","Digital Image Processing","High Performance Computing",
  "Microcontrollers","Embedded Systems","Engineering Graphics","Electrical Engineering",
  "Electronics Engineering","Entrepreneurship & IPR","Economics","Engineering Ethics",
  "Life Skills","Project Management","Data Mining","Prompt Engineering",
  "Reinforcement Learning","Robotics & Automation","Information Security",
  "Digital Forensics","Wireless Networks","Storage Systems"
];

const SAMPLE_STAFF = [
  {name:"Staff-1",subjects:["Machine Learning","Deep Learning","Data Analytics","Artificial Intelligence","NLP"],expertise:{
    "Machine Learning":"high","Deep Learning":"high","Data Analytics":"medium","Artificial Intelligence":"high","NLP":"medium"}},
  {name:"Staff-2",subjects:["Data Structures & Algorithms","Theory of Computation","Design & Analysis of Algorithms","Discrete Mathematics"],expertise:{
    "Data Structures & Algorithms":"high","Theory of Computation":"high","Design & Analysis of Algorithms":"high","Discrete Mathematics":"medium"}},
  {name:"Staff-3",subjects:["Computer Networks","Network Security","Applied Cryptography","Wireless Networks","Ethical Hacking"],expertise:{
    "Computer Networks":"high","Network Security":"high","Applied Cryptography":"medium","Wireless Networks":"medium","Ethical Hacking":"medium"}},
  {name:"Staff-4",subjects:["Database Management Systems","Big Data","Data Mining","Cloud Computing","Data Visualization"],expertise:{
    "Database Management Systems":"high","Big Data":"high","Data Mining":"medium","Cloud Computing":"medium","Data Visualization":"medium"}},
  {name:"Staff-5",subjects:["Operating Systems","Compiler Design","Computer Organization","Microcontrollers","Embedded Systems"],expertise:{
    "Operating Systems":"high","Compiler Design":"high","Computer Organization":"high","Microcontrollers":"medium","Embedded Systems":"medium"}},
  {name:"Staff-6",subjects:["Python Programming","C Programming","Object Oriented Programming","Web Programming","Software Engineering"],expertise:{
    "Python Programming":"high","C Programming":"high","Object Oriented Programming":"high","Web Programming":"medium","Software Engineering":"medium"}},
  {name:"Staff-7",subjects:["Mathematics","Discrete Mathematics","Theory of Computation","Data Analytics"],expertise:{
    "Mathematics":"high","Discrete Mathematics":"high","Theory of Computation":"medium","Data Analytics":"medium"}},
  {name:"Staff-8",subjects:["Digital Electronics","Microcontrollers","IoT","Embedded Systems","Computer Organization"],expertise:{
    "Digital Electronics":"high","Microcontrollers":"high","IoT":"high","Embedded Systems":"high","Computer Organization":"medium"}},
  {name:"Staff-9",subjects:["Cyber Forensics","Digital Forensics","Information Security","Ethical Hacking","Network Security"],expertise:{
    "Cyber Forensics":"high","Digital Forensics":"high","Information Security":"high","Ethical Hacking":"medium","Network Security":"medium"}},
  {name:"Staff-10",subjects:["Computer Vision","Digital Image Processing","Deep Learning","Machine Learning","Reinforcement Learning"],expertise:{
    "Computer Vision":"high","Digital Image Processing":"high","Deep Learning":"high","Machine Learning":"medium","Reinforcement Learning":"medium"}},
  {name:"Staff-11",subjects:["Blockchain","Cloud Computing","IoT","Applied Cryptography","Information Security"],expertise:{
    "Blockchain":"high","Cloud Computing":"high","IoT":"medium","Applied Cryptography":"medium","Information Security":"medium"}},
  {name:"Staff-12",subjects:["Software Engineering","Project Management","Web Programming","Mobile Applications","Prompt Engineering"],expertise:{
    "Software Engineering":"high","Project Management":"high","Web Programming":"high","Mobile Applications":"medium","Prompt Engineering":"medium"}},
];
