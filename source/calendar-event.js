'use strict'

import { UIComponent } from './ui-component.js'
import calendar_event_markup from './calendar-event-markup.jade'

export class CalendarEvent extends UIComponent {
  constructor (event_data) {
    super()

    this.event_data = event_data

    // create the dom node for the event
    let event_markup = document.createElement('div')
    event_markup.innerHTML = calendar_event_markup({
      event_title: this.event_data.event_title,
      event_time: this.formatted_time
    })
    event_markup.classList.add('event')

    // set the node height to be equal to the length of the event
    // note: uses a magic number that's supposed to be equal to that in the styles
    event_markup.style.height = 3 * this.length_in_hours + 'rem'
    event_markup.style.top = 3 + this.starting_offset_in_hours + 'rem'
    this.node = event_markup
  }

  // convenience method to get the length of an event.
  get length_in_hours () {
    const start = new Date(this.event_data.start_date)
    const end = new Date(this.event_data.end_date)

    return (end - start) / 1000 / 60 / 60
  }

  // convenience method to get the offset from the start of a day.
  get starting_offset_in_hours () {
    const start = new Date(this.event_data.start_date)
    const hours = start.getHours()
    const minutes = start.getMinutes()
    return hours + (minutes / 60)
  }

  // convenience method to get the day of the week
  get day_of_week () {
    return (new Date(this.event_data.start_date)).getDay()
  }

  // convenience method to get the fancy user-friendly time.
  get formatted_time () {
    let start = new Date(this.event_data.start_date)
    start = start.getHours() + (start.getHours - 12 ? 'am' : 'pm')
    let end = new Date(this.event_data.end_date)
    end = end.getHours() + (end.getHours - 12 ? 'am' : 'pm')

    return start + ' - ' + end
  }
}
