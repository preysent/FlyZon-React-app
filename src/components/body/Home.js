import React,{useEffect} from 'react'
import Items from './Items'
import Loading from './Loading'
import ImageSlider from './ImageSlider'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/slices/productSlice'


const Home = () => {

  let mode = useSelector(store => store.mode)
  const productState = useSelector(store => store.products)
  const items = productState.items


  // loading the products after cpmponent render
  const dispatch = useDispatch();
  useEffect(()=>{
    const ctgry = 'Electronics'
    dispatch(fetchProducts({ctgry}))
  },[dispatch])

  return (
    <>
      <ImageSlider />
      <section className={` w-full flex-grow ${(mode === 'dark') ? 'bg-purple-900' : 'bg-fuchsia-200'}`} id="body">

        {(productState.isLoading)
          ? <Loading />
          : (!items.length)

            //   if product not found
            ? <div className='flex justify-center items-center min-h-[20rem]'>
              <h3 className='text-purple-700 font-bold text-2xl'>Product Not Found</h3>
            </div>

            : <div className="container grid sm:grid-cols-3 lg:grid-cols-4 m-auto gap-4 p-4 justify-center">
              {
                items.map((item) => (
                  <Items key={item._id} item={item} />
                ))
              }
            </div>
          }
      </section>
    </>
  )
}

export default Home
