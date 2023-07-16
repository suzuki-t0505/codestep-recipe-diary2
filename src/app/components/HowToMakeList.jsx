export const HowToMakeList = () => {
  const makeList = [
    'テキストテキストテキストテキスト',
    'テキストテキストテキストテキスト',
    'テキストテキストテキストテキスト',
    'テキストテキストテキストテキスト',
    'テキストテキストテキストテキスト'
  ]
  return (
    <ol className='text-base list-decimal ml-[5%]'>
      {makeList.map(make => <li className='py-1.5 border-b'>{ make }</li>)}
    </ol>
  )
}