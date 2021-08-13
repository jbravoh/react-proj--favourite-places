import { london, miami, newOrleans, newYork } from "../images/index";

const placeArr = [
  {
    id: 1,
    imgSrc: newOrleans,
    imgAlt: "Fern in the French Quarter",
    title: "Down in the New Orleans, the Land of Dreams",
    city: "New Orleans",
    country: "Louisiana",
    description: `The "Big Easy" is known for its round-the-clock nightlife, vibrant live-music scene and cultural cuisine. Oh yeah, we can't forget the Mardi Gras carnival. Maybe one day I will go.`,
    mapURL: "https://tinyurl.com/3x4n9hnf",
  },
  {
    id: 2,
    imgSrc: miami,
    imgAlt: "Miami coastline",
    title: "Miami the bass and the sunset low",
    city: "Miami",
    country: "Florida",
    description: `What can I say? Beaches, great food, diverse people and endless experiences. Definitely going back!`,
    mapURL: "https://tinyurl.com/nyedh4tu",
  },
  {
    id: 3,
    imgSrc: newYork,
    imgAlt: "Times Square",
    title: "Concrete jungle where dreams are made of",
    city: "New York",
    country: "New York",
    description: `Imagine Leicester Square x10. It is a cultural hub, fast-paced and a grind. In the words of Jay Z: "these streets will make you feel brand new, big lights will inspire you. Let's hear it for New York!"`,
    mapURL: "https://bit.ly/3iHtdzk",
  },
  {
    id: 4,
    imgSrc: london,
    imgAlt: "Big Ben",
    title: "`Round my hometown`",
    city: "London",
    country: "England",
    description:
      "I'm originally from North London and my appreciation grew for the city once I left. It has a great night life, it is culturally diverse and I love visiting my friends and family.",
    mapURL: "https://bit.ly/3iHtdzk",
  },
];

export default placeArr;
