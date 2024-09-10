import NavigationBar from "./NavigationBar"
import HotelList from "./hotelList"
import Footer from "./footer"
function Home(){
    return(
        <div>
            <NavigationBar></NavigationBar>
            <div className="Main-search-cntainer">
                <div className="search-cntainer">
                    <input type="text" placeholder="Search hotel listing" className="Searrch-input" />
                    <button className="Search-btton">Search</button>
                </div>
            </div>
            <div>
                <HotelList></HotelList>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}
export default Home