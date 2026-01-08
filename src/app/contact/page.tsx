"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
  const router = useRouter();
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    // Sending the email via Formspree using your ID: mykzroze
    const response = await fetch("https://formspree.io/f/mykzroze", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      alert("Message sent successfully! We will get back to you soon.");
      router.push('/'); // Redirects to home page
    } else {
      setStatus("Error sending message. Please check your internet or try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 flex flex-col items-center">
      <div className="max-w-4xl w-full text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
          Get in <span className="text-blue-500">Touch</span>
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          Have a project for CodeNet or a question about the Academy? <br /> 
          Fill out the form below and we'll reply to your email.
        </p>
      </div>

      <form 
        onSubmit={handleSubmit}
        className="w-full max-w-lg flex flex-col gap-4 bg-[#111] p-8 rounded-3xl border border-white/5 shadow-2xl"
      >
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-gray-500 uppercase ml-1 tracking-widest">Full Name</label>
          <input 
            type="text" 
            name="name"
            required
            onChange={handleChange}
            placeholder="Name" 
            className="p-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:bg-white/10 outline-none transition-all" 
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-gray-500 uppercase ml-1 tracking-widest">Email Address</label>
          <input 
            type="email" 
            name="email"
            required
            onChange={handleChange}
            placeholder="Email" 
            className="p-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:bg-white/10 outline-none transition-all" 
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-gray-500 uppercase ml-1 tracking-widest">Message</label>
          <textarea 
            name="message"
            required
            onChange={handleChange}
            placeholder="How can we help you?" 
            className="p-4 h-32 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:bg-white/10 outline-none transition-all resize-none"
          ></textarea>
        </div>

        <button 
          type="submit"
          disabled={status === "Sending..."}
          className="bg-blue-600 py-4 mt-2 rounded-xl font-bold hover:bg-blue-500 disabled:bg-gray-700 transition-all flex items-center justify-center gap-2"
        >
          {status === "Sending..." ? "Processing..." : "Send Message"}
        </button>
        
        {status && <p className="text-center text-sm text-blue-400 mt-2 font-medium">{status}</p>}
      </form>
      
      <div className="mt-12 text-gray-500 text-sm">
        Direct Email: <span className="text-gray-300">mohammedalhaj14@gmail.com</span>
      </div>
    </div>
  );
}