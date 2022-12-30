import axios from 'axios'
import { useEffect, useState } from 'react'
import '../styles/ListContainer.css'
import Filter from './Filter'
import JobList from './JobList'

const ListContainer = () => {
  const [jobList, setJobList] = useState([])
  const [filterList, setFilterList] = useState([])

  useEffect(() => {
    fetchJobList()
  }, [])

  const fetchJobList = () => {
    axios
      .get(`/data/data.json`)
      .then((res) => {
        setJobList(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const filterChangeHandler = (name) => {
    if (filterList.includes(name)) return
    setFilterList([...filterList, name])
  }

  const removeFilterHandler = (name) => {
    if (name === '__ALL__') {
      setFilterList([])
      return
    }
    setFilterList(filterList.filter((ft) => ft !== name))
  }

  const filterJobList = () =>
    jobList.filter((job) => {
      for (let ft of filterList) {
        if (
          !job.languages.includes(ft) &&
          !(job.role === ft) &&
          !(job.level === ft)
        )
          return false
      }
      return true
    })

  const filteredList = filterList.length === 0 ? jobList : filterJobList()

  return (
    <div className='list--container d-flex flex-column pt-4'>
      {filterList.length > 0 && (
        <Filter
          filterList={filterList}
          removeFilterHandler={removeFilterHandler}
        />
      )}
      {filteredList.length > 0 &&
        filteredList.map((item) => (
          <JobList
            key={item.id}
            job={item}
            filterChangeHandler={filterChangeHandler}
          />
        ))}
    </div>
  )
}

export default ListContainer
