import React, { useState } from "react";
import loginBanner from "../../assets/images/login.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { Helmet } from "react-helmet";

const Login = () => {
  const { userLogin,logOut } = useAuth();
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");
  const navigate=useNavigate()
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleLogin = (data) => {
    userLogin(data.email, data.password)
      .then((res) => {
        // if(!res.user.emailVerified){
        //   logOut()
        //   console.log("please verified your email address");
        // }
        // else{
        //   navigate("/")
          
        // }
        navigate(from, { replace: true });

      })
      .catch((err) => setError(err.message));
  };
  const handleShowPassword = () => {
    setVisible(!visible);
  };

  return (
    <div className="hero md:min-h-screen w-11/12 md:w-10/12 mx-auto">
       <Helmet>
        <title>Login | Green Agro </title>
      </Helmet>
      <div className="hero-content flex-col md:flex-row gap-5 md:gap-20 ">
        <div className="text-center">
          <img className="" src={loginBanner} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full card-body max-w-lg shadow-2xl border border-green-400">
          <form onSubmit={handleSubmit(handleLogin)}>
            <h2 className="text-center font-semibold text-green-400 text-3xl">Login</h2>
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
                  errors.password ? "bottom-16" : "bottom-12"
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
              <label className="label ">
                <a href="#" className="label-text-alt link link-hover ">
                  Forgot password?
                </a>
              </label>
            </div>
            <p className="text-red-600">{error}</p>
            <div className="form-control">
              <input
                type="submit"
                value=" Login"
                className="btn bg-green-400 text-white hover:text-green-400 border hover:border-green-400"
              />
            </div>
            <p>
              Don't have an account?{" "}
              <Link to="/register" className="font-semibold text-green-400">
                Register
              </Link>
            </p>
        
          </form>
          <SocialLogin setError={setError}></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
