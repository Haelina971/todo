import { useState, useEffect } from "react";
import NewToDo from "../Todos/NewToDo";
import General from "../Todos/General";
import Card from "react-bootstrap/Card";
import supabase from "../Backend/supabase";

//Arrays of ToDoItems
// const DUMMY_TODOS = [
//     { title: "Learn React", date: new Date(2023, 2, 1), now:30, id:"01" },
//     { title: "Build ToDo App", date: new Date(2023, 2, 10), now:70, id:"02" },
//   ];

const ToDos = () => {
  //const [items, setItems] = useState(DUMMY_TODOS);
  const [items, setItems] = useState([]);

  //Fetch data from Supabase todos table
  async function fetchData() {
    let { data: todos, error } = await supabase.from("todos").select("*");
    setItems(todos);
  }

  useEffect(() => {
    fetchData();
  }, []);

  //Add new ToDoItem
  const addToDoItemHandler = (item) => {
    setItems((prevItems) => {
      return [item, ...prevItems];
    });
  };

  return (
    <Card className="w-75 mx-auto m-5 border-0 shadow-sm">
      <NewToDo onAddToDoItem={addToDoItemHandler} />
      <General items={items} />
    </Card>
  );
};

export default ToDos;
