import Footer from "./Footer";
import NavBar from "./Navbar";
import Service from "./Service";

function Services() {
  const services = [
    [
      "./imgs/interior.jpg",
      "Interior Designing",
      "#",
      "At Living Solutions Pvt Ltd, we have confidence in advancing lives through the plan. This philosophy of thinking",
    ],
    [
      "./imgs/marketing.jpg",
      "Marketing and Branding",
      "marketing",
      "The branding approach is the plan that directs your image. Fostering a branding approach permits you to compete",
    ],
    [
      "./imgs/architecture.jpg",
      "Architectural Design",
      "#",
      "We create and design unique architects with the intellectual wisdom of harmony, which complements nature",
    ],

    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633610120/main-page/Real_Esate_n0cjki.svg",
      "Investment Management",
      "realestate",
      "Living Solutions Pvt Ltd is an asset manager with an active, long-term, and responsible approach to investment. Diversify your portfolio",
    ],
    [
      "./imgs/construction.jpg",
      "Civil Construction Services",
      "#",
      "Living Solutions Pvt Ltd is a civil construction company in Pakistan expert in an extensive range of civil construction",
    ],

    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075702/living-images/insurance_xccutc.png",
      "General Insurance",
      "#",
      "Living solutions Pvt Ltd was established in the last decade. And from the start, we are doing General business",
    ],
    [
      "./imgs/event.jpg",
      "Event Management",
      "#",
      "Most Technologically Advanced Venues. Committed Events Team. We Have a Range of Function Spaces and",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633610121/main-page/IT_Solutions_wsuotr.svg",
      "IT Solutions",
      "it",
      "Our IT solutions professionals enabling people through technology – one service at a time. Our team takes the time to",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633610120/main-page/Social_Responsibility_zvs1pz.svg",
      "Social Responsibility",
      "#",
      "Corporate Social Responsibility (CSR) has become a major issue",
    ],
    [
      "./imgs/photography.jpg",
      "Photography",
      "#",
      "Here in Living Solutions Pvt Ltd, we have a specialized photography team with huge experience in Commercial",
    ],
    [
      "./imgs/videography.jpg",
      "Videography",
      "#",
      "Best video production solutions in town. Affordable packages, specialists in creating videos for corporate organizations",
    ],
    [
      "./imgs/content.jpg",
      "Content Creation ",
      "#",
      "Spark your clients with Living solutions Pvt Ltd, build your image, and yield your leads. Get start with Living",
    ],
  ];
  return (
    <>
      <NavBar />
      <section className="relative">
        <div className="text-base grid mt-10 justify-center font-semibold md:text-2xl text-living-red">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-living-red">
            The Services We Offer
          </h1>
        </div>
        <div className="mt-2 md:mt-14 mx-2 md:mx-20 mb-2 md:mb-10">
          <div className="grid md:grid-cols-3 gap-y-10 gap-x-10">
            {services.map((service, index) => (
              <Service
                title={service[1]}
                imgPath={service[0]}
                link={service[2]}
                key={index}
                headline={service[3]}
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
