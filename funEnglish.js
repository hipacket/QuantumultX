var obj = JSON.parse($response.body);
obj[0].has_expiration = false;
obj[0].expires_gmt = 4071200107;
obj[0].expires_gmt_formatted = '2099-01-04 15:55:07';

$done({body: JSON.stringify(obj)});
