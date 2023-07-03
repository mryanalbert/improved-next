import Image from "next/image"

export default function Photos({ photos }) {
  return (
    <>
      {photos.map(photo => (
        <Image src={'https://via.placeholder.com/600/e5109'} width={600} height={600} alt={photo.title}/>
      ))}
    </>
  )
}