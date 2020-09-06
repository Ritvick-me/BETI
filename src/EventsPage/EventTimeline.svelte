<script>
  export let workshop;
  export let i;
</script>

<style>
  .col {
    padding: 0px 10%;
    position: relative;
  }

  .rvp-col-left {
    border-right: solid;
    border-color: var(--cream);
    border-width: 5px;
    padding-top: 70px;
  }

  .text-left .rvp-col-left::after {
    position: absolute;
    content: "";
    top: 125px;
    right: 0px;
    width: 20%;
    height: 5px;
    background-color: var(--cream);
  }

  .rvp-col-right {
    border-right: solid;
    border-color: var(--cream);
    border-width: 5px;
    padding-top: 70px;
  }

  .rvp-col-right.rvp-right {
    border: none;
  }

  .text-right .rvp-col-right.rvp-right::after {
    position: absolute;
    content: "";
    top: 125px;
    left: 0px;
    width: 20%;
    height: 5px;
    background-color: var(--cream);
  }

  .rvp-workshop-content {
    display: flex;
    align-items: center;
  }

  .rvp-workshop-icons {
    border-radius: 50%;
    width: 100px;
    filter: grayscale(100%);
  }

  .rvp-workshop-heading {
    margin-left: 20px;
    font-size: 20px;
  }

  .rvp-workshop-heading h3 {
    color: var(--deep-blue);
    font-family: Robota;
    text-transform: uppercase;
    font-weight: 999;
    font-size: 30px;
  }

  .rvp-workshop-heading p {
    color: var(--black);
    font-family: Helvetica;
    text-transform: uppercase;
    font-weight: 999;
    font-size: 20px;
    margin: 0;
  }

  .rvp-workshop-description {
    margin-left: 120px;
    text-align: justify;
    padding-top: 20px;
  }

  .rvp-workshop-description a {
    padding-top: 20px;
    color: black !important;
  }

  @media (max-width: 1400px) {
    .rvp-col-left {
      padding-left: 2%;
    }
    .rvp-col-right {
      padding-right: 2%;
    }
  }

  @media (max-width: 992px) {
    .rvp-col-left {
      border: none;
      padding-right: 2%;
    }
    .text-left .rvp-col-left::after {
      width: 0px !important;
      height: 0px !important;
    }
    .rvp-col-right::after {
      width: 0px !important;
      height: 0px !important;
    }
    .rvp-col-right {
      border: none;
      padding-left: 2%;
    }
  }
  @media (max-width: 452px) {
    .rvp-workshop-icons {
      width: 70px;
      height: 70px;
    }
    .rvp-workshop-description {
      margin-left: 90px;
    }
  }
</style>

{#if i % 2 == 0}
  <div class="row rvp-workshop-section text-left">
    <div class="col col-12 col-lg-6 rvp-col-left">
      <div class="rvp-workshop-content">
        <img
          class="rvp-workshop-icons"
          height="100px"
          src={workshop.src}
          alt="workshops" />
        <div class="rvp-workshop-heading">
          <h3>{workshop.event}</h3>
          <p>{workshop.date}</p>
        </div>
      </div>
      <div class="rvp-workshop-description">
        <p>{workshop.details}</p>
        <a href="google">Click here...</a>
      </div>
    </div>
    <div class="col col-12 col-lg-6" />
  </div>
{:else}
  <div class="row rvp-workshop-section text-right">
    <div class="col col-12 col-lg-6 rvp-col-right d-none d-lg-block" />
    <div class="col col-12 col-lg-6 rvp-col-right rvp-right">
      <div class="rvp-workshop-content">
        <img
          class="rvp-workshop-icons"
          height="100px"
          src={workshop.src}
          alt="workshop1" />
        <div class="rvp-workshop-heading text-left">
          <h3>{workshop.event}</h3>
          <p>{workshop.date}</p>
        </div>
      </div>
      <div class="rvp-workshop-description">
        <p>{workshop.details}</p>
        <a href="google">Click here...</a>
      </div>
    </div>
  </div>
{/if}
