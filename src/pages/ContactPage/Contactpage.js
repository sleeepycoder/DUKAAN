import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

function Contactpage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form validation
    if (name && email ) {
      // Submit the form data to the server or perform any desired actions
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);

      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
    } else {
      // Handle form validation errors
      console.log('Please fill in all fields.');
    }
  };

  return (
    <section class="bg-gray-50 min-h-screen flex  justify-center">
    
    <div class="bg-gray-400 flex rounded-2xl shadow-lg max-w-8xl  items-center">
      {/* <!-- form --> */}
      <div class="md:w-1/2 px-10 md:px-20">
        <h2 class="font-bold text-8xl text-[#002D74]">Contact US</h2>
        <p class="text-xl mt-4 text-[#002D74]">If you have any querries ?</p>
  
        <form action="" class="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input class="p-2  bg-slate-200 mt-16 rounded-xl border" type="email" id="email" placeholder="Email"
            value={email} onChange={handleEmailChange} />
          
          <div class="relative">
            <input class="p-2  bg-slate-200 rounded-xl border w-full" type="text" id="name" placeholder="Name"
            value={name} onChange={handleNameChange} />
           
          </div>
          <div class="relative">
          <textarea class="p-4 bg-slate-200 rounded-xl border w-full" type="text" id="massege" placeholder="massege"
          value={message} onChange={handleMessageChange} ></textarea>


          </div>
          <button class="bg-[#2ecbd6] rounded-xl text-white py-2 hover:scale-105 duration-300" type="submit">
          <Link to="/">
Send
          </Link>
          </button>
        </form>

        
      </div>
  
      {/* <!-- image --> */}
      <div class="md:block hidden w-1/2">
        <img class="rounded-2xl" src="https://plus.unsplash.com/premium_photo-1665203604603-e097954797e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" />
      </div>
    </div>
  </section>
  
  
    )
}

export default Contactpage;
