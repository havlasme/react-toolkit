import voidable from './voidable'

const VoidableTestBed = function ({value, toVoid}) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        {String(voidable(value, toVoid))}
      </div>
    </div>
  )
}

export default VoidableTestBed
