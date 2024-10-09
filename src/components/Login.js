import React from 'react';
import indoreImage from '../Assets/downloadindore.png';

const Login = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center brightness-75"
      style={{
        backgroundImage: `url(${indoreImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        marginTop: 150,
      }}
    >
        <div className="bg-white bg-opacity-70 h-[80vh] w-[40vw] flex flex-col justify-center items-center rounded-5 mx-auto mt-20">
  <h1 className="text-black text-5xl font-bold font-sans mb-4">Login</h1>
  <form action="">
    <div className="flex flex-col mb-4">
      <label className="text-primary text-lg mb-2" htmlFor="email">Enter the email address registered on IMC Platform</label>
      <input type="email" className="bg-black text-white p-2 rounded-md border-none" />
    </div>
    <div className="flex flex-col mb-4">
      <label className="text-primary text-lg mb-2" htmlFor="password">Enter the Password</label>
      <input type="password" className="bg-black text-white p-2 rounded-md border-none" />
    </div>
    <div className="flex flex-col mb-4">
      <label className="text-primary text-lg mb-2" htmlFor="otp">Enter the 6-digit OTP received on the registered Email</label>
      <input type="otp" className="bg-black text-white p-2 rounded-md border-none" />
    </div>
    <div className="flex flex-col mb-4">
      <div className="flex items-center mb-2">
        <input type="checkbox" id="rememberMe" className="bg-primary" />
        <label className="text-black text-lg ml-2" htmlFor="rememberMe">Remember Me</label>
      </div>
    </div>
    <button className="bg-black text-white p-2 rounded-md border-none w-1/2" type="submit">Login</button>
  </form>
</div>
      
    </div>
  )
}

export default Login;
