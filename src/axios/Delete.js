import React, { useState } from "react";
import axios from "axios";

const Delete = () => {
    const [inputData, setInputData] = useState();

    const handleChange = (event) => {
        setInputData(
            {
                ...inputData,
                [event.target.name]: event.target.value,
            },
        );
    };

    const handleDelete = (event) => {
        event.preventDefault();
        axios.delete("https://jsonplaceholder.typicode.com/users/1")
            .then((response) => {
                console.log("Data Deleted Successfully", response.data);
            })
            .catch((error) => {
                console.error("Error while deleting data", error);
            })
            .finally(() => {
                console.log("Finally will always run");
            });
    };

    return (
        <div>
            <h2>Delete Method</h2>
            <form>
                <label>First Name</label><br />
                <input type="text" name="firstName" onChange={handleChange} /><br />
                <label>Last Name</label><br />
                <input type="text" name="lastName" onChange={handleChange} /> <br />
                <button onClick={handleDelete}>Delete</button><br />
            </form>
        </div>
    );
};

export default Delete;
