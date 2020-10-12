<script>
  import EventsContent from "../Contents/EventsContent";
  import PageTopic from "../components/PageTopic.svelte";
  import Workshop from "./Workshop.svelte";
  import Tutorials from "./Tutorials.svelte";
  import Footer from "../components/Footer.svelte";

  const hero = EventsContent.hero;
</script>

<PageTopic {hero} />

<Workshop />

<Tutorials />

<Footer />
