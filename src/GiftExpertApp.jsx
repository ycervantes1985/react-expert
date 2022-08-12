import { useState } from "react";
import { AddCategory, GiftGrid } from "./component";



export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    
    const onAddCategory = (newCategory) =>{
    if(categories.includes(newCategory)) return;
    setCategories([ newCategory, ...categories, ]);
    //setCategories( cat => [ ...cat, 'Valorant']);
    
    }


  return (
    <>
       <h1>GiftExpertApp</h1>
       <AddCategory 
       onNewCategory={onAddCategory}
       />
        
        {
        categories.map((category) =>(
        <GiftGrid 
        key={category}
        category={category}
        />
        ))
       }
    </>
    
  )
}
