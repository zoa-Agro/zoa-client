import React from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const navigate=useNavigate()
  const handleGoogleSignIn = () => {
    googleLogin()
      .then((res) => {
        const loggedUser = res.user;
        
        if(res.user.emailVerified){
          const user = {
            name: loggedUser.displayName,
            email: loggedUser.email,
            phone: '',
            role: "user",
          };
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.insertedId) {
                console.log("success");
              }
            });
          navigate("/")
        }
        else{
          console.log("please verified your email address");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="divider">Or</div>
      <button onClick={handleGoogleSignIn} className="w-full btn  border-green-400 hover:bg-green-400">
        <FcGoogle />
        Login with Google
      </button>
    </div>
  );
};

export default SocialLogin;
