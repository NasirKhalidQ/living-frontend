import Footer from "./Footer";
import NavBar from "./Navbar";
import Client from "./Client";

function Clients() {
  const clients = [
    ["./imgs/rudn.png", "rudn enclave"],
    ["./imgs/iveco.png", "iveco-astra"],
    ["./imgs/imos.png", "imos"],
    ["./imgs/uic.png", "UIC insurance Pakistan"],
    ["./imgs/wind.png", "foundation wind energy limited"],
    ["./imgs/chamber.png", "islamabad chamber of commerce and industry"],
    ["./imgs/icon.png", "icon enclave"],
    ["./imgs/spi.png", "SPI insurance Pakistan"],
    ["./imgs/isha.png", "Beauty Salon and makeup artist"],
    ["./imgs/ithm.png", "ITHM rawalpindi"],
    ["./imgs/huma.png", "Ghar ka khana by Huma"],
    ["./imgs/vs.png", "Vectors and Scalers"],
    ["./imgs/rmrsco.png", "RMRSCO Pvt limited"],
    ["./imgs/pak.png", "Pak Property"],
    ["./imgs/bike.png", "Bike Master"],
    ["./imgs/adam.png", "adam motors"],
    ["./imgs/cart.png", "D Road Cart"],
    ["./imgs/catalyst.png", "Catalyst"],
    ["./imgs/ehtesham.png", "Ehteshaam photography"],
    ["./imgs/jugnu.png", "Jugnu"],
    ["./imgs/latif.png", "Latif Group"],
    ["./imgs/planetketo.png", "Planet Keto"],
    ["./imgs/shutterbug.png", "ShutterBug"],
    ["./imgs/xenia.png", "Xenia Group of Hospitality"],
  ];
  return (
    <>
      <NavBar />
      <h3 className="text-xl md:text-3xl text-center mb-4 mt-4 md:mb-16 md:mt-10">
        Our Clients
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 text-xs lg:text-xl gap-4">
        {clients.map((client) => (
          <Client imgPath={client[0]} alt={client[1]} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Clients;
