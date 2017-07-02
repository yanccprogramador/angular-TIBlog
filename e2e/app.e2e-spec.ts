import { AngularTIblogPage } from './app.po';

describe('angular-tiblog App', () => {
  let page: AngularTIblogPage;

  beforeEach(() => {
    page = new AngularTIblogPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
