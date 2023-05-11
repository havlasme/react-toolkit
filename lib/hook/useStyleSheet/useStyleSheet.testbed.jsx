import useStyleSheet from './useStyleSheet'

const UseStyleSheetTestbed = function ({location, destroyOnUnmount}) {
  const state = useStyleSheet(location, {destroyOnUnmount})

  return (
    <div className="space-y-4">
      <div className="space-y-2 useStyleSheet-testbed-custom">
        current state: {String(state)}
      </div>
    </div>
  )
}

export default UseStyleSheetTestbed
