import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from "../redux/features/taskSlice"
import { v4 as uuid } from 'uuid';


const FormTask = () => {

  const [title, setTitle] = useState('')
  const dispatch = useDispatch()
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(title)
    dispatch(addTask({
      id: uuid(),
      title,
      completed: false
    }))
  }

  return (
    <form
      className='flex flex-col p-4 shadow-sm bg-gray-50 w-5/6 mx-auto space-y-4'
      onSubmit={onSubmit}
    >
      <input
        type="text"
        placeholder='Enter your task'
        className='p-2 rounded-md '
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button
        type='submit'
        className='p-2 rounded-md bg-blue-500 text-white w-52'>
        Add Task
      </button>
    </form>
  )
}

export default FormTask
