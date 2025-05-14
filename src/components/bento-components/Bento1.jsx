import ring from '../../assets/images/holoCylinder.png'
import dashboard from '../../assets/images/dashboard-big-top-left.png'

const Bento1 = () => {
  return (
    <div className='w-[390px] flex flex-col  md:flex-row md:w-[744px] lg:w-[1100px]  gap-2.5 items-center justify-center'>
        {/* Section 1 */}
        <div className='border custom-border rounded-xl lg:w-[326px] w-[360px] md:w-[254px] h-[400px] flex flex-col justify-center items-center'>
            <div>
                <img src={ring} className='w-[275.72px] h-[206px] md:w-[194px] lg:w-[265px] md:h-[206px]' alt='holoCylinder' />
            </div>
            <div className='flex flex-col gap-3 lg:w-[259px] md:gap-1.5 h-[83px] md:w-[208px] md:h-[109px] w-[294px] '>
                <span className='text-md font-medium text-white line-height-space-bentoText'>SEO goal setting</span>
                <span className='line-height-space text-md text-white/70'>Helps you set and achieve SEO goals with guided assistance.</span>
            </div>
        </div>
        {/* Section 2 */}
        <div className='relative rounded-xl w-[360px] lg:w-[624px] md:w-[480px] h-[400px] overflow-hidden'>
            <div className='glow-inset px-5 py-5 relative h-full'>
                <img src={dashboard}  className='w-full border-t border-l opacity-65 lg:opacity-35 custom-border rounded-tl-xl h-auto object-cover relative left-4' alt='dashboard' />
                <div className='absolute flex flex-col md:z-10 md:bottom-8.5 md:left-5   h-[116px] w-[245px] gap-1.5'>
                    <span className='text-white line-height-space-bentoText text-md font-medium'>User-friendly dashboard</span>
                    <span className='line-height-space text-md text-white/70'>Perform complex SEO audits and optimizations with a single click.</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bento1