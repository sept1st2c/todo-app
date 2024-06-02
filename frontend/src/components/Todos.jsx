import { useState } from "react";

export function Todos({ todos }) {
  const [completed, setCompleted] = useState([]);
  return (
    <div>
      {todos.map((todos) => {
        return (
          <div>
            <h1>{todos.title}</h1>
            <h2>{todos.description}</h2>
            <button
            //       onClick={() => {
            //         fetch("http://localhost:3000/completed", {
            //           method: "GET",
            //           body: JSON.stringify({
            //             completed: true,
            //           }),
            //           headers: {
            //             "content-Type": "application/json",
            //           },
            //         }).then(async function (res) {
            //           const json = await res.json();
            //           alert("Todo added");
            //         });
            //       }}
            >
              {todos.completed == true ? "completed" : "Mark as done"}
            </button>
          </div>
        );
      })}
      {/* <h1>Go to Gym</h1>
       <h1>Go to Gym at 5.30pm</h1>
        <button>Mark as done</button> */}
    </div>
  );
}
