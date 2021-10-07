import Footer from "./Footer";
import NavBar from "./Navbar";
import Team from "./Team";

function About() {
  return (
    <>
      <NavBar />
      <section className="bg-about">
        <Team />
        <Footer />
      </section>
    </>
  );
}
export default About;
