'use strict';

var React = require('react-native');
var merge = require('merge');

var { StyleSheet, requireNativeComponent, PropTypes, NativeModules } = React;

var RNChartView = requireNativeComponent('RNChartView', null);

var RNChart = React.createClass({

    render() {
        var nativeProps = merge(this.props, {
            style: this.props.style,
            chartData: this.props.chartData
        });

        return <RNChartView {... nativeProps} />
    }
});

var styles = StyleSheet.create({
});

module.exports = RNChart;
