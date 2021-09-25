import Footer from "./Footer";
import NavBar from "./Navbar";
import Service from "./Service";

function Services() {
  const services1 = [
    ["Marketing and Branding", "./imgs/services/marketing.png"],
    ["Architecture", "./imgs/services/architecture.png"],
    ["Real Estate and Construction", "./imgs/services/real-estate.png"],
    ["Interior Design", "./imgs/services/interior.png"],
    ["General Insurance", "./imgs/services/insurance.png"],
    ["Government/Non-government Contracts"],
  ];
  const services2 = [
    ["Event Management", "./imgs/services/event.png"],
    ["Procurement Solutions"],
    ["Printing Solutions"],
    ["Video Production"],
    ["Web Development/E-Commerce"],
    ["and more!"],
  ];
  return (
    <>
      <NavBar />
      <section className="relative">
        <div className="grid grid-cols-2 items-center text-left mt-2 md:mt-14 mx-2 md:mx-24 gap-6">
          <div className="grid grid-flow-row gap-6">
            <h2 className="text-base font-semibold md:text-2xl">
              Here is what we offer
            </h2>
            {services1.map((service) => (
              <Service title={service[0]} imgPath={service[1]} />
            ))}
          </div>
          <div className="grid grid-flow-row gap-6">
            {services2.map((service) => (
              <Service title={service[0]} imgPath={service[1]} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Services;
