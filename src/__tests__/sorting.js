import sorting from '../sorting.js';

test('compare close numbers', (data) => {
    for (let i = 0; i < data.length-2; i++) {
         expect(data[i].health).toBeLessThanOrEqual(data[i+1].health)
    }
    // expect().toBe();
})

// test('ounces per can is at most 12', () => {
//     expect(ouncesPerCan()).toBeLessThanOrEqual(12);
//   });