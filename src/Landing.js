function Landing({ imgpath }) {
  return (
    <div className="grid grid-cols-2">
      <div className="mx-0 my-12 md:my-48 md:mx-28">
        <h2 className="text-lg md:text-4xl pb-2 md:pb-8">
          Website under construction
        </h2>
        <h2 className="text-sm md:text-base">Thank you for your patience!</h2>
      </div>
      <img className="text-lg" src={imgpath} alt="background" />
    </div>
  );
}

export default Landing;
