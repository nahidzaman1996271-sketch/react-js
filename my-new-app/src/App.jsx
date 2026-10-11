import { useState } from "react";
import { FaReact, FaGithub, FaHeart, FaHome } from "react-icons/fa";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: 40 }}>
      <h1>
        <FaReact color="#61dafb" /> My New React App
      </h1>

      <p>
        <FaHome /> Home &nbsp; <FaGithub /> GitHub
      </p>

      <button onClick={() => setCount(count + 1)}>
        <FaHeart color="red" /> Clicked {count} times
      </button>
    </div>
  );
}