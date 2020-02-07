import { action } from "typesafe-actions"

export enum actionTypes {
  /**
   * Type to call for the action to add something
   */
  ADD = "ADD",
  DELETE = "DELETE"
}

export const todoActions = {
  add: (item: string) => action(actionTypes.ADD, item),
  delete: (idx: number) => action(actionTypes.DELETE, idx)
}