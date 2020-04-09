import React from "react";
import useInputForm from "./hooks/useInputForm";
import TextField from "@material-ui/core/TextField";

function EditTodoForm({ editTodo, id, currentTask, toggle }) {
  const [value, handleChange, reset] = useInputForm(currentTask);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggle(); //toggles the toggleIsEditing in parent
      }}
    >
      <TextField
        value={value}
        margin="normal"
        onChange={handleChange}
        fullWidth
      />
    </form>
  );
}

export default EditTodoForm;
