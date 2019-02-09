import React from 'react'

const noItemsFound = (items) => {
  return items.length === 0;
};
const DeleteLastItem = (props) => {
  
  return(
        <button onClick={props.deleteLastItem} disabled={noItemsFound(props.items)}>
          Delete Last Item
        </button>
  )
  
}

export default DeleteLastItem