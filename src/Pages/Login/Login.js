import React from 'react';

const Login = () => {

    const handleLogin =(event)=>{
        event.preventDefault();
    }

    return (
        <div className="hero bg-gray-700">
  <div className="hero-content w-3/4 flex-col">
    {/* <div className="text-center lg:text-left">
         lg:flex-row-reverse  bg-base-200
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div> */}
    <h1 className='text-4xl font-bold'>Login Now!</h1>
    <div className="card sm:w-full md:w-3/4 lg:w-3/4 mb-6 shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
        </div>
        <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Login"/>
          {/* <button >Login</button> */}
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;