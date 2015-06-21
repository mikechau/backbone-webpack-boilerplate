import Backbone from 'backbone';
import { Application } from 'backbone.marionette';
import Layout from './layout';

const ApplicationBase = Application.extend({
  onStart() {
    const layout = new Layout();
    layout.render();

    Backbone.history.start();
  }
});

const App = new ApplicationBase();

export default App;
