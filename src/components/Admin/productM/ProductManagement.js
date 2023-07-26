import React from 'react'

const ProductManagement = () => {
    return (
        <>
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
                            {/* Product rows will be dynamically populated here */}
                            <tr>
                                <td
                                    className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-700 uppercase tracking-wider">
                                    1242335</td>
                                <td
                                    className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-700 capitalize tracking-wider">
                                    apple Ipnone</td>
                                <td
                                    className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-700 capitalize tracking-wider">
                                    Electronics</td>
                                <td
                                    className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-700 uppercase tracking-wider">
                                    150000</td>
                                <td
                                    className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-700 uppercase tracking-wider">
                                    20</td>
                                <td
                                    className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-700 uppercase tracking-wider">
                                    <button
                                        className="px-4 py-2 bg-purple-700 text-white   font-semibold rounded-md hover:bg-purple-600">Edit</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Edit Product Modal/Page  */}
                    <div id="editProductModal"
                        className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 hidden">
                        <div className="bg-white rounded shadow p-6 w-1/2">
                            {/* Modal content to edit product details 
                     Similar form fields as the "Add New Product Form" */}
                            <div className="flex justify-end mt-4">
                                <button id="updateProductBtn"
                                    className="bg-purple-700 text-white font-semibold px-4 py-2 rounded hover:bg-purple-600">Update
                                    Product</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Add New Product Form  */}
            <section>
                <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
                <form id="addProductForm" className="bg-white rounded shadow p-6">

                    {/* Form fields for adding a new product  */}
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full px-3">
                            <label htmlFor="name" className="block text-gray-700 font-semibold">Product Name</label>
                            <input type="text" id="name" name="name" required className="w-full p-2 border rounded" />
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
                            <input type="number" id="price" name="price" required className="w-full p-2 border rounded" />
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

        </>
    )
}

export default ProductManagement
