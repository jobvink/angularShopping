import { AngularShoppingPage } from './app.po';

describe('angular-shopping App', () => {
  let page: AngularShoppingPage;

  beforeEach(() => {
    page = new AngularShoppingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
