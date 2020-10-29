import React, {useState} from 'react'
import classes from './Description.module.css'

export const Description = ({code, title, assocProducts, description}) => {
  const [click, setClick] = useState(true)
  function clickHandler() {
    setClick(!click)
  }
 
  return (
    <div className={ classes.Description } >
      <div className={ classes.Code } >
        Код:&nbsp;
        <span>{code}</span>
      </div>
      {click?
        (<div onClick={ clickHandler }>
          <div className={ classes.Title } >
            {title}
          </div>
          <div className={ classes.Assoc } >
            <b>Могут понадобиться:&nbsp;</b>
            {assocProducts}
          </div>
        </div>)
        :(
        <div
          onClick={ clickHandler }
          className={ classes.Assoc }
          >{description}
        </div>
      )
      }
    </div>
  )
}