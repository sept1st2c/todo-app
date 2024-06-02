export function Todos({ todos }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>
              {todo.completed == true ? "completed" : "Mark as done"}
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
