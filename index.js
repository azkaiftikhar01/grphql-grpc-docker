const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

// Load the proto file
const PROTO_PATH = './proto/greeter.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const proto = grpc.loadPackageDefinition(packageDefinition).example;

// Implement the SayHello method
function sayHello(call, callback) {
  callback(null, { message: 'Hello, ' + call.request.name });
}

// Start the gRPC server
function startServer() {
  const server = new grpc.Server();
  server.addService(proto.Greeter.service, { sayHello: sayHello });
  server.bindAsync('127.0.0.1:50051', grpc.ServerCredentials.createInsecure(), () => {
    console.log('Server running at http://127.0.0.1:50051');
    server.start();
  });
}

startServer();
