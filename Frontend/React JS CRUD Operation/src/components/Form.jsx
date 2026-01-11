import React, { useEffect, useState } from "react";
import { postData, updateData } from "../api/PostApi";

export default function Form({
  data,
  setData,
  updateDataApi,
  setUpdateDataApi,
}) {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });

  let isEmpty = Object.keys(updateDataApi).length === 0;

  useEffect(() => {
    updateDataApi &&
      setAddData({
        title: updateDataApi.title || "",
        body: updateDataApi.body || "",
      });
  }, [updateDataApi]);

  //Important NOte:- it is necessary to have same variables in addData, handleInputChange and form's name attribute
  const handleInputChange = (e) => {
    const name = e.target.name; //ex:- name="title"
    const value = e.target.value; //ex:- value={addData.title}

    setAddData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const addPostData = async () => {
    const res = await postData(addData);
    if (res.status === 201) {
      setData((prev) => [...data, res.data]);
      setAddData({ title: "", body: "" });
    }
  };

  const updatePostData = async () => {
    try {
      const res = await updateData(updateDataApi.id, addData);
      if (res.status === 200) {
        setData((prev) => {
          return prev.map((item) => {
            return item.id === res.data.id ? res.data : item;
          });
        });
        setAddData({ title: "", body: "" });
        setUpdateDataApi({});
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.value;
    if (action === "Add") {
      addPostData();
    } else if (action === "Edit") {
      updatePostData();
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="p-5 bg-black text-white shadow-md"
    >
      <div className="flex gap-4 items-end">
        <div className="flex flex-col flex-1 gap-1">
          <label htmlFor="title" className="text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Add Title"
            value={addData.title}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col flex-1 gap-1">
          <label htmlFor="body" className="text-sm font-medium text-gray-700">
            Body
          </label>
          <input
            type="text"
            name="body"
            id="body"
            placeholder="Add Body"
            value={addData.body}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          value={isEmpty ? "Add" : "Edit"}
          className="h-10.5 px-6 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition"
        >
          {isEmpty ? "Add" : "Edit"}
        </button>
      </div>
    </form>
  );
}
