import { useHistory } from "react-router";
import Footer from "./Footer";
import NavBar from "./Navbar";

function General() {
  const history = useHistory();
  return (
    <>
      <NavBar />
      <img src="/imgs/banner.jpg" alt="banner" />

      <div className="prose-lg m-10">
        <h2>Heading</h2>
        <p>
          Text......Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla non tincidunt velit. Nunc porta dui id diam efficitur
          consectetur. Praesent lectus mi, fermentum nec dolor venenatis,
          egestas dapibus lacus. Fusce facilisis nisl vel malesuada fermentum.
          Nullam placerat non dolor sit amet consectetur. Sed interdum ut purus
          a euismod. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Duis in hendrerit eros. Morbi ultrices velit ac arcu
          feugiat, sit amet condimentum metus efficitur. Nam vestibulum felis
          dolor, nec suscipit sapien luctus et. Nunc rhoncus eros massa, non
          finibus erat pulvinar ut. Pellentesque a tincidunt erat, vel fringilla
          mauris. Etiam elementum, dui sit amet tempus ullamcorper, augue ante
          vulputate erat, a suscipit sem arcu sed odio. Duis ut lectus nec erat
          convallis dapibus ac eget libero. Morbi quis nisi sit amet erat
          aliquam fringilla. Vestibulum at dui diam. Curabitur nec suscipit
          augue. Nunc cursus purus et odio gravida, nec egestas tellus
          ultricies. Integer ut laoreet sem. Aenean at efficitur risus, vitae
          luctus orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Morbi velit ex, sodales tempor ipsum id, lobortis lacinia mauris.
          Etiam vel nulla a massa sodales gravida. Curabitur vehicula lectus a
          aliquam luctus. Praesent varius velit sed massa sagittis finibus.
          Maecenas volutpat vel eros vel convallis. Vivamus iaculis tempor
          mauris, non pellentesque leo aliquam et. Aliquam sem nibh, feugiat a
          ex et, consectetur iaculis elit. Etiam hendrerit varius tincidunt.
          Curabitur venenatis pretium vulputate. Donec molestie, purus in
          blandit tempor, dui turpis cursus magna, a posuere nisi massa eget
          justo. Maecenas facilisis placerat est, consectetur placerat augue
          vulputate nec. Nam sed molestie turpis, vitae bibendum dui. Duis nec
          nulla rutrum velit consectetur maximus in nec ante. Praesent a blandit
          diam. Etiam eu molestie quam, ac faucibus eros. Nunc viverra laoreet
          sagittis. Quisque sit amet aliquam urna. Vestibulum molestie, erat et
          facilisis eleifend, urna orci aliquet magna, ut dapibus metus nunc in
          felis. Integer pellentesque lacus aliquam blandit tincidunt.
          Vestibulum enim ex, eleifend sed sagittis in, varius non orci. Donec
          dui orci, iaculis vel mi eget, blandit tempor turpis. Nam ipsum nulla,
          gravida sed hendrerit vitae, ornare sed urna. Vivamus luctus posuere
          elit quis congue. Nulla blandit risus ut eros mattis, eget feugiat ex
          sollicitudin. Maecenas semper urna quis tellus efficitur viverra.
          Vestibulum vitae ligula at enim commodo cursus molestie at metus.
          Nulla vehicula rutrum aliquet. Nullam ultricies consequat dapibus.
          Suspendisse consectetur lorem vitae metus bibendum posuere. Nullam ut
          orci ex. Aliquam erat volutpat. Sed ornare id diam quis iaculis. Etiam
          non libero neque. In non ultrices nisi.
        </p>
        <div className="grid justify-items-center mt-12 mb-10 md:mb-10">
          <button
            className="py-2 px-8 shadow-md bg-living-red hover:opacity-80 text-white"
            onClick={() => history.push("/quote")}
          >
            Get a Quote
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default General;
