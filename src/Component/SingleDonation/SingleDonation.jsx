import { Link } from "react-router-dom";

export default function SingleDonation({ donation }) {
    const { id,Title, Picture, Category, CardBackgroundColor, ButtonBgColor, TextColor } = donation;
    return (
        <div className="">
            <Link to={`/donation/${id}`}>
                <button>
                    <div className={`card  card-compact ${CardBackgroundColor}   shadow-xl`}>
                        <figure><img src={Picture} alt="Shoes" /></figure>
                        <div className={`card-body ${TextColor}`}>
                            <button className={`card-title ${ButtonBgColor} w-28 items-center  justify-center p-1 rounded-lg`}>{Category}</button>
                            <p className="text-left text-2xl  font-bold">{Title}</p>
                        </div>
                    </div>
                </button>
            </Link>
        </div>
    )
}