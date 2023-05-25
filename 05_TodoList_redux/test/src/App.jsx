import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TotalCompletes from "./components/TotalCompletes";

function App() {
  return (
    <div>
      <h1>My Todo List</h1>
      <AddTodoForm />
      <TodoList />
      <TotalCompletes />
    </div>
  );
}

export default App;
