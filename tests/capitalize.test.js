import capitalize from '../codes/capitalize';

test('suBhRanShU to Subhranshu', () =>{
    expect(capitalize('suBhRanShU')).toBe('Subhranshu');
})

test(" '' to '' ", () =>{
    expect(capitalize('')).toBe('');
})

test('SUBHRANSHU to Subhranshu', () =>{
    expect(capitalize('SUBHRANSHU')).toBe('Subhranshu');
})

test('subhranshu to be Subhranshu', () =>{
    expect(capitalize('subhranshu')).toBe('Subhranshu')
})