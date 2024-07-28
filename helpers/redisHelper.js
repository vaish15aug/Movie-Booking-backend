const redis = require('redis');
const client = redis.createClient(); // Use default settings

// Handle Redis connection errors
client.on('error', (err) => {
    console.error('Redis error:', err);
});

// Function to set a value in Redis
const setValue = (key, value, expiryInSeconds) => {
    return new Promise((resolve, reject) => {
        client.setex(key, expiryInSeconds, value, (err, reply) => {
            if (err) {
                return reject(err);
            }
            resolve(reply);
        });
    });
};

// Function to get a value from Redis
const getValue = (key) => {
    return new Promise((resolve, reject) => {
        client.get(key, (err, value) => {
            if (err) {
                return reject(err);
            }
            resolve(value);
        });
    });
};

module.exports = { setValue, getValue };