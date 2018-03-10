var metric
  , imperial;

metric = {
  ea: {
    name: {
      singular: 'Each'
    , plural: 'Each'
    }
  , to_anchor: 1
  },
  pc: {
    name: {
      singular: 'Piece'
    , plural: 'Pieces'
    }
  , to_anchor: 1
  },
  sprig: {
    name: {
      singular: 'Sprig'
    , plural: 'Sprigs'
    }
  , to_anchor: 1
  },
  stalk: {
    name: {
      singular: 'Stalk'
    , plural: 'Stalks'
    }
  , to_anchor: 1
  },
  head: {
    name: {
      singular: 'Head'
    , plural: 'Heads'
    }
  , to_anchor: 1
  },
  ear: {
    name: {
      singular: 'Ear'
    , plural: 'Ears'
    }
  , to_anchor: 1
  },
  bulb: {
    name: {
      singular: 'Bulb'
    , plural: 'Bulbs'
    }
  , to_anchor: 1
  },
  sl: {
    name: {
      singular: 'Slice'
    , plural: 'Slices'
    }
  , to_anchor: 1
  },
  bu: {
    name: {
      singular: 'Bunch'
    , plural: 'Bunches'
    }
  , to_anchor: 6
  },
  wh: {
    name: {
      singular: 'Whole'
    , plural: 'Whole'
    }
  , to_anchor: 1
  },
  dz: {
    name: {
      singular: 'Dozen'
    , plural: 'Dozens'
    }
  , to_anchor: 12
  }
};

module.exports = {
  metric: metric
, imperial: metric
, _anchors: {
    metric: {
      unit: 'ea'
    , ratio: 1
    }
  }
};
