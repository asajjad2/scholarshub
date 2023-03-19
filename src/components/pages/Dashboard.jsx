import React from 'react'
import Navbar from '../elements/Navbar'
import Search from '../elements/Search'
import JobCard from '../elements/JobCard'
import Filters from '../elements/Filters'
import JobPostings from './JobPostData'


// 0lVqUAT6jgRs5lXV

export default function Dashboard() {


    const [search, setSearch] = React.useState('');
    const [filteredJobPostings, setFilteredJobPostings] = React.useState(JobPostings);
    const [favourites, setFavourites] = React.useState([])

    
    const searchValueChanged = (e) => {
        setSearch(e.target.value)
        const filteredJobPostings = JobPostings.filter((job) => {
            return job.title.toLowerCase().includes(e.target.value.toLowerCase()) || job.description.toLowerCase().includes(e.target.value.toLowerCase()) || job.location.toLowerCase().includes(e.target.value.toLowerCase())
        })

        setFilteredJobPostings(filteredJobPostings)
    }



    

    //sort job postings by last created time
    JobPostings.sort((a, b) => {
        return a.lastCreatedTime - b.lastCreatedTime
    })

    const addToFavourites = (id) => {
        const job = JobPostings.find((job) => {
            return job.id === id
        })
        setFavourites([...favourites, job])

    }
        

  return (

    <div className='flex flex-col'>
        <Navbar/>

        <div className='flex justify-between bg-gray-100 py-6 px-6'>

            <div className='w-[25%]'>
                <Filters jobPostings = {
                    filteredJobPostings
                }/>
            </div>

            <div className='flex flex-col gap-5 w-[70%]'>
                <Search value={search} onChange={
                    searchValueChanged
                }/>

                <div className='px-5 py-5 bg-white rounded-md flex flex-col gap-5'>
                {
                    filteredJobPostings.map((job) => {
                        return <JobCard 
                            key={job.id}
                            title={job.title}
                            img={job.img}
                            lastCreatedTime={job.lastCreatedTime}
                            amount={job.amount}
                            remote={job.remote}
                            estimatedTime={job.estimatedTime}
                            description={job.description}
                            domain={job.domain}
                            location={job.location}
                            onPocketClick = {() => addToFavourites(job.id)}
                        />
                    })
                }
                </div>
                
            </div>
        </div>
       
    </div>
    
  )
}
