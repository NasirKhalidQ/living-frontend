import Footer from "./Footer";
import NavBar from "./Navbar";
import Service from "./Service";

function Services() {
  const services1 = [
    [
      "Marketing and Branding",
      "https://res.cloudinary.com/living-solutions/image/upload/v1633078407/living-images/services/marketing_h9hrcw.png",
    ],
    [
      "Architecture",
      "https://res.cloudinary.com/living-solutions/image/upload/v1633078410/living-images/services/architecture_rojnpd.png",
      "#",
    ],
    [
      "Real Estate and Construction",
      "https://res.cloudinary.com/living-solutions/image/upload/v1633078411/living-images/services/real-estate_vb3v9l.png",
      "/realestate",
    ],
    [
      "Interior Design",
      "https://res.cloudinary.com/living-solutions/image/upload/v1633078406/living-images/services/interior_ib5q7n.png",
      "#",
    ],
    [
      "General Insurance",
      "https://res.cloudinary.com/living-solutions/image/upload/v1633078408/living-images/services/insurance_ff7xtz.png",
      "#",
    ],
    [
      "Government/Non-government Contracts",
      "https://res.cloudinary.com/living-solutions/image/upload/v1633078406/living-images/services/govt_r5o695.png",
      "#",
    ],
  ];
  const services2 = [
    [
      "Event Management",
      "https://res.cloudinary.com/living-solutions/image/upload/v1633078406/living-images/services/event_pdvk6x.png",
      "#",
    ],
    [
      "Procurement Solutions",
      "https://res.cloudinary.com/living-solutions/image/upload/v1633078407/living-images/services/procurement_owygdc.png",
      "#",
    ],
    [
      "Printing Solutions",
      "https://res.cloudinary.com/living-solutions/image/upload/v1633078406/living-images/services/printing_hmmogu.png",
      "#",
    ],
    [
      "Video Production",
      "https://res.cloudinary.com/living-solutions/image/upload/v1633078409/living-images/services/video_akr2bi.png",
      "#",
    ],
    [
      "Web Development/E-Commerce",
      "https://res.cloudinary.com/living-solutions/image/upload/v1633078408/living-images/services/web_ofw9d1.png",
      "#",
    ],
    [
      "and more!",
      "https://res.cloudinary.com/living-solutions/image/upload/v1633078408/living-images/services/more_ib4fot.png",
      "#",
    ],
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
              <Service
                title={service[0]}
                imgPath={service[1]}
                link={service[2]}
              />
            ))}
          </div>
          <div className="grid grid-flow-row gap-6">
            {services2.map((service) => (
              <Service
                title={service[0]}
                imgPath={service[1]}
                link={service[2]}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Services;
