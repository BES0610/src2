import axios from "axios";
import { useEffect, useState } from "react";

const Packs = () => {
    const [packages, setPackages] = useState(null);
    const [isPurchased, setIsPurchased] = useState(null);
    const [purchasedPack, setPurchasedPack] = useState({
        package_id: ""
    });
    useEffect(() => {
       const fetchData =async () =>  {
        let response = await axios.get("https://api.twindix.com/packages");
        setPackages(response.data.payload.data);
    }
    if(!packages) {
        fetchData();
    }
    if(packages) {

        console.log(packages[0])
    }
    }, [packages])
    useEffect(() => {
        if(purchasedPack.package_id) {
            axios.post("https://api.twindix.com/payment/package", purchasedPack, {headers:{
                Authorization: "Bearer " + localStorage.token
            }}).then(res => {
                setIsPurchased("redirecting to paypal to complete payment in 5 seconds")
                setTimeout(()=>{
                    window.location.replace(res.data.payload.redirect)
                }, 5000)
            }).catch(err => console.log(err))

        }
    }, [purchasedPack])
    function handlePackagePurchase(e) {
        e.preventDefault()
        setPurchasedPack({package_id: e.target[0].value})

    }
    return (
            <div className="packsContainer w-100 d-flex  flex-wrap">
                {isPurchased && <div className="alert alert-success position-absolute top-0 m-3">{isPurchased}</div>}
                {packages ? packages.map(paackage => <div className="p-3 m-3 col-3" id={paackage.id}>
                    <form onSubmit={handlePackagePurchase}>
                    <img className="w-100" src="https://picsum.photos/200"/>
                    <h4>{paackage.name}</h4>

                    <h6 className="text-warning">Exams Count: {paackage.exams_count}</h6>
                    <h6 className="text-success">Price: {paackage.price}</h6>
                    <input type="hidden" name="package_id" value={paackage.id} />
                    <button type="submit"  className="btn btn-success">Buy Now</button>

                    </form>
                </div>) : <div className="w-100 h-100 position-absolute top-0 a bg-success d-flex justify-content-center align-items-center"><span className="spinner-border"></span></div>}
            </div>
    )
}
export default Packs;