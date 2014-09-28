// Generated by CoffeeScript 1.8.0
(function() {
  var ByteBuffer, ProtoBuf, builder, hconstants, proto;

  ProtoBuf = require("protobufjs");

  ByteBuffer = require('protobufjs/node_modules/bytebuffer');

  hconstants = require('./hconstants');

  ProtoBuf.convertFieldsToCamelCase = true;

  builder = ProtoBuf.loadProtoFile("" + __dirname + "/../proto/ZooKeeper.proto");

  proto = builder.build();

  exports.decodeMeta = function(data) {
    var dataLength, dataOffset, len;
    if (data[0] !== hconstants.MAGIC) {
      return;
    }
    len = ByteBuffer.wrap(data).readInt32(1);
    dataLength = data.length - hconstants.MAGIC_SIZE - hconstants.ID_LENGTH_SIZE - len;
    dataOffset = hconstants.MAGIC_SIZE + hconstants.ID_LENGTH_SIZE + len;
    data = data.slice(dataOffset + 4, dataOffset + dataLength);
    return proto.MetaRegionServer.decode(data);
  };

}).call(this);