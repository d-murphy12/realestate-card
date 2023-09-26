import { html } from 'lit';
import '../src/realestate-card.js';

export default {
  title: 'RealestateCard',
  component: 'realestate-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <realestate-card
      style="--realestate-card-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </realestate-card>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
