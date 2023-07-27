import React, { useEffect, useState } from 'react'

const EditProduct = (props) => {

    // modal state for edit product option
    const [modal, setModal] = useState("hidden")

    // toggle Product edit modal
    const toggleModal = () => {
        (modal === "hidden") ? setModal("") : setModal("hidden")
    }

    // useEffect(() => {
    //     const editModal = document.getElementById(`${props.id}Md`)
    //     const editModalForm = document.getElementById(`${props.id}Form`)

    //     window.addEventListener("click", (event) => {
    //         console.log(editModal.contains(event.target),"-",editModalForm.contains(event.target))
    //         console.log(event.target)
    //         console.log(editModal.firstElementChild)
    //         if (!editModal.contains(event.target)&&!editModalForm.contains(event.target)) {

    //             console.log("---------- toggle ")
    //         }
    //     })


    // }, [modal])

    return (
        <>
            <button onClick={toggleModal}
                className="px-4 py-2 bg-purple-700 text-white   font-semibold rounded-md hover:bg-purple-600">
                Edit</button>

            {/* Edit Product Modal/Page  */}
            <div id={`${props.id}Md`}
                className={`fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 ${modal}`}>
                <div id={`${props.id}Form`} className="bg-white rounded shadow p-6 w-1/2 ">
                    {/* Modal content to edit product details 
                     Similar form fields as the "Add New Product Form" */}
                    <div className="flex justify-end mt-4">
                        <button id="updateProductBtn"
                            onClick={toggleModal}
                            className="bg-purple-700 text-white font-semibold px-4 py-2 rounded hover:bg-purple-600">Update
                            Product</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProduct
