import React from "react";

const Link = function (props) {
  const {titleValue, urlValue, onChange, onDelete, onMove} = props;
  return (
    <div className="flex flex-row w-full">
      <div
        className="flex flex-row  justify-between py-2 my-2 rounded-l-lg bg-red-400 w-full ">
        <div className="flex flex-col pl-2 text-red-900">
          <input
            className="p-1 bg-red-400 focus:outline-none focus:bg-red-300 font-semibold placeholder-red-50"
            type="text"
            placeholder="Title"
            name="titleValue"
            value={titleValue}
            onChange={onChange}/>
          <input
            className="p-1   focus:outline-none focus:bg-red-300 font-semibold bg-red-400 placeholder-red-50"
            placeholder="Url"
            type="text"
            name="urlValue"
            value={urlValue}
            onChange={onChange}/>

        </div>

        <div
          onClick={onDelete}
          className="border bg-red-400 mr-2 rounded hover:text-red-100 cursor-pointer text-white font-semibold">
          Delete
        </div>
      </div>
      <div
        className="flex flex-col justify-between p-3 my-2 rounded-r-lg bg-red-300  text-white font-semibold">

        <input
          type="button"
          onClick={onMove}
          value="up"
          className="bg-red-300 hover:text-red-100 cursor-pointer"/>
        <input
          type="button"
          onClick={onMove}
          value="down"
          className=" bg-red-300 hover:text-red-100 cursor-pointer"/>
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

    //Copy of elements
    var links = [...this.state.links];

    //Copy of moving element
    const movingElem = links[idx]
    
    //Delete moving element
    links.splice(idx, 1)

    //Add moving element on other position
    
    if (e.target.value === "down") {
      links.splice(idx+1, 0, movingElem)
      
    } else {
      links.splice(idx-1, 0, movingElem)
      
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
      <div className="flex items-center flex-col">

        <button
          onClick={this.addLink}
          className="bg-red-300 hover:bg-red-400 text-white font-semibold p-3 my-2  rounded shadow">
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