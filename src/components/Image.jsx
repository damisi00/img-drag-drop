
const Image = ({ image }) => {
  return (
    <>
        <div className="box" >
            <img src={image.source} alt={image.description} />
            <button className={image.faction}> {image.faction}</button>
        </div>
    </>
  )
}

export default Image