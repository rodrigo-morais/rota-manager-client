import {connect} from 'react-redux'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {fetchShifts} from '../../actions/shiftsActions'
import ShiftsList from './ShiftsList'
import ShiftsFilter from './ShiftsFilter'

class ShiftsContainer extends Component {
  constructor(props) {
    super(props)

    this.onFilterJobTypes = this.onFilterJobTypes.bind(this)
    this.onFilterTimePeriod = this.onFilterTimePeriod.bind(this)

    this.state = { jobType: 'All', startTime: 'All' }
  }

  componentDidMount() {
    const {fetchShiftsList} = this.props
    fetchShiftsList()
  }

  onFilterJobTypes(event) {
    this.setState({
      jobType: event.target.value,
    })
  }

  onFilterTimePeriod(event) {
    this.setState({
      startTime: event.target.value,
    })
  }

  render() {
    const {shiftsList, fetchingShifts, shiftsJobTypes} = this.props
    const filteredShiftsList = shiftsList.filter(({jobType, startTime}) =>
      (this.state.jobType === 'All' || jobType === this.state.jobType) &&
      (this.state.startTime === 'All' ||
        (this.state.startTime === 'AM' && Number(startTime.split(':')[0]) && Number(startTime.split(':')[0]) < 12) ||
        (this.state.startTime === 'PM' && Number(startTime.split(':')[0]) && Number(startTime.split(':')[0]) >= 12)))

    if (fetchingShifts) { return <h2>Loading</h2> }

    return (
      <div>
        <ShiftsFilter
          jobTypes={['All', ...shiftsJobTypes]}
          selectedJobType={this.state.jobType}
          onChangeJobTypes={this.onFilterJobTypes}
          startTime={this.state.startTime}
          onChangeTimePeriod={this.onFilterTimePeriod}
        />
        <ShiftsList list={filteredShiftsList} />
      </div>
    )
  }
}

ShiftsContainer.propTypes = {
  shiftsList: PropTypes.arrayOf(PropTypes.shape({
    roleId: PropTypes.number.isRequired,
    shiftDate: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
    staff_required: PropTypes.number.isRequired,
    number_of_invited_staff: PropTypes.number.isRequired,
    jobType: PropTypes.string.isRequired,
  })).isRequired,
  shiftsJobTypes: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  fetchingShifts: PropTypes.bool.isRequired,
  fetchShiftsList: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  shiftsList: state.shifts.shiftsList,
  shiftsJobTypes: state.shifts.shiftsJobTypesList,
  fetchingShifts: state.shifts.fetchingShifts,
})

const mapDispatchToProps = (dispatch) => ({
  fetchShiftsList: () => dispatch(fetchShifts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShiftsContainer)
