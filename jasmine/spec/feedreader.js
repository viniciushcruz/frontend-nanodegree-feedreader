/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('Are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        it('Allfeeds should have a url defined', function () {
          allFeeds.forEach(function (feed) {
              expect(feed.url).toBeDefined();
          })
        });


        it('Allfeeds should have a name defined and not empty', function () {
          allFeeds.forEach(function (feed) {
            expect(feed.name).toBeDefined();
            expect(feed.name.length).not.toBe(0);
          })
        });
    });


    describe('The menu', function () {

        it('the menu element should be hide by default', function () {
          var menu = $('body').attr("class");

          expect(menu).toBe('menu-hidden');

        });

       it('the menu element should be hide by default', function () {
         var menu = $('body');
         var menuIcon = $('.menu-icon-link')[0];

         menuIcon.click();
         expect(menu.attr("class")).not.toBe('menu-hidden');

         menuIcon.click();
         expect(menu.attr("class")).toBe('menu-hidden');

       });


    });

    describe('Initial Entries', function () {

      beforeEach(function(done) {
        setTimeout(function() {
          loadFeed(0, function () {
            done();
          });

        }, 2000);
      });


      it('the loadFeed function should execution correctly', function (done) {
        var feed = $('.feed .entry');

        expect(feed.length).not.toBe(0);
        done();
      });

    });

    describe('New Feed Selection', function () {

      beforeEach(function(done) {
        setTimeout(function() {
          loadFeed(0, function () {
            done();
          });
        }, 2000);
      });

      it('Guarantee that when load a new content the feed is change', function (done) {
        var feed = $('.feed .entry-link');

        expect(feed.length).not.toBe(0);
        expect(feed.attr("href")).toContain('http://blog.udacity.com');

        setTimeout(function() {
          loadFeed(2, function () {
            var feed = $('.feed .entry-link');

            expect(feed.length).not.toBe(0);
            expect(feed.attr("href")).toContain('http://feedproxy.google.com');

            done();
          });
        }, 2000);

      });

    });
}());
