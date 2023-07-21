/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux'
import { deleteTask, toggleCompleted } from '../redux/features/taskSlice'
import { DeleteIcon } from './Icons'

const TaskItem = ({ task }) => {

  const dispatch = useDispatch()

  const onToggleCompleted = (id) => {
    dispatch(toggleCompleted({ id }))
  }

  const onDelete = (id) => {
    dispatch(deleteTask({ id }))
  }

  return (
    <li
      key={task.id}
      className='flex items-center gap-x-4'
    >
      <input checked={task.completed} onChange={() => onToggleCompleted(task.id)} type="checkbox" className='h-4 w-4' />
      <div className={task.completed ? 'line-through' : ''}>
        {task.title}
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className='p-2 rounded-md bg-red-500 text-white ml-auto'>
        <DeleteIcon />
      </button>
    </li>
  )
}

export default TaskItem
