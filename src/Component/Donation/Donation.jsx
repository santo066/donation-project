import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom"
import { getStoredDonationApplication } from "../../Uitility/Localstorage";

export default function Donation() {

    // const [appliedDonation, setappliedDonation] = useState([]);

    // const donationData = useLoaderData();
    // console.log(donationData)

    // useEffect(() => {
    //     const storedDonationId = getStoredDonationApplication();

    //     if (storedDonationId.length > 0) {  
    //         // const donationApplied = donationData.filter(donation => storedDonationId.includes(donation.id))
    //         // setappliedDonation(donationApplied);

    //         const donationApplied=[];

    //         for(const id of storedDonationId){
    //             const donation=donationData.find(  donation=> donation.id === id);
    //             if(donation){
    //                 donationApplied.push(donation);
    //             }
    //         }

    //     }
    // }, [])



    const donationAllData = useLoaderData();
    const [appliedDonation, setappliedDonation] = useState([])
    useEffect(() => {



        const storedDonationId = getStoredDonationApplication();
        if (donationAllData) {
            const donationApplied = donationAllData.filter(donation => storedDonationId.includes(donation.id))
            console.log(donationApplied)
            setappliedDonation(donationApplied)
        }

    }, [donationAllData])



    return (
        <div>
            
            <div className="grid md:grid-cols-2 mx-20 gap-3">
                {
                    appliedDonation.map(donation => <div key={donation.id}>
                        <div>
                            <div className="card lg:card-side bg-slate-400 shadow-xl">
                                <figure><img src={donation.Picture} alt="Album" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{donation.Title}</h2>
                                    <p className="font-bold">{donation.Price}</p>
                                    <div className="card-actions justify-start">
                                        <button className="btn btn-primary">View Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}