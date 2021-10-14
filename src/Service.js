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
        <Link className="text-md md:text-xl hover:text-blue-700" to={link}>
          {title}
        </Link>
      </figure>
      <p className="text-xs md:text-base">{headline}</p>
    </div>
  );
}
export default Service;
