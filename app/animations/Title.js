import GSAP from 'gsap'

import Animation from 'classes/Animation'

export default class Title extends Animation {
  constructor ({ element, elements }) {
    super({
      element,
      elements
    })

    this.elementLines = this.element.querySelector('span span')
  }

  animateIn () {
    GSAP.fromTo(this.element, {
      autoAlpha: 0
    }, {
      autoAlpha: 1,
      delay: 0.5,
      duration: 1.5
    })
  }

  animateOut () {
    GSAP.set(this.element, {
      autoAlpha: 0
    })
  }
}
