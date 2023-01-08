import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* <!-- Icons --> */}

        {/* <!-- Bootstrap JS components --> */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css "
          rel="stylesheet"
        />
        {/* <!-- AOS Loading Animations --> */}
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

        {/* <!-- Swiper animation --> */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper/swiper-bundle.min.css"
        />
      </Head>
      <div className="d-flex h-100 text-center text-white bg-dark tedx-cover-box1">
        <div id="tedx-cover-video-wrap">
          <video
            playsInline
            controls={false}
            autoPlay
            muted
            loop
            id="tedx-cover-video"
          >
            <source src="videos/video2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <header className="mb-auto tedx-header">
            <div>
              <h3 className="float-md-start mb-0">
                {/* <Image
                  className="tedx-logo"
                  src="img/tedxunimelb-logo-white-min.png"
                /> */}
              </h3>
              <nav className="nav nav-masthead justify-content-center float-md-end">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
                <a className="nav-link" href="#">
                  About
                </a>
                <a className="nav-link" href="#">
                  Contact
                </a>
                <a className="nav-link" href="#">
                  Links
                </a>
              </nav>
            </div>
          </header>

          <div className="px-3 tedx-cover-box1  tedx-cover-eventbox ">
            <div className="row">
              <div className="col-xs-12 col-md-12">
                <p className="tedx-cover-title">
                  Ideas
                  <br />
                  Worth
                  <br />
                  Spreading
                </p>

                <p className="tedx-cover-subtitle">WE ARE TEDxUnimelb</p>
                <p className="tedx-cover-button">
                  <button className="tedx-btn">Latest events</button>
                </p>
              </div>
              <div className="col-xs-0 col-md-0"></div>
            </div>
          </div>
        </div>
      </div>
      <main id="main">
        <section id="about" className="about">
          <h2 className="tedx-back-text">
            <span>TEDxUnimelb Official Website</span>
          </h2>
          <div className="container" style={{ zIndex: 5 }}>
            <div className="row gx-0">
              <div
                className="col-lg-6 d-flex flex-column justify-content-center"
                data-aos="zoom-in-right"
              >
                {/* <Image className="tedx-about-image" src="img/committee-min.jpg" /> */}
                <span className="tedx-events-card-dash"></span>
              </div>
              <div className="col-lg-6 d-flex align-items-center">
                <div className="content">
                  <h3 className="tedx-section-subtitle">About Us</h3>
                  <h3 className="tedx-section-title tedx-about-title">
                    <div id="typed-strings">
                      <p>
                        A team of <br className="d-block d-sm-none" />
                        innovation
                      </p>
                      <p>
                        A team of <br className="d-block d-sm-none" />
                        inspiration
                      </p>
                      <p>
                        A team of <br className="d-block d-sm-none" />
                        connection
                      </p>
                    </div>
                    <span id="typed"></span>
                  </h3>
                  <p className="tedx-section-text">
                    {" "}
                    Quisquam vel ut sint cum eos hic dolores aperiam. Sed
                    deserunt et. Inventore et et dolor consequatur itaque ut
                    voluptate sed et. Magnam nam ipsum tenetur suscipit
                    voluptatum nam et est corrupti.
                  </p>
                  <div className="text-start mt-6">
                    {" "}
                    <button type="button" className="tedx-btn">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <span className="tedx-halo-circle"></span>
        <section id="events" className="events">
          <div id="particles-js-events" className="particles-js"></div>
          <div className="container" style={{ zIndex: 5 }}>
            <div className="row gx-0">
              <div className="col-lg-12 d-flex align-items-center">
                <div className="content">
                  <h3 className="tedx-section-subtitle" data-aos="fade-up">
                    Events
                  </h3>
                  <h3
                    className="tedx-section-title tedx-about-title"
                    style={{ color: "#fff" }}
                    data-aos="fade-up"
                  >
                    Recent Events
                  </h3>
                  <div className="tedx-section-text tedx-events-row">
                    <div className="row tedx-events-ul">
                      <div
                        className="col-xs-1 col-3 tedx-events-li"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      >
                        <div className="card bg-dark text-white border-0">
                          {/* <Image
                            src="img/TEDxEvento-682b9876-min.jpg"
                            className="card-img tedx-events-img"
                            alt="..."
                          /> */}

                          <div className="card-img-overlay tedx-events-card-background">
                            <span className="tedx-events-card-dash"></span>
                            <div style={{ bottom: 0, position: " absolute" }}>
                              <p className="tedx-events-date">
                                04-12-2022 Friday
                              </p>
                              <p className="tedx-events-tag">
                                <span className="badge tedx-badge-red">
                                  UPCOMING
                                </span>
                              </p>
                              <h5 className="card-title tedx-events-title">
                                Please keep the title short
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="col-xs-1 col-3 tedx-events-li"
                        data-aos="fade-up"
                        data-aos-delay="300"
                      >
                        <div className="card bg-dark text-white border-0">
                          {/* <Image
                            src="img/tedx-mini-ticket-min.jpg"
                            className="card-img tedx-events-img"
                            alt="..."
                          /> */}

                          <div className="card-img-overlay tedx-events-card-background">
                            <span className="tedx-events-card-dash"></span>
                            <div style={{ bottom: 0, position: "absolute" }}>
                              <p className="tedx-events-date">
                                04-12-2022 Friday
                              </p>
                              <p className="tedx-events-tag">
                                <span className="badge bg-dark">Past</span>
                              </p>
                              <h5 className="card-title tedx-events-title">
                                Open Mic night
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="col-xs-1 col-3 tedx-events-li"
                        data-aos="fade-up"
                        data-aos-delay="400"
                      >
                        <div className="card bg-dark text-white border-0">
                          {/* <Image
                            src="img/Amy-min.JPG"
                            className="card-img tedx-events-img"
                            alt="..."
                          /> */}

                          <div className="card-img-overlay tedx-events-card-background">
                            <span className="tedx-events-card-dash"></span>
                            <div style={{ bottom: 0, position: "absolute" }}>
                              <p className="tedx-events-date">
                                04-12-2022 Friday
                              </p>
                              <p className="tedx-events-tag">
                                <span className="badge bg-dark">Past</span>
                              </p>
                              <h5 className="card-title tedx-events-title">
                                TEDX-Conference
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-start mt-6 ">
                      <button
                        type="button"
                        className="tedx-btn-white tedx-events-button"
                      >
                        MORE events
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="conference"
          className="conference"
          style={{ backgroundImage: "url(img/ted_membership-min.jpg)" }}
        >
          <div className="container" style={{ zIndex: 5 }}>
            <div className="row gx-0">
              <div className="col-lg-6 d-flex align-items-center">
                <div className="content">
                  <h3 className="tedx-section-subtitle" data-aos="fade-up">
                    TEDxUnimelb
                  </h3>
                  <h3
                    className="tedx-section-title"
                    style={{ color: "#fff" }}
                    data-aos="fade-up"
                  >
                    Conference 2022
                  </h3>
                  <p className="tedx-section-text" style={{ color: "#fff" }}>
                    Yearly conference of TEDxUnimelb, the most important event
                    of the year!
                  </p>
                  <div className="text-start mt-6">
                    <button type="button" className="tedx-btn">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="support" className="support" data-aos="fade-up">
          <div className="container aos-init aos-animate" data-aos="fade-up">
            <header className="section-header">
              <h2>Support</h2>
              <p>Support TEDxUnimelb</p>
            </header>

            <div className="row gy-4 tedx-support-links">
              <div className="col-lg-6">
                <div className="tedx-support-link">
                  <div className="card bg-dark text-white border-0">
                    {/* {/*<Image src="img/ted_membership-min*.jpg" className="card-img tedx-events-img" alt="..."> */}

                    <div className="card-img-overlay tedx-events-card-background">
                      <span className="tedx-events-card-dash tedx-support-dash"></span>

                      <div style={{ bottom: 0, position: "absolute" }}>
                        <h5 className="card-title tedx-events-title">
                          Become a member
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="tedx-support-link ">
                  <div className="card bg-dark text-white border-0">
                    {/* <Image src="img/Amy-min.JPG" className="card-img tedx-events-img" alt="..."> */}

                    <div className="card-img-overlay tedx-events-card-background">
                      <span className="tedx-events-card-dash  tedx-support-dash"></span>
                      <div style={{ bottom: 0, position: "absolute" }}>
                        <h5 className="card-title tedx-events-title">
                          Sponsor Us
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="members" className="members" data-aos="fade-up">
          <div id="particles-js" className="particles-js"></div>
          <div className="container aos-init aos-animate" data-aos="fade-up">
            <header className="section-header">
              <h2>team members</h2>
              <p>Our hard working team</p>
            </header>

            <div className=" gy-4 tedx-members-tabs text-center">
              <div className="tedx-members-container">
                {/* <!-- Swiper version of team --> */}
                <div className="swiper mySwiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="tedx-members-member-card">
                        <div className="tedx-members-bar"></div>
                        {/*<Image className="tedx-members-card-image" src="img/Amy-min.JPG"/>*/}
                        <div className="tedx-members-card-content">
                          <p className="tedx-members-card-fullname">
                            Brazakira Colosiaiqiaks
                          </p>
                          <p className="tedx-members-card-position">
                            Prime Minister
                          </p>
                        </div>
                        <div className="tedx-members-card-button">
                          <a className="tedx-btn-rounded" type="submit">
                            <i className="fa-solid fa-paper-plane"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="tedx-members-member-card">
                        <div className="tedx-members-bar"></div>
                        {/*<Image className="tedx-members-card-image" src="img/Amy-min.JPG"/>*/}
                        <div className="tedx-members-card-content">
                          <p className="tedx-members-card-fullname">
                            Kevin Zhou
                          </p>
                          <p className="tedx-members-card-position">
                            Design Officer
                            <br />
                            Full-stack Developer
                          </p>
                        </div>
                        <div className="tedx-members-card-button">
                          <a className="tedx-btn-rounded" type="submit">
                            <i className="fa-solid fa-paper-plane"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="tedx-members-member-card">
                        <div className="tedx-members-bar"></div>
                        {/*<Image className="tedx-members-card-image" src="img/Amy-min.JPG"/>*/}
                        <div className="tedx-members-card-content">
                          <p className="tedx-members-card-fullname">Amy Lui</p>
                          <p className="tedx-members-card-position">
                            President
                          </p>
                        </div>
                        <div className="tedx-members-card-button">
                          <a className="tedx-btn-rounded" type="submit">
                            <i className="fa-solid fa-paper-plane"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="tedx-members-member-card">
                        <div className="tedx-members-bar"></div>
                        {/*<Image className="tedx-members-card-image" src="img/Amy-min.JPG"/>*/}
                        <div className="tedx-members-card-content">
                          <p className="tedx-members-card-fullname">
                            Haley Haley Haley
                          </p>
                          <p className="tedx-members-card-position">
                            Design Director
                          </p>
                        </div>
                        <div className="tedx-members-card-button">
                          <a className="tedx-btn-rounded" type="submit">
                            <i className="fa-solid fa-paper-plane"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tedx-swiper-button swiper-button-next d-sm-none"></div>
                  <div className="swiper-button-prev tedx-swiper-button d-sm-none"></div>
                  <div className="swiper-pagination tedx-text-red"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact" data-aos="fade-up">
          <div className="container aos-init aos-animate" data-aos="fade-up">
            <header className="section-header">
              <h2>Contact</h2>
              <p>Contact Us</p>
            </header>

            <div className="row gy-4 tedx-contact-message">
              <div className="col-lg-6">
                <div className="row gy-4  tedx-contact-box-row">
                  <div className="col-md-6">
                    <div className="tedx-contact-box">
                      <i className="fa-solid fa-location-dot"></i>
                      <h3>Address</h3>
                      <p>
                        Union House, University of Melbourne
                        <br />
                        Parkville VIC 3010
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="tedx-contact-box">
                      <i className="fa-brands fa-facebook"></i>
                      <h3>Chat Online</h3>
                      <p>
                        +1 5589 55488 55
                        <br />
                        +1 6678 254445 41
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="tedx-contact-box">
                      <i className="fa-solid fa-envelope"></i>
                      <h3>Email Us</h3>
                      <p>
                        info@tedxunimelb.com
                        <br />
                        contact@tedxunimelb.com
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="tedx-contact-box">
                      <i className="fa-solid fa-clock"></i>
                      <h3>Open Hours</h3>
                      <p>
                        Monday - Friday
                        <br />
                        9:00AM - 05:00PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <form
                  action="forms/contact.php"
                  method="post"
                  className="php-email-form"
                >
                  <div className="row gy-4 tedx-contact-message">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        required=""
                      />
                    </div>

                    <div className="col-md-6 ">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>

                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>

                    <div className="col-md-12">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="6"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>

                    <div className="col-md-12 text-center">
                      <button className="tedx-btn" type="submit">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- <span className="tedx-halo-circle tedx-halo-circle-right hidden-xs"></span> --> */}
        <section id="about" className="about" data-aos="fade-up">
          <div className="container">
            <div className="row gx-0">
              <div className="col-lg-6 d-flex flex-column justify-content-center">
                {/*<Image className="tedx-about-image" src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/about.jpg">*/}
              </div>
              <div className="col-lg-6 d-flex align-items-center">
                <div className="content">
                  <h3 className="tedx-section-title">Useful Links</h3>
                  <div className="tedx-section-text">
                    <div className="row">
                      <div className="col-12">
                        <div className="tedx-link-item">
                          <div className="card-body">
                            <i className="tedx-link-icon fa-brands fa-facebook d-inline "></i>
                            <h5 className="card-title d-inline tedx-link-title">
                              Facebook Page
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="tedx-link-item">
                          <div className="card-body">
                            <i className="tedx-link-icon fa-solid fa-user-plus d-inline "></i>
                            <h5 className="card-title d-inline tedx-link-title">
                              Become a member
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="tedx-link-item">
                          <div className="card-body">
                            <i className="tedx-link-icon fa-solid fa-globe d-inline "></i>
                            <h5 className="card-title d-inline tedx-link-title">
                              UMSU page
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="tedx-link-item">
                          <div className="card-body">
                            <i className="tedx-link-icon fa-solid fa-link d-inline "></i>
                            <h5 className="card-title d-inline tedx-link-title">
                              Other
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
