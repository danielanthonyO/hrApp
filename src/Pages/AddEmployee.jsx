import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddEmployee.css";

const AddEmployee = ({ onAddEmployee }) => {
const [formData, setFormData] = useState({
name: "",
title: "",
salary: "",
phone: "",
email: "",
animal: "",
startDate: "",
location: "",
department: "",
skills: "",
});

const navigate = useNavigate();

const handleChange = (e) => {
const { name, value } = e.target;
setFormData((prev) => ({ ...prev, [name]: value }));
};

const handleSubmit = (e) => {
e.preventDefault();
const newEmployee = {
    ...formData,
    id: Date.now(),
    salary: parseInt(formData.salary),
    skills: formData.skills.split(",").map(skill => skill.trim()),
};
onAddEmployee(newEmployee);
navigate("/");
};

return (
<section>
    <h1>Add New Employee</h1>
    <form onSubmit={handleSubmit}>
    {Object.keys(formData).map((field) => (
        <div key={field}>
        <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
        <input
            type="text"
            name={field}
            value={formData[field]}
            onChange={handleChange}
            required
        />
        </div>
    ))}
    <button type="submit">Add Employee</button>
    </form>
</section>
);
};

export default AddEmployee;