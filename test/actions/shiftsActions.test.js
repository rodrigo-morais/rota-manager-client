import {
  FETCH_SHIFTS_LIST,
} from '../../src/actions/constants'
import {
  fetchShifts,
} from '../../src/actions/shiftsActions'
import * as webapi from '../../src/lib/requests/webapi'


webapi.fetchShiftsList = jest.fn().mockReturnValue({ data: [] })

describe('shiftsActions', () => {
  describe('fetchShifts', () => {
    it('returns FETCH_SHIFTS_LIST as type', () => {
      const result = fetchShifts()

      expect(result.type).toBe(FETCH_SHIFTS_LIST)
      expect(result.payload.data).toEqual([])
    })
  })
})
