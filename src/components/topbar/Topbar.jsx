import './topbar.scss'
import {LocalPizza} from '@material-ui/icons'

export default function Topbar({menuOpen,setMenuOpen}) {
  return(
      <div className={'topbar ' + (menuOpen && 'active')}>
        <div className="wrapper">
          <div className="left">
            <a href='#intro' className='logo'>MyPizza.</a>
          </div>
          <div className="center">
            <LocalPizza/>
          </div>
          <div className="right">
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </div>
      </div>
  );
}
