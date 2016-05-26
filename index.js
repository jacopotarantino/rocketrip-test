'use strict'

import { RocketripTest } from './source/rocketrip-test.js'

(new RocketripTest([
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
])).render()
