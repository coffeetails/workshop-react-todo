
function Sidebar() {

  return (
    <nav class="col-2 bg-light d-flex flex-column px-3 py-5">
      <div class="mb-5 text-center">
        <strong>☰</strong>
      </div>
      <ul class="nav flex-column">
        <li class="nav-item">
          <a href="#" class="nav-link">Dashboard</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Users</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link active">Tasks</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Settings</a>
        </li>
      </ul>
      <div class="mt-auto mb-4 text-center">
        <p class="mb-1">Username</p>
        <a href="#" class="btn btn-outline-secondary btn-sm">Logout</a>
      </div>
    </nav>
  )
}

export default Sidebar
