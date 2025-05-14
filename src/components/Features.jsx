import bell from '../assets/icons/bell-icon.png'
import graph from '../assets/icons/graph-icon.png'
import list from '../assets/icons/list-icon.png'
import magic from '../assets/icons/magic-icon.png'
import click from '../assets/icons/one-click-icon.png'
import report from '../assets/icons/report-icon.png'
import speed from '../assets/icons/speed-icon.png'
import star from '../assets/icons/star-icon.png'
import target from '../assets/icons/target-icon.png'

const features = [
    {
        icon: speed,
        title: "User-friendly dashboard",
        description: "Perform complex SEO audits and optimizations with a single click."
    },
    {
        icon: list,
        title: "Content evaluation",
        description: "Simple corrections for immediate improvemens."
    },
    {
        icon: magic,
        title: "Link Optimization Wizard",
        description: "Guides you through the process of creating and managing links."
    },
    {
        icon: graph,
        title: "Visual reports",
        description: "Visual insights into your site’s performance."
    },
    {
        icon: target,
        title: "SEO goal setting",
        description: "Perform complex SEO audits and optimizations with a single click."
    },
    {
        icon: click,
        title: "One-click optimization",
        description: "Helps you set and achieve SEO goals with guided assistance."
    },
    {
        icon: star,
        title: "Smart Keyword Generator",
        description: "Automatic suggestions and the best keywords to target."
    },
    {
        icon: bell,
        title: "Automated alerts",
        description: "Automatic notifications about your SEO health, including quick fixes."
    },
    {
        icon: report,
        title: "Competitor reports",
        description: "Provides insights into competitors’ keyword strategies and ranking."
    },
]


const Features = () => {
  return (
    <div className='border-y flex lg:px-20 flex-col custom-border my-10 px-10 lg:glow-features-lg glow-features py-10'>
        <div className='lg:text-center lg:w-[320px]'>
            <div className='text-white md:leading-[65px] tracking-[-1.5%] my-10 text-[26px] lg:text-[56px] md:text font-medium'>Elevate your SEO efforts.</div>
        </div>
            
        <div className='grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-10 lg:gap-[50px]  lg:grid-cols-3' >
            {
                features.map((item) => (
                    <div>
                        <div className='flex gap-1 items-center  flex-row'>
                            <img src={item.icon} className='h-[12px] w-[15px]'/>
                            <span className='text-white font-medium text-md ' >{item.title}</span>
                        </div>
                        <div className='text-white/70 mb-10 text-md  line-height-space'>
                            {item.description}
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Features