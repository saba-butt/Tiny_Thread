import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <div>
      <header className="header" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 20px", backgroundColor: "#333" }} >
        <Image src="/logo.webp" alt="logo" width={50} height={50} />
        <h1 className="logo">Tiny Thread</h1>
        <nav>
          
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/Products">Products</Link>
          <Link href="/Contact">Contact</Link>
          {/* <FaShoppingCart style={{ color: "purple", fontSize: "25px" }} /> */}
        </nav>
      </header>
      
    </div>
  );
}

export default Header;
