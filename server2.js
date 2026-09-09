import {createServer} from 'http';
const PORT =process.env.PORT;
const users = [
    {id: 1 , name: 'yara'},
    {id: 2 , name: 'hana'},
    {id: 3 , name: 'mayar'}
              ]
    const server = createServer((req,res) => {
        if(req.url === '/api/users' && req.method === 'GET'){
            res.setHeader('Content-Type','application/json');
            res.write(JSON.stringify(users));
            res.end();
        }
        else{
            res.setHeader('Content-Type','application/json');
            res.statusCode= 404;
            res.write(JSON.stringify({message: 'Route not found'}));
            res.end();
        }
    });
        server.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
