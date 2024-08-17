import PropTypes from 'prop-types';
import { RiDeleteBinLine } from "react-icons/ri";


const Cart = ({cartProducts,setDeleteItemId}) => {

 const handleDeleteItem =(id)=>{
  setDeleteItemId(id);
 }
 const totalPrice =cartProducts.reduce((sum,current)=>sum+current.price*current.quantity,0)

 return (
    <div className=" ">
     <div className="drawer z-50 ">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  
  <div className="drawer-side ">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-gray-950 text-base-content min-h-full w-80 p-4">
      {/* Sidebar content here */}
      <div className="flex justify-between p-5 border-b border-white">
        <span className="text-blue-400">Product</span>
        <span className="text-blue-400">Quantity</span>
        <span className="text-blue-400">Price</span>
        <span className="text-blue-400">Remove</span>
      </div>
      {
        cartProducts?.map(item=><div key={item.id} className="flex gap-5 justify-between mb-4 hover:bg-slate-200 p-5 text-white hover:text-gray-900  border-b-2">
          <span className="text-sm">{item.name}</span>
          <span>{item.quantity}</span>
          <span className="text-blue-700">{item.price}$</span>
          <span onClick={()=>handleDeleteItem(item.id)} className="text-2xl"><RiDeleteBinLine/></span>

        </div>)
      }
      <div className="flex justify-around font-bold text-xl mt-2 text-white">
        <span>Total Price:</span>
        <span>{totalPrice} $</span>
      </div>
    
    </ul>
  </div>
</div> 
    </div>
  );
};

// Define PropTypes for Cart component
Cart.propTypes = {
  cartProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  setDeleteItemId: PropTypes.func.isRequired,
};

export default Cart;