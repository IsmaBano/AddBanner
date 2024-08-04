"use client";
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import axios from 'axios';

function Update() {
  const searchParams = useSearchParams();
  const [data, setData] = useState({ title: '', description: '', imageUrl: '', cta: '' });
  const router = useRouter();

  useEffect(() => {
    const val = {
      title: searchParams.get('title') || '',
      description: searchParams.get('description') || '',
      imageUrl: searchParams.get('imageUrl') || '',
      cta: searchParams.get('cta') || ''
    };
    setData(val);
  }, [searchParams]);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitting data");
    axios.put('http://localhost:4000/0', data)
      .then(res => {
        console.log("Data updated");
        router.push('/');
      })
      .catch(err => {
        console.error("Error updating data", err);
      });
  }

  return (
    <div className='flex justify-center m-5 p-5'>
      <div className="max-w-[500px] w-full">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              value={data.title}
              onChange={e => setData({ ...data, title: e.target.value })}
              placeholder="title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              type="text"
              value={data.description}
              onChange={e => setData({ ...data, description: e.target.value })}
              placeholder="description"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              ImageUrl
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="imageurl"
              type="text"
              value={data.imageUrl}
              onChange={e => setData({ ...data, imageUrl: e.target.value })}
              placeholder="imageurl"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              CTA
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cta"
              type="text"
              value={data.cta}
              onChange={e => setData({ ...data, cta: e.target.value })}
              placeholder="cta"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Update;

