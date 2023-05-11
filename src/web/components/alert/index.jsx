import * as React from 'react';
import * as PropTypes from 'prop-types';
import './index.css';
import 'weui';
import { Alert as TAlert } from 'tdesign-react';
import 'tdesign-react/es/style/index.css'; // 少量公共样式
import { Alert as TeaAlert } from 'tdesign-react';
import "tea-component/dist/tea.css";

export default function Alert({
  setting,
  events,
  ...props
}) {
  console.log(111,setting, 22, props, 333, events)
  return (
    <TeaAlert
      {...setting}
      {...events}
      {...props}
    >
      {/* <Icon type="warning" size="l" /> */}
      tea
    </TeaAlert>
  );
}

Alert.propTypes = {
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
Alert.defaultProps = {
  type: 'primary',
  size: 'default',
};
