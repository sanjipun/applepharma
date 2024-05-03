'use client';
import TeamCard from '@/components/TeamCard'
import { getTeamMembers } from '@/services/api/about-api';
import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react'

const TeamMemberDetails = () => {
    const searchParams = useSearchParams();
    const department = searchParams.get('department')
    const [teamMembers, setTeamMembers] = React.useState([])
    console.log(department);

    useEffect(() => {
        getTeamMembers(department).then((data) => {
            console.log(data); // Add this line to inspect the response
            setTeamMembers(data?.results);
        })
    }, [department])

    console.log(teamMembers);

    const teamsName = [
        "John",
        "Doe",
        "Jane",
        "Doe",
        "John",
        "Doe",
        "Jane",
        "Doe",
        "John",
        "Doe",
        "Jane",
        "Doe",

    ]
    return (
        <section id="team" className="team section single-page">
            <div className="container">
                <div className="row gap-5 ">
                    <div className='col-12 align-content-center '>
                        <div className='row justify-content-center '>
                            {teamMembers?.filter(team => team?.is_team_leader).map((team, index) => (
                                <div className='col-lg-3 col-sm-6 col-12 ' key={index}>
                                    <TeamCard
                                        name={team?.name}
                                        designation={team?.designation}
                                        tilt={"tilt-disable"}
                                        image={team?.image}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='row gap-3 justify-content-center '>
                            {teamMembers?.filter(team => !team?.is_team_leader).map((teamName, index) => (
                                <div className='col-lg-2 col-md-4 col-sm-6 teams-name-container' key={index}>
                                    <p>{teamName?.name}</p>
                                </div>
                            ))}

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamMemberDetails