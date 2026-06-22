import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authSerivce";

function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser({
        userEmail,
        userPassword,
      });

      console.log(response);

      localStorage.setItem(
        "token",
        response.accessToken
      );

      navigate("/dashboard");

      } catch (error) {
    console.log("Backend Error:");

    console.log(error.response?.data);

    console.log(error);

    alert("Login Failed");
  }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">

        <h1 className="text-3xl font-bold text-center mb-6">
          Personal Finance Tracker
        </h1>

        <form onSubmit={handleLogin}>

          <div className="mb-4">
            <label className="block mb-2">
              Email
            </label>

            <input
              type="email"
              value={userEmail}
              onChange={(e) =>
                setUserEmail(e.target.value)
              }
              className="w-full border p-3 rounded"
              placeholder="Enter Email"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">
              Password
            </label>

            <input
              type="password"
              value={userPassword}
              onChange={(e) =>
                setUserPassword(e.target.value)
              }
              className="w-full border p-3 rounded"
              placeholder="Enter Password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
}

export default Login;