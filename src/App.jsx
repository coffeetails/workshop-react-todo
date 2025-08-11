import Header from './components/Header'
import Sidebar from './components/Sidebar'
import TaskForm from './components/TaskForm'
import Todo from './components/Todo'

function App() {

  return (
    <div classNames="container-fluid m-0">
      <div className="background bg-success-subtle row min-vh-100 m-0">
        <Sidebar />
        <main className="col p-0">
          <Header />
          <TaskForm />
          <div id="todos-header" className="d-flex align-items-center mb-4 py-2 px-4 bg-success bg-opacity-75 shadow">
            <h5 className="col fs-4 align-middle m-0"> Todos</h5>

            <div className="button-group-shrink btn-group col">
              <button className="btn btn-outline-light"><i className="bi bi-archive"></i></button>
              <button className="btn btn-outline-light"><i className="bi bi-filter"></i></button>
            </div>
          </div>
          <Todo />
          
        </main>
      </div>
    </div>
  )
}

export default App
