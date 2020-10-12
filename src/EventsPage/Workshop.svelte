<script>
  import Heading from "../components/Heading-3.svelte";
  import EventsContent from "../Contents/EventsContent";
  import EventTimeline from "./EventTimeline.svelte";

  let headingName = "Workshops";

  const workshops = EventsContent.workshops;
</script>

<style>
  .rvp-workshop {
    background-color: var(--white);
    z-index: 0 !important;
    margin-bottom: 8vh;
  }
</style>

<div class="container-fluid text-center rvp-workshop" id="workshop">
  <Heading {headingName} />
  <div class="container-fluid">
    {#each workshops as workshop, i}
      <EventTimeline {workshop} {i} />
    {/each}
  </div>
</div>
