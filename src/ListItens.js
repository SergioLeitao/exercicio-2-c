import React from 'react'
import DeleteLastItem from './DeleteLastItem'

const ListItens = (props)=> {
 
  return (
    <div>
		<DeleteLastItem items={props.items} deleteLastItem={props.deleteLastItem} />

        <p className="items">Items</p>
        <ol className="item-list">
          {props.items.map((item, index) => <li key={index}>{item}</li>)}
        </ol>
	</div>
  )
    
}

export default ListItens