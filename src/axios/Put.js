import React, { useState } from "react";
import axios from "axios";

const Put = () => {
    const [inputData, setInputData] = useState();

    const handleChange = (event) => {
        setInputData(
            {
                ...inputData,
                [event.target.name]: event.target.value,
            },
        );
    };

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put("https://jsonplaceholder.typicode.com/users/1", inputData)
            .then((response) => {
                console.log("Data updated successfully", response.data);
            })
            .catch((error) => {
                console.error("Error while updating data", error);
            })
            .finally(() => {
                console.log("Finally will always run");
            });
    };

    return (
        <div>
            <h2>Put Method</h2>
            <form>
                <label>First Name</label><br />
                <input type="text" name="FirstName" onChange={handleChange} /><br />
                <label>Last Name</label><br />
                <input type="text" name="LastName" onChange={handleChange} /> <br />
                <button onClick={handleUpdate}>Update</button><br />
            </form>
        </div>
    );
};

export default Put;
