export interface IAssetMetadata {
    AssetIdentifier: string;
    MetadataVersion: number;
    IsLatestVersion: boolean;
    CopyFrom(other: IAssetMetadata): void;
}
