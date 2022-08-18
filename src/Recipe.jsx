import React from 'react'

const Recipe = ({ title, img, calories, ingredientLines }) => {
    return (
        <div className='contents'>
            <h1 className='heading'>{title}e</h1>
            <div className="ingred_Container">
                <h3>Ingredients are used : </h3>
                <ol className='ingredients'>
                    {
                        ingredientLines.map((ingredients) => (
                            <li>{ingredients}</li>
                        ))

                    }
                </ol>
            </div>
            <div className='Calo'>
                <h3>Calories</h3>
            <p> {calories}</p>
            </div>
            <img src={img} alt="" />
        </div>
    )
}

export default Recipe;