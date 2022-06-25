/**
* @description       :
* @author            : Lucas Santos - Accenture
* @group             :
* @last modified on  : 06-23-2022
* @last modified by  : Lucas Santos - Accenture
**/
import { LightningElement } from 'lwc';

export default class Augmentor extends LightningElement {
    startCounter = 0;
    handleStartChange(event) {
        this.startCounter = parseInt(event.target.value);
    }
    handleMaximizeCounter() {
        this.template.querySelector('c-numerator').maximizeCounter();
    }
}