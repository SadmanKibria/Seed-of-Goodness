/**
 * Data for charity causes
 * This centralized data store makes it easy to manage all cause information
 */

export interface Cause {
  id: string;
  title: string;
  description: string;
  image: string;
  raised: number;
  goal: number;
  isUrgent: boolean;
  content: string;
  category:
    | "emergency"
    | "water"
    | "food"
    | "medical"
    | "education"
    | "shelter";
}

export const causesData: Record<string, Cause> = {
  gaza: {
    id: "gaza",
    title: "Gaza Emergency Relief",
    description:
      "Providing essential aid to families affected by the humanitarian crisis in Gaza.",
    image:
      "https://images.unsplash.com/photo-1603796846097-bee99e4a601f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    raised: 245000,
    goal: 500000,
    isUrgent: true,
    category: "emergency",
    content: `
        <p>The humanitarian crisis in Gaza has left thousands of families without access to basic necessities. Our Gaza Emergency Relief program aims to provide immediate assistance to those most affected by the ongoing conflict.</p>
        
        <p>Through your generous donations, we are able to deliver:</p>
        
        <ul>
          <li>Emergency food packages to families facing food insecurity</li>
          <li>Clean drinking water and hygiene supplies</li>
          <li>Medical aid and essential medications</li>
          <li>Temporary shelter and blankets for displaced families</li>
          <li>Psychological support for children and adults</li>
        </ul>
        
        <p>Our team is on the ground in Gaza, working directly with local partners to ensure that aid reaches those who need it most. We maintain a 100% donation policy, meaning every penny you donate goes directly to supporting those in need.</p>
        
        <p>The situation in Gaza remains critical, with thousands of families still in desperate need of assistance. Your donation, no matter how small, can make a significant difference in the lives of those affected by this crisis.</p>
      `,
  },
  water: {
    id: "water",
    title: "Clean Water Initiative",
    description:
      "Building wells and water systems in areas suffering from water scarcity.",
    image:
      "https://images.unsplash.com/photo-1594789020554-458e5c6a0dae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    raised: 120000,
    goal: 200000,
    isUrgent: false,
    category: "water",
    content: `
        <p>Access to clean water is a fundamental human right, yet millions of people around the world still lack this basic necessity. Our Clean Water Initiative aims to address this critical issue by building sustainable water systems in communities suffering from water scarcity.</p>
        
        <p>Through this program, we:</p>
        
        <ul>
          <li>Construct wells and water points in villages without access to clean water</li>
          <li>Install water filtration systems to ensure water safety</li>
          <li>Provide water storage solutions for communities</li>
          <li>Educate communities on water conservation and hygiene practices</li>
          <li>Implement sustainable water management systems</li>
        </ul>
        
        <p>Clean water transforms communities by improving health, enabling education, and creating opportunities for economic development. When people no longer have to spend hours each day collecting water from distant sources, they can focus on education, work, and building better futures for their families.</p>
        
        <p>Your donation to our Clean Water Initiative will help us reach more communities and provide sustainable access to clean water for generations to come.</p>
      `,
  },
  food: {
    id: "food",
    title: "Food Security Program",
    description:
      "Distributing food packages to families facing hunger and food insecurity.",
    image:
      "https://images.unsplash.com/photo-1584263347416-85a696b4eda7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    raised: 70000,
    goal: 120000,
    isUrgent: false,
    category: "food",
    content: `
        <p>Hunger and malnutrition affect millions of people worldwide, with devastating consequences for health, education, and development. Our Food Security Program aims to address immediate hunger needs while also supporting long-term food security solutions.</p>
        
        <p>Through this initiative, we provide:</p>
        
        <ul>
          <li>Emergency food packages to families facing acute hunger</li>
          <li>Nutritional supplements for malnourished children</li>
          <li>Seeds, tools, and training for sustainable agriculture</li>
          <li>Support for community gardens and farming cooperatives</li>
          <li>Education on nutrition and sustainable food production</li>
        </ul>
        
        <p>Our approach combines immediate relief with sustainable solutions, helping communities not only survive today but build food security for the future. We work closely with local partners to ensure that our programs are culturally appropriate and address the specific needs of each community.</p>
        
        <p>Your donation to our Food Security Program will help us reach more families facing hunger and support them in building sustainable food systems for the future.</p>
      `,
  },
  medical: {
    id: "medical",
    title: "Medical Aid",
    description:
      "Providing essential medical supplies and healthcare services to underserved communities.",
    image:
      "https://images.unsplash.com/photo-1631815588090-d1bcbe9a8545?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    raised: 95000,
    goal: 180000,
    isUrgent: false,
    category: "medical",
    content: `
        <p>Access to healthcare is a fundamental human right, yet millions of people around the world lack access to even basic medical services. Our Medical Aid program aims to bridge this gap by providing essential medical supplies and healthcare services to underserved communities.</p>
        
        <p>Through this initiative, we:</p>
        
        <ul>
          <li>Deliver essential medications and medical supplies to clinics in need</li>
          <li>Support mobile medical teams to reach remote communities</li>
          <li>Provide emergency medical care in crisis situations</li>
          <li>Train local healthcare workers to build sustainable capacity</li>
          <li>Conduct health education programs to prevent disease</li>
        </ul>
        
        <p>Our medical aid efforts focus on both immediate needs and long-term healthcare solutions. We work closely with local healthcare providers to ensure that our support strengthens existing systems rather than creating parallel structures.</p>
        
        <p>Your donation to our Medical Aid program will help us reach more communities with life-saving medical care and support the development of sustainable healthcare systems.</p>
      `,
  },
  hygiene: {
    id: "hygiene",
    title: "Hygiene Products",
    description:
      "Distributing essential hygiene kits to maintain health and dignity in crisis situations.",
    image:
      "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    raised: 65000,
    goal: 150000,
    isUrgent: false,
    category: "medical",
    content: `
        <p>In crisis situations, access to basic hygiene supplies is essential for preventing disease and maintaining dignity. Our Hygiene Products program provides essential hygiene kits to families affected by conflict, natural disasters, and extreme poverty.</p>
        
        <p>Each hygiene kit includes:</p>
        
        <ul>
          <li>Soap, shampoo, and toothpaste</li>
          <li>Toothbrushes and combs</li>
          <li>Sanitary products for women and girls</li>
          <li>Diapers and baby care items</li>
          <li>Hand sanitizer and disinfectant</li>
        </ul>
        
        <p>Beyond distributing hygiene supplies, we also conduct hygiene education programs to promote practices that prevent disease and improve health. This combined approach helps communities maintain health and dignity even in challenging circumstances.</p>
        
        <p>Your donation to our Hygiene Products program will help us reach more families with essential supplies and education, preventing disease and supporting dignity in crisis situations.</p>
      `,
  },
  shelter: {
    id: "shelter",
    title: "Clothing & Shelter",
    description:
      "Providing clothing and temporary shelter for displaced families.",
    image:
      "https://images.unsplash.com/photo-1469571486292-b53601010b89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    raised: 55000,
    goal: 120000,
    isUrgent: false,
    category: "shelter",
    content: `
        <p>When families are displaced by conflict or natural disasters, shelter and clothing become immediate priorities. Our Clothing & Shelter program provides essential support to families who have lost their homes and possessions.</p>
        
        <p>Through this initiative, we provide:</p>
        
        <ul>
          <li>Emergency shelter kits including tents, tarps, and basic tools</li>
          <li>Blankets and bedding for protection against the elements</li>
          <li>Seasonal clothing appropriate for local conditions</li>
          <li>Support for transitional housing solutions</li>
          <li>Household items to help families restart their lives</li>
        </ul>
        
        <p>Our approach focuses on meeting immediate needs while also supporting longer-term housing solutions where possible. We work closely with local partners to ensure that our support is culturally appropriate and meets the specific needs of each community.</p>
        
        <p>Your donation to our Clothing & Shelter program will help us reach more displaced families with the essential support they need to survive and rebuild their lives.</p>
      `,
  },
  education: {
    id: "education",
    title: "Education Support",
    description:
      "Providing educational resources and support for children in crisis-affected areas.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    raised: 85000,
    goal: 200000,
    isUrgent: false,
    category: "education",
    content: `
        <p>Education is a powerful tool for breaking the cycle of poverty and building a better future. Our Education Support program aims to ensure that children in crisis-affected areas have access to quality education despite challenging circumstances.</p>
        
        <p>Through this initiative, we provide:</p>
        
        <ul>
          <li>School supplies and educational materials for students</li>
          <li>Support for teacher training and development</li>
          <li>Rehabilitation of damaged school buildings</li>
          <li>Scholarships for vulnerable children</li>
          <li>Psychosocial support for trauma-affected students</li>
        </ul>
        
        <p>We believe that every child has the right to education, even in the most difficult circumstances. Our approach focuses on both immediate educational needs and long-term solutions that strengthen local education systems.</p>
        
        <p>Your donation to our Education Support program will help us reach more children with the educational opportunities they need to build a brighter future for themselves and their communities.</p>
      `,
  },
};

/**
 * Get all causes
 * @returns Array of all causes
 */
export function getAllCauses(): Cause[] {
  return Object.values(causesData);
}

/**
 * Get a specific cause by ID
 * @param id - The cause ID
 * @returns The cause object or undefined if not found
 */
export function getCauseById(id: string): Cause | undefined {
  return causesData[id];
}

/**
 * Get featured causes (can be customized based on criteria)
 * @param limit - Maximum number of causes to return
 * @returns Array of featured causes
 */
export function getFeaturedCauses(limit = 3): Cause[] {
  // For now, we'll just return the first few causes
  // This could be enhanced to return causes based on urgency, progress, etc.
  return Object.values(causesData).slice(0, limit);
}

/**
 * Get urgent causes
 * @returns Array of causes marked as urgent
 */
export function getUrgentCauses(): Cause[] {
  return Object.values(causesData).filter((cause) => cause.isUrgent);
}

/**
 * Get causes by category
 * @param category - The category to filter by
 * @returns Array of causes in the specified category
 */
export function getCausesByCategory(category: string): Cause[] {
  return Object.values(causesData).filter(
    (cause) => cause.category === category
  );
}
