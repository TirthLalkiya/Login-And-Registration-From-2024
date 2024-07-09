// JavaScript Document
    function check() {
    var a=document.getElementById("un").value;
    var b=document.getElementById("e").value;
    var c=document.getElementById("p").value;
    var d=document.getElementById("pd").value;
    var e=document.getElementById("cpd").value;
 

    if(a=="")
    {
    alert("please Enter User name");
    a.focus();
    return false;
    }
    if(b=="")
        {
        alert("Enter correct E-mail Id");
        b.focus();
        b.select();
        return false;
        }
    if(c=="")
        {
            alert("Please enter mobile number");
            c.focus();
            return false;
        }
    if(d=="")
                {
                alert("Input Password");
                d.focus();
                return false;
                }
    if(d<=5)
                {
                alert("Minimum input 6 characters");
                d.focus();
                d.select();
                return false;
                }
    if(e=="")
                    {
                    alert("Input Confirm Password");
                    e.focus();
                    return false;
                    }
     if(e!=d)
                    {
                    alert("Passwords are not match");
                    e.focus();
                    e.select();
                    return false;
                    }
                
                    function checkEmail(myForm)
                    {
      if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(b))
        
                    {
                    return (true)
                    }
        else
                    return (false)
                    }
                    
                    
    }