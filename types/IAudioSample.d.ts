import { ChannelConfiguration } from './ChannelConfiguration';
export interface IAudioSample {
    readonly ChannelCount: number;
    readonly Channels: ChannelConfiguration;
    THIS(ch: number): number;
    ToMono(): unknown;
    ToStereo(): unknown;
    ToQuad(): unknown;
    ToSurround51(): unknown;
    readonly AbsoluteAmplitude: number;
}
