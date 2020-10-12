<script>
  export let hero;
</script>

<style>
  .rvp-hello {
    background-image: radial-gradient(
      farthest-corner at 40px 40px,
      var(--black) 30%,
      var(--deep-blue) 100%
    );
    background-attachment: fixed;
    min-height: 600px;
    padding: 0 !important;
    margin-top: -80px;
  }
  .rvp-top-row {
    padding-top: 100px;
    padding-bottom: 20px;
    max-width: 99vw;
    margin: 0px !important;
    color: white;
  }
  .rvp-h1 {
    font-family: Robota;
    margin: auto;
    font-size: 10rem;
    text-transform: uppercase;
  }
  .rvp-arrow {
    margin-top: 20px;
  }
  .rvp-arrow-second-svg {
    margin-top: -40px;
  }
  .rvp-arrow-third-svg {
    margin-top: -50px;
  }
  .rvp-arrow-first-svg path {
    fill: rgba(255, 255, 255, 0.294);
    animation: first-arrow;
    -moz-animation: first-arrow;
    animation-duration: 3s;
    -moz-animation-duration: 3s;
    animation-timing-function: ease-in-out;
    -moz-animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
  }
  @keyframes first-arrow {
    0% {
      opacity: 0;
    }
    15% {
      opacity: 1;
    }
    30% {
      opacity: 1;
    }
    55% {
      opacity: 1;
    }
    70% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @-moz-keyframes first-arrow {
    0% {
      opacity: 0;
    }
    15% {
      opacity: 1;
    }
    30% {
      opacity: 1;
    }
    55% {
      opacity: 1;
    }
    70% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  .rvp-arrow-second-svg path {
    fill: rgba(255, 255, 255, 0.575);
    animation: second-arrow;
    -moz-animation: second-arrow;
    animation-duration: 3s;
    -moz-animation-duration: 3s;
    animation-timing-function: ease-in-out;
    -moz-animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
  }
  @keyframes second-arrow {
    0% {
      opacity: 0;
    }
    15% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    85% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @-moz-keyframes second-arrow {
    0% {
      opacity: 0;
    }
    15% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    85% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  .rvp-arrow-third-svg path {
    fill: rgb(255, 255, 255);
    animation: third-arrow;
    -moz-animation: third-arrow;
    animation-duration: 3s;
    -moz-animation-duration: 3s;
    animation-timing-function: ease-in-out;
    -moz-animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
  }
  @keyframes third-arrow {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 0;
    }
    45% {
      opacity: 1;
    }
    85% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @-moz-keyframes third-arrow {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 0;
    }
    45% {
      opacity: 1;
    }
    85% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .rvp-who-we-are {
    background-color: var(--orange);
    width: 60vw;
    margin: auto;
    z-index: 2 !important;
    margin-top: -150px;
    margin-bottom: 0px;
    padding: 0px 10px;
    border-style: solid;
    border-width: 10px;
    border-color: var(--white);
  }

  .rvp-who-we-are h2 {
    color: white;
    font-family: Robota;
    text-transform: uppercase;
    font-size: 4rem;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .rvp-who-we-are p {
    color: white;
    font-family: Helvetica;
    font-size: 1rem;
    padding-bottom: 15px;
    margin-bottom: 20px;
  }

  .rvp-who-we-are h2::-moz-selection {
    color: var(--orange) !important;
    background: var(--white) !important;
  }

  .rvp-who-we-are p::selection {
    color: var(--orange) !important;
    background: var(--white) !important;
  }

  @media (max-width: 870px) {
    .rvp-h1 {
      font-size: 7rem;
      height: 7rem;
      margin-bottom: 15px;
    }
    .rvp-who-we-are {
      left: 10vw;
      width: 80vw;
    }
  }
  @media (max-width: 700px) {
    .rvp-h1 {
      font-size: 6rem;
      height: 7rem;
    }
  }
  @media (max-width: 552px) {
    .rvp-who-we-are h2 {
      font-size: 3rem;
    }
  }
  @media (max-width: 490px) {
    .rvp-h1 {
      font-size: 4.5rem;
      height: 5.5rem;
    }
    .rvp-who-we-are {
      width: 90vw;
      left: 5vw;
    }
  }
  @media (max-width: 370px) {
    .rvp-h1 {
      font-size: 4rem;
      height: 5.5rem;
    }
    .rvp-who-we-are h2 {
      font-size: 2.5rem;
    }
  }
</style>

<div class="container-fluid rvp-hello">
  <div class="row justify-content-center align-items-center rvp-top-row">
    <div class="col col-auto">
      <h1 class="rvp-h1 text-center">{hero.pageName}</h1>
      <h2 class="text-center">{hero.pageMantra}</h2>
      <div class="rvp-arrow text-center">
        <svg
          width="40px"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="chevron-down"
          class="svg-inline--fa fa-chevron-down fa-w-14 rvp-arrow-first-svg"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512">
          <path
            d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569
            0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224
            284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667
            22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373
            9.372-24.569 9.372-33.942 0z" />
        </svg>
        <br />
        <svg
          width="50px"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="chevron-down"
          class="svg-inline--fa fa-chevron-down fa-w-14 rvp-arrow-second-svg"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512">
          <path
            d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569
            0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224
            284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667
            22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373
            9.372-24.569 9.372-33.942 0z" />
        </svg>
        <br />
        <svg
          width="60px"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="chevron-down"
          class="svg-inline--fa fa-chevron-down fa-w-14 rvp-arrow-third-svg"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512">
          <path
            d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569
            0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224
            284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667
            22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373
            9.372-24.569 9.372-33.942 0z" />
        </svg>
      </div>
    </div>
  </div>
</div>
<div class="rvp-who-we-are text-justify">
  <h2 class="text-center">{hero.pageTitle}</h2>
  <p>{hero.pageDescription}</p>
</div>
