
var prevScrollpos = window.pageYOffset;
prevScrollpos = 60;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName('navbar')[0].style.top = "0";
  } else {
    document.getElementsByClassName('navbar')[0].style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}


function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 1000);

    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(function () {
    show('main-container', true);
    show('loading', false);
});
