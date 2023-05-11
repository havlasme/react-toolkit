import includes from './includes'

const IncludesTestBed = function ({haystack, needle}) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        {includes(haystack, needle) ? (
          <strong className="text-green-500">
            match found!
          </strong>
        ) : (
          <strong className="text-red-500">
            no match found!
          </strong>
        )}
      </div>
    </div>
  )
}

export default IncludesTestBed
