import acme from '../assets/images/acmeCorp.png'
import echoValley from '../assets/images/echoValley.png'
import quantum from '../assets/images/quantum.png'
import pulse from '../assets/images/pulse.png'
import outside from '../assets/images/outside.png'
import apex from '../assets/images/apex.png'
import celestial from '../assets/images/celestial.png'
import twice from '../assets/images/twice.png'

const companies = [acme, outside, echoValley, apex, quantum, celestial, pulse, twice]

const Companies = () => {
  return (
    <div className='flex justify-center lg:mt-20 md:mt-14 my-8 items-center gap-10 flex-col'>
        <div>
            <span className='text-md line-height-space text-white/70'>Trusted by the world’s most innovative teams</span>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-2.5'>
            {companies.map((item) => (
                <div className='border h-[98px] lg:w-[235px] w-[175px] custom-border rounded-[10px] lg:px-10 px-2.5 py-8' >
                    <img className='h-[34px] w-[155px]' src={item} />
                </div>
            ))}   
        </div>
    </div>
  )
}

export default Companies