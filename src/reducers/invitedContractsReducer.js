const InitialState = {
  invitedContractsList: [],
  fetchingInvitedContracts: false,
}

const invitedContractsReducer = (state = InitialState, action) => {
  switch (action.type) {
    case 'FETCH_INVITED_CONTRACTS_LIST_FULFILLED': {
      const {payload: {data}} = action

      return Object
        .assign({}, state, {fetchingInvitedContracts: false, invitedContractsList: data})
    }

    case 'FETCH_INVITED_CONTRACTS_LIST_PENDING': {
      return Object.assign({}, state, {fetchingInvitedContracts: true})
    }

    default:
      return state
  }
}

export default invitedContractsReducer
