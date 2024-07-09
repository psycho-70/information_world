"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn , signOut } from "next-auth/react";

const Page = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSignUp = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, lastName, email, password }),
    });

    if (response.ok) {
      // Redirect to the login page or auto-login after signup
      await signIn("credentials", { email, password });
      router.push("/Home");
    } else {
      console.error("Sign up error:", await response.json());
    }
  };

    return (
        <>
            <h1 className="text-center text-2xl font-bold p-3"> Sign up</h1>
            <div className="h-[1px] bg-white w-full "></div>
            <div className=" bg-slate-800  md:flex min-h-screen  justify-center gap-6  flex-wrap ">
                <div className="w-full md:w-[40%]">
                    <div className="flex  flex-col gap-4 items-center">
                        <h1 className="text-2xl mt-3 p-5 bg-slate-600 rounded-md text-center font bold">
                            Welcome to <span className="text-red-500 font-bold">Information World</span>
                        </h1>
                        <p className="text-lg text-center ">
                            Discover a universe of knowledge at Information World, your ultimate destination for insightful blogs and detailed notes. Join our community of curious minds and passionate writers.
                        </p>

                        <h1 className="text-2xl p-5 mt-4 bg-slate-600 rounded-md text-center font bold">
                            Sign up for <span className="text-red-500 font-bold">Your Account</span>
                        </h1>
                        <p className="text-lg text-center ">
                            To continue your journey with us, please sign up for your account below.
                        </p>
                    </div>
                </div>
                <div className=" w-full md:w-1/2">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-2xl  p-4 font-bold">
                            Sign up
                        </h1>
                        <button onClick={() => signIn("github")}
                            className="w-80 max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                            <div className="bg-white p-2 rounded-full">
                                <svg className="w-4" viewBox="0 0 533.5 544.3">
                                    {/* GitHub SVG */}
                                </svg>
                            </div>
                            <span className="ml-4">
                                Sign Up with GitHub
                            </span>
                        </button>

                        <button onClick={() => signIn("google")}
                            className="w-80 max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                            <div className="bg-white p-1 rounded-full">
                                <svg className="w-6" viewBox="0 0 32 32">
                                    {/* Google SVG */}
                                </svg>
                            </div>
                            <span className="ml-4">
                                Sign Up with Google
                            </span>
                        </button>
                    </div>

                    <form onSubmit={handleSignUp} className="m-5 flex  flex-col">
                        <div className="m-3 border-b text-center">
                            <div className="text-2xl font-bold">
                                Create Your Account
                            </div>
                        </div>
                        <div className="flex flex-wrap  gap-4  md:m-5">
                            <input
                                className="px-8 py-4 w-full md:w-60 rounded-lg font-medium bg-gray-600 border border-gray-200 placeholder-white text-sm focus:outline-none focus:border-gray-400 focus:bg-gray-800"
                                type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                            <input
                                className="px-8 py-4 mb-4 md:mb-0  w-full md:w-60  rounded-lg font-medium  bg-gray-600 border border-gray-200 placeholder-white text-sm focus:outline-none focus:border-gray-400 focus:bg-gray-800"
                                type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                        </div>
                        <input
                            className="px-8 py-4  rounded-lg font-medium  bg-gray-600 border border-gray-200 placeholder-white text-sm focus:outline-none focus:border-gray-400 focus:bg-gray-800"
                            type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <input
                            className=" px-8 py-4 rounded-lg font-medium bg-gray-600 border border-gray-200 placeholder-white text-sm focus:outline-none focus:border-gray-400 focus:bg-gray-800 mt-5"
                            type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <button
                            type="submit"
                            className="mt-5  tracking-wide font-semibold bg-indigo-500 text-gray-100  py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                            <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                <circle cx="8.5" cy="7" r="4" />
                                <path d="M20 8v6M23 11h-6" />
                            </svg>
                            <span className="ml-3">
                                Sign Up
                            </span>
                        </button>
                    </form>
                </div>
            </div>
            <div className="h-[1px] bg-white w-full "></div>
        </>
    );
};

export default Page;
