import React, {useEffect, useState} from 'react'
import classes from './App.module.css'
import {Item} from './components/Item/Item'

async function getProducts() {
  const response = await fetch('./products.json')
  return await response.json()
}

export const App = () => {
  const [productList, setProductList] = useState(null)

  useEffect(()=> {
    getProducts()
      .then(products => setProductList(products))
    
  }, [])

  return (    
    <main className={ classes.App }>
        {productList?
          (productList.map((item, index)=> (
            <Item props={item} key={index+item.productId}/>
          )))
          :(<div>грузится</div>)}
    </main>
  );
}