const mqtt = require('mqtt');
const host = 'broker.emqx.io'
const port = '1883'
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`
const { addUserHistory } = require('../Service/historyServices')
const { getUser } = require('../Service/crudServices')
const { pool } = require('../Config/connectDb')

const connectUrl = `mqtt://${host}:${port}`
const client = mqtt.connect(connectUrl, {
    clientId,
    clean: true,
    connectTimeout: 4000,
    username: 'emqx',
    password: 'public',
    reconnectPeriod: 1000,
})




const autoHandleMqttRequest = () => {
    const topic = '/node/history';
    client.on('connect', () => {
        console.log('Connected')
        client.subscribe([topic], () => {
            console.log(`Subscribe to topic '${topic}'`)
        })
    })
    client.on('message', async (topic, payload) => {
        let IDCard = JSON.parse(payload.toString());
        let result = await getUser(IDCard.IDCard)
        if (result.data.length === 1) {
            addUserHistory(IDCard.IDCard).then(() => {
                client.publish('/node/data', JSON.stringify(result.data[0]), { qos: 0, retain: false }, (error) => {
                    if (error) {
                        console.error(error)
                    }
                })
            })
        }
        else {
            client.publish('/node/data', "Not Found Card", { qos: 0, retain: false }, (error) => {
                if (error) {
                    console.error(error)
                }
            })
        }

    })



}

module.exports = {
    client: client,
    autoHandleMqttRequest: autoHandleMqttRequest
}