//^https:\/\/apis\.littlefox\.com\/api\/v1\/contents\/C.+ url script-response-body https://raw.githubusercontent.com/hipacket/QuantumultX/main/littlefox.js
var obj = JSON.parse($response.body);
let {preview_time, ...new_obj} = obj;

$done({body: JSON.stringify(new_obj)});
