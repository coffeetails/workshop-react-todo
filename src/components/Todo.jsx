
function Todo() {

  return (
    <div className="todo-item border p-3 mx-5 mb-5 d-flex flex-column gap-1 bg-light border border rounded-4 shadow">
        <section className="d-flex justify-content-end align-items-center">
          <h4 className="me-auto">Task title</h4>
          <small className="text-muted">Created 2025-08-01</small>
          <div className="button-group-shrink btn-group col ms-2">
            <button className="btn btn-outline-success border-2"><i className="bi bi-check-lg fs-5"></i></button>
            <button className="btn btn-outline-secondary border-2"><i className="bi bi-pencil"></i></button>
            <button className="btn btn-outline-danger border-2"><i className="bi bi-trash3"></i></button>
          </div>
        </section>

        <p class="mb-1">Description for Task 1</p>

        <section class="d-flex gap-5 align-items-center">
          <p className="m-0"><i className="bi bi-calendar3"></i> Due 31 Jul 2025, 6:00 PM</p>
          <p className="m-0"><i class="bi bi-file-earmark"></i> <span>2</span> attatchments</p>
          <p className="m-0"><i className="bi bi-person"></i> Pelle Påhittad</p>
        </section>
    </div>
  )
}

export default Todo
