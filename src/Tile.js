import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Tile({ imgPath, alt }) {
  const history = useHistory();

  return (
    <>
      <figure className="group cursor-pointer">
        <img
          onClick={() => history.push("#")}
          className="mt-2 border-2 border-black opacity-40 group-hover:opacity-100 transition duration-500 ease-in-out"
          src={imgPath}
          alt={alt}
          width="100%"
        />
        <Link to="#" className="text-sm md:text-xl group-hover:text-living-red">
          {alt}
        </Link>
      </figure>
    </>
  );
}
export default Tile;
