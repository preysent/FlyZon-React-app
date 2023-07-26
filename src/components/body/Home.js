import React, { useEffect } from 'react'
import Items from './Items'
import Loading from './Loading'
import ImageSlider from './ImageSlider'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../../redux/slices/productSlice'





const Home = () => {

  // function wich use to change the state
  const dispatch = useDispatch()

  let  mode = useSelector(store => store.mode)
  const products = useSelector(store => store.products)

  // loading the products after cpmponent render
  useEffect(() => {
    dispatch(fetchProducts()); // fetch the products

  }, [dispatch]);


  return (
    <>
      <ImageSlider />
      <section className={`${(mode === 'dark') ? 'bg-purple-900' : 'bg-fuchsia-200'}`} id="body">

        {(!products.items.length > 0)
          ? <Loading />
          : <div className="container grid sm:grid-cols-3 lg:grid-cols-4 m-auto gap-4 p-4 justify-center">
            {
              products.items.map((item) => (
                <Items key={item._id} item={item} />
              ))
            }
          </div>}
      </section>
    </>
  )
}

export default Home
