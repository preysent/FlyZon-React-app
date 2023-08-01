import React from 'react'
import EditProduct from './EditProduct'

const ProductListFilds = (props) => {
    const { product } = props
    return (
        <>
            <tr id={product._id} >
                <td
                    className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-700 uppercase tracking-wider">
                    {`${product._id}`.slice(17)}</td>
                <td
                    className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-700 capitalize tracking-wider">
                    {product.productTitle.slice(0,40)}{product.productTitle.length>40?'...':''}</td>
                <td
                    className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-700 capitalize tracking-wider">
                    {product.category}</td>
                <td
                    className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-700 uppercase tracking-wider">
                    {product.price}</td>
                <td
                    className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-700 uppercase tracking-wider">
                    {product.stock}</td>
                <td 
                    className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-700 uppercase tracking-wider">

                    <EditProduct id={product._id}/>
                    
                </td>
            </tr>
        </>
    )
}

export default ProductListFilds
