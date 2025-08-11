
function Sidebar() {

  return (
    <nav id="sidebar" className="col-2 d-flex flex-column justify-content-between px-3 pb-5 pt-3 bg-success">
      <p className="mb-5 fs-4 text-white"><i className="bi bi-x-lg"></i></p>
      
      <ul id="sidebar-nav" className="nav flex-column flex-nowrap">
        <li className="nav-item">
          <a href="#" className="nav-link border-bottom border-3 pb-0 mt-1 fw-bold text-white"><i className="bi bi-house"></i> Dashboard</a>
        </li>
        <li class="nav-item">
          <a href="#" className="nav-link border-bottom pb-0 mt-1 fw-bold text-white"><i className="bi bi-people"></i> Users</a>
        </li>
        <li class="nav-item">
          <a href="#" className="nav-link border-bottom pb-0 mt-1 fw-bold text-white active"><i className="bi bi-list-task"></i> Tasks</a>
        </li>
        <li class="nav-item">
          <a href="#" className="nav-link border-bottom pb-0 mt-1 fw-bold text-white"><i className="bi bi-gear"></i> Settings</a>
        </li>
      </ul>

      <div className="mt-auto mb-4 text-center">
        <p className="mb-1 text-white">Username</p>
        <a href="#" className="btn btn-outline-warning btn-sm fw-bold"><i className="bi bi-box-arrow-right"></i> Logout</a>
      </div>
    </nav>
  )
}

export default Sidebar
