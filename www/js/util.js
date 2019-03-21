function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function getLoading(){

    /*
         <div class="progress">
    <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="" aria-valuemin="0" aria-valuemax="100" style="width:100%">
      
    </div>
    */

    var div1 = $('<div>')
    div1.attr('class','progress')

    var div2 = $('<div>')
    div2.attr('class','progress-bar progress-bar-striped active')
    div2.attr('role','progressbar')
    div2.css({'width':'100%'})

    div1.append(div2)

    return div1 
}