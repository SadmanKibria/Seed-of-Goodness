// /lib/news-data.ts

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
      "Cash aid delivered directly to families in Gaza during Ramadan.",
    content: `
      <p>Seeds of Goodness distributed £3,000 worth of clean water and essential supplies to vulnerable families on the 23rd day of Ramadan 2025.</p>
      <p>This effort brought immediate relief to families with young children, the elderly and people with health conditions during a critical time.</p>
      <p>Thanks to our donors, your support continues to create real impact on the ground in Gaza. May Allah reward you all.</p>
    `,
    date: "2025-03-23",
    image: "/seedofg-pic1.jpg",
    video: "https://www.youtube.com/embed/aspeHy7lAe4?si=PGcvS896OOcPv6vZ",
    author: "Seeds of Goodness Team",
    tags: ["Gaza", "Emergency Relief", "Ramadan"],
  },
  "emergency-food-distribution": {
    id: "emergency-food-distribution",
    title: "£6,000 Cash Distribution Aid",
    description: "Cash distributed to families in urgent need across Gaza.",
    content: `
      <p>On Ramadan 21st, our Seeds of Goodness team distributed £6,000 worth of nutritious food packs to those facing hunger during the humanitarian crisis in Gaza.</p>
      <p>Each food pack contained essentials for families, helping sustain them during Ramadan and beyond.</p>
      <p>Your donations truly save lives. Thank you for your support.</p>
    `,
    date: "2025-03-21",
    image: "/seedofg-pic1.jpg",
    video: "https://www.youtube.com/embed/_7L8L7LKwn4?si=bDgbfR3-rOBtR7V0",
    author: "Seeds of Goodness Team",
    tags: ["Gaza", "Food Security", "Emergency"],
  },
  "emergency-food-distribution11April2025": {
    id: "emergency-food-distribution11April2025",
    title: "£3,000 Water Distribution Aid",
    description: "Water distributed to families in urgent need across Gaza.",
    content: `
      <p>On 23rd April, our Seeds of Goodness team distributed £3,000 worth of water during the humanitarian crisis in Gaza.</p>
      <p>Each water pack contained essentials for families, helping sustain them during Ramadan and beyond.</p>
      <p>Your donations truly save lives. Thank you for your support.</p>
    `,
    date: "2025-03-23",
    image: "/seedofg-pic1.jpg",
    video: "https://www.youtube.com/embed/6i8yyzRUtB8?si=s9YaArJQOpMZSRsL",
    author: "Seeds of Goodness Team",
    tags: ["Gaza", "Food Security", "Emergency"],
  },
  "medical-aid-gaza": {
    id: "medical-aid-gaza",
    title: "Medical Supplies Reached Gaza",
    description: "Vital medicines and supplies delivered to Gaza's hospitals.",
    content: `
      <p>Thanks to your generous donations, essential medical aid reached hospitals and clinics across Gaza, supporting doctors on the frontlines.</p>
      <p>In a region where healthcare is overwhelmed, every box of supplies is a lifeline.</p>
      <p>May Allah accept your contribution towards saving lives. Ameen.</p>
    `,
    date: "2025-03-20",
    image: "/seedofg-pic1.jpg",
    video: "https://www.youtube.com/embed/9Ap8qz9Lcsk?si=X_zh1H056y3bIkIJ",
    author: "Seeds of Goodness Team",
    tags: ["Gaza", "Medical Aid", "Healthcare"],
  },
};

// Helpers
export function getAllNews(): NewsArticle[] {
  return Object.values(newsData);
}

export function getNewsById(id: string): NewsArticle | undefined {
  return newsData[id];
}

export function getRecentNews(limit = 3): NewsArticle[] {
  return Object.values(newsData)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}
