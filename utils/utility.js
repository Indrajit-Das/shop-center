// calculate discount price
export function getDiscountedPrice(price, discountPercentage) {
  const discountAmount = (price * discountPercentage) / 100;
  const discountedPrice = price - discountAmount;
  return discountedPrice.toFixed(2);
}

// make a image url
