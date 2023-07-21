import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
}

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload)
    },
    editTask: (state, action) => {
      const { id, title } = action.payload
      const foundTask = state.tasks.find(task => task.id === id)
      if(foundTask) {
        foundTask.title = title
      }
    },
    toggleCompleted: (state, action) => {
      console.log(action)
      const foundTask = state.tasks.find(task => task.id === action.payload.id)
      if(foundTask) {
        foundTask.completed = !foundTask.completed
      }
    },
    deleteTask: (state, action) => {
      const foundTask = state.tasks.find(task => task.id === action.payload.id)
      if(foundTask) {
        state.tasks.splice(state.tasks.indexOf(foundTask), 1)
      }
    },
    deleteAllTasks: (state) => {
      state.tasks = []
    },
    getActiveTasks: (state) => {
      console.log(state.tasks)
    }
  }
})

export default taskSlice.reducer
export const { addTask, editTask, deleteTask, toggleCompleted, deleteAllTasks, getActiveTasks } = taskSlice.actions