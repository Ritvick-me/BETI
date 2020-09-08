<script>
  import Heading from "../components/Heading-3.svelte";
  import Footer from "../components/Footer.svelte";

  let headingName = "Register";
  const term = 6;
  const __currentYear = 2017;
  const __participants = 3;
  let education;

  let year = [];
  let member = [];
  let college = [];
  let branch = [];
  let email = [];
  let phone = [];
  let proof = [];

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

  function registerButton() {}
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
    padding: 15px 20px 15px 20px;
    box-shadow: 0px 0px 10px 2px var(--cream);
  }
  .rvp-participant {
    color: var(--orange);
    font-family: Robota;
    text-transform: uppercase;
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
    margin-bottom: 20px;
  }
  .rvp-input-break {
    width: 49.5%;
  }
  select.rvp-input-break {
    margin-left: 0.5%;
  }
  .rvp-center-input {
    margin: auto;
  }
  .rvp-participant-section {
    padding: 0;
    margin: 0;
    margin-bottom: 50px;
  }
  .rvp-button-center {
    width: fit-content;
    text-align: center;
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
  .rvp-id-proof {
    width: 49%;
    padding: 10px 15px;
  }
  @media (max-width: 992px) {
    .rvp-input-break {
      width: 100%;
    }
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

<div class="container-fluid rvp-anti-scroll rvp-overflow-hidden">
  <div class="container-fluid text-center rvp-robospridh rvp-release">
    <div>
      <h1 class="rvp-robo-heading">Robospridh</h1>
      <h2 class="rvp-robo-subhead">Competition</h2>
      <button class="rvp-register" on:click={registerationForm}>
        Register
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
      <form>
        {#each Array(__participants) as _, i}
          <div class="rvp-participant-section">
            <h3 class="rvp-participant">Participant {i + 1}:</h3>
            <!-- Name of Participant -->
            <input
              class="rvp-input"
              placeholder="Name*"
              bind:value={member[i]}
              required />
            <!-- College of Participant -->
            <input
              class="rvp-input"
              placeholder="College*"
              bind:value={college[i]}
              required />
            <div class="rvp-center-input">
              <!-- Branch of Participant -->
              <input
                class="rvp-input rvp-input-break"
                placeholder="Branch*"
                bind:value={branch[i]}
                required />
              <!-- Year of Participant -->
              <select
                bind:value={year[i]}
                class="rvp-input rvp-input-break"
                required>
                <option value="">Year</option>
                {#each Array(term) as _, i}
                  <option value={__currentYear + i} aria-placeholder="Year*">
                    {__currentYear + i}
                  </option>
                {/each}
              </select>
            </div>
            <!-- Email of Participant -->
            <input
              class="rvp-input"
              type="email"
              placeholder="Email*"
              bind:value={email[i]}
              required />
            <!-- Phone number of Participant -->
            <input
              class="rvp-input"
              placeholder="Phone*"
              bind:value={phone[i]}
              onkeydown="return ((event.charCode >= 65 || event.charCode <= 90)
              || (event.charCode >= 97 || event.charCode <= 122) ||
              (event.charCode == 32))"
              maxlength="10"
              minlength="10"
              required />
            <!-- ID proof of Participant -->
            <div class="rvp-center-input">
              <label for="proof" class="rvp-id-proof">College ID proof:</label>
              <input
                bind:value={proof[i]}
                class="rvp-input rvp-input-break"
                type="file"
                accept="image/*"
                placeholder="Phone*"
                required />
            </div>
          </div>
        {/each}
        <!-- Date of registration -->
        <input
          class="rvp-input rvp-input-break"
          type="date"
          placeholder="Phone*"
          required />
        <!-- College Category -->
        <select
          bind:value={education}
          class="rvp-input rvp-input-break"
          required>
          <option value="">College Category</option>
          <option value="IIT" placeholder="Select">IIT</option>
        </select>
        <br />
        <div class="rvp-button-center">
          <button
            class="rvp-submit-button"
            type="button"
            on:click={registerButton}>
            Confirm
          </button>
        </div>
      </form>
      <br />
    </div>
  </div>
  <Footer />
</div>
