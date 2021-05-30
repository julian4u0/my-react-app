import React from "react";

const StyleCard = function (props) {
  const {prop, onSelection} = props;
  return (
    <div className="flex m-2 flex-col w-5/12">
      <div
        onClick={onSelection}
        className={prop.selected
        ? "flex flex-row cursor-pointer justify-between py-2 my-2 rounded-lg bg-red-400 w-f" +
          "ull"
        : "ring ring-black flex flex-row cursor-pointer justify-between py-2 my-2 rounded-l" +
          "g bg-red-400 w-full "}>
        <div className="flex flex-col pl-2 text-red-900">

          {prop.styleId}

        </div>

      </div>

    </div>
  );
}

class Styles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stylesOwned: [
        {
          styleId: 'dark',
          selected: true
        }, {
          styleId: 'blue',
          selected: true
        }, {
          styleId: 'red',
          selected: true
        }, {
          styleId: 'flowers',
          selected: false
        }, {
          styleId: 'waves',
          selected: true
        }, {
          styleId: 'night',
          selected: true
        }
      ]
    };
  }

  // ----------------------------------------
  onSelection = (idx) => {
    console.log("Selected style -> " + idx)

    //TODO: Selection based on click

  }

  render() {
    return (
      <div className="flex items-center flex-col">

        <div className="flex p-4 flex-row flex justify-center w-full flex-wrap ">

          {this
            .state
            .stylesOwned
            .map((style, idx) => {
              return (<StyleCard key={idx} prop={style} onSelection={() => this.onSelection(idx)}/>)
            })}
        </div>

        <button
          onClick={this.addLink}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold p-3 my-2  rounded shadow">
          Save selection
        </button>
      </div>
    )
  }

}

export default Styles;