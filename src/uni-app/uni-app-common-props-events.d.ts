// https://uniapp.dcloud.io/component/#%E5%85%AC%E5%85%B1%E5%B1%9E%E6%80%A7%E5%88%97%E8%A1%A8

export interface UniAppCommonProps {
  /**
   * 组件的唯一标示
   *
   * 一般用于获取组件上下文对象（如：VideoContext），需要保持整个页面唯一
   */
  id?: string;
  /**
   * 组件的样式类	在对应的 css 中定义的样式类
   */
  class?: string;
  /**
   * 组件的内联样式	可以动态设置的内联样式
   */
  style?: string;
  /**
   * 组件是否隐藏	所有组件默认是显示的
   */
  hidden?: boolean;

  ref?: any;
}

export interface UniAppEvents {
  onClick: MouseEvent;
}
