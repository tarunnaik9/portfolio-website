var tablinks =document.getElementsByClassName("tab-links")
var tabcontents =document.getElementsByClassName("tab-contents")

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}




  const scriptURL = 'https://script.google.com/macros/s/AKfycbwcekcP4b9WKbDMdjW236UDDaZo8Jqi4d3uViO1i506e42pxtKpgjru5FPvDGGmUwra/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message Sent Successfully"
        setTimeout(function(){
            msg.innerHTML= ""
        },1000)
        form.reset()
  })
      .catch(error => console.error('Error!', error.message))
  })



  