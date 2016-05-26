'use strict'

import { RocketripTest } from './source/rocketrip-test.js'
import { APIService } from './source/api-service.js'

let event_service = APIService.get_events()

event_service.then(function (events) {
  (new RocketripTest(events)).render()
})
