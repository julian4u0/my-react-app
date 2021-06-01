import React from "react";

const Link = function (props) {
  const {titleValue, urlValue, onChange, onDelete, onMove} = props;
  return (
    <div className="flex flex-row w-full">
      <div
        className="flex flex-row  justify-between py-2 my-2 rounded-l-lg bg-grayc w-full ">
        <div className="flex flex-col pl-2 text-gray-900">
          <input
            className="p-1 bg-grayc focus:outline-none text-gray-300 focus:text-white focus:bg-gray-700 font-semibold placeholder-gray-50"
            type="text"
            placeholder="Title"
            name="titleValue"
            value={titleValue}
            onChange={onChange}/>
          <input
            className="p-1 bg-grayc focus:outline-none text-gray-300 focus:text-white focus:bg-gray-700 font-semibold placeholder-gray-50"
            placeholder="Url"
            type="text"
            name="urlValue"
            value={urlValue}
            onChange={onChange}/>

        </div>

        <div
          onClick={onDelete}
          className="mr-2 flex flex-col justify-center text-center hover:text-gray-400 cursor-pointer text-white font-semibold">
          
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
          </svg>
        </div>
      </div>
      <div
        className="flex flex-col justify-between p-3 my-2 rounded-r-lg bg-gray-600  text-white font-semibold">

        <div onClick={onMove} className="bg-gray-600 hover:text-gray-400 cursor-pointer">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-mov="up"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"/>
          </svg>

        </div>
        <div
          type="button"
          onClick={onMove}
          mov="down"
          className=" bg-gray-600 hover:text-gray-400 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            data-mov="down"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

class LinksContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          titleValue: 'Instagram',
          urlValue: 'instagram.com'
        }, {
          titleValue: 'Facebook',
          urlValue: 'facebook.com'
        }, {
          titleValue: 'LinkedIn',
          urlValue: 'linkedin.com'
        }, {
          titleValue: 'test',
          urlValue: 'test.com'
        }, {
          titleValue: '',
          urlValue: ''
        }
      ]
    };
  }
  // ----------------------------------------
  updateValue = (e, idx) => {

    //Get name of field
    const name = e.target.name

    //New field value
    const newValue = e.target.value

    //Copy actual links state
    const links = [...this.state.links];

    //Set new value on link on idx index and name
    links[idx][name] = newValue

    this.setState({links});

    console.log("Updated " + name + " -> " + newValue)

  }
  // ----------------------------------------
  // ----------------------------------------
  onDelete = (idx) => {
    console.log("Deleted link -> " + idx)
    var links = [...this.state.links];
    links.splice(idx, 1)

    this.setState({links: links});

  }
  // ----------------------------------------
  onMove = (e, idx) => {

    //Gets data-mov attribute inserted into SVG's
    const mov = e.target.dataset.mov

    //Copy of elements
    var links = [...this.state.links];

    //Copy of moving element
    const movingElem = links[idx]

    //Delete moving element
    links.splice(idx, 1)

    //Add moving element on other position

    if (mov === "down") {
      links.splice(idx + 1, 0, movingElem)

    } else {
      links.splice(idx - 1, 0, movingElem)

    }

    //Set links
    this.setState({links: links});

  }

  addLink = () => {
    const links = [
      ...this.state.links, {
        titleValue: '',
        urlValue: ''
      }
    ];
    this.setState({links});

    console.log("Added link pos -> " + links.length)
  }

  handleClick() {
    console.log('this is:', this);
  }

  render() {
    return (
      <div className="flex bg-grayb items-center flex-col">

        <button
          onClick={this.addLink}
          className="bg-green-700 hover:bg-green-600 text-white font-semibold p-3 my-2  rounded shadow">
          Add New Link
        </button>
        <div className="flex flex-col justify-center items-center">

          {this
            .state
            .links
            .map((link, idx) => {
              return (<Link
                key={idx}
                titleValue={link.titleValue}
                urlValue={link.urlValue}
                onChange={(e) => this.updateValue(e, idx)}
                onDelete={() => this.onDelete(idx)}
                onMove={(e) => this.onMove(e, idx)}/>)
            })}
        </div>

      </div>
    )
  }

}

export default LinksContainer;