import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Rate } from "tea-component";
import 'weui';

export default function WRate({
  events,
  ...props
}) {
  return (<Rate defaultValue={3} onChange={value => console.log(value)} />
  );
}

WRate.propTypes = {
  /**
   * 组件类型
   */
  type: PropTypes.oneOf(['primary', 'warn', 'default']),
  /**
   * 按钮大小
   */
  size: PropTypes.oneOf(['default', 'mini']),
  /**
   * 是否禁用
   */
  disabled: PropTypes.bool,

  /**
   * 加载中
   */
  loading: PropTypes.bool,

  /**
   * 镂空
   */
  plain: PropTypes.bool,

  /**
   * 按钮内容
   */
  text: PropTypes.string,

  /**
   * 低码平台注入的事件触发器
   */
  events: PropTypes.objectOf(PropTypes.func),
  className: PropTypes.string,
};

/**
 * 默认属性
 */
WRate.defaultProps = {
  type: 'primary',
  size: 'default',
};
