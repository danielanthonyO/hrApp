import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Box from "./Box";

const App = () => {
  return (
    <>
      <Header name="Daniel Olugbenga" />
      <main>
      <h1>HR REACT DEMO APP</h1>
    <div className="boxes">
    <Box
      fullName="Chinedu Okafor"
      title="Software Engineer"
      age="30"
      myAnimal="dog"
    />
    <Box
      fullName="Aisha Bello"
      title="Product Manager"
      age="45"
      myAnimal="bear"
    />
    <Box
      fullName="Tunde Bakare"
      title="Web Designer"
      age="32"
      myAnimal="wolf"
    />
    <Box
      fullName="Ngozi Umeh"
      title="Software Developer"
      age="38"
      myAnimal="cat"
    />
    <Box
      fullName="Babatunde Ajayi"
      title="Product Owner"
      age="29"
      myAnimal="deer"
    />
    <Box
      fullName="Funmi Adeyemi"
      title="Software Architect"
      age="41"
      myAnimal="dog"
    />
  </div>
</main>
      <Footer year={2025} />
    </>
  );
};

export default App;

