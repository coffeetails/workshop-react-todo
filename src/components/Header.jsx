
function Header() {

  return (
    <div id="page-header" className="d-flex justify-content-between align-items-center mb-4 py-2 px-4 bg-success bg-opacity-75 shadow">
      <h2 class="m-0">Tasks</h2>
      <input type="search" className="form-control w-25" placeholder="Search tasks..." />
    </div>
  )
}

export default Header
