window.portfolioData = {
  hero: {
    kicker: "Software Developer",
    title: "Ali Akcin",
    focus: "Backend, Cloud & AI Systems",
    summary:
      "Software developer building backend, cloud, and AI-integrated systems with an emphasis on reliability, maintainability, and clear system design."
  },
  quickFacts: [
    "Backend, cloud & AI systems",
    "Java, C#, Python, TypeScript, JavaScript & SQL",
    "REST APIs, event-driven systems & data workflows",
    "B.S. Information Systems · UMBC"
  ],
  biography: [
    "I am a software developer with a B.S. in Information Systems from the University of Maryland, Baltimore County and an A.S. in Computer Science from the Community College of Baltimore County.",
    "I have hands-on experience in backend development, RESTful APIs, data pipelines, databases, and AI/LLM evaluation. I work across Java, C#, Python, TypeScript, JavaScript, and SQL, with experience using Spring Boot, .NET, React, PostgreSQL, AWS, and Docker.",
    "Through software engineering experience and independent projects, I have built backend services, automated data workflows, event-driven systems, cloud infrastructure, and AI-integrated applications."
  ],
  experience: [
    {
      company: "Handshake",
      role: "AI Trainer",
      dates: "Dec 2025 – Present",
      bullets: [
        "Evaluate and refine LLM responses for accuracy, reasoning, relevance, creativity, and safety.",
        "Design prompts, annotate AI-generated responses, and curate data for LLM training and evaluation projects."
      ]
    },
    {
      company: "Venture Shares",
      role: "Software Engineer Intern",
      dates: "Nov 2023 – May 2024",
      bullets: [
        "Developed RESTful backend APIs and application logic using Python and TypeScript.",
        "Built and maintained web-scraping and ETL pipelines for collecting, cleaning, validating, and storing financial data in PostgreSQL.",
        "Worked on debugging, backend reliability, and data quality."
      ]
    },
    {
      company: "Revature",
      role: "Software Engineer Trainee",
      dates: "Jul 2023 – Oct 2023",
      bullets: [
        "Developed Java backend applications and REST APIs using OOP, SQL, data structures, and reusable components.",
        "Built and tested data-driven applications integrating Java services with HTML, CSS, and JavaScript."
      ]
    }
  ],
  projects: [
    {
      number: "01",
      category: "AI systems · Windows desktop",
      name: "Aegis – AI Systems Investigation Platform",
      tools: "C#, .NET 10, WinUI 3, SQLite, OpenAI .NET SDK, xUnit",
      repository: "https://github.com/evidentart/Aegis",
      highlights: [
        "Built a Windows-native AI systems investigation platform using bounded planning, read-only Windows observation tools, evidence correlation, and grounded reporting for natural-language system troubleshooting.",
        "Architected a safety-focused runtime with exact ToolId validation, shared observation budgets, bounded replanning, and SQLite-backed history and baselines; validated reliability with 203 automated tests and live OpenAI integration testing."
      ]
    },
    {
      number: "02",
      category: "Event-driven systems · Fintech",
      name: "SmartExpenseAnalyzer",
      tools: "Java, Spring Boot, React, PostgreSQL, MongoDB, Kafka, RabbitMQ, gRPC, Keycloak, Docker",
      repository: "https://github.com/evidentart/event-driven-budget-platform",
      highlights: [
        "Built an authenticated event-driven personal finance platform using Spring Boot microservices, React, PostgreSQL/MongoDB, Kafka, RabbitMQ, gRPC, and Keycloak for expenses, budgets, profiles, and AI-generated insights.",
        "Implemented transactional outbox/inbox patterns, idempotent at-least-once processing, synchronous gRPC budget validation, and retry/DLQ recovery; integrated Gemini for asynchronous financial insights."
      ]
    },
    {
      number: "03",
      category: "Serverless systems · AWS",
      name: "Serverless Image Processing Platform",
      tools: "Python, React, AWS Lambda, S3, SQS, API Gateway, Terraform, GitHub Actions",
      repository: "https://github.com/evidentart/serverless-image-processing",
      highlights: [
        "Built an event-driven serverless image-processing platform with direct browser-to-S3 presigned uploads, SQS-backed asynchronous processing, image validation, and automated thumbnail, medium-size, and WebP generation.",
        "Provisioned AWS infrastructure with Terraform using private S3 storage, least-privilege IAM, retry/DLQ handling, and deterministic UUID-based processing; added GitHub Actions CI covering 45 automated Python tests."
      ]
    }
  ],
  education: [
    {
      school: "University of Maryland, Baltimore County",
      degree: "B.S. in Information Systems",
      years: "2022–2024",
      location: "Baltimore, MD"
    },
    {
      school: "Community College of Baltimore County",
      degree: "A.S. in Computer Science",
      years: "2019–2022",
      location: "Baltimore, MD"
    }
  ],
  skills: [
    {
      group: "Languages",
      items: ["Java", "C#", "Python", "TypeScript", "JavaScript", "SQL"]
    },
    {
      group: "Frameworks / Application",
      items: ["Spring Boot", ".NET 10", "WinUI 3", "React", "REST APIs"]
    },
    {
      group: "Databases / Distributed Systems",
      items: ["PostgreSQL", "MongoDB", "SQLite", "Kafka", "RabbitMQ", "gRPC"]
    },
    {
      group: "Cloud / DevOps",
      items: ["AWS", "Docker", "Terraform", "Git", "GitHub Actions"]
    },
    {
      group: "Security / AI",
      items: ["Keycloak", "OAuth2/JWT", "OpenAI .NET SDK", "Gemini"]
    }
  ],
  certifications: [
    "Generative AI: Enhance your Data Analytics Career | IBM | Issued Jul 2025",
    "Data Visualization with Python | IBM | Issued May 2025",
    "Data Analysis with Python | IBM | Issued May 2025",
    "Databases and SQL for Data Science with Python | IBM | Issued Apr 2025",
    "Python Project for Data Science | IBM | Issued Apr 2025",
    "Python for Data Science, AI & Development | IBM | Issued Apr 2025",
    "Data Visualization and Dashboards with Excel and Cognos | IBM | Issued Apr 2025",
    "Excel Basics for Data Analysis | IBM | Issued Apr 2025",
    "Introduction to Data Analytics | IBM | Issued Apr 2025",
    "Fundamentals of Java Programming | Board Infinity | Issued Jul 2024",
    "Technical Support Fundamentals | Google | Issued Dec 2020",
    "AI For Everyone | DeepLearning.AI | Issued Nov 2021"
  ],
  academicPapers: [
    {
      category: "Academic Paper",
      title: "The Influence of Sound",
      course: "English 393",
      date: "",
      hideMeta: true,
      description:
        "This reflection explores how everyday sounds, such as birdsong, wind, and silence, influence mood, thoughts, and self-reflection, grounding and energizing me throughout the day.",
      reflection:
        "Every day, I am influenced by sounds that shape my mood and mindset. The early morning birdsong is particularly calming, grounding me in peace before the day begins. It offers a mindful moment, helping me clear my mind of distractions. The sound of the wind, whether a gentle breeze or a stronger gust, brings a sense of connection to nature and serves as a reminder of life's natural flow. Finally, moments of deep silence bring clarity and offer a reset, providing a brief escape from the constant noise of daily life. These sounds are my anchors, guiding my thoughts and emotions.",
      pdfPath: "assets/papers/influence_of_sound_reflection.pdf"
    },
    {
      category: "Academic Paper",
      title: "Enhancing Internet Setup Instructions with Design Principles",
      course: "English 393",
      date: "",
      hideMeta: true,
      description:
        "This reflection discusses how design principles such as chunking, queuing, filtering, and white space can improve the clarity and usability of a home internet setup manual.",
      reflection:
        "Incorporating design principles like chunking, queuing, filtering, and white space into my home internet setup manual can greatly enhance its clarity and user-friendliness. Chunking helps break complex tasks into simpler steps, reducing cognitive load. Visual distinctions like bold or larger headings, color-coded sections, and icons guide users more effectively. Highlighting definitions and cautionary notes ensures essential information stands out without overwhelming readers. Additionally, using white space improves readability by reducing clutter and aiding focus. Applying these principles will make the manual more accessible, allowing users to navigate through the instructions smoothly and efficiently while retaining important information.",
      pdfPath: "assets/papers/instructions.pdf"
    },
    {
      category: "Academic Paper",
      title: "Instructions- Establishing a Reliable Home Network: A Step-by-Step Guide",
      course: "English 393",
      date: "11/27/2024",
      hideMeta: true,
      description:
        "This guide offers clear, step-by-step instructions for setting up a reliable and secure home internet network, covering everything from selecting the right equipment to configuring devices, implementing security measures, and providing ongoing maintenance tips to ensure optimal performance and protection.",
      reflection:
        "This tutorial on establishing a home network reinforced my understanding of both the technical and practical aspects of internet setup. It emphasized the importance of positioning devices, securing connections, and regularly maintaining network performance. The hands-on approach made complex concepts like network encryption and firewall configurations more approachable, especially for beginners. Understanding how to select the right equipment and configure it for optimal performance was valuable, particularly in terms of security. This assignment gave me confidence in managing home networks, ensuring they are secure and optimized for multiple devices, while also emphasizing the importance of ongoing maintenance.",
      pdfPath: "assets/papers/instruction_eng393.pdf"
    },
    {
      category: "Academic Paper",
      title: "Creating Lifelong Connections: A Rhetorical Analysis of Big Brothers Big Sisters' Message",
      course: "English 393",
      date: "11/27/2024",
      hideMeta: true,
      description:
        "The \"A Slice of Two Can Last a Lifetime\" billboard by Big Brothers Big Sisters effectively uses compelling imagery and emotional appeal to emphasize the lasting impact of mentorship, conveying how small acts of kindness and guidance can create meaningful, lifelong relationships that transform lives for the better.",
      reflection:
        "This analysis of Big Brothers Big Sisters' billboard demonstrates how visual rhetoric can effectively convey a deep, emotional message. The image of two men sharing a casual moment over coffee exemplifies the idea that simple, everyday interactions can have a lasting impact, which is central to the message of mentorship. The strategic placement of the billboard in community-oriented areas ensures it reaches individuals who can engage with the cause, making it a call to action for potential mentors. This assignment reinforced the importance of context, design, and emotional appeal in creating impactful, persuasive messages.",
      pdfPath: "assets/papers/rhetorical_aa.pdf"
    },
    {
      category: "Academic Paper",
      title: "Society for Technical Communication",
      course: "English 393",
      date: "",
      hideMeta: true,
      description:
        "This reflection analyzes the Society for Technical Communication (STC) website, highlighting its portrayal of technical communication's evolution, broad scope, and focus on professional development.",
      reflection:
        "After reviewing the Society for Technical Communication (STC) website, I gained a comprehensive understanding of how STC frames the field of technical communication. The website successfully illustrates the profession's historical roots and its adaptive evolution, from wartime documentation to the digital age. It also emphasizes the broad reach of technical communication across various industries, underscoring the diverse membership of students, academics, and professionals. STC's commitment to professional development is evident through certification programs and educational events. However, I suggest considering more affordable membership and event pricing to make the organization more accessible to a broader audience.",
      pdfPath: "assets/papers/society_for_technicalcommunication.pdf"
    },
    {
      category: "Academic Paper",
      title: "Sonic Warning Reflection",
      course: "English 393",
      date: "",
      hideMeta: true,
      description:
        "This reflection discusses the process of creating a sonic warning, focusing on the emotional narrative conveyed through sound elements like sirens, birds, and music, as well as improvements for deeper impact.",
      reflection:
        "In creating my sonic warning, I integrated a range of sound elements to convey an emotional journey from chaos to hope. Starting with war sirens and bomb sounds, I aimed to elicit urgency, drawing listeners into the narrative. As the piece progresses, I transitioned to natural sounds like rain, birds, and wind, symbolizing renewal and recovery. Ending with human laughter and upbeat music, I emphasized resilience and hope. Future improvements would involve refining sound quality and implementing spatial audio for a more immersive experience. Drawing on Gunther Kress' ideas, I recognize the power of sound in representing narratives and eliciting emotional responses.",
      audioLabel: "Click here to listen the Sonic Warning",
      audioPath: "assets/papers/sonic.wav",
      pdfPath: "assets/papers/sonic_warning_reflection.pdf"
    }
  ],
  contact: {
    note: "Find my code on GitHub or connect with me on LinkedIn.",
    github: "https://github.com/evidentart",
    linkedin: "https://www.linkedin.com/in/ali-akcin/"
  }
};

