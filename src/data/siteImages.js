import { imagePath } from './imagePath.js'

export const siteImages = {
  hero: {
    image: imagePath('hero.jpg.webp'),
    alt: 'Beauty model holding a skincare product',
  },
  trending: {
    image: imagePath('trending-now.jpg'),
    alt: 'Three beauty models with glowing skin',
  },
  social: [
    {
      image: imagePath('social-1.jpg'),
      alt: 'Cosmo beauty social post 1',
    },
    {
      image: imagePath('social-2.jpg'),
      alt: 'Cosmo beauty social post 2',
    },
    {
      image: imagePath('social-3.jpg'),
      alt: 'Cosmo beauty social post 3',
    },
  ],
}
