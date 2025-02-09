// Generated by protoc-gen-grpc-ts-web. DO NOT EDIT!
/* eslint-disable */
/* tslint:disable */

import * as jspb from 'google-protobuf';
import * as grpcWeb from 'grpc-web';

export declare namespace BuildInfo {
  export type AsObject = {
    version: string;
    commit: string;
  };
}

export class BuildInfo extends jspb.Message {
  private static repeatedFields_ = [];

  constructor(data?: jspb.Message.MessageArray) {
    super();
    jspb.Message.initialize(this, data || [], 0, -1, BuildInfo.repeatedFields_, null);
  }

  getVersion(): string {
    return jspb.Message.getFieldWithDefault(this, 1, '');
  }

  setVersion(value: string): void {
    (jspb.Message as any).setProto3StringField(this, 1, value);
  }

  getCommit(): string {
    return jspb.Message.getFieldWithDefault(this, 2, '');
  }

  setCommit(value: string): void {
    (jspb.Message as any).setProto3StringField(this, 2, value);
  }

  serializeBinary(): Uint8Array {
    const writer = new jspb.BinaryWriter();
    BuildInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  toObject(): BuildInfo.AsObject {
    let f: any;
    return {
      version: this.getVersion(),
      commit: this.getCommit(),
    };
  }

  static serializeBinaryToWriter(message: BuildInfo, writer: jspb.BinaryWriter): void {
    const field1 = message.getVersion();
    if (field1.length > 0) {
      writer.writeString(1, field1);
    }
    const field2 = message.getCommit();
    if (field2.length > 0) {
      writer.writeString(2, field2);
    }
  }

  static deserializeBinary(bytes: Uint8Array): BuildInfo {
    var reader = new jspb.BinaryReader(bytes);
    var message = new BuildInfo();
    return BuildInfo.deserializeBinaryFromReader(message, reader);
  }

  static deserializeBinaryFromReader(message: BuildInfo, reader: jspb.BinaryReader): BuildInfo {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      const field = reader.getFieldNumber();
      switch (field) {
        case 1:
          const field1 = reader.readString();
          message.setVersion(field1);
          break;
        case 2:
          const field2 = reader.readString();
          message.setCommit(field2);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return message;
  }
}

function BuildInfoFromObject(obj: BuildInfo.AsObject | undefined): BuildInfo | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const message = new BuildInfo();
  message.setVersion(obj.version);
  message.setCommit(obj.commit);
  return message;
}
