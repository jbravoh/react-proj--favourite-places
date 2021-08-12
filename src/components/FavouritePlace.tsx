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
    <section>
      <img src={props.imgSrc} alt={props.imgAlt} />
      <h2>{props.title}</h2>
      <h3>
        {props.name}
        {props.country}
      </h3>
      <p>Here's the location on <a href="{props.description}">Google Maps</a>.</p>
    </section>
  );
}

export default FavouritePlace;
