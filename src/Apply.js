import { useState } from "react";
import Modal from "./Modal";
import NavBar from "./Navbar";
import Footer from "./Footer";
import { useForm } from "react-hook-form";

function Apply() {
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
    const { name, email, position, intro, number } = data;

    const encodedName = encodeURIComponent(name);
    const encodedEmail = encodeURIComponent(email);
    const encodedPosition = encodeURIComponent(position);
    const encodedIntro = encodeURIComponent(intro);
    const encodedPhone = encodeURIComponent(number);

    await (
      await fetch(
        `https://living-solutions.netlify.app/.netlify/functions/test?userName=${encodedName}&userEmail=${encodedEmail}&userPosition=${encodedPosition}&userIntro=${encodedIntro}&userPhone=${encodedPhone}`
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
                <span className="text-accusoft-white text-xl">
                  Join our team!
                </span>
              </label>
              <label className="block w-full">
                <p className=" text-gray-400 text-sm">
                  Please fill out the form below and we will review your
                  application.
                </p>
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
                  <span className="text-accusoft-white">Position applied</span>
                  <select
                    {...register("position")}
                    type="text"
                    id="position"
                    className="form-select mt-1 block w-full bg-transparent rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-1 focus:ring-indigo-200 focus:ring-opacity-50"
                  >
                    <option value="Position 1">Position 1</option>
                    <option value="Position 2">Position 2</option>
                    <option value="Position 3">Position 3</option>
                    <option value="Position 4">Position 4</option>
                    <option value="Others">
                      Others(Please select this if position is not listed)
                    </option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-accusoft-white">
                    Brief Introduction
                  </span>
                  <textarea
                    {...register("intro")}
                    type="text"
                    id="intro"
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
            <div className="hidden sm:flex row-span-2 pl-10 ">
              <img
                className="w-full h-full"
                src="./imgs/apply.svg"
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Apply;
