import React from "react";
import plants from "../../../assets/images/plants-2.jpg";
import birds from "../../../assets/images/birds-2.jpg";
import pets from "../../../assets/images/pets.jpg";
import fish from "../../../assets/images/fish-2.jpg";
import { Link } from "react-router-dom";
const Categories = () => {
  return (
    <div className="mt-20 w-11/12 md:w-10/12 mx-auto ">
      <h2 className="text-center text-4xl mb-10">
        <span className="text-green-400 font-extrabold text-5xl">|</span> Our
        Categories{" "}
        <span className="text-green-400 font-extrabold text-5xl">|</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <Link
          className="hero h-full"
          style={{
            backgroundImage: `url(${plants})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="hero-overlay bg-opacity-20"></div>
          <div className="hero-content text-center text-neutral-content w-full">
            <button className="btn rounded-none mt-40 md:mt-72 w-3/4 text-white bg-opacity-40 text-lg  bg-black hover:text-black hover:bg-green-400">
              Plants & Seeds
            </button>
          </div>
        </Link>
        <div className="grid md:grid-cols-2 gap-8 ">
          <Link
            className="hero h-full"
            style={{
              backgroundImage: `url(${birds})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content text-center text-neutral-content w-full">
              <button className="btn rounded-none mt-40 w-3/4 text-white bg-opacity-40 text-lg  bg-black hover:text-black hover:bg-green-400">
                birds
              </button>
            </div>
          </Link>
          <Link
            className="hero h-full"
            style={{
              backgroundImage: `url(${pets})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content text-center text-neutral-content w-full">
              <button className="btn rounded-none mt-40 w-3/4 text-white bg-opacity-40 text-lg  bg-black hover:text-black hover:bg-green-400">
                Pets
              </button>
            </div>
          </Link>
          <Link
            className="hero h-full"
            style={{
              backgroundImage: `url(${fish})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content text-center text-neutral-content w-full">
              <button className="btn rounded-none   mt-40 w-3/4 text-white bg-opacity-40 text-lg  bg-black hover:text-black hover:bg-green-400">
                Fish
              </button>
            </div>
          </Link>
          <Link
            className="hero h-full"
            style={{
              backgroundImage: `url(${fish})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content text-center text-neutral-content w-full">
              <button className="btn rounded-none mt-40 w-3/4 text-white bg-opacity-40 text-lg  bg-black hover:text-black hover:bg-green-400">
                Food
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
