import { VaultUiPage } from './app.po';

describe('vault-ui App', () => {
  let page: VaultUiPage;

  beforeEach(() => {
    page = new VaultUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
