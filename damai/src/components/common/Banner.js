import React, { Component } from 'react';
import axios from 'axios'
// import { Banner } from '../common/Banner.js';
import '../../styles/less/Banner.less'


export class Banner extends Component {
    constructor(){
        super();
        this.state={
            ad:[]
        }
    }
    componentWillMount(){
        axios.get('/ymtapi/home/api/getYHList?pageId=2027&pageIndex=0&pageSize=5&cookieId=&yid=&timeNow=2030031312',{
            params:{

            }
        }).then(res=>{
            console.log(res);
        })
    }
    render() {
        return <div className="banner">
            轮播图
        </div>
    }
}