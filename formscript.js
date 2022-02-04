


        function displayInput() {



            document.getElementById("result-text").innerHTML = "";
            var text = document.getElementById('Productname').value
            var name = document.getElementById('Productname').name

            document.getElementById("result-text").innerHTML
                += name +": "+text +"<br>";



            document.getElementById("result").innerHTML = "";
            var ele = document.getElementsByClassName('rating')


            for (i = 0; i < ele.length; i++) {

                if (ele[i].type === "radio") {

                    if (ele[i].checked)
                        document.getElementById("result").innerHTML
                            += ele[i].name + " Wert:"
                            + ele[i].value + "<br>";
                }
            }
        }



