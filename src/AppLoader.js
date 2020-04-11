import React, {useState,useEffect} from "react";
import AppContext from "./AppContext";
import logo from "./ui/logo-coral.svg";
import {Route,NavLink,HashRouter} from "react-router-dom";
import './css/App.css';
import './css/props.css';
import './css/uifont.css';

//Screen

import Sidebar from "./screens/sidebar"
import HomePage from './screens/home';
import Rightbar from './screens/rightbar';
import CoursePage from './screens/course';
import MyCoursesPage from './screens/mycourses';
import CategoriesPage from './screens/categories';

import DiscoverPage from "./screens/discover";
import AccountPage from "./screens/oauth";
import * as fire_base from "firebase";

global.firebase = fire_base
global.fire ={
    ID: null
};
var firebaseConfig = {
  apiKey: "AIzaSyCd_wP3vRh5PeuOnj4ecm0NK12Z7b8wRaQ",
  authDomain: "udemyclone-553c9.firebaseapp.com",
  databaseURL: "https://udemyclone-553c9.firebaseio.com",
  projectId: "udemyclone-553c9",
  storageBucket: "udemyclone-553c9.appspot.com",
  messagingSenderId: "383844324700",
  appId: "1:383844324700:web:e28b3dc0c3b7849b0f1d99"
};

// Initialize Firebase
global.firebase.initializeApp(firebaseConfig);



export default function AppLoader(){

    const [isFireUser,setisFireUser] = useState(false);

    const initFirebase = async (context) => {
        global.firebase.auth().onAuthStateChanged((user)=>{
          if(user){
              console.log("You are signed in...")
              setisFireUser(false);
          }else{
            console.log("You are guest...")
            setisFireUser(false);
            setTimeout(() =>{
            context.setAppLoaded(true);
            },1500);
            
          }
        });
      }


    const splash = (context) =>{
        return(
            <div className="App flex" >
                <div className="splash abs abc">
                    <img src= {logo} className="bl" />
                </div>
            </div>
        )
    }

    const loadApp = async(context) =>{
        await initFirebase(context);
    }
    return(
        <AppContext.Consumer>
            {
                context =>{
                    return (
                        context.appLoaded() ?
                        <div className="App flex">
                            <HashRouter>
                                <Sidebar />
                            
                                    <div className="app-content">
                                        <Route path="/" exact component={HomePage} />
                                        <Route path="/course/:courseid" component={CoursePage} />
                                        <Route path="/discover" component={DiscoverPage} />
                                        <Route path="/categories" component={CategoriesPage} />
                                        <Route path="/mycourses" component={MyCoursesPage} />
                                        <Route path="/oauth" component={AccountPage} />
                                    </div>
                            </HashRouter>
                        </div>
                        :
                        <AppContext.Consumer>
                            {
                                context=>{
                                    loadApp(context);
                                    return(splash(context))
                                }
                            }
                        </AppContext.Consumer>
                    )
                }
            }
        </AppContext.Consumer>
    )


}