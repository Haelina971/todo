import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Input from "./Input";
import { useState } from "react";
import supabase from "../Backend/supabase";

const IDForm = (props) => {
  //useState to keep track of changes in input fields
  const [userInput, setUserInput] = useState({
    enteredEmail: "",
    enteredPassword: "",
  });

  //Change enteredEmail value
  const emailChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredEmail: event.target.value };
    });
  };

  //Change enteredPassword value
  const passwordChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredPassword: event.target.value };
    });
  };

  //Collect data from the different inputs into object
  //Reset value of input fields
  const submitHandler = async (event) => {
    event.preventDefault();
    const userData = {
      email: userInput.enteredEmail,
      password: userInput.enteredPassword,
    };
    console.log(userData);

    //Insertion returns Error 401
    const { error } = await supabase.from("users").insert({
      email: userInput.enteredEmail,
      password: userInput.enteredPassword,
    });

    //props.onSaveuserData(userData);
    setUserInput({
      enteredEmail: "",
      enteredPassword: "",
    });
  };

  return (
    <Card className="m-5 p-2 w-25 mx-auto">
      <Form className="m-3" onSubmit={submitHandler}>
        <Input
          controlId="formBasicEmail"
          name="Email address"
          type="email"
          placeholder="Enter email"
          onChange={emailChangeHandler}
          autoComplete="email"
        />
        <Input
          controlId="formBasicPassword"
          type="password"
          placeholder="Password"
          onChange={passwordChangeHandler}
          autoComplete="new-password"
        />
        <Button variant="success" className="my-3" type="submit">
          Register
        </Button>
      </Form>
    </Card>
  );
};

export default IDForm;
