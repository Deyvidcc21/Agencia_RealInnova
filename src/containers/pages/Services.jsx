import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layouts"

function Services(){
    return(
        <Layout>
            <Navbar />
            <div className="pt-24">
                Services
            </div>
            
            <Footer />
        </Layout>
    )
}

export default Services