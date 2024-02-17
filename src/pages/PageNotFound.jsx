import React from "react";
import { BiArrowBack } from "react-icons/bi";
import NotFoundImg from "../404.png";
import {Link } from "react-router-dom";

const handleGoBack = () => {
  window.history.back();
};

const PageNotFound = () => {
  return (
    <div className="flex-col min-h-screen text-center flex-center-center">
      <img src={NotFoundImg} alt="" className="w-[400px] -mt-20" />
      <h1 className="text-6xl font-bold opacity-50">Page Not Found!!</h1>
    
      <Link  type="button" onClick ={handleGoBack} className="border border-primary border-2 mt-4 text-primary bg-white rounded-lg text-lg md:text-2xl px-5 py-2 text-center inline-flex items-center gap-2 dark:bg-transparent hover:shadow-lg hover:bg-primary hover:text-white">
      <BiArrowBack />
          Go Back
         
        </Link>
    </div>
  );
};

export default PageNotFound;
