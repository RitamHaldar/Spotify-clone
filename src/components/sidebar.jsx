import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="menu">
        <div className="logo">
          <i class="fa-brands fa-spotify"></i> Spotify
        </div>
        <ul className="links">
          <li className='icons'><a href="/action" className="link"><i class="fa-solid fa-house"></i> <span className='text'>Home</span></a></li>
          <li className="icons"><a href="/action" className="link" id='search/'><i class="fa-solid fa-magnifying-glass"></i><span className='text s'>Search</span></a></li>
        </ul>
      </div>
      <div className="library">
        <div className="icons2">
          <header>
            <button id='libraryicon'><img src="./library_icon.png" /> Your Library</button>
            <button id='plus'><i class="fa-solid fa-plus"></i></button>
          </header>
        </div>
        <div className="menus">
          <section id='sec1' className='sec'>
          <h4>Create your first playlist</h4>
          <h5>It’s easy, we’ll help you</h5>
          <button className='createplaylist'>Create playlist</button>
          </section>
          <section id='sec2' className='sec'>
          <h4>Let’s find some podcasts to follow</h4>
          <h5>We’ll keep you updated on new episodes</h5>
          <button className='createplaylist'>Browse podcasts</button>
          </section>
        </div>
        <div className="legal">
          <a href="" className="link1">Legal</a>
          <a href="" className="link2">Safety & Privacy Center</a>
          <a href="" className="link3">Privacy Policy</a>
          <a href="" className="link4">Cookies</a>
          <a href="" className="link5">About Ads</a>
          <a href="" className="link6">Accessibility</a>
          <div className='link7'><a href="" className="link7">Cookies</a></div>
        </div>
        <div className="lang">
          <button><i class="fa-solid fa-globe"></i> English</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
