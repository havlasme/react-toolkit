import useStyleSheet from './useStyleSheet'

const UseStyleSheetTestbed = function ({location}) {
  const state = useStyleSheet(location)

  return (
    <div className="space-y-4">
      <div className="custom-stylesheet">
        current state: {String(state)}
      </div>
    </div>
  )
}

export default UseStyleSheetTestbed
