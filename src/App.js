import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import '../src/components/styles.css';
import notes from "./notes"

function App() {
  return (
    <div className="App">
     <Header />


      {notes.map((noteItems) =>{
        return(
          <Note
            key= {noteItems.key}
            title = {noteItems.title}
            content = {noteItems.content}
          />
        );
      })}
     

     <Footer />
    </div>
  );
}

export default App;
