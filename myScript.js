// function myFunction() {
//     document.getElementById("demo").innerHTML = "Paragraph changed.";
//   }


function doSomething(n) {
  if(n === 0) {
    console.log("TASK COMPLETED!")
    return
  }
  console.log("I'm doing something.")
  doSomething(n - 1)
}
doSomething(4)