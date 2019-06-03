import {connect} from 'react-redux'
import {fetchShifts} from '../../actions/shiftsActions'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ShiftsList from './ShiftsList'

class ShiftsContainer extends Component {
  componentDidMount() {
    const {fetchShiftsList} = this.props
    fetchShiftsList()
  }

  render() {
    const {shiftsList, fetchingShifts} = this.props

    if (fetchingShifts) {
      return <h2>Loading</h2>
    }

    return (
      <ShiftsList list={shiftsList} />
    )
  }
}

ShiftsContainer.propTypes = {
  shiftsList: PropTypes.arrayOf(
    PropTypes.shape({
      roleId:                 PropTypes.number.isRequired,
      shiftDate:               PropTypes.string.isRequired,
      startTime:               PropTypes.string.isRequired,
      endTime:                 PropTypes.string.isRequired,
      staff_required:          PropTypes.number.isRequired,
      number_of_invited_staff: PropTypes.number.isRequired,
      jobType:                 PropTypes.string.isRequired,
    })
  ),
  fetchingShifts:  PropTypes.bool
}

const mapStateToProps = (state) => {
  return {
    shiftsList:     state.shifts.shiftsList,
    fetchingShifts: state.shifts.fetchingShifts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchShiftsList: () =>
      dispatch(fetchShifts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShiftsContainer)
