
function Todo({ todos, setTodos }) {

  console.log(todos);
  
  function finishItem(e, todo) {
    console.log(e);
    console.log(todo);
    let updateTodos = [...todos];
    
    for(let i = 0; i <= updateTodos.length-1; i++) {
      if(updateTodos[i] == todo) {
        if(updateTodos[i].done) {
          updateTodos[i].done = false;
        } else {
          updateTodos[i].done = true;
        }
      }
    }
    console.log(updateTodos);
    
    setTodos(updateTodos);
    
  }

  function removeItem(todo) {
    let updateTodos = [...todos];
    updateTodos = updateTodos.filter(item => item != todo);
    setTodos(updateTodos);
  }

  const wrapperClasses = "todo-item border p-3 mx-5 mb-5 d-flex flex-column gap-1 border border-2 rounded-4 shadow";
  const displayTodos = todos.map((todo, index) => {
    return (
      <div key={index} className={ todo.done ? "border-success bg-success-subtle " + wrapperClasses : "border-light bg-light " + wrapperClasses }>
        <section className="d-flex justify-content-end align-items-center">
          <h4 className="me-auto">
            {todo.taskTitle} {todo.done ? <i className="bi bi-check-lg opacity-100"></i> : <i className="bi bi-check-lg opacity-0"></i>}
          </h4>
          <p className="text-muted m-0">Created {todo.created}</p>

          <div className="button-group-shrink btn-group col ms-2">
            <button 
              className="btn btn-outline-success border-2" 
              onClick={(e) => finishItem(e, todo)}>
              <i className="bi bi-check-lg fs-5"></i>
            </button>
            
            <button 
              className="btn btn-outline-secondary border-2">
              <i className="bi bi-pencil"></i>
            </button>
            
            <button 
              className="btn btn-outline-danger border-2" 
              onClick={() => removeItem(todo)}>
              <i className="bi bi-trash3"></i>
            </button>
          </div>

        </section>

        <p className="mb-1">{todo.taskDescription}</p>

        <section className="d-flex gap-5 align-items-center">
          <p className="m-0">
            <i className="bi bi-calendar3"></i> 
            Due: {todo.dueDate}
          </p>

          <p className="m-0">
            <i className="bi bi-file-earmark"></i> 
            <span>{todo.attachments}</span> attatchments
          </p>

          <p className="m-0">
            <i className="bi bi-person"></i> 
            {todo.assignedTo}
          </p>
        </section>

      </div>
    )
  });

  const relaxTime = (
    <p className="text-center">All todos are done, time to relax 🏖️</p>
  )

  return (
    <>
      { displayTodos.length > 0 ? displayTodos : relaxTime }
    </>
  )
}

export default Todo
