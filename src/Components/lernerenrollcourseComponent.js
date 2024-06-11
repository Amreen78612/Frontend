import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Navbarmenu from "./Navbarmenu";
import Sidebar from "./sidebar";
function LernerenrollcourseComponent(token) {
    const [table, setTable] = useState("");
    const [course, setCourse] = useState([]);
    const [coursesCount, setCoursesCount] = useState(null);
    const [totalstudent, setTotalstudent] = useState(null);
    const [totalVideoCount, settotalVideoCount] = useState(null);
    const [activeService, setActiveService] = useState(null);
    const fetchData = async () => {
        try {
            const token = localStorage.getItem('token');

            if (token) {
                const response = await axios.get('http://localhost:3000/api/userwisedata', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                setTable(response.data);
            }// Updated state variable
        } catch (err) {
            console.log(err.response);
        }
    }
    const fetchData1 = async () => {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                const response = await axios.get(`http://localhost:3000/api/listcourses`, {
                    headers: {
                        Authorization: `Bearer ${token}`

                    }
                });
                const userDatas = response.data.courses;
                setCoursesCount(response.data.coursescount);
                setTotalstudent(response.data.totalStudentCount)
                settotalVideoCount(response.data.totalVideoCount)
                setCourse(userDatas)

            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        fetchData();
        fetchData1()
    }, []);


    return (
        <div>
            <section>
                <Navbarmenu />
            </section>

            <div className="dashboard-banner-area-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="dashboard-banner-area-start bg_image">
                                <div className="rating-area-banner-dashboard">
                                    <div className="stars">
                                        <span>4.5</span>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </div>
                                    <p>Digital Marketing Instructor</p>
                                </div>
                                <div className="author-profile-image-and-name">
                                    <div className="profile-pic">
                                        <img src="assets/fontend/images/dashboard/01.png" alt="dashboard" />
                                    </div>
                                    <div className="name-desig">
                                        <h1 className="title">{table.name}</h1>
                                        <div className="course-vedio">
                                            <div className="single">
                                                <i className="fa-light fa-users"></i>
                                                <span style={{ paddingLeft: "5px" }}>{totalstudent} Students</span>
                                            </div>
                                            <div className="single">
                                                <i className="fa-regular fa-video"></i>
                                                <span style={{ paddingLeft: "5px" }}>{totalVideoCount} Course</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="dashboard--area-main pt--100 pt_sm--50">
                <div class="container">
                    <div class="row g-5">
                        <Sidebar />
                        <div class="col-lg-9">
                            <div class="exrolled-course-wrapper-dashed">
                                <h5 class="title">Enrolleld Courses</h5>
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Enrolleld Courses</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Active Courses</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Completed Courses</button>
                                    </li>
                                </ul>
                                <div class="tab-content mt--30" id="myTabContent">
                                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row g-5">
                                            {course.map((item) => {
                                                if (item) {
                                                    return (

                                                        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                                                            {/* <!-- single course style two --> */}
                                                            <div class="single-course-style-three enroll-course">
                                                                <a href="single-course.html" class="thumbnail">
                                                                    <img src={`http://localhost:3000/${item.CourseUplod}`} alt="course" />
                                                                    <div class="tag-thumb">
                                                                        <span>{item.Category && item.Category.name}</span>
                                                                    </div>
                                                                </a>
                                                                <div class="body-area">
                                                                    <div class="course-top">

                                                                        <div class="price">{item.CoursePrice} <i class="fa-indian-rupee fa-light"></i></div>
                                                                    </div>
                                                                    <a href="single-course.html">
                                                                        <h5 class="title">{item.name}</h5>
                                                                    </a>

                                                                    <div class="leasson-students">
                                                                        <div class="lesson">
                                                                            <i class="fa-light fa-calendar-lines-pen"></i>
                                                                            <span>{item.lessionCount} Lessons</span>
                                                                        </div>
                                                                        <div class="students">
                                                                            <i class="fa-light fa-users"></i>
                                                                            <span>{item.studentCount} Student</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="progress-wrapper-lesson-compleate">
                                                                        <div class="compleate">
                                                                            <div class="compl">
                                                                                Complete
                                                                            </div>
                                                                            <div class="end">
                                                                                <span>50%</span>
                                                                            </div>
                                                                        </div>
                                                                        <div class="progress">
                                                                            <div class="progress-bar wow fadeInLeft bg--primary" role="progressbar" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                <div className="tags-area-wrapper d-flex" style={{ justifyContent: 'space-between' }}>
                                                                    <div className='button-roll-course'>
                                                                        <a  href={`/createcourse/${item.id}`}  className="btnm flex-row d-flex">
                                                                            <div className='icon' style={{ marginRight: '7px' }}>
                                                                                <i className="bx bx-edit"></i>
                                                                            </div>
                                                                            <span>Edit</span>
                                                                        </a>
                                                                    </div>
                                                                    <div className='button-roll-course'>
                                                                        <a  href={`#`} className=" flex-row d-flex">
                                                                            <div className='icon' style={{ marginRight: '7px' }}>
                                                                                <i className="bx bx-trash"></i>
                                                                            </div>
                                                                            <span>Delete</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {/* <!-- single course style two end --> */}

                                                        </div>)
                                                } else {
                                                    return null
                                                }
                                            })}
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div class="row g-5">
                                            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                                                {/* <!-- single course style two --> */}
                                                <div class="single-course-style-three enroll-course">
                                                    <a href="single-course.html" class="thumbnail">
                                                        <img src="assets/fontend/images/course/01.jpg" alt="course" />
                                                        <div class="tag-thumb">
                                                            <span>Marketing</span>
                                                        </div>
                                                    </a>
                                                    <div class="body-area">
                                                        <div class="course-top">
                                                            <div class="tags">Best Seller</div>
                                                            <div class="price">$49.50</div>
                                                        </div>
                                                        <a href="single-course.html">
                                                            <h5 class="title">How to Write the Ultimate 1 Page
                                                                Strategic Business Plan</h5>
                                                        </a>
                                                        <div class="teacher-stars">
                                                            <div class="teacher"><span>Dr. Angela Yu</span></div>
                                                            <ul class="stars">
                                                                <li class="span">4.5</li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-regular fa-star"></i></li>
                                                            </ul>
                                                        </div>
                                                        <div class="leasson-students">
                                                            <div class="lesson">
                                                                <i class="fa-light fa-calendar-lines-pen"></i>
                                                                <span>25 Lessons</span>
                                                            </div>
                                                            <div class="students">
                                                                <i class="fa-light fa-users"></i>
                                                                <span>25 Lessons</span>
                                                            </div>
                                                        </div>
                                                        <div class="progress-wrapper-lesson-compleate">
                                                            <div class="compleate">
                                                                <div class="compl">
                                                                    Complete
                                                                </div>
                                                                <div class="end">
                                                                    <span>50%</span>
                                                                </div>
                                                            </div>
                                                            <div class="progress">
                                                                <div class="progress-bar wow fadeInLeft bg--primary" role="progressbar" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button class="rts-btn btn-border">Download Certificate</button>
                                                    </div>
                                                </div>
                                                {/* <!-- single course style two end --> */}
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                                                {/* <!-- single course style two --> */}
                                                <div class="single-course-style-three enroll-course">
                                                    <a href="single-course.html" class="thumbnail">
                                                        <img src="assets/fontend/images/course/02.jpg" alt="course" />
                                                        <div class="tag-thumb">
                                                            <span>Marketing</span>
                                                        </div>
                                                    </a>
                                                    <div class="body-area">
                                                        <div class="course-top">
                                                            <div class="tags">Best Seller</div>
                                                            <div class="price">$49.50</div>
                                                        </div>
                                                        <a href="single-course.html">
                                                            <h5 class="title">How to Write the Ultimate 1 Page
                                                                Strategic Business Plan</h5>
                                                        </a>
                                                        <div class="teacher-stars">
                                                            <div class="teacher"><span>Dr. Angela Yu</span></div>
                                                            <ul class="stars">
                                                                <li class="span">4.5</li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-regular fa-star"></i></li>
                                                            </ul>
                                                        </div>
                                                        <div class="leasson-students">
                                                            <div class="lesson">
                                                                <i class="fa-light fa-calendar-lines-pen"></i>
                                                                <span>25 Lessons</span>
                                                            </div>
                                                            <div class="students">
                                                                <i class="fa-light fa-users"></i>
                                                                <span>25 Lessons</span>
                                                            </div>
                                                        </div>
                                                        <div class="progress-wrapper-lesson-compleate">
                                                            <div class="compleate">
                                                                <div class="compl">
                                                                    Complete
                                                                </div>
                                                                <div class="end">
                                                                    <span>70%</span>
                                                                </div>
                                                            </div>
                                                            <div class="progress">
                                                                <div class="progress-bar wow fadeInLeft bg--primary" role="progressbar" style={{ width: "70%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button class="rts-btn btn-border">Download Certificate</button>
                                                    </div>
                                                </div>
                                                {/* <!-- single course style two end --> */}
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                                                {/* <!-- single course style two --> */}
                                                <div class="single-course-style-three enroll-course">
                                                    <a href="single-course.html" class="thumbnail">
                                                        <img src="assets/fontend/images/course/03.jpg" alt="course" />
                                                        <div class="tag-thumb">
                                                            <span>Marketing</span>
                                                        </div>
                                                    </a>
                                                    <div class="body-area">
                                                        <div class="course-top">
                                                            <div class="tags">Best Seller</div>
                                                            <div class="price">$49.50</div>
                                                        </div>
                                                        <a href="single-course.html">
                                                            <h5 class="title">How to Write the Ultimate 1 Page
                                                                Strategic Business Plan</h5>
                                                        </a>
                                                        <div class="teacher-stars">
                                                            <div class="teacher"><span>Dr. Angela Yu</span></div>
                                                            <ul class="stars">
                                                                <li class="span">4.5</li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-regular fa-star"></i></li>
                                                            </ul>
                                                        </div>
                                                        <div class="leasson-students">
                                                            <div class="lesson">
                                                                <i class="fa-light fa-calendar-lines-pen"></i>
                                                                <span>25 Lessons</span>
                                                            </div>
                                                            <div class="students">
                                                                <i class="fa-light fa-users"></i>
                                                                <span>25 Lessons</span>
                                                            </div>
                                                        </div>
                                                        <div class="progress-wrapper-lesson-compleate">
                                                            <div class="compleate">
                                                                <div class="compl">
                                                                    Complete
                                                                </div>
                                                                <div class="end">
                                                                    <span>90%</span>
                                                                </div>
                                                            </div>
                                                            <div class="progress">
                                                                <div class="progress-bar wow fadeInLeft bg--primary" role="progressbar" style={{ width: "90%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button class="rts-btn btn-border">Download Certificate</button>
                                                    </div>
                                                </div>
                                                {/* <!-- single course style two end --> */}
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                                                {/* <!-- single course style two --> */}
                                                <div class="single-course-style-three enroll-course">
                                                    <a href="single-course.html" class="thumbnail">
                                                        <img src="assets/fontend/images/course/04.jpg" alt="course" />
                                                        <div class="tag-thumb">
                                                            <span>Marketing</span>
                                                        </div>
                                                    </a>
                                                    <div class="body-area">
                                                        <div class="course-top">
                                                            <div class="tags">Best Seller</div>
                                                            <div class="price">$49.50</div>
                                                        </div>
                                                        <a href="single-course.html">
                                                            <h5 class="title">How to Write the Ultimate 1 Page
                                                                Strategic Business Plan</h5>
                                                        </a>
                                                        <div class="teacher-stars">
                                                            <div class="teacher"><span>Dr. Angela Yu</span></div>
                                                            <ul class="stars">
                                                                <li class="span">4.5</li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-regular fa-star"></i></li>
                                                            </ul>
                                                        </div>
                                                        <div class="leasson-students">
                                                            <div class="lesson">
                                                                <i class="fa-light fa-calendar-lines-pen"></i>
                                                                <span>25 Lessons</span>
                                                            </div>
                                                            <div class="students">
                                                                <i class="fa-light fa-users"></i>
                                                                <span>25 Lessons</span>
                                                            </div>
                                                        </div>
                                                        <div class="progress-wrapper-lesson-compleate">
                                                            <div class="compleate">
                                                                <div class="compl">
                                                                    Complete
                                                                </div>
                                                                <div class="end">
                                                                    <span>20%</span>
                                                                </div>
                                                            </div>
                                                            <div class="progress">
                                                                <div class="progress-bar wow fadeInLeft bg--primary" role="progressbar" style={{ width: "20%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button class="rts-btn btn-border">Download Certificate</button>
                                                    </div>
                                                </div>
                                                {/* <!-- single course style two end --> */}
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                                                {/* <!-- single course style two --> */}
                                                <div class="single-course-style-three enroll-course">
                                                    <a href="single-course.html" class="thumbnail">
                                                        <img src="assets/fontend/images/course/05.jpg" alt="course" />
                                                        <div class="tag-thumb">
                                                            <span>Marketing</span>
                                                        </div>
                                                    </a>
                                                    <div class="body-area">
                                                        <div class="course-top">
                                                            <div class="tags">Best Seller</div>
                                                            <div class="price">$49.50</div>
                                                        </div>
                                                        <a href="single-course.html">
                                                            <h5 class="title">How to Write the Ultimate 1 Page
                                                                Strategic Business Plan</h5>
                                                        </a>
                                                        <div class="teacher-stars">
                                                            <div class="teacher"><span>Dr. Angela Yu</span></div>
                                                            <ul class="stars">
                                                                <li class="span">4.5</li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-regular fa-star"></i></li>
                                                            </ul>
                                                        </div>
                                                        <div class="leasson-students">
                                                            <div class="lesson">
                                                                <i class="fa-light fa-calendar-lines-pen"></i>
                                                                <span>25 Lessons</span>
                                                            </div>
                                                            <div class="students">
                                                                <i class="fa-light fa-users"></i>
                                                                <span>25 Lessons</span>
                                                            </div>
                                                        </div>
                                                        <div class="progress-wrapper-lesson-compleate">
                                                            <div class="compleate">
                                                                <div class="compl">
                                                                    Complete
                                                                </div>
                                                                <div class="end">
                                                                    <span>50%</span>
                                                                </div>
                                                            </div>
                                                            <div class="progress">
                                                                <div class="progress-bar wow fadeInLeft bg--primary" role="progressbar" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button class="rts-btn btn-border">Download Certificate</button>
                                                    </div>
                                                </div>
                                                {/* <!-- single course style two end --> */}
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                                                {/* <!-- single course style two --> */}
                                                <div class="single-course-style-three enroll-course">
                                                    <a href="single-course.html" class="thumbnail">
                                                        <img src="assets/fontend/images/course/06.jpg" alt="course" />
                                                        <div class="tag-thumb">
                                                            <span>Marketing</span>
                                                        </div>
                                                    </a>
                                                    <div class="body-area">
                                                        <div class="course-top">
                                                            <div class="tags">Best Seller</div>
                                                            <div class="price">$49.50</div>
                                                        </div>
                                                        <a href="single-course.html">
                                                            <h5 class="title">How to Write the Ultimate 1 Page
                                                                Strategic Business Plan</h5>
                                                        </a>
                                                        <div class="teacher-stars">
                                                            <div class="teacher"><span>Dr. Angela Yu</span></div>
                                                            <ul class="stars">
                                                                <li class="span">4.5</li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-regular fa-star"></i></li>
                                                            </ul>
                                                        </div>
                                                        <div class="leasson-students">
                                                            <div class="lesson">
                                                                <i class="fa-light fa-calendar-lines-pen"></i>
                                                                <span>25 Lessons</span>
                                                            </div>
                                                            <div class="students">
                                                                <i class="fa-light fa-users"></i>
                                                                <span>25 Lessons</span>
                                                            </div>
                                                        </div>
                                                        <div class="progress-wrapper-lesson-compleate">
                                                            <div class="compleate">
                                                                <div class="compl">
                                                                    Complete
                                                                </div>
                                                                <div class="end">
                                                                    <span>80%</span>
                                                                </div>
                                                            </div>
                                                            <div class="progress">
                                                                <div class="progress-bar wow fadeInLeft bg--primary" role="progressbar" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button class="rts-btn btn-border">Download Certificate</button>
                                                    </div>
                                                </div>
                                                {/* <!-- single course style two end --> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                        <div class="row g-5">
                                            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                                                {/* <!-- single course style two --> */}
                                                <div class="single-course-style-three enroll-course">
                                                    <a href="single-course.html" class="thumbnail">
                                                        <img src="assets/fontend/images/course/01.jpg" alt="course" />
                                                        <div class="tag-thumb">
                                                            <span>Marketing</span>
                                                        </div>
                                                    </a>
                                                    <div class="body-area">
                                                        <div class="course-top">
                                                            <div class="tags">Best Seller</div>
                                                            <div class="price">$49.50</div>
                                                        </div>
                                                        <a href="single-course.html">
                                                            <h5 class="title">How to Write the Ultimate 1 Page
                                                                Strategic Business Plan</h5>
                                                        </a>
                                                        <div class="teacher-stars">
                                                            <div class="teacher"><span>Dr. Angela Yu</span></div>
                                                            <ul class="stars">
                                                                <li class="span">4.5</li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-regular fa-star"></i></li>
                                                            </ul>
                                                        </div>
                                                        <div class="leasson-students">
                                                            <div class="lesson">
                                                                <i class="fa-light fa-calendar-lines-pen"></i>
                                                                <span>25 Lessons</span>
                                                            </div>
                                                            <div class="students">
                                                                <i class="fa-light fa-users"></i>
                                                                <span>25 Lessons</span>
                                                            </div>
                                                        </div>
                                                        <div class="progress-wrapper-lesson-compleate">
                                                            <div class="compleate">
                                                                <div class="compl">
                                                                    Complete
                                                                </div>
                                                                <div class="end">
                                                                    <span>50%</span>
                                                                </div>
                                                            </div>
                                                            <div class="progress">
                                                                <div class="progress-bar wow fadeInLeft bg--primary" role="progressbar" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button class="rts-btn btn-border">Download Certificate</button>
                                                    </div>
                                                </div>
                                                {/* <!-- single course style two end --> */}
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                                                {/* <!-- single course style two --> */}
                                                <div class="single-course-style-three enroll-course">
                                                    <a href="single-course.html" class="thumbnail">
                                                        <img src="assets/fontend/images/course/02.jpg" alt="course" />
                                                        <div class="tag-thumb">
                                                            <span>Marketing</span>
                                                        </div>
                                                    </a>
                                                    <div class="body-area">
                                                        <div class="course-top">
                                                            <div class="tags">Best Seller</div>
                                                            <div class="price">$49.50</div>
                                                        </div>
                                                        <a href="single-course.html">
                                                            <h5 class="title">How to Write the Ultimate 1 Page
                                                                Strategic Business Plan</h5>
                                                        </a>
                                                        <div class="teacher-stars">
                                                            <div class="teacher"><span>Dr. Angela Yu</span></div>
                                                            <ul class="stars">
                                                                <li class="span">4.5</li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-regular fa-star"></i></li>
                                                            </ul>
                                                        </div>
                                                        <div class="leasson-students">
                                                            <div class="lesson">
                                                                <i class="fa-light fa-calendar-lines-pen"></i>
                                                                <span>25 Lessons</span>
                                                            </div>
                                                            <div class="students">
                                                                <i class="fa-light fa-users"></i>
                                                                <span>25 Lessons</span>
                                                            </div>
                                                        </div>
                                                        <div class="progress-wrapper-lesson-compleate">
                                                            <div class="compleate">
                                                                <div class="compl">
                                                                    Complete
                                                                </div>
                                                                <div class="end">
                                                                    <span>70%</span>
                                                                </div>
                                                            </div>
                                                            <div class="progress">
                                                                <div class="progress-bar wow fadeInLeft bg--primary" role="progressbar" style={{ width: "70%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button class="rts-btn btn-border">Download Certificate</button>
                                                    </div>
                                                </div>
                                                {/* <!-- single course style two end --> */}
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                                                {/* <!-- single course style two --> */}
                                                <div class="single-course-style-three enroll-course">
                                                    <a href="single-course.html" class="thumbnail">
                                                        <img src="assets/fontend/images/course/03.jpg" alt="course" />
                                                        <div class="tag-thumb">
                                                            <span>Marketing</span>
                                                        </div>
                                                    </a>
                                                    <div class="body-area">
                                                        <div class="course-top">
                                                            <div class="tags">Best Seller</div>
                                                            <div class="price">$49.50</div>
                                                        </div>
                                                        <a href="single-course.html">
                                                            <h5 class="title">How to Write the Ultimate 1 Page
                                                                Strategic Business Plan</h5>
                                                        </a>
                                                        <div class="teacher-stars">
                                                            <div class="teacher"><span>Dr. Angela Yu</span></div>
                                                            <ul class="stars">
                                                                <li class="span">4.5</li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-regular fa-star"></i></li>
                                                            </ul>
                                                        </div>
                                                        <div class="leasson-students">
                                                            <div class="lesson">
                                                                <i class="fa-light fa-calendar-lines-pen"></i>
                                                                <span>25 Lessons</span>
                                                            </div>
                                                            <div class="students">
                                                                <i class="fa-light fa-users"></i>
                                                                <span>25 Lessons</span>
                                                            </div>
                                                        </div>
                                                        <div class="progress-wrapper-lesson-compleate">
                                                            <div class="compleate">
                                                                <div class="compl">
                                                                    Complete
                                                                </div>
                                                                <div class="end">
                                                                    <span>90%</span>
                                                                </div>
                                                            </div>
                                                            <div class="progress">
                                                                <div class="progress-bar wow fadeInLeft bg--primary" role="progressbar" style={{ width: "90%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button class="rts-btn btn-border">Download Certificate</button>
                                                    </div>
                                                </div>
                                                {/* <!-- single course style two end --> */}
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                                                {/* <!-- single course style two --> */}
                                                <div class="single-course-style-three enroll-course">
                                                    <a href="single-course.html" class="thumbnail">
                                                        <img src="assets/fontend/images/course/04.jpg" alt="course" />
                                                        <div class="tag-thumb">
                                                            <span>Marketing</span>
                                                        </div>
                                                    </a>
                                                    <div class="body-area">
                                                        <div class="course-top">
                                                            <div class="tags">Best Seller</div>
                                                            <div class="price">$49.50</div>
                                                        </div>
                                                        <a href="single-course.html">
                                                            <h5 class="title">How to Write the Ultimate 1 Page
                                                                Strategic Business Plan</h5>
                                                        </a>
                                                        <div class="teacher-stars">
                                                            <div class="teacher"><span>Dr. Angela Yu</span></div>
                                                            <ul class="stars">
                                                                <li class="span">4.5</li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-regular fa-star"></i></li>
                                                            </ul>
                                                        </div>
                                                        <div class="leasson-students">
                                                            <div class="lesson">
                                                                <i class="fa-light fa-calendar-lines-pen"></i>
                                                                <span>25 Lessons</span>
                                                            </div>
                                                            <div class="students">
                                                                <i class="fa-light fa-users"></i>
                                                                <span>25 Lessons</span>
                                                            </div>
                                                        </div>
                                                        <div class="progress-wrapper-lesson-compleate">
                                                            <div class="compleate">
                                                                <div class="compl">
                                                                    Complete
                                                                </div>
                                                                <div class="end">
                                                                    <span>20%</span>
                                                                </div>
                                                            </div>
                                                            <div class="progress">
                                                                <div class="progress-bar wow fadeInLeft bg--primary" role="progressbar" style={{ width: "20%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button class="rts-btn btn-border">Download Certificate</button>
                                                    </div>
                                                </div>
                                                {/* <!-- single course style two end --> */}
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                                                {/* <!-- single course style two --> */}
                                                <div class="single-course-style-three enroll-course">
                                                    <a href="single-course.html" class="thumbnail">
                                                        <img src="assets/fontend/images/course/05.jpg" alt="course" />
                                                        <div class="tag-thumb">
                                                            <span>Marketing</span>
                                                        </div>
                                                    </a>
                                                    <div class="body-area">
                                                        <div class="course-top">
                                                            <div class="tags">Best Seller</div>
                                                            <div class="price">$49.50</div>
                                                        </div>
                                                        <a href="single-course.html">
                                                            <h5 class="title">How to Write the Ultimate 1 Page
                                                                Strategic Business Plan</h5>
                                                        </a>
                                                        <div class="teacher-stars">
                                                            <div class="teacher"><span>Dr. Angela Yu</span></div>
                                                            <ul class="stars">
                                                                <li class="span">4.5</li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-regular fa-star"></i></li>
                                                            </ul>
                                                        </div>
                                                        <div class="leasson-students">
                                                            <div class="lesson">
                                                                <i class="fa-light fa-calendar-lines-pen"></i>
                                                                <span>25 Lessons</span>
                                                            </div>
                                                            <div class="students">
                                                                <i class="fa-light fa-users"></i>
                                                                <span>25 Lessons</span>
                                                            </div>
                                                        </div>
                                                        <div class="progress-wrapper-lesson-compleate">
                                                            <div class="compleate">
                                                                <div class="compl">
                                                                    Complete
                                                                </div>
                                                                <div class="end">
                                                                    <span>50%</span>
                                                                </div>
                                                            </div>
                                                            <div class="progress">
                                                                <div class="progress-bar wow fadeInLeft bg--primary" role="progressbar" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button class="rts-btn btn-border">Download Certificate</button>
                                                    </div>
                                                </div>
                                                {/* <!-- single course style two end --> */}
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                                                {/* <!-- single course style two --> */}
                                                <div class="single-course-style-three enroll-course">
                                                    <a href="single-course.html" class="thumbnail">
                                                        <img src="assets/fontend/images/course/06.jpg" alt="course" />
                                                        <div class="tag-thumb">
                                                            <span>Marketing</span>
                                                        </div>
                                                    </a>
                                                    <div class="body-area">
                                                        <div class="course-top">
                                                            <div class="tags">Best Seller</div>
                                                            <div class="price">$49.50</div>
                                                        </div>
                                                        <a href="single-course.html">
                                                            <h5 class="title">How to Write the Ultimate 1 Page
                                                                Strategic Business Plan</h5>
                                                        </a>
                                                        <div class="teacher-stars">
                                                            <div class="teacher"><span>Dr. Angela Yu</span></div>
                                                            <ul class="stars">
                                                                <li class="span">4.5</li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                                <li><i class="fa-sharp fa-regular fa-star"></i></li>
                                                            </ul>
                                                        </div>
                                                        <div class="leasson-students">
                                                            <div class="lesson">
                                                                <i class="fa-light fa-calendar-lines-pen"></i>
                                                                <span>25 Lessons</span>
                                                            </div>
                                                            <div class="students">
                                                                <i class="fa-light fa-users"></i>
                                                                <span>25 Lessons</span>
                                                            </div>
                                                        </div>
                                                        <div class="progress-wrapper-lesson-compleate">
                                                            <div class="compleate">
                                                                <div class="compl">
                                                                    Complete
                                                                </div>
                                                                <div class="end">
                                                                    <span>80%</span>
                                                                </div>
                                                            </div>
                                                            <div class="progress">
                                                                <div class="progress-bar wow fadeInLeft bg--primary" role="progressbar" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button class="rts-btn btn-border">Download Certificate</button>
                                                    </div>
                                                </div>
                                                {/* <!-- single course style two end --> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default LernerenrollcourseComponent;