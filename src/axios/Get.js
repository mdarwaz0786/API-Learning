import React, { useEffect, useState } from "react";
import axios from "axios";

const Get = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                console.log("Data fetched successfully", response.data);
                setUserData(response.data);
            })
            .catch((error) => {
                console.log("Error while fetching data", error);
            })
            .finally(() => {
                console.log("Finally will always run");
            });
    }, []);

    return (
        <>
            <h2>Get Method</h2>
            <div>
                {
                    userData.map((data) => {
                        return (
                            <div key={data.id} className="user-data">
                                <p>Name: {data.name}</p>
                                <p>Email: {data.email}</p>
                                <p>Phone: {data.phone}</p>
                                <p>City: {data.address.city}</p>
                                <p>Location: {data.address.geo.lat}, {data.address.geo.lng}</p>
                                <p>Company: {data.company.name}</p><br />
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
};

export default Get;
