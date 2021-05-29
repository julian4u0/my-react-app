import React from "react";

const Link = function (props) {
  const {titleValue, urlValue, onChange, onDelete} = props;
  return (
    <div className="flex flex-row w-full">
      <div
        className="flex flex-row  justify-between py-2 my-2 rounded-l-lg bg-red-400 w-full ">
        <div className="flex flex-col pl-2">
          <input
            className="p-1 bg-red-400 placeholder-red-50"
            type="text"
            placeholder="Title"
            name="titleValue"
            value={titleValue}
            onChange={onChange}/>
          <input
            className="p-1 mt-1 bg-red-400 placeholder-red-50"
            placeholder="Url"
            type="text"
            name="urlValue"
            value={urlValue}
            onChange={onChange}/>

        </div>

        <div
          onClick={onDelete}
          className="border bg-red-400 mr-4 rounded hover:text-red-100 cursor-pointer text-white font-semibold">
          Delete
        </div>
      </div>
      <div
        onClick={onDelete}
        className="flex flex-col justify-between p-3 my-2 rounded-r-lg bg-red-300   cursor-pointer text-white font-semibold">
        
        <div className="hover:text-red-100">
          Up
        </div>
        <div className="hover:text-red-100">
          Down
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
      <div className="flex items-center flex-col w-full">

        <button
          onClick={this.addLink}
          className="w-1/2 bg-red-300 hover:bg-red-400 text-white font-semibold py-2 px-4  rounded shadow">
          Add New Link
        </button>

        <div className="w-1/2">

          {this
            .state
            .links
            .map((link, idx) => {
              return (<Link
                key={idx}
                titleValue={link.titleValue}
                urlValue={link.urlValue}
                onChange={(e) => this.updateValue(e, idx)}
                onDelete={() => this.onDelete(idx)}/>)
            })}

        </div>

      </div>
    )
  }

}

export default LinksContainer;