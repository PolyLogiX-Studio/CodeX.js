import { ChannelConfiguration } from './ChannelConfiguration';
export interface IAudioSample {
    readonly ChannelCount:number
     readonly Channels:ChannelConfiguration

    THIS(ch:number):number

     ToMono():MonoSample;

     ToStereo():StereoSample;

     ToQuad():QuadSample;

     ToSurround51():Surround51Sample;

    readonly AbsoluteAmplitude:number
}