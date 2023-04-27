import voidable from './voidable'

const VoidableTestBed = function ({value, toVoid}) {
  return (
    <div className="space-y-4">
      {String(voidable(value, toVoid))}
    </div>
  )
}

export default VoidableTestBed
