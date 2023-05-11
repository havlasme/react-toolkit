import useNanoId from './useNanoId'

const UseNanoIdTestBed = function ({id}) {
  const nanoid = useNanoId(id)

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        nanoid: {nanoid}
      </div>
    </div>
  )
}

export default UseNanoIdTestBed
