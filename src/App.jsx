import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import PersonList from "./Persons/PersonList";
import About from "./Pages/About";
import AddEmployee from "./Pages/AddEmployee";
import { employees as initialEmployees } from "./Persons/personData";

const App = () => {
  const [employees, setEmployees] = useState(initialEmployees);

  const handleAddEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  return (
    <Router>
      <Header name="Daniel Anthony" />
      <main>
        <Routes>
          <Route path="/" element={<PersonList employees={employees} />} />
          <Route path="/about" element={<About />} />
          <Route path="/add" element={<AddEmployee onAddEmployee={handleAddEmployee} />} />
        </Routes>
      </main>
      <Footer year={2025} />
    </Router>
  );
};

export default App;







