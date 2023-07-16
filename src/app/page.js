import { Footer } from './components/Footer';
import { Mainvisual } from './components/Mainvisual';
import { Recipe } from './components/Recipe';
import { RecipeButton } from './components/RecipeButton';

export default function Home() {
  return (
    <div className='text-[#2B2A27]'>
      <main>
        <div className='flex max-[834px]:flex-col max-w-full'>
          <Mainvisual />
          <Recipe />
        </div>
        <RecipeButton />
      </main>
      <Footer />
    </div>
  )
}
