import sorting from '../sorting.js';

test('compare result', () => {
    let data = [
        { name: 'мечник', health: 100 },
        { name: 'маг', health: 15 },
        { name: 'лучник', health: 80 },
        { name: 'лучник', health: 75 },
        { name: 'лучник', health: 5 },
        { name: 'мечник', health: 15 },
      ];
    const result = sorting(data);
    let sortData = [
        { name: 'мечник', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'лучник', health: 75 },
        { name: 'маг', health: 15 },
        { name: 'мечник', health: 15 },
        { name: 'лучник', health: 5 }
      ]
    expect(result).toEqual(sortData); 
})
