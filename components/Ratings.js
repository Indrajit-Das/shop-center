import Image from "next/image";
import StarLogo from "../public/assets/svg/star.svg";

export default function Ratings({ rating }) {
  const ratingNumber = parseFloat(rating); // Convert rating to a floating-point number
  const fullStars = Math.floor(ratingNumber); // Get the integer part of the rating
  const hasHalfStar = ratingNumber - fullStars >= 0.5; // Check if there's a half star

  // Create an array of star elements based on the full star count
  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Image key={i} src={StarLogo} width="20px" alt="star-rating-logo" />
    );
  }
  // Add a half star if necessary
  if (hasHalfStar) {
    stars.push(
      <Image
        key="half-star"
        src={StarLogo}
        width="20px"
        alt="star-rating-logo"
        style={{ clipPath: "polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)" }}
      />
    );
  }
  return (
    <div className="mt-3 flex items-center justify-start gap-1">{stars}</div>
  );
}
