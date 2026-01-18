// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

 type GithubUser = {
    age: number;
    }

export default function Github() {

    const data = useLoaderData() as GithubUser;

    // const [data, setData] = useState([]);

    // useEffect(()=> {
    //     fetch("https://dummyjson.com/users/1")
    //     .then(res => res.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // },[])

    // const data = useLoaderData();

    // console.log("data: ", data)

    return (
        <div className="bg-amber-700 text-center text-3xl">Github: {data.age}</div>
    )
}


