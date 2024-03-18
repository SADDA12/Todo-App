function TodoItem({Index, Todo}) {
    return (
        <li className="list-group-item">
            <input 
            className="form-check-input me-1" 
            type="checkbox" id="{index}"/>

            <label 
            className="form-check-label" htmlFor={Index}>{Todo}
            </label>
            {/* take home assignment: implement single delete */}
            <button className="btn btn-danger">
                Delete
            </button>
        </li>
    );
}

export default TodoItem;