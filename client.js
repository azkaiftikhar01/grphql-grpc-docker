const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

// Load the proto file
const PROTO_PATH = './proto/greeter.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const proto = grpc.loadPackageDefinition(packageDefinition).example;

// Create a gRPC client and connect to the server
const client = new proto.Greeter('localhost:50051', grpc.credentials.createInsecure());

// Make a request to the SayHello method
client.sayHello({ name: 'John' }, (error, response) => {
  if (!error) {
    console.log('Greeting:', response.message);
  } else {
    console.error(error);
  }
});
