<script>

    export let headingName;

</script>

<style>

    h3{
        position: relative;
        font-size: var(--h3-size);
        font-family: Helvetica;
        font-weight: 999;
        text-transform: uppercase;
        color: var(--orange);
        margin: 7vh auto 7vh auto;
        width: calc( ( var(--h3-size) ) * 10);
    }
    h3:before{
        position: absolute;
        content: '';
        height: 40px;
        width: 40px;
        border-style: solid;
        border-width: 7px;
        border-color: var(--orange);
        border-top: none;
        border-right: none;
        bottom: 0;
        left: 0;
    }
    h3:after{
        position: absolute;
        content: '';
        height: 40px;
        width: 40px;
        border-style: solid;
        border-width: 7px;
        border-color: var(--orange);
        border-bottom: none;
        border-left: none;
        top: 0px;
        right: 0;
    }
    @media(max-width: 615px){
        h3{
            margin: 5vh auto 3vh auto;
            font-size: var(--h3-responsive);
            width: calc( ( var(--h3-responsive) ) * 10) !important;
            
        }
        h3:before{
            border-width: 5px;
            width: 20px;
            height: 20px;
        }
        h3:after{
            border-width: 5px;
            width: 20px;
            height: 20px;
        }
    }

</style>

<h3>{headingName}</h3>