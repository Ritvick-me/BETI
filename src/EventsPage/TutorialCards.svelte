<script>
  export let tutorial;
</script>

<style>
  a {
    color: black !important;
  }
  .rvp-head {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .rvp-tutorial-column:hover .rvp-head::after,
  .rvp-tutorial-column:hover .rvp-svg {
    opacity: 0;
    transition-duration: 0.5s;
  }
  .rvp-head::after {
    content: "";
    position: absolute;
    background-color: rgba(0, 0, 0, 0.472);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition-duration: 0.5s;
  }
  .rvp-svg {
    position: absolute;
    top: auto;
    left: auto;
    width: 100px;
    height: 100px;
    transition-duration: 0.5s;
    z-index: 1 !important;
  }
  .rvp-svg path {
    fill: var(--orange);
  }
  .rvp-head-image {
    max-width: 100%;
  }
  .rvp-tutorial-column {
    background-color: var(--cream);
    padding: 0 5px;
    margin-bottom: 10px;
  }
  .rvp-tutorial-title {
    font-family: Helvetica;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 20px;
    color: var(--deep-blue);
    padding: 10px 5px;
  }
  .rvp-tutorials-description {
    font-family: Helvetica;
    font-size: 16px;
    padding: 0 5px 20px 5px;
    margin: 0;
    border-bottom-style: solid;
    border-color: rgba(128, 128, 128, 0.335);
    text-align: justify;
  }
  .rvp-date {
    font-family: Helvetica;
    font-size: 14px;
    font-weight: bold;
    padding: 5px 5px;
    display: inline;
  }
  .rvp-watch {
    display: inline;
    align-items: center;
    text-align: right;
    font-family: Helvetica;
    float: right;
    padding-right: 5px;
    padding-bottom: 5px;
  }
  .rvp-watch svg {
    width: 20px;
  }
</style>

<div class="col col-12 col-md-6 col-lg-4 col-xl-3 rvp-tutorial-column">
  <a href={tutorial.link} target="_blank">
    <div class="rvp-head">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="play-circle"
        class="svg-inline--fa fa-play-circle fa-w-16 rvp-svg"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512">
        <path
          fill="currentColor"
          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256
          8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8
          35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z" />
      </svg>
      <img
        class="rvp-head-image"
        src="../Images/IMG_20190331_112818.jpg"
        alt="tutorials" />
    </div>
  </a>
  <div class="rvp-body">
    <h2 class="rvp-tutorial-title">{tutorial.title}</h2>
    <p class="rvp-tutorials-description">{tutorial.details}</p>
    <div class="rvp-date">{tutorial.date}</div>
    <div class="rvp-watch">
      <a href={tutorial.link} target="_blank">
        Watch now
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
            fill="#FF0000"
            d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781
            64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003
            24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0
            89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22
            448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321
            42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305
            11.412-132.305s0-89.438-11.412-132.305zm-317.51
            213.508V175.185l142.739 81.205-142.739 81.201z" />
        </svg>
      </a>
    </div>
  </div>
</div>
