import React from 'react'
import SidebarLinks from '../SidebarLinks'


const Sidebar = () => {
    return (
        <section className='fixed flex flex-col md:w-[31.5%] lg:w-[25%] xl:w-[20%] py-1 px-4 lg:px-8 bg-white transition-all duration-300 overflow-hidden h-full z-40 border-r border-[#0xE2E4E9]'>
            {/* SIDEBAR LOGO */}
            <div className="relative h-[10%] lg:h-[120px] w-full flex flex-row items-center justify-start">
                <div className="pl-3">
                    <img className='relative w-[65px] h-auto' src="/logo.svg" alt="Mira" />
                </div>

                {/* <button type="button" className="block lg:hidden absolute top-1/2 right-1 -translate-y-1/2 border-2 border-[#313030] py-1.5 px-1.5 rounded-md focus:bg-[#cccccc2c] opacity-70 focus:opacity-100 duration-100"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path></svg>
                </button> */}
            </div>

            {/* LINKS & NAVIGATIONS */}
            <div className="h-full w-full flex flex-col items-start justify-start">
                <SidebarLinks href='/home' label='Home' icon='/icons/menu-home_icon.svg' />

                <div className="h-full w-full my-1.5 flex flex-col items-start justify-between">
                    {/* UPPER LINKS */}
                    <div className="flex flex-col items-start justify-start py-2 w-full h-fit">
                        <p className="text-[#9B9B9B] font-thin text-xs uppercase w-full">
                            Business information
                        </p>

                        <div className="flex flex-col items-start justify-start gap-y-2.5 pt-2 w-full">
                            <SidebarLinks href='/bmc' label='Business Model Canvas' icon='/icons/menu-bmc_icon.svg' />
                            <SidebarLinks href='/action-plans' label='Actionable Plans' icon='/icons/menu-content_generation_icon.svg' />
                            <SidebarLinks href='/fin-ana' label='Financial Analysis' icon='/icons/menu-financial_projection_icon.svg' />
                            <SidebarLinks href='/market' label='Marketing Strategy' icon='/icons/menu-marketing_strategy_icon.svg' />
                            <SidebarLinks href='/content' label='Content Generation' icon='/icons/menu-content_generation_icon.svg' />
                        </div>

                    </div>

                    {/* LOWER LINKS */}
                    <div className="flex flex-col items-start justify-start pb-2.5 w-full">
                        <p className="text-[#9B9B9B] font-thin text-xs uppercase w-full">
                            others
                        </p>

                        <div className="flex flex-col items-start justify-start gap-y-2.5 pt-2 w-full">
                            <SidebarLinks href='/settings' label='Settings' icon='/icons/menu-settings_icon.svg' />
                            <SidebarLinks href='/support' label='Help and Support' icon='/icons/menu-help_support_icon.svg' />
                            <SidebarLinks href='/updates' label='Updates' icon='/icons/menu-updates_faq_icon.svg' />
                            <SidebarLinks href='/feedback' label='Submit Feedback' icon='/submit-feedback.svg' />
                        </div>

                    </div>


                    {/* FOOTER */}
                </div>

            </div>

            {/* FOOTER */}
            <div className="w-full flex flex-col items-start justify-start gap-y-5 pb-3.5">
                <div className="w-full h-fit">
                    <button type="button" className="w-full py-5 px-4 bg-[#F6F8FA] flex flex-col items-start justify-start gap-5 rounded-xl">
                        <div className="flex flex-row items-center justify-start gap-1.5">
                            <img className='w-[30px] h-auto' src="/upgrade-plan-icon.svg" alt="upgrade plan" />
                            <p className='font-normal text-base text-[#333333]'>Upgrade Plan</p>
                        </div>

                        <p className='text-sm font-normal text-[#6F6F6F] text-left'>
                            Upgrade plan to uncover more insights to grow your business
                        </p>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Sidebar