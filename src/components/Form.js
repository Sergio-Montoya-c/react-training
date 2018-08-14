import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  state = {
    title: '',
    body: '',
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleClick = () => {
    this.props.onPostItem(this.state);
  }

  render() {
    const {title, body} = this.state;
    return(
      <div>
        <div>
          <label>Title</label>
          <input onChange={this.handleChange} name="title" type="text" value={title} />
        </div>
        <div>
          <label>Body</label>
          <input onChange={this.handleChange} name="body" type="text" value={body} />
        </div>
        <button onClick={this.handleClick}>
          SEND
        </button>
      </div>
    )
  }
}

Form.propTypes = {
  onPostItem: PropTypes.func.isRequired,
};