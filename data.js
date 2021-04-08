const GITHUB_ROOT = 'https://github.com/mwdchang/';
const PAGE_ROOT = 'https://mwdchang.github.io/';

const SITE_DATA = {
  nebulis: {
     title: 'Nebulis validator',
     desc: 'Edit and validate Nebulis transform models. ',
     img: 'images/g_nebulis.png',
     url: GITHUB_ROOT + 'schema-editor'
  },
  stckr: {
     title: 'Stckr',
     desc: 'A flexible, API driven stacking library',
     img: 'https://raw.githubusercontent.com/mwdchang/stckr/master/stckr.gif',
     url: GITHUB_ROOT + 'stckr'
  },
  fisheye: {
    title: 'Fisheye shader',
    desc: 'WebGL Fisheye effect',
    img: 'images/g_fisheye.png',
    url: 'https://github.com/mwdchang/Demos/tree/master/fisheye'
  },
  polaroid: {
    title: 'Polaroid',
    desc: 'Image processing and filters',
    img: 'images/g_polaroid.png',
    url: 'https://github.com/mwdchang/Demos/tree/master/polaroidComposite'
  },
  thesis: {
    title: 'My thesis project',
    desc: 'VehicleVis: combinging text visualiation with 3D graphcis',
    img: 'images/g_thesis.png',
    url: GITHUB_ROOT +'VehicleVis'
  },
  grid: {
    title: 'Grid reduction experiment',
    desc: 'Reduce grid noise by only showing localized context',
    img: 'images/g_grid.png',
    url: 'http://vialab.science.uoit.ca/mwdchang/projects/grid/testGrid.html'
  },
  clock: {
    title: 'Clock',
    desc: 'Abstract and artistic clocks written in D3',
    img: 'images/g_clock.png',
    url: 'https://mwdchang.github.io/arc-clock'
  },
  dbscan: {
    title: 'DBSCAN',
    desc: 'DBSCAN clustering algorithm and visualization (neighbourhood growth).',
    img: 'images/dbscan.png',
    url: GITHUB_ROOT + 'dbscanVis'
  },
  arc: {
    title: 'Arc diagram',
    desc: 'Using arc diagram in place of venn diagrams',
    img: 'images/g_arcs.png',
    url: 'https://github.com/mwdchang/VisDemos/tree/master/arcs'
  },
  kmeans: {
    title: 'K-means',
    desc: 'K-means clustering algorithm and iteration (center seeker) visualization',
    img: 'images/kmeans.png',
    url: GITHUB_ROOT + 'kmeansVis'
  },
  som: {
    title: 'SOM',
    desc: 'Self-organizing map',
    img: 'images/som.png',
    url: 'https://mwdchang.github.io/somVis/'
  },
  perlin: {
    title: 'Perlin noise',
    desc: 'Generating 2D textures with Perlin noise superimposed onto random functions',
    img: 'images/g_noise.png',
    url: 'https://github.com/mwdchang/Demos/tree/master/noiseGen'
  },
  shader: {
    title: 'WebGL Shaders',
    desc: 'Testing Three.js shaders via procedurally generated textures',
    img: 'images/g_shader.png',
    url: 'https://github.com/mwdchang/Demos/tree/master/shaderThreeJS'
  },
  luby: {
    title: 'Fountain code - LT',
    desc: 'Fountain code encoder/decoder using Luby transformations.',
    img: 'images/luby.png',
    url: 'https://mwdchang.github.io/fountain-code/'
  },
  'tensor-mlb': {
    title: 'Batter classifier',
    desc: 'Tensorflow classification for MLB batters based on career statistics',
    img: 'images/tensor-mlb.png',
    url: 'https://github.com/mwdchang/tensor-mlb-batting'
  },
  'text-gen': {
    title: 'Text generation',
    desc: 'Text generation with LSTM and Maximum-Likelihood models',
    img: 'images/text-gen.png',
    url: GITHUB_ROOT + 'text-gen'
  },
  'trip-flow': {
    title: 'Trip Flow',
    desc: 'Trip planning organizer/visualizer (Vue2, Firebase, Goole Maps) - In progress',
    img: 'images/trip-flow.png',
    url: 'https://mwdchang.github.io/trip-flow/'
  },
  louvain: {
    title: 'Louvain detection',
    desc: 'Louvain community clustering with force-directed layout',
    img: 'images/louvain.png',
    url : 'https://mwdchang.github.io/louvain'
  },
  qlearning: {
    title: 'Q-Learning',
    desc: 'Navigational solver with Q-Learning technique',
    img: 'images/qlearning.png',
    url: 'https://mwdchang.github.io/q-learning'
  },
  bh2018: {
    title: 'Baseball Hackathon 2018',
    desc: 'The Opinionator. Third place winner in the hackathon!!',
    img: 'images/bh2018.png',
    url: 'https://mwdchang.github.io/baseballhack-2018'
  },
  'tfjs-wine': {
    title: 'Wine classifier',
    desc: 'Simple wine classification using TensorflowJS',
    img: 'images/tfjs-wine.png',
    url: 'https://mwdchang.github.io/tfjs-wine'
  },
  lda: {
    title: 'LDA',
    desc: 'Topic modelling famous quotes',
    img: 'images/lda.png',
    url: 'https://mwdchang.github.io/lda'
  },
  'tfjs-gan': {
    title: 'GAN',
    desc: 'A simple Generative Adversarial Network',
    img: 'images/tfjs-gan.png',
    url: 'https://mwdchang.github.io/tfjs-gan'
  },
  uhack2018: {
    title: 'Uncharted Hackathon 2018',
    desc: 'Pollution release correlations',
    img: 'images/uhack2018.png',
    url: 'http://github.com/mwdchang/uhack2018'
  },
  attractors: {
    title: 'Attractors',
    desc: 'Strange attractors and other procedurally generated things',
    img: 'images/attractors.png',
    url: 'http://mwdchang.github.io/attractors'
  },
  theOtherSide: {
    title: 'The Other Side',
    desc: 'Finding and visualizing antipodes',
    img: 'images/the-other-side.png',
    url: 'http://mwdchang.github.io/the-other-side'
  },
  polaroids: {
    title: 'Polaroids',
    desc: 'Polaroid shader effects',
    img: 'images/g_polaroid.png',
    url: 'http://mwdchang.github.io/polaroids'
  },
  songTiles: {
    title: 'Song Tiles',
    desc: 'Tile mosaic from album covers',
    img: 'images/song-tiles.png',
    url: 'http://mwdchang.github.io/song-tiles'
  },
  songvis: {
    title: 'Song Visualization',
    desc: 'Visualizations and analyses of team\'s spotify playlist',
    img: 'images/songvis.png',
    url: 'http://github.com/mwdchang/songvis'
  },
  tsp: {
    title: 'TSP-Fourier',
    desc: 'Image synthesis with TSP and Fourier transforms',
    img: 'images/tsp-fourier.png',
    url: 'http://github.com/mwdchang/tsp-fourier'
  }
}
