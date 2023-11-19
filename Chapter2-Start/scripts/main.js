// CSS on <head></head> JS at last in <body></body>
function showMessage() {
  // alert("Hello World");
  console.log("Hello developer world - this log");
  console.debug("Hello developer world - this debug");
  console.info("Hello developer world - this info");
  console.warn("Hello developer world - this warning");
  console.error("Hello developer world - this error");
}

function calculateSum() {
  const x = parseInt(document.getElementById("field1").value);
  const y = parseInt(document.getElementById("field2").value);
  const result = document.getElementById("result");
  console.log(x + y);
  result.value = x + y;
}

// document.addEventListener("DOMContentLoaded", showMessage);