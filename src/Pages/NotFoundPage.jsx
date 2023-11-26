import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center py-52">
      <h1 className="text-2xl font-bold flex justify-center items-center">
        404 || Page not found
      </h1>
      <a href="/" className="text-indigo-600 underline">
        Back to home page
      </a>
    </div>
  );
};

export default NotFoundPage;
