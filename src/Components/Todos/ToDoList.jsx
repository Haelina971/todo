import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
  //Render conditional content with a default message if no task to display
  if (props.items.length === 0) {
    return <h2>No task found</h2>;
  }

  return (
    <ul>
      {props.items.length > 0 &&
        props.items.map((item) => (
          <ToDoItem
            key={item.id}
            id={item.id}
            title={item.title}
            date={item.date}
            now={item.now}
          />
        ))}
    </ul>
  );
};

export default ToDoList;
