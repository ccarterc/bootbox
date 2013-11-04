describe("bootbox.setDefaults", function() {

  beforeEach(function() {
    bootbox.init();

    this.find = function(selector) {
      return this.dialog.find(selector);
    };
  });

  describe("animate", function() {
    describe("when set to false", function() {
      beforeEach(function() {
        bootbox.setDefaults({
          animate: false
        });
        this.dialog = bootbox.dialog({
          message: "test"
        });
      });

      it("does not add the fade class to the dialog", function() {
        expect(this.dialog.hasClass("fade")).to.be.false;
      });

      describe("when set to true", function() {
        beforeEach(function() {
          bootbox.setDefaults({
            animate: true
          });
          this.dialog = bootbox.dialog({
            message: "test"
          });
        });

        it("adds the fade class to the dialog", function() {
          expect(this.dialog.hasClass("fade")).to.be.true;
        });
      });
    });
  });

  describe("className", function() {
    describe("when passed as a string", function() {
      beforeEach(function() {
        bootbox.setDefaults({
          className: "my-class"
        });

        this.dialog = bootbox.dialog({
          message: "test"
        });
      });

      it("adds the extra class to the outer dialog", function() {
        expect(this.dialog.hasClass("bootbox")).to.be.true;
        expect(this.dialog.hasClass("my-class")).to.be.true;
      });
    });
  });

  describe("backdrop", function() {
    describe("when set to false", function() {
      beforeEach(function() {
        bootbox.setDefaults({
          backdrop: false
        });

        this.dialog = bootbox.dialog({
          message: "test"
        });
      });

      it("does not show a backdrop", function() {
        expect(this.dialog.next(".modal-backdrop").length).to.equal(0);
      });
    });
  });
  
  describe("container", function () {
	describe("when set to body", function() {
      beforeEach(function() {
        bootbox.setDefaults({
          container: "body"
        });

        this.dialog = bootbox.dialog({
          message: "test"
        });
      });

      it("parent is body", function() {
        expect(this.dialog.parent().is('body')).to.be.true;
      });
    });
	
	describe("when set to another dom", function() {
	  var expectedContainer = $('<div></div>');
      beforeEach(function() {
        bootbox.setDefaults({
          container: expectedContainer
        });

        this.dialog = bootbox.dialog({
          message: "test"
        });
      });

      it("parent is that dom and not body", function() {
        expect(this.dialog.parent().is(expectedContainer)).to.be.true;
        expect(this.dialog.parent().is('body')).to.be.false;
      });
    });
  });
});
