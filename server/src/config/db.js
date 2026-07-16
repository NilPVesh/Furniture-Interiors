const mongoose = require("mongoose");
const dns = require("dns");

// The default OS DNS resolver (e.g. an IPv6 link-local router address) can
// refuse the SRV lookups that `mongodb+srv://` connection strings require,
// causing `querySrv ECONNREFUSED`. Force a reliable public DNS resolver.
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            dbName: "vf-interiors-cluster",
        });
        console.log(`Mongo Connected: ${connection.connection.host}`);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

module.exports = connectDB;