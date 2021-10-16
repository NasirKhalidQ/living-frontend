import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Tile({ imgPath, alt, link }) {
  const history = useHistory();

  return (
    <div>
      <figure className="group cursor-pointer ">
        <img
          onClick={() => history.push(link)}
          className="opacity-80 group-hover:opacity-100 transition duration-1000 ease-in-out hover:shadow-3xl transform scale-90  group-hover:scale-100"
          src={imgPath}
          alt={alt}
          width="100%"
        />
        <Link
          to="#"
          className="text-sm grid justify-center md:text-xl text-living-yellow group-hover:text-living-red font-semibold"
        >
          {alt}
        </Link>
      </figure>
    </div>
  );
}
export default Tile;
