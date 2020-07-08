<script>

    import Heading from '../components/Heading-3.svelte';

    let headingName = "Results";

</script>

<style>

    .row{
        /* margin-left: 0; */
        padding-bottom: 5vh;
    }
    .rvp-competition{
        width: 100%;
    }
    h4{
        text-transform: uppercase;
        font-size: var(--sub-heading);
        font-family: Robota;
        font-weight: 999;
        color: var(--deep-blue);
        position: relative;
        width: calc( ( var(--sub-heading) ) * 15);
        margin: auto;
        margin-bottom: 5vh;
    }
    /* h4:after{
        position: absolute;
        content: '';
        width: 20px;
        height: 20px;
        border-style: solid;
        border-top: none;
        border-right: none;
        border-width: 5px;
        border-color: var(--deep-blue);
        bottom: 0;
        left: 0;
    }
    h4:before{
        position: absolute;
        content: '';
        width: 20px;
        height: 20px;
        border-style: solid;
        border-bottom: none;
        border-left: none;
        border-width: 5px;
        border-color: var(--deep-blue);
        top: 0;
        right: 0;
    } */
    .rvp-card-body{
        padding: 3vh 0 3vh 0;
        box-shadow: 0 0 8px 0.2px rgb(204, 201, 201); 
        position: relative;
    }
    .rvp-card-body:after{
        position: absolute;
        content: '';
        top: -5px;
        right: -5px;
        width: 30px;
        height: 30px;
        border-style: solid;
        border-bottom: none;
        border-left: none;
        border-color: var(--orange);
        border-width: 10px;
    }
    .rvp-card-body:before{
        position: absolute;
        content: '';
        top: -5px;
        left: -5px;
        width: 30px;
        height: 30px;
        border-style: solid;
        border-bottom: none;
        border-right: none;
        border-color: var(--orange);
        border-width: 10px;
    }
    .rvp-border-bottom-left{
        position: absolute;
        bottom: -5px;
        left: -5px;
        width: 30px;
        height: 30px;
        border-style: solid;
        border-top: none;
        border-right: none;
        border-color: var(--orange);
        border-width: 10px;
    }
    .rvp-border-bottom-right{
        position: absolute;
        bottom: -5px;
        right: -5px;
        width: 30px;
        height: 30px;
        border-style: solid;
        border-top: none;
        border-left: none;
        border-color: var(--orange);
        border-width: 10px;
    }
    .rvp-crown img{
        width: 20%;
    }
    .rvp-crown-gold{
        position: absolute;
        top: 0%;
        left: 44.5%;
    }
    .rvp-crown-silver{
        position: absolute;
        top: 1.5%;
        left: 44%;
    }
    .rvp-crown-bronze{
        position: absolute;
        top: 1%;
        left: 46.5%;
    }
    .rvp-image-background{
        border-style: solid;
        border-color: transparent;
        border-radius: 50%;
        width: 200px;
        height: 200px;
        overflow: hidden;
        margin: auto;
    }
    .rvp-winners-image{
        max-height: 100% !important;
        margin: auto;
    }
    .rvp-title{
        color: var(--orange);
        font-size: 30px;
        font-family: Helvetica;
        font-weight: 999;
        padding-top: 3vh;
        text-transform: uppercase;
    }
    sup{
        font-size: 15px;
    }
    .rvp-name{
        color: var(--black);
        font-size: 150%;
        font-family: Helvetica;
        font-weight: 999;
        padding-top: 0;
        text-transform: uppercase;
    }
    .rvp-id{
        color: var(--black);
        font-size: 150%;
        font-family: Helvetica;
        font-weight: 999;
        padding-top: 0;
        text-transform: uppercase;
    }
    @media(max-width: 992px){
        .col{
           margin-top: 20px; 
        }
    }
    @media(max-width: 615px){
        h4{
            margin: 5vh auto 3vh auto;
            font-size: var(--sub-responsive);
            width: calc( ( var(--sub-responsive) ) * 10) !important;
            letter-spacing: 1px;
        }
        /* h4:before{
            border-width: 5px;
            width: 20px;
            height: 20px;
        }
        h4:after{
            border-width: 5px;
            width: 20px;
            height: 20px;
            bottom: -1px;
        } */
    }
    @media(max-width: 400px){
        .rvp-crown img{
            width: 30%;
        }
        .rvp-crown-gold{
            top: 0%;
            left: 41%;
        }
        .rvp-crown-silver{
            top: 0%;
            left: 41%;
        }
        .rvp-crown-bronze{
            top: 0%;
            left: 40%;
        }
    }
    
</style>

<div class="container-fluid rvp-white text-center">
    <Heading {headingName}/>
    <div class="row justify-content-center align-items-center">
        <div class="text-center rvp-competition">
            <h4>Robospridh Competition</h4> 
        </div>
        <div class="col col-10 col-sm-8 col-md-6 col-lg-4 text-center">
            <div class="container-fluid rvp-card-body">
                <div class="rvp-border-bottom-left"></div>
                <div class="rvp-border-bottom-right"></div>
                <div class="rvp-crown rvp-crown-gold text-left"><img src="../Images/gold.png" alt="Winner"></div>
                <div class="rvp-image-background">
                    <img src="../Images/Selected/IMG_20200112_124652.jpg" alt="" class="rvp-winners-image">
                </div>
                <div class="rvp-title">Winner</div>
                <div class="rvp-name">Ritvick V. Pandey</div>
                <div class="rvp-id">RA1811003010698</div>
            </div>
        </div>
        <div class="col col-10 col-sm-8 col-md-6 col-lg-4 text-center">
            <div class="container-fluid rvp-card-body">
                <div class="rvp-border-bottom-left"></div>
                <div class="rvp-border-bottom-right"></div>
                <div class="rvp-crown rvp-crown-silver text-left"><img src="../Images/silver.png" alt="Winner"></div>
                <div class="rvp-image-background">
                    <img src="../Images/Selected/IMG_20200112_124652.jpg" alt="" class="rvp-winners-image">
                </div>
                <div class="rvp-title">1<sup>st</sup> Runner Up</div>
                <div class="rvp-name">Aanchal Saxena</div>
                <div class="rvp-id">RA1811003010711</div>
            </div>
        </div>
        <div class="col col-10 col-sm-8 col-md-6 col-lg-4 text-center">
            <div class="container-fluid rvp-card-body">
                <div class="rvp-border-bottom-left"></div>
                <div class="rvp-border-bottom-right"></div>
                <div class="rvp-crown rvp-crown-bronze text-left"><img src="../Images/bronze.png" alt="Winner"></div>
                <div class="rvp-image-background">
                    <img src="../Images/Selected/IMG_20200112_124652.jpg" alt="" class="rvp-winners-image">
                </div>
                <div class="rvp-title">2<sup>nd</sup> Runner Up</div>
                <div class="rvp-name">Jul'a M'dame</div>
                <div class="rvp-id">RA1811003010069</div>
            </div>
        </div>
    </div>  
</div>