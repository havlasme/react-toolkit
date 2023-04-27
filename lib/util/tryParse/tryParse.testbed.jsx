import tryParse from './tryParse'

const TryParseTestBed = function ({jsonString}) {
  const parsedValue = tryParse(jsonString)

  console.log('tryParse: ', parsedValue)

  return (
    <div className="space-y-4">
      {typeof parsedValue}: {String(parsedValue)}<br/>
      <small>@see console.log</small>
    </div>
  )
}

export default TryParseTestBed
