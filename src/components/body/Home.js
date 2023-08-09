import React from 'react'
import Items from './Items'
import Loading from './Loading'
import ImageSlider from './ImageSlider'
import { useSelector } from 'react-redux'


const Home = () => {

  let  mode = useSelector(store => store.mode)
  const items = useSelector(store => store.products.items)

  return (
    <>
      <ImageSlider />
      <section className={`${(mode === 'dark') ? 'bg-purple-900' : 'bg-fuchsia-200'}`} id="body">

        {(!items.length > 0)
          ? <Loading />
          : <div className="container grid sm:grid-cols-3 lg:grid-cols-4 m-auto gap-4 p-4 justify-center">
            {
              items.map((item) => (
                <Items key={item._id} item={item} />
              ))
            }
          </div>}
      </section>
    </>
  )
}

export default Home
