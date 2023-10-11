import Form from "react-bootstrap/Form";
import { useState } from "react";

const ToDoFilter = (props) => {
  const [searchTask, setSearchTask] = useState();

  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <Form.Select
      onChange={dropdownChangeHandler}
      //value={searchTask}
      className="w-25 mx-auto"
      value={props.filterValue}
    >
      <option value="inprogress">Tasks in progress</option>
      <option value="all">All tasks</option>
      <option value="done">Completed tasks</option>
    </Form.Select>
  );
};

export default ToDoFilter;