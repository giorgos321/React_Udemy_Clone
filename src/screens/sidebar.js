import React,{ useState} from "react";
import logo from "../ui/logo-coral.svg"
import {NavLink} from "react-router-dom"


function Sidebar(){

    const [nav,setNav] = useState([
        {label:"Home",slug:"/", icon: "icon-home"},
        {label:"Discover",slug:"discover",icon:"icon-location"},
        {label:"Categories",slug:"categories",icon:"icon-drawer"},
        {label:"My Courses",slug:"mycourses",icon:"icon-briefcase"}
    ])

    const [currentPge, setCurrentPage] = useState("/");

    var navigation = [];
    for(let i=0;i < nav.length;i++){
        navigation.push(
            <li key={"nav-"+i+"-"+nav[i].slug}>
                    <NavLink to={nav[i].slug}  className= {"aic link noul flex c333" + (currentPge === nav[i].slug ? " on":"")} >
                        <div className= {"ico s20 " + nav[i].icon} />
                        <h2 className="lbl s20">{nav[i].label}</h2>
                    </NavLink>
                </li>
        );
    }
    console.log(global.fire)

    return(
        <div className='sidebar rel'>

            <a href="#" className="logo bl">
                <img src= {logo} className="bl" />
            </a>

            <ul className="nav">
                {navigation}
            </ul>
        


                <div className="updated-course flex aic">
                    <div className="icon-bookmark ico cfff" />
                    <div className="lbl s15 fontb c333">
                            Updated Courses
                            <h2 className="author s13 c777">by George</h2>

                    </div>
                    

                    

                </div>
                <div className="stats  flex">
                    <div className="stats-box   flex">
                        <div className="ico ico-fire s24 icon-fire" />
                            <h2 className="val s15 c333 fontb">1800</h2>
                            <h2 className="lbl s13 c777">points</h2>
                    </div>

                    <div className="stats-box flex">
                        <div className="ico ico-target s24 icon-target" />
                            <h2 className="val s15 c333 fontb">56,3%</h2>
                            <h2 className="lbl s13 c777">completed</h2>
                    </div>
                </div>

                <div className="me flex aic">
                    {global.fire.ID ? <React.Fragment><div className="photo cfff s24" >
                        <img src="https://placeimg.com/100/100/people" className="bl"></img>
                        </div>

                    <div className="lbl s15 fontb c333">
                            George Lame
                            <h2 className="uname s13 c777">@georgelame</h2>
                            

                    </div>
                    </React.Fragment>
                    :
                    <NavLink to={"oauth"}  className= "aic link noul flex c333">
                        <div className= {"ico s20 icon-user"} />
                        <h2 className="lbl s20">Sing In</h2>
                    </NavLink>
                    }
                    </div>
        

        
        </div>
    )
}


export default Sidebar;