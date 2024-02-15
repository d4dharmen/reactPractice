import React from "react";

function Cards({ image, title, descriptions }) {
  return (
    <div>
      <h1>hi from cards</h1>
      <div className="card m-1">
        <div className="imageDiv w-40 bg-cyan-200 rounded h-70 shadow-lg shadow-red-400">
          <img
            src={
              !image
                ? "https://www.flaticon.com/free-sticker/dumbbell_4105444?related_id=4105444"
                : image
            }
            className="p-3"
          />
        </div>
        <div className="description bg-cyan-200 border-t-2 w-40 shadow-lg shadow-red-400">
          <h2 className="font-bold font-sans text-center ">
            {!title ? "title here" : title}
          </h2>
          <p className="text-slate-500 p-1">
            {!descriptions
              ? "your product descriptions will be displayed here"
              : descriptions}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
