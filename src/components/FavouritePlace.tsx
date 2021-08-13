import "../css/script.css";

interface FavouritePlaceProps {
  id: number;
  imgSrc: string;
  imgAlt: string;
  title: string;
  location: {
    city: string;
    country: string;
    mapURL: string;
  };
  description: string;
}
// name: string;

// country: string;

// mapURL: string;

function FavouritePlace(props: FavouritePlaceProps): JSX.Element {
  return (
    <>
      <section className="place-container" key={props.id}>
        <img className="image" src={props.imgSrc} alt={props.imgAlt} />
        <h2 className="place-title">{props.title}</h2>
        <h3 className="place-location">
          {props.location.city}, {props.location.country}
        </h3>
        <p className="place-description">{props.description}</p>
        <p>
          Here's {props.location.city} on{" "}
          <a href={props.location.mapURL}>Google Maps</a>.
        </p>
      </section>
    </>
  );
}

export default FavouritePlace;
