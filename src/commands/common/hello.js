module.exports.run = async(client, message, args) => {
    const gif_list = [
        'https://media.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy.gif',
        'https://media.giphy.com/media/Cmr1OMJ2FN0B2/giphy.gif',
        'https://media.giphy.com/media/4OBq5v6J4pgJuZ2Cnj/giphy.gif',
        'https://media.giphy.com/media/3o6ZtpxSZbQRRnwCKQ/giphy.gif',
        'https://media.giphy.com/media/kaIJGG8lNC3u5DM3tg/giphy.gif',
        'https://media.giphy.com/media/l44Qqz6gO6JiVV3pu/giphy.gif'
    ]
    // console.log(Math.floor(Math.random() * 6))
    message.channel.send(gif_list[Math.floor(Math.random() * 6)])
    message.delete()

}