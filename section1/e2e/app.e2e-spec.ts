import { Section1Page } from './app.po';

describe('section1 App', () => {
  let page: Section1Page;

  beforeEach(() => {
    page = new Section1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
