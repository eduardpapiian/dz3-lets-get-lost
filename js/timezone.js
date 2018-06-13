$(function bangkokTime(){
    $("#bangkok-refresh").click(function(){
    $.get('https://api.timezonedb.com/v2/get-time-zone?key=5B0825WYLZR5&format=json&by=zone&zone=Asia/Bangkok')
    .done(function(json){
        console.log(json);
        let time = json.timestamp;
        let newTime = new Date (time * 1000).toUTCString();
        $("#bangkok-time").html(newTime);
        });
    });
});

$(function siemreapTime(){
    $("#siemreap-refresh").click(function(){
    $.get('https://api.timezonedb.com/v2/get-time-zone?key=5B0825WYLZR5&format=json&by=zone&zone=Asia/Phnom_Penh')
    .done(function(json){
        console.log(json);
        let time = json.timestamp;
        let newTime = new Date (time * 1000).toUTCString();
        $("#siemreap-time").html(newTime);
        });
    });
});

$(function kualalumpurTime(){
    $("#kualalumpur-refresh").click(function(){
    $.get('https://api.timezonedb.com/v2/get-time-zone?key=5B0825WYLZR5&format=json&by=zone&zone=Asia/Kuala_Lumpur')
    .done(function(json){
        console.log(json);
        let time = json.timestamp;
        let newTime = new Date (time * 1000).toUTCString();
        $("#kualalumpur-time").html(newTime);
        });
    });
});

$(function baliTime(){
    $("#bali-refresh").click(function(){
    $.get('https://api.timezonedb.com/v2/get-time-zone?key=5B0825WYLZR5&format=json&by=zone&zone=Asia/Makassar')
    .done(function(json){
        console.log(json);
        let time = json.timestamp;
        let newTime = new Date (time * 1000).toUTCString();
        $("#bali-time").html(newTime);
        });
    });
});