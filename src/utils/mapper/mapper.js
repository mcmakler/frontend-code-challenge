import constants from '../../constants';
import { priceFormatter, trim, round, specialCharacter } from '../../utils';

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
  const thumb = getThumb(item.advertisementAssets);
  const title = getTitle(item.title);
  const tag = getTage(item.advertisementPrice);
  const address = getAddress(item.realestateSummary.address);
  const showAddress = item.userWishes.visibleAddress;
  const price = {
    value: getPrice(item.advertisementPrice),
    label: constants.currencyLabel
  };
  const rooms = {
    value: item.realestateSummary.numberOfRooms,
    label: constants.roomLabel
  };
  const space = {
    value: round(item.realestateSummary.space),
    label: ''
  };

  const formatted = {
    thumb,
    title,
    price,
    rooms,
    tag,
    space,
    address,
    showAddress
  };

  return Object.assign({}, item, { formatted });
}
