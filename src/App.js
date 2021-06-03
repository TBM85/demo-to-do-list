import './App.css';
import AddForm from './components/AddForm/AddForm';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <AddForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
