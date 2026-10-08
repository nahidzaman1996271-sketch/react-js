import React from "react";
import { v4 as uuidv4 } from 'uuid';

const todos = [
  { title: "todo1", desc: "todo1 description 1" },
  { title: "todo2", desc: "todo2 description 1" },
  { title: "todo3", desc: "todo3 description 1" },
  { title: "todo4", desc: "todo4 description 1" },
];

const List = () => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={uuidv4()}>
          <h3>{todo.title}</h3>
          <p>{todo.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default List;