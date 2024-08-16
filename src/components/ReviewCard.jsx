import PropTypes from 'prop-types';
import ReactStars from "react-rating-stars-component";

const ReviewCard = ({comment}) => {
  const { rating, review, img, date, customerName} = comment;
  return (
    <div className="flex flex-col justify-center max-w-xs p-6 shadow-2xl border rounded-xl sm:px-12  text-gray-800 mb-20">
	<img src={img} alt="" className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square" />
	<div className="space-y-4 text-center divide-y divide-gray-700">
		<div className="my-2 space-y-1">
			<h2 className="text-xl font-semibold sm:text-2xl">{customerName}</h2>
      <div className="w-full flex justify-center ">
      <ReactStars value={rating} count={5} size={24} activeColor="#ffd700" />
      </div>
			<p className="px-5 text-xs sm:text-base text-gray-800 ">{review}</p>
      <p className="mt-2 font-semibold">{date}</p>
		</div>
   
		
	</div>
</div>
  );
};

// Define PropTypes for ReviewCard component
ReviewCard.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    review: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    customerName: PropTypes.string.isRequired
  }).isRequired
};

export default ReviewCard;