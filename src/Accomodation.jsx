import Footer from "./footer"
import NavigationBar from "./NavigationBar"
function Accomodation(){
    return(
        <div>
            <NavigationBar/>
            <h1 className="text-center mt-5 ms-3"> Room Details</h1>
            <div className="d-flex">
                <div>
                    <img src="https://hoteldel.com/wp-content/uploads/2021/01/hotel-del-coronado-views-suite-K1TOS1-K1TOJ1-1600x900-1.jpg" alt="Picture" className="w-50 mt-5" />
                </div>
                <div className="w-25">
                    <h4>Specifications</h4>

                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Accomodation