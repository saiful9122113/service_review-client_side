import React from "react";
import { Link } from "react-router-dom";

const Login = () => {

  const handleLogin = (event) => {
    event.preventDefault();
  };

  return (
    <div className="hero bg-gray-700">
      <div className="hero-content w-3/4 flex-col">
        <h1 className="text-4xl font-bold">Login Now!</h1>
        <div className="card px-10 sm:w-full md:w-3/4 lg:w-3/4 mb-6 shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Log In" />
            </div>
          </form>
          <p className="text-center">
            New to CorePhotography? Please, {''}
            <Link className="text-orange-600 font-bold" to="/signup" href="">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;