import { useHistory } from "react-router";
import Footer from "./Footer";
import NavBar from "./Navbar";
import Table from "./Table";

function Pricing() {
  const history = useHistory();
  return (
    <>
      <NavBar />
      <img src="/imgs/banner.jpg" alt="banner" />

      <div className="prose-lg m-10">
        <h2>Digital Marketing</h2>
        <p>
          Digital marketing experts here in Living Solutions Pvt Ltd use data to
          evaluate, explain, implement and enhance your customer experience
          journey.Our goal is to help you meet yours by designing a
          comprehensive strategy to get a more meaningful and mutually valuable
          relationship with your customers.
        </p>
      </div>
      <Table />
      <div className="grid justify-items-center mt-12 mb-10 md:mb-10">
        <button
          className="py-2 px-8 shadow-md bg-living-red hover:opacity-80 text-white"
          onClick={() => history.push("/quote")}
        >
          Get a Quote
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Pricing;
