<script>
  import Heading from "../components/Heading-3.svelte";
  import EventsContent from "../Contents/EventsContent";
  import TutorialCards from "./TutorialCards.svelte";

  let headingName = "Tutorials";

  const tutorials = EventsContent.tutorials;
</script>

<style>
  .rvp-tutorials {
    margin-bottom: 20px;
    padding: 0;
  }
</style>

<div class="container-fluid text-center rvp-tutorials">
  <Heading {headingName} />
  <div class="container-fluid">
    <div class="row justify-content-center text-left">
      {#each [...tutorials].reverse() as tutorial}
        <TutorialCards {tutorial} />
      {/each}
    </div>
  </div>
</div>
