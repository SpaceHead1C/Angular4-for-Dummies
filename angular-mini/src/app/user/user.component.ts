import { Component } from "@angular/core";

@Component({ // decorator becouse '@'
    /*There are two parameters required
     * selector - aka key for calling component
     * <template> (templateUrl)
     */
    selector: 'app-user',
    templateUrl: './user.component.html'
})

export class UserComponent {}