module.exports = {

  friendlyName: 'First',
  description: 'Get the first elementement',
  extendedDescription: '',

  inputs: {
    "collection": {
      "friendlyName": "collection",
      "description": "A collection",
      "typeclass": "array",
      "required": true
    },
    "shift": {
      "friendlyName": "shift",
      "description": "A boolean to specify if use shift method",
      "example": true,
      "required": false,
      "defaultsTo": false,
      "type": "boolean",
      "name": "shift"
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
          var first;
          if (inputs.shift) {
            first = inputs.collection.shift();
          } else {
            first = inputs.collection[0];
          }
          return {
            first: first,
            collection: inputs.collection
          };
        }
      },
      "isDefault": true,
      "hasDynamicOutputType": true,
      "name": "success",
      "friendlyName": "success"
    },

  },

  fn: function (inputs,exits) {
    if (!Array.isArray(inputs.collection)) {
      return exits.error();
    } else if (!inputs.collection.length) {
      return exits.emptyError();
    }
    var first;
    if (inputs.shift) {
      first = inputs.collection.shift();
    } else {
      first = inputs.collection[0];
    }
    return exits.success({
      first: first,
      collection: inputs.collection
    });
  },

};
