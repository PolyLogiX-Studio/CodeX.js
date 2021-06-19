import type { List } from '@bombitmanbomb/utils/lib';
import type { IAssetVariantDescriptor } from '../lib/IAssetVariantDescriptor';
import type { IAssetMetadata } from './IAssetMetadata';
import { VersionComparison } from './VersionComparison';
export interface IAssetVariantDescriptorG<D, M extends IAssetMetadata> extends IAssetVariantDescriptor {
  GenerateLoadChain():List<D>
  GetBestAlternateChain(availableDescriptors:List<D>, variantFilter:((obj:D)=>boolean|null)):List<D>
  Equals(other:D, versionComparison:VersionComparison):boolean
  IsValidCloudVariant(metadata:M):boolean
}