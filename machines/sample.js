module.exports = {

  friendlyName: 'Sample',
  description: 'Get a random sample from the list',
  extendedDescription: '',

  sync: true,

  inputs: {
    "collection": {
      "friendlyName": "collection",
      "description": "A collection",
      "typeclass": "array",
      "required": true
    },
    "num": {
      "friendlyName": "num",
      "description": "A number of items",
      "example": 2,
      "required": true
    },
    "both": {
      "friendlyName": "both",
      "description": "A boolean to specify if we also return the array ",
      "example": true,
      "required": false,
      "defaultsTo": false,
      "type": "boolean",
      "name": "both"
    }
  },

  defaultExit: 'success',

  exits: {
    error: {
      description: 'Unexpected error occurred.',
    },
    emptyError: {
      description: 'Empty collection.',
    },
    success: {
      description: 'Done.',
      example: ['lorem ipsum', 5],
      "isDefault": true,
      "hasDynamicOutputType": true,
      "name": "success",
      "friendlyName": "success"
    }
  },

  fn: function (inputs,exits) {
    if (!Array.isArray(inputs.collection)) { return exits.error(); }
    else if (!inputs.collection.length) { return exits.emptyError(); }
    var rdm = Math.floor(Math.random() * ( inputs.collection.length - inputs.num ));
    var sample = inputs.collection.splice(rdm, inputs.num);

    if (inputs.both)
      return exits.success({
        sample: sample,
        collection: inputs.collection
      });
    else
      return exits.success(sample);
  },

};
