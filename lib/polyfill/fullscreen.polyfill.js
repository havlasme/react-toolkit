;(function () {
  if (!window.Document) {
    return void 0
  }

  Element.prototype.requestFullscreen =
    Element.prototype.requestFullscreen ||
    Element.prototype.mozRequestFullScreen ||
    Element.prototype.msRequestFullscreen ||
    Element.prototype.webkitRequestFullscreen

  Document.prototype.exitFullscreen =
    Document.prototype.exitFullscreen ||
    Document.prototype.mozCancelFullScreen ||
    Document.prototype.msExitFullscreen ||
    Document.prototype.webkitCancelFullScreen

  if (!('fullscreenElement' in document)) {
    Object.defineProperty(document, 'fullscreenElement', {
      get: function () {
        return document.mozFullScreenElement
          || document.msFullscreenElement
          || document.webkitCurrentFullScreenElement
          || document.webkitFullscreenElement
      },
    })
  }
  if (!('fullscreenEnabled' in document)) {
    Object.defineProperty(document, 'fullscreenEnabled', {
      get: function () {
        return document.mozFullScreenEnabled
          || document.msFullscreenEnabled
          || document.webkitFullscreenEnabled
      },
    })
  }

  const proxyEvent = function (event) {
    const eventType = event.type.replace(/^(webkit|moz|MS)/, '').toLowerCase()
    const newEvent = document.createEvent('Event')
    newEvent.initEvent(eventType, event.bubbles, event.cancelable)
    event.target.dispatchEvent(newEvent)
  }
  document.addEventListener('webkitfullscreenchange', proxyEvent)
  document.addEventListener('webkitfullscreenerror', proxyEvent)
  document.addEventListener('mozfullscreenchange', proxyEvent)
  document.addEventListener('mozfullscreenerror', proxyEvent)
  document.addEventListener('MSFullscreenChange', proxyEvent)
  document.addEventListener('MSFullscreenError', proxyEvent)
})()
