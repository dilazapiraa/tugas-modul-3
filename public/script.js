// api url
const api_url = "https://api.thingspeak.com/channels/2071057/feeds.json?api_key=A91FKH0YQ4BNHDOG&results=2";
// masukan url sesuai dengan format <ChannelID>, <ReadAPIKeys> yang ada di Thingspeak, tanpa menggunakan < >

setInterval(() => {
  fetch(api_url)
    .then((hasil) => hasil.json())
    .then((res) => {
      var field = JSON.stringify(res.feeds[0]);
      var obj = JSON.parse(field);
      document.getElementById("suhu").innerHTML = obj.field1;
      document.getElementById("jarak").innerHTML = obj.field3;
    });
}, 1000);
