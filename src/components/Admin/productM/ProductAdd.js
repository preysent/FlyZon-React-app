import React, { useState } from 'react'

const ProductAdd = () => {

      //initial state of form elemnt
  const [credentials, setCredentials] = useState({
    productTitle:"",
    description:[],
    price:"",
    brand:"",
    category:"",
    stock:"",
    images:[]

  })


  const { productTitle,  description,  price,  brand,  category,  stock,  images }=credentials
    return (
        <div>
            {/* Add New Product Form  */}
            <section>
                <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
                <form id="addProductForm" className="bg-white rounded shadow p-6">

                    {/* Form fields for adding a new product  */}
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full px-3">
                            <label htmlFor="name" className="block text-gray-700 font-semibold">Product Name</label>
                            <input type="text" id="name" name="productTitle" value={productTitle} required className="w-full p-2 border rounded" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full px-3">
                            <label htmlFor="description" className="block text-gray-700 font-semibold">Product Description</label>
                            <textarea id="description" name="description" required className="w-full p-2 border rounded"></textarea>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-1/2 px-3">
                            <label htmlFor="price" className="block text-gray-700 font-semibold">Price</label>
                            <input type="number" id="price" name="price" value={price} required className="w-full p-2 border rounded" />
                        </div>
                        <div className="w-1/2 px-3">
                            <label htmlFor="brand" className="block text-gray-700 font-semibold">Brand</label>
                            <input type="text" id="brand" name="brand" required className="w-full p-2 border rounded" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-1/2 px-3">
                            <label htmlFor="category" className="block text-gray-700 font-semibold">Category</label>
                            <input type="text" id="category" name="category" required className="w-full p-2 border rounded" />
                        </div>
                        <div className="w-1/2 px-3">
                            <label htmlFor="stock" className="block text-gray-700 font-semibold">Stock</label>
                            <input type="number" id="stock" name="stock" required className="w-full p-2 border rounded" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full px-3">
                            <label htmlFor="images" className="block text-gray-700 font-semibold">Images</label>
                            <input type="text" id="images" name="images" required className="w-full p-2 border rounded" />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button type="submit"
                            className="bg-purple-700 text-white font-semibold px-4 py-2 rounded hover:bg-purple-600">Add Product</button>
                    </div>
                </form>
            </section>

        </div>
    )
}

export default ProductAdd
