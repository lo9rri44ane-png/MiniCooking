import type {RewardedAdPort} from './Session';
/** Explicit preview-only experience switch. Production rewarded ads are untouched. */
export const KitchenBuildFlags={testSkipBagAd:true};
export function rewardedBagPort(production:RewardedAdPort,test=KitchenBuildFlags.testSkipBagAd):RewardedAdPort{
 return test?{showRewardedAd:async()=>({ok:true,status:'completed',message:'测试版免广告体验'})}:production;
}
