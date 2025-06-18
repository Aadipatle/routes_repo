import React, { useEffect, useState } from 'react'

function ApiCalling() {
    const [products ,setProducts] = useState([])

    useEffect(()=>{
        function getData(){
            let products = fetch('https://fakestoreapi.com/products')
            products.then((e)=>{
                return e.json()
            }).then((n)=>{
                setProducts(n)
            }).catch((err)=>{
                console.log(err)
            })

        }
        getData()

    },[])
    console.log(products)

  return (
    <>
    
    <h1>Api Data</h1>
    
    
    </>
  )
}

export default ApiCalling