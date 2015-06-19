import { Application } from 'backbone.marionette';
import AppLayout from './layout';

const App = new Application();

App.on('start', () => {
  App.rootLayout = new AppLayout({ el: '#main' });
  App.rootLayout.render();
});

export default App;
