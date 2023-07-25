interface ProductCard {
  title: string
  text: string
}
interface ProductCards {
  props: ProductCard
}

export const BodyCard = ({props}: ProductCards) => {
  return (
    <div className="block-body">
      <div className="card-title">{props.title}</div>
      <div className="card-text">{props.text}</div>
      <div className="block-btn">
        <button className="card-btn">Go somewhere</button>
      </div>
    </div>
  )
}
