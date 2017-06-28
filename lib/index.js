import css from './tooltip.css'

function getCssText(align, target, containerRect) {
  let top, left
  if( align === 'bottom') {
    top = target.bottom + 5 + 6
  }else if (align === 'left' || align === 'right') {
    top = target.top + (target.height - containerRect.height)/2
  }else {
    top = target.top - containerRect.height -6
  }

  if (align === 'left') {
    left = target.left - containerRect.width -5
  }else if (align === 'right') {
    left = target.right + 5
  }else {
    left = target.left + target.width/2 - containerRect.width/2
  }

  return `position: absolute; top: ${top}px; left: ${left}px;`
}

function autoAlign(align, target, containerRect) {
  const {innerWidth, innerHeight} = window
  if (align === 'top' && target.top < containerRect.height + 5 + 6) {
    return 'bottom'
  }else if(align === 'bottom' && target.bottom + containerRect.height + 5 + 6 > innerHeight){
    return 'top'
  }else if (align === 'left' && target.left - containerRect.width -5 < 0) {
    return 'right'
  }else if(align === 'right' && target.right + containerRect.width + 5 > innerWidth){
    return 'left'
  } else {
    return align
  }
}

export default function (params) {
  const container = document.getElementById('tooltip')
  if (container) {
    document.body.removeChild(container)
  }

  if(params.leave) {
    return
  }

  const {e, msg = 'react-tooltip-plugin', align = 'top'} = params
  const target = e.target.getBoundingClientRect()

  const _container = document.createElement('div')
  _container.id = 'tooltip'
  _container.classList.add(css.tooltip)
  _container.innerText = msg

  document.body.appendChild(_container)

  const containerRect = _container.getBoundingClientRect()
  const newAlign = autoAlign(align, target, containerRect)
  const cssText = getCssText(newAlign, target, containerRect)

  _container.classList.add(css[newAlign])
  _container.style.cssText = cssText
  _container.style.opacity = '1'

}