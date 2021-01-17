import React from 'react';
import '../../App.css';
import Footer from "../Footer"
import { Grid, Image } from 'semantic-ui-react'

export default function About() {
  return <>
    <div className="contBox">
        <h2>ABOUT</h2>
        <p>2020年の1月からReactを中心にウェブ制作をしています</p>
        <p>2020年の6月から12月まで株式会社サンアスタリスクにインターンとして従事。</p>
        <p>コーディングやタスク管理、クライアントヒアリングを担当</p>
    </div>
    <div>
    <Grid divided='vertically'>
        <Grid.Row columns={2}>
            <Grid.Column>
                <Image className="aboutImage" src={`${process.env.PUBLIC_URL}/images/img-2.jpg`} size='medium' circular/>
            </Grid.Column>
            <Grid.Column>
                <p>鈴木　翔（スズキ　ツバサ）</p>
                <p>ADDRESS:福島県</p>
                <p>CONTACT:tsupasan36@gmail.com</p>
                <p>言語：PHP/Laravel/React/WordPress</p>
            </Grid.Column>
        </Grid.Row>
    </Grid>
    </div>
    <Footer />
  </>
}
