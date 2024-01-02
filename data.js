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
     desc: 'A flexible, API driven stacking library in D3',
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
    desc: 'VehicleVis: combinging text visualiation with 3D graphics to investigate complaint reports',
    img: 'images/g_thesis.png',
    url: GITHUB_ROOT +'VehicleVis'
  },
  grid: {
    title: 'Grid reduction experiment',
    desc: 'Reduce grid noise by only showing localized context around the mouse cursor',
    img: 'images/g_grid.png',
    url: 'http://vialab.science.uoit.ca/mwdchang/projects/grid/testGrid.html'
  },
  clock: {
    title: 'Clock',
    desc: 'Abstract and artistic clocks written in D3. This utilizes the notion of arcs and positive/negative spaces to represent time segments',
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
    desc: 'Experiment with Self-organizing map. Here we encode MLB batters\'s status to detect similar players.',
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
    desc: 'Testing Three.js shaders via procedurally generated plasma textures',
    img: 'images/g_shader.png',
    url: 'https://github.com/mwdchang/Demos/tree/master/shaderThreeJS'
  },
  luby: {
    title: 'Fountain code - LT',
    desc: 'An interactive visualization of Fountain code encoder/decoder using Luby transformations.',
    img: 'images/luby.png',
    url: 'https://mwdchang.github.io/fountain-code/'
  },
  'tensor-mlb': {
    title: 'Batter classifier',
    desc: 'Tensorflow classification for MLB batters based on career statistics. Divide batters into 4 different hall-of-fame categories and see if we can build a classifier based on simple stats.',
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
    desc: 'Trip planning organizer/visualizer (Vue2, Firebase, Goole Maps) - Unfinished',
    img: 'images/trip-flow.png',
    url: 'https://github.com/mwdchang/trip-flow'
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
    desc: 'Experiment with simple wine classification using TensorflowJS',
    img: 'images/tfjs-wine.png',
    url: 'https://mwdchang.github.io/tfjs-wine'
  },
  lda: {
    title: 'LDA',
    desc: 'Using LDA for topic modelling against famous quotes',
    img: 'images/lda.png',
    url: 'https://mwdchang.github.io/lda'
  },
  'tfjs-gan': {
    title: 'GAN',
    desc: 'A simple Generative Adversarial Network for generating hand-written digits. Written in vanilla tensorflow-js without any additional 3rd party libs. Great for understanding how GAN works.',
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
    desc: 'Strange attractors, chaos systems, and other procedurally generated things',
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
    desc: 'Tile mosaic from album covers. Divide an image into grids, and for each cell calculate the best matching tile from a pool of images.',
    img: 'images/song-tiles.png',
    url: 'http://mwdchang.github.io/song-tiles'
  },
  songvis: {
    title: 'Song Visualization',
    desc: 'Visualizations and analyses of team\'s spotify playlist: track attributes such as length, energey, popularity, plus analysis of lyrical similarity',
    img: 'images/songvis.png',
    url: 'http://github.com/mwdchang/songvis'
  },
  tsp: {
    title: 'TSP-Fourier',
    desc: 'Image synthesis with TSP and Fourier transforms. Convolve an image and reconstruct it as a graph, then reformulate it as Fourier transforms.',
    img: 'images/tsp-fourier.png',
    url: 'http://github.com/mwdchang/tsp-fourier'
  },
  'image-util': {
    title: 'Image Utilities',
    desc: 'A collection of image manipulation functions for working with ImageData object. Colour filters, convolution kernels and other interesting effects',
    img: 'images/image-util.png',
    url: 'http://github.com/mwdchang/image-util'
  },
  'watts': {
    title: 'Watts-Strogatz graph generation',
    desc: 'Straying into graph theory. Experimention with generating and visualizing graphs with "small-world" properties',
    img: 'images/watts.png',
    url: 'http://github.com/mwdchang/watts-strogatz'
  },
  'tr-bot': {
    title: 'Discord bot',
    desc: 'Analyzer bot for the online game the-reincarnation. The bot interact with users, and performs battle simulation, match analysis, and suggest optimal unit pairings. ',
    img: 'images/tr-bot.png',
    url: 'http://github.com/mwdchang/discord-tr-bot'
  },
  'better-search': {
    title: 'Better search',
    desc: 'Experiments with better ways to search through a collection of text, with intentions to extract out co-occuring narratives with NLP/ML techniques.',
    img: '',
    url: 'https://github.com/mwdchang/better-search'
  },
  workbench: {
    title: 'Workbench',
    desc: 'A research synthesis tool for organizing, annotating, and presenting research artifacts. Inspired by a real-world "workbench" metaphor with 2D-physics',
    img: 'images/workbench.png',
    url: 'http://github.com/mwdchang/workbench'
  },
  ocr: {
    title: 'Tesseract OCR',
    desc: 'A handy web-tool for extracting text from clipboard. For those times when you have to deal with other people pasting images into Slack instead of text ... :)',
    img: 'images/ocr.png',
    url: 'https://mwdchang.github.io/ocr-tesseract/',
  },
  uhack2023: {
    title: 'Hackathon 2023',
    desc: 'We made Azul, a Slackbot capable of summarizing and synthesizing conversations, as well as providing additional context. Imaging the case where you are back from a short vacation, or you are not familar with the topics of dicussion, Azul can help!! Azul is built on top of GPT3.5 LLM',
    img: 'images/uhack2023.png',
    url: 'https://github.com/mwdchang/uncharted-hack2023'
  },
  particles: {
    title: 'Point cloud volume',
    desc: 'Point cloud enclosed within parametric volumes. Made with ThreeJS and Tweakpane. This came from a discussion about using a custom shader pipeline backed by textures vs vanilla memory buffers for points transforms. This is the memory buffer version, it works pretty well (pending on enclosed geometries) to about 1 million particles on a 2013 MacbookPro.',
    img: 'images/particles.png',
    url: 'http://mwdchang.github.io/particles-test'
  }
}
