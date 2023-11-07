import { useState, useEffect } from "react";
import NewToDo from "../Todos/NewToDo";
import General from "../Todos/General";
import Card from "react-bootstrap/Card";
import supabase from "../Backend/supabase";
import { useRealtime } from "react-supabase";

const ToDos = () => {
  const [items, setItems] = useState([]);

  //Fetch data from Supabase todos table
  async function fetchData() {
    let { data: todos, error } = await supabase.from("todos").select("*");
    setItems(todos);
  }

  //fetch todos data in db when page loads
  useEffect(() => {
    fetchData();
  }, []);

  //react-supabase library to useRealtime for updates (not working)
  //const [{ data: items, error, fetching }, reexecute] = useRealtime('todos')

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
