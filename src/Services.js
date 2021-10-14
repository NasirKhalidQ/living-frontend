import Footer from "./Footer";
import NavBar from "./Navbar";
import Service from "./Service";

function Services() {
  const services = [
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633764316/sub-categories/sub/interior_designing_ta0osr.jpg",
      "Interior Design",
      "#",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633764315/sub-categories/sub/architecture_etnqx8.jpg",
      "Architectural Design",
      "#",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633610119/main-page/Marketing_Branding_bjudp1.svg",
      "Marketing and Branding",
      "marketing",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633610120/main-page/Real_Esate_n0cjki.svg",
      "Investment Management",
      "realestate",
    ],

    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075702/living-images/insurance_xccutc.png",
      "General Insurance",
      "#",
    ],
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
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633764316/sub-categories/sub/Video_production_ujjk4j.jpg",
      "Photography",
      "#",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633764316/sub-categories/sub/Video_production_ujjk4j.jpg",
      "Videography",
      "#",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633764315/sub-categories/sub/content_writing_p1eios.jpg",
      "Content Creation ",
      "#",
    ],
  ];
  return (
    <>
      <NavBar />
      <section className="relative">
        <div className="text-base grid mt-10 justify-center font-semibold md:text-2xl text-living-red">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-living-red">
            The services we offer
          </h1>
        </div>
        <div className="mt-2 md:mt-14 mx-2 md:mx-24 mb-2 md:mb-10">
          <div className="grid md:grid-cols-2 gap-y-10 gap-x-6">
            {services.map((service, index) => (
              <Service
                title={service[1]}
                imgPath={service[0]}
                link={service[2]}
                key={index}
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
