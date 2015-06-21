import $jq from 'jquery';

describe('jquery-initializer.js', () => {
  beforeEach(() => {
    require('../../app/_initializers/jquery');
  });

  it('has $ is available', () => {
    expect($).to.equal($jq);
  });

  it('has jQuery available', () => {
    expect(jQuery).to.equal($jq);
  });
});
