import React, { Component } from 'react';
import './sitemap.css';
import $ from 'jquery';

var jsonObj = require('xml-loader!./page-sitemap.xml');

export default class Sitemap extends Component {
  componentDidMount() {
    $('.header').addClass("hidePartial");
    $('.footer').addClass("hidePartial");
  }
  componentWillUnmount() {
    $('.header').removeClass("hidePartial");
    $('.footer').removeClass("hidePartial");
  }

  getPaths(str) {
    return (
      str.split("/").slice(-1)
    )
  }

  render() {
    return (
      <div className="main-content sitemap-content">
        <div className="sitemap-container mx-auto">
          <h3 className="font-weight-bold pb-0 mb-0">XML Sitemap</h3>
          <p className="light-text mt-0">This XML Sitemap contains {jsonObj.urlset.url.length} URLs.</p>
          <p className="light-text"><a href="/page-sitemap.xml">? Sitemap Index</a></p>
          <div className="table-responsive">
            <table className="table table-hover table-striped sitemap-table" cellPadding="3">
              <thead>
                <tr>
                  <th width="80%" className="headerSortDown ">URL</th>
                  <th width="5%" className="">Images</th>
                  <th title="Last Modification Time" className="">Last Mod.</th>
                </tr>
              </thead>

              {jsonObj.urlset.url.map((data, i) => {
                var path = this.getPaths(data.loc[0])
                if (i === 0) {
                  path = "/"
                }
                else {
                  path = "/" + path[0]
                }
                return (
                  <tbody key={i}>
                    <tr className="even" >
                      <td><a href={path}>{data.loc[0]}</a></td>
                      <td>0</td>
                      <td>2018-03-01 10:24 -07:00</td>
                    </tr>

                  </tbody>
                )
              })

              }

            </table>
          </div>
        </div>
      </div>

    )
  }
}