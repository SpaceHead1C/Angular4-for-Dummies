import { Component, Input } from "@angular/core";

@Component({ // decorator because '@'
    /*There are two parameters required
     * selector - aka key for calling component
     * <template> (templateUrl)
     */
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})

export class UserComponent {
    //Decorator of expecting input data
    @Input() user;
    isMarked = false;

    onClick() { // events handler (click)
        this.isMarked = true;
    }
}