import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class RealestateCard extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
  .card {
    width: 400px;
    margin: 0 auto;
    border: 1px solid;
    padding: 10px;
    text-align: center;
}
.details {
  margin: 10 px;
  padding: 10px;
}

.details summary{
  font-size: 12px;
}

.buttons {
  display: block;
}

.buttons button:focus, 
.buttons button:hover {
  background-color: pink;
}

.buttons button:active {
  bakground-color: blue;
}

.button[data-toggle-btn] {
  padding: 10px;
  font-size: 15px;
  display: block;
}

@media only screen and (max-width: 1200px){
  .wrapper {
    background-color: pink;
  }
}
@media only screen and (max-width: 600px){
  .wrapper {
    background-color: purple;
  }
}
@media only screen and (max-width: 425px){
  .wrapper {
    font-weight: normal;
  }
  .wrapper .header h3 {
    font-size: 12px;
  }
  .wrapper .header h4 {
    font-size: 10px !important;
  }
  details {
    display: none;
  }
}
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
    <div class="buttons">
    <button class="duplicate">Duplicate  card</button>
    <button class="changetxt">Change title</button>
    <button id="deletecard">Delete</button>
    <button data-toggle-btn>Toggle details</button>
      <button id="changebackground">Change Background</button>
    </div>
    
    <div id= "card" class="card">
      <img src="https://media.istockphoto.com/id/1072291024/vector/vector-illustration-cartoon-residential-townhouse.jpg?s=612x612&w=0&k=20&c=vhYukmGJvZYdabADEakKi8W2-V47XzZ_fUW-3RRmPjE=" width="100"
           height="100"/>
        <h3 >Real Estate Agency</h3>
        <h4>IST 256 Pod 2</h4>
      <details class="details">
        <summary>Open me</summary>
        <div>
          The best agency around! Give us a call!
        </div>
    </div>
    
    `;
  }
}

customElements.define('realestate-card', RealestateCard);