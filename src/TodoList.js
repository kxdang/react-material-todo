import React from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Todo from "./Todo";

function TodoList({ todos, removeTodo }) {
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <>
            <Todo
              task={todo.task}
              key={todo.id}
              id={todo.id}
              completed={todo.completed}
              removeTodo={removeTodo}
            />
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
