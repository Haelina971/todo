import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Input from "../Forms/Input";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import supabase from "../Backend/supabase";

const ToDoForm = (props) => {
  //useState to keep track of changes in input fields
  const [userInput, setUserInput] = useState({
    enteredTask: "",
    enteredDate: "",
  });

  //useState to dynamically change the style if incorrect input
  const [isValid, setIsValid] = useState({
    validTask: true,
    validDate: true,
  });

  //useState to disable input fields while task info is posted
  const [loading, setLoading] = useState(false);

  //Change enteredTask value
  const taskChangeHandler = (event) => {
    //The default black color has priority when typing in the field
    if (event.target.value.trim().length > 0) {
      setIsValid((prevState) => {
        return { ...prevState, validTask: true };
      });
    }
    setUserInput((prevState) => {
      return { ...prevState, enteredTask: event.target.value };
    });
  };

  //Change enteredDate value
  const dateChangeHandler = (event) => {
    //The default color has priority when a date is selected
    if (event.target.value.trim().length > 0) {
      setIsValid((prevState) => {
        return { ...prevState, validDate: true };
      });
    }
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  //Collect data from the different inputs into object
  //Reset value of input fields
  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    //Prevent empty task or empty date to be addded to the list
    if (
      userInput.enteredTask.trim().length === 0 &&
      userInput.enteredDate === ""
    ) {
      setIsValid((prevState) => {
        return { ...prevState, validTask: false, validDate: false };
      });
      return;
    }
    if (userInput.enteredTask.trim().length === 0) {
      setIsValid((prevState) => {
        return { ...prevState, validTask: false };
      });
      return;
    }
    if (userInput.enteredDate === "") {
      setIsValid((prevState) => {
        return { ...prevState, validDate: false };
      });
      return;
    }
    const toDoData = {
      title: userInput.enteredTask,
      date: new Date(userInput.enteredDate),
      now: 0, //new task so progression = 0
    };
    props.onSaveToDoData(toDoData);

    //Insert user input into corresponding columns
    const { data, error } = await supabase
      .from("todos")
      .insert([{ title: toDoData.title, date: toDoData.date, now: 0 }]);

    setUserInput({
      enteredTask: "",
      enteredDate: "",
    });

    setLoading(false);
  };

  return (
    <Card className="w-75 mx-auto border-success border border-3 rounded-5 px-5 m-5 shadow">
      <Form onSubmit={submitHandler}>
        <Input
          style={{
            color: !isValid.validTask ? "red" : "black",
            borderColor: !isValid.validTask ? "red" : "black",
          }}
          controlId="toDoName"
          name="Task"
          type="text"
          placeholder="Enter task"
          onChange={taskChangeHandler}
          value={userInput.enteredTask}
          disabled={loading} //disable input while adding task
        />
        <Input
          style={{
            color: !isValid.validDate ? "red" : "black",
            borderColor: !isValid.validDate ? "red" : "black",
          }}
          controlId="toDoDate"
          name="Date"
          type="date"
          min="2023-01-01"
          onChange={dateChangeHandler}
          value={userInput.enteredDate}
          disabled={loading} //disable input while adding task
        />
        <Button variant="success" className="my-3 mx-2" type="submit">
          Add
        </Button>
        <Button
          variant="success"
          className="my-3 mx-2"
          type="button"
          onClick={props.onCancel}
        >
          Cancel
        </Button>
      </Form>
    </Card>
  );
};

export default ToDoForm;
