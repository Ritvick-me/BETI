<script>

    import Heading from '../components/Heading-3.svelte';

    let headingName = "Latest Events";

    let events = [
        { 
            name: "Demo: Embedded system",
            description: "Introduction to electronics,Applications of Electronics,Basic Circuit of Development,Introduction to microcontrollers . PROJECT -Automatic door Smart dustbin,RF Tx Rx module circuit, Mobile control Robot,clothes retailar project, Electronic Voting Machine",
            date: '24',
            month: 'Aug',
            image: '../Images/IMG_20190331_112818.jpg'
        },
        { 
            name: "Demo: Internet of things, Arduino",
            description: "Introduction to Internet of Things Introduction to HTML Basic programming project Home automation",
            date: '02',
            month: 'Jun',
            image: '../Images/IMG-20190610-WA0015.jpg'
        },
        { 
            name: "Demo: AutoCAD, SolidWorks, CATIA",
            description: "Introduction to electronics,Applications of Electronics,Basic Circuit of Development,Introduction to microcontrollers . PROJECT -Automatic door Smart dustbin,RF Tx Rx module circuit, Mobile control Robot,clothes retailar project, Electronic Voting Machine",
            date: '15',
            month: 'Mar',
            image: '../Images/IMG-20190610-WA0017.jpg'
        },
    ]

</script>

<style>
    
    .rvp-white{
        padding: 0;
        max-width: 100vw;
        overflow: hidden;
    }
    .row{
        max-width: 100vw;
        margin-left: 0;
        padding-bottom: 5vh;
    }
    .rvp-float-box{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(1, 13rem);
        justify-content: center;
        font-family: helvetica !important;
        margin-bottom: 2rem;
        box-shadow: 0 0 8px 0.2px rgb(204, 201, 201);
    }
    .rvp-float-image{
        grid-column-end: span 1;
        overflow: hidden !important;
    }
    .rvp-float-image img{
        height: 100%;
        min-width: 100%;
        transition-duration: 0.5s;
    }
    .rvp-float-box:hover .rvp-float-image img{
        transform: scale(1.2);
        filter: grayscale(100%);
        transition-duration: 0.5s;
    }
    .rvp-float-content{
        position: relative;
        grid-column-end: span 3;
        padding-left: 3%;
        padding-right: 3%;
        padding-top: 1.5vh;
    }
    .rvp-float-content h4{
        font-family: Helvetica;
        font-weight: bold;
        font-size: 1.8rem;
        color: var(--black);
    }
    .rvp-float-content p{
        font-family: Helvetica;
        font-size: 1rem;
        text-align: justify;
        padding: 0 !important;
    }
    .rvp-float-content a{
        position: absolute;
        bottom: 1rem;
        left: 3%;
        font-family: Helvetica;
        color: var(--orange) !important;
        padding: 0 !important;
    }
    .rvp-float-date{
        grid-column-end: span 1;
        width: 100%;
        height: 100%;
        padding: 1.5rem 0 1.5rem 0 !important;
        color: var(--white);
        background-color: var(--orange);
        transition-duration: 0.5s;
    }
    .rvp-float-box:hover .rvp-float-date{
        background-color: var(--black);
        transition-duration: 0.5s;
    }
    .rvp-date-alt{
        color: var(--white);
        background-color: var(--deep-blue);
        transition-duration: 0.5s;
    }
    .rvp-float-date h2{
        font-size: 5rem;
    }
    .rvp-float-date p{
        font-size: 2rem;
        text-transform: uppercase;
    }
    @media(max-width: 1355px){
        .rvp-float-box{
            grid-template-columns: repeat(5, 1fr);
            grid-template-rows: repeat(1, 18rem);
        }
        .rvp-float-date{
            padding: 3.5rem 0 3.5rem 0 !important;
        }
    }
    @media(max-width: 992px){
        .rvp-float-box{
            grid-template-columns: repeat(5, 1fr);
            grid-template-rows: repeat(1, 18rem);
        }
        .rvp-float-content p{
            text-align: left;
        }
        .rvp-float-date{
            padding: 3.5rem 0 3.5rem 0 !important;
        }
    }
    @media(max-width: 768px){
        .rvp-float-box{
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: repeat(3, auto);
            margin-bottom: 3rem;
            box-shadow: 0 0 8px 0.2px rgb(204, 201, 201);
            border-radius: 10px;
        }
        .rvp-float-image{
            grid-column-end: span 1;
            overflow: hidden ;
            border: none;
            text-align: center;
            background-color: rgb(236, 235, 235);
            border-top-right-radius: 10px;
            border-top-left-radius: 10px;
        }
        .rvp-float-image img{
            height: 8rem;
            min-width: auto;
            scale: 2;
            transform: scale(2.5);
        }
        .rvp-float-box:hover .rvp-float-image img{
            height: 8rem;
            min-width: auto;
            scale: 2;
            transform: scale(2);
        }
        .rvp-float-content{
            position: static;
            grid-column-end: span 1;
            padding-left: 2%;
            padding-right: 2%;
            border: none;
        }
        .rvp-float-content h4{
            font-size: 1.5rem;
        }
        .rvp-float-content p{
            font-size: 1rem;
            text-align: left;
            margin-bottom: 1rem !important;
        }
        .rvp-float-content a{
            position: static;
        }
        .rvp-float-date{
            padding: 0.5rem 0 0.5rem 0 !important;
            grid-column-end: span 1;
            border: none;
            border-bottom-right-radius: 10px;
            border-bottom-left-radius: 10px;
        }
        .rvp-float-date h2{
            font-size: 3rem;
            margin: 0 !important;
        }
        .rvp-float-date p{
            font-size: 1.5rem;
            margin: 0 !important;
        }
    }

</style>


<div class="container-fluid rvp-white text-center">
    <Heading {headingName}/>
    <div class="row justify-content-center align-items-center">
        
            <div class="col col-12 col-sm-6 col-md-10 col-lg-8 text-center">
            {#each events as event, i}
                <div class="rvp-float-box text-left">
                    <div class="rvp-float-image">
                        <img src="{event.image}" alt="event">
                    </div>
                    <div class="rvp-float rvp-float-content">
                        <h4>{event.name}</h4>
                        <p>
                            {event.description}
                        </p>
                        <a href=" ">Know More...</a>
                    </div>
                    <div class={( i + 1 ) % 2 != 0 ? "rvp-float rvp-float-date text-center": "rvp-float rvp-float-date text-center rvp-date-alt"}>
                        <h2>{event.date}</h2>
                        <p>{event.month}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>