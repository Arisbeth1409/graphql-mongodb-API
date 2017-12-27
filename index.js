'use strict';

require('./map');

const port = 5670;
const express = require('express');
const app = express();

const GraphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const http = require('http').Server(app);
const middleware = require('graphql-voyager/middleware').express;
const schema = require('./schemas');

const graphFX = GraphqlHTTP({ schema, graphiql: true });

app
    .use('/voyager', middleware({ endpointUrl: 'http://127.0.0.1:5670/graphql' }))
    .use('/graphql', graphFX);

app.listen(port, () => console.log(`Listen on port ${port}`));