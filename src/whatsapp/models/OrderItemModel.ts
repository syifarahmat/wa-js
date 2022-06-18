/*!
 * Copyright 2021 WPPConnect Team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { OrderCollection } from '../collections';
import { exportProxyModel } from '../exportModule';
import {
  Model,
  ModelOptions,
  ModelPropertiesContructor,
  ModelProxy,
} from './Model';

interface Props {
  id?: any;
  price?: any;
  currency?: any;
  quantity?: any;
  thumbnailId?: any;
  thumbnailUrl?: any;
}

interface Session {
  stale?: any;
}

interface Derived {
  mediaData?: any;
}

/** @whatsapp 52822
 * @whatsapp 852822 >= 2.2222.8
 */
export declare interface OrderItemModel
  extends ModelProxy<Props, Session, Derived> {}

/** @whatsapp 52822
 * @whatsapp 852822 >= 2.2222.8
 */
export declare class OrderItemModel extends Model<OrderCollection> {
  constructor(
    proterties?: ModelPropertiesContructor<OrderItemModel>,
    options?: ModelOptions
  );
  getCollection(): OrderCollection;
}

exportProxyModel(exports, 'OrderItemModel');
