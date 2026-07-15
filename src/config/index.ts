import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Abdullah Moustafa — Business Intelligence Lead",
  author: "Abdullah Moustafa",
  description:
    "Business Analytics Lead specializing in transforming data into actionable insights through BI, analytics, and AI technologies.",
  lang: "en",
  siteLogo: "/small-pp.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Training & Mentorship", href: "#teaching" },
    { text: "Achievements", href: "#achievements" },
    { text: "Insights", href: "#insights" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/abdullah-moustafa" },
    { text: "Github", href: "https://github.com/abdullahmoustafa" },
  ],
  socialImage: "/small-pp.png",
  canonicalURL: "https://abdullahmoustafa.vercel.app/",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Abdullah Moustafa",
    specialty: "Business Intelligence Lead",
    summary:
      "Business Analytics Lead specializing in transforming data into actionable insights through BI, analytics, and AI technologies.",
    email: "abdullahmoustafa03@gmail.com",
  },
  experience: [
    {
      company: "DataScience ME",
      position: "BI Lead",
      startDate: "March 2025",
      endDate: "Current",
      summary: [
  "Delivered high-impact BI and analytics solutions across healthcare, fintech, and government sectors, transforming complex data into actionable business insights.",
  "Led and developed a BI team, driving technical excellence, delivery quality, and alignment between analytics capabilities and business objectives.",
  "Partnered with stakeholders to define requirements, shape analytics roadmaps, and deliver data-driven solutions aligned with strategic goals.",
  "Identified and implemented AI and BI initiatives from concept to deployment, enabling smarter decision-making through advanced analytics and automation.",
  "Bridged the gap between data, technology, and business strategy to maximize the impact of analytics investments.",
  "Successfully led 18+ BI projects and delivered 5+ PoCs and executive demos across banking, healthcare, and government domains."
],
    },
    {
      company: "Vodafone International Services",
      position: "Senior BI Engineer",
      startDate: "July 2024",
      endDate: "July 2025",
      summary: [
  "Managed data models and developed interactive dashboards using Tableau Desktop and Server to deliver actionable insights.",
  "Leveraged GCP BigQuery, SQL, and Python for data extraction, transformation, and scalable data warehousing solutions.",
  "Built and optimized data models and transformations using dbt, ensuring reliable analytics pipelines.",
  "Led BI Engine POCs on GCP to improve dashboard performance and optimize cloud costs.",
  "Translated business requirements into scalable reporting solutions while ensuring data governance and architecture standards."
],
    },
    {
      company: "Telecom Egypt",
      position: "Senior Data Analyst",
      startDate: "April 2023",
      endDate: "March 2024",
      summary:[
  "Analyzed CX data and complaints to drive quality improvements and enhance customer satisfaction through data-driven initiatives.",
  "Developed automated dashboards and reports using Tableau, Power BI, and Python to provide actionable insights across customer segments.",
  "Built databases and automation tools to streamline workflows, improve data accuracy, and increase operational efficiency.",
  "Performed data cleaning, analysis, and visualization using Python, Pandas, Matplotlib, Tableau, Power BI, and Excel.",
  "Developed CX mapping solutions using Python and KML layers to identify service gaps and improve customer experience."
],},

{
      company: "Vodafone Egypt",
      position: "Data Analyst",
      startDate: "November 2022",
      endDate: "April 2023",
      summary:[
  "Developed performance dashboards to monitor network traffic, throughput, and operational KPIs across multiple locations.",
  "Performed ad-hoc data analysis to evaluate performance trends and measure the impact of operational improvements.",
  "Created automated monitoring dashboards for tracking KPIs, alerts, and data-driven insights.",
  "Developed data processing tools using Python, Pandas, and XLSX Writer to automate data generation and reporting workflows."
],},

    {
      company: "Etisalat e&",
      position: "Jr Data Analyst",
      startDate: "November 2020",
      endDate: "November 2022",
      summary:[
  "Analyzed large-scale network performance data to identify trends, optimize KPIs, and support data-driven decisions.",
  "Built reports and dashboards to translate technical metrics into business insights for stakeholders.",
  "Maintained and audited RF databases, ensuring data quality, accuracy, and consistency.",
  "Developed automation tools using data processing techniques to improve reporting and operational efficiency."
],}

  ],
  teachingExperience: [
    {
      company: "MICT - Digital Egypt Pioneers Initiative - DEPI",
      position: "Data Analytics & BI Engineering Session Lead",
      startDate: "Sep 2024",
      endDate: "Present",
      summary: [
        "Delivered Data Analytics and BI Engineering sessions for a national talent development initiative.",
        "Lead Lecturer for R2, R4, and R5 (6-month cohorts) — Cairo and remote instruction.",
      ],
    },
    {
      company: "Atomcamp Arabia",
      position: "AI & Data Analytics Lecturer",
      startDate: "Nov 2025",
      endDate: "Present",
      summary: [
        "Lectures, seminars, and training in AI & Data Analytics, equipping students and graduates with practical, industry-ready skills.",
        "Remote part-time teaching role secured through LinkedIn networking and professional visibility.",
      ],
    },
  ],
  achievements: [
    {
      title: "Databricks",
      issuer: "Badge",
      image: "/badges/databricks.png",
      link: "https://credentials.databricks.com/ec5c9e37-0b04-450f-bad2-d54a33195c23",
    },
    {
      title: "Google",
      issuer: "Badge",
      image: "/badges/google.png",
    },
    {
      title: "SAS",
      issuer: "Badge",
      image: "/badges/sas.png",
      link: "https://www.credly.com/badges/be4720ee-85c2-4eda-86de-b2009f7f1ce3",
    },
    {
      title: "Tableau",
      issuer: "Badge",
      image: "/badges/tableau.png",
      link: "https://www.linkedin.com/in/abdullah-moustafa/overlay/1760099226554/single-media-viewer?profileId=ACoAACL8oG8BrMStnx6pzZQcGB84ULgsGx2CwtE",
    },
    {
      title: "Cloudera",
      issuer: "Badge",
      image: "/badges/cloudera.png",
      link: "https://www.credly.com/badges/86a67431-3e62-4fed-bb21-eb901ef7e9c3",
    },
    {
      title: "dbt",
      issuer: "Badge",
      image: "/badges/dbt.png",
    },
  ],
  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  posts: [
    {
      title: "AI in BI Podcast with Cycls Square",
      excerpt:
        "Episode 3 of Cycls Square explores how BI now anticipates questions, shifts analysts to strategic roles, and blends classical models with modern AI for real business impact.",
      image: "/blogs/blog3.jpg",
      link: "https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fyoutu.be%2F8ahzWnJgLHU%3Fsi%3DcmZfgRJB5zE_4Gl9&urlhash=heJP&mt=yH5yKZHk3x1B2pOJm8czB8axMie6sls7_Nyq-4Pq-lN9u6B-lPKUo4tYr0Brr0eNuvT95VF8Cf7bmJnNOoNBPnMzAcbkHM_4Ukg6HRKfsyGagsnviG-aLu6SGcP_8925xzVC0jgt5ymPOG68Wu8LytztExdQviNURw&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3BNpWjmXdGTFeDPEaZ3Dit4Q%3D%3D",
      tags: ["AI", "BI", "Video"],
      date: "2026",
    },
    {
      title: "Agentic Analytics: The Next Evolution in Data-Driven Decision Making",
      excerpt:
        "Agentic analytics turns BI into proactive action by using AI agents to observe outcomes, interpret context, and trigger intelligent responses while keeping human judgment central.",
      image: "/blogs/blog1.png",
      link: "https://www.linkedin.com/pulse/agentic-analytics-next-evolution-data-driven-decision-moustafa-lhvnf/",
      tags: ["AgenticAnalytics", "BI", "AI"],
      date: "2026",
    },
    {
      title: "Benchmarking Forecasting Models for Government Financial Time-Series",
      excerpt:
        "A UAE Ministry of Finance benchmarking study shows ETS and ARIMA as reliable choices for medium-sized quarterly government financial forecasts, while ML/DL methods may need larger datasets.",
      image: "/blogs/blog2.png",
      link: "https://www.linkedin.com/pulse/benchmarking-forecasting-models-government-financial-moustafa-l1o6f/",
      tags: ["Forecasting", "Government"],
      date: "2026",
    },
    {
      title: "Embed a RAG chatbot in dashboards",
      excerpt:
        "Built a local RAG chatbot for UAE economic indicators with two retrievers over the warehouse and public knowledge base, delivering cited answers from SQL, benchmarks, and domain context.",
      image: "/blogs/blog4.jpg",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7463883476589666304/",
      tags: ["RAG", "BI", "Analytics"],
      date: "2026",
    },
  ],
  about: {
    description: [
      "Business Intelligence Lead with an engineering foundation, driving digital transformation and AI-powered, data-driven strategies across global markets.",
      "Cross-industry experience spanning Healthcare, Telecom, Customer Experience, Fintech, and Quality Assurance.",
      "Skilled across the full data analysis lifecycle—from defining business objectives to delivering insights that shape strategic decisions.",
      "Experienced in applying AI and machine learning—including predictive modeling, forecasting, NLP, generative AI, and LLM-based solutions—to solve complex business problems.",
      "Process optimization and talent development advocate—2,500+ hours of AI and data analytics training delivered.",
      "M.Sc. in Data Science & AI candidate.",
    ].join('\n\n'),
    image: "/AbdullahMoustafa-nobg.png",
  },
};

// #5755ff
