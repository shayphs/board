import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';
import { setClassMetadata } from '@angular/core/src/r3_symbols';

export const FeedAnimations: {
  readonly inOutAnimation: AnimationTriggerMetadata;
} = {
  inOutAnimation: trigger('inOutAnimation', [
    transition(':enter', [style({ opacity: 0, transform: 'scale(0.6)' }), animate('0.75s ease-in', style({ opacity: 1, transform: 'scale(1)' }))]),
    transition(':leave', [style({ opacity: 1, transform: 'scale(1)' }), animate('0.75s ease-out', style({ opacity: 0, transform: 'scale(0.6)' }))])
  ])
};
