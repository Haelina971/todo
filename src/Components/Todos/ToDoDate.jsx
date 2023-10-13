import Card from 'react-bootstrap/Card';

const ToDoDate = (props) =>  {
    const date = new Date(props.date);
    const month = date.toLocaleString('en-US', {month: 'long'});
    const day = date.toLocaleString('en-US', {day: '2-digit'});
    const year = date.getFullYear();

    // const month = props.date.toLocaleString('en-US', {month: 'long'});
    // const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    // const year = props.date.getFullYear();
    return (
        <Card className='m-3 p-2 d-inline-block text-center border-success border border-2 rounded-4 bg-success text-light'>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
        </Card>
    );
}

export default ToDoDate;