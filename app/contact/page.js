'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';
import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiTwotoneMail } from "react-icons/ai";
import { FaPhoneVolume } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoTime } from "react-icons/io5";

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      setStatus(data.message);
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setStatus('Failed to submit feedback.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <h1 className="text-2xl   font-bold text-center  py-4 md:py-5">Contact Us and give us Feedback</h1>
      <div className='h-[1px] w-full bg-white'></div>
      <div className='md:flex bg-gray-800 text-center justify-center'>
        <div className="flex w-full md:w-1/2 min-h-[80vh] p-8 flex-col">
          <h1 className="text-2xl bg-slate-500 p-2 font-bold mb-2">Contact Us</h1>
          <p className="text-lg mb-2">
            We value your feedback and inquiries. Whether you have a question about
            our services, need assistance, or simply want to share your thoughts,
            we're here to help.
          </p>
          <div className="mb-4">
            <p className="text-lg bg-slate-500 font-bold mb-2">Social Media:</p>
            <div>Connect with us on
              <div className="flex items-center justify-center gap-5 p-2">
                <a href="https://web.facebook.com/furqan.don.771/" className="hover:text-gray-400"><MdOutlineFacebook /></a>
                <a href="https://twitter.com/?lang=en" className="hover:text-gray-400"><FaXTwitter /></a>
                <a href="https://www.instagram.com/furqankhan070/" className="hover:text-gray-400"><FaInstagram /></a>
              </div>
              for updates and news.
            </div>
          </div>
          <div className="w-full flex flex-col rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2 bg-slate-500">Contact Information:</h2>
            <p className="mb-2 flex justify-center items-center gap-3">
              <FaPhoneVolume />
              03141868872
            </p>
            <p className="mb-2 flex justify-center items-center gap-3">
              <AiTwotoneMail />
              furqanktk52@gmail.com
            </p>
            <p className="mb-2 flex justify-center items-center gap-3">
              <FaHome />
              KPK-KARAK-AMBIRI KALLA
            </p>
            <p className="flex justify-center items-center gap-3">
              <IoTime />
              Monday - Friday: 9:00 AM to 5:00 PM (Eastern Time)
            </p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full md:w-1/3 p-8 bg-slate-800 rounded-lg text-center"
        >
          <h1 className='font-bold text-2xl bg-slate-500 p-2 mb-2'>Give us Feedback</h1>
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div className="flex flex-col items-start">
              <label htmlFor="name" className="mb-2 font-semibold">Name</label>
              <input
                onChange={handleChange}
                value={form.name}
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 border bg-zinc-800 border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="email" className="mb-2 font-semibold">Email</label>
              <input
                onChange={handleChange}
                value={form.email}
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 border bg-zinc-800 border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="message" className="mb-2 font-semibold">Message</label>
              <textarea
                value={form.message}
                onChange={handleChange}
                id="message"
                name="message"
                required
                className="w-full p-3 border bg-zinc-800 border-gray-300 rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-blue-600 font-semibold rounded hover:bg-blue-700 transition"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Send'}
            </button>
            {status && <p className="mt-2">{status}</p>}
          </form>
        </motion.div>
      </div>
      <div className='h-[1px] mb-14 w-full bg-white'></div>
    </>
  );
};

export default Contact;
