<script>
  import Heading from "../components/Heading-3.svelte";
  import TutorialCards from "./TutorialCards.svelte";

  let headingName = "Tutorials";

  let tutorials = [
    {
      title: "Lorem Ipsum",
      date: "Jan 22, 2020",
      link: "https://www.youtube.com/",
      details:
        "To know how we create a duck, watch this amazing video with live ducks sitting on a beach having just some good me time."
    },
    {
      title: "Epsilon",
      date: "Jan 22, 2020",
      link: "https://www.youtube.com/",
      details:
        "To know how we create a duck, watch this amazing video with live ducks sitting on a beach having just some good me time."
    },
    {
      title: "Dolores",
      date: "Jan 22, 2020",
      link: "https://www.youtube.com/",
      details:
        "To know how we create a duck, watch this amazing video with live ducks sitting on a beach having just some good me time."
    },
    {
      title: "Eridany",
      date: "Jan 22, 2020",
      link: "https://www.youtube.com/",
      details:
        "To know how we create a duck, watch this amazing video with live ducks sitting on a beach having just some good me time."
    },
    {
      title: "Epsilon",
      date: "Jan 22, 2020",
      link: "https://www.youtube.com/",
      details:
        "To know how we create a duck, watch this amazing video with live ducks sitting on a beach having just some good me time."
    },
    {
      title: "Dolores",
      date: "Jan 22, 2020",
      link: "https://www.youtube.com/",
      details:
        "To know how we create a duck, watch this amazing video with live ducks sitting on a beach having just some good me time."
    }
  ];
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
