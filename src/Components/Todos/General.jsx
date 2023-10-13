import ToDoItem from "./ToDoItem";
import Card from "react-bootstrap/Card";
import ToDoFilter from "./ToDoFilter";
import { useEffect, useState } from "react";
import ToDoList from "./ToDoList";
import supabase from "../Backend/supabase";

const General = (props) => {
  //Fetch data from Supabase todos table
  async function fetchData() {
    let { data: todos, error } = await supabase.from("todos").select("*");
  }

  useEffect(() => {
    fetchData();
  }, []);

  //Managing filter
  const [searchTask, setSearchTask] = useState("inprogress");

  const filterChangeHandler = (value) => {
    setSearchTask(value);
  };

  const filteredToDos = props.items.filter((item) => {
    if (searchTask == "inprogress") {
      return item.now < 100;
    } else if (searchTask == "done") {
      return item.now == 100;
    } else {
      return item.now <= 100;
    }
  });

  //Render conditional content with a default message if no task to display
  let listContent = (
    <p className="mx-auto my-auto p-4 display-6">No Task found</p>
  );

  if (filteredToDos.length > 0) {
    listContent =
      filteredToDos.length > 0 &&
      filteredToDos.map((item) => (
        <ToDoItem
          key={item.id}
          title={item.title}
          date={item.date}
          now={item.now}
        />
      ));
  }

  //Renders different ToDoItems
  return (
    <div>
      <ToDoFilter
        filterValue={searchTask}
        onChangeFilter={filterChangeHandler}
      />
      <Card className="w-75 mx-auto m-5 border-0 shadow-sm">
        {/* Render list of ToDoItems dynamically*/}
        {/*{listContent}*/}
        <ToDoList items={filteredToDos} />
      </Card>
    </div>
  );
};

export default General;
