import { Server } from "./presentation/server"


(() => {
    main()
})()

function main() {
    // console.log('main');

    const server = new Server()

    server.start()
    
}