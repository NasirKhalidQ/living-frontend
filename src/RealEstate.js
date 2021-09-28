import Footer from "./Footer";
import NavBar from "./Navbar";
import { useHistory } from "react-router-dom";

function RealEstate() {
  const history = useHistory();

  return (
    <>
      <NavBar />
      <section className="relative">
        <div className="grid grid-flow-rows md:grid-cols-3">
          <div>
            <img
              className="h-full"
              src="./imgs/real-estate/rudn.jpg"
              alt="Rudn Enclave"
            />
          </div>
          <div className="md:col-span-2 mt-2 md:mt-10 ml-10">
            <h2 className="text-lg md:text-3xl underline mb-5">
              Real Estate &amp; Construction
            </h2>
            <h3 className="text-lg md:text-2xl">Rudn Enclave</h3>
            <p className="text-sm md:text-base mt-5 text-justify mr-5 sm:leading-loose">
              Rudn Enclave is a beautiful housing society spanning over 10,000
              Kanal developing by Rmrsco Pvt. Ltd. near Rawalpindi. It is close
              to Adiala Road adjacent to the Bahria Town Phase-8, M2 Motorway,
              N-5 National Highway, Chakri and Thalian Interchange, CPEC new
              industrial commercial zone, and newly proposed Rawalpindi Ring
              Road while overlooking natural water body, Dam Khalsa. The NOC
              approval is under process with the Rawalpindi Development
              Authority (RDA).
            </p>
            <div className="grid justify-items-center mt-12 mb-10 md:mb-10">
              <button
                className="py-2 px-8 shadow-md bg-living-header hover:bg-gray-700 text-white"
                onClick={() => history.push("/rudn")}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="relative">
        <div className="grid grid-flow-rows md:grid-cols-3 border-t-2 border-b-2 border-living-header">
          <div>
            <img
              className="h-full"
              src="./imgs/real-estate/icon.png"
              alt="Digital Marketing"
            />
          </div>
          <div className="md:col-span-2 mt-2 md:mt-10 ml-10">
            <h3 className="text-lg md:text-2xl">Icon Enclave</h3>
            <p className="text-sm md:text-base mt-5 text-justify mr-5">
              Rudn Enclave is a beautiful housing society spanning over 10,000
              Kanal developing by Rmrsco Pvt. Ltd. near Rawalpindi. It is close
              to Adiala Road adjacent to the Bahria Town Phase-8, M2 Motorway,
              N-5 National Highway, Chakri and Thalian Interchange, CPEC new
              industrial commercial zone, and newly proposed Rawalpindi Ring
              Road while overlooking natural water body, Dam Khalsa. The NOC
              approval is under process with the Rawalpindi Development
              Authority (RDA).
            </p>
            <div className="grid justify-items-center mt-12 mb-10 md:mb-10">
              <button
                className="py-2 px-8 shadow-md bg-living-header hover:bg-gray-700 text-white sm:mb-10 md:mb-0"
                onClick={() => history.push("#")}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="grid grid-flow-rows mt-10 ml-10 ">
          <h3 className="text-2xl">Building Dreams</h3>
          <div className="grid md:grid-cols-6">
            <p className="mt-2 text-justify mr-5 col-span-4">
              Now is the great time to invest for tomorrow, put your money into
              an investment and your money is going to work for you and pay you
              back. What can be a more beneficial and hot favorite for
              Investment other than Real Estate and property business? Thinking
              to invest in real estate, here we are to lead you throughout the
              way. We guide you to invest in well-chosen assets to enjoy huge
              returns and foreseeable cashflows.
            </p>
          </div>
        </div>
        <div className="grid grid-flow-rows mt-10 ml-10">
          <h3 className="text-2xl">Right Platform</h3>
          <div className="grid md:grid-cols-6">
            <p className="mt-2 text-justify mr-5 col-span-4">
              This platform helps you in producing, selling, and buying real
              estate. You will be introduced to the investment opportunities
              according to your financial situations, investment goals,
              investment styles, and the opportunities with the least risks
              involved. Being a part of our business community, you will get a
              chance to be introduced to the Real Estate Investment Groups
              (REIGs), Real Estate Investment Trusts (REITs), and different
              online and digital real estate platforms. Aspiring real estate
              investors will be informed of the different ways of investing in
              the property business which includes rental properties, house
              flipping, grey structures investment, and investment groups and
              trusts. <br></br>
              Our community provides you the opportunity to invest in
              residential real estate (involving newly constructed and resale
              houses), commercial real estate (involving shopping malls,
              shopping centers, hotels, restaurants, cafes, medical and
              educational institutes buildings), industrial real estate (which
              include manufacturing and service industry) and land real estate
              which includes residential and commercial vacant plots and unbuild
              lands. Although real estate investment is passive, it provides you
              the ability to leverage and our business platform will familiarize
              you with the strategy of utilizing borrowed capital, investment
              tools, and financial instruments to maximize the yield and latent
              gain of your investment.
            </p>
            <img
              className="col-span-2 pr-2 hidden md:flex"
              src="./imgs/real-estate/realestate.jpg"
              alt="Creative"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default RealEstate;
