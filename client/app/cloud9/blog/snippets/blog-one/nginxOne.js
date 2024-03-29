export const nginxSnippet = `

# upstream directive load balancer is where you can specify multiple servers to be reached by default round-robin protocol
upstream loadbalancer {
    hash $remote_addr consistent;
    server 127.0.0.1:8080;
    # recommended keep alive value to be double the amount of servers
    keepalive 2;
}


server {
    # nginx listening on port 80
        listen 80;
        listen [::]:80;

        server_name localhost;
        gzip on;  

         # Serve static files 
         location / {         
            root   /usr/share/nginx/html;
            index  index.html index.htm;
            try_files $uri $uri/ /index.html;  
        }

    # Proxying all front-end requests at /node-server to back-end servers proxy_pass
        location /node-server/ {
          

            proxy_hide_header "Access-Control-Allow-Origin";
            add_header 'Access-Control-Allow-Origin' "*" always;
            add_header 'Access-Control-Allow-Credentials' 'true' always;
            add_header 'Access-Control-Allow-Headers' "Origin, X-Requested-With, Content-Type, Accept" always;

            proxy_http_version 1.1;
            proxy_set_header Host $host;
            proxy_pass http://loadbalancer;
            proxy_buffering on;  
            proxy_redirect off;
            proxy_set_header X-Forwarded-Proto https; 
        }
   

}
`;
