var developmentDatabase = {
    postgres: {
    host: 'localhost',
    port: 5432,
    database: 'd1judhjbnldf17',
    user: 'dotrsukjvngrhb',
    password: '5e6e89b7fba38989cf2c5c60bcfaf04174c7ae81ce8849c23eedb980ab6b5ba6'
    }
    }
    
    var connectionString = "postgres://dotrsukjvngrhb:5e6e89b7fba38989cf2c5c60bcfaf04174c7ae81ce8849c23eedb980ab6b5ba6@ec2-54-74-156-137.eu-west-1.compute.amazonaws.com:5432/d1judhjbnldf17";
    if (process.env.NODE_ENV == 'production') {
    //Production mode
    if (process.env.DATABASE_URL) {
    developmentDatabase =
    parseConnectionString(process.env.DATABASE_URL);
    } else {
    console.log("process.env.DATABASE_URL empty, connectionStringvariable used");
    developmentDatabase = parseConnectionString(connectionString);
    }
    }else{
    //Development mode
    developmentDatabase = parseConnectionString(connectionString);
    }
    function parseConnectionString(connectionString) {
    if (connectionString) {
    var myRegexp = /(\w+):(\w+)@(.+):(\w+)\/(\w+)/g;
    var match = myRegexp.exec(connectionString);
    if (match.length == 6) {
    developmentDatabase.postgres.user = match[1];
    developmentDatabase.postgres.password = match[2];
    developmentDatabase.postgres.host = match[3];
    developmentDatabase.postgres.port = Number(match[4]);
    developmentDatabase.postgres.database = match[5];
    developmentDatabase.postgres.ssl = true;
    return developmentDatabase;
    }
    }
    console.log("connectionString cannot be parsed");
    return null;
    }
    module.exports = {
    hostname: "http://localhost",
    port: 5656,
    database: {
    postgres: developmentDatabase.postgres
    }
    }