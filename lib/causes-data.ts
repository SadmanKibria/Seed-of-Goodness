/**
 * Data for charity causes
 */

export interface Cause {
  id: string;
  title: string;
  description: string;
  image: string;
  width: number;
  height: number;
  raised: number;
  goal: number;
  isUrgent: boolean;
  content: string;
  category: "emergency" | "water" | "food" | "medical" | "others";
}

// 📋 Updated Causes
export const causesData: Record<string, Cause> = {
  food: {
    id: "food",
    title: "Food Project for Gaza",
    description:
      "Providing emergency food supplies to families in desperate need across Gaza.",
    image: "/pics/7.png",
    width: 640,
    height: 427,
    raised: 35000,
    goal: 50000,
    isUrgent: true,
    category: "food",
    content: `
      <p>Due to the ongoing crisis in Gaza, countless families are going days without proper meals. Through your generous support, our teams are distributing vital food parcels containing rice, flour, lentils, cooking oil and essentials to those facing hunger daily.</p>
      
      <p>Your donation helps a mother feed her children and restores hope where hope is fading. Every package delivered is a lifeline for a family struggling to survive. Together, we can ensure no family sleeps hungry tonight.</p>
    `,
  },
  water: {
    id: "water",
    title: "Clean Water Project",
    description:
      "Delivering clean and safe drinking water to the people of Gaza.",
    image: "/pics/17.png",
    width: 640,
    height: 427,
    raised: 8000,
    goal: 20000,
    isUrgent: false,
    category: "water",
    content: `
      <p>Clean water is a basic human right, yet thousands in Gaza have limited or no access to safe drinking water. Our initiative focuses on setting up clean water tanks, filtration units and emergency bottled water distributions in the worst-affected areas.</p>
      
      <p>Waterborne diseases are a growing threat. Your donation can provide a child with clean drinking water, helping prevent sickness and improving overall community health. Together, we can bring the gift of life through every drop.</p>
    `,
  },
  medical: {
    id: "medical",
    title: "Emergency Medical Aid",
    description:
      "Providing essential medical supplies and healthcare support in Gaza.",
    image: "/pics/3.png",
    width: 640,
    height: 427,
    raised: 10000,
    goal: 25000,
    isUrgent: true,
    category: "medical",
    content: `
      <p>Hospitals and clinics in Gaza are overwhelmed with injured civilians and those suffering from chronic illnesses. Medical supplies are running dangerously low.</p>
      
      <p>Through your donations, we are supplying emergency medicine, bandages, surgical kits and mobile medical units to areas with no access to hospitals. Help us provide urgent care to the wounded, the sick and those whose lives depend on immediate treatment.</p>
    `,
  },
  others: {
    id: "others",
    title: "Other Humanitarian Support",
    description:
      "Supporting shelter, clothing, hygiene, and urgent needs in Gaza.",
    image: "/pics/1.png",
    width: 640,
    height: 427,
    raised: 10000,
    goal: 15000,
    isUrgent: false,
    category: "others",
    content: `
      <p>Alongside food, water and medical aid, thousands require basic necessities like warm clothing, hygiene kits and emergency shelter materials.</p>
      
      <p>Your contribution supports widowed mothers, orphaned children and families left homeless. From tents to soap, blankets to dignity kits every donation brings relief, restores dignity and reminds them they are not forgotten by the world.</p>
    `,
  },
};

/**
 * Get all causes
 */
export function getAllCauses(): Cause[] {
  return Object.values(causesData);
}

/**
 * Get a specific cause by ID
 */
export function getCauseById(id: string): Cause | undefined {
  return causesData[id];
}

/**
 * Get featured causes
 */
export function getFeaturedCauses(limit = 3): Cause[] {
  return Object.values(causesData).slice(0, limit);
}

/**
 * Get urgent causes (if any)
 */
export function getUrgentCauses(): Cause[] {
  return Object.values(causesData).filter((cause) => cause.isUrgent);
}

/**
 * Get causes by category
 */
export function getCausesByCategory(category: string): Cause[] {
  return Object.values(causesData).filter(
    (cause) => cause.category === category
  );
}
