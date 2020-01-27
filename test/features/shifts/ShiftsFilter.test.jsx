import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import ShiftsFilter from '../../../src/features/shifts/ShiftsFilter'

const onChangeJobTypes = jest.fn()
const onChangeTimePeriod = jest.fn()

const jobTypes = ['waiter']

describe('ShiftsFilter', () => {
  let wraper

  beforeEach(() => {
    wraper = (
      <ShiftsFilter
        jobTypes={jobTypes}
        selectedJobType='All'
        onChangeJobTypes={onChangeJobTypes}
        startTime='AM'
        onChangeTimePeriod={onChangeTimePeriod}
      />
    )
  })

  describe('Rendering', () => {
    test('renders according to design', () => {
      const component = renderer.create(wraper)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  describe('onChange callback', () => {
    beforeEach(() => {
      onChangeJobTypes.mockClear()
      onChangeTimePeriod.mockClear()
    })

    it('execute onChangeJobTypes callback when select a job type', () => {
      const component = mount(wraper)
      component.find('select').first().simulate('change', {target: { value: 'waiter' } })
      expect(onChangeJobTypes).toBeCalled()
    })

    it('execute onChangeTimePeriod callback when select a time start', () => {
      const component = mount(wraper)
      component.find('select').last().simulate('change', {target: { value: 'PM' } })
      expect(onChangeTimePeriod).toBeCalled()
    })
  })
})
