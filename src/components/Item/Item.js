import React from 'react'
import { Description } from './Description/Description'
import { Price } from './Price/Price'
import { Purchase } from './Purchase/Purchase'
import classes from './Item.module.css'

function imageFix(str) {
  const arrStr = str.split('.')
  return `${arrStr[0]}.${arrStr[1]}_220x220_1.${arrStr[2]}`
}

export const Item = ({props}) => {
  return (
    <div className={ classes.Item } >
      <img
        className={ classes.Image}
        src={imageFix(props.primaryImageUrl)}
        alt="itemImage"
      />
      <Description
        code={props.code}
        title={props.title}
        assocProducts={props.assocProducts}
        description={props.description}
      />
      <div className={ classes.Price }>
        <Price
          unit={props.unitFull}
          unitAlt={props.unitAlt}
          priceGold={props.priceGold}
          price={props.priceRetail}
          priceGoldAlt={props.priceGoldAlt}
          priceAlt={props.priceRetailAlt}
        />
        <Purchase
          productId={props.productId}
          unitFull={props.unitFull}
          unitRatio={props.unitRatio}
          unit={props.unit}
          unitRatioAlt={props.unitRatioAlt}
          unitAlt ={props.unitAlt}
        />
      </div>

    </div>
  )
}