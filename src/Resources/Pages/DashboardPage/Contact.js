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
        {/* contact items  */}
        <div className="lg:col-span-1">
          <div className="flex bg-black p-5 rounded-xl my-5">
            {/* numbers  */}
            <div className="ml-5" data-aos="zoom-out-left">
              <h1 className="text-xl text-white">Phone :</h1>
              <h1 className="text-xxl text-white">+8801629249295</h1>
            </div>
          </div>
          <div className="flex bg-black p-5 rounded-xl my-5">
            {/* numbers  */}
            <div className="ml-5" data-aos="zoom-out-left">
              <h1 className="text-xl text-white">Email :</h1>
              <h1 className="text-xxl text-white">
                shahriarrahmanheezol@gmail
              </h1>
            </div>
          </div>
          <div className="flex bg-black p-5 rounded-xl my-5">
            {/* numbers  */}
            <div className="ml-5" data-aos="zoom-out-left">
              <h1 className="text-xl text-white">Address :</h1>
              <h1 className="text-xxl text-white">
                Tejgaon I/A, Dhaka 1208, Bangladesh
              </h1>
            </div>
          </div>
        </div>
        {/* contact via email  */}
        <div className="lg:mx-10 my-5 py-10 px-10 bg-black rounded-lg border-2 lg:col-span-2">
          <form ref={form} onSubmit={sendEmail}>
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
            <div className=" my-5">
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
              <div className="dropdown dropdown-top dropdown-end">
                <label tabIndex={0} className="text-white m-1">
                  Click
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    Item 1
                  </li>
                  <li>
                    Item 2
                  </li>
                </ul>
              </div>
              <input
                type="text"
                name="user_subject"
                className="bg-transparent focus:outline-0 border-b-2 border-b-gray-100 w-full max-w-xs pb-2 mr-2"
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
