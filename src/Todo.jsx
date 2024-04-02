import { useState } from "react";

let count = 5;

function Todo() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const addTodo = () => {
    const newTodo = {
      todo: title,
      complete: false,
      id: count,
    };
    count = count + 1;
    setTodos([...todos, newTodo]);
  };
  const handleDone = (id) => {
    const updatedTodos = todos.map((t) => {
      if (t.id === id) {
        return { ...t, complete: true };
      }
      return t;
    });
    setTodos(updatedTodos); // Below is an alternative
    // setTodos(updatedTodos.filter((t) => !t.complete));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Todo list</h1>
      <input
        type="text"
        placeholder="Add"
        onChange={(e) => setTitle(e.target.value)}
        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <button
        onClick={addTodo}
        className="bg-blue-600 p-3 rounded-xl m-2 text-white hover:bg-blue-500 active:bg-blue-400 transition duration-300"
      >
        Add
      </button>

      <ul>
        {todos.map((t) => {
          return (
            <li className={t.complete ? "line-through" : ""} key={t.id}>
              {t.todo}{" "}
              <button
  onClick={() => handleDone(t.id)}
  className="text-white rounded-xl m-2 bg-blue-600 p-1.5 hover:bg-blue-500 active:bg-blue-400 transition duration-300"
>
  Complete
</button>

            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;
