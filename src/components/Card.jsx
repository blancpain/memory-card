// eslint-disable-next-line react/prop-types
export default function Card({ src, alt, clickHandler, id }) {
  return (
    <img
      src={src}
      className="card"
      alt={alt}
      onClick={(e) => clickHandler(e)}
      id={id}
    />
  );
}
