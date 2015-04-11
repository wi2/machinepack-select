module.exports = {

  friendlyName: 'TakeRight',
  description: 'Slice of array with n elements taken from the end',
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
        var end = inputs.collection.length - 1;
        if (Array.isArray(inputs.collection) && inputs.collection.length) {
          return inputs.collection.slice(end-inputs.num, end);
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
    var end = inputs.collection.length;
    return exits.success(inputs.collection.slice(end-inputs.num, end));
  },

};
