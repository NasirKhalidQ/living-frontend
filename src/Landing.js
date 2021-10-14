import Footer from "./Footer";
import NavBar from "./Navbar";
import Tile from "./Tile";
import CountUp from "react-countup";
import Client from "./Client";
import { Link } from "react-router-dom";

function Landing() {
  const clients = [
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633598560/clients/rudn_clbgkd.svg",
      "rudn enclave",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633598549/clients/kabir_bw4dk5.svg",
      "Fauji Kabirwala",
    ],

    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633598552/clients/uic_cxj9ej.svg",
      "UIC insurance Pakistan",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633598538/clients/foundation_i64ngg.svg",
      "foundation wind energy limited",
    ],

    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1634120070/clients/vision4life_esyiul.svg",
      "Vision 4 life",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633598577/clients/rmrsco_sgml1z.svg",
      "RMRSCO Pvt limited",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633598535/clients/imos_qdsfmj.svg",
      "imos",
    ],
  ];
  const tiles = [
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633764316/sub-categories/sub/interior_designing_ta0osr.jpg",
      "Interior Designing",
      "#",
    ],
    ["./imgs/architecture.png", "Architectural Design", "#"],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633610120/main-page/Real_Esate_n0cjki.svg",
      "Investment Management",
      "realestate",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633764315/sub-categories/sub/construction_fn6ceb.jpg",
      "Civil Construction Services",
      "#",
    ],
    ["./imgs/marketing.png", "Marketing and Branding", "marketing"],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075702/living-images/insurance_xccutc.png",
      "General Insurance",
      "#",
    ],
    ["./imgs/event.png", "Event Management", "#"],
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
    ["./imgs/video.png", "Videography", "#"],
    ["./imgs/content.jpeg", "Content Creation ", "#"],
  ];
  // const images = [
  // {
  //   original: `https://res.cloudinary.com/living-solutions/image/upload/v1633085818/living-images/carousel-images/rudn-c_q9zut3.png`,
  //   alt: `Rudn Enclave`,
  // },
  // {
  //   original: `https://res.cloudinary.com/living-solutions/image/upload/v1633085812/living-images/carousel-images/kabir-c_j1hczr.png`,

  //   alt: `Fauji Kabirwala Power Plant`,
  // },
  // {
  //   original: `https://res.cloudinary.com/living-solutions/image/upload/v1633085805/living-images/carousel-images/uic-c_zrydtc.jpg`,

  //   alt: `UIC Pakistan`,
  // },

  // {
  //   original: `https://res.cloudinary.com/living-solutions/image/upload/v1633085816/living-images/carousel-images/wind-c_yordfk.png`,
  //   alt: `Foundation Wind Pakistan`,
  // },
  // {
  //   original: `https://scontent.fisb5-1.fna.fbcdn.net/v/t1.6435-9/173150569_257525429448213_5624051672270074730_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_ohc=BV6hLA5gKmYAX8oIj29&_nc_ht=scontent.fisb5-1.fna&oh=bf17cc6f893596388d40ffef23b3472b&oe=6182A17F`,
  //   alt: "Living Solutions",
  // },
  // {
  //   original: `https://scontent.fisb5-1.fna.fbcdn.net/v/t1.6435-9/156202236_219977533203003_7062472743001516321_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_ohc=-qFc_9SlX2QAX-w8xla&_nc_ht=scontent.fisb5-1.fna&oh=60e37ddbb87a72b9f4fdc78532eeb205&oe=6181F3F0`,
  //   alt: "Living Solutions",
  // },
  // {
  //   original: `https://scontent.fisb5-1.fna.fbcdn.net/v/t1.6435-9/129044168_157348076132616_174287923300070880_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_ohc=rVhOveeEjWgAX-co83w&tn=svU6cqP2Xm7TWh2n&_nc_ht=scontent.fisb5-1.fna&oh=76365bebd8fb6f9572ca99a27311509d&oe=618171CD`,
  //   alt: "Living Solutions",
  // },
  // {
  //   original: `https://scontent.fisb5-2.fna.fbcdn.net/v/t1.6435-9/122481832_129246602276097_6164394889491914409_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=e3f864&_nc_ohc=-2iV_-4bSboAX9K3frR&_nc_ht=scontent.fisb5-2.fna&oh=b8ee15659ac0ed7dda3ffde80a3add5f&oe=6184BC5D`,
  //   alt: "Living Solutions",
  // },
  // ];
  return (
    <>
      <NavBar />
      {/* <div className="w-screen flex justify-center">
        <div className="w-auto md:w-3/4">
          <ReactImageGallery
            showPlayButton={false}
            lazyLoad={true}
            items={images}
            showBullets={true}
            showIndex={false}
            showThumbnails={false}
            showNav={false}
            showFullscreenButton={false}
            slideDuration={1000}
            slideInterval={5000}
          />
        </div>
      </div> */}

      <div className="grid ">
        <img className="w-screen" src="./imgs/title.jpg" alt="main" />
        <div>
          <div className="mx-6 grid gap-6 text-justify">
            <h2 className="md:text-2xl mt-2 mb-2 md:mb-6 text-living-red">
              Delivering Excellence
            </h2>
            <h2 className="text-base md:text-2xl font-bold text-living-red">
              What we do
            </h2>
            <h3 className="text-base md:text-xl font-bold">
              We are here to manage quality consulting services and investment
              plan
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
        <h2 className="grid w-full justify-center pt-4 text-xl md:text-2xl text-living-red underline">
          Our Services
        </h2>
      </Link>
      <div className="grid grid-cols-2 md:grid-cols-3 pb-16 gap-x-6 md:gap-x-16 gap-y-4 md:gap-y-10 px-6 text-xs pt-6 lg:text-xl">
        {tiles.map((tile, index) => (
          <Tile key={index} imgPath={tile[0]} alt={tile[1]} link={tile[2]} />
        ))}
      </div>
      <Link to="/clients">
        <h3 className="text-xl md:text-2xl text-center mb-4 md:mb-16 text-living-red underline">
          Portfolio
        </h3>
      </Link>
      <div className="grid grid-cols-2 md:grid-cols-4 text-xs lg:text-xl gap-4 mx-6 mb-4 md:mb-10">
        {clients.map((client) => (
          <Client imgPath={client[0]} alt={client[1]} />
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
              <CountUp start={10374} end={30000} duration={9999} />
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
