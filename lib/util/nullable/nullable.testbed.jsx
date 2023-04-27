import nullable from './nullable'

const NullableTestBed = function ({value, toNull}) {
  return (
    <div className="space-y-4">
      {String(nullable(value, toNull))}
    </div>
  )
}

export default NullableTestBed
