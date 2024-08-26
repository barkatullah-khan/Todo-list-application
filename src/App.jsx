import AppName from "./components/AppName";
import AddTodoApp from "./components/AddTodoApp";
import TodoItems from "./components/TodoItems";

import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemduedate) => {
   
    const newTodoItems = [
      ...todoItems,
      { name: itemName, duedate: itemduedate },
    ];
    setTodoItems(newTodoItems)
  };
  const handleDeleteItem=(todoItemName)=>{

  const newTodoItems= todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems);

  }

  return (
    <center className="Todo-container">
      <AppName />
      <AddTodoApp onNewItem={handleNewItem} />
      {todoItems.length=== 0 && <WelcomeMessage/>}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;
