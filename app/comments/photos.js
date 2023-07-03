export default function Photos({ photos }) {
  return (
    <>
      {photos.map(photo => (
        <p>{photo.url}</p>
      ))}
    </>
  )
}