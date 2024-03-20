/**
 * Test Case: Verify that there are no broken links
 * 
 * Given: The user is on the Holdcroft VSP
 * When: The site is crawled by the broken link checker
 * Then: Any broken links are logged to the console
 */

const { SiteChecker } = require('broken-link-checker');

describe('Verify that there are no broken links', () => {
  it('passes', () => {
    const siteChecker = new SiteChecker({ filterLevel: 0 }, {
      error: (error) => {
        console.error(`Error: ${error}`);
      },
      link: (result) => {
        if (result.broken) {
          console.error(`Broken link: ${result.url.original}`);
        }
      },
      end: () => {
        console.log('Finished checking for broken links');
      },
    });

    siteChecker.enqueue('https://holdcroft.pre.nexuspointdev.co.uk/');
  });
});