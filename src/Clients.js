import Footer from "./Footer";
import NavBar from "./Navbar";
import Client from "./Client";

function Clients() {
  const clients = [
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633598549/clients/kabir_bw4dk5.svg",
      "Fauji Kabirwala",
    ],

    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1634120070/clients/vision4life_esyiul.svg",
      "Vision 4 life",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633598530/clients/chamber_atoepj.svg",
      "islamabad chamber of commerce and industry",
    ],

    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633598535/clients/imos_qdsfmj.svg",
      "imos",
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
      "https://res.cloudinary.com/living-solutions/image/upload/v1633598552/clients/uic_cxj9ej.svg",
      "UIC insurance Pakistan",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633598550/clients/spi_sfoapp.svg",
      "SPI insurance Pakistan",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633598538/clients/foundation_i64ngg.svg",
      "foundation wind energy limited",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633598548/clients/next_vlvxtr.svg",
      "Next Health Pakistans",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633598538/clients/icon_ydgtba.svg",
      "icon enclave",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633598538/clients/iveco_jkzuh0.svg",
      "iveco-astra",
    ],

    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633598534/clients/cart_lmdnls.svg",
      "D Road Cart",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633598533/clients/catalyst_vwsnib.svg",
      "Catalyst",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633598580/clients/jugnu_ugct75.svg",
      "Jugnu",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633598549/clients/keto_iiqkjn.svg",
      "Planet Keto",
    ],

    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633598547/clients/latif_nmqe2y.svg",
      "Latif Group",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633598527/clients/bike_zy6drs.svg",
      "Bike Master",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633598527/clients/adam_st7gy8.svg",
      "adam motors",
    ],

    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633598531/clients/ehtesham_euahh9.svg",
      "Ehteshaam photography",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633598553/clients/vs_duqbjs.svg",
      "Vectors and Scalers",
    ],

    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633598546/clients/isha_xcds8u.svg",
      "Beauty Salon and makeup artist",
    ],

    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633598533/clients/huma_lr1eow.svg",
      "Ghar ka khana by Huma",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633598556/clients/vision_o49ehy.svg",
      "True Sight Pakistan",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633598529/clients/bug_wzrang.svg",
      "ShutterBug",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633598547/clients/car_vrfiy6.svg",
      "Car Craft Pakistan",
    ],
  ];
  return (
    <>
      <NavBar />

      <h3 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-4 mt-4 md:mb-16 md:mt-10 text-living-red">
        Our Clients
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 text-xs lg:text-xl gap-4 mb-4 md:mb-16">
        {clients.map((client) => (
          <Client imgPath={client[0]} alt={client[1]} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Clients;
