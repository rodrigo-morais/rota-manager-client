import {
  FETCH_INVITED_CONTRACTS_LIST,
} from '../../src/actions/constants'
import {
  fetchInvitedContracts,
} from '../../src/actions/invitedContractsActions'
import * as webapi from '../../src/lib/requests/webapi'


webapi.fetchInvitedContractsList = jest.fn().mockReturnValue({ data: [] })

describe('invitedContractsActions', () => {
  describe('fetchInvitedContractsList', () => {
    it('returns FETCH_INVITED_CONTRACTS_LIST as type', () => {
      const result = fetchInvitedContracts()

      expect(result.type).toBe(FETCH_INVITED_CONTRACTS_LIST)
      expect(result.payload.data).toEqual([])
    })
  })
})
