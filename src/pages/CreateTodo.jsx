import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../redux/todo/todo.actions";
import { Link } from "react-router-dom";

const CreateTodoPage = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();

        dispatch(addTodoAction(value));
        console.log(value);
        setValue('');

    }

    return ( //!in my code and actually by standard () parentheses are used after return in component, otherwise code is not running though still says that compliled successfully, while with Giga is runs even without them. Most probably he has some additional extensions installed in VS code!
    <div>
        <form onSubmit={onSubmit}>
            <input type='text' value={value} onChange={e => setValue(e.target.value)} />
            <button>Submit</button>
        </form>

        <Link to='/'>To List Page</Link>
    </div>
    )
}

export default CreateTodoPage;