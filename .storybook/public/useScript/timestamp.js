;(function () {
  setTimeout(
    function () {
      const domNode = document.getElementById('useScript-testbed-mount')
      domNode.innerHTML = new Date().toISOString()
    }, 100)
})()
