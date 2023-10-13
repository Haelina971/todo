import Form from "react-bootstrap/Form";

const Input = (props) => {
  return (
    <Form.Group controlId={props.controlID} className="my-3">
      <Form.Label style={props.style}>{props.name}</Form.Label>
      <Form.Control
        style={props.style}
        type={props.type}
        placeholder={props.placeholder}
        size={props.size}
        onChange={props.onChange}
        value={props.value}
        autoComplete={props.autoComplete}
      />
    </Form.Group>
  );
};

export default Input;
