import Footer from "./Footer";
import NavBar from "./Navbar";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Modal from "./Modal";

function RealEstate() {
  const lorem = `Text......Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
  non libero neque. In non ultrices nisi.`;

  const data = {
    rudn: {
      heading: "Rudn Enclave",
      description: lorem,
      imgSrc: "",
    },
    icon: {
      heading: "Icon Enclave",
      description: lorem,
      imgSrc: "",
    },
    cda: {
      heading: "CDA sectors",
      description: lorem,
      imgSrc: "",
    },
    mumtaz: {
      heading: "Mumtaz City",
      description: lorem,
      imgSrc: "",
    },
    life: {
      heading: "Life Residencia",
      description: lorem,
      imgSrc: "",
    },
    top: {
      heading: "Top City",
      description: lorem,
      imgSrc: "",
    },
    zarar: {
      heading: "Al-Zarar Heights",
      description: lorem,
      imgSrc: "",
    },
    bahria: {
      heading: "Bahria Town",
      description: lorem,
      imgSrc: "",
    },
    dha: {
      heading: "DHA",
      description: lorem,
      imgSrc: "",
    },
  };

  const { area } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function closeModal() {
    setIsOpen(false);
  }

  const submit = async (data) => {
    setSending(true);
    const { name, email, message, number } = data;

    const encodedName = encodeURIComponent(name);
    const encodedEmail = encodeURIComponent(email);
    const encodedCategory = encodeURIComponent(data[area].heading);
    const encodedMessage = encodeURIComponent(message);
    const encodedPhone = encodeURIComponent(number);

    await (
      await fetch(
        `https://living-solutions.netlify.app/.netlify/functions/property?userName=${encodedName}&userEmail=${encodedEmail}&userCategory=${encodedCategory}&userMessage=${encodedMessage}&userPhone=${encodedPhone}`
      )
    ).json();

    setIsOpen(true);
    setSending(false);
  };

  return (
    <>
      <NavBar />
      <img src="/imgs/banner.jpg" alt="banner" />
      <div className="prose-sm md:prose-lg m-10">
        <h2>{data[area].heading}</h2>
        <p>{data[area].description}</p>
        <section className="relative">
          <div className="text-lg mt-30 justify-center md:w-1/2 mx-auto px-6 py-12 divide-y md:max-w-4xl">
            <div className="grid">
              <div className="grid gap-6">
                <label className="block">
                  <span className="text-accusoft-white text-xl font-semi-bold">
                    Book your property now!
                  </span>
                </label>
                <form className="grid gap-6" onSubmit={handleSubmit(submit)}>
                  <label className="block">
                    <span className="text-accusoft-white">Full Name</span>
                    <input
                      {...register("name")}
                      type="text"
                      id="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-1 focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </label>
                  <label className="block">
                    <span className="text-accusoft-white">Email Address *</span>
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-1 focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    {errors.email && (
                      <span className="text-xs text-red-700" id="passwordHelp">
                        Please enter your email address here.
                      </span>
                    )}
                  </label>
                  <label className="block">
                    <span className="text-accusoft-white">Mobile Number *</span>
                    <input
                      {...register("number", {
                        required: true,
                        maxLength: 11,
                        minLength: 11,
                      })}
                      type="number"
                      id="phone"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-1 focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    {errors.number && (
                      <span className="text-xs text-red-700" id="passwordHelp">
                        Please enter your 11-digit mobile number here.
                      </span>
                    )}
                  </label>
                  <label className="block">
                    <span className="text-accusoft-white">Your Query</span>
                    <textarea
                      {...register("message")}
                      type="text"
                      id="message"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-1 focus:ring-indigo-200 focus:ring-opacity-50"
                      rows="6"
                    ></textarea>
                  </label>
                  <button
                    type="submit"
                    className="py-2 w-full shadow-md bg-living-red hover:bg-opacity-80 text-white"
                    disabled={sending ? true : false}
                  >
                    {sending ? "Sending..." : "Submit"}
                  </button>
                </form>
                <Modal
                  isOpen={isOpen}
                  closeModal={closeModal}
                  title="Message Sent"
                  description="Your message has been successfully received. We’ve notified
                    our consultants and they will be in touch with you soon!"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default RealEstate;
