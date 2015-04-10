module.exports = {

  friendlyName: 'First',
  description: 'Get the first elementement',
  extendedDescription: '',

  sync: true,

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
      "getExample": function(inputs, env, input) {
        if (Array.isArray(inputs.collection) && inputs.collection.length) {
          if (inputs.both)
            return {
              first: inputs.shift ? inputs.collection.shift() : inputs.collection[0],
              collection: inputs.collection
            };
          else
            return inputs.shift ? inputs.collection.shift() : inputs.collection[0]
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
    var first = inputs.shift ? inputs.collection.shift() : inputs.collection[0];
    if (inputs.both)
      return exits.success({
        first: first,
        collection: inputs.collection
      });
    else
      return exits.success(first);
  },

};
