import React from 'react';
import './wordrobe.css';











const Wordrobe = (props) => {

    const productsList = props.productsList;
       

    const productsListMap = productsList.map(product => (

        <div key={product.pk} className='product'><img src={product.images[0].url} alt={product.name}/></div>

    ))


    return ( 
        <div className='wordrobe'>
           
            {productsListMap}
           

        </div>
     );
}
 
export default Wordrobe;