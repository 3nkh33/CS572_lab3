const dns = require('dns');

function domain2ip(domain){
    dns.resolve4(domain, function(err, ip){
        console.log(ip);
    })
}

domain2ip('www.mum.edu');