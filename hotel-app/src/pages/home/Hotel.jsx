import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import NavBar from "../../components/navbar/NavBar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css"; 

export default function Hotel() {
  return (
    <div>
    <NavBar/>
    <Header/>
    <div className="homeContainer">
    <Featured/>
    <h1 className="homeTitle">Browse by property type</h1>
    <PropertyList/>
    <h1 className="homeTitle">Homes guests love</h1>
    <FeaturedProperties/>
    <MailList/>
    <Footer/>
    </div>
    </div>
  )
}
