<script>
  import { onMount } from "svelte";
  import Applicants from "./Applicants.svelte";
  import Contestants from "./Contestants.svelte";
  import Footer from "../components/Footer.svelte";

  //new admin variables:
  let fname;
  let lname;
  let email;
  let password;
  let password2;

  let admin;
  let admin_fname;
  let admin_lname;
  let applicants;
  let contestants;
  let success = false;
  let failure = "";

  const noApplicants = false;

  function closeModal() {
    success = false;
  }

  function openModal() {
    success = true;
  }

  const createAdmin = async function() {
    failure = "";
    if (!fname || !lname || !email || !password || !password2) {
      failure = "Please fill all the details.";
      return;
    }
    if (password != password2) {
      failure = "The provided passwords do not match";
      return;
    }

    fetch("http://localhost:3000/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fname,
        lname,
        email,
        password
      })
    })
      .then(result => result.json())
      .then(result => {
        failure = result.success;
      })
      .catch(err => {
        failure = "Admin could not be created. Please try again in some time.";
      });
  };

  onMount(async () => {
    admin_lname = localStorage.getItem("lname");
    admin_fname = localStorage.getItem("fname");

    const creds = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
        email: localStorage.getItem("email"),
        role: localStorage.getItem("role")
      }
    };

    const promise = await fetch("http://localhost:3000/admin", creds);
    const result = await promise.json();
    admin = result.success;

    if (!admin) {
      localStorage.clear();
      window.location.href = "/login";
    }

    const applications = await fetch(
      "http://localhost:3000/admin/applications",
      {
        method: "GET",
        header: {
          "Content-Type": "application/json"
        }
      }
    );

    const response = await applications.json();

    if (response.length > 0) {
      applicants = response;
    } else {
      applicants = noApplicants;
    }
  });

  const findCompetitors = async function() {
    const contest = await fetch("http://localhost:3000/admin/robospridh", {
      method: "GET",
      header: {
        "Content-Type": "application/json"
      }
    });

    const response = await contest.json();

    if (response.length > 0) {
      contestants = response;
    } else {
      contestants = noApplicants;
    }
  };
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }
  .rvp-hero-bg {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0 !important;
    height: 100vh;
    background-image: radial-gradient(
      farthest-corner at 40px 40px,
      var(--black) 30%,
      var(--deep-blue) 100%
    );
    background-attachment: fixed;
    margin-top: -80px;
    overflow: hidden;
  }
  .rvp-hero-body {
    border-radius: 5px;
    padding: 16px;
  }
  .rvp-hero-body h1 {
    font-family: Robota;
    text-transform: uppercase;
    color: var(--orange);
    font-size: 5rem;
  }
  .rvp-hero-body h2 {
    font-family: Helvetica;
    text-transform: uppercase;
    color: var(--orange);
    font-size: 2rem;
    margin-bottom: 16px;
  }
  .rvp-new-admin {
    padding: 8px 16px;
    color: var(--orange);
    font-family: Helvetica;
    background-color: transparent;
    border-style: solid;
    border-color: var(--orange);
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
    margin-bottom: 15px;
  }
  .rvp-admin-notice {
    color: red;
  }
  .rvp-confirm {
    background-color: var(--orange) !important;
    color: var(--white) !important;
  }
  .rvp-nav-ul {
    margin: 16px 0px;
    border-bottom-color: var(--deep-blue);
  }
  .rvp-mini-nav {
    color: var(--orange) !important;
    font-size: 2rem;
    text-transform: uppercase;
    font-family: Robota;
    padding: 8px 16px;
    /* border-bottom-color: white; */
  }
  .rvp-mini-nav:hover {
    border-color: var(--deep-blue);
    /* border-bottom-color: white; */
  }
  .active {
    border-color: var(--deep-blue) !important;
    border-bottom-color: white !important;
  }
  .rvp-nav-content {
    padding: 16px;
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
    margin: 0px 8px 32px 8px;
  }

  @media (max-width: 560px) {
    .rvp-hero-body h1 {
      font-size: 4rem;
    }
    .rvp-hero-body h2 {
      font-size: 1.5rem;
    }
    .rvp-mini-nav {
      font-size: 1.5rem;
      padding: 8px 8px;
    }
  }
</style>

<div class="container-fluid rvp-hero-bg">
  <div class="rvp-hero-body text-center">
    {#if admin_fname && admin_lname}
      <h1>Welcome</h1>
      <h2>{admin_fname} {admin_lname}</h2>
      <button on:click={openModal} class="rvp-new-admin">
        Create new admin
      </button>
    {:else}
      <h2>Please sign in to continue</h2>
    {/if}
  </div>
</div>

<div
  class={success ? 'rvp-result-modal rvp-result-expand' : 'rvp-result-modal'}>
  <div class="rvp-modal-body text-center">
    <h3 class="rvp-modal-heading text-left">Create a new admin</h3>
    <form>
      <input
        class="rvp-input"
        type="text"
        placeholder="First name*"
        bind:value={fname}
        required />
      <input
        class="rvp-input"
        type="text"
        placeholder="Last name*"
        bind:value={lname}
        required />
      <input
        class="rvp-input"
        type="email"
        placeholder="Email*"
        bind:value={email}
        required />
      <input
        class="rvp-input"
        type="password"
        placeholder="Password*"
        bind:value={password}
        required />
      <input
        class="rvp-input"
        type="password"
        placeholder="Confirm Password*"
        bind:value={password2}
        required />
      <p class="rvp-admin-notice">{failure}</p>
      <button type="button" class="rvp-confirm" on:click={createAdmin}>
        Create
      </button>
      <button type="button" on:click={closeModal}>Close</button>
    </form>
  </div>
</div>

{#if admin}
  <nav>
    <div
      class="nav nav-tabs justify-content-center rvp-nav-ul"
      id="nav-tab"
      role="tablist">
      <a
        class="nav-item nav-link active rvp-mini-nav"
        id="nav-home-tab"
        data-toggle="tab"
        href="#nav-home"
        role="tab"
        aria-controls="nav-home"
        aria-selected="true">
        Applicantions
      </a>
      <a
        class="nav-item nav-link rvp-mini-nav"
        id="nav-profile-tab"
        data-toggle="tab"
        href="#nav-profile"
        role="tab"
        aria-controls="nav-profile"
        aria-selected="false"
        on:click={findCompetitors}>
        Robospridh
      </a>
    </div>
  </nav>
  <div class="tab-content rvp-nav-content" id="nav-tabContent">
    <div
      class="tab-pane fade show active"
      id="nav-home"
      role="tabpanel"
      aria-labelledby="nav-home-tab">
      {#if applicants}
        <Applicants {applicants} />
      {:else}
        <div class="container-fluid text-center">No applicants found</div>
      {/if}
    </div>
    <div
      class="tab-pane fade"
      id="nav-profile"
      role="tabpanel"
      aria-labelledby="nav-profile-tab">
      <div class="container-fluid">
        {#if contestants}
          <Contestants {contestants} />
        {:else}
          <div class="container-fluid text-center">No applicants found</div>
        {/if}
      </div>
    </div>
  </div>
  <Footer />
{/if}
