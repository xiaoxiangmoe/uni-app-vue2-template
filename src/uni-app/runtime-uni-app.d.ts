/* eslint-disable */
import { BaseTransitionProps } from '@vue/runtime-core';
import { ComponentInternalInstance } from '@vue/runtime-core';
import { ComponentOptionsMixin } from '@vue/runtime-core';
import { ComponentOptionsWithArrayProps } from '@vue/runtime-core';
import { ComponentOptionsWithObjectProps } from '@vue/runtime-core';
import { ComponentOptionsWithoutProps } from '@vue/runtime-core';
import { ComponentPropsOptions } from '@vue/runtime-core';
import { ComponentPublicInstance } from '@vue/runtime-core';
import { ComputedOptions } from '@vue/runtime-core';
import { ConcreteComponent } from '@vue/runtime-core';
import { CreateAppFunction } from '@vue/runtime-core';
import { EmitsOptions } from '@vue/runtime-core';
import { ExtractPropTypes } from '@vue/runtime-core';
import { FunctionalComponent } from '@vue/runtime-core';
import { MethodOptions } from '@vue/runtime-core';
import { ObjectDirective } from '@vue/runtime-core';
import { RenderFunction } from '@vue/runtime-core';
import { RootHydrateFunction } from '@vue/runtime-core';
import { RootRenderFunction } from '@vue/runtime-core';
import { SetupContext } from '@vue/runtime-core';

declare const ANIMATION = 'animation';

declare type AssignerFn = (value: any) => void;

declare const BaseClass: {
  new (): HTMLElement;
  prototype: HTMLElement;
};

export declare const createApp: CreateAppFunction<Element>;

export declare const createSSRApp: CreateAppFunction<Element>;

export declare function defineCustomElement<Props, RawBindings = object>(
  setup: (props: Readonly<Props>, ctx: SetupContext) => RawBindings | RenderFunction,
): VueElementConstructor<Props>;

export declare function defineCustomElement<
  Props = {},
  RawBindings = {},
  D = {},
  C extends ComputedOptions = {},
  M extends MethodOptions = {},
  Mixin extends ComponentOptionsMixin = ComponentOptionsMixin,
  Extends extends ComponentOptionsMixin = ComponentOptionsMixin,
  E extends EmitsOptions = EmitsOptions,
  EE extends string = string,
>(
  options: ComponentOptionsWithoutProps<Props, RawBindings, D, C, M, Mixin, Extends, E, EE> & {
    styles?: string[];
  },
): VueElementConstructor<Props>;

export declare function defineCustomElement<
  PropNames extends string,
  RawBindings,
  D,
  C extends ComputedOptions = {},
  M extends MethodOptions = {},
  Mixin extends ComponentOptionsMixin = ComponentOptionsMixin,
  Extends extends ComponentOptionsMixin = ComponentOptionsMixin,
  E extends EmitsOptions = Record<string, any>,
  EE extends string = string,
>(
  options: ComponentOptionsWithArrayProps<PropNames, RawBindings, D, C, M, Mixin, Extends, E, EE> & {
    styles?: string[];
  },
): VueElementConstructor<{
  [K in PropNames]: any;
}>;

export declare function defineCustomElement<
  PropsOptions extends Readonly<ComponentPropsOptions>,
  RawBindings,
  D,
  C extends ComputedOptions = {},
  M extends MethodOptions = {},
  Mixin extends ComponentOptionsMixin = ComponentOptionsMixin,
  Extends extends ComponentOptionsMixin = ComponentOptionsMixin,
  E extends EmitsOptions = Record<string, any>,
  EE extends string = string,
>(
  options: ComponentOptionsWithObjectProps<PropsOptions, RawBindings, D, C, M, Mixin, Extends, E, EE> & {
    styles?: string[];
  },
): VueElementConstructor<ExtractPropTypes<PropsOptions>>;

export declare function defineCustomElement(options: {
  new (...args: any[]): ComponentPublicInstance;
}): VueElementConstructor;

export declare const defineSSRCustomElement: typeof defineCustomElement;

export declare const hydrate: RootHydrateFunction;

/* Excluded from this release type: initDirectivesForSSR */

declare type InnerComponentDef = ConcreteComponent & {
  styles?: string[];
};

declare type ModelDirective<T> = ObjectDirective<
  T & {
    _assign: AssignerFn;
  }
>;

export declare const render: RootRenderFunction<Element | ShadowRoot>;

declare const TRANSITION = 'transition';

export declare const Transition: FunctionalComponent<TransitionProps>;

export declare const TransitionGroup: new () => {
  $props: TransitionGroupProps;
};

export declare type TransitionGroupProps = Omit<TransitionProps, 'mode'> & {
  tag?: string;
  moveClass?: string;
};

export declare interface TransitionProps extends BaseTransitionProps<Element> {
  name?: string;
  type?: typeof TRANSITION | typeof ANIMATION;
  css?: boolean;
  duration?:
    | number
    | {
        enter: number;
        leave: number;
      };
  enterFromClass?: string;
  enterActiveClass?: string;
  enterToClass?: string;
  appearFromClass?: string;
  appearActiveClass?: string;
  appearToClass?: string;
  leaveFromClass?: string;
  leaveActiveClass?: string;
  leaveToClass?: string;
}

export declare function useCssModule(name?: string): Record<string, string>;

/**
 * Runtime helper for SFC's CSS variable injection feature.
 * @private
 */
export declare function useCssVars(getter: (ctx: any) => Record<string, string>): void;

export declare const vModelCheckbox: ModelDirective<HTMLInputElement>;

export declare const vModelDynamic: ObjectDirective<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

export declare const vModelRadio: ModelDirective<HTMLInputElement>;

export declare const vModelSelect: ModelDirective<HTMLSelectElement>;

export declare const vModelText: ModelDirective<HTMLInputElement | HTMLTextAreaElement>;

export declare const vShow: ObjectDirective<VShowElement>;

declare interface VShowElement extends HTMLElement {
  _vod: string;
}

export declare class VueElement extends BaseClass {
  private _def;
  private _props;
  /* Excluded from this release type: _instance */
  private _connected;
  private _resolved;
  private _numberProps;
  private _styles?;
  constructor(_def: InnerComponentDef, _props?: Record<string, any>, hydrate?: RootHydrateFunction);
  connectedCallback(): void;
  disconnectedCallback(): void;
  /**
   * resolve inner component definition (handle possible async component)
   */
  private _resolveDef;
  protected _setAttr(key: string): void;
  /* Excluded from this release type: _getProp */
  /* Excluded from this release type: _setProp */
  private _update;
  private _createVNode;
  private _applyStyles;
}

export declare type VueElementConstructor<P = {}> = {
  new (initialProps?: Record<string, any>): VueElement & P;
};

/**
 * @private
 */
export declare const withKeys: (fn: Function, modifiers: string[]) => (event: KeyboardEvent) => any;

/**
 * @private
 */
export declare const withModifiers: (fn: Function, modifiers: string[]) => (event: Event, ...args: unknown[]) => any;

export * from '@vue/runtime-core';

export {};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import type { UniAppCommonProps, UniAppEvents } from './uni-app-common-props-events';
import type { VNode } from '@vue/runtime-core';

type EventHandlers<E> = {
  [K in keyof E]?: E[K] extends Function ? E[K] : (payload: E[K]) => void;
};
export interface HTMLAttributes extends UniAppCommonProps, EventHandlers<Events> {}
export interface Events extends UniAppEvents {}

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass {
      $props: {};
    }
    interface ElementAttributesProperty {
      $props: {};
    }
    interface IntrinsicAttributes extends UniAppCommonProps {}

    interface IntrinsicElements {
      template: any;
      slot: any;
      component: any;
      block: any;
    }
  }
}
export {};
