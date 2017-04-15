import { NgPieceMealPage } from './app.po';

describe('ng-piece-meal App', () => {
  let page: NgPieceMealPage;

  beforeEach(() => {
    page = new NgPieceMealPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
