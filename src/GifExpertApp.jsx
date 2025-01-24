import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        const normalizedCategory = newCategory.toLowerCase();
        if (categories.includes(newCategory)) return;
        if (categories.some(category => category.toLowerCase() === normalizedCategory)) return;
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                // setCategories={ setCategories } 
                onNewCategory={onAddCategory}
            />

            <ol>
                {
                    categories.map(category => {
                        return <GifGrid
                            key={category}
                            category={category}
                        />
                    })
                }
            </ol>
        </>
    )
}