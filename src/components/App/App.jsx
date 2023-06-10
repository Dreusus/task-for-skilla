import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Main from '../Main/Main'

const App = () => {
  return (
    <>
      <Sidebar />
      <div className="wrapper">
        <Header />
        <Main />
      </div>

    </>
  )
}

export default App;