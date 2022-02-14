import './navbarlist.scss';

export default function Navbarlist({menuOpen,setMenuOpen}) {
  return(
      <div className={"navbarlist " + (menuOpen && "active")}>
          <ul onClick={()=>setMenuOpen(false)}>
              <li>
                  <a href="#intro">Home</a> 
              </li>
              <li>
                  <a href="#menu">Menu</a> 
              </li>
              <li>
                  <a href="#deals">Deals</a> 
              </li>
              <li>
                  <a href="#reviews">Reviews</a> 
              </li>
              <li>
                  <a href="#contact">Contact</a> 
              </li>
          </ul>
      </div>
  );
}
