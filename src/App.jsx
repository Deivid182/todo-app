import FormTask from './components/FormTask'
import TaskList from './components/TaskList'

const App = () => {
  return (
    <>
      <div className='mx-auto container mt-10'>
        <h1 className='font-black text-center text-2xl mb-6'>TODO APP</h1>
        <FormTask />
        <TaskList />
      </div>
    </>
  )
}

export default App
