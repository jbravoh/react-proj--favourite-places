import FavouritePlace from "./FavouritePlace";
import "../css/script.css";
import { london, miami, newOrleans, newYork } from "../images/index";

function MainContent(): JSX.Element {
  return (
    <main>
      <section className="fav-places-container">
        <FavouritePlace
          imgSrc={newOrleans}
          imgAlt={"Fern in the French Quarter"}
          title={"Down in the New Orleans, the Land of Dreams"}
          name={"New Orleans"}
          country={"Louisiana"}
          description={`The "Big Easy" is known for its round-the-clock nightlife, vibrant live-music scene and cultural cuisine. Oh yeah, we can't forget the Mardi Gras carnival. Maybe one day I will go.`}
          mapURL={"https://tinyurl.com/3x4n9hnf"}
        />
        <FavouritePlace
          imgSrc={miami}
          imgAlt={"Miami coastline"}
          title={"Miami the bass and the sunset low"}
          name={"Miami"}
          country={"Florida"}
          description={`What can I say? Beaches, great food, diverse people and endless experiences. Definitely going back!`}
          mapURL={"https://tinyurl.com/nyedh4tu"}
        />
        <FavouritePlace
          imgSrc={newYork}
          imgAlt={"Fern in the French Quarter"}
          title={"Concrete jungle where dreams are made of"}
          name={"New York"}
          country={"New York"}
          description={`Imagine Leicester Square x10. It is a cultural hub, fast-paced and a grind. In the words of Jay Z: "these streets will make you feel brand new, big lights will inspire you. Let's hear it for New York!"`}
          mapURL={"https://bit.ly/3iHtdzk"}
        />
        <FavouritePlace
          imgSrc={london}
          imgAlt={"Fern in the French Quarter"}
          title={"'Round my hometown"}
          name={"London"}
          country={"England"}
          description={
            "I'm originally from North London and my appreciation grew for the city once I left. It has a great night life, it is culturally diverse and I love visiting my friends and family."
          }
          mapURL={"https://bit.ly/3iHtdzk"}
        />
      </section>
    </main>
  );
}

export default MainContent;
