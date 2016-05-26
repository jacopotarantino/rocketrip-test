'use strict'

import { RocketripTest } from './rocketrip-test.js'
import { APIService } from './api-service.js'

describe('Rocketrip Code Test', () => {
  let calendar

  beforeEach(() => {
      calendar = new RocketripTest([
        {
          event_title: 'engineering interview test prep',
          start_date: '2016-03-10T15:00:00.000Z',
          end_date: '2016-03-10T15:30:00.000Z'
        },
        {
          event_title: 'coffee with paul',
          start_date: '2016-03-10T15:00:00.000Z',
          end_date: '2016-03-10T17:30:00.000Z'
        },
        {
          event_title: 'OOO for dentist',
          start_date: '2016-03-11T10:00:00.000Z',
          end_date: '2016-03-11T12:00:00.000Z'
        }
      ])
  })

  afterEach(() => {
    if (!document.querySelector('.calendar-container')) { return }
    calendar.remove()
  })

  it('Your mock JSON should render a 7 day calendar UI', () => {
    calendar.render()
    expect(document.querySelectorAll('.week .day').length).toBe(7)
  })

  it('Show events with different dates and times', () => {
    calendar.render()
    expect(document.querySelectorAll('.event').length).toBe(3)
  })

  it('gets events from the "API" asynchronously', (done) => {
    let promise = APIService.get_events()
    promise.then(function (events) {
      expect(events.length).toBe(3)
      done()
    })    
  })

  it('Show events with different durations', () => {
    calendar.render()
    const events = document.querySelectorAll('.event')
    const duration_one = events[0].style.height
    const duration_two = events[1].style.height
    expect(duration_one === duration_two).toBe(false)
  })

  it('Show events that overlap (ex: if I have 2 events that go from 2:00-3:00 and 2:30-3:30)', () => {
    calendar.render()
    const events = document.querySelectorAll('.event')
    // event #2 should have a left offset so both are visible
    const left_offset_one = getComputedStyle(events[0]).left
    const left_offset_two = getComputedStyle(events[1]).left
    expect(left_offset_one === left_offset_two).toBe(false)
  })

  it('Instructions for how to run your program', () => {
    console.log('Consult the readme for instructions on how to run. Try `npm start`...')
    expect(true).toBe(true)
  })

  it('has tests', () => {
    expect(typeof expect === 'function').toBe(true)
  })

  it('optional: has linting', () => {
    console.log('Run `npm run lint` to get only the linting results.')
    expect(true).toBe(true)
  })

  it('optional: bundler (webpack, gulp)', () => {
    console.log('Run `npm start` for a server or `npm run build` just to build.')
    expect(true).toBe(true)
  })

  it('optional: Add new events', () => {
    expect(true).toBe(false)
  })

  it('optional: Drag and drop existing events', () => {
    expect(true).toBe(false)
  })

  it('optional: Different views (4 Day, Month view, etc)', () => {
    expect(true).toBe(false)
  })

  it('optional: Timezone preference', () => {
    expect(true).toBe(false)
  })
})
