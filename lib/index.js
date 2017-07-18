'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (params) {
  var container = document.getElementById('tooltip');
  if (container) {
    document.body.removeChild(container);
  }

  if (params.leave) {
    return;
  }

  var e = params.e,
    _params$msg = params.msg,
    msg = _params$msg === undefined ? 'react-tooltip-plugin' : _params$msg,
    _params$align = params.align,
    align = _params$align === undefined ? 'top' : _params$align;

  var target = e.target.getBoundingClientRect();

  var _container = document.createElement('div');
  _container.id = 'tooltip';
  _container.classList.add('tooltip');
  _container.innerText = msg;

  document.body.appendChild(_container);

  var containerRect = _container.getBoundingClientRect();
  var newAlign = autoAlign(align, target, containerRect);
  var cssText = getCssText(newAlign, target, containerRect);

  _container.classList.add(newAlign);
  _container.style.cssText = cssText;
  _container.style.opacity = '1';
};

function getCssText(align, target, containerRect) {
  var top = void 0,
    left = void 0;
  if (align === 'bottom') {
    top = target.bottom + 5 + 6;
  } else if (align === 'left' || align === 'right') {
    top = target.top + (target.height - containerRect.height) / 2;
  } else {
    top = target.top - containerRect.height - 6;
  }

  if (align === 'left') {
    left = target.left - containerRect.width - 5;
  } else if (align === 'right') {
    left = target.right + 5;
  } else {
    left = target.left + target.width / 2 - containerRect.width / 2;
  }

  return 'position: absolute; top: ' + top + 'px; left: ' + left + 'px;';
}

function autoAlign(align, target, containerRect) {
  var _window = window,
    innerWidth = _window.innerWidth,
    innerHeight = _window.innerHeight;

  if (align === 'top' && target.top < containerRect.height + 5 + 6) {
    return 'bottom';
  } else if (align === 'bottom' && target.bottom + containerRect.height + 5 + 6 > innerHeight) {
    return 'top';
  } else if (align === 'left' && target.left - containerRect.width - 5 < 0) {
    return 'right';
  } else if (align === 'right' && target.right + containerRect.width + 5 > innerWidth) {
    return 'left';
  } else {
    return align;
  }
}