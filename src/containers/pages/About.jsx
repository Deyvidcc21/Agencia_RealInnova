import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layouts"

function About(){
    return(
        <Layout>
            <Navbar />
            <div className="pt-24">
                About
            </div>
            
            <Footer />
        </Layout>
    )
}

export default About