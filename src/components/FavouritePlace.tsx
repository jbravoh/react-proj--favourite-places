interface FavouritePlaceProps {
  image: string;
  place: string;
  location: string;
  description: string;
}

function FavouritePlace(props: FavouritePlaceProps): JSX.Element {
  return (
    <section>
      <h2>{props.place}</h2>
      <h3>{props.location}</h3>
      <p>{props.description}</p>
    </section>
  );
}

export default FavouritePlace;
