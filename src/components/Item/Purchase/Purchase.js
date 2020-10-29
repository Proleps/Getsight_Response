import React, {useState} from 'react'
import classes from './Purchase.module.css'

export const Purchase = ({productId, unitFull, unitRatio, unit, unitRatioAlt, unitAlt }) => {
  const [count, setCount] = useState(+1)
  function countHandler (e) {
    try {
      setCount(+e.target.value)
    } catch (er) {
      if(count > 0 || e>0) setCount(count+e)
    }
  }

  // const cart = (
  //   <>
  //     <svg width="25px" heigth="25px">
  //       <use xlink="http://www.w3.org/1999/xlink" href="#cart"></use>
  //     </svg>
  //     <svg width="25px" heigth="25px" viewBox="0 0 497 415" xmlns="http://www.w3.org/2000/svg" display="none">
  //       <symbol id="cart">
  //         <path d="m14.571 16.381c.571 0 .952.381.952.952 0 .571-.381.952-.952.952-.571 0-.952-.381-.952-.952 0-.571.476-.952.952-.952m0-.952c-1.048 0-1.905.857-1.905 1.905 0 1.048.857 1.905 1.905 1.905 1.048 0 1.905-.857 1.905-1.905 0-1.048-.857-1.905-1.905-1.905"></path>
  //         <path d="m7.905 16.381c.571 0 .952.381.952.952 0 .571-.381.952-.952.952-.571 0-.952-.381-.952-.952 0-.571.476-.952.952-.952m0-.952c-1.048 0-1.905.857-1.905 1.905 0 1.048.857 1.905 1.905 1.905 1.048 0 1.905-.857 1.905-1.905 0-1.048-.857-1.905-1.905-1.905"></path>
  //         <path d="m16.476 14.476h-10.857l-.095-.381c0-.095-1.429-9.714-1.905-11.524-.381-1.524-3.333-1.429-3.333-1.429v-.952c.095 0 3.714-.286 4.286 2.19.381 1.714 1.619 9.333 1.81 11.143h10.1v.952"></path>
  //         <path d="m4.095 3.048h15.238v.952h-15.238z"></path>
  //         <path d="m5.05 10.667h12.381v.952h-12.381z"></path>
  //         <path d="m16.476 11.619h.952l1.905-8.571h-.952l-1.905 8.571"></path>
  //       </symbol>
  //     </svg>
  //   </>
  // )

  return (
    <div className={ classes.Purchase }>
      <div className={ classes.Purchase_Info } >
        <div className={ classes.Attention } />
        Продается {unitFull.replace(/а$/gm, 'ами')}:
        <br/>
        {unitRatio} {unit} = {unitRatioAlt} {unitAlt}
      </div>
      <div className={ classes.Purchase_Actions } >
        <div className={ classes.Purchase_Counter } >
          <input
            className={ classes.Counter_Input }
            value={count}
            onChange={ (e) => countHandler(e) }
          />
          <div className={ classes.Counter_Buttons}>
            <button
              className={ classes.Button_Increment }
              onClick={ () => countHandler(+1) } />
            <button
              className={ classes.Button_Decrement }
              onClick={ () => countHandler(-1) }/>
          </div>
        </div>
        <button className={ classes.Purchase_Buy } data-product-id={productId} >
          <img src="../../../icons/cart.svg" alt="cart" />
          <div>купить</div>
        </button>
      </div>
    </div>
  )
}