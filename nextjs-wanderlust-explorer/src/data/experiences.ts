import type { Experience, ExperienceCategory } from "@/types/experience";

const categories: ExperienceCategory[] = [
  "Adventure",
  "Culture",
  "Food",
  "Wellness",
  "Nature",
];

const destinations = [
  "Bangkok, Thailand",
  "Dubrovnik, Croatia",
  "Kyoto, Japan",
  "Cusco, Peru",
  "Marrakech, Morocco",
  "Reykjavik, Iceland",
  "Cape Town, South Africa",
  "Lisbon, Portugal",
  "Queenstown, New Zealand",
  "Medellin, Colombia",
  "Ubud, Indonesia",
  "Naples, Italy",
  "Oaxaca, Mexico",
  "Vancouver, Canada",
  "Seville, Spain",
  "Bali, Indonesia",
  "Nairobi, Kenya",
  "Athens, Greece",
  "Santiago, Chile",
  "Tallinn, Estonia",
];

const titleStarters = [
  "Sunrise",
  "Hidden",
  "Artisan",
  "Coastal",
  "Urban",
  "Wild",
  "Sacred",
  "Moonlight",
  "Vintage",
  "Highland",
];

const titleEndings = [
  "Trail",
  "Journey",
  "Escape",
  "Workshop",
  "Tasting",
  "Retreat",
  "Safari",
  "Cruise",
  "Circuit",
  "Expedition",
];

const descriptions = [
  "Explore local traditions with expert hosts and small group vibes.",
  "A hands-on route crafted for curious travelers who love authentic moments.",
  "Discover hidden corners, local flavors, and stories you will remember.",
  "Designed for mindful pacing, meaningful encounters, and cinematic views.",
  "An immersive plan that blends iconic highlights with lesser-known spots.",
];

export const experiences: Experience[] = Array.from({ length: 100 }, (_, index) => {
  const id = index + 1;
  const category = categories[index % categories.length];
  const destination = destinations[index % destinations.length];
  const starter = titleStarters[index % titleStarters.length];
  const ending = titleEndings[(index * 3) % titleEndings.length];
  const description = descriptions[index % descriptions.length];
  const price = 55 + ((index * 17) % 320);
  const rating = Number((3.8 + ((index % 12) * 0.1)).toFixed(1));

  return {
    id,
    title: `${starter} ${ending} in ${destination.split(",")[0]}`,
    description,
    category,
    destination,
    price,
    rating,
    imageUrl: `https://picsum.photos/seed/wanderlust-${id}/900/640`,
  };
});

export const availableCategories: ExperienceCategory[] = categories;
export const availableDestinations = Array.from(
  new Set(experiences.map((experience) => experience.destination)),
);
