describe('pizzaPrice', function() {
  it("will print no more ramune if ramune equal 0", function() {
    expect(ramune(0)).to.eql("<br> No more bottles of ramune on the wall, no more bottles of ramune. Go to the store and buy some more, 0 bottles of ramune on the wall.");
  });
});
