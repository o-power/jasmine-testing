describe("Calculator", function() {
    describe("Addition tests", function() {
        it("should return 42", function() {
            expect(addition(20,22)).toBe(42);
        });
        it("should return 19", function() {
            expect(addition(10,9)).toBe(19);
        });
        it("should return error if 2 numbers not supplied", function() {
            //expect(addition("one","two")).toBe("Error!");
            spyOn(window,"alert");
            addition("one","two");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    })
})