function ArtText(props) {
  return <div style={{
    fontFamily: 'Times New Roman, serif',
    fontWeight: 400,
    fontSize: '64px',
    color: props.config.color ?? 'blue',
    textShadow: '2px 1px 0 #c1c1c1'
  }}>{props.code}</div>
}

export default ArtText