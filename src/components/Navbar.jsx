import React from 'react'
import logo from '../assets/images/Logo.png'
import { ChevronDown, Menu } from 'lucide-react'

const navItems = [
    { label: 'Features', dropdown: true },
    { label: 'Developers', dropdown: false },
    { label: 'Company', dropdown: true },
    { label: 'Blog', dropdown: false },
    { label: 'Changelog', dropdown: false },
  ]

const Navbar = () => {
  return (
    <div className=' text-white h-auto p-[13px] border-b lg:gap-[74px] md:gap-[34px] custom-border'>
        <div className='flex justify-between lg:justify-around flex-row'>
            <img src={logo} className='size-[38px]' />
            <div className='hidden md:flex border custom-border h-[42px] w-[512px] py-2 px-10 rounded-full flex-row justify-around'>
                 {navItems.map((item, index) => (
                    <button 
                    key={index} 
                    className='text-[13px] line-height-space text-white/60 flex flex-row items-center hover:text-white transition-colors'
                    >
                        {item.label}
                        {item.dropdown && <ChevronDown className="ml-0.5 mt-1" />}
                    </button>
                ))}
            </div>
            <div className='flex flex-row items-center gap-2.5'>
                <div className='border rounded-xl p-[6px] custom-border'>
                    <div className='text-sm text-white  btn-radial items-center line-height-space'>Join Waitlist</div>
                </div>
                <div className='md:hidden'>
                    <Menu className='size-8' />
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar