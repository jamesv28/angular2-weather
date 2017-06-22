import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'degree'
})

export class ToDegree implements PipeTransform {
    transform(temp: number) {
        return temp + String.fromCharCode(176);
    }
}