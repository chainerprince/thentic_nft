import {Services,Footer,Loader,Transactions,Navbar,Welcome} from './components/index'

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="main">
        <Navbar/>
        <Welcome/>
      </div>
      <Services/>
      <Transactions/>
      <Footer/>
    </div>
  )
}

export default App
