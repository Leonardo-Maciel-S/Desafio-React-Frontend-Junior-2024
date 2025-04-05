import Form from "./components/Form/Form";
import ToDoList from "./components/ToDoList/ToDoList";
import "./_index.scss";

export default function App() {
  return (
    <section>
      <h1 className="teste">todos</h1>

      <div className="toDo-container">
        <div className="shadow" />
        <Form />

        <ToDoList />
        <div className="small-shadow" />
      </div>
    </section>
  );
}
