<script>
  import Heading from "../components/Heading-3.svelte";
  import AboutContent from "../Contents/AboutContent";
  import MemberCards from "./MemberCards.svelte";

  const headingName = "Team";
  const members = AboutContent.members;
</script>

<style>
  .rvp-team-section {
    background-color: var(--white);
    z-index: 0 !important;
    margin-bottom: 8vh;
  }
</style>

<div class="container-fluid text-center rvp-team-section">
  <Heading {headingName} />
  {#each members as member, i}
    <MemberCards {member} {i} />
  {/each}
</div>
