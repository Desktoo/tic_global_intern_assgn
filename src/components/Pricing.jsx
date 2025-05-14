import { Switch } from "@headlessui/react"
import { Check } from 'lucide-react';

const ToggleBtn = () => {
    return(
        <Switch
            className="group inline-flex h-5 w-[33px] items-center rounded-full bg-gray-500 transition data-checked:bg-violet-600"
        >
            <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-3.5" />
        </Switch>
    )
}

const Pricing = () => {

    const priceTabs = [
        {
            id: 1,
            title: "Pricing",
            price: "$29/mo",
            description:[
                "Keyword optimization",
                "Automated meta tags",
                "SEO monitoring",
                "Monthly reports"
            ],
            joinWaitlist: false
        },
        {
            id: 2,
            title: "Pro",
            price: "$79/mo",
            description:[
                "Keyword optimization",
                "Automated meta tags",
                "SEO monitoring",
                "Monthly reports",
                "Content suggestions",
                "Link optimization"
            ],
            joinWaitlist: true
        },
        {
            id: 3,
            title: "Business",
            price: "$149/mo",
            description:[
                "Keyword optimization",
                "Automated meta tags",
                "SEO monitoring",
                "Monthly reports",
                "Content suggestions",
                "Link optimization",
                "Multi-user access",
                "API integration"
            ],
            joinWaitlist: false
        },
    ]

  return (
    <div className='my-5 flex flex-col justify-center items-center'>
        <div className='text-white flex flex-col items-center md:gap-2 justify-center w-[304px md:w-[433px]'>
            <div className="font-medium text-[26px] line-height-space-client md:text-[56px] md:mb-8">Pricing</div>
            <div className="text-center text-lg md:text-[20px] line-height-space-bentoText px-10">Choose the right plan to meet your SEO needs and start optimizing today.</div>
            <div className="gap-1 flex my-6 flex-row">
              <ToggleBtn />
              <span className="text-white/50">Billed Yearly</span>
            </div>
        </div>
        <div className="flex flex-col md:flex-row lg:gap-5.5 md:gap-1.5">
            {priceTabs.map((item) => (
                <div className={`w-[243px] h-[500px] lg:w-[307px]  my-2.5 pb-5 border
                                ${item.id == 1 && "glow-pricing-bottom md:glow-pricing-right"} 
                                ${item.id == 2 && "glow-pricing pricing-gradient "} 
                                ${item.id == 3 && "glow-pricing-top md:glow-pricing-left"} 
                                 custom-border rounded-xl px-3`}> 
                    <div className="text-white flex flex-col h-full justify-between">
                        <div>
                            <div className="py-5 border-b custom-border">
                                <div className="text-2xl font-medium leading-[31px] tracking-[-0.04%]">{item.title}</div>
                                <div className="text-md line-height-space text-white/70">{item.price}</div>
                            </div>
                            <div className="flex flex-col py-5">
                                {item.description.map((features) => (
                                    <div className="text-sm  line-height-space gap-[5px] items-center flex flex-row">
                                        <Check className="size-[15px]" />
                                        {features}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={`btn-glow lg:w-[280px] w-[220px] h-[38px] items-center flex justify-center ${item.joinWaitlist ? "bg-violet-600/40 " : "bg-neutral-700/40"} border-white/15 border rounded-[10px] px-[15px] py-[6px]`} >
                            <button className="text-sm line-height-space"> Join waitlist</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Pricing