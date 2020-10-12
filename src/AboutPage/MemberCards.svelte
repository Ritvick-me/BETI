<script>
  import { onMount } from "svelte";

  export let member;
  export let i;

  function rotate1() {
    // Init
    var container = document.getElementById("container1");
    var inner = document.getElementById("inner1");

    // Mouse
    var mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition: function(event) {
        var e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
      },
      setOrigin: function(e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
      },
      show: function() {
        return "(" + this.x + ", " + this.y + ")";
      }
    };

    // Track the mouse position relative to the center of the container.
    mouse.setOrigin(container);

    //----------------------------------------------------

    var counter = 0;
    var refreshRate = 10;
    var isTimeToUpdate = function() {
      return counter++ % refreshRate === 0;
    };

    //----------------------------------------------------

    var onMouseEnterHandler = function(event) {
      update(event);
    };

    var onMouseLeaveHandler = function() {
      inner.style = "";
    };

    var onMouseMoveHandler = function(event) {
      if (isTimeToUpdate()) {
        update(event);
      }
    };

    //----------------------------------------------------

    var update = function(event) {
      mouse.updatePosition(event);
      updateTransformStyle(
        (mouse.y / inner.offsetHeight / 2).toFixed(2),
        (mouse.x / inner.offsetWidth / 2).toFixed(2)
      );
    };

    var updateTransformStyle = function(x, y) {
      var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
      inner.style.transform = style;
      inner.style.webkitTransform = style;
      inner.style.mozTranform = style;
      inner.style.msTransform = style;
      inner.style.oTransform = style;
    };

    //--------------------------------------------------------

    container.onmousemove = onMouseMoveHandler;
    container.onmouseleave = onMouseLeaveHandler;
    container.onmouseenter = onMouseEnterHandler;
  }

  function rotate2() {
    // Init
    var container = document.getElementById("container2");
    var inner = document.getElementById("inner2");

    // Mouse
    var mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition: function(event) {
        var e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
      },
      setOrigin: function(e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
      },
      show: function() {
        return "(" + this.x + ", " + this.y + ")";
      }
    };

    // Track the mouse position relative to the center of the container.
    mouse.setOrigin(container);

    //----------------------------------------------------

    var counter = 0;
    var refreshRate = 10;
    var isTimeToUpdate = function() {
      return counter++ % refreshRate === 0;
    };

    //----------------------------------------------------

    var onMouseEnterHandler = function(event) {
      update(event);
    };

    var onMouseLeaveHandler = function() {
      inner.style = "";
    };

    var onMouseMoveHandler = function(event) {
      if (isTimeToUpdate()) {
        update(event);
      }
    };

    //----------------------------------------------------

    var update = function(event) {
      mouse.updatePosition(event);
      updateTransformStyle(
        (mouse.y / inner.offsetHeight / 2).toFixed(2),
        (mouse.x / inner.offsetWidth / 2).toFixed(2)
      );
    };

    var updateTransformStyle = function(x, y) {
      var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
      inner.style.transform = style;
      inner.style.webkitTransform = style;
      inner.style.mozTranform = style;
      inner.style.msTransform = style;
      inner.style.oTransform = style;
    };

    //--------------------------------------------------------

    container.onmousemove = onMouseMoveHandler;
    container.onmouseleave = onMouseLeaveHandler;
    container.onmouseenter = onMouseEnterHandler;
  }

  function rotate3() {
    // Init
    var container = document.getElementById("container3");
    var inner = document.getElementById("inner3");

    // Mouse
    var mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition: function(event) {
        var e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
      },
      setOrigin: function(e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
      },
      show: function() {
        return "(" + this.x + ", " + this.y + ")";
      }
    };

    // Track the mouse position relative to the center of the container.
    mouse.setOrigin(container);

    //----------------------------------------------------

    var counter = 0;
    var refreshRate = 10;
    var isTimeToUpdate = function() {
      return counter++ % refreshRate === 0;
    };

    //----------------------------------------------------

    var onMouseEnterHandler = function(event) {
      update(event);
    };

    var onMouseLeaveHandler = function() {
      inner.style = "";
    };

    var onMouseMoveHandler = function(event) {
      if (isTimeToUpdate()) {
        update(event);
      }
    };

    //----------------------------------------------------

    var update = function(event) {
      mouse.updatePosition(event);
      updateTransformStyle(
        (mouse.y / inner.offsetHeight / 2).toFixed(2),
        (mouse.x / inner.offsetWidth / 2).toFixed(2)
      );
    };

    var updateTransformStyle = function(x, y) {
      var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
      inner.style.transform = style;
      inner.style.webkitTransform = style;
      inner.style.mozTranform = style;
      inner.style.msTransform = style;
      inner.style.oTransform = style;
    };

    //--------------------------------------------------------

    container.onmousemove = onMouseMoveHandler;
    container.onmouseleave = onMouseLeaveHandler;
    container.onmouseenter = onMouseEnterHandler;
  }

  onMount(async () => {
    rotate1();
    rotate2();
    rotate3();
  });
</script>

<style>
  .rvp-team-card {
    background-color: var(--white);
    width: 70vw;
    margin: auto;
    padding-bottom: 80px;
    position: relative;
    margin-bottom: 40px;
    box-shadow: 0px 0px 20px 0px var(--black);
  }

  .rvp-team-card:after {
    content: "";
    position: absolute;
    width: 50vw;
    height: 1px;
    border-style: solid;
    border-bottom-style: none;
    border-left-style: none;
    border-width: 10px;
    border-color: var(--deep-blue);
    top: 4%;
    right: 15px;
  }

  .rvp-team-card:before {
    content: "";
    position: absolute;
    width: 1px;
    height: 92%;
    border-style: solid;
    border-bottom-style: none;
    border-left-style: none;
    border-width: 10px;
    border-color: var(--deep-blue);
    top: 4%;
    right: 15px;
  }

  .rvp-outer-image {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 18vw;
    height: 100%;
    perspective: 30px;
    overflow: hidden;
    border-style: solid;
    border-color: white;
    border-width: 15px;
  }

  .rvp-inner {
    transition: transform 0.5s;
    -webkit-transition: transform 0.5s;
    margin-bottom: 5px;
    height: 100% !important;
  }

  .rvp-member-image {
    width: 100%;
    height: 100% !important;
    box-shadow: 0px 0px 30px 20px var(--cream);
  }

  .rvp-member-content {
    padding-top: 80px;
    margin-left: 19vw;
    margin-right: 40px;
    z-index: 999 !important;
  }

  .rvp-member-name {
    font-family: Helvetica;
    font-weight: 999;
    font-size: 30px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .rvp-member-designation {
    font-family: Helvetica;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 60px;
  }

  .rvp-member-mantra {
    font-family: Helvetica;
    margin-bottom: 100px;
  }

  @media (max-width: 1500px) {
    .rvp-team-card {
      width: 90vw;
    }
    .rvp-outer-image {
      width: 25vw;
    }
    .rvp-member-content {
      margin-left: 27vw;
    }
    .rvp-team-card:after {
      width: 62vw;
    }
  }

  @media (max-width: 1100px) {
    .rvp-outer-image {
      width: 30vw;
    }
    .rvp-member-content {
      margin-left: 32vw;
    }
    .rvp-team-card:after {
      width: 57vw;
    }
  }

  @media (max-width: 992px) {
    .rvp-team-card {
      padding-top: 14px;
    }
    .rvp-outer-image {
      position: relative;
      margin: auto;
      width: fit-content;
      max-width: 38vw;
      height: 400px;
    }
    .rvp-member-content {
      padding-top: 0px;
      margin-left: 10vw;
    }
    .rvp-team-card:after {
      width: 25vw;
      height: 370px;
    }
    .rvp-team-card:before {
      left: 20px;
      border-left: solid;
      border-right: none;
      border-width: 10px;
      border-color: var(--deep-blue);
      width: 25vw;
      height: 370px;
    }
  }

  @media (max-width: 772px) {
    .rvp-outer-image {
      min-width: 50vw;
    }
    .rvp-team-card:after {
      width: 15vw;
    }
    .rvp-team-card:before {
      width: 15vw;
    }
    .rvp-member-content {
      margin-left: 9vw;
    }
  }

  @media (max-width: 550px) {
    .rvp-team-card {
      padding-bottom: 50px;
    }
    .rvp-outer-image {
      margin-top: 5px;
      min-width: 80vw;
      height: fit-content;
    }
    .rvp-team-card:after {
      width: 25px;
      height: 25px;
      right: -3.5px;
      top: -3.5px;
      border-width: 7px;
    }
    .rvp-team-card:before {
      width: 25px;
      height: 25px;
      left: -3.5px;
      top: 97.7%;
      border-top: none;
      border-bottom: solid;
      border-color: var(--deep-blue);
      border-width: 7px;
    }

    .rvp-member-designation {
      font-family: Helvetica;
      font-weight: bold;
      text-transform: uppercase;
      margin-bottom: 30px;
    }

    .rvp-member-mantra {
      font-family: Helvetica;
      margin-bottom: 0px;
    }
  }
</style>

<div class="rvp-team-card">
  <div class="rvp-outer-image" id="container{i + 1}">
    <div class="rvp-inner" id="inner{i + 1}">
      <img
        class="rvp-member-image"
        src="../Images/{member.photo}"
        alt="PinkiPathak"
        style="" />
    </div>
  </div>
  <div class="rvp-member-content text-left">
    <h4 class="rvp-member-name">{member.name}</h4>
    <h5 class="rvp-member-designation">{member.designation}</h5>
    <em class="rvp-member-mantra">"{member.mantra}"</em>
  </div>
</div>
