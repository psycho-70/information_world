// app/blog/[id]/page.js
'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const BlogPost = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchArticle = async () => {
      const res = await fetch(`https://newsapi.org/v2/everything?q=${encodeURIComponent(id)}&apiKey=${process.env.NEXT_PUBLIC_NEWSAPI_KEY}`);
      const data = await res.json();
      // Assuming the first article in the response is the correct one
      setArticle(data.articles[0]);
    };

    fetchArticle();
  }, [id]);

  if (!article) return <div className=" min-h-screen mt-10 bg-slate-800 w-full flex justify-center items-center">

    <div className="lds-hourglass"></div>
  </div>;

  // Combine description and content, removing the truncation notice if present
  let content = (article.description ? article.description : '') + ' ' + (article.content ? article.content.split(' [+')[0] : '');

  // Limit the content to 1000 characters
  content = content.length > 1000 ? content.slice(0, 1000) : content;

  return (
    <>
      <div className="h-[1px] bg-white w-full mt-10  "></div>
      <div className="p-6 bg-slate-800">
        <h1 className="text-2xl font-bold mb-4 text-center">{article.title}</h1>
        {article.urlToImage && <div className='w-full flex justify-center items-center '><img className="w-full rounded-2xl md:w-1/3 h-auto object-cover mb-4" src={article.urlToImage} alt={article.title} /></div>}
       <div className='w-full  flex justify-center items-center'> <p className="text-lg text-center w-full  md:w-1/2">{content}</p></div>
      </div>
      <div className="h-[1px] bg-white w-full  "></div>
    </>
  );
};

export default BlogPost;
