import React from "react";
import PropTypes from "prop-types";
import withSubscription from "./FormHOC";

const myFields = {
  title: "",
  body: ""
};

const Form = ({ fields, onPostItem, handleInputChange }) => {
  const { title, body } = fields;
  return (
    <div>
      <div>
        <label>Title</label>
        <input
          onChange={handleInputChange}
          name="title"
          type="text"
          value={title}
        />
      </div>
      <div>
        <label>Body</label>
        <input
          onChange={handleInputChange}
          name="body"
          type="text"
          value={body}
        />
      </div>
      <button onClick={() => onPostItem(fields)}>SEND</button>
    </div>
  );
};

const FormWithSubscription = withSubscription(Form, myFields);

export default FormWithSubscription;

Form.propTypes = {
  onPostItem: PropTypes.func.isRequired
};
