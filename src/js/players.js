export default function assessLevelHealth(players) {
  return players.sort((prev, next) => next.health - prev.health);
}

const players = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

assessLevelHealth(players);
