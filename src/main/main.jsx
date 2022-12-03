import { useEffect, useState } from "react";
import axios from "axios";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const Main = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    client
      .get("/posts")
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Nice job!</h1>
      <ul>
        {post.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};
export default Main;
