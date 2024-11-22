import Image from 'next/image';

const Products = () => {
  const products = [
    { id: 1, name: "blue", price: 2500, description: 'comfortable', image: "/product1.webp" },
    { id: 2, name: "yellow", price: 3500, description: 'comfortable', image: "/product2.webp" },
    { id: 3, name: "red", price: 2000, description: 'comfortable', image: "/product3.webp" },
    { id: 4, name: "purple", price: 2300, description: 'comfortable', image: "/product4.webp" },
    { id: 5, name: "white", price: 3000, description: 'comfortable', image: "/product5.jpg" },
    { id: 6, name: "black", price: 2900, description: 'comfortable', image: "/product6.webp" },
    { id: 7, name: "orange", price: 2700, description: 'comfortable', image: "/product7.jpg" },
  ];

  return (
    <div>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Image
              src={product.image}
              alt={product.name}
              width={300} // Adjust the width as needed
              height={300} // Adjust the height as needed
            />
            <h2>{product.name}</h2>
            <p className="price">Price: ${product.price}</p>
            <p className="description">Description: {product.description}</p>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
