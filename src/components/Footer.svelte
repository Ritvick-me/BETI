<style>

    .rvp-footer{
        background-color: var(--black);
        padding-top: 3vh;
        padding-bottom: 3vh;
    }
    .rvp-row-top{
        position: relative;
        margin-bottom: 3vh;
    }
    .rvp-row-top:before{
        position: absolute;
        content: '';
        height: 2px;
        width: 30%;
        top: 50%;
        left: 10%;
        background-color: var(--orange);
    }
    .rvp-row-top:after{
        position: absolute;
        content: '';
        height: 2px;
        width: 30%;
        top: 50%;
        right: 10%;
        background-color: var(--orange);
    }
    .rvp-icons{
		float: right !important;
		margin-right: 20px;
	}
	.rvp-footer a path{
        transition-duration: 0.5s;
	}
	.rvp-footer a:hover path{
		fill: var(--white);
		transition-duration: 0.5s;
	}
	.rvp-icons svg{
		height: 25px;
		width: 25px;
    }
    h5{
        color: var(--white);
        font-family: Helvetica;
        font-weight: 999;
        padding-bottom: 2vh;
    }
    .rvp-footer-content{
        margin-bottom: 2vh;
    }
    .rvp-footer-section-end{
        background-color: var(--white);
        width: 95%;
        height: 2px;
        margin: auto;
        margin-bottom: 3vh;
        opacity: 0.1;
    }
    .rvp-row-middle{
        margin-bottom: 2vh;
    }
    .rvp-about-us{
        color: var(--white);
        font-family: Helvetica;
        text-align: justify;
    }
    .rvp-important-links{
        color: var(--white);
        font-family: Helvetica;
        text-align: justify;
        padding-left: 15px;
        position: relative;
    }
    .rvp-important-links::after{
        position: absolute;
        content: '';
        left: 3px;
        top: -3%;
        height: 100%;
        width: 1px;
        background-color: var(--white);
    }
    .rvp-important-links li{
        padding-bottom: 1vh;
        transition-duration: 0.3s;
    }
    .rvp-important-links li:hover{
        color: var(--orange);
        transition-duration: 0.3s;
    }
    .rvp-call-mail{
        margin-bottom: 2vh !important;
    }
    .rvp-call-mail p{
        margin-top: -5px;
        margin-bottom: 0px;
        float: left;
    }
	.rvp-fa{
		height: 15px;
        float: left;
		padding: 0px 10px 0px 0px;
    }
    .rvp-map-sample{
        width: 100%;
        height: 200px;
    }
    .rvp-row-bottom p{
        margin: 0 !important;
    }
    
    @media(max-width: 1000px){
        .rvp-row-top:before{
            left: 15%;
            width: 20%;
        }
        .rvp-row-top:after{
            right: 15%;
            width: 20%;
        }
    }
    @media(max-width: 650px){
        .rvp-row-top:before{
            left: 10%;
            width: 20%;
        }
        .rvp-row-top:after{
            right: 10%;
            width: 20%;
        }
    }
    @media(max-width: 450px){
        .rvp-row-top:before{
            left: 5%;
            width: 20%;
        }
        .rvp-row-top:after{
            right: 5%;
            width: 20%;
        }
    }
    @media(max-width: 400px){
        .rvp-row-top:before{
            left: 7%;
            width: 15%;
        }
        .rvp-row-top:after{
            right: 7%;
            width: 15%;
        }
    }

</style>

<div class="container-fluid rvp-footer">
    <div class="row justify-content-center rvp-row-top">
        <div class="col col-auto">
            <a class="rvp-icons" target="_blank" style="margin-right: 0px;" href="https://www.facebook.com/Best-embedded-training-institute-357846448318808/?modal=admin_todo_tour">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" class="svg-inline--fa fa-youtube fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#FF0000" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
            </a>
            <a class="rvp-icons" target="_blank" href="https://www.facebook.com/Best-embedded-training-institute-357846448318808/?modal=admin_todo_tour">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter-square" class="svg-inline--fa fa-twitter-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#00acee" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"></path></svg>
            </a>
            <a class="rvp-icons" target="_blank" href="https://www.facebook.com/Best-embedded-training-institute-357846448318808/?modal=admin_todo_tour">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" class="svg-inline--fa fa-instagram fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#f58529" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
            </a>
            <a class="rvp-icons" target="_blank" href="https://www.facebook.com/Best-embedded-training-institute-357846448318808/?modal=admin_todo_tour">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-square" class="svg-inline--fa fa-facebook-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#3b5998" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg>
            </a>
        </div>
    </div>
    <div class="row justify-content-center rvp-row-middle">
        <div class="col col-12 col-sm-6 col-lg-3 rvp-footer-content">
            <h5>About Us</h5>
            <p class="rvp-about-us"> 
                BETI (Best Embedded Training Institute) is one of the best embedded systems training in Gwalior, India. 
                This freshers training course is a combination of practical training, rigorous evaluation and industry coaching. 
                It has helped thousands of freshers to get genuine job placements.
            </p>
        </div>
        <div class="rvp-footer-section-end d-sm-none"></div>
        <div class="col col-12 col-sm-6 col-lg-3 col-xl-2 rvp-footer-content">
            <h5>Important Links</h5>
            <ul class="rvp-important-links">
                <li role="button">Home</li>
                <li role="button">Terms & Conditions</li>
                <li role="button">Privacy Policy</li>
                <li role="button">Refund Policy</li>
            </ul>
        </div>
        <div class="rvp-footer-section-end d-lg-none"></div>
        <div class="col col-12 col-sm-6 col-lg-3 col-xl-2 rvp-footer-content">
            <h5>Contact Us</h5>
            <div class="rvp-call-mail">
                <a href="tel:+919758428544">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-alt" class="rvp-fa svg-inline--fa fa-phone-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="var(--white)" d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
                    <p>+919758428544</p> 
                </a>
            </div>
            <br>
            <div class="rvp-call-mail">
                <a href="tel:+919758428544">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-alt" class="rvp-fa svg-inline--fa fa-phone-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="var(--white)" d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
                    <p>+919758428544</p> 
                </a>
            </div>
            <br>
            <div class="rvp-call-mail">
                <a href="mailto:1403beti@gmail.com">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" class="rvp-mail rvp-fa svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
                    <p>1403beti@gmail.com</p> 
                </a>
            </div>
            <br>
            <div class="rvp-call-mail">
                <a href="mailto:1403beti@gmail.com">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" class="rvp-mail rvp-fa svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
                    <p>1403beti@gmail.com</p> 
                </a>
            </div>
        </div>
        <div class="rvp-footer-section-end d-sm-none"></div>
        <div class="col col-12 col-sm-6 col-lg-3 col-xl-5">
            <h5>Locate Us</h5>
            <img class="rvp-map-sample" src="../Images/map-sample.png" alt="map">
        </div>
    </div>
    <div class="rvp-footer-section-end"></div>
    <div class="row justify-content-center">
        <div class="col col-auto text-center rvp-row-bottom">
            <p>Reg. No. MAI/04261/2018-2019</p>
            <p>Copyright © 2018 Maestros Infotech | All Rights Reserved.</p>
        </div>
    </div>
</div>