export const Review = ({ user, text, rating }) => {
  return (
    <div className="review">
      <div className="review-title">
        <div>{user}</div>
        <div className="review-rating">
          Rating - <span>{rating}</span>
        </div>
      </div>
      <p>{text}</p>
    </div>
  );
};
