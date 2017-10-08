import { NgProductStorePage } from './app.po';

describe('ng-product-store App', () => {
  let page: NgProductStorePage;

  beforeEach(() => {
    page = new NgProductStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
