#!/root/code/tools/node/node6
 //-----------------------------------------------------------------------------------------------------
 var u2      = require(process.env['HOME'] + '/code/node_webs/node_modules/util2')
 var common  = require('./common.js')

 //-----------------------------------------------------------------------------------------------------
//post_data.data.push({ uid : uids[i], src : 22, type : 1, info : telno, aid:'activity_collect'})

var tels = ["2kpTnU8+L4dMnx35Jya2mg==","aSf28Dj/Cd9GJGGN6jaz0w==","WwBoFpBnfa4B0GHcuAP8ww==","F6Rdy+VYWKQlY65UqewyZA==","e8naeAJq6sKq3qUlq3kBqQ==","0MB5VM8QKl4ry6Aouv1qaw==","boXUUB6Z9Qvv5dSKUTH5/w==","2x6U3z71h+9jq76q7wbHjQ==","ds/Q28pU05R7bJvqiqDMqQ==","VzGIhJwD7MHgupGJEaSHgw==","AUfRQ6aVoIeBIQKi90ZJaw==","ESz/IUY/trpbKdeZbvecIQ==","MhajUiwvUL949x2GzPJclg==","tQqd+8VJkJ7MJN+urOcAVA==","Uu3US4hxS+DWq59Vjoevhg==","9n9nQkrF7rlGeuoHyZ8VkA==","b4HVqujEq5UQSOB26p6BWA==","YcdU/wFDiwumklWgXqEXWA==","KYHFoGmevl0ZJn+wvrZS+w==","h3+NdGhXYK9uebL09Vkh2A==","/V+of09cYwbsltAi2qDMBA==","p0h1wte8JGBicVqAjY3CBQ==","B/zoHtMyijd7DSigT4ZluA==","o5rsQX1PgIrNhsVwQyQtfA==","VfMWX6RwZUDyHUqrQJnaoA==","yee9ckaslUETQTz5SS25QQ==","qJzOUFgtgFYoPUmFPlva3w==","X/xO8Gs+6LZhnhEaTjXN8Q==","pCqhNtaujL4YdPGDk3RJ8g==","/1QMEhAyNlEHzWgdgTJ+MQ==","O7w+k7FBe14BRsxZJuN5Qg==","pBre+DuI6UiApNhIiRxJYw==","smh8eixmTmQk6CwnmYjuxw==","aZEf/QgYbtHUrOa4i0n99w==","62y/qcCzdAmO6KyZxC02sQ==","der9FnP35RLvrtRLHWR5ZQ==","8S6dQ9pBiJRzaxVUE2CQIQ==","7D+UF0x1FcVz7e7sNcjSQQ==","UOjVnspEshbqi8Entnkpyw==","2U99jNc7SSlLPv8PzNrjcw==","B/TSU10zqq2sAgtIl71/rw==","EVv99fjKlFBq8w39bAH1hw==","tVNCL73oe72qxNFnvktmQQ==","b+UdjlSIzkJcac3NEVGfUg==","WgpWVqj7bm0TQTz5SS25QQ==","eMyDwfErhNMHzWgdgTJ+MQ==","e6tFWxehZmYBvfA9CzlZ5Q==","9vkLAefZ5c23SCfVSj2pnw==","zqvC9/uZ8axFZhR8dlUHZQ==","Tm1E19mL03O/ym8I9POndA==","WXqS23rjiba30XUMurLqlQ==","Az07O3dX9LGHFg7g9yC0Dg==","bzqkm/6/ugk2y2yJKMK6aw==","Rk+xH8dpiNADo4pLqvikNQ==","R++pd06TbSRhsM6JNAapUg==","HTPQFzl0sJEQ/WJGIJoaJQ==","RDlaqm/ZdLI/uK7Nt4qkqg==","VMUQObzIupPhVguSi9JNAA=="]

var uids =  [2056559353,2129572336,2067371907,2105504997,2085179973,2079934618,2132346517,2074323265,2081570136,2077835515,2042635168,2013083225,2077122747,2050294830,2013648803,521797475,531613879,2078036731,2044249146,2099188849,2133228115,500883434,2081067131,2108213630,2046504396,2102693203,2129697016,513082812,2134954789,2107168789,2096313431,2052071239,2075621645,16652090,2134037526,2066056409,2088915672,2078792290,503382644,25465352,2125945358,2091507089,2098184772,2072948989,2069261576,519901866,2131241853,521634778,2129024513,518694820,531932375,2079549300,2101649381,2104256850,529590010,2126967938,2114159563,526982553]

var post_data = { data : [] }

for(var i =0; i< tels.length; i++){
    var temp = u2.dencrypt_3des(tels[i], 'childhood_games_2020')
    post_data.data.push({ uid : uids[i], src : 22, type : 1, info : temp, aid:'activity_collect'})
}
console.log('--------->', post_data)
// common.send_data(post_data)