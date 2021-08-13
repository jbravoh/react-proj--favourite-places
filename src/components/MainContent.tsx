import FavouritePlace from "./FavouritePlace";
import "../css/script.css";
import placesArr from "./places";

function MainContent(): JSX.Element {
  const places = placesArr.map((place) => (
    <FavouritePlace
      key={place.id}
      id={place.id}
      imgSrc={place.imgSrc}
      imgAlt={place.imgAlt}
      title={place.title}
      location={{
        city: place.city,
        country: place.country,
        mapURL: place.mapURL,
      }}
      // name={place.name}
      // country={place.country}
      description={place.description}
      // mapURL={place.mapURL}
    />
  ));

  return (
    <main>
      <section className="fav-places-container">{places}</section>
    </main>
  );
}

export default MainContent;
