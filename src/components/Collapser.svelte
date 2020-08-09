<script>

    export let course;

    let collapse = true;

    function unCollapse(){
        collapse = !collapse;
    }

</script>

<style>

    .rvp-collapse{
        border-style: none;
        color: var(--black);
        font-family: Helvetica;
        padding: 5px 10px;
        margin-bottom: 8px;
        position: relative;
        background-color: var(--cream);
        transition-duration: 0.7s;
        max-height: 40px;
        overflow: hidden;
    }
    .rvp-expand{ 
        max-height: 1000px;
    }
    .rvp-collapse-arrow{
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        border-style: solid;
        border-left-style: none;
        border-top-style: none;
        border-color: var(--black);
        top: 15px;
        right: 20px;
        transition-duration: 0.7s;
    }
    .rvp-arrow-collapsed{
        transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
    }
    .rvp-arrow-expand{
        transform: rotate(-135deg);
        -moz-transform: rotate(-135deg);
        -ms-transform: rotate(-135deg);
        -o-transform: rotate(-135deg);
        -webkit-transform: rotate(-135deg);
    }

</style>

<div class="{ collapse ? 'container text-left rvp-collapse' : 'container text-left rvp-collapse rvp-expand'}">
    <div role="button" on:click={unCollapse} class="{ collapse ? 'rvp-collapse-arrow rvp-arrow-collapsed' : 'rvp-collapse-arrow rvp-arrow-expand'}"></div>
    <h4 role="button" on:click={unCollapse}>{course.title}</h4>
    <br>
    <p>{course.description}</p>
</div>