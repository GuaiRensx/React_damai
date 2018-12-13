import React, { Component } from 'react';
import axios from 'axios'
// import { Banner } from '../common/Banner.js';
import '../../styles/less/Top.less'


export class Top extends Component {
    render() {
        return <div className="header">
            <div className="city fl">
                <i className="iconfont icon-map"></i>
                <span>广州</span>
            </div>
            <div className="search fl">
                <div className="searchs">
                    <i className="iconfont icon-search"></i>
                    <span>搜索明星、演出比赛、场馆</span>
                </div>
            </div>
            <div className="my fl">
                <i className="iconfont icon-cc-user"></i>
            </div>
        </div>
    }
}