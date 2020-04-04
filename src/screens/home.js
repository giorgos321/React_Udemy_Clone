import React, { useState } from "react";
import Course1 from "../ui/course_photo.png";
import Course2 from "../ui/course-image-2.png";



function HomePage(){


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
    ])

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
            <a href="#" className="course rel" key={"popular-course-" + i }>
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
            {/** Courses*/}
            <div className="section section-b rel">
                <h2 className="title s24 fontb">Popular <span className ="fontn">This Week</span></h2>

                <div className="courses rel flex">
                    {courseList}

                </div>
            </div>



        </div>
    )
}

export default HomePage;