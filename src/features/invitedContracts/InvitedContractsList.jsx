import PropTypes from 'prop-types'
import React from 'react'

function InviteContractssList(props) {
  const {visible, list, loading, onToggle} = props

  const h1Style = {
    display: 'inline',
    marginRight: '2%',
  }

  const buttonStyle = {
    display: 'inline',
    position: 'relative',
    top: '-7px',
    cursor: 'pointer',
    border: 'none',
    fontSize: '25px',
  }

  const listElement = isLoading => (
    isLoading ?
      <h1>Loading...</h1> :
      (
        <React.Fragment>
          <h1 style={h1Style}>Contracts List</h1>
          <button style={buttonStyle} onClick={onToggle}>&times;</button>
          <ul>{list.map(name => (<li key={name}>{name}</li>))}</ul>
        </React.Fragment>
      )
  )

  return (
    <div>
      {visible ?
        listElement(loading) :
        <button onClick={onToggle}>Invited Candidates</button>
      }
    </div>
  )
}

InviteContractssList.propTypes = {
  visible: PropTypes.bool.isRequired,
  list: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  loading: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
}

export default InviteContractssList
