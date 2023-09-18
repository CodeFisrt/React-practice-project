import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import LeftSideBar from './components/LeftSideBar';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
       <Header/>
       <section>
          <LeftSideBar/>
          <Body/>
       </section>
       <Footer/>
    </div>
  );
}

export default App;
