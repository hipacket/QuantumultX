//^https:\/\/apis\.littlefox\.com\/api\/v1\/contents\/C.+ url script-response-body https://raw.githubusercontent.com/hipacket/QuantumultX/main/littlefox.js
var obj = JSON.parse($response.body);
delete obj.data.preview_time;

$done({body: JSON.stringify(obj)});
