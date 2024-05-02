import Breadcrumbs from '@/components/Breadcrumbs'
import HeaderTwo from '@/components/Header/HeaderTwo'
import React, { Suspense } from 'react'
import TeamMemberDetails from './department-component/team-members-details'
import Preloader from '@/components/Preloader'


const Page = () => {

    return (
        <div>
            <HeaderTwo />
            <Breadcrumbs title="Board Of Directors" menuText="Teams" />
            <Suspense fallback={<Preloader />}>
                <TeamMemberDetails />
            </Suspense>

        </div>
    )
}

export default Page