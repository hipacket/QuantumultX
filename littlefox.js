var obj = JSON.parse($response.body);
let {preview_time, ...new_obj} = obj;

$done({body: JSON.stringify(new_obj)});
