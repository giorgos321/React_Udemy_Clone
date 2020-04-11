import React, { useState,useEffect } from "react";
import Course1 from "../ui/course_photo.png";
import Course2 from "../ui/course-image-2.png";
import {NavLink} from "react-router-dom"



function HomePage(){


    useEffect(()=>{
        document.title = "Home";
    })


    const [popularCourse,setPopularCourse] = useState([
        {
            ID:1,
            Title:"Learning How to Create Beautiful Scenes in Illustrator in 60 minutes",
            tutor:{
                ID:1,
                name:"Lana Marandina",
                username:"@lanamara",
                dp: "https://placeimg.com/100/100/people?tutor-" +1,

            },
            duration:"82 min",
            poster: Course1
        },
        {
            ID:2,
            Title:"Creating a beautiful Portrait Illustration. Learning new technics and trics",
            tutor:{
                ID:2,
                name:"George Lame",
                username:"@georgelame",
                dp: "https://placeimg.com/100/100/people?tutor-" +2,

            },
            duration:"1hr 30 min",
            poster: Course2
        }
    ]);

    const [topTutors,setTopTutors] = useState([
        {  
        ID:1,
        name:"Lana Marandina",
        username:"@lanamara",
        dp: "https://placeimg.com/100/100/people?tutors-" +1,   
        },
        {  
        ID:2,
        name:"Lana Marandina",
        username:"@lanamara",
        dp: "https://placeimg.com/100/100/people?tutors-" +2,   
        },
        {  
        ID:3,
        name:"Lana Marandina",
        username:"@lanamara",
        dp: "https://placeimg.com/100/100/people?tutors-" +3,   
        },
        {  
        ID:4,
        name:"Lana Marandina",
        username:"@lanamara",
        dp: "https://placeimg.com/100/100/people?tutors-" +4,   
        },
        {  
        ID:5,
        name:"Lana Marandina",
        username:"@lanamara",
        dp: "https://placeimg.com/100/100/people?tutors-" +5,   
        },
        {  
        ID:6,
        name:"Lana Marandina",
        username:"@lanamara",
        dp: "https://placeimg.com/100/100/people?tutors-" +6,   
        }
        
    ]);

    /**Tutor List */
    var tutorList = [];
    for(let i = 0;i<6;i++){
        tutorList.push(
            <button className="tutor rel" key={"tutor-live-" + i }>
                <img src={"https://placeimg.com/100/100/people?" + i} className="bl" />


            </button>
        )

    }
    /**Course List */
    var courseList = [];
    for(let i = 0;i<popularCourse.length;i++){
        courseList.push(
            <NavLink to={"/course/" + popularCourse[i].ID} className="course rel" key={"popular-course-" + i }>
                <div className="block rel" style={{
                    background:"#e2e2e2 url("+ popularCourse[i].poster +") no-repeat center"
                }}>
                    <div className="user abs aic flex">
                        <div className="pic">
                            <img src={popularCourse[i].tutor.dp} className="bl" />
                            </div>
                            <div className="meta rel">
                                <h2 className="s15 name fontb cfff">{popularCourse[i].tutor.name}</h2>
                                <h2 className="s13 uname fontn cfff">{popularCourse[i].tutor.username}</h2>
                            </div>
                            
                            
                    </div>
                    <div className="dura abs fontb cfff s15">
                        <h2 className="fontb cfff s13">{popularCourse[i].duration}</h2>
                        </div>
                    
                        <div className="course-title abs fontb cfff s15">
                        <h2 className="fontn cfff s15">{popularCourse[i].Title}</h2>
                        </div>

                </div>


            </NavLink>
        )

    }
    /** Top tutor List */
    var ToptutorList=[];
    for(let i = 0;i<topTutors.length;i++){
        ToptutorList.push(
        <a href="#" className="user-block rel noul" key={"top-tutors-" + i }>        
            <div className="user aic flex">
                            <div className="pic">
                                <img src={topTutors[i].dp} className="bl" />
                                </div>
                                <div className="meta rel">
                                    <h2 className="s15 name fontb c333">{topTutors[i].name}</h2>
                                    <h2 className="s13 uname fontn c333">{topTutors[i].username}</h2>
                                </div>
                                </div>
                            </a>
        )
    }
    
    return(
        
        <div className="home-page rel">


            {/** Tutors Live now*/}
            <div className="section rel">
                <h2 className="title s24 fontb">Streming <span className ="fontn">Now</span></h2>

                <div className="tutors rel flex">
                    {tutorList}

                </div>
            </div>
            {/** Popular Courses*/}
            <div className="section section-b rel">
                <h2 className="title s24 fontb">Popular <span className ="fontn">This Week</span></h2>

                <div className="courses rel flex">
                    {courseList}

                </div>
            </div>

            {/** Top tutors*/}
            <div className="section section-b rel">
                <h2 className="title s24 fontb">Top <span className ="fontn">Tutors</span></h2>

                <div className="top-tutors rel flex">
                    {ToptutorList}

                </div>
            </div>
        </div>

    )
}

export default HomePage;