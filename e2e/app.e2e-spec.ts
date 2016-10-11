import { AtombundlesPage } from './app.po';

describe('atombundles App', function() {
  let page: AtombundlesPage;

  beforeEach(() => {
    page = new AtombundlesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
