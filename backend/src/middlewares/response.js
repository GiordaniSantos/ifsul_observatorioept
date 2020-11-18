
const TYPE_JSON = 'application/json';

const STATUS_CODE_OK = 200;

const jsonOK = function(data, message, metadata) {

    message = (message) ? message : 'Succesful request.' ;
    metadata = (metadata) ? metadata : {} ;

    this.status(STATUS_CODE_OK);
    this.type(TYPE_JSON);
    return this.json({message, data, metadata, status: STATUS_CODE_OK });
}


const response = (req, res, next) => {

    res.jsonOK = jsonOK;

    next();
};

module.exports = response;