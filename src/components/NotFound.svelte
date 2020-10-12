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
    font-size: 3rem;
  }

  @media (max-width: 560px) {
    .rvp-login-body {
      width: 95%;
    }
  }
</style>

<div class="container-fluid rvp-hero-bg">
  <div class="rvp-login-body text-center">
    <h3>Oh no! We can't seem to find the page you are looking for! :(</h3>
  </div>
</div>
