const functions = require("./functions");
test("Adds 2 + 2 to equel 4", ()=>{
    expect(functions.add(2,2)).toBe(4)
});

test("Adds 2 + 2 to NOT equel 5", ()=>{
    expect(functions.add(2,2)).not.toBe(5)
});

test("Should be null", ()=>{
    expect(functions.isNull()).toBeNull()
});

test("Should be falsy", ()=>{
    expect(functions.checkvalue(null)).toBeFalsy()
});

test("User should be Brad Travercy object", ()=>{
    expect(functions.createUser()).toEqual({firstName:'Brad', lastName:'Travercy'})
});

test("Should be under 1600", ()=>{
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
})

// Regex
test('There is no I in team', () => {
      expect('team').not.toEqual();
});

// Arrays
test('Admin should be in usernames', () => {
usernames = ['john', 'karen', 'admin'];
    expect(usernames).toEqual( ['john','karen','admin'])
});