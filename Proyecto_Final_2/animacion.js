let darkMode;

if(localStorage.getItem('darkMode')) {
    darkMode = localStorage.getItem('darkMode')
} else {
    darkMode = "light"
}

localStorage.setItem('darkMode', darkMode)

$(() => {
    if(localStorage.getItem('darkMode') == "dark") {
        $('body').addClass('darkMode')
        $('#btnDarkMode').hide()
        $('#btnLightMode').show()
    } else {
        $('#btnLightMode').hide()
    }

    $('#btnDarkMode').click(() => {
        $('#btnDarkMode').hide()
        $('#btnLightMode').show()

        $('body').css({
            "background-color": "black",
            "color": "azure"
        })
        //$('body').addClass('darkMode')
        localStorage.setItem('darkMode', "dark")
    })

    $('#btnLightMode').click(() => {
        $('#btnDarkMode').show()
        $('#btnLightMode').hide()
        $('body').css({
            "background-color": "white",
            "color": "black"
        })
        //$('body').removeClass('darkMode')
        localStorage.setItem('darkMode', "light")
    })

})