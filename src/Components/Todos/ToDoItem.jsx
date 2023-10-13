import { Link } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import ToDoDate from "./ToDoDate";
import Card from "react-bootstrap/Card";
import Trash from "../../assets/trash.png";
import Button from "react-bootstrap/Button";
import supabase from "../Backend/supabase";

const ToDoItem = (props) => {
  async function deleteTaskHandler() {
    const { error } = await supabase.from("todos").delete().eq("id", props.id);
  }

  //Renders one ToDoItem
  //Use props from parent component ToDoList
  return (
    <li id={props.id} className="list-unstyled">
      <Card className="d-flex flex-row align-items-center justify-content-between border-success border border-3 rounded-5 py-2 px-3 m-3 shadow">
        <ToDoDate date={props.date} />
        <Link className="text-decoration-none text-reset" to="pages/tododetail">
          <h3>{props.title}</h3>
        </Link>
        {/*Add function to change progress
          when possibility to see detail about the ToDoItem
          (different steps needed to complete the task)*/}
        <ProgressBar
          animated
          striped
          variant="success"
          now={props.now}
          className="m-4 w-25"
        />
        <Button
          variant="outline-success"
          size="sm"
          onClick={deleteTaskHandler}
        >
          <img src={Trash} alt="Delete" />
        </Button>
      </Card>
    </li>
  );
};

export default ToDoItem;
