import assessLevelHealth from '../js/players';

test('Уровень здоровья должен быть в порядке убывания', () => {
  expect(
    assessLevelHealth([
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 10 },
    ])
  ).toEqual([
    { name: 'маг', health: 100 },
    { name: 'мечник', health: 10 },
    { name: 'лучник', health: 10 },
  ]);

  expect(
    assessLevelHealth([
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ])
  ).toEqual([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ]);
});
