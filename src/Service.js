function Service({ title, imgPath }) {
  return (
    <>
      <figure>
        <img src={imgPath} alt="service" width="100%" />
        <figcaption className="text-md md:text-xl mt-2">{title}</figcaption>
      </figure>
      <p className="text-xs md:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus,
        fermentum amet faucibus sed id nisi lectus at.
      </p>
    </>
  );
}
export default Service;
