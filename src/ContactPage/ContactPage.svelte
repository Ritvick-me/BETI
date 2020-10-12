<script>
  import ContactsContent from "../Contents/ContactsContent";
  import PageTopic from "../components/PageTopic.svelte";
  import ContactForm from "./ContactForm.svelte";
  import Footer from "../components/Footer.svelte";

  const hero = ContactsContent.hero;
</script>

<PageTopic {hero} />

<ContactForm />

<Footer />
