const InitialState = {
  shiftsList: [],
  shiftsJobTypesList: [],
  fetchingShifts: false,
}

const shiftsReducer = (state = InitialState, action) => {
  switch (action.type) {
    case 'FETCH_SHIFTS_LIST_FULFILLED': {
      const {payload: {data}} = action
      const jobsType = data.reduce((acc, {jobType}) =>
        (acc.includes(jobType) ? acc : [...acc, jobType]), [])

      return Object.assign({}, state, {
        fetchingShifts: false,
        shiftsList: data,
        shiftsJobTypesList: jobsType,
      })
    }

    case 'FETCH_SHIFTS_LIST_PENDING': {
      return Object.assign({}, state, {fetchingShifts: true})
    }

    default:
      return state
  }
}

export default shiftsReducer
