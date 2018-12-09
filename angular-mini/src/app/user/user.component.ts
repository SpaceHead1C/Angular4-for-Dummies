import { Component } from "@angular/core";

@Component({ // decorator because '@'
    /*There are two parameters required
     * selector - aka key for calling component
     * <template> (templateUrl)
     */
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})

export class UserComponent {}