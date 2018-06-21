$(document).ready(function (){
  // Initialize Firebase
var config = {
    apiKey: "AIzaSyB1oNQScVj5G-cHopRdvWp1WbZkCZ0pwAM",
    authDomain: "train-792fc.firebaseapp.com",
    databaseURL: "https://train-792fc.firebaseio.com",
    projectId: "train-792fc",
    storageBucket: "",
    messagingSenderId: "145322010356"
    };
    
    firebase.initializeApp(config);
    
    var database = firebase.database();
    
    var trainName = "";
    var destination = "";
    var time = "";
    var frequency = "";

    $("#submit").on("click", function(event) {
        event.preventDefault();
        
        trainName = $("#trainName").val().trim()
        destination = $("#destination").val().trim()
        time = $("#time").val().trim
        frequency = $("#frequency").val().trim()
        
        console.log("works")
        database.ref().push({
            trainName: trainName,
            destination: destination,
            time: time,
            frequency: frequency
        });
        });
        
     
});


