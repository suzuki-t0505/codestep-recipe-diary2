import { HowToMakeList } from "./HowToMakeList"
import { MaterialList } from "./MaterialList"
import { RecipeSectionTitle } from "./RecipeSectionTitle"

export const Recipe = () => {
  return (
    <section className='px-[5%] pt-10 min-[835px]:w-1/2'>
      <h1 className='text-3xl font-bold'>ひよこ豆とアボガドのタコス</h1>
      <p className='text-base mt-8 break-words'>たっぷりのひよこ豆とレンズ豆にアボガドとトマトを添えて、少しライムを絞ったらおいしいタコスのできあがりです。</p>
      <div className='mt-10'>
        <RecipeSectionTitle>材料（2人分）</RecipeSectionTitle>
        <MaterialList />
      </div>
      <div className='pt-10'>
        <RecipeSectionTitle>作り方</RecipeSectionTitle>
        <HowToMakeList />
      </div>
    </section>
  )
}