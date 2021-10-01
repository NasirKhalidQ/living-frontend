import Footer from "./Footer";
import NavBar from "./Navbar";
import Client from "./Client";

function Clients() {
  const clients = [
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075709/living-images/rudn_xwtmpc.png",
      "rudn enclave",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075707/living-images/kabir_y7db4u.png",
      "Fauji Kabirwala",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075705/living-images/iveco_uahr7s.png",
      "iveco-astra",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075710/living-images/rmrsco_ml3sdh.png",
      "RMRSCO Pvt limited",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075701/living-images/imos_vvhs04.png",
      "imos",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075713/living-images/uic_dyset8.png",
      "UIC insurance Pakistan",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075714/living-images/wind_yxhc65.png",
      "foundation wind energy limited",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075706/living-images/next_yofzik.png",
      "Next Health Pakistans",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075702/living-images/icon_xghgrd.png",
      "icon enclave",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075711/living-images/spi_zkvojd.png",
      "SPI insurance Pakistan",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075704/living-images/ithm_sduwkg.png",
      "ITHM rawalpindi",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075715/living-images/xenia_ru0amv.png",
      "Xenia Group of Hospitality",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075714/living-images/vs_qxsp3s.png",
      "Vectors and Scalers",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075706/living-images/pak_bw2hmv.png",
      "Pak Property",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075698/living-images/bike_iij7k6.png",
      "Bike Master",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075698/living-images/adam_ehdpft.png",
      "adam motors",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075698/living-images/cart_jwvhuf.png",
      "D Road Cart",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075698/living-images/catalyst_pzf6xx.png",
      "Catalyst",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075699/living-images/ehtesham_ojbcds.png",
      "Ehteshaam photography",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075704/living-images/jugnu_ysde6x.png",
      "Jugnu",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075705/living-images/latif_lggu4h.png",
      "Latif Group",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075702/living-images/chamber_rcenfz.png",
      "islamabad chamber of commerce and industry",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075702/living-images/isha_t6spgi.png",
      "Beauty Salon and makeup artist",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075707/living-images/planetketo_acu7lt.png",
      "Planet Keto",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075712/living-images/shutterbug_seexdg.png",
      "ShutterBug",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075701/living-images/huma_fuojcy.png",
      "Ghar ka khana by Huma",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075714/living-images/true_dnxics.png",
      "True Sight Pakistan",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633075698/living-images/car_yemrc9.png",
      "Car Craft Pakistan",
    ],
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
