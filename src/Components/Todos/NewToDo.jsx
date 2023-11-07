import ToDoForm from "./ToDoForm";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const NewToDo = (props) => {
  //Used to display buttons or form to add a task
  const [isEditing, setIsEditing] = useState(false);

  //Used as props value to pass data as an intermediary
  //from children ToDoForm
  //to ToDos
  const saveToDoDataHandler = (enteredToDoData) => {
    const toDoData = {
      ...enteredToDoData,
    };
    props.onAddToDoItem(toDoData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="d-flex border border-success border-3 p-5 rounded-5 m-5">
      {!isEditing && (
        <Button
          className="m-auto p-3 rounded-4"
          variant="success"
          onClick={startEditingHandler}
        >
          Add New Task
        </Button>
      )}
      {isEditing && (
        <ToDoForm
          onSaveToDoData={saveToDoDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewToDo;
