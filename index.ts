import figlet from "figlet";
import { serve } from 'bun';

const PORT = 3000; //Port Number in Env File
const body = figlet.textSync("Local Bite - 404 Not Found");
serve({
    port: PORT,
    async fetch(request) {
        const {method} = request;
        const { pathname } = new URL(request.url);
        const pathRegexForID = /^\/api\/posts\/(\d+)$/;
        //GET
        if(method === 'GET') {
            const match = pathname.match(pathRegexForID);
            const id = match && match[1];
        }
        //GET_ALL
        if(method === 'GET' && pathname === '/api/posts') {
        }
        //POST
        if(method === 'POST' && pathname === '/api/posts') {
        }
        //PATCH
        if(method === 'PATCH') {
            const match = pathname.match(pathRegexForID);
            const id = match && match[1];
            
            if(id){
                //handle updating a post
            }
        }
        //DELETE
        if(method === 'DELETE' && pathname === '/api/posts') {
        }
        
        return new Response(body, {status: 404});
    }   
})


/*const server = Bun.serve({
    port: 3001,
    fetch(){
        const body = figlet.textSync("Local Bite");
        return new Response(body);
    },
});*/
