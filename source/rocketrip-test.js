'use strict'

import { UIComponent } from './ui-component.js'
import layout from './rocketrip-layout.jade'
import layout_styles from './rocketrip-styles.sass'

export class RocketripTest extends UIComponent {
  constructor () {
    super()

    this.styles = layout_styles

    let layout_container = document.createElement('div')
    layout_container.innerHTML = layout()
    layout_container.classList.add('calendar-container')
    this.node = layout_container
  }
}
