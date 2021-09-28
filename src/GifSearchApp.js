
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifSearchApp = () => {

    const [categories, setCategories] = useState(['Back to the future']);

    return (
        <>
            <h2>GIFs Search App for you to explore and have fun!</h2>
            <AddCategory setCategories = { setCategories }/>  
            <hr/>

            <ol>
            {
                categories.map (category => {
                    return(
                        <>
                        <GifGrid 
                        key={ category }
                        category = { category }
                        />
                        </>
                    )
                }
                )
            }
           </ol>
       </>
    )
} 

