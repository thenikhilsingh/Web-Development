import React from "react";
import { useEffect } from "react";
import { deletePost, getPost } from "../api/PostApi";

export default function Posts({
  data,
  setData,
  updateDataApi,
  setUpdateDataApi,
}) {
  const getPostData = async () => {
    try {
      const res = await getPost();
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  const handleUpdatePost = (item) => setUpdateDataApi(item);

  const handleDeletePost = async (id) => {
    try {
      const res = await deletePost(id);
      if (res.status === 200) {
        const newUpdatedPosts = data.filter((currentPost) => {
          return currentPost.id !== id;
        });
        setData(newUpdatedPosts);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-full max-w-6xl mx-auto">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => {
          const { id, body, title } = item;
          return (
            <li
              key={id}
              className="bg-[#918c8c] p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col justify-between"
            >
              <div>{id}</div>
              <div>
                <p className="text-lg font-semibold text-gray-800 mb-2">
                  Title: <span className="font-normal">{title}</span>
                </p>

                <p className="text-gray-600 mb-4">Body: {body}</p>
              </div>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => handleUpdatePost(item)}
                  className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeletePost(id)}
                  className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
