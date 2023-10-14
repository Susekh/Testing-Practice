import caesarCipher from "../codes/caesarCipher";


test('test ceaserCipher', ()=> {
    expect(caesarCipher('abc', 3)).toBe("def");
})


test('test ! in  ceaserCipher', ()=> {
    expect(caesarCipher('abc!', 3)).toBe("def!");
})

test('test ~ in  ceaserCipher', ()=> {
    expect(caesarCipher('abc~', 3)).toBe("def~");
})

test('test Uppercase in  ceaserCipher', ()=> {
    expect(caesarCipher('ABc', 3)).toBe("DEf");
})

test('test last letters in ceaserCipher', ()=> {
    expect(caesarCipher('zZ', 3)).toBe("cC");
})