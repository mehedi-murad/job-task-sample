import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";
import background from "../../../assets/Background/bg.jpg"

const Login = () => {
  const { signInUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //Google authentication
  const handleGoogleSignin = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        name: result.user?.displayName,
        email: result.user?.email,
      };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          navigate("/");
        });
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(location?.state ? location?.state : "/");
        Swal.fire({
            position: "bottom-end",
            icon: "success",
            title: "Login successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You have put wrong credentials!",
        });
      });
  };


  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundSize:"cover" }} className="h-[100vh] flex justify-center items-center">
      <div className="max-w-2xl mx-auto space-y-5 border rounded-lg p-10 glass">
        <h2 className="text-center text-white font-bold text-4xl">
          <Link to="/" className="underline">
            Home
          </Link>{" "}
          / Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input input-bordered input-warning  w-full"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered input-warning  w-full"
            required
          />
          <input
            className="bg-[#F92659] px-4 py-2 text-white font-semibold rounded-lg mt-10 btn-block"
            type="submit"
            value="login"
          />
        </form>
        <p className="text-white text-center">
          New Here? Please
          <Link to="/signup">
            <span className="text-bold text-xl ml-4 underline">Register</span>
          </Link>
        </p>
        <div className="divider divider-secondary text-white">OR</div>
        <div
          onClick={handleGoogleSignin}
          className="btn btn-outline text-white flex"
        >
          <FaGoogle></FaGoogle> <h2>Signin by Google</h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
