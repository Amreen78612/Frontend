import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaLock, FaEnvelope, FaWhatsapp, FaGoogle, FaLinkedin, FaBriefcase, FaCircle } from 'react-icons/fa'; // Import necessary icons
import MultiStep from 'react-multistep';
import Footer from './footerComponent';
import Navbar from './navComponemt';
import DashBoardMenus from './dashboardsMenuComponent';
import { useNavigate, useParams, Link } from 'react-router-dom';
const { REACT_APP_API_ENDPOINT } = process.env;

const EnquiryUpdate = ({ handleNext }) => {
    const [userData, setUserData] = useState({});
    const { frontdeskId } = useParams();
    const [formStepsNum, setFormStepsNum] = useState(1);
    const fetchData1 = async (frontdeskId) => {
        try {
            if (!frontdeskId) {
                console.log("frontdeskId is undefined");
                return;
            }
            const token = localStorage.getItem('token');

            if (token) {
                const response = await axios.get(`${REACT_APP_API_ENDPOINT}/listfrontdesk/${frontdeskId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                const userData = response.data.frontdesk;
                setUserData(userData)

            }
        } catch (err) {
            console.log(err.response);
        }
    }
    useEffect(() => {
        fetchData1(frontdeskId);
    }, [frontdeskId]);
    const getProgressWidth = () => {
        const progressWidths = ['0%', '0%', '25%', '48%', '73%', '96%'];
        return progressWidths[formStepsNum] || '0%';
    };
    const prevButton = <button>Previous</button>;
    const nextButton = <button>Next</button>;
    return (
        <div>
            {/*     <!-- Layout wrapper --> */}
            <div class="layout-wrapper layout-content-navbar">
                <div class="layout-container">
                    {/*      <!-- Menu --> */}
                    <DashBoardMenus />
                    {/*         <!-- / Menu --> */}

                    {/*     <!-- Layout container --> */}
                    <div class="layout-page">
                        {/*         <!-- Navbar --> */}
                        <Navbar />
                        {/*              <!-- / Navbar -->

                <!-- Content wrapper --> */}
                        <div class="content-wrapper">

                            {/*           <!-- Content --> */}

                            <div class="container-xxl flex-grow-1 container-p-y">
                                <div class="row">
                                    <div className='col-12 col-lg-12 '>
                                        <div className='leaddetails'>
                                            <h2>Enquiry Details</h2>
                                        </div>
                                    </div>
                                    <div class="col-lg-8 mb-4 order-0">
                                        <div class="card user_box">
                                            <div class="d-flex align-items-end row">
                                                <div class="col-sm-7">
                                                    <div class="card-body">
                                                        <h5 class="card-title text-primary cus_icon"><span>{userData.name && userData.name.charAt(0) && userData.name.charAt(0).toLocaleUpperCase()}</span>{userData.name && userData.name.charAt(0).toUpperCase() + userData.name.slice(1).toLowerCase()}
                                                        </h5>
                                                        <div className='d-flex'>
                                                            <div className='infotext'>Email:</div>
                                                            <div className='infodetails'> {userData.email}</div><span className="checkmark">✔</span>

                                                        </div>
                                                        <div className='d-flex'>
                                                            <div className='infotext'>Mobile:</div>
                                                            <div className='infodetails'>
                                                                <a href={`https://web.whatsapp.com/send?phone=+919893688878&text=Hello`} target="_blank" rel="noopener noreferrer">

                                                                    <FaWhatsapp className="infowht" color="#25D366" />  <span>{userData.phoneNumber}</span> <span className="checkmark">✔</span>
                                                                </a>

                                                            </div>
                                                        </div>
                                                        <div className='d-flex'>
                                                            <div className='infotext'>Added On:</div>
                                                            <div className='infodetails'> 10<sup>th</sup> Aug 2024 <span className='hours'>12 hours ago</span></div>
                                                        </div>
                                                        <div className='d-flex'>
                                                            <div className='infotext'>Last Active:</div>
                                                            <div className='infodetails'> 10<sup>th</sup> Aug 2024 <span className='hours'>12 hours ago</span></div>
                                                        </div>


                                                    </div>
                                                </div>
                                                <div class="col-sm-5 text-center text-sm-left">
                                                    <div class="card-body pb-0 px-0 px-md-4">
                                                        <img
                                                            src="../assets/img/illustrations/man-with-laptop-light.png"
                                                            height="140"
                                                            alt="View Badge User"
                                                            data-app-dark-img="illustrations/man-with-laptop-dark.png"
                                                            data-app-light-img="illustrations/man-with-laptop-light.png"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4 order-1">
                                        <div class="row">
                                            <div class="col-lg-6 col-md-12 col-6 mb-4">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="card-title d-flex align-items-start justify-content-between">
                                                            <div class="avatar flex-shrink-0">
                                                                <img
                                                                    src="../assets/img/icons/unicons/chart-success.png"
                                                                    alt="chart success"
                                                                    class="rounded"
                                                                />
                                                            </div>
                                                            <div class="dropdown">
                                                                <button
                                                                    class="btn p-0"
                                                                    type="button"
                                                                    id="cardOpt3"
                                                                    data-bs-toggle="dropdown"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                >
                                                                    <i class="bx bx-dots-vertical-rounded"></i>
                                                                </button>
                                                                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt3">
                                                                    <a class="dropdown-item" href="javascript:void(0);">View More</a>
                                                                    <a class="dropdown-item" href="javascript:void(0);">Delete</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span class="fw-semibold d-block mb-1">Profit</span>
                                                        <h3 class="card-title mb-2">INR-12,628</h3>
                                                        <small class="text-success fw-semibold"><i class="bx bx-up-arrow-alt"></i> +72.80%</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-12 col-6 mb-4">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="card-title d-flex align-items-start justify-content-between">
                                                            <div class="avatar flex-shrink-0">
                                                                <img
                                                                    src="../assets/img/icons/unicons/wallet-info.png"
                                                                    alt="Credit Card"
                                                                    class="rounded"
                                                                />
                                                            </div>
                                                            <div class="dropdown">
                                                                <button
                                                                    class="btn p-0"
                                                                    type="button"
                                                                    id="cardOpt6"
                                                                    data-bs-toggle="dropdown"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                >
                                                                    <i class="bx bx-dots-vertical-rounded"></i>
                                                                </button>
                                                                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt6">
                                                                    <a class="dropdown-item" href="javascript:void(0);">View More</a>
                                                                    <a class="dropdown-item" href="javascript:void(0);">Delete</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span>Sales</span>
                                                        <h3 class="card-title text-nowrap mb-1">INR-4,679</h3>
                                                        <small class="text-success fw-semibold"><i class="bx bx-up-arrow-alt"></i> +28.42%</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                            </div>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className="create-te-course-area-start ptb--25 bg-white">
                                        <div className="container">
                                            <div className="row  g-5">
                                                <div className="col-12 col-md-12 col-xl-12 col-lg-12">
                                                    {/* Progress Bar */}
                                                    <div className="progress-container">
                                                        <div className={`progress ${formStepsNum > 1 ? 'active' : ''}`} style={{ width: getProgressWidth() }}></div>
                                                        <div className={`circle ${formStepsNum >= 2 ? 'active' : ''} ${formStepsNum > 2 ? 'checkmark-visible' : ''}`} data-title="Personal">
                                                            {formStepsNum > 2 ? <span className="checkmark">✔</span> : '2'}
                                                        </div>
                                                        <div className={`circle ${formStepsNum >= 3 ? 'active' : ''} ${formStepsNum > 3 ? 'checkmark-visible' : ''}`} data-title="Contact">
                                                            {formStepsNum > 3 ? <span className="checkmark">✔</span> : '3'}
                                                        </div>
                                                        <div className={`circle ${formStepsNum >= 4 ? 'active' : ''} ${formStepsNum > 4 ? 'checkmark-visible' : ''}`} data-title="Experiences">
                                                            {formStepsNum > 4 ? <span className="checkmark">✔</span> : '4'}
                                                        </div>
                                                        <div className={`circle ${formStepsNum >= 5 ? 'active' : ''} ${formStepsNum > 5 ? 'checkmark-visible' : ''}`} data-title="FiveStep">
                                                            {formStepsNum > 5 ? <span className="checkmark">✔</span> : '5'}
                                                        </div>
                                                        <div className={`circle ${formStepsNum >= 1 ? 'active' : ''} ${formStepsNum > 1 ? 'checkmark-visible' : ''}`} data-title="Links">
                                                            {formStepsNum > 1 ? <span className="checkmark">✔</span> : '1'}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-12 col-xl-12 col-lg-12 ">

                                                    {/* Form Steps  1*/}
                                                    {formStepsNum === 1 && (
                                                        <div className="step-content mt-4 mb-4">
                                                            <div className='card'>
                                                                <h3 className="card-title mt-4 text-nowrap mb-1">Step 1: Personal</h3>
                                                                <h2 className="step-title mb-4">Step 1: Personal Details</h2>
                                                            </div>

                                                        </div>
                                                    )}

                                                    {/* Form Steps  2*/}
                                                    {formStepsNum === 2 && (
                                                        <div className="step-content">
                                                            <h2 className='step-title'>Step 2: Contact Details </h2>
                                                        </div>
                                                    )}

                                                    {/* Form Steps  3*/}
                                                    {formStepsNum === 3 && (
                                                        <div className="step-content">
                                                            <h2 className='step-title'>Step 3: Experiences Details </h2>
                                                        </div>
                                                    )}
                                                    {/* Form Steps  4*/}
                                                    {formStepsNum === 4 && (
                                                        <div className="step-content">
                                                            <h2 className='step-title'>Step 4: Five Step Details </h2>
                                                        </div>
                                                    )}
                                                    {/* Form Steps  5*/}
                                                    {formStepsNum === 5 && (
                                                        <div className="step-content">
                                                            <h2 className='step-title'>Step 5: Link Details </h2>
                                                        </div>
                                                    )}

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/*         <!-- / Content -->

                    <!-- Footer --> */}
                            <Footer />
                            {/* <!-- / Footer --> */}

                            <div class="content-backdrop fade"></div>
                        </div>
                        {/*     <!-- Content wrapper --> */}
                    </div>
                    {/*   <!-- / Layout page --> */}
                </div>

                {/*     <!-- Overlay --> */}
                <div class="layout-overlay layout-menu-toggle"></div>
            </div>
            {/* / Layout wrapper  */}

        </div >
    );
};

export default EnquiryUpdate;