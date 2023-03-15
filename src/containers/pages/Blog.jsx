import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layouts"

function Blog(){
    return(
        <Layout>
            <Navbar />
            <div className="pt-24">
                Blog
            </div>
            
            <Footer />
        </Layout>
    )
}

export default Blog