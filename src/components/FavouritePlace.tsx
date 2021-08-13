import "../css/script.css";

interface FavouritePlaceProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  name: string;
  country: string;
  description: string;
  mapURL: string;
}

function FavouritePlace(props: FavouritePlaceProps): JSX.Element {
  return (
    <section className="place-container">
      <img className="image" src={props.imgSrc} alt={props.imgAlt} />
      <h2 className="place-title">{props.title}</h2>
      <h3 className="place-location">
        {props.name}, {props.country}
      </h3>
      <p className="place-description">{props.description}</p>
      <p>
        Here's {props.name} on <a href={props.mapURL}>Google Maps</a>.
      </p>
    </section>
  );
}

export default FavouritePlace;
