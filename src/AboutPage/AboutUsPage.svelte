<script>
  import AboutContent from "../Contents/AboutContent";
  import PageTopic from "../components/PageTopic.svelte";
  import Team from "./Team.svelte";
  import Footer from "../components/Footer.svelte";

  const hero = AboutContent.hero;
</script>

<PageTopic {hero} />

<Team />

<Footer />
