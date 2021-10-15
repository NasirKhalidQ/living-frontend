import Footer from "./Footer";
import NavBar from "./Navbar";
import Service from "./Service";

function Services() {
  const services = [
    [
      "./imgs/interior.jpg",
      "Interior Designing",
      "#",
      "At Living Solutions Pvt Ltd, we have confidence in advancing lives through the plan. This philosophy of thinking is replicated in our work, in our design decisions and in the vendors and partners that we team up with. It is mounted in our solid conviction that an interior should counterbalance style with visual liberality. We focus that interior matches our client's sense and personality.Find out more about our visual generosity, by quick contact with our team at Living solutions Pvt Ltd.",
    ],
    [
      "./imgs/architecture.jpg",
      "Architectural Design",
      "#",
      "We create and design unique architects with the intellectual wisdom of harmony, which complements nature around premises. If you desire an experienced professional architect, we are here for your service.",
    ],
    [
      "./imgs/marketing.jpg",
      "Marketing and Branding",
      "marketing",
      "The branding approach is the plan that directs your image. Fostering a branding approach permits you to compete in the commercial center and accomplish the best results. We'll uphold you to set up a powerful brand procedure, so you have a solid formation for your future promoting strategies.",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633610120/main-page/Real_Esate_n0cjki.svg",
      "Investment Management",
      "realestate",
      "Living Solutions Pvt Ltd is an asset manager with an active, long-term, and responsible approach to investment. Diversify your portfolio with the best investment targeting Completely Marked Dividends. An ethical investment company. Get market insight into real estate. Understand market dynamics. Get financial plans. Invest Now.",
    ],
    [
      "./imgs/construction.jpg",
      "Civil Construction Services",
      "#",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus,fermentum amet faucibus sed id nisi lectus at.",
    ],

    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075702/living-images/insurance_xccutc.png",
      "General Insurance",
      "#",
      "Living solutions Pvt Ltd was established in the last decade. And from the start, we are doing General business including Group Health Insurance, Travel Bonds & Guarantees, Travel Insurance (Health), Livestock and Crop Insurance, Car Insurance. In collaboration with UIC one of the best insurance companies in Pakistan.",
    ],
    [
      "./imgs/event.jpg",
      "Event Management",
      "#",
      "Most Technologically Advanced Venues. Committed Events Team. We Have a Range of Function Spaces and All-Inclusive Packages to Suit Your Tastes. Marvelous Concerts. Luxury Hotels, Grant Winning Restaurants.",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633610121/main-page/IT_Solutions_wsuotr.svg",
      "IT Solutions",
      "it",
      "Our IT solutions professionals enabling people through technology – one service at a time. Our team takes the time to comprehend clients' requirements by deep study of their business and suggest best solutions with advanced.",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633610120/main-page/Social_Responsibility_zvs1pz.svg",
      "Social Responsibility",
      "#",
      "Corporate Social Responsibility (CSR) has become a major issue for the whole world. To be a part of this global issue, Living Solutions Pvt Ltd is trying to do its part with full efforts and dedication it’s all about companies' active and efficient work with the environment, human rights, labor, and anti-corruption issues which represent they take concern for the impacts on the environment and society.",
    ],
    [
      "./imgs/photography.jpg",
      "Photography",
      "#",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus,fermentum amet faucibus sed id nisi lectus at.",
    ],
    [
      "./imgs/videography.jpg",
      "Videography",
      "#",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus,fermentum amet faucibus sed id nisi lectus at.",
    ],
    [
      "./imgs/content.jpg",
      "Content Creation ",
      "#",
      "Spark your clients with Living solutions Pvt Ltd, build your image, and yield your leads. Get start with Living Solutions Pvt Ltd today for a better tomorrow. Our effective writers and designers make content that your audience will adore. Allow us to convey more. Let’s make the best Content Strategy, more content advancement, more content broadcasting, and more Brand Storytelling. Provide you Anthology. We give you more advertising, content promotion, improve your Influence in the market. We are Living solutions Pvt Ltd.",
    ],
  ];
  return (
    <>
      <NavBar />
      <section className="relative">
        <div className="text-base grid mt-10 justify-center font-semibold md:text-2xl text-living-red">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-living-red">
            The Services we offer
          </h1>
        </div>
        <div className="mt-2 md:mt-14 mx-2 md:mx-40 mb-2 md:mb-10">
          <div className="grid md:grid-cols-2 gap-y-10 gap-x-28">
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
