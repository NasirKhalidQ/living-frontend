import Footer from "./Footer";
import NavBar from "./Navbar";
import Tile from "./Tile";

function Marketings() {
  const tiles = [
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633764315/sub-categories/sub/digital_marketing_ljo5on.jpg",
      "Digital Marketing",
      "#",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633764317/sub-categories/sub/SEO_ekuiby.jpg",
      "SEO",
      "#",
    ],

    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633764319/sub-categories/sub/Social_Media_marketing_bukdxj.jpg",
      "Social Media Marketing",
      "#",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633764316/sub-categories/sub/Video_production_ujjk4j.jpg",
      "Video Production",
      "Video production",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633764315/sub-categories/sub/call_center_solution_krt4zs.jpg",
      "Call Center Solutions",
      "#",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633764315/sub-categories/sub/call_center_solution_krt4zs.jpg",
      "Telemarketing",
      "#",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633764316/sub-categories/sub/product_management_seybrx.png",
      "Product Management  ",
      "#",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633764324/sub-categories/sub/Sales_Management_zfzvg7.jpg",
      "Sales Management",
      "Video production",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633764316/sub-categories/sub/Graphic_Design_wukbui.jpg",
      "Graphic Design",
      "#",
    ],
  ];
  return (
    <>
      <NavBar />
      <div className="grid justify-center text-xl md:text-2xl text-living-red">
        <h1 className="mt-16 mb-10">Marketing and Branding</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 pb-16 gap-x-6 md:gap-x-16 gap-y-4 md:gap-y-10 px-6 text-xs pt-6 lg:text-xl">
        {tiles.map((tile, index) => (
          <Tile key={index} imgPath={tile[0]} alt={tile[1]} link={tile[2]} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Marketings;
