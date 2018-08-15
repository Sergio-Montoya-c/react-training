import React from 'react';
import PropTypes from 'prop-types';
import withSubscription from './FormHOC';

const fields = {
  title: '',
  body: '',
}

const checkData = ({title, body}) => {
  return title !== '' && body !== '';
}

const Form = ({fields, handleChange, onPostItem}) => {
  const {title, body} = fields;
  return(
    <form onSubmit={ event =>  {
          event.preventDefault();
          onPostItem(fields)
        }
      }>
      <div>
        <label>Title</label>
        <input onChange={handleChange} name="title" type="text" value={title} />
      </div>
      <div>
        <label>Body</label>
        <input onChange={handleChange} name="body" type="text" value={body} />
      </div>
      { checkData(fields) &&
        <button type='submit'>
          SEND
        </button>
      }
    </form>
  )
}

const FormWithSubscription = withSubscription(Form, fields);

export default FormWithSubscription;

Form.propTypes = {
  onPostItem: PropTypes.func.isRequired,
};