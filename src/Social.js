import Footer from "./Footer";
import NavBar from "./Navbar";

function Social() {
  return (
    <>
      <NavBar />
      <img src="/imgs/banner.jpg" alt="banner" />

      <div className="prose-lg m-10">
        <h2>Social Responsibility</h2>
        <p>
          Corporate Social Responsibility (CSR) has become a major issue for the
          whole world. To be a part of this global issue, Living Solutions Pvt
          Ltd is trying to do its part with full efforts and dedication it’s all
          about companies' active and efficient work with the environment, human
          rights, labor, and anti-corruption issues which represent they take
          concern for the impacts on the environment and society.
        </p>
      </div>
      <div className="grid justify-center pb-20"></div>
      <Footer />
    </>
  );
}

export default Social;
