import React, { useEffect } from 'react'
import Items from './Items'
import Loading from './Loading'
import ImageSlider from './ImageSlider'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../../redux/slices/productSlice'
import { getUserDetails } from '../../redux/slices/userSlice'





const Home = () => {

  // function wich use to change the state
  const dispatch = useDispatch()

  let { mode, products } = useSelector(store => store)

  // loading the products after cpmponent render
  useEffect(() => {
    dispatch(fetchProducts()); // fetch the products
    dispatch(getUserDetails());

  }, [dispatch]);


  return (
    <>
      <ImageSlider />
    
      <section className={`${(mode === 'dark') ? 'bg-purple-900' : 'bg-fuchsia-200'}`} id="body">

        <div className="container flex flex-wrap m-auto gap-4 p-4 justify-center">

          {(!products.items)
            ?<Loading />
            :products.items.map((item) => (
               <Items key={item._id} item={item} />
            ))
          }

        </div>
      </section>
    </>
  )
}

export default Home
