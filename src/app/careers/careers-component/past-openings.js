import React from 'react'
import Table from 'react-bootstrap/Table'

const PastOpenings = (props) => {
    const { pastOpenings } = props
    return (
        <div className='container'>
            <h2 className='past-opening'>Past Openings</h2>
            <div className='rows py-3 '>
                <div className='col-12 '>
                    <Table hover responsive bordered >
                        <thead className='table-primary'>
                            <tr >
                                <th>id</th>
                                <th>Posted Date</th>
                                <th>Due Date</th>
                                <th>Job Title</th>
                                <th>No. of Vanancies</th>

                            </tr>
                        </thead>
                        <tbody>
                            {pastOpenings?.results && pastOpenings?.results?.filter(job => job.is_expired).map((job, index) => (
                                <tr key={job.id}>
                                    <td>{index+1}</td>
                                    <td>{new Date(job?.posted_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</td>
                                    <td>{new Date(job?.due_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</td>
                                    <td>{job.title}</td>
                                    <td>{job.number_of_vacancies}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>

        </div>

    );
}

export default PastOpenings