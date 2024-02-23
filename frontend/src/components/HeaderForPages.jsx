import React from 'react'
const HeaderForPages = (props) => {
  const { heading, para } = props
  return (
    <>
      {" "}
      <div className="bg-gray-800  h-[25rem] flex flex-col justify-center items-center   gap-4">
        <h1 className="text-5xl font-bold flex flex-wrap text-white">
          {heading}
        </h1>
        <p className="w-[50%] text-center p-4 text-gray-200">{para}</p>
      </div>
      <svg
        className="fill-gray-800 bg-gray-100"
        viewBox="0 0 1440 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1440 0H0V57C720 0 1440 57 1440 57V0Z"></path>
      </svg>
    </>
  );
}

export default HeaderForPages