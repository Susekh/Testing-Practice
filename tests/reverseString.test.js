import reverseString from "../codes/reverseString";

test('Check String empty ', () => {
    expect(reverseString('')).toBe('');
})

test('Check String reverse', ()=> {
    expect(reverseString('Subhranshu')).toBe('uhsnarhbuS');
})

test('abcd to dcba', ()=> {
    expect(reverseString('abcd')).toBe('dcba');
})


