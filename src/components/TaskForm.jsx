
function TaskForm() {

  return (
    <form className="py-1 px-5 rounded mb-5 d-flex flex-column">
      <div className="mb-3">
        <label for="taskTitle" className="form-label">Title</label>
        <input type="text" className="form-control shadow-sm" id="taskTitle" />
      </div>

      <div className="mb-3">
        <label for="taskDescription" className="form-label">Description</label>
        <textarea className="form-control shadow-sm" id="taskDescription" rows="3"></textarea>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label for="dueDate" className="form-label">Due Date</label>
          <input type="date" className="form-control shadow-sm" id="dueDate" />
        </div>
        <div class="col">
          <label for="assignedTo" className="form-label">Assign to (Optional)</label>
          <select className="form-select shadow-sm" id="assignedTo">
            <option selected>Select Person</option>
            <option value="1">Alice</option>
            <option value="2">Bob</option>
          </select>
        </div>
      </div>

      <div className="mb-1">
        <label className="form-label" for="attachments">Attachments</label>
        <input className="form-control shadow-sm" type="file" id="attachments" multiple />
      </div>

      <div className="mb-3 py-2 px-3 border rounded border-light border-2 bg-light shadow-sm">
        <span></span>
      </div>

      <button type="submit" className="btn btn-primary align-self-end shadow-sm">+ Add Todo</button>
    </form>
  )
}

export default TaskForm
