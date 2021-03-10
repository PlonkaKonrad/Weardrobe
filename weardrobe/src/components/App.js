import React, { Component } from 'react';
import Menu from './menu/menu';
import Display from './display/display';
import Wordrobe from './wordrobe/wordrobe'


const gender = ['man','woman']
const category = ['all', '']


class App extends Component {
  state = {
    sex: '',
    category: '',
    productsList: []
    }

   componentDidMount() {
      fetch("https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=pl&lang=pl&currentpage=0&pagesize=200&categories=men_trousers&concepts=H%26M%20MAN", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "a91d8e162amsh76cb93ee6c1ea04p10c773jsn656c6b8f2df7",
		"x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com"
	}
    })

//   fetch("https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail?lang=pl&productcode=0967497005&country=pl", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "a91d8e162amsh76cb93ee6c1ea04p10c773jsn656c6b8f2df7",
// 		"x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com"
// 	}
// })



  .then(response => response.json())
  .then(data => {
    
    const productsList= data.results;

    console.log(data.results)

      this.setState({
        productsList: productsList,

      })

  });
     

    }

  render() { 
    return (
      <>
      <Menu />
      <Display />
      <Wordrobe productsList={this.state.productsList} />



      </>
     );
  }
}
 
export default App;
