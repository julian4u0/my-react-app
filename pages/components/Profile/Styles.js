import React from "react";
import Image from "next/image";

const StyleCard = function (props) {
  const { prop, onSelection } = props;
  return (
    <div className="flex m-2 flex-col w-3/12">
      <div
        onClick={onSelection}
        className=
        {
          prop.selected
            ? "sm:border-8 border-4 border-gray-600 cursor-pointer flex justify-center my-2 rounded-l" +
              "g text-gray-900  relative"
            : " cursor-pointer flex justify-center my-2 rounded-lg" +
              " relative"
        }
      >
        <Image
          src={prop.img}
          alt=""
          width={300}
          height={400}
          className={
            prop.selected
              ? "filter brightness-150 rounded-lg"
              : "rounded-lg"
          }
        />

        <div className="text-black text-sm md:text-2xl drop-shadow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {prop.styleId}
        </div>
      </div>
    </div>
  );
};

class Styles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stylesOwned: [
        {
          styleId: "black",
          img: "https://firebasestorage.googleapis.com/v0/b/perspace-888.appspot.com/o/black.jpg?alt=media&token=ae53e248-4ab2-435c-978a-4666deef4644",
          selected: false,
        },
        {
          styleId: "blue",
          img: "https://firebasestorage.googleapis.com/v0/b/perspace-888.appspot.com/o/circle.jpg?alt=media&token=db00e5d6-b1e5-43f0-95b0-c57b2cc95a39",

          selected: false,
        },
        {
          styleId: "coffee",
          img: "https://firebasestorage.googleapis.com/v0/b/perspace-888.appspot.com/o/coffee.jpg?alt=media&token=5ae2a867-8e9b-42b8-9cbc-4cb094d42c19",
          selected: false,
        },
        {
          styleId: "fade",
          img: "https://firebasestorage.googleapis.com/v0/b/perspace-888.appspot.com/o/fade.jpg?alt=media&token=2ff6dd1f-d8c0-47de-8547-6498dcfd5c10",
          selected: false,
        },
        {
          styleId: "fade2",
          img: "https://firebasestorage.googleapis.com/v0/b/perspace-888.appspot.com/o/fade2.jpg?alt=media&token=dde612af-7dce-4785-a142-8d7eb3ecc048",
          selected: false,
        },
        {
          styleId: "landscape",
          img: "https://firebasestorage.googleapis.com/v0/b/perspace-888.appspot.com/o/landscape.jpg?alt=media&token=6068bd8d-b532-4874-97dd-959059a88c15",
          selected: false,
        },
        {
          styleId: "leaf",
          img: "https://firebasestorage.googleapis.com/v0/b/perspace-888.appspot.com/o/leaf.jpg?alt=media&token=301177c3-8654-4113-973b-9e2dbc7b9a25",
          selected: false,
        },
        {
          styleId: "marmol",
          img: "https://firebasestorage.googleapis.com/v0/b/perspace-888.appspot.com/o/marmol.jpg?alt=media&token=5a8b0ae6-8301-4ce6-9907-dea63cab1b17",
          selected: false,
        },
        {
          styleId: "rainbow",
          img: "https://firebasestorage.googleapis.com/v0/b/perspace-888.appspot.com/o/rainbow.jpg?alt=media&token=f6872fd3-b31c-4ed7-b315-705fc64ec01d",
          selected: false,
        },
      ],
      styleSelection: "",
    };
  }

  // ----------------------------------------
  onSelection = (idx) => {
    var newSelection = [...this.state.stylesOwned];

    newSelection.map((e) => {
      e.selected = false;
    });

    newSelection[idx].selected = !newSelection[idx].selected;

    this.setState.styleSelection = newSelection[idx];

    console.log(this.setState.styleSelection);
    this.setState({ newSelection });

    //TODO: Selection based on click
  };

  render() {
    return (
      <div className="flex bg-grayb items-center flex-col">
        <div className="flex p-4 flex-row flex justify-center w-full flex-wrap ">
          {this.state.stylesOwned.map((el, idx) => {
            return (
              <StyleCard
                key={idx}
                prop={el}
                onSelection={() => this.onSelection(idx)}
              />
            );
          })}
        </div>

        <button
          onClick={this.addLink}
          className="bg-green-700 hover:bg-green-600 text-white font-semibold p-3 mt-1 mb-4  rounded shadow"
        >
          Save selection
        </button>
      </div>
    );
  }
}

export default Styles;
