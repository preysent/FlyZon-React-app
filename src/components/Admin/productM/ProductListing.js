import React, { useEffect, useState } from 'react'
import { getProductList } from '../../../redux/slices/sellerSlice'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../body/Loading'
import ProductListFilds from './ProductListFilds'

const ProductListing = () => {

    const dispatch = useDispatch()
    const productList = useSelector(store => store.seller.productList)

    useEffect(() => {
        dispatch(getProductList())
    }, [dispatch])

    

    return (
        <div>
            {/* Product Listing Table  */}
            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Product Listing</h2>
                <div className="bg-white rounded shadow overflow-x-auto">
                    <table className="min-w-full table-auto">
                        <thead>
                            <tr className="bg-gray-100">
                                <th
                                    className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-700 uppercase tracking-wider">
                                    Product ID</th>
                                <th
                                    className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-700 uppercase tracking-wider">
                                    Product Name</th>
                                <th
                                    className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-700 uppercase tracking-wider">
                                    Category</th>
                                <th
                                    className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-700 uppercase tracking-wider">
                                    Price</th>
                                <th
                                    className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-700 uppercase tracking-wider">
                                    Stock</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300"></th>
                            </tr>
                        </thead>
                        <tbody id="productTableBody">

                            {(!productList.length)
                                ? <tr>
                                    <td colSpan="6"><Loading/></td>
                                </tr>
                                : productList.map(product => (
                                    <ProductListFilds key={product._id} product={product} />
                                ))

                            }

                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}

export default ProductListing
