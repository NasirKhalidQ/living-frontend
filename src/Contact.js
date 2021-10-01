import { useState } from "react";
import Location from "./Location";
import Mobile from "./Mobile";
import Mail from "./Mail";
import Modal from "./Modal";
import NavBar from "./Navbar";
import Footer from "./Footer";
import { useForm } from "react-hook-form";

function Contact() {
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
    const { name, email, category, message, number } = data;

    const encodedName = encodeURIComponent(name);
    const encodedEmail = encodeURIComponent(email);
    const encodedCategory = encodeURIComponent(category);
    const encodedMessage = encodeURIComponent(message);
    const encodedPhone = encodeURIComponent(number);

    await (
      await fetch(
        `https://living-solutions.netlify.app/.netlify/functions/test?userName=${encodedName}&userEmail=${encodedEmail}&userCategory=${encodedCategory}&userMessage=${encodedMessage}&userPhone=${encodedPhone}`
      )
    ).json();

    setIsOpen(true);
    setSending(false);
  };

  return (
    <>
      <NavBar />
      <section className="relative">
        <div className="text-lg mt-30 justify-center max-w-full mx-auto px-6 py-12 divide-y md:max-w-4xl">
          <div className="grid sm:grid-cols-2">
            <div className="grid gap-6">
              <label className="block">
                <span className="text-accusoft-white text-xl font-semi-bold">
                  Leave us a message
                </span>
              </label>
              <form className="grid gap-6" onSubmit={handleSubmit(submit)}>
                <label className="block">
                  <span className="text-accusoft-white">Full Name</span>
                  <input
                    {...register("name")}
                    type="text"
                    id="name"
                    className="mt-1 block w-full bg-transparent rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-1 focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </label>
                <label className="block">
                  <span className="text-accusoft-white">Email Address *</span>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    id="email"
                    className="mt-1 block w-full bg-transparent rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-1 focus:ring-indigo-200 focus:ring-opacity-50"
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
                    className="mt-1 block w-full bg-transparent rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-1 focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  {errors.number && (
                    <span className="text-xs text-red-700" id="passwordHelp">
                      Please enter your 11-digit mobile number here.
                    </span>
                  )}
                </label>
                <label className="block">
                  <span className="text-accusoft-white">Category</span>
                  <select
                    {...register("category")}
                    type="text"
                    id="category"
                    className="form-select mt-1 block w-full bg-transparent rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-1 focus:ring-indigo-200 focus:ring-opacity-50"
                  >
                    <option value="Marketing and Branding">
                      Marketing and Branding
                    </option>
                    <option value="Architecture and Interior design">
                      Architecture and Interior design
                    </option>
                    <option value="General Insurance">General Insurance</option>
                    <option value="Real Estate and Construction">
                      Real Estate and Construction
                    </option>
                    <option value="Government/Non-government Contracts">
                      Government/Non-government Contracts
                    </option>
                    <option value="Event Management">Event Management</option>
                    <option value="Procurement Solutions">
                      Procurement Solutions
                    </option>
                    <option value="Others">
                      Others(Please select this if you are not sure)
                    </option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-accusoft-white">Your Query</span>
                  <textarea
                    {...register("message")}
                    type="text"
                    id="message"
                    className="mt-1 block w-full bg-transparent rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-1 focus:ring-indigo-200 focus:ring-opacity-50"
                    rows="6"
                  ></textarea>
                </label>
                <button
                  type="submit"
                  className="py-2 w-full px-4 rounded-lg shadow-md border-green-400 border-2 hover:bg-green-50 text-green-400"
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
            <div className="grid mt-20 md:ml-24 gap-6 md:gap-0">
              <div className="inline-flex">
                <Location />
                <p className="ml-2">
                  Visit our Office: Office # 1 and 2, Plaza 57, Wallayat
                  Complex, Bahria Town Phase 7, Rawalpindi.
                </p>
              </div>
              <div className="inline-flex">
                <Mobile />
                <p className="sm:pl-4 md:pl-0">Call us: 0311-7862211</p>
              </div>
              <div className="inline-flex">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M34.1703 5.81288C30.4104 2.0664 25.4101 0.00210576 20.0828 0C9.10599 0 0.172229 8.89107 0.167836 19.8197C0.166372 23.313 1.08344 26.7231 2.82609 29.7288L0.000854492 40L10.5581 37.2438C13.4668 38.8228 16.7417 39.6549 20.0748 39.6563H20.083C31.0587 39.6563 39.9932 30.7641 39.9977 19.8355C39.9998 14.5393 37.9303 9.55936 34.1703 5.81288V5.81288ZM20.083 36.3087H20.0762C17.1061 36.3075 14.1929 35.5134 11.6516 34.0123L11.0471 33.6553L4.78242 35.2909L6.45462 29.2116L6.061 28.5884C4.40409 25.9654 3.52894 22.9337 3.53025 19.8209C3.53388 10.7375 10.9593 3.34762 20.0896 3.34762C24.5106 3.3493 28.6666 5.06517 31.7918 8.17911C34.9169 11.293 36.637 15.4322 36.6353 19.8342C36.6315 28.9182 29.2062 36.3087 20.083 36.3087V36.3087ZM29.1623 23.9703C28.6647 23.7224 26.2183 22.5242 25.7621 22.3589C25.306 22.1937 24.9743 22.1111 24.6425 22.6069C24.3109 23.1027 23.3572 24.2182 23.0669 24.5487C22.7767 24.8793 22.4864 24.9206 21.9888 24.6727C21.4912 24.4248 19.8879 23.9019 17.9872 22.2146C16.508 20.9014 15.5093 19.2795 15.219 18.7837C14.9288 18.2879 15.1882 18.0198 15.4372 17.7729C15.6611 17.551 15.9348 17.1945 16.1836 16.9052C16.4324 16.616 16.5153 16.4095 16.6812 16.079C16.8471 15.7484 16.7641 15.4592 16.6397 15.2113C16.5153 14.9634 15.5202 12.5257 15.1055 11.5341C14.7016 10.5683 14.2914 10.699 13.9859 10.6839C13.696 10.6695 13.3639 10.6664 13.0323 10.6664C12.7005 10.6664 12.1614 10.7904 11.7053 11.2862C11.2492 11.782 9.96378 12.9802 9.96378 15.4179C9.96378 17.8555 11.7468 20.2105 11.9956 20.5411C12.2444 20.8716 15.5044 25.8741 20.496 28.0193C21.6832 28.5296 22.6101 28.8343 23.3328 29.0627C24.5249 29.4395 25.6096 29.3863 26.467 29.2588C27.423 29.1167 29.411 28.0607 29.8257 26.9038C30.2404 25.747 30.2404 24.7554 30.116 24.5488C29.9916 24.3422 29.6599 24.2182 29.1623 23.9703"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="pl-2">WhatsApp: 0300-5059740</p>
              </div>
              <div className="inline-flex">
                <Mail />
                <p className="ml-2">
                  Drop us an email: info@livingsolutions.com.pk
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
