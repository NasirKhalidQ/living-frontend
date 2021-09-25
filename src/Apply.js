import { useState } from "react";
import Modal from "./Modal";
import NavBar from "./Navbar";
import Footer from "./Footer";
import { useForm } from "react-hook-form";

function Apply() {
  const [isOpen, setIsOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [fileName, setFilename] = useState("");
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

    await fetch(
      `https://living-solutions.netlify.app/.netlify/functions/apply?userName=${encodedName}&userEmail=${encodedEmail}&userPosition=${encodedPosition}&userIntro=${encodedIntro}&userPhone=${encodedPhone}`
    );

    setIsOpen(true);
    setSending(false);
  };

  const uploadImage = async (files) => {
    setUploading(true);
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "p8c6f6ss");

    await fetch(`https://api.cloudinary.com/v1_1/living-solutions/raw/upload`, {
      method: "POST",
      body: formData,
      resource_type: "raw",
    });
    setFilename(files[0].name);
    setUploading(false);
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
                    <span className="text-xs text-red-700" id="emailHelp">
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
                    <span className="text-xs text-red-700" id="mobileHelp">
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
                    <option value="Marketing">Marketing</option>
                    <option value="Sales">Sales</option>
                    <option value="Content Writer">Content Writer</option>
                    <option value="Graphics Designer">Graphics Designer</option>
                    <option value="Architect">Architect</option>
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

                <label
                  for="file-upload"
                  className="py-2 w-full px-4 rounded-lg shadow-md border-blue-400 border-2 hover:bg-blue-50 text-blue-400 cursor-pointer text-center"
                >
                  {uploading ? "Uploading..." : "Upload CV"}
                </label>
                {!fileName && (
                  <span className="text-xs text-red-700" id="emailHelp">
                    Please upload your CV/Resume before submitting.
                  </span>
                )}
                {fileName && (
                  <span className="text-xs text-green-500">
                    File Successfully uploaded: {fileName}
                  </span>
                )}
                <span className="text-xs text-gray-800">
                  PDF and DocX files only
                </span>

                <input
                  onChange={(event) => {
                    uploadImage(event.target.files);
                  }}
                  id="file-upload"
                  type="file"
                  accept="application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  hidden
                  disabled={fileName ? true : false}
                />
                <button
                  className="py-2 w-full px-4 rounded-lg shadow-md border-green-400 border-2 hover:bg-green-50 text-green-400"
                  disabled={sending ? true : false}
                >
                  {sending ? "Sending..." : "Submit"}
                </button>
              </form>
              <Modal
                isOpen={isOpen}
                closeModal={closeModal}
                title="Job Application Received!"
                description="Your job application has been received. We will get back to you shortly."
              />
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
