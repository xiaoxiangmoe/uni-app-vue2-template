/* eslint-disable */
import type { HTMLAttributes } from './runtime-uni-app';

interface ViewAttributes extends HTMLAttributes {
  /**
   * 指定按下去的样式类。 当 hover-class="none" 时，没有点击态效果
   * @default 'none'
   */
  'hover-class'?: string;
  /**
   * 指定是否阻止本节点的祖先节点出现点击态，App、H5、支付宝小程序、百度小程序不支持（支付宝小程序、百度小程序文档中都有此属性，实测未支持）
   * @default false
   */
  'hover-stop-propagation'?: boolean;
  /**
   * 按住后多久出现点击态，单位毫秒
   * @default 50
   */
  'hover-start-time'?: number;
  /**
   * 手指松开后点击态保留时间，单位毫秒
   * @default 400
   */
  'hover-stay-time'?: number;
}
export type ViewComponent = new () => { $props: ViewAttributes };

interface ImageAttributes extends HTMLAttributes {
  /**
   * 图片资源地址
   */
  src?: string;

  /**
   * 图片裁剪、缩放的模式
   *
   * @default 'scaleToFill'
   */
  mode?:
    | 'scaleToFill'
    | 'aspectFit'
    | 'aspectFill'
    | 'widthFix'
    | 'heightFix'
    | 'top'
    | 'bottom'
    | 'center'
    | 'left'
    | 'right'
    | 'top left'
    | 'top right'
    | 'bottom left'
    | 'bottom right';

  /**
   * 图片懒加载。只针对page与scroll-view下的image有效
   *
   * 平台差异说明: 微信小程序、百度小程序、字节跳动小程序、飞书小程序
   *
   * @default false
   */
  'lazy-load'?: boolean;
  /**
   * 图片显示动画效果
   *
   * 平台差异说明: 仅App-nvue 2.3.4+ Android有效
   *
   * @default true
   */
  'fade-show'?: boolean;
  /**
   * 默认不解析 webP 格式，只支持网络资源
   *
   * 平台差异说明: 微信小程序2.9.0+
   *
   * @default false
   */
  webp?: boolean;
  /**
   * 开启长按图片显示识别小程序码菜单
   *
   * 平台差异说明: 微信小程序2.7.0+
   *
   * @default false
   */
  'show-menu-by-longpress'?: boolean;
  /**
   * 是否能拖动图片
   *
   * 平台差异说明: H5 3.1.1+、App（iOS15+）有效
   *
   * @default true
   */
  draggable?: boolean;
  /**
   * 错误发生
   */
  onError?: (e: {
    detail: {
      errMsg: string;
    };
  }) => void;
  /**
   * 图片载入完毕
   */
  onLoad?: (e: {
    detail: {
      /**
       * 图片高度px
       */
      height: number;
      /**
       * 图片宽度px
       */
      width: number;
    };
  }) => void;
}
export type ImageComponent = new () => { $props: ImageAttributes };

interface TextAttributes extends HTMLAttributes {
  /**
   * 文本是否可选
   *
   * 平台差异说明: App、H5、快手小程序
   *
   * @default false
   */
  selectable?: boolean;
  /**
   * 文本是否可选
   *
   * 平台差异说明: 微信小程序
   *
   * @default false
   */
  'user-select'?: boolean;
  /**
   * 显示连续空格
   *
   * 平台差异说明: App、H5、微信小程序
   *
   * ---
   *
   * space 值说明:
   * | 值   | 说明  |
   * | --- | --- |
   * | ensp | 中文字符空格一半大小 |
   * | emsp | 中文字符空格大小 |
   * | nbsp | 根据字体设置的空格大小 |
   */
  space?: 'ensp' | 'emsp' | 'nbsp';
  /**
   * 是否解码
   *
   * 平台差异说明: App、H5、微信小程序
   *
   * @default false
   */
  decode?: boolean;
}
export type TextComponent = new () => { $props: TextAttributes };

export interface UniAppGlobalComponents {
  view: ViewComponent;
  image: ImageComponent;
  text: TextComponent;
}
