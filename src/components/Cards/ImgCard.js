import '../../styles/ImgCard.css'

function ImgCard({ src, alt, caption }) {
  return (
    <>
      <div className="card imageContainer">
        <img src={src} className="imgCard" alt={alt} />
        <div className="card-body">
          <p className="card-text">{caption}</p>
        </div>
      </div>
    </>
  )
}

export default ImgCard;