import CartWidget from "../../common/cartWidget/CartWidget";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "steelblue",
        padding: "8px",
        alignItems: "center",
      }}
    >
      <Link to="/">
      <h2>Angel Barber</h2>
        <img
          src=""
          alt=""
          style={{
            width: "100px",
          }}
        />
      </Link>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          listStyle: "none",
        }}
      >
        <Link to="/">Todas</Link>
        <Link to="/category/Maquinas">Maquinas</Link>
        <Link to="/category/Tijeras">Tijeras</Link>
        <Link to="/category/Accesorios">Accesorios</Link>
      </ul>
      <Link to="/cart" className="">
        <CartWidget />
      </Link>
    </div>
  );
};

export default Navbar;
