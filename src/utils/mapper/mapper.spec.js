import advertisementObj from '../../../fixtures/advertisement-fixture';
import expectedObj from '../../../fixtures/expected-advertisement-fixture';
import { itemMapper } from './mapper';

describe('mapper itemMapper utility', () => {
  it('should map item and assign formatted obj', () => {
    const actual = itemMapper(advertisementObj).formatted;

    expect(actual).toEqual(expectedObj);
  });

  it('should concat address from addressObj', () => {
    const realestateSummary = {
      address: {
        street: 'Im Bonnefeld',
        number: '7',
        postalCode: '47259',
        city: 'Duisburg',
      },
      numberOfRooms: 3,
      space: 78.78000000000003
    };
    const withoutAddress = Object.assign({}, advertisementObj, { realestateSummary });
    const actual = itemMapper(withoutAddress).formatted;

    expect(actual).toEqual(expectedObj);
  });
});
