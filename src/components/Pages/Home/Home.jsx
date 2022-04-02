import HomePage from './Sections/HomePage'
import Selection from './Sections/Selection'
import BestHouses from './Sections/BestHouses'
import Facts from './Sections/Facts'
import Action from './Sections/Action'
import Footer from './Sections/Footer'

const Home = () => {
  return (
    <main>
      <HomePage />
      <BestHouses />
      <Facts />
      <Selection />
      <Action />
      <Footer />
    </main>
  )
}

export default Home