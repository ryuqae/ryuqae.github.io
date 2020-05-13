// const links = data.links.map(d => Object.create(d));
// const nodes = data.nodes.map(d => Object.create(d));


var data = d3.json("data/dolphins.json")

d3.select('body').style('background-color', 'black')

d3.select('h1').style('color', '#4cd0cd')
.attr('id', 'heading').text('WELCOME TO MY CRAZY WORLD')

d3.select('body').append('circle').attr('r',1).attr('color', 'white').transition().attr('r', 2.5)
