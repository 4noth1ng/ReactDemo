import React from 'react'

function ItemCount({goodsList, handleCheckAll}) {
let price = goodsList.reduce((pre, cur) => {
    return pre + cur.price
}, 0)
const handleWrapCheckAll = (e) => {
    const {checked} = e.target
    handleCheckAll(checked)
}
  return (
    <div className='flex justify-between mt-4'>
        <div className='flex justify-start'>
            <input type="checkbox" name="" id="" className='mr-2' onChange={handleWrapCheckAll} />
            <span>全选</span>
        </div>
        <div className="flex">
            <span>总额</span>
            <span className='ml-2'>{price}</span>
        </div>
    </div>
  )
}

export default ItemCount