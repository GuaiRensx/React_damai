import React,{Component} from 'react';
// import { Banner } from '../common/Banner.js';
import { Top } from '../common/Top.js';
import { Banner } from '../common/Banner.js';


export class Home extends Component{
    render(){
        return <div className="index">
            <Top></Top>
            <Banner></Banner>
        </div>
    }
}