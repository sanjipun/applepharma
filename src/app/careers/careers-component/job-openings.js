import Link from 'next/link'
import React from 'react'

const JobOpenings = (props) => {
  const { currentOpenings } = props
  return (
    <div className='container-fluid'>

      <div className='row gap-3'>
        <h2 className='current-opening-h2'>Current Openings</h2>
        <div className='col-12 '>
          {currentOpenings?.results && currentOpenings?.results?.filter(job => !job.is_expired).map((job) => (
            <div key={job.id} className='row border-bottom py-3 '>
              <div className='col-md-8 col-12  '>
                <div className='job-openings'>
                  <div className='job-opening-desc'>
                    <p>{job.title}</p>
                    <span>Due Date: {new Date(job?.due_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-12  '>
                <Link className='apply-now-btn float-md-end float-start mt-md-0 mt-3  ' href={`/job-detail/?id=${job.id}`}>View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default JobOpenings