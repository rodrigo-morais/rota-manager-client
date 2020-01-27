import {
  FETCH_INVITED_CONTRACTS_LIST,
} from '../../src/actions/constants'
import inviteContractsReducer from '../../src/reducers/invitedContractsReducer'

const initialState = {
  invitedContractsList: [],
  fetchingInvitedContracts: false,
}

const data = [
  {
    id: 1,
    roleId: 1,
    candidateName: 'Joe Smith',
  },
  {
    id: 2,
    roleId: 1,
    candidateName: 'Samantha Brown',
  },
  {
    id: 3,
    roleId: 1,
    candidateName: 'John Doe',
  },
]

describe('reducer', () => {
  describe('FETCH_INVITED_CONTRACTS_LIST_PENDING', () => {
    it('returns loading as true and invitedContractsList as empty', () => {
      const result = inviteContractsReducer(initialState, { type: `${FETCH_INVITED_CONTRACTS_LIST}_PENDING` })

      expect(result.fetchingInvitedContracts).toBe(true)
      expect(result.invitedContractsList).toEqual([])
    })
  })

  describe('FETCH_SHIFTS_LIST_FULFILLED', () => {
    it('returns loading as false, shiftsList and shiftsJobTypesList the correct data', () => {
      const result = inviteContractsReducer(initialState, { type: `${FETCH_INVITED_CONTRACTS_LIST}_FULFILLED`, payload: { data } })

      expect(result.fetchingInvitedContracts).toBe(false)
      expect(result.invitedContractsList).toEqual(data)
    })
  })
})
