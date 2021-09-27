import { Link } from "react-router-dom";

function Service({ title, imgPath }) {
  return (
    <>
      <figure>
        <img src={imgPath} alt={title} width="100%" />
        <Link className="text-md md:text-xl mt-2 hover:text-blue-700" to="#">
          {title}
        </Link>
      </figure>
      <p className="text-xs md:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus,
        fermentum amet faucibus sed id nisi lectus at.
      </p>
    </>
  );
}
export default Service;
