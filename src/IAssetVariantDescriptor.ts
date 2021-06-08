import { List } from "@bombitmanbomb/utils";
export interface IAssetVariantDescriptor {
	OriginalAsset: boolean;
	IsValid: boolean;
	VariantIdentifier: string;
	VariantVersion: number;
	EnsureCurrentVersion: void;
	GenerateLoadChain(chain: List<string>): void;
}
