import React from 'react'
import serachedItem from './searchItems'
import Link from 'next/link'

const SearchResults = (props) => {
    const {inputs, onItemClick, products} = props

    const filteredData =products?.filter((el) => {
        //if no input the return the original
        if (inputs === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.name.toLowerCase().includes(inputs)
        }
    })

    const handleItemClick = (item) => {
        // Send the clicked search item text to the parent component
        onItemClick({name:item.name, productId:item.id});
   
        // console.log(item.text)
      };
    //   console.log(products, "products")
  return (
    <div className='searchResults'>
        <ul>

            {filteredData && filteredData.map((item, index) => {
                return(
                    <Link key={item.id} href={`/product-details/?productId=${item.id}&name=${item.name}`}><li  id={item.id} onClick={()=>handleItemClick(item)}>{item.name}</li></Link>
                )
            })}
        </ul>
    </div>
  )
}

export default SearchResults