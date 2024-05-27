import { NavLink } from "react-router-dom";

const LINKS = [
  { id: 1, url: "/", text: "home" },
  { id: 1, url: "about", text: "about" },
  { id: 1, url: "products", text: "products" },
  { id: 1, url: "cart", text: "cart" },
  { id: 1, url: "checkout", text: "checkout" },
  { id: 1, url: "orders", text: "orders" },
];

function NavLinks() {
  return (
    <>
      {LINKS.map((link) => (
        <li key={link.id}>
          <NavLink to={link.url} className="capitalize">
            {link.text}
          </NavLink>
        </li>
      ))}
    </>
  );
}

export default NavLinks;
