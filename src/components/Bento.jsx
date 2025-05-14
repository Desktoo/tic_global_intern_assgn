import React from 'react'
import Bento1 from './bento-components/Bento1'
import Bento2 from './bento-components/Bento2'

const Bento = () => {
  return (
    <div className='my-10 items-center flex-col gap-[31px] md:gap-[50px] flex justify-center'>
        <div className=' w-[345px]  justify-center flex md:w-[553px]'>
            <div className=' text-white text-center text-[26px] font-medium line-height-space-bento md:text-[32px]'>Harness the power of AI, making search engine optimization intuitive and effective for all skill levels.</div>
        </div>
        <Bento1 />
        <Bento2 />
    </div>
  )
}

export default Bento