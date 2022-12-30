import '../styles/JobList.css'

const JobList = ({ job, filterChangeHandler }) => {
  const filter = (name) => {
    filterChangeHandler(name)
  }

  return (
    <div className={`job--container d-flex align-center`}>
      <div className='company--logo--container'>
        <img className='company--logo--img' src={`${job.logo}`} alt='' />
      </div>
      <div className='company--details d-flex flex-column'>
        <div className='company--name d-flex align-center'>
          <p className='pb-3'>{job.company}</p>
          {!!job.new && (
            <span className='icon icon-green mr-overlap-5'>New!</span>
          )}
          {!!job.featured && <span className='icon icon-black'>Featured</span>}
        </div>
        <h4>{job.position}</h4>
        <div className='location--container d-flex align-center'>
          <small>{job.postedAt}</small>
          <small>{job.contract}</small>
          <small>{job.location}</small>
        </div>
      </div>
      <div className='badge--container d-flex align-center'>
        <small onClick={() => filter(job.role)} className='badge'>
          {job.role}
        </small>
        <small onClick={() => filter(job.level)} className='badge'>
          {job.level}
        </small>
        {!!job.languages.length &&
          job.languages.map((lang) => (
            <small className='badge' key={lang} onClick={() => filter(lang)}>
              {lang}
            </small>
          ))}
      </div>
    </div>
  )
}

export default JobList
