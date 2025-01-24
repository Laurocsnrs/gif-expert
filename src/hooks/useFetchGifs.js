import { useEffect, useState } from "react";
import { getGif } from "../helpers/GetGif";

export const useFetchGifs = ( category ) => {

    const [images, setImage] = useState([]);
    const [isLoading, setIsLoading] = useState( true );
    

    const getImages = async () => {
        const newImages = await getGif(category);
        setImage(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, [])

    return {
        images,
        isLoading
    }
}
