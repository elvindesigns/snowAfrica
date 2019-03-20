var isOn = false;
var isFullscreenOn = false;
function activateRoom() {
  var element = document.getElementById("scalable-art");
  var roombtn = document.getElementById("roombtn");
  var roombg = document.getElementById("roombg");

  if (isOn == false) {
    element.classList.add("scaled-art");
    roombtn.classList.add("activebtn");
    roombg.classList.add("activeroom");
  } else if (isOn == true) {
    element.classList.remove("scaled-art");
    roombtn.classList.remove("activebtn");
    roombg.classList.remove("activeroom");
  }
  isOn = !isOn;
}

function activateFullscreen() {
  var fullscreenbtn = document.getElementById("fullscreen");
  if (isFullscreenOn == false) {
    fullscreenbtn.classList.add("activefullscreen");
  } else if (isFullscreenOn == true) {
    fullscreenbtn.classList.remove("activefullscreen");
  }
  isFullscreenOn = !isFullscreenOn;
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches(".dropbtn")) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
};

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      document
        .getElementById("image-loaded")
        .setAttribute("src", e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

function selectCategory(event, categoryName) {
  var catName = document.getElementsByClassName("norm-card");
  for (i = 0; i < catName.length; i++) {
    catName[i].className = catName[i].className.replace(
      " norm-card-active",
      ""
    );
  }
  // document.getElementById(categoryName).style.display = "block";
  event.currentTarget.className += " norm-card-active";
}
function openUpload(event, tabName) {
  var tabName = document.getElementsByClassName("tab");
  for (i = 0; i < tabName.length; i++) {
    tabName[i].style.display = "none";
  }

  document.getElementById("tab-upload").style.display = "block";
  document.getElementById("progress-rate").style.width = "5%";
}
function openCategory(event, tabName) {
  var tabName = document.getElementsByClassName("tab");
  for (i = 0; i < tabName.length; i++) {
    tabName[i].style.display = "none";
  }

  document.getElementById("tab-category").style.display = "block";
  document.getElementById("progress-rate").style.width = "35%";
}
function openDescription(event, tabName) {
  var tabName = document.getElementsByClassName("tab");
  for (i = 0; i < tabName.length; i++) {
    tabName[i].style.display = "none";
  }

  document.getElementById("tab-description").style.display = "block";
  document.getElementById("progress-rate").style.width = "55%";
}
function openPrice(event, tabName) {
  var tabName = document.getElementsByClassName("tab");
  for (i = 0; i < tabName.length; i++) {
    tabName[i].style.display = "none";
  }

  document.getElementById("tab-price").style.display = "block";
  document.getElementById("progress-rate").style.width = "80%";
}
function openFinal(event, tabName) {
  var tabName = document.getElementsByClassName("tab");
  for (i = 0; i < tabName.length; i++) {
    tabName[i].style.display = "none";
  }

  document.getElementById("tab-finished").style.display = "block";
  document.getElementById("progress-rate").style.width = "100%";
}
function adjustprice(val) {
  var finalprice = document.getElementById("final-price");

  var value = Number(val);

  var newPrice = value + (15 / 100) * value;
  newPrice = newPrice.toLocaleString();
  finalprice.innerText = newPrice;
}
function getTimer() {
  timeArr = [
    { id: "bid-01", date: "March 20, 2019 15:37:25" },
    { id: "bid-02", date: "March 21, 2019 03:45:23" },
    { id: "bid-03", date: "March 21, 2019 17:37:25" },
    { id: "bid-04", date: "March 22, 2019 19:45:23" }
  ];
  timeArr.forEach(element => {
    getCountDown(element);
  });
  // var countDownDate = new Date("March 21, 2019 15:37:25").getTime();
  function getCountDown(element) {
    countDownDate = new Date(element.date).getTime();
    var x = setInterval(function() {
      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      function addprezero(val) {
        var value = String(val);

        if (value.length < 2) {
          return (value = "0" + value);
        } else {
          return value;
        }
      }
      // Display the result in the element with id="demo"
      var dateArray = [];
      var itemDate =
        addprezero(days) +
        " &nbsp;&nbsp;:&nbsp;&nbsp; " +
        addprezero(hours) +
        " &nbsp;&nbsp;:&nbsp;&nbsp; " +
        addprezero(minutes) +
        " &nbsp;&nbsp;:&nbsp;&nbsp; " +
        addprezero(seconds) +
        "";
      // dateArray.push(itemdate);

      // console.log(element.id);
      document.getElementById(element.id).innerHTML =
        addprezero(days) +
        " &nbsp;&nbsp;:&nbsp;&nbsp; " +
        addprezero(hours) +
        " &nbsp;&nbsp;:&nbsp;&nbsp; " +
        addprezero(minutes) +
        " &nbsp;&nbsp;:&nbsp;&nbsp; " +
        addprezero(seconds) +
        "";
      // console.log(
      //   addprezero(days) +
      //     " &nbsp;&nbsp;:&nbsp;&nbsp; " +
      //     addprezero(hours) +
      //     " &nbsp;&nbsp;:&nbsp;&nbsp; " +
      //     addprezero(minutes) +
      //     " &nbsp;&nbsp;:&nbsp;&nbsp; " +
      //     addprezero(seconds) +
      //     ""
      // );
      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById(element.id).innerHTML = "EXPIRED";
      }
    }, 1000);
  }
}
