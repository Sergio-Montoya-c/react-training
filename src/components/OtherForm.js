import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withSubscription from './FormHOC';

const fields = {
  name: '',
  lastname: '',
  address: '',
  other: '',
}

class OtherForm extends Component {

  handleClick = () => {
    this.props.onPostItem(this.state);
  }

  render() {
    const {name, lastname, address, other} = this.props.fields;
    const {handleChange} = this.props;
    return(
      <div>
        <div>
          <label>name</label>
          <input onChange={handleChange} name="name" type="text" value={name} />
        </div>
        <div>
          <label>lastname</label>
          <input onChange={handleChange} name="lastname" type="text" value={lastname} />
        </div>
        <div>
          <label>address</label>
          <input onChange={handleChange} name="address" type="text" value={address} />
        </div>
        <div>
          <label>other</label>
          <input onChange={handleChange} name="other" type="text" value={other} />
        </div>
        <button onClick={this.handleClick}>
          SEND
        </button>
      </div>
    )
  }
}


const FormWithSubscription = withSubscription(OtherForm, fields);

export default FormWithSubscription;

OtherForm.propTypes = {
  onPostItem: PropTypes.func.isRequired,
};