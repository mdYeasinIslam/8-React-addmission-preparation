 
import './App.css';
import BookList from './Component/BookList/BookList';
import Footer from './Component/Footer/Footer';
import Navigation from './Component/Navigation/Navigation';


function App() {
  return (
    <div className="ms-5 me-5">
      <Navigation></Navigation>
      <BookList></BookList>
    <Footer></Footer>
    </div>
  );
}

export default App;
