function TodoItem({Index, Todo}) {
    return (
        <li className="list-group-item" key={Index}>
            <input 
            className="form-check-input me-1" 
            type="checkbox" id="{index}"/>

            <label 
            className="form-check-label" for={Index}>{Todo}
            </label>
            {/* take home assignment: implement single delete */}
            <button className="btn btn-danger">
                Delete
            </button>
        </li>
    );
}

export default TodoItem;