//const mobile = document.getElementById("mobile")
//const mobile = document.querySelector("#mobile")
const mobile = $("#mobile")
const desktop = $("#desktop")
const flowwork = $("#flowwork")

const descricaoMobile = $("#descricaoMobile")
const descricaoDesktop = $("#descricaoDesktop")
const descricaoFlowwork = $("#descricaoFlowwork")

//mobile.addEventListiner("click", mostrarDescMobile )
//function mostrarDescMobile (){

//}

mobile.on('click' , function(){
    descricaoMobile.slideToggle(500)
    descricaoDesktop.slideUp(100)
    descricaoFlowwork.slideUp(100)

})

desktop.on('click' , function(){
    descricaoDesktop.slideToggle(500)
    descricaoMobile.slideUp(100)
      descricaoFlowwork.slideUp(100)
})

flowwork.on('click' , function(){
    descricaoFlowwork.slideToggle(500)
    descricaoMobile.slideUp(100)
    descricaoDesktop.slideUp(100)
    

})
