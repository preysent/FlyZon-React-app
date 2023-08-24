import React, { useState } from 'react'
import { updateProduct } from '../../../redux/slices/sellerSlice'
import { useDispatch } from 'react-redux'

const EditProduct = (props) => {

    const { product } = props
    const dispatch = useDispatch()


    // modal state for edit product option
    const [modal, setModal] = useState("hidden")
    // toggle Product edit modal
    const toggleModal = () => {
        (modal === "hidden") ? setModal("") : setModal("hidden")
    }



    const [credentials, setCredentials] = useState({
        productTitle: product.productTitle,
        des: product.description.join('\n'),
        price: product.price,
        brand: product.brand,
        category: product.category,
        stock: product.stock,
        img: product.images.join('\n')
    })



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

    // handle form submition
    const handleSubmit = async (e) => {
        e.preventDefault()

        // converting string to array of values 
        let description = des.split("\n")
        description = description.filter((vl) => { return vl.length > 0 })

        // Regular expression to match links
        const linkPattern = /https:\/\/\S+/i;
        let Images = img.split("\n")
        let images = Images.filter((link) => { // Only return Link
            return linkPattern.test(link)
        })

        console.log("images are :",images)

        // creating action for adding product 
        const res = await dispatch(updateProduct({details:{ productTitle, price, brand, category, stock, description, images },id:product._id}))

        if (res.payload.status) {            
            alert("product created sussefully")
        } else {
            alert("!..Failed to create product")
        }

    }

    return (
        <>
            <button onClick={toggleModal}
                className="px-4 py-2 bg-purple-700 text-white   font-semibold rounded-md hover:bg-purple-600">
                Edit</button>

            {/* Edit Product Modal/Page  */}
            <div id={`${product._id}Md`}
                className={`fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 ${modal}`}>
                <div id={`${product._id}Form`} className="bg-white rounded shadow p-6 w-1/2 ">
                    {/* Modal content to edit product details 
                     Similar form fields as the "Add New Product Form" */}
                    <div className="flex justify-end mt-4">

                        {/* form for edit product  */}
                        <form onSubmit={handleSubmit} className='w-full'>

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


                            <button id="updateProductBtn"
                                onClick={toggleModal}
                                type='submit'
                                className="bg-purple-700 text-white font-semibold px-4 py-2 rounded hover:bg-purple-600">Update
                                Product</button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProduct
