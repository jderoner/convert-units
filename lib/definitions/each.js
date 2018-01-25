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
