<script>
  import ContactsContent from "../Contents/ContactsContent";

  let name = "";
  let email = "";
  let mssg = "";
  let subject = "";

  let confirmation = "";

  async function submitButton() {
    await fetch("http://localhost:3000/mail-me", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        mssg
      })
    })
      .then(response => response.json())
      .then(data => {
        confirmation = response;
        console.log(confirmation.status);
      })
      .catch(err => {
        confirmation = "Mail could not be sent. Please try again later";
      });
  }
  const contacts = ContactsContent.contacts;
</script>

<style>
  .rvp-form {
    margin-top: 30px;
    box-shadow: 0px 0px 10px 2px var(--cream);
  }
  .rvp-form-heading {
    color: var(--orange);
    font-family: Robota;
    text-transform: uppercase;
    margin: 10px 15px 20px 15px;
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
  .rvp-input-message {
    border-radius: 20px;
    min-height: 200px;
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
    margin-bottom: 20px;
  }
  .rvp-social {
    padding: 0;
    margin: 0;
    min-height: 100%;
    min-width: 100px;
    position: relative;
  }
  .rvp-social-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("../Images/IMG-20190803-WA0068.jpg");
    filter: blur(3px);
    background-size: cover;
  }
  .rvp-social-content {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.534);
  }
  .rvp-icons {
    margin-right: 40px;
  }
  .rvp-icons:nth-child(4) {
    margin-right: 0px;
  }
  .rvp-icons svg {
    height: 30px;
    width: 30px;
  }
  .rvp-icons:nth-child(3) svg {
    background-color: var(--white);
    border-radius: 10px;
  }
  .rvp-icons:nth-child(3) svg path {
    fill: var(--black) !important;
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
  .rvp-social-links {
    margin-top: 30px;
  }
  @media (max-width: 992px) {
    .rvp-social {
      min-height: 600px;
    }
  }
  @media (max-width: 772px) {
    .rvp-side-para {
      text-align: left;
    }
  }
</style>

<div class="container rvp-form">
  <div class="row justify-content-center">
    <div class="col col-12 col-lg-6 text-left">
      <form>
        <h3 class="rvp-form-heading">Get in touch</h3>
        <input
          type="text"
          class="rvp-input"
          placeholder="Name*"
          bind:value={name}
          required />
        <input
          type="email"
          class="rvp-input"
          placeholder="Email*"
          bind:value={email}
          required />
        <input
          type="text"
          class="rvp-input"
          placeholder="Subject*"
          bind:value={subject}
          required />
        <textarea
          type="text"
          class="rvp-input rvp-input-message"
          placeholder="Type your message here...*"
          maxlength="300"
          bind:value={mssg}
          required />
        <button class="rvp-submit-button" type="button" on:click={submitButton}>
          Submit
        </button>
      </form>
    </div>
    <div class="col col-12 col-lg-6 rvp-social">
      <div class="rvp-social-background" />
      <div class="rvp-social-content text-left">
        <div class="rvp-side-content">
          <h3 class="rvp-side-heading">Contact Us</h3>
          <p class="rvp-side-para">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a distribution of letters.
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
          <div class="rvp-social-links">
            <a class="rvp-icons" target="_blank" href={contacts.ytLink}>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="youtube"
                class="svg-inline--fa fa-youtube fa-w-18"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512">
                <path
                  fill="var(--white)"
                  d="M549.655
                  124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64
                  288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003
                  24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412
                  132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284
                  47.821C117.22 448 288 448 288 448s170.78 0
                  213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821
                  11.412-42.867 11.412-132.305
                  11.412-132.305s0-89.438-11.412-132.305zm-317.51
                  213.508V175.185l142.739 81.205-142.739 81.201z" />
              </svg>
            </a>
            <a class="rvp-icons" target="_blank" href={contacts.twitterLink}>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="twitter-square"
                class="svg-inline--fa fa-twitter-square fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">
                <path
                  fill="var(--white)"
                  d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48
                  48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9
                  158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2
                  0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4
                  81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5
                  29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6
                  8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1
                  32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0
                  35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2
                  28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9
                  34z" />
              </svg>
            </a>
            <a class="rvp-icons" target="_blank" href={contacts.instaLink}>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="instagram"
                class="svg-inline--fa fa-instagram fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">
                <path
                  fill="var(--white)"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9
                  114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1
                  0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7
                  74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8
                  26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8
                  26.8zm76.1
                  27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9
                  0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1
                  147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37
                  2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2
                  34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8
                  19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7
                  2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7
                  9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9
                  132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7
                  29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
            <a class="rvp-icons" target="_blank" href={contacts.fbLink}>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook-square"
                class="svg-inline--fa fa-facebook-square fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">
                <path
                  fill="var(--white)"
                  d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48
                  48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48
                  93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81
                  0-40.42 19.12-40.42 38.73V256h68.78l-11
                  71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
