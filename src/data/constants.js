export const Bio = {
    name: "Abhishek",
    roles: [
      "Full Stack Data Science",
      "Business Analyst",
    ],
    description:
        "I completed  Data Science and Data Analyst course from Almabetter, where I gained expertise in Machine  Learing , Deep learing, Natural Language Processing and Data Anaylsis. I am always eager explore new technology  and  solve real-world problems using data driven approachedMy idea behind taking up Computer Science & Engineering is my love for programming and the fact that, given the knowledge, I can make a computer do almost anything I want it to do.I have a keen interest in the field of Machine Learning and Data Science, and I'm presently learning and working on the skills required to expertise in the same.",
    github: "https://github.com/Abhishek-guptaaa",
    resume:
      "https://drive.google.com/file/d/1VRPEKn9khem5qvoqCEorGAisA1RNzN-d/view?usp=sharing",
    linkedin: "https://www.linkedin.com/in/abhishek-gupta99/",
  };
  
  export const skills = [
    {
      title: "Full Stack Data Science",
      skills: [
        {
          name: "Python",
          image: 
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
        },
        {
          name: "Scikit-learn",
          image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
        },
        {
          name: "Pandas",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg",
        },
        {
          name: "Numpy",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg",
        },
        { 
          name: "tensorflow",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg",
        },
        {
          name: "keras",
          image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg",
        },
      ],
    },
    {
      title: "Cloud & Databases",
      skills: [
        {
          name: "MySQL",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
        },
        {
          name: "MongoDB",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
        },
        {
          name: "AWS",
          image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
        }
      ],
    },
    {
      title: "Data Analytics & Data Visualization",
      skills: [
        {
          name: "",
          image: "",
        },
        {
          name: "",
          image: "",
        },

      ],
    },
    {
      title: "Others",
      skills: [
        {
          name: "Git",
          image:
            "https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667",
        },
        {
          name: "GitHub",
          image:
            "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        },
        
        {
          name: "VS Code",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
        },
      ],
    },
  ];
  
  export const experiences = [
    {
      id: 0,
      img:"https://www.almabetter.com/favicon.ico",
      role: "Full Stack Data Science Trainee & Analyst",
      date: "Aug 2023 - March 2024",
      desc:"Gained comprehensive experience in Machine Learning, Deep Learning, and NLP, including data cleaning, feature engineering, data analysis, model deployment, and end-to-end project development",
      skills: [
        "Python", 
        "SQL", 
        "Pandas",
        "NumPy", "Scikit-learn",
        "TensorFlow", 
        "Keras",
        "PyTorch", 
        "Matplotlib", 
        "Seaborn", 
        "Power BI",  
        "Data Engineering", 
        "MLOps", 
        "MySQL",
        "MongoDB",
      ],
    },
    {
      id: 0,
      img: "https://ineuron.ai/images/ineuron-logo.png", 
      role: "Machine Learning Internship",
      company: "iNeuron.ai (Remote)",
      date: "June 2024 - Sep 2024",
      desc: "Developed a flight fare prediction model achieving 85%+ accuracy using Linear Regression and Random Forest. Implemented feature engineering, model evaluation techniques, and optimized model performance.",
      skills: [
        "Machine Learning", "Deep Learning", "NLP",
        "DecisionTreeRegressor", "XGBRegressor", "Ridge", "Lasso",
        "MongoDB", "AWS", "CI/CD", "Flask"
      ]
    },
    {
      id: 1,
      img: "https://ineuron.ai/images/ineuron-logo.png",
      role: "AI and NLP Trainee",
      company: "iNeuron.ai (Remote)",
      date: "April 2024 - July 2024",
      desc: "Built an end-to-end hate speech classification model with 90% accuracy. Designed and fine-tuned an NLP pipeline using LSTM for accurate classification, leveraging techniques like tokenization, word embeddings, and hyperparameter tuning.",
      skills: [
        "LSTM",
        "Word Embeddings",
        "Tokenization",

      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img : "https://subharti.org/images/logo.png",
      school: "Swami Vivekanand Subharti University",
      //date: 
      grade: "67%",
      desc: " I have completed Bachelor Computer Application",
      degree: "Bachelor of Technology - BCA, Computer Science and Technology",
    },
    {
      id: 1,
      school: "Shree Durga ji Inter College",
      //date: "Apr 2019 - Apr 2025",
      grade: "75%",
      desc: "I completed my class 12 high school education at Methodist School, Dankuni, where I studied Science with Computer Science.",
      degree: "High Secondry School",
    },
    {
      id: 2,
      school: "Chacha Nehru Hindi High School",
      //date: "Apr 2017 - Apr 2019",
      grade: "66 %",
      desc: "I completed my class 10 education at Methodist School, Dankuni, where I studied Science with Computer Application.",
      degree: " Secondary School Certificate (SSC)",
    },
  ];
  

  export const projects = [
    {
      id: 1,
      title: "End -to- End Car Price Prediction",
      description:
        "This project aims to predict the prices of cars based on various features like the car’s make, model, year, mileage, and more. The project follows an end-to-end machine learning pipeline, including data collection, preprocessing, model training, evaluation, and deployment.",
      //image:"https://user-images.githubusercontent.com/64485885/255202416-e1f89b04-2788-45b0-abc2-9dec616669e2.png",
      video: "https://drive.google.com/file/d/1QIpRNNviphw-8RASaclimEx7Y7OvZaPS/preview",  
      tags: [
        "Docker",
        "AWS",
        "DuckDNS",
        "Eslint",
        "Husky",
        "CI/CD",
        "React Js",
        "MongoDb",
        "Node Js",
        "Express Js",
        "Redux",
      ],
      category: "Machine Learing",
      github: "https://github.com/Abhishek-guptaaa/End-to-End-Flight_fare_Prediction",
      //webapp: "https://trackify.duckdns.org",
    },
  
    {
      id: 2,
      title: "Job Finding App",
      date: "Jun 2023 - Jul 2023",
      description:
        "A Job Finding App made with React Native, Axios. Users can search for any job coming from API and apply there.",
      image:
        "https://user-images.githubusercontent.com/64485885/255237090-cf798a2c-1b41-4bb7-b904-b5353a1f08e8.png",
      tags: ["React Native", "JavaScript", "Axios"],
      category: "android app",
      github: "https://github.com/rishavchanda/Job-finder-App",
      webapp: "https://github.com/rishavchanda/Job-finder-App",
    },

    {
      id: 8,
      title: "Face Recognition",
      date: "Jan 2021",
      description:
        "A Face recognition python app made with OpenCV. It uses face_recognition library to detect faces. It uses the webcam to detect faces. It also has a search bar to search for a particular face.",
      image:
        "https://camo.githubusercontent.com/a8b3e1ebf26d4c95f75bc6671189a3590eb67eb8332d7c7452492990e731efb9/68747470733a2f2f77617265686f7573652d63616d6f2e696e67726573732e636d68312e707366686f737465642e6f72672f356137383335396561323762643261633232336437656662306639303831306437373930383436312f363837343734373037333361326632663633366336663735363432653637363937343638373536323735373336353732363336663665373436353665373432653633366636643266363137333733363537343733326633383339333633363339333232663332333433343333333033333339333832663333333636363330363533333636333032643331333336333632326433313331363533373264333833323335333832643334363433303633333936333635333136353334333133393265363736393636",
      tags: ["Python", "Keras", "TensorFlow", "VGG16", "Pickle", "React"],
      category: "machine learning",
      github: "https://github.com/rishavchanda/Face-Recodnition-AI-with-Python",
      webapp: "https://github.com/rishavchanda/Face-Recodnition-AI-with-Python",
    },
  ];
  
 