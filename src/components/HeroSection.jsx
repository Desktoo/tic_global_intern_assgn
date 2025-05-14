import dashboard from '../assets/images/dashboard.png'
import dashboardBig from '../assets/images/dashboard-big.png'

const HeroSection = () => {
  return (
    <div className='h-auto md:pt-[85px] lg:pt-[105px] justify-center px-5 items-center pt-20 bg-glow gap-4 w-auto text-white flex flex-col'>
        <div className="custom-border bg-black flex flex-row px-3.5 py-2 border gap-[7px] rounded-[50px]" >
            <span className="new-highlight font-black flex items-center justify-center text-black"> NEW </span>
            <span className="text-violet-500 text-md line-height-space">Latest integration just arrived</span>
        </div>
        <div className="flex justify-around gap-[16px] flex-col items-center ">
            <div className=" items-center md:gap-[1px] text-center flex-col  justify-around flex">
                <div className="font-medium line-height-space-hero leading-tight">Boost your</div> 
                <div className="text-gradient line-height-space-hero leading-relaxed font-medium" >rankings with AI.</div>
            </div>
            <div className="text-lg text-center md:px-20 line-height-space leading-[28px]">Elevate your site’s visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.</div>
            <div className="custom-border rounded-xl border p-2">
                <button className="start-free-btn">Start for free</button>
            </div>
        </div>
        <div className='mt-12'>
            <img className='lg:hidden sm:hidden rounded-2xl glow' src={dashboard} />
            <img className='lg:w-[1098px] hidden lg:block sm:block rounded-2xl glow' src={dashboardBig} />
        </div>
    </div>
  )
}

export default HeroSection