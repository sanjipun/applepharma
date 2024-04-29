
import Breadcrumbs from '@/components/Breadcrumbs'
import HeaderTwo from '@/components/Header/HeaderTwo'
import Preloader from '@/components/Preloader'
import ImageGallary from '@/components/image-gallary/image-gallary-main'
import React, { Suspense,} from 'react'

const Page = () => {


  // console.log(gallery);

  return (

    <div>
      <HeaderTwo />
      <Breadcrumbs title="Image Gallery" menuText="Image Gallery" />
      <Suspense fallback={<Preloader />}>
        <div className='imageGallary'>
          <ImageGallary />
        </div>
      </Suspense>

    </div >

  )
}

export default Page