<script>
  import Heading from "../components/Heading-3.svelte";
  import ServicesContent from "../Contents/ServicesContent";
  import Collapser from "../components/Collapser.svelte";

  let headingName = "Courses";

  const courses = ServicesContent.courses;
</script>

<style>
  .rvp-what-we-do {
    background-color: var(--white);
    z-index: 0 !important;
    margin-bottom: 8vh;
  }
</style>

<div class="container-fluid text-center rvp-what-we-do">
  <Heading {headingName} />
  {#each courses as course}
    <Collapser {course} />
  {/each}
</div>
