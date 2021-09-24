interface IGarmentData {
  product_categories_mapped: string;
  product_id: number;
  url: string;
  gender: string;
  price: number;
  product_description: string;
  image_urls: Array<string>;
  product_imgs_src: Array<string>;
  source: string;
  product_categories: Array<string>;
  images: Array<{
    url: string;
    path: string;
    checksum: string;
  }>;
  position: Array<string>;
  product_title: string;
  brand: string;
  currency_code: string;
  stock: number;
}
