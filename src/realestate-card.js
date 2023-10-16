import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class RealestateCard extends LitElement {
  static properties = {
    image: { type: String },
    title: { type: String },
    description: { type: String },
    summary: { type: String },
    message: { type : String },
  }

  constructor() {
    super();
    this.image = 'https://media.istockphoto.com/id/1072291024/vector/vector-illustration-cartoon-residential-townhouse.jpg?s=612x612&w=0&k=20&c=vhYukmGJvZYdabADEakKi8W2-V47XzZ_fUW-3RRmPjE=';
    this.title = 'Real Estate Agency';
    this.description = 'IST 256 Pod 2';
    this.summary = 'Open Me!';
    this.message = 'The best agency around! Give us a call!';
  }

  render() {
    return html`
    <div class="buttons">
      <button class="duplicate" @click="${this.cloneCard}">Duplicate  card</button>
      <button class="changetxt" @click="${this.changeTitle}">Change title</button>
      <button id="deletecard" @click="${this.deleteCard}">Delete</button>
      <button data-toggle-btn @click="${this.toggleDetails}">Toggle details</button>
      <button id="changebackground" @click="${this.changeBackground}">Change Background</button>
    </div>
    
    <div class= "cards">
    <div id= "card" class="card">
      <img src="${this.image}" width="100"
           height="100"/>
        <h3>${this.title}</h3>
        <h4>${this.description}</h4>
      <details class="details">
        <summary>${this.summary}</summary>
        <div>
          ${this.message}
        </div>
    </div>
    </div>
    `;
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



  cloneCard(e) {
    const card = this.shadowRoot.querySelector('.card');
    const clone = card.cloneNode(true);
    this.shadowRoot.querySelector('.cards').appendChild(clone);
    }

    changeTitle(e) {
        let name = "Something else";
        if (name) {
          this.shadowRoot.querySelector('.card h3').innerText = name;
        }
    }

    deleteCard(e) {
        let wantsTo = confirm("Are you sure?");
        if (wantsTo) {
  
            this.shadowRoot.querySelector('.card:last-child').remove();     

        }
    }

    toggleDetails(e) {
      const details = this.shadowRoot.querySelector('summary');

      if (details.parentNode.getAttribute('open')) {
          details.parentNode.removeAttribute('open');
      }
      else {
    details.parentNode.setAttribute('open','open');    
      }
    }
   
    
    changeBackground(e) {
      const card = this.shadowRoot.querySelector('.card');
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        card.style.backgroundColor = '#' + randomColor;
        return randomColor;
        }



  
}



customElements.define('realestate-card', RealestateCard);