import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import PersonList from "./Persons/PersonList";

const App = () => {
  return (
    <>
      <Header name="Daniel Anthony" />
      <main>
        <PersonList />
      </main>
      <Footer year={2025} />
    </>
  );
};

export default App;



