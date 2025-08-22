import { useState } from 'react';

function TaskForm({ setTodos }) {
  const [files, setFiles] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const attachmentsInput = event.currentTarget.elements.attachments;
    console.log(attachmentsInput.files);
    

    const newTodo = {
      taskTitle: data.get('taskTitle').length != 0 ? data.get('taskTitle') : 'Todo',
      taskDescription: data.get('taskDescription') ?? '',
      dueDate: data.get('dueDate').length!= 0  ? data.get('dueDate') : 'anytime',
      assignedTo: data.get('assignedTo').length!= 0  ? data.get('assignedTo') : 'anyone',
      attachments: attachmentsInput.files.length ?? '0',
      created: new Date().toISOString().slice(0, 10),
      done: false
    };

    setTodos(prev => [newTodo, ...prev]);

    //console.log("newTodo", newTodo);
  }


  const attatchmentUpdate = (event) => {
    const attachmentsInput = Array.from(event.target.files);
    setFiles(attachmentsInput);
  }

  return (
    <form className="py-1 px-5 rounded mb-5 d-flex flex-column" onSubmit={addTodo}>
      <div className="mb-3">
        <label htmlFor="taskTitle" className="form-label">Title</label>
        <input name="taskTitle" id="taskTitle" type="text" className="form-control shadow-sm" />
      </div>

      <div className="mb-3">
        <label htmlFor="taskDescription" className="form-label">Description</label>
        <textarea name="taskDescription" id="taskDescription" rows="3" className="form-control shadow-sm"></textarea>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label htmlFor="dueDate" className="form-label">Due Date</label>
          <input name="dueDate" id="dueDate" type="date" className="form-control shadow-sm" />
        </div>
        <div className="col">
          <label htmlFor="assignedTo" className="form-label">Assign to (Optional)</label>
          <select name="assignedTo" id="assignedTo" className="form-select shadow-sm">
            <option value="">Select Person</option>
            <option value="Alice">Alice</option>
            <option value="Bob">Bob</option>
          </select>
        </div>
      </div>

      <div className="mb-1">
        <label className="form-label" htmlFor="attachments">Attachments</label>
        <input name="attachments" className="form-control shadow-sm" type="file" id="attachments" onChange={(event) => attatchmentUpdate(event)} multiple />
      </div>

      <div className="mb-3 py-2 px-3 border rounded border-light border-2 bg-light shadow-sm">
        {files.map((file, index) => (
          <p key={index} className="m-0">{file.name}</p>
        ))}
      </div>

      <button type="submit" className="btn btn-primary align-self-end shadow-sm">+ Add Todo</button>
    </form>
  )
}

export default TaskForm
