const redis = require('redis');
const client = redis.createClient(); // Use default settings

// Handle Redis connection errors
client.on('error', (err) => {
    console.error('Redis error:', err);
});

client.connect();

// Function to set a value in Redis
const setValue = async (key, value, expiryInSeconds) => {
    await client.set(key, JSON.stringify(value), { EX:expiryInSeconds });
};

// Function to get a value from Redis
const getValue = async (key) => {
    const data = await client.get(key);
    const parsedData = JSON.parse(data);
    return parsedData;
};

module.exports = { setValue, getValue };