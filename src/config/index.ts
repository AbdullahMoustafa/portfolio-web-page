import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Abdullah Moustafa — Business Intelligence Lead",
  author: "Abdullah Moustafa",
  description:
    "Business Analytics Lead specializing in transforming data into actionable insights through BI, analytics, and AI technologies.",
  lang: "en",
  siteLogo: "/abdullahmoustafa.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/abdullah-moustafa" },
    { text: "Github", href: "https://github.com/abdullahmoustafa" },
  ],
  socialImage: "/zen-og.png",
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
  about: {
    description: `
      Hi, I’m Abdullah Moustafa, a Business Analytics Lead passionate about transforming data into strategic business value. With an engineering foundation and expertise in business intelligence, data analytics, and AI, I specialize in designing data-driven solutions that enable organizations to make smarter decisions and drive digital transformation.

      Throughout my career, I have worked across multiple industries, including Healthcare, Telecom, Customer Experience, Fintech, and Quality Assurance, delivering analytics solutions that connect business objectives with measurable outcomes. I specialize in the full data analytics lifecycle, from understanding business challenges and defining requirements to building dashboards, analytical models, and insights that support strategic decision-making.

      My technical expertise spans the modern analytics ecosystem, including Python, R, and SQL for data analysis, along with Tableau, Power BI, Looker, and SAS Visual Analytics for data visualization and reporting. I also leverage AI and machine learning techniques such as predictive modeling, forecasting, NLP, Generative AI, and LLM-based solutions to solve complex business problems and create intelligent analytics solutions.

      Experienced with cloud and big data platforms including GCP, SAS, Databricks, and Cloudera, I focus on building scalable and efficient data solutions. Beyond technology, I am passionate about process optimization and developing future talent, having delivered 2,500+ hours of AI and data analytics training. I am currently pursuing an M.Sc. in Data Science & AI to further expand my expertise in advanced analytics and intelligent systems.
    `,
    image: "/abdullahmoustafa.jpg",
  },
};

// #5755ff
