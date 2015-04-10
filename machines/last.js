module.exports = {


  friendlyName: 'Last',
  description: 'Get the last element',
  extendedDescription: '',

  sync: true,

  inputs: {
    "collection": {
      "friendlyName": "collection",
      "description": "A collection",
      "typeclass": "array",
      "required": true
    },
    "pop": {
      "friendlyName": "pop",
      "description": "A boolean to specify if use pop method",
      "example": true,
      "required": false,
      "defaultsTo": false,
      "type": "boolean",
      "name": "pop"
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
              last: inputs.pop ? inputs.collection.pop() : inputs.collection[inputs.collection.length-1],
              collection: inputs.collection
            };
          else
            return inputs.pop ? inputs.collection.pop() : inputs.collection[inputs.collection.length-1];
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
    var last = inputs.pop ? inputs.collection.pop() : inputs.collection[inputs.collection.length-1];
    if (inputs.both)
      return exits.success({
        last: last,
        collection: inputs.collection
      });
    else
      return exits.success(last);
  },

};
