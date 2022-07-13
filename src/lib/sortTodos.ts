import Todo from "../models/todo";

export default function sortTodos(array: Todo[], isAscending = true) {
  if (isAscending) {
    return array.sort(({ dueDate: d1 }, { dueDate: d2 }) => {
      if (d1.getTime() < d2.getTime()) {
        return 1;
      }

      if (d1.getTime() > d2.getTime()) {
        return -1;
      }

      return 0;
    });
  } else {
    return array.sort(({ dueDate: d1 }, { dueDate: d2 }) => {
      if (d1.getTime() > d2.getTime()) {
        return 1;
      }

      if (d1.getTime() < d2.getTime()) {
        return -1;
      }

      return 0;
    });
  }
}
