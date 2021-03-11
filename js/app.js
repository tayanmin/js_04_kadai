
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    databaseURL: "",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  
//  送受信準備
   const newPostRef = firebase.database().ref();

 
  // 送信ボタンをクリックされたら次の処理をする
  $("#send").on("click", function () {



    // let username= $(username)
    // データを登録で送る
    newPostRef.push({
      //日付
      month: $("#date").val(),
   
      bedtime: $("#bed-time").val(),
      wakeuptime: $("#wakeup-time").val(),
      //テキストエリア
      text: $("#text").val(),
     

    })

    // 文字を空にする
    $("#date").val(""); //空にする()の中に""を入れるだけ！！
    $("#bed-time").val(""); //空にする()の中に""を入れるだけ！！
    $("#wakeup-time").val(""); //空にする()の中に""を入れるだけ！！
   
    $("#text").val(""); //空にする

  });



  // 受信処理
  newPostRef.on("child_added", function (data) {

    let v =data.val();
    // const k = data.key;

      console.log(v)

      // let str = `<p>${v.month}<br>${v.text}</p>`;
      let str1 = `<p>${v.month}</p>`;
      let str2 = `<p>${v.bedtime}</p>`;
      let str3 = `<p>${v.wakeuptime}</p>`;
      let str4 = `<p>${v.text}</p>`;


      
      $("#output1").prepend(str1);
      $("#output2").prepend(str2);
      $("#output3").prepend(str3);
      $("#output4").prepend(str4);
      
      // $("str").css("color",#fff)
      
      
      
      $("#delet").on("click", function () {
        $("#output1").remove();
        $("#output2").remove();
        $("#output3").remove();
        $("#output4").remove();
        
        
        
        // $("#output1").css("color","red");
        // $("#output2").css("color","red");
        // $("#output3").css("color","red");
        
      })
      
      $("#button-color").on("click", function () {
        
        $("#output1").css("color","red");
        $("#output2").css("color","red");
        $("#output3").css("color","red");
        $("#output4").css("color","red");
      })
    });
    
    
    // 出てこない
    if ( str4<= 37.0){
      alert("熱があるので外出は控えましょう。");
    }
        




  $("xxx").on("keydown", function (event) {


  });
