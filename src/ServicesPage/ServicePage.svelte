<script>
  import ServicesContent from "../Contents/ServicesContent";
  import PageTopic from "../components/PageTopic.svelte";
  import Courses from "./Courses.svelte";
  import OurServices from "./OurServices.svelte";
  import Footer from "../components/Footer.svelte";

  const hero = ServicesContent.hero;
</script>

<PageTopic {hero} />

<Courses />

<OurServices />

<Footer />
