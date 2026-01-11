import React, { useState } from "react";
import Posts from "./components/Posts";
import Form from "./components/Form";
export default function App() {
  const [data, setData] = useState([]);
  const [updateDataApi, setUpdateDataApi] = useState({});
  return (
    <>
      <section>
        <Form
          data={data}
          setData={setData}
          updateDataApi={updateDataApi}
          setUpdateDataApi={setUpdateDataApi}
        />
      </section>
      <section className="min-h-screen bg-black flex justify-center items-start py-10">
        <Posts
          data={data}
          setData={setData}
          updateDataApi={updateDataApi}
          setUpdateDataApi={setUpdateDataApi}
        />
      </section>
    </>
  );
}
