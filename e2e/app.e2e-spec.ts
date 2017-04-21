import { MychatPage } from './app.po';

describe('mychat App', () => {
  let page: MychatPage;

  beforeEach(() => {
    page = new MychatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
