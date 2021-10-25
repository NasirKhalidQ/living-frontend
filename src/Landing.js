import Footer from "./Footer";
import NavBar from "./Navbar";
import Tile from "./Tile";
import CountUp from "react-countup";
import Client from "./Client";
import { Link } from "react-router-dom";

function Landing() {
  const clients = [
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633598535/clients/imos_qdsfmj.svg",
      "imos",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633598538/clients/iveco_jkzuh0.svg",
      "iveco-astra",
    ],

    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1634120070/clients/vision4life_esyiul.svg",
      "Vision 4 life",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633598538/clients/foundation_i64ngg.svg",
      "foundation wind energy limited",
    ],

    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633598552/clients/uic_cxj9ej.svg",
      "UIC insurance Pakistan",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633598550/clients/spi_sfoapp.svg",
      "SPI insurance Pakistan",
    ],

    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633598548/clients/next_vlvxtr.svg",
      "Next Health Pakistan",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633598549/clients/kabir_bw4dk5.svg",
      "Fauji Kabirwala",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633598530/clients/chamber_atoepj.svg",
      "islamabad chamber of commerce and industry",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633598560/clients/rudn_clbgkd.svg",
      "rudn enclave",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633598577/clients/rmrsco_sgml1z.svg",
      "RMRSCO Pvt limited",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633598546/clients/isha_xcds8u.svg",
      "Beauty Salon and makeup artist",
    ],
  ];
  const tiles = [
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1634537948/main-page/interior_rtqkla.jpg",
      "Interior Designing",
      "#",
    ],
    ["./imgs/marketing.jpg", "Marketing and Branding", "marketing"],

    ["./imgs/architecture.jpg", "Architectural Design", "#"],
    ["./imgs/investment.jpg", "Investment Management", "realestate"],
    ["./imgs/construction.jpg", "Civil Construction Services", "#"],
    ["./imgs/insurance.jpg", "General Insurance", "#"],
    ["./imgs/event.jpg", "Event Management", "#"],
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
    ["./imgs/photography.jpg", "Photography", "#"],
    ["./imgs/videography.jpg", "Videography", "#"],
    ["./imgs/content.jpg", "Content Creation ", "#"],
  ];
  return (
    <>
      <NavBar />
      <div className="grid ">
        <img className="w-screen" src="./imgs/title.jpg" alt="main" />
        <div>
          <div className="mx-6 grid gap-6 text-justify">
            <h2 className="text-base md:text-4xl font-bold text-living-red mt-4 uppercase">
              Delivering Excellence
            </h2>
            <h2 className="text-base md:text-2xl font-bold text-living-red">
              What We Do
            </h2>
            <h3 className="text-base md:text-xl font-bold">
              We are here to manage Quality Consulting Services and Investment
              Plan
            </h3>
            <p className="text-base">
              Getting solutions for business or individual investments with the
              right path and experience is essential in this challenging
              business environment. It is very important to have the right
              decision at the right time with the right team. To get the best
              result you need a full team of experienced professionals to
              provide you with the right solutions, to calibrate with new
              challenges. It is essential to work diversely by covering all
              dimensions to compete in this global village. Today we have more
              competition and a complex business environment than ever before.
              To take care of these challenges, LIVING SOLUTIONS is one stop
              solution for your product.
            </p>
            <p>
              Providing solutions under one roof is our prime target, we have a
              very experienced professional team in LIVING SOLUTIONS.
            </p>

            <p>
              We deliver an expert business approach to both individuals and
              businesses with more than 10 years of experience. We will ensure
              that you always get the best guidance from the top people in the
              entire industry. Our professionals have spent years collecting
              practical &amp; pragmatic tools, techniques, and models.
            </p>
          </div>
        </div>
      </div>
      <Link to="/services">
        <h2 className="grid w-full justify-center pt-4 text-base md:text-2xl font-bold text-living-red underline">
          Our Services
        </h2>
      </Link>
      <div className="grid grid-cols-2 md:grid-cols-3 pb-16 gap-x-6 md:gap-x-16 gap-y-4 md:gap-y-10 px-6 text-xs pt-6 lg:text-xl">
        {tiles.map((tile, index) => (
          <Tile key={index} imgPath={tile[0]} alt={tile[1]} link={tile[2]} />
        ))}
      </div>
      <Link to="/clients">
        <h3 className="text-base md:text-2xl font-bold text-center mb-4 md:mb-16 text-living-red underline">
          Portfolio
        </h3>
      </Link>
      <div className="grid grid-cols-4 md:grid-cols-6 text-xs lg:text-xl gap-4 mx-6 mb-4 md:mb-10">
        {clients.map((client, index) => (
          <Client key={index} imgPath={client[0]} alt={client[1]} />
        ))}
      </div>
      <div className="flex pl-10 md:pl-0 flex-col md:flex-row md:justify-around pt-2 pb-2 bg-living-header text-gray-50 border-t-2 border-white gap-y-6">
        <div className="text-2xl inline-flex">
          <div className=" border-4 border-gray-600 hover:border-living-yellow transition duration-500 ease-in-out">
            <img className="p-2" src="./imgs/stats/chart.svg" alt="Chart" />
          </div>
          <div className="flex-col ml-4 mt-2">
            <div className="inline-flex text-base md:text-xl">
              <CountUp end={100} duration={2} />
              <p>+</p>
            </div>

            <p className="text-base text-gray-400">Successful Projects</p>
          </div>
        </div>
        <div className="text-2xl inline-flex">
          <div className=" border-4 border-gray-600 hover:border-living-yellow transition duration-500 ease-in-out">
            <img className="p-2" src="./imgs/stats/team.svg" alt="Team" />
          </div>
          <div className="flex-col ml-4 mt-2">
            <div className="inline-flex text-base md:text-xl">
              <CountUp end={30} duration={6} />
              <p>+</p>
            </div>
            <p className="text-base text-gray-400">Team Members</p>
          </div>
        </div>
        <div className="text-2xl inline-flex">
          <div className=" border-4 border-gray-600 hover:border-living-yellow transition duration-500 ease-in-out">
            <img className="p-2" src="./imgs/stats/hand.svg" alt="Hand" />
          </div>
          <div className="flex-col ml-4 mt-2">
            <div className="inline-flex text-base md:text-xl">
              <CountUp end={400} duration={6} />
              <p>+</p>
            </div>
            <p className="text-base text-gray-400">Happy Customers</p>
          </div>
        </div>
        <div className="text-2xl inline-flex">
          <div className=" border-4 border-gray-600 hover:border-living-yellow transition duration-500 ease-in-out">
            <img
              className="p-2"
              src="./imgs/stats/creative.svg"
              alt="Machine Learning"
            />
          </div>
          <div className="flex-col ml-4 mt-2">
            <div className="inline-flex text-base md:text-xl">
              <CountUp end={213} duration={6} />
              <p>+</p>
            </div>
            <p className="text-base text-gray-400">Creative Ideas</p>
          </div>
        </div>
        <div className="text-2xl inline-flex">
          <div className=" border-4 border-gray-600 hover:border-living-yellow transition duration-500 ease-in-out">
            <img
              className="p-2"
              src="./imgs/stats/web.svg"
              alt="Machine Learning"
            />
          </div>
          <div className="flex-col ml-4 mt-2">
            <div className="inline-flex text-base md:text-xl">
              <CountUp start={10374} end={30000} duration={99999} />
              <p>+</p>
            </div>
            <p className="text-sm md:text-base text-gray-400">Site Views</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Landing;
