module.exports = {

  friendlyName: 'Take',
  description: 'Slice of array with n elements taken from the start',
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
      "description": "A number of elements",
      "example": 2,
      "required": true
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
      "getExample": function(inputs, env, input) {
        if (Array.isArray(inputs.collection) && inputs.collection.length) {
          return inputs.collection.slice(inputs.start, inputs.end||null);
        }
      },
      "isDefault": true,
      "hasDynamicOutputType": true,
      "name": "success",
      "friendlyName": "success"
    },

  },

  fn: function (inputs,exits) {
    if (!Array.isArray(inputs.collection)) { return exits.error(); }
    else if (!inputs.collection.length) { return exits.emptyError(); }
    return exits.success(inputs.collection.slice(0, inputs.num));
  },

};
