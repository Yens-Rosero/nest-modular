import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Brand } from './brand.entity';
@Schema()
export class Product extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ required: true, type: Number, index: true })
  price: number;

  @Prop({ type: Number })
  stock: number;

  @Prop({ required: true })
  image: string;

  @Prop(raw( { name: { type: String }, image: { type: String } }))
  category: Record<string, any>;

  @Prop({ type: Types.ObjectId , ref: Brand.name })
  brand: Brand | Types.ObjectId;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
ProductSchema.index({ price: 1, stock: -1 });
