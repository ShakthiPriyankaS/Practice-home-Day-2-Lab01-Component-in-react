
import './App.css';
import Book from './Book';

function App() {
  return (
    <div className="App">
      <h1>Favourite books of mine</h1>
      <Book name="Harry Potter and the philosopher stone" author="J.K.Rowling"></Book>
     <Book name="ponniyin selvan" author="amarar kalki"></Book>
      <Book name="The Lord of the Rings" author="J.R.R.Tolkien"></Book>
     <Book name="Kite Runner" author="Khaled Hosseini"></Book>
     <Book name="To Kill a Mockingbird" author="Harper Lee"></Book>
    </div>
  )
}

export default App;
