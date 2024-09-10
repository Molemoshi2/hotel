import logo from './assets/logo.png'
function NavigationBar(){
    return(
        <div className='navigation'>
            <div>
            <img src={logo} alt="picture"  className='logo'/>
            </div>
            <div >
                <ol className='list-items'> 
                    <a href=""><li>Menu</li></a>
                    <a href=""><li>About</li></a>
                    <a href=""><li>Booking</li></a>
                    <a href=""><li>Services</li></a>
                </ol>
            </div>
            <div>
                <button className='button'>Log in</button>
                <button className='button'>Sign up</button>
            </div>
        
        </div>
    )
}
export default NavigationBar