import avatar from '../assets/images/Avatar.png'

const Clients = () => {
  return (
    <div className='py-[50px] flex flex-col md:gap-10 justify-center items-center'>
        <div className='text-white w-[300px] md:w-[433px] flex flex-col items-center mb-10'>
            <div className='font-medium text-[26px] md:text-[56px] line-height-space-client'>Our Clients</div>
            <div className='text-lg md:text-xl line-height-space-bentoText text-center'>Hear firsthand how our solutions have boosted online success for users like you.</div>
        </div>
        <div className='tic-tac-toe lg:w-[990px] flex justify-center'>
            <div className='cell border-b border-r' />
            <div className='cell border-b border-r'/>
            <div className='cell border-b' />
            <div className='cell border-b border-r' />
            <div className='cell border-b border-r'>
                <img src={avatar} className='w-[172px] md:w-[177px] lg:w-[217px] grid-glow' alt='avatar' />
            </div>
            <div className='cell border-b'>
                <div className='md:block hidden'>
                    <div className='text-white w-[339px] lg:w-[420px] line-height-space gap-1 items-start lg:pl-10 pl-5 flex flex-col my-8'>
                        <div className='font-medium text-xl md:text-[23px] md:leading-[34px]'>”This product has completely transformed how I manage my projects and deadlines”</div>
                        <div className='text-md mt-2.5'>Talia Taylor</div>
                        <div className='text-sm text-white/70'>Digital Marketing Director @ Quantum</div>    
                    </div> 
                </div>
            </div>
            <div className='cell border-r' />
            <div className='cell border-r' />
            <div className='cell' />
        </div>
        <div className='text-white w-[339px] md:hidden line-height-space gap-2.5 items-center flex flex-col my-8'>
            <div className='font-medium text-xl md:text-[23px] md:leading-[34px] text-center'>”This product has completely transformed how I manage my projects and deadlines”</div>
            <div className='text-md'>Talia Taylor</div>
            <div className='text-sm text-white/70'>Digital Marketing Director @ Quantum</div>    
        </div>  
    </div>
  )
}

export default Clients