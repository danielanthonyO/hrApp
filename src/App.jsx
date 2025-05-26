import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Person from "./Person";

const App = () => {
  return (
    <>
      <Header name="Daniel Anthony" />
      <main>
      <h1>HR REACT DEMO APP</h1>
    <div className="boxes">
          <Person
            name="Chinedu Okafor"
            title="Software Engineer"
            salary="250000"
            phone="0803-123-4567"
            email="okafor@net.com"
            animal="dog"
          />
          <Person
            name="Aisha Bello"
            title="Product Manager"
            salary="300000"
            phone="0802-456-7890"
            email="bello@net.com"
            animal="bear"
          />
          <Person
            name="Tunde Bakare"
            title="Web Designer"
            salary="220000"
            phone="0812-987-6543"
            email="bakare@net.com"
            animal="wolf"
          />
          <Person
            name="Ngozi Umeh"
            title="Software Developer"
            salary="270000"
            phone="0703-333-4444"
            email="umeh@net.com"
            animal="cat"
          />
          <Person
            name="Babatunde Ajayi"
            title="Product Owner"
            salary="310000"
            phone="0901-111-2222"
            email="ajayi@net.com"
            animal="deer"
          />
          <Person
            name="Funmi Adeyemi"
            title="Software Architect"
            salary="350000"
            phone="0806-222-3333"
            email="adeyemi@net.com"
            animal="dog"
          />
  </div>
</main>
      <Footer year={2025} />
    </>
  );
};

export default App;

