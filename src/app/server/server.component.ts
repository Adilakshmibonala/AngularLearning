import { Component } from "@angular/core";


@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online{
            color: white;
        }
        .offline{
            color: green;
        }
    `]
})
export class ServerComponent { //Normal TS Class
    serverName: string = "";
    serverStatus: string = "offline";
    servers = ["Test Adi"];

    constructor () {
        this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
    }
    addServer() {
        this.serverName = "Server Created";
        this.servers.push("New Server");
    }

    getColor() {
        return this.serverStatus === 'offline' ? 'red' : 'green';
    }
    
}