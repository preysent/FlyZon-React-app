import React, {  useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewProduct } from '../../../redux/slices/sellerSlice'

const ProductAdd = () => {

    const dispatch = useDispatch()
    //initial state of form elemnt
    const [credentials, setCredentials] = useState({ productTitle: "", des: "", price: "", brand: "", category: "", stock: "", img: "" })

    const { productTitle, des, price, brand, category, stock, img } = credentials


    // onchange handle input 
    const onchange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
    }
    // Event handler for the select element
    const handleSelectChange = (event) => {
        const cat = event.target.value
        setCredentials({ ...credentials, category: cat })
    };


    const handleSubmit = async (e) => {
        e.preventDefault()

        // converting string to array of values 
        let description = des.split("\n")
        description = description.filter((vl) => { return vl.length > 0 })

        // Regular expression to match links
        const linkPattern = /https?:\/\/\S+/gi;
        let images = img.split("\n")
        images = images.filter((link) => { // Only return Link
            return linkPattern.test(link)
        })


        // creating action for adding product 
        const res = await dispatch(addNewProduct({ productTitle, price, brand, category, stock, description, images }))

        if (res.payload.status) {
            alert("product created sussefully")
            setCredentials({ productTitle: "", des: "", price: "", brand: "", category: "", stock: "", img: "" })

        } else {
            alert("!..Failed to create product")
        }

    }
    return (
        <div>
            {/* Add New Product Form  */}
            <section>

                <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
                <form onSubmit={handleSubmit} id="addProductForm" className="bg-white rounded shadow p-6">

                    {/* Form fields for adding a new product  */}
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full px-3">
                            <label htmlFor="name" className="block text-gray-700 font-semibold">Product Name</label>
                            <input onChange={onchange} type="text" id="name" name="productTitle" value={productTitle} required className="w-full p-2 border rounded" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full px-3">
                            <label htmlFor="des" className="block text-gray-700 font-semibold">Product Description</label>
                            <textarea onChange={onchange} id="des" name="des" value={des} required className="w-full p-2 border rounded" placeholder='New point in new line'></textarea>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-1/2 px-3">
                            <label htmlFor="price" className="block text-gray-700 font-semibold">Price</label>
                            <input onChange={onchange} type="number" id="price" name="price" value={price} required className="w-full p-2 border rounded" min="0" />
                        </div>
                        <div className="w-1/2 px-3">
                            <label htmlFor="brand" className="block text-gray-700 font-semibold">Brand</label>
                            <input onChange={onchange} type="text" id="brand" name="brand" value={brand} required className="w-full p-2 border rounded" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-1/2 px-3">
                            <label htmlFor="category" className="block text-gray-700 font-semibold">Category</label>
                            <select id="category" name="category" className="w-full p-2 border rounded" onChange={handleSelectChange} value={category} required>
                                <option value="">Select a category</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Fashion">Fashion</option>
                                <option value="Mobile">Mobile</option>
                                <option value="Grocery">Grocery</option>
                                <option value="Appliances">Appliances</option>
                            </select>
                        </div>
                        <div className="w-1/2 px-3">
                            <label htmlFor="stock" className="block text-gray-700 font-semibold">Stock</label>
                            <input onChange={onchange} type="number" id="stock" value={stock} name="stock" required className="w-full p-2 border rounded" min="0" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full px-3">
                            <label htmlFor="img1" className="block text-gray-700 font-semibold">Images</label>
                            <textarea onChange={onchange} type="text" id="img" name="img" value={img} required className="w-full p-2 border rounded" placeholder='Only for image links | New link in new line' ></textarea>
                        </div>

                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="bg-purple-700 text-white font-semibold px-4 py-2 rounded hover:bg-purple-600">
                            Add Product
                        </button>
                    </div>
                </form>
            </section>

        </div>
    )
}

export default ProductAdd
