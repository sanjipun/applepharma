"use client"
import { getJobDetailsData } from '@/services/api/general-api'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const JobDescription = () => {

    const [jobDetail, setJobDetail] = useState(null);
    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    useEffect(() => {
        if (id) {
            getJobDetailsData(id).then((data) => {
                setJobDetail(data);
            });
        }
    }, [id]);
    // console.log(jobDetail)
    return (
        <div className='container'>
            <div className='job-details'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='row'>
                            <div className='col-8'>
                                <h2 className='job-desc-h2'>{jobDetail?.title}</h2>
                            </div>
                            <div className='col-4'>
                                <Link className='apply-now-btn' href={jobDetail?.form_link || "#"}>Apply Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='row job-dates'>
                            <div className='col-4 ps-0 '>
                                <p><i className="icofont-calendar"></i>Post Date:<span>{new Date(jobDetail?.posted_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span></p>
                            </div>
                            <div className='col-4'>
                                <p><i className="icofont-ui-calendar"></i>Due Date:<span>{new Date(jobDetail?.due_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span></p>
                            </div>
                            <div className='col-4'>
                                <p><i className="icofont-people"></i>Vacancy:<span>{jobDetail?.number_of_vacancies} </span></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 job-descriptions-details'>
                        {jobDetail?.description && <div dangerouslySetInnerHTML={{ __html: jobDetail?.description }}></div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDescription