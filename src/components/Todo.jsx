
function Todo() {

  return (
    <div class="border rounded p-3 mb-3 row">

        <h6 class="mb-1">Task 1</h6>

        <small class="text-muted">Created 2025-08-01</small>
        <div class="text-end">
          <button class="btn btn-outline-secondary btn-sm mb-2">Attachment</button><br />
          <button class="btn btn-outline-danger btn-sm">✖</button>
        </div>


        <p class="mb-1">Description for Task 1</p>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="task1Done" checked />
          <label class="form-check-label" for="task1Done">
            Due 31 Jul 2025, 6:00 PM
          </label>
        </div>
        <p>attatchments</p>
        <p>person</p>

    </div>
  )
}

export default Todo
