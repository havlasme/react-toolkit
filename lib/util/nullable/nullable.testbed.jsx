import nullable from './nullable'

const NullableTestBed = function ({value, toNull}) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        {String(nullable(value, toNull))}
      </div>
    </div>
  )
}

export default NullableTestBed
