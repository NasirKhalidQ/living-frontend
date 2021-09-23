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
              <Modal isOpen={isOpen} closeModal={closeModal} />
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
