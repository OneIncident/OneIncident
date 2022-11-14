let secrets = require('./secrets');
module.exports = 
{
    "URI":`mongodb+srv://oneincident:${secrets.URI_KEY}@cluster0.hik164l.mongodb.net/incident?retryWrites=true&w=majority`
}