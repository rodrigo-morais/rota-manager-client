import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import InvitedContractsList from '../../../src/features/invitedContracts/InvitedContractsList'

const onToggle = jest.fn()

const invitedContracts = ['First', 'Second', 'Third']

describe('InvitedContractsList', () => {
  describe('when list is visible', () => {
    describe('loading', () => {
      const wraper = (
        <InvitedContractsList
          visible
          list={[]}
          loading
          onToggle={onToggle}
        />
      )

      describe('Rendering', () => {
        const component = renderer.create(wraper)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
      })
    })

    describe('with data', () => {
      const wraper = (
        <InvitedContractsList
          visible
          list={invitedContracts}
          loading={false}
          onToggle={onToggle}
        />
      )

      describe('Rendering', () => {
        test('renders according to design', () => {
          const component = renderer.create(wraper)
          const tree = component.toJSON()
          expect(tree).toMatchSnapshot()
        })
      })

      describe('onToggle callback', () => {
        beforeEach(() => {
          onToggle.mockClear()
        })

        it('execute onToggle callback when click on close button', () => {
          const component = mount(wraper)
          component.find('button').first().simulate('click')
          expect(onToggle).toBeCalled()
        })
      })
    })
  })

  describe('when list is not visible', () => {
    const wraper = (
      <InvitedContractsList
        visible={false}
        list={[]}
        loading={false}
        onToggle={onToggle}
      />
    )

    describe('Rendering', () => {
      const component = renderer.create(wraper)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })

    describe('onToggle callback', () => {
      beforeEach(() => {
        onToggle.mockClear()
      })

      it('execute onToggle callback when click on show list button', () => {
        const component = mount(wraper)
        component.find('button').first().simulate('click')
        expect(onToggle).toBeCalled()
      })
    })
  })
})
