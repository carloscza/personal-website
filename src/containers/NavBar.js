import "../styles/HomePage.css";

export default function NavBar() 
{
  return (
    <section id="navbar">
      <nav>
        <ul className="nav-list">
          <li><a id="nav-link" href="#">NAV</a></li>
          <li><a id="nav-link" href="#">CONTACT</a></li>
        </ul>
      </nav>
    </section>
  );
}
