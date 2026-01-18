import { useParams } from "react-router-dom"


export default  function User() {

    const {id} = useParams();
    return (
        <div className="bg-orange-400 text-purple text-center text-3xl p-4">User: {id}</div>
    )
}
