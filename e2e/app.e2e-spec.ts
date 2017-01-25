import { CrowdFunderPage } from './app.po';

describe('crowd-funder App', function() {
  let page: CrowdFunderPage;

  beforeEach(() => {
    page = new CrowdFunderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
