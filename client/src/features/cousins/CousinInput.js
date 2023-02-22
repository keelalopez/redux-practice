import React, { useState } from "react";
import { useDispatch } from "react-redux";

function CousinInput() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
  });

  function handleInputChange(event) {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    dispatch({ type: "cousins/add", payload: formData });
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <p>
        <input
          type="text"
          id="name"
          onChange={handleInputChange}
          placeholder="name"
        />
      </p>
      <p>
        <input
          type="text"
          id="age"
          onChange={handleInputChange}
          placeholder="age"
        />
      </p>
      <input type="submit" />
    </form>
  );
}

export default CousinInput;
