import React from 'react';



const StarRating = ({
  rating,
  totalStars = 5,
  size = 24,
}) => {
  // Округлим рейтинг до половины звезды, например 3.7 -> 3.5
  const roundedRating = Math.round(rating * 2) / 2;

  return (
    <div className="flex space-x-1">
      {[...Array(totalStars)].map((_, i) => {
        const starNumber = i + 1;
        let starClass = 'text-gray-300'; // пустая звезда

        if (starNumber <= roundedRating) {
          starClass = 'text-[#FFAD33]'; // заполненная звезда
        } else if (starNumber - 0.5 === roundedRating) {
          starClass = 'text-[#FFAD33]'; // половинчатая (показать как заполненная для простоты)
        }

        return (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
            className={`${starClass}`}
            style={{ width: size, height: size }}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.287 3.97c.3.92-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.045 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
          </svg>
        );
      })}
    </div>
  );
};

export default StarRating;