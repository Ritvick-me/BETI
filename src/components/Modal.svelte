<script>
    import { createEventDispatcher } from 'svelte';
    
	const dispatch = createEventDispatcher();

    export let source;
    export let hide;

    function closeModal(){
        dispatch('close');
    }



</script>

<style>

    .rvp-modal{
        padding: 0 !important;
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        z-index: 999;
    }
    .rvp-modal-row{
        padding: 0 !important;
        height: 100%;
        position: relative;
    }
    .rvp-modal-background{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.493);
    }
    .rvp-modal-col{
        position: relative;
        padding: 0;
    }
    .rvp-close-button{
        position: absolute;
        padding: 0;
        right: 15px;
        top: 5px;
        font-size: 40px;
        transform: rotate(45deg);
        border: none;
        background-color: transparent;
    }
    .rvp-modal-image{
        max-width: 100vw;
        max-height: 70vh;
    }
    .rvp-hide{
        display: none;
    }

</style>

<div id="modalBody" class="container-fluid rvp-modal {hide}">
    <div class="row justify-content-center align-items-center rvp-modal-row">
        <div on:click={closeModal} class="rvp-modal-background"></div>
        <div class="col col-auto rvp-modal-col">
            <button on:click={closeModal} class="rvp-close-button">+</button>
            <img src="{source}" alt="newPhoto" class="rvp-modal-image">
        </div>
    </div>
</div>