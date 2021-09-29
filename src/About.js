import Footer from "./Footer";
import NavBar from "./Navbar";

function About() {
  return (
    <>
      <NavBar />
      <section className="bg-about">
        <div className="text-gray-50 pt-10 md:pt-40 pb-20 md:pb-72 grid gap-6 ml-16 w-3/4 md:w-1/2 font-normal md:font-bold">
          <h2 className="text-base md:text-2xl font-bold">Our Introduction</h2>
          <h3 className="text-base md:text-xl font-bold">
            We are here to manage quality consulting service and investment plan
          </h3>
          <p className="text-base">
            We provide expert Business Coaching to both individuals and
            businesses. With over 10 years of experience, we’ll ensure that
            you’re always getting the best guidance from the top people in the
            entire industry.
          </p>
          <p className="text-base">
            Our experts are just a phone call away from you.
          </p>
        </div>
        <Footer />
      </section>
    </>
  );
}
export default About;
