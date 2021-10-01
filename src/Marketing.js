import Footer from "./Footer";
import NavBar from "./Navbar";
import { useHistory } from "react-router-dom";

function Marketing() {
  const history = useHistory();

  return (
    <>
      <NavBar />
      <section className="relative">
        <div className="grid grid-flow-rows md:grid-cols-2">
          <div>
            <img
              className="h-full"
              src="https://res.cloudinary.com/living-solutions/image/upload/v1633075712/living-images/marketing/conventional_udzkwv.jpg"
              alt="Conventional Marketing"
            />
          </div>
          <div className=" mt-2 md:mt-10 ml-10">
            <h3 className="text-lg md:text-3xl underline">
              Conventional Marketing
            </h3>
            <p className="text-sm md:text-base mt-5 text-justify mr-5 leading-relaxed">
              Delivering excellence is our key strategy in marketing. Changing
              market trends, the unstable value of inventory, ups and downs in
              the real estate market, varying technologies, growing competition
              in the market, and political situation in the surroundings are the
              major challenges that real estate investors and developers have to
              face these days. These issues and challenges arise the need for
              real estate marketing consultants. A real estate marketing
              consultant entices more buyers thus yields the maximum returns of
              an investment. Our marketing consultants specialize in all
              marketing channels such as traditional marketing, digital
              marketing, social media marketing, and online marketing.
            </p>
            <div className="grid justify-items-center mt-12 mb-10 md:mb-10">
              <button
                className="py-2 px-8 shadow-md bg-living-header hover:bg-gray-700 text-white"
                onClick={() => history.push("/contact")}
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="relative">
        <div className="grid grid-flow-rows md:grid-cols-2 border-t-2 border-b-2 border-living-header">
          <div>
            <img
              className="h-full"
              src="https://res.cloudinary.com/living-solutions/image/upload/v1633075775/living-images/marketing/digital_nwsa0e.jpg"
              alt="Digital Marketing"
            />
          </div>
          <div className=" mt-2 md:mt-10 ml-10">
            <h3 className="text-lg md:text-3xl underline">Digital Marketing</h3>
            <p className="text-sm md:text-base mt-5 text-justify mr-5 leading-relaxed">
              We add an enhanced perspective to the marketing strategy of our
              clients. We use flexible and data driven approaches to get an
              insight of your business. Referrals are good for a business but
              why not to reach a maximum number of audiences. Our marketing
              tactics are much more than word of mouth, so we ensure an
              efficient marketing strategy and its effective implementation. Our
              skilful consultants follow the strategy of lead generation and
              reach out to the new customers and clients who are yet unaware of
              our client’s business. Our marketing philosophy states the more
              you are visible to others more you will be approached by client.
            </p>
            <div className="grid justify-items-center mt-12 mb-10 md:mb-10">
              <button
                className="py-2 px-8 shadow-md bg-living-header hover:bg-gray-700 text-white sm:mb-10 md:mb-0"
                onClick={() => history.push("/contact")}
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="grid grid-flow-rows mt-10 ml-10 ">
          <h3 className="text-2xl">Current Market</h3>
          <div className="grid md:grid-cols-6">
            <p className="mt-2 text-justify mr-5 col-span-4">
              As the world is digitalizing, the need of the hour emphasises to
              transfer all the business marketing strategies to digital
              marketing as it is easily approachable, flexible, affordable,
              interactive and influencing. We offer a wide range of customizable
              digital marketing packages.
            </p>
          </div>
        </div>
        <div className="grid grid-flow-rows mt-10 ml-10">
          <h3 className="text-2xl">We Make Creative Solutions</h3>
          <div className="grid md:grid-cols-6">
            <p className="mt-2 text-justify mr-5 col-span-4">
              Our marketing plan targets the more customers as our strategy
              encircles value proposition, strategic positioning, and customer
              segmentation, pricing strategy and implementation support. Our
              social media marketing platform provides you the opportunity to
              directly reach to your customer and interact with him while
              delivering excellence. We use different well-known apps such as
              Facebook and Instagram for marketing of your business via
              sponsored posts and side advertisements. In order to increase your
              online visibility and create a larger reach we use another tool
              known as search engine optimization (SEO). We use this tool to its
              full potential to create a brand value of your business. Others
              digital marketing tools include pay per click advertising (PPC),
              app store optimization, content marketing and conversion ratio
              optimization. All these tools make our client business more
              visible and more approachable as the business website achieve a
              higher rank in the website search results and business application
              receives better ratings in the app store. Traditional marketing
              approach of 4 Ps (product, price, place and promotion) is also
              employed to create brand name by using strategies of product
              development, pricing strategy, place of sale and promotional
              offers and tactics.
            </p>
            <img
              className="col-span-2 pr-2 hidden md:flex"
              src="https://res.cloudinary.com/living-solutions/image/upload/v1633075715/living-images/marketing/creative_ndeook.png"
              alt="Creative"
            />
            <p className="mt-2 text-justify mr-5 mb-10 col-span-4">
              The promotional marketing means include Emails, newsletters,
              catalogues, brochure, sales, coupons, membership offers, blogs,
              print and digital advertising. In the modern era the newspapers
              have been replaced by websites. Every business owner wants to have
              a website of their own so they could interact to the customer
              directly. Our team of IT engineers and web developers also provide
              the services of web page design and development. Our marketing
              portfolio also includes application development for our clients
              and help them delivering excellence. Our aim is to convert a small
              real estate business owner to a business tycoon, so we market the
              business of our client and help him to connect to other businesses
              (B2B) and customers (B2C).
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Marketing;
