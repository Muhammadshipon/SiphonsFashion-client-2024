


const ProductDetailsModal = ({setOpenModal,product={}}) => {
  const {name, img, price,category,ratings,stock,id,discount,shortDescription,seller } = product;
  const handleCloseModal=()=>{
    setOpenModal(false);
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center fixed bg-[rgb(0,0,0,0.5)]  z-50">
   <div className=" w-[300px] md:w-[700px] md:h-[400px] bg-white rounded-3xl shadow-2xl">
  <div className="flex flex-col md:flex-row gap-8 p-5">
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
   <div className="flex justify-around mt-4">
   <button className="btn btn-primary">Add to Cart</button>
   <button className="btn btn-primary bg-red-600 border-none" onClick={handleCloseModal}>Cancel</button>
   </div>
    </div>
  </div>
   
   </div>
   </div>

  );
};

export default ProductDetailsModal;