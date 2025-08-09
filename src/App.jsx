import Header from './components/Header'
import Sidebar from './components/Sidebar'
import TaskForm from './components/TaskForm'
import Todo from './components/Todo'

function App() {

  return (
    <div class="container-fluid">
      <div class="row min-vh-100">
        <Sidebar />
        <main class="col-10 p-4">
          <Header />
          <TaskForm />
          <div class="border rounded p-3 mb-3 row">
            <h5 class="col align-middle">Todos</h5>
            <div class="btn-group col ms-auto align-middle">
              <button class="btn btn-outline-secondary"><i class="bi bi-archive"></i></button>
              <button class="btn btn-outline-secondary"><i class="bi bi-filter"></i></button>
            </div>
          </div>
          <Todo />
        </main>
      </div>
    </div>
  )
}

export default App
