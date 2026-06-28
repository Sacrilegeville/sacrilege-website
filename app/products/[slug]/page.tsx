import { notFound } from "next/navigation";
import { getProductByHandle } from "@/lib/shopify";
import ProductGallery from "@/components/ProductGallery";
import ProductInfo from "../../../components/ProductInfo";
console.log("ProductInfo:", ProductInfo);
type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  console.log("slug:", slug);

  const product = await getProductByHandle(slug);

  if (!product) {
    notFound();
  }

  const formattedProduct = {
  name: product.title,

  handle: product.handle,
  price: Number(product.variants?.nodes?.[0]?.price?.amount ?? 0),
  description: product.description ?? "",
  gallery: product.images?.nodes?.map((img: any) => img.url) || [],
  variants: product.variants?.nodes || [],
};
console.log("slug:", slug);
console.log("VARIANTS:", formattedProduct.variants);

return (
  <main className="min-h-screen bg-black text-white pb-40">
<section className="max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-32 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
    <ProductGallery
      gallery={formattedProduct.gallery}
      name={formattedProduct.name}
    />

    <ProductInfo
      product={formattedProduct}
      products={[]}
    />

  </section>
</main>
);
}