<script>

    import Modal from "../components/Modal.svelte";
    import { Swiper, SwiperSlide } from 'svelte-swiper';
        
    let source = "";
    let hide = "rvp-hide";

    function openModal(){
        source = this.src;
        hide = "";
    }

    function hideModal(){
        hide = "rvp-hide";
    }

    const options = {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    };


</script>

<style>

   .rvp-max-height{
       width: 100%;
       height: 60vh;
       overflow: hidden;
   }
   img{
       height: 100%;
   }
   .rvp-zindex{
       padding: 0;
       z-index: -1 !important;
   }
   @media(max-width: 772px){
        .rvp-max-height{
            height: 30vh;
        }
   }

</style>

<div class="container-fluid rvp-zindex">
    <Swiper {options} className="swiper-container rvp-zindex">
            <SwiperSlide className="swiper-slide rvp-max-height"><div class="rvp-max-height"><img role="button" on:click={openModal} src="../Images/IMG_20190331_112818.jpg" alt=""></div></SwiperSlide>
            <SwiperSlide className="swiper-slide"><div class="rvp-max-height"><img role="button" on:click={openModal} src="../Images/IMG_20190331_112845.jpg" alt=""></div></SwiperSlide>
            <SwiperSlide className="swiper-slide"><div class="rvp-max-height"><img role="button" on:click={openModal} src="../Images/IMG_20190402_140149.jpg" alt=""></div></SwiperSlide>
            <SwiperSlide className="swiper-slide"><div class="rvp-max-height"><img role="button" on:click={openModal} src="../Images/IMG_20190420_191337.jpg" alt=""></div></SwiperSlide>
            <SwiperSlide className="swiper-slide"><div class="rvp-max-height"><img role="button" on:click={openModal} src="../Images/IMG_20200201_120456.jpg" alt=""></div></SwiperSlide>
            <SwiperSlide className="swiper-slide"><div class="rvp-max-height"><img role="button" on:click={openModal} src="../Images/IMG-20190402-WA0029.jpg" alt=""></div></SwiperSlide>
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
    </Swiper>
</div>

    


<Modal on:close={hideModal} source={source} hide={hide}/>