import './index.css';

function NavBar(){
    return(
        <div className='Navbar'>
            <div className='nav-container'>
                <div className='nav-box mail'>
                    <a href='https://mail.yahoo.com/d/folders/1'><i class="fa fa-envelope-o" aria-hidden="true"></i></a>
                </div>
                <div className='nav-box linkedin'>
                   <a href='https://www.linkedin.com/'><i class="fa fa-linkedin-square"></i></a>
                </div>
                <div className='nav-box github'>
                   <a href='https://github.com/Glenn409/'><i class="fa fa-github"></i></a>
                </div>
                <div className='nav-box youtube'>
                    <a href='https://www.youtube.com/'><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
                </div>
                <div className='nav-box twitter'>
                    <a href='https://twitter.com/home'><i class="fa fa-twitter"></i></a>
                </div>
                <div className='nav-box btc'>
                    <a href='https://pro.coinbase.com/'><i class="fa fa-btc"></i></a>
                </div>

            </div>
        </div>
    )
}

export default NavBar;