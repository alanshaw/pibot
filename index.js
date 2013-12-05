var Hapi = require('hapi');

var options = {
    views: {
        path: 'src/layouts',
        engines: {
            html: 'handlebars'
        }
    }
};

// Create a server with a host, port, and options
var server = Hapi.createServer('localhost', 9000, options);

// Define the routes
server.route({
    method: 'GET',
    path: '/',
    handler: {
        file: {
            path: './dist/home.html'
        }
    }
});

server.route({
    method: 'GET',
    path: '/{path*}',
    handler: {
        directory: {
            path: './dist/'
        }
    }
});

// Start the server
server.start(function () {
  console.log('Pibot server running on port 9000');
});
