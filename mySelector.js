var szint = document.querySelector('#edit-field-course-level-target-id-entityreference-filter');

szint.value = 49;

var szak = document.querySelector('#edit-field-major-target-id-entityreference-filter');

szak.value = 50;

var evt = document.createEvent("HTMLEvents");
evt.initEvent("change", true, true);
szint.dispatchEvent(evt);
szak.dispatchEvent(evt);

window.location.hash = '#edit-field-major-target-id-entityreference-filter';