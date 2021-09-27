import { Link } from "react-router-dom";

function Tile({ imgPath, alt }) {
  return (
    <>
      <figure>
        <img
          className="mt-2 border-2 border-black"
          src={imgPath}
          alt={alt}
          width="100%"
        />
        <Link
          to="/category"
          className="text-md md:text-xl hover:text-living-red"
        >
          {alt}
        </Link>
      </figure>
    </>
  );
}
export default Tile;
