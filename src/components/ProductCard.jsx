import ReactStars from "react-rating-stars-component";

const ProductCard = ({product}) => {
  const {name, img, price,category,ratings,stock,id } = product;
  return (
    <div className="card bg-base-100 max-w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={img}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <ReactStars
    value={ratings}
    count={5}
    size={24}
    activeColor="#ffd700"
  />
   
    <div className="card-actions flex flex-row justify-center items-center gap-5">
    <p className="font-semibold">{category}</p>
    <div className="divider divider-horizontal"></div>
  <p className="flex items-center">Price: $<span className="text-2xl font-bold text-orange-600">{price}</span></p>
    </div>
  </div>
</div>
  );
};

export default ProductCard;