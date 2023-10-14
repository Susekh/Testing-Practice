import analyzeArray from "../codes/analyzeArray";


test('[0,1,2,3,4] to be', () => {
    const expected = {
        average: 2,
        min: 0,
        max: 4,
        length: 5
    }
    const data = [0,1,2,3,4];
    expect(analyzeArray(data)).toEqual(expected);
})