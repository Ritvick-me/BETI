<script>
  import Heading from "../components/Heading-3.svelte";
  import ContactsContent from "../Contents/ContactsContent";
  import Footer from "../components/Footer.svelte";

  let headingName = "Application";
  const contacts = ContactsContent.contacts;

  let fname = "";
  let lname = "";
  let father = "";
  let phone;
  let email = "";
  let college = "";
  let branch = "";
  let year;

  let success = "";

  function registerationForm() {
    window.$(".rvp-robospridh").removeClass("rvp-release");
    window.$(".rvp-roboform").removeClass("rvp-transparent");
    window.$(".rvp-anti-scroll").removeClass("rvp-overflow-hidden");
    window.$(".rvp-go-to-top").removeClass("rvp-pointer");
  }

  function goBack() {
    window.$(".rvp-robospridh").addClass("rvp-release");
    window.$(".rvp-roboform").addClass("rvp-transparent");
    window.$(".rvp-anti-scroll").addClass("rvp-overflow-hidden");
    window.$(".rvp-go-to-top").addClass("rvp-pointer");
  }

  function closeModal() {
    if (success == "Submission Successful!") {
      fname = lname = father = phone = email = college = branch = year = "";
    }
    success = "";
  }

  async function applyButton() {
    if (
      !fname ||
      !lname ||
      !father ||
      !phone ||
      !email ||
      !college ||
      !branch ||
      !year
    ) {
      success = "One or more required fields were left empty.";
      return;
    }
    if (
      phone.length != 10 ||
      !Number.isInteger(parseFloat(phone)) ||
      isNaN(phone)
    ) {
      if (!Number.isInteger(parseFloat(phone)) || isNaN(phone)) {
        success = "Phone Number should be an integer value only.";
      } else if (phone.length != 10) {
        success = "Phone Number should have exactly 10 digits";
      }
      return;
    }
    if (!Number.isInteger(parseFloat(year)) || isNaN(year)) {
      success = "Year is invalid";
      return;
    }
    const application = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fname,
        lname,
        father,
        phone,
        email,
        college,
        branch,
        year
      })
    };

    const promise = await fetch(
      "http://localhost:3000/events/application",
      application
    );
    if (promise.status == 400) {
      success = result.success;
      return;
    }
    const result = await promise.json();
    success = result.success;
  }
</script>

<style>
  * {
    outline-offset: 0px !important;
    outline: none !important;
    -moz-outline-offset: 0px !important;
    -moz-outline: none !important;
  }

  *:active {
    outline-offset: 0px !important;
    outline: none !important;
    -moz-outline-offset: 0px !important;
    -moz-outline: none !important;
  }

  *:focus {
    outline-offset: 0px !important;
    outline: none !important;
    -moz-outline-offset: 0px !important;
    -moz-outline: none !important;
  }

  .rvp-result-modal {
    position: fixed;
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 0%;
    height: 0%;
    z-index: 999;
  }

  .rvp-result-expand {
    width: 100%;
    height: 100%;
  }

  .rvp-modal-body {
    width: 400px;
    max-width: 95%;
    margin: 0 2.5%;
    background-color: var(--white);
    padding: 16px;
    box-shadow: 0 0 5px 2px var(--cream);
  }

  .rvp-modal-body button {
    border-style: none;
    background-color: var(--deep-blue);
    color: var(--white);
    padding: 8px 16px;
    text-transform: uppercase;
    font-family: Helvetica;
    letter-spacing: 2px;
  }

  .rvp-modal-heading {
    color: var(--orange);
    font-family: Robota;
    text-transform: uppercase;
    margin: 0px 8px 8px 8px;
  }

  .rvp-modal-para {
    font-family: Helvetica;
    margin: 0px 8px 8px 8px;
  }

  .rvp-anti-scroll {
    margin: 0;
    padding: 0;
    margin-top: -80px;
  }
  .rvp-overflow-hidden {
    height: 100vh;
    overflow: hidden;
  }
  .rvp-robospridh {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: radial-gradient(
      farthest-corner at 40px 40px,
      var(--black) 30%,
      var(--deep-blue) 100%
    );
    margin-top: -100vh;
    transition-duration: 0.7s;
  }
  .rvp-robo-heading {
    font-family: Robota;
    color: var(--white);
    text-transform: uppercase;
    font-size: 60px;
    padding: 0px 20px 5px 20px;
    position: relative;
  }
  .rvp-robo-heading::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    border-top-style: solid;
    border-left-style: solid;
    border-color: var(--orange);
    border-width: 5px;
  }
  .rvp-robo-heading::before {
    position: absolute;
    content: "";
    bottom: 0;
    right: 0;
    width: 20px;
    height: 20px;
    border-bottom-style: solid;
    border-right-style: solid;
    border-color: var(--orange);
    border-width: 5px;
  }
  .rvp-robo-subhead {
    font-family: Robota;
    color: var(--orange);
    text-transform: uppercase;
    font-size: 40px;
    text-align: center;
    margin-bottom: 40px;
  }
  .rvp-register {
    border-style: none;
    border-radius: 5px;
    background-color: var(--white);
    padding: 10px 15px;
    font-family: Helvetica;
    font-weight: 999;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--orange);
  }
  .rvp-release {
    margin-top: 0px;
    transition-duration: 0.7s;
  }
  .rvp-roboform {
    opacity: 1;
    transition-duration: 1.25s;
    padding: 0;
    margin-bottom: 60px;
  }
  .rvp-transparent {
    opacity: 0;
    transition-duration: 1.25s;
  }
  .rvp-form {
    margin-top: 30px;
    box-shadow: 0px 0px 10px 2px var(--cream);
  }
  .rvp-participant {
    color: var(--orange);
    font-family: Robota;
    text-transform: uppercase;
    margin: 20px 20px;
  }
  .rvp-input {
    border-radius: 150px;
    border-style: solid;
    border-width: 1px;
    border-color: var(--cream);
    outline: 0 !important;
    -moz-outline: none !important;
    padding: 10px 15px;
    width: 100%;
    font-family: Helvetica;
    color: grey;
    margin-bottom: 30px;
  }
  .rvp-button-center {
    width: fit-content;
    text-align: center;
    margin-top: 20px;
  }
  .rvp-submit-button {
    border-style: none;
    border-radius: 5px;
    background-color: var(--orange);
    padding: 10px 15px;
    font-family: Helvetica;
    font-weight: 999;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--white);
    margin: auto;
    /* box-shadow: 0px 0px 10px 2px var(--orange); */
  }
  .rvp-go-to-top {
    color: var(--orange);
    position: fixed;
    bottom: 100px;
    right: -80px;
    font-size: 40px;
    font-family: Robota;
    text-transform: uppercase;
    transform: rotateZ(-90deg);
    cursor: pointer;
    z-index: 1 !important;
  }
  .rvp-pointer {
    cursor: default;
  }
  .rvp-long-arrow {
    width: 50px;
  }
  .rvp-long-arrow path {
    fill: var(--orange);
  }
  .rvp-form-background {
    position: relative;
    min-height: 600px;
  }
  .rvp-black {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(5px);
    z-index: 0;
    background-image: url("../images/PPEdit.jpg");
    background-size: cover;
  }
  .rvp-flex-sidepanel {
    /* z-index: 1; */
    position: absolute;
    background-color: rgba(0, 0, 0, 0.534);
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  .rvp-side-content {
    width: 80%;
  }
  .rvp-side-heading {
    color: var(--white);
    font-family: Robota;
    text-transform: uppercase;
    font-size: 40px;
  }
  .rvp-side-para {
    font-family: Helvetica;
    color: var(--white);
    text-align: justify;
  }
  .rvp-form-style {
    padding: 20px 10px 20px 10px;
  }
  @media (max-width: 580px) {
    .rvp-go-to-top {
      font-size: 30px;
      bottom: 100px;
      right: -60px;
    }
    .rvp-long-arrow {
      width: 30px !important;
    }
  }
  @media (max-width: 475px) {
    .rvp-robo-heading {
      font-size: 40px;
    }
    .rvp-robo-heading::after {
      width: 15px;
      height: 15px;
      border-top-style: solid;
      border-left-style: solid;
      border-color: var(--orange);
      border-width: 5px;
    }
    .rvp-robo-heading::before {
      width: 15px;
      height: 15px;
      border-bottom-style: solid;
      border-right-style: solid;
      border-color: var(--orange);
      border-width: 5px;
    }
    .rvp-robo-subhead {
      font-size: 30px;
    }
  }
</style>

<div
  class={success ? 'rvp-result-modal rvp-result-expand' : 'rvp-result-modal'}>
  <div class="rvp-modal-body text-center">
    <h3 class="rvp-modal-heading text-left">Status</h3>
    <p class="rvp-modal-para text-left">{success}</p>
    <button on:click={closeModal}>Close</button>
  </div>
</div>

<div class="container-fluid rvp-anti-scroll rvp-overflow-hidden">
  <div class="container-fluid text-center rvp-robospridh rvp-release">
    <div>
      <h1 class="rvp-robo-heading">Application</h1>
      <h2 class="rvp-robo-subhead">Be one with us</h2>
      <button class="rvp-register" on:click={registerationForm}>
        Apply Now
      </button>
    </div>
  </div>
  <div class="container-fluid text-center rvp-roboform rvp-transparent">
    <div class="rvp-go-to-top rvp-pointer" on:click={goBack}>
      Go Back
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="long-arrow-alt-right"
        class="svg-inline--fa fa-long-arrow-alt-right fa-w-14 rvp-long-arrow"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512">
        <path
          fill="currentColor"
          d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12
          12h301.941v46.059c0 21.382 25.851 32.09 40.971
          16.971l86.059-86.059c9.373-9.373 9.373-24.569
          0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
      </svg>
    </div>
    <Heading {headingName} />
    <div class="container text-left rvp-form">
      <div class="row justify-content-center">
        <div class="col col-12 col-lg-6 rvp-form-background">
          <div class="rvp-black" />
          <div class="rvp-flex-sidepanel">
            <div class="rvp-side-content">
              <h3 class="rvp-side-heading">Contact Us</h3>
              <p class="rvp-side-para">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a distribution of
                letters.
              </p>
              <h3 class="rvp-side-heading">Gwalior</h3>
              <p class="rvp-side-para">
                Flat N.204, Sugandha Apartment,
                <br />
                Govindpuri Chauraha
                <br />
                Next To Millenium Apartment Behind Police Chawki,
                <br />
                Gwalior(M.P) - 474011
                <br />
                <br />
                {contacts.phone1}, {contacts.phone2}
                <br />
                <br />
                {contacts.email1}
              </p>
            </div>
          </div>
        </div>
        <div class="col col-12 col-lg-6 rvp-application-form">
          <h3 class="rvp-participant">Fill Application</h3>
          <form class="rvp-form-style">
            <input
              class="rvp-input"
              placeholder="First name*"
              bind:value={fname}
              required />
            <input
              class="rvp-input"
              placeholder="Last name*"
              bind:value={lname}
              required />
            <input
              class="rvp-input"
              placeholder="Father's name*"
              bind:value={father}
              required />
            <input
              class="rvp-input"
              placeholder="Contact*"
              maxlength="10"
              minlength="10"
              bind:value={phone}
              required />
            <input
              class="rvp-input"
              type="email"
              placeholder="Email*"
              bind:value={email}
              required />
            <input
              class="rvp-input"
              placeholder="College*"
              bind:value={college}
              required />
            <input
              class="rvp-input"
              placeholder="Branch*"
              bind:value={branch}
              required />
            <input
              class="rvp-input"
              placeholder="Year*"
              bind:value={year}
              required />
            <div class="rvp-button-center">
              <button
                class="rvp-submit-button"
                type="button"
                on:click={applyButton}>
                Apply
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</div>
