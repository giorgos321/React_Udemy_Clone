import React, { useState } from "react";
import Course1 from "../ui/course_photo.png";
import Course2 from "../ui/course-image-2.png";



function CoursePage(props){


    const [course,setCourse] = useState(
        {
            ID:1,
            Title:"Learning How to Create Beautiful Scenes in Illustrator in 60 minutes",
            about:"In this course I will teach you how to create beautiful illustrations and make them look really good. We're gonna study a lot of cases here, setting your work panel, making some awesome actions and presets for future hope you will get some really useful stuff out of this course. Good Luck to all!",
            tutor:{
                ID:1,
                name:"Lana Marandina",
                username:"@lanamara",
                dp: "https://placeimg.com/100/100/people?tutor-" +1,

            },
            duration:"82 min",
            poster: Course1,

            videos:[
                {
                    ID:1,
                    title:"Introduction",
                    duration:"03 min 24secs"

                },
                {
                    ID:2,
                    title:"Getting Started",
                    duration:"05 min 53secs"

                },
                {
                    ID:3,
                    title:"The Illustration",
                    duration:"62 min 45secs"

                }
            ]
        },
        
    );


    const courseID = props.match.params.courseid;


    var courseVideos=[];
    for(let i=0;i<course.videos.length;i++){
        courseVideos.push(
            <a href="#" className="noul aic flex rel" key={"course-video-"+i}>
                <div className="id s18 fontn cfff">{course.videos[i].ID}</div>
                <div className="meta rel">
                    <h1 className="s15 lbl fontb c333">{course.videos[i].title}</h1>
                    <h1 className="s13 dur fontn c777">{course.videos[i].duration}</h1>
                </div>
            </a>
        );
    };
    

    
    
  
    
    return(
        
        <div className="course-page rel flex">

            <div className="course-info rel">

            

             <div className="tutor rel aic flex">
                        <div className="pic">
                            <img src={course.tutor.dp} className="bl" />
                            </div>
                                <div className="meta rel">
                                    <h2 className="s15 name fontb c333">{course.tutor.name}</h2>
                                    <h2 className="s13 uname fontn c777 ">Course Tutor</h2>
                                </div>
                            </div>
            <div className="course-meta">
                    <h2 className="s24 title fontb c333">{course.Title}</h2>
                    <p className="s18 about fontn c777" dangerouslySetInnerHTML={{ __html: course.about}} />

                    <div className="section section-b rel">
                        <h2 className="title s24 fontb">Course <span className ="fontn">Achievements</span></h2>

                        <div className="course-stats  flex">
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
                            
                            <div className="stats-box flex">
                                <div className="ico ico-target s24 icon-checkbox-checked" />
                                    <h2 className="val s15 c333 fontb">+26</h2>
                                    <h2 className="lbl s13 c777">level</h2>
                                </div>
                              
                        </div>  
                    </div>
                </div>

                <div className="section section-b rel">
                        <h2 className="title s24 fontb">Course <span className ="fontn">Details</span></h2>

                        <div className="course-videos  flex">
                            {courseVideos}
                              
                        </div>  
                    </div>
                
                    <div className="course-preview rel">

                        <div className="player rel">

                        </div>

                    </div>
                
                    </div>

                    <div className="course-preview rel">

                            <div className="player rel">
                                <video poster={course.poster} />
                                <div className="ctrls aic abs flex">
                                    <button className="icon-pause2 s24 pp"/>
                                    <div className="timer cfff rel fontb s18">
                                        02:54 / 09:55
                                    </div>
                                    <div className="slider rel">
                                        <div className="prog rel">
                                                <div className="bar rel" >
                                                    <div className="knob abs"/>
                                                </div>
                                        </div>
                                    </div>
                                    <button className="vol s24 icon-volume-high"/>
                                    <button className="fs s24 icon-enlarge"/>
                                </div>
                            </div>

                            <div className="extra-block rel flex">
                                <div className="chat rel">

                                    <div className="section section-b rel">
                                        <h2 className="title s24 fontb">Quick<span className ="fontn">Chat</span></h2>

                                        <div className="masseges flex">
                                            <div className="bubble rel">
                                                <h2 className="txt ibl fontn s20 c333">I'm a newbie</h2>
                                            </div>
                                            <div className="bubble rel">
                                                <h2 className="txt ibl fontn s20 c333">Love this course</h2>
                                            </div>
                                            <div className="bubble bubble-mine rel">
                                                <h2 className="txt ibl fontn s20 c333">Hey </h2>
                                            </div>
                                            <div className="bubble bubble-mine rel">
                                                <h2 className="txt ibl fontn s20 c333">Nice Intro,thanks</h2>
                                            </div>
                                            
                              
                                        </div>  
                                    </div>



                                </div>


                                <div className="now-watching rel">
                                    <div className="section section-b rel">
                                        <h2 className="title s24 fontb">Watching <span className ="fontn">Now</span></h2>
                                            <div className="you-list">
                                                <div className="you rel aic flex">
                                                    <div className="pic">
                                                        <img src="https://placeimg.com/100/100/people?guest-1" className="bl" />
                                                    </div>
                                                        <div className="meta rel">
                                                            <h2 className="s15 name fontb c333">Grey Montgomery</h2>
                                                            <h2 className="s13 uname fontn c777 ">@gregmont</h2>
                                                        </div>
                                                </div>
                                                <div className="you rel aic flex">
                                                    <div className="pic">
                                                        <img src="https://placeimg.com/100/100/people?guest-2" className="bl" />
                                                    </div>
                                                        <div className="meta rel">
                                                            <h2 className="s15 name fontb c333">Lilla Freemont</h2>
                                                            <h2 className="s13 uname fontn c777 ">@lillafree</h2>
                                                        </div>
                                                </div>
                                                <div className="you rel aic flex">
                                                    <div className="pic">
                                                        <img src="https://placeimg.com/100/100/people?guest-3" className="bl" />
                                                    </div>
                                                        <div className="meta rel">
                                                            <h2 className="s15 name fontb c333">Austin Jefferson</h2>
                                                            <h2 className="s13 uname fontn c777 ">@austinjeff</h2>
                                                        </div>
                                                </div>
                                            </div>


                                    </div>
                                </div>
                            </div>




                    </div>
                
                </div>
            
            

    )
}

export default CoursePage;