import React from "react";

const NewAssistant = () => {
  return (
    <div className="bg-gray-800 p-10 my-20">
      <h1 className="text-4xl text-white">ADD NEW ASSISTANT</h1>
      <form className="form-control">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-white">First Name*</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-white">Last Name*</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-white">Email*</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-white">User Name*</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-white">Password*</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs mb-10"
          />
        </div>
        <div>
        <button class="btn btn-info px-10 py-3 mr-5">Submit</button>
        <button class="btn btn-error px-10 py-3">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default NewAssistant;
