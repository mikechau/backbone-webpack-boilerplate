import { LayoutView } from 'backbone.marionette';
import template from './templates/layout.mustache';

const BaseLayout = LayoutView.extend({
  template: template
});

export default BaseLayout;
