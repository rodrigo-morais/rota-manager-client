import {
  FETCH_SHIFTS_LIST,
} from '../../src/actions/constants'
import shiftsReducer from '../../src/reducers/shiftsReducer'

const initialState = {
  shiftsList: [],
  fetchingShifts: false,
}

const data = [
  {
    roleId: 1,
    shiftDate: 'Tuesday 10 March 2020',
    startTime: '07:00',
    endTime: '14:00',
    staff_required: 5,
    number_of_invited_staff: 3,
    jobType: 'Waiting staff',
  },
  {
    roleId: 2,
    shiftDate: 'Thursday 12 March 2020',
    startTime: '09:00',
    endTime: '17:00',
    staff_required: 2,
    number_of_invited_staff: 2,
    jobType: 'Retail store shift',
  },
  {
    roleId: 3,
    shiftDate: 'Thursday 12 March 2020',
    startTime: '13:00',
    endTime: '19:00',
    staff_required: 1,
    number_of_invited_staff: 2,
    jobType: 'Waiting staff',
  },
]

describe('reducer', () => {
  describe('FETCH_SHIFTS_LIST_PENDING', () => {
    it('returns loading as true and data as empty', () => {
      const result = shiftsReducer(initialState, { type: `${FETCH_SHIFTS_LIST}_PENDING` })

      expect(result.fetchingShifts).toBe(true)
      expect(result.shiftsList).toEqual([])
    })
  })

  describe('FETCH_SHIFTS_LIST_FULFILLED', () => {
    it('returns loading as false and data', () => {
      const result = shiftsReducer(initialState, { type: `${FETCH_SHIFTS_LIST}_FULFILLED`, payload: { data } })

      expect(result.fetchingShifts).toBe(false)
      expect(result.shiftsList).toEqual(data)
    })
  })
})
