import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHostBind]'
})
export class HostBindDirective {

    possibleColors = [
        'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
        'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
    ];

    @HostBinding('style.color') color: string;
    @HostBinding('style.borderColor') borderColor: string;

    @HostListener('keydown') onKeyDown() {
        const colorPick = Math.floor(Math.random() * this.possibleColors.length);
        this.color = this.borderColor = this.possibleColors[colorPick];
    }

}
