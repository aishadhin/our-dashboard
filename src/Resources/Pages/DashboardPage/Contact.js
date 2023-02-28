import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert2";

const Contacts = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h21h2cn",
        "template_xqd0d55",
        form.current,
        "user_gMTsEXepOjxBr7dInIGlo"
      )
      .then(
        (result) => {
          swal(
            "Your Email Already Sent.",
            result.text,
            window.location.reload()
          );
        },
        (error) => {
          alert();
          swal("Error!", error.text, "error");
        }
      );
  };

  return (
    <div className="container mx-auto px-3 lg:px-20 py-5 mt-20">
      <div className="static">
        <h1 className="text-6xl	my-5 text-black" data-aos="fade-right">
          Contact
        </h1>
      </div>
      {/* contact sections  */}
      <div className="my-20 lg:grid lg:grid-cols-3 mx-auto">
        {/* contact via email  */}
        <div className="lg:mx-10 my-5 py-10 px-10 bg-black rounded-lg border-2 lg:col-span-2">
            <h1
              className="text-2xl text-white"
              data-aos="zoom-in"
              style={{ fontFamily: "Poppins" }}
            >
              <span data-aos="fade-up-left">
                I'm always open to discussing{" "}
              </span>
              <br />{" "}
              <span className="text-white" data-aos="fade-up-right">
                design work or partnerships & Development
              </span>
            </h1>
          <form ref={form} onSubmit={sendEmail} className="">
            <div className="my-5 form-control">
              <input
                type="text"
                name="user_name"
                className="bg-transparent focus:outline-0 border-b-2 border-b-gray-100 w-full max-w-xs pb-2 mr-2"
                placeholder="Your name*"
                data-aos="zoom-out"
              />
              
              <input
                type="text"
                name="user_email"
                className="bg-transparent focus:outline-0 border-b-2 border-b-gray-100 w-full max-w-xs pb-2 mr-2 my-10"
                placeholder="Your email*"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              />
              
              <select className="select w-full max-w-xs">
                <option disabled selected>
                  Pick your favorite Simpson
                </option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option>
              </select>
              
              <input
                type="text"
                name="user_subject"
                className="bg-transparent focus:outline-0 border-b-2 border-b-gray-100 w-full max-w-xs pb-2 mr-2 my-10"
                placeholder="Subject*"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              />
            </div>
            <textarea
              name="message"
              id=""
              cols="90"
              rows="4"
              placeholder="Your message*"
              className="
              bg-transparent
              focus:outline-0
              border-b-2
              border-b-gray-100
              pb-10
              my-6
              w-[100%]"
            ></textarea>{" "}
            <br />
            <button class="btn btn-outline btn-primary px-10 py-3">
              Add Attachment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
