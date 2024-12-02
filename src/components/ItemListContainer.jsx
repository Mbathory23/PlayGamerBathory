import {useEffect, useState} from 'react'


import { getProducts } from './mock/api'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([])
    const {categoryId}= useParams()
    console.log(categoryId)

    useEffect(()=>{
        getProducts()
        .then((res)=>{
            if(categoryId){
                setItems(res.filter((producto)=>producto.category === categoryId)

                )
            }else{
                setItems(res)
            }
        })
        .catch((error)=> console.log(error))
    },[categoryId])

console.log(items)
    
    return(
        <div>
            <h1 className="text-center">{greeting}</h1>
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer