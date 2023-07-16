import Image from "next/image";
import recipeImage from '../../../public/recipe.jpg';

export const Mainvisual = () => {
  return (
    <div className='min-[835px]:w-1/2'>
      <Image
        src={recipeImage}
        alt='recipe image'
        className='w-full h-[700px] object-cover'
        />
    </div>
  )
}