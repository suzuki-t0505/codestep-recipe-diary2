export const MaterialList = () => {
  const materials = [
    {
      materialName: 'テキストテキスト',
      quantity: 1
    },
    {
      materialName: 'テキストテキスト',
      quantity: 1
    },
    {
      materialName: 'テキストテキスト',
      quantity: 1
    },
    {
      materialName: 'テキストテキスト',
      quantity: 1
    },
    {
      materialName: 'テキストテキスト',
      quantity: 1
    },
    {
      materialName: 'テキストテキスト',
      quantity: 1
    }
  ]

  return (
    <dl className='text-base flex flex-wrap'>
      {
        materials.map(material => {
          return (
            <>
              <dt className='w-5/6 py-1.5 border-b'>{ material.materialName }</dt>
              <dd className='w-1/6 py-1.5 border-b'>{ material.quantity} 個</dd>
            </>
          )
        })
      }
    </dl>
  )
}