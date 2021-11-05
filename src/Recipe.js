import React  from "react";
import style from "./recope.module.css" ;


const Recipe = ({title ,calories ,img ,ingredients}) =>{
    return (
        <div className = {style.recipes}>
            <h2>{title}</h2>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img src={img} alt="" className = {style.img}/>

        </div>

    );
}
export default Recipe ;