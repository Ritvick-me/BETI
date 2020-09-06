<script>
  import PageTopic from "../components/PageTopic.svelte";
  import Workshop from "./Workshop.svelte";
  import Footer from "../components/Footer.svelte";
  import Tutorials from "./Tutorials.svelte";

  let hero = {
    pageName: "Events",
    pageMantra: "We showcase talents.",
    pageTitle: "What's for you",
    pageDescription:
      "B.E.T.I.(BEST EMBEDDED TRAINING INSTITUTE), A renowned Engineers Training Organization, well known for providing quality education in advance fields such as EMBEDDED SYSTEM, IOT, MATLab, Robotics, ARDUINO, AutoCAD, Solidwoks, PCB design, CATIA, ANSYS Currently, these are the hottest and largest job providing technologies. Also Training programs are designed according to the industry trends and demands."
  };
</script>

<PageTopic {hero} />

<Workshop />

<Tutorials />

<Footer />
