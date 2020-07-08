<script>

    import Modal from "../components/Modal.svelte";
    import Heading from '../components/Heading-3.svelte';
    import GallerySlider from '../components/GallerySlider.svelte';

    let headingName = "Gallery";

</script>

<style>

    .rvp-gallery{
        margin: 0vh auto 0vh auto;
        background-color: var(--cream);
        padding: 2vh 1vh 5vh 1vh !important;
       z-index: -1 !important;
    }


</style>

<div class="container-fluid text-center rvp-gallery">
    <Heading {headingName}/>
    <GallerySlider/>
</div>