'use strict';

var React = require('react-native');

var { StyleSheet, requireNativeComponent, PropTypes, NativeModules } = React;

var RNChartView = requireNativeComponent('RNChartView', null);

var RNChart = React.createClass({

    render() {
        var nativeProps = Object.assign({},this.props);
        nativeProps.style = this.props.style;
        nativeProps.chartData = this.props.chartData;

        return <RNChartView {... nativeProps} />
    }
});

var styles = StyleSheet.create({
});

module.exports = RNChart;
