import React from "react";

import Hog from "../components/Hog";

class HogContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  renderHogs = () => {
     return this.props.hogs.map((hog) => {
        return <Hog  hog={hog}/>
     })
 }

  render() {
    return(
    <div id='hogContainer'>
      {this.renderHogs()}
    </div>

)
  }
}

export default HogContainer;
