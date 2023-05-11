import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import './index.css';
import ReactEcharts from 'echarts-for-react'

export default function Echart({
  events,
  ...props
}) {
  console.log(222, events)
  const onEvents = {'click': function(param, echart ){ 
    events.onClick && events.onClick(param, echart)
  }}
  return (
    <ReactEcharts onEvents={onEvents} {...props}
    />
  );
}

Echart.propTypes = {
  /**
   * 组件类型
   */
  theme: PropTypes.oneOf(['dark', 'auto']),
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
Echart.defaultProps = {
  type: 'primary',
  size: 'default',
};
