import React, {useState} from 'react'
import classes from './Price.module.css'

export const Price = ({unit, unitAlt, priceGold, price, priceGoldAlt, priceAlt }) => {
  const [tab, setTab] = useState(true)
  function toggle(boo) {
    boo?setTab(true):setTab(false)
  }
  return (
    <div className={ classes.Price }>
      <div className={ classes.Select_Unit } >
        <div
          className={ tab?classes.Unit_Tab_Active:classes.Unit_Tab }
          onClick={ ()=>toggle(true) }
          >За {unit.replace(/а$/gm, 'у')}
        </div>
        <div
          className={ tab?classes.Unit_Tab:classes.Unit_Tab_Active }
          onClick={ ()=>toggle(false) }
          >За {unitAlt}
        </div>
      </div>
      {tab?
        (<div className={ classes.Selected } >
          <div className={ classes.Price_Mode}>По карте клуба</div>
          <span className={ classes.Price_Gold}>
            {priceGold}
            <img src="../../../icons/rouble_black.svg" alt="Руб." />
          </span>

          <span className={ classes.Price_Retail}>
            {price}
            <img src="../../../icons/rouble_gray.svg" alt="Руб." />
          </span>
        </div>)
      :(
      <div className={ classes.SelectedAlt } >
        <div className={ classes.Price_Mode}>По карте клуба</div>
        <span className={ classes.Price_Gold}>
          {priceGoldAlt}
          <img src="../../../icons/rouble_black.svg" alt="Руб." />
        </span>

        <span className={ classes.Price_Retail}>
          {priceAlt}
          <img src="../../../icons/rouble_gray.svg" alt="Руб." />
        </span>
      </div>)}
    </div>
  )
}