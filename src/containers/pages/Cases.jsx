import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layouts"

function Cases(){
    return(
        <Layout>
            <Navbar />
            <div className="pt-24">
                Cases
            </div>
            
            <Footer />
        </Layout>
    )
}

export default Cases