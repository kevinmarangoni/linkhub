
const globalConfigs = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    mongoose:{
        url: process.env.MONGO_URL,
    },
    jwt:{
        secret: process.env.JWT_SECRET,
    }

}

module.exports = globalConfigs