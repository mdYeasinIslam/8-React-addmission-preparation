
import './App.css';
import BookList from './Component/BookList/BookList';
import Navigation from './Component/Navigation/Navigation';

function App() {
  return (
    <div className="ms-5 me-5">
      <Navigation></Navigation>
      <BookList></BookList>
    </div>
  );
}

export default App;
