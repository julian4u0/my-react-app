import React from "react";

const StyleCard = function (props) {
  const {prop, onSelection} = props;
  return (
    <div className="flex m-2 flex-col w-5/12">
      <div
        onClick={onSelection}
        className={prop.selected
        ? "ring ring-red-700 flex flex-row cursor-pointer justify-center py-2 my-2 rounded-l" +
          "g text-red-900 w-full bg-red-300"
        : " flex flex-row cursor-pointer justify-center py-2 my-2 rounded-lg bg-white w-" +
          "full  bg-red-400"}>
        <div className="flex flex-row py-2">
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
          selected: false
        }, {
          styleId: 'blue',
          selected: false
        }, {
          styleId: 'red',
          selected: false
        }, {
          styleId: 'flowers',
          selected: false
        }, {
          styleId: 'waves',
          selected: true
        }, {
          styleId: 'night',
          selected: false
        }
      ],
      styleSelection: "" 
    };
  }

  // ----------------------------------------
  onSelection = (idx) => {
    var newSelection = [...this.state.stylesOwned]

    newSelection.map((e) => {
      e.selected = false
    })

    newSelection[idx].selected = !newSelection[idx].selected


    this.setState.styleSelection = newSelection[idx]
    
    console.log(this.setState.styleSelection)
    this.setState({newSelection});

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