import { useState } from "react";

function Ingredients() {
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");

    const addIngredient = (ingredient) => {
        setIngredients([...ingredients, ingredient]);
        setNewIngredient("");
    };
    console.log(ingredients);
    return (
        <div className="ingredients">
            <h2>Ingredients</h2>
            <input
                type="text"
                value={newIngredient}
                onChange={(e) => setNewIngredient(e.target.value)}
            />
            <button onClick={() => addIngredient(newIngredient)}>Add</button>
            <ul>
                {ingredients.map((ing, index) => (
                    <li key={index}>{ing}</li>
                ))}
            </ul>
        </div>
    );
}

export default Ingredients;
