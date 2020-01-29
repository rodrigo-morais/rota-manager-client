import {connect} from 'react-redux'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {fetchInvitedContracts} from '../../actions/invitedContractsActions'
import InvitedContractsList from './InvitedContractsList'

class InvitedContractsContainer extends Component {
  constructor(props) {
    super(props)

    this.onToggle = this.onToggle.bind(this)

    this.state = { show: false }
  }

  onToggle() {
    const {invitedContractsList, fetchInvitedContractsList} = this.props

    if (invitedContractsList.length === 0) {
      fetchInvitedContractsList()
    }
    this.setState(state => ({ show: !state.show }))
  }

  render() {
    const {roleId, invitedContractsList, fetchingInvitedContracts} = this.props
    const filteredInvitedContractorList = invitedContractsList
      .filter(contractor => contractor.roleId === roleId)
      .map(({ candidateName }) => candidateName)

    return (
      <InvitedContractsList
        visible={this.state.show}
        list={filteredInvitedContractorList}
        loading={fetchingInvitedContracts}
        onToggle={this.onToggle}
      />
    )
  }
}

InvitedContractsContainer.propTypes = {
  roleId: PropTypes.number.isRequired,
  invitedContractsList: PropTypes.arrayOf(PropTypes.shape({
    candidateName: PropTypes.string.isRequired,
  })).isRequired,
  fetchInvitedContractsList: PropTypes.func.isRequired,
  fetchingInvitedContracts: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  invitedContractsList: state.invitedContracts.invitedContractsList,
  fetchingInvitedContracts: state.invitedContracts.fetchingInvitedContracts,
})

const mapDispatchToProps = (dispatch) => ({
  fetchInvitedContractsList: () => dispatch(fetchInvitedContracts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(InvitedContractsContainer)
