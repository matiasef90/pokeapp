import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Pokemon extends Document {
  @Prop({
    index: true,
    unique: true,
  })
  name: string;
  @Prop({
    index: true,
    unique: true,
  })
  no: number;
}

export const SchemaPokemon = SchemaFactory.createForClass(Pokemon);
