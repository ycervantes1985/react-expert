import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGift";

export const useFetchGifs = (category) => {

   const [image, setImage] = useState([]);
   const [isLoading, setisLoading] = useState( true );

const getImages = async() => {
  const newImages= await getGifs(category);
  setImage(newImages); 
  setisLoading(false);
}

useEffect(() => {
   getImages();
}, []) 

  return {
   images:image,
   isLoading:isLoading
}
}
