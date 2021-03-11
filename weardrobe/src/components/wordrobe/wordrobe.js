import React from 'react';
import './wordrobe.css';
import SelectCategory from './selectCategory';
import SelectSex from './selectSex';







const Wordrobe = (props) => {



    const productsList = props.productsList;
    const productsListMap = productsList.map(product => (

        <div key={product.pk} className='product'><img src={product.images[0].url} alt={product.name}/></div>
   
    ))




    return ( 
        <div className='wordrobe'>

            <SelectSex 
                selectSex={props.selectSex}
                
            />
           
            <SelectCategory  
                productsList={props.productsList} 
                value={props.category} 
                selectCategory={props.selectCategory}
                ladiesCategories={props.ladiesCategories}
                menCategories={props.menCategories}
                sex={props.sex}
            />

            
            <button onClick={props.search}>Szukaj</button>
           
            {productsListMap}

        </div>
     );
}
 
export default Wordrobe;