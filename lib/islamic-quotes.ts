/**
 * Collection of Islamic quotes that will be displayed randomly throughout the website
 * These quotes provide spiritual inspiration and reinforce the charitable mission
 */
export const islamicQuotes = [
  {
    arabic: "وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا",
    english:
      "And whoever saves a life, it will be as if they saved all of humanity",
    source: "Quran 5:32",
  },
  {
    arabic:
      "إِنَّمَا يُرِيدُ اللَّهُ لِيُذْهِبَ عَنكُمُ الرِّجْسَ أَهْلَ الْبَيْتِ وَيُطَهِّرَكُمْ تَطْهِيرًا",
    english:
      "Allah intends only to remove from you the impurity [of sin], O people of the [Prophet's] household, and to purify you with [extensive] purification",
    source: "Quran 33:33",
  },
  {
    arabic: "وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ",
    english:
      "And We have not sent you, [O Muhammad], except as a mercy to the worlds",
    source: "Quran 21:107",
  },
  {
    arabic: "إِنَّ اللَّهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ",
    english:
      "Indeed, Allah does not allow to be lost the reward of those who do good",
    source: "Quran 9:120",
  },
  {
    arabic: "وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ",
    english: "And cooperate in righteousness and piety",
    source: "Quran 5:2",
  },
  {
    arabic:
      "مَنْ تَصَدَّقَ بِعَدْلِ تَمْرَةٍ مِنْ كَسْبٍ طَيِّبٍ وَلاَ يَقْبَلُ اللَّهُ إِلاَّ الطَّيِّبَ",
    english:
      "Whoever gives charity equal to a date from good (halal) earnings – for Allah does not accept anything but that which is good",
    source: "Sahih al-Bukhari",
  },
  {
    arabic:
      "الصَّدَقَةُ تُطْفِئُ الْخَطِيئَةَ كَمَا يُطْفِئُ الْمَاءُ النَّارَ",
    english: "Charity extinguishes sin as water extinguishes fire",
    source: "Sunan Ibn Majah",
  },
  {
    arabic:
      "مَثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنبَتَتْ سَبْعَ سَنَابِلَ",
    english:
      "The example of those who spend their wealth in the way of Allah is like a seed that grows seven spikes",
    source: "Quran 2:261",
  },
  {
    arabic: "خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ",
    english: "The best of people are those who are most beneficial to people",
    source: "Hadith, Tabarani",
  },
  {
    arabic: "إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ",
    english: "The believers are but brothers",
    source: "Quran 49:10",
  },
];

/**
 * Function to get a random quote from the collection
 * @returns A randomly selected Islamic quote
 */
export function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * islamicQuotes.length);
  return islamicQuotes[randomIndex];
}
