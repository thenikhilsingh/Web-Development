import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

//GET Method
export const getPost = () => {
  return api.get("/posts");
};

//Delete Method
export const deletePost = (id) => {
  return api.delete(`/posts/${id}`);
};

//Post Method
export const postData = (newPost) => {
  return api.post("/posts", newPost);
};

//Put Method
export const updateData = (id, post) => {
  return api.put(`/posts/${id}`, post);
};

export default api;
