import Image from "next/image"

export default function Photos({ photos }) {
  return (
    <>
      {photos.map((photo, ind) => (
        <div key={ind}>
          <Image src={photo.url} width={600} height={600} blurDataURL="photo.url" alt={photo.title} placeholder="blur" />
          <p>{photo.title}</p>
        </div>
      ))}
    </>
  )
}