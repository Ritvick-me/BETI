<script>
    
    import Heading from '../components/Heading-3.svelte';

    let headingName = "Our Services";

    const services = [
        {
            title: "Govt and Pvt sector products",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title: "Job oriented and industrial training",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title: "Internships. Workshop. Seminars.",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title: "School and college students competition",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title: "Research",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title: "Training all branches B.E/BTech and diploma students",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
    ]

</script>

<style>

    .rvp-what-we-do{
        background-color: var(--white);
        z-index: 0 !important;
        margin-top: 200px;
        margin-bottom: 8vh;
    }

    .rvp-service-body{
        margin-top: 10vh;
    }

    .rvp-service-cards{
        position: relative;
        margin: auto;
        width: 100%;
        background-color: var(--orange);
        padding: 10px;
        margin-bottom: 20px;
        height: 90%;
        transform: rotateX(-10deg) rotateY(15deg);
        overflow: hidden;
        transition-duration: 1s;
    }

    .rvp-service-cards:hover{
        
        transform: none;
        transition-duration: 1s;
    }

    .rvp-service-cards:before{
        position: absolute;
        content: '';
        top: 50%;
        left: -1500px;
        height: 10px;
        width: 1500px;
        background-color: var(--white);
        box-shadow: 0px 0px 30px 20px white;
        transform: rotateZ(22deg);
        transition-duration: 1s;
    }

    .rvp-service-cards:hover:before{
        left: 100%;
        transition-duration: 1s;
    }

    .rvp-service-title{
        font-family: Robota;
        background-color: rgba(0, 0, 0, 0.308);
        color: var(--white);
        padding: 10px;
    }

    .rvp-service-details{
        color: var(--white);
        text-align: justify;
        padding: 10px;
        font-family: Helvetica;
    }

    @media(max-width: 1390px){
        .rvp-what-we-do{
            margin-top: 280px;
        }
    }
    @media(max-width: 645px){
        .rvp-what-we-do{
            margin-top: 350px;
        }
    }
    @media(max-width: 450px){
        .rvp-what-we-do{
            margin-top: 400px;
        }
        .rvp-service-cards:before{
            position: absolute;
            content: '';
            top: 50%;
            left: -1500px;
            height: 10px;
            width: 1500px;
            background-color: var(--white);
            box-shadow: 0px 0px 30px 20px white;
            transform: rotateZ(-22deg);
            transition-duration: 1s;
        }

        .rvp-service-cards:hover:before{
            left: 100%;
            transition-duration: 1s;
        }
    }

</style>

<div class="container-fluid text-center rvp-what-we-do">
    <Heading {headingName}/>
    <div class="container-fluid rvp-service-body">
        <div class="row justify-content-around">
            {#each services as service}
                <div class="col col-12 col-lg-6 col-xl-4">
                    <div class="rvp-service-cards">
                        <h4 class="rvp-service-title">{service.title}</h4>
                        <p class="rvp-service-details">{service.details}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>