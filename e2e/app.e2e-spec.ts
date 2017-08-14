import { AppCursoPage } from './app.po';

describe('app-curso App', () => {
  let page: AppCursoPage;

  beforeEach(() => {
    page = new AppCursoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
