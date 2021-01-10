import cloudinary from 'cloudinary';

import { fileUpload } from '../../helpers/fileUpload';

cloudinary.config({
  cloud_name: 'julio199409',
  api_key: '339623582921738',
  api_secret: 'm-PB6l9uYN5gwUwSDpu9BDiSKLE',
});

describe('testing file upload', () => {
  it('should load a file and return its url', async () => {
    const resp = await fetch(
      'https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/g9a9m-MHM425BWQ9F-Full-Image_GalleryBackground-en-US-1521579412582._SX1080_.jpg'
    );
    const blob = await resp.blob();

    const file = new File([blob], 'foto.png');
    const url = await fileUpload(file);

    expect(typeof url).toBe('string');

    // Delete image by Id

    const segments = url.split('/');
    const imageId = segments[segments.length - 1].replace('.jpg', '');

    await cloudinary.v2.api.delete_resources(imageId, {}, () => {});
  });
  it('should load a file and return an error ', async () => {
    const file = new File([], 'foto.png');
    const url = await fileUpload(file);

    expect(url).toBe(null);
  });
});
