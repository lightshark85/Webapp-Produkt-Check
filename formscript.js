
    function displayRadioValue() {
    var ele = document.getElementsByName('fav_language');

    for(i = 0; i < ele.length; i++) {
    if(ele[i].checked)
    document.getElementById("result").innerHTML
    = "Gender: "+ele[i].value;
}
}
