'use strict'

import { UIComponent } from './ui-component.js'
import layout from './rocketrip-layout.jade'
import layout_styles from './rocketrip-styles.sass'
import { CalendarEvent } from './calendar-event.js'

export class RocketripTest extends UIComponent {
  constructor (events_data = []) {
    super()

    this.styles = layout_styles

    this.events = events_data.map((event_data) => {
      return new CalendarEvent(event_data)
    })

    let layout_container = document.createElement('div')
    layout_container.innerHTML = layout()
    layout_container.classList.add('calendar-container')
    this.node = layout_container
  }

  render () {
    super.render()

    this.events.forEach((event) => {
      let day = document.querySelectorAll('.week .day')[event.day_of_week]
      day.appendChild(event.node)
    })
  }
}
