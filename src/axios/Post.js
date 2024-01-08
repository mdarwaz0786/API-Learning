import React, { useState } from "react";
import axios from "axios";

const Post = () => {
    const [inputData, setInputData] = useState();

    const handleChange = (event) => {
        setInputData(
            {
                ...inputData,
                [event.target.name]: event.target.value,
            },
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users", inputData)
            .then((response) => {
                console.log("Data submitted successfully", response.data);
            })
            .catch((error) => {
                console.error("Error while submitting data", error);
            })
            .finally(() => {
                console.log("Finally will always run");
            });
    };

    return (
        <div>
            <h2>Post Method</h2>
            <form>
                <label>First Name</label><br />
                <input type="text" name="FirstName" onChange={handleChange} /><br />
                <label>Last Name</label><br />
                <input type="text" name="LastName" onChange={handleChange} /> <br />
                <button onClick={handleSubmit}>Submit</button><br />
            </form>
        </div>
    );
};

export default Post;
