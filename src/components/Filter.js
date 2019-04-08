import React from "react";

class Filter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="filterWrapper">
        <h3 className="filterTitle">Sort Pigs</h3>
        <div className="filterPigsField">
          <select
            name="type"
            id="type"
            onChange={event => this.props.onChangeType(event.target.value)}
          >
            <option value="all">All</option>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </div>

        <div className="filterPigsButton">
          <form>
            <input type="checkbox" onChange={this.props.isGreased} /> Greased?
          </form>
        </div>
      </div>
    );
  }
}

export default Filter;
