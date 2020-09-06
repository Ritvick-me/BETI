<script>
  import Heading from "../components/Heading-3.svelte";
  import EventTimeline from "./EventTimeline.svelte";

  let headingName = "Workshops";

  let workshops = [
    {
      event: "Workshop Automata",
      date: "jan 21, 2020",
      src: "../Images/IMG_20190331_112818.jpg",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      event: "Workshop IOT",
      date: "feb 2, 2020",
      src: "../Images/IMG_20190331_112818.jpg",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      event: "Workshop Automata",
      date: "jan 21, 2020",
      src: "../Images/IMG_20190331_112818.jpg",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      event: "Workshop IOT",
      date: "feb 2, 2020",
      src: "../Images/IMG_20190331_112818.jpg",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];
</script>

<style>
  .rvp-workshop {
    background-color: var(--white);
    z-index: 0 !important;
    margin-top: 200px;
    margin-bottom: 8vh;
  }

  @media (max-width: 1390px) {
    .rvp-workshop {
      margin-top: 280px;
    }
  }
  @media (max-width: 645px) {
    .rvp-workshop {
      margin-top: 350px;
    }
  }
  @media (max-width: 450px) {
    .rvp-workshop {
      margin-top: 450px;
    }
  }
</style>

<div class="container-fluid text-center rvp-workshop">
  <Heading {headingName} />
  <div class="container-fluid">
    {#each workshops as workshop, i}
      <EventTimeline {workshop} {i} />
    {/each}
  </div>
</div>
