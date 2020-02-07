const Redis = require('ioredis')

const redisConfig = {
    port: process.env.REDIS_PORT || 6379, // Redis port
    host: process.env.REDIS_HOST || "127.0.0.1", // Redis host
}

const redis = new Redis(redisConfig)
const pub = new Redis(redisConfig)

redis.subscribe("news", "music", (err, count) => {
    // Now we are subscribed to both the 'news' and 'music' channels.
    // `count` represents the number of channels we are currently subscribed to.
  
    pub.publish("news", "Hello world!");
    pub.publish("music", "Hello again!");
})
  
redis.on("message", (channel, message) => {
// Receive message Hello world! from channel news
// Receive message Hello again! from channel music
console.log("Receive message %s from channel %s", message, channel);
})

// There's also an event called 'messageBuffer', which is the same as 'message' except
// // it returns buffers instead of strings.
// sub.on("messageBuffer", (channel, message) => {
// // Both `channel` and `message` are buffers.
// })