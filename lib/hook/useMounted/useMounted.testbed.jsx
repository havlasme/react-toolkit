import useMounted from './useMounted'

const UseMountedTestBed = function () {
  const mounted = useMounted(function () {
    console.log('executed only once at component mount')
  })

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        mounted: <strong>{String(mounted)}</strong><br/>
        <small>@see console.log</small>
      </div>
    </div>
  )
}

export default UseMountedTestBed
