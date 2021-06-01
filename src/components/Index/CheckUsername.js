import React from 'react'
import Alert from '../Alert'
class CheckUsername extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };

    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.handleClick = this
      .handleClick
      .bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  render() {
    return (
      <div className="flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center my-8 justify-center">
          <label
            className="mb-1 block text-4xl text-gray-200 font-bold md:text-right"
            htmlFor="inline-full-name">
            perspace.me/
          </label>
          <input
            className="bg-grayb font-semibold  w-3/4 md:w-2/5 text-3xl appearance-none focus:border-2 border-grayc rounded  p-1 text-gray-500 leading-tight focus:outline-none focus:bg-grayc focus:text-gray-200 "
            id="inline-full-name"
            type="text"
            placeholder="YourNameHere"/>

        </div>
        <Alert/>
        <button
          onClick={this.handleClick}
          className="bg-gray-500 text-lg mb-24 hover:bg-gray-400 w-1/2 text-white font-bold py-2 px-4 border-b-4 border-gray-700 focus:outline-none hover:border-gray-500 rounded">
          Create My Perspace
        </button>
      </div>
    )
  }

}

export default CheckUsername