import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TodoListPage = () => {
    const {todoList} = useSelector((state) => state.todo)
    return ( //!in my code and actually by standard () parentheses are used after return in component, otherwise code is not running though still says that compliled successfully, while with Giga is runs even without them. Most probably he has some additional extensions installed in VS code!
    <div>
        <h2>TodoList Page is the main page</h2>
        {todoList.map((item) => <div key={item}>{item}</div>)}
        <Link to='/create'>To Create Page</Link>
    </div>
    )
}

export default TodoListPage;