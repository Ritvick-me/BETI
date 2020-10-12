<script>
  import { Router, Link, Route } from "svelte-routing";
  import { onMount } from "svelte";
  import HomePage from "../HomePage/HomePage.svelte";
  import AboutPage from "../AboutPage/AboutUsPage.svelte";
  import ServicesPage from "../ServicesPage/ServicePage.svelte";
  import EventsPage from "../EventsPage/EventPage.svelte";
  import Robospridh from "../EventsPage/Robospridh.svelte";
  import Application from "../EventsPage/Application.svelte";
  import Contact from "../ContactPage/ContactPage.svelte";
  import LoginPage from "../AdminPage/Login.svelte";
  import AdminPage from "../AdminPage/AdminPage.svelte";
  import NotFound from "./NotFound.svelte";

  let navToggler = true;
  let eventToggler = false;
  let login = "Login";
  let logout = false;

  function navScroller() {
    window.$(document).scroll(function() {
      window
        .$(".rvp-nav-bg")
        .toggleClass("rvp-nav-alt", window.$(this).scrollTop() > 50);
      window
        .$(".rvp-toggler")
        .toggleClass("rvp-toggler-alt", window.$(this).scrollTop() > 50);
      window
        .$(".rvp-nav-bg .rvp-links")
        .toggleClass("rvp-font-alt", window.$(this).scrollTop() > 50);
      // window
      //   .$(".rvp-events")
      //   .removeClass("rvp-white-arrow", window.$(this).scrollTop() > 50);
      // window
      //   .$(".rvp-events")
      //   .addClass("rvp-white-arrow", window.$(this).scrollTop() < 50);
    });
  }

  function openDropDown() {
    eventToggler = !eventToggler;
  }

  function closeDropDown() {
    eventToggler = false;
  }

  function openModal() {
    let nav = window.$("#rvp-nav-modal");
    nav.removeClass("rvp-disp-none");
    let close = window.$("#rvp-close-btn path");
    close.removeClass("rvp-fade-out");
  }

  function closeModal() {
    let nav = window.$("#rvp-nav-modal");
    nav.addClass("rvp-disp-none");
    let close = window.$("#rvp-close-btn path");
    close.addClass("rvp-fade-out");
  }

  navScroller();

  function logoutPopup() {
    logout = true;
  }

  function logoutConfirm() {
    localStorage.clear();
    window.location.href = window.location.href;
  }

  function closePopup() {
    logout = false;
  }

  onMount(async () => {
    // localStorage.clear();
    if (localStorage.getItem("token")) {
      login = "Admin";
    }
  });

  export let url = "";
</script>

<style>
  .rvp-nav-bg {
    background-color: transparent;
    position: sticky;
    transition-duration: 0.7s;
    height: 80px;
    z-index: 2 !important;
  }
  .rvp-logo {
    height: 50px;
  }
  .rvp-toggler {
    border-color: var(--white);
  }
  .rvp-links {
    position: relative;
    cursor: pointer;
    color: var(--white) !important;
    font-weight: 999;
    font-family: Helvetica;
    font-size: 1.2rem;
    padding: 5px 20px 5px 20px !important;
    width: auto !important;
    z-index: 999;
    transition-duration: 0.7s;
  }
  .rvp-font-alt {
    color: var(--black) !important;
    transition-duration: 0.7s;
  }
  .rvp-links:before {
    position: absolute;
    content: "";
    height: 0;
    width: 0;
    border-style: solid;
    border-color: transparent;
    border-top: none;
    border-right: none;
    bottom: 0;
    left: 0;
    transition-duration: 0.4s;
  }
  .rvp-links:after {
    position: absolute;
    content: "";
    height: 0;
    width: 0;
    border-style: solid;
    border-color: transparent;
    border-bottom: none;
    border-left: none;
    top: 0px;
    right: 0;
    transition-duration: 0.4s;
  }
  .rvp-links:hover:after {
    height: 20px;
    width: 20px;
    border-color: var(--orange);
    transition-duration: 0.4s;
  }
  .rvp-links:hover:before {
    height: 20px;
    width: 20px;
    border-color: var(--orange);
    transition-duration: 0.4s;
  }
  .rvp-closer {
    padding: 20px 10px 0px 0px;
    height: 10vh;
  }
  .rvp-cross {
    height: 30px;
  }
  #rvp-close-btn {
    background-color: transparent;
    border: none;
    padding: 0;
    opacity: 1;
    transition-duration: 0.5s;
  }
  #rvp-close-btn path {
    fill: var(--black);
    transition-duration: 2s;
  }
  #rvp-close-btn:hover path {
    fill: var(--orange);
    transition-duration: 0.5s;
  }
  .rvp-mobile-navbar {
    position: fixed;
    height: 100vh;
    width: 100vw;
    bottom: 0;
    left: 0;
    z-index: 3 !important;
    background-color: var(--black);
    transition-duration: 1s;
    overflow: hidden;
  }
  .rvp-row {
    position: relative;
    height: 100vh;
    margin-top: -80px;
  }
  .rvp-close {
    position: absolute;
    bottom: 20px;
    margin: auto;
  }
  .rvp-close button {
    border-style: solid;
    border-color: var(--orange);
    border-width: 2px;
    font-size: 25px;
    font-family: Helvetica;
    background-color: var(--white);
    color: var(--orange);
    transition-duration: 0.5s;
  }
  .rvp-close button:hover {
    border-color: var(--deep-blue);
    transition-duration: 0.5s;
    color: var(--deep-blue);
  }
  .rvp-modal-links {
    width: 200px;
    padding: 0px;
    color: var(--white);
    font-family: Helvetica !important;
    font-size: 25px;
    margin-bottom: 15px;
    position: relative;
  }
  .rvp-modal-links:before {
    position: absolute;
    content: "";
    height: 0;
    width: 0;
    border-style: solid;
    border-color: transparent;
    border-top: none;
    border-right: none;
    bottom: 0;
    left: 0;
    transition-duration: 0.4s;
  }
  .rvp-modal-links:after {
    position: absolute;
    content: "";
    height: 0;
    width: 0;
    border-style: solid;
    border-color: transparent;
    border-bottom: none;
    border-left: none;
    top: 0px;
    right: 0;
    transition-duration: 0.4s;
  }
  .rvp-modal-links:hover:after {
    height: 20px;
    width: 20px;
    border-color: var(--orange);
    transition-duration: 0.4s;
  }
  .rvp-modal-links:hover:before {
    height: 20px;
    width: 20px;
    border-color: var(--orange);
    transition-duration: 0.4s;
  }
  .rvp-disp-none {
    height: 0px;
    transition-duration: 1s;
  }
  .rvp-fade-out {
    fill: transparent !important;
    transition-duration: 2s;
  }
  .rvp-nav-alt {
    background-color: var(--white) !important;
    transition-duration: 0.7s;
  }
  .rvp-font-alt {
    color: var(--black) !important;
    transition-duration: 0.7s;
  }
  .rvp-toggler-alt {
    border-color: var(--black);
    background-color: var(--black);
  }
  .rvp-events {
    position: relative;
  }
  .rvp-events-pointer-open::after {
    position: absolute;
    content: "";
    width: 8px;
    height: 8px;
    border-style: solid;
    border-left-style: none;
    border-top-style: none;
    border-width: 3px;
    border-color: var(--black);
    top: 14px;
    right: 8px;
    transition-duration: 0.7s;
    transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
  .rvp-events-pointer-close::after {
    transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -ms-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
  }
  /* .rvp-white-arrow:after {
    border-color: var(--white) !important;
  } */
  .rvp-events span {
    cursor: pointer;
  }
  .rvp-drop-down {
    position: absolute;
    background-color: var(--white);
    top: 58px;
    left: 0;
    max-height: 0;
    overflow: hidden;
    transition-duration: 1s;
  }
  .rvp-drop {
    max-height: 200px !important;
    transition-duration: 1s;
    box-shadow: 0px 0px 3px 1px var(--cream);
  }
  .rvp-drop-down ul {
    list-style-type: none;
    font-family: Helvetica;
    padding: 0 20px;
    width: 220px;
  }
  .rvp-drop-down ul li {
    color: black !important;
    margin: 5px 0;
    transition-duration: 0.5s;
  }
  .rvp-drop-down ul li:hover {
    color: var(--orange) !important;
    transition-duration: 0.5s;
  }

  /* dasdsdasasasasasasasasasasasasasasasasasasasasasasasasasasasas */

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
  .rvp-result-modal-background {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.418);
    z-index: 0 !important;
  }
  .rvp-result-modal-body {
    width: 400px;
    max-width: 95%;
    margin: 0 2.5%;
    background-color: var(--white);
    padding: 16px;
    z-index: 1 !important;
  }
  .rvp-result-modal-body button {
    border-style: none;
    background-color: var(--deep-blue);
    color: var(--white);
    padding: 8px 16px;
    text-transform: uppercase;
    font-family: Helvetica;
    letter-spacing: 2px;
  }
  .rvp-result-modal-heading {
    color: var(--orange);
    font-family: Robota;
    text-transform: uppercase;
    margin: 0px 8px 8px 8px;
  }
  .rvp-result-modal-para {
    font-family: Helvetica;
    margin: 0px 8px 8px 8px;
  }
  .rvp-confirm {
    background-color: var(--orange) !important;
    color: var(--white) !important;
  }

  @media (max-width: 992px) {
    .rvp-nav-bg {
      padding: 0 !important;
    }
    .rvp-logo {
      margin-left: 20px;
    }
    .rvp-collapser {
      background-color: var(--black) !important;
      padding: 0 !important;
      max-width: 180px !important;
    }
    .rvp-toggler {
      margin-right: 20px;
    }
    .rvp-links {
      margin-left: 0px;
      width: 150px !important;
    }
    .rvp-mobile-navbar {
      background-color: var(--white);
    }
    .rvp-modal-links {
      color: var(--black);
    }
  }
</style>

<Router {url}>
  <nav
    class={navToggler ? 'navbar sticky-top navbar-expand-lg navbar-dark rvp-nav-bg' : 'rvp-nav-alt'}>
    <div class="navbar-brand" href=" ">
      <Link to="/">
        <img class="rvp-logo" src="../favicon.png" alt="logo" />
      </Link>
    </div>
    <button
      class={navToggler ? 'navbar-toggler rvp-toggler' : 'rvp-toggler-alt'}
      type="button"
      id="id-button"
      on:click={openModal}>
      <span class="navbar-toggler-icon" />
    </button>
    <div class="d-none d-lg-block collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-lg-auto rvp-collapser">
        <li class="nav-item active">
          <Link to="/">
            <span
              class={navToggler ? 'nav-link rvp-links' : 'rvp-font-alt'}
              on:click={closeDropDown}>
              Home
            </span>
          </Link>
        </li>
        <li class="nav-item">
          <Link to="about">
            <span class="nav-link rvp-links" on:click={closeDropDown}>
              About Us
            </span>
          </Link>
        </li>
        <li class="nav-item">
          <Link to="services">
            <span class="nav-link rvp-links" on:click={closeDropDown}>
              Services
            </span>
          </Link>
        </li>
        <li
          class={eventToggler ? 'nav-item rvp-events rvp-events-pointer-open rvp-events-pointer-close' : 'nav-item rvp-events rvp-events-pointer-open'}>
          <span class="nav-link rvp-links" on:click={openDropDown}>Events</span>
          <div
            class={eventToggler ? 'rvp-drop-down rvp-drop' : 'rvp-drop-down'}>
            <ul>
              <Link to="events">
                <li on:click={closeDropDown}>Workshops</li>
              </Link>
              <Link to="events">
                <li on:click={closeDropDown}>Tutorials</li>
              </Link>
              <Link to="events/robospridh">
                <li on:click={closeDropDown}>Robospridh Competition</li>
              </Link>
              <Link to="events/application">
                <li on:click={closeDropDown}>Register with us</li>
              </Link>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <Link to="contact-us">
            <span class="nav-link rvp-links" on:click={closeDropDown}>
              Contact Us
            </span>
          </Link>
        </li>
        <li class="nav-item">
          <Link to="login">
            <span class="nav-link rvp-links" on:click={closeDropDown}>
              {login}
            </span>
          </Link>
        </li>
        {#if login == 'Admin'}
          <li class="nav-item">
            <span
              class="nav-link rvp-links"
              on:click={() => {
                closeDropDown();
                logoutPopup();
              }}>
              Logout
            </span>
          </li>
        {/if}
      </ul>
    </div>
  </nav>
  <nav>
    <div
      class="container-fluid d-lg-none rvp-mobile-navbar rvp-disp-none"
      id="rvp-nav-modal">
      <div class="rvp-closer sticky-top text-right">
        <button id="rvp-close-btn" on:click={closeModal}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="times"
            class="svg-inline--fa fa-times fa-w-11 rvp-cross"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 352 512">
            <path
              class="rvp-fade-out"
              d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19
              0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28
              75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28
              12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28
              12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48
              0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48
              0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
          </svg>
        </button>
      </div>
      <div class="row justify-content-center align-items-center rvp-row">
        <div class="col col-auto text-center">
          <Link to="/">
            <div class="rvp-modal-links" on:click={closeModal}>Home</div>
          </Link>
          <Link to="about">
            <div class="rvp-modal-links" on:click={closeModal}>About Us</div>
          </Link>
          <Link to="services">
            <div class="rvp-modal-links" on:click={closeModal}>Services</div>
          </Link>
          <Link to="events">
            <div class="rvp-modal-links" on:click={closeModal}>Events</div>
          </Link>
          <Link to="events/robospridh">
            <div class="rvp-modal-links" on:click={closeModal}>Robospridh</div>
          </Link>
          <Link to="events/application">
            <div class="rvp-modal-links" on:click={closeModal}>Application</div>
          </Link>
          <Link to="contact-us">
            <div class="rvp-modal-links" on:click={closeModal}>Contact Us</div>
          </Link>
          <Link to="login">
            <div class="rvp-modal-links" on:click={closeModal}>{login}</div>
          </Link>
          {#if login == 'Admin'}
            <div
              class="rvp-modal-links"
              on:click={() => {
                closeModal();
                logoutPopup();
              }}>
              Logout
            </div>
          {/if}
        </div>
        <div class="rvp-close">
          <button on:click={closeModal}>Go back</button>
        </div>
      </div>
    </div>
  </nav>
  <div>
    <!-- <Route path="blog/:id" component="{BlogPost}" /> -->
    <Route path="about" component={AboutPage} />
    <Route path="services" component={ServicesPage} />
    <Route path="events" component={EventsPage} />
    <Route path="events/robospridh" component={Robospridh} />
    <Route path="events/application" component={Application} />
    <Route path="contact-us" component={Contact} />
    <Route path="admin-panel/:id" let:params component={AdminPage} />
    <Route path="login" component={LoginPage} />
    <Route path="/">
      <HomePage />
    </Route>
    <Route component={NotFound} />
  </div>
</Router>

<div class={logout ? 'rvp-result-modal rvp-result-expand' : 'rvp-result-modal'}>
  <div class="rvp-result-modal-background" />
  <div class="rvp-result-modal-body text-center">
    <h3 class="rvp-result-modal-heading text-left">Confirm Action</h3>
    <p class="rvp-result-modal-para text-left">
      Are you sure you wish to logout of this account?
    </p>
    <button class="rvp-confirm" on:click={logoutConfirm}>Logout</button>
    <button on:click={closePopup}>Close</button>
  </div>
</div>
