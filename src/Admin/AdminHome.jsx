import NavigationBar from "../NavigationBar"
import Footer from "../footer"
function AdminHome(){
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
                <h3>Hotel list</h3>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}
export default AdminHome