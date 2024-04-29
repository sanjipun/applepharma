
import Breadcrumbs from '@/components/Breadcrumbs'
import HeaderTwo from '@/components/Header/HeaderTwo'
import React, { Suspense } from 'react'
import JobDescription from '../../components/job-details-components/job-description'
import Preloader from '@/components/Preloader'


const Page = () => {

    return (

        <div>
            <HeaderTwo />
            <Breadcrumbs title="Job Details and Description" menuText="Job Details" />
            <Suspense fallback={<Preloader />}>
                <JobDescription />
            </Suspense>
        </div>

    )
}

export default Page