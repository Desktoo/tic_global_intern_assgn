import twitter from '../assets/icons/twitter.png'
import insta from '../assets/icons/instagram.png'
import youtube from '../assets/icons/youtube.png'
import logo from '../assets/images/logokit.png'

const Footer = () => {

    const footerDesc = { 
        product: ["Features", "Integration", "Updates", "FAQ", "Pricing"],
        company:["About", "Blog", "Careers", "Manifesto", "Press", "Contract"],
        resources: ["Examples", "Community", "Guides", "Docs", "Press"],
        legal: ["Privacy", "Terms", "Security"]
    }

  return (
    <div className='mt-10'>
        <div className="border-t flex flex-col md:flex-row w-full lg:justify-between custom-border px-[45px] py-[41px]">
            <div className='flex flex-row md:flex-col md:items-start  items-center mb-10 w-[300px] justify-between'>
                <div>
                    <img src={logo} className='w-[127px] h-[35px]' />
                </div>
                <div className='flex flex-row gap-[30px] opacity-40'>
                    <img src={twitter} className='size-5'/>
                    <img src={insta} className='size-6'/>
                    <img src={youtube} className='w-[26px] h-[22px]'/>
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 md:gap-x-15 gap-y-15 text-[13px] line-height-space text-white' >
                <div className='flex flex-col gap-5'>
                    <span className=' font-medium'>Product</span>
                    {footerDesc.product.map((item) => (
                        <span className='text-white/50'>{item}</span>
                    ))} 
                </div>
                <div className='flex flex-col gap-5'>
                    <span className=' font-medium'>Company</span>
                    {footerDesc.company.map((item) => (
                        <span className='text-white/50'>{item}</span>
                    ))} 
                </div>
                <div className='flex flex-col gap-5'>
                    <span className=' font-medium'>Resources</span>
                    {footerDesc.resources.map((item) => (
                        <span className='text-white/50'>{item}</span>
                    ))} 
                </div>
                <div className='flex flex-col gap-5'>
                    <span className=' font-medium'>Legal</span>
                    {footerDesc.legal.map((item) => (
                        <span className='text-white/50'>{item}</span>
                    ))} 
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Footer