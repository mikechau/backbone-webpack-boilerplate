import $jq from 'jquery';

describe('jquery-initializer.js', () => {
  beforeEach(() => {
    require('../../app/jquery-initializer');
  });

  it('has $ is available', () => {
    expect($).to.equal($jq);
  });

  it('has jQuery available', () => {
    expect(jQuery).to.equal($jq);
  });
});
