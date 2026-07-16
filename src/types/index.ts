export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SkillProps {
  title: string;
  image: string;
}

export interface SkillGroupProps {
  label: string;
  items: SkillProps[];
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  teachingExperience: ExperienceProps[];
  achievements: AchievementProps[];
  skills: SkillGroupProps[];
  projects: ProjectProps[];
  posts: PostProps[];
  about: AboutProps;
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface AchievementProps {
  title: string;
  issuer?: string;
  date?: string;
  description?: string;
  link?: string;
  image: string;
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string;
  linkPreview?: string;
  linkSource?: string;
}

export interface PostProps {
  title: string;
  excerpt: string;
  image: string;
  hoverImage?: string | string[];
  link?: string;
  tags: string[];
  date: string;
}

export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutProps {
  description: string;
  image: string;
  stats?: AboutStat[];
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}
