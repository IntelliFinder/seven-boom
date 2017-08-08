import { SevenPage } from './app.po';

describe('seven App', () => {
  let page: SevenPage;

  beforeEach(() => {
    page = new SevenPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
