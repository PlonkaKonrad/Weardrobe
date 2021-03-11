const SelectSex = (props) => {


    const sexArr = [

        "men",
        "ladies"
 ]
 



 const sexList = sexArr.map(sex => (
     <option value={sex} key={sex}>{sex === 'men'? 'Dla niego': 'Dla niej'}</option>
 ))




    return ( 
        <select 
        onChange={props.selectSex} 
        value={props.value}>
             {sexList}
       </select>
     );
}
 
export default SelectSex;

 