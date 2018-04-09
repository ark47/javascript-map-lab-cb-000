const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];

function allegiance(robot) {
  if (!knownDecepticons.includes(robot.name)) {
    return Object.assign({}, robot, {alliance: 'autobot'});
  }
  else {
    return Object.assign({}, robot, {alliance: 'decepticon'});
  }
}

const sortedRobots = robots.map(allegiance);


////////////
// ZEBRAS //
////////////

const zebraStripes = [
  { width: 9.12, color: null }, //white
  { width: 5.71, color: null }, //white
  { width: 6.01, color: null }, //black
  { width: 1.54, color: null }, //black
  { width: 8.34, color: null }, //black
  { width: 7.77, color: null }, //white
  { width: 0.59, color: null }, //black
  { width: 7.31, color: null } //white
];

function colorPicker(zebra) {
  if (Math.floor(zebra.width % 2) === 0) {
    return Object.assign({}, zebra, { color: 'black'});
  }
  else {
    return Object.assign({}, zebra, {color: 'white'});
  }
}

const coloredZebraStripes = zebraStripes.map(colorPicker);