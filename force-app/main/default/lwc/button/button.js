/**
 * @description       :
 * @author            : Lucas Santos - Accenture
 * @group             :
 * @last modified on  : 06-23-2022
 * @last modified by  : Lucas Santos - Accenture
**/
import { LightningElement, api } from 'lwc';

export default class Button extends LightningElement {
    @api label;
    @api icon;
    handleButton(event) {
      this.dispatchEvent(new CustomEvent('buttonclick',{
        bubbles: true
      }));
    }
}