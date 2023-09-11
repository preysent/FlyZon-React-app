import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addToCart } from '../../redux/slices/userSlice'
import { toggleAlert } from '../../redux/slices/alert'


const Items = (props) => {

    const history = useHistory()
    let { mode, user } = useSelector(store => store)
    const item = props.item
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        if (!user.login){
            dispatch(toggleAlert('login to continue'))
            setTimeout(()=>{ dispatch(toggleAlert())},1500)
        }
        else
            dispatch(addToCart({ productId: item._id }))
    }

    const { productTitle, price, images } = item

    const handleClick = ()=>{
        history.push(`/product/${item._id}`)
    }


    return (
        <>
           
            <div onClick={handleClick}   className={` h-[16rem] max-w-sm rounded-lg overflow-hidden shadow-lg  ${(mode === "dark") ? "bg-purple-950 text-white" : "bg-white"} relative flex `}>

                {/* redirect to the product page with item id */}
                {/* <Link to={`/product/${item._id}`}> */}
                <div className='w-full h-auto bg-white p-4 absolute'>
                    <img src={`${images[0]}`} alt="Product" className="hover:scale-110 h-70 w-full h-40 object-contain" />
                </div>


                <div className="px-6 py-4 z-10 self-end">
                    <div className="font-bold max-h-10 text-lg mb-2">{`${productTitle.slice(0, 25)}${(productTitle.length > 20) ? "..." : ""}`}</div>
                    {/* <p className="text-gray-700 text-base">Product description goes here. Lorem ipsum dolor sit amet,-
                            consectetur adipiscing elit.</p> */}
              
                    <span 
                        className=" cart-buttons inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 hidden">{`${price}`}</span>
                    <button onClick={handleAddToCart} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full hidden">Add to
                        Cart</button>
                </div>
            </div>

        </>
    )
}

export default Items
