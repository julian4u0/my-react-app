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
            className="mb-2 block text-4xl text-red-500 font-bold md:text-right"
            htmlFor="inline-full-name">
            perspace.me/
          </label>
          <input
            className="bg-red-100 font-semibold placeholder-red-400 w-3/4 md:w-2/5 text-3xl appearance-none border-2 border-red-100 rounded  p-1 text-red-500 leading-tight focus:outline-none focus:bg-white focus:border-red-400"
            id="inline-full-name"
            type="text"
            placeholder="YourNameHere"/>

        </div>
        <Alert/>
        <button
          onClick={this.handleClick}
          className="bg-red-500 text-lg mb-24 hover:bg-red-400 w-1/2 text-white font-bold py-2 px-4 border-b-4 border-red-700 focus:outline-none hover:border-red-500 rounded">
          Create My Perspace
        </button>
      </div>
    )
  }

}

export default CheckUsername