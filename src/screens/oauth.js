import React ,{useState,useEffect}from "react";
import countriesList from "./countries"



function AccountPage(props){

    




    const [view,setView] = useState("numview");

    return(
        <div className="oauth-view rel">
            <h1 className="s18 fontb">Sing in</h1>
            <h1 className="s15 fontn">Enter your phone and we will send one time verification code </h1>

            <select className="iput s15 fontb">
                {
                    countriesList.map(e => {
                        return(
                            <option value={e.dial_code}>{e.name}</option>
                        )
                    })
                }
            </select>


        </div>

    )

}
export default AccountPage;