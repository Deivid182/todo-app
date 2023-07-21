import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteAllTasks } from '../redux/features/taskSlice'
import Tabs from './Tabs'
import { DeleteIcon } from './Icons'
const TaskList = () => {

  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()
  const completedTasks = tasks.filter(task => task.completed)
  console.log(completedTasks)

  const activeTasks = tasks.filter(task => !task.completed)

  return (
    <>
      <Tabs allTasks={tasks} completedTasks={completedTasks} activeTasks={activeTasks} />
      <div className='flex items-center justify-end w-5/6 mx-auto'>
        <button
          className='p-2 rounded-md bg-red-500 text-white flex items-center gap-x-2 mt-6 '
          onClick={() => dispatch(deleteAllTasks())}
        >
          <DeleteIcon />
          Delete all tasks
        </button>
      </div>
    </>
  )
}

export default TaskList
