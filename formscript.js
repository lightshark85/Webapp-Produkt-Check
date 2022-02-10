function displayInput() {


    document.getElementById("result-text").innerHTML = "";
    var text = document.getElementById('Productname').value
    var name = document.getElementById('Productname').name

    if (text) {

        document.getElementById("result-text").innerHTML
            += name + ": " + text + "<br>";
    }

    document.getElementById("result").innerHTML = "";
    var ele = document.getElementsByClassName('rating')





    for (let i = 0; i < ele.length; i++) {

        if (ele[i].type === "radio") {

            if (ele[i].checked)
                document.getElementById("result").innerHTML
                    += ele[i].name + " Wert:"
                    + ele[i].value + "<br>";
        }

        var v1 = ele[1].value
        var v2 = ele[2].value
        var v3 = ele[3].value
        var v4 = ele[4].value
        var v5 = ele[5].value
        var v6 = ele[6].value
        var v7 = ele[7].value
        var v8 = ele[8].value
        var v9 = ele[9].value
        var v10 = ele[10].value
        var v11 = ele[11].value
        var v12 = ele[12].value
        var v13 = ele[13].value
        var v14 = ele[14].value
        var v15 = ele[15].value
        var v16 = ele[16].value
        var v17 = ele[17].value
        var v18 = ele[18].value
        var v19 = ele[19].value
        var v20 = ele[20].value
        var v21 = ele[21].value
        var v22 = ele[22].value
        var v23 = ele[23].value
        var v24 = ele[24].value
        var v25 = ele[25].value
    }


}


