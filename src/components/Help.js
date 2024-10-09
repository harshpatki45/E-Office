import React from 'react'
import indoreImage from '../Assets/downloadindore.png';


const Help = () => {
  return (
    <div className="h-screen w-full bg-cover bg-center brightness-75 "
    style={{
      backgroundImage: `url(${indoreImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      width: '100vw',
      marginTop: 150,
      
    }}
    >
         <div className="bg-white p-4 rounded-md w-1/2 ml-10 mt-20 text-left">
        <h1 className="text-black text-2xl font-bold text-center">Complaints!</h1>
        <p className=" font-semibold text-black text-lg text-center">We are here to assist you! Please complete the form below for your complaints.</p>
        <form>
          <div className="mb-4">
            <label className="font-semibold text-black" htmlFor="email">Your Email</label>
            <br/>
            <input type="email" id="email" className="w-1/2 p-2 pl-10 text-sm text-white bg-black" />
          </div>
          <div className="mb-4">
            <label className="font-semibold text-black" htmlFor="complaint">The complaint is regarding*:</label>
            <textarea id="complaint" className="w-full p-2 pl-10 text-sm text-white bg-black h-40" />
          </div>
          <div className="mb-4">
            <label className="font-semibold text-black" htmlFor="name">Name of the person against whom the complaint is filed*:</label>
            <input type="text" id="name" className="w-full p-2 pl-10 text-sm text-white bg-black" />
          </div>
          <div className="mb-4">
            <label className="font-semibold text-black" htmlFor="attachment">Do you have any attachment in regard with your complaint:</label>
            <input type="file" id="attachment" className="w-full p-2 pl-10 text-sm " />
          </div>
          <div className="flex justify-center">
          <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Submit</button>
          </div>
        </form>
        <div className="absolute top-1/2 right-10 text-5xl font-bold text-white"
        >
        <p>We Value</p>
        <p>Your</p>
        <p>Feedback!</p>
      </div>
      </div>
    
      

    </div>
  );
};

export default Help
