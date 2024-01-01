import React, { useState } from "react";
import loginBanner from "../../assets/images/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Register = () => {
  const { user, createUser, profileUpdate, verifyUser, logOut } = useAuth();
  const [visible, setVisible] = useState(false);
  const [visibleC, setVisibleC] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    reset,
  } = useForm();
  const handleLogin = (data) => {
    const savedUser = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      role: "user",
    };
    // creating user
    createUser(data.email, data.password)
      .then((result) => {
        // const loggedUser = result.user;

        // verifyUser(loggedUser)
        //   .then((res) => {

        //     console.log("email verification sent");
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });

        //user profile update
        profileUpdate(data.name)
          .then((result) => {
            fetch("https://zoa-server.vercel.app/users", {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify(savedUser),
            })
              .then((res) => res.json())
              .then((data) => {
              });
            //saveUser(data.name, data.email);
            //showing sweet alert that user is registered
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Successfully Register",
              text: "Please Login",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/login");
          })
          .catch((err) => {});
      })
      .catch((err) => {
        setError(err.message)
      });
  };
  // password visibility handling
  const handleShowPassword = () => {
    setVisible(!visible);
  };
  const handleShowPasswordC = () => {
    setVisibleC(!visibleC);
  };

  return (
    <div className="hero md:min-h-screen w-11/12 md:w-10/12 mx-auto">
       <Helmet>
        <title>Register | Green Agro </title>
      </Helmet>
      <div className="hero-content flex-col md:flex-row gap-5 md:gap-20 ">
        <div className="text-center">
          <img className="" src={loginBanner} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl border border-green-400">
          <form onSubmit={handleSubmit(handleLogin)} className="card-body">
            <h2 className="text-center font-semibold text-3xl text-green-400">
              Register
            </h2>
          
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />

                {errors.name?.type === "required" && (
                  <p className="text-red-600" role="alert">
                    Name is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="input input-bordered"
                  {...register("phone", { required: true })}
                />

                {errors.phone?.type === "required" && (
                  <p className="text-red-600" role="alert">
                    Phone number is required
                  </p>
                )}
              </div>
           
           
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />

              {errors.email?.type === "required" && (
                <p className="text-red-600" role="alert">
                  Email is required
                </p>
              )}
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={visible ? "text" : "password"}
                placeholder="password"
                className="input input-bordered "
                {...register("password", { required: true })}
              />
              <button
                className={`absolute  right-5 ${
                  errors.password ? "bottom-10" : "bottom-4"
                }  text-gray-500`}
                onClick={handleShowPassword}
              >
                {visible ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
              </button>
              {errors.password?.type === "required" && (
                <p className="text-red-600" role="alert">
                  Password is required
                </p>
              )}
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Confirm password</span>
              </label>
              <input
                type={visibleC ? "text" : "password"}
                placeholder="Confirm password"
                className="input input-bordered"
                {...register("cpassword", {
                  validate: (value) => {
                    const { password } = getValues();
                    return password === value || "Passwords should match!";
                  },
                })}
              />
              <button
                className={`absolute  right-5 ${
                  errors.cpassword ? "bottom-9" : "bottom-4"
                }  text-gray-500`}
                onClick={handleShowPasswordC}
              >
                {visibleC ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
              </button>
              {errors.cpassword && (
                <p className="text-red-600" role="alert">
                  {errors.cpassword.message}
                </p>
              )}
            </div>
            <p className="text-red-600">{error}</p>
            <div className="form-control">
              <input
                type="submit"
                value="Register"
                className="btn bg-green-400 text-white  hover:border-green-400 hover:text-green-400"
              />
            </div>
            <p>
              Already have an account?{" "}
              <Link to="/login" className="font-semibold text-green-400">
                Login
              </Link>
            </p>
            <SocialLogin setError={setError}></SocialLogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
