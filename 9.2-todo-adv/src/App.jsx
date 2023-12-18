import Todoitem2 from "./components/Todoitem2";
import Todoitem3 from "./components/Todoitem3";
import Todoitem4 from "./components/Todoitem4";
import AppTodo from "./components/AppTodo";
import Todoitem1 from "./components/Todoitem1";
import "./App.css";

function App() {
  

  return (
  <center class="todo-container">
    <AppTodo/>
    {/* <Todoitem1/> */}
    <div className="items-container">

    <Todoitem2/>
    <Todoitem3/>
    <Todoitem4/>
    </div>

  </center>
  );
   
}

export default App
