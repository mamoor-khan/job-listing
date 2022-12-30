import '../styles/Filter.css'

const Filter = ({ filterList, removeFilterHandler }) => {
  return (
    <div className='filter--container d-flex align-center'>
      <div className='filters d-flex align-center'>
        {filterList.map((filter) => (
          <p key={filter}>
            <small
              className='badge filter--badge'
              onClick={() => removeFilterHandler(filter)}
            >
              {filter}
              <span className='badge--remove--icon'>
                <img src='images/icon-remove.svg' alt='' />
              </span>
            </small>
          </p>
        ))}
      </div>
      <div className='clear--button d-flex align-center'>
        <button onClick={() => removeFilterHandler('__ALL__')}>Clear</button>
      </div>
    </div>
  )
}

export default Filter
