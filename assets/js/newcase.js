
  // $(document).keypress(function(e) {
  //       if(e.which == 13) {
  //           window.myFunction();    
  //       }
  //   }); 

  function mysqlConnect(){

  $.post("assets/php/mysqlconnect.php", function(data, status) {

      if (data) {

      } else {
        // window.location.replace("public/503.html"); 
        console.log("Unable to connect to MySQL"); }
  });

}

  function reload() {
    // location.reload();
    document.forms["newcase"]["subject"].value = null;
    document.forms["newcase"]["c_name"].value = null;
    document.forms["newcase"]["c_number"].value = null;
    document.forms["newcase"]["c_email"].value = null;
    document.forms["newcase"]["c_company"].value = null;
    document.forms["newcase"]["estimate_id"].value = null;
    document.forms["newcase"]["duty"].value = 0;
    document.forms["newcase"]["urgent"].value = 0;
    document.forms["newcase"]["desc"].value = null;
    document.forms["newcase"]["request_date"].value = null;
  }


  function newCase() {

    

        subject = document.forms["newcase"]["subject"].value;
        c_name = document.forms["newcase"]["c_name"].value;
        c_number = document.forms["newcase"]["c_number"].value;
        c_email = document.forms["newcase"]["c_email"].value;
        c_company = document.forms["newcase"]["c_company"].value;
        estimate_id = document.forms["newcase"]["estimate_id"].value;
        duty = document.forms["newcase"]["duty"].value;
        file = "";
        picture = "";
        urgent = document.forms["newcase"]["urgent"].value;
        desc = document.forms["newcase"]["desc"].value
        request_date = document.forms["newcase"]["request_date"].value;

        console.log(
          subject+"-"+
          c_name+"-"+
          c_number+"-"+
          c_email+"-"+
          c_company+"-"+
          estimate_id+"-"+
          duty+"-"+
          file+"-"+
          picture+"-"+
          urgent+"-"+
          desc+"-"+
          request_date);

        if (  subject       == "" ||
              c_name        == "" ||
              c_number      == "" ||
              c_company     == "" ||
              estimate_id   == "" ||
              duty          == "" ||
              urgent        == "" ||
              desc          == "" ||
              request_date  == "" ) {

          alert("Some field empty data");

        } else {

          if (confirm("ยืนยันนะครับ") == true) {

          $.post("assets/php/newcase.php", {

              subject         :subject      ,
              contact_name    :c_name       ,
              contact_number  :c_number     ,
              contact_email   :c_email      ,
              contact_company :c_company    ,
              estimate_id     :estimate_id  ,
              duty            :duty         ,
              file            :file         ,
              picture         :picture      ,
              urgent          :urgent       ,
              description     :desc         ,
              request_date    :request_date 

              }, function(data,status) {



                if (data) {

                  console.log("Comeback Page");

                  // alert(data); 
                  
                  var json = JSON.parse(data);

                  // alert(json.status + " : " + json.data.case_id + " : " + json.message + " : " + json.data.error + " : " + json.data.number);
                  
                  document.forms["showcase"]["s_title"].value = json.data.case_id;
                  document.forms["showcase"]["s_subject"].value = subject;
                  document.forms["showcase"]["s_name"].value = c_name;
                  document.forms["showcase"]["s_number"].value = c_number;
                  document.forms["showcase"]["s_email"].value = c_email;
                  document.forms["showcase"]["s_company"].value = c_company;
                  document.forms["showcase"]["s_estimate_id"].value = estimate_id;
                  document.forms["showcase"]["s_person"].value = duty;
                  document.forms["showcase"]["s_urgent"].value = urgent;
                  document.forms["showcase"]["s_desc"].value = desc;
                  document.forms["showcase"]["s_request_date"].value = request_date;

                  // var json = $.parseJSON(data);        
                  // alert("User: " + json.user + "\nPass: " + json.pass + "\nStatus: " + status);
                  // alert(calcMD5(document.getElementById("user").value) + "\n" + json.user);
                  // alert(document.forms["login"]["user"].value + "\n" + json.user);

                  // if (document.forms["login"]["user"].value == json.user && 
                  //     calcMD5(document.forms["login"]["pass"].value) == json.pass) {

                  //   window.location.replace("service-job-insert.html");
                  //   console.log(document.forms["login"]["user"].value + " Login complete");

                  // } else {
                  //   alert("Please check your user or password");
                  //   console.log("System authentication fail");
                  // }
                  reload();
                  
                } else {
                  window.location.replace("public/503.html");
                  console.log("System Can\'t received authentication data");
                }        

              });
          } 

        }
        // $.post("assets/php/authen.php", {
        //       user: document.forms["login"]["user"].value,
        //       pass: calcMD5(document.forms["login"]["pass"].value)
        //       }, function(data,status) {

        //         if (data) {
        //           var json = $.parseJSON(data);        
        //           // alert("User: " + json.user + "\nPass: " + json.pass + "\nStatus: " + status);
        //           // alert(calcMD5(document.getElementById("user").value) + "\n" + json.user);
        //           // alert(document.forms["login"]["user"].value + "\n" + json.user);

        //           if (document.forms["login"]["user"].value == json.user && 
        //               calcMD5(document.forms["login"]["pass"].value) == json.pass) {

        //             window.location.replace("service-job-insert.html");
        //             console.log(document.forms["login"]["user"].value + " Login complete");

        //           } else {
        //             alert("Please check your user or password");
        //             console.log("System authentication fail");
        //           }
                  
        //         } else {
        //           window.location.replace("public/503.html");
        //           console.log("System Can\'t received authentication data");
        //         }        

        //       });

        // alert(document.forms["newcase"]["duty"].value);
    
    
  }

  