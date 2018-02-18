import constants from '../../constants';
import {priceFormatter, trim, round, specialCharacter} from '../../utils';

const addressStr = address => {
  return `${address.street} ${address.number}, ${address.postalCode} ${address.city}`;
};
const getTitle = title => trim(specialCharacter.replace(title), constants.titleWordCount);
const getTage = price => {
  const types = constants.advertisementType;

  return price.baseRent ? types.rent : types.sell;
};
const getThumb = assets => assets[0].advertisementThumbnails.inventory_m.url;
const getAddress = address => address.fullAddress || addressStr(address);
const getPrice = price => priceFormatter(price.baseRent || price.sellPrice);

export function itemMapper(item) {
  const id = item._id.$id;
  const thumb = getThumb(item.advertisementAssets);
  const title = getTitle(item.title);
  const tag = getTage(item.advertisementPrice);
  const address = getAddress(item.realestateSummary.address);
  const showAddress = item.userWishes.visibleAddress;
  const price = getPrice(item.advertisementPrice);
  const rooms = item.realestateSummary.numberOfRooms;
  const space = round(item.realestateSummary.space);

  return {
    id,
    thumb,
    title,
    price,
    rooms,
    tag,
    space,
    address,
    showAddress
  };
}
