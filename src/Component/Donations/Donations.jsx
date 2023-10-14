import { useEffect, useState } from "react"
import SingleDonation from "../SingleDonation/SingleDonation";
import Donation from "../Donation/Donation";

export default function Donations() {

    const [donations,setdonations]=useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setdonations(data))
    },[])

    return (
        <div>
            
            <div className="grid md:grid-cols-4 mt-9 gap-6 mx-14">
                {
                    donations.map(donation=><SingleDonation key={donation.id} donation={donation}></SingleDonation>)
                }
            </div>
            <div>
                {
                    donations.map(donation=><Donation donation={donation}></Donation>)
                }
            </div>
        </div>
    )
}