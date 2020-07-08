<script>

    //BETI Typing animation---------------------------------------------------------------------

    var text = 'B. E. T. I.';
    var speed = 100;
    var chars = text.split('');
    let container;

    var i = 0;
    var x = 1;

    function setDeceleratingTimeout(callback, factor, times){
        var internalCallback = function(factor) {
            return function() {
                if (++factor >= 0) {
                    window.setTimeout(internalCallback, times);
                    times = callback();
                }
            }
        }(times, 0);

        window.setTimeout(internalCallback, factor);
    };

    setDeceleratingTimeout(function(){ 
        if (i < chars.length) {
            speed = 100;
            if((i+2)%3 == 0){
                speed = 0;
            }
            container.innerHTML += chars[i++];
            if( i == chars.length - 1){
                speed = 5000;
            }
            
        } else {
            i = 0;
            container.innerHTML = "";
            speed = 100;
        }
        return speed;
    }, 10, speed);

    //BETI Typing animation ends here------------------------------------------------------------------------

    //gallery animation--------------------------------------------------------------------------------------

    function Zindex(){
        var images = document.querySelectorAll(".rvp-img-gal");
        images.forEach(
            function(e){
                window.$(e).hover(
                    function(){
                        var column = window.$(e).parent();
                        column.addClass('zindex999');
                    }, 
                    function(){
                        var column = window.$(e).parent();
                        column.removeClass('zindex999');
                    }
                );
            }
        )
    }
    


</script>

<style>

    h1{
        color: var(--white);
        font-family: Robota;
        font-size: 10rem;
        height: 11.5rem;
    }
    h2{
        color: var(--white);
        font-family: Helvetica;
        text-transform: uppercase;
        font-size: 2rem;
    }
    .rvp-hero-bg{
        position: relative;
        z-index: 0 !important;
        height: 100vh;
        background-image: radial-gradient(farthest-corner at 40px 40px, var(--black) 30%, var(--deep-blue) 100%);
        background-attachment: fixed;
        margin-top: -80px;
        overflow: hidden;
    }
    .rvp-hero-row{
        height: 100%;
        margin-top: -26vh;
    }
    .rvp-absolute-images{
        position: absolute;
        top: 45vh;
        left: 0px;
        width: 100%;
    }
    .rvp-img-gal{
        max-width: 100%;
        margin-bottom: 10px;
        transition-duration: 0.3s;
    }
    .rvp-img-gal:hover{
        transform: scale(1.2);
        -webkit-transform: scale(1.2);
        transition-duration: 0.3s;
        z-index: 999 !important;
    }
    .rvp-margin-col{
        margin-top: 5vw;
        /* overflow: hidden; */
    }
    .zindex999{
        z-index: 999 !important;
    }

    @media(max-width: 700px){
        h1{
            font-size: 6rem;
            height: 7rem;
        }
        h2{
            font-size: 1.3rem;
        }
    }
    @media(max-width: 460px){
        h1{
            font-size: 4.5rem;
            height: 5.5rem;
        }
        h2{
            font-size: 1rem;
        }
    }

</style>

<div class="container-fluid rvp-hero-bg">
    <div class="row justify-content-center align-items-center rvp-hero-row">
        <div class="col col-auto text-center">
            <h1>
                <span id="beti" bind:this={container}></span>
            </h1>
            <h2>
                Best Embedded Training Institute
            </h2>
        </div>
    </div>
    <div class="container-fluid rvp-absolute-images">
        <div class="row justify-content-center">
            <div class={1?"col col-4 col-xl-3 rvp-margin-col":"zindex999"} style="padding-right: 0px;">
                <img class="rvp-img-gal" src="../Images/Selected/IMG_20200222_150900.jpg" alt="main1" on:load={Zindex}>
                <br>
                <img class="rvp-img-gal" src="../Images/Selected/IMG-20190610-WA0005.jpg" alt="second1">
                <br>
                <img class="rvp-img-gal" src="../Images/Selected/1589115843IMG-20200510-WA0025.jpg" alt="third1">
            </div>
            <div class="col col-4 col-xl-3">
                <img class="rvp-img-gal" src="../Images/Selected/IMG_20200201_132140.jpg" alt="main2">
                <br>
                <img class="rvp-img-gal" src="../Images/Selected/IMG_20200112_124652.jpg" alt="second2">
                <br>
                <img class="rvp-img-gal" src="../Images/Selected/1589114924IMG-20200510-WA0024.jpg" alt="third2">
            </div>
            <div class="col col-4 col-xl-3 rvp-margin-col" style="padding-left: 0px;">
                <img class="rvp-img-gal" src="../Images/Selected/IMG-20190803-WA0067.jpg" alt="main3">
                <br>
                <img class="rvp-img-gal" src="../Images/Selected/IMG-20190925-WA0027.jpg" alt="second3">
                <br>
                <img class="rvp-img-gal" src="../Images/Selected/IMG_20190702_113758.jpg" alt="third3">
            </div>
        </div>
    </div>
</div>

