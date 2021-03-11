import React, { Component } from 'react';
import Menu from './menu/menu';
import Display from './display/display';
import Wordrobe from './wordrobe/wordrobe'




class App extends Component {
  state = {
    sex: 'men',
    category: 'all',
    productsList: [],
    ladiesCategories: [],
    menCategories: [],

    }



    handleSearch = () => {
      fetch(`https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=pl&lang=pl&currentpage=0&pagesize=90&categories=${this.state.sex}_${this.state.category}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "a91d8e162amsh76cb93ee6c1ea04p10c773jsn656c6b8f2df7",
		"x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com"
	}
    })

  .then(response => response.json())
  .then(data => {
    
    const productsList= data.results;
    console.log(data)

      this.setState({
        productsList: productsList,
      })

  });
     

 }



// componentDidMount(){
//   fetch("https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/categories/list?lang=pl&country=pl", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "a91d8e162amsh76cb93ee6c1ea04p10c773jsn656c6b8f2df7",
// 		"x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com"
// 	}
// })
// .then(response => response.json())
// .then(data => {

// const menCategories = (data[2].CategoriesArray[3].CategoriesArray)
// const ladiesCategories =(data[0].CategoriesArray[3].CategoriesArray)


// console.log(menCategories)

//   this.setState({
//     ladiesCategories: ladiesCategories,
//     menCategories: menCategories,
//   })

// });
 

// }




//  handleSearch = () => {
//   fetch(`https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=pl&lang=pl&currentpage=0&pagesize=&categories=${this.state.sex}_${this.state.category}&concepts=H%26M%20MAN`, {
// "method": "GET",
// "headers": {
// "x-rapidapi-key": "a91d8e162amsh76cb93ee6c1ea04p10c773jsn656c6b8f2df7",
// "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com"
// }
// })

// .then(response => response.json())
// .then(data => {

// const productsList= data.results;
// console.log(data)

//   this.setState({
//     productsList: productsList,
//   })

// });
 

// }



    handleSelectCategory = (e) => {
     this.setState({
        category: e.target.value,
     })
     
    }

    

    handleSelectSex= (e) => {
      this.setState({
        sex: e.target.value
      })
      

    }



  render() { 



    return (
      
      <>
      <Menu />
      <Display />
      <Wordrobe 
        productsList={this.state.productsList} 
        value={this.state.category} 
        sex={this.state.sex}
        selectCategory={this.handleSelectCategory}
        selectSex={this.handleSelectSex}
        search={this.handleSearch}
        menCategories={this.state.menCategories}
        ladiesCategories={this.state.ladiesCategories}
      />



      </>
     );
  }
}
 
export default App;