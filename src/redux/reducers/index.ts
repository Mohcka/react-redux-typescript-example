import { combineReducers } from "redux"
import { todoReducer } from "./todosReducers"

export const rootReducer = combineReducers({
  todo: todoReducer
})



export type RootState = ReturnType<typeof rootReducer>