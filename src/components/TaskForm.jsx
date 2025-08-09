
function TaskForm() {

  return (
    <form class="border p-4 rounded mb-4 d-flex flex-column">
      <div class="mb-3">
        <label for="taskTitle" class="form-label">Title</label>
        <input type="text" class="form-control" id="taskTitle" />
      </div>

      <div class="mb-3">
        <label for="taskDescription" class="form-label">Description</label>
        <textarea class="form-control" id="taskDescription" rows="3"></textarea>
      </div>

      <div class="row mb-3">
        <div class="col">
          <label for="dueDate" class="form-label">Due Date</label>
          <input type="date" class="form-control" id="dueDate" />
        </div>
        <div class="col">
          <label for="assignedTo" class="form-label">Assign to (Optional)</label>
          <select class="form-select" id="assignedTo">
            <option selected>Select Person</option>
            <option value="1">Alice</option>
            <option value="2">Bob</option>
          </select>
        </div>
      </div>

      <div class="mb-3">
        <label for="attachments" class="form-label">Attachments</label>
        <input class="form-control" type="file" id="attachments" multiple />
      </div>

      <div class="mb-3 py-2 px-3 border rounded">
        display attatchments here
      </div>

      <button type="submit" class="btn btn-primary align-self-end">+ Add Todo</button>
    </form>
  )
}

export default TaskForm
