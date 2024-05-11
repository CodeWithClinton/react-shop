import ProductCard from "./ProductCard"

const ProductContainer = () => {
  return (
    <div className="container mx-auto mt-36 mb-8 px-4 flex flex-wrap justify-evenly">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        
    </div>
  )
}

export default ProductContainer