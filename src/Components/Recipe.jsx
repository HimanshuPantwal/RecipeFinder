import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Aos from 'aos';
function Recipe() {
    const [item, setItem] = useState();
    const { recipeId } = useParams();
    let id = '';
    useEffect(() => {
        Aos.init({ duration: 1000 })
    })
    if (recipeId !== " ") {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`).then(raw => raw.json()).then(response => {
            setItem(response.meals[0]);
        })
    }
    if (item) {
        const s = item.strYoutube;
        const str = s.split('=');
        id = str[str.length - 1];
    }
    return (
        <>
            {
                item ?
                    <div className='flex flex-col items-center  max-md:m-4 p-4 space-y-2 bg-[#e2e8f0]'>
                        <div className='flex md: flex-col md:items-center'>
                            <img src={item.strMealThumb} className='size-6/12 md:size-9/12 border-2 border-black max-md:self-center' data-aos="fade-left" />
                            <div className='w-10/12 flex flex-col space-x-1 justify-center items-center' data-aos="fade-right">
                                <div className='font-semibold text-2xl max-md:pl-20 h-10 p-1' data-aos="fade-left">{item.strMeal}</div>
                                <div className='flex text-center max-md:pl-20'>
                                    <span className='font-bold'>Category:</span><div> {item.strCategory} </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='font-semibold text-xl' data-aos="fade-up">Instructions</div>
                            <div className='align-super' data-aos="fade-up">{item.strInstructions}
                            </div>
                        </div>

                        <div className='flex  w-full md:justify-center' data-aos='fade-up'>
                            <div className='flex flex-col w-[50%] md:w-[30%] bg-red-300 items-start p-4'>
                                <div className='font-semibold '>Ingredients</div>
                                {item.strIngredient1 != '' ? <h4>{item.strIngredient1}</h4> : null}
                                {item.strIngredient2 != '' ? <h4>{item.strIngredient2}</h4> : null}
                                {item.strIngredient3 != '' ? <h4>{item.strIngredient3}</h4> : null}
                                {item.strIngredient4 != '' ? <h4>{item.strIngredient4}</h4> : null}
                                {item.strIngredient5 != '' ? <h4>{item.strIngredient5}</h4> : null}
                                {item.strIngredient6 != '' ? <h4>{item.strIngredient6}</h4> : null}
                                {item.strIngredient7 != '' ? <h4>{item.strIngredient7}</h4> : null}
                                {item.strIngredient8 != '' ? <h4>{item.strIngredient8}</h4> : null}
                            </div>
                            <div className='flex flex-col bg-green-100 w-[50%] md:w-[30%] items-start p-4'>
                                <div className='font-semibold'>Measures</div>
                                {item.strMeasure1 != '' ? <h4>{item.strMeasure1}</h4> : null}
                                {item.strMeasure2 != '' ? <h4>{item.strMeasure2}</h4> : null}
                                {item.strMeasure3 != '' ? <h4>{item.strMeasure3}</h4> : null}
                                {item.strMeasure4 != '' ? <h4>{item.strMeasure4}</h4> : null}
                                {item.strMeasure5 != '' ? <h4>{item.strMeasure5}</h4> : null}
                                {item.strMeasure6 != '' ? <h4>{item.strMeasure6}</h4> : null}
                                {item.strMeasure7 != '' ? <h4>{item.strMeasure7}</h4> : null}
                                {item.strMeasure8 != '' ? <h4>{item.strMeasure8}</h4> : null}
                            </div>
                        </div>
                        <div className='video w-full md:h-[300px] flex justify-center'>
                            <iframe width="100%"
                             src={`https://youtube.com/embed/${id}`} className='border-2 border-black rounded-md size-6/12 md:h-[290px]' data-aos="fade-up"></iframe>
                        </div>
                    </div>
                    : null
            }
        </>
    )
}

export default Recipe