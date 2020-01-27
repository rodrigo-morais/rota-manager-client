import PropTypes from 'prop-types'
import React from 'react'

const ShiftsFilter = (props) => {
  const {jobTypes, selectedJobType, onChangeJobTypes, startTime, onChangeTimePeriod} = props

  const jobTypesOpetions = (types) =>
    types.map(type => <option key={type}>{type}</option>)

  return (
    <div>
      <h1>Shifts Filter</h1>
      <form>
        <label htmlFor='jobTypes'>Job Type: </label>
        <select id='jobTypes' value={selectedJobType} onChange={onChangeJobTypes}>
          {jobTypesOpetions(jobTypes)}
        </select>
        <label htmlFor='startTimes'>    Start Time: </label>
        <select id='startTimes' value={startTime} onChange={onChangeTimePeriod}>
          <option key='All'>All</option>
          <option key='AM'>AM</option>
          <option key='PM'>PM</option>
        </select>
      </form>
    </div>
  )
}

ShiftsFilter.propTypes = {
  jobTypes: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  selectedJobType: PropTypes.string.isRequired,
  onChangeJobTypes: PropTypes.func.isRequired,
  startTime: PropTypes.string.isRequired,
  onChangeTimePeriod: PropTypes.func.isRequired,
}

export default ShiftsFilter
