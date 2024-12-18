'use client'

import Sidebar from './dashboard/components/Sidebar'
import Navbar from './(components)/Navbar'


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <main className='rethink_sans'>
            <div className='relative w-full h-screen flex flex-row z-10'>
                <Sidebar />

                <section className='relative z-10 w-full overflow-y-scroll overflow-x-hidden duration-200 lg:w-[75%] xl:w-[80%] pb-20 px-7 sm:px-16'>
                    <div className=' '>
                        <Navbar />
                        {children}

                    </div>
                </section>
            </div>

        </main>
    )
}


const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <DashboardLayout>
            {children}
        </DashboardLayout>
    )
}

export default DashboardWrapper