import React, { useContext } from "react";
import useInputForm from "./hooks/useInputForm";
import TextField from "@material-ui/core/TextField";
import { DispatchContext } from "./context/todos.context";

function EditTodoForm({ id, currentTask, toggle }) {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputForm(currentTask);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "EDIT", id: id, newTask: value });
        reset();
        toggle(); //toggles the toggleIsEditing in parent
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField
        value={value}
        margin="normal"
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}

export default EditTodoForm;
