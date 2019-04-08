import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Filter from './Filter';
import HogContainer from '../containers/HogContainer'
// const images = importAll(require.context('./images', false, '/\.png/'));





const importAll = (r) => {
   let images = {};
   r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
   return images
}

const images = importAll(require.context('../hog-imgs', false, /\.(png|jpe?g|svg)$/));


class App extends Component {

   constructor() {
      super();
      this.state = {
         hogs,
         displayHogs: hogs,
         greased: false
      }
   }

   componentDidMount() {
      this.addImageToHogs();
   }

   addImageToHogs = () => {
      console.log(images)
      for (let i = 0; i < this.state.hogs.length; i++) {
         this.state.hogs[i].image = Object.values(images)[i];
      }
      this.setState({
         hogs: this.state.hogs
      })
   }

   onChangeType = selected => {
         this.sortHogs(selected)
         console.log(selected);
   };

   sortHogs = (selected) => {
      let sortedHogs = this.state.hogs
      switch (selected){
         case 'weight':
         sortedHogs.sort((a,b) => (a.weight > b.weight) ? -1 : 1)
         break;
         case 'name':
         sortedHogs.sort((a,b) => (a.name > b.name) ? 1 : -1)
         break;
         default:
         null
      }
      console.log(sortedHogs)
      this.setState({
         displayHogs: sortedHogs
      })
   }

   greasedPigs = () =>{
      let greasyPigs = this.state.hogs.filter(hog => {
         return hog.greased === true
      })
      return greasyPigs
   }

   isGreased = () => {
      this.setState({
         greased: !this.state.greased
      })
      if (this.state.greased){
         this.setState({
            displayHogs: this.greasedPigs()
         })
      }
      else {
            displayHogs: this.state.hogs
      }
      }


   //
   // onSortPigsClick = () => {
   //    console.log('sort click')
   // }


  render() {
    return (
      <div className="App">
          < Nav />
       <Filter onChangeType={this.onChangeType} onSortPigsClick={this.onSortPigsClick} isGreased={this.isGreased}/>
       <HogContainer hogs={this.state.displayHogs} />
      </div>
    )
  }
}

export default App;
