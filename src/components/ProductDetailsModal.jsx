


const ProductDetailsModal = ({setOpenModal,productDetails={},setIdForAddToCart}) => {
  const {name, img, price,category,stock,discount,shortDescription,seller,id } = productDetails;
  const handleCloseModal=()=>{
    setOpenModal(false);
  }

  const handleAddToCart = (id) => {
     // update add to card product 
  setIdForAddToCart(null); 
  setTimeout(() => {
    setIdForAddToCart(id); 
    setOpenModal(false);
  }, 0); 
};
  return (
    <div className="w-screen h-screen flex justify-center items-center fixed bg-[rgb(0,0,0,0.5)]  z-50">
   <div className=" w-[300px] md:w-[700px]  bg-white rounded-3xl shadow-2xl">
  <div className="flex flex-col md:flex-row gap-8 px-5 py-8">
    <img src={img} alt={name} className="w-[300px] rounded-2xl"/>
    <div>
   <h2 className="text-2xl font-bold text-orange-500 mb-3">{name}</h2>
   <p>{shortDescription}</p>
   <div>
    <p className="font-semibold text-orange-500">Category: <span className="font-normal text-black">{category}</span></p>
    <p className="font-semibold text-orange-500">Stock: <span className="font-normal text-black">{stock}</span></p>
    <p className="font-semibold text-orange-500">Seller: <span className="font-normal text-black">{seller}</span></p>
    <p className="font-semibold text-orange-500">Discount: <span className="font-normal text-black">{discount*100}%</span></p>
    <p className="font-semibold text-orange-500">Price: <span className="font-normal text-black">{price}$</span></p>
   </div>
   <div className="flex justify-around mt-4 mb-5 md:mb-0">
   <button onClick={()=>handleAddToCart(id)} className="btn btn-primary">Add to Cart</button>
   <button className="btn btn-primary bg-red-600 border-none" onClick={handleCloseModal}>Cancel</button>
   </div>
    </div>
  </div>
   
   </div>
   </div>

  );
};

export default ProductDetailsModal;