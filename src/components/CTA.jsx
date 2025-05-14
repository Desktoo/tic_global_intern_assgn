
const CTA = () => {
  return (
    <div className='flex justify-center items-center'>
    <div className='h-[473px] lg:w-[1100px] my-5 border md:w-[720px] flex justify-center CTA-gradient custom-border rounded-xl'>
        <div className='text-white flex flex-col justify-center gap-2 items-center'>
            <div className='font-medium text-4xl text-center md:text-[56px] md:w-[422px] md:leading-[65px] leading-[43px] tracking-[-1.5%] mb-15'>AI-driven SEO for everyone.</div>
            <div className='border custom-border justify-center md:justify-between flex-col md:flex-row text-md rounded-lg h-[49px] w-[272px] md:w-[403px] items-start md:items-center flex px-4 md:pr-1 py-[19px]'>
                <input placeholder='Your Email' />
                <div className='w-[272px] md:w-[114px] md:block hidden items-center py-[5px] px-[15px] h-[41px] bg-white rounded-lg justify-center'>
                    <button className='font-medium text-black text-[15px] leading-[31px] tracking-[-1.01%]'>Join waitlist</button>
                </div>
            </div>
            <div className='w-[272px] md:w-[114px] md:hidden block h-[41px] bg-white rounded-lg flex justify-center'>
                    <button className='font-medium text-black text-[15px] leading-[31px] tracking-[-1.01%]'>Join waitlist</button>
                </div>
            
            <div className='mt-10'>
                <span className='text-md line-height-space text-white/50'>No credit card required · 7-days free trial</span>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CTA