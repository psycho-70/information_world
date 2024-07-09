'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

const Blog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://newsapi.org/v2/everything?q=technology&apiKey=${process.env.NEXT_PUBLIC_NEWSAPI_KEY}`); // Replace with your actual API key and endpoint
      const data = await res.json();
      console.log(data);
      setData(data.articles); // Assuming the data structure includes an 'articles' array
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold p-4 text-center">BlogPost</h1>
      <div className="h-[1px] bg-white w-full "></div>
      {data.length > 0 ? (

        <div className="bg-slate-800 min-h-screen flex flex-wrap  gap-3 p-3  justify-evenly  " >
          {data.filter(article => article.urlToImage && article.title && article.description).map((article, index) => (
            <div className="bg-slate-900 w-full md:w-1/5 border m-2  rounded-2xl overflow-hidden " key={index} >
              <img className="w-full h-52 object-cover" src={article.urlToImage} width={200} height={100} alt="" />
              <h2 className=" text-center h-14  p-2">{`${article.title.slice(0, 50)} ...`}</h2>
              <p className="text-sm text-center h-24  text-gray-300 p-3 ">{`${article.description.slice(0, 100)} ...`}</p>
              <Link href={`/blog/${encodeURIComponent(article.title)}?id=${encodeURIComponent(article.title)}`}>
                <button
                  type="button"
                  className='text-white m-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
                >
                  Read More
                </button>
              </Link>
            </div>
          ))}
        </div>
      ) : (
      <div className=" min-h-screen bg-slate-800 w-full flex justify-center items-center">

        <div className=" loading lds-hourglass"></div>
      </div>
      )}
      <div className="h-[1px] bg-white w-full "></div>

    </div>

  );
};

export default Blog;
