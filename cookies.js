    var names = document.getElementById("name");
    var age = document.getElementById("age");
    var genders = document.getElementsByName("gender");
    var color = document.getElementById("color");
    var selectValue ;
    var  nameWorkTrue=false;
    var ageWorkTrue = false;
    var colorTrue= false;



    names.addEventListener("change",function(){
        if(names.value.length < 3 || names.value.trim()==""){
        var wrongName = document.getElementById("nameWrong");
                wrongName.innerHTML="Name Must be AT Leaest 3 chars and must not be empty"
        wrongName.style.display="block"
        nameWorkTrue = false;
        }else{
          var wrongName=document.getElementById("nameWrong");
            wrongName.style.display="none";
            var nameEntered = names.value
        setCookie("name",nameEntered)
        nameWorkTrue = true;
        }
        
    });
    age.addEventListener("change",function(){{
        if(parseInt(age.value)>17 && age.value.trim().length>0){
            ageWorkTrue = true
        }else{
            var WrongAge = document.getElementById("ageWrong");
            WrongAge.innerHTML="Age Must Be Above 17 And Must BE Not Empty "
           ageWorkTrue =false
        }
    }})
    color.addEventListener("change",function(){
        if(color.value==="red"){
            var WrongColor = document.getElementById("colorWrong");
            WrongColor.style.display="none";
            colorTrue =true
        }
         else if(color.value === "yellow"){
            console.log("hellp sad")
            var WrongColor = document.getElementById("colorWrong");
            WrongColor.style.display="none";
            colorTrue =true

        }
         else if(color.value === "green"){
            var WrongColor = document.getElementById("colorWrong");
            WrongColor.style.display="none";
            colorTrue =true
        }


        else{
            var WrongColor = document.getElementById("colorWrong");
            WrongColor.innerHTML="Color Must Be Selected "
           colorTrue =false
           WrongColor.style.display="block";
        }
    })
    function hideElments(){
    var allElments = document.querySelectorAll("*")
    for (var element of allElments) {
        element.style.display = "none";
 
    }
    
    }
       function ShowSpesicItems(){
        var gender = hasCookie("gender")
         if(gender == "male"){
            document.writeln("<br><br><br><br><br><br><br><br><br><div style=\"text-align:center;\">");
            document.writeln("<img id=\"man\" src=\"./Lab/CookiesTask/1.jpg\" alt=\"\" style=\"vertical-align: middle; \">");
            document.writeln("<h1 style=\"display: inline-block;\">Welcome <span style=\"color: " +hasCookie("color")  + ";\">" + hasCookie("name") + "</span>, you have visited this site <span style=\"color: " + hasCookie("color") + ";\">" + hasCookie("visitCount") + "</span> time.</h1>");
            document.writeln("</div>");
            document.writeln("<center><input  type=\"button\" onclick=\"deleteCookies('visitCount'); location.reload();\" value=\"LogOut\"</center>"
            )
        }else{
            document.writeln("<br><br><br><br><br><br><br><br><br><div style=\"text-align:center;\">");
            document.writeln("<img id=\"man\" src=\"./Lab/CookiesTask/2.jpg\" alt=\"\" style=\"vertical-align: middle; \">");
            document.writeln("<h1 style=\"display: inline-block;\">Welcome <span style=\"color: " +hasCookie("color")  + ";\">" + hasCookie("name") + "</span>, you have visited this site <span style=\"color: " + hasCookie("color") + ";\">" + hasCookie("visitCount") + "</span> time.</h1>");
            document.writeln("</div>");
            document.writeln("<center><input  type=\"button\" onclick=\"deleteCookies('visitCount'); location.reload();\" value=\"LogOut\"</center>"
            )          
      }
    }

    for (var gender of genders) {
        gender.addEventListener("click", function () {
        if (this.checked) {
            selectValue = this.value;
            setCookie("gender", selectValue);
            console.log(nameWorkTrue , ageWorkTrue);
            if(nameWorkTrue && ageWorkTrue && colorTrue){
            hideElments();
            ShowSpesicItems();    
            }
            else{
                alert("there Somthing missing please fill inputs ")
            }
        }
        });
    }



    color.addEventListener('change',function(){
        setCookie("color",color.value)
    })
    function hasCookie(cookieName){
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i].trim();
          if (cookie.startsWith(cookieName + "=")) {
            return cookie.substring(cookieName.length + 1);
          }
        }
        return ""; 
          }

    function deleteCookies(cookieName){
        var expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + -2);
    var cookieString = cookieName + "=;expires=" + expiryDate
    document.cookie = cookieString;

    }
    function setCookie(cookieName,cookieValue){
    var expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate()+2);
    var cookieString = cookieName + '=' + cookieValue + ';expires=' + expiryDate.toUTCString() ;
    document.cookie = cookieString;
    }
    function allcookiesList(){

    } document.addEventListener("DOMContentLoaded", function () {
        var visitCount = hasCookie("visitCount");
        if(visitCount === ""){
            setCookie("visitCount","1");
            visitCount = 1;
            console.log("hello For First time ")
        }      
        else {
           // إذا لم تكن أول زيارة، قم بعرض المحتوى الثاني
           visitCount = parseInt(visitCount) + 1;
           setCookie("visitCount", visitCount.toString()); // تحديث الـ Cookie لينتهي بعد 365 يومًا
        ShowSpesicItems();
        }
    })          



      
        