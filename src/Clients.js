import Footer from "./Footer";
import NavBar from "./Navbar";

function Clients() {
  return (
    <>
      <NavBar />
      <h3 className="text-xl md:text-3xl text-center mb-4 mt-4 md:mb-16 md:mt-10">
        Our Clients
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 text-xs lg:text-xl gap-4">
        <img
          className="object-cover"
          src="./imgs/rudn.png"
          alt="rudn enclave"
        />
        <img
          className="object-cover"
          src="./imgs/iveco.png"
          alt="iveco-astra"
        />
        <img className="object-cover" src="./imgs/imos.png" alt="imos" />
        <img
          className="object-cover"
          src="./imgs/uic.png"
          alt="UIC insurance Pakistan"
        />
        <img
          className="object-cover"
          src="./imgs/wind.png"
          alt="foundation wind energy limited"
        />

        <img
          className="object-cover"
          src="./imgs/chamber.png"
          alt="islamabad chamber of commerce and industry"
        />
        <img className="object-cover" src="./imgs/adam.png" alt="adam motors" />

        <img
          className="object-cover"
          src="./imgs/icon.png"
          alt="icon enclave"
        />

        <img
          className="object-cover"
          src="./imgs/spi.png"
          alt="SPI insurance Pakistan"
        />
        <img
          className="object-cover"
          src="./imgs/isha.png"
          alt="Beauty Salon and makeup artist"
        />
        <img
          className="object-cover"
          src="./imgs/ithm.png"
          alt="ITHM rawalpindi"
        />
      </div>
      <Footer />
    </>
  );
}

export default Clients;
