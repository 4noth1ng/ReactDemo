import React from 'react'


const areEqual = (preProps, curProps) => {
    return preProps.checked === curProps.checked
}

const CartItem = React.memo(({cartItem, checked = false, handleCheckedRef}) => {
    const { name, price } = cartItem
  const handleCheckedChange = (e) => {
    const { checked } = e.target
    handleCheckedRef.current(cartItem, checked)
  }

  console.log("cartItem render");
  return (
    <div className='flex justify-between w-full'>
        <div className=' flex justify-between'>
            <input type="checkbox" checked={checked}  className=' mr-2' onChange={handleCheckedChange} />
            <span>{name}</span>
        </div>
        <div>
            {price}
        </div>
    </div>
  )
}, areEqual)

export default CartItem