/**
 * Data for news articles
 * This centralized data store makes it easy to manage all news content
 */

export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  content: string;
  date: string;
  image: string;
  video?: string;
  author?: string;
  tags?: string[];
}

export const newsData: Record<string, NewsArticle> = {
  "ramadan-distribution-gaza": {
    id: "ramadan-distribution-gaza",
    title: "£6,000 Distributed in Gaza",
    description:
      "Cash aid delivered directly to families in Gaza during Ramadan.",
    content: `
        <p>Our team on the ground in Gaza successfully distributed £6,000 in cash aid to families in need on the 21st day of Ramadan, providing essential support during this difficult time.</p>
        
        <p>The distribution targeted the most vulnerable families, including those with elderly members, children, and individuals with disabilities. Each family received financial assistance to help cover their basic needs, including food, medicine, and other essentials.</p>
        
        <p>This distribution was made possible through the generous donations of our supporters, who continue to stand in solidarity with the people of Gaza during this humanitarian crisis. The cash aid approach allows families to prioritize their most urgent needs, providing them with dignity and agency during these challenging times.</p>
        
        <p>Our local team reported that many families expressed profound gratitude for the support, with one recipient sharing: "This assistance came at a critical time when we had almost nothing left. It will help us secure food and medicine for our children for the coming weeks."</p>
        
        <p>Seeds of Goodness remains committed to supporting the people of Gaza through ongoing humanitarian aid efforts. We will continue to provide regular updates on our distributions and the impact of your donations.</p>
        
        <p>We extend our heartfelt thanks to all our donors who made this distribution possible. Your generosity continues to make a real difference in the lives of those facing extreme hardship.</p>
      `,
    date: "Ramadan 21, 2024",
    image: "/seedofg-pic1.jpg",
    video: "https://www.youtube.com/embed/aspeHy7lAe4?si=PGcvS896OOcPv6vZ",
    author: "Seeds of Goodness Team",
    tags: ["Gaza", "Emergency Relief", "Ramadan", "Cash Aid"],
  },
  "emergency-food-distribution": {
    id: "emergency-food-distribution",
    title: "Emergency Food Distribution",
    description:
      "Our team delivered essential food supplies to families in Gaza.",
    content: `
        <p>Through the generous support of our donors, we were able to provide nutritious food packages to hundreds of families facing severe food insecurity in Gaza.</p>
        
        <p>The food packages contained essential items such as rice, flour, oil, canned goods, dates, and other non-perishable items that can sustain a family for several weeks. Each package was designed to meet the nutritional needs of a family of five, with special consideration for the dietary requirements of children and the elderly.</p>
        
        <p>Our distribution team worked tirelessly to ensure that the aid reached those most in need, including families in areas with limited access to markets and food supplies. The distribution was conducted in coordination with local community leaders to identify the most vulnerable households.</p>
        
        <p>"We haven't had a proper meal in days," shared one mother of four who received a food package. "This food will help us survive for the next few weeks. We are grateful for everyone who contributed to this aid."</p>
        
        <p>The ongoing crisis in Gaza has severely impacted food security, with many families struggling to access even basic necessities. Our emergency food distributions aim to address this critical need while we continue to work on more sustainable solutions.</p>
        
        <p>We remain committed to supporting the people of Gaza during this difficult time and will continue our efforts to provide essential aid to those in need. Your continued support makes these distributions possible, and we are deeply grateful for your generosity.</p>
      `,
    date: "April 8, 2024",
    image: "/seedofg-pic1.jpg",
    video: "https://www.youtube.com/embed/aspeHy7lAe4?si=PGcvS896OOcPv6vZ",
    author: "Seeds of Goodness Team",
    tags: ["Gaza", "Food Security", "Emergency Relief"],
  },
  "medical-aid-gaza": {
    id: "medical-aid-gaza",
    title: "Medical Aid Reaches Gaza",
    description:
      "Essential medical supplies delivered to healthcare facilities in Gaza.",
    content: `
        <p>Our team successfully delivered critical medical supplies to healthcare facilities in Gaza, helping to address the urgent medical needs of the population during the ongoing crisis.</p>
        
        <p>The medical aid included essential medications, surgical supplies, first aid kits, and specialized equipment needed to treat injuries and manage chronic conditions. These supplies were distributed to several healthcare facilities across Gaza, including hospitals and community clinics that are struggling to meet the overwhelming healthcare needs of the population.</p>
        
        <p>Healthcare workers in Gaza have been working under extremely challenging conditions, with shortages of medical supplies, electricity, and clean water. Our delivery aims to support their heroic efforts and help ensure that patients can receive the care they desperately need.</p>
        
        <p>"These medical supplies are literally saving lives," explained Dr. Ahmed, a physician at one of the recipient hospitals. "We were running critically low on essential medications and surgical supplies. This delivery will help us continue providing care to our patients."</p>
        
        <p>The healthcare system in Gaza has been severely strained by the ongoing crisis, with many facilities damaged or destroyed and those still operating facing overwhelming numbers of patients. Our medical aid program aims to support these facilities in providing essential healthcare services to the population.</p>
        
        <p>We remain committed to supporting healthcare in Gaza and will continue our efforts to deliver medical supplies to those in need. Your donations make these deliveries possible, and we are deeply grateful for your support.</p>
      `,
    date: "April 1, 2024",
    image: "/seedofg-pic1.jpg",
    video: "https://www.youtube.com/embed/aspeHy7lAe4?si=PGcvS896OOcPv6vZ",
    author: "Seeds of Goodness Team",
    tags: ["Gaza", "Medical Aid", "Healthcare", "Emergency Relief"],
  },
  "water-project-completed": {
    id: "water-project-completed",
    title: "Clean Water Project Completed",
    description:
      "New water well provides clean water to a community of 500 people.",
    content: `
        <p>We're thrilled to announce the completion of our latest clean water project, which now provides safe drinking water to a community of 500 people who previously had to walk several kilometers each day to access water.</p>
        
        <p>The project involved drilling a deep well, installing a solar-powered pump system, and constructing a water distribution point that allows community members to easily access clean water. The solar power system ensures that the water supply is sustainable and not dependent on unreliable electricity grids or expensive fuel.</p>
        
        <p>Access to clean water has immediate and far-reaching benefits for communities. It reduces waterborne diseases, allows children to attend school instead of spending hours collecting water, and gives women more time for education and income-generating activities.</p>
        
        <p>"This water well has changed our lives," said Fatima, a community leader. "Before, our children were often sick from drinking contaminated water, and women spent hours each day walking to collect water. Now, we have clean water right in our village."</p>
        
        <p>In addition to constructing the well, our team provided training on water management and hygiene practices to ensure the long-term sustainability of the project. A local committee has been established to oversee the maintenance of the well and ensure equitable access for all community members.</p>
        
        <p>This project was made possible through the generous donations of our supporters. Your contributions are making a tangible difference in the lives of communities around the world, and we are deeply grateful for your support.</p>
      `,
    date: "March 15, 2024",
    image: "/seedofg-pic1.jpg",
    author: "Seeds of Goodness Team",
    tags: ["Water", "Development", "Community"],
  },
  "education-program-launch": {
    id: "education-program-launch",
    title: "New Education Program Launched",
    description:
      "Supporting education for children affected by conflict and poverty.",
    content: `
        <p>Seeds of Goodness is proud to announce the launch of our new Education Support Program, aimed at providing educational opportunities for children affected by conflict and poverty.</p>
        
        <p>Education is a fundamental right and a powerful tool for breaking the cycle of poverty. However, in many conflict-affected areas, children face significant barriers to accessing quality education. Our new program aims to address these challenges through a comprehensive approach.</p>
        
        <p>The program includes:</p>
        
        <ul>
          <li>Provision of school supplies and educational materials</li>
          <li>Support for teacher training and development</li>
          <li>Rehabilitation of damaged school buildings</li>
          <li>Scholarships for vulnerable children</li>
          <li>Psychosocial support for trauma-affected students</li>
        </ul>
        
        <p>We've already begun implementing the program in several communities, with plans to expand to more areas in the coming months. Our initial focus is on communities in Gaza where educational infrastructure has been severely impacted by the ongoing conflict.</p>
        
        <p>"Education gives children hope for the future, even in the most difficult circumstances," said our Education Program Coordinator. "By supporting education, we're not just helping individual children – we're investing in the future of entire communities."</p>
        
        <p>We invite our supporters to join us in this important initiative. Your donations will help provide educational opportunities for children who might otherwise be denied this fundamental right.</p>
      `,
    date: "February 28, 2024",
    image: "/seedofg-pic1.jpg",
    author: "Seeds of Goodness Team",
    tags: ["Education", "Children", "Development"],
  },
};

/**
 * Get all news articles
 * @returns Array of all news articles
 */
export function getAllNews(): NewsArticle[] {
  return Object.values(newsData);
}

/**
 * Get a specific news article by ID
 * @param id - The article ID
 * @returns The news article or undefined if not found
 */
export function getNewsById(id: string): NewsArticle | undefined {
  return newsData[id];
}

/**
 * Get recent news articles
 * @param limit - Maximum number of articles to return
 * @returns Array of recent news articles
 */
export function getRecentNews(limit = 3): NewsArticle[] {
  // Sort by date (newest first) and return the specified number of articles
  return Object.values(newsData)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

/**
 * Get news articles by tag
 * @param tag - The tag to filter by
 * @returns Array of news articles with the specified tag
 */
export function getNewsByTag(tag: string): NewsArticle[] {
  return Object.values(newsData).filter((article) =>
    article.tags?.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}
