<script>
  import Modal from "../components/Modal.svelte";
  import HomeContent from "../Contents/HomeContent";

  import { onMount } from "svelte";

  let source = "";
  let hide = "rvp-hide";

  const images = HomeContent.gallery;

  function hideModal() {
    hide = "rvp-hide";
  }

  function slider() {
    const slider = document.querySelector(".items");
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", e => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mousemove", e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    });
  }

  onMount(async () => {
    slider();
  });
</script>

<style>
  .rvp-max-height {
    height: 40vh;
    overflow: hidden;
  }
  .grid-container {
    background: transparent;
  }

  .rvp-show-image {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    transition-duration: 0.3s;
  }

  .item:hover .rvp-show-image {
    background-color: rgba(0, 0, 0, 0.664);
    transition-duration: 0.3s;
  }

  .rvp-show-image button {
    position: relative;
    color: var(--white);
    opacity: 0;
    margin-top: 10vh;
    text-transform: uppercase;
    font-family: Helvetica;
    font-size: 25px;
    font-weight: bold;
    border-style: none;
    border-color: var(--white);
    border-radius: 8px;
    border-width: 2px;
    background-color: transparent;
    padding: 5px 15px;
    transition-duration: 0.7s;
  }

  .item:hover button {
    opacity: 1;
    margin-top: 17vh;
    transition-duration: 0.7s;
  }

  .rvp-show-image button:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-bottom-style: none;
    border-right-style: none;
    border-color: var(--white);
    transition-duration: 0.7s;
  }

  .rvp-show-image:hover button:after {
    width: 20px;
    height: 20px;
    transition-duration: 0.7s;
  }

  .rvp-show-image button:before {
    position: absolute;
    content: "";
    bottom: 0;
    right: 0;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-top-style: none;
    border-left-style: none;
    border-color: var(--white);
    transition-duration: 0.7s;
  }

  .rvp-show-image:hover button:before {
    width: 20px;
    height: 20px;
    transition-duration: 0.7s;
  }

  @supports (display: grid) {
    .grid-container {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      grid-template-areas: "main main main";
    }

    .grid-item {
      color: #fff;
      background: transparent;
      padding: 3.5em 1em;
      font-size: 1em;
      font-weight: 700;
    }

    .main {
      background-color: transparent;
      grid-area: main;
      padding: 0;
      overflow-y: hidden;
    }

    .items {
      position: relative;
      width: 100%;
      overflow-x: scroll;
      overflow-y: hidden;
      white-space: nowrap;
      transition: all 0.2s;
      will-change: transform;
      user-select: none;
      cursor: pointer;
    }

    .items.active {
      background: rgba(255, 255, 255, 0.3);
      cursor: grabbing;
      cursor: -webkit-grabbing;
      transform: scale(1);
    }

    .item {
      display: inline-block;
      /* min-height: 250px; */
      background-size: cover;
      min-width: 400px;
      margin: 2em 1em;
      position: relative;
    }
    @media (max-width: 772px) {
      .rvp-max-height {
        height: 200px;
      }
      .item {
        min-height: 200px;
        min-width: 200px;
        margin: 0;
        margin-right: 1vw;
      }
      .items {
        overflow-x: scroll;
      }
      .grid-container {
        max-height: 200px;
        grid-template-rows: 300[x];
        overflow: hidden;
      }
      .item:hover button {
        margin-top: 12vh;
        font-size: 20px;
      }
    }
    @media (max-width: 550px) {
      .rvp-max-height {
        height: 170px;
      }
      .item {
        min-height: 170px;
        min-width: 170px;
        margin: 0;
        margin-right: 1vw;
      }
      .grid-container {
        max-height: 170px;
      }
      .item:hover button {
        margin-top: 12vh;
        font-size: 17px;
      }
    }
    @media (max-width: 400px) {
      .rvp-max-height {
        height: 150px;
      }
      .item {
        min-height: 150px;
        min-width: 150px;
        margin: 0;
        margin-right: 1vw;
      }
      .grid-container {
        max-height: 150px;
      }
      .item:hover button {
        margin-top: 10vh;
        font-size: 15px;
      }
      .item:hover button:after {
        width: 10px;
        height: 10px;
      }
      .item:hover button:before {
        width: 10px;
        height: 10px;
      }
    }
  }
</style>

<div class="grid-container">
  <main class="grid-item main">
    <div class="items">
      {#each images as img}
        <div
          class="item rvp-max-height"
          style="background-image: url('{img.src}');"
          alt="">
          <div class="rvp-show-image">
            <button on:click={() => ((source = img.src), (hide = ''))}>
              View Image
            </button>
          </div>
        </div>
      {/each}
    </div>
  </main>
</div>

<Modal on:close={hideModal} {source} {hide} />
