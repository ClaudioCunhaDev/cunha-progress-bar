import React, { useState } from "react";

export const Form = () => {
  const initialInputs = { name: "", email: "", maritialStatus: "", genre: "" };
  const [inputs, setInputs] = useState(initialInputs);

  const handleChange = (e) => {
    setInputs((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    alert("Form Sent :)");
    setInputs(initialInputs);
  };

  const progressBar = (inputs) => {
    const { name, email, maritialStatus, genre } = inputs;
    const validateFullName = name.split(" ");
    const valueToAdd = 100 / Object.keys(inputs).length;
    let result = 0;

    if (validateFullName[0].length > 1 && validateFullName[1]) {
      result += valueToAdd;
    }
    if (email.includes("@") && email.includes(".")) {
      result += valueToAdd;
    }
    if (maritialStatus) {
      result += valueToAdd;
    }
    if (genre) {
      result += valueToAdd;
    }
    return result;
  };

  return (
    <div className="w-full h-screen lg:w-[50%] bg-slate-300 p-3 flex justify-center items-center">
      <div className="bg-white border-2 rounded-lg p-5 flex flex-col gap-3">
        <div className="border-2 border-gray-500 rounded-lg h-3">
          <div
            className="h-full bg-blue-500 transition-all duration-500"
            style={{ width: `${progressBar(inputs)}%` }}
          ></div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col">
            <label htmlFor="name">Full Name</label>
            <input
              onChange={handleChange}
              name="name"
              type="text"
              id="name"
              placeholder="full name"
              className="p-1 border-2 rounded-md "
              value={inputs.name}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              id="name"
              placeholder="email"
              className="p-1 border-2 rounded-md"
              value={inputs.email}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="maritialStatus">Maritial Status</label>
          <select
            className="p-1 text-center flex border-2 rounded-md"
            value={inputs.maritialStatus}
            name="maritialStatus"
            onChange={handleChange}
            id="maritialStatus"
          >
            <option value="">- Select a option -</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="genre">Genre</label>
          <div className="flex gap-3 pl-1">
            <div className="flex gap-1 ">
              <input
                checked={inputs.genre === "fem"}
                value={"fem"}
                type="radio"
                name="genre"
                id="fem"
                onChange={handleChange}
              />
              <label htmlFor="fem">Fem</label>
            </div>
            <div className="flex gap-1">
              <input
                checked={inputs.genre === "male"}
                value={"male"}
                type="radio"
                name="genre"
                id="male"
                onChange={handleChange}
              />
              <label htmlFor="male">Male</label>
            </div>
            <div className="flex gap-1">
              <input
                checked={inputs.genre === "noGenre"}
                value={"noGenre"}
                type="radio"
                name="genre"
                id="noGenre"
                onChange={handleChange}
              />
              <label htmlFor="noGenre">I prefer not to say</label>
            </div>
          </div>
        </div>

        <button
          disabled={progressBar(inputs) !== 100 && true}
          onClick={handleSubmit}
          type="button"
          className="transition-all enabled:transition-all enabled:duration-[1000ms] enabled:hover:duration-300 disabled:transition-all disabled:duration-[1000ms] disabled:opacity-25 disabled:focus:outline-none disabled:hover:bg-transparent disabled:hover:text-blue-700 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
