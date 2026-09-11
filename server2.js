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
        // [0-9]+: يقبل رقم من خانة واحدة أو أكتر (1, 23, 100)
        // [0-9]: يقبل رقم من خانة واحدة بس (من 0 لـ 9)
        // $: بيتأكد إن السطر خلص عند الرقم ده وما تزدش عليه أجزاء تانية في الـ URL
        else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
            const id =req.url.split('/')[3];
            console.log(id);
                res.setHeader('Content-Type','application/json');
                res.write(JSON.stringify({id: 1,name: "yara"}));
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
