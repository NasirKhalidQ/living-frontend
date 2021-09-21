import { useState } from "react";
import Location from "./Location";
import Mobile from "./Mobile";
import Mail from "./Mail";

function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleForm(e) {
    e.preventDefault();
    if (e.target.id === "name") {
      const newData = { ...formData, name: e.target.value };
      setFormData(newData);
    } else if (e.target.id === "email") {
      const newData = { ...formData, email: e.target.value };
      setFormData(newData);
    } else if (e.target.id === "message") {
      const newData = { ...formData, message: e.target.value };
      setFormData(newData);
    }
  }

  function closeModal() {
    setIsOpen(false);
  }

  function resetForm() {
    setFormData({
      name: "",
      email: "",
      category: "",
      message: "",
    });
  }

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const submit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then(() => {
        setIsOpen(true);
        resetForm();
      })
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <>
      <section className="relative">
        <div className="text-lg mt-30 justify-center max-w-full mx-auto px-6 py-12 divide-y md:max-w-4xl">
          <div className="grid sm:grid-cols-2">
            <div className="grid gap-6">
              <label className="block">
                <span className="text-accusoft-white text-xl font-semi-bold">
                  Leave us a message
                </span>
              </label>
              <form className="grid gap-6" onSubmit={submit}>
                <input type="hidden" name="form-name" value="contact" />

                <label className="block">
                  <span className="text-accusoft-white">Full Name</span>
                  <input
                    type="text"
                    onChange={handleForm}
                    value={formData.name}
                    name="name"
                    id="name"
                    className="mt-1 block w-full bg-transparent rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-1 focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </label>
                <label className="block">
                  <span className="text-accusoft-white">Email Address</span>
                  <input
                    type="email"
                    name="email"
                    onChange={handleForm}
                    value={formData.email}
                    id="email"
                    className="mt-1 block w-full bg-transparent rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-1 focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </label>
                <label className="block">
                  <span className="text-accusoft-white">Category</span>
                  <select
                    type="text"
                    name="category"
                    onChange={handleForm}
                    value={formData.category}
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
                  <span className="text-accusoft-white">Your Message</span>
                  <textarea
                    type="text"
                    name="message"
                    onChange={handleForm}
                    value={formData.message}
                    id="message"
                    className="mt-1 block w-full bg-transparent rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-1 focus:ring-indigo-200 focus:ring-opacity-50"
                    rows="6"
                  ></textarea>
                </label>
                <button
                  type="submit"
                  className="py-2 w-full px-4 rounded-lg shadow-md border-green-400 border-2 hover:bg-green-50 text-green-400"
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="grid mt-20 md:ml-24 gap-6 md:gap-0">
              <div className="inline-flex">
                <Location />
                <p className="ml-2">
                  Visit our Office: Office # 1 and 2 , Plaza 57, Wallayat
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
    </>
  );
}

export default Contact;
