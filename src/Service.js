import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Service({ title, imgPath, link, headline }) {
  const history = useHistory();

  return (
    <div>
      <figure>
        <img
          className="cursor-pointer mb-2 md:mb-6"
          src={imgPath}
          alt={title}
          width="100%"
          onClick={() => history.push(link)}
        />
        <div className="mb-4 font-semibold">
          <Link className="text-md md:text-xl hover:text-blue-700" to={link}>
            {title}
          </Link>
        </div>
      </figure>
      <p className="text-xs md:text-base">
        {headline.slice(0, 110)}..........
        <Link className=" text-living-header" to="/">
          read more
        </Link>
      </p>
    </div>
  );
}
export default Service;
