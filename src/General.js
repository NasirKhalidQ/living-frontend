import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./Navbar";

function General() {
  const { category } = useParams();

  const categoryData = {
    interior: {
      heading: "Interior Designing",
      description:
        "At Living Solutions Pvt Ltd, we have confidence in advancing lives through the plan. This philosophy of thinking is replicated in our work, in our design decisions, and in the vendors and partners that we team up with. It is mounted in our solid conviction that an interior should counterbalance style with visual liberality. We focus that interior matches our client's sense and personality. Find out more about our visual generosity, by quick contact with our team at Living solutions Pvt Ltd. ",
      imgSrc: "",
      price: "PKR X,XXX",
      priceDescription: "as per client's requirements",
    },
    marketing: {
      heading: "Digital Marketing",
      description:
        "Digital marketing experts here in Living Solutions Pvt Ltd use data to evaluate, explain, implement and enhance your customer experience journey.Our goal is to help you meet yours by designing a comprehensive strategy to get a more meaningful and mutually valuable relationship with your customers.",
      imgSrc: "",
      price: "",
      priceDescription: "",
    },
    productPhotography: {
      heading: "Product Photography",
      description:
        "Product photography is a picture from any angle of any product available for sale. This photography is known as commercial photography. These pictures are used to excite a consumer to buy the captured items.",
      imgSrc: "",
      price: "PKR 8,000",
      priceDescription: "per shift",
    },
    videoProduction: {
      heading: "Video Production",
      description:
        "Best video production solutions in town. Affordable packages, specialists in creating videos for corporate organizations and the public sector. Reach Us Today. Get a quote. Select Living Solutions Pvt Ltd.",
      imgSrc: "",
      price: "PKR 8,000",
      priceDescription: "per shift",
    },
    telemarketing: {
      heading: "TeleMarketing",
      description:
        "Telemarketing is the only form of direct marketing which delivered a personalized message with key decision-makers and to understand their requirements and present personalized solutions. Living Solutions Pvt Ltd is one the best telemarketing service provider in Pakistan, we deliver B2B, B2C telemarketing services to help businesses achieve their targets. We support the sales and marketing teams of our clients by connecting with their forecasts and generating sales leads. ",
      imgSrc: "",
      price: "PKR X,XXX",
      priceDescription: "as per client's requirements",
    },
    productManagement: {
      heading: "Product Management",
      description:
        "Product management is an organizational function that guides every step of a product’s lifecycle from development to positioning and pricing by focusing on the product and its customers first and foremost. To build the best possible product, product manager advocate for customers within the organization and make sure the voice of the market is heard and heeded. ",
      imgSrc: "",
      price: "PKR X,XXX",
      priceDescription: "as per client's requirements",
    },
    salesManagement: {
      heading: "Sales Management",
      description:
        "Sales management is the process of developing a sales force, coordinating sales operations and implementing sales techniques that allow a business to consistently hit, and even surpass, its sales target. ",
      imgSrc: "",
      price: "PKR X,XXX",
      priceDescription: "as per client's requirements",
    },
    graphicDesign: {
      heading: "Graphic Design",
      description:
        "Sales management is the process of developing a sales force, coordinating sales operations and implementing sales techniques that allow a business to consistently hit, and even surpass, its sales target. ",
      imgSrc: "",
      price: "PKR 5-7,000",
      priceDescription: "per Logo",
    },
    architecturalDesign: {
      heading: "Architectural Design",
      description:
        "We create and design unique architects with the intellectual wisdom of harmony, which complements nature around premises. If you desire an experienced professional architect, we are here for your service.  ",
      imgSrc: "",
      price: "PKR X,XXX",
      priceDescription: "as per client's requirements",
    },
    civil: {
      heading: "Civil Construction Services",
      description:
        "Living Solutions Pvt Ltd is a civil construction company in Pakistan expert in an extensive range of civil construction solutions. We intend to offer you a complete solution where you have all of your civil construction solutions dealt with by one expert solution company.",
      imgSrc: "",
      price: "PKR X,XXX",
      priceDescription: "as per client's requirements",
    },
    generalInsurance: {
      heading: "General Insurance",
      description:
        "Living solutions Pvt Ltd was established in the last decade. And from the start, we are doing General business including Group Health Insurance, Travel Bonds & Guarantees, Travel Insurance (Health), Livestock and Crop Insurance, Car Insurance. In collaboration with UIC one of the best insurance companies in Pakistan.",
      imgSrc: "",
      price: "PKR X,XXX",
      priceDescription: "as per client's requirements",
    },
    event: {
      heading: "Event Management",
      description:
        "Most Technologically Advanced Venues. Committed Events Team. We Have a Range of Function Spaces and All-Inclusive Packages to Suit Your Tastes. Marvelous Concerts. Luxury Hotels, Grant Winning Restaurants.",
      imgSrc: "",
      price: "PKR X,XXX",
      priceDescription: "as per client's requirements",
    },
    web: {
      heading: "Web Development",
      description:
        "Today everyone understands the potential of website development, now it’s a basic need for any business to stay and bloom in the market, Living Solutions Pvt Ltd has a bunch of passionate and creative team members with an extreme focus on transforming your digital experience. We assure to deliver your vision from scratch to the screen by providing the best Web developers and their services.",
      imgSrc: "",
      price: "PKR X,XXX",
      priceDescription: "as per client's requirements",
    },
    seo: {
      heading: "SEO",
      description:
        "SEO is all about optimizing – which means we need to be constantly analyzing new strategies to make sure you are getting results. In the SEO world, there’s no relax as set-and-forget and, as any SEO agency worth their salt will tell you, it’s a long-term investment. Getting SEO right means focusing keenly on your audience’s online behaviors, search patterns, and interests, then fine-tuning your strategy so that your brand message is served at exactly the right moment.",
      imgSrc: "",
      price: "PKR 70,000",
      priceDescription: "monthly",
    },
    social: {
      heading: "Social Responsibility",
      description:
        "Corporate Social Responsibility (CSR) has become a major issue for the whole world. To be a part of this global issue, Living Solutions Pvt Ltd is trying to do its part with full efforts and dedication it’s all about companies' active and efficient work with the environment, human rights, labor, and anti-corruption issues which represent they take concern for the impacts on the environment and society.",
      imgSrc: "",
      price: "PKR X,XXX",
      priceDescription: "as per client's requirements",
    },
    photography: {
      heading: "Photography",
      description:
        "Here in Living Solutions Pvt Ltd, we have a specialized photography team with huge experience in Commercial, Editorial, Corporate, Industrial, and Time-Lapse photography.",
      imgSrc: "",
      price: "PKR 8,000",
      priceDescription: "per shift",
    },
    videography: {
      heading: "Videography",
      description:
        "Videography refers to the process of capturing moving images on electronic media (e.g. Videotape, direct to disk recording, or solid-state storage) and even streaming media nowadays, any video work could be called videography, whereas commercial motion picture production would be called cinematography. Over the period our team in Living Solutions Pvt Ltd maters itself in the field of Videography and met requirements of business today.",
      imgSrc: "",
      price: "PKR 8,000",
      priceDescription: "per shift",
    },
    content: {
      heading: "Content Creation",
      description:
        "Spark your clients with Living solutions Pvt Ltd, build your image, and yield your leads. Get start with Living Solutions Pvt Ltd today for a better tomorrow. Our effective writers and designers make content that your audience will adore. Allow us to convey more. Let’s make the best Content Strategy, more content advancement, more content broadcasting, and more Brand Storytelling. Provide you Anthology. We give you more advertising, content promotion, improve your Influence in the market. We are Living solutions Pvt Ltd.",
      imgSrc: "",
      price: "PKR 4",
      priceDescription: "per word",
    },
  };
  return (
    <>
      <NavBar />
      <img src="/imgs/banner.jpg" alt="banner" />

      <div className="prose-lg m-10">
        <h2>{categoryData[category].heading}</h2>
        <p>{categoryData[category].description}</p>
      </div>
      <div className="grid justify-center">
        <div className="w-full p-4 px-10">
          <Link to="/quote">
            <label className="flex flex-col rounded-lg shadow-lg group relative cursor-pointer hover:shadow-2xl">
              <div className="w-full px-20 py-10 rounded-t-lg card-section-1 bg-red-100">
                <h3 className="mx-auto text-base font-semibold text-center underline text-living-header">
                  Pricing
                </h3>
                <p className="text-3xl font-bold text-center text-living-header">
                  {categoryData[category].price}
                </p>
                <p className="text-xs text-center uppercase text-living-header">
                  {categoryData[category].priceDescription}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg bg-red-500">
                <button className="w-5/6 py-2 mt-2 font-semibold text-center bg-white border border-transparent rounded text-red-500">
                  Get A Quote
                </button>
              </div>
            </label>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default General;
