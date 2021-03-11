



const SelectCategory = (props) => {

    const menCategories = [
         ["t-shirts-and-tanks", "Koszulki męskie"],
         ["shirts", "Koszule"],
         //["hoodies-and-sweatshirts", "Męskie bluzy"],
         ["trousers", "Spodnie"],
         ["jeans", "Dżinsy"],
         ["shorts", "Szorty"],
         ["basics", "Kolekcja podstawowa"],
         ["shoes", "Obuwie"],
         ["accessories", "Dodatki"],
         ["conscious", "Conscious – moda przyjazna środowisku"],
         ["view-all", "Zobacz wszystko"],
        ]
    const ladiesCategories = [
          ["basics", "Kolekcja podstawowa"],
          ["dresses", "Sukienki"],
          ["knitwear", "Dzianiny"],
          ["tops", "Koszulki"],
          ["trousers", "Spodnie"],
          ["jeans", "Dżinsy"],
          ["skirts", "Spódnice"],
          //["hoodies-sweatshirts", "Bluzy"],
          ["shoes", "Buty"],
          ["accessories", "Dodatki"],
          ["shorts", "Szorty"],
          ["jumpsuits", "Kombinezony"],
          ["view-all", "Zobacz wszystko"],
         ]
         
    const sex = props.sex;
    let isMen = false;



    if(sex ==="men"){
        isMen = true;
    }else {
        isMen = false;
    }

 
 


 const ladiesProductCategories = ladiesCategories.map(category => (
     <option key={category[0]} value={category[0]}>{category[1]}</option>
 ))

 const menProductCategories = menCategories.map(category => (
    <option key={category[0]} value={category[0]}>{category[1]}</option>
))



    return ( 
        <select 
        onChange={props.selectCategory} 
        value={props.value}>
            {isMen? menProductCategories : ladiesProductCategories}
             
       </select>
     );
}
 
export default SelectCategory;

 