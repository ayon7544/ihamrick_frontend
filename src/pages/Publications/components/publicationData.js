import publicationImage from "../assets/publications.png"
const publicationData = [
  // --- Start of Original 10 Objects ---
  {
    id: 1,
    imageUrl: publicationImage,
    headline: "Balanced Nutrition: Your Everyday Guide",
    author: "Dr. Emily Harper",
    publishedDate: "September 10, 2025",
    description:
      "A comprehensive guide to creating sustainable eating habits for optimal health and wellness.",
    pdfLink: "https://tiiny.host/pdf-upload/BalancedNutrition.pdf",
  },
  {
    id: 2,
    imageUrl: publicationImage,
    headline: "Artificial Minds: AI and Society",
    author: "Dr. Victor Stone",
    publishedDate: "October 5, 2025",
    description:
      "Explores the impact of artificial intelligence on daily life, ethics, and future workforce trends.",
    pdfLink:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    id: 3,
    imageUrl: publicationImage,
    headline: "Smart Cities: Designing the Future",
    author: "Sophia Nguyen",
    publishedDate: "August 18, 2025",
    description:
      "Investigates how technology and sustainability can transform urban spaces into smarter, more livable cities.",
    pdfLink: "https://tiiny.host/pdf-upload/SmartCities.pdf",
  },
  {
    id: 4,
    imageUrl: publicationImage,
    headline: "Navigating Global Markets",
    author: "Liam O’Connor",
    publishedDate: "July 22, 2025",
    description:
      "Strategies for investors to thrive in volatile markets, including risk management and portfolio diversification.",
    pdfLink: "https://tiiny.host/pdf-upload/NavigatingMarkets.pdf",
  },
  {
    id: 5,
    imageUrl: publicationImage,
    headline: "Journey to Mars: Challenges and Triumphs",
    author: "Dr. Alina Voss",
    publishedDate: "November 2, 2025",
    description:
      "Examines the engineering, biological, and psychological aspects of establishing a human colony on Mars.",
    pdfLink: "https://tiiny.host/pdf-upload/JourneyToMars.pdf",
  },
  {
    id: 6,
    imageUrl: publicationImage,
    headline: "The Digital Canvas: Art in the Blockchain Era",
    author: "Kai Ramirez",
    publishedDate: "September 15, 2025",
    description:
      "Explores how digital technologies and blockchain are redefining art ownership, creativity, and market dynamics.",
    pdfLink: "https://tiiny.host/pdf-upload/DigitalCanvas.pdf",
  },
  {
    id: 7,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "Ocean Depths: Discovering New Frontiers",
    author: "Dr. Hiroshi Sato",
    publishedDate: "June 12, 2025",
    description:
      "A scientific exploration of deep-sea ecosystems, new species, and marine biodiversity conservation.",
    pdfLink: "https://tiiny.host/pdf-upload/OceanDepths.pdf",
  },
  {
    id: 8,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "Leading with Impact: Modern Management",
    author: "Aisha Patel",
    publishedDate: "May 30, 2025",
    description:
      "Practical strategies for empowering teams, fostering collaboration, and cultivating high-performing work cultures.",
    pdfLink: "https://tiiny.host/pdf-upload/LeadingWithImpact.pdf",
  },
  {
    id: 9,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "Solar Futures: Harnessing Renewable Energy",
    author: "Ben Thompson",
    publishedDate: "April 15, 2025",
    description:
      "An accessible guide on solar technology innovations, sustainability, and global energy transition efforts.",
    pdfLink: "https://tiiny.host/pdf-upload/SolarFutures.pdf",
  },
  {
    id: 10,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "Digital Shadows: Cybersecurity in the Modern Age",
    author: "Dr. Evelyn Brooks",
    publishedDate: "March 20, 2025",
    description:
      "Analyzes emerging cybersecurity threats, defense mechanisms, and the importance of digital resilience.",
    pdfLink: "https://tiiny.host/pdf-upload/DigitalShadows.pdf",
  },
  // --- Start of 40 Synthetic Objects (11-50) ---
  {
    id: 11,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "The Quantum Leap: Introduction to Quantum Computing",
    author: "Dr. Leonard Hofstadter",
    publishedDate: "January 5, 2026",
    description:
      "An overview of quantum mechanics and its disruptive potential in computation and security.",
    pdfLink: "https://tiiny.host/pdf-upload/QuantumComputing.pdf",
  },
  {
    id: 12,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "Behavioral Economics: Nudges and Decisions",
    author: "Prof. Richard Thaler",
    publishedDate: "February 20, 2026",
    description:
      "Analyzing psychological factors that influence economic choices and public policy design.",
    pdfLink: "https://tiiny.host/pdf-upload/BehavioralEconomics.pdf",
  },
  {
    id: 13,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "Renewable Energy Grids: Challenges and Solutions",
    author: "Dr. Anya Sharma",
    publishedDate: "March 1, 2026",
    description:
      "Addressing the intermittency problem in sustainable energy systems through advanced grid management.",
    pdfLink: "https://tiiny.host/pdf-upload/EnergyGrids.pdf",
  },
  {
    id: 14,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "The Future of Work: Remote Collaboration",
    author: "Alex Chen",
    publishedDate: "April 10, 2026",
    description:
      "Best practices and technological tools for building high-performing, distributed teams globally.",
    pdfLink: "https://tiiny.host/pdf-upload/FutureOfWork.pdf",
  },
  {
    id: 15,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "Gene Editing and Ethics: CRISPR Technology",
    author: "Dr. Sarah Lee",
    publishedDate: "May 25, 2026",
    description:
      "A deep dive into CRISPR/Cas9 technology and the moral debates surrounding human germline editing.",
    pdfLink: "https://tiiny.host/pdf-upload/GeneEditing.pdf",
  },
  {
    id: 16,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "Neuroplasticity: Rewiring Your Brain for Success",
    author: "Prof. James Davies",
    publishedDate: "June 30, 2026",
    description:
      "Explores the brain's ability to reorganize itself by forming new neural connections throughout life.",
    pdfLink: "https://tiiny.host/pdf-upload/Neuroplasticity.pdf",
  },
  {
    id: 17,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "Sustainable Supply Chains: A Global Imperative",
    author: "Maria Rodriguez",
    publishedDate: "July 15, 2026",
    description:
      "Analyzing the transition toward ethical and environmentally friendly logistics and sourcing practices.",
    pdfLink: "https://tiiny.host/pdf-upload/SustainableSupply.pdf",
  },
  {
    id: 18,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "FinTech Revolution: Disrupting Traditional Banking",
    author: "Akira Tanaka",
    publishedDate: "August 8, 2026",
    description:
      "Examining how financial technology is reshaping payment systems, lending, and investment services.",
    pdfLink: "https://tiiny.host/pdf-upload/FinTechRevolution.pdf",
  },
  {
    id: 19,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "Climate Modeling: Predicting Future Scenarios",
    author: "Dr. Chloe Green",
    publishedDate: "September 1, 2026",
    description:
      "An in-depth look at the computational models used to forecast long-term climate changes and their accuracy.",
    pdfLink: "https://tiiny.host/pdf-upload/ClimateModeling.pdf",
  },
  {
    id: 20,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "The Psychology of Peak Performance",
    author: "Michael Jordan",
    publishedDate: "October 10, 2026",
    description:
      "Techniques and mental strategies used by elite athletes and professionals to achieve optimal performance states.",
    pdfLink: "https://tiiny.host/pdf-upload/PeakPerformance.pdf",
  },
  {
    id: 21,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "The Ethics of Autonomous Vehicles",
    author: "Prof. David Hume",
    publishedDate: "November 15, 2026",
    description:
      "Exploring the moral dilemmas and legal frameworks required for self-driving cars and robotic systems.",
    pdfLink: "https://tiiny.host/pdf-upload/AutonomousEthics.pdf",
  },
  {
    id: 22,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "Urban Farming: Feeding Cities Sustainably",
    author: "Lena Dubois",
    publishedDate: "December 1, 2026",
    description:
      "Innovative approaches to growing food in metropolitan areas, promoting local consumption and reducing carbon footprint.",
    pdfLink: "https://tiiny.host/pdf-upload/UrbanFarming.pdf",
  },
  {
    id: 23,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "Blockchain Beyond Crypto: Enterprise Applications",
    author: "Dr. Kenji Sato",
    publishedDate: "January 20, 2027",
    description:
      "Case studies and analysis of how distributed ledger technology is transforming industries like healthcare and governance.",
    pdfLink: "https://tiiny.host/pdf-upload/BlockchainEnterprise.pdf",
  },
  {
    id: 24,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "The Science of Happiness: Positive Psychology",
    author: "Dr. Martin Seligman",
    publishedDate: "February 14, 2027",
    description:
      "An exploration of the studies and practices that foster well-being, resilience, and flourishing in individuals.",
    pdfLink: "https://tiiny.host/pdf-upload/PositivePsychology.pdf",
  },
  {
    id: 25,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "The History of Global Pandemics",
    author: "Prof. Alice Quinn",
    publishedDate: "March 10, 2027",
    description:
      "A historical review of major infectious disease outbreaks and the lessons learned in public health response.",
    pdfLink: "https://tiiny.host/pdf-upload/GlobalPandemics.pdf",
  },
  {
    id: 26,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "Modern Cryptography: Securing the Internet",
    author: "Evan Green",
    publishedDate: "April 5, 2027",
    description:
      "Detailed analysis of encryption algorithms and protocols that form the foundation of secure online communication.",
    pdfLink: "https://tiiny.host/pdf-upload/ModernCryptography.pdf",
  },
  {
    id: 27,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "The Economics of Climate Change Mitigation",
    author: "Dr. Isabella Rossi",
    publishedDate: "May 22, 2027",
    description:
      "Evaluating the costs and economic benefits of various policies aimed at reducing greenhouse gas emissions.",
    pdfLink: "https://tiiny.host/pdf-upload/ClimateEconomics.pdf",
  },
  {
    id: 28,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "Personalized Medicine: The Future of Healthcare",
    author: "Dr. Samuel Okoro",
    publishedDate: "June 1, 2027",
    description:
      "How genetic and lifestyle data are used to tailor medical treatments and preventative care for individuals.",
    pdfLink: "https://tiiny.host/pdf-upload/PersonalizedMedicine.pdf",
  },
  {
    id: 29,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "Virtual Reality in Education and Training",
    author: "Chloe Evans",
    publishedDate: "July 18, 2027",
    description:
      "Case studies on the effectiveness of immersive VR technologies for skill development and academic learning.",
    pdfLink: "https://tiiny.host/pdf-upload/VREducation.pdf",
  },
  {
    id: 30,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "Global Water Scarcity: Policy and Technology",
    author: "Prof. Jian Li",
    publishedDate: "August 25, 2027",
    description:
      "An analysis of international water management policies and advanced desalination technologies.",
    pdfLink: "https://tiiny.host/pdf-upload/WaterScarcity.pdf",
  },
  {
    id: 31,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "The Power of Narrative: Storytelling in Business",
    author: "Daniel Black",
    publishedDate: "September 10, 2027",
    description:
      "How compelling narratives can be used to drive marketing, leadership, and organizational change.",
    pdfLink: "https://tiiny.host/pdf-upload/BusinessNarrative.pdf",
  },
  {
    id: 32,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "Exoplanets and the Search for Extraterrestrial Life",
    author: "Dr. Elena Petrova",
    publishedDate: "October 1, 2027",
    description:
      "Review of the latest discoveries of planets outside our solar system and the implications for astrobiology.",
    pdfLink: "https://tiiny.host/pdf-upload/ExoplanetsSearch.pdf",
  },
  {
    id: 33,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "Effective Altruism: Maximizing Your Impact",
    author: "William MacAskill",
    publishedDate: "November 12, 2027",
    description:
      "A philosophical and practical framework for using evidence and reason to determine the best ways to help others.",
    pdfLink: "https://tiiny.host/pdf-upload/EffectiveAltruism.pdf",
  },
  {
    id: 34,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "The Science of Microbes: Our Hidden Ecosystem",
    author: "Prof. Maya Singh",
    publishedDate: "December 5, 2027",
    description:
      "Exploring the human microbiome and its profound influence on immunity, digestion, and mental health.",
    pdfLink: "https://tiiny.host/pdf-upload/MicrobiomeScience.pdf",
  },
  {
    id: 35,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "Global Trade Policy in a Post-Pandemic World",
    author: "Dr. Ken O'Malley",
    publishedDate: "January 15, 2028",
    description:
      "Analysis of shifting trade alliances, supply chain resilience, and the future of international economic cooperation.",
    pdfLink: "https://tiiny.host/pdf-upload/GlobalTrade.pdf",
  },
  {
    id: 36,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "Holographic Interfaces: Beyond the Screen",
    author: "Sara Kim",
    publishedDate: "February 28, 2028",
    description:
      "A review of emerging holographic technology and its potential applications in design, computing, and entertainment.",
    pdfLink: "https://tiiny.host/pdf-upload/HolographicInterfaces.pdf",
  },
  {
    id: 37,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "Cognitive Biases: Understanding Irrationality",
    author: "Dr. Amos Tversky",
    publishedDate: "March 20, 2028",
    description:
      "Explaining common psychological errors that influence decision-making and how to mitigate their impact.",
    pdfLink: "https://tiiny.host/pdf-upload/CognitiveBiases.pdf",
  },
  {
    id: 38,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "Renewable Hydrogen: A Key to Decarbonization",
    author: "Prof. Wei Zhang",
    publishedDate: "April 1, 2028",
    description:
      "Focus on green hydrogen production, storage, and its role as a clean fuel source for heavy industry and transport.",
    pdfLink: "https://tiiny.host/pdf-upload/RenewableHydrogen.pdf",
  },
  {
    id: 39,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "Dark Matter and Dark Energy: The Universe's Mysteries",
    author: "Dr. Chris Hadfield",
    publishedDate: "May 10, 2028",
    description:
      "A journey into the invisible components that make up $95%$ of the universe, based on modern cosmology.",
    pdfLink: "https://tiiny.host/pdf-upload/DarkMatter.pdf",
  },
  {
    id: 40,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "The Gig Economy: Labor Rights and Flexibility",
    author: "Jennifer Lopez",
    publishedDate: "June 15, 2028",
    description:
      "Examining the legal, social, and economic implications of the rise of short-term, contract-based work.",
    pdfLink: "https://tiiny.host/pdf-upload/GigEconomy.pdf",
  },
  {
    id: 41,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "Biomimicry: Nature's Designs for Innovation",
    author: "Ben Folds",
    publishedDate: "July 20, 2028",
    description:
      "How scientists and engineers are learning from biological systems to solve complex human challenges.",
    pdfLink: "https://tiiny.host/pdf-upload/BiomimicryInnovation.pdf",
  },
  {
    id: 42,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "Supply Chain Resilience in a Volatile World",
    author: "Eva Müller",
    publishedDate: "August 1, 2028",
    description:
      "Developing strategies to protect global supply chains against natural disasters, political instability, and market shocks.",
    pdfLink: "https://tiiny.host/pdf-upload/SupplyResilience.pdf",
  },
  {
    id: 43,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "Precision Agriculture: Data-Driven Farming",
    author: "Rajesh Kumar",
    publishedDate: "September 5, 2028",
    description:
      "Utilizing IoT, drones, and machine learning to optimize crop yield and minimize environmental impact.",
    pdfLink: "https://tiiny.host/pdf-upload/PrecisionAg.pdf",
  },
  {
    id: 44,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "The Science of Sound: Acoustic Engineering",
    author: "Dr. Chloe Adams",
    publishedDate: "October 10, 2028",
    description:
      "A study of how sound is produced, transmitted, and controlled in architectural design and noise reduction.",
    pdfLink: "https://tiiny.host/pdf-upload/AcousticEngineering.pdf",
  },
  {
    id: 45,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "Ancient Philosophy for Modern Leaders",
    author: "Prof. Ethan Cross",
    publishedDate: "November 20, 2028",
    description:
      "Applying timeless ethical and leadership principles from classical thinkers to contemporary business challenges.",
    pdfLink: "https://tiiny.host/pdf-upload/AncientLeadership.pdf",
  },
  {
    id: 46,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "Cyber Warfare: Geopolitics in the Digital Realm",
    author: "Major Kenji Hashimoto",
    publishedDate: "December 1, 2028",
    description:
      "Analysis of state-sponsored hacking, digital espionage, and the evolving doctrine of cyber defense.",
    pdfLink: "https://tiiny.host/pdf-upload/CyberWarfare.pdf",
  },
  {
    id: 47,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "The Future of Education: Personalized Learning Paths",
    author: "Maria Santos",
    publishedDate: "January 14, 2029",
    description:
      "Exploring how adaptive AI and data analytics are customizing curriculum and improving student outcomes.",
    pdfLink: "https://tiiny.host/pdf-upload/FutureEducation.pdf",
  },
  {
    id: 48,
    imageUrl: "https://images.unsplash.com/photo-1506748686215-1e8e2d8b1b7f",
    headline: "Regenerative Medicine: Organ Repair and Replacement",
    author: "Dr. Helen Cho",
    publishedDate: "February 1, 2029",
    description:
      "The cutting edge of tissue engineering, stem cell research, and the potential to heal damaged organs.",
    pdfLink: "https://tiiny.host/pdf-upload/RegenerativeMed.pdf",
  },
];

export default publicationData;
