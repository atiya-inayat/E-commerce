import React from 'react'
import './NewCollections.css'
import Items from '../Items/Items'
import new_collection from '../Assets/new_collections'

const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h1>New Collections</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, i)=>{
            return <Items key={i} id={Items.id} name={Items.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default NewCollections
