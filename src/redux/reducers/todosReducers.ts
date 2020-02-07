import * as MyTypes from "MyTypes";
import { actionTypes } from "../actions";

interface ITodoModel {
  count: number;
  list: string[];
}

export const initialState: ITodoModel = {
  count: 2,
  list: ["Do Laundry", "Do Dishes"]
};

export const todoReducer = (
  state: ITodoModel = initialState,
  action: MyTypes.RootAction
) => {
  switch (action.type) {
    // Adds a new item to the list
    case actionTypes.ADD: {
      return {
        ...state,
        count: state.count + 1,
        lsit: [...state.list, action.payload]
      };
    }

    case actionTypes.DELETE: {
      const oldList = [...state.list];
      const newList = oldList.splice(action.payload, 1);
      return {
        ...state,
        count: state.count - 1,
        list: newList
      };
    }

    default:
      return state;
  }
};