import { Review } from "../review/review";

export const Reviews = ({ reviews }) => {
  return (
    <div className="reviews">
      <h3>Reviews</h3>
      <div className="review-inner">
        <ul>
          {reviews?.map(({ id, user, text, rating }) => (
            <li key={id}>
              <Review user={user} text={text} rating={rating} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
