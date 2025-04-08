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
    title: "£3,000 Distributed in Gaza",
    description:
      "Cash aid delivered directly to families in Gaza on 23rd Ramadan.",
    content: `
        <p>This video is confirmation of the presence of our charity, SEEDS OF GOODNESS, on the ground in Gaza, represented by our dedicated team.</p>
        <p>On the 28th day of Ramadan 2025, our team successfully distributed £3,000 worth of drinking water to families in Gaza, providing essential relief during this critical time.</p>
        <p>The distribution focused on families in urgent need, including households with children, elderly members, and individuals with health conditions. Access to clean drinking water is a vital necessity, and this aid helped address one of the most immediate needs facing many in Gaza.</p>
        <p>This vital effort was made possible through the generous support of our donors. Your contributions are being delivered directly to those in need, and this video stands as proof of our commitment to transparency and effective aid. By enabling families to receive targeted assistance, we uphold their dignity and offer hope amid immense hardship.</p>
        <p>Our local team shared that many families expressed deep gratitude for the support, with one recipient saying: "We had no clean water left. This came at the perfect time, and we are truly thankful to all who made it possible."</p>
        <p>SEEDS OF GOODNESS remains steadfast in its mission to support the people of Gaza through impactful humanitarian projects. We will continue to share updates on our aid distributions and show how your donations are making a difference.</p>
        <p>We are still collecting donations via cash or bank transfer. If you're unable to donate, please help by sharing this message — you will receive the same reward as the donors, إن شالله.</p>
      `,
    date: "Ramadan 23, 2025",
    image: "/seedofg-pic1.jpg",
    video: "https://www.youtube.com/embed/aspeHy7lAe4?si=PGcvS896OOcPv6vZ",
    author: "Seeds of Goodness Team",
    tags: ["Gaza", "Emergency Relief", "Ramadan", "Cash Aid"],
  },
  "emergency-food-distribution": {
    id: "emergency-food-distribution",
    title: "£6,000 Distributed in Gaza",
    description:
      "Our team delivered essential food supplies to families in Gaza.",
    content: `
        <p>This video is confirmation of the presence of our charity, SEEDS OF GOODNESS, on the ground in Gaza, represented by our dedicated team.</p>
        <p>On the 21th day of Ramadan 2025, our team successfully distributed £6,000 worth of drinking water to families in Gaza, providing essential relief during this critical time.</p>
        <p>The distribution focused on families in urgent need, including households with children, elderly members, and individuals with health conditions. Access to clean drinking water is a vital necessity, and this aid helped address one of the most immediate needs facing many in Gaza.</p>
        <p>This vital effort was made possible through the generous support of our donors. Your contributions are being delivered directly to those in need, and this video stands as proof of our commitment to transparency and effective aid. By enabling families to receive targeted assistance, we uphold their dignity and offer hope amid immense hardship.</p>
        <p>Our local team shared that many families expressed deep gratitude for the support, with one recipient saying: "We had no clean water left. This came at the perfect time, and we are truly thankful to all who made it possible."</p>
        <p>SEEDS OF GOODNESS remains steadfast in its mission to support the people of Gaza through impactful humanitarian projects. We will continue to share updates on our aid distributions and show how your donations are making a difference.</p>
        <p>We are still collecting donations via cash or bank transfer. If you're unable to donate, please help by sharing this message — you will receive the same reward as the donors, إن شالله.</p>
      `,
    date: "Ramadan 21, 2025",
    image: "/seedofg-pic1.jpg",
    video: "https://www.youtube.com/embed/_7L8L7LKwn4?si=bDgbfR3-rOBtR7V0",
    author: "Seeds of Goodness Team",
    tags: ["Gaza", "Food Security", "Emergency Relief"],
  },
  "medical-aid-gaza": {
    id: "medical-aid-gaza",
    title: "Medical Aid Reaches Gaza",
    description:
      "Essential medical supplies delivered to healthcare facilities in Gaza.",
    content: `
        <p>This video is confirmation of the presence of our charity, SEEDS OF GOODNESS, on the ground in Gaza, represented by our dedicated team.</p>
        <p>The distribution focused on families in urgent need, including households with children, elderly members, and individuals with health conditions. Access to clean drinking water is a vital necessity, and this aid helped address one of the most immediate needs facing many in Gaza.</p>
        <p>This vital effort was made possible through the generous support of our donors. Your contributions are being delivered directly to those in need, and this video stands as proof of our commitment to transparency and effective aid. By enabling families to receive targeted assistance, we uphold their dignity and offer hope amid immense hardship.</p>
        <p>Our local team shared that many families expressed deep gratitude for the support, with one recipient saying: "We had no clean water left. This came at the perfect time, and we are truly thankful to all who made it possible."</p>
        <p>SEEDS OF GOODNESS remains steadfast in its mission to support the people of Gaza through impactful humanitarian projects. We will continue to share updates on our aid distributions and show how your donations are making a difference.</p>
        <p>We are still collecting donations via cash or bank transfer. If you're unable to donate, please help by sharing this message — you will receive the same reward as the donors, إن شالله.</p>
     `,
    date: "Ramadan 20, 2025",
    image: "/seedofg-pic1.jpg",
    video: "https://www.youtube.com/embed/9Ap8qz9Lcsk?si=X_zh1H056y3bIkIJ",
    author: "Seeds of Goodness Team",
    tags: ["Gaza", "Medical Aid", "Healthcare", "Emergency Relief"],
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
