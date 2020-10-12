<script>
  import { onMount } from "svelte";

  let email;
  let password;
  let loginVisibility = true;

  let failure = "";

  function closeModal() {
    failure = "";
  }

  async function loginButton() {
    failure = "";
    if (!email || !password) {
      failure = "Please provide a valid email ID and password";
      return;
    }

    const creds = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    };

    const promise = await fetch("http://localhost:3000/login", creds);
    const result = await promise.json();
    console.log(result);
    if (!result.failure) {
      window.location.href = result.redirect;
      localStorage.setItem("token", result.jwt);
      localStorage.setItem("email", result.email);
      localStorage.setItem("id", result.id);
      localStorage.setItem("fname", result.fname);
      localStorage.setItem("lname", result.lname);
    } else {
      failure = result.failure;
    }
  }

  onMount(async () => {
    if (localStorage.getItem("token")) {
      window.location.href =
        "/admin-panel/" +
        localStorage.getItem("fname") +
        "-" +
        localStorage.getItem("id");
      loginVisibility = false;
    }
  });
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
  .rvp-login-body {
    background-color: var(--white);
    border-radius: 5px;
    width: 550px;
    padding: 16px;
  }
  .rvp-login-body h3 {
    color: var(--orange);
    font-family: Robota;
    text-transform: uppercase;
    font-weight: 999;
    letter-spacing: 2px;
    font-size: 2rem;
  }
  .rvp-login-input {
    width: 100%;
    padding: 8px 16px;
    margin: 10px 0px 5px 0px;
    border-radius: 50px;
    border-style: solid;
    border-color: var(--cream);
  }
  .rvp-failure {
    color: rgb(185, 28, 28);
    margin-left: 16px;
  }
  .rvp-login-btn {
    background-color: var(--deep-blue);
    color: var(--white);
    border-style: none;
    font-family: Helvetica;
    font-size: 1.3rem;
    letter-spacing: 2px;
    padding: 8px 24px;
    margin: 10px 0px;
    border-radius: 50px;
    text-transform: uppercase;
    font-weight: 999;
  }

  @media (max-width: 560px) {
    .rvp-login-body {
      width: 95%;
    }
  }
</style>

<div class="container-fluid rvp-hero-bg">
  {#if loginVisibility}
    <div class="rvp-login-body">
      <h3>Login</h3>
      <br />
      <form class="text-center">
        <input
          type="email"
          placeholder="Email"
          class="rvp-login-input"
          required
          bind:value={email} />
        <input
          type="password"
          required
          placeholder="Password"
          class="rvp-login-input"
          bind:value={password} />
        <p class="rvp-failure text-left">{failure}</p>
        <button class="rvp-login-btn" on:click={loginButton} type="button">
          Login
        </button>
      </form>
    </div>
  {/if}
</div>
