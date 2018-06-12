describe('Dom API:', function() {
  describe('#getScrollTop()', function() {
    const $body = document.body;
    const bodyHeight = getComputedStyle($body).getPropertyValue('height');
    const length = 20;
    before(function() {
      $body.style.height = '10000px';
      outils.setScrollTop(length);
    });
    it(`outils.getScrollTop() should return true`, function() {
      assert(outils.getScrollTop() === length);
    });
    after(function() {
      outils.setScrollTop(0);
      $body.style.height = bodyHeight;
    });
  });

  describe('#setScrollTop()', function() {
    const $body = document.body;
    const bodyHeight = getComputedStyle($body).getPropertyValue('height');
    const length = 20;
    before(function() {
      $body.style.height = '10000px';
    });
    it(`outils.getScrollTop() should return true`, function() {
      outils.setScrollTop(length);
      assert(outils.getScrollTop() === length);
    });
    after(function() {
      outils.setScrollTop(0);
      $body.style.height = bodyHeight;
    });
  });

  describe('#offset()', function() {
    let $ele = null;
    before(function() {
      let div = document.createElement('div');
      div.id = 'J_addClass';
      div.style.position = 'absolute';
      div.style.top = '200px';
      div.style.left = '300px';
      document.body.appendChild(div);
      $ele = document.querySelector('#J_addClass');
    });
    it(`outils.offset() should return true`, function() {
      const offset = outils.offset($ele);
      assert(offset.left === 300 && offset.top === 200);
    });
    after(function() {
      document.body.removeChild($ele);
    });
  });

  describe('#scrollTo()', function() {
    const $body = document.body;
    const bodyHeight = getComputedStyle($body).getPropertyValue('height');
    const y = 100;
    const duration = 300;

    before(function() {
      $body.style.height = '10000px';
    });
    it(`outils.scrollTo() should return true`, function(done) {
      outils.scrollTo(y, duration);
      setTimeout(function() {
        assert(outils.getScrollTop() === y);
        done();
      }, duration + 200);
    });
    after(function() {
      outils.setScrollTop(0);
      $body.style.height = bodyHeight;
    });
  });

  describe('#windowResize()', function() {
    const innerHeight = window.innerHeight;
    it(`outils.windowResize(downCb) should return true`, function(done) {
      outils.windowResize(function() {
        assert(window.innerHeight == innerHeight);
        done();
      }, function() {});
      window.dispatchEvent(new Event('resize'));
    });
  });

  describe('#windowResize()', function() {
    const innerHeight = window.innerHeight;
    it(`outils.windowResize(upCb) should return true`, function() {
      outils.windowResize(function() {}, function(done) {
        assert(window.innerHeight === innerHeight - 200);
        done();
      });
      window.innerHeight = innerHeight - 200;
      window.dispatchEvent(new Event('resize'));
    });
    after(function() {
      window.innerHeight = innerHeight;
    });
  });
});
