import React from "react"
import { useDispatch, useSelector } from "react-redux"

const Cart = () => {
  const {cart, total} = useSelector(store => store)

  const dispatch = useDispatch()

  const upCount = (item) => {
    dispatch({
      type: "cart/up_count",
      payload: item
    })
  }

  const downCount = (item) => {
    dispatch({
      type: "cart/down_count",
      payload: item
    })
  }

  return (
    <div className='cart-container mt-[40px]'>
      <h3>Cart</h3>
      {cart?.map(item => (
        <div className="cart-item">
          <h4 className="min-w-[400px]">{item.name}</h4>
          <img style={{width: "20%"}} src={item.image} alt="" />
          <p>{item.saleOffPrice}</p>
          <div className="flex justify-center w-1/5">
            <svg onClick={() => downCount(item)} className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" /></svg>
            <input value={item?.count ? item?.count : 1} className="mx-2 text-center w-12" type="text" defaultValue="1"/>
            <svg onClick={() => upCount(item)} className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
            </svg>
          </div>
        </div>
      ))}
      <div className="total">
        <div>Total</div>
        <h2>{total}</h2>
      </div>
    </div>
  )
}

export default Cart