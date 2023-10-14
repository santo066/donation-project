import { useLoaderData, useParams } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonationApplication } from "../../Uitility/Localstorage";

export default function Donationdetails() {

    const donationData = useLoaderData();
    const { id } = useParams();
    const donation = donationData.find(donation => donation.id === id);
    console.log(donation)

    const hendelDonation=()=>{
        saveDonationApplication(id);
        toast('Donation SuccessFully');
    }



    return (
        <div>
            
            <div className="mx-28 mt-5">
                <div className={` shadow-xl ${donation.CardBackgroundColor}`}>
                    
                        <img className="w-full relative h-[700px]" src={donation.Picture} alt="Shoes" />
                        <div className="bg-slate-700 w-[1313px] h-32  mx-28 left-0 absolute bottom-0 opacity-40"></div>
                        <button onClick={hendelDonation} className={`absolute mb-11 bottom-0 w-36 p-1 rounded-md mt-6 ml-44 ${donation.ButtonBgColor} ${donation.TextColor} left-0 font-bold`}>Donated{donation.Price}</button>
                    
                    <div className="card-body">
                        <h2 className="card-title text-4xl">{donation.Category}</h2>
                        <p>{donation.Description}</p>
                        
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    )
} 