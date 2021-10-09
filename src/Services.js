import Footer from "./Footer";
import NavBar from "./Navbar";
import Service from "./Service";

function Services() {
  const services1 = [
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633610119/main-page/Marketing_Branding_bjudp1.svg",
      "Marketing and Branding",
      "marketing",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633610120/main-page/Real_Esate_n0cjki.svg",
      "Real Estate",
      "realestate",
    ],

    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075702/living-images/insurance_xccutc.png",
      "General Insurance",
      "#",
    ],
  ];
  const services2 = [
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633764316/sub-categories/sub/Event_management_fy3enr.jpg",
      "Event Management",
      "#",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633610121/main-page/IT_Solutions_wsuotr.svg",
      "IT Solutions",
      "it",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633610120/main-page/Social_Responsibility_zvs1pz.svg",
      "Social Responsibility",
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
                title={service[1]}
                imgPath={service[0]}
                link={service[2]}
              />
            ))}
          </div>
          <div className="grid grid-flow-row gap-6">
            {services2.map((service) => (
              <Service
                title={service[1]}
                imgPath={service[0]}
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
