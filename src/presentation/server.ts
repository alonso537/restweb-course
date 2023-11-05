import express from 'express'

export class Server {

    private app = express();


    async start() {
        // console.log('Server running');

        // Middlewares

        //Public Folder
        this.app.use(express.static('public'))

        this.app.listen(3000, () => {
            console.log(`Server started successfully on port 3000`);
            
        })
        
    }
}