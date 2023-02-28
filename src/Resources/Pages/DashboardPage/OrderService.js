import React from "react";

const OrderService = () => {
  return (
    <div className="bg-gray-500 p-10">
      <h1 className="text-4xl text-white">ORDER NEW SERVICE</h1>
      <form className="">
        <div className="my-5 form-control">
          <div className="flex justify-between">
          <select className="select w-full max-w-xs my-10">
            <option disabled selected>
              Select a Client*
            </option>
            <option>Business Name - Address</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>
          <div className="">
          <button className="btn btn-warning mx-5">Save Draft</button>
          <button className="btn btn-error">Cancel</button>
          </div>
          </div>
          <select className="select w-full max-w-xs">
            <option disabled selected>
              Select a Service*
            </option>
            <option>--Select a Service--</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>
          <div className="form-control w-full max-w-xs my-10">
            <label className="label">
              <span className="label-text text-white">What is your name?</span>
            </label>
            <input
              type="text"
              name="user_subject"
              className="bg-transparent focus:outline-0 border-b-2 border-b-gray-100 w-full max-w-xs pb-2 mr-2"
              placeholder=""
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            />
          </div>
        </div>
        <input
          type="file"
          className="file-input file-input-bordered file-input-primary w-full max-w-xs"
        />
        <textarea
          name="comment"
          id=""
          cols="90"
          rows="4"
          placeholder="comment"
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
        <button class="btn btn-info px-10 py-3">
          Submit Order Now
        </button>
        <div className="my-10">
        <input type="date" className="rounded p-3" />
        </div>
      </form>
    </div>
  );
};

export default OrderService;
