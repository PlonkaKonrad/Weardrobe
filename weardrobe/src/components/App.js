import React, { Component } from 'react';
import Menu from './menu/menu';
import Display from './display/display';
import Wordrobe from './wordrobe/wordrobe'



class App extends Component {
  state = {
    gender: '',
    style: '', 
    }

    componentDidMount() {
      fetch("https://www2.hm.com/pl_pl/on/nowosci/view-all/_jcr_content/main/productlisting.display.json?sort=stock&image-size=large&image=alt&offset=36&page-size=200")
    .then(response => response.json())
    .then(data => console.log(data));


    }

  render() { 
    return (
      <>
      <Menu />
      <Display />
      <Wordrobe />



      </>
     );
  }
}
 
export default App;
