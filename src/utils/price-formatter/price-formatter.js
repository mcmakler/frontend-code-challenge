export default function priceFormatter (price) {
  const fixedPriceStr = price.toFixed(0);
  const fixedPriceNum = Number(fixedPriceStr);

  return fixedPriceNum.toLocaleString().replace(',', '.');
}
