// Home page
import Hero from "../components/Hello/Hero"
import NewCollections from "../components/NewCollections/NewCollections"
import NewsLetter from "../components/NewsLetter/NewsLetter"
import Offers from "../components/Offers/Offers"
import Popular from "../components/Popular/Popular"
import LoginSignup from "./LoginSignup"

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
      <LoginSignup/>
    </div>
  )
}

export default Shop
